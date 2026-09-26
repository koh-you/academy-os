---
name: mechanism-데이터-블랙라벨-CM1-STEP2
description: 블랙라벨 공통수학1 (2024) STEP 2 전 문항 정독 데이터. 1등급을 위한 최고의 변별력 문제 (85→95점 달성 tier).
metadata:
  type: reference
  version: v1.0
  established: 2026-07-16
  source: 블랙라벨 공통수학1 (2024) STEP 2
  total_problems: 275
  tier_mapping:
    STEP_2: star_5
  unit_code: CM1
  unit_mapping:
    "CH01_다항식연산나머지정리": CM1-PL
    "CH02_인수분해": CM1-PL
    "CH03_복소수": CM1-EQ
    "CH04_이차방정식": CM1-EQ
    "CH05_이차방정식과이차함수": CM1-EQ
    "CH06_여러가지방정식": CM1-EQ
    "CH07_여러가지부등식": CM1-EQ
    "CH08_순열과조합": CM1-CB
    "CH09_행렬": CM1-MX
  chapters:
    - CH01: 다항식의 연산과 나머지정리 (24문 · p.14-17)
    - CH02: 인수분해 (18문 · p.23-25)
    - CH03: 복소수 (30문 · p.31-35)
    - CH04: 이차방정식 (30문 · p.42-46)
    - CH05: 이차방정식과 이차함수 (30문 · p.53-57)
    - CH06: 여러 가지 방정식 (30문 · p.64-68)
    - CH07: 여러 가지 부등식 (42문 · p.76-82)
    - CH08: 순열과 조합 (35문 · p.90-95)
    - CH09: 행렬 (36문 · p.104-109)
  citation_note: 학습 목적 · 저작권 준수 (원문 발문·풀이 전사 없음 · 축약 요약)
---

# 블랙라벨 공통수학1 (2024) STEP 2 — 1등급을 위한 최고의 변별력 문제 정독 데이터

**출처**: 블랙라벨 공통수학1 (2024) STEP 2 "1등급을 위한 최고의 변별력 문제"
**대상 범위**: 9단원 전 문항 (다항식·인수분해·복소수·이차방정식·이차방정식과 이차함수·여러 가지 방정식·여러 가지 부등식·순열과 조합·행렬)
**작업 목적**: mechanism 카탈로그 · tier star_5 일괄 라벨링 · 방안 F 원본 은행 등재
**정독 일자**: 2026-07-16

**tier 판정 원칙**:
- STEP 2 = **star_5** 일괄 (마스터 확립 세션 44)
- 다중 통찰 3+ 문항은 tier_note에 star_5_premium 후보 표기
- 통찰 유형 8종 매핑 (I-XU · I-BW · I-RT · I-EQV · I-MI · I-PD · I-SYM · I-CON)

---

## I. 다항식의 연산과 나머지정리 (CH01 · CM1-PL) — STEP 2 (24문)

```yaml
- source: 블랙라벨-CM1-CH01-STEP2-#13
  page: 14
  unit_code: CM1-PL
  problem_summary: |
    f(x)=x³+9x²+4x−45, f(x+a)=x³+bx−3 항등식
    상수 a,b에 대해 a+b 값
  solution_summary: |
    치환 x→x+a 전개 · 계수비교 · x²계수=0 조건 · 상수항 조건
  category: 항등식·계수비교
  tier: star_5
  mechanism_primary: 항등식 계수비교
  mechanism_secondary: [치환 전개, 삼차 다항식]
  insight_type: I-EQV
  depth: 2
  citation_note: 블랙라벨 CM1 CH01 STEP 2

- source: 블랙라벨-CM1-CH01-STEP2-#14
  page: 14
  unit_code: CM1-PL
  problem_summary: |
    Pₙ(x)=(x−1)(x−2)···(x−n)에 대해
    P₂(x²)−x⁴=a+bP₁(x)+cP₂(x)+dP₃(x) 항등식
    a−b+c−d 값
  solution_summary: |
    특수값 대입 (x=1,2,3,-1) · 계수 분리 · 항등식 활용
  category: 항등식·수치대입법
  tier: star_5
  tier_note: "다중 대입 조합 · premium 후보"
  mechanism_primary: 항등식 수치대입법
  mechanism_secondary: [계수 분리, 항등식 전개]
  insight_type: I-PD
  depth: 3
  citation_note: 블랙라벨 CM1 CH01 STEP 2

- source: 블랙라벨-CM1-CH01-STEP2-#15
  page: 14
  unit_code: CM1-PL
  problem_summary: |
    x¹⁰⁰−1을 x−1로 조립제법 100번 반복 · a₀,a₁,...,a₁₀₀
    a₀+a₂+a₄+...+a₁₀₀=2ⁿ−1일 때 n
  solution_summary: |
    조립제법 반복 패턴 · 계수합 관계식 · x=1,-1 대입 · 지수 방정식
  category: 조립제법·수열합
  tier: star_5
  tier_note: "패턴 발견 + 조립제법 반복 · premium 후보"
  mechanism_primary: 조립제법 반복 패턴
  mechanism_secondary: [계수합 관계, 지수방정식]
  insight_type: I-PD
  depth: 3
  citation_note: 블랙라벨 CM1 CH01 STEP 2

- source: 블랙라벨-CM1-CH01-STEP2-#16
  page: 14
  unit_code: CM1-PL
  problem_summary: |
    f(x)=x³+px²+qx+r · f(x−2+1/x)=x³−2+1/x³ 항등식
    pq+r 값
  solution_summary: |
    t=x−1/x 치환 · x³−1/x³=t³+3t 공식 · 계수비교
  category: 항등식·치환·역수합공식
  tier: star_5
  tier_note: "치환 통찰 필요"
  mechanism_primary: 역수합 공식 (t=x−1/x)
  mechanism_secondary: [세제곱 공식, 치환]
  insight_type: I-RT
  depth: 2
  citation_note: 블랙라벨 CM1 CH01 STEP 2

- source: 블랙라벨-CM1-CH01-STEP2-#17
  page: 14
  unit_code: CM1-PL
  problem_summary: |
    x¹⁰⁰⁰+7=a₀+a₁(x+1)+...+a₁₀₀₀(x+1)¹⁰⁰⁰ 항등식
    보기 참·거짓 (ㄱ a₁₀₀₀=1 · ㄴ 짝수합>홀수합 · ㄷ 짝수합 홀수)
  solution_summary: |
    치환 y=x+1 · x=y−1 · x=0,-2 대입으로 f(0)+f(-2), f(0)-f(-2) 활용
  category: 항등식·수치대입법
  tier: star_5
  tier_note: "다중 보기 검증 + 대입 · premium 후보"
  mechanism_primary: 항등식 수치대입법
  mechanism_secondary: [짝홀 계수 분리, 치환]
  insight_type: I-MI
  depth: 3
  citation_note: 블랙라벨 CM1 CH01 STEP 2

- source: 블랙라벨-CM1-CH01-STEP2-#18
  page: 14
  unit_code: CM1-PL
  problem_summary: |
    f(x²+2x)=x²f(x)+8x+8 항등식 f(1) 값
  solution_summary: |
    f의 차수 결정 · 특수값 x=1,-3 대입 · 함수 형태 판정
  category: 함수방정식·차수결정
  tier: star_5
  mechanism_primary: 함수방정식 차수결정
  mechanism_secondary: [특수값 대입, 계수결정]
  insight_type: I-BW
  depth: 2
  citation_note: 블랙라벨 CM1 CH01 STEP 2

- source: 블랙라벨-CM1-CH01-STEP2-#19
  page: 15
  unit_code: CM1-PL
  problem_summary: |
    f(x)/(x−2)(x−3)(x−4) 나머지 x²+x+1
    f(8x)/(8x²−6x+1) 나머지 ax+b · a+b
  solution_summary: |
    f(2),f(3),f(4) 활용 · 8x²−6x+1=(2x−1)(4x−1) 인수분해 · f(1/2), f(1/4) 계산
  category: 나머지정리·인수분해
  tier: star_5
  mechanism_primary: 나머지정리 (일반 이차 나머지)
  mechanism_secondary: [인수분해, 특수값 대입]
  insight_type: I-EQV
  depth: 2
  citation_note: 블랙라벨 CM1 CH01 STEP 2

- source: 블랙라벨-CM1-CH01-STEP2-#20
  page: 15
  unit_code: CM1-PL
  problem_summary: |
    f(x)+g(x) /(x−1) 나머지 −5 · {f(x)}³+{g(x)}³ /(x−1) 나머지 10
    f(x)g(x) /(x−1) 나머지
  solution_summary: |
    A=f(1), B=g(1) 설정 · A+B=-5, A³+B³=10 · A³+B³=(A+B)³-3AB(A+B) · AB 계산
  category: 나머지정리·대칭식
  tier: star_5
  mechanism_primary: 대칭식 (합·세제곱합)
  mechanism_secondary: [나머지정리, 세제곱합 공식]
  insight_type: I-EQV
  depth: 2
  citation_note: 블랙라벨 CM1 CH01 STEP 2

- source: 블랙라벨-CM1-CH01-STEP2-#21
  page: 15
  unit_code: CM1-PL
  problem_summary: |
    x³의 계수 2인 삼차 f(x) · f(0)=0 · f(x)/(x+1)² 나머지 4(x+1)
    f(x)/(x−1) 몫 Q(x) · Q(x)/(x−4) 나머지
  solution_summary: |
    f(x)=2x³+ax²+bx 형식 결정 · f(-1)=0, f'(-1)=4 조건 활용 · Q(4)=f(4)/3
  category: 나머지정리·미분 관계
  tier: star_5
  tier_note: "다항식 인수분해 조건 통합"
  mechanism_primary: (x+1)² 이중근 조건
  mechanism_secondary: [조립제법, 나머지정리]
  insight_type: I-CON
  depth: 2
  citation_note: 블랙라벨 CM1 CH01 STEP 2

- source: 블랙라벨-CM1-CH01-STEP2-#22
  page: 15
  unit_code: CM1-PL
  problem_summary: |
    2²⁰²²+2²⁰¹⁵+2²⁰⁰⁹ /31 나머지 R₁ · /33 나머지 R₂ · R₁+R₂ 값 (서술형)
  solution_summary: |
    2⁵=32≡1(mod 31), 2¹¹=2048≡2(mod 33) 이용 · 지수 나누기·나머지 계산
  category: 나머지·지수·정수론
  tier: star_5
  tier_note: "정수 나머지 통찰 · premium 후보"
  mechanism_primary: 지수 나머지 (mod 활용)
  mechanism_secondary: [지수 분해, 정수론적 추론]
  insight_type: I-PD
  depth: 3
  citation_note: 블랙라벨 CM1 CH01 STEP 2

- source: 블랙라벨-CM1-CH01-STEP2-#23
  page: 15
  unit_code: CM1-PL
  problem_summary: |
    f(x) 관련 나머지 명제 3개 (ㄱ xf(x)/(x−2) 몫 vs (x+2)f(x+2)/x 몫 · ㄴ xf(x)와 (x+2)f(x+2) 나머지 · ㄷ f(x)f(−x)/(x²−4) 나머지 일차)
  solution_summary: |
    변수 치환 · 조립제법 · 대응 판정
  category: 나머지정리·명제
  tier: star_5
  tier_note: "다중 참거짓 판정 통찰"
  mechanism_primary: 나머지 대응 판정
  mechanism_secondary: [치환, 명제 판단]
  insight_type: I-MI
  depth: 3
  citation_note: 블랙라벨 CM1 CH01 STEP 2

- source: 블랙라벨-CM1-CH01-STEP2-#24
  page: 15
  unit_code: CM1-PL
  problem_summary: |
    f(x)=x²+px+q · f(x)/(x−2a) 나머지 4b³ · f(x)/(x−2b) 나머지 4a³
    f(x)/(x−(a+b)) 나머지 (a≠b)
  solution_summary: |
    f(2a)=4b³, f(2b)=4a³ 두 식 차 이용 · a-b 소거 · 대칭 조건 · p, q 표현
  category: 나머지정리·대칭 조건
  tier: star_5
  mechanism_primary: 나머지 조건 대칭식
  mechanism_secondary: [두 식 차, 계수 표현]
  insight_type: I-CON
  depth: 2
  citation_note: 블랙라벨 CM1 CH01 STEP 2

- source: 블랙라벨-CM1-CH01-STEP2-#25
  page: 16
  unit_code: CM1-PL
  problem_summary: |
    P(x)/(x³+2x+1) 나머지 3x+1 · P(x)/(x−1) 나머지 −4
    P(x)/((x³+2x+1)(x−1)) 나머지 R(x) · R(2)
  solution_summary: |
    P(x)=(x³+2x+1)Q(x)+3x+1 · P(1)=-4 · R(x)=a(x³+2x+1)+3x+1 형식 · a 결정
  category: 나머지정리·이중 나눗셈
  tier: star_5
  mechanism_primary: 이중 나눗셈 나머지
  mechanism_secondary: [나머지 결합, 계수결정]
  insight_type: I-EQV
  depth: 2
  citation_note: 블랙라벨 CM1 CH01 STEP 2

- source: 블랙라벨-CM1-CH01-STEP2-#26
  page: 16
  unit_code: CM1-PL
  problem_summary: |
    최고차 1인 f(x) · f(x)/g(x) 몫과 나머지 모두 g(x)−2x²
    f(x)/(x−1) 나머지 −9/4 · f(6) 값 [2019년 교육청]
  solution_summary: |
    f(x)=g(x)·(g(x)−2x²)+g(x)−2x² · 최고차 조건으로 g(x)=x²+ax+b · 계수 결정
  category: 나머지정리·다중 조건
  tier: star_5
  tier_note: "몫·나머지 동시 조건 · 교육청 기출"
  mechanism_primary: 몫·나머지 동시 조건
  mechanism_secondary: [최고차 결정, 대입]
  insight_type: I-CON
  depth: 3
  citation_note: 블랙라벨 CM1 CH01 STEP 2

- source: 블랙라벨-CM1-CH01-STEP2-#27
  page: 16
  unit_code: CM1-PL
  problem_summary: |
    xⁿ⁺²+pxⁿ⁺¹+qxⁿ /(x−2)² 나머지 2ⁿ(x−2) · pq 값 (서술형)
  solution_summary: |
    (x−2)²로 나눈 나머지 조건 f(2)=0, f'(2)=2ⁿ · 계수 관계식
  category: 이중근·조건 통합
  tier: star_5
  mechanism_primary: (x−2)² 이중근 조건
  mechanism_secondary: [지수 조작, 계수 관계]
  insight_type: I-CON
  depth: 2
  citation_note: 블랙라벨 CM1 CH01 STEP 2

- source: 블랙라벨-CM1-CH01-STEP2-#28
  page: 16
  unit_code: CM1-PL
  problem_summary: |
    xⁿ−1=(x−1)(xⁿ⁻¹+xⁿ⁻²+...+1) 성립 시
    x¹⁴+x¹³+x¹²+x¹¹+x+1 /(x⁴+x³+x²+x+1) 나머지
  solution_summary: |
    x⁵=1 관계식 활용 (x⁴+x³+x²+x+1=0 이면 x⁵=1) · 지수 mod 5 계산
  category: 근의 성질·주기성
  tier: star_5
  tier_note: "근 성질 통찰 필요"
  mechanism_primary: 원시근 활용 (x⁵=1)
  mechanism_secondary: [지수 주기성, 인수분해]
  insight_type: I-RT
  depth: 3
  citation_note: 블랙라벨 CM1 CH01 STEP 2

- source: 블랙라벨-CM1-CH01-STEP2-#29
  page: 16
  unit_code: CM1-PL
  problem_summary: |
    f(x)−x²+2x가 x²−4x+3으로 나누어떨어짐 · f(2x²+1)/(x²−x) 나머지
  solution_summary: |
    f(1), f(3) 조건 · x²−x=x(x−1) · 나머지 정리로 f(1), f(3) 활용
  category: 나머지정리·인수 조건
  tier: star_5
  mechanism_primary: 인수 조건 + 나머지정리
  mechanism_secondary: [치환, 나머지 정리]
  insight_type: I-EQV
  depth: 2
  citation_note: 블랙라벨 CM1 CH01 STEP 2

- source: 블랙라벨-CM1-CH01-STEP2-#30
  page: 16
  unit_code: CM1-PL
  problem_summary: |
    x³+4x²+ax+b가 (x+1)²로 나누어떨어짐 · a+b
  solution_summary: |
    조립제법 활용 or f(-1)=0, f'(-1)=0 조건 이용 · 계수 관계
  category: 이중근·인수 판정
  tier: star_5
  mechanism_primary: (x+1)² 이중근 조건
  mechanism_secondary: [조립제법]
  insight_type: I-EQV
  depth: 2
  citation_note: 블랙라벨 CM1 CH01 STEP 2

- source: 블랙라벨-CM1-CH01-STEP2-#31
  page: 17
  unit_code: CM1-PL
  problem_summary: |
    최고차 1인 사차 f(x) · f(0)=0, f(1)=1, f(2)=2, f(3)=3
    f(x)/(x²−3x−4) 나머지
  solution_summary: |
    g(x)=f(x)−x 도입 · g(x)=x(x−1)(x−2)(x−3) 형식 · f(4), f(-1) 계산
  category: 함수 변형·나머지정리
  tier: star_5
  tier_note: "빈출 유형 · g(x) 도입 통찰"
  mechanism_primary: 함수 변형 (g(x)=f(x)−x)
  mechanism_secondary: [나머지정리, 인수분해]
  insight_type: I-RT
  depth: 3
  citation_note: 블랙라벨 CM1 CH01 STEP 2

- source: 블랙라벨-CM1-CH01-STEP2-#32
  page: 17
  unit_code: CM1-PL
  problem_summary: |
    2f(x)+g(x)와 f(x)+2g(x) 모두 x−7 나누어떨어짐
    보기 3항 (ㄱ 하나 x−7 나누어떨어짐 · ㄴ f(x)g(x)/(x−7)² · ㄷ g(f(x))/(x−7))
  solution_summary: |
    연립으로 f(7)=0, g(7)=0 · 각 명제 판정
  category: 나머지정리·명제
  tier: star_5
  mechanism_primary: 연립 방정식 (다항식 값)
  mechanism_secondary: [인수분해, 합성함수]
  insight_type: I-MI
  depth: 2
  citation_note: 블랙라벨 CM1 CH01 STEP 2

- source: 블랙라벨-CM1-CH01-STEP2-#33
  page: 17
  unit_code: CM1-PL
  problem_summary: |
    이차 P(x), Q(x) · 모든 x에 4P(x)+Q(x)=0 · P(x)Q(x)/(x²+x−12)
    · P(1)=20 · Q(2) 값
  solution_summary: |
    Q(x)=-4P(x) 대입 · P(x)Q(x)=-4P(x)² · (x+4)(x-3)으로 나누어떨어지므로 P(-4)=0 or P(3)=0 판정
  category: 다항식 결합·인수 판정
  tier: star_5
  mechanism_primary: 관계식 대입 (Q=-4P)
  mechanism_secondary: [인수 판정, 값 결정]
  insight_type: I-EQV
  depth: 2
  citation_note: 블랙라벨 CM1 CH01 STEP 2

- source: 블랙라벨-CM1-CH01-STEP2-#34
  page: 17
  unit_code: CM1-PL
  problem_summary: |
    삼차 f(x) · f(x)−1/(x−1)² 나누어떨어짐 · f(x)+1/(x+1)² 나누어떨어짐
    f(2) 값
  solution_summary: |
    f(x)-1=(x−1)²(ax+b), f(x)+1=(x+1)²(ax+c) · 두 식 차 이용 · 계수 결정
  category: 이중근·조건 통합
  tier: star_5
  tier_note: "두 이중근 조건 대칭 통찰 · premium 후보"
  mechanism_primary: 두 이중근 조건
  mechanism_secondary: [대칭 조건, 두 식 차]
  insight_type: I-CON
  depth: 3
  citation_note: 블랙라벨 CM1 CH01 STEP 2

- source: 블랙라벨-CM1-CH01-STEP2-#35
  page: 17
  unit_code: CM1-PL
  problem_summary: |
    최고차 1인 f(x) · (x+7)f(2x)=8xf(x+1) 항등식
    f(x)/(x+1) 나머지 (서술형)
  solution_summary: |
    특수값 x=-7, x=0 대입 · 재귀 관계식 · f(-1) 계산
  category: 함수방정식·특수값 대입
  tier: star_5
  tier_note: "함수방정식 통찰"
  mechanism_primary: 함수방정식 특수값 대입
  mechanism_secondary: [최고차 판정, 재귀]
  insight_type: I-BW
  depth: 3
  citation_note: 블랙라벨 CM1 CH01 STEP 2

- source: 블랙라벨-CM1-CH01-STEP2-#36
  page: 17
  unit_code: CM1-PL
  problem_summary: |
    최고차 1인 사차 f(x) · f(x)/(x+3), f(x)/(x²+9) 나머지 3p² · f(1)=f(-1) · x−√p는 f(x) 인수 (p>0)
    16p 값
  solution_summary: |
    복수 조건 통합 · f(-3), f(3i) 계산 · 짝함수 조건 · x²=p 인수 조건 결합
  category: 다중 조건 통합
  tier: star_5
  tier_note: "다중 조건 통합 · premium 후보"
  mechanism_primary: 다중 조건 통합
  mechanism_secondary: [짝함수 조건, 복소수 대입, 인수 조건]
  insight_type: I-CON
  depth: 3
  citation_note: 블랙라벨 CM1 CH01 STEP 2
```

---

## II. 인수분해 (CH02 · CM1-PL) — STEP 2 (18문)

```yaml
- source: 블랙라벨-CM1-CH02-STEP2-#01
  page: 23
  unit_code: CM1-PL
  problem_summary: |
    1000개 이차식 x²+2x−1, x²+2x−2, ..., x²+2x−1000 중
    계수·상수항 정수인 두 일차식 곱으로 인수분해되는 개수
  solution_summary: |
    x²+2x−k=(x+1)²−(1+k) · 1+k=완전제곱수 조건 · 개수 count
  category: 인수분해·완전제곱수
  tier: star_5
  mechanism_primary: 완전제곱꼴 판정
  mechanism_secondary: [정수 조건, 개수 카운트]
  insight_type: I-EQV
  depth: 2
  citation_note: 블랙라벨 CM1 CH02 STEP 2

- source: 블랙라벨-CM1-CH02-STEP2-#02
  page: 23
  unit_code: CM1-PL
  problem_summary: |
    a+b+c=5, a²+b²+c²=9, a³+b³+c³=14
    ab(a+b)+bc(b+c)+ca(c+a) 값
  solution_summary: |
    e₁=5, e₂=8, e₃ 계산 (뉴턴 항등식) · 대칭식 전개 · ab(a+b)+bc(b+c)+ca(c+a)=(a+b+c)(ab+bc+ca)-3abc
  category: 대칭식·뉴턴 항등식
  tier: star_5
  tier_note: "대칭식 전개 통찰"
  mechanism_primary: 대칭식 (기본대칭식·뉴턴)
  mechanism_secondary: [항등식 변형, 대입]
  insight_type: I-SYM
  depth: 3
  citation_note: 블랙라벨 CM1 CH02 STEP 2

- source: 블랙라벨-CM1-CH02-STEP2-#03
  page: 23
  unit_code: CM1-PL
  problem_summary: |
    세 자연수 a,b,c · (a³+b³)/(a³+c³)=(a+b)/(a+c) 만족 순서쌍 판정
    (49,99,99), (135,68,67), (75,49,87), (48,50,59)
  solution_summary: |
    인수분해 (a³+b³)=(a+b)(a²−ab+b²) 이용 · 조건 (a²-ab+b²)/(a²-ac+c²)=1 · b=c 또는 관계식
  category: 인수분해·조건 판정
  tier: star_5
  mechanism_primary: 세제곱합 인수분해
  mechanism_secondary: [식 정리, 조건 판정]
  insight_type: I-EQV
  depth: 2
  citation_note: 블랙라벨 CM1 CH02 STEP 2

- source: 블랙라벨-CM1-CH02-STEP2-#04
  page: 23
  unit_code: CM1-PL
  problem_summary: |
    ax³+b를 ax+b로 나눈 몫 Q₁(x), 나머지 R₁
    ax⁴+b를 ax+b로 나눈 몫 Q₂(x), 나머지 R₂
    R₁=R₂일 때 Q₁(3)+Q₂(4) 값
  solution_summary: |
    R₁=b(1-b²/a²), R₂=b(1-b³/a³) · R₁=R₂ · b² = b³/a 관계식 · b/a 결정 · Q 계산
  category: 다항식 나눗셈·조건
  tier: star_5
  mechanism_primary: 다항식 나눗셈 관계
  mechanism_secondary: [계수결정, 조건 통합]
  insight_type: I-CON
  depth: 2
  citation_note: 블랙라벨 CM1 CH02 STEP 2

- source: 블랙라벨-CM1-CH02-STEP2-#05
  page: 23
  unit_code: CM1-PL
  problem_summary: |
    (a+1)(b+1)(ab+1)+ab 인수분해
  solution_summary: |
    치환 A=ab · 전개 후 재정리 · (ab+a+b+1)(ab+1)+ab 형태
  category: 인수분해·치환
  tier: star_5
  mechanism_primary: 치환 인수분해
  mechanism_secondary: [전개 재정리]
  insight_type: I-RT
  depth: 2
  citation_note: 블랙라벨 CM1 CH02 STEP 2

- source: 블랙라벨-CM1-CH02-STEP2-#06
  page: 23
  unit_code: CM1-PL
  problem_summary: |
    자연수 308×310×313−3116의 양의 약수 개수
  solution_summary: |
    n=310으로 치환 · (n−2)n(n+3)−3116 · 인수분해 · 소인수분해 · 약수 개수
  category: 인수분해·정수론
  tier: star_5
  tier_note: "치환 정수 인수분해 통찰"
  mechanism_primary: 치환 (수→변수)
  mechanism_secondary: [소인수분해, 약수 계산]
  insight_type: I-RT
  depth: 3
  citation_note: 블랙라벨 CM1 CH02 STEP 2

- source: 블랙라벨-CM1-CH02-STEP2-#07
  page: 24
  unit_code: CM1-PL
  problem_summary: |
    최고차 1인 이차 f(x), g(x) · f(x)g(x)=(x²−3x+2)(x²+7x+12)+4
    f(5)+g(5) 값
  solution_summary: |
    (x²−3x+2)(x²+7x+12) 결합 (공통 인수) · 계산 후 4 더해 완전제곱 or 인수분해 재구성
  category: 인수분해·다항식 결합
  tier: star_5
  tier_note: "결합 통찰 · premium 후보"
  mechanism_primary: 다항식 결합 인수분해
  mechanism_secondary: [식 재정리, 완전제곱]
  insight_type: I-PD
  depth: 3
  citation_note: 블랙라벨 CM1 CH02 STEP 2

- source: 블랙라벨-CM1-CH02-STEP2-#08
  page: 24
  unit_code: CM1-PL
  problem_summary: |
    자연수 서로 다른 한 자리 짝수 a,b · x⁴−2(a²+b²)x²+(a²−b²)²와 x²−4a²이
    공통인수 · a²+b² 값
  solution_summary: |
    첫 식 인수분해 (x²-(a+b)²)(x²-(a-b)²) · 공통인수 조건 (a+b)²=4a² or (a-b)²=4a²
  category: 인수분해·공통인수
  tier: star_5
  tier_note: "인수분해 + 공통인수 조건"
  mechanism_primary: 이차식 인수분해 + 공통인수
  mechanism_secondary: [정수 조건 필터]
  insight_type: I-CON
  depth: 2
  citation_note: 블랙라벨 CM1 CH02 STEP 2

- source: 블랙라벨-CM1-CH02-STEP2-#09
  page: 24
  unit_code: CM1-PL
  problem_summary: |
    x+2y+3z=6 · 360(x−1)(y−1)(z−1)/((x−1)³+8(y−1)³+27(z−1)³) 값
  solution_summary: |
    A=x−1, B=2(y−1), C=3(z−1) 치환 · A+B+C=0 · A³+B³+C³=3ABC 활용
  category: 대칭식·항등식
  tier: star_5
  tier_note: "치환 + 대칭 · premium 후보"
  mechanism_primary: 세제곱합 항등식 (a+b+c=0)
  mechanism_secondary: [치환, 대칭 조건]
  insight_type: I-SYM
  depth: 3
  citation_note: 블랙라벨 CM1 CH02 STEP 2

- source: 블랙라벨-CM1-CH02-STEP2-#10
  page: 24
  unit_code: CM1-PL
  problem_summary: |
    (a+b)(b+c)(c+a)+abc 인수분해
  solution_summary: |
    a에 관한 다항식으로 정리 · a에 대한 인수분해 · 대칭식 원리
  category: 인수분해·대칭
  tier: star_5
  mechanism_primary: 한 변수 기준 인수분해
  mechanism_secondary: [대칭식]
  insight_type: I-SYM
  depth: 2
  citation_note: 블랙라벨 CM1 CH02 STEP 2

- source: 블랙라벨-CM1-CH02-STEP2-#11
  page: 24
  unit_code: CM1-PL
  problem_summary: |
    x²+4xy+3y²−x+y+k가 x,y에 대한 두 일차식 곱으로 인수분해 · k 값
  solution_summary: |
    x²+4xy+3y²=(x+y)(x+3y) · 나머지 -x+y+k를 (x+y)(x+3y)와 결합 · 상수 결정
  category: 인수분해·다변수
  tier: star_5
  mechanism_primary: 다변수 인수분해
  mechanism_secondary: [상수 조건]
  insight_type: I-EQV
  depth: 2
  citation_note: 블랙라벨 CM1 CH02 STEP 2

- source: 블랙라벨-CM1-CH02-STEP2-#12
  page: 24
  unit_code: CM1-PL
  problem_summary: |
    f(a,b,c)=a/b+b/c+c/a · f(b,a,c)+f(c,a,b)=−3, a+b+c≠0
    1/a+1/b+1/c 값 (서술형)
  solution_summary: |
    함수 대입 전개 · 합=−3 조건 정리 · 대칭식 관계
  category: 대칭식·조건 정리
  tier: star_5
  mechanism_primary: 대칭식 조건
  mechanism_secondary: [식 정리]
  insight_type: I-SYM
  depth: 2
  citation_note: 블랙라벨 CM1 CH02 STEP 2

- source: 블랙라벨-CM1-CH02-STEP2-#13
  page: 25
  unit_code: CM1-PL
  problem_summary: |
    세 자연수 x,y,z · x³+y³+z³−3xyz=10 · xy(x−y)+yz(y−z)+zx(z−x)=0
    xyz 값
  solution_summary: |
    x³+y³+z³−3xyz=(x+y+z)(x²+y²+z²−xy−yz−zx) 인수분해 · 두 번째 식 정리
  category: 대칭식·인수분해
  tier: star_5
  tier_note: "대칭 인수분해 + 조건 · premium 후보"
  mechanism_primary: 세제곱합 인수분해
  mechanism_secondary: [대칭식, 정수 필터]
  insight_type: I-SYM
  depth: 3
  citation_note: 블랙라벨 CM1 CH02 STEP 2

- source: 블랙라벨-CM1-CH02-STEP2-#14
  page: 25
  unit_code: CM1-PL
  problem_summary: |
    세 양수 a,b,c · ax⁴+bx³+cx²−16a와 x⁴+x³−3x²−4x−c 공통인수 (일차식)
    ax⁵+bx²−4ax−c의 인수 판정
  solution_summary: |
    첫 식 (x²−4)(ax²+bx+c/(x²)) · x²=4 판정 · 두 다항식 관계
  category: 다항식 결합·인수 판정
  tier: star_5
  tier_note: "다중 인수 조건 · premium 후보"
  mechanism_primary: 인수정리 + 결합
  mechanism_secondary: [공통 인수 조건]
  insight_type: I-CON
  depth: 3
  citation_note: 블랙라벨 CM1 CH02 STEP 2

- source: 블랙라벨-CM1-CH02-STEP2-#15
  page: 25
  unit_code: CM1-PL
  problem_summary: |
    f(n)=n²−3n+2, g(n)=2n³−12n²+28n−24 · g(n)/f(n) 자연수 되는 n 합
  solution_summary: |
    f(n)=(n−1)(n−2) 인수분해 · g(n) 나눗셈 · 나머지 조건
  category: 다항식 나눗셈·자연수 조건
  tier: star_5
  mechanism_primary: 다항식 나눗셈
  mechanism_secondary: [자연수 조건, 정수 필터]
  insight_type: I-EQV
  depth: 2
  citation_note: 블랙라벨 CM1 CH02 STEP 2

- source: 블랙라벨-CM1-CH02-STEP2-#16
  page: 25
  unit_code: CM1-PL
  problem_summary: |
    정육면체 (모서리 x) 내부 사각기둥 (한 변 y) 구멍 · [그림 2] 부피 x,y 식 표현
  solution_summary: |
    부피=x³−3x·y²+2y³=(x−y)²(x+2y) 인수분해
  category: 부피·인수분해·도형
  tier: star_5
  tier_note: "도형 상황 + 인수분해"
  mechanism_primary: 도형 상황 인수분해
  mechanism_secondary: [3D 부피 계산]
  insight_type: I-RT
  depth: 2
  citation_note: 블랙라벨 CM1 CH02 STEP 2

- source: 블랙라벨-CM1-CH02-STEP2-#17
  page: 25
  unit_code: CM1-PL
  problem_summary: |
    이차 P(x), Q(x) · P(x)+Q(x)=2 · {P(x)}³+{Q(x)}³=6x⁴+24x³+24x²+2
    P의 최고차 음수 · P(1)+Q(2) 값
  solution_summary: |
    A³+B³=(A+B)(A²−AB+B²)=2(A²−AB+B²) · A+B=2 · AB 값 도출 · P·Q 결정
  category: 대칭식·다항식 결합
  tier: star_5
  tier_note: "복잡 대칭식 + 조건 · premium 후보"
  mechanism_primary: 세제곱합 공식 (다항식)
  mechanism_secondary: [계수결정, 조건 통합]
  insight_type: I-CON
  depth: 3
  citation_note: 블랙라벨 CM1 CH02 STEP 2

- source: 블랙라벨-CM1-CH02-STEP2-#18
  page: 25
  unit_code: CM1-PL
  problem_summary: |
    3x³+(k−3)x²+(6−k)x−6가 계수·상수항 모두 정수인 세 일차식 곱으로 인수분해
    · k 최댓값 M, 최솟값 m · M−m 값
  solution_summary: |
    x=1 대입 검증 · (x−1) 인수 · 이차식 정수 인수분해 조건 · k 범위
  category: 인수분해·정수 조건
  tier: star_5
  tier_note: "정수 인수분해 조건 · premium 후보"
  mechanism_primary: 삼차 정수 인수분해
  mechanism_secondary: [정수 조건, 극값 판정]
  insight_type: I-CON
  depth: 3
  citation_note: 블랙라벨 CM1 CH02 STEP 2
```

---

## III. 복소수 (CH03 · CM1-EQ) — STEP 2 (30문)

```yaml
- source: 블랙라벨-CM1-CH03-STEP2-#01
  page: 31
  unit_code: CM1-EQ
  problem_summary: |
    z=(x²−x−6)+(x²+x−2)i · z 실수 되는 x=x₁ · z² 음의 실수 x=x₂
    x₁+x₂ 값
  solution_summary: |
    z 실수: 허수부=0 · z² 음실: z 순허수 조건 (실수부=0, 허수부≠0)
  category: 복소수 뜻·순허수
  tier: star_5
  mechanism_primary: 복소수 실수·순허수 조건
  mechanism_secondary: [이차식 근]
  insight_type: I-EQV
  depth: 2
  citation_note: 블랙라벨 CM1 CH03 STEP 2

- source: 블랙라벨-CM1-CH03-STEP2-#02
  page: 31
  unit_code: CM1-EQ
  problem_summary: |
    두 복소수 α,β 명제 4항 (ㄱ αβ=0 · ㄴ α²+β²=0 · ㄷ α+βi=0 · ㄹ α+β,αβ 실수)
  solution_summary: |
    반례 찾기 · 실수·복소수 조건 판정 · 켤레 관계
  category: 복소수 명제 판단
  tier: star_5
  mechanism_primary: 명제 판단 (복소수)
  mechanism_secondary: [반례, 켤레]
  insight_type: I-MI
  depth: 2
  citation_note: 블랙라벨 CM1 CH03 STEP 2

- source: 블랙라벨-CM1-CH03-STEP2-#03
  page: 31
  unit_code: CM1-EQ
  problem_summary: |
    두 양수 a,b · f(a,b)=(√a+√bi)/(√a−√bi) · f(2,1)+f(4,2)+...+f(30,15)=p+q√2i
  solution_summary: |
    분모유리화 · f(a,b) 표준형 · 정수배 인식 · 수열합
  category: 복소수 계산·수열합
  tier: star_5
  tier_note: "패턴 발견 · premium 후보"
  mechanism_primary: 유리화 + 패턴
  mechanism_secondary: [수열합]
  insight_type: I-PD
  depth: 3
  citation_note: 블랙라벨 CM1 CH03 STEP 2

- source: 블랙라벨-CM1-CH03-STEP2-#04
  page: 31
  unit_code: CM1-EQ
  problem_summary: |
    5 이하 자연수 a,b · z=(a−b)+(a+b−4)i · z⁴이 음의 실수 순서쌍 개수
  solution_summary: |
    z 각도 조건 · z⁴ 음실 조건 판정 · 정수 필터
  category: 복소수 거듭제곱
  tier: star_5
  mechanism_primary: 복소수 거듭제곱 각도
  mechanism_secondary: [순서쌍 카운트]
  insight_type: I-EQV
  depth: 2
  citation_note: 블랙라벨 CM1 CH03 STEP 2

- source: 블랙라벨-CM1-CH03-STEP2-#05
  page: 31
  unit_code: CM1-EQ
  problem_summary: |
    서로 다른 x,y · x²−y=2i, y²−x=2i · (x+y)³−3xy 값
  solution_summary: |
    두 식 차: x²−y²=x−y · x+y=1 · 곱셈으로 xy 계산
  category: 연립·대칭
  tier: star_5
  tier_note: "연립 통찰 · premium 후보"
  mechanism_primary: 두 식 차 (대칭 활용)
  mechanism_secondary: [대칭식]
  insight_type: I-SYM
  depth: 3
  citation_note: 블랙라벨 CM1 CH03 STEP 2

- source: 블랙라벨-CM1-CH03-STEP2-#06
  page: 31
  unit_code: CM1-EQ
  problem_summary: |
    (2+i)x²+(k²−i)x−2i=0 실근을 가질 때 실수 k 값
  solution_summary: |
    실수·허수부 분리 · 두 식 성립 조건
  category: 복소수 계수 방정식
  tier: star_5
  mechanism_primary: 실수·허수부 분리
  mechanism_secondary: [연립]
  insight_type: I-EQV
  depth: 2
  citation_note: 블랙라벨 CM1 CH03 STEP 2

- source: 블랙라벨-CM1-CH03-STEP2-#07
  page: 32
  unit_code: CM1-EQ
  problem_summary: |
    1/i − 1/i² + 1/i³ − ... + (−1)ⁿ⁺¹/iⁿ = 1/i 만족 50 이하 자연수 n 개수
  solution_summary: |
    i 주기 4 활용 · 부분합 패턴 · n mod 4 필터
  category: 복소수 주기성
  tier: star_5
  mechanism_primary: i 주기성
  mechanism_secondary: [수열합, mod]
  insight_type: I-PD
  depth: 2
  citation_note: 블랙라벨 CM1 CH03 STEP 2

- source: 블랙라벨-CM1-CH03-STEP2-#08
  page: 32
  unit_code: CM1-EQ
  problem_summary: |
    z=(1+i)/(1−i) · zⁿ+z²ⁿ+z³ⁿ=−1 만족 100 이하 자연수 n 개수 (서술형)
  solution_summary: |
    z=i · iⁿ+i²ⁿ+i³ⁿ=-1 조건 · n mod 4
  category: 복소수 거듭제곱
  tier: star_5
  mechanism_primary: i 주기성
  mechanism_secondary: [필터]
  insight_type: I-PD
  depth: 2
  citation_note: 블랙라벨 CM1 CH03 STEP 2

- source: 블랙라벨-CM1-CH03-STEP2-#09
  page: 32
  unit_code: CM1-EQ
  problem_summary: |
    복소수 수열 z₁=2+i, zₙ₊₁=izₙ (n≥1) · z₉₉₉ 값
  solution_summary: |
    zₙ=iⁿ⁻¹·z₁ · z₉₉₉=i²(2+i) 계산
  category: 복소수 등비수열
  tier: star_5
  mechanism_primary: 복소수 등비수열
  mechanism_secondary: [i 주기성]
  insight_type: I-EQV
  depth: 2
  citation_note: 블랙라벨 CM1 CH03 STEP 2

- source: 블랙라벨-CM1-CH03-STEP2-#10
  page: 32
  unit_code: CM1-EQ
  problem_summary: |
    (1−i)ᵐ=−4ⁿ 만족 두 자리 자연수 m,n 순서쌍 개수
  solution_summary: |
    (1−i)² = -2i, (1-i)⁴ = -4 · m=4n 관계
  category: 복소수 거듭제곱 관계
  tier: star_5
  mechanism_primary: 복소수 거듭제곱 관계식
  mechanism_secondary: [정수해 카운트]
  insight_type: I-EQV
  depth: 2
  citation_note: 블랙라벨 CM1 CH03 STEP 2

- source: 블랙라벨-CM1-CH03-STEP2-#11
  page: 32
  unit_code: CM1-EQ
  problem_summary: |
    zₙ=(√2i/(1+i))ⁿ · 보기 3항 (ㄱ z₄=−1 · ㄴ z₁₁₁₁=z₇ · ㄷ z₁+z₃+...+z₉₉=√2i)
  solution_summary: |
    유리화 후 각도 판정 · 주기 계산
  category: 복소수 주기·수열합
  tier: star_5
  mechanism_primary: 복소수 각도 판정
  mechanism_secondary: [주기, 수열합]
  insight_type: I-PD
  depth: 2
  citation_note: 블랙라벨 CM1 CH03 STEP 2

- source: 블랙라벨-CM1-CH03-STEP2-#12
  page: 32
  unit_code: CM1-EQ
  problem_summary: |
    100 이하 n · (√2/(1+i))ⁿ+((1−√3i)/2)ⁿ=2 만족 n 합
  solution_summary: |
    두 복소수 각도 판정 · 두 값 모두 1인 최소공배수 mod
  category: 이중 주기 결합
  tier: star_5
  tier_note: "premium 후보"
  mechanism_primary: 이중 주기 결합
  mechanism_secondary: [최소공배수]
  insight_type: I-CON
  depth: 3
  citation_note: 블랙라벨 CM1 CH03 STEP 2

- source: 블랙라벨-CM1-CH03-STEP2-#13
  page: 33
  unit_code: CM1-EQ
  problem_summary: |
    z=(−1+√3i)/2 · 보기 3항 (ㄱ z³=1 · ㄴ z⁴+z⁵=−1 · ㄷ zⁿ+z²ⁿ+z³ⁿ+z⁴ⁿ=−1 만족 100 이하 n 개수 66) [2021 교육청]
  solution_summary: |
    z=ω (x³=1 허근) · ω³=1, 1+ω+ω²=0 활용 · 명제 판정
  category: 1의 세제곱근
  tier: star_5
  tier_note: "ω 성질 다중 활용"
  mechanism_primary: 1의 세제곱근 성질
  mechanism_secondary: [주기, mod]
  insight_type: I-MI
  depth: 3
  citation_note: 블랙라벨 CM1 CH03 STEP 2

- source: 블랙라벨-CM1-CH03-STEP2-#14
  page: 33
  unit_code: CM1-EQ
  problem_summary: |
    f(n)=(√2/(1+i))ⁿ+(√2/(1−i))ⁿ · f(m)>1 만족 50 이하 자연수 m 개수
  solution_summary: |
    두 복소수 켤레 관계 · 실수부 2배 · 각도 판정 · 부등식
  category: 켤레 부등식
  tier: star_5
  mechanism_primary: 켤레 실수부
  mechanism_secondary: [주기, 필터]
  insight_type: I-SYM
  depth: 2
  citation_note: 블랙라벨 CM1 CH03 STEP 2

- source: 블랙라벨-CM1-CH03-STEP2-#15
  page: 33
  unit_code: CM1-EQ
  problem_summary: |
    (a+bi)²=3−2i · (a−bi)⁴=(c+di)/(5+12i) · c+d 값
  solution_summary: |
    켤레의 4승은 4승의 켤레 · (a-bi)⁴ 계산
  category: 켤레 성질
  tier: star_5
  mechanism_primary: 켤레 성질 (n승 대칭)
  mechanism_secondary: [복소수 사칙연산]
  insight_type: I-SYM
  depth: 2
  citation_note: 블랙라벨 CM1 CH03 STEP 2

- source: 블랙라벨-CM1-CH03-STEP2-#16
  page: 33
  unit_code: CM1-EQ
  problem_summary: |
    ω=(1+√2i)/2 · z=(3ω+1)/(5ω−1) · z·conj(z) 값
  solution_summary: |
    분자·분모 켤레 계산 · |z|²=수/수
  category: 켤레 절대값
  tier: star_5
  mechanism_primary: 켤레복소수 절대값
  mechanism_secondary: [분수 계산]
  insight_type: I-EQV
  depth: 2
  citation_note: 블랙라벨 CM1 CH03 STEP 2

- source: 블랙라벨-CM1-CH03-STEP2-#17
  page: 33
  unit_code: CM1-EQ
  problem_summary: |
    z 보기 3항 (ㄱ z·conj(z)=0이면 z=0 · ㄴ z²−conj(z)² 실수 · ㄷ zi/(1-z)−conj(z)i/(1-conj(z)) 실수)
  solution_summary: |
    z=a+bi 대입 · 실수부·허수부 분리 · 검증
  category: 켤레 명제
  tier: star_5
  mechanism_primary: 켤레 성질 판단
  mechanism_secondary: [실수·허수부 분리]
  insight_type: I-MI
  depth: 2
  citation_note: 블랙라벨 CM1 CH03 STEP 2

- source: 블랙라벨-CM1-CH03-STEP2-#18
  page: 33
  unit_code: CM1-EQ
  problem_summary: |
    α+β=2+i, conj(α²)−conj(β²)=3+6i · (αβ)²+conj(αβ)² 값
  solution_summary: |
    α²-β²=3-6i · α+β·α-β 관계 · (αβ)² 계산
  category: 켤레 관계·대칭식
  tier: star_5
  tier_note: "다중 켤레 조건 · premium 후보"
  mechanism_primary: 켤레·차·곱 결합
  mechanism_secondary: [대칭식, 조건 통합]
  insight_type: I-CON
  depth: 3
  citation_note: 블랙라벨 CM1 CH03 STEP 2

- source: 블랙라벨-CM1-CH03-STEP2-#19
  page: 34
  unit_code: CM1-EQ
  problem_summary: |
    (2−3i)z+ω·conj(z) 실수 되는 ω (빈출)
  solution_summary: |
    z=a+bi 대입 · 허수부=0 · 계수 매칭
  category: 켤레·조건 통합
  tier: star_5
  mechanism_primary: 실수 조건 (계수 매칭)
  mechanism_secondary: [켤레]
  insight_type: I-EQV
  depth: 2
  citation_note: 블랙라벨 CM1 CH03 STEP 2

- source: 블랙라벨-CM1-CH03-STEP2-#20
  page: 34
  unit_code: CM1-EQ
  problem_summary: |
    세 복소수 z₁,z₂,z₃ 보기 4항 실수 판정
  solution_summary: |
    z=a+bi 대입 · 실수 조건 판정 · 켤레 대칭 활용
  category: 켤레 명제 판단
  tier: star_5
  mechanism_primary: 켤레 대칭
  mechanism_secondary: [실수·허수 분리]
  insight_type: I-MI
  depth: 2
  citation_note: 블랙라벨 CM1 CH03 STEP 2

- source: 블랙라벨-CM1-CH03-STEP2-#21
  page: 34
  unit_code: CM1-EQ
  problem_summary: |
    z 조건 (z²+2z 실수, z·conj(z)=4) · 서로 다른 z⁴ 값 합
  solution_summary: |
    z=a+bi 대입 · 허수부=0 · a²+b²=4 · z⁴ 계산
  category: 켤레·조건 통합
  tier: star_5
  mechanism_primary: 켤레·조건 결합
  mechanism_secondary: [4승]
  insight_type: I-CON
  depth: 2
  citation_note: 블랙라벨 CM1 CH03 STEP 2

- source: 블랙라벨-CM1-CH03-STEP2-#22
  page: 34
  unit_code: CM1-EQ
  problem_summary: |
    α·conj(α)=β·conj(β)=4, α+β=−2−2√3i · (1/α+1/β)²⁴⁶⁸ 값
  solution_summary: |
    1/α = conj(α)/4 · 1/α+1/β=conj(α+β)/4 · 거듭제곱 주기
  category: 켤레·거듭제곱
  tier: star_5
  tier_note: "다중 조건 + 주기 · premium 후보"
  mechanism_primary: 절대값 조건 + 켤레합
  mechanism_secondary: [주기, 거듭제곱]
  insight_type: I-CON
  depth: 3
  citation_note: 블랙라벨 CM1 CH03 STEP 2

- source: 블랙라벨-CM1-CH03-STEP2-#23
  page: 34
  unit_code: CM1-EQ
  problem_summary: |
    z=(−1+√3i)/4 · 1+2z+2²z²+...+2¹⁰z¹⁰=a+bi · 8b²−4a² 값
  solution_summary: |
    2z=(−1+√3i)/2 = ω · 등비수열 합 · 각도 활용
  category: 복소수 등비수열
  tier: star_5
  tier_note: "치환 + ω 성질"
  mechanism_primary: 복소수 등비수열합
  mechanism_secondary: [1의 세제곱근, 치환]
  insight_type: I-RT
  depth: 3
  citation_note: 블랙라벨 CM1 CH03 STEP 2

- source: 블랙라벨-CM1-CH03-STEP2-#24
  page: 34
  unit_code: CM1-EQ
  problem_summary: |
    z=(−1+√2i)/3 · 1/(3z³+5z²+z+1)=az+b · 2ab 값
  solution_summary: |
    3z=−1+√2i · 대입으로 다항식 값 축소 · 표준형
  category: 복소수 다항식 값
  tier: star_5
  mechanism_primary: 관계식 대입
  mechanism_secondary: [축소, 계수결정]
  insight_type: I-EQV
  depth: 2
  citation_note: 블랙라벨 CM1 CH03 STEP 2

- source: 블랙라벨-CM1-CH03-STEP2-#25
  page: 35
  unit_code: CM1-EQ
  problem_summary: |
    ω는 x²+x+1=0 허근 · f(x)=x+1/x · f(ω)f(ω²)···f(ω²⁰⁰⁸) 값
  solution_summary: |
    ω³=1 활용 · f 주기 · 곱 축소 반복
  category: 1의 세제곱근·주기
  tier: star_5
  tier_note: "ω 성질 심화 · premium 후보"
  mechanism_primary: 1의 세제곱근 주기 곱
  mechanism_secondary: [f 주기 반복]
  insight_type: I-PD
  depth: 3
  citation_note: 블랙라벨 CM1 CH03 STEP 2

- source: 블랙라벨-CM1-CH03-STEP2-#26
  page: 35
  unit_code: CM1-EQ
  problem_summary: |
    z²−kz+1=0 · ω=(z²−1)²+4z(z²+z+1) · ω 순허수일 때 ω=ai+b · (a+4b)² 값
  solution_summary: |
    z²=kz−1 반복 대입 · 실수부=0 조건 · a, b 결정
  category: 복소수 관계식
  tier: star_5
  tier_note: "다중 대입 통찰"
  mechanism_primary: 관계식 반복 대입
  mechanism_secondary: [실수부 조건]
  insight_type: I-CON
  depth: 3
  citation_note: 블랙라벨 CM1 CH03 STEP 2

- source: 블랙라벨-CM1-CH03-STEP2-#27
  page: 35
  unit_code: CM1-EQ
  problem_summary: |
    (3+2i)x+(1−i)y=3+7i · √(6xy)/√y + √(6x/y) 값
  solution_summary: |
    실·허수 분리 · x, y 부호 판정 · 음수 제곱근 규약
  category: 음수 제곱근 규약
  tier: star_5
  mechanism_primary: 음수 제곱근 규약
  mechanism_secondary: [연립, 부호]
  insight_type: I-EQV
  depth: 2
  citation_note: 블랙라벨 CM1 CH03 STEP 2

- source: 블랙라벨-CM1-CH03-STEP2-#28
  page: 35
  unit_code: CM1-EQ
  problem_summary: |
    √a√b=−√ab 조건 · √a+√ab+√(b/a) 허수부
  solution_summary: |
    a<0, b<0 조건 · √(음수) 규약 · 각 항 허수부
  category: 음수 제곱근 규약
  tier: star_5
  mechanism_primary: 음수 제곱근 조건 판정
  mechanism_secondary: [허수부 추출]
  insight_type: I-EQV
  depth: 2
  citation_note: 블랙라벨 CM1 CH03 STEP 2

- source: 블랙라벨-CM1-CH03-STEP2-#29
  page: 35
  unit_code: CM1-EQ
  problem_summary: |
    양수 a,b,c · 1/(a+b)<1/(b+c), 2/c<1/b · 세 근호식 명제 판정
  solution_summary: |
    조건 부호 판정 · √(음수·음수)=-√((음수)(음수)) 규약 반복 적용
  category: 부등식 조건·근호 규약
  tier: star_5
  tier_note: "부호 판정 다층 · premium 후보"
  mechanism_primary: 부호 판정 → 근호 규약
  mechanism_secondary: [명제 판정]
  insight_type: I-MI
  depth: 3
  citation_note: 블랙라벨 CM1 CH03 STEP 2

- source: 블랙라벨-CM1-CH03-STEP2-#30
  page: 35
  unit_code: CM1-EQ
  problem_summary: |
    abc=−72 · k=√a·√b·√c · 가능한 모든 k값의 제곱의 합
  solution_summary: |
    a, b, c 부호 조합 판정 · 각 조합 k² 계산 · 합
  category: 근호·부호 조합
  tier: star_5
  mechanism_primary: 근호 조합 부호 판정
  mechanism_secondary: [모든 케이스]
  insight_type: I-MI
  depth: 2
  citation_note: 블랙라벨 CM1 CH03 STEP 2
```

---

## IV. 이차방정식 (CH04 · CM1-EQ) — STEP 2 (30문)

```yaml
- source: 블랙라벨-CM1-CH04-STEP2-#01
  page: 42
  unit_code: CM1-EQ
  problem_summary: |
    (m−4)(m−1)x=m−2(x+1) 근 존재 안 함 · x²−mx+n=0 한 근 5 · 나머지 근
  solution_summary: |
    일차방정식 근 없음 조건 · m=4 · 근과 계수 관계
  category: 이차방정식 근 조건
  tier: star_5
  mechanism_primary: 근 존재 조건 (일차·이차)
  mechanism_secondary: [근과 계수 관계]
  insight_type: I-EQV
  depth: 2
  citation_note: 블랙라벨 CM1 CH04 STEP 2

- source: 블랙라벨-CM1-CH04-STEP2-#02
  page: 42
  unit_code: CM1-EQ
  problem_summary: |
    kx²+(k−2)x+4=0 허근 α · α² 실수 되는 이차방정식 두 근 곱
  solution_summary: |
    α² 실수 조건: α²가 실수이려면 α가 순허수 · 이차식 판별식 조건
  category: 이차방정식 근 조건
  tier: star_5
  mechanism_primary: α² 실수 조건 (순허수)
  mechanism_secondary: [근과 계수]
  insight_type: I-EQV
  depth: 2
  citation_note: 블랙라벨 CM1 CH04 STEP 2

- source: 블랙라벨-CM1-CH04-STEP2-#03
  page: 42
  unit_code: CM1-EQ
  problem_summary: |
    유리수 a,b,c · ax²+√3bx+c=0의 한 근 α=1−√3 · 다른 근 β · α+1/β 값
  solution_summary: |
    무리수 조건: 켤레 근 β=1+√3 · 근과 계수의 관계 · 유리수 조건 만족
  category: 무리수 근·유리수 조건
  tier: star_5
  mechanism_primary: 무리수 켤레 근
  mechanism_secondary: [근과 계수 관계]
  insight_type: I-RT
  depth: 2
  citation_note: 블랙라벨 CM1 CH04 STEP 2

- source: 블랙라벨-CM1-CH04-STEP2-#04
  page: 42
  unit_code: CM1-EQ
  problem_summary: |
    |x²+(4a−1)x+a²|=1의 한 근이 −1 · 모든 실수 a의 곱
  solution_summary: |
    x=-1 대입 · |−1+(1-4a)+a²|=1 · a²-4a=0 or a²-4a+2=0 등 · 모든 케이스
  category: 절댓값 방정식
  tier: star_5
  mechanism_primary: 절댓값 방정식 경우 분류
  mechanism_secondary: [근의 곱]
  insight_type: I-MI
  depth: 2
  citation_note: 블랙라벨 CM1 CH04 STEP 2

- source: 블랙라벨-CM1-CH04-STEP2-#05
  page: 42
  unit_code: CM1-EQ
  problem_summary: |
    x²+√(x²)=|x−1|+3, x²+ax+b=0 근 같음 · a−b 값
  solution_summary: |
    √(x²)=|x| · 케이스 분류 (x≥0, x<0) · x≥1, x<1 분류 · 근 결정
  category: 절댓값 방정식 (다중)
  tier: star_5
  tier_note: "다중 케이스 결합 · premium 후보"
  mechanism_primary: 절댓값 케이스 분류
  mechanism_secondary: [x² vs |x|, 근 대응]
  insight_type: I-MI
  depth: 3
  citation_note: 블랙라벨 CM1 CH04 STEP 2

- source: 블랙라벨-CM1-CH04-STEP2-#06
  page: 42
  unit_code: CM1-EQ
  problem_summary: |
    [2x]²−2[x]−7=0 만족 실수 x 범위 ([x] 가우스 기호)
  solution_summary: |
    [2x]=n 케이스 분류 · n²−2[x]=7 · [x]과 n 관계 · x 범위
  category: 가우스 기호·방정식
  tier: star_5
  mechanism_primary: 가우스 방정식 케이스 분류
  mechanism_secondary: [x 범위 필터]
  insight_type: I-EQV
  depth: 2
  citation_note: 블랙라벨 CM1 CH04 STEP 2

- source: 블랙라벨-CM1-CH04-STEP2-#07
  page: 43
  unit_code: CM1-EQ
  problem_summary: |
    (k−1)x²−2√6x+k=0 만족 x가 오직 한 개 · 모든 실수 k 합
  solution_summary: |
    k=1이면 일차 · 판별식=0 조건 · 두 케이스 합
  category: 근 개수 조건
  tier: star_5
  mechanism_primary: 근 개수 조건 (일차·이차 분리)
  mechanism_secondary: [판별식]
  insight_type: I-CON
  depth: 2
  citation_note: 블랙라벨 CM1 CH04 STEP 2

- source: 블랙라벨-CM1-CH04-STEP2-#08
  page: 43
  unit_code: CM1-EQ
  problem_summary: |
    x²−2(a+k)x−a+10=0 모든 실수 k에 대해 실근을 가짐 · a의 최솟값 (빈출)
  solution_summary: |
    판별식 D=(a+k)²+(a-10) ≥ 0 모든 k · k에 대한 이차식 판별식 조건
  category: 판별식·이중 조건
  tier: star_5
  tier_note: "이중 판별식 · premium 후보"
  mechanism_primary: 이중 판별식
  mechanism_secondary: [최솟값]
  insight_type: I-CON
  depth: 3
  citation_note: 블랙라벨 CM1 CH04 STEP 2

- source: 블랙라벨-CM1-CH04-STEP2-#09
  page: 43
  unit_code: CM1-EQ
  problem_summary: |
    (a−3)x²+(a−b)x−(b−3)=0 중근 · 두 자연수 a,b에 대해 a²+b² 최솟값
  solution_summary: |
    판별식=0 조건 · (a-b)²+4(a-3)(b-3)=0 · 자연수 필터
  category: 중근·정수 조건
  tier: star_5
  mechanism_primary: 판별식=0 + 정수 조건
  mechanism_secondary: [최솟값 탐색]
  insight_type: I-CON
  depth: 2
  citation_note: 블랙라벨 CM1 CH04 STEP 2

- source: 블랙라벨-CM1-CH04-STEP2-#10
  page: 43
  unit_code: CM1-EQ
  problem_summary: |
    (x²−2x−4a)(x²+2ax+a²−a+2)=0 서로 다른 허근 2개 되는 정수 a 개수
  solution_summary: |
    두 이차 각각의 판별식 D₁, D₂ 부호 · 허근 2개 케이스 (한 이차 허근 다른 실근 등) 분류
  category: 판별식 결합·정수 조건
  tier: star_5
  tier_note: "두 이차 판별식 결합"
  mechanism_primary: 두 이차 판별식 조건
  mechanism_secondary: [정수 필터]
  insight_type: I-CON
  depth: 3
  citation_note: 블랙라벨 CM1 CH04 STEP 2

- source: 블랙라벨-CM1-CH04-STEP2-#11
  page: 43
  unit_code: CM1-EQ
  problem_summary: |
    p,q≠0 실수 · x²+px+q=0(㉠), x²+qx+p=0(㉡) 명제 판정
  solution_summary: |
    각 이차 판별식 D₁=p²-4q, D₂=q²-4p 부호 판정 · 각 명제 검증
  category: 판별식 명제
  tier: star_5
  mechanism_primary: 판별식 조건 명제 판단
  mechanism_secondary: [부등식 결합]
  insight_type: I-MI
  depth: 2
  citation_note: 블랙라벨 CM1 CH04 STEP 2

- source: 블랙라벨-CM1-CH04-STEP2-#12
  page: 43
  unit_code: CM1-EQ
  problem_summary: |
    x²+(k+1)x+k=0 두 근 절댓값 비 1:2 · 모든 실수 k 합
  solution_summary: |
    두 근 α, β · |β|=2|α| 케이스 (β=2α or β=-2α) · 근과 계수 관계 대입
  category: 근과 계수·비 조건
  tier: star_5
  mechanism_primary: 근의 비 조건
  mechanism_secondary: [경우 분리, k 합]
  insight_type: I-EQV
  depth: 2
  citation_note: 블랙라벨 CM1 CH04 STEP 2

- source: 블랙라벨-CM1-CH04-STEP2-#13
  page: 44
  unit_code: CM1-EQ
  problem_summary: |
    x²+(a²−2a−3)x−a+1=0 실근 α,β · |α|=|β|, αβ<0 만족 a (빈출)
  solution_summary: |
    두 근 절댓값 같고 곱 음수 · α=-β · 근합=0, 근곱<0 조건
  category: 근의 부호 조건
  tier: star_5
  mechanism_primary: 근합=0·근곱<0
  mechanism_secondary: [근과 계수]
  insight_type: I-CON
  depth: 2
  citation_note: 블랙라벨 CM1 CH04 STEP 2

- source: 블랙라벨-CM1-CH04-STEP2-#14
  page: 44
  unit_code: CM1-EQ
  problem_summary: |
    a<2 · x²+(a−2)x+2a−4=0 다른 두 실근 α,β · |α|+|β|=√65 · (a−1)(β−1) 값 (서술형)
  solution_summary: |
    근과 계수의 관계 · 근 부호 판정 · (α-1)(β-1) 전개
  category: 근의 절댓값·판정
  tier: star_5
  mechanism_primary: 절댓값 합 조건
  mechanism_secondary: [부호 판정]
  insight_type: I-CON
  depth: 2
  citation_note: 블랙라벨 CM1 CH04 STEP 2

- source: 블랙라벨-CM1-CH04-STEP2-#15
  page: 44
  unit_code: CM1-EQ
  problem_summary: |
    ax²+bx+c=0 두 근 p,q · cx²−bx+a=0 두 근 r,s · p,q,r,s 대소 관계 판정 (-1<p<0<q<1, r<s, ac≠0)
  solution_summary: |
    ax²+bx+c=0 근이 p,q이면 cx²+bx+a=0 근이 1/p, 1/q · 부호 조건 및 대소
  category: 계수 뒤바뀐 근 관계
  tier: star_5
  tier_note: "역수 근 통찰 · premium 후보"
  mechanism_primary: 계수 뒤바뀐 이차식 근 (역수)
  mechanism_secondary: [부호 판정, 대소]
  insight_type: I-RT
  depth: 3
  citation_note: 블랙라벨 CM1 CH04 STEP 2

- source: 블랙라벨-CM1-CH04-STEP2-#16
  page: 44
  unit_code: CM1-EQ
  problem_summary: |
    복소수 ω, conj(ω)가 x²−√3x+1=0의 두 근 · (1+ω+ω²+...+ω¹⁰⁰)+(1+conj(ω)+conj(ω)²+...+conj(ω)¹⁰⁰) 값
  solution_summary: |
    ω+conj(ω)=√3, ω·conj(ω)=1 · ω=cos30°+i sin30°=e^(iπ/6) · 12주기
  category: 복소수 근·주기
  tier: star_5
  tier_note: "복소수 12주기 · premium 후보"
  mechanism_primary: 근과 계수 → 극형식 → 주기
  mechanism_secondary: [등비수열합]
  insight_type: I-RT
  depth: 3
  citation_note: 블랙라벨 CM1 CH04 STEP 2

- source: 블랙라벨-CM1-CH04-STEP2-#17
  page: 44
  unit_code: CM1-EQ
  problem_summary: |
    x²−x−1=0 두 근 α,β · α⁵, β⁵ 두 근으로 이차항 계수 1인 이차방정식
  solution_summary: |
    피보나치 재귀 αⁿ=Fₙα+Fₙ₋₁ · α⁵+β⁵, α⁵β⁵ 계산 · 방정식 구성
  category: 근·피보나치 관계
  tier: star_5
  tier_note: "피보나치 활용 · premium 후보"
  mechanism_primary: 근의 거듭제곱 재귀
  mechanism_secondary: [피보나치 항등식]
  insight_type: I-PD
  depth: 3
  citation_note: 블랙라벨 CM1 CH04 STEP 2

- source: 블랙라벨-CM1-CH04-STEP2-#18
  page: 44
  unit_code: CM1-EQ
  problem_summary: |
    x²+ax+b=0 두 근 1, α · x²−(a+4)x−b=0 두 근 4, β · 9x²+px+q=0 α,β 두 근 · p−q 값
  solution_summary: |
    근과 계수의 관계 여러번 · α, β 결정 · p, q 계산
  category: 이차방정식 결합
  tier: star_5
  mechanism_primary: 다중 근과 계수 관계
  mechanism_secondary: [계수 대응]
  insight_type: I-EQV
  depth: 2
  citation_note: 블랙라벨 CM1 CH04 STEP 2

- source: 블랙라벨-CM1-CH04-STEP2-#19
  page: 45
  unit_code: CM1-EQ
  problem_summary: |
    x²+x−1=0 두 근 α,β · f(α)=β, f(β)=α, f(1)=0 만족 이차 f(x) · f(x)=0의 두 근의 차
  solution_summary: |
    f(x)=k(x-α)(x-β) 형식이 아니라 조건별 · f(α)=β, f(β)=α · 대칭식 · f(x)+x가 f(1)+1=1으로 대칭점 확인
  category: 함수방정식·근 조건
  tier: star_5
  tier_note: "premium 후보"
  mechanism_primary: 함수방정식·근의 대응
  mechanism_secondary: [대칭 조건]
  insight_type: I-BW
  depth: 3
  citation_note: 블랙라벨 CM1 CH04 STEP 2

- source: 블랙라벨-CM1-CH04-STEP2-#20
  page: 45
  unit_code: CM1-EQ
  problem_summary: |
    무리수 정수+0~1 소수 표현 · 유리 계수 ax²+bx+c=0 한 근 √5+1의 소수 부분 · cx²+bx+a=0 두 근 α,β · α²+β² 값 (ac≠0)
  solution_summary: |
    √5+1 소수부=√5-1 · 유리 계수 이차식 켤레 근 · 근 결정 · 역수 이차식 근 관계 이용
  category: 무리수 근·역수 관계
  tier: star_5
  tier_note: "무리수 소수부 통찰 · premium 후보"
  mechanism_primary: 무리수 소수부 + 켤레
  mechanism_secondary: [역수 이차식]
  insight_type: I-RT
  depth: 3
  citation_note: 블랙라벨 CM1 CH04 STEP 2

- source: 블랙라벨-CM1-CH04-STEP2-#21
  page: 45
  unit_code: CM1-EQ
  problem_summary: |
    실수 p,q · x²−px+q=0 서로 다른 두 허근 z₁,z₂ · 보기 3항 (ㄱ q>0 · ㄴ z₁=2z₂ 만족 p,q 존재 · ㄷ z₁z₂=1이면 p+q=1)
  solution_summary: |
    허근 조건 판별식<0 · z₁, z₂ 켤레 관계 · 각 명제 검증
  category: 허근 명제
  tier: star_5
  mechanism_primary: 허근 켤레 성질
  mechanism_secondary: [명제 판정]
  insight_type: I-MI
  depth: 2
  citation_note: 블랙라벨 CM1 CH04 STEP 2

- source: 블랙라벨-CM1-CH04-STEP2-#22
  page: 45
  unit_code: CM1-EQ
  problem_summary: |
    f(x)=x²+px+q · 조건 (f(x)/(x+1) 나머지 19 · 양수 a, f(x)=0 한 근 a−2i) · p+q 값
  solution_summary: |
    허근 조건 켤레 근 a+2i · 근과 계수의 관계 · f(-1)=19 조건
  category: 근·조건 통합
  tier: star_5
  mechanism_primary: 켤레 근 + 나머지 조건
  mechanism_secondary: [연립]
  insight_type: I-CON
  depth: 2
  citation_note: 블랙라벨 CM1 CH04 STEP 2

- source: 블랙라벨-CM1-CH04-STEP2-#23
  page: 45
  unit_code: CM1-EQ
  problem_summary: |
    실수 계수 f(x)=0의 한 근 α=(1+√3i)/2 · f(a⁶−α) 값
  solution_summary: |
    α는 x²-x+1=0 근 · α²=α-1, α⁶=1 · α⁶-α=1-α · f(1-α)=f(β) (β=1-α는 켤레) · f(β)=0
  category: 복소수 근·계산
  tier: star_5
  tier_note: "α 성질 활용"
  mechanism_primary: 근의 거듭제곱 (α⁶=1)
  mechanism_secondary: [켤레 관계]
  insight_type: I-RT
  depth: 2
  citation_note: 블랙라벨 CM1 CH04 STEP 2

- source: 블랙라벨-CM1-CH04-STEP2-#24
  page: 45
  unit_code: CM1-EQ
  problem_summary: |
    x²+(m+1)x+2m−1=0 두 근이 정수 · 모든 정수 m 합
  solution_summary: |
    근과 계수의 관계 · 근 α, β 정수 · αβ, α+β 관계로 m 표현 · 정수해 필터
  category: 정수 근 조건
  tier: star_5
  mechanism_primary: 정수 근 조건 (근·계수)
  mechanism_secondary: [정수해 카운트]
  insight_type: I-CON
  depth: 2
  citation_note: 블랙라벨 CM1 CH04 STEP 2

- source: 블랙라벨-CM1-CH04-STEP2-#25
  page: 46
  unit_code: CM1-EQ
  problem_summary: |
    x²−ax+b=0 두 근 c,d · 조건 (a,b,c,d 50 이하 서로 다른 자연수 · c,d 각각 양의 약수 3개) · a+b 값
  solution_summary: |
    양의 약수 3개 = 소수² 형태 (4, 9, 25, 49) · 두 조합 · 근과 계수의 관계
  category: 정수 근·약수 조건
  tier: star_5
  tier_note: "정수·약수 결합 · premium 후보"
  mechanism_primary: 약수 개수 조건 + 근과 계수
  mechanism_secondary: [정수 필터]
  insight_type: I-CON
  depth: 3
  citation_note: 블랙라벨 CM1 CH04 STEP 2

- source: 블랙라벨-CM1-CH04-STEP2-#26
  page: 46
  unit_code: CM1-EQ
  problem_summary: |
    자연수 m,n · mx²−10x+n=0 서로 다른 두 소수 근 · 모든 n 합
  solution_summary: |
    두 근 소수 p, q · pq=n/m, p+q=10/m · m 값 판정 · 소수쌍 필터
  category: 소수 근 조건
  tier: star_5
  mechanism_primary: 소수 근 필터
  mechanism_secondary: [근과 계수]
  insight_type: I-CON
  depth: 2
  citation_note: 블랙라벨 CM1 CH04 STEP 2

- source: 블랙라벨-CM1-CH04-STEP2-#27
  page: 46
  unit_code: CM1-EQ
  problem_summary: |
    두 원 C₁, C₂가 가로 4, 세로 3 직사각형 ABCD 두 변에 각각 내접 · 두 원 반지름 합
  solution_summary: |
    두 원 중심 좌표 · 서로 접함 조건 · 반지름 이차방정식 → 근 합
  category: 도형·이차방정식
  tier: star_5
  tier_note: "도형 상황 이차방정식"
  mechanism_primary: 도형 방정식화
  mechanism_secondary: [근합]
  insight_type: I-RT
  depth: 2
  citation_note: 블랙라벨 CM1 CH04 STEP 2

- source: 블랙라벨-CM1-CH04-STEP2-#28
  page: 46
  unit_code: CM1-EQ
  problem_summary: |
    선분 AB 지름 반원 · P 반원 위 · H 수선의 발 · PH=3, OH=4 · PA, PB 두 근 (x²+ax+b=0, x²계수 1) · a²+b² 값
  solution_summary: |
    OA=OB=5 · PA²=25+40+16 등 · PA, PB 계산 · 근과 계수의 관계
  category: 도형·이차방정식
  tier: star_5
  mechanism_primary: 원 기하 + 근과 계수
  mechanism_secondary: [피타고라스]
  insight_type: I-CON
  depth: 2
  citation_note: 블랙라벨 CM1 CH04 STEP 2

- source: 블랙라벨-CM1-CH04-STEP2-#29
  page: 46
  unit_code: CM1-EQ
  problem_summary: |
    A는 오후 2시 도서관→학교, B는 오후 2시 20분 학교→도서관 · 만난 후 20분 후 A 학교 도착, 15분 후 B 도서관 도착 · b/a 값
  solution_summary: |
    거리 방정식 · 두 사람 시간·속도 관계 · 이차방정식
  category: 활용·속도
  tier: star_5
  mechanism_primary: 거리·속도·시간 관계
  mechanism_secondary: [이차방정식]
  insight_type: I-CON
  depth: 2
  citation_note: 블랙라벨 CM1 CH04 STEP 2

- source: 블랙라벨-CM1-CH04-STEP2-#30
  page: 46
  unit_code: CM1-EQ
  problem_summary: |
    한 변 2인 정오각형 ABCDE · BE 길이
  solution_summary: |
    황금비 관계 · 대각선 = 2·φ · 이차방정식
  category: 도형·황금비
  tier: star_5
  tier_note: "정오각형 황금비"
  mechanism_primary: 정오각형 대각선 (황금비)
  mechanism_secondary: [닮음 이차식]
  insight_type: I-PD
  depth: 3
  citation_note: 블랙라벨 CM1 CH04 STEP 2
```

---

## V. 이차방정식과 이차함수 (CH05 · CM1-EQ) — STEP 2 (30문)

```yaml
- source: 블랙라벨-CM1-CH05-STEP2-#01
  page: 53
  unit_code: CM1-EQ
  problem_summary: |
    y=ax²+bx+c 그래프 x축과 A, B에서 만남 · 꼭짓점 C(1,9) · 삼각형 ABC 넓이 27 · abc 값
  solution_summary: |
    꼭짓점 형식 y=a(x-1)²+9 · 밑변=|근차|=√(-36/a) · 넓이=27 · a 결정
  category: 이차함수·삼각형 넓이
  tier: star_5
  mechanism_primary: 꼭짓점 형식 + 삼각형 넓이
  mechanism_secondary: [근과 계수 관계]
  insight_type: I-EQV
  depth: 2
  citation_note: 블랙라벨 CM1 CH05 STEP 2

- source: 블랙라벨-CM1-CH05-STEP2-#02
  page: 53
  unit_code: CM1-EQ
  problem_summary: |
    x²의 계수 같은 세 이차함수 · (α,0)에서 만남 · f(x)+g(x)+h(x)=0의 x=α 외의 근
  solution_summary: |
    각 그래프 x축 교점 · 근과 계수 합·곱 관계 · 세 이차식 합의 근 판정
  category: 이차함수·근합
  tier: star_5
  mechanism_primary: 세 이차식 합의 근
  mechanism_secondary: [근과 계수]
  insight_type: I-SYM
  depth: 2
  citation_note: 블랙라벨 CM1 CH05 STEP 2

- source: 블랙라벨-CM1-CH05-STEP2-#03
  page: 53
  unit_code: CM1-EQ
  problem_summary: |
    y=ax²−4bx−4a+16 x축과 만나지 않거나 한 점 · 정수 (a,b) 개수
  solution_summary: |
    a>0, D≤0: 4b²+a(4a-16)≤0 · a=1,2,3,4 각각 b 정수해 개수
  category: 판별식·정수 조건
  tier: star_5
  mechanism_primary: 판별식 부등식·정수해
  mechanism_secondary: [케이스 카운트]
  insight_type: I-CON
  depth: 2
  citation_note: 블랙라벨 CM1 CH05 STEP 2

- source: 블랙라벨-CM1-CH05-STEP2-#04
  page: 53
  unit_code: CM1-EQ
  problem_summary: |
    f(x)=ax²+bx+c · f(6-x)=f(x) 만족 · f(0)<0, f(1)>0 · 보기 3항 (ㄱ b>0 · ㄴ a+b/5+c/25>0 · ㄷ f(x)=0 두 실근 합 6)
  solution_summary: |
    대칭축 x=3 · b=-6a · a>0 · 각 명제 검증
  category: 이차함수 대칭·명제
  tier: star_5
  mechanism_primary: 대칭성 (f(6-x)=f(x))
  mechanism_secondary: [부등식 판정]
  insight_type: I-SYM
  depth: 2
  citation_note: 블랙라벨 CM1 CH05 STEP 2

- source: 블랙라벨-CM1-CH05-STEP2-#05
  page: 53
  unit_code: CM1-EQ
  problem_summary: |
    이차항 계수 1 f(x) · y=f(x) 두 점 (1,0), (4,0) 지남 · 직선 y=g(x) · f(x)와 g(x) x좌표 2인 접점 · f(x)+5g(x)=0 두 근 합
  solution_summary: |
    f(x)=(x-1)(x-4) · g(x)는 접선 (기울기 f'(2)=-1) · f(x)+5g(x) 근합
  category: 이차함수·직선 접선
  tier: star_5
  tier_note: "접선 개념 활용"
  mechanism_primary: 이차함수 접선 조건
  mechanism_secondary: [근합]
  insight_type: I-EQV
  depth: 2
  citation_note: 블랙라벨 CM1 CH05 STEP 2

- source: 블랙라벨-CM1-CH05-STEP2-#06
  page: 53
  unit_code: CM1-EQ
  problem_summary: |
    y=2-x² 그래프 · 직선 y=kx 두 점 A, B · OA:OB=1:2 · 양수 k
  solution_summary: |
    A, B의 x좌표 α, 2α (좌표 비율) · 근과 계수의 관계 · k 결정
  category: 이차·직선·비율
  tier: star_5
  mechanism_primary: 근의 비율 조건
  mechanism_secondary: [근과 계수]
  insight_type: I-CON
  depth: 2
  citation_note: 블랙라벨 CM1 CH05 STEP 2

- source: 블랙라벨-CM1-CH05-STEP2-#07
  page: 54
  unit_code: CM1-EQ
  problem_summary: |
    y=x²−2ax+a²+2 그래프 · y=2x−k와 다른 두 점 만나는 자연수 k 개수 f(a) · f(1)+f(2)+f(3) 값
  solution_summary: |
    이차식-일차식 판별식>0 조건 · k 범위 · 자연수 카운트
  category: 판별식·범위·카운트
  tier: star_5
  mechanism_primary: 판별식 조건 → 정수해
  mechanism_secondary: [함수값 계산]
  insight_type: I-EQV
  depth: 2
  citation_note: 블랙라벨 CM1 CH05 STEP 2

- source: 블랙라벨-CM1-CH05-STEP2-#08
  page: 54
  unit_code: CM1-EQ
  problem_summary: |
    y=x²−2(a+3)x+a²+8a · 실수 a에 관계없이 y=mx+n에 항상 접함 · m+n 값 (빈출)
  solution_summary: |
    이차식-일차식=0 판별식=0 · a에 관한 항등식 · 계수 매칭 · m, n 결정
  category: 접선·항등식
  tier: star_5
  tier_note: "a 관계없이 조건 · premium 후보"
  mechanism_primary: a-항등식 (판별식=0)
  mechanism_secondary: [계수 매칭]
  insight_type: I-CON
  depth: 3
  citation_note: 블랙라벨 CM1 CH05 STEP 2

- source: 블랙라벨-CM1-CH05-STEP2-#09
  page: 54
  unit_code: CM1-EQ
  problem_summary: |
    f(x)=x²−x−5, g(x)=x+3 두 그래프 A, B에서 만남 · y=f(x) y축 교점 C · 삼각형 ABC 넓이 k · f(2x−k)=g(2x−k) 두 실근 합
  solution_summary: |
    A, B 좌표 · C=(0,-5) · 삼각형 넓이로 k 계산 · 치환 (2x-k)로 원식 근 표현
  category: 함수·기하·치환
  tier: star_5
  mechanism_primary: 치환 근의 표현
  mechanism_secondary: [넓이 계산]
  insight_type: I-RT
  depth: 2
  citation_note: 블랙라벨 CM1 CH05 STEP 2

- source: 블랙라벨-CM1-CH05-STEP2-#10
  page: 54
  unit_code: CM1-EQ
  problem_summary: |
    y=x² · y=ax−1 서로 다른 두 점, y=x+b와 만나지 않음 · y=x²+ax+b 그래프 명제 3항 (ㄱ x축과 다른 두 점 · ㄴ y축 양의 부분 · ㄷ 꼭짓점 제2사분면)
  solution_summary: |
    각 그래프 조건에서 a, b 범위 도출 · 각 명제 검증
  category: 이차함수 판정·명제
  tier: star_5
  mechanism_primary: 판별식 조건 조합
  mechanism_secondary: [명제 검증]
  insight_type: I-MI
  depth: 2
  citation_note: 블랙라벨 CM1 CH05 STEP 2

- source: 블랙라벨-CM1-CH05-STEP2-#11
  page: 54
  unit_code: CM1-EQ
  problem_summary: |
    y=kx가 y=2(x-2)² 두 점 A, B · y=-(x+1)² 두 점 C, D · AB:CD=2:3 · 양수 k 값
  solution_summary: |
    각 두 그래프 근차 = 판별식/이차계수 · 비율 조건 · k 방정식
  category: 근차 비율
  tier: star_5
  mechanism_primary: 근차 (판별식) 비율
  mechanism_secondary: [이차 계수 비교]
  insight_type: I-EQV
  depth: 2
  citation_note: 블랙라벨 CM1 CH05 STEP 2

- source: 블랙라벨-CM1-CH05-STEP2-#12
  page: 54
  unit_code: CM1-EQ
  problem_summary: |
    f(x)=x²+2x+1, g(x)=-x²+5 · h(x)=f (x≤-2 or x≥1) or g (-2<x<1) · y=mx+6과 h 그래프 서로 다른 세 점 만남 · 모든 m 합 S · 10S 값 [2021 교육청]
  solution_summary: |
    y=mx+6이 각 구간별 두 식으로 정의된 함수와 만나는 지점 · 3개 만남 케이스 분류 · 접선·경계점 조건
  category: 두 식으로 정의된 함수·직선 접선
  tier: star_5
  tier_note: "두 식으로 정의된 함수 세 점 조건 · premium 후보"
  mechanism_primary: 두 식으로 정의된 함수 세 점 조건
  mechanism_secondary: [경계·접선·판별식]
  insight_type: I-MI
  depth: 3
  citation_note: 블랙라벨 CM1 CH05 STEP 2

- source: 블랙라벨-CM1-CH05-STEP2-#13
  page: 55
  unit_code: CM1-EQ
  problem_summary: |
    |x²-1|-mx+2m=0 서로 다른 4개 실근 되는 m 범위 a<m<b · a+b 값
  solution_summary: |
    y=|x²-1|과 y=m(x-2) 그래프 교점 4개 조건 · 접선 조건 · 경계점
  category: 절댓값 함수·교점
  tier: star_5
  tier_note: "절댓값 함수 교점 4개 · premium 후보"
  mechanism_primary: 절댓값·직선 교점 개수
  mechanism_secondary: [접선, 경계값]
  insight_type: I-MI
  depth: 3
  citation_note: 블랙라벨 CM1 CH05 STEP 2

- source: 블랙라벨-CM1-CH05-STEP2-#14
  page: 55
  unit_code: CM1-EQ
  problem_summary: |
    y=f(x) 그래프 (V자 형태) · f(|x-k|)+3=0 모든 실근 합 12 되는 실수 k 값
  solution_summary: |
    f 그래프 이해 · |x-k| 대입 · 대칭 활용 · 근 합
  category: 절댓값·대칭
  tier: star_5
  mechanism_primary: 절댓값 함수 근의 대칭
  mechanism_secondary: [평행 이동 대칭]
  insight_type: I-SYM
  depth: 2
  citation_note: 블랙라벨 CM1 CH05 STEP 2

- source: 블랙라벨-CM1-CH05-STEP2-#15
  page: 55
  unit_code: CM1-EQ
  problem_summary: |
    y=x+k, y=|y|=x²-3|x|+2 교점 N(k) · N(1)+N(2)+N(3) 값
  solution_summary: |
    |y|=x²-3|x|+2 그래프 대칭 (x축·y축) · k 별 교점 개수
  category: 절댓값 함수·교점 카운트
  tier: star_5
  mechanism_primary: 다중 절댓값 그래프
  mechanism_secondary: [대칭, 카운트]
  insight_type: I-MI
  depth: 2
  citation_note: 블랙라벨 CM1 CH05 STEP 2

- source: 블랙라벨-CM1-CH05-STEP2-#16
  page: 55
  unit_code: CM1-EQ
  problem_summary: |
    |x²+4x-12|=k 양의 실근 1개, 다른 음의 실근 3개 되는 k 범위
  solution_summary: |
    y=|f(x)| 그래프 이해 · y=k와 교점 개수 조건 · k 범위 필터
  category: 절댓값 함수·근 개수
  tier: star_5
  mechanism_primary: 절댓값 그래프·교점 카운트
  mechanism_secondary: [경계값]
  insight_type: I-MI
  depth: 2
  citation_note: 블랙라벨 CM1 CH05 STEP 2

- source: 블랙라벨-CM1-CH05-STEP2-#17
  page: 55
  unit_code: CM1-EQ
  problem_summary: |
    y=f(x) 그래프 (꼭짓점 (-1,4), x축교점 -3, 1) · f(|f(x)|)=0의 서로 다른 실근 수 a · 최대·최소 근합 b · a/b 값
  solution_summary: |
    f(x)=k (k는 f의 근) · k=-3 or 1 · 각 케이스 다시 f(x)=... 근 판정
  category: 합성 함수·절댓값·근 개수
  tier: star_5
  tier_note: "이중 합성 근 · premium 후보"
  mechanism_primary: 합성 근 (f∘|f|)
  mechanism_secondary: [경계, 대칭]
  insight_type: I-MI
  depth: 3
  citation_note: 블랙라벨 CM1 CH05 STEP 2

- source: 블랙라벨-CM1-CH05-STEP2-#18
  page: 55
  unit_code: CM1-EQ
  problem_summary: |
    f(x)=x²+2ax+4a-6 최솟값 g(a) · g(a)의 최댓값 (a 실수)
  solution_summary: |
    x=-a 대입 · g(a)=-a²+4a-6 · g의 최댓값 (a에 대해 이차)
  category: 이차함수 최솟값·매개변수
  tier: star_5
  mechanism_primary: 매개변수 이차식 극값
  mechanism_secondary: [반복 이차식]
  insight_type: I-EQV
  depth: 2
  citation_note: 블랙라벨 CM1 CH05 STEP 2

- source: 블랙라벨-CM1-CH05-STEP2-#19
  page: 56
  unit_code: CM1-EQ
  problem_summary: |
    x²+(a+3)x+a-b²-2b=0 두 실근 α,β · α²+β² 최솟값
  solution_summary: |
    α+β=-(a+3), αβ=a-b²-2b · α²+β²=(α+β)²-2αβ 전개 · a에 대한 이차식·b도 반영
  category: 대칭식·매개변수 극값
  tier: star_5
  mechanism_primary: 대칭식 최솟값
  mechanism_secondary: [매개변수 이차]
  insight_type: I-EQV
  depth: 2
  citation_note: 블랙라벨 CM1 CH05 STEP 2

- source: 블랙라벨-CM1-CH05-STEP2-#20
  page: 56
  unit_code: CM1-EQ
  problem_summary: |
    y=x²+2(m-1)x-3m 그래프 x축과 만나는 두 점 사이 거리 최소 되는 m
  solution_summary: |
    두 근 α, β · |α-β|=√(판별식)/|계수| · 판별식 최소화 → m 판정
  category: 근차 최소화
  tier: star_5
  mechanism_primary: 판별식 최소값
  mechanism_secondary: [매개변수 이차]
  insight_type: I-EQV
  depth: 2
  citation_note: 블랙라벨 CM1 CH05 STEP 2

- source: 블랙라벨-CM1-CH05-STEP2-#21
  page: 56
  unit_code: CM1-EQ
  problem_summary: |
    y=f(x) 세 점 A(0,4), B(1,1), C(3,1) 지남 · 1≤x≤3 · P(a,b) · a²+3b 최대 M, 최소 m · Mm 값
  solution_summary: |
    f 결정 (이차식) · f(a)=b 대입 · a²+3f(a) 이차·최대·최소
  category: 이차함수 결정·극값
  tier: star_5
  mechanism_primary: 이차함수 결정 + 이차 극값
  mechanism_secondary: [범위 극값]
  insight_type: I-EQV
  depth: 2
  citation_note: 블랙라벨 CM1 CH05 STEP 2

- source: 블랙라벨-CM1-CH05-STEP2-#22
  page: 56
  unit_code: CM1-EQ
  problem_summary: |
    f(x)=ax²+bx+5 조건 (a,b 음수 정수 · 1≤x≤2 최댓값 3) · f(-2) 값 [2021 교육청]
  solution_summary: |
    a<0이면 꼭짓점 위치 판정 · 정수 조건 필터 · f(-2) 계산
  category: 이차 최댓값·정수 조건
  tier: star_5
  mechanism_primary: 이차 최댓값 정수 조건
  mechanism_secondary: [꼭짓점 판정]
  insight_type: I-CON
  depth: 2
  citation_note: 블랙라벨 CM1 CH05 STEP 2

- source: 블랙라벨-CM1-CH05-STEP2-#23
  page: 56
  unit_code: CM1-EQ
  problem_summary: |
    1≤x≤2 f(x)=x²-2mx+m²+m 최댓값 7 되는 정수 m 값 (서술형)
  solution_summary: |
    꼭짓점 x=m · m 위치 케이스 (m<1, 1≤m≤2, m>2) · 최댓값 계산
  category: 이차 최댓값·범위 케이스
  tier: star_5
  mechanism_primary: 꼭짓점 위치 케이스
  mechanism_secondary: [정수해]
  insight_type: I-MI
  depth: 2
  citation_note: 블랙라벨 CM1 CH05 STEP 2

- source: 블랙라벨-CM1-CH05-STEP2-#24
  page: 56
  unit_code: CM1-EQ
  problem_summary: |
    이차항 1 f(x) · f(x)≥f(1), f(3)=0 · a≤x≤a+2 f 최댓값·최솟값 합 0 되는 모든 실수 a 곱
  solution_summary: |
    꼭짓점 x=1 · f(x)=(x-1)²+f(1) · f(3)=0 조건 · 최대·최소 합 조건 case 나눔
  category: 이차 극값·범위 케이스
  tier: star_5
  tier_note: "극값 합 조건 다층 · premium 후보"
  mechanism_primary: 이차 극값 case 분류
  mechanism_secondary: [조건 통합]
  insight_type: I-CON
  depth: 3
  citation_note: 블랙라벨 CM1 CH05 STEP 2

- source: 블랙라벨-CM1-CH05-STEP2-#25
  page: 57
  unit_code: CM1-EQ
  problem_summary: |
    빵 2000원 팔면 1600개 판매 · 100원 인하마다 200개 증가 · 최대 매출액 만드는 빵 하나 가격
  solution_summary: |
    가격 x·(2000-100x), 개수 (1600+200x) · 이차 최댓값
  category: 활용·이차 최댓값
  tier: star_5
  mechanism_primary: 이차 매출 최댓값
  mechanism_secondary: []
  insight_type: I-EQV
  depth: 1
  citation_note: 블랙라벨 CM1 CH05 STEP 2

- source: 블랙라벨-CM1-CH05-STEP2-#26
  page: 57
  unit_code: CM1-EQ
  problem_summary: |
    AB=8, BC=12 직사각형 ABCD 네 점 P, Q, R, S 각 꼭짓점 A, B, C, D 출발 시계반대 매초 1속력 8초 이동 · 사각형 PQRS 넓이 최솟값
  solution_summary: |
    각 점 t초 위치 · PQRS 넓이 이차 · 최솟값
  category: 도형 이동·이차 최솟값
  tier: star_5
  tier_note: "동적 도형 · premium 후보"
  mechanism_primary: 동적 도형 넓이 이차
  mechanism_secondary: [극값]
  insight_type: I-RT
  depth: 3
  citation_note: 블랙라벨 CM1 CH05 STEP 2

- source: 블랙라벨-CM1-CH05-STEP2-#27
  page: 57
  unit_code: CM1-EQ
  problem_summary: |
    밑면 반지름 2, 높이 6 원뿔 내접 원기둥 · 겉넓이 S · S/π 최댓값
  solution_summary: |
    원기둥 반지름 r, 높이 h 관계식 (닮음) · S=2πr²+2πrh · r 이차·최댓값
  category: 도형 활용·이차 최댓값
  tier: star_5
  mechanism_primary: 도형 관계식 + 이차 극값
  mechanism_secondary: [원뿔·원기둥 닮음]
  insight_type: I-CON
  depth: 2
  citation_note: 블랙라벨 CM1 CH05 STEP 2

- source: 블랙라벨-CM1-CH05-STEP2-#28
  page: 57
  unit_code: CM1-EQ
  problem_summary: |
    지름 AB 길이 2 원 · AC+DB=CD 만족 두 점 C, D · S₁ (색칠), S₂ (색칠 안됨) 넓이 · S₁ 최댓값 M, S₂ 최솟값 m · M-m 값
  solution_summary: |
    AC=x, DB=y, CD=x+y=1 · S₁, S₂ 원의 넓이 관계 · 이차 극값
  category: 도형·이차 극값
  tier: star_5
  tier_note: "다중 원 관계 · premium 후보"
  mechanism_primary: 원 넓이 관계 + 이차 극값
  mechanism_secondary: [조건 통합]
  insight_type: I-CON
  depth: 3
  citation_note: 블랙라벨 CM1 CH05 STEP 2

- source: 블랙라벨-CM1-CH05-STEP2-#29
  page: 57
  unit_code: CM1-EQ
  problem_summary: |
    세 변 3:4:5 직각삼각형 공원 · 각 변에 꼭짓점, 도로에 평행한 변 X 꽃밭 · X 최댓값 150m² · 공원 둘레
  solution_summary: |
    직사각형 배치 · X 넓이 이차 · 최댓값 판정 · 공원 크기 역산
  category: 도형·이차 최댓값·역산
  tier: star_5
  mechanism_primary: 삼각형 내부 직사각형 최댓값
  mechanism_secondary: [닮음, 조건 역산]
  insight_type: I-BW
  depth: 2
  citation_note: 블랙라벨 CM1 CH05 STEP 2

- source: 블랙라벨-CM1-CH05-STEP2-#30
  page: 57
  unit_code: CM1-EQ
  problem_summary: |
    y=x²-8x+7, y=-x²+2x-1 두 그래프 만나는 점 P, Q · 직선 x=k와 그래프 만남 R, S · 사각형 PRQS 넓이 최댓값 M · 8M 값
  solution_summary: |
    P, Q 좌표 · R, S 좌표 (k 관련) · 사각형 넓이 k 이차 · 최댓값
  category: 두 이차·사각형 넓이
  tier: star_5
  tier_note: "두 이차 결합 · premium 후보"
  mechanism_primary: 두 이차 교점 + 이동 직선
  mechanism_secondary: [사각형 넓이 이차 극값]
  insight_type: I-CON
  depth: 3
  citation_note: 블랙라벨 CM1 CH05 STEP 2
```

---

## VI. 여러 가지 방정식 (CH06 · CM1-EQ) — STEP 2 (30문)

```yaml
- source: 블랙라벨-CM1-CH06-STEP2-#01
  page: 64
  unit_code: CM1-EQ
  problem_summary: |
    x⁴−x³−4x²−x+1=0 양의 실근 α · α³+1/α³ 값
  solution_summary: |
    양변 x²로 나누고 t=x+1/x 치환 · t 이차식 · t 값 결정 · t³-3t 관계
  category: 상반 방정식·치환
  tier: star_5
  tier_note: "상반방정식 t=x+1/x · premium 후보"
  mechanism_primary: 상반방정식 (t=x+1/x)
  mechanism_secondary: [세제곱합 공식]
  insight_type: I-RT
  depth: 3
  citation_note: 블랙라벨 CM1 CH06 STEP 2

- source: 블랙라벨-CM1-CH06-STEP2-#02
  page: 64
  unit_code: CM1-EQ
  problem_summary: |
    (x−1)(x−3)(x+5)(x+7)+55=0 네 근의 제곱 합
  solution_summary: |
    (x-1)(x+5)와 (x-3)(x+7) 짝지어 곱 · t=x²+4x 치환 · 이차식
  category: 곱 짝짓기·치환
  tier: star_5
  tier_note: "짝짓기 통찰 · premium 후보"
  mechanism_primary: 인수 짝짓기 (x²+4x 치환)
  mechanism_secondary: [근 제곱합]
  insight_type: I-PD
  depth: 3
  citation_note: 블랙라벨 CM1 CH06 STEP 2

- source: 블랙라벨-CM1-CH06-STEP2-#03
  page: 64
  unit_code: CM1-EQ
  problem_summary: |
    a>b 두 자연수 · x⁴-2(a²+b²)x²+(a²-b²)²=0 네 근의 곱 9 · a³+b³ 값
  solution_summary: |
    x⁴-2(a²+b²)x²+(a²-b²)²=(x²-(a+b)²)(x²-(a-b)²) · 근 ±(a+b), ±(a-b) · 곱=(a+b)²(a-b)²=9
  category: 사차식 인수분해·정수해
  tier: star_5
  mechanism_primary: 사차식 인수분해
  mechanism_secondary: [근의 곱, 정수 필터]
  insight_type: I-EQV
  depth: 2
  citation_note: 블랙라벨 CM1 CH06 STEP 2

- source: 블랙라벨-CM1-CH06-STEP2-#04
  page: 64
  unit_code: CM1-EQ
  problem_summary: |
    x³-(2a-1)x²+(a²-2a)x+2a²+4a+4=0 다른 두 실근 만족 실수 a 합 (빈출)
  solution_summary: |
    삼차식 인수분해 (x-2)·이차식 형태 or f(2)=0 확인 · 이차식 다른 조건
  category: 삼차식 인수분해·근 개수
  tier: star_5
  mechanism_primary: 삼차 인수 판정 + 조건
  mechanism_secondary: [판별식]
  insight_type: I-CON
  depth: 2
  citation_note: 블랙라벨 CM1 CH06 STEP 2

- source: 블랙라벨-CM1-CH06-STEP2-#05
  page: 64
  unit_code: CM1-EQ
  problem_summary: |
    f(x)=x³+(2a-1)x²+(b²-2a)x-b² · 보기 3항 (ㄱ f(1) 인수 · ㄴ a<b<0 서로 다른 실근 2개 · ㄷ 세 실근 합 7 되는 (a,b) 5개) [2019 교육청]
  solution_summary: |
    조합제법으로 (x-1) 인수 검증 · 이차식 판별식 · 실근 합 조건
  category: 삼차식 인수·명제
  tier: star_5
  tier_note: "다중 명제 판단 · premium 후보"
  mechanism_primary: 삼차식 근 판정
  mechanism_secondary: [명제 판단]
  insight_type: I-MI
  depth: 3
  citation_note: 블랙라벨 CM1 CH06 STEP 2

- source: 블랙라벨-CM1-CH06-STEP2-#06
  page: 64
  unit_code: CM1-EQ
  problem_summary: |
    x³+x²+kx+3=0 세 근 모두 정수 · k 값
  solution_summary: |
    정수 근 후보 (±1, ±3) · 확인 · 근과 계수의 관계
  category: 정수 근 조건
  tier: star_5
  mechanism_primary: 유리근 정리
  mechanism_secondary: [근과 계수]
  insight_type: I-EQV
  depth: 2
  citation_note: 블랙라벨 CM1 CH06 STEP 2

- source: 블랙라벨-CM1-CH06-STEP2-#07
  page: 65
  unit_code: CM1-EQ
  problem_summary: |
    a³=a²+a+1/9, b³=b²+b+1/9, c³=c²+c+1/9 만족 서로 다른 세 실수 a,b,c · a³+b³+c³ 값
  solution_summary: |
    a, b, c는 x³=x²+x+1/9 세 근 · 근과 계수의 관계 · 뉴턴 항등식 p₃
  category: 삼차 근 대칭식
  tier: star_5
  tier_note: "세 근 뉴턴 · premium 후보"
  mechanism_primary: 뉴턴 항등식 재귀
  mechanism_secondary: [삼차 근합]
  insight_type: I-SYM
  depth: 3
  citation_note: 블랙라벨 CM1 CH06 STEP 2

- source: 블랙라벨-CM1-CH06-STEP2-#08
  page: 65
  unit_code: CM1-EQ
  problem_summary: |
    x²-x+2=0 두 근 α, β · x³-3x+5=0 세 근 p, q, r · (pα+qβ)²+(pβ-qα)²+r²α²+r²β² 값
  solution_summary: |
    복잡 대칭식 정리 · 삼차·이차 근과 계수의 관계 결합
  category: 다중 근 대칭식
  tier: star_5
  tier_note: "다중 대칭 · premium 후보"
  mechanism_primary: 다중 이차·삼차 근 결합
  mechanism_secondary: [대칭식 확장]
  insight_type: I-CON
  depth: 3
  citation_note: 블랙라벨 CM1 CH06 STEP 2

- source: 블랙라벨-CM1-CH06-STEP2-#09
  page: 65
  unit_code: CM1-EQ
  problem_summary: |
    유리수 a,b,c · x⁴+6x³+ax²+bx+c=0 -2+√3 근을 가짐 · a+b+c 값
  solution_summary: |
    유리수 계수 사차식 · 무리수 근 켤레 -2-√3도 근 · 두 근 곱, 합 → 이차 인수분해 · 나머지 이차 결정
  category: 무리수 근·유리수 조건
  tier: star_5
  mechanism_primary: 무리수 켤레 근
  mechanism_secondary: [사차 인수분해]
  insight_type: I-RT
  depth: 2
  citation_note: 블랙라벨 CM1 CH06 STEP 2

- source: 블랙라벨-CM1-CH06-STEP2-#10
  page: 65
  unit_code: CM1-EQ
  problem_summary: |
    실수 a,b,c · P(x)=x³+ax²+bx+c · 조건 (2-i는 P(x)=0 근 · P(x)/(x+1) 나머지 10) · a+b+c 값
  solution_summary: |
    허근 켤레 2+i도 근 · (x-(2+i))(x-(2-i))=x²-4x+5 · 실근 α 도출
  category: 켤레 근·조건 결합
  tier: star_5
  mechanism_primary: 허근 켤레 + 나머지 조건
  mechanism_secondary: [삼차 인수분해]
  insight_type: I-CON
  depth: 2
  citation_note: 블랙라벨 CM1 CH06 STEP 2

- source: 블랙라벨-CM1-CH06-STEP2-#11
  page: 65
  unit_code: CM1-EQ
  problem_summary: |
    실수 계수 x³+ax²+bx-3=0의 한 실근 α와 두 허근 α² (α, α²는 세 근) · a+b 값
  solution_summary: |
    α² 허근이면 α² 켤레도 근 · α는 실근 · α, α², conj(α²) 세 근 관계 · α의 관계식
  category: 근의 자기참조 조건
  tier: star_5
  tier_note: "자기 참조 통찰 · premium 후보"
  mechanism_primary: 근의 자기참조 (α², conj(α²))
  mechanism_secondary: [켤레 조건]
  insight_type: I-CON
  depth: 3
  citation_note: 블랙라벨 CM1 CH06 STEP 2

- source: 블랙라벨-CM1-CH06-STEP2-#12
  page: 65
  unit_code: CM1-EQ
  problem_summary: |
    x³=1의 한 허근 ω · z=(ω+1)/(2ω+1) · z·conj(z) 값
  solution_summary: |
    ω²+ω+1=0, ω³=1 활용 · 분자·분모 켤레 · |z|² 계산
  category: 1의 세제곱근·계산
  tier: star_5
  mechanism_primary: 1의 세제곱근 활용
  mechanism_secondary: [절대값]
  insight_type: I-EQV
  depth: 2
  citation_note: 블랙라벨 CM1 CH06 STEP 2

- source: 블랙라벨-CM1-CH06-STEP2-#13
  page: 66
  unit_code: CM1-EQ
  problem_summary: |
    x³-3x²+3x-2=0 한 허근 α · (α-1)(α²+1)(α³-1)(α⁴+1)(α⁵-1)(α⁶+1) 값
  solution_summary: |
    x³-3x²+3x-2=(x-2)(x²-x+1) · α는 x²-x+1=0 허근 · α³=-1 · 각 항 α의 거듭제곱으로 계산
  category: 근의 성질·거듭제곱
  tier: star_5
  tier_note: "다중 거듭제곱 · premium 후보"
  mechanism_primary: 근 거듭제곱 (α³=-1)
  mechanism_secondary: [곱 계산]
  insight_type: I-PD
  depth: 3
  citation_note: 블랙라벨 CM1 CH06 STEP 2

- source: 블랙라벨-CM1-CH06-STEP2-#14
  page: 66
  unit_code: CM1-EQ
  problem_summary: |
    f(x)=x³+8, g(x)=x³-x+2 · f(x)=0 세 근 α, β, γ · g(α)g(β)g(γ) 값 (서술형)
  solution_summary: |
    f(x)의 근에 대해 α³=-8 · g(α)=α³-α+2=-α-6 · 곱 결정
  category: 근·다항식 값
  tier: star_5
  mechanism_primary: 근의 다항식 값 곱
  mechanism_secondary: [관계식 대입]
  insight_type: I-EQV
  depth: 2
  citation_note: 블랙라벨 CM1 CH06 STEP 2

- source: 블랙라벨-CM1-CH06-STEP2-#15
  page: 66
  unit_code: CM1-EQ
  problem_summary: |
    x³-1=0 서로 다른 두 허근 α, β · F(n)=f(1)+...+f(n), G(n)=g(1)+...+g(n) · f(n)=(α²+α)ⁿ+(α+1)ⁿ · F(50)+G(50) 값
  solution_summary: |
    α²+α=-1 · α+1=(1-α²)/(1-α) 등 관계 · f, g 정리 → 유한 주기 합
  category: 근 성질·주기 합
  tier: star_5
  tier_note: "다중 근·주기 · premium 후보"
  mechanism_primary: 1의 세제곱근 · 주기 수열합
  mechanism_secondary: [축약 관계식]
  insight_type: I-PD
  depth: 3
  citation_note: 블랙라벨 CM1 CH06 STEP 2

- source: 블랙라벨-CM1-CH06-STEP2-#16
  page: 66
  unit_code: CM1-EQ
  problem_summary: |
    연립방정식 (4x-y=a, x+y=4)의 해가 (x-by=5, x²+y²=8) 만족 · a, b 값
  solution_summary: |
    첫 연립 x, y a로 표현 · 대입 · 이차 조건
  category: 연립방정식·대입
  tier: star_5
  mechanism_primary: 연립 대입 + 이차 조건
  mechanism_secondary: []
  insight_type: I-EQV
  depth: 2
  citation_note: 블랙라벨 CM1 CH06 STEP 2

- source: 블랙라벨-CM1-CH06-STEP2-#17
  page: 66
  unit_code: CM1-EQ
  problem_summary: |
    연립방정식 (x+y+z=6, x²+y²=z², xy=-12)의 해 α, β, γ · |α|+|β|+|γ| 값
  solution_summary: |
    xy=-12, x+y=6-z 관계 · z 결정 · 근 결정
  category: 삼변수 연립
  tier: star_5
  mechanism_primary: 삼변수 연립 대입
  mechanism_secondary: [근과 계수]
  insight_type: I-CON
  depth: 2
  citation_note: 블랙라벨 CM1 CH06 STEP 2

- source: 블랙라벨-CM1-CH06-STEP2-#18
  page: 66
  unit_code: CM1-EQ
  problem_summary: |
    (x+1)(y+1)=k, (x-2)(y-2)=k 실근 갖는 k 최댓값
  solution_summary: |
    두 식 차 · x+y 관계식 · 이차식 판별식≥0 조건
  category: 연립·판별식
  tier: star_5
  mechanism_primary: 두 식 차 + 판별식
  mechanism_secondary: [극값]
  insight_type: I-EQV
  depth: 2
  citation_note: 블랙라벨 CM1 CH06 STEP 2

- source: 블랙라벨-CM1-CH06-STEP2-#19
  page: 67
  unit_code: CM1-EQ
  problem_summary: |
    max{x,y}={x (x≥y), y (x<y)} · 연립 (x²-y-3=-2max{x,y}, 2x²+y-3=-max{x,y}) 해 (α,β) · αβ 값
  solution_summary: |
    x≥y와 x<y 케이스 분리 · 각각 이차식 · 해 판정
  category: 케이스 분리·연립
  tier: star_5
  mechanism_primary: 케이스 분리 (max)
  mechanism_secondary: [연립 대입]
  insight_type: I-MI
  depth: 2
  citation_note: 블랙라벨 CM1 CH06 STEP 2

- source: 블랙라벨-CM1-CH06-STEP2-#20
  page: 67
  unit_code: CM1-EQ
  problem_summary: |
    빗변 13 직각삼각형에 반지름 2 원 내접 · 두 변 차이
  solution_summary: |
    두 변 a, b · a²+b²=169, ab=a+b+r+... (내접원) · 이차방정식 근차
  category: 도형·연립
  tier: star_5
  mechanism_primary: 직각삼각형 + 내접원
  mechanism_secondary: [연립 근차]
  insight_type: I-CON
  depth: 2
  citation_note: 블랙라벨 CM1 CH06 STEP 2

- source: 블랙라벨-CM1-CH06-STEP2-#21
  page: 67
  unit_code: CM1-EQ
  problem_summary: |
    정육면체 A와 직육면체 B (밑면 A+1, A-1, 높이 A와 같음) · B에 물 가득 담아 A에 부어 15/16 만큼 참 · A, B 높이
  solution_summary: |
    부피 비교 · 이차방정식
  category: 활용·연립
  tier: star_5
  mechanism_primary: 부피 방정식
  mechanism_secondary: []
  insight_type: I-EQV
  depth: 2
  citation_note: 블랙라벨 CM1 CH06 STEP 2

- source: 블랙라벨-CM1-CH06-STEP2-#22
  page: 67
  unit_code: CM1-EQ
  problem_summary: |
    한 모서리 a인 정육면체 · 밑면 b, 높이 a인 정사각뿔 파냄 · 남은 겉넓이 50+4√10 · 부피
  solution_summary: |
    겉넓이=6a²-b²+피라미드 4옆면 넓이 · 방정식
  category: 도형·연립
  tier: star_5
  mechanism_primary: 도형 부피·겉넓이 관계식
  mechanism_secondary: []
  insight_type: I-CON
  depth: 2
  citation_note: 블랙라벨 CM1 CH06 STEP 2

- source: 블랙라벨-CM1-CH06-STEP2-#23
  page: 67
  unit_code: CM1-EQ
  problem_summary: |
    AD=4 등변사다리꼴 ABCD · AB, CD 지름 두 원 접함 · S²+8l=6720 · BD² 값 [2021 교육청]
  solution_summary: |
    두 원 접하는 조건 · S(넓이), l(둘레) 관계 · BD² 계산
  category: 도형·연립
  tier: star_5
  tier_note: "다중 도형 조건 · premium 후보"
  mechanism_primary: 두 원 접함 + 사다리꼴
  mechanism_secondary: [연립 관계식]
  insight_type: I-CON
  depth: 3
  citation_note: 블랙라벨 CM1 CH06 STEP 2

- source: 블랙라벨-CM1-CH06-STEP2-#24
  page: 67
  unit_code: CM1-EQ
  problem_summary: |
    x²+px+q=0, x²+qx+p=0 공통근 1개 · 다른 두 근의 비 1:3 · 32(p²-q²) 값
  solution_summary: |
    공통근 α, 두 식 차 (p-q)(α-1)=0 → α=1 · p+q+1=0 · 다른 근 비 조건
  category: 공통근·비율
  tier: star_5
  mechanism_primary: 공통근 + 두 식 차
  mechanism_secondary: [비율 조건]
  insight_type: I-EQV
  depth: 2
  citation_note: 블랙라벨 CM1 CH06 STEP 2

- source: 블랙라벨-CM1-CH06-STEP2-#25
  page: 68
  unit_code: CM1-EQ
  problem_summary: |
    x²+ax+1/a=0, x²+bx+1/b=0 공통근 α, a+b=1 · α 값
  solution_summary: |
    두 식 공통근 조건 · 두 식 차 α=(1/a-1/b)/(a-b) · a+b=1 대입
  category: 공통근·연립
  tier: star_5
  mechanism_primary: 공통근 조건 관계식
  mechanism_secondary: [조건 통합]
  insight_type: I-CON
  depth: 2
  citation_note: 블랙라벨 CM1 CH06 STEP 2

- source: 블랙라벨-CM1-CH06-STEP2-#26
  page: 68
  unit_code: CM1-EQ
  problem_summary: |
    실계수 ax²-bx+c=0, ax²-2bx+c=0 근에 관한 명제 3항 (ㄱ 두 근의 곱 같다 · ㄴ ac>0이면 공통 실근 없다 · ㄷ 첫 식 허근 갖는다면 둘째 식 허근)
  solution_summary: |
    각 명제 판별식 부호 비교 · 근과 계수의 관계
  category: 이차식 관계·명제
  tier: star_5
  mechanism_primary: 판별식 관계 명제
  mechanism_secondary: [부등식 판단]
  insight_type: I-MI
  depth: 2
  citation_note: 블랙라벨 CM1 CH06 STEP 2

- source: 블랙라벨-CM1-CH06-STEP2-#27
  page: 68
  unit_code: CM1-EQ
  problem_summary: |
    서로 다른 네 정수 α,β,γ,δ · (x-α)(x-β)(x-γ)(x-δ)=49 한 근 2 · α+β+γ+δ 값
  solution_summary: |
    x=2 대입 · (2-α)(2-β)(2-γ)(2-δ)=49 · 49=7·7·1·1 or 다른 분해 · 정수 필터
  category: 부정방정식·정수해
  tier: star_5
  tier_note: "정수 분해 통찰 · premium 후보"
  mechanism_primary: 정수 분해 (49 인수)
  mechanism_secondary: [정수 필터]
  insight_type: I-PD
  depth: 3
  citation_note: 블랙라벨 CM1 CH06 STEP 2

- source: 블랙라벨-CM1-CH06-STEP2-#28
  page: 68
  unit_code: CM1-EQ
  problem_summary: |
    양의 정수 x,y,z, √z 무리수 · √x+√y=√(4+√z) · z 값
  solution_summary: |
    양변 제곱 · 무리수 부분 매칭 · 정수해 필터
  category: 무리수·정수해
  tier: star_5
  mechanism_primary: 무리수 조건 매칭
  mechanism_secondary: [정수해 카운트]
  insight_type: I-EQV
  depth: 2
  citation_note: 블랙라벨 CM1 CH06 STEP 2

- source: 블랙라벨-CM1-CH06-STEP2-#29
  page: 68
  unit_code: CM1-EQ
  problem_summary: |
    x²+2mx+2m²-2=0 정수 근 갖는 정수 m 개수
  solution_summary: |
    판별식=완전제곱 조건 · 정수 필터
  category: 정수 근·판별식
  tier: star_5
  mechanism_primary: 판별식 완전제곱 조건
  mechanism_secondary: [정수 필터]
  insight_type: I-CON
  depth: 2
  citation_note: 블랙라벨 CM1 CH06 STEP 2

- source: 블랙라벨-CM1-CH06-STEP2-#30
  page: 68
  unit_code: CM1-EQ
  problem_summary: |
    (x²+y²+x-3y-2)²+(xy-2x+2y-7)²=0 만족 정수 (x,y) · x+y 값
  solution_summary: |
    두 식 모두 0 조건 · 연립 · 정수 필터
  category: 부정방정식·연립·정수해
  tier: star_5
  mechanism_primary: 제곱합=0 조건 (두 식 모두 0)
  mechanism_secondary: [연립 정수해]
  insight_type: I-EQV
  depth: 2
  citation_note: 블랙라벨 CM1 CH06 STEP 2
```

---

## VII. 여러 가지 부등식 (CH07 · CM1-EQ) — STEP 2 (42문)

```yaml
- source: 블랙라벨-CM1-CH07-STEP2-#01
  page: 76
  unit_code: CM1-EQ
  problem_summary: |
    ax+1>bx+3 (a,b 상수) · 해 설명 옳지 않은 것 (5지선다: a>b, a<b, a=0 b>0, a<0 b=0, a=b)
  solution_summary: |
    각 케이스 해 계산 · a=b이면 해 없음/모든 실수
  category: 일차부등식 케이스 분류
  tier: star_5
  mechanism_primary: 일차부등식 케이스 분석
  mechanism_secondary: []
  insight_type: I-MI
  depth: 2
  citation_note: 블랙라벨 CM1 CH07 STEP 2

- source: 블랙라벨-CM1-CH07-STEP2-#02
  page: 76
  unit_code: CM1-EQ
  problem_summary: |
    ||[x/3]-1|-2|<1 만족 모든 정수 x의 합 ([x]는 가우스 기호)
  solution_summary: |
    다중 절댓값 케이스 분리 · [x/3] 범위 · x 정수 필터
  category: 절댓값·가우스·부등식
  tier: star_5
  tier_note: "다중 절댓값 · premium 후보"
  mechanism_primary: 다중 절댓값 케이스
  mechanism_secondary: [가우스 기호, 정수 카운트]
  insight_type: I-MI
  depth: 3
  citation_note: 블랙라벨 CM1 CH07 STEP 2

- source: 블랙라벨-CM1-CH07-STEP2-#03
  page: 76
  unit_code: CM1-EQ
  problem_summary: |
    양수 a,b (a<b) · |x|+|x-a|<b 만족 정수 x 개수 f(a,b) · 명제 3항 (ㄱ f(2,3)=3 · ㄴ f(n,n+2)=n+1 · ㄷ f(n,n+2)=f(n+2,n+4))
  solution_summary: |
    |x|+|x-a|은 최소값 a (a≤x≤0 or 0≤x≤a) · 부등식 case별 해 · 정수 카운트
  category: 절댓값 부등식·정수 카운트
  tier: star_5
  mechanism_primary: 절댓값 부등식 정수 카운트
  mechanism_secondary: [명제 판정]
  insight_type: I-MI
  depth: 2
  citation_note: 블랙라벨 CM1 CH07 STEP 2

- source: 블랙라벨-CM1-CH07-STEP2-#04
  page: 76
  unit_code: CM1-EQ
  problem_summary: |
    2x+3y=3 만족 x, y · 3(x-1)≤y+1<x · x의 값의 범위
  solution_summary: |
    2x+3y=3에서 y=(3-2x)/3 · 부등식 대입 · x 범위
  category: 연립일차부등식·대입
  tier: star_5
  mechanism_primary: 조건식 대입 + 부등식
  mechanism_secondary: []
  insight_type: I-EQV
  depth: 2
  citation_note: 블랙라벨 CM1 CH07 STEP 2

- source: 블랙라벨-CM1-CH07-STEP2-#05
  page: 76
  unit_code: CM1-EQ
  problem_summary: |
    연립부등식 (ax-2a<x-2, ax-5a≤x+5) 해가 x≥3 · 상수 a 값
  solution_summary: |
    각 부등식 정리 · 해가 x≥3 되는 조건 매칭
  category: 연립일차부등식·조건
  tier: star_5
  mechanism_primary: 매개변수 부등식 해 조건
  mechanism_secondary: []
  insight_type: I-BW
  depth: 2
  citation_note: 블랙라벨 CM1 CH07 STEP 2

- source: 블랙라벨-CM1-CH07-STEP2-#06
  page: 76
  unit_code: CM1-EQ
  problem_summary: |
    연립부등식 (x/3-(1-a)/6<x/2-a/6, |x-1|<2) 정수 x 2개 되는 a 범위 p≤a<q · 4p²+q² 값
  solution_summary: |
    첫 부등식 정리 x>a · |x-1|<2 → -1<x<3 · 정수 x 2개 조건 → a 범위
  category: 연립부등식·정수 카운트
  tier: star_5
  mechanism_primary: 정수 개수 조건 (구간 매개)
  mechanism_secondary: [범위]
  insight_type: I-CON
  depth: 2
  citation_note: 블랙라벨 CM1 CH07 STEP 2

- source: 블랙라벨-CM1-CH07-STEP2-#07
  page: 77
  unit_code: CM1-EQ
  problem_summary: |
    [x/4-1]=1 만족 자연수 x와 연립부등식 ((5-2x)/3 ≤ (x+2)/4 - 6, -2(x-21) ≥ (a-x)/2) 만족 자연수 x 일치 · 모든 정수 a 합
  solution_summary: |
    [x/4-1]=1 → 4≤x/4-1<5 조건 정리 · 두 번째 부등식과 매칭 · 정수 a 필터
  category: 가우스·연립부등식·정수해
  tier: star_5
  tier_note: "가우스 + 조건 통합"
  mechanism_primary: 가우스 조건 + 연립
  mechanism_secondary: [정수해 필터]
  insight_type: I-CON
  depth: 3
  citation_note: 블랙라벨 CM1 CH07 STEP 2

- source: 블랙라벨-CM1-CH07-STEP2-#08
  page: 77
  unit_code: CM1-EQ
  problem_summary: |
    (x-a)(x+2a-4)<-16 만족 x 없는 실수 a 최댓값 M, 최솟값 m · 4M+3m 값
  solution_summary: |
    이차식 최솟값 계산 · 최소값 ≥ -16 조건 · a 범위
  category: 이차 부등식 · 최소값 조건
  tier: star_5
  mechanism_primary: 이차 최소값 조건
  mechanism_secondary: [매개변수 범위]
  insight_type: I-CON
  depth: 2
  citation_note: 블랙라벨 CM1 CH07 STEP 2

- source: 블랙라벨-CM1-CH07-STEP2-#09
  page: 77
  unit_code: CM1-EQ
  problem_summary: |
    f(x)<0의 해 -3<x<2 · f(-x+100)<0 해 중 가장 큰 자연수
  solution_summary: |
    치환 (-x+100)로 f 해 대응 · -3<-x+100<2 → x 범위
  category: 이차 부등식·치환
  tier: star_5
  mechanism_primary: 치환 부등식
  mechanism_secondary: []
  insight_type: I-EQV
  depth: 2
  citation_note: 블랙라벨 CM1 CH07 STEP 2

- source: 블랙라벨-CM1-CH07-STEP2-#10
  page: 77
  unit_code: CM1-EQ
  problem_summary: |
    a(x²+x+1)>2x 만족 실수 x 존재하는 a 범위
  solution_summary: |
    x²+x+1>0 항상 · a > 2x/(x²+x+1) · 우변 최댓값 판정
  category: 부등식·범위 극값
  tier: star_5
  mechanism_primary: 부등식 매개변수 최댓값
  mechanism_secondary: []
  insight_type: I-BW
  depth: 2
  citation_note: 블랙라벨 CM1 CH07 STEP 2

- source: 블랙라벨-CM1-CH07-STEP2-#11
  page: 77
  unit_code: CM1-EQ
  problem_summary: |
    두 실수 a, b (a<b) · (a-1)(a-2)=(b-1)(b-2) · (x-1)(x-2)>(a-1)(a-2)의 해
  solution_summary: |
    두 식 대칭 → a+b=3 (대칭축 x=3/2) · 부등식 해
  category: 대칭 조건·부등식
  tier: star_5
  mechanism_primary: 이차식 대칭 조건
  mechanism_secondary: [부등식 해]
  insight_type: I-SYM
  depth: 2
  citation_note: 블랙라벨 CM1 CH07 STEP 2

- source: 블랙라벨-CM1-CH07-STEP2-#12
  page: 77
  unit_code: CM1-EQ
  problem_summary: |
    x²+2ax+2a²-b²+4b=0 중근 · x³+ax²+(b-2a²)x-ab=0 허근·실근 모두 · b 범위 p≤b<q · p+q 값
  solution_summary: |
    이차 판별식=0 조건 · 삼차식 근 조건 (실+허) · b 범위
  category: 다중 조건 결합
  tier: star_5
  tier_note: "이차+삼차 조건 · premium 후보"
  mechanism_primary: 다중 판별식 결합
  mechanism_secondary: [매개변수 범위]
  insight_type: I-CON
  depth: 3
  citation_note: 블랙라벨 CM1 CH07 STEP 2

- source: 블랙라벨-CM1-CH07-STEP2-#13
  page: 78
  unit_code: CM1-EQ
  problem_summary: |
    조건 (모든 실수 x에 kx²-kx+2>0, (k+3)x²-kx+1<0 만족 실수 x 없음) 만족 정수 k 개수
  solution_summary: |
    각 부등식 항상 성립 조건 · 판별식 부호 · k 범위 교집합
  category: 이차 부등식 조건 · 교집합
  tier: star_5
  mechanism_primary: 두 이차 부등식 조건 교집합
  mechanism_secondary: [정수 카운트]
  insight_type: I-CON
  depth: 2
  citation_note: 블랙라벨 CM1 CH07 STEP 2

- source: 블랙라벨-CM1-CH07-STEP2-#14
  page: 78
  unit_code: CM1-EQ
  problem_summary: |
    모든 실수 x,y · x²+y²+2xy+ax+4y+b≥0 성립하는 b 최솟값
  solution_summary: |
    (x+y)²+2·(x+y)·(a/2)+(a²/4)-... 형태 완전제곱 정리 · b 하한
  category: 다변수 부등식·완전제곱
  tier: star_5
  tier_note: "다변수 완전제곱 통찰 · premium 후보"
  mechanism_primary: 다변수 완전제곱
  mechanism_secondary: [최솟값 조건]
  insight_type: I-RT
  depth: 3
  citation_note: 블랙라벨 CM1 CH07 STEP 2

- source: 블랙라벨-CM1-CH07-STEP2-#15
  page: 78
  unit_code: CM1-EQ
  problem_summary: |
    2<x<4 모든 실수 x · x²+ax>2a² 성립 실수 a 최댓값·최솟값 합
  solution_summary: |
    x²+ax-2a²=(x+2a)(x-a) · 부등식 성립 케이스 · a 범위
  category: 부등식·매개변수 범위
  tier: star_5
  mechanism_primary: 인수분해 부등식 조건
  mechanism_secondary: [매개변수]
  insight_type: I-EQV
  depth: 2
  citation_note: 블랙라벨 CM1 CH07 STEP 2

- source: 블랙라벨-CM1-CH07-STEP2-#16
  page: 78
  unit_code: CM1-EQ
  problem_summary: |
    x²-2x-3<3|x-1|과 ax²+2x+b>0 해 일치 · a+b 값
  solution_summary: |
    첫 부등식 해 구간 · 이차식 형태 매칭 · 근과 계수의 관계
  category: 절댓값·이차 부등식 해 일치
  tier: star_5
  mechanism_primary: 부등식 해 매칭
  mechanism_secondary: [케이스 분리]
  insight_type: I-BW
  depth: 2
  citation_note: 블랙라벨 CM1 CH07 STEP 2

- source: 블랙라벨-CM1-CH07-STEP2-#17
  page: 78
  unit_code: CM1-EQ
  problem_summary: |
    (|x|-1)(x-3)>2의 해 α<x<β 또는 x>γ · α+β+γ 값
  solution_summary: |
    x≥0, x<0 케이스 · 각각 이차식 부등식 · 해 구간 결합
  category: 절댓값 이차·해 구간
  tier: star_5
  mechanism_primary: 절댓값 케이스 부등식
  mechanism_secondary: [해 구간 결합]
  insight_type: I-MI
  depth: 2
  citation_note: 블랙라벨 CM1 CH07 STEP 2

- source: 블랙라벨-CM1-CH07-STEP2-#18
  page: 78
  unit_code: CM1-EQ
  problem_summary: |
    [x-1]²+3[x]-3<0의 해 ([x] 가우스 기호)
  solution_summary: |
    [x-1]=[x]-1 등가 · [x] 이차 부등식 · x 범위
  category: 가우스·이차 부등식
  tier: star_5
  mechanism_primary: 가우스 이차 부등식
  mechanism_secondary: []
  insight_type: I-EQV
  depth: 2
  citation_note: 블랙라벨 CM1 CH07 STEP 2

- source: 블랙라벨-CM1-CH07-STEP2-#19
  page: 79
  unit_code: CM1-EQ
  problem_summary: |
    y=(m+3)x²+2x가 y=2(m+4)x-5보다 항상 위 · m 범위
  solution_summary: |
    (m+3)x²+2x-2(m+4)x+5>0 모든 x · m+3>0 및 판별식<0
  category: 이차함수·항상 위 조건
  tier: star_5
  mechanism_primary: 이차함수·항상 위 조건
  mechanism_secondary: [판별식]
  insight_type: I-EQV
  depth: 2
  citation_note: 블랙라벨 CM1 CH07 STEP 2

- source: 블랙라벨-CM1-CH07-STEP2-#20
  page: 79
  unit_code: CM1-EQ
  problem_summary: |
    f(x)=x²-mx+4m, g(x)=-x²+3x+3m-3 · 임의의 x₁, x₂ · f(x₁)≥g(x₂) 성립하는 m 범위 (빈출)
  solution_summary: |
    min f ≥ max g 조건 · 각 극값 매개변수 · m 이차 부등식
  category: 두 함수 극값 조건
  tier: star_5
  tier_note: "min max 조건 · premium 후보"
  mechanism_primary: min f ≥ max g 조건
  mechanism_secondary: [극값 매개변수]
  insight_type: I-CON
  depth: 3
  citation_note: 블랙라벨 CM1 CH07 STEP 2

- source: 블랙라벨-CM1-CH07-STEP2-#21
  page: 79
  unit_code: CM1-EQ
  problem_summary: |
    x²의 계수 절댓값 같은 두 이차함수 y=f(x), y=g(x) 그래프 · {f(x)}²>f(x)g(x) 해 중 10 이하 자연수 개수
  solution_summary: |
    {f}²-f·g=f(f-g)>0 · f, f-g 부호 판정 · 해 구간·정수 카운트
  category: 이차 부등식 곱 부호
  tier: star_5
  mechanism_primary: 부호 판정 (곱 부등식)
  mechanism_secondary: [정수 카운트]
  insight_type: I-EQV
  depth: 2
  citation_note: 블랙라벨 CM1 CH07 STEP 2

- source: 블랙라벨-CM1-CH07-STEP2-#22
  page: 79
  unit_code: CM1-EQ
  problem_summary: |
    f(x)=x²-2x-3 · g(x)=(f(x)+|f(x)|)/2 · 명제 3항 (ㄱ y=g 그래프 x=2 대칭 · ㄴ g(x)=1 다른 두 실근 · ㄷ g(x)≤0의 해 -1≤x≤3)
  solution_summary: |
    g(x)=max{f(x),0} · f 부호 판정 · 각 명제 검증
  category: 절댓값 함수·명제
  tier: star_5
  mechanism_primary: 절댓값 함수 성질
  mechanism_secondary: [명제 판정]
  insight_type: I-MI
  depth: 2
  citation_note: 블랙라벨 CM1 CH07 STEP 2

- source: 블랙라벨-CM1-CH07-STEP2-#23
  page: 79
  unit_code: CM1-EQ
  problem_summary: |
    가격 x% 인하하면 판매량 2x% 증가 · 총 판매액이 원래 10/9배 이상 되는 x 범위 p≤x≤q · p+q 값
  solution_summary: |
    (1-x/100)(1+2x/100) ≥ 10/9 · 이차 부등식
  category: 활용·이차 부등식
  tier: star_5
  mechanism_primary: 활용 이차 부등식
  mechanism_secondary: []
  insight_type: I-EQV
  depth: 2
  citation_note: 블랙라벨 CM1 CH07 STEP 2

- source: 블랙라벨-CM1-CH07-STEP2-#24
  page: 79
  unit_code: CM1-EQ
  problem_summary: |
    한 모서리 1 블록 · 가로·세로 x+1, x-1, 높이 2x-1 직육면체 A · A의 겉넓이가 정육면체 B (모서리 x) 겉넓이의 1.5배 이상 · x 최솟값
  solution_summary: |
    직육면체·정육면체 겉넓이 계산 · 부등식 · 자연수 필터
  category: 활용·이차 부등식·자연수
  tier: star_5
  mechanism_primary: 도형 부등식
  mechanism_secondary: [자연수 필터]
  insight_type: I-CON
  depth: 2
  citation_note: 블랙라벨 CM1 CH07 STEP 2

- source: 블랙라벨-CM1-CH07-STEP2-#25
  page: 80
  unit_code: CM1-EQ
  problem_summary: |
    6×8 직사각형 부분 길 폭 x, 면적 1m² 화단·길 비용 2만, 1만 · 56만 원 이하 · x 최솟값 (서술형)
  solution_summary: |
    길 면적 · 화단 면적 · 비용식 부등식
  category: 활용·이차 부등식
  tier: star_5
  mechanism_primary: 활용 부등식
  mechanism_secondary: []
  insight_type: I-EQV
  depth: 2
  citation_note: 블랙라벨 CM1 CH07 STEP 2

- source: 블랙라벨-CM1-CH07-STEP2-#26
  page: 80
  unit_code: CM1-EQ
  problem_summary: |
    A, B, C 3지점 · AB 10km, BC 30km, AC 20km · A 100, B 200, C 300 제품 · 총 운송비=x²원/개 A에서 x km 지점 · 15만5천 이하 · A에서 최대 a km 지점 · a 값
  solution_summary: |
    각 지점 거리·개수·비용 계산 · 이차 부등식 · x 최댓값
  category: 활용·이차 부등식·거리
  tier: star_5
  tier_note: "복잡 활용 · premium 후보"
  mechanism_primary: 거리 부등식 활용
  mechanism_secondary: [매개변수 극값]
  insight_type: I-CON
  depth: 3
  citation_note: 블랙라벨 CM1 CH07 STEP 2

- source: 블랙라벨-CM1-CH07-STEP2-#27
  page: 80
  unit_code: CM1-EQ
  problem_summary: |
    a[x]²+b[x]+c=0의 해가 연립부등식 (x²-5x+4<0, x²-7x+10≤0) 해와 같음 · b/a + c/a 값 ([x]는 가우스 기호)
  solution_summary: |
    부등식 해 정수 범위 계산 · [x]=n 값 대응 · 이차 방정식 형태
  category: 가우스·연립부등식
  tier: star_5
  tier_note: "가우스+이차 결합"
  mechanism_primary: 가우스 방정식 해 대응
  mechanism_secondary: []
  insight_type: I-CON
  depth: 3
  citation_note: 블랙라벨 CM1 CH07 STEP 2

- source: 블랙라벨-CM1-CH07-STEP2-#28
  page: 80
  unit_code: CM1-EQ
  problem_summary: |
    x+a-3>0이 모든 양수 x에 성립, x²+ax+a>0이 모든 실수 x에 성립 · a 범위
  solution_summary: |
    첫 조건 양수 x에서 a-3>0 아니고 a-3+0≥0 → a≥3 · 두 번째 판별식<0 · 교집합
  category: 두 조건 결합
  tier: star_5
  mechanism_primary: 두 부등식 조건 교집합
  mechanism_secondary: [판별식]
  insight_type: I-CON
  depth: 2
  citation_note: 블랙라벨 CM1 CH07 STEP 2

- source: 블랙라벨-CM1-CH07-STEP2-#29
  page: 80
  unit_code: CM1-EQ
  problem_summary: |
    세 함수 y=f(x), y=g(x), y=h(x) 그래프 · f(x)≤g(x)≤h(x)의 해
  solution_summary: |
    그래프 교점 관찰 · 해 구간
  category: 그래프 부등식
  tier: star_5
  mechanism_primary: 그래프 부등식 해
  mechanism_secondary: []
  insight_type: I-RT
  depth: 1
  citation_note: 블랙라벨 CM1 CH07 STEP 2

- source: 블랙라벨-CM1-CH07-STEP2-#30
  page: 80
  unit_code: CM1-EQ
  problem_summary: |
    모든 실수 x · -x²+3x+2 ≤ mx+n ≤ x²-x+4 성립 · m²+n² 값 (빈출)
  solution_summary: |
    두 이차식 사이 직선 조건 · 접선 조건 · m, n 결정
  category: 이차 부등식·접선
  tier: star_5
  tier_note: "이중 접선 조건 · premium 후보"
  mechanism_primary: 이중 접선 조건
  mechanism_secondary: [판별식 조합]
  insight_type: I-CON
  depth: 3
  citation_note: 블랙라벨 CM1 CH07 STEP 2

- source: 블랙라벨-CM1-CH07-STEP2-#31
  page: 81
  unit_code: CM1-EQ
  problem_summary: |
    연립부등식 (|x-k|>5, x²-4x-12<0) 만족 모든 정수 x 합 5 · 정수 k 최댓값 M, 최솟값 m · M+m 값
  solution_summary: |
    첫 부등식 x>k+5 or x<k-5 · 둘째 -2<x<6 · 정수 x 합=5 조건 → k 범위
  category: 연립부등식·정수 조건
  tier: star_5
  mechanism_primary: 정수합 조건 매개변수
  mechanism_secondary: [범위 판정]
  insight_type: I-CON
  depth: 2
  citation_note: 블랙라벨 CM1 CH07 STEP 2

- source: 블랙라벨-CM1-CH07-STEP2-#32
  page: 81
  unit_code: CM1-EQ
  problem_summary: |
    양수 a · 연립부등식 ((x-2)(x-[a])<0, (x-4)(x-[a]/2)>0) 정수 해 1개 · a 범위 p≤a<q · p+q 값
  solution_summary: |
    [a] 매개변수 각 케이스 정수 해 카운트
  category: 가우스·연립·정수해
  tier: star_5
  tier_note: "가우스 + 정수해 조건"
  mechanism_primary: 가우스 매개 정수 조건
  mechanism_secondary: [케이스 분리]
  insight_type: I-MI
  depth: 3
  citation_note: 블랙라벨 CM1 CH07 STEP 2

- source: 블랙라벨-CM1-CH07-STEP2-#33
  page: 81
  unit_code: CM1-EQ
  problem_summary: |
    반지름 6 원 C 내부 두 원이 서로 외접 · 색칠 넓이가 원 C의 1/3 이상 · 두 원 중 큰 원 반지름 최댓값
  solution_summary: |
    두 원 반지름 r, R · r+R=6 · 색칠 넓이=π(6²-r²-R²) · 부등식·극값
  category: 도형·부등식
  tier: star_5
  mechanism_primary: 도형 부등식·극값
  mechanism_secondary: [넓이 관계식]
  insight_type: I-CON
  depth: 2
  citation_note: 블랙라벨 CM1 CH07 STEP 2

- source: 블랙라벨-CM1-CH07-STEP2-#34
  page: 81
  unit_code: CM1-EQ
  problem_summary: |
    초음파 태아 개월 판별 기계 · x²-a²x+6a cm 식 · 4개월 태아 18cm 이상 20cm 이하 · a 범위
  solution_summary: |
    x=4 대입 · 부등식·판별
  category: 활용·부등식
  tier: star_5
  mechanism_primary: 대입 부등식
  mechanism_secondary: []
  insight_type: I-EQV
  depth: 1
  citation_note: 블랙라벨 CM1 CH07 STEP 2

- source: 블랙라벨-CM1-CH07-STEP2-#35
  page: 81
  unit_code: CM1-EQ
  problem_summary: |
    민석이 하루 7쪽×x일 3쪽 남음 · 10쪽×x일 7쪽 남고 4일 빨리 완독 · 책 최대 쪽수
  solution_summary: |
    쪽수 방정식+부등식 조건 · x, 총쪽수 관계
  category: 활용·정수 조건
  tier: star_5
  mechanism_primary: 활용 방정식·부등식
  mechanism_secondary: []
  insight_type: I-EQV
  depth: 2
  citation_note: 블랙라벨 CM1 CH07 STEP 2

- source: 블랙라벨-CM1-CH07-STEP2-#36
  page: 81
  unit_code: CM1-EQ
  problem_summary: |
    f(x)=-x²+2kx+k²+4 (k>0) 그래프 y축 A · x평행 직선 f와 A 아닌 점 B · B 수선의 발 C · 사각형 OCBA 둘레 g(k) · 14≤g(k)≤78 만족 모든 자연수 k 합 [2020 교육청]
  solution_summary: |
    A(0,k²+4), 대칭점 B(2k, k²+4), C(2k, 0) · 둘레=2k+2(k²+4)+2k+... · g(k) 부등식·자연수 필터
  category: 이차함수 도형·부등식
  tier: star_5
  tier_note: "도형+부등식+자연수 · premium 후보"
  mechanism_primary: 도형 둘레 함수·부등식
  mechanism_secondary: [자연수 필터]
  insight_type: I-CON
  depth: 3
  citation_note: 블랙라벨 CM1 CH07 STEP 2

- source: 블랙라벨-CM1-CH07-STEP2-#37
  page: 82
  unit_code: CM1-EQ
  problem_summary: |
    x²-√ax+1-a=0 두 실근 모두 양수 · a 범위 p≤a<q · 5p+q 값
  solution_summary: |
    D≥0, 근합>0, 근곱>0 조건 · a 범위
  category: 근의 부호 조건
  tier: star_5
  mechanism_primary: 근의 부호 조건 3항
  mechanism_secondary: []
  insight_type: I-CON
  depth: 2
  citation_note: 블랙라벨 CM1 CH07 STEP 2

- source: 블랙라벨-CM1-CH07-STEP2-#38
  page: 82
  unit_code: CM1-EQ
  problem_summary: |
    x²+(k²+3k-10)x+k²-3k-18=0 두 근 부호 다르고, 음의 근 절댓값이 양의 근보다 큼 · 모든 정수 k 합
  solution_summary: |
    부호 다름: 근곱<0 · 음절대>양: 근합<0 · 두 조건 결합
  category: 근의 부호·정수
  tier: star_5
  mechanism_primary: 근합·근곱 조건
  mechanism_secondary: [정수 필터]
  insight_type: I-CON
  depth: 2
  citation_note: 블랙라벨 CM1 CH07 STEP 2

- source: 블랙라벨-CM1-CH07-STEP2-#39
  page: 82
  unit_code: CM1-EQ
  problem_summary: |
    x²+2(k-1)|x|+k²-3k-4=0 서로 다른 네 실근 · k 범위
  solution_summary: |
    t=|x|≥0 치환 · 이차식 두 양의 실근 조건 → 원식 네 실근
  category: 절댓값·근 조건
  tier: star_5
  mechanism_primary: 절댓값 치환·양의 근 조건
  mechanism_secondary: [판별식·근합·근곱]
  insight_type: I-RT
  depth: 2
  citation_note: 블랙라벨 CM1 CH07 STEP 2

- source: 블랙라벨-CM1-CH07-STEP2-#40
  page: 82
  unit_code: CM1-EQ
  problem_summary: |
    x²+(a-2)x-2a+4=0 이 -2<x<1에서 서로 다른 두 실근 · a 범위
  solution_summary: |
    D>0, f(-2)>0, f(1)>0, -2<대칭축<1 조건
  category: 실근 위치·구간
  tier: star_5
  mechanism_primary: 실근 위치 4조건
  mechanism_secondary: []
  insight_type: I-CON
  depth: 2
  citation_note: 블랙라벨 CM1 CH07 STEP 2

- source: 블랙라벨-CM1-CH07-STEP2-#41
  page: 82
  unit_code: CM1-EQ
  problem_summary: |
    P(x)=3x³+x+11, Q(x)=x²-x+1 · P(x)-3(x+1)Q(x)+mx²=0 2보다 작은 한 근과 2보다 큰 한 근 갖는 정수 m 개수
  solution_summary: |
    식 정리 · 이차식 형태 · f(2)<0 조건 (부호 반대)
  category: 다항식·실근 위치
  tier: star_5
  mechanism_primary: 이차식 f(2)<0 조건
  mechanism_secondary: [정수 카운트]
  insight_type: I-CON
  depth: 2
  citation_note: 블랙라벨 CM1 CH07 STEP 2

- source: 블랙라벨-CM1-CH07-STEP2-#42
  page: 82
  unit_code: CM1-EQ
  problem_summary: |
    x²-(m+1)x+2m=0 -1≤x≤1에서 적어도 한 실근 · m 범위 p≤m≤q · 9p/2+q 값 (빈출)
  solution_summary: |
    구간에서 적어도 한 근 조건 (f(-1)f(1)≤0 or 구간 내 두 근 조건 결합)
  category: 실근 위치·조건 통합
  tier: star_5
  tier_note: "여러 조건 통합 · premium 후보"
  mechanism_primary: 구간 내 적어도 한 근
  mechanism_secondary: [판별식·구간 조건]
  insight_type: I-CON
  depth: 3
  citation_note: 블랙라벨 CM1 CH07 STEP 2
```

---

## VIII. 순열과 조합 (CH08 · CM1-CB) — STEP 2 (35문)

```yaml
- source: 블랙라벨-CM1-CH08-STEP2-#01
  page: 90
  unit_code: CM1-CB
  problem_summary: |
    1≤m≤n≤20 자연수 m, n · 최대공약수 3 되는 순서쌍 (m, n) 개수
  solution_summary: |
    gcd=3 · m=3m', n=3n', gcd(m',n')=1 · m'≤n'≤6 정수 페어 카운트
  category: 정수·최대공약수·카운트
  tier: star_5
  mechanism_primary: 최대공약수 조건 카운트
  mechanism_secondary: [gcd=1 페어]
  insight_type: I-CON
  depth: 2
  citation_note: 블랙라벨 CM1 CH08 STEP 2

- source: 블랙라벨-CM1-CH08-STEP2-#02
  page: 90
  unit_code: CM1-CB
  problem_summary: |
    8ˣ×4ʸ×2ᶻ=2¹⁷ 만족 자연수 순서쌍 (x,y,z) 개수
  solution_summary: |
    3x+2y+z=17 자연수해 · z=17-3x-2y ≥1 · x,y 범위
  category: 정수해 카운트
  tier: star_5
  mechanism_primary: 정수 방정식 카운트
  mechanism_secondary: []
  insight_type: I-EQV
  depth: 2
  citation_note: 블랙라벨 CM1 CH08 STEP 2

- source: 블랙라벨-CM1-CH08-STEP2-#03
  page: 90
  unit_code: CM1-CB
  problem_summary: |
    2, 2, 3, 4, 4 카드 5장 일렬 · k번째 자리 k(=2,3,4) 아닌 카드 배열 수
  solution_summary: |
    포함배제 · 각 자리 제한 조건 · 배열 케이스
  category: 조건 배열·포함배제
  tier: star_5
  tier_note: "포함배제 · premium 후보"
  mechanism_primary: 포함배제 조건 배열
  mechanism_secondary: [부분 조건]
  insight_type: I-MI
  depth: 3
  citation_note: 블랙라벨 CM1 CH08 STEP 2

- source: 블랙라벨-CM1-CH08-STEP2-#04
  page: 90
  unit_code: CM1-CB
  problem_summary: |
    비밀번호 네 자리 · 각 자리 1~9 · 일의자리 5, 백의자리 2 · 9로 나누어떨어짐 · 가능한 개수
  solution_summary: |
    각 자리 합 ≡ 0 (mod 9) · 십·천 자리 조합 카운트
  category: 조건 카운트·정수론
  tier: star_5
  mechanism_primary: 자리수 합 조건 (mod)
  mechanism_secondary: [카운트]
  insight_type: I-CON
  depth: 2
  citation_note: 블랙라벨 CM1 CH08 STEP 2

- source: 블랙라벨-CM1-CH08-STEP2-#05
  page: 90
  unit_code: CM1-CB
  problem_summary: |
    세 주머니 A, B, C · 1~7 공 · A, B, C 꺼낸 수 a, b, c · ab+bc+ca 짝수 되는 경우 수
  solution_summary: |
    짝·홀 케이스 분류 · 각 case별 카운트
  category: 짝·홀 케이스·경우의 수
  tier: star_5
  mechanism_primary: 짝·홀 케이스 분석
  mechanism_secondary: [경우의 수]
  insight_type: I-MI
  depth: 2
  citation_note: 블랙라벨 CM1 CH08 STEP 2

- source: 블랙라벨-CM1-CH08-STEP2-#06
  page: 90
  unit_code: CM1-CB
  problem_summary: |
    A→C→A 왕복 도로망 (A-B-C 3원 도로망, 요금 표시) · 총 요금 5000원 미만 · 방법 수
  solution_summary: |
    경로 케이스 · 요금 합 부등식
  category: 경우의 수·부등식
  tier: star_5
  mechanism_primary: 경로 케이스 부등식
  mechanism_secondary: []
  insight_type: I-EQV
  depth: 2
  citation_note: 블랙라벨 CM1 CH08 STEP 2

- source: 블랙라벨-CM1-CH08-STEP2-#07
  page: 91
  unit_code: CM1-CB
  problem_summary: |
    A=2ˡ×3ᵐ · 보기 3항 (ㄱ l=2, m=3이면 약수 12개 · ㄴ 1≤A≤100 만족 A 개수 20 · ㄷ 약수 12개인 A 개수 6)
  solution_summary: |
    약수 개수 (l+1)(m+1) · 정수 조합
  category: 약수 개수·경우의 수
  tier: star_5
  mechanism_primary: 약수 개수 공식
  mechanism_secondary: [정수 카운트]
  insight_type: I-EQV
  depth: 2
  citation_note: 블랙라벨 CM1 CH08 STEP 2

- source: 블랙라벨-CM1-CH08-STEP2-#08
  page: 91
  unit_code: CM1-CB
  problem_summary: |
    1~10 카드 · 두 번 뽑아 a, b (비복원) · a+b 3의 배수 되는 경우 수
  solution_summary: |
    카드를 3으로 나눈 나머지 (0,1,2) 그룹화 · 순서쌍 카운트
  category: 카드·조합
  tier: star_5
  mechanism_primary: mod 그룹화 조합
  mechanism_secondary: [카운트]
  insight_type: I-EQV
  depth: 2
  citation_note: 블랙라벨 CM1 CH08 STEP 2

- source: 블랙라벨-CM1-CH08-STEP2-#09
  page: 91
  unit_code: CM1-CB
  problem_summary: |
    정사각형 6영역 · 노란색 포함 6색 조합 · 인접 다른 색 · ㉠, ㉢ 서로 다름 · ㉣ or ㉤ 노란색 · 경우 수
  solution_summary: |
    영역 인접 그래프 · 색칠 방법 계층 카운트
  category: 지도색칠·조합
  tier: star_5
  tier_note: "인접 조건 다층 · premium 후보"
  mechanism_primary: 인접 조건 색칠
  mechanism_secondary: [케이스 결합]
  insight_type: I-MI
  depth: 3
  citation_note: 블랙라벨 CM1 CH08 STEP 2

- source: 블랙라벨-CM1-CH08-STEP2-#10
  page: 91
  unit_code: CM1-CB
  problem_summary: |
    1,2,3,4,6,8 카드 6장 일렬 · 이웃 두 카드 곱 4의 배수 되는 경우 수
  solution_summary: |
    4의 배수 조건 · 짝·홀·4배수 배치 규칙
  category: 배열·조건
  tier: star_5
  tier_note: "다중 조건 배열 · premium 후보"
  mechanism_primary: 인접 곱 조건 (4배수)
  mechanism_secondary: [케이스 분석]
  insight_type: I-CON
  depth: 3
  citation_note: 블랙라벨 CM1 CH08 STEP 2

- source: 블랙라벨-CM1-CH08-STEP2-#11
  page: 91
  unit_code: CM1-CB
  problem_summary: |
    5명에게 연필 4자루, 지우개 3개 나눔 · 연필 다른 사람에게 하나씩 · 지우개 다른 사람에게 하나씩 · 못받는 사람 없음
  solution_summary: |
    연필 받는 4명·지우개 받는 3명 조합 · 겹침 조건
  category: 분배·경우 수
  tier: star_5
  mechanism_primary: 분배 조합·조건
  mechanism_secondary: [포함배제]
  insight_type: I-CON
  depth: 2
  citation_note: 블랙라벨 CM1 CH08 STEP 2

- source: 블랙라벨-CM1-CH08-STEP2-#12
  page: 91
  unit_code: CM1-CB
  problem_summary: |
    5개 상자·6공 (1~6) · 색칠 상자 짝수공 안됨 · 짝수공은 이웃 상자에 안됨 · 5개 공 배치 경우 수
  solution_summary: |
    이웃 조건 배치 · 케이스 분석
  category: 조건 배치
  tier: star_5
  mechanism_primary: 이웃 조건 배치
  mechanism_secondary: [케이스]
  insight_type: I-MI
  depth: 2
  citation_note: 블랙라벨 CM1 CH08 STEP 2

- source: 블랙라벨-CM1-CH08-STEP2-#13
  page: 92
  unit_code: CM1-CB
  problem_summary: |
    A, B, C, D, E, F 6지점 도로망 · B, D 사이 공사 · A→(다른 5지점 한 번씩)→A · 경로 수
  solution_summary: |
    A 시작·종료 해밀턴 순환 · B, D 이웃 금지 · 경로 카운트
  category: 그래프 경로·조건
  tier: star_5
  tier_note: "그래프 경로 · premium 후보"
  mechanism_primary: 그래프 해밀턴 경로 조건
  mechanism_secondary: [케이스 분리]
  insight_type: I-CON
  depth: 3
  citation_note: 블랙라벨 CM1 CH08 STEP 2

- source: 블랙라벨-CM1-CH08-STEP2-#14
  page: 92
  unit_code: CM1-CB
  problem_summary: |
    가족 5명 극장 좌석 A, B 두 열 5좌석씩 · A열 조부모 이웃 · B열 부모·아이 좌석 · 아이 앞 좌석 빔 · 5명 좌석 경우 수 [2019 교육청]
  solution_summary: |
    좌석 조건 case별 배치 카운트
  category: 조건 배열·경우 수
  tier: star_5
  tier_note: "다중 좌석 조건 · premium 후보"
  mechanism_primary: 좌석 조건 배열
  mechanism_secondary: [케이스 분석]
  insight_type: I-CON
  depth: 3
  citation_note: 블랙라벨 CM1 CH08 STEP 2

- source: 블랙라벨-CM1-CH08-STEP2-#15
  page: 92
  unit_code: CM1-CB
  problem_summary: |
    칠각형 각 꼭짓점 1~7 · 홀수 이웃 두 수 중 적어도 홀수 · 짝수 이웃 두 수 중 적어도 짝수 · 배치 방법
  solution_summary: |
    홀·짝 꼭짓점 배치 규칙 · 조합 카운트
  category: 도형 배치·조합
  tier: star_5
  tier_note: "다중 조건 배치 · premium 후보"
  mechanism_primary: 홀·짝 이웃 배치 규칙
  mechanism_secondary: [순환 배치]
  insight_type: I-MI
  depth: 3
  citation_note: 블랙라벨 CM1 CH08 STEP 2

- source: 블랙라벨-CM1-CH08-STEP2-#16
  page: 92
  unit_code: CM1-CB
  problem_summary: |
    등식 ₙPᵣ=ₙ₋₁Pᵣ+r×ₙ₋₁Pᵣ₋₁ 증명 (1≤r<n) · 빈 칸 (가), (나), (다) 채우기
  solution_summary: |
    A 포함/미포함 케이스 분석 · 각 항 대응
  category: 순열 항등식 증명
  tier: star_5
  mechanism_primary: 순열 조합 항등식
  mechanism_secondary: [증명]
  insight_type: I-EQV
  depth: 2
  citation_note: 블랙라벨 CM1 CH08 STEP 2

- source: 블랙라벨-CM1-CH08-STEP2-#17
  page: 92
  unit_code: CM1-CB
  problem_summary: |
    n≥2 자연수 · ₙ₋₁Cₙ₋₁+ₙCₙ₋₁+ₙ₊₁Cₙ₋₁=ₙ₊₂Cₙ 증명 · (가), (나), (다) 대응 함수 f, g, h · f(2)+g(3)+h(4) 값
  solution_summary: |
    최대값 케이스 분류 (i, ii, iii) · 각 케이스 대응
  category: 조합 항등식 증명
  tier: star_5
  mechanism_primary: 조합 항등식 (최대값 분해)
  mechanism_secondary: [증명]
  insight_type: I-EQV
  depth: 2
  citation_note: 블랙라벨 CM1 CH08 STEP 2

- source: 블랙라벨-CM1-CH08-STEP2-#18
  page: 93
  unit_code: CM1-CB
  problem_summary: |
    1~13 중 서로 다른 9개 이상 뽑기 · 1, 2 포함 · 3 미포함 · 경우 수
  solution_summary: |
    1, 2 필수 · 3 제외 → 나머지 4, 5, ..., 13 (10개) 중 나머지 (7~11개) 조합
  category: 조합·조건 필터
  tier: star_5
  mechanism_primary: 조건 조합 (포함·제외)
  mechanism_secondary: [경우의 수]
  insight_type: I-EQV
  depth: 2
  citation_note: 블랙라벨 CM1 CH08 STEP 2

- source: 블랙라벨-CM1-CH08-STEP2-#19
  page: 93
  unit_code: CM1-CB
  problem_summary: |
    1~10 카드 · A, B 3장씩 뽑음 · A 카드 최댓값 9, B 카드 최솟값 3 · 경우 수
  solution_summary: |
    A는 9 포함, 나머지 2장 · B는 3 포함, 나머지 2장 · 서로 다른 카드 조합
  category: 조합·최대·최소 조건
  tier: star_5
  mechanism_primary: 조합 조건 (최대·최소)
  mechanism_secondary: [경우의 수]
  insight_type: I-CON
  depth: 2
  citation_note: 블랙라벨 CM1 CH08 STEP 2

- source: 블랙라벨-CM1-CH08-STEP2-#20
  page: 93
  unit_code: CM1-CB
  problem_summary: |
    자연수 9를 세 자연수의 합으로 표현 (순서·중복 다른 경우) · 경우 수
  solution_summary: |
    각 항 순서·중복 고려 배열 카운트
  category: 분할·중복 배열
  tier: star_5
  mechanism_primary: 자연수 분할 배열
  mechanism_secondary: [카운트]
  insight_type: I-EQV
  depth: 2
  citation_note: 블랙라벨 CM1 CH08 STEP 2

- source: 블랙라벨-CM1-CH08-STEP2-#21
  page: 93
  unit_code: CM1-CB
  problem_summary: |
    세 방향 평행선 3, 3, 4개 · 10개 직선으로 만드는 사각형 개수 (빈출)
  solution_summary: |
    3방향 중 2방향 각각 2줄 선택 · 조합
  category: 도형·조합
  tier: star_5
  mechanism_primary: 도형 조합 (사각형 = 두 방향 각 두 줄)
  mechanism_secondary: [조합 카운트]
  insight_type: I-EQV
  depth: 2
  citation_note: 블랙라벨 CM1 CH08 STEP 2

- source: 블랙라벨-CM1-CH08-STEP2-#22
  page: 93
  unit_code: CM1-CB
  problem_summary: |
    직사각형 ABCD · AB, CD에 각 6점 · 각 변에서 3점 · 만나지 않는 3선분
  solution_summary: |
    두 변에서 3점씩 뽑아 대응 (교차 회피) · 각 대응 방식 카운트
  category: 도형·선분 조합
  tier: star_5
  tier_note: "비교차 조합 통찰 · premium 후보"
  mechanism_primary: 비교차 선분 대응
  mechanism_secondary: [조합]
  insight_type: I-PD
  depth: 3
  citation_note: 블랙라벨 CM1 CH08 STEP 2

- source: 블랙라벨-CM1-CH08-STEP2-#23
  page: 93
  unit_code: CM1-CB
  problem_summary: |
    사면체 ABCD 6모서리 색칠 (모든 or 일부) · 4꼭짓점 모두 연결 · 경우의 수
  solution_summary: |
    색칠된 모서리로 이루어진 부분그래프가 연결 · 케이스 분석
  category: 그래프·조합
  tier: star_5
  tier_note: "그래프 연결성 · premium 후보"
  mechanism_primary: 그래프 연결 조합
  mechanism_secondary: [부분그래프]
  insight_type: I-CON
  depth: 3
  citation_note: 블랙라벨 CM1 CH08 STEP 2

- source: 블랙라벨-CM1-CH08-STEP2-#24
  page: 93
  unit_code: CM1-CB
  problem_summary: |
    원 9점 · 두 점 연결 직선들 (조건: 어느 두 직선도 평행하지 않음, 어느 세 직선도 원 위 아닌 점에서 만나지 않음) · 두 직선 교점 원 외부에 있는 것 개수
  solution_summary: |
    C(9,2) 선분·교점 위치 판정 · 외부 교점 카운트
  category: 원·조합·기하
  tier: star_5
  tier_note: "premium 후보"
  mechanism_primary: 원 위 점·교점 위치
  mechanism_secondary: [조합]
  insight_type: I-PD
  depth: 3
  citation_note: 블랙라벨 CM1 CH08 STEP 2

- source: 블랙라벨-CM1-CH08-STEP2-#25
  page: 94
  unit_code: CM1-CB
  problem_summary: |
    9박 10일 3국 여행 · 오가는 1박씩 기내 · 영국·이탈리아 1박 이상, 프랑스 2박 이상 · 같은 나라 연속 · 코스 수
  solution_summary: |
    7박 분배 조건 · 조합 카운트 (연속 그룹)
  category: 분할·조건
  tier: star_5
  mechanism_primary: 분할 조건 카운트
  mechanism_secondary: []
  insight_type: I-CON
  depth: 2
  citation_note: 블랙라벨 CM1 CH08 STEP 2

- source: 블랙라벨-CM1-CH08-STEP2-#26
  page: 94
  unit_code: CM1-CB
  problem_summary: |
    남 4, 여 3명 · 남 2명 이상 4명 뽑고 4개 초콜릿 1개씩 · 경우 수
  solution_summary: |
    뽑기 케이스 (남2여2, 남3여1, 남4) · 나눔 조합
  category: 조합·분배·경우 수
  tier: star_5
  mechanism_primary: 조합 케이스 분석
  mechanism_secondary: [분배]
  insight_type: I-MI
  depth: 2
  citation_note: 블랙라벨 CM1 CH08 STEP 2

- source: 블랙라벨-CM1-CH08-STEP2-#27
  page: 94
  unit_code: CM1-CB
  problem_summary: |
    5명 씨름팀 A, B · 승자 계속 · 5전 3선승제 3:1 승리 경우 수 · A팀 우승 각 경기 순서 다른 경우 · 총 경우
  solution_summary: |
    각 팀 3승 조합 · 순서 케이스
  category: 씨름 경기·경우 수
  tier: star_5
  mechanism_primary: 승자결정전 경우
  mechanism_secondary: [케이스 분석]
  insight_type: I-CON
  depth: 3
  citation_note: 블랙라벨 CM1 CH08 STEP 2

- source: 블랙라벨-CM1-CH08-STEP2-#28
  page: 94
  unit_code: CM1-CB
  problem_summary: |
    정삼각형 1개, 정사각형 3개 도형 · 1~6 4개 (중복 O) 정다각형 내부 · 정삼각형 안 수는 정사각형 안 수보다 작음 · 변 공유 정사각형 서로 다름 [2022 교육청]
  solution_summary: |
    수 배치 케이스 · 조건 필터
  category: 조건 배치·경우 수
  tier: star_5
  tier_note: "다중 조건 · premium 후보"
  mechanism_primary: 조건 배치 카운트
  mechanism_secondary: [비교 조건]
  insight_type: I-MI
  depth: 3
  citation_note: 블랙라벨 CM1 CH08 STEP 2

- source: 블랙라벨-CM1-CH08-STEP2-#29
  page: 94
  unit_code: CM1-CB
  problem_summary: |
    주머니 1(1개), 2(1개), 3(2개), 4(3개) 공 · 4개 동시에 꺼내 나열 · 같은 숫자 이웃하지 않는 경우
  solution_summary: |
    조합·순열 · 이웃 안되는 조건 (포함배제)
  category: 배열·조건
  tier: star_5
  mechanism_primary: 이웃 조건 배열
  mechanism_secondary: [포함배제]
  insight_type: I-CON
  depth: 2
  citation_note: 블랙라벨 CM1 CH08 STEP 2

- source: 블랙라벨-CM1-CH08-STEP2-#30
  page: 94
  unit_code: CM1-CB
  problem_summary: |
    자연수 1~9 · 1 포함 홀수 3개와 2 포함 짝수 3개 뽑아 6자리 자연수 · 1 양옆 짝수 or 2 양옆 홀수 배열 · 배열 수 2ᵖ×3ᵍ×r · p+q+r 값 (r 소수)
  solution_summary: |
    두 케이스 각각 배열 카운트 · 소인수분해
  category: 배열·조건·소인수
  tier: star_5
  tier_note: "다중 조건·소인수 · premium 후보"
  mechanism_primary: 배열 조건 (양옆 규칙)
  mechanism_secondary: [소인수분해]
  insight_type: I-CON
  depth: 3
  citation_note: 블랙라벨 CM1 CH08 STEP 2

- source: 블랙라벨-CM1-CH08-STEP2-#31
  page: 95
  unit_code: CM1-CB
  problem_summary: |
    선수 13명 · 특정 4명 중 2명씩, 나머지 9명 중 3명씩 뽑아 5명 두 팀 · 팀 만드는 방법 수
  solution_summary: |
    특정 4명 중 2:2 분리 · 9명 중 3:3 분리 후 나머지 3명 · 조합
  category: 분할·조합
  tier: star_5
  mechanism_primary: 이중 분할 조합
  mechanism_secondary: []
  insight_type: I-EQV
  depth: 2
  citation_note: 블랙라벨 CM1 CH08 STEP 2

- source: 블랙라벨-CM1-CH08-STEP2-#32
  page: 95
  unit_code: CM1-CB
  problem_summary: |
    남 6, 여 2 · 8명 2조 (A, B) · 각 조 최소 3명 · 여 2명 같은 조 · 방법 수
  solution_summary: |
    여 2명 같은 조 A → 남 나눔 케이스 · 각 조 인원 조건
  category: 분할·조건
  tier: star_5
  mechanism_primary: 분할 조건
  mechanism_secondary: [케이스]
  insight_type: I-CON
  depth: 2
  citation_note: 블랙라벨 CM1 CH08 STEP 2

- source: 블랙라벨-CM1-CH08-STEP2-#33
  page: 95
  unit_code: CM1-CB
  problem_summary: |
    9장 카드 (2,3,4,5,7,8,9,11,16) 같은 상자 3개 나눔 · 각 상자 홀수 카드 1장 이상 · 각 상자 카드 수 곱 짝수 (서술형)
  solution_summary: |
    홀수 카드 (3,5,7,9,11) 5장 · 짝수 (2,4,8,16) 4장 · 조건별 분배
  category: 분할·조건
  tier: star_5
  tier_note: "premium 후보"
  mechanism_primary: 조건 분배
  mechanism_secondary: [케이스]
  insight_type: I-MI
  depth: 3
  citation_note: 블랙라벨 CM1 CH08 STEP 2

- source: 블랙라벨-CM1-CH08-STEP2-#34
  page: 95
  unit_code: CM1-CB
  problem_summary: |
    6팀 축구 토너먼트 · 실력 2위와 3위 대진할 수 있도록 대진표 · (실력 같은 팀 없음, 실력 높은 팀 무조건 승) · 방법 수
  solution_summary: |
    2위와 3위가 결승에서 만나는 대진 (반대 진영) · 대진표 배열
  category: 토너먼트·대진
  tier: star_5
  tier_note: "premium 후보"
  mechanism_primary: 토너먼트 대진 배정
  mechanism_secondary: [반대 진영]
  insight_type: I-CON
  depth: 3
  citation_note: 블랙라벨 CM1 CH08 STEP 2

- source: 블랙라벨-CM1-CH08-STEP2-#35
  page: 95
  unit_code: CM1-CB
  problem_summary: |
    같은 종류 검은 공 각 1, 2, 3개 든 상자 3개 · 1~10 흰 공 10개를 3상자 남김없이 · 각 상자 공 개수 모두 4배수
  solution_summary: |
    상자별 총 공수 (검은+흰) 4배수 · 각 상자 흰 공수 3, 2, 1 mod 4 조건 · 조합
  category: 분배·조건·mod
  tier: star_5
  tier_note: "다중 조건 · premium 후보"
  mechanism_primary: 분배 조건 mod
  mechanism_secondary: [카운트]
  insight_type: I-CON
  depth: 3
  citation_note: 블랙라벨 CM1 CH08 STEP 2
```

---

## IX. 행렬 (CH09 · CM1-MX) — STEP 2 (36문)

```yaml
- source: 블랙라벨-CM1-CH09-STEP2-#01
  page: 104
  unit_code: CM1-MX
  problem_summary: |
    3정류장 B₁, B₂, B₃ · 마을버스 1,2,3번 · 정지 표 · aᵢⱼ=(정류장 Bᵢ에 j번 정지 1, 아니면 0) · 행렬 A
  solution_summary: |
    표 대응 · 행렬 원소 판정
  category: 행렬 성분 정의
  tier: star_5
  mechanism_primary: 행렬 성분 정의
  mechanism_secondary: [표 대응]
  insight_type: I-EQV
  depth: 1
  citation_note: 블랙라벨 CM1 CH09 STEP 2

- source: 블랙라벨-CM1-CH09-STEP2-#02
  page: 104
  unit_code: CM1-MX
  problem_summary: |
    4정사각행렬 A · aᵢⱼ={ij+k (i가 j의 약수 또는 배수), i+j (i가 j 약수·배수 아님)} · a₁₁+a₂₁+a₃₂+a₄₃=25 · k 값
  solution_summary: |
    각 (i,j) 조건 판정 후 원소 계산 · 방정식
  category: 행렬 성분·조건 정의
  tier: star_5
  mechanism_primary: 조건별 원소 계산
  mechanism_secondary: [연립]
  insight_type: I-EQV
  depth: 2
  citation_note: 블랙라벨 CM1 CH09 STEP 2

- source: 블랙라벨-CM1-CH09-STEP2-#03
  page: 104
  unit_code: CM1-MX
  problem_summary: |
    이차 정사각행렬 A의 (i,j) 성분이 x²−(2i+3j)x+6ij≤0 만족 모든 정수 x 합 · A 행렬 선택
  solution_summary: |
    각 (i,j)에서 이차 부등식 · 정수해 합
  category: 행렬 성분·부등식
  tier: star_5
  mechanism_primary: 부등식 정수해 → 성분
  mechanism_secondary: []
  insight_type: I-EQV
  depth: 2
  citation_note: 블랙라벨 CM1 CH09 STEP 2

- source: 블랙라벨-CM1-CH09-STEP2-#04
  page: 104
  unit_code: CM1-MX
  problem_summary: |
    3차 정사각행렬 A=(aᵢⱼ) · 1~9 각 한번 · 1행·2행·3행 곱 144, 140, 18 · 1열·2열·3열 곱 36, 42, 240 · a₁₃ 값
  solution_summary: |
    각 행·열 곱 조건 · 인수분해로 원소 결정
  category: 행렬 조건·인수분해
  tier: star_5
  tier_note: "다중 곱 조건 · premium 후보"
  mechanism_primary: 행렬 곱 조건 인수분해
  mechanism_secondary: [정수 필터]
  insight_type: I-CON
  depth: 3
  citation_note: 블랙라벨 CM1 CH09 STEP 2

- source: 블랙라벨-CM1-CH09-STEP2-#05
  page: 104
  unit_code: CM1-MX
  problem_summary: |
    행렬 M (5×5, 5명 서로 약수 관계 표시) · aᵢⱼ={1 (Aᵢ가 Aⱼ와 약수 관계), 0 (아님)} · 보기 3항
  solution_summary: |
    각 명제 검증
  category: 행렬·약수 관계
  tier: star_5
  mechanism_primary: 행렬 관계 판정
  mechanism_secondary: [명제]
  insight_type: I-MI
  depth: 2
  citation_note: 블랙라벨 CM1 CH09 STEP 2

- source: 블랙라벨-CM1-CH09-STEP2-#06
  page: 104
  unit_code: CM1-MX
  problem_summary: |
    A=[[a+b, a²+b²],[a³+b³, a⁵+b⁵]], B=[[2,3],[x,y]] · A=B · xy 값
  solution_summary: |
    성분 매칭 · a+b=2, a²+b²=3 → ab=1/2 · a³+b³, a⁵+b⁵ 뉴턴
  category: 행렬 상등·대칭식
  tier: star_5
  tier_note: "뉴턴 항등식 활용 · premium 후보"
  mechanism_primary: 뉴턴 항등식·행렬 성분
  mechanism_secondary: [대칭식]
  insight_type: I-SYM
  depth: 3
  citation_note: 블랙라벨 CM1 CH09 STEP 2

- source: 블랙라벨-CM1-CH09-STEP2-#07
  page: 105
  unit_code: CM1-MX
  problem_summary: |
    2차 A · aᵢⱼ=4i-3j · B=[[x²-y², -2y²-z²],[x+y+z, 2]] · A=B · xy+yz+zx 값 (빈출)
  solution_summary: |
    A 계산 · B 성분 매칭 · 연립
  category: 행렬 상등·연립
  tier: star_5
  mechanism_primary: 행렬 성분 매칭·연립
  mechanism_secondary: [대칭식]
  insight_type: I-EQV
  depth: 2
  citation_note: 블랙라벨 CM1 CH09 STEP 2

- source: 블랙라벨-CM1-CH09-STEP2-#08
  page: 105
  unit_code: CM1-MX
  problem_summary: |
    A=[[x³+y³+z³, x+y+z],[xy+yz+zx, xyz]], B=[[3xyz, a],[b, 64]] · A=B · a+b 값 (x,y,z 양수)
  solution_summary: |
    x³+y³+z³=3xyz → x+y+z=0 or x=y=z · 정수 필터
  category: 행렬 성분·대칭식
  tier: star_5
  tier_note: "대칭식 조건 · premium 후보"
  mechanism_primary: 대칭식 조건 (x³+y³+z³=3xyz)
  mechanism_secondary: [특수해]
  insight_type: I-SYM
  depth: 3
  citation_note: 블랙라벨 CM1 CH09 STEP 2

- source: 블랙라벨-CM1-CH09-STEP2-#09
  page: 105
  unit_code: CM1-MX
  problem_summary: |
    2차 A, B · aᵢⱼ, bᵢⱼ · bᵢⱼ=2aⱼᵢ-1 (i=1,2, j=1,2) · 3A-B=[[1, 2],[-2, 3]] · A 모든 성분 합
  solution_summary: |
    A와 A^T 관계 (bᵢⱼ=2aⱼᵢ-1) · B=2A^T-1행렬 · 3A-2A^T 성분식
  category: 행렬·전치
  tier: star_5
  mechanism_primary: 행렬 관계식·전치
  mechanism_secondary: [연립]
  insight_type: I-EQV
  depth: 2
  citation_note: 블랙라벨 CM1 CH09 STEP 2

- source: 블랙라벨-CM1-CH09-STEP2-#10
  page: 105
  unit_code: CM1-MX
  problem_summary: |
    2차 A, B · bᵢⱼ=kaᵢⱼ · 2A-B=A+kB 만족 모든 실수 k 합 (A≠O)
  solution_summary: |
    B=kA 대입 · A(2-1-k²)=0 · A≠O → k²+k-1=0 · 근 합
  category: 행렬 관계식·k
  tier: star_5
  mechanism_primary: 행렬 관계식·근 합
  mechanism_secondary: [매개변수]
  insight_type: I-EQV
  depth: 2
  citation_note: 블랙라벨 CM1 CH09 STEP 2

- source: 블랙라벨-CM1-CH09-STEP2-#11
  page: 105
  unit_code: CM1-MX
  problem_summary: |
    A=[[4,1],[1,0]], B=[[17,4],[4,1]] · (x²+y²)A-(x-y)E=B 만족 실수 x, y · α₁β₂+α₂β₁ 값
  solution_summary: |
    성분 매칭 · x²+y² 계수, x-y 조건 → x, y 결정
  category: 행렬 연립·매개
  tier: star_5
  mechanism_primary: 행렬 연립
  mechanism_secondary: []
  insight_type: I-EQV
  depth: 2
  citation_note: 블랙라벨 CM1 CH09 STEP 2

- source: 블랙라벨-CM1-CH09-STEP2-#12
  page: 105
  unit_code: CM1-MX
  problem_summary: |
    2차 X=[[a,b],[c,d]] · D(X)=ad-bc · A=[[2,1],[-1,m]], E=[[1,0],[0,1]] · D(kA)=D(A-E) 만족 정수 m 존재 정수 k 개수
  solution_summary: |
    D(kA)=k²D(A) · D(A-E)=(m-1)(1)+1 등 · k² 관계식 정수해
  category: 행렬식(determinant)·정수해
  tier: star_5
  tier_note: "premium 후보"
  mechanism_primary: 행렬식 관계식·정수해
  mechanism_secondary: []
  insight_type: I-CON
  depth: 3
  citation_note: 블랙라벨 CM1 CH09 STEP 2

- source: 블랙라벨-CM1-CH09-STEP2-#13
  page: 106
  unit_code: CM1-MX
  problem_summary: |
    X=[[a,b],[c,d]] · L(X)=|b-a|+|d-c| · A=[[x₁,x₂],[y₁,y₂]], B=[[x₁,x₂],[-y₁,-y₂]] · 보기 3항 (ㄱ L(A)=L(B) · ㄴ L(2A)=2L(B) · ㄷ L(A+B)≤L(A)+L(B))
  solution_summary: |
    L 함수 정의 · 삼각부등식 확인 · 명제 판정
  category: 행렬 함수·부등식
  tier: star_5
  mechanism_primary: 행렬 함수 성질 (norm)
  mechanism_secondary: [삼각부등식]
  insight_type: I-MI
  depth: 2
  citation_note: 블랙라벨 CM1 CH09 STEP 2

- source: 블랙라벨-CM1-CH09-STEP2-#14
  page: 106
  unit_code: CM1-MX
  problem_summary: |
    A=[[a,-3],[3,b]], B=[[-b,-3],[3,-a]] · A+B=[[7,-6],[6,-7]], A²+B²=kE · 실수 k 최솟값 m · 4m 값
  solution_summary: |
    A+B 성분 매칭 · 케일리-해밀턴 응용 · k 결정
  category: 행렬 대칭·조건 통합
  tier: star_5
  tier_note: "premium 후보"
  mechanism_primary: 행렬 성분 매칭·A²+B²=kE
  mechanism_secondary: [최솟값]
  insight_type: I-CON
  depth: 3
  citation_note: 블랙라벨 CM1 CH09 STEP 2

- source: 블랙라벨-CM1-CH09-STEP2-#15
  page: 106
  unit_code: CM1-MX
  problem_summary: |
    9 이하 서로 다른 4자연수 a,b,c,d · A=[[a,b],[c,d]], B=[[1,1],[1,1]] · BA 모든 성분 홀수 되는 A 개수
  solution_summary: |
    BA 성분식 · 짝·홀 조건 · 카운트
  category: 행렬 곱·조건·정수
  tier: star_5
  mechanism_primary: 행렬 곱·짝홀 조건
  mechanism_secondary: [정수 카운트]
  insight_type: I-CON
  depth: 2
  citation_note: 블랙라벨 CM1 CH09 STEP 2

- source: 블랙라벨-CM1-CH09-STEP2-#16
  page: 106
  unit_code: CM1-MX
  problem_summary: |
    X=[[a,b],[c,d]] · f(X)=[[d,c],[b,a]] · A=[[2,3],[0,2]], B=[[1,0],[-2,1]] · f(AB)+f(A)f(B) 성분 합
  solution_summary: |
    행렬 정의·계산 · 성분 합
  category: 행렬 정의·계산
  tier: star_5
  mechanism_primary: 행렬 정의 계산
  mechanism_secondary: []
  insight_type: I-EQV
  depth: 1
  citation_note: 블랙라벨 CM1 CH09 STEP 2

- source: 블랙라벨-CM1-CH09-STEP2-#17
  page: 106
  unit_code: CM1-MX
  problem_summary: |
    두 연립방정식 (x₁=2y₁+y₃, x₂=y₁+2y₂ 및 y₁=z₁+2z₂, y₂=2z₁-z₂, y₃=-z₁+z₂) · [[x₁],[x₂]]=A[[z₁],[z₂]]로 나타낼 때 A
  solution_summary: |
    첫 연립 [[x₁],[x₂]]=P[[y₁],[y₂],[y₃]]] · 둘째 [[y₁],[y₂],[y₃]]=Q[[z₁],[z₂]] · A=PQ
  category: 행렬 곱·연립방정식
  tier: star_5
  mechanism_primary: 행렬 곱 (연립 대응)
  mechanism_secondary: []
  insight_type: I-EQV
  depth: 2
  citation_note: 블랙라벨 CM1 CH09 STEP 2

- source: 블랙라벨-CM1-CH09-STEP2-#18
  page: 106
  unit_code: CM1-MX
  problem_summary: |
    x³-3x²-2x+k=0 세 근 α, β, γ · A=[[1,α],[γ,β]], B=[[α,β],[γ,α]] · AB 모든 성분 합 1 · k 값
  solution_summary: |
    AB 성분 계산 · 대칭식으로 정리 · 근과 계수 관계
  category: 행렬 곱·삼차 근과 계수
  tier: star_5
  tier_note: "premium 후보"
  mechanism_primary: 행렬 곱·삼차 근과 계수
  mechanism_secondary: [대칭식]
  insight_type: I-CON
  depth: 3
  citation_note: 블랙라벨 CM1 CH09 STEP 2

- source: 블랙라벨-CM1-CH09-STEP2-#19
  page: 107
  unit_code: CM1-MX
  problem_summary: |
    A=[[1,1],[a,a]] · 2차 정사각 B · B[[1],[-1]]=[[0],[0]] · AB=4A, BA=8B · A+B의 (1,2), (2,1) 성분 합
  solution_summary: |
    B[[1],[-1]]=0 조건 · AB=4A, BA=8B · 케일리-해밀턴 응용
  category: 행렬 방정식·조건
  tier: star_5
  tier_note: "다중 조건 · premium 후보"
  mechanism_primary: 행렬 방정식 조건
  mechanism_secondary: [케일리-해밀턴]
  insight_type: I-CON
  depth: 3
  citation_note: 블랙라벨 CM1 CH09 STEP 2

- source: 블랙라벨-CM1-CH09-STEP2-#20
  page: 107
  unit_code: CM1-MX
  problem_summary: |
    A=[[1,-1],[0,1]] · A-A²+A³-A⁴+...+A¹⁰⁰³-A¹⁰⁰⁴=[[a,b],[c,d]] · a+b+c+d 값
  solution_summary: |
    Aⁿ 패턴 계산 (기하수열) · 부호 교대 합
  category: 행렬 거듭제곱·수열합
  tier: star_5
  tier_note: "거듭제곱 패턴 · premium 후보"
  mechanism_primary: 행렬 Aⁿ 패턴·교대합
  mechanism_secondary: [케일리-해밀턴]
  insight_type: I-PD
  depth: 3
  citation_note: 블랙라벨 CM1 CH09 STEP 2

- source: 블랙라벨-CM1-CH09-STEP2-#21
  page: 107
  unit_code: CM1-MX
  problem_summary: |
    A=[[1,-2],[0,2]], B=[[1,1],[0,1]] · B(AB)ⁿA 성분 합 2049 · 자연수 n 값
  solution_summary: |
    행렬 곱 반복 · 패턴 인식
  category: 행렬 곱·수열
  tier: star_5
  mechanism_primary: 행렬 곱 반복 패턴
  mechanism_secondary: []
  insight_type: I-PD
  depth: 2
  citation_note: 블랙라벨 CM1 CH09 STEP 2

- source: 블랙라벨-CM1-CH09-STEP2-#22
  page: 107
  unit_code: CM1-MX
  problem_summary: |
    A=[[1,3],[-1,-2]], B=[[2,3],[-1,-1]] · A¹⁰⁰+A⁹⁹B+A⁹⁸B²+...+AB⁹⁹+B¹⁰⁰=[[a,b],[c,d]] · a+b+c+d 값
  solution_summary: |
    A, B 케일리-해밀턴 · 각 Aⁿ, Bⁿ 계산 · 시그마 합
  category: 행렬 거듭제곱·시그마
  tier: star_5
  tier_note: "다중 거듭제곱 · premium 후보"
  mechanism_primary: A, B 거듭제곱 조합
  mechanism_secondary: [케일리-해밀턴]
  insight_type: I-PD
  depth: 3
  citation_note: 블랙라벨 CM1 CH09 STEP 2

- source: 블랙라벨-CM1-CH09-STEP2-#23
  page: 107
  unit_code: CM1-MX
  problem_summary: |
    (1+i)ⁿ=aₙ+ibₙ · [[aₙ],[bₙ]]=Aⁿ[[1],[0]] · Aⁿ=kE 되는 자연수 k 최솟값
  solution_summary: |
    (1+i)ⁿ 실·허수부 · A=[[1,-1],[1,1]] 판정 · A⁸=16E 등 판정
  category: 행렬·복소수 표현
  tier: star_5
  tier_note: "premium 후보"
  mechanism_primary: 행렬 회전·복소수
  mechanism_secondary: [주기]
  insight_type: I-RT
  depth: 3
  citation_note: 블랙라벨 CM1 CH09 STEP 2

- source: 블랙라벨-CM1-CH09-STEP2-#24
  page: 107
  unit_code: CM1-MX
  problem_summary: |
    x³=1 허근 ω · A=[[-ω, ω²],[ω², -1]] · A+A²+A³+...+A¹⁰⁰⁰ 간단히
  solution_summary: |
    A 성질 (ω³=1, 1+ω+ω²=0) · Aⁿ 계산·주기
  category: 행렬·1의 세제곱근
  tier: star_5
  tier_note: "1등급 문제 · premium 후보"
  mechanism_primary: 행렬 주기 + 1의 세제곱근
  mechanism_secondary: [수열합]
  insight_type: I-PD
  depth: 3
  citation_note: 블랙라벨 CM1 CH09 STEP 2

- source: 블랙라벨-CM1-CH09-STEP2-#25
  page: 108
  unit_code: CM1-MX
  problem_summary: |
    두 2차 A, B · 보기 3항 (ㄱ (A-E)²=O, A²=E이면 A=E · ㄴ A≠O, A²=A이면 A=E · ㄷ C≠O, AC=BC이면 A=B)
  solution_summary: |
    반례·증명 · 각 명제 검증
  category: 행렬 곱 명제
  tier: star_5
  mechanism_primary: 행렬 성질 판단
  mechanism_secondary: [반례·증명]
  insight_type: I-MI
  depth: 2
  citation_note: 블랙라벨 CM1 CH09 STEP 2

- source: 블랙라벨-CM1-CH09-STEP2-#26
  page: 108
  unit_code: CM1-MX
  problem_summary: |
    두 2차 A, B · 보기 3항 (ㄱ A+B=E이면 A²-B²=A-B · ㄴ A²=2A이면 A=O 또는 A=2E · ㄷ AB=A, BA=B이면 AB=BA)
  solution_summary: |
    각 명제 반례·증명
  category: 행렬 명제
  tier: star_5
  mechanism_primary: 행렬 곱 성질 판정
  mechanism_secondary: [반례]
  insight_type: I-MI
  depth: 2
  citation_note: 블랙라벨 CM1 CH09 STEP 2

- source: 블랙라벨-CM1-CH09-STEP2-#27
  page: 108
  unit_code: CM1-MX
  problem_summary: |
    두 2차 A, B · A²+2A-E=O, AB=3E · B²=pA+qE · p+q 값
  solution_summary: |
    A²=-2A+E · AB=3E → B=3A⁻¹ · B²=9A⁻² · A⁻² 표현
  category: 행렬·역행렬 (범위 밖 조심)
  tier: star_5
  mechanism_primary: 행렬 관계식·역행렬
  mechanism_secondary: [케일리-해밀턴]
  insight_type: I-CON
  depth: 2
  citation_note: 블랙라벨 CM1 CH09 STEP 2

- source: 블랙라벨-CM1-CH09-STEP2-#28
  page: 108
  unit_code: CM1-MX
  problem_summary: |
    양수 a · A=[[a,b],[c,d]], B=[[0,1],[-1,0]] · (A+B)²=A²+2AB+B², A²=[[8,6],[-6,8]] · A 모든 성분 합 (서술형)
  solution_summary: |
    (A+B)²=A²+AB+BA+B² · 조건: AB=BA · B 상수배 or E 배 조건 판정 · A²=... 대입
  category: 행렬 곱·교환
  tier: star_5
  tier_note: "교환 조건 · premium 후보"
  mechanism_primary: AB=BA 교환 조건
  mechanism_secondary: [A² 관계식]
  insight_type: I-CON
  depth: 3
  citation_note: 블랙라벨 CM1 CH09 STEP 2

- source: 블랙라벨-CM1-CH09-STEP2-#29
  page: 108
  unit_code: CM1-MX
  problem_summary: |
    두 2차 A, B · A+B=2E, A²+B²=[[6,-2],[0,6]] · A¹⁰B¹⁰ 성분 합
  solution_summary: |
    A²+B²=(A+B)²-2AB · AB 계산 · Aⁿ, Bⁿ 관계
  category: 행렬 대칭·거듭제곱
  tier: star_5
  tier_note: "premium 후보"
  mechanism_primary: A²+B² 관계·거듭제곱
  mechanism_secondary: []
  insight_type: I-CON
  depth: 3
  citation_note: 블랙라벨 CM1 CH09 STEP 2

- source: 블랙라벨-CM1-CH09-STEP2-#30
  page: 108
  unit_code: CM1-MX
  problem_summary: |
    두 2차 A, B · A²+B=2E, AB=-A³+2A² · (A-B)³=aA+bE 만족 실수 a, b · a-b 값 (모든 실수 k에 A≠kE)
  solution_summary: |
    B=2E-A² · AB=A(2E-A²)=2A-A³ · 조건 성립 확인 · (A-B)³=(A-2E+A²)³
  category: 행렬 조건·다항 관계
  tier: star_5
  tier_note: "다중 관계 · premium 후보"
  mechanism_primary: 다중 관계식 축소
  mechanism_secondary: [케일리-해밀턴]
  insight_type: I-CON
  depth: 3
  citation_note: 블랙라벨 CM1 CH09 STEP 2

- source: 블랙라벨-CM1-CH09-STEP2-#31
  page: 109
  unit_code: CM1-MX
  problem_summary: |
    2차 A · A[[1],[1]]=[[2],[3]], A[[2],[3]]=[[4],[3]] · (pA+qE)[[2],[-1]]=[[m],[n]] · m+n=70 되는 자연수 (p,q) 개수
  solution_summary: |
    A[[2],[-1]] 계산 · (pA+qE)[[2],[-1]] 성분 · m+n 방정식·자연수 필터
  category: 행렬·벡터·정수해
  tier: star_5
  mechanism_primary: 행렬-벡터·정수해
  mechanism_secondary: [카운트]
  insight_type: I-CON
  depth: 2
  citation_note: 블랙라벨 CM1 CH09 STEP 2

- source: 블랙라벨-CM1-CH09-STEP2-#32
  page: 109
  unit_code: CM1-MX
  problem_summary: |
    2차 A · A²-2A+2E=O · A[[1],[-2]]=[[-2],[1]] · A[[5],[5]] 성분 합
  solution_summary: |
    A²=2A-2E · A[[1],[-2]] 조건 · [[5],[5]] 분해 · Aⁿ 성분 계산
  category: 행렬·케일리-해밀턴
  tier: star_5
  mechanism_primary: 케일리-해밀턴 활용
  mechanism_secondary: [벡터 분해]
  insight_type: I-CON
  depth: 2
  citation_note: 블랙라벨 CM1 CH09 STEP 2

- source: 블랙라벨-CM1-CH09-STEP2-#33
  page: 109
  unit_code: CM1-MX
  problem_summary: |
    세 정수 a, b, c · A=[[a,b],[c,a]] · 조건 (A²-16A+48E=O · A²의 모든 성분 양수) · A 개수
  solution_summary: |
    케일리-해밀턴: A²-2aA+(a²-bc)E=O · 16=2a, 48=a²-bc · a=8, bc=16 · 정수 (b,c) 조합 · A² 양수 조건 필터
  category: 케일리-해밀턴·정수 조건
  tier: star_5
  tier_note: "다중 조건 · premium 후보"
  mechanism_primary: 케일리-해밀턴 + 정수 조건
  mechanism_secondary: [양수 필터]
  insight_type: I-CON
  depth: 3
  citation_note: 블랙라벨 CM1 CH09 STEP 2

- source: 블랙라벨-CM1-CH09-STEP2-#34
  page: 109
  unit_code: CM1-MX
  problem_summary: |
    실수 a, b · A=[[3,2],[-2,-1]] · A¹⁰⁰⁰-A⁹⁹⁹=aA+bE · 2a-b 값
  solution_summary: |
    케일리-해밀턴: A²=2A-E · A²-A=A-E · Aⁿ-Aⁿ⁻¹=Aⁿ⁻¹-Aⁿ⁻² 패턴 · 반복 → A-E
  category: 케일리-해밀턴·거듭제곱
  tier: star_5
  tier_note: "premium 후보"
  mechanism_primary: 케일리-해밀턴 패턴
  mechanism_secondary: [반복 관계]
  insight_type: I-PD
  depth: 3
  citation_note: 블랙라벨 CM1 CH09 STEP 2

- source: 블랙라벨-CM1-CH09-STEP2-#35
  page: 109
  unit_code: CM1-MX
  problem_summary: |
    A=[[1,1],[0,x]] · A²-3A+2E=O · Aⁿ 모든 성분 합 100 초과 되는 자연수 n 최솟값
  solution_summary: |
    케일리-해밀턴 조건 x 결정 · A² 계산 · Aⁿ 성분식 관찰 · 100 초과 조건
  category: 케일리-해밀턴·최솟값
  tier: star_5
  mechanism_primary: 케일리-해밀턴 + 부등식
  mechanism_secondary: [최솟값]
  insight_type: I-CON
  depth: 2
  citation_note: 블랙라벨 CM1 CH09 STEP 2

- source: 블랙라벨-CM1-CH09-STEP2-#36
  page: 109
  unit_code: CM1-MX
  problem_summary: |
    A=[[1,x²],[1,4]], B=[[3,2],[y²,2]] · A³B-5A²B+5AB²-AB³=O · x²+y²-2y 최솟값
  solution_summary: |
    관계식 인수분해 · AB(A-B)(A²-... 등 인수 · 실수 x,y 조건 필터·최솟값
  category: 행렬 방정식·최솟값
  tier: star_5
  tier_note: "다중 조건 · premium 후보"
  mechanism_primary: 행렬 인수 방정식 조건
  mechanism_secondary: [최솟값]
  insight_type: I-CON
  depth: 3
  citation_note: 블랙라벨 CM1 CH09 STEP 2
```

---

## 통계·Tier 최종 판정

| 단원 | STEP 2 문항 | premium 후보 개수 (다중 통찰 3+) |
|------|-----------|------------------------------|
| CH01 다항식의 연산과 나머지정리 (CM1-PL) | 24 | 8 |
| CH02 인수분해 (CM1-PL) | 18 | 6 |
| CH03 복소수 (CM1-EQ) | 30 | 8 |
| CH04 이차방정식 (CM1-EQ) | 30 | 8 |
| CH05 이차방정식과 이차함수 (CM1-EQ) | 30 | 8 |
| CH06 여러 가지 방정식 (CM1-EQ) | 30 | 9 |
| CH07 여러 가지 부등식 (CM1-EQ) | 42 | 8 |
| CH08 순열과 조합 (CM1-CB) | 35 | 11 |
| CH09 행렬 (CM1-MX) | 36 | 13 |
| **합계** | **275** | **79 (약 29%)** |

---

## 주요 발견사항

### 1. tier star_5 일괄 (마스터 확립)
STEP 2 275문 모두 **star_5** 라벨링. 다중 통찰 3+ 문항은 tier_note에 "premium 후보" 표기.

### 2. 통찰 유형 분포
- **I-CON (조건 통합)**: 가장 빈도 높음 (약 30%) — 다양한 조건 결합 문항
- **I-EQV (동치 변환)**: 20%대 — 표준 이차식·수식 변환
- **I-MI (다중 해석)**: 15%대 — 보기 명제·case 분리
- **I-PD (패턴 발견)**: 10%대 — 수열·주기·복소수 거듭제곱
- **I-RT (표현 전환)**: 10%대 — 치환·좌표 변환
- **I-SYM (대칭성)**: 8% — 대칭식·뉴턴 항등식
- **I-BW (역방향)**: 5% — 조건 역산
- **I-XU (단원 결합)**: 낮음 (STEP 2는 단원 내 심화 중심)

### 3. 단원별 특징 mechanism
- **다항식 (CH01·02)**: 항등식 계수비교·특수값 대입·인수분해·나머지정리·이중근 조건·대칭식
- **방정식·부등식 (CH03~07)**: 복소수 주기·1의 세제곱근·근과 계수 관계·판별식 조건·상반방정식·다중 조건 통합·근의 위치
- **경우의 수 (CH08)**: 배열 조건·분배·그래프 경로·조합 카운트·포함배제·다중 조건
- **행렬 (CH09)**: 성분 정의·행렬 상등·거듭제곱 패턴·케일리-해밀턴·행렬 방정식

### 4. 방안 F 활용 원칙
- 슬롯당 `source: 블랙라벨-CM1-CH0N-STEP2-#XX` 형식 인용
- 최소 변형 (숫자 교체 or 동등 변형) 원칙
- copyright-similarity-check 0.30~0.85 통과 필수
- premium 후보 79문 중 최소 변형·정점 자격 6기준 통과 우선

---

