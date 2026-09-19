---
id: EX-MT-001
unit: CM1-PL
type: EX-MT
type_in_source: 이차다항식 $f(x)$와 일차다항식 $g(x)$. $f(x)g(x)$를 $f(x)-2x^2$으로 나눈 몫이 $x^2-3x+3$, 나머지가 $f(x)+xg(x)$. $f(-2)$ 값?
status: meta_only
external_labels:
  - source: 마더텅 학평 [고1-1] 공통수학1
    cohort_type: hagpyung_top
    catalog_number: '137'
    source_detail: 마더텅 문제편 p25
    type_label: I-1-04 곱셈 공식 → PL-T03 (곱셈공식 + A=BQ+R 결합)
    insights_summary: CON(1)·BW(1)·RT(1)
    insight_score: 3
    cohort_normalized_star: 4
    insights_depth:
      I-CON: 1
      I-BW: 1
      I-RT: 1
patterns_1x: []
homebase_for_1x: []
frequency: 3
grade_origin: 고1
created: '2026-06-24'
---

*(status: meta_only — 마더텅 학평 ★★★★ 88문 정점. 본문/풀이 미등록 (정책). 통찰 라벨링·세련도 패턴 메타.)*

**발문 요지**: 이차다항식 $f(x)$와 일차다항식 $g(x)$. $f(x)g(x)$를 $f(x)-2x^2$으로 나눈 몫이 $x^2-3x+3$, 나머지가 $f(x)+xg(x)$. $f(-2)$ 값?

**변별 핵심**: 나머지 식 안에 *미지수 $x$가 들어있는* 위장 — 차수 분석 ($\deg(f)+\deg(g) = \deg(f-2x^2) + \deg(\text{몫}) + \deg(\text{나머지})$)으로 $g(x)$ 차수·계수 동시 결정. 단순 A=BQ+R 적용으로는 풀리지 않음

**세련도 패턴**: 축 1 [조건 위장] *나머지 식에 미지수 포함* + 축 3 [다층 결합] *나눗셈 정리 + 항등식*

**원 출처**: 마더텅 문제편 p25 / 카탈로그 #137 / 통찰: CON(1)·BW(1)·RT(1)
