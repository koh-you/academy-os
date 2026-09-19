---
id: SRC-GJ-CB-170
unit: CM1-CB
type: C05
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
  - 상자 1~8 자연수 카드 8장
  - 한 장 뽑은 후 n 나오면 더 안 뽑음·이전까지 뽑은 카드 개수가 n
  - f(n) = 경우 수
  - (f(3)+f(4)+f(5)+f(6))/4!
sources:
  - 출처: 고쟁이 공통수학1 2025
    출판: 이투스북
    위치: 본문 p.200
external_labels:
  - source: 고쟁이 공통수학1
    book_key: GJ
    item_number: '760'
    cohort_normalized_star: 5
variant_policy: 원문 그대로 (시판 책 정점 + 전수 격상)
status: meta_only
created: 2026-06-30T00:00:00.000Z
frequency: 3
---

**문제**

상자에 $1$부터 $8$까지의 자연수가 각각 하나씩 적혀 있는 $8$장의 카드가 들어 있다. 이 상자에서 카드를 한 장씩 더 이상 뽑지 않을 때까지 뽑은 카드의 개수가 $n$인 경우의 수를 $f(n)$이라 할 때, $\dfrac{f(3)+f(4)+f(5)+f(6)}{4!}$의 값은? (단, 꺼낸 카드는 다시 상자에 넣지 않는다.)

①&nbsp;$117$ ②&nbsp;$122$ ③&nbsp;$127$ ④&nbsp;$132$ ⑤&nbsp;$137$

**답**: (해설지 참조 — $f(n)$ = 마지막 $n$ 나옴 + 이전 $n-1$장 모두 $n$보다 큰 수, 분기 카운트)
