import pypdf, os, sys, re

paths = {
    'CM1': r'C:\Users\user\OneDrive\Cluade Projects\Math books\참고자료\공통수학 1\고쟁이 공통수학1 2025\이투스에서 받은거(이걸로 인쇄가 편함)\고쟁이 공통수학1 2025.pdf',
    'CM2': r'C:\Users\user\OneDrive\Cluade Projects\Math books\참고자료\공통수학2\[고등1-2] 공통수학2 (2022개정)\[고등1-2] 고쟁이 공통수학2 (2022개정).pdf',
}

# Extract all pages and save to files for grep
for label, p in paths.items():
    r = pypdf.PdfReader(p)
    n = len(r.pages)
    outdir = rf'C:\Users\user\OneDrive\Cluade Projects\Math books\scripts\_temp_{label}'
    os.makedirs(outdir, exist_ok=True)
    for i in range(n):
        try:
            txt = r.pages[i].extract_text()
        except Exception as e:
            txt = f"ERR: {e}"
        with open(os.path.join(outdir, f'p{i+1:03d}.txt'), 'w', encoding='utf-8') as f:
            f.write(txt or '')
    print(f'{label}: extracted {n} pages to {outdir}')
