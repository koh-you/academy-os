---
id: SRC-AS-EQ-029
unit: CM1-EQ
type: T-QUARTIC
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
    rationale: 1-i 근이면 켤레 1+i도 근. 곱 (x-1)²+1=x²-2x+2 인수
  - depth: 2
    type: I-PD
    rationale: a, b 결정 후 a²+b² 계산
X_familiarity: 0
base_star: 3
effective_star: 3
depth_score: 4
target_audience: 중상위권
audience_fit:
  - 중상위권
audience_primary: 중상위권
keywords:
  - 켤레허근
  - 사차방정식
  - 인수분해
sources:
  - 출처: 아샘 짱 내신 FINAL 공통수학1 기말고사 2회 19번
    출판: 아샘
    위치: 본책 p.015 (6점
    서술형): null
variant_policy: 원문 그대로
status: meta_only
created: 2026-06-29T00:00:00.000Z
frequency: 2
---

**문제**

사차방정식 $x^4 + ax^2 + b = 0$의 한 근이 $1-i$일 때, $a^2 + b^2$의 값을 구하시오. (단, $a$, $b$는 실수이다.) [6점]

**답**: $16$

**풀이**: 켤레 $1+i$도 근. $(x-(1-i))(x-(1+i)) = x^2-2x+2$. 사차식은 짝수차만 → 다른 두 근 $-(1-i), -(1+i) = -1+i, -1-i$. $(x-(-1+i))(x-(-1-i)) = x^2+2x+2$. 곱: $(x^2-2x+2)(x^2+2x+2) = (x^2+2)^2 - (2x)^2 = x^4+4x^2+4-4x^2 = x^4+4$. 따라서 $a=0, b=4$. $a^2+b^2=16$.
