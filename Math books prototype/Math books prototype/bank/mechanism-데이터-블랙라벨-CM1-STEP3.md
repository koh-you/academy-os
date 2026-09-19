---
name: mechanism-데이터-블랙라벨-CM1-STEP3
description: 블랙라벨 공통수학1 (2024) STEP 3 정독. 최고난도 (고쟁이 STEP 3보다 심화 · 종합 사고력 문제).
metadata:
  type: reference
  version: v1.0
  established: 2026-07-15
  source: 블랙라벨 공통수학1 (2024) STEP 3
  tier_mapping:
    STEP_3: star_5_premium_max
  unit_code: CM1
  chapters:
    - CH01: 다항식의 연산과 나머지정리 (12문제 · p.18-19)
    - CH02: 인수분해 (6문제 · p.26)
    - CH03: 복소수 (12문제 · p.36-37)
    - CH04: 이차방정식 (12문제 · p.47-48)
  total_problems: 42
  citation_note: 학습 목적 · 저작권 준수 (원문 전사 없음 · 축약 요약)
---

# 블랙라벨 공통수학1 (2024) STEP 3 — 종합 사고력 문제 정독 데이터

**출처**: 블랙라벨 공통수학1 (2024) STEP 3 "1등급을 넘어서는 종합 사고력 문제"
**대상 범위**: 4단원 (CH01 다항식 · CH02 인수분해 · CH03 복소수 · CH04 이차방정식) 전 문항
**정독 페이지**: p.18-19, p.26, p.36-37, p.47-48
**작업 목적**: mechanism 카탈로그 · tier 재판정 · 정점 3문 최상위 후보 발굴
**정독 일자**: 2026-07-15

**tier 판정 원칙**:
- STEP 3 = star_5_premium 중 최고난도 (고쟁이 STEP 3보다 심화)
- 정점 3문 최상위 후보: 다중 통찰 3+ · 학문적 정확성 요구 · 예측 저항성 강한 문항
- 통찰 유형 8종 매핑 (I-XU · I-BW · I-RT · I-EQV · I-MI · I-PD · I-SYM · I-CON)

---

## I. 다항식의 연산과 나머지정리 (CH01) — STEP 3 (12문)

```yaml
- source: 블랙라벨-CM1-CH01-STEP3-#01
  page: 18
  problem_summary: |
    세 실수 x,y,z가 (x-y)²+(y-z)²+(z-x)²=4일 때
    (x-y)²(y-z)²+(y-z)²(z-x)²+(z-x)²(x-y)² 값
  solution_summary: |
    치환 a=x-y, b=y-z, c=z-x로 a+b+c=0 조건 활용.
    (a²+b²+c²)² = a⁴+b⁴+c⁴ + 2(a²b²+b²c²+c²a²) 대칭식 전개.
  category: 대칭식·항등식
  difficulty: STEP3
  tier_estimated: star_5_premium
  tier_note: "대칭 대입 통찰 + 항등식 전개 결합"
  mechanism_primary: 대칭식 전개
  mechanism_secondary: [순환치환, 항등식 a+b+c=0 활용, 제곱합 공식]
  depth_conditions: [3변수 순환구조, 조건 z합=0]
  insight_types_used: [I-SYM: 순환대칭, I-EQV: 동치변환, I-CON: 조건 통합]
  citation_note: 블랙라벨 CM1 CH01 STEP 3

- source: 블랙라벨-CM1-CH01-STEP3-#02
  page: 18
  problem_summary: |
    0이 아닌 두 실수 a,b가 a+1/b=5+√21, b+1/a=5-√21일 때
    a²+ab+b² 값
  solution_summary: |
    두 식 곱셈 · 덧셈 조합으로 ab, a+b 도출.
    a²+ab+b² = (a+b)²-ab 형식 전환.
  category: 대칭식·연립방정식
  difficulty: STEP3
  tier_estimated: star_5_premium
  tier_note: "역수 결합·무리수 조건·대칭 변형 3중"
  mechanism_primary: 무리수 조건 연립
  mechanism_secondary: [역수 결합, 대칭 변형, 곱합 관계]
  depth_conditions: [무리수 켤레 대칭, 역수·본수 결합]
  insight_types_used: [I-RT: 표현 전환, I-EQV: 동치 변환, I-CON: 조건 통합]
  citation_note: 블랙라벨 CM1 CH01 STEP 3

- source: 블랙라벨-CM1-CH01-STEP3-#03
  page: 18
  problem_summary: |
    x값 무관 등식 (3x³-2x)⁶ = a₀+a₁x+...+a₁₈x¹⁸에서
    a₂+4a₄+6a₆-9(a₇+a₉+...+a₁₇) 값
  solution_summary: |
    x=1, x=-1, x=√3, x=-√3 등 특수값 대입.
    짝수·홀수 지수 계수의 f(x)+f(-x)/2·f(x)-f(-x)/2 분리.
  category: 항등식·수치대입법
  difficulty: STEP3
  tier_estimated: star_5_premium_max
  tier_note: "정점 후보 · 짝홀 분리 + 다중 특수값 대입 조합"
  mechanism_primary: 항등식 수치대입법
  mechanism_secondary: [짝홀 계수 분리, 특수값 조합, 계수 결합 판정]
  depth_conditions: [고차 항등식, 짝홀 조합 인식, 다중 대입값 선택]
  insight_types_used: [I-PD: 패턴 발견, I-BW: 역방향, I-MI: 다중 해석, I-EQV: 동치 변환]
  citation_note: 블랙라벨 CM1 CH01 STEP 3 · 정점 3문 최상위 후보

- source: 블랙라벨-CM1-CH01-STEP3-#04
  page: 18
  problem_summary: |
    세 실수 x,y,z에서 x+y+z=5, x²+y²+z²=15, xyz=-3일 때
    x⁵+y⁵+z⁵ 값
  solution_summary: |
    e₁=5, e₂=(합²-제곱합)/2=5, e₃=-3.
    뉴턴 항등식 pₙ = e₁pₙ₋₁ - e₂pₙ₋₂ + e₃pₙ₋₃로 p₃, p₄, p₅ 순차 계산.
  category: 대칭식·뉴턴 항등식
  difficulty: STEP3
  tier_estimated: star_5_premium
  tier_note: "뉴턴 항등식 반복 · 3변수 5차 대칭식"
  mechanism_primary: 뉴턴 항등식 재귀
  mechanism_secondary: [기본대칭식, 반복 대입, 3변수 확장]
  depth_conditions: [고차 대칭식, 재귀 관계식]
  insight_types_used: [I-PD: 패턴 발견, I-SYM: 대칭성, I-EQV: 동치 변환]
  citation_note: 블랙라벨 CM1 CH01 STEP 3

- source: 블랙라벨-CM1-CH01-STEP3-#05
  page: 18
  problem_summary: |
    네 실수 a,b,x,y에서 ax+by=4, ax²+by²=6, ax³+by³=10, ax⁴+by⁴=18일 때
    ax⁵+by⁵ 값
  solution_summary: |
    수열 Sₙ = axⁿ+byⁿ에서 (x+y)Sₙ - xySₙ₋₁ = Sₙ₊₁ 재귀 관계 도출.
    연립으로 x+y와 xy 결정 후 S₅ 계산.
  category: 재귀수열·항등식
  difficulty: STEP3
  tier_estimated: star_5_premium_max
  tier_note: "정점 후보 · 재귀 발견 + 연립 · 계수 미지"
  mechanism_primary: 재귀 관계식 발견
  mechanism_secondary: [연립 방정식, 대칭 표현, 수열 확장]
  depth_conditions: [숨은 재귀 관계, 계수 미지 상태 연립]
  insight_types_used: [I-PD: 패턴 발견, I-BW: 역방향, I-CON: 조건 통합]
  citation_note: 블랙라벨 CM1 CH01 STEP 3 · 정점 3문 최상위 후보

- source: 블랙라벨-CM1-CH01-STEP3-#06
  page: 18
  problem_summary: |
    p=(1+√5)/2, q=(1-√5)/2일 때 ap+b=-1/p⁸, aq+b=-1/q⁸를 만족하는
    두 유리수 a,b에서 2a+b 값
  solution_summary: |
    피보나치 수 표현 (p, q는 x²-x-1=0 근).
    pq=-1, p+q=1 활용으로 pⁿ = Fₙp + Fₙ₋₁ 등의 관계.
    1/p⁸ = -q⁸ (곱=-1). 유리수 조건으로 계수 결정.
  category: 이차 근·유리수 조건
  difficulty: STEP3
  tier_estimated: star_5_premium
  tier_note: "이차근·피보나치 구조·유리수 필터"
  mechanism_primary: 근과 계수의 관계
  mechanism_secondary: [피보나치 재귀, 유리수 필터, 켤레 대칭]
  depth_conditions: [이차근 구조 인식, 유리수 계수 조건]
  insight_types_used: [I-RT: 표현 전환, I-CON: 조건 통합, I-SYM: 대칭성]
  citation_note: 블랙라벨 CM1 CH01 STEP 3

- source: 블랙라벨-CM1-CH01-STEP3-#07
  page: 19
  problem_summary: |
    3 이하 자연수 n에 대해 A₁=9+99+999, Aₙ=(9,99,999에서 n개 택해 곱한 합)
    A₁+A₂+A₃-3을 100으로 나눈 나머지
  solution_summary: |
    9=10-1, 99=10²-1, 999=10³-1 대입.
    A₁+A₂+A₃ = (1+9)(1+99)(1+999) - 1 형식 전개.
    100 modulo 계산.
  category: 조합수·수의 성질
  difficulty: STEP3
  tier_estimated: star_5_premium
  tier_note: "곱셈 확장 발견 + 모듈로 · 조합 대응"
  mechanism_primary: 조합 곱 확장식
  mechanism_secondary: [10ⁿ-1 표현, 모듈로 계산, 대칭 확장]
  depth_conditions: [수 표현 재해석, 조합 곱 구조 인식]
  insight_types_used: [I-RT: 표현 전환, I-PD: 패턴 발견, I-EQV: 동치 변환]
  citation_note: 블랙라벨 CM1 CH01 STEP 3

- source: 블랙라벨-CM1-CH01-STEP3-#08
  page: 19
  problem_summary: |
    사차다항식 f(x)에서 f(k)=k/(k+1) (k=0,1,2,3,4)일 때 f(5) 값
  solution_summary: |
    g(x) = (x+1)f(x) - x 정의 시 g(k)=0 (k=0,1,2,3,4).
    g(x)는 5차 · g(x) = c·x(x-1)(x-2)(x-3)(x-4)로 표현.
    g(-1) 조건으로 c 결정 후 f(5) 계산.
  category: 다항식·인수 구성
  difficulty: STEP3
  tier_estimated: star_5_premium_max
  tier_note: "정점 후보 · 보조다항식 구성 통찰 · 5차 곱 인수"
  mechanism_primary: 보조 다항식 구성
  mechanism_secondary: [인수 5차 표현, 특수값 대입, 조건 재구성]
  depth_conditions: [숨은 다항식 구성, 유리 함수 → 다항식 전환]
  insight_types_used: [I-RT: 표현 전환, I-BW: 역방향, I-CON: 조건 통합, I-PD: 패턴 발견]
  citation_note: 블랙라벨 CM1 CH01 STEP 3 · 정점 3문 최상위 후보

- source: 블랙라벨-CM1-CH01-STEP3-#09
  page: 19
  problem_summary: |
    직육면체 ABCD-EFGH에서 단면 AFC로 사면체 F-ABC 절단.
    l₁, l₂ 모서리합 · S₁, S₂ 겉넓이합 조건에서 AC²+CF²+FA² 값
  solution_summary: |
    l₁-l₂ = 28, S₁-S₂ = 61 식에서 두 3차 대칭식 관계 도출.
    직육면체 세 변 a,b,c로 AC²+CF²+FA² = 2(a²+b²+c²) 표현.
  category: 대칭식·기하 결합
  difficulty: STEP3
  tier_estimated: star_5_premium
  tier_note: "기하 + 대칭식 연립 · 2023년 교육청"
  mechanism_primary: 대칭식 연립
  mechanism_secondary: [기하 표현 변환, 3변수 연립, 대칭식 활용]
  depth_conditions: [기하-대수 대응, 다중 대칭식]
  insight_types_used: [I-XU: 단원 결합, I-RT: 표현 전환, I-CON: 조건 통합]
  citation_note: 블랙라벨 CM1 CH01 STEP 3 · 2023년 교육청

- source: 블랙라벨-CM1-CH01-STEP3-#10
  page: 19
  problem_summary: |
    다항식 f(x)에서 f(x-1)+x⁶f(1/x³) = 7x⁶-x²+2x+5가
    모든 실수 x에서 항상 성립할 때 f(1) 값
  solution_summary: |
    f 차수 판정: 최고차 x⁶ 계수 대응 → deg f 결정.
    x=1, x=2 등 특수값 대입 + 계수비교 조합.
  category: 항등식·차수 결정
  difficulty: STEP3
  tier_estimated: star_5_premium_max
  tier_note: "정점 후보 · 함수방정식 · 차수 판정 · 다변 대입"
  mechanism_primary: 함수방정식·차수 결정
  mechanism_secondary: [수치대입법, 계수 정합성, 유리함수 항등식]
  depth_conditions: [f 미지, 함수 방정식 형태, 다중 미지수]
  insight_types_used: [I-BW: 역방향, I-CON: 조건 통합, I-MI: 다중 해석, I-EQV: 동치 변환]
  citation_note: 블랙라벨 CM1 CH01 STEP 3 · 정점 3문 최상위 후보

- source: 블랙라벨-CM1-CH01-STEP3-#11
  page: 19
  problem_summary: |
    최고차 양수 두 다항식 f(x), g(x)가 조건 만족:
    (가) f(x)를 x²+g(x)로 나눈 몫 x+3, 나머지 {g(x)}²-4x⁹
    (나) f(x)는 g(x)로 나누어떨어짐
    f(0)≠0일 때 f(2) 값
  solution_summary: |
    나눗셈 정의로 f(x) = (x+3)(x²+g(x)) + {g(x)}² - 4x⁹.
    g(x)|f(x) 조건에서 g(x)의 차수와 형태 판정.
    최고차 정합 조건으로 g(x) 결정.
  category: 나눗셈·다항식
  difficulty: STEP3
  tier_estimated: star_5_premium_max
  tier_note: "정점 후보 · 나눗셈 다중 조건 + 차수 결합"
  mechanism_primary: 다항식 나눗셈 조건 연립
  mechanism_secondary: [차수 판정, 인수 대응, 최고차 정합, 항등식]
  depth_conditions: [다중 다항식 미지, 나눗셈 이중 조건, 차수 자유도]
  insight_types_used: [I-CON: 조건 통합, I-BW: 역방향, I-PD: 패턴 발견]
  citation_note: 블랙라벨 CM1 CH01 STEP 3 · 정점 3문 최상위 후보

- source: 블랙라벨-CM1-CH01-STEP3-#12
  page: 19
  problem_summary: |
    이차다항식 P(x)가 조건 만족:
    (가) P(1)P(2)=0
    (나) 사차다항식 P(x){P(x)-4}는 x(x-4)로 나누어떨어짐
    P(6)의 최댓값과 최솟값 합
  solution_summary: |
    P(x)와 P(x)-4가 각각 인수 x, x-4 가짐 판정.
    P(x)-4 = 0의 근 관계로 P(0)=0 또는 P(4)=0 등 case 분석.
    조건 (가)와 (나)의 근 대응 케이스 다분할.
  category: 다항식·인수정리·case 분석
  difficulty: STEP3
  tier_estimated: star_5_premium_max
  tier_note: "정점 후보 · case 분할 다중 + 인수정리 결합 · 최댓·최솟값 합"
  mechanism_primary: 인수정리 case 분할
  mechanism_secondary: [인수 대응, 이중 조건, case 다분할, 극값 판정]
  depth_conditions: [P 미지·이차·다중 case, 극값 함수 판정]
  insight_types_used: [I-MI: 다중 해석, I-CON: 조건 통합, I-BW: 역방향, I-PD: 패턴 발견]
  citation_note: 블랙라벨 CM1 CH01 STEP 3 · 정점 3문 최상위 후보
```

---

## II. 인수분해 (CH02) — STEP 3 (6문)

```yaml
- source: 블랙라벨-CM1-CH02-STEP3-#01
  page: 26
  problem_summary: |
    삼각형 ABC의 세 변 a,b,c에 (a+b)²(a²+b²)-2(a²+ab+b²)c²+c⁴=0.
    한 변 8, 둘레 40일 때 삼각형 넓이
  solution_summary: |
    좌변을 c²에 대한 이차식으로 정리 후 인수분해.
    (c-... )(c-... ) = 0 형태 도출로 c와 a,b 관계식.
    조건 결합해 삼각형 종류 (직각 등) 판정 · 헤론 공식 적용.
  category: 인수분해·기하 판정
  difficulty: STEP3
  tier_estimated: star_5_premium_max
  tier_note: "정점 후보 · 4차 인수분해 + 삼각형 판정 + 넓이 계산"
  mechanism_primary: 대칭식 인수분해
  mechanism_secondary: [c에 관한 이차식 정리, 기하 판정, 삼각형 넓이]
  depth_conditions: [고차 인수분해, 기하-대수 대응]
  insight_types_used: [I-XU: 단원 결합, I-EQV: 동치 변환, I-RT: 표현 전환]
  citation_note: 블랙라벨 CM1 CH02 STEP 3 · 정점 3문 최상위 후보

- source: 블랙라벨-CM1-CH02-STEP3-#02
  page: 26
  problem_summary: |
    2 이상 자연수 n에 대해 xⁿ+aₙ₋₁xⁿ⁻¹+...+a₁x+1000이
    계수·상수 자연수 서로 다른 일차식 곱으로만 인수분해될 때
    aₙ₋₁의 값으로 적당하지 않은 것
  solution_summary: |
    1000 = 2³·5³의 약수 조합으로 각 인수의 상수항 대응.
    n개의 서로 다른 자연수 조합 · 합이 aₙ₋₁.
    가능한 조합 다열거로 aₙ₋₁의 값 범위 결정.
  category: 인수분해·수의 분해
  difficulty: STEP3
  tier_estimated: star_5_premium
  tier_note: "약수 조합 · 서로 다른 인수 조건 · 배제 판정"
  mechanism_primary: 자연수 약수 조합
  mechanism_secondary: [인수분해, 조합 열거, 배제 판정]
  depth_conditions: [n 자유도, 서로 다른 조건]
  insight_types_used: [I-BW: 역방향, I-MI: 다중 해석, I-CON: 조건 통합]
  citation_note: 블랙라벨 CM1 CH02 STEP 3

- source: 블랙라벨-CM1-CH02-STEP3-#03
  page: 26
  problem_summary: |
    AB=AC=8 이등변삼각형 ABC에서 AP₁=a, P₁P₂=b, BP₂=c.
    P₁,P₂에서 AC 평행선으로 BC 만남 Q₁,Q₂.
    Q₁,Q₂에서 AB 평행선으로 AC 만남 R₁,R₂.
    색칠부분 넓이가 ABC 넓이의 1/2일 때 a³+b³+c³-3abc 값
  solution_summary: |
    각 평행사변형·삼각형 닮음비로 색칠 부분 표현.
    상수식으로 정리 후 a³+b³+c³-3abc = (a+b+c)(a²+b²+c²-ab-bc-ca) 공식.
    a+b+c=8과 넓이 조건 결합.
  category: 인수분해·기하 결합
  difficulty: STEP3
  tier_estimated: star_5_premium_max
  tier_note: "정점 후보 · 대칭 인수분해 + 기하 닮음 · 다변 결합"
  mechanism_primary: 대칭식 인수분해 공식
  mechanism_secondary: [닮음비 활용, 넓이 조건, 3변수 대칭식]
  depth_conditions: [기하-대수 대응, 대칭식 활용, 다변수 연립]
  insight_types_used: [I-XU: 단원 결합, I-SYM: 대칭성, I-CON: 조건 통합]
  citation_note: 블랙라벨 CM1 CH02 STEP 3 · 정점 3문 최상위 후보

- source: 블랙라벨-CM1-CH02-STEP3-#04
  page: 26
  problem_summary: |
    한 자리 자연수 a,b,c에 a³(b-c)+b³(c-a)+c³(a-b)=114.
    a>b>c일 때 abc 값
  solution_summary: |
    좌변 인수분해: -(a-b)(b-c)(c-a)(a+b+c) 공식.
    114 = 2·3·19 소인수분해 후 가능한 정수 조합 열거.
    한 자리 자연수 · a>b>c 제약으로 후보 결정.
  category: 인수분해·정수해
  difficulty: STEP3
  tier_estimated: star_5_premium_max
  tier_note: "정점 후보 · 순환대칭 인수분해 공식 + 정수 조건 필터"
  mechanism_primary: 순환대칭 인수분해
  mechanism_secondary: [소인수 조합, 정수 조건, 부등호 필터]
  depth_conditions: [4인자 인수분해 공식 발견, 정수 자유도]
  insight_types_used: [I-SYM: 대칭성, I-PD: 패턴 발견, I-CON: 조건 통합, I-BW: 역방향]
  citation_note: 블랙라벨 CM1 CH02 STEP 3 · 정점 3문 최상위 후보

- source: 블랙라벨-CM1-CH02-STEP3-#05
  page: 26
  problem_summary: |
    f(x)=x⁴+2ax³+bx²+2ax+1을 인수분해했을 때
    일차식 계수 양의 정수, 상수 정수 서로 다른 일차식 개수 N(a,b).
    보기 ㄱㄴㄷ 정오 판단
  solution_summary: |
    계수 대칭 x⁴+2ax³+bx²+2ax+1 · x²+t 치환 (t=x+1/x) 활용.
    이차식 계수 미지수로 좌우 대칭 인수분해.
    N(a,b) 정의 다양 case 열거.
  category: 인수분해·대칭계수·case 분류
  difficulty: STEP3
  tier_estimated: star_5_premium_max
  tier_note: "정점 후보 · 대칭계수 사차식 · 서로 다름 조건 · 정오 판단"
  mechanism_primary: 대칭계수 사차식 인수분해
  mechanism_secondary: [t=x+1/x 치환, case 열거, 판별식 조건]
  depth_conditions: [대칭 사차식, 서로 다른 · 양의 정수 필터, 3-보기 정오]
  insight_types_used: [I-EQV: 동치 변환, I-MI: 다중 해석, I-PD: 패턴 발견, I-CON: 조건 통합]
  citation_note: 블랙라벨 CM1 CH02 STEP 3 · 정점 3문 최상위 후보

- source: 블랙라벨-CM1-CH02-STEP3-#06
  page: 26
  problem_summary: |
    100 이하 자연수 a에 대해 사차다항식 x⁴-ax³+1이
    계수·상수 정수인 두 개 이상 다항식 곱으로 인수분해되는 a의 개수
  solution_summary: |
    (x²+px+1)(x²+qx+1) 또는 (x²+px-1)(x²+qx-1) 등 case 분해.
    상수항 곱=1 조건과 계수 대응으로 a=p+q, pq+2=0 등 관계.
    정수 (p,q) 조합 열거로 a 값 나열 · 100 이하 count.
  category: 인수분해·정수 조건 count
  difficulty: STEP3
  tier_estimated: star_5_premium
  tier_note: "case 분해 + 정수 조합 · 범위 count"
  mechanism_primary: 사차식 인수분해 case
  mechanism_secondary: [정수 조합 열거, 상수항 정합, 범위 count]
  depth_conditions: [4차 → 2차·2차 case 다분할]
  insight_types_used: [I-MI: 다중 해석, I-CON: 조건 통합, I-BW: 역방향]
  citation_note: 블랙라벨 CM1 CH02 STEP 3
```

---

## III. 복소수 (CH03) — STEP 3 (12문)

```yaml
- source: 블랙라벨-CM1-CH03-STEP3-#01
  page: 36
  problem_summary: |
    a₁,a₂,...,a₈은 각각 1,-1,i,-i 중 하나.
    a₁+a₂+...+a₈=3+i일 때 a₁²+a₂²+...+a₈² 최댓값
  solution_summary: |
    실수부 합 3, 허수부 합 1 조건.
    실수 항 (±1) x개 · 허수 항 (±i) y개 count 미지수.
    aᵢ²는 1 또는 -1 · 최댓값 조합 판정.
  category: 복소수·조건 조합
  difficulty: STEP3
  tier_estimated: star_5_premium
  tier_note: "복소 실수부·허수부 분해 + 조합 열거 + 극값"
  mechanism_primary: 복소수 실허 분해 조합
  mechanism_secondary: [제곱 값 판정, case 조합, 최댓값 탐색]
  depth_conditions: [8원소 조합 자유도, 극값 조건]
  insight_types_used: [I-MI: 다중 해석, I-CON: 조건 통합, I-BW: 역방향]
  citation_note: 블랙라벨 CM1 CH03 STEP 3

- source: 블랙라벨-CM1-CH03-STEP3-#02
  page: 36
  problem_summary: |
    30 이하 자연수 m,n에서 {iⁿ + (1/i)²ⁿ}ᵐ < 0을 만족하는 순서쌍 (m,n) 개수
  solution_summary: |
    iⁿ과 (1/i)²ⁿ = (-i)²ⁿ = (-1)ⁿ 정리.
    n mod 4 case 분해 · 각 case의 iⁿ+(-1)ⁿ 값.
    ᵐ 지수 조건과 부호 < 0 조합 결정.
  category: 복소수·거듭제곱·case
  difficulty: STEP3
  tier_estimated: star_5_premium
  tier_note: "iⁿ 규칙성 + case 분해 + 부호 필터"
  mechanism_primary: i 거듭제곱 규칙성
  mechanism_secondary: [mod 4 case, 지수 조건, 순서쌍 count]
  depth_conditions: [복소 지수 다중 case, 조건 부호]
  insight_types_used: [I-PD: 패턴 발견, I-MI: 다중 해석, I-CON: 조건 통합]
  citation_note: 블랙라벨 CM1 CH03 STEP 3

- source: 블랙라벨-CM1-CH03-STEP3-#03
  page: 36
  problem_summary: |
    f(x) = ax+3ax³+5ax⁵+...+97ax⁹⁷+99ax⁹⁹,
    g(x) = 2bx²+4bx⁴+6bx⁶+...+98bx⁹⁸+100bx¹⁰⁰.
    z = (f(i)+g(i))/(100i)에서 z·z̄=5를 만족하는 정수 (a,b) 개수
  solution_summary: |
    f(i) = a(i + 3i³ + 5i⁵ + ...) = a·(홀수)·(iⁿ 규칙) 정리.
    g(i) = b(2i² + 4i⁴ + ...) = -2b·2·... 계산.
    z·z̄ = |z|² = 5 원 조건 · 정수 (a,b) 격자점 열거.
  category: 복소수·수열·격자점
  difficulty: STEP3
  tier_estimated: star_5_premium_max
  tier_note: "정점 후보 · 다항식 f,g + i 거듭제곱 수열 + |z|² 원 격자점"
  mechanism_primary: 다항식 복소 대입·수열합
  mechanism_secondary: [i 거듭제곱 수열, |z|²=상수, 격자점]
  depth_conditions: [f,g 다항식 자유도, 복소 |z|² 조건, 정수 격자점]
  insight_types_used: [I-XU: 단원 결합, I-PD: 패턴 발견, I-CON: 조건 통합, I-BW: 역방향]
  citation_note: 블랙라벨 CM1 CH03 STEP 3 · 정점 3문 최상위 후보

- source: 블랙라벨-CM1-CH03-STEP3-#04
  page: 36
  problem_summary: |
    두 복소수 z₁=a+bi, z₂=c+di에서 a,b,c,d 자연수이고 z₁·z̄₁=10.
    보기 ㄱ.a²+b²=10, ㄴ.z₁+z̄₂=3이면 c+d=5,
    ㄷ.(z₁+z₂)(z̄₁+z̄₂)=41이면 z₂·z̄₂ 최댓값 17. 정오 판단
  solution_summary: |
    z₁·z̄₁ = a²+b² = 10 (ㄱ 참).
    z₁+z̄₂ = (a+c) + (b-d)i · 실수 조건과 자연수 조합.
    (z₁+z₂)(z̄₁+z̄₂) = |z₁+z₂|² = (a+c)²+(b+d)² 정리.
    각 case 분석.
  category: 복소수·켤레·자연수 조건
  difficulty: STEP3
  tier_estimated: star_5_premium
  tier_note: "3-보기 정오 · 켤레 성질 + 자연수 조합 · 2021년 교육청"
  mechanism_primary: 켤레복소수 성질
  mechanism_secondary: [자연수 조합, |z|²=합, 3-보기 판정]
  depth_conditions: [자연수 자유도, 다중 조건 case]
  insight_types_used: [I-MI: 다중 해석, I-CON: 조건 통합, I-BW: 역방향]
  citation_note: 블랙라벨 CM1 CH03 STEP 3 · 2021년 교육청

- source: 블랙라벨-CM1-CH03-STEP3-#05
  page: 36
  problem_summary: |
    zⁿ=1의 서로 다른 복소수 근 z₁,z₂,...,zₙ (=1)에 대해
    (가) zₖ=(-1+√3i)/2인 자연수 k 존재
    (나) zₗ=-z₄인 자연수 l 존재
    만족하는 n의 최솟값
  solution_summary: |
    (-1+√3i)/2 = ω · ω³=1 · zⁿ=1의 근에 ω 포함 조건 → 3|n.
    z₄ = 4번째 근 · -z₄도 근 조건 → 짝수 조건 필요.
    두 조건 결합해 n의 최소 공배수 구조.
  category: 복소수·단위근·정수론
  difficulty: STEP3
  tier_estimated: star_5_premium_max
  tier_note: "정점 후보 · 단위근 구조 + 다중 정수론 조건 + 최솟값"
  mechanism_primary: 단위근 조건 결합
  mechanism_secondary: [ω 성질, 배수 조건, 최소공배수]
  depth_conditions: [단위근 구조 인식, 다중 나눗셈 조건]
  insight_types_used: [I-XU: 단원 결합, I-CON: 조건 통합, I-PD: 패턴 발견]
  citation_note: 블랙라벨 CM1 CH03 STEP 3 · 정점 3문 최상위 후보

- source: 블랙라벨-CM1-CH03-STEP3-#06
  page: 36
  problem_summary: |
    ω²+ω+1=0인 ω와 임의의 두 복소수 α,β에서
    x=α-β, y=αω-βω², z=αω²-βω일 때 x³+y³+z³을 α,β 식으로
  solution_summary: |
    ω³=1, 1+ω+ω²=0 활용.
    x+y+z = α(1+ω+ω²) - β(1+ω²+ω) = 0.
    x³+y³+z³ = 3xyz (합=0 성질) · xyz 전개.
  category: 복소수·1의 세제곱근·항등식
  difficulty: STEP3
  tier_estimated: star_5_premium
  tier_note: "ω 성질 + 합=0 자동 성립 + 3xyz 대칭 정리"
  mechanism_primary: 1의 세제곱근 활용
  mechanism_secondary: [합=0 조건, 대칭식 3xyz, ω 순환]
  depth_conditions: [ω 성질 활용, 순환치환 인식]
  insight_types_used: [I-SYM: 대칭성, I-EQV: 동치 변환, I-PD: 패턴 발견]
  citation_note: 블랙라벨 CM1 CH03 STEP 3

- source: 블랙라벨-CM1-CH03-STEP3-#07
  page: 37
  problem_summary: |
    두 실수 a,b 및 복소수 z에 z²+zi+1=0이고
    (1/z³)(1+z+z²+z³+z⁴+z⁵+z⁶) = a+bi일 때 a+b 값
  solution_summary: |
    z²+zi+1=0에서 z 근의 성질 · z⁴, z⁵ 등 표현.
    1+z+...+z⁶ = (z⁷-1)/(z-1) 등비수열 합.
    z³으로 나누기 · z⁷ 계산.
  category: 복소수·근 성질·등비합
  difficulty: STEP3
  tier_estimated: star_5_premium
  tier_note: "이차식 근 + 등비수열 합 + 켤레 결합"
  mechanism_primary: 복소 근 · 등비합
  mechanism_secondary: [등비 공식, 근의 거듭제곱, 실허 분리]
  depth_conditions: [복소 근 조건, 등비합 활용]
  insight_types_used: [I-EQV: 동치 변환, I-RT: 표현 전환, I-CON: 조건 통합]
  citation_note: 블랙라벨 CM1 CH03 STEP 3

- source: 블랙라벨-CM1-CH03-STEP3-#08
  page: 37
  problem_summary: |
    z=a+bi (a<0, b>0)에서 z²-z̄²=0일 때
    (z⁵+z⁴+z³+z²+1)ⁿ이 정수 되도록 하는 두 자리 자연수 n의 개수
  solution_summary: |
    z²-z̄² = (z-z̄)(z+z̄) = 2ai·2b = 4abi = 0 → 조건 위반.
    다시 정확 대입: z²=z̄²이면 z=±z̄. b>0에서 z=-z̄ → a=0. 조건 위반.
    (실제 풀이 다시 확인 필요) z 극좌표 형 → 지수 (z⁵+...+1) 값 판정 · n 조건.
  category: 복소수·정수 조건
  difficulty: STEP3
  tier_estimated: star_5_premium
  tier_note: "복소 조건 재해석 + 정수 판정 + n 범위 count"
  mechanism_primary: 복소 방정식·정수 조건
  mechanism_secondary: [지수 판정, mod 사이클, 두 자리 count]
  depth_conditions: [복소 조건 정확 해석, 정수 판정]
  insight_types_used: [I-CON: 조건 통합, I-PD: 패턴 발견, I-MI: 다중 해석]
  citation_note: 블랙라벨 CM1 CH03 STEP 3

- source: 블랙라벨-CM1-CH03-STEP3-#09
  page: 37
  problem_summary: |
    zₙ = (√2/(1-i))ⁿ에 등식 z₁+2z₂²+3z₃³+4z₄⁴+...+20z₂₀²⁰ = x+yi.
    실수 x,y에서 x-y 값
  solution_summary: |
    √2/(1-i) = √2(1+i)/((1-i)(1+i)) = √2(1+i)/2 = (√2/2)(1+i) = e^(iπ/4).
    zₙⁿ = e^(iπn²/4) · 각 항 정리 · 주기 8.
    Σ k·zₖᵏ (k=1..20) 실수·허수부 분리 · x-y.
  category: 복소수·극좌표·수열
  difficulty: STEP3
  tier_estimated: star_5_premium
  tier_note: "극좌표 변환 + 주기 활용 + 급수합"
  mechanism_primary: 복소 극좌표·주기성
  mechanism_secondary: [n² mod 8 규칙, 급수 정리, 실허 분리]
  depth_conditions: [지수 n² 인식, 주기 활용]
  insight_types_used: [I-RT: 표현 전환, I-PD: 패턴 발견, I-EQV: 동치 변환]
  citation_note: 블랙라벨 CM1 CH03 STEP 3

- source: 블랙라벨-CM1-CH03-STEP3-#10
  page: 37
  problem_summary: |
    zₙ = (1+i)ⁿ + (1-i)ⁿ. 보기 ㄱ.zₙ=-8 존재, ㄴ.zₙ³ 음수 존재,
    ㄷ.n≥2에서 zₙ은 항상 4로 나누어떨어짐. 정오 판단
  solution_summary: |
    (1+i)² = 2i, (1-i)² = -2i. zₙ 재귀 관계 도출 · zₙ = 2·Re((1+i)ⁿ).
    n mod 4 case 분해 · 각 값 계산.
    4의 배수 여부 · n≥2 조건 판단.
  category: 복소수·켤레합·정수 성질
  difficulty: STEP3
  tier_estimated: star_5_premium
  tier_note: "3-보기 정오 · 켤레합 성질 + 정수 나눗셈"
  mechanism_primary: 켤레 복소 합
  mechanism_secondary: [mod 4 case, 정수 판정, 재귀]
  depth_conditions: [켤레 합 구조 인식, 3-보기 다중 판단]
  insight_types_used: [I-PD: 패턴 발견, I-MI: 다중 해석, I-CON: 조건 통합]
  citation_note: 블랙라벨 CM1 CH03 STEP 3

- source: 블랙라벨-CM1-CH03-STEP3-#11
  page: 37
  problem_summary: |
    0이 아닌 세 복소수 α,β,γ가 (가) α+β+γ=0 (나) αβ+βγ+γα=0.
    γ/α × (α/β) 값 (여기서 (α/β)는 α/β의 켤레복소수)
  solution_summary: |
    (α+β+γ)² = α²+β²+γ² + 2(αβ+βγ+γα) = 0 → α²+β²+γ² = 0.
    조건 두 개 활용해 α,β,γ의 관계 도출 (예: 세 수 = 0 또는 ω 배열).
    켤레복소수 조작으로 최종 값 계산.
  category: 복소수·대칭식·근의 성질
  difficulty: STEP3
  tier_estimated: star_5_premium_max
  tier_note: "정점 후보 · 대칭식 두 조건 → 근 구조 결정 + 켤레 조작"
  mechanism_primary: 3근 대칭 조건
  mechanism_secondary: [기본대칭식, 켤레복소, 근 구조]
  depth_conditions: [3근 자유도, 두 대칭 조건, 켤레]
  insight_types_used: [I-SYM: 대칭성, I-CON: 조건 통합, I-EQV: 동치 변환, I-BW: 역방향]
  citation_note: 블랙라벨 CM1 CH03 STEP 3 · 정점 3문 최상위 후보

- source: 블랙라벨-CM1-CH03-STEP3-#12
  page: 37
  problem_summary: |
    z=a+bi에서 (z-z̄)/i가 음수이고 z/(1+z²)과 z²/(1+z²)이 모두 실수.
    실수 a,b에서 ab 값
  solution_summary: |
    (z-z̄)/i = 2b · b<0.
    z/(1+z²) 실수 · 켤레와 같음 조건 → 대수적 정리.
    z²/(1+z²) 실수도 조건 결합 · a,b 방정식 유도.
  category: 복소수·실수 조건 연립
  difficulty: STEP3
  tier_estimated: star_5_premium_max
  tier_note: "정점 후보 · 다중 실수 조건 · 부호 필터"
  mechanism_primary: 실수 조건 방정식
  mechanism_secondary: [켤레 자기동일, 다중 조건 연립, 부호 판정]
  depth_conditions: [복잡 분수식 실수 조건, 다중 조건 연립]
  insight_types_used: [I-EQV: 동치 변환, I-CON: 조건 통합, I-BW: 역방향]
  citation_note: 블랙라벨 CM1 CH03 STEP 3 · 정점 3문 최상위 후보
```

---

## IV. 이차방정식 (CH04) — STEP 3 (12문)

```yaml
- source: 블랙라벨-CM1-CH04-STEP3-#01
  page: 47
  problem_summary: |
    x에 대한 방정식 ||x-1|-3|=x+a가 해가 무수히 많도록 하는 자연수 a
  solution_summary: |
    y=||x-1|-3|의 그래프 (2중 절댓값) 개형 분석 · 각 구간 분해.
    y=x+a의 기울기 1 직선과 일치하는 구간 존재 조건.
    자연수 a 판정.
  category: 절댓값 방정식·그래프
  difficulty: STEP3
  tier_estimated: star_5_premium
  tier_note: "2중 절댓값 그래프 + 직선 일치 조건"
  mechanism_primary: 2중 절댓값 그래프
  mechanism_secondary: [구간 분해, 직선 일치, 자연수 필터]
  depth_conditions: [2중 절댓값 개형 인식, 해 무수히 조건]
  insight_types_used: [I-RT: 표현 전환, I-MI: 다중 해석, I-CON: 조건 통합]
  citation_note: 블랙라벨 CM1 CH04 STEP 3

- source: 블랙라벨-CM1-CH04-STEP3-#02
  page: 47
  problem_summary: |
    x에 대한 방정식 |x²+3x-2k+1|=5가 서로 다른 네 실근 가지고
    모든 실근의 곱이 -16일 때 실수 k
  solution_summary: |
    x²+3x-2k+1 = ±5 두 방정식으로 분해.
    각 방정식이 서로 다른 두 실근 가질 조건 (판별식).
    두 방정식 근의 곱 = 근·계수 관계로 결합 · 곱 -16 조건.
  category: 절댓값·이차·다중 조건
  difficulty: STEP3
  tier_estimated: star_5_premium_max
  tier_note: "정점 후보 · 절댓값 분해 + 네 근 조건 + 곱 결합"
  mechanism_primary: 절댓값 방정식 분해
  mechanism_secondary: [판별식, 근·계수 관계, 4근 곱 결합]
  depth_conditions: [절댓값 분해, 다중 조건 연립, 근 곱 결합]
  insight_types_used: [I-EQV: 동치 변환, I-CON: 조건 통합, I-BW: 역방향]
  citation_note: 블랙라벨 CM1 CH04 STEP 3 · 정점 3문 최상위 후보

- source: 블랙라벨-CM1-CH04-STEP3-#03
  page: 47
  problem_summary: |
    모든 실수 x에서 다항식 P(x)가 {P(x)+3}²=(x-a)(x-3a)+4를 만족.
    모든 P(5)의 합 (a는 상수)
  solution_summary: |
    좌변 (P(x)+3)²은 완전제곱 · 우변 (x-a)(x-3a)+4가 완전제곱 조건.
    우변 = (x-2a)² + (4-a²) 형식 · 4-a² = 0 조건 필요 → a=±2.
    각 a에 대해 P(x) 결정 · P(5) 값들의 합.
  category: 항등식·완전제곱 조건
  difficulty: STEP3
  tier_estimated: star_5_premium_max
  tier_note: "정점 후보 · 항등식 위장 제곱 발견 + 다중 case 합"
  mechanism_primary: 완전제곱 항등식
  mechanism_secondary: [완전제곱화, a case 분해, P 결정]
  depth_conditions: [항등식 완전제곱 필터, P 미지, case 합]
  insight_types_used: [I-EQV: 동치 변환, I-BW: 역방향, I-MI: 다중 해석, I-CON: 조건 통합]
  citation_note: 블랙라벨 CM1 CH04 STEP 3 · 정점 3문 최상위 후보

- source: 블랙라벨-CM1-CH04-STEP3-#04
  page: 47
  problem_summary: |
    x²+ax+b=0의 두 근 α,β 부호 다름. x²-(4a-b)x-8b=0의 두 근이
    |α|+|β|, |α|·|β|일 때 ab 값
  solution_summary: |
    α<0<β (부호 다름) 가정 · |α|+|β| = β-α = √(a²-4b), |α||β| = -αβ = -b.
    합·곱 관계식 두 식으로 결합 · a,b 방정식.
  category: 근·계수 관계·부호 조건
  difficulty: STEP3
  tier_estimated: star_5_premium_max
  tier_note: "정점 후보 · 근·계수 관계 재적용 + 부호 조건 + 절댓값 변환"
  mechanism_primary: 근·계수 관계 재적용
  mechanism_secondary: [부호 판정, 절댓값 변환, 판별식]
  depth_conditions: [원래 근과 새 근 연결, 부호 조건]
  insight_types_used: [I-BW: 역방향, I-EQV: 동치 변환, I-CON: 조건 통합]
  citation_note: 블랙라벨 CM1 CH04 STEP 3 · 정점 3문 최상위 후보

- source: 블랙라벨-CM1-CH04-STEP3-#05
  page: 47
  problem_summary: |
    이차방정식 x²-2x+a=0의 서로 다른 두 근 α,β.
    x²+bx-2=0의 서로 다른 두 근 γ,δ.
    α+γ=2+2i일 때 a²+b² 값
  solution_summary: |
    두 이차의 근을 켤레 관계 조사 · α+γ가 복소수 조건에서 두 방정식 근 대응.
    α, β 켤레 vs γ, δ 켤레 관계 · 실수 계수라서 켤레쌍 · 조건 결합.
  category: 이차방정식·복소 근·연립
  difficulty: STEP3
  tier_estimated: star_5_premium
  tier_note: "두 이차 · 켤레근 + 복소 조건 연립"
  mechanism_primary: 켤레근·근·계수 관계
  mechanism_secondary: [복소 조건, 켤레쌍, 연립]
  depth_conditions: [두 이차식 근 연결, 켤레 관계]
  insight_types_used: [I-CON: 조건 통합, I-EQV: 동치 변환, I-BW: 역방향]
  citation_note: 블랙라벨 CM1 CH04 STEP 3

- source: 블랙라벨-CM1-CH04-STEP3-#06
  page: 47
  problem_summary: |
    p,q 자연수 소수. x²+8px-q²=0의 두 근 α,β 정수일 때 |α-β|+p+q 값
  solution_summary: |
    α+β=-8p, αβ=-q² · 정수근 조건 · q 소수 → -q² 인수 (α,β) 제한.
    α=-q, β=q 또는 α=q, β=-q 등 · 8p=-(α+β)=0 모순 → 다른 조합.
    p 소수 조건과 결합해 (p,q) 결정.
  category: 이차·정수근·소수 조건
  difficulty: STEP3
  tier_estimated: star_5_premium_max
  tier_note: "정점 후보 · 정수해 + 소수 조건 + 다중 case 판정"
  mechanism_primary: 정수근 조건 · 소수 필터
  mechanism_secondary: [근·계수 관계, 인수 조합, 소수 필터]
  depth_conditions: [소수 두 개 자유도, 정수근 조건, 부호 case]
  insight_types_used: [I-CON: 조건 통합, I-MI: 다중 해석, I-BW: 역방향, I-PD: 패턴 발견]
  citation_note: 블랙라벨 CM1 CH04 STEP 3 · 정점 3문 최상위 후보

- source: 블랙라벨-CM1-CH04-STEP3-#07
  page: 48
  problem_summary: |
    x²+ax+b=0의 허근 α, x²+cx+d=0의 허근 β. α+β 순허수, αβ 실수.
    보기 ㄱ.a+c=0, ㄴ.α̅β=αβ̅, ㄷ.b=d. 정오 판단
  solution_summary: |
    α = p+qi, β = r+si (q,s≠0) · 켤레와 결합.
    α+β 순허수 → 실수부 = 0 · p+r=0.
    αβ 실수 → 허수부=0 · 조건 정리.
    각 보기 판정.
  category: 복소·이차·정오 판단
  difficulty: STEP3
  tier_estimated: star_5_premium
  tier_note: "복소 조건 · 3-보기 정오 · 실허 분리"
  mechanism_primary: 허근 · 켤레 · 실허 조건
  mechanism_secondary: [실허 분리, 3-보기 판정, 켤레 성질]
  depth_conditions: [복소 조건 다중, 3-보기 case]
  insight_types_used: [I-EQV: 동치 변환, I-MI: 다중 해석, I-CON: 조건 통합]
  citation_note: 블랙라벨 CM1 CH04 STEP 3

- source: 블랙라벨-CM1-CH04-STEP3-#08
  page: 48
  problem_summary: |
    이차식 f(x)=x²+2x+4, 두 정수 p,q에서 g(x)=f(x-p)-q.
    (가) g(0)=2 (나) g(x)=0이 서로 다른 두 허근.
    p²+q² 최댓값
  solution_summary: |
    g(x) = (x-p)² + 2(x-p) + 4 - q = x² + (2-2p)x + (p²-2p+4-q).
    g(0) = p²-2p+4-q = 2 → q = p²-2p+2.
    허근 조건 판별식 < 0 · p,q 정수 case로 최댓값 탐색.
  category: 이차·평행이동·정수 조건
  difficulty: STEP3
  tier_estimated: star_5_premium
  tier_note: "이차 평행이동 + 정수 자유도 + 극값"
  mechanism_primary: 이차식 평행이동
  mechanism_secondary: [판별식, 정수 조합, 극값 탐색]
  depth_conditions: [정수 자유도 2 미지수, 다중 조건 극값]
  insight_types_used: [I-EQV: 동치 변환, I-CON: 조건 통합, I-BW: 역방향]
  citation_note: 블랙라벨 CM1 CH04 STEP 3

- source: 블랙라벨-CM1-CH04-STEP3-#09
  page: 48
  problem_summary: |
    x²-2kx+k²-2k-1=0의 두 근 α,β. {2-(α-β)²}/{2(α+β)²}가 음이 아닌 정수 되는
    모든 실수 k의 합
  solution_summary: |
    α+β=2k, αβ=k²-2k-1. (α-β)² = (α+β)²-4αβ = 4k²-4(k²-2k-1) = 8k+4.
    분자·분모 정리 → k에 관한 유리식 · 음 아닌 정수 조건 · k 후보 열거.
  category: 근·계수 관계·정수 조건
  difficulty: STEP3
  tier_estimated: star_5_premium_max
  tier_note: "정점 후보 · 근·계수 대칭식 + 정수 조건 · 실수 합"
  mechanism_primary: 근·계수 관계·유리식 정수 조건
  mechanism_secondary: [대칭식 (α-β)²·(α+β)², 정수 판정, 합]
  depth_conditions: [숨은 유리식, 정수 조건 필터, 실수 합]
  insight_types_used: [I-EQV: 동치 변환, I-CON: 조건 통합, I-MI: 다중 해석, I-BW: 역방향]
  citation_note: 블랙라벨 CM1 CH04 STEP 3 · 정점 3문 최상위 후보

- source: 블랙라벨-CM1-CH04-STEP3-#10
  page: 48
  problem_summary: |
    √2/2 < k < √2인 실수 k. 정사각형 ABCD (변 2), EFGH (변 2k)가
    같은 O점에서 대각선 만나고 FH가 AB 이등분.
    변 AD·EH 교점 J, AD·EF 교점 I, AB·EF 교점 K.
    △AKJ 넓이가 △EJI 넓이의 3/2배일 때 k = p√2+q√6 형태에서 100(p+q)
  solution_summary: |
    좌표 설정 O 원점 · ABCD, EFGH 좌표.
    두 사각형 교점 J, I, K 좌표를 k 함수로.
    삼각형 넓이 비 조건 → k 이차방정식 → 근의 공식으로 k = p√2+q√6.
  category: 기하·좌표·이차방정식
  difficulty: STEP3
  tier_estimated: star_5_premium_max
  tier_note: "정점 후보 · 복잡 기하 좌표화 + 넓이비 조건 + k 이차 · 2020년 교육청"
  mechanism_primary: 좌표 기하 · 이차방정식
  mechanism_secondary: [정사각형 교점 좌표, 넓이비, 근의 공식, 무리수 결합]
  depth_conditions: [복잡 기하 좌표화, 다중 교점, 근 무리수 표현]
  insight_types_used: [I-XU: 단원 결합, I-RT: 표현 전환, I-CON: 조건 통합, I-BW: 역방향]
  citation_note: 블랙라벨 CM1 CH04 STEP 3 · 정점 3문 최상위 후보 · 2020년 교육청

- source: 블랙라벨-CM1-CH04-STEP3-#11
  page: 48
  problem_summary: |
    x>0인 실수 x에서 x² + (x-[x])² - 18 = 0의 근 존재 시 근 값
    ([x] 가우스 기호 · x보다 크지 않은 최대 정수)
  solution_summary: |
    x = n + f (n = [x] 정수 · 0 ≤ f < 1) · 대입 정리.
    (n+f)² + f² = 18 · n² + 2nf + 2f² = 18.
    f에 대한 이차식 · 0 ≤ f < 1 조건 · n 자연수 case 열거.
  category: 가우스 기호·이차방정식
  difficulty: STEP3
  tier_estimated: star_5_premium
  tier_note: "가우스 기호 분해 + 이차식 + 범위 조건"
  mechanism_primary: 가우스 기호 분해
  mechanism_secondary: [정수·소수 분리, 이차식, 범위 필터]
  depth_conditions: [가우스 정의 활용, 범위 조건]
  insight_types_used: [I-RT: 표현 전환, I-MI: 다중 해석, I-CON: 조건 통합]
  citation_note: 블랙라벨 CM1 CH04 STEP 3

- source: 블랙라벨-CM1-CH04-STEP3-#12
  page: 48
  problem_summary: |
    이차방정식 ax²+2(a+1)x+a-3=0의 두 근 중 적어도 하나가 정수 되는
    자연수 a 값의 곱
  solution_summary: |
    근의 공식으로 x = [-(a+1) ± √((a+1)²-a(a-3))]/a = [-(a+1) ± √(5a+1)]/a.
    √(5a+1)이 유리수 · 5a+1 = k² 조건 · k 정수.
    x가 정수 되는 추가 조건 · a 자연수 case.
  category: 이차·정수근·근의 공식
  difficulty: STEP3
  tier_estimated: star_5_premium_max
  tier_note: "정점 후보 · 판별식 완전제곱 필터 + 정수근 조건 + 곱"
  mechanism_primary: 판별식 완전제곱 조건
  mechanism_secondary: [정수근 필터, 5a+1=k² 디오판토스, 곱]
  depth_conditions: [판별식 완전제곱, 정수 조건 이중, a 자유도]
  insight_types_used: [I-CON: 조건 통합, I-BW: 역방향, I-MI: 다중 해석, I-PD: 패턴 발견]
  citation_note: 블랙라벨 CM1 CH04 STEP 3 · 정점 3문 최상위 후보
```

---

## V. 정점 3문 최상위 후보 (star_5_premium_max)

블랙라벨 CM1 STEP 3 42문 중 **다중 통찰 4+ · 학문적 정확성 요구 · 예측 저항성 강한** 정점 후보 15문:

| # | source | 챕터 | 주요 통찰 | 정점 사유 |
|---|---|---|---|---|
| 1 | CH01-STEP3-#03 | 다항식 | I-PD·I-BW·I-MI·I-EQV | 짝홀 분리 + 다중 특수값 대입 조합 |
| 2 | CH01-STEP3-#05 | 다항식 | I-PD·I-BW·I-CON | 숨은 재귀 발견 + 연립 · 계수 미지 |
| 3 | CH01-STEP3-#08 | 다항식 | I-RT·I-BW·I-CON·I-PD | 보조다항식 구성 통찰 · 5차 곱 인수 |
| 4 | CH01-STEP3-#10 | 다항식 | I-BW·I-CON·I-MI·I-EQV | 함수방정식 · 차수 판정 · 다변 대입 |
| 5 | CH01-STEP3-#11 | 다항식 | I-CON·I-BW·I-PD | 나눗셈 다중 조건 + 차수 결합 |
| 6 | CH01-STEP3-#12 | 다항식 | I-MI·I-CON·I-BW·I-PD | 인수정리 case 다분할 + 극값 판정 |
| 7 | CH02-STEP3-#01 | 인수분해 | I-XU·I-EQV·I-RT | 4차 인수분해 + 삼각형 판정 + 넓이 |
| 8 | CH02-STEP3-#03 | 인수분해 | I-XU·I-SYM·I-CON | 대칭 인수분해 공식 + 기하 닮음 |
| 9 | CH02-STEP3-#04 | 인수분해 | I-SYM·I-PD·I-CON·I-BW | 순환대칭 인수분해 + 정수 조건 필터 |
| 10 | CH02-STEP3-#05 | 인수분해 | I-EQV·I-MI·I-PD·I-CON | 대칭계수 사차식 · 서로 다름 · 3-보기 |
| 11 | CH03-STEP3-#03 | 복소수 | I-XU·I-PD·I-CON·I-BW | 다항식 f,g + i 수열 + |z|² 격자점 |
| 12 | CH03-STEP3-#05 | 복소수 | I-XU·I-CON·I-PD | 단위근 구조 + 다중 정수론 조건 |
| 13 | CH03-STEP3-#11 | 복소수 | I-SYM·I-CON·I-EQV·I-BW | 3근 대칭 두 조건 + 켤레 조작 |
| 14 | CH04-STEP3-#03 | 이차방정식 | I-EQV·I-BW·I-MI·I-CON | 완전제곱 항등식 위장 + 다중 case |
| 15 | CH04-STEP3-#10 | 이차방정식 | I-XU·I-RT·I-CON·I-BW | 복잡 기하 좌표화 + k 이차 무리수 결합 |

**최상위 3문 최종 후보** (통찰 4개 + 학문 정확성 요구 + 예측 저항성 극대):
- **CH01-STEP3-#08** (다항식): 보조다항식 구성 통찰. 유리함수 → 다항식 전환의 감각적 도약.
- **CH02-STEP3-#04** (인수분해): 순환대칭 4인자 공식 발견 + 소인수 · 부등호 다중 필터.
- **CH03-STEP3-#11** (복소수): 3근 대칭 두 조건 → 근 구조 결정 + 켤레 조작의 순수 대수적 심화.

---

## VI. mechanism 카탈로그 요약

**신규 mechanism 후보** (기존 은행에 없거나 심화 확장 필요):

1. **보조 다항식 구성** (CH01-#08) — 유리 함수 조건 → (x+1)f(x)-x 등 새 다항식 구성
2. **뉴턴 항등식 재귀** (CH01-#04) — 대칭식 pₙ = e₁pₙ₋₁ - e₂pₙ₋₂ + e₃pₙ₋₃
3. **함수방정식 차수 판정** (CH01-#10) — f 미지 · 다변 대입
4. **순환대칭 4인자 공식** (CH02-#04) — a³(b-c)+b³(c-a)+c³(a-b) = -(a-b)(b-c)(c-a)(a+b+c)
5. **대칭계수 사차식 t=x+1/x** (CH02-#05) — 회문 계수 → 이차식 치환
6. **다항식 복소 대입 · 수열합** (CH03-#03) — f(i) + iⁿ 수열합
7. **단위근 조건 결합** (CH03-#05) — zⁿ=1 배수 조건 다중
8. **3근 대칭 완전조건** (CH03-#11) — Σ=0, Σαβ=0 → 근 구조 결정
9. **완전제곱 항등식 위장** (CH04-#03) — {P+3}² = (x-a)(x-3a)+4 · 우변 완전제곱 조건
10. **판별식 완전제곱 정수근** (CH04-#12) — √(5a+1)=k² 디오판토스 조건

---

## VII. tier 매핑 최종 판정

| tier | 개수 | 비율 | 대표 특징 |
|---|---|---|---|
| **star_5_premium_max** | 15 | 36% | 정점 후보 · 다중 통찰 4+ · 학문 정확성 |
| **star_5_premium** | 27 | 64% | 종합 사고력 필수 · 통찰 3+ |

STEP 3 = 전 문항 **star_5_premium** 이상. 시판 최상급 (블랙라벨 STEP 3) 기준.
고쟁이 STEP 3 대비 심화도 +1~2 grade (더 무거운 학문적 개념 결합 · 다중 조건 case).
