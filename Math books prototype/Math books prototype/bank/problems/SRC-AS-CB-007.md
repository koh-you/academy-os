---
id: SRC-AS-CB-007
unit: CM1-CB
type: T-CARD
M_scores:
  M_s: 3
  M_k: 2
  M_a: 2
  M_t: 3
M_total: 10
insights_used: [I-CON, I-RT]
insight_score: 2
insight_depth:
  - depth: 3
    type: I-CON
    rationale: ㄴ·ㅏ 사이에 ㅗ 위치 + ㄴ·ㅗ·ㅏ 셋 모두 이웃 X 다중 조건 통합
  - depth: 2
    type: I-RT
    rationale: ㄴ·ㅏ·ㅗ 한 묶음으로 묶고 ㄴ-ㅗ-ㅏ 사이 위치 케이스 분류
X_familiarity: 0
base_star: 4
effective_star: 4
depth_score: 7.5
target_audience: 상위권
audience_fit: [중상위권, 상위권]
audience_primary: 중상위권
keywords: [같은 것 있는 순열, 다중 조건, 카드 배열]
sources:
  - 출처: 아샘 짱 내신 FINAL 공통수학1 기말고사 1회 18번
    출판: 아샘
    위치: 본책 p.009 (4점)
variant_policy: 원문 그대로
status: meta_only
created: 2026-06-29T00:00:00.000Z
frequency: 1
---

**문제**

$5$장의 카드 [나], [토], [아], [간], [디]를 일렬로 나열할 때, $3$장의 카드 [나], [토], [아]가 서로 반드시 이웃할 필요는 없지만 [나]와 [아] 카드 사이에 [토]가 반드시 오도록 나열하는 방법의 수는? [4점]

① $32$  ② $34$  ③ $36$  ④ $38$  ⑤ $40$

**답**: ⑤ $40$

**풀이 (해설지)**: (i) [나]와 [아] 사이에 [토]만: 3!×2! = 12. (ii) [나]와 [아] 사이에 [토] + 1장: 2×2!×2!×2 = 16. (iii) [나]와 [아] 사이에 [토] + 2장: 3!×2! = 12. 합 12+16+12 = 40.

다른 풀이: 5자리 중 2자리에 [간], [디]를 먼저 $_5\mathrm{P}_2 = 20$. 남은 3자리 중 가운데에 [토] 고정, 나머지 2자리에 [나]·[아] = 2! = 2. $20 \times 2 = 40$.
