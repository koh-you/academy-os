---
id: SRC-GJ-CB-150
unit: CM1-CB
type: C05
M_scores:
  M_s: 4
  M_k: 3
  M_a: 3
  M_t: 3
M_total: 13
insights_used:
  - I-CON
  - I-EQV
  - I-PD
  - I-MI
insight_score: 4
X_familiarity: 0.5
base_star: 5
effective_star: 5
depth_score: 7
target_audience: 상위권
audience_fit:
  - 상위권
audience_primary: 상위권
keywords:
  - 자연수 n
  - 2n-1C0+2n-1C1+…+2n-1Cn-1 = a
  - 1·2nC2n-1+2·2nC2n-2+…+2n·2nC0 = 2a·(다) 빈칸 (가)(나)(다) 항등식 증명
sources:
  - 출처: 고쟁이 공통수학1 2025
    출판: 이투스북
    위치: 본문 p.194
external_labels:
  - source: 고쟁이 공통수학1
    book_key: GJ
    item_number: '740'
    cohort_normalized_star: 5
variant_policy: 원문 그대로 (시판 책 정점 + 전수 격상)
status: meta_only
created: 2026-06-30T00:00:00.000Z
frequency: 3
---

**문제**

자연수 $n$에 대하여
$$
{}_{2n-1}\mathrm{C}_0 + {}_{2n-1}\mathrm{C}_1 + {}_{2n-1}\mathrm{C}_2 + \cdots + {}_{2n-1}\mathrm{C}_{n-1} = a
$$
일 때, 다음은 $1\times {}_{2n}\mathrm{C}_{2n-1} + 2\times {}_{2n}\mathrm{C}_{2n-2} + 3\times {}_{2n}\mathrm{C}_{2n-3} + \cdots + 2n\times {}_{2n}\mathrm{C}_0$을 $a$를 이용하여 간단히 나타내는 과정이다.

$0\leq k\leq n$인 정수 $k$에 대하여 ${}_n\mathrm{C}_k=$ $\boxed{(가)}$ 이고 $k\cdot {}_n\mathrm{C}_k=(\boxed{(나)})\cdot {}_{n-1}\mathrm{C}_{k-1}$이므로

$1\times {}_{2n}\mathrm{C}_{2n-1}+2\times {}_{2n}\mathrm{C}_{2n-2}+3\times {}_{2n}\mathrm{C}_{2n-3}+\cdots+2n\times {}_{2n}\mathrm{C}_0=2a\times(\boxed{(다)})$ 이다.

위의 과정에서 (가), (나), (다)에 알맞은 것은?

①&nbsp;${}_n\mathrm{C}_{n-k}$, $n$, $2n$ ②&nbsp;${}_n\mathrm{C}_{n-k}$, $n+1$, $2n+1$ ③&nbsp;${}_n\mathrm{C}_{n-k}$, $n$, $2n+2$ ④&nbsp;${}_n\mathrm{C}_{n-2k}$, $n+1$, $2n+1$ ⑤&nbsp;${}_n\mathrm{C}_{n-2k}$, $n$, $2n$

**답**: (해설지 참조 — 대칭성 ${}_n\mathrm{C}_k={}_n\mathrm{C}_{n-k}$ + $k\cdot {}_n\mathrm{C}_k=n\cdot {}_{n-1}\mathrm{C}_{k-1}$ 활용)
