#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
풀이공간-실측.py — 시험지 PDF 에서 문항 아래 빈 공간을 실제로 재는 도구

왜 있는가 (2026-08-02 세션 109)
  마스터가 「3번이 더 넓다」·「12번이 더 넓다」를 세 번 지적했다.
  어시스턴트는 그때마다 소스의 \\vspace 숫자를 보고 「같다」고 답했다.
  🔴 소스 숫자와 실제 여백은 다르다 — 컬럼이 늘어나면 남는 공간이
  마지막 문항 아래로 몰린다. 눈대중도 사람마다 어긋난다.
  그래서 잰다. 메모리 [[feedback_measured_beats_estimated]] — 픽셀 실측이 맞다.

무엇을 재는가
  페이지를 좌우 두 컬럼으로 나누고, 각 컬럼 안에서 글자 덩어리 사이의
  **세로 빈 공간**을 mm 로 잰다. 마지막 덩어리 아래는 컬럼 바닥까지 잰다.

판정
  한 컬럼 안 빈 공간들이 서로 얼마나 다른가.
  가장 큰 것 / 가장 작은 것 이 1.15 를 넘으면 🔴 (균등 분배 실패).

사용
  python scripts/풀이공간-실측.py <파일.pdf> [--쪽 3] [--최소 12]
"""
import sys
import fitz

PT = 0.35278           # 1pt → mm
최소여백_mm = 12.0      # 이보다 작은 틈은 줄 간격이라 보고 세지 않는다
불균등_기준 = 1.15      # 가장 큰 빈 공간 / 가장 작은 빈 공간


def 컬럼나누기(page):
    """페이지 가운데 세로선을 기준으로 왼쪽·오른쪽을 나눈다."""
    가운데 = page.rect.width / 2
    좌, 우 = [], []
    for b in page.get_text('blocks'):
        x0, y0, x1, y1, 글, *_ = b
        if not 글.strip():
            continue
        (좌 if (x0 + x1) / 2 < 가운데 else 우).append((y0, y1, 글.strip()))
    return sorted(좌), sorted(우)


def 빈공간재기(덩어리들, 위끝, 아래끝):
    """덩어리 사이와 마지막 덩어리 아래의 빈 공간을 mm 로 낸다."""
    if not 덩어리들:
        return []
    결과 = []
    for i, (y0, y1, 글) in enumerate(덩어리들):
        다음위 = 덩어리들[i + 1][0] if i + 1 < len(덩어리들) else 아래끝
        틈 = (다음위 - y1) * PT
        if 틈 >= 최소여백_mm:
            머리 = 글.replace('\n', ' ')[:26]
            결과.append((round(틈, 1), 머리, i + 1 == len(덩어리들)))
    return 결과


def 본문범위(page):
    """머리말 아래 가로줄과 꼬리말 위 가로줄을 찾아 본문의 위·아래 끝을 정한다.

    🔴 어림잡으면 안 된다. 처음에 페이지 높이의 9%·93% 로 잘랐더니
    마지막 문항 아래가 늘 8mm 더 넓게 나왔다 — 자의 흠이지 조판의 흠이 아니었다.
    """
    폭 = page.rect.width
    가로줄 = []
    for d in page.get_drawings():
        r = d['rect']
        if r.height < 2 and r.width > 폭 * 0.6:      # 페이지를 가로지르는 얇은 줄
            가로줄.append(r.y0)
    가로줄.sort()
    if len(가로줄) >= 2:
        return 가로줄[0], 가로줄[-1]
    return page.rect.height * 0.09, page.rect.height * 0.93


def 쪽검사(page, 쪽번호):
    위끝, 아래끝 = 본문범위(page)
    좌, 우 = 컬럼나누기(page)
    좌 = [t for t in 좌 if t[0] > 위끝 and t[1] < 아래끝]
    우 = [t for t in 우 if t[0] > 위끝 and t[1] < 아래끝]

    빨강 = 0
    print(f'\n── {쪽번호} 쪽 ' + '─' * 56)
    for 이름, 덩어리들 in (('왼쪽', 좌), ('오른쪽', 우)):
        틈들 = 빈공간재기(덩어리들, 위끝, 아래끝)
        if not 틈들:
            print(f'  [{이름}] 잴 만한 빈 공간 없음')
            continue
        값들 = [t[0] for t in 틈들]
        비 = max(값들) / min(값들) if min(값들) > 0 else 99
        표시 = '🔴' if 비 > 불균등_기준 else '✅'
        print(f'  [{이름}] {표시} 빈 공간 {len(틈들)}곳 · '
              f'가장 큼 {max(값들)}mm / 가장 작음 {min(값들)}mm · 비 {비:.2f}')
        for 틈, 머리, 마지막 in 틈들:
            꼬리 = '  ← 컬럼 맨 아래' if 마지막 else ''
            print(f'        {틈:6.1f}mm   「{머리}」 아래{꼬리}')
        if 비 > 불균등_기준:
            빨강 += 1
    return 빨강


def main():
    args = sys.argv[1:]
    if not args:
        print('사용: python scripts/풀이공간-실측.py <파일.pdf> [--쪽 N] [--최소 12]')
        return 2
    경로 = args[0]
    고른쪽 = None
    global 최소여백_mm
    if '--쪽' in args:
        고른쪽 = int(args[args.index('--쪽') + 1])
    if '--최소' in args:
        최소여백_mm = float(args[args.index('--최소') + 1])

    문서 = fitz.open(경로)
    print(f'풀이 공간 실측 — {경로}')
    print(f'기준: 빈 공간 {최소여백_mm}mm 이상만 셈 · '
          f'한 컬럼 안 최대/최소 비가 {불균등_기준} 를 넘으면 🔴')
    print('=' * 68)

    빨강 = 0
    for n in range(len(문서)):
        if 고른쪽 and n + 1 != 고른쪽:
            continue
        빨강 += 쪽검사(문서[n], n + 1)

    print('\n' + '=' * 68)
    if 빨강:
        print(f'  🔴 균등하지 않은 컬럼 {빨강}곳 — 고쳐라')
        print('  🔴 소스의 \\vspace 숫자를 맞추는 것으로는 안 된다.')
        print('     컬럼이 늘어나면 남는 공간이 마지막 문항 아래로 몰린다.')
        return 1
    print('  ✅ 모든 컬럼에서 빈 공간이 고르다')
    return 0


if __name__ == '__main__':
    sys.exit(main())
