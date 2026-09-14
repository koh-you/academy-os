---
name: feedback-wabuko-graph-standard
description: 와부고 기출 분석 폴더 학습 (2026-07-23 세션 75) · 그래프 5대 원칙. 좌표평면-곡선 비율 조화·프레임 안 자연 배치·해설 그림 grid·색칠·문제 vs 해설 그림 이원화. 세션 75 마스터 지시로 정리편 8권 전수 재조판 대상.
metadata: 
  node_type: memory
  type: feedback
  established: 2026-07-23 세션 75 · 와부고 기출 분석 학습 후 마스터 승인
  source: C:/Users/user/OneDrive/Cluade Projects/와부고 기출 분석/references/문제에 넣을 그림 (수정).pdf
  originSessionId: 1a74c283-60a0-4f5b-a944-6af6b30a732d
---

**정리편 그래프 신규 표준 (v9)**: 와부고 기출 분석 폴더의 시판·검증 그래프 스타일을 우리 시스템에 도입. 8권 답지·본편 전수 재조판.

**Why**: 마스터 지적 (2026-07-23) — "곡선 실선이 평면보다 훨씬 길다·좌표평면 스크린을 넘어서 쭉 빠져 있다·점근선도 짧다·그래프 사이즈랑 평면이랑 안맞는다·검수의 의미가 없어". 세션 75 이전 우리 시스템은 scale=1.0 통일만 강조 · 곡선-평면 비율 조화 검사 부재.

**How to apply — 5대 원칙**:

## 1. 좌표평면 프레임 vs 곡선 비율 조화 (최우선)

- **곡선은 좌표평면 안에 자연스럽게 담긴다**. 프레임 밖으로 튀어나가지 않는다.
- **너무 짧지도 않다**. 축 프레임을 적절히 활용한다.
- **경험 법칙**: 곡선의 x·y bbox가 축 프레임의 **60~90%** 범위를 채운다.
  - 너무 짧으면 (< 60%) 곡선 domain 확장 or 축 범위 축소
  - 너무 넘치면 (> 100%) 곡선 domain 축소 or 축 범위 확장 or 좌표 압축 factor 조정
- **자동 검수**: `figure-effective-check.mjs` Check 6 (v1.3 신설 · 세션 75)

## 2. 축 스타일

- 굵은 화살표 `-stealth` · Bold 축 라벨
- `x` 축 라벨: 우측 화살표 옆 · `below` anchor
- `y` 축 라벨: 상단 화살표 옆 · `left` anchor
- `O` 원점: 좌하단 · `below left` anchor · Bold 서체
- 축 line width 표준 : `0.7pt` (실효 목표 [0.55, 0.85])

## 3. 곡선 라벨

- **곡선 바로 옆에 자연스럽게** 배치
- 곡선의 자연 방향에 맞춰 (오른쪽 위로 뻗음 → 우상단 라벨)
- **프레임 안에 위치 필수** (프레임 밖 배치 금지)
- 방정식 명시 예: `$y = \dfrac{36}{x+10} + 4$`
- 라벨과 곡선 거리 : 1~2mm 정도 (붙지도 멀지도 않게)

## 4. 해설용 그림 요소 (신규 표준)

**문제용 그림** (본편) : 곡선 + 축 + 방정식 라벨만 (미니멀)

**해설용 그림** (답지) : 문제용 + 아래 요소 추가
- **x·y축 눈금 숫자** (특징적 좌표값 · 예 : `1, 4, 8, 9, 16, 25, α`)
- **점선 grid** — 각 눈금 지점에서 곡선까지 점선 (얇은 회색 · 0.3pt)
- **영역 색칠** — 넓이 대상 영역 (노랑·파랑 계열 · 파스텔)
- **영역 라벨** — "A", "B" 영역 안 중앙에 표시

## 5. 문제 vs 해설 그림 이원화

- **본편 (문제)** : 최소 요소만 · 학생이 문제 이해 필요한 것만
- **답지 (해설)** : 풍부한 요소 · 학생이 풀이 이해 필요한 시각 정보

**골든 카탈로그 구조** (v2 · 세션 75 확장):

| 유형 | 문제용 (미니멀) | 해설용 (풍부) |
|---|---|---|
| 유형 1 곡선-직선 교점 | curve-line-intersection-problem.tex | curve-line-intersection-solution.tex |
| 유형 2 최댓값·최솟값 | (미등록) | (미등록) |
| 유형 3 두 식으로 정의된 함수 개형 | piecewise-shape-problem.tex | piecewise-shape-solution.tex |
| 유형 4 절댓값·무리함수 대칭 | (curve-line-intersection 겸용) | (동일) |
| 유형 5 역함수·대칭 | inverse-symmetry-problem.tex | inverse-symmetry-solution.tex |
| 유형 6 그리드·색칠 넓이 | graph-with-grid.tex (문제) | graph-with-grid-shaded.tex (해설) |

## 자동 검수 도구 확장 (v1.3)

`scripts/figure-effective-check.mjs` v1.3 신설 :
- Check 5 (v1.2 세션 75) : scale=1.0 통일 (기 신설)
- **Check 6 (v1.3 세션 75)** : 곡선 bbox ⊆ 축 프레임 (곡선 domain 좌표가 축 범위 벗어나면 RED)
- **Check 7 (v1.3 세션 75)** : 점근선·매개 직선은 축 프레임 전체 채움 (좌우 gap 0.5 초과 시 RED)
- **Check 8 (v1.3 세션 75)** : 곡선 활용률 [60%, 90%] (bbox / 축 범위 비율 · YELLOW·RED 분리)

## 관련 정책

- [[feedback_figure_effective_rendering]] (계승 · scale=1.0 원칙)
- [[feedback_figure_authoring_protocol]] (5-step 프로토콜)
- [[feedback_label_placement]] (라벨 4대 규약)
- [[feedback_figure_frame_screen_fill]] (프레임 채움 v2)
- [[feedback_wabuko_solution_style]] (풀이 서술 표준 병기)
- [[feedback_document_only_rule_gap]] (4축 편입 · 문서·도구·파이프라인·에이전트)

## 세션 75 도입 순서

1. **문서 등재** (본 파일 + [[feedback_wabuko_solution_style]])
2. **자동 도구 확장** (figure-effective-check v1.3 · Check 6·7·8)
3. **골든 카탈로그 확장** (유형 6 신설 · 문제·해설 이원화)
4. **에이전트 편입** (solution-review 4축에 와부고 원칙 추가)
5. **소급 재조판** (정리편 8권 답지·본편 그래프 전수)
