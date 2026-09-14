---
id: SRC-AS-EQ-005
unit: CM1-EQ
type: T-OMEGA
M_scores:
  M_s: 3
  M_k: 2
  M_a: 2
  M_t: 2
M_total: 9
insights_used:
  - I-EQV
  - I-PD
insight_score: 2
insight_depth:
  - depth: 2
    type: I-EQV
    rationale: $x + 1/x = -1$ 양변에 $x$ 곱하여 $x^2 + x + 1 = 0$ 형식 환원
  - depth: 2
    type: I-PD
    rationale: ω³=1 주기성 + 거듭제곱 환원
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
  - ω
  - 거듭제곱
  - 표면 모순
  - 동치 변환
sources:
  - 출처: 아샘 짱 내신 FINAL 공통수학1 기말고사 1회 08번
    출판: 아샘
    위치: 본책 p.006 (3.7점)
variant_policy: 원문 그대로
status: meta_only
created: 2026-06-29T00:00:00.000Z
frequency: 2
---

**문제**

방정식 $x + \dfrac{1}{x} = -1$의 한 허근을 $\omega$라 할 때, $\omega^{50} + \dfrac{1}{\omega^{20}}$의 값은? [3.7점]

① $-\omega$  ② $-1$  ③ $0$  ④ $1$  ⑤ $\omega$

**답**: ② $-1$

**풀이**: 양변에 $x$ 곱하면 $x^2 + x + 1 = 0$, 다시 $x-1$ 곱하면 $x^3 - 1 = 0$이므로 $\omega^3 = 1$. $\omega^{50} = \omega^{48+2} = \omega^2$, $1/\omega^{20} = 1/\omega^{18+2} = 1/\omega^2 = \omega$. 합 $\omega^2 + \omega = -1$.
