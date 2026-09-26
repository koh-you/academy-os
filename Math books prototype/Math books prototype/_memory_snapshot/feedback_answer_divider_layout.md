---
name: feedback-answer-divider-layout
description: "답지 가운데 분할선 = multicols columnseprule 0pt + TikZ overlay **Foreground** (BG는 컨텐츠 박스에 가려져 안 보임). 1페이지 yshift=-125.6mm/+15.8mm, 2~마지막 페이지 yshift=-13.6mm/+15.8mm. xshift=1mm. 색 vB-rule, 두께 0.4pt. 2026-07-01 마스터 명시 v6 (좌표 v5 → v6 미세조정: 위·아래 0.1mm 연장 반복 후 확정)."
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 66fe4d88-06a0-455a-803c-df197aec02f7
---

## 양식

답지의 가운데 분할선은 **multicols 자체 분할선 폐기 + TikZ overlay (Foreground) 단일선** 양식.

🔴 **핵심 발견 (2026-07-01)**: `\AddToShipoutPictureBG`로 그리면 answerheader / quickgrid 박스가 분할선 *위로 덮어* 시각상 안 보임. **`\AddToShipoutPictureFG`** 필수.

### 답지 .tex preamble 표준

```latex
\setlength{\columnsep}{8mm}
\setlength{\columnseprule}{0pt}   % multicols 분할선 비활성

\usepackage{eso-pic}
\AddToShipoutPictureFG{%   % ★ FG (Foreground) — BG는 가려져 안 보임
  \ifnum\value{page}=1
    \begin{tikzpicture}[overlay,remember picture]
      % 1페이지: examsection 가로선 직후
      \draw[color=vB-rule,line width=0.4pt]
        ([xshift=1mm,yshift=-125.6mm]current page.north)
        -- ([xshift=1mm,yshift=15.8mm]current page.south);
    \end{tikzpicture}%
  \else
    \begin{tikzpicture}[overlay,remember picture]
      % 2~마지막 페이지: 헤더 가로선 직후
      \draw[color=vB-rule,line width=0.4pt]
        ([xshift=1mm,yshift=-13.6mm]current page.north)
        -- ([xshift=1mm,yshift=15.8mm]current page.south);
    \end{tikzpicture}%
  \fi
}
```

### 좌표 설명

- **`PictureFG` (Foreground)**: 컨텐츠 박스 위에 그려져 분할선 노출. Background는 가려져 안 보임 (디버그 검증).
- **xshift=1mm**: 페이지 절대 중심(94mm) → 본문 가운데(95mm) 보정. style.sty geometry `inner=15mm, outer=13mm` 차이 절반.
- **yshift 1페이지=-125.6mm**: examsection 가로선 직후 (answerheader 박스 + quickgrid + examsection 헤더 모두 통과). v5 -112mm에서 아래로 조정 + 위·아래 미세 연장 반복 후 확정.
- **yshift 2~마지막=-13.6mm**: 헤더 가로선 직후 (top 18 + headheight 10 + 약간 안전). v5 -30mm에서 위로 조정 + 위 미세 연장 반복 후 확정.
- **yshift 끝=+15.8mm**: footer 가로선 직전. v5 +18mm에서 아래 미세 연장 반복 후 확정.

**Why**: 2026-07-01 마스터 누적 명시 5건:
1. "두꺼운 분할선 삭제" — multicols columnseprule + TikZ overlay 합쳐 이중 → multicols 폐기
2. "분할선 처음 사태로 돌려 놓으라" → columnseprule 그대로 + TikZ 끄기 시도
3. "12페이지에만 분할선 짧게 끝나잖아 수정" → TikZ overlay 다시 켜기
4. "1페이지 분할선이 객관식풀이 밑에 가로선을 뚫고 나감" → 1페이지 yshift -95mm 한정 처리
5. "페이지 레이아웃 디자인 고정 → 컨텐츠 얹기" — TikZ overlay background로 디자인 고정

**How to apply**:
- 신규 답지 작성 시 위 preamble 그대로 복사
- xshift·yshift 좌표 변경 금지 (시각 검증 완료)
- multicols columnseprule 0pt 유지 (TikZ로 단일선 일관)
- 단일 출처: `templates/답지-디자인-v2.md`

## 관련

- [[feedback_answerbox_golden_marker]]
- [[feedback_exam_paper_template_v2]]
