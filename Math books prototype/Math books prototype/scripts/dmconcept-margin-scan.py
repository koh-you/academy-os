#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""dmconcept-margin-scan.py — DeeP Math 정리편 개념 페이지 밀도 진단.

세션 66 pixel-scan 정착 (세션 67 · 2026-07-22).

각 tex 파일에서 `\\begin{dmconcept}` 위치를 감지, 앞선 `\\newpage` 개수로 PDF
페이지를 자동 계산. pdftoppm으로 해당 페이지를 PNG로 렌더한 뒤 dm-accent
배경색(F5EEF8)을 감지해 concept box의 **실제 렌더 y 범위**를 자동 산출.

측정 지표
─────────
  box_top_mm, box_bot_mm : 라벤더 배경 y 범위 (넓은 row 만 인정)
  last_content_mm        : box 안 dark 픽셀 last y (텍스트/수식 최하단)
  bottom_margin_mm       : box_bot_mm − last_content_mm  ← **핵심 지표**
  overflow_dark_rows     : box 하단 이후 ~ footer 이전 zone 의 wide dark row 수
  overflow               : overflow_dark_rows > 0  ← 콘텐츠 box 밖 넘침

판정 (마스터 지시 · 이상 여백 ≤ 20mm)
─────────
  overflow=True                          → RED-B  (넘침 · 개념 박스 벗어남)
  bottom_margin ≤ 20mm                   → GREEN  (이상 · 여백 20mm 이하)
  20 < bottom_margin ≤ 35mm              → YELLOW (경계 · 보강 검토)
  bottom_margin > 35mm                   → RED-T  (여백 큼 · 보강/2페이지 검토)

사용
─────────
  python scripts/dmconcept-margin-scan.py
  python scripts/dmconcept-margin-scan.py --report _scratch/dmconcept-scan.csv
  python scripts/dmconcept-margin-scan.py --only 01,02,05 --dpi 200
  python scripts/dmconcept-margin-scan.py --force-render
"""
from __future__ import annotations

import argparse
import csv
import re
import subprocess
import sys
from dataclasses import dataclass
from pathlib import Path

import numpy as np
from PIL import Image

if sys.stdout.encoding.lower() != "utf-8":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass

DEFAULT_DIR = Path("output/공통수학2/DeeP-Math-정리편")
DEFAULT_PNG_DIR = Path("_scratch/design-preview")

DMCONCEPT_RE = re.compile(
    r"\\begin\{dmconcept\}(?:\[(?P<height>[^\]]+)\])?\{(?P<num>\d+)\}\{(?P<title>[^}]*)\}"
)
NEWPAGE_RE = re.compile(r"\\newpage\b")

PAGE_H_MM = 297.0
FOOTER_ZONE_TOP_MM = 275.0

# dm-paper 배경 (dm-editorial.sty v6.72 · FAF7F2 웜 오프화이트)
# 세션 66~67 (deep-math.sty · dm-accent F5EEF8) → 세션 77 v6.72 갱신
ACCENT_RGB = np.array([250, 247, 242], dtype=float)
ACCENT_DIST_MAX = 8.0

# dark 픽셀 threshold (dm-rule frame D2B4DE=194 제외 · 텍스트만)
DARK_THRESHOLD = 180
# row 의 dark 픽셀 개수가 이 값 이상이어야 "content row" 인정 (얇은 선/artifact 제외)
CONTENT_ROW_MIN_DARK = 20

# 판정 임계 (bottom_margin_mm 기준 · 마스터 지시 이상 여백 ≤ 20mm)
MARGIN_GREEN_MAX = 20.0
MARGIN_YELLOW_MAX = 35.0


@dataclass
class Concept:
    tex: Path
    pdf: Path
    basename: str
    concept_num: int
    concept_seq: int
    title: str
    line_no: int
    pdf_page: int
    box_h_option_mm: float
    box_top_mm: float = 0.0
    box_bot_mm: float = 0.0
    last_content_mm: float = 0.0
    bottom_margin_mm: float = 0.0
    overflow: bool = False
    overflow_bottom_mm: float = 0.0
    verdict: str = ""


def parse_tex(tex_path: Path) -> list[tuple[int, int, str, float]]:
    out: list[tuple[int, int, str, float]] = []
    for i, line in enumerate(tex_path.read_text(encoding="utf-8").splitlines(), start=1):
        m = DMCONCEPT_RE.search(line)
        if m:
            num = int(m.group("num"))
            title = m.group("title").strip()
            h_str = m.group("height")
            h = 214.0
            if h_str and h_str.endswith("mm"):
                try:
                    h = float(h_str[:-2])
                except ValueError:
                    pass
            out.append((i, num, title, h))
    return out


def parse_newpages(tex_path: Path) -> list[int]:
    return [
        i for i, line in enumerate(tex_path.read_text(encoding="utf-8").splitlines(), start=1)
        if NEWPAGE_RE.search(line)
    ]


def basename_of(tex_path: Path) -> str:
    m = re.search(r"(\d+-[^\s]+)$", tex_path.stem)
    return m.group(1) if m else tex_path.stem


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


def measure(png: Path) -> tuple[float, float, float, bool, float]:
    """반환: (box_top_mm, box_bot_mm, last_content_mm, overflow, overflow_bottom_mm)"""
    img = Image.open(png).convert("RGB")
    arr = np.array(img).astype(float)
    h_px, w_px, _ = arr.shape
    mm_per_px = PAGE_H_MM / h_px

    # dm-accent 배경 감지 (row 절반 이상 accent 픽셀인 행만 "concept box row")
    dist = np.sqrt(((arr - ACCENT_RGB) ** 2).sum(axis=2))
    accent_mask = dist < ACCENT_DIST_MAX
    accent_row_count = accent_mask.sum(axis=1)
    concept_rows = np.where(accent_row_count > w_px / 3)[0]
    if len(concept_rows) < 20:
        return 0.0, 0.0, 0.0, False, 0.0

    box_top_px = int(concept_rows[0])
    box_bot_px = int(concept_rows[-1])
    box_top_mm = box_top_px * mm_per_px
    box_bot_mm = box_bot_px * mm_per_px

    # dark 픽셀 (grayscale)
    gray = np.array(img.convert("L"))
    dark = gray < DARK_THRESHOLD
    dark_per_row = dark.sum(axis=1)
    is_content_row = dark_per_row >= CONTENT_ROW_MIN_DARK

    # box 안 last content row
    inside = is_content_row[box_top_px:box_bot_px + 1]
    inside_idx = np.where(inside)[0]
    if len(inside_idx) == 0:
        last_content_mm = box_top_mm
    else:
        last_content_mm = (box_top_px + inside_idx[-1]) * mm_per_px

    # overflow zone: box 하단 이후 ~ footer 이전
    footer_px = int(round(FOOTER_ZONE_TOP_MM / mm_per_px))
    of_slice = is_content_row[box_bot_px + 1:footer_px]
    of_idx = np.where(of_slice)[0]
    overflow = bool(len(of_idx))
    of_bot_mm = 0.0
    if overflow:
        of_bot_mm = (box_bot_px + 1 + of_idx[-1]) * mm_per_px

    return box_top_mm, box_bot_mm, last_content_mm, overflow, of_bot_mm


def verdict_of(margin_mm: float, overflow: bool) -> str:
    if overflow:
        return "RED-B (넘침)"
    if margin_mm > MARGIN_YELLOW_MAX:
        return "RED-T (여백 큼)"
    if margin_mm > MARGIN_GREEN_MAX:
        return "YELLOW (경계)"
    return "GREEN (이상)"


def collect(dir_path: Path, only: list[str] | None) -> list[Concept]:
    concepts: list[Concept] = []
    for tex in sorted(dir_path.glob("Deep Math Review Note *.tex")):
        if "답지" in tex.name:
            continue
        base = basename_of(tex)
        if only and not any(base.startswith(k) for k in only):
            continue
        pdf = tex.with_suffix(".pdf")
        if not pdf.exists():
            print(f"⚠️  PDF 없음, 건너뜀: {pdf.name}", file=sys.stderr)
            continue
        tex_concepts = parse_tex(tex)
        newpages = parse_newpages(tex)
        seq_by_num: dict[int, int] = {}
        for line_no, num, title, box_h in tex_concepts:
            seq_by_num[num] = seq_by_num.get(num, 0) + 1
            seq = seq_by_num[num]
            page = 1 + sum(1 for np_ln in newpages if np_ln < line_no)
            concepts.append(Concept(
                tex=tex, pdf=pdf, basename=base,
                concept_num=num, concept_seq=seq,
                title=title, line_no=line_no, pdf_page=page,
                box_h_option_mm=box_h,
            ))
    return concepts


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__.split("\n\n", 1)[0])
    ap.add_argument("--dir", type=Path, default=DEFAULT_DIR)
    ap.add_argument("--png-dir", type=Path, default=DEFAULT_PNG_DIR)
    ap.add_argument("--dpi", type=int, default=150)
    ap.add_argument("--report", type=Path)
    ap.add_argument("--only", type=str, default="")
    ap.add_argument("--force-render", action="store_true")
    args = ap.parse_args()

    if not args.dir.exists():
        print(f"❌ 디렉토리 없음: {args.dir}", file=sys.stderr)
        return 2

    only = [x.strip() for x in args.only.split(",") if x.strip()]
    concepts = collect(args.dir, only or None)
    if not concepts:
        print("⚠️  스캔 대상 개념 없음.", file=sys.stderr)
        return 1

    print(f"📖 {len(concepts)}개 개념 스캔 · dpi={args.dpi}")
    print(f"    임계: GREEN ≤ {MARGIN_GREEN_MAX}mm · YELLOW ≤ {MARGIN_YELLOW_MAX}mm · RED-T > {MARGIN_YELLOW_MAX}mm")
    print(f"    (마스터 기준: 이상 여백 ≤ 20mm)")

    def png_of(c: Concept) -> Path:
        seq_tag = f"c{c.concept_num}" if c.concept_seq == 1 else f"c{c.concept_num}s{c.concept_seq}"
        prefix = args.png_dir / f"dmscan-{c.basename}-{seq_tag}"
        cands = sorted(args.png_dir.glob(f"dmscan-{c.basename}-{seq_tag}-*.png"))
        if args.force_render or not cands:
            return render_page(c.pdf, c.pdf_page, args.dpi, prefix)
        return cands[0]

    for c in concepts:
        png = png_of(c)
        c.box_top_mm, c.box_bot_mm, c.last_content_mm, c.overflow, c.overflow_bottom_mm = measure(png)
        c.bottom_margin_mm = c.box_bot_mm - c.last_content_mm
        c.verdict = verdict_of(c.bottom_margin_mm, c.overflow)

    # 정렬: 넘침 먼저 · 그 다음 여백 큰 순
    concepts.sort(key=lambda x: (not x.overflow, -x.bottom_margin_mm))

    print()
    print("| 파일 | 개념 | p | Box_y(mm) | Last(mm) | 하단여백(mm) | 넘침(mm) | 판정 | 제목 |")
    print("|---|---|---|---|---|---|---|---|---|")
    for c in concepts:
        seq_tag = f"c{c.concept_num}" if c.concept_seq == 1 else f"c{c.concept_num}s{c.concept_seq}"
        of_str = f"{c.overflow_bottom_mm:.1f}" if c.overflow else "—"
        print(f"| {c.basename} | {seq_tag} | {c.pdf_page} | "
              f"{c.box_top_mm:.1f}~{c.box_bot_mm:.1f} | {c.last_content_mm:.1f} | "
              f"{c.bottom_margin_mm:.1f} | {of_str} | {c.verdict} | {c.title} |")

    red_b = [c for c in concepts if c.overflow]
    red_t = [c for c in concepts if not c.overflow and c.bottom_margin_mm > MARGIN_YELLOW_MAX]
    yellow = [c for c in concepts if not c.overflow and MARGIN_GREEN_MAX < c.bottom_margin_mm <= MARGIN_YELLOW_MAX]
    green = [c for c in concepts if not c.overflow and c.bottom_margin_mm <= MARGIN_GREEN_MAX]
    print()
    print(f"🔺 RED-B (넘침): {len(red_b)}건")
    print(f"🔴 RED-T (여백 큼): {len(red_t)}건")
    print(f"🟡 YELLOW (경계): {len(yellow)}건")
    print(f"🟢 GREEN (이상): {len(green)}건")

    if args.report:
        args.report.parent.mkdir(parents=True, exist_ok=True)
        with args.report.open("w", encoding="utf-8", newline="") as f:
            w = csv.writer(f)
            w.writerow(["basename", "concept_num", "concept_seq", "title",
                        "line_no", "pdf_page", "box_h_option_mm",
                        "box_top_mm", "box_bot_mm", "last_content_mm",
                        "bottom_margin_mm", "overflow", "overflow_bottom_mm", "verdict"])
            for c in concepts:
                w.writerow([c.basename, c.concept_num, c.concept_seq, c.title,
                            c.line_no, c.pdf_page, c.box_h_option_mm,
                            f"{c.box_top_mm:.2f}", f"{c.box_bot_mm:.2f}",
                            f"{c.last_content_mm:.2f}", f"{c.bottom_margin_mm:.2f}",
                            c.overflow, f"{c.overflow_bottom_mm:.2f}", c.verdict])
        print(f"📝 리포트: {args.report}")

    return 0


if __name__ == "__main__":
    sys.exit(main())
