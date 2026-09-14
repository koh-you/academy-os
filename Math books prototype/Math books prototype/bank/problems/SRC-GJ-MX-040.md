---
id: SRC-GJ-MX-040
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
  - 두 행렬 A=(6x 1; 1 x^2)·B=(y^2 1; 1 7)
  - (A+2B)(A-B)=A^2+AB-2B^2 만족 → AB=BA
  - 두 정수 (x·y) 순서쌍 개수
  - 서술형
sources:
  - 출처: 고쟁이 공통수학1 2025
    출판: 이투스북
    위치: 본문 p.210
external_labels:
  - source: 고쟁이 공통수학1
    book_key: GJ
    item_number: '798'
    cohort_normalized_star: 5
variant_policy: 원문 그대로 (시판 책 정점 + 전수 격상)
status: meta_only
created: 2026-06-30T00:00:00.000Z
frequency: 3
---

**문제**

두 행렬 $A=\begin{pmatrix} 6x & 1 \\ 1 & x^2 \end{pmatrix}$, $B=\begin{pmatrix} y^2 & 1 \\ 1 & 7 \end{pmatrix}$에 대하여 $(A+2B)(A-B)=A^2+AB-2B^2$이 성립할 때, 두 정수 $x$, $y$의 순서쌍 $(x, y)$의 개수를 구하고, 그 과정을 서술하시오.

**답**: (해설지 참조 — 항등식 ↔ $AB=BA$, $x^2 y^2$ 또는 $6xy$ 등식 후 정수 분해 카운트)
