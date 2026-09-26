"""
Detect slots with multiple \begin{dmcriticalpoint} blocks between \dmsoltitle commands.
Report per-file slot listing with CP count and text ranges.
"""
import re
import sys
from pathlib import Path

DIR = Path(r"C:/Users/user/OneDrive/Cluade Projects/Math books/output/공통수학2/DeeP-Math-정리편")

FILES = [
    "Deep Math Review Note 01-평면좌표-답지.tex",
    "Deep Math Review Note 02-직선-답지.tex",
    "Deep Math Review Note 03-원-답지.tex",
    "Deep Math Review Note 04-이동-답지.tex",
    "Deep Math Review Note 05-ST-집합명제-답지.tex",
    "Deep Math Review Note 06-FN-함수-답지.tex",
    "Deep Math Review Note 07-RF01-유리함수-답지.tex",
    "Deep Math Review Note 08-RF02-무리함수-답지.tex",
]


def analyze(filepath: Path):
    text = filepath.read_text(encoding="utf-8")
    # Find all \dmsoltitle{...}{...} positions
    soltitle_pat = re.compile(r"\\dmsoltitle\{([^}]*)\}\{([^}]*)\}")
    soltitles = list(soltitle_pat.finditer(text))

    # Find all \begin{dmcriticalpoint} positions
    cp_begin_pat = re.compile(r"\\begin\{dmcriticalpoint\}")
    cp_end_pat = re.compile(r"\\end\{dmcriticalpoint\}")
    cp_begins = list(cp_begin_pat.finditer(text))
    cp_ends = list(cp_end_pat.finditer(text))

    # Assign each CP to the slot it belongs to (by preceding soltitle)
    slot_cps = {}  # slot_index -> list of (cp_begin_pos, cp_end_pos)
    for i, cp_b in enumerate(cp_begins):
        # find matching end
        cp_e = cp_ends[i]
        # find last soltitle before cp_b
        slot_idx = None
        for j, st in enumerate(soltitles):
            if st.start() < cp_b.start():
                slot_idx = j
            else:
                break
        if slot_idx is not None:
            slot_cps.setdefault(slot_idx, []).append((cp_b.start(), cp_e.end()))

    multi = {k: v for k, v in slot_cps.items() if len(v) > 1}
    return soltitles, multi


def resolve_targets():
    """🔴 2026-07-30 (세션 105) 수리 — 종전에는 DIR·FILES 하드코딩으로 인자를 무시했다.
    시험지 답지를 인자로 넘겨도 정리편 8권을 스캔한 출력이 나와 「검사했다」고 오인되었고,
    그 결과 CP 상한 정책이 시험지 답지에 대해 자동 검증 없이 운영되었다.
    이제 인자로 받은 경로를 우선 사용한다. 인자가 없을 때만 종전 정리편 기본값을 쓴다."""
    args = [a for a in sys.argv[1:] if not a.startswith("-")]
    if args:
        out = []
        for a in args:
            q = Path(a)
            if q.is_dir():
                out.extend(sorted(q.glob("*답지*.tex")))
            elif q.exists():
                out.append(q)
            else:
                print(f"MISSING: {a}")
        return out
    return [DIR / f for f in FILES]


def main():
    total_multi = 0
    targets = resolve_targets()
    if not targets:
        print("대상 파일이 없습니다. 사용법: python multi-cp-detect.py <답지.tex ...>")
        sys.exit(2)
    for p in targets:
        fname = p.name
        if not p.exists():
            print(f"MISSING: {fname}")
            continue
        soltitles, multi = analyze(p)
        print(f"\n=== {fname} ===")
        print(f"  Total slots: {len(soltitles)}")
        print(f"  Multi-CP slots: {len(multi)}")
        for slot_idx, cps in multi.items():
            title = soltitles[slot_idx].group(1) + "/" + soltitles[slot_idx].group(2)
            print(f"    Slot#{slot_idx} [{title}] : {len(cps)} CPs")
        total_multi += len(multi)
    print(f"\nGRAND TOTAL multi-CP slots: {total_multi}")


if __name__ == "__main__":
    main()
