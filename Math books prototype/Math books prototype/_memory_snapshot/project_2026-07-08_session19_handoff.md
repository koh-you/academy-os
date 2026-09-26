---
name: project-2026-07-08-session19-handoff
description: 세션 19 인계 (2026-07-08). 와부고 CM2 예상 중간 1회 답지 대규모 가독성 재설계 + soltitle 재구성 (출제의도 삭제·정답 인라인) + formal 어구 5종 재발방지 등재 + 정답 표기 최종값 지침 등재.
metadata: 
  node_type: memory
  type: project
  originSessionId: ae667b63-f0fd-4427-88dc-8dab9e5fce26
---

# 세션 19 인계 (2026-07-08) — 와부고 CM2 답지 가독성·정책 재설계

## 🎯 세션 최종 상태

### 활성 산출물
- **와부고 CM2 예상 중간 1회 답지**: 대규모 재설계 완료 (8쪽 · Error 0)
- **문제**: 배점 오름차순 정합 (자리 교환 반영)
- 위치: `output/공통수학2/2026-2학기-와부고-예상-중간-1회/`

## 📚 세션 주요 성과 (4대 축)

### 1. 검수 5종 완료 + 자리 교환 (초반)
- problem-review · solution-review · exam-review · 독립풀이 4종 병렬 실행
- 발견: 답지 #1~#7 soltitle 배점 표기 오류 (모두 2점) · 배점 오름차순 역행 2건
- 조치: 
  - 답지 #1~#7 배점 정정 (3·3.5·3.5·4·4·4.5·4.5)
  - 문제·답지 #11↔#12 자리 교환 (5점 → 6점 오름차순)
  - 문제·답지 #13↔#14 자리 교환 (7점 → 8점 오름차순)
  - 청사진 v2.0.1 갱신

### 2. 증명·서술 발문 → 값·개수 지시 전환
- 마스터: "증명하시오·서술하시오 지양"
- 정정: #13(3)·#14(3)·#15(1)·#15(3)·#17 5건 서술 요구 → 값 요구
- #13(3) "$k$의 개수·이유 서술" → "모든 $k$의 값의 합" (52)
- #15(1) "정삼각형임을 보이고 넓이" → "넓이 구하기"
- #17 "최솟값과 이유 서술" → "최솟값만"

### 3. 답지 대규모 재설계
**Tier 1**: linespread 1.18 · parskip 6pt · thinmuskip 확대
**Tier 2**: solpart 위 여백 10pt · subcase 6pt · 라벨 검정+굵게
**Tier 3**: 통찰 카드 재설계 — 회백 배경 · 좌측 바 5pt (색상 iteration 다수 후 최종 leftBar #163C75) · 라벨 상단 분리 (통찰 · N번) · 명조체 본문 · 행간 1.20 · needspace 12 · breakable=true jigsaw
**Tier 4**: 디스플레이 수식 fleqn 좌측 정렬 · 상하 12pt
**Tier 5**: answerbox 아래 7mm · columnsep 8mm → 14mm

### 4. soltitle 재구성 — 출제의도 삭제, 정답 인라인
- 마스터: "출제 의도를 삭제하고 문제번호 다음에 정답을 그냥 표기"
- 재설계: `\soltitle{N}{정답 텍스트}{배점}` — 2nd arg 의미 변경 (출제의도 → 정답)
- 새 형식: `N.  정답: {answer}` + 밑줄
- 17 슬롯 answerbox 블록 완전 제거 (`\begin{answerbox}` 사용 0건)
- 골드 마커도 제거 (마스터 지시)

### 5. #17 논술 정점 — 단일 컬럼 배치
- 마스터: "통찰카드만 오른쪽으로 넘어가 있어 · 부자연스러워"
- 다양한 tcolorbox 옵션 시도 후 결론: multicols 종료 후 #17만 단일 컬럼
- #17 (13점 논술) 페이지 전폭 사용

## 🔴 신규 영구 정책 (재발방지)

### 정책 1: 학생 자료 formal 어구 5종 금지 ([[feedback_no_formal_soltitle_terms]])
- 정점·역산·항등성·판정·해석 → 자연 한국어 대체
- 자동 도구: `scripts/permanent-policy-check.mjs` v1.4 §1.4d
- 사전: `bank/비표준-어구-사전.md` §1.4d
- 발단: 와부고 CM2 답지 출제의도에서 순차 지적 (7건 정정)

### 정책 2: 정답 표기 최종 값·표현만 ([[feedback_answer_display_final_value_only]])
- `\soltitle` 정답 인자·quickgrid·answerbox에 값만
- 유도 설명 괄호 부연 (예: "52 ($k=4,12,36$의 합)") 금지
- 예외: 순서쌍 콤마·값 조건·단위
- 사전: `bank/비표준-어구-사전.md` §1.4e
- 발단: #13 정답 표기 지적

## 🚧 미해결 · 다음 세션 고려사항

### #17 단일 컬럼 배치의 시각 확인 대기
- 마스터 아직 최종 확인 안 됨
- 대안: 페이지 전체 single-column, 통찰 카드 내용 단축, 강제 columnbreak 등

### 통찰 카드 스타일 iteration 다수 
색상·좌측 바·breakable 옵션 등 반복 조정. 최종 상태:
- 배경 noteBg #F5F5F5 (회백)
- 좌측 바 leftBar #163C75 5pt (vB-deep보다 어둡고 noteDeep보다 밝음)
- 라벨·구분선 noteDeep #0F2E5C
- 라벨: 통찰 · N번 (\thesolcount 자동 삽입)
- 라벨-본문 구분선 0.6pt
- breakable, enhanced jigsaw
- 본문 명조체 small · linespread 1.20

### 자동화 도구 확장 여지
- soltitle 2nd arg 대상 formal 어구 grep 강화 (문맥 인식 필요)
- 정답 부연 heuristic RED (의 합·의 곱·이유 등)

## 📂 관련 파일 경로

- **답지·문제·청사진**: `output/공통수학2/2026-2학기-와부고-예상-중간-1회/`
- **자동 도구**: `scripts/permanent-policy-check.mjs` v1.4
- **사전**: `bank/비표준-어구-사전.md` v1.4 §1.4d·§1.4e
- **신규 정책**:
  - `memory/feedback_no_formal_soltitle_terms.md`
  - `memory/feedback_answer_display_final_value_only.md`

## 관련 메모리
- [[feedback_no_formal_soltitle_terms]] · [[feedback_answer_display_final_value_only]]
- [[project_2026-07-07_session18_handoff]] (이전 세션)
- [[feedback_unified_exam_design_system]] · [[feedback_answer_sheet_golden_v3]]
