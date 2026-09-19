---
name: feedback-answer-sheet-dm-series-standard
description: 모든 교재 (시험지·유형편·연습편·정리편·테스트지·형성평가) 답지는 DeeP Math 시리즈 답지 형식을 기준으로 제작
metadata: 
  node_type: memory
  type: feedback
  established: 2026-07-27 세션 94 (형성평가 A형·B형 답지 착수 시점)
  originSessionId: c0d3faf9-2d8a-4970-8293-f1a3dccecc24
---

# 답지 표준 : DeeP Math 시리즈 답지 형식

**규칙**: 프로젝트 내 **모든 교재의 답지**는 DeeP Math 정리편 답지의 조판 형식·매크로·시각 디자인을 기준으로 제작한다. 시리즈별 답지 sty 분기 금지.

## Why
답지 조판이 시리즈마다 다르면 학생 혼란·검수 부담·매크로 관리 비용 증가. DeeP Math 정리편 8권 완결로 답지 조판이 최상위 세련도 (본편 95/100·답지 최상 · 세션 88·92) 에 도달했으므로 이 기준을 전 시리즈로 확산. 신규 시리즈 (형성평가·시험지·유형편·연습편) 마다 답지 형식 재발명 방지.

## How to apply
- **표준 sty**: `templates/DeeP-Math-v6/dm-answer-classic.sty` (v8.12+)
- **표준 매크로**: `\answerheader` · `\quickgrid` · `\soltitle` · `\answerbox` · `\dmsolution` · `\dmothersolution`
- **참고 원본** (기존 완결 답지 8권):
  - `output/공통수학2/DeeP-Math-정리편/Deep Math Review Note 01~04-*-답지.tex` (평면좌표·직선·원·이동)
  - `output/공통수학2/DeeP-Math-정리편/Deep Math Review Note 05~08-*-답지.tex` (집합·명제·함수·유리무리)
- **신규 시리즈 답지 착수 시**:
  1. DeeP Math 정리편 답지 1권 정독 (조판 관행 파악)
  2. Phase 0 (조판 지침 준수 확인 · SSOT `bank/시리즈-조판-지침-매핑.md` §2 dapji)
  3. Phase 1 (참고 문항 = A형 문제 · 통찰·풀이 방향 파악)
  4. Phase 2 (풀이 초안 · 자연 한국어 · CP 1개/슬롯 원칙)
  5. Phase 3 (조판 · dm-answer-classic 매크로 준수)
  6. Phase 4 (자체 검수 · 부자연 표현 F1~F7 · solution-review agent 필수)
- **금지**:
  - 시리즈별 답지 sty 분기 (dm-exam-answer.sty 등 신설 금지)
  - 답지 형식 자체 재발명 (색·타이포그래피·박스 변경)
  - dm-answer-classic 매크로 로컬 override (파급 위험)
- 관련: [[feedback_universal_publishing_framework_v1]] · [[feedback_solution_cp_count]] · [[project_2026-07-26_session88_handoff]] 답지 최상 승인
