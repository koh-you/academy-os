---
id: EX-MT-013
unit: CM1-PL
type: EX-MT
type_in_source: 삼차 $P$, 일차 $Q$. (가) $PQ$가 $(x^2-3x+3)(x-1)$로 나누어떨어짐, (나) $x^3-10x+13 - P(x) = \{Q(x)\}^2$. $Q(0)<0$일 때 $P(2)+Q(8)$
status: meta_only
external_labels:
  - source: 마더텅 학평 [고1-1] 공통수학1
    cohort_type: hagpyung_top
    catalog_number: '207'
    source_detail: 마더텅 문제편 p63
    type_label: I-2-04·07 나머지·인수정리 결합 → PL-T22·T26·T35
    insights_summary: CON(2)·EQV(1)·MI(1)·Q(0)·BW(1)
    insight_score: 5
    cohort_normalized_star: 4
    insights_depth:
      I-CON: 2
      I-EQV: 1
      I-MI: 1
      I-Q: 0
      I-BW: 1
patterns_1x: []
homebase_for_1x: []
frequency: 3
grade_origin: 고1
created: '2026-06-24'
---

*(status: meta_only — 마더텅 학평 ★★★★ 88문 정점. 본문/풀이 미등록 (정책). 통찰 라벨링·세련도 패턴 메타.)*

**발문 요지**: 삼차 $P$, 일차 $Q$. (가) $PQ$가 $(x^2-3x+3)(x-1)$로 나누어떨어짐, (나) $x^3-10x+13 - P(x) = \{Q(x)\}^2$. $Q(0)<0$일 때 $P(2)+Q(8)$

**변별 핵심**: $PQ$ 4차 = $(x^2-3x+3)(x-1) \cdot k$ → 1차 추가. $Q$는 1차고 $(x-1)$의 인수 후보. $P$의 인수도 $(x^2-3x+3)$ + 추가 1차. (나) 식에서 $\{Q\}^2 = $ 삼차 - 삼차 = 이차 → 일관성. 두 조건 통합 → 결정

**세련도 패턴**: 축 1 [조건 위장] *두 다항식 인수분해 + 항등식 결합* + 축 3 [다층] *나머지 + 인수 + 부호*

**원 출처**: 마더텅 문제편 p63 / 카탈로그 #207 / 통찰: CON(2)·EQV(1)·MI(1)·Q(0)·BW(1)
