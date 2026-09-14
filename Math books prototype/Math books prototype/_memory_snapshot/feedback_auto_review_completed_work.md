---
name: feedback-auto-review-completed-work
description: 완성본(시험지·연습지·교재 1편)이 빌드되면 마스터에게 묻지 말고 자동으로 v3.0 3층 모델 + v3.1 세련도(refinement_score) + Phase 3 답지·시험지 메타 세련도 재산정 + 디자인 가이드 9개 항목을 검수해 결과 표로 보고 (2026-06-22 v0.2: solution-review·exam-review 에이전트 분화로 5종 호출 확장)
metadata:
  node_type: memory
  type: feedback
  originSessionId: 2c8d669a-4d4b-496e-82f8-d1c3bb27d2c7
---

완성본(시험지·테스트지·교재 단원편) 빌드가 끝나면 **마스터에게 검수 의향을 묻지 말고 자동 실행**한 뒤 결과를 표로 보고한다. 마스터가 "검토해줘"라고 요청하기를 기다리는 행태 금지.

**Why:** 마스터는 같은 검수 요청을 매번 입력해야 했고, 이는 반복 노동임을 명시적으로 지적했음 (2026-06-19, 동화고 1회차 검수 후 지침 구축 요청). 자동 검수가 들어가야 라벨 드리프트·디자인 위반·세련도 미달을 조기에 잡고 마스터의 인지 부하가 줄어든다. 2026-06-21에 v3.1 세련도 카탈로그가 추가되어 검수 축이 한 단계 확장됨.

**How to apply:**

1. **트리거 — 완성본 빌드 직후 다음 중 하나라도 해당하면 즉시 실행**:
   - 시험지·테스트지 1회분 전체 빌드 완료 (예: `1회차-문제.tex` + `1회차-답지.tex`)
   - 유형편/연습지 단원 1편 빌드 완료
   - 한 번에 3문항 이상 신규/변경 (재출제·교체 일괄 작업 후)

2. **검수 항목 — 4축** (마스터 명시 2026-06-21, 그림 축 편입 2026-07-20 세션 55, 누락 금지):

   **(축 1) 난이도 분석 검수** (v3.0 3층 모델 + v3.1 세련도)
   - 3층 모델 (M·I·X) 재산정 (`bank/schema.md` v3.0): 1층 M(Mₛ·Mₖ·Mₐ·Mₜ) · 2층 I(8유형 통찰 라벨링) · 3층 X(단원 친숙도) → base★ → effective★ → 시험지 배점 라벨과 정합 비교. ★ 4·5 절차형 금지, 통찰 위장 점검.
   - v3.1 세련도 (refinement_score) (`bank/4점-패턴-카탈로그/03-패턴-카탈로그.md`): ★ 4 의무 ≥ 2 패턴 / ★ 5 의무 ≥ 3 패턴.

   **(축 2) 교과과정 내 용어 사용 검수** (디자인 가이드 9항목)
   - CM1 집합·구간 금지 / CM1 범위 외 용어 / 디스플레이 수식 뒤 짧은 텍스트 / 풀이 자세히 / `\nob`·`\cond` 누락 / Overfull·Underfull·폰트 누락 / 중복 패턴 / `math-verify.mjs` 답 재계산 / 본문 발문 인라인 행렬·긴 결과식 디스플레이 분리
   - **압축 신조어·비표준 학습 용어 grep** ([[feedback-no-compressed-terms]]): `비이웃`·`분기` 0건 확인 의무

   **(축 3) 세련도 검수** (v3.1 카탈로그 + 앵커 비교)
   - 4축 30패턴 라이브러리 적용. `bank/anchors/CM1-*.md` 세련도 앵커와 비교.
   - ★ 4·5 슬롯의 동단원·동통찰 세련도 앵커와 일치 여부.

   **(축 4) 그림 정합성 검수** (v0.3 신설 · 세션 55 · 재발 방지 시스템)
   - `node scripts/figure-check.mjs <파일.tex>` 실행 의무 — 파일 내 모든 tikzpicture 블록 자동 검사
   - Check 1 라벨-축 근접: 라벨이 축 실선과 겹칠 위험 감지 (예: A(0, y) `[above]` → y축 겹침 RED)
   - Check 2 프레임 채움: 축 프레임 대비 콘텐츠 여백 각 축별 판정 (>25% RED · 15~25% YELLOW · ≤15% GREEN)
   - RED 발견 시 축 tighten 또는 scale 확대 조정 → 재빌드 → 재검사 1패스
   - 세부 정책: [[feedback_figure_frame_screen_fill]] · [[feedback_label_placement]] · [[feedback_figure_design_system]] §7

네 축 모두 진행 — 어느 한 축도 누락 금지.

3. **에이전트 의무 병렬 호출** (단계 2.5, v0.2 5종 확장 2026-06-22):
   - **problem-review v3.1**: 본문 검수 (M·I·X·★·refinement_score) — 통찰형·절차형 03·08 카탈로그
   - **general-purpose** (독립 풀이): 답지 절대 미리 보지 말 것 [[feedback-independent-solve-no-quickgrid]]
   - **solution-author**: 답지 자세도·자연 어법·\step·디스플레이·집합·구간 점검. 자체 패치 적용 시 마스터 보고 의무 (자동 수정 금지 영역은 의심 사항으로만 보고)
   - **solution-review v0.1** (신규): 답지 1편 전수 평가 (09 카탈로그 4축 13 패턴). 답지(*-답지.tex) 신규/변경 직후 의무. refinement_score_sol 산정. 의무 6 패턴 충족 확인
   - **exam-review v0.1** (신규, *시험지 한정*): 시험지 1회차 전수 평가 (10 카탈로그 4축 14 패턴). 시험지(N회차-문제.tex·testNN-*.tex) 작업 직후 의무. refinement_score_exam 산정. 의무 7 패턴 + 100점 정합 + ★ 분포 + 답지 정합 확인

**호출 범위 분기**:
- 유형편·연습편 → 4종 (problem-review + general-purpose + solution-author + solution-review). exam-review 제외
- 시험지 → 5종 전체

4. **보고 형식**:
   - 표 1 — 문항별 v3.0/v3.1 점수표 (M·I·X·insight_score·refinement_score·base★·eff★·현재 라벨·일치)
   - 표 2 — 디자인 가이드 9항목 ✅/❌ + 위반 위치
   - 표 3 — 책 `audience` 분포 vs 실제 ★ 분포 (±5%p 이내인지)
   - 표 4 — **앵커 비교** (★ 4·5 슬롯의 동단원·동통찰 세련도 앵커와 일치 여부)
   - 위반·드리프트 발견 시 **자동 수정안 동시 제시**

5. **수정 적용 정책**:
   - 위반·드리프트 0건 → 보고만 하고 완료
   - 드리프트 ≤ 5문항 + 디자인 위반이 보호 영역(🔴) 미포함 → **묻지 말고 즉시 수정 적용 후 재빌드·재검수까지 1패스**
   - 그 외 (광범위 재출제·보호 영역 침범·새 충돌 발생) → 표로 보고하고 마스터의 A/B/C 단계 선택 결정 받음
   - **시험지(testpaper) 검수 시**: 점수 조정 시 [[feedback-100-point-policy]] 준수 — 시험지 총점은 100점 정확 유지. 라벨 드리프트로 상향·하향이 발생할 때 다른 슬롯 보정으로 총합 유지.
   - **유형교재(유형편·연습편) 검수 시**: 점수 개념 없음. 라벨 드리프트는 도트(`\dota`·`\dotb`·`\dotc`) 표기 직접 수정. 100점 만점 정책 적용 외.

6. **예외**:
   - 오탈자 1~2개 사소 수정·단발 패치는 트리거 외 (필요 시 마스터가 명시 요청)
   - 단계 1·2 일부 항목이 단원 특성상 비해당이면 "n/a" 표시, 절차 자체 생략 불가
   - 세련도 미달(refinement_score 1) ★ 4 슬롯은 (a) 패턴 보강 (b) ★ 3 강등 (c) 그대로 유지 중 마스터 결정

상세 절차는 프로젝트 [`CLAUDE.md`](../../OneDrive/Cluade Projects/Math books/CLAUDE.md) "완성본 자동 검수 의무 절차" 섹션과 동기화. 관련 메모리: [[feedback-cm1-no-set-interval]], [[feedback-display-math-layout]], [[feedback-solution-verbosity]], [[feedback-problem-workflow]], [[feedback-100-point-policy]], [[feedback-exam-paper-workflow]], [[feedback-independent-solve-no-quickgrid]].
