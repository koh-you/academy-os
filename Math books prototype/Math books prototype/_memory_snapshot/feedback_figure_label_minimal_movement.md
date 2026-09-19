---
name: feedback-figure-label-minimal-movement
description: "그림 라벨이 실선(곡선·직선)·다른 라벨과 겹칠 때, 최소 이동으로 해결하는 원칙. 원위치에서 가장 가까운 clean 좌표로 미세 조정 · 극단적 재배치 금지"
metadata:
  node_type: memory
  type: feedback
  established: 2026-07-22 세션 70 · 08 무리함수 R-1 TikZ 라벨 재배치 시 극단 이동 지적
  originSessionId: 1c707bb7-ef7a-492e-bac6-55fdc881e6b6
---

**Rule (강제)**: 그림 (TikZ · matplotlib) 라벨이 실선과 겹칠 때, **최소 이동** 으로 해결한다. 원위치에서 가장 가까운 clean 좌표로 미세 조정 (수 mm 이내 · anchor 변경 · yshift/xshift small). **극단적 재배치 금지** — 곡선 반대편·플롯 중앙부·프레임 밖 등 큰 이동은 원본 학평·시판 그림 관례와 어긋남.

**Why (세션 70 사건)**:
- 08 무리함수 R-1 TikZ (2024.3 고2 14번) : `y=√x`, `y=√kx` 라벨이 곡선 실선 통과
- 1차 시도 (v2) : 라벨을 곡선 중앙 위쪽 (2.6, 1.75)·(1.6, 2.55) 로 이동 → 원 학평 관례 (곡선 끝단 라벨) 를 어김 → 마스터 지적 "극단적인 이동은 금지한다는 지침을 또 어겼어"
- 2차 시도 (v3) : 라벨을 곡선 endpoint (3.96, ...) 에 `above right` anchor 로 밀착 → clean
- 3차 지적 : B·C 점 라벨이 우측 배치 (`[right]`) 로 곡선 실선 통과
- 3차 시도 (v4) : 최소 이동 = 점 우상단 `[above left=-1pt and -1pt]` (수 pt 이동만) → clean
- 마스터 정책 확정 : "언제나 최소 이동으로 겹침을 해결해"

**How to apply**:

### 라벨-실선 겹침 해결 알고리즘
1. **1순위 : anchor 변경** (0 이동 · 방향만 변경)
   - `[right]` → `[left]` · `[above]` · `[above left]` 등
   - 원점 위치 유지 · 텍스트만 다른 방향으로 확장
2. **2순위 : anchor + 소량 offset** (< 5pt · 수 mm)
   - `[above left=-1pt and -1pt]` · `[right=1mm]` 등
   - 점에서 살짝 떨어뜨림
3. **3순위 : 좌표 미세 조정** (원위치 근처)
   - `at (x+0.1, y+0.1)` 정도
   - 곡선 계산값과 라벨 위치 정합 유지
4. **금지 사항**:
   - 곡선 반대편 이동 (예: 우측 라벨을 좌측 프레임 근처로)
   - 플롯 중앙부로 이동 (원본 학평 관례는 끝단 라벨)
   - 큰 좌표 shift (2 units 이상)
   - 프레임 밖 배치 (특별한 경우 제외)

### 원본 학평 그림 관례 준수
- **함수식 라벨** (y=f(x)) : 곡선 끝단 (domain 끝) 옆 · `above right` / `right` anchor
- **점 라벨** (A, B, C 등) : 점 옆 · 곡선이 지나가는 방향의 반대편
- **좌표 라벨** : 점 밑 (below) 또는 옆 (right/left)

### 정정 예시
```latex
% Before (실선 통과)
\node[right] at (2.2, 1.1) {$\mathrm{B}$};        % 우측 곡선 상승 방향 → 겹침

% After (최소 이동)
\node[above left=-1pt and -1pt] at (2.2, 1.1) {$\mathrm{B}$};  % 좌상단 clean
```

## 관련 정책
- [[feedback_label_placement]] — 라벨 4대 규약 (R1 원·R2 직선·R3 라벨·R4 점선)
- [[feedback_figure_design_system]] — 라벨 겹침·tip boundary·축 진하기 등 10대 규약
- [[feedback_figure_effective_rendering]] — scale·실효 두께 규약
- [[feedback_document_only_rule_gap]] — 정책+도구+파이프라인 3축 편입 원칙

## 자동화 (다음 세션 P0)
- `figure-tikz-label-check.mjs` **v1.2** : plot 곡선-라벨 겹침 R5 검사 (현재 dead code · 세션 70 진단)
  - domain [a,b] 를 20~40 sample 로 이산화 · 각 (x, f(x)) 가 라벨 bbox 내부 여부 검사
  - 위반 시 RED · Gate 4.5 G9 확장
- 정기 파이프라인 편입 : refresh-all v1.8
