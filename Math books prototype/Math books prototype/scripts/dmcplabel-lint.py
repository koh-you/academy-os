#!/usr/bin/env python3
# -*- coding: utf-8 -*-
r"""dmcplabel-lint.py — DeeP Math 정리편 답지 Critical Point 정책 v2.0 자동 lint

세션 84 (2026-07-24) 신설. 세션 88 (2026-07-26) v1.1 F8 확장.
CP 정책 v2.0 자동 감지:
  --hcheck : 하한 조건 위반 (비-premium slot에 CP 존재) 감지
  --lang   : 언어 부자연 표현 감지 (label + body 스캔)
  기본     : 둘 다 실행

관련 정책:
  - memory/feedback_solution_cp_count.md v2.0 (§B 하한 3조건 · §C 부자연 표현 8유형)
  - scripts/multi-cp-detect.py (상한 · 슬롯당 1개)
  - scripts/dmanswer-lint.py (조판 A~S 18규칙)

CP 하한 조건 (다음 중 하나 이상 만족 시 CP 허용):
  1. star_premium: true (또는 verbatim_kichul: true 실전 슬롯)
  2. insight_type: 통찰형 AND depth: 3
  3. 마스터 특별 지시 (`% CP-master-override` 주석)

CP 언어 부자연 표현 (v2.0 §C · 8 유형 · v1.1 세션 88 F8 신설):
  - F1 폐기 용어: 정합·환원·해석·판정·정합화
  - F2 학술 문어체: 축약된다·정리된다·편입된다·부합한다
  - F3 수동태 문어: 결정된다·유도된다·짜인다·귀결된다
  - F4 추상 명사: 본질·핵심·요체·정수·핵심적
  - F5 압축 신조어: 저노출·비이웃·이식가능
  - F6 학술 접속어: ~에 부합·~로 축약·~로 편입
  - F7 격식 종결: ~이다 반복·~된다 반복
  - F8 수동 완결형 (v1.1 세션 88 신설): 얻어진다·구해진다·찾아진다·주어진다 → 능동 (얻는다·구한다·찾는다·둔다)

예외: "판별식"·"핵심"이 정당한 수학 용어 문맥은 whitelist.

사용
────
  python scripts/dmcplabel-lint.py --all                # 8권 모두 (기본 hcheck + lang)
  python scripts/dmcplabel-lint.py --all --hcheck       # 하한 조건만
  python scripts/dmcplabel-lint.py --all --lang         # 언어만
  python scripts/dmcplabel-lint.py <답지.tex>            # 특정 파일
  python scripts/dmcplabel-lint.py --all --report OUT.csv

Exit : 0 위반 없음 · 1 RED · 2 파일 오류
"""
from __future__ import annotations

import argparse
import csv
import re
import sys
from dataclasses import dataclass, field
from pathlib import Path

if sys.stdout.encoding and sys.stdout.encoding.lower() != "utf-8":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass

DEFAULT_DIR = Path("output/공통수학2/DeeP-Math-정리편")

# 🔴 2026-07-30 (세션 105) — 이 도구의 슬롯 파서는 정리편 섹션 헤더 전용이다.
#    시험지 답지(SIMULATOR 등)는 섹션 헤더가 없어 슬롯 0개 → CP 0건 → 공허한 RED 0.
#    parse_answer_slots() 에 \dmsoltitle 폴백이 들어갔다 (아래 참조).
#    파싱 결과가 0 슬롯이면 침묵하지 말고 경고한다.
DEFAULT_REPORT = Path("_scratch/dmcplabel-lint-report.csv")

# 파일명 → 청사진 매핑
BLUEPRINT_MAP = {
    "Deep Math Review Note 01-평면좌표-답지.tex":     "Deep Math Review Note 01-청사진.yaml",
    "Deep Math Review Note 02-직선-답지.tex":         "Deep Math Review Note 02-청사진.yaml",
    "Deep Math Review Note 03-원-답지.tex":           "Deep Math Review Note 03-청사진.yaml",
    "Deep Math Review Note 04-이동-답지.tex":         "Deep Math Review Note 04-청사진.yaml",
    "Deep Math Review Note 05-ST-집합명제-답지.tex":  "Deep Math Review Note 05-ST-청사진.yaml",
    "Deep Math Review Note 06-FN-함수-답지.tex":      "Deep Math Review Note 06-FN-청사진.yaml",
    "Deep Math Review Note 07-RF01-유리함수-답지.tex":"Deep Math Review Note 07-RF01-청사진.yaml",
    "Deep Math Review Note 08-RF02-무리함수-답지.tex":"Deep Math Review Note 08-RF02-청사진.yaml",
}

SECTION_TO_PREFIX = {
    "확인 문제":  "CHK",
    "Level 1":   "L1-",
    "Level 2":   "L2-",
    "Level 3":   "L3-",
    "실전 기출":  "R-",
}

# ─── v2.0 §C 부자연 표현 리스트 ─────────────────────────────────
# (표현, 유형, 대체 힌트) · 정당 수학 용어 문맥은 whitelist 로 예외
FORBIDDEN_TERMS = [
    # 폐기 용어 (F1)
    ("정합화",   "F1-폐기용어", "일치·맞춤"),
    ("정합",     "F1-폐기용어", "일치·맞음"),
    ("환원",     "F1-폐기용어", "간단히·되돌리기"),
    ("해석된다", "F1-폐기용어", "볼 수 있다·이해된다"),
    ("판정",     "F1-폐기용어", "확인·검산"),
    # 학술 문어체 (F2)
    ("축약된다", "F2-학술문어", "짧아진다·남는다"),
    ("편입된다", "F2-학술문어", "포함된다·들어간다"),
    ("부합한다", "F2-학술문어", "맞다·일치한다"),
    # 수동태 문어 (F3)
    ("결정된다", "F3-수동태문어", "정해진다"),
    ("유도된다", "F3-수동태문어", "이끌린다·나온다"),
    ("귀결된다", "F3-수동태문어", "이른다"),
    ("짜인다",   "F3-수동태문어", "만들어진다"),
    # 추상 명사 (F4) · "핵심"·"본질"은 문맥 whitelist 있음
    ("요체",     "F4-추상명사", "중심·중요한 점"),
    ("정수",     "F4-추상명사", "본질적인 내용"),  # 수학 정수(整数)와 구분
    ("핵심적",   "F4-추상명사", "중심의"),
    # 압축 신조어 (F5)
    ("저노출",   "F5-압축신조어", "잘 노출되지 않는"),
    ("비이웃",   "F5-압축신조어", "이웃하지 않는"),
    ("이식가능", "F5-압축신조어", "옮겨 쓸 수 있는"),
    # 학술 접속어 (F6)
    ("에 부합",  "F6-학술접속", "맞음"),
    ("로 축약",  "F6-학술접속", "짧아짐"),
    ("로 편입",  "F6-학술접속", "포함됨"),
    # 수동 완결형 (F8) · v1.1 세션 88 신설 · master 지적 계기
    # 자연스러워 보이지만 능동으로 다시 서술 가능 · 정리편 답지 서술 원칙 (능동 우선)
    ("얻어진다",  "F8-수동완결형", "얻는다·나온다·구한다"),
    ("구해진다",  "F8-수동완결형", "구한다·나온다·정해진다"),
    ("찾아진다",  "F8-수동완결형", "찾는다·정해진다"),
    ("주어진다",  "F8-수동완결형", "둔다·놓는다"),
]

# whitelist: 정당 수학 용어 문맥 · substring 매칭
WHITELIST_CONTEXT = {
    "정합":  ["부정합"],                                        # (거의 없음)
    "판정":  ["판별식", "판별", "판단"],                          # 판별식 문맥 (오탐 제외)
    "정수":  ["정수쌍", "정수 순서쌍", "정수해", "양의 정수",
              "음의 정수", "정수 부분", "정수 $", "정수$",
              # 🔴 2026-07-31 (세션 105) 추가 — 조사·활용형 열거로는 못 막는다.
              #   실제 오탐: "두 좌표가 모두 정수라는 점을 쓰면" (재현-1회-답지 Q15)
              #   위 8개 패턴 중 어느 것도 걸리지 않아 RED 로 보고됐다.
              "정수라", "정수인", "정수가", "정수를", "정수는", "정수로", "정수여", "정수일"],
    "환원":  [],                                                # 환원소·환원식 → 없음
}

# 🔴 동음이의 가드 (2026-07-31 세션 105)
#   「정수」는 精髓(추상명사)와 整數(수학)가 동음이의다. 조사 활용형을 아무리 열거해도
#   새 활용형이 나오면 또 오탐이 난다 — 열거는 원리적으로 못 막는다.
#   수학 답지에서 「정수」는 사실상 전부 整數 이므로, 문맥에 수학 신호가 있으면 건너뛴다.
#   精髓 로 쓰려면 앞에 소유격이 붙는다("~의 정수를 담은") — 그건 애초에 우리 금지 표현이라
#   이 가드가 놓쳐도 F1 폐기 용어·다른 검수 축에서 걸린다.
HOMONYM_GUARD = {
    "정수": [r"\$", "좌표", "해가", "값", "개수", "약수", "배수", "자연수", "실수", "유리수"],
}

# 격식 종결 반복 감지 (F7) · body 안 "~된다"·"~이다" ≥ 3회
FORMAL_CLOSING_RE = re.compile(r"[가-힣]+된다|[가-힣]+이다")
FORMAL_CLOSING_THRESHOLD = 3

# ─── 정규식 ─────────────────────────────────────────────────────
SOLTITLE_RE = re.compile(r"\\dmsoltitle\{(\d+)\}\{([^}]*)\}")
SECTION_RE = re.compile(r"\\dmsection(?:\[[^\]]*\])?\{([^}]*)\}")
CP_BLOCK_RE = re.compile(r"\\begin\{dmcriticalpoint\}(.*?)\\end\{dmcriticalpoint\}", re.DOTALL)
CPLABEL_RE = re.compile(r"\\dmcplabel\{([^}]*)\}")
CP_OVERRIDE_RE = re.compile(r"%\s*CP-master-override")

# ─── 청사진 slot 정보 정규식 (인라인 dict + 블록 dict 모두) ─────
BLUEPRINT_INLINE_SLOT_RE = re.compile(
    r"-\s*\{[^{}]*slot_id:\s*([A-Za-z0-9\-]+)[^{}]*(?:\{[^{}]*\}[^{}]*)*\}",
    re.MULTILINE,
)
# 블록 형태: 들여쓰기 + `- slot_id:` 로 시작
BLUEPRINT_BLOCK_SLOT_START_RE = re.compile(r"^\s*-\s+slot_id:\s*([A-Za-z0-9\-]+)", re.MULTILINE)


@dataclass
class Violation:
    file: str
    slot_id: str
    rule: str           # H (하한) · L (언어)
    subrule: str        # H1·H2·H3 · F1~F7
    severity: str       # RED · YELLOW
    line: int
    label: str
    body_snippet: str
    detail: str


@dataclass
class SlotMeta:
    slot_id: str
    target_star: int | None = None
    star_premium: bool = False
    insight_type: str | None = None
    depth: int | None = None
    verbatim_kichul: bool = False

    def allows_cp(self) -> tuple[bool, str]:
        """v2.0 §B 3 조건 검증. 반환: (허용여부, 근거)."""
        if self.star_premium:
            return True, "star_premium: true"
        if self.verbatim_kichul:
            return True, "verbatim_kichul: true (실전 원본)"
        if self.insight_type == "통찰형" and self.depth == 3:
            return True, "통찰형 · depth 3"
        # 부적격 근거
        reasons = []
        reasons.append(f"star_premium: {self.star_premium}")
        reasons.append(f"insight_type: {self.insight_type}")
        reasons.append(f"depth: {self.depth}")
        return False, " · ".join(reasons)


# ─── 청사진 파싱 ────────────────────────────────────────────────
def parse_blueprint(yaml_path: Path) -> dict[str, SlotMeta]:
    """청사진 YAML → {slot_id: SlotMeta}."""
    text = yaml_path.read_text(encoding="utf-8")
    slots: dict[str, SlotMeta] = {}

    # ─── 1) 인라인 dict 형태 파싱 ─────────────────
    for m in BLUEPRINT_INLINE_SLOT_RE.finditer(text):
        inline = m.group(0)
        slot_id = m.group(1)
        meta = SlotMeta(slot_id=slot_id)
        # target_star
        tm = re.search(r"target_star:\s*(\d+)", inline)
        if tm:
            meta.target_star = int(tm.group(1))
        # star_premium
        pm = re.search(r"star_premium:\s*(true|false)", inline)
        if pm:
            meta.star_premium = (pm.group(1) == "true")
        # verbatim_kichul
        vm = re.search(r"verbatim_kichul:\s*(true|false)", inline)
        if vm:
            meta.verbatim_kichul = (vm.group(1) == "true")
        # mechanism 안 insight_type · depth
        mech_m = re.search(r"mechanism:\s*\{([^{}]*)\}", inline)
        if mech_m:
            mech = mech_m.group(1)
            it = re.search(r"insight_type:\s*(\S+?)[,\}]", mech)
            if it:
                meta.insight_type = it.group(1).strip()
            dp = re.search(r"depth:\s*(\d+)", mech)
            if dp:
                meta.depth = int(dp.group(1))
        slots[slot_id] = meta

    # ─── 2) 블록 dict 형태 파싱 (인라인에서 미검출) ─
    # 블록 slot 은 여러 행에 걸침. slot_id 다음 다음 slot_id 또는 다음 최상위 키까지 스캔.
    lines = text.splitlines()
    block_positions = []
    for idx, line in enumerate(lines):
        m = re.match(r"^(\s*)-\s+slot_id:\s*([A-Za-z0-9\-]+)", line)
        if m:
            indent = len(m.group(1))
            block_positions.append((idx, indent, m.group(2)))

    for i, (start_idx, indent, slot_id) in enumerate(block_positions):
        if slot_id in slots and slots[slot_id].insight_type is not None:
            continue  # 인라인에서 이미 파싱됨 (완결)
        # 다음 slot 또는 들여쓰기 얕은 라인까지가 블록 범위
        end_idx = len(lines)
        for j in range(start_idx + 1, len(lines)):
            ln = lines[j]
            if not ln.strip():
                continue
            leading = len(ln) - len(ln.lstrip())
            if leading <= indent and (ln.lstrip().startswith("- ") or
                                       ln.lstrip().startswith("# ") or
                                       ":" in ln):
                if j > start_idx + 1:
                    end_idx = j
                    break
        block = "\n".join(lines[start_idx:end_idx])
        meta = slots.get(slot_id) or SlotMeta(slot_id=slot_id)
        tm = re.search(r"target_star:\s*(\d+)", block)
        if tm and meta.target_star is None:
            meta.target_star = int(tm.group(1))
        pm = re.search(r"star_premium:\s*(true|false)", block)
        if pm:
            meta.star_premium = (pm.group(1) == "true")
        vm = re.search(r"verbatim_kichul:\s*(true|false)", block)
        if vm:
            meta.verbatim_kichul = (vm.group(1) == "true")
        # mechanism 블록 또는 인라인
        mech_inline = re.search(r"mechanism:\s*\{([^{}]*)\}", block)
        if mech_inline:
            mech = mech_inline.group(1)
            it = re.search(r"insight_type:\s*(\S+?)[,\}]", mech)
            if it and meta.insight_type is None:
                meta.insight_type = it.group(1).strip()
            dp = re.search(r"depth:\s*(\d+)", mech)
            if dp and meta.depth is None:
                meta.depth = int(dp.group(1))
        else:
            # 블록 형태 mechanism
            it = re.search(r"insight_type:\s*(\S+)", block)
            if it and meta.insight_type is None:
                meta.insight_type = it.group(1).strip().rstrip(",")
            dp = re.search(r"depth:\s*(\d+)", block)
            if dp and meta.depth is None:
                meta.depth = int(dp.group(1))
        slots[slot_id] = meta

    return slots


# ─── 답지 tex 파싱: 슬롯·CP 매핑 ────────────────────────────────
def parse_answer_slots(tex_path: Path) -> list[tuple[str, int, list[tuple[str, str, int, bool]]]]:
    """
    반환: [(slot_id, soltitle_line, [(label, body, cp_line, has_override), ...]), ...]
    """
    text = tex_path.read_text(encoding="utf-8")
    lines = text.splitlines()

    # 섹션 시작 위치 스캔
    sections: list[tuple[int, str]] = []  # (line_idx, section_name)
    for idx, line in enumerate(lines):
        m = SECTION_RE.search(line)
        if m:
            name = m.group(1).strip()
            if name in SECTION_TO_PREFIX:
                sections.append((idx, name))

    # 슬롯 (\dmsoltitle) 스캔 · 섹션별 카운터
    entries: list[tuple[str, int, int]] = []  # (slot_id, line_no, char_pos)
    current_section: str | None = None
    section_counter: dict[str, int] = {}
    char_pos = 0
    # 🔴 2026-07-31 (세션 105) — 시험지 답지 폴백.
    #   종전에는 `if m and current_section:` 이라, \dmsection{...} 이 없으면 슬롯이 하나도
    #   기록되지 않고 → entries 가 비고 → CP 스캔 자체가 돌지 않아 **CP 0건**이 나왔다.
    #   \dmsection 은 정리편 전용 구조물이고 시험지 답지(회차-답지.tex)에는 없다.
    #   그래서 이 도구는 회차 답지에서 **한 번도 작동한 적이 없다** — 조용히 0건을 보고했다.
    #   섹션이 하나도 없으면 \dmsoltitle{N} 의 N 을 그대로 슬롯 번호로 쓴다.
    no_section_mode = len(sections) == 0
    for idx, line in enumerate(lines):
        # 현재 섹션 갱신
        for s_idx, s_name in sections:
            if s_idx == idx:
                current_section = s_name
                section_counter[s_name] = 0
        m = SOLTITLE_RE.search(line)
        if m and no_section_mode:
            # 시험지 답지: \dmsoltitle{12}{...} → 슬롯 Q12
            entries.append((f"Q{m.group(1)}", idx + 1, char_pos))
        elif m and current_section:
            section_counter[current_section] = section_counter.get(current_section, 0) + 1
            n = section_counter[current_section]
            prefix = SECTION_TO_PREFIX[current_section]
            slot_id = f"{prefix}{n}" if prefix.endswith("-") or prefix == "CHK" else f"{prefix}-{n}"
            # CHK 형식은 CHK{N} 그대로
            entries.append((slot_id, idx + 1, char_pos))
        char_pos += len(line) + 1

    # CP 블록 스캔 (전 텍스트 대상 · dot-all)
    result: list[tuple[str, int, list[tuple[str, str, int, bool]]]] = []
    for i, (slot_id, line_no, start_pos) in enumerate(entries):
        end_pos = entries[i + 1][2] if i + 1 < len(entries) else len(text)
        segment = text[start_pos:end_pos]

        cps = []
        for m in CP_BLOCK_RE.finditer(segment):
            inner = m.group(1)
            lbl_m = CPLABEL_RE.search(inner)
            label = lbl_m.group(1) if lbl_m else "(no label)"
            after = inner[lbl_m.end():] if lbl_m else inner
            body = after.strip().lstrip(':').strip()
            # cp line no
            cp_char = start_pos + m.start()
            cp_line = text.count("\n", 0, cp_char) + 1
            # override 주석 감지 (CP 블록 앞 3라인 이내)
            before_seg = text[max(0, cp_char - 300):cp_char]
            has_override = bool(CP_OVERRIDE_RE.search(before_seg))
            cps.append((label, body, cp_line, has_override))

        if cps:
            result.append((slot_id, line_no, cps))

    return result


# ─── 검수 실행 ──────────────────────────────────────────────────
def check_lower_bound(
    slots_with_cps: list[tuple[str, int, list[tuple[str, str, int, bool]]]],
    blueprint: dict[str, SlotMeta],
    file_name: str,
) -> list[Violation]:
    vs: list[Violation] = []
    for slot_id, sl_line, cps in slots_with_cps:
        meta = blueprint.get(slot_id)
        for (label, body, cp_line, override) in cps:
            if override:
                # 마스터 override 예외
                continue
            if meta is None:
                vs.append(Violation(
                    file=file_name, slot_id=slot_id, rule="H", subrule="H0-청사진 결여",
                    severity="YELLOW", line=cp_line, label=label,
                    body_snippet=body[:60],
                    detail=f"청사진에 {slot_id} 항목 없음 · 매핑 확인 필요",
                ))
                continue
            allowed, reason = meta.allows_cp()
            if not allowed:
                vs.append(Violation(
                    file=file_name, slot_id=slot_id, rule="H", subrule="H1-하한위반",
                    severity="RED", line=cp_line, label=label,
                    body_snippet=body[:60],
                    detail=f"CP 하한 조건 미충족 · {reason}",
                ))
    return vs


def check_language(
    slots_with_cps: list[tuple[str, int, list[tuple[str, str, int, bool]]]],
    file_name: str,
) -> list[Violation]:
    vs: list[Violation] = []
    for slot_id, sl_line, cps in slots_with_cps:
        for (label, body, cp_line, override) in cps:
            combined = f"{label} :: {body}"
            # F1~F6 term scan (whitelist 예외)
            for term, subrule, alt in FORBIDDEN_TERMS:
                if term not in combined:
                    continue
                # whitelist 문맥 확인
                wl_ctxs = WHITELIST_CONTEXT.get(term, [])
                is_whitelisted = False
                for wc in wl_ctxs:
                    if wc in combined:
                        is_whitelisted = True
                        break
                # 🔴 동음이의 가드 — 같은 문장에 수학 신호가 있으면 수학 용어로 본다
                if not is_whitelisted:
                    for pat in HOMONYM_GUARD.get(term, []):
                        if re.search(pat, combined):
                            is_whitelisted = True
                            break
                if is_whitelisted:
                    continue
                vs.append(Violation(
                    file=file_name, slot_id=slot_id, rule="L",
                    subrule=subrule, severity="RED", line=cp_line,
                    label=label, body_snippet=body[:60],
                    detail=f"부자연 표현 '{term}' → {alt}",
                ))
            # F7 격식 종결 반복
            closings = FORMAL_CLOSING_RE.findall(combined)
            if len(closings) >= FORMAL_CLOSING_THRESHOLD:
                vs.append(Violation(
                    file=file_name, slot_id=slot_id, rule="L",
                    subrule="F7-격식종결반복", severity="YELLOW", line=cp_line,
                    label=label, body_snippet=body[:60],
                    detail=f"~된다/~이다 반복 {len(closings)}회 · 종결 다양화 권장",
                ))
    return vs


# ─── 리포트 ─────────────────────────────────────────────────────
def write_report(violations: list[Violation], report: Path) -> None:
    report.parent.mkdir(parents=True, exist_ok=True)
    with report.open("w", encoding="utf-8", newline="") as f:
        w = csv.writer(f)
        w.writerow(["file", "slot_id", "rule", "subrule", "severity",
                    "line", "label", "body_snippet", "detail"])
        for v in violations:
            w.writerow([v.file, v.slot_id, v.rule, v.subrule, v.severity,
                        v.line, v.label[:80], v.body_snippet, v.detail])


def resolve_blueprint(tex_path: Path, dir_: Path) -> Path | None:
    """답지 tex → 청사진 YAML 경로."""
    fname = tex_path.name
    yaml_name = BLUEPRINT_MAP.get(fname)
    if yaml_name is None:
        return None
    return dir_ / yaml_name


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__.split("\n\n", 1)[0])
    ap.add_argument("targets", nargs="*", type=Path, help="특정 답지 tex 파일들")
    ap.add_argument("--all", action="store_true", help="정리편 답지 8권 모두")
    ap.add_argument("--dir", type=Path, default=DEFAULT_DIR)
    ap.add_argument("--hcheck", action="store_true", help="하한 조건만 (기본: 둘 다)")
    ap.add_argument("--lang", action="store_true", help="언어만 (기본: 둘 다)")
    ap.add_argument("--report", type=Path, default=DEFAULT_REPORT)
    ap.add_argument("--quiet", action="store_true", help="파일별 상세 출력 생략")
    args = ap.parse_args()

    # 모드 결정
    do_hcheck = args.hcheck or not (args.hcheck or args.lang)
    do_lang = args.lang or not (args.hcheck or args.lang)

    targets: list[Path] = list(args.targets)
    if args.all:
        for tex in sorted(args.dir.glob("*답지*.tex")):
            targets.append(tex)
    if not targets:
        print("⚠️  대상 파일 없음. --all 또는 파일 인자 필요.", file=sys.stderr)
        return 2

    modes = []
    if do_hcheck: modes.append("hcheck")
    if do_lang: modes.append("lang")
    print(f"🎯 대상 : {len(targets)} 파일 · 모드 : {'+'.join(modes)}")

    all_violations: list[Violation] = []
    for tex in targets:
        blueprint = {}
        if do_hcheck:
            yaml_path = resolve_blueprint(tex, args.dir)
            if yaml_path is None or not yaml_path.exists():
                print(f"⚠️  {tex.name}: 청사진 매핑 없음 → hcheck skip", file=sys.stderr)
            else:
                blueprint = parse_blueprint(yaml_path)

        slots = parse_answer_slots(tex)
        total_cps = sum(len(cps) for _, _, cps in slots)

        vs: list[Violation] = []
        if do_hcheck and blueprint:
            vs.extend(check_lower_bound(slots, blueprint, tex.name))
        if do_lang:
            vs.extend(check_language(slots, tex.name))

        red = sum(1 for v in vs if v.severity == "RED")
        yellow = sum(1 for v in vs if v.severity == "YELLOW")
        if not args.quiet:
            print(f"\n── {tex.name} · CP {total_cps}건 · RED {red} · YELLOW {yellow}")
            for v in vs[:30]:
                marker = "🔴" if v.severity == "RED" else "🟡"
                print(f"   {marker} L{v.line:>4} [{v.slot_id}] {v.subrule}: {v.detail}")
                print(f"      label: {v.label[:70]}")
            if len(vs) > 30:
                print(f"   ... (+{len(vs) - 30}건 생략 · CSV 참조)")
        all_violations.extend(vs)

    total_red = sum(1 for v in all_violations if v.severity == "RED")
    total_yellow = sum(1 for v in all_violations if v.severity == "YELLOW")

    print()
    print("=" * 100)
    print(f"📊 총 RED {total_red}건 · YELLOW {total_yellow}건")

    # 규칙별 요약
    rule_count: dict[str, dict[str, int]] = {}
    for v in all_violations:
        rule_count.setdefault(v.subrule, {"RED": 0, "YELLOW": 0})
        rule_count[v.subrule][v.severity] = rule_count[v.subrule].get(v.severity, 0) + 1
    if rule_count:
        print("\n    규칙별:")
        for rule in sorted(rule_count.keys()):
            cnt = rule_count[rule]
            print(f"       {rule:<20} RED {cnt.get('RED', 0):>3} · YELLOW {cnt.get('YELLOW', 0):>3}")

    write_report(all_violations, args.report)
    print(f"\n📝 리포트 : {args.report}")
    return 0 if total_red == 0 else 1


if __name__ == "__main__":
    sys.exit(main())
