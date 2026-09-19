#!/usr/bin/env python
"""fix-adjacent-math-spacing.py
인접 수식 패턴 자동 정정 (feedback_math_expression_spacing 정책 반영)
세션 63 마스터 지적 · $X$, $Y → $X$,\\ $Y (명시적 공백)

사용:
  python scripts/fix-adjacent-math-spacing.py <dir_or_file> [--dry]
"""
import os
import re
import sys

DRY = '--dry' in sys.argv
targets = [a for a in sys.argv[1:] if not a.startswith('-')]
if not targets:
    print("Usage: python scripts/fix-adjacent-math-spacing.py <dir_or_file> [--dry]")
    sys.exit(1)

# 정정 패턴: $X$, $Y$ → $X$,\ $Y$ (,와 $ 사이 일반 공백을 명시 공백 `\ `로)
# v2 (세션 65 · 결함 정정): negative lookahead (?![\\]) 제거
#   결함 사유: 대부분 수식이 $\mathrm{...}$ 형태라 `$` 다음 `\`가 오면 스킵됐음 → 200건 중 199건 미검출
# idempotent: 이미 $,\ 로 되어 있으면 `\s`가 `\`를 매치 못 하므로 자동 idempotent
PAT = re.compile(r'\$,\s\$')
REPL = r'$,\ $'

def collect_files(target):
    if os.path.isfile(target):
        return [target] if target.endswith('.tex') else []
    files = []
    for root, dirs, fnames in os.walk(target):
        for f in fnames:
            if f.endswith('.tex'):
                files.append(os.path.join(root, f))
    return files

total_files = 0
total_changes = 0
touched_files = 0
for t in targets:
    for path in collect_files(t):
        total_files += 1
        try:
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
        except (UnicodeDecodeError, PermissionError) as e:
            print(f"  ⚠ {path}: {e}")
            continue
        new_content, n = PAT.subn(REPL, content)
        if n > 0:
            touched_files += 1
            total_changes += n
            action = 'DRY' if DRY else 'WRITE'
            print(f"  [{action}] {os.path.basename(path)}: {n}건")
            if not DRY:
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(new_content)

print(f"\n총 {total_files}파일 · {touched_files}파일 수정 · {total_changes}건 정정" + (' (dry-run)' if DRY else ''))
