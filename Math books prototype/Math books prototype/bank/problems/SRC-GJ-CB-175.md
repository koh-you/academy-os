---
id: SRC-GJ-CB-175
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
  - 정사각형 ABCD 변 따라 말 이동
  - 동전 5번 던짐 (앞 → 시계 1·뒤 → 반시계 1)
  - 처음 A 도착 B (한 변 거리)
  - 앞·뒤 회수 차 ≡ 1 mod 4
sources:
  - 출처: 고쟁이 공통수학1 2025
    출판: 이투스북
    위치: 본문 p.201
external_labels:
  - source: 고쟁이 공통수학1
    book_key: GJ
    item_number: '765'
    cohort_normalized_star: 5
variant_policy: 원문 그대로 (시판 책 정점 + 전수 격상)
status: meta_only
created: 2026-06-30T00:00:00.000Z
frequency: 3
figure_attached: true
figure_type: 정사각형 ABCD + 말 이동
---

**문제**

그림과 같이 한 변의 길이가 $1$인 정사각형 ABCD가 그려진 알판이 있다. 말을 처음 점 A에 두고 동전을 던져 다음 규칙에 따라 말을 움직인다.

(가) 동전의 앞면이 나오면 정사각형의 변을 따라 시계 방향으로 $1$만큼 말을 이동시킨다.

(나) 동전의 뒷면이 나오면 정사각형의 변을 따라 시계 반대 방향으로 $1$만큼 말을 이동시킨다.

동전을 $5$번 던져서 말을 이동시켰을 때, 말이 점 B에 있도록 하는 방법의 수를 구하시오.

**답**: (해설지 참조 — 앞 $a$·뒤 $b$ ($a+b=5$), $a-b\equiv 1\pmod 4$ ↔ $a-b\in\{1, -3, 5\}$, 각 경우 $\binom{5}{a}$ 합)
