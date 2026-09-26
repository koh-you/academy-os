---
name: project-2026-07-28-creation-freedom-system-scenario
description: "세션 96 후반 마스터 지시 · 창작 자유도 확장 시스템 (Creation Freedom Expansion System · CFES) 시나리오 · 기획안 v1.1 마스터 확정 (Phase A 즉시 착수·CM2-GM-원 소단원·90% 정확도·60/75/90% 게이지·Opus+Sonnet 앙상블·프롬프트 diff 자동금지·CLI+파일 이중 kill switch)."
metadata: 
  node_type: memory
  type: project
  established: 2026-07-28 (세션 96 후반 · 마스터 지시)
  scope: 창작 자유도 확장 · 전 시리즈 (시험지·정리편·유형편·연습편·테스트지)
  related_docs: 
    - bank/창작-자유도-확장-시스템-기획안-v1.1.md (세션 96 후반 신설 · 마스터 확정본)
    - bank/feedback-loop-자동화-로드맵.md v1.1 (F6 = P2 · Phase A-1 진입점)
    - bank/Gate-5.0-명세.md v5.4
  originSessionId: dc3ed34d-97a8-4d45-a9de-0b0148a7d874
---

# 창작 자유도 확장 시스템 시나리오

## 마스터 지시 요지

세션 96 후반: "F6도 만들었을 때의 이점과 수학 문제 창작 자유도를 높이기 위한... 즉 현재 문제 제작 지침으로 만든 문제들보다 더 같거나 더 좋은 문제들을 창작하기 위한 능력이 향상되었을 때 자유도가 늘어나야 하기 때문에... 어떤 시스템을 구축해야 지금 내가 원하는 바가 실현될 수 있는지 알려줘."

**Why**: 현재 v1.7 방안 F "Agent 창작 금지" 원칙은 품질 보장 안전선이지 창작 능력 상한이 아님. 창작 능력이 실제로 향상되었을 때 자유도가 논리적 귀결로 확장되는 시스템이 필요.

**How to apply**: 창작 능력 측정 시스템 (Layer A · Blind Twin 판정) 구축 → 신뢰도 확보 후 셀 단위 점진 자유도 개방 (Layer B · Freedom Gauge) → 실패 시 회고 학습·안전 복귀 (Layer C·D). Phase A → B → C 순차 진행.

## 4-Layer 아키텍처 (요약)

| Layer | 역할 | 핵심 도구 |
|---|---|---|
| A · Blind Twin 판정 | 창작 vs 원본 3축 blind 평가 | `llm-pairwise-rank.mjs` (F6) · `blind-twin-evaluate.mjs` |
| B · Freedom Gauge | 소단원×통찰×★ 매트릭스별 rolling 성공률 → 자유도 unlock | `freedom-gauge.mjs` |
| C · Retrospective Learner | 실패 원인 자동 분류·프롬프트 강화 | `retrospective-learner.mjs` · `prompt-diff-suggest.mjs` |
| D · Safe Rollback | 3연속 실패 시 pick 모드 복귀 · 게이지 감쇠 | `creation-rollback-check.mjs` |

## Phase A/B/C Rollout

- **Phase A** (2~3 세션): 판정 시스템 신뢰도 확립 · 자유도 확대 없음
- **Phase B** (3~5 세션): 국소 자유도 개방 · 원본 pool 빈약 소단원부터
- **Phase C** (성숙기): 자율 창작 (게이지 ≥90% 셀만 · 마스터 확정) · 마스터 batch 승인

## 마스터 확정 결정 (2026-07-28 세션 96 후반 · 8건)

| # | 결정 사항 | 확정값 |
|---:|---|---|
| 1 | Phase A 착수 | ✅ 즉시 착수 (세션 97부터 F6) |
| 2 | Phase A-2 소단원 | ✅ CM2-GM-원 |
| 3 | 판정 정확도 임계값 | ✅ 90% (보수적) |
| 4 | 자유도 게이지 임계값 | ✅ 60 / 75 / 90% |
| 5 | 원인 카탈로그 | ✅ F1~F10 초안 그대로 |
| 6 | LLM 모델 | ✅ Opus + Sonnet 앙상블 |
| 7 | 프롬프트 diff | ✅ 자동 적용 금지 |
| 8 | Kill switch UI | ✅ CLI + 파일 기반 이중 |

**공통 철학**: 마스터 8건 결정 모두 보수적·정합. "측정 우선 · 검증 확실 · 자유도는 부산물".

## 핵심 원칙 3가지

1. **능력 측정 → 자유도 확장 매핑**: 측정 없이 확장 금지. 게이지 실측 후 논리적 확장.
2. **셀 단위 점진 개방**: 소단원×통찰×★ 매트릭스 각 셀별로 독립 게이지. 한 번에 전체 확대 금지.
3. **양방향 게이지**: 성공 시 상승 · 실패 시 즉시 하향. 마스터 kill switch 항상 유지.

## 실현 가능성 판단

**가능**: Layer A·B·D 구축 (6~8 세션 규모). Layer C 부분적 (원인 카탈로그 마스터 수동 유지 조건).

**어려운 지점**:
- LLM 자기평가 편향 (Claude가 Claude 창작을 판정) → 3축 앙상블로 완화 (자동+에이전트+LLM)
- "동등 이상" 정의의 모호성 → 마스터 판정 데이터셋 (100~200 pair) anchor 필요
- 완전 자유 불가 · Phase C도 마스터 batch 승인 유지

## 관련 메모리

- [[feedback_source_based_authoring_v17]] · 현행 방안 F 안전 원칙
- [[feedback_evolution_roadmap]] · Stage 1→2→3 β/α/γ/ε 진화 계획 (본 시스템 = Stage 3 ε 창조 검수)
- [[feedback_no_student_correct_rate]] · 5-Layer 앙상블 S5 (F6 편입점)
- [[feedback_problem_author_agent]] · 창작 자유도 확장 시 프롬프트 강화 대상

## 세션 97+ 착수 상세 순서 (마스터 확정)

**세션 97 (Phase A-1)**:
1. `scripts/llm-pairwise-rank.mjs` (F6) 신설 · Opus + Sonnet 앙상블 · 역방향 판정
2. `scripts/blind-twin-evaluate.mjs` 신설 · Layer A 3축 통합
3. `bank/blind-twin-master-anchor.md` 파일 스키마 정의
4. `bank/creation-freedom-lock.md` 파일 기반 kill switch 초기화

**세션 98~99 (Phase A-2 실측)**:
1. CM2-GM-원에서 anchor 원본 10개 선정 (star 4·5 각 5개)
2. Agent 임시 창작 모드로 pair 20개 생성 (원본 vs 창작 · Blind)
3. Blind Twin 판정 · Layer A 자동 결과 저장
4. 마스터 blind 판정 → `bank/blind-twin-master-anchor.md` append
5. 자동 vs 마스터 정확도 대조 · 리포트

**세션 100 이후 (판정)**:
- 정확도 ≥ 90% → Phase B 진입 (`freedom-gauge.mjs` 등 신설)
- 정확도 < 90% → 편향 완화 iteration (최대 3회) · 3회 미달 시 시스템 원상 유지 (v1.7 방안 F)
