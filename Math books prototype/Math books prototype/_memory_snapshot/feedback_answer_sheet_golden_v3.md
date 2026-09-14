---
name: feedback-answer-sheet-golden-v3
description: 답지 v3.0 골든 확정 (2026-07-07). \answerheader 1-arg / 짧은 \examround / examsection 라벨 폐기 / 객관식·서답형 통합 multicols / quickgridstretch 변수 / yshift -109.6mm / textbf 금지. 신규 답지 필수 준수.
metadata: 
  node_type: memory
  type: feedback
  originSessionId: c00afb3c-54bc-4006-b8b2-ec6a02b54d2b
---

**규칙**: 신규 답지 (`*-답지.tex`) 작성 시 `templates/시험지-템플릿-v3-CM2/` v3.2 골든 폴더를 복사 시작점으로 사용. 아래 v3.0 답지 명세를 강제 준수.

**Why**: 2026-07-07 마스터 최종 승인. CM2 와부고 답지 정정 반복 (총 12건: 서답형 통합·헤더 재구조·quickgrid 박스 크기 통일·세로 분할선 미세 조정 -125.6→-109.6mm) 결과 확립. 향후 답지마다 마스터가 같은 지적 반복하지 않도록 시스템에 확정.

**How to apply** (v3.0 확정 명세):

**preamble**:
```latex
\documentclass[10pt]{article}
\usepackage{style}
\renewcommand{\examround}{2학기 중간 예상}     % 짧은 형식 (— N회 접미 금지)
\renewcommand{\examvol}{vol.1}
\setlength{\columnsep}{8mm}
\setlength{\columnseprule}{0pt}
\renewcommand{\quickgridstretch}{2.25}         % 문항수별: 5행=1.35(default) / 4행=1.70 / 3행=2.25
\usepackage{eso-pic}
\AddToShipoutPictureFG{%
  \ifnum\value{page}=1
    \begin{tikzpicture}[overlay,remember picture]
      \draw[color=vB-rule,line width=0.4pt]
        ([xshift=1mm,yshift=-109.6mm]current page.north)   % 🌟 확정
        -- ([xshift=1mm,yshift=15.8mm]current page.south);
    \end{tikzpicture}%
  \else
    \begin{tikzpicture}[overlay,remember picture]
      \draw[color=vB-rule,line width=0.4pt]
        ([xshift=1mm,yshift=-13.6mm]current page.north)
        -- ([xshift=1mm,yshift=15.8mm]current page.south);
    \end{tikzpicture}%
  \fi
}
```

**본문**:
```latex
\begin{document}
\answerheader{{기간명} N회 정답 및 해설}   % 1-arg. 큰 타이틀 한 줄만
\begin{quickgrid}...\end{quickgrid}
\raggedcolumns
\begin{multicols}{2}
% 객관식·서답형 통합 흐름 — \examsection·\clearpage 없음
\soltitle{1}{제목}{점수}\begin{answerbox}정답: ...\end{answerbox}자연어 풀이
...
\end{multicols}
\end{document}
```

**🔴 금지 (v3.0 강제)**:
- `\examsection{객관식 풀이}`·`\examsection{서답형 풀이}` — 섹션 라벨 자체 금지
- 객관식·서답형 사이 `\clearpage` + 별도 multicols
- `\examround`에 "— N회 (답지)" 등 접미
- `\answerheader` 2-arg 호출 (매크로가 1-arg)
- `\textbf`·`\mathbf` 풀이 본문 ([[feedback_no_textbf_in_solutions]] 강제)
- `\bigskip` 문제 사이 (soltitle 1.5cm 자체 여백 사용)

**🌟 자동 시스템**:
- fancy header (매 페이지 상단) = `\examround\ \examvol` 자동 결합 → "2학기 중간 예상 vol.1"
- answerheader 박스 = 1-arg 매크로가 큰 타이틀 한 줄만 렌더, 작은 글씨 자동 생략
- quickgrid trailing addvspace 25pt로 박스-풀이 breathing room 자동 확보
- `\quickgridstretch`로 arraystretch × 행수 = X 불변 유지 (박스 크기 고정)

**단일 출처**:
- 골든 폴더: [`templates/시험지-템플릿-v3-CM2/`](../../../.claude/projects/C--Users-user-OneDrive-Cluade-Projects-Math-books/memory/../../../../../../OneDrive/Cluade Projects/Math books/templates/시험지-템플릿-v3-CM2)
- 명세 문서: `templates/답지-디자인-v2.md` (v3.0 § 확정 명세 부분)
- README: `templates/시험지-템플릿-v3-CM2/README.md` v3.2

**활성 참조**:
- `output/공통수학1/2026-1학기-기말예상-1회/` (CM1 골든 답지, byte-exact 동일 구조)
- `output/공통수학2/2026-2학기-와부고-예상-중간-1회/` (CM2 골든 답지)

관련: [[feedback_unified_exam_design_system]] · [[feedback_no_textbf_in_solutions]] · [[feedback_exam_design_v3]]
