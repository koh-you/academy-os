---
name: feedback-gate-5-0-series-agnostic
description: Gate 5.0 시리즈 무관 자동 검증 게이트 (2026-07-19 세션 49). Gate 4.5 v3.11 시험지 종속 → 시리즈 무관 재편.
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 017a53e2-af94-4602-937b-dcb04e6ae5d5
---

**영구 정책 · 모든 시리즈 자동 검증 강제**

## 원칙

모든 교재 출제 (시험지·정리편·유형편·연습편·테스트지)는 **Gate 5.0 필수 14 도구 + 시리즈 확장 3~5**를 통과해야 한다.

**Why**: Gate 4.5 v3.11이 시험지 청사진 종속 (총점·layout·자기복제 등). 정리편·유형편에서는 `master-feedback`·`cm1-curriculum` 2개만 실행 → 시스템 방어망 격차. 세션 49 정리편 실패 원인 중 하나.

**Gate 5.0 필수 14** (모든 시리즈 무관):
1. blueprint-validate · 2. blueprint-score-validator · 3. source-filter --verify · 4. copyright-similarity-check
5. master-feedback-check · 6. cm1-curriculum-check (CM2 예외) · 7. standard-check
8. overfull-check · 9. choices-width-check · 10. figure-need-compliance · 11. figure-answer-leakage-check
12. figure-tikz-label-check · 13. insight-depth-check · 14. structure-signature-check

**시리즈 확장**:
- 시험지: GX1 total-score · GX2 exam-layout-analyzer · GX3 cross-round-insight (17 총합)
- 정리편·유형편·연습편: GJ1 cplabel-style-check (15 총합)
- 테스트지: GT1 total-score · GT2 star-consistency (16 총합)

**How to apply**:
- 청사진.yaml 저장 직후 G1·G2·G3 실행 · RED 0 후 agent 호출
- 조판 완료 후 G4~G14 + 시리즈 확장 · RED 0 도달까지 재작업
- Post-tool hook: master-feedback-check 자동 (기존 유지)
- 검수 4종 agent (L5)에 진입은 Gate 5.0 GREEN 후에만
- 14 도구 중 일부 skip은 시스템 실패 (도형 없으면 도형 관련 skip은 OK)

## 관련 단일 출처

- **명세**: `bank/Gate-5.0-명세.md`
- **청사진 스키마**: `bank/청사진-스키마-v6.1.md`
- CLAUDE.md §"🌟 통합 문제출제 시스템 v1.0"

## 관련 정책

- [[feedback_universal_publishing_framework_v1]] — 통합 시스템
- [[feedback_gate45_v39_figure_axes]] — Gate 4.5 v3.9 (전 버전)
