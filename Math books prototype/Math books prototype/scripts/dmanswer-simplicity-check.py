#!/usr/bin/env python3
"""dmanswer-simplicity-check.py — \\dmanswer{} 안 서술 프리픽스·수식 라벨 감지.

규칙 (feedback_answer_final_value_only.md · 세션 71 · 기존 feedback_answer_display_final_value_only 확장):
  \\dmanswer{} 의 내용은 **최종 값만** — 서술 프리픽스 (예: "최솟값은", "현의 길이는", "치역")
  또는 수식 라벨 (예: `y = ...`, `PT = ...`, `Mm = ...`) 을 붙이지 말 것.

위반 패턴:
  - `\\dmanswer{한글단어 $...$}` — 한글 프리픽스 (예: `\\dmanswer{최솟값 $27$}`)
  - `\\dmanswer{$X = Y$}` 형태 · X 가 단일 변수·복합 라벨 (예: `\\dmanswer{$Mm = 58$}`)
    - 예외 : 답이 방정식 자체인 경우 (예: `\\dmanswer{$(x-1)^2 + (y+2)^2 = 16$}` — 원의 방정식은 GREEN)
    - 판정 : LHS 가 짧고 (≤ 4 char) 우변에 실질 계산값 · GREEN 은 LHS 가 다변수식·(x-a)^2 등

허용 패턴:
  - `\\dmanswer{$5$}` — 순수 값 GREEN
  - `\\dmanswer{$8\\pi$}` — 순수 값 GREEN
  - `\\dmanswer{$(x-1)^2 + (y+2)^2 = 16$}` — 방정식 자체가 답 GREEN
  - `\\dmanswer{$a=1$, $b=2$}` — 다중 값 GREEN (라벨 없이 값 나열)
  - `\\dmanswer{ㄱ, ㄷ}` — 보기 답 GREEN
  - `\\dmanswer{정의역 $x \\ge 0$, 치역 $y \\le 1$}` — 서술이 필수 정보 (정의역/치역 등) 인 경우 YELLOW · 수동 검토

Usage:
  python scripts/dmanswer-simplicity-check.py <파일1.tex> [...]
  python scripts/dmanswer-simplicity-check.py --dir output/공통수학2/DeeP-Math-정리편

Exit: 0 GREEN · 1 위반.
"""
from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path

DMANSWER_RE = re.compile(r"\\dmanswer\{([^{}]*(?:\{[^{}]*\}[^{}]*)*)\}")

# 순수 값 판정 - 한글 없고 $ 로 시작해서 $ 로 끝
PURE_MATH_RE = re.compile(r"^\$[^$]*\$(?:[,\s]*\$[^$]*\$)*$")

# 한글 프리픽스 판정
KOREAN_PREFIX_RE = re.compile(r"^[가-힣]")

# 짧은 라벨 = value 감지 (변수 · 하나만 · 계산값)
# 패턴: `$SHORT_LABEL = VALUE$`
LABEL_EQ_RE = re.compile(r"^\$([^$=]{1,6})\s*=\s*([^$]+)\$$")

# 정의역/치역/최솟값 등 서술 정보 (YELLOW · 필수 정보)
YELLOW_KOREAN_TERMS = {"정의역", "치역", "부등식"}


def classify(content: str) -> tuple[str, str]:
    """Return (severity, note). severity in {'GREEN', 'YELLOW', 'RED'}."""
    stripped = content.strip()

    # 한글 프리픽스 검사
    if KOREAN_PREFIX_RE.match(stripped):
        first_word = re.match(r"^([가-힣]+)", stripped).group(1)
        if first_word in YELLOW_KOREAN_TERMS:
            return ("YELLOW", f"한글 서술 정보 '{first_word}' — 수동 검토")
        return ("RED", f"한글 프리픽스 '{first_word}...' — 최종값만 남기고 삭제 권장")

    # \textcircled 등 특수 기호는 GREEN
    if stripped.startswith("\\textcircled") or stripped.startswith("("):
        return ("GREEN", "")

    # 순수 수식 (여러 $...$ 나열 포함)
    # 예외 : $LABEL = VALUE$ · 짧은 라벨 감지
    single_math_match = re.match(r"^\$([^$]+)\$$", stripped)
    if single_math_match:
        inner = single_math_match.group(1)
        # 다변수 답 (`a = 1, b = 2, c = 3`) → GREEN (라벨 필수)
        if inner.count("=") >= 2 and "," in inner:
            return ("GREEN", "")
        # `LHS = RHS` 형태 감지 (좌변이 짧고 우변에 값)
        eq_match = re.match(r"^([^=]{1,10})\s*=\s*(.+)$", inner)
        if eq_match:
            lhs = eq_match.group(1).strip()
            rhs = eq_match.group(2).strip()
            # 방정식 (x-...)^2 · a^2+b^2 등 우변에도 대응 방정식 → GREEN
            if "(" in lhs or "^{" in lhs or "^2" in lhs or "^{2}" in lhs:
                return ("GREEN", "")
            # \overline · \mathrm 라벨은 라벨 프리픽스
            if "\\overline" in lhs or "\\mathrm" in lhs:
                return ("RED", f"수식 라벨 프리픽스 '{lhs}=' — 최종값 '{rhs}' 만 남기고 삭제 권장")
            # 짧은 변수 라벨 (a·b·k·Mm 등)
            if len(lhs) <= 4 and re.match(r"^[a-zA-Z][a-zA-Z]?$", lhs):
                # 예외 : y = ... 방정식 (직선/함수 답) — RHS 가 x 를 포함하면 GREEN
                if "x" in rhs and lhs == "y":
                    return ("GREEN", "")
                return ("RED", f"짧은 라벨 '{lhs}=' — 값 '{rhs}' 만 남기고 삭제 권장")
        return ("GREEN", "")

    # 다중 $...$ 나열 (예: $a=1$, $b=2$) 은 GREEN
    if PURE_MATH_RE.match(stripped) or "\\ " in stripped or "," in stripped:
        return ("GREEN", "")

    return ("GREEN", "")


def check_file(path: Path) -> tuple[list[str], list[str]]:
    """Return (red_violations, yellow_warnings)."""
    text = path.read_text(encoding="utf-8", errors="replace")
    text_no_comment = re.sub(r"(?m)^\s*%.*$", "", text)
    reds, yellows = [], []
    for m in DMANSWER_RE.finditer(text_no_comment):
        content = m.group(1)
        line = text_no_comment.count("\n", 0, m.start()) + 1
        severity, note = classify(content)
        if severity == "RED":
            reds.append(f"{path.name}:{line} :: \\dmanswer{{{content[:60]}}} — {note}")
        elif severity == "YELLOW":
            yellows.append(f"{path.name}:{line} :: \\dmanswer{{{content[:60]}}} — {note}")
    return reds, yellows


def main() -> int:
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass
    ap = argparse.ArgumentParser()
    ap.add_argument("files", nargs="*", type=Path)
    ap.add_argument("--dir", type=Path)
    ap.add_argument("--verbose", action="store_true")
    ap.add_argument("--soft", action="store_true", help="YELLOW 만 표시, exit 0 유지")
    args = ap.parse_args()

    targets: list[Path] = list(args.files)
    if args.dir:
        for p in sorted(args.dir.glob("Deep Math Review Note *.tex")):
            if "답지" in p.name or "smoke" in p.name.lower():
                continue
            targets.append(p)
    if not targets:
        ap.error("파일 또는 --dir 필수")

    all_reds, all_yellows = [], []
    for path in targets:
        reds, yellows = check_file(path)
        if reds or yellows:
            print(f"[SCAN] {path.name} — RED {len(reds)} · YELLOW {len(yellows)}")
            for r in reds:
                print(f"  RED :: {r}")
            for y in yellows:
                print(f"  YELLOW :: {y}")
        elif args.verbose:
            print(f"[SCAN] {path.name} — GREEN")
        all_reds.extend(reds)
        all_yellows.extend(yellows)

    print()
    if all_reds:
        print(f"[RESULT] RED — 위반 {len(all_reds)}건 · YELLOW {len(all_yellows)}건")
        return 0 if args.soft else 1
    if all_yellows:
        print(f"[RESULT] YELLOW {len(all_yellows)}건 (수동 검토)")
        return 0
    print("[RESULT] GREEN — 모든 \\dmanswer 간결")
    return 0


if __name__ == "__main__":
    sys.exit(main())
