---
name: mechanism-데이터-RPM-CM2-FN
description: RPM 공통수학2 (2022개정) 함수와 그래프 정독 데이터. 세션 54 (2026-07-20) 신설.
metadata:
  type: reference
  version: v1.0
  established: 2026-07-20
  source: RPM 공통수학2 (2022개정)
  section: 08 함수 (함수·합성함수·역함수·절댓값 그래프)
  tier_mapping:
    교과서문제: star_1~2
    유형익히기(대표문제): star_2~3
    유형익히기(상중하): star_3~4
    유형p(고난도): star_4
    시험에꼭나오는: star_3~4
    시험에꼭나오는(중요★): star_4~5
    서술형: star_3~4
    실력up: star_4~5
  unit_code: CM2-FN
  standard: 10수07-01·02
  citation_note: RPM · 학습 목적 · 저작권 준수 (원문 전사 없음)
  extract_range: "08 함수 · 교과서문제·유형익히기·시험꼭나오는·서술형·실력up · 유리무리 제외"
  pages: "116~135"
  policy_note: "발전문제(실력up)는 star_4~5만 · 유형익히기·기본유형 전수 수록"
---

# RPM 공통수학2 (2022개정) · 08 함수 정독 데이터

## 소단원 구성

- **08|1 함수** (유형 01~04, 21)
- **08|2 여러 가지 함수** (유형 05~08, 22)
- **08|3 합성함수** (유형 09~13, 18, 20)
- **08|4 역함수** (유형 14~20, 23)
- **08|5 절댓값 기호를 포함한 함수의 그래프** (유형 24)

---

## Section A. 교과서 문제 정복하기 (p.117·119, 0766~0792)

### 08|1 함수

- source: RPM-CM2-FN-함수-#0766
  page: 117
  category_type: 교과서문제
  problem_summary: |
    화살표 대응도 (X→Y): X의 원소 2에 Y의 원소가 0·2 두 개 대응. 함수 판별.
  solution_summary: |
    원소 하나에 두 개 대응 → 함수가 아니다.
  category: 함수 판별 (대응도)
  tier: star_2
  unit_code: CM2-FN
  standard: 10수07-01
  mechanism_primary: 함수-정의-판별
  insight_type: 절차형
  depth: 1
  citation_note: "RPM · 학습 목적"

- source: RPM-CM2-FN-함수-#0767
  page: 117
  category_type: 교과서문제
  problem_summary: |
    화살표 대응도: X={a,b,c,d}→Y={0,1,2}. 함수인 경우 정의역·공역·치역 구하기.
  solution_summary: |
    함수 O. 정의역 {a,b,c,d}, 공역 {0,1,2}, 치역 {0,1,2}.
  category: 함수 판별 + 정의역·공역·치역
  tier: star_2
  unit_code: CM2-FN
  standard: 10수07-01
  mechanism_primary: 정의역-공역-치역-판독
  insight_type: 절차형
  depth: 1

- source: RPM-CM2-FN-함수-#0768
  page: 117
  category_type: 교과서문제
  problem_summary: |
    화살표 대응도: X={-1,0,1}→Y={5,7,8,9}. 함수인 경우 정의역·공역·치역 구하기.
  solution_summary: |
    함수 O. 정의역 {-1,0,1}, 공역 {5,7,8,9}, 치역 {5,8,9}.
  category: 함수 판별 + 정의역·공역·치역
  tier: star_2
  unit_code: CM2-FN
  standard: 10수07-01
  mechanism_primary: 정의역-공역-치역-판독
  insight_type: 절차형
  depth: 1

- source: RPM-CM2-FN-함수-#0769
  page: 117
  category_type: 교과서문제
  problem_summary: |
    화살표 대응도: X의 원소 2에 대응하는 Y의 원소 없음. 함수 판별.
  solution_summary: |
    대응 원소 없음 → 함수가 아니다.
  category: 함수 판별
  tier: star_2
  unit_code: CM2-FN
  standard: 10수07-01
  mechanism_primary: 함수-정의-판별
  insight_type: 절차형
  depth: 1

- source: RPM-CM2-FN-함수-#0770
  page: 117
  category_type: 교과서문제
  problem_summary: |
    $y=2x+1$의 정의역·치역 구하기.
  solution_summary: |
    정의역·치역 모두 실수 전체.
  category: 정의역·치역 (일차함수)
  tier: star_2
  unit_code: CM2-FN
  standard: 10수07-01
  mechanism_primary: 함수-치역-판독
  insight_type: 절차형
  depth: 1

- source: RPM-CM2-FN-함수-#0771
  page: 117
  category_type: 교과서문제
  problem_summary: |
    $y=-x^2+6x$의 정의역·치역 구하기.
  solution_summary: |
    표준형 $y=-(x-3)^2+9$. 정의역 실수 전체, 치역 $\{y\mid y\le 9\}$.
  category: 정의역·치역 (이차함수)
  tier: star_2
  unit_code: CM2-FN
  standard: 10수07-01
  mechanism_primary: 이차함수-치역-계산
  insight_type: 절차형
  depth: 1

- source: RPM-CM2-FN-함수-#0772
  page: 117
  category_type: 교과서문제
  problem_summary: |
    $y=|x|+2$의 정의역·치역 구하기.
  solution_summary: |
    정의역 실수 전체, 치역 $\{y\mid y\ge 2\}$.
  category: 정의역·치역 (절댓값)
  tier: star_2
  unit_code: CM2-FN
  standard: 10수07-01
  mechanism_primary: 절댓값-치역-계산
  insight_type: 절차형
  depth: 1

- source: RPM-CM2-FN-함수-#0773
  page: 117
  category_type: 교과서문제
  problem_summary: |
    $y=\dfrac{3}{x}$의 정의역·치역 구하기.
  solution_summary: |
    정의역·치역 모두 $\{x\mid x\ne 0\}$인 실수.
  category: 정의역·치역 (분수함수)
  tier: star_2
  unit_code: CM2-FN
  standard: 10수07-01
  mechanism_primary: 정의역-제한-판독
  insight_type: 절차형
  depth: 1

- source: RPM-CM2-FN-함수-#0774
  page: 117
  category_type: 교과서문제
  problem_summary: |
    정의역 $\{-1,0,1\}$인 두 함수 $f(x)=-x$, $g(x)=x^3$가 서로 같은지 판별.
  solution_summary: |
    $f(-1)=1$, $g(-1)=-1$로 다름 → $f\ne g$.
  category: 서로 같은 함수 판별
  tier: star_2
  unit_code: CM2-FN
  standard: 10수07-01
  mechanism_primary: 서로같은함수-판별
  insight_type: 절차형
  depth: 1

- source: RPM-CM2-FN-함수-#0775
  page: 117
  category_type: 교과서문제
  problem_summary: |
    정의역 $\{-1,0,1\}$인 $f(x)=|x|+1$, $g(x)=x^2+1$ 서로 같은지 판별.
  solution_summary: |
    $x=-1,0,1$ 모두 함숫값 일치 → $f=g$.
  category: 서로 같은 함수 판별
  tier: star_2
  unit_code: CM2-FN
  standard: 10수07-01
  mechanism_primary: 서로같은함수-판별
  insight_type: 절차형
  depth: 1

- source: RPM-CM2-FN-함수-#0776
  page: 117
  category_type: 교과서문제
  problem_summary: |
    정의역 $\{-1,0,1\}$인 $f(x)=x^3+x$, $g(x)=2x$ 서로 같은지 판별.
  solution_summary: |
    세 값 모두 일치 → $f=g$.
  category: 서로 같은 함수 판별
  tier: star_2
  unit_code: CM2-FN
  standard: 10수07-01
  mechanism_primary: 서로같은함수-판별
  insight_type: 절차형
  depth: 1

- source: RPM-CM2-FN-함수-#0777
  page: 117
  category_type: 교과서문제
  problem_summary: |
    (1) 정의역 $\{-2,-1,0,1,2\}$일 때 $y=-x$의 그래프. (2) 정의역 실수 전체.
  solution_summary: |
    (1) 이산 5점. (2) 직선.
  category: 함수 그래프 (정의역 이산·연속)
  tier: star_2
  unit_code: CM2-FN
  standard: 10수07-01
  mechanism_primary: 그래프-정의역-형태
  insight_type: 절차형
  depth: 1

### 08|2 여러 가지 함수

- source: RPM-CM2-FN-함수-#0778
  page: 117
  category_type: 교과서문제
  problem_summary: |
    정의역·공역 $\{1,2,3,4\}$인 네 개의 그래프에서 일대일함수·일대일대응·항등함수·상수함수 각각 고르기.
  solution_summary: |
    (1) ㄱ,ㄴ (2) ㄱ,ㄴ (3) ㄴ (4) ㄷ.
  category: 여러 가지 함수 분류
  tier: star_2
  unit_code: CM2-FN
  standard: 10수07-01
  mechanism_primary: 여러함수-분류
  insight_type: 절차형
  depth: 1

- source: RPM-CM2-FN-함수-#0779
  page: 117
  category_type: 교과서문제
  problem_summary: |
    정의역·공역 실수 전체. $y=1$·$y=x^2$·$y=x$·$y=-x+1$ 중 일대일함수·일대일대응·항등함수·상수함수 각각 고르기.
  solution_summary: |
    (1) ㄷ,ㄹ (2) ㄷ,ㄹ (3) ㄷ (4) ㄱ.
  category: 여러 가지 함수 분류 (식)
  tier: star_2
  unit_code: CM2-FN
  standard: 10수07-01
  mechanism_primary: 여러함수-분류
  insight_type: 절차형
  depth: 1

### 08|3 합성함수

- source: RPM-CM2-FN-합성-#0780
  page: 119
  category_type: 교과서문제
  problem_summary: |
    화살표 그림 $f:X\to Y$, $g:Y\to X$일 때 $(g\circ f)(2)$, $(g\circ f)(4)$, $(f\circ g)(5)$, $(f\circ g)(7)$.
  solution_summary: |
    (1) 3 (2) 2 (3) 7 (4) 6.
  category: 합성함수 (대응도)
  tier: star_2
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 합성함수-값-대응
  insight_type: 절차형
  depth: 1

- source: RPM-CM2-FN-합성-#0781
  page: 119
  category_type: 교과서문제
  problem_summary: |
    $f(x)=3x-1$, $g(x)=x^2+2$일 때 $(g\circ f)(x)$.
  solution_summary: |
    $(3x-1)^2+2 = 9x^2-6x+3$.
  category: 합성함수 식
  tier: star_2
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 합성함수-식-계산
  insight_type: 절차형
  depth: 1

- source: RPM-CM2-FN-합성-#0782
  page: 119
  category_type: 교과서문제
  problem_summary: |
    $f(x)=3x-1$, $g(x)=x^2+2$일 때 $(f\circ g)(x)$.
  solution_summary: |
    $3(x^2+2)-1 = 3x^2+5$.
  category: 합성함수 식
  tier: star_2
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 합성함수-식-계산
  insight_type: 절차형
  depth: 1

- source: RPM-CM2-FN-합성-#0783
  page: 119
  category_type: 교과서문제
  problem_summary: |
    $f(x)=3x-1$일 때 $(f\circ f)(x)$.
  solution_summary: |
    $3(3x-1)-1 = 9x-4$.
  category: 합성함수 (자기 합성)
  tier: star_2
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 합성함수-자기합성
  insight_type: 절차형
  depth: 1

- source: RPM-CM2-FN-합성-#0784
  page: 119
  category_type: 교과서문제
  problem_summary: |
    $g(x)=x^2+2$일 때 $(g\circ g)(x)$.
  solution_summary: |
    $(x^2+2)^2+2 = x^4+4x^2+6$.
  category: 합성함수 (자기 합성)
  tier: star_2
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 합성함수-자기합성
  insight_type: 절차형
  depth: 1

### 08|4 역함수

- source: RPM-CM2-FN-역함수-#0785
  page: 119
  category_type: 교과서문제
  problem_summary: |
    보기 4개의 대응도에서 역함수가 존재하는 함수 고르기.
  solution_summary: |
    일대일대응인 ㄱ·ㄷ.
  category: 역함수 존재 판별 (대응도)
  tier: star_2
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 역함수-존재-일대일대응
  insight_type: 절차형
  depth: 1

- source: RPM-CM2-FN-역함수-#0786
  page: 119
  category_type: 교과서문제
  problem_summary: |
    $f(x)=x-2$일 때 (1) $f^{-1}(5)=a$의 $a$, (2) $f^{-1}(a)=1$의 $a$.
  solution_summary: |
    (1) $f(a)=5$ → $a=7$. (2) $f(1)=a$ → $a=-1$.
  category: 역함수 값 (일차함수)
  tier: star_2
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 역함수-정의역치역-역바꾸기
  insight_type: 절차형
  depth: 1

- source: RPM-CM2-FN-역함수-#0787
  page: 119
  category_type: 교과서문제
  problem_summary: |
    $y=2x-2$의 역함수 구하기.
  solution_summary: |
    $y=\tfrac12 x+1$.
  category: 역함수 (일차식)
  tier: star_2
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 역함수-식-일차
  insight_type: 절차형
  depth: 1

- source: RPM-CM2-FN-역함수-#0788
  page: 119
  category_type: 교과서문제
  problem_summary: |
    $y=\tfrac14 x+\tfrac38$의 역함수.
  solution_summary: |
    $y=4x-\tfrac32$.
  category: 역함수 (일차식)
  tier: star_2
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 역함수-식-일차
  insight_type: 절차형
  depth: 1

- source: RPM-CM2-FN-역함수-#0789
  page: 119
  category_type: 교과서문제
  problem_summary: |
    화살표 그림 $f:X\to Y$일 때 (1) $f^{-1}(4)$ (2) $(f^{-1})^{-1}(1)$ (3) $(f^{-1}\circ f)(3)$ (4) $(f\circ f^{-1})(4)$.
  solution_summary: |
    (1) 3 (2) 8 (3) 3 (4) 4.
  category: 역함수·항등성 (대응도)
  tier: star_2
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 역함수-항등성-대응
  insight_type: 절차형
  depth: 1

### 08|5 절댓값 기호를 포함한 함수의 그래프

- source: RPM-CM2-FN-절댓값-#0790
  page: 119
  category_type: 교과서문제
  problem_summary: |
    $f(x)=|x-1|+2$. (1) $x\ge 1$일 때 간단히, (2) $x<1$일 때 간단히, (3) 그래프.
  solution_summary: |
    (1) $x+1$. (2) $-x+3$. (3) 꺾은선, 꼭짓점 $(1,2)$.
  category: 절댓값 함수 (구간 분해·그래프)
  tier: star_2
  unit_code: CM2-FN
  standard: 10수07-01
  mechanism_primary: 절댓값-구간분해-그래프
  insight_type: 절차형
  depth: 1

- source: RPM-CM2-FN-절댓값-#0791
  page: 119
  category_type: 교과서문제
  problem_summary: |
    $y=f(x)$의 그래프 주어짐. $y=|f(x)|$의 그래프.
  solution_summary: |
    $y<0$ 부분을 $x$축에 대칭.
  category: 절댓값 그래프 (외절댓값)
  tier: star_2
  unit_code: CM2-FN
  standard: 10수07-01
  mechanism_primary: 그래프-외절댓값-대칭
  insight_type: 절차형
  depth: 1

- source: RPM-CM2-FN-절댓값-#0792
  page: 119
  category_type: 교과서문제
  problem_summary: |
    $y=f(x)$의 그래프 주어짐. $y=f(|x|)$의 그래프.
  solution_summary: |
    $x\ge 0$ 부분을 $y$축 대칭으로 복제.
  category: 절댓값 그래프 (내절댓값)
  tier: star_2
  unit_code: CM2-FN
  standard: 10수07-01
  mechanism_primary: 그래프-내절댓값-대칭
  insight_type: 절차형
  depth: 1

---

## Section B. 유형 익히기 (p.120~131, 0793~0880)

### 유형 01 함수의 뜻

- source: RPM-CM2-FN-함수-#0793
  page: 120
  category_type: 유형익히기-대표문제
  problem_summary: |
    $X=\{0,1,2\}$, $Y=\{0,1,2,3\}$에서 함수가 아닌 것 고르기. 다섯 식(일차·절댓값·이차·부분별·나머지)을 판정.
  solution_summary: |
    $h(x)=x^2$: $h(2)=4\notin Y$이므로 대응 불가 → 함수 아님.
  category: 함수 판별 (치역이 공역 안?)
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-01
  mechanism_primary: 함수-공역-포함
  insight_type: 절차형
  depth: 2

- source: RPM-CM2-FN-함수-#0794
  page: 120
  category_type: 유형익히기
  problem_summary: |
    다섯 그래프 중 실수 전체에서 정의된 함수의 그래프 고르기 (수직선 판정).
  solution_summary: |
    ④: 임의 $x=a$ 수직선과 유일 교점.
  category: 함수 그래프 판별
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-01
  mechanism_primary: 함수-수직선-판정
  insight_type: 절차형
  depth: 1

- source: RPM-CM2-FN-함수-#0795
  page: 120
  category_type: 유형익히기
  problem_summary: |
    $X=\{x\mid 0\le x\le 2\}$, $Y=\{y\mid -1\le y\le 1\}$일 때 $X\to Y$의 함수인 식 고르기 (5개 후보).
  solution_summary: |
    각 식 치역 확인. ③ $f(x)=x-1$의 치역 $[-1,1]$이 $Y$에 포함 → 함수.
  category: 함수 판별 (치역 ⊆ 공역)
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-01
  mechanism_primary: 치역-공역-포함
  insight_type: 절차형
  depth: 2

### 유형 02 함숫값 구하기

- source: RPM-CM2-FN-함수-#0796
  page: 120
  category_type: 유형익히기-대표문제
  problem_summary: |
    $f(x)=\begin{cases}x+1 & (x\text{는 유리수})\\ -x & (x\text{는 무리수})\end{cases}$. $f(2)-f(\sqrt5-3)$.
  solution_summary: |
    $f(2)=3$, $\sqrt5-3$은 무리수 $f(\sqrt5-3)=-(\sqrt5-3)=-\sqrt5+3$. 차 $\sqrt5$.
  category: 유리/무리 분기 함수
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-01
  mechanism_primary: 두 식으로 정의된 함수-값-분기
  insight_type: 조건통합형
  depth: 2

- source: RPM-CM2-FN-함수-#0797
  page: 120
  category_type: 유형익히기
  problem_summary: |
    $f(x)=\begin{cases}-x+5 & (x\ge 2)\\ 3x-3 & (x<2)\end{cases}$. $f(-2)+f(3)$.
  solution_summary: |
    $f(-2)=-9$, $f(3)=2$. 합 $-7$.
  category: 두 식으로 정의된 함수 값
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-01
  mechanism_primary: 두 식으로 정의된 함수-값-분기
  insight_type: 절차형
  depth: 1

- source: RPM-CM2-FN-함수-#0798
  page: 120
  category_type: 유형익히기
  problem_summary: |
    실수 전체에서 정의된 $f$가 $f\!\left(\dfrac{x-4}{2}\right)=4x-2$. $f(-3)$.
  solution_summary: |
    $\dfrac{x-4}{2}=-3$ → $x=-2$. 대입 $4(-2)-2=-10$.
  category: 치환형 함숫값
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-01
  mechanism_primary: 치환-함숫값-역대입
  insight_type: 조건통합형
  depth: 2

- source: RPM-CM2-FN-함수-#0799
  page: 120
  category_type: 유형익히기
  problem_summary: |
    음 아닌 정수 전체에서 정의된 $f$가 $f(x)=\begin{cases}x-1 & (0\le x\le 3)\\ f(x-3) & (x>3)\end{cases}$. $f(2)+f(18)$.
  solution_summary: |
    $f(2)=1$, $f(18)=f(15)=\cdots=f(3)=2$. 합 3.
  category: 재귀 두 식으로 정의된 함수
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-01
  mechanism_primary: 재귀함수-주기활용
  insight_type: 조건통합형
  depth: 2

### 유형 03 함수의 정의역, 공역, 치역

- source: RPM-CM2-FN-함수-#0800
  page: 121
  category_type: 유형익히기-대표문제
  problem_summary: |
    $X=\{x\mid -2\le x\le 3\}$에서 $X\to X$인 $f(x)=ax+b$의 공역과 치역이 같을 때 $a-b$ ($ab\ne 0$).
  solution_summary: |
    $a>0$: $f(-2)=-2$, $f(3)=3$에서 $a=1,b=0$ (조건 위배). $a<0$: $f(-2)=3$, $f(3)=-2$에서 $a=-1$, $b=1$. $a-b=-2$.
  category: 일차함수 치역=공역
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-01
  mechanism_primary: 일차-치역공역-경우분류
  insight_type: 조건통합형
  depth: 2

- source: RPM-CM2-FN-함수-#0801
  page: 121
  category_type: 유형익히기
  problem_summary: |
    $y=x^2+5x+2$의 치역이 $\{-4,8\}$일 때 정의역 원소가 될 수 없는 것.
  solution_summary: |
    $x^2+5x+2=-4$ → $x=-3,-2$. $=8$ → $x=-6,1$. 정의역 후보 $\{-6,-3,-2,1\}$. ④ $-1$은 불가.
  category: 치역 원소 → 정의역
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-01
  mechanism_primary: 이차-역상-후보
  insight_type: 절차형
  depth: 2

- source: RPM-CM2-FN-함수-#0802
  page: 121
  category_type: 유형익히기
  problem_summary: |
    정의역 $\{-1,0,1,2\}$인 $f(x)=ax^2+1$의 치역 원소의 합이 18일 때 $a$.
  solution_summary: |
    함숫값 $\{a+1,1,a+1,4a+1\}$. 치역 $\{a+1,1,4a+1\}$ ($a\ne 0$). 합 $5a+3=18$ → $a=3$.
  category: 치역 합 (이차 · 대칭)
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-01
  mechanism_primary: 이차-치역-중복제거
  insight_type: 조건통합형
  depth: 2

- source: RPM-CM2-FN-함수-#0803
  page: 121
  category_type: 유형익히기-서술형
  problem_summary: |
    $X=\{x\mid -2\le x\le 1\}$, $Y=\{y\mid -3\le y\le 1\}$. $y=ax-1$이 $X\to Y$의 함수일 때 $a$의 최댓값 $M$·최솟값 $m$. $Mm$ ($a\ne 0$).
  solution_summary: |
    $a>0$: 치역 $[-2a-1, a-1]$ ⊆ $Y$ → $0<a\le 1$. $a<0$: 치역 $[a-1,-2a-1]$ ⊆ $Y$ → $-1\le a<0$. $M=1$, $m=-1$. $Mm=-1$.
  category: 정의역·치역 조건 → 계수 범위
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-01
  mechanism_primary: 일차-치역포함-계수범위
  insight_type: 조건통합형
  depth: 3

### 유형 04 서로 같은 함수

- source: RPM-CM2-FN-함수-#0804
  page: 121
  category_type: 유형익히기-대표문제
  problem_summary: |
    정의역 $\{-1,1\}$인 $f(x)=3x^2-x-1$, $g(x)=ax+b$가 $f=g$일 때 $ab$.
  solution_summary: |
    $f(-1)=g(-1)$: $-a+b=3$. $f(1)=g(1)$: $a+b=1$. $a=-1$, $b=2$. $ab=-2$.
  category: 서로 같은 함수 (계수)
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-01
  mechanism_primary: 같은함수-값등식-연립
  insight_type: 절차형
  depth: 2

- source: RPM-CM2-FN-함수-#0805
  page: 121
  category_type: 유형익히기
  problem_summary: |
    정의역 $\{-2,0,2\}$인 세 쌍 (ㄱ) $f(x)=4x$, $g(x)=x^3$ (ㄴ) $f(x)=x^2-1$, $g(x)=|x^2-1|$ (ㄷ) $f(x)=x+2$, $g(x)$ (분수식). 같은 함수 고르기.
  solution_summary: |
    ㄱ: $f(-2)=-8=g(-2)$, $f(2)=8=g(2)$, $f(0)=0=g(0)$ → 일치. ㄴ: $f(0)=-1$, $g(0)=1$ 불일치. ㄷ: 세 값 모두 일치. 답 ㄱ,ㄷ.
  category: 서로 같은 함수 판별
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-01
  mechanism_primary: 같은함수-값검증
  insight_type: 절차형
  depth: 2

- source: RPM-CM2-FN-함수-#0806
  page: 121
  category_type: 유형익히기
  problem_summary: |
    $X=\{-3,a\}$에서 $f(x)=x^2+2x+2$, $g(x)=-x+b$가 서로 같을 때 $g$의 치역 ($a\ne -3$).
  solution_summary: |
    $f(-3)=g(-3)$: $5=3+b$ → $b=2$. $g(x)=-x+2$. $f(a)=g(a)$: $a^2+3a=0$ → $a=0$. $g(0)=2$, $g(-3)=5$. 치역 $\{2,5\}$.
  category: 서로 같은 함수 → 치역
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-01
  mechanism_primary: 같은함수-미지수결정
  insight_type: 조건통합형
  depth: 2

- source: RPM-CM2-FN-함수-#0807
  page: 121
  category_type: 유형익히기-서술형
  problem_summary: |
    공집합 아닌 $X$의 모든 원소가 양수. $f(x)=x^3-3x+9$, $g(x)=4x+3$. $f=g$가 되는 $X$의 개수.
  solution_summary: |
    $x^3-7x+6=0$ → $(x+3)(x-1)(x-2)=0$ → $x=-3,1,2$. 양수만 $\{1,2\}$. 공집합 제외 부분집합 개수 $2^2-1=3$.
  category: 서로 같은 함수 → 정의역 개수
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-01
  mechanism_primary: 같은함수-해집합-부분집합
  insight_type: 조건통합형
  depth: 3

### 유형 05 일대일대응

- source: RPM-CM2-FN-함수-#0808
  page: 122
  category_type: 유형익히기-대표문제
  problem_summary: |
    실수 전체 정의역·공역. 보기 4개 (ㄱ $-\tfrac23x$, ㄴ $|x|+1$, ㄷ $2x^2-4x$, ㄹ 부분별 식) 중 일대일대응 고르기.
  solution_summary: |
    ㄴ: $f(-1)=f(1)$ 위배. ㄷ: $f(0)=f(2)$ 위배. ㄱ,ㄹ 통과. 답 ㄱ,ㄹ.
  category: 일대일대응 판별 (식)
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-01
  mechanism_primary: 일대일대응-판별
  insight_type: 절차형
  depth: 2

- source: RPM-CM2-FN-함수-#0809
  page: 122
  category_type: 유형익히기
  problem_summary: |
    실수 전체 정의역·공역인 다섯 그래프 중 일대일대응 고르기.
  solution_summary: |
    ③ 단조·전사 → 일대일대응.
  category: 일대일대응 판별 (그래프)
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-01
  mechanism_primary: 일대일대응-수평선-전사
  insight_type: 절차형
  depth: 1

- source: RPM-CM2-FN-함수-#0810
  page: 122
  category_type: 유형익히기
  problem_summary: |
    실수 전체 정의역·공역. 보기 3개 그래프에서 일대일함수지만 일대일대응 아닌 것 고르기.
  solution_summary: |
    ㄴ: 치역 $\{y\mid y\le 0\}\ne \mathbb R$ → 일대일함수 O, 일대일대응 X.
  category: 일대일함수 vs 일대일대응
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-01
  mechanism_primary: 일대일함수-치역제한
  insight_type: 절차형
  depth: 2

### 유형 06 일대일대응이 되기 위한 조건

- source: RPM-CM2-FN-함수-#0811
  page: 122
  category_type: 유형익히기-대표문제-중요
  problem_summary: |
    $X=\{x\mid -1\le x\le 1\}$, $Y=\{y\mid -1\le y\le 3\}$. $f(x)=ax+b$ ($a<0$)가 일대일대응. $ab$.
  solution_summary: |
    감소 → $f(-1)=3$, $f(1)=-1$: $-a+b=3$, $a+b=-1$ → $a=-2$, $b=1$. $ab=-2$.
  category: 일차 일대일대응 조건
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-01
  mechanism_primary: 일대일대응-끝점대응
  insight_type: 조건통합형
  depth: 2

- source: RPM-CM2-FN-함수-#0812
  page: 122
  category_type: 유형익히기
  problem_summary: |
    $X=\{x\mid x\ge -1\}$, $Y=\{y\mid y\ge 5\}$. $f(x)=x^2+4x+k$ ($X\to Y$)가 일대일대응. $k$.
  solution_summary: |
    표준형 $(x+2)^2+k-4$. $x\ge -2$에서 증가하므로 $x\ge -1$에서 증가. $f(-1)=k-3$이 최솟값이며 $=5$ → $k=8$.
  category: 이차 일대일대응 조건
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-01
  mechanism_primary: 이차-축위치-단조성-치역끝
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-FN-함수-#0813
  page: 122
  category_type: 유형익히기
  problem_summary: |
    정의역·공역 실수. $f(x)=\begin{cases}(3-a)x+a-1 & (x\ge 1)\\ (2+a)x-a & (x<1)\end{cases}$가 일대일대응인 정수 $a$의 개수.
  solution_summary: |
    두 식 기울기 부호 동일: $(3-a)(2+a)>0$ → $-2<a<3$. 연속성 자동. 정수 $-1,0,1,2$ 4개.
  category: 두 일차식으로 정의된 함수 일대일대응
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-01
  mechanism_primary: 두 일차식-기울기-부호일치
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-FN-함수-#0814
  page: 122
  category_type: 유형익히기
  problem_summary: |
    $X=\{x\mid x\ge k\}$에서 $X\to X$의 $f(x)=x^2-6x$가 일대일대응인 $k$.
  solution_summary: |
    표준형 $(x-3)^2-9$. $x\ge 3$ 필요이므로 $k\ge 3$. 치역=공역: $f(k)=k$ → $k^2-7k=0$ → $k=7$ ($k\ne 0$).
  category: 이차 일대일대응 (자기대응)
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-01
  mechanism_primary: 이차자기대응-끝점불변
  insight_type: 조건통합형
  depth: 3

### 유형 07 항등함수와 상수함수

- source: RPM-CM2-FN-함수-#0815
  page: 123
  category_type: 유형익히기-대표문제
  problem_summary: |
    실수 전체 정의역. $f$는 항등함수, $g$는 상수함수. $f(2)+g(2)=6$일 때 $f(10)+g(10)$.
  solution_summary: |
    $f(2)=2$, $g(2)=4$. $g$ 상수 → $g(10)=4$. $f(10)+g(10)=14$.
  category: 항등·상수 조합
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-01
  mechanism_primary: 항등상수-값전파
  insight_type: 절차형
  depth: 1

- source: RPM-CM2-FN-함수-#0816
  page: 123
  category_type: 유형익히기
  problem_summary: |
    자연수 전체에서 정의된 $f$가 상수함수이고 $f(1)=4$. $f(2)+f(4)+\cdots+f(30)$.
  solution_summary: |
    항이 15개, 각 값 4. 합 $60$.
  category: 상수함수 합
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-01
  mechanism_primary: 상수함수-합-곱셈
  insight_type: 절차형
  depth: 1

- source: RPM-CM2-FN-함수-#0817
  page: 123
  category_type: 유형익히기
  problem_summary: |
    $n(X)=2$인 집합 $X$에서 $X\to X$인 $f(x)=\tfrac{x^3}{8}-x$가 항등함수일 때 $X$ 모두 구하기.
  solution_summary: |
    $\tfrac{x^3}{8}-x=x$ → $x^3-16x=0$ → $x=0,4,-4$. $n(X)=2$인 부분집합 3개: $\{-4,0\},\{-4,4\},\{0,4\}$.
  category: 항등함수 방정식 → 정의역
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-01
  mechanism_primary: 항등방정식-해-부분집합
  insight_type: 조건통합형
  depth: 2

- source: RPM-CM2-FN-함수-#0818
  page: 123
  category_type: 유형익히기
  problem_summary: |
    $X=\{2,4,8\}$에서 세 함수 $f$(일대일대응), $g$(항등), $h$(상수). $f(8)=g(4)=h(2)$, $f(8)f(2)=f(4)$. $f(2)+g(8)+h(4)$.
  solution_summary: |
    $g(4)=4$, $h(x)=4$. $f(8)=4$. $f(8)f(2)=4f(2)=f(4)$. 일대일대응 조건 정합화: $f(2)=2$, $f(4)=8$. $g(8)=8$, $h(4)=4$. 합 $2+8+4=14$.
  category: 여러 함수 복합 (일대일·항등·상수)
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-01
  mechanism_primary: 여러함수-조건복합-일대일결정
  insight_type: 조건통합형
  depth: 3

### 유형 08 함수의 개수

- source: RPM-CM2-FN-함수-#0819
  page: 123
  category_type: 유형익히기-대표문제-중요
  problem_summary: |
    $X=\{1,2,3,4\}$에서 $X\to X$의 함수 개수 $p$, 일대일대응 $q$, 항등함수 $r$, 상수함수 $s$. $p+q+r+s$.
  solution_summary: |
    $p=4^4=256$, $q=4!=24$, $r=1$, $s=4$. 합 $285$.
  category: 함수 개수 종합
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-01
  mechanism_primary: 함수개수-네종합
  insight_type: 절차형
  depth: 2

- source: RPM-CM2-FN-함수-#0820
  page: 123
  category_type: 유형익히기
  problem_summary: |
    $X=\{1,2,3,4\}$, $Y=\{a,b\}$에서 $X\to Y$ 함수 중 공역=치역인 것의 개수.
  solution_summary: |
    전체 $2^4=16$. 치역 $\{a\}$·$\{b\}$인 것 2개 제외 → $14$.
  category: 전사함수 개수
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-01
  mechanism_primary: 전사함수-여사건활용
  insight_type: 조건통합형
  depth: 2

- source: RPM-CM2-FN-함수-#0821
  page: 123
  category_type: 유형익히기-서술형
  problem_summary: |
    $X=\{1,2,3\}$에서 $Y$로의 일대일함수 개수가 60. $X\to Y$의 함수 개수.
  solution_summary: |
    $n(Y)=m$: $m(m-1)(m-2)=60=5\cdot 4\cdot 3$ → $m=5$. 함수 개수 $5^3=125$.
  category: 일대일함수 개수 → 공역 크기
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-01
  mechanism_primary: 순열-역산-개수
  insight_type: 조건통합형
  depth: 2

- source: RPM-CM2-FN-함수-#0822
  page: 123
  category_type: 유형익히기
  problem_summary: |
    전체집합 $U=\{1,\ldots,6\}$의 두 부분집합 $A,B$. $f:A\to B$ 일대일대응. 조건 (가) $A\cup B=U$ (나) $A\cap B=\varnothing$. 함수 $f$의 개수.
  solution_summary: |
    $|A|=|B|=3$ 필수. $A$ 선택: ${}_6\mathrm C_3=20$. $B$는 여집합 (유일). 일대일대응 개수 $3!=6$. 합 $20\cdot 1\cdot 6=120$.
  category: 분할 + 일대일대응 개수
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-01
  mechanism_primary: 분할-일대일대응-곱셈원리
  insight_type: 조건통합형
  depth: 3

### 유형 09 합성함수

- source: RPM-CM2-FN-합성-#0823
  page: 124
  category_type: 유형익히기-대표문제-중요
  problem_summary: |
    $f(x)=\begin{cases}-2x+5 & (x\ge 1)\\ 3 & (x<1)\end{cases}$, $g(x)=x^2-2$. $(f\circ g)(2)+(g\circ f)(0)$.
  solution_summary: |
    $g(2)=2$, $f(2)=1$. $f(0)=3$, $g(3)=7$. 합 $1+7=8$.
  category: 부분별·이차 합성값
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 합성값-분기판단
  insight_type: 조건통합형
  depth: 2

- source: RPM-CM2-FN-합성-#0824
  page: 124
  category_type: 유형익히기
  problem_summary: |
    $f(x)=x-2$, $(h\circ g)(x)=4x+3$. $(h\circ(g\circ f))(1)$.
  solution_summary: |
    결합법칙: $(h\circ g\circ f)(1)=(h\circ g)(f(1))=(h\circ g)(-1)=-4+3=-1$.
  category: 합성 결합법칙 활용
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 합성-결합법칙
  insight_type: 조건통합형
  depth: 2

- source: RPM-CM2-FN-합성-#0825
  page: 124
  category_type: 유형익히기
  problem_summary: |
    $f(x)=3x-2$, $g(x)=ax+4$. $(f\circ g)(-1)=7$일 때 $g(-2)$.
  solution_summary: |
    $g(-1)=-a+4$. $f(-a+4)=3(-a+4)-2=-3a+10=7$ → $a=1$. $g(x)=x+4$, $g(-2)=2$.
  category: 합성값 조건 → 계수
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 합성-역산-계수결정
  insight_type: 조건통합형
  depth: 2

- source: RPM-CM2-FN-합성-#0826
  page: 124
  category_type: 유형익히기-서술형
  problem_summary: |
    $X=\{1,2,3\}$에서 $X\to X$의 일대일대응 $f$, $g$. 조건 (가) $f(2)=g(2)=3$ (나) $(g\circ f)(2)=1$ (다) $(f\circ g)(2)=2$. $f(1)+g(1)$.
  solution_summary: |
    (나): $g(3)=1$. (다): $f(3)=2$. 일대일대응 조건으로 $f(1)=1$, $g(1)=2$. 합 $3$.
  category: 합성 조건 (일대일대응)
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 합성값-일대일대응-완성
  insight_type: 조건통합형
  depth: 3

### 유형 10 f∘g=g∘f 인 경우

- source: RPM-CM2-FN-합성-#0827
  page: 124
  category_type: 유형익히기-대표문제
  problem_summary: |
    $f(x)=2x+6$, $g(x)=ax-3$. $f\circ g=g\circ f$일 때 $g(4)$.
  solution_summary: |
    $2(ax-3)+6=a(2x+6)-3$ → $2ax=2ax+6a-3$ → $a=\tfrac12$. $g(4)=2-3=-1$.
  category: 교환 성립 → 계수
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 교환-계수비교
  insight_type: 조건통합형
  depth: 2

- source: RPM-CM2-FN-합성-#0828
  page: 124
  category_type: 유형익히기
  problem_summary: |
    $X=\{1,2,3,4,5\}$에서 $f:X\to X$ 그림 주어짐 ($f(1)=3$, $f(2)=4$, $f(3)=5$, $f(4)=1$, $f(5)=2$). $g:X\to X$가 $f\circ g=g\circ f$, $g(1)=4$일 때 $g(2)$.
  solution_summary: |
    $f(g(x))=g(f(x))$에 $x=1$: $f(g(1))=g(f(1))$ → $f(4)=g(3)$ → $g(3)=1$. 반복 대입으로 $g$ 전체 규칙 확인 후 $g(2)=5$.
  category: 교환 (표 함수)
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 교환-표추적-일대일완성
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-FN-합성-#0829
  page: 124
  category_type: 유형익히기
  problem_summary: |
    $f(x)=2x-3$, $g(x)=ax+b$. $f\circ g=g\circ f$일 때 $y=g(x)$ 그래프가 $a$에 관계없이 지나는 점.
  solution_summary: |
    계수비교로 $b=-a+3$. $g(x)=ax-a+3=a(x-1)+3$. $a$ 무관 지나는 점 $(1,3)$.
  category: 교환 → 고정점
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 교환-매개변수-고정점
  insight_type: 통찰형
  depth: 3

- source: RPM-CM2-FN-합성-#0830
  page: 124
  category_type: 유형익히기
  problem_summary: |
    $f(x)=ax+6$, $g(x)=bx-6$. $f\circ g=g\circ f$일 때 양수 $a,b$에 대해 $ab$의 최댓값.
  solution_summary: |
    합성 계수비교: $ab-6a+6=ab+6b-6$ → $a+b=2$. AM-GM 대체로 CM 범위: $ab$는 $a+b=2$ 고정 시 최대 $1$ ($a=b=1$).
  category: 교환 + 극값 (관계식)
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 교환-일차관계-이차최적
  insight_type: 조건통합형
  depth: 3

### 유형 11 f∘f에 대한 조건

- source: RPM-CM2-FN-합성-#0831
  page: 125
  category_type: 유형익히기-대표문제
  problem_summary: |
    $f(x)=ax+b$ ($a>0$). $(f\circ f)(x)=4x+3$일 때 $f(3)$.
  solution_summary: |
    $a^2x+ab+b=4x+3$ → $a=2$, $2b+b=3$ → $b=1$. $f(3)=7$.
  category: 자기합성 계수결정
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 자기합성-계수비교
  insight_type: 조건통합형
  depth: 2

- source: RPM-CM2-FN-합성-#0832
  page: 125
  category_type: 유형익히기
  problem_summary: |
    $f(x)=x^2+a$. $(f\circ f)(x)$를 $x-1$로 나눈 나머지가 5일 때 양수 $a$.
  solution_summary: |
    나머지정리 $(f\circ f)(1)=5$. $f(1)=1+a$. $f(1+a)=(1+a)^2+a=5$ → $a^2+3a-4=0$ → $(a+4)(a-1)=0$ → $a=1$.
  category: 자기합성 + 나머지정리
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 자기합성-나머지정리
  insight_type: 조건통합형
  depth: 2

- source: RPM-CM2-FN-합성-#0833
  page: 125
  category_type: 유형익히기
  problem_summary: |
    $f(x)=-3x+k$. $g(x)=(f\circ f)(x)$. $-1\le x\le 1$에서 $g$의 최댓값 3일 때 최솟값.
  solution_summary: |
    $g(x)=9x-2k$ (증가). 최대 $g(1)=9-2k=3$ → $k=3$. 최소 $g(-1)=-9-6=-15$.
  category: 자기합성 + 구간 최적
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 합성-단조-구간최적
  insight_type: 조건통합형
  depth: 2

### 유형 12 f∘g=h를 만족시키는 f 또는 g 구하기

- source: RPM-CM2-FN-합성-#0834
  page: 125
  category_type: 유형익히기-대표문제-중요
  problem_summary: |
    $f(x)=-2x+1$, $g(x)=4x^2+3$. $(f\circ h)(x)=g(x)$인 $h(x)$.
  solution_summary: |
    $f(h(x))=-2h(x)+1=4x^2+3$ → $h(x)=-2x^2-1$.
  category: 미정 함수 (외 미정)
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 미정함수-외방정식-풀이
  insight_type: 조건통합형
  depth: 2

- source: RPM-CM2-FN-합성-#0835
  page: 125
  category_type: 유형익히기-서술형
  problem_summary: |
    $(h\circ g)(x)=3x-2$, $(h\circ g\circ f)(x)=6x-5$. $f(5)$.
  solution_summary: |
    $(h\circ g)(f(x))=3f(x)-2=6x-5$ → $f(x)=2x-1$. $f(5)=9$.
  category: 다중 합성 → 성분 함수
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 다중합성-역대입
  insight_type: 조건통합형
  depth: 2

- source: RPM-CM2-FN-합성-#0836
  page: 125
  category_type: 유형익히기
  problem_summary: |
    $g(x)=\tfrac{3x+1}{4}$, $(f\circ g)(x)=6x+7$. $f(-1)$.
  solution_summary: |
    $\tfrac{3x+1}{4}=-1$ → $x=-\tfrac53$. $f(-1)=6\cdot(-\tfrac53)+7=-3$.
  category: 합성 → 특정값 (치환)
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 합성-역상찾기
  insight_type: 절차형
  depth: 2

- source: RPM-CM2-FN-합성-#0837
  page: 125
  category_type: 유형익히기
  problem_summary: |
    $f(x)=x-2$, $g(x)=2x-1$. $(h\circ g\circ f)(x)=f(x)$일 때 $h(3)$.
  solution_summary: |
    $(g\circ f)(x)=2x-5$. $h(2x-5)=x-2$. $2x-5=3$ → $x=4$. $h(3)=2$.
  category: 3중 합성 → 값
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 삼중합성-치환
  insight_type: 조건통합형
  depth: 2

### 유형 13 fⁿ 꼴의 합성함수

- source: RPM-CM2-FN-합성-#0838
  page: 126
  category_type: 유형익히기-대표문제
  problem_summary: |
    $f(x)=-x+3$. $f^{n+1}=f\circ f^n$. $f^{99}(1)$.
  solution_summary: |
    $f^1(x)=-x+3$, $f^2(x)=x$, $f^3=f$, $\ldots$. 홀수번 $f^n=-x+3$. $f^{99}(1)=2$.
  category: 반복합성 주기 (일차)
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 반복합성-주기-일차
  insight_type: 조건통합형
  depth: 2

- source: RPM-CM2-FN-합성-#0839
  page: 126
  category_type: 유형익히기
  problem_summary: |
    $f(x)=x-1$. $f^{10}(a)=5$인 $a$.
  solution_summary: |
    $f^n(x)=x-n$. $f^{10}(a)=a-10=5$ → $a=15$.
  category: 반복합성 (선형)
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 반복합성-공차
  insight_type: 절차형
  depth: 1

- source: RPM-CM2-FN-합성-#0840
  page: 126
  category_type: 유형익히기
  problem_summary: |
    $X=\{1,2,3,4\}$, $f(x)=\begin{cases}x+1 & (x<4)\\ 1 & (x=4)\end{cases}$. $f^{50}(2)$.
  solution_summary: |
    $f^n(2)$ 열: $3,4,1,2,3,4,1,2,\ldots$ 주기 4. $50 = 4\cdot 12+2$ → $f^{50}(2)=f^2(2)=4$.
  category: 반복합성 주기 (순환)
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 반복합성-주기-순환
  insight_type: 조건통합형
  depth: 2

- source: RPM-CM2-FN-합성-#0841
  page: 126
  category_type: 유형익히기
  problem_summary: |
    $A=\{x\mid 0\le x\le 2\}$에서 $y=f(x)$ 그래프 (지붕 꼴, 정점 $(1,2)$). $f^{2024}(\tfrac{8}{7})$.
  solution_summary: |
    $f(x)$: $2x$ ($0\le x<1$), $-2x+4$ ($1\le x\le 2$). $f(\tfrac87)=\tfrac{12}{7}$, $f(\tfrac{12}{7})=\tfrac47$, $f(\tfrac47)=\tfrac87$. 주기 3. $2024=3\cdot 674+2$ → $f^{2024}(\tfrac87)=f^2(\tfrac87)=\tfrac47$.
  category: 반복합성 (톱니 그래프)
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 반복합성-톱니-주기
  insight_type: 통찰형
  depth: 3

### 유형 14 역함수

- source: RPM-CM2-FN-역함수-#0842
  page: 126
  category_type: 유형익히기-대표문제
  problem_summary: |
    $f(x)=ax+b$. $f(1)=7$, $f^{-1}(10)=4$. $ab$.
  solution_summary: |
    $a+b=7$, $4a+b=10$ → $a=1$, $b=6$. $ab=6$.
  category: 역함수 값 → 계수
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 역함수-값-연립
  insight_type: 절차형
  depth: 1

- source: RPM-CM2-FN-역함수-#0843
  page: 126
  category_type: 유형익히기
  problem_summary: |
    정의역 $\{x\mid x\le 5\}$인 이차함수 $f$에서 $f(0)=0$, $f^{-1}(3)=1$, $f^{-1}(8)=4$. $f(-6)$.
  solution_summary: |
    $f(x)=ax^2+bx+c$, $c=0$. $f(1)=3$: $a+b=3$. $f(4)=8$: $16a+4b=8$ → $4a+b=2$ → $a=-\tfrac13$, $b=\tfrac{10}{3}$. $f(-6)=-12-20=-32$.
  category: 이차 역함수 값 → 계수
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 이차-역함수값-연립
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-FN-역함수-#0844
  page: 126
  category_type: 유형익히기
  problem_summary: |
    실수 전체 정의역. $f\!\left(\tfrac{3x-1}{2}\right)=-6x+1$. $f^{-1}(7)$.
  solution_summary: |
    치환 $t=\tfrac{3x-1}{2}$ → $x=\tfrac{2t+1}{3}$. $f(t)=-4t-1$. $f(k)=7$: $-4k-1=7$ → $k=-2$. $f^{-1}(7)=-2$.
  category: 치환형 → 역함수 값
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 치환식-일차-역값
  insight_type: 조건통합형
  depth: 2

- source: RPM-CM2-FN-역함수-#0845
  page: 126
  category_type: 유형익히기
  problem_summary: |
    $f(x)=\begin{cases}x-2 & (x\ge 1)\\ 3x-4 & (x<1)\end{cases}$. $f^{-1}(-7)+f^{-1}(4)$.
  solution_summary: |
    $f^{-1}(-7)$: $-7<-1$이므로 $3x-4=-7$ → $x=-1$. $f^{-1}(4)$: $4>-1$이므로 $x-2=4$ → $x=6$. 합 $5$.
  category: 부분별 역함수 값
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 두 식으로 정의된 함수-역-분기
  insight_type: 조건통합형
  depth: 2

### 유형 15 역함수가 존재하기 위한 조건

- source: RPM-CM2-FN-역함수-#0846
  page: 127
  category_type: 유형익히기-대표문제
  problem_summary: |
    $X=\{x\mid -1\le x\le 1\}$, $Y=\{y\mid a\le y\le b\}$. $f(x)=-3x+2$ ($X\to Y$)의 역함수 존재. $a+b$.
  solution_summary: |
    감소이므로 $f(-1)=5=b$, $f(1)=-1=a$. $a+b=4$.
  category: 일차 역함수 존재
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 일차감소-끝점대응
  insight_type: 조건통합형
  depth: 2

- source: RPM-CM2-FN-역함수-#0847
  page: 127
  category_type: 유형익히기
  problem_summary: |
    실수 전체 정의역·공역. 다섯 함수 중 역함수 존재하는 것.
  solution_summary: |
    ④ $f(x)=-\tfrac23 x+6$은 일대일대응. ①②③⑤ 모두 일대일대응 아님. 답 ④.
  category: 역함수 존재 판별 (식)
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 역함수-존재-판별
  insight_type: 절차형
  depth: 1

- source: RPM-CM2-FN-역함수-#0848
  page: 127
  category_type: 유형익히기
  problem_summary: |
    $X=\{x\mid x\le 3\}$에서 $X\to X$인 $f(x)=-x^2+8x+a$가 역함수 존재하는 $a$.
  solution_summary: |
    표준형 $-(x-4)^2+16+a$. $x\le 3$에서 증가. 일대일대응: 치역=공역 조건 $f(3)=3$: $-9+24+a=3$ → $a=-12$.
  category: 이차 역함수 존재 (자기 대응)
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 이차자기대응-끝점보존
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-FN-역함수-#0849
  page: 127
  category_type: 유형익히기
  problem_summary: |
    실수 전체 정의역. $f(x)=2x-3+a|x-2|$의 역함수 존재하는 정수 $a$의 최댓값.
  solution_summary: |
    부분별 식 기울기 $(2+a)$·$(2-a)$가 부호 일치 필요: $(2+a)(2-a)>0$ → $-2<a<2$. 정수 최댓값 $1$.
  category: 두 일차식으로 정의된 함수 (절댓값 계수) 일대일
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 절댓값 부분-기울기부호
  insight_type: 조건통합형
  depth: 3

### 유형 16 역함수 구하기

- source: RPM-CM2-FN-역함수-#0850
  page: 127
  category_type: 유형익히기-대표문제
  problem_summary: |
    $f(x)=\tfrac13 x+a$의 역함수 $f^{-1}(x)=bx-6$. $a+b$.
  solution_summary: |
    $y=\tfrac13 x+a$ → $x=3y-3a$ → $f^{-1}(x)=3x-3a$. $b=3$, $-3a=-6$ → $a=2$. $a+b=5$.
  category: 역함수 식 (일차)
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 역함수-일차-계수매칭
  insight_type: 절차형
  depth: 1

- source: RPM-CM2-FN-역함수-#0851
  page: 127
  category_type: 유형익히기
  problem_summary: |
    $f(x)=5x-1$ ($x\ge 1$)의 역함수 $f^{-1}(x)=ax+b$ ($x\ge c$). $abc$.
  solution_summary: |
    $x\ge 1$에서 $y\ge 4$. $y=5x-1$ → $x=\tfrac15 y+\tfrac15$. $f^{-1}(x)=\tfrac15 x+\tfrac15$ ($x\ge 4$). $abc=\tfrac15\cdot \tfrac15\cdot 4=\tfrac{4}{25}$.
  category: 역함수 정의역·계수
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 역함수-정의역-교환
  insight_type: 조건통합형
  depth: 2

- source: RPM-CM2-FN-역함수-#0852
  page: 127
  category_type: 유형익히기-서술형
  problem_summary: |
    실수 전체. $f(3x-1)=6x+1$. $f^{-1}(x)=ax+b$. $a-b$.
  solution_summary: |
    $3x-1=t$ → $x=\tfrac{t+1}{3}$. $f(t)=2t+3$. 역함수 $\tfrac12 x-\tfrac32$. $a=\tfrac12$, $b=-\tfrac32$. $a-b=2$.
  category: 치환형 함수 → 역함수 식
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 치환식-역함수-계수
  insight_type: 조건통합형
  depth: 2

- source: RPM-CM2-FN-역함수-#0853
  page: 127
  category_type: 유형익히기
  problem_summary: |
    $f(x)=\begin{cases}-2x+5 & (x\ge 1)\\ -3x+6 & (x<1)\end{cases}$의 역함수 구하기.
  solution_summary: |
    각 식 역: $y=-2x+5$ → $x=-\tfrac12 y+\tfrac52$; $y=-3x+6$ → $x=-\tfrac13 y+2$. 정의역 조건 $y\le 3$·$y>3$. $f^{-1}(x)=\begin{cases}-\tfrac12 x+\tfrac52 & (x\le 3)\\ -\tfrac13 x+2 & (x>3)\end{cases}$.
  category: 부분별 역함수 구하기
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 두 식으로 정의된 함수-역-정의역결정
  insight_type: 조건통합형
  depth: 3

### 유형 17 f=f⁻¹인 함수

- source: RPM-CM2-FN-역함수-#0854
  page: 128
  category_type: 유형익히기-대표문제
  problem_summary: |
    $f(x)=ax+4$의 역함수 $f^{-1}$에 대해 $f=f^{-1}$. $f(a)$ ($a\ne 0$).
  solution_summary: |
    $f=f^{-1}$ ⇔ $(f\circ f)(x)=x$. $a(ax+4)+4=x$ → $a^2=1$, $4a+4=0$ → $a=-1$. $f(x)=-x+4$, $f(-1)=5$.
  category: f=f⁻¹ 대칭 (일차)
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 자기역함수-일차조건
  insight_type: 조건통합형
  depth: 2

- source: RPM-CM2-FN-역함수-#0855
  page: 128
  category_type: 유형익히기
  problem_summary: |
    $f^{-1}(x)$ 존재, $(f\circ f)(x)=x$, $f(2)=-1$. $f^{-1}(2)+f(-1)$.
  solution_summary: |
    $f=f^{-1}$. $f^{-1}(2)=f(2)=-1$. $(f\circ f)(2)=2$: $f(-1)=2$. 합 $1$.
  category: f=f⁻¹ 값
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 자기역함수-값전파
  insight_type: 조건통합형
  depth: 2

- source: RPM-CM2-FN-역함수-#0856
  page: 128
  category_type: 유형익히기
  problem_summary: |
    보기 4식 (ㄱ $-x$, ㄴ $5x$, ㄷ $-x+4$, ㄹ $x-2$) 중 $f=f^{-1}$인 것.
  solution_summary: |
    $f(f(x))=x$ 검증. ㄱ: $-(-x)=x$ O. ㄴ: $25x\ne x$. ㄷ: $-(-x+4)+4=x$ O. ㄹ: $x-4\ne x$. 답 ㄱ,ㄷ.
  category: f=f⁻¹ 판별
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 자기역함수-판별
  insight_type: 절차형
  depth: 2

- source: RPM-CM2-FN-역함수-#0857
  page: 128
  category_type: 유형익히기
  problem_summary: |
    실수 전체 정의된 일차함수 $f$가 $f=f^{-1}$, $f(3)=2$. $y=f(x)$의 $x$절편 $m$·$y$절편 $n$. $m+n$.
  solution_summary: |
    $f(x)=ax+b$, $3a+b=2$. $f=f^{-1}$: $a=-1$, $b=5$. $y=-x+5$. $x$절편 5, $y$절편 5. 합 $10$.
  category: f=f⁻¹ + 값 → 절편
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 자기역함수-절편-계수
  insight_type: 조건통합형
  depth: 2

### 유형 18 합성함수와 역함수

- source: RPM-CM2-FN-역함수-#0858
  page: 128
  category_type: 유형익히기-대표문제
  problem_summary: |
    $f(x)=2x-3$, $g(x)=3x-5$. $(f^{-1}\circ g)(a)=2$인 $a$.
  solution_summary: |
    $f^{-1}(g(a))=2$ → $g(a)=f(2)=1$. $3a-5=1$ → $a=2$.
  category: 역·합성 결합
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 역합성-원상-대응
  insight_type: 조건통합형
  depth: 2

- source: RPM-CM2-FN-역함수-#0859
  page: 128
  category_type: 유형익히기
  problem_summary: |
    그림으로 정의된 $f,g$ ($X_1\to X_2\to X_3$). $(f\circ g^{-1})(6)+(g^{-1}\circ f^{-1})(6)$.
  solution_summary: |
    그림 판독: $g(8)=6$ → $g^{-1}(6)=8$, $f(8)=6$... 값 대응 추적으로 각 항 계산. 답 $4$.
  category: 역·합성 (표)
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 역함수-표추적
  insight_type: 조건통합형
  depth: 2

- source: RPM-CM2-FN-역함수-#0860
  page: 128
  category_type: 유형익히기
  problem_summary: |
    $f(x)=x-a$, $g(x)=3x-2a$. $(g\circ f)(x)=3x+10$일 때 $(f\circ g^{-1})(-2)$.
  solution_summary: |
    $g(f(x))=3(x-a)-2a=3x-5a=3x+10$ → $a=-2$. $f(x)=x+2$, $g(x)=3x+4$. $g^{-1}(-2)=k$: $3k+4=-2$ → $k=-2$. $f(-2)=0$. 답 $0$.
  category: 역·합성 + 계수
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 합성-계수-역함수값
  insight_type: 조건통합형
  depth: 2

- source: RPM-CM2-FN-역함수-#0861
  page: 128
  category_type: 유형익히기
  problem_summary: |
    $f(x)=3x-1$, $g(x)=\begin{cases}x+1 & (x\ge 0)\\ -x^2+1 & (x<0)\end{cases}$. $(f\circ g^{-1})(2)+(f^{-1}\circ g)(-1)$.
  solution_summary: |
    $g^{-1}(2)$: $2\ge 1$이므로 $x+1=2$ → $x=1$. $f(1)=2$. $g(-1)=0$. $f^{-1}(0)$: $3x-1=0$ → $x=\tfrac13$. 합 $2+\tfrac13=\tfrac73$.
  category: 부분별 + 합성·역
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 부분별-역함수-분기값
  insight_type: 조건통합형
  depth: 3

### 유형 19 역함수의 성질 (중요)

- source: RPM-CM2-FN-역함수-#0862
  page: 129
  category_type: 유형익히기-대표문제-중요
  problem_summary: |
    $f(x)=x+1$, $g(x)=3x-6$. $(f\circ(f\circ g)^{-1}\circ f)(3)$.
  solution_summary: |
    $(f\circ g)^{-1}=g^{-1}\circ f^{-1}$. 정리 후 $f(3)=4$부터 안쪽으로 대입. 최종 $4$.
  category: 합성 역함수 성질
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 역함수합성성질-분리
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-FN-역함수-#0863
  page: 129
  category_type: 유형익히기
  problem_summary: |
    $f(x)=\begin{cases}2x & (x>0)\\ -x^2 & (x\le 0)\end{cases}$, $g(x)=-3x+2$. $(f\circ(f^{-1}\circ g)^{-1})(-1)$.
  solution_summary: |
    $(f^{-1}\circ g)^{-1}=g^{-1}\circ f$. $f\circ g^{-1}\circ f$의 $-1$ 값 계산: $f(-1)=-1$, $g^{-1}(-1)$: $-3x+2=-1$ → $x=1$. $f(1)=2$. 답 $2$.
  category: 부분별 + 역함수 결합
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 역함수-결합-부분별 평가
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-FN-역함수-#0864
  page: 129
  category_type: 유형익히기
  problem_summary: |
    $f(x)=-x+2$, $g(x)=3x+1$. $(f^{-1}\circ(g\circ f^{-1})^{-1}\circ f)(x)=ax+b$. $a-2b$.
  solution_summary: |
    분해 $=(f^{-1}\circ f\circ g^{-1}\circ f)(x)=(g^{-1}\circ f)(x)=g^{-1}(-x+2)=\tfrac{-x+2-1}{3}=-\tfrac13 x+\tfrac13$. $a=-\tfrac13$, $b=\tfrac13$. $a-2b=-1$.
  category: 역함수 성질 분리
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 역함수합성성질-상쇄
  insight_type: 통찰형
  depth: 3

- source: RPM-CM2-FN-역함수-#0865
  page: 129
  category_type: 유형익히기
  problem_summary: |
    $f(x)=ax+b$, $g(x)=x+6$. $(g^{-1}\circ f^{-1})(-6)=-4$, $(f\circ g^{-1})(7)=-2$. $ab$.
  solution_summary: |
    $(g^{-1}\circ f^{-1})(-6)=(f\circ g)^{-1}(-6)=-4$ → $(f\circ g)(-4)=-6$: $f(2)=-6$ → $2a+b=-6$. $g^{-1}(7)=1$, $f(1)=-2$ → $a+b=-2$. → $a=-4$, $b=2$. $ab=-8$.
  category: 역함수 조합 → 계수
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 역함수-합성성질-연립
  insight_type: 조건통합형
  depth: 3

### 유형 20 그래프를 이용하여 함숫값 구하기

- source: RPM-CM2-FN-역함수-#0866
  page: 129
  category_type: 유형익히기-대표문제
  problem_summary: |
    $y=f(x)$, $y=g(x)$ 그래프와 $y=x$ 주어짐. $(f\circ g^{-1}\circ f^{-1})(c)$.
  solution_summary: |
    $f^{-1}(c)=k$ → $f(k)=c$. 그래프에서 $k=e$. $g^{-1}(e)=l$ → $g(l)=e$: 그래프에서 $l=d$. $f(d)=b$. 답 $b$.
  category: 그래프 기반 역·합성
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 그래프-역함수-y=x활용
  insight_type: 조건통합형
  depth: 2

- source: RPM-CM2-FN-역함수-#0867
  page: 129
  category_type: 유형익히기
  problem_summary: |
    $y=f(x)$·$y=x$ 그래프. $(f\circ f\circ f)(a)$.
  solution_summary: |
    $f(a)=b$, $f(b)=c$, $f(c)=d$. 답 $d$.
  category: 그래프 반복합성
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 그래프-반복-계단
  insight_type: 조건통합형
  depth: 2

- source: RPM-CM2-FN-역함수-#0868
  page: 129
  category_type: 유형익히기
  problem_summary: |
    $y=f(x)$·$y=x$ 그래프. $(f\circ f)^{-1}(b)$.
  solution_summary: |
    $(f\circ f)^{-1}=f^{-1}\circ f^{-1}$. $f^{-1}(b)=k$: $f(k)=b$ → $k=c$. $f^{-1}(c)=l$: $f(l)=c$ → $l=d$. 답 $d$.
  category: 그래프 역함수 합성
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 그래프-역합성-계단
  insight_type: 조건통합형
  depth: 2

### 유형 21 조건을 이용하여 함숫값 구하기 (P)

- source: RPM-CM2-FN-함수-#0869
  page: 130
  category_type: 유형익히기-대표문제-p
  problem_summary: |
    임의 실수 $x,y$에 대해 $f(x+y)=f(x)+f(y)$, $f(2)=6$. $f(-2)$.
  solution_summary: |
    $x=y=0$: $f(0)=0$. $x=2, y=-2$: $f(0)=f(2)+f(-2)$ → $f(-2)=-6$.
  category: 함수방정식 (덧셈)
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-01
  mechanism_primary: 함수방정식-덧셈-대입
  insight_type: 통찰형
  depth: 2

- source: RPM-CM2-FN-함수-#0870
  page: 130
  category_type: 유형익히기-p
  problem_summary: |
    양의 실수 $x,y$에 대해 $f(xy)=f(x)+f(y)$, $f(2)=1$. $f(16)$.
  solution_summary: |
    $f(4)=f(2)+f(2)=2$. $f(16)=f(4)+f(4)=4$.
  category: 함수방정식 (곱셈)
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-01
  mechanism_primary: 함수방정식-로그형-누적
  insight_type: 통찰형
  depth: 2

- source: RPM-CM2-FN-함수-#0871
  page: 130
  category_type: 유형익히기-p
  problem_summary: |
    임의 실수 $x,y$에 대해 $f(x+y)=f(x)f(y)$, $f(1)=2$. 보기 (ㄱ $f(0)=1$, ㄴ $f(-2)=\tfrac14$, ㄷ $f(nx)=\{f(x)\}^n$) 옳은 것.
  solution_summary: |
    $f(0)=f(0)^2$·$f(0)\ne 0$ (∵$f(1)=2\ne 0$) → $f(0)=1$ (ㄱ O). ㄴ: $f(2)=4$, $f(0)=f(2)f(-2)$ → $f(-2)=\tfrac14$ (O)... 텍스트에서는 ㄴ에서 $f(2)=1\cdot f(1)f(1)=4$지만 검산 문제상 거짓 판정 (ㄷ O). 답 ㄴ,ㄷ 표기 (④).
  category: 함수방정식 (지수형)
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-01
  mechanism_primary: 함수방정식-지수형-검증
  insight_type: 통찰형
  depth: 3

### 유형 22 조건을 만족시키는 함수의 개수 (P)

- source: RPM-CM2-FN-함수-#0872
  page: 130
  category_type: 유형익히기-대표문제-p
  problem_summary: |
    $X=\{1,\ldots,6\}$, $Y=\{1,\ldots,8\}$에서 $f:X\to Y$. $f(1)=3$, $f(4)=5$, $f(1)<f(2)<f(3)$, $f(4)>f(5)>f(6)$. $f$의 개수.
  solution_summary: |
    $f(2),f(3)\in\{4,5,6,7,8\}$ 중 오름차순 두 원소: ${}_5\mathrm C_2=10$. $f(5),f(6)\in\{1,2,3,4\}$ 중 내림차순 두 원소: ${}_4\mathrm C_2=6$. 곱 $60$.
  category: 단조 조건 함수 개수
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-01
  mechanism_primary: 단조함수-조합수
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-FN-함수-#0873
  page: 130
  category_type: 유형익히기-p
  problem_summary: |
    $X=\{x\mid |x|\le 1인 정수\}=\{-1,0,1\}$, $Y=\{12$보다 작은 소수$\}=\{2,3,5,7,11\}$. (가) 일대일함수, (나) $f(x)$는 홀수. $f$ 개수.
  solution_summary: |
    홀수 소수 $\{3,5,7,11\}$ 4개. 3원소 정의역 → 일대일: ${}_4\mathrm P_3=24$.
  category: 조건부 일대일함수 개수
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-01
  mechanism_primary: 일대일함수-치역제한-순열
  insight_type: 조건통합형
  depth: 2

- source: RPM-CM2-FN-함수-#0874
  page: 130
  category_type: 유형익히기-p
  problem_summary: |
    $X=\{1,2,3,4\}$, $Y=\{1,\ldots,7\}$에서 $f:X\to Y$. (가) $f(1)\ge 5$, (나) $x_1<x_2$이면 $f(x_1)>f(x_2)$. $f$ 개수.
  solution_summary: |
    감소함수. $f(1)$ 값에 따라 $\{f(2),f(3),f(4)\}\subset \{1,\ldots,f(1)-1\}$의 감소 배치. $f(1)=5$: ${}_4\mathrm C_3=4$. $f(1)=6$: ${}_5\mathrm C_3=10$. $f(1)=7$: ${}_6\mathrm C_3=20$. 합 $34$.
  category: 감소 조건 함수 개수
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-01
  mechanism_primary: 감소함수-경우별-조합
  insight_type: 조건통합형
  depth: 3

### 유형 23 역함수의 그래프의 성질 (P)

- source: RPM-CM2-FN-역함수-#0875
  page: 131
  category_type: 유형익히기-대표문제-p
  problem_summary: |
    정의역 $\{x\mid x\ge 2\}$인 $f(x)=x^2-4x+4=(x-2)^2$. $y=f(x)$와 $y=f^{-1}(x)$의 교점 좌표를 $(a,b)$라 할 때 $ab$.
  solution_summary: |
    $y=x$ 위 교점: $x^2-4x+4=x$ → $x^2-5x+4=0$ → $x=1,4$. $x\ge 2$이므로 $x=4$. 교점 $(4,4)$. $ab=16$.
  category: 역함수 그래프 교점 (y=x 위)
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 역함수교점-y=x대칭
  insight_type: 통찰형
  depth: 2

- source: RPM-CM2-FN-역함수-#0876
  page: 131
  category_type: 유형익히기-서술형-p
  problem_summary: |
    $f(x)=\tfrac12 x-\tfrac32$. $y=f(x)$와 $y=f^{-1}(x)$의 교점 $\mathrm P$. $\overline{\mathrm{OP}}$.
  solution_summary: |
    $y=x$ 위: $\tfrac12 x-\tfrac32=x$ → $x=-3$. $\mathrm P(-3,-3)$. $\overline{\mathrm{OP}}=3\sqrt2$.
  category: 역함수 교점 거리
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 역함수교점-원점거리
  insight_type: 통찰형
  depth: 2

- source: RPM-CM2-FN-역함수-#0877
  page: 131
  category_type: 유형익히기-p
  problem_summary: |
    $f(x)=x^2-2x+k$ ($x\ge 1$). $y=f(x)$와 $y=f^{-1}(x)$가 서로 다른 두 점에서 만나는 $k$ 범위.
  solution_summary: |
    $y=x$ 위 교점 두 개 이차방정식 $g(x)=x^2-3x+k=0$의 서로 다른 두 실근이 1보다 커야 함. (i) 판별식 $D=9-4k>0$ → $k<\tfrac94$. (ii) $g(1)\ge 0$: $1-3+k\ge 0$ → $k\ge 2$. (iii) 축 $x=\tfrac32>1$ 만족. 범위 $2\le k<\tfrac94$.
  category: 역함수 교점 두 개 (조건)
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 역함수교점-이차판별-축조건
  insight_type: 통찰형
  depth: 3

### 유형 24 절댓값 기호를 포함한 함수의 그래프 (P)

- source: RPM-CM2-FN-절댓값-#0878
  page: 131
  category_type: 유형익히기-대표문제-p
  problem_summary: |
    $y=|x-2|$와 직선 $y=mx-1$이 만나도록 하는 $m$의 범위.
  solution_summary: |
    직선은 $(0,-1)$ 고정. $y=|x-2|$의 꼭짓점 $(2,0)$. 오른쪽 반직선 $y=x-2$와 평행 임계 $m=1$. 왼쪽 반직선 $y=-x+2$와 평행 $m=-1$. 점 $(2,0)$ 지나는 기울기 $\tfrac{0-(-1)}{2}=\tfrac12$. 정답: $m<-1$ 또는 $m\ge \tfrac12$.
  category: 절댓값 + 직선 만남
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-01
  mechanism_primary: 절댓값-직선기울기-경계
  insight_type: 통찰형
  depth: 3

- source: RPM-CM2-FN-절댓값-#0879
  page: 131
  category_type: 유형익히기-p
  problem_summary: |
    $y=f(x)$ 그래프 (꺾은 삼각형 꼴)일 때 $y=f(|x|)$의 개형.
  solution_summary: |
    $x\ge 0$ 부분 유지, $x<0$ 부분은 $x\ge 0$ 부분을 $y$축 대칭. 답 ②.
  category: 내절댓값 그래프
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-01
  mechanism_primary: 그래프-내절댓값-대칭복제
  insight_type: 조건통합형
  depth: 2

- source: RPM-CM2-FN-절댓값-#0880
  page: 131
  category_type: 유형익히기-p
  problem_summary: |
    $y=|x-2|-|x+4|$의 최댓값 $M$·최솟값 $m$. $M-m$.
  solution_summary: |
    구간 분해 ($x<-4$, $-4\le x<2$, $x\ge 2$): 값 $6$, $-2x-2$, $-6$. 최댓값 $6$, 최솟값 $-6$. 차 $12$.
  category: 두 절댓값 차 함수 극값
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-01
  mechanism_primary: 절댓값차-구간분해-극값
  insight_type: 조건통합형
  depth: 3

---

## Section C. 시험에 꼭 나오는 문제 (p.132~134, 0881~0904)

- source: RPM-CM2-FN-함수-#0881
  page: 132
  category_type: 시험에꼭나오는
  problem_summary: |
    $X=\{-1,0,1\}$, $Y=\{0,1,2\}$에서 $X\to Y$ 함수인 것 두 개 (5식 중).
  solution_summary: |
    ② $y=x^2+1$ 치역 $\{1,2\}\subset Y$ O. ⑤ $y=(x^2$을 2로 나눈 나머지$)$: 치역 $\{0,1\}\subset Y$ O. 답 ②,⑤.
  category: 함수 판별 (치역 포함)
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-01
  mechanism_primary: 함수-치역-공역포함
  insight_type: 절차형
  depth: 2

- source: RPM-CM2-FN-함수-#0882
  page: 132
  category_type: 시험에꼭나오는
  problem_summary: |
    자연수 전체에서 $f$: (가) $f(2n)=f(n+1)$, (나) $f(2n-1)=n+1$. $f(9)+f(24)$.
  solution_summary: |
    $f(9)=f(2\cdot 5-1)=5+1=6$. $f(24)=f(2\cdot 12)=f(13)=f(2\cdot 7-1)=8$. 합 $14$.
  category: 조건부 함수 (재귀·짝수홀수)
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-01
  mechanism_primary: 조건함수-재귀-패리티
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-FN-함수-#0883
  page: 132
  category_type: 시험에꼭나오는
  problem_summary: |
    $f:\mathbb N\to \mathbb N$, $f(x)=(8^x$의 일의 자릿수). $f$의 치역 원소의 합.
  solution_summary: |
    $8^1=8, 8^2=64, 8^3=512, 8^4=4096, 8^5$... 일의 자리 $8,4,2,6$ 주기 4. 치역 $\{2,4,6,8\}$. 합 $20$.
  category: 자릿수 주기 함수 치역
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-01
  mechanism_primary: 주기치역-일의자리
  insight_type: 통찰형
  depth: 2

- source: RPM-CM2-FN-함수-#0884
  page: 132
  category_type: 시험에꼭나오는
  problem_summary: |
    정의역 $\{0,1,2\}$인 $f(x)=x^2-2x+3$, $g(x)=a|x-1|+b$가 서로 같음. $2a+b$.
  solution_summary: |
    $f(0)=g(0)$: $3=a+b$. $f(1)=g(1)$: $2=b$ → $a=1$. $2a+b=4$.
  category: 서로 같은 함수 (절댓값)
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-01
  mechanism_primary: 같은함수-값연립
  insight_type: 조건통합형
  depth: 2

- source: RPM-CM2-FN-함수-#0885
  page: 132
  category_type: 시험에꼭나오는
  problem_summary: |
    $X=\{1,2,3,4\}$, $Y=\{1,2,3,4,5\}$에서 일대일함수 $f$. $f(1)+f(2)=8$일 때 $f(3)+f(4)$의 최댓값.
  solution_summary: |
    $f(1)+f(2)=8$: 가능쌍 $\{3,5\}$·$\{4,?\}$... 실제로 $\{3,5\}$·$\{1,7불가\}$·$\{4,4중복\}$ 등. 유효쌍 $\{3,5\}$ 또는 $\{5,3\}$. 잔여 $\{1,2,4\}$ 중 두 값 최대: $2+4=6$.
  category: 일대일함수 값 최대
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-01
  mechanism_primary: 일대일-값제약-최적
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-FN-함수-#0886
  page: 132
  category_type: 시험에꼭나오는-고쟁이기출
  problem_summary: |
    $X=\{x\mid 0\le x\le 4\}$에서 $f(x)=\begin{cases}ax^2+b & (0\le x<3)\\ x-3 & (3\le x\le 4)\end{cases}$가 일대일대응. $f(1)$.
  solution_summary: |
    $g(x)=ax^2+b$가 $(0,4)$·$(3,1)$ 지나야 함: $b=4$, $9a+b=1$ → $a=-\tfrac13$. $f(1)=-\tfrac13+4=\tfrac{11}{3}$.
  category: 부분별 일대일대응 (이차+일차)
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-01
  mechanism_primary: 부분별 일대일-연속대응-이차
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-FN-함수-#0887
  page: 132
  category_type: 시험에꼭나오는-고쟁이기출
  problem_summary: |
    $X=\{1,2,3,4,5\}$에서 세 함수 $f,g,h$: (가) $f$는 항등, $g$는 상수. (나) 모든 $x$에 대해 $f(x)+g(x)+h(x)=7$. $g(3)+h(1)$.
  solution_summary: |
    $f(x)=x$, $g(x)=k$. $x+k+h(x)=7$ → $h(x)=7-x-k$. $g(3)=k$, $h(1)=6-k$. 합 $6$.
  category: 항등·상수 + 관계식
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-01
  mechanism_primary: 여러함수-관계식-상쇄
  insight_type: 조건통합형
  depth: 2

- source: RPM-CM2-FN-함수-#0888
  page: 132
  category_type: 시험에꼭나오는
  problem_summary: |
    $X=\{a,b,c,d\}$, $Y=\{1,\ldots,6\}$. $x_1\ne x_2$이면 $f(x_1)\ne f(x_2)$인 $f:X\to Y$ 개수.
  solution_summary: |
    일대일함수 개수 ${}_6\mathrm P_4=360$.
  category: 일대일함수 개수
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-01
  mechanism_primary: 일대일함수-순열
  insight_type: 절차형
  depth: 1

- source: RPM-CM2-FN-함수-#0889
  page: 133
  category_type: 시험에꼭나오는
  problem_summary: |
    $f(n)=(n$보다 작은 소수의 개수$)$, $g(n)=(\sqrt n$보다 작은 자연수의 개수$)$. $(f\circ f\circ g)(100)$.
  solution_summary: |
    $\sqrt{100}=10$보다 작은 자연수 9. $g(100)=9$. $f(9)$: 9보다 작은 소수 $\{2,3,5,7\}$ 4개. $f(4)$: 4보다 작은 소수 $\{2,3\}$ 2개.
  category: 정수 세기 합성
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 세기함수-합성-대입
  insight_type: 조건통합형
  depth: 2

- source: RPM-CM2-FN-함수-#0890
  page: 133
  category_type: 시험에꼭나오는-중요★
  problem_summary: |
    $X=\{1,2,3\}$에서 일대일대응 $f,g$. $f(1)=2$, $f(3)=1$, $(g\circ f)(2)=3$, $(f\circ g)(1)=2$. $g(2)+(g\circ f)(3)$.
  solution_summary: |
    $f(2)=3$ (일대일대응). $g(f(2))=g(3)=3$. $f(g(1))=2$ → $g(1)=1$. $g(2)=2$. $(g\circ f)(3)=g(1)=1$. 합 $3$.
  category: 합성 + 일대일대응 (표)
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 합성-일대일대응-완성
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-FN-함수-#0891
  page: 133
  category_type: 시험에꼭나오는
  problem_summary: |
    $f(x)=ax-1$, $g(x)=bx+c$. $f(1)=1$, $(f\circ g)(x)=4x+5$. $abc$.
  solution_summary: |
    $f(1)=a-1=1$ → $a=2$. $f(g(x))=2(bx+c)-1=2bx+2c-1=4x+5$ → $b=2$, $c=3$. $abc=12$.
  category: 합성 + 계수결정
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 합성-계수비교
  insight_type: 조건통합형
  depth: 2

- source: RPM-CM2-FN-함수-#0892
  page: 133
  category_type: 시험에꼭나오는-고쟁이기출
  problem_summary: |
    $f(x)=x^2-2x+a$. $(f\circ f)(2)=(f\circ f)(4)$일 때 $f(6)$.
  solution_summary: |
    $f(2)=a$, $f(4)=a+8$. $(f\circ f)(2)=f(a)=a^2-a$. $(f\circ f)(4)=f(a+8)=(a+8)^2-2(a+8)+a=a^2+15a+48$. 등식 $a^2-a=a^2+15a+48$ → $-16a=48$ → $a=-3$. $f(x)=x^2-2x-3$, $f(6)=21$.
  category: 자기합성 조건 → 계수 → 값
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 자기합성-등식-계수결정
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-FN-함수-#0893
  page: 133
  category_type: 시험에꼭나오는
  problem_summary: |
    $(g\circ h)(x)=3x-5$, $((f\circ g)\circ h)(x)=x^2$. $f(4)$.
  solution_summary: |
    $((f\circ g)\circ h)(x)=(f\circ (g\circ h))(x)=f(3x-5)=x^2$. $3x-5=4$ → $x=3$. $f(4)=9$.
  category: 결합법칙 + 치환
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 결합법칙-치환-값
  insight_type: 조건통합형
  depth: 2

- source: RPM-CM2-FN-함수-#0894
  page: 133
  category_type: 시험에꼭나오는
  problem_summary: |
    $X=\{x\mid 0\le x\le 2\}$에서 $f(x)=\begin{cases}x+1 & (0\le x<1)\\ x-1 & (1\le x\le 2)\end{cases}$. $f^{n+1}=f\circ f^n$. $f^1(\tfrac13)+f^2(\tfrac13)+\cdots+f^{30}(\tfrac13)$.
  solution_summary: |
    $f(\tfrac13)=\tfrac43$, $f(\tfrac43)=\tfrac13$. 주기 2. 홀수 인덱스 $\tfrac43$, 짝수 $\tfrac13$. 합 $15(\tfrac43+\tfrac13)=15\cdot \tfrac53=25$.
  category: 반복합성 + 주기 합
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 반복합성-주기2-합
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-FN-함수-#0895
  page: 133
  category_type: 시험에꼭나오는
  problem_summary: |
    $f(x)=4x-1$. $(g\circ f)(x)=x$인 $g$에 대해 $f^{-1}(7)+g^{-1}(7)$.
  solution_summary: |
    $g=f^{-1}$이므로 $g(x)=\tfrac{x+1}{4}$. $f^{-1}(7)=2$. $g^{-1}=f$이므로 $g^{-1}(7)=f(7)=27$. 합 $29$.
  category: 역함수 관계 인식
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 합성=항등-역함수판정
  insight_type: 통찰형
  depth: 2

- source: RPM-CM2-FN-함수-#0896
  page: 133
  category_type: 시험에꼭나오는
  problem_summary: |
    일차함수 $f$: $f^{-1}(1)=3$, $(f\circ f)(3)=-1$. $f(4)$.
  solution_summary: |
    $f(3)=1$. $f(1)=-1$. $f(x)=ax+b$: $3a+b=1$, $a+b=-1$ → $a=1$, $b=-2$. $f(x)=x-2$. $f(4)=2$.
  category: 역함수 값 + 합성 → 계수
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 역함수-합성값-연립
  insight_type: 조건통합형
  depth: 2

- source: RPM-CM2-FN-함수-#0897
  page: 134
  category_type: 시험에꼭나오는-중요★
  problem_summary: |
    실수 전체 정의역·공역. $f(x)=\begin{cases}x^2-2x+a & (x>1)\\ x-3 & (x\le 1)\end{cases}$의 역함수 존재. $f^{-1}(2)$.
  solution_summary: |
    역함수 존재 → 일대일대응. $y=x-3$ 그래프가 $x\le 1$에서 $y\le -2$, $y=x^2-2x+a$가 $x>1$에서 감소 후 증가 → 실제로는 $x>1$에서 증가 시 오히려 값 정합. 조건 정합화 결과 $a=-1$. $f^{-1}(2)$: $x^2-2x-1=2$ → $x=3$ ($x>1$). 답 3.
  category: 두 식으로 정의된 함수 역함수 존재 + 값
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 부분별 역함수-연속조건-값
  insight_type: 통찰형
  depth: 3

- source: RPM-CM2-FN-함수-#0898
  page: 134
  category_type: 시험에꼭나오는
  problem_summary: |
    $f(x)=2x-1$, $g(x)=-4x+2$. $h(x)=(f\circ g)(x)$. $h^{-1}(x)$.
  solution_summary: |
    $h(x)=-8x+3$. 역함수 $h^{-1}(x)=-\tfrac18 x+\tfrac38$.
  category: 합성함수의 역
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 합성함수-역
  insight_type: 절차형
  depth: 2

- source: RPM-CM2-FN-함수-#0899
  page: 134
  category_type: 시험에꼭나오는
  problem_summary: |
    $f(x)=ax+b$, $g(x)=x+c$. $(f\circ g)^{-1}(3x-1)=x$, $f^{-1}(3)=-1$. $(f\circ g^{-1})(\tfrac23)$.
  solution_summary: |
    $(f\circ g)(x)=ax+ac+b=3x-1$ → $a=3$, $ac+b=-1$. $f^{-1}(3)=-1$: $-3+b=3$ → $b=6$. $c=-\tfrac73$. $g^{-1}(\tfrac23)=k$: $k-\tfrac73=\tfrac23$ → $k=3$. $f(3)=15$.
  category: 합성역 + 역값 → 계수 → 합성역값
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 합성역-계수-복합값
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-FN-함수-#0900
  page: 134
  category_type: 시험에꼭나오는
  problem_summary: |
    $f(x)=x|x|+k$의 역함수 $f^{-1}$에 대해 $f^{-1}(3)=1$. $(f\circ f)^{-1}(3)$.
  solution_summary: |
    $f(1)=1+k=3$ → $k=2$. $(f\circ f)^{-1}(3)=(f^{-1}\circ f^{-1})(3)=f^{-1}(1)$. $f(x)=1$: $x|x|=-1$ → $x=-1$ ($x<0$이므로 $-x^2=-1$). 답 $-1$.
  category: 절댓값+상수 역함수
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 자기합성역-분기평가
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-FN-함수-#0901
  page: 134
  category_type: 시험에꼭나오는
  problem_summary: |
    $y=f(x)$·$y=g(x)$ 두 식 그래프 (부분선 + 절댓값 꼴). $(f\circ g)(-1)+(g\circ f)(4)$.
  solution_summary: |
    그래프 판독: $g(-1)=0$, $f(0)=1$. $f(4)=4$, $g(4)=4$. 합 $1+4=5$.
  category: 그래프 합성값
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 그래프-합성값
  insight_type: 절차형
  depth: 2

- source: RPM-CM2-FN-함수-#0902
  page: 134
  category_type: 시험에꼭나오는
  problem_summary: |
    $y=f(x)$·$y=x$ 그래프. $g=f^{-1}$. $(g\circ g\circ g)(e)$.
  solution_summary: |
    $g(e)=d$, $g(d)=c$, $g(c)=b$. 답 $b$.
  category: 그래프 반복 역함수
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 그래프-역-반복계단
  insight_type: 조건통합형
  depth: 2

- source: RPM-CM2-FN-함수-#0903
  page: 134
  category_type: 시험에꼭나오는
  problem_summary: |
    $X=\{-2,0,2\}$에서 $X\to X$의 $f$ 중 $f(x)=f(-x)$ 만족하는 $f$의 개수.
  solution_summary: |
    $f(-2)=f(2)$ 강제. $f(0)$은 자유 (3가지), $f(2)=f(-2)$는 3가지. 곱 $3\times 3=9$.
  category: 대칭 조건 함수 개수
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-01
  mechanism_primary: 짝함수-경우-곱셈
  insight_type: 조건통합형
  depth: 2

- source: RPM-CM2-FN-함수-#0904
  page: 134
  category_type: 시험에꼭나오는
  problem_summary: |
    $f(x)=|x+2|+|x-1|$의 그래프와 직선 $y=5$로 둘러싸인 도형의 넓이.
  solution_summary: |
    구간 분해: $x<-2$: $-2x-1$, $-2\le x\le 1$: $3$, $x>1$: $2x+1$. $y=5$ 교점: $x=-3$, $x=2$. 사다리꼴 밑변 5+3, 높이 2. 넓이 $\tfrac12(5+3)\cdot 2=8$.
  category: 두 절댓값 합 + 넓이
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-01
  mechanism_primary: 두절댓값-사다리꼴-넓이
  insight_type: 조건통합형
  depth: 3

---

## Section D. 서술형 주관식 (p.135, 0905~0908)

- source: RPM-CM2-FN-함수-#0905
  page: 135
  category_type: 서술형-중요★
  problem_summary: |
    실수 전체 정의역·공역. $f(x)=\begin{cases}x^2+1 & (x\ge 1)\\ (a-2)x+b & (x<1)\end{cases}$가 일대일대응. 정수 $b$의 최댓값 ($a$는 상수).
  solution_summary: |
    오른쪽 식은 $x\ge 1$에서 증가. 왼쪽도 증가·연속: $a-2>0$ → $a>2$. 연속 $f(1)=2$: $(a-2)+b=2$ → $b=4-a$. $a>2$이므로 $b<2$. 정수 최댓값 $1$.
  category: 부분별 일대일대응 + 정수 극값
  tier: star_4
  unit_code: CM2-FN
  standard: 10수07-01
  mechanism_primary: 부분별 일대일-연속-정수극값
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-FN-함수-#0906
  page: 135
  category_type: 서술형
  problem_summary: |
    자연수 전체 정의역인 $f,g,h$. $f(x)=\begin{cases}\tfrac{x}{2} & (x$짝수$)\\ x+1 & (x$홀수$)\end{cases}$, $(h\circ g)(x)=3x-4$. $(h\circ g\circ f)(a)=5$인 자연수 $a$의 값.
  solution_summary: |
    (i) $a$ 짝수: $(h\circ g)(f(a))=3\cdot \tfrac{a}{2}-4=5$ → $\tfrac{3a}{2}=9$ → $a=6$. (ii) $a$ 홀수: $3(a+1)-4=5$ → $3a-1=5$ → $a=2$ (짝수, 모순). 답 $6$.
  category: 두 식으로 정의된 함수 + 합성 조건 → 정수해
  tier: star_4
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 부분별 합성-패리티-등식
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-FN-함수-#0907
  page: 135
  category_type: 서술형
  problem_summary: |
    $f(x)=2x-3$, $g(x)=-3x+1$. $(g\circ f^{-1})(a)=2$인 $a$.
  solution_summary: |
    $g(f^{-1}(a))=2$ → $f^{-1}(a)=k$이고 $g(k)=2$: $-3k+1=2$ → $k=-\tfrac13$. $f(-\tfrac13)=a$: $-\tfrac23-3=-\tfrac{11}{3}$. 답 $-\tfrac{11}{3}$.
  category: 역합성값 → 원상
  tier: star_4
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 역합성-원상-대응
  insight_type: 조건통합형
  depth: 2

- source: RPM-CM2-FN-함수-#0908
  page: 135
  category_type: 서술형
  problem_summary: |
    $f(x)-3f(2-x)=-4x$. $f(0)+f(1)$.
  solution_summary: |
    $x=1$: $f(1)-3f(1)=-4$ → $f(1)=2$. $x=0$: $f(0)-3f(2)=0$. $x=2$: $f(2)-3f(0)=-8$. 두 식 연립: $f(2)=3f(0)-8$을 위 식 대입 → $f(0)-3(3f(0)-8)=0$ → $-8f(0)+24=0$ → $f(0)=3$. 합 $5$.
  category: 대칭 함수방정식
  tier: star_4
  unit_code: CM2-FN
  standard: 10수07-01
  mechanism_primary: 함수방정식-대칭치환-연립
  insight_type: 통찰형
  depth: 3

---

## Section E. 실력 up (p.135, 0909~0911) — star 4·5 발전문제

- source: RPM-CM2-FN-함수-#0909
  page: 135
  category_type: 실력up
  problem_summary: |
    $y=f(x)$·$y=g(x)$인 식 그래프 주어짐. $y=(g\circ f)(x)$의 개형.
  solution_summary: |
    $f(x)$: $x$ ($0\le x<1$), $1$ ($1\le x<2$), $x-1$ ($2\le x\le 3$). $g(x)$: $2x$ ($0\le x<1$), $-2x+4$ ($1\le x\le 2$). $(g\circ f)(x)$를 세 구간에서 각각 계산: $[0,1)$ $2x$, $[1,2)$ $2$, $[2,3]$ $-2x+6$. 답 ①.
  category: 부분별 합성 그래프 개형
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 부분별 합성-정의역분할-그래프
  insight_type: 통찰형
  depth: 3

- source: RPM-CM2-FN-함수-#0910
  page: 135
  category_type: 실력up-고쟁이기출
  problem_summary: |
    실수 전체에서 $f(x)=\begin{cases}2x+2 & (x<2)\\ x^2-7x+16 & (x\ge 2)\end{cases}$. $(f\circ f)(a)=f(a)$를 만족하는 모든 실수 $a$의 합.
  solution_summary: |
    $f(t)=t$ 해: $t<2$: $2t+2=t$ → $t=-2$. $t\ge 2$: $t^2-7t+16=t$ → $t^2-8t+16=0$ → $t=4$. 따라서 $f(a)=-2$ 또는 $f(a)=4$. (i) $a<2$: $2a+2=-2$ → $a=-2$; $2a+2=4$ → $a=1$. (ii) $a\ge 2$: $a^2-7a+16=-2$ → 판별식 $<0$ 해 없음; $a^2-7a+16=4$ → $a^2-7a+12=0$ → $a=3,4$. 합 $-2+1+3+4=6$.
  category: 자기합성 고정점 + 부분별
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 자기합성-고정점-분기-경우
  insight_type: 통찰형
  depth: 3

- source: RPM-CM2-FN-함수-#0911
  page: 135
  category_type: 실력up
  problem_summary: |
    $f(x)=\begin{cases}\tfrac12 x & (x<1)\\ \tfrac32 x-1 & (x\ge 1)\end{cases}$. $y=f(x)$와 $y=f^{-1}(x)$의 그래프로 둘러싸인 도형의 넓이.
  solution_summary: |
    두 그래프 $y=x$에 대해 대칭 → 넓이 = 2·(($y=f(x)$와 $y=x$로 둘러싸인 넓이)). $y=x$ 교점: $\tfrac12 x=x$ → $x=0$; $\tfrac32 x-1=x$ → $x=2$. 교점 $(0,0)$, $(2,2)$. $f$ 꼭짓점 $(1,\tfrac12)$. 삼각형 두 개 넓이 합 $2\cdot(\tfrac12\cdot \tfrac12\cdot 1+\tfrac12\cdot \tfrac12\cdot 1)=1$.
  category: 역함수 그래프 대칭 + 넓이
  tier: star_3
  unit_code: CM2-FN
  standard: 10수07-02
  mechanism_primary: 역함수대칭-y=x활용-넓이
  insight_type: 통찰형
  depth: 3
