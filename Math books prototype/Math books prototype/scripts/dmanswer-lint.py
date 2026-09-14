#!/usr/bin/env python3
# -*- coding: utf-8 -*-
r"""dmanswer-lint.py — DeeP Math 정리편 답지 조판 정책 자동 lint v1.0

세션 82 (2026-07-24) 신설. 답지 8권 (또는 지정 파일) 을 스캔하여 정책 위반 감지.

규칙 (A~R · 활성 영구 정책 계승) :

  A. 인접 수식 공백 (feedback_math_expression_spacing)
     `$X$을`, `$X$은` 등 조사 접합 → `$X$\ 을` 강제.
     검출 : `\$[^$]+\$[가-힣]` 패턴.
     정정 : `$...$X` → `$...$\ X`

  B. `\therefore` 앞 줄바꿈 (권장)
     `\therefore` 가 인라인 텍스트 중간에 있으면 YELLOW (마스터 검토).

  C. 쉼표 뒤 공백 강제 (feedback_math_expression_spacing 파생)
     `$X$,$Y$` → `$X$,\ $Y$`
     검출 : `\$,\$` 패턴. fix-adjacent-math-spacing 이 처리 가능.

  D. `\parallel` → `\mathbin{/\!/}` (교육과정 표기)
     `\parallel` 단독 사용 감지.

  E. 미적분Ⅱ 용어 (feedback_no_calc2_terms_cm2)
     매개변수·극한·미분·연속·발산·수렴 자연어 대체 필요.

  F. "부동점"·"자기역함수" 등 금지 표현 (feedback_forbidden_solution_terms)
     자기역함수·부동점·판정·등거리 → 자연어 대체.

  G. "환원"·"점화식"·"위로 볼록" (CM1·CM2 답지 스코프 밖)

  H. "정합"·"유효"·"Viète"·"살아남은" 등 관용 금지 표현

  I. "정수쌍" 표현 · "분자분모" 붙여쓰기 (feedback_forbidden_solution_terms)

  J. `\textbf` 사용 감지 (feedback_no_textbf_in_solutions)
     풀이 본문 굵은 글씨 금지.

  K. 집합 기호 침투 (평면좌표·직선·원·이동 4단원 스코프 벗어남)
     `\cup`·`\cap`·`\subset`·`\varnothing` 이 CM2-GM 4단원 답지에 있으면 RED.
     집합·명제 (05) 스코프는 예외.

  L. 신발끈·벡터 외적·행렬식 넓이 (feedback_shoelace_main_forbidden)
     `\dmothersolution` 밖에서 사용 금지.

  M. 외국 수학자 이름 (feedback_no_foreign_named_formula)
     헤론·피타고라스·페르마·오일러·신발끈 등 (교과 표준 도구로 대체).
     피타고라스는 CM2 표준 도구로 자유롭게 사용 가능 (제외).

  N. `\dmanswer{}` 내 서술 프리픽스 (feedback_answer_display_final_value_only)
     dmanswer-simplicity-check 로 별도 감지. 여기서는 skip.

  O. "여사건" 표현 (feedback_no_complement_event_term)
     확률 용어 CM1 밖. CM2 답지에서도 감지.

  P. "회전"·"회전행렬"·"주기적으로 회전" (feedback_no_rotation_terms)

  Q. "3원 순서쌍"·"비선형식" (feedback_no_triple_tuple)

  R. `\binom` 심볼 (feedback_no_binom_symbol)
     $_n\mathrm{C}_r$ 로 대체.

  S. \step / Step 헤더 (feedback_step_label_deprecated)

사용
────
  python scripts/dmanswer-lint.py --all                                 # 답지 8권 모두
  python scripts/dmanswer-lint.py <파일1.tex> [<파일2.tex> ...]
  python scripts/dmanswer-lint.py --all --auto-fix                      # 자동 정정 (A·C·D·R 안전 규칙만)
  python scripts/dmanswer-lint.py --all --report _scratch/dmanswer-lint-report.csv

Exit : 0 위반 없음 · 1 RED 있음 · 2 파일 오류
"""
from __future__ import annotations

import argparse
import csv
import re
import sys
from pathlib import Path
from dataclasses import dataclass, field

if sys.stdout.encoding.lower() != "utf-8":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass

DEFAULT_DIR = Path("output/공통수학2/DeeP-Math-정리편")
DEFAULT_REPORT = Path("_scratch/dmanswer-lint-report.csv")


@dataclass
class Violation:
    rule: str          # 규칙 코드 (A~R)
    severity: str      # RED · YELLOW
    line: int
    text: str          # 해당 라인 발췌
    detail: str        # 감지 상세
    fixable: bool = False
    fix_hint: str = ""


# ─── 규칙 A : 인접 수식-한글 조사 공백 ────────────────────────────
# `$..$` 다음에 한글 (조사·명사) 직접 접합 감지
RULE_A_RE = re.compile(r"(\$[^$]+\$)(?=[가-힣])")
# 이미 이스케이프 공백 뒤에 붙은 경우 예외: `$...$\ X` 는 정상. 위 정규식이 lookahead 로 `\` 나 공백 배제

# 규칙 C: `$..$,$..$` 붙어있는 케이스
RULE_C_RE = re.compile(r"\$,\$")

# 규칙 D: `\parallel` 단독 (mathbin 미사용)
RULE_D_RE = re.compile(r"\\parallel(?![a-zA-Z])")

# 규칙 J: `\textbf`
RULE_J_RE = re.compile(r"\\textbf\b")

# 규칙 R: `\binom`
RULE_R_RE = re.compile(r"\\binom\b")

# 규칙 S: `\step` 매크로 또는 "Step N"
RULE_S_RE = re.compile(r"\\step\b|\bStep\s+\d\b")

# 규칙 E: 미적분Ⅱ 용어 · CM2 답지에서 자연어 대체
CALC2_TERMS = [
    ("매개변수", "매개변수 표기 대신 문제 원문 그대로 옮기기"),
    ("연속함수", "연결된 · 이어지는"),
    ("극한", "가까워지는 값"),
    ("극한값", "가까워지는 값"),
    ("발산", "무한히 커진다"),
    ("수렴", "가까워진다"),
    ("도함수", "기울기 함수"),
    ("미분", "기울기"),
    ("적분", "누적"),
    ("사잇값 정리", "중간값 정리 (CM2 정규 표기)"),
]

# 규칙 F: 금지 표현 (본문 우회 표현)
FORBIDDEN_TERMS = [
    ("부동점", "고정된 점 · 자기 자신으로 대응되는 점"),
    ("자기역함수", "$f^{-1} = f$ 인 함수 · 원래 함수와 역함수가 같은"),
    ("판정", "자연어 (예: 확인·검산)"),
    ("등거리", "거리가 같은"),
    ("살아남은", "남은"),
    ("정수쌍", "정수 두 개 · 정수 순서쌍"),
    ("분자분모", "분자와 분모"),
    ("정합", "일관성·정합성 대신 자연어"),
    ("Viète", "근과 계수의 관계"),
    ("환원", "간단히 하여"),
    ("점화식", "이웃 항의 관계식"),
    ("위로 볼록", "CM2 스코프 밖 · 자연어 대체"),
    ("아래로 볼록", "CM2 스코프 밖 · 자연어 대체"),
]

# 규칙 H: formal 어구 5종 금지 (feedback_no_formal_soltitle_terms)
# 주의 : "정점" 은 학생 zone formal 어구 (예: "정점 도달") 이면 RED 이지만
#        "고정된 점 = 정점" 수학 용어로도 쓰임 → 인접어 검사
FORMAL_TERMS_SOLTITLE = ["역산", "항등성", "해석"]
# "판정"은 F 규칙 (금지 표현) 에서도 잡음 → 여기서 중복 skip
# "정점" 은 조합 검사 (예: "정점 도달"·"정점에 이르는" 이면 RED)
FORMAL_JEONGJEOM_PATTERNS = [
    re.compile(r"정점\s*도달"),
    re.compile(r"정점에\s*이르"),
    re.compile(r"정점\s*수준"),
]

# 규칙 K: 집합 기호 (평면좌표·직선·원·이동 4단원 스코프 밖)
SET_SYMBOLS_RE = re.compile(r"\\cup\b|\\cap\b|\\subset\b|\\subseteq\b|\\varnothing\b|\\emptyset\b")

# 규칙 L: 신발끈 관련
SHOELACE_TERMS_RE = re.compile(r"신발끈|신발 끈|Shoelace|벡터 외적|\\det|삼각형.*행렬식")

# 규칙 M: 외국 수학자 (피타고라스는 제외 · CM2 표준)
FOREIGN_NAMES_RE = re.compile(r"헤론|페르마|Fermat|오일러|Euler|카르다노|Cardano|Ptolemy|프톨레마이오스|Ceva|체바|Menelaus|메넬라우스|Fagnano|파냐노")

# 규칙 O: 여사건
RULE_O_RE = re.compile(r"여사건")

# 규칙 P: 회전·회전행렬
RULE_P_RE = re.compile(r"회전행렬|회전 각도|회전 방향|회전\s*변환")

# 규칙 Q: 3원 순서쌍·비선형식
RULE_Q_RE = re.compile(r"3원\s*순서쌍|3\s*원\s*순서쌍|비선형식|비선형 방정식")

# 규칙 B: `\therefore` 인라인 (행 시작이 아닌 경우) YELLOW
# 🔴 2026-07-30 세션 104 마스터 결정으로 **답지 시리즈 적용 제외** (아래 적용부 주석 참조).
#    본 린터는 답지 전용이므로 사실상 비활성. 타 시리즈 전용 린터가 생기면 True 로 되살린다.
RULE_B_ENABLED = False
RULE_B_RE = re.compile(r"[^\s\\](\s*)\\therefore\b")


def scope_of(path: Path) -> str:
    """파일 basename → 스코프 (`gm-4단원` · `st` · `fn` · `rf` · other).
    집합 기호 검수 예외를 위해."""
    name = path.stem.lower()
    if "평면좌표" in path.stem or "직선" in path.stem or "원" in path.stem or "이동" in path.stem:
        return "gm4"
    if "st" in name and "집합명제" in path.stem:
        return "st"
    if "fn" in name and "함수" in path.stem:
        return "fn"
    if "rf" in name or "유리함수" in path.stem or "무리함수" in path.stem:
        return "rf"
    return "other"


def lint_file(tex_path: Path, auto_fix: bool = False) -> tuple[list[Violation], int]:
    """반환 : (violations 리스트, 자동 정정 건수)."""
    try:
        content = tex_path.read_text(encoding="utf-8")
    except Exception as e:
        return [Violation("READ", "RED", 0, "", f"파일 읽기 실패: {e}")], 0

    lines = content.splitlines()
    scope = scope_of(tex_path)
    violations: list[Violation] = []

    for i, line in enumerate(lines, start=1):
        # 주석 라인 skip (% 로 시작)
        stripped = line.lstrip()
        if stripped.startswith("%"):
            continue
        # 라인에서 % 이후 주석 제거 (인라인 주석) — 단순히 %가 있으면 그 앞만
        # 하지만 `\%` 는 이스케이프이므로 조심. 간단히 인라인 주석은 무시하지 않고 그대로 검사.

        # 규칙 A : 수식-한글 조사 접합
        for m in RULE_A_RE.finditer(line):
            # 수식 뒤 한글이 붙어있는 위치
            pos = m.end()
            if pos < len(line):
                nxt = line[pos:pos+3]
                violations.append(Violation(
                    "A", "RED", i, line.strip()[:80],
                    f"수식 뒤 한글 접합: '{m.group(1)[-6:]}{nxt}'",
                    fixable=True,
                    fix_hint=r"$..$ 다음 한글 앞에 \ 삽입",
                ))

        # 규칙 C : `$,$` 붙어있음
        if RULE_C_RE.search(line):
            violations.append(Violation(
                "C", "RED", i, line.strip()[:80],
                "$..$,$..$ 붙어있음 · fix-adjacent-math-spacing 필요",
                fixable=True,
            ))

        # 규칙 D : `\parallel`
        if RULE_D_RE.search(line):
            violations.append(Violation(
                "D", "YELLOW", i, line.strip()[:80],
                r"\parallel → \mathbin{/\!/} 권장",
                fixable=True,
            ))

        # 규칙 J : \textbf (풀이 본문 금지)
        # \dmanswerbox 안 · quickgrid 안은 예외 감지 어려우므로 YELLOW
        if RULE_J_RE.search(line):
            violations.append(Violation(
                "J", "YELLOW", i, line.strip()[:80],
                r"\textbf 감지 · 풀이 본문이면 RED (수동 검토)",
            ))

        # 규칙 R : \binom
        if RULE_R_RE.search(line):
            violations.append(Violation(
                "R", "RED", i, line.strip()[:80],
                r"\binom → {}_n\mathrm{C}_r 표기 필수",
                fixable=True,
            ))

        # 규칙 S : \step / Step
        if RULE_S_RE.search(line):
            violations.append(Violation(
                "S", "RED", i, line.strip()[:80],
                r"\step / Step N 헤더 폐지",
            ))

        # 규칙 E : 미적분Ⅱ 용어
        for term, alt in CALC2_TERMS:
            if term in line:
                # 사잇값 정리는 CM2 정규 → skip
                if term == "사잇값 정리":
                    continue
                # "연속함수"·"미분"·"극한" 등은 자연어 대체
                violations.append(Violation(
                    "E", "RED", i, line.strip()[:80],
                    f"미적분Ⅱ 용어 '{term}' → {alt}",
                ))

        # 규칙 F : 금지 표현
        for term, alt in FORBIDDEN_TERMS:
            if term in line:
                violations.append(Violation(
                    "F", "RED", i, line.strip()[:80],
                    f"금지 표현 '{term}' → {alt}",
                ))

        # 규칙 H : soltitle 안 formal 어구
        # \dmsoltitle{N}{제목} 감지
        m_st = re.search(r"\\dmsoltitle\{[^}]*\}\{([^}]*)\}", line)
        if m_st:
            title = m_st.group(1)
            for ft in FORMAL_TERMS_SOLTITLE:
                if ft in title:
                    violations.append(Violation(
                        "H", "RED", i, line.strip()[:80],
                        f"soltitle 안 formal 어구 '{ft}' → 학생 zone RED",
                    ))
            for pat in FORMAL_JEONGJEOM_PATTERNS:
                if pat.search(title):
                    violations.append(Violation(
                        "H", "RED", i, line.strip()[:80],
                        f"soltitle 안 '정점 도달' 계열 formal 어구",
                    ))

        # 규칙 K : 집합 기호 · gm4 스코프에서만 RED
        if scope == "gm4":
            m_set = SET_SYMBOLS_RE.search(line)
            if m_set:
                violations.append(Violation(
                    "K", "YELLOW", i, line.strip()[:80],
                    f"집합 기호 '{m_set.group()}' · GM 스코프 밖 (ST 단원 표준)",
                ))

        # 규칙 L : 신발끈
        if SHOELACE_TERMS_RE.search(line):
            # \dmothersolution 안이면 GREEN이지만 라인 단위론 판정 어려움 → YELLOW
            violations.append(Violation(
                "L", "YELLOW", i, line.strip()[:80],
                r"신발끈·외적·행렬식 넓이 감지 · \dmothersolution 안이 아니면 RED",
            ))

        # 규칙 M : 외국 수학자
        m_for = FOREIGN_NAMES_RE.search(line)
        if m_for:
            violations.append(Violation(
                "M", "RED", i, line.strip()[:80],
                f"외국 수학자 이름 '{m_for.group()}' · 교과 표준 도구로 대체",
            ))

        # 규칙 O : 여사건
        if RULE_O_RE.search(line):
            violations.append(Violation(
                "O", "RED", i, line.strip()[:80],
                "여사건 표현 · 확률 CM1 밖 · 자연어 대체",
            ))

        # 규칙 P : 회전
        if RULE_P_RE.search(line):
            violations.append(Violation(
                "P", "RED", i, line.strip()[:80],
                "회전·회전행렬 · CM1 폐기 · 주기성만",
            ))

        # 규칙 Q : 3원 순서쌍·비선형식
        if RULE_Q_RE.search(line):
            violations.append(Violation(
                "Q", "RED", i, line.strip()[:80],
                "3원 순서쌍·비선형식 표현 금지",
            ))

        # 규칙 B : \therefore 인라인 — 🔴 답지 시리즈 적용 제외 (2026-07-30 세션 104 마스터 결정)
        #
        # 사유: 답지의 `... 이므로 $\therefore\ 4$\ 개.` 형태는 직전 계산과 한 문장으로
        #       이어진 결구다. 새 줄로 떼면
        #         · [[feedback_step_display_then_text_forbidden]] 위반
        #         · S1 원자 압축(1:1 매칭) 파괴 · 문단 수 증가로 페이지 배치 흔들림
        #       또한 S3 접속어 팔레트가 "결론 이월 = $\therefore$ (짧게)"를 **권장 어구로
        #       명시**하고 있어, 인라인 사용은 정책상 정상 용법이다.
        #       규약끼리 상충하며 이 경우 서술 규약이 우선한다는 마스터 판정.
        #
        # 규칙 자체는 코드에 보존한다 (타 시리즈에서 되살릴 수 있도록).
        if RULE_B_ENABLED and RULE_B_RE.search(line):
            violations.append(Violation(
                "B", "YELLOW", i, line.strip()[:80],
                r"\therefore 인라인 · 새 줄 권장",
            ))

    # ─── 자동 정정 ───────────────────────────────────────────
    fixed_count = 0
    if auto_fix:
        new_content = content

        # A·C 정정 : 인접 수식 공백 (fix-adjacent-math-spacing 와 동일 로직)
        # 규칙 A : `$X$` 뒤 한글 → `$X$\ 한글`
        pat_a = re.compile(r"(\$[^$]+\$)(?=[가-힣])")
        new_content, n_a = pat_a.subn(r"\1\\ ", new_content)
        fixed_count += n_a

        # 규칙 C : `$,$` → `$,\ $`
        pat_c = re.compile(r"\$,\$")
        new_content, n_c = pat_c.subn(r"$,\\ $", new_content)
        fixed_count += n_c

        # 규칙 D : `\parallel` → `\mathbin{/\!/}`
        pat_d = re.compile(r"\\parallel(?![a-zA-Z])")
        new_content, n_d = pat_d.subn(r"\\mathbin{/\\!/}", new_content)
        fixed_count += n_d

        # 규칙 R : `\binom{n}{r}` → `{}_{n}\mathrm{C}_{r}`
        pat_r = re.compile(r"\\binom\{([^{}]+)\}\{([^{}]+)\}")
        new_content, n_r = pat_r.subn(r"{}_{\1}\\mathrm{C}_{\2}", new_content)
        fixed_count += n_r

        if fixed_count > 0:
            tex_path.write_text(new_content, encoding="utf-8")

    return violations, fixed_count


def write_report(all_results: list[tuple[Path, list[Violation]]], report: Path) -> None:
    report.parent.mkdir(parents=True, exist_ok=True)
    with report.open("w", encoding="utf-8", newline="") as f:
        w = csv.writer(f)
        w.writerow(["file", "line", "rule", "severity", "detail", "text_snippet", "fixable"])
        for path, vs in all_results:
            for v in vs:
                w.writerow([path.name, v.line, v.rule, v.severity, v.detail,
                            v.text[:100], v.fixable])


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__.split("\n\n", 1)[0])
    ap.add_argument("targets", nargs="*", type=Path, help="특정 tex 파일들")
    ap.add_argument("--all", action="store_true", help="정리편 답지 8권 모두")
    ap.add_argument("--dir", type=Path, default=DEFAULT_DIR)
    ap.add_argument("--auto-fix", action="store_true",
                    help="A·C·D·R 안전 규칙 자동 정정")
    ap.add_argument("--report", type=Path, default=DEFAULT_REPORT)
    ap.add_argument("--quiet", action="store_true", help="파일별 상세 출력 생략")
    args = ap.parse_args()

    targets: list[Path] = list(args.targets)
    if args.all:
        for tex in sorted(args.dir.glob("*답지*.tex")):
            targets.append(tex)
    if not targets:
        print("⚠️  대상 파일 없음. --all 또는 파일 인자 필요.", file=sys.stderr)
        return 2

    print(f"🎯 대상 : {len(targets)} 파일" + (" · auto-fix ON" if args.auto_fix else ""))

    all_results: list[tuple[Path, list[Violation]]] = []
    total_red = total_yellow = total_fixed = 0
    for tex in targets:
        vs, fixed = lint_file(tex, args.auto_fix)
        all_results.append((tex, vs))
        red = sum(1 for v in vs if v.severity == "RED")
        yellow = sum(1 for v in vs if v.severity == "YELLOW")
        total_red += red
        total_yellow += yellow
        total_fixed += fixed
        if not args.quiet:
            print(f"\n── {tex.name} · RED {red} · YELLOW {yellow}"
                  + (f" · 자동정정 {fixed}건" if args.auto_fix and fixed else ""))
            for v in vs[:30]:  # 파일당 최대 30건 표시
                marker = "🔴" if v.severity == "RED" else "🟡"
                print(f"   {marker} L{v.line:>4} [{v.rule}] {v.detail}")
            if len(vs) > 30:
                print(f"   ... (+{len(vs) - 30}건 생략 · CSV 참조)")

    print()
    print("=" * 100)
    print(f"📊 총 RED {total_red}건 · YELLOW {total_yellow}건"
          + (f" · 자동정정 {total_fixed}건" if args.auto_fix else ""))

    # 규칙별 요약
    rule_count: dict[str, dict[str, int]] = {}
    for _, vs in all_results:
        for v in vs:
            rule_count.setdefault(v.rule, {"RED": 0, "YELLOW": 0})
            rule_count[v.rule][v.severity] = rule_count[v.rule].get(v.severity, 0) + 1
    if rule_count:
        print("\n    규칙별 : | 규칙 | RED | YELLOW |")
        for rule in sorted(rule_count.keys()):
            cnt = rule_count[rule]
            print(f"           |  {rule}  | {cnt.get('RED', 0):>3} | {cnt.get('YELLOW', 0):>5}  |")

    write_report(all_results, args.report)
    print(f"\n📝 리포트 : {args.report}")
    return 0 if total_red == 0 else 1


if __name__ == "__main__":
    sys.exit(main())
