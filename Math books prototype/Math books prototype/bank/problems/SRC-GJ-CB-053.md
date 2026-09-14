---
id: SRC-GJ-CB-053
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
  - 두 점 A·B 꼭짓점·모서리 길이 4 이하 자연수 직육면체
  - 가로·세로·높이 a·b·c
  - 조건 (가) a≤b (나) AB(대각선)<5
  - 만족 순서쌍 개수
  - 도형+카운팅
sources:
  - 출처: 고쟁이 공통수학1 2025
    출판: 이투스북
    위치: 본문 p.168
external_labels:
  - source: 고쟁이 공통수학1
    book_key: GJ
    item_number: '643'
    cohort_normalized_star: 5
variant_policy: 원문 그대로 (시판 책 정점 + 전수 격상)
status: meta_only
created: 2026-06-30T00:00:00.000Z
frequency: 3
figure_attached: true
figure_type: 직육면체 + 대각선 AB
---

**문제**

그림과 같이 두 점 A, B를 꼭짓점으로 하고 모서리의 길이가 모두 $4$ 이하의 자연수인 직육면체가 있다. 이 직육면체의 가로, 세로의 길이와 높이를 각각 $a$, $b$, $c$라 할 때, 다음 조건을 만족시키는 $a$, $b$, $c$의 모든 순서쌍 $(a, b, c)$의 개수를 구하시오.

(가) $a\leq b$

(나) $\overline{\mathrm{AB}}<5$

**답**: (해설지 참조 — $\overline{\mathrm{AB}}^2=a^2+b^2+c^2<25$, $a\leq b$ + $1\leq a, b, c\leq 4$ 만족 정수쌍 카운트)
