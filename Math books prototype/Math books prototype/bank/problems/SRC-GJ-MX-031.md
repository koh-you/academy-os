---
id: SRC-GJ-MX-031
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
  - 세 이차정사각행렬 A·B·C
  - A=(-1 0; 3 1)·B(-C)=(2 1; -1 0) 즉 -BC=주어진식
  - A(2B+3C)-5AC의 가장 큰·작은 성분 합
sources:
  - 출처: 고쟁이 공통수학1 2025
    출판: 이투스북
    위치: 본문 p.208
external_labels:
  - source: 고쟁이 공통수학1
    book_key: GJ
    item_number: '789'
    cohort_normalized_star: 5
variant_policy: 원문 그대로 (시판 책 정점 + 전수 격상)
status: meta_only
created: 2026-06-30T00:00:00.000Z
frequency: 3
---

**문제**

세 이차정사각행렬 $A$, $B$, $C$에 대하여
$$
A=\begin{pmatrix} -1 & 0 \\ 3 & 1 \end{pmatrix},\quad B(-C)=\begin{pmatrix} 2 & 1 \\ -1 & 0 \end{pmatrix}
$$
일 때, 행렬 $A(2B+3C)-5AC$의 가장 큰 성분과 가장 작은 성분의 합을 구하시오.

**답**: (해설지 참조 — $A(2B+3C)-5AC = 2AB+3AC-5AC = 2AB-2AC = 2A(B-C)$, $A\cdot B(-C)$와 $A(B-C)$ 관계 정리)
