---
name: feedback-shoelace-main-forbidden
description: CM2 답지·본편에서 신발끈 공식·벡터 외적·행렬식 넓이 공식은 메인 풀이 금지. \dmothersolution 부기만 허용
metadata: 
  node_type: memory
  type: feedback
  originSessionId: session-69-2026-07-22
---

CM2 답지·본편 어디에서도 **신발끈 공식**(shoelace formula · surveyor's formula · 좌표 넓이 공식) · **벡터 외적**(cross product) · **행렬식 넓이 공식**(determinant area formula) 등 미적분·기하와 벡터 상위 과정 도구를 **메인 풀이로 사용 금지**. 오직 `\dmothersolution` 매크로 안에서 "다른 풀이"로만 부기 허용.

**Why:** 세션 52 (2026-07-20) handoff에서 "신발끈 공식은 메인 풀이 금지 · `\dmothersolution` 부기만 허용" 정책이 확립되었으나, 영구 격상 (`feedback_*.md`) 안 되어 세션 53~68 동안 orphan 상태로 방치. 8권 정리편 검수 loop에서 실전 #2 (`output/공통수학2/DeeP-Math-정리편/Deep Math Review Note 01-평면좌표-답지.tex` line 562-600) 등 다수 위치에서 메인 풀이로 유입되었으나 어떤 검수 도구·에이전트도 감지 못함. 세션 69 (2026-07-22) 마스터 재적발 계기 영구화. 2022 개정 CM2 (도형의 방정식)에서 삼각형 넓이는 좌표평면 정석 도구로 유도 가능하며, 신발끈은 벡터·행렬식의 결과식이므로 상위 과정 침투에 해당.

**How to apply:**
- **CM2 정석 대체 도구**:
  - (a) **밑변 × 높이 / 2** — 한 변을 밑변으로 잡고, 점과 직선 사이 거리 공식으로 대응 꼭짓점까지의 높이를 계산
  - (b) **두 점 사이 거리 공식** — 세 변의 길이를 구한 후 좌표평면에 한 변을 $x$축에 두고 나머지 꼭짓점의 $y$좌표를 높이로 삼는 재배치
  - (c) **직사각형 - 외곽 삼각형** — 세 꼭짓점을 감싸는 축평행 직사각형에서 세 개의 직각삼각형을 빼는 감산 기법
- **형태 감지 시그니처** (검수 시 grep 대상):
  - 표준형: `(1/2)|x_A(y_B - y_C) + x_B(y_C - y_A) + x_C(y_A - y_B)|`
  - 축약형 (원점 포함 삼각형): `(1/2)|x_A y_B - x_B y_A|`
  - 자연어 트리거: "신발끈", "shoelace", "좌표 넓이 공식", "surveyor"
- **부기 허용 조건**: `\dmothersolution` 매크로 내부에서 "다른 풀이"로 명시적으로 라벨링. 인명·"신발끈" 용어 미사용, 결과식으로만 표현.
- 관련: [[feedback_no_foreign_named_formula]] · [[feedback_no_calc2_terms_cm2]] · [[feedback_review_system_promotion_gate]] · [[feedback_cayley_hamilton_main_solution_prohibited]]
- 자동 차단: `scripts/cm1-curriculum-check.mjs` 방안 2에서 신발끈 룰 3건 추가 예정 (완료 후 여기에 상호 링크)
