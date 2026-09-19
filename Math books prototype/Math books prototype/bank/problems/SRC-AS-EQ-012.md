---
id: SRC-AS-EQ-012
unit: CM1-EQ
type: T-INEQ
M_scores:
  M_s: 3
  M_k: 2
  M_a: 3
  M_t: 3
M_total: 11
insights_used:
  - I-BW
  - I-CON
insight_score: 2
insight_depth:
  - depth: 3
    type: I-BW
    rationale: 해 [3,5]에서 x²-3x-10≤0과 x²-ax+b≤0의 공통이 [3,5]. 미정 a,b 역방향 결정
  - depth: 2
    type: I-CON
    rationale: 두 연립부등식의 해 조건 동시 활용 (x=3·6 이차식의 해로 활용)
X_familiarity: 0
base_star: 4
effective_star: 4
depth_score: 7.5
target_audience: 상위권
audience_fit:
  - 중상위권
  - 상위권
audience_primary: 중상위권
keywords:
  - 연립부등식
  - 역방향
  - 미정계수
  - 근과 계수
sources:
  - 출처: 아샘 짱 내신 FINAL 공통수학1 기말고사 1회 17번
    출판: 아샘
    위치: 본책 p.009 (4점)
variant_policy: 원문 그대로
status: meta_only
created: 2026-06-29T00:00:00.000Z
frequency: 3
---

**문제**

연립부등식 $\begin{cases} x^2-3x-10 \le 0 \\ x^2-ax+b \le 0 \end{cases}$의 해가 $3 \le x \le 5$이고, 연립부등식 $\begin{cases} x^2-ax+b \le 0 \\ x^2-13x+36 \le 0 \end{cases}$의 해가 $4 \le x \le 6$일 때, 두 상수 $a$, $b$에 대하여 $ab$의 값은? [4점]

① $154$  ② $156$  ③ $158$  ④ $160$  ⑤ $162$

**답**: ⑤ $162$

**풀이**: 첫째에서 $x^2-3x-10 \le 0$의 해 $-2 \le x \le 5$. 공통이 $3 \le x \le 5$이므로 $x=3$이 $x^2-ax+b=0$의 해. 둘째에서 $x^2-13x+36 \le 0$의 해 $4 \le x \le 9$. 공통이 $4 \le x \le 6$이므로 $x=6$이 $x^2-ax+b=0$의 해. 따라서 $a = 3+6 = 9$, $b = 3 \cdot 6 = 18$. $ab = 162$.
