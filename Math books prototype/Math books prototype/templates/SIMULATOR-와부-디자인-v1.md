# SIMULATOR [와부] — 시험지 시리즈 디자인 단일 출처 v1.0

> 신설: 2026-07-30 세션 105 · 마스터 확정
> 계승: DeeP Math 형성평가 A형 (`output/공통수학2/DeeP-Math-평가시험지/DeeP-Math-형성평가-도형의방정식-A형-문제.tex` v0.9)
> 🥇 **골든 회차**: `output/공통수학2/2026-2학기-와부고-재현-중간-1회/` (`재현-1회-문제.tex` · `재현-1회-답지.tex`)

---

## 0. 시리즈 정체

**와부고 출제 페르소나 재현 전용 시험지 시리즈.** 실제 와부고 원본 기출의 출제 페르소나를 우리 자산으로 재현한다(변형 아님·페르소나 창작).

- 교재명: **시뮬레이터 [와부]** · 표기 **`SIMULATOR [와부]`** (영문 + 한글 대괄호)
- 회차 표기: **`NO.N`** (`\examvol`)
- 🔴 **와부고 전용.** 통합 시스템 편입 금지 — [[feedback_wabu_persona_school_exclusive]]
- 콘텐츠 단일 출처: [`bank/와부고-출제-페르소나-v1.md`](../bank/와부고-출제-페르소나-v1.md) · 채점 [`bank/와부고-충실도-루브릭-v1.md`](../bank/와부고-충실도-루브릭-v1.md)

### 🔴 종전 값 폐기
딥매쓰 A형 이식 시 따라온 대타이틀 **`Formative Assessment`** 는 폐기됐다. 중간고사 재현과 어긋난다는 검수 지적(INFO)이 있었고 마스터가 시리즈명을 확정했다. **다음 회차가 딥매쓰 골든을 복사해 `Formative Assessment` 에서 시작하지 않도록 이 문서를 먼저 읽어라.**

---

## 1. 헤더 (`\examheader` · 1페이지)

딥매쓰 A형 시안 A v3 구조를 계승하되 **3개 요소를 변경**했다.

```
┌──────────────────────────────────────────────────────────────┐
│ ─────────────────────────────────────────────────  (hairline)│
│ DEPTH & INSIGHT                        2026 · 2 SEMESTER     │  (2)
│                                                              │
│ SIMULATOR [와부]                                    NO.1     │  (3) ★변경
│ 도형의 방정식 · 집합과 명제                                     │  (4)
│ ─────────────────────────────────────────────────            │
│ RANGE          │  ITEMS · POINTS  │           TIME           │  (5)
│ 대단원 1 · 2    │  17문항 · 100점   │           50분           │
│ ─────────────────────────────────────────────────            │
│ 선택형 12문 · 서술형 5문              이름 [           ]        │  (7) ★변경
│ ═════════════════════════════════════════════════            │
└──────────────────────────────────────────────────────────────┘
```

### (3) 대타이틀 — ★ 변경

**확정 위계 (2026-07-30 실측)** — 3단:

| 요소 | 크기 | 굵기 | 사유 |
|---|---|---|---|
| `SIMULATOR` | **32pt** (기준) | **bold** | 교재명 · 최강조 |
| `[와부]` | **0.6배 = 19.2pt** | mdseries | 32pt bold 동급이면 한글 optical weight 가 커서 브랜드를 누른다 |
| `NO.N` | **0.55배 = 17.6pt** | mdseries | `[와부]` 보다 한 단계 더 낮춰 「교재명 → 종속표기 → 회차」 3단 위계 |

### 🔴 크기를 절대 pt 로 박지 마라 — `\f@size` 비례로 둔다

`\examround`·`\examvol` 은 p1 대타이틀(32pt)뿐 아니라 **p2 이후 러닝헤드**(`style.sty:174` · `\large`)에서도 쓰인다. 19pt 로 고정하면 **러닝헤드에서 종속표기가 교재명보다 커진다.** 따라서 `\makeatletter` 블록 안에서 현재 폰트 크기 비례로 정의한다:

```latex
\makeatletter
\renewcommand{\examround}{SIMULATOR\,{\fontsize{\the\dimexpr\f@size pt*3/5\relax}{\f@baselineskip}\selectfont\mdseries [와부]}}
\renewcommand{\examvol}{{\fontsize{\the\dimexpr\f@size pt*11/20\relax}{\f@baselineskip}\selectfont\mdseries NO.1}}
\makeatother
```

헤더 (3)행:
```latex
  \noindent
  {\fontsize{32pt}{34pt}\selectfont\sffamily\bfseries\color{black}%
    \examround\hfill\examvol}%
```

- 세 요소는 **같은 베이스라인**. `\raisebox` 로 띄우지 않는다 (masthead 관례)
- 🔴 종전 `\mdseries` 32pt 는 "빈약하다"는 마스터 지적으로 **`\bfseries` 로 변경**
- 🔴 `[와부]` 를 작게·`\mdseries` 로 둔 **부수 이득**: 32pt bold 로 한글을 렌더할 때의 폰트 폴백 위험이 사라진다. 실측 `Missing character` **0건**
- **회차 변경은 `\examvol` 의 `NO.1` 한 곳만 고친다** (`NO.2`, `NO.3` …)
- p1 대타이틀과 p2~ 러닝헤드에서 **같은 위계가 유지됨을 실측 확인**했다

### (3b) 🔴 p2 이후 러닝헤드 — **SIMULATOR 만 중앙 정렬** (2026-07-30 마스터 확정)

**문제**: `style.sty` 의 `\fancyhead[C]` 는 `SIMULATOR [와부] NO.1` **전체**를 중앙 정렬한다.
종속표기가 오른쪽에 붙어 있으므로 **교재명 SIMULATOR 가 왼쪽으로 밀린다.**

**마스터 판단**: `[와부] NO.1` 은 **주석 같은 느낌**이므로 중앙 위치 계산에 넣을 필요가 없다.
정렬 기준은 **교재명 SIMULATOR 하나**다.

**해법** — 종속표기에 **폭 0** 을 주어 정렬에서 제외한다. 회차 `.tex` 프리앰블에 추가:

```latex
% p2~ 러닝헤드: SIMULATOR 를 정확히 중앙에 두고 종속표기는 폭 0 으로 오른쪽 오버행
\makeatletter
\renewcommand{\examrunhead}{%
  SIMULATOR\makebox[0pt][l]{\,{\fontsize{\the\dimexpr\f@size pt*3/5\relax}{\f@baselineskip}\selectfont\mdseries [와부]\ NO.1}}}
\makeatother
```

- `\makebox[0pt][l]{...}` — 내용을 **폭 0** 으로 만들고 왼쪽 기준으로 오른쪽에 흘린다.
  따라서 중앙 정렬 계산에는 `SIMULATOR` 만 들어간다
- `\examrunhead` 는 `style.sty` 의 **훅**이다 (기본값 `\examround\ \examvol` = 종전 동작)
- 🔴 **`style.sty` 의 `\fancyhead[C]` 를 직접 고치지 마라** — 전 시리즈 공용 단일 출처라
  딥매쓰 등 다른 시리즈 러닝헤드가 함께 바뀐다 ([[feedback_style_change_regression_guard]])
- **p1 대타이틀은 그대로 둔다** — `\examround\hfill\examvol` 은 세로줄 헤더 안에서
  좌우 양단 정렬이므로 이 문제가 없다. 변경 대상은 p2 이후 러닝헤드뿐이다

### (7) 구성 + 이름 — ★ 변경

```latex
  {\sffamily\footnotesize\color{black}%
    선택형 12문 \textperiodcentered\ 서술형 5문%
    \hfill
    이름\ [\hspace*{55mm}]}%
```

- 🔴 **`\examsection` 배지를 쓰지 않는다.** 구간 정보는 이 줄에 통합한다
  - 배지 방식(p1 선택형 / p4 서술형)은 **p4 배지가 페이지 세로 분할선을 관통**해 폐기됐다(검수 D8 감점 요인). 문구를 줄여도 근본 해결이 안 된다
- 배점 분해(52/48)는 **적지 않는다** — (5) 그리드 `17문항 · 100점` 과 각 문항 `[N점]` 에 이미 있어 중복

---

## 1b. 🔴 답지 대타이틀 — 한글 폰트·자간 (2026-07-30 세션 105 마스터 확정 · 실물 4회 확인)

### 확정값

```latex
% 대타이틀 전용 한글 폰트 — 본문에는 적용하지 않는다
\newhangulfontfamily\titlehangul[BoldFont={Malgun Gothic}]{Malgun Gothic}

\renewcommand{\dmseriesname}{SIMULATOR\,\mbox{[와부]}\, NO.1}
\dmanswerheader{SIMULATOR\,\mbox{\titlehangul [와부]}\, NO.1\\
  \mbox{\titlehangul 도형의 방정식 \textperiodcentered\ 집합과 명제 정답 및 해설}}
```

### (1) 🔴 한글 자간 벌어짐 — 원인은 폰트가 아니다

**증상**: `[와부]` → `[와 부]` · 부제 → `도 형 의 방 정 식` (음절마다 자간 삽입)

🔴 **원인은 정렬 과정에서 늘어난 `\XeTeXlinebreakskip` 글루다.** xetexko 는 한글 음절 사이에 분리 가능 글루를 넣고, 그것이 늘어나면 이렇게 보인다.

**폰트를 바꿔도 해결되지 않는다** — 실측으로 확인했다:
- ✗ `\setsanshangulfont{Noto Sans KR}` → 그대로 (설치본이 `NotoSansKR-VF.ttf` 가변 폰트)
- ✗ 한글 구간을 `\rmfamily` 로 되돌림 → 그대로
- ✅ **`\mbox{}` 로 감싸기** → 해소. 줄바꿈 지점이 사라지므로 글루가 늘어날 여지가 없다

**규칙**: 대타이틀·러닝헤드의 한글 구간은 **반드시 `\mbox{}` 로 감싼다.**

### (2) 폰트·굵기 — 맑은 고딕 **Regular**

`dm-answer-classic.sty` 는 `\setmainhangulfont`(Noto Serif KR) 만 지정하고 산세리프 한글이 없어 헤더의 `\sffamily` 한글이 폴백된다. 대타이틀 전용 패밀리를 만들어 해소한다.

🔴 **`BoldFont` 에 Regular 를 못박는 것이 핵심**이다. `\dmanswerheader` 가 `\bfseries` 를 걸기 때문에 `BoldFont` 를 지정하지 않으면 굵은 face 로 올라가 위계가 깨진다.

**굵기 확정 이력** (마스터 실물 확인 4회 · 재시행착오 방지용 기록):

| 후보 | 마스터 판정 |
|---|---|
| 나눔바른고딕 Bold | "너무 얇았어" |
| 맑은 고딕 Bold + `FakeBold=1.2` | "너무 두꺼워" |
| 맑은 고딕 Bold | "지금보다 얇게 · **SIMULATOR 보다 얇아야 해**" |
| **맑은 고딕 Regular** | ✅ **확정** |

**원칙**: 한글 종속표기는 **크기(0.6배) + 굵기(Regular)** 두 축으로 위계를 이중 확보한다. `SIMULATOR` 가 단독 최강조다.

**적용 범위**: **대타이틀만.** 본문·풀이는 Noto Serif KR 그대로 둔다 (`sty` 무수정).

### (3) 🔴 빠른 정답표 — 답을 일부만 기재하지 않는다

마스터 확정: *"칸이 모자라면 칸을 늘이면 되지 어떻게 정답지에 답을 일부만 기재하나?"*

`dmquickgrid` 는 `tabular*{\linewidth}{lllll}` 5단 고정이다. 서술형 소문항 3개를 한 셀에 넣으면 넘친다(실측 156pt). **`\multicolumn` 으로 셀을 병합해 폭을 확보한다.**

```latex
\dmquick{11}{…} & \dmquick{12}{…} & \multicolumn{3}{@{}l}{\dmquick{13}{…}} \\
\multicolumn{2}{@{}l}{\dmquick{14}{…}} & \multicolumn{3}{@{}l}{\dmquick{15}{(1) … (2) … (3) …}} \\
\multicolumn{5}{@{}l}{\dmquick{16}{(1) … (2) … (3) …}} \\
```

🔴 **`@{}` 를 반드시 붙인다.** `\multicolumn{n}{l}` 의 `l` 은 `\tabcolsep` 를 다시 붙이는데, `tabular*` 의 `@{\extracolsep{\fill}}` 는 통상 컬럼의 padding 을 대체하므로 **multicolumn 셀만 오른쪽으로 밀려 행 시작선이 어긋난다** (마스터 지적: "11 14번이 선이 안맞아").

🔴 **`\dmquick` 호출 개수·순서를 유지한다** — 번호가 `dmslotcount` 자동 카운터라 순서가 바뀌면 번호가 틀린다.

🔴 **분수는 `\dfrac`** — `\tfrac` 은 빠른 정답표에서 너무 작다 (마스터 지적).

## 2. 계승 항목 (딥매쓰 A형 v0.9 그대로 · 변경 금지)

- **완전 검정 팔레트** — `vB-*` 8색을 회차 파일에서 HTML `000000` 재매핑. 🔴 `style.sty` 무수정
- **세로 분할선** — `zref-savepos` 좌표 기반 · `\dmvlinetop`/`\dmvlinebot` · **2-pass 필수**
- `headrule`/`footrule` + `examfooter` (학원로고 우하단)
- **`problem` 환경** — 번호 inline · 검정 · `\pts` · `\pointbadge` 빈 정의
- **`\pagecolumnpair`** — 선택형 페이지 세로 컬럼 우선 (옵션 A: Q1좌상·Q2좌하·Q3우상·Q4우하)
- **`\probsource` 로컬 재정의** — `\scriptsize\sffamily\color{black}`
- p1 `examheader` 종결 `\addvspace{2mm}`

---

## 3. 답지 (`dm-answer-classic.sty` 기반)

🔴 **`dm-answer-classic.sty` 를 수정하지 마라.** 8권이 공유하는 단일 출처다 — [[feedback_style_change_regression_guard]]

```latex
\renewcommand{\dmseriesname}{SIMULATOR [와부] NO.1}      % 매 페이지 우상단 fancyhead[R]
\dmanswerheader{SIMULATOR [와부] NO.1\\ <단원명> 정답 및 해설}   % p1 대타이틀 (2행)
```

- `\dmseriesname` 은 sty에 **이미 있는 시리즈 슬롯**(기본값 `Deep{:}it`). 신규 매크로를 만들지 말고 이것을 재정의한다
- p1 은 `dmanswertitle` 페이지스타일이라 `fancyhead` 가 없다 → **대타이틀에도 병기**해야 1페이지에서 시리즈명이 보인다
- 대타이틀 인자에 `\\` 로 **줄바꿈 위치를 명시**한다. 한 줄로 두면 낱말 중간(`도형의 방/정식`)에서 끊긴다
- ⚠️ **알려진 현상**: p1 대타이틀에 글자 신축(`도 형 의 방 정 식`)이 있다. sty의 `halign=center` 특성이며 **딥매쓰 골든에도 원래 있던 것**이다. 없애려면 sty를 `flush center` 로 바꿔야 하는데 단일 출처 수정이라 보류 상태다 (마스터 판단 대기)
- 🔴 **`\para` 정의를 회차 파일에 넣어라** — `dm-answer-classic.sty` 는 `style.sty` 를 로드하지 않아 `\para` 가 없다:
  ```latex
  \newcommand{\para}{\mathbin{/\mskip-5mu/}}
  ```
- 🔴 **축 라벨에 `fill=white` 금지** — 화살촉 갈래를 지운다. [[feedback_label_placement]] L21 · L99 준수

---

## 4. 신규 회차 착수 절차

1. **이 문서 + `bank/시리즈-조판-지침-매핑.md` §2 exam · §2b 그래프 축 정독**
2. 🥇 골든 회차 폴더를 **복사 → 최소 교체** (새로 작성 금지 · CLAUDE.md 안전 절차 1)
3. `\examvol` 을 새 회차 번호로 (`NO.2` …) · `\dmseriesname` 도 동일 회차로
4. 콘텐츠는 페르소나 v1.1 + 청사진 스키마로 출제
5. 게이트: `node scripts/gate.mjs <파일>` · `node scripts/gate.mjs --phase 난이도 <문제.tex>`
6. 🔴 **D1 기준 확인**: $\min(\text{comp}_{10},\text{comp}_{11},\text{comp}_{12}) > \max(\text{comp}_{1..9})$ — 루브릭 D1 §정량 기준
7. 검수 3종(`problem-review`·`solution-review`·`exam-review`) → 충실도 9차원 채점

---

## 5. 이 시리즈에서 확정된 정책 (회차 간 계승)

| 항목 | 확정 |
|---|---|
| **답 청결 ↔ 예측저항 상충** | **P 우선.** 지문형 킬러의 근호 답을 정수화하지 마라 (단일 근호까지 허용 · 이중근호 금지) — 페르소나 §6-5 |
| **발문 방법 지시** | 금지. "~를 소거하는 과정이 나타나도록" 류는 풀이법 노출이다. 서술형은 `(각 과정을 논술할 것)` 중립 문구만 — [[feedback_unused_phrasing_not_novel]] |
| **1차 봉우리** | #10·#11·#12 **세 슬롯 모두** 앞 9슬롯을 상회해야 성립. 단독 스파이크 불가. **중간 구간(#6~9)을 강화하면 봉우리 하한이 함께 올라간다** |
| **자기복제** | 예상 중간 1~12회차 전체가 회피 대상. 🔴 **4-gram 유사도는 mechanism 복제를 못 잡는다**(구 #10이 11.1%였으나 실질 동일) — 프레임·발문 장치 층위까지 의미 판정으로 확인하라 |
| **소문항 발문** | 60자 이내 (`bank/발문-금지-워딩.md` §8.4) |
| **평행 기호** | `\para` (기울어진 `//`) · `\parallel` 금지 |
| **금지어** | 매개변수(미적분Ⅱ) · 정합 · 조각함수 · 여사건 · 이중근호 · "정확히 N개" · 외국 수학자 이름 |

관련: [[feedback_wabu_persona_school_exclusive]] · [[feedback_ssot_routing_gap]] · [[feedback_unified_exam_design_system]] · [[feedback_exam_design_v3]]
