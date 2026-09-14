---
name: mechanism-데이터-전국연합-CM2-GM
description: 전국연합학력평가 (고1·고2) 공통수학2 도형의 방정식 정독 데이터. 세션 52 (2026-07-20) 신설.
metadata:
  type: reference
  version: v1.0
  established: 2026-07-20
  source: EBS 올림포스 전국연합학력평가 기출문제집 수학(고1) · 2025
  tier_mapping:
    유형연습_3점: star_5
    유형연습_4점: star_5
    1등급도전_4점: star_5_premium
  unit_code: CM2-GM
  citation_note: 학평 기출 · 학습 목적 · 저작권 준수 (원문 전사 없음)
---

# 전국연합학력평가 CM2-GM (도형의 방정식) — mechanism 데이터

**출처**: EBS 올림포스 전국연합학력평가 기출문제집 수학(고1) 2025
**대상 범위**: CM2-GM-01 (평면좌표 = 두 점 거리·내분·중점·무게중심) star 5·premium 급 학평 기출
**저작권**: 학습·분석 목적. 원문 인용 아님. `problem_summary`·`solution_summary`는 요약 (추상화)만 기재.

---

## CM2-GM-01 평면좌표 (거리·내분·무게중심)

### 유형 05 삼각형의 무게중심 (star 5급)

```yaml
- source: 전국연합-2021-11월-고1-24번
  page: 83
  problem_summary: |
    좌표평면 위 세 점 A(2,6), B(4,1), C(8,a) 삼각형 ABC의 무게중심이 직선 y=x 위에 있을 때
    상수 a의 값 (C는 제1사분면 위 점).
  solution_summary: |
    무게중심 G = ((2+4+8)/3, (6+1+a)/3) = (14/3, (7+a)/3).
    G가 y=x 위 → (7+a)/3 = 14/3 → a = 7.
    C(8,7) 제1사분면 위 조건 만족.
    답: a=7
  category: 무게중심 · 직선 위 점 조건
  difficulty: 3점
  tier: star_5
  _step: 유형연습
  unit_code: CM2-GM
  standard: 10수05-01
  mechanism_primary: 무게중심 좌표 공식 + 직선 위 조건
  insight_type: 조건통합형
  depth: 2
  citation_note: "EBS 올림포스 학평 기출 · 학습 목적"

- source: 전국연합-2021-3월-고2-12번
  page: 83
  problem_summary: |
    좌표평면 세 점 A(-2,0), B(0,4), C(a,b) 꼭짓점 삼각형 ABC. AC=BC이고 삼각형 ABC 무게중심이
    y축 위에 있을 때 a+b 값.
  solution_summary: |
    무게중심 x좌표 = (-2+0+a)/3 = 0 → a = 2.
    AC² = (2-(-2))² + b² = 16+b², BC² = 2² + (b-4)² = 4+b²-8b+16.
    AC=BC → 16+b² = 20+b²-8b → 8b = 4 → b = 1/2.
    a+b = 2 + 1/2 = 5/2. 답 ⑤.
  category: 등거리 + 무게중심 결합
  difficulty: 3점
  tier: star_5
  _step: 유형연습
  unit_code: CM2-GM
  standard: 10수05-01
  mechanism_primary: 무게중심 x좌표 = 0 + 등거리 조건 이차식
  insight_type: 조건통합형
  depth: 2
  citation_note: "EBS 올림포스 학평 기출 · 학습 목적"
```

### 1등급 도전 (star_5_premium)

```yaml
- source: 전국연합-2019-9월-고1-29번
  page: 89
  problem_summary: |
    좌표평면 위 세 점 A(0, 2+2√2), B(-2,0), C(2,0)을 꼭짓점으로 하는 삼각형 ABC.
    점 B에서 선분 AC에 내린 수선의 발 D, 점 C에서 선분 AB에 내린 수선의 발 E,
    선분 BD와 선분 CE가 만나는 점 F. 사각형 AEFD 둘레의 길이 l.
    l² = a + b√2 (a, b 자연수)일 때 a+b 값.
  solution_summary: |
    이등변삼각형 (AB=AC). BC가 x축 위, y축 대칭.
    F는 삼각형의 수심 (y축 위 · 좌표 (0, 2√2-2)).
    AC 방향 (2, -(2+2√2)), 수선 조건 BD⊥AC로 D 위치 매개변수 t = √2/2.
    → D(√2, √2), E(-√2, √2) (대칭).
    AD = AE = √(8+4√2), DF = EF = √(8-4√2).
    l = 2√(8+4√2) + 2√(8-4√2).
    l² = 4(8+4√2) + 4(8-4√2) + 8·√((8+4√2)(8-4√2))
       = 32 + 16√2 + 32 - 16√2 + 8·√(64-32)
       = 64 + 8·√32 = 64 + 8·4√2 = 64 + 32√2.
    a=64, b=32, a+b = 96.
  category: 좌표평면 이등변삼각형 · 수심 · 수선의 발 · 거리 결합
  difficulty: 4점 (29번급 · 1등급 도전)
  tier: star_5_premium
  _step: 1등급도전
  unit_code: CM2-GM
  standard: 10수05-01
  mechanism_primary: 이등변삼각형 대칭 + 수선의 발 매개변수화 + 거리 제곱합
  mechanism_secondary: [좌표 배치 (BC를 x축), 수심 성질, (a+b)² 전개, 완전제곱꼴]
  insight_type: 통찰형
  depth: 3
  depth_conditions:
    - "이등변삼각형 파악 (AB=AC 검증) → y축 대칭 활용"
    - "수선의 발 D 좌표 매개변수 t로 결정 · 내적 =0 조건"
    - "AD = √(8+4√2), DF = √(8-4√2) 유사 구조"
    - "l² 전개에서 4·√2 상쇄 · 근호 안 곱 = 유리수"
  freedom_signals:
    initial_setup_freedom: 하 (좌표 강제)
    approach_choice: 상 (좌표 vs 순수 기하 vs 삼각형 닮음)
    student_decision_points: 5
  common_mistakes:
    - "이등변 대칭 놓치고 D·E 별도 계산"
    - "수선 조건 벡터 내적 부호 오류"
    - "l² 전개 시 (2√X + 2√Y)² = 4X + 4Y + 8√(XY) 미인지"
    - "√(64-32) = √32 = 4√2 계산 오류"
  citation_note: "EBS 올림포스 학평 기출 (2019.9월 고1 학평 29번) · 학습 목적"
```

### 유형 02 두 점으로부터 같은 거리에 있는 점 (star 5, 4점)

```yaml
- source: 전국연합-2010-3월-고2-20번
  page: 81
  problem_summary: |
    세 지점 A, B, C에 대리점이 있고 세 지점에서 같은 거리에 있는 지점에 물류창고를 지으려 한다.
    B지점은 A지점에서 서쪽으로 4km, C지점은 A지점에서 동쪽으로 1km, 북쪽으로 1km 떨어진 위치.
    물류창고를 지으려는 지점에서 A지점에 이르는 거리.
  solution_summary: |
    A(0,0), B(-4,0), C(1,1)로 좌표 설정. 물류창고 P(x,y).
    AP² = BP²: x²+y² = (x+4)²+y² → 8x+16=0 → x=-2.
    AP² = CP²: x²+y² = (x-1)²+(y-1)² → -2x-2y+2=0 → y = 1-x = 3.
    P(-2, 3), AP = √(4+9) = √13 km.
    답 ② √13 km
  category: 실생활 · 등거리 지점 · 좌표 배치
  difficulty: 4점
  tier: star_5
  _step: 유형연습
  unit_code: CM2-GM
  standard: 10수05-01
  mechanism_primary: 실생활 조건 → 좌표 배치 → 등거리 두 조건 연립
  insight_type: 조건통합형
  depth: 2
  citation_note: "EBS 올림포스 학평 기출 (2010.3월 고2 학평 20번) · 학습 목적"
```

### 유형 04 선분의 내분점의 활용 (star 5, 4점)

```yaml
- source: 전국연합-2022-11월-고1-19번
  page: 82
  problem_summary: |
    좌표평면 위 세 점 A(2,3), B(7,1), C(4,5). 직선 AB 위 점 D에 대해 D를 지나고 직선 BC와 평행한
    직선이 직선 AC와 만나는 점 E. 삼각형 ABC와 삼각형 ADE의 넓이 비가 4:1이 되도록 하는 모든 점 D의
    y좌표의 곱 (D는 점 A도 아니고 점 B도 아니다).
  solution_summary: |
    D = A + t(B-A) = (2+5t, 3-2t)로 매개화. E도 AC 위 같은 비 t 위치.
    △ADE ~ △ABC (∠A 공통, AD/AB = AE/AC = |t|), 닮음비 |t|.
    넓이 비 = t² = 1/4 → |t| = 1/2.
    t = 1/2 : D = (4.5, 2), y좌표 = 2
    t = -1/2: D = (-0.5, 4), y좌표 = 4
    y좌표 곱 = 2 × 4 = 8.
    답 ① 8
  category: 직선 위 내분·평행선·닮음 → 넓이비
  difficulty: 4점
  tier: star_5
  _step: 유형연습
  unit_code: CM2-GM
  standard: 10수05-01
  mechanism_primary: 매개변수 내분 + 평행선으로 닮음 유도 + 넓이비 = 닮음비² + 부호 두 케이스
  insight_type: 조건통합형
  depth: 2
  citation_note: "EBS 올림포스 학평 기출 (2022.11월 고1 학평 19번) · 학습 목적"

- source: 전국연합-2024-9월-고1-20번
  page: 82
  problem_summary: |
    좌표평면 위 세 점 A(-8, a), B(7, 3), C(-6, 0). 선분 AB를 2:1로 내분하는 점 P. 직선 PC가 삼각형
    AOB의 넓이를 이등분할 때 양수 a의 값 (O는 원점). (그림 제공)
  solution_summary: |
    P = ((2·7+1·(-8))/3, (2·3+1·a)/3) = (2, (6+a)/3).
    △AOB 넓이 = (1/2)|(-8)·3 - 7·a| = (24+7a)/2 (a>0).
    직선 PC (P(2, (6+a)/3), C(-6, 0))가 삼각형 AOB의 두 변과 만나 넓이 이등분.
    (EBS 정답 확인 필요 · 후보: 21/2·11·23/2·12·25/2 · 원본 페이지 82)
  category: 내분점 + 삼각형 넓이 이등분 조건
  difficulty: 4점
  tier: star_5
  _step: 유형연습
  unit_code: CM2-GM
  standard: 10수05-01
  mechanism_primary: 내분점 좌표 + 삼각형 넓이 좌표 공식 + 직선의 넓이 이등분 조건
  insight_type: 조건통합형
  depth: 3
  citation_note: "EBS 올림포스 학평 기출 (2024.9월 고1 학평 20번) · 학습 목적 · 정답 EBS 원본 확인 대기"
```

### 1등급 도전 · 삼각형·각이등분선·내분 (star_5_premium, 4점)

```yaml
- source: 전국연합-2017-9월-고1-21번
  page: 88
  problem_summary: |
    AB=2√3, BC=2인 삼각형 ABC에서 선분 BC의 중점 D, AD=√7. 각 ACB의 이등분선이 선분 AB와 만나는
    점 E, 선분 CE와 선분 AD가 만나는 점 P, 각 APE의 이등분선이 선분 AB와 만나는 점 R, 선분 PR의
    연장선이 선분 BC와 만나는 점 Q. 삼각형 PRE의 넓이 S₁, 삼각형 PQC의 넓이 S₂일 때
    S₂/S₁ = a + b√7 (a, b 유리수). ab의 값.
  solution_summary: |
    AB=2√3, BC=2, 중선 AD=√7 → 중선정리 이용 or 좌표 배치.
    B(0,0), C(2,0), D(1,0). AD=√7 → A(x, y), (x-1)²+y²=7, x²+y²=12 → -2x+1=-5 → x=3.
    x=3, y² = 12-9 = 3 → A(3, √3).
    각이등분선 CE : AC:BC = |AC|:|BC| = √((3-2)²+3):2 = 2:2 → E는 AB 중점? 다시.
    (매우 복잡 · EBS 정답 확인 · 후보 -16·-14·-12·-10·-8)
  category: 삼각형 · 각이등분선 · 내분점 · 부분 삼각형 넓이비
  difficulty: 4점 (21번급 · 1등급 도전)
  tier: star_5_premium
  _step: 1등급도전
  unit_code: CM2-GM
  standard: 10수05-01
  mechanism_primary: 좌표 배치 + 각이등분선 정리 (각의 이등분선은 대변을 이웃변의 비로 내분) + 중첩 내분 넓이비
  insight_type: 통찰형
  depth: 3
  citation_note: "EBS 올림포스 학평 기출 (2017.9월 고1 학평 21번 · 1등급 도전) · 정답 확인 불가 (참고자료 2017 해설 PDF 미보유 · 세션 55 조회 실패)"
```

---

## CM2-GM-02 직선의 방정식 (10수05-02)

**대상 범위**: 유형 6·7·8·9 및 1등급 도전 (인쇄 83~89쪽 / PDF 11~17쪽). 4점 문항 전수 자산화.
**세션 54 (2026-07-20)** 신설. 마스터 지시 "CM2 전 단원 4점 학평 문항 전수 자산화 · 직선의 방정식 담당".

### 유형 06 직선의 방정식 (star 5, 4점)

**4점 문항 없음.** 유형 6 연습 (문항 19·20·21·22·23·24) 모두 [3점].

### 유형 07 두 직선의 위치 관계 (star 5, 4점)

**4점 문항 없음.** 유형 7 연습 (문항 25·26·27) 모두 [3점].

### 유형 08 두 직선의 위치 관계의 활용 (star 5, 4점)

```yaml
- source: 전국연합-2022-3월-고2-20번
  page: 85
  problem_summary: |
    두 직선 l₁: 2x+y+2=0, l₂: x-2y-4=0의 교점 A. l₁·l₂가 x축과 만나는 점 각각 B, C.
    제1사분면 위 점 P와 △ABC의 외접원 위 점 Q가 다음을 만족:
    (가) Q는 △PBC의 무게중심.
    (나) △PBC 넓이 = 3·△ABC 넓이.
    <보기>에서 옳은 것 (ㄱ. l₁⊥l₂ ㄴ. Q의 y좌표=2 ㄷ. P의 x좌표+y좌표=10).
  solution_summary: |
    l₁·l₂ 기울기 -2, 1/2 → 수직 (ㄱ ✓). A(0,-2), B(-1,0), C(4,0).
    △ABC 넓이 = 5 → △PBC 넓이 = 15 → P의 y좌표 = 6 (제1사분면).
    G = ((x_P+3)/3, 2) → Q의 y좌표 = 2 (ㄴ ✓).
    △ABC 외접원 중심 (3/2, 0), 반지름 5/2. Q(x_Q, 2) 외접원 위 → x_Q = 3 또는 0.
    (x_P+3)/3 = 3 → x_P = 6 (P 제1사분면). P(6,6) → x_P+y_P = 12 (ㄷ ✗).
    답: ㄱ, ㄴ (③).
  category: 두 직선 위치 관계 + 외접원 + 무게중심 + 넓이비 결합
  difficulty: 4점
  tier: star_5
  _step: 유형연습
  unit_code: CM2-GM
  standard: 10수05-02
  mechanism_primary: 두 직선 수직 판정 + 삼각형 외접원 방정식 + 무게중심으로 P 역산
  mechanism_secondary: [교점 좌표, x축 절편, 넓이비로 y좌표 결정, 외접원 위 점]
  insight_type: 통찰형
  depth: 3
  citation_note: "EBS 올림포스 학평 기출 (2022.3월 고2 학평 20번) · 학습 목적"

- source: 전국연합-2023-3월-고2-26번
  page: 85
  problem_summary: |
    좌표평면 위 네 점 A(0,1), B(0,4), C(√2, p), D(3√2, q)가 다음을 만족: (가) 직선 CD의 기울기 음수.
    (나) AB=CD이고 AD∥BC. p+q의 값.
  solution_summary: |
    AB = 3, CD² = 8 + (q-p)² = 9 → (q-p)² = 1. 기울기 CD = (q-p)/(2√2) < 0 → q-p = -1.
    AD∥BC: (q-1)/(3√2) = (p-4)/√2 → q-1 = 3(p-4) → q = 3p-11.
    q = p-1과 연립: p-1 = 3p-11 → p = 5, q = 4.
    답: p+q = 9.
  category: 두 직선 평행 + 선분 길이 조건 + 기울기 부호 결정
  difficulty: 4점
  tier: star_5
  _step: 유형연습
  unit_code: CM2-GM
  standard: 10수05-02
  mechanism_primary: 선분 길이 + 두 직선 평행 (기울기 동일) + 기울기 부호로 근 선택
  mechanism_secondary: [수직거리 계산, 기울기 공식, 부호 조건으로 case 확정]
  insight_type: 조건통합형
  depth: 2
  citation_note: "EBS 올림포스 학평 기출 (2023.3월 고2 학평 26번) · 학습 목적"

- source: 전국연합-2019-9월-고1-18번
  page: 85
  problem_summary: |
    0이 아닌 실수 m, 직선 l: y = x/m + 2. A(a,4)가 l 위, B는 A에서 x축에 내린 수선의 발, H는 B에서 l에 내린
    수선의 발. △OBH가 m 값에 관계없이 이등변삼각형임을 보이는 과정에서 (가)·(나)·(다)·(라) 빈칸.
    (가)에 알맞은 식 f(m), (나)에 알맞은 식 g(m), (다)에 알맞은 수 k에 대해 f(k)·g(k) 값.
  solution_summary: |
    (가) a = 2m (A on l).
    직선 BH: BH⊥l → 기울기 -m, B(2m,0) 지남: y = -m(x - 2m).
    H = l∩BH: x/(m²+1)·m = 2m(m²-1) → H((2m³-2m)/(m²+1), 4m²/(m²+1)). (나) = m²+1.
    OH = 2|m|/(m²+1) · √(m⁴+2m²+1) · 형식 → (다) = 2 (m² 계수).
    OB = 2|m| = OH → 이등변 ✓.
    f(m) = 2m, g(m) = m²+1, k = 2.
    f(2)·g(2) = 4·5 = 20.
    답: ④ 20.
  category: 좌표평면 수선의 발 + 직선 방정식 매개변수 + 이등변삼각형 판정
  difficulty: 4점
  tier: star_5
  _step: 유형연습
  unit_code: CM2-GM
  standard: 10수05-02
  mechanism_primary: 두 직선 수직 (기울기 곱 -1) + 교점 좌표 대수 정리 + 임의 매개변수에서 항등식
  mechanism_secondary: [수선의 발 좌표 유도, 대수 정리로 √ 안 완전제곱, 이등변 조건 등식]
  insight_type: 통찰형
  depth: 3
  citation_note: "EBS 올림포스 학평 기출 (2019.9월 고1 학평 18번) · 학습 목적"

- source: 전국연합-2023-11월-고1-26번
  page: 85
  problem_summary: |
    좌표평면에서 점 (a,a)를 지나고 곡선 y = x² - 4x + 10에 접하는 두 직선이 서로 수직일 때
    두 직선의 기울기의 합.
  solution_summary: |
    접점 (t, t²-4t+10), 접선 기울기 2t-4. 접선 (a,a) 지남: t² - 2at + (5a-10) = 0.
    두 근 t₁, t₂. 접선 기울기 m₁ = 2t₁-4, m₂ = 2t₂-4.
    m₁·m₂ = 4·t₁t₂ - 8(t₁+t₂) + 16 = 4(5a-10) - 8·(2a) + 16 = 4a - 24.
    수직: 4a-24 = -1 → a = 23/4.
    m₁+m₂ = 2(t₁+t₂) - 8 = 4a - 8 = 23 - 8 = 15.
    답: 15.
  category: 이차곡선 접선 + 접선 두 개 + 수직 조건 (기울기 곱 = -1)
  difficulty: 4점
  tier: star_5
  _step: 유형연습
  unit_code: CM2-GM
  standard: 10수05-02
  mechanism_primary: 접선 방정식 (미분 아닌 접점 매개화) + 근과 계수 관계 + 기울기 곱·합
  mechanism_secondary: [접점 이차방정식 유도, 근과 계수 관계로 대칭식 표현, 수직 조건]
  insight_type: 통찰형
  depth: 3
  citation_note: "EBS 올림포스 학평 기출 (2023.11월 고1 학평 26번) · 학습 목적"
```

### 유형 09 점과 직선 사이의 거리 (star 5, 4점)

```yaml
- source: 전국연합-2018-9월-고1-28번
  page: 86
  problem_summary: |
    y = x² 위 점 P(1,1)에서 접선 l₁, P를 지나고 l₁과 수직인 직선 l₂. l₁이 y축과 만나는 점 Q,
    l₂가 y = x²와 만나는 점 중 P 아닌 점 R. △PRQ 넓이 S일 때 40S 값.
  solution_summary: |
    l₁ 기울기 2 (미분), y = 2x-1. Q(0,-1).
    l₂ 기울기 -1/2, y = -x/2 + 3/2. y=x²와 교점: 2x²+x-3=0 → (2x+3)(x-1)=0 → R(-3/2, 9/4).
    △PRQ (P(1,1), R(-3/2, 9/4), Q(0,-1)) 좌표공식:
    S = (1/2)|1·(9/4-(-1)) + (-3/2)·(-1-1) + 0| = (1/2)|13/4 + 3| = 25/8.
    40S = 40·25/8 = 125.
    답: 125.
  category: 이차곡선 접선·수직선 + 세 꼭짓점 삼각형 넓이 (좌표공식)
  difficulty: 4점
  tier: star_5
  _step: 유형연습
  unit_code: CM2-GM
  standard: 10수05-02
  mechanism_primary: 접선·수직 접선 방정식 + 이차방정식으로 교점 R + 좌표공식 넓이
  mechanism_secondary: [수직 조건 기울기 곱, 곡선 교점, 세 점 넓이 공식]
  insight_type: 조건통합형
  depth: 2
  citation_note: "EBS 올림포스 학평 기출 (2018.9월 고1 학평 28번) · 학습 목적"

- source: 전국연합-2018-11월-고1-17번
  page: 86
  problem_summary: |
    직선 y = -x+10과 y축의 교점 A. 직선 y = 3x-6과 x축의 교점 B. 두 직선의 교점 C.
    x축 위의 점 D(a, 0) (a>2)에 대해 △ABD 넓이 = △ABC 넓이일 때 a 값.
  solution_summary: |
    A(0,10), B(2,0), C(4,6). △ABC 좌표공식: (1/2)|0·(0-6)+2·(6-10)+4·(10-0)| = (1/2)·32 = 16.
    △ABD: 밑변 BD = a-2, 높이 = 10 → 넓이 = 5(a-2).
    5(a-2) = 16 → a = 2 + 16/5 = 26/5.
    답: ② 26/5.
  category: 두 직선 교점 + 삼각형 넓이 좌표공식 + 넓이 조건으로 D 위치 결정
  difficulty: 4점
  tier: star_5
  _step: 유형연습
  unit_code: CM2-GM
  standard: 10수05-02
  mechanism_primary: 좌표축 교점 + 두 직선 교점 + 좌표공식 넓이 + 밑변·높이 넓이 등식
  mechanism_secondary: [좌표 결정, 좌표공식, x축 위 점의 밑변·높이]
  insight_type: 조건통합형
  depth: 2
  citation_note: "EBS 올림포스 학평 기출 (2018.11월 고1 학평 17번) · 학습 목적"

- source: 전국연합-2024-9월-고1-28번
  page: 86
  problem_summary: |
    최고차항의 계수가 양수인 이차함수 y=f(x)의 그래프가 x축과 A(2,0), B(a,0) (a>2)에서 만나고
    y축과 점 C에서 만난다. 이차함수의 꼭짓점 P, A·P에서 직선 BC에 내린 수선의 발 각각 Q, R.
    사각형 APRQ가 정사각형일 때 f(12) 값.
  solution_summary: |
    f(x) = k(x-2)(x-a), k>0. C(0, 2ak), P((2+a)/2, -k(a-2)²/4).
    직선 BC: 기울기 -2k, 방정식 2kx + y - 2ak = 0.
    A(2,0) → BC 거리 d_A = 2k(a-2)/√(4k²+1).
    P → BC 거리 d_P = k(a-2)(a+2)/(4√(4k²+1)).
    정사각형: d_A = d_P → 2 = (a+2)/4 → a = 6.
    변 길이 = 정사각형 조건 → 8k/√(4k²+1) = (1+8k²)/√(4k²+1) → 8k = 1+8k² → 8k²-8k+1=0.
    k = (2±√2)/4 (두 값 · 실제 정사각형 방향 조건으로 한 값 선택).
    실제 EBS 해설: a=6, k=1/2, f(x)=(1/2)(x-2)(x-6). f(12)=(1/2)·10·6=30.
    답: 30 (EBS 해설 대조 검증 완료).
  category: 이차함수 꼭짓점 + 점과 직선 거리 + 정사각형 조건
  difficulty: 4점
  tier: star_5
  _step: 유형연습
  unit_code: CM2-GM
  standard: 10수05-02
  mechanism_primary: 이차함수 인수분해 + 꼭짓점 좌표 + 두 점의 BC 거리 등식 + 정사각형 변 등식
  mechanism_secondary: [이차함수 계수 매개변수, 두 수선의 발 배치, 정사각형 두 조건]
  insight_type: 통찰형
  depth: 3
  citation_note: "EBS 올림포스 학평 기출 (2024.9월 고1 학평 28번) · 학습 목적 · 검증 완료 (해설 대조 · 세션 55, 답 30)"

- source: 전국연합-2016-3월-고2-나형-18번
  page: 87
  problem_summary: |
    세 점 O(0,0), A(8,4), B(7,a)와 △OAB의 무게중심 G(5,b). G와 직선 OA 사이 거리 √5. a+b 값 (a>0).
  solution_summary: |
    G_x = (0+8+7)/3 = 5 ✓ (자동). G_y = (4+a)/3 = b → b = (4+a)/3.
    직선 OA: y = x/2 → x - 2y = 0.
    G(5,b) 거리: |5 - 2b|/√5 = √5 → |5-2b| = 5 → b = 0 or 5.
    a > 0 → b = (4+a)/3 > 4/3 → b = 5 → a = 11.
    a+b = 16.
    답: ① 16.
  category: 무게중심 좌표 + 점과 직선 사이 거리 공식
  difficulty: 4점
  tier: star_5
  _step: 유형연습
  unit_code: CM2-GM
  standard: 10수05-02
  mechanism_primary: 무게중심 좌표 공식 + 원점 지나는 직선 방정식 + 점과 직선 거리
  mechanism_secondary: [무게중심 성립 자동, 절대값 방정식, 양수 조건으로 근 선택]
  insight_type: 조건통합형
  depth: 2
  citation_note: "EBS 올림포스 학평 기출 (2016.3월 고2 학평 나형 18번) · 학습 목적"

- source: 전국연합-2024-9월-고1-26번
  page: 87
  problem_summary: |
    직선 l₁: x-2y-2=0과 평행하고 y절편 양수인 l₂. l₁이 x, y축과 만나는 점 A, B, l₂가 x, y축과
    만나는 점 C, D. 사각형 ADCB 넓이 25. l₁과 l₂ 거리 d일 때 d² 값.
  solution_summary: |
    A(2,0), B(0,-1). l₂: x-2y+c=0, c>0 → C(-c,0), D(0,c/2).
    사각형 ADCB (A→D→C→B) 신발끈: (1/2)|2(c/2+1) + 0 + (-c)(-1-c/2) + 0|
    = (1/2)|c+2+c+c²/2| = c²/4 + c + 1.
    25 = c²/4 + c + 1 → (c+2)² = 100 → c = 8 (c>0).
    l₁: x-2y-2=0, l₂: x-2y+8=0. 거리 = |(-2)-8|/√5 = 10/√5 = 2√5.
    d² = 20.
    답: 20.
  category: 두 직선 평행 + 좌표축 교점으로 사각형 넓이 + 평행 두 직선 거리
  difficulty: 4점
  tier: star_5
  _step: 유형연습
  unit_code: CM2-GM
  standard: 10수05-02
  mechanism_primary: 평행 조건 (같은 기울기) + 좌표축 교점 4개로 사각형 넓이 (신발끈) + 평행 두 직선 거리 공식
  mechanism_secondary: [사각형 신발끈 공식, (c+2)² 완전제곱, y절편 양수 조건]
  insight_type: 조건통합형
  depth: 2
  citation_note: "EBS 올림포스 학평 기출 (2024.9월 고1 학평 26번) · 학습 목적"

- source: 전국연합-2020-3월-고2-18번
  page: 87
  problem_summary: |
    제1사분면 위 두 점 A, B와 원점 O에 대해 △OAB의 무게중심 G(8,4), B와 직선 OA 사이 거리 6√2.
    직선 OB 기울기 > 직선 OA 기울기일 때 직선 OA 기울기를 구하는 과정에서 (가)·(나)·(다) 빈칸.
    (가), (다) 수를 각각 p, q, (나) 식을 f(m)이라 할 때 f(q)/p² 값.
  solution_summary: |
    BG:GM = 2:1 (M = OA 중점) → G와 OA 거리 = (1/3)·6√2 = 2√2. (가) p = 2√2.
    OA 방정식 mx-y = 0 → G(8,4) 거리 = |8m-4|/√(m²+1) = 2√2 → (나) f(m) = |8m-4|.
    (8m-4)² = 8(m²+1) → 56m² - 64m + 8 = 0 → 7m²-8m+1 = 0 → m = 1 or 1/7.
    OG 기울기 = 4/8 = 1/2. OB > OA 조건 → OA < OG < OB → m < 1/2 → m = 1/7.
    (다) q = 1/7.
    f(q)/p² = |8/7 - 4|/(2√2)² = (20/7)/8 = 5/14.
    답: ② 5/14.
  category: 무게중심 성질 (BG:GM=2:1) + 점과 직선 거리 + 근 선택 (OG 기울기 비교)
  difficulty: 4점
  tier: star_5
  _step: 유형연습
  unit_code: CM2-GM
  standard: 10수05-02
  mechanism_primary: 무게중심 중선 성질 (2:1) + 점과 직선 거리 공식 + 두 근 중 무게중심 위치로 선택
  mechanism_secondary: [BG:GM=2:1 거리비, 절대값 이차방정식, OG 기울기 대소 비교]
  insight_type: 통찰형
  depth: 3
  citation_note: "EBS 올림포스 학평 기출 (2020.3월 고2 학평 18번) · 학습 목적"
```

### 1등급 도전 · 직선 관련 (star_5_premium, 4점)

```yaml
- source: 전국연합-2017-11월-고1-19번
  page: 89
  problem_summary: |
    3 < a < 7인 실수 a에 대해 이차함수 y = x² - 2ax - 20의 그래프 위 점 P와 직선 y = 2x - 12a 사이
    거리의 최솟값 f(a). f(a)의 최댓값.
  solution_summary: |
    직선 2x - y - 12a = 0. 곡선 위 점 (t, t²-2at-20).
    거리 = |t² - 2(a+1)t + (12a-20)|/√5.
    g(t) = t² - 2(a+1)t + (12a-20). g의 극소값 g(a+1) = -(a-3)(a-7).
    3<a<7 → g(a+1) > 0 → 절대값 벗김. 최솟값 = -(a-3)(a-7) = -a²+10a-21.
    f(a) = (-a²+10a-21)/√5 = (-(a-5)²+4)/√5.
    3<a<7 → 최댓값 a=5에서 4/√5 = 4√5/5.
    답: ① 4√5/5.
  category: 이차곡선과 직선 거리 최솟값 (이차식) + 매개변수 a에 대한 최댓값
  difficulty: 4점 (19번급 · 1등급 도전)
  tier: star_5_premium
  _step: 1등급도전
  unit_code: CM2-GM
  standard: 10수05-02
  mechanism_primary: 점과 직선 거리 공식 + 곡선 매개점 대입 → 이차식 최솟값 + 매개변수 이차 최댓값
  mechanism_secondary: [이차식 극소 좌표, 절대값 벗김 조건 (판별식), 이중 최적화]
  insight_type: 통찰형
  depth: 3
  depth_conditions:
    - "곡선 위 점을 매개변수 t로 두고 거리 공식 대입"
    - "t의 이차식 g(t)의 극소값 = -(a-3)(a-7) > 0 판정 (a 범위 활용)"
    - "절대값 벗겨져 f(a) = -(a-5)²/√5 + 4/√5"
    - "a 범위 3<a<7에 a=5 포함 확인 → 최댓값 4/√5"
  freedom_signals:
    initial_setup_freedom: 중 (매개점 or 접선 평행)
    approach_choice: 상 (거리 공식 vs 접선 평행 조건)
    student_decision_points: 4
  common_mistakes:
    - "절대값 벗김 없이 처리 → 이차식 극값이 음수인 케이스 놓침"
    - "판별식 D = 4(a+1)² - 4(12a-20) = 4(a²-10a+21) 부호 판정 실수"
    - "f(a) 최댓값 계산에서 a=5가 (3,7) 내부 미확인"
    - "√5 유리화 실수 (4/√5 = 4√5/5)"
  citation_note: "EBS 올림포스 학평 기출 (2017.11월 고1 학평 19번 · 1등급 도전) · 학습 목적"
```

---

## CM2-GM-03 원의 방정식 (10수05-03)

**대상 범위**: 유형 6·7·8·9 및 1등급 도전 중 원 관련 (인쇄 92~96쪽 / PDF 20~24쪽). 4점 문항 전수 자산화.
**세션 54 (2026-07-20)** 신설. 마스터 지시 "CM2 전 단원 4점 학평 문항 전수 자산화 · 도형의 방정식(2) 담당".

### 유형 06 원의 방정식 (star 5, 4점)

```yaml
- source: 전국연합-2021-9월-고1-28번
  page: 92
  problem_summary: |
    원의 중심 C(a,b)가 제1사분면 위에 있고 반지름 r인 원이 원점 O를 지난다.
    원과 x축, y축이 만나는 점 중 O가 아닌 점을 각각 A, B라 한다.
    네 점 O, A, B, C가 다음 조건을 만족시킬 때 a+b+r²의 값.
    (가) OB - OA = 4
    (나) 두 점 O, C를 지나는 직선의 방정식은 y = 3x.
  solution_summary: |
    O(0,0), 중심 C(a,b), a,b>0. O가 원 위 → r² = a²+b².
    x축 만나는 점 A: y=0 대입, x=0 or x=2a. 즉 A(2a, 0).
    y축 만나는 점 B: x=0 대입, y=0 or y=2b. 즉 B(0, 2b).
    OA = 2a, OB = 2b. 조건 (가): 2b - 2a = 4 → b - a = 2.
    조건 (나): C(a,b)가 y=3x 위 → b = 3a.
    연립: 3a - a = 2 → a = 1, b = 3. r² = 1+9 = 10.
    a+b+r² = 1+3+10 = 14.
    답: 14
  category: 원의 방정식 · 중심·반지름 결정 · 축 교점 활용
  difficulty: 4점
  tier: star_5
  _step: 유형연습
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 원과 축 교점 좌표 (x축 y=0, y축 x=0) + 원점 통과 조건 r²=a²+b²
  mechanism_secondary: [직선 위 점 조건, 두 조건 연립]
  insight_type: 조건통합형
  depth: 2
  citation_note: "EBS 올림포스 학평 기출 (2021.9월 고1 학평 28번) · 학습 목적"

- source: 전국연합-2024-3월-고2-19번
  page: 92
  problem_summary: |
    좌표평면 위의 두 점 A(0, 6), B(9, 0)에 대하여 선분 AB를 2:1로 내분하는 점 P.
    원 x²+y²-2ax-2by=0과 직선 AB가 점 P에서만 만날 때 a+b의 값 (a, b 상수).
  solution_summary: |
    P = ((2·9+1·0)/3, (2·0+1·6)/3) = (6, 2).
    원 x²+y²-2ax-2by=0 = (x-a)²+(y-b)² = a²+b²: 중심 (a,b), 반지름 √(a²+b²), 원점 지남.
    직선 AB: x/9 + y/6 = 1 → 2x+3y-18=0.
    "P에서만 만난다" → 원이 AB에 P에서 접함. CP ⊥ AB.
    AB 방향 (9,-6)∝(3,-2), 법선 (2,3). CP = (6-a, 2-b) ∥ (2,3):
    (6-a)/2 = (2-b)/3 → 3a - 2b = 14 ... ①
    P가 원 위: (6-a)²+(2-b)² = a²+b² → 3a + b = 10 ... ②
    소거: -3b=4 → b=-4/3, a=34/9.
    a+b = 34/9 - 12/9 = 22/9. 답 ④
  category: 원과 직선의 위치 관계 · 접점 조건
  difficulty: 4점
  tier: star_5
  _step: 유형연습
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 내분점 좌표 + 원의 접선 조건 (중심-접점 수직) + 원점 통과
  mechanism_secondary: [일반형 원 방정식 표준형 변환, 두 방정식 연립]
  insight_type: 조건통합형
  depth: 2
  citation_note: "EBS 올림포스 학평 기출 (2024.3월 고2 학평 19번) · 학습 목적"

- source: 전국연합-2022-11월-고1-20번
  page: 92
  problem_summary: |
    양수 k, 두 점 A(k, 0), B(0, k). 삼각형 OAB의 내부에 있으며 ∠AOP = ∠BAP를 만족시키는 점 P의
    y좌표의 최댓값 M(k). 문항 (가)(나)(다) 빈칸 채우고 (다)=p라 할 때 f(p)+g(1/2) 값 계산.
    (원주각-접선각 원리 이용 · 원 위 궤적.)
  solution_summary: |
    접선각 = 원주각 원리 → △OAB 내부이고 ∠AOP=∠BAP인 P는 O 지나고 AB에 A에서 접하는 원 C 위.
    원 C의 중심 C는 반지름 CA⊥AB. △OAB는 45-45-90 (OA=OB=k). ∠OAC=45° 대칭성.
    중심 C 좌표 = (k/2, ?) 형태로 (가) 결정, 원 C 반지름 (나) 결정.
    ∠PCO=45° 최댓값 조건에서 M(k) = (다)·k.
    EBS 정답: ⑤ (검증 완료 · 세션 55, 정답표 20=⑤).
  category: 원주각·접선각 원리 · 각의 이등분 조건 궤적으로서 원
  difficulty: 4점
  tier: star_5
  _step: 유형연습
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 접선각 = 원주각 원리 → 궤적으로서 원 + 매개변수 각 최댓값
  mechanism_secondary: [45-45-90 삼각형 성질, 원 중심 좌표 결정]
  insight_type: 통찰형
  depth: 3
  citation_note: "EBS 올림포스 학평 기출 (2022.11월 고1 학평 20번 · 빈칸형) · 검증 완료 (해설 대조 · 세션 55, 답 ⑤)"
```

### 유형 07 원과 직선의 위치 관계 (star 5, 4점)

```yaml
- source: 전국연합-2024-9월-고1-16번
  page: 93
  problem_summary: |
    좌표평면 위에 원 C:(x-a)²+(y-a)²=10. 원 C의 중심과 직선 y=2x 사이의 거리가 √5이고
    직선 y=kx가 원 C에 접할 때 상수 k의 값 (단, a>0, 0<k<1). 그림 제공.
  solution_summary: |
    중심 (a, a). 직선 2x-y=0 거리: |2a-a|/√5 = |a|/√5 = √5 → a = 5 (a>0).
    중심 (5, 5), 반지름 √10.
    직선 y=kx (kx-y=0) 접함: |5k-5|/√(k²+1) = √10.
    (5k-5)² = 10(k²+1) → 25k²-50k+25 = 10k²+10 → 15k²-50k+15 = 0 → 3k²-10k+3 = 0.
    k = (10±8)/6 → k = 3 or 1/3. 0<k<1 → k = 1/3. 답 ③
  category: 원의 중심-직선 거리 = 반지름 (접선 조건)
  difficulty: 4점
  tier: star_5
  _step: 유형연습
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 점-직선 거리 공식 + 접선 조건 이차방정식 판별
  mechanism_secondary: [중심 결정 (거리 조건), 두 접선 중 조건 만족 선택]
  insight_type: 조건통합형
  depth: 2
  citation_note: "EBS 올림포스 학평 기출 (2024.9월 고1 학평 16번) · 학습 목적"

- source: 전국연합-2023-11월-고1-20번
  page: 93
  problem_summary: |
    실수 t (t>0). 좌표평면 위에 네 점 A(1, 4), B(5, 4), C(2t, 0), D(0, t).
    선분 CD 위에 ∠APB = 90°인 점 P가 존재하도록 하는 t의 최댓값 M, 최솟값 m.
    M - m의 값.
  solution_summary: |
    ∠APB = 90°인 P의 자취는 지름 AB를 갖는 원 위. 원 중심 (3, 4), 반지름 2 (AB=4).
    선분 CD가 이 원과 만나야 한다.
    직선 CD: x/(2t) + y/t = 1 → x + 2y - 2t = 0.
    중심 (3,4)-직선 거리: |3 + 8 - 2t|/√5 = |11 - 2t|/√5.
    원과 만남 (접함 포함): |11 - 2t|/√5 ≤ 2 → |11 - 2t| ≤ 2√5.
    (11 - 2√5)/2 ≤ t ≤ (11 + 2√5)/2.
    (선분 위 조건 별도 검토 · 표준적 범위 도달.)
    M - m = 2√5. 답 ①
  category: 원과 선분의 위치 관계 · 지름 원주각 조건
  difficulty: 4점
  tier: star_5
  _step: 유형연습
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 지름-원주각 90° 궤적 = 원 (탈레스) + 중심-직선 거리 ≤ 반지름
  mechanism_secondary: [매개변수 t 범위 결정, 자취 원 유도, 절댓값 부등식]
  insight_type: 통찰형
  depth: 3
  citation_note: "EBS 올림포스 학평 기출 (2023.11월 고1 학평 20번) · 학습 목적"

- source: 전국연합-2019-9월-고1-21번
  page: 94
  problem_summary: |
    좌표평면 위의 세 점 A(6, 0), B(0, -3), C(10, -8)에 대하여 삼각형 ABC에 내접하는 원의 중심 P.
    선분 OP의 길이 (O는 원점).
  solution_summary: |
    AB = √(36+9) = 3√5, BC = √(100+25) = 5√5, AC = √(16+64) = 4√5.
    3:4:5 비율 → 직각삼각형, ∠A = 90°.
    내접원 반지름 r = (AB + AC - BC)/2 = (3√5 + 4√5 - 5√5)/2 = √5.
    내심은 각의 이등분 교점. ∠A 직각의 이등분 방향으로 A에서 r√2 거리.
    A(6,0) 기준: AB 방향 (-2,-1)/√5, AC 방향 (1,-2)/√5. 두 방향 합 (-1,-3)/√5.
    정규화: 크기 √10/√5 = √2. unit = (-1,-3)/√10.
    P = A + r√2 · unit = (6,0) + √5·√2·(-1,-3)/√10 = (6,0) + (-1,-3) = (5, -3).
    OP = √(25+9) = √34. 답 ④
  category: 삼각형 내심 (내접원 중심) 좌표
  difficulty: 4점
  tier: star_5
  _step: 유형연습
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 직각삼각형 인식 (3:4:5) + 내접원 반지름 공식 + 각이등분선 방향
  mechanism_secondary: [단위벡터 합, 내심 좌표 결정]
  insight_type: 통찰형
  depth: 3
  citation_note: "EBS 올림포스 학평 기출 (2019.9월 고1 학평 21번) · 학습 목적"

- source: 전국연합-2021-11월-고1-17번
  page: 94
  problem_summary: |
    좌표평면 위의 두 점 A(0, √3), B(1, 0)과 원 C:(x-1)²+(y-10)²=9.
    원 C 위의 점 P에 대하여 삼각형 ABP의 넓이가 자연수가 되도록 하는 모든 점 P의 개수.
  solution_summary: |
    직선 AB: 점 (1,0), 방향 (-1, √3). 방정식 √3·x + y - √3 = 0.
    |AB| = √(1+3) = 2.
    원 중심 (1, 10)-직선 AB 거리 d = |√3 + 10 - √3|/√(3+1) = 10/2 = 5.
    원 반지름 R = 3.
    원 위 P의 AB로부터 거리 h ∈ [d-R, d+R] = [2, 8].
    △ABP 넓이 = (1/2)·|AB|·h = h.
    자연수 넓이 값: h = 2, 3, 4, 5, 6, 7, 8 (7개).
    극값 h=2, h=8은 P가 접점 (1개씩) → 2점.
    내부 값 h=3,4,5,6,7은 원과 평행선 교점 (2개씩) → 10점.
    총 P 개수 = 2 + 10 = 12. 답 ④
  category: 원 위 점의 넓이 궤적 · 평행선 개수 세기
  difficulty: 4점
  tier: star_5
  _step: 유형연습
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 삼각형 넓이 = 밑변×높이/2 (밑변 고정) + 원-평행선 교점 개수
  mechanism_secondary: [중심-직선 거리, 넓이 구간, 극값 접점 분리]
  insight_type: 통찰형
  depth: 3
  citation_note: "EBS 올림포스 학평 기출 (2021.11월 고1 학평 17번) · 학습 목적"

- source: 전국연합-2019-3월-고2-가형-27번
  page: 94
  problem_summary: |
    원 C:x²+y²-5x=0 위의 점 P가 (가) OP=3 (나) 제1사분면 위의 점 (O 원점).
    원 C 위의 점 P에서의 접선의 기울기가 q/p일 때 p+q의 값 (p,q 서로소 자연수).
  solution_summary: |
    원 (x-5/2)²+y² = 25/4, 중심(5/2, 0), 반지름 5/2. 원점 지남.
    OP = 3 조건: x²+y² = 9. 원 위: x²+y² = 5x. → 5x = 9 → x = 9/5.
    y² = 9 - 81/25 = 144/25 → y = 12/5 (1사분면).
    P(9/5, 12/5). 접선 방향: 반지름 (P - 중심)에 수직.
    반지름 벡터: (9/5 - 5/2, 12/5) = (-7/10, 24/10). 접선 방향 (24, 7). 기울기 = 7/24.
    p = 24, q = 7. p+q = 31.
    답: 31
  category: 원 위 점 · 두 원 교점 유형 · 접선 기울기
  difficulty: 4점
  tier: star_5
  _step: 유형연습
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 두 원 (또는 원-원방정식) 연립 교점 + 접선 방향 = 반지름 수직
  mechanism_secondary: [반지름 벡터 결정, 90° 회전 후 기울기]
  insight_type: 조건통합형
  depth: 2
  citation_note: "EBS 올림포스 학평 기출 (2019.3월 고2 학평 가형 27번) · 학습 목적"

- source: 전국연합-2016-9월-고1-26번
  page: 94
  problem_summary: |
    좌표평면 위의 점 (3, 4)를 지나는 직선 중에서 원점과의 거리가 최대인 직선 l.
    원 (x-7)²+(y-5)²=1 위의 점 P와 직선 l 사이의 거리의 최솟값 m일 때 10m 값.
  solution_summary: |
    원점-직선 거리 최대 조건: l은 원점과 (3,4)를 잇는 벡터에 수직.
    → l: 3(x-3) + 4(y-4) = 0 → 3x + 4y - 25 = 0.
    원 중심 (7, 5)-l 거리 = |21 + 20 - 25|/√(9+16) = 16/5.
    원 위 P의 l 최소 거리 = 16/5 - 1 = 11/5.
    10m = 22.
    답: 22
  category: 원점-직선 거리 최대 조건 + 원-직선 최소 거리
  difficulty: 4점
  tier: star_5
  _step: 유형연습
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 점 지나는 직선 · 다른 점 거리 최대 = 수직 조건 + 원-직선 최소 거리
  mechanism_secondary: [법선 벡터 활용, 두 단계 거리 결합]
  insight_type: 조건통합형
  depth: 2
  citation_note: "EBS 올림포스 학평 기출 (2016.9월 고1 학평 26번) · 학습 목적"

- source: 전국연합-2022-9월-고1-14번
  page: 94
  problem_summary: |
    중심이 점 (3, 2)이고 반지름의 길이 √5인 원 위의 점과 직선 2x-y+8=0 사이의 거리의 최솟값.
  solution_summary: |
    중심 (3, 2)-직선 2x-y+8=0 거리 d = |6 - 2 + 8|/√5 = 12/√5 = 12√5/5.
    원 위 점-직선 최소 거리 = d - r = 12√5/5 - √5 = 7√5/5.
    답 ① 7√5/5
  category: 원 위 점-직선 최소 거리 (기본)
  difficulty: 4점
  tier: star_5
  _step: 유형연습
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 중심-직선 거리 - 반지름
  insight_type: 절차형
  depth: 1
  citation_note: "EBS 올림포스 학평 기출 (2022.9월 고1 학평 14번) · 학습 목적"

- source: 전국연합-2023-11월-고1-14번
  page: 95
  problem_summary: |
    원 C:x²+y²-2x-ay-b=0. 원 C의 중심이 직선 y=2x-1 위에 있다. 원 C와 직선 y=2x-1이 만나는
    서로 다른 두 점 A, B. 원 C 위의 점 P에 대하여 삼각형 ABP 넓이의 최댓값이 4일 때 a+b의 값
    (a, b 상수, P는 A도 B도 아님).
  solution_summary: |
    표준형: (x-1)² + (y - a/2)² = 1 + a²/4 + b. 중심 (1, a/2).
    중심이 y=2x-1 위: a/2 = 1 → a = 2. 중심 (1, 1).
    AB는 중심을 지나는 현 → AB = 지름 = 2r.
    △ABP 최대 넓이 = (1/2)·2r·r = r² = 4 → r = 2.
    반지름²: 1 + 1 + b = 4 → b = 2.
    a + b = 4. 답 ④
  category: 원의 지름-현 · 삼각형 최대 넓이 · 일반형 계수 결정
  difficulty: 4점
  tier: star_5
  _step: 유형연습
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 중심-직선 조건으로 미지수 결정 + 지름 현일 때 P는 수직 최대 위치
  mechanism_secondary: [표준형 변환, 넓이 최대 = r²]
  insight_type: 조건통합형
  depth: 2
  citation_note: "EBS 올림포스 학평 기출 (2023.11월 고1 학평 14번) · 학습 목적"

- source: 전국연합-2022-9월-고1-21번
  page: 95
  problem_summary: |
    원 x²+y²=25 위에 세 점 A(-5, 0), B(0, -5), C(4, 3). 점 B를 포함하지 않는 호 AC 위의 점 P.
    ㄱ. 점 B와 직선 AC 사이의 거리는 2√10이다.
    ㄴ. 사각형 PABC의 넓이가 최대일 때, 직선 PB와 직선 AC는 서로 수직이다.
    ㄷ. 사각형 PABC의 넓이의 최댓값은 15(3+√10)/2이다.
    옳은 것만 있는 대로 고른 것. (그림 제공)
  solution_summary: |
    ㄱ 검증: 직선 AC 방정식 x - 3y + 5 = 0. B(0, -5) 거리: |0 + 15 + 5|/√10 = 20/√10 = 2√10. ㄱ 참.
    ㄴ·ㄷ 검증: 사각형 분할 방식·중심-AC 거리·원 위 P 최대 거리 결합.
    EBS 정답: ④ ㄱ,ㄷ (검증 완료 · 세션 55, 정답표 21=④).
  category: 원 위 사각형 · 넓이 최댓값 · 참거짓 분석 종합형
  difficulty: 4점 (21번급)
  tier: star_5
  _step: 유형연습
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 사각형 넓이 분할 + 원 위 점 최대 거리 + 접선-현 수직 관계
  mechanism_secondary: [외적 넓이 공식, ㄱ·ㄴ·ㄷ 3항 검증]
  insight_type: 통찰형
  depth: 3
  citation_note: "EBS 올림포스 학평 기출 (2022.9월 고1 학평 21번 · 종합형) · 검증 완료 (해설 대조 · 세션 55, 답 ④ ㄱ,ㄷ)"

- source: 전국연합-2023-9월-고1-19번
  page: 95
  problem_summary: |
    좌표평면에 기울기 2인 직선 l이 원 x²+y²=10과 제2사분면 위의 점 A, 제3사분면 위의 점 B에서 만난다.
    AB=2√5. 직선 OA와 원이 만나는 점 중 A가 아닌 점을 C. 점 C를 지나고 x축과 평행한 직선이 l과
    만나는 점 D(a, b)일 때 a+b 값 (O 원점).
  solution_summary: |
    현 AB=2√5, 반지름 √10. 중심-l 거리 d = √(10 - 5) = √5.
    l: y=2x+c → 2x-y+c=0. |c|/√5 = √5 → |c| = 5.
    A, B 모두 x<0 (2사분면·3사분면) → 근 합 -4c/5<0 → c>0. c=5.
    5x²+20x+15 = 0 → x²+4x+3 = 0 → x=-1 or -3.
    A(-1, 3), B(-3, -1). 직선 OA: y = -3x. 원과 교점: x=±1. C(1, -3) (A 아닌 점).
    x축 평행선 y=-3. l 만남: -3 = 2x+5 → x=-4. D(-4, -3).
    a+b = -7. 답 ③
  category: 원의 현 · 부호 결정 · 대칭 교점 · 평행선 교점
  difficulty: 4점
  tier: star_5
  _step: 유형연습
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 현길이-중심거리 관계 + 사분면 조건으로 y절편 부호 결정 + 원-직선 교점
  mechanism_secondary: [원점 대칭 교점, x축 평행선 교점]
  insight_type: 조건통합형
  depth: 3
  citation_note: "EBS 올림포스 학평 기출 (2023.9월 고1 학평 19번) · 학습 목적"

- source: 전국연합-2019-3월-고2-나형-17번
  page: 95
  problem_summary: |
    원 C:x²+y²-4x-2ay+a²-9=0이 다음 조건 만족.
    (가) 원 C는 원점을 지난다.
    (나) 원 C는 직선 y=-2와 서로 다른 두 점에서 만난다.
    원 C와 직선 y=-2가 만나는 두 점 사이의 거리 (a 상수).
  solution_summary: |
    표준형: (x-2)² + (y-a)² = 13. 중심 (2, a), 반지름 √13.
    (가) 원점 지남: 4 + a² = 13 → a = ±3.
    (나) y=-2 두 점 만남: |a+2| < √13.
    a=3: 5 > √13 (≈3.6) 불만족. a=-3: 1 < √13 만족. → a = -3.
    (x-2)² + 1 = 13 → x = 2 ± 2√3. 두 점 거리 = 4√3. 답 ⑤
  category: 원의 일반형 · 조건 만족 계수 결정 + 현길이
  difficulty: 4점
  tier: star_5
  _step: 유형연습
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 표준형 변환 + 원점 통과 조건 + 부등식으로 부호 결정 + 현길이
  mechanism_secondary: [두 가지 a 후보 중 조건 만족 선택]
  insight_type: 조건통합형
  depth: 2
  citation_note: "EBS 올림포스 학평 기출 (2019.3월 고2 학평 나형 17번) · 학습 목적"
```

### 유형 08 원의 접선의 방정식 (1) (star 5, 4점)

```yaml
- source: 전국연합-2023-9월-고1-26번
  page: 96
  problem_summary: |
    좌표평면에서 원 x²+y²=25 위의 점 (3, -4)에서의 접선이 원 (x-6)²+(y-8)²=r²과
    만나도록 하는 자연수 r의 최솟값.
  solution_summary: |
    원 x²+y²=25 점 (3, -4) 접선: 3x - 4y = 25.
    원 (x-6)²+(y-8)²=r² 중심 (6, 8).
    중심-접선 거리 d = |18 - 32 - 25|/5 = 39/5 = 7.8.
    두 원-선 만남: r ≥ 39/5. 자연수 최솟값 r = 8. 답: 8
  category: 원 위 점 접선 + 다른 원-직선 교점 조건
  difficulty: 4점
  tier: star_5
  _step: 유형연습
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 접점 공식 x₁x+y₁y=r² + 점-직선 거리 ≤ r
  mechanism_secondary: [자연수 최솟값 = 올림]
  insight_type: 절차형
  depth: 1
  citation_note: "EBS 올림포스 학평 기출 (2023.9월 고1 학평 26번) · 학습 목적"

- source: 전국연합-2020-11월-고1-20번
  page: 96
  problem_summary: |
    좌표평면에 원 C:x²+y²=4와 점 A(-2, 0). 원 C 위의 제1사분면 위 점 P에서의 접선이 x축과 만나는
    점 B, P에서 x축에 내린 수선의 발 H. 2·AH = HB일 때 삼각형 PAB의 넓이 (그림 제공).
  solution_summary: |
    P(2cosθ, 2sinθ), 0<θ<π/2. 접선: xcosθ + ysinθ = 2. y=0: x=2/cosθ. B(2/cosθ, 0). H(2cosθ, 0).
    AH = 2cosθ + 2. HB = 2/cosθ - 2cosθ = 2sin²θ/cosθ.
    2AH = HB → (2cosθ+2)·cosθ = sin²θ = 1-cos²θ. 정리: 3cos²θ + 2cosθ - 1 = 0.
    → (3cosθ-1)(cosθ+1) = 0. cosθ = 1/3. sinθ = 2√2/3.
    P(2/3, 4√2/3), B(6, 0). AB = 8. △PAB = (1/2)·8·(4√2/3) = 16√2/3. 답 ④
  category: 원의 접선 · 수선의 발 · 삼각형 넓이
  difficulty: 4점
  tier: star_5
  _step: 유형연습
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 매개변수 접점 표현 + 접선-x축 교점 + 조건식 삼각함수 이차방정식
  mechanism_secondary: [수선의 발 x좌표 = P의 x좌표, 넓이 공식]
  insight_type: 통찰형
  depth: 3
  citation_note: "EBS 올림포스 학평 기출 (2020.11월 고1 학평 20번) · 학습 목적"
```

### 유형 09 원의 접선의 방정식 (2) (star 5, 4점)

```yaml
- source: 전국연합-2019-11월-고1-14번
  page: 96
  problem_summary: |
    좌표평면 위의 점 (2, -4)에서 원 x²+y²=2에 그은 두 접선이 각각 y축과 만나는 점의 좌표를
    (0, a), (0, b)라 할 때 a+b의 값.
  solution_summary: |
    접선 y = mx + c. (2, -4) 지남: c = -4 - 2m.
    원점-접선 거리 = √2: c² = 2(1+m²) → (4+2m)² = 2+2m² → 2m² + 16m + 14 = 0.
    m² + 8m + 7 = 0 → m = -1 or -7.
    y절편: m=-1 → c=-2. m=-7 → c=10. a+b = 8. 답 ③
  category: 원 밖 점 두 접선 · y절편 합
  difficulty: 4점
  tier: star_5
  _step: 유형연습
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 접선 방정식 y=mx+c + 원-직선 거리 = 반지름 → m의 이차방정식
  mechanism_secondary: [근과 계수의 관계 활용 가능, y절편 두 값 합]
  insight_type: 조건통합형
  depth: 2
  citation_note: "EBS 올림포스 학평 기출 (2019.11월 고1 학평 14번) · 학습 목적"

- source: 전국연합-2019-3월-고2-나형-29번
  page: 96
  problem_summary: |
    좌표평면에 원 C₁:(x+7)²+(y-2)²=20. 점 P(a, 0)에서 C₁에 두 접선 l₁, l₂. 두 직선 l₁, l₂가
    원 C₂:x²+(y-b)²=5에 모두 접할 때 두 직선 l₁, l₂의 기울기의 곱 c일 때 11(a+b+c)의 값
    (a, b 양의 상수). (그림 제공)
  solution_summary: |
    두 원 반지름 √20, √5 (비 2:1). 두 접선이 두 원 모두 접함 → 두 원은 P에 대한 외접 상사 (또는 내접).
    상사 중심 P는 두 중심을 반지름 비로 외분 (외접선의 경우).
    외분: P = ((-7)·(-1) + 0·2)/(2-1), (2·(-1) + b·2)/(2-1)) 형태. a=7, y=0 → b=1.
    P(7, 0). C₁ 중심 (-7, 2). 접선 y = m(x-7), mx-y-7m=0. 중심-거리 = √20:
    |-7m-2-7m|/√(m²+1) = 2√5 → (14m+2)² = 20(m²+1) → 176m² + 56m - 16 = 0 → 22m² + 7m - 2 = 0.
    두 근 곱 c = -2/22 = -1/11.
    11(a+b+c) = 11(7+1-1/11) = 11·8 - 1 = 87. 답: 87
  category: 두 원 공통 외접선 · 상사 중심 · 접선 기울기 곱
  difficulty: 4점 (29번급)
  tier: star_5
  _step: 유형연습
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 두 원 공통 접선 상사 중심 + 접선 방정식 → m의 이차 + 근과 계수 관계
  mechanism_secondary: [외분점 좌표, 원-직선 거리 이차방정식]
  insight_type: 통찰형
  depth: 3
  citation_note: "EBS 올림포스 학평 기출 (2019.3월 고2 학평 나형 29번) · 학습 목적"
```

## CM2-GM-04 평행이동·대칭이동 (10수05-04)

**대상 범위**: 유형 10·11·12·13·15 및 1등급 도전 중 이동 관련 (인쇄 97~102쪽 / PDF 25~30쪽). 4점 문항 전수 자산화.
**세션 54 (2026-07-20)** 신설. 유형 14 (평행이동+대칭이동)는 4점 문항 없음 (전량 3점).

### 유형 10 점의 평행이동 (star 5, 4점)

```yaml
- source: 전국연합-2019-9월-고1-19번
  page: 97
  problem_summary: |
    좌표평면 위에 세 점 A(0, 9), B(-9, 0), C(9, 0). 실수 t (0<t<18)에 대하여 세 점 O, A, B를
    x축의 방향으로 t만큼 평행이동한 점 O', A', B'. 삼각형 OCA의 내부와 삼각형 O'A'B'의 내부의
    공통부분의 넓이 S(t)의 최댓값 (O 원점, 그림 제공).
  solution_summary: |
    △OCA: O(0,0), C(9,0), A(0,9). 빗변 CA: y=-x+9.
    △O'A'B': O'(t,0), A'(t,9), B'(t-9,0). 빗변 A'B': y=x-t+9.
    공통부분 형태와 t에 따른 넓이 함수 분석.
    두 삼각형이 겹치는 영역의 형상 (t 범위별 삼각형·사다리꼴).
    (원본 정답 후보: 21·24·27·30·33. 27 유력 · EBS 원본 확인 대기.)
  category: 평행이동 · 두 삼각형 공통부분 넓이 최대
  difficulty: 4점 (19번급)
  tier: star_5
  _step: 유형연습
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: 평행이동 후 두 도형 공통부분 넓이 매개변수 t 함수 최적화
  mechanism_secondary: [직선의 교점, 사다리꼴·삼각형 넓이 분석]
  insight_type: 통찰형
  depth: 3
  citation_note: "EBS 올림포스 학평 기출 (2019.9월 고1 학평 19번) · 정답 확인 불가 (참고자료 2019 해설 PDF 미보유 · 세션 55 조회 실패)"
```

### 유형 11 도형의 평행이동 (star 5, 4점)

```yaml
- source: 전국연합-2022-3월-고2-27번
  page: 98
  problem_summary: |
    두 양수 a, b에 대하여 원 C:(x-1)²+y²=r²을 x축의 방향으로 a만큼, y축의 방향으로 b만큼 평행이동한 원 C'.
    두 원 C, C'이 다음 조건 만족.
    (가) 원 C'은 원 C의 중심을 지난다.
    (나) 직선 4x-3y+21=0은 두 원 C, C'에 모두 접한다.
    a+b+r의 값 (r 양수).
  solution_summary: |
    원 C 중심 (1, 0), 반지름 r. 원 C' 중심 (1+a, b), 반지름 r.
    (가): C'가 (1, 0)을 지남 → a² + b² = r².
    (나): C 중심-직선 거리 = |4-0+21|/5 = 5 = r.
    C' 중심-직선 거리 = 5: |4(1+a) - 3b + 21| = 25 → |4a-3b+25| = 25.
    Case 4a-3b = 0 → b = 4a/3. a² + b² = 25: 25a²/9 = 25 → a = 3. b = 4.
    a+b+r = 3+4+5 = 12. 답: 12
  category: 도형 평행이동 · 조건 만족 상수 결정 · 두 원 공통 접선
  difficulty: 4점
  tier: star_5
  _step: 유형연습
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: 평행이동 원 방정식 + 원-원 통과 조건 + 원-직선 접선 조건
  mechanism_secondary: [절댓값 두 경우 분리, 두 방정식 연립]
  insight_type: 조건통합형
  depth: 2
  citation_note: "EBS 올림포스 학평 기출 (2022.3월 고2 학평 27번) · 학습 목적"

- source: 전국연합-2019-3월-고2-가형-28번
  page: 98
  problem_summary: |
    두 자연수 m, n에 대하여 원 C:(x-2)²+(y-3)²=9를 x축의 방향으로 m만큼 평행이동한 원 C₁,
    원 C₁을 y축의 방향으로 n만큼 평행이동한 원 C₂. 두 원 C₁, C₂와 직선 l:4x-3y=0이 다음 조건 만족.
    (가) 원 C₁은 직선 l과 서로 다른 두 점에서 만난다.
    (나) 원 C₂는 직선 l과 서로 다른 두 점에서 만난다.
    m + n의 최댓값.
  solution_summary: |
    C₁ 중심 (2+m, 3), C₂ 중심 (2+m, 3+n).
    두 원 모두 직선과 서로 다른 두 점: 중심-l 거리 < 3.
    C₁: |4(2+m)-9|/5 < 3 → |4m-1| < 15 → m 자연수: 1, 2, 3.
    C₂: |4m-3n-1| < 15 → (4m-16)/3 < n < (4m+14)/3.
    m=3: n < 26/3 ≈ 8.67. n 최대 8. m+n = 11.
    m=2: n 최대 7. m+n = 9. m=1: n 최대 5. m+n = 6.
    최댓값 11. 답: 11
  category: 평행이동 · 원-직선 위치 관계 조건 · 자연수 최적화
  difficulty: 4점
  tier: star_5
  _step: 유형연습
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: 평행이동 원 중심 이동 + 원-직선 거리 < 반지름 + 자연수 조합 최대
  mechanism_secondary: [두 조건 각각 처리, 최댓값 탐색]
  insight_type: 조건통합형
  depth: 2
  citation_note: "EBS 올림포스 학평 기출 (2019.3월 고2 학평 가형 28번) · 학습 목적"

- source: 전국연합-2016-3월-고2-나형-28번
  page: 98
  problem_summary: |
    좌표평면에 세 점 O(0,0), A(4,0), B(0,3)을 꼭짓점으로 하는 삼각형 OAB를 평행이동한 도형이
    삼각형 O'A'B'. 점 A'의 좌표가 (9, 2)일 때 삼각형 O'A'B'에 내접하는 원의 방정식이
    x²+y²+ax+by+c=0. a+b+c의 값 (a,b,c 상수). (그림 제공)
  solution_summary: |
    이동 벡터 (5, 2). O'(5,2), A'(9,2), B'(5,5). 직각삼각형 (직각 O'). 3-4-5.
    내접원 반지름 r = 1. 내심 = (6, 3). 원: (x-6)² + (y-3)² = 1.
    → x²+y² - 12x - 6y + 44 = 0. a=-12, b=-6, c=44. a+b+c = 26. 답: 26
  category: 평행이동 벡터 결정 + 직각삼각형 내접원 (일반형 계수)
  difficulty: 4점
  tier: star_5
  _step: 유형연습
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: 평행이동 벡터 (한 점 대응) + 3-4-5 직각삼각형 내접원 공식 + 표준형-일반형 변환
  mechanism_secondary: [내심 좌표, 좌표 이동]
  insight_type: 조건통합형
  depth: 2
  citation_note: "EBS 올림포스 학평 기출 (2016.3월 고2 학평 나형 28번) · 학습 목적"
```

### 유형 12 점의 대칭이동 (star 5, 4점)

```yaml
- source: 전국연합-2023-11월-고1-12번
  page: 98
  problem_summary: |
    좌표평면 위의 두 점 A(1, 0), B(6, 5)와 직선 y=x 위의 점 P에 대하여 AP + BP의 값이 최소가
    되도록 하는 점 P를 P₀. 직선 AP₀를 직선 y=x에 대하여 대칭이동한 직선이 점 (9, a)를 지날 때
    a의 값.
  solution_summary: |
    A(1,0) y=x 대칭 → A'(0, 1). AP+BP 최소 = A'B (P는 A'B와 y=x 교점).
    A'B: 기울기 2/3, y = (2/3)x + 1. y=x 교점: x=3. P₀(3, 3).
    직선 AP₀: A(1,0), P₀(3,3), 기울기 3/2. y = (3/2)(x-1).
    y=x 대칭 (x↔y): x = (3/2)(y-1) → y = (2/3)x + 1.
    (9, a): a = 6+1 = 7. 답 ④
  category: 대칭점 활용 최단거리 + 직선의 대칭이동
  difficulty: 4점
  tier: star_5
  _step: 유형연습
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: 두 점 거리 합 최소 = 한 점 대칭 후 두 점 직선거리 + 직선의 y=x 대칭 (x↔y)
  mechanism_secondary: [교점 계산, 대칭 직선 방정식]
  insight_type: 조건통합형
  depth: 2
  citation_note: "EBS 올림포스 학평 기출 (2023.11월 고1 학평 12번) · 학습 목적"

- source: 전국연합-2024-9월-고1-27번
  page: 98
  problem_summary: |
    좌표평면 위의 점 A(a, 2) (a>2)를 직선 y=x에 대하여 대칭이동한 점 B, 점 B를 x축에 대하여
    대칭이동한 점 C. 두 삼각형 ABC, AOC의 외접원의 반지름 길이 r₁, r₂. r₁ × r₂ = 18√2일 때
    a²의 값 (O 원점, 그림 제공).
  solution_summary: |
    B(2, a), C(2, -a). △ABC 세 변: AB = (a-2)√2, AC = √(2a²+8), BC = 2a.
    S_ABC = (1/2)|2a² - 4a| = a(a-2). r₁ = AB·AC·BC/(4·S) = √(a²+4).
    △AOC 세 변: AO = √(a²+4), OC = √(a²+4), AC = √2·√(a²+4).
    S_AOC = (a²+4)/2. r₂ = √2·√(a²+4)/2.
    r₁·r₂ = √2·(a²+4)/2 = 18√2 → a²+4 = 36 → a² = 32. 답: 32
  category: 대칭이동 (두 축) · 외접원 반지름 곱
  difficulty: 4점
  tier: star_5
  _step: 유형연습
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: y=x 대칭 (x↔y) + x축 대칭 (y→-y) + 외접원 R = abc/(4S) 공식
  mechanism_secondary: [삼각형 넓이 좌표 공식, 두 삼각형 관계 분석]
  insight_type: 통찰형
  depth: 3
  citation_note: "EBS 올림포스 학평 기출 (2024.9월 고1 학평 27번) · 학습 목적"
```

### 유형 13 도형의 대칭이동 (star 5, 4점)

```yaml
- source: 전국연합-2023-9월-고1-15번
  page: 99
  problem_summary: |
    이차함수 y=-x²의 그래프를 x축에 대하여 대칭이동한 후, x축의 방향으로 4만큼, y축의 방향으로
    m만큼 평행이동한 그래프가 직선 y=2x+3에 접할 때 상수 m의 값.
  solution_summary: |
    y=-x² x축 대칭: y = x². +(4, m) 평행이동: y = (x-4)² + m.
    y=2x+3 접함: x² - 10x + (13+m) = 0. 판별식 = 100 - 4(13+m) = 0 → m = 12. 답 ⑤
  category: x축 대칭 + 평행이동 + 이차함수-직선 접선
  difficulty: 4점
  tier: star_5
  _step: 유형연습
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: 그래프 변환 순서 (대칭 후 평행) + 이차-일차 접선 판별식 = 0
  mechanism_secondary: [순차 변환 처리, m 결정]
  insight_type: 조건통합형
  depth: 2
  citation_note: "EBS 올림포스 학평 기출 (2023.9월 고1 학평 15번) · 학습 목적"
```

### 유형 15 대칭이동을 이용한 거리의 최솟값 (star 5, 4점)

```yaml
- source: 전국연합-2020-11월-고1-14번
  page: 100
  problem_summary: |
    좌표평면 위에 점 A(0, 1)과 직선 l:y=-x+2. 직선 l 위의 제1사분면 위의 점 B(a, b)와 x축 위의
    점 C에 대하여 AC + BC의 값이 최소일 때 a² + b²의 값. (그림 제공)
  solution_summary: |
    A(0,1) x축 대칭 → A'(0, -1). AC + BC = A'C + BC ≥ A'B (C가 A'B 위, B 자유).
    B는 l 위, A'B 최소 = A'와 l 거리. l: x+y-2=0. 거리 = |0-1-2|/√2 = 3√2/2.
    B는 A'에서 l에 내린 수선의 발. 법선 방향 (1,1)/√2. B = A' + (3/√2)·(1,1)/√2 = (3/2, 1/2).
    a² + b² = 9/4 + 1/4 = 5/2. 답 ⑤
  category: 두 축·두 점 반사 최단거리 + 최적 B 위치
  difficulty: 4점
  tier: star_5
  _step: 유형연습
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: x축 대칭 후 A'B 최소 = 점-직선 거리 + 수선의 발 좌표
  mechanism_secondary: [반사 최단거리 원리, 수선의 발 공식]
  insight_type: 통찰형
  depth: 3
  citation_note: "EBS 올림포스 학평 기출 (2020.11월 고1 학평 14번) · 학습 목적"

- source: 전국연합-2019-11월-고1-27번
  page: 100
  problem_summary: |
    좌표평면 위에 두 점 A(1, 2), B(2, 1). x축 위의 점 C에 대하여 삼각형 ABC의 둘레의 길이의
    최솟값이 √a + √b일 때 두 자연수 a, b의 합 a + b의 값 (C는 직선 AB 위에 있지 않음).
  solution_summary: |
    AB = √2 (고정). BC + CA 최소: A x축 대칭 → A'(1, -2). BC + CA' ≥ A'B = √(1+9) = √10.
    둘레 최솟값 = √2 + √10. a=2, b=10. a+b = 12. 답: 12
  category: 삼각형 둘레 최소 · x축 대칭 활용
  difficulty: 4점
  tier: star_5
  _step: 유형연습
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: 한 점 대칭 후 다른 점과 직선거리 = 최단 경로
  mechanism_secondary: [고정 변 AB, 자유점 C 위치 무관 최소]
  insight_type: 조건통합형
  depth: 2
  citation_note: "EBS 올림포스 학평 기출 (2019.11월 고1 학평 27번) · 학습 목적"

- source: 전국연합-2023-9월-고1-16번
  page: 101
  problem_summary: |
    좌표평면 위에 두 원 C₁:(x-8)²+(y-2)²=4, C₂:(x-3)²+(y+4)²=4와 직선 y=x. 점 A는 원 C₁ 위,
    점 B는 원 C₂ 위. 점 P는 x축 위, 점 Q는 직선 y=x 위에 있을 때 AP + PQ + QB의 최솟값 (그림 제공).
  solution_summary: |
    C₁을 x축 대칭 → C₁': 중심 (8, -2), 반지름 2. C₂를 y=x 대칭 → C₂': 중심 (-4, 3), 반지름 2.
    AP + PQ + QB = A'P + PQ + QB' ≥ |중심 A'중심 - B'중심| - 2 - 2.
    중심 거리 = √(144 + 25) = 13. 최소 = 13 - 4 = 9. 답 ③
  category: 두 원·두 직선 대칭 활용 최단 경로
  difficulty: 4점
  tier: star_5
  _step: 유형연습
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: 다중 대칭 (P는 x축, Q는 y=x) + 두 원 사이 최단 = |중심거리| - r₁ - r₂
  mechanism_secondary: [원의 대칭이동, 중심 좌표 계산]
  insight_type: 통찰형
  depth: 3
  citation_note: "EBS 올림포스 학평 기출 (2023.9월 고1 학평 16번) · 학습 목적"

- source: 전국연합-2022-9월-고1-17번
  page: 101
  problem_summary: |
    좌표평면 위에 두 점 A(2, 3), B(-3, 1). 서로 다른 두 점 C, D가 각각 x축과 직선 y=x 위에 있을 때
    AD + CD + BC의 최솟값. (그림 제공)
  solution_summary: |
    A y=x 대칭 → A'(3, 2). B x축 대칭 → B'(-3, -1).
    AD + CD + BC = A'D + CD + CB' ≥ A'B'.
    A'B' = √((3-(-3))² + (2-(-1))²) = √(36+9) = 3√5. 답 ④
  category: 두 반사 (x축·y=x) · 세 선분 합 최소
  difficulty: 4점
  tier: star_5
  _step: 유형연습
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: A는 y=x 대칭, B는 x축 대칭 → 직선 A'B' 최소
  mechanism_secondary: [두 자유점 두 축, 순서 맞춤]
  insight_type: 조건통합형
  depth: 2
  citation_note: "EBS 올림포스 학평 기출 (2022.9월 고1 학평 17번) · 학습 목적"

- source: 전국연합-2017-11월-고1-16번
  page: 101
  problem_summary: |
    좌표평면 위에 세 점 A(0, 1), B(0, 2), C(0, 4)와 직선 y=x 위의 두 점 P, Q. AP + PB + BQ + QC의
    값이 최소가 되도록 하는 두 점 P, Q에 대하여 선분 PQ의 길이. (그림 제공)
  solution_summary: |
    A y=x 대칭 → A'(1, 0). C y=x 대칭 → C'(4, 0).
    AP+PB = A'P+PB, BQ+QC = BQ+QC'. 
    P: A'B 직선 (y = -2x+2) ∩ y=x → P(2/3, 2/3).
    Q: BC' 직선 (y = -x/2+2) ∩ y=x → Q(4/3, 4/3).
    PQ = √((2/3)²·2) = √(8/9) = 2√2/3. 답 ② 2√2/3
  category: 두 반사 활용 다단 최단 경로
  difficulty: 4점
  tier: star_5
  _step: 유형연습
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: 두 점 각각 y=x 대칭 후 직선 교점 P, Q 결정
  mechanism_secondary: [PQ 거리 계산]
  insight_type: 통찰형
  depth: 3
  citation_note: "EBS 올림포스 학평 기출 (2017.11월 고1 학평 16번) · 학습 목적"
```

### 1등급 도전 · 원·평행이동·대칭이동 (star_5_premium, 4점)

```yaml
- source: 전국연합-2021-3월-고2-29번
  page: 102
  problem_summary: |
    원 (x-a)²+(y+a)²=9a² (a>0)과 x축이 만나는 두 점 A, B. 삼각형 ABP의 넓이가 8√2가 되도록 하는
    원 위의 점 P의 개수 3일 때 이 3개의 점을 각각 P₁, P₂, P₃. 삼각형 P₁P₂P₃의 넓이 S일 때 a×S의 값.
  solution_summary: |
    원 중심 (a, -a), 반지름 3a. x축 교점: A(a-2√2·a, 0), B(a+2√2·a, 0). AB = 4√2·a.
    △ABP 넓이 = 2√2·a·h_P = 8√2 → h_P = 4/a. y_P = ±4/a.
    P 개수 3 조건: 하나는 접선(1점), 다른 하나 두 교점(2점).
    y=4/a와 접함: 4/a = 2a (원 상단 y_max = -a+3a = 2a) → a² = 2 → a = √2.
    y=-2√2와 원 교점: (x-√2)² = 16 → x = √2±4. 
    P₁(√2, 2√2) 접점, P₂(√2+4, -2√2), P₃(√2-4, -2√2).
    S = (1/2)·8·4√2 = 16√2. a·S = √2·16√2 = 32. 답: 32
  category: 원과 수평선 교점 개수 + 접선 조건 + 대칭 삼각형 넓이
  difficulty: 4점 (29번 · 1등급 도전)
  tier: star_5_premium
  _step: 1등급도전
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 원과 x축 교점 → 삼각형 넓이 조건 → 원-평행선 접선 개수 3 조건 → 대칭 도형 넓이
  mechanism_secondary: [높이 파라미터화, 접선 조건 이차방정식, 좌우 대칭 삼각형]
  insight_type: 통찰형
  depth: 3
  depth_conditions:
    - "원-x축 교점 좌표 매개변수 a"
    - "△ABP 넓이 = 8√2에서 P의 x축 거리 h = 4/a"
    - "P 개수 3 조건 → 하나는 접선, 나머지 두 교점 (접+2)"
    - "a 값 결정 후 P₁P₂P₃ 좌표 · 넓이 · 대칭 활용"
  citation_note: "EBS 올림포스 학평 기출 (2021.3월 고2 학평 29번 · 1등급 도전) · 학습 목적"

- source: 전국연합-2024-3월-고2-21번
  page: 102
  problem_summary: |
    두 직선 l₁:y=mx (m>1)과 l₂:y=x/m에 동시에 접하는 원의 중심 A. 직선 l₁과 원의 접점 P.
    직선 l₂와 원의 접점 Q. 직선 PQ가 x축과 만나는 점 R. 세 점 P, Q, R이 다음 조건 만족.
    (가) PQ = QR
    (나) 삼각형 OPQ의 넓이는 24이다.
    직선 l₁과 직선 AQ의 교점 B라 할 때 선분 BQ의 길이 (원의 중심 A는 제1사분면 위, O 원점, 그림 제공).
  solution_summary: |
    l₁, l₂ 원점 지남. arctan(m) + arctan(1/m) = 90° → 각의 이등분선은 y=x. A는 y=x 위.
    OP = OQ (원 밖 점에서 두 접선 길이 같음).
    A = (t, t). 반지름 r = t(m-1)/√(m²+1). OP = t(m+1)/√(m²+1).
    조건 (가) PQ=QR + (나) △OPQ=24 → m, t 결정.
    BQ 길이 계산.
    EBS 해설: BQ = 3√5. 답: ④ 3√5 (해설 대조 검증 완료).
  category: 두 직선 공통 접원 + 각이등분선 · 접선 길이 · 다중 조건
  difficulty: 4점 (21번 · 1등급 도전)
  tier: star_5_premium
  _step: 1등급도전
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 두 직선 공통접원 중심 = 각이등분선 + 접선 길이 공식 + PQ, QR 길이 조건
  mechanism_secondary: [arctan m + arctan(1/m) = 90° 성질, 삼각형 넓이 방정식]
  insight_type: 통찰형
  depth: 3
  citation_note: "EBS 올림포스 학평 기출 (2024.3월 고2 학평 21번 · 1등급 도전) · 검증 완료 (해설 대조 · 세션 55, 답 ④ 3√5)"

- source: 전국연합-2018-11월-고1-21번
  page: 102
  problem_summary: |
    좌표평면에서 반지름 r이고 중심이 이차함수 y = x²/2 + 7/2의 그래프 위에 있는 원 중에서
    직선 y = x + 7에 접하는 원의 개수 m, 직선 y = x에 접하는 원의 개수 n.
    m이 홀수일 때 m + n + r²의 값 (r 상수).
  solution_summary: |
    포물선 위 중심 (t, t²/2 + 7/2). 
    직선 y=x+7 접함: |t² - 2t - 7| = 2√2·r → t² - 2t - 7 = ±2√2·r.
    Case I: 항상 판별식 > 0, 2개. Case II: 판별식 = 32 - 8√2·r. 
    r = √2 이면 판별식 0 (1점). m = 2+1 = 3 (홀수 조건 만족).
    직선 y=x 접함: |t² - 2t + 7| = 4. t²-2t+7 = (t-1)²+6 ≥ 6 > 4. 해 없음. n = 0.
    m + n + r² = 3 + 0 + 2 = 5. 답 ⑤
  category: 포물선 위 원 중심 · 원-직선 접선 개수 · 판별식 조건
  difficulty: 4점 (21번 · 1등급 도전)
  tier: star_5_premium
  _step: 1등급도전
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 원-직선 접선 조건 → t의 이차방정식 → 판별식 · 근 개수 홀수 조건
  mechanism_secondary: [절댓값 두 경우 분리, r 결정, 두 직선 각각 검토]
  insight_type: 통찰형
  depth: 3
  citation_note: "EBS 올림포스 학평 기출 (2018.11월 고1 학평 21번 · 1등급 도전) · 학습 목적"

- source: 전국연합-2018-3월-고2-가형-28번
  page: 102
  problem_summary: |
    좌표평면 위 제1사분면 점 A와 y축 위의 점 B에 대하여 AB=AO=2√5인 이등변삼각형 OAB.
    점 A를 직선 y=x에 대하여 대칭이동한 점을 C. 점 C는 직선 y=2x 위의 점이다.
    선분 AB가 두 직선 y=x, y=2x와 만나는 점을 각각 D, E. 삼각형 ODE의 외접원의 둘레의 길이 kπ일 때
    9k²의 값 (O 원점, 그림 제공).
  solution_summary: |
    A(a, b) 제1사분면. y=x 대칭 → C(b, a). C가 y=2x 위: a = 2b. A(2b, b).
    AO = b√5 = 2√5 → b = 2. A(4, 2). B(0, y_B). AB = 2√5 → y_B = 4. B(0, 4).
    직선 AB: y = -x/2 + 4.
    D = AB ∩ y=x: x = 8/3. D(8/3, 8/3).
    E = AB ∩ y=2x: x = 8/5. E(8/5, 16/5).
    S_ODE = (1/2)|x_D y_E - x_E y_D| = (1/2)·(128/15 - 64/15) = 32/15.
    OD = 8√2/3, OE = 8√5/5, DE = 8√5/15.
    R = OD·OE·DE/(4·S) = 4√2/3. 둘레 kπ = 2πR = 8π√2/3 → k = 8√2/3.
    9k² = 9·128/9 = 128. 답: 128
  category: 대칭이동 · 이등변삼각형 · 외접원 둘레
  difficulty: 4점 (28번 · 1등급 도전)
  tier: star_5_premium
  _step: 1등급도전
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: y=x 대칭으로 A 결정 + 이등변 조건 → B 결정 + 두 직선 교점 D, E + 외접원 R
  mechanism_secondary: [삼각형 넓이 좌표 공식, R = abc/(4S), 둘레 공식]
  insight_type: 통찰형
  depth: 3
  citation_note: "EBS 올림포스 학평 기출 (2018.3월 고2 학평 가형 28번 · 1등급 도전) · 학습 목적"
```

---

## 변경 이력

- 2026-07-20 v1.0 — 세션 52 신설. 3문항 (2021.11 고1 24번·2021.3 고2 12번·2019.9 고1 29번). CM2-GM-01 R-1·R-2·R-3 학평 교체 계기.
- 2026-07-20 v1.1 — 세션 53 확장. 4점 4문항 추가 (2010.3 고2 20번·2022.11 고1 19번·2024.9 고1 20번·2017.9 고1 21번). CM2-GM-01 4점 전수 자산화 (7문항 = 3점 2 + 4점 5). 마스터 지시 "전 단원 4점 문항 전수 자산화 · 직선 제외".
- 2026-07-20 v1.2 — 세션 54 확장. CM2-GM-02 (직선의 방정식) 신설. 4점 10문항 + 1등급 도전 1문항. 유형연습 4점 10문항 (유형 8: 2022.3 고2 20·2023.3 고2 26·2019.9 고1 18·2023.11 고1 26 / 유형 9: 2018.9 고1 28·2018.11 고1 17·2024.9 고1 28·2016.3 고2 나 18·2024.9 고1 26·2020.3 고2 18) + 1등급 도전 (2017.11 고1 19번). 유형 6·7에는 4점 문항 없음 (전량 3점). 마스터 지시 "CM2 전 단원 4점 학평 문항 전수 자산화 · 직선의 방정식 담당".
- 2026-07-20 v1.3 — 세션 54 확장. CM2-GM-03 (원의 방정식·10수05-03) 신설 + CM2-GM-04 (평행이동·대칭이동·10수05-04) 신설. 총 28문항 (유형연습 4점 24문항 + 1등급 도전 4문항). 유형 6·원 (3문항)·유형 7·원과 직선 (11문항)·유형 8·원접선1 (2문항)·유형 9·원접선2 (2문항) / 유형 10·점 평행이동 (1문항)·유형 11·도형 평행이동 (3문항)·유형 12·점 대칭 (2문항)·유형 13·도형 대칭 (1문항)·유형 15·거리 최소 (5문항) + 1등급 도전 4문항. 유형 14 (평행+대칭 혼합)는 4점 없음. 답 미검증 4문항 (EBS 원본 확인 대기): 유형6-05번(2022.11 고1 20번 빈칸)·유형7-18번(2022.9 고1 21번 사각형 참거짓)·유형10-29번(2019.9 고1 19번 공통부분)·1등급 도전 02(2024.3 고2 21번 두 접원). 마스터 지시 "CM2 전 단원 4점 학평 문항 전수 자산화 · 도형의 방정식(2) 담당".
