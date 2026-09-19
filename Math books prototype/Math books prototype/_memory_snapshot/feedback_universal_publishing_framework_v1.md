---
name: feedback-universal-publishing-framework-v1
description: "통합 문제출제 시스템 v1.0 (2026-07-19 세션 49 마스터 확립). 모든 교재 시리즈 (시험지·정리편·유형편·연습편·테스트지)는 이 프레임워크 통과. 시리즈 = 변수, 시스템 = 상수."
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 017a53e2-af94-4602-937b-dcb04e6ae5d5
---

**영구 정책 · 최우선 시스템 원칙**

## 원칙

모든 교재 제작은 **통합 문제출제 시스템 v1.0** 프레임워크를 통과해서 만들어야 한다. 시리즈별 별개 프로세스는 없다.

**Why**: 세션 49 마스터 지적 (정리편 CM2-GM-01 재출제 요구 계기). 지금까지 구축한 problem-author·mechanism-은행·blueprint-score-validator·Gate 4.5 14 도구 등은 시험지 전용이 아니라 **모든 교재의 근간 시스템**. 시험지에만 활용하고 정리편·유형편에는 별개 프로세스로 진행하는 것은 학습 실패.

**How to apply**:
- 신규 시리즈 착수 시 반드시 6-Layer 프레임워크 따름
  - L1 Source Bank → L2 Blueprint → L3 Content Author → L4 Gate 5.0 → L5 Review → L6 Asset
- 시리즈별 진입점 (청사진 series_type 필드):
  - `exam` → problem-author v2.0
  - `jeongribyeon | yuhyeongpyeon | yeonseubpyeon` → concept-author v1.0
  - `testpaper` → problem-author v2.0 + 테스트지 확장
- 어느 시리즈든 청사진 v6.1 스키마·Gate 5.0 필수 14 도구 통과 의무
- 예외 없음: "이건 정리편이라 시험지 시스템과 다르다" 같은 별개 취급 절대 금지

## 관련 단일 출처

- **청사진 스키마 v6.1**: `bank/청사진-스키마-v6.1.md`
- **Gate 5.0 명세**: `bank/Gate-5.0-명세.md`
- **정독 tier 매핑 v3.0**: `bank/mechanism-데이터-정독-tier-매핑.md`
- **에이전트**: `.claude/agents/problem-author.md` v2.0 · `.claude/agents/concept-author.md` v1.0
- CLAUDE.md §"🌟 통합 문제출제 시스템 v1.0"

## 관련 정책

- [[feedback_concept_author_agent]] — 정리편·유형편·연습편 전담
- [[feedback_gate_5_0_series_agnostic]] — 시리즈 무관 게이트
- [[feedback_source_based_authoring_v17]] — 방안 F 원본 기반 (시험지 계승)
- [[feedback_system_first_priority]] — 시스템 구축 우선
