---
name: feedback-figure-point-size-rule
description: TikZ 좌표평면 그림의 점(원) 크기 표준 · 평면좌표 R-2 (2024_9월_고1 20번) 계승 · 주요 정점 2.2pt · 파생점 2pt
metadata:
  node_type: memory
  type: feedback
  session: 55
  date: 2026-07-20
  originSessionId: 31664665-874d-4f1f-90a3-2e2727569a88
---

# TikZ 점(원) 크기 표준 규칙

**모든 좌표평면 도해의 점(원) 크기는 아래 표를 따른다. 평면좌표 R-2 (전국연합 2024학년도 9월 고1 학평 20번)를 기준 계승.**

**Why:** 세션 55 (2026-07-20) 직선의 방정식 L3-1 그림에서 점 1.8pt · 반면 다른 그림 2.0~2.2pt · 시각적 불일치. 마스터 지적 "다른건 안그러다가 왜 이거만 점을 크게 한거야? 일관된 규칙이 있어야 하는거 아냐?" · 후속 지시 "점의 크기는 평면좌표 실전기출 2번 처럼 하는게 좋겠어".

**How to apply:**

## 1. 표준 점 크기 (평면좌표 R-2 계승)

| 점 종류 | pt 크기 | 예 |
|---|---:|---|
| **주요 정점** (문제 발문에 좌표가 명시된 초기 정의점) | **2.2pt** | A(-8, a), B(7, 3) |
| **파생점 · 유도점** (내분점 · 수선의 발 · 교점 · 중점 · 수심 등 조건에서 유도) | **2pt** | C(-6, 0), P(2, 6) |
| **참조 · 부수 정점** (특별 강조 필요 없는 보조점 · 선택적) | **1.6~1.8pt** | (사용 최소화) |

## 2. 절대 pt · scale 무관

- TikZ에서 `circle (2.2pt)`의 pt는 절대 크기 · `scale` 파라미터 영향 없음
- scale이 0.35이든 1.0이든 점의 픽셀 크기는 동일
- 도형 대비 상대 크기는 scale에 따라 다르게 보이나 pt 표준은 고정 유지

## 3. 라벨 폰트도 일관

점 옆 라벨의 폰트는 통일적으로 `\footnotesize` 사용:
```tex
\filldraw[black] (A) circle (2.2pt) node[left, font=\footnotesize] {$\mathrm{A}$};
```

## 4. 축 라벨은 별도

x, y, O 등 축 라벨은 `\scriptsize` (더 작게) 사용 · 콘텐츠 라벨과 시각 계층 구분

## 5. 예시 (평면좌표 R-2 원본 · 세션 55 승인)

```tex
\filldraw[black] (A) circle (2.2pt) node[left, font=\footnotesize] {$\mathrm{A}$};   % 주요 정점 · 좌표 명시
\filldraw[black] (B) circle (2.2pt) node[right, font=\footnotesize] {$\mathrm{B}$};  % 주요 정점 · 좌표 명시
\filldraw[black] (C) circle (2pt) node[below, font=\footnotesize] {$\mathrm{C}$};    % 파생 정점 · 조건 파생
\filldraw[black] (P) circle (2pt) node[above right, font=\footnotesize] {$\mathrm{P}$}; % 파생 · 내분점
```

## 6. 자동 검증 도구 확장 예정

`scripts/figure-check.mjs`에 Check D · 점 크기 표준 준수 검사 추가:
- `circle (Xpt)` 값이 표준 (2.2pt · 2pt · 1.6~1.8pt) 밖이면 WARN

## 7. 관련 정책

- [[feedback_figure_source_original_only]] · 원문에 그림 있을 때만 조판
- [[feedback_figure_design_system]] · 그림 디자인 10대 규약
- [[feedback_figure_frame_screen_fill]] v2 · 축 프레임 채움 규약 (평면도형 여백 ≥20%)
- [[feedback_label_placement]] · 라벨 배치 4대 규약 (실선 회피)
- [[feedback_figure_authoring_protocol]] · 5-step 그림 조판 프로토콜

## 8. 세션 55 조치 (이 규칙 확립 시점 반영)

- **평면좌표 R-2** (모범 사례 · 규칙 원본): A·B 2.2pt · C·P 2pt 유지 ✅
- **평면좌표 R-3**: A·B·C 2.2pt · D·E·F 2pt · 규칙 부합 유지 ✅
- **직선 R-2**: 현재 모두 2pt · 주요 정점 (A·B) 2.2pt로 조정 필요
- **직선 L3-1·L3-3**: 원문 그림 없음으로 이미 삭제 (규칙 무관)
