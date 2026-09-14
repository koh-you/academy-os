import pypdf, os
paths = [
    r'C:\Users\user\OneDrive\Cluade Projects\Math books\참고자료\공통수학 1\고쟁이 공통수학1 2025\이투스에서 받은거(이걸로 인쇄가 편함)\고쟁이 공통수학1 2025.pdf',
    r'C:\Users\user\OneDrive\Cluade Projects\Math books\참고자료\공통수학2\[고등1-2] 공통수학2 (2022개정)\[고등1-2] 고쟁이 공통수학2 (2022개정).pdf',
]
for p in paths:
    r = pypdf.PdfReader(p)
    print(os.path.basename(p), 'pages:', len(r.pages))
