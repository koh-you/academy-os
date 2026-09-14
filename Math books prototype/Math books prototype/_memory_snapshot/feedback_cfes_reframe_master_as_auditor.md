---
name: feedback_cfes_reframe_master_as_auditor
description: CFES v1.2 재프레임 — 마스터는 정상 pair 판별자가 아니라 결함 사냥꾼(심층 감사관) · 신뢰도는 정답 일치율이 아니라 결함 판별력으로 측정.
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 0a2df67f-fb5b-482e-bf2e-37211937f8b5
  modified: 2026-07-28T19:57:48.567Z
---

CFES(창작 자유도 확장 시스템) v1.2 근본 재설계의 핵심 원칙 (세션 101 마스터 확정).

**원칙**: 마스터가 *좋은* 창작과 *좋은* 원본을 blind로 구별 못 하는 것은 시스템 실패가 아니라, 그 소단원에서 창작이 **원본급으로 수렴한 PASS 신호**다. 따라서 마스터 역할을 "정상 pair 판별자"에서 **"결함 사냥꾼(심층 감사관)"** 으로 재배치하고, 시스템 신뢰도를 "얼마나 정답을 맞히나(vs 마스터 일치율)"가 아니라 **"얼마나 나쁜 걸 잡아내나(결함 판별력)"** 로 측정한다.

**Why**: 세션 100 실측 — 마스터가 5 pair 전부 "다 똑같아 보인다" 판정 → "자동 vs 마스터 90% 일치" 골드 스탠다드 붕괴. 그러나 세션 99에서 마스터·Opus·reverse-check는 정상 pair는 못 구별해도 BT-002(대칭중심 case 2개·답 비유일)·BT-003(답 청결도)은 잡았음. 즉 "정상 vs 정상" 구별은 실패해도 "정상 vs 결함" 구별은 성공 → 판별력이 신뢰의 새 축.

**How to apply**:
- 마스터 판정을 "우열 심판"으로 요구하지 말 것. 대신 창작을 직접 풀어 well-defined(답 유일·case 중복)·답 청결도·교육적 가치·자연스러움 4관점 심층 감사(세션당 3~5건).
- 신뢰도 측정 = 결함 삽입 판별 테스트 (정상군은 통과·결함군은 차단 · 판별력 ≥90% & 오판율 ≤10%).
- Phase A 완결 = 3중 AND (C 판별력 + A 마스터 감사 무결 + B 자동 3축 안정).
- 관련: [[feedback_blind_twin_master_indistinguishability]] · [[project_2026-07-29_session101_handoff]] · `bank/창작-자유도-확장-시스템-기획안-v1.2.md`
