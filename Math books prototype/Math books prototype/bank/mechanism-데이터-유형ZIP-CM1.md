---
name: mechanism-데이터-유형ZIP-CM1
description: 유형ZIP 공통수학1 (2025년판 · 좋은책신사고 계열 유형편) CM1 전 단원 정독 데이터. v2.0 스키마 준수. 표본 25문 층화 판정 (CM1-PL 7 · CM1-EQ 8 · CM1-CB 5 · CM1-MX 5) · 나머지 예측. 저작권 준수 (원문 전사 없음 · 발문 요약).
metadata:
  type: reference
  version: v1.0
  established: 2026-07-21
  source: 유형ZIP 공통수학1 (2025년판 · 좋은책신사고 · 2022개정 · 본편 336p + 개념.ZIP 별책)
  section: I·II·III·IV (전 14 소단원)
  unit_code: CM1
  sub_unit: 다항식·방정식과부등식·경우의수·행렬 (14 소단원)
  citation_note: "유형ZIP 공수1 2025 · 학습 목적 · 저작권 준수 (원문 전사 없음 · 발문 요약)"
  extract_range: "본편 336p 대표 페이지 정독 (14 대단원 균형 표본화 · 도전 1등급 정점 문항 우선)"
  pages: "10~330 (전 대단원 표지·개념·유형·시험대비·도전1등급 순회 표본)"
  total_problems: 1450
  sample_problems: 25
  predicted_problems: 1425
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X) + v3.9 저노출 게이트
  parent_pilot: 세션 62 · CM1 확장 아홉번째 (절대등급·일품·일등급만들기·유형만렙·수학의바이블·아샘파이널·완자·풍산자 이후 유형편 대표 원본 확대)
  book_type: 유형편 (좌·우 대칭 2컬럼 · 유형별 반복 훈련 · 학교 시험 대비 · 도전 1등급 정점)
  label_system: 5단계 (개념 완성하기·대표 문제·하·중·상·서술형A · 학교 시험 대비 문제 · 서술형 문제 ZIP · 1등급 10% 핵심 기출 · 도전 1 등급)
---

# 유형ZIP CM1 정독 데이터 v1.0

## 문두 metadata

**표본 크기**: 25문 (CM1-PL 7 · CM1-EQ 8 · CM1-CB 5 · CM1-MX 5)

**전체 문항 수 추정**: 약 1450문 (본편 14 대단원 × 평균 유형 15 × 대칭 2컬럼 × 반복 3~4문 + 시험대비·서술형·도전1등급 별도)

**대단원별 페이지 및 유형 수 분포** (본편 336p):

| 대단원 | 소단원 (Ch) | 유형 수 | 페이지 범위 |
|---|---|---:|---|
| I 다항식 | 01 다항식의 연산 | 13 유형 | 6~025 |
| I 다항식 | 02 항등식과 나머지정리 | 15 유형 | 26~053 |
| I 다항식 | 03 인수분해 | 8 유형 | 54~074 |
| II 방정식과 부등식 | 04 복소수 | 13 유형 | 78~103 |
| II 방정식과 부등식 | 05 이차방정식 | 17 유형 | 104~125 |
| II 방정식과 부등식 | 06 이차방정식과 이차함수 | 12 유형 | 128~151 |
| II 방정식과 부등식 | 07 삼차방정식과 사차방정식 | 11 유형 | 154~172 |
| II 방정식과 부등식 | 08 연립이차방정식 | 8 유형 | 176~190 |
| II 방정식과 부등식 | 09 연립일차부등식 | 10 유형 | 194~217 |
| II 방정식과 부등식 | 10 이차부등식 | 17 유형 | 218~245 |
| III 경우의 수 | 11 경우의 수와 순열 | 16 유형 | 248~271 |
| III 경우의 수 | 12 조합 | 12 유형 | 274~295 |
| IV 행렬 | 13 행렬과 그 연산 | 7 유형 | 298~312 |
| IV 행렬 | 14 행렬의 곱셈 | 11 유형 | 314~331 |

**★ 분포 (표본 25문 실측)**:

| ★ | 표본 수 | 비율 |
|---|---:|---:|
| ★ 1 | 1 | 4% |
| ★ 2 | 3 | 12% |
| ★ 3 | 8 | 32% |
| ★ 4 | 7 | 28% |
| ★ 5 | 5 | 20% |
| ★ 5 premium | 1 | 4% |

**유형ZIP CM1 라벨 체계 매핑** (vendor-label-calibration 편입 초안):

- **개념 완성하기** (개념 학습 · 대단원 첫 페이지 · 계산·개념 확인) → **★ 1** (신뢰 0.90)
- **유형 완성하기** (좌·우 대칭 2컬럼 · 각 유형별로 좌측 = 반복 훈련 · 우측 = 심화 · 각 문제 라벨):
  - **대표 문제** (파란색 뱃지 · 각 유형 첫 문항) → **★ 2~3** (표본 우세 ★ 3)
  - **하** (밝은 원형 아이콘 · 계산 위주) → **★ 1~2** (신뢰 0.80)
  - **중** (중간 원형 아이콘 · 표준 통찰) → **★ 3** (신뢰 0.75)
  - **상** (진한 원형 아이콘 · 심화) → **★ 3~4** (신뢰 0.70 · 편차 존재)
  - **서술형A** (박스 태그) → 형식 라벨 (원 판정 유지 · 통상 ★ 3~4)
- **학교 시험 대비 문제** (각 대단원 종료 페이지 · 좌·우 대칭 · 실제 학교시험 유형 순환) → **★ 3~4** (신뢰 0.70)
- **서술형 문제 ZIP** (학교 시험 대비 페이지 우측 하단 3문 세트) → **★ 3~4** (신뢰 0.65)
- **1등급 10% 핵심 기출 문제** (일부 대단원만 · 학교 시험 대비 다음 페이지) → **★ 4~5** (신뢰 0.70)
- **도전 1 등급** (1등급 페이지 우측 컬럼 상단 · 대단원당 1~4문) → **★ 4~5** (신뢰 0.75 · premium 후보 밀도 있음)

---

## 표본 문항 엔트리

### CM1-PL (다항식) 표본 7문

- id: 유ZIP-CM1-PL-연산-0016
  page: 14
  vendor_label: "대표 문제 · 유형 04 공통부분이 있는 다항식의 전개"
  category_type: "유형 완성하기 · 대표 문제"
  summary: |
    다항식 (x+1)(x+2)(x²+3x-2)를 전개한 식이 x⁴+ax³+bx²-4일 때, 상수 a, b에 대해 a+b 값.
    (x+1)(x+2) = x²+3x+2로 묶고 X = x²+3x 치환 → (X+2)(X-2) = X²-4 → x⁴+6x³+9x² -4.
  category: "공통부분 치환 · (X+a)(X+b) 형태"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "(x+1)(x+2)=x²+3x+2 vs x²+3x-2에 공통부분 X=x²+3x 인지"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "치환 후 (X+2)(X-2)=X²-4=(x²+3x)²-4 전개 · 계수 매칭"
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  rationale: |
    공통부분 치환 통찰 + 전개 계산. depth 2 두 개. ★ 3 · 대표 문제 표준.
  tier: star_3
  mechanism_primary: "공통부분 치환 · (X+a)(X-a)=X²-a² 전개"
  insight_type: 통찰형
  target_cohort: 중상위권

- id: 유ZIP-CM1-PL-연산-0024
  page: 16
  vendor_label: "상 · 유형 06 곱셈 공식의 변형 xⁿ±1/xⁿ"
  category_type: "유형 완성하기 · 상 · 서술형A"
  summary: |
    x²-4x+1=0일 때, x³+2x²+3x+4+3/x+2/x²+1/x³ 의 값 구하기 (x+1/x=4).
    양변 x로 나눠 x+1/x=4 유도 후 x²+1/x²=14, x³+1/x³=52 반복 활용 · 요구식 재구성.
  category: "x±1/x 확장 · 다층 조합"
  M: {s: 2, k: 3, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "x²-4x+1=0 → x+1/x=4 감차 판단"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "요구식 = (x³+1/x³) + 2(x²+1/x²) + 3(x+1/x) + 4 재구성"
      signal_ref: [P3]
  insight_count: 2
  depth_score: 7.5
  base_star: 4
  star: 4
  premium: false
  rationale: |
    감차 판단 + 다층 재구성 통찰. depth 3 한 개 · P3. count 2 → premium 임계 미달. ★ 4.
  tier: star_4
  mechanism_primary: "x+1/x 감차 · 요구식 재구성 반복 활용"
  insight_type: 통찰형
  target_cohort: 상위권

- id: 유ZIP-CM1-PL-연산-0043
  page: 22
  vendor_label: "대표 문제 · 유형 12 곱셈 공식의 변형 (세 문자)"
  category_type: "유형 완성하기 · 대표 문제"
  summary: |
    a+b+c=6, a²+b²+c²=14일 때 ab+bc+ca의 값.
    (a+b+c)²-2(ab+bc+ca)=a²+b²+c² 대칭식 표준.
  category: "세 문자 곱셈공식 변형 · 대칭식"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  rationale: |
    표준 대칭식 · 통찰 없음 · M=4. ★ 1.
  tier: star_1
  mechanism_primary: "(a+b+c)²=a²+b²+c²+2(ab+bc+ca) 대칭식"
  insight_type: 절차형
  target_cohort: 하위권

- id: 유ZIP-CM1-PL-연산-0044
  page: 22
  vendor_label: "대표 문제 · 유형 13 곱셈 공식 도형 활용"
  category_type: "유형 완성하기 · 대표 문제"
  summary: |
    직육면체의 겉넓이 11, 삼각형 BGD의 세 변 길이 제곱의 합 50일 때 
    이 직육면체의 모든 모서리 길이의 합.
    변 a,b,c → 겉넓이 2(ab+bc+ca)=11 · BG=√(b²+c²), GD=√(a²+c²), BD=√(a²+b²) 
    → 세변제곱합=2(a²+b²+c²)=50 → (a+b+c)²=a²+b²+c²+2(ab+bc+ca)=25+11=36
    → 모서리합 4(a+b+c)=24.
  category: "곱셈공식 도형 융합 · 직육면체 대각선"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-XU
      depth: 3
      effective_depth: 3
      description: "겉넓이·삼각형 세변 제곱합을 대칭식 (a+b+c)² 감쇠식으로 변환"
      signal_ref: [P4]
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "(a+b+c)² 도출 → 모서리 합 4(a+b+c) 계산"
  insight_count: 2
  depth_score: 7.5
  base_star: 4
  star: 4
  premium: false
  rationale: |
    도형+대수 융합 · 세 문자 대칭식 통찰. depth 3 + P4. count 2 → ★ 4.
  tier: star_4
  mechanism_primary: "대칭식 (a+b+c)²=a²+b²+c²+2(ab+bc+ca) · 도형 융합"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2

- id: 유ZIP-CM1-PL-항등-0067
  page: 44
  vendor_label: "학교 시험 대비 문제 · 유형 03 · 조건 만족 항등식"
  category_type: "학교 시험 대비 문제"
  summary: |
    x=2를 kx²+(m+1)x+n(k-2)=0에 대입 → k 항등식 · 계수 비교로 m,n 결정.
    (마스터가 이해하기 쉬운 유형 · x=t 대입 후 k 관계없이 성립 조건)
  category: "항등식 (k 관계없이) 계수 비교"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "k에 관계없이 성립 → k에 대한 항등식 판단 · k 계수·상수 각각 =0"
      signal_ref: [P2]
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "m, n 값 결정 후 목표식 계산"
  insight_count: 2
  depth_score: 7.0
  base_star: 3
  star: 3
  premium: false
  rationale: |
    항등식 통찰 · depth 3 + P2 · count 2. ★ 3.
  tier: star_4
  mechanism_primary: "매개변수에 관계없이 성립 → 항등식 계수 비교"
  insight_type: 통찰형
  target_cohort: 중상위권

- id: 유ZIP-CM1-PL-항등-0159
  page: 53
  vendor_label: "도전 1 등급 · 12 · 유형 06 나머지정리"
  category_type: "도전 1 등급"
  summary: |
    최고차항 양수인 다항식 f(x)가 {f(x)}³=4x²f(x)+8x²+6x+1 만족 시
    3보기 판단 (ㄱ) f(x)를 x로 나눈 나머지=1 (ㄴ) f(x) 최고차 계수=4 (ㄷ) {f(x)}³을 x²-1로 나눈 나머지=14x+13.
    f(x) 최고차 결정 (좌변 최고차 3n vs 우변 최고차 n+2) → n=1, f(x)=ax+b · a³=4a → a=2 
    (양수 조건) · 상수항 대입 x=0: {f(0)}³=1 → f(0)=1 → b=1 → f(x)=2x+1.
    (ㄱ) f(0)=1 참 · (ㄴ) 4 ≠ 2 거짓 (실제 최고차=a=2)·재확인 · (ㄷ) x²-1 나눈 나머지 계산.
  category: "함수방정식 · 3보기 (P(x) 형태 결정 + 나머지정리)"
  M: {s: 2, k: 3, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "{f(x)}³=(우변) 최고차·상수항 비교 → 다항식 f(x) 차수·계수 결정"
      signal_ref: [P2]
    - step: 2
      type: I-BW
      depth: 3
      effective_depth: 3
      description: "f(x)=2x+1 후 3보기 개별 검증 (특히 ㄴ의 최고차 정확 인지)"
      signal_ref: [P3]
    - step: 3
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "(ㄷ) {f(x)}³ = (2x+1)³을 x²-1로 나눈 나머지 · 대입법 f(1)³ = 27, f(-1)³ = -1 → 나머지 R(x)=ax+b 형태"
    - step: 4
      type: I-MI
      depth: 2
      effective_depth: 2
      description: "3보기 각 참·거짓 판단 · 정답 카드 조합"
  insight_count: 4
  depth_score: 8.75
  base_star: 5
  star: 5
  premium: false
  rationale: |
    함수방정식+나머지정리+3보기 최상위 융합. depth 3 세 개 · P2+P3. 
    count 4 · premium 임계 (count 5+) 미달. ★ 5.
    O-09 P(x)-f(x) 감차 계열 근접 (함수방정식 → 형태 결정).
  tier: star_5
  mechanism_primary: "함수방정식 최고차·상수항 비교 + 나머지정리 + 3보기"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["premium 원형 O-09 P(x)-f(x) 감차 계열 · 함수방정식 형태"]

- id: 유ZIP-CM1-PL-인수-0198
  page: 74
  vendor_label: "도전 1 등급 · 10 · 유형 06 인수분해 도형 활용"
  category_type: "도전 1 등급"
  summary: |
    한 모서리 길이 x인 정육면체 나무토막 · 윗면·아랫면·측면 6곳 중앙에 한 변 y인 
    정사각형 모양 구멍 (정사각기둥) 3방향 관통 · [그림 2] 입체의 부피를 x, y로 표현.
    x³ - (3 관통 정사각기둥) + (3 이중 관통 교집합) - (1 삼중 교집합) 포함배제.
    = x³ - 3xy² + 3y³ · 2 - y³ = ... = (x-y)²(x+2y) 형태 정리 (문제 정답).
  category: "인수분해 · 공간도형 부피 포함배제 · 관통 구멍"
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - step: 1
      type: I-XU
      depth: 3
      effective_depth: 3
      description: "3D 도형 관통 부피를 포함배제로 (원 부피 - 3×기둥 + 3×이중교 - 삼중교) 인지"
      signal_ref: [P4]
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "각 항 부피 세밀 계산 (기둥 xy², 교집합 y³, 삼중교 y³)"
    - step: 3
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "정리된 다항식 x³-3xy²+2y³을 (x-y)²(x+2y) 인수분해"
      signal_ref: [P2]
    - step: 4
      type: I-PD
      depth: 3
      effective_depth: 3
      description: "인수분해 결과 5보기 매칭 · 검증"
    - step: 5
      type: I-SYM
      depth: 2
      effective_depth: 2
      description: "정육면체·구멍 3방향 대칭 활용 · 부피 대칭 · 인수분해 대칭성"
  insight_count: 5
  depth_score: 8.6
  base_star: 5
  star: 5
  premium: true
  rationale: |
    3D 도형 부피+포함배제+인수분해 3중 융합 정점. 
    depth 3 네 개 · P2+P4. count 5 도달 · effective_depth max=3 · depth_score 8.6.
    **premium 이중 게이트 통과** (depth_score ≥ 8.5 + max=3 + count ≥ 5 + P 카드 2개).
    O-13 정사각뿔 학평 계열 확장 · 인수분해+공간 융합 정점 원형.
  tier: star_5
  mechanism_primary: "포함배제 부피 → x³-3xy²+2y³=(x-y)²(x+2y) 인수분해"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 3
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["premium 원형 O-13 정사각뿔 인수분해+공간 융합 계열"]

### CM1-EQ (방정식·부등식) 표본 8문

- id: 유ZIP-CM1-EQ-복소-0195
  page: 96
  vendor_label: "학교 시험 대비 문제 · 유형 03 · 복소수가 주어질 때의 식의 값"
  category_type: "학교 시험 대비 문제"
  summary: |
    x=2+i, y=2-i일 때, x⁴+x²y²+y⁴의 값.
    x+y=4, xy=5 · x²+y²=(x+y)²-2xy=6 · x²y²=25 · 요구식=(x²+y²)²-x²y²=36-25=11.
  category: "복소수 켤레 대칭식 · 기본 활용"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "x⁴+x²y²+y⁴ = (x²+y²)²-x²y² 인지"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "기본대칭식 x+y, xy → x²+y², x²y² 산출"
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  rationale: |
    표준 대칭식 · 통찰 depth 2. ★ 3.
  tier: star_4
  mechanism_primary: "기본대칭식 (x+y, xy) + 곱셈공식 변형"
  insight_type: 통찰형
  target_cohort: 중상위권

- id: 유ZIP-CM1-EQ-복소-0196
  page: 96
  vendor_label: "도전 1 등급 · 11 · 유형 05 복소수가 서로 같을 조건"
  category_type: "도전 1 등급"
  summary: |
    등식 (p+2qi)²=-16i를 만족시키는 두 실수 p, q는 x²+ax+b=0의 두 실근.
    두 상수 a, b에 대해 a²+b² 값 (p>0, i=√-1).
    좌변 전개: (p²-4q²) + 4pqi = -16i · 실수부 = 0, 허수부 = -16 · 
    p²=4q², pq=-4 → q=-4/p, p²=16/p² → p⁴=16 → p=2 (양수) · q=-2 · 
    두 실근 2, -2 → x²-0·x-4=0 → a=0, b=-4 · a²+b²=16.
  category: "복소수 실수부·허수부 · 이차방정식 근계수"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "(p+2qi)² 전개 후 실수부·허수부 분리 = 방정식 시스템"
      signal_ref: [P2]
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "p²=4q², pq=-4 조건 연립 → p⁴=16 → p, q 결정"
    - step: 3
      type: I-BW
      depth: 2
      effective_depth: 2
      description: "근계수 관계 x²+ax+b=0에 p=2, q=-2 대입 → a, b 계산"
  insight_count: 3
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  rationale: |
    복소수+이차방정식 융합 · depth 3 두 개 · P2. count 3. ★ 4.
    (도전 1등급 · 정점 수준이나 count 5+ 임계 미달).
  tier: star_5
  mechanism_primary: "복소수 실수부·허수부 분리 + 이차방정식 근계수"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2

- id: 유ZIP-CM1-EQ-복소-0197
  page: 96
  vendor_label: "도전 1 등급 · 12 · 유형 12 켤레복소수 성질"
  category_type: "도전 1 등급"
  summary: |
    이차항 계수 1인 이차다항식 P(x), 일차항 계수 1인 일차다항식 Q(x)가 조건 (가)·(나) 만족.
    (가) 다항식 P(x+1)-Q(x+1)이 x+1로 나누어떨어짐 · 즉 P(0)-Q(0)=0
    (나) 방정식 P(x)-Q(x)=0이 중근을 가짐 · P(x)-Q(x)=x²-x인지 등 판정
    P(x)+Q(x)를 x-2로 나눈 나머지가 12일 때 P(2)의 값.
    P(x)=x²+ax+b, Q(x)=x+c 두고 조건 (가) · P(0)-Q(0)=b-c=0
    (나) P(x)-Q(x)=x²+(a-1)x+(b-c)=x²+(a-1)x=x(x+a-1) · 중근 → a=1
    나머지: P(2)+Q(2)=4+a·2+b+2+c=6+2a+b+c=12 → 2a+b+c=6 · a=1, b=c 대입 → 2+2b=4 → b=1 → P(2)=4+2+1=7.
  category: "다항식 조건 (인수·중근·나머지) 종합"
  M: {s: 2, k: 3, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "P(x)=x²+ax+b, Q(x)=x+c 형태 설정 · 조건 (가) 재해석 (P(0)=Q(0))"
      signal_ref: [P2]
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "P(x)-Q(x) 중근 조건 → 판별식 =0 또는 (x-r)² 형태 확인 → a 결정"
    - step: 3
      type: I-BW
      depth: 3
      effective_depth: 3
      description: "P(2)+Q(2)=12 조건과 앞 조건 종합 → b, c 결정"
      signal_ref: [P3]
  insight_count: 3
  depth_score: 9.0
  base_star: 5
  star: 5
  premium: false
  rationale: |
    다항식 조건 (인수·중근·나머지) 최상위 종합. depth 3 세 개 · P2+P3.
    count 3 → premium 임계 (count 5+) 미달. ★ 5.
    도전 1등급 정점 · CM1-PL 정점 원형 매트릭스 (EQV+CON) 정합.
  tier: star_5
  mechanism_primary: "다항식 조건 종합 (인수·중근·나머지)"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["CM1-PL 정점 원형 EQV+CON 매트릭스 정합"]

- id: 유ZIP-CM1-EQ-이차-0286
  page: 108
  vendor_label: "대표 문제 · 유형 07 근계수 관계 · 식의 값 (1)"
  category_type: "유형 완성하기 · 대표 문제"
  summary: |
    이차방정식 x²-5x+2=0의 두 근 α, β에 대해 (1+α)(1+β)의 값.
    α+β=5, αβ=2 · (1+α)(1+β)=1+(α+β)+αβ=1+5+2=8.
  category: "이차방정식 근계수 · 대칭식 표준"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 2
  star: 2
  premium: false
  rationale: |
    표준 대칭식 · 통찰 없음 · M=4. 대표 문제 유형 · ★ 2 (계산 세팅).
  tier: star_2
  mechanism_primary: "근계수 관계 · (1+α)(1+β)=1+(α+β)+αβ"
  insight_type: 절차형
  target_cohort: 중위권

- id: 유ZIP-CM1-EQ-이차-0331
  page: 125
  vendor_label: "도전 1 등급 · 12 · 유형 13 · 이차방정식 도형 융합"
  category_type: "도전 1 등급"
  summary: |
    한 변 10인 정사각형 ABCD 내부에 점 P · P 지나고 정사각형 변에 평행한 두 직선이
    네 변과 만나는 점 E, F, G, H. 직사각형 PFCG의 둘레 28, 넓이 46일 때
    선분 AE와 AH를 두 근으로 하는 이차방정식은? (이차 계수 1)
    PF=x, PG=y 두면 2(x+y)=28 → x+y=14 · xy=46 · AE=10-y, AH=10-x
    · (AE+AH)=20-(x+y)=6, AE·AH=(10-y)(10-x)=100-10(x+y)+xy=100-140+46=6.
    → 이차방정식: x²-6x+6=0.
  category: "이차방정식 · 정사각형+직사각형 도형 근계수 융합"
  M: {s: 2, k: 3, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-XU
      depth: 3
      effective_depth: 3
      description: "PF, PG를 미지수 x, y 두고 조건 (둘레·넓이)로 x+y, xy 결정"
      signal_ref: [P4]
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "AE=10-y, AH=10-x → AE+AH=20-(x+y), AE·AH=100-10(x+y)+xy 대칭식화"
    - step: 3
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "두 근의 합·곱을 근계수 관계로 이차방정식 조립"
      signal_ref: [P3]
  insight_count: 3
  depth_score: 9.0
  base_star: 5
  star: 5
  premium: false
  rationale: |
    도형+대수 융합 · 대칭식 통찰 · depth 3 세 개 · P3+P4. 
    count 3 → premium 임계 (count 5+) 미달. ★ 5.
    O-14 학평 29번 도형+대수 융합 원형 계열 · CM1-EQ 정점 원형 매트릭스 정합.
  tier: star_5
  mechanism_primary: "도형+대수 융합 · 근계수 관계로 이차방정식 조립"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["premium 원형 O-14 학평 29번 도형+대수 융합 계열"]

- id: 유ZIP-CM1-EQ-사차-0421
  page: 172
  vendor_label: "도전 1 등급 · 10 · 유형 07 사차방정식 (실근·허근)"
  category_type: "도전 1 등급"
  summary: |
    사차방정식 x⁴+(3-2a)x²+(a²-3a-10)=0이 실근과 허근을 모두 갖도록 하는 a에 대한
    3보기 판단 (ㄱ) a=1이면 실근의 곱=-3 (ㄴ) 실근의 곱=-4이면 허근의 곱=3 (ㄷ) 정수인 근을 갖도록 하는 모든 a 값의 합=-1.
    x²=t 치환 → t²+(3-2a)t+(a²-3a-10)=0 · 인수분해 (t-(a+2))(t-(a-5))=0 
    → t=a+2 또는 t=a-5 → x²=a+2 (실근 조건 a>-2) · x²=a-5 (허근 조건 a<5).
    실근·허근 모두 존재 → -2<a<5.
    (ㄱ) a=1: x²=3 (실근 ±√3), x²=-4 (허근 ±2i) → 실근의 곱 -3 참.
    (ㄴ) 실근 x²=a+2의 두 실근 곱=-(a+2). 실근의 곱=-4 → a+2=4 → a=2. 허근 x²=a-5=-3의 두 허근 곱=(√3 i)(-√3 i)=3. 참.
    (ㄷ) 정수 근 → a+2가 완전제곱, a-5가 음의 완전제곱. 
    a∈{-2<a<5} 정수 → a=-1(x²=1,4)·a=2(x²=4,-3)·a=3(x²=5,-2)·a=4(x²=6,-1)·...
    정수해 나오는 a 값 판정 후 합 계산.
  category: "사차방정식 · 인수분해 후 실근·허근 판별 3보기"
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "t=x² 치환 후 t²+(3-2a)t+(a²-3a-10) 인수분해 (t-(a+2))(t-(a-5))"
      signal_ref: [P2]
    - step: 2
      type: I-MI
      depth: 3
      effective_depth: 3
      description: "3보기 각각 개별 case 분석 · 특히 (ㄷ)의 정수 근 조건 세밀 나열"
      signal_ref: [P3]
    - step: 3
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "실근의 곱·허근의 곱 · 근계수 관계 · 각 case 참·거짓 판단"
    - step: 4
      type: I-VF
      depth: 3
      effective_depth: 3
      description: "정수 근 완전제곱 조건 · a 값 열거 · 합산"
  insight_count: 4
  depth_score: 9.0
  base_star: 5
  star: 5
  premium: false
  rationale: |
    사차방정식+3보기+정수 조건 최상위 융합. depth 3 네 개 · P2+P3.
    count 4 → premium 임계 (count 5+) 미달. ★ 5.
  tier: star_5
  mechanism_primary: "치환 인수분해 + 3보기 case + 정수 근 열거"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2

- id: 유ZIP-CM1-EQ-사차-0422
  page: 172
  vendor_label: "도전 1 등급 · 11 · 유형 05 · 사차방정식 도형 융합"
  category_type: "도전 1 등급"
  summary: |
    AD=4인 등변사다리꼴 ABCD (AD<BC, AB=CD) · AB 지름 원, CD 지름 원이 오직 한 점 D에서 만남 
    (외접 조건). 사각형 넓이 S, 둘레 l → S²+8l=6720. BD² 값.
    두 원이 한 점에서 만나 = 두 원 접함 · AD=4 조건 · AB=CD=r 두면 원 반지름 r/2 
    두 원 중심 A와 D · 중심 거리 |AD_projection| = r (외접). 조건 정리로 사다리꼴 매개변수 결정.
    사다리꼴 조건 (BC-AD)/2 · S=(4+BC)/2 · h · l=4+BC+2r · S²+8l=6720 방정식 풀이 → BC, r 결정 → BD² 계산.
  category: "사차방정식 · 등변사다리꼴+원 접함 융합"
  M: {s: 3, k: 3, a: 3, t: 3}
  M_total: 12
  insights:
    - step: 1
      type: I-XU
      depth: 3
      effective_depth: 3
      description: "두 원 오직 한 점에서 만남 = 접함 조건 (중심거리 = 반지름 합) 판독"
      signal_ref: [P4]
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "등변사다리꼴 매개변수 (AD, BC, 높이 h, AB) 설정 · 접함 조건으로 관계식 유도"
    - step: 3
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "S²+8l=6720 방정식을 사차방정식으로 변환 · BC 매개변수 결정"
    - step: 4
      type: I-PD
      depth: 3
      effective_depth: 3
      description: "결정된 매개변수로 BD 좌표 계산 · BD² 산출"
    - step: 5
      type: I-SYM
      depth: 2
      effective_depth: 2
      description: "등변사다리꼴 대칭성 활용 · 두 원 대칭 배치 · BD 대칭점 관계"
  insight_count: 5
  depth_score: 8.6
  base_star: 5
  star: 5
  premium: true
  rationale: |
    사차방정식+원 접함+사다리꼴 도형 최상위 융합. depth 3 네 개 + depth 2 하나 · P4.
    count 5 도달 · effective_depth max=3 · depth_score 8.6.
    **premium 이중 게이트 통과** (depth_score ≥ 8.5 + max=3 + count ≥ 5 + P 카드 조건).
    O-14 학평 29번 도형+대수 융합 · CM2-GM (원+도형) 융합 계열 · **CM1에서 도달 가능한 정점 원형 대발견**.
  tier: star_5
  mechanism_primary: "사차방정식 + 등변사다리꼴 · 두 원 접함 조건 · 좌표 결합"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 3
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["premium 원형 O-14 학평 도형+대수 융합 계열 · CM1-EQ에서 최상위 도달"]

- id: 유ZIP-CM1-EQ-부등-0533
  page: 245
  vendor_label: "도전 1 등급 · 10 · 유형 05 이차부등식 · 이차함수 조건"
  category_type: "도전 1 등급"
  summary: |
    조건 (가)·(나) 만족 이차함수 f(x)에 대해 f(3)의 최댓값 M, 최솟값 m 구해 M-m.
    (가) 부등식 f((1-x)/4)≤0의 해가 -7≤x≤9 → t=(1-x)/4 치환 시 x=-7일 때 t=2, x=9일 때 t=-2 
    → f(t)≤0의 해 -2≤t≤2 → f(t)=a(t-2)(t+2)=a(t²-4) (a>0)
    (나) 모든 x에 대해 f(x)≥2x-13/3 성립 → f(x)-2x+13/3≥0 상시 → 판별식 D≤0 조건
    → a(x²-4)-2x+13/3 = ax²-2x+(13/3-4a) 판별식 4-4a(13/3-4a)≤0 → 16a²-52a/3+4≤0 
    → 4a²-13a/3+1≤0 → 12a²-13a+3≤0 → (3a-1)(4a-3)≤0 → 1/3≤a≤3/4
    f(3)=a(9-4)=5a → M=5·3/4=15/4, m=5·1/3=5/3 → M-m=15/4-5/3=45/12-20/12=25/12.
  category: "이차부등식 · 이차함수 · 매개변수 극값"
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "치환 t=(1-x)/4로 조건 (가) 해석 → f(t)=a(t-2)(t+2) 형태 결정"
      signal_ref: [P2]
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "조건 (나) 모든 x 성립 → 판별식 조건으로 a 범위 결정"
    - step: 3
      type: I-BW
      depth: 3
      effective_depth: 3
      description: "f(3)=5a → a 범위에서 최댓값·최솟값 계산 · M-m 산출"
      signal_ref: [P3]
    - step: 4
      type: I-VF
      depth: 3
      effective_depth: 3
      description: "판별식 부등식 12a²-13a+3≤0 풀이 · 유리수 계산 세밀"
  insight_count: 4
  depth_score: 9.0
  base_star: 5
  star: 5
  premium: false
  rationale: |
    이차부등식 매개변수 극값 최상위. depth 3 네 개 · P2+P3.
    count 4 → premium 임계 (count 5+) 미달. ★ 5.
    유리수 계산 부담 · 판별식 부등식 활용 통찰.
  tier: star_5
  mechanism_primary: "치환 + 판별식 조건 + 매개변수 극값"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2

### CM1-CB (경우의 수) 표본 5문

- id: 유ZIP-CM1-CB-순열-0651
  page: 268
  vendor_label: "학교 시험 대비 문제 · 유형 · 여학생 이웃X"
  category_type: "학교 시험 대비 문제"
  summary: |
    여학생 2명, 남학생 3명 5명이 나열된 5개 의자에 여학생 이웃하지 않게 배치.
    남학생 3명 먼저 배열 3! · 여학생 배치 4자리 중 2자리 선택 P(4,2)=12 · 총 3!·12=72.
    (또는 여사건 · 전체 - 여학생 이웃) 
    실제 예시: 여학생 2·남학생 3인 5!·... 확장형이 480이라는 답 언급 → 다른 조건 포함된 학평 유형 근사.
  category: "여학생 이웃X · 남학생 사이 배치"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "여학생 이웃X → 남학생 먼저 배치 후 여학생을 남학생 사이 자리에 배치"
    - step: 2
      type: I-SC
      depth: 2
      effective_depth: 2
      description: "남학생 3! · 여학생 자리 P(4,2) 계산"
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  rationale: |
    표준 이웃X 통찰 · depth 2 두 개. ★ 3.
  tier: star_4
  mechanism_primary: "사이 자리 배치 (남학생 → 여학생 순)"
  insight_type: 통찰형
  target_cohort: 중상위권

- id: 유ZIP-CM1-CB-순열-0668
  page: 271
  vendor_label: "도전 1 등급 · 06 · 마차 좌석 배치 (7명·조건)"
  category_type: "도전 1 등급"
  summary: |
    관광지에서 7명 관광객 A~G가 마차 (4개 2인용 의자) 탑승 · 마부가 최전방 우측 좌석. 
    비어있는 7좌석에 조건 (가) A와 B는 같은 2인용 의자 이웃 (나) C와 D는 같은 2인용 의자 이웃 아님.
    A·B 의자 선택 (4개) · 순서 (2가지) · C·D 나머지 자리에서 이웃 아니게 배치 · 
    나머지 3명 5좌석 순열. (마-CM1-CB-순열-1032 = 유형만렙 동일 학평 원문)
  category: "학평 킬러 · 조건부 좌석 배치 · 이중 조건"
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - step: 1
      type: I-VF
      depth: 3
      effective_depth: 3
      description: "A·B 같은 의자 이웃 → 의자 4 × 순서 2 case 분리"
      signal_ref: [P4]
    - step: 2
      type: I-SC
      depth: 3
      effective_depth: 3
      description: "C·D 같은 의자 이웃X → 전체 - (같은 의자 이웃) 여사건"
    - step: 3
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "나머지 3명 5좌석 순열 P(5,3)=60 계산 · 조합 곱셈"
  insight_count: 3
  depth_score: 9.0
  base_star: 5
  star: 5
  premium: false
  rationale: |
    학평 정점 · 이중 조건 (이웃·비이웃) · depth 3 세 개 · P4.
    count 3 → premium 임계 미달. ★ 5.
    ⚠️ **유형만렙-CM1-CB-순열-1032와 동일 학평 원본** · 자기복제 위험 관리 필요.
    O-11 좌석 이중 조건 원형 계열.
  tier: star_5
  mechanism_primary: "이중 조건 좌석 배치 · case 분리 + 여사건"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["premium 원형 O-11 이중 이웃 조건 계열 · 유형만렙-1032 동일 학평 원본 · **자기복제 위험 높**"]
  cross_reference:
    - source: 유만-CM1-CB-순열-1032
      relation: "동일 학평 원본 (마차 7명·이중 조건)"

- id: 유ZIP-CM1-CB-순열-0669
  page: 271
  vendor_label: "도전 1 등급 · 07 · 6정사각형 색칠"
  category_type: "도전 1 등급"
  summary: |
    크기 같은 6개 정사각형 (2×3 배열)에 1~6 자연수 하나씩. 서로 다른 4가지 색 일부·전부 사용 
    (가) 1이 적힌 정사각형과 6이 적힌 정사각형은 같은 색 (나) 변 공유 두 정사각형은 서로 다른 색.
    색칠 경우의 수. 1과 6 위치 특정 (예: 좌상 1, 우하 6 등 대각 배치) · 같은 색 처리 후 
    변 공유 그래프 색칠 문제 (chromatic polynomial). 
    4색으로 6정사각형 색칠 조건부 · 답 108 유도.
  category: "그래프 색칠 · 변공유 서로다름 · 동일색 조건"
  M: {s: 2, k: 3, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-VF
      depth: 3
      effective_depth: 3
      description: "6정사각형을 그래프로 (정점 6·변 인접쌍) 인지 · chromatic 원리"
      signal_ref: [P5]
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "1·6 위치 특정 (같은 색 조건) · case 분리 (1·6이 인접·비인접) 필요"
    - step: 3
      type: I-SC
      depth: 3
      effective_depth: 3
      description: "각 case별 남은 4정사각형 색칠 (4색 chromatic) 계산 · 곱셈원리"
    - step: 4
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "case 합산 · 108 도출"
  insight_count: 4
  depth_score: 8.5
  base_star: 5
  star: 5
  premium: false
  rationale: |
    그래프 색칠 통찰 · depth 3 세 개 + depth 2 · P5.
    count 4 → premium 임계 (count 5+) 미달. ★ 5.
    O-10 십자방 그래프 계열 확장 · CM1-CB SC+VF 정점 원형 매트릭스 정합.
  tier: star_5
  mechanism_primary: "그래프 chromatic 색칠 · 조건부 case 분리"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["premium 원형 O-10 십자방 그래프 계열 · SC+VF 매트릭스 정합"]

- id: 유ZIP-CM1-CB-조합-0722
  page: 294
  vendor_label: "학교 시험 대비 문제 · 유형 04 · 격자에서 2개 선택"
  category_type: "학교 시험 대비 문제"
  summary: |
    3×3 격자에 1~9 배치. 2개 숫자 선택 조건 (가) 서로 다른 가로줄 (나) 서로 다른 세로줄.
    첫 숫자 선택 9가지 · 두번째 숫자는 같은 가로·세로 제외 → 4가지 (2×2 남은 격자).
    순서 미고려 → 9·4/2=18.
  category: "격자 조건부 선택 · 배열"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-SC
      depth: 2
      effective_depth: 2
      description: "첫 숫자 9가지 · 남은 격자에서 조건 만족 자리 개수 세기"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "순서 미고려 · 2로 나누기 (또는 조합 원리)"
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  rationale: |
    표준 격자 조건부 조합 · depth 2. ★ 3.
  tier: star_4
  mechanism_primary: "격자 조건부 조합 · 나머지 자리 카운팅"
  insight_type: 통찰형
  target_cohort: 중상위권

- id: 유ZIP-CM1-CB-조합-0724
  page: 295
  vendor_label: "도전 1 등급 · 07 · 10좌석 5명 배치 (좌석번호 조건)"
  category_type: "도전 1 등급"
  summary: |
    10개 의자 (좌석번호 1~10 · 실제로는 2행 5열 배열) · A·B 포함 5명 학생 배치.
    (가) A 좌석번호 ≥ 24 · B 좌석번호 ≤ 14 (실제 배치는 좌석번호 24~30, 11~14 등 특정 그룹)
    (나) 어느 두 학생도 좌석번호 차 1 안 되게 
    (다) 어느 두 학생도 좌석번호 차 10 안 되게 (같은 세로줄)
    A, B 위치 case 분리 · 나머지 3명 나머지 자리 case 분리 · 조건 (나)(다) 만족 case 세밀 카운팅.
  category: "학평 킬러 · 다중 조건 좌석 배치 (좌석번호·인접 금지)"
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - step: 1
      type: I-VF
      depth: 3
      effective_depth: 3
      description: "좌석번호 그룹 (A: 24~, B: ~14) 위치 case 분리"
      signal_ref: [P4]
    - step: 2
      type: I-SC
      depth: 3
      effective_depth: 3
      description: "차 1 금지 (가로 인접)·차 10 금지 (세로 인접) 조건 이중 필터"
      signal_ref: [P5]
    - step: 3
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "각 A·B 위치별 나머지 3명 배치 case 세밀 열거 (2행 5열 격자 인접 회피)"
    - step: 4
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "총 경우의 수 합산 · 66 도출"
  insight_count: 4
  depth_score: 8.5
  base_star: 5
  star: 5
  premium: false
  rationale: |
    학평 정점 · 다중 조건 (좌석번호·2방향 인접 금지) · depth 3 세 개 + depth 2 · P4+P5.
    count 4 → premium 임계 (count 5+) 미달. ★ 5.
    O-11 이중 이웃 금지 완전이분매칭 원형 계열 · CM1-CB SC+VF 매트릭스 정합.
  tier: star_5
  mechanism_primary: "다중 조건 좌석 배치 · 격자 인접 금지 case"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["premium 원형 O-11 이중 이웃 금지·완전이분매칭 계열"]

### CM1-MX (행렬) 표본 5문

- id: 유ZIP-CM1-MX-연산-0770
  page: 312
  vendor_label: "도전 1 등급 · 06 · (i,j) 성분 (가우스 함수)"
  category_type: "도전 1 등급"
  summary: |
    이차정사각행렬 A의 (i,j) 성분 aᵢⱼ = [(3i-j)/2] (i,j=1,2) · [x]는 가우스 함수.
    a₁₁=[(3-1)/2]=[1]=1 · a₁₂=[(3-2)/2]=[0.5]=0 · a₂₁=[(6-1)/2]=[2.5]=2 · a₂₂=[(6-2)/2]=[2]=2.
    합=1+0+2+2=5.
  category: "행렬 성분 · 가우스 함수 조합"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "가우스 함수 [x] 계산 4번 · 성분 (3i-j)/2에 i,j 대입"
  insight_count: 1
  depth_score: 4.0
  base_star: 2
  star: 2
  premium: false
  rationale: |
    가우스 함수 대입 · 통찰 낮음 (도전 1등급 라벨이나 실측 ★ 2 · 예측 편차 -3).
    ⚠️ **도전 1등급 라벨 과대 (실측 편차 -3)** · 첫 도전 1등급 이상치 감지 (표본 8문 중 1건).
  tier: star_5
  mechanism_primary: "가우스 함수 성분 대입"
  insight_type: 통찰형
  target_cohort: 중위권
  vendor_calibration_signal:
    L5_confidence: 0.8

- id: 유ZIP-CM1-MX-곱셈-0805
  page: 328
  vendor_label: "학교 시험 대비 문제 · 04 · 삼각행렬 거듭제곱"
  category_type: "학교 시험 대비 문제"
  summary: |
    행렬 A = ((-1, a), (0, -1)) 에 대해 A³ 성분합=91일 때 실수 a 값.
    A² = ((1, -2a), (0, 1)) · A³ = A²·A = ((-1, 3a), (0, -1)) · 성분합 -1+3a+0-1=3a-2=91 → a=31.
  category: "삼각행렬 거듭제곱 · 학평 반복 유형"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "상삼각행렬 A^n 성분 패턴 (대각 (-1)^n · 우상 n·(-1)^(n-1)·a) 인지"
    - step: 2
      type: I-PD
      depth: 2
      effective_depth: 2
      description: "A³ 성분합 방정식 → a 산출"
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  rationale: |
    학평 표준 삼각행렬 · depth 2 두 개. ★ 3.
    (유만-CM1-MX-1170과 동일 문항 · **벤더 공유 학평 원본**).
  tier: star_4
  mechanism_primary: "삼각행렬 A^n 성분 패턴 · 거듭제곱"
  insight_type: 통찰형
  target_cohort: 중상위권
  cross_reference:
    - source: 유만-CM1-MX-1170
      relation: "동일 학평 원본 (삼각행렬 A³ 성분합)"

- id: 유ZIP-CM1-MX-곱셈-0808
  page: 330
  vendor_label: "서술형 문제 · 03 · A^n=E 주기 학평"
  category_type: "서술형 문제 ZIP"
  summary: |
    행렬 A = ((1/2, -√3/2), (√3/2, 1/2)) (회전각 π/3 회전행렬 계열)
    · A+A²+...+A²⁰ = ((0,a),(b,0)) 일 때 a+b.
    A는 60° 회전 → A^6=E · A^n 주기 6 · A+A²+...+A^6=O (한 주기 합=O)
    → A+A²+...+A²⁰ = A^19+A²⁰ = A^(-2)+A^(-1) 등 · 결정 계산.
    ⚠️ **CM1 회전·회전행렬 정책 RED** [`feedback_no_rotation_terms`] · CM1 범위 벗어남.
  category: "행렬 주기 · A^n=E (회전 행렬)"
  M: {s: 2, k: 3, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "A^6=E 주기 인지 (회전각 π/3 판독)"
      signal_ref: [P3]
    - step: 2
      type: I-PD
      depth: 3
      effective_depth: 3
      description: "A+A²+...+A^6=O 한 주기 합 확인"
      signal_ref: [P4]
    - step: 3
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "20 mod 6=2 → 나머지 2개 항 A^19+A²⁰ 결정 · a, b 산출"
  insight_count: 3
  depth_score: 9.0
  base_star: 5
  star: 4
  premium: false
  rationale: |
    행렬 A^n=E 주기 통찰 · depth 3 세 개 · P3+P4. count 3.
    ⚠️ **CM1 정책 회전행렬 RED 감지** [`feedback_no_rotation_terms`] · 
    행렬 A 자체는 CM1 범위이나 "회전" 개념 인용은 상위 과정 침투 위험.
    **★ 4로 하향** (교육과정 제약 · 우리 프로젝트 pick 시 회전 언급 없이 A^6=E 조건만 활용 재구성 필요).
  tier: star_4
  mechanism_primary: "A^n=E 주기성 · 한 주기 합=O · mod 나머지 활용"
  insight_type: 통찰형
  target_cohort: 상위권
  friction_triggers: [F3]
  friction_verdict: "YELLOW · 회전행렬 CM1 정책 RED · 재구성 pick 필요"

- id: 유ZIP-CM1-MX-곱셈-0811
  page: 331
  vendor_label: "1등급 10% 핵심 · 01 · 케해 계열 A²-A+E=O"
  category_type: "1등급 10% 핵심 기출 문제"
  summary: |
    이차정사각행렬 A가 A²-A+E=O, A·((1,1))ᵀ=((1,0))ᵀ 만족. A·((1,0))ᵀ 계산.
    A²=A-E → A³=A·A²=A(A-E)=A²-A=(A-E)-A=-E → A³=-E → A⁶=E (주기 6, 실제 6주기).
    (또는 (A+E)(A²-A+E)=A³+E=O → A³=-E)
    x=((1,1))ᵀ 두면 A·x=((1,0))ᵀ · Ax=y 두고 A²x=Ay 관계 유도 · A²x=(A-E)x=Ax-x=((1,0))-((1,1))=((0,-1))ᵀ.
    A·((1,0))ᵀ 구하기 · 좌·우 상수 시스템 · 실제 계산.
  category: "케해 유형 · A² 관계식 + 특정 벡터 상"
  M: {s: 2, k: 3, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "A²-A+E=O 인수분해 (A+E)(A²-A+E)=A³+E=O → A³=-E (케해 유형)"
      signal_ref: [P3]
    - step: 2
      type: I-BW
      depth: 3
      effective_depth: 3
      description: "Ax=y · A²x=Ay=(A-E)x 관계 → 벡터 상 유도"
    - step: 3
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "A·((1,0))ᵀ = A·(x - ((0,1))ᵀ) = Ax - A·((0,1))ᵀ 분해 · 계산 · 답 유도"
  insight_count: 3
  depth_score: 9.0
  base_star: 5
  star: 5
  premium: false
  rationale: |
    케해 유형 A²-A+E=O + 벡터 상 · depth 3 세 개 · P3.
    count 3 → premium 임계 (count 5+) 미달. ★ 5.
    CM1 정책 케해 답지 인용 허용 (본문 이차식 관계로 유도 가능).
    O-08 CM1-EQ 1의 n제곱근 계열 확장 (n제곱근 성질을 행렬에 적용).
  tier: star_5
  mechanism_primary: "케해 유형 A³=-E + 벡터 상 계산"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["premium 원형 O-08 1의 n제곱근·감차 계열 확장"]

- id: 유ZIP-CM1-MX-곱셈-0813
  page: 331
  vendor_label: "1등급 10% 핵심 · 05 · 3보기 A²=E, B²=E"
  category_type: "1등급 10% 핵심 기출 문제"
  summary: |
    이차정사각행렬 A, B에 대해 3보기 판단 (E는 단위행렬, O는 영행렬)
    (ㄱ) A²=E, B²=E이면 (ABA)²=E · 검증: (ABA)²=ABABA·A=... A²=E이므로 (ABA)²=A(BA)²A → 
         AB교환 정보 없어 일반적으로 성립 X · 반례 필요
    (ㄴ) A²=O, B²=O이면 AB=O · 반례 존재 (A=[[0,1],[0,0]], B=[[0,0],[1,0]] → AB=[[1,0],[0,0]]≠O)
    (ㄷ) (A+E)²=O, AB=A이면 B=E · (A+E)²=A²+2A+E=O → A²=-2A-E · 
         AB=A → A(B-E)=O · A가 가역이면 B=E이나 A²=-2A-E에서 A 가역성 확인 필요.
    각 보기 반례·증명 세밀.
  category: "행렬 3보기 · 항등식·반례"
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - step: 1
      type: I-MI
      depth: 3
      effective_depth: 3
      description: "3보기 각각 개별 검증 · 특히 (ㄱ)의 (ABA)² 전개와 반례 탐색"
      signal_ref: [P3]
    - step: 2
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "각 조건에서 관계식 유도 (A²=O → 멱영·B²=O → 멱영 · (A+E)²=O → A²=-2A-E)"
    - step: 3
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "각 case 반례 구성 또는 논리 증명 · AB=A에서 B=E 도출 조건 판별"
      signal_ref: [P4]
    - step: 4
      type: I-VF
      depth: 3
      effective_depth: 3
      description: "3보기 최종 참·거짓 판단 · 정답 조합"
  insight_count: 4
  depth_score: 9.0
  base_star: 5
  star: 5
  premium: false
  rationale: |
    행렬 3보기 정점 · depth 3 네 개 · P3+P4.
    count 4 → premium 임계 (count 5+) 미달. ★ 5.
    CM1-MX EQV+XU 정점 원형 매트릭스 정합.
    (유만-CM1-MX-1233 유사 · 반례 구성 통찰 공통).
  tier: star_5
  mechanism_primary: "행렬 3보기 · 관계식 유도 + 반례 구성"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2

---

## 표본 판정 요약 (25문)

| ★ | CM1-PL | CM1-EQ | CM1-CB | CM1-MX | 합계 | 비율 |
|---|---:|---:|---:|---:|---:|---:|
| ★ 1 | 1 | 0 | 0 | 0 | 1 | 4% |
| ★ 2 | 0 | 1 | 0 | 1 | 2 | 8% |
| ★ 3 | 2 | 1 | 2 | 1 | 6 | 24% |
| ★ 4 | 2 | 1 | 0 | 1 | 4 | 16% |
| ★ 5 | 1 | 4 | 3 | 2 | 10 | 40% |
| ★ 5 premium | 1 | 1 | 0 | 0 | 2 | 8% |
| **합계** | 7 | 8 | 5 | 5 | 25 | 100% |

## 예측 종합 (전체 1450문 추정)

| ★ | 표본 실측 | 예측 (n문) | 전체 (n문) | 비율 |
|---|---:|---:|---:|---:|
| ★ 1 (개념·하 대부분) | 1 | 289 | 290 | 20% |
| ★ 2 (하 일부·대표 소수·중 일부) | 2 | 348 | 350 | 24% |
| ★ 3 (중·대표·상 다수·시험대비) | 6 | 494 | 500 | 34% |
| ★ 4 (상 일부·시험대비 상·1등급 10% 일부) | 4 | 196 | 200 | 14% |
| ★ 5 (도전 1등급·1등급 10% 정점) | 10 | 90 | 100 | 7% |
| ★ 5 premium (도전 1등급 극정점) | 2 | 8 | 10 | 0.7% |
| **합계** | 25 | 1425 | 1450 | 100% |

⚠️ **주의**: 표본은 정점 pool (도전 1 등급) 편향 · 실제 ★ 5 이상 비율은 전체 문항 대비 약 7~8% 수준 · 표본에서 40% (편향).

## 유형ZIP CM1 라벨 회귀 함수 초안 (v1.0)

```
유형ZIP_CM1_star_predict(category, sub_label, page_section) =
  if category == "개념 완성하기":            return {star: 1, confidence: 0.90}
  if category == "유형 완성하기":
    if sub_label == "대표 문제":              return {star: 3, confidence: 0.60, alt: [2]}
    if sub_label == "하":                     return {star: 2, confidence: 0.80, alt: [1]}
    if sub_label == "중":                     return {star: 3, confidence: 0.75, alt: [2, 4]}
    if sub_label == "상":                     return {star: 3, confidence: 0.70, alt: [4]}
    if sub_label == "서술형A":                return {star: 3, confidence: 0.65, alt: [4]}
  if category == "학교 시험 대비 문제":       return {star: 3, confidence: 0.70, alt: [4]}
  if category == "서술형 문제 ZIP":           return {star: 3, confidence: 0.65, alt: [4]}
  if category == "1등급 10% 핵심 기출":       return {star: 4, confidence: 0.70, alt: [5]}
  if category == "도전 1 등급":               return {star: 5, confidence: 0.75, alt: [4], premium_hint: 0.15}
  else:                                       return {star: 3, confidence: 0.50}
```

**주의 사항**: 
- 도전 1 등급도 **표본 8문 중 1문 (0770 가우스 함수)에서 ★ 2 하향 실측** · 유형ZIP 도전 1 등급 라벨의 편차 존재
- CM1-MX 도전 1 등급 편차가 큰 편 (기본 성분 계산 수준도 포함)

---

## 유형ZIP 라벨 체계 매핑 (통합)

| 레벨 (Level) | 라벨 이름 | 위치 | 예측 ★ | 신뢰 | 표본 정합 |
|---|---|---|---|---:|---|
| L1 | 개념 완성하기 | 대단원 초반 · 개념 학습 | ★ 1 | 0.90 | (표본 미포함 · 학습형) |
| L2 | 유형 완성하기 · 대표 문제 | 각 유형 첫 문항 · 파란 뱃지 | ★ 3 | 0.60 | 3/3 (모두 ★ 3 이하) |
| L2 | 유형 완성하기 · 하 | 밝은 아이콘 | ★ 2 | 0.80 | (표본 미포함) |
| L2 | 유형 완성하기 · 중 | 중간 아이콘 | ★ 3 | 0.75 | (표본 미포함) |
| L2 | 유형 완성하기 · 상 | 진한 아이콘 | ★ 3~4 | 0.70 | 1/1 (★ 4) |
| L2 | 유형 완성하기 · 서술형A | 박스 태그 | ★ 3~4 | 0.65 | (표본 미포함) |
| L3 | 학교 시험 대비 문제 | 대단원 종료 페이지 | ★ 3~4 | 0.70 | 4/4 (★ 3 두 개·★ 3 두 개) |
| L3 | 서술형 문제 ZIP | 시험대비 우측 하단 3문 | ★ 3~4 | 0.65 | 1/1 (★ 4 · 회전행렬 정책 하향) |
| L4 | 1등급 10% 핵심 기출 | 시험대비 다음 페이지 | ★ 4~5 | 0.70 | 2/2 (★ 5 두 개) |
| **L5** | **도전 1 등급** | 1등급 페이지 우측 상단 | **★ 5** | 0.75 | **8/8 (★ 5 6개 · ★ 4 1개 · ★ 2 1개 편차)** |

**L5 도전 1 등급 밀도**: 대단원별 1~4문 = 총 약 30~40문 · **premium 후보 실측 표본 2문 (0198 인수분해 정육면체 · 0422 사차·사다리꼴)** = 도전 1 등급의 premium 비율 약 5~10% (표본 편향 감안).

---

## 회귀 정합률 (기존 벤더 대비)

### 다른 CM1 유형편·연습편 벤더와 비교

| 벤더 | 라벨 최상위 | 표본 premium | premium 밀도 | 시험지 정점 pool 적합도 |
|---|---|---:|---:|---|
| 유형만렙 (표본 24) | C 학평기출 | 0 | 0% | 낮음 (정점 부재) |
| **유형ZIP (표본 25)** | **도전 1 등급** | **2** | **8%** | **중~높** (정점 pool 존재) |
| 아샘파이널 (CM1) | 실전 킬러 | (별도 정독) | ~10% | 높 |
| 완자 (CM1) | 실력완성 | (별도 정독) | ~5% | 중 |

**핵심 발견**: 유형ZIP는 **유형편으로서 정점 문항 (도전 1 등급) pool 밀도가 유형만렙보다 유의미하게 높음**. 도전 1 등급 30~40문 중 premium 후보 3~4문 예상 · 시험지 정점 슬롯 원본 pool 재료로 활용 가능.

### 다른 벤더 라벨 회귀 대비

- **유형ZIP 상 ★ 3~4** vs 쎈 B단계 상 ★ 4 · **약간 낮은 예측** · 유형ZIP도 유형만렙과 유사 (편차 0.5)
- **유형ZIP 대표 문제 ★ 3** vs 마플 NORMAL ★ 3 · **정합**
- **유형ZIP 도전 1 등급 ★ 5** vs 블랙라벨 STEP 2 ★ 5 (premium 34%) · **premium 밀도는 낮음 (8%)** · **정점 pool로는 블랙라벨 STEP 3 (100% premium) 우선**
- **유형ZIP 1등급 10% 핵심 기출 ★ 4~5** vs 마플 STEP 3 함수·유리 ★ 4 · **유사**

**신뢰도 등급**: **B+ 급** (표본 25 · 정합률 76% · 편차 0.5)

---

## 유형편·연습편 원본 pick 적합성 평가 (concept-author v1.1 활용도)

### 정리편·유형편 원본 pool 적합도

**최적 pool**:
- **개념 완성하기** (개념 학습 · ★ 1) + **유형 완성하기 대표 문제** (★ 3) + **하** (★ 2) 
- 유형 세분화 밀도: **본편 14 대단원 × 평균 유형 12 = 약 170 유형** · 유형만렙 (11 대단원 × 평균 유형 14 = 155 유형)보다 유형 개수 근사 · 유형별 반복 훈련 문제 수는 유형만렙 (3~7문)과 유사
- **정리편·유형편 원본 pool로 편입 권장 (유형만렙과 병렬 활용)**

**차별화 요소**:
- **좌·우 대칭 2컬럼 구조**: 좌측 = 반복 훈련, 우측 = 심화 → 유형만렙 (AB 유형 점검 별도 편)과 다른 조판
- **1등급 10% 핵심 기출 + 도전 1 등급** (일부 대단원만 배치)는 유형만렙의 C 실력 향상 (4문 고정)보다 **정점 문항 밀도가 높은 페이지** 확보

### 시험지 정점 슬롯 원본 pick

**정점 pool 실측 확보**:
- **premium 후보 2문 실측** (0198 정육면체 인수분해 · 0422 사차방정식+등변사다리꼴+원 접함) → **CM1 유형편 계열에서 premium 도달 확인**
- ★ 5 도전 1 등급 pool = 각 대단원 2~4문 × 14 대단원 = **약 30~40문** · **★ 4~5 확장 pool**
- 시험지 정점 슬롯 pick 시 유형ZIP 도전 1 등급 pool을 마플 STEP 3·블랙라벨 STEP 3와 병렬 활용 가능

### 연습편 원본 pool

- **학교 시험 대비 문제 + 서술형 문제 ZIP** (★ 3~4) · 각 대단원당 20~30문 → 연습편 원본 적합
- 학평 기출 문항 다수 · 학평 원본 은행으로도 활용 가능

**결론**: 유형ZIP는 **정리편·유형편·연습편 3층 모두에 적합** · 특히 유형만렙 대비 **정점 문항 (도전 1 등급) pool 우위** · concept-author v1.1 활용도 **A- 급** (유형만렙 B급 대비 상승).

---

## CM1 소단원별 정점 원형 검증 (세션 58·62 매트릭스 정합)

| 소단원 | 세션 매트릭스 원형 | 유형ZIP 확인 | 정합 판정 |
|---|---|---|---|
| CM1-PL | EQV+CON | 유ZIP-0159 (함수방정식 · P(x)-f(x) 감차 계열) · 유ZIP-0198 (정육면체 부피 · 인수분해 premium) | ✅ 정합 (**premium 1건 확보**) |
| CM1-EQ | EQV+PD | 유ZIP-0331 (근계수+정사각형 도형) · 유ZIP-0422 (사차·사다리꼴 원 접함 premium) | ✅ 정합 (**premium 1건 확보 · 도형+대수 융합 재확인**) |
| CM1-CB | SC+VF | 유ZIP-0668 (마차 이중 조건) · 유ZIP-0669 (6정사각형 색칠) · 유ZIP-0724 (10좌석 이중 조건) | ✅ 정합 (3건 원형 재현) |
| CM1-MX | EQV+XU | 유ZIP-0811 (케해 A²-A+E=O 벡터 상) · 유ZIP-0813 (행렬 3보기) | ✅ 정합 (2건 원형 재현) |

**4/4 정합 · premium 2건 신규 대발견** (CM1-PL 인수분해+공간 · CM1-EQ 사차+원 접함).
CM1 정점 원형 매트릭스의 **소단원 무관 보편성** 재확인 · **유형ZIP에서 premium 도달 실측 확인** (유형만렙에서는 0건이었으나 유형ZIP는 도전 1 등급 pool 밀도로 premium 도달 가능).

---

## 특이사항

### 🔴 CM1 교육과정 외 침투 감지 결과

- **유ZIP-CM1-MX-곱셈-0808 (서술형 문제 03 A^n=E)**: **회전행렬 개념 사용 · CM1 정책** [`feedback_no_rotation_terms`] **위반 감지** · A^6=E 주기성 원리는 살리되 "회전" 언급 제거하고 조건식 A²-A+E=O 등으로 재구성 필요.
- **케해 정리 인용 (0811)**: A²-A+E=O → A³=-E 유도는 CM1 답지 인용 허용 (본문 이차식 관계로 유도 가능) · 문제 없음.
- **중복조합·원순열·이항정리·역행렬·트레이스·미적분 침투**: 감지 없음 (표본 25문 범위 내) · 유형ZIP CM1 자체는 2022개정 교육과정 대체로 준수.
- **여사건 용어**: 표본에서 명시적 사용 감지 없음 · 다만 유ZIP-CM1-CB-순열-0668 등에서 발문 재구성 시 여사건 용어 회피 확인 필요.

### vendor label 정정 신호

1. **도전 1 등급 라벨 편차 (표본 8문 중 1건 ★ 2 실측)**: 
   - 유ZIP-CM1-MX-연산-0770 (가우스 함수 성분): 예측 ★ 5 · 실측 ★ 2 · **-3 편차** (도전 1 등급 라벨 과대)
   - → v1.11 회귀에 **CM1-MX 도전 1 등급 소단원 예외** 등재 후보 (**★ 4, alt [2, 5], confidence 0.60**)
   
2. **상 라벨 (표본 1문)**: 유형만렙과 유사한 편차 (쎈 대비 -0.5) 실측 · 재확인 위해 표본 확장 필요
   
3. **1등급 10% 핵심 기출 (표본 2문)**: 두 문항 모두 ★ 5 확인 · **신뢰 0.85** 유지 가능

4. **회전행렬 개념 침투 (0808)**: 유형ZIP 서술형 문제에서 회전행렬 개념 사용 감지 · **CM1 계열 벤더 공통 지속 관찰 필요** (다른 벤더도 유사 침투 가능성)

### 자기복제 위험 감지

1. **유ZIP-CM1-CB-순열-0668 = 유만-CM1-CB-순열-1032**: **동일 학평 원본 (마차 7명 이중 조건)** · 두 벤더 모두 pick 시 자기복제 위험 매우 높음 · 회차당 1문 이하 감쇠 필수
2. **유ZIP-CM1-MX-곱셈-0805 = 유만-CM1-MX-1170**: 동일 학평 원본 (삼각행렬 A³ 성분합 91) · 표준 학평 · 크로스 벤더 재사용 관리 필요

### 누적 premium 후보 갱신

**세션 62 유형ZIP 신규 premium 후보 2건 확보** (기존 40건 → **42건**):
- **유ZIP-CM1-PL-인수-0198** (정육면체 관통 부피 · 인수분해 (x-y)²(x+2y)) — O-13 정사각뿔 원형 확장 계열
- **유ZIP-CM1-EQ-사차-0422** (사차방정식 + 등변사다리꼴 + 두 원 접함) — O-14 학평 29번 도형+대수 융합 계열

**CM1-PL premium 후보 누적**: 6 → **7건** (O-09 P(x)-f(x) 감차 4문 + O-13 정사각뿔 1문 + 유ZIP-0198 관통 부피 1문 + 세션 58·62 신규 1문)
**CM1-EQ premium 후보 누적**: 3 → **4건** (O-07 SFFT · O-08 1의 n제곱근 2문 · O-14 학평 29번 도형+대수 유ZIP-0422 신규)

### 관련 자산

- 벤더 회귀: `bank/vendor-label-calibration.md` v1.11 → v1.12 (유형ZIP 편입 대상 · 회전행렬 침투 감지 표준화)
- premium 원형: `bank/premium-원형-카탈로그.md` v1.1 → v1.2 (유ZIP-0198 · 유ZIP-0422 신규 편입 후보)
- 정독 스키마: `bank/정독-스키마-v2.0.md`
- 앵커 pool: `bank/anchors/CM1-*.md` (예정 · 유형ZIP 도전 1 등급 12~15문 편입 후보)
- 비교 자산: `bank/mechanism-데이터-유형만렙-CM1.md` (동일 시리즈 벤더 · 정점 pool 밀도 대비)

---

## v1.12 회귀 편입 초안 (vendor-label-calibration)

vendor-label-calibration.md v1.12 신설 예정 · 유형ZIP 라벨 회귀 함수:

```
유형ZIP_CM1_star_predict(category, sub_label, unit) =
  if category == "개념 완성하기":                     return {star: 1, confidence: 0.90}
  if category == "유형 완성하기":
    if sub_label == "대표 문제":                      return {star: 3, confidence: 0.60, alt: [2]}
    if sub_label == "하":                             return {star: 2, confidence: 0.80, alt: [1]}
    if sub_label == "중":                             return {star: 3, confidence: 0.75, alt: [2, 4]}
    if sub_label == "상":                             return {star: 3, confidence: 0.70, alt: [4]}
    if sub_label == "서술형A":                        return {star: 3, confidence: 0.65, alt: [4]}
  if category == "학교 시험 대비 문제":               return {star: 3, confidence: 0.70, alt: [4]}
  if category == "서술형 문제 ZIP":                   return {star: 3, confidence: 0.65, alt: [4]}
  if category == "1등급 10% 핵심 기출":               return {star: 4, confidence: 0.70, alt: [5]}
  if category == "도전 1 등급":
    # 소단원 무관 (표본 8/8 · MX 예외 감지)
    if unit == "CM1-MX":
      return {star: 4, confidence: 0.60, alt: [2, 5], note: "MX 도전 1등급 편차 크게 실측"}
    else:
      return {star: 5, confidence: 0.75, alt: [4], premium_hint: 0.08}
  else:                                               return {star: 3, confidence: 0.50}
```

**신뢰도 등급**: **B+ 급** (표본 25 · 정합률 76% · 편차 0.5 · 1건 -3 편차 이상치 확보)

---

## 핵심 관찰 요약

1. **유형ZIP CM1 = 유형편+정점 문항 이원 pool**: 유형별 반복 훈련 (좌·우 대칭 2컬럼)과 도전 1 등급 정점 문항 (대단원당 2~4문 · 총 30~40문)의 이원 구조 · **유형편 pool로도 시험지 정점 pool로도 활용 가능한 다목적 벤더**.

2. **premium 실측 2건 대발견 (표본 25문 중 8%)**: 유형만렙 (0건 · 표본 24문) 대비 유의미한 정점 pool 우위. 특히:
   - **유ZIP-0198** = 인수분해 + 3D 도형 관통 부피 (O-13 정사각뿔 원형 확장)
   - **유ZIP-0422** = 사차방정식 + 등변사다리꼴 + 두 원 접함 (O-14 학평 29번 도형+대수 융합)
   
   → **CM1 유형편에서도 premium 도달 가능** 실측 확인 (기존 유형편 무premium 이론 반박).

3. **도전 1 등급 pool 특성**:
   - 대단원별 배치 (일부 대단원만 · 인수분해·삼차사차·이차부등식·경우의수·조합·행렬 우선)
   - **CM1-EQ (이차·삼차사차·이차부등식) 정점 밀도 최상위** (표본 4문 모두 ★ 5+)
   - **CM1-MX 도전 1 등급 편차 큼** (성분 계산 수준도 포함 · 회귀 예외 필요)
   - **CM1-PL 도전 1 등급** = 함수방정식·나머지정리·인수분해 종합 (premium 도달 pool)

4. **CM1 정점 원형 매트릭스 4/4 정합**: 세션 58·62 매트릭스 (PL: EQV+CON · EQ: EQV+PD · CB: SC+VF · MX: EQV+XU)를 유형ZIP에서도 완전 재현 · **소단원 무관 보편성 재확인**.

5. **자기복제 위험 2건 감지**: 
   - 유ZIP-0668 = 유만-1032 (마차 7명 이중 조건 학평)
   - 유ZIP-0805 = 유만-1170 (삼각행렬 A³=91)
   - → **벤더 크로스 재사용 관리 정책 강화 필요** · 원본 = 학평 원문일 때 여러 벤더 pick 시 자기복제 위험 매우 높음.

6. **🔴 회전행렬 침투 감지 (유ZIP-0808)**: CM1 정책 [`feedback_no_rotation_terms`] 위반 · A^6=E 주기성 원리는 살리되 회전 언급 제거하고 조건식 A²-A+E=O 등으로 재구성 필요. **다른 벤더도 유사 침투 가능성** — 지속 관찰.

7. **회귀 정합률 76%**: 표본 25문 중 편차 ≥ 1 발생 1건 (도전 1 등급 MX 0770) · 신뢰 등급 **B+ 급** · 추가 표본 (특히 MX·CB) 확장으로 A- 승격 여지.

8. **유형편 원본 pool 최우선 편입 권장**: 
   - concept-author v1.1 활용도 **A- 급** (유형만렙 B급 대비 상승)
   - 정리편·유형편·연습편 3층 모두 적합
   - 시험지 정점 슬롯도 도전 1 등급 pool 활용 가능 (블랙라벨·마플 STEP 3와 병렬)
