---
name: feedback-layout-auto-decider
description: "layout-auto-decider.mjs v3.1 (2026-07-13 세션 38 후반부 방안 J · v3.0 registry · v2.0 필드 확장 · v1.0 신설). 청사진 YAML → 페이지 배치 · probpair 계열 8종 매크로 선택 · 서답형 sub vspace X 균등 공식 자동. **v3.1**: 슬롯 편차 σ > 10mm 감지 시 pair 조합 최적화 시도 (3가지 조합 pair max diff 최소 탐색) or grid 전환 권고. policy-slot-size-uniform 자동 강제."
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 5d275468-0c52-47cd-9d92-60574f71646e
---

# layout-auto-decider — 시험지 layout 자동 결정 도구 v2.0

**규칙**: 신규 시험지 청사진 완성 → **먼저 `layout-auto-decider.mjs` 실행 → 페이지 배치·probpair macro 결정 → 청사진 slots[]에 layout 필드 삽입 → tex 작성 착수**. 저자가 layout을 감으로 결정하지 않는다.

**Why**: 세션 36에서 페이지 배치·probpair vs probpairtight vs probpairequal vs probpairfillpage 매크로 선택 매뉴얼 결정 → 10+회 반복 fix. 마스터 5회+ 지적 "균등 배분 안 됨"·"페이지 하단 여백 있으면 안 됨". probpair 계열 매크로는 좌·우 크기 편차와 sub 개수 편차 따라 정확한 macro가 결정됨 (수학적으로 결정 가능하지만 저자 눈대중 부정확).

**How to apply**:
- 청사진 YAML 완성 후 `node scripts/layout-auto-decider.mjs <청사진.yaml>` 실행
- 출력 리포트의 [Page N] 정보를 청사진 slots[]에 `layout: <macro>, page: N, partner: <slot>` 필드로 삽입
- tex 작성 시 리포트의 macro 그대로 사용 (자체 판단 금지)
- 결과 검증: 빌드 후 `exam-layout-analyzer.mjs` 사후 감사 (Gate 4.5)

## v2.0 청사진 슬롯 지원 필드 (2026-07-14 세션 38 신설)

정확도 향상을 위해 청사진 `slots[]` 각 슬롯에 다음 필드 추가 가능:

| 필드 | 값 | 크기 반영 (mm) | 설명 |
|---|---|---|---|
| `figures` | `[{type: tikz\|includegraphics, height_mm: N}, ...]` | 각 h + 5 (caption) | tex의 `\includegraphics`·`\begin{tikzpicture}` 예상 크기 |
| `has_conditions` | `true` | +22 | `\begin{conditions}` 박스 |
| `has_bogibox` | `true` | +22 | `\begin{bogibox}` |
| `has_definition_box` | `true` | +25 | tcolorbox `[정의 · ...]` |
| `narrative_length_chars` | `N` (int) | body 계산에 사용 | 지문형 발문 char 수 |
| `sub_questions` | `N` (int) | +45 × N | 서답형 sub 개수 (미명시 시 answer/type의 `(1)` 카운트) |
| `layout_hint` | `probpair\|probpairfillpage\|probgridfour` | override | 저자 강제 오버라이드 |

**하위 호환**: top-level `figures: [{slot: N, height_mm: N}]`도 슬롯에 병합 처리.

## 자동 결정 규칙 (v2.0)

### 선택형 (4문 그룹당)
- 편차 σ ≤ 8mm AND 특수요소 (conditions/bogibox/def/figure) 0개 → `\probgridfour` (2×2 grid, slot 92mm 고정)
- 편차 σ > 8mm OR 특수요소 1개+ → `\probpair×2 + \vfill` (pagepair 안 pair 2개, \vfill 자동 균등)
- layout_hint 오버라이드 존재 시 그대로 사용

### 서답형 (크기·요소 기반)
- **단독 판정** (`\probpairfillpage`): 자연 높이 > 200mm OR figures 있음 OR has_definition_box OR narrative_length_chars > 250 OR layout_hint=probpairfillpage
- **페어 판정** (`\probpair`): 자연 높이 ≤ 200mm이면서 특수 요소 없음, 다음 서답형 슬롯과 페어
- 페어 편차 > 30mm (sub 개수 다름): `\probpairequal` (우측 elastic)
- vspace X 균등 공식 적용 가능 (N_L ≠ N_R, 0 < X < 80): `\probpairtight` (padding 0)

## vspace 자동 계산 공식 (마스터 정의, 2026-07-14 세션 36)
`X = (H_L − H_R) / (N_R − N_L)`
- H_L·H_R: 좌·우 문항 자연 높이 (mm)
- N_L·N_R: 좌·우 sub 개수
- X: 우측 각 sub 답안 vspace (좌우 컬럼 하단 baseline 일치)

## v1.0 → v2.0 검증 대조 (세션 36 청사진)

| 도구 | 예측 페이지 | 실제 페이지 | 배치 정합 |
|---|---|---|---|
| v1.0 (2026-07-14 세션 37) | 6쪽 | 7쪽 | 4/6 macro 오차 (figures 미반영) |
| **v2.0 (세션 38)** | **7쪽** | **7쪽** | **6/7 페이지 macro 정합** (page 3 grid vs pair×2만 차이) |
| v2.0 tex 역분석 | 7쪽 | 7쪽 | 완벽 재현 (15·16·17 sub×3 감지 성공) |

## tex 역분석 개선 (v2.0)
`\begin{problem}{N}{s}` 두 번째 인자 `s` = 서답형 마커. **slot 경계를 `\end{problem}`이 아니라 다음 `\begin{problem}` 또는 `\clearpage`·`\end{document}`로 판정** → `probpairfillpage` 매크로 안에서 `\end{problem}` 다음에 `\textbf{(1)}`···`\textbf{(3)}`이 오는 패턴도 정확 감지.

## 관련
- `scripts/layout-auto-decider.mjs` (v2.0, 2026-07-14 세션 38)
- `scripts/exam-layout-analyzer.mjs` (사후 감사, Gate 4.5)
- [[feedback_probpair_balance_algorithm]] (마스터 공식)
- [[feedback_probpair_system]] (probpair 계열 8종)
- [[feedback_probpair_split_fixed_vspace]] (elastic 금지 규약)
