---
name: feedback-answer-sheet-single-multicols
description: 답지는 단일 multicols 블록으로 유지. 중간 \clearpage + 이중 multicols는 페이지 여백 대량 발생 원인. 선택형·서술형 통합 흐름 원칙.
metadata: 
  node_type: memory
  type: feedback
  established: 2026-07-16 (세션 46 · DeeP-Red-2 답지 page 5·9 여백 사건)
  originSessionId: d0d5437a-f183-473c-bc6c-68328dd463be
---

**Rule**: 답지 (`{회차}-답지.tex`)는 하나의 `\begin{multicols}{2}...\end{multicols}` 블록으로 유지. 중간에 `\clearpage` + 두 번째 multicols 절대 금지 (선택형·서답형 섹션 분리 목적이라도).

**Why (세션 46 DeeP-Red-2 답지 사건)**:
- 원본 답지 구조:
  ```latex
  \begin{multicols}{2}  % 선택형 #1~#12
  ...
  \end{multicols}
  \clearpage
  \begin{multicols}{2}  % 서답형 #13~#17
  ...
  \end{multicols}
  ```
- 결과: **page 5 하단 60% 여백**, **page 9 (마지막 페이지) 하단 60% 여백** · 총 9쪽
- 원인: 첫 multicols가 `\raggedcolumns`로 자연 종료 시 마지막 페이지가 채워지지 못하고 `\clearpage`가 강제 페이지 넘김 → 대량 여백
- 정정: 두 multicols 블록 통합 (단일 블록) → **8쪽 압축** · page 5 꽉 참 · 여백 정상 (마지막 페이지 자연 마감)

**How to apply**:

### 표준 답지 구조 (v3.7.5 골든 확정, 2026-07-16 재확인)
```latex
\begin{document}
\answersheetsetup  % Tier 1·4·5 defaults 자동
\answerheader{...}
\begin{quickgrid}...\end{quickgrid}
\raggedcolumns
\begin{multicols}{2}
% 선택형 → 서답형 통합 흐름 · \soltitle으로 구분
\soltitle{1}{...}{5}
...
\soltitle{17}{...}{8}
\criticalpoint{...}
\end{multicols}
\end{document}
```

### 금지 패턴
- ❌ `\end{multicols} \clearpage \begin{multicols}` (여백 대량 발생)
- ❌ `\examsection{객관식 풀이}` + `\clearpage` + `\examsection{서답형 풀이}` (섹션 라벨 자체 불필요)
- ❌ 선택형·서답형 별도 페이지 배치

### 허용 예외
- `\clearpage` 없이 컬럼 자연 흐름 유지
- 필요 시 `\vfill`로 소량 여백 조정

### 시험지 vs 답지 대조
| 파일 | multicols 정책 | 이유 |
|---|---|---|
| **시험지 (문제.tex)** | `pagepair`/`probpair` 매크로 (자동 크기 균등) | 문항 정확 배치 · vfill 자동 분배 |
| **답지 ({답지}.tex)** | **단일 multicols{2}** | 풀이 자연 흐름 · \raggedcolumns 자연 마감 |

### 자동 감지 (신설 예정)
- `scripts/answer-sheet-structure-check.mjs` (신설 제안):
  - 답지 tex에 `\end{multicols}` 카운트 > 1이면 RED
  - `\clearpage` 위치 검사 (multicols 내부·이외)

### 관련 시스템
- `feedback_answer_sheet_style_defaults` (답지 v3.7.3 defaults)
- `feedback_no_insight_card` (통찰카드 폐기 · Critical Point만)
- `feedback_unified_exam_design_system` (통합 디자인 v3.2)

**관련**: [[feedback_layout_gather_pagepair_threshold]] · [[feedback_overfull_prewarning]] · CLAUDE.md §"시험지·답지 통합 디자인 시스템"
