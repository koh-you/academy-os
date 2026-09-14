---
id: EX-MT-019
unit: CM1-PL
type: EX-MT
type_in_source: 모든 실수 $x$에 대해 $f(x)$. (가) $f(x)<0$, (나) $\{f(x+1)\}^2 - 9 = (x-1)(x+1)(x^2+5)$. $f(x+a)$를 $x-2$로 나눈 나머지 $= -6$인 모든 $a$의 곱
status: meta_only
external_labels:
  - source: 마더텅 학평 [고1-1] 공통수학1
    cohort_type: hagpyung_top
    catalog_number: '213'
    source_detail: 마더텅 문제편 p66
    type_label: I-2-02·05 나머지정리 → PL-T20·T22
    insights_summary: CON(2)·MI(1)·EQV(1)·BW(1)
    insight_score: 5
    cohort_normalized_star: 4
    insights_depth:
      I-CON: 2
      I-MI: 1
      I-EQV: 1
      I-BW: 1
patterns_1x: []
homebase_for_1x: []
frequency: 3
grade_origin: 고1
created: '2026-06-24'
---

*(status: meta_only — 마더텅 학평 ★★★★ 88문 정점. 본문/풀이 미등록 (정책). 통찰 라벨링·세련도 패턴 메타.)*

**발문 요지**: 모든 실수 $x$에 대해 $f(x)$. (가) $f(x)<0$, (나) $\{f(x+1)\}^2 - 9 = (x-1)(x+1)(x^2+5)$. $f(x+a)$를 $x-2$로 나눈 나머지 $= -6$인 모든 $a$의 곱

**변별 핵심**: 좌변 = $\{f(x+1)-3\}\{f(x+1)+3\}$. 우변 인수분해 → $(x-1)(x+1)$이 차이 2짜리. $f(x+1)-3$과 $f(x+1)+3$이 각각 $(x-1)$ 등으로 인수분해. $f$ 음수 조건으로 모양 좁힘

**세련도 패턴**: 축 1 [조건 위장] *제곱 차 = 합·차 곱* + 축 4 [함정] *부호 분기 누락 위험*

**원 출처**: 마더텅 문제편 p66 / 카탈로그 #213 / 통찰: CON(2)·MI(1)·EQV(1)·BW(1)
