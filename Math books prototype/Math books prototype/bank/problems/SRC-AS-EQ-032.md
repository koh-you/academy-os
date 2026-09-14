---
id: SRC-AS-EQ-032
unit: CM1-EQ
type: T-ABS-INEQ
M_scores: {M_s: 3, M_k: 3, M_a: 3, M_t: 3}
M_total: 12
insights_used: [I-MI, I-CON]
insight_score: 2
insight_depth:
  - {depth: 3, type: I-MI, rationale: "이중 절댓값 ||x|+|x+1|| 풀이. x≥0·-1≤x<0·x<-1 케이스"}
  - {depth: 3, type: I-CON, rationale: "외부 절댓값 ≤3 조건 추가 통합. 두 부등식 결합"}
X_familiarity: 0
base_star: 4
effective_star: 4
depth_score: 8.0
target_audience: 상위권
audience_fit: [중상위권, 상위권]
audience_primary: 상위권
keywords: [이중 절댓값, 케이스 분류, 부등식 범위]
sources:
  - {출처: 아샘 짱 내신 FINAL 공통수학1 기말고사 2회 23번, 출판: 아샘, 위치: 본책 p.016 (8점, 서술형)}
variant_policy: 원문 그대로
status: meta_only
created: 2026-06-29T00:00:00.000Z
frequency: 1
---

**문제**

부등식 $\bigl||x| + |x+1|\bigr| \le 3$을 만족시키는 실수 $x$의 값의 범위를 구하시오. [8점]

**답**: $-2 \le x \le 1$

**풀이**: $|x|+|x+1|$은 항상 $\ge 0$이므로 외부 절댓값 제거: $|x|+|x+1| \le 3$. (i) $x \ge 0$: $x + (x+1) \le 3$, $x \le 1$ → $0 \le x \le 1$. (ii) $-1 \le x < 0$: $-x + (x+1) = 1 \le 3$ 항상 → $-1 \le x < 0$. (iii) $x < -1$: $-x - (x+1) = -2x-1 \le 3$, $x \ge -2$ → $-2 \le x < -1$. 종합 $-2 \le x \le 1$.
