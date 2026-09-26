---
name: feedback-concept-author-agent
description: concept-author agent v1.0 · 정리편·유형편·연습편 콘텐츠 전담 (2026-07-19 세션 49 통합 프레임워크 Phase B2 신설).
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 017a53e2-af94-4602-937b-dcb04e6ae5d5
---

**영구 정책 · 신규 시리즈 착수 시 최우선 호출**

## 원칙

정리편·유형편·연습편 신규 시리즈·회차·단원 착수 시 **concept-author agent 최우선 호출**. Claude 직접 tex 작성·자체 문항 창작 금지.

**Why**: 세션 49 정리편 CM2-GM-01 실패 계기. Claude가 시험지 시스템(problem-author·정독 파일·Gate 4.5)을 활용하지 않고 정리편을 별개 프로세스로 진행 → star 4~5급 요구 미달. 통합 시스템 v1.0에서 시험지=problem-author v2.0, 정리편·유형편·연습편=concept-author v1.0으로 스코프 분리.

**How to apply**:
- 시리즈 시작 시 청사진 v6.1 (`series_type: jeongribyeon | yuhyeongpyeon | yeonseubpyeon`) 작성 후 concept-author 호출
- 각 slot에 `source_id` 명시 (개념원리·RPM·고쟁이 STEP1·블랙라벨 STEP1 정독 파일에서 pick)
- 최소 변형 (숫자 or 동등) · copyright-similarity 0.30~0.85 · 원본 tier 그대로 사용
- 개념 슬롯은 예외: 원본 pick 아님 · 2022 개정 교과과정 표준 정의로 직접 서술
- 자체 창작·star 자체 판정 금지

**tier**: star 3·4 위주 (정리편 · Level 1·2·3). star 5·premium은 소수 실전·정점 슬롯만.

## 관련 단일 출처

- Agent 정의: `.claude/agents/concept-author.md`
- 청사진 스키마: `bank/청사진-스키마-v6.1.md`
- tier 매핑: `bank/mechanism-데이터-정독-tier-매핑.md`

## 관련 정책

- [[feedback_universal_publishing_framework_v1]] — 통합 시스템 v1.0
- [[feedback_source_based_authoring_v17]] — 방안 F 원본 기반 (problem-author 계승)
- [[feedback_problem_author_agent]] — 시험지 전용 agent (스코프 대칭)
