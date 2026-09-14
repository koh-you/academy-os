"""
Consolidate multi-CP slots in 8 answer sheets.
Strategy: keep the FIRST \begin{dmcriticalpoint}...\end{dmcriticalpoint} in each slot,
delete all subsequent CP blocks in the same slot.

Reasoning:
- The first CP typically captures the primary insight (CP1 ranking per §6-B).
- Preserves the '짧고 굵게' principle (v1.9).
- Safe deterministic transformation — no risky mechanical merging.
- Existing labels are already well-formed (완결 문장·15자 내외).

Also strips excess blank lines immediately following removed CP blocks so the surrounding
prose does not accumulate stray empty lines.
"""
from pathlib import Path
import re
import sys

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


def process(text: str):
    soltitle_pat = re.compile(r"\\dmsoltitle\{[^}]*\}\{[^}]*\}")
    soltitles = list(soltitle_pat.finditer(text))
    # For each CP block, assign to slot (last soltitle before it)
    cp_pat = re.compile(r"\\begin\{dmcriticalpoint\}.*?\\end\{dmcriticalpoint\}", re.DOTALL)
    cps = list(cp_pat.finditer(text))
    slot_cps = {}
    for cp in cps:
        # last soltitle before cp
        slot_idx = None
        for j, st in enumerate(soltitles):
            if st.start() < cp.start():
                slot_idx = j
            else:
                break
        if slot_idx is not None:
            slot_cps.setdefault(slot_idx, []).append(cp)

    # Determine spans to delete: for slots with >1 CP, delete CPs[1:] onwards.
    # Delete in reverse so earlier positions remain valid.
    delete_spans = []  # list of (start, end) in the original text
    slot_before = {}  # slot_idx -> original CP count
    slot_after = {}  # slot_idx -> resulting CP count (1)
    for slot_idx, block_list in slot_cps.items():
        slot_before[slot_idx] = len(block_list)
        if len(block_list) > 1:
            slot_after[slot_idx] = 1
            for cp in block_list[1:]:
                # Extend span to consume optional trailing blank line(s) up to next non-empty content
                start = cp.start()
                end = cp.end()
                # Trim also any preceding blank line pair AND trailing blank line
                # Grab up to a single trailing newline pair to keep structure clean.
                # Match trailing whitespace/newlines but leave at most one \n
                m = re.match(r"[ \t]*\n(?:[ \t]*\n)*", text[end:])
                if m:
                    # keep one newline; drop the rest of the blank block
                    end += m.end()
                # Also trim preceding blank line if it becomes double-blank after removal
                # Check what precedes 'start': if immediately preceded by \n\n keep only one \n
                # We handle preceding by absorbing one \n before
                if text[start-1:start] == "\n":
                    # already at line start; leave preceding \n
                    pass
                delete_spans.append((start, end))
        else:
            slot_after[slot_idx] = 1

    # Apply deletions
    delete_spans.sort(reverse=True)
    new_text = text
    for start, end in delete_spans:
        new_text = new_text[:start] + new_text[end:]

    # Clean up: collapse triple-or-more blank lines to double
    new_text = re.sub(r"\n{4,}", "\n\n\n", new_text)

    return new_text, slot_before, slot_after


def main():
    total_removed = 0
    per_file_report = []
    for fname in FILES:
        p = DIR / fname
        text = p.read_text(encoding="utf-8")
        new_text, before, after = process(text)
        multi_before = sum(1 for v in before.values() if v > 1)
        removed_blocks = sum(v - 1 for v in before.values() if v > 1)
        total_removed += removed_blocks
        # Verify: count CPs before/after in new_text
        cp_pat = re.compile(r"\\begin\{dmcriticalpoint\}")
        before_cnt = len(cp_pat.findall(text))
        after_cnt = len(cp_pat.findall(new_text))
        per_file_report.append((fname, multi_before, removed_blocks, before_cnt, after_cnt))
        # Write out
        p.write_text(new_text, encoding="utf-8")
        print(f"[OK] {fname}: multi_slots={multi_before} removed_blocks={removed_blocks} cp_before={before_cnt} cp_after={after_cnt}")

    print()
    print("=== TOTAL ===")
    print(f"Total blocks removed: {total_removed}")
    # verify no multi-CP remains
    for fname in FILES:
        p = DIR / fname
        text = p.read_text(encoding="utf-8")
        soltitle_pat = re.compile(r"\\dmsoltitle\{[^}]*\}\{[^}]*\}")
        soltitles = list(soltitle_pat.finditer(text))
        cp_pat = re.compile(r"\\begin\{dmcriticalpoint\}.*?\\end\{dmcriticalpoint\}", re.DOTALL)
        cps = list(cp_pat.finditer(text))
        slot_cps = {}
        for cp in cps:
            slot_idx = None
            for j, st in enumerate(soltitles):
                if st.start() < cp.start():
                    slot_idx = j
                else:
                    break
            if slot_idx is not None:
                slot_cps.setdefault(slot_idx, []).append(cp)
        multi_remaining = sum(1 for v in slot_cps.values() if len(v) > 1)
        if multi_remaining > 0:
            print(f"[WARN] {fname} still has {multi_remaining} multi-CP slots")
        else:
            print(f"[VERIFY] {fname} multi-CP slots: 0")


if __name__ == "__main__":
    main()
