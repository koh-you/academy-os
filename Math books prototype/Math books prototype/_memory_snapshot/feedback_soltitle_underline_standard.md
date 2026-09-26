---
name: feedback-soltitle-underline-standard
description: "\\soltitle [출제의도] 헤더 밑줄 표준 = TikZ 스트로크, line width=1pt, vB-deep (#1E4A8F). \\rule fill은 sub-pixel 위치에 따라 두께 편차 발생 (일부 문항 두꺼워 보임), TikZ 스트로크 + 1pt로 균일화. 2026-07-01 마스터 확정."
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 3de8395c-c4d5-4fbc-a1a4-aa703ca2d15e
---

## 규약

`\soltitle{N}{[출제의도] 문구}{점수}` 헤더 아래 가로선은:

```latex
\par\nobreak\vspace{-4pt}\noindent%
\tikz{\draw[vB-deep, line width=1pt, line cap=butt] (0,0) -- (\linewidth,0);}%
\par\vspace{12pt}
```

- **매크로**: TikZ `\draw` (PDF 스트로크 연산자) — `\rule` fill 아님
- **두께**: `line width=1pt` — sub-pixel 위치 편차 흡수
- **색**: `vB-deep` (#1E4A8F, [출제의도] 라벨과 동색)
- **위치**: `\vspace{-4pt}` 로 헤더 텍스트에 붙이고, 아래로 `\vspace{12pt}` 여백

## Why

**시도 이력** (2026-07-01):
1. `\rule` 0.3pt vB-rule (옅음) → 진한 색 요청
2. `\rule` 0.3pt vB-deep → #1 vs #2 가로선 다르게 보임
3. `\rule` 0.5pt vB-deep → #2·4·15·16·22 다른 문항보다 두꺼워 보임
4. TikZ 스트로크 0.4pt → 여전히 미세한 두께 편차
5. TikZ 스트로크 0.75pt → 여전히 미세한 편차
6. **TikZ 스트로크 1pt** → 균일 (마스터 확정)

**원인**: `\rule`(PDF rect fill) 또는 얇은 TikZ 스트로크는 문항이 페이지상 배치되는 절대 Y 좌표가 뷰어 픽셀 그리드와 정렬되는지 여부에 따라 anti-aliasing 폭이 달라진다.

- 0.4pt @ 96dpi ≈ 0.53px → 정렬 시 1px 진하게, 어긋나면 2px 옅게 (두께 편차)
- 1pt @ 96dpi ≈ 1.33px → 항상 1~2px 커버 → 편차 무의미

문항마다 위 헤더 텍스트 후 baseline이 정확히 어디에 놓이는지가 다르므로 (`\vspace{-4pt}` 후 `\linewidth` rule 배치 위치도 다름), 얇은 선은 뷰어에서 문항별 두께가 달라 보인다.

## How to apply

- `\soltitle` 매크로는 `style.sty` 내에 이미 정의됨 (신규 답지 폴더 복사 시 그대로 상속).
- 두께 변경 금지 — 1pt는 sub-pixel 편차 해소 최소값. 얇게 하면 문항별 두께 불균일 재발.
- 색상 변경 금지 — vB-deep은 [출제의도] 라벨과 동일 색으로 시각 통일성.
- 단일 출처: `templates/답지-디자인-v2.md`, 예시 파일: `output/공통수학1/2026-1학기-기말예상-1회/style.sty` 라인 542 부근.

## 관련

- [[feedback_answer_divider_layout]]
- [[feedback_answerbox_golden_marker]]
