---
name: feedback-unified-exam-design-system
description: 시험지·답지 통합 디자인 시스템 (2026-07-07). templates/ 최상위에 style.sty·figures-cb.sty·figures-eq.sty canonical 단일본. 과목 무관 CM1/CM2 동일 시스템. 로컬 사본 파편화 금지.
metadata: 
  node_type: memory
  type: feedback
  originSessionId: c00afb3c-54bc-4006-b8b2-ec6a02b54d2b
---

**규칙**: 시험지·답지 스타일은 `templates/style.sty`·`templates/figures-cb.sty`·`templates/figures-eq.sty` **단일 canonical 3파일**로 통합. 각 output 폴더에 로컬 사본을 두지 않음. 과목(CM1/CM2) 구별 없음 — 같은 style.sty가 모든 학교 시험 스타일 담당.

**Why**: 2026-07-07 이전 상태는 파편화 심각 — style.sty 5개 서로 다른 버전이 13폴더 산재. 활성 CM1 골든과 신규 CM2 폴더가 동일 hash인데도 폴더별로 로컬 사본을 두어 마스터가 "왜 공수1과 공수2를 구별해서 하지"라는 오해 야기. figures-cb.sty·figures-eq.sty도 templates/ 위치가 stale (활성 폴더 최신본과 hash 불일치). 향후 style 갱신 시 한 파일만 편집하면 모든 활성 시험지·답지에 반영.

**How to apply**:
1. **신규 시험지 폴더 작성**: `templates/시험지-템플릿-v3-CM2/` 통째 복사 (style.sty·figures-cb.sty 없음 상태). TEXINPUTS=`../../../templates;.` 로 canonical 참조.
2. **활성 폴더 (2026-1학기 CM1 1회 + 2026-2학기 CM2 와부고)**: 로컬 style·figures 없음. 통합 canonical만 참조.
3. **아카이브 폴더 (예상 2·3·4회, 미니모의 1~7회, 동화고 2025)**: 로컬 사본 유지 (역사적 빌드 보존). 재빌드 필요 시 로컬 삭제 후 canonical 참조로 전환.
4. **style/figures 갱신**: `templates/`의 canonical 3파일만 편집. 활성 폴더 재빌드는 즉시 반영.
5. **매크로 대조표**: 문제.tex은 `\examheader{}{}`·`\examsection`·`\begin{problem}`·`\begin{choices}`; 답지.tex은 `\answerheader{}{}`·`\examsection{객관식 풀이}`·`\soltitle{}{}{}` + `\begin{answerbox}`. 헤더 매크로 혼용 금지 ([[feedback_exam_paper_template_v2]] 실수 사건).
6. **⚙️ quickgrid 박스 크기 통일 (yshift 재조정 불요, 2026-07-07 확립)**: CM1 5행 골든 (arraystretch 1.35 = 박스 높이 X)을 기준으로 모든 답지가 X 유지. 문항 수 변경 시 `\quickgridstretch`만 override — 3행 = 2.25 / 4행 = 1.70 / 5행 = 1.35 (default). box 크기 = arraystretch × 행수 관계로 stretch만 반비례 조정하면 박스 크기 고정 + 행 간격 여유 자동. TikZ 세로 분할선 yshift=-125.6mm (CM1 골든 값)를 회차·과목 무관 그대로 사용. 마스터 명시: "박스 크기 바꾸지 말고 정답 간격 여유 있게 잡아서 박스 채우면 될 거 아냐" (2026-07-07 사건 계기).

**단일 출처**: CLAUDE.md §"🌟 시험지·답지 통합 디자인 시스템". 관련 [[feedback_exam_paper_template_v2]]·[[feedback_exam_design_v3]]·[[project_2026-07-07_session17_handoff]].
