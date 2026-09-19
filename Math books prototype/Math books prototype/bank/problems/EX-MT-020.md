---
id: EX-MT-020
unit: CM1-PL
type: EX-MT
type_in_source: 자연수 $a, b$. 일차식 $x-a$를 인수로 가지는 $P(x) = x^4 - 290x^2 + b$가 *계수·상수항 정수인 서로 다른 세 다항식의 곱*으로 인수분해. $P$ 개수 $p$, $b$ 최댓값 $q$. $q/(p-1)^2$
status: meta_only
external_labels:
  - source: 마더텅 학평 [고1-1] 공통수학1
    cohort_type: hagpyung_top
    catalog_number: '214'
    source_detail: 마더텅 문제편 p67
    type_label: I-2-09 복잡한 식의 인수분해 → PL-T31·T34·T35
    insights_summary: CON(2)·MI(1)·PD(1)·BW(1)
    insight_score: 5
    cohort_normalized_star: 4
    insights_depth:
      I-CON: 2
      I-MI: 1
      I-PD: 1
      I-BW: 1
patterns_1x: []
homebase_for_1x: []
frequency: 3
grade_origin: 고1
created: '2026-06-24'
---

*(status: meta_only — 마더텅 학평 ★★★★ 88문 정점. 본문/풀이 미등록 (정책). 통찰 라벨링·세련도 패턴 메타.)*

**발문 요지**: 자연수 $a, b$. 일차식 $x-a$를 인수로 가지는 $P(x) = x^4 - 290x^2 + b$가 *계수·상수항 정수인 서로 다른 세 다항식의 곱*으로 인수분해. $P$ 개수 $p$, $b$ 최댓값 $q$. $q/(p-1)^2$

**변별 핵심**: 4차 = 세 다항식 곱 → 차수 분배 (2+1+1). 4차의 형태 $x^4 + Ax^2 + B$ → $(x^2-px-r)(x^2+px-s)$ 또는 $(x-a)(x+a)(\text{이차})$ 등. 케이스 분기 + 정수 조건 카운트

**세련도 패턴**: 축 1 [조건 위장] *세 인수 곱 강제* + 축 4 [함정] *조합 누락*

**원 출처**: 마더텅 문제편 p67 / 카탈로그 #214 / 통찰: CON(2)·MI(1)·PD(1)·BW(1)
