---
id: EX-MT-012
unit: CM1-PL
type: EX-MT
type_in_source: $ax^3+b$를 $ax+b$로 나눈 몫 $Q_1$, 나머지 $R_1$. $ax^4+b$를 $ax+b$로 나눈 몫 $Q_2$, 나머지 $R_2$. $R_1 = R_2$가 되도록 $a, b$. $Q_1(2)+Q_2(1)$, $ab \neq 0$
status: meta_only
external_labels:
  - source: 마더텅 학평 [고1-1] 공통수학1
    cohort_type: hagpyung_top
    catalog_number: '206'
    source_detail: 마더텅 문제편 p63
    type_label: I-2-02 나머지정리 (1) → PL-T20
    insights_summary: CON(1)·EQV(1)·PD(1)
    insight_score: 3
    cohort_normalized_star: 4
    insights_depth:
      I-CON: 1
      I-EQV: 1
      I-PD: 1
patterns_1x: []
homebase_for_1x: []
frequency: 3
grade_origin: 고1
created: '2026-06-24'
---

*(status: meta_only — 마더텅 학평 ★★★★ 88문 정점. 본문/풀이 미등록 (정책). 통찰 라벨링·세련도 패턴 메타.)*

**발문 요지**: $ax^3+b$를 $ax+b$로 나눈 몫 $Q_1$, 나머지 $R_1$. $ax^4+b$를 $ax+b$로 나눈 몫 $Q_2$, 나머지 $R_2$. $R_1 = R_2$가 되도록 $a, b$. $Q_1(2)+Q_2(1)$, $ab \neq 0$

**변별 핵심**: $a \neq 0$이므로 $x = -b/a$ 대입 → $R_1 = a(-b/a)^3 + b = -b^3/a^2 + b$, $R_2 = a(-b/a)^4 + b = b^4/a^3 + b$. 등식 → $-b^3/a^2 = b^4/a^3$ → $a = -b$. 그 후 $Q$ 계산

**세련도 패턴**: 축 1 [조건 위장] *나머지 같음 → 분수식 등식*

**원 출처**: 마더텅 문제편 p63 / 카탈로그 #206 / 통찰: CON(1)·EQV(1)·PD(1)
