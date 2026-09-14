import os, re

# Chapter → page range for STEP 1 (from earlier scan)
CM1_CHAPTERS = [
    ('CH01', '다항식연산', 8, 13),
    ('CH02', '항등식나머지', 27, 31),
    ('CH03', '인수분해', 49, 53),
    ('CH04', '복소수이차방정식', 69, 79),
    ('CH05', '이차함수', 103, 107),
    ('CH06', '여러방정식', 125, 130),
    ('CH07', '여러부등식', 142, 146),
    ('CH08', '경우의수', 162, 166),
    ('CH09', '순열조합', 182, 189),
    ('CH10', '행렬', 205, 213),
]
CM2_CHAPTERS = [
    ('CH01', '평면좌표', 8, 11),
    ('CH02', '직선', 23, 26),
    ('CH03', '원', 40, 44),
    ('CH04', '도형이동', 59, 62),
    ('CH05', '집합', 79, 85),
    ('CH06', '명제', 105, 111),
    ('CM2-CH07', '함수', 135, 142),
    ('CM2-CH08', '유리무리', 167, 172),
]

def count_problems(label, pdir, ch_list):
    for ch, name, start, end in ch_list:
        all_txt = ''
        for pg in range(start, end + 1):
            f = os.path.join(pdir, f'p{pg:03d}.txt')
            if os.path.exists(f):
                all_txt += '\n' + open(f, encoding='utf-8').read()
        # STEP 1 in 고쟁이 uses 3-digit problem numbers (001, 002, ...) but they appear in text
        # look for patterns like "001", "002" that start problem headers
        # actually let's just count all 3-digit numbers at line starts
        nums = re.findall(r'\n(\d{3})\s*\n', all_txt)
        # or: 발문 = 4개 objective choices (① ② ③ ④ ⑤)
        obj_count = all_txt.count('①')
        print(f'{label} {ch} {name} (p{start}~{end}): 문제번호(3자리) 후보={len(set(nums))} 객관식(①)={obj_count}')

count_problems('CM1', r'C:\Users\user\OneDrive\Cluade Projects\Math books\scripts\_fitz_CM1', CM1_CHAPTERS)
print()
count_problems('CM2', r'C:\Users\user\OneDrive\Cluade Projects\Math books\scripts\_fitz_CM2', CM2_CHAPTERS)
