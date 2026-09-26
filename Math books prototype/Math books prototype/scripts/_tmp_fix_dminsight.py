#!/usr/bin/env python3
"""임시 : \dminsight \dmcplabel{...}: 본문 → \dminsight 본문 (라벨 wrap 제거)"""
import sys
from pathlib import Path

sys.stdout.reconfigure(encoding='utf-8', errors='replace')


def find_matching_brace(s, start):
    """s[start-1] == '{' 위치에서 대응하는 '}' 인덱스 (포함하지 않음) 반환."""
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


def strip_cplabel_wrap(text: str) -> tuple[str, int]:
    """'\\dminsight \\dmcplabel{X}: Y' → '\\dminsight Y'"""
    pattern = '\\dminsight \\dmcplabel{'
    count = 0
    result = []
    i = 0
    while i < len(text):
        pos = text.find(pattern, i)
        if pos < 0:
            result.append(text[i:])
            break
        result.append(text[i:pos])
        # 라벨 시작
        label_start = pos + len(pattern)
        label_end = find_matching_brace(text, label_start)
        if label_end < 0:
            # 매칭 실패 · 원본 유지
            result.append(text[pos])
            i = pos + 1
            continue
        # 라벨 끝 다음 문자 확인 : ': ' 있어야 함
        after = label_end + 1
        if text[after:after+1] == ':':
            content_start = after + 1
            # 공백 skip
            while content_start < len(text) and text[content_start] in ' \t':
                content_start += 1
        else:
            content_start = after
        result.append('\\dminsight ')
        i = content_start
        count += 1
    return ''.join(result), count


if __name__ == '__main__':
    if len(sys.argv) < 2:
        print('Usage: python _tmp_fix_dminsight.py <file.tex>')
        sys.exit(2)
    for arg in sys.argv[1:]:
        p = Path(arg)
        text = p.read_text(encoding='utf-8')
        new_text, count = strip_cplabel_wrap(text)
        if count > 0:
            p.write_text(new_text, encoding='utf-8')
            print(f'{p.name}: {count} 건 dmcplabel wrap 제거')
        else:
            print(f'{p.name}: 변경 없음')
