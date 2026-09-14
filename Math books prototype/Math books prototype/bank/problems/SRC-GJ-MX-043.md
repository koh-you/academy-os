---
id: SRC-GJ-MX-043
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
  - 이차정사각행렬 A
  - A(1; 2)=(3; 1)·A(1; -1)=(2; 6)·A(1; 7)=(p; q) 성립
  - 두 상수 p·q
  - p+q
  - 선형 결합
sources:
  - 출처: 고쟁이 공통수학1 2025
    출판: 이투스북
    위치: 본문 p.210
external_labels:
  - source: 고쟁이 공통수학1
    book_key: GJ
    item_number: '801'
    cohort_normalized_star: 5
variant_policy: 원문 그대로 (시판 책 정점 + 전수 격상)
status: meta_only
created: 2026-06-30T00:00:00.000Z
frequency: 3
---

**문제**

이차정사각행렬 $A$에 대하여
$$
A\begin{pmatrix} 1 \\ 2 \end{pmatrix}=\begin{pmatrix} 3 \\ 1 \end{pmatrix},\quad A\begin{pmatrix} 1 \\ -1 \end{pmatrix}=\begin{pmatrix} 2 \\ 6 \end{pmatrix},\quad A\begin{pmatrix} 1 \\ 7 \end{pmatrix}=\begin{pmatrix} p \\ q \end{pmatrix}
$$
가 성립할 때, 두 상수 $p$, $q$에 대하여 $p+q$의 값을 구하시오.

**답**: (해설지 참조 — $(1; 7)$을 $(1; 2)$·$(1; -1)$의 선형 결합으로 표현 후 $A$ 선형성 적용)
