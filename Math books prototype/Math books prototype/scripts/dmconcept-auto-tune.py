#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""dmconcept-auto-tune.py — DeeP Math 정리편 개념박스 하단 여백 자동 튜닝 v2.3

세션 81 (2026-07-24) v1.0 · 세션 82 (2026-07-24) v2.0 · 세션 85 (2026-07-25) v2.2 · 세션 86 (2026-07-25) v2.3.

v2.3 개선안 (세션 86 · 실 넘침 감지)
────
  B1 (실 콘텐츠 하단 감지): measure() 가 box_top~footer 사이 전체 dark row 스캔.
                        박스 안팎 무관 · box_bot 초과하는 콘텐츠 (실 넘침) 감지.
                        이전 v2.2 는 라벤더 배경만 스캔 → box_bot 정상 · last_content 정상 →
                        실 넘침 (콘텐츠가 tcolorbox 밖으로 튀어나감) 감지 불가 결함.
                        02 c1·c2·c3 넘침 마스터 지적 계기 (세션 86 초입).
  B2 (content_overflow 별도 판정): shadow FP overflow (v2.2 5mm skip) 와 별개.
                                content_overflow = 실 콘텐츠 하단 > box_bot + 3mm (tolerance).
                                _classify() 에서 content_overflow=True 최우선 반환.
  B3 (last_content 재정의): box 안 last content 대신 실 콘텐츠 하단 사용.
                          단 margin = box_bot - min(real_content, box_bot) 으로 clamp.
매 파일 수정 후 1회 실행하면 모든 개념박스가 이상 하단 여백 (5~15mm, 약 1~3줄) 을
달성하도록 각 dmconcept 시작 직후의 튜닝 라인을 자동 조정.

v2.2 개선안 (세션 85 · 훼손 방지)
────
  A1 (이중 setlength 감지)      : parse_tex_concepts 가 begin+10줄 이내 모든 setlength 스캔.
                                다중(≥2) 라인 감지 시 마스터 수동 override 로 간주 · 편집 skip.
                                이전 v2.0 은 첫 매칭만 인식 → 마스터 override 라인(마지막)이 유효한데
                                auto-tune 은 dead 라인만 조정 → tune 무효화 결함 정정.
  A2 (MASTER-OVERRIDE 마커)     : `% MASTER-OVERRIDE` 주석 감지 시 편집 skip.
                                마스터 수동 조정 명시적 보호.
  A3 (shadow FP 방지)           : measure() 의 overflow 스캔에서 box_bot 아래 5mm 지역 제외.
                                dm-shadow (drop shadow) 가 dark row 로 오감지되어 verdict=overflow
                                → pk 하한까지 축소되며 콘텐츠 위 뭉침 훼손 발생. 07 유리함수 실측 증거.
  A4 (리포트 확장)              : master_override 상태 CSV/로그 표시.

v2.0 개선안 (세션 82 · 계승)
────
  P0-1 (8권 병렬)      : --parallel N. multiprocessing.Pool 로 최대 N 개 파일 동시 실행.
  P0-2 (초기값 예측)    : predict_initial_parskip. iteration 3~5 → 1~2회.
  P0-3 (loose 자동 해소): 상한 도달 후 잔여 loose 시 \\vspace{Nmm} 자동 삽입.

원리 (v1.0 계승)
────
  1) xelatex 2회 컴파일 → PDF 생성
  2) dmconcept-margin-scan 알고리즘 재사용 (배경 F5EEF8/FAF7F2 픽셀 스캔)
     → box_top_mm · box_bot_mm · last_content_mm · overflow 실측
  3) 하단 여백 = box_bot_mm − last_content_mm
  4) 판정 → parskip · linespread 이진 탐색
       overflow=True  → parskip -0.4mm · linespread -0.06 (대폭 축소)
       margin < 5mm   → parskip -0.2mm · linespread -0.03 (축소)
       5~15mm         → GREEN
       15~30mm        → parskip +0.2mm · linespread +0.03 (확대)
       > 30mm         → parskip +0.4mm · linespread +0.06 (대폭 확대)
  5) tex 파일 편집. 상한 도달 후 잔여 loose → \\vspace 자동 삽입.
  6) 각 파일당 최대 --max-iter 회.
  7) CSV 리포트.

사용
────
  python scripts/dmconcept-auto-tune.py --parallel 8              # 병렬
  python scripts/dmconcept-auto-tune.py --only 04                 # 단일
  python scripts/dmconcept-auto-tune.py --only 04 --dry-run
"""
from __future__ import annotations

import argparse
import csv
import multiprocessing as mp
import os
import re
import subprocess
import sys
import time
from dataclasses import dataclass, field
from pathlib import Path

import numpy as np
from PIL import Image

if sys.stdout.encoding.lower() != "utf-8":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass

# ─── 경로 및 상수 ────────────────────────────────────────────────
DEFAULT_DIR = Path("output/공통수학2/DeeP-Math-정리편")
DEFAULT_PNG_DIR = Path("_scratch/dmconcept-tune")
DEFAULT_REPORT = Path("_scratch/dmconcept-tune-report.csv")
TEMPLATES_DIR = Path("templates/DeeP-Math-v6")

PAGE_H_MM = 297.0
FOOTER_ZONE_TOP_MM = 275.0

ACCENT_CANDIDATES = [
    np.array([250, 247, 242], dtype=float),  # dm-paper FAF7F2 (v6.72+)
    np.array([245, 238, 248], dtype=float),  # dm-accent F5EEF8 (legacy)
]
ACCENT_DIST_MAX = 8.0

DARK_THRESHOLD = 180
CONTENT_ROW_MIN_DARK = 20

# 목표 여백 (마스터 지시 · 이상 5~15mm · 1~3줄)
TARGET_MARGIN_MIN = 5.0
TARGET_MARGIN_MAX = 15.0

# 이진 탐색 파라미터 범위
PARSKIP_MIN = 0.2
PARSKIP_MAX = 2.0
LINESPREAD_MIN = 1.04
LINESPREAD_MAX = 1.30

# 튜닝 delta (parskip · linespread 동시 조정)
DELTA_TABLE = {
    "overflow":   (-0.4, -0.06),
    "tight":      (-0.2, -0.03),
    "loose":      (+0.2, +0.03),
    "very_loose": (+0.4, +0.06),
}

# P0-3: loose 자동 해소용 \vspace 마커 (idempotent 편집 위한 태그)
VSPACE_MARKER_COMMENT = "% dmconcept-auto-tune vspace (v2.0)"
VSPACE_LINE_RE = re.compile(r"^\s*\\vspace\{(?P<vs>[0-9.]+)mm\}%\s*dmconcept-auto-tune vspace")

# A2 (v2.2 세션 85) : 마스터 수동 조정 명시 마커 · 감지 시 auto-tune skip
MASTER_OVERRIDE_MARKER = "MASTER-OVERRIDE"

# A3 (v2.2 세션 85) : dm-shadow (drop shadow) 오감지 방지 · box_bot 아래 5mm 지역을 overflow 스캔 제외
SHADOW_SKIP_MM = 5.0

# B2 (v2.3 세션 86) : 실 넘침 tolerance · shadow·rule 두께 감안 · 이보다 크면 실 넘침
CONTENT_OVERFLOW_TOLERANCE_MM = 3.0

# 튜닝 라인 스캔 범위 · 이전 v2.0 은 begin+6 이었으나 v2.2 에서 마스터 override 라인 (begin+4~7) 포함
TUNING_SCAN_LINES = 10

# 정규식 ────
DMCONCEPT_RE = re.compile(
    r"\\begin\{dmconcept\}(?:\[(?P<height>[^\]]+)\])?\{(?P<num>\d+)\}\{(?P<title>[^}]*)\}"
)
DMCONCEPT_END_RE = re.compile(r"\\end\{dmconcept\}")
NEWPAGE_RE = re.compile(r"\\newpage\b")
TUNING_RE = re.compile(
    r"\\setlength\{\\parskip\}\{(?P<pk>[0-9.]+)mm\s+plus\s+(?P<pkp>[0-9.]+)mm\s+minus\s+[0-9.]+mm\}"
    r"\\linespread\{(?P<ls>[0-9.]+)\}\\selectfont%?"
)
# A1 (v2.2 세션 85) : linespread 미포함 setlength 도 감지 · 마스터 override 스타일 (`\setlength{\parskip}{1.6mm...}%`) 대응
SETLEN_ANY_RE = re.compile(
    r"\\setlength\{\\parskip\}\{(?P<pk>[0-9.]+)mm\s+plus\s+(?P<pkp>[0-9.]+)mm\s+minus\s+[0-9.]+mm\}"
    r"(?:\\linespread\{(?P<ls>[0-9.]+)\})?"
)


@dataclass
class Concept:
    tex: Path
    pdf: Path
    basename: str
    concept_num: int
    concept_seq: int
    title: str
    begin_line: int
    end_line: int = 0
    tuning_line: int = 0
    vspace_line: int = 0
    vspace_mm: float = 0.0
    pdf_page: int = 1
    body_stats: dict = field(default_factory=dict)   # P0-2 : 콘텐츠 특징
    predicted_pk: float = 0.0
    predicted_ls: float = 0.0
    predicted_used: bool = False
    box_bot_mm: float = 0.0
    last_content_mm: float = 0.0
    bottom_margin_mm: float = 0.0
    overflow: bool = False
    parskip: float = 1.0
    linespread: float = 1.15
    verdict: str = ""
    iterations: int = 0
    history: list[tuple[float, float, float, bool]] = field(default_factory=list)
    # A1·A2 (v2.2 세션 85) : 다중 setlength 또는 MASTER-OVERRIDE 마커 감지 시 True → auto-tune skip
    master_override: bool = False
    setlen_count: int = 0  # 감지된 setlength\parskip 라인 수 (리포트용)
    # B1·B2 (v2.3 세션 86) : 실 콘텐츠 하단 (박스 안팎 무관) 및 실 넘침 (박스 초과)
    real_content_bottom_mm: float = 0.0
    content_overflow: bool = False
    content_overflow_mm: float = 0.0  # box_bot 초과량 (양수면 실 넘침)
    # C1 (v2.4 세션 88) : 재기술 대상 flag
    # very_loose OR vspace > 30mm 감지 시 True → concept-author 재편성 대상
    # 정책 근거: feedback_dmconcept_content_principle.md 원칙 6 (간격 아닌 실 콘텐츠)
    rewrite_candidate: bool = False


# ─── PDF 렌더 ────────────────────────────────────────────────
def render_page(pdf: Path, page: int, dpi: int, out_prefix: Path) -> Path:
    out_prefix.parent.mkdir(parents=True, exist_ok=True)
    subprocess.run(
        ["pdftoppm", "-f", str(page), "-l", str(page), "-r", str(dpi), "-png",
         str(pdf), str(out_prefix)],
        check=True, capture_output=True,
    )
    for cand in (
        out_prefix.with_name(f"{out_prefix.name}-{page}.png"),
        out_prefix.with_name(f"{out_prefix.name}-{page:02d}.png"),
        out_prefix.with_name(f"{out_prefix.name}-{page:03d}.png"),
    ):
        if cand.exists():
            return cand
    raise FileNotFoundError(f"pdftoppm 결과 PNG 못 찾음: {out_prefix}-{page}")


def measure(png: Path) -> tuple[float, float, float, bool, float, bool, float]:
    """
    Returns:
      box_bot_mm, last_content_mm, bottom_margin, overflow (shadow FP),
      real_content_bottom_mm, content_overflow (실 넘침), content_overflow_mm
    """
    img = Image.open(png).convert("RGB")
    arr = np.array(img).astype(float)
    h_px, w_px, _ = arr.shape
    mm_per_px = PAGE_H_MM / h_px

    concept_rows = np.array([], dtype=int)
    for accent in ACCENT_CANDIDATES:
        dist = np.sqrt(((arr - accent) ** 2).sum(axis=2))
        mask = dist < ACCENT_DIST_MAX
        row_count = mask.sum(axis=1)
        rows = np.where(row_count > w_px / 3)[0]
        if len(rows) > len(concept_rows):
            concept_rows = rows

    if len(concept_rows) < 20:
        return 0.0, 0.0, 0.0, False, 0.0, False, 0.0

    box_top_px = int(concept_rows[0])
    box_bot_px = int(concept_rows[-1])
    box_bot_mm = box_bot_px * mm_per_px

    gray = np.array(img.convert("L"))
    dark = gray < DARK_THRESHOLD
    dark_per_row = dark.sum(axis=1)
    is_content_row = dark_per_row >= CONTENT_ROW_MIN_DARK

    inside = is_content_row[box_top_px:box_bot_px + 1]
    inside_idx = np.where(inside)[0]
    if len(inside_idx) == 0:
        last_content_mm = box_top_px * mm_per_px
    else:
        last_content_mm = (box_top_px + inside_idx[-1]) * mm_per_px

    footer_px = int(round(FOOTER_ZONE_TOP_MM / mm_per_px))
    # A3 (v2.2 세션 85) : box_bot 아래 5mm 는 dm-shadow (drop shadow) 지역 → overflow 스캔 제외
    # 이전 v2.0 은 shadow 를 dark row 로 오감지 → verdict=overflow → pk 하한까지 축소 훼손
    shadow_skip_px = int(round(SHADOW_SKIP_MM / mm_per_px))
    of_start_px = box_bot_px + 1 + shadow_skip_px
    of_slice = is_content_row[of_start_px:footer_px] if of_start_px < footer_px else np.array([], dtype=bool)
    overflow = bool(np.any(of_slice))

    # B1·B2 (v2.3 세션 86) : 실 콘텐츠 하단 감지 · box_top~footer 사이 전체 dark row 스캔
    # 라벤더 배경 밖으로 튀어나간 콘텐츠 (실 넘침) 감지
    scan_end = min(footer_px, h_px)
    dark_in_range = is_content_row[box_top_px:scan_end]
    dark_indices = np.where(dark_in_range)[0]
    if len(dark_indices) == 0:
        real_content_bottom_mm = box_top_px * mm_per_px
    else:
        real_content_bottom_mm = (box_top_px + dark_indices[-1]) * mm_per_px

    # 실 넘침 : 실 콘텐츠 하단이 box_bot 을 초과 (tolerance 이상)
    content_overflow_mm = real_content_bottom_mm - box_bot_mm
    content_overflow = content_overflow_mm > CONTENT_OVERFLOW_TOLERANCE_MM

    bottom_margin = box_bot_mm - last_content_mm
    return (box_bot_mm, last_content_mm, bottom_margin, overflow,
            real_content_bottom_mm, content_overflow, content_overflow_mm)


# ─── tex 파싱 및 편집 ────────────────────────────────────────
def _analyze_body(lines: list[str], begin: int, end: int) -> dict:
    """P0-2 : 개념박스 콘텐츠 특징 추출 (begin·end 는 1-based)."""
    body = "\n".join(lines[begin:end - 1])  # begin~end 사이 (dmconcept 안)
    stats = {
        "n_dmsub":     len(re.findall(r"\\dmsub\b", body)),
        "n_dmexample": len(re.findall(r"\\begin\{dmexample\}", body)),
        "n_dmnote":    len(re.findall(r"\\begin\{dmnote\}", body)),
        "n_dmexplain": len(re.findall(r"\\begin\{dmexplain\}", body)),
        "n_itemize":   len(re.findall(r"\\begin\{itemize\}", body)),
        "n_equation":  len(re.findall(r"\\begin\{equation\*?\}", body)),
        "n_line":      end - begin - 1,
        # 문단 개수 (연속 빈 줄로 분리)
        "n_para":      max(1, len(re.split(r"\n\s*\n", body.strip()))),
        "n_char":      len(re.sub(r"[\s]", "", body)),  # 공백 제외 글자 수
    }
    return stats


def parse_tex_concepts(tex_path: Path) -> list[Concept]:
    """tex 파일에서 dmconcept 개념 목록 · 튜닝 라인 · vspace 라인 · 콘텐츠 통계 추출."""
    lines = tex_path.read_text(encoding="utf-8").splitlines()
    newpage_lines = [i for i, ln in enumerate(lines, start=1) if NEWPAGE_RE.search(ln)]
    # end 인덱스 찾기
    end_lines_1based: list[int] = []
    for i, ln in enumerate(lines, start=1):
        if DMCONCEPT_END_RE.search(ln):
            end_lines_1based.append(i)

    seq_by_num: dict[int, int] = {}
    concepts: list[Concept] = []
    pdf = tex_path.with_suffix(".pdf")
    base = _basename(tex_path)

    begin_1based: list[int] = []
    begin_meta: list[tuple[int, str]] = []  # (num, title)
    for i, ln in enumerate(lines, start=1):
        m = DMCONCEPT_RE.search(ln)
        if m:
            begin_1based.append(i)
            begin_meta.append((int(m.group("num")), m.group("title").strip()))

    for idx, (b, (num, title)) in enumerate(zip(begin_1based, begin_meta)):
        e = end_lines_1based[idx] if idx < len(end_lines_1based) else len(lines)
        seq_by_num[num] = seq_by_num.get(num, 0) + 1
        seq = seq_by_num[num]
        pdf_page = 1 + sum(1 for n in newpage_lines if n < b)

        c = Concept(
            tex=tex_path, pdf=pdf, basename=base,
            concept_num=num, concept_seq=seq, title=title,
            begin_line=b, end_line=e, pdf_page=pdf_page,
        )
        c.body_stats = _analyze_body(lines, b, e)

        # A1·A2 (v2.2 세션 85) : begin+10줄 이내 모든 setlength 스캔
        # · 다중(≥2) 감지 시 → 마스터 수동 override 로 간주 · 편집 skip
        # · MASTER-OVERRIDE 주석 마커 감지 시 → 편집 skip
        # · 마지막 setlength 라인이 LaTeX 실 유효값 (중복 setlength 는 뒤가 이김)
        scan_end = min(b + TUNING_SCAN_LINES, len(lines))
        master_marker_seen = False
        setlen_matches: list[tuple[int, float, float | None]] = []  # (line_no_1based, pk, ls | None)
        for j in range(b, scan_end):
            if MASTER_OVERRIDE_MARKER in lines[j]:
                master_marker_seen = True
            m2 = SETLEN_ANY_RE.search(lines[j])
            if m2:
                pk = float(m2.group("pk"))
                ls = float(m2.group("ls")) if m2.group("ls") else None
                setlen_matches.append((j + 1, pk, ls))

        c.setlen_count = len(setlen_matches)
        c.master_override = master_marker_seen or len(setlen_matches) >= 2

        if setlen_matches:
            # 마지막 라인이 실 유효값 · linespread 는 마지막 non-None 값 (없으면 기본 유지)
            last_line, last_pk, last_ls = setlen_matches[-1]
            c.tuning_line = last_line
            c.parskip = last_pk
            # linespread 는 뒤부터 non-None 첫 매칭
            for _l, _pk, _ls in reversed(setlen_matches):
                if _ls is not None:
                    c.linespread = _ls
                    break
        # vspace 라인 탐색 : end 앞 3줄 이내 (역방향)
        for j in range(max(e - 4, 0), e - 1):
            m3 = VSPACE_LINE_RE.match(lines[j])
            if m3:
                c.vspace_line = j + 1
                c.vspace_mm = float(m3.group("vs"))
                break
        concepts.append(c)
    return concepts


# ─── P0-2 : 초기값 예측 ─────────────────────────────────────────
def predict_initial_parskip(stats: dict) -> tuple[float, float, str]:
    """콘텐츠 특징 → 초기 parskip·linespread 예측.
    학습 데이터 : 세션 81 8권 22 개념박스 실측 (평균값 기반 규칙).

    개념박스는 고정 높이 (dm-editorial ~230mm) · 콘텐츠는 그 안에 들어감.
    parskip·linespread ↑ → 문단·행간 넓어져 하단 여백 축소 (콘텐츠가 아래로 밀림).
    parskip·linespread ↓ → 문단·행간 좁아져 하단 여백 확대.

    관측 실측 (세션 81 재현) :
      01-평면좌표 c1 (chars=1563, env=5)  → pk=1.50 ls=1.21 (loose 17.6mm 잔여 · 상한 근접)
      01-평면좌표 c2 (chars=1754, env=4)  → pk=2.00 ls=1.30 (loose 19.8mm · 상한 도달)
      01-평면좌표 c2s2 (chars=1409, env=2) → pk=1.00 ls=1.15 (OK 10.8mm)
      01-평면좌표 c3 (chars=1626, env=2)  → pk=2.00 ls=1.30 (loose 21.2mm · 상한 도달)
      05-ST c1 (밀도 매우 높음)          → pk=1.10 ls=1.19 (OK 9.3mm)
      05-ST c2 (밀도 매우 높음)          → pk=1.00 ls=1.15 (OK 10.7mm)
      05-ST c3 (넘침)                   → pk=0.50 ls=1.10 (OK 7.6mm)

    회귀 규칙 (chars = 공백 제외 · env = dmexample+dmnote+dmexplain 개수) :
      실측 학습 : 세션 81 8권 22 개념박스 최종값 회귀.
        01-평면좌표 c1  chars=1563 env=5 sub=3 → final pk=1.50 (loose 17mm 잔여)
        01-평면좌표 c2  chars=1754 env=4 sub=2 → final pk=2.00 (loose 20mm · 상한)
        01-평면좌표 c2s2 chars=1409 env=2 sub=3 → final pk=1.00 (OK)
        01-평면좌표 c3  chars=1626 env=2 sub=3 → final pk=2.00 (loose 21mm · 상한)
        05-ST c1                              → final pk=1.10 (OK)
        05-ST c2                              → final pk=1.00 (OK)
        05-ST c3 (넘침)                       → final pk=0.50 (OK)

      키 관측 : env 많을수록 자체 여백 여유 → OUTER 여백 커짐 → 큰 pk 필요 (더 밀어야 채움).
      chars 많을수록 이미 아래로 밀림 → 작은 pk 필요.
      → density_A = chars − env * 100 (env 자체 여백은 chars 를 상쇄)

      density_A > 1600 (텍스트 지배·env 소수) → pk=0.6 ls=1.11
      1200~1600                              → pk=1.0 ls=1.16
      800~1200                               → pk=1.4 ls=1.20
      400~800                                → pk=1.7 ls=1.24
      < 400 (희박)                            → pk=1.9 ls=1.28
    """
    chars = stats.get("n_char", 0)
    n_env = stats.get("n_dmexample", 0) + stats.get("n_dmnote", 0) + stats.get("n_dmexplain", 0)
    n_sub = stats.get("n_dmsub", 0)

    # density_A : 텍스트 - env 자체 여백 (env 는 실제로 outer margin 을 키움)
    density_A = chars - n_env * 100 + n_sub * 30

    if density_A > 1600:
        tier, pk, ls = 0, 0.6, 1.11
        label = "텍스트지배"
    elif density_A > 1200:
        tier, pk, ls = 1, 1.0, 1.16
        label = "조밀"
    elif density_A > 800:
        tier, pk, ls = 2, 1.4, 1.20
        label = "중간"
    elif density_A > 400:
        tier, pk, ls = 3, 1.7, 1.24
        label = "성긴"
    else:
        tier, pk, ls = 4, 1.9, 1.28
        label = "희박"

    return pk, ls, f"tier{tier}_{label}_d{density_A}"


def build_tuning_line(parskip: float, linespread: float, plus_ratio: float = 1.0) -> str:
    plus = round(parskip * plus_ratio + 0.1, 1)
    return (
        f"\\setlength{{\\parskip}}{{{parskip:.1f}mm plus {plus:.1f}mm minus 0mm}}"
        f"\\linespread{{{linespread:.2f}}}\\selectfont%"
    )


def apply_tuning(
    tex_path: Path,
    concepts: list[Concept],
    updates: dict[int, tuple[float, float]],
    vspace_updates: dict[int, float] | None = None,
) -> int:
    """updates : {idx: (pk, ls)}. vspace_updates : {idx: mm} (개념박스 끝에 삽입 · P0-3).
    반환 : 편집 라인 수."""
    if not updates and not vspace_updates:
        return 0
    vspace_updates = vspace_updates or {}
    lines = tex_path.read_text(encoding="utf-8").splitlines()

    # 뒤에서부터 편집 (앞 인덱스 유지)
    # 편집 지점 목록 : (line_no, edit_type, payload) 를 line_no 큰 것 우선 정렬
    edits: list[tuple[int, str, tuple]] = []
    for idx, (new_pk, new_ls) in updates.items():
        c = concepts[idx]
        edits.append((c.tuning_line if c.tuning_line > 0 else c.begin_line, "tune", (idx, new_pk, new_ls)))
    for idx, vs_mm in vspace_updates.items():
        c = concepts[idx]
        edits.append((c.vspace_line if c.vspace_line > 0 else c.end_line, "vspace", (idx, vs_mm)))

    edits.sort(key=lambda x: -x[0])
    modified = 0
    for line_no, kind, payload in edits:
        if kind == "tune":
            idx, new_pk, new_ls = payload
            c = concepts[idx]
            new_line = build_tuning_line(new_pk, new_ls)
            if c.tuning_line > 0:
                lines[c.tuning_line - 1] = new_line
                modified += 1
            else:
                comment = "% dmconcept-auto-tune (v2.0)"
                insert_at = c.begin_line  # 0-based index = begin_line
                lines.insert(insert_at, new_line)
                lines.insert(insert_at, comment)
                modified += 2
        elif kind == "vspace":
            idx, vs_mm = payload
            c = concepts[idx]
            vs_line = f"\\vspace{{{vs_mm:.1f}mm}}{VSPACE_MARKER_COMMENT}"
            if c.vspace_line > 0:
                # 기존 vspace 값 갱신
                if vs_mm <= 0.05:
                    # 제거
                    del lines[c.vspace_line - 1]
                    modified += 1
                else:
                    lines[c.vspace_line - 1] = vs_line
                    modified += 1
            else:
                if vs_mm > 0.05:
                    # \end{dmconcept} 앞에 삽입
                    insert_at = c.end_line - 1  # 0-based index of the \end line
                    lines.insert(insert_at, vs_line)
                    modified += 1
    tex_path.write_text("\n".join(lines) + "\n", encoding="utf-8")
    return modified


# ─── xelatex 컴파일 ────────────────────────────────────────
def compile_tex(tex_path: Path, timeout: int = 240) -> tuple[bool, str]:
    env = os.environ.copy()
    env["TEXINPUTS"] = "../../../templates/DeeP-Math-v6;../../../templates;" + env.get("TEXINPUTS", "")

    cwd = tex_path.parent
    tex_name = tex_path.name
    for _pass in range(2):
        try:
            subprocess.run(
                ["xelatex", "-interaction=nonstopmode", "-halt-on-error=false", tex_name],
                cwd=str(cwd), env=env,
                capture_output=True, timeout=timeout,
            )
        except subprocess.TimeoutExpired:
            return False, "TIMEOUT"
        log = tex_path.with_suffix(".log")
        if not log.exists():
            return False, "no-log"
    log_txt = log.read_text(encoding="utf-8", errors="replace")
    critical = re.findall(r"^! .*", log_txt, flags=re.M)
    if critical:
        return True, f"WARN({len(critical)} !)"
    return True, ""


# ─── 유틸 ───────────────────────────────────────────────
def _basename(tex_path: Path) -> str:
    m = re.search(r"(\d+-[^\s]+)$", tex_path.stem)
    return m.group(1) if m else tex_path.stem


def _classify(margin: float, overflow: bool, content_overflow: bool = False) -> str:
    # v2.3 세션 86 (2026-07-25) : content_overflow 최우선 판정 (실 넘침)
    # 실 콘텐츠가 tcolorbox 밖으로 튀어나가면 즉시 "overflow" 반환
    if content_overflow:
        return "overflow"
    # v2.1 세션 84 (2026-07-24) : overflow (shadow FP 가능) 파라미터 신중 사용
    if margin < 0.0:
        return "overflow"
    if margin < TARGET_MARGIN_MIN:
        return "tight"
    if margin <= TARGET_MARGIN_MAX:
        return "OK"
    if margin <= 30.0:
        return "loose"
    return "very_loose"


def _is_rewrite_candidate(c: "Concept") -> bool:
    """v2.4 세션 88 : 재기술 (concept 재편성) 대상 판정.

    트리거 (feedback_dmconcept_content_principle.md 원칙 6):
      - verdict == "very_loose" (여백 > 30mm) → 콘텐츠 밀도 부족
      - vspace_mm > 30mm → 간격만으로 채운 빈 공간
      - master_override 이면 False (마스터 지시 존중)
    """
    if c.master_override:
        return False
    if c.verdict == "very_loose":
        return True
    if c.vspace_mm > 30.0:
        return True
    return False


def _clamp(val: float, lo: float, hi: float) -> float:
    return max(lo, min(hi, val))


def _next_params(cur_pk: float, cur_ls: float, cls: str) -> tuple[float, float]:
    d_pk, d_ls = DELTA_TABLE.get(cls, (0.0, 0.0))
    return _clamp(cur_pk + d_pk, PARSKIP_MIN, PARSKIP_MAX), \
           _clamp(cur_ls + d_ls, LINESPREAD_MIN, LINESPREAD_MAX)


def _at_upper_bound(pk: float, ls: float) -> bool:
    return pk >= PARSKIP_MAX - 0.05 and ls >= LINESPREAD_MAX - 0.005


# ─── 메인 튜닝 루프 ─────────────────────────────────────────
def measure_all(tex_path: Path, concepts: list[Concept], png_dir: Path, dpi: int) -> None:
    base = _basename(tex_path)
    for c in concepts:
        seq_tag = f"c{c.concept_num}" if c.concept_seq == 1 else f"c{c.concept_num}s{c.concept_seq}"
        prefix = png_dir / f"tune-{base}-{seq_tag}-i{c.iterations}"
        png = render_page(c.pdf, c.pdf_page, dpi, prefix)
        (c.box_bot_mm, c.last_content_mm, c.bottom_margin_mm, c.overflow,
         c.real_content_bottom_mm, c.content_overflow, c.content_overflow_mm) = measure(png)
        c.verdict = _classify(c.bottom_margin_mm, c.overflow, c.content_overflow)
        c.history.append((c.parskip, c.linespread, c.bottom_margin_mm, c.overflow))


def tune_file(
    tex_path: Path,
    max_iter: int,
    dpi: int,
    png_dir: Path,
    dry_run: bool,
    predict: bool,
    auto_vspace: bool,
    quiet: bool = False,
) -> list[Concept]:
    log: list[str] = []
    def _log(s: str) -> None:
        log.append(s)
        if not quiet:
            print(s)

    _log(f"\n=== {tex_path.name} ===")
    if not tex_path.with_suffix(".pdf").exists():
        _log(f"  초기 pdf 없음 · xelatex 실행")
        ok, msg = compile_tex(tex_path)
        if not ok:
            _log(f"  ! 컴파일 실패: {msg}")
            return []

    concepts = parse_tex_concepts(tex_path)
    if not concepts:
        _log(f"  ⚠️  dmconcept 없음")
        return []
    override_n = sum(1 for c in concepts if c.master_override)
    _log(f"  개념 {len(concepts)}건 · 튜닝 라인 감지: "
         f"{sum(1 for c in concepts if c.tuning_line > 0)}건 · vspace 감지: "
         f"{sum(1 for c in concepts if c.vspace_line > 0)}건 · "
         f"master_override: {override_n}건 (skip)")
    if override_n > 0:
        for c in concepts:
            if c.master_override:
                _log(f"    [skip] {c.concept_num}.{c.title[:20]:<22} "
                     f"setlen×{c.setlen_count} · master override 로 편집 안 함")

    # P0-2 : 초기값 예측 (튜닝 라인이 없는 신규 개념박스만 · 기존 값 존중)
    # A1·A2 (v2.2 세션 85) : master_override 개념박스는 예측 skip
    predicted_updates: dict[int, tuple[float, float]] = {}
    if predict:
        for idx, c in enumerate(concepts):
            pk_p, ls_p, label = predict_initial_parskip(c.body_stats)
            c.predicted_pk = pk_p
            c.predicted_ls = ls_p
            if c.master_override:
                continue  # A2 : 마스터 수동 조정 개념박스는 예측 skip
            # 튜닝 라인이 없을 때만 적용 (기존 값이 세션 81+ 실측 튜닝이면 그대로 사용)
            if c.tuning_line == 0:
                predicted_updates[idx] = (pk_p, ls_p)
                c.predicted_used = True
                _log(f"    [predict] {c.concept_num}.{c.title[:16]:<18} "
                     f"chars={c.body_stats.get('n_char', 0):>4} env={c.body_stats.get('n_dmexample',0)+c.body_stats.get('n_dmnote',0)+c.body_stats.get('n_dmexplain',0)} "
                     f"→ pk={pk_p:.2f} ls={ls_p:.2f} [{label}] (신규)")
        if predicted_updates and not dry_run:
            modified = apply_tuning(tex_path, concepts, predicted_updates)
            _log(f"  [predict] 초기값 적용 {len(predicted_updates)}건 (라인 편집 {modified}줄)")
            ok, msg = compile_tex(tex_path)
            if not ok:
                _log(f"    ! xelatex 실패: {msg}")
                return concepts
            concepts = parse_tex_concepts(tex_path)

    # [3] 초기 측정
    for c in concepts:
        seq_tag = f"c{c.concept_num}" if c.concept_seq == 1 else f"c{c.concept_num}s{c.concept_seq}"
        prefix = png_dir / f"tune-{_basename(tex_path)}-{seq_tag}-i0"
        cands = sorted(png_dir.glob(f"tune-{_basename(tex_path)}-{seq_tag}-i0-*.png"))
        png = cands[0] if cands else render_page(c.pdf, c.pdf_page, dpi, prefix)
        (c.box_bot_mm, c.last_content_mm, c.bottom_margin_mm, c.overflow,
         c.real_content_bottom_mm, c.content_overflow, c.content_overflow_mm) = measure(png)
        c.verdict = _classify(c.bottom_margin_mm, c.overflow, c.content_overflow)
        c.history.append((c.parskip, c.linespread, c.bottom_margin_mm, c.overflow))
        cf = f" 🔴REAL_OVERFLOW+{c.content_overflow_mm:.1f}mm" if c.content_overflow else ""
        _log(f"    [i=0] {c.concept_num}.{c.title[:20]:<22} "
             f"pk={c.parskip:.2f} ls={c.linespread:.2f} → "
             f"margin={c.bottom_margin_mm:+6.1f}mm ovf={c.overflow!s:<5} [{c.verdict}]{cf}")

    # [4] 이진 탐색 루프
    for it in range(1, max_iter + 1):
        needs_update: dict[int, tuple[float, float]] = {}
        vspace_updates: dict[int, float] = {}
        for idx, c in enumerate(concepts):
            if c.verdict == "OK":
                continue
            if c.master_override:
                continue  # A1·A2 (v2.2 세션 85) : 마스터 수동 조정 개념박스 편집 skip
            new_pk, new_ls = _next_params(c.parskip, c.linespread, c.verdict)
            param_locked = (abs(new_pk - c.parskip) < 0.05 and abs(new_ls - c.linespread) < 0.005)
            if param_locked:
                # P0-3 : 상한 도달 + loose 잔여 → vspace 자동 삽입
                if auto_vspace and c.verdict in ("loose", "very_loose") and _at_upper_bound(c.parskip, c.linespread):
                    # 목표 여백 중앙 (10mm) 로 축소
                    target_mm = 10.0
                    delta = c.bottom_margin_mm - target_mm
                    new_vs = _clamp(c.vspace_mm + delta, 0.0, 60.0)
                    if abs(new_vs - c.vspace_mm) > 0.5:
                        vspace_updates[idx] = new_vs
                continue
            needs_update[idx] = (new_pk, new_ls)

        if not needs_update and not vspace_updates:
            _log(f"  [i={it}] 조정 대상 없음 · 조기 종료")
            break

        if dry_run:
            _log(f"  [i={it}] dry-run · 조정 없이 종료 ({len(needs_update)}건 튜닝 + {len(vspace_updates)}건 vspace)")
            break

        modified = apply_tuning(tex_path, concepts, needs_update, vspace_updates)
        _log(f"  [i={it}] {len(needs_update)}건 튜닝 + {len(vspace_updates)}건 vspace (라인 편집 {modified}줄)")

        ok, msg = compile_tex(tex_path)
        if not ok:
            _log(f"    ! xelatex 실패: {msg}")
            break
        if msg:
            _log(f"    xelatex: {msg}")

        concepts_new = parse_tex_concepts(tex_path)
        hist_map = {(c.concept_num, c.concept_seq): c for c in concepts}
        for cn in concepts_new:
            prev = hist_map.get((cn.concept_num, cn.concept_seq))
            if prev:
                cn.history = prev.history
                cn.iterations = prev.iterations + 1
                cn.predicted_pk = prev.predicted_pk
                cn.predicted_ls = prev.predicted_ls
                cn.predicted_used = prev.predicted_used
        concepts = concepts_new

        measure_all(tex_path, concepts, png_dir, dpi)

        for c in concepts:
            marker = "OK  " if c.verdict == "OK" else "----"
            vs = f" vs={c.vspace_mm:.1f}" if c.vspace_mm > 0 else ""
            _log(f"    [i={it}] {marker} {c.concept_num}.{c.title[:20]:<22} "
                 f"pk={c.parskip:.2f} ls={c.linespread:.2f}{vs} → "
                 f"margin={c.bottom_margin_mm:+6.1f}mm ovf={c.overflow!s:<5} [{c.verdict}]")

        # A1·A2 (v2.2 세션 85) : master_override 는 편집 대상이 아니므로 완료 판정에서 제외
        if all(c.verdict == "OK" for c in concepts if not c.master_override):
            _log(f"  [i={it}] 편집 대상 전 개념 GREEN · 완료")
            break
    return concepts


# 병렬 실행 워커
def _tune_file_worker(args_tuple):
    tex_path, max_iter, dpi, png_dir, dry_run, predict, auto_vspace = args_tuple
    try:
        cs = tune_file(tex_path, max_iter, dpi, png_dir, dry_run, predict, auto_vspace, quiet=True)
        return (tex_path, cs, None)
    except Exception as e:
        return (tex_path, [], str(e))


def write_report(all_concepts: list[Concept], report: Path) -> None:
    report.parent.mkdir(parents=True, exist_ok=True)
    with report.open("w", encoding="utf-8", newline="") as f:
        w = csv.writer(f)
        w.writerow(["basename", "concept_num", "concept_seq", "title",
                    "iterations",
                    "predicted_used", "predicted_pk", "predicted_ls",
                    "final_parskip", "final_linespread", "final_vspace_mm",
                    "final_margin_mm", "final_overflow", "verdict",
                    "master_override", "setlen_count",
                    "content_overflow", "content_overflow_mm", "real_content_bottom_mm",
                    "rewrite_candidate",
                    "n_char", "n_dmsub", "n_dmexample", "n_dmnote",
                    "history"])
        for c in all_concepts:
            hist_str = " | ".join(
                f"pk{pk:.2f} ls{ls:.2f}→{mg:+.1f}mm ovf{'Y' if ovf else 'N'}"
                for pk, ls, mg, ovf in c.history
            )
            s = c.body_stats
            w.writerow([c.basename, c.concept_num, c.concept_seq, c.title,
                        len(c.history) - 1,
                        c.predicted_used, f"{c.predicted_pk:.2f}", f"{c.predicted_ls:.2f}",
                        f"{c.parskip:.2f}", f"{c.linespread:.2f}", f"{c.vspace_mm:.1f}",
                        f"{c.bottom_margin_mm:.2f}", c.overflow, c.verdict,
                        c.master_override, c.setlen_count,
                        c.content_overflow, f"{c.content_overflow_mm:+.2f}", f"{c.real_content_bottom_mm:.2f}",
                        c.rewrite_candidate,
                        s.get("n_char", 0), s.get("n_dmsub", 0),
                        s.get("n_dmexample", 0), s.get("n_dmnote", 0),
                        hist_str])


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__.split("\n\n", 1)[0])
    ap.add_argument("--dir", type=Path, default=DEFAULT_DIR)
    ap.add_argument("--png-dir", type=Path, default=DEFAULT_PNG_DIR)
    ap.add_argument("--dpi", type=int, default=150)
    ap.add_argument("--report", type=Path, default=DEFAULT_REPORT)
    ap.add_argument("--only", type=str, default="", help="파일 basename prefix 필터 (예: 04 또는 04,05)")
    ap.add_argument("--max-iter", type=int, default=6)
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument("--parallel", type=int, default=1, help="병렬 프로세스 수 (기본 1 · 순차)")
    ap.add_argument("--no-predict", action="store_true", help="P0-2 초기값 예측 비활성")
    ap.add_argument("--no-vspace", action="store_true", help="P0-3 자동 vspace 삽입 비활성")
    args = ap.parse_args()

    if not args.dir.exists():
        print(f"❌ 디렉토리 없음: {args.dir}", file=sys.stderr)
        return 2

    only = [x.strip() for x in args.only.split(",") if x.strip()]

    tex_files: list[Path] = []
    for tex in sorted(args.dir.glob("Deep Math Review Note *.tex")):
        if "답지" in tex.name:
            continue
        base = _basename(tex)
        if only and not any(base.startswith(k) for k in only):
            continue
        tex_files.append(tex)

    if not tex_files:
        print(f"⚠️  대상 파일 없음.", file=sys.stderr)
        return 1

    predict = not args.no_predict
    auto_vspace = not args.no_vspace

    print(f"🎯 대상: {len(tex_files)} 파일 · dpi={args.dpi} · max-iter={args.max_iter} · parallel={args.parallel}"
          + (" · DRY-RUN" if args.dry_run else "")
          + (" · +predict" if predict else " · -predict")
          + (" · +vspace" if auto_vspace else " · -vspace"))
    print(f"    목표 여백: {TARGET_MARGIN_MIN}~{TARGET_MARGIN_MAX}mm")
    print(f"    parskip {PARSKIP_MIN}~{PARSKIP_MAX}mm · linespread {LINESPREAD_MIN}~{LINESPREAD_MAX}")

    t0 = time.time()
    all_concepts: list[Concept] = []

    if args.parallel > 1 and len(tex_files) > 1:
        # 병렬 실행
        pool_size = min(args.parallel, len(tex_files))
        worker_args = [(tex, args.max_iter, args.dpi, args.png_dir, args.dry_run, predict, auto_vspace)
                       for tex in tex_files]
        print(f"\n🚀 병렬 시작 (pool={pool_size})")
        with mp.Pool(pool_size) as pool:
            for tex_path, cs, err in pool.imap_unordered(_tune_file_worker, worker_args):
                if err:
                    print(f"  ! {tex_path.name} : 예외 {err}", file=sys.stderr)
                else:
                    green = sum(1 for c in cs if c.verdict == "OK")
                    print(f"  ✓ {tex_path.name} · {green}/{len(cs)} GREEN")
                all_concepts.extend(cs)
    else:
        for tex in tex_files:
            try:
                cs = tune_file(tex, args.max_iter, args.dpi, args.png_dir, args.dry_run, predict, auto_vspace)
                all_concepts.extend(cs)
            except Exception as e:
                print(f"  ! 예외: {e}", file=sys.stderr)
                continue

    elapsed = time.time() - t0

    # 요약
    print()
    print("=" * 100)
    print(f"📊 총 {len(all_concepts)}개 개념 · iteration 완료 · {elapsed:.1f}s")
    ok = sum(1 for c in all_concepts if c.verdict == "OK")
    print(f"    GREEN (5~15mm): {ok}건 / {len(all_concepts)}건")
    print(f"    잔여: {len(all_concepts) - ok}건")
    predicted_n = sum(1 for c in all_concepts if c.predicted_used)
    vspace_n = sum(1 for c in all_concepts if c.vspace_mm > 0)
    print(f"    초기값 예측 사용: {predicted_n}건 · vspace 삽입: {vspace_n}건")

    # 파일별 iteration 통계
    file_iters: dict[str, list[int]] = {}
    for c in all_concepts:
        file_iters.setdefault(c.basename, []).append(len(c.history) - 1)
    print()
    print(f"    파일별 iteration 평균:")
    for base, iters in sorted(file_iters.items()):
        avg = sum(iters) / len(iters) if iters else 0
        print(f"      {base:<24} · {len(iters)}개념 · avg {avg:.1f} · max {max(iters) if iters else 0}")

    override_count = sum(1 for c in all_concepts if c.master_override)
    print(f"    master_override: {override_count}건 (편집 skip)")

    real_of_count = sum(1 for c in all_concepts if c.content_overflow)
    if real_of_count > 0:
        print(f"    🔴 실 넘침 (content_overflow) : {real_of_count}건 · 즉시 콘텐츠 축약 필요")

    # v2.4 세션 88 : 재기술 대상 flag 채우기 및 요약
    for c in all_concepts:
        c.rewrite_candidate = _is_rewrite_candidate(c)
    rewrite_n = sum(1 for c in all_concepts if c.rewrite_candidate)
    if rewrite_n > 0:
        print(f"    🟠 재기술 대상 (rewrite_candidate) : {rewrite_n}건 · 콘텐츠 재편성 필요")
        print(f"       (트리거: very_loose OR vspace > 30mm · 정책 feedback_dmconcept_content_principle 원칙 6)")

    print()
    print("| 파일 | 개념 | pk | ls | vs | 여백(mm) | ovf | 판정 | override | 실넘침 | 재기술 |")
    print("|---|---|---|---|---|---|---|---|---|---|---|")
    for c in all_concepts:
        seq_tag = f"c{c.concept_num}" if c.concept_seq == 1 else f"c{c.concept_num}s{c.concept_seq}"
        ovf = "Y" if c.overflow else "-"
        vs = f"{c.vspace_mm:.1f}" if c.vspace_mm > 0 else "-"
        ovr = f"Y(×{c.setlen_count})" if c.master_override else "-"
        cof = f"🔴+{c.content_overflow_mm:.1f}" if c.content_overflow else "-"
        rw = "🟠" if c.rewrite_candidate else "-"
        print(f"| {c.basename} | {seq_tag} | {c.parskip:.2f} | {c.linespread:.2f} | {vs} | "
              f"{c.bottom_margin_mm:+.1f} | {ovf} | {c.verdict} | {ovr} | {cof} | {rw} |")

    write_report(all_concepts, args.report)
    print(f"\n📝 리포트: {args.report}")
    return 0 if all(c.verdict == "OK" for c in all_concepts) else 3


if __name__ == "__main__":
    sys.exit(main())
