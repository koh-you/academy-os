---
name: feedback-problem-vertical-order
description: "본문 시험지 문항 번호는 *세로 우선* 순으로. 좌측 컬럼 위→아래 (#1·#2) 후 우측 컬럼 위→아래 (#3·#4). 가로 우선 (#1 좌상·#2 우상·#3 좌하·#4 우하) 양식 RED. 2026-07-01 마스터 명시."
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 66fe4d88-06a0-455a-803c-df197aec02f7
---

## 양식

본문 시험지의 페이지마다 4문 배치 시 **세로 우선** 양식 의무:

| 위치 | 슬롯 |
|---|---|
| 좌측 상 | #1 |
| 좌측 하 | #2 |
| 우측 상 | #3 |
| 우측 하 | #4 |

다음 페이지: #5·#6·#7·#8 동일 양식.

### LaTeX pagepair 환경 구조

```latex
\begin{pagepair}
\noindent
% 좌측 minipage: #1 + #2 (세로 우선)
\begin{minipage}[t]{0.49\linewidth}
  \begin{problem}{1}{s} ... \end{problem}
  \par\vspace{4mm}
  \begin{problem}{2}{s} ... \end{problem}
\end{minipage}\hfill
% 우측 minipage: #3 + #4
\begin{minipage}[t]{0.49\linewidth}
  \begin{problem}{3}{s} ... \end{problem}
  \par\vspace{4mm}
  \begin{problem}{4}{s} ... \end{problem}
\end{minipage}
\end{pagepair}
```

**RED 양식** (가로 우선, 현재 폐기):
- #1 좌상 + #2 우상 + #3 좌하 + #4 우하

**Why**: 2026-07-01 마스터 직접 명시. "좌측부터 1 2 우측으로 넘어가서 3 4 이 순서야. 좌우로 진행이 아니고 상 하 상 하 순으로 문항 번호가 진행 되야해".

한국 시험지 표준 양식 정합. 학생이 좌측 컬럼 위→아래 풀고 우측 컬럼 위→아래 자연 흐름.

**How to apply**:
- 신규 시험지 본문 작성 시 *세로 우선* 양식 의무
- pagepair 환경 내부 minipage 양식 = 좌측 minipage (2문) + `\hfill` + 우측 minipage (2문)
- 단일 출처: `templates/시험지-디자인-v3.md`

## 관련

- [[feedback_exam_paper_template_v2]] (v2.0 → v3.0 갱신 필요)
