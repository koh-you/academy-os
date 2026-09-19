---
id: SRC-GJ-CB-080
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
  - 대문자 A·B·소문자 a·b 중복 허용 4개 선택
  - 4개 문자 일렬 나열
  - 조건 박스 (가)(나)(다)(라) (A 바로 오른쪽 대문자 X·a 오른쪽 B 또는 b X·B 오른쪽 B X·b 오른쪽 b X)
  - 선행 666
sources:
  - 출처: 고쟁이 공통수학1 2025
    출판: 이투스북
    위치: 본문 p.176
external_labels:
  - source: 고쟁이 공통수학1
    book_key: GJ
    item_number: '670'
    cohort_normalized_star: 5
variant_policy: 원문 그대로 (시판 책 정점 + 전수 격상)
status: meta_only
created: 2026-06-30T00:00:00.000Z
frequency: 3
---

**문제**

두 대문자 A, B와 두 소문자 $a$, $b$를 중복을 허락하여 $4$개를 선택하고, 선택한 $4$개의 문자를 일렬로 나열하여 만든 모든 문자열 중 다음 규칙을 만족시키는 문자열의 개수는?

(가) A의 바로 오른쪽에는 대문자가 오지 않는다.

(나) $a$의 바로 오른쪽에는 B 또는 $b$가 오지 않는다.

(다) B의 바로 오른쪽에는 B가 오지 않고, $b$의 바로 오른쪽에는 $b$가 오지 않는다.

①&nbsp;$44$ ②&nbsp;$48$ ③&nbsp;$52$ ④&nbsp;$56$ ⑤&nbsp;$60$

**답**: (해설지 참조 — 각 자리 가능 문자 분기 + 조건 결합 카운트)
