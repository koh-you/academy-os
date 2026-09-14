---
name: feedback-master-policy-registry
description: "bank/master-policy-registry.md (2026-07-13 세션 38 후반부 방안 D · 마스터 승인). 마스터 정책 등재 시스템. Handoff memory 회로 손실 방지. policy-star-5-only · policy-no-structure-repetition 등재. 6단계 등재 프로세스."
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 5d275468-0c52-47cd-9d92-60574f71646e
---

# master-policy-registry — 마스터 정책 등재 시스템 (방안 D)

**규칙**: 마스터 지시 정책 발견 시 즉시 `bank/master-policy-registry.md`에 등재. Handoff memory에만 남기지 않음.

**Why**: 세션 21 (2026-07-10) 마스터 지시 "★ 5로만 17문 전부"가 handoff memory에만 있었고 feedback memory·CLAUDE.md·자동 도구 어디에도 등재 안 됨 → 2회~4회 저자 모두 정책 손실 · 4회 시범에서 마스터 재지적. 근본 원인 = **정책 등재 시스템 부재**.

**How to apply**:
- 마스터가 정책 지시 시 (예: "~하기로 했다", "~는 금지", "~만 허용")
- 즉시 registry에 4요소 등재 (ID·원본 인용·적용 범위·강제 방식)
- 관련 feedback memory 신설
- 자동 도구 (validator·check) 강제 로직 추가
- CLAUDE.md·MEMORY.md 갱신

## 등재된 활성 정책

### policy-star-5-only (2026-07-10 세션 21)
- **원문**: "4점 이하 배점 문제 전부 배제 · ★ 5 급으로만 재출제 · 17문 전 슬롯 ★ 5"
- **범위**: 와부고 시리즈 (CM1·CM2 예상 시험지)
- **강제**: blueprint-score-validator v2.0 · first-draft-report v2.0

### policy-no-structure-repetition (2026-07-13 세션 38)
- **원문**: "16 17 유형은 박스 안에 정의를 주고 원에 대한 질문을 하는 동일 형태의 반복. 자기복제금지 실패"
- **범위**: 정점 문항 (composite ≥ 24)
- **강제**: structure-signature-check.mjs · first-draft-report v2.0 5축

## 6단계 등재 프로세스
1. 마스터 지시 감지 → handoff 기록
2. registry.md에 4요소 등재
3. feedback memory 신설
4. 자동 도구 강제 로직 추가
5. CLAUDE.md·MEMORY.md 갱신
6. 소급 검사 (기존 회차 위반 사례 문서화)

## 관련
- `bank/master-policy-registry.md` (v1.0, 2026-07-13)
- [[feedback_star_5_only]]
- [[feedback_structure_signature_check]]
- [[feedback_blueprint_score_validator]] v2.0
- [[feedback_first_draft_completeness_5axis]] v2.0
- 유실 사례: `bank/세션38-4회-시범-실패-분석.md`
