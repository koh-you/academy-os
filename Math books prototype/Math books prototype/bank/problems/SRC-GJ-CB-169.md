---
id: SRC-GJ-CB-169
unit: CM1-CB
type: C03
M_scores:
  M_s: 5
  M_k: 3
  M_a: 3
  M_t: 3
M_total: 14
insights_used:
  - I-CON
  - I-EQV
  - I-MI
  - I-PD
  - I-BW
insight_score: 5
X_familiarity: 0.5
base_star: 5
effective_star: 5
depth_score: 8
target_audience: 상위권
audience_fit:
  - 상위권
audience_primary: 상위권
star_premium: true
keywords:
  - 1·2·3·4 숫자 카드 각 3장 총 12장
  - 3×4 표 배열
  - 조건 박스 (가) 각 행에 1·2·3·4 한 장씩 (나) 같은 열에 이웃한 행 같은 숫자 X (라틴 직사각형)
  - 방법 수
sources:
  - 출처: 고쟁이 공통수학1 2025
    출판: 이투스북
    위치: 본문 p.199
external_labels:
  - source: 고쟁이 공통수학1
    book_key: GJ
    item_number: '759'
    cohort_normalized_star: 5
variant_policy: 원문 그대로 (시판 책 정점 + 전수 격상)
status: meta_only
created: 2026-06-30T00:00:00.000Z
frequency: 3
figure_attached: true
figure_type: 3x4 숫자판 + 예시 [그림 1][그림 2]
---

**문제**

$1$, $2$, $3$, $4$의 숫자가 각각 하나씩 적혀 있는 카드가 각각 $3$장씩 총 $12$장 있다. 이 $12$장의 카드를 그림과 같은 숫자판에 다음 규칙에 따라 한 칸에 하나씩 모두 배열하려고 한다.

(가) 각 행에는 $1$, $2$, $3$, $4$가 적힌 카드를 한 장씩 배열한다.

(나) 같은 열에는 이웃한 행에 같은 숫자가 적힌 카드를 배열하지 않는다.

규칙에 맞게 카드를 모두 배열하는 방법의 수는? (단, 같은 숫자가 적힌 카드끼리는 서로 구분하지 않는다.)

①&nbsp;$1934$ ②&nbsp;$1944$ ③&nbsp;$1954$ ④&nbsp;$1964$ ⑤&nbsp;$1974$

**답**: (해설지 참조 — 1행 $4!$ 배열 고정 후 2·3행 라틴 직사각형 (이웃 행 같은 열 다름) 카운트)
