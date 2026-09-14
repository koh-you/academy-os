---
name: feedback-exam-paper-template-v2
description: 🔴 영구 정책 — 시험지 기본 양식 v2.1 (2026-07-02 마스터 확립). shipout FG 분할선 + 상하우선 번호 배치 + 0.46 minipage
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 5c2ecf01-80f1-432a-9bd3-495e6cb46563
---

# 시험지 기본 양식 v2.1 (영구 정책, 2026-07-02 마스터 확립)

> "이 형태가 기본 디자인 레이아웃이야" (2026-07-02)

## 단일 출처 (참조 양식)

`output/공통수학1/2026-1학기-기말예상-1회/` 및 `2026-1학기-기말예상-2회/`
- `*-문제.tex` — B5 6페이지 23문 100점 양식
- `*-답지.tex` — 다단 풀이 양식
- `style.sty` — 매크로 정의

## v2.1 핵심 변경 (v2.0 대비)

1. **세로 분할선 = shipout FG picture** (답지와 통일)
   - pagepair 환경 내부 tikz 폐기 → 페이지 배경 오버레이로 이동
   - 상단·하단 가로선까지 관통
2. **문항 번호 = 상하 우선 배치** (한국 시험지 표준)
   - 좌측 열 세로로 N→N+1, 우측 열 세로로 N+2→N+3
   - `problem` 환경이 `#1` 인자를 번호로 사용 (`\refstepcounter` 폐기)
3. **컬럼 폭 = 0.46\linewidth** (분할선 양쪽 6mm 여유)

## 핵심 양식

### 1. 페이지·여백
- B5 변형: 188mm × 257mm
- 여백: inner=15mm, outer=13mm, top=18mm, bottom=20mm, headheight=10mm, headsep=5mm, footskip=14mm

### 2. 헤더 (페이지 1)
- `\examheader{시험 정보}{부제}` — 좌 "기말대비" / 중 시험명 / 우 vol.N
- 부제 한 줄
- 응시 정보 입력란

### 3. 세로 분할선 (shipout FG picture)

**🔴 필수: 문제 tex preamble에 아래 코드 반드시 추가**:

```latex
\usepackage{eso-pic}
\AddToShipoutPictureFG{%
  \ifnum\value{page}=1
    \begin{tikzpicture}[overlay,remember picture]
      \draw[color=vB-rule,line width=0.4pt]
        ([xshift=1mm,yshift=-82.5mm]current page.north)
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

**yshift 좌표 (마스터 미세 조정 확정)**:
- 1페이지 상단: `-82.5mm` from north (examheader 아래)
- 2~페이지 상단: `-13.6mm` from north (headrule 아래)
- 하단 (전 페이지): `+15.8mm` from south (footrule 위)
- 수평 위치: `+1mm` from center (page.north/south 기준)

### 4. pagepair 환경 (내부 분할선 제거)

**style.sty**:
```latex
\newenvironment{pagepair}{%
  \par\noindent%
  \small
}{%
  \clearpage
}
```

내부 tikz·`\vspace*{-12mm}` 폐기. 분할선은 shipout이 담당.

### 5. 문항 배치 — 상하 우선 (2×2 grid)

**tex 순서**: N, N+2, N+1, N+3 (UL·UR·LL·LR 순).
**시각적 결과**: 
```
[N]   [N+2]
[N+1] [N+3]
```
좌측 열 세로로 N → N+1, 우측 열 세로로 N+2 → N+3.

**minipage 양식** (0.46\linewidth 필수):
```latex
\begin{pagepair}
\noindent
\begin{minipage}[t][\probboxheight][t]{0.46\linewidth}
  \begin{problem}{N}{s} ... \end{problem}
\end{minipage}\hfill
\begin{minipage}[t][\probboxheight][t]{0.46\linewidth}
  \begin{problem}{N+2}{s} ... \end{problem}
\end{minipage}
\par\vspace{4mm}
\noindent
\begin{minipage}[t][\probboxheight][t]{0.46\linewidth}
  \begin{problem}{N+1}{s} ... \end{problem}
\end{minipage}\hfill
\begin{minipage}[t][\probboxheight][t]{0.46\linewidth}
  \begin{problem}{N+3}{s} ... \end{problem}
\end{minipage}
\end{pagepair}
```

### 6. problem 환경 (#1 인자 사용)

**style.sty 필수 정의**:
```latex
\newenvironment{problem}[2]{%
  \par%
  \setcounter{probnum}{#1}%
  \noindent
  \begin{minipage}[t][\probboxheight][t]{\linewidth}%
  \setlength{\parskip}{4pt plus 1pt}%
  {\sffamily\bfseries\large\color{vB-ink}#1.}\hspace{4pt}\ignorespaces
}{%
  \vfill\null\end{minipage}\par%
}
```

**중요**: `\refstepcounter` 폐기, `#1` 직접 사용. tex 순서와 무관하게 명시된 번호 표시.

### 7. \probboxheight (등간격 강제)
- 페이지 1: **65mm** (헤더 크기 적응)
- 페이지 2~ : **100mm** (풀이 공간)

### 8. \cond 매크로 사용 주의

**🔴 좁은 컬럼(0.46\linewidth)에서 긴 (단, ...) 조건은 `\cond{...}` 사용 금지**. `\mbox`로 감싸 줄바꿈 방지되어 좁은 컬럼에서 앞줄 공백 벌어짐.
**대안**: 일반 텍스트 `(단, ..., 이다.)`로 작성.

### 9. 답지 다단 균등화 해제

**🔴 답지 필수**: `\begin{multicols}{2}` 앞에 `\raggedcolumns` 추가.
```latex
\raggedcolumns
\begin{multicols}{2}
```
마지막 페이지 자동 균등화(balancing) 해제 → 좌측 열 채운 뒤 우측 열로 자연 흐름.

### 10. 답지 분할선 (동일 shipout 방식)
답지 tex도 shipout FG 방식. yshift 좌표는 답지 콘텐츠 배치에 맞춰 조정.

## 자동 차단 / 검증

- master-feedback-check ✅
- cm1-curriculum-check ✅
- total-score-check ✅
- xelatex 2-pass + Overfull/Underfull 0

## How to apply

신규 시험지 작성 시:
1. `output/공통수학1/2026-1학기-기말예상-1회/`를 *템플릿*으로 복사
2. `\examround`·`\examvol`·`\examheader` 헤더 정보 갱신
3. shipout FG 코드 preamble 유지 (yshift 좌표 검증)
4. 본문 23문 — 상하 우선 minipage grid 양식 그대로 따라가기
5. \probboxheight 65mm/100mm 유지
6. \cond 사용 금지 — 자연 텍스트로 (단, ...) 작성
7. 답지에 `\raggedcolumns` 필수

## 관련 메모리
- [[feedback_exam_paper_workflow]] (시험지 작업 흐름)
- [[feedback_100_point_policy]] (100점 정합)
- [[feedback_solution_format_priority]] (답지 양식)
