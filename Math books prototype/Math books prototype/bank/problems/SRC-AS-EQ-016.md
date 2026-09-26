---
id: SRC-AS-EQ-016
unit: CM1-EQ
type: T-QUARTIC
M_scores:
  M_s: 3
  M_k: 3
  M_a: 3
  M_t: 3
M_total: 12
insights_used:
  - I-PD
  - I-EQV
  - I-CON
insight_score: 3
insight_depth:
  - depth: 3
    type: I-PD
    rationale: 상수항 곱 같은 쌍 (x+1)(x-2)=x²-x-2와 (x+2)(x-4)=x²-2x-8을 묶어 치환 (t = x²-...)
  - depth: 3
    type: I-EQV
    rationale: 치환 후 t²-3xt-18x²=0 → (t+3x)(t-6x)=0 → 두 이차식 분해
  - depth: 2
    type: I-CON
    rationale: 양의 정수근 조건 추가 통합
X_familiarity: 0
base_star: 5
effective_star: 5
star_premium: true
depth_score: 8.67
target_audience: 상위권
audience_fit:
  - 상위권
audience_primary: 상위권
keywords:
  - 사차방정식
  - 곱 분해
  - 치환
  - 양의 정수근
  - ★ 5 최상위
sources:
  - 출처: 아샘 짱 내신 FINAL 공통수학1 기말고사 1회 22번
    출판: 아샘
    위치: 본책 p.010 (8점, 서술형)
variant_policy: 원문 그대로
status: meta_only
created: 2026-06-29T00:00:00.000Z
frequency: 2
---

**문제**

방정식 $(x+1)(x+2)(x-4)(x-2) = 18x^2$의 근 중에서 양의 정수인 근을 구하시오. [8점]

**답**: $x = 1$

**풀이**: 상수항 곱이 같은 쌍으로 묶기 $(x+1)(x-4) = x^2 - 3x - 4$, $(x+2)(x-2) = x^2 - 4$. 좌변 $= (x^2-3x-4)(x^2-4)$. $t = x^2 - 4$ 치환하면 $\{(x^2-3x-4)\}\{(x^2-4)\} = (t-3x)(t) = t^2 - 3xt$. $= 18x^2$이므로 $t^2 - 3xt - 18x^2 = 0$, $(t-6x)(t+3x) = 0$. (i) $t = 6x$: $x^2-4=6x$, $x^2-6x-4=0$, $x = 3 \pm \sqrt{13}$. (ii) $t = -3x$: $x^2-4 = -3x$, $x^2+3x-4 = 0$, $(x+4)(x-1)=0$, $x = -4$ 또는 $x = 1$. 양의 정수 $x = 1$.

**왜 ★ 5 최상위**: 상수항 곱 같은 쌍 분해 + 치환 + 인수분해 → 다층 패턴 발견. depth_score 8.67.
