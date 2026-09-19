---
name: mechanism-데이터-고쟁이-CM1-CH02-항등식나머지
description: 고쟁이 공통수학1 2025 CH02 항등식과 나머지정리 STEP 1·2·3 전문항 mechanism 정독 데이터. 저작권 준수 (발문·풀이 원문 미인용, mechanism·구조·정답·자유도만 라벨링).
metadata:
  source_book: 고쟁이 공통수학1 2025 (이투스북)
  chapter: CH02 항등식과 나머지정리
  page_range_problems: p.26~p.47 (STEP 1 개념 p.26 · STEP 1 p.27~31 · STEP 2 p.32~39 · STEP 3 p.42~47)
  page_range_answers: p.18~p.31 (해설편)
  step1_range: "#078~#103 (26문항, STEP 1 교과서 핵심 유형)"
  step2_range: "#104~#139 (36문항, STEP 2 심화 유형)"
  step3_range: "#140~#161 (22문항, STEP 3 최고난도 유형)"
  total: 84
  extraction_date: 2026-07-14
  updated: 2026-07-16
  format_version: v1.1
  copyright_policy: meta_only — 발문 요지·mechanism·정답만 기록, 원문 발문·풀이 미전사
  tier_mapping:
    STEP_1: star_3·4
    STEP_2: star_5
    STEP_3: star_5_premium
  unit_code: CM1-PL
---

# 고쟁이 공통수학1 CH02 항등식과 나머지정리 · STEP 1·2·3 전문항 Mechanism 데이터

**단원**: CM1-PL (다항식) — 항등식·나머지정리·인수정리·조립제법
**목적**: 정점 문항 mechanism 정본 소스 확장 (5소스 → 6소스). 자체 제작 표본 완전 배제.

## STEP 1 교과서를 정복하는 핵심 유형 (#078~#103, 26문항 · p.27~31)

```yaml
- source: 고쟁이-CM1-CH02-STEP1-#078
  page: 27
  problem_summary: |
    등식 ax²-3x+5 = x²+(1-b)x+c 가 x에 대한 항등식일 때 세 상수 a·b·c의 합 (객관식).
  category: 항등식·계수비교법
  tier: star_4
  _step: STEP1
  unit_code: CM1-PL
  mechanism_primary: 좌우 계수 매칭
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH02-STEP1-#079
  page: 27
  problem_summary: |
    3x²-4x+7 = a(x-1)²+b(x-1)+c 가 x에 대한 항등식일 때 abc 값.
  category: 항등식·전개 후 계수비교
  tier: star_4
  _step: STEP1
  unit_code: CM1-PL
  mechanism_primary: (x-1) 재정렬·계수비교 or x=1 대입
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH02-STEP1-#080
  page: 27
  problem_summary: |
    x³+ax²-4x-5 = (x+1)(x²+bx-5) 가 모든 실수 x에 대해 성립할 때 a+b.
  category: 항등식·인수분해 대응
  tier: star_4
  _step: STEP1
  unit_code: CM1-PL
  mechanism_primary: 우변 전개·좌변 계수비교
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH02-STEP1-#081
  page: 27
  problem_summary: |
    x²-x+4 = a(x+1)(x-2)+bx(x+1)+cx(x-2) 항등식일 때 a+2b+3c (객관식).
  category: 항등식·수치대입법
  tier: star_4
  _step: STEP1
  unit_code: CM1-PL
  mechanism_primary: x=0, -1, 2 대입 → a·b·c 각자 결정
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH02-STEP1-#082
  page: 27
  problem_summary: |
    2kx+(k-2)y-(k+2)=0 이 k에 관계없이 항상 성립하도록 하는 x, y의 x-y 값.
  category: 항등식·매개변수 k에 대한 항등식
  tier: star_4
  _step: STEP1
  unit_code: CM1-PL
  mechanism_primary: k로 정리 후 각 계수를 0으로
  insight_type: I-RT
  depth: 2

- source: 고쟁이-CM1-CH02-STEP1-#083
  page: 28
  problem_summary: |
    임의의 실수 x, y에 대해 a(x+y)+b(2x-3y)+8x-7y=0 성립. 두 상수 a·b에 대해 a²+b².
  category: 항등식·두 변수 계수 매칭
  tier: star_4
  _step: STEP1
  unit_code: CM1-PL
  mechanism_primary: x, y 계수를 각각 0으로
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH02-STEP1-#084
  page: 28
  problem_summary: |
    3x³+ax²-22x+b 를 x²+2x-5 로 나눴을 때 몫 3x-4, 나머지 x-3일 때 ab.
  category: 항등식·나눗셈 A=BQ+R
  tier: star_4
  _step: STEP1
  unit_code: CM1-PL
  mechanism_primary: BQ+R 전개 후 계수비교로 a·b 결정
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH02-STEP1-#085
  page: 28
  problem_summary: |
    (x²+2x-4)³ = a₀+a₁x+…+a₆x⁶ 이 모든 x에 성립할 때 (1) a₀+…+a₆ (2) a₀-a₁+a₂-…+a₆.
  category: 항등식·수치대입법 (x=1, x=-1)
  tier: star_4
  _step: STEP1
  unit_code: CM1-PL
  mechanism_primary: x=1 및 x=-1 대입으로 계수의 부호별 합
  insight_type: I-EQV
  depth: 2

- source: 고쟁이-CM1-CH02-STEP1-#086
  page: 28
  problem_summary: |
    (1) x³-3x²+5x+2 를 x-1 로 나눈 나머지 (2) 8x³+4x-3 을 2x+1 로 나눈 나머지 (2문).
  category: 나머지정리
  tier: star_4
  _step: STEP1
  unit_code: CM1-PL
  mechanism_primary: f(1) 및 f(-1/2) 계산
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH02-STEP1-#087
  page: 28
  problem_summary: |
    x¹²+ax⁵-3 을 x+1 로 나눈 나머지가 6일 때 상수 a (객관식).
  category: 나머지정리·미지수 결정
  tier: star_4
  _step: STEP1
  unit_code: CM1-PL
  mechanism_primary: f(-1)=6 방정식 풀이
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH02-STEP1-#088
  page: 28
  problem_summary: |
    x²+ax-4, x²-x+a 를 각각 x+2 로 나눈 나머지가 서로 같을 때 상수 a.
  category: 나머지정리·조건 등식
  tier: star_4
  _step: STEP1
  unit_code: CM1-PL
  mechanism_primary: f(-2)=g(-2) 방정식 풀이
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH02-STEP1-#089
  page: 29
  problem_summary: |
    P(x) 를 (x+3)(x-1) 로 나눈 나머지가 3x+5. (x+2)P(x-4) 를 x-1 로 나눈 나머지 (객관식).
  category: 나머지정리·합성 대입
  tier: star_4
  _step: STEP1
  unit_code: CM1-PL
  mechanism_primary: P(-3)·P(1) 도출 후 x=1 대입 → (1+2)·P(-3)
  insight_type: I-BW
  depth: 2

- source: 고쟁이-CM1-CH02-STEP1-#090
  page: 29
  problem_summary: |
    f(x) 를 x+2 로 나눈 나머지 4, x-3 으로 나눈 나머지 -6. (x+2)(x-3) 으로 나눈 나머지 (5택).
  category: 나머지정리·이차 나머지 R(x)=ax+b
  tier: star_4
  _step: STEP1
  unit_code: CM1-PL
  mechanism_primary: R(-2)=4, R(3)=-6 연립
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH02-STEP1-#091
  page: 29
  problem_summary: |
    f(x)를 (x-2)(x+2)로 나눈 나머지 2, g(x)를 x(x+2)로 나눈 나머지 x-5. 3f(x)-g(x)를 x+2로 나눈 나머지.
  category: 나머지정리·선형결합
  tier: star_4
  _step: STEP1
  unit_code: CM1-PL
  mechanism_primary: f(-2), g(-2) 각각 도출 후 3f(-2)-g(-2)
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH02-STEP1-#092
  page: 29
  problem_summary: |
    f(x)를 x²-3x+2 로 나눈 나머지 5, x²+3x+2 로 나눈 나머지 2x+3. f(x)를 x²+x-2 로 나눈 나머지 R(x), R(4).
  category: 나머지정리·다중 조건 결합
  tier: star_4
  _step: STEP1
  unit_code: CM1-PL
  mechanism_primary: f(1), f(2), f(-1), f(-2) 도출 → x²+x-2=(x-1)(x+2) → R(1), R(-2) 연립
  insight_type: I-CON
  depth: 3

- source: 고쟁이-CM1-CH02-STEP1-#093
  page: 29
  problem_summary: |
    f(x)를 x-1로 나눈 몫 Q(x), 나머지 -3. Q(x)를 x-3으로 나눈 나머지 2. f(x)를 x-3으로 나눈 나머지.
  category: 나머지정리·몫 재나눗셈
  tier: star_4
  _step: STEP1
  unit_code: CM1-PL
  mechanism_primary: f(x)=(x-1)Q(x)-3, x=3 대입 → 2Q(3)-3, Q(3)=2 대입
  insight_type: I-CON
  depth: 2

- source: 고쟁이-CM1-CH02-STEP1-#094
  page: 29
  problem_summary: |
    f(x)를 x²+2로 나눈 몫 Q(x) 나머지 3x+5, x²-2x-3으로 나눈 나머지 x-3. Q(x)를 x+1로 나눈 나머지.
  category: 나머지정리·몫에 대한 조건
  tier: star_4
  _step: STEP1
  unit_code: CM1-PL
  mechanism_primary: f(-1) 도출 후 f(x)=(x²+2)Q(x)+3x+5 → Q(-1) 방정식
  insight_type: I-BW
  depth: 2

- source: 고쟁이-CM1-CH02-STEP1-#095
  page: 30
  problem_summary: |
    98·99·103 을 52로 나눈 나머지 구하는 과정 서술. (가)(나)(다) 알맞은 수를 a·b·c로 놓고 a-b+c.
  category: 나머지정리·수치 활용
  tier: star_4
  _step: STEP1
  unit_code: CM1-PL
  mechanism_primary: 치환 x=50 후 f(x)=(2x-2)(2x-1)(2x+3), f(-2) 계산
  insight_type: I-CON
  depth: 2

- source: 고쟁이-CM1-CH02-STEP1-#096
  page: 30
  problem_summary: |
    f(x)=x³+3x²+ax-2 가 x+2로 나누어떨어질 때 상수 a (객관식).
  category: 인수정리
  tier: star_4
  _step: STEP1
  unit_code: CM1-PL
  mechanism_primary: f(-2)=0 방정식 풀이
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH02-STEP1-#097
  page: 30
  problem_summary: |
    f(x)=x³+ax²-2x+6에 대해 f(6x+1)이 3x-1로 나누어떨어질 때 f(1) 값 (a 상수).
  category: 인수정리·합성 대입
  tier: star_4
  _step: STEP1
  unit_code: CM1-PL
  mechanism_primary: f(6·(1/3)+1)=f(3)=0 → a 도출 → f(1) 대입
  insight_type: I-BW
  depth: 2

- source: 고쟁이-CM1-CH02-STEP1-#098
  page: 30
  problem_summary: |
    P(x)=x³+ax²+bx-4 가 (x-1)(x-2)로 나누어떨어질 때 b-a.
  category: 인수정리·이중 조건
  tier: star_4
  _step: STEP1
  unit_code: CM1-PL
  mechanism_primary: P(1)=0, P(2)=0 연립
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH02-STEP1-#099
  page: 30
  problem_summary: |
    P(x+2)를 x-4로 나눈 나머지 15, x+1로 나누어떨어짐. P(x)를 (x-1)(x-6)으로 나눈 나머지 R(x), R(5).
  category: 인수정리·좌표 이동
  tier: star_4
  _step: STEP1
  unit_code: CM1-PL
  mechanism_primary: P(6)=15, P(1)=0 도출 → R(x) 결정 → R(5) 계산
  insight_type: I-CON
  depth: 2

- source: 고쟁이-CM1-CH02-STEP1-#100
  page: 31
  problem_summary: |
    x³-4x²+5x-1 을 x-3으로 나눈 몫 Q(x), 나머지 r일 때 Q(r) 값 (객관식).
  category: 조립제법·연쇄 함숫값
  tier: star_4
  _step: STEP1
  unit_code: CM1-PL
  mechanism_primary: 조립제법으로 Q(x), r 도출 후 Q(r) 대입
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH02-STEP1-#101
  page: 31
  problem_summary: |
    x³+ax²+bx+c 를 x+2로 나눈 조립제법 표 (마지막 행 5 -2 -1) 주어짐. a+b+c.
  category: 조립제법 역산
  tier: star_4
  _step: STEP1
  unit_code: CM1-PL
  mechanism_primary: 조립제법 규칙 역산으로 a, b, c 결정
  insight_type: I-BW
  depth: 2

- source: 고쟁이-CM1-CH02-STEP1-#102
  page: 31
  problem_summary: |
    3x³+4x²-13x+8 = (3x+c)(x²+dx+e)+2 의 조립제법(2/3 대입 형태)에서 a+b+c+d+e (정수).
  category: 조립제법·ax-b 꼴
  tier: star_4
  _step: STEP1
  unit_code: CM1-PL
  mechanism_primary: 3x+c ↔ x-(-c/3) 변환·조립제법 몫 3배 규칙
  insight_type: I-EQV
  depth: 2

- source: 고쟁이-CM1-CH02-STEP1-#103
  page: 31
  problem_summary: |
    f(x)를 x-2로 나눈 몫을 x+1로 다시 나누는 조립제법 (숫자 부분 채우기). f(1) 값 (객관식).
  category: 조립제법·중첩 나눗셈
  tier: star_4
  _step: STEP1
  unit_code: CM1-PL
  mechanism_primary: 조립제법 표 채우기 후 f(x) 재구성 → f(1)
  insight_type: I-BW
  depth: 2
```

---

## STEP 2 유형 분류 (원본 태그)
- 유형 01. 항등식의 성질을 이용한 미정계수법: #104~#109 (6문항)
- 유형 02. 나머지정리: #110~#129 (20문항)
- 유형 03. 인수 정리: #130~#137 (8문항)
- 유형 04. 조립제법: #138~#139 (2문항)

## STEP 3 (최고난도, 유형 미분류): #140~#161 (22문항)

---

## STEP 2 · 유형 01 항등식의 성질을 이용한 미정계수법

- source: 고쟁이-CM1-CH02-STEP2-#104
  category: 항등식·미정계수법
  mechanism_primary: 항등식 수치대입법 (특정 x 값 대입)
  mechanism_secondary: $x(x-1)$ 인수 활용 → $x=0, 1$ 대입으로 상수·계수 결정 → $x=-1$ 대입으로 $f(-1)$ 도출
  structure: $x^8 + ax^3 + b = x(x-1)f(x) - 2x + 5$ 항등식에서 상수·계수 결정 후 $f(-1)$ 값 요구
  target: $f(-1)$ 값
  answer: 1
  choices: 5지선다
  ★_추정: 3
  자유도: 낮음 (표준 수치대입 절차)
  함정: 미지수 $f(x)$를 직접 알 수 없다는 인식 부족 시 계수비교로 헛발

- source: 고쟁이-CM1-CH02-STEP2-#105
  category: 항등식·미정계수법 (다변수)
  mechanism_primary: 다변수 항등식 계수비교법
  mechanism_secondary: $x, y, z$에 대해 정리 → 각 변수 계수 = 0 연립 → $a, b, c$ 결정
  structure: $(x+y)a - (y-z)b - (y+z)c - 3x + z = 0$이 $x, y, z$의 값에 관계없이 성립 → $abc$
  target: $abc$
  answer: 6
  choices: 5지선다
  ★_추정: 3
  자유도: 낮음 (계수비교 정형)
  선행: STEP1 #83

- source: 고쟁이-CM1-CH02-STEP2-#106
  category: 항등식·미정계수법 (조건부)
  mechanism_primary: 조건 $x-y=1$ 활용 → 한 변수 소거 → 새 항등식 유도
  mechanism_secondary: $x = y+1$ 대입 후 y에 대한 항등식 → 계수비교
  structure: $x-y=1$을 만족하는 모든 $x, y$에 대해 $(a+b)x + (b-2a)y = 9$ → $ab$
  target: $ab$
  answer: 18
  choices: 5지선다
  ★_추정: 3
  자유도: 중 (조건 처리 방법 2가지: 대입 vs 두 값 대입)
  함정: "조건부 항등식"을 무조건적 항등식과 혼동

- source: 고쟁이-CM1-CH02-STEP2-#107
  category: 항등식·유리식
  mechanism_primary: 분수식 = 상수 조건 → 분자 = 상수 × 분모 항등식 변환
  mechanism_secondary: $\frac{2x-6y+a}{bx+3y+5} = k$ → $2x-6y+a = k(bx+3y+5)$ → 계수비교
  structure: $\frac{2x-6y+a}{bx+3y+5}$가 $x, y$의 값에 관계없이 일정한 값 → $a+b$
  target: $a+b$
  answer: -11
  choices: 5지선다
  ★_추정: 3
  자유도: 중 (분수식 → 항등식 변환 아이디어)
  함정: $k$의 값 추정 없이 접근 시 방정식 3개 부족

- source: 고쟁이-CM1-CH02-STEP2-#108
  category: 항등식·다항함수 항등식
  mechanism_primary: $f(x)$에 $x$ 대신 $(a-2x)$ 대입 → 계수비교
  mechanism_secondary: $(a-2x)^3, (a-2x)^2$ 전개 후 $x$에 대한 항등식으로 정리 → 4계수 비교로 $a, b, c$ 결정
  structure: $f(x) = x^3 - 2x^2 + 5$, $f(a-2x) = -8x^3 + 4x^2 + bx + c$ 항등식 → $a-b+c$
  target: $a-b+c$
  answer: 3
  choices: 5지선다
  ★_추정: 3~4
  자유도: 중 (전개 노동 + 계수비교)
  함정: 최고차항 계수 부호 실수 (−8 대응)

- source: 고쟁이-CM1-CH02-STEP2-#109
  category: 항등식·미정계수법
  mechanism_primary: 수치대입 + 계수비교 결합
  mechanism_secondary: $x=2, 1$ 대입 → 두 방정식 연립 → $ab, a-b$ 결정 → $a^4b - ab^4 = ab(a^3-b^3) = ab(a-b)(a^2+ab+b^2)$ 인수분해 활용
  structure: $3x^2-4x-1 = ab(x-2) + (a-b)(x-1)^2$ → $a^4b - ab^4$
  target: $a^4b - ab^4$
  answer: 90
  choices: 없음 (주관식)
  ★_추정: 4
  자유도: 중~높음 (수치대입 후 인수분해로 대칭식 활용)
  함정: 전개해서 계수비교 시 계산량 폭증

---

## STEP 2 · 유형 02 나머지정리

- source: 고쟁이-CM1-CH02-STEP2-#110
  category: 나머지정리·다중 나눗셈 (인수 공통)
  mechanism_primary: 나눗셈 분해 (한 인수 = 두 인수 곱)
  mechanism_secondary: $2x^3 - 6x^2 + 5x = 2x(x^2 - 3x + 5/2)$ 인수화 → $-2x^2 + ax + 7$을 $x^2 - 3x + 5/2$로 나눈 나머지 $4x+b$ 조건 → 계수비교
  structure: $f(x)$를 $2x^3-6x^2+5x$로 나눈 나머지 = $-2x^2+ax+7$, $x^2-3x+5/2$로 나눈 나머지 = $4x+b$ → $a+b$
  target: $a+b$
  answer: 22
  choices: 없음 (주관식)
  ★_추정: 4
  자유도: 중~높음 (나눗셈 분해 → 나머지의 나머지 아이디어)
  함정: 두 나머지 관계를 직접 계산으로 잡으려는 헛발

- source: 고쟁이-CM1-CH02-STEP2-#111
  category: 나머지정리·인수정리 결합
  mechanism_primary: 인수 관계 세팅 $f(x) = (x^2+x+1)(ax+b)$
  mechanism_secondary: $f(x)+6$이 $x^2+2$로 나누어떨어짐 → $f(x)+6 = (x^2+2)(ax+c)$ → 계수비교로 $a, b, c$ 결정
  structure: 삼차식 $f(x)$가 $x^2+x+1$로 나누어떨어지고 $f(x)+6$이 $x^2+2$로 나누어떨어짐 · $f(0)=2$ → $f(1)$
  target: $f(1)$
  answer: 12
  choices: 5지선다
  ★_추정: 4
  자유도: 중~높음 (동시 인수 조건 처리)
  함정: 최고차항 계수 일치 조건 놓침

- source: 고쟁이-CM1-CH02-STEP2-#112
  category: 나머지정리·조건 결합
  mechanism_primary: 대입 + 곱셈공식 (제곱 차 = 합·차)
  mechanism_secondary: $x=2$ 대입 → $P(2)+Q(2), P(2)-Q(2)$ 관계 → $\{P(2)\}^2 - \{Q(2)\}^2 = (P(2)+Q(2))(P(2)-Q(2))$
  structure: (가) $P(x)+Q(x) = 3x-1$ · (나) $\{P(x)\}^2 - \{Q(x)\}^2 = 3x^2 - 16x + 5$ → $P(2)-Q(2)$
  target: $P(2)-Q(2)$
  answer: -3
  choices: 5지선다
  ★_추정: 4
  자유도: 중 (곱셈공식 인식이 관문)

- source: 고쟁이-CM1-CH02-STEP2-#113
  category: 항등식·전개 (내림차식 기저)
  mechanism_primary: 특수 기저 $P_n(x) = x(x-1)\cdots(x-n+1)$ 활용
  mechanism_secondary: $x=0, 1, 2$ 대입 → $d, c, b$ 순차 결정 → $x^3$ 계수 비교로 $a$ 결정
  structure: $P_n(x) = x(x-1)\cdots(x-n+1)$, $(2x-1)^3 = aP_3(x) + bP_2(x) + cP_1(x) + d$ → $a+b+c+d$
  target: $a+b+c+d$
  answer: 21
  choices: 없음 (주관식)
  ★_추정: 4
  자유도: 높음 (내림차 기저 인식·순차대입 전략)
  함정: 무리 전개 시 계산량 큼
  선행: STEP1 #81

- source: 고쟁이-CM1-CH02-STEP2-#114
  category: 항등식·전개 계수 특정
  mechanism_primary: 곱셈공식 응용 (부분 전개로 특정 계수 추출)
  mechanism_secondary: $(2x-1)^3 = 8x^3 - 12x^2 + 6x - 1$ 부분 전개 → $x^2, $ 상수항 특정 계수 계산 → $x=1$ 대입 + 상수항 제거로 $a+b+c+e$ 도출
  structure: $(2x-1)^3(x+1)^2 = ax^5 + bx^4 + cx^3 + dx^2 + ex + f$ → $a+b+c+e$
  target: $a+b+c+e$
  answer: 6
  choices: 없음 (주관식)
  ★_추정: 4
  자유도: 중~높음 ($x=1$ 대입만으로는 부족, 특정 계수 뽑기 필요)
  선행: STEP1 #85

- source: 고쟁이-CM1-CH02-STEP2-#115
  category: 항등식·전개 계수 부분합 (서술형)
  mechanism_primary: 짝·홀 부분합 표준 기법 ($x=1, -1$ 대입 → 더하기·빼기)
  mechanism_secondary: (1) 상수항·최고차 계수 → $x=0$·최고차 계수 계산 (2) 짝수 지수 부분합 → $(f(1)+f(-1))/2$ (3) 홀수 지수 부분합 → $(f(1)-f(-1))/2$
  structure: $(x^3-2x-4)^4 = a_0 + a_1 x + \cdots + a_{12}x^{12}$ 3부분 값 요구 (서술형)
  target: (1) $a_0 + a_{12}$ (2) 짝수 지수 부분합 (3) 홀수 지수 부분합
  answer: (1) 257 (2) 353 (3) 272
  choices: 없음 (서술형)
  ★_추정: 4
  자유도: 중 (표준 기법 3회 적용)
  함정: 홀·짝 부호 실수·상수항 별도 처리 누락
  선행: STEP1 #85

- source: 고쟁이-CM1-CH02-STEP2-#116
  category: 항등식·전개 계수 (치환)
  mechanism_primary: $(x+2)$ 다항식 기저 → 치환 $x = -1$ 및 $x = -2$
  mechanism_secondary: $x=-1$ → $a_0 + a_1 + \cdots + a_{10}$ 값 · $x=-2$ → $a_0$ 값 · $x^{10}$ 계수 비교 → $a_{10}=1$ · 세 관계로 $a_1 + a_2 + \cdots + a_9$ 도출
  structure: $x^{10} + 2 = a_{10}(x+2)^{10} + a_9(x+2)^9 + \cdots + a_1(x+2) + a_0$ → $a_1 + a_2 + \cdots + a_9$
  target: $a_1 + a_2 + \cdots + a_9$
  answer: -1024
  choices: 5지선다
  ★_추정: 4
  자유도: 중 (기저 치환 표준)

- source: 고쟁이-CM1-CH02-STEP2-#117
  category: 항등식·전개 계수 (분수 대입)
  mechanism_primary: 분수 값 $x = 1/3, -1/3$ 대입
  mechanism_secondary: 좌변 = 0 · 좌변 = $(1-3^5)^5 = $ 형태 → 두 값 빼기로 홀수 지수 부분합 도출
  structure: $(3x^2 - x - 1)^5 = a_0 + a_1 x + \cdots + a_{10}x^{10}$ → $a_1/3 + a_3/3^3 + a_5/3^5 + a_7/3^7 + a_9/3^9$
  target: $a_1/3 + a_3/3^3 + a_5/3^5 + a_7/3^7 + a_9/3^9$
  answer: $(1-3^5)/(2 \times 3^5)$
  choices: 5지선다
  ★_추정: 4
  자유도: 중~높음 (홀수 부분합의 분수 대입 응용)
  함정: 대입값 발상 어려움

- source: 고쟁이-CM1-CH02-STEP2-#118
  category: 나머지정리·함수 관계식 조건
  mechanism_primary: 관계식 $P(x+3) = P(1-x)$ 활용 → 대칭축 $x=−1$ 인식 → $P(3) = P(1) = 0$
  mechanism_secondary: 인수정리 → $(x+1)P(x)$가 $(x-1)(x-3)$을 인수로 · 나머지 $R(x) = ax+b$ 세팅 후 $x=1, 3$ 대입 · 다항식 조건 $P(x)+3x$가 $x-1$로 나누어 나머지 6 → $P(1) = 3$
  structure: $P(x+3) = P(1-x)$ 항등식 · $P(x)+3x$를 $x-1$로 나눈 나머지 6 · $(x+1)P(x)$를 $(x-1)(x-3)$으로 나눈 나머지 $R(x)$ → $R(4)$
  target: $R(4)$
  answer: 15
  choices: 5지선다
  ★_추정: 4~5
  자유도: 높음 (관계식 → 대칭 파악 아이디어)
  함정: $P(1), P(3)$ 관계 인식 못 하면 미지수 폭증
  선행: STEP1 #90

- source: 고쟁이-CM1-CH02-STEP2-#119
  category: 나머지정리·나머지 곱 관계
  mechanism_primary: 곱셈공식 $a^3 + b^3 = (a+b)^3 - 3ab(a+b)$
  mechanism_secondary: $x=2$ 대입 → $f(2)+g(2) = 5$ · $\{f(2)\}^3 + \{g(2)\}^3 = 80$ → 곱셈공식으로 $f(2)g(2)$ 도출 → 이것이 곧 $f(x)g(x)$의 $x-2$ 나머지
  structure: $f+g$를 $x-2$로 나눈 나머지 5, $f^3+g^3$을 $x-2$로 나눈 나머지 80 → $fg$를 $x-2$로 나눈 나머지
  target: $fg$를 $x-2$로 나눈 나머지
  answer: 3
  choices: 없음 (주관식)
  ★_추정: 4
  자유도: 중 (곱셈공식 인식이 관문)
  선행: STEP2 #112

- source: 고쟁이-CM1-CH02-STEP2-#120
  category: 나머지정리·함수 관계식 반복
  mechanism_primary: 관계식 $f(x+1) = f(x) + 3x^2 - x$ 반복 대입
  mechanism_secondary: $f(0)=3$ (=$x$ 나머지) → $f(1), f(2)$ 순차 계산 → $f(x)$를 $(x-1)(x-2)$로 나눈 나머지 $ax+b$ 세팅
  structure: $f(x+1) = f(x) + 3x^2 - x$ 관계 · $f(x)$를 $x$로 나눈 나머지 3 → $f(x)$를 $x^2-3x+2$로 나눈 나머지
  target: $f(x)$를 $x^2-3x+2$로 나눈 나머지
  answer: $2x+1$
  choices: 5지선다
  ★_추정: 4
  자유도: 중 (관계식 반복 대입 표준)

- source: 고쟁이-CM1-CH02-STEP2-#121
  category: 나머지정리·제곱-곱 관계 (부호)
  mechanism_primary: 조건 $\{f(x+3)\}^2 - 4 = x^2(x+2)(x-2)$ 우변 인수분해
  mechanism_secondary: 우변 = $x^2(x^2-4) = (x^2-2)^2 - $ 완전제곱형태로 변환 시도 → $\{f(x+3)\}^2 = (x^2-2)^2$ → $f(x+3) = \pm(x^2-2)$ · 최고차항 양수 조건 → $f(x+3) = x^2-2$ · 나머지정리로 $f(x+1)$을 $x+k$로 나눈 나머지 = 7 조건 → $k$ 값 합
  structure: 최고차 계수 양수 삼차식 (실제는 이차식) $f$ · $\{f(x+3)\}^2 - 4 = x^2(x+2)(x-2)$ · $f(x+1)$을 $x+k$로 나눈 나머지 = 7 → 모든 $k$의 합
  target: 모든 실수 $k$의 값의 합
  answer: -4
  choices: 없음 (주관식)
  ★_추정: 5
  자유도: 높음 (완전제곱 형태 인식 → $f(x+3)$ 부호 결정 → 이차방정식 근의 합)
  함정: 우변을 $(x^2-2)^2 - 4$로 변형하는 아이디어 발견 어려움

- source: 고쟁이-CM1-CH02-STEP2-#122
  category: 나머지정리·전개 계수 부분합 (몫 활용)
  mechanism_primary: 몫의 홀수 지수 계수 부분합 → $x=1, -1$ 대입 후 뺄셈
  mechanism_secondary: $x^9 = (x+2)Q(x) + f(-2)$이고 $f(-2) = -512$ · $Q(1), Q(-1)$ 값 도출 → 부분합
  structure: $x^9$을 $x+2$로 나눈 몫 $Q(x)$ · $Q(x) = a_0 + a_1 x + \cdots + a_8 x^8$ → $a_1 + a_3 + a_5 + a_7$
  target: $a_1 + a_3 + a_5 + a_7$
  answer: -170
  choices: 없음 (주관식)
  ★_추정: 4
  자유도: 중 (표준 기법 응용)
  선행: STEP2 #115

- source: 고쟁이-CM1-CH02-STEP2-#123
  category: 나머지정리·몫의 계수 합
  mechanism_primary: $x=1$ 대입으로 계수의 합 계산
  mechanism_secondary: $x^{20} + 2x + 5 = (x^2+x)Q(x) + ax+b$ · $x=0, -1$ 대입으로 $a, b$ 결정 → $x=1$ 대입 시 $Q(1)$ 도출
  structure: $x^{20} + 2x + 5$를 $x^2 + x$로 나눈 몫 $Q(x)$ → $Q(x)$의 상수항을 포함한 모든 항의 계수의 합
  target: $Q(1)$
  answer: 1
  choices: 없음 (주관식)
  ★_추정: 4
  자유도: 중 (몫의 계수 합 표준 기법)

- source: 고쟁이-CM1-CH02-STEP2-#124
  category: 나머지정리·중복 인수 나눗셈 (조건 결합)
  mechanism_primary: $(x+3)^2$ 나눗셈으로 나머지 $R(x) = ax + b$ 세팅
  mechanism_secondary: 조건 (가) 나머지 = 2 → $f(-3) = 2$ · 조건 (나) $f(x)$를 $(x+3)^2$로 나눈 몫과 나머지 서로 같음 → 몫 = 나머지 = 일차식 · $R(0) = R(-2)$ 조건 → $b = 3a+2$ → $f(x)$ 확정 → $f(-4)$
  structure: 삼차식 $f(x)$ · $f$를 $x+3$으로 나눈 나머지 2 · $f$를 $(x+3)^2$로 나눈 몫과 나머지 같음 · $R(0) = R(-2)$ → $f(-4)$
  target: $f(-4)$
  answer: 20
  choices: 없음 (주관식)
  ★_추정: 5
  자유도: 높음 (몫 = 나머지 조건 세팅 아이디어)
  함정: 조건 (나) 해석 어려움

- source: 고쟁이-CM1-CH02-STEP2-#125
  category: 나머지정리·확장 (스키마 예시)
  mechanism_primary: 나머지 $R(x)$를 $(x-2)^2$ 나눔 나머지 형태로 세팅
  mechanism_secondary: $R(x) = a(x-2)^2 + x + 3$ · $x=1$ 대입 → $R(1) = f(1) = 5$ → $a=1$ · $R(x) = (x-2)^2 + x + 3$ → $R(3)$
  structure: $f$를 $(x-2)^2$로 나눈 나머지 $x+3$, $x-1$로 나눈 나머지 5, $(x-2)^2(x-1)$로 나눈 나머지 $R(x)$ → $R(3)$
  target: $R(3)$
  answer: 7
  choices: 없음 (주관식)
  ★_추정: 4
  자유도: 중~높음 (나머지 형태 세팅 후 미정계수)
  스키마_예시: p.40 스키마 예시 문제

- source: 고쟁이-CM1-CH02-STEP2-#126
  category: 나머지정리·확장 (삼차 나머지)
  mechanism_primary: 나머지 $R(x) = a(x^3+5) + x^2 - 2x$ 세팅
  mechanism_secondary: $x=1$ 대입 → $R(1) = f(1) = 11$ → $a=2$ · $R(x) = 2(x^3+5) + x^2 - 2x$ → $R(2)$
  structure: $f$를 $x^3+5$로 나눈 나머지 $x^2-2x$, $x-1$로 나눈 나머지 11 → $(x^3+5)(x-1)$로 나눈 나머지 $R(x)$ · $R(2)$
  target: $R(2)$
  answer: 26
  choices: 5지선다
  ★_추정: 4
  자유도: 중~높음 (#125 스키마 유사)

- source: 고쟁이-CM1-CH02-STEP2-#127
  category: 나머지정리·차수 논리 (교육청 기출)
  mechanism_primary: 차수 비교 → $P(x)$ 일차식으로 확정
  mechanism_secondary: $(x-2)P(x) - x^2 = P(x)Q(x) + P(x) - 3x$ 관계 · 나머지 차수 < 나눗수 차수 조건 → 차수 계산으로 $P(x)$가 일차식 · $P(x) = 3x+b$ 세팅 후 $Q(x) = x-3, b=1$ 결정 → $P(30)$
  structure: $(x-2)P(x) - x^2$를 $P(x)-x$로 나눈 몫 $Q(x)$, 나머지 $P(x)-3x$ · $P(x)$를 $Q(x)$로 나눈 나머지 10 → $P(30)$ (단, $P(x)-x \neq 0$)
  target: $P(30)$
  answer: 91
  choices: 없음 (주관식)
  ★_추정: 5
  자유도: 높음 (차수 논리 → $P$ 차수 확정 발상)
  함정: 미지수 폭증 상황에서 차수 조건 활용 못 함
  출처: 교육청 기출

- source: 고쟁이-CM1-CH02-STEP2-#128
  category: 나머지정리·거듭제곱 나머지 (자연수)
  mechanism_primary: $x = a$ 치환 항등식 변환 (수치 → 다항식)
  mechanism_secondary: (1) $253 = 254 - 1$ · $x^{11}$을 $x+1$로 나눈 나머지 $f(-1) = -1$ · $x=253$ 대입 · (2) $8^n$ mod 7 = 1 규칙성 + 등비수열 100항 → 100 mod 7 = 3
  structure: (1) $253^{11}$을 254로 나눈 나머지 (2) $8^{100} + 8^{99} + \cdots + 8 + 1$을 7로 나눈 나머지
  target: (1) 253 (2) 3
  answer: (1) 253 (2) 3
  choices: 없음 (주관식)
  ★_추정: 4~5
  자유도: 높음 (수치 문제 → 다항식 나머지정리로 변환하는 발상)
  함정: 수치 계산으로 접근 시 발산

- source: 고쟁이-CM1-CH02-STEP2-#129
  category: 나머지정리·거듭제곱 (합성곱 나눗수)
  mechanism_primary: $99 \times 101 = (x-1)(x+1)$ 치환 (x=100) → 항등식 변환
  mechanism_secondary: $10^{39} = 10 \times (10^2)^{19} = 10 x^{19}$ · $10x^{19}$을 $(x-1)(x+1)$로 나눈 나머지 $ax+b$ 세팅 → $x = 1, -1$ 대입 → $a=10, b=0$ → 다시 $x=100$ 대입
  structure: $10^{39}$을 $99 \times 101$로 나눈 나머지
  target: 나머지
  answer: 1000
  choices: 5지선다
  ★_추정: 5
  자유도: 높음 (수치 → 항등식 변환 · 나눗수 인수분해 발상)

---

## STEP 2 · 유형 03 인수 정리

- source: 고쟁이-CM1-CH02-STEP2-#130
  category: 인수정리·인수 조건
  mechanism_primary: 인수 조건 $x^2 - 6x + 8 = (x-2)(x-4)$ → $f(2) = -4, f(4) = -8$
  mechanism_secondary: $(x+2)f(x+5)$의 $(x+1)(x+3)$ 나머지 $R(x) = ax+b$ 세팅 → $x = -1, -3$ 대입 시 $f(4), f(2)$ 활용
  structure: $f(x)+2x$가 $x^2-6x+8$로 나누어떨어짐 · $(x+2)f(x+5)$를 $x^2+4x+3$으로 나눈 나머지 $R(x)$ → $R(-4)$
  target: $R(-4)$
  answer: 10
  choices: 5지선다
  ★_추정: 4
  자유도: 중~높음 (평행이동 인식 필요)
  선행: STEP1 #89

- source: 고쟁이-CM1-CH02-STEP2-#131
  category: 인수정리·이중 인수 조건
  mechanism_primary: 삼차식 $P(x) - 2x$의 $(x+2)^2$ 인수 세팅
  mechanism_secondary: $P(x) - 2x = (x+2)^2(ax+b)$ 세팅 · $1 - P(x)$가 $x^2+4x+3 = (x+1)(x+3)$으로 나누어떨어짐 → $P(-1) = 1, P(-3) = 1$ → $a, b$ 결정 → $P(2)$
  structure: 삼차식 $P(x)$ · $P(x)-2x$가 $(x+2)^2$로 나누어떨어짐 · $1-P(x)$가 $x^2+4x+3$으로 나누어떨어짐 → $P(2)$
  target: $P(2)$
  answer: -44
  choices: 5지선다
  ★_추정: 5
  자유도: 높음 (이중 인수·부호 관리)
  함정: $1-P$ 부호 처리 실수

- source: 고쟁이-CM1-CH02-STEP2-#132
  category: 인수정리·인수 재구성
  mechanism_primary: $P(x) - x$가 $(x-1)(x-2)(x-3)$으로 나누어떨어짐 인식
  mechanism_secondary: $P(1)-1 = P(2)-2 = P(3)-3 = 0$ → 최고차 계수 $-2$인 삼차식 → $P(x) - x = -2(x-1)(x-2)(x-3)$ → $P(-2)$
  structure: 최고차 계수 $-2$ 삼차식 $P$ · $P(1)=1, P(2)=2, P(3)=3$ → $P(x)$를 $x+2$로 나눈 나머지
  target: $P(-2)$
  answer: 118
  choices: 5지선다
  ★_추정: 4
  자유도: 중 (표준 shift 기법)

- source: 고쟁이-CM1-CH02-STEP2-#133
  category: 인수정리·shift 기법 (스키마 예시)
  mechanism_primary: $f(1)-1/4 = f(2)-3/4 = f(3)-4/4 = 0$ 형태
  mechanism_secondary: $f(x) - (x+1)/4 = (x-1)(x-2)(x-3)$ → $f(7)$
  structure: 최고차 계수 1 삼차식 · $f$를 $x-1$로 나눈 나머지 $1/2$ · $4f(2)-3=0, f(3)=1$ → $f(x+3)$을 $x-4$로 나눈 나머지
  target: $f(7)$
  answer: 122
  choices: 5지선다
  ★_추정: 5
  자유도: 높음 ($f$ 값에서 일차식 $(x+1)/4$ 발견하는 발상)
  스키마_예시: p.41 스키마 예시 문제

- source: 고쟁이-CM1-CH02-STEP2-#134
  category: 인수정리·shift 기법 (서술형)
  mechanism_primary: $f(x) - (x+k)$가 $(x-1)(x-2)(x-3)$으로 나누어떨어짐 세팅
  mechanism_secondary: 관계 $f(1)-1 = f(2)-2 = f(3)-3 = k$ (상수) → $f(x) - x - k = a(x-1)(x-2)(x-3)$ · 조건 $x(x+1)$ 나머지 = $-17x-10$ → $f(0), f(-1)$ 값 → $a, k$ 결정 → $f(-2)$
  structure: 삼차식 $f$ · $f(1)-1 = f(2)-2 = f(3)-3$ · $f$를 $x(x+1)$로 나눈 나머지 $-17x-10$ → $f(-2)$ (서술형)
  target: $f(-2)$
  answer: 42
  choices: 없음 (서술형)
  ★_추정: 5
  자유도: 높음 (shift 기법 + 두 미지수 연립)
  배점: $f(-1), f(0)$ 20% · $f(x)$ 식 세우기 70% · $f(-2)$ 값 10%

- source: 고쟁이-CM1-CH02-STEP2-#135
  category: 인수정리·항등식 조건
  mechanism_primary: 항등식에 $x = -3, 3, 6$ 대입 → $f(4) = f(-2) = f(1) = 0$ 도출
  mechanism_secondary: 삼차식 인수 세팅 $f(x) = a(x+2)(x-1)(x-4)$ · $f(3)=10$ → $a=-1$ · $f(2)$
  structure: $(x-6)f(x+1) = (x+3)f(x-2)$ 항등식 · $f(3) = 10$ → $f(2)$
  target: $f(2)$
  answer: 8
  choices: 없음 (주관식)
  ★_추정: 5
  자유도: 높음 (항등식 → 3개 근 발견하는 대입 전략)
  선행: STEP1 #118

- source: 고쟁이-CM1-CH02-STEP2-#136
  category: 인수정리·조건 결합 (교육청 변형)
  mechanism_primary: (가) $Q = -3P$ · (나) $PQ = -3P^2$가 $(x+3)(x-2)$로 나누어떨어짐 → $P^2$가 $(x+3)(x-2)$의 인수 가짐 → $P$가 $(x+3)(x-2)$ 인수 가짐
  mechanism_secondary: $P(x) = a(x+3)(x-2)$ · $P(1) = 4$로 $a=-1$ · $Q(x) = 3(x+3)(x-2)$ · $Q(3)$
  structure: 이차다항식 $P, Q$ · $3P + Q = 0$ · $PQ$가 $x^2+x-6$으로 나누어떨어짐 · $P(1)=4$ → $Q(3)$
  target: $Q(3)$
  answer: 18
  choices: 없음 (주관식)
  ★_추정: 4
  자유도: 중~높음 (제곱 인수 → 근 인수 발상)
  출처: 교육청 변형

- source: 고쟁이-CM1-CH02-STEP2-#137
  category: 인수정리·다항식 나눗셈 (교육청 변형)
  mechanism_primary: 다항 나눗셈 실행 → 몫·나머지 계수 표현
  mechanism_secondary: $x^3 + 3x^2 + ax + b = (x^2+4x-4)(x-1) + (a+8)x + b-4$ · $Q(x) = x-1$, $R(x) = (a+8)x + b-4$ · $R(3) = -4$ → $3a+b=-24$ · $Q$로 나누어떨어짐 → $f(1)=0$ → $1+3+a+b=0$ → 연립 → $f(2)$
  structure: $f(x) = x^3+3x^2+ax+b$를 $x^2+4x-4$로 나눈 몫 $Q$, 나머지 $R$ · $R(3) = -4$ · $f$가 $Q$로 나누어떨어짐 → $f(2)$
  target: $f(2)$
  answer: 6
  choices: 없음 (주관식)
  ★_추정: 4~5
  자유도: 중~높음 (다항 나눗셈 + 연립)
  출처: 교육청 변형

---

## STEP 2 · 유형 04 조립제법

- source: 고쟁이-CM1-CH02-STEP2-#138
  category: 조립제법·중복 나눗셈
  mechanism_primary: 조립제법 2번 사용으로 $(2x-1)^2$ 나눗셈 처리
  mechanism_secondary: $f(x) = (x - 1/2)Q_1(x) + 6$ · $Q_1$을 $x - 1/2$로 나눈 몫 $4x-12$, 나머지 $-2$ → $Q_1 = (x-1/2)(4x-12) - 2$ → $f = (x-1/2)^2(4x-12) - 2(x-1/2) + 6 = (2x-1)^2(x-3) - 2x + 7$ → $Q = x-3, R = -2x+7$ → $Q(1) + R(-1)$
  structure: 삼차식 $f$를 $(2x-1)^2$로 나눈 몫 $Q$, 나머지 $R$ · 조립제법 그림 2번 (표에 $1/2$ 2회, 마지막 결과 $4, -12, -2$) → $Q(1) + R(-1)$
  target: $Q(1) + R(-1)$
  answer: 7
  choices: 5지선다
  ★_추정: 4
  자유도: 중~높음 (2회 조립제법 결과 해석)
  선행: STEP1 #102

- source: 고쟁이-CM1-CH02-STEP2-#139
  category: 조립제법·기저 변환
  mechanism_primary: $x = -1$ 3회 조립제법 → $a, b, c, d$ 순차 결정
  mechanism_secondary: $3x^3 + 2x^2 - x + 1 = 3(x+1)^3 + b(x+1)^2 + c(x+1) + d$ (Taylor 기저 변환) · 조립제법 연속 3회로 계수 도출 → $a=3, b=-7, c=4, d=1$ · $2a + b + 2c + d$
  structure: $3x^3 + 2x^2 - x + 1 = a(x+1)^3 + b(x+1)^2 + c(x+1) + d$ → $2a + b + 2c + d$
  target: $2a + b + 2c + d$
  answer: 8
  choices: 없음 (주관식)
  ★_추정: 4
  자유도: 중 (Taylor 계수 도출·조립제법 반복)

---

## STEP 3 · 최고난도 유형 (#140~#161)

- source: 고쟁이-CM1-CH02-STEP3-#140
  category: 나머지정리·거듭제곱 최적 변형
  mechanism_primary: $2 \times 3^{79} = 54 \times 81^{19} = 54(x+1)^{19}$ 형태 변환 ($x = 80$)
  mechanism_secondary: $54(x+1)^{19}$을 $x$로 나눈 나머지 $= f(0) = 54$
  structure: $2 \times 3^{79}$을 80으로 나눈 나머지
  target: 나머지
  answer: 54
  choices: 5지선다
  ★_추정: 5
  자유도: 높음 ($81 = 3^4$·나눗수와 근접한 값 발견)
  선행: STEP2 #128

- source: 고쟁이-CM1-CH02-STEP3-#141
  category: 항등식·조합적 합 (교육청 기출)
  mechanism_primary: $(x+9)(x+99)(x+999)$ 전개 계수 → $A_1, A_2, A_3$은 각각 1차·2차·상수항 계수 합
  mechanism_secondary: $x=1$ 대입 → $10 \times 100 \times 1000 = 1 + A_1 + A_2 + A_3$ → $A_1+A_2+A_3 = 999999$ → 1000 나눔 → 999
  structure: $A_1 = 9+99+999$, $A_2 = 9 \times 99 + 99 \times 999 + 999 \times 9$, $A_3 = 9 \times 99 \times 999$ → $A_1+A_2+A_3$을 1000으로 나눈 나머지
  target: 나머지
  answer: 999
  choices: 없음 (주관식)
  ★_추정: 5
  자유도: 높음 (기본대칭식 → 전개 계수 인식)
  출처: 교육청 기출

- source: 고쟁이-CM1-CH02-STEP3-#142
  category: 조립제법·기저 변환 (Horner)
  mechanism_primary: $x=5$ 3회 조립제법으로 $f(x) = a(x-5)^3 + b(x-5)^2 + c(x-5) + d$ 계수 도출
  mechanism_secondary: $55/5 - 1 = 10$이므로 $f(x)$를 $(x/5 - 1)$의 다항식으로 표현 → $x=55$ 대입 → $f(55) = 127605$ → 자리 숫자 합
  structure: $f(x) = x^3 - 14x^2 + 67x - 105$ → $f(55)$의 각 자리의 숫자의 합
  target: 자리 숫자 합
  answer: 21
  choices: 5지선다
  ★_추정: 5
  자유도: 높음 (기저 변환 발상 + 수치 계산)
  선행: STEP2 #139

- source: 고쟁이-CM1-CH02-STEP3-#143
  category: 항등식·미지 다항함수 차수 결정 (서술형)
  mechanism_primary: 좌우 최고차항 차수 비교 → $f$의 차수 $n$ 결정 ($2n = n+2$ → $n=2$)
  mechanism_secondary: $f(x) = ax^2+bx+c$ 세팅 · $f(x^2+x) = x^2 f(x) + x(1+2x+3x^2) + 1$ 항등식 → 계수비교로 $a, b, c$ 결정 → $f(2)$
  structure: $f(x^2+x) = x^2 f(x) + x(1+2x+3x^2) + 1$ → $f(2)$ (서술형)
  target: $f(2)$
  answer: 11
  choices: 없음 (서술형)
  ★_추정: 5
  자유도: 높음 (차수 결정 → 계수비교)
  배점: 차수 30% · $f(x)$ 60% · $f(2)$ 10%

- source: 고쟁이-CM1-CH02-STEP3-#144
  category: 항등식·역다항식 관계
  mechanism_primary: 조건 (나) $P(x) = x^3 P(1/x)$ → 계수의 대칭성 ($x^3 \cdot P(1/x)$ 전개 → $a=b, c=1$)
  mechanism_secondary: $P(x) = x^3 + ax^2 + ax + 1$ 형태 · 조건 (가) $P(2) = -9$ → $a = -3$ → $P(x) = x^3 - 3x^2 - 3x + 1$ · $(x-2)P(x-3)$을 $x-1$로 나눈 나머지 = $-P(-2)$ (부호 주의) → $P(-2) = -8-12+6+1 = -13$ → 답 $13$
  structure: 최고차 계수 1 삼차식 $P$ · $P$를 $x-2$로 나눈 나머지 $-9$ · $P(x) = x^3 P(1/x)$ (0이 아닌 모든 $x$) → $(x-2)P(x-3)$을 $x-1$로 나눈 나머지
  target: 나머지
  answer: 13
  choices: 없음 (주관식)
  ★_추정: 5
  자유도: 높음 (역다항식 → 계수 대칭 인식)

- source: 고쟁이-CM1-CH02-STEP3-#145
  category: 나머지정리·자연수 매개변수 나눗셈
  mechanism_primary: $x=3$ 대입 → $b = -3a-9$ 결정
  mechanism_secondary: $x^n(x^2+ax+b) = (x-3)^2 Q(x) + 3^n(x-3)$ 항등식 → $(x^2+ax+b) = (x-3)(x+a+3)$ 인수분해 → $b - a$ 도출
  structure: $x^n(x^2+ax+b)$를 $(x-3)^2$로 나눈 나머지가 $3^n(x-3)$ → $b - a$ (단, $n$은 자연수)
  target: $b - a$
  answer: 11
  choices: 없음 (주관식)
  ★_추정: 5
  자유도: 높음 ($n$ 무관 조건 → 인수 분해 아이디어)

- source: 고쟁이-CM1-CH02-STEP3-#146
  category: 항등식·치환 변수
  mechanism_primary: $x - 1/x = t$ 치환 (또는 좌변 재배치로 $(x-1/x)^3, (x-1/x)^2$ 형태 유도)
  mechanism_secondary: 우변 = $(x^3-1/x^3) + (x^2+1/x^2) + 3$ · 곱셈공식 $(x-1/x)^3 + 3(x-1/x) = x^3-1/x^3$ · $(x-1/x)^2 + 2 = x^2+1/x^2$ → $f(k+3) = k^3+k^2+3k+5$ · $k+3 = t$ → $f(t) = t^3-8t^2+24t-22$ → $a+b-c = -8+24-(-22)$
  structure: $f(x) = x^3+ax^2+bx+c$ · $f(x+3-1/x) = x^3+x^2+3+1/x^2-1/x^3$ → $a+b-c$
  target: $a+b-c$
  answer: 38
  choices: 5지선다
  ★_추정: 5
  자유도: 높음 (역수 대칭식 치환 발상)

- source: 고쟁이-CM1-CH02-STEP3-#147
  category: 항등식·전개 계수 (보기 문제)
  mechanism_primary: 세 가지 조건 각각 대입값 도출
  mechanism_secondary: ㄱ. $x=-2$ 대입 → $0 = a_0 - 2a_1 + 4a_2 - \cdots + 256 a_8$ (참) · ㄴ. $x=2, -2$ 더하기 → $256 = 2(a_0 + 4a_2 + 16a_4 + 64a_6 + 256a_8)$ + $a_0=1, a_8 = 1/256$ 활용 → $2a_2+8a_4+32a_6=63$ (참) · ㄷ. $x=1, -1$ 뺄셈 → $(3/2)^8 - (1/2)^8 = 2(a_1+a_3+a_5+a_7)$ → $205/16$ (참)
  structure: $(x/2 + 1)^8 = a_0 + a_1 x + \cdots + a_8 x^8$ → ㄱ. $a_0 - 2a_1 + 4a_2 - \cdots + 256a_8 = 0$ · ㄴ. $2a_2 + 8a_4 + 32a_6 = 63$ · ㄷ. $a_1+a_3+a_5+a_7 = 205/16$
  target: 옳은 것 (보기)
  answer: ⑤ ㄱ, ㄴ, ㄷ
  choices: 5지선다
  ★_추정: 5
  자유도: 높음 (3개 대입값 조합 표준 + 계수 특정 필요)
  선행: STEP2 #115, STEP2 #117

- source: 고쟁이-CM1-CH02-STEP3-#148
  category: 항등식·인수 분해 후 계수 접근
  mechanism_primary: $x^3+x^2-2x = x(x^2+x-2) = x(x+2)(x-1)$ 인수분해
  mechanism_secondary: $(x^3+x^2-2x)^6 = x^6(x^2+x-2)^6$ · $x^6$이 곱해져 있으므로 $a_0 = a_1 = \cdots = a_5 = 0$ · $a_6 = (-2)^6 = 64$ (상수항) · $x=1$ 대입으로 $a_6+a_7+\cdots+a_{18}$ 값 · $x=-1$ 대입으로 홀·짝 분리 · 최종 부분합
  structure: $(x^3+x^2-2x)^6 = a_0 + a_1 x + \cdots + a_{18}x^{18}$ → $a_5 + a_8 + a_{10} + a_{12} + a_{14} + a_{16} + a_{18}$
  target: 부분합
  answer: -32
  choices: 5지선다
  ★_추정: 5
  자유도: 높음 (인수분해로 낮은 지수 소거 발상 + 부분합 대입)

- source: 고쟁이-CM1-CH02-STEP3-#149
  category: 나머지정리·중복 인수 확장
  mechanism_primary: 몫 $Q$ 활용 나머지 관계식 세팅
  mechanism_secondary: $f(x) = (x-1)^3 Q(x) - x^2+ax+b = (x-1)^3 Q(x) - (x-1)^2 + (a-2)x + b + 1$ · $(x-1)^2$ 나머지 = $(a-2)x + b+1$ · $x-1$ 나머지 = $a+b-1$ · 두 나머지 합 = $2x-6$ 조건 → $a=4, b=-5$ → $ab$
  structure: $f$를 $(x-1)^3$으로 나눈 나머지 $-x^2+ax+b$ · $f$를 $(x-1)^2, x-1$로 나눈 나머지의 합 = $2x-6$ → $ab$
  target: $ab$
  answer: -20
  choices: 5지선다
  ★_추정: 5
  자유도: 높음 (중복 인수 나머지 계층 관계 파악)

- source: 고쟁이-CM1-CH02-STEP3-#150
  category: 나머지정리·공통 나머지 (인수 결정)
  mechanism_primary: 두 나머지 같음 → 두 다항식의 차 = $(x-a)(x-b) \times $ (몫의 차)
  mechanism_secondary: $x^3 - 4x + 5 - (x^3 - 3x^2 + 5x - 1) = -x^2+x+6 = -(x-3)(x+2)$ = $3x^2-9x+6 = 3(x-1)(x-2)$ 정리 후 → $a, b = 1, 2$ (또는 2, 1) · 각각의 $R(x)$ 계산 · $R(a+b) = R(3)$
  structure: $x^3-4x+5, x^3-3x^2+5x-1$을 $(x-a)(x-b)$로 나눈 나머지가 서로 같을 때, 나머지 $R(x)$ → $R(a+b)$
  target: $R(a+b)$
  answer: 8
  choices: 없음 (주관식)
  ★_추정: 5
  자유도: 높음 (두 다항식 차 → 인수 결정 발상)

- source: 고쟁이-CM1-CH02-STEP3-#151
  category: 인수정리·이차식 결정 (교육청 기출)
  mechanism_primary: (가) $x^3+3x^2+4x+2 = f(x)Q_1(x) + g(x)$ 관계 · (나) $x^3+3x^2+4x+2 = g(x)Q_2(x) + f(x) - x^2 - 2x$ 관계 · 두 식 연립
  mechanism_secondary: $f(x) = x^2+2x+a$ 세팅 · $g(x) = (2-a)(x+1)$ 도출 · 항등식 조건 $x=-1$ → $a=0$ → $g(x) = 2(x+1)$ → $g(1)$
  structure: 이차식 $f$ · $x^3+3x^2+4x+2$를 $f$로 나눈 나머지 $g$, $g$로 나눈 나머지 $f-x^2-2x$ → $g(1)$
  target: $g(1)$
  answer: 4
  choices: 5지선다
  ★_추정: 5
  자유도: 높음 (이차 몫·이차 나머지 관계)
  출처: 교육청 기출

- source: 고쟁이-CM1-CH02-STEP3-#152
  category: 나머지정리·미지 상수 관계 (보기 문제)
  mechanism_primary: 세 항 참·거짓 판정
  mechanism_secondary: ㄱ. $P(x-1)$의 $x+1$ 나머지 = $P(-2) = R$ (참) · ㄴ. $P$를 $(x+2)^2$로 나눈 나머지 $= (1/R)(x+2)+R$, $P(x-1)$을 $(x+1)^2$로 나눈 나머지 $= (1/R)(x+1) + R$ → 서로 다름 (거짓) · ㄷ. $\{P(x-1)\}^2 - R^2 = (P(x-1)-R)(P(x-1)+R)$ 인수분해 → $(x+1)^2$ 나머지 = $2(x+1) = 2x+2$ (참)
  structure: 이차 이상 $P$를 $x+2$로 나눈 몫 $Q$, 나머지 $R$ · $Q$를 $x+2$로 나눈 나머지 $1/R$ → ㄱㄴㄷ (단, $R \neq 0$)
  target: 옳은 것 (보기)
  answer: ④ ㄱ, ㄷ
  choices: 5지선다
  ★_추정: 5
  자유도: 높음 (세 항 각각 논리 검증)

- source: 고쟁이-CM1-CH02-STEP3-#153
  category: 나머지정리·확장 몫
  mechanism_primary: $f(x) = (x+1)(x-3)Q_1(x) - 3x+1$ 관계 · $(x-1)f(x)$의 $(x+1)(x-3)$ 나머지 세팅
  mechanism_secondary: $(x-1)f(x) = (x+1)(x-3)(x-1)Q_1(x) + (x-1)(-3x+1)$ · $(x-1)(-3x+1)$을 $(x+1)(x-3)$로 나눈 나머지 = $-2x-10$ → 즉 $(x-1)f(x) = (x+1)(x-3)Q(x) - 2x - 10$ · $x=4$ 대입 → $3f(4) = 5Q(4) - 18$ · $f(4)=14$ (조건 가) → $Q(4) = 12$
  structure: (가) $f$의 $x-4$ 나머지 14 · (나) $f$의 $(x+1)(x-3)$ 나머지 $-3x+1$ · $(x-1)f(x)$의 $(x+1)(x-3)$ 몫 $Q$ → $Q(4)$
  target: $Q(4)$
  answer: 12
  choices: 없음 (주관식)
  ★_추정: 5
  자유도: 높음 ($(x-1) \cdot $ 나머지 재나눗셈 발상)

- source: 고쟁이-CM1-CH02-STEP3-#154
  category: 항등식·미지 차수 결정
  mechanism_primary: 좌우 차수 비교 → $P$의 차수 결정 (좌변 $2n$, 우변 $n+3$ → $n=3$)
  mechanism_secondary: (가) 항등식에 $x=0, \pm1, \pm\sqrt{2}$ 대입 → $P(0)=P(1)=P(2)=0$ · $P$가 3차 이상 · $n=3$ → $P(x) = kx(x-1)(x-2)$ · $x=\sqrt{2}$ 대입 → $P(\sqrt{2}+1) = \sqrt{2}k$ · $\sqrt{2}k = \sqrt{2}/k$ → $k^2 = 1$ · 최고차 계수 양수 → $k=1$ → $P(x) = x(x-1)(x-2)$ · (나) $Q$로 나눈 나머지 관계로 $Q$ 도출
  structure: (가) $P(x^2) = kx^3 P(x+1) - 2x^4 + 2x^2$ 항등식 · (나) $P+x^4-3x$를 $Q$로 나눈 나머지 $2x^2+x-8$ · $Q(-2) \neq 0$ → $P(3) + Q(2)$
  target: $P(3) + Q(2)$
  answer: 4
  choices: 없음 (주관식)
  ★_추정: 5
  자유도: 매우 높음 (차수 결정 + 근 파악 + $Q$ 유도 3단계)

- source: 고쟁이-CM1-CH02-STEP3-#155
  category: 인수정리·조건 3중 결합 (교육청 변형)
  mechanism_primary: $x+2, x^2+4$ 나머지 같음 → $f(x) = (x+2)(x^2+4)Q(x) + 3p^2$
  mechanism_secondary: (나) $f(1) = f(-1)$ → $3(1+a) + 3p^2 = 5(-1+a) + 3p^2$ → $a = -2$ → $f(x) = (x^2-4)(x^2+4) + 3p^2 = x^4 - 16 + 3p^2$ · (다) $x-\sqrt{p}$ 인수 → $f(\sqrt{p}) = 0$ → $p^2 - 16 + 3p^2 = 0$ → $p^2 = 4$, $p = 2$
  structure: 최고차 계수 1 사차식 $f$ · (가) $x+2, x^2+4$로 나눈 나머지 모두 $3p^2$ · (나) $f(1)=f(-1)$ · (다) $x-\sqrt{p}$가 $f$의 인수 → 양수 $p$
  target: 양수 $p$
  answer: 2
  choices: 5지선다 (④)
  ★_추정: 5
  자유도: 매우 높음 (세 조건 순차 처리)
  출처: 교육청 변형

- source: 고쟁이-CM1-CH02-STEP3-#156
  category: 인수정리·다중 케이스 분리
  mechanism_primary: $P(a) = a^3$ 조건 → $P(x) - x^3 = 0$의 근이 $-1, 3$
  mechanism_secondary: $P(x) - x^3$가 3차 이하 다항식 · (i) $= k(x+1)(x-3)$ 삼차 되려면 $x^3$이 남아야 하나 최고차 계수 음수 조건 모순 · (ii) $= k(x+1)^2(x-3)$ (iii) $= k(x+1)(x-3)^2$ · $P(2) = -1$ 조건으로 (ii)만 부합 · (ii) → $k=1$, $P(x) = x^3 + (x+1)^2(x-3)$ 이나 삼차 계수 = 2 모순 → 실제 답은 (iii) $k=-3$ 통과 → $P(x) = -2x^3 + 15x^2 - 9x - 27$ → $P(1)$
  structure: 최고차 계수 음수 삼차식 $P$ · (가) $P(2) = -1$ · (나) $P(a) = a^3$인 실수 $a$는 $-1, 3$ → $P(1)$
  target: $P(1)$
  answer: -23
  choices: 5지선다
  ★_추정: 5
  자유도: 매우 높음 (근 배수 케이스 4개 분류)
  선행: STEP2 #134

- source: 고쟁이-CM1-CH02-STEP3-#157
  category: 인수정리·연쇄 비율 조건
  mechanism_primary: 연쇄 비율 $P(n)/P(n+1) = $ 특정 형태 → $P(1), P(2), P(3), P(4)$ 값 도출
  mechanism_secondary: $P(4) = 7/4, P(3) = 7/3, P(2) = 7/2, P(1) = 7$ → $nP(n) = 7$ 형태 → $xP(x) - 7$이 $(x-1)(x-2)(x-3)(x-4)$ 인수 · $x=0$ 대입 → 상수 결정 → $P(-1)$
  structure: 삼차식 $P$ · $P(1)/P(2) = 2$, $P(2)/P(3) = 3/2$, $P(3)/P(4) = 4/3$, $P(4) = 7/4$ → $P$를 $x+1$로 나눈 나머지
  target: $P(-1)$
  answer: 28
  choices: 없음 (주관식)
  ★_추정: 5
  자유도: 매우 높음 ($nP(n) = 7$ 패턴 발견 → 사차식 인수화)
  선행: STEP2 #133

- source: 고쟁이-CM1-CH02-STEP3-#158
  category: 인수정리·차수 관계 (교육청 기출)
  mechanism_primary: (가) $Q(1) = 0$ 또는 $Q(1) \neq 0$ 케이스 분리 · 조건 (나) $x^3 - 10x + 13 - P(x) = Q^2$ 이차식 되도록 최고차 결정
  mechanism_secondary: $P(x) = (x^2-3x+3)(x-k)$ 형태 · $Q(x) = \pm(2x-4)$ · $Q(0) < 0$ 조건 → $Q(x) = 2x-4$ → $P(2) + Q(8)$
  structure: 삼차식 $P$, 일차식 $Q$ · (가) $PQ$가 $(x^2-3x+3)(x-1)$로 나누어떨어짐 · (나) $x^3-10x+13-P = Q^2$ · $Q(0) < 0$ → $P(2) + Q(8)$
  target: $P(2) + Q(8)$
  answer: 13
  choices: 없음 (주관식)
  ★_추정: 5
  자유도: 매우 높음 (차수 조건·부호 조건 결합)
  출처: 교육청 기출

- source: 고쟁이-CM1-CH02-STEP3-#159
  category: 인수정리·연립 조건 (교육청 변형)
  mechanism_primary: (가) $P(x^2-1) - 2Q(x+1)$이 $x+1$로 나누어떨어짐 → $P(0) = 2Q(0)$ · (나) $P - 2Q = 0$이 중근 → $P - 2Q$는 완전제곱식 · 이차항 계수 1이어야 하므로 일차항 계수 = 0
  mechanism_secondary: $P(x) = x^2+ax+b, Q(x) = x+c$ · $b = 2c$ → $P - 2Q = x^2 + (a-2)x$ 완전제곱 → $a = 2, c = -1, b = -2$ → $2P+Q$를 $x-2$로 나눈 나머지 = 13 조건 → $c = -1$ · $P(3) + Q(3)$
  structure: 이차항 계수 1 이차식 $P$, 일차항 계수 1 일차식 $Q$ · (가) $P(x^2-1) - 2Q(x+1)$이 $x+1$로 나누어떨어짐 · (나) $P - 2Q = 0$이 중근 · $2P + Q$의 $x-2$ 나머지 = 13 → $P(3) + Q(3)$
  target: $P(3) + Q(3)$
  answer: 15
  choices: 없음 (주관식)
  ★_추정: 5
  자유도: 매우 높음 (완전제곱 조건·나머지 조건 결합)
  출처: 교육청 변형

- source: 고쟁이-CM1-CH02-STEP3-#160
  category: 항등식·미지 차수 (역수 항)
  mechanism_primary: 좌우 차수 비교 → $x^4 f(1/x^2)$의 차수 → $f$가 이차 이하로 확정
  mechanism_secondary: $n \geq 3$이면 $x^4 f(1/x^2)$가 $1/x^{2n-4}$ 항을 가져 항등식 불가 · $f = ax^2+bx+c$ 세팅 후 항등식 계수비교 → $a=2, b=-3, c=5$ → $f(1)$
  structure: $f(x+1) + x^4 f(1/x^2) = 5x^4 - x^2 + x + 6$ → $f(1)$
  target: $f(1)$
  answer: 4
  choices: 5지선다
  ★_추정: 5
  자유도: 매우 높음 (차수 결정 논리)
  선행: STEP3 #143, STEP3 #144

- source: 고쟁이-CM1-CH02-STEP3-#161
  category: 인수정리·가능한 다항식 열거
  mechanism_primary: (가) $P(1)P(2) = 0$ → $P(1) = 0$ 또는 $P(2) = 0$ · (나) $P(x)\{P(x)-6\}$이 $x(x-3)$으로 나누어떨어짐 → $P(0)\{P(0)-6\}=0, P(3)\{P(3)-6\}=0$
  mechanism_secondary: 4가지 케이스 (i) $P(0)=0, P(3)=6$ · (ii) $P(0)=6, P(3)=0$ · (iii) $P(0)=6, P(3)=6$ · (iv) $P(0)=0, P(3)=0$ · 이차식 조건과 (가) 결합 → 가능한 $P(x)$ 열거 후 합 $Q(x)$ → $Q(4)$
  structure: 이차다항식 $P$ · (가) $P(1)P(2)=0$ · (나) $P\{P-6\}$이 $x(x-3)$으로 나누어떨어짐 · 가능한 모든 $P$의 합 $Q$ → $Q(x)$를 $x-4$로 나눈 나머지
  target: $Q(4)$
  answer: 54
  choices: 없음 (주관식)
  ★_추정: 5
  자유도: 매우 높음 (다중 케이스 분류 + 다항식 합)

---

## 요약 통계

| 항목 | STEP 2 | STEP 3 | 합계 |
|---|---|---|---|
| 문항 수 | 36 | 22 | 58 |
| ★ 3 추정 | 5 | 0 | 5 |
| ★ 4 추정 | 20 | 0 | 20 |
| ★ 5 추정 | 11 | 22 | 33 |
| 서술형 | 2 (#115, #134) | 1 (#143) | 3 |
| 교육청 기출/변형 | 3 (#127, #136, #137) | 4 (#141, #151, #155, #158, #159) | 7~8 |

## Mechanism 분포 (상위 카테고리)

**STEP 2**:
- 항등식·미정계수법 (수치대입·계수비교): #104~#109 (6문)
- 나머지정리·수치대입: #110~#122 (13문)
- 항등식·전개 계수 부분합: #113~#117, #122 (6문)
- 나머지정리·차수 논리·거듭제곱: #123, #127~#129 (4문)
- 인수정리·shift 기법: #130~#137 (8문)
- 조립제법·기저 변환: #138~#139 (2문)

**STEP 3**:
- 나머지정리·거듭제곱 변형: #140, #141 (2문)
- 조립제법·기저 변환 응용: #142 (1문)
- 항등식·미지 차수 결정: #143, #154, #160 (3문)
- 항등식·역다항식·치환: #144, #146 (2문)
- 나머지정리·중복 인수 확장: #145, #149, #152, #153 (4문)
- 항등식·전개 계수 응용: #147, #148 (2문)
- 인수정리·공통 나머지·다중 조건: #150, #151, #155~#161 (9문)

## 스키마 (schema) 예시 문제

원본에 스키마 (풀이 흐름 시각화) 예시가 두 문항 게재됨:
- **#125** (p.40): 나머지정리 확장 스키마
- **#133** (p.41): 인수정리 shift 기법 스키마

## 저작권 준수 확인

- 발문 원문 미전사 (요지·structure 필드만)
- 풀이 원문 미전사 (mechanism_primary/secondary 필드에 방법 라벨만)
- 답만 answer 필드 (수치)
- 원본 문항 번호·페이지·유형 태그 인용

원본: 고쟁이 공통수학1 2025 (이투스북, 저작권 보호). 본 데이터는 mechanism 분석·정점 앵커 참조용으로만 활용.
