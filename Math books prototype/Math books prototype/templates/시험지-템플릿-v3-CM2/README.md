# 시험지 템플릿 v3.7.3 (학교 시험 스타일 · 통합 골든)

> **골든 템플릿 v3.7.3 확정** (2026-07-13 세션 35 마스터 승인). 과목 무관 (CM1/CM2 통합). 신규 시험지·답지 작성 시 이 폴더를 통째로 복사한 후 문항 내용·`\examround`·`\quickgridstretch`만 교체.

## 파일 목록

| 파일 | 설명 |
|---|---|
| `2026-2학기-와부고-예상-중간-1회-문제.tex` | 본문 골든 소스 (17문 · 100점 · `\bogibox` 실전 · Critical Point 서술형) |
| `2026-2학기-와부고-예상-중간-1회-답지.tex` | 답지 골든 소스 (quickgrid + `\answersheetsetup` + soltitle 소문항 정렬 + `\criticalpoint` 5건) |
| `청사진.yaml` | 시험지 청사진 (slot·T-code·seed_id·성취기준·cm2_scope·primary_tool · v3.10 게이트 검증) |

> **🌟 통합 디자인 시스템 (2026-07-07)**: style.sty·figures-cb.sty·figures-eq.sty는 **`templates/` 최상위에 canonical 단일본**으로 존재. 이 폴더에는 로컬 사본을 두지 않음. 빌드 시 `TEXINPUTS=../../../templates;.` 로 참조. 상세는 CLAUDE.md §"🌟 시험지·답지 통합 디자인 시스템".

## 사용 절차 (🔴 절대 원칙 — CLAUDE.md §"시험지 안전 절차" 참조)

1. **폴더 통째로 복사**:
   ```
   cp -r templates/시험지-템플릿-v3-CM2 output/공통수학N/2026-{학기}-{학교}-{회차}
   ```
   → style.sty·figures-*.sty는 복사되지 않음 (통합 canonical 참조). 과목 무관 (CM1/CM2 동일 시스템).
2. 파일명 교체 (`2026-2학기-와부고-예상-중간-1회-{문제,답지}.tex` → 신규 회차명)
3. `\examround`·`\examheader`·범위·문항 내용만 교체
4. **매크로·환경 이름 임의로 새로 만들지 않음** (`templates/style.sty`에 정의된 것만 사용)
5. 빌드:
   ```powershell
   $env:TEXINPUTS = "../../../templates;."
   xelatex -interaction=nonstopmode "회차-문제.tex"
   xelatex -interaction=nonstopmode "회차-답지.tex"
   ```
6. 빌드 후 `grep -E "! LaTeX|Undefined|Missing"` 전수 검토
7. 마스터에게 PDF 시각 확인 요청

## v3.0 신규 매크로·환경

### `\pointbadge{N점}` (배점 뱃지)
- 지원 값: 2, 2.5, 3, 3.5, 3.7, 3.9, 4, 4.1, 4.3, 4.5, 4.6, 4.7, 4.8, 5, 5.5, 6, 6.5, 6.7, 7, 8, **9, 10, 13**
- v3.0 확장: 9·10·13 (서답형 큰 배점 지원)

### 보기 환경 4종
| 환경 | 배치 | 용도 |
|---|---|---|
| `choices` | 한 줄 나열 (auto-wrap) | 짧은 보기, 표준 사용 |
| `choicesv` | **5줄 세로** | 긴 부등식·긴 수식 보기 (v3.0 신설) |
| `choices32` | **3-2 두 줄** | 좌표·분수 등 중간 길이 5개 (v3.0 신설) |
| `choicesii` | 2-2-1 (5인자) | 중간 길이 5개 |

**5인자 매크로 문법**: 각 보기를 별도 중괄호로.
```
\begin{choicesv}
{$-3 - 3\sqrt{5} < k < -3 + 3\sqrt{5}$}
{$-5 - 3\sqrt{5} < k < -5 + 3\sqrt{5}$}
{...}
{...}
{...}
\end{choicesv}
```

### `\begin{conditions}` (조건 박스)
- `\item[(가)]` 문법 미지원. 텍스트 직접 (가)(나)(다) 또는 ㄱㄴㄷ + `\\[3pt]` 줄바꿈.
```
\begin{conditions}
(가) 조건 첫째 \\[3pt]
(나) 조건 둘째 \\[3pt]
(다) 조건 셋째
\end{conditions}
```

### 서답형 소문항 풀이 공간
- `\vspace{35~55mm}` 각 소문항 뒤에 학생 풀이 공간 확보 (문제 난이도·소문항 수에 따라 조정)
- minipage `\probboxheight`: 서답형 페이지 **175~205mm** (소문항 3개면 205mm)

### 페이지 배치
- 페이지 1 (문제 1·2 / 3·4): `\vspace{6mm}` 위-아래 간격
- **페이지 2~3 (문제 5·6 / 7·8, 9·10 / 11·12): `\vspace{25mm}` 위-아래 간격** (하단 문항 시각적 여유)
- 페이지 4~ (서답형): 소문항 vspace로 페이지 채움

### 헤더 통합
- 1페이지 상단 `\examsection`에 **선택형·서술형·총점을 한 줄로**:
  ```
  \examsection{선택형 12문 (55점) \textperiodcentered\ 서술형 5문 (45점) \textperiodcentered\ 총 17문 100점}
  ```
- 서답형 페이지 별도 `\examsection{서답형...}` 금지 (헤더 중복 제거)

### 답지 형식 (v3.7.3 골든 확정, 2026-07-13)

**preamble 표준**:
```latex
\documentclass[10pt,fleqn]{article}    % fleqn: mathindent 좌측 정렬 (v3.7)
\usepackage{style}
\renewcommand{\examround}{2학기 중간 예상}   % 짧은 형식 (— N회 접미 금지)
\renewcommand{\examvol}{vol.1}
\setlength{\columnsep}{8mm}
\setlength{\columnseprule}{0pt}
\renewcommand{\quickgridstretch}{2.25}       % 문항 수에 따라: 5행=1.35(default) / 4행=1.70 / 3행=2.25
\usepackage{eso-pic}
\AddToShipoutPictureFG{%
  \ifnum\value{page}=1
    \begin{tikzpicture}[overlay,remember picture]
      \draw[color=vB-rule,line width=0.4pt]
        ([xshift=1mm,yshift=-109.6mm]current page.north)   % 🌟 골든 확정 (2026-07-07)
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

**본문 구조**:
- `\answersheetsetup` — `\begin{document}` 직후 첫 줄 (v3.7 필수, 15+ defaults 일괄 적용)
- `\answerheader{{기간명} N회 정답 및 해설}` — 1-arg. 큰 타이틀 한 줄만
- `\begin{quickgrid}...\end{quickgrid}` — 정답표
- 곧바로 `\begin{multicols}{2}\raggedcolumns` — `\examsection{...풀이}` 섹션 라벨 **금지**
- `\soltitle{번호}{답}{배점}` + 자연어 풀이 (v3.7 `\answersheetsetup` 후에는 `\soltitleexam` alias)
- 객관식·서답형 구분 없이 **하나의 multicols 흐름**
- `\end{multicols}` → `\end{document}`

**서술형 소문항 정답 표기 (v3.7.3)**:
```latex
\soltitle{13}{(1) $k<1$ 또는 $k>2$ \\ (2) $(k-1)(x-1)+(2-k)(y-1)=1$ \\ (3) $(2,2)$}{6}
```
- `\\`로 소문항 구분 → (1)은 문항번호 옆, (2)(3)은 다음 줄 (1)과 세로 정렬 (자동)
- 원리: `\soltitleexam`이 `\\`를 `\hfil\break\hspace*{\solprefixwd}`로 로컬 재정의
- 실패 접근 기록 (재시도 금지): `\parbox`·`\hangindent`·`\parshape` 모두 `multicols+\raggedright` 상호작용으로 무효화

**Critical Point (v3.7 서술형 ★ 4·5)**:
```latex
① \cplabel{조건 통합}: 조건 (1) 아래에서만 필충 성립. 조건 없이 착각하기 쉬움. \quad
② \cplabel{반례 검증}: $r_A=r_B=1$이면 명제 R 거짓 검증.
```
- `\criticalpoint{...}` 환경 = 오렌지 좌측 강조 바 + 함정 3선
- `\cplabel{...}` 매크로 = 오렌지 sans-serif bold 라벨 (`\textbf` 금지 정책 준수)

**보기 박스 (v3.7)**:
```latex
\bogibox{
ㄱ. $\{\varnothing\} \in A$ \\
ㄴ. $\{\varnothing\} \subset A$ \\
...
}
```
- `\bogibox` 환경 = tcolorbox overlay 방식 · 상단 라벨 걸치기
- `\begin{conditions}...\end{conditions}`은 조건 나열 (가)(나)(다) 용

**금지**:
- `\begin{step}[N]`·`\begin{soltitle}`·`\circledchoice`·`\begin{cond}` (매크로 없음)
- `\textbf{...}` 풀이 본문 (feedback_no_textbf_in_solutions 영구 정책)
- `\mathbf{...}` 최종답 강조 (answerbox가 담당)
- `\bigskip` 서답형 사이 (soltitle 자체 여백 사용)
- 소문항 정답 `\quad` 구분자 → **`\\`로 교체 의무** (v3.7.3)

### 🌟 quickgrid 박스 크기 통일 (yshift 재조정 불요)
CM1 5행 골든 (arraystretch 1.35 × 5행 = box height X)을 기준으로, 모든 답지가 X 유지:

| 답지 문항 수 | `\quickgridstretch` |
|---|---|
| 5행 (21~25문) | 1.35 (default, override 불필요) |
| 4행 (16~20문) | 1.70 (= 5/4 × 1.35) |
| 3행 (12~15문) | 2.25 (= 5/3 × 1.35) |

박스 크기 = arraystretch × 행수 관계로 stretch만 반비례 조정하면 박스 크기 고정 + 행 간격 여유. 세로 분할선 yshift=-109.6mm 회차·과목 무관 그대로 사용.

### 🌟 fancy header (매 페이지 상단)
`style.sty` 자동: `\examround\ \examvol` 결합 → "2학기 중간 예상 vol.1" 형식. `\examround`를 짧은 형식으로 유지하면 답지·문제 양쪽에서 자동 정합.

## 관련 자원

- 단일 출처: [`templates/시험지-디자인.md`](../시험지-디자인.md) (v3.0 갱신 예정)
- 안전 절차: `CLAUDE.md` §"🔴 시험지·유형편·답지 작성 안전 절차"
- 관련 메모리: `feedback_exam_design_v3.md`

## 변경 이력

- 2026-07-07 v3.0~3.2 — 골든 템플릿 신설, 통합 디자인 시스템, 답지 골든 확정 (`\answerheader` 1-arg · fancy header 자동 결합 · `\examsection` 라벨 폐기 · `\quickgridstretch` 변수 · yshift -109.6mm · `\textbf` 금지)
- 2026-07-12 v3.3~3.7.2 (세션 34) — `\answersheetsetup` 시스템 매크로 (7회 iteration):
  - v3.3: raggedright + emergencystretch=6em + `\let\tfrac\tfracdisplay` + `\let\soltitle\soltitleexam`
  - v3.6: `\let\frac\dfrac` alias 추가 (분수 크기 완전 통일)
  - v3.7: Tier 1·4·5 defaults 편입 (linespread 1.18 · parskip 10pt · thinmuskip · fleqn · columnsep 14mm)
  - v3.7.2: parskip 10pt · lineskip 6pt 최적점
  - `\criticalpoint` + `\cplabel` 매크로 신설 (오렌지 sans bold)
  - `\bogibox` 환경 신설 (tcolorbox overlay)
  - `figures-palette.sty` 표준 색 팔레트
  - 성취기준 축 §2.18 (schema.md + `bank/성취기준-매핑.md` + `scripts/standard-check.mjs`)
- 2026-07-13 v3.7.3 (세션 35) — **답지 서술형 소문항 (1)(2)(3) 세로 정렬 확립**:
  - `\soltitleexam`이 `\\`를 로컬 재정의해 `\hfil\break\hspace*{\solprefixwd}` 자동 주입
  - 사용: `\soltitle{13}{(1) ... \\ (2) ... \\ (3) ...}{6}`
  - 실패 접근 3종 기록 (`\parbox`·`\hangindent`·`\parshape`) — 재시도 금지
