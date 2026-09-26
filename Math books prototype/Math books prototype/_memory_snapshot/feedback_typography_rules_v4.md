---
name: feedback-typography-rules-v4
description: 세션 77 (2026-07-24) 확립 · DeeP Math 정리편 조판 규칙 v4 · 문장간 간격·소문항·수식 절단 방지·수식-한글 공백·좌우 균등 배치·박스 렌더링.
metadata: 
  node_type: memory
  type: feedback
  established: 2026-07-24 세션 77
  scope: DeeP Math 정리편 (본편 dm-editorial.sty · 답지 dm-answer-classic.sty)
  handoff_priority: P0
  originSessionId: aa8b3e1c-1816-4ff8-84c6-143eabfbf1d7
---

# DeeP Math 정리편 조판 규칙 v4 (세션 77)

정리편 본편·답지 조판의 확정 규칙. 신규 슬롯 저술·기존 파일 재조판 모두 필수 준수.

**Why**: 마스터가 무리함수 본편·답지 정정 iteration (2026-07-24 30+회) 결과 확립. 가독성·수식 절단 방지·시각 균형을 정량화한 시스템.

**How to apply**: concept-author·solution-author 에이전트가 신규 슬롯 저술 시 규칙 A~R 준수. 기존 파일 재조판 시 이 규칙으로 전수 정정.

## 규칙 A~R

### A. 소문항 매크로 `\dmsubprob{n}` (hangindent 처리)

`$(N)$ 텍스트 ...` 형태로 별 문단에서 시작하는 소문항은 `\dmsubprob{N} 텍스트 ...` 사용. 후속 줄이 hangindent (1.6em)로 소문항 번호 폭만큼 자동 들여쓰기.

**정의 위치**: dm-answer-classic.sty §10.5 · dm-editorial.sty 말미

### B. 정답 박스 `dmanslist` (소문항 2개 이상 tabular 정렬)

`dmanswerbox`에 (1)(2)(3) 소문항 정답이 나열되는 경우:
```
\begin{dmanslist}
\dmansitem{1} 내용 \\
& \dmansitem{2} 내용 \\
& \dmansitem{3} 내용
\end{dmanslist}
```

tabular 두 열 (정답: | 소문항) · hangindent 실측 실패 해결 위해 도입.

**정의 위치**: dm-answer-classic.sty §7

### C. 인라인 긴 수식 → display 분리 (수식 절단 방지)

인라인 수식이 컬럼 폭 초과 위험 있으면 (Overfull \hbox 감지 시) display로 분리. 폭 초과 안 나도 시각적 잘림 발생 가능하면 마스터 지적 시 분리.

**예**:
```
분모가 $(x+4)-4=x$가 되므로 ...  ← 잘림
```
→
```
분모는
\[ (x+4)-4=x \]
가 되므로 ...
```

### D. align\* 첫 줄 좌변만 있는 어색 패턴 정정

```
\begin{align*}
& 좌변 \\
&= 우변1 \\
&= 우변2
\end{align*}
```
→ 좌변 첫 줄에 등호 붙이거나 (폭 여유) 서술 재구성 (폭 초과):

```
\begin{align*}
좌변 &= 우변1 \\
&= 우변2
\end{align*}
```

### E. 수식-한글 조사 사이 공백 `\ `

`$X$을`·`$X$이`·`$X$을`·`$X$를`·`$X$이면`·`$X$이므로` 등 → `$X$\ 을`·`$X$\ 이`

**Why**: xetexko 기본 auto-spacing으로도 붙어 보임 · 명시적 `\ ` 필수

### F. `\smallskip` → `\vspace{3mm}`

발문-소문항, dmex-approach, approach-solution 등 블록 사이 여유 확대.

### G. dmcheck·dmex 발문 소문항 좌우 균등 배치 (`\hfill\null`)

`$(1)\ ...$ \qquad $(2)\ ...$` 형태의 발문 여러 소문항 →
```
\noindent$(1)\ ...$\hfill$(2)\ ...$\hfill\null
```

**규칙**: 문항이 차지하는 공간을 제외한 나머지를 문항 오른쪽으로 균등 분배.
- 2 문항 → `\hfill 2개` (문항 사이 + 마지막)
- 3 문항 → `\hfill 3개`

### H. `\dmanswer` 답 두 줄 정책

**두 줄 사용**: 소문항 3개 이상 · 총 길이가 한 줄 폭 초과 시:
```
\dmanswer{\parbox[t]{0.72\linewidth}{\raggedright $(1)$ ...\\ $(2)$ ...}}
```

**한 줄 유지**: 짧으면 그대로:
```
\dmanswer{$(1)$ ... \quad $(2)$ ... \quad $(3)$ ...}
```

### I. 문장간 간격 확대 (본편·답지 공통)

**답지 sty (v8.6~v8.11)**:
- `parskip 7pt` · `setstretch 1.28` · `abovedisplayskip 10pt` · `belowdisplayskip 10pt` · `\jot 6pt` · `dmsoltitle vspace 1.2cm` (문항 사이)

**본편 sty (v6.71~v6.74)**:
- dmconcept `parskip 1.4mm plus 1.6mm` · `linespread 1.25`
- dmsolution `parskip 1.5ex` · `abovedisplayskip 10pt` · `\jot 6pt` · `linespread 1.25`
- dmcheck·dmproblem·dmapproach `parskip 1.4mm plus 1.2mm` (매크로 안 주입)
- dmoptionbox `parskip 1.6mm plus 1.4mm` · `linespread 1.22` (조건 사이 여유)

### J. 개념박스 문장 마침표 후 문단 분리

정의문 뒤 예시가 이어질 때 자동 줄바꿈 대신 명시적 문단 분리:
```
~~라 한다. 예를 들어 ...  ← 이어 붙음
```
→
```
~~라 한다.

예를 들어 ...
```

### K. dmconcept 국소 parskip override (필요 시)

특정 개념 박스가 fixed height (235mm) 안에 꽉 찰 때 국소적으로 parskip 축소:
```
\begin{dmconcept}{N}{제목}
\setlength{\parskip}{0.9mm plus 1.2mm minus 0mm}%
...
```

**Why**: dmconcept 기본 1.4mm은 fixed height 초과 위험 시 개별 축소

### L. 문항 번호 정책 v2 (자동 카운터)

`\dmquick`·`\dmsoltitle` 매크로가 자동 카운터 사용:
- `dmslotcount` (dmquick 파일 전역)
- `dmsolcount` (dmsoltitle 파일 전역)

첫 인자 `#1`은 무시 · 파일 안 연속 자연수 자동 부여.
- 확인 1~12 · L1 13~24 · L2 25~36 · L3 37~39 · 실전 40~42

### M. Critical Point 박스 (v8.5 원상)

`boxrule=0.4pt` · `standard jigsaw` skin · `breakable` 제거 · `leftrule=3pt` · sharp corners

Chrome PDF 뷰어 hairline 결함은 뷰어 특유 · 인쇄 정상 · 미관 우선 얇게 유지.

### N. 수식 앞뒤 한글 띄어쓰기

`제N사분면` 등 관습 표기도 자연 공백:
- `제$1$사분면` → `제 $1$ 사분면`
- 한글 뒤 바로 `$` 나오는 패턴 모두 정정

### O. dmkichul (출처 배지) 위치

`raisebox 5mm` · 실전 문제와 배지 사이 여유 5mm

### P. 용어 대체 (금지 용어)

- **부동점** → **고정점**
- **등거리** → **같은 거리**
- **텔레스코핑** → **인접 항의 상쇄** 또는 자연어 서술

### Q. 인라인 vs display 판단 기준

- 인라인 유지: 등호 없거나 하나만 · 컬럼 폭의 60% 이하
- Display 분리: 등호 2개 이상 · 폭 60% 초과 · Overfull 감지

### R. 조판 후 검증 필수

1. `xelatex 2회 컴파일` (참조 안정화)
2. `Overfull \hbox 개수 grep` → 0건 목표
3. Chrome PDF 뷰어 시각 확인 (마스터 요청)

## 관련 메모리

- [[feedback_display_math_layout]] — display/inline 5원칙 (세션 이전)
- [[feedback_solution_writing_principles]] — 풀이 5원칙 (세션 이전)
- [[feedback_answer_sheet_style_defaults]] — 답지 v3.7 defaults
- [[feedback_answer_sheet_golden_v3]] — 답지 v3.0 골든
- [[feedback_no_textbf_in_solutions]] — 풀이 textbf 금지
- [[feedback_forbidden_solution_terms]] — 답지 금지 표현
