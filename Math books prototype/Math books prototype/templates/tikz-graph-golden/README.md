---
name: tikz-graph-golden
description: TikZ 좌표평면 그래프 골든 템플릿 카탈로그 v2 · scale=1.0 · 곡선 프레임 안 · 활용률 30~90% · 문제·해설 이원화 (와부고 스타일)
established: 2026-07-22 세션 73
updated: 2026-07-23 세션 75 · 문제·해설 이원화 · Check 6·7·8 준수
policy_source: feedback_wabuko_graph_standard · feedback_figure_effective_rendering · feedback_label_placement (v2)
---

# TikZ 좌표평면 그래프 골든 템플릿 카탈로그 v2

세션 73 신설·세션 75 확장. **답지·본편 그래프 저작 시 이 카탈로그에서 유형 매칭 → 골든 코드 복사 → 좌표·상수만 교체**.

**세션 75 신규 : 문제 vs 해설 그림 이원화**
- **문제용 (본편)** : 곡선 + 축 + 방정식 라벨만 (미니멀)
- **해설용 (답지)** : 문제용 + 눈금·점선 grid·영역 색칠·영역 라벨 (풍부)

## 준수 규약 (v2 확장)

**세션 73 기본 규약** :
- `scale=1.0` 통일 (§feedback_figure_effective_rendering §37 대안)
- 축 line width `0.7pt` (실효 목표 [0.55, 0.85])
- 곡선 line width `0.5pt` (실효 목표 [0.30, 0.60])
- 점선 line width `0.4pt` · `dash pattern=on 2pt off 1.5pt` (실효 목표 [0.20, 0.45])
- 주요 정점 `circle (0.8pt)` · 파생점 `circle (0.7pt)`
- 무한 직선은 축 프레임 좌우 [xmin, xmax] 전체 채움 (`\clip` 사용해 상하 잘림)
- 라벨은 실선·점선·다른 라벨과 겹침 불허 (feedback_label_placement v2)

**세션 75 신규 규약 (와부고 표준)** :
- **곡선 bbox ⊆ 축 프레임** (곡선이 프레임 밖 튀어나가지 않음 · Check 6)
- **점근선·매개 직선 축 전체 채움** (좌우 gap 0.05 이하 · Check 7)
- **곡선 활용률 30~90%** (곡선 x span / 축 x span · Check 8)
- **해설용에는 grid·색칠·영역 라벨 · 문제용에는 미니멀**

## 유형별 골든 목록 (문제·해설 이원화)

### 유형 1 · 곡선-직선 교점 개수 조건

| 문제용 (본편) | 해설용 (답지) |
|---|---|
| [`curve-line-intersection.tex`](curve-line-intersection.tex) — L2-12 원본 · 세션 73 | (문제용 겸용 · 필요 시 grid 추가) |

### 유형 2 · 함수 최댓값·최솟값

| 문제용 (본편) | 해설용 (답지) |
|---|---|
| [`extremum-shape-problem.tex`](extremum-shape-problem.tex) — 세션 75 신설 | [`extremum-shape-solution.tex`](extremum-shape-solution.tex) — grid·색칠 · 세션 75 |

### 유형 3 · 두 식으로 정의된 함수 개형

| 문제용 (본편) | 해설용 (답지) |
|---|---|
| [`piecewise-shape.tex`](piecewise-shape.tex) — FN L2-1 · 세션 75 | (문제용 겸용 · closed/open endpoint 표기) |

### 유형 4 · 절댓값·무리함수 대칭

`curve-line-intersection.tex` (유형 1 겸용 · 절댓값 무리함수 대칭 포함)

### 유형 5 · 역함수·대칭 관계

| 문제용 (본편) | 해설용 (답지) |
|---|---|
| [`inverse-symmetry.tex`](inverse-symmetry.tex) — 원함수+역함수+y=x · 세션 75 | (문제용 겸용 · 확장 : 자기 자신·조각별) |

### 유형 6 · 그리드·색칠 넓이 (와부고 스타일 · 세션 75 신설)

| 문제용 (본편) | 해설용 (답지) |
|---|---|
| [`graph-with-shading-problem.tex`](graph-with-shading-problem.tex) — 곡선+축 미니멀 | [`graph-with-shading-solution.tex`](graph-with-shading-solution.tex) — 눈금·점선 grid·영역 색칠·A/B 라벨 |

## 사용법 (v2 · 이원화)

1. 유형 매칭 → 문제용·해설용 골든 파일 정독
2. 그래프 코드를 대상 파일에 복사 (본편 = 문제용 · 답지 = 해설용)
3. **좌표·상수만 교체** (곡선 방정식·시작점·접점·눈금·색칠 영역 등)
4. line width·scale·circle 반경 유지 (실효 규약 자동 준수)
5. 라벨은 [[feedback_label_placement]] v2 준수 (실선·점선 모두 겹침 회피)
6. 저작 후 다음 두 도구 RED 0 통과 확인 :
   - `scripts/figure-effective-check.mjs` v1.3 (Check 5·6·7·8)
   - `scripts/figure-check.mjs` v1.0 (Check A·B)

## 와부고 스타일 학습 자료

- 참조 소스 : `C:/Users/user/OneDrive/Cluade Projects/와부고 기출 분석/references/문제에 넣을 그림 (수정).pdf`
- 학습 세션 : 2026-07-23 세션 75 (마스터 승인)
- 관련 정책 : [[feedback_wabuko_graph_standard]]

## 확립 사례집

- **L2-12 (2026-07-22 세션 73)** : v1 (scale=0.75 · 축 실효 0.45pt 미달) → v2 (scale=1.0) → v3 (라벨 세로 이격)
- **07 확인 10 (2026-07-23 세션 75)** : scale=0.7 → scale=1.0 + 좌표 0.5배 압축
- **04 반사 L2-11 (2026-07-23 세션 75)** : scale=0.7 → scale=1.0 + 좌표 0.7배 압축
- **08 접선 L2-10 (2026-07-23 세션 75)** : scale=0.85 → scale=1.0 + 좌표 0.85배 압축
