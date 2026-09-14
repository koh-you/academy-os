---
id: SRC-GJ-MX-010
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
  - I-RT
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
  - 강에 댐 어도
  - 상류 댐 3개·하류 댐 4개 어도
  - 삼차 정사각행렬 A의 (i·j) 성분 a_ij
  - 조건 박스 (가) i=j → a_ij=0 (나) i≠j → P_i에서 P_j로 가는 방법 수
  - 행렬 A 구하기
  - 그림 첨부
sources:
  - 출처: 고쟁이 공통수학1 2025
    출판: 이투스북
    위치: 본문 p.205
external_labels:
  - source: 고쟁이 공통수학1
    book_key: GJ
    item_number: '768'
    cohort_normalized_star: 4
variant_policy: 원문 그대로 (시판 책 정점 + 전수 격상)
status: meta_only
created: 2026-06-30T00:00:00.000Z
frequency: 3
figure_attached: true
figure_type: 강·댐·어도 도식 (상류·하류 P_i 구역)
---

**문제**

그림과 같이 강에 댐을 설치하고, 물고기를 위한 통로의 어도를 상류 댐에 $3$개, 하류 댐에 $4$개 설치하였다. 삼차정사각행렬 $A$의 $(i, j)$ 성분 $a_{ij}$가 다음 조건을 모두 만족시킬 때, 행렬 $A$를 구하시오. (단, 물고기는 같은 구역을 두 번 이상 지나지 않는다.)

(가) $i=j$일 때, $a_{ij}=0$

(나) $i\neq j$일 때, $a_{ij}$는 물고기가 구역 $\mathrm{P}_i$에서 구역 $\mathrm{P}_j$로 갈 수 있는 방법의 수이다.

**답**: (해설지 참조 — 상류↔중류 3가지 / 중류↔하류 4가지 / 상류↔하류 (경유 X 직접 X)로 행렬 성분 결정)
