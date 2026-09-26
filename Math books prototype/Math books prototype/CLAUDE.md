# 수학 교재 제작 프로젝트

## 🔴🔴 최우선 지침 — 사람처럼 쓴다

> **마스터 (2026-08-02)**: 「**AI 처럼 말하지 마. 사람처럼 말해. 이건 절대 지침이야.**
> 그래야 업무 소통이 원활하고 작업의 질과 속도를 올릴 수 있어.」·「**언어가 최우선 지침이야.**」

- **한 문장에 한 가지만** 담는다. 조건이 겹치면 문장을 나눈다
- **낱말을 지어내지 않는다.** 꼭 써야 하면 그 자리에서 한 줄로 풀어 쓰고 [`bank/용어-사전.md`](bank/용어-사전.md) 에 올린다. 못 풀어 쓰겠으면 안 쓴다
- **보기를 든다.** 「분기 꼴은 몇 할이 둘이다」가 아니라 「(1)에서 $a$ 를 구하고 (2)와 (3)이 각각 그 $a$ 를 쓴다」처럼
- **줄임말·코드명 금지** — 판정자 하나·둘, 문항, ★ 4 처럼 풀어 부른다

`node scripts/용어-검사.mjs` 가 쓰지 않기로 한 낱말을 잡는다. 착수 게이트에 물려 있다.
관련: [[feedback_speak_like_a_person]] · [[feedback_explain_without_jargon]] · [[feedback_korean_axis_names]]

## 🔴🔴 모든 작업의 진입점 — [`bank/통합관리-시스템-v1.md`](bank/통합관리-시스템-v1.md)

**모든 지침과 작업은 통합관리 시스템을 통해서만 이루어진다** (마스터 지시 2026-08-01).

```bash
node scripts/system-check.mjs      # 🔴 RED 0 이어야 착수
```

🔴🔴 **세션을 마칠 때는 마무리 게이트 넷을 돈다** (통합관리 §4-2 · 🔒 마스터 확정 2026-08-04):
① 전 교재용으로 올릴 것 고르기 → ② 그 학교 전용으로 올릴 것 고르기 → ③ **올린다** → ④ 인수인계 갱신.
**착수 게이트가 있듯 마무리 게이트가 있다.** 미루지 않는다.

| 영역 | 상태 | 하는 일 |
|---|:-:|---|
| **조판** | ✅ **완성** | **적용만** — 판단하지 마라 |
| **저작권** | ✅ **완성** | **적용만** — 🔴 **교육청 기출은 공개 자료다. 우리 배포물에 싣는다** (`\probsource` 로 출처 표기) |
| **문항 난이도** | 🔴 **미완성** | 작업 대상 — `bank/앵커시스템-SSOT-v1.md` |

🔴 **완성 영역에서 「이게 맞나?」를 다시 묻지 마라. 그것이 도돌이표의 정체다.**
🔴 **제약이 있다고 느껴지면 통합관리 §2 재론 금지 목록을 먼저 본다. 없으면 마스터에게 묻는다.
혼자 제약을 발명하지 않는다.**

### 🔴🔴 제약 인용 규칙 (말버릇 · 예외 없음)

> **「~는 안 된다 / 못 한다 / 금지다 / 제한된다」를 말할 때는 반드시 `파일:줄`을 함께 댄다.
> 못 대면 그 자리에 「확인 안 함」이라고 쓴다.**

「해석하지 마라」류 재발방지 규칙은 이미 **8건** 걸려 있고 전부 실패했다 —
**실패가 판단하는 순간에 일어나지 않기 때문**이다. 파일 한 줄을 읽고 제약이라 믿을 때,
그것은 **해석이 아니라 관찰로 느껴진다.** 그래서 이 규칙은 상황 인식이 아니라
**문장 형태**에만 건다. 상세: `bank/통합관리-시스템-v1.md` §2

---

고등학교 수학 교재를 제작한다. 참고 교재 분석 → 독자적 고품질 교재. 현재 공통수학1·2 중심.

## 디렉토리 구조
```
Math books/
├── CLAUDE.md              # 이 파일 (라우팅 인덱스)
├── .claude/               # settings.json · agents/
├── 참고자료/              # 시판 교재 PDF (읽기 전용)
├── output/                # 제작물 (.tex + .pdf)
├── templates/             # LaTeX 템플릿·style.sty
├── bank/                  # 문제은행·정독 파일·정책 문서
├── scripts/               # 자동화 도구 (116종)
└── logo/                  # 학원 로고
```

## 교재 시리즈
- **시험지** (testpaper·학교시험) — `\pointbadge{N}` 점수, 100점 만점 정합 의무
- **정리편·유형편·연습편** — `\dota`·`\dotb`·`\dotc` 도트, 점수 개념 없음
- **테스트지** — 15문/4페이지, `\dota`~`\dote` 5단계

## 단원 구성 (2022 개정교육과정)

**공통수학1** (4단원, CM1)
1. 다항식 (PL) · 2. 방정식과 부등식 (EQ) · 3. 경우의 수 (CB) · 4. 행렬과 그 연산 (MX) *(신규)*

**공통수학2** (우리 책 4단원 구성, CM2)
1. 도형의 방정식 (GM) · 2. 집합과 명제 (ST) · 3. 함수 (FN) · 4. 유리함수와 무리함수 (RF)

문제은행: `bank/공통수학{1,2}/*.md`. 코드: `{과목}-{단원}-{일련번호}` (예: `CM2-FN-001`).

### 대수 라인 (2026-06-18 통합)
`book redesign/` 흡수. 마플시너지 기반 CM1 재편집. 상세 위치·워크플로우: [`bank/대수/README.md`](bank/대수/README.md). 코드 prefix `CM1-{단원}-A###`, `bank/대수/problems/`에 분리 등록.

## 교육과정 용어 제약 (CM1·CM2 공통)

단일 출처: [`bank/CM1-교과과정.md`](bank/CM1-교과과정.md) — 허용/금지·상위 과정 침투·검수 grep 키워드 전체.

**최우선 RED 요약**:
- 🔴 CM1 즉시 거부: `A^{-1}` · `tr A` · $\cup\cap\setminus$ · $\sum\prod\int\lim$ · $\vec{}/\overrightarrow{}$ · 두 종류 무리수 켤레
- 🔴 상위 과정 기본형 침투 금지 (CM1 관점): 사차 부호표·등차/등비수열·중복조합/원순열/이항정리
- ✅ 산술기하평균 (절대부등식): **CM2 §집합과 명제** 정규 교과 · CM2에서는 도구로 자유롭게 사용 · CM1에는 침투 금지
- ✅ 케일리해밀턴: 답지 인용 허용
- 관용 금지: 정합·자기역함수·Viète·"분자분모" (풀어쓰기)·외국 수학자 이름
- 관련 메모리: [[feedback_curriculum_terms]] · [[feedback_cm1_curriculum_single_source]]

## 🔴 출력 규칙 — ★ 표기 띄어쓰기 (강제, 예외 없음)

모든 텍스트에서 `★` 다음 숫자에 **공백 1칸 필수**. `★3` → `★ 3`, `★4·5` → `★ 4·5`, `**★5**` → `**★ 5**`, 표 셀·라벨 결합 모두 동일.

**적용 외**: YAML/JSON 필드 (`star: 5`) · LaTeX 매크로 (`\dota`) · 코드 블록 내 변수명.

**자체 점검 의무**: 송신 직전 정규식 `★\d` 패턴 자체 검토. 관련: [[feedback_star_spacing]]

## 수학 표기
- LaTeX (인라인 `$...$`, 블록 `$$...$$`), 좌표 `(x,y)`, 점 `\mathrm{P}(a,b)`
- **수식 줄바꿈·디스플레이 배치 규약** (5개 규칙): [[feedback_display_math_layout]] · [[feedback_inline_matrix_display_split]]
  - 긴 인라인 수식 금지 (등호/부등호 2개↑ 또는 12em↑) → 디스플레이 분리
  - 디스플레이 뒤 짧은 텍스트 (50자↓) 금지 → 디스플레이를 문장 끝에 배치
  - 디스플레이 끝 마침표(문장 종료)·쉼표(단계 이음) 명시
  - 🔴 **소스 검사**: `node scripts/인라인수식-줄바꿈-검사.mjs <파일.tex>` (2026-08-04 세션 111 신설·훅 배선 완료)
    - 관문 넷으로 좁힌다 — 조건제시법 집합 제외 · 관계기호 2개↑ · 등호 있음(범위 표기 제외) · 폭 11↑
    - 🔴 **`check-display-math.mjs` 는 빌드 로그만 읽어 이 결함을 못 본다.** 실제로 Overfull·Underfull 0건인데 수식이 끊긴 사례가 있다
    - 🔴 이 도구는 **「위험하다」고만 말한다. 끊겼는지는 PDF 를 눈으로 봐야 안다** — [[feedback_gate_skip_hides_the_defect]]

## 난이도 체계 (★ 1~5)

### 🔴🔴 앵커 시스템 — 난이도 판정의 최우선 진입점

**단일 출처: [`bank/앵커시스템-SSOT-v1.md`](bank/앵커시스템-SSOT-v1.md)**
🔴 **앵커·난이도 판정 작업에 착수하기 전 이 파일부터 읽는다.** 다른 문서와 값이 어긋나면 이것이 이긴다.

```bash
node scripts/anchor-system-check.mjs      # 🔴 RED 0 이어야 착수 가능
```

**절대 규칙 4개** (상세는 SSOT):
- 🔴 **정답표는 사다리다. 학평 문번으로 평가하지 않는다** (마스터 확정 2026-08-01)
- 🔴 **앵커 수를 그럴듯한 관찰로 바꾸지 마라** — 바꾸려면 **실험 결과를 인용**한다. 현행 **CM2 32 · CM1 27**
  🔒 다만 **「견줄 대상이 없다는 보고가 올 때마다 보강한다」가 마스터 확정 원칙**이다 (2026-08-01). 보강으로 느는 것은 이 규칙에 걸리지 않는다. **관찰로 줄이거나 늘리는 것**이 걸린다
  〔정정 2026-08-04 세션 112〕 종전 기재는 ~~「CM2 29」~~. **네 번째다.** 세션 111 에 31 로 늘려 놓고 **이 줄 · 아래 사다리 줄 · MEMORY.md · 사다리 파일 머리글 넷을 다 안 고쳤다.** 게이트가 못 잡은 까닭은 **게이트가 보는 곳이 SSOT 와 사다리 본문뿐**이라서다. 🔴 **앵커를 보강하면 고칠 곳이 여섯이다** — 사다리 본문 · 사다리 머리글 · SSOT · 게이트 선언값 · CLAUDE.md 두 줄 · MEMORY.md
  〔정정 2026-08-03 세션 110〕 종전 기재는 ~~「CM2 19」~~. **또 같은 사고다** — 2026-08-03 에 서술형 넷과 지문형 다섯을 보강해 넣고 이 줄의 수를 안 고쳤다. 판정자 셋이 「지문형 앵커가 없다」를 독립으로 신고한 데 따른 보강이다 (`bank/measurements/앵커보강-CM2-지문형-v1.md`)
  〔정정 2026-08-02 세션 109〕 종전 기재는 ~~「CM1 21」~~. 2026-08-01 에 앵커 여섯을 보강해 넣고 **칸 제목의 수를 안 고쳐** 옛 수가 남아 있었다. **숫자를 바꾼 것이 아니라 세다 만 것을 마저 센 것**이다 (SSOT §2 는 이미 27 이었다)
- 🔴 **시판 앵커는 3단 게이트 필수** — 시판 교재가 학평 문항을 그대로 싣는 사례가 **3건** 확인됐다
- 🔴 **`tier_mapping`·`star_premium`·`premium_ratio` 를 등급 근거로 쓰지 마라** — 전부 관대하거나 이름뿐

관련: [[feedback_anchor_count_undecided]] · [[feedback_ladder_is_the_answer_key]] · [[feedback_anchor_selection_rules]]

---

### 🔴🔴 판정은 하나다 — 셋을 보고 하나를 정한다 (2026-08-02 세션 109 확정)

> **「이 문항은 어느 앵커와 같은 급인가.」 답은 칸 하나다.**

그 하나를 정할 때 **셋을 본다. 셋 다 판정을 올리고 내린다.**

| 보는 것 | 판정을 어떻게 움직이나 |
|---|---|
| **깊이** | 학생이 스스로 만들 것이 많으면 위로 |
| **연산 부담** | 첫 줄은 써지는데 손이 많이 가면 위로 |
| **해석·독해 부담** | 무슨 말인지 알아내는 데 품이 들면 위로 |

- 🔴 **셋에 값을 따로 매겨 더하거나 평균 내지 않는다.** 판정자가 내놓는 값은 하나다
- 🔴 **얽힘·짜임은 접었다** — 되살리지 마라 (통합관리 C30)
- 🔴 **점수를 매기는 것이 목적이 아니다** — 학교 기출을 구현하는 것이 목적이다 (C31)
- **사다리**: `bank/anchors/깊이-앵커-사다리-v1.md` (CM2 **32문**) · `-CM1-v1.md` (CM1 27문)
- **보기집** (판정용 아님 · 출제·설명에 쓴다): `연산부담-사다리-v1.md` · `해석독해부담-사다리-v1.md`

---

〔옛 점수 체계 — 기록으로만 둔다〕 [`bank/schema.md`](bank/schema.md) v3.0 3층 모델 M·I·X ·
v5.1 8축 N·L·T·H·R·F·E·P. 🔴 **난이도 판정에 쓰지 마라.** 점수 합산 방식이라 세션 106 에 접었다.
문제은행 YAML 스펙·대상층·변형 정책은 그대로 유효하다. 관련: [[feedback_difficulty_system_v4]]

## 문제 변형 정책 (최소 변형 원칙)
- **1순위 숫자만 변경** — 계수·상수만, 구조·아이디어 100% 보존
- **2순위 동등 변형** — 표현만 살짝 (풀이 절차 유지)
- **금지** — 통찰이 흐려지는 변형

**출제 시 7요소 의무 명시** (schema.md §7 v3.0): 단원·유형·target ★·대상층·선호 통찰 유형+횟수·M 프로파일·같은 통찰 유형 앵커 2개·출처·변형 정책.

## 문제은행 (bank/)
```
bank/
├── schema.md          # 단일 출처 (v3.0)
├── INDEX.md           # 등록 문제 목록
├── anchors/           # 단원별 ★1~5 × 5문 표준 앵커
└── problems/          # 1파일 = 1문제 (YAML + 본문)
```

## 🌟 통합 문제출제 시스템 v1.0 (2026-07-19 세션 49 확립)

**모든 교재 (시험지·정리편·유형편·연습편·테스트지)는 이 프레임워크로 제작**. 시리즈 = 변수, 시스템 = 상수.

### 6-Layer 계층
```
L6 Asset & Archive     refresh-all · usage-log · master-policy-registry
L5 Review (검수)       problem-review · solution-review · exam-review · independent-solve
L4 Gate 5.0 (자동)     14 필수 + 시리즈 확장 3~5
L3 Content Author      problem-author v2.0 (시험지) · concept-author v1.0 (정리편·유형편·연습편)
L2 Blueprint           청사진.yaml v6.1 스키마
L1 Source Bank         정독 파일 (star 1~premium)
```

### 단일 출처 문서
- 청사진 스키마 v6.1: [`bank/청사진-스키마-v6.1.md`](bank/청사진-스키마-v6.1.md)
- Gate 5.0 명세: [`bank/Gate-5.0-명세.md`](bank/Gate-5.0-명세.md)
- 정독 tier 매핑: [`bank/mechanism-데이터-정독-tier-매핑.md`](bank/mechanism-데이터-정독-tier-매핑.md)
- 에이전트: `.claude/agents/problem-author.md` v2.0 · `concept-author.md` v1.0

### 시리즈별 진입점 (신규 착수 시 최우선 호출)
- `series_type: exam | testpaper` → **problem-author v2.0**
- `series_type: jeongribyeon | yuhyeongpyeon | yeonseubpyeon` → **concept-author v1.0**

### 원본 은행 tier
| 시리즈 | 원본 은행 | star 범위 |
|---|---|---|
| 시험지 | 고쟁이 STEP 2·3 + 블랙라벨 STEP 2·3 | star 5·premium |
| 정리편·유형편·연습편 | 개념원리 + RPM + 고쟁이·블랙라벨 STEP 1 | star 3·4 (+ star 5 소수) |

관련: [[feedback_universal_publishing_framework_v1]] · [[feedback_gate_5_0_series_agnostic]] · [[feedback_concept_author_agent]] · [[feedback_problem_author_agent]]

## 작업 흐름 (7단계)

**단일 출처**: [`bank/workflow.md`](bank/workflow.md) — v3.1 상세 3.0~3.10 서브단계 (원본 pick·저작권 유사도·usage-log·구조 시그니처·정의박스 회고·layout 자동 결정·First Draft 5축 등) 전체.

1. **계획**: book.yaml 작성
2. **앵커 점검**: `bank/anchors/{과목}-{단원}.md`
3. **카탈로그 셀렉** (★ 4·5): `bank/4점-패턴-카탈로그/`
4. **출제 (1차 안전망)**: 7요소·M·I 채점·앵커 2문 비교·mathjs 답 검증
5. **🔴 Gate 5.0 자동 차단** — 필수 14개 도구 모두 호출 의무. RED 0 도달까지 다음 단계 진입 금지
6. **검수 (2차 안전망)**: problem-review · solution-review · exam-review · 독립 풀이. 클로드 직접 검수 금지 — 전용 에이전트 호출 의무
7. **빌드·마무리**: xelatex 2-pass, Overfull/Underfull 0, 앵커 등록·메모리 갱신

**완성본 자동 검수** — 트리거 시 3축 (난이도·용어·세련도) 의무. 단일 출처: [`bank/검수-절차.md`](bank/검수-절차.md).

## LaTeX 빌드

**유형편** (`output/공통수학N/`):
```powershell
$env:TEXINPUTS = "../../templates;"
xelatex -interaction=nonstopmode 파일.tex   # 표지 TikZ overlay → 2회
```

**시험지·답지** (`output/공통수학N/YYYY-학교-회차/`):
```powershell
$env:TEXINPUTS = "../../../templates;."
xelatex -interaction=nonstopmode 회차-문제.tex
xelatex -interaction=nonstopmode 회차-답지.tex
```

**단일 출처 3파일** (canonical, 로컬 사본 없음):
- `templates/style.sty` — 시험지·답지 스타일 (블루 vB 팔레트, 전체 매크로)
- `templates/figures-cb.sty` · `templates/figures-eq.sty` — 단원별 그림 매크로

**활성 골든 폴더**:
- `output/공통수학1/2026-1학기-기말예상-1회/` (CM1)
- `output/공통수학2/2026-2학기-와부고-예상-중간-1회/` (CM2)
- `templates/시험지-템플릿-v3-CM2/` (신규 시작점)

**디자인 단일 출처**:
- **SIMULATOR [와부]** (와부고 재현 전용 시험지 시리즈): [`templates/SIMULATOR-와부-디자인-v1.md`](templates/SIMULATOR-와부-디자인-v1.md) — 🔴 와부고 회차는 이것을 먼저 정독. 딥매쓰 A형 골든을 그대로 복사하면 폐기된 `Formative Assessment` 로 시작한다
- 🔴🔴 **제작 절차 단일 출처**: [`bank/와부고-시험지-제작-워크플로우-v1.md`](bank/와부고-시험지-제작-워크플로우-v1.md) — **실기출과 맞대어 급 분포를 맞추는 일곱 걸음**. 세션 109 에 네 번 돌려 차이를 0.53 → **0.04** 로 좁혔다. 🔴 **절차는 전 교재용이고 숫자(17문·배점·분포)만 와부고 전용**이다 (통합관리 §0-2)
- 학교 시험 스타일: [`templates/시험지-학교시험-v3.md`](templates/시험지-학교시험-v3.md)
- 유형편: [`templates/유형편-디자인.md`](templates/유형편-디자인.md)
- 테스트지: [`templates/테스트지-디자인.md`](templates/테스트지-디자인.md)
- 답지: [`templates/답지-디자인-v2.md`](templates/답지-디자인-v2.md)

관련: [[feedback_unified_exam_design_system]] · [[feedback_exam_design_v3]] · [[feedback_answer_sheet_golden_v3]]

## 🔴 시험지·유형편·답지 작성 안전 절차 5원칙

**1. 기존 유사 파일 복사 → 최소 교체** (새로 작성 금지). style.sty 정의 매크로만 사용, 임의 매크로 이름 금지.

**2. 빌드 로그 전수 검토** — `Output written` 라인 신뢰 금지. `grep -E "! LaTeX|Undefined|Missing|Not allowed" *.log` 결과 비어있어야 성공.

**3. 첫 빌드 후 PDF 시각 확인 요청** — 자동 열기 금지 ([[feedback_no_auto_pdf_open]]), 경로 명시 후 마스터에게 요청.

**4. 콘텐츠-매크로 정합 재확인** — 복사 후 발문·보기 교체 시 매크로 재선택 의무 (예: `\choices` → `choices32`/`choicesii`/`choicesv`).
- 사전: `node scripts/choices-width-check.mjs <문제.tex>`
- 사후: `node scripts/overfull-check.mjs <문제.tex>`

**5. 신규 그림·삽화 5-step 프로토콜** — archive 검색 → 참고자료 조사 → 도해 유형 결정 (좌표평면 대응 우선) → 자체 검수 → 자동 도구 (`scripts/figure-check.mjs`) + 마스터 시각 확인.

**그림 소스 우선순위**: 🥇 `bank/도해-카탈로그.md` archive → 🥈 Wikimedia Commons CC-BY-SA → 🥉 참고자료 크롭 → TikZ 신규 → ❌ AI 이미지 (미채택). 저작권: [`bank/이미지-저작권-정책.md`](bank/이미지-저작권-정책.md).

관련: [[feedback_system_first_priority]] · [[feedback_figure_authoring_protocol]] · [[feedback_figure_design_system]] · [[feedback_multilayer_situation_visualization]] · [[feedback_label_placement]]

## MCP · 검증 도구
- **Sequential Thinking** MCP — 복잡 문제 설계·다단계 풀이
- **수학 검증**: `node scripts/math-verify.mjs "sqrt(144)+3^4"` · 출제 후 답 검증 필수

## 자동화 파이프라인

**정기 갱신** (~13초, 8종):
```bash
node scripts/refresh-all.mjs                    # 표준
node scripts/refresh-all.mjs --with-extract     # + output/*.tex 추출
node scripts/refresh-all.mjs --with-deepinsight # + 깊이와통찰 재추출
```

**신규 책 워크플로우** — `template-generator.mjs` → `recommend-slots-by-book.mjs` → 마스터 본문 작성 → `refresh-all.mjs --with-extract`.

**검색·검수**:
- `node scripts/bank-query.mjs --unit CM1-EQ --star 4 --freq 3 --csv out.csv`
- `node scripts/anchor-compare.mjs --file <new.md>`
- `node scripts/sample-search.mjs --unit CM2-GM --strict --top`

**자동 갱신 데이터 자산**: `bank/INDEX.md` · `bank/anchors/*.md` · `bank/calibration-log.md` · `bank/시판책-사용빈도.md` · `bank/슬롯-추천.md`.

Gate 5.0 상세 도구 14종·figure 감지 도구 4종: [`bank/Gate-5.0-명세.md`](bank/Gate-5.0-명세.md) · [[feedback_exam_auto_check_tools]].

## Claude Code 작업 지침
- PDF 읽기: 페이지 범위 지정
- 수학 계산 단계별 검증, 중간 과정 생략 금지
- 문제 출제 후 반드시 직접 풀이·mathjs 검증
- 큰 작업은 단원·유형별 분할
- **에이전트 우선**: 병렬 처리·독립 작업은 서브에이전트 (Explore·problem-author·solution-author·problem-review·solution-review·exam-review) 활용. 시스템 컨텍스트에 정의된 에이전트 목록 참조.
