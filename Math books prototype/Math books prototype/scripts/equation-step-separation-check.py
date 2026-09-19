#!/usr/bin/env python3
"""equation-step-separation-check.py — 예제 풀이 (dmsolution) 안 추임새 "이다." 감지.

규칙 (feedback_equation_step_separation.md · 세션 71):
  \\begin{equation*}...\\end{equation*} 다음 줄이 lone "이다." (또는 "이다" 만 있는 짧은 라인) 이면 RED.
  수식 자체가 결론이므로 추임새 filler 는 삭제해야 함.

허용 패턴:
  - `\\end{equation*}` 직후 `\\dmanswer{...}` → GREEN (답 마무리)
  - 직후에 다른 문장 (예: `양변을 전개하여 정리하면`) → GREEN (다음 단계 이어짐)
  - 직후 빈 줄 후 다른 문장 → GREEN

위반 패턴:
  - `\\end{equation*}` 직후 (빈 줄 허용) `이다\\.` 만 있는 라인 · 이후 개행 · 다른 내용

스코프: dmsolution 블록 안만 검사 (dmconcept·dmapproach 등 개념 설명은 예외 · 학습 문장 필요).

Usage:
  python scripts/equation-step-separation-check.py <파일1.tex> [...]
  python scripts/equation-step-separation-check.py --dir output/공통수학2/DeeP-Math-정리편

Exit: 0 GREEN · 1 위반.
"""
from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path

DMSOLUTION_RE = re.compile(
    r"\\begin\{dmsolution\}(.*?)\\end\{dmsolution\}",
    re.DOTALL,
)

# equation* 뒤에 나오는 lone "이다." 감지
# 패턴: \end{equation*} \n\n* [공백만] 이다\.\s*$
IDA_AFTER_EQ_RE = re.compile(
    r"\\end\{equation\*\}\s*\n\s*\n?\s*(이다\.?)\s*(?=\n)",
    re.MULTILINE,
)


def check_file(path: Path) -> list[str]:
    text = path.read_text(encoding="utf-8", errors="replace")
    text_no_comment = re.sub(r"(?m)^\s*%.*$", "", text)
    violations = []

    for sol_m in DMSOLUTION_RE.finditer(text_no_comment):
        sol_body = sol_m.group(1)
        sol_start = text_no_comment.count("\n", 0, sol_m.start()) + 1
        for m in IDA_AFTER_EQ_RE.finditer(sol_body):
            relative_line = sol_body.count("\n", 0, m.start()) + 1
            abs_line = sol_start + relative_line
            violations.append(
                f"{path.name}:{abs_line} :: dmsolution 안 equation* 뒤 lone '이다.' — 삭제 권장"
            )
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
        print(f"[RESULT] RED — 위반 {len(total)}건 (dmsolution 안 잉여 '이다.')")
        return 1
    print("[RESULT] GREEN — 모든 dmsolution 추임새 정합")
    return 0


if __name__ == "__main__":
    sys.exit(main())
