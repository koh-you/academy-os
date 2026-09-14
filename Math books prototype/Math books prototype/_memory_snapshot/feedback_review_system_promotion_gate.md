---
name: feedback-review-system-promotion-gate
description: 검수 후 보고 시 발견 사항의 시스템 승격 여부를 반드시 마스터에게 승인 요청하는 절차 의무
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 197ed35b-922f-4c0c-9bff-359793c239c4
---

검수 (problem-review·solution-review·exam-review) 완료 후 보고할 때는, 발견된 개선점 중 **개별 파일 정정으로 끝날 것**과 **시스템 (정책 문서·자동 도구·에이전트 프롬프트·메모리)으로 승격 가능한 것**을 분리해서 제시하고, 승격 후보 각각에 대해 마스터 승인을 반드시 물을 것.

**Why:** 개별 파일 정정만 반복하면 같은 실수가 다음 회차에서 재발한다. 시스템 완성도 축적 (자동 도구 코드화·정책 문서·feedback 메모리·에이전트 프롬프트) 만이 프로젝트의 장기 목표. 마스터가 승인 절차를 명시적으로 요구한 이유 = 검수 발견을 자산으로 전환하는 게이트가 있어야 함. (세션 51, 2026-07-19)

**How to apply:** 
- 검수 결과 통합 보고 시 4개 층위 승격 후보 나열 의무: (1) 자동 도구 코드 (`scripts/*-check.mjs`) (2) 정책 문서 (`bank/*.md`·`CLAUDE.md`) (3) feedback 메모리 (`~/.claude/.../memory/`) (4) 에이전트 프롬프트 (`.claude/agents/*.md`)
- 각 후보에 대해 "승격/보류" 선택지를 AskUserQuestion으로 제시
- 승인된 항목은 파일 정정과 병행 또는 이후에 실행
- 관련: [[feedback_master_policy_registry]] · [[feedback_master_feedback_system]] · [[feedback_system_first_priority]]
