---
id: SRC-GJ-MX-032
unit: CM1-MX
type: M04
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
X_familiarity: 0
base_star: 5
effective_star: 5
depth_score: 7
target_audience: 상위권
audience_fit:
  - 상위권
audience_primary: 상위권
keywords:
  - 두 이차정사각행렬 A·B
  - (A+B)^2=(1 0; 2 4)·A^2+B^2=(1 0; 0 4)
  - (A-B)^2 가장 큰 성분
  - 항등식 (A+B)^2 = A^2+AB+BA+B^2
sources:
  - 출처: 고쟁이 공통수학1 2025
    출판: 이투스북
    위치: 본문 p.209
external_labels:
  - source: 고쟁이 공통수학1
    book_key: GJ
    item_number: '790'
    cohort_normalized_star: 5
variant_policy: 원문 그대로 (시판 책 정점 + 전수 격상)
status: meta_only
created: 2026-06-30T00:00:00.000Z
frequency: 3
---

**문제**

두 이차정사각행렬 $A$, $B$에 대하여
$$
(A+B)^2=\begin{pmatrix} 1 & 0 \\ 2 & 4 \end{pmatrix},\quad A^2+B^2=\begin{pmatrix} 1 & 0 \\ 0 & 4 \end{pmatrix}
$$
일 때, 행렬 $(A-B)^2$의 가장 큰 성분을 구하시오.

**답**: (해설지 참조 — $(A+B)^2-(A^2+B^2) = AB+BA$, $(A-B)^2=A^2-AB-BA+B^2$ 활용)
