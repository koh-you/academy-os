"""Inspect all multi-CP slots to see labels + first sentences."""
from pathlib import Path
import re

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


def extract_cp_data(seg):
    """Extract label and body from each CP block in segment."""
    out = []
    for m in re.finditer(r"\\begin\{dmcriticalpoint\}(.*?)\\end\{dmcriticalpoint\}", seg, re.DOTALL):
        inner = m.group(1)
        lbl_m = re.search(r"\\dmcplabel\{([^}]*)\}", inner)
        if lbl_m:
            label = lbl_m.group(1)
            # body: text after \dmcplabel{...}: up to end
            after = inner[lbl_m.end():]
            # strip leading ':' and space
            body = after.strip().lstrip(':').strip()
            out.append((label, body))
        else:
            out.append(("(no label)", inner.strip()))
    return out


def main():
    for fname in FILES:
        p = DIR / fname
        text = p.read_text(encoding="utf-8")
        soltitle_pat = re.compile(r"\\dmsoltitle\{([^}]*)\}\{([^}]*)\}")
        soltitles = list(soltitle_pat.finditer(text))
        cp_pat = re.compile(r"\\begin\{dmcriticalpoint\}")
        cps = list(cp_pat.finditer(text))
        slot_cp_ranges = {}
        for cp in cps:
            slot_idx = None
            for j, st in enumerate(soltitles):
                if st.start() < cp.start():
                    slot_idx = j
                else:
                    break
            slot_cp_ranges.setdefault(slot_idx, []).append(cp)

        print(f"\n### {fname}")
        for slot_idx, cp_list in slot_cp_ranges.items():
            if len(cp_list) > 1:
                s = soltitles[slot_idx].start()
                e = soltitles[slot_idx+1].start() if slot_idx+1 < len(soltitles) else len(text)
                seg = text[s:e]
                title = soltitles[slot_idx].group(1) + "/" + soltitles[slot_idx].group(2)
                cps_data = extract_cp_data(seg)
                print(f"  Slot#{slot_idx} [{title}] ({len(cps_data)} CPs):")
                for i, (lbl, body) in enumerate(cps_data, 1):
                    body_short = body[:80] + "..." if len(body) > 80 else body
                    print(f"    CP{i} LABEL: {lbl}")
                    print(f"    CP{i} BODY : {body_short}")


if __name__ == "__main__":
    main()
