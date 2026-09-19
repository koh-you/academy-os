---
id: SRC-GJ-MX-035
unit: CM1-MX
type: M04
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
  - 세 행렬 A=(1 2; 3 4)·B=(1 3; -1 0)·C=(0 -1; 1 2)
  - 행렬 (A+B)C+A(B-C)-(A-C)B 모든 성분의 합
  - 분배법칙 적용 후 정리
sources:
  - 출처: 고쟁이 공통수학1 2025
    출판: 이투스북
    위치: 본문 p.209
external_labels:
  - source: 고쟁이 공통수학1
    book_key: GJ
    item_number: '793'
    cohort_normalized_star: 4
variant_policy: 원문 그대로 (시판 책 정점 + 전수 격상)
status: meta_only
created: 2026-06-30T00:00:00.000Z
frequency: 3
---

**문제**

세 행렬 $A=\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$, $B=\begin{pmatrix} 1 & 3 \\ -1 & 0 \end{pmatrix}$, $C=\begin{pmatrix} 0 & -1 \\ 1 & 2 \end{pmatrix}$에 대하여 행렬 $(A+B)C+A(B-C)-(A-C)B$의 모든 성분의 합을 구하시오.

**답**: (해설지 참조 — 분배법칙 전개 $AC+BC+AB-AC-AB+CB = BC+CB$, 직접 계산)
