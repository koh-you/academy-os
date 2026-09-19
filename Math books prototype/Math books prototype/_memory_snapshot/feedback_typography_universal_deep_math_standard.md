---
name: feedback-typography-universal-deep-math-standard
description: 조판지침은 딥매쓰 교재 조판기준을 통합 기준으로 · 모든 교재 (시험지·유형편·연습편·정리편·테스트지·형성평가) 공통 적용 · 시리즈별 분기 금지
metadata: 
  node_type: memory
  type: feedback
  established: 2026-07-27 세션 94 (형성평가 A/B형 답지 검수 시점 · 마스터 지시)
  originSessionId: c0d3faf9-2d8a-4970-8293-f1a3dccecc24
---

# 조판지침 통합 표준 : 딥매쓰 교재 기준 · 전 교재 공통

**규칙**: 프로젝트 내 **모든 교재의 조판지침**은 DeeP Math 교재 조판기준을 통합 기준으로 삼는다. 어느 교재를 가리지 않고 다 공통 적용한다. 시리즈별 조판지침 분기 금지.

## Why
조판지침이 교재마다 다르면 학생 혼란·검수 부담·조판 관행 관리 비용 증가. DeeP Math 시리즈 (정리편 8권 · 형성평가 · 유형편·연습편·시험지 등) 가 프로젝트의 대표 시리즈이자 최상위 세련도 (본편 95/100·답지 최상 · 세션 88·92) 에 도달했으므로 이 기준을 전 교재로 확산. 신규 시리즈마다 조판지침 재발명·분기 시도 방지. 세션 92·94에서 반복 지적된 "시리즈별 sty 재발명"·"조판 관행 재발명" 방지 목적.

## How to apply
- **SSOT (단일 출처)**:
  - 조판 규약: `bank/시리즈-조판-지침-매핑.md` v1.0 (세션 93 신설)
  - 본편 sty: `templates/DeeP-Math-v6/dm-editorial.sty` (v6.76+)
  - 답지 sty: `templates/DeeP-Math-v6/dm-answer-classic.sty` (v8.12+)
  - 시험지 sty: `templates/style.sty` (형성평가·시험지 계열 · 딥매쓰 통합 스타일)
- **참고 원본** (조판 관행 정독):
  - DeeP Math 정리편 8권 (`output/공통수학2/DeeP-Math-정리편/`) — 세션 88·91 완결
  - DeeP Math 형성평가 A형 v0.9 골든 (마스터 "완벽" 승인)
- **적용 대상 (전 교재)**:
  - 시험지 (testpaper·학교시험·형성평가·평가시험지)
  - 유형편·연습편·정리편·테스트지·미니모의고사
  - 답지·해설지 (모두 dm-answer-classic 기준)
  - 신규 시리즈 착수 시 최우선 정독 대상
- **금지**:
  - 시리즈별 조판지침 분기 (신규 sty 파일 신설 금지)
  - 조판 관행 자체 재발명 (색·타이포그래피·박스·간격 재설계 금지)
  - dm-editorial·dm-answer-classic·style.sty 매크로 로컬 override (파급 위험)
  - "이 시리즈만의 조판" 논리 (모든 시리즈 통합 기준 · 시리즈는 콘텐츠만 다름)
- **주요 조판 규약 (딥매쓰 통합 기준)**:
  - **수식 조판**: 긴 인라인 수식 금지 (등호/부등호 2개↑ 또는 12em↑) → 디스플레이 분리
  - **줄바꿈**: `\therefore` (그러므로) 앞 줄바꿈 금지 · 계산 결과와 결론이 한 흐름
  - **디스플레이 뒤 텍스트**: 짧은 텍스트 (50자↓) 뒤 디스플레이 금지 → 디스플레이를 문장 끝에 배치
  - **디스플레이 종결**: 마침표(문장 종료)·쉼표(단계 이음) 명시
  - **F1~F7 부자연 표현 금지**: 정합·환원·축약된다·결정된다·대응된다·판별한다·얻어진다 등
  - **CM 스코프**: 상위 과정 (기하·미적분) 용어 침투 금지 (벡터·노름·내적 등)
  - **완전 검정 원칙**: 시험지 안 C 팔레트 (Q20 예외 없음 · 마스터 재확정)
  - **★ 표기 공백**: `★ N` (숫자 앞 공백 필수)
- **신규 교재 착수 시 Phase 0 (필수)**:
  1. `bank/시리즈-조판-지침-매핑.md` 정독
  2. DeeP Math 정리편 답지 1권 정독 (조판 관행 파악)
  3. dm-answer-classic·dm-editorial·style.sty 매크로 세트 확인
  4. 시리즈 콘텐츠 (섹션 구조·배점) 만 다르게 · 조판은 통합 기준 계승
- 관련: [[feedback_answer_sheet_dm_series_standard]] (답지 sty 통합) · [[feedback_display_math_layout]] (수식 배치) · [[feedback_universal_publishing_framework_v1]] (통합 프레임워크) · [[feedback_typography_rules_v4]] (조판 규칙 v4)
