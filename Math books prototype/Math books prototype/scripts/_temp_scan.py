import os, re

def scan(label, pdir):
    result = []
    for f in sorted(os.listdir(pdir)):
        if not f.endswith('.txt'): continue
        pg = int(f.replace('p','').replace('.txt',''))
        txt = open(os.path.join(pdir, f), encoding='utf-8').read()
        step = None
        if '교과서를 정복하는' in txt: step = 'STEP1'
        if '실전문제 체화' in txt: step = 'STEP2' if step is None else step + '+STEP2'
        if '최상위권 굳히기' in txt or '최고난도' in txt: step = 'STEP3' if step is None else step + '+STEP3'
        # chapter marker: search for "0N " or big header
        m = re.search(r'^\s*(0[1-9]|1[0-9])\s', txt, re.M)
        # also look for chapter name
        header_hints = re.findall(r'(다항식의 연산|나머지정리|인수분해|복소수와|이차방정식|이차함수|여러 가지 방정식|여러 가지 부등식|경우의 수|순열과|순열|조합|행렬|평면좌표|직선의|원의 방정식|도형의 이동|집합|명제|함수|합성함수|역함수|유리|무리)', txt)
        result.append((pg, step, header_hints[:3] if header_hints else []))
    return result

for label, pdir in [('CM1', r'C:\Users\user\OneDrive\Cluade Projects\Math books\scripts\_temp_CM1'),
                    ('CM2', r'C:\Users\user\OneDrive\Cluade Projects\Math books\scripts\_temp_CM2')]:
    print(f'=== {label} ===')
    prev_step = None
    for pg, step, hints in scan(label, pdir):
        if step != prev_step and step is not None:
            print(f'p{pg:03d} {step:20s} {hints}')
            prev_step = step
