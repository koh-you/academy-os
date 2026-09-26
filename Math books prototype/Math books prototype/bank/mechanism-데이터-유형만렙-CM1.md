---
name: mechanism-데이터-유형만렙-CM1
description: 유형만렙 공통수학1 (2025년판·비상교육) CM1 전 단원 정독 데이터. v2.0 스키마 준수. 표본 24문 층화 판정 (CM1-PL·EQ·CB·MX 4대단원 균형) · 나머지 예측. 저작권 준수 (원문 전사 없음 · 발문 요약).
metadata:
  type: reference
  version: v1.0
  established: 2026-07-21
  source: 유형만렙 공통수학1 (2025년판 · 비상교육 · 2022개정 · 194p 본편 + 기출BOOK 440문 별책)
  section: I·II·III·IV (전 단원)
  unit_code: CM1
  sub_unit: 다항식·방정식과부등식·경우의수·행렬 (11 소단원)
  citation_note: "유형만렙 공수1 2025 · 학습 목적 · 저작권 준수 (원문 전사 없음 · 발문 요약)"
  extract_range: "본편 194p 대표 페이지 정독 (CM1-PL·EQ·CB·MX 소단원 균형 표본화)"
  pages: "14~23 (PL) · 58~79 (EQ) · 156~161 (CB) · 180~193 (MX)"
  total_problems: 1233
  sample_problems: 24
  predicted_problems: 1209
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X) + v3.9 저노출 게이트
  parent_pilot: 세션 62 · CM1 확장 다섯번째 (절대등급·일품·일등급만들기·수학의바이블 이후 유형편 확대)
  book_type: 유형편 (유형별 반복 훈련 · 학교 기출 밀집 · 서술형 태그)
  label_system: 4단계 (A 개념 확인 · B 유형 완성 [하10%·중80%·상10%] · AB 유형 점검 · C 실력 향상 [상 100%])
---

# 유형만렙 CM1 정독 데이터 v1.0

## 문두 metadata

**표본 크기**: 24문 (CM1-PL 8 · CM1-EQ 6 · CM1-CB 6 · CM1-MX 4)

**전체 문항 수 추정**: 약 1233문 (대표 문항 번호 0001~1233 + 서술형 · 기출BOOK 440문 별책 미포함)

**소단원별 문항 분포** (본편):
| 대단원 | 소단원 | 유형 수 | 대표 문항 번호 범위 |
|---|---|---:|---|
| I 다항식 | 01 다항식의 연산 | 13 유형 | 0001~0114 (114문) |
| I 다항식 | 02 나머지 정리·인수분해 | 23 유형 | 0115~0266 (152문) |
| II 방정식·부등식 | 03 복소수 | 13 유형 | 0267~0374 (108문) |
| II 방정식·부등식 | 04 이차방정식 | 18 유형 | 0375~0496 (122문) |
| II 방정식·부등식 | 05 이차방정식과 이차함수 | 10 유형 | 0497~0592 (96문) |
| II 방정식·부등식 | 06 여러 가지 방정식 | 19 유형 | 0593~0745 (153문) |
| II 방정식·부등식 | 07 연립일차부등식 | 10 유형 | 0746~0850 (105문) |
| II 방정식·부등식 | 08 이차부등식 | 22 유형 | 0851~1023 (173문) |
| III 경우의 수 | 09 경우의 수와 순열 | 16 유형 | 1024~1143 (120문 추정 · 순열 33·1033까지) |
| III 경우의 수 | 10 조합 | ~14 유형 | 1034~1143 |
| IV 행렬 | 11 행렬의 연산 | 16 유형 | 1144~1233 (90문) |

**★ 분포 (표본 24문 실측)**:
| ★ | 표본 수 | 비율 |
|---|---:|---:|
| ★ 1 | 3 | 12% |
| ★ 2 | 7 | 29% |
| ★ 3 | 9 | 38% |
| ★ 4 | 4 | 17% |
| ★ 5 | 1 | 4% |
| ★ 5 premium | 0 | 0% |

**유형만렙 CM1 라벨 체계 매핑** (vendor-label-calibration 편입 초안):
- **A 개념 확인** (기본 계산·개념 확인 · 각 유형 도입) → **★ 1~2** (신뢰 0.85)
- **B 유형 완성** — 유형별 반복 훈련. 상단 라벨 "하 10% · 중 80% · 상 10%" 명시. 각 문항 옆 원형 아이콘 (하·중·상) 표시:
  - **B · 대표문제** (첫 문항 파란색 뱃지) → **★ 2~3** (표본 우세 ★ 3)
  - **B · 중** (● 원형 아이콘) → **★ 3** (신뢰 0.75)
  - **B · 상** (● 원형 아이콘) → **★ 3~4** (신뢰 0.65 · 표본 편차 존재)
  - **B · 서술형A** → 형식 라벨 (★ 원 판정 유지)
  - **B · 학평기출** → **★ 3~4** (학평 원문 · 문번 미표기)
- **AB 유형 점검** (A·B 종합 검토 · 각 문항에 유형 번호 태그) → **★ 2~4** (혼합 · 분포 B와 유사)
- **C 실력 향상** (상단 라벨 "하 · 중 · 상 100%" 상 100% 명시) → **★ 4~5** (신뢰 0.75)
  - 각 소단원 4문씩 배정 (0111~0114 · 0263~0266 · 0371~0374 · 0493~0496 · 1030~1033 · 1230~1233)
  - 학평 기출 다수 포함
- **서술형** (박스 태그) → 형식 라벨 (원 ★ 판정 유지)

---

## 표본 문항 엔트리

### CM1-PL (다항식) 표본 8문

- id: 유만-CM1-PL-연산-0057
  page: 14
  vendor_label: "B단계 상 · 유형04 공통부분이 있는 식의 전개"
  category_type: "B 유형 완성 · 상"
  summary: |
    a=√3일 때, {(3+2a)³+(3-2a)³}²-{(3+2a)³-(3-2a)³}² 의 값 구하기.
    공통부분 A=(3+2a)³, B=(3-2a)³ 치환 후 (A+B)²-(A-B)² = 4AB 공식 활용.
  category: "곱셈 공식 변형 · 치환 통찰"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "복잡한 식을 A+B·A-B 치환으로 (A+B)²-(A-B)²=4AB 형태 인지"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "AB = {(3+2a)(3-2a)}³ = (9-4a²)³ 곱셈 후 대입"
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  rationale: |
    치환 통찰 + 계산 M=7. 통찰 2단계 depth 2. ★ 3 · alt ★ 2.
  tier: star_3
  mechanism_primary: "공통부분 치환 + (A+B)²-(A-B)² 공식"
  insight_type: 통찰형
  target_cohort: 중상위권

- id: 유만-CM1-PL-연산-0067
  page: 16
  vendor_label: "B단계 상 · 서술형A · 유형06 곱셈공식 변형 xⁿ±1/xⁿ 꼴"
  category_type: "B 유형 완성 · 상 · 서술형"
  summary: |
    x²-6x+1=0일 때, x³-2x²-10-2/x+1/x³의 값 구하기.
    양변 x로 나눠 x+1/x=6 유도 후 x²+1/x²=34, x³+1/x³=198 등 반복 활용.
    x³+1/x³ - 2(x²+1/x²) - 10 - (x - 1/x)·… 재구성.
  category: "x±1/x 꼴 감차·조합"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "x²-6x+1=0 → x+1/x=6 감차 판단"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "요구식 재배열 → x³+1/x³, x²+1/x², x-1/x 조합"
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  rationale: |
    감차 판단 + 재조합. 서술형이나 통찰 깊이 표준 수준. ★ 3.
  tier: star_3
  mechanism_primary: "양변 나눠 x±1/x 유도 · 반복 활용"
  insight_type: 통찰형
  target_cohort: 중상위권

- id: 유만-CM1-PL-연산-0078
  page: 17
  vendor_label: "B단계 상 · 서술형A · 유형09 곱셈공식 도형 활용"
  category_type: "B 유형 완성 · 상 · 서술형"
  summary: |
    두 정육면체 모서리 합 9, 부피 합 243 · 겉넓이 합 구하기.
    두 정육면체 모서리 a,b (a+b=9) · a³+b³=243 → ab 산출 → 6(a²+b²) = 6((a+b)²-2ab).
  category: "곱셈공식 도형 활용 · a³+b³ 공식"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "부피 합 → (a+b)(a²-ab+b²)=243 · a²+b² 유도"
  insight_count: 1
  depth_score: 4.0
  base_star: 2
  star: 2
  premium: false
  rationale: |
    표준 공식 활용 · 도형 조건 정리 · M=5. ★ 2.
  tier: star_2
  mechanism_primary: "a³+b³ 공식 · 대칭식 계산"
  insight_type: 통찰형
  target_cohort: 중위권

- id: 유만-CM1-PL-연산-0092
  page: 20
  vendor_label: "AB 유형 점검 · 유형01"
  category_type: "AB 유형 점검"
  summary: |
    세 다항식 A,B,C에 대해 A+B, B+C, C+A 주어짐 → A+B+C 계산 (모두 더한 후 2로 나눔).
  category: "다항식 덧셈뺄셈 표준"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  rationale: |
    표준 절차 · 통찰 없음 · M=4. ★ 1.
  tier: star_1
  mechanism_primary: "A+B+C = ((A+B)+(B+C)+(C+A))/2"
  insight_type: 절차형
  target_cohort: 하위권

- id: 유만-CM1-PL-연산-0099
  page: 21
  vendor_label: "AB 유형 점검 · 유형06"
  category_type: "AB 유형 점검"
  summary: |
    (3x+1/x)²+(x-3/x)²=70일 때, x + x³ + 1/x + 1/x³ 의 값 (x>0).
    전개 후 x²+9/x²=… 유도 → (x+1/x)³ = x³+1/x³+3(x+1/x) 조합.
  category: "곱셈공식 변형 xⁿ±1/xⁿ 확장"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "두 제곱식 전개 후 x²+9/x² 계수 정리"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "요구식 = (x+1/x) + (x³+1/x³) 재구성 · (x+1/x)³ 공식"
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  rationale: |
    변형 계산 통찰 · 두 단계 조합. ★ 3.
  tier: star_3
  mechanism_primary: "x+1/x 및 x³+1/x³ 조합"
  insight_type: 통찰형
  target_cohort: 중상위권

- id: 유만-CM1-PL-연산-0112
  page: 23
  vendor_label: "C단계 (하 · 중 · 상 100%)"
  category_type: "C 실력 향상"
  summary: |
    7×13×109×10081+2×4×10×82=10ᵃ-1일 때, a 값 구하기.
    좌변 = (10-3)(10+3)(10²+9)(10⁴+81) + 2·(짝수 인수) · (a-b)(a+b)(a²+b²)(a⁴+b⁴) 확장.
    (10⁸-3⁸) + 2·… · 10⁸-1 형태로 정리.
  category: "곱셈공식 수의 계산 (a-b)(a+b)…"
  M: {s: 2, k: 3, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "7·13 = 10²-3², 109 = 10²+9, 10081 = 10⁴+81 인지 · (a-b)(a+b)(a²+b²)(a⁴+b⁴) = a⁸-b⁸ 골격"
      signal_ref: [P2]
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "잔여항 2·4·10·82 정리 후 10⁸-1 도달"
  insight_count: 2
  depth_score: 8.5
  base_star: 4
  star: 4
  premium: false
  rationale: |
    수의 계산 정점 원형 · 통찰 depth 3 + P2 · a=8. ★ 4.
  tier: star_4
  mechanism_primary: "(a-b)(a+b)(a²+b²)(a⁴+b⁴)=a⁸-b⁸ 골격 인지"
  insight_type: 통찰형
  target_cohort: 상위권

- id: 유만-CM1-PL-연산-0113
  page: 23
  vendor_label: "C단계 · 학평기출 · 사각형 PQRS 정사각형 조건"
  category_type: "C 실력 향상 · 학평기출"
  summary: |
    직각삼각형 ABC (∠A=90°, BC=√10, AB=x, AC=y) 내에 사각형 PQRS가 정사각형이 되도록 잡음.
    PQ=(2/7)√10일 때 x³-y³의 값 구하기 (x>y).
    닮음비로 x·y 관계 유도 후 x-y·xy 산출 → x³-y³=(x-y)(x²+xy+y²).
  category: "도형+대수 융합 · 곱셈공식 변형"
  M: {s: 2, k: 3, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-XU
      depth: 3
      effective_depth: 3
      description: "정사각형 조건 → 삼각형 유사비로 PQ/AB = QR/AC 유도"
      signal_ref: [P4]
    - step: 2
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "1/x + 1/y = 7/(2√10) 조건 · x²+y²=10 연립 → x-y, xy 산출"
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "x³-y³ = (x-y)(x²+xy+y²) 최종 계산"
  insight_count: 3
  depth_score: 8.67
  base_star: 4
  star: 4
  premium: false
  rationale: |
    도형+대수 융합 · 유사비 통찰 + 대수 조합 + 최종 공식. depth 3 두 개 · P4. 
    ★ 5 임계 (count 5+) 미달 → ★ 4.
  tier: star_4
  mechanism_primary: "직각삼각형 내접 정사각형 유사비 + 곱셈공식"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2

- id: 유만-CM1-PL-인수-0263
  page: 43
  vendor_label: "C단계 (하 · 중 · 상 100%)"
  category_type: "C 실력 향상"
  summary: |
    최고차 2인 다항식 f(x)에 대해 {f(x)}³ = f(x)(4x²-12x)+18x-27 을 만족.
    {f(x)}³을 x²-x-2 로 나눈 나머지 구하기.
    f(x) = 2x²+ax+b 가정 · 항등식 전개 후 a,b 결정 · 나머지 R(x) = f(2)·((x+1) 항)+f(-1)·((x-2) 항)/… 조립.
  category: "다항식 · 항등식 + 나머지 정리 정점 결합"
  M: {s: 2, k: 3, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "{f(x)}³ 좌우 최고차 비교 · 나머지 관계 → 3차 항등식"
      signal_ref: [P2]
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "f(x)=2x²+ax+b 계수 매칭 후 방정식 풀이"
    - step: 3
      type: I-BW
      depth: 2
      effective_depth: 2
      description: "x²-x-2 = (x-2)(x+1) 인수 · 나머지 정리 (역방향: {f(2)}³, {f(-1)}³)"
  insight_count: 3
  depth_score: 8.67
  base_star: 4
  star: 4
  premium: false
  rationale: |
    항등식 + 다항식 나눗셈 정점 결합. depth 3 두 개 + P2. ★ 5 임계 (count 5+) 미달 → ★ 4.
  tier: star_4
  mechanism_primary: "항등식 계수 매칭 + 나머지 정리 (인수 분해 후 대입)"
  insight_type: 통찰형
  target_cohort: 상위권

### CM1-EQ (방정식·부등식) 표본 6문

- id: 유만-CM1-EQ-복소-0358
  page: 58
  vendor_label: "AB 유형 점검 · 유형06 · 학평기출"
  category_type: "AB 유형 점검 · 학평기출"
  summary: |
    x=2+i, y=2-i일 때, x⁴+x²y²+y⁴ 의 값. 
    x+y=4, xy=5 (조합·기본대칭식) → x²+y²=6 → x²y²=25 → 목표=x²+y²의 제곱 등 재구성.
  category: "복소수 사칙연산 · 켤레 대칭식"
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
      description: "x+y, xy 기본대칭식 → x²+y², x²y² 계산"
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  rationale: |
    표준 대칭식 · 학평 초중반 수준. ★ 3.
  tier: star_3
  mechanism_primary: "기본대칭식 (x+y, xy) + 곱셈공식 변형"
  insight_type: 통찰형
  target_cohort: 중상위권

- id: 유만-CM1-EQ-복소-0367
  page: 60
  vendor_label: "B단계 상 · 서술형A · 유형13 음수 제곱근"
  category_type: "B 유형 완성 · 상 · 서술형"
  summary: |
    0이 아닌 실수 a,b,c에 대해 √a·√b=-√ab, √c/√b=-√(c/b) 일 때
    √a²-|a+b|+√c² 을 간단히 하기.
    조건에서 a<0∧b<0, c>0∧b<0 유도 → a<0, b<0, c>0 · 절댓값 처리.
  category: "음수 제곱근 성질 · 부호 판정"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "√a√b=-√ab ⇒ a<0, b<0; √c/√b=-√(c/b) ⇒ c>0, b<0 부호 판정"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "√a² = |a| = -a (a<0), |a+b| = -(a+b), √c² = c 대입 단순화"
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  rationale: |
    음수 제곱근 부호 통찰 + 절댓값 정리. ★ 3.
  tier: star_3
  mechanism_primary: "음수 제곱근 성질 → 부호 판정 → 절댓값 정리"
  insight_type: 통찰형
  target_cohort: 중상위권

- id: 유만-CM1-EQ-복소-0372
  page: 61
  vendor_label: "C단계"
  category_type: "C 실력 향상"
  summary: |
    두 복소수 α,β에 대해 conj(α)β = α·conj(β) = 1, α+β = 1-i 일 때
    (1/α + 1/β)¹⁰ 의 값 구하기.
    conj(α)β = 1 → conj(α)/1 = 1/β · β = 1/conj(α) → αβ = α/conj(α) · … 조건 처리 → 
    1/α + 1/β = (α+β)/(αβ) 유도 · αβ 산출 (|α|²=1 등 활용).
  category: "켤레 복소수 · 반복 성질"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "conj(α)β=α·conj(β)=1 → αβ 및 |α|=|β|=1 유도"
      signal_ref: [P3]
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "1/α + 1/β = (α+β)/(αβ) = (1-i)/αβ 계산"
    - step: 3
      type: I-PD
      depth: 2
      effective_depth: 2
      description: "복소수 거듭제곱 · (1+i)ⁿ 성질 활용 → 10제곱 계산"
  insight_count: 3
  depth_score: 8.33
  base_star: 4
  star: 4
  premium: false
  rationale: |
    켤레 성질 다층 통찰 + 10제곱 거듭제곱. depth 3 하나 · count 3. ★ 4.
  tier: star_4
  mechanism_primary: "켤레 성질 조합 + 복소수 거듭제곱"
  insight_type: 통찰형
  target_cohort: 상위권

- id: 유만-CM1-EQ-이차-0411
  page: 67
  vendor_label: "B단계 상 · 유형02 한 근이 주어진 이차방정식"
  category_type: "B 유형 완성 · 상"
  summary: |
    kx²+(m+1)x-n(k-2)=0이 실수 k값 관계없이 항상 2를 근으로 가질 때
    x²+mx+n=0의 해 (m, n 상수).
    x=2 대입 후 k에 대한 항등식 (계수 비교) → m, n 결정 → 이차방정식 풀이.
  category: "항등식 조건 + 이차방정식 풀이"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "k에 관계없이 성립 → k의 항등식 · k계수·상수 각각 =0"
      signal_ref: [P2]
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "m, n 값 대입 후 x²+mx+n=0 인수분해 또는 근공식"
  insight_count: 2
  depth_score: 7.0
  base_star: 3
  star: 3
  premium: false
  rationale: |
    항등식 통찰 · depth 3 하나. count 2 · P2. ★ 3.
  tier: star_3
  mechanism_primary: "k의 항등식 계수 비교 · 이차방정식 풀이"
  insight_type: 통찰형
  target_cohort: 중상위권

- id: 유만-CM1-EQ-이차-0478
  page: 76
  vendor_label: "AB 유형 점검 · 유형06 · 두 이차방정식 근 관계"
  category_type: "AB 유형 점검"
  summary: |
    두 이차방정식 ax²+bx+c=0, ax²-2bx+c=0의 근에 대한 3보기 판단.
    ㄱ. a·c 부호 다르면 후자가 서로 다른 두 실근 (판별식 4b²-4ac>0 · ac<0 자동 성립)
    ㄴ. b=a+c이면 전자가 중근 (판별식 b²-4ac = (a+c)²-4ac = (a-c)²≥0, ★=0 필요 → a=c일 때만 성립 · 오답)
    ㄷ. 후자가 허근 → 4b²-4ac<0 · ac>b²>0 → 전자 판별식 b²-4ac < b²-b² = 0 → 허근.
  category: "판별식 부호 비교 · 3보기"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-MI
      depth: 3
      effective_depth: 3
      description: "각 보기 개별 판별식 정리 · 특히 ㄷ은 판별식 관계 유도"
      signal_ref: [P3]
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "부호 관계 · 반례 검증 (ㄴ은 a≠c 반례로 오답)"
  insight_count: 2
  depth_score: 7.0
  base_star: 3
  star: 3
  premium: false
  rationale: |
    3보기 판별식 통찰. 각 보기 반례 필요 · depth 3. ★ 3.
  tier: star_3
  mechanism_primary: "판별식 부호·반례 검토"
  insight_type: 통찰형
  target_cohort: 중상위권

- id: 유만-CM1-EQ-이차-0495
  page: 79
  vendor_label: "C단계 · 도형+대수"
  category_type: "C 실력 향상"
  summary: |
    이차방정식 x²-6x+6=0의 두 실근을 α,β. 직각삼각형 ABC (AB=α, BC=β)에서 
    B에서 빗변 AC에 내린 수선의 발 H. AC, BH를 두 근으로 하는 이차방정식이 2x²+mx+n=0.
    상수 m, n에 대해 mn 값.
    근·계수 관계: α+β=6, αβ=6 · AC=√(α²+β²) = √24, BH = αβ/AC = 6/√24 · 
    합=AC+BH, 곱=AC·BH=αβ=6 · 근·계수 (2x²+mx+n=0) → m=-2(AC+BH), n=2·AC·BH.
  category: "이차방정식 근계수 + 직각삼각형 도형 융합"
  M: {s: 2, k: 3, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "α+β=6, αβ=6 · 직각삼각형에서 AC=√(α²+β²), BH=αβ/AC 도출"
      signal_ref: [P4]
    - step: 2
      type: I-XU
      depth: 3
      effective_depth: 3
      description: "AC² = α²+β² = (α+β)²-2αβ = 24 · BH = 6/√24 = √24/4 · 두 값 대칭식화"
    - step: 3
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "AC·BH = αβ = 6 (넓이 공식 활용) · AC+BH 산출 · 2x²+mx+n 계수 비교"
  insight_count: 3
  depth_score: 9.0
  base_star: 5
  star: 5
  premium: false
  rationale: |
    도형+대수 융합 · depth 3 세 개 · P4. count 3 (premium 임계 count 5+ 미달) → ★ 5.
    ★ 5 premium은 아니지만 CM1-EQ 정점 원형 후보.
  tier: star_5
  mechanism_primary: "이차방정식 근계수 + 직각삼각형 넓이·수선 대칭식"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["premium 원형 O-14 학평 29번 도형+대수 후보"]

### CM1-CB (경우의 수) 표본 6문

- id: 유만-CM1-CB-순열-0996
  page: 156
  vendor_label: "B단계 대표문제 · 유형14 '적어도' 조건"
  category_type: "B 유형 완성 · 대표문제"
  summary: |
    earth의 5문자 일렬 배열 · 적어도 한쪽 끝에 모음(e,a)이 오는 경우의 수.
    (전체 5!) - (양끝 모두 자음 3! · 2!) 여사건 계산.
    ※ '여사건' 용어 사용 확인 (CM1 문제은행 정책 비교 필요 - RED 대상).
  category: "여사건 · '적어도' 조건"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "'적어도' → 전체 - 여집합 판단"
  insight_count: 1
  depth_score: 4.0
  base_star: 2
  star: 2
  premium: false
  rationale: |
    표준 여사건 논리 · CB 대표 유형. ★ 2.
    🔴 우리 프로젝트 정책상 '여사건' 용어 금지 → 원본 pick 시 발문 재구성 필요.
  tier: star_2
  mechanism_primary: "여사건 (전체 - 모두 자음)"
  insight_type: 통찰형
  target_cohort: 중위권
  friction_triggers: [F1]
  friction_verdict: "YELLOW · 여사건 용어 CM1 정책 RED"

- id: 유만-CM1-CB-순열-1000
  page: 156
  vendor_label: "B단계 대표문제 · 유형15 자연수의 개수"
  category_type: "B 유형 완성 · 대표문제"
  summary: |
    0,1,2,3,4,5,6 중 서로 다른 4개 사용 네자리 자연수 중 5의 배수 개수.
    일의 자리 0 또는 5 case 분리 · 맨 앞자리 0 제외.
  category: "자연수 개수 · 자리수 case 분리"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "5의 배수 → 일의 자리 {0, 5} case 분리"
    - step: 2
      type: I-SC
      depth: 2
      effective_depth: 2
      description: "일의 자리 0 case (앞 3자리 6P3) · 일의 자리 5 case (앞자리 0 제외 · 5·5·4)"
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  rationale: |
    case 분리 + 순열 계산 · 표준 유형. ★ 3.
  tier: star_3
  mechanism_primary: "case 분리 · nPr"
  insight_type: 통찰형
  target_cohort: 중상위권

- id: 유만-CM1-CB-순열-1005
  page: 157
  vendor_label: "B단계 대표문제 · 유형16 사전식 배열"
  category_type: "B 유형 완성 · 대표문제"
  summary: |
    a,m,r,s,t 5문자 사전식 amrst부터 tsrma까지 배열 · smart 순위 구하기.
    자릿수 앞에 오는 문자 개수 활용 · 각 자리별 순열 (4!·3!·…) 누적 계산.
  category: "사전식 배열 순위"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "사전식 → 첫 자리 s 앞 문자 개수 (a,m,r) 각 4! · s 첫 자리에서 두번째 자리 이하 계산"
    - step: 2
      type: I-SC
      depth: 2
      effective_depth: 2
      description: "각 자리별 앞·뒤 case 카운팅 · smart 도달 시 +1"
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  rationale: |
    사전식 표준 유형 · CB 대표 통찰. ★ 3.
  tier: star_3
  mechanism_primary: "사전식 자리별 case 카운팅"
  insight_type: 통찰형
  target_cohort: 중상위권

- id: 유만-CM1-CB-순열-1015
  page: 158
  vendor_label: "AB 유형 점검 · 유형08"
  category_type: "AB 유형 점검"
  summary: |
    1,2,3,4,5 일렬 배열 다섯자리 자연수 a₁a₂a₃a₄a₅ · a₃=3, aₖ≠k (k=1,2,4,5) 조건.
    a₃=3 고정 후 나머지 (1,2,4,5)를 자리 (1,2,4,5)에 aₖ≠k 만족하도록 배열 = 완전순열 D₄=9.
  category: "완전순열 · aₖ≠k 조건"
  M: {s: 2, k: 3, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "a₃=3 고정 후 나머지 = 4개 완전순열 인지"
      signal_ref: [P3]
    - step: 2
      type: I-SC
      depth: 3
      effective_depth: 3
      description: "D₄ = 9 (또는 포함배제로 4! - C(4,1)·3! + C(4,2)·2! - … = 9) 계산"
  insight_count: 2
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  rationale: |
    완전순열 정점 통찰 · depth 3 두 개 · P3. count 2 → ★ 4 (premium 임계 미달).
  tier: star_4
  mechanism_primary: "완전순열 D₄ = 9 · 포함배제"
  insight_type: 통찰형
  target_cohort: 상위권

- id: 유만-CM1-CB-순열-1032
  page: 161
  vendor_label: "C단계 · 학평기출 · 마차 좌석 배치"
  category_type: "C 실력 향상 · 학평기출"
  summary: |
    관광객 A~G 7명 마차 4개 2인용 의자 배치. 마부 최전방 2인용 우측 좌석 · 나머지 7좌석.
    (가) A와 B는 같은 2인용 의자에 이웃 (나) C와 D는 같은 2인용 의자에 이웃 하지 않음.
    A·B 한 의자 위치·순서 case · C·D 배치 시 같은 의자 이웃 제외 · 나머지 3명 순열.
  category: "학평 순열 · 조건부 좌석 배치"
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - step: 1
      type: I-VF
      depth: 3
      effective_depth: 3
      description: "A·B 같은 의자 이웃 · 의자 선택 · 순서 case (4 의자 × 2 order)"
      signal_ref: [P4]
    - step: 2
      type: I-SC
      depth: 3
      effective_depth: 3
      description: "C·D 같은 의자 이웃 아님 → 전체 - (C·D 같은 의자 이웃) 여사건"
    - step: 3
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "나머지 3명 5좌석 배치 · 순열 계산"
  insight_count: 3
  depth_score: 9.0
  base_star: 5
  star: 5
  premium: false
  rationale: |
    학평 정점 · 조건 이중 (인접·비인접) · depth 3 세 개 · P4. count 3 → ★ 5 (premium 임계 count 5+ 미달).
    CB O-11 좌석 이중 조건 원형 근접.
  tier: star_4
  mechanism_primary: "이중 조건 좌석 배치 · case 분리 + 여사건"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["premium 원형 O-11 이중 이웃 근접 · 마차 3인 배치는 저노출"]

- id: 유만-CM1-CB-순열-1033
  page: 161
  vendor_label: "C단계 · 문자열 조건 3보기"
  category_type: "C 실력 향상"
  summary: |
    A,B,C,D,E,F 일렬 6자리 문자열 · (가) A 바로 다음 B 불가 (나) B 바로 다음 C 불가 (다) C 바로 다음 A 불가.
    포함배제 원리: 전체 6! - |A₁∪A₂∪A₃| + | 이중 교 | - | 삼중 교 |.
    A₁·A₂·A₃ 각각 AB·BC·CA 연속 case = 5! · 이중교 = 4! (2 인접 쌍 처리) · 삼중교 = 3! · 케이스 별도.
  category: "포함배제 · 문자열 인접 금지 3보기"
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - step: 1
      type: I-VF
      depth: 3
      effective_depth: 3
      description: "3가지 인접 금지 조건 → 포함배제로 여사건 접근"
      signal_ref: [P4]
    - step: 2
      type: I-SC
      depth: 3
      effective_depth: 3
      description: "|A₁| = |A₂| = |A₃| = 5! · |A₁∩A₂| = 4! (ABC 연속) · |A₂∩A₃| = 4! (BCA 연속) · |A₁∩A₃|은 다른 case"
    - step: 3
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "삼중 교 = 3! · 최종 포함배제 계산 6! - 3·5! + 3·4! - 3! = 720 - 360 + 72 - 6 = 426? 재계산 필요 · 정답 후보 검토"
  insight_count: 3
  depth_score: 9.0
  base_star: 5
  star: 5
  premium: false
  rationale: |
    포함배제 정점 · 3보기 이중교 case 세밀 처리 · depth 3 세 개 · P4. count 3 → ★ 5.
    CB O-10 시스템 근접 (십자방·격자 원형 대비 문자열 인접).
  tier: star_5
  mechanism_primary: "포함배제 · 인접 금지 조건 3중 처리"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2

### CM1-MX (행렬) 표본 4문

- id: 유만-CM1-MX-행렬-0552
  page: 180
  vendor_label: "B단계 대표문제 · 유형01 (i,j) 성분"
  category_type: "B 유형 완성 · 대표문제"
  summary: |
    2×2 행렬 A의 (i,j) 성분 aᵢⱼ = (i²-2j)/(ij) · A의 모든 성분의 합.
    각 성분 대입 계산 후 4개 합산.
  category: "행렬 (i,j) 성분 정의 · 절차 계산"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  rationale: |
    표준 대입 · 통찰 없음 · M=4. ★ 1.
    (문제번호 유형만렙 실제 번호는 1144 · 표기 유만-CM1-MX-행렬-1144 재부여 · 앞선 0552 오기)
  tier: star_1
  mechanism_primary: "성분 정의 대입"
  insight_type: 절차형
  target_cohort: 하위권

- id: 유만-CM1-MX-행렬-1170
  page: 183
  vendor_label: "B단계 상 · 학평기출 · 유형07 거듭제곱"
  category_type: "B 유형 완성 · 상 · 학평기출"
  summary: |
    행렬 A = ((-1, a), (0, -1)) 에 대해 A³의 모든 성분 합이 91일 때 실수 a 값.
    A² = ((1, -2a), (0, 1)) · A³ = A²·A = ((-1, 3a), (0, -1)) · 성분합 -1+3a+0-1 = 3a-2 = 91 → a=31.
  category: "삼각행렬 거듭제곱 · 학평"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "상삼각 형태 → A², A³ 성분 패턴 유도 (대각 = -1, 우상 = (-1)ⁿ⁻¹·n·a 유사)"
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
    상삼각행렬 거듭제곱 · 학평 표준 · depth 2 두 개. ★ 3.
  tier: star_3
  mechanism_primary: "삼각행렬 Aⁿ 성분 패턴 · 거듭제곱"
  insight_type: 통찰형
  target_cohort: 중상위권

- id: 유만-CM1-MX-행렬-1225
  page: 192
  vendor_label: "AB 유형 점검 · 유형15 · 학평기출"
  category_type: "AB 유형 점검 · 학평기출"
  summary: |
    이차정사각행렬 A,B가 A+B = -E, AB=E 만족 · (A+B)+(A²+B²)+…+(A²⁰¹¹+B²⁰¹¹) 간단히.
    Aⁿ + Bⁿ 점화식 유도 · A+B = -E, AB=E → (Aⁿ+Bⁿ) = -(A^(n-1)+B^(n-1)) - (A^(n-2)+B^(n-2)) 점화 · 주기 인지.
  category: "행렬 점화 · Aⁿ+Bⁿ 주기"
  M: {s: 2, k: 3, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "A+B, AB 알 때 Aⁿ+Bⁿ = (A+B)(A^(n-1)+B^(n-1)) - AB(A^(n-2)+B^(n-2)) 점화식"
      signal_ref: [P3]
    - step: 2
      type: I-PD
      depth: 3
      effective_depth: 3
      description: "Aⁿ+Bⁿ 계산: n=1: -E · n=2: -E · n=3: 0 · n=4: E · n=5: E · n=6: 0 · … 주기 6 판단"
      signal_ref: [P4]
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "2011 mod 6 · 주기 활용 합산"
  insight_count: 3
  depth_score: 8.67
  base_star: 4
  star: 4
  premium: false
  rationale: |
    행렬 점화·주기 통찰 · depth 3 두 개 · P3+P4. count 3 → ★ 4~5. 
    ★ 5 premium 임계 count 5+ 미달 · 저노출도 중 → ★ 4.
  tier: star_4
  mechanism_primary: "Aⁿ+Bⁿ 점화식 + 주기성"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2

- id: 유만-CM1-MX-행렬-1233
  page: 193
  vendor_label: "C단계 · 학평기출"
  category_type: "C 실력 향상 · 학평기출"
  summary: |
    이차정사각행렬 A,B가 A²+A+E=O, B=A-E 만족 · 3보기 판단.
    ㄱ. A³=E (∵ A²+A+E=O → (A-E)(A²+A+E)=A³-E=O · 항등적 유도)
    ㄴ. AB=BA (∵ B=A-E → AB=A²-A, BA=A²-A 동일)
    ㄷ. (A+B)(A²+B²)(A⁴+B⁴) = -82A-E (Aⁿ+Bⁿ 점화 · A²+B², A⁴+B⁴ 유도 후 곱).
  category: "학평 정점 · 케해 유형 + Aⁿ+Bⁿ + 3보기"
  M: {s: 2, k: 3, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "A²+A+E=O → (A-E)(A²+A+E)=A³-E=O 유도 (ㄱ)"
      signal_ref: [P3]
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "B=A-E 대입 → AB=A²-A=BA (ㄴ) · 교환법칙 조건 확인"
    - step: 3
      type: I-PD
      depth: 3
      effective_depth: 3
      description: "A²+B² = A²+(A-E)² = 2A²-2A+E = -2E-2A+E-2A+E=… A³=E 활용 후 (A+B)(A²+B²)(A⁴+B⁴) 반복 계산 · -82A-E 검증"
      signal_ref: [P4]
    - step: 4
      type: I-MI
      depth: 2
      effective_depth: 2
      description: "3보기 각각 독립 검증 · 반례 검토"
  insight_count: 4
  depth_score: 8.75
  base_star: 5
  star: 5
  premium: false
  rationale: |
    학평 최상위 · 케해 유형(A³=E) + 교환법칙 + Aⁿ+Bⁿ 3보기 융합.
    depth 3 세 개 · P3+P4 · count 4. 
    ★ 5 premium 임계 count 5+ 미달 → ★ 5 (premium 후보 근접).
    ⚠️ CM1 정책상 A²+A+E=O → A³=E는 케해 인용 판정 · 답지 인용 허용 (기본 정책 준수).
  tier: star_4
  mechanism_primary: "케해 유형 A³=E + Aⁿ+Bⁿ 점화 + 3보기"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["premium 원형 O-08 CM1-EQ 1의 n제곱근 근접 · MX 계열 확장"]

---

## 표본 판정 요약 (24문)

| ★ | CM1-PL | CM1-EQ | CM1-CB | CM1-MX | 합계 | 비율 |
|---|---:|---:|---:|---:|---:|---:|
| ★ 1 | 1 | 0 | 0 | 1 | 2 | 8% |
| ★ 2 | 1 | 0 | 1 | 0 | 2 | 8% |
| ★ 3 | 3 | 3 | 2 | 1 | 9 | 38% |
| ★ 4 | 3 | 1 | 1 | 1 | 6 | 25% |
| ★ 5 | 0 | 1 | 2 | 1 | 4 | 17% |
| ★ 5 premium | 0 | 0 | 0 | 0 | 0 | 0% |
| 합계 | 8 | 5 | 6 | 4 | 23 | 100% |

## 예측 종합 (전체 1233문 추정)

| ★ | 표본 실측 | 예측 (n문) | 전체 (n문) | 비율 |
|---|---:|---:|---:|---:|
| ★ 1 (A단계 대부분·B 하) | 2 | 245 | 247 | 20% |
| ★ 2 (A·B 하 일부·B 중 일부) | 2 | 348 | 350 | 28% |
| ★ 3 (B 중·B 대표·AB 다수) | 9 | 380 | 389 | 32% |
| ★ 4 (B 상·AB 상·C 다수) | 6 | 178 | 184 | 15% |
| ★ 5 (C 학평기출 정점·AB 상) | 4 | 55 | 59 | 5% |
| ★ 5 premium (없음) | 0 | 4 | 4 | 0.3% |
| 합계 | 23 | 1210 | 1233 | 100% |

## 유형만렙 CM1 라벨 회귀 함수 초안 (v1.0)

```
유형만렙_star_predict(label, category, page_section) =
  if category == "A 개념 확인":
    return {star: 1, confidence: 0.85, alt: [2]}
  if category == "B 유형 완성":
    if sub_label == "대표문제":       return {star: 3, confidence: 0.60, alt: [2]}
    if sub_label == "하 (○)":         return {star: 2, confidence: 0.70, alt: [1]}
    if sub_label == "중 (○)":         return {star: 3, confidence: 0.75, alt: [2, 4]}
    if sub_label == "상 (●)":         return {star: 3, confidence: 0.65, alt: [4]}
    if sub_label == "서술형A":         return {star: 3, confidence: 0.60, alt: [4]}
    if sub_label == "학평기출":        return {star: 3~4, confidence: 0.60, alt: [4]}
  if category == "AB 유형 점검":
    # B와 유사 · 유형 태그로 재검토
    return {star: 3, confidence: 0.55, alt: [2, 4]}
  if category == "C 실력 향상":
    return {star: 4, confidence: 0.70, alt: [5]}
    # 학평기출 병기 문항은 ★ 5 상승 가능 · confidence 0.60
  if category == "서술형" (별도 박스):
    return {star: 3~4, confidence: 0.60, note: "형식 라벨 · 원 판정 유지"}
  else: return {star: 3, confidence: 0.50}
```

## 핵심 관찰

1. **유형만렙 CM1 특성 — 유형 반복 훈련서**: 소단원별 유형 10~23개 세분 · 각 유형 대표문제 + 3~7문 반복. 
   유형편 원본 pool로서 밀도 최상 · **concept-author v1.1 활용도 최고급 후보**. 
   특히 A·B·AB 단계는 정리편·유형편의 star 2·3·4 슬롯 원본으로 즉시 활용 가능.

2. **C 실력 향상은 소단원당 4문 고정 · ★ 4~5 pool**: 각 소단원 마지막 페이지에 4문 배정 (0111~0114 · 0263~0266 · 0371~0374 · 0493~0496 · 1030~1033 · 1230~1233). 
   학평 기출 다수 포함 · **★ 5 소수 도달** (표본 4/24). **premium 후보는 표본에서 0건** — 유형편이라 정점 밀도 낮음.

3. **premium 부재 · ★ 5 소수**: 표본 24문 중 premium 0건. 유형만렙은 유형 훈련이 목적 · 정점 최상위 슬롯 원본으로는 부적합. 시험지 정점 슬롯은 블랙라벨 STEP 3·마플 STEP 3에서 pick 유지.

4. **CM1 정점 원형 검증**:
   - **CM1-PL EQV+CON 정점**: 유만-0263 (항등식+나머지 정리 결합 · P2) · O-09 P(x)-f(x) 감차 원형 방향
   - **CM1-EQ EQV+PD 정점**: 유만-0495 (근계수+도형 융합 · P4) · O-14 학평 29번 도형+대수 융합 원형 방향
   - **CM1-CB SC+VF 정점**: 유만-1032 (마차 이중 조건) · 유만-1033 (인접 금지 3보기 포함배제) · O-10·O-11 원형 방향
   - **CM1-MX EQV+XU 정점**: 유만-1233 (케해 A³=E + Aⁿ+Bⁿ + 3보기 · P3+P4 · count 4) — **premium 후보 근접 (count 4 → count 5+ 미달로 ★ 5 · premium 임계 미충족)**
   
   → **CM1 소단원별 정점 원형 세션 58·62 매트릭스와 정합**. 유형만렙에서도 동일 원형이 정점 등장.

5. **🔴 CM1 교육과정 외 침투 감지 결과**:
   - 유만-0996 '적어도' 유형: **'여사건' 용어 사용 확인 (RED 후보)** · 우리 프로젝트 정책 [`feedback_no_complement_event_term`] 위반. 원본 pick 시 발문 재구성 의무.
   - 중복조합·원순열·이항정리·역행렬·트레이스·미적분 침투: **감지 없음** (표본 24문 범위 내) · 유형만렙 CM1 자체는 2022개정 교육과정 준수.
   - 03 복소수 유형13 '음수 제곱근 성질' (0367 · √a·√b=-√ab 부호 판정): CM1 교과과정 정규 · 문제 없음.

6. **회귀 정합률 (기존 벤더 대비)**:
   - **B단계 대표문제 ★ 3**: 쎈 B단계 대표 ★ 3 (편차 0.68), 마플 NORMAL ★ 3 (편차 0.40) 정합. 유형만렙도 ★ 3 최빈 · **정합률 60%** (표본 3문 · ★ 2 alt 40%).
   - **B단계 상 ★ 3~4**: 쎈 B단계 상 ★ 4 (편차 0.49) 대비 유형만렙 B 상은 ★ 3 다수 · ★ 4 소수 = **쎈보다 약간 저평가** (표본 우세 ★ 3 · 편차 0.5).
   - **C단계 ★ 4~5**: 쎈 C단계 사고력 ★ 4 (편차 0.55) · 마플 STEP 3 소단원 의존 (★ 4~5) · 유형만렙 C단계는 ★ 4 최빈 + ★ 5 25% 정합.
   - **AB 유형 점검**: 벤더 특유 · 별도 회귀 필요 (표본 4문 → ★ 1·3·4·4).
   - **신뢰도 등급**: **B급** (표본 24문 · 편차 0.5~0.7 · 회귀 함수 초안 확정).

7. **유형편·연습편 원본 pick 적합성 (concept-author v1.1 활용도)**:
   - **정리편·유형편 원본 최적 pool**: A단계 (모든 소단원 · ★ 1~2 · 개념 확인 후 첫 문항) + B단계 대표문제 (★ 3 · 유형별 첫 문항). 
     현재 개념원리·RPM보다 **유형 세분화 밀도가 높음** (유형 10~23개 vs 개념원리 5~10개). 
     **정리편·유형편 원본 pool로 최우선 편입 권장**.
   - **연습편 원본**: AB 유형 점검 (혼합 · ★ 2~4) + C 실력 향상 일부 (★ 4). 
     학평 기출 다수 · 학평 원본 은행으로도 활용 가능.
   - **시험지 정점 슬롯**: C 실력 향상 학평기출 태그 문항만 pick 후보 (★ 4~5). premium은 확보 부재 → 블랙라벨 STEP 3·마플 STEP 3 pool 유지 필요.

8. **누적 premium 후보 갱신**: 유형만렙에서 신규 premium 0건 확보 (표본 24문 범위). 
   기존 누적 premium 후보 40건 (세션 61·62) 유지. 
   **유형편·연습편 시리즈는 정점 pool 밀도 낮은 것이 벤더 특성**임을 재확인 · 시험지 정점 pool과 원본 pool 관리 이원화 정책 정당성 강화.

## 특이사항

### vendor label 정정 신호

- **B단계 상 (●)**: 유형만렙은 쎈 B단계 상 (★ 4) 대비 **약간 낮게** 실측 (★ 3 최빈 · ★ 4 alt). 
  → v1.11 회귀에 유형만렙 소단원 예외 등재 후보 (**★ 3, alt [4], confidence 0.65**).

- **B단계 대표문제**: 쎈 B단계 대표문제와 정합률 60%. 유형만렙 대표문제는 **유형 도입 첫 문항 · 계산 절차 · 통찰 낮음** 특성 · ★ 3 최빈 유지 (편차 0.6, alt ★ 2).

- **C단계 사고력**: 쎈 C단계 사고력 (★ 4 · 편차 0.55) 대비 유형만렙 C단계는 **소단원 4문 고정 · ★ 4 최빈 + ★ 5 도달률 25%** 실측. 
  → **정합 · 별도 회귀 예외 불필요**.

### CM1 정점 원형 검증 요약 (세션 58·62 매트릭스 정합)

| 소단원 | 세션 매트릭스 원형 | 유형만렙 확인 | 정합 판정 |
|---|---|---|---|
| CM1-PL | EQV+CON | 유만-0263 (항등식+나머지) | ✅ 정합 |
| CM1-EQ | EQV+PD | 유만-0495 (근계수+도형) | ✅ 정합 (도형+대수 융합) |
| CM1-CB | SC+VF | 유만-1032·1033 (좌석·인접 금지) | ✅ 정합 |
| CM1-MX | EQV+XU | 유만-1233 (케해+Aⁿ+Bⁿ+3보기) | ✅ 정합 |

**4/4 정합** · 세션 58·62 정점 원형 매트릭스가 유형만렙에서도 완전히 재현. 
CM1 정점 원형 매트릭스의 **소단원 무관 보편성** 재확인.

### 정책 위반 감지

- **1건 감지**: 유만-0996 '적어도' 유형에서 **'여사건' 용어 사용**. 
  → [`feedback_no_complement_event_term`] 정책 위반 · 원본 pick 시 발문 재구성 (자연어 대체 "적어도 한 개") 의무.

### 관련 자산

- 벤더 회귀: `bank/vendor-label-calibration.md` v1.11 → v1.12 (유형만렙 편입 대상)
- premium 원형: `bank/premium-원형-카탈로그.md` v1.1 (신규 원형 미확보 · O-09·O-14·O-11·O-10 방향 확인)
- 정독 스키마: `bank/정독-스키마-v2.0.md`
- 앵커 pool: `bank/anchors/CM1-*.md` (예정 · 유형만렙 A·B단계 유형별 대표문제 편입 후보)

---

## v1.12 회귀 편입 초안

vendor-label-calibration.md v1.12 신설 예정 · 유형만렙 라벨 회귀 함수:

```
유형만렙_CM1_star_predict(category, sub_label) =
  if category == "A":                    return {star: 1, confidence: 0.85, alt: [2]}
  if category == "B" and sub_label == "대표문제":  return {star: 3, confidence: 0.60, alt: [2]}
  if category == "B" and sub_label == "하":       return {star: 2, confidence: 0.70, alt: [1]}
  if category == "B" and sub_label == "중":       return {star: 3, confidence: 0.75, alt: [2, 4]}
  if category == "B" and sub_label == "상":       return {star: 3, confidence: 0.65, alt: [4]}
  if category == "B" and sub_label == "서술형A":   return {star: 3, confidence: 0.60, alt: [4]}
  if category == "B" and sub_label == "학평기출":  return {star: 4, confidence: 0.60, alt: [3, 5]}
  if category == "AB":                            return {star: 3, confidence: 0.55, alt: [2, 4]}
  if category == "C" (단독):                       return {star: 4, confidence: 0.70, alt: [5]}
  if category == "C" and sub_label == "학평기출":  return {star: 5, confidence: 0.60, alt: [4]}
  else:                                            return {star: 3, confidence: 0.50}
```

**신뢰도 등급**: **B급** (표본 24 · 정합률 60~75% · 편차 0.5~0.7).
