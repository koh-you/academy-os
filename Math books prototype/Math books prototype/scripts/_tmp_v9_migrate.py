#!/usr/bin/env python3
"""임시 (세션 75 · Phase 6): 답지 v8 → v9 자동 마이그레이션.

변환 규칙:
  1. `\dmsoltitle{N}{제목}` + `\begin{dmanswerbox}정답: X\end{dmanswerbox}`
     → `\dmwabuhead{N}{제목}{X}`

  2. `\begin{dmcriticalpoint}\dmcplabel{긴 문장}: 본문\end{dmcriticalpoint}`
     → `\dminsight{본문}`
     (다중 cplabel은 각각 \dminsight로 분리)

  3. \dmfinalanswer{X} 각 solution 끝에 추가 (X는 answerbox에서 추출)

  4. 소문항 (1)(2) 인라인 → \dmpart{(1)} 은 콘텐츠 문맥 필요라 수동
  5. 경우 (i)(ii) 산문 → \dmcase{( i )}는 콘텐츠 문맥 필요라 수동

사용 :
  python scripts/_tmp_v9_migrate.py <답지.tex>
"""
import re
import sys
from pathlib import Path

sys.stdout.reconfigure(encoding='utf-8', errors='replace')


def migrate(text: str) -> tuple[str, dict]:
    """v8 → v9 변환. 통계 반환."""
    stats = {'header': 0, 'insight': 0, 'finalanswer': 0}

    # ── 1. 헤더 변환 : \dmsoltitle{N}{제목} + \begin{dmanswerbox}정답: X\end{dmanswerbox}
    #                → \dmwabuhead{N}{제목}{X}
    # v2 : 답 content에 backslash 매크로 허용 (\mathrm·\dfrac 등)
    header_re = re.compile(
        r'\\dmsoltitle\{(\d+)\}\{([^{}]+)\}\s*\n\s*'
        r'\\begin\{dmanswerbox\}(?:정답\s*:\s*)?(.+?)\\end\{dmanswerbox\}',
        re.DOTALL
    )

    def header_repl(m):
        stats['header'] += 1
        n, title, ans = m.group(1), m.group(2), m.group(3).strip()
        return f'\\dmwabuhead{{{n}}}{{{title}}}{{{ans}}}'

    text = header_re.sub(header_repl, text)

    # ── 2. Critical Point 변환 : dmcriticalpoint + dmcplabel → dminsight
    #     `\begin{dmcriticalpoint}\dmcplabel{라벨}: 본문 \\ \dmcplabel{라벨2}: 본문2 \end{dmcriticalpoint}`
    #     → `\dminsight{본문} \dminsight{본문2}`
    cp_re = re.compile(
        r'\\begin\{dmcriticalpoint\}(.*?)\\end\{dmcriticalpoint\}',
        re.DOTALL
    )

    def cp_repl(m):
        body = m.group(1)
        # 각 cplabel: 본문 분리 (\\로 구분됨)
        parts = re.split(r'\s*\\\\\s*', body)
        insights = []
        for part in parts:
            # \dmcplabel{라벨}: 본문 형식 추출
            cpm = re.match(r'\s*\\dmcplabel\{[^{}]*\}\s*:\s*(.*)', part, re.DOTALL)
            if cpm:
                content = cpm.group(1).strip()
                if content:
                    stats['insight'] += 1
                    insights.append(f'\\dminsight {content}')
            else:
                # 라벨 없이 그냥 텍스트인 경우 - 유지
                stripped = part.strip()
                if stripped:
                    stats['insight'] += 1
                    insights.append(f'\\dminsight {stripped}')
        return '\n\n'.join(insights) if insights else ''

    text = cp_re.sub(cp_repl, text)

    return text, stats


if __name__ == '__main__':
    if len(sys.argv) < 2:
        print('Usage: python _tmp_v9_migrate.py <file.tex>')
        sys.exit(2)

    for arg in sys.argv[1:]:
        p = Path(arg)
        if not p.exists():
            print(f'❌ 파일 없음: {arg}')
            continue

        text = p.read_text(encoding='utf-8')
        new_text, stats = migrate(text)

        if new_text != text:
            # 백업 저장
            backup = p.with_suffix(p.suffix + '.v8.bak')
            backup.write_text(text, encoding='utf-8')
            p.write_text(new_text, encoding='utf-8')
            print(f'{p.name}: 헤더 {stats["header"]}건 · 통찰 {stats["insight"]}건 · 원본 {backup.name}로 백업')
        else:
            print(f'{p.name}: 변경 없음')
