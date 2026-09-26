---
id: SRC-AS-EQ-028
unit: CM1-EQ
type: T-INEQ
M_scores:
  M_s: 3
  M_k: 3
  M_a: 3
  M_t: 3
M_total: 12
insights_used:
  - I-CON
  - I-MI
  - I-BW
insight_score: 3
insight_depth:
  - depth: 3
    type: I-MI
    rationale: k-1 부호별 (k>1·k=1·k<1) 분기
  - depth: 3
    type: I-CON
    rationale: k>1 분기에서 D≤0 조건 + k 최대
  - depth: 2
    type: I-BW
    rationale: k 최댓값 a+b√2 → 무리수 형식 표현
X_familiarity: 0
base_star: 4
effective_star: 4
depth_score: 8.33
target_audience: 상위권
audience_fit:
  - 중상위권
  - 상위권
audience_primary: 상위권
keywords:
  - 매개변수 부등식
  - 해 없음
  - 분기
  - 판별식
  - 무리수
sources:
  - 출처: 아샘 짱 내신 FINAL 공통수학1 기말고사 2회 17번
    출판: 아샘
    위치: 본책 p.015 (4점)
variant_policy: 원문 그대로
status: meta_only
created: 2026-06-29T00:00:00.000Z
frequency: 3
---

**문제**

이차부등식 $(k-1)x^2 - 2kx + 8 < 0$의 해가 존재하지 않도록 하는 실수 $k$의 최댓값이 $a + b\sqrt{2}$이다. $a+b$의 값은? (단, $a$, $b$는 유리수이다.) [4점]

① $6$  ② $7$  ③ $8$  ④ $9$  ⑤ $10$

**답**: ① $6$

**풀이**: 해 없음 = 모든 $x$에서 좌변 $\ge 0$. (i) $k=1$: $-2x+8\ge0$ 모든 $x$ X (해 존재). (ii) $k>1$: $D/4 = k^2 - 8(k-1) \le 0$, $k^2-8k+8 \le 0$, $k = 4 \pm 2\sqrt{2}$. 최댓값 $k = 4 + 2\sqrt{2}$. $a=4, b=2$, $a+b=6$.
