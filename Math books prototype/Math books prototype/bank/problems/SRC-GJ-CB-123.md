---
id: SRC-GJ-CB-123
unit: CM1-CB
type: C05
M_scores:
  M_s: 4
  M_k: 2
  M_a: 3
  M_t: 3
M_total: 12
insights_used:
  - I-CON
  - I-EQV
  - I-MI
  - I-PD
insight_score: 4
X_familiarity: 0.5
base_star: 5
effective_star: 5
depth_score: 6
target_audience: 상위권
audience_fit:
  - 상위권
audience_primary: 상위권
keywords:
  - 제과점 같은 초콜릿 10·다른 쿠키 7
  - 10개 묶어 세트 상품
  - 초콜릿 개수 홀수 (1·3·5·7·9)
  - 종류 수
sources:
  - 출처: 고쟁이 공통수학1 2025
    출판: 이투스북
    위치: 본문 p.188
external_labels:
  - source: 고쟁이 공통수학1
    book_key: GJ
    item_number: '713'
    cohort_normalized_star: 5
variant_policy: 원문 그대로 (시판 책 정점 + 전수 격상)
status: meta_only
created: 2026-06-30T00:00:00.000Z
frequency: 3
---

**문제**

어느 제과점에서 똑같은 초콜릿 $10$개와 서로 다른 쿠키 $7$개 중 $10$개를 묶어 세트 상품을 만들려고 한다. 세트 상품에 들어가는 초콜릿의 개수가 홀수일 때, 만들 수 있는 세트 상품의 종류는 몇 가지인지 구하시오.

**답**: (해설지 참조 — 초콜릿 $k$개 ($k=1, 3, 5, 7, 9$) + 쿠키 $10-k$개 → $\sum\binom{7}{10-k}$)
