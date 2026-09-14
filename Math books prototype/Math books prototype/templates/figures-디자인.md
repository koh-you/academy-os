# 그림·그래프 디자인 시스템 — 단일 출처

**목적**: 시험지·유형편·답지의 좌표평면·원·격자·라벨 그림을 표준화. 시각 언어 일관성 확보.
**신설**: 2026-07-11 세션 33 (와부고 기출 분석 프로젝트 typed SVG 규격 차용).
**정합**: `templates/figures-palette.sty` (매크로 · 색 팔레트).

---

## 폴더 구조

```
templates/
├── figures-palette.sty       # 표준 매크로 (색·라벨·축·격자 스타일)
├── figures-cb.sty            # CB 단원 특화 그림
├── figures-eq.sty            # EQ 단원 특화 그림
├── figures-gm.sty            # GM 단원 특화 그림 (필요 시 신설)
└── figures-st.sty            # ST 단원 특화 그림 (필요 시 신설)

output/공통수학N/{시험ID}/figures/
├── bank/                     # 기성 그림 (스캔·기출 원본, PNG)
│   └── {연도-학기}-{번호}.png
└── typed/                    # 신규 제작 (tikz or SVG)
    └── {연도-학기}-{단원}-{번호}.tex
```

**원칙**:
- `bank/`: 기출 원본 스캔·PNG. 편집 X · 저장만
- `typed/`: 신규 tikz 그림. `figures-palette.sty` 로드해서 표준 색·라벨 사용

---

## 명명 규칙

**필수 형식**: `{시험ID}-{단원}-{번호}.{tex|png}`

**예시**:
- `2026-2학기-와부고-예상-중간-1회-16.tex` (16번 로봇 팔 그림)
- `2026-2학기-와부고-예상-중간-1회-14.tex` (14번 광학 반사 그림)

**단축 허용** (같은 시험 폴더 안이면):
- `16.tex` (파일명만)

---

## 표준 색 팔레트 (와부고 typed SVG 실측 근거)

| 요소 | 코드 | 사용 |
|---|---|---|
| **축**·화살표 | `fp-axis` = `#222` (거의 검정) | x·y축 · 스트로크 1.3pt |
| **격자** | `fp-grid` = `#CFD6E4` (옅은 회청) | 좌표 보조선 · 0.4pt |
| **주 도형**·곡선 | `fp-main` = `#1D4ED8` (파랑) | 원·직선·함수 그래프 · 1.4~1.8pt |
| **채움**·영역 | `fp-fill` = `#EAF0FB` (연한 파랑) | 영역 표시 · opacity 0.6 |
| **보조선**·점선 | `fp-aux` = `#999999` (중간 회색) | 격자 강조·수직선 · 0.5pt |
| **라벨** | `fp-label` = `#222222` (거의 검정) | 좌표축 이름·점 이름 |

---

## 표준 매크로

### 좌표축 (`\fpaxes`)
```latex
% \fpaxes{xmin}{xmax}{ymin}{ymax}{xlabel}{ylabel}
\fpaxes{-4}{4}{-3}{3}{$x$}{$y$}
```

### 격자 (`\fpgrid`)
```latex
% \fpgrid{xmin}{ymin}{xmax}{ymax}{step}
\fpgrid{-4}{-3}{4}{3}{1}
```

### 점 + 라벨 (`\fppoint`)
```latex
% \fppoint{x}{y}{label}{anchor}
\fppoint{2}{3}{$\mathrm{A}$}{above right}
```

### 원점 (`\fporigin`)
```latex
\fporigin  % O 라벨을 (0,0) 좌하단에 자동 배치
```

### tikz 스타일 직접 사용
```latex
\draw[fp-curve] (0,0) circle (2);     % 파랑 굵은 원
\draw[fp-shape] (-2,0) -- (2,0);      % 파랑 직선
\draw[fp-dashed] (0,0) -- (2,3);      % 점선 보조
\fill[fp-region] (0,0) rectangle (2,3); % 연한 파랑 채움
```

---

## 라벨 규칙

### 축 라벨 (`fp-name` = 굵고 크게)
- 축 이름 `$x$`·`$y$`: 축 끝 바깥쪽 (x는 우측·y는 상단)
- 굵기: `\bfseries\small`
- 색: `fp-label` (#222)

### 점 라벨 (`fp-name` = 굵고 크게)
- 점에서 2pt 떨어져 배치
- 로마체 굵음: `$\mathrm{A}$`·`$\mathrm{B}$`·`$\mathrm{O}$` 등
- 방향: 도형과 겹치지 않는 쪽 (above right·below left 등 명시)

### 눈금·수치 (`fp-tick` = 얇고 작게)
- 축 바깥쪽 (x축 아래·y축 왼쪽)
- 크기: `\footnotesize`
- 예: `10`·`20`·`30` 등 수치 눈금

---

## 예시: 원과 직선 (17번 케플러류)

```latex
\begin{tikzpicture}[scale=0.6]
  % 좌표축
  \fpaxes{0}{12}{0}{12}{$x$}{$y$}
  % 격자 (옵션)
  % \fpgrid{0}{0}{12}{12}{1}
  % 관측 영역 S (사각형)
  \draw[fp-shape] (0,0) rectangle (10,10);
  \node[fp-tick, above right=1pt] at (10,10) {$S$};
  % 궤도 A (원)
  \draw[fp-curve] (2,2) circle (2);
  \fppoint{2}{2}{$C_A$}{below left};
  % 궤도 B (원)
  \draw[fp-curve] (6,5) circle (3);
  \fppoint{6}{5}{$C_B$}{below right};
  % 중심 거리 표시 (점선)
  \draw[fp-dashed] (2,2) -- (6,5);
\end{tikzpicture}
```

---

## PNG vs tikz 정책

**PNG 사용 (bank/)**:
- 기출 원본 스캔 그대로 보관
- 편집 · 색 변경 · 재구성 X

**tikz 사용 (typed/)** — 신규 제작 원칙:
- 좌표평면·원·직선·격자 · 라벨 자동화
- `figures-palette.sty` 표준 매크로 사용
- 확대·축소 자유 · 색 일괄 변경 가능

**혼합 원칙**:
- 재사용 빈도 ≥ 3 → tikz 변환 우선
- 스캔 원본 그대로 → PNG bank/ 보관

---

## 관련 파일

- `templates/figures-palette.sty` (매크로 정의)
- `templates/figures-cb.sty` · `figures-eq.sty` (기존 단원별 그림)
- 원본 참고: `참고자료/학교기출/고1/와부고/와부고 기출 분석/교재/figures/typed/` (SVG 색·라벨 실측 근거)
