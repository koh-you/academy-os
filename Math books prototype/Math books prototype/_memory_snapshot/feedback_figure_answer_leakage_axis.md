---
name: feedback-figure-answer-leakage-axis
description: "figure-answer-leakage-check.mjs 4축 (2026-07-14 세션 36) — TikZ/이미지 라벨 답 노출 자동 감지, 게이트 4.5 편입"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 5d275468-0c52-47cd-9d92-60574f71646e
---

# 🔴 figure 답 노출 4축 자동 감지 · 게이트 4.5 편입

## 배경 (세션 36 사건)

2회 시험지 작업 중 매뉴얼 illustration 3회 추가:
- #15 Venn 다이어그램 (원소 나열형 → "이런 방식으로 풀어라" 힌트)
- #16 GPS 좌표 illustration (답 좌표 노출 위험)
- #17 광학 반사 그림 (초기 답 지시 위험)

마스터 지적 (2026-07-14): **"직접 힌트 금지 원칙이 작동하지 않는거냐"**·**"제거하는게 문제가 아니고 왜 그 원칙이 작동하지 않는거냐고"**.

## 해결책: 자동 검증 도구 (system-first)

**`scripts/figure-answer-leakage-check.mjs`** 신설.

### 4축 검사

| 축 | 감지 대상 | 예시 (와부고 2회 사건) |
|---|---|---|
| **A1** 원소 노출 | 답지 집합 `{2, 5, 6}` ↔ 그림 노드 라벨 "2"·"5"·"6" | #15 Venn 원소 나열 |
| **A2** 좌표점 마킹 | 답지 `P(3, 4)` ↔ 그림 `\fill (3,4) circle` | #16 GPS 좌표 |
| **A3** 개수 사전 노출 | 답지 "N개" ↔ 그림 정확 N개 라벨 배치 | 후보 카운트 힌트 |
| **A4** 반지름·거리 노출 | 답지 √13 ↔ 그림 `circle(√13)` | 원 반지름 노출 |

### 오탐 방지

- `point:x,y`·`radius:R` 마커는 A2·A4 전용, A1에서 제외
- `$C_1$`·`$r_A$` 등 LaTeX subscript는 정의 변수로 판정 (Regex `(?<![0-9\w])val(?![0-9\w])` 사용)
- 발문에 이미 명시된 값은 답이 아님

## 사용법

```powershell
node scripts/figure-answer-leakage-check.mjs <본문.tex> <답지.tex>
```

- Exit 0 = GREEN (답 노출 없음)
- Exit 1 = RED (수정 필수, 빌드 차단)
- Exit 2 = 오용

## 게이트 4.5 편입 (v3.8, 2026-07-14)

CLAUDE.md §4.5 게이트 도구 5개 → **7개**로 확장. 신규 2종:
- `exam-layout-analyzer.mjs` (문항 크기·layout·vspace 균등도)
- `figure-answer-leakage-check.mjs` (본 도구)

## 관련 자원

- [[feedback_system_first_priority]] v2.0 · 매뉴얼 fix RED-LINE
- [[feedback_figure_authoring_protocol]] Step 4 (답 노출 없음 검증)
- `scripts/figure-answer-leakage-check.mjs` (2026-07-14 신설)
- `scripts/exam-layout-analyzer.mjs` (2026-07-14 신설, 답 노출 축은 이관됨)
