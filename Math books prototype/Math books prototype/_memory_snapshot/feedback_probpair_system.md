---
name: feedback-probpair-system
description: probpair 자동 균등 분배 시스템 (2026-07-11 확립). savebox 매크로로 pagepair 좌우 minipage 크기 자동 통일. 시험지 문항 배치 표준.
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 6625c815-08b7-4095-96d5-86b5ec33cdab
---

# probpair 자동 균등 분배 시스템 (2026-07-11 v3.1 확립)

## 정책

시험지 문항 배치는 `\probpair{좌 문항}{우 문항}` 매크로로 자동 크기 통일 (max+`\probvpadding`). 페이지 안 3-vfill (상단·pagepair 사이·하단)이 남는 공간 자동 균등 분배.

## Why

**직전 방식 (probboxheight 수동 하드코딩)** 의 근본 한계:
- 좌우 문항 크기 차이로 시각 여백 편차 20~55mm 발생
- 페이지 하단 여백 몰림 (페이지 활용 부족)
- 문항별 크기 수동 계산 및 하드코딩 관리 부담

**LaTeX 자동 균등의 진짜 근본 원인**:
1. hbox 규칙: 짧은 minipage 아래에 페이지 빈 공간 자동 생성
2. **problem 환경이 자기 안에 `[t][\probboxheight][t]` 고정 크기 minipage 감쌈** → `\savebox`가 항상 probboxheight 반환 (자연 크기 측정 불가)
3. 문제.tex의 로컬 problem override도 동일 문법 → style.sty 변경만으로 부족

## How to apply

### style.sty (`\probpair` 매크로 + problem 환경 자연화)

```latex
% problem 환경: 자연 크기 minipage (필수)
\newenvironment{problem}[2]{%
  \par%
  \setcounter{probnum}{#1}%
  \noindent
  \begin{minipage}[t]{\linewidth}%     ← [t][\probboxheight][t] 아닌 자연 크기
  \setlength{\parskip}{4pt plus 1pt}%
  {\sffamily\bfseries\large\color{vB-ink}#1.}\hspace{4pt}\ignorespaces
}{%
  \end{minipage}\par%                  ← \vfill\null 제거
}

% \probpair 매크로 (신설)
\newsavebox{\probleftbox}
\newsavebox{\probrightbox}
\newlength{\probunifiedheight}
\newlength{\probvpadding}
\setlength{\probvpadding}{20mm}
\newcommand{\probpair}[2]{%
  \sbox{\probleftbox}{\begin{minipage}{0.46\linewidth}#1\end{minipage}}%
  \sbox{\probrightbox}{\begin{minipage}{0.46\linewidth}#2\end{minipage}}%
  \setlength{\probunifiedheight}{\dimexpr\ht\probleftbox+\dp\probleftbox\relax}%
  \ifdim\dimexpr\ht\probrightbox+\dp\probrightbox\relax>\probunifiedheight
    \setlength{\probunifiedheight}{\dimexpr\ht\probrightbox+\dp\probrightbox\relax}%
  \fi
  \addtolength{\probunifiedheight}{\probvpadding}%
  \noindent
  \begin{minipage}[t][\probunifiedheight][t]{0.46\linewidth}#1\end{minipage}%
  \hfill
  \begin{minipage}[t][\probunifiedheight][t]{0.46\linewidth}#2\end{minipage}%
  \par
}
```

### 문제.tex 로컬 override

problem 환경을 로컬에서 override하는 시험지는 **로컬도 자연 크기로 변경 필수**:
```latex
\makeatletter
\renewenvironment{problem}[2]{%
  ...
  \begin{minipage}[t]{\linewidth}%     ← 자연 크기 강제
  ...
}{%
  \end{minipage}\par%                  ← \vfill\null 제거
}
\makeatother
```

### 페이지 배치 (선택형)

```latex
\begin{pagepair}
\vfill
\probpair{%
\begin{problem}{1}{s} ... \end{problem}
}{%
\begin{problem}{2}{s} ... \end{problem}
}

\vfill

\probpair{%
\begin{problem}{3}{s} ... \end{problem}
}{%
\begin{problem}{4}{s} ... \end{problem}
}
\vfill
\end{pagepair}
```

**3개 `\vfill`**이 페이지 안 남는 공간을 상단·중간·하단으로 균등 분배.

### 페이지 배치 (지문형)

지문(좌) + 소문항(우) 구조도 동일:
```latex
\begin{pagepair}
\vfill
\probpair{%
\begin{problem}{15}{s}
지문 (문항 소개)
\end{problem}
}{%
\textbf{(1)} 소문항 1 ... \vspace{30mm}
\textbf{(2)} 소문항 2 ... \vspace{30mm}
\textbf{(3)} 소문항 3 ... \vspace{30mm}
}
\vfill
\end{pagepair}
```

## 예외: 서답형 페이지 (probpair 부적합)

서답형은 소문항 답 공간 vspace(30~55mm) 명시. 자연 크기 측정 시 문항 총 크기가 페이지 활용(204mm) 초과 위험. **명시 크기 minipage 유지**:
```latex
\setlength{\probboxheight}{195mm}   % 실제 컨텐츠 크기 기반
\noindent
\begin{minipage}[t][\probboxheight][t]{0.46\linewidth}
\begin{problem}{13}{s} ... \end{problem}
\end{minipage}%
\hfill
\begin{minipage}[t][\probboxheight][t]{0.46\linewidth}
\begin{problem}{14}{s} ... \end{problem}
\end{minipage}
```

## 한계

**LaTeX 자동 완전 균등의 한계**: 좌우 문항 크기 자체가 다르면 시각 여백 편차 잔존 (짧은 문항 아래 자연 여백 표시). 편차 5~15mm는 문항 크기 차이에 기인. probpair가 페이지 빈 공간을 없애고 3-vfill로 상하 균등 분배하는 것이 실용적 최선.

## 골든 참조

- `output/공통수학2/2026-2학기-와부고-예상-중간-1회/2026-2학기-와부고-예상-중간-1회-문제.tex` (v3.1 probpair 실전 적용)
- `templates/style.sty` (problem 자연 크기 + probpair 매크로)
- `templates/시험지-학교시험-v3.md` §"페이지 배치" v3.1

## 관련 메모리

- [[feedback_unified_exam_design_system]] — 통합 디자인 시스템
- [[feedback_exam_paper_template_v2]] — 시험지 기본 양식
- [[feedback_exam_design_v3]] — 학교 시험 v3 골든 템플릿
- [[project_2026-07-11_session31_handoff]] — 시스템 완성 세션 인계
