---
name: feedback_ssot_routing_gap
description: "규칙·도구가 실재해도 SSOT가 가리키지 않으면 미시행된다 — 지침 위반의 근본 원인은 대개 '누락된 배선'이지 에이전트 불성실이 아니다. 검수로 잡던 것을 훅으로 예방하고, SSOT 빈 칸을 정기 감사할 것."
metadata: 
  node_type: memory
  type: feedback
  established: 2026-07-30 (세션 104)
  originSessionId: b71f3d86-b53b-4482-a303-c1e597b0302f
  modified: 2026-07-29T15:27:10.923Z
---

**규칙 문서와 검증 도구가 전부 실재해도, SSOT(`bank/시리즈-조판-지침-매핑.md`)가 그것을 가리키지 않으면 시행되지 않는다.** 지침 미준수가 반복될 때 원인은 대개 **에이전트의 불성실이 아니라 배선 누락**이다.

**Why** — 세션 104 실제 사건:
- 와부고 재현-1회 답지의 TikZ 4블록 **전부**가 `scale` 규약을 위반했다 (`figure-effective-check` RED 12건).
- 조사 결과 규칙 5종(`feedback_wabuko_graph_standard`·`feedback_answer_graph_quality_v1` 등)과 도구 3종(`figure-effective-check.mjs`·`graph-position-audit.mjs`·`figure-check.mjs`)이 **모두 존재**했다.
- 그런데 SSOT 전문에 **"그래프·도해·figure·tikz" 문자열이 0건**이었다. §2 필수 정독에도, §4 검증 도구에도 그래프 축이 없었다.
- 에이전트 Phase 0이 "SSOT 정독"으로 시작하므로, **SSOT를 성실히 따를수록 그래프 축을 놓치는** 구조였다. 지시자(클로드)의 프롬프트도 같은 구멍을 그대로 복제했다.

마스터 지적: **"검수에서 잡아낼 일은 처음부터 예방할 수 있다. 한 번 수정으로 끝날 일이 아니다. 시스템의 완성도가 떨어진다는 증거다."**

**How to apply**:
1. **지침 위반을 발견하면 개별 수정으로 끝내지 마라.** 먼저 `grep`으로 **SSOT에 그 축이 존재하는지** 확인하라. 없으면 그것이 근본 원인이다.
2. **누락 축은 시리즈별로 흩어 넣지 말고 공통 절로 신설**하라 (§2b 그래프·도해 축이 그 예). 5곳에 중복 등재하면 다음에 또 한 곳이 빠진다.
3. **문서 등재만으로는 또 미시행된다** ([[feedback_document_only_rule_gap]]). `scripts/hooks/post-tool-check.mjs` 의 `CHECKERS` 배열에 검사기를 등록해 **훅에서 물리적으로 강제**하라. 조건부 실행(`when: 'onTikz'`)을 지원한다.
4. 🔴 **게이트의 오탐은 게이트를 죽인다.** 훅 추가 후 반드시 (a) 위반 파일에서 잡히는지 (b) 정상 파일에서 통과하는지 **양방향 검증**하라. 세션 104에 `graph-position-audit.mjs` 가 헤더 장식용 `[overlay,remember picture]` tikz를 오탐해 즉시 패치했다 — 오탐을 방치하면 경보 피로로 게이트 전체가 무시된다.
5. **정기 감사**: `scripts/ssot-completeness-audit.mjs` 로 `시리즈 × 축` 매트릭스의 빈 칸·죽은 링크·**SSOT에 등재되지 않은 고아 도구**를 검출하라. 이번 건은 매트릭스의 한 칸이 빈 것이고, **빈 칸을 세어본 적이 없다는 것이 진짜 문제**였다.

관련: [[feedback_document_only_rule_gap]] · [[feedback_system_first_priority]] · [[feedback_pre_task_policy_gate]] · [[feedback_figure_effective_rendering]]
