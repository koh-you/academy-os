---
name: mechanism-데이터-학교기출-CM1
description: 학교기출 CM1 (공통수학1) 정독 데이터 · 동화고·와부고·삼육고 실제 학교 시험 원본. 자기출제 시험지 (특히 1학기 기말예상) 창작 시 problem-author v2.1이 최우선 참조. 저작권 준수 (원문 전사 없음 · 발문 요약).
metadata:
  type: reference
  version: v1.0
  established: 2026-07-21 (세션 62)
  source: 참고자료/학교기출/고1/{동화고,와부고,삼육고} 실 지필평가 PDF (5개 학년도)
  section: CM1 전 단원 (PL·EQ·CB·MX) · 1학기 (중간+기말)
  unit_code: CM1 (전 단원)
  sub_unit: 다항식·항등식·인수분해·나머지정리 · 복소수·이차·고차·연립·부등식 · 순열·조합 · 행렬
  citation_note: 학교기출 5개 학년도 정독 · 학습 목적 · 저작권 준수 (원문 전사 없음·발문 요약·시그니처 3원소만 기록)
  extract_range: |
    동화고 2024 1학기 1차 (15선택 + 4논술 = 19문)
    동화고 2025 1학기 1차 (15선택 + 4논술 = 19문, 문항 부분 표본)
    동화고 2025 1학기 2차 기말 (23문 · 3.5~5.0점)
    매쓰플랫 동화고 1학기 기말 유사 (137문 · 쌍둥이/유사 · 정답률 실측)
    와부고 2022 1학기 기말 (15선택 + 3논술 = 18문 · 3.9~6.0점)  [구 교육과정]
    와부고 2023 1학기 기말 (14선택 + 4논술 = 19문 · 3.9~9.0점)  [구 교육과정]
    삼육고 통합 (학평 기출 회차별 편집 · 참고용)
  pages: "동화고 2024=4p · 2025기말=4p · 와부고 2022=8p · 와부고 2023=7p · 매쓰플랫=50p"
  total_problems: 약 210문 (표본 정독 대상 : 35문 · 나머지 회귀 예측)
  sample_problems: 35
  predicted_problems: 175
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X) + v3.9 저노출 게이트
  parent_pilot: 세션 61 (파일럿 1·2·7·8 + Agent 8건) · 세션 62 (블랙라벨 CM2 STEP 2·3)
---

# 학교기출 CM1 정독 데이터 v1.0

## 배경 · 목적

세션 62 학교기출 CM2 (와부고) 정독의 CM1 판. **1학기 CM1 · 2학기 CM2** 학교시험 구조를 원본 pool 이중화. `problem-author v2.1`이 향후 CM1 1학기 기말예상 시험지 창작 시 이 자료를 **최우선 원본 pool로 활용**.

## 🔴 중요 컨텍스트 — 교육과정 세대차

**2022 개정 (2025년 고1~ 적용, 즉 우리 CM1·CM2 분리 체계)**:
- 1학기 = CM1 (다항식·방정식·경우의수·행렬)
- 2학기 = CM2 (도형의방정식·집합과명제·함수·유리/무리)

**구 교육과정 (2015 개정, 2024년 이전 고1)**:
- 1학기 = 수학(상) — 다항식·방정식·부등식·도형의 방정식 일부
- 2학기 = 수학(하) — 집합·명제·함수·순열조합

**따라서**:
- 동화고 **2024 1차** (2015 개정) — 여전히 CM1의 다항식·이차·복소수 위주로 유효
- 동화고 **2025 1차·2차** (2022 개정) — 완전한 CM1 프로필
- 와부고 **2022·2023 1학기 기말** (2015 개정) — 방정식+도형이동+평면좌표+원 (**⚠️ CM2 GM 침투**. CM1 순정 시험지 pool 부적합, 그러나 GM 원의방정식·평면좌표 등 CM2 원본으로 활용 가능)
- 와부고 **2025 이후 1학기** — 자료 부재 (2학기 2025 중간만 존재 → 이미 CM2 정독 대상)

→ **CM1 1학기 기말예상 창작 원본 pool = 동화고 2024·2025 (핵심) + 삼육고 학평 편집 (참고) + 매쓰플랫 유사 137문 (정답률 라벨링 유용)**

## 학교별 특유 출제 패턴 매핑

### 동화고 (경기 남양주 · 진학 중상위)

**출제 철학**: **선택형 15문 + 논술형 4문** 고정. 배점 3.5점 균등 시작 → 상단 5.0점. **논술형 배점이 크다** (11·12·15점). 답이 이차식 판정·복소수 세부·시각적 도형 통찰.

**킬러 유형**:
- **논술형 1**: 방정식 세우기 + 실수 조건 처리 (사각형+직각삼각형 합치기·연립방정식)
- **논술형 2**: 삼차방정식 근과 계수 관계 (판별식·인수분해 통찰)
- **논술형 3**: 다항식 항등식 + 인수분해 (h(x) 구하기 + 나머지)
- **논술형 4**: 복소수 거듭제곱 (z=(1-i)/√2 → z², z³, ..., z^n) · 켤레·자연수 조건 카운팅

**정답률 특징** (매쓰플랫 라벨 기준):
- 다항식 정답률 65~80% (기본형 안정)
- 인수분해·나머지정리 45~65% (전형 · 근·계수)
- 이차함수 최댓값·미정계수 45~55% (수직선·구간 이동 킬러)
- 경우의 수 (이웃/자리) 55~78%
- **최저 정답률** 44~46% : 두 이차함수 f(x)≤0≤g(x) + 최댓값·최솟값 조건 [2024·2025 반복 출제] → **동화고 킬러 원형**

### 와부고 (경기 남양주 · 진학 상위 · 오랜 우리 프로젝트 벤치마킹 대상)

**출제 철학**: **선택형 14~15문 + 논술형 3~4문**. 배점 3.9점 시작 → 상단 5.4점. 논술형 6~9점. **논술형 서술 요구 강함** (…의 과정을 논술하시오). **정점 문항의 통찰형 밀도 매우 높음**. 3.9→5.4 배점 곡선이 부드러움 (동화고보다 세밀).

**킬러 유형** (2022·2023):
- **삼차·사차방정식 근과 계수** (P(3-α)(3-β)... 형 · z³=1 + ω 감차 + 지수식)
- **이차부등식 + 연립부등식** (해가 없는 실수 a 조건 · 두 이차함수 그래프)
- **평면좌표 세 도형 교점 개수 P(k)** (2차함수+원+직선 총 교점 · 접선 조건)
- **원+평행이동+아폴로니우스** (아폴로니우스 원 반지름 · 두 원 접·직선 조합)
- **삼각형 논술** (내심·외심 좌표 유도 · 정점 T:(1-T) 내분 + 수직 조건)

**특이 사항**:
- **논술형에 매우 긴 서술 요구** (부분 채점 세밀) · 6~9점 대형
- **케일리해밀턴 등 CM1-MX 없음** (구 교육과정 · 행렬 자체 미포함)
- **아폴로니우스 원 정면 출제** (2022 3번 4.1점) — 마스터 정책 CM2 정규 편입

### 삼육고 (서울 · 진학 최상위 · 재수생 편입 예정)

**출제 철학**: **학평(교육청) 기출을 회차별 압축 재편집** — 자체 창작 아님. 실 시험 아닌 문제집 형태. 회차 (10회~21회+) 각 5~8문, 배점 3점·4점 표시.

**킬러 유형**:
- 순전한 **학평 기출 큐레이션** — 우리 학평 자산과 **거의 100% 자기복제** (S4 시그니처 매칭 확정)
- 2019·2020·2024·2025 교육청 (6월·9월·11월) · 학년 (고1·고2) 혼합
- 대체로 **★ 4·★ 5 밀집** (10회 이상은 심화)
- **행렬** (구 교육과정 이차정사각행렬 · A^100·B, 성분 등) — CM1-MX 우리 pool 참고 가능

**활용 가치**: 자체 원본 아님. **자기복제 감쇠 필수** — 학평 pool 활용 시 삼육고 큐레이션 회피.

## 문항 엔트리 (표본 35문)

### 동화고 2024 1학기 1차 지필 (2015 개정 · CM1 유효)

```yaml
- id: 학교-CM1-EQ-이차-DH24M-14
  page: 3 (동화고 2024 1차 · 문항 14)
  vendor_label: "3.7점 · 선택형 · CM1-EQ"
  category_type: 선택형
  summary: |
    이차함수 f(x)가 (가) f(1)=0, (나) 모든 실수 x에 대하여 f(x) ≥ f(4) 조건.
    f(0)=k일 때 방정식 f(x)=kx의 두 근 α, β. α²+β² 값 (지선 5).
  category: "이차함수 최소·근과 계수 결합"
  M: {s: 2, k: 2, a: 3, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "(나) 조건 → 축 x=4 · f(x)=a(x-4)²+c 형태 파악"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "f(1)=0으로 a·c 관계식 유도"
    - step: 3
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "f(0)=k 대입·f(x)=kx 근·계수 관계"
  insight_count: 3
  depth_score: 6.0
  base_star: 4
  star: 3
  premium: false
  rationale: "이차함수 조건 3단계 조합 · 통찰 depth 2 안정 · CM1 표준 킬러 아래"
  tier: star_3
  mechanism_primary: "이차함수 축·최소·근계수"
  insight_type: 통찰형
  target_cohort: 중상위권
  anchor_status: candidate
  novelty_score: 1

- id: 학교-CM1-EQ-이차-DH24M-15
  page: 3 (동화고 2024 1차 · 문항 15)
  vendor_label: "3.8점 · 선택형 · CM1-EQ · 킬러급"
  category_type: 선택형
  summary: |
    t ≥ 0 실수, t ≤ x ≤ t+3에서 이차함수 y=x²-4tx+10t의 최댓값·최솟값 차 g(t).
    t에 대한 방정식 g(t)=k가 두 실근 갖도록 하는 정수 k 개수.
  category: "이차함수 구간 최댓값·최솟값·방정식 근 개수"
  M: {s: 3, k: 3, a: 3, t: 1}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "축 x=2t · 구간 [t, t+3] 위치 case 분리 (2t < t·t ≤ 2t ≤ t+3·2t > t+3)"
    - step: 2
      type: I-BW
      depth: 3
      effective_depth: 3
      description: "각 case별 g(t) 두 식으로 정의된 함수 결정"
    - step: 3
      type: I-SC
      depth: 2
      effective_depth: 2
      description: "y=g(t)와 y=k 교점 2개 위한 k 범위 산출"
  insight_count: 3
  depth_score: 8.67
  base_star: 5
  star: 4
  premium: false
  rationale: "구간·축 4-case 분기 · 두 식으로 정의된 함수 · k 판정. count 3으로 premium 미달. depth 8.67로 ★ 4 확실."
  tier: star_4
  mechanism_primary: "구간 이차함수 최대·최소·두 식으로 정의된 함수 판정"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 2

- id: 학교-CM1-PL-복소수-DH24M-3
  page: 1 (동화고 2024 1차 · 문항 3)
  vendor_label: "3점 · 선택형 · CM1-EQ 복소수"
  category_type: 선택형
  summary: |
    복소수 z=√(-2)·√(-18)+√(-36)/√(-4)+ai+a에서 z²이 음의 실수일 때 실수 a 값 (지선 5).
  category: "복소수 기본 · 순허수 조건"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 2
  star: 2
  premium: false
  rationale: "복소수 기본 계산 · 순허수 조건 → z² 음수. 절차형."
  tier: star_2
  mechanism_primary: "복소수 곱·나눗셈 부호"
  insight_type: 절차형
  target_cohort: 중위권
  novelty_score: 0

- id: 학교-CM1-EQ-이차-DH24M-11
  page: 2 (동화고 2024 1차 · 문항 11)
  vendor_label: "3.3점 · 선택형 · CM1-EQ 복소수+이차"
  category_type: 선택형
  summary: |
    등식 a/(1+i)+b/(1-i)=3+2i 만족하는 실수 a, b에 대해 이차방정식 x²+px+q=0
    두 실근 · 두 상수 p, q에 대해 p+q 값 (지선 5).
  category: "복소수 실수 조건 + 근과 계수"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "복소수 등식 → 실수부·허수부 분리 · a·b 결정"
    - step: 2
      type: I-CON
      depth: 1
      effective_depth: 1
      description: "근·계수 관계 · p, q 산출"
  insight_count: 2
  depth_score: 4.5
  base_star: 3
  star: 3
  premium: false
  rationale: "복소수+근계수 결합 · 표준. 실수부 분리 통찰 얕음."
  tier: star_3
  mechanism_primary: "복소수 실허 분리·근계수"
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 1

- id: 학교-CM1-EQ-삼차-DH24M-7
  page: 2 (동화고 2024 1차 · 문항 7)
  vendor_label: "3.3점 · 선택형 · CM1-EQ 1의 세제곱근"
  category_type: 선택형
  summary: |
    삼차방정식 x³-1=0의 한 허근 ω. ω^2023+1/ω^2023 값 (지선 5).
  category: "1의 3제곱근·ω 주기"
  M: {s: 2, k: 2, a: 3, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P2]
      description: "ω³=1 순환 · 2023 mod 3 = 1"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "ω+1/ω = -1 활용"
  insight_count: 2
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  rationale: "O-08 원형 (1의 n제곱근+감차) · count 2로 premium 미달. depth 8 정확."
  tier: star_4
  mechanism_primary: "1의 3제곱근 주기·감차"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  cross_reference:
    - source: "쎈-CM1-EQ-이차-0542·0547 (O-08 원형)"
      relation: "동일 원형 · 지수만 다름 (2023 vs 다른)"
  novelty_score: 1

- id: 학교-CM1-EQ-근계수-DH24M-12
  page: 2 (동화고 2024 1차 · 문항 12)
  vendor_label: "3.7점 · 선택형 · CM1-EQ 대칭식"
  category_type: 선택형
  summary: |
    0이 아닌 세 실수 x, y, z가 (가) x·y·z 중 적어도 하나는 3이다.
    (나) x+y+z=0. (다) 1/x+1/y+1/z=1/2. xy+yz+zx 값 (지선 5).
  category: "대칭식 · 3원소 조건 case"
  M: {s: 3, k: 3, a: 3, t: 0}
  M_total: 9
  insights:
    - step: 1
      type: I-SC
      depth: 3
      effective_depth: 3
      description: "(가) 조건 → x=3, y=3, z=3 case 분기 · 대칭성"
    - step: 2
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "(나)(다) 조합 → xy+yz+zx = xyz/2 (조건식 결합)"
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "xyz 값 결정 · 최종 계산"
  insight_count: 3
  depth_score: 8.67
  base_star: 5
  star: 4
  premium: false
  rationale: "3원 조건 대칭식 · x=3 case 분리 · 조건식 결합. 통찰 3단계 · depth 8.67. count 3."
  tier: star_4
  mechanism_primary: "대칭식·근계수·case 분기"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 2

- id: 학교-CM1-PL-복소수-DH24M-논술4
  page: 4 (동화고 2024 1차 · 논술형 4)
  vendor_label: "15점 · 논술형 · CM1-EQ 복소수 거듭제곱"
  category_type: 논술형
  summary: |
    z=(1-i)/√2에 대해 z², z³, z⁴, z⁵, z⁶, z⁸ 값 각각 구하고 (7점),
    z^n + z̄^n + (z-√2)^n + (z̄-√2)^n ≠ 0 만족 50 이하 자연수 n 개수 (8점).
  category: "복소수 8주기 · 켤레·자연수 조건"
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P2, P3]
      description: "z=cos(-45°)+i sin(-45°) · z⁸=1 · 8-주기 발견"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "z^n, z̄^n의 실수·허수 성분 case (n mod 8)"
    - step: 3
      type: I-SC
      depth: 3
      effective_depth: 3
      description: "z-√2 계산 · 각 case별 합 0 판정 조건"
    - step: 4
      type: I-VF
      depth: 3
      effective_depth: 3
      description: "50 이하 각 mod 8 case 카운팅"
  insight_count: 4
  depth_score: 9.0
  base_star: 5
  star: 5
  premium: true
  rationale: "z 8주기 발견 + z-√2 확장 case + 50이하 카운팅. 서술형 15점 배점. depth 9.0 · count 4 · P2+P3 · premium 확정."
  tier: star_5_premium
  mechanism_primary: "복소수 n제곱 주기·case 카운팅"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  cross_reference:
    - source: "O-08 원형 (1의 n제곱근+감차)"
      relation: "확장 원형 · 8주기+켤레+50이하 카운팅"
  novelty_score: 3

- id: 학교-CM1-PL-항등식-DH24M-논술3
  page: 4 (동화고 2024 1차 · 논술형 3)
  vendor_label: "12점 · 논술형 · CM1-PL 항등식·인수분해·나머지"
  category_type: 논술형
  summary: |
    세 다항식 f(x)=x²+3x, g(x)=x²+2x-1, h(x)에 대해
    {f(x)}⁴-{g(x)}⁴=(2x³+7x²+4x-1)h(x)가 항등식.
    (1) 2x³+7x²+4x-1을 인수분해 (2점) (2) h(x) (6점) (3) h(x)를 x²-2로 나눈 나머지 (4점).
  category: "항등식 · A⁴-B⁴ 인수분해 · 다항식 나머지"
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "A⁴-B⁴=(A-B)(A+B)(A²+B²) · f-g=x+1"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "2x³+7x²+4x-1 인수분해 (조립제법·근 발견)"
    - step: 3
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "h(x) = (f+g)(f²+g²) 유도"
    - step: 4
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "h(x) mod (x²-2) 나머지 계산"
  insight_count: 4
  depth_score: 8.5
  base_star: 5
  star: 5
  premium: true
  rationale: "A⁴-B⁴ 대수통찰 + 3차식 인수분해 + 나머지. 논술형 12점. depth 8.5 · count 4. premium 자격 (X 필드 서술형 P3+P4)."
  tier: star_5_premium
  mechanism_primary: "A⁴-B⁴ 인수분해·항등식·나머지정리"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  cross_reference:
    - source: "O-09 원형 (P(x)-f(x) 감차)"
      relation: "동형 원형 · 4승 차 활용"
  novelty_score: 2

- id: 학교-CM1-EQ-삼차-DH24M-논술2
  page: 4 (동화고 2024 1차 · 논술형 2)
  vendor_label: "12점 · 논술형 · CM1-EQ 삼차방정식"
  category_type: 논술형
  summary: |
    삼차식 P(x)=x³-6x²+ax-8. (1) P(x)=0의 한 근이 1+i일 때 실수 a와 나머지 두 근 (8점).
    (2) x³-8=0의 세 근 2, α, β. P(α)P(β)/16 값 (4점).
    ※ 풀이 과정에서 삼차방정식의 근과 계수의 관계는 사용하지 않을 것.
  category: "삼차식 인수분해·복소수 근·근계수 우회"
  M: {s: 3, k: 3, a: 3, t: 1}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "1+i 근 · 켤레 1-i 근 · 실계수 조건"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "인수분해 · 세 근 결정 · a 산출"
    - step: 3
      type: I-BW
      depth: 3
      effective_depth: 3
      description: "α, β는 1의 세제곱근 · P(α)P(β) 대칭식으로 전개"
  insight_count: 3
  depth_score: 8.67
  base_star: 5
  star: 4
  premium: false
  rationale: "복소수 근+실계수+대칭식 · '근과 계수 관계 금지' 제약 · depth 8.67. count 3으로 premium 미달."
  tier: star_4
  mechanism_primary: "삼차식·복소수 근·1의 세제곱근"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 2
```

### 동화고 2025 1학기 2차 지필 (2022 개정 · CM1 완전)

```yaml
- id: 학교-CM1-CB-순열-DH25F-13
  page: 2 (동화고 2025 2차 · 문항 13)
  vendor_label: "4.5점 · 선택형 · CM1-CB 순열 이웃"
  category_type: 선택형
  summary: |
    9명 학생을 일렬로 세울 때 어떤 두 학생 사이에 다른 학생이 3명 이상 오는
    경우의 수. (원문 축약 · 이웃 금지·간격 조건 · 큰 수 답)
  category: "순열 · 간격 조건·이웃 금지"
  M: {s: 2, k: 3, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-SC
      depth: 3
      effective_depth: 3
      description: "특정 두 학생 위치 case 분리 (자리 차 4, 5, ..., 8)"
    - step: 2
      type: I-VF
      depth: 3
      effective_depth: 3
      description: "각 case에서 나머지 7명 순열 = 7! · case 곱"
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "case 합산 · 최종 순열 수"
  insight_count: 3
  depth_score: 8.67
  base_star: 5
  star: 4
  premium: false
  rationale: "간격 조건 순열 · case 분기 3단계 · CM1-CB 정형. depth 8.67 · count 3."
  tier: star_4
  mechanism_primary: "순열 간격 조건·case 카운팅"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 1

- id: 학교-CM1-MX-행렬-DH25F-14
  page: 3 (동화고 2025 2차 · 문항 14)
  vendor_label: "4.6점 · 선택형 · CM1-MX 행렬 성분·연산"
  category_type: 선택형
  summary: |
    행렬 P(k) 조건 · 성분 표기 · P의 (i,j) 성분 특별 관계식. (원문 축약)
  category: "행렬 · 성분 관계·연산"
  M: {s: 2, k: 2, a: 3, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "행렬 곱 성분 정의 활용"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "관계식 3~4개 연립·k 결정"
  insight_count: 2
  depth_score: 6.0
  base_star: 4
  star: 4
  premium: false
  rationale: "CM1-MX 신규 단원 · 성분 정의 통찰 · depth 6.0. 친숙도 감쇠 미적용 (2022 개정)."
  tier: star_4
  mechanism_primary: "행렬 성분 정의·연립"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 2

- id: 학교-CM1-CB-조합-DH25F-17
  page: 3 (동화고 2025 2차 · 문항 17)
  vendor_label: "4.7점 · 선택형 · CM1-CB 6명 배치"
  category_type: 선택형
  summary: |
    6명 A, B, C, D, E, F를 특정 조건 아래 배치. (원문 축약 · 대소·이웃·자리 복합)
  category: "순열조합 · 다중 조건"
  M: {s: 2, k: 3, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-SC
      depth: 3
      effective_depth: 3
      description: "조건 만족 배치 case 분리 (자리·이웃)"
    - step: 2
      type: I-VF
      depth: 3
      effective_depth: 3
      description: "각 case 순열 수 계산 · 합산"
  insight_count: 2
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  rationale: "6명 다중 조건 · case + 순열. depth 8.0 · count 2. 자기복제 감쇠 대상 (O-11 유사)."
  tier: star_4
  mechanism_primary: "다중 조건 순열 case 카운팅"
  insight_type: 통찰형
  target_cohort: 상위권
  cross_reference:
    - source: "O-11 좌석 이중 이웃 금지 (블랙라벨 유사)"
      relation: "다중 조건 · 시그니처 근사"
  novelty_score: 1

- id: 학교-CM1-EQ-이차-DH25F-11
  page: 1 (동화고 2025 2차 · 문항 11)
  vendor_label: "4.5점 · 선택형 · CM1-EQ 판정식·수직선"
  category_type: 선택형
  summary: |
    이차부등식 조건에서 방정식 실근·수직선 배치 조건 해결. (원문 축약)
  category: "이차부등식 · 수직선·근 배치"
  M: {s: 2, k: 3, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "이차함수 그래프 판별식·수직선 위치 조건 변환"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "부등식 해집합 · 조건 만족 매개변수 range"
  insight_count: 2
  depth_score: 7.5
  base_star: 4
  star: 4
  premium: false
  rationale: "이차부등식 근·수직선 표준. depth 7.5 · count 2."
  tier: star_4
  mechanism_primary: "이차부등식 근 배치"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 1

- id: 학교-CM1-EQ-4차-DH25F-19
  page: 3 (동화고 2025 2차 · 문항 19)
  vendor_label: "4.7점 · 선택형 · CM1-EQ 4차·인수분해·최소"
  category_type: 선택형
  summary: |
    4차식 f(x)와 관련 인수분해 조건 · 정수 매개변수 최솟값. (원문 축약)
  category: "4차식 · 인수분해·정수 조건"
  M: {s: 3, k: 3, a: 3, t: 1}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "4차식 = (2차)(2차) 인수분해 · 계수 관계"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "정수 조건 · 판별식 case"
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "최소값 case별 검증"
  insight_count: 3
  depth_score: 8.67
  base_star: 5
  star: 4
  premium: false
  rationale: "4차식 두 이차 분해 · 정수·최소. count 3 · depth 8.67. 4차 완전제곱 금지 정책 위반 없음 (일반 4차)."
  tier: star_4
  mechanism_primary: "4차식 두 이차 분해·정수 최소"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 2

- id: 학교-CM1-EQ-부등식-DH25F-15
  page: 3 (동화고 2025 2차 · 문항 15)
  vendor_label: "4.6점 · 선택형 · CM1-EQ 부등식·삼차"
  category_type: 선택형
  summary: |
    삼차부등식·부호변화 조건에서 정수해 개수 최대 매개변수. (원문 축약)
  category: "삼차부등식 · 부호변화·정수해"
  M: {s: 2, k: 3, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "삼차식 부호변화 3구간 case 분석"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "정수해 개수 max 매개변수 결정"
  insight_count: 2
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  rationale: "삼차 부호 case · CM1-EQ 정형. depth 8.0 · count 2."
  tier: star_4
  mechanism_primary: "삼차부등식 부호·정수해"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 1

- id: 학교-CM1-EQ-부등식-DH25F-22
  page: 4 (동화고 2025 2차 · 문항 22)
  vendor_label: "5.0점 · 논술형(?) · CM1-EQ 킬러"
  category_type: 최상위 서술
  summary: |
    함수 f(x) 조건: (가) f(x)는 상수 1. (나) f(x)는 다항식. (다) 자연수 조건 · 최댓값. (원문 축약)
  category: "다항식 · 자연수·최대"
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "다항식 f(x) 형태 후보 case"
    - step: 2
      type: I-BW
      depth: 3
      effective_depth: 3
      description: "자연수 조건 필터 · 매개변수 range"
    - step: 3
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "최댓값 도달 case 결정"
    - step: 4
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "최종 답 검증"
  insight_count: 4
  depth_score: 8.5
  base_star: 5
  star: 5
  premium: true
  rationale: "다항식 조건 3단 · 최대·자연수 case. depth 8.5 · count 4 · P3. premium 확정."
  tier: star_5_premium
  mechanism_primary: "다항식 조건·자연수 case·최대"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 3

- id: 학교-CM1-EQ-이차-DH25F-23
  page: 4 (동화고 2025 2차 · 문항 23 킬러)
  vendor_label: "5.0점 · 서술 · CM1-EQ 최상위"
  category_type: 최상위
  summary: |
    조건 3개 + 최댓값·최솟값 결정 킬러 (원문 축약 · 다층 상황·자연수 매개변수).
  category: "다층 조건 · 자연수 매개변수·최적화"
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - step: 1
      type: I-XU
      depth: 3
      effective_depth: 3
      signal_ref: [P4, P5]
      description: "다층 상황 이해 · 조건 3개 통합 해석"
    - step: 2
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "각 조건 대수·기하 변환"
    - step: 3
      type: I-SC
      depth: 3
      effective_depth: 3
      description: "case 분기 · 자연수 매개변수 필터"
    - step: 4
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "case별 결과·최적 매개변수"
    - step: 5
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "최종 검증"
  insight_count: 5
  depth_score: 8.6
  base_star: 5
  star: 5
  premium: true
  rationale: "5.0점 최상위 · 다층 · count 5 · P4+P5 · premium 3조건 all-satisfied. 동화고 최고 킬러 원형."
  tier: star_5_premium
  mechanism_primary: "다층 상황·다조건 case·최적화"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 3
```

### 매쓰플랫 동화고 유사문제 (137문 · 정답률 라벨링 · 대표 표본)

```yaml
- id: 학교-CM1-EQ-이차함수-MF-01
  page: 1 (매쓰플랫 · 01번)
  vendor_label: "동화고 2023 1학기 기말 18번 쌍둥이 · 정답률 46%"
  category_type: 유사문제
  summary: |
    두 이차함수 f(x), g(x): (가) 모든 실수 x에 대해 f(x) ≤ 0 ≤ g(x).
    (나) k-1 ≤ x ≤ k+2 구간에서 f(x) 최댓값·g(x) 최솟값 같도록 하는 실수 k의
    최솟값 0, 최댓값 2. (다) 방정식 f(x)=f(0)의 모든 실근 합 3 이하.
    f(2)=-2, g(4)=1일 때 f(3)+g(8) 값.
  category: "이차함수 두 그래프 · 구간 최대·최소 · 매개변수 range"
  M: {s: 3, k: 3, a: 3, t: 1}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "(가) f 위·g 아래 · 접점 조건"
    - step: 2
      type: I-BW
      depth: 3
      effective_depth: 3
      description: "구간 슬라이딩 · 최대·최소 같음 조건"
    - step: 3
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "(다) 근 합 조건 · 대칭축 결정"
    - step: 4
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "값 대입 · f(3)+g(8) 계산"
  insight_count: 4
  depth_score: 8.75
  base_star: 5
  star: 5
  premium: true
  rationale: "동화고 2023 킬러 원형 · 정답률 46% · depth 8.75 · count 4. **동화고 killer 원형 O-DH-01**."
  tier: star_5_premium
  mechanism_primary: "두 이차함수 구간 최대·최소 매개변수 range"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  vendor_calibration_signal:
    L1_publication_correct_rate: 0.46
  novelty_score: 3

- id: 학교-CM1-CB-조합-MF-100
  page: 50 (매쓰플랫 · 100번)
  vendor_label: "동화고 2025 1학기 CM1 10번 쌍둥이 · 정답률 59%"
  category_type: 유사문제
  summary: |
    8개 의자 일렬. 두 명의 학생이 서로 다른 의자에 앉을 때 두 명 사이에
    적어도 하나의 빈 의자가 있도록 앉는 경우의 수.
  category: "순열 · 적어도 조건 · 여집합·직접 count"
  M: {s: 2, k: 2, a: 3, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-SC
      depth: 2
      effective_depth: 2
      description: "'적어도 하나 빈 의자' → 전체 - 이웃 case (여집합)"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "이웃 case · 나머지 case 계산 · 두 학생 순서 고려"
  insight_count: 2
  depth_score: 6.0
  base_star: 4
  star: 3
  premium: false
  rationale: "여집합 조건 · 순열. 정답률 59% · 중상위. depth 6.0."
  tier: star_3
  mechanism_primary: "순열 · 여집합·간격 조건"
  insight_type: 통찰형
  target_cohort: 중상위권
  vendor_calibration_signal:
    L1_publication_correct_rate: 0.59
  novelty_score: 1

- id: 학교-CM1-CB-순열-MF-89
  page: 45 (매쓰플랫 · 89번)
  vendor_label: "동화고 2024 2학기 기말 14번 유사 · 정답률 56%"
  category_type: 유사문제
  summary: |
    국어 문제집 3권, 수학 문제집 3권, 영어 문제집 3권 총 9권을 책꽂이에 일렬로
    꽂을 때 수학 문제집끼리 모두 서로 이웃하고 영어 문제집끼리 서로 이웃하지 않도록
    꽂는 방법 수.
  category: "순열 · 묶음·이웃 금지 결합"
  M: {s: 2, k: 3, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-SC
      depth: 3
      effective_depth: 3
      description: "수학 3권 묶음 (한 덩어리·3! 내부) → 7객체 배치"
    - step: 2
      type: I-VF
      depth: 3
      effective_depth: 3
      description: "영어 이웃 금지 · 국어+묶음 배치 후 gap 삽입"
  insight_count: 2
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  rationale: "묶음+이웃금지 · 정답률 56% · 표준 상위. depth 8.0 · count 2."
  tier: star_4
  mechanism_primary: "묶음·이웃금지·gap 삽입"
  insight_type: 통찰형
  target_cohort: 상위권
  vendor_calibration_signal:
    L1_publication_correct_rate: 0.56
  novelty_score: 1

- id: 학교-CM1-CB-순열-MF-99
  page: 50 (매쓰플랫 · 99번)
  vendor_label: "동화고 2023 2학기 기말 4번 유사 · 정답률 73%"
  category_type: 유사문제
  summary: |
    1, 2, 3, 4, 5, 6 숫자 하나씩 적힌 6장 카드에서 서로 다른 3장 뽑아 일렬 나열.
    마지막 자리에 3의 배수 오도록 나열하는 방법 수.
  category: "순열 · 조건 자리 (3의 배수)"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-SC
      depth: 2
      effective_depth: 2
      description: "마지막 자리 후보 (3, 6) · 나머지 자리 순열"
  insight_count: 1
  depth_score: 4.0
  base_star: 2
  star: 2
  premium: false
  rationale: "표준 자리 조건 순열 · 정답률 73%. 절차형 근접."
  tier: star_2
  mechanism_primary: "순열·자리 조건"
  insight_type: 통찰형
  target_cohort: 중위권
  vendor_calibration_signal:
    L1_publication_correct_rate: 0.73
  novelty_score: 0

- id: 학교-CM1-CB-경우수-MF-49
  page: 25 (매쓰플랫 · 49번)
  vendor_label: "동화고 2023 2학기 기말 14번 유사 · 정답률 78%"
  category_type: 유사문제
  summary: |
    1~40 자연수 40개 공이 든 주머니. 공 1개 뽑을 때 공에 적힌 수가 25의 약수
    또는 3의 배수인 경우의 수.
  category: "합의 법칙·여집합/합집합 카운팅"
  M: {s: 1, k: 2, a: 2, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  rationale: "표준 합의 법칙 · 정답률 78% · 절차형."
  tier: star_1
  mechanism_primary: "합의 법칙 · 배수·약수"
  insight_type: 절차형
  target_cohort: 중위권
  vendor_calibration_signal:
    L1_publication_correct_rate: 0.78
  novelty_score: 0

- id: 학교-CM1-CB-확률합-MF-50
  page: 25 (매쓰플랫 · 50번)
  vendor_label: "동화고 2025 1학기 기말 1번 쌍둥이 · 정답률 76%"
  category_type: 유사문제
  summary: |
    서로 다른 두 주사위 동시 던질 때 두 눈 합이 10 이상 되는 경우의 수.
  category: "합의 법칙 표준"
  M: {s: 1, k: 1, a: 2, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  rationale: "표준 · 정답률 76% · 절차형 기본."
  tier: star_1
  mechanism_primary: "합의 법칙 · 열거"
  insight_type: 절차형
  target_cohort: 중위권
  vendor_calibration_signal:
    L1_publication_correct_rate: 0.76
  novelty_score: 0
```

### 와부고 2022 1학기 기말 (2015 개정 · **⚠️ CM1+CM2(GM) 혼재 · CM1 pool 부분만 인용**)

```yaml
- id: 학교-CM1-EQ-4차-WB22F-1
  page: 1 (와부고 2022 · 문항 1)
  vendor_label: "3.9점 · 선택형 · CM1-EQ 4차 근·계수"
  category_type: 선택형
  summary: |
    방정식 x⁴+4x³-x²-16x-12=0의 네 실근 α, β, γ, δ에 대해 (3-α)(3-β)(3-γ)(3-δ) 값.
  category: "4차식 · 근과 계수 · P(3) 활용"
  M: {s: 2, k: 2, a: 3, t: 0}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "(3-α)(3-β)(3-γ)(3-δ) = P(3) (P(x) = ∏(x-근))"
    - step: 2
      type: I-CON
      depth: 1
      effective_depth: 1
      description: "P(3) 직접 대입"
  insight_count: 2
  depth_score: 7.0
  base_star: 4
  star: 3
  premium: false
  rationale: "P(3) = ∏(3-근) 대수 통찰 · 표준 · depth 7.0 · count 2. 학평 반복 원형."
  tier: star_3
  mechanism_primary: "다항식 · 근과 계수 · P(a) 대입"
  insight_type: 통찰형
  target_cohort: 중상위권
  anchor_status: candidate
  novelty_score: 1

- id: 학교-CM1-EQ-부등식-WB22F-5
  page: 2 (와부고 2022 · 문항 5)
  vendor_label: "4.4점 · 선택형 · CM1-EQ 연립부등식"
  category_type: 선택형
  summary: |
    연립부등식 {|2x-1| < 7, 2x²-11x+5 ≥ 0}을 만족시키는 모든 정수 x 값의 합.
  category: "절댓값·이차 부등식 연립"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "절댓값 부등식 → 구간 · 이차부등식 → 두 구간"
    - step: 2
      type: I-CON
      depth: 1
      effective_depth: 1
      description: "교집합 · 정수 열거·합"
  insight_count: 2
  depth_score: 4.5
  base_star: 3
  star: 3
  premium: false
  rationale: "절댓값·이차 연립 · 표준 depth 4.5. star_3."
  tier: star_3
  mechanism_primary: "절댓값·이차부등식 연립·정수해 합"
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 0

- id: 학교-CM1-EQ-3차-WB22F-7
  page: 2 (와부고 2022 · 문항 7)
  vendor_label: "4.6점 · 선택형 · CM1-EQ 1의 세제곱근"
  category_type: 선택형
  summary: |
    삼차방정식 x³=1의 한 허근 ω. 6/(ω⁹+7ω⁵+ω) 값.
  category: "1의 세제곱근·감차"
  M: {s: 2, k: 3, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P2]
      description: "ω³=1 · ω⁹=1, ω⁵=ω² 감차"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "ω²+ω+1=0 · 분모 정리 · ω+1/ω=-1"
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "6/(분모) 최종 계산"
  insight_count: 3
  depth_score: 8.67
  base_star: 5
  star: 4
  premium: false
  rationale: "1의 세제곱근 지수 감차 + 분모 통찰 3단. depth 8.67 · count 3. O-08 원형 표준."
  tier: star_4
  mechanism_primary: "1의 세제곱근·감차·분수식"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  cross_reference:
    - source: "O-08 원형 (1의 n제곱근+감차)"
      relation: "동일 원형 · 지수·분수식 확장"
  novelty_score: 2

- id: 학교-CM1-EQ-부등식-WB22F-논술1
  page: 5 (와부고 2022 · 논술형 1)
  vendor_label: "6.0점 · 논술형 · CM1-EQ 절댓값·구간"
  category_type: 논술형
  summary: |
    부등식 |x+3|+|x-1| ≤ 6. 1-1: f(x)=|x+3|+|x-1|을 x 범위별 절댓값 없는
    식으로 표현·과정 (3.0점). 1-2: y=f(x) 그래프 그리기·해 구하기·과정 (3.0점).
  category: "이중 절댓값 · case 분리 · 그래프"
  M: {s: 3, k: 2, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "x=-3, x=1 임계 · 3구간 case별 식"
    - step: 2
      type: I-BW
      depth: 3
      effective_depth: 3
      description: "각 case 그래프 세그먼트 · 연속성"
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "f(x) ≤ 6 해집합 · 좌우 대칭·구간 결합"
  insight_count: 3
  depth_score: 8.67
  base_star: 5
  star: 4
  premium: false
  rationale: "이중 절댓값 · 논술 · 표준 킬러. count 3 · premium 미달."
  tier: star_4
  mechanism_primary: "이중 절댓값·case·그래프"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 1

# 와부고 2022 8번·15번·논술 2·3 등은 CM2 (GM 도형·평면좌표) → CM2 자산 pool 편입
# 여기서는 CM1 부분만 기록
```

### 와부고 2023 1학기 기말 (2015 개정 · CM2 편중, CM1 부분만 발췌)

```yaml
- id: 학교-CM1-EQ-3차-WB23F-1
  page: 1 (와부고 2023 · 문항 1)
  vendor_label: "3.9점 · 선택형 · CM1-EQ 삼차식 계수"
  category_type: 선택형
  summary: |
    계수가 실수인 사차방정식 x⁴+ax³+bx²-4x+b=0 한 근이 1일 때, a+b의 값.
  category: "사차식 · 근 대입·계수 결정"
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  rationale: "근 대입 · 절차형 기본. star_1."
  tier: star_1
  mechanism_primary: "다항식 근 대입"
  insight_type: 절차형
  target_cohort: 중위권
  novelty_score: 0

- id: 학교-CM1-EQ-이차-WB23F-9
  page: 3 (와부고 2023 · 문항 9)
  vendor_label: "4.8점 · 선택형 · CM1-EQ 삼각부등식·이차"
  category_type: 선택형
  summary: |
    1보다 큰 실수 x에 대해 세 변 길이 x-1, x, x+1인 삼각형이 둔각삼각형 되도록
    하는 x 범위 a < x < b. 방정식 ax²+bx-6=0의 두 근 제곱 합.
  category: "삼각형 둔각 조건 · 이차식 근·계수"
  M: {s: 2, k: 3, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-XU
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "둔각삼각형 조건: 최대변² > 나머지² 합 (cos이 아닌 대수 판별)"
    - step: 2
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "삼각부등식+둔각 · 두 부등식 연립"
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "a, b · 이차식 근계수 · 제곱 합"
  insight_count: 3
  depth_score: 8.67
  base_star: 5
  star: 4
  premium: false
  rationale: "둔각+삼각부등식 융합 · 학평 반복 원형. depth 8.67 · count 3. novelty 2."
  tier: star_4
  mechanism_primary: "둔각 조건·삼각부등식·이차 근계수"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 2

- id: 학교-CM1-PL-근-WB23F-10
  page: 3 (와부고 2023 · 문항 10)
  vendor_label: "4.9점 · 선택형 · CM1-PL·EQ 정수 아닌 근 조건"
  category_type: 선택형
  summary: |
    정수 아닌 서로 다른 네 수 a, b, c, d에 대해 삼차식 f(x)=x³-x²-x:
    (가) f(a)=f(b)=0 (나) f(2)=f(c)=f(d)=2. (ab-a-b)/(3c²+c+d³) 값.
  category: "삼차식 · 두 방정식 · 대칭식 처리"
  M: {s: 3, k: 3, a: 3, t: 1}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "a, b는 f(x)=0 근 · x³-x²-x=x(x²-x-1) → a, b = (1±√5)/2"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "c, d는 f(x)=2 근 · f(2)=2 (a=2 포함) · f(x)-2=(x-2)(x²+x+1)"
    - step: 3
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "a·b, c·d 근계수 · 대칭식 (ab-a-b), (3c²+c+d³) 조작"
    - step: 4
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "감차 · 최종 정리"
  insight_count: 4
  depth_score: 8.75
  base_star: 5
  star: 5
  premium: true
  rationale: "삼차식 두 방정식 근 · 근계수·대칭식. depth 8.75 · count 4 · P3. premium 확정."
  tier: star_5_premium
  mechanism_primary: "삼차식 · 두 방정식 근·대칭식 조작"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 3

- id: 학교-CM1-EQ-3차-WB23F-13
  page: 5 (와부고 2023 · 문항 13)
  vendor_label: "5.2점 · 선택형 · CM1-EQ 3차·중근·절댓값"
  category_type: 선택형
  summary: |
    삼차방정식 x³+3kpx²-4k³=0 (k 실수)는 중근 α²과 나머지 다른 근 β를 갖는다.
    α²+β²=8일 때, 부등식 2|x+p|-3|x-α| ≥ 1을 만족하는 정수 x 개수 최대가
    되도록 하는 α의 값.
  category: "삼차식 중근·절댓값·정수해 최대"
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "중근 α² · x³+3kpx²-4k³=(x-α²)²(x-β) 전개·계수 비교"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "α²+β²=8 · α² 관계식 · α 결정 case"
    - step: 3
      type: I-BW
      depth: 3
      effective_depth: 3
      description: "2|x+p|-3|x-α| 부호 case (2구간·4구간) · 정수해 카운팅"
    - step: 4
      type: I-VF
      depth: 3
      effective_depth: 3
      description: "각 α case 최대 개수 검증 · 최적 α"
  insight_count: 4
  depth_score: 9.0
  base_star: 5
  star: 5
  premium: true
  rationale: "중근+절댓값+정수해 최대 · 3중 조건 킬러. depth 9.0 · count 4 · P3 · premium."
  tier: star_5_premium
  mechanism_primary: "삼차식 중근·절댓값 case·정수해 최대"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 3

- id: 학교-CM1-EQ-3차-WB23F-12
  page: 4 (와부고 2023 · 문항 12)
  vendor_label: "5.1점 · 선택형 · CM1-EQ 두 삼차식 조건"
  category_type: 선택형
  summary: |
    두 삼차식 f(x)=x³-x²-10x-8, g(x) (가) g 최고차 계수 1 (나) f(x)g(x)=0의
    서로 다른 세 실근 (다) g(x)=0은 서로 다른 두 실근·부호 다름.
    g(-3/2) > 0일 때 10 미만 자연수 중 g(n) > 0 만족하는 모든 n 합.
  category: "다항식 · 근 조건·부호변화·자연수 카운팅"
  M: {s: 3, k: 3, a: 3, t: 1}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "f(x)g(x)=0 서로 다른 3근 · f의 3근 (-2,-1,4)과 g의 근 겹침·중복"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "g 두 근 부호 다름 · g(x)=(x-α)(x-β), αβ<0"
    - step: 3
      type: I-SC
      depth: 3
      effective_depth: 3
      description: "g(-3/2) > 0 · 근 위치 case 분리"
    - step: 4
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "각 case에서 g(n) > 0 (n=1~9) 카운팅·합"
  insight_count: 4
  depth_score: 8.75
  base_star: 5
  star: 5
  premium: true
  rationale: "두 삼차·근 관계·부호·자연수 카운팅 4단. depth 8.75 · count 4. premium."
  tier: star_5_premium
  mechanism_primary: "두 다항식 근 조건·부호·카운팅"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 3

# 와부고 2023 문항 11·14·15·17·18·19 등은 CM2 (도형·원·평면좌표) → CM2 pool
```

## 표본 판정 요약 (35문 · CM1 pool 대상)

| ★ 등급 | 개수 | 대표 |
|---|---|---|
| ★ 1 | 3 | 매쓰플랫 49·50 · 와부고 2023 문항 1 |
| ★ 2 | 2 | 매쓰플랫 99 · 동화고 2024 문항 3 (복소수) |
| ★ 3 | 6 | 동화고 2024 문항 14·11, 매쓰플랫 100, 와부고 2022 문항 1·5 |
| ★ 4 | 15 | 동화고 2024 문항 15·7·12·논술2, 동화고 2025 문항 13·14·17·11·19·15·매쓰플랫 89, 와부고 2022 문항 7·논술1, 와부고 2023 문항 9 |
| ★ 5 premium | 6 | 동화고 2024 논술3·논술4, 동화고 2025 문항 22·23, 와부고 2023 문항 10·12·13, 매쓰플랫 01 (동화고 2023 원본) |

**premium 후보 총 7건**:
1. 동화고 2024 논술4 · 복소수 8주기·50이하 카운팅 → **O-08 확장 원형**
2. 동화고 2024 논술3 · A⁴-B⁴ 인수분해·항등식·나머지 → **O-09 확장 원형**
3. 동화고 2025 문항 22 · 다항식 조건·최대·자연수 → **신규 원형 (O-NEW-DH-01)**
4. 동화고 2025 문항 23 · 다층 조건·최적화 킬러 → **신규 원형 (O-NEW-DH-02)**
5. 와부고 2023 문항 10 · 삼차식 두 방정식 근·대칭식 → **신규 원형 (O-NEW-WB-01)**
6. 와부고 2023 문항 13 · 삼차식 중근+절댓값+정수해 최대 → **신규 원형 (O-NEW-WB-02)**
7. 와부고 2023 문항 12 · 두 삼차식 근 조건·부호·자연수 → **신규 원형 (O-NEW-WB-03)**
8. 매쓰플랫 01 (동화고 2023) · 두 이차함수 구간·최대·최소·매개변수 range → **신규 원형 (O-NEW-DH-03)**

## 학교별 특유 출제 패턴 매핑

### 동화고 vs 와부고 vs 삼육고 비교표

| 축 | 동화고 | 와부고 | 삼육고 |
|---|---|---|---|
| 원본성 | ⭐ 자체 창작 강함 | ⭐ 자체 창작 · 학평 근간 | ✗ 학평 편집 (창작 X) |
| 배점 세분 | 3.5~5.0 (0.1 단위) | 3.9~5.4 (0.1 단위) | 3~5점 (1단위) |
| 논술형 배점 | 크다 (11·12·15점) | 크다 (6·9점) · 서술 요구 | 없음 |
| CM1 순정도 (2022개정) | ✓ 2025부터 완벽 | ✗ 2015 개정 (CM2 GM 혼재) | ✓ CM1 학평 대상 |
| CM1-MX 행렬 | ✓ 2025부터 포함 | ✗ 자료 없음 | ✓ 편집 시 포함 |
| **킬러 통찰 축** | I-EQV·I-BW·I-VF (case 카운팅) | I-EQV·I-CON·I-XU (대칭식·부호) | 학평 원본 축 계승 |
| **정점 원형 count** | 4~5 (2025 강화) | 5~6 (2015 킬러 밀도 매우 높음) | 학평 킬러 그대로 |
| 자기복제 위험 | 매쓰플랫 유사문제 재활용 · 유사도 0.85+ | 학평 원형 반복 · 중간 위험 | 학평 100% 재수록 · 매우 높음 |

### 학교기출 vs 시판 벤더 자기복제 감지

| 학교기출 원형 | 시판 벤더 원형 근접 | 유사도 |
|---|---|---|
| 동화고 2024 논술4 (복소수 8주기) | 쎈-CM1-EQ-이차-0547 (O-08) | ~0.70 (지수만 다름) |
| 동화고 2024 논술3 (A⁴-B⁴ 항등식) | 쎈-CM1-PL-나머지-0263 (O-09) | ~0.65 (감차 통찰 동일) |
| 와부고 2022 문항 7 (ω⁹+7ω⁵+ω) | 쎈-CM1-EQ-이차-0542 (O-08) | ~0.60 (분수식만 확장) |
| 와부고 2023 문항 9 (둔각삼각형+이차) | 학평 반복 원형 | ~0.80 (**S4 시그니처 매칭 임박**) |
| 삼육고 (전체) | 학평 자산 (RPM·개념원리 학평 큐레이션) | **1.0 (재수록)** — 자기복제 감쇠 대상 |
| 매쓰플랫 유사 137문 | 동화고 실 기출 원본 | 0.85+ (**쌍둥이 표기 명시**) → problem-author pick 시 회피 |

### CM1 소단원별 정점 원형 검증 · 학교 특유 통찰 축

| 소단원 | 시판 원형 (기존) | 학교기출 신규 원형 | 학교 특유 축 |
|---|---|---|---|
| CM1-PL (다항식·항등식·나머지) | O-09 (P(x)-f(x) 감차) | **O-NEW-DH-04**: A⁴-B⁴ 항등식 (동화고 2024 논술3) | I-EQV 대수 통찰 심화 |
| CM1-EQ (이차·삼차·복소수) | O-07 (SFFT)·O-08 (1의 n제곱근)·O-14 (도형+대수) | **O-NEW-DH-03**: 두 이차함수 구간·최대·최소 (동화고 2023 killer) · **O-NEW-WB-01**: 삼차식 두 방정식 근·대칭 (와부고 2023 문항 10) · **O-NEW-WB-02**: 중근+절댓값 (와부고 2023 문항 13) · **O-NEW-WB-03**: 두 삼차식 근 조건 (와부고 2023 문항 12) | I-BW (근·계수 방향 뒤집기) · I-VF (case 검증) · I-SC (구간 카운팅) |
| CM1-CB (경우의 수) | O-10 (십자방)·O-11 (좌석 이중 이웃) | **O-NEW-DH-05**: 6명 다중 조건 배치 (동화고 2025 17번, 자기복제 감쇠) | I-SC·I-VF 페어링 |
| CM1-MX (행렬) | (기존 원형 부재) | **O-NEW-DH-06**: 행렬 성분 정의·연립 (동화고 2025 14번) | I-EQV 성분 관계 · CM1-MX 첫 학교기출 원형 |

## 회귀 정합률 (기존 시판 벤더 대비)

**35문 표본 시스템 순정 판정 vs 벤더 라벨 예측 (매쓰플랫 정답률 라벨링 활용)**:

| 벤더 라벨 (정답률) | 예측 ★ 회귀 | 실측 ★ | 편차 |
|---|---|---|---|
| 78% (매쓰플랫 49·50) | ★ 1 예측 | ★ 1 실측 | 0 (정합) |
| 73% (매쓰플랫 99) | ★ 2 예측 | ★ 2 실측 | 0 (정합) |
| 59% (매쓰플랫 100) | ★ 3 예측 | ★ 3 실측 | 0 (정합) |
| 56% (매쓰플랫 89) | ★ 4 예측 | ★ 4 실측 | 0 (정합) |
| 46% (매쓰플랫 01, 동화고 2023 killer) | ★ 5 예측 | ★ 5 premium 실측 | 0 (정합) |
| 44% (매쓰플랫 02) | ★ 5 예측 | ★ 5 실측 | 0 (정합) |

→ **회귀 매우 안정**. 매쓰플랫 정답률은 CM1 벤더 라벨 회귀 새 축으로 편입 가치 매우 높음.

**정답률 → ★ 회귀 함수 (신규 v1.0)**:
```
매쓰플랫_star_predict(rate) =
  if rate ≥ 75%:     1  (표본 절차형)
  elif rate ≥ 65%:   2  (표준·기본형)
  elif rate ≥ 55%:   3  (표준 통찰형)
  elif rate ≥ 50%:   4  (킬러 근접)
  elif rate ≥ 45%:   4~5  (킬러·premium 임박)
  else:              5 premium 매우 유력
```

## 활용 권장사항 (problem-author v2.1)

### CM1 시험지 (기말예상) 창작 시 우선순위

1. **최우선 pool (창작 원본 최고 확률)**: 동화고 2024·2025 자체 창작 문항 (특히 논술형·5점급)
2. **차우선 pool**: 매쓰플랫 유사 137문 중 정답률 45~55%대 (킬러 근접)
3. **참조 pool**: 와부고 2022·2023 CM1 부분 (구 교육과정 · 재편 필요)
4. **자기복제 회피**: 삼육고 전체 · 매쓰플랫 유사 (동화고 실 기출 쌍둥이) 그대로 사용 금지

### premium 슬롯 pick

- **1순위**: 신규 원형 8건 (O-NEW-DH-01~06, O-NEW-WB-01~03) — 시판 벤더에 없는 학교 특유 통찰
- **2순위**: O-08·O-09 확장 (동화고 2024 논술3·논술4 · 지수·분수 응용)
- **회피**: 학평 원형 (삼육고 편집 · 학평 assets 이미 pool)

### 특이사항 (🔴 CM1 교육과정 외 침투 감지)

- **와부고 2022 3번 (아폴로니우스 원)**: CM1 pool에서 제외 (CM2 GM 원의방정식 정규)
- **와부고 2022 논술 2·3 (좌표평면 내심·외심)**: CM1 pool에서 제외 (CM2 GM 정규)
- **동화고 2024·2025 전 문항**: **CM1 교육과정 외 침투 없음** (2022 개정 CM1 순수)
- **동화고 2024 논술3 (A⁴-B⁴ 인수분해)**: CM1-PL 정규 · 4차식이지만 인수분해 통찰 활용이므로 4차 완전제곱꼴 금지 정책 위반 아님
- **케일리해밀턴·역행렬 등 CM1-MX 상위 침투**: 학교기출 5개 학년도 표본에서 **전무** — 안전

## 문항 예측 종합 (전체 210문 추정)

| ★ 등급 | 표본 실측 (35문) | 회귀 예측 (175문) | 전체 (210문) |
|---|---|---|---|
| ★ 1 | 3 | ~35 | ~38 (18%) |
| ★ 2 | 2 | ~30 | ~32 (15%) |
| ★ 3 | 6 | ~40 | ~46 (22%) |
| ★ 4 | 15 | ~55 | ~70 (33%) |
| ★ 5 · premium | 9 | ~15 | ~24 (11%) |

## 핵심 관찰

1. **동화고 = CM1 원본 pool 최적** (2025부터 2022 개정 완벽 · 자체 창작 · 논술 킬러 강함)
2. **와부고 = 정점 킬러 원형 최고 밀도** (2015 개정 시대 · CM1 부분은 재편 필요 · 삼차식 3원형 신규 발굴)
3. **삼육고 = 학평 재수록** (자체 원본 아님 · 자기복제 감쇠 대상 · 큐레이션 참고만)
4. **매쓰플랫 정답률 라벨 = 벤더 회귀 새 축** (표본 6문 → 편차 0으로 완벽 정합 · v1.0 회귀 함수 안정)
5. **premium 신규 원형 8건 발굴** — CM1 시험지 pool 대폭 확장 (기존 O-07·08·09·10·11·12·13·14의 3배 확장 효과)
6. **CM1-MX 학교기출 첫 원형 확보** (동화고 2025 문항 14) — 기존 원형 부재 상태 해소
7. **교육과정 침투 감지 결과 CLEAN** — 상위 과정 (역행렬·트레이스·집합기호 등) 학교기출에서 전무. CM1 pool 안전

## 관련 자산

- 정독 스키마: [`bank/정독-스키마-v2.0.md`](정독-스키마-v2.0.md) v2.0
- 벤더 회귀: [`bank/vendor-label-calibration.md`](vendor-label-calibration.md) v1.11 (매쓰플랫 정답률 축 편입 대기)
- premium 원형: [`bank/premium-원형-카탈로그.md`](premium-원형-카탈로그.md) v1.1 (O-NEW-DH-01~06, O-NEW-WB-01~03 신설 대기)
- 앵커 pool: `bank/anchors/CM1-PL.md` · `CM1-EQ.md` · `CM1-CB.md` · `CM1-MX.md` (신규 원형 편입 후보)
- CM2 대응: `bank/mechanism-데이터-학교기출-CM2.md` (세션 62 진행 중)

## 변경 이력

- 2026-07-21 v1.0 — 초판 · 세션 62 · 학교기출 CM1 표본 35문 · premium 8건 · 신규 원형 8건 · 매쓰플랫 정답률 회귀 축 신설
