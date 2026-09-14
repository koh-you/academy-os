---
id: SRC-GJ-CB-172
unit: CM1-CB
type: C04
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
  - 두 문자 X·Y 중복 8개 문자열
  - 조건 박스 (가) 모두 적어도 1개 (나) 첫 번째 문자 X·Y끼리 이웃 X
  - 만족 문자열 개수
sources:
  - 출처: 고쟁이 공통수학1 2025
    출판: 이투스북
    위치: 본문 p.200
external_labels:
  - source: 고쟁이 공통수학1
    book_key: GJ
    item_number: '762'
    cohort_normalized_star: 5
variant_policy: 원문 그대로 (시판 책 정점 + 전수 격상)
status: meta_only
created: 2026-06-30T00:00:00.000Z
frequency: 3
---

**문제**

두 문자 X, Y에서 중복을 허락하여 $8$개의 문자열을 택해 $8$자리 문자열을 만들 때, 다음 조건을 만족시키는 문자열의 개수는?

(가) X, Y는 모두 적어도 $1$개씩 사용된다.

(나) 첫 번째 문자는 X이고, Y끼리는 서로 이웃하지 않는다.

①&nbsp;$30$ ②&nbsp;$31$ ③&nbsp;$32$ ④&nbsp;$33$ ⑤&nbsp;$34$

**답**: (해설지 참조 — 첫 자 X 고정 + Y 개수 $k$ ($1\leq k$) 분기 + X 사이·끝 자리 중 Y $k$자리 선택)
