#!/usr/bin/env python3
"""equation-chain-check.py — DeeP Math 예제·실전 tex 파일에서 수식 체인 감지.

규칙 (feedback_equation_step_separation.md · 세션 71):
  한 \\begin{equation*}...\\end{equation*} 블록 안에 여러 수식을
  `,\\quad\\text{즉}\\quad` 또는 `\\quad\\text{또는}\\quad` 로 체인 연결하면 RED.
  각 수식을 별도 equation* 블록으로 분리해야 하며, "즉" 은 자연스레 삭제 · "또는" 은 연결 텍스트로 유지 권장.

패턴:
  - `\\quad\\text{즉}\\quad` (또는 앞뒤 공백 변형) → RED (분리 + 삭제)
  - `\\quad\\text{또는}\\quad` → RED (분리 + "또는" 은 별도 텍스트로 유지)
  - `\\text{즉}` (인라인) → GREEN (equation* 내부만 감지)

Usage:
  python scripts/equation-chain-check.py <파일1.tex> [<파일2.tex> ...]
  python scripts/equation-chain-check.py --dir output/공통수학2/DeeP-Math-정리편

Exit: 0 GREEN · 1 위반 발견.
"""
from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path

# equation* 블록 추출 (multi-line)
EQ_RE = re.compile(
    r"\\begin\{equation\*\}(.*?)\\end\{equation\*\}",
    re.DOTALL,
)

# 체인 패턴: \quad\text{즉}\quad 또는 유사 변형
CHAIN_PATTERNS = [
    (re.compile(r"\\quad\s*\\text\{\s*즉\s*\}\s*\\quad"), "즉"),
    (re.compile(r"\\quad\s*\\text\{\s*또는\s*\}\s*\\quad"), "또는"),
    (re.compile(r",\s*\\quad\s*\\text\{\s*즉\s*\}"), "즉 (comma+quad)"),
    (re.compile(r",\s*\\quad\s*\\text\{\s*또는\s*\}"), "또는 (comma+quad)"),
]


def check_file(path: Path) -> list[str]:
    text = path.read_text(encoding="utf-8", errors="replace")
    text = re.sub(r"(?m)^\s*%.*$", "", text)  # strip comments
    violations = []
    line_offsets = [0]
    for ch in text:
        line_offsets.append(line_offsets[-1] + (1 if ch == "\n" else 0))

    for m in EQ_RE.finditer(text):
        body = m.group(1)
        start_line = text.count("\n", 0, m.start()) + 1
        for pat, label in CHAIN_PATTERNS:
            if pat.search(body):
                snippet = body.strip()[:80].replace("\n", " ")
                violations.append(
                    f"{path.name}:{start_line} :: chain '{label}' · equation* : {snippet}..."
                )
                break  # one violation per equation*
    return violations


def main() -> int:
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass
    ap = argparse.ArgumentParser()
    ap.add_argument("files", nargs="*", type=Path)
    ap.add_argument("--dir", type=Path)
    ap.add_argument("--verbose", action="store_true")
    args = ap.parse_args()

    targets: list[Path] = list(args.files)
    if args.dir:
        for p in sorted(args.dir.glob("Deep Math Review Note *.tex")):
            if "답지" in p.name or "smoke" in p.name.lower():
                continue
            targets.append(p)
    if not targets:
        ap.error("파일 또는 --dir 필수")

    total: list[str] = []
    for path in targets:
        violations = check_file(path)
        if violations:
            print(f"[SCAN] {path.name} — {len(violations)}건")
            for v in violations:
                print(f"  RED :: {v}")
        elif args.verbose:
            print(f"[SCAN] {path.name} — GREEN")
        total.extend(violations)

    print()
    if total:
        print(f"[RESULT] RED — 위반 {len(total)}건")
        return 1
    print("[RESULT] GREEN — 모든 equation* 체인 없음")
    return 0


if __name__ == "__main__":
    sys.exit(main())
