---
id: EX-MT-011
unit: CM1-PL
type: EX-MT
type_in_source: 다항식 $P(x)$, 최고차 1 삼차 $Q(x)$. $\{Q(x+1)\}^2 + \{Q(x)\}^2 = (x^2-x)P(x)$. $P$를 $Q$로 나눈 나머지 $R(x)$. $R(3)$
status: meta_only
external_labels:
  - source: 마더텅 학평 [고1-1] 공통수학1
    cohort_type: hagpyung_top
    catalog_number: '205'
    source_detail: 마더텅 문제편 p62
    type_label: I-2-04 나머지정리 (3) → PL-T23·T24
    insights_summary: CON(2)·EQV(1)·PD(1)·BW(1)·R(3)
    insight_score: 5
    cohort_normalized_star: 4
    insights_depth:
      I-CON: 2
      I-EQV: 1
      I-PD: 1
      I-BW: 1
      I-R: 3
patterns_1x: []
homebase_for_1x: []
frequency: 3
grade_origin: 고1
created: '2026-06-24'
---

*(status: meta_only — 마더텅 학평 ★★★★ 88문 정점. 본문/풀이 미등록 (정책). 통찰 라벨링·세련도 패턴 메타.)*

**발문 요지**: 다항식 $P(x)$, 최고차 1 삼차 $Q(x)$. $\{Q(x+1)\}^2 + \{Q(x)\}^2 = (x^2-x)P(x)$. $P$를 $Q$로 나눈 나머지 $R(x)$. $R(3)$

**변별 핵심**: 좌변 6차 = 우변 (2차)·($P$ 차수). $P$ 차수 = 4. $x=0, x=1$ 대입 → $Q(0)^2 + Q(1)^2 = 0$ → $Q(0) = Q(1) = 0$ → $Q(x) = x(x-1)(x-k)$. 그 후 일반 $x$로 $P$ 결정 → 나눗셈

**세련도 패턴**: 축 1 [조건 위장] *합 = 0 → 각 항 = 0 환원* + 축 3 [다층 결합] *나머지정리 + $Q$ 모양 + 나눗셈*

**원 출처**: 마더텅 문제편 p62 / 카탈로그 #205 / 통찰: CON(2)·EQV(1)·PD(1)·BW(1)·R(3)
