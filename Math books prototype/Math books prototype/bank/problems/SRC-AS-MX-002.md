---
id: SRC-AS-MX-002
unit: CM1-MX
type: T08
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
insight_score: 3
insight_depth:
  - depth: 3
    type: I-PD
    rationale: 케일리해밀턴 정리에 의해 A^2 = tr(A)·A - det(A)·E = 0·A - (-4-5)·E = ... 패턴 발견. A^2 = 9E 도출이 핵심.
  - depth: 2
    type: I-EQV
    rationale: A^2 = 9E 식으로부터 A^35 = (A^2)^17 · A = 9^17 · A로 환원. 거듭제곱 → A의 스칼라배.
  - depth: 2
    type: I-CON
    rationale: A^35 = pA + qE에서 p, q 동시 결정 (q=0 자동, p=9^17).
X_familiarity: 0
base_star: 5
effective_star: 5
star_premium: true
depth_score: 8.33
target_audience: 상위권
audience_fit:
  - 상위권
audience_primary: 상위권
keywords:
  - 케일리해밀턴 정리
  - 행렬 거듭제곱
  - 폐쇄식
  - A^2 = kE
  - tr A = 0
anchors:
  - CM1-MX-앵커-★5-A01
sources:
  - 출처: 아샘 짱 내신 FINAL 공통수학1 기말고사 부록 4회 04번
    출판: 아샘
    위치: 부록 p.071 (4점)
variant_policy: 원문 그대로 (시판 출제 문항)
status: meta_only
created: 2026-06-29T00:00:00.000Z
frequency: 1
---

**문제**

행렬 $A = \begin{pmatrix} 2 & -1 \\ 5 & -2 \end{pmatrix}$에 대하여 $A^{35} = pA + qE$일 때, 상수 $p$, $q$에 대하여 $p + q$의 값은? (단, $E$는 단위행렬이다.)

① $-2$ ② $-1$ ③ $0$ ④ $1$ ⑤ $2$

**풀이 (요약)**

직접 계산: $A^2 = \begin{pmatrix} 2 & -1 \\ 5 & -2 \end{pmatrix}\begin{pmatrix} 2 & -1 \\ 5 & -2 \end{pmatrix} = \begin{pmatrix} -1 & 0 \\ 0 & -1 \end{pmatrix} = -E$.

또는 **케일리해밀턴 정리** 인용: $\mathrm{tr}\,A = 0$, $\det A = -4+5 = 1$이므로 $A^2 - 0 \cdot A + 1 \cdot E = O$, 즉 $A^2 = -E$.

따라서 $A^{35} = (A^2)^{17} \cdot A = (-E)^{17} \cdot A = -A$.

$A^{35} = -A = (-1) A + 0 \cdot E$이므로 $p = -1$, $q = 0$. **답 ② $-1$**.

**왜 ★ 5 strict인가**

- **I-PD (패턴 발견)**: $A^2 = -E$ (또는 $\pm E$·$\pm A$ 정점)라는 *주기성 정점*을 발견하면 거듭제곱이 즉시 환원. 직접 계산도 가능하지만 케해 인용이 자연.
- **I-EQV (동치 변환)**: $A^{35} = (A^2)^{17} \cdot A$의 동치 변환이 결정적. $A^2 = -E$ 발견 후 $-A$로 폐쇄.
- **I-CON (조건 통합)**: 폐쇄식 $pA + qE$의 $(p, q)$ 동시 결정. $q = 0$이 자동 (학생이 $q$ 계산 누락 함정).
- **depth_score** = max(3) × 2 + avg(2.33) = **8.33**. ★ 5 strict 경계.

**케해 인용 정당성** (`bank/CM1-교과과정.md` §3.1):
> 케일리해밀턴 정리는 답지·풀이에서 직접 인용 가능 (2026-06-24 마스터 확립). 시중 교재에 옵션 수준 도구로 수록되어 있어 학생이 *알고 있는* 도구로 인정.

**본 프로젝트 시사**

본 시스템 동화고 시리즈는 케해 형태 폐쇄식 ($A^2 = pA + qE$)을 발문에 *직접 제시*만 했고 (학생이 유도 X), 학생이 *케해를 직접 인용해 거듭제곱을 환원하는 슬롯*은 부재. 본 슬롯은 케해 인용 + 거듭제곱 주기성의 결합 모범. 미니모의 8회차+에서 도입 가치.
