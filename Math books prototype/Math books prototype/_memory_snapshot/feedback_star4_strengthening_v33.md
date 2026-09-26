---
name: feedback-star4-strengthening-v33
description: ★ 4 슬롯 난도 상향 구조적 보강 정책 v3.3 (9회차+ RED 의무). 카탈로그 base ★ ≥ 4 의무 + 자유도/분기 카드 ≥ 1개 + seed_id RED 격상 + depth_score ≥ 6.
metadata: 
  node_type: memory
  type: feedback
  originSessionId: a470684d-eec5-49a7-a6bf-345591d9793a
---

★ 4 슬롯도 *진정한 변별*을 의미하도록 구조적 강화. 시판 카탈로그 base ★ 3 T-code에 라벨 ★ 4를 매기는 *1단 드리프트 관행*을 원천 차단.

**Why**: 마스터 명시 (2026-06-25, 검수 5종 결과 직후): "변별력 문항 왜 별4개짜리도 난도를 조금 더 올릴 구조적 방안을 강구할 것." 8회차 검수에서 ★ 4 17문 중 8문이 STAR-DRIFT-1 YELLOW (base ★ 3 → 라벨 ★ 4), 평균 depth_score ~5.0 (★ 5는 5.5~8.4).

**How to apply** (9회차+ 의무):
- **카탈로그 base ★ ≥ 4 T-code만 사용** (★ 4 라벨). base ★ 3 T-code 사용 → RED
- **자유도/분기 카드 ≥ 1개 의무**: `INSIGHT:CON-조건통합`·`MI-다중해석`·`PD-패턴발견`·`BW-역방향` 중 ≥ 1개. 단순 `RT·EQV`만 → RED
- **depth_score ≥ 6.0 + max ≥ 2 + insight_count ≥ 3** 의무
- **seed_id RED 격상**: ★ 4 슬롯도 premium 표본 (★ 4·5 모두 OK) seed_id 명시 의무
- **refinement_score ≥ 1** 의무

**자동 차단**:
- `scripts/blueprint-validate.mjs` G7 (구현 완료) — `round ≥ 9`이면 RED, 8회차까지는 YELLOW
- `scripts/seed-fetch.mjs` (premium 표본 셀렉 — ★ 4 슬롯 활용)
- `scripts/calibrate-base-stars.mjs` (시판 vs 평가원 base ★ 진단)

**8회차 시범 적용 (재출제 슬롯)**:
- #7 (객관식 ★ 4): T08 교란순열 → E10 정수근 자유도 (분할 카운트 + Vieta 결정성)
- #16 (단답 ★ 4): I03 매개변수 부등식 → E05 삼차 중근 (항등식 영점 + 판별식 분기 + 진위 검증)
- #17 (단답 ★ 4): T12 비이웃 → E08 켤레허근 (자연수 분할 + 인수분해)

세 슬롯 모두 *자유도 + 분기 + 결정성* 결합으로 ★ 4 본질 미달 회피.

**카탈로그 화이트리스트 (★ 4 슬롯 사용 가능 T-code)**:
- CM1-EQ: E04·E05·E06·E07·E08·E09·E10·E11·E13·I03·I05·I07·I08·I09·I10·I11·I12
- CM1-CB: T05·T06·T08·T12·T15·T21·T22·T23
- CM1-MX: T05·T06·T07·T09·T11·T12·T13·T14

**단일 출처**: [[bank/v3.3-별4-보강정책.md]] · [[bank/유형카탈로그/CM1-{EQ,CB,MX}.md]] (base ★ 단일 출처)

**관련**: [[feedback_master_feedback_system]] · [[feedback_no_self_replication]] · [[feedback_insight_axis_strengthening_v35]]
