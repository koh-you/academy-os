#!/usr/bin/env python3
"""last-page-single-check.py — DeeP Math 본편 tex 파일 페이지 배치 검사.

규칙 (feedback_min_solution_space_4cm.md · 세션 69):
  Level 3·실전 등 3문 이하 소섹션에서 두 페이지에 걸쳐 배치될 때,
  마지막 페이지에 1문만 두고 앞 페이지에 나머지 (2문 이상)를 두어야 한다.

검사 방식:
  - .tex 소스에서 \\newpage / \\clearpage / \\dmpnum / 섹션 매크로 (\\dmlevel, \\dmrealtype, \\dmlevelspace, \\dmrealtypespace) 위치 스캔
  - "물리적 페이지" 를 \\newpage 로 분할
  - 각 페이지의 dmpnum 개수를 카운트
  - 같은 논리 섹션 (\\dmlevel{3} 이후 / \\dmrealtype 이후) 안에서 앞 페이지 count < 뒤 페이지 count 면 RED

Usage:
  python scripts/last-page-single-check.py <파일1.tex> [<파일2.tex> ...]
  python scripts/last-page-single-check.py --dir output/공통수학2/DeeP-Math-정리편

Exit code: 0 GREEN · 1 위반 발견.
"""
from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path

DMPNUM_RE = re.compile(r"\\dmpnum\{(\d+)\}")
NEWPAGE_RE = re.compile(r"\\(?:newpage|clearpage)\b")
LEVEL_RE = re.compile(r"\\dmlevel\{(\d+)\}")
REALTYPE_RE = re.compile(r"\\dmrealtype\b(?!space)")
LEVELSPACE_RE = re.compile(r"\\dmlevelspace\b")
REALTYPESPACE_RE = re.compile(r"\\dmrealtypespace\b")

TOKEN_RE = re.compile(
    r"\\dmpnum\{\d+\}|\\newpage|\\clearpage|\\dmlevel\{\d+\}|"
    r"\\dmrealtypespace|\\dmrealtype|\\dmlevelspace"
)


def scan_tex(path: Path) -> list[dict]:
    """Return list of pages: [{section_id, section_label, count, page_index}, ...]

    Only pages that are part of a Level3 / 실전 section (or continuation via
    \\dmlevelspace / \\dmrealtypespace) are included.
    """
    text = path.read_text(encoding="utf-8", errors="replace")
    # Strip TeX comments (line-leading %) so that commented \\dmpnum in comments
    # do not leak into the tokenizer.
    text = re.sub(r"(?m)^\s*%.*$", "", text)

    pages: list[dict] = []
    current_page_count = 0
    current_section: str | None = None  # e.g. "L1", "L2", "L3", "R"
    current_section_id = 0
    section_counter = 0

    def flush_page():
        nonlocal current_page_count
        if current_section is not None and current_page_count > 0:
            pages.append(
                {
                    "section_id": current_section_id,
                    "section_label": current_section,
                    "count": current_page_count,
                }
            )
        current_page_count = 0

    for m in TOKEN_RE.finditer(text):
        tok = m.group(0)
        if tok.startswith("\\dmpnum"):
            current_page_count += 1
        elif tok in ("\\newpage", "\\clearpage"):
            flush_page()
        elif tok.startswith("\\dmlevel{"):
            # New logical section: Level N
            flush_page()
            n = re.search(r"\d+", tok).group(0)
            current_section = f"L{n}"
            section_counter += 1
            current_section_id = section_counter
        elif tok == "\\dmrealtype":
            flush_page()
            current_section = "R"
            section_counter += 1
            current_section_id = section_counter
        elif tok in ("\\dmlevelspace", "\\dmrealtypespace"):
            # Continuation of same section on new page; do not change section
            pass
    flush_page()
    return pages


def check_file(path: Path) -> tuple[list[str], list[str]]:
    """Return (violations, notes)."""
    pages = scan_tex(path)
    violations: list[str] = []
    notes: list[str] = []
    # Group pages by section_id (contiguous section boundary)
    groups: dict[int, list[dict]] = {}
    for p in pages:
        groups.setdefault(p["section_id"], []).append(p)

    for sid, plist in groups.items():
        label = plist[0]["section_label"]
        counts = [p["count"] for p in plist]
        note = f"  section {label} (#{sid}): pages = {counts}"
        notes.append(note)
        if len(plist) < 2:
            continue
        # Rule: LAST page must have count <= any prior page in same section.
        # Specifically flag (prior, last) = (1, >=2) or descending violation.
        last = counts[-1]
        prior_min = min(counts[:-1])
        if last > prior_min:
            violations.append(
                f"{path.name} :: section {label} (#{sid}) pages={counts} — "
                f"마지막 페이지 {last}문 > 앞 페이지 최소 {prior_min}문 (스왑 필요)"
            )
    return violations, notes


def main() -> int:
    # Windows cp949 콘솔 대응 · UTF-8 강제
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass
    ap = argparse.ArgumentParser()
    ap.add_argument("files", nargs="*", type=Path)
    ap.add_argument("--dir", type=Path, help="디렉토리 스캔 (Deep Math Review Note *.tex)")
    ap.add_argument("--verbose", action="store_true", help="섹션 페이지 배치 상세 출력")
    args = ap.parse_args()

    targets: list[Path] = list(args.files)
    if args.dir:
        for p in sorted(args.dir.glob("Deep Math Review Note *.tex")):
            if "답지" in p.name or "smoke" in p.name.lower():
                continue
            targets.append(p)
    if not targets:
        ap.error("파일 또는 --dir 필수")

    total_violations: list[str] = []
    for path in targets:
        violations, notes = check_file(path)
        if args.verbose or violations:
            print(f"[SCAN] {path.name}")
            if args.verbose:
                for n in notes:
                    print(n)
            for v in violations:
                print(f"  RED :: {v}")
        total_violations.extend(violations)

    print()
    if total_violations:
        print(f"[RESULT] RED — 위반 {len(total_violations)}건")
        return 1
    print("[RESULT] GREEN — 모든 섹션 규정 준수")
    return 0


if __name__ == "__main__":
    sys.exit(main())
