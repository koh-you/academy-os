# 마스터 정책 등재부 (Master Policy Registry)

**신설**: 2026-07-13 · 세션 38 후반부 · 방안 D · 마스터 승인
**목적**: 마스터가 확립한 정책을 시스템 지식으로 등재. 자동 도구가 강제. Handoff memory 회로에서 정책 손실 방지.

---

## 등재 원칙

1. **마스터 지시 정책 발견 시 즉시 등재** (handoff memory에만 남기지 않음)
2. **각 정책은 다음 4요소 필수**:
   - 정책 ID (kebab-case)
   - 마스터 지시 원본 (인용)
   - 적용 범위 (project·series·문서 유형)
   - 자동 도구 강제 방식
3. **연관 memory·CLAUDE.md 참조 링크 명시**
4. **위반 감지 시 즉시 RED 처리**

---

## 활성 정책 목록

### policy-star-5-only (2026-07-10 세션 21) · policy-slot-size-uniform (2026-07-13 세션 38) · policy-no-structure-repetition (2026-07-13 세션 38)

---

### policy-star-5-only (2026-07-10 세션 21 · 2026-07-14 세션 36 재정의 · 2026-07-13 세션 39 최종 확인)

**마스터 지시** (원본):
> "4점 이하 배점 문제 전부 배제 · ★ 5 급으로만 재출제 · 17문 전 슬롯 ★ 5 · star_premium 목표 12문"

**개수 목표 재정의** (2026-07-14 세션 36 · schema.md v5.2 §2.16.10):
> "star_premium 12문 목표는 강도 저하 유발 · 개수+강도 4중 지표로 재정의 · **premium_count 목표 3문**"

**세션 39 최종 확인** (2026-07-13, b 옵션 선택):
> "star_premium 개수 목표 낮춤 · 기준 (composite ≥ 30/33) 유지"

## 🔴🔴 2026-07-30 (세션 105) — `policy-star-5-only` **적용 종료**

**마스터 확정**:

> 5스타 온리라고 한 거는 **완성도 낮은 시스템으로 시험지 작성 연습할 때 난이도를 확보하기 위해 고육지책으로 넣은 것**이니까 **이제 시스템 구축 시엔 그렇게 안 해도 돼.** 우리가 시스템을 구축하면 해결되는 일이야.

즉 이 정책은 **난이도를 보장할 수단이 없던 시절의 대리 장치**였다. 시스템(8축 composite · 축 M · 루브릭 D1~D10 · 게이트)이 난이도를 직접 측정·강제하게 된 이상 존치 근거가 없다.

**신규 적용 범위**: **없음.**

| 시리즈 | 적용 |
|---|:-:|
| 와부고 **예상** 시험지 1~12회 (내부 테스트용 · 종료된 작업) | 이력으로만 보존 |
| **SIMULATOR [와부] (재현)** · 그 밖의 신규 시리즈 | 🔴 **적용 안 함** |

**왜 재현에 적용하면 안 되는가 — SSOT 정면 충돌**:
재현은 정의상 실기출 난이도 밀도(하 1 · 중 6 · 상 6 · 최상 4)와 **이중 봉우리**를 재현해야 한다. ★ 5 only 를 지키면 루브릭 **D1(구조 정합)·D3(난이도 밀도)** 가 동시에 붕괴하고, D1·D3 를 지키면 정책이 청사진 확정을 차단한다. 실제로 `blueprint-score-validator` 가 **exit 3 · 위반 10건**으로 NO.1 을 막고 있었다.

**대체 장치** (정책이 하던 일을 시스템이 대신한다):
- 난이도 하한 → `bank/schema.md` §2.16 8축 composite + **축 M**(수학 실체 · premium 에 `M ≥ 2` 하한)
- 분포·봉우리 → 루브릭 **D1 정량 기준** `min(comp₁₀,₁₁,₁₂) > max(comp₁₋₉)` + **D3**
- 배점 → 100점 정합 정책

**도구 조치**: `blueprint-score-validator.mjs` 의 `star-5-only` 검사를 **시리즈 분기**로 감싼다 — 재현 시리즈는 건너뛰고 INFO 로만 알린다.

---

**적용 범위** (2026-07-30 종료 · 아래는 종료 전 문면 · 이력 보존):
- ~~와부고 시리즈 (CM1·CM2 예상 시험지)~~
- ~~신규 회차 (2회 이후 모두 적용 · 소급)~~

**세부 규칙**:
- 모든 슬롯 `star ≥ 5` (배점 ≥ 5점 · ★ 2·3·4 슬롯 금지)
- **`star_premium` (composite ≥ 33 · v5.2 임계) 목표 3문** (세션 36 재정의 · 세션 21의 12문은 폐기)
- `star_premium` 4중 강도 지표 병행 (total ≥ 110 · min ≥ 33 · avg ≥ 37 · top5 ≥ 150)
- 회차 간 series_top5_delta ≥ -3% 유지 (급락 방지)

**자동 도구 강제**:
- `blueprint-score-validator.mjs` v2.0: 청사진 `star_distribution` 검사 · ★ 2·3·4 존재 시 🔴 RED
- `first-draft-report.mjs` v2.0: 4축 (난이도)에 정책 위반 시 자동 RED

**관련 자원**:
- `feedback_star_5_only`
- 정책 유실 사례: `bank/세션38-4회-시범-실패-분석.md`
- 원본 세션: `project_2026-07-10_session21_handoff.md`

---

### policy-no-textbook-recap (2026-07-13 세션 39)

**마스터 지시** (원본):
> "교과 표준 개념은 회고를 해 주면 안 돼"
> "박스만 있으면 배점이 올라가는 형태 어이없음"

**추가 마스터 원칙 확립** (동일 세션):
> "5스타 급이라는 말이 유형별로 어떤 거는 가능하고 어떤 거는 불가능하다는 게 말이 안 됨. 모든 유형은 유형의 종류와 상관없이 충분히 목표 난이도에 도달 가능함."
> "지문형은 5스타급 · 선택형은 4스타급이라는 분류도 말이 안 됨. 문제마다 다른 거지 답변 방식의 차이와는 상관이 없음."

**적용 범위**:
- 와부고 시리즈 (CM1·CM2 예상 시험지)
- 모든 문항 유형·모든 답변 방식

**세부 규칙**:
- 정의박스에 교과 표준 개념 회고 **절대 금지** (거리 공식·중점·내분점·무게중심·부분집합 개수·집합 연산·명제 대우 등)
- 유형별·답변방식별 star 상한 개념 **폐기** (모든 유형·답변방식에서 ★ 5 도달 가능)
- 정의박스 허용은 신 정의·확장 정의·지문 소재 정의만 (매우 제한적)

**자동 강제**:
- `blueprint-content-analyzer.mjs` v2.0: 교과 회고 정의박스 자동 감지 → exit 2 (RED)
- `blueprint-score-validator.mjs` v1.5: 자격 판정 폐기 · declared ≥ 24 GREEN 자동 인정 (심층 검증은 별도)

**관련 자원**:
- `feedback_no_textbook_recap` (신설 예정)
- 원본 문서: `bank/문항-심층-설계-원칙.md` v2.0
- 정밀 재평가 계기: `bank/세션39-6회-정밀-난이도-평가.md`
- 관련 원칙: [[feedback_pure_math_peak_reachable]] (순수 수학 정점 도달)

---

### policy-slot-size-uniform (2026-07-13 세션 38 후반부)

**마스터 지시** (원본):
> "1, 2 페이지 레이아웃 실패"

**적용 범위**:
- 와부고 시리즈 (CM1·CM2 예상 시험지)
- 선택형 pair×2 페이지 (Page 1·2·3)

**세부 규칙**:
- 각 pair×2 페이지 4문 슬롯 예상 크기 편차 **σ ≤ 10mm** 유지
- 위반 시 다음 중 하나 요구:
  - (i) 문항 재배치 (pair 조합 최적화)
  - (ii) 문항 크기 조정 (conditions 인라인화·choices 축약)
  - (iii) probgridfour 강제 (100mm 고정 슬롯)
- 청사진 slots[] `estimated_mm` 필드 필수 (방안 I)

**자동 강제**:
- `blueprint-score-validator.mjs` v2.1: 편차 σ 검사 · 위반 시 exit 3 (정책 위반)
- `layout-auto-decider.mjs` v3.1: 편차 σ > 10mm 시 pair 재배치 or grid 자동 전환

**관련 자원**:
- `feedback_policy_slot_size_uniform`
- 유실 사례: `bank/세션38-5회-페이지1-2-레이아웃-실패-진단.md`
- 원본 세션: 세션 38 후반부 (5회 시범 실패 · 슬롯 편차 σ 13.5mm)

---

### policy-no-structure-repetition (2026-07-13 세션 38)

**마스터 지시** (원본):
> "16 17 유형은 박스 안에 정의를 주고 원에 대한 질문을 하는 동일 형태의 반복. 자기복제금지 실패"

**적용 범위**:
- 와부고 시리즈 (CM1·CM2)
- 회차 간 정점 문항 (composite ≥ 24) 구조 시그니처
- 회차 내 정점 문항 간 구조 시그니처

**세부 규칙**:
- **문항 구조 시그니처** 정의:
  - `has_definition_box` (정의박스 유무)
  - `primary_object` (핵심 대상: 원·직선·집합·명제)
  - `sub_questions` (소문항 개수)
  - `layout_hint` (probpair·probpairfillpage 등)
  - `narrative_theme_category` (실생활·수학 내부·기하 지문)
- **자기복제 판정**:
  - 회차 간: 정점 문항 구조 시그니처 4개 이상 축 일치 → 🔴 RED
  - 회차 내: 같은 회차 정점 문항 2개 이상이 구조 시그니처 3+ 일치 → 🔴 RED

**자동 도구 강제**:
- `structure-signature-check.mjs` (신설, 방안 F)
- `first-draft-report.mjs` v2.0: 5축 (세련도)에 편입

**관련 자원**:
- `feedback_structure_signature_check`
- 유실 사례: 2·3·4회 정점 문항 모두 [정의박스 + 원 + 3소분항 + fillpage] 동일 골조
- 원본 세션: `bank/세션38-4회-시범-실패-분석.md`

---

## 정책 등재 프로세스

### 1단계 · 마스터 지시 감지
- 마스터가 세션 중 정책 지시 시 (예: "~하기로 했다", "~는 금지", "~만 허용")
- 즉시 handoff memory·session log에 기록

### 2단계 · 정책 원본화
- `bank/master-policy-registry.md` 본 파일에 새 정책 항목 추가
- 필수 4요소 (ID·원본 인용·적용 범위·강제 방식) 명시

### 3단계 · feedback memory 신설
- `feedback_{policy-id}` 형식으로 memory 등재
- Registry 링크 · 관련 자원 · 유실 방지 원칙

### 4단계 · 자동 도구 강제 로직 추가
- 관련 validator·check 스크립트에 정책 검사 로직 추가
- Gate 4.5 편입 (필요 시)

### 5단계 · CLAUDE.md 갱신
- 관련 단계 (3.3·3.5·4.5·5)에 정책 참조 추가
- MEMORY.md 인덱스에 새 feedback 등재

### 6단계 · 검증
- 기존 회차·산출물에 소급 검사 (validator·check 실행)
- 위반 사례 문서화 · 재발 방지

---

## 정책 위반 검출 리포트 (2026-07-13 소급 검증)

### policy-star-5-only 위반
| 회차 | 청사진 star_distribution | 위반 여부 |
|---|---|---|
| 1회 | ★ 5×5, ★ 4×5, ★ 3×4, ★ 2×3 | 🔴 위반 (★ 2·3·4 12문) |
| 2회 | ★ 5×4, ★ 4×5, ★ 3×4, ★ 2×4 | 🔴 위반 (★ 2·3·4 13문) |
| 3회 | ★ 5×4, ★ 4×5, ★ 3×4, ★ 2×4 | 🔴 위반 (★ 2·3·4 13문 · 폐기됨) |
| 4회 | ★ 5×4, ★ 4×5, ★ 3×4, ★ 2×4 | 🔴 위반 (★ 2·3·4 13문 · 폐기됨) |

**모든 회차 정책 위반** — 정책이 시스템에 등재 안 된 결과.

### policy-no-structure-repetition 위반
| 회차 정점 문항 | defbox | primary | subCount | layout | 일치 축 |
|---|---|---|---|---|---|
| 2회 #16 GPS | O | 원 | 3 | fillpage | — |
| 2회 #17 팬터그래프 | O | 원 | 3 | fillpage | 4/4 (회차 내 자기복제) |
| 3회 #16 드론 | O | 원 (외심) | 3 | fillpage | 4/4 (2회 대비 회차 간) |
| 3회 #17 라이다 | O | 원 (자취) | 3 | fillpage | 4/4 (회차 간·내 자기복제) |
| 4회 #16 터널 | O | 원 (결정) | 3 | fillpage | 4/4 (자기복제) |
| 4회 #17 조각상 | O | 원 (자취) | 3 | fillpage | 4/4 (자기복제) |

**정점 문항 골조 완전 반복** — signature-check가 감지 못 함.

---

## 관련 자원

- 방안 D 등재 프로세스: 본 파일
- 방안 E · validator v2.0: `scripts/blueprint-score-validator.mjs`
- 방안 F · structure-signature-check: `scripts/structure-signature-check.mjs`
- 방안 G · report v2.0: `scripts/first-draft-report.mjs`
- 분석 보고: `bank/세션38-4회-시범-실패-분석.md`
- 시스템 우선 원칙: [[feedback_system_first_priority]]
