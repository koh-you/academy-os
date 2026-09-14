---
name: mechanism-데이터-정독-tier-매핑
description: 정독 데이터 tier 라벨링 canonical index v3.1 (2026-07-21 세션 58 · CM2-GM 4소단원 + CM1 4소단원 완결 · 벤더 회귀 v1.7 편입 · premium 후보 18건 카탈로그 등록). 통합 자산 스키마 v2.0 준거.
metadata:
  type: reference
  version: v3.1
  established: 2026-07-14 (v1.0) · 2026-07-15 (v2.0) · 2026-07-19 (v3.0) · 2026-07-21 (v3.1 · 세션 58 편입)
  scope: CM1 + CM2 전범위 · 시험지 + 정리편 + 유형편 공통
  tier_levels: 4 (star_3·star_4·star_5·star_5_premium)
  series_agnostic: true
  parent_pilots: [파일럿 1~8 + Agent 8건 = 378문 실측]
---

# 정독 데이터 tier 라벨링 canonical index (v3.1)

**v3.1 갱신** (2026-07-21 세션 58 · 마스터 승인):
> **세션 58 파일럿 1~8 + Agent 8건 완료 · 벤더 라벨 회귀 v1.7 확립** · CM2-GM 4소단원 (평면좌표·원·직선·이동) + CM1 4소단원 (EQ 이차 · CB 순열 · PL 나머지정리 · PL 인수분해) 완결 · **총 378문 실측 · premium 후보 18건**. star-classify.mjs v1.6 · 통합 자산 스키마 v2.0 준거.

**v3.0 갱신** (2026-07-19 세션 49 · 마스터 승인 · Phase A 완료):
> **통합 문제출제 시스템 v1.0 Phase A 실행** · 정리편·유형편 원본 은행 확장 · 개념원리·RPM CM2-GM 정독 신설 · star_3·star_4 원본 대폭 확보

**v2.0 갱신** (2026-07-15 세션 44 후반부 · 마스터 승인):
> 3단계 로드맵 Stage 1 실행 · tier 확장 (star_3·star_4 추가) · 자료별 매핑 명시

## tier 4단계 정의

| tier | composite 범위 | 정의 |
|---|---|---|
| **star_3** | 13~19 | 다중 조건·카운트 · 표준 유형 결합 |
| **star_4** | 20~26 | 다중 통찰·역방향 · 심화 유형 |
| **star_5** | 27~32 | 다중 심층 결합 정점 |
| **star_5_premium** | ≥ 33 | 통찰 카드 3+ · depth_score ≥ 8.5 · 다층 결합 완성 |

## 자료별 tier 매핑

### 고쟁이 CM1·CM2 (2025) · 이미 정독 완료 (v1.0)

| STEP | 자동 tier | 예외 |
|---|---|---|
| STEP 1 | star_3·star_4 혼재 | **문항별 재판정 필요** (Stage 1 P2 예정) |
| STEP 2 | star_5 | 자동 · v1.0 확립 |
| STEP 3 | star_5_premium | 자동 · v1.0 확립 |

파일: `bank/mechanism-데이터-고쟁이-*.md` 18개 (STEP 2·3 정독 완료 · STEP 1 미착수)

### 블랙라벨 CM1·CM2 (2024·2022개정) · Stage 1 P1 착수 예정

| STEP | 자동 tier | 예외 |
|---|---|---|
| STEP 1 | star_4 | 자동 · 마스터 지침 |
| STEP 2 | star_5 or star_5_premium 혼재 | **문항별 재판정 필요** |
| STEP 3 | star_5_premium (최고난도) | 자동 · 마스터 지침 |

파일 예정: `bank/mechanism-데이터-블랙라벨-CM{1|2}-STEP{1|2|3}.md`

### 마더텅 전국연합 미니모의 (학평 기출 20분 24회) · Stage 1 P3 완료 (2026-07-16)

**보조 지표 기반 자동 분류** (마더텅 미니모의 문제집은 정답률 미수록 · 원본 배점+번호 위치 사용):

| 원본 배점 | 원본 번호 | tier |
|---|---|---|
| 4점 | 27~30번 or 20~22번 (킬러) | star_5_premium |
| 4점 | 17~19번, 23~26번 (준킬러) | star_5 |
| 4점 | 14~16번 (중반부) | star_4 |
| 3점 | 12~15번 (후반부 3점) | star_3·4 |
| 3점 | 초반부 (5·7·9번) | star_3 |
| 2점 | 초반 (1·3·5번) | star_1·2 |

**정답률이 확인되면 재분류 규칙** (schema v2.0):

| 정답률 | tier |
|---|---|
| < 25% | star_5_premium |
| 25~45% | star_5 |
| 45~65% | star_4 |
| 65~85% | star_3 |
| > 85% | 배제 (star_2 이하) |

**파일**:
- `bank/mechanism-데이터-전국연합-CM1.md` v1.0 (192문 · 24회 × 8문 · 마더텅 미니모의)

**참고**: 미니모의 24회 중 회 21~24는 (고2) 나형/A형/B형 이관 행렬 문항 다수. 마스터 확립대로 STEP 3·premium 후보로 분류.

**자동 도구**: `scripts/star-classify.mjs` v1.0 (정답률 → tier or 번호+배점 → tier 자동 매핑)

### 🆕 정리편·유형편 원본 은행 · Phase A 완료 (2026-07-19)

**목적**: 정리편·유형편·연습편에 star_3·star_4 원본 확보. 기존 시험지 원본 (고쟁이 STEP 2·3·블랙라벨 STEP 2·3)의 star 5·premium 편중 격차 해소.

#### 개념원리 CM1·CM2 (2022개정)

| 자료 | 자동 tier | 예외 |
|---|---|---|
| 대표예제 | star_3·star_4 혼재 | 미지수 2개 결정·조건 결합은 star_4 |
| 유제 | star_3 | 기본 대응 |
| 연습문제 | star_3·star_4 혼재 | 미지수 결합·통찰형은 star_4 |
| 실력UP+·수능형 | star_5 | 소수 예외 |

**파일**:
- `bank/mechanism-데이터-개념원리-CM2-GM-평면좌표.md` v1.0 (60 항목 · star_3: 34 · star_4: 22 · star_5: 4)
- (예정) `bank/mechanism-데이터-개념원리-CM2-ST.md` · `bank/mechanism-데이터-개념원리-CM2-FN.md` · `bank/mechanism-데이터-개념원리-CM2-RF.md`
- (예정) `bank/mechanism-데이터-개념원리-CM1-*.md`

#### RPM (Real Practice Master) CM1·CM2 (2022개정)

| 자료 | 자동 tier | 예외 |
|---|---|---|
| 교과서문제 정복하기 | star_1·star_2 | 개념 확인 · 정리편 제외 대상 |
| 유형 익히기 (필수예제) | star_3·star_4 혼재 | 미지수 결합·다중 조건은 star_4 |
| 시험에 꼭 나오는 문제 | star_4 | 심화 유형 |
| 서술형 주관식 | star_4·star_5 혼재 | 심화도별 상이 |
| 실력 UP (심화) | star_5 | 최상위 소수 |

**파일**:
- `bank/mechanism-데이터-RPM-CM2-GM-평면좌표.md` v1.0 (86문 · star_1·2: 16 · star_3: 22 · star_4: 37 · star_5: 11)
- (예정) `bank/mechanism-데이터-RPM-CM2-ST.md` · 나머지 단원

#### 고쟁이 CM2 STEP 1 · Stage 1 P2 확장 (2026-07-19 시작)

| STEP | 자동 tier | 예외 |
|---|---|---|
| STEP 1 (교과서 정복) | star_3 (default) | 미지수 2개 결정·조건 결합·기하 성질 통합은 star_4 |

**파일**:
- `bank/mechanism-데이터-고쟁이-CM2-CH01-평면좌표-STEP1.md` v1.0 (18문 · star_3: 10 · star_4: 8)
- (예정) `bank/mechanism-데이터-고쟁이-CM2-CH02-직선-STEP1.md` · CH03~08

### 정리편·유형편 원본 pool (v3.0 확정)

**평면좌표 단원만**:
- 총 원본: **164 문항** (고쟁이 STEP1 18 + 개념원리 60 + RPM 86)
- **star_3: 66문** · **star_4: 67문** · star_5: 15문 · star_1·2: 16문
- **star 3·4 원본 133문 확보** → 정리편 재출제 즉시 가능

## 파일 frontmatter 필수 필드 (v2.0)

각 정독 파일 frontmatter:

```yaml
tier_mapping:
  STEP_1: star_4  # 자료별 상이
  STEP_2: star_5
  STEP_3: star_5_premium
unit_code: CM1-PL  # 파일별 상이
answer_rate_available: false  # true = 정답률 필드 있음
```

**추가 필드 (EBS 등 정답률 있는 자료)**:

각 문항에 `answer_rate: 0.32` (0.0~1.0) 필드. `star-classify.mjs` 자동 분류 도구가 정답률 → tier 매핑.

## 자료 표본 규모 (v2.0 갱신)

| 자료 | STEP 1 | STEP 2 | STEP 3 | 합계 | 정독 상태 |
|---|---|---|---|---|---|
| 고쟁이 CM1 | ~300 (미) | ~340 (완) | ~99 (완) | ~739 | STEP 2·3 완료 (v1.0) |
| 고쟁이 CM2 | ~200 (미) | ~226 (완) | ~92 (완) | ~518 | STEP 2·3 완료 (v1.0) |
| **블랙라벨 CM1** | **63 완료** | **275 완료** | **42 완료** | **380 완료** | **완료 (2026-07-15~16)** |
| **블랙라벨 CM2** | **146 완료** | **182 완료** | **93 완료** | **421 완료** | **완료 (2026-07-15·18 · v2.0 정식 정독)** |
| **고쟁이 STEP 1** | ~500 예상 | — | — | ~500 | **Stage 1 P2** |
| **마더텅 전국연합 미니모의 CM1** | (배점+번호 매핑) | — | — | **192 완료** | **Stage 1 P3 완료 (2026-07-16)** |
| **🆕 개념원리 CM2-GM (평면좌표)** | — | — | — | **60 완료** | **Phase A2 완료 (2026-07-19)** |
| **🆕 RPM CM2-GM (평면좌표)** | — | — | — | **86 완료** | **Phase A3 완료 (2026-07-19)** |
| **🆕 고쟁이 CM2-CH01 STEP1** | **18 완료** | — | — | **18 완료** | **Phase A1 완료 (2026-07-19)** |

**총 원본 pool (v3.0 갱신)**: 기존 1,904 + **평면좌표 정리편 원본 164** = **~2,068 문항** (현재 확정)
- star 5·premium 편중 → star 3·4 확보 (평면좌표 133 · 66+67)
- Phase A5~A8 완료 시 (CM2 나머지 3단원 + CM1 4단원 정독) 대략 **~2,800 문항 예상**

**블랙라벨 CM2 STEP 2 실측 분포** (2026-07-18 v2.0 정독):
- GM 102문 (점과 직선 36 · 원 42 · 도형이동 24)
- ST 80문 (집합 42 · 명제 38)
- FN·RF 0문 (편집 구조상 STEP2 부재 · STEP1→STEP3 직접)
- tier: star_5 65% (118문) · star_5_premium 35% (64문)

## 활용 방식

### 1. source-filter.mjs v2.0 (star 4단계 지원)
```bash
node scripts/source-filter.mjs --unit CM1-EQ --star 3    # star_3만
node scripts/source-filter.mjs --unit CM1-EQ --star 4    # star_4만
node scripts/source-filter.mjs --unit CM1-EQ --star 5    # star_5만
node scripts/source-filter.mjs --unit CM1-EQ --star premium
```

### 2. star-classify.mjs (Stage 1 P3 신설 예정)
```bash
node scripts/star-classify.mjs \
  --file bank/mechanism-데이터-ebs-2024.md \
  --by answer_rate
# 각 문항 answer_rate → tier 자동 매핑
```

## 관련 자원

- 로드맵: [[feedback_evolution_roadmap]]
- 방안 F 원본 스키마: [[feedback_source_based_authoring_v17]]
- Star-composite 매핑: `bank/star-composite-매핑.md` v1.1
- Mechanism 은행: `bank/mechanism-은행.md` v2.0 (89 mechanism)
- 세션 44 인계: `memory/project_2026-07-15_session44_handoff.md`

---

## v3.1 세션 58 신규 자산 편입 (2026-07-21)

### 세션 58 파일럿 8건 + Agent 8건 신규 정독 자산 (총 16 파일 · 378문 실측)

**파일럿 자체 판정 (4건)**:
- `bank/pilot-쎈-마플시너지-평면좌표-표본설계.md`
- `bank/mechanism-데이터-쎈-CM2-GM-평면좌표.md` (84문 · 표본 35)
- `bank/mechanism-데이터-마플시너지-CM2-GM-평면좌표.md` (116문 · 표본 35)
- `bank/mechanism-데이터-파일럿2-원의방정식.md` (30문)
- `bank/pilot7-쎈-마플-CM2-GM-직선의방정식.md` (30문)
- `bank/pilot8-마플-STEP3-소단원별-정련.md` (9문)

**병렬 Agent 8건 신규 정독**:
- `bank/mechanism-데이터-쎈-CM2-GM-도형이동.md` (120문 · 표본 20)
- `bank/mechanism-데이터-마플시너지-CM2-GM-도형이동.md` (표본 20 · premium 2문)
- `bank/mechanism-데이터-쎈-CM1-EQ-이차방정식.md` (141문 · 표본 20 · premium 2)
- `bank/mechanism-데이터-쎈-CM1-CB-순열과조합.md` (168문 · 표본 20 · premium 2)
- `bank/mechanism-데이터-마플시너지-CM1-CB-순열.md` (91문 · 표본 20 · premium 1)
- `bank/mechanism-데이터-마플시너지-CM1-EQ-이차방정식.md` (197문 · 표본 20 · premium 1)
- `bank/mechanism-데이터-쎈-CM1-PL-나머지정리와인수분해.md` (163문 · 표본 20 · premium 4)
- `bank/mechanism-데이터-마플시너지-CM1-PL-인수분해.md` (88문 · 표본 20 · premium 2)

### 세션 58 신규 벤더 회귀 매트릭스 (v1.7)

**6벤더 통합 신뢰도 (bank/vendor-label-calibration.md v1.7)**:

| 벤더 | 카테고리 | 예측 star | 신뢰 |
|---|---|---|---|
| 쎈 | A단계 기본 | star_1 | 0.85 |
| 쎈 | B단계 대표 | star_3 (alt star_2) | 0.60 |
| 쎈 | B단계 ● 상 | star_4 | **0.80** (v1.6 상향 · CM1-EQ·CM1-PL 편차 0 재확인) |
| 쎈 | C단계 사고력·교육청 | star_4 (alt star_5) | 0.70 |
| 마플 | BASIC | star_2 (alt star_1) | 0.75 |
| 마플 | NORMAL | star_3 (alt star_4) | 0.80 |
| 마플 | TOUGH | star_4 (일반) / **star_3 (CM1-CB 예외 · v1.6)** | 0.80 |
| 마플 | STEP 2 서술형 | star_4 | 0.90 |
| 마플 | STEP 3 도형이동·CM1-PL 인수분해 | star_5 (premium_hint 0.40) | 0.85 |
| 마플 | STEP 3 원·직선·CB 순열 | star_5 (premium_hint 0.20~0.25) | 0.75~0.80 |
| 마플 | STEP 3 평면좌표·유리 | star_4 (alt star_5) | 0.60~0.75 |
| 개념원리 | 대표예제·유제 | star_3 (alt star_2·4) | 0.65~0.70 |
| 개념원리 | 실력UP·수능형 | star_4 (alt star_5) | 0.75 |
| RPM | 유형익히기 | star_3 (alt star_2) | 0.70 |
| RPM | 시험꼭나오는 | star_3 (alt star_2·4) | 0.60 |
| RPM | 서술형주관식 | star_4 | 0.85 |
| RPM | 심화 | star_4 (alt star_5) | 0.70 |
| 고쟁이 STEP 1 | 위치별 (#001~#006 초·#007~#013 중·#014~#018 후) | star_2·3·4 | 0.75~0.85 |
| 고쟁이 STEP 2 | 통합 | star_5 | 0.85 |
| 고쟁이 STEP 3 | 통합 | star_5_premium | 0.85 |
| 블랙라벨 STEP 1 | 통합 | star_4 (alt star_3·5) | 0.75 |
| 블랙라벨 STEP 2 | 통합 | star_5 | 0.70 |
| 블랙라벨 STEP 3 | 통합 | star_5_premium | 0.85 |

**소단원 무관 안정성 확인**: 쎈 4개 카테고리 · 마플 3개 카테고리 · 3소단원 (평면좌표·원·직선) 교차 실측 · 편차 ≤ 0.5.

**소단원 의존 예외**:
- 마플 STEP 3: 소단원 · 학평 문번에 따라 star_4~5·premium 밀도 다양
- 마플 TOUGH CM1-CB: star_3 하향 (5문 중 3문 실측)

### 세션 58 v1.0 파일 tier 자동 정정 (1109건)

**star-classify.mjs v1.6 `--by vendor_label --write`로 자동 정정**:

| 파일 | 총 문항 | 정정 | 백업 |
|---|---:|---:|---|
| 개념원리 CM2-GM 평면좌표 | 74 | 42 | .bak-v1 |
| RPM CM2-GM 평면좌표 | 86 | 51 | .bak-v1 |
| 고쟁이 STEP 1 CM2 CH01 평면좌표 | 18 | 10 | .bak-v1 |
| 개념원리 CM2-GM 원·직선·이동 | 275 | 163 | .bak-v1 |
| RPM CM2-GM 원·직선·이동 | 330 | 176 | .bak-v1 |
| 개념원리 CM2-FN·RF·ST | 435 | 307 | .bak-v1 |
| RPM CM2-FN·RF·ST | 613 | 360 | .bak-v1 |
| **총계** | **1831** | **1109** | 전 파일 |

### premium 후보 카탈로그 (18건 → [`bank/premium-원형-카탈로그.md`](premium-원형-카탈로그.md) v1.0)

원형 11종 · 회차당 상한 · 자기복제 감쇠 정책 명문화. 시험지 정점 슬롯 원본 pick 표준 참조.

### 관련 신규 문서

- 정독 스키마: `bank/정독-스키마-v2.0.md` (v2.0)
- 벤더 회귀: `bank/vendor-label-calibration.md` v1.7
- 정독 우선순위 로드맵: `bank/정독-우선순위-로드맵.md` v1.0 (그룹 1~4 · 22종)
- premium 원형 카탈로그: `bank/premium-원형-카탈로그.md` v1.0 (18건 · 11원형)
- 앵커 후보 (승인 대기): `bank/anchors/CM2-GM-4소단원-앵커-후보-v3.md`
