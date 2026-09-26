---
name: feedback-answer-sheet-style-defaults
description: "시험지 답지 v3.7.3 (2026-07-13 세션 35 갱신). \\answersheetsetup 매크로로 raggedright·emergencystretch·\\tfrac→\\dfrac·soltitle defaults 일괄 적용. 서술형 소문항 (1)(2)(3) 세로 정렬은 \\\\ 재정의 방식 (hangindent·parshape·parbox 모두 실패)."
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 80f6ae35-8a70-477f-a1a0-c91183910f44
---

# 시험지 답지 v3.3 defaults (2026-07-12 세션 34 확립)

## 배경

세션 34 실전 검수에서 답지 층에 반복 발생 이슈 5종:
1. 문항 간 여유 부족 (18pt로 문항 구별 어려움)
2. 인라인 `\tfrac` 매우 작게 렌더 (사용자 지적: "분수식 크기 제각각")
3. 답지 좁은 컬럼(multicols)에 raggedright 미적용 → 어절 stretch·낱말 mid-word break
4. soltitle에 "정답:" 라벨 (사용자 지적: "불필요한 표기")
5. 좌 컬럼 여유 있는데 우로 넘어감 (raggedcolumns 특성)

**마스터 지시**: "시스템 구성이 항상 최우선" — 개별 답지 로컬 override 대신 style.sty·template 시스템 defaults로 해결.

## 시스템 fix: `\answersheetsetup` 매크로 신설

**위치**: `templates/style.sty` line 47~

**사용**: 답지 `\begin{document}` 직후 한 번 호출로 defaults 일괄 적용

```latex
\begin{document}

\answersheetsetup   % 답지 defaults 자동 적용

\answerheader{...}
\begin{quickgrid}...\end{quickgrid}
\begin{multicols}{2}
\raggedcolumns
\soltitle{1}{④ $4$}{5}
...
```

## `\answersheetsetup`가 적용하는 4가지 defaults

### 1. `\raggedright` (전역)
좁은 multicols 컬럼에서 justified 정렬로 인한 어절 stretch·mid-word break 방지. 세션 32의 4-Layer fix가 style.sty의 `problem` env에만 적용됐던 것을 답지에도 확장.

### 2. `\emergencystretch=6em` (답지용 확대)
답지 좁은 컬럼(0.46\linewidth ≈ 76mm) 특성상 stretch 감내폭 필요.

### 3. `\let\tfrac\tfracdisplay` (인라인 tfrac → dfrac 크기)
`\tfracdisplay` = `\dfrac`. 답지에서 `\tfrac`을 그대로 사용해도 dfrac 크기로 렌더. 인라인·디스플레이 어디서든 분수 크기 통일.

**Why**: LaTeX의 `\tfrac`은 textstyle을 강제해서 매우 작게 렌더. 좁은 답지 컬럼에서 특히 두드러짐. 사용자 지적 "분수식 표기 크기가 다 제각각" 근본 원인.

### 4. `\let\soltitle\soltitleexam` (시험지 답지용 soltitle alias)
`\soltitleexam` = "정답:" 라벨 삭제 · addvspace 30pt · 문항 번호 + 답만 표기.

**대비**: 유형편 답지 (\soltitle 원본) = [출제의도] 라벨 + 12pt addvspace. 두 형식은 목적이 다르므로 별도 매크로.

## 정책 규약

### 신규 답지 작성 시 (v3.3 필수)

- ✅ `\begin{document}` 직후 `\answersheetsetup` 호출 의무
- ✅ 로컬 `\renewcommand{\soltitle}...` override 금지 (v3.3 systém defaults 사용)
- ✅ 로컬 `\raggedright` 명시 금지 (`\answersheetsetup`에 포함)
- ❌ `\raggedcolumns` 사용은 유지 (multicols마다 명시 · balancing 정책 별도)

### 기존 답지 (v3.2 이전) 마이그레이션

1. `\answersheetsetup` 추가 (`\begin{document}` 직후)
2. 로컬 `\renewcommand{\soltitle}` override 제거
3. 로컬 `\raggedright` 제거 (multicols 안)
4. 로컬 `\raggedcolumns` 유지

### tfrac 사용

**본문 (문제·답지 모두)**: `\tfrac` 사용 자유. 답지에서는 `\answersheetsetup` 자동 dfrac 크기로 렌더.

**유형편 답지 (다른 시스템)**: `\tfrac` 그대로 작동. `\answersheetsetup` 호출 안 함.

## v3.3 관련 파일

- `templates/style.sty` line 47~ `\answersheetsetup` 정의
- `templates/시험지-템플릿-v3-CM2/2026-2학기-와부고-예상-중간-1회-답지.tex` line 34 `\answersheetsetup` 호출 (골든 template)
- `templates/답지-디자인-v2.md` (단일 출처 문서 · v3.3 갱신 예정)

## 세션 34 실전 검증

와부고 CM2 1회 답지 (2026-2학기-와부고-예상-중간-1회):
- 로컬 soltitle override 제거 → `\answersheetsetup` 하나로 대체
- 문제 7·9의 인라인 분수 자동 dfrac 크기 → "정답:" 라벨 제거 → 30pt 여유
- 답지 7쪽 유지 · LaTeX Error 0 · master-feedback 통과

## §multicols 근본 한계 대응 (v3.4 2026-07-12 실전 검증 · 확정)

### 배경

세션 34 실전 검수에서 와부고 CM2 1회 답지 4페이지 (문항 11) 좌 컬럼 여유·우 컬럼 채움 이슈 발생. 3안 (A `\raggedcolumns` 폐지 · B display block 회피 · C `\multicolsep` 조정) 실전 테스트.

### 실전 검증 결과

**A안 (`\raggedcolumns` 폐지 → balancing)**: 시도했으나 layout 변화 미미. Balancing이 이미 동작하지만 tall display 블록 (`\begin{align*}`) 제약 때문에 좌 컬럼 여유 상존.

**C안 (`\filbreak` 추가)**: 시도했으나 페이지 확대 (7쪽 → 10쪽). 모든 soltitle 앞에서 컬럼 브레이크 강제 유발.

**B안 (답지 콘텐츠 tall display 회피)**: 유일한 근본 해결책. `\begin{align*}` 해체 · 인라인 dfrac 단계 분리 시 자연스러운 컬럼 flow.

### 근본 원인 (multicols 한계)

LaTeX multicols는 display 블록 (`\begin{align*}...\end{align*}` · `\[...\]` 등) 을 **한 컬럼에 통째로** 배치. 분리 불가. 즉:

- 좌 컬럼 남은 공간에 tall display 블록이 안 맞음 → **paragraph + display 통째로** 우 컬럼으로 이동
- 좌 컬럼: 이전 문항 마무리만 남고 여유 발생
- **`\raggedcolumns` · `\flushcolumns` · balancing 어느 것도 이 한계 해결 못 함**

### 확정 정책 (v3.4)

**답지 작성 시 tall display 블록 회피 원칙** (solution-author v1.6 프롬프트 편입):

- ❌ `\begin{align*}` 서술형 (ㄱ)(ㄴ)(ㄷ) 안 3줄 이상 등식 정렬
- ❌ `\[ 매우 긴 등식 \]` (4줄 이상 · 다중 등호)
- ❌ 인라인 nested dfrac (`$\dfrac{a + \tfrac{b}{c}}{d}$` 등)

**대체 패턴**:

- ✅ 단계별 인라인: `$x$좌표: $G_x = \dfrac{3a}{4}$ · $y$좌표: $G_y = \dfrac{59a}{36}$.`
- ✅ 결과 요약: `세 꼭짓점 좌표를 합해 $3$으로 나누면 $G(3a/4, 59a/36)$.`
- ✅ 단순 tfrac (좁은 컬럼 flow 유지)
- ✅ 필요 시만 display: 짧은 chain 2줄 이내

### `\answersheetsetup` v3.4 재조정

**변경**: `\let\tfrac\tfracdisplay` **폐지** (v3.3에서 추가했으나 인라인 nested tall math 유발 원인).

**이유**: 인라인 dfrac은 좁은 multicols 컬럼에서 paragraph flow 파괴 (tall inline math). 필요 위치는 `\[...\]` 디스플레이로 명시.

**최종 `\answersheetsetup` 구성** (v3.4):
```latex
\newcommand{\answersheetsetup}{%
  \raggedright%
  \emergencystretch=6em%
  \let\soltitle\soltitleexam%
}
```

3 defaults만 남김. tfrac→dfrac alias 폐지 · raggedcolumns 무효화도 폐지 (다시 raggedcolumns가 원래 동작).

## §서술형 소문항 (1)(2)(3) 세로 정렬 (v3.7.3 2026-07-13 세션 35 확립)

### 요구
- 문항번호(예: "13.") 옆에 **(1)이 바로 시작** (같은 줄)
- **(2)(3)은 다음 줄**에 (1)과 **동일 열** 정렬
- 답지 tex 사용법: `\soltitle{13}{(1) 답 \\ (2) 답 \\ (3) 답}{6}` (`\\`로 소문항 구분)

### 실패한 접근 3종 (기록 보존 · 재시도 금지)

| 방식 | 실패 양상 | 원인 |
|---|---|---|
| `\parbox[t]`·`minipage` | (1) 자체가 새 줄로 밀림 | 좁은 컬럼에서 minipage의 top-alignment가 예상대로 안 됨 |
| `\hangindent+\hangafter=1` | (1) 옆 시작 OK, but (2)(3) column 0으로 밀림 (indent 무효) | `\answersheetsetup`의 `\raggedright`+`\parskip`+`\@normalcr`(`\\`) 상호작용이 hangindent 리셋 |
| `\parshape 2 ...` | 위와 동일 (2)(3) column 0 | 같은 원인. multicols+raggedright 환경에서 parshape 무효화 |

### 성공한 접근: `\\` 재정의

`\soltitleexam` 내부 `\begingroup...\endgroup` 블록에서 `\\`를 로컬 재정의:

```latex
\settowidth{\solprefixwd}{\sffamily\bfseries\large #1.\hspace{10pt}}%
\begingroup
\def\\{\hfil\break\hspace*{\solprefixwd}\ignorespaces}%
\noindent{\sffamily\bfseries\large\color{vB-ink} #1.}\hspace{10pt}%
{\bfseries\color{black}#2}%
\par
\endgroup
```

**원리**: 각 `\\` 위치에서 `\hfil\break`(줄바꿈) + `\hspace*{\solprefixwd}`(문항번호+hspace 폭만큼 이동). 매 새 줄 시작에 명시적 hspace 주입으로 정렬 강제.

### `\solprefixwd`

`\@tempdima` 대신 전용 dimen (`\newdimen`). `\needspace` 등이 `\@tempdima`를 덮어쓰는 것 회피.

### 관련 파일

- `templates/style.sty` line 65~86 `\soltitleexam` (v3.7.3)
- `output/공통수학2/2026-2학기-와부고-예상-중간-1회/2026-2학기-와부고-예상-중간-1회-답지.tex` #13~#17 실전 검증

## 관련 정책 (v1.6)

- **solution-author v1.6** `.claude/agents/solution-author.md` §"v1.6 답지 multicols 조판 원칙" — tall display 회피 · 대체 패턴 · 인라인 dfrac 사용 기준 · align 대체 패턴

## 관련 메모리

- [[feedback_narrow_column_korean_spacing]] — 세션 32 4-Layer fix (문제.tex 대상, 답지 미적용 상태 → v3.3에서 답지도 편입)
- [[feedback_unified_exam_design_system]] — 시험지·답지 통합 디자인 (v3.2 골든)
- [[feedback_answer_sheet_golden_v3]] — 답지 v3.0 골든 (2026-07-07 확립, v3.3에서 defaults 시스템화)
