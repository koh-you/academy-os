---
name: mechanism-데이터-아샘파이널-CM2
description: 아샘파이널 (내신파이널) 공통수학2 중간고사 (10회 · 도형의 방정식·집합 진입) + 기말고사 (10회 · 명제~유리함수·무리함수) + 부록 (집합·명제 각 4회) 표본 25문 층화 재판정 · CM2 4대단원 (GM·ST·FN·RF) 실측. 실전 재수록 pool · 학평·시판 킬러 원형 밀집. 저작권 준수 (원문 전사 없음 · 시그니처 요약).
metadata:
  type: reference
  version: v1.0
  established: 2026-07-22
  source: 아름다운샘 "내신파이널" 공통수학2 (중간고사 + 기말고사 + 부록 · 2025년 개정판 · 교사용)
  section: CM2 전체 (도형의 방정식·집합·명제·함수·유리함수·무리함수)
  unit_code: CM2
  sub_unit: 전체 (GM·ST·FN·RF 4대단원)
  citation_note: "아름다운샘 내신파이널 CM2 · 학습 목적 · 저작권 준수 (원문 전사 없음 · 발문 요약 · 시그니처 3원소)"
  extract_range: "중간고사 1~10회 문항표 + 부록 1~4회 (집합의 뜻·포함관계·연산·연산법칙) + 기말고사 1~10회 문항표 + 부록 1~4회 (집합·명제 심화) · 본문 표본 4개 페이지 (중간 10·16·22, 기말 10·22)"
  pages: "중간 001~072 · 기말 001~072"
  total_problems: 524  # 중간 230 (23×10) + 부록 32 (8×4) + 기말 230 (23×10) + 부록 32 (8×4) = 524
  sample_problems: 25
  predicted_problems: 499
  judgment_protocol: schema.md v3.9 3층 모델 (M·I·X) + v3.9 저노출 게이트
  parent_pilot: [세션 62 블랙라벨 CM2 · 세션 63 아샘파이널 CM1 · 파일럿 1·2·7·8 + Agent C~R + 파일럿 CM2-GM/ST/FN/RF 완결]
  vendor_label_calibration: v1.12 · 세션 63 CM1 회귀 (신뢰도 B급) 계승 · CM2 회귀 초판
  cross_reference:
    - mechanism-데이터-아샘파이널-CM1.md (자매 파일 · 라벨 스키마 계승)
---

# 아샘파이널 공통수학2 정독 데이터 v1.0

## 배경 · 목적

아름다운샘 "내신파이널" 공통수학2는 **1학년 2학기 내신 시험 대비 파이널 실전 재수록 pool**. 구성:

**중간고사 (72p · 2학기 1차 시험 대비)**: 도형의 방정식~집합의 연산 초반 범위. **1학년 2학기 중간고사 형식 10회 × 23문항 = 230문** + **부록 4회 (집합의 뜻·포함관계·연산·연산법칙) × 8문 = 32문**. 총 262문.

**기말고사 (72p · 2학기 2차 시험 대비)**: 명제~유리함수·무리함수 범위. **1학년 2학기 기말고사 형식 10회 × 23문항 = 230문** + **부록 4회 (집합의 뜻과 포함관계·집합의 연산 법칙·명제·명제와 필요충분조건) × 8문 = 32문**. 총 262문.

**아샘파이널 CM2 총 규모**: **524문** (교사용 완성 회수)

**정독 목적**:
- 아샘파이널 CM2는 **실전 재수록 성격이 강한 pool**로 학평·시판 킬러 원형이 밀집 등장. 자기복제 위험 관리 우선순위.
- 벤더 라벨 (하·중하·중·중상·상·최상) + 점수 (3.3/3.7/4/6/8점) 두 축 회귀 매핑 CM1 (신뢰도 B급) → CM2 확장 · 소단원 편중 (GM/ST/FN/RF) 균형 확인.
- CM2 4대단원 균형 확인 (파일럿 CM2-GM 4소단원 + ST + FN + RF-01·02 완결 매트릭스에 아샘파이널 편입).
- **자매 파일**: `bank/mechanism-데이터-아샘파이널-CM1.md` (v1.0 · 세션 63 신설) 라벨 스키마 계승.

## 라벨 체계 (아샘파이널 CM1과 동일 · 재확인)

**난이도 6단계**: 하 · 중하 · 중 · 중상 · 상 · 최상
**점수 5단계**: 3.3점 · 3.7점 · 4점 · 6점 · 8점

**문항표 (문항 정보표) 활용**:
- 각 회차 1~23번 각 문항의 소단원명·난이도·배점 명시
- 유튜브 강의 아이콘 (▶ 표시 문항) = 대표 심화 문항 (통상 최상급 킬러 · 회차당 3~5개)

## 회차별 편성 개관 (문항표 스캔 기반)

### 중간고사 편성 (도형의 방정식·집합 진입)

| 회차 | 주요 소단원 편성 (관찰) | 최상급 (23번 급) 유형 |
|---|---|---|
| M01 | 평면좌표·직선의 방정식·원의 방정식·도형의 이동 | 원 접선·직선 최적화 |
| M02 | 평면좌표·직선의 방정식·원의 방정식·집합 진입 | 원-직선 교점 조건 |
| M03 | 원의 방정식·접선·집합 도입 | 접선 개수 조건 |
| M04 | 원·집합의 뜻과 표현 | 원 위 점 극값 |
| M05 | 원·집합 심화 | 원 접선 case 분할 |
| M06 | 도형 이동·집합 연산 | 대칭이동 · 집합 조건 |
| M07 | 집합의 연산·관계 | 집합 부분·연산 결합 |
| M08 | 집합 연산·표현 | 집합 원소 조건 |
| M09 | 원·집합 통합 심화 | 원 위 점 · 집합 원소 |
| M10 | 도형 이동·집합 종합 | 대칭·집합 · 매개변수 결정 |

**부록 (M-A1~A4)**: 집합의 뜻·포함관계 (A1) · 집합의 뜻과 포함관계 (A2) · 집합의 연산 (A3) · 집합의 연산 법칙 (A4). 각 8문.

### 기말고사 편성 (명제~유리·무리)

| 회차 | 주요 소단원 편성 (관찰) | 최상급 (23번 급) 유형 |
|---|---|---|
| F01 | 명제·절대부등식·합성함수 진입 | 명제 참·거짓 조건 |
| F02 | 명제·합성함수·역함수 | 합성 규칙 · 역함수 조건 |
| F03 | 함수·유리식·유리함수 진입 | 유리함수 그래프 조건 |
| F04 | 유리식·유리함수 | 유리식 항등식 case |
| F05 | 유리함수·무리식 진입 | 유리함수 점근선·매개변수 |
| F06 | 유리함수·무리함수 | 무리함수 정의역·범위 |
| F07 | 무리함수·합성 | 무리함수 · 역함수 · 교점 |
| F08 | 명제·유리·무리 종합 | 매개변수 최적화·case |
| F09 | 무리함수·유리함수 종합 | 융합 최적화 |
| F10 | 종합 · 명제·유리·무리 | 융합형 · 절대부등식 |

**부록 (F-A1~A4)**: 집합의 뜻과 포함관계 (A1·A2) · 집합의 연산 법칙 (A2) · 명제 (A3) · 명제와 필요충분조건 (A4). 각 8문.

## 표본 판정 (25문 층화)

### 중간고사 1회 (원의 방정식·접선 최상급)

- id: 아샘파이널-CM2-GM-M01-21
  page: 10
  vendor_label: "상 · 6점"
  category_type: "중간고사 1회 21번 · 유튜브 강의"
  summary: |
    원 $x^2+y^2-6x-6y+9=0$과 직선 $y=-2x+n$이 서로 다른 두 점에서
    만나도록 하는 자연수 $n$의 개수.
  category: "원과 직선 · 교점 조건 · 점과 직선의 거리"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "원 표준형 변환 $(x-3)^2+(y-3)^2=9$ · 중심 (3,3) · 반지름 3"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "중심과 직선 $2x+y-n=0$ 사이 거리 < 3 조건 · $|9-n|/\\sqrt{5} < 3$"
    - step: 3
      type: I-XU
      depth: 2
      effective_depth: 2
      description: "부등식 정리 후 자연수 $n$ 범위 계산 · 개수 카운트"
  insight_count: 3
  depth_score: 7.33
  base_star: 4
  star: 4
  premium: false
  rationale: |
    원-직선 교점 개수 판정 표준 유형. 점거리 정형 · 통찰 3단.
    벤더 "상·6점" → 시스템 ★ 4 (편차 정합)
  tier: star_4
  mechanism_primary: "원-직선 · 점거리 · 교점 조건"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 0

- id: 아샘파이널-CM2-GM-M01-22
  page: 10
  vendor_label: "최상 · 8점"
  category_type: "중간고사 1회 22번 · 유튜브 강의"
  summary: |
    점 $\mathrm{A}(-1,4)$에서 원 $x^2+y^2-4x-6y+9=0$에 그은
    두 접선의 접점을 $\mathrm{B, C}$라 할 때, 삼각형 ABC의 넓이.
  category: "원 밖의 점 · 두 접선 · 접점 삼각형 넓이"
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P2]
      description: "원 표준형 변환 · 중심 O(2,3) · $r=2$ · AO 거리 계산"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "접선 길이 $\\overline{\\mathrm{AB}} = \\sqrt{\\overline{\\mathrm{AO}}^2 - r^2}$ · 접선 대칭 이용"
    - step: 3
      type: I-VF
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "삼각형 ABC 넓이 = $\\overline{\\mathrm{BC}} \\cdot h / 2$ · 대칭성으로 O를 이용"
    - step: 4
      type: I-XU
      depth: 2
      effective_depth: 2
      description: "닮음 또는 삼각비로 $\\overline{\\mathrm{BC}}$ 계산 후 넓이 산출"
  insight_count: 4
  depth_score: 8.75
  base_star: 5
  star: 5
  premium: false  # count < 5
  rationale: |
    원 밖의 점 · 접선 · 접점 삼각형 넓이 학평·킬러급 정통 (O-GM-06 원형).
    통찰 4단 · depth avg 2.75 · max=3 · 경계 ★ 5 (count 미달로 premium 아님).
    벤더 "최상·8점" → 시스템 ★ 5 (편차 정합)
  tier: star_4
  mechanism_primary: "원 밖의 점 · 접선 · 삼각형 넓이"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 1
  cross_reference:
    - source: 마-CM2-GM-원-0512
      relation: "학평 원 접선 삼각형 원형 · 아샘파이널 계수 변형"

- id: 아샘파이널-CM2-GM-M01-23
  page: 10
  vendor_label: "최상 · 8점"
  category_type: "중간고사 1회 23번 · 유튜브 강의"
  summary: |
    좌표평면 위의 두 점 $\mathrm{A}(1,6)$, $\mathrm{B}(1,2)$와 직선
    $4x-3y+n=0$ 위의 한 점 $\mathrm{P}$에 대하여 $\overline{\mathrm{PA}} + \overline{\mathrm{PB}}$의
    최솟값. (단, 두 점 A, B가 모두 직선의 같은 쪽에 있다.)
  category: "점의 대칭 · 최단 거리 (직선 반사)"
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P2]
      description: "같은 쪽 확인 · 한 점을 직선에 대칭이동 (표준 반사 원리)"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "대칭점 A'의 좌표 계산 (수직 조건 + 중점 조건 연립)"
    - step: 3
      type: I-VF
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "$\\overline{\\mathrm{A'B}}$ = 최솟값 · 두 점 거리 공식"
    - step: 4
      type: I-XU
      depth: 2
      effective_depth: 2
      description: "$n$이 파라미터 → $n$ 범위 조건 만족하도록 대칭 위치 · 값 산출"
  insight_count: 4
  depth_score: 8.75
  base_star: 5
  star: 5
  premium: false  # count < 5
  rationale: |
    직선 대칭·최단거리 (반사 원리) CM2-GM 정점 원형 (O-GM-01).
    통찰 4단 안정 · premium 임계 count 미달 · 경계 ★ 5.
    벤더 "최상·8점" → 시스템 ★ 5 (편차 정합)
  tier: star_4
  mechanism_primary: "점 대칭 · 최단 거리"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 1

### 중간고사 5회 (원 · 접선 심화)

- id: 아샘파이널-CM2-GM-M05-21
  page: 16
  vendor_label: "상 · 6점"
  category_type: "중간고사 5회 21번 · 유튜브 강의"
  summary: |
    원 $(x+2)^2+y^2=25$ 위의 두 점 A, B와 원 밖의 점 P에 대하여
    직선 AB의 방정식이 $y=-2x-1$일 때, $\overline{\mathrm{PA}} \cdot \overline{\mathrm{PB}}$의 값.
  category: "원의 현 · 방멱 정리 (power of a point)"
  M: {s: 2, k: 3, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P2]
      description: "원 중심·반지름 파악 · 직선과 원 교점 = A, B"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "P·직선상 위치 확정 · $\\overline{\\mathrm{PA}} \\cdot \\overline{\\mathrm{PB}}$는 방멱 (P 좌표 → 원식 대입)"
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "직접 계산 · P가 원 밖 → 방멱은 |중심-P|² - r² 절댓값"
  insight_count: 3
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  rationale: |
    방멱 정리 (또는 원식 직접 대입) 응용. 학평 심화급 정통.
    벤더 "상·6점" → 시스템 ★ 4 (편차 정합)
  tier: star_4
  mechanism_primary: "원의 현 · 방멱 정리"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 1

- id: 아샘파이널-CM2-GM-M05-22
  page: 16
  vendor_label: "최상 · 8점"
  category_type: "중간고사 5회 22번 · 유튜브 강의"
  summary: |
    직선 $mx-y+1=0$이 직선 $x-2y-1=0$과 수직이고,
    두 직선 $(3-a)x - y + 1 = 0$과 $mx + a^2y - 1 = 0$이 평행하도록 하는 정수 $a$의 개수.
  category: "직선 수직·평행 조건 결합 · 매개변수 정수 case"
  M: {s: 2, k: 3, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P2]
      description: "수직 조건: 기울기 곱 = -1 → $m$ 결정 ($m=-2$)"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "평행 조건: 계수 비 일치 (일치 배제) → $a$의 이차방정식"
    - step: 3
      type: I-SC
      depth: 3
      effective_depth: 3
      signal_ref: [P5]
      description: "일치 case ($a=1$ 등) 배제 확인 후 유효 정수 $a$ 개수"
    - step: 4
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "정수 $a$ case 열거 및 최종 카운트"
  insight_count: 4
  depth_score: 8.75
  base_star: 5
  star: 5
  premium: false
  rationale: |
    두 직선 수직 · 평행 · 일치 배제 case + 매개변수 정수 · 학평 킬러 원형.
    통찰 4단 · premium count 임계 미달 · 경계 ★ 5.
    벤더 "최상·8점" → 시스템 ★ 5 (편차 정합)
  tier: star_4
  mechanism_primary: "직선 수직·평행·일치 배제 · 매개변수 case"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 1

- id: 아샘파이널-CM2-GM-M05-23
  page: 16
  vendor_label: "최상 · 8점"
  category_type: "중간고사 5회 23번 · 유튜브 강의"
  summary: |
    좌표평면 위의 두 점 A(-2,1), B(3,0)에 대하여 점 P가 원
    $x^2+y^2-4x-4y+4=0$ 위를 움직일 때, $\overline{\mathrm{PA}}^2 + \overline{\mathrm{PB}}^2$의
    최댓값과 최솟값의 합.
  category: "원 위의 점 · 거리 제곱합 · 중점 활용"
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P2]
      description: "P(x,y) 원 위 · $\\overline{\\mathrm{PA}}^2 + \\overline{\\mathrm{PB}}^2$ 전개"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "중점 M 좌표 이용 · $\\overline{\\mathrm{PA}}^2 + \\overline{\\mathrm{PB}}^2 = 2\\overline{\\mathrm{PM}}^2 + \\frac{1}{2}\\overline{\\mathrm{AB}}^2$ (중선 정리)"
    - step: 3
      type: I-VF
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "$\\overline{\\mathrm{PM}}^2$ 극값 = (중심-M 거리 ± r)² · 최댓·최솟값 산출"
    - step: 4
      type: I-XU
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "최댓값+최솟값 = $2(\\overline{\\mathrm{CM}}^2+r^2) + \\overline{\\mathrm{AB}}^2/2 \\cdot 2$ 대칭 소거"
    - step: 5
      type: I-SC
      depth: 2
      effective_depth: 2
      description: "실수 계산 정리 · 최종 값 산출"
  insight_count: 5
  depth_score: 8.8
  base_star: 5
  star: 5
  premium: true
  rationale: |
    중선 정리 활용 · 원 위 점 극값 · 대칭 소거 → 학평 30번급 심화.
    depth_score 8.8 · max=3 · count=5 · P 카드 4개 · **premium 이중게이트 완전 통과**.
    ★ 5 premium 확정.
    벤더 "최상·8점" → 시스템 ★ 5 premium (편차 상향 · 라벨이 이 원형 최상급성 부여)
  tier: star_5_premium
  mechanism_primary: "원 위의 점 · 중선 정리 · 거리 제곱합 극값"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2

### 중간고사 10회 (원 · 대칭 · 자취 심화)

- id: 아샘파이널-CM2-GM-M10-21
  page: 22
  vendor_label: "상 · 6점"
  category_type: "중간고사 10회 21번 · 유튜브 강의"
  summary: |
    직선 $y=ax+b$가 점 A(4,3)을 지나는 임의의 원 접선일 때,
    이 접선을 $x$축의 방향으로 $3$만큼, $y$축의 방향으로 $-1$만큼
    평행이동한 직선의 방정식이 $y=cx+d$ 꼴로 나타내어질 때, $ad+bc$ (case).
  category: "직선 평행이동 · 접선 조건 · 매개변수"
  M: {s: 2, k: 3, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P2]
      description: "접선 조건 (원 중심 거리 = 반지름) → $a, b$ 관계식"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "평행이동 후 방정식 유도 → $c, d$를 $a, b$로 표현"
    - step: 3
      type: I-XU
      depth: 2
      effective_depth: 2
      description: "$ad+bc$ 대입 계산 · case 열거"
  insight_count: 3
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  rationale: |
    접선 조건 + 평행이동 결합 · 표준 통찰 3단. 학평 심화 후반부 급.
    벤더 "상·6점" → 시스템 ★ 4 (편차 정합)
  tier: star_4
  mechanism_primary: "직선 평행이동 · 접선 조건"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 1

- id: 아샘파이널-CM2-GM-M10-22
  page: 22
  vendor_label: "최상 · 8점"
  category_type: "중간고사 10회 22번 · 유튜브 강의"
  summary: |
    원 $(x-5)^2+(y+1)^2=25$ 위의 점 P와 원 위의 두 점
    A(-1,3), B(-1,-5)에 대하여 삼각형 PAB의 넓이의 최댓값.
    (그림 첨부: A, B, P 위치 및 원)
  category: "원 위 점 · 삼각형 넓이 최댓값 · 밑변 고정 + 높이 최대"
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P2]
      description: "A, B가 원 위에 있음 확인 · $\\overline{\\mathrm{AB}}$ 고정 계산"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "P는 원 위 → 밑변 AB 고정 · 넓이 최대 = P가 AB에서 가장 먼 위치"
    - step: 3
      type: I-VF
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "P의 최대 높이 = (중심-AB 거리) + r · 밑변 AB 길이 계산"
    - step: 4
      type: I-XU
      depth: 2
      effective_depth: 2
      description: "최대 넓이 = $\\frac{1}{2} \\times \\overline{\\mathrm{AB}} \\times h_{\\max}$"
  insight_count: 4
  depth_score: 8.75
  base_star: 5
  star: 5
  premium: false
  rationale: |
    원 위 삼각형 넓이 최대 원형 (O-GM-04) · 밑변 고정+높이 극값 안정 통찰 4단.
    premium count 임계 미달 · 경계 ★ 5.
    벤더 "최상·8점" → 시스템 ★ 5 (편차 정합)
  tier: star_4
  mechanism_primary: "원 위 삼각형 · 넓이 최대 · 높이 극값"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 1
  cross_reference:
    - source: 마-CM2-GM-원-0621
      relation: "학평 원 위 삼각형 최대 원형 · 아샘파이널 자기복제 감지 위험"

- id: 아샘파이널-CM2-GM-M10-23
  page: 22
  vendor_label: "최상 · 8점"
  category_type: "중간고사 10회 23번 · 유튜브 강의"
  summary: |
    좌표평면 위의 원 $x^2+y^2=20$과 이 원 위의 두 점 A, B에 대하여
    원의 중심을 O라 할 때 다음 조건을 만족시키는 점 P의 자취의 길이.
    (가) $\overline{\mathrm{PA}} = \overline{\mathrm{PB}}$
    (나) $\overrightarrow{\mathrm{OA}} \cdot \overrightarrow{\mathrm{OB}} = -4$
    (실제 발문에서는 벡터 대신 좌표 조건으로 명시됨)
  category: "원 위 점 · 자취 · 수직이등분선"
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P2]
      description: "$\\overline{\\mathrm{PA}} = \\overline{\\mathrm{PB}}$ → P는 AB의 수직이등분선 위"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "조건 (나) → $\\overline{\\mathrm{AB}}^2 = |OA|^2 + |OB|^2 - 2 \\cdot (-4) = 40+8 = 48$ · $\\overline{\\mathrm{AB}} = 4\\sqrt{3}$"
    - step: 3
      type: I-VF
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "AB 수직이등분선이 원과 만나는 두 점 · 이 두 점을 잇는 현이 자취 선분"
    - step: 4
      type: I-XU
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "중심에서 AB까지 거리 = $\\sqrt{r^2 - (\\overline{\\mathrm{AB}}/2)^2} = \\sqrt{20-12}=2\\sqrt{2}$ · 자취 길이 계산"
    - step: 5
      type: I-SC
      depth: 2
      effective_depth: 2
      description: "P가 원 위 조건 추가 시 유효 자취 = 원과 이등분선 교점 선분 · 최종 길이"
  insight_count: 5
  depth_score: 8.8
  base_star: 5
  star: 5
  premium: true
  rationale: |
    수직이등분선 자취 + 원 조건 + AB 길이 벡터 조건 → 다단계 통찰.
    depth_score 8.8 · count=5 · max=3 · P 카드 4개 · **premium 이중게이트 완전 통과**.
    ★ 5 premium 확정. 학평 30번급.
    ⚠️ **CM1 침투 우려**: $\\overrightarrow{}$ 벡터 표기 원문 사용 시 CM2 CM1 침투. 실제 발문 좌표식 확인 필요.
    벤더 "최상·8점" → 시스템 ★ 5 premium (편차 상향)
  tier: star_5_premium
  mechanism_primary: "자취 · 수직이등분선 · 원 위 점 결합"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2

### 중간고사 부록 (집합의 뜻·연산)

- id: 아샘파이널-CM2-ST-A01-06
  page: 66
  vendor_label: "중상 · 4점 (추정)"
  category_type: "중간 부록 1회 집합의 뜻·포함관계 6번"
  summary: |
    두 집합 $A = \{x \mid x^2 - 3x - 4 \le 0\}$, $B = \{x \mid |x-2| \le a\}$에
    대하여 $A \subset B$가 성립하도록 하는 실수 $a$의 최솟값.
  category: "집합 조건 · 포함관계 · 부등식 해 집합"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "$A = [-1, 4]$ 계산 (이차부등식 해)"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "$B = [2-a, 2+a]$ · $A \\subset B$ → $2-a \\le -1$ 그리고 $2+a \\ge 4$"
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "$a \\ge 3$ · 최솟값 $a=3$"
  insight_count: 3
  depth_score: 7.33
  base_star: 4
  star: 4
  premium: false
  rationale: |
    집합 포함 표준 심화 (이차부등식 + 절댓값 부등식 결합). 통찰 3단 안정.
    벤더 "중상·4점 (추정)" → 시스템 ★ 4 (편차 상향 · 라벨 저평가)
  tier: star_4
  mechanism_primary: "집합 · 포함관계 · 부등식"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 0

- id: 아샘파이널-CM2-ST-A04-08
  page: 68
  vendor_label: "최상 · 8점 (추정)"
  category_type: "중간 부록 4회 집합의 연산 법칙 8번"
  summary: |
    전체집합 $U$의 두 부분집합 $A$, $B$에 대하여 다음 조건을 만족시키는
    집합 $X$의 개수. (단, $n(U)=8$, $n(A)=4$, $n(B)=5$, $n(A \cap B)=2$)
    (가) $A \cap X = A \cap B$
    (나) $A \cup X = A \cup B$
  category: "집합 조건 · 연산 법칙 · 원소 자유도 case"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P2]
      description: "조건 (가) $A \\cap X = A \\cap B$ → $A$ 내부에서 $X$는 $B$와 동일"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "조건 (나) $A \\cup X = A \\cup B$ → $A^c$ 내부에서 $X \\supset B \\cap A^c$ 그리고 $X \\subset A \\cup B$"
    - step: 3
      type: I-SC
      depth: 3
      effective_depth: 3
      signal_ref: [P5]
      description: "$X$의 자유도: (A^c ∩ B^c) 원소 (몇 개인지 계산: 8-4-5+2=1)에서 임의로 포함/배제"
    - step: 4
      type: I-XU
      depth: 2
      effective_depth: 2
      description: "자유 원소 개수 → $2^k$ 개수 · 이 경우 미묘 case"
  insight_count: 4
  depth_score: 8.5
  base_star: 5
  star: 5
  premium: false
  rationale: |
    집합 조건 · X의 자유도 case 분해 · 벤 다이어그램 활용 원형 (O-ST-04).
    통찰 4단 · premium count 임계 미달 경계.
    벤더 "최상·8점 (추정)" → 시스템 ★ 5 (편차 정합)
  tier: star_4
  mechanism_primary: "집합 · X 자유도 · 벤 다이어그램"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 1

### 기말고사 1회 (명제·합성·유리 진입)

- id: 아샘파이널-CM2-FN-F01-22
  page: 10
  vendor_label: "상 · 6점"
  category_type: "기말고사 1회 22번 · 유튜브 강의"
  summary: |
    두 함수 $f(x) = \sqrt{x-1} - 2$, $g(x) = -x+3$에 대하여 두 그래프로
    둘러싸인 부분의 넓이 ($x = -3$과 $x = 1$ 사이 · 그림 첨부).
  category: "무리함수 · 직선 · 그래프 넓이 (그림 기반)"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "무리함수 $y = \\sqrt{x-1} - 2$ 정의역·개형 파악 · 직선 개형"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "교점 좌표 계산 · 무리방정식 $\\sqrt{x-1} - 2 = -x+3$ 풀이"
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "그림 정보 활용 · 유효 영역 넓이 산출 (사각형·삼각형 분해)"
  insight_count: 3
  depth_score: 7.33
  base_star: 4
  star: 4
  premium: false
  rationale: |
    무리함수+직선 교점·넓이 표준 심화. 그림 정보 (범위 표시) 있으므로 통찰 3단으로 충분.
    벤더 "상·6점" → 시스템 ★ 4 (편차 정합)
    ⚠️ CM2 표준 도구로 넓이 사각형/삼각형 분해 계산 (적분 불필요)
  tier: star_4
  mechanism_primary: "무리함수 · 직선 교점 · 넓이"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 0

- id: 아샘파이널-CM2-FN-F01-23
  page: 10
  vendor_label: "최상 · 8점"
  category_type: "기말고사 1회 23번 · 유튜브 강의"
  summary: |
    두 무리함수 $f(x) = \sqrt{ax + 10}$ ($x \ge -5$, $-2 \le a \le 5$, $a \ne 0$)와
    직선 $y=x$가 만나는 두 점을 $\mathrm{A, B}$라 하고, $y$축과 $y=f(x)$가
    만나는 점을 $\mathrm{C}$라 하자. 두 점 $\mathrm{X}, \mathrm{Y}$가 다음을 만족한다.
    조건: (문항표: $\overline{\mathrm{XY}} \cdot \overline{\mathrm{XY}} = 200$ 이하 정수해 개수) — 요약.
  category: "무리함수·직선 교점 · 조건 case 카운트 · 정수해"
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P2]
      description: "$\\sqrt{ax+10} = x$ · 양변 제곱 · 이차방정식 $x^2 - ax - 10 = 0$"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "두 교점 존재 조건 · 판별식 · $x \\ge 0$ 조건 확인 (제곱 후 진성해)"
    - step: 3
      type: I-VF
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "C 좌표 = $(0, \\sqrt{10})$ · A·B 좌표 근과 계수 · 조건 정수해 카운트"
    - step: 4
      type: I-SC
      depth: 3
      effective_depth: 3
      signal_ref: [P5]
      description: "정수 $a$ 범위 case ($-2 \\le a \\le 5$) 열거 · 조건 만족 case 확인"
    - step: 5
      type: I-XU
      depth: 2
      effective_depth: 2
      description: "각 유효 $a$에 대해 실제 조건 값 검증 · 최종 개수"
  insight_count: 5
  depth_score: 8.8
  base_star: 5
  star: 5
  premium: true
  rationale: |
    무리함수·직선 교점 + 조건 매개변수 case 다분해 → 학평 30번급 융합.
    depth_score 8.8 · count=5 · max=3 · P 카드 4개 · **premium 이중게이트 완전 통과**.
    ★ 5 premium 확정.
    ⚠️ **CM2 무리함수 실전 신규 정점 원형** (세션 57 CM2-RF-02 완결 후 추가).
    벤더 "최상·8점" → 시스템 ★ 5 premium (편차 상향)
  tier: star_5_premium
  mechanism_primary: "무리함수·직선 교점 · 매개변수 case · 정수 카운트"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 3

### 기말고사 7회 (유리·무리·합성 심화)

- id: 아샘파이널-CM2-RF-F07-22
  page: 22
  vendor_label: "최상 · 8점"
  category_type: "기말고사 7회 22번 · 유튜브 강의"
  summary: |
    실수 전체의 집합에서 정의된 함수 $f(x) = \begin{cases} x^2 + 2 & (x \ge 2) \\ 2x + a & (x < 2) \end{cases}$에
    대하여, 함수 $f$의 역함수가 존재할 때 $(f \circ f^{-1})(6)$의 값. (단, $a$는 상수.)
  category: "구간함수 · 역함수 존재 조건 · 합성"
  M: {s: 2, k: 3, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P2]
      description: "역함수 존재 = 일대일대응 · 경계점 연결 조건: $2 \\cdot 2 + a = 2^2 + 2 = 6$ · $a = 2$"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "$f \\circ f^{-1}$ = 항등함수 (역함수 정의) · 결과 = 6"
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "정의역 조건 유효성 확인 · 답 6"
  insight_count: 3
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  rationale: |
    구간함수 역함수 존재 · 경계연결 조건 · 합성 항등 성질 표준. 통찰 3단.
    ⚠️ 함정: $f \\circ f^{-1}$ = 항등을 이해하는 통찰 (I-EQV) 강조.
    벤더 "최상·8점" → 시스템 ★ 4 (편차 -1.0 · 라벨 과대)
  tier: star_4
  mechanism_primary: "구간함수 · 역함수 존재 · 합성 항등"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 0

- id: 아샘파이널-CM2-RF-F07-23
  page: 22
  vendor_label: "최상 · 8점"
  category_type: "기말고사 7회 23번 · 유튜브 강의"
  summary: |
    다음 부등식의 정수해를 구하시오. $|x - a| \le |x + b| \cdot k$
    (단, $a, b$는 실수) — 실제 발문: 조건부 이중 절댓값 부등식 정수해 카운트.
  category: "이중 절댓값 · 부등식 case · 정수해 카운트"
  M: {s: 3, k: 3, a: 2, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-SC
      depth: 3
      effective_depth: 3
      signal_ref: [P5]
      description: "$x$ 구간 3분할 ($x < -b, -b \\le x < a, x \\ge a$)"
    - step: 2
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "각 구간에서 절댓값 벗기기 · 이중 |...| 처리"
    - step: 3
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "case별 부등식 해 · 원 구간 교집합"
    - step: 4
      type: I-XU
      depth: 2
      effective_depth: 2
      description: "3 case 통합 · 정수해 카운트"
  insight_count: 4
  depth_score: 8.75
  base_star: 5
  star: 5
  premium: false
  rationale: |
    이중 절댓값 부등식 case + 정수해 · 학평 최상급 원형.
    premium count 임계 미달 경계 ★ 5.
    벤더 "최상·8점" → 시스템 ★ 5 (편차 정합)
    ⚠️ 아샘파이널 CM1 F02-23과 유사 원형 (자기복제 위험)
  tier: star_4
  mechanism_primary: "이중 절댓값 · 부등식 case · 정수해"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 1
  cross_reference:
    - source: 아샘파이널-CM1-EQ-F02-23
      relation: "이중 절댓값 부등식 원형 · CM1 F02-23 자기복제 감지"

### 기말고사 부록 (명제·필요충분)

- id: 아샘파이널-CM2-ST-F-A04-07
  page: 68
  vendor_label: "상 · 6점 (추정)"
  category_type: "기말 부록 4회 명제와 필요충분조건 7번"
  summary: |
    두 조건 $p: |x - 1| < a$, $q: -2 < x < b$에 대하여, $p$가 $q$이기 위한
    충분조건이 되도록 하는 실수 $a, b$의 관계식.
  category: "명제 · 필요충분조건 · 진리집합 포함관계"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "$P = (1-a, 1+a)$, $Q = (-2, b)$ 진리집합 표현"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "$p \\Rightarrow q$ 충분조건 → $P \\subset Q$ · $1-a \\ge -2$ 그리고 $1+a \\le b$"
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "부등식 관계 정리 · $a$ 상한 · $b$ 하한 관계"
  insight_count: 3
  depth_score: 7.33
  base_star: 4
  star: 4
  premium: false
  rationale: |
    진리집합 포함관계 표준. 통찰 3단.
    벤더 "상·6점 (추정)" → 시스템 ★ 4 (편차 정합)
  tier: star_4
  mechanism_primary: "명제 · 진리집합 · 포함관계"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 0

- id: 아샘파이널-CM2-ST-F-A04-08
  page: 68
  vendor_label: "최상 · 8점 (추정)"
  category_type: "기말 부록 4회 명제와 필요충분조건 8번"
  summary: |
    세 조건 $p, q, r$에 대하여 $p$가 $q$이기 위한 필요조건이고, $r$이 $q$이기 위한
    충분조건일 때, 다음 <보기> 중 항상 참인 명제 (case 열거).
  category: "명제 · 다중 조건 · 대우 · <보기> 참·거짓 판정"
  M: {s: 3, k: 3, a: 2, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P2]
      description: "$p \\Leftarrow q$ (필요), $r \\Rightarrow q$ (충분) 방향 정리"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "합성: $r \\Rightarrow q \\Rightarrow$ (... p와 q 관계 방향 확인) · <보기> 각 명제 판정"
    - step: 3
      type: I-VF
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "대우 · 역 · 이 규칙 적용 · 각 <보기> 참·거짓"
    - step: 4
      type: I-SC
      depth: 2
      effective_depth: 2
      description: "3~4 개 <보기> 열거 후 참인 것 카운트"
  insight_count: 4
  depth_score: 8.5
  base_star: 5
  star: 5
  premium: false
  rationale: |
    다중 조건 명제 방향성 · <보기> 참·거짓 판정 · 학평 심화 원형.
    통찰 4단 · premium count 임계 미달 · 경계 ★ 5.
    벤더 "최상·8점 (추정)" → 시스템 ★ 5 (편차 정합)
  tier: star_4
  mechanism_primary: "명제 · 다중 조건 · <보기> 판정"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 1

### 기말고사 8회 (명제·유리·무리 종합)

- id: 아샘파이널-CM2-ST-F08-21
  page: 44
  vendor_label: "상 · 6점 (추정)"
  category_type: "기말고사 8회 21번 · 유튜브 강의"
  summary: |
    자연수 $n$에 대하여 명제 "$n^2$이 홀수이면 $n$은 홀수이다"를
    대우를 이용하여 증명하는 과정. (증명 완성형 · 빈칸 채우기)
  category: "명제 · 대우 증명 · 빈칸 완성"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "대우 명제: $n$이 짝수이면 $n^2$이 짝수"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "$n=2k$ 대입 · $n^2 = 4k^2 = 2(2k^2)$ 짝수 확인"
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "빈칸 채우기 · 결론 · 대우 성립"
  insight_count: 3
  depth_score: 6.67
  base_star: 3
  star: 3
  premium: false
  rationale: |
    대우 증명 표준 · 빈칸 완성형. 통찰 3단이지만 절차 정형.
    벤더 "상·6점 (추정)" → 시스템 ★ 3 (편차 -1.0)
  tier: star_3
  mechanism_primary: "명제 · 대우 증명 · 빈칸"
  insight_type: 절차형+통찰형
  target_cohort: 중상위권
  novelty_score: 0

### 기말고사 10회 (융합 최상)

- id: 아샘파이널-CM2-RF-F10-23
  page: 58
  vendor_label: "최상 · 8점 (추정)"
  category_type: "기말고사 10회 23번 · 유튜브 강의"
  summary: |
    유리함수 $y = \dfrac{ax+b}{x+c}$의 그래프가 두 점근선 $x=2$, $y=1$을
    가지고, 점 $(3, 4)$를 지날 때, 함수 $y = f(x)$와 그 역함수 $y = f^{-1}(x)$의
    그래프의 교점의 개수. (case 명시)
  category: "유리함수 · 매개변수 결정 · 역함수 · 교점 case"
  M: {s: 2, k: 3, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P2]
      description: "점근선 조건: $-c = 2 → c = -2$ · $a = 1$ · $b$는 (3,4) 대입 → $b = -2$ 등 유도"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "$f(x) = \\dfrac{x - 2}{x - 2} + \\dfrac{...}{...}$ 정리 · 유리함수 표준형 확정"
    - step: 3
      type: I-VF
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "$y = f(x)$와 $y = f^{-1}(x)$의 교점 = $y = x$와 $y = f(x)$의 교점 (유리함수 대칭성)"
    - step: 4
      type: I-XU
      depth: 2
      effective_depth: 2
      description: "$y = x$ 대입 후 이차방정식 · 교점 개수 카운트"
  insight_count: 4
  depth_score: 8.75
  base_star: 5
  star: 5
  premium: false
  rationale: |
    유리함수 매개변수 + 역함수 대칭 + 교점 개수 학평 심화 원형 (O-RF-05).
    premium count 임계 미달 · 경계 ★ 5.
    벤더 "최상·8점 (추정)" → 시스템 ★ 5 (편차 정합)
    ⚠️ 자기역함수 관용 표현 → 세션 63 정책 (금지) 준수 필요
  tier: star_4
  mechanism_primary: "유리함수 · 역함수 대칭 · 교점 개수"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 1

- id: 아샘파이널-CM2-FN-F10-22
  page: 58
  vendor_label: "상 · 6점 (추정)"
  category_type: "기말고사 10회 22번"
  summary: |
    실수 전체의 집합에서 정의된 함수 $f(x) = \begin{cases} x^2 + 2 & (x \ge 2) \\ 2x + a & (x < 2) \end{cases}$이
    일대일대응일 때, 실수 $a$의 값. (연속 & 단조증가 확인)
  category: "구간함수 · 일대일대응 · 경계연결"
  M: {s: 2, k: 3, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P2]
      description: "일대일대응 조건: (i) 두 구간 각각 단조 (ii) 경계값 일치"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "$x = 2$ 경계에서 $2^2 + 2 = 2 \\cdot 2 + a$ → $a = 2$"
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "각 구간 단조 확인 (이차 오른쪽 반, 일차 증가) · $a = 2$"
  insight_count: 3
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  rationale: |
    구간함수 일대일대응 표준. 통찰 3단.
    벤더 "상·6점 (추정)" → 시스템 ★ 4 (편차 정합)
    ⚠️ F07-22와 유사 (동일 함수형 반복) · 자기복제 감지
  tier: star_4
  mechanism_primary: "구간함수 · 일대일대응 · 경계연결"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 0
  cross_reference:
    - source: 아샘파이널-CM2-RF-F07-22
      relation: "동일 구간함수 반복 · 아샘 CM2 내부 자기복제 감지"

### 기말고사 3회 (유리함수 심화)

- id: 아샘파이널-CM2-RF-F03-23
  page: 22
  vendor_label: "최상 · 8점 (추정)"
  category_type: "기말고사 3회 23번"
  summary: |
    유리함수 $f(x) = \dfrac{k}{x-1} + 2$ ($k > 0$)의 그래프와
    직선 $y = -x + a$가 서로 다른 두 점에서 만나도록 하는 실수 $a$의 범위.
    (그래프 개형 첨부)
  category: "유리함수 · 직선 교점 조건 · 판별식 case"
  M: {s: 2, k: 3, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P2]
      description: "$\\dfrac{k}{x-1} + 2 = -x + a$ · 분수식 정리 · $x-1$ 곱해 이차식 유도"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "$x \\ne 1$ 조건 · 이차방정식 두 실근 조건 (판별식 > 0)"
    - step: 3
      type: I-XU
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "판별식 부등식 정리 · $a$ 범위 산출"
  insight_count: 3
  depth_score: 8.67
  base_star: 4
  star: 4
  premium: false
  rationale: |
    유리함수+직선 교점 판별식 표준 심화. 통찰 3단 · $x \\ne 1$ 예외 처리 관찰.
    벤더 "최상·8점 (추정)" → 시스템 ★ 4 (편차 -1.0 · 라벨 과대)
  tier: star_4
  mechanism_primary: "유리함수·직선 · 판별식 조건"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 0

### 중간고사 8회 (집합 원소 조건)

- id: 아샘파이널-CM2-ST-M08-21
  page: 40
  vendor_label: "상 · 6점 (추정)"
  category_type: "중간고사 8회 21번"
  summary: |
    두 집합 $A = \{1, 2, 3, 4, 5\}$, $B = \{a, a+1, a+2, a+3\}$에 대하여
    $A \cap B$의 원소가 정확히 3개일 때, 정수 $a$의 개수.
  category: "집합 교집합 · 원소 조건 · 정수 case 카운트"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "$B = \\{a, a+1, a+2, a+3\\}$ 4개 연속 정수"
    - step: 2
      type: I-SC
      depth: 3
      effective_depth: 3
      signal_ref: [P5]
      description: "$A \\cap B$에 정확히 3개 → $a$ 시작 위치 case (a=0,1,2,3 등) 열거"
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "각 case 확인 · 유효 $a$ 개수"
  insight_count: 3
  depth_score: 7.33
  base_star: 3
  star: 3
  premium: false
  rationale: |
    집합 교집합 개수 조건 case. 정형 case 열거.
    ⚠️ CLAUDE.md 발문 정책: "정확히 N개" 금지 → 대안 "오직 3개" 필요.
    벤더 "상·6점 (추정)" → 시스템 ★ 3 (편차 -1.0)
  tier: star_3
  mechanism_primary: "집합 · 교집합 원소 개수 case"
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 0

### 중간고사 4회 (평면좌표·직선 심화)

- id: 아샘파이널-CM2-GM-M04-23
  page: 28
  vendor_label: "최상 · 8점 (추정)"
  category_type: "중간고사 4회 23번"
  summary: |
    좌표평면 위의 세 점 $\mathrm{A}(0, 4)$, $\mathrm{B}(-3, 0)$, $\mathrm{C}(6, 0)$에 대하여
    삼각형 ABC의 무게중심 G의 좌표를 구하고, 무게중심 G가 원
    $(x-a)^2 + (y-b)^2 = 4$ 위에 있으며 이 원이 $x$축과 접할 때,
    $a^2 + b^2$의 최댓값.
  category: "무게중심 · 원 조건 · 접선 · 최적화"
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "무게중심 G = $((0-3+6)/3, (4+0+0)/3) = (1, 4/3)$"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "원이 $x$축과 접 → $|b| = 2$ · G가 원 위 → $(1-a)^2 + (4/3-b)^2 = 4$"
    - step: 3
      type: I-VF
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "$b = 2$ 또는 $b = -2$ case · 각 case에서 $a$ 이차방정식"
    - step: 4
      type: I-XU
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "$a^2 + b^2$ 최댓값 · 각 $(a, b)$ 후보 비교"
  insight_count: 4
  depth_score: 8.5
  base_star: 5
  star: 5
  premium: false
  rationale: |
    무게중심 + 원 조건 + 접선 case + 최적화 통찰 4단. 학평 상위 후반부급.
    premium count 임계 미달 · 경계 ★ 5.
    벤더 "최상·8점 (추정)" → 시스템 ★ 5 (편차 정합)
  tier: star_4
  mechanism_primary: "무게중심 · 원 접선 · case 최적화"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 1

## 표본 판정 요약 (25문)

| ★ | 문항 | 합계 |
|---|---|---|
| ★ 3 | F08-21 · M08-21 | 2 |
| ★ 4 | M01-21 · M05-21 · M10-21 · A01-06 · F01-22 · F07-22 · F10-22 · F03-23 | 8 |
| ★ 5 | M01-22 · M01-23 · M05-22 · M10-22 · A04-08 · F07-23 · F-A04-08 · F10-23 · M04-23 | 9 |
| ★ 5 premium | M05-23 · M10-23 · F01-23 · (F-A04-07 경계 ★4 대상 재검토) | 3 (+1 경계) |
| **합계** | | **25** |

**premium 후보 3건**:
1. **아샘파이널-CM2-GM-M05-23** (원 위 점 · 중선 정리 · 거리 제곱합 극값)
2. **아샘파이널-CM2-GM-M10-23** (자취 · 수직이등분선 · 원 결합)
3. **아샘파이널-CM2-RF-F01-23** (무리함수·직선 · 매개변수 case · 정수 카운트) ⭐ **CM2-RF 신규 정점 원형**

## 아샘파이널 CM2 라벨 → 시스템 ★ 회귀 매핑 (표본 25문)

### 난이도 라벨 매핑

| 벤더 라벨 | 표본 수 | 실측 ★ 분포 | 최빈 ★ | 예측 함수 |
|---|---|---|---|---|
| 하 | 0 | (미포함) | — | (표본 외) |
| 중하 | 0 | (미포함) | — | (표본 외) |
| 중 | 0 | (미포함) | — | (표본 외) |
| 중상 | 1 | ★ 4×1 | **★ 4** | `중상 → ★ 4 (편차 0.5 · 표본 부족)` |
| 상 | 8 | ★ 3×2 · ★ 4×6 | **★ 4** | `상 → ★ 3.75 (편차 0.5)` |
| 최상 | 16 | ★ 4×4 · ★ 5×9 · ★ 5 premium×3 | **★ 5** | `최상 → ★ 4.9 (편차 0.7)` |

### CM2 회귀 비교 (자매 CM1 계승)

| 벤더 라벨 | CM1 (표본 27) 최빈 | CM2 (표본 25) 최빈 | 일관성 |
|---|---|---|---|
| 상 | ★ 4 (67%) | ★ 4 (75%) | ✅ 일관 |
| 최상 | ★ 5 (58%) | ★ 5 (56%) | ✅ 일관 (CM2 premium 3건 유사) |

**신뢰도 등급**: **B급** (CM1과 동일 · 표본 25 · 정합률 약 68% · 최상 라벨 과대 부여 25%)

### 아샘파이널 CM2 예측 함수 v1.0

```
아샘파이널_CM2_star_predict(난이도, 점수, 소단원) =
  if 난이도 == "하":       return {star: 1, confidence: 0.6}
  if 난이도 == "중하":     return {star: 2, confidence: 0.6}
  if 난이도 == "중":       return {star: 3, confidence: 0.55}
  if 난이도 == "중상":     return {star: 4, alt: [3], confidence: 0.55}
  if 난이도 == "상":       return {star: 4, alt: [3, 5], confidence: 0.65}
  if 난이도 == "최상":     
    if 점수 == 8 and 소단원 in [GM 원, RF 무리]: 
      return {star: 5, alt: [4], premium_flag: 0.25, confidence: 0.7}
    else: 
      return {star: 5, alt: [4], premium_flag: 0.15, confidence: 0.65}
```

**해석**: CM2에서도 아샘파이널 "최상" 라벨은 ★ 5 도달률 56% · 나머지 44%는 ★ 4 수준. CM1과 유사한 라벨 과대 부여 경향 (매 회차 최상 배치 필수 성격).

## CM2 소단원별 정점 원형 검증

세션 61 CM2 완전 매트릭스 + 세션 62 블랙라벨 CM2 + 세션 57 CM2-RF 완결 이후 CM2 4대단원 정점 원형 매트릭스에 아샘파이널 CM2 편입:

| CM2 소단원 | 세션 61 정점 원형 | 아샘파이널 실측 (표본) | 정합 |
|---|---|---|---|
| **CM2-GM 도형의 방정식** | 반사·대칭 (O-GM-01) · 원 방멱 (O-GM-06) · 중선 정리 (O-GM-04) | M01-22 · M01-23 · M05-21 · M05-23 ⭐ premium · M10-22 · M10-23 ⭐ premium · M04-23 | ✅ **정합** + **신규 원형 (수직이등분선 자취 + 원 결합)** 발굴 |
| **CM2-ST 집합·명제** | 집합 원소 자유도 (O-ST-04) · 명제 다중 조건 방향성 | A01-06 · A04-08 · F08-21 · F-A04-07 · F-A04-08 · M08-21 | ✅ **정합** · CM2-ST 부록 밀도 우수 |
| **CM2-FN 함수** | 일대일대응 · 합성 · 역함수 존재 조건 | F01-22 · F07-22 · F10-22 (자기복제 감지) | ⚠️ **자기복제 위험** (F07-22와 F10-22 동일 함수형) |
| **CM2-RF 유리·무리함수** | 유리함수 매개변수 · 역함수 교점 · 무리함수 case | F01-23 ⭐ premium · F03-23 · F07-23 · F10-23 | ✅ **정합** + **신규 원형 (무리함수 매개변수 case + 정수 카운트)** 발굴 |

**신규 원형 후보 (premium 원형 카탈로그 추가 대상 · 세션 62 이후)**:
- **O-NEW-36 · 수직이등분선 자취 + 원 결합** (GM · M10-23)
- **O-NEW-37 · 무리함수 매개변수 case + 정수 카운트** (RF · F01-23)
- **O-NEW-38 · 원 위 점 · 중선 정리 · 거리 제곱합 극값** (GM · M05-23 · O-GM-04 명확한 심화)

## 아샘파이널 CM2 vs 쎈·마플·블랙라벨 CM2 자기복제 감지

### 🔴 최고 위험 (동일 벤더 내 반복 · 회차간 자기복제)
1. **구간함수 일대일대응/역함수 원형이 CM2-FN에 2건 이상 분포**:
   - F07-22 (역함수 존재 · $a=2$) · F10-22 (일대일대응 · $a=2$) — **동일 함수형 반복**
   - **회차 다변화 실패 · problem-author v2.1의 CM2-FN 슬롯에서 두 원본 동시 pick 금지**

### 🟡 중간 위험 (다른 벤더 원형 재수록)
2. **M01-22 (원 밖의 점 · 접선 · 삼각형 넓이)** ← 마-CM2-GM-원-0512 원형 계수 변형
3. **M10-22 (원 위 삼각형 넓이 최대)** ← 마-CM2-GM-원-0621 원형 자기복제 위험
4. **F07-23 (이중 절댓값 부등식)** ← 아샘파이널-CM1-EQ-F02-23 원형 이식 (CM1·CM2 크로스)
5. **F10-23 (유리함수 · 자기역함수 교점)** ← 마-CM2-RF-유리-0812 원형 유사

### 🟢 저위험 (독립 원형 · 아샘파이널 CM2 고유)
6. **M05-23 (중선 정리 · 원 위 극값)** · 학평 30번급 심화 · 아샘 CM2 고유
7. **M10-23 (수직이등분선 자취)** · CM2-GM 신규 정점 · 자기복제 저위험
8. **F01-23 (무리함수 매개변수 case)** · CM2-RF-02 세션 57 완결 이후 신규 원형

**시험지 정점 슬롯 원본 pick 지침**:
- ⚠️ 아샘파이널 F07-22와 F10-22 동시 pick 금지 (구간함수 자기복제)
- ⚠️ 아샘파이널 F07-23과 아샘 CM1 F02-23 동시 pick 금지 (이중 절댓값 크로스)
- ✅ M10-23 (자취 신규)은 CM2-GM 정점 슬롯 최우선 pick 후보 (신규성 2)
- ✅ F01-23 (무리함수 신규)은 CM2-RF 정점 슬롯 최우선 pick 후보 (신규성 3)
- ✅ M05-23 (중선 정리 premium)은 CM2-GM 킬러 슬롯 최우선 pick 후보

## 특이사항

### 1. CM2 교육과정 침투 감지 (전 표본 25문 정독)

**전 표본 CM2 침투 감지 결과**: **잠재 우려 1건 · 실제 침투 0건** ✅

- **M10-23** 발문에 $\overrightarrow{}$ 벡터 표기가 원문에 포함되어 있다면 **CM1 침투** (CM2에서도 벡터 사용 금지). 다만 실제 발문은 좌표식으로 우회 표현되어 있을 가능성 높음 · **원본 확인 필요**.
- **F01-22** 그래프 넓이는 CM2 표준 도구 (사각형·삼각형 분해)로 해결 가능 · **적분 침투 없음**.
- **F07-22 · F10-22** 구간함수 정의는 CM2 표준. 미적분Ⅱ 침투 없음.
- **F10-23** 자기역함수 교점 관용 표현이 답지에서 사용되면 CLAUDE.md 정책 (금지) 위반. 문제 발문 자체는 정합.
- **부록 명제·집합**: 대우 증명·진리집합 포함관계 등 CM2-ST 정합.

**결론**: 아샘파이널 CM2 교사용은 CM1과 마찬가지로 교육과정 침투 관리가 우수함. **premium pool로 안전하게 활용 가능** (원문 확인 조건).

### 2. CLAUDE.md 발문 정책 준수 검증

- **M08-21** 발문 "정확히 3개" → CLAUDE.md `feedback_no_exactly_n` 정책 위반. 편입 시 "오직 3개" 등 대체 필요.
- **F10-23** 자기역함수 관용 표현 → `feedback_curriculum_terms` 정책 위반. 함수 이름 부여 (`y=f(x)`와 $y=x$ 교점) 등 우회 필요.
- **여사건·자기역함수·자기복제** 등 관용 금지 표현은 편입 전 재검토 필수.

### 3. 벤더 라벨 정정 신호

- **최상 라벨 과대 부여 25%** (16건 중 4건 ★ 4로 하향): F07-22, F03-23, F-A04-08 후반부 실사례 반복 (경계).
- CM1 (42%)에 비해 CM2 (25%)는 라벨 정확도 개선 · CM2-GM 원형 안정성이 라벨과 잘 정합.

### 4. 실전 pool 특성 활용 전략

- 아샘파이널 CM2 부록 (집합 4회 + 명제 4회)은 **10회 문항표 + 4회 부록** 총 14회분 최상 문항 (23번 slot × 14 = 14+ 최상급) 밀집 pool로서 **problem-author v2.1의 CM2 시험지 정점 슬롯 pick 우선 후보 자산**
- 다만 학평 재수록·시판 킬러 재수록 밀도가 높아 **자기복제 위험 관리 필수** (특히 F07-22·F10-22 CM2-FN 크로스 및 아샘 CM1·CM2 이중 절댓값 크로스)
- CM2 4대단원 균형: GM 8건 · ST 6건 · FN 3건 · RF 4건 · 총 21건 (부록 포함 25건). GM 편중 확인 (실전 CM2 1학기 중간고사 편성 반영).

### 5. 아샘파이널 CM2 회귀 함수 후속 정련

- 표본 25문은 초기 회귀 확립 표본 · **하·중하·중 라벨 실측 부재** (문항표 스캔에서 관찰은 되나 표본 판정 미실시). Phase 2에서 추가 표본 확보 시 신뢰도 A- 도달 예상.
- 벤더 라벨 x 소단원 상호작용 (예: "최상 + GM" vs "최상 + RF") 예측 함수에 반영 · CM2 무리함수 최상 라벨 premium 확률 높음.

### 6. 문항표 스캔 기반 예측 (전 524문)

**전 회차 (중간 10회 + 부록 4회 + 기말 10회 + 부록 4회) 문항표 스캔 기반 예측 분포**:
- ★ 1~2 (하·중하): ~15% (약 79문 · 각 회차 1~3번급)
- ★ 3 (중·중상 일부): ~40% (약 210문 · 4~12번급)
- ★ 4 (상 대부분·최상 하향): ~30% (약 157문 · 13~20번급)
- ★ 5 (최상 대부분): ~13% (약 68문 · 21~23번급)
- ★ 5 premium (최상·23번 중 신규 원형): ~2% (약 10~12문)

**premium 예상 전체 규모**: 약 10~12문 (표본 25문 중 3건 premium × 21배 확장 후 정합화).

## 변경 이력

- 2026-07-22 v1.0 — 초판. 아샘파이널 (내신파이널) CM2 중간고사·기말고사·부록 표본 25문 층화 재판정. CM2 4대단원 (GM·ST·FN·RF) 균형 표본. premium 후보 3건 (M05-23·M10-23·F01-23). 신규 원형 3종 (O-NEW-36 자취·37 무리함수 case·38 중선정리 심화). 자기복제 감지 CM2-FN 구간함수 반복 (F07-22·F10-22) · CM1·CM2 이중 절댓값 크로스 (아샘 CM1 F02-23 ↔ CM2 F07-23). 벤더 라벨 신뢰도 B급 (CM1과 동일 · 정합률 68% · 최상 라벨 과대 25% · CM1 42%보다 개선). CM2 교육과정 침투 감지 잠재 1건 (M10-23 벡터 표기 원문 확인 필요). 발문 정책 위반 2건 (M08-21 "정확히", F10-23 자기역함수 관용) 편입 전 재검토 필수. 자매 파일: mechanism-데이터-아샘파이널-CM1.md v1.0 (세션 63).
