---
id: SRC-AS-EQ-017
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
insight_score: 2
insight_depth:
  - depth: 3
    type: I-CON
    rationale: 0≤x≤4 제한 범위에서 항상 성립 = (i) m<0 최솟값 f(0)>0 / (ii) 0≤m≤4 꼭짓점 f(m)>0 / (iii) m>4 최솟값 f(4)>0 세 분기 통합
  - depth: 3
    type: I-MI
    rationale: 꼭짓점 좌표 m의 제한 범위 내·외 분기 (다중 케이스)
X_familiarity: 0
base_star: 4
effective_star: 4
depth_score: 8
target_audience: 상위권
audience_fit:
  - 중상위권
  - 상위권
audience_primary: 상위권
keywords:
  - 제한 범위 부등식
  - 꼭짓점 분기
  - 매개변수
  - 모든 x에서 성립
sources:
  - 출처: 아샘 짱 내신 FINAL 공통수학1 기말고사 1회 23번
    출판: 아샘
    위치: 본책 p.010 (8점, 서술형)
variant_policy: 원문 그대로
status: meta_only
created: 2026-06-29T00:00:00.000Z
frequency: 3
---

**문제**

$0 \le x \le 4$에서 이차부등식 $x^2 - 2mx + 2m + 3 > 0$이 항상 성립하도록 하는 정수 $m$의 개수를 구하시오. [8점]

**답**: $4$ ($m = -1, 0, 1, 2$)

**풀이**: $f(x) = (x-m)^2 - m^2 + 2m + 3$. 꼭짓점 $(m, -m^2+2m+3)$. 제한 범위 $0 \le x \le 4$ 내 최솟값 분기. (i) $m < 0$: $f(0) = 2m+3 > 0$, $m > -3/2$. $-3/2 < m < 0$. (ii) $0 \le m \le 4$: 꼭짓점 값 $-m^2+2m+3 > 0$, $(m+1)(m-3)<0$, $-1 < m < 3$. 따라서 $0 \le m < 3$. (iii) $m > 4$: $f(4) = 16-8m+2m+3 = 19-6m > 0$, $m < 19/6 < 4$. 해 없음. 종합 $-3/2 < m < 3$. 정수 $m = -1, 0, 1, 2$, 개수 $4$.
