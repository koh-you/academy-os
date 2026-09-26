---
id: SRC-GJ-MX-011
unit: CM1-MX
type: M01
M_scores:
  M_s: 3
  M_k: 2
  M_a: 2
  M_t: 2
M_total: 9
insights_used:
  - I-CON
  - I-EQV
  - I-MI
insight_score: 3
X_familiarity: 0
base_star: 4
effective_star: 4
depth_score: 5
target_audience: 중상위권
audience_fit:
  - 중상위권
audience_primary: 중상위권
keywords:
  - 삼차 정사각행렬 A의 (i·j) 성분 a_ij
  - 분기 조건 (i>j → ij·i=j → 2i^2-3j·i<j → a_ji)
  - 제2열 모든 성분의 합
  - 추가 변형
sources:
  - 출처: 고쟁이 공통수학1 2025
    출판: 이투스북
    위치: 본문 p.205
external_labels:
  - source: 고쟁이 공통수학1
    book_key: GJ
    item_number: '769'
    cohort_normalized_star: 4
variant_policy: 원문 그대로 (시판 책 정점 + 전수 격상)
status: meta_only
created: 2026-06-30T00:00:00.000Z
frequency: 3
---

**문제**

삼차정사각행렬 $A$의 $(i, j)$ 성분 $a_{ij}$가
$$
a_{ij}=\begin{cases} ij & (i>j) \\ 2i^2-3j & (i=j) \\ a_{ji} & (i<j) \end{cases}
$$
일 때, 행렬 $A$의 제2열의 모든 성분의 합을 구하시오.

**답**: (해설지 참조 — 제2열은 $a_{12}, a_{22}, a_{32}$, 정의 분기 직접 계산)
