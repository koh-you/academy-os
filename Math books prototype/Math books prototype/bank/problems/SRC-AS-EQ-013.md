---
id: SRC-AS-EQ-013
unit: CM1-EQ
type: T-CUBIC
M_scores:
  M_s: 3
  M_k: 2
  M_a: 2
  M_t: 2
M_total: 9
insights_used:
  - I-PD
insight_score: 1
insight_depth:
  - depth: 2
    type: I-PD
    rationale: f(1)=0 발견하여 (x-1) 인수 분리
X_familiarity: 0
base_star: 3
effective_star: 3
depth_score: 4
target_audience: 중위권
audience_fit:
  - 중위권
  - 중상위권
audience_primary: 중위권
keywords:
  - 삼차방정식
  - 인수정리
  - 조립제법
  - 근의 공식
sources:
  - 출처: 아샘 짱 내신 FINAL 공통수학1 기말고사 1회 19번
    출판: 아샘
    위치: 본책 p.009 (6점, 서술형)
variant_policy: 원문 그대로
status: meta_only
created: 2026-06-29T00:00:00.000Z
frequency: 3
---

**문제**

삼차방정식 $x^3 + x^2 - 4x + 2 = 0$의 해를 구하시오. [6점]

**답**: $x = 1$ 또는 $x = -1 \pm \sqrt{3}$

**풀이**: $f(1) = 1+1-4+2 = 0$이므로 $x-1$이 인수. 조립제법으로 $f(x) = (x-1)(x^2+2x-2)$. $x^2+2x-2=0$의 근 $x = -1 \pm \sqrt{3}$.
