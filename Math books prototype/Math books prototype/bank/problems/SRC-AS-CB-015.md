---
id: SRC-AS-CB-015
unit: CM1-CB
type: T-DICE
M_scores: {M_s: 3, M_k: 3, M_a: 2, M_t: 3}
M_total: 11
insights_used: [I-CON, I-MI]
insight_score: 2
insight_depth:
  - {depth: 3, type: I-CON, rationale: "a₁<a₂ 순서 조건 + a₁+a₂+a₃≤7 합 조건 동시"}
  - {depth: 3, type: I-MI, rationale: "a₁ 값별 분기, 각 a₁에 대해 (a₂, a₃) 카운트"}
X_familiarity: 0
base_star: 4
effective_star: 4
depth_score: 8.0
target_audience: 상위권
audience_fit: [중상위권, 상위권]
audience_primary: 중상위권
keywords: [주사위 순서쌍, 다중 조건, 카운팅 분기]
sources:
  - {출처: 아샘 짱 내신 FINAL 공통수학1 기말고사 2회 21번, 출판: 아샘, 위치: 본책 p.016 (6점, 서술형)}
variant_policy: 원문 그대로
status: meta_only
created: 2026-06-29T00:00:00.000Z
frequency: 1
---

**문제**

주사위 $1$개를 $3$번 던질 때, 나온 눈의 수를 차례로 $a_1$, $a_2$, $a_3$이라 하자. 다음 조건을 만족시키는 순서쌍 $(a_1, a_2, a_3)$의 개수를 구하시오. [6점]

(가) $a_1 < a_2$
(나) $a_1 + a_2 + a_3 \le 7$

**답**: $13$

**풀이**: $a_1<a_2$. $a_3 = 1$일 때 $a_1+a_2 \le 6$, $(a_1,a_2)$ 쌍: $(1,2),(1,3),(1,4),(1,5),(2,3),(2,4)$ = 6. $a_3=2$: $a_1+a_2\le5$, $(1,2),(1,3),(1,4),(2,3)$ = 4. $a_3=3$: $a_1+a_2\le4$, $(1,2),(1,3)$ = 2. $a_3=4$: $a_1+a_2\le3$, $(1,2)$ = 1. $a_3 \ge 5$: 불가. 합 $6+4+2+1 = 13$.
