---
id: SRC-GJ-MX-021
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
  - 두 이차정사각행렬 A·B 성분 정의 (a_ij=|i-3j| (i+j)·(i=j) / b_ij=i^2-j^2)
  - 행렬 B-2A의 모든 성분의 합
sources:
  - 출처: 고쟁이 공통수학1 2025
    출판: 이투스북
    위치: 본문 p.207
external_labels:
  - source: 고쟁이 공통수학1
    book_key: GJ
    item_number: '779'
    cohort_normalized_star: 4
variant_policy: 원문 그대로 (시판 책 정점 + 전수 격상)
status: meta_only
created: 2026-06-30T00:00:00.000Z
frequency: 3
---

**문제**

두 이차정사각행렬 $A$, $B$에 대하여 행렬 $A$의 $(i, j)$ 성분 $a_{ij}$는
$$
a_{ij}=\begin{cases} |i-3j| & (i+j\text{의 약수}) \\ i+j & (i=j) \end{cases}
$$
이고 행렬 $B-2A$의 $(i, j)$ 성분 $c_{ij}$는 $c_{ij}=i^2-j^2$일 때, 행렬 $B$의 모든 성분의 합을 구하시오.

**답**: (해설지 참조 — $A$ 성분 계산 + $B-2A$ 성분 계산 후 $B=B-2A+2A$로 합 카운트)
