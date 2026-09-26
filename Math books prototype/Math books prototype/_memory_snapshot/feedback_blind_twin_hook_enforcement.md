---
name: feedback-blind-twin-hook-enforcement
description: master-feedback-check post-hook가 Blind Twin 원칙(메타데이터 노출 금지)을 시스템 차원에서 자동 강제. CFES Phase A-2 실측에서 발견된 예상 밖 정합 이점.
metadata: 
  node_type: memory
  type: feedback
  established: 2026-07-28 (세션 98 · CFES Phase A-2 anchor 추출 실측)
  originSessionId: dc3ed34d-97a8-4d45-a9de-0b0148a7d874
---

Phase A-2 anchor 파일에 `% star_premium` · `% star_5` 같은 tier 라벨을 tex 주석에 넣었더니 post-hook master-feedback-check가 자동 RED 감지 · 5개 파일 모두 차단.

**Why**: 마스터 지적 `2026-07-01-학생자료-별점노출-금지` (RED · 키워드 4개)가 자동 grep 대상 → 파일 종류 무관 (tex 주석·발문 모두) 차단. Blind Twin 원칙(마스터 blind 판정 시 메타데이터 노출 금지)과 정확히 정합.

**How to apply**:
- CFES Phase A-2 이후 anchor·creation·pair 파일에 원본 소스·star·통찰 라벨을 tex 주석에도 넣지 않기
- 메타데이터는 별도 manifest.yaml에 분리 저장 (예: `bank/creation-archive/phase-a2/manifest.yaml`)
- yaml 파일은 hook 대상 아님 → 안전
- 이 시스템 결합은 예상 밖 이점 · 향후 CFES Phase B·C 모든 창작 파일에도 동일 원칙 적용

**관련**: [[feedback_source_based_authoring_v17]] · [[project_2026-07-28_creation_freedom_system_scenario]]
