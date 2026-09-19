---
id: SRC-AS-MX-001
unit: CM1-MX
type: T04
M_scores:
  M_s: 3
  M_k: 2
  M_a: 3
  M_t: 3
M_total: 11
insights_used:
  - I-MI
  - I-RT
  - I-XU
insight_score: 3
insight_depth:
  - depth: 3
    type: I-XU
    rationale: 좌표평면 원과 직선 교점 개수 (CM2-GM)가 행렬 성분 정의 (CM1-MX)로 결합. 단원 외부와 본질적 결합.
  - depth: 2
    type: I-MI
    rationale: i+1 (i=1,2)에 따라 원의 반지름 변화. j (j=1,2)에 따라 직선 평행이동. 4 경우 분기.
  - depth: 2
    type: I-RT
    rationale: "행렬 (i,j) 성분"이라는 추상 정의를 좌표 교점이라는 시각화 표현으로 환원.
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
  - 행렬 성분 정의
  - 원과 직선 교점
  - 단원 결합
  - I-XU
  - 그래프 추론
anchors:
  - CM1-MX-앵커-★5-A01
  - CM1-MX-앵커-★5-A02
sources:
  - 출처: 아샘 짱 내신 FINAL 공통수학1 기말고사 6회 18번
    출판: 아샘
    위치: 본책 p.039 (4점)
variant_policy: 원문 그대로 (시판 출제 문항 — 시판 정점 표본)
status: meta_only
created: 2026-06-29T00:00:00.000Z
frequency: 1
---

**문제**

이차정사각행렬 $A$의 $(i, j)$ 성분을 좌표평면 위에서 $x^2 + y^2 = i + 1$의 그래프와 직선 $x - y = j$의 교점의 개수로 정의한다. 예를 들어 $x^2 + y^2 = 2$의 그래프와 직선 $x - y = 1$은 두 점에서 만나므로 행렬 $A$의 $(1, 1)$ 성분은 $2$이다. 이때 이차정사각행렬 $A$는?

① $\begin{pmatrix} 2 & 0 \\ 2 & 1 \end{pmatrix}$  ② $\begin{pmatrix} 2 & 2 \\ 1 & 2 \end{pmatrix}$  ③ $\begin{pmatrix} 2 & 1 \\ 2 & 2 \end{pmatrix}$  ④ $\begin{pmatrix} 2 & 1 \\ 0 & 2 \end{pmatrix}$  ⑤ $\begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$

**풀이 (요약)**

원 $x^2 + y^2 = r^2$ ($r = \sqrt{i+1}$)와 직선 $x - y = j$ 사이 거리 $d = |j|/\sqrt{2}$.

| $(i, j)$ | $r^2 = i+1$ | $d^2 = j^2/2$ | $d^2$ vs $r^2$ | 교점 수 |
|---|---|---|---|---|
| $(1, 1)$ | $2$ | $0.5$ | $d < r$ | $2$ |
| $(1, 2)$ | $2$ | $2$ | $d = r$ (접) | $1$ |
| $(2, 1)$ | $3$ | $0.5$ | $d < r$ | $2$ |
| $(2, 2)$ | $3$ | $2$ | $d < r$ | $2$ |

따라서 $A = \begin{pmatrix} 2 & 1 \\ 2 & 2 \end{pmatrix}$. **답 ③**.

**왜 ★ 5 strict인가**

- **I-XU (단원 결합)**: 좌표평면 원과 직선 교점 (CM2-GM 도형의 방정식 또는 CM1-EQ 이차·일차 연립) ↔ 행렬 성분 정의 (CM1-MX)의 본질적 결합. 단순 부수가 아니라 한 식이 다른 단원의 자연어로만 해석 가능.
- **I-MI (다중 해석)**: $j = 2$일 때 $r^2 = 2$ 경계 ($d = r$ 접)가 핵심 — 학생이 *접점*을 인식 못 하면 (1,2) 성분이 0이나 2로 오답.
- **I-RT (표현 전환)**: "행렬 (i,j) 성분"이라는 추상 정의를 학생이 시각화 후 다시 행렬로 복원하는 양방향 추론.
- **depth_score** = max(3) × 2 + avg(2.33) = **8.33 (≥ 8.5에 근접, max=3, count=3)** — strict 경계. v3.4 ★ 5 최상위 후보.

**본 프로젝트 시사**

본 시스템 미니모의 시리즈는 단원 결합 (I-XU) 슬롯이 회차당 0~1문에 그침. 본 슬롯은 CM2-GM (또는 CM1-EQ 연립)과 CM1-MX의 자연 결합 모범. 미니모의 8회차+ 출제 시 유사 슬롯 신설 가치.
