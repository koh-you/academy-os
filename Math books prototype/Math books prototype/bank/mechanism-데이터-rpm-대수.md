---
name: mechanism-데이터-rpm-대수
description: RPM 대수 (2025, 개념원리) 정독 데이터 v1.0. 대수 라인 flywheel · P0 자산화. 지수·로그·지수함수·로그함수·삼각함수·삼각함수그래프·삼각함수활용·등차등비·수열의합·수학적귀납법 10 소단원 층화 표본 45문. Star 판정·M·I·X seed_id 매핑. 저작권: 시그니처 3원소 (핵심 조건·핵심 통찰·정답 형식)만 요약, 원문 전사 없음.
metadata:
  type: reference
  version: v1.0
  established: 2026-07-22
  session: 68+
  source: 유형의 완성 RPM 대수 (2025) · 개념원리 편집부
  section: 대수 전체 (지수함수와 로그함수 · 삼각함수 · 수열)
  unit_code: 대수
  sub_units:
    - 지수 (CH01, p.006~017)
    - 로그 (CH02, p.018~029)
    - 지수함수 (CH03, p.030~045)
    - 로그함수 (CH04, p.046~061)
    - 삼각함수 (CH05, p.064~075)
    - 삼각함수의 그래프 (CH06, p.076~095)
    - 삼각함수의 활용 (CH07, p.096~109)
    - 등차수열과 등비수열 (CH08, p.110~129)
    - 수열의 합 (CH09, p.130~143)
    - 수학적 귀납법 (CH10, p.144~153)
  citation_note: "RPM 대수 2025 · 학습 목적 · 저작권 준수 (원문 전사 없음 · 발문 요약 · 스캔 이미지 PDF 시각 판독)"
  extract_range: "본책 160p 전체 · 스캔 이미지 PDF · pdftoppm 150 DPI PNG 시각 판독 (data/대수/추출/rpm/samples/)"
  pages: "6~153 (본책 · 상용로그표 154~159 제외)"
  total_problems_estimated: 1100  # 10 chapters × 유형익히기 40~50 + 시험에꼭나오는 20~30 + 실력Up 5~10 = 평균 110/chapter
  sample_problems: 45
  judgment_protocol: schema.md v3.9 3층 모델 (M·I·X) + v5.1 8축 정밀 게이트
  parent_regression: bank/vendor-label-calibration.md v1.11 (RPM 신뢰도 B급 · 정합률 60% · 시험꼭나오는 관대 편향 계승)
  parent_pilot: bank/mechanism-데이터-rpm-CM1-v2.md v2.0 (CM1 재정독 · 실력Up 75% 하향 회귀)
  precedent_analogy: |
    RPM 시리즈 회귀 (CM1·CM2·CM1-v2):
    - 유형익히기 대표 = star_3 (표준 유형 · 시장 노출 高)
    - 시험에꼭나오는 (중요·일반) = star_3~4 혼재 (상한 star_4 상 · 관대 편향으로 실측 하향 다수)
    - 시험에꼭나오는 실력Up 🏆 = star_4~5 혼재 (star_4 상한 다수 · 실측 star_5 소수 · premium 부재 관측)
    본 자산에서도 유사 패턴 예상 → 실측 후 회귀 검증.
---

# RPM 대수 (2025) 정독 데이터 v1.0

## 배경 및 대수 라인 편입 근거

**대수 라인** (2026-06-18 통합, book redesign 흡수) — 현행 교육과정 개편 대비 **수학Ⅰ → "대수"** 재편 라인. 마플시너지 기반 CM1 재편집 시 참고 pool로 활용. 본 자산은 **대수 소단원별 정점 원형·star 회귀 데이터** 확보가 목적.

**RPM 대수 (2025 · 개념원리 편집부)**:
- 구성: **유형익히기 대표문제** (개념+예제) + **시험에꼭나오는 문제** (중요·일반·실력Up 🏆)
- 규모: 본책 160p (표지·차례·개념정리 페이지 포함 · 문제 페이지 약 110~120p)
- 소단원: 10개 (지수·로그·지수함수·로그함수·삼각함수·삼각함수그래프·삼각함수활용·등차등비·수열의합·수학적귀납법)
- **원본 PDF는 스캔 이미지형** — pdftotext 텍스트 레이어 무 (0~160B 추출). `pdftoppm -r 150` PNG 렌더 후 시각 판독 (짱중요·일품 CM1·CM2 선례 계승).

**샘플링 방법론**:
- 표본 45문 = 10 소단원 × 평균 4.5문
- 각 소단원 3층 (유형익히기 대표 · 시험 중요 · 실력Up) 균형 배분
- RPM CM1-v2 회귀 대비: 시험꼭나오는 실력Up 라벨 하향 편향 (75% 하향) 검증

---

## 층화 표본 설계 (45문)

| 챕터 | 소단원 | 표본 | 유형익히기 | 시험 (중요·일반) | 실력Up | 페이지 범위 |
|---|---|---:|---:|---:|---:|---|
| CH01 | 지수 | 5 | 2 | 2 | 1 | p.006~017 |
| CH02 | 로그 | 5 | 2 | 2 | 1 | p.018~029 |
| CH03 | 지수함수 | 4 | 2 | 1 | 1 | p.030~045 |
| CH04 | 로그함수 | 5 | 2 | 2 | 1 | p.046~061 |
| CH05 | 삼각함수 (기본) | 4 | 2 | 1 | 1 | p.064~075 |
| CH06 | 삼각함수의 그래프 | 5 | 2 | 2 | 1 | p.076~095 |
| CH07 | 삼각함수의 활용 (사인·코사인법칙) | 5 | 2 | 2 | 1 | p.096~109 |
| CH08 | 등차수열과 등비수열 | 5 | 2 | 2 | 1 | p.110~129 |
| CH09 | 수열의 합 (∑·계차) | 4 | 2 | 1 | 1 | p.130~143 |
| CH10 | 수학적 귀납법 | 3 | 2 | 1 | 0 | p.144~153 |

**샘플링 원칙**:
- 각 소단원 대표문제 우선 · 유형JP·실력Up 위신 문항 별도 편입
- 정점 원형 후보 (그래프+주기·복합 조건·수열 점화) 우선 표집
- v1 라벨 극단 (star_3·4 하한 · star_4·5 상한) 양단 포함

---

## Section A. CH01 지수 — 5문

### A-1. RPM-대수-CH01-#0033 (유형익히기·대표문제)

- id: RPM-대수-지수-거듭제곱근-0033
  page: 8
  vendor_label: "유형익히기 대표문제 (유형 01 거듭제곱근)"
  category_type: 유형익히기
  summary: |
    $x^n=a$의 실수 해 개수 판정 · $n$ 홀짝 + $a$ 부호 케이스 분리
  category: 거듭제곱근 (실수 해 개수)
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: 절차형
      depth: 2
      effective_depth: 2
      description: "$n$ 홀·짝 케이스 분리 → 실수해 개수 표 대조"
  insight_count: 1
  depth_score: 4.0
  base_star: 2
  star: 3
  premium: false
  rationale: |
    거듭제곱근 개수 표준 판정 유형 · 케이스 분리만 요구 · depth 2 · **star_3 확정** (base 2 + 유형익히기 라벨 위신 +1).
    시장 노출도 매우 높음 (쎈·마플·개념원리 전 벤더 등재) → §2.9 감쇠 -0.5 반영 후 net star_3.
  tier: star_3
  mechanism_primary: 거듭제곱근-실수해-개수판정
  insight_type: 절차형
  target_cohort: 중위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 A단계 대표", "마플 BASIC"]
    L5_confidence: 0.90

### A-2. RPM-대수-CH01-#0037 (유형익히기·대표문제)

- id: RPM-대수-지수-거듭제곱근계산-0037
  page: 8
  vendor_label: "유형익히기 대표문제 (유형 02 거듭제곱근의 계산)"
  category_type: 유형익히기
  summary: |
    $\sqrt[m]{\sqrt[n]{a^k}}=a^{k/(mn)}$ 변환 · 유리수 지수화 후 근 값 산출
  category: 거듭제곱근 지수 변환
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "이중근 → 유리수 지수 변환 (m·n 곱 지수)"
  insight_count: 1
  depth_score: 4.0
  base_star: 2
  star: 3
  premium: false
  rationale: |
    이중근 유리지수 변환 표준 · depth 2 · base_star 2 + 대표문제 위신 +1 = **star_3 확정**.
  tier: star_3
  mechanism_primary: 거듭제곱근-유리지수변환
  insight_type: 통찰형
  target_cohort: 중위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 A단계", "마플 BASIC"]
    L5_confidence: 0.90

### A-3. RPM-대수-CH01-#0053 (시험에꼭나오는·일반)

- id: RPM-대수-지수-이중근-0053
  page: 10
  vendor_label: "시험에꼭나오는 · 일반"
  category_type: 시험에_꼭_나오는_문제
  summary: |
    $\sqrt[3]{x+\sqrt[3]{x}}=\sqrt[3]{y}$ 꼴 정리 · 양변 세제곱 후 근 소거
  category: 이중근 정리
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "이중 세제곱근 → 양변 세제곱 후 원소 정리 · 대칭성 관찰"
  insight_count: 1
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  rationale: |
    이중 세제곱근 정리 · depth 3 통찰 1단계 · **star_3 확정** (시장 표준 유형).
    v1 예상 라벨 star_3·4 → v2 실측 star_3 (하한 · 시험꼭나오는 관대 편향 확인).
  tier: star_3
  mechanism_primary: 이중근-세제곱근-정리
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 B단계 대표", "마플 NORMAL"]
    L5_confidence: 0.80

### A-4. RPM-대수-CH01-#0100 (실력Up · 지수·변환식)

- id: RPM-대수-지수-변환식-0100
  page: 16
  vendor_label: "시험에꼭나오는 실력Up 🏆"
  category_type: 시험에_꼭_나오는_문제_실력업
  summary: |
    양수 $a$, $b$에 대해 $a^x=b^y=(ab)^z$ 조건 · $\frac{1}{z}=\frac{1}{x}+\frac{1}{y}$ 유도
  category: 지수 지수변환 (역수 합 형)
  M: {s: 3, k: 2, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "각 변수 밑 통일 로그 표현 (log 도입 없이 지수법칙만) · 대칭성"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "$k = a^x = b^y = (ab)^z$ 매개 도입 후 지수법칙 결합"
  insight_count: 2
  depth_score: 8.5
  base_star: 4
  star: 4
  premium: false
  rationale: |
    지수 매개 도입 정형 · depth 3 두 단계 · P3 대칭 신호. 실력Up 라벨 위신 유지.
    **star_4 확정** (base 4 · 시장 자주 노출로 premium 아님 · §2.9 감쇠 -0.5).
  tier: star_4
  mechanism_primary: 지수-매개도입-역수합
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 B단계 ● 상", "마플 TOUGH"]
    L5_confidence: 0.85

### A-5. RPM-대수-CH01-#0102 (실력Up · 지문형)

- id: RPM-대수-지수-실생활-0102
  page: 16
  vendor_label: "시험에꼭나오는 실력Up 🏆"
  category_type: 시험에_꼭_나오는_문제_실력업
  summary: |
    어떤 박테리아 개체수 증가 지문 · 시간당 배수 비율 지수식 대입 후 조건 산출
  category: 지문형 지수 응용
  M: {s: 3, k: 2, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "지문 → 지수식 $N=N_0\cdot a^t$ 모델링"
    - step: 2
      type: 절차형
      depth: 2
      effective_depth: 2
      description: "주어진 배수 조건 대입 후 시간·비율 산출"
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 4
  premium: false
  rationale: |
    지문형 · 모델링 통찰 depth 2 두 단계. 실력Up 위신 +1 → **star_4 확정** (지문 해석 +1 보정).
    상위층 지문 부담 반영 · 통찰 밀도 미달로 star_5 아님.
  tier: star_4
  mechanism_primary: 지수-지문형-지수모델
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 1
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 B단계", "마플 STEP 2"]
    L5_confidence: 0.75

---

## Section B. CH02 로그 — 5문

### B-1. RPM-대수-CH02-#0146 (유형익히기)

- id: RPM-대수-로그-로그정의-0146
  page: 20
  vendor_label: "유형익히기 대표문제 (유형 01 로그의 정의)"
  category_type: 유형익히기
  summary: |
    $a>0$, $a\ne1$, $N>0$일 때 $\log_a N=x \Leftrightarrow a^x=N$ 정의 대입 · 값 산출
  category: 로그 정의
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: 절차형
      depth: 1
      effective_depth: 1
      description: "정의 대입 · 지수 형태 환원"
  insight_count: 1
  depth_score: 2.0
  base_star: 1
  star: 2
  premium: false
  rationale: |
    정의 확인만 · depth 1 · base 1 + 대표문제 +1 = **star_2 확정**.
    RPM 유형익히기 최하한 · 시험지 원본 pool 부적합.
  tier: star_2
  mechanism_primary: 로그-정의-환원
  insight_type: 절차형
  target_cohort: 중하위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 A단계", "마플 BASIC"]
    L5_confidence: 0.95

### B-2. RPM-대수-CH02-#0152 (유형익히기·로그밑조건)

- id: RPM-대수-로그-밑조건-0152
  page: 20
  vendor_label: "유형익히기 대표문제 (유형 03 로그의 밑과 진수 조건)"
  category_type: 유형익히기
  summary: |
    $\log_{x-1}(-x^2+4x-3)$이 정의되기 위한 $x$ 값의 범위 · 밑 $x-1>0$·$\ne1$ + 진수 $>0$
  category: 로그 밑·진수 조건 (2차 진수)
  M: {s: 3, k: 2, a: 2, t: 3}
  M_total: 10
  insights:
    - step: 1
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: [P4]
      description: "밑 조건 (>0, ≠1) + 진수 조건 (>0) 세 부등식 결합"
    - step: 2
      type: 절차형
      depth: 2
      effective_depth: 2
      description: "2차 진수 $-x^2+4x-3>0$ 풀이 (1<x<3) 후 교집합"
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 4
  premium: false
  rationale: |
    함정 카테고리 3개 (밑 부호·밑≠1·진수 부호) · P4 신호 · 실전 오답 다발 유형. **star_4 승격** (유형익히기 라벨이지만 함정 밀도 카드로 base_star +1).
  tier: star_4
  mechanism_primary: 로그-밑진수조건-2차
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 B단계 대표", "마플 NORMAL"]
    L5_confidence: 0.85

### B-3. RPM-대수-CH02-#0163 (시험·중요)

- id: RPM-대수-로그-여러가지성질-0163
  page: 22
  vendor_label: "시험에꼭나오는 · 중요★"
  category_type: 시험에_꼭_나오는_문제_중요
  summary: |
    $\log_a b + \log_b a$ 대칭 형 · $t = \log_a b$ 치환 후 산술기하 응용 (교과 CM2 정규 도구, 대수에서 자유 활용)
  category: 로그 밑변환 (대칭 형)
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "$\log_a b · \log_b a = 1$ 활용 후 $t+1/t$ 대칭꼴 변환"
    - step: 2
      type: I-XU
      depth: 2
      effective_depth: 2
      description: "산술기하평균 (또는 t 부호 판정) 적용 후 최소값"
  insight_count: 2
  depth_score: 7.0
  base_star: 3
  star: 4
  premium: false
  rationale: |
    로그 대칭 + 산술기하 결합 · depth 3+2. **star_4 확정** (base 3 + 시험중요 위신 +1).
    산술기하는 CM2 §집합과명제 정규 (schema.md 관용 · CM1 침투 금지 대상 아님).
  tier: star_4
  mechanism_primary: 로그-대칭-산술기하
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 B단계 ● 상", "마플 TOUGH"]
    L5_confidence: 0.85

### B-4. RPM-대수-CH02-#0179 (시험·일반·상용로그)

- id: RPM-대수-로그-상용로그-0179
  page: 24
  vendor_label: "시험에꼭나오는 · 일반 (상용로그)"
  category_type: 시험에_꼭_나오는_문제
  summary: |
    $\log 2=0.3010$, $\log 3=0.4771$ 이용 · $\log N$ 값 계산 · $N$ 자릿수 판정
  category: 상용로그 자릿수·소수
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "$\log N$ 정수부 $+1 =$ 자릿수 · 상용로그 표 정보 결합"
  insight_count: 1
  depth_score: 4.0
  base_star: 2
  star: 3
  premium: false
  rationale: |
    상용로그 표준 자릿수 유형 · depth 2 · base 2 + 시험일반 위신 +1 = **star_3 확정**.
    시장 필수 유형 (모든 벤더 등재) · 시험지 star_3 pool 적합.
  tier: star_3
  mechanism_primary: 상용로그-자릿수
  insight_type: 통찰형
  target_cohort: 중위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 B단계 대표", "마플 NORMAL"]
    L5_confidence: 0.90

### B-5. RPM-대수-CH02-#0183 (실력Up · 상용로그 지문)

- id: RPM-대수-로그-지진지문-0183
  page: 24
  vendor_label: "시험에꼭나오는 실력Up 🏆"
  category_type: 시험에_꼭_나오는_문제_실력업
  summary: |
    지진 매그니튜드 $M$과 에너지 $E$ 관계 · $\log E = c + kM$ 지문 · 두 지진 에너지비 산출
  category: 상용로그 지문형 (에너지·규모)
  M: {s: 3, k: 2, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "지문 → 로그 관계식 모델링"
    - step: 2
      type: 절차형
      depth: 2
      effective_depth: 2
      description: "두 규모 차이 대입 후 지수·상용로그 계산"
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 4
  premium: false
  rationale: |
    지문형 상용로그 · depth 2+2 · 실력Up 위신 · **star_4 확정**.
    실력Up 라벨 그대로 매핑 (v1 예상 star_4·5 → v2 star_4 하한 · 통찰 밀도 star_5 미달).
  tier: star_4
  mechanism_primary: 로그-지문-매그니튜드
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 1
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 B단계 ● 상", "마플 STEP 2"]
    L5_confidence: 0.75

---

## Section C. CH03 지수함수 — 4문

### C-1. RPM-대수-CH03-#0240 (유형익히기·지수함수정의)

- id: RPM-대수-지수함수-정의-0240
  page: 32
  vendor_label: "유형익히기 대표문제 (유형 01 지수함수의 정의)"
  category_type: 유형익히기
  summary: |
    $y=(a^2-2a+2)^x$이 지수함수가 되기 위한 조건 · 밑 $>0, \ne1$ 부등식 풀이
  category: 지수함수 정의 (밑 조건)
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "밑 $>0, \ne1$ 두 조건 결합 · 2차식 처리"
  insight_count: 1
  depth_score: 4.0
  base_star: 2
  star: 3
  premium: false
  rationale: |
    지수함수 밑 조건 표준 · 함정 카드 2개 (밑>0, ≠1) · base 2 + 대표 +1 = **star_3 확정**.
  tier: star_3
  mechanism_primary: 지수함수-정의-밑조건
  insight_type: 절차형
  target_cohort: 중위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 A단계·B단계", "마플 BASIC·NORMAL"]
    L5_confidence: 0.90

### C-2. RPM-대수-CH03-#0257 (유형익히기·최대최소)

- id: RPM-대수-지수함수-최대최소-0257
  page: 34
  vendor_label: "유형익히기 대표문제 (유형 06 지수함수의 최대·최소·치환활용)"
  category_type: 유형익히기
  summary: |
    $y=(1/2)^{x^2+2x-1}$의 최댓·최솟값 · 지수 부분을 완전제곱 후 밑 $<1$ 감소함수 판정
  category: 지수함수 최대·최소 (완전제곱 치환)
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "지수 부분 완전제곱 · 밑 <1 → 감소 함수 역판정 (최대·최소 뒤바뀜)"
  insight_count: 1
  depth_score: 5.0
  base_star: 3
  star: 4
  premium: false
  rationale: |
    지수함수 최대·최소 표준 정점 유형 · depth 3 P3 신호 + 함정 (밑<1 반전). **star_4 확정** (base 3 + 유형JP 위신 +1).
  tier: star_4
  mechanism_primary: 지수함수-최대최소-완전제곱치환
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 B단계 ● 상", "마플 TOUGH"]
    L5_confidence: 0.85

### C-3. RPM-대수-CH03-#0290 (시험·지수방정식)

- id: RPM-대수-지수함수-지수방정식-0290
  page: 38
  vendor_label: "시험에꼭나오는 · 중요★"
  category_type: 시험에_꼭_나오는_문제_중요
  summary: |
    $4^x-3\cdot 2^{x+1}+8=0$ · $t=2^x$ 치환 후 2차방정식 풀이 · $x$ 값 합 산출
  category: 지수방정식 (치환)
  M: {s: 3, k: 3, a: 2, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "$t=2^x$ 치환 · 지수 → 2차방정식 환원"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "$t>0$ 조건 확인 후 $x=\log_2 t$ 역환원 · 합 산출"
  insight_count: 2
  depth_score: 7.0
  base_star: 3
  star: 4
  premium: false
  rationale: |
    지수방정식 치환 정형 · depth 3+2 · $t>0$ 함정. **star_4 확정** (base 3 + 시험중요 +1).
    RPM CM1-v2 회귀 계승 (시험중요 상한 star_4).
  tier: star_4
  mechanism_primary: 지수방정식-치환-2차
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 B단계 ● 상", "마플 TOUGH"]
    L5_confidence: 0.90

### C-4. RPM-대수-CH03-#0305 (실력Up · 지수함수 실생활)

- id: RPM-대수-지수함수-실생활-0305
  page: 40
  vendor_label: "시험에꼭나오는 실력Up 🏆"
  category_type: 시험에_꼭_나오는_문제_실력업
  summary: |
    도시 A·B 인구 지수 증가 지문 · 두 도시 인구 비율 시점 조건 · 지수·로그 결합
  category: 지수함수 지문·인구모델
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - step: 1
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "두 지수 모델 결합 · 비율 조건 → 지수 방정식"
    - step: 2
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "양변 로그 · 시간 $t$에 대해 해 도출"
  insight_count: 2
  depth_score: 8.5
  base_star: 4
  star: 4
  premium: false
  rationale: |
    지수·로그 결합 지문 · depth 3+3 · 실력Up 위신 유지. **star_4 확정** (통찰 카드 2 · premium 5+ 조건 미달).
    v1 예상 star_4·5 → v2 star_4 (상한 유지) · CM1-v2 회귀 정합.
  tier: star_4
  mechanism_primary: 지수-지문-비율모델
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 1
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 C단계 사고력", "마플 STEP 2·3"]
    L5_confidence: 0.75

---

## Section D. CH04 로그함수 — 5문

### D-1. RPM-대수-CH04-#0370 (유형익히기·그래프)

- id: RPM-대수-로그함수-그래프-0370
  page: 50
  vendor_label: "유형익히기 대표문제 (유형 06 로그함수 그래프의 활용)"
  category_type: 유형익히기
  summary: |
    두 로그함수 $y=\log_2 x$, $y=\log_3 x$ 그래프 위 점 조건 · 좌표 산출
  category: 로그함수 그래프 (좌표)
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "두 로그 그래프 좌표 조건 대입 · 방정식 도출"
  insight_count: 1
  depth_score: 4.0
  base_star: 2
  star: 3
  premium: false
  rationale: |
    로그 그래프 좌표 표준 유형 · depth 2 · base 2 + 유형익히기 +1 = **star_3 확정**.
  tier: star_3
  mechanism_primary: 로그함수-그래프-좌표
  insight_type: 통찰형
  target_cohort: 중위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 B단계 대표", "마플 NORMAL"]
    L5_confidence: 0.85

### D-2. RPM-대수-CH04-#0375 (유형익히기·로그그래프 사각형)

- id: RPM-대수-로그함수-사각형넓이-0375
  page: 50
  vendor_label: "유형익히기 대표문제 (유형 06 로그함수 그래프 사각형)"
  category_type: 유형익히기
  summary: |
    $y=\log_a x$와 $y=\log_a(x+k)$ 그래프 위 네 점으로 만든 사각형 넓이 최대 조건
  category: 로그함수 그래프 사각형
  M: {s: 3, k: 2, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "두 로그 그래프 위 대응점 → 사각형 좌표 유도"
    - step: 2
      type: I-XU
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "넓이 함수 $f(x)$ 정의 후 미분 없이 산술기하 최댓값 (CM2 §집합과명제 도구)"
  insight_count: 2
  depth_score: 8.5
  base_star: 4
  star: 4
  premium: false
  rationale: |
    로그 그래프 사각형 최대 · depth 3+3 · P3 신호. **star_4 확정** (유형JP 위신 · premium 5+ 카드 미달).
    산술기하 대수 라인 도구 사용 무 (CM2 정규 도구 · 대수 라인은 자연스러운 확장으로 허용).
  tier: star_4
  mechanism_primary: 로그함수-그래프-사각형-산술기하
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 1
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 B단계 ● 상", "마플 TOUGH"]
    L5_confidence: 0.80

### D-3. RPM-대수-CH04-#0389 (시험·로그방정식)

- id: RPM-대수-로그함수-로그방정식-0389
  page: 52
  vendor_label: "시험에꼭나오는 · 중요★"
  category_type: 시험에_꼭_나오는_문제_중요
  summary: |
    $\log_2 x - \log_2 (x+1) = \log_2 k$ · 진수 조건 확인 후 해 유일 조건 $k$ 범위
  category: 로그방정식 (해의 조건)
  M: {s: 3, k: 2, a: 3, t: 3}
  M_total: 11
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "로그 밑변환 통일 후 $x/(x+1)=k$ 정리"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "진수 조건 $x>0, x+1>0$ 결합 · $k$ 범위 유일해 조건"
  insight_count: 2
  depth_score: 8.5
  base_star: 4
  star: 4
  premium: false
  rationale: |
    로그방정식 해 유일 조건 · 함정 카드 3개 (진수 두 개+분수 도출) · **star_4 확정**.
    v1 예상 star_3·4 → v2 star_4 상한 유지 (함정 밀도 P4).
  tier: star_4
  mechanism_primary: 로그방정식-해조건-진수
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 C단계 사고력", "마플 STEP 2"]
    L5_confidence: 0.85

### D-4. RPM-대수-CH04-#0433 (실력Up · 로그+연립·복합조건)

- id: RPM-대수-로그함수-복합조건-0433
  page: 58
  vendor_label: "시험에꼭나오는 실력Up 🏆"
  category_type: 시험에_꼭_나오는_문제_실력업
  summary: |
    2차 이하 다항 $f(x)$가 $\log_2 f(x) = \log_2 x + \log_2 (a-x)$ 만족 · $a$ 값 조건 → 그래프 활용
  category: 로그방정식 (그래프 결합)
  M: {s: 4, k: 3, a: 3, t: 2}
  M_total: 12
  insights:
    - step: 1
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "로그 성질 → $f(x) = x(a-x)$ 유도 · 정의역 $0<x<a$ 함정"
    - step: 2
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "포물선 $f(x)=x(a-x)$ 그래프 조건 (정점·근)에서 $a$ 판정"
    - step: 3
      type: I-XU
      depth: 2
      effective_depth: 2
      description: "case 분리 후 조건 부합 $a$ 값 열거"
  insight_count: 3
  depth_score: 8.7
  base_star: 4
  star: 5
  premium: false
  rationale: |
    로그·다항 결합 · depth 3 두 단계 + case · 실력Up 위신. **star_5 승격** (통찰 카드 3 + P4 + case).
    premium 조건 (5+ 통찰 카드) 미달 → premium 아님.
    v1 예상 star_4·5 → v2 **star_5 상한** (실측 소수 상위 문항).
  tier: star_5
  mechanism_primary: 로그-다항결합-정의역제약
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 C단계 사고력", "마플 STEP 3 후보"]
    L5_confidence: 0.75

### D-5. RPM-대수-CH04-#0442 (실력Up · 로그부등식)

- id: RPM-대수-로그함수-부등식-0442
  page: 60
  vendor_label: "시험에꼭나오는 실력Up 🏆"
  category_type: 시험에_꼭_나오는_문제_실력업
  summary: |
    $\log_2(x-1)(x-11) \le 2$ 부등식 · 진수 조건 후 2차 부등식 풀이
  category: 로그부등식
  M: {s: 3, k: 2, a: 2, t: 3}
  M_total: 10
  insights:
    - step: 1
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "진수 조건 (x-1)(x-11)>0 · 로그 부등식 → 2차 부등식"
    - step: 2
      type: 절차형
      depth: 2
      effective_depth: 2
      description: "$x^2-12x+11 \le 4$ 정리 후 근 산출 · 교집합"
  insight_count: 2
  depth_score: 7.0
  base_star: 3
  star: 4
  premium: false
  rationale: |
    로그부등식 표준 유형 · depth 3+2 · 함정 3개 (진수 2개+로그 밑) · **star_4 확정**.
    실력Up 라벨이지만 통찰 밀도 star_5 미달 (자산화 감쇠 -0.5) · **v1 예상 star_4·5 하한 매칭**.
  tier: star_4
  mechanism_primary: 로그부등식-진수-2차
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 B단계 ● 상", "마플 STEP 2"]
    L5_confidence: 0.80

---

## Section E. CH05 삼각함수 (기본) — 4문

### E-1. RPM-대수-CH05-#0482 (유형익히기·일반각)

- id: RPM-대수-삼각함수-일반각-0482
  page: 66
  vendor_label: "유형익히기 대표문제 (유형 01 일반각)"
  category_type: 유형익히기
  summary: |
    각 $\theta$가 3사분면 → $\theta/2$ 사분면 판정 · 일반각 표현 활용
  category: 일반각·사분면
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "일반각 $\theta = 360°n + 사분면 범위$ · $\theta/2$ 범위 case 분리"
  insight_count: 1
  depth_score: 4.0
  base_star: 2
  star: 3
  premium: false
  rationale: |
    삼각함수 사분면 case 분리 표준 · depth 2 · base 2 + 유형익히기 +1 = **star_3 확정**.
  tier: star_3
  mechanism_primary: 삼각함수-일반각-사분면
  insight_type: 통찰형
  target_cohort: 중위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 A단계", "마플 BASIC"]
    L5_confidence: 0.90

### E-2. RPM-대수-CH05-#0499 (유형익히기·삼각함수 정의)

- id: RPM-대수-삼각함수-정의-0499
  page: 68
  vendor_label: "유형익히기 대표문제 (유형 04 삼각함수의 정의)"
  category_type: 유형익히기
  summary: |
    점 $P(3,-4)$이 원점 O를 시점으로 하는 동경 위 · $\sin\theta$, $\cos\theta$, $\tan\theta$ 값 산출
  category: 삼각함수 정의
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: 절차형
      depth: 1
      effective_depth: 1
      description: "$r=\sqrt{x^2+y^2}$ 계산 후 정의 대입"
  insight_count: 1
  depth_score: 2.0
  base_star: 1
  star: 2
  premium: false
  rationale: |
    삼각함수 정의 최기본 유형 · depth 1 · base 1 + 대표 +1 = **star_2 확정**.
    시험지 원본 pool 부적합.
  tier: star_2
  mechanism_primary: 삼각함수-정의
  insight_type: 절차형
  target_cohort: 중하위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 A단계", "마플 BASIC"]
    L5_confidence: 0.95

### E-3. RPM-대수-CH05-#0530 (시험·실력Up·이차식 근과 삼각비)

- id: RPM-대수-삼각함수-이차식근-0530
  page: 72
  vendor_label: "시험에꼭나오는 실력Up 🏆"
  category_type: 시험에_꼭_나오는_문제_실력업
  summary: |
    이차방정식 $ax^2+bx+c=0$의 두 근 $\sin\theta$, $\cos\theta$ · 계수 관계 + $\sin^2\theta+\cos^2\theta=1$ 결합
  category: 근과계수 + 삼각비 결합
  M: {s: 3, k: 3, a: 2, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "근과계수 → $\sin\theta+\cos\theta = -b/a$, $\sin\theta \cdot \cos\theta = c/a$"
    - step: 2
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "$(sin+cos)^2 = 1 + 2\sin\cos$ 항등식 결합 후 계수 관계 도출"
  insight_count: 2
  depth_score: 8.5
  base_star: 4
  star: 4
  premium: false
  rationale: |
    근과계수 + 삼각항등식 결합 정점 원형 · depth 3+3 · P4 신호. **star_4 확정**.
    실력Up 위신 유지 · premium 5+ 카드 미달.
  tier: star_4
  mechanism_primary: 삼각함수-근과계수-항등식
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 1
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 B단계 ● 상", "마플 TOUGH"]
    L5_confidence: 0.85

### E-4. RPM-대수-CH05-#0543 (시험·중요·삼각비 대칭)

- id: RPM-대수-삼각함수-대칭식-0543
  page: 74
  vendor_label: "시험에꼭나오는 실력Up 🏆"
  category_type: 시험에_꼭_나오는_문제_실력업
  summary: |
    $\sin\theta - \cos\theta = 1/\sqrt{5}$ · $\sin^3\theta - \cos^3\theta$ 값 산출 · 세제곱합 항등식
  category: 삼각함수 대칭식 (세제곱합)
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "$a^3-b^3 = (a-b)^3+3ab(a-b)$ 세제곱합 변형 · 대칭 항등식"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "$(sin-cos)^2$ 전개 → $\sin\cos$ 값 · 항등식 결합"
  insight_count: 2
  depth_score: 8.5
  base_star: 4
  star: 4
  premium: false
  rationale: |
    삼각함수 대칭식 · 세제곱합 결합 · depth 3+2 · P3 신호. **star_4 확정**.
    CM1 다항식 대칭식 (RPM CM1-v2 A-2 유사) 삼각버전 · v1 예상 star_4·5 → v2 star_4 (star_5 미달).
  tier: star_4
  mechanism_primary: 삼각함수-대칭식-세제곱합
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 B단계 ● 상", "마플 TOUGH"]
    L5_confidence: 0.85

---

## Section F. CH06 삼각함수의 그래프 — 5문

### F-1. RPM-대수-CH06-#0580 (유형익히기·주기)

- id: RPM-대수-삼각그래프-주기-0580
  page: 78
  vendor_label: "유형익히기 대표문제 (유형 01 주기)"
  category_type: 유형익히기
  summary: |
    $y = a\sin(bx+c)+d$ 함수 · $a$, $b$, $c$, $d$ 판정 · 주기 $= 2\pi/|b|$
  category: 삼각함수 그래프 판정 (주기·진폭)
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "그래프 최대·최소 → 진폭 $a$·평행이동 $d$ 판정 · 주기 → $b$"
  insight_count: 1
  depth_score: 4.0
  base_star: 2
  star: 3
  premium: false
  rationale: |
    삼각함수 그래프 계수 판정 표준 · depth 2 · base 2 + 대표 +1 = **star_3 확정**.
  tier: star_3
  mechanism_primary: 삼각그래프-계수판정
  insight_type: 통찰형
  target_cohort: 중위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 B단계 대표", "마플 NORMAL"]
    L5_confidence: 0.90

### F-2. RPM-대수-CH06-#0589 (유형익히기·최대최소)

- id: RPM-대수-삼각그래프-최대최소-0589
  page: 78
  vendor_label: "유형익히기 대표문제 (유형 02 삼각함수 최댓·최솟값)"
  category_type: 유형익히기
  summary: |
    $y = a\sin(2x + \pi/6) + b$ · 최댓값 5·최솟값 -3 → $a$, $b$ 값 (단, $a>0$)
  category: 삼각함수 최댓·최솟값 (계수결정)
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "최댓·최솟값 → $a+b$, $-a+b$ 연립 (단 $a>0$ 함정)"
  insight_count: 1
  depth_score: 4.0
  base_star: 2
  star: 3
  premium: false
  rationale: |
    삼각함수 계수 결정 표준 · depth 2 · base 2 + 유형익히기 +1 = **star_3 확정**.
  tier: star_3
  mechanism_primary: 삼각그래프-계수결정
  insight_type: 통찰형
  target_cohort: 중위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 B단계 대표", "마플 NORMAL"]
    L5_confidence: 0.90

### F-3. RPM-대수-CH06-#0600 (시험·중요·주기 결합)

- id: RPM-대수-삼각그래프-주기결합-0600
  page: 80
  vendor_label: "시험에꼭나오는 · 중요★"
  category_type: 시험에_꼭_나오는_문제_중요
  summary: |
    $y = a\cos(\pi x/b) + c$ · 그래프 조건 (한 주기 내 특정 값) · $a$, $b$, $c$ 결정
  category: 삼각함수 그래프 결합 조건
  M: {s: 3, k: 2, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "주기 결정 → $b$ 유도 · 특정 점 대입 후 $a$, $c$ 연립"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "여러 조건 동시 결합 · 조건 부호 함정"
  insight_count: 2
  depth_score: 7.0
  base_star: 3
  star: 4
  premium: false
  rationale: |
    삼각함수 그래프 복합 조건 · depth 3+2 · 시험중요 위신. **star_4 확정** (v1 예상 star_3·4 상한).
  tier: star_4
  mechanism_primary: 삼각그래프-복합조건
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 B단계 ● 상", "마플 TOUGH"]
    L5_confidence: 0.85

### F-4. RPM-대수-CH06-#0672 (시험·실력Up · 삼각방정식 그래프 결합)

- id: RPM-대수-삼각방정식-그래프결합-0672
  page: 90
  vendor_label: "시험에꼭나오는 실력Up 🏆"
  category_type: 시험에_꼭_나오는_문제_실력업
  summary: |
    함수 $f(x) = a\sin bx + c$ 그래프와 직선 $y=k$ 교점 · 실근 개수 조건 $k$ 범위
  category: 삼각방정식 (그래프 교점)
  M: {s: 3, k: 2, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "삼각방정식 → 그래프 vs 수평선 교점 개수 문제로 환원"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "한 주기 내 교점 count · 전 범위 확장 · $k$ 임계값 case 분리"
  insight_count: 2
  depth_score: 8.5
  base_star: 4
  star: 5
  premium: false
  rationale: |
    삼각방정식 그래프 교점 정점 원형 · depth 3+3 · P4 · 실력Up 위신. **star_5 승격** (case 분리 임계 + P4 + 그래프 사고).
    premium 5+ 카드 미달 → premium 아님.
    v1 예상 star_4·5 → v2 **star_5 상한** (실측 상위).
  tier: star_5
  mechanism_primary: 삼각방정식-그래프-교점개수
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 C단계 사고력", "마플 STEP 3 후보"]
    L5_confidence: 0.75

### F-5. RPM-대수-CH06-#0679 (실력Up · 삼각부등식)

- id: RPM-대수-삼각부등식-그래프-0679
  page: 90
  vendor_label: "시험에꼭나오는 실력Up 🏆"
  category_type: 시험에_꼭_나오는_문제_실력업
  summary: |
    $2\sin(2x-\pi/3) \ge 1$ 부등식 · 한 주기 내 해 후 전 범위 확장
  category: 삼각부등식 (일반해)
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "$\sin$ 그래프 vs $y=1/2$ 교점 → 한 주기 내 부등식 해 구간"
    - step: 2
      type: 절차형
      depth: 2
      effective_depth: 2
      description: "치환 $t = 2x-\pi/3$ · $x$ 범위 산출"
  insight_count: 2
  depth_score: 7.0
  base_star: 3
  star: 4
  premium: false
  rationale: |
    삼각부등식 일반해 · depth 3+2 · 실력Up 위신 · **star_4 확정** (실측 하한 · premium 미달).
  tier: star_4
  mechanism_primary: 삼각부등식-일반해-치환
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 B단계 ● 상", "마플 STEP 2"]
    L5_confidence: 0.85

---

## Section G. CH07 삼각함수의 활용 (사인·코사인법칙) — 5문

### G-1. RPM-대수-CH07-#0749 (유형익히기·사인법칙)

- id: RPM-대수-삼각활용-사인법칙-0749
  page: 100
  vendor_label: "유형익히기 대표문제 (유형 01 사인법칙)"
  category_type: 유형익히기
  summary: |
    삼각형 $ABC$에서 $A=60°$, $B=45°$, $a=6$ 조건 · 사인법칙으로 $b$ 산출
  category: 사인법칙 기본
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: 절차형
      depth: 1
      effective_depth: 1
      description: "$a/\sin A = b/\sin B$ 대입 · 계산"
  insight_count: 1
  depth_score: 2.0
  base_star: 1
  star: 2
  premium: false
  rationale: |
    사인법칙 최기본 · depth 1 · base 1 + 대표 +1 = **star_2 확정**.
    시험지 원본 pool 부적합.
  tier: star_2
  mechanism_primary: 사인법칙-기본
  insight_type: 절차형
  target_cohort: 중하위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 A단계", "마플 BASIC"]
    L5_confidence: 0.95

### G-2. RPM-대수-CH07-#0752 (유형익히기·코사인법칙)

- id: RPM-대수-삼각활용-코사인법칙-0752
  page: 100
  vendor_label: "유형익히기 대표문제 (유형 02 코사인법칙)"
  category_type: 유형익히기
  summary: |
    삼각형 $ABC$에서 세 변 길이 · 코사인법칙 · $\cos C$ 값 산출
  category: 코사인법칙 (역방향 $\cos$ 산출)
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "$c^2 = a^2+b^2 -2ab\cos C$ 역풀이 · $\cos C$ 산출"
  insight_count: 1
  depth_score: 4.0
  base_star: 2
  star: 3
  premium: false
  rationale: |
    코사인법칙 역풀이 · depth 2 · base 2 + 대표 +1 = **star_3 확정**.
  tier: star_3
  mechanism_primary: 코사인법칙-역풀이
  insight_type: 통찰형
  target_cohort: 중위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 A단계·B단계", "마플 BASIC·NORMAL"]
    L5_confidence: 0.90

### G-3. RPM-대수-CH07-#0788 (시험·중요·삼각형 넓이)

- id: RPM-대수-삼각활용-사각형넓이-0788
  page: 106
  vendor_label: "시험에꼭나오는 · 중요★"
  category_type: 시험에_꼭_나오는_문제_중요
  summary: |
    사각형 $ABCD$ 대각선 $AC$, $BD$ 길이·이루는 각 · $S = \frac{1}{2}pq\sin\theta$ 넓이 공식
  category: 사각형 넓이 (대각선 공식)
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "사각형 대각선 넓이 공식 적용"
  insight_count: 1
  depth_score: 4.0
  base_star: 2
  star: 3
  premium: false
  rationale: |
    사각형 대각선 넓이 표준 · depth 2 · base 2 + 시험중요 +1 = **star_3 확정**.
    v1 예상 star_3·4 하한 매칭 (시험꼭나오는 관대 편향 회귀).
  tier: star_3
  mechanism_primary: 삼각활용-사각형넓이
  insight_type: 통찰형
  target_cohort: 중위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 B단계 대표", "마플 NORMAL"]
    L5_confidence: 0.85

### G-4. RPM-대수-CH07-#0791 (시험·중요·복합삼각형)

- id: RPM-대수-삼각활용-복합삼각형-0791
  page: 106
  vendor_label: "시험에꼭나오는 · 중요★"
  category_type: 시험에_꼭_나오는_문제_중요
  summary: |
    사각형 $ABCD$ · $\overline{AB}=\overline{BC}=5$, $\overline{CD}=6$, $A=B=90°$ · $\overline{AD}$ 값
  category: 사각형 · 특수각·피타고라스 결합
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "사각형 두 직각 → 사다리꼴/직교좌표 배치 후 대각선 유도"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "피타고라스 또는 코사인법칙 · $AD$ 산출"
  insight_count: 2
  depth_score: 7.0
  base_star: 3
  star: 4
  premium: false
  rationale: |
    사각형 복합 조건 · 시각화+법칙 결합 · depth 3+2 · P4. **star_4 확정** (시험중요 상한).
    v1 예상 star_3·4 → v2 star_4 상한.
  tier: star_4
  mechanism_primary: 삼각활용-사각형-복합조건
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 1
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 B단계 ● 상", "마플 TOUGH"]
    L5_confidence: 0.85

### G-5. RPM-대수-CH07-#0793 (실력Up · 원+사각형)

- id: RPM-대수-삼각활용-원사각형-0793
  page: 106
  vendor_label: "시험에꼭나오는 실력Up 🏆"
  category_type: 시험에_꼭_나오는_문제_실력업
  summary: |
    반지름 $R$인 원에 내접하는 사각형 · 대각·변 길이 조건 · $R$ 산출 (원주각/사인법칙 결합)
  category: 원 내접사각형 (사인법칙 결합)
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - step: 1
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "원 내접사각형 대각합 $180°$ + 사인법칙 결합"
    - step: 2
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "대각·현·반지름 관계 유도 후 $R$ 산출"
    - step: 3
      type: I-XU
      depth: 2
      effective_depth: 2
      description: "case 확인 · 형상 유일성 검증"
  insight_count: 3
  depth_score: 8.7
  base_star: 4
  star: 5
  premium: false
  rationale: |
    원+사각형 정점 원형 · depth 3 두 단계 + case · **star_5 승격** (통찰 카드 3 + P4).
    v1 예상 star_4·5 → v2 star_5 상한 (실측 상위 · premium 5+ 미달).
  tier: star_5
  mechanism_primary: 삼각활용-원내접사각형-사인법칙
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 C단계 사고력", "마플 STEP 3 후보", "블랙라벨 STEP 2 후보"]
    L5_confidence: 0.75

---

## Section H. CH08 등차수열과 등비수열 — 5문

### H-1. RPM-대수-CH08-#0824 (유형익히기·등차수열 일반항)

- id: RPM-대수-수열-등차일반항-0824
  page: 112
  vendor_label: "유형익히기 대표문제 (유형 01 등차수열의 일반항)"
  category_type: 유형익히기
  summary: |
    수열 $\{a_n\}$에서 $a_2=5$, $a_5=-13$ · 일반항 산출
  category: 등차수열 일반항
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "공차 $d$ 유도 · 일반항 $a_n = a_1 + (n-1)d$ 대입"
  insight_count: 1
  depth_score: 4.0
  base_star: 2
  star: 3
  premium: false
  rationale: |
    등차수열 일반항 표준 · depth 2 · base 2 + 대표 +1 = **star_3 확정**.
  tier: star_3
  mechanism_primary: 등차수열-일반항
  insight_type: 절차형
  target_cohort: 중위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 A단계·B단계", "마플 BASIC·NORMAL"]
    L5_confidence: 0.95

### H-2. RPM-대수-CH08-#0830 (유형익히기·등차중항)

- id: RPM-대수-수열-등차중항-0830
  page: 112
  vendor_label: "유형익히기 대표문제 (유형 02 등차중항)"
  category_type: 유형익히기
  summary: |
    세 수 $a$, $b$, $c$가 이 순서로 등차수열 · $2b = a+c$ 관계 · 특정 조건 만족 $b$ 값
  category: 등차중항
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "$2b = a+c$ 등차중항 + 조건식 연립"
  insight_count: 1
  depth_score: 4.0
  base_star: 2
  star: 3
  premium: false
  rationale: |
    등차중항 표준 · depth 2 · base 2 + 대표 +1 = **star_3 확정**.
  tier: star_3
  mechanism_primary: 등차수열-등차중항
  insight_type: 통찰형
  target_cohort: 중위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 B단계 대표", "마플 NORMAL"]
    L5_confidence: 0.90

### H-3. RPM-대수-CH08-#0931 (시험·중요·등비수열 응용)

- id: RPM-대수-수열-등비응용-0931
  page: 126
  vendor_label: "시험에꼭나오는 · 중요★"
  category_type: 시험에_꼭_나오는_문제_중요
  summary: |
    3개 수 $a$, $b$, $c$가 이 순서로 등비수열 · 조건 만족 세 수의 곱·합 산출
  category: 등비수열 (세 수 조건)
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "등비중항 $b^2 = ac$ + 조건식 연립"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "케이스 분리 (공비 부호) · 유일 해 판정"
  insight_count: 2
  depth_score: 7.0
  base_star: 3
  star: 4
  premium: false
  rationale: |
    등비수열 세 수 · depth 3+2 · **star_4 확정** (시험중요 상한).
    v1 예상 star_3·4 → v2 star_4 상한.
  tier: star_4
  mechanism_primary: 등비수열-세수-조건
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 B단계 ● 상", "마플 TOUGH"]
    L5_confidence: 0.85

### H-4. RPM-대수-CH08-#0946 (실력Up · 정삼각형 반복)

- id: RPM-대수-수열-도형반복-0946
  page: 128
  vendor_label: "시험에꼭나오는 실력Up 🏆"
  category_type: 시험에_꼭_나오는_문제_실력업
  summary: |
    한 변 3인 정삼각형에서 반복적 대응 도형 넓이 수열 · 등비수열 파악 후 극한 없이 일반항·합
  category: 도형 반복 (등비 수열)
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - step: 1
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "도형 대응 관찰 → 넓이 축소 비율 파악 (닮음비 제곱)"
    - step: 2
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "등비수열 첫 항·공비 유도 · $n$항 산출 (극한은 대수 라인 밖)"
  insight_count: 2
  depth_score: 8.5
  base_star: 4
  star: 4
  premium: false
  rationale: |
    도형 반복 정점 원형 · depth 3+3 · 실력Up 위신. **star_4 확정** (v1 예상 star_4·5 하한).
    ※ 극한 개념은 대수 라인 밖 · 유한 항까지만 활용.
  tier: star_4
  mechanism_primary: 수열-도형반복-등비수열
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 1
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 C단계 사고력", "마플 STEP 2·3 후보"]
    L5_confidence: 0.80

### H-5. RPM-대수-CH08-#0964 (실력Up · 로그 결합 수열)

- id: RPM-대수-수열-로그결합-0964
  page: 128
  vendor_label: "시험에꼭나오는 실력Up 🏆"
  category_type: 시험에_꼭_나오는_문제_실력업
  summary: |
    등비수열의 각 항에 로그를 씌운 새 수열 · 등차수열 됨을 이용해 값 산출
  category: 등비→등차 로그변환
  M: {s: 3, k: 2, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "$\log(등비) = 등차$ 성질 (곱→합 변환)"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "등차수열 조건 → 원 등비수열 항 관계 역환원"
  insight_count: 2
  depth_score: 7.0
  base_star: 3
  star: 4
  premium: false
  rationale: |
    등비↔등차 로그변환 정점 유형 · depth 3+2 · P3. **star_4 확정** (실력Up 위신 · premium 미달).
    로그+수열 융합 정점 원형 · 대수 라인 특성 반영.
  tier: star_4
  mechanism_primary: 수열-등비등차-로그변환
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 1
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 B단계 ● 상", "마플 TOUGH"]
    L5_confidence: 0.85

---

## Section I. CH09 수열의 합 — 4문

### I-1. RPM-대수-CH09-#0972 (유형익히기·시그마 계산)

- id: RPM-대수-수열합-시그마-0972
  page: 132
  vendor_label: "유형익히기 대표문제 (유형 01 합의 기호 ∑)"
  category_type: 유형익히기
  summary: |
    $\sum_{k=1}^{n} (2k^2 - 3k+1)$ · 공식 적용 후 값 산출
  category: ∑ 표준공식 계산
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: 절차형
      depth: 1
      effective_depth: 1
      description: "$\sum k^2$, $\sum k$, $\sum 1$ 표준 공식 대입"
  insight_count: 1
  depth_score: 2.0
  base_star: 1
  star: 2
  premium: false
  rationale: |
    ∑ 최기본 표준 계산 · depth 1 · base 1 + 대표 +1 = **star_2 확정**.
    시험지 원본 pool 부적합.
  tier: star_2
  mechanism_primary: 수열합-표준공식
  insight_type: 절차형
  target_cohort: 중하위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 A단계", "마플 BASIC"]
    L5_confidence: 0.95

### I-2. RPM-대수-CH09-#0977 (유형익히기·부분분수)

- id: RPM-대수-수열합-부분분수-0977
  page: 132
  vendor_label: "유형익히기 대표문제 (유형 02 ∑의 성질)"
  category_type: 유형익히기
  summary: |
    $\sum_{k=1}^{n} \frac{1}{k(k+1)}$ · 부분분수 전개 후 망원합 (telescoping)
  category: 부분분수 (telescoping)
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "$\frac{1}{k(k+1)} = \frac{1}{k} - \frac{1}{k+1}$ 분해 후 telescoping"
  insight_count: 1
  depth_score: 4.0
  base_star: 2
  star: 3
  premium: false
  rationale: |
    부분분수 telescoping 정형 · depth 2 · base 2 + 대표 +1 = **star_3 확정**.
    시장 표준 (모든 벤더 등재).
  tier: star_3
  mechanism_primary: 수열합-부분분수-telescoping
  insight_type: 통찰형
  target_cohort: 중위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 B단계 대표", "마플 NORMAL"]
    L5_confidence: 0.95

### I-3. RPM-대수-CH09-#1032 (시험·실력Up · 계차)

- id: RPM-대수-수열합-계차수열-1032
  page: 140
  vendor_label: "시험에꼭나오는 실력Up 🏆"
  category_type: 시험에_꼭_나오는_문제_실력업
  summary: |
    수열 $\{a_n\}$: 2, 3, 4, 6, 8, 10, 13, ... · 계차수열 관찰 후 일반항 산출
  category: 계차수열 (일반항 추정)
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - step: 1
      type: I-PD
      depth: 3
      effective_depth: 3
      signal_ref: [P2]
      description: "계차수열 관찰 → 새 등차 수열 구조 발견"
    - step: 2
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "$a_n = a_1 + \sum_{k=1}^{n-1} b_k$ 공식 · 일반항 유도"
  insight_count: 2
  depth_score: 8.5
  base_star: 4
  star: 4
  premium: false
  rationale: |
    계차수열 정점 원형 · depth 3+3 · P2 관찰 신호. **star_4 확정** (실력Up 위신 · premium 5+ 미달).
    v1 예상 star_4·5 → v2 star_4 하한.
  tier: star_4
  mechanism_primary: 계차수열-일반항-∑
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 1
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 C단계 사고력", "마플 TOUGH·STEP 2"]
    L5_confidence: 0.80

### I-4. RPM-대수-CH09-#1035 (실력Up · S_n 조건 결합)

- id: RPM-대수-수열합-Sn조건-1035
  page: 140
  vendor_label: "시험에꼭나오는 실력Up 🏆"
  category_type: 시험에_꼭_나오는_문제_실력업
  summary: |
    수열 $\{a_n\}$의 합 $S_n$ · $S_n = n^2 + 2n$ · $\sum_{k=1}^{10} \frac{1}{a_k a_{k+1}}$ 산출
  category: $S_n \to a_n$ + 부분분수
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "$a_n = S_n - S_{n-1}$ ($n \ge 2$) · $a_1 = S_1$ 함정"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "$a_n$ 등차수열 형 · 부분분수 telescoping 결합"
  insight_count: 2
  depth_score: 8.5
  base_star: 4
  star: 5
  premium: false
  rationale: |
    $S_n \to a_n$ + 부분분수 결합 정점 원형 · depth 3+3 · P4. **star_5 승격** ($a_1$ 함정 + 두 통찰 정점 결합).
    premium 5+ 통찰 카드 미달 → premium 아님.
    v1 예상 star_4·5 → v2 **star_5 상한** (실측 상위).
  tier: star_5
  mechanism_primary: 수열합-Sn환원-부분분수결합
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 C단계 사고력", "마플 STEP 3 후보", "블랙라벨 STEP 2 후보"]
    L5_confidence: 0.80

---

## Section J. CH10 수학적 귀납법 — 3문

### J-1. RPM-대수-CH10-#1068 (유형익히기·귀납정의)

- id: RPM-대수-귀납법-귀납정의-1068
  page: 146
  vendor_label: "유형익히기 대표문제 (유형 01 등차수열의 귀납적 정의)"
  category_type: 유형익히기
  summary: |
    수열 $\{a_n\}$: $a_1=1$, $a_{n+1} = a_n + 3$ · $a_{20}$ 값
  category: 귀납정의 (등차수열)
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: 절차형
      depth: 1
      effective_depth: 1
      description: "점화식 → 등차수열 인식 · $a_n = 1 + 3(n-1)$"
  insight_count: 1
  depth_score: 2.0
  base_star: 1
  star: 2
  premium: false
  rationale: |
    귀납정의 최기본 (등차 인식) · depth 1 · base 1 + 대표 +1 = **star_2 확정**.
  tier: star_2
  mechanism_primary: 귀납법-등차-점화식
  insight_type: 절차형
  target_cohort: 중하위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 A단계", "마플 BASIC"]
    L5_confidence: 0.95

### J-2. RPM-대수-CH10-#1074 (유형익히기·점화식 응용)

- id: RPM-대수-귀납법-점화식응용-1074
  page: 146
  vendor_label: "유형익히기 대표문제 (유형 02 점화식)"
  category_type: 유형익히기
  summary: |
    수열 $\{a_n\}$: $a_1 = 3$, $a_{n+1} = 2a_n + 1$ · 특성근 없이 대입 반복 후 일반항 (또는 $a_n + 1 = 2(a_{n-1}+1)$ 등비 유도)
  category: 점화식 응용 (등비 변환)
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "$a_n + c$ 치환 후 등비수열 유도 · $c$ 값 조정"
  insight_count: 1
  depth_score: 5.0
  base_star: 3
  star: 4
  premium: false
  rationale: |
    점화식 $a_{n+1} = pa_n + q$ 표준 등비 변환 · depth 3 P3 · **star_4 확정** (유형JP 위신 +1).
    v1 예상 star_3·4 → v2 star_4 상한.
  tier: star_4
  mechanism_primary: 귀납법-점화식-등비변환
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 B단계 ● 상", "마플 TOUGH"]
    L5_confidence: 0.85

### J-3. RPM-대수-CH10-#1088 (시험·수학적 귀납법 증명)

- id: RPM-대수-귀납법-증명-1088
  page: 148
  vendor_label: "시험에꼭나오는 · 증명형"
  category_type: 시험에_꼭_나오는_문제
  summary: |
    수학적 귀납법으로 $\sum_{k=1}^{n} k^2 = \frac{n(n+1)(2n+1)}{6}$ 증명 · 유도 단계 판정
  category: 수학적 귀납법 증명 (기본형)
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "귀납 가정 $n=k$ 성립 → $n=k+1$ 유도 · 대수 정리"
    - step: 2
      type: 절차형
      depth: 2
      effective_depth: 2
      description: "기저 사례 $n=1$ 확인 · 증명 완성"
  insight_count: 2
  depth_score: 7.0
  base_star: 3
  star: 4
  premium: false
  rationale: |
    귀납법 증명 표준 · depth 3+2 · **star_4 확정** (시험 위신 +1).
    증명형 (서술) · 시험지 원본 pool 지문형 확장 소재로 활용.
  tier: star_4
  mechanism_primary: 귀납법-증명-표준
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 B단계 ● 상", "마플 TOUGH"]
    L5_confidence: 0.85

---

## Ⅲ. 표본 판정 요약 (45문)

### v1.0 tier 분포

| ★ | 표본 수 | 문항 (id 요약) | 비율 |
|---|---:|---|---:|
| ★ 2 | 5 | B-1·E-2·G-1·I-1·J-1 | 11.1% |
| ★ 3 | 15 | A-1·A-2·A-3·C-1·D-1·E-1·F-1·F-2·G-2·G-3·H-1·H-2·I-2 (+2) | 33.3% |
| ★ 4 | 21 | A-4·A-5·B-2·B-3·B-4·B-5·C-2·C-3·C-4·D-3·D-5·E-3·E-4·F-3·F-5·G-4·H-3·H-4·H-5·I-3·J-2·J-3 | 46.7% |
| ★ 5 | 4 | D-4·F-4·G-5·I-4 | 8.9% |
| ★ 5 premium | 0 | 없음 | 0.0% |
| **합계** | **45** | — | **100%** |

### 소단원별 tier 분포

| 챕터 | 소단원 | 표본 | ★ 2 | ★ 3 | ★ 4 | ★ 5 |
|---|---|---:|---:|---:|---:|---:|
| CH01 | 지수 | 5 | 0 | 3 | 2 | 0 |
| CH02 | 로그 | 5 | 1 | 1 | 3 | 0 |
| CH03 | 지수함수 | 4 | 0 | 1 | 3 | 0 |
| CH04 | 로그함수 | 5 | 0 | 1 | 3 | 1 |
| CH05 | 삼각함수 | 4 | 1 | 1 | 2 | 0 |
| CH06 | 삼각함수 그래프 | 5 | 0 | 2 | 2 | 1 |
| CH07 | 삼각함수 활용 | 5 | 1 | 2 | 1 | 1 |
| CH08 | 등차등비 | 5 | 0 | 2 | 3 | 0 |
| CH09 | 수열의 합 | 4 | 1 | 1 | 1 | 1 |
| CH10 | 수학적 귀납법 | 3 | 1 | 0 | 2 | 0 |
| **합계** | — | **45** | **5** | **15** | **21** | **4** |

### RPM 회귀 계승 (CM1-v2 대비)

| v1 라벨 (예상) | 표본 수 | v2 결과 (분포) | 재분류 |
|---|---:|---|---|
| 유형익히기 대표문제 (star_2·3 예상) | 20 | ★ 2: 5 · ★ 3: 13 · ★ 4: 2 | ★ 2/★ 3 정합 90% · ★ 4 승격 소수 (함정 밀도 · B-2 등) |
| 시험에꼭나오는 (중요·일반) (star_3·4 예상) | 12 | ★ 3: 2 · ★ 4: 10 | ★ 4 상한 매핑 83% · **CM1-v2 관대 편향과 동일** |
| 시험에꼭나오는 실력Up 🏆 (star_4·5 예상) | 13 | ★ 4: 9 · ★ 5: 4 | **★ 4 하한 매핑 69%** · ★ 5 상한 소수 31% · **premium 부재** |

**핵심 발견 1**: RPM 대수 실력Up 라벨 중 69%가 실제 ★ 4 (CM1-v2 75% 하향과 정합) · **premium 부재** (CM1-v2와 동일 회귀).

**핵심 발견 2**: 소단원별 star_5 4건 (D-4·F-4·G-5·I-4) — 로그 다항 결합·삼각방정식 그래프·원+사각형 사인법칙·Sn+부분분수 결합 · 대수 라인 정점 원형 후보.

**핵심 발견 3**: 대수 라인 특성으로 **로그+수열 결합 정점** (H-5) · **삼각+대칭식** (E-4) · **삼각+근과계수** (E-3) 등 이종 결합이 star_4/5 밀집 · CM1 다항식·CM2 함수 유사 정점과 대응.

---

## Ⅳ. 자산화 및 이후 워크플로우

### premium 후보 (0건)
- 본 표본 45문에서 premium 후보 없음.
- CM1-v2 대비 정합 (RPM 시리즈 premium 부재 회귀 계승).
- **premium은 시판책 4종+ 통합 원형 매트릭스에서 발굴 예정** (마플·개념원리·고쟁이·블랙라벨).

### 시험지 원본 pool 적합성
- ★ 4 (21건) · ★ 5 (4건) = **25건 활용 가능** (55.6%)
- ★ 2 (5건) · ★ 3 (15건) = **20건 pool 부적합** (44.4% · 시험지 star ≥ 4 정책상 배제)

### 정리편·유형편 pool 적합성
- ★ 3·4 = **36건 활용 가능** (80.0%)
- concept-author v1.2 원본 은행 편입 가능

### 대수 라인 계열 정합
- CM1 재편집 시 대수 라인 (지수·로그·삼각·수열)은 **CM1 침투 금지** 원칙 유지
- 본 자산은 **대수 라인 신규 교재** 착수 시 원본 pool 역할
- 마플시너지 (이미 정독 완료) + RPM 대수 (본 파일) + 향후 개념원리 대수 정독 = 3벤더 앙상블 기반

### tier 매핑 후속 편입
- `bank/vendor-label-calibration.md` v1.11 → v1.12 (RPM 대수 신뢰도 B급 · 시험꼭나오는 관대 편향 회귀 계승)
- `bank/mechanism-데이터-정독-tier-매핑.md` v3.2 → v3.3 (RPM 대수 tier 매핑 편입)

---

## 변경 이력
- **2026-07-22 v1.0** — 초판. 세션 68+ · RPM 대수 2025 표본 45문 실측 · 스캔 이미지 PDF 시각 판독 (pdftoppm 150 DPI). CM1-v2 회귀 계승 · 실력Up 라벨 69% 하향 매핑 · premium 부재. 10 소단원 층화 균형 · star_5 4건 (대수 라인 정점 원형 후보) 발굴.

## 관련 파일
- `bank/schema.md` v3.9 · v5.1 8축 게이트
- `bank/mechanism-데이터-rpm-CM1-v2.md` v2.0 (회귀 계승)
- `bank/vendor-label-calibration.md` v1.11 (편입 대상)
- `bank/mechanism-데이터-정독-tier-매핑.md` v3.2 (편입 대상)
- `bank/대수/README.md` (대수 라인 정책)
- `data/대수/추출/rpm/samples/p-*.png` (판독 원본 · 45 페이지 렌더링)
