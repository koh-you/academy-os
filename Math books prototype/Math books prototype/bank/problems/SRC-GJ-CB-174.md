---
id: SRC-GJ-CB-174
unit: CM1-CB
type: C03
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
X_familiarity: 0.5
base_star: 5
effective_star: 5
depth_score: 7
target_audience: 상위권
audience_fit:
  - 상위권
audience_primary: 상위권
keywords:
  - 8칸 도형 (2행 4열) A·B·C·D·E·F·G·H 문자 배치
  - 조건 박스 (가) A·C 변 공유 X (나) E·F 같은 행 X
  - 경우의 수 = 24k
  - 자연수 k
sources:
  - 출처: 고쟁이 공통수학1 2025
    출판: 이투스북
    위치: 본문 p.201
external_labels:
  - source: 고쟁이 공통수학1
    book_key: GJ
    item_number: '764'
    cohort_normalized_star: 5
variant_policy: 원문 그대로 (시판 책 정점 + 전수 격상)
status: meta_only
created: 2026-06-30T00:00:00.000Z
frequency: 3
figure_attached: true
figure_type: 2x4 격자
---

**문제**

그림과 같이 $8$개의 칸으로 나누어진 도형에 A, B, C, D, E, F, G, H의 $8$개의 문자를 각각 하나씩 써넣으려고 한다. 다음 조건을 만족시키는 경우의 수가 $24k$일 때, 자연수 $k$의 값을 구하시오.

(가) 두 문자 A와 C는 같은 변을 공유하는 칸에 써넣지 않는다.

(나) 두 문자 E와 F는 같은 행에 써넣지 않는다.

**답**: (해설지 참조 — A·C 위치 분리 + E·F 다른 행 분기 + 나머지 6 문자 배치)
