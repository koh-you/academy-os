---
name: project-2026-07-13-session35-handoff
description: "세션 35 인계 (2026-07-13 완료). 답지 시스템 v3.7.3~v3.7.5 반복 개선 (소문항 정렬·cplabel 언어·색상 대비), CM2 범위 밖 어구 검수, 지문형 문제 심화 3전략 제안 정리."
metadata: 
  node_type: memory
  type: project
  originSessionId: db4b50b0-0c3c-49bf-8b46-e8206e4fd655
---

# 세션 35 인계 (2026-07-13 완료) — 답지 시스템 반복 개선 · CM2 범위 감사 · 지문형 심화 전략 제안

## 🎯 세션 최종 상태 (종료)

**완료 7건 (모두 시스템화)**:

- (A) 서술형 소문항 (1)(2)(3) 세로 정렬 시스템 확립 (`\soltitleexam` v3.7.3)
- (B) 골든 템플릿 v3.7.3 등록 (`templates/시험지-템플릿-v3-CM2/`)
- (C) `fraction-consistency-check` refresh-all 편입 (v1.5)
- (D) Critical Point 강한 부등호 3건 → 자연 국어 정정 (`permanent-policy-check` v1.5 패턴 등재)
- (E) CM2 범위 밖 어구 검수 (극선·삼각부등식 9건 정정, `cm1-curriculum-check` v1.6 3 패턴 신설)
- (F) `\cplabel` 언어 스타일 전면 재작성 (15개 · 3중 안전망 신설)
- (G) CP 박스 색상 재조합 v3.7.4→v3.7.5 (옅은 피치 배경 + 짙은 갈오렌지 라벨)

## Part A — 서술형 소문항 (1)(2)(3) 세로 정렬 (v3.7.3)

**요구**: 문항번호 옆에 (1) 시작, (2)(3)는 다음 줄 (1)과 세로 정렬.

**실패 3종 (기록 · 재시도 금지)**:
| 방식 | 실패 양상 | 원인 |
|---|---|---|
| `\parbox`·`minipage` | (1) 자체가 새 줄로 밀림 | 좁은 컬럼 top-alignment 실패 |
| `\hangindent+\hangafter=1` | (2)(3) column 0으로 밀림 | `raggedright`+`parskip`+`\@normalcr` 상호작용 리셋 |
| `\parshape 2 ...` | 위와 동일 | 같은 원인 |

**성공: `\\` 재정의**:
```latex
\settowidth{\solprefixwd}{\sffamily\bfseries\large #1.\hspace{10pt}}%
\begingroup
\def\\{\hfil\break\hspace*{\solprefixwd}\ignorespaces}%
\noindent{\sffamily\bfseries\large\color{vB-ink} #1.}\hspace{10pt}%
{\bfseries\color{black}#2}%
\par
\endgroup
```

로컬 `\\` 재정의로 각 새 줄 시작에 `\hspace*{\solprefixwd}` 자동 주입. `\solprefixwd` 전용 `\newdimen` (`\@tempdima` 충돌 회피).

**사용**: `\soltitle{13}{(1) 답 \\ (2) 답 \\ (3) 답}{6}`

## Part B — 골든 템플릿 v3.7.3 등록

`templates/시험지-템플릿-v3-CM2/` 갱신:
- 문제·답지·청사진 3파일 동기화 (활성 폴더 → 골든)
- README v3.2 → v3.7.3 갱신
  - `\answersheetsetup` 4대 defaults 명세 (fleqn 옵션 필수)
  - 서술형 소문항 정답 표기 (v3.7.3) — `\\` 사용법 + 실패 접근 3종 재시도 금지
  - Critical Point (`\criticalpoint` + `\cplabel`)
  - 보기 박스 (`\bogibox`)
  - 금지 목록 확장 (`\begin{step}[N]`·`\begin{cond}`·`\quad` 소문항 구분자)

## Part C — fraction-consistency-check refresh-all 편입 (v1.5)

**scripts/fraction-consistency-check.mjs v1.1**:
- `--all` 플래그: `output/**/*답지*.tex`·`*solution*.tex` 자동 재귀 검색
- `--soft` 플래그: RED 검출해도 exit 0 (파이프라인 계속)

**scripts/refresh-all.mjs v1.5**:
- `runScript` 함수 확장 (배열 spec 지원)
- 파이프라인 끝에 `fraction-consistency-check.mjs --all --soft` 추가

**첫 실행 결과 (12개 답지)**: ✅ 통과 1 · 🔴 RED 5 · ⚠️ YELLOW 4. RED는 모두 세션 34 이전 아카이브 (`\answersheetsetup` 미도입). 신규 답지는 자동 통과.

## Part D — Critical Point "강한 부등호" 3건 정정 + v1.5 패턴 등재

**정정**: 답지 #13·#15·#16 CP 안 "강한 부등호" 3건 자연 국어 대체.

**scripts/permanent-policy-check.mjs v1.5 패턴**:
```javascript
{
  re: /강한\s*부등호|약한\s*부등호|엄격한\s*부등호|느슨한\s*부등호/,
  slug: 'informal-inequality-strength',
  hint: '"강한/약한 부등호" → "등호 없음"/"등호 포함"/조건 직접 명시 — 학술 용어 직역',
}
```

**bank/비표준-어구-사전.md §1.4b-2 신설**: 4어구 등재 (강한·약한·엄격한·느슨한 부등호).

## Part E — CM2 범위 밖 어구 재검수 (극선·삼각부등식)

**마스터 지적**: "삼각부등식 극선 등은 공통수학2에서 사용되는 용어 또는 범위가 아님. 크리티컬 포인트 전체 재검수".

**정정 9건**:
| 위치 | 이전 | 이후 |
|---|---|---|
| 문제 #13(2) | "(극선)" | (삭제) |
| 문제 #13(3) | "(2)의 극선" | "(2)의 직선" |
| 답지 #13 solpart(2) | "극선 (두 접점을 지나는 직선)" | "원 위 점에서의 접선 공식으로부터 두 접점을 지나는 직선" (전면 재서술) |
| 답지 #13 solpart(3) | "극선의 식" · "따라서 극선은" | "이 직선의 식" · "따라서 직선 T_1T_2는" |
| 답지 #13 CP ② | "극선 공식은 중심 기준" | "접점을 지나는 직선은 중심 기준" |
| 답지 #16 CP ① | "삼각부등식 등호 포함" | "경계 값도 포함" (자연어 · 두 변 길이 3,5 삼각형) |
| 답지 #16 CP ② | "삼각부등식만 확인" | "위치 관계 범위만 확인" |

**scripts/cm1-curriculum-check.mjs v1.6 패턴 3종 신설**:
```javascript
{ level: 'RED', pattern: /(?<![가-힣])극선(?![가-힣])/g, name: '"극선" (polar line — CM 범위 밖 · 대학 사영기하)' }
{ level: 'RED', pattern: /(?<![가-힣])극점(?![가-힣])/g, name: '"극점" (pole — 사영기하)' }
{ level: 'RED', pattern: /삼각\s*부등식/g, name: '"삼각부등식" (triangle inequality)' }
```

## Part F — `\cplabel` 언어 스타일 시스템 (원인 제거)

**마스터 지적**: "외부 조건 부등호는 부자연스러운 표현. 어떤 교재에도 사용된 적이 없음. 언어 검수도 한 건가?" → "재검수 지시했는데 왜 언어검수는 안 된 거지? 원인을 제거해야 반복되지 않을 것".

**원인 분석**:
1. 이전 "재검수" 지시를 좁게 해석 (특정 어구 grep만)
2. **자동 도구 부재**: 압축 신조어 라벨 스타일 검출 도구 없음
3. **에이전트 규정 부재**: `solution-review`·`solution-author` 프롬프트에 cplabel 언어 기준 없음
4. **원리 문서 부재**: 풀이 5원칙에 cplabel 스타일 지침 없음

**대응 — 3중 안전망 신설**:

### 1. 자동 도구: `scripts/cplabel-style-check.mjs`
- 5축 검출: 압축 어미 · 프로그래밍 은어 · 수식-라벨 혼용 (`A = B`) · 명사구 4어 이상 나열 · 라벨 길이
- `--all` / `--soft` 지원 (refresh-all 편입)
- refresh-all v1.6 파이프라인 끝에 추가

### 2. 에이전트 규정
**solution-author v1.7 §"cplabel 언어 스타일 필수 규칙"** (생성 단계 차단):
- `\textbf` → `\cplabel` 매크로로 명시 (v1.6 잔여 정정)
- 대조 표 (좋은 예 vs 나쁜 예 7쌍)
- 금지 패턴 5종

**solution-review v1.2 축 S8 확장**:
- S8.4 cplabel 언어 스타일 (라벨당 −3점)
- S8.5 CP 문항 범위 정합 (범위 밖 라벨/본문 각 −5점)
- 자동 도구 5종 순차 호출 의무

### 3. 정책 문서
- `bank/비표준-어구-사전.md` §1.4f 신설 (좋은 예 vs 나쁜 예 대조표)
- `feedback_solution_writing_principles.md` §"원칙 5.1" 신설

**답지 15개 라벨 전수 재작성** (자연 국어 서술):
| ❌ 압축 신조어 | ✅ 자연 국어 |
|---|---|
| "외부 조건 부등호" | "등호는 원 위(접점)" |
| "$a=0$ 예외 처리" | "$a=0$인 경우 따로" |
| "경계 배제 조건" | "경계는 포함하지 않음" |
| "교점 좌표 유도 = 두 원 뺄셈" | "두 원의 방정식을 빼서 좌표 구하기" |
| "대우 = 원명제 진리값" | "원명제와 대우의 진리값은 같다" |
| "반례의 전제조건 검증" | "반례가 전제를 만족하는지 확인" |
| "$k$의 값에 무관 조건" | "$k$에 대한 항등식으로" |

**cplabel-style-check 결과**: RED 0건 · YELLOW 3건 (길이·명사구 미세 이슈만).

## Part G — CP 박스 색상 v3.7.4 → v3.7.5

**진화 이력**:
| 버전 | 배경 | 라벨 | 문제 |
|---|---|---|---|
| v3.7.2 (원본) | `#FEF3C7` 옅은 옐로우 | `#D97706` 오렌지 | 라벨-배경 톤 유사 (마스터 지적) |
| v3.7.4 | `#FAFAFA` 옅은 회색 | `#C2410C` 진한 오렌지 | CP 박스가 흰 페이지와 구별 안 됨 (마스터 지적) |
| **v3.7.5 (확정)** | `#FED7AA` 옅은 피치 | `#9A3412` 짙은 갈오렌지 | 페이지 대비 뚜렷 + 라벨-배경 5:1 대비 |

**매크로 개선 (`\criticalpoint` v1.2)**:
- 헤더 "△ Critical Point" 별도 줄 (기존: 본문 이어붙임)
- `\quad` 대신 `\\` 항목 구분 권장 (dense 방지)

## 🔑 세션 35 핵심 통찰

1. **시스템 구축이 항상 우선** (마스터 반복 지시). 파일 정정만 하면 재발. 자동 도구·에이전트 규정·정책 문서 3중 안전망 의무.
2. **"재검수" 지시의 확장 해석**: 특정 어구 grep이 아닌 전 축 (범위·언어·자연성·교재 정합) 감사.
3. **CP 박스 반복 조정 3회**의 교훈: 마스터 시각 확인 없이 색상 결정 금지. 페이지 대비 vs 라벨 대비 두 축 모두 고려.
4. **답지 조판 시스템의 로컬 재정의 유효성**: `\hangindent`·`\parshape` 등 paragraph-level 파라미터가 `multicols+raggedright+parskip` 환경에서 무효화되는 사례 반복 확인. `\\` 로컬 재정의가 대안.

---

## 📋 마스터가 다음 세션에서 볼 제안: 지문형 문제 심화 3전략

와부고 CM2 1회 서술형 5문항 검토 결과, #14~#17이 모두 지문형이지만 대체로 "하나의 시나리오 → 하나의 수학 개념" 얕은 구조. #17만 다중 조건 얽힘으로 상대적 깊이 확보.

### 🥇 전략 1 — 지문 안 조건을 여러 개로 얽어 붙이기 (다중 제약)

이야기가 서로 다른 물리·상황 제약 2~3개를 자연스럽게 제시하고, 학생이 각 제약을 수식화한 뒤 **동시에** 만족시켜야 답이 유일해지도록 설계.

**현재 사례**: #17 (필충조건 + 행성 관측) — 조건 (1) 아래에서만 필충 성립. 조건 통합이 통찰 핵심.

**적용 방안**: 나머지 지문형 문항 재구성 시 2~3 조건 자연 삽입.

### 🥈 전략 2 — 역방향 모델링 (Backward inverse)

지문에 **결과·목표**를 제시하고 학생이 **물리 파라미터를 역으로** 결정.

**예시**: "광선이 원점으로 되돌아오려면 거울의 위치는?" · "로봇 팔이 특정 영역을 모두 훑으려면 팔 길이는?" · "관측 위성이 두 지점을 동시에 감지하려면 궤도 반지름은?"

**깊이 원천**: 조건에서 답을 계산하는 것이 아니라 조건이 **유일한 파라미터**를 낳음을 논증해야 함.

### 🥉 전략 3 — 파라미터 임계점 유형 (연속 → 이산)

지문의 물리량 (거리·각·시간 등)이 연속으로 변할 때 특정 **임계값**에서 답이 **질적으로 달라지는** 상황. 학생은 임계점을 찾고 각 구간에서 답을 서술.

**현재 근접 사례**: #16 (로봇 팔) — 하지만 임계점 (경계 $2, 8$)을 문제가 미리 알려줌.

**개선 방향**: 학생이 스스로 임계값 발견·경우 분류.

### ⚖️ 핵심 트레이드오프

**깊이 ↑ = 지문 길이·독해 부담 ↑ + 시나리오-수학 정합 검수 부담 ↑**

- 특히 전략 2·3은 지문 논리가 수학 논리와 어긋나면 학생이 "지문이 이상하다"고 느낌 → 문항 리뷰 훨씬 무거워짐
- 검수 절차 강화 (독립풀이 에이전트 2회 · 시나리오 물리 정합 별도 확인) 필요

### 다음 세션 결정 사항

1. **채택 여부**: 3전략 중 어느 것을 정식 정책으로 채택할지
2. **채택 시 후속 작업**:
   - `bank/지문형-심화-카탈로그.md` 신설 (전략별 예시 · 검수 체크리스트)
   - `solution-author` 프롬프트 §"지문형 문제 출제" 추가 (심화 3전략 자동 반영)
   - `problem-review` 에이전트 축 확장 (지문 논리↔수학 논리 정합)
   - 와부고 CM2 2회 착수 시 시범 적용

---

## 📁 관련 파일 (신설·갱신)

**세션 35 신설**:
- `scripts/cplabel-style-check.mjs`
- `.claude/projects/.../memory/project_2026-07-13_session35_handoff.md` (본 파일)

**세션 35 갱신**:
- `templates/style.sty` (`\soltitleexam` v3.7.3 · `\solprefixwd` dimen · `\criticalpoint` v1.2 · vB-warn 색상 v3.7.5)
- `scripts/fraction-consistency-check.mjs` v1.1 (`--all`·`--soft`)
- `scripts/refresh-all.mjs` v1.6 (`fraction-consistency-check`·`cplabel-style-check` 편입)
- `scripts/permanent-policy-check.mjs` v1.5 (강한/약한 부등호)
- `scripts/cm1-curriculum-check.mjs` v1.6 (극선·극점·삼각부등식)
- `.claude/agents/solution-author.md` v1.7 (§cplabel 언어 스타일)
- `.claude/agents/solution-review.md` v1.2 (S8.4·S8.5)
- `bank/비표준-어구-사전.md` v1.5 (§1.4b-2 부등호·§1.4f cplabel 언어)
- `output/공통수학2/2026-2학기-와부고-예상-중간-1회/{문제·답지}.tex` (문항 정정 · CP 15개 재작성)
- `templates/시험지-템플릿-v3-CM2/` (골든 동기화 · README v3.7.3)
- `CLAUDE.md` (refresh-all 8종 갱신 표기)
- `memory/feedback_solution_writing_principles.md` (§원칙 5.1 cplabel)
- `memory/feedback_answer_sheet_style_defaults.md` v3.7.3 (§서술형 소문항 정렬)
- `memory/MEMORY.md` (인덱스 v3.7.3 갱신)

## 📌 다음 세션 즉시 액션

1. **지문형 심화 전략 채택 여부 결정** (마스터 판단 대기)
2. **채택 시 후속 작업 순위**: 카탈로그 문서 → solution-author 프롬프트 편입 → problem-review 축 확장 → 2회차 시범 적용
3. **비채택 시**: 2회차 착수 (와부고 CM2 예상 중간 2회, v3.7.5 시스템 매크로 실전 검증)
4. **PDF 시각 최종 확인** (v3.7.5 CP 박스 색상 · 소문항 정렬 · 문제·답지 8쪽/7쪽)

## 관련 메모리

- [[project_2026-07-12_session34_handoff]] — 세션 34 (4-도구 GREEN · Critical Point 실전 · 답지 defaults 시스템)
- [[feedback_answer_sheet_style_defaults]] — 답지 defaults v3.7.3 (소문항 정렬 편입)
- [[feedback_solution_writing_principles]] — 풀이 5원칙 (원칙 5.1 cplabel 언어 스타일 신설)
- [[feedback_unified_exam_design_system]] — 시험지·답지 통합 디자인
