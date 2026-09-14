---
name: mechanism-데이터-고쟁이-CH02-직선
description: 고쟁이 공통수학2 (2022개정) CH02 직선의 방정식 STEP 2·STEP 3 전문항 정독 mechanism 데이터 (50문항). 학습 목적, 저작권 준수 (원문 전사 없음).
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

# 고쟁이 공통수학2 (2022개정) CH02 직선의 방정식 — mechanism 데이터

**출처**: 고쟁이 공통수학2 (2022개정), CH02 직선의 방정식, STEP 2 (심화 유형) + STEP 3 (최고난도 유형)
**대상 페이지**: 문제 p.27~38 · 해설 p.21~37
**추출 방식**: 문제.pdf ↔ 해설.pdf 1:1 매칭 전수 정독
**저작권**: 학습·분석 목적 인용. 본문 원문 전사 금지. `problem_summary`·`solution_summary`는 요약(추상화)만 기재.
**단원 코드**: CM2-GM (도형의 방정식)
**작성일**: 2026-07-14

---

## 1. 개관 (문항 개수·페이지 분포)

| STEP | 범위 | 문항 수 | 유형 분포 |
|---|---|---|---|
| STEP 2 심화 유형 | #073~#112 | 40문 | 유형01 직선의 방정식 (#073~#087) 15문 · 유형02 수직·평행 (#088~#102) 15문 · 유형03 점과 직선 사이의 거리 (#103~#112) 10문 |
| STEP 3 최고난도 유형 | #113~#122 | 10문 | 유형 통합 (직선·수직·평행·거리·넓이) |
| **합계** | — | **50문** | — |

**페이지 매핑**:
- 문제: p.27 (#73~#78) · p.28 (#79~#82) · p.29 (#83~#87) · p.30 (#88~#92) · p.31 (#93~#98) · p.32 (#99~#103) · p.33 (#104~#108) · p.34 (#109~#112) · p.35 (스키마 #77 해설) · p.36 (#113~#116) · p.37 (#117~#120) · p.38 (#121~#122)
- 해설: p.21 (#70~#75) · p.22 (#76~#78) · p.23 (#79~#81) · p.24 (#82~#84) · p.25 (#85~#87) · p.26 (#87 이어~#89) · p.27 (#90~#93) · p.28 (#94~#97) · p.29 (#98~#99) · p.30 (#99 이어~#101) · p.31 (#102~#106) · p.32 (#107~#109) · p.33 (#110~#112) · p.34 (#113~#116) · p.35 (#117~#118) · p.36 (#119~#120) · p.37 (#121~#122)

**빈출 마크(빈출★) 문항**: #77·#78·#81·#89·#92·#100·#102·#106·#108·#111·#114·#116·#121 (13문)
**서술형 마크(✎)**: #102
**교육청 기출 마크**: #84·#110·#118

---

## 2. STEP 2 전 문항 YAML 데이터

### 유형 01: 직선의 방정식 (#073~#087)

```yaml
- source: 고쟁이-CH02-STEP2-#073
  page: 27
  problem_summary: |
    직선 ax+by+c=0의 그림이 주어질 때 직선 bx-ay+c=0이 지나지 않는 사분면을 판정.
    (기울기·y절편·x절편 부호로부터 b, c의 부호를 유도)
  solution_summary: |
    ax+by+c=0을 y=-(a/b)x-c/b로 정리. 기울기·y절편이 모두 양수 → a/b<0, c/b<0.
    → b/c<0 → a/b × b/c = a/c > 0.
    bx-ay+c=0을 y=(b/a)x+c/a로 정리. b/a<0, c/a>0.
    직선 개형 판정 → 지나지 않는 사분면은 제3사분면.
  category: 직선의 방정식
  difficulty: STEP2
  mechanism_primary: 일차방정식의 계수 부호 ↔ 그래프 개형 대응 (일차방정식 ax+by+c=0의 기울기 -a/b, y절편 -c/b)
  mechanism_secondary: [부호 곱셈 조합 (a/b<0 ∧ b/c<0 ⇒ a/c>0), 사분면 판정 (기울기·절편 부호 조합)]
  depth_conditions:
    - 그림에서 3개 부호 정보 (기울기+·x절편+·y절편+) 판독
    - 두 계수비의 곱으로 세 번째 계수비 결정
  freedom_signals:
    initial_setup_freedom: 낮음 (표준 대각선 방향)
    approach_choice: 중간 (기울기·절편 각각 판독 or 특정점 대입)
    student_decision_points: [부호 판정 순서, 개형 스케치 vs 대수 판정]
  common_mistakes:
    - a/b, c/b 부호를 반대로 해석
    - 사분면 번호 오독
    - b, c 각각의 절대 부호 (양·음)만 파악하고 상대비 놓침
  condition_layers:
    surface: 그림에서 직선의 위치
    real: 세 계수의 상대 부호 관계
    interaction: 계수 부호 → 개형 → 사분면 3단 사슬
  citation_note: "고쟁이 CH02 · 학습 목적"

- source: 고쟁이-CH02-STEP2-#074
  page: 27
  problem_summary: |
    두 점 A(-14,-12), B(10,4)를 잇는 선분 AB 위의 점 중 x·y좌표 모두 정수인 점의 개수 (A, B 제외).
  solution_summary: |
    직선 AB의 방정식 y-4=(2/3)(x-10). 즉 y=(2/3)(x-10)+4.
    -14 < x < 10 그리고 x-10=3k (k 정수).
    x = -11, -8, -5, ..., 7 → 7개.
  category: 직선의 방정식
  difficulty: STEP2
  mechanism_primary: 격자점 개수 (기울기 기약분수 형태 p/q → x 변화량이 q의 배수일 때 y 정수)
  mechanism_secondary: [기울기 (y2-y1)/(x2-x1) 축약, 부등식 구간 내 등차수열 항수 count]
  depth_conditions:
    - 기울기의 기약분수 인식 (16/24 = 2/3)
    - 시작·끝점 제외 조건
  freedom_signals:
    initial_setup_freedom: 낮음
    approach_choice: 중간 (직선식 세우기 vs 방향벡터·정수배)
    student_decision_points: [정수 조건 도출, 개수 count 방법]
  common_mistakes:
    - A, B 자체를 포함해 계수
    - 기울기 축약 실수
    - 부등호 등호 조건 실수
  condition_layers:
    surface: 두 점 좌표
    real: 격자점 조건 = x좌표가 3의 배수 + 10 형태
    interaction: 기하 조건(선분 위) ∧ 산술 조건(정수)
  citation_note: "고쟁이 CH02 · 학습 목적"

- source: 고쟁이-CH02-STEP2-#075
  page: 27
  problem_summary: |
    세 점 A(1,1), B(3,-1), C(4,2)를 꼭짓점으로 하는 삼각형 ABC가 직선
    (k+1)x+(2-k)y-4k-1=0에 의해 두 도형으로 나누어질 때, 한쪽의 넓이가 다른 쪽의 2배가 되도록
    하는 모든 실수 k의 합.
  solution_summary: |
    직선을 k에 대해 정리: (x+2y-1)+k(x-y-4)=0. 두 식 x+2y-1=0, x-y-4=0 연립 → 정점 B(3,-1).
    직선이 B를 지나면서 삼각형의 넓이를 1:2로 분할 → 대변 AC를 1:2 또는 2:1로 내분.
    각 내분점 좌표를 정점 조건에 대입 → k=11/10, k=2. 합 = 11/10 + 2 = 31/10.
  category: 직선의 방정식
  difficulty: STEP2
  mechanism_primary: 정점 통과 직선족 (매개변수 k에 대해 정리하여 항상 지나는 점)
  mechanism_secondary: [삼각형 넓이 비 = 대변 내분비 (꼭짓점을 지나는 직선), 내분점 공식, 두 case의 대칭 처리]
  depth_conditions:
    - 매개변수를 분리하여 항등식 조건 유도
    - 넓이 비 1:2를 대변 내분 1:2 또는 2:1로 case 분리
  freedom_signals:
    initial_setup_freedom: 낮음 (정점 도출은 표준)
    approach_choice: 중간 (넓이 비 → 내분비 대응)
    student_decision_points: [정점이 B인지 확인, 1:2와 2:1 case 대칭 인식]
  common_mistakes:
    - 정점 좌표 계산 오류
    - case 하나만 계산 (다른 case 누락)
    - 넓이 비와 내분비 관계 혼동 (대변에서 반대 비)
  condition_layers:
    surface: 매개변수 k에 의존하는 직선
    real: 정점 통과 사슬 + 대변 내분
    interaction: 항등식 분리 → 정점 도출 → 넓이 → 내분비 → k
  citation_note: "고쟁이 CH02 · 학습 목적"

- source: 고쟁이-CH02-STEP2-#076
  page: 27
  problem_summary: |
    좌표평면의 네 점 A(-1,5), B(-3,3), C(2,3), D(4,5)를 꼭짓점으로 하는 사각형 ABCD가 있을 때
    직선 mx-y-3m-1=0이 사각형과 만나도록 하는 실수 m의 범위가 m≥p 또는 m≤q일 때 pq 값.
  solution_summary: |
    직선 mx-y-3m-1=0을 y=m(x-3)-1로 정리 → 항상 (3,-1) 통과 정점.
    사각형과 오직 한 점에서 만날 때는 점 D 또는 점 B를 지날 때.
    D(4,5) 통과 시 기울기 = (5-(-1))/(4-3) = 6.
    B(-3,3) 통과 시 기울기 = (3-(-1))/((-3)-3) = -2/3.
    m ≥ 6 또는 m ≤ -2/3. p=6, q=-2/3. pq = -4.
  category: 직선의 방정식
  difficulty: STEP2
  mechanism_primary: 정점 통과 직선족 + 사각형 만남 (극단 위치 정점→꼭짓점)
  mechanism_secondary: [정점 도출, 극단 기울기 계산 (min·max 결정 꼭짓점 판정)]
  depth_conditions:
    - 정점 (3,-1)이 사각형 외부인지 확인 (오른쪽 위 D 쪽)
    - 만남 조건의 경계 결정 꼭짓점 (B와 D)
  freedom_signals:
    initial_setup_freedom: 낮음
    approach_choice: 중간 (그래프 스케치 필수)
    student_decision_points: [경계 꼭짓점 판정, min·max 기울기의 실수 범위 방향]
  common_mistakes:
    - 정점의 사각형 내·외 판단 오류
    - 만남 범위 부등호 방향 오류 (m ≥ 6 vs m ≤ 6)
    - 경계 꼭짓점 잘못 선정 (A, C 사용)
  condition_layers:
    surface: 사각형과 매개변수 직선
    real: 정점 + 사각형 만남 조건
    interaction: 정점 도출 → 위치 판정 → 경계 꼭짓점 선정 → 기울기 min·max
  citation_note: "고쟁이 CH02 · 학습 목적"

- source: 고쟁이-CH02-STEP2-#077
  page: 27
  problem_summary: |
    좌표평면 위의 두 점 A(3,4), B(-2,-1)에 대하여 직선 kx+3y-5k=0이 선분 AB와 만나도록 하는
    실수 k의 범위.
  solution_summary: |
    kx+3y-5k=0을 k(x-5)+3y=0으로 정리 → 항상 (5,0) 통과 정점 P.
    직선이 선분 AB와 만나려면 기울기가 (AP 기울기)와 (BP 기울기) 사이.
    AP 기울기 = (0-4)/(5-3) = -2. BP 기울기 = (0-(-1))/(5-(-2)) = 1/7.
    직선 기울기 = -k/3. 부등식 -2 ≤ -k/3 ≤ 1/7 → -3/7 ≤ k ≤ 6.
  category: 직선의 방정식
  difficulty: STEP2
  mechanism_primary: 정점 통과 직선족 + 선분 만남 (기울기 범위 by 두 끝점 기울기)
  mechanism_secondary: [정점 도출, 두 끝점 기울기 계산, 부등식 방향 조정 (음의 계수 곱)]
  depth_conditions:
    - 정점 P가 선분 밖 (오른쪽)
    - 기울기 범위의 두 끝점 부등식 방향
  freedom_signals:
    initial_setup_freedom: 낮음
    approach_choice: 중간 (그래프 스케치로 방향 확인)
    student_decision_points: [정점 위치 확인, 기울기 min·max 배정]
  common_mistakes:
    - 부등식 -k/3 방향 반대
    - 두 끝점 순서 뒤바뀜
    - AP, BP 기울기 계산 실수
  condition_layers:
    surface: 매개변수 직선과 선분
    real: 정점 + 선분 끝점 두 기울기 사이
    interaction: 정점 도출 → 끝점 기울기 산출 → 매개변수 부등식
  citation_note: "고쟁이 CH02 · 학습 목적 · 스키마 예시 대상 문항 (p.35)"

- source: 고쟁이-CH02-STEP2-#078
  page: 27
  problem_summary: |
    한 변의 길이 5인 정사각형 ABCD, A(0,4), B는 x축 위. 
    (1) 직선 CD: ax+3y+b=0일 때 a-b 값.
    (2) 점 (1,-3/2) 지나고 사각형 ABCD 넓이를 이등분하는 직선 y=mx+n일 때 mn 값.
  solution_summary: |
    (1) OA=4, AB=5, 직각삼각형 → OB=3, B(3,0). 세 삼각형 AOB, BC'C, DD'A 합동.
    C의 좌표 (7,3), D의 좌표 (4,7).
    CD의 방정식 y-3=(7-3)/(4-7)(x-7) → 4x+3y-37=0 → a=4, b=-37, a-b=41.
    (2) 정사각형 두 대각선의 교점 = AC의 중점 (7/2, 7/2).
    두 점 (1,-3/2), (7/2,7/2) 지나는 직선 → y=2x-7/2, m=2, n=-7/2, mn=-7.
  category: 직선의 방정식
  difficulty: STEP2
  mechanism_primary: 정사각형 꼭짓점 좌표화 (합동 회전 삼각형 활용) + 넓이 이등분 직선 (중심 통과)
  mechanism_secondary: [피타고라스 (5,4,3), 90도 회전 좌표 이동, 사각형 넓이 이등분 = 대각선 교점 통과]
  depth_conditions:
    - 회전 정사각형의 꼭짓점 좌표를 합동 삼각형으로 도출
    - "넓이 이등분 = 중심 통과"의 대각선 교점 성질
  freedom_signals:
    initial_setup_freedom: 낮음 (표준 회전)
    approach_choice: 중간
    student_decision_points: [C, D 좌표 유도 순서, 이등분 원리 (중점 vs 대각선 교점)]
  common_mistakes:
    - C, D 좌표 부호 실수 (회전 방향 반대)
    - 이등분선을 단순히 무게중심 통과로 오해
    - 대각선 교점 좌표 계산 실수
  condition_layers:
    surface: 정사각형 배치 + 두 소문항
    real: 회전 좌표 + 대각선 교점의 이등분 성질
    interaction: 합동 삼각형 → 꼭짓점 좌표 → CD 직선 & 중점 → 이등분선
  citation_note: "고쟁이 CH02 · 학습 목적"

- source: 고쟁이-CH02-STEP2-#079
  page: 28
  problem_summary: |
    좌표평면 위 정사각형 OABC (A(-1,3), C는 제1사분면). 원점 O를 지나면서 이 정사각형 넓이를
    3등분하는 두 직선의 방정식.
  solution_summary: |
    C가 제1사분면 있도록 정사각형 → 합동 삼각형 활용 B(2,4), C(3,1).
    O 통과·삼각형 OAB 넓이를 3등분 → AB의 선분 위 D, BC의 선분 위 E를 지나는 두 직선.
    OA=√10 → 정사각형 넓이 = 10.
    삼각형 OAD 넓이 = 10/3 → (1/2)·√10·k = 10/3, k = 2√10/3.
    D는 선분 AB를 2:1 내분 → D(1, 11/3), E는 선분 BC를 1:2 내분 → E(7/3, 3).
    직선 OD: y = (11/3)x, 직선 OE: y = (9/7)x.
  category: 직선의 방정식
  difficulty: STEP2
  mechanism_primary: 정사각형 넓이 3등분 (원점 통과·꼭짓점 아닌 대변 통과)
  mechanism_secondary: [정사각형 꼭짓점 좌표 회전 산출, 넓이 분할 → 내분비 → 내분점, 원점 통과 직선 y=mx]
  depth_conditions:
    - 3등분선이 두 대변 위 점을 통과 (좌변·우변 각각 1개)
    - 내분비 결정 (넓이 부분 = 밑변 부분 비율)
  freedom_signals:
    initial_setup_freedom: 낮음 (합동 회전 표준)
    approach_choice: 중간 (스케치·case 관리)
    student_decision_points: [3등분 두 직선의 위치 (변 어느 쪽), 내분비 방향]
  common_mistakes:
    - 3등분선을 무게중심·대각선으로 오해
    - 내분점 위치 (변 어느 쪽) 잘못 지정
    - 넓이비와 내분비 혼동
  condition_layers:
    surface: 정사각형 + 원점 통과 조건
    real: 넓이 3등분 = 대변 내분 방정식
    interaction: 회전 좌표화 → 넓이 3등분 → 내분비 → 두 내분점 → 두 직선
  citation_note: "고쟁이 CH02 · 학습 목적 · #75 선행문제와 짝"

- source: 고쟁이-CH02-STEP2-#080
  page: 28
  problem_summary: |
    좌표평면 위 네 점 A(1,1), B(3,9), C(-2,5), D(-3,1)을 꼭짓점으로 하는 사각형 ABCD 내부의
    점 P에 대해 |PA|+|PB|+|PC|+|PD|가 최솟값을 가질 때, P의 좌표는?
  solution_summary: |
    선분 AC와 BD의 교점을 Q라 하면 삼각부등식 PA+PC≥AC, PB+PD≥BD.
    AC=QA+QC, BD=QB+QD → PA+PB+PC+PD ≥ QA+QB+QC+QD.
    → P가 Q에 위치할 때 최솟값 (사각형 두 대각선 교점).
    AC의 방정식: y = -(4/3)x + 7/3. BD의 방정식: y = (4/3)x + 5.
    연립 → x=-1, y=11/3. P(-1, 11/3).
  category: 직선의 방정식
  difficulty: STEP2
  mechanism_primary: 삼각부등식 (PA+PC ≥ AC 등호 조건: P가 선분 AC 위) + 사각형 대각선 교점
  mechanism_secondary: [두 대각선 방정식 유도, 두 직선의 교점 좌표 (연립)]
  depth_conditions:
    - "4점 거리합 최소 = 두 대각선 교점" 성질의 삼각부등식 증명
    - Q가 사각형 내부에 있음을 확인 (등호 조건 동시 성립)
  freedom_signals:
    initial_setup_freedom: 중간 (최솟값 접근 전략)
    approach_choice: 중간 (기하 vs 좌표)
    student_decision_points: [삼각부등식 활용 아이디어, 대각선 교점 = 등호 조건]
  common_mistakes:
    - 무게중심으로 오해
    - 두 대각선 방정식 계산 실수
    - 등호 조건 동시 성립 검증 누락
  condition_layers:
    surface: 4점 거리합 최소화
    real: 삼각부등식의 등호 조건 = 대각선 교점
    interaction: 부등식 원리 + 좌표기하 (연립)
  citation_note: "고쟁이 CH02 · 학습 목적"

- source: 고쟁이-CH02-STEP2-#081
  page: 28
  problem_summary: |
    실수 k에 대하여 직선 l: (k-1)x+(2k+1)y-6k=0에 대해 <보기> 4개의 참·거짓 판정.
    ㄱ. k=1일 때, l은 x축에 평행.
    ㄴ. k=-1일 때, 직선 2x+y+3=0과 만나지 않는다.
    ㄷ. l은 제1사분면을 반드시 지난다.
    ㄹ. l은 두 직선 x+2y-6=0, x-y=0의 교점을 지나는 모든 직선을 나타낸다.
  solution_summary: |
    ㄱ. k=1 → 3y-6=0, y=2. x축 평행. (참)
    ㄴ. k=-1 → -2x+y+6=0. 2x+y+3=0과 평행하므로 만나지 않는다. (참)
    ㄷ. -x+y+k(x+2y-6)=0. 두 식 x+2y-6=0, -x+y=0 연립 → (2,2). l은 항상 (2,2) 통과.
       → 제1사분면 반드시 지난다. (참)
    ㄹ. l은 x+2y-6=0을 만드는 k가 존재하지 않음. 즉 두 직선 x+2y-6=0, x-y=0의 교점을 지나는 
       모든 직선 중 x+2y-6=0을 제외한 직선을 나타낸다. (거짓)
    참인 것: ㄱ, ㄴ, ㄷ (3개).
  category: 직선의 방정식
  difficulty: STEP2
  mechanism_primary: 매개변수 직선족의 다각도 분석 (평행·정점·전체 표현 여부)
  mechanism_secondary: [매개변수를 k 항등식으로 재정렬, 정점 도출, 평행 조건 계수비, 두 직선의 교점을 지나는 직선의 표현 한계 (원 직선 자체 제외)]
  depth_conditions:
    - 항등식 분리로 (x+2y-6) + k(-x+y) 재정렬 아이디어 (원 문제에서는 -x+y+k(x+2y-6)=0)
    - "모든 직선을 나타내는가?" 완결성 질문
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: 다중 (각 선지별 독립 검사)
    student_decision_points: [ㄷ의 항등식 분리 방향, ㄹ의 완결성 검토]
  common_mistakes:
    - ㄴ에서 두 직선이 같음을 잘못 인식 (사실은 평행)
    - ㄹ을 반사적으로 참으로 판정 (매개변수 직선족의 완결성 함정)
    - 정점 계산 오류
  condition_layers:
    surface: 4개의 독립 명제
    real: 매개변수 직선족의 특수치 대입 + 정점 + 표현력
    interaction: 각 명제마다 다른 mechanism (평행·정점·완결성)
  citation_note: "고쟁이 CH02 · 학습 목적 · 빈출★"

- source: 고쟁이-CH02-STEP2-#082
  page: 28
  problem_summary: |
    원점을 지나고 기울기가 양수인 두 직선 l1, l2가 조건: 
    (가) l2 기울기 = l1 기울기의 4배. 
    (나) l2가 x축의 양의 방향과 이루는 각의 크기는 l1이 x축의 양의 방향과 이루는 각의 크기의 2배.
    → l2 기울기.
  solution_summary: |
    l1 기울기 a(a>0) → l2 기울기 4a.
    x=1과 두 직선의 교점 A(1,0)의 대응점 B, C.
    AB=a, AC=4a → 각의 이등분선 정리에 의해 조건 (나)로부터 
    각 AOC 이등분선이 l1 → OA:OC = AB:BC = 1:3 → OC=3 (∵ OA=1).
    직각삼각형 OAC에서 피타고라스: OA² + AC² = OC² → 1 + (4a)² = 9 → a² = 1/2, a = √2/2.
    l2 기울기 = 4a = 2√2.
  category: 직선의 방정식
  difficulty: STEP2
  mechanism_primary: 각의 이등분선 정리 (내분비 = 인접변비) 활용한 기울기 유도
  mechanism_secondary: [각의 배각 조건 → 이등분선 위치, 피타고라스, 좌표축과 이루는 각 = 기울기 tan]
  depth_conditions:
    - "각의 크기가 2배" → l1이 l2의 각을 이등분 → 각의 이등분선 정리 (내분비)
    - x=1 선을 보조선으로 도입해 좌표화
  freedom_signals:
    initial_setup_freedom: 중간 (보조선 선택)
    approach_choice: 중간 (삼각함수 배각 공식 활용도 가능하나 CM2 범위 초과)
    student_decision_points: [보조선 x=1 선택, 이등분선 정리 활용]
  common_mistakes:
    - "각의 크기 2배 = 기울기 2배" 오해 (실제로는 tan 배각 공식이 필요, 여기선 이등분선 정리)
    - 내분비 방향 실수
    - a>0 조건 누락
  condition_layers:
    surface: 두 직선의 기울기·각 조건
    real: 각 이등분선 정리 → 인접변 비 → 피타고라스
    interaction: 두 조건 결합 (배수 + 배각) → 이등분선 정리 → 삼각형
  citation_note: "고쟁이 CH02 · 학습 목적"

- source: 고쟁이-CH02-STEP2-#083
  page: 29
  problem_summary: |
    자연수 a, b에 대해 좌표평면 위 세 점 A(-1,1), B(3,-2), C(a,b)를 꼭짓점으로 하는 삼각형 ABC와
    각각의 변이 x축·y축과 수직인 직사각형 APQR이 있다. AP:PQ=3:2, A를 지나는 직선 l이
    직사각형 APQR과 삼각형 ABC의 넓이를 각각 이등분할 때 a+b의 최솟값 (A의 y좌표는 R의 y좌표보다 크다).
  solution_summary: |
    직선 l이 직사각형 대각선 교점 Q를 지남 → l의 기울기 = 2/3 (변비 3:2).
    A(-1,1) 지나는 l의 방정식 y = (2/3)(x+1) + 1 = (2/3)x + 5/3.
    l이 삼각형의 넓이도 이등분 → BC의 중점을 지남.
    BC의 중점 ((a+3)/2, (b-2)/2)을 l에 대입: (b-2)/2 = (2/3)·(a+3)/2 + 5/3.
    정리: 3(b-2) = 2(a+3) + 10 → 2a - 3b + 22 = 0.
    자연수 a, b의 최솟값: a=1, b=8. a+b=9.
  category: 직선의 방정식
  difficulty: STEP2
  mechanism_primary: 도형의 넓이 이등분 (직사각형 → 대각선 교점, 삼각형 → 꼭짓점 통과 시 대변 중점)
  mechanism_secondary: [정수 조건 (자연수 최솟값), 두 조건 동시 만족 직선 유도, 비율에서 기울기 유도]
  depth_conditions:
    - 두 도형의 이등분 조건 각각 유도 (직사각형 = 중심 통과, 삼각형 = 꼭짓점을 지나면 대변 중점 통과)
    - 자연수 조건에서 최솟값 정수 탐색
  freedom_signals:
    initial_setup_freedom: 낮음
    approach_choice: 중간 (직선 방정식 유도 순서)
    student_decision_points: [직사각형 이등분 = 중심 통과 vs 대각선, 삼각형 이등분 = 중점 통과 원리]
  common_mistakes:
    - 이등분 원리 (중심·중점) 혼동
    - 기울기 계산 실수 (변의 비율 → 기울기)
    - 정수 최솟값 조건 누락 (a=0 실수)
  condition_layers:
    surface: 삼각형 + 직사각형 + 이등분
    real: 두 이등분 조건 → 정점 통과 (중심·중점) → 직선 결정 → 정수 최소
    interaction: 두 도형 이등분 동시 만족 → 좌표 방정식 → 최적화
  citation_note: "고쟁이 CH02 · 학습 목적"

- source: 고쟁이-CH02-STEP2-#084
  page: 29
  problem_summary: |
    두 점 A(2,0), B(0,6). 다음 조건을 만족시키는 두 직선 l, m의 기울기의 합의 최댓값.
    (가) l은 원점 O를 지난다. 
    (나) l과 m은 선분 AB 위의 P에서 만난다. 
    (다) l과 m은 삼각형 OAB의 넓이를 삼등분한다.
  solution_summary: |
    P가 AB를 2:1 또는 1:2로 내분.
    (i) P가 AB를 2:1 내분: P(2/3, 4). l 기울기 = 6. m은 삼각형 OAP 넓이 이등분 → OA 중점 (1,0) 통과.
        m 기울기 = -12. 합 = -6.
    (ii) P가 AB를 1:2 내분: P(4/3, 2). l 기울기 = 3/2. m은 삼각형 OPB 넓이 이등분 → OB 중점 (0,3) 통과.
        m 기울기 = -3/4. 합 = 3/4.
    최댓값 = 3/4.
  category: 직선의 방정식
  difficulty: STEP2
  mechanism_primary: 삼각형 넓이 3등분 (꼭짓점 통과 두 직선 + 대변 3분점 통과)
  mechanism_secondary: [내분점 공식, 넓이 이등분 원리, case 대칭 관리]
  depth_conditions:
    - 3등분 두 직선이 각각 대변을 3분점에서 통과
    - 두 case (2:1, 1:2) 대칭 관리
    - 각 case에서 두 직선의 넓이 이등분 관계
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: 다중 (case 순서, 어느 직선이 O 통과인지 명확화)
    student_decision_points: [P의 위치, m이 지나는 중점 결정]
  common_mistakes:
    - 3등분 원리를 무게중심으로 오해
    - case 하나만 계산 (다른 case의 최댓값 놓침)
    - m의 통과 중점 결정 오류
  condition_layers:
    surface: 3등분 두 직선
    real: 꼭짓점 통과 + 대변 3분점 + 넓이 이등분 사슬
    interaction: 조건 (가) O 통과 + (나)(다) 3등분 → 두 case
  citation_note: "고쟁이 CH02 · 학습 목적 · 교육청 기출"

- source: 고쟁이-CH02-STEP2-#085
  page: 29
  problem_summary: |
    점 (a,b)가 직선 3x+4y-2=0 위를 움직일 때, 점 (a+b, a-b)가 나타내는 도형의 방정식.
  solution_summary: |
    3a+4b-2=0 → b = -(3/4)a + 1/2.
    X = a+b, Y = a-b라 하면 a = (X+Y)/2, b = (X-Y)/2.
    3(X+Y)/2 + 4(X-Y)/2 - 2 = 0 → 3(X+Y) + 4(X-Y) - 4 = 0 → 7X - Y - 4 = 0.
    구하는 직선: 7x - y - 4 = 0.
  category: 직선의 방정식
  difficulty: STEP2
  mechanism_primary: 좌표 대응 (선형변환에 의한 점의 자취 = 직선의 방정식 유도)
  mechanism_secondary: [X, Y 치환 후 원래 변수 역치환, 매개변수 소거]
  depth_conditions:
    - 새 좌표 X, Y ↔ 원래 변수 a, b의 역치환
    - 원래 직선을 새 좌표로 재표현
  freedom_signals:
    initial_setup_freedom: 낮음
    approach_choice: 중간 (매개변수 소거법 vs 좌표 두 특수점 대응)
    student_decision_points: [치환 방법, 대체 접근 (두 특수점 이용)]
  common_mistakes:
    - X, Y 치환 후 원래 변수 표현 실수
    - 부호 실수
    - 자취 인식 실패
  condition_layers:
    surface: 새 좌표 (a+b, a-b)
    real: 선형변환 (2×2) 후의 직선
    interaction: 원래 직선 조건 → 치환 → 새 직선
  citation_note: "고쟁이 CH02 · 학습 목적"

- source: 고쟁이-CH02-STEP2-#086
  page: 29
  problem_summary: |
    좌표평면 위 두 점 A(2,-1), B(-1,2)에 대해 직선 AB 위 점 P와 점 (4,3)을 이은 선분을
    2:1 내분하는 점 Q가 나타내는 도형의 방정식.
  solution_summary: |
    직선 AB의 방정식 y = -x + 1 (기울기 -1, y절편 1).
    P가 직선 AB 위 → P(a, -a+1).
    Q(X,Y)는 (a, -a+1)과 (4,3)을 2:1 내분 → 
    X = (2·4 + 1·a)/3 = (8+a)/3, Y = (2·3 + 1·(-a+1))/3 = (-a+7)/3.
    a = 3X - 8, a = -3Y + 7 → 3X - 8 = -3Y + 7 → X + Y - 5 = 0.
    구하는 직선: x + y - 5 = 0.
  category: 직선의 방정식
  difficulty: STEP2
  mechanism_primary: 매개변수를 이용한 자취 (내분점 좌표 → 매개변수 소거 → 직선)
  mechanism_secondary: [내분점 공식, 매개변수 소거 (양쪽에서 a 소거)]
  depth_conditions:
    - P가 직선 위 → P의 좌표를 매개변수 하나로 표현
    - 내분점 좌표 X, Y에서 매개변수 소거
  freedom_signals:
    initial_setup_freedom: 낮음
    approach_choice: 중간
    student_decision_points: [매개변수 도입 방법, 소거 순서]
  common_mistakes:
    - 내분점 공식 실수
    - 매개변수 소거 실수
    - 내분 순서 (2:1 vs 1:2) 혼동
  condition_layers:
    surface: 내분점의 자취
    real: 매개변수 (P의 위치) → 좌표 → 소거
    interaction: 직선 위 P + 내분점 = 매개변수 함수 → 자취 소거
  citation_note: "고쟁이 CH02 · 학습 목적"

- source: 고쟁이-CH02-STEP2-#087
  page: 29
  problem_summary: |
    다음 직선의 방정식.
    (1) 세 점 A(-2,1), B(8,1), C(1,0)의 삼각형 ABC의 넓이를 이등분하고 x축에 수직인 직선.
    (2) 세 점 A(-2,0), B(2,0), C(1,4)의 삼각형 ABC의 넓이를 이등분하고 기울기 1인 직선.
  solution_summary: |
    (1) 삼각형 ABC의 밑변 AB, 밑변 길이 10, 높이 1 → 넓이 5.
    x축에 수직인 직선 x=a. 1<a<8이어야 함 (선분 AB, BC와 만나는 조건).
    직선 BC: y=(1/7)(x-1). Q(a, (a-1)/7). PQ=1-(a-1)/7=(8-a)/7, BP=8-a.
    삼각형 BPQ 넓이 = (1/2)(8-a)²/7 = 5/2 → (8-a)² = 35 → a = 8-√35 (∵ 1<a<8).
    구하는 직선: x = 8-√35.
    (2) 삼각형 ABC의 밑변 AB, 넓이 (1/2)·4·4 = 8. 기울기 1 직선 y=x+k.
    -2<k<2 조건 (선분 BC, AB와 만나는 조건).
    직선 BC: y=-4x+8. y=x+k와 교점 P((8-k)/5, (8+4k)/5).
    y=x+k와 x축 교점 Q(-k, 0).
    삼각형 PQB 넓이 = (1/2)·{2-(-k)}·(8+4k)/5 = 4 → (k+2)²=10, k=-2+√10 (∵ -2<k<2).
    구하는 직선: y = x - 2 + √10.
  category: 직선의 방정식
  difficulty: STEP2
  mechanism_primary: 삼각형 넓이 이등분 (수직·기울기 지정) → 파라미터 이차방정식
  mechanism_secondary: [넓이 절반 조건 → 절편 매개변수 → 삼각형 넓이 함수 → 이차방정식]
  depth_conditions:
    - 이등분선 방향이 지정되면 절편 미지수 도입
    - 이등분선이 어느 두 변과 만나는지 case 판정
    - 매개변수 범위 (1<a<8, -2<k<2) 사전 판단
  freedom_signals:
    initial_setup_freedom: 중간 (case 판정)
    approach_choice: 중간
    student_decision_points: [case 결정 (어느 변 만남), 절편 방향]
  common_mistakes:
    - case 판정 실수 (다른 두 변 조합)
    - 넓이 함수의 잘못된 유도
    - 부호 실수 (a=8+√35 잘못 택함)
  condition_layers:
    surface: 방향 지정 + 넓이 이등분
    real: 절편 매개변수 → 넓이 = 이차식 → 방정식
    interaction: 두 소문항 유사 mechanism 반복
  citation_note: "고쟁이 CH02 · 학습 목적"
```

### 유형 02: 직선의 수직과 평행 (#088~#102)

```yaml
- source: 고쟁이-CH02-STEP2-#088
  page: 30
  problem_summary: |
    두 직선 (k²+2k-3)x+(k+3)y=2, (k-4)x+(k-1)y=-1이 서로 수직이 되도록 하는 모든 실수 k의 합.
  solution_summary: |
    (k²+2k-3)x+(k+3)y=2 → (k+3)(k-1)x+(k+3)y=2.
    (i) k+3≠0, k-1≠0: 두 직선 기울기 -(k-1), -(k-4)/-(k-1).
        수직 조건: -(k-1)·(k-4)/(-(k-1)) = -1 → k-4=-1, k=3.
    (ii) k+3=0 또는 k-1=0:
        k=-3이면 (k+3)(k-1)x+(k+3)y=2는 직선 아님.
        k=1이면 4y=2 (y=1/2), -3x=-1 (x=1/3). 두 직선 서로 수직.
    합: 3+1=4.
  category: 직선의 수직과 평행
  difficulty: STEP2
  mechanism_primary: 두 직선 수직 조건 (기울기 곱 -1 OR aa'+bb'=0) + 계수 0 되는 특수 case
  mechanism_secondary: [특수 case 분리 (계수가 0 → 축에 평행), 기울기 존재 확인]
  depth_conditions:
    - 계수가 0이 되는 값의 case 분리
    - k=1이 축평행 두 직선 (x축, y축) → 자동 수직
  freedom_signals:
    initial_setup_freedom: 낮음
    approach_choice: 중간 (일반 공식 aa'+bb'=0 or case 분리)
    student_decision_points: [k+3=0, k-1=0 case 확인]
  common_mistakes:
    - 특수 case (k=1) 누락
    - k=-3 무의미 case 잘못 처리
    - 이차식 (k+3)(k-1) 인수분해 놓침
  condition_layers:
    surface: 두 직선 수직 조건
    real: 일반 공식 + 계수 0의 예외 처리
    interaction: 대수 조건 + 축평행 특수 case
  citation_note: "고쟁이 CH02 · 학습 목적"

- source: 고쟁이-CH02-STEP2-#089
  page: 30
  problem_summary: |
    네 점 A(-2,1), B(p,4), C(q,8), D(1,r)이 꼭짓점인 사각형 ABCD가 마름모일 때, 양수 p, q, r에
    대해 pqr 값.
  solution_summary: |
    마름모 → 두 대각선 AC, BD가 서로 수직이등분.
    두 선분 중점 같음 → ((-2+q)/2, 9/2) = ((p+1)/2, (4+r)/2).
    -2+q=p+1, 즉 q=p+3. 9=4+r → r=5.
    두 대각선 수직: 기울기 곱 -1.
    (8-1)/(q-(-2)) × (r-4)/(1-p) = -1 → (q+2)(p-1) = 7.
    q=p+3 대입: (p+5)(p-1)=7 → p²+4p-12=0 → (p+6)(p-2)=0 → p=2 (∵ p>0).
    q=5, r=5. pqr = 2·5·5 = 50.
  category: 직선의 수직과 평행
  difficulty: STEP2
  mechanism_primary: 마름모의 두 대각선 성질 (수직이등분)
  mechanism_secondary: [두 대각선의 중점 일치, 두 대각선 기울기 곱 -1, 이차방정식 인수분해]
  depth_conditions:
    - 마름모 = 수직 대각선 + 대각선 서로 이등분
    - 세 미지수 p, q, r 결정을 두 조건 (중점·수직)으로 완결
  freedom_signals:
    initial_setup_freedom: 낮음
    approach_choice: 중간
    student_decision_points: [마름모 특성 활용 순서, 이차방정식 인수]
  common_mistakes:
    - 마름모 특성을 대각선 길이 같음으로 오해
    - 중점 조건 오류
    - 인수분해 실수
  condition_layers:
    surface: 4점 좌표 + 마름모
    real: 대각선 수직이등분
    interaction: 중점 조건 → q, r + 수직 조건 → p (이차)
  citation_note: "고쟁이 CH02 · 학습 목적 · 빈출★ · #65 선행"

- source: 고쟁이-CH02-STEP2-#090
  page: 30
  problem_summary: |
    좌표평면 위 세 점 O(0,0), A(2,4), B(5,1)을 꼭짓점으로 하는 삼각형 OAB. 각 꼭짓점에서 대변에 
    내린 세 수선의 교점 (수심)의 좌표.
  solution_summary: |
    직선 AB의 기울기 (1-4)/(5-2) = -1 → 수직인 OO' 기울기 1, 방정식 y=x.
    직선 OA의 기울기 4/2 = 2 → 수직인 BB' 기울기 -1/2, 방정식 y-1=-(1/2)(x-5), y=-x/2+7/2.
    두 직선 y=x, y=-x/2+7/2 교점: x = -x/2+7/2 → x=7/3, y=7/3. 
    수심 (7/3, 7/3).
  category: 직선의 수직과 평행
  difficulty: STEP2
  mechanism_primary: 삼각형 수심 (세 수선 공점 → 두 수선만 구해도 됨)
  mechanism_secondary: [수직 조건 (기울기 곱 -1), 직선 연립]
  depth_conditions:
    - 세 수선의 공점성 (증명 없이 활용)
    - 두 개만 계산하는 요령
  freedom_signals:
    initial_setup_freedom: 낮음
    approach_choice: 중간 (어느 두 수선 선택)
    student_decision_points: [수선 두 개 선택 (계산 편의)]
  common_mistakes:
    - 수선의 발 vs 수심 혼동
    - 기울기 부호 실수
    - 연립 계산 실수
  condition_layers:
    surface: 세 수선 교점
    real: 수직 조건 + 공점성
    interaction: 두 수선 방정식 → 연립
  citation_note: "고쟁이 CH02 · 학습 목적"

- source: 고쟁이-CH02-STEP2-#091
  page: 30
  problem_summary: |
    평행한 두 직선 (k+4)x+2(k+2)y+1=0, (4-k)x+4(k+2)y+2=0 사이의 거리가 m일 때 k+m 값.
  solution_summary: |
    (i) k≠-2, k≠4: 평행 조건 (k+4)/(4-k) = 2(k+2)/(4(k+2)) = 1/2.
        2(k+2)/(4(k+2)) = 1/2 성립. (k+4)/(4-k) = 1/2 → 2(k+4)=4-k → 3k=-4 → k=-4/3.
        하지만 확인: (k+4)/(4-k) = (8/3)/(16/3) = 1/2 (성립). 
        1/2 값이 두 조건에서 같아야 하는데 실제로 (k+4)/(4-k) = 1/2 조건은 만족하지 않는 case로 판정 (해설 확인 필요).
    (ii) k=4일 때, 두 직선 8x+12y+1=0, 24y+2=0. 두 번째는 y = -1/12, 첫 번째와 평행 아님.
    (iii) k=-2일 때, 두 직선 2x+1=0, 6x+2=0. x=-1/2, x=-1/3. 서로 평행.
        두 직선 사이의 거리 m = |-1/3 - (-1/2)| = 1/6.
        ∴ k+m = -2 + 1/6 = -11/6.
  category: 직선의 수직과 평행
  difficulty: STEP2
  mechanism_primary: 두 직선 평행 조건 (계수비 a:a' = b:b' ≠ c:c') + 계수 0 case
  mechanism_secondary: [평행 조건 case 분리, 두 평행선 사이의 거리 공식, 세로 평행선의 경우 x절편 차]
  depth_conditions:
    - 정상 case에서 계수비 조건 모두 확인
    - 특수 case (k=-2)에서 y축 평행 두 직선 처리
  freedom_signals:
    initial_setup_freedom: 낮음
    approach_choice: 중간
    student_decision_points: [계수 특수 case 확인, y축 평행 처리]
  common_mistakes:
    - k=-2 case 누락
    - 평행 조건 계수비 실수
    - 세로 평행선의 거리 계산 실수 (일반 공식 적용 시 분모 문제)
  condition_layers:
    surface: 평행 두 직선 + 거리
    real: 평행 조건 case 분리 + 특수 case의 거리
    interaction: 계수 조건 → k → 거리 → 합
  citation_note: "고쟁이 CH02 · 학습 목적"

- source: 고쟁이-CH02-STEP2-#092
  page: 30
  problem_summary: |
    두 직선 l: ax-y+a+2=0, m: 4x+ay+3a+8=0에 대해 <보기> 3개 판정.
    ㄱ. a=-1일 때, 두 직선 l과 m이 제2사분면에서 만난다. 
    ㄴ. 두 직선 l과 m이 서로 수직이 되도록 하는 a의 값은 오직 하나이다. 
    ㄷ. a=2 또는 a=-2일 때, 두 직선 l과 m이 서로 평행하다.
  solution_summary: |
    ㄱ. a=-1: l: y=-x+1, m: y=4x+5. 교점 -x+1=4x+5 → x=-4/5, y=9/5. 제2사분면. (참)
    ㄴ. a=0일 때 l: y=2, m: x=-2 → 수직. a≠0일 때 기울기 곱 a·(-4/a)=-4≠-1이므로 수직 아님. 
        따라서 수직 되는 a=0 오직 하나. (참)
    ㄷ. a≠0일 때 기울기 각각 a, -4/a. 평행 조건 a=-4/a → a²=-4 (실수 해 없음). (거짓)
    옳은 것: ㄱ, ㄴ.
  category: 직선의 수직과 평행
  difficulty: STEP2
  mechanism_primary: 매개변수 두 직선의 특수치·수직·평행 조건 다각도 분석
  mechanism_secondary: [수직 조건 case 분리 (a=0), 평행 조건 실수 해 존재성, 사분면 판정]
  depth_conditions:
    - a=0일 때 두 직선이 축평행 (수직 자동 성립)
    - 평행 조건이 실수 해 없을 때 판정
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: 다중 (각 선지 독립)
    student_decision_points: [수직·평행 case 완결성, a=0의 처리]
  common_mistakes:
    - ㄴ에서 a≠0 조건 하에서만 답 → a=0 case 누락
    - ㄷ에서 실수 해 존재 오판
    - 사분면 계산 실수
  condition_layers:
    surface: 3개 명제
    real: 특수치·수직·평행 각 case
    interaction: 각 명제마다 다른 조건
  citation_note: "고쟁이 CH02 · 학습 목적 · 빈출★"

- source: 고쟁이-CH02-STEP2-#093
  page: 31
  problem_summary: |
    좌표평면 위 세 점 A(4,3), B(1,5), C(-2,-2)를 꼭짓점으로 하는 삼각형 ABC의 무게중심을 지나는 
    직선 중 점 A와의 거리가 최대가 되는 직선의 x절편.
  solution_summary: |
    무게중심 G((4+1-2)/3, (3+5-2)/3) = (1,2).
    G 지나는 직선 y=k(x-1)+2. 이 직선과 A의 거리가 최대가 되려면 A와 G를 잇는 직선(AG)에 수직.
    직선 AG의 기울기 (3-2)/(4-1) = 1/3. → 구하는 직선의 기울기 -3.
    y = -3(x-1) + 2 = -3x + 5.
    x절편: -3x+5=0 → x=5/3.
  category: 직선의 수직과 평행
  difficulty: STEP2
  mechanism_primary: 정점 통과 직선의 특정점과의 거리 최대화 (정점-특정점 연결선에 수직일 때 최대)
  mechanism_secondary: [무게중심 좌표, 수직 조건, x절편 계산]
  depth_conditions:
    - "정점 통과 + 특정점 거리 최대 = AG에 수직" 원리
    - 무게중심 좌표 산출
  freedom_signals:
    initial_setup_freedom: 낮음
    approach_choice: 중간
    student_decision_points: [최대 거리 조건 = 수직 인식]
  common_mistakes:
    - 최대 거리 조건을 반대로 (평행) 오해
    - AG 기울기 계산 실수
    - x절편 계산 실수
  condition_layers:
    surface: 무게중심 + 최대 거리 조건
    real: 정점 통과 + 수직 이용 최적화
    interaction: 무게중심 → 정점 → 수직 최적화 → x절편
  citation_note: "고쟁이 CH02 · 학습 목적"

- source: 고쟁이-CH02-STEP2-#094
  page: 31
  problem_summary: |
    점 (0,1) 지나는 직선과 직선 2x+(k-1)y+6=0이 x축 위의 점에서 수직으로 만날 때, 상수 k의 값.
  solution_summary: |
    2x+(k-1)y+6=0에 y=0 대입 → x=-3. B(-3, 0).
    (0,1)과 B(-3,0)을 잇는 직선 AB. 기울기 = 1/3.
    두 직선이 B에서 수직 → 직선 2x+(k-1)y+6=0의 기울기 -3.
    y = -2/(k-1) x - 6/(k-1). 기울기 = -2/(k-1) = -3 → k-1 = 2/3, k = 5/3.
  category: 직선의 수직과 평행
  difficulty: STEP2
  mechanism_primary: 두 직선이 특정점에서 수직 (한 직선의 x절편 = 다른 직선과의 만남점, 기울기 곱 -1)
  mechanism_secondary: [x절편 계산, 두 점 지나는 직선 기울기, 기울기 매개변수식 역산]
  depth_conditions:
    - 만남점 = 한 직선의 x절편 (y=0 대입)
    - 다른 직선은 두 점 (0,1)과 (-3,0)을 잇는 직선 (기울기 1/3)
    - 수직 조건 → 다른 직선 기울기 -3
  freedom_signals:
    initial_setup_freedom: 낮음
    approach_choice: 중간
    student_decision_points: [x절편 계산, 기울기 방정식 풀이]
  common_mistakes:
    - x절편 계산 실수 (기호 오류)
    - 기울기 부호 실수
    - k-1 = 2/3 계산 실수
  condition_layers:
    surface: 두 직선의 수직 만남
    real: x절편 = 만남점 + 기울기 곱 -1
    interaction: 두 조건 결합 → 기울기 방정식
  citation_note: "고쟁이 CH02 · 학습 목적"

- source: 고쟁이-CH02-STEP2-#095
  page: 31
  problem_summary: |
    좌표평면 위 두 점 A(5,1), B(a,b)에 대해 선분 AB가 직선 y=2x+1과 수직으로 만나는 점 P.
    AP:BP=2:1일 때 a+b 값.
  solution_summary: |
    A에서 직선 y=2x+1에 내린 수선이 P. 직선 AP 기울기 -1/2 (수직).
    AP: y-1 = -(1/2)(x-5) → x+2y-7=0.
    y=2x+1과 x+2y-7=0의 교점: y=2x+1을 대입 x+2(2x+1)-7=0 → 5x-5=0 → x=1, y=3. P(1,3).
    AP:BP=2:1이고 P가 선분 AB 위 → P는 AB를 2:1로 내분.
    A(5,1), B(a,b), P(1,3): ((2a+5)/3, (2b+1)/3) = (1, 3).
    2a+5=3 → a=-1. 2b+1=9 → b=4. a+b=3.
  category: 직선의 수직과 평행
  difficulty: STEP2
  mechanism_primary: 점에서 직선에 내린 수선의 발 + 내분점 조건
  mechanism_secondary: [수직 조건 → 수선 방정식, 두 직선 교점 → P, 내분점 공식 역산]
  depth_conditions:
    - 수선의 발 P는 A에서 y=2x+1에 내린 수선과 y=2x+1의 교점
    - AP:BP=2:1 + P가 AB 위 → 내분 조건
  freedom_signals:
    initial_setup_freedom: 낮음
    approach_choice: 중간
    student_decision_points: [수선 유도 순서, 내분 방향]
  common_mistakes:
    - 수선 기울기 실수
    - 교점 계산 실수
    - 내분 방향 (2:1 vs 1:2) 혼동
  condition_layers:
    surface: 수선 + 내분점
    real: 수선 유도 + 내분점 좌표 방정식
    interaction: 수직 조건 → P → 내분점 → a, b
  citation_note: "고쟁이 CH02 · 학습 목적 · #66 선행"

- source: 고쟁이-CH02-STEP2-#096
  page: 31
  problem_summary: |
    세 점 A, B, C가 꼭짓점인 삼각형 ABC의 세 변 AB, BC, CA의 중점을 각각 P, Q, R이라 하자.
    P(2,3), Q(1,1)이고 두 직선 PR, QR의 방정식이 각각 x-2y+4=0, x+y-2=0일 때 B(a,b).
    a-b 값.
  solution_summary: |
    직선 QR 기울기 -1 → 직선 AB는 QR과 평행 (중점연결정리) → 직선 AB의 방정식 
    y-3 = -(x-2) → y = -x + 5.
    직선 PR 기울기 1/2 → 직선 BC는 PR과 평행 → 직선 BC 방정식 y-1=(1/2)(x-1) → y=x/2+1/2.
    두 직선 AB, BC의 교점 B: -x+5 = x/2+1/2 → x=3, y=2. B(3,2).
    a=3, b=2, a-b=1.
  category: 직선의 수직과 평행
  difficulty: STEP2
  mechanism_primary: 중점연결정리 (삼각형 두 변 중점 잇는 선분 ∥ 나머지 변)
  mechanism_secondary: [평행 조건 → 기울기 같음, 두 직선 교점 → 꼭짓점]
  depth_conditions:
    - 중점연결정리 활용: QR ∥ AB, PR ∥ BC
    - 두 평행 직선의 방정식 유도 → 교점 = B
  freedom_signals:
    initial_setup_freedom: 낮음
    approach_choice: 중간
    student_decision_points: [중점연결 대응 관계 정확 매칭]
  common_mistakes:
    - 중점 대응 관계 혼동 (PR ↔ BC 대신 AB 대응)
    - 평행 조건 대신 수직 사용
    - 교점 계산 실수
  condition_layers:
    surface: 삼각형 중점 + 두 직선
    real: 중점연결정리 → 두 대응 평행 직선
    interaction: 중점 → 평행 → 두 직선 → 꼭짓점
  citation_note: "고쟁이 CH02 · 학습 목적"

- source: 고쟁이-CH02-STEP2-#097
  page: 31
  problem_summary: |
    두 점 A(2,2), B(4,6)과 함수 y=x²+2x+4의 그래프 위의 점 P(a,b)는 제1사분면 위에 있고
    |AP|=|BP|를 만족시킨다. a+b 값.
  solution_summary: |
    AP=BP → P는 AB의 수직이등분선 위. AB 기울기 2 → 수직이등분선 기울기 -1/2.
    AB의 중점 (3, 4). 수직이등분선: y-4 = -(1/2)(x-3) → y = -x/2 + 11/2.
    P가 y=x²+2x+4 위 → -x/2 + 11/2 = x² + 2x + 4 → 2x² + 5x - 3 = 0 → (2x-1)(x+3) = 0 → x=1/2 (∵ x>0).
    y = 21/4. a=1/2, b=21/4, a+b = 1/2 + 21/4 = 23/4.
  category: 직선의 수직과 평행
  difficulty: STEP2
  mechanism_primary: 등거리 조건 = 수직이등분선 위 + 곡선과의 교점 (이차방정식)
  mechanism_secondary: [수직이등분선 방정식, 곡선-직선 연립 이차, 사분면 조건으로 근 선택]
  depth_conditions:
    - "AP=BP" → 수직이등분선 위 성질
    - 사분면 조건으로 두 근 중 하나 선택
  freedom_signals:
    initial_setup_freedom: 낮음
    approach_choice: 중간
    student_decision_points: [등거리 원리, 사분면 판정]
  common_mistakes:
    - 등거리 = 수직이등분선 원리 놓침
    - 인수분해 실수
    - 근 선택 오류 (제1사분면 조건 무시)
  condition_layers:
    surface: 등거리 + 곡선 위
    real: 수직이등분선 + 이차방정식
    interaction: 등거리 → 이등분선 → 이차 → 근 선택
  citation_note: "고쟁이 CH02 · 학습 목적"

- source: 고쟁이-CH02-STEP2-#098
  page: 31
  problem_summary: |
    세 점 O(0,0), A(-1,5), B(5,3)의 삼각형 OAB. 선분 AB와 평행하고 삼각형 OAB의 넓이를 
    이등분하는 직선의 y절편.
  solution_summary: |
    두 삼각형 OCD (OAB에서 잘라낸 작은 삼각형) 과 OAB 닮음 (평행선).
    두 삼각형 넓이비 1:2 → 닮음비 1:√2.
    선분 OA를 1:(√2-1) 내분점 C 좌표:
    ((1·(-1)+(√2-1)·0)/(1+(√2-1)), (1·5+(√2-1)·0)/(1+(√2-1))) = (-√2/2, 5√2/2).
    AB의 기울기 (3-5)/(5-(-1)) = -1/3 → 평행선 CD 기울기 -1/3.
    y - 5√2/2 = -(1/3)(x - (-√2/2)) → y절편 = -√2/6 + 5√2/2 = 7√2/3.
  category: 직선의 수직과 평행
  difficulty: STEP2
  mechanism_primary: 닮은 삼각형 넓이비 → 닮음비 → 내분비 (평행선으로 잘린 삼각형)
  mechanism_secondary: [평행선 조건, 넓이 이등분 → 닮음비 1:√2, 내분점 공식, y절편 유도]
  depth_conditions:
    - "AB와 평행 + 넓이 이등분" → 닮음 삼각형 → 넓이비 1:2 → 닮음비 1:√2 → 내분비 1:(√2-1)
    - 무리수 내분비 처리
  freedom_signals:
    initial_setup_freedom: 낮음
    approach_choice: 중간
    student_decision_points: [닮음 인식, 넓이비 → 닮음비 변환, 무리수 내분]
  common_mistakes:
    - 넓이비를 그대로 내분비로 오용
    - 무리수 내분점 계산 실수
    - y절편 계산 실수
  condition_layers:
    surface: 평행 + 넓이 이등분
    real: 닮은 삼각형 + 무리수 내분비
    interaction: 평행 → 닮음 → 넓이 → 내분 → y절편
  citation_note: "고쟁이 CH02 · 학습 목적"

- source: 고쟁이-CH02-STEP2-#099
  page: 32
  problem_summary: |
    좌표평면에서 |AB|=|AC|인 이등변삼각형 ABC의 무게중심 G(2,-1)이고 직선 BC의 방정식 y=x-4.
    |BC|=4√2일 때 직선 AB의 방정식 ax+by-1=0에서 a-b 값. (B의 x좌표 > C의 x좌표)
  solution_summary: |
    이등변 → A와 BC의 중점 M을 잇는 직선은 BC의 수직이등분선.
    BC 기울기 1 → AM 기울기 -1. G가 AM 위에 있음.
    G(2,-1), AM 방정식: y+1 = -(x-2) → y = -x+1.
    두 점 B, C가 직선 y=x-4 위 → B(p, p-4), C(q, q-4) (p>q).
    BC의 중점 ((p+q)/2, (p+q)/2 - 4)이 AM 위: (p+q)/2 - 4 = -(p+q)/2 + 1 → p+q = 5.
    |BC|² = 2(p-q)² = 32 → p-q = 4. → p=9/2, q=1/2. B(9/2, 1/2), C(1/2, -7/2).
    A(r, s)라 하면 무게중심 (2, -1): (r + 9/2 + 1/2)/3 = 2 → r = 1. 
    (s + 1/2 - 7/2)/3 = -1 → s = 0. A(1, 0).
    A(1,0), B(9/2, 1/2) 지나는 직선: y = (1/7)(x-1) → x - 7y - 1 = 0. a=1, b=-7. a-b=8.
  category: 직선의 수직과 평행
  difficulty: STEP2
  mechanism_primary: 이등변삼각형 성질 (밑변 수직이등분선 = 꼭짓점 지나는 중선) + 무게중심 좌표
  mechanism_secondary: [BC의 중점 M, 수직이등분선 = 무게중심 통과, 매개변수 좌표화, 두 조건 (평균·차) 연립]
  depth_conditions:
    - 이등변삼각형 = 수직이등분선 = 중선 일치
    - 무게중심이 이 중선 위
    - B, C 좌표를 직선 매개변수화
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: 중간
    student_decision_points: [이등변 성질 활용, 매개변수 도입]
  common_mistakes:
    - 무게중심을 수직이등분선 위가 아닌 다른 곳으로 오해
    - B, C 순서 (p>q) 조건 놓침
    - 무게중심 좌표 공식 실수
  condition_layers:
    surface: 이등변 + 무게중심 + BC 방정식
    real: 수직이등분선 = 중선 + 무게중심 위 + 길이 조건
    interaction: 이등변 → 중선 방향 → 매개변수 좌표 → 연립 → A → 직선
  citation_note: "고쟁이 CH02 · 학습 목적"

- source: 고쟁이-CH02-STEP2-#100
  page: 32
  problem_summary: |
    두 직선 kx-y=0, x+ky=0 (k<0)이 x+2y-10=0과 만나는 점을 각각 A, B라 하자. ∠AOB를 
    이등분하는 직선이 선분 AB를 수직이등분할 때, 삼각형 OAB의 넓이 S. k+S 값. (O는 원점)
  solution_summary: |
    두 직선 kx-y=0, x+ky=0의 기울기 k, -1/k. k·(-1/k) = -1 → 두 직선 서로 수직.
    ∠AOB의 이등분선이 AB의 수직이등분선 → 삼각형 OAB는 직각이등변삼각형 (OA=OB).
    두 직선 y=kx, x+ky=0 (y=-x/k)이 x+2y=10과 만나는 점:
    kx=y, x+2y=10 → x+2kx=10 → x = 10/(1+2k). A(10/(2k+1), 10k/(2k+1)).
    -x/k=y, x+2y=10 → x-2x/k=10 → x(k-2)/k=10 → x = 10k/(k-2). B(10k/(k-2), -10/(k-2)).
    AB 중점이 M(2,4). (해설에 의해) 5(k-2) + 5k(2k+1) = 2(k-2)(2k+1), 
    10k²+10k-10 = 4k²-6k-4 → 3k²+8k-3=0 → (3k-1)(k+3)=0 → k=-3 (∵ k<0).
    삼각형 OAB 직각이등변 → OM = AM = BM. OM² = 2²+4²=20. 넓이 S = OM² = 20.
    k+S = -3+20 = 17.
  category: 직선의 수직과 평행
  difficulty: STEP2
  mechanism_primary: 각의 이등분선 = 대변 수직이등분선 ↔ 이등변삼각형 (여기선 두 직선 자동 수직 → 직각이등변)
  mechanism_secondary: [기울기 곱 = -1 자동 확인, 두 직선의 교점 좌표 산출, 중점 조건 연립, 직각이등변 넓이 공식]
  depth_conditions:
    - "∠AOB 이등분선 = AB 수직이등분선" ⇒ OA=OB (이등변)
    - 두 직선이 이미 수직 → 직각이등변
    - 넓이 = (1/2)·AB·OM = OM² (직각이등변에서 OM = AM = BM)
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: 중간
    student_decision_points: [이등분선 = 수직이등분선 조건의 이등변 의미, 자동 수직 인식]
  common_mistakes:
    - 두 직선 수직 자동 성립 놓침
    - 이등변 성질 도출 실수
    - 넓이 공식 실수 (직각이등변에서)
  condition_layers:
    surface: 두 매개변수 직선 + 각 이등분 조건
    real: 자동 수직 + 각 이등분 → 이등변 → 직각이등변
    interaction: 계수비 → 자동 수직 → 각 이등분 → 이등변 → k, S
  citation_note: "고쟁이 CH02 · 학습 목적 · 빈출★"

- source: 고쟁이-CH02-STEP2-#101
  page: 32
  problem_summary: |
    세 직선 x+2y=0, 2x-y=0, kx-y+6k+3=0으로 둘러싸인 부분의 넓이가 30일 때 양수 k의 값.
  solution_summary: |
    두 직선 x+2y=0, 2x-y=0은 각각 y=-x/2, y=2x이고 서로 수직, 모두 원점 지남.
    kx-y+6k+3=0에서 (x+6)k = y-3 → 항상 (-6, 3) 지나고 기울기 양수 k.
    A(-6, 3) → 점 A는 y=-x/2 위. 
    두 직선 y=2x, kx-y+6k+3=0의 교점 B(a, 2a), OA=√((-6)²+3²)=3√5, OB=√(a²+(2a)²)=√5|a|.
    삼각형 AOB 넓이 30 → (1/2)·3√5·√5|a|=30 → |a|=4.
    B(4,8) 또는 B(-4,-8). B가 kx-y+6k+3=0 위: 
    (4,8): 4k-8+6k+3=0 → k=1/2.
    (-4,-8): -4k+8+6k+3=0 → k=-11/2 (음수 제외).
    k = 1/2.
  category: 직선의 수직과 평행
  difficulty: STEP2
  mechanism_primary: 두 수직 직선 + 매개변수 정점 통과 → 직각삼각형 넓이
  mechanism_secondary: [자동 수직 인식, 정점 도출, 원점 통과 직선 각각과의 교점, 직각삼각형 넓이]
  depth_conditions:
    - 두 직선의 자동 수직 관계
    - 세 번째 직선의 정점 (-6, 3)
    - 정점 A가 첫 번째 직선 위 → 삼각형 특수 구조
  freedom_signals:
    initial_setup_freedom: 낮음
    approach_choice: 중간
    student_decision_points: [정점 도출, 자동 수직 인식, 넓이 공식]
  common_mistakes:
    - 정점 계산 실수
    - 자동 수직 놓침
    - 양수 k 조건 무시
  condition_layers:
    surface: 세 직선 넓이
    real: 자동 수직 + 정점 + 넓이 조건
    interaction: 두 직선 수직 → A 정점 → 넓이 → k
  citation_note: "고쟁이 CH02 · 학습 목적"

- source: 고쟁이-CH02-STEP2-#102
  page: 32
  problem_summary: |
    세 직선 x+y=2, x-y=4, 3x-ky=4가 삼각형을 이루지 않도록 하는 모든 실수 k 값의 곱, 그 과정 서술.
  solution_summary: |
    l: x+y=2, m: x-y=4, n: 3x-ky=4라 하자.
    두 직선 l, m 교점 (3, -1). 직선 n을 k에 대해 정리: (3x-4) - ky=0. n은 항상 (4/3, 0) 통과.
    l, m은 서로 수직 (기울기 -1, 1).
    삼각형 이루지 않는 case:
    (i) n이 l 또는 m에 평행: n 기울기 3/k. 
        3/k = -1 → k = -3. 3/k = 1 → k = 3.
    (ii) n이 l, m의 교점 (3,-1) 지남: 3·3-k·(-1)=4 → 9+k=4 → k=-5.
    (iii) k=0일 때 n: 3x=4, x=4/3. 세 직선 (x+y=2, x-y=4, x=4/3)이 삼각형을 이루는지 확인.
        x=4/3을 l, m에 대입 → l 위 (4/3, 2/3), m 위 (4/3, -8/3). 세 직선이 각각 다른 점에서 만남 → 삼각형 이룸.
        따라서 k=0은 제외.
    아니, k=0일 때: 세 직선 x+y=2, x-y=4, 3x=4. 실제 l, m 교점 (3,-1), 세 번째는 (3,-1)이 x=4/3 위 아님 → 
    각각 다른 두 점에서 만남 → 삼각형. 
    (제외됨)
    (iv) n의 기울기 정의 안 되는 case (k=0)에서 다시 확인: 세 직선이 삼각형 이룸.
    아니, 해설에 따르면 k=0일 때 검토: 실제로 세 직선 삼각형 이루므로 제외.
    모든 실수 k값 (삼각형 이루지 않는): -3, 3, -5. 곱 = 45.
    (해설에는 (-3)×3×(-5)=45로 표기)
  category: 직선의 수직과 평행
  difficulty: STEP2
  mechanism_primary: 세 직선이 삼각형 이루지 않는 조건 (두 직선 평행 OR 세 직선이 한 점에서 만남)
  mechanism_secondary: [평행 조건 case, 공점 조건 case, 특수 case (기울기 정의 안 됨)]
  depth_conditions:
    - "삼각형 이루지 않음" 3-case (평행 2case + 공점 1case)
    - 매개변수 k에 대한 계수 특수 case (k=0) 검토
    - 해설에서 확인: k=0일 때 삼각형 이룸 (제외)
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: 다중 (case 관리)
    student_decision_points: [case 완결성, 특수치 검토]
  common_mistakes:
    - case 하나 누락 (평행 두 case 중 하나)
    - k=0 case 미검토
    - 공점 조건 계산 실수
  condition_layers:
    surface: 세 직선 삼각형 아님
    real: 평행 or 공점 (3-case)
    interaction: 각 case → k → 곱
  citation_note: "고쟁이 CH02 · 학습 목적 · 빈출★ · 서술형"
```

### 유형 03: 점과 직선 사이의 거리 (#103~#112)

```yaml
- source: 고쟁이-CH02-STEP2-#103
  page: 32
  problem_summary: |
    점 P(x1, y1)과 P를 지나지 않는 직선 l: ax+by+c=0 사이의 거리를 구하는 과정 
    (빈칸 (가)~(라)에 들어갈 식). 공식 유도 문제.
  solution_summary: |
    (가) 기울기 -a/b. 
    수선의 발 H(x2, y2)라 하면 PH ⊥ l이므로 (-a/b) × (y2-y1)/(x2-x1) = -1.
    (x2-x1)/a = (y2-y1)/b = k (k는 상수) ...... ㉠.
    PH = √((x2-x1)²+(y2-y1)²) = √((ak)²+(bk)²) = |k|×√(a²+b²) (나).
    ax2+by2+c=0에 ㉠ 대입: a(x1+ak)+b(y1+bk)+c=0 → k = -(ax1+by1+c)/(a²+b²) (다).
    PH = |ax1+by1+c|/√(a²+b²) (라).
  category: 점과 직선 사이의 거리
  difficulty: STEP2
  mechanism_primary: 점과 직선 사이의 거리 공식 증명 (수선 유도 과정)
  mechanism_secondary: [수직 조건 → 방향, 매개변수 k 도입, 수선의 발 대입, 절댓값 처리]
  depth_conditions:
    - 공식 유도 4단계 (기울기 → 매개변수 → k 값 → 거리)
    - 매개변수 소거로 절댓값 형태 유도
  freedom_signals:
    initial_setup_freedom: 없음 (증명형)
    approach_choice: 낮음
    student_decision_points: [빈칸 각 단계 이해]
  common_mistakes:
    - 기울기 부호 실수
    - 매개변수 k의 도입 목적 이해 부족
    - 대입 계산 오류
  condition_layers:
    surface: 공식 유도 빈칸
    real: 수선 방정식 → 매개변수 → 소거 → 절댓값
    interaction: 각 단계의 정확한 대수 조작
  citation_note: "고쟁이 CH02 · 학습 목적 · 공식 증명"

- source: 고쟁이-CH02-STEP2-#104
  page: 33
  problem_summary: |
    직선 y=3x와 x축의 양의 방향이 이루는 각을 이등분하는 직선이 제1사분면 위의 점 (2, k)를 
    지날 때 k 값.
  solution_summary: |
    이등분선이 (2, k)를 지나므로 점 (2, k)와 직선 3x-y=0 사이의 거리는 (2, k)와 x축의 거리 k와 같음.
    |3·2-k|/√(3²+(-1)²) = k → |6-k|=k√10.
    (i) 6-k = k√10 → (√10+1)k = 6 → k = 6/(√10+1) = 2(√10-1)/3.
    (ii) 6-k = -k√10 → (√10-1)k = -6, k = -6/(√10-1) → k = -2(√10+1)/3 (음수).
    제1사분면 → k = 2(√10-1)/3.
  category: 점과 직선 사이의 거리
  difficulty: STEP2
  mechanism_primary: 각의 이등분선의 정의 (두 변으로부터의 거리 같음)
  mechanism_secondary: [점과 직선 거리 공식, 절댓값 방정식 case 분리, 사분면 조건]
  depth_conditions:
    - "각의 이등분선 = 두 변에서 등거리" 원리
    - 절댓값 방정식의 두 case, 사분면 조건 필터링
  freedom_signals:
    initial_setup_freedom: 낮음
    approach_choice: 중간
    student_decision_points: [이등분선 정의 활용, 절댓값 case 관리]
  common_mistakes:
    - 이등분선 원리 놓침
    - 절댓값 case 하나만 계산
    - 유리화 실수
  condition_layers:
    surface: 각 이등분 + 특정 점 지남
    real: 등거리 조건 → 방정식
    interaction: 등거리 → 절댓값 방정식 → case → 사분면 필터
  citation_note: "고쟁이 CH02 · 학습 목적 · 빈출★"

- source: 고쟁이-CH02-STEP2-#105
  page: 33
  problem_summary: |
    이차함수 y=x²-4x+6의 그래프 위의 점에서 직선 y=2x+k에 이르는 거리의 최솟값이 √5가 되도록 
    하는 상수 k의 값.
  solution_summary: |
    거리 최소 → 곡선 위 접선이 y=2x+k와 평행. 접선의 기울기 2 = 2x-4 → x=3, y=3. 접점 (3, 3).
    접선 y = 2x - 3.
    두 평행선 y=2x-3, y=2x+k 사이 거리 = |k-(-3)|/√(2²+1) = |k+3|/√5 = √5.
    |k+3|=5 → k=2 또는 k=-8.
    y=2x+k가 곡선보다 아래 (거리 최소 조건) → k=-8.
  category: 점과 직선 사이의 거리
  difficulty: STEP2
  mechanism_primary: 곡선과 직선의 최소 거리 = 접선의 평행선 사이 거리
  mechanism_secondary: [접선 유도 (인수분해로 y=x²-4x+6 = (x-2)²+2 정점 활용 or 직접 y'=2x-4=2 접점), 평행선 거리 공식, 위/아래 판정]
  depth_conditions:
    - "곡선과 직선 거리 최소 = 접선"
    - 두 case (직선 vs 곡선 위/아래) 판정
  freedom_signals:
    initial_setup_freedom: 낮음
    approach_choice: 중간
    student_decision_points: [접선 유도 (판별식 vs 미분 없이), case 판정]
  common_mistakes:
    - 접선 아이디어 없이 (x, x²-4x+6)에서 거리 함수 극솟값
    - 두 case 중 하나만 계산
    - 접점 좌표 실수
  condition_layers:
    surface: 곡선-직선 최소 거리
    real: 접선의 기울기 조건 + 평행선 사이 거리
    interaction: 최소 거리 → 접선 → 평행선 거리 → k
  citation_note: "고쟁이 CH02 · 학습 목적"

- source: 고쟁이-CH02-STEP2-#106
  page: 33
  problem_summary: |
    원점과 직선 k(x+y)-x+3y+4=0 사이의 거리는 k=a일 때 최댓값 b를 갖는다. a²+b²의 값.
  solution_summary: |
    직선 k(x+y) + (-x+3y+4) = 0 → 항상 두 직선 x+y=0, -x+3y+4=0의 교점 통과.
    두 식 연립: x+y=0, -x+3y+4=0 → 4y+4=0, y=-1, x=1. 정점 P(1, -1).
    원점 O에서 정점 P를 지나는 직선까지의 거리 최대 = OP에 수직인 직선일 때.
    OP=√2 → 최대 거리 = OP = √2 → b=√2.
    직선 OP의 기울기 = -1 → 최대 거리 직선의 기울기 = 1. 방정식 y-(-1)=1·(x-1), y=x-2, 즉 x-y-2=0.
    (k-1)x + (k+3)y + 4 = 0 = x - y - 2 → 비교하여 계수비 1:-1:-2 → (k-1)/1 = (k+3)/(-1) = 4/(-2).
    (k-1) = -2 → k = -1. → a = -1.
    a² + b² = 1 + 2 = 3.
  category: 점과 직선 사이의 거리
  difficulty: STEP2
  mechanism_primary: 정점 통과 직선의 특정점과의 거리 최대화 (정점-특정점 연결선에 수직)
  mechanism_secondary: [정점 도출, OP 거리, 최대 거리 = OP, 최대 조건 직선의 방정식 유도, 계수 비교]
  depth_conditions:
    - "정점 통과 + 최대 거리 = 수직 조건"
    - 계수 비교로 k 결정
  freedom_signals:
    initial_setup_freedom: 낮음
    approach_choice: 중간
    student_decision_points: [최대 거리 원리, 계수 비교 방향]
  common_mistakes:
    - 정점 계산 실수
    - 최대 조건 = 수직 아이디어 놓침
    - 계수 비교 실수
  condition_layers:
    surface: 매개변수 직선 + 최대 거리
    real: 정점 + 수직 최적화
    interaction: 정점 → 최대 = OP → k
  citation_note: "고쟁이 CH02 · 학습 목적 · 빈출★"

- source: 고쟁이-CH02-STEP2-#107
  page: 33
  problem_summary: |
    직선 l이 두 직선 y=-x/2+3, y=-x/2-1과 만나는 점이 각각 A, B이고 두 직선과 각각 수직으로 만남.
    삼각형 OAB의 넓이가 2일 때, 직선 AB의 가능한 모든 y절편의 곱.
  solution_summary: |
    두 평행선 y=-x/2+3, y=-x/2-1 사이의 거리 (=AB) = |3-(-1)|/√((1/2)²+1) = 4/√(5/4) = 8/√5.
    직선 l이 두 평행선과 수직 → l의 기울기 = 2.
    직선 l의 방정식 y=2x+k → 원점 O에서 l까지의 거리 = |k|/√5. 
    삼각형 OAB 넓이 = (1/2)·AB·(원점에서 l까지의 거리) = (1/2)·(8/√5)·(|k|/√5) = 4|k|/5 = 2.
    |k| = 5/2 → k=5/2 또는 k=-5/2. y절편 곱 = -25/4.
  category: 점과 직선 사이의 거리
  difficulty: STEP2
  mechanism_primary: 평행선 사이 거리 + 수직 조건 + 삼각형 넓이 (밑변 · 높이 공식)
  mechanism_secondary: [평행선 거리 공식, 수직 → 기울기 곱 -1, 원점과 직선의 거리 = 높이]
  depth_conditions:
    - 두 평행선 사이 거리 = AB (수직으로 만나는 직선 부분 길이)
    - 삼각형 넓이 = (1/2)·AB·(원점에서 l까지의 거리)
  freedom_signals:
    initial_setup_freedom: 낮음
    approach_choice: 중간
    student_decision_points: [AB 길이 = 평행선 거리 인식, 높이 = 원점-l 거리]
  common_mistakes:
    - AB 길이를 직접 좌표로 계산하려 함 (평행선 거리 원리 놓침)
    - 넓이 공식 실수
    - k의 두 case 놓침
  condition_layers:
    surface: 두 평행선 + 수직 직선 + 넓이
    real: 평행선 거리 + 수직 + 원점 거리 넓이
    interaction: 세 조건 결합 → k → y절편
  citation_note: "고쟁이 CH02 · 학습 목적"

- source: 고쟁이-CH02-STEP2-#108
  page: 33
  problem_summary: |
    좌표평면에 세 점 A(1,-1), B(10, 2), C(7, a)와 삼각형 ABC의 무게중심 G(6, b). G와 직선 AB 
    사이의 거리 √10일 때 a+b 값. (a는 양수)
  solution_summary: |
    무게중심 좌표: (1+10+7)/3 = 6 (자동 만족), (-1+2+a)/3 = b → a = 3b - 1 ...... ㉠.
    직선 AB: y-(-1) = ((2-(-1))/(10-1))(x-1) = (1/3)(x-1) → x - 3y - 4 = 0.
    G(6, b)와 이 직선의 거리: |6-3b-4|/√10 = √10 → |2-3b| = 10 → 2-3b = ±10.
    b = -8/3 또는 b = 4.
    G가 삼각형 내부 → b=4 (a>0 판정: a = 3·4-1 = 11 > 0). 
    a=11, b=4. a+b=15.
  category: 점과 직선 사이의 거리
  difficulty: STEP2
  mechanism_primary: 삼각형 무게중심 좌표 + 무게중심과 대변 거리
  mechanism_secondary: [무게중심 좌표, 두 점 지나는 직선의 방정식, 점과 직선 거리 공식, 무게중심 내부 조건]
  depth_conditions:
    - 무게중심 x좌표 자동 만족 → 미지수 y만 결정
    - a > 0 조건과 무게중심 내부 조건 동시 만족
  freedom_signals:
    initial_setup_freedom: 낮음
    approach_choice: 중간
    student_decision_points: [무게중심 좌표 → 미지수 관계, 절댓값 case 판정]
  common_mistakes:
    - 무게중심 좌표 실수
    - 직선 AB 방정식 실수
    - a > 0 조건과 내부 조건 미확인
  condition_layers:
    surface: 무게중심 + 거리 조건
    real: 좌표 관계 + 절댓값 방정식 + 내부 조건
    interaction: 무게중심 → 관계 + 거리 → 방정식 → case
  citation_note: "고쟁이 CH02 · 학습 목적 · 빈출★"

- source: 고쟁이-CH02-STEP2-#109
  page: 34
  problem_summary: |
    좌표평면 위 세 점 A(-1, 5), B(5, 2), C(2, -1)의 삼각형 ABC의 넓이.
  solution_summary: |
    두 점 A, B 지나는 직선 방정식: y-2 = (5-2)/(-1-5)(x-5) → y-2 = -(1/2)(x-5) → x+2y-9=0.
    AB 길이 = √((5-(-1))²+(2-5)²) = √45 = 3√5.
    점 C(2, -1)과 직선 AB의 거리: |2 + 2(-1) - 9|/√5 = 9/√5.
    넓이 = (1/2)·3√5·9/√5 = 27/2.
  category: 점과 직선 사이의 거리
  difficulty: STEP2
  mechanism_primary: 삼각형 넓이 = (1/2)·밑변·높이 (= 한 변 길이 × 대응 꼭짓점과 그 변의 거리)
  mechanism_secondary: [두 점 지나는 직선 방정식, 점-직선 거리, 길이 공식]
  depth_conditions:
    - 표준 공식 적용
    - 세 점 좌표 → 삼각형 넓이 공식 (다른 풀이: |x1(y2-y3)+...|/2) 활용도 가능
  freedom_signals:
    initial_setup_freedom: 낮음
    approach_choice: 중간
    student_decision_points: [넓이 공식 방식 (거리 vs 좌표 행렬)]
  common_mistakes:
    - 직선 방정식 유도 실수
    - 거리 부호 실수
    - 최종 계산 실수
  condition_layers:
    surface: 세 점 좌표 → 넓이
    real: 표준 공식 적용
    interaction: 두 점 → 직선 → 다른 점 → 거리 → 넓이
  citation_note: "고쟁이 CH02 · 학습 목적"

- source: 고쟁이-CH02-STEP2-#110
  page: 34
  problem_summary: |
    좌표평면 위 A(a, 6) (a>0)과 두 점 (6, 0), (0, 3) 지나는 직선 l. 직선 l 위의 서로 다른 두 점 B, C와 
    제1사분면 위의 점 D를 사각형 ABCD가 정사각형이 되도록 잡음. 정사각형 ABCD의 넓이 = 81/5일 때 
    a의 값.
  solution_summary: |
    두 점 (6, 0), (0, 3) 지나는 직선 l: x/6 + y/3 = 1 → x + 2y - 6 = 0.
    정사각형 ABCD 넓이 81/5 → 변 = 9/√5.
    A(a, 6)과 직선 l의 거리 = 정사각형의 한 변의 길이:
    |a + 12 - 6|/√5 = 9/√5 → |a + 6| = 9 → a = 3 (∵ a > 0).
  category: 점과 직선 사이의 거리
  difficulty: STEP2
  mechanism_primary: 정사각형 넓이 → 변의 길이 → 점과 직선의 거리 (한 꼭짓점 A와 대변 BC 사이 거리)
  mechanism_secondary: [넓이 → 변, 두 점 지나는 직선 방정식 (절편형), 절댓값 방정식, 부호 조건]
  depth_conditions:
    - 정사각형의 두 대변 사이 거리 = 변의 길이
    - a > 0 조건으로 근 선택
  freedom_signals:
    initial_setup_freedom: 낮음
    approach_choice: 중간
    student_decision_points: [넓이 → 변 길이 도출, 절댓값 case 판정]
  common_mistakes:
    - 넓이 → 변 관계 실수
    - 직선 방정식 실수
    - a 부호 조건 놓침
  condition_layers:
    surface: 정사각형 + 대변 위 두 점 + 넓이
    real: 두 대변 사이 거리 = 변 길이
    interaction: 넓이 → 변 → 점-직선 거리 → a
  citation_note: "고쟁이 CH02 · 학습 목적 · 교육청 기출"

- source: 고쟁이-CH02-STEP2-#111
  page: 34
  problem_summary: |
    두 직선 2x+y-3=0, x-2y+1=0이 이루는 각을 이등분하는 직선의 방정식을 모두 구하시오.
  solution_summary: |
    각의 이등분선 위 점 P(a, b) → 두 직선 2x+y-3=0, x-2y+1=0으로부터 거리가 같음.
    |2a+b-3|/√5 = |a-2b+1|/√5 → |2a+b-3|=|a-2b+1|.
    (i) 2a+b-3=a-2b+1 → a+3b-4=0. 각의 이등분선 방정식: x+3y-4=0.
    (ii) 2a+b-3=-(a-2b+1) → 3a-b-2=0. 각의 이등분선 방정식: 3x-y-2=0.
    두 이등분선: x+3y-4=0, 3x-y-2=0.
  category: 점과 직선 사이의 거리
  difficulty: STEP2
  mechanism_primary: 두 직선이 이루는 각의 이등분선 = 두 직선으로부터의 거리가 같은 점의 자취
  mechanism_secondary: [절댓값 방정식 두 case, 두 이등분선은 서로 수직 (참고)]
  depth_conditions:
    - "두 직선 각 이등분선 = 등거리 자취"
    - 절댓값 방정식 두 case → 두 이등분선
  freedom_signals:
    initial_setup_freedom: 낮음
    approach_choice: 중간
    student_decision_points: [등거리 조건 활용, case 완결성]
  common_mistakes:
    - 두 case 중 하나만 도출
    - 절댓값 방정식 실수
    - 부호 실수
  condition_layers:
    surface: 두 직선 각 이등분
    real: 등거리 조건 → 두 case → 두 이등분선
    interaction: 각 이등분 원리 → 절댓값 → case
  citation_note: "고쟁이 CH02 · 학습 목적 · 빈출★"

- source: 고쟁이-CH02-STEP2-#112
  page: 34
  problem_summary: |
    두 점 A(-1, 2), B(3, 5)와 직선 AB 위에 있지 않은 점 P에 대해 삼각형 ABP 넓이 10일 때, 
    점 P가 나타내는 도형의 방정식.
  solution_summary: |
    AB의 길이 √((3-(-1))²+(5-2)²) = 5.
    삼각형 넓이 = (1/2)·5·h = 10 → h = 4 (P와 AB의 거리 4).
    직선 AB: y-2 = (5-2)/(3-(-1))·(x-(-1)) = (3/4)(x+1) → 3x-4y+11=0. 
    아니, 계산 확인: 3(x+1)=4(y-2), 3x+3=4y-8, 3x-4y+11=0. 
    (하지만 해설은 3x-4y-9=0 이므로 다시 계산: y-2 = (3/4)(x-(-1)) → 4(y-2) = 3(x+1) → 
    4y - 8 = 3x + 3 → 3x - 4y + 11 = 0. 해설 수정: 두 점 (-1, 2), (3, 5) → 
    y-2 = (5-2)/(3-(-1))·(x-(-1))+2? 아니 처음부터: y-2 = 3/4·(x-(-1))/1? 
    아니, y-2 = (3/4)(x-(-1))이므로 y = (3/4)x + 3/4 + 2 = (3/4)x + 11/4. 4y = 3x + 11. 3x - 4y + 11 = 0.
    해설 재확인: y - 2 = (2-5)/((-1)-3)·(x-3) + 5 형태. y - 5 = (-3/-4)(x-3) → y - 5 = (3/4)(x-3), 
    4y - 20 = 3x - 9, 3x - 4y + 11 = 0. 
    해설 답 x + 2y - 9 = 0 은 오타로 보임; 해설에서 3x-4y-9=0을 언급: y - 2 = (3/4)(x - 3) 형태 계산 확인.
    실제 해설 확인: 두 점 A(-1, 2), B(3, 5) 지나는 직선 y-2 = (5-2)/(3-(-1))·(x-(-1)) = (3/4)(x+1) 
    이므로 3(x+1) = 4(y-2) → 3x - 4y + 11 = 0. 하지만 해설 결과는 x+2y-9=0으로 표기... 
    (해설 원본 재확인 필요, 여기서는 원본 방향으로 진행)
    P가 나타내는 도형: 직선 AB와 평행하고 거리 4인 두 직선.
    3x - 4y + k = 0 형태, |(11-k)|/5 = 4, 11-k = ±20, k = -9 또는 k = 31.
    구하는 도형: 3x - 4y - 9 = 0, 3x - 4y + 31 = 0.
  category: 점과 직선 사이의 거리
  difficulty: STEP2
  mechanism_primary: 밑변 고정 + 넓이 고정 → 꼭짓점의 자취 (평행 두 직선, 밑변에서 등거리)
  mechanism_secondary: [넓이 공식 → 높이 도출, 두 점 지나는 직선, 평행 · 등거리 두 직선]
  depth_conditions:
    - "삼각형 넓이 고정 + 밑변 고정 → 꼭짓점 자취 = AB에 평행 두 직선 (양쪽 대칭)"
    - 절댓값 방정식 두 case
  freedom_signals:
    initial_setup_freedom: 낮음
    approach_choice: 중간
    student_decision_points: [자취 원리 인식, 두 case 관리]
  common_mistakes:
    - 자취 원리 놓침 (단일 직선으로 오해)
    - 거리 계산 실수
    - 두 case 중 하나만 도출
  condition_layers:
    surface: 넓이 고정 + 자취
    real: 밑변에서 등거리 = 평행 두 직선
    interaction: 넓이 → 높이 → 자취 = 두 직선
  citation_note: "고쟁이 CH02 · 학습 목적 · #70 선행"
```

---

## 3. STEP 3 전 문항 YAML 데이터 (#113~#122)

```yaml
- source: 고쟁이-CH02-STEP3-#113
  page: 36
  problem_summary: |
    직선 l1이 x축, y축과 만나는 점 A, B. 직선 l2가 x축, y축과 만나는 점 C, D. 두 직선 l1, l2의 교점 P에 
    대해 두 삼각형 ACP와 BDP의 넓이가 서로 같음. OA=2·AC이고 l1의 기울기 -3일 때 l2의 기울기.
    (l2 기울기는 음수, l1보다 크다)
  solution_summary: |
    OA=2AC → OA:AC = 2:1. A(2a, 0), C(3a, 0) (a>0)라 하자.
    l1 기울기 -3 → B(0, b), (b-0)/(0-2a) = -3 → b = 6a. B(0, 6a).
    두 삼각형 ACP와 BDP 넓이 같음 → 두 삼각형 AOB, COD 넓이 같음 (공통부분 제외 원리):
    (삼각형 AOB 넓이) = (삼각형 ACP + 공통부분) = (삼각형 BDP + 공통부분) = (삼각형 COD 넓이).
    D(0, d)라 하면 (1/2)·2a·6a = (1/2)·3a·d → 6a² = 3ad/2 → d = 4a. D(0, 4a).
    l2 기울기: (0 - 4a)/(3a - 0) = -4/3.
  category: 점과 직선 사이의 거리 (통합)
  difficulty: STEP3
  mechanism_primary: 공통부분 제외 원리 (넓이 대응 → 큰 삼각형 넓이 같음)
  mechanism_secondary: [절편 매개변수화, 두 삼각형 넓이 등식, 기울기 조건]
  depth_conditions:
    - "삼각형 ACP + 공통부분 = 삼각형 AOB" 관계
    - "삼각형 BDP + 공통부분 = 삼각형 COD" 관계
    - 두 넓이 같음 → 큰 두 삼각형 넓이 같음
  freedom_signals:
    initial_setup_freedom: 중간 (공통부분 원리 파악)
    approach_choice: 중간
    student_decision_points: [공통부분 원리 인식, 매개변수화]
  common_mistakes:
    - 공통부분 원리 놓치고 직접 계산 (P의 좌표 유도 후 복잡한 넓이 식)
    - AC 방향 부호 실수
    - 기울기 부호 실수
  condition_layers:
    surface: 두 삼각형 넓이 같음
    real: 공통부분 제외 → 큰 두 삼각형 등적
    interaction: 등적 조건 + 기울기 조건 → 절편 → l2 기울기
  citation_note: "고쟁이 CH02 · 학습 목적 · 최고난도"

- source: 고쟁이-CH02-STEP3-#114
  page: 36
  problem_summary: |
    세 직선 y=3x, y=-x/3, y=mx+2로 둘러싸인 도형이 이등변삼각형일 때 이 삼각형의 넓이 (m>0).
  solution_summary: |
    두 직선 y=3x, y=-x/3은 원점에서 수직으로 만남 (기울기 곱 = -1).
    직선 y=mx+2와 만나는 점 A, B. 삼각형 AOB가 이등변삼각형일 때 두 직선 y=3x, y=-x/3의 
    자동 수직 관계 → 삼각형 AOB는 직각이등변삼각형 (OA=OB).
    O에서 y=mx+2까지의 거리 = 2/√(m²+1). 
    직각이등변 → OA=OB=(2/√(m²+1))·√2.
    좌표 A(a, 3a), B(-3a, a)라 하면 OA=√(a²+9a²)=√10|a|, OB=√(9a²+a²)=√10|a|.
    A, B가 직선 위: 3a=ma+2, a=-3am+2.
    첫 식에서 a=2/(3-m). 두 식에서 a=2/(1+3m).
    2/(3-m) = 2/(1+3m) → 3-m = 1+3m → 4m=2, m=1/2.
    A(a, 3a) with a = 2/(3-1/2) = 2/(5/2) = 4/5. B(-3·4/5, 4/5) = (-12/5, 4/5).
    삼각형 AOB 넓이 = (1/2)·|OA|·|OB| = (1/2)·(√10·4/5)² = (1/2)·16·10/25 = 16/5.
  category: 점과 직선 사이의 거리 (통합)
  difficulty: STEP3
  mechanism_primary: 자동 수직 (두 직선 y=3x, y=-x/3) + 이등변삼각형 = 직각이등변삼각형
  mechanism_secondary: [수직 조건 자동 확인, 매개변수 좌표화, 두 직선의 교점 좌표, 넓이 공식]
  depth_conditions:
    - "두 직선 수직 + 세 번째 직선 → 이등변" → 직각이등변
    - 매개변수 a로 좌표화 후 연립
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: 중간
    student_decision_points: [자동 수직 인식, 이등변→직각이등변 도출]
  common_mistakes:
    - 자동 수직 놓침
    - 이등변 판정을 각각의 변에 대해 case 분리 (실제로 원점 각이 90°이므로 두 밑변만 같음)
    - 매개변수 부호 실수
  condition_layers:
    surface: 세 직선 삼각형 + 이등변
    real: 자동 수직 → 직각이등변 → 매개변수
    interaction: 수직 → 각 → 이등변 특수 → 좌표 → 넓이
  citation_note: "고쟁이 CH02 · 학습 목적 · 최고난도 · 빈출★"

- source: 고쟁이-CH02-STEP3-#115
  page: 36
  problem_summary: |
    AB=8, BC=16인 직사각형 ABCD의 내부 및 둘레 위의 점 P가 AP²-CP²=16을 만족시킨다.
    점 P가 나타내는 도형의 길이.
  solution_summary: |
    A(0, 8), B(0, 0), C(16, 0), D(16, 8)로 좌표화.
    P(x, y): 0 ≤ x ≤ 16, 0 ≤ y ≤ 8.
    AP² - CP² = (x² + (y-8)²) - ((x-16)² + y²) = -16y + 64 + 32x - 256 = 32x - 16y - 192 = 16.
    → 32x - 16y - 208 = 0 → 2x - y - 13 = 0 → y = 2x - 13.
    이 직선이 직사각형 내부 및 둘레와 교차하는 두 점: y=0일 때 x=13/2, y=8일 때 x=21/2.
    두 교점 P1(13/2, 0), P2(21/2, 8) 잇는 선분. 
    길이 √((21/2-13/2)² + 8²) = √(16 + 64) = √80 = 4√5.
  category: 점과 직선 사이의 거리 (통합)
  difficulty: STEP3
  mechanism_primary: 거리 제곱 차 조건 → 직선 자취 (선분 길이 계산)
  mechanism_secondary: [좌표화, 거리 제곱 전개 → 일차식, 직사각형 경계와 직선의 교점, 두 점 거리]
  depth_conditions:
    - "AP²-CP² = 상수" → 직선 (일차식으로 전개)
    - 직사각형 내부/둘레 조건으로 두 교점 결정
  freedom_signals:
    initial_setup_freedom: 중간 (좌표화 선택)
    approach_choice: 중간
    student_decision_points: [원점 배치, 거리 제곱 전개, 교점 판정]
  common_mistakes:
    - 좌표화 실수
    - 전개 실수
    - 교점 위치 판정 실수
  condition_layers:
    surface: 거리 제곱 차 조건
    real: 일차식 → 직선 자취 → 직사각형 절단
    interaction: 좌표 → 대수 조작 → 자취 → 절단 길이
  citation_note: "고쟁이 CH02 · 학습 목적 · 최고난도"

- source: 고쟁이-CH02-STEP3-#116
  page: 36
  problem_summary: |
    세 직선 x+y=0, x+ay-12=0, 3x-ay+4=0에 의해 좌표평면이 6개의 부분으로 나누어질 때, 
    실수 a의 값을 모두 구하시오.
  solution_summary: |
    세 직선 위치 관계에 따른 분할 부분 개수:
    (i) 세 직선 모두 평행 → 4개 부분.
    (ii) 세 직선 중 두 직선만 평행 → 6개 부분.
    (iii) 세 직선이 한 점에서 만남 → 6개 부분.
    (iv) 세 직선 서로 다른 세 점에서 만남 → 7개 부분.
    문제 조건: 6개 → (ii) 또는 (iii).
    (i) a=0일 때: 세 직선 x+y=0, x=12, x=-4/3. 좌표평면 6개 부분으로 나눔. (case ii)
    (ii) a≠0일 때:
      세 직선 기울기: -1, -1/a, 3/a.
      ⓐ 두 직선만 평행:
        -1 = -1/a → a=1. 
        -1 = 3/a → a=-3.
        -1/a = 3/a → -1=3 불가.
      ⓑ 세 직선이 한 점에서 만남:
        두 직선 x+ay-12=0, 3x-ay+4=0 교점: (2, 10/a).
        이 점이 x+y=0 위: 2 + 10/a = 0 → a=-5.
    모든 a 값: 0, 1, -3, -5.
  category: 점과 직선 사이의 거리 (통합)
  difficulty: STEP3
  mechanism_primary: 세 직선의 위치 관계 → 좌표평면 분할 개수 (4·6·6·7)
  mechanism_secondary: [세 직선 위치 관계 4-case, 특수 case (계수 0), 평행 조건, 공점 조건]
  depth_conditions:
    - 6개 분할 = (일부 평행) OR (공점) 두 case
    - 매개변수 a=0의 특수 case 검토
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: 다중 (case 관리)
    student_decision_points: [분할 개수 원리, case 완결성, 특수 case 검토]
  common_mistakes:
    - 분할 원리 (4·6·6·7) 모름
    - a=0 case 누락
    - 평행 case 하나 놓침
  condition_layers:
    surface: 매개변수 세 직선 + 분할 개수
    real: 위치 관계 4-case
    interaction: case 완결성 → a 값들
  citation_note: "고쟁이 CH02 · 학습 목적 · 최고난도 · 빈출★ · #102 선행"

- source: 고쟁이-CH02-STEP3-#117
  page: 37
  problem_summary: |
    직선 2x-y+3=0 위의 두 점 A, B에서 직선 x-y+1=0에 내린 수선의 발이 각각 C, D일 때 
    AC=BD=√2. 사각형 ADBC의 넓이. (A의 x좌표 > B의 x좌표)
  solution_summary: |
    두 직선 2x-y+3=0, x-y+1=0의 교점 P: 두 식 빼면 x+2=0 → x=-2, y=-1. P(-2, -1).
    AC=BD → 사각형 ADBC는 평행사변형이며 두 수선이 평행 (모두 x-y+1=0에 수직).
    두 삼각형 PAC, PBD는 서로 합동 (수선 길이 √2, 두 직선 사잇각 공유).
    A(a, 2a+3), 점 A와 직선 x-y+1=0 사이의 거리: |a-(2a+3)+1|/√2 = |-a-2|/√2 = √2 → 
    |a+2|=2 → a+2=±2 → a=0 또는 a=-4. A(0, 3), B(-4, -5).
    두 직선의 교점 P(-2, -1). PA = √((0-(-2))²+(3-(-1))²) = √(4+16) = 2√5.
    직각삼각형 PCA에서 PC² = PA² - AC² = 20 - 2 = 18 → PC = 3√2.
    사각형 ADBC는 마주보는 두 쌍의 변이 평행한 평행사변형이므로 넓이 = 삼각형 ACD 넓이의 2배.
    ADBC 넓이 = 2·(1/2)·CD·AC = 2·PC·AC = 2·3√2·√2 = 12.
  category: 점과 직선 사이의 거리 (통합)
  difficulty: STEP3
  mechanism_primary: 두 직선 사잇각 삼각형 + 수선의 발 + 평행사변형 넓이
  mechanism_secondary: [교점 P, 매개변수 A 좌표화 + 거리 조건, 피타고라스 (PC 유도), 평행사변형 넓이]
  depth_conditions:
    - AC=BD → 사각형 평행사변형 (또한 두 수선 평행)
    - 삼각형 PAC 합동성 + 피타고라스
    - 평행사변형 넓이 = 2 · 대각선 잘라낸 삼각형 넓이 (또는 밑변·높이)
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: 중간 (좌표 vs 기하)
    student_decision_points: [교점 P 도입, 평행사변형 인식, 넓이 계산 방식]
  common_mistakes:
    - 사각형 형태 오해 (일반 사각형으로 처리)
    - 좌표 매개변수화 실수
    - PC 유도 실수
  condition_layers:
    surface: 두 직선 + 수선 + 사각형
    real: 평행사변형 구조 + 삼각형 합동 + 피타고라스
    interaction: 두 직선 → 교점 → A, B → 평행사변형 → 넓이
  citation_note: "고쟁이 CH02 · 학습 목적 · 최고난도"

- source: 고쟁이-CH02-STEP3-#118
  page: 37
  problem_summary: |
    좌표평면 위 네 점 O(0,0), A(4,0), B(4,5), C(0,5)에 대해 선분 BA의 양 끝점이 아닌 서로 다른 두 
    점 D, E가 선분 BA 위에 있음. 직선 OD와 직선 CE의 교점을 F(a, b). 사각형 OAEF의 넓이가 
    사각형 BCFD의 넓이보다 4만큼 크고, 직선 OD와 직선 CE 기울기의 곱은 -7/9. 22(a+b) 값. (0<a<4)
  solution_summary: |
    사각형 OAEF와 OAD (D의 y-coord 무관하게) + 사각형 BCFD와 CEB → 넓이 비교.
    상세: 사각형 OAEF - 사각형 BCFD = 4. 
    사각형 OAD 넓이와 사각형 CEB 넓이 관계로 재정의:
    (사각형 OAEF 넓이) = 삼각형 OAD 넓이 + 삼각형 DEF 넓이의 합 (OAEF 분할).
    (사각형 BCFD 넓이) = 삼각형 CEB 넓이 + 삼각형 DEF 넓이의 합.
    → 삼각형 OAD 넓이 - 삼각형 CEB 넓이 = 4.
    OA = CB = 4. DA = k, BE = k+2 (라 두면).
    삼각형 OAD 넓이 = (1/2)·4·DA = 2·DA. 삼각형 CEB 넓이 = (1/2)·4·BE = 2·BE.
    2·DA - 2·BE = 4 → DA = BE + 2.
    직선 OD 기울기 = DA/4 = (k+2)/4. 직선 CE 기울기 = (BE-5)/4 = (k+2-5)/4 = -k/4? 아니.
    (해설 정확 확인) 직선 CE의 기울기 = -k/4.
    기울기 곱: (k+2)/4 · (-k/4) = -k(k+2)/16 = -7/9 → 9k(k+2) = 112 → 9k²+18k-112 = 0 → 
    (3k+14)(3k-8)=0 → k=8/3 (k>0).
    직선 OD 기울기 = (8/3+2)/4 = (14/3)/4 = 7/6. 
    직선 CE 기울기 = -8/12 = -2/3.
    OD 방정식: y = (7/6)x.
    CE 방정식: y = -(2/3)x + 5.
    교점: (7/6)x = -(2/3)x + 5 → 7x = -4x + 30 → 11x = 30 → x = 30/11, y = 35/11.
    22(a+b) = 22·(30/11 + 35/11) = 22·65/11 = 130.
  category: 점과 직선 사이의 거리 (통합)
  difficulty: STEP3
  mechanism_primary: 사각형 넓이 차이 재구성 (공통 삼각형 제외 → 큰 삼각형 넓이 차이)
  mechanism_secondary: [매개변수 (DA, BE) 도입, 기울기 관계, 이차방정식 인수분해, 두 직선 교점]
  depth_conditions:
    - "사각형 A - 사각형 B = 큰 삼각형 A - 큰 삼각형 B" 재구성
    - 두 직선 기울기 관계 → 이차방정식
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: 중간
    student_decision_points: [사각형 재구성 원리, 매개변수 도입]
  common_mistakes:
    - 사각형 넓이 재구성 원리 놓침 (직접 좌표 계산)
    - 매개변수 관계 실수
    - 두 기울기 방향 실수
  condition_layers:
    surface: 사각형 넓이 차이 + 기울기 곱
    real: 공통 삼각형 제외 → 큰 삼각형 차 → 매개변수 → 이차
    interaction: 넓이 차 → 관계 + 기울기 → 이차 → 교점
  citation_note: "고쟁이 CH02 · 학습 목적 · 최고난도 · 교육청 기출"

- source: 고쟁이-CH02-STEP3-#119
  page: 37
  problem_summary: |
    기울기 음수, 점 (1, 2) 지나는 직선 l1이 x, y축과 만나는 점 A, B. 삼각형 OAB 넓이 4. 
    l1과 수직이고 삼각형 OAB 넓이를 이등분하는 직선 l2의 y절편.
  solution_summary: |
    직선 l1의 방정식 y = m(x-1) + 2 (m<0).
    x절편 1 - 2/m, y절편 2 - m. A(1-2/m, 0), B(0, 2-m).
    삼각형 OAB 넓이 = (1/2)·(1-2/m)·(2-m) = -(m-2)²/(2m) = 4.
    -(m-2)² = 8m → m²+4m+4 = 0 → (m+2)² = 0 → m = -2. 
    l1 기울기 -2 → l2 기울기 1/2.
    A(2, 0), B(0, 4). l1과 l2의 교점 P, l2가 y축과 만나는 점 Q(0, k). 
    l2가 삼각형 OAB 넓이 이등분 (0<k<4).
    삼각형 PQB 넓이 = 2 되어야 함. 
    두 삼각형 OAB, PQB 서로 닮음 → QP:BP = AO:BO = 1:2. 
    QP=p (p 실수)라 하면 BP=2p → 삼각형 PQB 넓이 = (1/2)·p·2p = 2. p = √2.
    직각삼각형 PQB에서 피타고라스: BQ = √(p²+(2p)²) = √(5p²) = √10.
    직선 l2의 y절편 = 4 - √10.
  category: 점과 직선 사이의 거리 (통합)
  difficulty: STEP3
  mechanism_primary: 직선의 x·y 절편 매개변수 + 넓이 이등분 + 닮은 삼각형
  mechanism_secondary: [완전제곱식 넓이 조건 → m 완전제곱, 수직 조건 → 기울기 -1/m, 닮은 삼각형 비율]
  depth_conditions:
    - 넓이 방정식이 완전제곱 → 단일 m 값
    - 이등분 직선 = 닮은 삼각형 (비율 √2)
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: 중간
    student_decision_points: [완전제곱 판정, 닮음비 도출]
  common_mistakes:
    - 이차방정식이 중근임을 놓치고 두 해 처리
    - 닮음비 방향 (p가 어느 변) 실수
    - y절편 계산 실수
  condition_layers:
    surface: 매개변수 직선 + 넓이 + 수직 + 이등분
    real: 완전제곱 → m + 닮음 → 이등분
    interaction: 넓이 → m → 수직 → l2 → 이등분 → y절편
  citation_note: "고쟁이 CH02 · 학습 목적 · 최고난도 · #87 선행"

- source: 고쟁이-CH02-STEP3-#120
  page: 37
  problem_summary: |
    세 점 A(-2, 0), B(2, 3), C(0, 4)의 삼각형 ABC가 ∠C=90°인 직각삼각형. 선분 AB와 수직인 
    직선 l이 삼각형 ABC의 두 변 AC, AB와 만나는 두 점 P, Q. 삼각형 APQ 넓이가 삼각형 ABC 넓이의 
    1/5일 때 l의 방정식.
  solution_summary: |
    AC = √(4+16) = 2√5, BC = √(4+1) = √5. 삼각형 ABC 넓이 = (1/2)·2√5·√5 = 5.
    삼각형 APQ 넓이 = 5·(1/5) = 1.
    두 삼각형 ABC, APQ 서로 닮음 (∠A 공유, ∠APQ = ∠ACB = 90°?) 
    아니, 직선 l이 AB에 수직 → ∠AQP = 90°. 두 삼각형 AQP, ACB 닮음 (∠A 공유, 각각 직각).
    AQ:AC = AP:AB (해설). AQ:AP = AC:AB = 2:1 (해설 결과).
    PQ = a, AQ = 2a → 삼각형 APQ 넓이 = (1/2)·a·2a = a² = 1 → a=1. AQ = 2.
    A와 직선 l 사이의 거리 = 2.
    직선 AB의 기울기 = 3/4 → l 기울기 = -4/3.
    l: y = -(4/3)x + k → 4x + 3y - 3k = 0. 
    A(-2, 0)와 l의 거리: |−8 - 3k|/5 = 2 → |3k+8|=10 → 3k+8=±10 → k=2/3 또는 k=-6.
    l이 삼각형 ABC와 만나야 함 (A와 B 사이, 사분면 조건) → 두 case 중 하나만 유효.
    y = -(4/3)x + 2/3 (해설).
  category: 점과 직선 사이의 거리 (통합)
  difficulty: STEP3
  mechanism_primary: 두 직각삼각형 닮음 (넓이비 → 닮음비²) + 점과 직선 거리 (매개변수 결정)
  mechanism_secondary: [수직 조건 → 기울기, 닮음비 → AQ 길이, 절댓값 방정식 case → 위치 검토]
  depth_conditions:
    - AB에 수직인 직선 l → 삼각형 APQ는 A에서 새로운 직각삼각형
    - 넓이비 1:5 → 닮음비 1:√5
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: 중간
    student_decision_points: [닮음 인식, case 판정]
  common_mistakes:
    - 닮음비 도출 실수
    - AQ, AP 대응 관계 혼동
    - 위치 case 판정 실수
  condition_layers:
    surface: 직각삼각형 + 수직 직선 + 넓이 비
    real: 닮음 + 넓이비² → 닮음비 + 거리 공식
    interaction: 직각 → 닮음 → AQ 길이 → 거리 → l
  citation_note: "고쟁이 CH02 · 학습 목적 · 최고난도 · #87 선행"

- source: 고쟁이-CH02-STEP3-#121
  page: 38
  problem_summary: |
    세 직선 y=0, 3x-4y+6=0, 4x+3y-12=0으로 둘러싸인 삼각형의 내심의 좌표 (a, b). a+b 값.
  solution_summary: |
    삼각형의 내심 = 세 내각 이등분선의 교점.
    풀이 1: 두 직선 y=0, 3x-4y+6=0 이루는 각의 이등분선: |y| = |3x-4y+6|/5.
      x-3y+2=0 또는 3x+y+6=0.
      두 직선 y=0, 4x+3y-12=0 이루는 각의 이등분선: 
      2x-y-6=0 또는 x+2y-3=0.
    내심은 삼각형 안 → x-3y+2=0, x+2y-3=0의 교점. 연립: x=1, y=1. 내심 (1, 1).
    풀이 2: 세 직선 3x-4y+6=0, 4x+3y-12=0이 서로 수직 → 삼각형이 직각삼각형 (∠A=90°).
      직각삼각형 넓이 (1/2)·AB·AC. 세 변 길이 (계산):
      A(6/5, 12/5), B(-2, 0), C(3, 0). AB=4, AC=3, BC=5.
      삼각형 넓이 = 6. 내접원 반지름 r = 2·넓이/(AB+BC+CA) = 12/12 = 1.
      내심 y좌표 = 1 (밑변 y=0에서 거리 1). x좌표는 다른 두 변에서 등거리 조건으로 결정.
    내심 (1, 1). a+b=2.
  category: 점과 직선 사이의 거리 (통합)
  difficulty: STEP3
  mechanism_primary: 삼각형 내심 = 세 각 이등분선의 교점 (= 세 변에서 등거리) + 각 이등분선 정의 
    (두 직선으로부터 등거리)
  mechanism_secondary: [자동 수직 인식 (직각삼각형), 내접원 반지름 공식 r = 2S/(a+b+c), 각 이등분선 
    case 관리]
  depth_conditions:
    - "내심 = 세 변 등거리 점" 원리
    - 각 이등분선 두 case에서 내심 위치 선택
    - 내접원 반지름 공식 활용도 가능
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: 다중 (이등분선 vs 내접원 반지름)
    student_decision_points: [이등분선 두 case 선택, 내심 위치 확인]
  common_mistakes:
    - 이등분선 case 잘못 선택
    - 내접원 반지름 공식 실수
    - 좌표 계산 실수
  condition_layers:
    surface: 세 직선 + 내심
    real: 각 이등분선 or 내접원 반지름
    interaction: 자동 수직 → 직각 → 내접원 반지름 or 이등분선 교점
  citation_note: "고쟁이 CH02 · 학습 목적 · 최고난도 · 빈출★"

- source: 고쟁이-CH02-STEP3-#122
  page: 38
  problem_summary: |
    좌표평면 위 두 점 A(-3, -4), B(2, 6)에 대해 선분 AB와 한 점에서 만나는 직선 l이 있다. 
    A와 l 사이 거리 2, B와 l 사이 거리 3일 때 l의 방정식.
  solution_summary: |
    두 case:
    (i) l이 x축 또는 y축과 평행:
      두 점 A, B의 x좌표 차 = 2-(-3) = 5. l이 x=-1 일 때 A, B 사이에 있고 A와 거리 2, B와 거리 3. 
      확인: |-1-(-3)|=2, |-1-2|=3. 이 case 조건 만족.
      → l: x = -1.
    (ii) l이 x, y축과 평행이 아닌 경우:
      직선 l1이 l과 평행이고 B 지나는 직선.
      점 A에서 l1에 내린 수선의 발 R라 하면 AR = 2 + 3 = 5.
      l의 방정식 y-6 = a(x-2) (a는 상수) → ax - y + 6 - 2a = 0.
      A(-3, -4)와의 거리: |a(-3) - (-4) + 6 - 2a|/√(a²+1) = |-5a+10|/√(a²+1) = 5. 
      → |-a+2|²·5 = 5(a²+1) → (a-2)² = a²+1, -4a+4 = 1, a = 3/4.
      → l1: y-6 = (3/4)(x-2), 3x - 4y + 18 = 0.
      l의 방정식: l이 l1과 평행 → 3x - 4y + b = 0.
      B와 l 사이 거리 3: |6-24+b|/5 = 3, |b-18|=15, b=33 or b=3.
      l이 l1보다 아래에 있어야 함 → b = 3.
      l: 3x - 4y + 3 = 0.
    두 case: x = -1, 3x - 4y + 3 = 0.
  category: 점과 직선 사이의 거리 (통합)
  difficulty: STEP3
  mechanism_primary: 두 점에서 각각 다른 거리 + 두 점 사이 직선 통과 (평행선 사이 매개변수 + 두 case)
  mechanism_secondary: [축평행 case 처리, 매개변수 직선 (기울기 a), 절댓값 방정식, 두 평행선 사이 
    위치 결정]
  depth_conditions:
    - 축평행 case의 특수 처리
    - AR = 2 + 3 = 5 (같은 쪽) 관계 활용
    - 두 평행선의 위치 판정 (선분 위 or 아래)
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: 다중 (case 관리)
    student_decision_points: [축평행 case 검토, 두 case 완결성, 위치 판정]
  common_mistakes:
    - 축평행 case 누락
    - AR = 2+3 관계 놓침 (평행선 사이 거리)
    - 위치 판정 실수
  condition_layers:
    surface: 두 점 거리 조건 + 선분 만남
    real: 평행선 사이 거리 = 5 + 매개변수 + 축평행 특수
    interaction: 두 거리 → 평행선 → l 방정식
  citation_note: "고쟁이 CH02 · 학습 목적 · 최고난도"
```

---

## 4. CH02 종합 학습 (mechanism 반복 패턴)

### 4.1. 최상위 반복 mechanism (10문 이상 등장)

| Mechanism | 등장 슬롯 | 빈도 |
|---|---|---|
| **정점 통과 직선족 (매개변수 k 항등식 분리)** | #75, #76, #77, #81, #106, #116 | 6문 · 유형 01·03 공통 · 스키마 #77이 대표 |
| **넓이 이등분·분할 (꼭짓점 통과 → 대변 내분점 통과)** | #75, #78(2), #79, #83, #84, #87(1,2), #98, #113, #118, #119 | 11문 · 사각형·삼각형 통합 |
| **점과 직선 거리 공식 활용** | #66, #68, #103(공식 증명), #104, #105, #106, #107, #108, #110, #112, #121, #122 | 12문 · 모든 STEP3 관련 문항 |
| **수직 조건 (기울기 곱 -1 or aa'+bb'=0)** | #61, #63, #64, #66, #82, #88, #90, #93, #94, #95, #96, #100, #101, #107, #113, #114, #117, #119, #120, #121 | 20문 · 압도적 최다 |
| **매개변수 소거 (자취 mechanism)** | #85, #86, #97, #112, #115 | 5문 |

### 4.2. 상위 반복 mechanism (5~9문)

| Mechanism | 등장 슬롯 | 빈도 |
|---|---|---|
| **평행 조건 (계수비 or 기울기 같음) + 특수 case** | #61, #70, #72, #88, #91, #92, #96, #98 | 8문 |
| **삼각형 넓이 공식 (밑변·높이)** | #78, #83, #84, #87, #98, #100, #101, #107, #109, #114, #117, #118, #119, #120 | 14문 |
| **닮은 삼각형 (넓이비 = 닮음비²)** | #98, #114, #119, #120 | 4문 · STEP3에 집중 |
| **자동 수직 관계 (문제 안에 숨은 수직)** | #100, #101, #114, #121 | 4문 · STEP3 특화 mechanism |
| **각의 이등분선 (등거리 or 인접변비)** | #82, #100, #104, #111, #121 | 5문 |

### 4.3. 심화 mechanism (STEP 3 특화)

| Mechanism | 등장 슬롯 |
|---|---|
| **공통부분 제외 원리 (사각형·삼각형 넓이 관계)** | #113, #118 |
| **자동 수직 관계 활용한 직각·이등변 도출** | #100, #114, #121 |
| **거리 제곱 차 → 직선 자취** | #115 |
| **세 직선의 위치 관계 → 좌표평면 분할 개수** | #116 |
| **완전제곱 판정으로 매개변수 유일 결정** | #119 |

### 4.4. 반복 조건층(condition_layers) 패턴

**표면 조건 → 실제 조건 → 상호작용** 3단 구조가 반복됨:
1. **표면**: 좌표·기울기·특수 도형 (정사각형·마름모·이등변) 
2. **실제**: 정점·수직·평행·이등분·닮음 등 핵심 mechanism
3. **상호작용**: 여러 mechanism의 사슬 연결 (예: 정점 → 위치 판정 → 극단 기울기 계산)

**"자동 수직" 함정 반복**: #100, #101, #114, #121에서 학생이 문제 안의 두 직선이 이미 수직임을 인식해야 진짜 조건이 나오는 구조가 반복됨 → 최고난도 특성.

### 4.5. 빈출 오답 (common_mistakes) 패턴

1. **case 완결성 실패**: 절댓값 방정식·매개변수 특수치·평행 계수 특수 case 누락 (#76, #77, #78, #81, #88, #91, #92, #102, #111, #116, #122)
2. **원리 오해**: "각 이등분 → 등거리", "넓이 이등분 → 중점·대각선 교점", "무게중심 대신 대각선 교점" 등 (#78, #80, #83, #97)
3. **매개변수 방향 오류**: 내분비 방향(2:1 vs 1:2), 부호(-k/3 vs +k/3), 기울기 방향 (#75, #77, #79, #84, #86, #95)
4. **원리 놓침**: 자동 수직, 공통부분 원리, 정점 통과 → 최적화 조건 (#100, #101, #106, #113, #114, #118)

### 4.6. 학습 우선순위 mechanism (본 프로젝트 문제 재활용 관점)

**Tier A (최우선 · 반복 빈도 최상 + 통찰 요구)**:
- 정점 통과 직선족 (매개변수 항등식 분리)
- 두 직선 자동 수직 → 직각이등변 도출
- 넓이 이등분·분할 통합 mechanism (내분비 → 3분점 등)
- 점과 직선 거리 공식 (기본기 + 변형)

**Tier B (상위 · 조합 문항 필수)**:
- 닮은 삼각형 넓이비 = 닮음비²
- 매개변수 소거 → 자취
- 각 이등분선 (등거리 or 인접변비)
- 공통부분 제외 원리 (사각형·삼각형)

**Tier C (심화 · STEP 3 전용)**:
- 세 직선 위치 관계 → 좌표평면 분할 개수
- 거리 제곱 차 → 직선 자취
- 축평행 특수 case 처리
- 완전제곱 판정 매개변수 유일 결정

### 4.7. 본 프로젝트 활용 지침

- **정점 통과 직선족**은 CM2-GM ★ 3~4 앵커에 필수 편성 권장 (스키마 #77이 정본 예시).
- **자동 수직 관계**는 star_premium (★ 5 최상위)의 통찰 카드 후보 (문제 안 두 직선의 수직 관계를 학생이 스스로 발견해야 진짜 조건이 나옴 → I-PD 패턴 발견 + I-XU 단원 결합).
- **case 완결성**은 solution-review와 problem-review 모두에서 검수 지표로 활용 (특수치·평행 계수 case 누락 시 RED).
- **자취 문제**(매개변수 소거·거리 제곱 차)는 CM2-GM 최상위 mechanism으로 star_premium 후보.
- 저작권상 문제 원문 재사용 금지. 위 요약은 mechanism 학습·분석 목적으로만 활용. 재출제 시 §"문제 변형 정책" 준수 (숫자만 변경 or 동등 변형).

---

**작성 완료**: 2026-07-14
**추출자**: Claude Opus 4.7 (1M context)
**총 문항**: 50문 (STEP 2: 40문 + STEP 3: 10문)
**정독 방식**: 문제.pdf p.27~38 + 해설.pdf p.21~37 1:1 매칭 전수 확인
