---
id: SRC-AS-EQ-002
unit: CM1-EQ
type: T09
M_scores:
  M_s: 3
  M_k: 3
  M_a: 3
  M_t: 3
M_total: 12
insights_used:
  - I-RT
  - I-MI
  - I-CON
  - I-PD
insight_score: 4
insight_depth:
  - depth: 3
    type: I-MI
    rationale: |x| + |x-a| < a+2의 해 영역을 a 값별로 분기. a > 0 가정에서 |x| + |x-a|의 최솟값 = a (x in [0,a] 구간) → 항상 a+2 미만은 자동, 양 끝 확장 영역 정수 카운트.
  - depth: 3
    type: I-PD
    rationale: N(a) = 정수 개수. N(a) 자체가 a의 함수로 일정 패턴 (N(a) = a + 3 정도) 발견.
  - depth: 2
    type: I-CON
    rationale: a = 1, 2, ..., 8에 대해 N(a) 합산. 자기참조 시그마 종결.
  - depth: 2
    type: I-RT
    rationale: 절댓값의 합을 거리 합으로 시각화 → 영역 표현 전환.
X_familiarity: 0
base_star: 5
effective_star: 5
star_premium: true
depth_score: 8.5
target_audience: 상위권
audience_fit:
  - 상위권
audience_primary: 상위권
keywords:
  - 절댓값 부등식
  - 거리 합
  - 자기참조 시그마
  - N(a) 함수
  - 분기 카운팅
anchors:
  - CM1-EQ-앵커-★5-A01
sources:
  - 출처: 아샘 짱 내신 FINAL 공통수학1 기말고사 10회 18번
    출판: 아샘
    위치: 본책 p.063 (4점)
variant_policy: 원문 그대로 (시판 출제 문항)
status: meta_only
created: 2026-06-29T00:00:00.000Z
frequency: 1
---

**문제**

양수 $a$에 대하여 부등식 $|x| + |x-a| < a + 2$를 만족시키는 정수 $x$의 개수를 $N(a)$로 정의할 때, $N(1) + N(2) + N(3) + \cdots + N(8)$의 값은? [4점]

① $41$ ② $42$ ③ $43$ ④ $44$ ⑤ $45$

**풀이 (요약)**

$|x| + |x-a|$는 점 $x$에서 원점과 $a$까지 거리 합. $a > 0$이므로:

- $x \in [0, a]$: $|x| + |x-a| = a$ (최솟값)
- $x < 0$: $|x| + |x-a| = -2x + a$
- $x > a$: $|x| + |x-a| = 2x - a$

부등식 $|x| + |x-a| < a + 2$ 의 해:
- $0 \le x \le a$: 항상 성립 (정수 $0, 1, \ldots, a$ → $a + 1$개)
- $x < 0$: $-2x + a < a + 2$ → $x > -1$ → 정수 없음
- $x > a$: $2x - a < a + 2$ → $x < a + 1$ → 정수 없음

따라서 $N(a) = a + 1$.

$N(1) + N(2) + \cdots + N(8) = 2 + 3 + 4 + \cdots + 9 = \frac{(2+9) \times 8}{2} = 44$. **답 ④ $44$**.

**왜 ★ 5 strict인가**

- **I-MI (다중 해석)**: 절댓값 부등식을 *거리 합*으로 시각화. $a$ 값에 따라 해 영역이 $[0, a]$ 내부 + 외부 확장으로 분기.
- **I-PD (패턴 발견)**: $N(a) = a + 1$이라는 *일정 패턴*을 발견하면 시그마가 즉시 등차수열 합으로 환원. 학생이 패턴 발견 못 하면 $N(1), N(2), \ldots, N(8)$ 8회 직접 카운트.
- **I-CON (조건 통합)**: $N(a)$의 자기참조 시그마. $a$ 값별 정수 카운팅을 패턴화하는 통찰이 핵심.
- **I-RT (표현 전환)**: 절댓값 부등식 → 거리 합 → 영역 → 정수 카운팅.
- **depth_score** = max(3) × 2 + avg(2.5) = **8.5 (≥ 8.5 충족, max=3, count=4)** — **★ 5 strict 정점**.

**본 프로젝트 시사**

자기참조 시그마 + 절댓값 + 분기 패턴화의 결합. 본 시스템 미니모의 시리즈는 *자기참조* 슬롯이 부족 — 본 슬롯이 모범. 미니모의 8회차+에서 N(a)·M(k) 등 함수형 자기참조 도입 가치.
