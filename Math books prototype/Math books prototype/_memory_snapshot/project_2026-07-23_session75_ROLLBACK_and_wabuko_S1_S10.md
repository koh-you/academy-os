---
name: project-2026-07-23-session75-rollback-and-wabuko-s1-s10
description: 세션 75 후반 (2026-07-23 · v9 롤백 + 와부고 S1~S10 서술 시스템 · 그래프 겹침 반복 지적 미완결). 마스터 강력 요청 · 새 세션에서 계속. 답지 재작성 완료 · 그래프 시스템 미완.
metadata: 
  node_type: memory
  type: project
  established: 2026-07-23 세션 75 후반 (마스터 지시로 종료)
  handoff_priority: P0
  originSessionId: 1a74c283-60a0-4f5b-a944-6af6b30a732d
---

# 세션 75 후반 · 롤백 + S1~S10 + 그래프 시스템 미완 (2026-07-23)

## 🔴 마스터 지시 (종료 시점)

> "안되겠어. 작업 마무리하고 세션 종료해. 새로운 세션에서 할거야."

**계기**: 그래프 라벨 겹침 반복 지적 · 도구 감지 결함 · 반복 정정에도 미해결 · 시스템 부재 반복.

## 세션 75 후반 완결 사항

### Phase A · v9 롤백 (2026-07-23 오후)

**계기**: 마스터 지시 "디자인 및 답지 레이아웃은 건드리지 말고 풀이 서술방식을 학습해서 시스템 구축"

- v9 매크로 5종 (`\dmwabuhead`·`\dmpart`·`\dmcase`·`\dmfinalanswer`·`\dminsight`) 롤백 · dm-answer-classic.sty [14] 섹션 삭제
- 답지 8권 v8 매크로 복원 (`_tmp_v9_rollback.py`)
- Critical Point `\dmcplabel{...}` 라벨 텍스트 임시 "통찰" 로 복원 (원본 텍스트는 v9 마이그레이션에서 소실)

### Phase B · 와부고 정독 · S1~S10 규칙 확립

- 와부고 기출 분석 폴더 정독 (`공통수학2-문제은행-전문.md` 등)
- 서술 10대 규칙 S1~S10 도출 및 [[feedback_wabuko_solution_style]] 등재
- 자동 검수 도구 4종 신설:
  - `align-usage-audit.mjs` — 짧은 align\* 남용 (S2·S6)
  - `connector-count-check.mjs` — 즉·이때·한편·따라서 · 얻어진다 (S3)
  - `atomic-unit-ratio-check.mjs` — 슬롯당 원자 개수 3~5 (S1)
  - `graph-position-audit.mjs` — 그래프 3위치 (S7)

### Phase C · 답지 · 본편 16권 병렬 재작성

- solution-author 16 병렬 launch (답지 8 + 본편 8)
- 답지: 42~47 슬롯 × 8권 · CP 라벨 116건 완성 문장으로 복원
- 본편: 예제 풀이 6개 × 8권 재작성
- 전권 errors=0 · 총 252페이지 (본편 143 + 답지 109)
- 주요 변경:
  - S1 원자 압축 (재확인 문장·서사 제거)
  - S2 좌우 병렬 (align\* → `\qquad`)
  - S3 접속어 감축 · 문어체 제거
  - S4 인라인 등호 연쇄 자유
  - S5 이유 `\quad(\because \cdots)` 부기
  - S7 그래프 3위치 (다수 재배치)

### Phase D · 분수 통일

- `\frac`·`\tfrac` → `\dfrac` 일괄 치환 · 답지 8권 총 112건 (frac 32 + tfrac 80)
- 하지만 정책 문서 등재 미완 · 자동 검수 도구 강화 미완
- 기존 `fraction-consistency-check.mjs`가 `\answersheetsetup` 호출 확인만으로 통과 판정 (로직 오류 · 실제 `\frac`·`\tfrac` 검출 안 함)

### Phase E · 그래프 겹침 감지 도구 신설 (미완)

**신규 도구**: `tikz-overlap-check.mjs` v1.0
- 라벨 bbox vs x축(y=0)·y축(x=0) 겹침
- 라벨 bbox vs 곡선 궤적 (domain 샘플) 겹침
- 라벨-라벨 bbox 겹침

**refresh-all v1.11·v1.12 편입 완료**:
```
pipeline.push(['atomic-unit-ratio-check.mjs', '--dir', 'output/공통수학2/DeeP-Math-정리편', '--soft']);
pipeline.push(['align-usage-audit.mjs', '--dir', 'output/공통수학2/DeeP-Math-정리편', '--soft']);
pipeline.push(['connector-count-check.mjs', '--dir', 'output/공통수학2/DeeP-Math-정리편', '--soft']);
pipeline.push(['graph-position-audit.mjs', '--dir', 'output/공통수학2/DeeP-Math-정리편', '--soft']);
pipeline.push(['tikz-overlap-check.mjs', '--dir', 'output/공통수학2/DeeP-Math-정리편', '--soft']);
```

## 🔴 세션 76+ P0 미완 (이월 · 최우선)

### 그래프 겹침 도구 결함

- `tikz-overlap-check.mjs`가 여전히 겹침 감지 못 함 (일부 케이스). 실제 무리함수 답지 10번 곡선 라벨-곡선 겹침 등을 놓침.
- 원인: 라벨 폭/높이 근사 부정확 · `\begin{scope}\clip` 안 그래프 domain 감지 불완전 · 다양한 anchor 조합 미커버
- **필요 강화** (세션 76 P0):
  1. LaTeX 컴파일 후 PDF에서 실제 렌더링된 텍스트·궤적 bbox 추출 (Ghostscript·pdf-lib)
  2. TikZ standalone 컴파일 후 bounding box 계산
  3. 픽셀 기반 실측 감지

### 그래프 라벨 배치 5원칙 (마스터 지시 · 정책 등재 필요)

세션 75 후반 마스터가 명시한 원칙 (문서 등재 미완):

1. **밀착표기 우선**: 라벨은 대상 요소(점선·곡선)에 밀착 배치 (`sloped` + `above/below`)
2. **판독성 강제**: 곡선 라벨은 곡선 근처 (같은 사분면 · 자유 공간)에
3. **겹침 절대금지**: 라벨-축·라벨-곡선·라벨-라벨 겹침 0
4. **점·접점 수선의 발**: 답지에서는 접점·시작점 등 정점에서 x·y축 수선 표시 (답지 이원화 · 문제 side는 미포함)
5. **좌표값 라벨 회피**: 좌표축 위 좌표값 라벨이 곡선과 겹치지 않도록 (예: 무리함수 답지 10번 라벨 "4" 문제)

### 신규 정책 등재 필요 (미완)

- `feedback_tikz_label_overlap_forbidden.md` — 5원칙 등재
- `feedback_answer_sheet_dualization.md` — 답지 side 수선·grid·색칠 (문제 side 미니멀)
- `feedback_dfrac_uniform.md` — 분수 크기 통일 · `\frac`·`\tfrac` 사용 금지
- `feedback_text_density.md` — 답지 텍스트 밀집도 (가독성)
- `feedback_equation_page_break_forbidden.md` — 수식 페이지 넘김 금지

### 신규 자동 감지 도구 미착수 (5종)

- `text-density-check.mjs` — 답지 문단당 행 밀도 (가독성)
- `text-color-check.mjs` — 폰트 색 검정/네이비 확인 (마스터 지적 "글씨 회색")
- `equation-page-break-check.mjs` — LaTeX log에서 vbox split 감지
- `frac-consistency-check.mjs` 재작성 — `\frac`·`\tfrac` 직접 검출 (`\answersheetsetup` 확인 폐기)
- `answer-refresh-all.mjs` — 답지 전용 통합 검수 파이프라인

### 그래프 정정 미완 (일부만 정정됨)

**정정 완료** (도구 감지 후 정정):
- 유리함수 답지 10번 · 곡선 y=(2x+3)/(x+4) 추가 (기존 대칭축만 있던 것)
- 유리함수 답지 11번 · y=x 라벨 오른쪽 상단
- 무리함수 답지 7번 · 시작점·끝점 x·y축 수선 추가
- 무리함수 답지 9번 · k=-3·k=-7/2 라벨 밀착표기 재정정 · 곡선 라벨 3사분면 곡선 위
- 무리함수 답지 10번 · 라벨 "4" 재배치 · 접점 (6.8, -2.404) 수선 추가

**잔존 문제** (도구 강화 후 재감지·정정 필요):
- 무리함수 답지 확인 11번 (line 297~): 곡선 f(x)·f⁻¹(x) 라벨 위치 아직 부적절
- 무리함수 답지 실전 슬롯 (line 1108~): 라벨 배치 재확인
- 유리함수 본편 R-1 라벨-라벨 겹침 잔존

## 🔴 세션 76 착수 순서 (권장)

1. **PDF 실측 기반 감지 도구 신설** (`tikz-overlap-check` 강화 또는 대체) — 라벨 bbox·곡선 궤적 실제 렌더 후 추출
2. **정책 5종 등재** — 밀착표기·판독성·겹침금지·이원화·분수통일·밀집도·페이지잘림
3. **답지 그래프 전수 재감지·정정** — 새 도구로 8권 스캔·정정
4. **자동 도구 4종 신설** — text-density·text-color·equation-page-break·answer-refresh-all
5. **정책 개정 후 마스터 승인** — 시스템 완결 후 답지 재검수·재작성 여부 결정

## 🔴 시스템 부재 회고 (마스터 반복 지적)

세션 75 후반에 마스터가 반복 강조한 시스템 결함:

1. **파이프라인 편입 누락**: 새 도구를 만들어도 `refresh-all`에 편입 안 함 → 실제 실행 안 됨 → 반복 지적
2. **에이전트 검수 도구 참조 누락**: `solution-author`·`solution-review` 에이전트가 있는 도구를 실행 안 함
3. **정책 문서 부재**: 지침이 문서에 있어도 도구·에이전트가 참조 안 함
4. **도구가 있어도 결함**: `fraction-consistency-check`가 `\answersheetsetup` 호출만 확인 · 실제 `\frac` 검출 안 함
5. **시각 검수 부재**: 좌표만 보고 라벨 위치 계산해서 실제 렌더링과 다른 판정
6. **기존 시스템 업그레이드 안 하고 신규 도구 개별 신설**: 마스터 명시 "기존 시스템을 업그레이드 시키는 작업을 해야지 도구를 따 따로 만들어 놓고 작업할때마다 왜 안되냐 왜안되냐 계속 반복 지적"

## 관련 메모리

- [[feedback_wabuko_solution_style]] — S1~S10 정책 (세션 75)
- [[feedback_wabuko_graph_standard]] — 그래프 5원칙
- [[feedback_figure_effective_rendering]] — 실효 렌더링
- [[feedback_label_placement]] — 라벨 배치 4대 규약
- [[feedback_answer_sheet_style_defaults]] — 답지 v3.7.3 (tfrac→dfrac alias 폐지)
- [[feedback_document_only_rule_gap]] — 4축 편입 원칙 (문서·도구·파이프라인·에이전트) · 반복 위반
