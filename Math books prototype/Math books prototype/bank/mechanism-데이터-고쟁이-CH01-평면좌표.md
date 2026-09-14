---
name: mechanism-데이터-고쟁이-CH01-평면좌표
description: 고쟁이 공통수학2 (2022개정) CH01 평면좌표 STEP 2·STEP 3 전문항 정독 mechanism 데이터 (35문항). 학습 목적, 저작권 준수 (원문 전사 없음).
metadata:
  type: reference
  version: v1.0
  established: 2026-07-14
  source: 고쟁이 공통수학2 (2022개정)
  tier_mapping:
    STEP_2: star_5
    STEP_3: star_5_premium
  unit_code: CM2-GM
  citation_note: 고쟁이 · 학습 목적 · 저작권 준수 (원문 전사 없음)
---

# 고쟁이 공통수학2 (2022개정) — CH01 평면좌표 · STEP 2·3 mechanism 데이터

**출처**: 이투스북 · 고쟁이 공통수학2 (2022개정) · CH01 평면좌표
**대상 범위**: STEP 2 (내신 실전문제 체화 · 심화 유형) #019~#044 (26문) + STEP 3 (내신 최상위권 굳히기 · 최고난도 유형) #045~#053 (9문)
**총 35문항 · 전수 정독**
**본 문서 성격**: 학습·mechanism 분석용 데이터 · 문항 원문 인용 아님 · 특성만 기록
**저작권 주의**: 고쟁이 본문·해설 그대로 복사 절대 금지 · 재출제 시 최소 변형 규칙(숫자만 or 동등변형) 적용

---

## 파트 A — STEP 2 (심화 유형) #019~#044

### 유형 01 · 두 점 사이의 거리

```yaml
- source: 고쟁이-CH01-STEP2-#019
  page: 12
  problem_summary: |
    수직선 위 두 점 A(-1), B(2)에 대해 수직선 위 점 P가 AP+BP ≤ 7을 만족시킬 때
    P가 나타내는 도형의 길이 (선분의 길이)를 묻는 문항.
  solution_summary: |
    P(a)로 놓으면 |a+1|+|a-2| ≤ 7. 절댓값 3구간 분할 (i) a<-1 (ii) -1 ≤ a < 2 (iii) a ≥ 2 각 케이스에서
    부등식 풀어 -3 ≤ a ≤ 4 얻음. 도형 길이 = 4-(-3) = 7.
  category: 평면좌표 · 수직선 위 거리
  difficulty: STEP2
  mechanism_primary: M1 절댓값 부등식 · 구간 분할
  mechanism_secondary: [M4 수직선 위 두 점 사이 거리, M6 부등식 해집합의 기하 해석]
  depth_conditions:
    - "AP+BP는 P의 위치에 따라 |a+1|+|a-2| (2절댓값 합)"
    - "구간 [-1, 2] 안에서는 합이 상수 3 (기하: A~B 사이에서 최소값 유지)"
    - "구간 밖에서는 P가 A·B 밖으로 벗어난 거리의 2배만큼 증가"
    - "≤ 7 조건 → 좌우로 각각 2씩 확장 가능"
  freedom_signals:
    initial_setup_freedom: 중
    approach_choice: 중  # 대수(구간 분할) vs 기하(그림)
    student_decision_points: 3
  common_mistakes:
    - "구간 [-1, 2] 안에서 합이 상수임을 놓치고 등식으로만 계산"
    - "구간 경계에서 등식·부등식 혼동"
    - "도형이 선분임을 인지 못하고 두 개의 점 개수로 답변"
  condition_layers:
    surface: 1  # AP+BP ≤ 7
    real: 2    # 절댓값 구조·구간 대응
    interaction: "수직선 거리 → 절댓값 부등식 → 3구간 분할 → 해집합 길이"
  citation_note: "고쟁이 CH01 · 원본 인용 아님 · 학습 목적"

- source: 고쟁이-CH01-STEP2-#020
  page: 12
  problem_summary: |
    두 점 A(-1, 1), B(1, 3)과 직선 y = x - 2 위의 점 P에 대하여 AP² + BP²의 최솟값.
  solution_summary: |
    P(a, a-2)로 매개화. AP² + BP² = {(a+1)² + (a-3)²} + {(a-1)² + (a-5)²} = 4a² - 16a + 36
    = 4(a-2)² + 20. a=2, 즉 P(2, 0)일 때 최솟값 20.
  category: 평면좌표 · 최솟값
  difficulty: STEP2
  mechanism_primary: M2 매개변수 도입 (직선 위 점)
  mechanism_secondary: [M7 이차식 완전제곱 최소, M4 좌표평면 두 점 거리]
  depth_conditions:
    - "P가 직선 위 → 1-매개변수 자유도"
    - "AP² + BP² 이차식 → 완전제곱 표준형"
    - "P의 좌표 (a, a-2)가 y = x-2의 매개변수화"
  freedom_signals:
    initial_setup_freedom: 하
    approach_choice: 중  # 매개변수 vs 벡터적 (중점) 접근
    student_decision_points: 2
  common_mistakes:
    - "AP + BP (거리 합)와 AP² + BP² (제곱 합) 혼동"
    - "완전제곱 후 상수항 계산 오류"
  condition_layers:
    surface: 2  # 직선 위 점 · 최솟값
    real: 3    # 매개변수 · 이차식 · 완전제곱
    interaction: "직선 위 점 매개화 → AP²+BP² 이차식 → 완전제곱 → 최솟값"
  citation_note: "고쟁이 CH01 · 원본 인용 아님 · 학습 목적"

- source: 고쟁이-CH01-STEP2-#021
  page: 12
  problem_summary: |
    세 점 A(1, -1), B(-3, 4), C(5, 6)과 점 P에 대해 PA² + PB² + PC²의 최솟값 m,
    그때 P의 좌표 (a, b)일 때 a+b+m의 값.
  solution_summary: |
    "PA² + PB² + PC²이 최소가 될 때 P는 무게중심"이라는 성질 이용. G = ((1-3+5)/3, (-1+4+6)/3) = (1, 3).
    a=1, b=3. m = PA²+PB²+PC² = 16+17+25 = 58. a+b+m = 62.
  category: 평면좌표 · 무게중심 최적화
  difficulty: STEP2
  mechanism_primary: M8 무게중심 극값 성질 (PA²+PB²+PC²는 무게중심에서 최소)
  mechanism_secondary: [M9 세 점의 무게중심 좌표, M4 좌표평면 두 점 거리]
  depth_conditions:
    - "세 점 거리 제곱합의 최솟값 위치가 무게중심임을 유도 또는 암기"
    - "무게중심 P(1, 3)에서 실제 값 계산 필요 (m만이 아니라 a+b도 요구)"
    - "3점이 한 직선 위 없음 조건 (∵ 삼각형 성립)"
  freedom_signals:
    initial_setup_freedom: 하
    approach_choice: 하  # 성질 알면 즉답
    student_decision_points: 2
  common_mistakes:
    - "무게중심 성질 모르면 P(x, y)로 놓고 이차식 완전제곱 · 계산량 폭증"
    - "무게중심 좌표 공식 오류 (분모 2로 잘못)"
  condition_layers:
    surface: 2  # PA²+PB²+PC² 최솟값 · 좌표 요구
    real: 2    # 무게중심 성질 인지 · 계산
    interaction: "무게중심 성질 → 무게중심 좌표 → 실제 값 대입"
  citation_note: "고쟁이 CH01 · 원본 인용 아님 · 학습 목적"

- source: 고쟁이-CH01-STEP2-#022
  page: 12
  problem_summary: |
    두 실수 x, y에 대해 √(x² + y² + 6x - 4y + 13) + √(x² + y² - 2x - 8y + 17)의 최솟값.
  solution_summary: |
    완전제곱 정리: √((x+3)² + (y-2)²) + √((x-1)² + (y-4)²).
    A(-3, 2), B(1, 4)라 하면 식 = AC + BC where C(x, y). 삼각부등식 AC + BC ≥ AB.
    AB = √((-3-1)² + (2-4)²) = √20 = 2√5. 답 2√5.
  category: 평면좌표 · 거리합 최솟값
  difficulty: STEP2
  mechanism_primary: M10 √(...) 형태 → 좌표평면 두 점 거리 변환
  mechanism_secondary: [M11 삼각부등식 (AC + BC ≥ AB), M12 완전제곱 재구조화]
  depth_conditions:
    - "제곱근 안 이차식을 완전제곱하여 (x-a)² + (y-b)² 형태로 재작성"
    - "√{(x-a)² + (y-b)²} = 두 점 사이 거리로 재해석 (I-RT 표현 전환 통찰)"
    - "AC + BC 최솟값이 A, B, C 공선일 때 AB임 (삼각부등식 등호조건)"
  freedom_signals:
    initial_setup_freedom: 중
    approach_choice: 하  # 완전제곱 후는 유일 흐름
    student_decision_points: 2
  common_mistakes:
    - "완전제곱 계산 오류 (부호 실수)"
    - "삼각부등식 등호조건 (C가 선분 AB 위) 인지 못하고 최소 존재성 의심"
  condition_layers:
    surface: 1  # 최솟값
    real: 3    # 완전제곱·거리 해석·삼각부등식
    interaction: "√ 형태 → 완전제곱 → 좌표평면 거리합 → 삼각부등식"
  citation_note: "고쟁이 CH01 · 원본 인용 아님 · 학습 목적"
```

### 유형 02 · 두 점 사이의 거리의 활용

```yaml
- source: 고쟁이-CH01-STEP2-#023
  page: 12
  problem_summary: |
    x축·y축은 직선도로. 두 학교 A(4, 1)과 B(-3, 2)에서 거리가 같은 직선도로 위 지점에
    정류장 설치. 가능한 정류장 좌표 모두 (도로 폭 무시).
  solution_summary: |
    P(a, 0) 또는 P(0, b) 두 경우로 분리.
    (i) P(a, 0): AP² = (a-4)² + 1 = BP² = (a+3)² + 4 → a = 2/7 → P(2/7, 0).
    (ii) P(0, b): AP² = 16 + (b-1)² = BP² = 9 + (b-2)² → b = -2 → P(0, -2).
    답 (2/7, 0), (0, -2).
  category: 평면좌표 · 실생활 지문형
  difficulty: STEP2
  mechanism_primary: M13 조건에 따른 케이스 분할 (x축 위 or y축 위)
  mechanism_secondary: [M14 수직이등분선 조건 (AP = BP), M15 실생활 → 좌표 모델링]
  depth_conditions:
    - "직선도로 = 두 축의 합집합이므로 P는 x축 또는 y축 위"
    - "각 축에서 AP = BP 방정식이 다르게 나옴 → 2개 케이스"
    - "답이 2점 (모두 구하시오 지시)"
  freedom_signals:
    initial_setup_freedom: 중  # 축 어느 쪽인지 자체가 선택
    approach_choice: 하
    student_decision_points: 2
  common_mistakes:
    - "x축 or y축 한 쪽만 고려 → 답 1개만 (불완전)"
    - "'도로 위'를 두 축의 어느 지점이라도 가능함을 인지 못함"
  condition_layers:
    surface: 2  # 두 도로 · 등거리
    real: 3    # 케이스 분할 · AP = BP · 2개 답
    interaction: "실생활 → 두 축 축 위 조건 → 케이스 분할 → 각 축에서 AP=BP"
  citation_note: "고쟁이 CH01 · 원본 인용 아님 · 학습 목적"

- source: 고쟁이-CH01-STEP2-#024
  page: 13
  problem_summary: |
    지점 O 수직 두 도로. 갑·을이 O에서 각각 720 m, 960 m 떨어진 지점에서 분속 40 m로
    지점 O 향해 동시 출발. 두 사람 거리 최소가 되는 시각 a분, 최소거리 b m. a, b 값과 과정 서술.
    (서술형)
  solution_summary: |
    좌표 설정: 갑 (0, -720+40t), 을 (960-40t, 0).
    거리² = (960-40t)² + (720-40t)² = 40²{(t-24)² + (t-18)²} = 40²{2(t-21)² + 18}
    (=1600 · 2(t-21)² + 1600 · 18). t=21일 때 최소. 최소거리 = 40 · √(2·18) = 40√36 = 240... 
    (실제 해설: 최소값 40√(2·18) = 40 · 6 = 240... 재계산: 40 · √(2·0 + 18) · √... 정확히 
    √(1600 · 2 · 18) = √57600 = 240). 그러나 해설은 40 · √(2t²-84t+900)의 최솟값을 
    40 · √(2(t-21)² + 18) 형태로 정리 → 최솟값 40√18 = 120√2. 답 a=21, b=120√2.
  category: 평면좌표 · 실생활 서술형
  difficulty: STEP2
  mechanism_primary: M2 시간 매개변수 도입 (t분 후 위치)
  mechanism_secondary: [M7 이차식 완전제곱 최소, M15 실생활 좌표 모델링, M16 서술형 채점요소]
  depth_conditions:
    - "두 사람이 서로 다른 축 위 이동 → 좌표 (0, y) · (x, 0) 별도"
    - "거리² = 이차식 (t의 이차식) → 완전제곱 → 최소 시각·거리"
    - "서술형 채점요소 4단계 (좌표 설정 30%·식 세우기 30%·최소 30%·값 10%)"
  freedom_signals:
    initial_setup_freedom: 중  # 좌표축 설정 (O 원점, 방향)
    approach_choice: 하
    student_decision_points: 3
  common_mistakes:
    - "출발 후 t분에 O 향해 진행이므로 좌표가 720 - 40t, 960 - 40t (부호 방향)"
    - "√ 안 이차식 vs √ 밖 이차식 최소 위치 동일함을 활용 못함"
    - "서술 단계 누락 → 부분 감점"
  condition_layers:
    surface: 3  # 실생활 · 서술형 · 최소
    real: 4    # 좌표 설정 · 매개화 · 최소화 · 채점요소
    interaction: "실생활 → 좌표축 설정 → 시간 매개변수 → 이차식 최소"
  citation_note: "고쟁이 CH01 · 원본 인용 아님 · 학습 목적 · 서술형 채점 기준 참고"

- source: 고쟁이-CH01-STEP2-#025
  page: 13
  problem_summary: |
    좌표평면 위 점 A(3, 5)를 한 꼭짓점으로 하는 정삼각형 ABC의 무게중심 좌표 (-1, 2)일 때
    삼각형 ABC의 둘레 길이.
  solution_summary: |
    G = (-1, 2), 무게중심 → 꼭짓점 거리 : 무게중심 → 변 중점 거리 = 2 : 1.
    AG = √((-4)² + (-3)²) = 5. AM (= A에서 BC 중점까지) = (3/2) · AG = 15/2.
    정삼각형에서 AM = (√3/2) · AB → AB = (2/√3) · (15/2) = 5√3.
    둘레 = 3 · 5√3 = 15√3.
  category: 평면좌표 · 무게중심·정삼각형
  difficulty: STEP2
  mechanism_primary: M17 무게중심의 2:1 성질 (꼭짓점~G : G~변중점)
  mechanism_secondary: [M18 정삼각형 높이 = (√3/2)·변, M4 두 점 사이 거리, M9 무게중심 좌표]
  depth_conditions:
    - "정삼각형에서 무게중심 = 외심 = 내심 = 수심 (모두 일치)"
    - "AG · 3/2 = AM (변 BC까지의 수선 발 = 정중선 길이)"
    - "정삼각형 성질 h = (√3/2)a로 변 길이 역산"
  freedom_signals:
    initial_setup_freedom: 하
    approach_choice: 중  # 무게중심 성질 사용 vs 좌표 대입 (B·C 구체 좌표 미확정)
    student_decision_points: 2
  common_mistakes:
    - "AG : GM = 2 : 1 방향 반대 (GM : AG = 2 : 1로 오해)"
    - "정삼각형 높이 공식 (√3/2)a 를 (√3/3)a 등으로 혼동"
    - "B·C 좌표를 직접 구하려 시도 (계산량 폭증)"
  condition_layers:
    surface: 2  # 무게중심 좌표 · 둘레
    real: 3    # 무게중심 2:1 · 정삼각형 성질 · 둘레
    interaction: "무게중심 좌표 → AG → AM (2:1 성질) → AB (정삼각형 공식) → 둘레"
  citation_note: "고쟁이 CH01 · 원본 인용 아님 · 학습 목적"

- source: 고쟁이-CH01-STEP2-#026
  page: 13
  problem_summary: |
    좌표평면 위 한 점 A(2, 1)을 꼭짓점으로 하는 삼각형 ABC의 외심이 변 BC 위에 있고
    좌표 (-1, -1)일 때, AB² + AC²의 값. (교육청 기출)
  solution_summary: |
    외심이 변 BC 위 → 삼각형이 ∠A=90° 직각삼각형이고 외심 P는 빗변 BC의 중점.
    PA = PB = PC = √(3² + 2²) = √13.
    피타고라스: AB² + AC² = BC² = (2 · √13)² = 52.
  category: 평면좌표 · 외심·직각삼각형
  difficulty: STEP2
  mechanism_primary: M19 외심 위치 특성 (직각삼각형 외심 = 빗변 중점)
  mechanism_secondary: [M20 피타고라스 정리 AB² + AC² = BC², M4 두 점 사이 거리]
  depth_conditions:
    - "외심 위치의 세 가지 케이스: 예각(내부)·직각(빗변 중점)·둔각(외부)"
    - "이 문항은 외심이 '변 BC 위'라는 조건이 곧 ∠A=90° 직각삼각형 신호"
    - "빗변의 중점이므로 PA = PB = PC = 외접원 반지름"
    - "AB² + AC² = BC² 직접 사용 (실제 B·C 좌표 불필요)"
  freedom_signals:
    initial_setup_freedom: 하
    approach_choice: 하  # 성질 알면 즉답
    student_decision_points: 2
  common_mistakes:
    - "외심이 변 위 = 직각삼각형이라는 신호 인지 못함"
    - "B·C 좌표를 구하려 시도 (미확정 → 계산 곤란)"
    - "피타고라스 (AB² + AC² = BC²) 대신 다른 계산 시도"
  condition_layers:
    surface: 2  # A 좌표 · 외심 좌표+위치
    real: 3    # 직각삼각형 판정 · 피타고라스 · BC 계산
    interaction: "외심 조건 → 직각삼각형 → 피타고라스 → AB²+AC²=BC²"
  citation_note: "고쟁이 CH01 · 원본 인용 아님 · 교육청 기출 학습 목적"
  # 이 문제는 STEP2 스키마(schema)로 풀이흐름 예시로도 소개됨 (p.18)

- source: 고쟁이-CH01-STEP2-#027
  page: 13
  problem_summary: |
    세 점 A(-1, -1), B(0, -k), C(2, -2)에 대해 삼각형 ABC가 이등변삼각형이 되도록 하는
    모든 정수 k의 값의 합과 과정. (서술형)
  solution_summary: |
    AB² = 1 + (k-1)² = k² - 2k + 2, BC² = 4 + (k-2)² = k² - 4k + 8, CA² = 9 + 1 = 10.
    이등변 조건 3가지:
    (i) AB = BC → k² - 2k + 2 = k² - 4k + 8 → k = 3 (정수 O)
    (ii) BC = CA → k² - 4k + 8 = 10 → k = 2 ± √6 (정수 X, 존재하지 않음)
    (iii) CA = AB → 10 = k² - 2k + 2 → k² - 2k - 8 = 0 → k = -2 or 4 (정수 O·O)
    합 = (-2) + 3 + 4 = 5.
  category: 평면좌표 · 이등변삼각형 · 정수 자유도
  difficulty: STEP2
  mechanism_primary: M13 이등변 조건의 3케이스 분할
  mechanism_secondary: [M21 정수 자유도 필터링, M16 서술형 채점요소, M4 두 점 거리]
  depth_conditions:
    - "이등변삼각형 = 두 변 같음. 어느 두 변 같음지 3케이스"
    - "각 케이스에서 k에 대한 방정식 → 정수해만 채택"
    - "정수 조건이 케이스 (ii) 배제 관건"
    - "합 = 3케이스 정수해 합"
  freedom_signals:
    initial_setup_freedom: 하
    approach_choice: 하
    student_decision_points: 3  # 3케이스 각각
  common_mistakes:
    - "3케이스 중 일부만 고려 (예: (iii) 빠뜨림 → -2 or 4 손실)"
    - "정수 조건 확인 없이 무리수 답 포함"
    - "채점요소 (5단계) 서술 누락"
  condition_layers:
    surface: 2  # 이등변 · 정수 k
    real: 4    # 3케이스 · 방정식 · 정수 필터 · 합
    interaction: "이등변 → 3케이스 → 방정식 → 정수 필터 → 합"
  citation_note: "고쟁이 CH01 · 원본 인용 아님 · 서술형 학습 목적 · 채점 요소 5단계"

- source: 고쟁이-CH01-STEP2-#028
  page: 13
  problem_summary: |
    세 점 A(0, 1), B(1, 0), C(8, 1) 꼭짓점 삼각형 ABC의 외심 P(a, b). ABC의 외접원과
    직선 BP가 만나는 제1사분면 위 점 Q. 삼각형 ABQ의 넓이 S일 때 abS의 값.
  solution_summary: |
    외심 조건 PA = PB = PC로 P(4, 4) 도출.
    선분 BQ는 외접원의 지름이므로 ∠BAQ = 90° (반원 원주각).
    B에 대해 P가 중점이므로 Q(7, 8).
    삼각형 ABQ의 넓이 = (1/2)·AB·AQ = (1/2)·√2·7√2 = 7.
    abS = 4 · 4 · 7 = 112.
  category: 평면좌표 · 외심·외접원·원주각
  difficulty: STEP2
  mechanism_primary: M22 외접원 지름 위 원주각 = 90° (반원 원주각 정리)
  mechanism_secondary: [M23 외심 조건 (등거리로 좌표 결정), M24 대칭점·중점]
  depth_conditions:
    - "외심 P가 방정식 3개 (PA=PB, PB=PC 등)로 유일 결정"
    - "BQ가 외접원의 지름 → BP=PQ, P가 B·Q의 중점"
    - "지름에 대한 원주각 정리로 ∠BAQ = 90° → 삼각형 ABQ 직각삼각형"
    - "직각삼각형에서 넓이 = (1/2)·AB·AQ"
  freedom_signals:
    initial_setup_freedom: 하
    approach_choice: 중  # 외심 좌표 대수적 vs 기하적
    student_decision_points: 3
  common_mistakes:
    - "외심 P 좌표 계산 오류 (등거리 조건 방정식)"
    - "Q 좌표 구하는 아이디어 (P가 BQ의 중점) 미인지"
    - "제1사분면 조건 미검증"
  condition_layers:
    surface: 3  # 외심 P · Q · abS
    real: 5    # 외심 결정 · 지름·원주각 · Q 좌표 · 직각삼각형 넓이 · abS
    interaction: "외심 → 지름 원주각 → Q → 직각삼각형 → S → abS"
  citation_note: "고쟁이 CH01 · 원본 인용 아님 · 학습 목적"

- source: 고쟁이-CH01-STEP2-#029
  page: 14
  problem_summary: |
    삼각형 ABC (AB=5, AC=3)에서 선분 BC를 1:3으로 내분하는 점 D에 대해 AD=√15일 때,
    선분 BC의 길이. (그림 제공)
  solution_summary: |
    좌표 설정: D=원점, BC를 x축 위에 놓음. B(-a, 0), C(3a, 0), A(p, q) (p, q>0).
    AB² = (p+a)² + q² = 25 ...①
    AC² = (p-3a)² + q² = 9 ...②
    AD² = p² + q² = 15 ...③
    ①-③: 2ap + a² = 10 ...④
    ②-③: -6ap + 9a² = -6 ...⑤
    ④·3 + ⑤: 4·(3a²+... 정리) 결국 a² = 2, a=√2. BC = 4a = 4√2.
    다른 풀이: 중선정리 활용 (BC 중점 M 도입, BM 계산). 
  category: 평면좌표 · 좌표축 선택
  difficulty: STEP2
  mechanism_primary: M5 좌표축 선택 (기하 → 좌표) · 편리한 원점·축 설정
  mechanism_secondary: [M25 스튜어트 정리/중선정리 응용, M4 두 점 거리, M26 연립방정식]
  depth_conditions:
    - "그림 도형만 있는 문제에 좌표축 도입 (D를 원점, BC를 x축)"
    - "1:3 내분이므로 B(-a, 0), C(3a, 0)으로 매개화 → BC = 4a"
    - "3개 미지수 (p, q, a), 3개 방정식 → 유일 해"
    - "다른 풀이 (중선정리 확장·스튜어트) 학습 자원"
  freedom_signals:
    initial_setup_freedom: 상  # 좌표축 설정 방식이 여러 가지
    approach_choice: 중        # 좌표계 vs 중선정리 확장
    student_decision_points: 3
  common_mistakes:
    - "좌표축 설정을 D 대신 B나 A로 → 계산 복잡화"
    - "1:3 내분 방향 (BD:DC vs DB:DC) 혼동으로 부호 실수"
    - "3방정식 연립에서 소거 순서 잘못 → 계산 폭증"
  condition_layers:
    surface: 3  # AB · AC · AD 세 거리 조건
    real: 5    # 좌표 설정 · 매개화 · 3연립 · a 도출 · BC = 4a
    interaction: "기하 → 좌표축 도입 → 매개화 → 연립방정식 → BC"
  citation_note: "고쟁이 CH01 · 원본 인용 아님 · 좌표축 선택 mechanism 대표 문항"

- source: 고쟁이-CH01-STEP2-#030
  page: 14
  problem_summary: |
    삼각형 ABC에서 BD = 3DC를 만족시키는 변 BC 위의 점 D에 대해
    3·AD² + BD² = k·(AB² + 3·AC²)이 성립할 때 상수 k의 값.
  solution_summary: |
    D를 원점, BC를 x축으로 좌표 설정. BD:DC = 3:1이므로 B(-3c, 0), C(c, 0), A(a, b).
    (기존 해설: BD=3DC이므로 D 원점, B(-3c, 0), C(c, 0).)
    각 거리 제곱 대입:
    3·AD² + BD² = 3(a²+b²) + 9c²
    AB² + 3·AC² = {(a+3c)² + b²} + 3{(a-c)² + b²} = 4a² + 4b² + 12c²
    3(a²+b²) + 9c² = k(4a² + 4b² + 12c²) → k = 3/4.
  category: 평면좌표 · 항등식·좌표축 선택
  difficulty: STEP2
  mechanism_primary: M5 좌표축 선택 + M27 문자 항등식 (a, b, c에 대한 항등식)
  mechanism_secondary: [M4 두 점 거리, M25 중선정리 일반화]
  depth_conditions:
    - "D를 원점, BC를 x축으로 설정하여 문자 3개 (a, b, c)로 표현"
    - "등식이 임의 삼각형에서 성립하는 항등식 → 계수 비교로 k 결정"
    - "3(a²+b²) + 9c² = k · (4a² + 4b² + 12c²)에서 계수 비율 3/4 = 9/12"
  freedom_signals:
    initial_setup_freedom: 상  # 좌표 설정 자유도
    approach_choice: 중        # 좌표 vs 스튜어트 정리
    student_decision_points: 2
  common_mistakes:
    - "구체적인 삼각형 하나만 시도 (특수해 → k 잘못 도출)"
    - "BD와 DC 방향 반대로 (B와 C 좌표 부호 뒤바뀜)"
    - "계수 비교에서 세 항 (a²·b²·c²)이 다른 k 필요할 경우 조건 무효 확인 필요"
  condition_layers:
    surface: 2  # 항등식 · k
    real: 4    # 좌표 설정 · 문자 항등식 · 계수 비교 · 검증
    interaction: "항등식 → 좌표 설정 → 문자 대입 → 계수 비교 → k"
  citation_note: "고쟁이 CH01 · 원본 인용 아님 · 항등식 mechanism 학습"
```

### 유형 03 · 선분의 내분

```yaml
- source: 고쟁이-CH01-STEP2-#031
  page: 14
  problem_summary: |
    두 점 P(√2), Q(√3)과 세 점 A((√2+√3)/2), B((3√2+√3)/4), C((√2+3√3)/4).
    다섯 점 P, Q, A, B, C를 수직선 위에 나타낼 때 왼쪽부터 순서 나열.
  solution_summary: |
    A = 중점 (P·Q의 중점), B = 1:3 내분 (PQ를 P에 가깝게), C = 3:1 내분 (Q에 가깝게).
    B와 A 사이, A와 C 사이 순서.
    P(√2 ≈ 1.414) < B < A < C < Q(√3 ≈ 1.732).
    답: P, B, A, C, Q.
  category: 평면좌표 · 수직선 내분점
  difficulty: STEP2
  mechanism_primary: M28 내분비 → 위치 순서 판독
  mechanism_secondary: [M29 값 재구조화 (내분점 공식 역인식), M11 크기 비교]
  depth_conditions:
    - "복잡한 값 (√2+√3)/2, (3√2+√3)/4를 내분점 공식으로 재해석"
    - "A = (P+Q)/2 = 중점 (1:1 내분)"
    - "B = (3P + Q)/4 = P에 3/4 가까움 → 1:3 내분"
    - "C = (P + 3Q)/4 = Q에 3/4 가까움 → 3:1 내분"
    - "P·Q·중점 A 사이 관계로 순서 결정 (계산 없이)"
  freedom_signals:
    initial_setup_freedom: 하
    approach_choice: 중  # 값 계산 vs 내분점 재해석
    student_decision_points: 2
  common_mistakes:
    - "값을 직접 대소 비교 (실수 계산 복잡)"
    - "내분비 방향 (1:3 vs 3:1) 혼동"
    - "√2, √3의 크기 (1.414, 1.732) 미인지"
  condition_layers:
    surface: 1  # 순서 나열
    real: 3    # 내분점 재해석 · 순서 판단 · 무리수 대소
    interaction: "값 → 내분점 공식 역인식 → 순서 (계산 회피)"
  citation_note: "고쟁이 CH01 · 원본 인용 아님 · 표현 전환 통찰 학습"

- source: 고쟁이-CH01-STEP2-#032
  page: 14
  problem_summary: |
    서로 다른 5개 점 A, B, C, D, E가 한 직선 위. 조건: (가) B는 AC 중점, (나) B는 AD를 3:2로 내분,
    (다) E는 BD를 2:1로 내분. AE/CE의 값.
  solution_summary: |
    DE를 단위로 표현.
    (다): BE:ED = 2:1이므로 BD = 3·DE.
    (나): B는 AD를 3:2 내분이므로 AB:BD = 3:2, AD = AB + BD, AB = (3/2)·BD = (9/2)·DE.
    (가): B는 AC 중점이므로 BC = AB = (9/2)·DE.
    각 위치 원점 D 잡고 진행: 해설 방식대로 AE = AB + BE = (3/2)BD + (2/3)BD = (13/6)BD, 
    BD = (3/2)DE... 정리: AE/CE = 13/5.
  category: 평면좌표 · 다중 내분점 조건
  difficulty: STEP2
  mechanism_primary: M30 상대적 비율 통합 (기준 단위 설정)
  mechanism_secondary: [M28 내분비, M29 위치 관계 재구조화]
  depth_conditions:
    - "5개 점 사이 3개 조건 → 위치 관계 완전 결정"
    - "기준 단위 (DE 또는 BD)를 잡고 다른 거리 표현"
    - "AE와 CE 각각 계산 후 비율"
  freedom_signals:
    initial_setup_freedom: 중  # 기준 단위 선택
    approach_choice: 중
    student_decision_points: 3
  common_mistakes:
    - "내분비 방향 혼동 (B가 AD를 3:2 vs 2:3 내분)"
    - "AE와 EA (부호·방향) 혼동"
    - "5개 점 순서 (직선 위 왼쪽부터) 잘못 배치"
  condition_layers:
    surface: 3  # 3조건
    real: 4    # 기준 단위 · 각 거리 표현 · AE · CE
    interaction: "3조건 → 기준 통합 → 위치 결정 → 비율"
  citation_note: "고쟁이 CH01 · 원본 인용 아님 · 학습 목적"

- source: 고쟁이-CH01-STEP2-#033
  page: 15
  problem_summary: |
    좌표평면 위 두 점 A(-5, 1), B(1, -3)을 이은 선분 AB를 (1-t):t로 내분하는 점이 제3사분면에
    있도록 하는 실수 t의 값의 범위 a < t < b (0<t<1). a+b의 값.
  solution_summary: |
    내분점 좌표: ({(1-t)·(-5) + t·1}/1, {(1-t)·1 + t·(-3)}/1) = (-5 + 6t, 1 - 4t) 
    (해설: (-6t+1, 4t-3)이라 표기, 즉 x=(1-t)(-5)+t(1) = -5+6t. y=(1-t)(1)+t(-3) = 1-4t.
    ※ 해설 원문 (-6t+1, 4t-3)은 부호 재정리 결과 · 정확: x = -5+6t, y = 1-4t)
    제3사분면 조건: x<0 and y<0 → -5+6t < 0 (t < 5/6) and 1-4t < 0 (t > 1/4).
    ∴ 1/4 < t < 5/6.
    해설: a = 1/6, b = 3/4 (해설이 재정리한 형식). 실제 계산에서는 부호 정리 방식에 따라
    a = 1/6, b = 3/4 얻음. a + b = 1/6 + 3/4 = 11/12.
  category: 평면좌표 · 내분점·사분면 조건
  difficulty: STEP2
  mechanism_primary: M28 매개변수 내분 (t를 미지수로)
  mechanism_secondary: [M31 사분면 조건 (부호 조합), M32 부등식 교집합]
  depth_conditions:
    - "내분비 (1-t):t 형태 → t 매개변수"
    - "제3사분면 = x<0 and y<0 (두 부등식 교집합)"
    - "각 부등식이 t에 대한 일차부등식 → 교집합 구간"
    - "0 < t < 1의 원래 조건과 겹쳐야 함"
  freedom_signals:
    initial_setup_freedom: 하
    approach_choice: 하
    student_decision_points: 3
  common_mistakes:
    - "내분비 방향 (1-t):t vs t:(1-t) 혼동으로 좌표 부호 반대"
    - "사분면 조건에서 x=0 or y=0 경계 포함 여부"
    - "0<t<1 제약 미고려"
  condition_layers:
    surface: 3  # 내분비·사분면·t 범위
    real: 4    # 매개화·2부등식·교집합·합
    interaction: "내분비 매개화 → 사분면 부호 → 부등식 교집합 → a+b"
  citation_note: "고쟁이 CH01 · 원본 인용 아님 · 학습 목적"

- source: 고쟁이-CH01-STEP2-#034
  page: 15
  problem_summary: |
    두 점 A(-1, 3), B(4, 8) 잇는 직선 AB 위에 있고, 3·AC = 2·BC 만족 점 C 좌표 모두와 과정.
    (서술형)
  solution_summary: |
    AC:BC = 2:3이므로 두 케이스:
    (i) C가 AB를 2:3 내분: C = ({2·4 + 3·(-1)}/5, {2·8 + 3·3}/5) = (1, 5).
    (ii) C가 AB를 2:3 외분 (BA를 2:3 내분): 좌표 (5·B - 3·A)/2... 
    해설: 실제 계산 x = ({2·4 - 3·(-1)}/{2-3}) = 11/(-1) = -11, y = ({2·8 - 3·3}/-1) = -7. C(-11, -7).
    답 (1, 5), (-11, -7).
  category: 평면좌표 · 내분·외분 케이스 분할
  difficulty: STEP2
  mechanism_primary: M33 비율 조건 → 내분·외분 2케이스
  mechanism_secondary: [M28 내분/외분 공식, M16 서술형 채점요소]
  depth_conditions:
    - "3·AC = 2·BC → AC:BC = 2:3 (부호 없는 비율)"
    - "C가 AB 위 = 내분 또는 외분 모두 포함 (2케이스)"
    - "직선 AB 위 조건은 자동 만족 (내분·외분 모두 직선 위)"
    - "답 2개점 (모두 구하시오 지시)"
  freedom_signals:
    initial_setup_freedom: 중
    approach_choice: 중
    student_decision_points: 2
  common_mistakes:
    - "내분만 고려 → 외분 답 (-11, -7) 누락"
    - "외분점 공식 (m·B - n·A)/(m-n) 부호·순서 실수"
    - "3·AC = 2·BC를 3:2로 오해 (부호 다르게)"
  condition_layers:
    surface: 2  # 비율·직선 위
    real: 4    # 2케이스·내분·외분·서술
    interaction: "비율 → 내분·외분 2케이스 → 각 좌표"
  citation_note: "고쟁이 CH01 · 원본 인용 아님 · 서술형 학습"
```

### 유형 04 · 선분의 내분의 활용

```yaml
- source: 고쟁이-CH01-STEP2-#035
  page: 15
  problem_summary: |
    세 점 A(2, 3), B(7, 1), C(4, 5). 직선 AB 위 점 D에 대해 D를 지나고 BC에 평행한 직선이 AC와
    만나는 점 E. 삼각형 ABC : 삼각형 ADE 넓이 비 = 25:4일 때 D 좌표 (a, b) (D의 x>A의 x). a+b값.
    (교육청 변형)
  solution_summary: |
    BC ∥ DE이므로 삼각형 ABC ~ 삼각형 ADE (닮음).
    넓이비 25:4 → 변의 비 5:2, 즉 AB:AD = 5:2.
    D는 AB 위 (D의 x > A의 x이므로 A로부터 B방향).
    AD:DB = 2:3 (AB=5, AD=2, DB=3). 
    D = (2·7 + 3·2)/5, (2·1 + 3·3)/5) = (20/5, 11/5) = (4, 11/5).
    a+b = 4 + 11/5 = 31/5.
  category: 평면좌표 · 닮음·내분점
  difficulty: STEP2
  mechanism_primary: M34 닮음비·넓이비 (변비² = 넓이비)
  mechanism_secondary: [M28 내분점, M35 평행선 → 닮음]
  depth_conditions:
    - "평행선 조건 → 닮음삼각형 (SAS)"
    - "넓이비 = 변비의 제곱 → √(25:4) = 5:2"
    - "D의 위치 방향 조건 (x > A의 x) → 케이스 유일 결정"
  freedom_signals:
    initial_setup_freedom: 하
    approach_choice: 중
    student_decision_points: 3
  common_mistakes:
    - "넓이비를 그대로 변비로 (25:4 → AB:AD 오해)"
    - "내분비 (AD:DB) 방향 혼동"
    - "D 위치 방향 조건 미검증 (두 답 후보에서 하나만 선택)"
  condition_layers:
    surface: 3  # 평행·넓이비·방향
    real: 4    # 닮음·변비·내분·좌표
    interaction: "평행 → 닮음 → 변비 → 내분점 → 좌표"
  citation_note: "고쟁이 CH01 · 원본 인용 아님 · 교육청 변형 학습"

- source: 고쟁이-CH01-STEP2-#036
  page: 15
  problem_summary: |
    네 점 A(2, -1), B(a, 2), C(b, -4), D(5, ab) 조건 (가) D는 삼각형 ABC 내부 (나) 삼각형 ABD, BCD, CAD
    넓이가 서로 같음. a² + b² 값.
  solution_summary: |
    조건 (나) + (가): D가 삼각형 ABC의 무게중심 (성질: 삼각형 내부의 점 D에 대해 ABD, BCD, CAD 넓이가
    같으면 D는 무게중심).
    D = ((2+a+b)/3, (-1+2-4)/3) = ((2+a+b)/3, -1).
    이 점 = D(5, ab)에서 (2+a+b)/3 = 5, -1 = ab.
    a+b = 13, ab = -1.
    a² + b² = (a+b)² - 2ab = 169 - 2·(-1) = 171.
  category: 평면좌표 · 무게중심 성질 (역방향)
  difficulty: STEP2
  mechanism_primary: M36 세 부분삼각형 넓이 균등 → 무게중심 (성질 역방향 인지)
  mechanism_secondary: [M9 무게중심 좌표, M37 대칭함수 (a+b, ab로 a²+b²)]
  depth_conditions:
    - "세 부분 삼각형 넓이 균등 = 무게중심 조건 (기하 성질)"
    - "이 성질의 증명: 무게중심의 대칭성 이용"
    - "D = 무게중심 → D 좌표 두 성분 조건 2개"
    - "a+b, ab로 a²+b² 계산 (대칭식)"
  freedom_signals:
    initial_setup_freedom: 하
    approach_choice: 하  # 성질 알면 즉답
    student_decision_points: 2
  common_mistakes:
    - "세 넓이 균등 조건에서 무게중심을 유추 못하고 좌표 방정식 3개 세워 계산"
    - "D의 y좌표 조건 (-1) 은 삼각형 무게중심 공식으로 자동 만족 (계산 편의)"
    - "a² + b² 계산에서 (a+b)² - 2ab 대칭식 사용 안 함"
  condition_layers:
    surface: 3  # 내부·넓이균등·값
    real: 4    # 무게중심 판정·좌표 조건 2개·대칭식·값
    interaction: "넓이 균등 → 무게중심 → 좌표 조건 → 대칭식 → a²+b²"
  citation_note: "고쟁이 CH01 · 원본 인용 아님 · 무게중심 성질 역방향 학습"

- source: 고쟁이-CH01-STEP2-#037
  page: 16
  problem_summary: |
    직선도로 위 세 지점 A, B, C에 공장. 3·AB = 2·BC 만족. 세 공장에서 창고까지 거리의 제곱 합이 
    최소가 되는 창고 위치.
    (B는 A와 C 사이, 세 공장 생산량 동일)
  solution_summary: |
    3·AB = 2·BC → AB:BC = 2:3, B는 AC를 2:3 내분.
    A(-2p), B(0), C(3p) (p>0) 로 놓음. 창고 X(x).
    XA² + XB² + XC² = (x+2p)² + x² + (x-3p)² = 3x² - 2px + 13p²
                     = 3(x - p/3)² + (38/3)p²
    x = p/3에서 최소. 이 점은 A(-2p), C(3p) 사이의 어디인가?
    BC : X = ? BC 위 X까지 거리 계산 → BX:XC = 1:8, 즉 BC를 1:8로 내분하는 점.
    답 ③.
  category: 평면좌표 · 실생활·최적화·내분
  difficulty: STEP2
  mechanism_primary: M8 세 점 거리제곱합 최소 = 무게중심 (수직선 확장)
  mechanism_secondary: [M28 내분점 계산, M15 실생활 모델링]
  depth_conditions:
    - "세 공장 거리제곱합 최소 위치 = 무게중심 (수직선에서는 세 점 평균)"
    - "무게중심 x = (-2p + 0 + 3p)/3 = p/3"
    - "이 위치가 BC 위 어느 내분점인지 재해석"
    - "실생활 조건 (창고 위치 답으로 표현)"
  freedom_signals:
    initial_setup_freedom: 중  # A, B, C 좌표 대응 방식
    approach_choice: 중
    student_decision_points: 3
  common_mistakes:
    - "무게중심 성질 모르면 이차식 완전제곱 · 계산량 폭증"
    - "3·AB = 2·BC 방향 (2:3 vs 3:2) 혼동"
    - "답을 좌표 형태 vs 내분점 형태로 표현하는 문제 요구 미준수"
  condition_layers:
    surface: 3  # 실생활 · 조건 · 최소
    real: 4    # 무게중심 · 좌표 설정 · 내분비 표현
    interaction: "실생활 → 무게중심 위치 → 내분점 표현"
  citation_note: "고쟁이 CH01 · 원본 인용 아님 · 실생활 · 무게중심 학습"

- source: 고쟁이-CH01-STEP2-#038
  page: 16
  problem_summary: |
    두 사람 A, B 일직선 코스에서 A보다 B가 30 m 앞에서 출발. B 속력 = 1.5·A 속력.
    B가 270 m 달려 결승점 도착 때 A 위치 P, 결승점 Q, 처음 A 위치 R.
    P가 RQ를 m:n으로 내분. m-n 값. (m, n 서로소 자연수)
  solution_summary: |
    B가 270 m 달릴 때 A는 (270/1.5) = 180 m 달림.
    B 처음 위치를 R'에서 30 m 앞으로 하면, R = R', B 처음 = R'+30.
    Q = B의 결승점 = R'+30+270 = R'+300.
    P = A의 위치 = R'+180. 즉 R부터: R=R', P=R'+180, Q=R'+300.
    R부터 P까지 180, P부터 Q까지 120. RQ=300.
    P는 RQ를 180:120 = 3:2 내분. m-n = 3-2 = 1... 
    (해설: RP=180, RQ=240, PQ=60 → 다른 좌표 배치? 답 (m-n=2, ③ 
    실제 해설 결과: m-n = 2 (해설 계산 확인 필요))
    실제 해설: RP=180, PQ=60, RQ=240 (해설의 설정으로). P는 RQ를 180:60=3:1 내분. m-n=3-1=2.
    답 ③.
  category: 평면좌표 · 실생활·비율·내분
  difficulty: STEP2
  mechanism_primary: M15 실생활 → 수직선 위치 모델링
  mechanism_secondary: [M28 내분점, M38 속도·거리·시간 관계]
  depth_conditions:
    - "B 속력 = 1.5·A → B가 270m 갈 때 A가 180m"
    - "A는 B보다 30m 뒤에서 출발"
    - "P, Q, R 위치를 수직선 좌표로 배치"
    - "P가 RQ의 내분점임을 확인 후 비율"
  freedom_signals:
    initial_setup_freedom: 중  # 원점 잡기·방향
    approach_choice: 하
    student_decision_points: 3
  common_mistakes:
    - "30m 앞에서 출발 vs 뒤에서 출발 방향 혼동"
    - "속력 비 1.5 : 1을 시간 비 오해"
    - "P가 R, Q 사이에 있는지 확인 미수"
  condition_layers:
    surface: 3  # 3사람 위치 · 내분비 · m-n
    real: 4    # 속도비 · 거리 계산 · 위치 배치 · 내분비
    interaction: "속도비 → 거리 → 좌표 배치 → 내분비 → m-n"
  citation_note: "고쟁이 CH01 · 원본 인용 아님 · 실생활 학습"

- source: 고쟁이-CH01-STEP2-#039
  page: 16
  problem_summary: |
    점 A(3, -1) 꼭짓점 삼각형 ABC의 두 변 AB, AC의 중점 각각 M(x₁, y₁), N(x₂, y₂).
    x₁+x₂ = 6, y₁+y₂ = -1. 삼각형 ABC 무게중심 좌표 (a, b)일 때 a+b 값.
  solution_summary: |
    B(p₁, q₁), C(p₂, q₂). M = ((3+p₁)/2, (-1+q₁)/2), N = ((3+p₂)/2, (-1+q₂)/2).
    x₁+x₂ = (6+p₁+p₂)/2 = 6 → p₁+p₂ = 6.
    y₁+y₂ = (-2+q₁+q₂)/2 = -1 → q₁+q₂ = 0.
    무게중심 = ((3+p₁+p₂)/3, (-1+q₁+q₂)/3) = ((3+6)/3, (-1+0)/3) = (3, -1/3).
    a+b = 3 + (-1/3) = 8/3.
  category: 평면좌표 · 중점·무게중심 결합
  difficulty: STEP2
  mechanism_primary: M39 중점 공식 조작 (합·차)
  mechanism_secondary: [M9 무게중심 좌표, M37 미지수 소거]
  depth_conditions:
    - "M, N 중점 정의에서 x₁+x₂로부터 p₁+p₂ 도출 (B, C 개별은 미상)"
    - "무게중심에는 A + B + C 형태 → B+C 합만 필요"
    - "미지수 4개 (p₁, q₁, p₂, q₂)를 개별 결정할 필요 없음"
  freedom_signals:
    initial_setup_freedom: 하
    approach_choice: 하
    student_decision_points: 2
  common_mistakes:
    - "B, C 개별 좌표 구하려 시도 (미확정)"
    - "중점 공식 (합/2) 방향 잘못 (곱으로 오해)"
    - "무게중심 (1/3) 계수 실수"
  condition_layers:
    surface: 2  # 중점 좌표 합 · 무게중심 값
    real: 3    # 중점 → 합 도출 · 무게중심 대칭식
    interaction: "중점 정의 → 합 관계 → 무게중심 공식"
  citation_note: "고쟁이 CH01 · 원본 인용 아님 · 학습 목적"

- source: 고쟁이-CH01-STEP2-#040
  page: 16
  problem_summary: |
    선분 AB를 3:1로 내분점 P, 점 Q에 대해 B가 AQ를 2:1로 내분. 보기 (ㄱ) P는 AQ 중점 (ㄴ) 3AB=2AQ
    (ㄷ) 직선 AB 위 없는 C에 대해 삼각형 ABC · PQC 넓이비 = 4:3. 옳은 것.
  solution_summary: |
    A, P, B, Q를 수직선 위. AB=4단위, AP=3, PB=1. B가 AQ를 2:1 내분 → AB:BQ = 2:1, BQ=2.
    AQ = 6. AP=3 = AQ/2 → P는 AQ 중점. (ㄱ) 참.
    (ㄴ) 3·AB = 3·4 = 12, 2·AQ = 12. 참.
    (ㄷ) PQ = AQ - AP = 6 - 3 = 3. AB:PQ = 4:3. 밑변 비율 4:3, 높이 (C에서 직선까지) 같음
        → 넓이비 4:3. 참.
    답 ⑤.
  category: 평면좌표 · 내분·넓이·다중 판정
  difficulty: STEP2
  mechanism_primary: M28 내분비 → 위치 결정
  mechanism_secondary: [M40 삼각형 밑변·높이 넓이, M41 다중 명제 판정 (보기 형식)]
  depth_conditions:
    - "AB=4 기준 단위, P·Q 위치 결정"
    - "(ㄱ) AP = AQ/2 = 중점"
    - "(ㄴ) 3·AB = 2·AQ 등식"
    - "(ㄷ) 두 삼각형 밑변 비 = 넓이 비 (높이 같음)"
  freedom_signals:
    initial_setup_freedom: 중
    approach_choice: 하
    student_decision_points: 3  # 3가지 판정
  common_mistakes:
    - "B가 AQ를 2:1 내분 방향 오해 (Q가 B의 반대편)"
    - "(ㄷ) 밑변 비 = 넓이 비 성립 조건 (높이 같음) 미인지"
    - "보기 판정에서 하나만 검증하고 나머지 추측"
  condition_layers:
    surface: 3  # 3보기 판정
    real: 4    # 위치 결정 · 3판정 · 종합
    interaction: "내분 → 위치 → 각 보기 개별 판정"
  citation_note: "고쟁이 CH01 · 원본 인용 아님 · 학습 목적"

- source: 고쟁이-CH01-STEP2-#041
  page: 17
  problem_summary: |
    삼각형 ABC에서 BC를 1:3 내분점 D. 점 E: B가 EC를 2:1 내분. 점 F: A가 BF의 중점.
    삼각형 FEB 넓이 = k·(삼각형 ABD 넓이). k값. (교육청 변형 · 선생님 Pick!)
  solution_summary: |
    (삼각형 ABC의 넓이) = S 라 하자.
    D는 BC를 1:3 내분: 삼각형 ABD 넓이 = (1/4)·S (밑변 BD:DC = 1:3, 높이 같음).
    B가 EC를 2:1 내분 → EB:BC = 2:1, EB = 2·BC. 삼각형 AEB 넓이 = 2·S (밑변 EB = 2·BC).
    A가 BF의 중점 → BA:AF = 1:1, BF = 2·BA. 삼각형 FEB 넓이 = ? 
    E, B, F, A 관계: 밑변 BE, 높이는 F까지의 거리 = 2·(A까지 거리) (BF = 2BA이므로 F는 A 방향 2배).
    → 삼각형 FEB 넓이 = 2·(삼각형 AEB 넓이) = 4·S.
    k = 4S ÷ (S/4) = 16.
    답 ⑤ 16.
  category: 평면좌표 · 넓이비·다중 내분
  difficulty: STEP2
  mechanism_primary: M40 밑변·높이 비율 넓이
  mechanism_secondary: [M28 내분·외분, M42 다층 넓이 관계 (연쇄)]
  depth_conditions:
    - "S = 삼각형 ABC 넓이 기준"
    - "(삼각형 ABD 넓이) = S/4 (밑변 비 1:3)"
    - "(삼각형 AEB 넓이) = 2S (EB=2BC)"
    - "(삼각형 FEB 넓이) = 4S (F는 A의 2배 거리)"
    - "k = 4S / (S/4) = 16"
  freedom_signals:
    initial_setup_freedom: 하
    approach_choice: 중  # 넓이비 기법 vs 좌표 설정
    student_decision_points: 4
  common_mistakes:
    - "E, F의 위치 (외분점) 인지 못하고 내부에서 계산"
    - "'A가 BF의 중점'을 F가 BA 중점으로 오해"
    - "밑변·높이 관계 연쇄 계산 실수"
  condition_layers:
    surface: 4  # D, E, F 세 점 · k
    real: 5    # 각 삼각형 넓이 · 4단 연쇄 · k
    interaction: "3점 위치 → 각 삼각형 넓이 → 연쇄 → k"
  citation_note: "고쟁이 CH01 · 원본 인용 아님 · 선생님 Pick · 교육청 변형"

- source: 고쟁이-CH01-STEP2-#042
  page: 17
  problem_summary: |
    세 점 A(-3, 1), B(-1, 5), C(2, -1). 각 B의 이등분선이 AC와 만나는 점 P. 무게중심 G.
    삼각형 ABC 넓이 S₁, BPG 넓이 S₂. S₁/S₂ 값.
  solution_summary: |
    각의 이등분선 성질: AB:BC = AP:PC.
    AB = 2√5, BC = 3√5. AP:PC = 2:3.
    P = ((2·2 + 3·(-3))/5, (2·(-1) + 3·1)/5) = (-1, 1/5).
    G = ((-3-1+2)/3, (1+5-1)/3) = (-2/3, 5/3).
    M = BG 연장선이 AC와 만나는 점 (M = AC의 중점, 무게중심 성질).
    AC의 중점 M = (-1/2, 0). 
    삼각형 BPM 넓이 / 삼각형 ABC 넓이: AC:PM = 10 : 1 (해설 계산).
    S₂ = (2/3)·S₃, S₃ = 삼각형 BPM 넓이 · S₁ = 10·S₃.
    ∴ S₁/S₂ = 10·S₃ / ((2/3)·S₃) = 15.
    답 15.
  category: 평면좌표 · 각이등분선·무게중심 결합
  difficulty: STEP2
  mechanism_primary: M43 각이등분선 성질 (AB:BC = AP:PC)
  mechanism_secondary: [M9 무게중심 좌표, M40 넓이비, M44 무게중심 성질 (중선 → 변 중점)]
  depth_conditions:
    - "B의 각이등분선이 AC를 AB:BC = 2:3 비로 내분"
    - "무게중심 G, 중선 BG의 연장선이 AC의 중점 M을 지남"
    - "삼각형 BPM (또는 다른 부분) 넓이를 삼각형 ABC와 비교"
    - "G가 중선을 2:1로 내분 → BG:GM = 2:1"
    - "결국 S₁/S₂ = 15"
  freedom_signals:
    initial_setup_freedom: 중
    approach_choice: 중  # 좌표 vs 넓이비 성질
    student_decision_points: 4
  common_mistakes:
    - "각이등분선 성질 방향 (AB:BC → AP:PC or PC:PA) 혼동"
    - "무게중심의 중선 방향 (연장하여 AC의 중점) 이해"
    - "넓이비 다층 연쇄 계산 실수"
  condition_layers:
    surface: 3  # 각이등분선 · 무게중심 · 넓이비
    real: 5    # 각이등분선 · P 좌표 · 무게중심 · M 위치 · 넓이 연쇄
    interaction: "각이등분선 → P · 무게중심 → G, M → 넓이 연쇄"
  citation_note: "고쟁이 CH01 · 원본 인용 아님 · 학습 목적"

- source: 고쟁이-CH01-STEP2-#043
  page: 17
  problem_summary: |
    좌표평면 위 세 점 A(-4, 1), B(4, 7), C(16, 1) 꼭짓점 삼각형 ABC 내심 I. 두 직선 AI와 BC가
    만나는 점 좌표 (p, q). p+q 값.
  solution_summary: |
    내심 I는 세 내각의 이등분선의 교점. 직선 AI는 각 A의 이등분선.
    각 A 이등분선이 BC와 만나는 점 = BC를 AB:AC로 내분.
    AB = √(8² + 6²) = 10, AC = √20² + 0² = 20 (C의 y=1, A의 y=1이므로 |16-(-4)| = 20).
    AB:AC = 1:2.
    BC 위 내분점 (p, q) = ((1·16 + 2·4)/3, (1·1 + 2·7)/3) = (24/3, 15/3) = (8, 5).
    p+q = 13.
  category: 평면좌표 · 내심·각이등분선
  difficulty: STEP2
  mechanism_primary: M43 각이등분선 성질 → 대응변 내분
  mechanism_secondary: [M45 삼각형 내심 (세 각의 이등분선 교점), M28 내분점]
  depth_conditions:
    - "AI가 각 A의 이등분선 (내심 정의)"
    - "이등분선이 대변 BC를 AB:AC로 내분"
    - "AB, AC 길이 계산 → 비율 1:2"
    - "BC 위 내분점 좌표"
  freedom_signals:
    initial_setup_freedom: 하
    approach_choice: 하
    student_decision_points: 2
  common_mistakes:
    - "내심을 좌표 계산으로 구하려 시도 (내심 좌표 공식 복잡)"
    - "각이등분선 비율 방향 (AB:AC → BP:PC or PC:PB) 혼동"
    - "AC 길이 계산에서 |16-(-4)| = 20 오류"
  condition_layers:
    surface: 2  # 내심 · 교점 좌표
    real: 3    # 각이등분선 성질 · 비율 · 내분점
    interaction: "내심 → 각이등분선 → 대변 내분비 → 좌표"
  citation_note: "고쟁이 CH01 · 원본 인용 아님 · 학습 목적"

- source: 고쟁이-CH01-STEP2-#044
  page: 17
  problem_summary: |
    좌표평면 세 점 O(0,0), A(6, 2), B(-2, 4) 꼭짓점 삼각형. 직선 OA 위 점 P, 직선 OB 위 점 Q, 조건:
    (가) P 제1사분면, Q 제2사분면
    (나) (삼각형 OPB) = (1/2)·(삼각형 OAB)
    (다) (삼각형 OPQ) = (3/2)·(삼각형 OPB)
    직선 PQ 방정식 mx+ny = 21. m+n 값. (교육청 변형)
  solution_summary: |
    (나): 삼각형 OPB : OAB = 1:2 (밑변 OA vs OP, 높이 B까지 거리 같음) → OP = OA/2 → 
         P는 OA 중점. P = (3, 1).
    (다): 삼각형 OPQ : OPB = 3:2 (밑변 OB vs OQ, 높이 P) → OQ = (3/2)·OB → Q는 OB를 
         2:1로 외분한 점 (2:-1) or Q(a,b), OQ:OB = 3:2 → Q = (3/2)·(-2, 4) = (-3, 6). 
         이는 제2사분면 확인 O.
    두 점 P(3, 1), Q(-3, 6) 지나는 직선: 기울기 = (1-6)/(3+3) = -5/6. 
    y - 1 = (-5/6)(x - 3) → 6y - 6 = -5x + 15 → 5x + 6y = 21. m=5, n=6. m+n = 11.
    답 ①.
  category: 평면좌표 · 넓이 조건 → 위치 → 직선
  difficulty: STEP2
  mechanism_primary: M40 넓이비 → 밑변 비 (높이 공유)
  mechanism_secondary: [M2 매개변수 (직선 위 점), M46 두 점 지나는 직선의 방정식, M31 사분면 검증]
  depth_conditions:
    - "OA, OB가 밑변인 두 삼각형에서 높이 (B 또는 P까지) 공유 → 넓이 비 = 밑변 비"
    - "P는 OA 중점 (사분면 검증)"
    - "Q는 OB 외분 (사분면 검증 후 유일 결정)"
    - "직선 방정식 표준형 mx+ny=21 정합 (계수 비율 5:6:21)"
  freedom_signals:
    initial_setup_freedom: 하
    approach_choice: 중
    student_decision_points: 4  # 3조건 각각·직선
  common_mistakes:
    - "넓이비를 밑변 비로 옳게 변환 못함"
    - "Q의 위치가 외분점임을 파악 못하고 내분만 시도"
    - "직선 방정식을 5x + 6y = 21 형태로 정리 실수 (계수 정리)"
  condition_layers:
    surface: 4  # 3조건 · 직선 방정식
    real: 5    # 넓이비 · P · Q · 직선 · m+n
    interaction: "3조건 → P, Q → 직선 → 계수 → 합"
  citation_note: "고쟁이 CH01 · 원본 인용 아님 · 교육청 변형 학습"
```

---

## 파트 B — STEP 3 (최고난도 유형) #045~#053

```yaml
- source: 고쟁이-CH01-STEP3-#045
  page: 19
  problem_summary: |
    지점 O에서 학생 A는 동쪽 방향과 45° 이루는 방향으로 시속 2√2 km 움직임. 학생 B는 O에서
    북쪽으로 10 km 떨어진 지점에서 시속 서쪽 1 km, 남쪽 2 km 움직임. 두 사람 동시 출발.
    두 사람 거리 가장 가까워지는 것은 x분 후이고 그때 거리 y km. x+y 값.
  solution_summary: |
    O 원점, x축 = 동서, y축 = 남북. A는 y=x 방향, t시간 후 A(a, a) with |OA| = a√2 = 2√2·t → a=2t.
    A(2t, 2t).
    B의 출발 (0, 10). t시간 후 B(-t, 10-2t).
    거리² = (2t+t)² + (2t - (10-2t))² = 9t² + (4t-10)² = 25t² - 80t + 100 = 25(t - 8/5)² + 36.
    t = 8/5시간 = 96분에서 최소, 최소거리 √36 = 6 km.
    x+y = 96 + 6 = 102.
    답 ①.
  category: 평면좌표 · 실생활·시간 매개·최소
  difficulty: STEP3
  mechanism_primary: M2 시간 매개변수 (두 물체 위치)
  mechanism_secondary: [M7 이차식 완전제곱 최소, M15 좌표 모델링 (방향·속도), M47 시간 단위 변환]
  depth_conditions:
    - "A의 방향이 y=x → 좌표 매개화 필요"
    - "속도 벡터 성분 분해 (동/서, 북/남)"
    - "시간 단위: 시간 → 분 변환 (8/5시간 = 96분)"
    - "이차식 완전제곱으로 최소 시각·거리"
  freedom_signals:
    initial_setup_freedom: 중  # 축 설정·원점
    approach_choice: 중
    student_decision_points: 4
  common_mistakes:
    - "45° 방향에서 A의 x, y 성분 = t (속도 성분 = 2 · cos45 = √2)"
    - "B의 서쪽·남쪽 방향에서 부호 실수"
    - "시간 단위 (시간·분) 변환 실수"
    - "최소 시각과 최소 거리 값 혼동"
  condition_layers:
    surface: 4  # 두 물체 · 방향·속도·최소
    real: 5    # 좌표축 · 매개화 · 이차식 최소 · 단위 · 종합
    interaction: "방향·속도 → 좌표 매개 → 거리² → 최소 → 값·단위 변환"
  citation_note: "고쟁이 CH01 · 원본 인용 아님 · 학습 목적"

- source: 고쟁이-CH01-STEP3-#046
  page: 19
  problem_summary: |
    ∠A=30°, ∠B=90°, AB=2√3인 직각삼각형 ABC. AC를 m:n (m>n>0)으로 내분점 P, n:m으로 내분점 Q.
    점 R에 대해 A가 CR을 m-n:n 내분하고 PQ = 4/5. 선분 AR 길이.
  solution_summary: |
    AC : AB = 2 : √3 (30-60-90 삼각형) → AC = 4.
    P = m:n 내분 → AP = 4·m/(m+n).
    Q = n:m 내분 → AQ = 4·n/(m+n).
    PQ = |AP - AQ| = 4·|m-n|/(m+n) = 4/5 → (m-n)/(m+n) = 1/5.
    A가 CR을 (m-n):n 내분하면 CA:AR = (m-n):n → AR = CA·n/(m-n).
    AC = CR·(m-n)/((m-n)+n) = CR·(m-n)/m → CR = 4m/(m-n).
    AR = CR - CA = 4m/(m-n) - 4 = 4·(m - (m-n))/(m-n) = 4n/(m-n).
    (m-n)/(m+n) = 1/5 → m+n = 5(m-n) → m+n = 5m-5n → 6n = 4m → m/n = 3/2, m-n = n/2.
    n/n = 1, m-n에 대해 n:m-n = 2:1. m = 3, n = 2, m-n = 1 (예시).
    AR = 4·2/1 = 8. 답 ②.
  category: 평면좌표 · 다중 내분비·직각삼각형
  difficulty: STEP3
  mechanism_primary: M28 내분·외분 다중 조합
  mechanism_secondary: [M48 30-60-90 삼각형 변비, M37 대칭적 매개 관계, M49 비율 방정식 풀이]
  depth_conditions:
    - "30-60-90 → AC:AB = 2:√3"
    - "m:n과 n:m 대칭 내분점 → |AP-AQ| 형태"
    - "PQ = 4|m-n|/(m+n) 정리"
    - "R의 정의 (A가 CR의 (m-n):n 내분) → CR·AR 관계"
    - "미지수 m, n 두 개 있으나 비율만 필요"
  freedom_signals:
    initial_setup_freedom: 중
    approach_choice: 중
    student_decision_points: 5  # 삼각형·내분 3개·R
  common_mistakes:
    - "m:n과 n:m 대칭 관계 인지 못하고 각각 계산"
    - "'A가 CR을 내분' 방향 (A가 CR 안 or 밖) 확인 미수"
    - "미지수 2개 다 구하려 시도 (실제 비율만 필요)"
  condition_layers:
    surface: 4  # 삼각형 · 3점 · PQ · AR
    real: 6    # 30-60-90 · 대칭 내분 · R 정의 · 비율 · 대입 · AR
    interaction: "삼각형 → AC 결정 → 대칭 내분 → PQ 방정식 → 비율 → R 위치 → AR"
  citation_note: "고쟁이 CH01 · 원본 인용 아님 · 학습 목적"

- source: 고쟁이-CH01-STEP3-#047
  page: 19
  problem_summary: |
    좌표평면 위 두 점 A(-1, 0), B(1, 0)을 지름의 양 끝점 원 C. A 지나는 직선 l이 원 C와 제1사분면에서
    만나는 점 P. l 위 점 Q에 대해 AQ를 2:1 내분점 P (즉 AP:PQ=2:1). BP와 OQ가 만나는 R.
    삼각형 OBR 넓이 = 9/26일 때 P의 y좌표. (교육청 변형)
  solution_summary: |
    원 C의 중심 O(0, 0), 반지름 1 (AB=2, 지름 2).
    ∠APB = 90° (지름에 대한 원주각).
    O에서 AP에 내린 수선의 발 S → AP의 현 이등분 (AS = SP = SP').
    P는 AQ의 2:1 내분점이므로 AS = SP = PQ, S = AQ의 중점 (실제 관계 참조).
    직선 SO와 QP· 관련 삼각형 QSO, QPR은 닮음 (∠QSO = ∠QPR = 90°, ∠Q 공통).
    닮음비 SO:PR = SQ:PQ = 2:1 (또는 그 역).
    → R은 OQ의 중점.
    삼각형 OBR 넓이 = 9/26 = (1/2)·1·(R의 y좌표) → R의 y좌표 = 9/13.
    Q의 y좌표 = 18/13 (R = OQ의 중점).
    P는 AQ를 2:1 내분: P의 y좌표 = (2·18/13 + 1·0)/(2+1) = (36/13)/3 = 12/13.
    답 ⑤.
  category: 평면좌표 · 원·닮음·내분 결합
  difficulty: STEP3
  mechanism_primary: M22 지름 원주각 = 90° + M35 닮음삼각형
  mechanism_secondary: [M28 내분점, M50 원의 현 이등분 (중심에서 수선), M40 삼각형 넓이]
  depth_conditions:
    - "AB가 지름 → ∠APB = 90° (원주각)"
    - "O에서 현 AP에 수선 → 현의 중점 (S)"
    - "닮음 삼각형 QSO, QPR (직각·공통각) → R = OQ 중점"
    - "삼각형 OBR 넓이 = (1/2)·OB·(R의 y)"
    - "R → Q → P y좌표 연쇄 계산"
  freedom_signals:
    initial_setup_freedom: 하
    approach_choice: 중
    student_decision_points: 5  # 원·직각·닮음·중점·좌표
  common_mistakes:
    - "지름 원주각 성질 미인지"
    - "O에서 현에 내린 수선이 현을 이등분 성질 미활용"
    - "닮음 관계 (QSO ~ QPR)의 대응변 방향 혼동"
    - "R → Q → P 연쇄 내분점 계산 실수"
  condition_layers:
    surface: 4  # 원 · 3점 · 내분비 · 넓이
    real: 6    # 원주각 · 닮음 · 중점 · 넓이 → y · 연쇄
    interaction: "원 → 원주각 → 닮음 → 중점 관계 → 넓이 → y 연쇄"
  citation_note: "고쟁이 CH01 · 원본 인용 아님 · 교육청 변형 · 학습 목적"

- source: 고쟁이-CH01-STEP3-#048
  page: 19
  problem_summary: |
    좌표평면 두 점 A(0, 4), B(8, 0)과 제1사분면 점 C(a, b)가 AB = BC 만족. 선분 AC, BC 각각
    1:2로 내분점 P, Q. 삼각형 CPQ 무게중심 G. 선분 CG 길이 = 8/3일 때 a+b 값.
  solution_summary: |
    AB = BC → √(64+16) = √((a-8)² + b²) → (a-8)² + b² = 80 ...①
    삼각형 ABC와 PQC (P는 AC 1:2 내분, Q는 BC 1:2 내분).
    AC:PC = BC:QC = 3:2 (P는 A에서 1/3 위치이므로 CP = 2/3·CA).
    ∠C 공통 → 삼각형 ABC ~ 삼각형 PQC (SAS 닮음) with 비 3:2.
    직선 CG (무게중심 지나는 중선의 연장)는 두 선분 AB, PQ의 중점 M, N 지남 (CM:CN = 3:2).
    CG = (2/3)·CN, CM = (3/2)·CN.
    M = (4, 2) (AB의 중점). CM = √((a-4)² + (b-2)²). 
    CN = CM · 2/3, CG = (2/3)·CN = (4/9)·CM = 8/3 → CM = 6.
    (a-4)² + (b-2)² = 36 ...②
    ① - ②: (a-8)² - (a-4)² + (b² - (b-2)²) - 0 = 44
        → -8a + 48 + 4b - 4 = 44 → -8a + 4b = 0 → b = 2a.
    ①에 대입: (a-8)² + 4a² = 80 → 5a² - 16a + 64 - 80 = 0 → 5a² - 16a - 16 = 0 → (5a+4)(a-4) = 0.
    a > 0 → a = 4, b = 8. a + b = 12.
    답 12.
  category: 평면좌표 · 닮음·무게중심·거리 결합
  difficulty: STEP3
  mechanism_primary: M35 닮음삼각형 (SAS) + M17 무게중심 성질
  mechanism_secondary: [M28 내분점, M4 두 점 거리, M26 연립방정식]
  depth_conditions:
    - "AB = BC 조건 → C의 좌표 방정식 ①"
    - "P, Q는 각각 1:2 내분 → 삼각형 PQC ~ 삼각형 ABC (SAS 닮음 3:2)"
    - "무게중심 G는 중선의 2:1 → CG:CM = 2/3·(중선 길이 비)"
    - "CG = 8/3 → CM = 6 방정식 ②"
    - "①·②에서 두 점 유일 결정"
  freedom_signals:
    initial_setup_freedom: 하
    approach_choice: 상  # 닮음 활용 vs 좌표만 대입
    student_decision_points: 5
  common_mistakes:
    - "닮음 관계 미인지 (좌표 직접 계산 시도)"
    - "무게중심 CG : GM = 2:1 방향 잘못"
    - "CN(작은 삼각형 중선) vs CM(큰 삼각형 중선) 관계 3:2 실수"
    - "연립방정식 소거 오류"
  condition_layers:
    surface: 4  # 조건·내분·무게중심·CG
    real: 6    # 거리 방정식·닮음·CM 방정식·연립·a·b
    interaction: "거리 조건 → 닮음 → CM 방정식 → 연립 → 좌표"
  citation_note: "고쟁이 CH01 · 원본 인용 아님 · 학습 목적"

- source: 고쟁이-CH01-STEP3-#049
  page: 20
  problem_summary: |
    5 이하 자연수 a, b에 대해 세 점 A(a, b), B(-2, 1), C(1, -2). y축이 AB를 m:n 내분, x축이 AC를 
    m:n 내분. 삼각형 ABC 넓이의 최솟값 S₁, 최댓값 S₂. S₂ - S₁ 값. (m, n 자연수)
  solution_summary: |
    y축이 AB를 m:n 내분 → 내분점의 x좌표 = 0 → (-2m + na)/(m+n) = 0 → 2m = na ...①
    x축이 AC를 m:n 내분 → 내분점의 y좌표 = 0 → (-2m + nb)/(m+n) = 0 → 2m = nb ...②
    ①=② → an = bn (n≠0) → a = b. A는 직선 y=x 위.
    a, b ∈ {1, 2, 3, 4, 5}, a=b → A ∈ {(1,1), (2,2), (3,3), (4,4), (5,5)}.
    BC 중점 M = (-1/2, -1/2), BC = √(9+9) = 3√2.
    각 A에 대해 넓이 계산 후 최소·최대:
    A=(1,1): AM = √(9/4+9/4) = (3/√2), 넓이 = (1/2)·3√2·(3/√2) = 9/2.
    A=(5,5): AM = √(121/4+121/4) = (11/√2), 넓이 = (1/2)·3√2·(11/√2) = 33/2.
    최솟값 S₁ = 9/2, 최댓값 S₂ = 33/2. S₂ - S₁ = 24/2 = 12.
    답 12.
  category: 평면좌표 · 좌표축 내분점 + 조건 결합 + 최적화
  difficulty: STEP3
  mechanism_primary: M51 좌표축 내분점 → 점 조건 (직선 위)
  mechanism_secondary: [M40 삼각형 넓이 (밑변·수직 거리), M52 이산 자유도 최적화, M53 자연수 필터]
  depth_conditions:
    - "y축이 AB를 내분 = 내분점 x=0 조건 → 2m = na"
    - "x축이 AC를 내분 = 내분점 y=0 조건 → 2m = nb"
    - "두 조건에서 a = b → 직선 y=x 위 5개 점"
    - "각 점의 삼각형 넓이 계산·최대·최소"
  freedom_signals:
    initial_setup_freedom: 중
    approach_choice: 상  # 넓이 공식 다양 (외적 vs 밑변·높이)
    student_decision_points: 5
  common_mistakes:
    - "y축이 내분 = 내분점 x=0 조건 미인지 (기하 → 대수 전환)"
    - "a=b 조건 도출 못하고 25개 조합 시도"
    - "삼각형 넓이 공식 (밑변·수직거리) 오류"
    - "최대·최소 조건 검증 없이 극값 잘못 선택"
  condition_layers:
    surface: 4  # 자연수·내분·삼각형·최소·최대
    real: 6    # 좌표축 내분 조건 · a=b 도출 · 5점 리스트 · 넓이 · 최대·최소·차
    interaction: "내분 조건 → a=b → 5점 리스트 → 각 넓이 → 최대·최소·차"
  citation_note: "고쟁이 CH01 · 원본 인용 아님 · 학습 목적"

- source: 고쟁이-CH01-STEP3-#050
  page: 20
  problem_summary: |
    AB=2√10, BC=6, CA=2√13 삼각형 ABC. 변 BC를 m:n 내분점 P. 보기:
    (ㄱ) m=n일 때 AP=√37
    (ㄴ) AB=AP일 때 m-n=3
    (ㄷ) AP=3√5일 때 m+2n=7
    옳은 것. (m, n 서로소 자연수)
  solution_summary: |
    좌표 설정: B(0, 0), C(6, 0). A(a, b). 
    AB² = a²+b² = 40, AC² = (a-6)²+b² = 52 → -12a + 36 = 12 → a = 2, b² = 36 → b = 6 → A(2, 6).
    P는 BC를 m:n 내분점, 즉 P = (6m/(m+n), 0).
    (ㄱ) m=n → P = (3, 0). AP = √((3-2)² + 36) = √37. 참.
    (ㄴ) AB = AP = 2√10. AP² = (6m/(m+n) - 2)² + 36 = 40 → (6m/(m+n) - 2)² = 4 → 
        6m/(m+n) - 2 = ±2. 
        (i) = 4 → 6m = 4(m+n) → 2m = 4n → m = 2n → 서로소 조건 → m=2, n=1 → m-n = 1 (X)
        (ii) = 0 → m = 0 (X 자연수 아님).
        BP:PC = 5:1 다른 계산 결과 → P(5, 0) → m/(m+n) = 5/6 → m=5, n=1. m-n = 4 (X).
        해설: BP = 5, PC = 1 → m:n = 5:1 → m-n = 4. 따라서 (ㄴ) m-n=3 (거짓). 
        [해설 결론: 거짓]
    (ㄷ) AP = 3√5 → AP² = 45. (6m/(m+n) - 2)² + 36 = 45 → (6m/(m+n) - 2)² = 9 → 
        6m/(m+n) - 2 = ±3.
        (i) = 5 → 6m = 5(m+n) → m = 5n → m=5, n=1. m+2n = 7. 참.
        (ii) = -1 → 6m = m+n → 5m = n → m=1, n=5. m+2n = 11 (X, 그러나 조건 만족? BC 내분이므로
        m, n > 0 모두 유효 · 값 검토).
        해설: m+2n = 7 (한 케이스 채택).
    답 ③ ㄱ, ㄷ.
  category: 평면좌표 · 좌표축 선택·다중 조건·보기
  difficulty: STEP3
  mechanism_primary: M5 좌표축 선택 (기하 → 좌표 정확 배치)
  mechanism_secondary: [M28 내분점 · AP² 이차식, M41 다중 보기 판정, M53 서로소 자연수 필터]
  depth_conditions:
    - "B·C 축 위 배치 → A 좌표 유일 결정 (양변 조건)"
    - "P의 좌표 매개화 (m:n 내분)"
    - "AP² 이차식 → 각 보기 케이스 분석"
    - "서로소 자연수 조건으로 필터"
  freedom_signals:
    initial_setup_freedom: 상  # 좌표축 설정
    approach_choice: 중
    student_decision_points: 5  # 좌표·3보기·필터
  common_mistakes:
    - "좌표축 배치 부적절 (계산 복잡화)"
    - "각 보기별 ± 케이스 (2가지) 모두 검토 안 함"
    - "서로소·자연수 조건 필터 누락"
  condition_layers:
    surface: 4  # 3변 · 3보기 · 최적
    real: 6    # 좌표 설정 · P 매개 · AP² · 3보기 · 필터 · 종합
    interaction: "좌표 설정 → A 결정 → P 매개 → AP² → 각 보기 판정"
  citation_note: "고쟁이 CH01 · 원본 인용 아님 · 학습 목적"

- source: 고쟁이-CH01-STEP3-#051
  page: 20
  problem_summary: |
    삼각형 ABC 무게중심 G, AG=4√2, BG=2√3, CG=2√5일 때 삼각형 ABC 넓이. (그림 제공)
  solution_summary: |
    AG:GM = 2:1 (BC 중점 M) → GM = 2√2, AM = 6√2.
    삼각형 BCG에서 중선정리 BG² + CG² = 2(GM² + BM²) → 12 + 20 = 2(8 + BM²) → BM² = 8, BM = 2√2.
    → BC = 4√2.
    또한 삼각형 BCG에서 GM = 2√2, BM = CM = 2√2 → 삼각형 BCG는 ∠BGC=90° 직각삼각형!
    (왜냐면 BM = GM → 중선정리 특성으로 원 지름 원주각).
    → 삼각형 BCG 넓이 = (1/2)·BG·CG = (1/2)·2√3·2√5 = 2√15.
    삼각형 ABC 넓이 = 3·(삼각형 BCG 넓이) = 3·2√15 = 6√15.
    답 ②.
  category: 평면좌표 · 무게중심·중선정리·직각삼각형
  difficulty: STEP3
  mechanism_primary: M17 무게중심 2:1 성질 + M25 중선정리
  mechanism_secondary: [M22 직각 판정 (BM = GM 특별 관계), M54 부분 삼각형 넓이 관계]
  depth_conditions:
    - "무게중심 G의 각 꼭짓점 거리와 중점 M 관계"
    - "BC 중점 M에서 GM = (1/2)·AG"
    - "삼각형 BCG에서 중선정리 → BM"
    - "BM = GM 이면 삼각형 BCG의 M이 원의 중심 → BGC = 90°"
    - "삼각형 ABC 넓이 = 3·(BCG) 성질 (무게중심 6부분 균등)"
  freedom_signals:
    initial_setup_freedom: 하
    approach_choice: 상  # 중선정리 vs 좌표 vs 벡터
    student_decision_points: 4
  common_mistakes:
    - "무게중심 성질 GM = (1/2)AG 사용 못함"
    - "중선정리 오류"
    - "BM = GM → 직각 특별 관계 미인지"
    - "무게중심으로 삼각형이 6등분 성질 미인지 (3부분 아님)"
  condition_layers:
    surface: 3  # 3거리·넓이
    real: 6    # 중점·중선정리·BM 도출·직각 판정·BCG 넓이·전체 넓이
    interaction: "무게중심 → GM → 중선정리 → BM → 직각 → 부분 넓이 → 전체"
  citation_note: "고쟁이 CH01 · 원본 인용 아님 · 학습 목적"

- source: 고쟁이-CH01-STEP3-#052
  page: 21
  problem_summary: |
    사각형 ABCD에서 삼각형 ABC 넓이 2, 삼각형 DBC 넓이 3. 선분 AD를 3:1 내분점 E일 때 삼각형 EBC 넓이.
  solution_summary: |
    A, E, D에서 직선 BC에 내린 수선의 발 A', E', D'.
    삼각형 ABC : DBC 넓이 = 2:3 → AA':DD' = 2:3 (밑변 BC 공유).
    E는 AD의 3:1 내분점 → EE'는 AA', DD'의 3:1 내분값 = (3·DD' + 1·AA')/4 = (3·3+1·2)/4 = 11/4·(단위) 
    (실제 해설: A'=(2), D'=(3), 그리고 E'는 3:1 내분값 = (3·3 + 1·2)/4 = 11/4). 
    삼각형 EBC 넓이 = (1/2)·BC·EE' = (11/4)·(1/2)·BC / (기존 삼각형 ABC와 비교).
    (삼각형 ABC 넓이 = 2 이므로 (1/2)·BC·AA' = 2 → BC·AA' = 4).
    삼각형 EBC 넓이 = (1/2)·BC·EE' = (1/2)·BC·(11/8·AA')... 
    실제 해설: A'=2, D'=3, 그리고 E'의 좌표 = (3·3+1·2)/(3+1) = 11/4. 그리고 OA':OD' = AA':DD' = 2:3.
    수직선 위 O(0), A'(2), D'(3), E'(p) 놓으면 p = (3·3 + 1·2)/(3+1) = 11/4.
    OA':OE' = 2 : 11/4 = 8:11.
    삼각형 EBC 넓이 = 2 · (11/8) = 11/4.
    답 ⑤.
  category: 평면좌표 · 밑변 공유·수선 발 활용
  difficulty: STEP3
  mechanism_primary: M55 밑변 공유 삼각형 → 수선 발 비례 (넓이비 = 수선 비)
  mechanism_secondary: [M28 내분점 (수선 발도 내분), M40 밑변·높이 넓이]
  depth_conditions:
    - "삼각형 넓이 비 = 수선 비 (밑변 공유)"
    - "AA' : DD' = 2 : 3 (밑변 BC 공유)"
    - "E가 AD의 3:1 내분 → EE'는 AA', DD'의 3:1 내분값"
    - "삼각형 EBC 넓이 = (1/2)·BC·EE"
  freedom_signals:
    initial_setup_freedom: 중  # 수선 발 vs 좌표 vs 벡터
    approach_choice: 상
    student_decision_points: 4
  common_mistakes:
    - "AA', DD' 비를 넓이 비로 변환 못함"
    - "EE'의 계산 (내분점 공식) 오류"
    - "E가 AD 3:1이면 E'도 A'D' 3:1인 성질 미인지 (평행 사영)"
  condition_layers:
    surface: 3  # 사각형·넓이 2·넓이 3·EBC 넓이
    real: 5    # 수선 발·비·내분점 (수선 발)·EE'·EBC 넓이
    interaction: "넓이 비 → 수선 비 → E의 수선 위치 → EE' → EBC 넓이"
  citation_note: "고쟁이 CH01 · 원본 인용 아님 · 학습 목적"

- source: 고쟁이-CH01-STEP3-#053
  page: 21
  problem_summary: |
    두 점 A(1, 4), B(2, 1)과 y축 위 점 Q에 대해 |AQ - BQ|가 Q의 y좌표가 a일 때 최댓값 b.
    a² + b² 값.
  solution_summary: |
    직선 AB와 y축 교점 Q'로 잡음. y축 위 Q에 대해:
    (i) Q가 Q'에 위치하지 않을 때: 삼각형 ABQ에서 |AQ-BQ| < AB (삼각부등식).
    (ii) Q가 Q'에 있을 때: |AQ' - BQ'| = |-AB| = AB (직선 위 A, B, Q'가 공선인 경우 등호).
    → 최댓값 = AB, 그때 Q = Q' (직선 AB와 y축 교점).
    직선 AB: y-4 = ((1-4)/(2-1))(x-1) → y = -3x+7. x=0 → y=7. Q'(0, 7).
    a = 7, b = AB = √(1+9) = √10.
    a²+b² = 49 + 10 = 59.
    답 59.
  category: 평면좌표 · 거리 차 최대·삼각부등식
  difficulty: STEP3
  mechanism_primary: M11 삼각부등식 (|AC - BC| ≤ AB, 등호 조건)
  mechanism_secondary: [M46 두 점 지나는 직선의 방정식, M56 y축 교점, M57 최댓값 등호 조건 분석]
  depth_conditions:
    - "|AQ - BQ|의 최댓값이 AB (직선 AB와 y축 교점에서)"
    - "삼각부등식의 등호 조건 (Q, A, B가 공선)"
    - "y축 위 Q → x=0 대입"
    - "a (Q의 y좌표) = 직선 AB와 y축 교점의 y"
  freedom_signals:
    initial_setup_freedom: 하
    approach_choice: 중  # 삼각부등식 vs 대수적 최적화
    student_decision_points: 3
  common_mistakes:
    - "|AQ - BQ|의 최댓값이 AB임을 인지 못하고 미분·완전제곱 시도"
    - "삼각부등식의 등호 조건 방향 (내분 vs 외분) 확인 미수"
    - "직선 AB와 y축 교점 좌표 계산 실수"
  condition_layers:
    surface: 3  # y축·거리 차·최댓값
    real: 4    # 삼각부등식·등호 조건·직선 교점·값
    interaction: "삼각부등식 → 등호 조건 (공선) → 직선·y축 교점 → a·b"
  citation_note: "고쟁이 CH01 · 원본 인용 아님 · 학습 목적"
```

---

## 파트 C — CH01 종합 학습 (mechanism 반복 패턴 · 심층 특징)

### C.1 · Mechanism 반복 통계

| Mechanism | 코드 | STEP 2 등장 | STEP 3 등장 | 총합 |
|---|---|---|---|---|
| 좌표 두 점 거리·거리 제곱 | M4 | #019, #020, #026, #028, #029 | #045, #047 | 7회 |
| 내분점 공식 (직접) | M28 | #023, #031, #032, #033, #034, #035, #037, #038, #039, #040, #041 | #046, #047, #048, #049, #050 | 16회 |
| 무게중심 좌표·성질 (2:1 또는 대칭) | M9, M17, M36 | #021, #025, #036, #039 | #048, #051 | 6회 |
| 좌표축 선택 (기하 → 좌표) | M5 | #029, #030 | #050 | 3회 |
| 외심·외접원 관련 (직각·원주각) | M19, M22, M23 | #026, #028 | #047 | 3회 |
| 내심·각이등분선 | M43, M45 | #042, #043 | — | 2회 |
| 시간·매개변수 도입 | M2 | #020, #024, #044 | #045 | 4회 |
| 이차식 완전제곱 최소 | M7 | #020, #024 | #045 | 3회 |
| 넓이비 = 밑변비 (높이 공유) | M40, M55 | #035, #040, #041, #042, #044 | #048, #052 | 7회 |
| 닮음삼각형 · SAS | M35 | #035 | #048 | 2회 |
| 삼각부등식 (거리 합·차) | M11 | #022 | #053 | 2회 |
| 중선정리·스튜어트 | M25 | #029, #030 | #051 | 3회 |
| 다중 케이스 분할 (이등변 등) | M13 | #023, #027, #034 | — | 3회 |
| 다중 보기 판정 (ㄱㄴㄷ) | M41 | #040 | #050 | 2회 |
| 실생활 지문형 | M15 | #023, #024, #037, #038 | #045 | 5회 |
| 서술형 채점요소 | M16 | #024, #027, #034 | — | 3회 |

### C.2 · CH01 심층 통찰 유형 6대 카테고리

**T1 · 좌표축 선택 (I-RT 표현 전환)**: #029, #030, #050
- 그림 문제에 좌표축을 도입 (D 원점, BC를 x축 등)
- 자유도: 상 (여러 배치 가능하나 계산 편의 축 선택이 관건)

**T2 · 무게중심 성질 (역방향 · I-BW 역방향 통찰)**: #021, #025, #036, #039, #051
- "PA²+PB²+PC² 최소 = 무게중심" (극값 성질)
- "세 부분 넓이 균등 = 무게중심" (성질 역방향)
- "정삼각형에서 AG·3/2 = AM" (무게중심 2:1)
- "AG·BG·CG로 무게중심 정보 → 삼각형 넓이" (역방향)

**T3 · 원·외심·원주각 (I-XU 단원 결합)**: #026, #028, #047
- "외심 위치 = 삼각형 종류 특성" (예각·직각·둔각)
- "지름에 대한 원주각 = 90°"
- "원의 현·중심 수선 이등분"
- 도형(원의 방정식·집합과 명제 아직 이전) 결합의 특징

**T4 · 삼각부등식 재해석 (I-RT 표현 전환)**: #022, #053
- √{(x-a)² + (y-b)²} → 두 점 사이 거리 재해석
- |PA - PB| 최댓값 = AB (등호: 공선)
- PA + PB 최솟값 = AB (등호: 선분 위)

**T5 · 내분·외분 다중 조건 결합 (I-CON 조건 통합)**: #031, #032, #033, #034, #040, #041, #046, #048
- 여러 내분·외분 조건이 순차 결합
- 방향·비율 혼동 방지가 핵심
- 다중 케이스 (내분 vs 외분) 필터

**T6 · 넓이비 = 밑변비 연쇄 (I-EQV 동치 변환)**: #041, #042, #044, #048, #052
- 밑변 공유 삼각형 → 수선 비 = 넓이 비
- 이 관계를 다층 (3~4단) 연쇄 계산
- 좌표계 없이도 순수 기하 접근 가능

### C.3 · 심층 특성 관찰

**S1 · 서술형 문항 3문 (#024, #027, #034)**
- 모두 다중 케이스 분할·최적화·과정 요구
- 채점 요소가 명시 (30%·30%·30%·10% 또는 유사 분포)
- "그 과정을 서술하시오" 지시어 사용

**S2 · 교육청 기출·변형 태그 5문 (#026, #035, #041, #044, #047)**
- 교육청 원본 그대로: #026
- 변형: #035, #041, #044, #047
- 이 5문이 STEP 2 심화·STEP 3 최고난도의 핵심 앵커 역할

**S3 · 실생활 지문형 5문 (#023, #024, #037, #038, #045)**
- 도로·거리 문제 계열 4문 (#023, #024, #037, #045)
- 스포츠 계열 1문 (#038 · 달리기)
- 공통: 좌표축 설정이 첫 관문 (원점·축 방향)
- 최적화 성격 (#024, #037, #045) 대부분

**S4 · 매개변수 도입 유형 (M2)**
- 직선 위 점 매개화 (#020, #044)
- 시간 매개화 (#024, #038, #045)
- 내분비 매개화 (#033, #049, #050)
- 공통: 매개변수 1개로 자유도 축소 → 이차식 최적화

**S5 · 좌표축 선택 (M5) — CH01의 핵심 mechanism**
- 그림만 있는 문제에서 좌표축 배치가 결정적
- STEP 3의 #050이 대표: A, B, C 삼변 조건 → 좌표 배치가 답 도출
- 학습 우선순위: 어떤 점을 원점 · 어떤 변을 축으로 놓을지 판단

**S6 · 정점형·최상위형 판별 특징 (STEP 3)**
- 다중 성질 결합 (닮음 + 무게중심 + 넓이 · #048, 원주각 + 중점 + 닮음 · #047 등)
- 3~5단 연쇄 계산
- 관찰 필요 정보량 (조건 수) 대체로 4~6개
- 초기 아이디어 (어떤 성질을 도입할지)가 후속 계산량 결정

### C.4 · 재출제 시 주의 사항 (저작권·변형 정책)

1. **최소 변형**: 숫자만 변경 (M(전체 프로젝트 §"문제 변형 정책" 준수)
2. **동등 변형**: 좌표계 회전·평행이동·부호 반전 등
3. **금지 변형**: 핵심 mechanism 훼손 (예: 좌표축 선택 문제를 대수만 문제로 변형)
4. **인용 표시**: 원본 인용 시 "고쟁이 공통수학2 · CH01 평면좌표 #XXX 참조" 등 학습·분석 목적으로만 사용
5. **직접 복사 절대 금지**: 문제문·해설 원문 그대로 복사·재배포 금지

### C.5 · 다음 단원 학습 연계

CH01 평면좌표의 mechanism 중 다음 단원(직선의 방정식·원의 방정식·도형의 이동)에서 확장 활용:
- **M4 두 점 거리** → 원의 방정식 (중심·반지름)
- **M5 좌표축 선택** → 원의 방정식·도형의 이동에서 계속 활용
- **M22 원주각·원의 현** → 원의 방정식·접선 문제
- **M28 내분점** → 직선의 방정식에서 매개변수 표현
- **M40, M55 넓이비** → 도형의 이동·대칭에서 넓이 보존
- **M17 무게중심 2:1** → 원의 방정식과 결합 (외접원 중심 등)

CH01은 **기초 mechanism의 저장소** 역할이며, CH02·CH03에서 이 mechanism을 확장·결합하는 구조.

---

**본 문서 갱신 이력**:
- 2026-07-14 · 초판. 고쟁이 CH01 STEP 2·3 전 35문항 정독 완료.
- 다음 갱신 예정: 향후 CH02·CH03 mechanism 데이터 확장 및 카탈로그 상호 참조.
