---
name: meta-type-separation
description: T-code 분리만으로 부족. 학생 체감 단위인 *메타 유형* 도입. 같은 메타 슬롯 ≤ 2개/시험지
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 892d3f16-b87f-4f48-9769-d54f8b763a38
---

각 단원의 T-code 위에 *학생 체감 단위*인 **메타 유형(Meta-Type)** 도입. 시험지 1회차에 같은 메타 유형 슬롯 ≤ 2개 의무.

**Why**: 마스터 명시 2026-06-25 (7회차 v3 검수 후). v3.0이 #22 (MX-T11 자기참조 폐쇄식) + #23 (MX-T06 거듭제곱 주기)를 *다른 T-code*로 분리했으나 *학생 체감*으로는 둘 다 "행렬 거듭제곱 규칙성"으로 동일. v3.0 G3가 T-code 다양성만 점검 → 통과 / 실효성 X.

**How to apply**:
- 각 카탈로그(`bank/유형카탈로그/CM1-{단원}.md`)에 `meta_type` 필드 추가
- 청사진 작성 시 메타 유형도 명시
- `scripts/blueprint-validate.mjs`에 메타 유형 충돌 검증 추가
- 같은 메타 유형 슬롯 > 2 → G3 RED 차단

**메타 유형 예시**:
- MX: basics·power-regularity·noncomm·identity·application·proposition·degree-of-freedom
- CB: combine·graph·enumeration·arrange·selection·mixed·geometry·partition
- EQ: cubic-quartic-factor·multiplicity·conjugate-root·omega·integer-root·system·quad-ineq-basic·quad-ineq-param·abs-ineq·frac-ineq·all-real-ineq

**단일 출처**: [[master-feedback-system]] · `bank/마스터-지적/2026-06-25-메타유형-분리부족.md`
**관련**: [[feedback_master_feedback_system]]
