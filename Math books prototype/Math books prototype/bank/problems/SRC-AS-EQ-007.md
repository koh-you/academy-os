---
id: SRC-AS-EQ-007
unit: CM1-EQ
type: T-SYSTEM
M_scores:
  M_s: 3
  M_k: 2
  M_a: 2
  M_t: 2
M_total: 9
insights_used:
  - I-RT
  - I-EQV
insight_score: 2
insight_depth:
  - depth: 2
    type: I-RT
    rationale: y = -x+5 대입하여 일변수 방정식 환원
  - depth: 2
    type: I-EQV
    rationale: 두 해 (a,b)·(c,d)의 곱 abcd 직접 계산
X_familiarity: 0
base_star: 3
effective_star: 3
depth_score: 6
target_audience: 중상위권
audience_fit:
  - 중위권
  - 중상위권
audience_primary: 중상위권
keywords:
  - 연립방정식
  - 대입
  - 표현 전환
sources:
  - 출처: 아샘 짱 내신 FINAL 공통수학1 기말고사 1회 10번
    출판: 아샘
    위치: 본책 p.007 (3.7점)
variant_policy: 원문 그대로
status: meta_only
created: 2026-06-29T00:00:00.000Z
frequency: 2
---

**문제**

연립방정식 $\begin{cases} x+y=5 \\ x^2+2xy+2y^2=26 \end{cases}$의 해가 $\begin{cases} x=a \\ y=b \end{cases}$ 또는 $\begin{cases} x=c \\ y=d \end{cases}$일 때, $abcd$의 값은? [3.7점]

① $-24$  ② $-12$  ③ $-6$  ④ $12$  ⑤ $24$

**답**: ① $-24$

**풀이**: $y = -x+5$를 둘째 식에 대입: $x^2 + 2x(-x+5) + 2(-x+5)^2 = 26$, $x^2 - 10x + 24 = 0$, $(x-4)(x-6)=0$. $x=4$ → $y=1$; $x=6$ → $y=-1$. 따라서 $abcd = 4 \cdot 1 \cdot 6 \cdot (-1) = -24$.
