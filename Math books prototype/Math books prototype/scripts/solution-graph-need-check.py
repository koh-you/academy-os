#!/usr/bin/env python3
"""solution-graph-need-check.py — 답지 풀이 그래프 필요성 감지.

규칙 (feedback_solution_graph_requirement.md · 세션 72):
  5 유형 (곡선-직선 교점·최댓값·조각함수·절댓값·역함수) 은 그래프 필수.

Usage:
  python scripts/solution-graph-need-check.py --dir output/공통수학2/DeeP-Math-정리편
  python scripts/solution-graph-need-check.py --all
"""
from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path

STRONG_TRIGGERS = [
    r"그래프",
    r"교점",
    r"만나지\s*않",
    r"접(할|한|하는|점)",
    r"접선",
    r"세\s*점",
    r"네\s*점",
    r"위치\s*관계",
    r"조각\s*함수",
    r"역함수",
    r"자기\s*자신",
    r"대칭",
    r"[가-힣]?의?\s*개형",
]

EXTREMUM_TRIGGERS = [r"최댓값", r"최솟값", r"최대\s*값", r"최소\s*값"]

ALGEBRAIC_HINTS = [
    r"판별식",
    r"근과\s*계수",
    r"인수분해",
    r"통분(하면|한|하여)",
    # v1.1 (2026-07-23 세션 75): 화이트리스트 확장
    r"산술[- ]?기하평균",       # CM2 §집합과 명제 §산술기하평균 절대부등식
    r"코시[- ]?슈바르츠",
    r"등호는",                  # 최적화 문제에서 등호 조건 명시
    r"대칭\s*차집합",           # ST 집합 도구
    r"$n\([A-Z]",              # 집합 원소 개수 계산
    r"진리집합",
    r"진리\s*집합",
    r"조건\s*수",              # 논리·명제 도구
    r"명제",
    r"부등식의?\s*해",         # 부등식 계산
    r"복소\s*수",              # CM1 EQ 복소수 계산
    r"원과\s*계수",
    r"이항\s*정리",
    r"완전\s*제곱",
]

# v1.1 (2026-07-23 세션 75): 단원별 화이트리스트 (파일명·경로 기반)
# 각 소단원의 "함수 그래프 필요 없음" 특성 반영
UNIT_WHITELIST_KEYWORDS = {
    "ST-집합명제": ["집합", "원소", "명제", "필요충분조건", "산술기하평균", "코시", "부분집합", "여집합"],
    "05-ST": ["집합", "원소", "명제", "필요충분조건", "산술기하평균", "코시", "부분집합", "여집합"],
    "01-평면좌표": ["내분", "중점", "거리", "무게중심", "수직이등분선"],  # 좌표 계산 위주
    "02-직선": ["기울기", "$y$절편", "수직", "평행"],  # 좌표 산술 위주
}


def get_unit_whitelist(path: Path) -> list[str]:
    """파일 경로에서 단원 감지 후 화이트리스트 키워드 반환."""
    pathname = path.name
    for unit, keywords in UNIT_WHITELIST_KEYWORDS.items():
        if unit in pathname:
            return keywords
    return []

FIGURE_PATTERNS = [r"\\begin\{tikzpicture\}", r"\\includegraphics"]

DMSOL_RE = re.compile(r"\\begin\{dmsolution\}(.*?)\\end\{dmsolution\}", re.DOTALL)
MULTICOLS_RE = re.compile(r"\\begin\{multicols\*?\}(.*?)\\end\{multicols\*?\}", re.DOTALL)
SOL_SLICE_RE = re.compile(
    r"\\dmsoltitle\{(\d+)\}\{([^{}]+)\}(.*?)(?=\\dmsoltitle\{|\\end\{multicols\*?\}|$)",
    re.DOTALL,
)


def has_figure(body: str) -> bool:
    return any(re.search(pat, body) for pat in FIGURE_PATTERNS)


def classify(body: str, whitelist: list[str] | None = None) -> tuple[str, list[str]]:
    triggers = []
    for pat in STRONG_TRIGGERS + EXTREMUM_TRIGGERS:
        m = re.search(pat, body)
        if m:
            triggers.append(m.group(0)[:20])
    if not triggers:
        return ("GREEN", [])
    if has_figure(body):
        return ("GREEN", triggers)
    # v1.1: 단원 화이트리스트 감도 조정 (2 이상 매치 시 GREEN)
    if whitelist:
        whitelist_hits = sum(1 for kw in whitelist if kw in body)
        if whitelist_hits >= 2:
            return ("GREEN", triggers)
    algebraic_hits = sum(1 for pat in ALGEBRAIC_HINTS if re.search(pat, body))
    if algebraic_hits >= 2:
        return ("YELLOW", triggers)
    return ("RED", triggers)


def check_file(path: Path) -> tuple[list[str], list[str]]:
    text = path.read_text(encoding="utf-8", errors="replace")
    text = re.sub(r"(?m)^\s*%.*$", "", text)
    reds, yellows = [], []
    whitelist = get_unit_whitelist(path)  # v1.1: 단원별 화이트리스트

    for m in DMSOL_RE.finditer(text):
        body = m.group(1)
        start_line = text.count("\n", 0, m.start()) + 1
        sev, triggers = classify(body, whitelist)
        if sev == "RED":
            reds.append(f"{path.name}:{start_line} [dmsolution] · 트리거: {', '.join(triggers[:3])}")
        elif sev == "YELLOW":
            yellows.append(f"{path.name}:{start_line} [dmsolution] · 트리거: {', '.join(triggers[:3])}")

    for mc in MULTICOLS_RE.finditer(text):
        mc_body = mc.group(1)
        mc_start_line = text.count("\n", 0, mc.start()) + 1
        slices = list(SOL_SLICE_RE.finditer(mc_body))
        if not slices:
            sev, triggers = classify(mc_body, whitelist)
            if sev == "RED":
                reds.append(f"{path.name}:{mc_start_line} [multicols] · 트리거: {', '.join(triggers[:3])}")
            continue
        for s in slices:
            slot = s.group(1)
            title = s.group(2)[:25]
            body = s.group(3)
            rel_line = mc_body.count("\n", 0, s.start()) + 1
            abs_line = mc_start_line + rel_line
            sev, triggers = classify(body, whitelist)
            if sev == "RED":
                reds.append(f"{path.name}:{abs_line} [#{slot} {title}] · 트리거: {', '.join(triggers[:3])}")
            elif sev == "YELLOW":
                yellows.append(f"{path.name}:{abs_line} [#{slot} {title}] · 트리거: {', '.join(triggers[:3])}")

    return reds, yellows


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
    ap.add_argument("--dir", type=Path)
    ap.add_argument("--all", action="store_true")
    ap.add_argument("--verbose", action="store_true")
    ap.add_argument("--soft", action="store_true")
    args = ap.parse_args()

    targets: list[Path] = list(args.files)
    if args.dir:
        for p in sorted(args.dir.glob("Deep Math Review Note *.tex")):
            if "smoke" in p.name.lower():
                continue
            targets.append(p)
    if args.all:
        targets.extend(find_answer_sheets(Path("output")))
    targets = sorted(set(targets), key=lambda p: str(p))
    if not targets:
        ap.error("파일 · --dir · --all 중 하나 필수")

    all_reds, all_yellows = [], []
    for path in targets:
        reds, yellows = check_file(path)
        if reds or yellows:
            print(f"[SCAN] {path.name} — RED {len(reds)} · YELLOW {len(yellows)}")
            for r in reds[:6]:
                print(f"  RED :: {r}")
            if len(reds) > 6:
                print(f"  ... 외 {len(reds) - 6}건 RED")
            for y in yellows[:3]:
                print(f"  YELLOW :: {y}")
            if len(yellows) > 3:
                print(f"  ... 외 {len(yellows) - 3}건 YELLOW")
        elif args.verbose:
            print(f"[SCAN] {path.name} — GREEN")
        all_reds.extend(reds)
        all_yellows.extend(yellows)

    print()
    if all_reds:
        print(f"[RESULT] RED {len(all_reds)}건 · YELLOW {len(all_yellows)}건 (그래프 필요 미포함)")
        return 0 if args.soft else 1
    if all_yellows:
        print(f"[RESULT] YELLOW {len(all_yellows)}건 (검토)")
        return 0
    print("[RESULT] GREEN — 그래프 필요 문제 모두 대응")
    return 0


if __name__ == "__main__":
    sys.exit(main())
