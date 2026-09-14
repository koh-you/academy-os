---
id: SRC-GJ-CB-168
unit: CM1-CB
type: C05
M_scores:
  M_s: 4
  M_k: 3
  M_a: 3
  M_t: 3
M_total: 13
insights_used:
  - I-CON
  - I-EQV
  - I-MI
  - I-PD
insight_score: 4
X_familiarity: 0.5
base_star: 5
effective_star: 5
depth_score: 7
target_audience: 상위권
audience_fit:
  - 상위권
audience_primary: 상위권
keywords:
  - 1~15 자연수 사물함 15개 일렬
  - 3개 사물함 선택
  - 선택한 사물함 사이에 n개 이상 사물함
  - f(n) = 선택 방법
  - f(3)+f(4)
sources:
  - 출처: 고쟁이 공통수학1 2025
    출판: 이투스북
    위치: 본문 p.199
external_labels:
  - source: 고쟁이 공통수학1
    book_key: GJ
    item_number: '758'
    cohort_normalized_star: 5
variant_policy: 원문 그대로 (시판 책 정점 + 전수 격상)
status: meta_only
created: 2026-06-30T00:00:00.000Z
frequency: 3
---

**문제**

$1$부터 $15$까지의 자연수가 각각 하나씩 적혀 있는 $15$개의 사물함이 번호 순서대로 일렬로 나열되어 있다. 이 중 $3$개의 사물함을 선택할 때, 선택한 사물함 사이에 각각 $n$개 이상의 사물함이 있도록 선택하는 방법의 수를 $f(n)$이라 하자. $f(3)+f(4)$의 값을 구하시오.

**답**: (해설지 참조 — 간격 변환 $x_i\geq n$ 후 $\binom{15-2n}{3}$ 공식)
