---
id: SRC-GJ-CB-055
unit: CM1-CB
type: C02
M_scores:
  M_s: 4
  M_k: 3
  M_a: 3
  M_t: 3
M_total: 13
insights_used:
  - I-CON
  - I-RT
  - I-EQV
  - I-PD
  - I-MI
insight_score: 5
X_familiarity: 0.5
base_star: 5
effective_star: 5
depth_score: 7
target_audience: 상위권
audience_fit:
  - 상위권
audience_primary: 상위권
star_premium: true
keywords:
  - 원기둥 반지름 4·높이 5 수조 물 3/4 차있음
  - 부피 π·3π·4π 돌 동시 가라앉혀 물 넘치지 않고 채우는 방법 수
  - 부피 합 + 공간 제약
sources:
  - 출처: 고쟁이 공통수학1 2025
    출판: 이투스북
    위치: 본문 p.168
external_labels:
  - source: 고쟁이 공통수학1
    book_key: GJ
    item_number: '645'
    cohort_normalized_star: 5
variant_policy: 원문 그대로 (시판 책 정점 + 전수 격상)
status: meta_only
created: 2026-06-30T00:00:00.000Z
frequency: 3
---

**문제**

밑면의 반지름의 길이가 $4$이고 높이가 $5$인 원기둥 모양의 수조에 물이 $\dfrac{3}{4}$만큼 차 있다. 이 수조에 부피가 각각 $\pi$, $3\pi$, $4\pi$인 돌을 적어도 하나씩 동시에 가라앉혀 수조에 물이 넘치지 않고 가득 차게 하려고 한다. 수조에 돌을 넣는 방법의 수를 구하시오. (단, 부피가 같은 돌끼리는 구분하지 않고, 각각의 돌은 충분히 준비되어 있으며, 수조의 두께는 무시한다.)

**답**: (해설지 참조 — 빈 공간 부피 $20\pi$, $a\cdot\pi+b\cdot 3\pi+c\cdot 4\pi\leq 20\pi$ 비음정수해 카운트, 모두 적어도 한 개 조건)
