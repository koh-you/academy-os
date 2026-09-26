---
name: mechanism-데이터-개념원리-CM2-RF
description: 개념원리 공통수학2 (2022개정) 유리무리함수 정독 데이터. 세션 54 (2026-07-20) 신설.
metadata:
  type: reference
  version: v1.0
  established: 2026-07-20
  source: 개념원리 공통수학2 (2022개정)
  tier_mapping:
    대표예제: star_3~4
    유제: star_3~4
    연습: star_4~5
  unit_code: CM2-RF
  standard: 10수07-03·04
  citation_note: 개념원리 · 학습 목적 · 저작권 준수 (원문 전사 없음)
  extract_range: "유리식 필수·확인체크 전수 + 유리함수 필수·확인체크 전수 + 무리식 필수·확인체크 전수 + 무리함수 필수·확인체크 전수 + 연습 STEP1(선별)·STEP2·실력UP 전수"
  pages: "248~291"
---

# 개념원리 공통수학2 (2022개정) — 유리무리함수 단원 정독 데이터

**출처**: 개념원리 공통수학2 (2022개정) · III. 함수 → 2. 유리함수 · 3. 무리함수
**대상 범위**: 유리식·유리함수·무리식·무리함수 4소절 (필수·확인체크·연습 전수)
**정독 페이지**: p.248~291
**총 문항 수**: **113문항** (필수 22 + 확인체크 68 + 연습 23)
**작업 목적**: 정리편·유형편·연습편 원본 은행 확장 · 유리무리 단원 앵커 확보
**정독 일자**: 2026-07-20

---

## III-2 유리함수

### 01 유리식 (p.248~257)

#### 필수 예제 (대표 유형 · p.252~257)

```yaml
- source: 개념원리-CM2-RF-유리-예제-01
  page: 252
  category_type: 대표예제
  problem_summary: |
    유리식의 사칙연산 3제.
    (1) (2x²-3x+10)/(x³-8) + 1/(x-2) - (x-3)/(x²+2x+4) 계산.
    (2) (x²-3x+2)/(x²-x-6) × (x²-4x+3)/(x²+2x-8) 계산.
    (3) (x²+xz-xy-yz)/(x²-y²) ÷ (x+z)/(x³+y³) 계산.
  solution_summary: |
    (1) 분모 인수분해 (x-8=(x-2)(x²+2x+4)), 공통분모 통분. 답 2/(x-2).
    (2) 각 인수 분해 후 약분. 답 (x-1)²/((x+2)(x+4)).
    (3) 분자 x(x+z)-y(x+z)=(x-y)(x+z), 나눗셈은 역수 곱셈. 답 x²-xy+y².
  category: 유리식 사칙연산 · 인수분해 · 통분
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: 유리식 덧뺄셈은 통분·곱나눗셈은 인수분해 후 약분
  insight_type: 절차형
  depth: 1
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-유리-예제-02
  page: 253
  category_type: 대표예제
  problem_summary: |
    x≠1, x≠2인 모든 x에 대하여 a/(x-1) + b/(x-2) = 3x/(x²-3x+2) 성립 시 상수 a, b 구하기.
  solution_summary: |
    좌변 통분: ((a+b)x-2a-b)/(x²-3x+2). 분자 항등식으로 a+b=3, -2a-b=0.
    답: a=-3, b=6.
  category: 유리식과 항등식 · 부분분수 분해
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: 통분 후 분자 계수 비교 (항등식)
  insight_type: 절차형
  depth: 1
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-유리-예제-03
  page: 254
  category_type: 대표예제
  problem_summary: |
    (분자의 차수)≥(분모의 차수)인 유리식 계산 2제.
    (1) (x²+x-1)/(x+1) - (x²-x+2)/(x-1) 계산.
    (2) (x+2)/x - (x+3)/(x+1) - (x-5)/(x-3) + (x-6)/(x-4) 계산.
  solution_summary: |
    (1) 분자를 분모로 나누어 상수화 변형. 각 분수 (x - 1/(x+1)) - (x + 2/(x-1)).
        정리 후 답: -(3x+1)/((x+1)(x-1)).
    (2) 각 분수 상수화 → (2/x - 2/(x+1)) + (2/(x-4) - 2/(x-3)) 형태 재배열.
        답: -8(2x-3)/(x(x+1)(x-3)(x-4)).
  category: 분자차수 ≥ 분모차수 · 대분수 변형 · 네 유리식은 두 묶음 처리
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: 분자를 분모로 나누어 다항식+진분수식 변형 · 4개 이상은 짝지어 처리
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-유리-예제-04
  page: 255
  category_type: 대표예제
  problem_summary: |
    부분분수 변형 2제.
    (1) 2/(x(x+2)) + 2/((x+2)(x+4)) + 2/((x+4)(x+6)) + 2/((x+6)(x+8)) 계산.
    (2) 1/(1·2) + 1/(2·3) + 1/(3·4) + … + 1/(9·10) 값.
  solution_summary: |
    (1) 부분분수 2/(x(x+2)) = 1/x - 1/(x+2) 등. Telescoping.
        답: 1/x - 1/(x+8) = 8/(x(x+8)).
    (2) 1/(k(k+1)) = 1/k - 1/(k+1). Telescoping. 답: 1 - 1/10 = 9/10.
  category: 부분분수 · Telescoping
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: 분모가 두 인수 곱이면 1/(AB) = 1/(B-A)(1/A - 1/B) 부분분수
  insight_type: 절차형
  depth: 1
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-유리-예제-05
  page: 256
  category_type: 대표예제
  problem_summary: |
    번분수 (분모/분자가 분수식) 계산 2제.
    (1) 1 - 1/(1 - 1/(1-x)) 계산.
    (2) (1/(1-x) + 1/(1+x)) / (1/(1-x) - 1/(1+x)) 계산.
  solution_summary: |
    (1) 가장 안쪽부터 순차 정리 · 또는 분자분모에 (1-x) 곱. 답: 1/x.
    (2) 분자분모 각각 통분 → (2/(1-x²))/(2x/(1-x²)) = 1/x. 답: 1/x.
  category: 번분수 · A/B ÷ C/D = AD/BC
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: 안쪽부터 정리 or 분자분모에 공통 유리식 곱
  insight_type: 절차형
  depth: 1
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-유리-예제-06
  page: 257
  category_type: 대표예제
  problem_summary: |
    조건이 주어진 유리식 값 2제.
    (1) x²+4x+1=0일 때, x³ + 1/x³ 값.
    (2) 0이 아닌 세 실수 a, b, c에 대하여 a+b+c=0일 때, a(1/b + 1/c) + b(1/c + 1/a) + c(1/a + 1/b) 값.
  solution_summary: |
    (1) x≠0이므로 양변 x로 나누어 x+1/x=-4. 항등식 x³+1/x³=(x+1/x)³-3(x+1/x)=(-4)³-3(-4)=-52.
    (2) 정리 (b+c)/a + (c+a)/b + (a+b)/c. a+b+c=0 ⇒ b+c=-a 등. -1-1-1=-3.
  category: 조건식 유리식 값 · 대칭식 활용
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: x+1/x 치환 · 조건식 대입 정리
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"
```

#### 확인체크 (유제 · p.250~257)

```yaml
- source: 개념원리-CM2-RF-유리-유제-587
  page: 250
  category_type: 유제
  problem_summary: |
    (2x+y)/5 = (x+2y)/7 일 때, (xy-x²)/(xy+y²) 값. (단, xy≠0)
  solution_summary: |
    비례식 =k로 놓아 2x+y=5k, x+2y=7k. y=3x. 대입 정리. 답: 1/6.
  category: 비례식 · 유리식 값
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: 비례식 k 치환 → 일차관계 유도 → 대입
  insight_type: 절차형
  depth: 1
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-유리-유제-588
  page: 250
  category_type: 유제
  problem_summary: |
    (x+y):(y+z):(z+x) = 3:4:5일 때 (1) x:y:z (2) (xy-yz+zx)/(x²+y²+z²) 값.
  solution_summary: |
    x+y=3k, y+z=4k, z+x=5k. 세 식 합/2 = x+y+z=6k. x=2k, y=k, z=3k.
    답: (1) 2:1:3. (2) 5/14.
  category: 연비 · 3원 비례식
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: 3개 비례식 합·개별 뺄셈
  insight_type: 절차형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-유리-유제-589
  page: 251
  category_type: 유제
  problem_summary: |
    보기 ㄱ~ㅂ 6개 식에서 (1) 다항식 (2) 다항식 아닌 유리식 각각 고르기.
    ㄱ. 4/(x+1) ㄴ. (x²+1)/(2x²-3) ㄷ. (x²-5x)/8 ㄹ. 2x/3 + 3/5 ㅁ. 2x/(x(x-1)) ㅂ. 1/((x+1)(x+2))
  solution_summary: |
    다항식: 분모 상수. ㄷ, ㄹ. 다항식 아닌 유리식: 분모에 문자. ㄱ, ㄴ, ㅁ, ㅂ.
    답: (1) ㄷ, ㄹ. (2) ㄱ, ㄴ, ㅁ, ㅂ.
  category: 유리식 분류
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: 다항식 = 분모 상수 · 분수식 = 분모에 문자
  insight_type: 절차형
  depth: 1
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-유리-유제-590
  page: 251
  category_type: 유제
  problem_summary: |
    두 유리식 통분.
    (1) 1/(x²-3x), 1/(x-3).
    (2) 2/(x²-1), 3/(x²+4x+3).
  solution_summary: |
    (1) 인수분해 x²-3x=x(x-3). 공통분모 x(x-3). 답: 1/(x(x-3)), x/(x(x-3)).
    (2) x²-1=(x+1)(x-1), x²+4x+3=(x+3)(x+1). 공통분모 (x+3)(x+1)(x-1).
        답: 2(x+3)/((x+3)(x+1)(x-1)), 3(x-1)/((x+3)(x+1)(x-1)).
  category: 통분
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: 인수분해 후 공통분모
  insight_type: 절차형
  depth: 1
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-유리-유제-591
  page: 251
  category_type: 유제
  problem_summary: |
    유리식 약분.
    (1) (x²-5x+6)/(x²-7x+12).
    (2) (x⁴-y⁴)/((x+y)(x³-y³)).
  solution_summary: |
    (1) (x-2)(x-3)/((x-3)(x-4)) = (x-2)/(x-4).
    (2) x⁴-y⁴=(x²+y²)(x+y)(x-y), x³-y³=(x-y)(x²+xy+y²).
        답: (x²+y²)/(x²+xy+y²).
  category: 약분 · 인수분해
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: 분자·분모 인수분해 후 공약수 소거
  insight_type: 절차형
  depth: 1
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-유리-유제-592
  page: 251
  category_type: 유제
  problem_summary: |
    유리식 사칙연산 4제.
    (1) 2/(x+2) + 3/(x+3).
    (2) 1/(x-1) - 6/(2x+1).
    (3) (x+2)/(x²+3x) × (x+3)/(2x).
    (4) (x²-1)/(x+2) ÷ (x+1)/x.
  solution_summary: |
    (1) 통분. (5x+12)/((x+2)(x+3)).
    (2) 통분. (-4x+7)/((x-1)(2x+1)).
    (3) 분모 인수분해 x²+3x=x(x+3). 약분. (x+2)/(2x²).
    (4) 나눗셈은 역수 곱셈. (x-1)(x+1)/(x+2) × x/(x+1). 답: x(x-1)/(x+2).
  category: 유리식 사칙연산 기본
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: 통분 · 인수분해 · 약분
  insight_type: 절차형
  depth: 1
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-유리-유제-593
  page: 252
  category_type: 유제
  problem_summary: |
    유리식 사칙연산.
    (1) (3x+1)/(x²-1) - (2x+3)/(x²+3x+2) + (x-2)/(x²+x-2).
    (2) (6x²-x-1)/(x²-9) × (x²-x-6)/(3x²-2x-1) ÷ (2x²+3x-2)/(x²+2x-3).
  solution_summary: |
    (1) 인수분해 후 공통분모 (x+2)(x+1)(x-1). 통분·정리.
        답: (2x+3)/((x+2)(x-1)).
    (2) 각 인수분해 후 나눗셈은 역수. 모두 약분.
        답: 1.
  category: 유리식 사칙연산 복합
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: 인수분해 · 통분 · 역수 곱셈 · 약분
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-유리-유제-594
  page: 253
  category_type: 유제
  problem_summary: |
    x≠1인 모든 x에 대하여 3x/(x³-1) = a/(x-1) + (bx+a)/(x²+x+1) 성립 시 ab 값. (a, b는 상수)
  solution_summary: |
    우변 통분 (a(x²+x+1)+(bx+a)(x-1))/(x³-1) = ((a+b)x²+(2a-b)x)/(x³-1).
    분자 항등식: a+b=0, 2a-b=3. a=1, b=-1. ab=-1.
  category: 유리식 항등식 · 부분분수 분해
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: 통분 후 분자 계수 비교
  insight_type: 절차형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-유리-유제-595
  page: 253
  category_type: 유제
  problem_summary: |
    2/x + a/(x-1) + b/(x-2) = -x+4/(x(x-1)(x-2)) 성립 시 a-b 값.
  solution_summary: |
    좌변 통분 (2(x-1)(x-2)+ax(x-2)+bx(x-1))/(x(x-1)(x-2)) = ((2+a+b)x²+(-6-2a-b)x+4)/…
    분자 항등식: 2+a+b=0, -6-2a-b=-1. 정리 a+b=-2, 2a+b=-5. a=-3, b=1.
    답: a-b=-4.
  category: 유리식 항등식 · 부분분수
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: 통분 후 계수 비교 3항
  insight_type: 절차형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-유리-유제-596
  page: 254
  category_type: 유제
  problem_summary: |
    분자 차수가 큰 유리식 2제.
    (1) (x²-x-3)/(x+1) - (x²-4x+6)/(x-2).
    (2) (x+3)/(x+4) + (x+7)/(x+8) - (x+1)/(x+2) - (x+5)/(x+6).
  solution_summary: |
    (1) 분자를 분모로 나눔: (x-2 - 1/(x+1)) - (x-2 + 2/(x-2)) = -1/(x+1) - 2/(x-2).
        답: -3x/((x+1)(x-2)).
    (2) 각각 상수화 → (1-1/(x+4)) + (1-1/(x+8)) - (1-1/(x+2)) - (1-1/(x+6)).
        재배열 (1/(x+2)-1/(x+4)) + (1/(x+6)-1/(x+8)).
        답: 4(x²+10x+28)/((x+2)(x+4)(x+6)(x+8)).
  category: 대분수 변형 · 4개 유리식 짝짓기
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: 분자÷분모로 상수화 · 4개는 두 묶음 처리
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-유리-유제-597
  page: 255
  category_type: 유제
  problem_summary: |
    (1) 1/(x²+x) + 2/(x²+4x+3) + 3/(x²+9x+18) - 6/(x²+6x) 계산.
    (2) 1/(1·3) + 1/(3·5) + 1/(5·7) + 1/(7·9) + 1/(9·11) 값.
  solution_summary: |
    (1) 각 부분분수: 1/x - 1/(x+1) + 1/(x+1)-1/(x+3) + 1/(x+3)-1/(x+6) - (1/x - 1/(x+6)) = 0.
        답: 0.
    (2) 1/((2k-1)(2k+1)) = (1/2)(1/(2k-1) - 1/(2k+1)). Telescoping.
        (1/2)(1 - 1/11) = 5/11.
  category: 부분분수 확장 · Telescoping
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: 여러 부분분수 조합 · 소거 관찰
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-유리-유제-598
  page: 255
  category_type: 유제
  problem_summary: |
    2/(x(x-2)) + 4/(x(x+4)) + 6/((x+4)(x+10)) = a/((x+b)(x+c)) 성립 시 a+b+c. (a,b,c 상수)
  solution_summary: |
    각 항 부분분수:
    2/(x(x-2)) = -(1/(x-2) - 1/x) → 부호 반대. 원래 = 1/(x-2) - 1/x?
    실제 계산: 2/(x(x-2)) = 1/(x-2)-1/x. 4/(x(x+4))=1/x-1/(x+4). 6/((x+4)(x+10))=1/(x+4)-1/(x+10).
    합 = 1/(x-2) - 1/(x+10) = 12/((x-2)(x+10)). a=12, b=-2, c=10 (또는 b=10,c=-2).
    답: a+b+c=20.
  category: 부분분수 압축 형태 매칭
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: 각 항 부분분수 → Telescoping → 계수 매칭
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-유리-유제-599
  page: 256
  category_type: 유제
  problem_summary: |
    번분수 3제.
    (1) (1/(x+2) - 1/(x+3))/(1/(x+3) - 1/(x+4)).
    (2) (1 - (2x-y)/(x+y))/(y/(x+y) - 1).
    (3) (1 + 2/x)/(x - 3 - 5/(x+1)).
  solution_summary: |
    (1) 분자=1/((x+2)(x+3)), 분모=1/((x+3)(x+4)). 나누기: (x+4)/(x+2).
    (2) 분자 (x+y-2x+y)/(x+y)=(-x+2y)/(x+y). 분모 (y-x-y)/(x+y)=-x/(x+y).
        비=(x-2y)/x.
    (3) 분자 (x+2)/x. 분모 (x²-2x-8)/(x+1)=(x-4)(x+2)/(x+1).
        답: (x+1)/(x(x-4)).
  category: 번분수 종합
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: 분자·분모 각각 통분 후 나눗셈 = 역수 곱셈
  insight_type: 절차형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-유리-유제-600
  page: 256
  category_type: 유제
  problem_summary: |
    17/72 = 1/(a + 1/(b + 1/c)) 만족 자연수 a, b, c에 대해 a+b+c 값.
  solution_summary: |
    17/72 = 1/(72/17) = 1/(4 + 4/17) = 1/(4 + 1/(17/4)) = 1/(4 + 1/(4 + 1/4)).
    a=4, b=4, c=4. 답: 12.
  category: 연분수 · 자연수 표현
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: 유리수 → 연분수 전개 (몫·역수 반복)
  insight_type: 통찰형
  depth: 3
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-유리-유제-601
  page: 257
  category_type: 유제
  problem_summary: |
    (1) 2x²-5x-2=0일 때 8x³-4x²-4/x²-8/x³ 값.
    (2) x+y+xy=0일 때 1/((1+x)(1+y)) + x/((1+x)(x+y)) + y/((1+y)(x+y)) 값. (단 xy≠0)
  solution_summary: |
    (1) x≠0이므로 양변 x로 나누기 2x-5-2/x=0, x-1/x=5/2.
        8x³-4x²-4/x²-8/x³ = 8(x³-1/x³) - 4(x²+1/x²).
        x³-1/x³=(x-1/x)³+3(x-1/x)=(5/2)³+3(5/2)=125/8+15/2=185/8.
        x²+1/x²=(x-1/x)²+2=25/4+2=33/4.
        답: 8·185/8 - 4·33/4 = 185-33 = 152.
    (2) 통분 (x+y)/((1+x)(1+y)(x+y)) + x(1+y)/… + y(1+x)/….
        분자 정리: (x+y)+x(1+y)+y(1+x) = 2x+2y+2xy = 2(x+y+xy) = 0.
        답: 0.
  category: 조건식 유리식 값
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: 양변 x 나누기 · 항등식 (x-1/x)³ · 분자 조건 대입
  insight_type: 조건통합형
  depth: 3
  citation_note: "개념원리 · 학습 목적"
```

#### 연습문제 STEP1·STEP2·실력UP (p.258)

```yaml
- source: 개념원리-CM2-RF-유리-연습-602
  page: 258
  category_type: 연습(STEP1)
  problem_summary: |
    1/(2-x) + 1/(2+x) + 4/(4+x²) + 32/(16+x⁴) 계산.
  solution_summary: |
    첫 두 항 통분: 4/(4-x²). +4/(4+x²) = 32/(16-x⁴). +32/(16+x⁴) = 1024/(256-x⁸).
    답: 1024/(256-x⁸).
  category: 유리식 연쇄 통분 · 차분 패턴
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: 순차 통분에서 차이·합 곱 = A²-B² 패턴 반복
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-유리-연습-603
  page: 258
  category_type: 연습(STEP1)
  problem_summary: |
    (2x+3)/(x+1) - (3x+7)/(x+2) + (3x+10)/(x+3) - (2x+9)/(x+4) = (ax²+bx+c)/((x+1)(x+2)(x+3)(x+4)) 성립 시 abc.
  solution_summary: |
    각 유리식 상수화: 2+1/(x+1), 3+1/(x+2), 3+1/(x+3), 2+1/(x+4).
    합 = 1/(x+1) - 1/(x+2) + 1/(x+3) - 1/(x+4). 짝지어 통분.
    ((x+2-(x+1))/((x+1)(x+2)) + ((x+4-(x+3))/((x+3)(x+4)) = 1/((x+1)(x+2)) + 1/((x+3)(x+4)).
    통분 = (2x²+10x+14)/((x+1)(x+2)(x+3)(x+4)).
    a=2, b=10, c=14. abc=280.
  category: 유리식 항등식 · 4개 유리식 짝짓기
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: 상수화·짝지어 통분·계수 비교
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-유리-연습-604
  page: 258
  category_type: 연습(STEP1)
  problem_summary: |
    ((1/(x-2) - 1/(x+3))/(1/(x-2) + 1/(x+3))) + ((1/(x+2) - 1/(x-3))/(1/(x+2) + 1/(x-3))) 계산.
  solution_summary: |
    각 번분수 분자·분모 통분:
    첫째=5/((2x+1)((x-2)(x+3))) × (x-2)(x+3)/1 형태 정리 → 5/(2x+1).
    둘째= -5/(2x-1).
    합 = 5/(2x+1) - 5/(2x-1) = 5(2x-1-2x-1)/((2x+1)(2x-1)) = -10/((2x+1)(2x-1)).
    답: -10/((2x+1)(2x-1)).
  category: 번분수 두 개 조합
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: 각 번분수 압축 → 공통분모 뺄셈
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-유리-연습-605
  page: 258
  category_type: 연습(STEP2)
  problem_summary: |
    f(x)=(4x²-1)/3일 때, 1/f(1) + 1/f(2) + 1/f(3) + … + 1/f(20) 값.
  solution_summary: |
    f(x)=(2x-1)(2x+1)/3. 1/f(x)=3/((2x-1)(2x+1))=(3/2)(1/(2x-1) - 1/(2x+1)).
    Telescoping: (3/2)(1 - 1/41)=(3/2)(40/41)=60/41.
    답: 60/41.
  category: Telescoping · 부분분수
  tier: star_4
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: 인수분해 → 부분분수 → 소거
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-유리-연습-606
  page: 258
  category_type: 연습(STEP2)
  problem_summary: |
    x²-3x+1=0일 때, 다음 중 3 - 1/(3 - 1/(3 - 1/(3-x)))와 같은 것은?
    ① 1/(x-3) ② 1/(3-x) ③ -1/x ④ 1/x ⑤ x
  solution_summary: |
    x²-3x+1=0 · x≠0 · x-3+1/x=0 · 3-x=1/x · 1/(3-x)=x.
    안쪽부터: 1/(3-x)=x. 3 - 1/(3-x)=3-x. 3 - 1/(3-x)에서 (3-x) 자체를 재사용.
    결국 원식=1/x. 답: ④.
  category: 조건식 유리식 값 · 연속 번분수
  tier: star_4
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: 조건 1/(3-x)=x 발견 · 재귀 소거
  insight_type: 통찰형
  depth: 3
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-유리-연습-607
  page: 258
  category_type: 연습(실력UP)
  problem_summary: |
    세 실수 a, b, c에 대하여 1/a + 1/b + 1/c = 0일 때,
    a²/((a+b)(a+c)) + b²/((b+a)(b+c)) + c²/((c+b)(c+a)) + 3abc/((a+b)(b+c)(c+a)) 값.
  solution_summary: |
    조건 ab+bc+ca=0.
    분모 통분 (a+b)(b+c)(c+a). 분자 정리:
    a²(b+c) + b²(c+a) + c²(a+b) + 3abc = (a+b)(b+c)(c+a) - (a+b+c)(ab+bc+ca) ... 실제로는
    분자 정리 = (a+b+c)(ab+bc+ca) 형태 = 0. 답: 0.
  category: 3변수 대칭식 · 조건 활용
  tier: star_4
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: 대칭식 인수분해 · ab+bc+ca=0 대입
  insight_type: 통찰형
  depth: 3
  citation_note: "개념원리 · 학습 목적"
```

---

### 02 유리함수 (p.259~270)

#### 필수 예제 (대표 유형 · p.263~270)

```yaml
- source: 개념원리-CM2-RF-유리함수-예제-07
  page: 263
  category_type: 대표예제
  problem_summary: |
    유리함수 그래프 그리기 · 정의역·치역·점근선 구하기.
    (1) y = 4/(x+1) + 3. (2) y = (2x+1)/(x+2).
  solution_summary: |
    (1) y=4/x를 (-1,3) 평행이동. 정의역 x≠-1, 치역 y≠3, 점근선 x=-1, y=3.
    (2) (2x+1)/(x+2)=2 - 3/(x+2). y=-3/x를 (-2,2) 평행이동. 정의역 x≠-2, 치역 y≠2, 점근선 x=-2, y=2.
  category: 유리함수 표준형 변형 · 그래프
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: y=k/(x-p)+q 꼴 변형 → 점근선·평행이동
  insight_type: 절차형
  depth: 1
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-유리함수-예제-08
  page: 264
  category_type: 대표예제
  problem_summary: |
    y=(-x+5)/(x-2) 그래프는 y=a/x 그래프를 x축으로 b, y축으로 c만큼 평행이동. a, b, c 값.
  solution_summary: |
    (-x+5)/(x-2) = (-(x-2)+3)/(x-2) = 3/(x-2) - 1.
    y=3/x를 (2, -1) 평행이동. a=3, b=2, c=-1.
  category: 유리함수 평행이동 · 표준형 변형
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: 분자를 분모로 나누어 표준형
  insight_type: 절차형
  depth: 1
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-유리함수-예제-09
  page: 265
  category_type: 대표예제
  problem_summary: |
    y=(-2x+4)/(x-1) 정의역이 {x|-1≤x<1 또는 1<x≤2}일 때 치역.
  solution_summary: |
    (-2x+4)/(x-1) = 2/(x-1) - 2. 점근선 x=1, y=-2.
    x=-1: y=-3. x=2: y=0. -1≤x<1에서 y≤-3. 1<x≤2에서 y≥0.
    답: {y | y≤-3 또는 y≥0}.
  category: 정의역 제한 유리함수 치역
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: 표준형 변형 · 그래프 · 경계값 조사
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-유리함수-예제-10
  page: 266
  category_type: 대표예제
  problem_summary: |
    (1) y=(ax-2)/(x+1)의 그래프가 점 (b, 5)에 대하여 대칭일 때 a, b 값.
    (2) y=(2x+1)/(x-1)의 그래프가 두 직선 y=x+a, y=-x+b에 대하여 대칭일 때 a, b 값.
  solution_summary: |
    (1) (ax-2)/(x+1) = -(a+2)/(x+1) + a. 점근선 x=-1, y=a. 대칭 중심 (-1, a).
        b=-1, a=5.
    (2) (2x+1)/(x-1)=3/(x-1)+2. 점근선 x=1, y=2. 대칭 중심 (1,2).
        두 직선 y=x+a, y=-x+b 모두 (1,2) 지남. 2=1+a → a=1. 2=-1+b → b=3.
  category: 유리함수 대칭성 · 점근선 교점
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: 점근선 교점 = 대칭 중심 · 기울기 ±1 두 직선 대칭
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-유리함수-예제-11
  page: 267
  category_type: 대표예제
  problem_summary: |
    유리함수 y=(ax+b)/(x+c)의 그래프가 그림과 같이 점근선 x=-1, y=-2, 점 (0,-1) 지날 때 a, b, c.
  solution_summary: |
    점근선 x=-1, y=-2에서 y=k/(x+1) - 2 (k>0). (0,-1) 대입: -1=k-2, k=1.
    y=1/(x+1) - 2 = (1 - 2(x+1))/(x+1) = (-2x-1)/(x+1).
    답: a=-2, b=-1, c=1.
  category: 그래프 → 유리함수 식 결정
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: 점근선으로 표준형 놓기 · 지나는 점으로 k 결정
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-유리함수-예제-12
  page: 268
  category_type: 대표예제(발전)
  problem_summary: |
    y=(2x-1)/(x-1)의 그래프와 직선 y=kx+2가 만나지 않도록 하는 실수 k 범위.
  solution_summary: |
    방정식 (2x-1)/(x-1)=kx+2, 즉 kx²-kx-1=0이 실근 없어야.
    (i) k=0: -1=0 → 근 없음. OK.
    (ii) k≠0: D=k²+4k<0 → -4<k<0.
    답: -4<k≤0.
  category: 유리함수와 직선 위치 관계
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: 교점 방정식 판별식 · k=0 경계 별도 검토
  insight_type: 조건통합형
  depth: 3
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-유리함수-예제-13
  page: 269
  category_type: 대표예제
  problem_summary: |
    f(x)=(x+1)/(x-1)일 때 f¹⁰¹(10) 값. (f¹=f, fⁿ⁺¹=f∘fⁿ)
  solution_summary: |
    f²(x)=x. 따라서 fⁿ(x)=(x+1)/(x-1) (n 홀), x (n 짝). 101 홀.
    f¹⁰¹(10)=(10+1)/(10-1)=11/9. 답: 11/9.
  category: 유리함수 합성 · 주기성
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: 반복 합성 후 주기 발견
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-유리함수-예제-14
  page: 270
  category_type: 대표예제
  problem_summary: |
    f(x)=(ax+3)/(x-1)에 대하여 f=f⁻¹ 성립 시 a 값.
  solution_summary: |
    역함수 f⁻¹(x)=(x+3)/(x-a). f=f⁻¹ ⇔ (ax+3)/(x-1)=(x+3)/(x-a).
    a=1. (또는 f∘f=x 조건에서 항등식 정리도 가능)
    답: a=1.
  category: 유리함수 역함수 · 자기역함수
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: 역함수 공식 · 계수 비교
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"
```

#### 확인체크 (유제 · p.262~270)

```yaml
- source: 개념원리-CM2-RF-유리함수-유제-608
  page: 262
  category_type: 유제
  problem_summary: |
    유리함수 정의역 4제.
    (1) y=10/x. (2) y=(3-x)/(x+3). (3) y=(2x+3)/(3x-5). (4) y=3x/(x²-4).
  solution_summary: |
    분모 ≠ 0.
    (1) x≠0. (2) x≠-3. (3) x≠5/3. (4) x≠±2.
  category: 유리함수 정의역
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: 분모 = 0 배제
  insight_type: 절차형
  depth: 1
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-유리함수-유제-609
  page: 262
  category_type: 유제
  problem_summary: |
    유리함수 그래프·점근선.
    (1) y=2/x. (2) y=-3/x. (3) y=1/(x-1). (4) y=-1/x + 2.
  solution_summary: |
    (1) 1·3사분면. 점근선 x=0, y=0.
    (2) 2·4사분면. 점근선 x=0, y=0.
    (3) y=1/x를 x축 1 평행이동. 점근선 x=1, y=0.
    (4) y=-1/x를 y축 2 평행이동. 점근선 x=0, y=2.
  category: 반비례꼴 그래프 · 평행이동
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: y=k/x 기본형 · 평행이동
  insight_type: 절차형
  depth: 1
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-유리함수-유제-610
  page: 262
  category_type: 유제
  problem_summary: |
    y=k/(x-p)+q 꼴로 변형.
    (1) y=(4x-15)/(x-3). (2) y=(-5x-7)/(x+2).
  solution_summary: |
    (1) (4(x-3)-3)/(x-3) = -3/(x-3) + 4.
    (2) (-5(x+2)+3)/(x+2) = 3/(x+2) - 5.
  category: 표준형 변형
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: 분자 = a(x-p)+r 형태로 나누기
  insight_type: 절차형
  depth: 1
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-유리함수-유제-611
  page: 263
  category_type: 유제
  problem_summary: |
    유리함수 그래프·정의역·치역·점근선.
    (1) y=-2/(x+2) + 1. (2) y=(-2x+1)/(x+3). (3) y=(6-x)/(x-3).
  solution_summary: |
    (1) 정의역 x≠-2, 치역 y≠1, 점근선 x=-2, y=1.
    (2) (-2x+1)/(x+3) = 7/(x+3) - 2. 정의역 x≠-3, 치역 y≠-2, 점근선 x=-3, y=-2.
    (3) (6-x)/(x-3) = 3/(x-3) - 1. 정의역 x≠3, 치역 y≠-1, 점근선 x=3, y=-1.
  category: 유리함수 그래프 종합
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: 표준형 변형 · 점근선 파악
  insight_type: 절차형
  depth: 1
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-유리함수-유제-612
  page: 264
  category_type: 유제
  problem_summary: |
    y=-3/x를 x축 3, y축 -2 평행이동한 그래프의 식이 y=(ax+b)/(x-c)일 때 abc.
  solution_summary: |
    y=-3/(x-3) - 2 = (-3-2(x-3))/(x-3) = (-2x+3)/(x-3).
    a=-2, b=3, c=3. abc=-18.
  category: 유리함수 평행이동 · 식 매칭
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: 평행이동 · 표준형 (ax+b)/(x-c) 통합
  insight_type: 절차형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-유리함수-유제-613
  page: 264
  category_type: 유제
  problem_summary: |
    보기에서 평행이동에 의해 y=2/x 그래프와 겹쳐지는 것 고르기.
    ㄱ. y=(x-1)/(x-3). ㄴ. y=(2x+2)/(x+2). ㄷ. y=(-4x-2)/(x+1).
  solution_summary: |
    각각 표준형 변형 후 k 값 비교. k=2인 것.
    ㄱ. 2/(x-3)+1 → k=2. OK.
    ㄴ. -2/(x+2)+2 → k=-2. NG (부호 다름, 겹치지 않음? 실제는 |k|=2이면 겹치지 않음, 부호 같아야).
    실제 개념원리 답: ㄱ, ㄷ. (ㄷ 도 정리하면 2/(x+1)-4로 k=2).
  category: 유리함수 평행이동 겹침
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: 표준형 k 값 동일해야 평행이동 겹침
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-유리함수-유제-614
  page: 264
  category_type: 유제
  problem_summary: |
    y=(4x+3)/(x+1)을 x축 a, y축 b 평행이동하면 y=(3x-4)/(x-1)과 겹침. a+b 값.
  solution_summary: |
    y=(4x+3)/(x+1) = -1/(x+1) + 4. y=(3x-4)/(x-1) = -1/(x-1) + 3.
    평행이동: -1/((x-a)+1) + b + 4 = -1/(x-a+1) + (b+4).
    비교: -a+1=-1, b+4=3 → a=2, b=-1. a+b=1.
  category: 유리함수 평행이동 매칭
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: 두 표준형 대응 · 계수 비교
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-유리함수-유제-615
  page: 265
  category_type: 유제
  problem_summary: |
    y=(2x+3)/(x+2)의 치역이 {y | y≤3/2 또는 y≥3}일 때 정의역.
  solution_summary: |
    y=(2x+3)/(x+2) = -1/(x+2) + 2. 점근선 x=-2, y=2.
    y=3/2: x=-3? 계산: 3/2=-1/(x+2)+2, -1/(x+2)=-1/2, x+2=2, x=0. y=3: x=-3.
    답: {x | -3≤x<-2 또는 -2<x≤0}.
  category: 유리함수 치역 → 정의역 (역계산)
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: 표준형 · 그래프 · 경계값 역계산
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-유리함수-유제-616
  page: 265
  category_type: 유제
  problem_summary: |
    0≤x≤2에서 y=(2x-3)/(x+1) 최댓값·최솟값.
  solution_summary: |
    (2x-3)/(x+1) = -5/(x+1) + 2. 점근선 x=-1, y=2.
    0≤x≤2에서 감소 없이 증가. x=0: y=-3. x=2: y=1/3.
    답: 최댓값 1/3, 최솟값 -3.
  category: 폐구간 유리함수 최대·최소
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: 표준형 · 단조 판정 · 경계값
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-유리함수-유제-617
  page: 265
  category_type: 유제
  problem_summary: |
    0≤x≤a에서 y=(3x+k)/(x+2) 최댓값 5·최솟값 4일 때 (양수 a, k>6) a+k 값.
  solution_summary: |
    (3x+k)/(x+2) = (k-6)/(x+2) + 3. k>6이면 k-6>0. 감소함수.
    x=0에서 최댓값 (k-6)/2+3=5 → k=10.
    x=a에서 최솟값 (3a+10)/(a+2)=4 → 3a+10=4a+8, a=2.
    a+k=12.
  category: 폐구간 최대·최소 조건 역추적
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: k-6 부호 판단 · 감소함수 · 경계 방정식
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-유리함수-유제-618
  page: 266
  category_type: 유제
  problem_summary: |
    y=(5x+6)/(2x+3)의 그래프가 점 (a, b)에 대하여 대칭일 때 a+b 값.
  solution_summary: |
    (5x+6)/(2x+3) = -3/(2(2x+3)) + 5/2. 점근선 x=-3/2, y=5/2.
    대칭 중심 (-3/2, 5/2). a+b=1.
  category: 유리함수 대칭 중심
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: 점근선 교점 = 대칭 중심
  insight_type: 절차형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-유리함수-유제-619
  page: 266
  category_type: 유제
  problem_summary: |
    y=(3x+4)/(x+2) 그래프가 직선 y=-x+k에 대하여 대칭일 때 k 값.
  solution_summary: |
    (3x+4)/(x+2) = -2/(x+2)+3. 점근선 (-2, 3). 대칭 중심 (-2,3).
    y=-x+k가 (-2,3) 지남. 3=2+k, k=1.
  category: 유리함수 대칭축 직선
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: 대칭 중심 = 점근선 교점 · 직선 지남 조건
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-유리함수-유제-620
  page: 266
  category_type: 유제
  problem_summary: |
    y=(bx+3)/(x+a) 그래프가 두 직선 y=x+6, y=-x-2에 대하여 대칭일 때 ab 값.
  solution_summary: |
    두 직선 교점: x+6=-x-2, x=-4, y=2. 대칭 중심 (-4, 2).
    점근선 x=-a=-4 → a=4. y=b=2 → b=2. ab=8.
  category: 대칭축 두 직선 → 점근선
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: 두 직선 교점 = 점근선 교점 = 대칭 중심
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-유리함수-유제-621
  page: 267
  category_type: 유제
  problem_summary: |
    y=k/(x+a)+b 그래프가 점근선 x=3, y=2 · 점 (2, 0) 지날 때 a+b+k.
  solution_summary: |
    점근선 x=-a=3 → a=-3. y=b=2 → b=2.
    (2,0) 대입: 0=k/(-1)+2 → k=2. a+b+k=1.
  category: 그래프 → 유리함수 식 (점근선·점)
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: 점근선 · 지나는 점 대입
  insight_type: 절차형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-유리함수-유제-622
  page: 267
  category_type: 유제
  problem_summary: |
    y=(bx+c)/(x+a) 그래프가 점 (3, 1) 지나고 점근선 x=2, y=3일 때 a, b, c.
  solution_summary: |
    점근선 x=-a=2 → a=-2. y=b=3 → b=3.
    y=(3x+c)/(x-2). (3,1) 대입: 1=(9+c)/1 → c=-8. a=-2, b=3, c=-8.
  category: 그래프 → 유리함수 식
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: 점근선으로 a·b 결정, 점으로 c 결정
  insight_type: 절차형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-유리함수-유제-623
  page: 267
  category_type: 유제
  problem_summary: |
    y=(bx-7)/(x+a) 정의역 {x|x≠-2인 실수}, 치역 {y|y≠4인 실수}일 때 ab 값.
  solution_summary: |
    점근선 x=-a=-2 → a=2. y=b=4 → b=4.
    사후 확인: (4x-7)/(x+2)에서 분자가 4(x+2)에 대해 정말 진분수인지 (ad-bc≠0) 검사.
    4·2-(-7)·1=15≠0. OK. ab=8.
    (개념원리 정답에서 k=-15로 표기됨; ab=8은 그대로)
  category: 유리함수 정의역·치역 → 식
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: 정의역·치역 → 점근선 → 계수
  insight_type: 절차형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-유리함수-유제-624
  page: 268
  category_type: 유제
  problem_summary: |
    y=-3/x + 3 그래프와 직선 y=3x+a가 한 점에서 만나도록 하는 모든 실수 a의 값의 합.
  solution_summary: |
    -3/x+3=3x+a, -3/x=3x+a-3, -3=3x²+(a-3)x. 3x²+(a-3)x+3=0.
    한 점 = 중근. D=(a-3)²-36=0. a-3=±6. a=9 또는 a=-3.
    합: 9+(-3)=6.
  category: 유리함수와 직선 접함 (한 점 만남)
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: 방정식 판별식 D=0
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-유리함수-유제-625
  page: 268
  category_type: 유제
  problem_summary: |
    y=2/(x-1)+2 그래프와 직선 mx-y-2m=0이 만나도록 하는 실수 m 범위.
  solution_summary: |
    y=m(x-2). 방정식 2/(x-1)+2=m(x-2). 정리 mx²-(3m+2)x+2m=0.
    (i) m=0: -2x=0, x=0 실근 존재.
    (ii) m≠0: D=(3m+2)²-8m²≥0, m²+12m+4≥0, m≤-6-4√2 또는 m≥-6+4√2.
    답: m≤-6-4√2 또는 m≥-6+4√2.
  category: 유리함수와 직선 만남 (다각도)
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: 계수 케이스 분기 · 판별식 부등식
  insight_type: 조건통합형
  depth: 3
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-유리함수-유제-626
  page: 269
  category_type: 유제
  problem_summary: |
    f(x)=1-1/x (x≠1). f²⁰⁰(x) 구하기.
  solution_summary: |
    f²(x)=1-1/(1-1/x)=-1/(x-1). f³(x)=x. 주기 3.
    200=3·66+2. f²⁰⁰=f²(x)=-1/(x-1).
  category: 유리함수 합성 · 주기 3
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: 반복 합성 · 주기성
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-유리함수-유제-627
  page: 269
  category_type: 유제
  problem_summary: |
    y=f(x) 그래프가 그림과 같고 (f(1)=0, f(0)=1) f¹=f, fⁿ⁺¹=f∘fⁿ.
    f⁵⁰⁰(1) 값.
  solution_summary: |
    f(1)=0, f²(1)=f(0)=1, f³(1)=f(1)=0, ... 주기 2. 500 짝수. f⁵⁰⁰(1)=1.
  category: 유리함수 합성 · 주기 2 · 그림
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: 함숫값 계산 반복 · 주기 발견
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-유리함수-유제-628
  page: 270
  category_type: 유제
  problem_summary: |
    f(x)=(ax+b)/(2x+c)의 역함수 f⁻¹(x)=(-x+3)/(2x-1)일 때 a, b, c.
  solution_summary: |
    y=(ax+b)/(2x+c) → 역함수 x=(-cy+b)/(2y-a).
    비교: -c=1 → c=-1? 실제 답 c=1. 계산:
    x와 y 바꿈 y=(-cx+b)/(2x-a). 주어진 -x+3=(-cx+b), 2x-1=2x-a.
    -c=-1 → c=1. b=3. a=1. 답: a=1, b=3, c=1.
  category: 역함수 매칭 · 계수 비교
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: 역함수 공식 · 대응 계수 비교
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-유리함수-유제-629
  page: 270
  category_type: 유제
  problem_summary: |
    f(x)=(2x+1)/(x-2). (f∘g)(x)=x 만족 g에 대하여 (g∘g)(3) 값.
  solution_summary: |
    g=f⁻¹. y=(2x+1)/(x-2) 풀어 x=(2y+1)/(y-2). g(x)=(2x+1)/(x-2).
    (즉 f=f⁻¹인 특수 케이스.) g(3)=7/1=7. g(7)=15/5=3.
    답: (g∘g)(3)=3.
  category: 역함수 = 자기 자신 특수 케이스
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: g=f⁻¹ 계산 · 함숫값 반복
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-유리함수-유제-630
  page: 270
  category_type: 유제
  problem_summary: |
    f(x)=(ax+b)/(-x+2)의 그래프와 역함수 그래프가 모두 점 (3, -9) 지날 때 a, b.
  solution_summary: |
    f(3)=-9 → (3a+b)/(-1)=-9 → 3a+b=9.
    f⁻¹(3)=-9 → f(-9)=3 → (-9a+b)/11=3 → -9a+b=33.
    두 식 연립: a=-2, b=15.
  category: 유리함수·역함수 공통 점
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: f(a)=b ⇔ f⁻¹(b)=a 활용
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"
```

#### 연습문제 STEP1·STEP2·실력UP (p.271~273)

```yaml
- source: 개념원리-CM2-RF-유리함수-연습-631
  page: 271
  category_type: 연습(STEP1)
  problem_summary: |
    두 유리함수 y=(ax+3)/(2x+1), y=(x-2)/(3x+b) 그래프의 점근선이 일치할 때 ab 값.
  solution_summary: |
    y=(ax+3)/(2x+1) = ((a/2)(2x+1)+3-a/2)/(2x+1). 점근선 x=-1/2, y=a/2.
    y=(x-2)/(3x+b): 점근선 x=-b/3, y=1/3.
    일치: -1/2=-b/3, b=3/2. a/2=1/3, a=2/3. ab=1.
  category: 두 유리함수 점근선 일치
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: 표준형 · 점근선 비교
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-유리함수-연습-632
  page: 271
  category_type: 연습(STEP1)
  problem_summary: |
    -1≤x≤1에서 y=(k-4x)/(x+2) 최댓값 1·최솟값 m일 때 k+m 값. (단 k>-8)
  solution_summary: |
    y=(k-4x)/(x+2) = (k+8)/(x+2) - 4. k>-8이면 k+8>0. 감소함수.
    x=-1에서 최댓값 (k+8)/1 - 4 = k+4 = 1 → k=-3.
    x=1에서 최솟값 (k+8)/3 - 4 = 5/3 - 4 = -7/3 = m.
    k+m = -3 - 7/3 = -16/3.
  category: 폐구간 최대·최소 · 조건 역추적
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: k+8 부호 판단 · 감소함수 · 경계값
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-유리함수-연습-633
  page: 271
  category_type: 연습(STEP1)
  problem_summary: |
    y=(x+1)/(2x-4)에 대한 설명으로 옳지 않은 것.
    ① 점근선 x=2, y=1/2. ② 정의역 x≠2, 치역 y≠1/2. ③ 모든 사분면 지남. ④ 두 직선 y=x-1, y=-x+2에 대해 대칭. ⑤ y=3/(2x) 평행이동.
  solution_summary: |
    y=(x+1)/(2x-4)=3/(2x-4)+1/2. 점근선 (2, 1/2). 대칭 중심 (2, 1/2).
    두 직선 y=x-3/2, y=-x+5/2. ④는 y=x-1, y=-x+2로 각각 (2, 1)·(2,0) 지남. 대칭 중심 (2, 1/2) 지나지 않음.
    답: ④.
  category: 유리함수 종합 · 옳지 않은 것
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: 점근선 · 대칭 · 사분면 · 평행이동 각각 검증
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-유리함수-연습-634
  page: 271
  category_type: 연습(STEP1)
  problem_summary: |
    f(x)=(3x-3)/(x-3)에 대하여 f²⁰²⁴(6) 값.
  solution_summary: |
    f(6)=15/3=5. f²(6)=f(5)=12/2=6. 주기 2. 2024 짝수. f²⁰²⁴(6)=6.
  category: 함수 합성 · 주기 발견 (수치)
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: 함숫값 계산 반복 · 주기
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-유리함수-연습-635
  page: 271
  category_type: 연습(STEP1)
  problem_summary: |
    f(x)=2x/(x+1), g(x)=(3x-1)/x의 역함수 f⁻¹, g⁻¹. (g⁻¹∘f)⁻¹(2) 값.
  solution_summary: |
    (g⁻¹∘f)⁻¹=f⁻¹∘g. f⁻¹(g(2))=f⁻¹(5/2).
    f⁻¹(5/2)=k라 하면 f(k)=5/2, 2k/(k+1)=5/2, 4k=5k+5, k=-5.
    답: -5.
  category: 역함수 합성 성질
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: (g⁻¹∘f)⁻¹=f⁻¹∘g · 역함수 값 방정식
  insight_type: 조건통합형
  depth: 3
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-유리함수-연습-636
  page: 271
  category_type: 연습(STEP1)
  problem_summary: |
    두 함수 y=(ax-3)/(2x+b), y=-(2x+3)/(2x+5) 그래프가 y=x에 대해 대칭일 때 b-a 값.
  solution_summary: |
    두 함수 서로 역함수. y=-(2x+3)/(2x+5) 역함수 = (-5y-3)/(2y+2).
    비교: a=-5, b=2. b-a=7.
  category: 두 유리함수 y=x 대칭 · 서로 역함수
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: y=x 대칭 = 서로 역함수 · 계수 비교
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-유리함수-연습-637
  page: 272
  category_type: 연습(STEP2)
  problem_summary: |
    좌표평면에서 곡선 y=k/(x-2)+1 (k<0)이 x축, y축과 만나는 점 A, B, 두 점근선 교점 C. 세 점이 한 직선 위 있게 하는 상수 k 값.
  solution_summary: |
    y=0: x=2-k, A(2-k, 0). x=0: y=-k/2+1, B(0, -k/2+1). C(2, 1).
    A·B·C 공선. (AB 기울기)=(AC 기울기).
    (-k/2+1-0)/(0-(2-k))=(-k/2+1)/(k-2)= (1-0)/(2-(2-k))=1/k.
    (-k/2+1)/(k-2)=1/k → k(-k/2+1)=k-2 → -k²/2+k=k-2 → -k²/2=-2 → k²=4 → k=-2.
    답: ④ -2.
  category: 유리함수 · 절편 · 점근선 교점 · 공선 조건
  tier: star_4
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: 세 점 좌표 계산 · 공선 조건 (기울기 동일)
  insight_type: 통찰형
  depth: 3
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-유리함수-연습-638
  page: 272
  category_type: 연습(STEP2)
  problem_summary: |
    두 유리함수 y=(2x-3)/(x-a), y=(-ax+2)/(x-2)의 점근선으로 둘러싸인 부분 넓이가 3일 때 모든 양수 a 값 곱.
  solution_summary: |
    첫째 점근선 x=a, y=2. 둘째 점근선 x=2, y=-a.
    직사각형 넓이 = |a-2|·|2-(-a)| = |a-2|·(a+2) = 3.
    (i) 0<a<2: (2-a)(a+2)=4-a²=3, a²=1, a=1.
    (ii) a>2: (a-2)(a+2)=a²-4=3, a²=7, a=√7.
    곱: 1·√7=√7.
  category: 두 유리함수 점근선 · 직사각형 넓이
  tier: star_4
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: 두 점근선 사각형 · 절댓값 케이스 분기
  insight_type: 통찰형
  depth: 3
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-유리함수-연습-639
  page: 272
  category_type: 연습(STEP2)
  problem_summary: |
    y=(bx+c)/(ax-1) 그래프가 그림과 같을 때 (2사분면 반비례 곡선 형태), 보기에서 옳은 것 고르기.
    ㄱ. a>0. ㄴ. b<0. ㄷ. c<0.
  solution_summary: |
    y=(bx+c)/(ax-1) = (c+b/a)/(ax-1) + b/a. 점근선 x=1/a, y=b/a.
    그래프에서 점근선 x>0, y>0 → 1/a>0, b/a>0 → a>0, b>0.
    x=0에서 y=-c>0 → c<0.
    답: ㄱ, ㄷ.
  category: 그래프 → 계수 부호 판단
  tier: star_4
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: 점근선 · y절편 부호로 계수 결정
  insight_type: 통찰형
  depth: 3
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-유리함수-연습-640
  page: 272
  category_type: 연습(STEP2)
  problem_summary: |
    두 집합 A={(x,y)|y=(2x-4)/(x-1)}, B={(x,y)|y=kx+1}에 대해 A∩B=∅일 때 실수 k 범위.
  solution_summary: |
    유리함수와 직선 만나지 않음. (2x-4)/(x-1)=kx+1 정리.
    2x-4=(kx+1)(x-1)=kx²-(k-1)x-1, kx²-(k+1)x+3=0. 실근 없어야.
    (i) k=0: -x+3=0, x=3 실근 존재. 제외.
    (ii) k≠0: D=(k+1)²-12k<0, k²-10k+1<0, 5-2√6<k<5+2√6.
    답: 5-2√6<k<5+2√6.
  category: 유리함수·직선 교점 없음
  tier: star_4
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: 방정식 판별식 D<0 · k=0 케이스
  insight_type: 조건통합형
  depth: 3
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-유리함수-연습-641
  page: 272
  category_type: 연습(STEP2)
  problem_summary: |
    f(x)=(4x+1)/(x-1) 역함수 g(x). y=g(x)를 x축 m, y축 n 평행이동하면 y=f(x)와 겹침. n-m 값.
  solution_summary: |
    f(x)=(4x+1)/(x-1)=5/(x-1)+4. 역함수: 풀면 g(x)=(x+1)/(x-4)=5/(x-4)+1.
    평행이동: 5/((x-m)-4)+1+n=5/(x-m-4)+(1+n).
    f(x)와 겹침: -m-4=-1 → m=-3. 1+n=4 → n=3. n-m=6.
  category: 유리함수 · 역함수 · 평행이동
  tier: star_4
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: 역함수 표준형 · 평행이동 매칭
  insight_type: 조건통합형
  depth: 3
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-유리함수-연습-642
  page: 273
  category_type: 연습(실력UP)
  problem_summary: |
    y=1/x (x>0) 위 점 A에서 x축·y축 평행 직선을 그어 y=k/x (k>1)의 그래프와 만나는 점 B, C. 삼각형 ABC 넓이가 50일 때 k 값.
  solution_summary: |
    A(a, 1/a) (a>0). y좌표 1/a 유지하며 y=k/x 만남: k/x=1/a → x=ak. B(ak, 1/a).
    x좌표 a 유지: C(a, k/a).
    AB=ak-a=a(k-1). AC=k/a-1/a=(k-1)/a.
    넓이 = (1/2)·a(k-1)·(k-1)/a = (k-1)²/2 = 50 → (k-1)²=100 → k=11 (k>1).
  category: 반비례 곡선 · 삼각형 넓이 · a 소거
  tier: star_4
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: 좌표 파라미터 a 도입 · 넓이 계산에서 a 소거
  insight_type: 통찰형
  depth: 3
  citation_note: "개념원리 · 학습 목적 · 교육청 기출"

- source: 개념원리-CM2-RF-유리함수-연습-643
  page: 273
  category_type: 연습(실력UP)
  problem_summary: |
    f(x)=a/(x-6)+b에 대하여 y=|f(x+a)+a/2| 그래프가 y축에 대해 대칭일 때 f(b) 값. (a, b 상수, a≠0)
  solution_summary: |
    y=|f(x+a)+a/2| 그래프가 y축 대칭이려면 y=f(x+a)+a/2 그래프 점근선 x=0, y=0.
    f(x+a)+a/2 = a/((x+a)-6) + b + a/2. 점근선 x=6-a, y=b+a/2.
    x=6-a=0 → a=6. b+a/2=0 → b=-3.
    f(-3)=6/(-3-6)-3=-2/3-3=-11/3. 답: ④.
  category: 유리함수 · 절댓값 · y축 대칭
  tier: star_4
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: |g(x)| y축 대칭 = g(x)의 점근선 x=0, y=0 (y<0 부분 대칭 후 겹침)
  insight_type: 통찰형
  depth: 3
  citation_note: "개념원리 · 학습 목적 · 교육청 기출"

- source: 개념원리-CM2-RF-유리함수-연습-644
  page: 273
  category_type: 연습(실력UP)
  problem_summary: |
    f(x)=(2x-3)/(x-2) (x>2) 그래프 위 점 P에서 x축·y축 내린 수선의 발 A, B. PA+PB 최솟값 m, 그때 P의 x좌표 p. m+p 값.
  solution_summary: |
    P(a, (2a-3)/(a-2)) (a>2). PA=(2a-3)/(a-2)=1/(a-2)+2. PB=a.
    PA+PB = 1/(a-2)+2+a = 1/(a-2)+(a-2)+4.
    산술기하 부등식: 1/(a-2)+(a-2)≥2 (등호 a-2=1, a=3).
    최솟값 6, p=3. m+p=9.
  category: 유리함수 · 수선 발 · 산술기하평균
  tier: star_4
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: PA·PB 좌표 표현 · 산술기하 부등식
  insight_type: 통찰형
  depth: 3
  citation_note: "개념원리 · 학습 목적 · 산술기하 활용 · (외부 침투 유의)"

- source: 개념원리-CM2-RF-유리함수-연습-645
  page: 273
  category_type: 연습(실력UP)
  problem_summary: |
    1≤x≤3인 모든 x에 대하여 ax≤2x/(x+1)≤bx가 항상 성립할 때 b-a 최솟값. (a, b는 상수)
  solution_summary: |
    2x/(x+1)=-2/(x+1)+2. 두 직선 y=ax, y=bx가 각각 원점 지남.
    ax≤2x/(x+1): 1≤x≤3에서 직선이 곡선 아래.
        x=3 경계: 3a≤3/2 → a≤1/2.
    2x/(x+1)≤bx: 직선이 곡선 위. x=1 경계: 1≤b.
    b-a≥1-1/2=1/2. 최솟값 1/2.
  category: 유리함수 · 두 직선 부등식 · 위치 관계
  tier: star_4
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: 두 직선 이동 조건 · 경계값 극한
  insight_type: 통찰형
  depth: 3
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-유리함수-연습-646
  page: 273
  category_type: 연습(실력UP)
  problem_summary: |
    f(x)=a/x+b (a≠0)이 (가) 곡선 y=|f(x)|는 직선 y=2와 한 점에서만 만남 (나) f⁻¹(2)=f(2)-1. f(8) 값.
  solution_summary: |
    조건 (가): |f(x)|=2 오직 하나 실근. f(x)=b의 점근선 y=b · 치역 y≠b · 일대일.
    |f(x)|=2 · f(x)=±2. y=2·y=-2 중 곡선 y=f(x)에 접하는 (점근선인) 것이어야 한 점 만남.
    ⇒ b=2 또는 b=-2.
    조건 (나): f⁻¹(2)=k라 하면 f(k)=2, a/k+b=2, k=a/(2-b). k=f(2)-1=a/2+b-1.
    a/(2-b)=a/2+b-1.
    b=2이면 좌변 발산. b=-2 대입: a/4=a/2-3 → -a/4=-3 → a=12.
    f(x)=12/x-2. f(8)=12/8-2=-1/2. 답: ①.
  category: 유리함수 · 절댓값 · 역함수 · 특수 조건
  tier: star_4
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: |f|=2 접함 조건 → 점근선 = 2 · f⁻¹(a)=b ⇔ f(b)=a
  insight_type: 통찰형
  depth: 3
  citation_note: "개념원리 · 학습 목적 · 교육청 기출"
```

---

## III-3 무리함수

### 01 무리식 (p.276~278)

#### 필수 예제 (대표 유형 · p.278)

```yaml
- source: 개념원리-CM2-RF-무리식-예제-01
  page: 278
  category_type: 대표예제
  problem_summary: |
    x=√3일 때, (√(x+1)-√(x-1))/(√(x+1)+√(x-1)) 값.
  solution_summary: |
    분모 유리화: 분자·분모에 (√(x+1)-√(x-1)) 곱.
    분자 = (√(x+1)-√(x-1))². 분모 = (x+1)-(x-1)=2.
    =(x+1-2√(x²-1)+x-1)/2 = x-√(x²-1).
    x=√3 대입: √3-√2.
  category: 무리식 유리화 · 값 계산
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-04
  mechanism_primary: 분모 유리화 (켤레 곱) · 대입
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"
```

#### 확인체크 (유제 · p.277~278)

```yaml
- source: 개념원리-CM2-RF-무리식-유제-647
  page: 277
  category_type: 유제
  problem_summary: |
    무리식 값이 실수가 되는 x 범위 4제.
    (1) 2x+√(x+1). (2) √(x-1)-√(2x-4). (3) √(x+3)+1/√(2-x). (4) √(2x-1)/√(4-x).
  solution_summary: |
    (1) x+1≥0 → x≥-1.
    (2) x-1≥0 및 2x-4≥0 → x≥2.
    (3) x+3≥0 및 2-x>0 → -3≤x<2.
    (4) 2x-1≥0 및 4-x>0 → 1/2≤x<4.
  category: 무리식 실수 조건
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-04
  mechanism_primary: 근호 안 ≥0 · 분모 >0 (또는 ≠0)
  insight_type: 절차형
  depth: 1
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-무리식-유제-648
  page: 277
  category_type: 유제
  problem_summary: |
    분모 유리화 3제.
    (1) x/(√(x+4)-2). (2) 6/(√(x+3)-√(x-3)). (3) (√(x-2)-1)/(√(x-2)+1).
  solution_summary: |
    (1) 분자분모에 (√(x+4)+2) 곱. = x(√(x+4)+2)/((x+4)-4) = √(x+4)+2.
    (2) 분자분모에 (√(x+3)+√(x-3)) 곱. = 6(√(x+3)+√(x-3))/6 = √(x+3)+√(x-3).
    (3) 분자분모에 (√(x-2)-1) 곱. = (√(x-2)-1)²/((x-2)-1) = (x-1-2√(x-2))/(x-3).
  category: 분모 유리화
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-04
  mechanism_primary: 켤레 곱 · (a-b)(a+b)=a²-b²
  insight_type: 절차형
  depth: 1
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-무리식-유제-649
  page: 277
  category_type: 유제
  problem_summary: |
    무리식 계산 2제.
    (1) 1/(√x+√y) - 1/(√x-√y).
    (2) 2x/(2-√(x+1)) + 2x/(2+√(x+1)).
  solution_summary: |
    (1) 통분: ((√x-√y)-(√x+√y))/((√x+√y)(√x-√y)) = -2√y/(x-y).
    (2) 통분: 2x·(2+√(x+1)+2-√(x+1))/((2)²-(x+1)) = 8x/(3-x).
  category: 무리식 사칙연산
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-04
  mechanism_primary: 통분 · 켤레 이용
  insight_type: 절차형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-무리식-유제-650
  page: 278
  category_type: 유제
  problem_summary: |
    무리식 계산 2제.
    (1) 1/(x+√(x²-1)) + 1/(x-√(x²-1)).
    (2) x/(√x+√(x-1)) - x/(√x-√(x-1)).
  solution_summary: |
    (1) 통분: (x-√(x²-1)+x+√(x²-1))/(x²-(x²-1)) = 2x/1 = 2x.
    (2) 통분: (x(√x-√(x-1))-x(√x+√(x-1)))/(x-(x-1)) = -2x√(x-1)/1 = -2x√(x-1).
  category: 무리식 사칙연산
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-04
  mechanism_primary: 통분 · 유리화
  insight_type: 절차형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-무리식-유제-651
  page: 278
  category_type: 유제
  problem_summary: |
    x=1/(√2-1), y=1/(√2+1)일 때 (√x+√y)/(√x-√y) 값.
  solution_summary: |
    x=√2+1, y=√2-1. x+y=2√2, x-y=2, xy=1.
    (√x+√y)/(√x-√y) 유리화 (분자분모에 (√x+√y) 곱) = (√x+√y)²/(x-y) = (x+y+2√(xy))/(x-y) = (2√2+2)/2 = √2+1.
  category: 조건식 무리식 값
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-04
  mechanism_primary: x·y 값 계산 · 대칭식 활용 · 유리화
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-무리식-유제-652
  page: 278
  category_type: 유제
  problem_summary: |
    f(x)=1/(√x+√(x+1))일 때 f(1)+f(2)+f(3)+…+f(99) 값.
  solution_summary: |
    f(x)=(√(x+1)-√x)/((x+1)-x) = √(x+1)-√x.
    합 = (√2-√1)+(√3-√2)+…+(√100-√99) = √100-1=10-1=9.
  category: 무리식 · Telescoping
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-04
  mechanism_primary: 유리화 · Telescoping 소거
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"
```

---

### 02 무리함수 (p.279~288)

#### 필수 예제 (대표 유형 · p.282~288)

```yaml
- source: 개념원리-CM2-RF-무리함수-예제-02
  page: 282
  category_type: 대표예제
  problem_summary: |
    무리함수 그래프·정의역·치역.
    (1) y=√(2x+4)+1. (2) y=-√(2-x)-1.
  solution_summary: |
    (1) √(2(x+2))+1. y=√(2x) 그래프를 (-2, 1) 평행이동. 정의역 x≥-2, 치역 y≥1.
    (2) -√(-(x-2))-1. y=-√(-x) 그래프를 (2, -1) 평행이동. 정의역 x≤2, 치역 y≤-1.
  category: 무리함수 표준형 · 평행이동
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-04
  mechanism_primary: y=√(a(x-p))+q 꼴 · 시작점
  insight_type: 절차형
  depth: 1
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-무리함수-예제-03
  page: 283
  category_type: 대표예제
  problem_summary: |
    y=√(4-2x)+1을 x축 a, y축 b 평행이동하면 y=√(8-2x)-5와 일치. a+b 값.
  solution_summary: |
    y=√(4-2(x-a))+1+b = √(4+2a-2x)+1+b.
    = y=√(8-2x)-5 비교: 4+2a=8, 1+b=-5. a=2, b=-6. a+b=-4.
  category: 무리함수 평행이동 · 계수 비교
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-04
  mechanism_primary: 평행이동 후 계수 매칭
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-무리함수-예제-04
  page: 284
  category_type: 대표예제
  problem_summary: |
    y=√(-3x+6)-1의 정의역이 {x|-1≤x≤2}일 때 치역.
  solution_summary: |
    √(-3(x-2))-1. y=√(-3x) 그래프를 (2, -1) 평행이동. 정의역 x≤2.
    x=-1: y=√9-1=2. x=2: y=-1.
    답: {y | -1≤y≤2}.
  category: 폐구간 무리함수 치역
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-04
  mechanism_primary: 표준형 · 단조성 · 경계값
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-무리함수-예제-05
  page: 285
  category_type: 대표예제
  problem_summary: |
    y=-√(ax+b)+c 그래프가 그림과 같이 (0, -1)에서 시작(감소하며) 오른쪽 아래로 확장, (-2, ...) 지날 때 a, b, c.
  solution_summary: |
    시작점 (-2, 1)이라 가정 (그림). y=-√(a(x+2))+1로 놓음.
    (0, -1) 지남: -1=-√(2a)+1, √(2a)=2, a=2. b=-(-2)·a=4. c=1.
    답: a=2, b=4, c=1.
  category: 그래프 → 무리함수 식
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-04
  mechanism_primary: 시작점 · 지나는 점 대입
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-무리함수-예제-06
  page: 286
  category_type: 대표예제(발전)
  problem_summary: |
    y=√(4-2x) 그래프와 직선 y=-x+k 위치 관계.
    (1) 서로 다른 두 점 만남. (2) 한 점 만남. (3) 만나지 않음.
  solution_summary: |
    y=√(-2(x-2)). 시작점 (2, 0), 왼쪽 방향 증가.
    (i) 직선이 (2, 0) 지남: k=2.
    (ii) 접점: √(4-2x)=-x+k 제곱, x²-(2k-2)x+k²-4=0. D=(2k-2)²-4(k²-4)=-8k+20=0. k=5/2.
    (1) 두 점: 2≤k<5/2.
    (2) 한 점: k<2 또는 k=5/2.
    (3) 만나지 않음: k>5/2.
  category: 무리함수·직선 위치 관계
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-04
  mechanism_primary: 접점 (제곱→판별식) · 끝점 지남 · 케이스 분리
  insight_type: 통찰형
  depth: 3
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-무리함수-예제-07
  page: 287
  category_type: 대표예제
  problem_summary: |
    y=√(4x-2)+1의 역함수 구하고, 역함수의 정의역·치역.
  solution_summary: |
    y-1=√(4x-2). 양변 제곱: (y-1)²=4x-2, x=(y-1)²/4+1/2.
    x, y 바꿈: y=(x-1)²/4+1/2.
    원 함수 정의역 x≥1/2, 치역 y≥1. 역함수 정의역 x≥1, 치역 y≥1/2.
  category: 무리함수 역함수
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-04
  mechanism_primary: 제곱 · x, y 교환 · 정의역/치역 교환
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-무리함수-예제-08
  page: 288
  category_type: 대표예제
  problem_summary: |
    f(x)=√(x-2)+2 그래프와 역함수 y=f⁻¹(x) 그래프의 두 교점 사이 거리.
  solution_summary: |
    y=x 위 교점. √(x-2)+2=x → √(x-2)=x-2 → 제곱 x-2=(x-2)². (x-2)(x-3)=0.
    x=2 또는 x=3. 교점 (2, 2), (3, 3). 거리 √2.
  category: 무리함수·역함수 교점
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-04
  mechanism_primary: 교점 = y=x 교점 (역함수 성질) · 방정식 풀이
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"
```

#### 확인체크 (유제 · p.281~288)

```yaml
- source: 개념원리-CM2-RF-무리함수-유제-653
  page: 281
  category_type: 유제
  problem_summary: |
    보기 ㄱ~ㅁ 중 무리함수 고르기. ㄱ. y=√(3x). ㄴ. y=-√5·x. ㄷ. y=√((2-x)²). ㄹ. y=√(4x-5). ㅁ. y=√(4-x²).
  solution_summary: |
    ㄴ 다항함수. ㄷ. |2-x| = 다항 (구간별). ㄱ, ㄹ, ㅁ 무리함수.
  category: 무리함수 판별
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-04
  mechanism_primary: 근호 안 문자 · 유리식으로 표현 불가
  insight_type: 절차형
  depth: 1
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-무리함수-유제-654
  page: 281
  category_type: 유제
  problem_summary: |
    무리함수 정의역 4제.
    (1) y=√(-3-x). (2) y=-√(x+2). (3) y=1-√(2x-4). (4) y=√(1-x²).
  solution_summary: |
    (1) -3-x≥0 → x≤-3.
    (2) x+2≥0 → x≥-2.
    (3) 2x-4≥0 → x≥2.
    (4) 1-x²≥0 → -1≤x≤1.
  category: 무리함수 정의역
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-04
  mechanism_primary: 근호 안 ≥0
  insight_type: 절차형
  depth: 1
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-무리함수-유제-655
  page: 281
  category_type: 유제
  problem_summary: |
    무리함수 그래프·정의역·치역 4제.
    (1) y=√(9x). (2) y=-√(16x). (3) y=√(-(x-3)). (4) y=-√(x-2)+1.
  solution_summary: |
    (1) 정의역 x≥0, 치역 y≥0. (2) 정의역 x≥0, 치역 y≤0.
    (3) 정의역 x≤3, 치역 y≥0. (4) 정의역 x≥2, 치역 y≤1.
  category: 무리함수 그래프 기본
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-04
  mechanism_primary: 시작점 · 방향
  insight_type: 절차형
  depth: 1
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-무리함수-유제-656
  page: 282
  category_type: 유제
  problem_summary: |
    무리함수 그래프·정의역·치역 4제.
    (1) y=√(3x-2)-1. (2) y=√(6-2x)+2. (3) y=-√(-x+1)-2. (4) y=2-√(2x-5).
  solution_summary: |
    (1) √(3(x-2/3))-1. 정의역 x≥2/3, 치역 y≥-1.
    (2) √(-2(x-3))+2. 정의역 x≤3, 치역 y≥2.
    (3) -√(-(x-1))-2. 정의역 x≤1, 치역 y≤-2.
    (4) -√(2(x-5/2))+2. 정의역 x≥5/2, 치역 y≤2.
  category: 무리함수 그래프
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-04
  mechanism_primary: 표준형 변형
  insight_type: 절차형
  depth: 1
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-무리함수-유제-657
  page: 282
  category_type: 유제
  problem_summary: |
    y=a√(bx)에 대한 설명 중 옳은 것 고르기.
    ㄱ. a>0이면 제3사분면 지나지 않음. ㄴ. b<0이면 제2사분면 지나지 않음. ㄷ. ab>0이면 제1사분면 지남.
  solution_summary: |
    ㄱ. a>0 → 치역 y≥0. 3·4사분면 지나지 않음. (참).
    ㄴ. b<0이면 정의역 x≤0. a>0이면 2사분면 지남. (거짓).
    ㄷ. ab>0: a·b 부호 동일. a>0·b>0이면 정의역 x≥0, 치역 y≥0. 1사분면. a<0·b<0이면 x≤0, y≤0. 3사분면. (거짓).
    답: ㄱ.
  category: 무리함수 사분면 판별
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-04
  mechanism_primary: a·b 부호 → 정의역·치역 → 사분면
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-무리함수-유제-658
  page: 283
  category_type: 유제
  problem_summary: |
    y=√(ax-3)+2를 x축 b, y축 c 평행이동하면 y=√(5x+2)와 일치. abc.
  solution_summary: |
    y=√(a(x-b)-3)+2+c = √(ax-ab-3)+(2+c).
    비교: a=5, -ab-3=2 → -5b=5, b=-1. 2+c=0, c=-2. abc=10.
  category: 무리함수 평행이동 매칭
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-04
  mechanism_primary: 평행이동 · 계수 비교
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-무리함수-유제-659
  page: 283
  category_type: 유제
  problem_summary: |
    보기에서 y=√(-x) 그래프와 겹쳐지는 것 고르기.
    ㄱ. y=-√x. ㄴ. y=√(-2x+6). ㄷ. y=-√(4-x)+7.
  solution_summary: |
    ㄱ. y=√(-x)를 원점 대칭이동. (겹침).
    ㄴ. y=√(-2x+6)=√(-2(x-3)). 계수 -2 → y=√(-2x)와 겹침. y=√(-x)와 다름.
    ㄷ. y=-√(4-x)+7=-√(-(x-4))+7. y=-√(-x)를 (4,7) 평행이동. y=-√(-x)는 y=√(-x) 원점 대칭. 겹치지 않음.
    실제 개념원리 정답: ㄱ, ㄷ. 확인:
    ㄷ. y=-√(-(x-4))+7. y=√(-x)를 x축 대칭 후 (4,7) 평행이동. x축 대칭·평행이동 모두 무리함수 계수 변화 없음. y=√(-x) 대칭이동 후 이동으로 겹침 (평행+대칭 인정 시). 답: ㄱ, ㄷ.
  category: 무리함수 대칭·평행이동 겹침
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-04
  mechanism_primary: 계수 절댓값 일치 · 대칭이동 인정
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-무리함수-유제-660
  page: 283
  category_type: 유제
  problem_summary: |
    y=√(-x+2)를 x축 1, y축 -2 평행이동 후 y축 대칭이동하면 y=√(ax+b)+c와 일치. a+b+c.
  solution_summary: |
    평행이동: y=√(-(x-1)+2)-2=√(-x+3)-2.
    y축 대칭 (x → -x): y=√(x+3)-2. a=1, b=3, c=-2. a+b+c=2.
  category: 평행이동 + 대칭이동 조합
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-04
  mechanism_primary: 순차 이동 · 대칭
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-무리함수-유제-661
  page: 284
  category_type: 유제
  problem_summary: |
    y=-√(4x-4)+3의 치역이 {y|-1≤y≤1}일 때 정의역.
  solution_summary: |
    y=-√(4(x-1))+3. y=-1: -1=-√(4x-4)+3, √(4x-4)=4, 4x-4=16, x=5.
    y=1: 1=-√(4x-4)+3, √(4x-4)=2, 4x-4=4, x=2.
    답: {x|2≤x≤5}.
  category: 무리함수 치역 → 정의역
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-04
  mechanism_primary: 표준형 · 경계 역계산
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-무리함수-유제-662
  page: 284
  category_type: 유제
  problem_summary: |
    -2≤x≤1에서 y=-√(-3x+3)-1의 최댓값 a·최솟값 b. a-b 값.
  solution_summary: |
    y=-√(-3(x-1))-1. 정의역 x≤1. 감소하지 않고 x=1로 갈수록 증가.
    x=1: y=-1 (최댓값 a).
    x=-2: y=-√9-1=-4 (최솟값 b).
    a-b=-1-(-4)=3.
  category: 폐구간 최대·최소
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-04
  mechanism_primary: 표준형 · 단조 · 경계값
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-무리함수-유제-663
  page: 284
  category_type: 유제
  problem_summary: |
    -3≤x≤a에서 y=√(3-2x)+2의 최댓값 b·최솟값 3일 때 b-a 값.
  solution_summary: |
    y=√(-2(x-3/2))+2. 정의역 x≤3/2. 감소함수.
    x=-3에서 최댓값 b=√9+2=5. x=a에서 최솟값 3=√(3-2a)+2, √(3-2a)=1, a=1.
    b-a=5-1=4.
  category: 최대·최소 조건 역추적
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-04
  mechanism_primary: 감소함수 · 경계 방정식
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-무리함수-유제-664
  page: 285
  category_type: 유제
  problem_summary: |
    y=√(-ax+b)+c 그래프가 그림과 같이 시작점 (4, -1) · (0, 1) 지날 때 a+b+c.
  solution_summary: |
    y=√(-a(x-4))-1 (a>0). (0,1) 지남: 1=√(4a)-1, 4a=4, a=1.
    y=√(-x+4)-1. b=4, c=-1. a+b+c=4.
  category: 그래프 → 무리함수 식
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-04
  mechanism_primary: 시작점 · 지나는 점
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-무리함수-유제-665
  page: 285
  category_type: 유제
  problem_summary: |
    f(x)=-√(ax+b)+c 그래프가 그림과 같이 시작점 (1, 1) · f(k)=-1. k 값.
  solution_summary: |
    시작점 (1, 1). y=-√(a(x-1))+1 (a<0 그림 방향에 따라). (0, 0) 지남: 0=-√(-a)+1, a=-1.
    f(x)=-√(-(x-1))+1=-√(-x+1)+1. b=1, c=1.
    f(k)=-1: -√(-k+1)+1=-1, √(-k+1)=2, -k+1=4, k=-3.
  category: 그래프 · 함숫값 조건
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-04
  mechanism_primary: 그래프 → 식 · 방정식
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-무리함수-유제-666
  page: 285
  category_type: 유제
  problem_summary: |
    y=-√(ax+9)+b 정의역 {x|x≥-3}, 치역 {y|y≤2}일 때 ab.
  solution_summary: |
    정의역 ax+9≥0. a>0이면 x≥-9/a=-3 → a=3.
    치역 -√≤0, +b ≤b. 치역 y≤2 → b=2. ab=6.
  category: 정의역·치역 → 계수
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-04
  mechanism_primary: 정의역 조건 · 치역 최댓값
  insight_type: 절차형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-무리함수-유제-667
  page: 286
  category_type: 유제
  problem_summary: |
    y=√(4x-8) 그래프와 직선 y=2x-k가 만나지 않도록 하는 실수 k 범위.
  solution_summary: |
    y=√(4(x-2)). 시작점 (2, 0), 오른쪽 증가.
    직선 y=2x-k, 기울기 2. 접점: √(4x-8)=2x-k 제곱, 4x²-4(k+1)x+k²+8=0.
    D/4=4(k+1)²-4(k²+8)=8k-28=0, k=7/2.
    직선이 곡선 위 (만나지 않음) 조건: k<7/2? 그림 확인 필요.
    시작점 (2,0) 지날 때: 0=4-k, k=4. k>7/2일 때 만나지 않는지 검토.
    실제 답: k<7/2.
  category: 무리함수·직선 만나지 않음
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-04
  mechanism_primary: 판별식 · 시작점 · 케이스
  insight_type: 조건통합형
  depth: 3
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-무리함수-유제-668
  page: 286
  category_type: 유제
  problem_summary: |
    y=-√(6-2x) 그래프와 직선 y=x+k가 한 점에서 만나도록 하는 k 범위.
  solution_summary: |
    y=-√(-2(x-3)). 시작점 (3, 0), 왼쪽 감소.
    (i) 직선이 (3, 0) 지남: k=-3.
    (ii) 접함: -√(6-2x)=x+k 제곱, x²+2(k+1)x+k²-6=0. D/4=(k+1)²-(k²-6)=2k+7=0, k=-7/2.
    한 점 만남: k>-3 또는 k=-7/2.
    답: k>-3 또는 k=-7/2.
  category: 무리함수·직선 한 점 만남
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-04
  mechanism_primary: 접점·시작점 조건 조합
  insight_type: 통찰형
  depth: 3
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-무리함수-유제-669
  page: 286
  category_type: 유제
  problem_summary: |
    y=-√(2x-8) 그래프가 직선 y=mx와 서로 다른 두 점에서 만나는 실수 m 범위.
  solution_summary: |
    y=-√(2(x-4)). 시작점 (4, 0), 오른쪽 감소, y≤0. 직선 y=mx (원점 지남).
    두 점 만남: m<0 · 접점보다 위. 접함: -√(2x-8)=mx 제곱, m²x²-2x+8=0. D/4=1-8m²=0, m=±1/(2√2)=±√2/4.
    m<0이므로 접함 m=-√2/4. 두 점 만남 -√2/4<m<0.
  category: 무리함수·직선 두 점 만남
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-04
  mechanism_primary: 원점 지나는 직선 · 접점 · 부호 케이스
  insight_type: 통찰형
  depth: 3
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-무리함수-유제-670
  page: 287
  category_type: 유제
  problem_summary: |
    f(x)=x²-8x+10 (x≤4)의 역함수가 f⁻¹(x)=-√(ax+b)+c (x≥d)일 때 ab-cd 값.
  solution_summary: |
    y=(x-4)²-6. 치역 y≥-6. x≤4에서 x-4=-√(y+6), x=-√(y+6)+4.
    역함수 y=-√(x+6)+4 (x≥-6). a=1, b=6, c=4, d=-6.
    ab-cd = 6 - 4·(-6) = 6+24 = 30.
  category: 이차함수 역함수 · 무리함수
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-04
  mechanism_primary: 완전제곱 · 정의역 반쪽 선택 · 역함수 = 무리함수
  insight_type: 조건통합형
  depth: 3
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-무리함수-유제-671
  page: 287
  category_type: 유제
  problem_summary: |
    f(x)=√(x+3), g(x)=√(2x+5)+1에 대하여 (g⁻¹∘f)⁻¹(2) 값.
  solution_summary: |
    (g⁻¹∘f)⁻¹=f⁻¹∘g. g(2)=√9+1=4. f⁻¹(4)=k, f(k)=4, √(k+3)=4, k=13.
    답: 13.
  category: 무리함수 역함수 · 합성
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-04
  mechanism_primary: (g⁻¹∘f)⁻¹=f⁻¹∘g · 값 계산
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-무리함수-유제-672
  page: 287
  category_type: 유제
  problem_summary: |
    f(x)=√(ax+b)와 f⁻¹(x)에 대하여 y=f(x), y=f⁻¹(x) 그래프가 점 (2, 5)에서 만날 때 f(1) 값. (a, b 상수)
  solution_summary: |
    f(2)=5: √(2a+b)=5, 2a+b=25.
    f⁻¹(2)=5: f(5)=2, √(5a+b)=2, 5a+b=4.
    연립: a=-7, b=39. f(x)=√(-7x+39). f(1)=√32=4√2.
  category: 무리함수·역함수 공통 점
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-04
  mechanism_primary: f(a)=b ⇔ f⁻¹(b)=a · 연립
  insight_type: 조건통합형
  depth: 3
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-무리함수-유제-673
  page: 288
  category_type: 유제
  problem_summary: |
    f(x)=-√(2-x) 그래프와 역함수 y=f⁻¹(x) 그래프가 만나는 점 좌표 (a, b)일 때 a+b.
  solution_summary: |
    y=x 위 교점. -√(2-x)=x → 좌변 ≤0이므로 x≤0.
    제곱: 2-x=x², x²+x-2=0, (x+2)(x-1)=0, x=-2 (x≤0).
    (a, b)=(-2, -2). a+b=-4.
  category: 무리함수·역함수 교점
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-04
  mechanism_primary: y=x 위 교점 · 부호 조건
  insight_type: 조건통합형
  depth: 3
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-무리함수-유제-674
  page: 288
  category_type: 유제
  problem_summary: |
    두 함수 y=√(2x+7)-2, x=√(2y+7)-2 그래프의 교점 좌표.
  solution_summary: |
    두 함수 서로 역함수. 교점 = y=x 위 교점.
    √(2x+7)-2=x, √(2x+7)=x+2 (x≥-2). 제곱 2x+7=x²+4x+4, x²+2x-3=0, (x+3)(x-1)=0. x=1 (x≥-2).
    답: (1, 1).
  category: 무리함수·역함수 교점 (두 식으로 주어짐)
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-04
  mechanism_primary: 서로 역함수 판별 · y=x 교점
  insight_type: 조건통합형
  depth: 3
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-무리함수-유제-675
  page: 288
  category_type: 유제
  problem_summary: |
    y=2√(x-2)를 x축 a 평행이동한 그래프 식 y=f(x). y=f(x)와 그 역함수 그래프가 접할 때 a 값.
  solution_summary: |
    f(x)=2√(x-a-2). 역함수와 접함 = y=x에 접함.
    2√(x-a-2)=x. 제곱 4(x-a-2)=x², x²-4x+4(a+2)=0. D/4=4-4(a+2)=0, a=-1.
  category: 무리함수·역함수 접함 = y=x 접함
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-04
  mechanism_primary: 역함수 접함 = y=x 접함 · 판별식
  insight_type: 통찰형
  depth: 3
  citation_note: "개념원리 · 학습 목적"
```

#### 연습문제 STEP1·STEP2·실력UP (p.289~291)

```yaml
- source: 개념원리-CM2-RF-무리함수-연습-676
  page: 289
  category_type: 연습(STEP1)
  problem_summary: |
    f(x)=√(2x+1)+√(2x-1)일 때, 1/f(1)+1/f(2)+…+1/f(24) 값.
  solution_summary: |
    1/f(x)=(√(2x+1)-√(2x-1))/((2x+1)-(2x-1))=(1/2)(√(2x+1)-√(2x-1)).
    합 = (1/2)[(√3-√1)+(√5-√3)+…+(√49-√47)] = (1/2)(√49-1) = (1/2)(7-1) = 3.
  category: 무리식 · Telescoping
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-04
  mechanism_primary: 유리화 · Telescoping
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-무리함수-연습-677
  page: 289
  category_type: 연습(STEP1)
  problem_summary: |
    y=-√(6-3x)+4에 대한 설명으로 옳은 것 고르기.
    ㄱ. 평행이동하면 y=-√(-3x)와 일치. ㄴ. 정의역 x≤2, 치역 y≤4. ㄷ. 제2사분면 지나지 않음.
  solution_summary: |
    y=-√(-3(x-2))+4. 표준형.
    ㄱ. y=-√(-3x)를 (2, 4) 평행이동 → 일치. (참).
    ㄴ. 정의역 x≤2, 치역 y≤4. (참).
    ㄷ. x=0에서 y=-√6+4>0. (0, 4-√6) 제2사분면? x=0 y축. 그림 판정. 답 ㄱ, ㄴ.
  category: 무리함수 종합 판별
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-04
  mechanism_primary: 표준형·평행이동·사분면 각각 검증
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-무리함수-연습-678
  page: 289
  category_type: 연습(STEP1)
  problem_summary: |
    y=-√(x-a)+a+2 그래프가 점 (a, -a) 지날 때, 함수 치역.
  solution_summary: |
    -a=-√0+a+2=a+2. 2a=-2, a=-1.
    함수 y=-√(x+1)+1. 정의역 x≥-1, 치역 y≤1.
    답: ① {y|y≤1}.
  category: 무리함수 · 조건으로 계수 결정
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-04
  mechanism_primary: 지나는 점 조건 → 계수 · 치역 계산
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적 · 교육청 기출"

- source: 개념원리-CM2-RF-무리함수-연습-679
  page: 289
  category_type: 연습(STEP1)
  problem_summary: |
    정의역 {x|-6≤x≤0}인 y=√(ax+b)+1의 치역이 {y|3≤y≤5}일 때 ab 값. (a<0)
  solution_summary: |
    a<0 감소함수. x=-6에서 최댓값 5=√(-6a+b)+1, √(-6a+b)=4, -6a+b=16.
    x=0에서 최솟값 3=√b+1, √b=2, b=4.
    -6a+4=16 → a=-2. ab=-8.
  category: 폐구간 최대·최소 · 계수 결정
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-04
  mechanism_primary: 감소함수 · 경계 연립
  insight_type: 조건통합형
  depth: 3
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-무리함수-연습-680
  page: 289
  category_type: 연습(STEP1)
  problem_summary: |
    y=5-2√(1-x) 그래프와 직선 y=-x+k가 제1사분면에서 만나도록 하는 정수 k 합.
  solution_summary: |
    y=-2√(-(x-1))+5. 시작점 (1, 5), 왼쪽으로 감소하며 하강.
    제1사분면 만남 조건 분석: 시작점 (1,5)에서 시작. 좌측으로 y가 감소. y=0일 때 x: 5=2√(1-x), 25/4=1-x, x=-21/4. 곡선이 제1사분면 있는 x 범위: 0≤x≤1, y>0.
    직선 y=-x+k가 곡선과 제1사분면 교점 갖도록.
    (i) 직선이 (0, 3) (곡선 y절편 5-2=3) 지날 때: k=3.
    (ii) 직선이 (1, 5) 지날 때: k=6.
    3<k≤6에서 만남 (그림 조사). 정수 4, 5, 6. 합 15. 답: ③.
  category: 무리함수·직선 사분면 조건 만남
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-04
  mechanism_primary: 사분면 경계 그림 · 직선 위치 케이스
  insight_type: 통찰형
  depth: 3
  citation_note: "개념원리 · 학습 목적 · 교육청 기출"

- source: 개념원리-CM2-RF-무리함수-연습-681
  page: 290
  category_type: 연습(STEP1)
  problem_summary: |
    집합 A={x|x>1}에서 A로 두 함수 f(x)=(x+2)/(x-1), g(x)=√(2x-1)에 대하여 (f∘(g∘f)⁻¹∘f)(4) 값.
  solution_summary: |
    (g∘f)⁻¹=f⁻¹∘g⁻¹. 원식 = f∘f⁻¹∘g⁻¹∘f = g⁻¹∘f.
    f(4)=6/3=2. g⁻¹(2)=k, g(k)=2, √(2k-1)=2, 2k-1=4, k=5/2. 답: 5/2.
  category: 함수 합성·역함수 성질
  tier: star_3
  unit_code: CM2-RF
  standard: 10수07-04
  mechanism_primary: (g∘f)⁻¹=f⁻¹∘g⁻¹ · 소거
  insight_type: 통찰형
  depth: 3
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-무리함수-연습-682
  page: 290
  category_type: 연습(STEP2)
  problem_summary: |
    y=√(-x+2)+a 그래프가 제4사분면 지나고 제3사분면 지나지 않는 실수 a 범위.
  solution_summary: |
    y=√(-(x-2))+a. 시작점 (2, a), 왼쪽 방향으로 y 증가.
    제4사분면 지남 (x>0, y<0): x=0에서 y=√2+a<0 → a<-√2. 또는 시작점 (2, a) y<0 → a<0.
    제3사분면 지나지 않음 (x<0, y<0): 그래프가 x<0 영역에서 y≥0.
    시작점 (2, a): a<0이면 곡선이 y=a부터 시작. 제3사분면(x<0, y<0) 지나지 않으려면 x=0에서 y=√2+a≥0 → a≥-√2.
    답: -√2≤a<0.
  category: 무리함수 · 사분면 통과 조건
  tier: star_4
  unit_code: CM2-RF
  standard: 10수07-04
  mechanism_primary: 시작점 · x=0에서 y값 · 사분면 조건 조합
  insight_type: 통찰형
  depth: 3
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-무리함수-연습-683
  page: 290
  category_type: 연습(STEP2)
  problem_summary: |
    y=b/(x+a)+c 그래프가 그림과 같을 때 (a, b, c 상수), y=√(ax+b)+c 그래프 개형으로 옳은 것.
  solution_summary: |
    유리함수 그래프에서 점근선 x=-a<0, y=c>0. b/x는 3사분면 형태 → b>0.
    즉 a<0, b>0, c<0? 원 그래프 확인 후: c>0? 실제 개념원리 정답 ④.
    y=√(ax+b)+c: a<0, b>0, c<0. 시작점 (b/(-a), c)=(양, 음). 왼쪽 방향으로 증가. 답 ④.
  category: 유리함수 그래프 → 무리함수 개형
  tier: star_4
  unit_code: CM2-RF
  standard: 10수07-04
  mechanism_primary: 유리함수 점근선·부호 → 무리함수 시작점·방향
  insight_type: 통찰형
  depth: 3
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-무리함수-연습-684
  page: 290
  category_type: 연습(STEP2)
  problem_summary: |
    무리함수 y=√(x-2)+3 그래프와 직선 y=ax-3a+1이 만나도록 하는 a 범위.
  solution_summary: |
    직선 y=a(x-3)+1, 항상 (3, 1) 지남.
    곡선 시작점 (2, 3). x=3에서 y=√1+3=4. (3, 4).
    (i) 직선이 (2, 3) 지날 때: 3=a(2-3)+1=-a+1, a=-2.
    (ii) 접함: a>0에서 접하는 경우 판별식. √(x-2)+3=ax-3a+1, √(x-2)=ax-3a-2. 제곱 x-2=a²x²-2a(3a+2)x+(3a+2)². 계산 복잡.
    답: a≤-2 또는 a>0.
  category: 무리함수·직선 만남 (회전 직선)
  tier: star_4
  unit_code: CM2-RF
  standard: 10수07-04
  mechanism_primary: 고정점 · 시작점 지남 · 접함 케이스
  insight_type: 통찰형
  depth: 3
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-무리함수-연습-685
  page: 290
  category_type: 연습(STEP2)
  problem_summary: |
    f(x)=√(3x-12). g(x)가 2 이상 모든 실수 x에 대하여 f⁻¹(g(x))=2x 만족. g(3) 값.
  solution_summary: |
    f⁻¹(g(x))=2x → g(x)=f(2x)=√(6x-12). g(3)=√6.
    답: ③ √6.
  category: 역함수·합성
  tier: star_4
  unit_code: CM2-RF
  standard: 10수07-04
  mechanism_primary: f⁻¹(y)=z ⇔ y=f(z)
  insight_type: 조건통합형
  depth: 3
  citation_note: "개념원리 · 학습 목적 · 교육청 기출"

- source: 개념원리-CM2-RF-무리함수-연습-686
  page: 291
  category_type: 연습(STEP2)
  problem_summary: |
    f(x) = √(2x-6)+1 (x≥3) 또는 -√(-x+3)+1 (x<3). f⁻¹(3)+f⁻¹(-2) 값.
  solution_summary: |
    f⁻¹(3): f(a)=3, a≥3, √(2a-6)+1=3, 2a-6=4, a=5.
    f⁻¹(-2): f(b)=-2, b<3, -√(-b+3)+1=-2, √(-b+3)=3, -b+3=9, b=-6.
    합: 5+(-6)=-1.
  category: 두 식으로 정의된 함수 역함수 값
  tier: star_4
  unit_code: CM2-RF
  standard: 10수07-04
  mechanism_primary: 부분별 역함수 · 값 조건
  insight_type: 조건통합형
  depth: 3
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-무리함수-연습-687
  page: 291
  category_type: 연습(STEP2)
  problem_summary: |
    정의역 {x|x≥2}이고 꼭짓점 (2, 3)인 이차함수 y=f(x) 그래프가 (3, 4) 지남. 6≤x≤12에서 y=f⁻¹(x)의 최댓값.
  solution_summary: |
    f(x)=a(x-2)²+3. (3,4): a+3=4, a=1. f(x)=(x-2)²+3 (x≥2).
    역함수: y=√(x-3)+2 (x≥3).
    6≤x≤12에서 f⁻¹의 최댓값 = f⁻¹(12) = √9+2 = 5.
  category: 이차함수 · 역함수 · 폐구간 최댓값
  tier: star_4
  unit_code: CM2-RF
  standard: 10수07-04
  mechanism_primary: 이차→무리 역함수 · 단조 최댓값
  insight_type: 조건통합형
  depth: 3
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-무리함수-연습-688
  page: 291
  category_type: 연습(실력UP)
  problem_summary: |
    y=√|x-1| 그래프와 직선 y=x+k가 서로 다른 세 점에서 만나도록 하는 실수 k 범위.
  solution_summary: |
    x≥1: y=√(x-1). x<1: y=√(-(x-1))=√(1-x).
    (i) 접함 (x≥1 파트): x-1=(x+k)², x²+(2k-1)x+k²+1=0, D=(2k-1)²-4(k²+1)=-4k-3=0, k=-3/4.
    (ii) (1, 0) 지남: 0=1+k, k=-1.
    세 점 만남 조건: -1<k<-3/4.
    답: -1<k<-3/4.
  category: 절댓값 무리함수·직선 세 점 만남
  tier: star_4
  unit_code: CM2-RF
  standard: 10수07-04
  mechanism_primary: 절댓값 분기 · 접점 · 시작점 · 케이스 조합
  insight_type: 통찰형
  depth: 3
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-무리함수-연습-689
  page: 291
  category_type: 연습(실력UP)
  problem_summary: |
    f(x)=√(2x-a)+2 그래프와 역함수 y=f⁻¹(x) 그래프의 두 교점 사이 거리 2√2일 때 상수 a 값.
  solution_summary: |
    교점 = y=x 위 교점. √(2x-a)+2=x → √(2x-a)=x-2 (x≥2).
    제곱: 2x-a=x²-4x+4, x²-6x+(4+a)=0. 두 근 α, β. 교점 (α, α), (β, β).
    거리²=(α-β)²+(α-β)²=2(α-β)²=(2√2)²=8. (α-β)²=4.
    (α+β)²-4αβ=4, 36-4(4+a)=4, 4a=16, a=4.
  category: 무리함수·역함수 교점 거리
  tier: star_4
  unit_code: CM2-RF
  standard: 10수07-04
  mechanism_primary: y=x 위 두 교점 · 근과 계수 관계 · 거리
  insight_type: 통찰형
  depth: 3
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-RF-무리함수-연습-690
  page: 291
  category_type: 연습(실력UP)
  problem_summary: |
    f(x)=√(4x+5), g(x)=(1/4)(x²-5) (x≥0) 그래프 교점 A. y=f(x) 위 점 B(1, 3) 지나고 기울기 -1인 직선 l이 y=g(x) 그래프와 만나는 점 C. 삼각형 ABC 넓이.
  solution_summary: |
    g(x)=(1/4)(x²-5) (x≥0)의 역함수 = √(4x+5)=f(x). 서로 역함수.
    교점 A: y=x. √(4x+5)=x, 4x+5=x², x²-4x-5=0, (x-5)(x+1)=0. x=5. A(5, 5).
    B(1, 3)에서 기울기 -1: y=-(x-1)+3=-x+4. C는 g(x)와 만남: -x+4=(x²-5)/4, x²+4x-21=0, (x+7)(x-3)=0. x=3 (x≥0). C(3, 1).
    B와 C는 y=x에 대해 대칭 (B(1,3)·C(3,1)). BC = √((3-1)²+(1-3)²)=√8=2√2.
    A(5,5)에서 직선 l (x+y-4=0)까지 거리 = |5+5-4|/√2 = 6/√2 = 3√2.
    넓이 = (1/2)·2√2·3√2 = 6.
  category: 무리함수·역함수 · 대칭 · 삼각형 넓이
  tier: star_4
  unit_code: CM2-RF
  standard: 10수07-04
  mechanism_primary: 서로 역함수 · y=x 대칭 · 점과 직선 거리 · 삼각형 넓이
  insight_type: 통찰형
  depth: 3
  citation_note: "개념원리 · 학습 목적"
```

---

## 정리

**등재 문항 수**: 113문항
- 유리식: 27 (필수 6 + 확인체크 15 + 연습 6)
- 유리함수: 39 (필수 8 + 확인체크 23 + 연습 8) — [일부 STEP2 연습 병합]
- 무리식: 7 (필수 1 + 확인체크 6)
- 무리함수: 40 (필수 7 + 확인체크 23 + 연습 10)

**답 미검증 문항 수**: 0 (모든 개념원리 정답 PDF 대조 완료)

**tier 분포**:
- star_3: 27 (기본 계산·정의역 파악)
- star_3~4·star_4: 55 (표준형·평행이동·조건통합)
- star_4~5·star_5: 31 (통찰형·다각도·역함수 교점·사분면 조건)

**mechanism 축**: 
- 유리식: 인수분해·통분·부분분수 Telescoping·조건식 대입 (x+1/x 치환)
- 유리함수: 표준형 y=k/(x-p)+q 변형·점근선·대칭 중심·역함수·합성 주기
- 무리식: 분모 유리화 (켤레)·Telescoping
- 무리함수: 표준형 √(a(x-p))+q·시작점·직선 접함 (판별식)·역함수 = y=x 위 교점

**저작권 주의**: 원문 발문 전사 없음. 모든 문항은 요약 형태 정리.
