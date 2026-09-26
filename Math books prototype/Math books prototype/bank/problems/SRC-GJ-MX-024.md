---
id: SRC-GJ-MX-024
unit: CM1-MX
type: M04
M_scores:
  M_s: 4
  M_k: 3
  M_a: 3
  M_t: 2
M_total: 12
insights_used:
  - I-CON
  - I-EQV
  - I-MI
insight_score: 3
X_familiarity: 0
base_star: 4
effective_star: 4
depth_score: 6
target_audience: 중상위권
audience_fit:
  - 중상위권
audience_primary: 중상위권
keywords:
  - 이차정사각행렬 A의 (i·j) 성분 a_ij=i-3j (i≠j)·i+j+1 (i=j)
  - 이차정사각행렬 B의 b_ij=-i+j+1 (i=1·2·j=1·2)
  - AB의 (2·2) 성분
  - 교육청 기출
sources:
  - 출처: 고쟁이 공통수학1 2025
    출판: 이투스북
    위치: 본문 p.207
external_labels:
  - source: 고쟁이 공통수학1
    book_key: GJ
    item_number: '782'
    cohort_normalized_star: 4
variant_policy: 원문 그대로 (시판 책 정점 + 전수 격상)
status: meta_only
created: 2026-06-30T00:00:00.000Z
frequency: 3
---

**문제**

이차정사각행렬 $A$의 $(i, j)$ 성분 $a_{ij}$와 이차정사각행렬 $B$의 $(i, j)$ 성분 $b_{ij}$는 각각
$$
a_{ij}=\begin{cases} i-3j & (i\neq j) \\ i+j+1 & (i=j) \end{cases},\quad b_{ij}=-i+j+1 \quad (i=1, 2,\ j=1, 2)
$$
이라 할 때, 행렬 $AB$의 $(2, 2)$ 성분을 구하시오.

**답**: (해설지 참조 — $A$·$B$ 성분 계산 후 곱 $(2, 2)$ 성분 = $a_{21}b_{12}+a_{22}b_{22}$)
