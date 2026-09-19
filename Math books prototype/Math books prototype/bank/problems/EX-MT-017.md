---
id: EX-MT-017
unit: CM1-PL
type: EX-MT
type_in_source: 자연수 $n^4+n^2-2$가 $(n-1)(n-2)$의 배수가 되도록 하는 자연수 $n$의 최댓값
status: meta_only
external_labels:
  - source: 마더텅 학평 [고1-1] 공통수학1
    cohort_type: hagpyung_top
    catalog_number: '211'
    source_detail: 마더텅 문제편 p65
    type_label: I-2-10 인수분해의 활용 → PL-T37
    insights_summary: EQV(1)·CON(1)·BW(1)
    insight_score: 3
    cohort_normalized_star: 4
    insights_depth:
      I-EQV: 1
      I-CON: 1
      I-BW: 1
patterns_1x: []
homebase_for_1x: []
frequency: 3
grade_origin: 고1
created: '2026-06-24'
---

*(status: meta_only — 마더텅 학평 ★★★★ 88문 정점. 본문/풀이 미등록 (정책). 통찰 라벨링·세련도 패턴 메타.)*

**발문 요지**: 자연수 $n^4+n^2-2$가 $(n-1)(n-2)$의 배수가 되도록 하는 자연수 $n$의 최댓값

**변별 핵심**: 인수분해 후 $(n^2+2)(n+1)$이 $(n-2)$의 배수. $n^2+2$ mod $(n-2)$ = $4+2 = 6$, $n+1$ mod $(n-2)$ = $3$ → $18 \equiv 0 \mod (n-2)$ → $n-2$가 18의 약수. 최대 $n-2 = 18$

**세련도 패턴**: 축 1 [조건 위장] *나눗셈 정리 + 인수분해* + 축 3 [다층] *배수 조건 + 인수분해*

**원 출처**: 마더텅 문제편 p65 / 카탈로그 #211 / 통찰: EQV(1)·CON(1)·BW(1)
