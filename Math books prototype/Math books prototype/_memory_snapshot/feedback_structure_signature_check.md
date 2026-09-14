---
name: feedback-structure-signature-check
description: "scripts/structure-signature-check.mjs (2026-07-13 세션 38 후반부 방안 F). 문항 구조 시그니처 5축 (defBox·primary·subCount·layout·narrative) 자기복제 감지. 회차 간 ≥ 4축 · 회차 내 ≥ 3축 일치 시 RED. policy-no-structure-repetition 강제."
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 5d275468-0c52-47cd-9d92-60574f71646e
---

# structure-signature-check — 문항 구조 시그니처 자기복제 감지 (방안 F)

**규칙**: 신규 청사진 완성 후 `node scripts/structure-signature-check.mjs <신규.yaml> <prev1.yaml> ...` 실행. 정점 문항 (composite ≥ 24)의 구조 시그니처가 회차 간·내 반복 시 RED.

**Why**: 세션 38 4회 시범에서 마스터 지적 "16 17 유형은 박스 안에 정의를 주고 원에 대한 질문을 하는 동일 형태의 반복. 자기복제금지 실패". 기존 `signature-check`는 발문 어구만 · `cross-round-insight-check`는 통찰 코드만 대조. **문항 구조 시그니처는 어느 도구도 감지 못 함**. 2·3·4회 정점 문항 모두 [정의박스+원+3소분항+fillpage] 골조 반복.

**How to apply**:
- 5축 구조 시그니처 자동 산출:
  - S1: has_definition_box (bool)
  - S2: primary_object (원·직선·집합·명제·다각형)
  - S3: sub_questions (int)
  - S4: layout_hint (probpair·probpairfillpage 등)
  - S5: narrative_theme_category (실생활·수학내부·기타지문)
- 회차 내: 같은 회차 정점 문항 2개 이상이 3축 이상 일치 → 🔴 RED
- 회차 간: 이전 회차 정점 문항과 4축 이상 일치 → 🔴 RED

## 4회 시범 소급 감지 (2026-07-13)
- 회차 내: 4회 #16 vs #17 = 5/5 축 일치 (완전 자기복제)
- 회차 간: 4회 #16 vs 2회 #16 = 5/5 · 4회 #17 vs 3회 #17 = 5/5 · 총 8건 회차 간 위반
- 총 9건 자동 감지

## Gate 4.5 v3.12 편입
- 방안 D~G 도입 후 Gate 4.5 = 13 도구 (기존 12 + structure-signature)
- first-draft-report 5축 (세련도)에 편입

## 관련
- `scripts/structure-signature-check.mjs` (v1.0, 2026-07-13)
- Registry: `bank/master-policy-registry.md` §policy-no-structure-repetition
- [[feedback_master_policy_registry]]
- [[feedback_first_draft_completeness_5axis]] v2.0
- 유실 사례: `bank/세션38-4회-시범-실패-분석.md`
