#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
세션 82 · CP v2.0 삭제 대상 CP 자동 제거 스크립트
- 계획 스크립트 CSV 로드 · action=DELETE CP 실제 제거
- 각 답지 파일 백업 (.bak.session82) 생성
- 정확한 라인 범위로 CP 블록 (\begin{dmcriticalpoint} ... \end{dmcriticalpoint}) 제거
- 뒷 CP를 먼저 삭제 (라인 shift 방지)
"""
import re
import sys
import csv
import io
import shutil
from pathlib import Path
from collections import defaultdict

try:
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace', line_buffering=True)
except Exception:
    pass

BASE = Path("C:/Users/user/OneDrive/Cluade Projects/Math books/output/공통수학2/DeeP-Math-정리편")
CSV_PATH = BASE / "_scratch" / "session82-cp-v2-delete.csv"

BOOK_TEX = {
    "01": "Deep Math Review Note 01-평면좌표-답지.tex",
    "02": "Deep Math Review Note 02-직선-답지.tex",
    "03": "Deep Math Review Note 03-원-답지.tex",
    "04": "Deep Math Review Note 04-이동-답지.tex",
    "05": "Deep Math Review Note 05-ST-집합명제-답지.tex",
    "06": "Deep Math Review Note 06-FN-함수-답지.tex",
    "07": "Deep Math Review Note 07-RF01-유리함수-답지.tex",
    "08": "Deep Math Review Note 08-RF02-무리함수-답지.tex",
}

def load_delete_plan():
    with open(CSV_PATH, 'r', encoding='utf-8-sig') as f:
        rows = list(csv.DictReader(f))
    plan = defaultdict(list)  # book -> [(start_line, end_line, slot, label)]
    for r in rows:
        if r['action'] == 'DELETE':
            plan[r['book']].append((int(r['start_line']), int(r['end_line']), r['slot'], r['label']))
    return plan

def delete_cp_blocks(tex_path, ranges):
    """뒤에서부터 CP 블록 삭제 (라인 번호 shift 방지)"""
    with open(tex_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    # 뒤에서부터 정렬
    ranges_sorted = sorted(ranges, key=lambda x: -x[0])
    removed_details = []
    for start, end, slot, label in ranges_sorted:
        # 라인 인덱스 (1-based → 0-based)
        s_idx = start - 1
        e_idx = end - 1
        # 검증: 시작 라인에 \begin{dmcriticalpoint} 있어야 함
        if s_idx < 0 or e_idx >= len(lines):
            removed_details.append((slot, 'SKIP-OUT-OF-RANGE', start, end))
            continue
        if '\\begin{dmcriticalpoint}' not in lines[s_idx]:
            removed_details.append((slot, 'SKIP-NO-BEGIN', start, end))
            continue
        if '\\end{dmcriticalpoint}' not in lines[e_idx]:
            removed_details.append((slot, 'SKIP-NO-END', start, end))
            continue
        # 삭제 대상: s_idx ~ e_idx (포함)
        # 앞뒤 빈 줄 하나씩 함께 제거 (렌더 자연스러움)
        # 뒤 빈 줄
        if e_idx + 1 < len(lines) and lines[e_idx + 1].strip() == '':
            e_idx += 1
        # 앞 빈 줄
        if s_idx > 0 and lines[s_idx - 1].strip() == '':
            s_idx -= 1
        removed_lines = lines[s_idx:e_idx + 1]
        del lines[s_idx:e_idx + 1]
        removed_details.append((slot, 'REMOVED', start, end))

    with open(tex_path, 'w', encoding='utf-8') as f:
        f.writelines(lines)
    return removed_details

def main():
    plan = load_delete_plan()
    print(f"=== CP v2.0 삭제 실행 ===\n")
    total_removed = 0
    for book_id, ranges in sorted(plan.items()):
        tex_name = BOOK_TEX.get(book_id)
        if not tex_name:
            continue
        tex_path = BASE / tex_name
        # 백업
        bak_path = tex_path.with_suffix('.tex.bak.session82')
        if not bak_path.exists():
            shutil.copy2(tex_path, bak_path)
            print(f"  [BACKUP] {bak_path.name}")
        details = delete_cp_blocks(tex_path, ranges)
        removed = sum(1 for d in details if d[1] == 'REMOVED')
        skipped = sum(1 for d in details if d[1] != 'REMOVED')
        total_removed += removed
        print(f"  권{book_id}: {removed}건 제거 · {skipped}건 스킵 ({tex_name})")
        for slot, status, s, e in details:
            if status != 'REMOVED':
                print(f"    !! [{status}] slot={slot} lines={s}-{e}")
    print(f"\n총 {total_removed}건 CP 제거 완료")

if __name__ == '__main__':
    main()
