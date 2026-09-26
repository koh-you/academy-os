---
name: feedback-answerbox-golden-marker
description: "답지 정답 표기는 박스·골드 좌측 바·황금 컬러 텍스트 *제거*, 굵은 검정 텍스트 + 텍스트 앞 *황금색 세로 직사각형 마커* (가로 2mm × 세로 5.1mm). 2026-07-01 마스터 명시."
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 66fe4d88-06a0-455a-803c-df197aec02f7
---

## 양식

답지 정답 박스 환경 `answerbox`의 표준 정의:

```latex
\renewenvironment{answerbox}{%
  \par\noindent
  \textcolor{vB-answer-rule}{\rule[-0.6mm]{2mm}{4.5mm}}\hspace{2mm}%
  \bfseries\color{black}%
}{%
  \par\medskip%
}
```

- 박스(tcolorbox) 일체 제거
- 골드 좌측 바 일체 제거
- 황금 컬러 텍스트 일체 제거
- 정답 텍스트 = **굵은 검정** (`\bfseries\color{black}`)
- 정답 텍스트 앞 = **황금색 (vB-answer-rule #D4A017) 세로 직사각형 마커** (가로 2mm × 세로 5.1mm)

**Why**: 2026-07-01 마스터 명시 누적 4건:
1. "정답에 박스 치지마. 글씨 색을 검정으로 폰트를 두껍게"
2. "정답 글씨 앞에 있던 황금색 네모 아이콘은 살려줄것"
3. "박스를 사제(삭제)하고 황금색 정답 표기도 삭제"
4. "황금색 마커 더 긴 직사각형 모양 이었음"

학생용 답지는 박스·골드 디자인 일체 제거 + 깔끔한 마커만 유지가 표준.

**How to apply**:
- 신규 답지 작성 시 `answerbox` 환경 위 정의 그대로 사용
- 마커 크기 변경 금지 (가로 2mm × 세로 5.1mm 고정)
- 색상 `vB-answer-rule` (#D4A017) 변경 금지
- 단일 출처: `templates/답지-디자인-v2.md`

## 관련

- [[feedback_solution_format_priority]]
- [[feedback_step_label_deprecated]]
