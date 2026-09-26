---
name: feedback-figure-effective-rendering
description: 그림 실효 렌더링 규약 v1.0 (세션 57 · 2026-07-21) - scale 보정 · 프레임 채움 강제. line width·점 크기·직선 확장 실효값 관리.
metadata: 
  node_type: memory
  type: feedback
  version: v1.0
  established: 2026-07-21
  session: 57
  originSessionId: 30c01431-d86b-43a9-9461-062003580598
---

# 🔴 그림 실효 렌더링 규약 v1.0

세션 57 (2026-07-21) 마스터 지적으로 확립. **`feedback_figure_design_system`이 절대 pt 값만 규정하고 `scale`을 무시하여 시각적 일관성 파괴 사건** 계기.

**Why:** DeeP Math 정리편 CM2 01-평면좌표 R-2 (scale=0.35)와 R-3 (scale=0.7)이 같은 정책 `line width=0.8pt` 적용에도 렌더링 후 실효 두께 2배 차이. 정책 절대값만 검사한 자동 도구와 검수 에이전트 모두 시각 결함 감지 실패.

**How to apply:** 아래 3규칙을 그림 조판·정책·자동 도구 모두에 반영.

## 규칙 1 — scale 보정 실효 두께

### 원칙
`line width=Xpt` 값 자체가 아닌 **렌더링 후 실효 두께 = X × scale**를 기준으로 관리한다.

### 강제 규정
같은 시리즈·같은 유형 그림에서 실효 두께는 일관되어야 한다. DeeP Math 정리편 CM2 표준:

| 요소 | 실효 두께 목표 | 계산법 |
|---|---|---|
| 좌표축 (`x`·`y`) | 0.6~0.8pt | `line width = (0.7/scale)pt` |
| 곡선·직선·원 | 0.4~0.55pt | `line width = (0.5/scale)pt` |
| 점선·보조선 | 0.3~0.45pt | `line width = (0.4/scale)pt` |
| 정점 (주요 점) | 반경 실효 ≈ 0.8pt | `circle ((2.2/scale)pt)` |
| 파생점 (교점 등) | 반경 실효 ≈ 0.7pt | `circle ((2/scale)pt)` |

### 대안 (더 간단)
**모든 그림 scale=1.0으로 통일**하고 coord 값만 조정. 이 방법이 조판자·도구·검수 모두에 가장 안전.

## 규칙 2 — 직선·점선 축 프레임 채움

### 원칙
**축이 만드는 스크린(축 범위 사각형) 내부의 직선·점선은 프레임 경계까지 확장한다.** 선분이 아니라 무한 직선(방정식으로 정의된 것)은 도형 내부 위치가 아닌 방정식 그대로 그려야 한다.

### 강제 규정
- **직선 y = mx + c**: `\draw` domain을 x축 범위 [xmin, xmax] 전체로. `($ (P)!-K!(Q) $) -- ($ (P)!(K+1)!(Q) $)` 형태로 계산할 때 `K` 값을 축 경계까지 확장하도록 산정.
- **점선 (대칭축·매개선)**: 절대 원본 두 점 사이만 그리지 말고 축 경계까지.
- **선분 (예: 삼각형 변)**: 이 규칙 미적용 (선분은 두 점 사이만).

### 판별 기준
- 직선 방정식이 발문에 언급되면 → **무한 직선** (프레임 채움 필수)
- "선분 AB"가 발문에 언급되면 → **선분** (두 점 사이만)

### 위반 사례 (세션 57)
- **01 R-2**: 직선 PC (점선)가 C에서 P까지만 그려짐. 원문은 "직선 PC"이므로 무한 직선이어야 하나 축 프레임 밖까지 확장 안 됨. 세션 57 재검수 3차례 통과했음에도 발견됨. **정책·도구·에이전트 3중 결함**.

## 규칙 3 — 시리즈 내 시각 일관성

### 원칙
같은 폴더의 같은 유형 그림들은 렌더링 결과가 시각적으로 일관되어야 한다.

### 강제 규정
DeeP Math 정리편 CM2 대단원 8권 내:
- 실전 R-1·R-2·R-3의 축 두께·점 크기·라벨 폰트가 시각적으로 동일해야 함
- scale 값이 다르면 line width·point size를 규칙 1의 공식에 따라 자동 보정 or scale=1.0 통일

## 자동 도구 편입 (`figure-effective-check.mjs` · 세션 57 v1.0 · 세션 73 v1.1)

### 관심사 분리
- `scripts/figure-effective-check.mjs` — 실효 렌더링 (Check 1~4)
- `scripts/figure-check.mjs` — 라벨·여백·도해 유형 (Check A·B + ①~⑤)

### v1.0 (세션 57)
1. **Check 1 · 실효 두께**: TikZ 블록에서 `scale=N` 파싱 → 각 `\draw[..., line width=Xpt]` 실효값 X×N 계산 → 목표 범위 밖 RED
   - 목표: 축 0.55~0.85pt · 곡선·직선·원 0.30~0.60pt · 점선·보조선 0.20~0.45pt
2. **Check 2 · 정점/파생점 반경 실효**: 각 `\filldraw ... circle(Xpt)` 실효값 X×N 계산 → 목표 밖 RED
   - 정점 (raw≥2.15pt): 실효 [0.65, 0.90]pt · 파생점: 실효 [0.55, 0.80]pt
3. **Check 3 · 시리즈 일관성**: 같은 파일 카테고리별 실효 두께 편차 1.20x 초과 시 YELLOW

### v1.1 신설 (세션 73 · 2026-07-22)
4. **Check 4 · 무한 직선 프레임 채움**: 축 스팬 40%↑ 긴 선의 좌우 gap 감지 · 점선(임계·매개) → RED · 실선 → YELLOW
   - 세션 72 L2-12 그림 검수 사건 계기 · 규칙 2 (§46) 자동 도구 편입 완결

### 세션 73 최초 회귀 결과 (무리함수-답지 · 3 TikZ)
- Check 1: 6개 축 실효 미달 (0.42~0.45pt)
- Check 2: 4건 초과 (R-2 정점 2.2pt×0.55=1.21pt)
- Check 3: 3개 카테고리 편차 1.33~1.70x
- Check 4: 4건 점선 프레임 미채움 (L2-12·#9)
- **총 RED 18 · YELLOW 3**

### 사용법
```bash
node scripts/figure-effective-check.mjs <파일.tex>
```
반환 코드: 0 = 통과 · 1 = RED · 2 = 오용

## Gate 5.0 편입

이 규약을 `figure-check` 확장으로 통합 후 Gate 5.0 필수 14 도구에 실효 렌더링 축 편입. 시험지·정리편·유형편 모두 통과 조건.

## 관련 정책

- [[feedback_figure_design_system]] · 10대 규약 (절대값 기준)
- [[feedback_figure_frame_screen_fill]] · 축 프레임 채움 v2 (평면도형 여백 ≥20%)
- [[feedback_figure_point_size_rule]] · 점 크기 절대값
- [[feedback_label_placement]] · 라벨 배치 4대 규약
- [[feedback_figure_authoring_protocol]] · figure-check 5-step 프로토콜

## 세션 57 iteration log

- 3차 재검수까지 R-2 점선 미확장 미감지 → 마스터 지적으로 발견
- 같은 R-2/R-3 실효 두께 2배 차이 → 마스터 지적으로 발견
- 정책·도구·에이전트 3중 검수 실패 → 이 규약으로 시스템화
