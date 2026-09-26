#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
세션 82 · CP 정책 v2.0 하한 조건 적용 계획 스크립트 v2
- 8권 청사진 YAML 파싱 (블록 · 인라인 모두 지원)
- 8권 답지에서 CP 소속 슬롯 파악 (섹션 헤더 + 번호 매핑)
- v2.0 3 조건 판정 · CSV 리포트
"""
import re
import os
import sys
import csv
import io
from pathlib import Path
from collections import Counter

# Windows console UTF-8 강제
try:
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace', line_buffering=True)
except Exception:
    pass

BASE = Path("C:/Users/user/OneDrive/Cluade Projects/Math books/output/공통수학2/DeeP-Math-정리편")
BOOKS = [
    ("01", "Deep Math Review Note 01-청사진.yaml", "Deep Math Review Note 01-평면좌표-답지.tex"),
    ("02", "Deep Math Review Note 02-청사진.yaml", "Deep Math Review Note 02-직선-답지.tex"),
    ("03", "Deep Math Review Note 03-청사진.yaml", "Deep Math Review Note 03-원-답지.tex"),
    ("04", "Deep Math Review Note 04-청사진.yaml", "Deep Math Review Note 04-이동-답지.tex"),
    ("05", "Deep Math Review Note 05-ST-청사진.yaml", "Deep Math Review Note 05-ST-집합명제-답지.tex"),
    ("06", "Deep Math Review Note 06-FN-청사진.yaml", "Deep Math Review Note 06-FN-함수-답지.tex"),
    ("07", "Deep Math Review Note 07-RF01-청사진.yaml", "Deep Math Review Note 07-RF01-유리함수-답지.tex"),
    ("08", "Deep Math Review Note 08-RF02-청사진.yaml", "Deep Math Review Note 08-RF02-무리함수-답지.tex"),
]

def parse_blueprint(yaml_path):
    """청사진 YAML 파싱 (블록 · 인라인 모두)
    반환: {slot_id: {target_star, star_premium, insight_type, depth, verbatim_kichul, tier}}
    """
    with open(yaml_path, 'r', encoding='utf-8') as f:
        text = f.read()

    slots = {}
    lines = text.split('\n')

    # Pass 1: 인라인 형식 {slot_id: XXX, ...}
    inline_pat = re.compile(r'slot_id:\s*([A-Za-z0-9\-]+)')
    for line in lines:
        m = inline_pat.search(line)
        if not m:
            continue
        slot_id = m.group(1)
        data = {}
        # target_star
        ts = re.search(r'target_star:\s*(\d+)', line)
        if ts:
            data['target_star'] = int(ts.group(1))
        # star_premium (target_star_premium 우선)
        sp = re.search(r'(?:target_)?star_premium:\s*(true|false)', line, re.I)
        if sp:
            data['star_premium'] = sp.group(1).lower() == 'true'
        # verbatim_kichul (variation_type: verbatim_kichul 형태 · tier: star_5_premium)
        if re.search(r'variation_type:\s*verbatim_kichul', line):
            data['verbatim_kichul'] = True
        if re.search(r'tier:\s*star_5_premium', line):
            data['star_premium'] = True
        # insight_type
        it = re.search(r'insight_type:\s*([가-힣A-Za-z_]+)', line)
        if it:
            data['insight_type'] = it.group(1)
        # depth
        dp = re.search(r'depth:\s*(\d+)', line)
        if dp:
            data['depth'] = int(dp.group(1))
        # tier
        tr = re.search(r'tier:\s*([a-z_0-9]+)', line)
        if tr:
            data['tier'] = tr.group(1)
        # 블록 형식은 이후 오버라이드 될 수 있음
        if slot_id not in slots:
            slots[slot_id] = data
        else:
            slots[slot_id].update(data)

    # Pass 2: 블록 형식 (여러 줄에 걸친 슬롯)
    cur_slot = None
    cur_data = {}
    slot_start_pat = re.compile(r'^\s*-?\s*slot_id:\s*["\']?([A-Za-z0-9\-]+)["\']?')
    for line in lines:
        m = slot_start_pat.match(line)
        if m:
            if cur_slot and cur_data:
                if cur_slot not in slots:
                    slots[cur_slot] = cur_data
                else:
                    for k, v in cur_data.items():
                        if k not in slots[cur_slot] or slots[cur_slot][k] in (None, ''):
                            slots[cur_slot][k] = v
            cur_slot = m.group(1)
            cur_data = {}
            # 인라인 형식이면 스킵 (Pass 1 처리)
            if '{' in line:
                cur_slot = None
                cur_data = {}
            continue
        if cur_slot is None:
            continue
        # 필드 매칭
        ts = re.match(r'^\s+target_star:\s*(\d+)', line)
        if ts:
            cur_data['target_star'] = int(ts.group(1))
            continue
        sp = re.match(r'^\s+(?:target_)?star_premium:\s*(true|false)', line, re.I)
        if sp:
            cur_data['star_premium'] = sp.group(1).lower() == 'true'
            continue
        if re.search(r'variation_type:\s*verbatim_kichul', line):
            cur_data['verbatim_kichul'] = True
        if re.search(r'tier:\s*star_5_premium', line):
            cur_data['star_premium'] = True
        # mechanism 라인 내 insight_type · depth (블록 자식)
        it = re.search(r'insight_type:\s*([가-힣A-Za-z_]+)', line)
        if it:
            cur_data['insight_type'] = it.group(1)
        dp = re.search(r'\bdepth:\s*(\d+)', line)
        if dp:
            cur_data['depth'] = int(dp.group(1))
        tr = re.search(r'\btier:\s*([a-z_0-9]+)', line)
        if tr:
            cur_data['tier'] = tr.group(1)

    if cur_slot and cur_data:
        if cur_slot not in slots:
            slots[cur_slot] = cur_data
        else:
            for k, v in cur_data.items():
                if k not in slots[cur_slot] or slots[cur_slot][k] in (None, ''):
                    slots[cur_slot][k] = v

    return slots

# 답지 섹션 → 청사진 접두어 매핑
SECTION_PREFIX = {
    '확인': 'CHK',
    '스스로': 'CHK',
    'Level 1': 'L1-',
    'Level 2': 'L2-',
    'Level 3': 'L3-',
    '실전': 'R-',
    '학평': 'R-',
    '기출': 'R-',
}

def get_section_prefix(section_name):
    for key, pfx in SECTION_PREFIX.items():
        if key in section_name:
            return pfx
    return None

def find_cp_slots(tex_path):
    """답지 TeX 파싱 · 각 CP의 소속 슬롯 (섹션 + 번호) 파악
    반환: [(slot_id, cp_start_line, cp_body_snippet)]
    """
    with open(tex_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    cp_list = []
    cur_section = None
    cur_prefix = None
    cur_number = None

    dmsection_pat = re.compile(r'\\dmsection(?:\[[^\]]*\])?\{([^}]+)\}')
    soltitle_pat = re.compile(r'\\dmsoltitle\{([^}]+)\}')
    cp_begin_pat = re.compile(r'\\begin\{dmcriticalpoint\}')
    cp_end_pat = re.compile(r'\\end\{dmcriticalpoint\}')

    i = 0
    while i < len(lines):
        line = lines[i]
        # 섹션 감지
        ms = dmsection_pat.search(line)
        if ms:
            cur_section = ms.group(1).strip()
            cur_prefix = get_section_prefix(cur_section)
            cur_number = None
        # 소제목 감지 (문항 번호)
        mt = soltitle_pat.search(line)
        if mt:
            n_str = mt.group(1).strip()
            try:
                cur_number = int(n_str)
            except ValueError:
                cur_number = n_str
        # CP 감지
        if cp_begin_pat.search(line):
            start = i
            body = []
            j = i
            while j < len(lines):
                body.append(lines[j])
                if cp_end_pat.search(lines[j]):
                    break
                j += 1
            # slot_id 구성
            slot = None
            if cur_prefix and cur_number is not None:
                if cur_prefix == 'CHK':
                    slot = f"CHK{cur_number}"
                else:
                    slot = f"{cur_prefix}{cur_number}"
            cp_list.append({
                'section': cur_section,
                'slot': slot,
                'number': cur_number,
                'start_line': start + 1,
                'end_line': j + 1,
                'body': ''.join(body),
            })
            i = j + 1
            continue
        i += 1
    return cp_list

def classify_slot(slot_id):
    if not slot_id:
        return 'UNKNOWN'
    s = slot_id.upper()
    if s.startswith('R-') or s.startswith('R '):
        return 'R'
    if s.startswith('L3'):
        return 'L3'
    if s.startswith('L2'):
        return 'L2'
    if s.startswith('L1'):
        return 'L1'
    if s.startswith('CHK'):
        return 'CHK'
    if s.startswith('E'):
        return 'E'
    return 'OTHER'

def cp_qualifies_v2(bp_data):
    """v2.0 3 조건 판정"""
    if not bp_data:
        return False, "청사진 슬롯 매칭 실패"
    if bp_data.get('target_star') == 5 and bp_data.get('star_premium') == True:
        return True, "star_premium 슬롯 (★5+premium)"
    if bp_data.get('verbatim_kichul') == True:
        return True, "verbatim_kichul 실전 학평"
    if bp_data.get('insight_type') == '통찰형' and bp_data.get('depth') == 3:
        return True, "통찰형 depth 3"
    return False, f"미만족 (★{bp_data.get('target_star','?')}·{bp_data.get('insight_type','?')}·depth{bp_data.get('depth','?')})"

def extract_cp_label(body):
    m = re.search(r'\\dmcplabel\{([^}]+)\}', body)
    if m:
        return m.group(1)[:60]
    body_clean = re.sub(r'\\begin\{dmcriticalpoint\}|\\end\{dmcriticalpoint\}|\\dmcplabel|\{|\}|\\\\', '', body)
    body_clean = re.sub(r'\s+', ' ', body_clean).strip()
    return body_clean[:60]

def main():
    rows = []
    stats = {}
    unmatched_details = []

    for book_id, yaml_name, tex_name in BOOKS:
        yaml_path = BASE / yaml_name
        tex_path = BASE / tex_name
        if not yaml_path.exists() or not tex_path.exists():
            print(f"[SKIP] {book_id}: 파일 없음")
            continue
        blueprint = parse_blueprint(yaml_path)
        cp_list = find_cp_slots(tex_path)
        stats[book_id] = {'total_cp': len(cp_list), 'keep': 0, 'delete': 0, 'no_match': 0}
        for cp in cp_list:
            slot = cp['slot']
            bp_data = blueprint.get(slot) if slot else None
            qualify, reason = cp_qualifies_v2(bp_data)
            label = extract_cp_label(cp['body'])
            cat = classify_slot(slot)
            action = 'KEEP' if qualify else 'DELETE'
            if qualify:
                stats[book_id]['keep'] += 1
            else:
                stats[book_id]['delete'] += 1
            if bp_data is None:
                stats[book_id]['no_match'] += 1
                unmatched_details.append((book_id, cp['section'], cp['number'], slot))
            rows.append({
                'book': book_id,
                'slot': slot or 'UNKNOWN',
                'section': cp['section'] or '',
                'number': cp['number'] or '',
                'category': cat,
                'target_star': (bp_data or {}).get('target_star', ''),
                'star_premium': (bp_data or {}).get('star_premium', ''),
                'insight_type': (bp_data or {}).get('insight_type', ''),
                'depth': (bp_data or {}).get('depth', ''),
                'verbatim_kichul': (bp_data or {}).get('verbatim_kichul', ''),
                'tier': (bp_data or {}).get('tier', ''),
                'action': action,
                'reason': reason,
                'label': label,
                'start_line': cp['start_line'],
                'end_line': cp['end_line'],
            })

    out_dir = BASE / "_scratch"
    out_dir.mkdir(exist_ok=True)
    csv_path = out_dir / "session82-cp-v2-delete.csv"
    with open(csv_path, 'w', encoding='utf-8-sig', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=['book', 'slot', 'section', 'number', 'category', 'target_star', 'star_premium', 'insight_type', 'depth', 'verbatim_kichul', 'tier', 'action', 'reason', 'label', 'start_line', 'end_line'])
        writer.writeheader()
        writer.writerows(rows)

    print(f"\n=== CP 정책 v2.0 판정 결과 ===")
    print(f"CSV: {csv_path}\n")
    print(f"{'권':<5}{'총CP':<8}{'유지':<8}{'삭제':<8}{'슬롯미매칭':<12}")
    total_all = keep_all = delete_all = 0
    for book_id, s in stats.items():
        print(f"{book_id:<5}{s['total_cp']:<8}{s['keep']:<8}{s['delete']:<8}{s['no_match']:<12}")
        total_all += s['total_cp']
        keep_all += s['keep']
        delete_all += s['delete']
    print(f"{'전체':<5}{total_all:<8}{keep_all:<8}{delete_all:<8}")

    cat_counter = Counter()
    cat_keep = Counter()
    for r in rows:
        cat_counter[r['category']] += 1
        if r['action'] == 'KEEP':
            cat_keep[r['category']] += 1
    print(f"\n=== 카테고리별 ===")
    for cat in ['R', 'L3', 'L2', 'L1', 'CHK', 'E', 'OTHER', 'UNKNOWN']:
        if cat_counter[cat] > 0:
            print(f"  {cat:<10}: 총 {cat_counter[cat]:>3} · 유지 {cat_keep[cat]:>3} · 삭제 {cat_counter[cat]-cat_keep[cat]:>3}")

    if unmatched_details:
        print(f"\n=== 미매칭 CP (앞 20건) ===")
        for u in unmatched_details[:20]:
            print(f"  권{u[0]} · 섹션 [{u[1]}] · 번호 {u[2]} · 슬롯 {u[3]}")

    return rows, stats

if __name__ == '__main__':
    main()
