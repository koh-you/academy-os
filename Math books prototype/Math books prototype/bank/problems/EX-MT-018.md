---
id: EX-MT-018
unit: CM1-PL
type: EX-MT
type_in_source: 3 이하 자연수 $n$에 대해 $A_n$ 정의. $A_1 = 9+99+999$, $A_n$ = 세 수 9, 99, 999에서 $n(n\ge 2)$개 택해 곱한 수의 총합. $A_1+A_2+A_3$를 1000으로 나눈 나머지
status: meta_only
external_labels:
  - source: 마더텅 학평 [고1-1] 공통수학1
    cohort_type: hagpyung_top
    catalog_number: '212'
    source_detail: 마더텅 문제편 p66
    type_label: I-2-10 인수분해의 활용 → PL-T37
    insights_summary: PD(2)·EQV(1)
    insight_score: 3
    cohort_normalized_star: 4
    insights_depth:
      I-PD: 2
      I-EQV: 1
patterns_1x: []
homebase_for_1x: []
frequency: 3
grade_origin: 고1
created: '2026-06-24'
---

*(status: meta_only — 마더텅 학평 ★★★★ 88문 정점. 본문/풀이 미등록 (정책). 통찰 라벨링·세련도 패턴 메타.)*

**발문 요지**: 3 이하 자연수 $n$에 대해 $A_n$ 정의. $A_1 = 9+99+999$, $A_n$ = 세 수 9, 99, 999에서 $n(n\ge 2)$개 택해 곱한 수의 총합. $A_1+A_2+A_3$를 1000으로 나눈 나머지

**변별 핵심**: $A_1+A_2+A_3 = (1+9)(1+99)(1+999) - 1$ 패턴 인식. 곱 = $10 \cdot 100 \cdot 1000 = 10^6$ → 1000으로 나눈 나머지 = $-1 + 0 \equiv 999$ 형태

**세련도 패턴**: 축 1 [조건 위장] *조합 합 = 인수분해 곱 1 빼기* + 축 4 [함정] *패턴 인식 누락 시 직접 전개 불가능*

**원 출처**: 마더텅 문제편 p66 / 카탈로그 #212 / 통찰: PD(2)·EQV(1)
