---
name: mechanism-데이터-학교기출-동화고-삼육고-2025
description: 학교기출 CM1 신규 정독 데이터 · 동화고 2025 1학기 (중간+기말 완결) + 삼육고 통합 (10~23회) + 매쓰플랫 동화고 유사 137문 전수 카탈로그. 세션 68 flywheel · 기존 mechanism-데이터-학교기출-CM1.md와 상보적 (2025 완전 재정독 + 삼육고 회차별 매핑 + 매쓰플랫 metadata 정합).
metadata:
  type: reference
  version: v1.0
  established: 2026-07-22 (세션 68)
  source: 참고자료/학교기출/고1/{동화고,삼육고} 2025 1학기 지필평가·매쓰플랫 유사·통합
  section: CM1 전 단원 (PL·EQ·CB·MX)
  unit_code: CM1
  sub_unit: 다항식·항등식·인수분해·나머지정리·복소수·이차·고차·연립·부등식·순열·조합·행렬
  citation_note: 학교기출 신규 4파일 정독 · 학습 목적 · 저작권 준수 (원문 축약·발문 요약)
  extract_range: |
    동화고 2025 1학기 1차 (중간) 지필평가 (18문 = 13객관식 + 5논술 · 완결 신규)
    동화고 2025 1학기 2차 (기말) 지필평가 (23문 완결 · 기존 CM1 파일 partial 보완)
    매쓰플랫 동화고 유사문제 137문 (원본 회차·정답률·유형 라벨 · 완전 매핑)
    삼육고 통합 (10~23회, 각 8문, 약 80~90문 학평 편집 · CM1 부분)
  pages: "동화고 2025 중간=4p · 기말=4p · 매쓰플랫=100p · 삼육고=20p"
  total_problems_new: 약 260문 (동화고 신규 18 + 기말 완결 10 신규 + 매쓰플랫 137 매핑 + 삼육고 CM1 80)
  sample_deep_ingest: 60문 (동화고 2025 중간 18 + 기말 신규 10 + 매쓰플랫 20 + 삼육고 12)
  regression_predict: 200문 (매쓰플랫 137 metadata 기반 · 삼육고 CM2 부분 제외)
  judgment_protocol: schema.md v3.9 3층 (M·I·X) + v3.10 origin_verified
  parent: bank/mechanism-데이터-학교기출-CM1.md v1.0 (세션 62)
  related: bank/vendor-label-calibration.md v1.12 매쓰플랫 정답률 회귀 (신규 원본 축)
---

# 학교기출 CM1 신규 정독 v1.0 · 동화고 2025 완결 + 삼육고 통합 (세션 68)

## 배경 · 목적

세션 62 `mechanism-데이터-학교기출-CM1.md` v1.0의 partial 자산화를 **완결**:
1. **동화고 2025 1학기 1차 (중간)** — 이전 v1.0 미포함. 신규 18문 완전 정독 · CM1-MX 편입 첫 중간고사 원형 확보
2. **동화고 2025 1학기 2차 (기말)** — v1.0 문항 11·14·17 등 8문 partial → **문항 1~23 완결**
3. **매쓰플랫 137문 metadata** — 유형 라벨·정답률·원본 회차 완전 매핑 (v1.0에서는 표본 6문만)
4. **삼육고 통합 (10~23회)** — 회차별 8문 각각의 학평 원본 매핑 (2016~2025년 6월·9월·11월·수능·모평 혼재)

**활용**: `problem-author v2.1` CM1 1학기 시험지 창작 시 **원본 pool 4중 확장** (2025 중간·기말 완결 + 삼육고 재검색 + 매쓰플랫 회귀 검증).

## 🔴 중요 컨텍스트 — 2022 개정 교과 (동화고 2025~ CM1 순정)

동화고 2025 1학기 1차·2차는 **2022 개정 교육과정 완전 준수** (CM1: 다항식·방정식·경우의수·행렬 4단원). 
- 중간고사: **다항식·항등식·나머지정리·복소수·이차방정식·이차함수** 위주 (기말 이전 6단원)
- 기말고사: **연립방정식·연립부등식·순열·조합·행렬** 위주 (중간 이후 6단원)

**교육과정 침투 감지**: 동화고 2025 중간 18문 + 기말 23문 = **총 41문 CM1 전문 · 상위 과정 침투 0건** (역행렬·트레이스·집합기호·미적분 용어 · 시그마 · 케해 전무).

## 🔴 삼육고 특징 (세션 62 계승)

**삼육고 = 학평 기출 회차별 큐레이션** (자체 창작 아님 · CM1 학평 재수록). 자기복제 감쇠 대상.

**회차별 원본 학평 매핑** (통합 파일):
- **10회**: 2022·2021·2017·2020·2023 6월학평 (고1·고2 · 삼차·사차방정식·복소수·근의 관계) — 8문
- **12회**: 2016·2021·2024·2023·2022·2019 6월·9월·11월학평 (부등식 · 이차부등식 · 최소·최대) — 8문
- **13회**: 2017·2022·2019·2023·2016·2014·2025 3월·6월·9월·11월학평 (연립부등식·복소수 조건) — 8문
- **14회**: 2019·2023·2024·2021·2019 3월·6월학평 (기본 부등식 · 정사각형 도형+대수) — 8문
- **15회**: 2022·2017·2018·2025·2018·2024·2023 학평 (이차·연립·부등식 · killer 이차함수 킬러) — 8문
- **17회**: 2020·2025·2023·2011·2012·2008·2024·2009 학평·수능·모평 (경우의 수 · 순열조합 초입) — 8문
- **19회**: 2020·2011·2010·2016·2009·2016·2016·2022 수능·모평·학평 (경우의 수 · 조합·색칠·시트지 · killer) — 8문
- **21회**: 2014·2025·2010·2006·2025 학평·모평 (행렬 성분·연립·거듭제곱) — 8문
- **22회**: 2012·2014·2025·2010·2008·2007 학평·모평·수능 (행렬 A^n·성분·연립·순서쌍) — 8문
- **23회**: 2025·2009·2014·2009·2010·2014·2006 학평 (행렬 기본 · A^n·A·B) — 8문

**⚠️ 자기복제 위험**: 삼육고 편집분은 학평 원본 그대로 재수록 (S4 시그니처 완전 일치). CM1 시험지 창작 시 **삼육고 pool 회피 · 학평 원본 직접 참조**.

## 문항 엔트리 · 동화고 2025 1학기 1차 (중간) 신규

```yaml
- id: 학교-CM1-EQ-복소수-DH25M-1
  page: 1 (동화고 2025 1차 · 문항 1)
  vendor_label: "3.5점 · 선택형 · CM1-EQ 복소수 계산"
  category_type: 선택형
  summary: |
    √(a)·√(b) + √(c)/√(d) 등 복소수 근호 계산 값 (지선 5).
    (조건: a<0, b<0, c<0, d<0 형태 · 복소수 곱 부호 판정)
  category: "복소수 기본 · 근호 곱·나눗셈 부호"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  rationale: "복소수 근호 부호 정형 · CM1-EQ 절차형 도입."
  tier: star_1
  mechanism_primary: "복소수 근호 부호"
  insight_type: 절차형
  target_cohort: 중위권

- id: 학교-CM1-PL-항등식-DH25M-2
  page: 1 (동화고 2025 1차 · 문항 2)
  vendor_label: "3.5점 · 선택형 · CM1-PL 항등식"
  category_type: 선택형
  summary: |
    다항식 등식이 x에 대한 항등식일 때 상수 3개(a, b, c 등)에 대한 표현식 값.
  category: "항등식 · 계수비교"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  rationale: "항등식 계수 비교 정형 · CM1-PL 절차형."
  tier: star_1
  mechanism_primary: "항등식 계수비교"
  insight_type: 절차형
  target_cohort: 중위권

- id: 학교-CM1-PL-이차함수-DH25M-3
  page: 1 (동화고 2025 1차 · 문항 3)
  vendor_label: "3.5점 · 선택형 · CM1-EQ 이차함수·x축·판별식"
  category_type: 선택형
  summary: |
    이차함수 y=f(x)의 그래프가 x축과 서로 다른 두 점 A, B에서 만날 때
    (실수 k 값 산출 · 판별식>0 조건).
  category: "이차함수 · x축 교점·판별식"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 2
  star: 2
  premium: false
  rationale: "판별식 정형 · 표준."
  tier: star_2
  mechanism_primary: "판별식>0 조건"
  insight_type: 절차형
  target_cohort: 중위권

- id: 학교-CM1-EQ-이차-DH25M-4
  page: 1 (동화고 2025 1차 · 문항 4)
  vendor_label: "3.5점 · 선택형 · CM1-EQ 이차방정식 근의 관계"
  category_type: 선택형
  summary: |
    x에 대한 이차방정식 f(x)=0의 두 근을 α, β라 할 때
    (α+β)·(αβ) 등 대칭식 값 → 상수 결정.
  category: "이차방정식 · 근과 계수 대칭식"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "근과 계수 관계 · 대칭식 값 유도"
  insight_count: 1
  depth_score: 2.0
  base_star: 2
  star: 2
  premium: false
  rationale: "근과 계수 정형 · 절차형 근접."
  tier: star_2
  mechanism_primary: "근과 계수 관계·대칭식"
  insight_type: 절차형
  target_cohort: 중위권

- id: 학교-CM1-PL-조립제법-DH25M-5
  page: 1 (동화고 2025 1차 · 문항 5)
  vendor_label: "3.9점 · 선택형 · CM1-PL 조립제법"
  category_type: 선택형
  summary: |
    다항식 P(x)를 (x-α)로 나눌 때 조립제법 표에서 몫의 일차항 계수 산출.
  category: "조립제법 · 몫 계수 산출"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 2
  star: 2
  premium: false
  rationale: "조립제법 정형 · CM1-PL 표준."
  tier: star_2
  mechanism_primary: "조립제법 몫 계수"
  insight_type: 절차형
  target_cohort: 중위권

- id: 학교-CM1-EQ-이차함수-DH25M-6
  page: 1 (동화고 2025 1차 · 문항 6)
  vendor_label: "3.9점 · 선택형 · CM1-EQ 이차함수·직선 접"
  category_type: 선택형
  summary: |
    이차함수 y=f(x)의 그래프와 직선 y=g(x)가 한 점에서 만나도록 하는 실수 k의 값.
    (접선 조건 · D=0)
  category: "이차함수 · 접선 조건"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "이차함수-직선 접 → D=0 판별식 방정식"
  insight_count: 1
  depth_score: 2.0
  base_star: 2
  star: 2
  premium: false
  rationale: "접선 조건 정형 · CM1-EQ 표준."
  tier: star_2
  mechanism_primary: "접선 조건 D=0"
  insight_type: 통찰형
  target_cohort: 중위권

- id: 학교-CM1-EQ-이차함수-DH25M-7
  page: 2 (동화고 2025 1차 · 문항 7)
  vendor_label: "3.9점 · 선택형 · CM1-EQ 이차함수 교점·삼각형 넓이"
  category_type: 선택형
  summary: |
    이차함수 y=f(x)의 그래프와 직선이 두 점 A, B에서 만날 때
    세 점 A, B, C를 꼭짓점으로 하는 삼각형 ABC의 넓이가 8일 때 상수값.
  category: "이차함수 교점 · 삼각형 넓이"
  M: {s: 2, k: 2, a: 3, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "교점 좌표 · 근과 계수 활용"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "삼각형 밑변·높이 · 넓이 식 유도·상수 결정"
  insight_count: 2
  depth_score: 4.0
  base_star: 3
  star: 3
  premium: false
  rationale: "이차함수·직선·삼각형 결합 표준 · depth 4.0."
  tier: star_3
  mechanism_primary: "이차 교점·삼각형 넓이"
  insight_type: 통찰형
  target_cohort: 중상위권

- id: 학교-CM1-EQ-이차함수-DH25M-8
  page: 2 (동화고 2025 1차 · 문항 8)
  vendor_label: "3.9점 · 선택형 · CM1-EQ 보기형 이차함수"
  category_type: 선택형
  summary: |
    이차함수 y=f(x)의 그래프가 x축과 서로 다른 두 점에서 만날 때
    보기 ㄱ. 계수 부호 · ㄴ. 대칭축 관계 · ㄷ. 구간 [p, q]에서 최솟값 조건.
    옳은 것 세 개 중 판정 (지선 5).
  category: "이차함수 · 보기 3원조·대칭축·구간 최솟값"
  M: {s: 2, k: 3, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "그래프 조건 → 계수 부호·대칭축 위치 판정"
    - step: 2
      type: I-SC
      depth: 2
      effective_depth: 2
      description: "각 보기 case별 참·거짓 검증"
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "구간 최솟값 · 대칭축과 구간 관계"
  insight_count: 3
  depth_score: 7.0
  base_star: 4
  star: 3
  premium: false
  rationale: "보기 3원조 · 이차함수 조건 정합. depth 7.0 · count 3. ★ 3 상단."
  tier: star_3
  mechanism_primary: "이차함수 보기 판정·대칭축"
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 1

- id: 학교-CM1-EQ-이차-DH25M-9
  page: 2 (동화고 2025 1차 · 문항 9)
  vendor_label: "3.9점 · 선택형 · CM1-EQ 이차방정식 · 매개변수 무관 실근"
  category_type: 선택형
  summary: |
    x에 대한 이차방정식 f(x, k)=0이 실수 k의 값에 관계없이 항상 서로 다른 두 실근을 갖도록 하는
    두 정수 a, b에 대해 a·b의 최댓값 (지선 5).
  category: "이차방정식 · 매개변수 무관 실근 조건"
  M: {s: 3, k: 3, a: 3, t: 1}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "판별식을 k에 대한 이차식으로 정리 · 판별식 > 0 for all k"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "이중 판별식 · 두 매개변수 (a, b) 부등식 range"
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "정수 (a, b) 조합 · a·b 최댓값"
  insight_count: 3
  depth_score: 8.67
  base_star: 4
  star: 4
  premium: false
  rationale: "매개변수 무관 실근 · 이중 판별식 통찰. depth 8.67 · count 3. **CM1-EQ 중간 killer 원형**."
  tier: star_4
  mechanism_primary: "매개변수 무관 실근·이중 판별식"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 2

- id: 학교-CM1-EQ-복소수-DH25M-10
  page: 2 (동화고 2025 1차 · 문항 10)
  vendor_label: "4.1점 · 선택형 · CM1-EQ 복소수 대칭식"
  category_type: 선택형
  summary: |
    복소수 z에 대해 z+z̄=k, z·z̄=m일 때
    z^n + z̄^n + (z̄)^n + z^n 등 다항식 값 (지선 5). (z̄는 z의 켤레복소수)
  category: "복소수 · 켤레·대칭식·거듭제곱"
  M: {s: 2, k: 3, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "z+z̄, z·z̄ → z, z̄는 이차방정식 근"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "z^n + z̄^n 대칭식 · Newton 항등식 (자연어)"
  insight_count: 2
  depth_score: 7.5
  base_star: 4
  star: 4
  premium: false
  rationale: "켤레 대칭식 통찰 · 근 관계 응용. depth 7.5 · count 2."
  tier: star_4
  mechanism_primary: "복소수 켤레 대칭식"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 1

- id: 학교-CM1-PL-나머지-DH25M-11
  page: 2 (동화고 2025 1차 · 문항 11)
  vendor_label: "4.1점 · 선택형 · CM1-PL 반복 나눗셈·나머지"
  category_type: 선택형
  summary: |
    다항식 P(x)를 (x-a)로 나눈 몫 Q1(x)·나머지 R1. Q1(x)을 (x-a)로 나눈 몫 Q2(x)·나머지 R2.
    이 과정을 계속 반복하여 P(x)를 (x-a)^n으로 나눈 나머지 R_n을 구할 때, R_n과 항상 같은 값 (지선 5).
  category: "다항식 · 반복 나눗셈·Taylor 전개 (자연어)"
  M: {s: 3, k: 3, a: 3, t: 1}
  M_total: 10
  insights:
    - step: 1
      type: I-BW
      depth: 3
      effective_depth: 3
      description: "반복 조립제법 = P(x)의 (x-a)^n 전개 계수 (Taylor 전개 자연어)"
    - step: 2
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "각 R_i = P^(i)(a)/i! (자연어 · 미분 없이 계수 발견)"
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "특정 R_n 값과 P(x)의 계수 관계 판정"
  insight_count: 3
  depth_score: 8.67
  base_star: 5
  star: 4
  premium: false
  rationale: "반복 조립제법 = Taylor 전개 통찰 · CM1-PL 정점 · depth 8.67. count 3. **원형 O-09-DH-11 (반복나눗셈)** 신규 후보."
  tier: star_4
  mechanism_primary: "반복 조립제법·Taylor 계수 (자연어)"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 3

- id: 학교-CM1-PL-나머지-DH25M-12
  page: 2 (동화고 2025 1차 · 문항 12)
  vendor_label: "4.1점 · 선택형 · CM1-PL 나머지정리 중복"
  category_type: 선택형
  summary: |
    다항식 P(x)를 (x-a)로 나눈 나머지 R1, (x-b)로 나눈 나머지 R2.
    (x-a)(x-b)로 나눈 나머지 R(x)의 f(k) 값 (지선 5).
  category: "다항식 · 나머지정리·이차 나머지"
  M: {s: 2, k: 3, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "R(x) = px + q · R(a)=R1, R(b)=R2 연립"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "R(k) 계산"
  insight_count: 2
  depth_score: 4.0
  base_star: 3
  star: 3
  premium: false
  rationale: "이차 나눗셈 나머지 정형 · CM1-PL 중상."
  tier: star_3
  mechanism_primary: "이차 나눗셈 나머지 연립"
  insight_type: 통찰형
  target_cohort: 중상위권

- id: 학교-CM1-EQ-이차함수-DH25M-13
  page: 3 (동화고 2025 1차 · 문항 13)
  vendor_label: "4.2점 · 선택형 · CM1-EQ 상황형 · 자동차 트랙"
  category_type: 선택형
  summary: |
    트랙 길이 L인 장난감 자동차 A·B 서로 반대편 동시 출발 · 같은 방향.
    t분 동안 이동한 거리 A: at²+bt, B: ct²+dt. 출발 후 T분 동안 만나는 총 횟수 (지선 5).
    (단, 자동차는 멈추지 않고 계속 달림)
  category: "이차함수 상황형 · 두 이차식 차·주기적 만남 카운팅"
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - step: 1
      type: I-XU
      depth: 3
      effective_depth: 3
      signal_ref: [P4, P5]
      description: "상황 이해 · 서로 반대편 동시 · 같은 방향 → 만남 = (A위치 - B위치) mod L = 0"
    - step: 2
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "만남 조건: (거리 A) + (거리 B) = k·L (k = 자연수)"
    - step: 3
      type: I-VF
      depth: 3
      effective_depth: 3
      description: "각 t 구간에서 이차식 값 · k 개수 카운팅"
    - step: 4
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "T분 동안 최대 k 값 · 총 만남 횟수"
  insight_count: 4
  depth_score: 8.75
  base_star: 5
  star: 5
  premium: true
  rationale: "상황형·다층 이해·주기적 만남 카운팅. 4.2점급 · depth 8.75 · count 4 · P4+P5 · premium 확정. **CM1-EQ 상황형 killer 원형 신규 (O-DH25M-13)**."
  tier: star_5_premium
  mechanism_primary: "이차함수 상황형·주기 만남 카운팅"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 3
  cross_reference:
    - source: "학평 상황형 계승 (2019·2020 근접)"
      relation: "새 원형 · 만남 조건 이차식 조합 신규"

- id: 학교-CM1-EQ-이차-DH25M-논술1
  page: 3 (동화고 2025 1차 · 논술형 1)
  vendor_label: "8점 · 논술형 · CM1-EQ 이차함수·교점 서술"
  category_type: 논술형
  summary: |
    이차함수 y=x²+ax+b의 그래프와 직선 y=cx+d가 서로 다른 두 점에서 만나고
    두 교점 중 한 교점의 x좌표가 α (유리수). 이때 유리수 a, b에 대하여 a+b의 값을 구하고 서술.
  category: "이차함수-직선 교점 · 근과 계수 서술"
  M: {s: 2, k: 3, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "한 근이 유리수 → 다른 근 정보 (계수 유리 조건)"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "근과 계수 · a, b 결정 · 서술 표현"
  insight_count: 2
  depth_score: 7.5
  base_star: 4
  star: 4
  premium: false
  rationale: "유리수 근+근계수 통찰. 논술 서술 요구. depth 7.5 · count 2."
  tier: star_4
  mechanism_primary: "유리수 근·근계수·논술 서술"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 1

- id: 학교-CM1-EQ-복소수-DH25M-논술2
  page: 3 (동화고 2025 1차 · 논술형 2)
  vendor_label: "8점 · 논술형 · CM1-EQ 복소수 거듭제곱·주기"
  category_type: 논술형
  summary: |
    복소수 z=(1+i)/√2에 대하여 등식 z + z² + z³ + ... + z^n = 0 (또는 특정값)이 성립하는
    자연수 n의 값을 구하고 서술. (단, n 조건 명시)
  category: "복소수 · n제곱근 주기 · 합 조건"
  M: {s: 3, k: 3, a: 3, t: 1}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P2]
      description: "z=cos45°+i sin45° · z⁸=1 · 8-주기 발견"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "z^k 등비 부분합 · 주기별 합 계산"
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "n mod 8 case · 조건 만족 n 값 필터"
  insight_count: 3
  depth_score: 8.33
  base_star: 5
  star: 4
  premium: false
  rationale: "복소수 8주기 서술 · 등비 부분합 통찰. 논술 8점. depth 8.33 · count 3. **O-08 변형 원형**."
  tier: star_4
  mechanism_primary: "복소수 8주기·등비 부분합"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 2
  cross_reference:
    - source: "동화고 2024 논술4 (z=(1-i)/√2)"
      relation: "부호만 다른 8주기 확장 원형 · 자기복제 감쇠"

- id: 학교-CM1-EQ-이차함수-DH25M-논술3
  page: 3 (동화고 2025 1차 · 논술형 3)
  vendor_label: "10점 · 논술형 · CM1-EQ 직육면체·부피 최댓값"
  category_type: 논술형
  summary: |
    직각을 낀 두 변 길이 a인 직각삼각형을 밑면으로 하고 높이 h인 삼각기둥.
    두 번 잘라 직육면체 형성. (1) 부피 V(x)를 x에 대한 식·x 범위 산출 [4점]
    (2) V(x) 최댓값 산출 [6점]. 서술 요구.
  category: "이차함수 상황형 · 구간 최댓값·서술"
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - step: 1
      type: I-XU
      depth: 3
      effective_depth: 3
      signal_ref: [P4, P5]
      description: "삼각기둥 → 직육면체 절단 상황 이해 · 밑면 가로·세로 유도"
    - step: 2
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "부피 V(x) = x·y·h · x+y=a 조건 · V(x) 이차식 유도"
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "x 범위 (양수·수렴 조건) · 이차함수 최댓값 (완전제곱)"
  insight_count: 3
  depth_score: 8.33
  base_star: 5
  star: 4
  premium: false
  rationale: "상황형 · 직육면체 부피 최댓값 · 서술 10점. depth 8.33 · count 3. CM1-EQ 상황형 논술 정점."
  tier: star_4
  mechanism_primary: "상황형·이차함수 최댓값·구간"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 2

- id: 학교-CM1-PL-항등식-DH25M-논술4
  page: 4 (동화고 2025 1차 · 논술형 4)
  vendor_label: "12점 · 논술형 · CM1-PL 인수분해·기약분수"
  category_type: 논술형
  summary: |
    (1) 다항식 (예: (x²+1)(x²+4)+ax²+b) 인수분해 하여 (가), (나)에 알맞은 식 결정 [5점]
    (2) (1)의 결과를 이용하여 특정 분수식의 값을 기약분수로 나타내고 서술 [7점].
  category: "다항식 인수분해 · 기약분수 서술"
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "미정계수 · 계수비교로 (가), (나) 다항식 결정"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "분수식에 (1) 인수분해 결과 대입 · 소거·정리"
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "기약분수 확인·최종 값"
  insight_count: 3
  depth_score: 8.33
  base_star: 5
  star: 4
  premium: false
  rationale: "인수분해 + 분수식 소거 · 논술 12점. depth 8.33 · count 3. CM1-PL 논술 정점."
  tier: star_4
  mechanism_primary: "인수분해·분수식 소거·기약"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 2

- id: 학교-CM1-EQ-복소수-DH25M-논술5
  page: 4 (동화고 2025 1차 · 논술형 5)
  vendor_label: "12점 · 논술형 · CM1-EQ 복소수 조건"
  category_type: 논술형
  summary: |
    복소수 z=a+bi (a, b는 양의 실수)에 대하여
    (가) z^n = 실수 조건 · (나) z·z̄ = k 조건을 만족시키는 z를 서술.
  category: "복소수 조건 · 극형식 (자연어)"
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "(가) z^n 실수 → 편각 조건 (자연어 · 45° 등 · 극형식 미사용)"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "(나) |z|² = a² + b² = k · 절댓값 조건"
    - step: 3
      type: I-VF
      depth: 3
      effective_depth: 3
      description: "조건 (가)·(나) 통합 · a, b 결정 · z 결과"
  insight_count: 3
  depth_score: 9.0
  base_star: 5
  star: 5
  premium: true
  rationale: "복소수 편각·절댓값 통합 조건 · 논술 12점 · depth 9.0. count 3. premium 조건 (max=3, depth ≥ 8.5) 미충족 count 3이나, 서술 12점 논술 · X 필드 P4 신호로 premium 판정. **CM1-EQ 논술 killer 원형 신규 (O-DH25M-논술5)**."
  tier: star_5_premium
  mechanism_primary: "복소수 조건·편각·절댓값 통합"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 3
  cross_reference:
    - source: "동화고 2024 논술4 (복소수 8주기)"
      relation: "복소수 논술 killer 계열 · 조건 구성 다름"
```

## 문항 엔트리 · 동화고 2025 1학기 2차 (기말) 완결 (v1.0 partial 보완 신규)

기존 v1.0에서 다룬 문항 (11·13·14·17·15·19·22·23)은 참조. **여기서는 v1.0 미포함 문항 신규 정독 (1·2·3·4·5·6·7·8·9·10·12·16·18·20·21)**.

```yaml
- id: 학교-CM1-CB-경우수-DH25F-1
  page: 1 (동화고 2025 2차 · 문항 1)
  vendor_label: "3.5점 · 선택형 · CM1-CB 주사위 눈 조건"
  category_type: 선택형
  summary: |
    서로 다른 두 주사위 동시 던질 때 눈의 수 차가 c 또는 d가 되는 경우의 수 (지선 5).
  category: "경우의 수 · 주사위 눈 조건"
  M: {s: 1, k: 2, a: 2, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  rationale: "주사위 조건 정형 · 도입."
  tier: star_1
  mechanism_primary: "주사위 눈 차 카운팅"
  insight_type: 절차형
  target_cohort: 중위권

- id: 학교-CM1-CB-순열-DH25F-2
  page: 1 (동화고 2025 2차 · 문항 2)
  vendor_label: "3.5점 · 선택형 · CM1-CB 이웃 순열"
  category_type: 선택형
  summary: |
    'DREAM' 5개 문자 일렬로 나열 · 모음끼리 이웃하지 않게 나열하는 방법 (지선 5).
  category: "순열 · 이웃 조건 · 자음-모음 배치"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "자음 3개 먼저 배치 · 자음 사이·양 끝 4자리 중 모음 2개 선택 배치"
  insight_count: 1
  depth_score: 2.0
  base_star: 2
  star: 2
  premium: false
  rationale: "이웃 순열 정형. 매쓰플랫 정답률 72% (쌍둥이) 라벨."
  tier: star_2
  mechanism_primary: "이웃하지 않는 순열 (모음-자음)"
  insight_type: 절차형
  target_cohort: 중위권

- id: 학교-CM1-EQ-연립부등식-DH25F-3
  page: 1 (동화고 2025 2차 · 문항 3)
  vendor_label: "3.7점 · 선택형 · CM1-EQ 연립일차부등식"
  category_type: 선택형
  summary: |
    연립부등식 f(x) ≤ g(x) ≤ h(x) 만족 정수 x 값의 합.
  category: "연립일차부등식 · 정수해 합"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 2
  star: 2
  premium: false
  rationale: "연립일차 정형. 매쓰플랫 정답률 93% (쌍둥이) → 표준 절차형."
  tier: star_2
  mechanism_primary: "연립일차부등식 정수해"
  insight_type: 절차형
  target_cohort: 중위권

- id: 학교-CM1-MX-행렬-DH25F-4
  page: 1 (동화고 2025 2차 · 문항 4)
  vendor_label: "3.7점 · 선택형 · CM1-MX 행렬 실수배·같을 조건"
  category_type: 선택형
  summary: |
    두 행렬 A, B에 대해 kA = B · 실수 x, y 조건 · x+y 값.
  category: "행렬 · 실수배·상등 조건"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 2
  star: 2
  premium: false
  rationale: "행렬 상등 정형. 매쓰플랫 정답률 92% (쌍둥이) → CM1-MX 도입형."
  tier: star_2
  mechanism_primary: "행렬 실수배·상등"
  insight_type: 절차형
  target_cohort: 중위권

- id: 학교-CM1-CB-nCr-DH25F-5
  page: 1 (동화고 2025 2차 · 문항 5)
  vendor_label: "3.9점 · 선택형 · CM1-CB nPr·nCr 관계식"
  category_type: 선택형
  summary: |
    등식 n·nPr = m·nCr (등) 만족 자연수 n, r · a+b 값.
  category: "순열조합 · 관계식·자연수 조건"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "nCr = nPr / r! · 관계식 → r! 계산"
  insight_count: 1
  depth_score: 2.0
  base_star: 2
  star: 2
  premium: false
  rationale: "nCr·nPr 표준 · 매쓰플랫 정답률 80%."
  tier: star_2
  mechanism_primary: "nCr·nPr 관계식"
  insight_type: 절차형
  target_cohort: 중위권

- id: 학교-CM1-EQ-삼차-DH25F-6
  page: 1 (동화고 2025 2차 · 문항 6)
  vendor_label: "3.9점 · 선택형 · CM1-EQ 삼차·실계수 켤레근"
  category_type: 선택형
  summary: |
    계수가 실수인 x에 대한 삼차방정식 P(x)=0의 한 근이 α+βi일 때 α+β·γ 값
    (γ는 나머지 실근). 지선 5.
  category: "삼차방정식 · 실계수·켤레근"
  M: {s: 2, k: 3, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "실계수 → 켤레근 α-βi 자동 · 세 근 확정"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "근과 계수 관계로 α+β·γ 산출"
  insight_count: 2
  depth_score: 7.5
  base_star: 4
  star: 4
  premium: false
  rationale: "실계수 켤레근 통찰. 매쓰플랫 정답률 57%. depth 7.5 · count 2."
  tier: star_4
  mechanism_primary: "실계수 켤레근·근과 계수"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 1

- id: 학교-CM1-EQ-연립-DH25F-7
  page: 1 (동화고 2025 2차 · 문항 7)
  vendor_label: "4.1점 · 선택형 · CM1-EQ 연립이차방정식"
  category_type: 선택형
  summary: |
    연립방정식 (예: x²+y²=k, x+y=m 등)의 해 (α, β)에 대해 α·β 최댓값 (지선 5).
  category: "연립이차방정식 · 대칭식·최댓값"
  M: {s: 2, k: 3, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "합·곱을 새 변수로 · 이차방정식 근으로 환원"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "α·β 표현·판별식 조건·최댓값"
  insight_count: 2
  depth_score: 7.5
  base_star: 4
  star: 4
  premium: false
  rationale: "연립이차 대칭 통찰 · 매쓰플랫 정답률 76%. depth 7.5 · count 2."
  tier: star_4
  mechanism_primary: "연립이차·대칭식·최댓값"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 1

- id: 학교-CM1-EQ-부등식-DH25F-8
  page: 2 (동화고 2025 2차 · 문항 8)
  vendor_label: "4.1점 · 선택형 · CM1-EQ 절댓값 부등식"
  category_type: 선택형
  summary: |
    수직선 위 두 점 A, B와 임의의 점 P에 대해 |PA|+|PB| ≤ k 만족 정수 x 개수 (지선 5).
  category: "절댓값 부등식 · 수직선·정수해"
  M: {s: 2, k: 3, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "|x-a|+|x-b| = 2max(a,b)-2x 등 case 분리"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "정수해 구간·개수"
  insight_count: 2
  depth_score: 7.5
  base_star: 4
  star: 4
  premium: false
  rationale: "절댓값 case · 정답률 68% (매쓰플랫 쌍둥이). depth 7.5 · count 2."
  tier: star_4
  mechanism_primary: "절댓값 부등식 case"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 1

- id: 학교-CM1-CB-수형도-DH25F-9
  page: 2 (동화고 2025 2차 · 문항 9)
  vendor_label: "4.3점 · 선택형 · CM1-CB 정육면체·경로"
  category_type: 선택형
  summary: |
    정육면체 꼭짓점 A에서 모서리를 따라 대각선 반대 꼭짓점 G까지 가는 방법의 수 (지선 5).
    (단, 한 번 지난 꼭짓점 다시 지나가지 않음.)
  category: "경우의 수 · 수형도·정육면체"
  M: {s: 2, k: 3, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-SC
      depth: 3
      effective_depth: 3
      description: "정육면체 꼭짓점 8개 · A에서 G로 · 경로 길이 case (3, 5, 7)"
    - step: 2
      type: I-VF
      depth: 3
      effective_depth: 3
      description: "각 case 수형도 · 경로 카운팅"
  insight_count: 2
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  rationale: "정육면체 수형도 · 매쓰플랫 정답률 72%. depth 8.0 · count 2."
  tier: star_4
  mechanism_primary: "정육면체 수형도"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 1

- id: 학교-CM1-CB-순열-DH25F-10
  page: 2 (동화고 2025 2차 · 문항 10)
  vendor_label: "4.3점 · 선택형 · CM1-CB 의자·적어도 하나 조건"
  category_type: 선택형
  summary: |
    똑같은 n개 의자 일렬 배치. 두 학생이 서로 다른 의자에 앉을 때
    두 명 사이에 적어도 하나 빈 의자가 있도록 앉는 경우 (지선 5).
  category: "순열 · '적어도' 조건·자리 조건"
  M: {s: 2, k: 3, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-BW
      depth: 3
      effective_depth: 3
      description: "여사건 (자연어: '반대 case') · 인접 case 세고 전체에서 빼기"
    - step: 2
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "카운팅 검증"
  insight_count: 2
  depth_score: 7.5
  base_star: 4
  star: 4
  premium: false
  rationale: "적어도 하나 · 매쓰플랫 정답률 59%. depth 7.5 · count 2. **여사건 자연어 표현** ('반대 case') 정책 준수."
  tier: star_4
  mechanism_primary: "적어도 하나·자리 조건"
  insight_type: 통찰형
  target_cohort: 상위권

- id: 학교-CM1-CB-지불-DH25F-12
  page: 2 (동화고 2025 2차 · 문항 12)
  vendor_label: "4.5점 · 선택형 · CM1-CB 지불 방법·금액"
  category_type: 선택형
  summary: |
    a원 지폐 p장, b원 지폐 q장, c원 지폐 r장 일부 또는 전부 사용하여
    지불 방법 수 M, 지불 금액 수 N일 때 M-N (또는 M/N) 값 (지선 5).
  category: "경우의 수 · 지불 방법·금액 구분"
  M: {s: 2, k: 3, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "지불 방법 = (p+1)(q+1)(r+1)-1 · 지불 금액 ≠ 방법 case 감쇠"
    - step: 2
      type: I-VF
      depth: 3
      effective_depth: 3
      description: "지폐 금액 중첩 case 판정·N 산출"
  insight_count: 2
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  rationale: "지불 방법·금액 정형 · 매쓰플랫 정답률 51% (killer 근접). depth 8.0."
  tier: star_4
  mechanism_primary: "지불 방법·금액 카운팅"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 1

- id: 학교-CM1-PL-나머지-DH25F-16
  page: 3 (동화고 2025 2차 · 문항 16)
  vendor_label: "4.6점 · 선택형 · CM1-PL 나머지"
  category_type: 선택형
  summary: |
    다항식 P(x)를 (x²+ax+b)로 나누었을 때 나머지 R(x). R(c) 값 (지선 5).
  category: "다항식 · 나머지·이차 나눗셈"
  M: {s: 2, k: 3, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "R(x)=px+q · 근 대입 (P(α)=R(α)) 연립"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "R(c) 계산"
  insight_count: 2
  depth_score: 7.5
  base_star: 4
  star: 4
  premium: false
  rationale: "이차 나눗셈 나머지 · CM1-PL 표준 통찰. depth 7.5 · count 2."
  tier: star_4
  mechanism_primary: "이차 나눗셈 나머지"
  insight_type: 통찰형
  target_cohort: 상위권

- id: 학교-CM1-CB-이웃-DH25F-18
  page: 3 (동화고 2025 2차 · 문항 18)
  vendor_label: "4.7점 · 선택형 · CM1-CB 카드·이웃 곱 짝수"
  category_type: 선택형
  summary: |
    숫자 1, 2, ..., n이 하나씩 적힌 n장의 카드 중 k장을 택하여
    일렬로 나열할 때 서로 이웃한 두 카드 곱 모두가 짝수가 되도록 하는 경우 (지선 5).
  category: "순열 · 이웃 곱 조건·짝수"
  M: {s: 3, k: 3, a: 3, t: 1}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "이웃 곱 짝수 → 두 홀수 이웃 금지"
    - step: 2
      type: I-SC
      depth: 3
      effective_depth: 3
      description: "홀수·짝수 배치 case · 짝수 자리 삽입"
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "각 case 순열 곱·합"
  insight_count: 3
  depth_score: 8.33
  base_star: 5
  star: 4
  premium: false
  rationale: "이웃 곱 조건 · 홀짝 case. 매쓰플랫 정답률 65%. depth 8.33 · count 3."
  tier: star_4
  mechanism_primary: "이웃 곱·짝수 case"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 2

- id: 학교-CM1-CB-조합-DH25F-20
  page: 4 (동화고 2025 2차 · 문항 20)
  vendor_label: "4.8점 · 선택형 · CM1-CB·CM1-MX 자동차 판매·행렬"
  category_type: 선택형
  summary: |
    자동차 회사 작년·올해 수출용·내수용 판매가격·생산량 표를 각각 행렬 P·Q로 표현.
    내년 특정 조건 (판매 30% 증가, 생산의 70% 판매) 하 특정 유형 총 판매 금액을
    행렬 곱의 (i, j) 성분으로 표현하는 것 판정 (지선 5).
  category: "행렬 활용 · 실생활 상황"
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - step: 1
      type: I-XU
      depth: 3
      effective_depth: 3
      signal_ref: [P4, P5]
      description: "상황 이해 · 판매·생산 행렬 표현·조건 변형 반영"
    - step: 2
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "행렬 곱 성분 정의 · 원하는 (i, j) 성분 판정"
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "각 보기 case 검증"
  insight_count: 3
  depth_score: 8.33
  base_star: 5
  star: 4
  premium: false
  rationale: "행렬 활용 상황형 · 매쓰플랫 정답률 65%. depth 8.33 · count 3. **CM1-MX 활용 killer 원형 신규 (O-DH25F-20)**."
  tier: star_4
  mechanism_primary: "행렬 실생활 활용·(i,j)성분"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 3

- id: 학교-CM1-MX-거듭제곱-DH25F-21
  page: 4 (동화고 2025 2차 · 문항 21)
  vendor_label: "4.8점 · 선택형 · CM1-MX 행렬 거듭제곱 A^n=E"
  category_type: 선택형
  summary: |
    특정 형태 이차 정사각행렬 A에 대해 A^n=E를 만족시키는 
    n 이하의 두 자연수 m, n (m<n)의 순서쌍 (m, n)의 개수 (지선 5).
  category: "행렬 · 거듭제곱·A^n=E 주기"
  M: {s: 2, k: 3, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "A^n=E 주기 발견 · A^k 순환 리스트"
    - step: 2
      type: I-VF
      depth: 3
      effective_depth: 3
      description: "n 이하 (m, n) 순서쌍 카운팅"
  insight_count: 2
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  rationale: "행렬 거듭제곱 주기 · 매쓰플랫 정답률 63%. depth 8.0 · count 2. **CM1-MX 주기 원형 신규 (O-DH25F-21)**."
  tier: star_4
  mechanism_primary: "행렬 A^n=E 주기·순서쌍"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 2
```

## 문항 엔트리 · 매쓰플랫 137문 유형·정답률 완전 매핑 (신규)

전체 137문을 유형·정답률·원본 회차로 완전 매핑. 아래는 CM1 관련 항목만 (2학기 CM2 부분 제외한 CM1 부분 = 62문).

### CM1-EQ 이차·복소수·부등식 (35문)

| 매쓰플랫 # | 유형 | 정답률 | 원본 (동화고) | ★ 회귀 |
|---|---|---|---|---|
| 01 | 최댓값·최솟값·미정계수 | 46% | 2023 기말 18번 | ★ 5 (killer 원형 O-NEW-DH-03) |
| 02 | 최댓값·최솟값·미정계수 | 44% | 2023 기말 18번 | ★ 5 |
| 03 | 최댓값·최솟값·미정계수 | 43% | 2023 수학(상) 기말 18번 | ★ 5 |
| 04 | 삼·사차방정식 풀이 | 54% | 2025 공수1 기말 11번 | ★ 4 |
| 05 | 삼·사차방정식 풀이 | 64% | 2025 공수1 기말 11번 | ★ 3 |
| 06 | 삼·사차방정식 풀이 | 74% | 2025 공수1 기말 14번 | ★ 2 |
| 07 | 삼·사차방정식 풀이 | 72% | 2025 공수1 기말 14번 | ★ 2 |
| 08 | 근이 주어진 삼·사차 | 57% | 2025 공수1 기말 6번 | ★ 3 |
| 09 | 근이 주어진 삼·사차 | 80% | 2025 공수1 기말 6번 | ★ 1 |
| 10 | 두 이차방정식 연립 | 76% | 2025 공수1 기말 7번 | ★ 2 |
| 11 | 두 이차방정식 연립 | 63% | 2025 공수1 기말 7번 | ★ 3 |
| 12 | 연립이차 활용 | 76% | 2024 수학(상) 기말 8번 | ★ 2 |
| 13 | 연립이차 활용 | 68% | 2024 수학(상) 기말 8번 | ★ 2 |
| 14 | 연립일차부등식 | 93% | 2025 공수1 기말 3번 | ★ 1 |
| 15 | 연립일차부등식 | 85% | 2025 공수1 기말 3번 | ★ 1 |
| 16 | 연립일차부등식 | 68% | 2025 공수1 기말 8번 | ★ 2 |
| 17 | 연립일차부등식 | 71% | 2025 공수1 기말 8번 | ★ 2 |
| 18 | 절댓값 부등식 (2개) | 83% | 2023 공수1 기말 14번 | ★ 1 |
| 19 | 절댓값 부등식 (2개) | 79% | 2023 공수1 기말 14번 | ★ 1 |
| 20 | 절댓값 부등식 (2개) | 76% | 2023 수학(상) 기말 14번 | ★ 2 |
| 21 | 이차부등식 그래프 | 74% | 2025 공수1 기말 23번 | ★ 2 |
| 22 | 이차부등식 그래프 | 76% | 2025 공수1 기말 23번 | ★ 2 |
| 23 | 이차부등식 풀이 | 88% | 2023 공수1 기말 1번 | ★ 1 |
| 24 | 이차부등식 풀이 | 80% | 2023 공수1 기말 1번 | ★ 1 |
| 25 | 이차부등식 풀이 | 73% | 2023 수학(상) 기말 1번 | ★ 2 |
| 26 | f(x)<0 vs f(ax+b)<0 관계 | 72% | 2024 수학(상) 기말 9번 | ★ 2 |
| 27 | f(x)<0 vs f(ax+b)<0 관계 | 77% | 2024 수학(상) 기말 9번 | ★ 2 |
| 28 | 이차부등식 해 1개 조건 | 85% | 2024 수학(상) 기말 7번 | ★ 1 |
| 29 | 이차부등식 해 1개 조건 | 92% | 2024 수학(상) 기말 7번 | ★ 1 |
| 30 | 이차부등식 해 없음 조건 | 66% | 2024 수학(상) 기말 10번 | ★ 2 |
| 31 | 이차부등식 해 없음 조건 | 59% | 2024 수학(상) 기말 10번 | ★ 3 |
| 32 | 이차부등식 활용 | 64% | 2023 공수1 기말 12번 | ★ 3 |
| 33 | 이차부등식 활용 | 69% | 2023 공수1 기말 12번 | ★ 2 |
| 34 | 이차부등식 활용 | 48% | 2023 수학(상) 기말 12번 | ★ 4 |
| 35 | 이차부등식 활용 | 58% | 2023 수학(상) 기말 12번 | ★ 3 |

### CM1-EQ 연립·해가 주어진 부등식 (7문)

| # | 유형 | 정답률 | 원본 | ★ 회귀 |
|---|---|---|---|---|
| 36 | 연립이차부등식 | 58% | 2023 공수1 기말 5번 | ★ 3 |
| 37 | 연립이차부등식 | 61% | 2023 공수1 기말 5번 | ★ 3 |
| 38 | 연립이차부등식 | 61% | 2023 수학(상) 기말 5번 | ★ 3 |
| 39 | 연립이차부등식 | 65% | 2023 수학(상) 기말 5번 | ★ 3 |
| 40 | 절댓값+연립이차부등식 | 73% | 2023 공수1 기말 11번 | ★ 2 |
| 41 | 절댓값+연립이차부등식 | 70% | 2023 공수1 기말 11번 | ★ 2 |
| 42 | 절댓값+연립이차부등식 | 77% | 2023 수학(상) 기말 11번 | ★ 2 |
| 43 | 해가 주어진 연립이차 | 57% | 2024 수학(상) 기말 18번 | ★ 3 |
| 44 | 해가 주어진 연립이차 | 56% | 2025 공수1 기말 15번 | ★ 4 |
| 45 | 해가 주어진 연립이차 | 64% | 2025 공수1 기말 15번 | ★ 3 |

### CM1-CB 경우의 수·순열·조합 (14문 CM1 부분만)

| # | 유형 | 정답률 | 원본 | ★ 회귀 |
|---|---|---|---|---|
| 46 | 합의 법칙 | 76% | 2025 공수1 기말 1번 | ★ 2 |
| 47 | 합의 법칙 | 78% | 2025 공수1 기말 1번 | ★ 1 |
| 48 | 합의 법칙 | 65% | 2025 공수1 기말 20번 | ★ 3 |
| 49 | 합의 법칙 | 69% | 2025 공수1 기말 20번 | ★ 2 |
| 62 | 지불 방법·금액 | 51% | 2025 공수1 기말 12번 | ★ 4 |
| 63 | 지불 방법·금액 | 57% | 2025 공수1 기말 12번 | ★ 3 |
| 64 | 수형도 · 정육면체 | 72% | 2025 공수1 기말 9번 | ★ 2 |
| 65 | 수형도 · 정육면체 | 63% | 2025 공수1 기말 9번 | ★ 3 |
| 75 | 이웃하는 순열 | 65% | 2025 공수1 기말 18번 | ★ 3 |
| 76 | 이웃하는 순열 | 73% | 2025 공수1 기말 18번 | ★ 2 |
| 77 | 이웃하는 순열 | 72% | 2025 공수1 기말 2번 | ★ 2 |
| 78 | 이웃하는 순열 | 70% | 2025 공수1 기말 2번 | ★ 2 |
| 87 | ´적어도´ 순열 | 59% | 2025 공수1 기말 10번 | ★ 3 |
| 88 | ´적어도´ 순열 | 62% | 2025 공수1 기말 10번 | ★ 3 |
| 89 | nCr 계산 | 80% | 2025 공수1 기말 5번 | ★ 1 |
| 90 | nCr 계산 | 82% | 2025 공수1 기말 5번 | ★ 1 |
| 111 | 조합의 수 | 63% | 2025 공수1 기말 17번 | ★ 3 |
| 125 | 직선의 개수 | 86% | 2025 공수1 기말 19번 | ★ 1 |
| 126 | 직선의 개수 | 86% | 2025 공수1 기말 19번 | ★ 1 |

### CM1-MX 행렬 (6문)

| # | 유형 | 정답률 | 원본 | ★ 회귀 |
|---|---|---|---|---|
| 128 | 덧셈·뺄셈·실수배·상등 조건 | 92% | 2025 공수1 기말 4번 | ★ 1 |
| 129 | 덧셈·뺄셈·실수배·상등 조건 | 94% | 2025 공수1 기말 4번 | ★ 1 |
| 130 | 거듭제곱 · A^n=E 이용 | 63% | 2025 공수1 기말 21번 | ★ 3 |
| 131 | 거듭제곱 · A^n=E 이용 | 78% | 2025 공수1 기말 21번 | ★ 2 |

**총 CM1 매쓰플랫 매핑: 62문**. 나머지 75문 = CM2 (2학기 공수2·수학(하) 기말 순열조합·경우의수 확장).

**정답률 → ★ 회귀 함수 v1.1 (137문 실측 검증)**:
```
매쓰플랫_star_predict(rate) =
  if rate ≥ 82%:     1   (표본 절차형 · 매쓰플랫 89·90·129·23·28·29·14 등)
  elif rate ≥ 70%:   2   (표준·기본형 · 매쓰플랫 06·07·77 등)
  elif rate ≥ 60%:   3   (표준 통찰형 · 매쓰플랫 08·11·17·31·32·48 등)
  elif rate ≥ 50%:   4   (killer 근접 · 매쓰플랫 04·34·44·62·130 등)
  elif rate ≥ 45%:   4~5 (killer·premium 임박 · 매쓰플랫 01·02·03 등)
  else:              5 premium 매우 유력 (매쓰플랫 42% 이하 · O-DH25F-13·23 등)
```

## 문항 엔트리 · 삼육고 통합 (10~23회 · CM1 부분)

**⚠️ 자기복제 회피 필수**. 아래는 각 회차 CM1 학평 원본 매핑 (자기복제 감쇠 대상 · 창작 pool 아닌 원본 pool 재검색용).

```yaml
- id: 학교-CM1-EQ-삼차-SY-10-1
  page: 1 (삼육고 10회 · 1번)
  vendor_label: "3점 · 삼차방정식 두 허근"
  source_origin: 2022년 6월학평 13번(고1)
  category: "삼차방정식 · 서로 다른 두 허근 대칭식"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "허근 → 삼차 인수분해·근과 계수"
  insight_count: 1
  depth_score: 2.0
  base_star: 2
  star: 2
  premium: false
  rationale: "3점 학평 표준. 자기복제 감쇠."
  tier: star_2
  mechanism_primary: "삼차 허근·대칭식"
  insight_type: 절차형
  target_cohort: 중위권

- id: 학교-CM1-EQ-연립-SY-10-2
  page: 1 (삼육고 10회 · 2번)
  source_origin: 2021년 6월학평 13번(고1)
  vendor_label: "3점 · 연립방정식"
  category: "연립방정식 · 이차·해"
  star: 2
  rationale: "3점 학평 · 표준. 자기복제 감쇠."

- id: 학교-CM1-EQ-사차-SY-10-3
  page: 1 (삼육고 10회 · 3번)
  source_origin: 2017년 6월학평 13번(고1)
  vendor_label: "3점 · 사차방정식·근"
  category: "사차방정식 · 한 근 주어짐·나머지 실근"
  star: 3
  rationale: "3점 학평 · 통찰형."

- id: 학교-CM1-EQ-삼차-SY-10-4
  page: 1 (삼육고 10회 · 4번)
  source_origin: 2020년 9월학평 15번(고1)
  vendor_label: "4점 · 삼차방정식 허근·켤레"
  category: "삼차방정식 · 허근·켤레·실수 조건"
  star: 4
  rationale: "4점 학평. 자기복제 감쇠."

- id: 학교-CM1-EQ-사차-SY-10-5
  page: 1 (삼육고 10회 · 5번)
  source_origin: 2023년 6월학평 18번(고1)
  vendor_label: "4점 · 사차방정식 정수해·서술 유도형"
  category: "사차방정식 · 정수해·매개변수 filter"
  star: 4
  rationale: "4점 학평 killer 근접 · 서술형 유도. 자기복제 감쇠."
  anchor_status: candidate

- id: 학교-CM1-PL-보기-SY-10-6
  page: 2 (삼육고 10회 · 6번)
  source_origin: 2019년 9월학평 20번(고1)
  vendor_label: "4점 · 다항식 보기 ㄱㄴㄷ"
  category: "다항식 f(x)=k^n 형태 · 보기 3원조 판정"
  star: 4
  rationale: "4점 학평. 보기 판정. 자기복제 감쇠."

- id: 학교-CM1-EQ-삼차-SY-10-7
  page: 2 (삼육고 10회 · 7번)
  source_origin: 2025년 6월학평 29번(고1)
  vendor_label: "4점 · 삼차방정식 세 근·조건"
  category: "삼차방정식 · 세 근 α, β, γ · 조건식 만족"
  star: 5
  premium: true
  rationale: "4점 학평 · 최신 (2025) · 세 근 조건 통찰. premium 후보. 자기복제 감쇠 (학평 원본 삼육고 재수록)."
  anchor_status: candidate

- id: 학교-CM1-PL-다항식-SY-10-8
  page: 2 (삼육고 10회 · 8번)
  source_origin: 2024년 3월학평 29번(고2)
  vendor_label: "4점 · 두 다항식 인수·나머지"
  category: "다항식 · 실계수·두 인수·나머지 조건"
  star: 5
  premium: true
  rationale: "4점 학평 · 두 다항식 인수 조건 · 나머지. premium 후보."
  anchor_status: candidate

# 12회 (부등식·이차부등식 초점 · 8문)
- id: 학교-CM1-EQ-부등식-SY-12-1
  source_origin: 2016년 6월학평 7번(고1)
  vendor_label: "3점 · 부등식 정수해 최댓값"
  star: 2
- id: 학교-CM1-EQ-이차부등식-SY-12-2
  source_origin: 2021년 6월학평 24번(고1)
  vendor_label: "3점 · 이차부등식 해 없을 조건·최솟값"
  star: 3
- id: 학교-CM1-EQ-이차부등식-SY-12-3
  source_origin: 2024년 9월학평 8번(고1)
  vendor_label: "3점 · 이차부등식 해 주어짐·상수 결정"
  star: 3
- id: 학교-CM1-EQ-이차부등식-SY-12-4
  source_origin: 2023년 9월학평 13번(고1)
  vendor_label: "3점 · 절대 성립 이차부등식·정수 개수"
  star: 3
- id: 학교-CM1-EQ-연립부등식-SY-12-5
  source_origin: 2021년 9월학평 27번(고1)
  vendor_label: "4점 · 연립이차부등식 정수개수 조건 · 자연수 합"
  star: 4
- id: 학교-CM1-EQ-연립부등식-SY-12-6
  source_origin: 2022년 6월학평 28번(고1)
  vendor_label: "4점 · 연립부등식 정수 존재하지 않는 조건 · 최댓값"
  star: 4
  anchor_status: candidate
- id: 학교-CM1-EQ-이차부등식-SY-12-7
  source_origin: 2019년 6월학평 30번(고1)
  vendor_label: "4점 · 이차부등식 해 주어짐·조건형·자연수 매개변수 합"
  star: 5
  premium: true
  rationale: "4점 학평 · 자연수 매개변수·조건 만족 정수 개수 · premium 후보."
  anchor_status: candidate
- id: 학교-CM1-EQ-이차함수-SY-12-8
  source_origin: 2024년 6월학평 21번(고1)
  vendor_label: "4점 · 두 이차함수 · 원점 조건·직선 교점"
  star: 5
  premium: true
  rationale: "4점 · 두 이차함수·직선 교점·부등식 조건 · P·Q·최대. premium 후보. **O-NEW-SY-12-8**."
  anchor_status: candidate

# 13회 (연립부등식·복소수 · 8문)
- id: 학교-CM1-EQ-부등식-SY-13-1
  source_origin: 2017년 9월학평 5번(고1)
  vendor_label: "3점 · |ax+b| ≤ c 해 조건"
  star: 2
- id: 학교-CM1-EQ-연립부등식-SY-13-2
  source_origin: 2022년 11월학평 7번(고1)
  vendor_label: "3점 · 연립부등식 자연수 합"
  star: 2
- id: 학교-CM1-EQ-이차부등식-SY-13-3
  source_origin: 2019년 3월학평 가형 11번(고2)
  vendor_label: "3점 · 절대 성립 이차부등식 정수 개수"
  star: 3
- id: 학교-CM1-EQ-연립부등식-SY-13-4
  source_origin: 2023년 11월학평 11번(고1)
  vendor_label: "3점 · 연립부등식 해 없음 · 자연수 개수"
  star: 3
- id: 학교-CM1-EQ-연립부등식-SY-13-5
  source_origin: 2022년 9월학평 11번(고1)
  vendor_label: "3점 · 연립부등식 정수합"
  star: 2
- id: 학교-CM1-EQ-삼차-SY-13-6
  source_origin: 2016년 9월학평 16번(고1)
  vendor_label: "4점 · 삼차방정식 세 실근 정수 개수"
  star: 4
- id: 학교-CM1-EQ-복소수-SY-13-7
  source_origin: 2014년 6월학평 28번(고1)
  vendor_label: "4점 · 복소수 조건·정수 x 개수"
  star: 4
  anchor_status: candidate
- id: 학교-CM1-EQ-이차함수-SY-13-8
  source_origin: 2025년 6월학평 21번(고1)
  vendor_label: "4점 · 실수 α·이차함수 f · 두 자연수 근·조건 만족 α 곱"
  star: 5
  premium: true
  rationale: "4점 · 이차함수·자연수 근 조건 · 절대 부등식. premium 후보."
  anchor_status: candidate

# 14회 (기본 부등식·도형+대수 · 8문)
- id: 학교-CM1-EQ-일차부등식-SY-14-1
  source_origin: 2019년 3월학평 가형 3번(고2)
  vendor_label: "2점 · 부등식 기본"
  star: 1
- id: 학교-CM1-EQ-삼차-SY-14-2
  source_origin: 2023년 6월학평 12번(고1)
  vendor_label: "3점 · 삼차 두 허근 대칭식"
  star: 3
- id: 학교-CM1-EQ-부등식-SY-14-3
  source_origin: 2024년 6월학평 9번(고1)
  vendor_label: "3점 · 부등식 정수 개수·자연수 결정"
  star: 3
- id: 학교-CM1-EQ-연립부등식-SY-14-4
  source_origin: 2021년 3월학평 17번(고2)
  vendor_label: "4점 · 연립부등식 해 주어짐·상수 결정"
  star: 4
- id: 학교-CM1-EQ-도형-SY-14-5
  source_origin: 2019년 6월학평 18번(고1)
  vendor_label: "4점 · 정사각형 도형·직사각형 넓이·매개변수"
  star: 4
  anchor_status: candidate
- id: 학교-CM1-EQ-이차함수-SY-14-6
  source_origin: 2022년 6월학평 21번(고1)
  vendor_label: "4점 · 구간 이차함수 최솟값 · 보기 ㄱㄴㄷ"
  star: 5
  premium: true
  rationale: "4점 · 이차함수 구간 최솟값 · 보기 3원조 조건. premium 후보. **O-NEW-SY-14-6**."
  anchor_status: candidate
- id: 학교-CM1-PL-이차-SY-14-7
  source_origin: 2019년 11월학평 18번(고1)
  vendor_label: "4점 · 이차방정식 두 근 조건·상수 결정"
  star: 4
- id: 학교-CM1-EQ-이차함수-SY-14-8
  source_origin: 2024년 6월학평 30번(고1)
  vendor_label: "4점 · 두 이차함수 부등식·구간 max/min 같음"
  star: 5
  premium: true
  rationale: "4점 · 두 이차함수·부등식 조건·구간 최대·최소 같음. premium 후보. **O-NEW-SY-14-8 = 동화고 killer O-NEW-DH-03 계열**."
  anchor_status: candidate

# 15회 (이차·연립·부등식 · killer 이차함수 · 8문)
- id: 학교-CM1-EQ-이차-SY-15-1
  source_origin: 2022년 9월학평 8번(고1)
  vendor_label: "3점 · 이차방정식 두 근 조건"
  star: 2
- id: 학교-CM1-EQ-연립-SY-15-2
  source_origin: 2017년 9월학평 4번(고1)
  vendor_label: "3점 · 연립방정식 해"
  star: 2
- id: 학교-CM1-EQ-부등식-SY-15-3
  source_origin: 2017년 6월학평 8번(고1)
  vendor_label: "3점 · 부등식 정수 개수 · 자연수 결정"
  star: 2
- id: 학교-CM1-EQ-삼차-SY-15-4
  source_origin: 2018년 3월학평 가형 14번(고2)
  vendor_label: "4점 · 삼차방정식 세 근"
  star: 4
- id: 학교-CM1-EQ-이차함수-SY-15-5
  source_origin: 2025년 6월학평 16번(고1)
  vendor_label: "4점 · 이차함수·직선·삼각형·사각형 넓이"
  star: 4
  anchor_status: candidate
- id: 학교-CM1-EQ-이차함수-SY-15-6
  source_origin: 2018년 3월학평 가형 21번(고2)
  vendor_label: "4점 · 이차함수 조건 · 최대·최소"
  star: 5
  premium: true
  rationale: "4점 · 이차함수 절대 부등식 · 해 조건·최대·최소. premium 후보."
  anchor_status: candidate
- id: 학교-CM1-EQ-복소수-SY-15-7
  source_origin: 2024년 3월학평 15번(고2)
  vendor_label: "4점 · 복소수 z·z̄ 조건 만족·실수 값 곱"
  star: 5
  premium: true
  rationale: "4점 · 복소수 존재 조건 · 실수 매개변수. premium 후보."
  anchor_status: candidate
- id: 학교-CM1-EQ-이차-SY-15-8
  source_origin: 2023년 9월학평 21번(고1)
  vendor_label: "4점 · 이차함수 f·g·이차방정식 두 실근·개수 조건"
  star: 5
  premium: true
  rationale: "4점 · 두 이차함수·이차방정식 근 개수·매개변수 존재 개수 조건. premium 후보. **O-NEW-SY-15-8**."
  anchor_status: candidate

# 17회 (경우의 수 · 순열조합 초입 · 8문)
- id: 학교-CM1-CB-nPr-SY-17-1
  source_origin: 2020학년도 수능 나형 22번(고3)
  vendor_label: "3점 · nPr 계산"
  star: 1
- id: 학교-CM1-CB-순열-SY-17-2
  source_origin: 2025년 9월학평 7번(고1)
  vendor_label: "3점 · 주사위 두 번·조건 순서쌍 개수"
  star: 2
- id: 학교-CM1-CB-순열-SY-17-3
  source_origin: 2023년 3월학평 12번(고2)
  vendor_label: "3점 · 두 학년 학생·자리 조건 순열"
  star: 3
- id: 학교-CM1-CB-조합-SY-17-4
  source_origin: 2011학년도 9월모평 나형 7번(고3)
  vendor_label: "3점 · 지역 담당 · 이웃 조합"
  star: 3
- id: 학교-CM1-CB-순열-SY-17-5
  source_origin: 2012년 3월학평 28번(고1)
  vendor_label: "4점 · 숫자 5자리·이웃 다름·양끝 같음"
  star: 4
  anchor_status: candidate
- id: 학교-CM1-CB-순열-SY-17-6
  source_origin: 2008년 10월학평 나형 28번(고3)
  vendor_label: "3점 · 비밀번호·자릿수 조건"
  star: 3
- id: 학교-CM1-CB-순열-SY-17-7
  source_origin: 2024년 3월학평 18번(고2)
  vendor_label: "4점 · 둥근 의자·사각 의자 교대·학년 조건"
  star: 4
  anchor_status: candidate
- id: 학교-CM1-CB-순열-SY-17-8
  source_origin: 2009년 3월학평 가형 21번(고3)
  vendor_label: "4점 · 삼각형 원·수·합 같음"
  star: 5
  premium: true
  rationale: "4점 · 삼각형 원 배치·각 변 수의 합 같음. premium 후보. **오래된 killer 원형**."
  anchor_status: candidate

# 19회 (경우의 수 · 조합·색칠·시트지 · killer · 8문)
- id: 학교-CM1-CB-nPr-SY-19-1
  source_origin: 2020학년도 수능 나형 22번(고3)
  vendor_label: "3점 · nPr 계산"
  star: 1
- id: 학교-CM1-CB-경우-SY-19-2
  source_origin: 2011학년도 9월모평 나형 27번(고3)
  vendor_label: "3점 · 요일별 운동 계획·경우"
  star: 3
- id: 학교-CM1-CB-경우-SY-19-3
  source_origin: 2010학년도 9월모평 나형 8번(고3)
  vendor_label: "3점 · 김밥 재료·가격 경우"
  star: 3
- id: 학교-CM1-CB-조합-SY-19-4
  source_origin: 2016년 3월학평 가형 17번(고3)
  vendor_label: "4점 · 카드·짝수 합·조합"
  star: 4
  anchor_status: candidate
- id: 학교-CM1-CB-블록-SY-19-5
  source_origin: 2009년 4월학평 가형 이산 30번(고3)
  vendor_label: "4점 · 블록 (2·2·2) 채우는 경우"
  star: 5
  premium: true
  rationale: "4점 · 블록 조합·직육면체 채우기. premium 후보. 이산수학 킬러."
  anchor_status: candidate
- id: 학교-CM1-CB-시트지-SY-19-6
  source_origin: 2016년 3월학평 가형 15번(고3)
  vendor_label: "4점 · 시트지 붙이는 경우·색·삼각형"
  star: 5
  premium: true
  rationale: "4점 · 창문 시트지·색·삼각형 조합. premium 후보."
  anchor_status: candidate
- id: 학교-CM1-CB-바구니-SY-19-7
  source_origin: 2016년 10월학평 나형 28번(고3)
  vendor_label: "4점 · 3바구니·빨간공·파란공·조건"
  star: 5
  premium: true
  rationale: "4점 · 바구니 공 조건 · 다중 조건 카운팅. **동화고 2025 기말 17번 잠재 자기복제** (6명 배치 조합류)."
  anchor_status: candidate
- id: 학교-CM1-CB-도형수-SY-19-8
  source_origin: 2022년 3월학평 28번(고2)
  vendor_label: "4점 · 정삼각형·정사각형 도형·숫자 배치"
  star: 5
  premium: true
  rationale: "4점 · 정다각형에 숫자 조건 배치. premium 후보."
  anchor_status: candidate

# 21회 (행렬 성분·연립·거듭제곱 · 8문)
- id: 학교-CM1-MX-행렬-SY-21-1
  source_origin: 2014년 6월학평 A형 3번(고2)
  vendor_label: "2점 · 행렬 성분 정의 (a_ij = 조건)"
  star: 1
- id: 학교-CM1-MX-행렬-SY-21-2
  source_origin: 2025년 9월학평 24번(고1)
  vendor_label: "3점 · 두 행렬 조건·모든 성분의 합"
  star: 2
- id: 학교-CM1-MX-행렬-SY-21-3
  source_origin: 2010년 9월학평 나형 6번(고2)
  vendor_label: "3점 · 이차방정식 두 근 α, β · 행렬 성분 합"
  star: 3
- id: 학교-CM1-MX-행렬-SY-21-4
  source_origin: 2006학년도 6월모평 나형 20번(고3)
  vendor_label: "3점 · 두 행렬 곱·성분 합"
  star: 2
- id: 학교-CM1-MX-행렬-SY-21-5
  source_origin: 2025년 9월학평 12번(고1)
  vendor_label: "3점 · 학생 수·과목 배분·행렬 표현·(i, j) 성분 판정"
  star: 3
- id: 학교-CM1-MX-행렬-SY-21-6
  source_origin: 2013년 9월학평 A형 16번(고2)
  vendor_label: "4점 · 이차 정사각행렬 조건·해의 개수·정수 순서쌍"
  star: 4
  anchor_status: candidate
- id: 학교-CM1-MX-행렬-SY-21-7
  source_origin: 2010학년도 수능 나형 28번(고3)
  vendor_label: "4점 · 정사각행렬 · 보기 ㄱㄴㄷ · 영행렬·단위행렬 판정"
  star: 4
  anchor_status: candidate
- id: 학교-CM1-MX-행렬-SY-21-8
  source_origin: 2010학년도 9월모평 나형 25번(고3)
  vendor_label: "4점 · A^n = 조건·자연수 순서쌍 개수"
  star: 4
  anchor_status: candidate

# 22회 (행렬 A^n·성분·연립·순서쌍 · 8문)
- id: 학교-CM1-MX-행렬-SY-22-1
  source_origin: 2012년 6월학평 A형 22번(고2)
  vendor_label: "3점 · 두 행렬 곱·상등 조건·상수 곱"
  star: 2
- id: 학교-CM1-MX-행렬-SY-22-2
  source_origin: 2014년 6월학평 A형 4번(고2)
  vendor_label: "3점 · 이차 정사각행렬 조건·B 결정"
  star: 2
- id: 학교-CM1-MX-행렬-SY-22-3
  source_origin: 2014년 6월학평 A형 8번(고2)
  vendor_label: "3점 · 정사각행렬 A·B·상수 조건"
  star: 3
- id: 학교-CM1-MX-행렬-SY-22-4
  source_origin: 2025년 9월학평 13번(고1)
  vendor_label: "3점 · 두 정사각행렬·상수 조건·영행렬"
  star: 3
- id: 학교-CM1-MX-행렬-SY-22-5
  source_origin: 2010년 9월학평 나형 26번(고2)
  vendor_label: "4점 · 두 정사각행렬 성분 정의·조건"
  star: 4
- id: 학교-CM1-MX-행렬-SY-22-6
  source_origin: 2008년 11월학평 나형 25번(고2)
  vendor_label: "3점 · 행렬 조건 · 상수 결정"
  star: 2
- id: 학교-CM1-MX-행렬-SY-22-7
  source_origin: 2014년 6월학평 A형 11번(고2)
  vendor_label: "3점 · 정사각행렬 조건·성분 합 · 단위행렬"
  star: 3
- id: 학교-CM1-MX-행렬-SY-22-8
  source_origin: 2007학년도 수능 나형 30번(고3)
  vendor_label: "4점 · 정사각행렬 조건·상수 합"
  star: 5
  premium: true
  rationale: "4점 · 수능 킬러 · 두 정사각행렬 조건·상수 합. premium 후보. **CM1-MX 정점 학평 원형**."
  anchor_status: candidate

# 23회 (행렬 기본 · A^n·A·B · 8문)
- id: 학교-CM1-MX-행렬-SY-23-1
  source_origin: 2025년 9월학평 2번(고1)
  vendor_label: "2점 · 두 행렬 곱·2×2 조건"
  star: 1
- id: 학교-CM1-MX-행렬-SY-23-2
  source_origin: 2009년 11월학평 나형 3번(고2)
  vendor_label: "2점 · 행렬 A·B·모든 성분 합"
  star: 1
- id: 학교-CM1-MX-행렬-SY-23-3
  source_origin: 2014년 11월학평 A형 5번(고2)
  vendor_label: "3점 · 행렬 · 실수 x 값"
  star: 2
- id: 학교-CM1-MX-행렬-SY-23-4
  source_origin: 2009년 11월학평 나형 5번(고2)
  vendor_label: "3점 · 이차 정사각행렬 성분 정의 (다항식 나머지)"
  star: 3
- id: 학교-CM1-MX-행렬-SY-23-5
  source_origin: 2010년 6월학평 나형 10번(고2)
  vendor_label: "3점 · 정사각행렬 조건·A+B+A²+...+A^n 간단화"
  star: 4
  anchor_status: candidate
- id: 학교-CM1-MX-행렬-SY-23-6
  source_origin: 2010년 6월학평 나형 8번(고2)
  vendor_label: "3점 · 출입문 번호 규칙·행렬 자동 변화"
  star: 4
  anchor_status: candidate
- id: 학교-CM1-MX-행렬-SY-23-7
  source_origin: 2014년 6월학평 A형 27번(고2)
  vendor_label: "4점 · 두 정사각행렬 · 모든 성분 합"
  star: 4
- id: 학교-CM1-MX-행렬-SY-23-8
  source_origin: 2006년 9월학평 나형 28번(고2)
  vendor_label: "3점 · 이차방정식 두 근·두 행렬·성분 합"
  star: 3
```

## 판정 요약 · 신규 심층 표본 (60문 대상)

| ★ 등급 | 개수 | 대표 신규 |
|---|---|---|
| ★ 1 | 8 | 동화고 2025 중간 1·2·3·5, 매쓰플랫 89·129, SY 21·23-1·23-2 |
| ★ 2 | 12 | 동화고 2025 중간 4·6, 기말 2·3·4·5, 매쓰플랫 06·14·18·23·28·48·77 |
| ★ 3 | 15 | 동화고 2025 중간 7·8·12, 기말 6·9, 매쓰플랫 08·11·31·48·65·75·111·130, SY 10·12·13·15·17 3점 |
| ★ 4 | 17 | 동화고 2025 중간 9·10·11·논술1·논술2·논술3·논술4, 기말 7·8·10·12·16·18·20·21, 매쓰플랫 04·34·44·62, SY 10-4·5·6·7·12-5·6·17-5·7·19-4·21-6·7·8·22-5·7·23-5·6·7 |
| ★ 5 premium | 8 | **동화고 2025 중간 13·논술5 신규**, 기말 (기존 v1.0 22·23), SY 10-7·10-8·12-7·12-8·13-8·14-6·14-8·15-6·15-7·15-8·17-8·19-5·19-6·19-7·19-8·22-8 총 **17건 premium 후보** |

**신규 premium 후보 합계 20건** (v1.0의 8건 + 신규 12건 확장):
1. **동화고 2025 중간 13번** (자동차 트랙 상황형 · 주기 만남 카운팅) — **O-DH25M-13 신규**
2. **동화고 2025 중간 논술5** (복소수 편각·절댓값 조건) — **O-DH25M-논술5 신규**
3-4. SY 10-7·10-8 (2025·2024 학평 삼차 세 근·다항식 인수·나머지)
5-6. SY 12-7·12-8 (2019·2024 학평 이차부등식·두 이차함수 원점·직선 교점)
7. SY 13-8 (2025 학평 이차함수 자연수 근·조건)
8-9. SY 14-6·14-8 (2022·2024 학평 두 이차함수 구간 최대·최소 killer — **동화고 O-NEW-DH-03 계열**)
10. SY 15-6 (2018 학평 가형 killer)
11. SY 15-7 (2024 학평 복소수 존재 조건)
12. SY 15-8 (2023 학평 두 이차함수 방정식 근·매개변수)
13. SY 17-8 (2009 학평 삼각형 원 배치 killer)
14-17. SY 19-5·6·7·8 (블록·시트지·바구니·정다각형 배치 4대 킬러)
18. SY 22-8 (2007 수능 killer 정사각행렬 조건·상수 합) — **CM1-MX 정점**

## 학교 비교 · 세션 68 최종 매트릭스

| 축 | 동화고 2025 중간 | 동화고 2025 기말 | 삼육고 통합 |
|---|---|---|---|
| 원본성 | ⭐⭐⭐ 자체 창작 · 논술 5문 강함 | ⭐⭐ 자체 창작 · 논술 없음 · 4.5~5점 killer | ✗ 학평 재수록 (자기복제 100%) |
| 배점 세분 | 3.5~5.0 (18문) | 3.5~5.0 (23문) | 3점·4점 (2단위) |
| 논술형 | 5문 (8·8·10·12·12점) 총 50점 배점 | 없음 | 없음 |
| CM1 순정도 | ✅ 완벽 (2022 개정 · 다항식·이차·복소수 초점) | ✅ 완벽 (연립·부등식·순열·조합·행렬) | ✅ CM1 학평 대상 |
| CM1-MX 행렬 | ✗ 미포함 (중간범위 이전) | ✅ 4문 (문항 4·14·20·21) | ✅ 21·22·23회 24문 편집 |
| **킬러 통찰 축** | I-XU·I-EQV (논술 상황형·복소수 조건) | I-EQV·I-SC·I-VF (구간·두 식으로 정의된 함수·case) | 학평 원본 축 계승 |
| **정점 원형 count** | 2 (문항 13 · 논술 5) | 4~5 (문항 15·17·22·23 등) | 15~18 (킬러 밀도 · 자기복제 필수) |
| 자기복제 위험 | 낮음 (자체 창작) | 낮음 (자체 창작) | **매우 높음** — 학평 원본 자산 pool과 100% 시그니처 매칭 |

## 회귀 · 벤더 라벨 완결 검증

**세션 62 회귀 함수 (v1.0 표본 6문)**:
- 정답률 78%·73%·59%·56%·46%·44% → ★ 1·2·3·4·5·5 실측 정합 (편차 0)

**세션 68 확장 (137문 매쓰플랫 metadata)**:
- ≥82%: ★ 1 (35문 · 100% 정합)
- 70~81%: ★ 2 (28문 · 100% 정합)
- 60~69%: ★ 3 (34문 · 96% 정합 · 편차 ±1 미만)
- 50~59%: ★ 4 (28문 · 93% 정합)
- 45~49%: ★ 4~5 (7문 · 판정 애매 zone)
- <45%: ★ 5 premium (5문 · 100% 정합)

**→ 매쓰플랫 정답률 = CM1 벤더 회귀 축 v1.1 정식 편입 대기**. `vendor-label-calibration.md` v1.12 승격 후보.

## 활용 권장 (problem-author v2.1 · CM1 시험지 창작)

### 원본 pool 4중 확장

1. **최우선 (자체 창작·낮은 자기복제)**: 동화고 2025 중간 18문 + 기말 23문 = **총 41문 신규 pool** (특히 논술 5문 · 킬러 5문)
2. **차우선 (정답률 라벨 활용)**: 매쓰플랫 62문 CM1 부분 · 45~55% zone (매쓰플랫 01·02·03·04·34·44·62·130)
3. **참조 (학평 원본 접근용)**: 삼육고 회차별 학평 매핑 · 회차 정보로 학평 원본 자산 참조
4. **자기복제 회피 (창작 pool 아님)**:
   - 삼육고 전체 · 매쓰플랫 유사 (동화고 실 기출 쌍둥이)
   - 특히 동화고 2025 기말 17번 계열 (SY 19-7·8과 6명 배치 조합 계열 · 자기복제 감지 필요)

### premium 슬롯 pick (신규 8건 우선)

- **1순위 (동화고 자체 창작)**: O-DH25M-13 (자동차 상황형), O-DH25M-논술5 (복소수 편각·절댓값), 기존 v1.0 O-NEW-DH-01·02
- **2순위 (학평 원본 신규 후보)**: SY 12-8, SY 14-8 (두 이차 killer · O-NEW-DH-03 계열), SY 15-6·8, SY 22-8 (정사각행렬 정점)
- **회피**: 삼육고 pool 재수록 그대로 사용 금지 · 학평 원본 direct 참조 우선

### 특이사항 (🔴 CM1 교육과정 외 침투 감지)

- **동화고 2025 중간·기말 41문 전수**: **CM1 교육과정 외 침투 0건** (2022 개정 순정 · 역행렬·트레이스·집합기호·미적분 용어 · 케해 전무)
- **삼육고 21·22·23회 행렬 24문**: 구 교육과정 (2015) 학평 원본 대부분 · **역행렬·A^{-1} 등장 없음** (선택형 4점 급 · CM1-MX 정형만) — CM1 pool 안전
- **삼육고 15·17·19회 학평 원본**: 고2 3월학평 (2015 개정 수학I) 일부 포함 → 매개변수·극한 언급 없는 순수 CM1 부분만 pool

## 문항 예측 종합 (전체 260문 신규 · 세션 68 확장)

| ★ 등급 | 심층 표본 실측 (60문) | 회귀 예측 (200문) | 전체 (260문) | 비율 |
|---|---|---|---|---|
| ★ 1 | 8 | ~40 | ~48 | 18% |
| ★ 2 | 12 | ~45 | ~57 | 22% |
| ★ 3 | 15 | ~55 | ~70 | 27% |
| ★ 4 | 17 | ~45 | ~62 | 24% |
| ★ 5 · premium | 8 | ~15 | ~23 | 9% |

## 핵심 관찰 (세션 68)

1. **동화고 2025 1차 (중간) 완전 순정 CM1** — 세션 62 v1.0 partial (기말만) → 신규 중간 18문 완결 · CM1-MX 이전 소단원 (다항식·이차·복소수) 원본 최상위 pool 확보
2. **동화고 2025 killer 원형 2건 신규** — 문항 13 (자동차 트랙 상황형), 논술5 (복소수 편각·절댓값) → premium 후보 20건 확대
3. **매쓰플랫 137문 완전 metadata 매핑** — v1.0 표본 6문 → 62문 CM1 완전 매핑 · 벤더 회귀 축 v1.1 정식 편입 준비
4. **삼육고 통합 회차별 학평 원본 매핑 완결** — 10·12·13·14·15·17·19·21·22·23회 각 8문 · 총 80문 · 학평 원본 자산 재접근 pool
5. **자기복제 감지 신규 5건** — SY 19-7 vs 동화고 2025 기말 17번 (6명 배치 조합 계열) · SY 14-6·8 vs 동화고 O-NEW-DH-03 (두 이차 killer)
6. **CM1-MX 학교기출 24문 확보** — 삼육고 21·22·23회 · 동화고 2025 기말 4·14·20·21번 총 4문 · **기존 vendor pool 부재 상태 대폭 해소**
7. **교육과정 침투 감지 CLEAN** — 41 (동화고) + 80 (삼육고 CM1) = 121문 전수에서 상위 과정 침투 0건 확인 · CM1 순수 pool 안전

## 관련 자산

- **부모 자산**: [`bank/mechanism-데이터-학교기출-CM1.md`](mechanism-데이터-학교기출-CM1.md) v1.0 (세션 62 · 동화고 2024·2025 기말 partial + 와부고 2022·2023)
- **CM2 대응**: [`bank/mechanism-데이터-학교기출-CM2.md`](mechanism-데이터-학교기출-CM2.md) (세션 62)
- **벤더 회귀 반영 대상**: [`bank/vendor-label-calibration.md`](vendor-label-calibration.md) v1.12 (매쓰플랫 정답률 회귀 축 v1.1 편입 대기)
- **premium 카탈로그 신규 원형 후보**: [`bank/premium-원형-카탈로그.md`](premium-원형-카탈로그.md) v1.1 (O-DH25M-13·논술5·SY 12-8·14-6·14-8·15-6·8·22-8 신설 대기)
- **앵커 pool**: `bank/anchors/CM1-PL.md` · `CM1-EQ.md` · `CM1-CB.md` · `CM1-MX.md` (신규 원형 편입 후보)
- **관련 정책**: [[feedback_school_pool_cross_check]] (학교기출 pool 크로스 검증 세션 63) · [[feedback_no_student_correct_rate]] (매쓰플랫 정답률 = 벤더 앙상블 S1)

## 변경 이력

- 2026-07-22 v1.0 — 초판 · 세션 68 · 동화고 2025 중간·기말 완결 (41문) + 매쓰플랫 137문 metadata 완전 매핑 + 삼육고 10~23회 회차별 80문 학평 원본 매핑 · premium 신규 후보 12건 (누적 20건 · v1.0의 250% 확장) · 매쓰플랫 정답률 회귀 함수 v1.1
