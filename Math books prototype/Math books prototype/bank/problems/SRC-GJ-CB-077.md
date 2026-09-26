---
id: SRC-GJ-CB-077
unit: CM1-CB
type: C02
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
  - 작은 직각삼각형 4개 결합 큰 직각삼각형
  - 1~6 중 다른 4개 택해 작은 삼각형에 적기
  - 같은 변 공유 두 작은 삼각형 적힌 수가 연속하지 않게 적는 방법 수
  - 그림 첨부
sources:
  - 출처: 고쟁이 공통수학1 2025
    출판: 이투스북
    위치: 본문 p.174
external_labels:
  - source: 고쟁이 공통수학1
    book_key: GJ
    item_number: '667'
    cohort_normalized_star: 5
variant_policy: 원문 그대로 (시판 책 정점 + 전수 격상)
status: meta_only
created: 2026-06-30T00:00:00.000Z
frequency: 3
figure_attached: true
figure_type: 큰 직각삼각형 + 작은 4분할
---

**문제**

그림과 같이 작은 직각삼각형 $4$개를 사용하여 큰 직각삼각형을 만들었다. $1$부터 $6$까지의 자연수 중 서로 다른 $4$개의 수를 택하여 작은 직각삼각형에 각각 하나씩 적을 때, 같은 변을 공유하는 직각삼각형에 적힌 수가 연속하지 않도록 적는 경우의 수를 구하시오.

**답**: (해설지 참조 — 인접 그래프 분석 + 4개 수 택하는 $\binom{6}{4}$ + 인접 비연속 배열 분기)
