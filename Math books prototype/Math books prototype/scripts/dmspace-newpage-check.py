#!/usr/bin/env python3
# dmspace-newpage-check.py — dmrealtypespace/dmlevelspace 앞 \newpage 존재 자동 검증
# 세션 69 (2026-07-22) 신설 · 08 무리함수 마지막 페이지 개판 · 07 유리함수 재발 사건 계기
# 정책: feedback_min_solution_space_4cm.md
# 사용: python scripts/dmspace-newpage-check.py [<파일 or 폴더>]
# 반환: 0 = 위반 없음 · 1 = 위반 있음 (CI/hook 차단용)

import argparse
import glob
import sys
from pathlib import Path

# UTF-8 stdout 강제 (Windows cp949 회피)
sys.stdout.reconfigure(encoding='utf-8')

def scan_file(path: Path) -> list[tuple[int, str, int, str]]:
    """Return list of (violation_line, macro_name, prev_line, prev_content)."""
    violations = []
    try:
        with open(path, 'r', encoding='utf-8') as fh:
            lines = fh.readlines()
    except (OSError, UnicodeDecodeError):
        return violations

    for i, line in enumerate(lines):
        stripped = line.strip()
        if not (stripped.startswith(r'\dmrealtypespace') or stripped.startswith(r'\dmlevelspace')):
            continue
        # Walk backwards skipping blank lines and comments (% ...)
        j = i - 1
        while j >= 0:
            s = lines[j].strip()
            if s == '' or s.startswith('%'):
                j -= 1
                continue
            break
        prev = lines[j].strip() if j >= 0 else ''
        if prev != r'\newpage':
            violations.append((i + 1, stripped, j + 1, prev[:80]))
    return violations


def main() -> int:
    ap = argparse.ArgumentParser(description='dmrealtypespace/dmlevelspace 앞 \\newpage 검증')
    ap.add_argument('targets', nargs='*', help='tex 파일 or 디렉토리 (default: 8권 본편)')
    args = ap.parse_args()

    if not args.targets:
        # Default: 8권 본편
        targets = sorted(glob.glob('output/공통수학2/DeeP-Math-정리편/Deep Math Review Note 0*.tex'))
        targets = [t for t in targets if '답지' not in t]
    else:
        targets = []
        for t in args.targets:
            p = Path(t)
            if p.is_dir():
                targets.extend([str(x) for x in p.rglob('*.tex') if '답지' not in x.name])
            elif p.is_file():
                targets.append(str(p))

    total_violations = 0
    for target in targets:
        violations = scan_file(Path(target))
        if violations:
            fname = Path(target).name
            print(f'\n[VIOLATION] {fname}:')
            for line_no, macro, prev_line, prev_content in violations:
                print(f'  L{line_no}: {macro}')
                print(f'    <- prev L{prev_line}: [{prev_content}]')
                print(f'    FIX: insert \\newpage before L{line_no}')
            total_violations += len(violations)

    if total_violations == 0:
        print(f'[OK] {len(targets)} files scanned, 0 violations')
        return 0
    print(f'\n[FAIL] {total_violations} violations across {len(targets)} files')
    print('Policy: feedback_min_solution_space_4cm.md')
    return 1


if __name__ == '__main__':
    sys.exit(main())
