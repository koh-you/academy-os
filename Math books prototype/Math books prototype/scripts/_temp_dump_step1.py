"""Dump STEP 1 text for one chapter (all pages concatenated)."""
import os, sys

CM1_CHAPTERS = {
    'CH01': (8, 13, 'CM1'),
    'CH02': (27, 31, 'CM1'),
    'CH03': (49, 53, 'CM1'),
    'CH04': (69, 79, 'CM1'),
    'CH05': (103, 107, 'CM1'),
    'CH06': (125, 130, 'CM1'),
    'CH07': (142, 146, 'CM1'),
    'CH08': (162, 166, 'CM1'),
    'CH09': (182, 189, 'CM1'),
    'CH10': (205, 213, 'CM1'),
}
CM2_CHAPTERS = {
    'CH01': (8, 11, 'CM2'),
    'CH02': (23, 26, 'CM2'),
    'CH03': (40, 44, 'CM2'),
    'CH04': (59, 62, 'CM2'),
    'CH05': (79, 85, 'CM2'),
    'CH06': (105, 111, 'CM2'),
    'CM2-CH07': (135, 142, 'CM2'),
    'CM2-CH08': (167, 172, 'CM2'),
}

ALL = {}
for k, v in CM1_CHAPTERS.items():
    ALL[f'CM1-{k}'] = v
for k, v in CM2_CHAPTERS.items():
    ALL[k] = v

if len(sys.argv) < 2:
    print('usage: script.py CHAPTER_KEY')
    print('keys:', list(ALL))
    sys.exit(1)

import io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

key = sys.argv[1]
start, end, book = ALL[key]
pdir = rf'C:\Users\user\OneDrive\Cluade Projects\Math books\scripts\_fitz_{book}'
for pg in range(start, end + 1):
    f = os.path.join(pdir, f'p{pg:03d}.txt')
    print(f'\n===== PAGE {pg} =====')
    print(open(f, encoding='utf-8').read())
