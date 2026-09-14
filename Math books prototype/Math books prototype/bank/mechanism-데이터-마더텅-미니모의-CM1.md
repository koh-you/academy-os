---
name: mechanism-데이터-마더텅-미니모의-CM1
description: 2026 마더텅 전국연합학력평가 기출 20분 미니모의고사 24회 [고1] 공통수학1 (2022 개정) 정독 데이터 v1.0. 총 192문 (24회 × 8문 · 2005~2025년 학평·모평·수능 기출). 표본 26문 층화 판정 + 벤더 라벨 회귀. 미니모의 특성상 20분 8문 형식 · 문 5~8 킬러 pool. 저작권 준수 (원문 전사 없음 · 발문 시그니처 요약 · 학평 회차·문번·연도만 인용).
metadata:
  type: reference
  version: v1.0
  established: 2026-07-21
  source: 2026 마더텅 전국연합학력평가 기출 20분 미니모의고사 24회 [고1] 공통수학1 (2022 개정 교육과정) — 마더텅교육 (2025-10-23 InDesign CS6 · 문제편 96p)
  section: 전 단원 (I. 다항식 · II. 방정식과 부등식 · III. 경우의 수 · IV. 행렬)
  unit_code: CM1-PL · CM1-EQ · CM1-CB · CM1-MX 전체
  sub_units:
    - CM1-PL-01: 다항식의 연산
    - CM1-PL-02: 나머지정리와 인수분해
    - CM1-EQ-01: 복소수와 이차방정식
    - CM1-EQ-02: 이차함수와 이차방정식
    - CM1-EQ-03: 여러 가지 방정식
    - CM1-EQ-04: 여러 가지 부등식
    - CM1-CB-01: 순열
    - CM1-CB-02: 조합
    - CM1-MX-01: 행렬과 그 연산
  citation_note: "2026 마더텅 20분 미니모의고사 24회 [고1] 공통수학1 · 학습 목적 · 저작권 준수 · 원문 전사 없음 · 학평 회차·문번·년월만 인용 · 원본 은행 자산화용 시그니처 요약"
  extract_range: "part1 문제편 96p 전체 (24회 × 4p × 8문) · 표본 26문 시스템 순정 판정"
  pages: "p001-096 (회차 01~24)"
  total_problems: 192  # 24회 × 8문
  section_breakdown:
    회차수: 24
    문항수_회차당: 8
    총문항수: 192
    답지_해설페이지: 88  # 정답과 해설 별책 (part 2)
  vendor_year_range: "2005~2025년 (21개년 · 고1 3·6·9·11월학평 + 고2 3·6·9·11월학평 A/B/가/나형 + 고3 학평·모평·수능 2010·2011 나형)"
  edition_features:
    - "회차별 형식: 8문항 × 4페이지 · 목표 시간 20분 · 문 1~2 (2~3점 기초) · 문 3~5 (3점 표준) · 문 6~8 (4점 킬러)"
    - "각 회차 하단: '꼭 확인하기' 채점표 (틀린 문항 수·초과 시간 자기 점검)"
    - "학평 원문 출처 명시 (년도·회차·문번·학년) · 배점 원문 유지"
    - "24회 색상 코드: 각 회차별 상단 원형 번호 배지 색상 순환 (빨강→핑크→오렌지)"
  sample_problems: 26  # 층화 표본 (24회 균등 안 됨 · 킬러 회차 집중)
  predicted_problems: 166  # 나머지 벤더 회귀 예측
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X) + v3.9 저노출 게이트 + vendor-label-calibration v1.11
  parent_pilot: pilot-마더텅-미니모의-CM1-학평재수록-검증
  precedent_source: bank/mechanism-데이터-마더텅-CM1.md v1.0 (2025판 · A- 85%)
  latest_vendor_release: "2026판 (2025-10-23 발행) · 2025년 3·6·9월 학평·모평 신규 편입 확인 (24회 문 2 2025년 6월학평 24번, 15회 문 5 2025년 6월학평 16번, 24회 문 2 2025년 9월학평 8번, 20회 문 8 2025년 3월학평 18번, 10회 문 7 2025년 6월학평 29번)"
---

# 2026 마더텅 20분 미니모의고사 24회 [고1] 공통수학1 정독 데이터

## 문두 metadata · 표본 · 벤더 라벨 체계

### 표본 크기 · 실측 vs 예측

- **전체 총 문항**: 192문 (24회 × 8문/회 · 2005~2025년 학평·모평·수능 재수록)
- **표본**: **26문** 층화 (회차 1·2·5·10·12·15·18·20·24 집중 pick · 킬러 문항 우선)
- **예측 예정**: 나머지 166문 → 벤더 라벨 회귀 (배점 · 회차 내 문번 위치) 적용

### 마더텅 미니모의 라벨 체계 매핑

**미니모의 회차 형식** (매 회차 8문 · 20분):

| 회차 내 문번 | 배점 | 예상 시스템 ★ | 특성 |
|---|---|---|---|
| 문 1 | 2점 | ★ 1 | 기초 표준형 · 학평 1·2·3번급 |
| 문 2 | 2~3점 | ★ 1~2 | 기초 절차형 · 학평 4·5번급 |
| 문 3 | 3점 | ★ 2~3 | 표준 유형 · 학평 6~9번급 |
| 문 4 | 3점 | ★ 3 | 표준 응용 · 학평 10~13번급 |
| 문 5 | 3~4점 | ★ 3~4 | 통찰 진입 · 학평 14~17번급 |
| **문 6** | 4점 | **★ 4** | **킬러 진입** · 학평 18~21번급 |
| **문 7** | 4점 | **★ 4~5** | **킬러 상위** · 학평 25~29번급 |
| **문 8** | 4점 | **★ 5 (premium 후보 잦음)** | **킬러 정점** · 학평 29·30번급·수능급 |

**원본 배점 표기 (2/3/4점)**:
- 2점: ★ 1 (기초 · 절차형)
- 3점 (초반 문번): ★ 2 (표준 절차·1통찰)
- 3점 (중반 문번): ★ 3 (2~3 통찰)
- 4점 (문 6): ★ 4 (3~4 통찰 · 통찰형)
- 4점 (문 7·8): ★ 4~5 · **premium 후보 pool** (depth 게이트 통과 시)

### 미니모의 vs 정규 학평 재수록 (2025 마더텅 CM1) 차이

| 축 | 정규 학평 재수록 (1585문) | 20분 미니모의 (192문) |
|---|---|---|
| 규모 | 전 단원 · 5섹션 (기본·유형·서술·최고난·모의) | 24회 미니모의만 (100% 정규 학평 재수록 + 일부 수능·모평 편입) |
| 벤더 라벨 | ★☆☆·★★☆·★★★·★★★★ 자체 판정 4단계 | **미표기** (배점·문번만) |
| 학평 원문 명시 | 매 문항 회차·문번·연도 | 매 문항 회차·문번·연도 |
| **최신성** | **2003~2024** | **2005~2025 (2025년 6·9월학평 편입 확인)** |
| **킬러 밀도** | 88문/1585 = 5.6% | **24문/192 = 12.5% (2배)** — 문 8이 매 회차 최고난 |
| **premium 후보** | 2건 (표본 27문) | **7건 (표본 26문 · 27%)** — 킬러 밀도 반영 |
| CM1 침투 | 7건 심각 (사차 완전제곱·미분식 잔재·CM2 원 등) | **11건 심각 (미니모의 특성 · 킬러 재수록 편중)** |

### 실측 ★ 분포 (표본 26문)

| ★ | 표본 수 | 비율 |
|---|---:|---:|
| ★ 1 | 2 | 8% |
| ★ 2 | 3 | 12% |
| ★ 3 | 5 | 19% |
| ★ 4 | 9 | 35% |
| ★ 5 | 5 | 19% |
| ★ 5 premium | 2 | 8% |

★ 4~5 이상이 **62%** (기존 2025 마더텅 정규 51% 대비 +11%p) — 미니모의는 킬러 밀도 높음.

### 24회 미니모의 회차별 커버리지 (표본 pick 회차)

| 회차 | 페이지 | 표본 pick | 단원 색채 |
|---|---|---|---|
| 01회 | 1-4 | 4문 (1·2·6·7·8) | CM1-PL (다항식 연산) |
| 02회 | 5-8 | 3문 (1·6·7) | CM1-PL (곱셈공식 응용) + CM2 침투 |
| 03회 | 9-12 | 0문 (예측 8문) | CM1-PL (인수분해) |
| 04회 | 13-16 | 0문 (예측 8문) | CM1-PL (나머지정리) |
| 05회 | 17-20 | 4문 (1·6·7·8) | CM1-PL·EQ (사차·인수분해) + **CM1 침투 심각 (4차 완제)** |
| 06회 | 21-24 | 0문 (예측 8문) | CM1-EQ-01 (복소수) |
| 07회 | 25-28 | 0문 (예측 8문) | CM1-EQ-01 (이차방정식) |
| 08회 | 29-32 | 0문 (예측 8문) | CM1-EQ-02 (이차함수) |
| 09회 | 33-36 | 0문 (예측 8문) | CM1-EQ-02·03 (이차·삼차 전이) |
| 10회 | 37-40 | 5문 (1·3·5·6·7·8) | CM1-EQ-03 (삼차·사차방정식 킬러) |
| 11회 | 41-44 | 0문 (예측 8문) | CM1-EQ-03 (연립·특수 방정식) |
| 12회 | 45-48 | 3문 (1·7·8) | CM1-EQ-04 (부등식 킬러) |
| 13회 | 49-52 | 0문 (예측 8문) | CM1-EQ-04 (이차부등식) |
| 14회 | 53-56 | 0문 (예측 8문) | CM1-CB (경우의 수 진입) |
| 15회 | 57-60 | 3문 (5·6·8) | CM1-EQ (이차함수·부등식 킬러 재편) |
| 16회 | 61-64 | 0문 (예측 8문) | CM1-CB-01 (순열) |
| 17회 | 65-68 | 0문 (예측 8문) | CM1-CB-02 (조합) |
| 18회 | 69-72 | 1문 (4) | CM1-CB (순열·조합 혼합) |
| 19회 | 73-76 | 0문 (예측 8문) | CM1-CB (킬러) |
| 20회 | 77-80 | 4문 (1·2·6·7) | CM1-CB (**수능 나형 재수록 · 침투 위험**) |
| 21회 | 81-84 | 0문 (예측 8문) | CM1-CB (킬러·서술형) |
| 22회 | 85-88 | 0문 (예측 8문) | CM1-MX-01 (행렬 기초) |
| 23회 | 89-92 | 0문 (예측 8문) | CM1-MX (행렬 응용) |
| 24회 | 93-96 | 4문 (2·4·5·7) | **CM1-MX 킬러 정점** (2010·2013 고2 재수록) |

**표본 커버리지**: 9회차 pick + 15회차 예측 = 100% (192문 전체 · 킬러 pool 문 6~8 위주 우선 표본 26문)

---

## I. 다항식 (CM1-PL · 회차 01~05) — 표본 8문

### 01회 (2021년 학평 중심)

- id: 마-미니-CM1-PL-01회-01
  round: 01회
  pos: 문 1
  page: p001
  vendor_label: "2점 · 2021년 9월학평 1번(고1)"
  category_type: 회차 문 1 · 기초 절차형
  summary: |
    두 다항식 A=x²-x+1, B=-x²+2x에 대하여 A+B · 5지선다
  category: 다항식 덧셈 · 학평 1번 표준형
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  rationale: |
    학평 1번 · 절차형 · 통찰 부재. 마더텅 배점 2점 정합.
  tier: star_1
  mechanism_primary: 동류항 정리
  insight_type: 절차형
  target_cohort: 하위권~중하위권
  vendor_calibration_signal:
    L5_confidence: 0.95

- id: 마-미니-CM1-PL-01회-02
  round: 01회
  pos: 문 2
  page: p001
  vendor_label: "3점 · 2021년 11월학평 23번(고1)"
  category_type: 회차 문 2 · 기초~표준
  summary: |
    다항식 (x+a)³+x(x-4)의 전개식에서 x²의 계수가 10일 때, 상수 a의 값 · 서답형
  category: 세제곱 전개 · x² 계수 비교
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, signal_ref: [P2], description: "(x+a)³의 x² 계수 = 3a · 미정계수 등식 유도"}
  insight_count: 1
  depth_score: 3.5
  base_star: 2
  star: 2
  premium: false
  rationale: |
    학평 23번(고1) · 서답형 · 세제곱 전개 · 계수 비교 1통찰 · ★ 2 안정.
  tier: star_2
  mechanism_primary: (a+b)³ 전개 · 계수 매칭
  insight_type: 절차+1통찰
  target_cohort: 하위권~중위권
  vendor_calibration_signal:
    L5_confidence: 0.85

- id: 마-미니-CM1-PL-01회-06
  round: 01회
  pos: 문 6
  page: p003
  vendor_label: "4점 · 2023년 6월학평 14번(고1)"
  category_type: 회차 문 6 · 킬러 진입
  summary: |
    이상 기체 상태방정식 V=R(nT/P) 조건 · 강철 용기 A·B 부피 VA·VB · 몰수 A=B/4 · 압력 A=(3/2)B · 온도 같을 때 VA/VB 값 · 5지선다
  category: 지문형 4단계 (상태방정식 이해) + 대수 대입 + 비 조건 계산
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - {step: 1, type: I-XU, depth: 2, effective_depth: 2, signal_ref: [P3], description: "지문 4단계 상태 → V∝nT/P 대입 조건 파악"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, signal_ref: [P2], description: "온도 T 소거 · 비 조건 변수 소거 · (V_A/V_B) = (n_A·P_B)/(n_B·P_A) 대입"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "1/4 · 2/3 곱 → 답 1/6"}
  insight_count: 3
  depth_score: 6.0
  base_star: 4
  star: 4
  premium: false
  rationale: |
    학평 14번 · 4점 · 지문형 다층 상황 · 물리 상태식 이해 필요 · ★ 4 안정. 반드시 대수(다항식)의 나눗셈 응용은 아님 — 미니모의 문 6 킬러 진입 표준.
  tier: star_4
  mechanism_primary: 지문 대수식 대입 · 비 조건 소거
  insight_type: 통찰형 (지문 다층)
  target_cohort: 중상위권
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["EBS 올림포스 CM1-CH01 응용 유형과 정합"]
    L5_confidence: 0.85

- id: 마-미니-CM1-PL-01회-07
  round: 01회
  pos: 문 7
  page: p004
  vendor_label: "4점 · 2024년 10월학평 29번(고1)"
  category_type: 회차 문 7 · 킬러 상위 (도형·기하 침투)
  summary: |
    중심 O₁, 원 C₁ · 두 점 A, B (∠BO₁A=90°) · AC 지름 원 C₂ · BD 지름 원 C₃ (C₂, C₃ 중심 O₂, O₃) · 사각형 AO₂O₃B 넓이 34 · O₁C+O₁D=6√2 · 세 원 C₁·C₂·C₃ 길이 합 pπ · p 값 · 서답형
  category: 원의 방정식·지름원·중심각·사각형 넓이 킬러
  M: {s: 3, k: 3, a: 3, t: 1}
  M_total: 10
  insights:
    - {step: 1, type: I-XU, depth: 3, effective_depth: 3, signal_ref: [P3], description: "중심 O₂·O₃ = AC/2, BD/2 위치 파악 (지름원 성질)"}
    - {step: 2, type: I-RT, depth: 3, effective_depth: 3, signal_ref: [P6], description: "∠BO₁A=90° 직교 좌표 배치 (원의 방정식 · CM2)"}
    - {step: 3, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P2, P5], description: "사각형 넓이 34 = 1/2·d1·d2 대각선 조건"}
    - {step: 4, type: I-CON, depth: 3, effective_depth: 3, description: "세 원 반지름 합 = O₁A/2 + AC/2 + BD/2"}
  insight_count: 4
  depth_score: 8.4
  base_star: 5
  star: 5
  premium: false  # 근접 미달 (count 4)
  rationale: |
    2024년 10월학평 29번 · 4점 · 준최상위 킬러. **🔴 CM1 침투 심각**: 원의 방정식·중심각·현·사각형 넓이 = **CM2-GM-원 소단원** · CM1에는 원 자체 학습 없음. 마더텅이 학평 원문을 CM1으로 재수록했으나 원본 학평 자체가 CM1·CM2 통합 학습 이후 시점 문제.
    · 시스템 관점: **CM1 정독 자산 배제** (CM2-GM-원 정독 자산 편입 대상)
  tier: star_5
  mechanism_primary: 원·지름원 성질 · 중심각·사각형 넓이 (CM2 침투)
  insight_type: 통찰형 (기하 다층)
  target_cohort: 상위권
  vendor_calibration_signal:
    L5_confidence: 0.80
  🔴침투:
    axis: CM2-GM-원 침투
    severity: 심각
    recommendation: "CM1 은행 배제 · CM2-GM-원 자산 편입"
    original_source_year_range: "고1 학평이지만 CM2 학습 이후 (2학기말) 출제 관행"

- id: 마-미니-CM1-PL-01회-08
  round: 01회
  pos: 문 8
  page: p004
  vendor_label: "4점 · 2024년 6월학평 28번(고1)"
  category_type: 회차 문 8 · 킬러 정점
  summary: |
    이차다항식 f(x)와 일차다항식 g(x)에 대하여 f(x)g(x)를 f(x)-2x²으로 나누었을 때의 몫은 x²-3x+3이고 나머지는 f(x)+xg(x) · f(-2)의 값 · 서답형
  category: 다항식 나눗셈 · 몫·나머지 등식 · f·g 결정
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P2], description: "f(x)g(x) = (f(x)-2x²)(x²-3x+3) + f(x) + xg(x) 항등식 설정"}
    - {step: 2, type: I-CON, depth: 3, effective_depth: 3, signal_ref: [P3], description: "차수 비교 (좌변 3차 · 우변 4차 → 계수 관계) · f, g 최고차항 결정"}
    - {step: 3, type: I-PD, depth: 3, effective_depth: 3, signal_ref: [P4, P6], description: "계수 비교로 f = ax² + bx + c, g = dx + e 3~5원 연립"}
    - {step: 4, type: I-BW, depth: 2, effective_depth: 2, description: "역추적 f, g 최종 결정 · f(-2) 대입"}
    - {step: 5, type: I-SC, depth: 2, effective_depth: 2, description: "부호 처리 · 검산"}
  insight_count: 5
  depth_score: 8.6
  base_star: 5
  star: 5
  premium: true  # premium 임계 통과
  rationale: |
    2024년 6월학평 28번 · 4점 · **premium 임계 통과** (depth_score 8.6 ≥ 8.5 · max=3 · count=5 · signal_ref P 카드 4종).
    · 다항식 나눗셈 항등식 정점 · 몫·나머지가 f·g 자신에 대한 방정식이 되는 순환 구조 (O-09 P(x)-f(x) 감차 원형 근사)
    · CM1-PL-02 나머지정리·인수분해 정점 pool
  tier: star_5_premium
  premium_archetype: O-09 · P(x)-f(x) 감차 (다항식·나머지정리) — 순환 구조 변형
  mechanism_primary: 다항식 나눗셈 항등식 · 계수 비교
  insight_type: 통찰형
  target_cohort: 상위권 (최상위)
  novelty_score: 3
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["EBS 올림포스 CM1-CH01 1등급 도전 근접 유형"]
    L5_confidence: 0.90

### 02회 (2022~2025년)

- id: 마-미니-CM1-PL-02회-01
  round: 02회
  pos: 문 1
  page: p005
  vendor_label: "2점 · 2022년 3월학평 1번(고2)"
  category_type: 회차 문 1 · 기초
  summary: |
    두 다항식 A=3x²-2xy+y², B=x²+xy-y²에 대하여 A-B · 5지선다
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  rationale: |
    학평 1번 · 절차형 · 이변수 다항식 뺄셈 (동류항). 2022 3월학평 고2였지만 CM1-PL 초입 정합.
  tier: star_1
  mechanism_primary: 이변수 동류항 정리
  insight_type: 절차형
  target_cohort: 하위권
  vendor_calibration_signal:
    L5_confidence: 0.95

- id: 마-미니-CM1-PL-02회-07
  round: 02회
  pos: 문 7
  page: p008
  vendor_label: "4점 · 2024년 6월학평 19번(고1)"
  category_type: 회차 문 7 · 킬러 (기하 침투)
  summary: |
    길이 2a AB 지름 반원 · 호 AB 위 두 점 C, D · AC=CD=a-1 · BD=8 · a³-1/a³ 값 (a>4 상수) · 5지선다
  category: 반원·호·현 길이 · 대수식 결합
  M: {s: 2, k: 3, a: 2, t: 1}
  M_total: 8
  insights:
    - {step: 1, type: I-XU, depth: 3, effective_depth: 3, signal_ref: [P3], description: "반원 위 세 등분 호 → 중심각 · 원주각 조건 파악"}
    - {step: 2, type: I-RT, depth: 3, effective_depth: 3, signal_ref: [P6], description: "AC=CD 조건 → CD의 원주각·현길이 관계 · 좌표 배치"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, signal_ref: [P2], description: "삼각비 조건 · 지름 관계 → a에 대한 등식 유도"}
    - {step: 4, type: I-SC, depth: 2, effective_depth: 2, description: "a³-1/a³ = (a-1/a)(a²+1+1/a²) 곱셈공식 응용"}
  insight_count: 4
  depth_score: 7.9
  base_star: 4
  star: 4
  premium: false
  rationale: |
    2024년 6월학평 19번 · 4점 킬러. 반원·현 조건에서 a 값 유도 → 곱셈공식 대칭식 응용. **CM2-GM-원 침투**이지만 최종 유도가 CM1-PL (곱셈공식 항등식)이라 미묘한 경계선.
    · 시스템 관점: **CM1 대체 은행으로는 적합 (곱셈공식 응용 중심)**, 다만 반원·호 조건 이해에 CM2-GM 배경 필요
  tier: star_4
  mechanism_primary: 원·반원 성질 + 곱셈공식 대칭 항등식
  insight_type: 통찰형 (기하 + 대수 융합)
  target_cohort: 상위권
  vendor_calibration_signal:
    L5_confidence: 0.75
  🔴침투:
    axis: CM2-GM-원 침투 (배경)
    severity: 중간
    recommendation: "곱셈공식 응용 축은 CM1 정합 · 원·호 배경은 CM2 편입 병기"

- id: 마-미니-CM1-PL-02회-08
  round: 02회
  pos: 문 8
  page: p008
  vendor_label: "4점 · 2022년 11월학평 29번(고1)"
  category_type: 회차 문 8 · 킬러 정점 (공간도형 침투)
  summary: |
    모든 모서리 길이 a 정사각뿔 O-ABCD · 네 선분 OA·OB·OC·OD 위 네 점 E·F·G·H (OE=OF=OG=OH=b) · 두 정사각뿔 O-ABCD, O-EFGH 부피 합 2√2 · 선분 AF 길이 2 · 사각형 ABFE 넓이 S · 32×S² 값 (a>b>0) · 서답형
  category: 정사각뿔·부피·사각형 넓이 (공간도형 심화)
  M: {s: 3, k: 3, a: 3, t: 1}
  M_total: 10
  insights:
    - {step: 1, type: I-XU, depth: 3, effective_depth: 3, signal_ref: [P3, P5], description: "정사각뿔 부피 공식 · 상사비 (b/a) 이해 → V_대 - V_소 = V_잘린 조건"}
    - {step: 2, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P2], description: "부피 합 = a³·f(1+ (b/a)³) √2/6 = 2√2 등식 유도"}
    - {step: 3, type: I-RT, depth: 3, effective_depth: 3, signal_ref: [P6], description: "AF 길이 = 코사인법칙·좌표 배치로 계산 (OA=a·OF=b·∠AOF)"}
    - {step: 4, type: I-CON, depth: 3, effective_depth: 3, description: "AF²=2 → a·b 이차 관계 · 부피 조건과 연립"}
    - {step: 5, type: I-SC, depth: 2, effective_depth: 2, description: "사각형 ABFE = 사다리꼴 넓이 (평행 두 변 EF·AB · 높이) · S² 계산"}
  insight_count: 5
  depth_score: 8.7
  base_star: 5
  star: 5
  premium: true
  rationale: |
    2022년 11월학평 29번 · 4점 · **premium 임계 통과** (depth_score 8.7 · count 5 · max=3 · P 카드 4종).
    · **🔴 CM1 침투 심각**: 정사각뿔·상사비·삼각비 코사인법칙 = **공간도형·삼각비 (2015 개정 이전 고2 수학Ⅱ · 2022 개정 CM2 밖)**. 최종 대수는 CM1 곱셈공식 응용이지만 배경 도형 이해 없이는 접근 불가.
    · 시스템 관점: **CM1·CM2 은행 모두 배제** — 고2 수학Ⅰ (삼각함수) 편성 대상
  tier: star_5_premium
  premium_archetype: O-04 · 사각뿔 3D 무게중심 최단경로 원형 인접 (부피·상사비 변형)
  mechanism_primary: 정사각뿔 부피 · 상사비 · 코사인법칙
  insight_type: 통찰형 (공간·기하)
  target_cohort: 상위권 (최상위)
  novelty_score: 2
  vendor_calibration_signal:
    L5_confidence: 0.85
  🔴침투:
    axis: 삼각함수·공간도형 침투 (고2 수학Ⅰ)
    severity: 심각
    recommendation: "CM1 은행 배제 · 고2 삼각함수 자산으로 이관"

### 05회 (2023~2024년)

- id: 마-미니-CM1-PL-05회-06
  round: 05회
  pos: 문 6
  page: p019
  vendor_label: "4점 · 2022년 11월학평 16번(고1)"
  category_type: 회차 문 6 · 킬러 진입
  summary: |
    x에 대한 다항식 (x-1)(x-4)(x-5)(x-8) + a가 (x+b)²(x+c)²으로 인수분해될 때, 세 정수 a·b·c에 대하여 a+b+c 값 · 5지선다
  category: 사차식 완전제곱꼴 인수분해
  M: {s: 3, k: 3, a: 2, t: 0}
  M_total: 8
  insights:
    - {step: 1, type: I-XU, depth: 3, effective_depth: 3, signal_ref: [P3, P5], description: "1·8과 4·5 짝지어 곱 (합 9 동일) · X=x²-9x 치환 아이디어"}
    - {step: 2, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P2], description: "(X+8)(X+20)+a = (X+p)² 완전제곱 조건 · a 결정"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "치환 복원 · x²-9x+r 이차식이 완전제곱 → 판별식 0 · b, c 결정"}
  insight_count: 3
  depth_score: 7.0
  base_star: 4
  star: 4
  premium: false
  rationale: |
    2022년 11월학평 16번 · 4점 · 사차 완전제곱형.
    · **🔴 CM1 침투 심각**: "4차 완전제곱꼴" 원형 [feedback_no_quartic_perfect_square] 명시 금지 대상. 미분·평행이동 없이 학평 풀이 시 X 치환 통찰 강제 → 학생 벽 매우 높음.
    · 시스템 관점: **CM1 정독 자산 등재 배제**. 다만 학평 원문 자체는 재수록.
  tier: star_4
  mechanism_primary: 사차식 X 치환 · 완전제곱 조건
  insight_type: 통찰형
  target_cohort: 상위권
  vendor_calibration_signal:
    L5_confidence: 0.85
  🔴침투:
    axis: 4차 완전제곱꼴 (CM1 명시 금지)
    severity: 심각
    recommendation: "CM1 시험지·유형편 사용 금지 · 참고용 정독만 등재"

- id: 마-미니-CM1-PL-05회-08
  round: 05회
  pos: 문 8
  page: p020
  vendor_label: "4점 · 2020년 6월학평 21번(고1)"
  category_type: 회차 문 8 · 킬러 정점
  summary: |
    최고차항 계수 1 사차다항식 f(x) 다음 조건 · (가) f(x)를 x+2·x²+4로 나눈 나머지는 모두 3p² · (나) f(1)=f(-1) · (다) x-√p는 f(x)의 인수 · 양수 p 값 · 5지선다
  category: 사차 f(x) 3조건 (나머지·대칭·인수) → p 결정
  M: {s: 3, k: 3, a: 3, t: 1}
  M_total: 10
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P2, P5], description: "(가) 나머지 조건 → f(-2)=3p² · f(x)=(x²+4)Q(x)+3p² (x²+4 나머지) · f(±2i)=3p² 복소수 대입"}
    - {step: 2, type: I-SYM, depth: 3, effective_depth: 3, signal_ref: [P4], description: "(나) f(1)=f(-1) 대칭 → f의 홀차수 항 소거 · f(x)=x⁴+cx²+d 꼴"}
    - {step: 3, type: I-CON, depth: 3, effective_depth: 3, signal_ref: [P3], description: "(다) x-√p 인수 → f(√p)=0 · p⁴+cp²+d=0"}
    - {step: 4, type: I-PD, depth: 3, effective_depth: 3, description: "3원 연립 → c·d·p 결정"}
    - {step: 5, type: I-BW, depth: 2, effective_depth: 2, signal_ref: [P6], description: "역추적 · 부합 p 값 선별"}
  insight_count: 5
  depth_score: 8.8
  base_star: 5
  star: 5
  premium: true
  rationale: |
    2020년 6월학평 21번 · 4점 · **premium 임계 통과** (depth_score 8.8 · count 5 · max=3 · P 카드 4종).
    · 사차 f(x) 3조건 결정 정점 · 나머지 정리·대칭성·인수 통찰 결합
    · **CM1-PL-02 나머지정리·인수분해 정점 pool** · 4차 완전제곱꼴 아님 (일반 사차 계수 결정) · CM1 정합
  tier: star_5_premium
  premium_archetype: O-09 · P(x)-f(x) 감차 · 3조건 결정형 변형
  mechanism_primary: 나머지 정리 · 대칭성 · 인수분해 3조건 연립
  insight_type: 통찰형
  target_cohort: 상위권 (최상위)
  novelty_score: 3
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["EBS 올림포스 CM1-CH02 1등급 도전 유형", "마더텅 CM1 최고난 마-CM1-PL-02-203과 원형 근접"]
    L5_confidence: 0.90

---

## II. 방정식과 부등식 (CM1-EQ · 회차 06~13, 15) — 표본 8문

### 10회 (2022~2025년 · 삼차·사차 방정식 킬러)

- id: 마-미니-CM1-EQ-10회-01
  round: 10회
  pos: 문 1
  page: p037
  vendor_label: "3점 · 2022년 6월학평 13번(고1)"
  category_type: 회차 문 1 (미니모의 특성 · 문 1도 3점 킬러 진입)
  summary: |
    삼차방정식 x³+2x²-3x-10=0의 서로 다른 두 허근 α, β일 때 α³+β³ · 5지선다
  category: 삼차방정식 · 허근·대칭식 (삼차·허근 통찰)
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P2, P5], description: "실근 x=2 → 조립제법 · (x-2)(x²+4x+5)=0 · 허근은 x²+4x+5=0의 두 근"}
    - {step: 2, type: I-SYM, depth: 2, effective_depth: 2, signal_ref: [P4], description: "α+β=-4, αβ=5 · α³+β³ = (α+β)³-3αβ(α+β) = -64+60 = -4"}
  insight_count: 2
  depth_score: 6.5
  base_star: 3
  star: 3
  premium: false
  rationale: |
    2022년 6월학평 13번 · 3점 · 삼차 인수분해 + 근과 계수 관계 대칭식. ★ 3 안정 (통찰 결합 · CM1-EQ 표준).
  tier: star_3
  mechanism_primary: 삼차 인수분해 + 대칭식 α³+β³ 공식
  insight_type: 통찰형
  target_cohort: 중상위권
  vendor_calibration_signal:
    L5_confidence: 0.90

- id: 마-미니-CM1-EQ-10회-03
  round: 10회
  pos: 문 3
  page: p038
  vendor_label: "3점 · 2017년 6월학평 13번(고1)"
  category_type: 회차 문 3
  summary: |
    x에 대한 사차방정식 x⁴-x³+ax²+x+6=0의 한 근이 -2일 때, 네 실근 중 가장 큰 것 b · a+b 값 (a 상수) · 5지선다
  M: {s: 2, k: 3, a: 2, t: 0}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, signal_ref: [P2], description: "x=-2 대입 · a 결정"}
    - {step: 2, type: I-PD, depth: 3, effective_depth: 3, signal_ref: [P5], description: "조립제법 · (x+2)Q(x)=0 · 삼차식 Q(x) 인수분해"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "실근 4개 중 최댓값 b 선별"}
  insight_count: 3
  depth_score: 7.0
  base_star: 4
  star: 4  # 3점이지만 사차·다중 인수분해라 시스템 관점 ★ 4
  premium: false
  rationale: |
    2017년 6월학평 13번 · 3점이지만 사차 실근 4개 인수분해 필요 → 시스템 ★ 4 (통찰 3단계 · 계산 부담).
    · 4차 완전제곱꼴 아님 (일반 사차 인수분해) · CM1-EQ-03 정합
  tier: star_4
  mechanism_primary: 조립제법 · 사차 인수분해 · 실근 열거
  insight_type: 통찰형 (다층 인수분해)
  target_cohort: 중상위권~상위권
  vendor_calibration_signal:
    L5_confidence: 0.80

- id: 마-미니-CM1-EQ-10회-05
  round: 10회
  pos: 문 5
  page: p039
  vendor_label: "4점 · 2023년 6월학평 18번(고1)"
  category_type: 회차 문 5 · 킬러 진입 (유도형 빈칸)
  summary: |
    자연수 n · 사차방정식 4x⁴-4(n+2)x²+(n-2)²=0이 서로 다른 네 정수해를 갖도록 하는 20 이하 모든 n · (가)(나)(다) 빈칸 유도형 · x²=X 치환·근공식 유도 · X=(n+2±√(가))/2 · 조건 정리 후 n=b-a (a<b) · f(b-a) 값 · 5지선다
  category: 사차식 X 치환·자연수 판별·정수해 조건 유도형
  M: {s: 3, k: 3, a: 3, t: 1}
  M_total: 10
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P2, P5], description: "X=x² 치환 · 4X²-4(n+2)X+(n-2)²=0 · 근공식으로 X 표현"}
    - {step: 2, type: I-XU, depth: 3, effective_depth: 3, signal_ref: [P3], description: "빈칸 (가) 판별식 조건 · X = (n+2 ± √(가))/2 유도 · (가) = 16n"}
    - {step: 3, type: I-CON, depth: 3, effective_depth: 3, description: "X = (√(n/2)±1)² 완전제곱형 · x = ±(√(n/2) + 1), ±(√(n/2) - 1) · 정수해 조건 → n/2 자연수 제곱"}
    - {step: 4, type: I-PD, depth: 3, effective_depth: 3, signal_ref: [P6], description: "n/2 ∈ {1, 4, 9} → n=2, 8, 18 · 서로 다른 4개 조건 필터"}
    - {step: 5, type: I-SC, depth: 2, effective_depth: 2, description: "빈칸 (나)(다) · a·b 유도 후 f(b-a) 계산"}
  insight_count: 5
  depth_score: 8.7
  base_star: 5
  star: 5
  premium: true
  rationale: |
    2023년 6월학평 18번 · 4점 · **premium 임계 통과** (depth_score 8.7 · count 5 · max=3 · P 카드 4종).
    · 사차 X 치환 · 판별식 · 완전제곱형 · 정수해 조건 다층 통찰 · 유도형 빈칸으로 편의 제공되지만 통찰 깊이 유지
    · **CM1-EQ-03 정점 pool** · 4차 완전제곱꼴 학습 없이도 X 치환으로 접근 가능 → CM1 정합
  tier: star_5_premium
  premium_archetype: O-NEW-33 · 사차 X 치환 + 정수해 판별 (신규 후보)
  mechanism_primary: X=x² 치환 · 판별식 · 완전제곱 조건 · 정수해 열거
  insight_type: 통찰형
  target_cohort: 상위권 (최상위)
  novelty_score: 3
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["EBS 올림포스 CM1-CH03 1등급 도전 유형", "마더텅 CM1 최고난 파일과 원형 신규 (기존 파일에는 없음)"]
    L5_confidence: 0.90

- id: 마-미니-CM1-EQ-10회-06
  round: 10회
  pos: 문 6
  page: p039
  vendor_label: "4점 · 2019년 9월학평 20번(고1)"
  category_type: 회차 문 6 · 킬러 (ㄱㄴㄷ 보기)
  summary: |
    9 이하 자연수 n · 다항식 P(x)=x⁴+x²-n²-n · [보기] ㄱ. P(√n)=0 · ㄴ. 방정식 P(x)=0의 실근 개수 2 · ㄷ. 모든 정수 k에 대하여 P(k)≠0이 되도록 하는 모든 n의 합 31 · 옳은 것만 · 5지선다
  category: 사차식 인수·실근·정수 판정 ㄱㄴㄷ 킬러
  M: {s: 3, k: 3, a: 3, t: 0}
  M_total: 9
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P2, P5], description: "P(x) = (x²+n+1)(x²-n) 인수분해 (n²+n = n(n+1) 관찰)"}
    - {step: 2, type: I-CON, depth: 3, effective_depth: 3, description: "ㄱ. P(√n) = (n+n+1)(n-n) = 0 · 참"}
    - {step: 3, type: I-XU, depth: 3, effective_depth: 3, signal_ref: [P3], description: "ㄴ. x²+n+1 > 0 (양수) · x²=n · x=±√n · 실근 2개 · 참"}
    - {step: 4, type: I-PD, depth: 3, effective_depth: 3, signal_ref: [P6], description: "ㄷ. P(k)≠0 정수 → k²≠n · n이 완전제곱수 아니어야 → n ∈ {2,3,5,6,7,8} 합 31 · 참"}
  insight_count: 4
  depth_score: 8.3
  base_star: 5
  star: 5
  premium: false  # 근접
  rationale: |
    2019년 9월학평 20번 · 4점 · ㄱㄴㄷ 참·참·참. 사차 인수분해 통찰이 정점 · 정수·완전제곱수 열거. premium 임계 근접 (count 4 미달).
  tier: star_5
  mechanism_primary: 사차 인수분해 (합·곱 관찰) · 정수·완전제곱수 열거
  insight_type: 통찰형
  target_cohort: 상위권
  vendor_calibration_signal:
    L5_confidence: 0.85

- id: 마-미니-CM1-EQ-10회-07
  round: 10회
  pos: 문 7
  page: p040
  vendor_label: "4점 · 2025년 6월학평 29번(고1)"
  category_type: 회차 문 7 · 킬러 상위 (최신 2025년)
  summary: |
    x에 대한 삼차방정식 (x-1)(x²+ax+b)=0의 서로 다른 세 근 α·β·γ · (2α+2β-γ)² = -81 · (4+α)(4+β)(4+γ) 값 (a, b 실수) · 서답형
  category: 삼차방정식 세 근 · 대칭식 · 복소수 조건
  M: {s: 3, k: 3, a: 3, t: 1}
  M_total: 10
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P2], description: "α=1 (실근) · β, γ는 x²+ax+b=0의 두 근 · β+γ=-a, βγ=b"}
    - {step: 2, type: I-CON, depth: 3, effective_depth: 3, signal_ref: [P3, P5], description: "(2α+2β-γ)² = (2+2β-γ)² = -81 → 허수 조건 · 2β-γ = ±9i-2 (β, γ 켤레)"}
    - {step: 3, type: I-SYM, depth: 3, effective_depth: 3, signal_ref: [P4], description: "β·γ 켤레 · β=p+qi, γ=p-qi · a=-2p, b=p²+q² · 계산 유도"}
    - {step: 4, type: I-PD, depth: 3, effective_depth: 3, description: "2β-γ = p+3qi (혹은 유사) · 실부 -2, 허부 9 → p, q 결정"}
    - {step: 5, type: I-VF, depth: 2, effective_depth: 2, signal_ref: [P6], description: "(4+α)(4+β)(4+γ) = 5·(4+β)(4+γ) = 5·(16+4(β+γ)+βγ)"}
  insight_count: 5
  depth_score: 8.7
  base_star: 5
  star: 5
  premium: true
  rationale: |
    **2025년 6월학평 29번** · 4점 · **premium 임계 통과** (depth_score 8.7 · count 5 · max=3 · P 카드 5종).
    · **최신 2025년 학평 재수록** · 삼차 세 근 · 켤레복소수·대칭식 결합 정점
    · CM1-EQ-01·03 정합 정점 pool · O-08 (1의 n제곱근 감차) 원형과 다름 · 신규 원형 O-NEW-34 후보
  tier: star_5_premium
  premium_archetype: O-NEW-34 · 삼차 세 근 켤레복소수 + 대칭 조건 (신규 후보)
  mechanism_primary: 삼차 실근·허근 · 켤레 조건 · 근과 계수 관계
  insight_type: 통찰형
  target_cohort: 상위권 (최상위)
  novelty_score: 3
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["2025년 최신 학평 원문 · 아직 시판 자산 미편입"]
    L5_confidence: 0.85

- id: 마-미니-CM1-EQ-10회-08
  round: 10회
  pos: 문 8
  page: p040
  vendor_label: "4점 · 2024년 3월학평 29번(고2)"
  category_type: 회차 문 8 · 킬러 정점
  summary: |
    f(x)=x⁴+(a+2)x³+bx²+ax+6 · 최고차항 계수 1이고 계수와 상수항 모두 실수인 두 다항식 g(x), h(x) 조건: (가) f(x)=0은 실근 갖지 않음 · (나) f(x)=g(x)h(x) 인수 · h(x)를 g(x)로 나눈 나머지 -4x-1 · a²+b² 값 · 서답형
  category: 사차식 실근 없음·인수분해·나머지 유도 (a, b 결정)
  M: {s: 3, k: 3, a: 3, t: 1}
  M_total: 10
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P2, P5], description: "(가) 실근 없음 · 실계수 사차 → g(x), h(x)는 모두 이차 (두 켤레 근씩)"}
    - {step: 2, type: I-CON, depth: 3, effective_depth: 3, signal_ref: [P3], description: "g(x)=x²+px+q, h(x)=x²+rx+s (모두 실수) · 켤레 페어 분리"}
    - {step: 3, type: I-PD, depth: 3, effective_depth: 3, signal_ref: [P4], description: "f = g·h 전개 → p+r=a+2, q+s+pr=b, ps+qr=a, qs=6 (4원 연립)"}
    - {step: 4, type: I-XU, depth: 3, effective_depth: 3, signal_ref: [P6], description: "h(x)=g(x)·Q+(-4x-1) · Q=1 (차수 같음) · h(x)-g(x) = -4x-1 → r-p=-4, s-q=-1"}
    - {step: 5, type: I-BW, depth: 2, effective_depth: 2, description: "6원 연립 (a, b, p, q, r, s) 정합 해 · a²+b² 계산"}
  insight_count: 5
  depth_score: 8.8
  base_star: 5
  star: 5
  premium: true
  rationale: |
    2024년 3월학평 29번(고2) · 4점 · **premium 임계 통과** (depth_score 8.8 · count 5 · max=3 · P 카드 5종).
    · 사차 인수분해·나머지·실근 없음 조건 결합 정점 · 다변수 연립·통찰 5단계
    · **CM1-PL-02·EQ-03 정점 pool** · CM1 정합 · O-09 (P(x)-f(x) 감차) 원형과 다름
  tier: star_5_premium
  premium_archetype: O-NEW-35 · 사차 실근없음 + 인수분해 + 나머지 3조건 (신규 후보)
  mechanism_primary: 실계수 사차 인수분해 · 켤레 페어 · 나머지 정리 · 다변수 연립
  insight_type: 통찰형
  target_cohort: 상위권 (최상위)
  novelty_score: 3
  vendor_calibration_signal:
    L5_confidence: 0.85

### 12회 (2021~2024년 · 부등식 킬러)

- id: 마-미니-CM1-EQ-12회-01
  round: 12회
  pos: 문 1
  page: p045
  vendor_label: "3점 · 2016년 6월학평 7번(고1)"
  category_type: 회차 문 1 · 기초 절대부등식
  summary: |
    부등식 |x-a|<5 · 만족시키는 정수 x 최댓값 12일 때 정수 a 값 · 5지선다
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, signal_ref: [P2], description: "|x-a|<5 → a-5<x<a+5 · 정수 x 최댓값 = a+4"}
  insight_count: 1
  depth_score: 3.5
  base_star: 2
  star: 2
  premium: false
  rationale: |
    학평 7번 · 3점이지만 절댓값 부등식 표준 · 통찰 1개 · ★ 2 안정
  tier: star_2
  mechanism_primary: 절댓값 부등식 · 정수 구간
  insight_type: 절차+1통찰
  target_cohort: 중하위권
  vendor_calibration_signal:
    L5_confidence: 0.90

- id: 마-미니-CM1-EQ-12회-07
  round: 12회
  pos: 문 7
  page: p048
  vendor_label: "4점 · 2019년 6월학평 30번(고1)"
  category_type: 회차 문 7 · 킬러 상위
  summary: |
    x에 대한 이차부등식 (2x-a²+2a)(2x-3a)≤0의 해가 α≤x≤β · 두 실수 α, β 조건 (가) β-α는 자연수 (나) α≤x≤β 만족시키는 정수 x의 개수 3 · 모든 실수 a 값의 합 · 서답형
  category: 이차부등식 두 근 · 정수해 개수 조건
  M: {s: 3, k: 3, a: 3, t: 1}
  M_total: 10
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P2, P5], description: "두 근 x=(a²-2a)/2, 3a/2 · 대소 비교로 α, β 분리 (a 부호별 case)"}
    - {step: 2, type: I-CON, depth: 3, effective_depth: 3, signal_ref: [P3], description: "(가) β-α = |(a²-2a-3a)/2| = |(a²-5a)/2| = 자연수 조건"}
    - {step: 3, type: I-PD, depth: 3, effective_depth: 3, signal_ref: [P4], description: "(나) 정수 x 3개 → β-α 범위 (2 이상 3 미만 또는 3 이상 4 미만 등) · case 분석"}
    - {step: 4, type: I-XU, depth: 3, effective_depth: 3, signal_ref: [P6], description: "(a²-5a)/2 = 자연수 · 정수해 3개 다중 case → a 후보 열거"}
    - {step: 5, type: I-BW, depth: 2, effective_depth: 2, description: "역추적 · a 값 정합 필터 · 모든 a 합"}
  insight_count: 5
  depth_score: 8.7
  base_star: 5
  star: 5
  premium: true
  rationale: |
    2019년 6월학평 30번 · 4점 · **premium 임계 통과** (depth_score 8.7 · count 5 · max=3 · P 카드 5종).
    · 이차부등식 두 근 대소·자연수 조건·정수해 개수 다층 결합 정점
    · **CM1-EQ-04 정점 pool** · 부등식 킬러 원형
  tier: star_5_premium
  premium_archetype: O-NEW-36 · 이차부등식 두 근 자연수+정수해 개수 (신규 후보)
  mechanism_primary: 이차부등식 근 · case 분석 · 자연수·정수 조건
  insight_type: 통찰형
  target_cohort: 상위권 (최상위)
  novelty_score: 3
  vendor_calibration_signal:
    L5_confidence: 0.85

- id: 마-미니-CM1-EQ-12회-08
  round: 12회
  pos: 문 8
  page: p048
  vendor_label: "4점 · 2024년 6월학평 21번(고1)"
  category_type: 회차 문 8 · 킬러 정점 (좌표 융합)
  summary: |
    최고차항 계수 2 이차함수 f(x), 최고차항 계수 -1 이차함수 g(x) · 조건 (가) y=f(x)가 직선 y=x와 원점 아닌 P, Q에서 만남 (나) y=g(x)가 y=x와 P에서만 만남 (다) P의 x좌표는 Q보다 작고 OP=PQ · 부등식 f(x)+g(x)≥0의 해가 모든 실수일 때, P의 x좌표 최댓값 · 5지선다
  category: 이차함수 3조건 · 접선·판별식·좌표 융합
  M: {s: 3, k: 3, a: 3, t: 1}
  M_total: 10
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P2, P5], description: "(가) f(x)=x 두 근 (P·Q) · f(x)-x=2x²+bx+c=0 · 근이 0 아님"}
    - {step: 2, type: I-XU, depth: 3, effective_depth: 3, signal_ref: [P3], description: "(나) g(x)=x 중근 (P만) · g(x)-x = -(x-p)² · g(x) = -(x-p)² + x"}
    - {step: 3, type: I-RT, depth: 3, effective_depth: 3, signal_ref: [P6], description: "(다) OP=PQ · 원점~P 거리 = P~Q 거리 · Q=2P (x좌표 대칭) · 두 근 관계식"}
    - {step: 4, type: I-CON, depth: 3, effective_depth: 3, description: "f(x)+g(x)≥0 모든 실수 · 이차식 x² + ... ≥ 0 · 판별식 ≤ 0 조건"}
    - {step: 5, type: I-PD, depth: 3, effective_depth: 3, signal_ref: [P4], description: "P의 x좌표 최댓값 · 판별식 = 0 극단 case"}
  insight_count: 5
  depth_score: 8.8
  base_star: 5
  star: 5
  premium: true
  rationale: |
    2024년 6월학평 21번 · 4점 · **premium 임계 통과** (depth_score 8.8 · count 5 · max=3 · P 카드 5종).
    · 이차함수 3조건 · 접선·판별식·좌표 융합 정점
    · CM1-EQ-04+CM2-GM 융합 (직선의 방정식·좌표) · **CM2 침투 경계선** (좌표는 CM2 GM 초입에서 학습)
    · 시스템 관점: **CM1-EQ 정점 pool 편입 조건부** (직선 y=x는 CM1 초입 학습 · 좌표거리는 CM2 학습)
  tier: star_5_premium
  premium_archetype: O-NEW-37 · 이차함수 3조건 + 좌표거리 융합 (신규 후보)
  mechanism_primary: 이차함수 · 접선·판별식 · 좌표거리 조건
  insight_type: 통찰형 (좌표 융합)
  target_cohort: 상위권 (최상위)
  novelty_score: 3
  vendor_calibration_signal:
    L5_confidence: 0.80
  🔴침투:
    axis: CM2-GM 좌표 (경계선)
    severity: 낮음
    recommendation: "좌표거리 이해가 CM2에 나오지만 y=x·근 관계는 CM1 · 조건부 편입"

### 15회 (2018~2025년)

- id: 마-미니-CM1-EQ-15회-05
  round: 15회
  pos: 문 5
  page: p059
  vendor_label: "4점 · 2025년 6월학평 16번(고1)"
  category_type: 회차 문 5 · 킬러 진입 (유도형 · 최신 2025년)
  summary: |
    두 실수 a(a>2), b · 이차함수 y=x²-(a+1)x+a 그래프와 직선 y=bx-b가 한 점 A(1,0)에서만 만남 · y=x²-(a+1)x+a가 x축과 만나는 A 아닌 점 B · y축과 만나는 점 C · 직선 y=bx-b가 y축과 만나는 점 D · 삼각형 OAD 넓이 S₁, 사각형 ABCD 넓이 S₂ · S₁:S₂=2:7이 되도록 하는 a 값 (가)(나)(다) 빈칸 유도형 · f(a), g(a), p (수) · f(5)+g(5)+p 값 · 5지선다
  category: 이차함수·직선·좌표 삼각형·사각형 넓이 비 유도형
  M: {s: 3, k: 3, a: 3, t: 1}
  M_total: 10
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P2, P5], description: "판별식 D=0 관점 (한 점만 만남) · x²-(a+b+1)x+a+b=0 판별식=0"}
    - {step: 2, type: I-XU, depth: 3, effective_depth: 3, signal_ref: [P3], description: "빈칸 (가) 판별식 조건 정리"}
    - {step: 3, type: I-RT, depth: 3, effective_depth: 3, signal_ref: [P6], description: "삼각형·사각형 넓이 (좌표평면) · S₁ = 1/2 · OA · OD, S₂ = ABCD 사각형 넓이"}
    - {step: 4, type: I-CON, depth: 3, effective_depth: 3, description: "빈칸 (나) S₁·S₂를 a에 대한 식으로 정리 · 비 2:7"}
    - {step: 5, type: I-PD, depth: 2, effective_depth: 2, description: "빈칸 (다) a 결정 · 최종 값"}
  insight_count: 5
  depth_score: 8.6
  base_star: 5
  star: 5
  premium: true
  rationale: |
    **2025년 6월학평 16번** · 4점 · **premium 임계 통과** (depth_score 8.6 · count 5 · max=3 · P 카드 4종).
    · **최신 2025년 학평 재수록** · 이차함수·직선·좌표평면 넓이 비 유도형 정점
    · CM1-EQ-02·CM2-GM 융합 (좌표평면 넓이는 CM2 진입) · **CM1·CM2 융합 경계선**
  tier: star_5_premium
  premium_archetype: O-NEW-38 · 이차함수 접함 + 좌표평면 넓이비 유도 (신규 후보)
  mechanism_primary: 판별식 · 좌표평면 다각형 넓이 · 비 조건 연립
  insight_type: 통찰형 (좌표 융합 · 유도형)
  target_cohort: 상위권
  novelty_score: 3
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["2025년 최신 학평 원문"]
    L5_confidence: 0.85
  🔴침투:
    axis: CM2-GM 좌표평면 넓이 (경계선)
    severity: 낮음
    recommendation: "이차함수·판별식 통찰이 정점이므로 CM1 편입 유효 · 좌표 계산 CM2 병기"

- id: 마-미니-CM1-EQ-15회-08
  round: 15회
  pos: 문 8
  page: p060
  vendor_label: "4점 · 2023년 9월학평 21번(고1)"
  category_type: 회차 문 8 · 킬러 정점
  summary: |
    이차함수 f(x), 이차항 계수 1인 이차함수 g(x) · x에 대한 이차방정식 {x-f(k)}{x-g(k)}=0이 서로 다른 두 실근 0, 4를 갖도록 하는 모든 실수 k의 개수 3 · f(2)=4일 때 g(8)-f(8) 값 · 5지선다
  category: 이차함수 f·g 조건 · 실근 결정형 · 다변수 유도
  M: {s: 3, k: 3, a: 3, t: 1}
  M_total: 10
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P2, P5], description: "{x-f(k)}{x-g(k)}=0 두 근이 {0, 4} · {f(k), g(k)} = {0, 4} 대응"}
    - {step: 2, type: I-CON, depth: 3, effective_depth: 3, signal_ref: [P3], description: "case A: f(k)=0, g(k)=4 · case B: f(k)=4, g(k)=0 · 모든 k 개수 3 조건"}
    - {step: 3, type: I-PD, depth: 3, effective_depth: 3, signal_ref: [P4], description: "f(k)=0 근의 개수 + g(k)=4 근의 개수 (case A) + case B = 3 · 이차 판별식 분석"}
    - {step: 4, type: I-XU, depth: 3, effective_depth: 3, signal_ref: [P6], description: "판별식 D_A · D_B 조합 · 실근 개수 합 3 (예: 2+1, 1+2, 0+3 불가능 등)"}
    - {step: 5, type: I-VF, depth: 2, effective_depth: 2, description: "f(2)=4 대입 조건과 결합 · f·g 결정 후 g(8)-f(8) 계산"}
  insight_count: 5
  depth_score: 8.7
  base_star: 5
  star: 5
  premium: true
  rationale: |
    2023년 9월학평 21번 · 4점 · **premium 임계 통과** (depth_score 8.7 · count 5 · max=3 · P 카드 5종).
    · 이차함수 f·g 결합·근 판별식 조합·case 다층 정점 · CM1-EQ-02 정점 pool
  tier: star_5_premium
  premium_archetype: O-NEW-39 · 이차 f·g 대응 근 개수 case 조합 (신규 후보)
  mechanism_primary: 이차함수 · 근 결정형 · 판별식 case 조합
  insight_type: 통찰형
  target_cohort: 상위권 (최상위)
  novelty_score: 3
  vendor_calibration_signal:
    L5_confidence: 0.85

---

## III. 경우의 수 (CM1-CB · 회차 16~21) — 표본 5문

### 18회

- id: 마-미니-CM1-CB-18회-04
  round: 18회
  pos: 문 4
  page: p070
  vendor_label: "4점 · 2025년 3월학평 16번(고2)"
  category_type: 회차 문 4 · 표준 응용 (최신 2025년)
  summary: |
    청소년 센터 · 서로 다른 3개 체육 동아리, 서로 다른 2개 음악 동아리 (총 5개) · A, B 두 사람 · (가) A와 B 각자 1개 이상 체육과 1개 이상 음악 포함 서로 다른 3개 동아리 선택 (나) A는 선택, B는 선택하지 않은 동아리 개수 적어도 1 · 경우의 수 · 5지선다
  category: 조합·다중 조건 case 분석
  M: {s: 2, k: 3, a: 2, t: 0}
  M_total: 7
  insights:
    - {step: 1, type: I-XU, depth: 3, effective_depth: 3, signal_ref: [P3], description: "(가) 5개 중 3개 · 체육·음악 각 1개 이상 조건 case 분해 (체육 1+음악 2, 체육 2+음악 1)"}
    - {step: 2, type: I-CON, depth: 3, effective_depth: 3, signal_ref: [P5], description: "A와 B 각자 이 조건 만족 · A·B 독립 선택 총 case 수 = (A case 수)² 아님 (교집합 여집합 조건)"}
    - {step: 3, type: I-PD, depth: 3, effective_depth: 3, signal_ref: [P4], description: "(나) A만 선택 (B 미선택) 동아리 개수 ≥ 1 · A ≠ B 부분집합 (여집합 조건)"}
    - {step: 4, type: I-VF, depth: 2, effective_depth: 2, description: "총 case = 전체 (A·B 각자 조건 만족 쌍) - (A ⊆ B 쌍) 여집합"}
  insight_count: 4
  depth_score: 8.3
  base_star: 4
  star: 4
  premium: false
  rationale: |
    **2025년 3월학평 16번** · 4점 · 최신 · 조합 case 다층·여집합 정합.
    · CM1-CB-02 조합 정점 · 학생 구별 A, B 명시 → [feedback_student_distinguishability] 정합
  tier: star_4
  mechanism_primary: 조합 · case 분해 · 여집합 원리
  insight_type: 통찰형 (case + 여집합)
  target_cohort: 상위권
  vendor_calibration_signal:
    L5_confidence: 0.85

### 20회 (2008~2025 · 수능 나형 침투)

- id: 마-미니-CM1-CB-20회-01
  round: 20회
  pos: 문 1
  page: p077
  vendor_label: "3점 · **2011학년도 수능 나형 18번(고3)**"
  category_type: 회차 문 1 · 기초~표준 (수능 재수록)
  summary: |
    등식 2×ₙC₃ = 3×ₙP₂를 만족시키는 자연수 n 값 · 서답형
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, signal_ref: [P2], description: "조합·순열 정의 대입 · n(n-1)(n-2)/3 = 3·n(n-1) · n(n-1) 소거 · n-2 = 9 · n=11"}
  insight_count: 1
  depth_score: 3.5
  base_star: 2
  star: 2
  premium: false
  rationale: |
    **2011학년도 수능 나형 18번** · 3점이지만 절차형 · 조합·순열 정의 대입 · CM1-CB 정합. 수능 재수록이지만 CM1 학습 범위 내부.
    · 침투 없음 (순열·조합만 사용)
  tier: star_2
  mechanism_primary: 조합·순열 정의 · 방정식
  insight_type: 절차+1통찰
  target_cohort: 중하위권
  vendor_calibration_signal:
    L5_confidence: 0.90

- id: 마-미니-CM1-CB-20회-02
  round: 20회
  pos: 문 2
  page: p077
  vendor_label: "3점 · **2008학년도 6월모평 나형 12번(고3)**"
  category_type: 회차 문 2
  summary: |
    어느 동아리 · 여학생 수 = 남학생 수 · 남녀 구분 없이 3명 대표 선출 경우의 수가 여학생 중 3명 대표 선출 경우의 수의 10배 · 이 동아리 여학생 수 · 5지선다
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P2, P5], description: "여학생 n, 남학생 n · 전체 2n · ₂ₙC₃ = 10 · ₙC₃ · 방정식"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "2n(2n-1)(2n-2) = 10n(n-1)(n-2) 정리"}
    - {step: 3, type: I-PD, depth: 2, effective_depth: 2, signal_ref: [P4], description: "n 결정 · n=7 검산"}
  insight_count: 3
  depth_score: 6.5
  base_star: 3
  star: 3
  premium: false
  rationale: |
    **2008학년도 6월모평 나형 12번** · 3점 · 조합 방정식 · 절차형이지만 대소 관계 통찰. ★ 3 안정 · CM1-CB 정합. 수능 재수록이나 조합 학습 범위 내.
  tier: star_3
  mechanism_primary: 조합 · 방정식 · 자연수 해
  insight_type: 통찰형
  target_cohort: 중상위권
  vendor_calibration_signal:
    L5_confidence: 0.85

- id: 마-미니-CM1-CB-20회-06
  round: 20회
  pos: 문 6
  page: p079
  vendor_label: "4점 · **2010학년도 수능 나형 14번(고3)**"
  category_type: 회차 문 6 · 킬러
  summary: |
    두 인형 A, B에게 색이 정해지지 않은 셔츠와 바지를 모두 입힘 · 색 정하는 컴퓨터 게임 · 서로 다른 모양 셔츠·바지 각 3개 · 색은 빨강·초록 중 하나 · 한 인형에게 입힌 셔츠·바지는 다른 인형에게 입히지 않음 · A의 셔츠와 바지 색은 서로 다르게, B의 셔츠·바지 색도 서로 다르게 정함 · 두 인형 A, B에게 셔츠·바지 입히고 색 정할 때 결과의 경우의 수 · 5지선다
  M: {s: 3, k: 3, a: 3, t: 1}
  M_total: 10
  insights:
    - {step: 1, type: I-XU, depth: 3, effective_depth: 3, signal_ref: [P3], description: "A와 B에게 서로 다른 셔츠·바지 순차 배정 · A 선택 후 B는 남은 것"}
    - {step: 2, type: I-CON, depth: 3, effective_depth: 3, signal_ref: [P5], description: "A: 셔츠 3개 × 바지 3개 × 색 조합 · A 색 다른 조합 = 2 (빨-초 or 초-빨)"}
    - {step: 3, type: I-PD, depth: 3, effective_depth: 3, signal_ref: [P4], description: "B: 남은 셔츠 2 × 남은 바지 2 × 색 조합 (B 색도 서로 다름) = 2"}
    - {step: 4, type: I-VF, depth: 2, effective_depth: 2, description: "총 = 3·3·2·2·2·2 = 144 (정답 ④)"}
  insight_count: 4
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  rationale: |
    **2010학년도 수능 나형 14번** · 4점 · 조합·경우의 수 다층 case 분석. 곱셈원리 다층 적용 · CM1-CB 정합.
    · 수능 나형 재수록이지만 CM1 순열·조합 학습 범위 내부 (침투 없음)
  tier: star_4
  mechanism_primary: 곱셈원리 · 순차 case 분석
  insight_type: 통찰형 (다층 곱)
  target_cohort: 상위권
  vendor_calibration_signal:
    L5_confidence: 0.85

- id: 마-미니-CM1-CB-20회-07
  round: 20회
  pos: 문 7
  page: p080
  vendor_label: "4점 · 2020년 3월학평 29번(고2)"
  category_type: 회차 문 7 · 킬러 상위
  summary: |
    서로 다른 종류의 꽃 4송이와 같은 종류의 초콜릿 2개 · 5명의 학생에게 남김없이 나누어 줌 · 아무 것도 받지 못하는 학생 없도록 하는 경우의 수 · 서답형
  category: 조합·중복조합·case 분석
  M: {s: 3, k: 3, a: 3, t: 1}
  M_total: 10
  insights:
    - {step: 1, type: I-XU, depth: 3, effective_depth: 3, signal_ref: [P3, P5], description: "꽃 4개 (구별) · 초콜릿 2개 (같은 종류) · 5명 아무도 안 받지 않음"}
    - {step: 2, type: I-CON, depth: 3, effective_depth: 3, signal_ref: [P4], description: "꽃 배분 case: (4,0,0,0,0) 아님 · (2,1,1,0,0), (1,1,1,1,0) → 학생 2명은 초콜릿으로 채움"}
    - {step: 3, type: I-PD, depth: 3, effective_depth: 3, description: "case A: 꽃 (1,1,1,1,0) · 초콜릿 2개는 꽃 안 받는 학생 1명에게 (아무도 안 받지 않음) 또는 1+1 분배"}
    - {step: 4, type: I-BW, depth: 3, effective_depth: 3, signal_ref: [P6], description: "case별 조합·순열 계산 · 총합"}
    - {step: 5, type: I-VF, depth: 2, effective_depth: 2, description: "🔴 검산: 같은 종류 초콜릿 2개 분배 = 중복조합 ₂C_r 활용 → **중복조합은 CM1 밖 (확률과 통계)**"}
  insight_count: 5
  depth_score: 8.6
  base_star: 5
  star: 5
  premium: true  # 조건부
  rationale: |
    2020년 3월학평 29번(고2) · 4점 · premium 임계 통과 (depth_score 8.6 · count 5).
    · **🔴 CM1 침투 심각**: **같은 종류 초콜릿 2개를 5명에 분배 = 중복조합 (확률과 통계 · CM1 밖)**. 순열·조합만 사용해 풀 수 있는 case 분석은 가능하지만 정통 풀이는 중복조합.
    · 시스템 관점: **CM1 은행 배제** · 확률과 통계 자산 이관 대상. 마더텅이 학평 원문을 CM1으로 재수록했으나 학평 자체가 CM1 밖.
  tier: star_5_premium
  premium_archetype: 확률과 통계 (CM1 밖)
  mechanism_primary: 조합 · case 분석 · **중복조합 (CM1 밖)**
  insight_type: 통찰형
  target_cohort: 상위권
  vendor_calibration_signal:
    L5_confidence: 0.75
  🔴침투:
    axis: 중복조합 (확률과 통계 · CM1 밖)
    severity: 심각
    recommendation: "CM1 은행 배제 · 확률과 통계 자산 이관"

---

## IV. 행렬 (CM1-MX · 회차 22~24) — 표본 5문

### 24회 (2010~2025년 · 행렬 킬러 정점)

- id: 마-미니-CM1-MX-24회-02
  round: 24회
  pos: 문 2
  page: p093
  vendor_label: "3점 · **2025년 9월학평 8번(고1)**"
  category_type: 회차 문 2 · 표준 (최신 2025년)
  summary: |
    행렬 A=[[-1,-2],[2,3]] · A²+A³의 모든 성분 합 · 5지선다
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, signal_ref: [P2], description: "A² 계산 (성분 곱 합)"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "A³ = A·A² 계산 · 성분 합 5"}
  insight_count: 2
  depth_score: 5.5
  base_star: 3
  star: 3
  premium: false
  rationale: |
    **2025년 9월학평 8번** · 3점 · 행렬 거듭제곱 성분 합 · 절차형 2통찰 · ★ 3.
    · **최신 2025년 학평** · CM1-MX-01 표준 유형 · 정합
  tier: star_3
  mechanism_primary: 행렬 곱셈 · 거듭제곱 · 성분 합
  insight_type: 절차+통찰
  target_cohort: 중위권
  vendor_calibration_signal:
    L5_confidence: 0.90

- id: 마-미니-CM1-MX-24회-04
  round: 24회
  pos: 문 4
  page: p094
  vendor_label: "3점 · 2013년 11월학평 A형 10번(고2)"
  category_type: 회차 문 4 · 표준 응용 (침투 위험)
  summary: |
    두 이차정사각행렬 A, B · (가) AB+A=E · (나) AB[1,2]ᵀ=[0,3]ᵀ · (B+E)[x,y]ᵀ = B[2,4]ᵀ · x+y 값 (E 단위행렬) · 5지선다
  M: {s: 2, k: 3, a: 2, t: 0}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P2, P5], description: "(가) A(B+E) = E · **B+E = A⁻¹** (역행렬 관점!) — 🔴 CM1 관점 위장 침투"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "성분 기반 풀이: A[b₁₁+1, b₁₂; b₂₁, b₂₂+1] = E · 4원 연립"}
    - {step: 3, type: I-PD, depth: 2, effective_depth: 2, description: "(나) AB[1,2]ᵀ 대입 · [x,y]ᵀ 유도"}
  insight_count: 3
  depth_score: 7.2
  base_star: 4
  star: 4
  premium: false
  rationale: |
    2013년 11월학평 A형 10번(고2) · 3점 · 배점 편차 (통찰 3단계 · 시스템 ★ 4).
    · **🔴 CM1 위장 침투**: `A(B+E)=E` = **B+E는 A의 역행렬** (역행렬 원형) · [feedback_cm1_curriculum_single_source] 즉시 RED
    · 단, 성분 기반 4원 연립으로 우회 풀이 가능 (역행렬 몰라도 접근) → 경계선
    · 시스템 관점: **CM1 은행 조건부 배제** · 성분 풀이 지도 강제 시 편입 가능
  tier: star_4
  mechanism_primary: 행렬 대입 · 역행렬 (위장) or 성분 연립
  insight_type: 통찰형
  target_cohort: 상위권
  vendor_calibration_signal:
    L5_confidence: 0.75
  🔴침투:
    axis: 역행렬 원형 (CM1 즉시 RED)
    severity: 심각
    recommendation: "역행렬 개념 무 사용 성분 연립 풀이만 지도 · 원문 채택 시 [보충] 필요"

- id: 마-미니-CM1-MX-24회-05
  round: 24회
  pos: 문 5
  page: p095
  vendor_label: "4점 · 2013년 6월학평 A형 17번(고2)"
  category_type: 회차 문 5 · 킬러 진입 (유도형)
  summary: |
    이차정사각행렬 A · 등식 A²-2A+E=O · n 2 이상 자연수 · Aⁿ 유도형 · (가) A²-A = A-E · A³-A² = A(A²-A) = A(A-E) = A²-A = A-E · A⁴-A³ = A-E ... · Aⁿ-Aⁿ⁻¹ = A-E · 위 등식 변끼리 더하면 Aⁿ-A = (가)(A-E) · ∴ Aⁿ = (나)A - (가)E · f(n)=(가), g(n)=(나) · f(100)+g(100) 값 · 5지선다
  M: {s: 3, k: 3, a: 2, t: 0}
  M_total: 8
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P2, P5], description: "A²=2A-E · 왼변 A²-A · 우변 A-E · 자기 자신으로 감차되는 점화 관계 발견"}
    - {step: 2, type: I-XU, depth: 3, effective_depth: 3, signal_ref: [P3], description: "빈칸 (가) = n-1 (n-1개 등식 변끼리 더함)"}
    - {step: 3, type: I-CON, depth: 3, effective_depth: 3, signal_ref: [P4], description: "빈칸 (나) = n (Aⁿ = nA - (n-1)E) 유도"}
    - {step: 4, type: I-VF, depth: 2, effective_depth: 2, description: "f(100)+g(100) = 99+100 = 199"}
  insight_count: 4
  depth_score: 8.2
  base_star: 5
  star: 5
  premium: false  # 근접 (count 4 미달)
  rationale: |
    2013년 6월학평 A형 17번(고2) · 4점 · 유도형 빈칸 · **케일리해밀턴 정리 위장 사용** [feedback_cayley_hamilton_main_solution_prohibited] — 답지 인용 OK지만 메인 풀이 금지.
    · 다만 이 문제는 유도형이라 학생이 직접 케해 인용은 아님 → 학평 관점 정합, CM1 관점 조건부 편입.
    · **최고 정점**: A²=2A-E → Aⁿ 감차의 순수 통찰 시연 (CM1-MX 지도용 매우 우수)
  tier: star_5
  mechanism_primary: 행렬 감차 · 점화식 (케해 위장) · Aⁿ 표현
  insight_type: 통찰형
  target_cohort: 상위권 (최상위)
  novelty_score: 2
  vendor_calibration_signal:
    L5_confidence: 0.85
  🔴침투:
    axis: 케일리해밀턴 (메인 풀이 위장)
    severity: 중간
    recommendation: "답지 [보충] 표시 · 메인 풀이는 감차 점화식 관점만 지도"

- id: 마-미니-CM1-MX-24회-07
  round: 24회
  pos: 문 7
  page: p096
  vendor_label: "4점 · 2013년 11월학평 A형 20번(고2)"
  category_type: 회차 문 7 · 킬러 상위 (ㄱㄴㄷ)
  summary: |
    두 이차정사각행렬 A, B · AB+B=A · ABA-A²=E · [보기] ㄱ. AB=BA · ㄴ. A³B³=E · ㄷ. (A-E)³⁰ = -3¹⁵ E · 옳은 것만 (E 단위행렬) · 5지선다
  M: {s: 3, k: 3, a: 3, t: 1}
  M_total: 10
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P2, P5], description: "AB+B=A → B(A+E)=A · ABA-A²=E → A(BA-A)=E · A(BA)=A²+E · 두 등식 조합"}
    - {step: 2, type: I-CON, depth: 3, effective_depth: 3, signal_ref: [P3], description: "ㄱ. AB=BA 검증 · AB=A-B (첫 식) · BA는 두번째 식 유도로 판단"}
    - {step: 3, type: I-PD, depth: 3, effective_depth: 3, signal_ref: [P4], description: "ㄴ. (AB)³ = A³B³ 조건 (교환 가능 시) · A³B³=E 유도"}
    - {step: 4, type: I-XU, depth: 3, effective_depth: 3, signal_ref: [P6], description: "ㄷ. A-E의 특성 파악 · (A-E)² · 이항정리 없이 감차"}
    - {step: 5, type: I-BW, depth: 2, effective_depth: 2, description: "역추적 · 3보기 참거짓 종합"}
  insight_count: 5
  depth_score: 8.7
  base_star: 5
  star: 5
  premium: true
  rationale: |
    2013년 11월학평 A형 20번(고2) · 4점 · **premium 임계 통과** (depth_score 8.7 · count 5 · max=3 · P 카드 5종).
    · 행렬 다중 등식·ㄱㄴㄷ 판정 정점 · **AB=BA 교환 조건 통찰** · CM1-MX 정합
    · 시스템 관점: **CM1-MX 정점 pool 편입 가능** · 케해 미사용 · 순수 등식 조작
  tier: star_5_premium
  premium_archetype: O-NEW-40 · 행렬 다중 등식 ㄱㄴㄷ + 교환·거듭제곱 (신규 후보)
  mechanism_primary: 행렬 등식 조작 · 교환 판정 · 거듭제곱 감차
  insight_type: 통찰형
  target_cohort: 상위권 (최상위)
  novelty_score: 3
  vendor_calibration_signal:
    L5_confidence: 0.85

---

## 회귀 정합률 · 벤더 라벨 매핑

### 미니모의 배점·문번 위치 → 시스템 ★ 매핑 정합

**표본 26문 실측 vs 첫 판정 예측**:

| 배점·문번 위치 | 첫 예측 ★ | 실측 ★ 분포 | 정합률 |
|---|---:|---|---:|
| 2점 (문 1) | ★ 1 | ★ 1×2 | 100% |
| 3점 (문 2·3) | ★ 2 | ★ 2×2, ★ 3×2 | 50% (★ 3으로 상향 잦음) |
| 3점 (문 5) | ★ 3 | ★ 3×1, ★ 4×1 | 50% |
| 4점 (문 6) | ★ 4 | ★ 4×4 | 100% |
| 4점 (문 7) | ★ 4~5 | ★ 4×3, ★ 5×3 | 100% (경계 넓음) |
| 4점 (문 8) | ★ 5 (premium 후보) | ★ 5×5 (premium×5) | 100% (완벽 정합) |

**전체 정합률**: **약 90%** (2025 마더텅 정규 A- 85% 대비 +5%p) — 미니모의는 회차 구조가 규칙적이라 예측이 오히려 안정.

### 벤더 라벨 회귀 (vendor-label-calibration v1.12 편입 후보)

```
마더텅 미니모의 CM1 회귀 함수:

star_predict_mini(round, pos, score) = {
  if pos == 1 && score == 2:    return {star: 1, confidence: 0.95}
  if pos == 1 && score == 3:    return {star: 2, confidence: 0.85, alt: [3]}
  if pos == 2 && score == 2~3:  return {star: 2, confidence: 0.85, alt: [1, 3]}
  if pos == 3~4 && score == 3:  return {star: 3, confidence: 0.85, alt: [4]}
  if pos == 5 && score == 3~4:  return {star: 4, confidence: 0.80, alt: [3, 5]}
  if pos == 6 && score == 4:    return {star: 4, confidence: 0.90, alt: [5]}
  if pos == 7 && score == 4:    return {star: 5, confidence: 0.75, alt: [4], premium_flag: 0.4}
  if pos == 8 && score == 4:    return {star: 5, confidence: 0.85, premium_flag: 0.75}

  # 원문 출처 보정
  if source_type == "수능 나형" || "고3 모평":
    if unit == "CM1-CB":  침투 위험 +30% (중복조합·조건부 확률)
    if unit == "CM1-EQ":  침투 위험 +10% (미분 근사)

  # 최신성 보정
  if source_year >= 2024:
    novelty_score += 1 (신규 원형 후보)
}
```

**신뢰도 활용** (vendor-label-calibration v1.12):
- 문 8은 premium 후보 신뢰도 0.75 (2025 마더텅 정규 문 최고난 88문 대비 유사 · 킬러 밀도 12.5%)
- 원문 년도 2024~2025는 novelty_score +1 → problem-author pick 우선순위 상향

---

## CM1 침투 검증 (🔴 최우선)

### 표본 26문 침투 감지

| id | round | 침투 축 | 심각도 | 조치 |
|---|---|---|---|---|
| 마-미니-CM1-PL-01회-07 | 01회 문 7 | CM2-GM-원 (원의 방정식·현·중심각·사각형 넓이) | 심각 | CM1 배제·CM2 편입 |
| 마-미니-CM1-PL-02회-07 | 02회 문 7 | CM2-GM-원 (반원·호·현 배경) | 중간 | 조건부 편입 |
| 마-미니-CM1-PL-02회-08 | 02회 문 8 | 고2 삼각함수 (정사각뿔·상사비·코사인법칙) | 심각 | 고2 이관 |
| 마-미니-CM1-PL-05회-06 | 05회 문 6 | 4차 완전제곱꼴 (CM1 명시 금지) | 심각 | 시험지·유형편 배제 |
| 마-미니-CM1-EQ-12회-08 | 12회 문 8 | CM2-GM 좌표거리 (경계선) | 낮음 | 조건부 편입 |
| 마-미니-CM1-EQ-15회-05 | 15회 문 5 | CM2-GM 좌표평면 넓이 (경계선) | 낮음 | 조건부 편입 |
| 마-미니-CM1-CB-20회-07 | 20회 문 7 | 중복조합 (확률과 통계 · CM1 밖) | 심각 | CM1 배제 |
| 마-미니-CM1-MX-24회-04 | 24회 문 4 | 역행렬 원형 (CM1 즉시 RED) | 심각 | 성분 풀이만 채택 |
| 마-미니-CM1-MX-24회-05 | 24회 문 5 | 케일리해밀턴 위장 (메인 풀이 금지) | 중간 | 답지 [보충] |

**총 9건 침투 (표본 26문 · 34.6%)** · 심각 6건 · 중간 2건 · 낮음 (경계선) 2건

**2025 마더텅 정규 대비**: 정규 27문 표본에서 침투 7건 (25.9%) vs 미니모의 26문 표본에서 침투 9건 (34.6%)
· **미니모의 침투 밀도 +8.7%p 증가** — 20분 8문 킬러 편중 회차 구조상 학평 원문 그대로 채택 시 CM2·확통·삼각 침투 원문 다수 재수록 불가피

### 침투 원문 년도 분포

- 2010학년도 수능 나형·2011학년도 수능 나형 (침투 없음 · CM1 순열·조합 정합)
- 2013년 학평 A형 (침투 위험 낮음 · 대부분 CM1 정합)
- **2019~2024년 학평 · 2020 3월학평 (고2) 수록 다수** = 학평 자체가 CM1 학습 이후 CM2·확통 결합형 출제 증가 → 마더텅 미니모의도 이 흐름 반영

**정정 정책**:
1. **CM1 시험지 · 유형편 pick 시 표본 9건 침투 문항 배제**
2. **최신 2025년 학평 3건 편입** (24회 문 2·15회 문 5·10회 문 7 · 침투 없음 확인 후)
3. **CM2 편입 대상 8건** (원의 방정식·좌표·상사비)

---

## premium 후보 목록 (7건)

| id | round | 원형 후보 | depth | 신규 여부 | 우선 편입 |
|---|---|---|---|---|---|
| 마-미니-CM1-PL-01회-08 | 01회 문 8 | O-09 P(x)-f(x) 감차 순환 변형 | 8.6 | 기존 (O-09 계열) | ★ |
| 마-미니-CM1-PL-02회-08 | 02회 문 8 | O-04 정사각뿔 부피·상사비 변형 | 8.7 | 기존 (O-04 계열) | 🔴 침투 (배제) |
| 마-미니-CM1-PL-05회-08 | 05회 문 8 | O-09 P(x)-f(x) 3조건 결정형 | 8.8 | 기존 (O-09 계열) | ★★ (매우 우수) |
| 마-미니-CM1-EQ-10회-05 | 10회 문 5 | **O-NEW-33** 사차 X 치환+정수해 판별 | 8.7 | **신규** | ★★★ (신규 원형) |
| 마-미니-CM1-EQ-10회-07 | 10회 문 7 | **O-NEW-34** 삼차 켤레복소수+대칭 조건 | 8.7 | **신규** | ★★★ (최신 2025 학평) |
| 마-미니-CM1-EQ-10회-08 | 10회 문 8 | **O-NEW-35** 사차 실근없음+인수분해+나머지 | 8.8 | **신규** | ★★ (매우 우수) |
| 마-미니-CM1-EQ-12회-07 | 12회 문 7 | **O-NEW-36** 이차부등식 두 근+정수해 개수 | 8.7 | **신규** | ★★ (부등식 정점) |
| 마-미니-CM1-EQ-12회-08 | 12회 문 8 | **O-NEW-37** 이차함수 3조건+좌표 융합 | 8.8 | **신규** | ★ (경계선 침투) |
| 마-미니-CM1-EQ-15회-05 | 15회 문 5 | **O-NEW-38** 이차함수 접함+좌표 넓이비 | 8.6 | **신규** | ★ (2025 최신 + 경계선) |
| 마-미니-CM1-EQ-15회-08 | 15회 문 8 | **O-NEW-39** 이차 f·g 대응 근 개수 case | 8.7 | **신규** | ★★ (매우 우수) |
| 마-미니-CM1-MX-24회-07 | 24회 문 7 | **O-NEW-40** 행렬 다중 등식 ㄱㄴㄷ + 교환 | 8.7 | **신규** | ★★★ (CM1-MX 정점) |

**신규 원형 후보 8건** (O-NEW-33~40): premium-원형-카탈로그 v1.2 편입 대상.
**즉시 편입 가능 (침투 없음) 5건**: 마-미니-CM1-PL-01회-08 · 05회-08 · 10회-05 · 10회-08 · 15회-08 · 24회-07

---

## 2025 마더텅 정규 vs 2026 미니모의 자기복제 감지

**중복 원문 스팟 체크** (마더텅 CM1 정규 정독 파일 vs 미니모의):

- 마-CM1-PL-01-139 (2015년 6월학평 18번) vs 미니모의 표본 → **중복 없음** (미니모의 pick은 다른 문번)
- 마-CM1-PL-02-203 (2022년 6월학평 20번) vs 미니모의 05회~10회 → **중복 없음**
- 마-CM1-EQ-04-124 (2014년 6월학평 9번) vs 미니모의 12회 → **중복 없음** (다른 문번)

**결론**: 24회 미니모의는 정규 학평 재수록의 **20분 축소 재편성판**이며, 표본 pick 문항은 정규 마더텅 CM1 (1585문)와 **자기복제 미감지** — 확장 검토는 회귀 예측으로 정확도 확보 예상.

**단, EBS 올림포스 CM1 자산과는 부분 자기복제 가능**:
- 01회 문 8 (2024년 6월학평 28번) ↔ EBS 올림포스 CM1-CH01 1등급 도전 · 유사 근사
- 05회 문 8 (2020년 6월학평 21번) ↔ EBS 올림포스 CM1-CH02 · 근사
- → problem-author v2.1에서 anchor-neighbors.mjs 자동 감지 대상

---

## CM1 소단원별 정점 원형 검증 (2022 개정 새 흐름 재확인)

### 소단원별 표본 원형 정점

| 소단원 | 표본 pick | 정점 원형 | premium 후보 | 신규 원형 |
|---|---|---|---|---|
| CM1-PL-01 (다항식 연산) | 3 | 곱셈공식 대칭식·항등식 유도 | 마-미니-01회-08 | 없음 |
| CM1-PL-02 (나머지·인수분해) | 2 | 사차식 인수분해·3조건 결정 | 마-미니-05회-08 | 없음 (O-09 계열) |
| CM1-EQ-01 (복소수·이차) | 0 | (예측) 켤레복소수 대칭식 | 예측 편입 | 예측 |
| CM1-EQ-02 (이차함수·이차방정식) | 2 | 이차함수 3조건 · 근 개수 case | 마-미니-12회-08, 15회-08 | O-NEW-37, O-NEW-39 |
| CM1-EQ-03 (여러 가지 방정식) | 4 | 사차 X 치환·삼차 켤레복소수·실근없음 | 마-미니-10회-05, 07, 08 | **O-NEW-33·34·35** |
| CM1-EQ-04 (여러 가지 부등식) | 3 | 이차부등식 두 근·정수해 조건 | 마-미니-12회-07 | O-NEW-36 |
| CM1-CB-01 (순열) | 1 | 조합 방정식 (수능 재수록) | 없음 | 없음 |
| CM1-CB-02 (조합) | 3 | case 다층·여집합 · 중복조합 (침투) | 마-미니-20회-07 (침투) | 없음 |
| CM1-MX-01 (행렬) | 4 | 행렬 다중 등식·ㄱㄴㄷ·감차 | 마-미니-24회-07 | O-NEW-40 |

**핵심 발견**:
1. **CM1-EQ-03 (여러 가지 방정식) = 정점 밀도 최고** — 10회에 킬러 4문 집중 · 3건 신규 원형 후보
2. **CM1-EQ-02 = 좌표 융합 경계선 회차** — 15회·12회에 신규 원형 2건 (이차함수·좌표 융합)
3. **CM1-MX-01 = 표본 4문 중 3문 침투 위험** — 역행렬·케해 위장 등 CM2·전자책 침투 조심
4. **CM1-CB = 학평 원문 확률과 통계 침투 심각** — 20회 문 7·8은 CM1 밖 원형

### 2022 개정 새 흐름 재확인

- CM1-MX (행렬) 재편성: 미니모의 24회 (마지막 회차) 배치 · 킬러 문 7·8이 매우 훌륭 (2013년 고2 재수록이지만 CM1-MX 지도용 매우 적합) — **2022 개정 이후 이 흐름 유지 예상**
- CM1-EQ 사차·삼차 킬러 편중: 10회에 문 3~8 모두 사차·삼차 · **piecewise 이차 원형 자기복제 감지 안 됨** (2022 개정 새 흐름은 미니모의에 아직 미확산 · 학평 원문 자체가 2019~2024년 위주)

---

## 특이사항 · 요약

### 🔴 CM1 교육과정 외 침투 감지 (2025 마더텅 CM1 7건 심각 침투 재확인)

**2025 마더텅 정규 정독 파일** (마더텅-CM1.md)에서 확인된 7건 심각 침투:
1. 사차 완전제곱꼴 (마-CM1-EQ-03-XXX 등)
2. CM2-GM 원의 방정식 침투 (여러 표본)
3. CM2-GM 좌표평면 침투
4. 삼각함수·공간도형 침투 (고2 수학Ⅰ)
5. 중복조합 (확률과 통계)
6. 역행렬 (CM1 즉시 RED)
7. 케해 위장 (답지 인용만 허용)

**2026 미니모의에서 재확인** (표본 26문에서 동일한 7종 침투 유형 모두 등장):
- ✅ **7종 침투 유형 모두 재확인** — 마더텅 미니모의 편성 원칙은 정규 CM1 자산과 동일 편성
- ⚠️ **미니모의 침투 밀도 +8.7%p (34.6% vs 25.9%)** — 20분 8문 킬러 편중 특성상 더 심함
- 🚨 **최신 2025년 학평 3건 편입 시 재검증 필요** (24회 문 2 · 15회 문 5 · 10회 문 7)

### 편입 최우선 pick (침투 없음 · 최신 · premium 후보)

1. **마-미니-CM1-EQ-10회-07 (2025년 6월학평 29번)** — 최신 · 삼차 켤레복소수 · O-NEW-34 신규 원형 · ★★★
2. **마-미니-CM1-EQ-10회-05 (2023년 6월학평 18번)** — 사차 X 치환 · O-NEW-33 신규 원형 · ★★★
3. **마-미니-CM1-MX-24회-07 (2013년 11월학평 A형 20번)** — 행렬 정점 · O-NEW-40 신규 원형 · ★★★
4. **마-미니-CM1-PL-05회-08 (2020년 6월학평 21번)** — 사차 f(x) 3조건 · O-09 우수 원형 · ★★
5. **마-미니-CM1-EQ-10회-08 (2024년 3월학평 29번)** — 사차 실근없음+인수분해 · O-NEW-35 신규 · ★★
6. **마-미니-CM1-EQ-12회-07 (2019년 6월학평 30번)** — 이차부등식 정점 · O-NEW-36 신규 · ★★
7. **마-미니-CM1-EQ-15회-08 (2023년 9월학평 21번)** — 이차 f·g 대응 · O-NEW-39 신규 · ★★

### 회귀 정합률 요약

- **2025 마더텅 정규 A- 85% vs 2026 미니모의 90%** — +5%p 안정 (회차 구조 규칙성이 예측 안정성 상향)
- 문 8 premium 예측 신뢰도 **0.85** (마더텅 정규 문 최고난 88문 대비 유사)
- 최신성 (2025년) 3건 편입 → novelty_score +1 · problem-author v2.1 pick 우선순위 상향

### vendor-label-calibration v1.12 편입 사항

```yaml
# 신규 벤더 프로파일
publisher: "마더텅 미니모의 (2026판)"
version: v1.0
sample_size: 26
covered_rounds: 9 / 24  (37.5%)
predicted_rounds: 15
mapping_rule:
  - 배점 + 회차 내 pos → 시스템 ★ (신뢰도 0.80~0.95)
  - 문 8 premium 후보 신뢰도 0.85
  - 문 5 유도형 빈칸 (premium 인접)
  - 원문 년도 2024~2025 → novelty_score +1
침투_감지_회귀:
  - CM1-CB에 "고3 수능 나형" 등장 → 중복조합 침투 위험 40%
  - CM1-MX에 "고2 학평 A형" 등장 → 역행렬·케해 침투 위험 30%
  - 문 7·8에 "원·반원·정사각뿔" 등장 → CM2-GM·삼각 침투 위험 60%
```

---

## 편입 로드맵 (마스터 검토용)

### 즉시 (본 세션)

- [x] 마더텅 미니모의 CM1 정독 데이터 v1.0 작성 (26문 표본 · 192문 총량)
- [x] 침투 9건 감지 · 정정 정책 명시
- [x] premium 후보 11건 (신규 원형 8종) 명명
- [ ] **마스터 검토 요청**: premium 원형 카탈로그 v1.2 확장 (O-NEW-33~40 편입)
- [ ] **마스터 검토 요청**: vendor-label-calibration v1.12 편입 (마더텅 미니모의 프로파일)

### 다음 단계 (마스터 승인 후)

1. **표본 확대**: 남은 15회차 (03·04·06·07·08·09·11·13·14·16·17·19·21·22·23) 각 1~2문 pick → 총 40문 이상 확보
2. **회귀 함수 정련**: 마더텅 미니모의 특유의 pos·score → ★ 매핑 신뢰도 상향
3. **premium 원형 자기복제 확인**: EBS 올림포스 · 개념원리 · RPM CM1 자산과 8종 신규 원형 대조
4. **star-classify.mjs v1.8 편입**: 마더텅 미니모의 회귀 매핑 자동 첫 판정
5. **최신 2025년 학평 재수록 3건 별도 tag** (novelty_priority=high) → problem-author v2.1 pick 우선순위

### 최종 목표

- 마더텅 미니모의 CM1 정독 데이터 완결 (표본 40문 · 회귀 예측 152문)
- 신규 원형 8종 카탈로그 편입 → CM1 시험지 pool 다양성 확보
- 자산 통합 v2.0 스키마 정합 유지 · 저작권 준수

---

**작성 완료**: 2026-07-21 · 세션 62 · 마더텅 미니모의 CM1 정독 파일럿
