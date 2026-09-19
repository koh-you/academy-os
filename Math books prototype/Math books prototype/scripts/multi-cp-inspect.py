"""Inspect first multi-CP slot in file 01 to understand structure."""
from pathlib import Path
import re

p = Path(r"C:/Users/user/OneDrive/Cluade Projects/Math books/output/공통수학2/DeeP-Math-정리편/Deep Math Review Note 01-평면좌표-답지.tex")
text = p.read_text(encoding='utf-8')
soltitles = list(re.finditer(r"\\dmsoltitle\{[^}]*\}\{[^}]*\}", text))
print("slots:", len(soltitles))
# slot 31
s = soltitles[31].start()
e = soltitles[32].start()
seg = text[s:e]
print("=== SLOT 31 ===")
for m in re.finditer(r"\\begin\{dmcriticalpoint\}.*?\\end\{dmcriticalpoint\}", seg, re.DOTALL):
    print("---CP---")
    print(m.group(0))
    print()

# slot 39
s = soltitles[39].start()
e = soltitles[40].start()
seg = text[s:e]
print("=== SLOT 39 ===")
for m in re.finditer(r"\\begin\{dmcriticalpoint\}.*?\\end\{dmcriticalpoint\}", seg, re.DOTALL):
    print("---CP---")
    print(m.group(0))
    print()
