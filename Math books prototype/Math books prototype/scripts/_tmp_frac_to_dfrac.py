#!/usr/bin/env python3
"""답지 8권 \\frac·\\tfrac -> \\dfrac 일괄 치환."""
import re
import sys
from pathlib import Path

sys.stdout.reconfigure(encoding='utf-8', errors='replace')

FRAC_RE = re.compile(r'\\frac\{')
TFRAC_RE = re.compile(r'\\tfrac\{')

total_frac = total_tfrac = 0
folder = Path(r'C:/Users/user/OneDrive/Cluade Projects/Math books/output/공통수학2/DeeP-Math-정리편')
for f in folder.glob('*답지.tex'):
    text = f.read_text(encoding='utf-8')
    n_frac = len(FRAC_RE.findall(text))
    n_tfrac = len(TFRAC_RE.findall(text))
    new = FRAC_RE.sub(r'\\dfrac{', text)
    new = TFRAC_RE.sub(r'\\dfrac{', new)
    if new != text:
        f.write_text(new, encoding='utf-8')
        total_frac += n_frac
        total_tfrac += n_tfrac
        print(f'{f.name}: frac {n_frac} + tfrac {n_tfrac} -> dfrac')

print(f'TOTAL: frac {total_frac} + tfrac {total_tfrac} = {total_frac + total_tfrac} 건 dfrac 통일')
