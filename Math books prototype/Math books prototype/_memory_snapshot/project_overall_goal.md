---
name: project-overall-goal
description: Math books 프로젝트 현재 목표 — *풍부하고 질 높은 데이터베이스 구축* + *완벽한 교재 제작 시스템 구축*. 마스터 명시 (2026-06-23).
metadata: 
  node_type: memory
  type: project
  originSessionId: 84f62611-cd83-45e8-8bb0-7c2ce445ceb9
---

# Math books 프로젝트 현재 목표

마스터 명시 (2026-06-23):
> "우리의 현재 목표는 풍부하고 질이 높은 데이터 베이스를 구축 완벽한 교재 제작 시스템을 구축하는 것임."

## 두 축

### 축 1 — 풍부하고 질 높은 *데이터베이스* 구축
- bank/problems (현 1,801문), bank/anchors (단원별 ★ 1~5 앵커), bank/4점-패턴-카탈로그 (세련도·통찰 카탈로그)
- 표본 풀: 시판 책 1등급+ + 학평·평가원·수능 (마더텅 최고난도 88문 [[project-refinement-catalog-status]])
- 통찰 라벨링: 8유형 × 깊이 1·2·3 메트릭 (S5 카탈로그 v2)
- *양뿐만 아니라 질*: 진정 변별·세련도 패턴·앵커 정합

### 축 2 — *완벽한 교재 제작 시스템* 구축
- 출제 워크플로우 (book.yaml → 7요소 명시 → problem-review 자동 검수)
- 5종 에이전트 의무 병렬 호출 (problem-review · solution-author · solution-review · exam-review · general-purpose)
- 카탈로그 4종 (03 통찰형 · 08 절차형 · 09 답지 · 10 시험지) 정식 효력
- schema v3.0 → v3.2 (insight_depth 흡수) → v4.0 (예정)
- 검수 3축 의무 (난이도 v3.0+v3.1 / 교과 용어 / 세련도)

## Why
S5 카탈로그 v2 진입 배경 ([[project-refinement-catalog-status]]) — 동화고 1회차 그룹 B *★ 5 슬롯 전체적으로 쉬움* 판정에서 격상. 시스템 검수가 통과해도 *진정 변별*이 보장되지 않음 → 시스템 자체의 *질* 강화 필요.

## How to apply
- 모든 작업 의사결정에서 두 축 (DB 풍부·질 + 시스템 완벽)에 부합하는지 점검
- *진행 어렵다·분량 크다*는 이유로 작업 미루지 말 것 ([[feedback-recommend-quality-only]])
- 카탈로그·표본·메트릭 강화 작업은 *시스템 완성도* 직접 기여 → 우선순위 높음
- 단발 출제·검수보다 *시스템 자체 강화 작업* (카탈로그 v2·메트릭 정의·앵커 확장 등) 우선 고려
- "비용 vs 질" 충돌 시 *질* 일관 선택 ([[feedback-recommend-quality-only]])
