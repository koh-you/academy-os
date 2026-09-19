import fitz, os

paths = {
    'CM1': r'C:\Users\user\OneDrive\Cluade Projects\Math books\참고자료\공통수학 1\고쟁이 공통수학1 2025\이투스에서 받은거(이걸로 인쇄가 편함)\고쟁이 공통수학1 2025.pdf',
    'CM2': r'C:\Users\user\OneDrive\Cluade Projects\Math books\참고자료\공통수학2\[고등1-2] 공통수학2 (2022개정)\[고등1-2] 고쟁이 공통수학2 (2022개정).pdf',
}

for label, p in paths.items():
    doc = fitz.open(p)
    n = doc.page_count
    outdir = rf'C:\Users\user\OneDrive\Cluade Projects\Math books\scripts\_fitz_{label}'
    os.makedirs(outdir, exist_ok=True)
    for i in range(n):
        try:
            txt = doc.load_page(i).get_text('text')
        except Exception as e:
            txt = f"ERR: {e}"
        with open(os.path.join(outdir, f'p{i+1:03d}.txt'), 'w', encoding='utf-8') as f:
            f.write(txt or '')
    print(f'{label}: extracted {n} pages -> {outdir}')
    doc.close()
