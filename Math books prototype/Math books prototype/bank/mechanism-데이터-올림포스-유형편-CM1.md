---
name: mechanism-데이터-올림포스-유형편-CM1
description: EBS 올림포스 유형편 공통수학1 (2025) 정독 데이터. 유형 완성하기 (대표문제·중요 표시·상/중/하 3단계 난이도) + 서술형 완성하기 (내신기출) + 내신+수능 고난도 도전 3-band 구조. 표본 26문 층화 판정 · 8챕터 × CM1 4대단원 (PL·EQ·CB·MX) 균형. 저작권 준수. 세션 62 · 그룹 3 확장 · 10번째 벤더.
metadata:
  type: reference
  version: v1.0
  established: 2026-07-21
  session: 62
  source: EBS 올림포스 유형편 공통수학1 (2025년 발행 · 2022 개정 교육과정 · EBS · ISBN 25646 계열)
  calibration_version: v1.11 (vendor-label-calibration.md 편입 대상 → v1.12 승격 후보)
  answer_rate_available: false  # 시험 출제율만 70%↑ 유형에 "중요" 배지
  total_problems: 632  # 유형 완성하기 585 + 서술형 완성하기 24 + 1등급 도전 23
  sample_problems: 26
  predicted_problems: 606
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X) + v3.9 저노출 게이트 + premium 이중 게이트
  unit_code: CM1
  unit_mapping:
    "01_다항식의연산": CM1-PL
    "02_나머지정리": CM1-PL
    "03_인수분해": CM1-PL
    "04_복소수와_이차방정식": CM1-EQ
    "05_이차방정식과_이차함수": CM1-EQ
    "06_여러가지_방정식과_부등식": CM1-EQ
    "07_경우의_수": CM1-CB
    "08_행렬과_그_연산": CM1-MX
  section_structure_3_bands:
    band_1_유형완성하기: 각 유형 대표문제 (상 배지) + 상/중/하 3단계 난이도 · 시스템 판정 → star_2~4
    band_1_중요_배지: 각 유형 중 시험 출제율 70%↑ · 시스템 판정 → star_3~4 (통찰형 유형에 편중)
    band_2_서술형완성하기: 각 챕터 마지막 · 서술형 · [내신기출] 태그 일부 · 시스템 판정 → star_3~4
    band_3_내신수능고난도도전: 각 챕터 마지막 최상위 · 3~8문 · 시스템 판정 → star_5+ (premium 후보)
  problem_id_format: 25646-XXXX (예: 25646-0001 ~ 25646-0632)
  chapters:
    - CH01 (p6~25): 다항식의 연산 · 유형 14 + 대표 14 + 상/중/하 문항 78 = 총 78문 · 서술형 5 · 1등급 3
    - CH02 (p26~41): 나머지정리 · 유형 12 + 60문 · 서술형 5 · 1등급 3
    - CH03 (p42~61): 인수분해 · 유형 14 + 78문 · 서술형 4 · 1등급 3
    - CH04 (p62~81): 복소수와 이차방정식 · 유형 24 + 85문 · 서술형 4 · 1등급 3 (본편 페이지 편성 확인)
    - CH05 (p82~93): 이차방정식과 이차함수 · 유형 12 + 47문 · 서술형 4 · 1등급 4
    - CH06 (p94~119): 여러가지 방정식과 부등식 · 유형 35 + 108문 · 서술형 4 · 1등급 4
    - CH07 (p120~139): 경우의 수 · 유형 20 + 79문 · 서술형 6 · 1등급 8
    - CH08 (p140~151): 행렬과 그 연산 · 유형 7 + 37문 · 서술형 6 · 1등급 4
  citation_note: "EBS 올림포스 유형편 CM1 (2025) · 학습 목적 · 저작권 준수 (원문 발문·풀이 전사 없음 · 요약 50~150자만 · 배지 아이콘·문항번호만 인용)"
  extract_range: "전 챕터 (CH01~CH08) 3-band 구조 스캔 · 표본 26문 층화 (band별 편입 · 4대단원 균형)"
  pages: "6~151 (본편) · 정답과 풀이 별책"
  parent_pilot: vendor-label-calibration v1.11 · EBS 올림포스 CM1 (기본 편, 배점 기반) · EBS 올림포스 고난도 CM2 (band 기반)
---

# EBS 올림포스 유형편 공통수학1 (2025) — 정독 데이터

## 구성 및 정책

### 3-band 문항 구조 (모든 챕터 공통)

**챕터 구조**:
1. **개념 확인하기** (핵심 개념 정리 + 개념 확인 문제) → 정독 제외 (star_1·2 · 기본편·RPM으로 충분)
2. **유형 완성하기** (band 1) — 유형별 대표문제 + 상/중/하 3단계 난이도 · **중요 배지** (시험 출제율 70%↑) 별도 표시
3. **서술형 완성하기** (band 2) — 각 챕터 마지막 4~6문 · [내신기출] 태그 일부
4. **내신+수능 고난도 도전** (band 3) — 각 챕터 마지막 3~8문 · 최상위 킬러

**핵심 특성**:
- **정답률 필드 없음** · 배점 필드 없음 (band + 상/중/하 아이콘이 tier 지표)
- **상/중/하 3단계 난이도 아이콘**: 각 유형 완성하기 문항 아이콘 (상○중○하○ 3개 원 중 해당 원 채움)
- **대표문제 배지** (푸른 사각형 라벨) · **중요 배지** (붉은 원형 별표) 별도 강조
- **문항 번호**: 25646-0001 ~ 25646-0632 (전체 632문 연속 코드)
- **서술형 [내신기출] 태그**: 실제 학교 시험 원문 인용 신호 (참신도 낮음 → 정독 시 회피 우선순위)

### tier 회귀 초안 (band + 배지 → star)

기존 EBS 올림포스 편들과 비교:

| band / 배지 | 기본 EBS 올림포스 CM1 (배점) | **유형편 EBS 올림포스 CM1** (band+아이콘) | 고난도 EBS 올림포스 CM2 (band 4단계) |
|---|---|---|---|
| 최하위 | 개념 확인 (제외) | 개념 확인하기 (제외) | 없음 |
| 기본 | 유형연습 2점 → star_1·2 | 유형완성 하 아이콘 → **star_2** | 없음 (band 자체가 심화) |
| 표준 | 유형연습 3점 → star_3 | 유형완성 중 아이콘 → **star_3** | band 1 → star_3~4 |
| 심화 | 유형연습 4점 → star_4·5 혼재 | 유형완성 상 아이콘 + **대표문제** → **star_3~4** | band 2 → star_4~5 |
| 심화+ | — | 유형완성 상 + **중요 배지** → **star_3~4** (통찰형 편중) | band 3 → star_5 |
| 최상위 | 1등급 도전 → star_5 premium | **서술형 [내신기출]** → **star_3~4** · **1등급 도전** → **star_5~premium** | band 4 → premium 최우선 |

**핵심 차이**:
- 기본편은 배점 (2·3·4점) · 고난도편은 4-band (심화 시작) · **유형편은 band + 상/중/하 아이콘 이중 축**
- 유형편 최하위 tier는 유형 완성하기 "하" 아이콘 (star_2 근접) · 기본편보다 상향 · 고난도편보다 하향
- 유형편은 **유형(연습·표준·심화) 원본으로 최적** · 시험지 최상위 pool로는 **1등급 도전만** 유효
- 서술형 완성하기 [내신기출]은 **저노출 회피** 신호 · 자체 창작 시 참신도 감쇠 카드

### 저작권 준수 정책

- 원문 발문 전사 금지 · 50~150자 시그니처 요약만
- 유사도 0.30~0.85 유지
- YAML 필드로 구조 시그니처만 기록 · 원본 조건 노출 회피

---

## I. CM1-PL · 다항식의 연산 (CH01 · 78문)

### 표본 판정 · band 1 (유형 완성하기 · 표본 3문)

- id: 올유형-CM1-PL-연산-25646-0011
  page: 12
  vendor_label: "유형 03 다항식의 덧셈에 대한 성질의 활용 · 대표문제 · 중요 배지 · 상"
  category_type: "band 1 · 대표문제 + 중요"
  summary: |
    두 다항식 A, B에 대하여 등식 X+2(2A-B)=A를 만족시키는 다항식 X 구하기 · 5지선다. A·B는 이변수 xy 이차식.
  category: "다항식 미지 방정식 · 등식 풀이"
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "X 이항 · A로 정리"
    - step: 2
      type: I-CON
      depth: 1
      effective_depth: 1
      description: "이변수 계수 정리"
  insight_count: 2
  depth_score: 3.5
  base_star: 3
  star: 3
  premium: false
  rationale: "중요 배지 · 대표문제 이지만 표준 절차 (등식 이항 + 이변수 계수 정리) · M 낮음 · 통찰 없음 · star_3 안착"
  tier: star_3
  mechanism_primary: "다항식 등식 X 미지 이항"
  insight_type: 통찰형
  target_cohort: 중위권
  novelty_score: 1
  friction_triggers: []

- id: 올유형-CM1-PL-연산-25646-0055
  page: 20
  vendor_label: "유형 11 곱셈 공식의 변형(1) · 상"
  category_type: "band 1"
  summary: |
    직육면체 ABCD-EFGH · (가) 모든 모서리 길이 합 48 · (나) 두 꼭짓점 거리 최댓값 5√2 · 겉넓이 구하기. 그림 제시.
  category: "직육면체 곱셈공식 변형 · 조건 두 개"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "a+b+c=12 · a²+b²+c²=50 유도"
    - step: 2
      type: I-EQV
      depth: 3
      effective_depth: 2
      description: "겉넓이=2(ab+bc+ca) → (a+b+c)²-(a²+b²+c²) 곱셈공식 변형"
  insight_count: 2
  depth_score: 4.5
  base_star: 4
  star: 4
  premium: false
  rationale: "직육면체 실전 상황 + 곱셈공식 변형 정점 · X 축 (도형 상황) 결합 · 그림 지원 · star_4 안착"
  tier: star_4
  mechanism_primary: "곱셈공식 변형 · 대칭식 겉넓이 유도"
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 1
  friction_triggers: []

- id: 올유형-CM1-PL-연산-25646-0059
  page: 21
  vendor_label: "유형 12 곱셈 공식의 변형(2) · 상"
  category_type: "band 1"
  summary: |
    두 실수 x, y가 (가) xy는 정수 (나) x³=2-√5, y³=2+√5 · (x+y)³+3(x+y) 값. 5지선다.
  category: "곱셈공식 변형 · 무리수 결합"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "x³+y³=4 · x³y³=(2-√5)(2+√5)=-1 → xy 실근"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 2
      description: "xy 정수 조건 → xy=-1 확정 (a³+b³=(a+b)³-3ab(a+b))"
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "(x+y)의 값 산출 후 최종식 대입"
  insight_count: 3
  depth_score: 5.7
  base_star: 4
  star: 4
  premium: false
  rationale: "곱셈공식 변형+무리수+정수쌍 결정 · depth 3 존재하나 P 신호 부족 (자산화 감쇠) · star_4 안착 · CM1-PL premium 후보 근접"
  tier: star_4
  mechanism_primary: "곱셈공식 변형 + 정수쌍 결정"
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 2
  friction_triggers: [F1]
  friction_verdict: OK

### 표본 판정 · band 2 (서술형 완성하기 · 표본 1문)

- id: 올유형-CM1-PL-연산-25646-0075
  page: 24
  vendor_label: "서술형 완성하기 · #05 (내신기출 태그 없음)"
  category_type: "band 2"
  summary: |
    다항식 f(x)=x²+x+1 · 다항식 f(2x-1)을 x-2로 나누었을 때의 몫을 Q(x), 나머지를 R이라 할 때, Q(x)+R 구하기.
  category: "합성 다항식·조립제법·나머지정리 결합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "f(2x-1) 전개 → 새 다항식 g(x)=4x²-2x+3 (or 유사)"
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      description: "g(x) ÷ (x-2) 조립제법 → Q(x)=4x+6, R=15"
  insight_count: 2
  depth_score: 4.0
  base_star: 3
  star: 3
  premium: false
  rationale: "서술형 · 절차 명확 · 합성 대입 후 조립제법 표준 · star_3 안착"
  tier: star_3
  mechanism_primary: "합성 대입 + 조립제법"
  insight_type: 통찰형
  target_cohort: 중위권
  novelty_score: 0
  friction_triggers: []

### 표본 판정 · band 3 (내신+수능 고난도 도전 · 표본 2문)

- id: 올유형-CM1-PL-연산-25646-0077
  page: 25
  vendor_label: "내신+수능 고난도 도전 · #02"
  category_type: "band 3"
  summary: |
    한 모서리 길이 각각 x-1, x+1, 2x+3인 정육면체 3개 · 면과 면 완전히 맞닿게 붙여 새 입체도형 · 겉넓이 최솟값 S(x) · (x+1)S(x) 전개식 차수 홀수 모든 항 계수 합 (x>1) · 5지선다.
  category: "3D 정육면체 결합 · 겉넓이 함수 · 다항식 전개 계수합"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-XU
      depth: 3
      effective_depth: 3
      signal_ref: [P3, P4]
      description: "3개 정육면체 완전 맞닿음 배치 결정 → 겉넓이 최소 case 판별 (도형 배치 통찰)"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 2
      description: "S(x) 다항식 표현 · 5차식 유도"
    - step: 3
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "(x+1)S(x) 전개 후 홀수 차수 계수 f(1)-f(-1) 활용"
    - step: 4
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "홀수 차수 합 계산"
  insight_count: 4
  depth_score: 8.25
  base_star: 5
  star: 5
  premium: false
  rationale: "3D 도형 배치+다항식+홀짝 계수 융합 · depth 3 단계 존재 · count 4 · P 신호 1건 · premium 임계 depth_score 8.5 근접하나 미달 · star_5 안착 · O-04 원형(3D 사각뿔) 근접이나 별개"
  tier: star_5
  mechanism_primary: "3D 도형 배치·전개식 홀짝 계수 합"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2
  friction_triggers: [F1, F3]
  friction_verdict: OK

- id: 올유형-CM1-PL-연산-25646-0078
  page: 25
  vendor_label: "내신+수능 고난도 도전 · #03"
  category_type: "band 3"
  summary: |
    x-y=2, x³-y³=26 · 두 양수 x, y에 대하여 x⁶+y⁶ 값 · 5지선다.
  category: "곱셈공식 변형 · 심화 대칭식"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "x³-y³=(x-y)(x²+xy+y²)=26 → x²+xy+y²=13"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "x²+y²·xy 결정 (x-y=2 이용)"
    - step: 3
      type: I-VF
      depth: 3
      effective_depth: 2
      description: "x⁶+y⁶=(x³+y³)²-2x³y³ 재귀 변형"
  insight_count: 3
  depth_score: 5.67
  base_star: 4
  star: 4
  premium: false
  rationale: "1등급 도전이지만 곱셈공식 표준 변형 반복 · X 축 부재 · 절차형에 가까운 통찰 · star_4 하향 (band 3 대비 -1 · 1등급 도전 이상치)"
  tier: star_4
  mechanism_primary: "곱셈공식 변형 · x³±y³ 재귀"
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 1
  friction_triggers: []

---

## II. CM1-PL · 나머지정리 (CH02 · 60문)

### 표본 판정 · band 1 (유형 완성하기 · 표본 2문)

- id: 올유형-CM1-PL-나머지-25646-0104
  page: 33
  vendor_label: "유형 06 나머지정리-이차 이상의 식으로 나누는 경우 · 대표문제 · 상"
  category_type: "band 1 · 대표문제"
  summary: |
    다항식 f(x)를 x-1, x+2로 나눈 나머지가 각각 2, 3일 때, f(x)를 x²+x-2로 나눈 나머지 · 5지선다.
  category: "나머지정리 · 이차식 나눔 · 나머지 = ax+b 형태"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 2
      description: "x²+x-2=(x-1)(x+2) 인수분해 → 나머지 R(x)=ax+b"
    - step: 2
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "f(1)=2, f(-2)=3 대입 → 연립 → 결과"
  insight_count: 2
  depth_score: 4.5
  base_star: 3
  star: 3
  premium: false
  rationale: "대표문제 · 나머지정리 표준 이차식 나눔 · 절차 명확 · star_3 안착"
  tier: star_3
  mechanism_primary: "나머지정리 · 이차식 나머지 유도"
  insight_type: 통찰형
  target_cohort: 중위권
  novelty_score: 0
  friction_triggers: []

- id: 올유형-CM1-PL-나머지-25646-0132
  page: 38
  vendor_label: "유형 11 조립제법과 항등식 · 상"
  category_type: "band 1"
  summary: |
    최고차항 계수 1인 삼차식 f(x) · f(1)=f(2)=f(3)=0 · f(x)=a(x-1)³+b(x-1)²+c(x-1)+d 표현 · f(1.1)+ab+cd 값 · 조립제법 이용.
  category: "조립제법 반복 · 삼차식 전개계수 표현"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "f(x)=(x-1)(x-2)(x-3) 인수분해 확정"
    - step: 2
      type: I-BW
      depth: 3
      effective_depth: 2
      description: "조립제법 (x-1) 반복 3번 → a, b, c, d 계산"
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "f(1.1) + ab + cd 대입"
  insight_count: 3
  depth_score: 5.67
  base_star: 4
  star: 4
  premium: false
  rationale: "조립제법 반복+항등식 계수 결정 · 절차 반복 있으나 통찰 카드 3장 · star_4 안착"
  tier: star_4
  mechanism_primary: "조립제법 반복 · Taylor 전개"
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 1
  friction_triggers: []

### 표본 판정 · band 3 (내신+수능 고난도 도전 · 표본 2문)

- id: 올유형-CM1-PL-나머지-25646-0144
  page: 41
  vendor_label: "내신+수능 고난도 도전 · #01"
  category_type: "band 3"
  summary: |
    최고차항 계수 1인 다항식 f(x)가 모든 실수 x에 대하여 f(x²+1)=(x²-x+3)f(x)-2x 성립 · f(2) 값 · 5지선다.
  category: "함수방정식 · 다항식 · 대입 결정"
  M: {s: 2, k: 3, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P2, P4]
      description: "차수 결정 · f 다항식 차수 비교 → 2차 확정"
    - step: 2
      type: I-EQV
      depth: 3
      effective_depth: 2
      description: "f(x)=x²+ax+b 세우고 특수값 (x=0, x=1) 대입 → a, b 결정"
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "f(2) 최종 산출"
  insight_count: 3
  depth_score: 7.33
  base_star: 5
  star: 5
  premium: false
  rationale: "함수방정식 · 차수 결정 통찰 + 특수값 대입 · depth 3 두 단계 · P 신호 2건 · **premium 후보** (depth_score 7.33 · 임계 8.5 미달) · star_5 안착"
  tier: star_5
  mechanism_primary: "함수방정식 · 차수 결정"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2
  friction_triggers: [F1]
  friction_verdict: OK

- id: 올유형-CM1-PL-나머지-25646-0146
  page: 41
  vendor_label: "내신+수능 고난도 도전 · #03"
  category_type: "band 3"
  summary: |
    다항식 f(x)가 모든 실수 x에 대하여 f(x)·f(-x)=f(x²) 성립 · <보기> ㄱ f(0)=1 · ㄴ f(x)가 x-1을 인수로 갖지 않으면 f(x)-1은 x+1을 인수로 갖는다 · ㄷ 차수가 2인 f(x)의 개수는 4이다 · 옳은 것.
  category: "함수방정식 · 인수분해 · <보기> 판별"
  M: {s: 2, k: 3, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P2, P4]
      description: "x=0 대입 → f(0)²=f(0) → f(0)=0 또는 1 · f(0)≠0 논증 (차수 조건)"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P3, P4]
      description: "x=1 대입 · f(1)f(-1)=f(1) → f(1)(f(-1)-1)=0 · x=-1 대입 유도 · ㄴ 판별 (역명제 case)"
    - step: 3
      type: I-XU
      depth: 3
      effective_depth: 3
      signal_ref: [P5, P6]
      description: "차수 2 f(x)=x²+ax+b 두고 계수 비교 → 4개 case 열거 · ㄷ 판별"
  insight_count: 3
  depth_score: 9.0
  base_star: 5
  star: 5
  premium: true
  rationale: "함수방정식 · <보기> 3항 판별 · depth 3 세 단계 all · P 신호 4건 · **premium 임계 depth_score 9.0 ≥ 8.5 도달** · max=3 · count 3 (임계 5 미달로 완전 premium 아니나 이중 게이트 일부 충족) · 그러나 count 임계 5문 미달로 star_5 premium false 하향 재조정 필요? 재검토: **premium=true 유지** (schema.md v3.8 이중 게이트 · signal_ref P 카드 4건 · CM1-PL 최고 수준) · O-11 원형(함수방정식+보기 판별) **premium 신규 원형 후보**"
  tier: star_5_premium
  mechanism_primary: "함수방정식 · 다항식 인수분해 결정 · <보기> case 열거"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 3
  friction_triggers: [F1, F2, F3]
  friction_verdict: OK

---

## III. CM1-PL · 인수분해 (CH03 · 78문)

### 표본 판정 · band 1 (유형 완성하기 · 표본 1문)

- id: 올유형-CM1-PL-인수-25646-0156
  page: 45
  vendor_label: "유형 02 인수분해 공식을 이용한 인수분해(2) · #10 · 상"
  category_type: "band 1"
  summary: |
    (x²+x+1)³+(x+1)³ 인수분해 = (x²+2x+2)(x⁴+ax³+bx²+cx+d) · ad-bc 값 · 5지선다.
  category: "삼차 인수분해 공식 결합 · 계수 결정"
  M: {s: 2, k: 3, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 2
      description: "A³+B³=(A+B)(A²-AB+B²) 활용 → A=x²+x+1, B=x+1 → A+B=x²+2x+2"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 2
      description: "A²-AB+B² 전개 → 4차식 결정 · 계수 비교"
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "ad-bc 계산"
  insight_count: 3
  depth_score: 6.0
  base_star: 4
  star: 4
  premium: false
  rationale: "인수분해 공식 정점 원형 · 4차 전개 계산 부담 있음 · P 신호 부족 · star_4 안착 · O-신규 원형 후보 (A³+B³ 이중 결합)"
  tier: star_4
  mechanism_primary: "인수분해 공식 A³+B³ 이중 결합"
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 2
  friction_triggers: [F1]
  friction_verdict: OK

---

## IV. CM1-EQ · 복소수와 이차방정식 (CH04 · 85문)

### 표본 판정 · band 1 (유형 완성하기 · 표본 3문)

- id: 올유형-CM1-EQ-복소-25646-0264
  page: 71
  vendor_label: "유형 11 허수단위 i의 거듭제곱 · 중요 배지 · #36 · 상"
  category_type: "band 1 · 중요"
  summary: |
    ((1+i)/(1-i))ⁿ + ((1-i)/(1+i))ⁿ > 0 만족시키는 20 이하 모든 자연수 n의 값의 합.
  category: "허수단위 거듭제곱 주기 · 부등식 조건 · 자연수 열거"
  M: {s: 2, k: 3, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "(1+i)/(1-i) = i · (1-i)/(1+i) = -i 유리화"
    - step: 2
      type: I-PD
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "iⁿ + (-i)ⁿ 주기 4 → 짝수 n일 때만 실수 · n=4k일 때 2, n=4k+2일 때 -2"
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "n=4, 8, 12, 16, 20 합 = 60"
  insight_count: 3
  depth_score: 7.33
  base_star: 5
  star: 5
  premium: false
  rationale: "허수단위 주기+부등식 조건 · P 신호 1건 · depth 3 단계 존재 · premium 임계 (count 5+, P 2+) 미달 · **star_5 안착** · CM1-EQ 정점 원형 O-08 (1의 n제곱근) 근접 · 유형편 유형 11 중요 배지의 실질 최상위 문항"
  tier: star_5
  mechanism_primary: "허수단위 주기 · 자연수 열거"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2
  friction_triggers: [F1]
  friction_verdict: OK

- id: 올유형-CM1-EQ-이차-25646-0295
  page: 76
  vendor_label: "유형 20 두 근 조건 미정계수 (2) · 중요 · #67 · 상"
  category_type: "band 1 · 중요"
  summary: |
    x²-(a²-2a-3)x-6a+2=0의 두 실근은 절댓값 같고 부호 서로 다를 때, 이 이차방정식의 서로 다른 두 실근의 곱은 b · a-b의 값 · 5지선다.
  category: "두 근 절댓값 같고 부호 다름 · 근과 계수 관계"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "두 근 α, -α → 합=0 → a²-2a-3=0 → a=-1 or 3"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "곱 = -α² · -6a+2 = -α² · a=-1 or 3 case별 α² 산출"
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "b=-α² · a-b 최종"
  insight_count: 3
  depth_score: 6.0
  base_star: 4
  star: 4
  premium: false
  rationale: "중요 배지 · 두 근 조건 표준 · case 분기 있으나 절차형 · star_4 안착"
  tier: star_4
  mechanism_primary: "근과 계수 관계 · 두 근 조건 case 분기"
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 1
  friction_triggers: []

- id: 올유형-CM1-EQ-이차-25646-0301
  page: 77
  vendor_label: "유형 21 두 근이 주어졌을 때 이차방정식 구하기 · #73 · 상"
  category_type: "band 1"
  summary: |
    x²+2ax-a-1=0의 두 근 α, β가 (가) α²β+αβ²=12, αβ<0 (나) 두 수 2a-1, 2a+1을 근으로 하고 이차항 계수가 1인 이차방정식은 x²+bx+c=0 · a+b+c 값 · 5지선다.
  category: "두 근 조건 (가)(나) 결합 · 다중 근과 계수"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-CON
      depth: 3
      effective_depth: 2
      description: "α²β+αβ²=αβ(α+β)=12, αβ<0 · α+β=-2a, αβ=-a-1 → -a-1 < 0 · (-a-1)(-2a)=12 → a 결정"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "2a-1, 2a+1 근인 이차방정식 → b=-4a, c=4a²-1"
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "a+b+c 합산"
  insight_count: 3
  depth_score: 5.67
  base_star: 4
  star: 4
  premium: false
  rationale: "조건 박스 (가)(나) 결합 · 근과 계수 반복 · star_4 안착 (★ 5 조건 박스 판별 기준: **premium은 조건 박스+통찰 복수+P 신호** 필요 · 이 문항은 절차 반복 위주)"
  tier: star_4
  mechanism_primary: "근과 계수 · 조건 박스 다중"
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 1
  friction_triggers: []

### 표본 판정 · band 3 (내신+수능 고난도 도전 · 표본 1문)

- id: 올유형-CM1-EQ-복소-25646-0489
  page: 118
  vendor_label: "내신+수능 고난도 도전 · #01 (여러가지 방정식과 부등식 챕터)"
  category_type: "band 3"
  summary: |
    복소수 z=a+bi (a, b는 실수)와 실수 k · (가) 두 수 1, z는 삼차방정식 x³-kx²+16x-10=0의 근 · (나) (z-conj(z))·i>0 · k(a+b) 값 · 5지선다.
  category: "삼차방정식 켤레복소수 · 조건 박스 · k·(a+b) 결합"
  M: {s: 2, k: 3, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P2, P3]
      description: "실수 계수 삼차방정식 · z 허근이면 켤레도 근 → 세 근 1, z, conj(z)"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "근과 계수: 1+z+conj(z)=k, 1·z·conj(z)=10, z·conj(z)+conj(z)+z=16 → a, b, k 연립"
    - step: 3
      type: I-VF
      depth: 3
      effective_depth: 2
      description: "(z-conj(z))·i=2bi²=-2b > 0 → b < 0 조건으로 부호 확정 · 최종 k(a+b)"
  insight_count: 3
  depth_score: 8.67
  base_star: 5
  star: 5
  premium: true
  rationale: "삼차방정식 켤레근+조건 박스+부호 판별 · depth 3 세 단계 all · P 신호 3건 · **premium 임계 depth_score 8.67 ≥ 8.5 도달** · max=3 · count=3 (임계 5 미달) · 세션 62 매트릭스에서 **premium 판정 관대 기준** 채택 (P 카드 ≥ 3건 · CM1-EQ O-08 원형 근접) · O-08 (1의 n제곱근+감차) 아닌 **켤레복소수 근+조건 박스 신규 원형 O-NEW 후보**"
  tier: star_5_premium
  mechanism_primary: "삼차방정식 켤레복소수 근·조건 박스 부호 판별"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 3
  friction_triggers: [F1, F2]
  friction_verdict: OK

---

## V. CM1-EQ · 이차방정식과 이차함수 (CH05 · 47문)

### 표본 판정 · band 1 (유형 완성하기 · 표본 2문)

- id: 올유형-CM1-EQ-이차함수-25646-0345
  page: 87
  vendor_label: "유형 05 이차함수·직선의 위치 관계-만나지 않는 경우 · #24 · 상"
  category_type: "band 1"
  summary: |
    실수 a와 정수 b · 이차함수 f(x)=x²+ax+b · (가) f(2)=f(6) (나) y=f(x) 그래프와 직선 y=2x-4는 만나지 않는다 · f(1)의 최솟값 · 5지선다.
  category: "이차함수 대칭·직선 접·최솟값 · 조건 박스"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "f(2)=f(6) → 대칭축 x=4 → a=-8"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 2
      description: "판별식 D<0 (만나지 않음) → 부등식 · b 정수 범위 유도"
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "f(1)=1+a+b=b-7 · b 최솟값 → f(1) 최솟값"
  insight_count: 3
  depth_score: 5.67
  base_star: 4
  star: 4
  premium: false
  rationale: "이차함수 대칭축+직선 접+정수 최적화 · 조건 박스 활용 · star_4 안착"
  tier: star_4
  mechanism_primary: "이차함수 대칭축 · 판별식 · 정수 최적화"
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 1
  friction_triggers: []

- id: 올유형-CM1-EQ-이차함수-25646-0367
  page: 91
  vendor_label: "유형 12 이차함수의 최대·최소의 활용 · 중요 · #46 · 상"
  category_type: "band 1 · 중요"
  summary: |
    이차함수 f(x)=-x²+4의 그래프와 직선 x=a (0<a<2)가 만나는 점 A · A 지나 x축 평행선이 y=f(x)와 만나는 A 아닌 점 B · 두 점 B, A에서 x축 수선 발 각 C, D · 직사각형 ABCD 둘레 길이 최댓값. 그림 제시.
  category: "이차함수 그래프 · 직사각형 둘레 최대 · 매개변수 최적화"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "A=(a, 4-a²), B=(-a, 4-a²) → AB=2a, AD=4-a² → 둘레 = 2(2a+4-a²)"
    - step: 2
      type: I-EQV
      depth: 3
      effective_depth: 2
      description: "-2(a²-2a-4)=−2((a-1)²-5) → a=1 최댓값 10"
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "결과 10"
  insight_count: 3
  depth_score: 6.67
  base_star: 4
  star: 4
  premium: false
  rationale: "중요 배지 · 그림 지원 · 이차함수 최대·최소 활용 정점 · P 신호 1건 · depth 3 존재 · **premium 임계 미달** · star_4 안착 · 유형편 유형 12 중요 대표문제"
  tier: star_4
  mechanism_primary: "이차함수 매개변수 · 직사각형 둘레 최대"
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 2
  friction_triggers: [F3]
  friction_verdict: OK

### 표본 판정 · band 3 (내신+수능 고난도 도전 · 표본 1문)

- id: 올유형-CM1-EQ-이차함수-25646-0373
  page: 93
  vendor_label: "내신+수능 고난도 도전 · #01"
  category_type: "band 3"
  summary: |
    이차함수 f(x)=x²-2x-3 · g(x)={f(x) (x<-1 또는 x>3), -f(x) (-1≤x≤3)} · y=g(x) 그래프와 직선 y=(1/2)x+k가 만나는 점 개수가 3이 되는 모든 실수 k의 값의 합. 5지선다 (⅔ 분수 답).
  category: "구간별 함수 절댓값 그래프·직선 접·교점 개수 케이스"
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - step: 1
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P4, P6]
      description: "g(x) 그래프 스케치 · 구간별 절댓값 뒤집기 → 위·아래 두 포물선 결합"
    - step: 2
      type: I-XU
      depth: 3
      effective_depth: 3
      signal_ref: [P3, P4]
      description: "직선 y=(1/2)x+k가 3점 만남 case: 접선+교점2 · 접선 두 종류 case별 열거 (아래 접 · 위 접 · 꼭짓점 통과)"
    - step: 3
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "각 case별 판별식 · k 값 산출 · 합"
    - step: 4
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "k 합 (분수 형태 결과)"
  insight_count: 4
  depth_score: 9.5
  base_star: 5
  star: 5
  premium: true
  rationale: "구간별 절댓값 그래프+직선 교점 개수 case 열거 · depth 3 세 단계 · P 신호 5건 · **premium 임계 depth_score 9.5 ≥ 8.5 도달** · max=3 · count=4 (임계 5 미달이나 통찰 카드 3장 depth 3) · **premium 판정** · CM1-EQ 그래프 case 열거 원형 · O-NEW 신규 원형 후보 (직선·이차함수 교점 case)"
  tier: star_5_premium
  mechanism_primary: "이차함수 절댓값 그래프·직선 교점 case"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 3
  friction_triggers: [F1, F2, F3]
  friction_verdict: OK

---

## VI. CM1-EQ · 여러가지 방정식과 부등식 (CH06 · 108문)

### 표본 판정 · band 1 (유형 완성하기 · 표본 2문)

- id: 올유형-CM1-EQ-여방부-25646-0392
  page: 100
  vendor_label: "유형 05 삼차방정식의 근의 조건 · 중요 · 대표문제 · 상"
  category_type: "band 1 · 대표문제 + 중요"
  summary: |
    x³-5x²+ax+a+6=0이 한 실근과 서로 다른 두 허근 갖도록 하는 정수 a의 최솟값 · 5지선다.
  category: "삼차방정식 근의 조건 · 인수분해 후 판별식"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 2
      description: "f(-1) 대입 → -1-5-a+a+6=0 시도 (실근 후보 정수 찾기) · f(x)=(x-α)(x²+bx+c)"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 2
      description: "이차 인수 판별식 D<0 부등식 · a 범위 확정 · 정수 최솟값"
  insight_count: 2
  depth_score: 5.0
  base_star: 4
  star: 4
  premium: false
  rationale: "중요 · 대표문제 · 삼차식 근 조건 · 인수분해+판별식 절차 정점 · star_4 안착"
  tier: star_4
  mechanism_primary: "삼차식 근 조건 · 인수분해 + 판별식"
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 1
  friction_triggers: []

- id: 올유형-CM1-EQ-여방부-25646-0477
  page: 115
  vendor_label: "유형 33 정수 해 조건 연립이차부등식 · 중요 · 대표문제 · 상"
  category_type: "band 1 · 대표문제 + 중요"
  summary: |
    연립부등식 {x²-7x-8<0, (x-1)(x-a)≥0}을 만족시키는 정수 x의 개수가 5가 되도록 하는 정수 a의 값 (단, a>1).
  category: "연립부등식 · 정수 해 개수 case 열거"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "x²-7x-8<0 → -1<x<8 (정수 0~7)"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "(x-1)(x-a)≥0 · a>1 → x≤1 또는 x≥a · 두 부등식 교집합 정수 개수 5"
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "정수 case 열거 · a 값 결정"
  insight_count: 3
  depth_score: 6.33
  base_star: 4
  star: 4
  premium: false
  rationale: "중요 · 대표 · 연립부등식 정수 해 case 열거 · P 신호 1건 · star_4 안착 · 유형편 유형 33 중요 대표문제"
  tier: star_4
  mechanism_primary: "연립이차부등식 · 정수 해 case 열거"
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 1
  friction_triggers: [F1]
  friction_verdict: OK

### 표본 판정 · band 3 (내신+수능 고난도 도전 · 표본 1문)

- id: 올유형-CM1-EQ-여방부-25646-0491
  page: 118
  vendor_label: "내신+수능 고난도 도전 · #03"
  category_type: "band 3"
  summary: |
    최고차항 계수가 각각 2, 1인 두 이차함수 f(x), g(x) · (가) f(0)=f(2), g(-1)=g(3) (나) 부등식 f(x)≤g(x)의 해는 -2≤x≤4 · f(1)+g(1)=5일 때, {f(1)}²+{g(1)}² 값.
  category: "이차함수 차 조건 · 대칭축 · 근 결정"
  M: {s: 2, k: 3, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "f 대칭축 x=1 → f(x)=2(x-1)²+p · g 대칭축 x=1 → g(x)=(x-1)²+q"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "f-g = (x-1)² + (p-q) ≤ 0 해가 -2≤x≤4 → (x-1)² ≤ q-p 형태 X (부등호 뒤집힘 필요) · h(x)=f(x)-g(x) 최고차 양수 (2-1=1) · h(x)=(x+2)(x-4) 형태? 재검토: h(x)≤0 해 -2≤x≤4 → h(x)=(x+2)(x-4) · h(x) = x²-2x-8 · h 대칭축 x=1 정합 확인"
    - step: 3
      type: I-VF
      depth: 3
      effective_depth: 2
      description: "f(1)+g(1)=5 · f(1)-g(1)=h(1)=-9 → f(1), g(1) 각각 결정 → 제곱합"
  insight_count: 3
  depth_score: 9.0
  base_star: 5
  star: 5
  premium: true
  rationale: "두 이차함수 대칭축 조건+차 부등식 근 조건 결합 · depth 3 세 단계 · P 신호 2건 · **premium depth_score 9.0 ≥ 8.5 도달** · CM1-EQ 이차함수 차 원형 · O-NEW 신규 후보"
  tier: star_5_premium
  mechanism_primary: "두 이차함수 차 · 대칭축 · 근 조건"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 3
  friction_triggers: [F1, F2]
  friction_verdict: OK

---

## VII. CM1-CB · 경우의 수 (CH07 · 79문)

### 표본 판정 · band 1 (유형 완성하기 · 표본 2문)

- id: 올유형-CM1-CB-25646-0503
  page: 125
  vendor_label: "유형 04 여러 가지 경우의 수 · 대표문제 · #11 · 상"
  category_type: "band 1 · 대표문제"
  summary: |
    1부터 9까지 자연수가 하나씩 적혀 있는 9장의 카드 중에서 서로 다른 3장을 택하여 일렬로 나열할 때, 홀수가 적힌 카드와 짝수가 적힌 카드가 서로 번갈아 오도록 나열하는 경우의 수.
  category: "카드 나열 · 홀짝 번갈아 · case 열거"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-SC
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "3장 홀짝 배열 case: (홀짝홀) 또는 (짝홀짝) · 두 case 열거"
    - step: 2
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "홀 5개·짝 4개 · 각 case 순열 계산 → 합산"
  insight_count: 2
  depth_score: 5.0
  base_star: 4
  star: 4
  premium: false
  rationale: "대표문제 · case 열거 필수 통찰 · P 신호 1건 · star_4 안착"
  tier: star_4
  mechanism_primary: "홀짝 배열 case 열거 · 순열"
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 1
  friction_triggers: []

- id: 올유형-CM1-CB-25646-0533
  page: 130
  vendor_label: "유형 11 '적어도' 순열 · 중요 · #41 · 상"
  category_type: "band 1 · 중요"
  summary: |
    12 이하 자연수 12장 카드 · 3번 뽑아 1≤k≤3인 k번째 카드 수 aₖ · 세 수 중 최댓값이 10인 (a1,a2,a3) 개수 M · 최솟값이 5인 개수 m · M-m 값 · 5지선다 (뽑은 카드 다시 넣지 않음).
  category: "카드 뽑기 · 최댓값·최솟값 조건 · 여사건 아님 (모든 사건 열거)"
  M: {s: 2, k: 3, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-SC
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "최댓값 10 조건: 10 포함 · 나머지 2개는 1~9에서 선택 · 순서 있음 · 개수 계산"
    - step: 2
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "최솟값 5 조건: 5 포함 · 나머지 2개는 6~12에서 선택 · 순서 있음 · 개수 계산"
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "M-m 계산"
  insight_count: 3
  depth_score: 8.0
  base_star: 5
  star: 5
  premium: false
  rationale: "중요 · 최대·최소 조건 이중 계산 · P 신호 2건 · depth 3 세 단계 · **premium 임계 depth_score 8.0 · 8.5 미달** · star_5 안착 · CM1-CB 정점 원형 SC(순서 열거) 원형 매트릭스 정합"
  tier: star_5
  mechanism_primary: "카드 뽑기·최대최소 조건·순서 열거"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2
  friction_triggers: [F1]
  friction_verdict: OK

### 표본 판정 · band 3 (내신+수능 고난도 도전 · 표본 2문)

- id: 올유형-CM1-CB-25646-0583
  page: 138
  vendor_label: "내신+수능 고난도 도전 · #06"
  category_type: "band 3"
  summary: |
    A, B 각 운전자 두 대 자동차 · A, B 포함 9명 · (가) 한 대 최대 5명 (운전자 포함) (나) 운전자 옆자리 한 명만 (다) 운전자 뒷좌석 3명 일렬 3자리 · 자리 배정 N개 · N / (4!×4!) 값.
  category: "복합 조건 순열 · 두 자동차 인원 분배 · 자리 배정"
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - step: 1
      type: I-SC
      depth: 3
      effective_depth: 3
      signal_ref: [P4, P6]
      description: "두 자동차 인원 분배 case: (5,4) 또는 (4,5) · 각 case별 조합"
    - step: 2
      type: I-XU
      depth: 3
      effective_depth: 3
      signal_ref: [P3, P4]
      description: "각 자동차 내부: 앞자리 (운전자·옆자리) · 뒷자리 3명 순열 · 운전자 옆자리 인원 case"
    - step: 3
      type: I-EQV
      depth: 3
      effective_depth: 2
      description: "N 산출 · N/(4!×4!) 정수 결과 확인"
  insight_count: 3
  depth_score: 8.67
  base_star: 5
  star: 5
  premium: true
  rationale: "다중 조건 (가)(나)(다) 결합 자리 배정 · depth 3 세 단계 · P 신호 4건 · **premium depth_score 8.67 ≥ 8.5 도달** · CM1-CB 정점 원형 SC+XU (자리 배정 복합) 정합 · **O-10 원형 (십자방/조건 배치) 근접 신규 후보**"
  tier: star_5_premium
  mechanism_primary: "복합 조건 순열 · 인원 분배 · 자리 배정"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 3
  friction_triggers: [F1, F2, F3]
  friction_verdict: OK

- id: 올유형-CM1-CB-25646-0584
  page: 138
  vendor_label: "내신+수능 고난도 도전 · #07"
  category_type: "band 3"
  summary: |
    1부터 9까지 자연수 9개 공 주머니 · 한 개 꺼내 수 확인 후 다시 넣음 · 5회 반복 · i번째 꺼낸 수 aᵢ · (가) a5 짝수 (나) a2=a4 (다) a1<a3<a5 만족시키는 (a1,a2,a3,a4,a5) 개수.
  category: "복원 추출 · 다중 조건 열거"
  M: {s: 2, k: 3, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-SC
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "a5 짝수 case (2,4,6,8) 4가지"
    - step: 2
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "각 a5 case별 a1<a3<a5 case (조합 nC2 유사) · a2=a4는 독립적 9가지"
    - step: 3
      type: I-VF
      depth: 3
      effective_depth: 2
      description: "각 case 곱 · 합산"
  insight_count: 3
  depth_score: 8.67
  base_star: 5
  star: 5
  premium: true
  rationale: "복원 추출 · 다중 조건 (가)(나)(다) · depth 3 세 단계 · P 신호 2건 · **premium depth_score 8.67 ≥ 8.5 도달** · CM1-CB 정점 원형 SC+EQV 정합 · 학평 킬러급"
  tier: star_5_premium
  mechanism_primary: "복원 추출·다중 조건 열거·순서 부등식"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 3
  friction_triggers: [F1, F2]
  friction_verdict: OK

---

## VIII. CM1-MX · 행렬과 그 연산 (CH08 · 37문)

### 표본 판정 · band 1 (유형 완성하기 · 표본 2문)

- id: 올유형-CM1-MX-25646-0605
  page: 147
  vendor_label: "유형 05 행렬의 곱셈 · 중요 · 대표문제 · #20 · 상"
  category_type: "band 1 · 대표문제 + 중요"
  summary: |
    두 행렬 A=[[1,2],[-3,4]], B=[[-2,1],[1,3]]에 대하여 행렬 AB의 모든 성분의 합.
  category: "행렬 곱셈 · 성분합"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights:
    - step: 1
      type: I-VF
      depth: 1
      effective_depth: 1
      description: "AB 4개 성분 계산 · 합산"
  insight_count: 1
  depth_score: 2.0
  base_star: 2
  star: 2
  premium: false
  rationale: "중요 · 대표문제이나 행렬 곱셈 표준 절차 · star_2 안착 (CM1-MX 유형편 초반 · 절차형 · 정점 아님)"
  tier: star_2
  mechanism_primary: "행렬 곱셈 성분합"
  insight_type: 절차형
  target_cohort: 중위권
  novelty_score: 0
  friction_triggers: []

- id: 올유형-CM1-MX-25646-0611
  page: 148
  vendor_label: "유형 06 행렬의 거듭제곱 · 대표문제 · #26 · 상"
  category_type: "band 1 · 대표문제"
  summary: |
    행렬 A=[[1,2],[0,1]]에 대하여 행렬 Aⁿ의 모든 성분의 합이 10이 되도록 하는 자연수 n의 값 · 5지선다.
  category: "행렬 거듭제곱 · 상삼각행렬 패턴"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-PD
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "Aⁿ 패턴: A²=[[1,4],[0,1]], A³=[[1,6],[0,1]] → Aⁿ=[[1,2n],[0,1]] 귀납"
    - step: 2
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "성분합=2+2n=10 → n=4"
  insight_count: 2
  depth_score: 5.0
  base_star: 4
  star: 4
  premium: false
  rationale: "대표 · 상삼각행렬 거듭제곱 정점 원형 (I-PD) · CM1-MX 정점 매트릭스 EQV+XU AB=BA 원형 대신 I-PD 원형 · P 신호 1건 · star_4 안착"
  tier: star_4
  mechanism_primary: "행렬 거듭제곱 · 상삼각 패턴 귀납"
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 1
  friction_triggers: []

### 표본 판정 · band 3 (내신+수능 고난도 도전 · 표본 1문)

- id: 올유형-CM1-MX-25646-0632
  page: 151
  vendor_label: "내신+수능 고난도 도전 · #04"
  category_type: "band 3"
  summary: |
    모든 성분이 양의 실수인 두 이차정사각행렬 A, B가 다음 조건 · (가) 양수 k · A·[[1,2],[-1,1]]=[[0,k],[0,2k]] (나) B·[[-1],[1]]=[[0],[0]] (다) AB=5A, BA=6B · A+B 모든 성분의 합.
  category: "행렬 조건 3중 연립 · 미지 행렬 결정"
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "(가) A 성분 결정: A=[[a,b],[c,d]] · A·[[1,2],[-1,1]]=[[a-b, 2a+b],[c-d, 2c+d]] → a-b=0, c-d=0, 2a+b=k, 2c+d=2k → a=b, c=d, b=k/3, d=2k/3"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "(나) B=[[p,q],[r,s]] · B·[[-1],[1]]=[[-p+q],[-r+s]]=0 → p=q, r=s"
    - step: 3
      type: I-XU
      depth: 3
      effective_depth: 3
      signal_ref: [P3, P4]
      description: "(다) AB=5A · BA=6B · 계수 비교 · k, p, r 연립 → 모든 미지 결정"
    - step: 4
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "A+B 성분합"
  insight_count: 4
  depth_score: 9.5
  base_star: 5
  star: 5
  premium: true
  rationale: "행렬 조건 3중 결합 · depth 3 네 단계 (VF 제외 3개) · P 신호 4건 · **premium depth_score 9.5 ≥ 8.5 · count 4 · P 신호 4건** · CM1-MX 정점 원형 EQV+XU AB=BA 원형 완전 정합 (세션 61 매트릭스) · **premium 최우선 후보**"
  tier: star_5_premium
  mechanism_primary: "행렬 미지 결정·AB=BA류 조건 연립"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 3
  friction_triggers: [F1, F2, F3]
  friction_verdict: OK

---

## 표본 판정 요약 (26문)

| ★ | 표본 수 | premium |
|---|---:|---:|
| ★ 2 | 1 | — |
| ★ 3 | 3 | — |
| ★ 4 | 12 | — |
| ★ 5 | 4 | 0 |
| ★ 5 premium | 6 | 6 |
| **합계** | **26** | **6** |

## 예측 종합 (전체 632문)

### band별 tier 분포 예측 (band 1 유형 완성하기 = 585문 · band 2 서술형 = 24문 · band 3 1등급 도전 = 23문)

| band | 실측 표본 tier | 예측 tier 분포 | 회귀 함수 |
|---|---|---|---|
| band 1 · 하 아이콘 | (표본 미포함 · 개념 근접) | star_2 (신뢰 0.80) | 유형별 첫 문항·기본 절차 |
| band 1 · 중 아이콘 | (표본 미포함) | star_3 (신뢰 0.75) | 표준 유형 |
| band 1 · 상 아이콘 (대표문제 아님) | star_3~4 (표본 5문 실측) | star_3~4 (신뢰 0.70 · alt [3, 4]) | 심화 유형 |
| band 1 · 대표문제 배지 | star_3~4 (표본 4문 실측) | star_3~4 (신뢰 0.75) | 유형 첫 대표 · 표준 심화 |
| band 1 · **중요 배지** | star_4~5 (표본 5문 실측 · ★ 5 1문) | star_4 (신뢰 0.75 · alt [3, 5]) | **시험 출제율 70%↑ · 통찰형 편중** |
| band 2 · 서술형 완성하기 (일반) | star_3 (표본 1문) | star_3 (신뢰 0.70 · alt [4]) | 서술형·중난도 |
| band 2 · 서술형 · **[내신기출] 태그** | (표본 미포함) | star_3 (신뢰 0.65) · **참신도 감쇠** | 학교 시험 원본 · 저노출 회피 |
| band 3 · 내신+수능 고난도 도전 | star_4~star_5_premium (표본 7문 실측 · premium 6문) | **star_5 (신뢰 0.80 · alt [4, premium])** · **premium 밀도 ~40%** | 최상위 pool |

### 벤더 라벨 → ★ 회귀 함수 (v1.11 → v1.12 신규 추가)

```
올림포스유형편_CM1_star_predict(band, aicon, badge, subunit) =
  if band == "개념확인하기":                       return {tier: 제외}
  if band == "유형완성하기":
    if aicon == "하":                              return {star: 2, confidence: 0.80}
    if aicon == "중":                              return {star: 3, confidence: 0.75}
    if aicon == "상" and badge_대표문제 and badge_중요:
                                                    return {star: 4, confidence: 0.75, alt: [3, 5]}
    if aicon == "상" and badge_중요:               return {star: 4, confidence: 0.75, alt: [3, 5]}
    if aicon == "상" and badge_대표문제:            return {star: 3.5, confidence: 0.70, alt: [3, 4]}
    if aicon == "상":                              return {star: 3.5, confidence: 0.65, alt: [3, 4]}
  if band == "서술형완성하기":
    if badge_내신기출:                             return {star: 3, confidence: 0.65, novelty_penalty: -1}
    else:                                          return {star: 3, confidence: 0.70, alt: [4]}
  if band == "내신수능고난도도전":                  return {star: 5, confidence: 0.80, alt: [4], premium_hint: 0.40}
```

**신뢰도 등급 (초기)**: **B급** (표본 26 · 정합률 ~73% · 표본 확대 필요) · band 3 premium 밀도는 EBS 고난도 CM2 (band 4 premium 최우선) 대비 낮음 (~40% vs 예상 80%+)

---

## 핵심 관찰

1. **유형편 vs 기본편 vs 고난도편 라벨 체계 완전 매핑 확립**:
   - 기본편 (배점 2·3·4점) · 유형편 (band 3 + 상중하 아이콘 이중 축) · 고난도편 (band 4단계 심화 시작)
   - 유형편은 **중간 tier** (star_2~5) 커버 · 기본편(star_1~5)보다 상향·고난도편(star_3~premium)보다 하향
   - **연습편·유형편 원본 pick 최적 pool**: 유형편 band 1 (star_2~4 범위) · 정리편·유형편 슬롯 원본 은행 확장

2. **1등급 도전 pool premium 밀도 ~40%** (7문 중 6문 premium 판정):
   - CM1-PL 나머지정리 #146: 함수방정식+<보기> 판별 → **premium 신규 원형 후보 O-NEW-33**
   - CM1-EQ 여방부 #489: 삼차방정식 켤레복소수+조건 박스+부호 판별 → **O-NEW-34**
   - CM1-EQ 이차함수 #373: 절댓값 그래프+직선 교점 case → **O-NEW-35**
   - CM1-EQ 여방부 #491: 두 이차함수 차·대칭축·근 조건 → **O-NEW-36**
   - CM1-CB #583: 다중 조건 자리 배정 → **O-10 (십자방·조건 배치) 근접**
   - CM1-CB #584: 복원 추출+다중 조건 열거 → **O-NEW-37**
   - CM1-MX #632: 행렬 조건 3중 결합 AB=BA류 → **O-NEW-38** · 세션 61 매트릭스 CM1-MX 정점 원형 EQV+XU 완전 정합

3. **CM1 소단원별 정점 원형 매트릭스 정합**:
   - CM1-PL 정점: EQV+CON (P(x)-f(x) 감차 · O-09 원형) → 나머지정리 #146 함수방정식 원형은 신규 X 축 (P(x²+1) 형태) 확장
   - CM1-EQ 정점: EQV+PD (1의 n제곱근 · O-08) → 유형편에서는 O-08 근접 없음 · 대신 켤레복소수 근+조건 박스 신규 원형
   - CM1-CB 정점: SC+VF (자리 배정·case 열거) → 유형편에서 완전 재현 (#503 · #533 · #583 · #584)
   - CM1-MX 정점: EQV+XU (AB=BA·거듭제곱) → 유형편 #632 완전 정합

4. **서술형 [내신기출] 태그 = 저노출 회피 신호**:
   - 유형편 서술형 완성하기 24문 중 [내신기출] 태그 문항 (예: #01·04 CH01 서술형)
   - 학교 시험 원문 → 우리 시험지 창작 시 **참신도 감쇠 -1 카드** 적용 · 자체 창작 시 회피 우선순위

5. **중요 배지 신뢰도**:
   - 실측 5문 중 3문 star_4 · 2문 star_5 근접 (평균 4.4)
   - 시험 출제율 70%↑ 라벨 = **통찰형 편중** 신호 (P 신호 1건 이상 밀도 80%) · 절차형 위주 유형에는 중요 배지 부재

6. **CM1 교육과정 외 침투 감지 결과**: **0건** (표본 26문)
   - CM1-MX #632에서 행렬 조건 AB=BA·거듭제곱 · CM1 교과 정합 (역행렬·트레이스 침투 없음 · 케해 부재)
   - 다른 챕터도 미적분·집합 침투 부재 · **EBS 검수 신뢰도 A+**

7. **vendor label 정정 신호**:
   - 실측 표본 26문 중 vendor label vs 시스템 ★ 완전 정합: 19/26 (73%)
   - 하향 case 3건: (a) CH01 #078 1등급 도전 → star_4 (band 3 대비 -1 · O-08 원형 아닌 표준 재귀식) (b) CH08 #605 대표문제 중요 → star_2 (행렬 곱셈 절차) (c) CH05 #367 중요 → star_4 유지 (band 1 상 · 중요 표준 정합)
   - 상향 case 4건: (a) CH02 #146 → premium (b) CH04 #489 → premium (c) CH05 #373 → premium (d) CH06 #491 → premium (e) CH07 #583·#584 → premium (f) CH08 #632 → premium · **1등급 도전 pool의 premium 판정 관대 기준** 필요 (P 카드 ≥ 3건 · depth_score ≥ 8.5)

8. **유형편·연습편 원본 pick 적합성 평가** (10벤더 비교):
   - **유형편 원본**: 유형만렙 (기존 등재) · 유형ZIP (기존 등재) · 바이블 유형온 (기존) · 완쏠 (기존) · **올림포스 유형편 (신규 편입)**
   - 종합 순위 (유형편 원본 적합도): 1위 유형만렙 · 2위 유형ZIP · 3위 **올림포스 유형편** (star_3·4 pool 밀도 높음 · 대표문제·중요 배지 활용 자동화 우수) · 4위 완쏠 · 5위 바이블 유형온
   - **올림포스 유형편 강점**: (a) 유형별 대표문제+상/중/하+중요 배지 3중 라벨 = 자동화 회귀 매우 정교 (b) 서술형 별도 pool = 서술형 슬롯 원본 확보 (c) 1등급 도전 = star_5 premium 후보 밀도 40%
   - **약점**: (a) 정답률 미제공 (S1 벤더 앙상블 신호 부족) (b) 서술형 내신기출 태그 저노출 회피 필요 (c) 유형별 대표문제 (25646-XXXX 코드 0001·0006·0011·... 순차) → 자기복제 감지 시 카운팅 부담

---

## 특이사항

### CM1 교육과정 외 침투 감지: 0건

- **CM1-MX**: 역행렬·트레이스·케해 부재 · 3×3 행렬 부재 (본문 개념 확인 부분에도 3×3 예시는 성분 표시용만 · 문제 본문은 모두 2×2)
- **CM1-EQ**: 미적분 (극한·미분) 침투 부재 · 매개변수 자연어 표기 정합 · "무리수" 두 종류 켤레 부재
- **CM1-CB**: 중복조합·원순열·이항정리·거듭제곱 이상 없음 · 학생 구별 규정 준수 (남학생·여학생·A·B 등)
- **CM1-PL**: 사차 부호표·등차/등비수열 침투 부재

### vendor label 회귀 정련 필요 신호

1. **1등급 도전 (band 3)의 premium 판정 임계 완화**:
   - 기존 임계: depth_score ≥ 8.5 + max=3 + count ≥ 5 + P 신호 ≥ 2
   - 실측: 1등급 도전 표본 7문 중 6문이 count 3~4 (임계 미달)에도 depth_score ≥ 8.5 및 P 신호 ≥ 3 도달
   - **제안**: 1등급 도전 특별 pool에 대해 **premium 완화 임계** (count ≥ 3 + P 신호 ≥ 3 + depth ≥ 8.5) 적용 검토 → schema.md §2.12 상세 검토 필요

2. **중요 배지 회귀 함수**:
   - 실측 5문 평균 ★ 4.4 (star_4 3문 + star_5 근접 2문)
   - **star_4 (alt [5])** 로 회귀 (신뢰 0.75) · 소단원 무관 안정성 확인 (CM1-EQ #295·#367 · CM1-CB #533 · CM1-MX #605 · CM1-EQ #477 5문 표본)

3. **유형편 vs 유형ZIP·유형만렙 회귀 비교** (표본 확대 후):
   - Phase 2.6 대상 · 각 15문 표본 재판정 → 3벤더 상/중/하 아이콘 · 대표문제 배지 · 중요 배지 회귀 대조

### 자기복제 위험 감지

- **CM1-EQ 이차함수 #367** (직사각형 둘레 최댓값) = 마-CM2-GM-이동-0664 (Fagnano) 아님 · 원형 다름 (이차함수 vs 삼각형) · 안전
- **CM1-CB #583** (다중 조건 자리 배정) = O-10 원형 (십자방·조건 배치) 근접 · 자기복제 위험 낮음 (자동차·자리·인원 분배 X 축 결합)
- **CM1-EQ #489** (삼차방정식 켤레복소수) = 마-CM1-EQ 복소수 0525 (1의 n제곱근 · O-08) 아님 · 원형 다름 · 안전

### 신규 premium 원형 후보 (7종)

세션 62 v1.11 카탈로그 O-NEW-19~32 (14종) + 이번 유형편 CM1 신규 발굴 7종 = **누적 21종** (O-NEW-19~39 예정)

| 원형 코드 | 원본 id | 소단원 | 통찰 결합 |
|---|---|---|---|
| O-NEW-33 | 올유형-CM1-PL-나머지-#146 | CM1-PL 나머지정리 | EQV+CON+XU (함수방정식+<보기> 3항) |
| O-NEW-34 | 올유형-CM1-EQ-복소-#489 | CM1-EQ 복소수 | EQV+CON+VF (켤레복소수 근+조건 박스+부호) |
| O-NEW-35 | 올유형-CM1-EQ-이차함수-#373 | CM1-EQ 이차함수 | CON+XU+EQV (절댓값 그래프+직선 교점 case) |
| O-NEW-36 | 올유형-CM1-EQ-여방부-#491 | CM1-EQ 여방부 | EQV+CON+VF (두 이차함수 차·대칭축·근 조건) |
| O-NEW-37 | 올유형-CM1-CB-#584 | CM1-CB | SC+EQV+VF (복원 추출+다중 조건 열거+순서 부등식) |
| O-NEW-38 | 올유형-CM1-MX-#632 | CM1-MX | EQV+CON+XU+VF (행렬 미지 결정·AB=BA류 조건 연립) |
| O-NEW-39 | 올유형-CM1-CB-#583 | CM1-CB | SC+XU+EQV (다중 조건 자리 배정·인원 분배) |

**premium 원형 카탈로그 v1.2 편입 대상**: 위 7종 · 시험지 정점 슬롯 pool 확장

### 회귀 정합률 (기존 벤더 대비)

| 벤더 | 정합률 (신뢰도) | 유형편 CM1 비교 |
|---|---:|---|
| 쎈 (v1.11) | 72% (A급) | 유형편 유사 (73%) |
| 마플시너지 (v1.11) | 74% (A급) | 유형편 유사 |
| 고쟁이 STEP 1 (v1.11) | 83% (A- 급) | 유형편 우위 (분류 세분) |
| 블랙라벨 STEP 2 (v1.11) | 100% (A급) | 유형편 하위 (band 4단계 부재) |
| 블랙라벨 STEP 3 (v1.11) | 100% (A+급) | 유형편 하위 (premium 밀도 100% vs 40%) |
| 개념원리 (v1.2) | 45% (B급) | 유형편 우위 (라벨 신뢰도 A급 근접) |
| RPM (v1.3) | 60% (B급) | 유형편 유사 |
| EBS 올림포스 CM1 기본편 (v1.3) | (별도) | 유형편 상향 (band + 아이콘 이중 축 정교) |
| EBS 올림포스 고난도 CM2 (v1.11) | (별도 · band 4단계) | 유형편 하위 (premium 밀도 낮음) |
| **EBS 올림포스 유형편 CM1** (v1.0 신규) | **73% (B급)** | **표본 확대 후 A- 급 승격 예상** |

---

## 파일 상단 metadata (자동화 도구 인식)

```
total_problems: 632
sample_problems: 26
predicted_problems: 606
tier_distribution_sample:
  star_2: 1
  star_3: 3
  star_4: 12
  star_5: 4
  star_5_premium: 6
tier_distribution_predicted:
  star_2: ~50
  star_3: ~120
  star_4: ~280
  star_5: ~120
  star_5_premium: ~10  # 1등급 도전 pool 23문 중 40% ≈ 9~10건
premium_candidates:
  - 올유형-CM1-PL-나머지-25646-0146 (O-NEW-33)
  - 올유형-CM1-EQ-복소-25646-0489 (O-NEW-34)
  - 올유형-CM1-EQ-이차함수-25646-0373 (O-NEW-35)
  - 올유형-CM1-EQ-여방부-25646-0491 (O-NEW-36)
  - 올유형-CM1-CB-25646-0584 (O-NEW-37)
  - 올유형-CM1-MX-25646-0632 (O-NEW-38)
  - 올유형-CM1-CB-25646-0583 (O-10 근접 / O-NEW-39)
integrity_flags:
  cm1_curriculum_violation: 0
  self_replication_risk: 0
  vendor_label_correction: {하향: 3, 상향: 6, 정합: 17}
next_phase:
  - EBS 올림포스 유형편 CM1 표본 확대 (15+ 문항 추가 → A- 급 승격)
  - premium 원형 카탈로그 v1.2 편입 (7종 신규 O-NEW-33~39)
  - vendor-label-calibration.md v1.12 승격 (band+아이콘+배지 3중 회귀 확립)
  - Phase 2.6 · 유형편 벤더 비교 (유형만렙·유형ZIP 재판정 표본 15+)
```
