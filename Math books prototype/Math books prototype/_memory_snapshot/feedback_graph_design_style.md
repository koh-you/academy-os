---
name: feedback-graph-design-style
description: 답지·해설지 그래프 디자인 학평 양식 단일 출처 (2026-06-28 마스터 명시). 흑백·얇은 선·곡선 중심부 배치·축 라벨 위치·y=f(x) 라벨 위치 표준.
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 671260ff-03e2-415a-8105-3e2793ab188a
  modified: 2026-07-30T01:29:24.091Z
---

# 답지 그래프 디자인 학평 양식 (보조 양식)

⚠️ **2026-06-30 마스터 명시 갱신**: 단일 출처 지위 폐기. 답지 그래프 형식은 **고쟁이 양식 우선 ([[feedback_solution_format_priority]])**, 학평 양식은 *보조* 표본으로 격하. 본 메모리의 흑백 only·0.4pt 강제 규약은 *고쟁이 양식 부재 시*에만 적용.

마스터 명시 (2026-06-28, 7회차 답지 8번 그래프 작업 중 다회 정정).

## 양식 학습 자료

`참고자료/고1 모의고사 기출 모음/2020~2026/` (52 PDF)
- 정독 권장: 2024_9월_해설.pdf, 2025_9월_해설.pdf 등 최근 학평
- 특히 케이스 분석 (i)~(v) 미니 그래프 양식 (19번·21번·30번 등)

## 핵심 규약

### 색상
- **흑백 only** — 컬러 일절 사용 금지
- gray 사용도 자제 (필요 시 매우 옅게)

### 선 굵기
- 모든 선 동일 굵기 **0.4pt** (얇음)
- 곡선·축·점선·dashed line 동일
- "곡선을 메인으로" 라는 의미는 두께가 아니라 **위치**가 중심

### 케이스별 배치
- 표 형태 사용 금지
- **(i)·(ii)·(iii)·(iv) 각각 [그래프 좌측 + 설명 우측]** 측면 배치
- `\begin{minipage}[c]{0.5\linewidth}` (그래프) + `\hfill` + `\begin{minipage}[c]{0.46\linewidth}` (설명)
- 각 케이스 헤더 앞 `\needspace{5.5cm}` (헤더+그래프+설명 묶기)

### 축 라벨 위치
- **x 라벨**: x축 끝 화살표 **아래** (`node[below]`)
- **y 라벨**: y축 끝 화살표 **왼쪽** (`node[left]`)
- 🔴 **`fill=white` 금지** (2026-07-30 세션 104 정정)

> **종전 이 항목은 `fill=white inner sep=2pt` 를 지시하고 있었다 — 폐기됐다.**
>
> 사건: 재현-1회 답지에서 이 지시를 따라 축 라벨 8곳에 `fill=white` 를 넣었더니, 라벨이 화살표 **끝점 좌표**에 놓여 있어 흰 박스가 **화살촉 안쪽 갈래를 지웠다.** 4개 그래프 × 2축 = 8개 화살촉 전부 갈고리 모양으로 붕괴(통제 실험 확인).
> 부작용이 더 있었다 — `pdf-label-overlap-check` 의 픽셀 실측이 **무력화**됐다. 겹칠 선을 지웠으니 "겹침 0" GREEN 이 나온 것이고, 그 GREEN 을 성과로 오독했다.
>
> 🔴 같은 파일 §"y=f(x) 라벨 위치" 는 이미 *"fill=white로 곡선 가리는 것도 안 됨"* 이라 적고 있었다 — **한 파일 안에서 자기모순**이었고, [[feedback_label_placement]] L21(금지)·L99(팔레트 v1.1에서 fill=white 제거)가 최신 결정이다. 겹침은 **위치 조정으로 해결**한다.

### y=f(x) 라벨 위치
- 곡선의 **오른쪽 leg 끝점 옆** (`anchor=south west`)
- 좌표: 곡선 endpoint (x_end, y_end)에 노드 배치
- 곡선이 더 떨어진 위치에 라벨 두는 게 시각적으로 자연스러움
- 예: `\node[font=\small, anchor=south west] at (6.65, 3.99) {$y\!=\!f(x)$};`
- **금지**: 곡선 중간이나 위에 라벨 배치 (fill=white로 곡선 가리는 것도 안 됨)

### 곡선이 cell 중심부에 위치
- bbox y range를 곡선과 y=-3 직선 모두 포함하도록 설정
- 곡선의 자연스러운 leg가 보이도록 domain 설정 (roots ± 약간)
- 곡선 leg가 bbox 위쪽으로 너무 솟지 않도록 domain 적절히 제한

### 폰트
- 그래프 내 텍스트: `\small`/`\footnotesize`
- 너무 작은 `\tiny`·`\scriptsize` 자제

### 기준선 (y=k 등)
- `dashed, line width=0.4pt` 직선
- 라벨 (예: $-3$) y축 왼쪽에 `anchor=east, fill=white` 배치

### 좌표 라벨 (1, 2, 3 등 root 표시)
- x축 위 root 좌표마다 작은 숫자
- `\node[font=\small, below right/below, inner sep=1-2pt]`
- inner sep으로 곡선과 거리 확보

## 사용 예시 (8번 그래프 (i) 케이스)

```latex
\begin{tikzpicture}[xscale=0.55, yscale=0.48, line width=0.4pt, font=\small]
  \useasboundingbox (-1.2, -7.6) rectangle (7.6, 4.6);
  \draw[->] (-0.8, 0) -- (7.5, 0) node[below, font=\footnotesize, inner sep=2pt, fill=white] {$x$};
  \draw[->] (0, -7.3) -- (0, 4.4) node[left, font=\footnotesize, inner sep=2pt, fill=white] {$y$};
  \draw[dashed] (-0.8, -3) -- (7.5, -3);
  \node[font=\small, anchor=east, fill=white, inner sep=1pt] at (-0.1, -3) {$-3$};
  \draw[domain=0.35:6.65, samples=100, smooth] plot(\x, {(\x-1)*(\x-6)});
  \node[font=\small, anchor=south west, inner sep=2pt] at (6.65, 3.99) {$y\!=\!f(x)$};
  \node[font=\small, below right, inner sep=1pt] at (1, 0) {$1$};
  \node[font=\small, below, inner sep=2pt] at (6, 0) {$6$};
\end{tikzpicture}
```

## How to apply

- 답지·해설지 그래프 신규 작성 시 본 양식 의무 준수
- 컬러 사용 금지 (vB-deep, vB-accent 등 팔레트 색상 사용 안 함)
- 라벨 위치는 곡선과 시각적으로 분리되도록 — 박스 우상단 leg 끝점 옆이 표준
- 매크로화 가능: `figures-eq.sty` 같은 그림 라이브러리에 표준 그래프 매크로 정립 권장

## 본 세션 다회 정정 내역 (학습 기록)

1. 컬러 사용 (blue/teal/orange/purple) → 흑백 통일
2. 라인 1.0pt 두꺼움 → 0.4pt 얇음
3. 표 형식 배치 → minipage 측면 배치
4. y=f(x) fill=white로 곡선 덮음 → 곡선 끝점 옆 이동
5. x/y 라벨 below right/above left → below/left

## 관련 메모리

- [[feedback_step_display_then_text_forbidden]] — 풀이 본문 구조 규약
- [[feedback_no_textbf_in_solutions]] — 굵은 글씨 금지
- [[project_7회차_session_handoff]] — 작업 결과물 위치
