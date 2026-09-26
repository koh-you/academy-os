#!/usr/bin/env python3
"""v9 → v8 긴급 롤백 (마스터 지시 · 세션 75 · 2026-07-23)

역변환:
  1. \dmwabuhead{N}{제목}{답}
     → \dmsoltitle{N}{제목}\n\begin{dmanswerbox}\n정답: 답\n\end{dmanswerbox}

  2. \dminsight 본문  (문단 종료까지)
     → \begin{dmcriticalpoint}\dmcplabel{통찰}: 본문\end{dmcriticalpoint}
     주의 : 원본 라벨 문장은 v9 마이그레이션에서 소실됨.
            임시 라벨 "통찰" 사용 · 사후 마스터 승인 후 원본 라벨 수동 복원 필요.
"""
import re
import sys
from pathlib import Path

sys.stdout.reconfigure(encoding='utf-8', errors='replace')


def find_matching_brace(s, start):
    depth = 1
    i = start
    while i < len(s):
        if s[i] == '{':
            depth += 1
        elif s[i] == '}':
            depth -= 1
            if depth == 0:
                return i
        i += 1
    return -1


def parse_three_braces(text, start_after_cmd):
    """\\cmd{A}{B}{C} 파싱. start_after_cmd = '{' 첫 위치."""
    result = []
    i = start_after_cmd
    for _ in range(3):
        if i >= len(text) or text[i] != '{':
            return None, i
        end = find_matching_brace(text, i + 1)
        if end < 0:
            return None, i
        result.append(text[i+1:end])
        i = end + 1
    return result, i


def rollback_wabuhead(text):
    """\\dmwabuhead{N}{제목}{답} → \\dmsoltitle{N}{제목}\n\\begin{dmanswerbox}\n정답: 답\n\\end{dmanswerbox}"""
    marker = '\\dmwabuhead'
    result = []
    i = 0
    count = 0
    while i < len(text):
        pos = text.find(marker, i)
        if pos < 0:
            result.append(text[i:])
            break
        result.append(text[i:pos])
        after_cmd = pos + len(marker)
        args, end = parse_three_braces(text, after_cmd)
        if args is None:
            result.append(text[pos])
            i = pos + 1
            continue
        n, title, ans = args
        replacement = (
            f'\\dmsoltitle{{{n}}}{{{title}}}\n'
            f'\\begin{{dmanswerbox}}\n'
            f'정답: {ans}\n'
            f'\\end{{dmanswerbox}}'
        )
        result.append(replacement)
        i = end
        count += 1
    return ''.join(result), count


def rollback_insight(text):
    """\\dminsight 본문 (문단 종료까지) → \\begin{dmcriticalpoint}\\dmcplabel{통찰}: 본문\\end{dmcriticalpoint}

    문단 종료 : 빈 줄 (\\n\\n) · 또는 \\dmwabuhead·\\dmsoltitle·\\dmsection·\\end{multicols*}·\\end{document}
    """
    lines = text.split('\n')
    result = []
    i = 0
    count = 0
    # 다음 문단 시작 매크로 (여기까지 통찰 본문)
    para_end_markers = (
        '\\dmsoltitle', '\\dmwabuhead', '\\dmsection', '\\dmquick',
        '\\begin{multicols', '\\end{multicols',
        '\\begin{dmquickgrid', '\\end{dmquickgrid',
        '\\end{document}', '\\newpage', '\\clearpage',
        '\\dminsight',  # 다음 통찰 시작
        '% ─', '% ═',  # 주석 구분선
    )
    while i < len(lines):
        line = lines[i]
        idx = line.find('\\dminsight')
        if idx < 0:
            result.append(line)
            i += 1
            continue
        # \dminsight 이전 (같은 줄)
        prefix = line[:idx]
        if prefix.strip():
            result.append(prefix.rstrip())
        # \dminsight 이후 본문 시작
        after = line[idx + len('\\dminsight'):].lstrip()
        body_parts = [after] if after else []
        i += 1
        # 다음 줄부터 문단 종료까지 수집
        while i < len(lines):
            next_line = lines[i]
            # 빈 줄
            if next_line.strip() == '':
                break
            # 문단 종료 매크로
            stripped = next_line.lstrip()
            if any(stripped.startswith(m) for m in para_end_markers):
                break
            body_parts.append(next_line.rstrip())
            i += 1
        body = ' '.join(p.strip() for p in body_parts if p.strip())
        replacement = (
            '\\begin{dmcriticalpoint}\n'
            f'\\dmcplabel{{통찰}}: {body}\n'
            '\\end{dmcriticalpoint}'
        )
        result.append(replacement)
        count += 1
    return '\n'.join(result), count


if __name__ == '__main__':
    if len(sys.argv) < 2:
        print('Usage: python _tmp_v9_rollback.py <file.tex> [<file.tex> ...]')
        sys.exit(2)
    for arg in sys.argv[1:]:
        p = Path(arg)
        if not p.exists():
            print(f'skip: {arg} (not found)')
            continue
        text = p.read_text(encoding='utf-8')
        text2, hc = rollback_wabuhead(text)
        text3, ic = rollback_insight(text2)
        if text3 != text:
            p.write_text(text3, encoding='utf-8')
            print(f'{p.name}: header {hc} · insight {ic} rolled back')
        else:
            print(f'{p.name}: no changes')
