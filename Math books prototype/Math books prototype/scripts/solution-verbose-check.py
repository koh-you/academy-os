#!/usr/bin/env python3
"""solution-verbose-check.py — 답지 풀이 서술 장황 감지.

규칙 (feedback_solution_conciseness.md · 세션 71):
  L3·실전 풀이는 특히 압축 필요. "글이 많다고 잘 전달되는건 아니다" 원칙.

감지 축 (5축):
  1. 메타 서술 : "먼저 A를 찾는다·조사한다·살핀다·정리한다·확인한다" — 서술 진행 안내 문구
  2. 괄호 부연 : "(근호 안이 커질수록 ...)" 등 자명한 수학 부연
  3. Verbose case enumeration : itemize 5개 이상 (표로 압축 권장)
  4. Sloppy 유도 : "재검토하면·종합하여·정리하면·살펴보면·파악하면"
  5. 반복 결론 : dmanswerbox 답이 이미 있는데 마지막에 "따라서 X이다" 재진술

스코프: dmsolution/multicols 안 (본편 예제 + 답지 풀이) 전체 · L3·실전 우선

Usage:
  python scripts/solution-verbose-check.py <파일1.tex> [...]
  python scripts/solution-verbose-check.py --dir output/공통수학2/DeeP-Math-정리편
  python scripts/solution-verbose-check.py --all  # 답지 전수

Exit: 0 GREEN · 1 위반.
"""
from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path

# 메타 서술 (풀이 진행 안내 · 삭제 권장)
META_PATTERNS = [
    (re.compile(r"먼저\s+[가-힣]+를?\s*(찾는다|조사한다|살핀다|정리한다|확인한다|본다)\s*\."), "메타 서술 '먼저 ~한다' — 결과 바로 서술"),
    (re.compile(r"[가-힣]+를?\s*기준으로\s*[가-힣]+의?\s*(개수|값|범위)를?\s*(조사|살핀다|판단|판정)"), "메타 서술 '~기준으로 ~조사한다' — 결과 바로"),
    (re.compile(r"(다음|이제|여기서)\s*(과\s*같이\s*)?[가-힣]+(를|을)\s*(살펴본다|살핀다|확인한다|정리한다)"), "메타 서술 '다음과 같이 ~한다' — 삭제"),
]

# 얼버무리는 표현
HEDGING_PATTERNS = [
    (re.compile(r"재검토\s*(하면|한다)"), "얼버무림 '재검토하면' — 명확한 유도 서술로 대체"),
    (re.compile(r"종합\s*(하여|한다)"), "얼버무림 '종합하여' — 구체적 조건 나열"),
    (re.compile(r"어긋나므로\s*재"), "얼버무림 '어긋나므로 재~' — 왜 어긋나는지 명시"),
]

# v2 신규 (2026-07-22 마스터 지적) : 인라인 수식으로 산술 조작 서술 · 표시식 (display) 로 옮겨야 함
# 패턴: `[동사]하면 [inline math]이고/이므로/이다` — inline math 안에 등호와 산술 표현 있음
INLINE_ARITH_PATTERNS = [
    (re.compile(r"통분(하면|한|하여)\s+분자는?\s*\$"), "인라인으로 통분식 서술 — display equation 으로 옮겨 표시"),
    (re.compile(r"전개(하면|한|하여)\s+[가-힣]*는?\s*\$[^$]*[+\-]"), "인라인으로 전개식 서술 — display equation 으로 옮겨 표시"),
    (re.compile(r"정리(하면|한|하여)\s+[가-힣]*는?\s*\$[^$]*=[^$]*\$이(고|므로|다)"), "인라인으로 정리 결과 서술 — display equation 으로 옮겨 표시"),
]

# v2 신규 : 반복 대입 문장 (3개 이상 · 표 또는 align 으로 압축 권장)
# 패턴: `$X = a$를 대입하면 ... $Y$이다. $X = b$를 대입하면 ...` (3회 이상)
REPEATED_SUB_RE = re.compile(
    r"\$[a-zA-Z][^$]{0,3}\s*=\s*[^$]+\$을?\s*대입(하면|한|하여)[^.]{1,80}\.\s*"
    r"\$[a-zA-Z][^$]{0,3}\s*=\s*[^$]+\$을?\s*대입(하면|한|하여)[^.]{1,80}\.\s*"
    r"\$[a-zA-Z][^$]{0,3}\s*=\s*[^$]+\$을?\s*대입"
)

# 반복 결론 (dmanswerbox 뒤 마지막 문장)
REDUNDANT_CONCLUSION_RE = re.compile(
    r"따라서\s+[^.]{5,80}(는|은|이|가)\s+[^.]{2,30}(이다|입니다|이므로)\s*\."
)

# Verbose itemize 감지 : \begin{itemize} 안 \item 개수 ≥ 5
ITEMIZE_RE = re.compile(r"\\begin\{itemize\}(.*?)\\end\{itemize\}", re.DOTALL)
ITEM_RE = re.compile(r"\\item\b")

# dmsolution 블록
DMSOL_RE = re.compile(r"\\begin\{dmsolution\}(.*?)\\end\{dmsolution\}", re.DOTALL)
# multicols 블록 (답지)
MULTICOLS_RE = re.compile(r"\\begin\{multicols\*?\}(.*?)\\end\{multicols\*?\}", re.DOTALL)


def check_body(body: str, start_line: int, path_name: str, scope: str) -> list[str]:
    violations = []
    # 메타 서술
    for pat, hint in META_PATTERNS:
        for m in pat.finditer(body):
            line = start_line + body[:m.start()].count("\n")
            violations.append(f"{path_name}:{line} [{scope}] · {hint} · '{m.group(0)[:60]}'")
    # 얼버무림
    for pat, hint in HEDGING_PATTERNS:
        for m in pat.finditer(body):
            line = start_line + body[:m.start()].count("\n")
            violations.append(f"{path_name}:{line} [{scope}] · {hint}")
    # v2 신규 : 인라인 산술 서술
    for pat, hint in INLINE_ARITH_PATTERNS:
        for m in pat.finditer(body):
            line = start_line + body[:m.start()].count("\n")
            violations.append(f"{path_name}:{line} [{scope}] · {hint} · '{m.group(0)[:60]}'")
    # v2 신규 : 반복 대입 (3회+)
    for m in REPEATED_SUB_RE.finditer(body):
        line = start_line + body[:m.start()].count("\n")
        violations.append(f"{path_name}:{line} [{scope}] · 반복 대입 3회+ · 표 또는 align 으로 압축 권장")
    # verbose itemize
    for m in ITEMIZE_RE.finditer(body):
        item_count = len(ITEM_RE.findall(m.group(1)))
        if item_count >= 5:
            line = start_line + body[:m.start()].count("\n")
            violations.append(
                f"{path_name}:{line} [{scope}] · verbose itemize {item_count}개 (5개 이상) · 표로 압축 또는 3~4 case 로 축약"
            )
    # 반복 결론 (dmsolution 안 · 마지막 문장이 "따라서 X이다")
    for m in REDUNDANT_CONCLUSION_RE.finditer(body):
        # 문장이 dmsolution/multicols 끝부분에 있어야 반복 결론
        remaining = body[m.end():].strip()
        if len(remaining) < 30:  # 뒤에 별로 없음
            line = start_line + body[:m.start()].count("\n")
            violations.append(
                f"{path_name}:{line} [{scope}] · 반복 결론 '따라서 X이다' · answerbox 에 이미 답 있음 · 삭제 권장"
            )
    return violations


def check_file(path: Path) -> list[str]:
    text = path.read_text(encoding="utf-8", errors="replace")
    text = re.sub(r"(?m)^\s*%.*$", "", text)
    violations = []
    # dmsolution 블록 (본편)
    for m in DMSOL_RE.finditer(text):
        start_line = text.count("\n", 0, m.start()) + 1
        violations.extend(check_body(m.group(1), start_line, path.name, "dmsolution"))
    # multicols 블록 (답지)
    for m in MULTICOLS_RE.finditer(text):
        start_line = text.count("\n", 0, m.start()) + 1
        violations.extend(check_body(m.group(1), start_line, path.name, "multicols"))
    return violations


def find_answer_sheets(root: Path) -> list[Path]:
    results = []
    for p in root.rglob("*.tex"):
        if "답지" in p.name or "solution" in p.name.lower():
            results.append(p)
    return sorted(results)


def main() -> int:
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass
    ap = argparse.ArgumentParser()
    ap.add_argument("files", nargs="*", type=Path)
    ap.add_argument("--dir", type=Path, help="본편·답지 함께 스캔 (Deep Math Review Note *.tex)")
    ap.add_argument("--all", action="store_true", help="output/ 하위 답지 전수")
    ap.add_argument("--verbose", action="store_true")
    ap.add_argument("--soft", action="store_true", help="RED 시 exit 0")
    args = ap.parse_args()

    targets: list[Path] = list(args.files)
    if args.dir:
        for p in sorted(args.dir.glob("Deep Math Review Note *.tex")):
            if "smoke" in p.name.lower():
                continue
            targets.append(p)
    if args.all:
        targets.extend(find_answer_sheets(Path("output")))
    # dedup
    targets = sorted(set(targets), key=lambda p: str(p))
    if not targets:
        ap.error("파일 · --dir · --all 중 하나 필수")

    all_violations = []
    for path in targets:
        violations = check_file(path)
        if violations:
            print(f"[SCAN] {path.name} — {len(violations)}건")
            for v in violations[:10]:  # 파일당 최대 10건 표시
                print(f"  RED :: {v}")
            if len(violations) > 10:
                print(f"  ... 외 {len(violations) - 10}건")
        elif args.verbose:
            print(f"[SCAN] {path.name} — GREEN")
        all_violations.extend(violations)

    print()
    if all_violations:
        print(f"[RESULT] RED — 장황 위반 {len(all_violations)}건")
        return 0 if args.soft else 1
    print("[RESULT] GREEN — 모든 풀이 압축 정합")
    return 0


if __name__ == "__main__":
    sys.exit(main())
