---
id: SRC-AS-EQ-015
unit: CM1-EQ
type: T-DISCRIMINANT
M_scores:
  M_s: 3
  M_k: 2
  M_a: 3
  M_t: 2
M_total: 10
insights_used: [I-CON, I-MI]
insight_score: 2
insight_depth:
  - depth: 3
    type: I-CON
    rationale: 한 이차방정식 실근(D₁≥0) + 다른 이차방정식 허근(D₂<0) 두 조건 동시 결합
  - depth: 2
    type: I-MI
    rationale: a≤k≤b 범위에서 a, b를 두 부등식 경계로 식별
X_familiarity: 0
base_star: 4
effective_star: 4
depth_score: 7.5
target_audience: 상위권
audience_fit: [중상위권, 상위권]
audience_primary: 중상위권
keywords: [판별식, 실근·허근, 두 조건 결합, 범위 경계]
sources:
  - 출처: 아샘 짱 내신 FINAL 공통수학1 기말고사 1회 21번
    출판: 아샘
    위치: 본책 p.010 (6점, 서술형)
variant_policy: 원문 그대로
status: meta_only
created: 2026-06-29T00:00:00.000Z
frequency: 1
---

**문제**

이차방정식 $x^2 + 2kx + 3k - 2 = 0$이 실근을 갖고 이차방정식 $x^2 - 2kx + 4 = 0$이 허근을 갖도록 하는 실수 $k$의 값의 범위가 $a < k \le b$이다. $a+b$의 값을 구하시오. [6점]

**답**: $-1$

**풀이**: 첫 식 판별식 $D_1/4 = k^2 - 3k + 2 = (k-1)(k-2) \ge 0$, $k \le 1$ 또는 $k \ge 2$. 둘째 식 판별식 $D_2/4 = k^2 - 4 < 0$, $-2 < k < 2$. 공통: $-2 < k \le 1$. $a = -2$, $b = 1$. $a + b = -1$.
