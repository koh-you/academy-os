---
name: feedback-star4-no-basic-level
description: ★ 4 슬롯에 base T-code의 *기본 변형* (분할 기본·같은 크기 두 조 등) 출제 금지. type_id·자유도 카드 카운트만으로는 변별 깊이 검출 부재. 9회차 v4.2
metadata: 
  node_type: memory
  type: feedback
  originSessionId: ab8127c4-bc19-4f0e-8aae-1083ca652b67
---

**규칙**: ★ 4 슬롯에 *base T-code의 기본형 변형* (예: 분할 기본 "8명을 4명·4명 두 조"·일렬 배열 기본·인수분해 표준)을 출제하면 학생 체감 ★ 1~2 수준. v3.3 G7 정량 검증(base ★ ≥ 4 + 자유도 카드 ≥ 1) 통과해도 *실제 발문의 변별 깊이*가 부족하면 RED.

**Why**: 마스터 명시 (2026-06-25, 9회차 v4.2 검수 5종 통과 후): "10번 문제 너무 수준 낮음. 분할 기본중에 가장 기본 문제. 교체 하고 지런 문제들은 출제 되지 않도록 시스템에 조치." v3.3 G7이 type_id 단위로만 검증하고 *발문의 실제 변별 깊이*를 검증 못함. v4.2 #10 = $\frac{1}{2!}\binom{8}{4}$ 단일 보정 = 마더텅 ★ 1~2 수준이었음.

**How to apply**:
- ★ 4 발문 작성 시 다음 *변별 신호* 중 ≥ 1 필수:
  - 조건 통합 (1개 분할 + 분배 + 고정 원소 등)
  - 정수 자유도 다중 분기
  - 자기참조·역방향 추적
  - 케이스 분리 ≥ 2
- 풀이 단계 *≤ 3*이고 보정 나눗셈 1회 이하면 WARN — 변별 부족
- 9회차 v4.4 #10 정정 예: "9권 + 세 학생 + 특정 책 $X$ 포함" — 조건 통합 + 분배 구별 + 고정 원소

**자동 차단** (예정):
- `scripts/star4-depth-check.mjs` 신규 — 풀이 단계 카운트 + 변별 신호 매칭
- `bank/v3.3-별4-보강정책.md` v1.2 sub-clause 추가

**마스터-지적 등록**: 8번째 — `bank/마스터-지적/2026-06-25-별4-기본수준-금지.md`

**관련 메모리**: [[feedback_star4_strengthening_v33]] · [[feedback_insight_axis_strengthening_v35]] · [[feedback_cayley_hamilton_main_solution_prohibited]]
