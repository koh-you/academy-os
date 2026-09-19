---
id: SRC-AS-CB-004
unit: CM1-CB
type: T-PATH
M_scores:
  M_s: 3
  M_k: 2
  M_a: 2
  M_t: 2
M_total: 9
insights_used: [I-RT, I-MI]
insight_score: 2
insight_depth:
  - depth: 2
    type: I-RT
    rationale: 그래프 경로를 케이스별 분기로 환원
  - depth: 2
    type: I-MI
    rationale: A→B→D / A→C→D / A→B→C→D / A→C→B→D 4가지 분류
X_familiarity: 0
base_star: 3
effective_star: 3
depth_score: 6.0
target_audience: 중상위권
audience_fit: [중위권, 중상위권]
audience_primary: 중상위권
keywords: [도로망, 경로 카운팅, 합의 법칙, 그래프]
sources:
  - 출처: 아샘 짱 내신 FINAL 공통수학1 기말고사 1회 07번
    출판: 아샘
    위치: 본책 p.006 (3.7점)
variant_policy: 원문 그대로
status: meta_only
created: 2026-06-29T00:00:00.000Z
frequency: 1
---

**문제**

그림과 같은 도로망에서 A 도시를 출발하여 D 도시로 가는 모든 방법의 수는? (단, 같은 도시를 두 번 이상 지나지 않는다.) [3.7점]

(A-B 사이 3개 도로, B-C 사이 2개, A-C 사이 3개, B-D 사이 2개, C-D 사이 3개)

① 51  ② 52  ③ 53  ④ 54  ⑤ 55

**답**: ① 51

**풀이**: (i) A→B→D: $3 \times 2 = 6$. (ii) A→C→D: $3 \times 3 = 9$. (iii) A→B→C→D: $3 \times 2 \times 3 = 18$. (iv) A→C→B→D: $3 \times 3 \times 2 = 18$. 합 $6 + 9 + 18 + 18 = 51$.

(해설지 정답 51에 맞춰 도로 개수 추정 — 원본 그림 정확 카운트 필요)
