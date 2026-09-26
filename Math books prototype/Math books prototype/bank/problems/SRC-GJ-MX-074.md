---
id: SRC-GJ-MX-074
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
  - 행렬 A=(1 0; -1 1)
  - A-A^2+A^3-A^4+…+A^999-A^1000 (교대합)
  - 거듭제곱 패턴 (1 0; -n 1)
  - (2·1) 성분
  - 반출
sources:
  - 출처: 고쟁이 공통수학1 2025
    출판: 이투스북
    위치: 본문 p.216
external_labels:
  - source: 고쟁이 공통수학1
    book_key: GJ
    item_number: '832'
    cohort_normalized_star: 5
variant_policy: 원문 그대로 (시판 책 정점 + 전수 격상)
status: meta_only
created: 2026-06-30T00:00:00.000Z
frequency: 3
---

**문제**

행렬 $A=\begin{pmatrix} 1 & 0 \\ -1 & 1 \end{pmatrix}$에 대하여 행렬 $A-A^2+A^3-A^4+\cdots+A^{999}-A^{1000}$의 $(2, 1)$ 성분은?

①&nbsp;$-500$ ②&nbsp;$-250$ ③&nbsp;$0$ ④&nbsp;$250$ ⑤&nbsp;$500$

**답**: (해설지 참조 — $A^n=\begin{pmatrix} 1 & 0 \\ -n & 1 \end{pmatrix}$, 교대합의 $(2, 1)$ 성분 $\sum (-1)^{n+1}(-n)$)
