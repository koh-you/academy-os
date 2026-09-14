#!/usr/bin/env python3
# -*- coding: utf-8 -*-
r"""inline-wrap-risk-scan.py — 답지·본편 인라인 수식 wrap 위험 후보 스캔

세션 84 (2026-07-24) 신설. dm-answer-classic 답지 multicols 컬럼에서
wrap 발생 가능성이 높은 인라인 수식 패턴 감지.

위험 기준 (경험적 · 세션 83 wrap 사례 기반):
  H1 : dfrac ≥ 2 AND 등호 ≥ 2  (연속 등식 체인)
  H2 : dfrac ≥ 3               (다항 fraction)
  H3 : 인라인 길이 > 60 chars   (긴 수식)

주의:
  - 단순 위험 후보 스캔 · 실제 wrap 여부는 PDF 실측 필요
  - \dfrac 은 LaTeX가 tall inline으로 처리하므로 위험 후보라도 대부분 렌더링 OK
  - 진짜 위험은 "짧은 변수 = dfrac" 패턴 (세션 83: G = dfrac{...} 케이스)
  - False positive 많음 · 정정 전 마스터 시각 확인 필수

사용
────
  python scripts/inline-wrap-risk-scan.py --all                  # 답지 8권
  python scripts/inline-wrap-risk-scan.py --dir <경로>
  python scripts/inline-wrap-risk-scan.py <파일.tex>
  python scripts/inline-wrap-risk-scan.py --all --report OUT.csv

Exit : 0 항상 (info-only)
"""
from __future__ import annotations

import argparse
import csv
import re
import sys
from pathlib import Path

if sys.stdout.encoding and sys.stdout.encoding.lower() != "utf-8":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass

DEFAULT_DIR = Path("output/공통수학2/DeeP-Math-정리편")
DEFAULT_REPORT = Path("_scratch/inline-wrap-risk-report.csv")

DOLLAR_RE = re.compile(r"\$([^$]+?)\$")
DFRAC_RE = re.compile(r"\\dfrac\b|\\frac\b")
EQ_RE = re.compile(r"=|\\le\b|\\ge\b|\\ne\b|\\leq\b|\\geq\b|\\neq\b|<|>")


def analyze_inline(content: str) -> tuple[int, int, int]:
    """반환: (dfracs, equals, length)."""
    return (
        len(DFRAC_RE.findall(content)),
        len(EQ_RE.findall(content)),
        len(content),
    )


def scan_file(path: Path) -> list[tuple[int, int, int, int, str]]:
    """반환: [(line_no, dfracs, equals, length, snippet), ...]."""
    text = path.read_text(encoding="utf-8")
    result: list[tuple[int, int, int, int, str]] = []
    for i, line in enumerate(text.splitlines(), start=1):
        if line.lstrip().startswith("%"):
            continue
        for m in DOLLAR_RE.finditer(line):
            content = m.group(1)
            d, e, l = analyze_inline(content)
            if (d >= 2 and e >= 2) or d >= 3 or l > 60:
                result.append((i, d, e, l, content[:100]))
    return result


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__.split("\n\n", 1)[0])
    ap.add_argument("targets", nargs="*", type=Path)
    ap.add_argument("--all", action="store_true", help="답지 8권 모두")
    ap.add_argument("--include-body", action="store_true",
                    help="본편 (답지 아닌) 파일도 포함")
    ap.add_argument("--dir", type=Path, default=DEFAULT_DIR)
    ap.add_argument("--report", type=Path, default=DEFAULT_REPORT)
    ap.add_argument("--quiet", action="store_true")
    args = ap.parse_args()

    targets: list[Path] = list(args.targets)
    if args.all:
        pattern = "*.tex" if args.include_body else "*답지*.tex"
        for tex in sorted(args.dir.glob(pattern)):
            targets.append(tex)
    if not targets:
        print("⚠️  대상 파일 없음. --all 또는 파일 인자 필요.", file=sys.stderr)
        return 2

    print(f"🎯 대상 : {len(targets)} 파일")
    all_rows: list[tuple[Path, list[tuple[int, int, int, int, str]]]] = []
    total = 0
    for tex in targets:
        rows = scan_file(tex)
        all_rows.append((tex, rows))
        h1 = sum(1 for _, d, e, _, _ in rows if d >= 2 and e >= 2)
        h2 = sum(1 for _, d, _, _, _ in rows if d >= 3)
        h3 = sum(1 for _, _, _, l, _ in rows if l > 60)
        if not args.quiet:
            print(f"\n── {tex.name} · 총 {len(rows)} · H1 {h1} · H2 {h2} · H3 {h3}")
            for line_no, d, e, l, snip in rows[:10]:
                marker = "🔴" if (d >= 2 and e >= 2) or d >= 3 else "🟡"
                print(f"   {marker} L{line_no:>4} · d={d}·e={e}·len={l}  {snip[:60]}")
            if len(rows) > 10:
                print(f"   ... (+{len(rows) - 10}건 생략)")
        total += len(rows)

    print()
    print("=" * 100)
    print(f"📊 총 위험 후보 {total}건")

    # CSV
    args.report.parent.mkdir(parents=True, exist_ok=True)
    with args.report.open("w", encoding="utf-8", newline="") as f:
        w = csv.writer(f)
        w.writerow(["file", "line", "dfrac_count", "equal_count", "length", "snippet"])
        for path, rows in all_rows:
            for line_no, d, e, l, snip in rows:
                w.writerow([path.name, line_no, d, e, l, snip])
    print(f"📝 리포트 : {args.report}")
    print("⚠️  주의: 위험 후보 = 후보일 뿐. 실제 wrap 여부는 PDF 실측 필요")
    return 0


if __name__ == "__main__":
    sys.exit(main())
