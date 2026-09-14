---
name: feedback-overfull-prewarning
description: overfull-check.mjs v2 사전 감지 축 신설. display 수식 \qquad 병렬식·다단계 체인(=3개+)을 빌드 전 감지 → 좁은 컬럼 Overfull 사전 예방.
metadata: 
  node_type: memory
  type: feedback
  established: 2026-07-16 (세션 46 · DeeP-Red-2 답지 Overfull 12건 반복 정정 사건)
  originSessionId: d0d5437a-f183-473c-bc6c-68328dd463be
---

**Rule**: 시험지·답지 빌드 전 `scripts/overfull-check.mjs`로 **사전 위험 패턴 감지** 의무. 사후 log 검사만으로는 12건 반복 정정 회피 불가.

**Why (세션 46 DeeP-Red-2 답지 사건)**:
- 답지 초안 빌드 후 Overfull 12건 검출 (10.9pt~142.7pt)
- 12건 모두 하나씩 정정 후 재빌드 반복 → 세션 시간 30% 소요
- 원인 공통 패턴:
  - **`\qquad` 병렬식**: `A,\qquad B` — 두 식을 한 줄로 배치 (좁은 컬럼 0.46\linewidth 초과)
  - **다단계 체인**: `= X = Y = Z` — 등호 3개 이상 (계산 과정 축약형)
- 사후 log 검사 도구만으로는 각 정정 후 재빌드 필요 → 반복 낭비

**How to apply**:

### v2 사전 감지 축 (2026-07-16 신설)
`scripts/overfull-check.mjs` 확장. display 수식 (`\[...\]`·`$$...$$`) 안 위험 패턴 감지:

| 패턴 | 조건 | 심각도 |
|---|---|---|
| **qquad-parallel** | `\qquad` 1개 | 🟡 MID |
| **qquad-parallel-heavy** | `\qquad` 2개 이상 | 🟠 HIGH |
| **multi-step-chain** | 등호 (`=`) 3개 이상 | 🟡 MID |
| **multi-step-chain-heavy** | 등호 4개 이상 | 🟠 HIGH |
| **dual-coord-inline** (v3 2026-07-19) | `X_x = ..., \quad X_y = ...` 두 좌표식 병렬 | 🟠 HIGH |

### 사용 시점
1. **빌드 전** — 답지·시험지 작성 완료 직후 (반드시)
2. **작업 시** — 새 문항 추가 시 문항 부분만 감지
3. **빌드 후** — 사후 Overfull log 검사 (기존 기능 유지)

### 예방 정정 패턴 (12건 정정 결과 도출)

**패턴 1: `\qquad` 병렬식 → 2줄 분리**
```latex
% Before (위험)
\[ f(-3) = -3a - 9,\qquad f(1) = 5a - 9. \]

% After (안전)
\[ f(-3) = -3a - 9, \]
\[ f(1) = 5a - 9. \]
```

**패턴 2: 다단계 체인 → 중간값 생략**
```latex
% Before (위험)
\[ \overline{AB} = \sqrt{(1-(-3))^2 + (4-2)^2} = \sqrt{16+4} = \sqrt{20} = 2\sqrt{5}. \]

% After (안전)
\[ \overline{AB}^{\,2} = 4^{2} + 2^{2} = 20. \]
따라서 $\overline{AB} = 2\sqrt{5}$.
```

**패턴 3-b (v3, 2026-07-19 세션 51): 두 좌표식 병렬 → align\* 두 줄**
```latex
% Before (위험 · L2-2 95.9pt·L2-8 28.3pt Overfull 유발)
\[ \mathrm{D}_x = \dfrac{13 \cdot 5 + 5 \cdot (-4)}{18} = \dfrac{5}{2},\quad \mathrm{D}_y = \dfrac{13 \cdot 1 + 5 \cdot (-8)}{18} = -\dfrac{3}{2} \]

% After (안전)
\begin{align*}
  \mathrm{D}_x &= \dfrac{13 \cdot 5 + 5 \cdot (-4)}{18} = \dfrac{5}{2}, \\
  \mathrm{D}_y &= \dfrac{13 \cdot 1 + 5 \cdot (-8)}{18} = -\dfrac{3}{2}
\end{align*}
```

**패턴 4: `\min\{a, b\} = \min\{X, Y\} = Z` 명시 값 생략**
```latex
% Before
\[ n(A \cap B) \le \min\{n(A), n(B)\} = \min\{23, 19\} = 19. \]

% After
\[ n(A \cap B) \le \min\{n(A), n(B)\} = 19. \]
```

### 예외 (허용 상황)
- **시험지 발문의 조건 나열** — 좁은 컬럼이 아닌 conditions 환경 or 넓은 컬럼
- **답지 서답형 소문항 계산** — 서답형은 컬럼 폭 넓음 (probpair 밖)
- **경미 체인 (등호 3개)** — MID · 실제 컬럼 폭 fit되면 OK

### CLAUDE.md 편입 위치 (검토 대상)
- §"안전 절차" 원칙 4 (골든 템플릿 복사 후 콘텐츠-매크로 정합) 뒤에 원칙 6 신설 검토
- §"수식 줄바꿈·디스플레이 배치 규약" 규칙 4 (사후 grep) → 사전 감지 규칙 5 병행 검토

### 관련 자원
- `scripts/overfull-check.mjs` v2 (사전 + 사후 통합)
- `scripts/choices-width-check.mjs` (choices 폭 사전 검증 · 유사 사전 도구)
- Gate 4.5 v3.9 (10 도구)에 v2 통합 (별도 확장 불요 · 기존 편입 유지)

**관련**: [[feedback_layout_gather_pagepair_threshold]] · [[feedback_answer_sheet_single_multicols]] · CLAUDE.md §"안전 절차 원칙 4"
