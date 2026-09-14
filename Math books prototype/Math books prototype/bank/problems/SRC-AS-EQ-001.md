---
id: SRC-AS-EQ-001
unit: CM1-EQ
type: T07
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
  - I-MI
insight_score: 4
insight_depth:
  - depth: 3
    type: I-PD
    rationale: x + y = -1, x² + y² = -1 → xy = 1 도출 후 x, y가 t² + t + 1 = 0의 두 근 (즉 1의 세제곱근 ω, ω̄). 패턴 발견.
  - depth: 3
    type: I-EQV
    rationale: x³² + y²⁰을 ω³² + ω̄²⁰ = ω² + ω̄² (mod 3)로 환원. ω 거듭제곱 주기 활용.
  - depth: 2
    type: I-CON
    rationale: 음수 x² + y² = -1 (허수 가능)이 핵심 단서. 실수 해 없음 인식 + 켤레 복소수 해 추정.
  - depth: 2
    type: I-MI
    rationale: 합·곱 양수 해석 → 1의 세제곱근 (실수 X) → 거듭제곱 주기.
X_familiarity: 0.5
base_star: 5
effective_star: 5
star_premium: true
depth_score: 8.5
target_audience: 상위권
audience_fit:
  - 상위권
audience_primary: 상위권
keywords:
  - 대칭식
  - 합과 곱
  - 1의 세제곱근
  - ω 주기성
  - 거듭제곱
  - 허수 해
anchors:
  - CM1-EQ-앵커-★5-A01
sources:
  - 출처: 아샘 짱 내신 FINAL 공통수학1 기말고사 9회 22번
    출판: 아샘
    위치: 본책 p.058 (8점, 서술형)
variant_policy: 원문 그대로 (시판 출제 문항)
status: meta_only
created: 2026-06-29T00:00:00.000Z
frequency: 3
---

**문제**

연립방정식 $\begin{cases} x + y = -1 \\ x^2 + y^2 = -1 \end{cases}$을 만족시키는 $x$, $y$에 대하여 $x^{32} + y^{20}$의 값을 구하시오. [8점]

**풀이 (요약)**

$x + y = -1$, $x^2 + y^2 = (x+y)^2 - 2xy = 1 - 2xy = -1$이므로 $xy = 1$.

따라서 $x$, $y$는 $t^2 + t + 1 = 0$의 두 근. 즉 $x$, $y$는 **1의 세제곱근** 중 허근 두 개 ($\omega$, $\bar\omega$).

$\omega^3 = 1$이므로 $x^{32} = x^{32 \bmod 3} = x^2$, $y^{20} = y^{20 \bmod 3} = y^2$.

$x^2 + y^2 = -1$ (조건에서 직접). **답 $-1$**.

**왜 ★ 5 strict인가**

- **I-PD (패턴 발견)**: $x + y = -1$, $xy = 1$ → $t^2 + t + 1 = 0$ → **1의 세제곱근**이라는 자연 분기를 발견하면 거듭제곱이 즉시 환원.
- **I-EQV (동치 변환)**: $x^{32} = x^{32 \bmod 3}$ 동치 변환. 큰 거듭제곱을 작은 차수로 폐쇄.
- **I-CON (조건 통합)**: $x^2 + y^2 = -1$ 조건의 *역방향 활용* — 마지막에 동일 식이 답을 직접 줌 (자기참조 종결).
- **I-MI (다중 해석)**: 실수 해 없음 인식 → 허수 해 자연 도입.
- **depth_score** = max(3) × 2 + avg(2.5) = **8.5 (≥ 8.5 충족, max=3, count=4)** — **★ 5 strict 정점**.

**본 프로젝트 시사**

대칭식 + 1의 세제곱근 + 거듭제곱 주기성의 4중 결합. 본 시스템 미니모의 7회차의 ω 슬롯 (★ 4)보다 한 단계 위 정점. 미니모의 8회차+에서 모범 슬롯.
