---
id: SRC-AS-EQ-031
unit: CM1-EQ
type: T-OMEGA
M_scores:
  M_s: 3
  M_k: 3
  M_a: 3
  M_t: 2
M_total: 11
insights_used:
  - I-PD
  - I-EQV
  - I-CON
  - I-MI
insight_score: 4
insight_depth:
  - depth: 3
    type: I-PD
    rationale: ω³=1 + f(n)=ω²ⁿ/(ωⁿ+1) 분모 분리. ωⁿ 주기 (n=3k, 3k+1, 3k+2)별 f(n) 폐쇄식
  - depth: 3
    type: I-EQV
    rationale: 30 항을 3주기 10세트로 묶기. 각 세트 합 폐쇄
  - depth: 2
    type: I-CON
    rationale: Σ 자기참조 종결
  - depth: 2
    type: I-MI
    rationale: ω·ω²·1 케이스 별 분모 ωⁿ+1 = ω+1·ω²+1·2 분기
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
  - ω 시그마
  - 주기성
  - 분모 분리
  - 자기참조
  - 1의 세제곱근
  - ★ 5 최상위
sources:
  - 출처: 아샘 짱 내신 FINAL 공통수학1 기말고사 2회 22번
    출판: 아샘
    위치: 본책 p.016 (8점
    서술형): null
variant_policy: 원문 그대로
status: meta_only
created: 2026-06-29T00:00:00.000Z
frequency: 2
---

**문제**

방정식 $x^3 = 1$의 한 허근을 $\omega$라 할 때, 자연수 $n$에 대하여 함수 $f(n)$을 다음과 같이 정의한다.

$$f(n) = \dfrac{\omega^{2n}}{\omega^n + 1}$$

이때, $f(1) + f(2) + f(3) + \cdots + f(30)$의 값을 구하시오. [8점]

**답**: $-15$

**풀이 (요약)**: $\omega^3=1$이므로 $\omega^n$은 $n$ mod $3$로 주기. $n=3k$: $\omega^n=1$, $\omega^{2n}=1$, $f=1/(1+1)=1/2$. $n=3k+1$: $\omega^n=\omega$, $\omega^{2n}=\omega^2$, $f=\omega^2/(\omega+1)$. $n=3k+2$: $\omega^n=\omega^2$, $\omega^{2n}=\omega$, $f=\omega/(\omega^2+1)$.

$\omega^2+\omega+1=0$ → $\omega+1=-\omega^2$, $\omega^2+1=-\omega$. $f(3k+1)=\omega^2/(-\omega^2)=-1$. $f(3k+2)=\omega/(-\omega)=-1$.

세 주기 합 $= 1/2 + (-1) + (-1) = -3/2$. 30 = 3 × 10이므로 합 $= 10 \times (-3/2) = -15$.

**왜 ★ 5 strict**: 주기 분기 + 분모 분리 + 켤레 관계 활용 + Σ 폐쇄. depth 8.5.
