---
name: mechanism-데이터-RPM-CM2-ST
description: RPM 공통수학2 (2022개정) 집합과 명제 정독 데이터. 세션 54 (2026-07-20) 신설.
metadata:
  type: reference
  version: v1.0
  established: 2026-07-20
  source: RPM 공통수학2 (2022개정)
  tier_mapping:
    교과서문제: star_1~2
    유형익히기(대표문제): star_3
    유형익히기(상중하): star_3~4
    시험에꼭나오는: star_3~4
    시험에꼭나오는(중요★): star_4~5
    서술형: star_3~4
    실력up: star_4~5
  unit_code: CM2-ST
  standard: 10수06-01·02·03·04
  citation_note: RPM · 학습 목적 · 저작권 준수 (원문 전사 없음)
  extract_range: "05 집합의 뜻과 포함관계·06 집합의 연산·07 명제 (전 유형)"
  pages: "64~113"
---

# RPM 공통수학2 (2022개정) · CM2-ST 집합과 명제 정독 데이터

## 소단원 구성

- **05 집합의 뜻과 포함관계** (유형 01~14, p.64~75)
- **06 집합의 연산** (유형 01~18, p.76~93)
- **07 명제** (유형 01~24, p.94~113)

---

## Section A. 05 집합의 뜻과 포함관계 — 교과서문제 대표 (0417~0432)

- source: RPM-CM2-ST-집합-#0417
  page: 65
  category_type: 교과서문제
  problem_summary: |
    보기에서 집합인 것 고르기 (100에 가까운 수·16보다 작은 4의 양의 배수·다리 2개 동물·무거운 학생)
  solution_summary: |
    기준 명확 여부. ㄴ·ㄷ만 집합. "가까운"·"무거운" 애매.
  category: 집합의 뜻
  tier: star_2
  unit_code: CM2-ST
  standard: 10수06-01
  mechanism_primary: 집합-판정-기준-명확성
  insight_type: 절차형
  depth: 1
  citation_note: "RPM · 학습 목적"

- source: RPM-CM2-ST-집합-#0432
  page: 65
  category_type: 교과서문제
  problem_summary: |
    $A=\{1,3,5,7\}$ 부분집합 개수·진부분집합 개수·3을 반드시 원소로 갖는 부분집합 개수
  solution_summary: |
    (1) $2^4=16$ (2) $15$ (3) $2^3=8$.
  category: 부분집합 개수
  tier: star_2
  unit_code: CM2-ST
  standard: 10수06-01
  mechanism_primary: 부분집합-개수-공식
  insight_type: 절차형
  depth: 1

---

## Section B. 05 유형익히기 (0433~0482)

### 유형 01 집합의 뜻

- source: RPM-CM2-ST-집합-#0433
  page: 66
  category_type: 유형익히기(대표문제)
  problem_summary: |
    다음 중 집합이 아닌 것 고르기 (10보다 작은 짝수·6의 양의 약수·키가 큰 축구 선수·5 이하의 자연수·사계절)
  solution_summary: |
    "큰"이 애매. 답 ③.
  category: 집합의 뜻
  tier: star_3
  unit_code: CM2-ST
  standard: 10수06-01
  mechanism_primary: 집합-판정-기준-명확성
  insight_type: 절차형
  depth: 1

- source: RPM-CM2-ST-집합-#0434
  page: 66
  category_type: 유형익히기
  problem_summary: |
    집합인 것 모두 고르기 (12월 태생 학생·맛있는 과일·짝수인 두 자리 자연수·높은 산·작은 분수)
  solution_summary: |
    ①·③ 명확. 답 ①·③.
  category: 집합의 뜻
  tier: star_3
  unit_code: CM2-ST
  standard: 10수06-01
  mechanism_primary: 집합-판정-기준-명확성
  insight_type: 절차형
  depth: 1

- source: RPM-CM2-ST-집합-#0435
  page: 66
  category_type: 유형익히기
  problem_summary: |
    보기에서 집합인 것 개수 (아름다운 꽃·태양계 행성·30보다 작은 5의 양의 배수·야구 좋아하는 학생)
  solution_summary: |
    ㄴ·ㄷ만 명확. 답 2.
  category: 집합의 뜻
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 집합-판정-기준-명확성
  insight_type: 절차형
  depth: 1

### 유형 02 집합과 원소 사이의 관계

- source: RPM-CM2-ST-집합-#0436
  page: 66
  category_type: 유형익히기(대표문제)
  problem_summary: |
    $A=\{$7보다 작은 홀수인 자연수$\}$일 때 옳은 것: $0\in A$·$3\in A$·$4\in A$·$5\notin A$·$7\in A$
  solution_summary: |
    $A=\{1,3,5\}$. ② $3\in A$ 참.
  category: 원소 판정
  tier: star_3
  unit_code: CM2-ST
  standard: 10수06-01
  mechanism_primary: 원소-속성-검사
  insight_type: 절차형
  depth: 1

- source: RPM-CM2-ST-집합-#0437
  page: 66
  category_type: 유형익히기
  problem_summary: |
    3으로 나눈 나머지가 1인 자연수 집합 $A$에서 $1\in A$·$3\in A$·$7\in A$·$12\notin A$ 옳은 것
  solution_summary: |
    $A=\{1,4,7,10,\ldots\}$. ㄷ·ㄹ.
  category: 원소 판정
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 원소-속성-검사
  insight_type: 절차형
  depth: 1

- source: RPM-CM2-ST-집합-#0438
  page: 66
  category_type: 유형익히기
  problem_summary: |
    $x^3-x^2-2x=0$의 해집합 $A$에서 원소 판정 (옳지 않은 것)
  solution_summary: |
    $x(x+1)(x-2)=0$. $A=\{-1,0,2\}$. ③ $1\in A$ 거짓.
  category: 방정식 해집합·원소 판정
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 삼차식-인수분해·원소검사
  insight_type: 절차형
  depth: 2

- source: RPM-CM2-ST-집합-#0439
  page: 66
  category_type: 유형익히기
  problem_summary: |
    수 체계 판정 ($\sqrt{4}\notin Z$·$\frac{5}{3}\notin Q$·$\pi\in Q$·$\sqrt{5}+1\in R$·$i^{100}\notin R$)
  solution_summary: |
    $\sqrt{4}=2\in Z$·$\frac{5}{3}\in Q$·$\pi\notin Q$·$\sqrt{5}+1\in R$·$i^{100}=1\in R$. 답 ④.
  category: 수 체계·원소 판정
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 수-체계-분류
  insight_type: 절차형
  depth: 2
  citation_note: "RPM · 학습 목적 · $i$ 는 CM1 밖이나 참고 표기"

### 유형 03 집합의 표현 방법

- source: RPM-CM2-ST-집합-#0440
  page: 67
  category_type: 유형익히기(대표문제)
  problem_summary: |
    벤다이어그램 $A=\{4,8,12,16\}$을 조건제시법으로 바르게 나타낸 것
  solution_summary: |
    답 ⑤ $A=\{x|x$는 20보다 작은 4의 양의 배수$\}$.
  category: 조건제시법 변환
  tier: star_3
  unit_code: CM2-ST
  standard: 10수06-01
  mechanism_primary: 조건제시법-원소나열법-변환
  insight_type: 절차형
  depth: 1

- source: RPM-CM2-ST-집합-#0441
  page: 67
  category_type: 유형익히기
  problem_summary: |
    원소가 다른 하나 찾기 (5개 조건제시법 집합 비교)
  solution_summary: |
    ①②④⑤ = $\{3,5,7\}$, ③ = $\{2,3,5,7\}$. 답 ③.
  category: 원소나열 비교
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 원소나열-집합-일치판정
  insight_type: 절차형
  depth: 2

- source: RPM-CM2-ST-집합-#0442
  page: 67
  category_type: 유형익히기
  problem_summary: |
    $A=\{x|x=2^a\times 5^b,\; a,b\in \mathbb{N}\}$의 원소가 아닌 것 (20·40·100·150·250)
  solution_summary: |
    소인수분해. $150=2\times 3\times 5^2$은 3 포함. 답 ④.
  category: 조건제시법·원소 판정
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 소인수분해·조건-일치
  insight_type: 절차형
  depth: 2

### 유형 04 유한집합과 무한집합

- source: RPM-CM2-ST-집합-#0443
  page: 67
  category_type: 유형익히기(대표문제)
  problem_summary: |
    유한집합인 것 모두 고르기 (5개 조건)
  solution_summary: |
    ③ $\varnothing$·④ $\{4,8,\ldots,96\}$ 유한. 답 ③·④.
  category: 유한·무한 판정
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 유한-무한-판정
  insight_type: 절차형
  depth: 1

- source: RPM-CM2-ST-집합-#0444
  page: 67
  category_type: 유형익히기
  problem_summary: |
    보기에서 무한집합 개수 (10의 양의 약수·5로 나누어떨어지는 자연수·$x^2+4=0$ 실수해·$|x|<2$ 유리수·4보다 큰 짝수)
  solution_summary: |
    ㄴ·ㄹ·ㅁ 무한. 답 3.
  category: 유한·무한 판정
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 유한-무한-판정
  insight_type: 절차형
  depth: 2

- source: RPM-CM2-ST-집합-#0445
  page: 67
  category_type: 유형익히기(서술형)
  problem_summary: |
    $A=\{x|x^2-2kx-3k+10<0,\; x\in\mathbb{R}\}$이 공집합이 되는 정수 $k$의 개수
  solution_summary: |
    이차부등식 해가 존재하지 않으려면 $D/4\le 0$. $k^2+3k-10\le 0$, $-5\le k\le 2$. 정수 8개.
  category: 이차부등식·공집합 조건
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 판별식·해-없음-조건
  insight_type: 조건통합형
  depth: 2

### 유형 05 유한집합의 원소의 개수

- source: RPM-CM2-ST-집합-#0446
  page: 68
  category_type: 유형익히기(대표문제)
  problem_summary: |
    $A=\{x|x(x-1)^2=0\}$·$B=\{x|x=8/k,\; k\in\mathbb{N}\}$일 때 $n(A)+n(B)$
  solution_summary: |
    $A=\{0,1\}$·$B=\{1,2,4,8\}$. $2+4=6$.
  category: n(A) 계산
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 원소나열-변환·n산정
  insight_type: 절차형
  depth: 2

- source: RPM-CM2-ST-집합-#0447
  page: 68
  category_type: 유형익히기
  problem_summary: |
    옳지 않은 것 (5개 $n(\cdot)$ 판정)
  solution_summary: |
    ② $B=\{2\}$이면 $n(B)=1$ (2가 아니라). 답 ②.
  category: n 정의
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: n(A)-정의
  insight_type: 절차형
  depth: 1

- source: RPM-CM2-ST-집합-#0448
  page: 68
  category_type: 유형익히기
  problem_summary: |
    $A=\{1,2,3\}$·$B=\{$9의 양의 약수$\}$·$C=\{xy|x\in A, y\in B\}$일 때 $n(A)+n(B)-n(C)$
  solution_summary: |
    $B=\{1,3,9\}$. 곱집합 $C=\{1,2,3,6,9,18,27\}$, $n(C)=7$. $3+3-7=-1$.
  category: 곱집합·원소 개수
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 표-곱집합-중복제거
  insight_type: 조건통합형
  depth: 2

- source: RPM-CM2-ST-집합-#0449
  page: 68
  category_type: 유형익히기(서술형)
  problem_summary: |
    $A=\{(x,y)|x+3y=14, x,y\in\mathbb{N}\}$·$B=\{x|x\le k, k\in\mathbb{N}\}$일 때 $n(A)+n(B)=10$이면 $k$
  solution_summary: |
    $A=\{(2,4),(5,3),(8,2),(11,1)\}$, $n(A)=4$. $4+k=10$이므로 $k=6$.
  category: 부정방정식·원소 개수
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 부정방정식-자연수해
  insight_type: 조건통합형
  depth: 2

### 유형 06 기호 ∈, ⊂의 사용

- source: RPM-CM2-ST-집합-#0450
  page: 68
  category_type: 유형익히기(대표문제)
  problem_summary: |
    $A=\{a,b,c,d\}$에 대해 옳은 것 ($a\in A$·$b\subset A$·$\{c\}\in A$·$\{a,b,c\}\subset A$·$A\subset\{a,b,c,d\}$)
  solution_summary: |
    ㄱ·ㄹ·ㅁ 참. ㄴ·ㄷ 기호 오용.
  category: ∈·⊂ 구분
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 원소-부분집합-기호구분
  insight_type: 조건통합형
  depth: 2

- source: RPM-CM2-ST-집합-#0451
  page: 68
  category_type: 유형익히기
  problem_summary: |
    $A=\{1,3\}$·$B=\{$6의 양의 약수$\}$에 대해 옳지 않은 것
  solution_summary: |
    $B=\{1,2,3,6\}$. ⑤ $\{1,2,4\}\subset B$ 거짓 (4는 6 약수 아님). 답 ⑤.
  category: ∈·⊂ 판정
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 원소-부분집합-기호구분
  insight_type: 절차형
  depth: 2

- source: RPM-CM2-ST-집합-#0452
  page: 68
  category_type: 유형익히기
  problem_summary: |
    $A=\{1,2,\{1,2\}\}$에 대해 옳은 것
  solution_summary: |
    ② $\{1,2\}\subset A$ 참 (1,2 모두 원소). 원소 3개.
  category: ∈·⊂·중첩 집합
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 중첩집합-원소-판정
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-집합-#0453
  page: 68
  category_type: 유형익히기
  problem_summary: |
    $A=\{\varnothing,a,b,\{a,c\}\}$에 대해 옳지 않은 것
  solution_summary: |
    ④ $\{\varnothing,b\}\in A$ 거짓 ($\subset$이 옳음).
  category: ∈·⊂·중첩 집합
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 중첩집합-원소-판정
  insight_type: 조건통합형
  depth: 3

### 유형 07 집합 사이의 포함 관계

- source: RPM-CM2-ST-집합-#0454
  page: 69
  category_type: 유형익히기(대표문제)
  problem_summary: |
    $A=\{0,1,2\}$·$B=\{xy|x,y\in A\}$·$C=\{x+2y|x,y\in A\}$의 포함관계
  solution_summary: |
    표작성. $B=\{0,1,2,4\}$·$C=\{0,1,2,3,4,5,6\}$. $A\subset B\subset C$. 답 ①.
  category: 곱·합 집합·포함 관계
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 표-원소나열·포함판정
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-집합-#0455
  page: 69
  category_type: 유형익히기
  problem_summary: |
    $A=\{-2,0,2\}$·$B=\{x|x=-3<x\le 3$ 정수$\}$·$C=\{x|x^2-2x=0\}$ 포함관계
  solution_summary: |
    $B=\{-2,-1,0,1,2,3\}$·$C=\{0,2\}$. $C\subset A\subset B$. 답 ④.
  category: 포함 관계 판정
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 원소나열-포함판정
  insight_type: 절차형
  depth: 2

- source: RPM-CM2-ST-집합-#0456
  page: 69
  category_type: 유형익히기
  problem_summary: |
    $B\subset A$인 벤다이어그램에 해당하는 두 집합 쌍
  solution_summary: |
    ⑤ $A=\{1,2,3,4,5\}$·$B=\{2,3,5\}$ (7보다 작은 소수). $B\subset A$. 답 ⑤.
  category: 벤다이어그램·포함 판정
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 원소나열-포함판정
  insight_type: 절차형
  depth: 2

### 유형 08 포함관계·미지수 구하기

- source: RPM-CM2-ST-집합-#0457
  page: 69
  category_type: 유형익히기(대표문제)
  problem_summary: |
    $A=\{x|a<x\le 3a+8\}$·$B=\{x|0<x<3\}$일 때 $B\subset A$인 정수 $a$의 개수
  solution_summary: |
    수직선 비교. $a\le 0$, $3a+8\ge 3$. $-5/3\le a\le 0$. 정수 $a=-1,0$의 2개.
  category: 부등식 구간·포함 조건
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 수직선-포함-등호조건
  insight_type: 조건통합형
  depth: 3
  citation_note: "RPM · 학습 목적 · 등호 처리 주의"

- source: RPM-CM2-ST-집합-#0458
  page: 69
  category_type: 유형익히기
  problem_summary: |
    $A=\{x|(x^2-9)(2x-a)=0\}$·$B=\{x|(x-2)(x-3)=0\}$일 때 $B\subset A$인 상수 $a$
  solution_summary: |
    $A=\{-3,3,a/2\}$. $B=\{2,3\}$이 $A$에 속하려면 $2=a/2$, $a=4$.
  category: 방정식 해집합·포함
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 방정식해-포함-미지수
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-집합-#0459
  page: 69
  category_type: 유형익히기
  problem_summary: |
    $A=\{x|a\le x\le b\}$·$B=\{x|-2<x<6\}$·$C=\{x|-1\le x<5\}$일 때 $C\subset A\subset B$이면 $a+b$
  solution_summary: |
    $-2<a\le -1$, $5\le b<6$. 정수 $a=-1$·$b=5$. $a+b=4$.
  category: 이중 포함·정수 조건
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 수직선-이중포함-정수
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-집합-#0460
  page: 69
  category_type: 유형익히기
  problem_summary: |
    $A=\{2,-a\}$·$B=\{a^2+1,a-3,1\}$일 때 $A\subset B$이면 실수 $a$
  solution_summary: |
    $2\in B$: (i) $a^2+1=2 \Rightarrow a=\pm 1$; (ii) $a-3=2\Rightarrow a=5$. 각 경우 $-a\in B$ 확인. $a=-1$만 성립.
  category: 조건 분기·포함
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 경우분류·포함-일관성
  insight_type: 통찰형
  depth: 3
  citation_note: "RPM · 학습 목적 · 경우별 검증 필수"

### 유형 09 부분집합 구하기

- source: RPM-CM2-ST-집합-#0461
  page: 70
  category_type: 유형익히기(대표문제)
  problem_summary: |
    $A=\{$9의 양의 약수$\}$의 진부분집합 $X$ 모두 구하기
  solution_summary: |
    $A=\{1,3,9\}$. 진부분집합 $\varnothing,\{1\},\{3\},\{9\},\{1,3\},\{1,9\},\{3,9\}$의 7개.
  category: 부분집합 나열
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 부분집합-나열
  insight_type: 절차형
  depth: 1

- source: RPM-CM2-ST-집합-#0462
  page: 70
  category_type: 유형익히기
  problem_summary: |
    $A=\{4,8,12,16,20\}$의 원소가 2개인 부분집합 개수
  solution_summary: |
    $\binom{5}{2}=10$. (여기선 나열 5C2). 답 ③ 10.
  category: 부분집합·원소 개수 제한
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 조합-원소개수제한
  insight_type: 절차형
  depth: 2

- source: RPM-CM2-ST-집합-#0463
  page: 70
  category_type: 유형익히기
  problem_summary: |
    $\{1,2,3,4,5,6\}$의 공집합 아닌 부분집합 중 모든 원소의 합이 7 이하인 것 개수
  solution_summary: |
    (i) 1개: 6개. (ii) 2개: $\{1,2\}\ldots\{3,4\}$ 등 9개. (iii) 3개: $\{1,2,3\},\{1,2,4\}$의 2개. 총 17.
  category: 부분집합·조건 합
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 원소합-부분집합-분류나열
  insight_type: 조건통합형
  depth: 3

### 유형 10 서로 같은 집합

- source: RPM-CM2-ST-집합-#0464
  page: 70
  category_type: 유형익히기(대표문제)
  problem_summary: |
    $A=\{1,a,4\}$·$B=\{1,b^2,b^2-1\}$이 $A=B$이면 $a+b$ ($a,b$는 자연수)
  solution_summary: |
    $4\in B$: $b^2=4$이거나 $b^2-1=4$. $b^2=4\Rightarrow b=2$, $B=\{1,a,4,3\}$이므로 $a=3$. $a+b=5$.
  category: 같은 집합·미지수
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 원소일치-경우분류
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-집합-#0465
  page: 70
  category_type: 유형익히기
  problem_summary: |
    $A=\{3x-2|x\le 4$ 자연수$\}$·$B=\{1,4,a+1,b\}$·$A\subset B$·$B\subset A$일 때 $a-b$ ($a>b$)
  solution_summary: |
    $A=\{1,4,7,10\}$. $A=B$. $\{a+1,b\}=\{7,10\}$·$a>b$. $a=9,b=7$. $a-b=2$.
  category: 서로 같은 집합·순서 조건
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 원소일치·부등식결합
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-집합-#0466
  page: 70
  category_type: 유형익히기(서술형)
  problem_summary: |
    $A=\{x|x^2-ax+10=0\}$·$B=\{b,5\}$·$A=B$일 때 $ab$
  solution_summary: |
    $5\in A$: $25-5a+10=0$, $a=7$. $x^2-7x+10=(x-2)(x-5)=0$이므로 $A=\{2,5\}$, $b=2$. $ab=14$.
  category: 이차방정식·같은 집합
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 근-대입·같은집합
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-집합-#0467
  page: 70
  category_type: 유형익히기
  problem_summary: |
    $A=\{x+1,x^2\}$·$B=\{2x-1,3x-2\}$이 서로 같을 때 $x$
  solution_summary: |
    $x+1=2x-1$이면 $x=2$, $A=\{3,4\}=B$ 확인. 다른 경우 불가. $x=2$.
  category: 같은 집합·경우 분류
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 원소일치-경우분류
  insight_type: 조건통합형
  depth: 3

### 유형 11 부분집합의 개수

- source: RPM-CM2-ST-집합-#0468
  page: 71
  category_type: 유형익히기(대표문제)
  problem_summary: |
    $A$의 부분집합 개수 128, $B$의 진부분집합 개수 63일 때 $n(A)-n(B)$
  solution_summary: |
    $n(A)=7,\; n(B)=6$. 차 1.
  category: 부분집합 공식 역산
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 2^n-역산
  insight_type: 절차형
  depth: 2

- source: RPM-CM2-ST-집합-#0469
  page: 71
  category_type: 유형익히기
  problem_summary: |
    $\{x|x$는 12보다 작은 소수$\}$의 진부분집합 개수
  solution_summary: |
    소수 2,3,5,7,11 (5개). $2^5-1=31$.
  category: 진부분집합 개수
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 진부분집합-공식
  insight_type: 절차형
  depth: 2

- source: RPM-CM2-ST-집합-#0470
  page: 71
  category_type: 유형익히기
  problem_summary: |
    $A=\{x|x^2+x-6<0,\; x\in \mathbb{Z}\}$의 부분집합 개수
  solution_summary: |
    $-3<x<2$. $A=\{-2,-1,0,1\}$. $2^4=16$.
  category: 부등식 해집합·부분집합
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 이차부등식-정수해
  insight_type: 절차형
  depth: 2

- source: RPM-CM2-ST-집합-#0471
  page: 71
  category_type: 유형익히기
  problem_summary: |
    $A=\{x|x$는 50 이하 자연수$\}$의 공집합 아닌 부분집합 중 원소가 5의 배수로만 이루어진 개수
  solution_summary: |
    5,10,15,...,50 (10개)의 부분집합 중 공집합 제외. $2^{10}-1=1023$.
  category: 조건부 부분집합
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 조건-원소-부분집합
  insight_type: 조건통합형
  depth: 2

### 유형 12 특정 원소를 갖거나 갖지 않는 부분집합의 개수

- source: RPM-CM2-ST-집합-#0472
  page: 71
  category_type: 유형익히기(대표문제)
  problem_summary: |
    $A=\{x|x$는 14의 양의 약수$\}$의 $X\subset A$·$X\ne A$·$2\in X$인 $X$ 개수
  solution_summary: |
    $A=\{1,2,7,14\}$. 2 포함 부분집합 $2^3=8$개, 자기 자신 제외 7.
  category: 특정 원소 포함 부분집합
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 2^(n-k)-공식
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-집합-#0473
  page: 71
  category_type: 유형익히기
  problem_summary: |
    $S=\{1,2,3,4,5\}$에서 $1\in A$·$2\notin A$·$5\notin A$인 $A\subset S$ 개수
  solution_summary: |
    1 반드시·2·5 제외. 3·4만 자유. $2^{5-1-2}=2^2=4$.
  category: 포함·제외 조합
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 2^(n-k-m)-공식
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-집합-#0474
  page: 71
  category_type: 유형익히기
  problem_summary: |
    $A=\{1,2,3,\ldots,n\}$의 부분집합 중 1·2 포함·3 미포함이 8개일 때 $n$
  solution_summary: |
    $2^{n-3}=8$이므로 $n-3=3$, $n=6$.
  category: 특정 원소·역산
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 2^(n-k-m)-역산
  insight_type: 조건통합형
  depth: 2

- source: RPM-CM2-ST-집합-#0475
  page: 71
  category_type: 유형익히기
  problem_summary: |
    $A=\{x|x$는 20 이하 3의 양의 배수$\}$의 부분집합 중 짝수인 원소가 2개인 개수
  solution_summary: |
    $A=\{3,6,9,12,15,18\}$. 짝수 6,12,18 중 2개 선택, 각 경우 나머지 자유. $3\times 2^{6-3}$... 정확 세분: 세 경우 (6·12 포함, 6·18, 12·18) 각 $2^{6-3-1}=4$. 총 $3\times 4\times 2=24$ (풀이지 상세). 답 24.
  category: 특정 원소 개수 제한
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 경우분류·특정원소개수
  insight_type: 통찰형
  depth: 3

### 유형 13 A⊂X⊂B를 만족시키는 X의 개수

- source: RPM-CM2-ST-집합-#0476
  page: 72
  category_type: 유형익히기(대표문제)
  problem_summary: |
    $A=\{x|x^2-2x-3=0\}$·$B=\{x||x|<4$ 정수$\}$일 때 $A\subset X\subset B$인 $X$ 개수
  solution_summary: |
    $A=\{-1,3\}$·$B=\{-3,-2,-1,0,1,2,3\}$ (7개). $2^{7-2}=32$.
  category: A⊂X⊂B
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: A필수-B내-부분집합
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-집합-#0477
  page: 72
  category_type: 유형익히기
  problem_summary: |
    $A=\{x|x\le n$ 자연수$\}$에서 $\{2,3\}\subset X\subset A$인 $X$ 개수 128일 때 $n$
  solution_summary: |
    $2^{n-2}=128=2^7$이므로 $n=9$.
  category: A⊂X⊂B·역산
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 2^(n-k)-역산
  insight_type: 조건통합형
  depth: 2

- source: RPM-CM2-ST-집합-#0478
  page: 72
  category_type: 유형익히기(서술형)
  problem_summary: |
    $A=\{x|1\le x\le 10, x\in\mathbb{N}\}$·$B=\{x|x$는 10 미만 짝수 자연수$\}$일 때 $B\subset X\subset A$·$X\ne A$·$X\ne B$인 $X$ 개수
  solution_summary: |
    $|A|=10,\;|B|=4$. $2^{10-4}-2=64-2=62$.
  category: A⊂X⊂B·양끝 제외
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 2^(n-k)-양끝제외
  insight_type: 조건통합형
  depth: 3

### 유형 14 특별한 조건이 있는 부분집합의 개수

- source: RPM-CM2-ST-집합-#0479
  page: 72
  category_type: 유형익히기(대표문제)
  problem_summary: |
    $A=\{x|x=3n+1, 0<n\le 6$ 정수$\}$의 부분집합 중 적어도 한 개의 소수를 원소로 갖는 개수
  solution_summary: |
    $A=\{4,7,10,13,16,19\}$ (6개). 소수 7,13,19. 전체 - 소수 3개 모두 제외 = $2^6 - 2^{6-3}=64-8=56$.
  category: 적어도 하나 조건
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 여집합-적어도하나
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-집합-#0480
  page: 72
  category_type: 유형익히기
  problem_summary: |
    $A=\{a,b,c,d,e,f\}$의 부분집합 중 $a$ 또는 $c$를 원소로 갖는 개수
  solution_summary: |
    전체 $2^6=64$ - $a,c$ 모두 제외 $2^4=16$. $=48$.
  category: 또는 조건
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 여집합-또는
  insight_type: 조건통합형
  depth: 2

- source: RPM-CM2-ST-집합-#0481
  page: 72
  category_type: 유형익히기
  problem_summary: |
    $A=\{1,3,5,7,9\}$·$B=\{x|x$는 9의 양의 약수$\}$일 때 $A$의 부분집합 중 $B$의 원소를 적어도 하나 포함하는 개수
  solution_summary: |
    $B=\{1,3,9\}$. $2^5 - 2^{5-3}=32-4=28$.
  category: 적어도 하나 조건
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 여집합-적어도하나
  insight_type: 조건통합형
  depth: 2

- source: RPM-CM2-ST-집합-#0482
  page: 72
  category_type: 유형익히기
  problem_summary: |
    $A=\{x|x$는 15 이하 3의 양의 배수$\}$의 진부분집합 중 홀수 1개 이상 포함 개수
  solution_summary: |
    $A=\{3,6,9,12,15\}$. 홀수 3,9,15. 진부분집합 $2^5-1=31$. 홀수 미포함 진부분집합 $2^2-1$... 정확: $(2^5-1)-2^{5-3}=31-4=27$.
  category: 적어도 하나·진부분집합
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 여집합-적어도하나
  insight_type: 조건통합형
  depth: 3

---

## Section C. 05 시험에 꼭 나오는 문제 (0483~0497)

- source: RPM-CM2-ST-집합-#0483
  page: 73
  category_type: 시험에꼭나오는
  problem_summary: |
    보기에서 집합인 것 (12의 양의 약수·교복이 예쁜 학교·0에 가까운 수·10보다 큰 자연수)
  solution_summary: |
    ㄱ·ㄹ 명확. 답 ㄱ·ㄹ.
  category: 집합의 뜻
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 집합-판정
  insight_type: 절차형
  depth: 1

- source: RPM-CM2-ST-집합-#0484
  page: 73
  category_type: 시험에꼭나오는
  problem_summary: |
    $A=\{1,2\}$·$B=\{0,1,2,4\}$·$C=\{z|z=x+y, x\in A, y\in B\}$의 모든 원소 합
  solution_summary: |
    $C=\{1,2,3,4,5,6\}$. 합 21.
  category: 합집합 원소·표
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 표-원소나열-합
  insight_type: 절차형
  depth: 2

- source: RPM-CM2-ST-집합-#0485
  page: 73
  category_type: 시험에꼭나오는
  problem_summary: |
    다음 중 공집합인 것 (5개)
  solution_summary: |
    ④ $\{x|x^2-1<0, x\in\mathbb{N}\}$: $-1<x<1$ 자연수 없음. 공집합.
  category: 공집합 판정
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 공집합-판정
  insight_type: 절차형
  depth: 2

- source: RPM-CM2-ST-집합-#0486
  page: 73
  category_type: 시험에꼭나오는
  problem_summary: |
    다음 중 옳지 않은 것 (5개 $n(\cdot)$ 판정)
  solution_summary: |
    ④ $A\subset B$이면 $n(A)<n(B)$: 등호 가능성 무시. 답 ④.
  category: n(A) 성질
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: n-부등호-엄격
  insight_type: 조건통합형
  depth: 2

- source: RPM-CM2-ST-집합-#0487
  page: 73
  category_type: 시험에꼭나오는(중요★)
  problem_summary: |
    $A=\{x|x^2-4x+6=0, x\in\mathbb{R}\}$·$B=\{x|x^2+ax+2a=0, x\in\mathbb{R}\}$이 $n(A)=n(B)$인 정수 $a$ 개수
  solution_summary: |
    $A$: $D/4=-2<0$이므로 $A=\varnothing$, $n(A)=0$. $B=\varnothing$이려면 $x^2+ax+2a=0$의 $D=a^2-8a<0$, $0<a<8$. 정수 1,2,3,4,5,6,7의 7개.
  category: 판별식·공집합 조건
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 이차방정식-판별식-공집합
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-집합-#0488
  page: 73
  category_type: 시험에꼭나오는
  problem_summary: |
    $A=\{\varnothing,1,\{\varnothing\}\}$에 대해 옳지 않은 것
  solution_summary: |
    ④ $\{\varnothing,\{1\}\}\subset A$: $\{1\}$은 $A$의 원소 아니므로 거짓.
  category: 중첩 집합·기호
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 중첩집합-원소검사
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-집합-#0489
  page: 73
  category_type: 시험에꼭나오는
  problem_summary: |
    $X=\{2,3,5,7\}$·$Y=\{x|(x-2)(x-5)=0\}$·$Z=\{x|x$는 7보다 작은 소수$\}$ 포함 관계
  solution_summary: |
    $Y=\{2,5\}$·$Z=\{2,3,5\}$. $Y\subset Z\subset X$. 답 ④.
  category: 포함 관계 판정
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 원소나열-포함
  insight_type: 절차형
  depth: 2

- source: RPM-CM2-ST-집합-#0490
  page: 73
  category_type: 시험에꼭나오는(교육청 기출)
  problem_summary: |
    $A=\{x|(x-5)(x-a)=0\}$·$B=\{-3,5\}$일 때 $A\subset B$인 양수 $a$
  solution_summary: |
    (i) $a=5$: $A=\{5\}\subset B$ OK. (ii) $a\ne 5$: $A=\{5,a\}$, $a$는 $-3$이어야 하지만 양수 조건 위배. $a=5$.
  category: 방정식·포함·양수 조건
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 경우분류·부호조건
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-집합-#0491
  page: 74
  category_type: 시험에꼭나오는(중요★)
  problem_summary: |
    $A=\{x|-2\le x\le -3k\}$·$B=\{x|2k\le x\le 12\}$일 때 $A\subset B$인 실수 $k$ 최댓값 $M$·최솟값 $m$의 $Mm$ ($A\ne\varnothing$)
  solution_summary: |
    수직선: $2k\le -2, -3k\le 12$이고 $A$ 존재 조건. $-4\le k\le -1$. $M=-1$·$m=-4$. $Mm=4$.
  category: 이중 부등식·포함
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 수직선-포함·존재조건
  insight_type: 통찰형
  depth: 3

- source: RPM-CM2-ST-집합-#0492
  page: 74
  category_type: 시험에꼭나오는
  problem_summary: |
    $A=\{1,2,3,4,5,6,7\}$의 공집합 아닌 부분집합 $X$에 대해 $S(X)$(원소합) 최댓값 ($1\notin X$·$3\notin X$·$S(X)$ 홀수)
  solution_summary: |
    가능 원소 2,4,5,6,7. 홀수는 5·7만. 홀수 개수 홀수이려면 5 또는 7 하나만 홀수 (총 1개 or 3개), 짝수 자유. 최대: 2·4·6·7. 합 19.
  category: 조건부 부분집합·최댓값
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 원소합-홀수판정
  insight_type: 통찰형
  depth: 3

- source: RPM-CM2-ST-집합-#0493
  page: 74
  category_type: 시험에꼭나오는
  problem_summary: |
    $A=\{1,a+5,a^2\}$·$B=\{3,4,a^2-3\}$에서 $A\subset B$·$B\subset A$일 때 상수 $a$
  solution_summary: |
    $A=B$이므로 $1\in B$이어야 하는데... 상세: $a^2-3=1\Rightarrow a=\pm 2$. $a=-2$일 때 $A=\{1,3,4\}=B$. $a=2$이면 $A=\{1,7,4\}\ne B$. $a=-2$.
  category: 같은 집합·경우 분류
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 원소일치-경우분류
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-집합-#0494
  page: 74
  category_type: 시험에꼭나오는
  problem_summary: |
    $A=\{a_1,a_2,a_3,\ldots,a_n\}$의 진부분집합 중 $a_1,a_2$ 반드시 포함 개수 63일 때 $n$
  solution_summary: |
    $2^{n-2}-1=63$이므로 $2^{n-2}=64=2^6$, $n=8$.
  category: 특정 원소·진부분집합
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 2^(n-k)-1-역산
  insight_type: 조건통합형
  depth: 2

- source: RPM-CM2-ST-집합-#0495
  page: 74
  category_type: 시험에꼭나오는
  problem_summary: |
    $A=\{4,5,6,7,8,9\}$의 부분집합 $X$가 $n(X)\ge 2$·모든 원소 곱이 8의 배수인 개수
  solution_summary: |
    8은 이미 8배수. (i) $8\in X$: 8 포함 부분집합 $2^5=32$. $n(X)\ge 2$이므로 $\{8\}$ 제외 31. (ii) $8\notin X$: 원소 곱 8배수이려면 4·6 반드시 포함 (4×6=24, 8배수 아님. 4는 4만, 6은 2·3만 기여. 4×6=24=$2^3\times 3$이므로 8배수). 답지 상세: 8. 답 39.
  category: 조건·부분집합·배수
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 소인수-배수조건-부분집합
  insight_type: 통찰형
  depth: 3

- source: RPM-CM2-ST-집합-#0496
  page: 74
  category_type: 시험에꼭나오는(중요★)
  problem_summary: |
    $A=\{x|x^2-7x+12=0\}$·$B=\{x|x=12/n, n\in\mathbb{N}\}$에서 $A\subset X\subset B$인 $X$ 개수
  solution_summary: |
    $A=\{3,4\}$·$B=\{1,2,3,4,6,12\}$. $2^{6-2}=16$.
  category: A⊂X⊂B
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: A필수-B내
  insight_type: 조건통합형
  depth: 2

- source: RPM-CM2-ST-집합-#0497
  page: 74
  category_type: 시험에꼭나오는
  problem_summary: |
    $A=\{2,3,4,5,6,7,8,9\}$의 부분집합 중 적어도 하나의 2의 배수 포함·3의 배수 미포함 개수
  solution_summary: |
    3배수 3,6,9. 2배수 2,4,8 (6은 3배수 제외). 3배수 미포함이면 5원소 $\{2,4,5,7,8\}$의 부분집합 $2^5=32$. 2배수 미포함 $2^{5-3}=4$. $32-4=28$.
  category: 조건·부분집합·배수
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 여집합·복합조건
  insight_type: 통찰형
  depth: 3

---

## Section D. 05 서술형·실력up star 4~5 (0498~0504)

- source: RPM-CM2-ST-집합-#0498
  page: 75
  category_type: 서술형
  problem_summary: |
    자연수 부분집합 $A$가 "$x\in A$이면 $64/x\in A$"를 만족. $n(A)$의 최댓값 $M$·최솟값 $m$의 $M-m$ ($A\ne\varnothing$)
  solution_summary: |
    64의 양의 약수 후보 $\{1,2,4,8,16,32,64\}$. 페어링: (1,64)·(2,32)·(4,16)·8. 최대 7 (전부), 최소 1 ($\{8\}$). $M-m=6$.
  category: 자기지시·페어링
  tier: star_4
  unit_code: CM2-ST
  mechanism_primary: 자기지시-닫힘·페어링
  insight_type: 통찰형
  depth: 3

- source: RPM-CM2-ST-집합-#0499
  page: 75
  category_type: 서술형
  problem_summary: |
    $A=\{x|x^2-6x+8\le 0\}$·$B=\{x|x<k\}$에서 $A\subset B$인 정수 $k$ 최솟값
  solution_summary: |
    $A=\{x|2\le x\le 4\}$. $A\subset B$이려면 $k>4$. 정수 최솟값 5.
  category: 부등식 해집합·포함
  tier: star_4
  unit_code: CM2-ST
  mechanism_primary: 이차부등식-포함
  insight_type: 조건통합형
  depth: 2

- source: RPM-CM2-ST-집합-#0500
  page: 75
  category_type: 서술형
  problem_summary: |
    $A=\{-1,0,1,2\}$·$B=\{a^2+b^2|a,b\in A\}$의 부분집합 개수
  solution_summary: |
    표. $B=\{0,1,2,4,5,8\}$ (6개). $2^6=64$.
  category: 곱집합·부분집합
  tier: star_4
  unit_code: CM2-ST
  mechanism_primary: 표-원소나열·부분집합
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-집합-#0501
  page: 75
  category_type: 서술형
  problem_summary: |
    $A=\{a,b,c,d,e,f,g\}$에서 $\{a,b,c\}\subset X$·$\{a,b,c,g\}\not\subset X$인 $X\subset A$ 개수
  solution_summary: |
    $a,b,c$ 필수·$g\notin X$. $d,e,f$ 자유. $2^{7-3-1}=2^3=8$.
  category: 특정 원소 조합
  tier: star_4
  unit_code: CM2-ST
  mechanism_primary: 특정원소-복합조건
  insight_type: 통찰형
  depth: 3

- source: RPM-CM2-ST-집합-#0502
  page: 75
  category_type: 실력up
  problem_summary: |
    $A(n)=\{x|x$는 $n^k$의 일의 자리 수$\}$일 때 보기 판정 ($n(A(4))=2$·$A(8)\subset A(4)$·$A(3^m)=A(3)$인 $m\ge 2$ 존재)
  solution_summary: |
    $A(4)=\{4,6\}$·$A(8)=\{2,4,6,8\}$·$A(3)=\{1,3,7,9\}$. ㄱ 참·ㄴ 거짓·ㄷ 참 ($m=5$일 때 $A(3^5)=A(243)$, 243 일의자리 3, $A(243)=A(3)$).
  category: 일의 자리·주기성
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 거듭제곱-일의자리-주기
  insight_type: 통찰형
  depth: 3

- source: RPM-CM2-ST-집합-#0503
  page: 75
  category_type: 실력up
  problem_summary: |
    $\{1,2,3,4,5,6\}$의 원소 2개 이상 부분집합 $A_1,\ldots,A_{57}$의 원소 최댓값·최솟값 차 $a_n$일 때 $\sum a_n$
  solution_summary: |
    차 $=k$인 부분집합 수 계산. $\sum = 1\times 5 + 2\times 8 + 3\times 12 + 4\times 16 + 5\times 16 = 201$.
  category: 최대-최소 차·조합
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 차-분류·조합
  insight_type: 통찰형
  depth: 3

- source: RPM-CM2-ST-집합-#0504
  page: 75
  category_type: 실력up
  problem_summary: |
    $f(X)=$원소곱. $\{1,2,4,8\}$의 공집합 아닌 15개 $A_i$에서 $\prod f(A_i)=2^m$, $\{1,3,9,27,81\}$의 31개 $B_j$에서 $\prod f(B_j)=3^n$일 때 $n/m$
  solution_summary: |
    각 원소가 나타나는 부분집합 수. 1·2·4·8 각각 $2^3=8$번. $m=0\cdot 8+1\cdot 8+2\cdot 8+3\cdot 8=48$. 3계열 각 $2^4=16$번. $n=0\cdot 16+1\cdot 16+2\cdot 16+3\cdot 16+4\cdot 16=160$. $n/m=10/3$.
  category: 부분집합 곱·지수 합
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 원소-등장횟수·지수합
  insight_type: 통찰형
  depth: 3

---

## Section E. 06 집합의 연산 — 교과서문제 대표 (0505~0536)

- source: RPM-CM2-ST-연산-#0505
  page: 77
  category_type: 교과서문제
  problem_summary: |
    $A=\{1,5,9,13\}$·$B=\{3,5,9\}$의 합집합
  solution_summary: |
    $A\cup B=\{1,3,5,9,13\}$.
  category: 합집합 계산
  tier: star_2
  unit_code: CM2-ST
  standard: 10수06-02
  mechanism_primary: 합집합-원소나열
  insight_type: 절차형
  depth: 1

- source: RPM-CM2-ST-연산-#0533
  page: 79
  category_type: 교과서문제
  problem_summary: |
    $n(A)=7$·$n(B)=5$·$n(A\cup B)=10$일 때 $n(A\cap B)$
  solution_summary: |
    $n(A\cap B)=7+5-10=2$.
  category: 포함-배제
  tier: star_2
  unit_code: CM2-ST
  standard: 10수06-02
  mechanism_primary: 포함배제
  insight_type: 절차형
  depth: 1

- source: RPM-CM2-ST-연산-#0536
  page: 79
  category_type: 교과서문제
  problem_summary: |
    세 집합 $A,B,C$의 $n(A\cup B\cup C)$ 계산 (모든 교집합 개수 주어짐)
  solution_summary: |
    $50+35+26-9-7-8+4=91$.
  category: 3집합·포함배제
  tier: star_2
  unit_code: CM2-ST
  mechanism_primary: 3집합-포함배제
  insight_type: 절차형
  depth: 2

---

## Section F. 06 유형익히기 (0537~0601)

### 유형 01 합집합·교집합

- source: RPM-CM2-ST-연산-#0537
  page: 80
  category_type: 유형익히기(대표문제)
  problem_summary: |
    $A=\{$8 이하 자연수$\}$·$B=\{x|2\le x\le 6$ 정수$\}$·$C=\{x|x<10$의 3의 양의 배수$\}$일 때 $A\cap(B\cup C)$
  solution_summary: |
    $B\cup C=\{2,3,4,5,6,9\}$. $A$와 교집합 $\{2,3,4,5,6\}$.
  category: 합·교 혼합
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 합교-혼합계산
  insight_type: 절차형
  depth: 2

- source: RPM-CM2-ST-연산-#0538
  page: 80
  category_type: 유형익히기
  problem_summary: |
    $A=\{3,4,6,8\}$·$B=\{4,5,9\}$·$C=\{$8의 양의 약수$\}$에 대해 옳지 않은 것
  solution_summary: |
    $C=\{1,2,4,8\}$. ④ $(A\cup B)\cap C=\{4,8\}$이 옳은 값으로 판정 (문제 옵션과 비교).
  category: 합·교 판정
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 합교-계산·판정
  insight_type: 절차형
  depth: 2

- source: RPM-CM2-ST-연산-#0539
  page: 80
  category_type: 유형익히기
  problem_summary: |
    $A=\{$24 양의 약수$\}$·$B=\{$30 양의 약수$\}$에서 $A\cap B=\{x|x$는 $p$의 양의 약수$\}$일 때 자연수 $p$
  solution_summary: |
    최대공약수 $\gcd(24,30)=6$. $p=6$.
  category: 약수·교집합·GCD
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 약수집합-GCD
  insight_type: 조건통합형
  depth: 2

### 유형 02 서로소인 두 집합

- source: RPM-CM2-ST-연산-#0540
  page: 80
  category_type: 유형익히기(대표문제)
  problem_summary: |
    서로소인 것 모두 고르기 (5개 쌍)
  solution_summary: |
    ② $\{1,3,5\}$·$\varnothing$ 서로소. ⑤ $|x|>1$ 정수 vs $\{-1,0,1\}$ 공통 없음. 답 ②·⑤.
  category: 서로소 판정
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 서로소-교집합공집합
  insight_type: 절차형
  depth: 2

- source: RPM-CM2-ST-연산-#0541
  page: 80
  category_type: 유형익히기
  problem_summary: |
    $\{1,3,5,7\}$과 서로소인 것 (짝수·홀수·이차식 해집합·9의 약수·$x^2<0$)
  solution_summary: |
    ㄱ 짝수·ㄷ $\{2,4\}$·ㅁ $\varnothing$ 서로소.
  category: 서로소 판정
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 서로소-공통원소부재
  insight_type: 절차형
  depth: 2

- source: RPM-CM2-ST-연산-#0542
  page: 80
  category_type: 유형익히기(서술형)
  problem_summary: |
    $A=\{$10 이하 자연수$\}$의 부분집합 중 $B=\{x|x=3n-2, n\in\mathbb{N}\}$와 서로소인 $X$ 개수
  solution_summary: |
    $B\cap A=\{1,4,7,10\}$. $X$는 이들을 제외한 6원소의 부분집합. $2^{10-4}=64$.
  category: 서로소·부분집합 개수
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 서로소-제외원소부분집합
  insight_type: 조건통합형
  depth: 3

### 유형 03 여집합·차집합

- source: RPM-CM2-ST-연산-#0543
  page: 81
  category_type: 유형익히기(대표문제)
  problem_summary: |
    $U=\{$10 미만 자연수$\}$·$A=\{$8의 약수$\}$·$B=\{$2의 배수$\}$일 때 $A^c-B$의 원소 합
  solution_summary: |
    $A=\{1,2,4,8\}$·$A^c=\{3,5,6,7,9\}$·$B=\{2,4,6,8\}$. $A^c-B=\{3,5,7,9\}$. 합 24.
  category: 여집합·차집합
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 여집합-차집합-계산
  insight_type: 절차형
  depth: 2

- source: RPM-CM2-ST-연산-#0544
  page: 81
  category_type: 유형익히기
  problem_summary: |
    $U=\{$10 이하 자연수$\}$·$A=\{2n+1, n\in\mathbb{N}\}$·$B=\{3n-1, n\in\mathbb{N}\}$일 때 $(A\cup B)-(A\cap B)$
  solution_summary: |
    $A=\{3,5,7,9\}$·$B=\{2,5,8\}$. $A\cup B=\{2,3,5,7,8,9\}$·$A\cap B=\{5\}$. 답 $\{2,3,7,8,9\}$.
  category: 대칭차집합
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 대칭차-계산
  insight_type: 절차형
  depth: 2

- source: RPM-CM2-ST-연산-#0545
  page: 81
  category_type: 유형익히기
  problem_summary: |
    $A=\{x|-1<x<4\}$·$B=\{x|x<0$ 또는 $x\ge 5\}$일 때 $A\cup B^c$
  solution_summary: |
    $B^c=\{x|0\le x<5\}$. $A\cup B^c=\{x|-1<x<5\}$.
  category: 구간·여집합·합집합
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 구간-여집합-합
  insight_type: 절차형
  depth: 2

### 유형 04 벤다이어그램을 이용한 집합의 연산

- source: RPM-CM2-ST-연산-#0546
  page: 81
  category_type: 유형익히기(대표문제)
  problem_summary: |
    $U=\{$한 자리 자연수$\}$의 두 부분집합 $A,B$에 대해 $A-B=\{2,5,7\}$·$B\cap A^c=\{4,8\}$·$(A\cup B)^c=\{1,9\}$일 때 $B$
  solution_summary: |
    벤 다이어그램 4영역. 나머지 $A\cap B=\{3,6\}$. $B=\{3,4,6,8\}$.
  category: 벤다이어그램·역산
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 벤다이어그램-4영역-역산
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-연산-#0547
  page: 81
  category_type: 유형익히기
  problem_summary: |
    $U=\{$7 이하 자연수$\}$·$A=\{1,3,6,7\}$·$A\cap B=\{3,7\}$·$A\cup B=U$일 때 $B$
  solution_summary: |
    $A^c=\{2,4,5\}\subset B$·$A\cap B=\{3,7\}$. $B=\{2,3,4,5,7\}$. 답 ⑤.
  category: 조건·집합 역산
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 조건역산-벤다이어그램
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-연산-#0548
  page: 81
  category_type: 유형익히기
  problem_summary: |
    $A=\{$12의 양의 약수$\}$·$(A-B)\cup(B-A)=\{2,3,4,5\}$일 때 $B$의 모든 원소 합
  solution_summary: |
    $A=\{1,2,3,4,6,12\}$. 대칭차 $\{2,3,4,5\}$이므로 $B=\{1,5,6,12\}$. 합 24.
  category: 대칭차·역산
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 대칭차-역산
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-연산-#0549
  page: 81
  category_type: 유형익히기
  problem_summary: |
    $U=\{$8 이하 자연수$\}$·$A-B=\{2,3,7\}$·$A\cap B=\{5\}$·$(A\cup B)^c=\{6,8\}$일 때 $B$의 부분집합 개수
  solution_summary: |
    $B=\{1,4,5\}$. $2^3=8$.
  category: 벤다이어그램·부분집합
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 벤다이어그램-부분집합
  insight_type: 조건통합형
  depth: 3

### 유형 05 벤다이어그램의 색칠한 부분

- source: RPM-CM2-ST-연산-#0550
  page: 82
  category_type: 유형익히기(대표문제)
  problem_summary: |
    3집합 벤다이어그램 색칠 부분을 나타내는 것
  solution_summary: |
    답 ③ $A-(C-B)$.
  category: 벤다이어그램-식 대응
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 벤다이어그램-식대응
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-연산-#0551
  page: 82
  category_type: 유형익히기
  problem_summary: |
    2집합 벤다이어그램 색칠 부분 판정
  solution_summary: |
    답 ⑤ $A\cup B^c$.
  category: 벤다이어그램-식 대응
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 벤다이어그램-식대응
  insight_type: 절차형
  depth: 2

- source: RPM-CM2-ST-연산-#0552
  page: 82
  category_type: 유형익히기
  problem_summary: |
    3집합 벤다이어그램 색칠 (A만)
  solution_summary: |
    답 ④ $(A-B)\cap(A-C)$.
  category: 벤다이어그램-식 대응
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 벤다이어그램-식대응
  insight_type: 조건통합형
  depth: 3

### 유형 06 집합의 연산·미지수

- source: RPM-CM2-ST-연산-#0553
  page: 82
  category_type: 유형익히기(대표문제)
  problem_summary: |
    $A=\{1,2,a^2+1\}$·$B=\{5,a-2,2a-3\}$·$A\cap B=\{1,5\}$일 때 상수 $a$
  solution_summary: |
    $5\in A$이므로 $a^2+1=5$, $a=\pm 2$. $a=2$일 때 $B=\{5,0,1\}$이지만 $A\cap B=\{1,5\}$ OK. $a=2$.
  category: 교집합·경우 분류
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 원소일치-경우분류
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-연산-#0554
  page: 82
  category_type: 유형익히기
  problem_summary: |
    $A=\{2a-b,1,3,5\}$·$B=\{5,a+3b,9\}$·$A-B=\{3\}$일 때 $a+b$
  solution_summary: |
    $A-B=\{3\}$이면 $2a-b=9$·$a+3b=1$. 연립 $a=4,b=-1$. $a+b=3$.
  category: 차집합·연립
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 차집합-원소일치·연립
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-연산-#0555
  page: 82
  category_type: 유형익히기
  problem_summary: |
    $A=\{1,4,2a,a^2\}$·$B=\{4,a+2,4a-5\}$·$B-A=\{5,7\}$일 때 $A$의 모든 원소 곱
  solution_summary: |
    $a=3$일 때 $A=\{1,4,6,9\}$·$B=\{4,5,7\}$·$B-A=\{5,7\}$ 성립. 곱 $216$.
  category: 차집합·경우 분류
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 차집합-경우분류
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-연산-#0556
  page: 82
  category_type: 유형익히기
  problem_summary: |
    $A=\{1,a+2,2a\}$·$B=\{2,5,-a+4\}$·$A\cup B=\{1,2,5,6\}$일 때 $A\cap B$의 모든 원소 합
  solution_summary: |
    $a=3$일 때 $A=\{1,5,6\}$·$B=\{1,2,5\}$·$A\cap B=\{1,5\}$. 합 6.
  category: 합집합·경우 분류
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 합집합-원소일치
  insight_type: 조건통합형
  depth: 3

### 유형 07 집합의 연산의 성질

- source: RPM-CM2-ST-연산-#0557
  page: 83
  category_type: 유형익히기(대표문제)
  problem_summary: |
    공집합 아닌 $A,B$에서 옳지 않은 것 (5개 성질)
  solution_summary: |
    ③ $A\cup(A\cap A^c)=A\ne\varnothing$이므로 거짓.
  category: 연산 성질 판정
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 연산성질-판정
  insight_type: 절차형
  depth: 2

- source: RPM-CM2-ST-연산-#0558
  page: 83
  category_type: 유형익히기
  problem_summary: |
    공집합 아닌 $A,B$에 대해 항상 옳은 것
  solution_summary: |
    ④ $A-B^c=A\cap B$ 참.
  category: 연산 성질
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 차-여집합-변환
  insight_type: 절차형
  depth: 2

- source: RPM-CM2-ST-연산-#0559
  page: 83
  category_type: 유형익히기
  problem_summary: |
    나머지 4개와 다른 것 ($A-B$·$A\cap B^c$·$B-A^c$·$A-(A\cap B)$·$A\cap(U-B)$)
  solution_summary: |
    ③ $B-A^c=B\cap A=A\cap B$이므로 다르다.
  category: 차·여집합·변환
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 차-여집합-등가변환
  insight_type: 조건통합형
  depth: 3

### 유형 08 집합의 연산 성질·포함관계

- source: RPM-CM2-ST-연산-#0560
  page: 83
  category_type: 유형익히기(대표문제)
  problem_summary: |
    $A\cup B=A$일 때 옳지 않은 것
  solution_summary: |
    $B\subset A$. 답지 ④ ($A-B\ne\varnothing$ 확언 불가).
  category: 포함 관계·연산 표현
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 포함-등가표현
  insight_type: 조건통합형
  depth: 2

- source: RPM-CM2-ST-연산-#0561
  page: 83
  category_type: 유형익히기
  problem_summary: |
    서로 다른 $A,B$에서 $B^c\subset A^c$일 때 옳은 것
  solution_summary: |
    $A\subset B$. ㄱ·ㄹ 참.
  category: 여집합·포함 관계
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 여집합-포함-등가
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-연산-#0562
  page: 83
  category_type: 유형익히기
  problem_summary: |
    $U=\mathbb{N}$·$A=\{$12의 배수$\}$·$B=\{k$의 배수$\}$·$A\cap B^c=\varnothing$일 때 $k$가 될 수 없는 것
  solution_summary: |
    $A\subset B$이려면 $k|12$. $k=8$은 12 약수 아님. 답 ⑤.
  category: 배수집합·포함
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 배수집합-포함-약수
  insight_type: 조건통합형
  depth: 2

### 유형 09 집합의 연산·부분집합의 개수

- source: RPM-CM2-ST-연산-#0563
  page: 84
  category_type: 유형익히기(대표문제)
  problem_summary: |
    $A=\{1,2,3,4,5\}$·$B=\{4,5,6,7,8\}$일 때 $(A-B)\cup X=X$·$(A\cup B)\cap X=X$인 $X$ 개수
  solution_summary: |
    $A-B=\{1,2,3\}\subset X\subset A\cup B=\{1,\ldots,8\}$. $2^{8-3}=32$.
  category: A⊂X⊂B
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: A필수-B내
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-연산-#0564
  page: 84
  category_type: 유형익히기(서술형)
  problem_summary: |
    $A=\{$12의 양의 약수$\}$·$B=\{$8의 양의 약수$\}$·$A\cap X=X$·$(A\cap B)\cup X=X$인 $X$ 개수
  solution_summary: |
    $X\subset A$·$A\cap B\subset X$. $A\cap B=\{1,2,4\}$. $A=\{1,2,3,4,6,12\}$. $2^{6-3}=8$.
  category: A⊂X⊂B
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: A필수-B내
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-연산-#0565
  page: 84
  category_type: 유형익히기
  problem_summary: |
    $U=\{1,\ldots,6\}$·$X=\{3,4,5,6\}$·$X-Y=X$인 $Y$ 개수
  solution_summary: |
    $X\cap Y=\varnothing$이므로 $Y\subset\{1,2\}$. $2^2=4$.
  category: 서로소·부분집합
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 서로소-부분집합
  insight_type: 조건통합형
  depth: 2

- source: RPM-CM2-ST-연산-#0566
  page: 84
  category_type: 유형익히기
  problem_summary: |
    $U=\{$10 이하 자연수$\}$·$A=\{3,6,9\}$·$B=\{2,4,6,9\}$·$A\cup C=B\cup C$인 $C$ 개수
  solution_summary: |
    대칭차 $A\triangle B=\{2,3,4\}\subset C$. 나머지 7원소 자유. $2^{10-3}=128$.
  category: 대칭차·필수 원소
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 대칭차-필수원소
  insight_type: 통찰형
  depth: 3

- source: RPM-CM2-ST-연산-#0567
  page: 84
  category_type: 유형익히기
  problem_summary: |
    $U=\{1,\ldots,8\}$에서 두 조건 만족 $X$ 개수 $a$·$Y$ 개수 $b$일 때 $a+b$
  solution_summary: |
    $X$: 2,6 필수·4,7,8 미포함. $a=2^{8-2-3}=8$. $Y$: 2,4,6 필수·3,5 미포함. $b=2^{8-3-2}=8$... 답지 $b=4$. $a+b=12$.
  category: 특정 원소·복합조건
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 특정원소-필수제외
  insight_type: 통찰형
  depth: 3

### 유형 10 연산 법칙·식 간단히

- source: RPM-CM2-ST-연산-#0568
  page: 84
  category_type: 유형익히기(대표문제)
  problem_summary: |
    $(A-B)-C$와 항상 같은 집합
  solution_summary: |
    $=A\cap(B\cup C)^c=A-(B\cup C)$. 답 ②.
  category: 연산 등가·간단히
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 드모르간-차집합
  insight_type: 절차형
  depth: 2

- source: RPM-CM2-ST-연산-#0569
  page: 84
  category_type: 유형익히기
  problem_summary: |
    $(A\cup B)^c\cup(A^c\cap B)$를 간단히
  solution_summary: |
    $(A^c\cap B^c)\cup(A^c\cap B)=A^c\cap(B^c\cup B)=A^c$.
  category: 연산 간단
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 드모르간·분배
  insight_type: 절차형
  depth: 2

- source: RPM-CM2-ST-연산-#0570
  page: 85
  category_type: 유형익히기
  problem_summary: |
    $(A-B)\cup(A-C)$와 항상 같은 것
  solution_summary: |
    $=A\cap(B^c\cup C^c)=A-(B\cap C)$. 답 ⑤.
  category: 연산 등가
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 분배·드모르간
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-연산-#0571
  page: 85
  category_type: 유형익히기
  problem_summary: |
    $A\cap B^c=\varnothing$일 때 $A\cap\{(A\cap B)\cup(B-A)\}$
  solution_summary: |
    $A\subset B$. $(A\cap B)\cup(B\cap A^c)=B$. $A\cap B=A$. 답 ② $A$.
  category: 포함·간단
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 포함-단순화
  insight_type: 조건통합형
  depth: 2

- source: RPM-CM2-ST-연산-#0572
  page: 85
  category_type: 유형익히기
  problem_summary: |
    3집합에서 옳은 것 (4개 항등식 판정)
  solution_summary: |
    ㄱ·ㄷ·ㄹ 참. 답 ④.
  category: 항등식 판정
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 항등식-판정
  insight_type: 조건통합형
  depth: 3

### 유형 11 연산·포함 관계

- source: RPM-CM2-ST-연산-#0573
  page: 85
  category_type: 유형익히기(대표문제)
  problem_summary: |
    $\{(A\cap B)\cup(B\cup A^c)^c\}\cap B=A$일 때 옳은 것 (4개)
  solution_summary: |
    간단히 $A\cap B=A$이므로 $A\subset B$. ㄴ·ㄷ 참.
  category: 연산·포함
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 연산-포함-간단
  insight_type: 통찰형
  depth: 3

- source: RPM-CM2-ST-연산-#0574
  page: 85
  category_type: 유형익히기
  problem_summary: |
    $\{(A^c\cap B^c)\cup(B-A)\}\cup B^c=B^c$일 때 벤다이어그램
  solution_summary: |
    간단히 $A^c\cup B^c=B^c$, $B\subset A$. 답 ①.
  category: 연산·포함·벤
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 연산-포함-벤다이어그램
  insight_type: 조건통합형
  depth: 3

### 유형 12 원소 구하기

- source: RPM-CM2-ST-연산-#0575
  page: 86
  category_type: 유형익히기(대표문제)
  problem_summary: |
    $U=\{1,\ldots,6\}$·$A=\{2,3\}$·$(A\cup B)\cap(A^c\cup B^c)=\{2,4,6\}$일 때 $A^c\cap B^c$의 원소 합
  solution_summary: |
    좌항 = 대칭차 $A\triangle B=\{2,4,6\}$. $B=\{4,6\}$. $A^c\cap B^c=(A\cup B)^c=\{1,5\}$. 합 6.
  category: 대칭차·역산
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 대칭차-여집합-역산
  insight_type: 통찰형
  depth: 3

- source: RPM-CM2-ST-연산-#0576
  page: 86
  category_type: 유형익히기
  problem_summary: |
    $U=\{$7 이하 자연수$\}$·$A=\{2,3,4,5,6\}$·$(A\cup B)^c=\{7\}$·$(B-A)\cup B^c=\{1,2,4,7\}$일 때 $B$의 원소 개수
  solution_summary: |
    벤다이어그램 역산. $B=\{1,3,5,6\}$. 원소 4개.
  category: 벤다이어그램·역산
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 벤다이어그램-역산
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-연산-#0577
  page: 86
  category_type: 유형익히기
  problem_summary: |
    $U=\{1,\ldots,10\}$·$B=\{1,2,3,4,5,6\}$·$1\notin C$·주어진 복합식 $=\{3,4,5,6\}$일 때 $A\cap B\cap C$의 원소 될 수 있는 것
  solution_summary: |
    복합식 = $B-A$이므로 $A\cap B\subset\{1,2\}$. $1\notin C$이므로 $\subset\{2\}$. 답 ① 2.
  category: 복합 조건·연산
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 복합-연산-역산
  insight_type: 통찰형
  depth: 3

### 유형 13 배수·약수 집합의 연산

- source: RPM-CM2-ST-연산-#0578
  page: 86
  category_type: 유형익히기(대표문제)
  problem_summary: |
    $U=\{$100 이하 자연수$\}$·$A_k=\{$$k$의 배수$\}$일 때 $A_{20}\cup(A_2\cap A_5)$의 원소 개수
  solution_summary: |
    $A_2\cap A_5=A_{10}$. $A_{20}\cup A_{10}=A_{10}$. $\{10,20,\ldots,100\}$의 10개.
  category: 배수집합·연산
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 배수-교합-LCM
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-연산-#0579
  page: 86
  category_type: 유형익히기
  problem_summary: |
    $(A_{18}\cup A_{36})\cap(A_{36}\cup A_{24})$와 같은 집합
  solution_summary: |
    $A_{18}\cup A_{36}=A_{18}$. $A_{18}\cap A_{24}=A_{72}$. 답지 $A_{36}$.
  category: 배수·LCM
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 배수-LCM
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-연산-#0580
  page: 86
  category_type: 유형익히기
  problem_summary: |
    $A_k=\{$$k$의 약수$\}$일 때 $A_{12}\cap A_{18}\cap A_{30}$의 모든 원소 합
  solution_summary: |
    $\gcd(12,18,30)=6$. 6의 양의 약수 $\{1,2,3,6\}$. 합 12.
  category: 약수·GCD
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 약수-GCD
  insight_type: 절차형
  depth: 2

- source: RPM-CM2-ST-연산-#0581
  page: 86
  category_type: 유형익히기
  problem_summary: |
    $A_k=\{$$k$의 양의 배수$\}$·보기 3개 판정
  solution_summary: |
    ㄱ 참·ㄴ 거짓·ㄷ 참. 답 ㄱ·ㄷ.
  category: 배수·LCM·포함
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 배수-LCM-포함
  insight_type: 조건통합형
  depth: 3

### 유형 14 방정식·부등식 해집합 연산

- source: RPM-CM2-ST-연산-#0582
  page: 87
  category_type: 유형익히기(대표문제)
  problem_summary: |
    $A=\{x|x^2-4x+3\le 0\}$·$B=\{x|x^2+ax+b<0\}$·$A\cap B=\varnothing$·$A\cup B=\{x|1\le x<5\}$일 때 $a+b$
  solution_summary: |
    $A=[1,3]$·$B=(3,5)$. 두 근 3·5이므로 $x^2-8x+15<0$. $a=-8,b=15$. $a+b=7$.
  category: 이차부등식·해집합
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 이차부등식-해집합-역산
  insight_type: 통찰형
  depth: 3

- source: RPM-CM2-ST-연산-#0583
  page: 87
  category_type: 유형익히기(서술형)
  problem_summary: |
    $A=\{x|x^2-x-6=0\}$·$B=\{x|x^2-ax-10=0\}$·$A-B=\{3\}$일 때 $A\cup B$
  solution_summary: |
    $A=\{-2,3\}$. $-2\in B$: $4+2a-10=0$, $a=3$. $B=\{-2,5\}$. $A\cup B=\{-2,3,5\}$.
  category: 방정식·해집합·차집합
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 이차방정식-해-차집합
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-연산-#0584
  page: 87
  category_type: 유형익히기
  problem_summary: |
    $A=\{x||x-1|<a\}$·$B=\{x|x^2-2x-15<0\}$·$A\cap B=A$인 자연수 $a$ 개수
  solution_summary: |
    $A\subset B$. $B=(-3,5)$. $A=(1-a,1+a)$. $1-a\ge -3$·$1+a\le 5$. $a\le 4$. 자연수 4개.
  category: 절댓값·이차부등식·포함
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 부등식-포함-등호
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-연산-#0585
  page: 87
  category_type: 유형익히기
  problem_summary: |
    $A=\{x|x^2-4x+4\ge 0\}$·$B=\{x|x^2-3x>0\}$·$C=\{x|x^2+ax+b\le 0\}$·$B\cup C=A$·$B\cap C=\{x|-1\le x<0\}$일 때 $ab$
  solution_summary: |
    $A=\mathbb{R}$·$B=(-\infty,0)\cup(3,\infty)$. $C=[-1,3]$. $(x+1)(x-3)\le 0$, $x^2-2x-3\le 0$. $a=-2,b=-3$. $ab=6$.
  category: 부등식·복합조건
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 이차부등식-복합
  insight_type: 통찰형
  depth: 3

### 유형 15 유한집합의 원소 개수

- source: RPM-CM2-ST-연산-#0586
  page: 87
  category_type: 유형익히기(대표문제)
  problem_summary: |
    $n(U)=20$·$n(A\cap B)=4$·$n(A^c\cap B^c)=8$일 때 $n(A)+n(B)$
  solution_summary: |
    $n(A\cup B)=20-8=12$. $n(A)+n(B)=12+4=16$.
  category: 원소 개수·포함배제
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 포함배제·여집합
  insight_type: 절차형
  depth: 2

- source: RPM-CM2-ST-연산-#0587
  page: 87
  category_type: 유형익히기
  problem_summary: |
    $A\subset B^c$·$n(A)=6$·$n(A\cup B)=10$일 때 $n(B)$
  solution_summary: |
    서로소. $n(B)=4$.
  category: 서로소·원소 개수
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 서로소-합
  insight_type: 절차형
  depth: 2

- source: RPM-CM2-ST-연산-#0588
  page: 87
  category_type: 유형익히기
  problem_summary: |
    $n(U)=30$·$n(A)=18$·$n(B)=20$·$n(A-B)=5$일 때 벤다이어그램 색칠부 원소 개수
  solution_summary: |
    $n(A\cap B)=13$. $n(B-A)=7$. $n((A\cup B)^c)=5$. 답 5.
  category: 원소 개수·역산
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 벤다이어그램-4영역-역산
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-연산-#0589
  page: 87
  category_type: 유형익히기
  problem_summary: |
    $A\cap C=\varnothing$·$n(A)=11,n(B)=10,n(C)=7$·$n(A\cup B)=16$·$n(B\cup C)=12$일 때 $n(A\cup B\cup C)$
  solution_summary: |
    $n(A\cap B)=5$·$n(B\cap C)=5$·$n(A\cap C)=0$·$n(A\cap B\cap C)=0$. $=11+10+7-5-5-0+0=18$.
  category: 3집합·포함배제
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 3집합-포함배제
  insight_type: 조건통합형
  depth: 3

### 유형 16 원소 개수 활용 (문장제)

- source: RPM-CM2-ST-연산-#0590
  page: 88
  category_type: 유형익히기(대표문제)
  problem_summary: |
    닭 150·토끼 113·둘 중 하나 220일 때 둘 다 키우는 가구 수
  solution_summary: |
    $n(A\cap B)=150+113-220=43$.
  category: 포함배제·문장제
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 포함배제
  insight_type: 절차형
  depth: 2

- source: RPM-CM2-ST-연산-#0591
  page: 88
  category_type: 유형익히기
  problem_summary: |
    한라산 23·둘 다 15·한라 또는 설악 33일 때 설악 등반 회원 수
  solution_summary: |
    $33=23+n(B)-15$. $n(B)=25$. 답 ④.
  category: 포함배제·역산
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 포함배제-역산
  insight_type: 절차형
  depth: 2

- source: RPM-CM2-ST-연산-#0592
  page: 88
  category_type: 유형익히기
  problem_summary: |
    50명 중 농구 27·축구 34·둘 다 19일 때 둘 다 안 좋아하는 학생 수
  solution_summary: |
    $n(A\cup B)=42$. $50-42=8$.
  category: 여집합·문장제
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 포함배제-여집합
  insight_type: 절차형
  depth: 2

- source: RPM-CM2-ST-연산-#0593
  page: 88
  category_type: 유형익히기(서술형)
  problem_summary: |
    A 23·B 18·적어도 하나 30일 때 한 문제만 맞은 학생 수
  solution_summary: |
    $n(A\cap B)=11$. 한 문제만 = $(23-11)+(18-11)=19$.
  category: 대칭차·문장제
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 대칭차-문장제
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-연산-#0594
  page: 88
  category_type: 유형익히기
  problem_summary: |
    40명 중 A 35·B 25·모두 미선호 2일 때 A만 선호 학생 수
  solution_summary: |
    $n(A\cup B)=38$. $n(A\cap B)=22$. A만 = $13$. 답 ②.
  category: 문장제·차집합
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 포함배제-차집합
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-연산-#0595
  page: 88
  category_type: 유형익히기
  problem_summary: |
    50명 중 A 27·B 21·C 30·세 권 모두 6일 때 한 권만 읽은 학생 수
  solution_summary: |
    3집합 포함배제. 답 28.
  category: 3집합·문장제
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 3집합-포함배제-분석
  insight_type: 통찰형
  depth: 3

### 유형 17 새롭게 약속된 연산

- source: RPM-CM2-ST-연산-#0596
  page: 89
  category_type: 유형익히기(대표문제)
  problem_summary: |
    $A\triangle B=(A\cup B)-(A\cap B)$일 때 옳지 않은 것 (5개)
  solution_summary: |
    ④ $A\triangle U=U-A=A^c\ne U$.
  category: 새 연산·성질
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 새연산-계산·판정
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-연산-#0597
  page: 89
  category_type: 유형익히기(서술형)
  problem_summary: |
    $X\diamondsuit Y=X-Y$일 때 $(A\diamondsuit B)\diamondsuit C$ 모든 원소 합 (3집합 주어짐)
  solution_summary: |
    $A-B=\{5,7,9\}$·$-C=\{7,9\}$. 합 16.
  category: 새 연산·계산
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 새연산-치환·계산
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-연산-#0598
  page: 89
  category_type: 유형익히기
  problem_summary: |
    $A*B=(A-B)\cup(B-A)$일 때 보기 판정 (교환·결합·여집합)
  solution_summary: |
    ㄱ·ㄴ 참·ㄷ 거짓. 답 ③.
  category: 새 연산·성질
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 새연산-성질증명
  insight_type: 통찰형
  depth: 3

### 유형 18 원소 개수 최댓값·최솟값

- source: RPM-CM2-ST-연산-#0599
  page: 89
  category_type: 유형익히기(대표문제)
  problem_summary: |
    30명 중 A 20·B 14일 때 A·B 모두 가입 학생 수의 $M-m$
  solution_summary: |
    $M=14$·$m=4$. $M-m=10$.
  category: 최댓값·최솟값·개수
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 개수-최대최소-포함배제
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-연산-#0600
  page: 89
  category_type: 유형익히기(서술형)
  problem_summary: |
    $n(A)=35,n(B)=28,n(A\cap B)\ge 13$일 때 $n(A\cup B)$ 최댓값·최솟값 합
  solution_summary: |
    최소 35·최대 50. 합 85.
  category: 개수·최댓값·최솟값
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 개수-최대최소-포함배제
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-연산-#0601
  page: 89
  category_type: 유형익히기
  problem_summary: |
    40명 중 S 24·L 14일 때 S·L 모두 미사용 학생 수 최댓값·최솟값 합
  solution_summary: |
    최대 16·최소 2. 합 18.
  category: 여집합·최대최소
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 여집합-최대최소
  insight_type: 통찰형
  depth: 3

---

## Section G. 06 시험에 꼭 나오는 문제 (0602~0624)

- source: RPM-CM2-ST-연산-#0602
  page: 90
  category_type: 시험에꼭나오는
  problem_summary: |
    $A=\{$1≤x≤10 소수$\}$·$B=\{4n+1, 0≤n≤4$ 정수$\}$·$C=\{$한 자리 합성수$\}$일 때 $(A\cup C)\cap B$의 모든 원소 합
  solution_summary: |
    $A=\{2,3,5,7\}$·$B=\{1,5,9,13,17\}$·$C=\{4,6,8,9\}$. $\cap B=\{5,9\}$. 합 14.
  category: 합·교·복합
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 합교-복합계산
  insight_type: 조건통합형
  depth: 2

- source: RPM-CM2-ST-연산-#0603
  page: 90
  category_type: 시험에꼭나오는
  problem_summary: |
    $A=\{x|k<x<k+2\}$·$B=\{x|k-1<x<2k-1\}$가 서로소일 때 양수 $k$ 최댓값
  solution_summary: |
    $2k-1\le k$이면 $k\le 1$. 양수 최댓값 1.
  category: 서로소·구간·최댓값
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 구간-서로소-경계
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-연산-#0604
  page: 90
  category_type: 시험에꼭나오는
  problem_summary: |
    벤다이어그램 원소 $a,b,c,d,e$ 배치. $(A\cup B)^c\cup(B-A^c)$
  solution_summary: |
    $\{e\}\cup\{b\}=\{b,e\}$.
  category: 벤다이어그램·연산
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 벤다이어그램-계산
  insight_type: 절차형
  depth: 2

- source: RPM-CM2-ST-연산-#0605
  page: 90
  category_type: 시험에꼭나오는
  problem_summary: |
    $A\cup B=\{1,3,5,7,9\}$·$A^c=\{3,6,9,12\}$일 때 $B-A$의 모든 원소 합
  solution_summary: |
    $B-A=\{3,9\}$. 합 12.
  category: 차집합·역산
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 여집합-차집합-역산
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-연산-#0606
  page: 90
  category_type: 시험에꼭나오는
  problem_summary: |
    3집합 벤다이어그램 색칠 부분
  solution_summary: |
    답 ② $(B\cap C)\cap A^c$.
  category: 벤다이어그램·식대응
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 벤다이어그램-식대응
  insight_type: 절차형
  depth: 2

- source: RPM-CM2-ST-연산-#0607
  page: 90
  category_type: 시험에꼭나오는(교육청 기출)
  problem_summary: |
    $A=\{6,8\}$·$B=\{a,a+2\}$일 때 $A\cup B=\{6,8,10\}$인 실수 $a$
  solution_summary: |
    $a+2=10$: $a=8$, $B=\{8,10\}$, $A\cup B=\{6,8,10\}$ OK. $a=8$.
  category: 합집합·경우 분류
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 합집합-원소일치
  insight_type: 조건통합형
  depth: 2

- source: RPM-CM2-ST-연산-#0608
  page: 90
  category_type: 시험에꼭나오는(중요★)
  problem_summary: |
    $A=\{3,x-1,2x\}$·$B=\{1,x,x+2\}$·$B\cap A^c=\{2\}$일 때 $A$의 모든 원소 합
  solution_summary: |
    $x=2$일 때 $A=\{3,1,4\}$·$B=\{1,2,4\}$·$B-A=\{2\}$ OK. 합 8.
  category: 차집합·경우분류
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 차집합-원소일치·경우분류
  insight_type: 통찰형
  depth: 3

- source: RPM-CM2-ST-연산-#0609
  page: 90
  category_type: 시험에꼭나오는
  problem_summary: |
    $A=\{$12 양의 약수$\}$·$B=\{a$의 양의 약수, $1\le a\le 20$$\}$·$A\cap B=\{1,3\}$일 때 $a$ 최댓값 $M$·최솟값 $m$의 $M+m$
  solution_summary: |
    $a=3,9,15$. $M=15,m=3$. $M+m=18$.
  category: 약수·조건·최대최소
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 약수집합-조건-경우
  insight_type: 통찰형
  depth: 3

- source: RPM-CM2-ST-연산-#0610
  page: 91
  category_type: 시험에꼭나오는
  problem_summary: |
    공집합 아닌 $A,B$가 서로소일 때 옳은 것 (4개)
  solution_summary: |
    ㄱ·ㄴ 참·ㄷ·ㄹ 거짓.
  category: 서로소·성질
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 서로소-성질
  insight_type: 조건통합형
  depth: 2

- source: RPM-CM2-ST-연산-#0611
  page: 91
  category_type: 시험에꼭나오는
  problem_summary: |
    $A=\{$9의 약수$\}$·$B=\{$18의 약수$\}$·옳지 않은 것 (5개, 2개 답)
  solution_summary: |
    $A=\{1,3,9\}\subset B$. 답지 ②·⑤.
  category: 약수집합·포함
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 약수-포함-판정
  insight_type: 조건통합형
  depth: 2

- source: RPM-CM2-ST-연산-#0612
  page: 91
  category_type: 시험에꼭나오는
  problem_summary: |
    $U=\{$10 미만 자연수$\}$·$A=\{2,7\}$·$B=\{1,5,8\}$일 때 $X\cup A=X-B$인 $X$ 개수
  solution_summary: |
    $A\subset X$·$X\cap B=\varnothing$. 2·7 필수·1·5·8 제외. $2^{9-2-3}=16$.
  category: 특정 원소·복합
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 특정원소-필수제외
  insight_type: 통찰형
  depth: 3

- source: RPM-CM2-ST-연산-#0613
  page: 91
  category_type: 시험에꼭나오는(중요★)
  problem_summary: |
    3집합 항등식 5개 중 항상 성립한다고 할 수 없는 것
  solution_summary: |
    ⑤. 답 ⑤.
  category: 항등식 판정
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 항등식-반례
  insight_type: 통찰형
  depth: 3

- source: RPM-CM2-ST-연산-#0614
  page: 91
  category_type: 시험에꼭나오는
  problem_summary: |
    $\{B\cap(B^c-A)^c\}\cup\{B\cap(B^c\cup A)\}=A\cup B$일 때 옳은 것
  solution_summary: |
    간단히 $B=A\cup B$이므로 $A\subset B$. 답지 ②.
  category: 연산·포함
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 연산-간단화·포함
  insight_type: 통찰형
  depth: 3

- source: RPM-CM2-ST-연산-#0615
  page: 91
  category_type: 시험에꼭나오는(교육청 기출)
  problem_summary: |
    $U=\{$20 이하 자연수$\}$·$A=\{$4의 배수$\}$·$B=\{$20의 약수$\}$일 때 $(A^c\cup B)^c$의 모든 원소 합
  solution_summary: |
    $=A-B=\{8,12,16\}$. 합 36.
  category: 여집합·차집합·계산
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 드모르간·차집합
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-연산-#0616
  page: 91
  category_type: 시험에꼭나오는
  problem_summary: |
    $U=\{$10 이하 자연수$\}$·$A-B^c=\{1,6,7\}$·$(A\cap B^c)\cup(A^c-B)=\{2,3,8,9\}$일 때 $B-A$의 원소 개수
  solution_summary: |
    벤다이어그램 4영역 역산. $B-A=\{4,5,10\}$. 개수 3.
  category: 벤다이어그램·역산
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 4영역-역산
  insight_type: 통찰형
  depth: 3

- source: RPM-CM2-ST-연산-#0617
  page: 91
  category_type: 시험에꼭나오는
  problem_summary: |
    $A_k=\{$$k$의 배수$\}$·$A_m\subset(A_4\cap A_6)$·$(A_{12}\cup A_{18})\subset A_n$일 때 $m$의 최솟값·$n$의 최댓값 곱
  solution_summary: |
    $m$의 최솟값 12·$n$의 최댓값 6. 곱 72.
  category: 배수·LCM·GCD
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 배수-포함-LCM-GCD
  insight_type: 통찰형
  depth: 3

- source: RPM-CM2-ST-연산-#0618
  page: 92
  category_type: 시험에꼭나오는
  problem_summary: |
    $A=\{x|x^2-20x+36>0\}$·$B=\{x|(x-a)(x-3a)\le 0\}$·$A\cap B=\varnothing$인 자연수 $a$ 개수
  solution_summary: |
    $B=[a,3a]\subset[2,18]$. $2\le a\le 6$. 자연수 5개.
  category: 부등식·서로소·자연수
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 부등식-교집합공집합·자연수
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-연산-#0619
  page: 92
  category_type: 시험에꼭나오는
  problem_summary: |
    $U=\mathbb{N}$·$A=\{2x|x\le 15$ 자연수$\}$·$B=\{$32의 약수$\}$일 때 $n(A\cap B^c)$
  solution_summary: |
    $A\cap B=\{2,4,8,16\}$. $n(A-B)=11$.
  category: 배수·차집합·개수
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 배수-차집합-개수
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-연산-#0620
  page: 92
  category_type: 시험에꼭나오는
  problem_summary: |
    $n(A)=15$·$n(A^c\cap B)=13$·$n((A-B)\cup(B-A))=20$일 때 $n(A\cap B)$
  solution_summary: |
    $n(B-A)=13$. $n(A-B)=7$. $n(A\cap B)=15-7=8$. 답 ④.
  category: 원소 개수·역산
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 벤다이어그램-4영역-역산
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-연산-#0621
  page: 92
  category_type: 시험에꼭나오는(중요★)
  problem_summary: |
    $n(A)=16$·$n(A-B)=14$·$n(B)=17$일 때 $(B-A)\subset X\subset B$인 $X$ 개수
  solution_summary: |
    $n(A\cap B)=2$·$n(B-A)=15$. $2^{17-15}=4$.
  category: A⊂X⊂B·개수
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: A필수-B내
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-연산-#0622
  page: 92
  category_type: 시험에꼭나오는(교육청 기출)
  problem_summary: |
    은행 A 또는 B 이용 고객 남 35·여 30·A+B 이용 82·한 은행만 이용 남 여 수 같음. A·B 모두 이용 여 고객 수
  solution_summary: |
    총 65·$n(A\cap B)=17$. 한 은행만 48. 남녀 같으므로 각 24. 여 둘 다 $=30-24=6$. 답 ②.
  category: 문장제·복합조건
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 문장제-분할·포함배제
  insight_type: 통찰형
  depth: 3

- source: RPM-CM2-ST-연산-#0623
  page: 92
  category_type: 시험에꼭나오는
  problem_summary: |
    $X\odot Y=(X-Y)\cup(Y-X)$일 때 $(A\odot B)\cap(B\odot C)$의 벤다이어그램
  solution_summary: |
    답 ①.
  category: 새 연산·벤다이어그램
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 대칭차-교집합-벤
  insight_type: 통찰형
  depth: 3

- source: RPM-CM2-ST-연산-#0624
  page: 92
  category_type: 시험에꼭나오는
  problem_summary: |
    50명 중 A 27·B 32·둘 다 15 이상일 때 A 또는 B 구독 최댓값·최솟값 합
  solution_summary: |
    최소 44·최대 32... 재계산: $n(A\cup B)$ 최소는 $n(A\cap B)$ 최대일 때. $n(A\cap B)\le\min(27,32)=27$. 최소 $n(A\cup B)=27+32-27=32$. 최대 $n(A\cap B)$ 최소일 때 (15)  $n(A\cup B)=44$. 합 76.
  category: 개수·최대최소
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 개수-최대최소
  insight_type: 통찰형
  depth: 3

---

## Section H. 06 서술형·실력up (0625~0631)

- source: RPM-CM2-ST-연산-#0625
  page: 93
  category_type: 서술형
  problem_summary: |
    $A=\{1,2,3,4,5,6\}$·$A-B=\{1,2,3,5\}$·$n(B)=3$·$B$의 모든 원소 합 17일 때 $B-A$
  solution_summary: |
    $A\cap B=\{4,6\}$·$a=7$. $B=\{4,6,7\}$. $B-A=\{7\}$.
  category: 차집합·역산·서술형
  tier: star_4
  unit_code: CM2-ST
  mechanism_primary: 차집합-원소합-역산
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-연산-#0626
  page: 93
  category_type: 서술형
  problem_summary: |
    $A=\{1,3,a^2+2a\}$·$B=\{3,a+1,a^2-4\}$·$A\cap B=\{0,3\}$일 때 상수 $a$
  solution_summary: |
    $a=-2$일 때 $A=\{1,3,0\}$·$B=\{3,-1,0\}$·$A\cap B=\{0,3\}$ OK. $a=-2$.
  category: 교집합·경우분류·서술형
  tier: star_4
  unit_code: CM2-ST
  mechanism_primary: 원소일치-경우분류
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-연산-#0627
  page: 93
  category_type: 서술형
  problem_summary: |
    $U=\{1,\ldots,10\}$·$A=\{3,4,5\}$·$B=\{5,6,7,8\}$·$A\cap X=A$·$X\cap(A^c\cap B)=\{6,7\}$인 $X$ 개수
  solution_summary: |
    3,4,5·6,7 필수·8 제외. $2^{10-3-2-1}=16$.
  category: A⊂X·복합조건
  tier: star_4
  unit_code: CM2-ST
  mechanism_primary: 특정원소-필수제외
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-연산-#0628
  page: 93
  category_type: 서술형
  problem_summary: |
    $A=\{x|x^2-2x-3>0\}$·$B=\{x|x^2+ax+b\le 0\}$·$A\cup B=\mathbb{R}$·$A\cap B=\{x|3<x\le 4\}$일 때 $a+b$
  solution_summary: |
    $B=[-1,4]$. $(x+1)(x-4)\le 0$, $x^2-3x-4\le 0$. $a=-3,b=-4$. $a+b=-7$.
  category: 부등식·복합·역산
  tier: star_4
  unit_code: CM2-ST
  mechanism_primary: 부등식-합교조건-역산
  insight_type: 통찰형
  depth: 3

- source: RPM-CM2-ST-연산-#0629
  page: 93
  category_type: 실력up
  problem_summary: |
    $A=\{$120 이하 자연수$\}$·$B=\{$20과 서로소인 자연수$\}$·$X$는 조건 만족
  solution_summary: |
    상세 카운팅. $2^{10}-1=1023$.
  category: 서로소·복합조건
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 서로소-소인수-부분집합
  insight_type: 통찰형
  depth: 3

- source: RPM-CM2-ST-연산-#0630
  page: 93
  category_type: 실력up(교육청 기출)
  problem_summary: |
    $A=\{3,4,5\}$·$A^c\cup B^c=\{1,2,4\}$·조건 $(A\cup X)-B$ 원소 1개일 때 $B$ 원소 합
  solution_summary: |
    $A\cap B=\{3,5\}$. $B=\{1,2,3,5\}$. 합 11.
  category: 여집합·조건·역산
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 드모르간-교집합-역산
  insight_type: 통찰형
  depth: 3

- source: RPM-CM2-ST-연산-#0631
  page: 93
  category_type: 실력up
  problem_summary: |
    34명 중 국어 18·수학 20·영어 23·두 과목만 9일 때 세 과목 모두 수강 학생 수 (모두 한 과목 이상)
  solution_summary: |
    3집합 포함배제 정리. 답 9.
  category: 3집합·복합
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 3집합-포함배제·두과목만
  insight_type: 통찰형
  depth: 3

---

## Section I. 07 명제 — 교과서문제 대표 (0632~0660)

- source: RPM-CM2-ST-명제-#0632
  page: 95
  category_type: 교과서문제
  problem_summary: |
    보기에서 명제인 것 (1년은 12개월·$x^2=1$·짝수인 소수는 없다·2+3=6·좋다)
  solution_summary: |
    참/거짓 판별 가능 명제: ㄱ·ㄷ·ㄹ.
  category: 명제 판정
  tier: star_2
  unit_code: CM2-ST
  standard: 10수06-03
  mechanism_primary: 명제-판정
  insight_type: 절차형
  depth: 1

- source: RPM-CM2-ST-명제-#0648
  page: 95
  category_type: 교과서문제
  problem_summary: |
    $a=0,b=0$이면 $ab=0$의 역·대우 판별
  solution_summary: |
    역 $ab=0$이면 $a=0,b=0$: 거짓 (반례 $a=1,b=0$). 대우 $ab\ne 0$이면 $a\ne 0$ 또는 $b\ne 0$: 참.
  category: 역·대우 판별
  tier: star_2
  unit_code: CM2-ST
  standard: 10수06-03
  mechanism_primary: 역-대우-판정
  insight_type: 절차형
  depth: 1

---

## Section J. 07 유형익히기 (0661~0737)

### 유형 01·02 명제·조건과 부정

- source: RPM-CM2-ST-명제-#0661
  page: 98
  category_type: 유형익히기(대표문제)
  problem_summary: |
    다음 중 명제가 아닌 것 (5개)
  solution_summary: |
    ④ "$x$는 10 이하 소수이다"는 $x$ 값에 따라 참/거짓 달라짐 → 조건.
  category: 명제 판정
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 명제-조건-구분
  insight_type: 절차형
  depth: 1

- source: RPM-CM2-ST-명제-#0662
  page: 98
  category_type: 유형익히기
  problem_summary: |
    다음 중 명제인 것 모두 고르기 (5개)
  solution_summary: |
    ①·④ 참/거짓 판별 가능. 답 ①·④.
  category: 명제 판정
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 명제-조건-구분
  insight_type: 절차형
  depth: 1

- source: RPM-CM2-ST-명제-#0663
  page: 98
  category_type: 유형익히기
  problem_summary: |
    보기에서 참인 명제
  solution_summary: |
    ㄱ 참·ㄹ 참 (실수·$x=2$ 대입 확인).
  category: 명제 참거짓
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 참거짓-판정
  insight_type: 절차형
  depth: 1

- source: RPM-CM2-ST-명제-#0664
  page: 98
  category_type: 유형익히기(대표문제)
  problem_summary: |
    $p: -1<x\le 5$, $q: x<2$일 때 "$\sim p$ 또는 $q$"의 부정
  solution_summary: |
    부정: "$p$ 그리고 $\sim q$" → $-1<x\le 5$ 그리고 $x\ge 2$ → $2\le x\le 5$.
  category: 조건 부정
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 드모르간-조건-부정
  insight_type: 절차형
  depth: 2

- source: RPM-CM2-ST-명제-#0665
  page: 98
  category_type: 유형익히기
  problem_summary: |
    보기에서 그 부정이 참인 명제 (4개)
  solution_summary: |
    ㄴ·ㄹ 부정 참.
  category: 부정 참거짓
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 부정-참거짓
  insight_type: 절차형
  depth: 2

- source: RPM-CM2-ST-명제-#0666
  page: 98
  category_type: 유형익히기
  problem_summary: |
    $(a-b)^2+(b-c)^2+(c-a)^2=0$의 부정과 같은 것 (5개)
  solution_summary: |
    원식 = $a=b=c$. 부정 = 셋 중 서로 다른 것 존재. 답 ⑤.
  category: 조건 부정
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 등식-부정-등가
  insight_type: 조건통합형
  depth: 3

### 유형 03 진리집합

- source: RPM-CM2-ST-명제-#0667
  page: 99
  category_type: 유형익히기(대표문제)
  problem_summary: |
    $U=\mathbb{R}$·$p: x^2-x-6=0$·$q: x^2-2x-8=0$일 때 "$p$ 또는 $q$"의 진리집합
  solution_summary: |
    $P=\{-2,3\}$·$Q=\{-2,4\}$. $P\cup Q=\{-2,3,4\}$.
  category: 진리집합·합집합
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 진리집합-합
  insight_type: 절차형
  depth: 2

- source: RPM-CM2-ST-명제-#0668
  page: 99
  category_type: 유형익히기
  problem_summary: |
    $U=\{$10 이하 자연수$\}$·$p: x^2-7x+10\le 0$일 때 $\sim p$의 진리집합 원소 합
  solution_summary: |
    $P=\{2,3,4,5\}$. $P^c=\{1,6,7,8,9,10\}$. 합 41.
  category: 진리집합·여집합
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 진리집합-여집합
  insight_type: 조건통합형
  depth: 2

- source: RPM-CM2-ST-명제-#0669
  page: 99
  category_type: 유형익히기
  problem_summary: |
    실수 전체에서 $p: x<-4$·$q: x\ge 2$일 때 $-4\le x<2$의 진리집합
  solution_summary: |
    $\sim p$ 그리고 $\sim q$ = $P^c\cap Q^c=(P\cup Q)^c$. 답 ④.
  category: 진리집합·드모르간
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 드모르간-진리집합
  insight_type: 조건통합형
  depth: 3

### 유형 04 명제의 참·거짓

- source: RPM-CM2-ST-명제-#0670
  page: 99
  category_type: 유형익히기(대표문제)
  problem_summary: |
    다음 중 참인 명제 (실수 $x,y$)
  solution_summary: |
    ③ $|x|>1$이면 $x^2>1$ 참. 나머지 반례 존재.
  category: 명제 참거짓
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 명제-반례-검증
  insight_type: 절차형
  depth: 2

- source: RPM-CM2-ST-명제-#0671
  page: 99
  category_type: 유형익히기
  problem_summary: |
    다음 중 거짓인 명제 (2개)
  solution_summary: |
    ②·⑤ 반례 존재.
  category: 명제 거짓
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 명제-반례
  insight_type: 절차형
  depth: 2

- source: RPM-CM2-ST-명제-#0672
  page: 99
  category_type: 유형익히기
  problem_summary: |
    실수 $a,b,c$에 대해 보기에서 참인 명제 (3개)
  solution_summary: |
    ㄱ만 참.
  category: 실수 명제
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 실수-명제-반례
  insight_type: 조건통합형
  depth: 3

### 유형 05 거짓인 명제의 반례

- source: RPM-CM2-ST-명제-#0673
  page: 100
  category_type: 유형익히기(대표문제)
  problem_summary: |
    $q\rightarrow p$가 거짓인 원소 (벤다이어그램 $P,Q$·8개 원소 표시)
  solution_summary: |
    $Q\cap P^c=Q-P$의 원소 $d,f,g$.
  category: 반례·진리집합
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 반례-진리집합-차집합
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-명제-#0674
  page: 100
  category_type: 유형익히기
  problem_summary: |
    $\sim p$이면 $\sim q$가 거짓인 원소 집합
  solution_summary: |
    $P^c\cap(Q^c)^c=P^c\cap Q$. 답 ④.
  category: 대우·반례
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 반례-집합-표현
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-명제-#0675
  page: 100
  category_type: 유형익히기(서술형)
  problem_summary: |
    $U=\{$10 이하 자연수$\}$·$p: x$는 3의 배수·$q: x$는 짝수. $\sim p\to q$가 거짓임을 보이는 모든 원소 합
  solution_summary: |
    $P^c\cap Q^c=(P\cup Q)^c=\{1,5,7\}$. 합 13.
  category: 반례·원소합
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 드모르간-반례
  insight_type: 조건통합형
  depth: 3

### 유형 06 명제 참거짓과 진리집합 포함관계

- source: RPM-CM2-ST-명제-#0676
  page: 100
  category_type: 유형익히기(대표문제)
  problem_summary: |
    $\sim q\to p$가 참일 때 옳은 것
  solution_summary: |
    $Q^c\subset P$. 벤다이어그램. $P\cup Q=U$. 답 ②.
  category: 진리집합·포함
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 진리집합-포함-등가
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-명제-#0677
  page: 100
  category_type: 유형익히기
  problem_summary: |
    3집합 벤다이어그램 $P,Q,R$에서 항상 참인 명제 (3개)
  solution_summary: |
    ㄴ·ㄷ 참. 답 ⑤.
  category: 진리집합·복합
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 3진리집합-포함
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-명제-#0678
  page: 100
  category_type: 유형익히기
  problem_summary: |
    $P\cap Q=P$·$P\cup R=R$일 때 항상 참이라 할 수 없는 명제 (5개)
  solution_summary: |
    $P\subset Q$·$P\subset R$. ⑤ $\sim r\to \sim p$: $R^c\subset P^c$이려면 $P\subset R$ 참. 답지: ⑤.
  category: 진리집합·복합
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 진리집합-대우
  insight_type: 통찰형
  depth: 3

### 유형 07 명제 참이 되도록 하는 상수

- source: RPM-CM2-ST-명제-#0679
  page: 101
  category_type: 유형익히기(대표문제)
  problem_summary: |
    $p: -2\le x\le k$·$q: -k/3\le x\le 10$·$p\to q$ 참인 모든 정수 $k$ 합 ($k\ge -2$)
  solution_summary: |
    $P\subset Q$. $-k/3\le -2$·$k\le 10$. $k\ge 6$·$k\le 10$. 정수 6,7,8,9. 합 30.
  category: 진리집합·포함·정수
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 수직선-포함-정수
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-명제-#0680
  page: 101
  category_type: 유형익히기
  problem_summary: |
    "$a-3\le x<a+1$이면 $-2<x<4$"가 참이 되는 $a$ 범위
  solution_summary: |
    $[a-3,a+1)\subset(-2,4)$. $a-3>-2$·$a+1\le 4$. $1<a\le 3$. 답 ③.
  category: 구간·포함
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 구간-포함
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-명제-#0681
  page: 101
  category_type: 유형익히기(서술형)
  problem_summary: |
    $p: -4<x<2$·$q: x\le a+1$·$r: x\ge b+1$·$p\to q$·$p\to r$ 참일 때 $a$ 최솟값 $m$·$b$ 최댓값 $M$ 합
  solution_summary: |
    $a+1\ge 2$·$b+1\le -4$. $a\ge 1$·$b\le -5$. $m=1,M=-5$. $M+m=-4$.
  category: 구간·이중포함·최댓값
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 구간-포함·최대최소
  insight_type: 통찰형
  depth: 3

- source: RPM-CM2-ST-명제-#0682
  page: 101
  category_type: 유형익히기
  problem_summary: |
    $p: |x-1|\ge a$·$q: |x+2|<5$·$\sim p\to q$ 참일 때 양수 $a$ 최댓값
  solution_summary: |
    $\sim p: 1-a<x<1+a$·$q: -7<x<3$. $\sim p\subset q$. $-a+1\ge -7$·$a+1\le 3$. $a\le 2$. 최댓값 2.
  category: 절댓값·포함
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 절댓값-부정-포함
  insight_type: 통찰형
  depth: 3

### 유형 08 '모든'·'어떤' 명제

- source: RPM-CM2-ST-명제-#0683
  page: 101
  category_type: 유형익히기(대표문제)
  problem_summary: |
    보기에서 참인 명제 (모든·어떤 실수 4개)
  solution_summary: |
    ㄴ 참·ㄷ 참 ($x=0$ 또는 $x=3$). 답 ㄴ·ㄷ.
  category: 모든·어떤·참거짓
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 모든-어떤-반례존재
  insight_type: 조건통합형
  depth: 2

- source: RPM-CM2-ST-명제-#0684
  page: 101
  category_type: 유형익히기
  problem_summary: |
    $U=\{1,2,3,4,5\}$의 $x$에 대해 다음 중 거짓인 명제 (5개)
  solution_summary: |
    ③ $x=5$일 때 $x^2+3=28$이므로 거짓. 답 ③.
  category: 유한 전체·명제
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 유한전체-검사
  insight_type: 절차형
  depth: 2

- source: RPM-CM2-ST-명제-#0685
  page: 101
  category_type: 유형익히기
  problem_summary: |
    "모든 실수 $x$에 대해 $x^2-4x+a\ge 0$"의 부정이 참이 되는 $a$ 범위
  solution_summary: |
    부정 = "어떤 $x$에 대해 $x^2-4x+a<0$" 참 ⇔ $D/4=4-a>0$, $a<4$.
  category: 부정·이차부등식
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 부정-판별식
  insight_type: 조건통합형
  depth: 3

### 유형 09 역·대우 참거짓

- source: RPM-CM2-ST-명제-#0686
  page: 102
  category_type: 유형익히기(대표문제)
  problem_summary: |
    다음 중 역이 참인 명제 (5개, 실수)
  solution_summary: |
    ④ 역 "$a\ne 0$ 또는 $b\ne 0$이면 $a^2+b^2>0$" 참.
  category: 역·참거짓
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 역-판정-반례
  insight_type: 절차형
  depth: 2

- source: RPM-CM2-ST-명제-#0687
  page: 102
  category_type: 유형익히기
  problem_summary: |
    $\sim q\to p$의 역이 참일 때 항상 참인 명제 (5개)
  solution_summary: |
    역 $p\to \sim q$ 참 → 대우 $q\to \sim p$ 참. 답 ④.
  category: 역·대우
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 역대우-등가
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-명제-#0688
  page: 102
  category_type: 유형익히기
  problem_summary: |
    보기에서 역·대우 모두 참인 명제 (3개, 실수)
  solution_summary: |
    ㄱ·ㄴ 역·대우 모두 참.
  category: 역·대우·검증
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 역대우-검증
  insight_type: 조건통합형
  depth: 3

### 유형 10 대우 참·상수

- source: RPM-CM2-ST-명제-#0689
  page: 102
  category_type: 유형익히기(대표문제)
  problem_summary: |
    "$x+y<a$이면 $x<3$ 또는 $y<-1$" 참이 되는 실수 $a$ 범위
  solution_summary: |
    대우: "$x\ge 3$·$y\ge -1$이면 $x+y\ge a$" 참. $x+y\ge 2$이므로 $a\le 2$.
  category: 대우·부등식
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 대우-부등식-상수
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-명제-#0690
  page: 102
  category_type: 유형익히기
  problem_summary: |
    "$x^2-kx+6\ne 0$이면 $x-1\ne 0$" 참이 되는 상수 $k$
  solution_summary: |
    대우: "$x=1$이면 $x^2-kx+6=0$" 참. $1-k+6=0$, $k=7$.
  category: 대우·대입
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 대우-근-대입
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-명제-#0691
  page: 102
  category_type: 유형익히기
  problem_summary: |
    $p: x<a$·$q: -3<x<2$·$\sim p\to \sim q$ 참일 때 $a$ 최솟값
  solution_summary: |
    대우 $q\to p$: $Q\subset P$. $2\le a$. 최솟값 2.
  category: 대우·구간
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 대우-포함
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-명제-#0692
  page: 102
  category_type: 유형익히기(서술형)
  problem_summary: |
    "$|x-a|\ge 5$이면 $|x-2|>3$" 참이 되는 정수 $a$ 개수
  solution_summary: |
    대우: "$|x-2|\le 3$이면 $|x-a|<5$" 참. $[-1,5]\subset(a-5,a+5)$. $0<a<4$. 정수 1,2,3의 3개.
  category: 대우·구간·정수
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 대우-구간-정수
  insight_type: 통찰형
  depth: 3

### 유형 11 삼단논법

- source: RPM-CM2-ST-명제-#0693
  page: 103
  category_type: 유형익히기(대표문제)
  problem_summary: |
    $p\to q$·$q\to \sim r$ 참일 때 반드시 참이라 할 수 없는 명제
  solution_summary: |
    ④ $\sim p\to r$: 반례 가능. 답 ④.
  category: 삼단논법
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 삼단논법-추론
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-명제-#0694
  page: 103
  category_type: 유형익히기
  problem_summary: |
    세 명제 $p\to\sim r$·$q\to r$·$\sim s\to r$ 참일 때 보기에서 항상 참 (4개)
  solution_summary: |
    ㄱ·ㄴ·ㄷ 참.
  category: 삼단논법·복합
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 삼단논법-복합
  insight_type: 통찰형
  depth: 3

- source: RPM-CM2-ST-명제-#0695
  page: 103
  category_type: 유형익히기
  problem_summary: |
    네 조건 $q\to\sim p$·$r\to s$ 참·$r\to\sim q$ 참임을 보이기 위한 필요 참인 명제
  solution_summary: |
    답 ② $\sim p\to \sim s$.
  category: 삼단논법
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 삼단논법-역추
  insight_type: 통찰형
  depth: 3

### 유형 12 충분·필요·필요충분조건

- source: RPM-CM2-ST-명제-#0696
  page: 103
  category_type: 유형익히기(대표문제)
  problem_summary: |
    $p$가 $q$이기 위한 필요조건이지만 충분조건은 아닌 것 (실수)
  solution_summary: |
    ① $p:x^2=4$·$q:x=2$. $q\Rightarrow p$이나 역은 반례($x=-2$). 답 ①.
  category: 필요·충분 판정
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 필요충분-판정
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-명제-#0697
  page: 103
  category_type: 유형익히기
  problem_summary: |
    $p$가 $q$이기 위한 충분조건이지만 필요조건은 아닌 것 (3개, 실수)
  solution_summary: |
    ㄱ·ㄷ 만족.
  category: 필요·충분
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 필요충분-판정
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-명제-#0698
  page: 103
  category_type: 유형익히기
  problem_summary: |
    실수 $x,y$·$p:x=0,y=0$·$q:xy=0$·$r:|x|+|y|=0$. 옳은 것 (3개)
  solution_summary: |
    ㄴ만 참 ($p\Leftrightarrow r$).
  category: 필요·충분·복합
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 필요충분-복합
  insight_type: 조건통합형
  depth: 3

### 유형 13 진리집합·포함 관계

- source: RPM-CM2-ST-명제-#0699
  page: 104
  category_type: 유형익히기(대표문제)
  problem_summary: |
    $p$가 $q$이기 위한 필요조건일 때 항상 옳은 것 (5개)
  solution_summary: |
    $Q\subset P$. ④ $P\cup Q^c=U$ 참.
  category: 필요조건·진리집합
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 필요조건-포함-집합표현
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-명제-#0700
  page: 104
  category_type: 유형익히기
  problem_summary: |
    3집합 벤다이어그램에서 옳은 것 (3개)
  solution_summary: |
    ㄱ·ㄴ 참.
  category: 진리집합·복합
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 3진리집합-필요충분
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-명제-#0701
  page: 104
  category_type: 유형익히기
  problem_summary: |
    $(P-R)\cup(Q-R^c)=\varnothing$일 때 항상 옳은 것 (5개)
  solution_summary: |
    $P\subset R$·$Q\cap R=\varnothing$. ⑤ $\sim q\to p$ 필요조건. 답 ⑤.
  category: 진리집합·복합
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 진리집합-복합-필요충분
  insight_type: 통찰형
  depth: 3

### 유형 14 필요·충분조건·상수

- source: RPM-CM2-ST-명제-#0702
  page: 104
  category_type: 유형익히기(대표문제)
  problem_summary: |
    $p: a\le x\le a+2$·$q: (x-5)(x-9)\le 0$·$q$가 $p$이기 위한 필요조건인 모든 정수 $a$ 합
  solution_summary: |
    $P\subset Q$. $Q=[5,9]$. $a\ge 5$·$a+2\le 9$. $5\le a\le 7$. 정수 5,6,7. 합 18.
  category: 필요조건·구간·정수
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 필요조건-구간-정수
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-명제-#0703
  page: 104
  category_type: 유형익히기
  problem_summary: |
    "$x-3\ne 0$이 $x^2+ax-12\ne 0$이기 위한 필요조건"일 때 $a$
  solution_summary: |
    대우 "$x^2+ax-12=0$이면 $x=3$" 참. $9+3a-12=0$, $a=1$.
  category: 필요조건·대우·대입
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 대우-대입
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-명제-#0704
  page: 104
  category_type: 유형익히기(서술형)
  problem_summary: |
    $x^2-6x+8<0$이 $|x-a|<2$이기 위한 충분조건인 $a$ 범위
  solution_summary: |
    $(2,4)\subset(a-2,a+2)$. $a-2\le 2$·$a+2\ge 4$. $2\le a\le 4$.
  category: 충분조건·구간
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 충분조건-구간
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-명제-#0705
  page: 104
  category_type: 유형익히기
  problem_summary: |
    3조건에서 $\sim q$는 $p$의 필요·$\sim p$는 $\sim r$의 충분일 때 $a-b$ 최댓값
  solution_summary: |
    수직선. $-1\le a$·$b\le 0$. $a$ 최대 $-1$·$b$ 최소 $-1$. $a-b$ 최대 $0$.
  category: 필요·충분·복합·최댓값
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 필요충분-복합-최댓값
  insight_type: 통찰형
  depth: 3

### 유형 15 충분·필요조건과 명제의 참거짓

- source: RPM-CM2-ST-명제-#0706
  page: 105
  category_type: 유형익히기(대표문제)
  problem_summary: |
    $p$가 $q$의 충분·$\sim q$가 $r$의 필요일 때 반드시 참이라 할 수 없는 명제
  solution_summary: |
    $p\Rightarrow q$·$r\Rightarrow \sim q$. ⑤ $\sim r\to q$: 반례 가능. 답 ⑤.
  category: 필요·충분·복합
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 필요충분-복합-추론
  insight_type: 통찰형
  depth: 3

- source: RPM-CM2-ST-명제-#0707
  page: 105
  category_type: 유형익히기
  problem_summary: |
    $p\to q$·$\sim r\to \sim q$ 참일 때 보기에서 항상 옳은 것 (3개)
  solution_summary: |
    ㄴ·ㄷ 참. 답 ④.
  category: 삼단논법·필요충분
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 삼단논법-필요충분
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-명제-#0708
  page: 105
  category_type: 유형익히기
  problem_summary: |
    네 조건 $p,q,r,s$·4개 조건 관계. $s$는 $p$이기 위한 어떤 조건
  solution_summary: |
    $p\Leftrightarrow s$. 필요충분조건.
  category: 필요충분·추론
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 필요충분-복합-추론
  insight_type: 통찰형
  depth: 3

### 유형 16 대우 명제 증명

- source: RPM-CM2-ST-명제-#0709
  page: 105
  category_type: 유형익히기(대표문제)
  problem_summary: |
    "자연수 $n$에 대해 $n^2$이 3의 배수이면 $n$도 3의 배수" 대우 증명 (가)(나)(다) 채우기
  solution_summary: |
    (가) $3k-2$·(나) $3k^2-4k+1$·(다) $3k^2-2k$.
  category: 대우 증명·빈칸
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 대우증명-빈칸
  insight_type: 절차형
  depth: 2

- source: RPM-CM2-ST-명제-#0710
  page: 105
  category_type: 유형익히기
  problem_summary: |
    "$x+y$가 무리수이면 $x,y$ 중 적어도 하나 무리수" 대우 증명
  solution_summary: |
    대우 "$x,y$ 모두 유리수이면 $x+y$ 유리수" 참.
  category: 대우 증명
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 대우증명-무리수
  insight_type: 조건통합형
  depth: 3

### 유형 17 귀류법

- source: RPM-CM2-ST-명제-#0711
  page: 106
  category_type: 유형익히기(대표문제)
  problem_summary: |
    $n\ge 2$에 대해 $\sqrt{n^2-1}$이 무리수임을 귀류법 증명 (가)(나)(다)
  solution_summary: |
    (가) $q^2$·(나) $1$·(다) $-1$ 또는 $1$. 답 ②.
  category: 귀류법·빈칸
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 귀류법-무리수-빈칸
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-명제-#0712
  page: 106
  category_type: 유형익히기
  problem_summary: |
    귀류법으로 "유리수와 무리수의 합은 무리수임" 증명
  solution_summary: |
    합을 유리수 가정 → 무리수 = 유리수 - 유리수 = 유리수 모순.
  category: 귀류법 증명
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 귀류법-무리수
  insight_type: 조건통합형
  depth: 3

### 유형 18 두 수·식 대소 관계

- source: RPM-CM2-ST-명제-#0713
  page: 106
  category_type: 유형익히기(대표문제)
  problem_summary: |
    $x\ge 2,y\ge 2$일 때 $A=xy+4$·$B=2(x+y)$의 대소
  solution_summary: |
    $A-B=xy-2x-2y+4=(x-2)(y-2)\ge 0$. $A\ge B$. 답 ④.
  category: 대소 비교·부등식
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 인수분해-대소
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-명제-#0714
  page: 106
  category_type: 유형익히기
  problem_summary: |
    $a>0$일 때 $A=\sqrt{a+4}$·$B=a/4+2$의 대소
  solution_summary: |
    $A^2-B^2=-a^2/16<0$이므로 $A^2<B^2$. $A,B>0$이므로 $A<B$.
  category: 대소·제곱
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 제곱차-대소
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-명제-#0715
  page: 106
  category_type: 유형익히기
  problem_summary: |
    $a>b>0$일 때 보기에서 옳은 것 (3개)
  solution_summary: |
    ㄴ 참. 답 ⑤.
  category: 대소·불변식
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 대소-비교-부호
  insight_type: 통찰형
  depth: 3

### 유형 19 절대부등식 증명

- source: RPM-CM2-ST-명제-#0716
  page: 107
  category_type: 유형익히기(대표문제)
  problem_summary: |
    $a,b\ge 0$일 때 $\sqrt{a}+\sqrt{b}\ge\sqrt{a+b}$ 증명 (가)(나) 채우기
  solution_summary: |
    (가) $2\sqrt{ab}$·(나) $b=0$.
  category: 절대부등식·빈칸
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 절대부등식-빈칸
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-명제-#0717
  page: 107
  category_type: 유형익히기
  problem_summary: |
    양의 실수 $x,y,z$일 때 $x^3+y^3+z^3\ge 3xyz$ 증명
  solution_summary: |
    $=\frac{1}{2}(x+y+z)\{(x-y)^2+(y-z)^2+(z-x)^2\}\ge 0$.
  category: 절대부등식 증명
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 절대부등식-인수분해
  insight_type: 통찰형
  depth: 3

- source: RPM-CM2-ST-명제-#0718
  page: 107
  category_type: 유형익히기
  problem_summary: |
    두 실수 $a,b$에 대해 보기에서 절대부등식인 것 (3개)
  solution_summary: |
    ㄴ만 절대부등식. 답 ②.
  category: 절대부등식 판정
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 절대부등식-반례
  insight_type: 조건통합형
  depth: 3

### 유형 20 산술평균·기하평균 - 합·곱 일정

- source: RPM-CM2-ST-명제-#0719
  page: 107
  category_type: 유형익히기(대표문제)
  problem_summary: |
    $a,b>0$·$2a+3b=12$일 때 $ab$ 최댓값 $M$·이때 $a=\alpha,b=\beta$일 때 $M+\alpha+\beta$
  solution_summary: |
    AM-GM: $2a+3b\ge 2\sqrt{6ab}$, $\sqrt{6ab}\le 6$, $ab\le 6$. $M=6$·$2a=3b=6$이므로 $\alpha=3,\beta=2$. 합 11.
  category: AM-GM·합일정
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: AM-GM-변수치환
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-명제-#0720
  page: 107
  category_type: 유형익히기
  problem_summary: |
    양수 $x,y$·$xy=4$일 때 $2x+4y$ 최솟값
  solution_summary: |
    AM-GM: $2x+4y\ge 2\sqrt{8xy}=2\sqrt{32}=8\sqrt{2}$.
  category: AM-GM·곱일정
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: AM-GM
  insight_type: 절차형
  depth: 2

- source: RPM-CM2-ST-명제-#0721
  page: 107
  category_type: 유형익히기
  problem_summary: |
    0이 아닌 실수 $a,b$·$a^2+4b^2=32$일 때 $ab$의 최댓값·최솟값 곱
  solution_summary: |
    AM-GM: $32\ge 4|ab|$, $|ab|\le 8$. 최대 8·최소 $-8$. 곱 $-64$.
  category: AM-GM·부호
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: AM-GM-절댓값
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-명제-#0722
  page: 107
  category_type: 유형익히기
  problem_summary: |
    $5a+b=10$·양수일 때 $1/a+5/b$ 최솟값
  solution_summary: |
    $1/a+5/b=(5a+b)/ab=10/ab$. $ab\le 5$. $10/ab\ge 2$. 답 2.
  category: AM-GM·응용
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: AM-GM-치환
  insight_type: 통찰형
  depth: 3

### 유형 21·22 산술평균·기하평균 - 식 전개·변형

- source: RPM-CM2-ST-명제-#0723
  page: 108
  category_type: 유형익히기(대표문제)
  problem_summary: |
    양수 $x,y$·$(x+4/y)(4y+1/x)$의 최솟값
  solution_summary: |
    전개 $=4xy+1+16+4/(xy)$. $4xy+4/(xy)\ge 2\sqrt{16}=8$. 최솟값 $17+8=25$.
  category: AM-GM·전개
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: AM-GM-전개
  insight_type: 통찰형
  depth: 3

- source: RPM-CM2-ST-명제-#0724
  page: 108
  category_type: 유형익히기
  problem_summary: |
    양수 $a$·$(a-3/a)(3a-1/a)$의 최솟값 $m$·이때 $a=\alpha$일 때 $m+\alpha$
  solution_summary: |
    전개하여 AM-GM 적용. $m=-4$·$\alpha=1$. 합 $-3$.
  category: AM-GM·전개
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: AM-GM-전개
  insight_type: 통찰형
  depth: 3

- source: RPM-CM2-ST-명제-#0725
  page: 108
  category_type: 유형익히기
  problem_summary: |
    양수 $a,b,c,d$일 때 $(a/b+c/d)(b/a+d/c)$의 최솟값
  solution_summary: |
    전개 $2+ad/(bc)+bc/(ad)\ge 2+2=4$.
  category: AM-GM·비 전개
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: AM-GM-비
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-명제-#0726
  page: 108
  category_type: 유형익히기
  problem_summary: |
    양수 $a,b,c$·$(a+3b+c)(1/a+4/(3b+c))$의 최솟값
  solution_summary: |
    전개하여 AM-GM. 최솟값 9.
  category: AM-GM·묶음
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: AM-GM-묶음변수
  insight_type: 통찰형
  depth: 3

- source: RPM-CM2-ST-명제-#0727
  page: 108
  category_type: 유형익히기(대표문제)
  problem_summary: |
    $x>-1$일 때 $x+4/(x+1)$ 최솟값 $m$·이때 $x=n$·$mn$
  solution_summary: |
    $=x+1+4/(x+1)-1\ge 2\cdot 2-1=3$. $m=3$·$x+1=2$·$n=1$. $mn=3$.
  category: AM-GM·변수 이동
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: AM-GM-치환
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-명제-#0728
  page: 108
  category_type: 유형익히기
  problem_summary: |
    $a>1$일 때 $9a-1+1/(a-1)\ge k$ 항상 성립 실수 $k$ 최댓값
  solution_summary: |
    $=9(a-1)+1/(a-1)+8\ge 2\sqrt{9}+8=14$. $k\le 14$. 답 ④.
  category: AM-GM·부등식·최댓값
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: AM-GM-부등식
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-명제-#0729
  page: 108
  category_type: 유형익히기(서술형)
  problem_summary: |
    양수 $a,b,c$일 때 $(b+c)/a+(c+a)/b+(a+b)/c$ 최솟값
  solution_summary: |
    3쌍 AM-GM 각각 $\ge 2$. 총 최솟값 6.
  category: AM-GM·대칭식
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: AM-GM-대칭
  insight_type: 통찰형
  depth: 3

- source: RPM-CM2-ST-명제-#0730
  page: 108
  category_type: 유형익히기
  problem_summary: |
    $x>3$일 때 $(x^2-3x+4)/(x-3)$의 최솟값
  solution_summary: |
    $=x+4/(x-3)=(x-3)+4/(x-3)+3\ge 2\cdot 2+3=7$.
  category: AM-GM·분수식
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: AM-GM-분수식-치환
  insight_type: 조건통합형
  depth: 3

### 유형 23 코시-슈바르츠

- source: RPM-CM2-ST-명제-#0731
  page: 109
  category_type: 유형익히기(대표문제)
  problem_summary: |
    실수 $x,y$·$x^2+y^2=4$일 때 $x+2y$ 최댓값
  solution_summary: |
    $(1+4)(x^2+y^2)\ge(x+2y)^2$이므로 $20\ge(x+2y)^2$. 최댓값 $2\sqrt{5}$.
  category: 코시·최댓값
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 코시-슈바르츠
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-명제-#0732
  page: 109
  category_type: 유형익히기
  problem_summary: |
    실수 $x,y$·$x/4+y/3=5$일 때 $x^2+y^2$ 최솟값
  solution_summary: |
    $(1/16+1/9)(x^2+y^2)\ge(x/4+y/3)^2=25$. $(25/144)(x^2+y^2)\ge 25$. $x^2+y^2\ge 144$.
  category: 코시·최솟값
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 코시-슈바르츠
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-명제-#0733
  page: 109
  category_type: 유형익히기
  problem_summary: |
    $x^2+y^2=a$·$3x+2y$ 최댓값 최솟값 차 13일 때 양수 $a$
  solution_summary: |
    코시: $13a\ge(3x+2y)^2$. 최댓값 $\sqrt{13a}$·최소 $-\sqrt{13a}$. $2\sqrt{13a}=13$, $a=13/4$.
  category: 코시·차·역산
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 코시-역산
  insight_type: 통찰형
  depth: 3

- source: RPM-CM2-ST-명제-#0734
  page: 109
  category_type: 유형익히기
  problem_summary: |
    실수 $a,b,c$·$a+b+c=2$·$a^2+b^2+c^2=4$일 때 $a$의 최댓값·최솟값 합
  solution_summary: |
    $b+c=2-a$·$b^2+c^2=4-a^2$. 코시 $(1+1)(b^2+c^2)\ge(b+c)^2$. $2(4-a^2)\ge(2-a)^2$. $-2/3\le a\le 2$. 합 $4/3$.
  category: 코시·복합
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 코시-치환-복합
  insight_type: 통찰형
  depth: 3

### 유형 24 절대부등식 활용

- source: RPM-CM2-ST-명제-#0735
  page: 109
  category_type: 유형익히기(대표문제)
  problem_summary: |
    40m 철망으로 3개 직사각형 우리. 넓이 최댓값
  solution_summary: |
    가로 $a$·세로 $b$이면 $2a+4b=40$... 정확: $a+2b=20$. AM-GM: $ab$ 최대 = 50. 답 $50\,\text{m}^2$.
  category: 문장제·AM-GM·활용
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 문장제-AM-GM
  insight_type: 통찰형
  depth: 3

- source: RPM-CM2-ST-명제-#0736
  page: 109
  category_type: 유형익히기
  problem_summary: |
    높이 5cm 소포·100cm 끈으로 묶기. 소포 최대 부피
  solution_summary: |
    $2x+2y+20=100$·$x+y=40$. $xy\le 400$. 부피 $5xy\le 2000$. 답 $2000\,\text{cm}^3$.
  category: 문장제·AM-GM
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 문장제-AM-GM
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-명제-#0737
  page: 109
  category_type: 유형익히기
  problem_summary: |
    대각선 $2\sqrt{5}$ 직사각형 종이·접어 정사각기둥 상자·12개 모서리 길이 합 최댓값
  solution_summary: |
    $a^2+b^2=20$·모서리 합 $2a+4b$. 코시 $(4+16)(a^2+b^2)\ge(2a+4b)^2$. $400\ge(2a+4b)^2$. 최댓값 20.
  category: 문장제·코시
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 문장제-코시
  insight_type: 통찰형
  depth: 3

---

## Section L. 07 시험에 꼭 나오는 문제 (0738~0758)

- source: RPM-CM2-ST-명제-#0738
  page: 110
  category_type: 시험에꼭나오는
  problem_summary: |
    조건 $p$·부정 $\sim p$가 바르게 연결된 것 (3개)
  solution_summary: |
    ㄷ만 옳음.
  category: 조건 부정
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 부정-드모르간
  insight_type: 절차형
  depth: 2

- source: RPM-CM2-ST-명제-#0739
  page: 110
  category_type: 시험에꼭나오는
  problem_summary: |
    $U=\{1,\ldots,6\}$·$p:2\le x<5$·$q:3<x\le 6$일 때 "$\sim p$이고 $q$"의 진리집합 원소 합
  solution_summary: |
    $P^c\cap Q=\{5,6\}$. 합 11.
  category: 진리집합·교집합
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 진리집합-교집합
  insight_type: 절차형
  depth: 2

- source: RPM-CM2-ST-명제-#0740
  page: 110
  category_type: 시험에꼭나오는(중요★)
  problem_summary: |
    다음 중 참인 명제 (5개, 실수)
  solution_summary: |
    ④ $|x|<2$이면 $x^2<4$ 참. 나머지 반례. 답 ④.
  category: 명제 참거짓
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 명제-반례
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-명제-#0741
  page: 110
  category_type: 시험에꼭나오는
  problem_summary: |
    "$x+y,xy$ 모두 유리수이면 $x,y$ 중 적어도 하나 유리수" 거짓 반례 (5개)
  solution_summary: |
    ④ $x=1+\sqrt{2},y=1-\sqrt{2}$: 합·곱 유리수·둘 다 무리수.
  category: 명제 반례
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 무리수-켤레-반례
  insight_type: 통찰형
  depth: 3

- source: RPM-CM2-ST-명제-#0742
  page: 110
  category_type: 시험에꼭나오는(중요★)
  problem_summary: |
    $P\cap Q=\varnothing$일 때 항상 참인 명제 (5개)
  solution_summary: |
    $P\subset Q^c$이므로 $p\to \sim q$ 참. 답 ③.
  category: 진리집합·명제
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 진리집합-포함-명제
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-명제-#0743
  page: 110
  category_type: 시험에꼭나오는
  problem_summary: |
    $p: x^2-(a^2+1)x+a^2=0$·$q: |x-a|\le 1$·$p\to q$ 참인 정수 $a$ 개수
  solution_summary: |
    $p$ 해 $x=1$ 또는 $x=a^2$. 이들이 $[a-1,a+1]$에 속해야. 정수 $a=0,1$의 2개.
  category: 명제·포함·정수
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 방정식해-포함-정수
  insight_type: 통찰형
  depth: 3

- source: RPM-CM2-ST-명제-#0744
  page: 110
  category_type: 시험에꼭나오는
  problem_summary: |
    다음 중 그 부정이 참인 명제 (2개)
  solution_summary: |
    ①·⑤. 각 부정 참 확인.
  category: 부정 참거짓
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 부정-검증
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-명제-#0745
  page: 110
  category_type: 시험에꼭나오는(교육청 기출)
  problem_summary: |
    "어떤 실수 $x$에 대해 $x^2+8x+2k-1\le 0$"이 거짓인 정수 $k$ 최솟값
  solution_summary: |
    부정 "모든 $x$에 대해 $x^2+8x+2k-1>0$" 참. $D/4=16-(2k-1)<0$. $k>17/2$. 정수 최솟값 9.
  category: 부정·이차부등식·정수
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 부정-판별식-정수
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-명제-#0746
  page: 111
  category_type: 시험에꼭나오는
  problem_summary: |
    다음 중 그 대우가 참인 명제 (5개)
  solution_summary: |
    ③만 참 (자연수 $n$·$n(n+1)(n+2)$ 24 배수).
  category: 대우·참거짓
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 대우-검증
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-명제-#0747
  page: 111
  category_type: 시험에꼭나오는
  problem_summary: |
    네 조건 $p,q,r,s$·$p\to\sim q$·$\sim r\to\sim q$·$s\to q$ 참일 때 항상 참인 명제 (4개)
  solution_summary: |
    ㄷ·ㄹ 참.
  category: 삼단논법·복합
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 삼단논법-복합
  insight_type: 통찰형
  depth: 3

- source: RPM-CM2-ST-명제-#0748
  page: 111
  category_type: 시험에꼭나오는
  problem_summary: |
    A,B,C,D 네 명·4개 조건 모두 참일 때 안경 쓴 학생
  solution_summary: |
    조건 상호 검증. A·C.
  category: 논리 추론·문장제
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 논리-추론-문장제
  insight_type: 통찰형
  depth: 3

- source: RPM-CM2-ST-명제-#0749
  page: 111
  category_type: 시험에꼭나오는(중요★)
  problem_summary: |
    보기에서 $p$가 $q$의 필요충분조건인 것 (3개)
  solution_summary: |
    ㄴ만.
  category: 필요충분·판정
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 필요충분-판정
  insight_type: 통찰형
  depth: 3

- source: RPM-CM2-ST-명제-#0750
  page: 111
  category_type: 시험에꼭나오는
  problem_summary: |
    3조건 $p,q,r$·$p$가 $\sim q$의 필요충분·$r$이 $\sim p$의 충분일 때 항상 옳은 것 (5개)
  solution_summary: |
    $P=Q^c$·$R\subset P^c=Q$. 답 ②.
  category: 필요충분·진리집합
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 필요충분-진리집합
  insight_type: 통찰형
  depth: 3

- source: RPM-CM2-ST-명제-#0751
  page: 112
  category_type: 시험에꼭나오는(교육청 기출)
  problem_summary: |
    $p:3\le x\le 4$·$q:(x+k)(x-k)<0$이 $p$가 $q$이기 위한 충분조건인 자연수 $k$ 최솟값
  solution_summary: |
    $Q=(-k,k)$·$P\subset Q$. $-k<3$·$4<k$이므로 $k>4$. 자연수 최솟값 5.
  category: 충분조건·자연수
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 충분조건-구간-자연수
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-명제-#0752
  page: 111
  category_type: 시험에꼭나오는
  problem_summary: |
    3조건 $p,q,r$ 관계에서 상수 $a,b$·$a-b$ ($a>0$)
  solution_summary: |
    조건 정리. $a=1$·$b=-2$. $a-b=3$.
  category: 필요충분·상수
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 필요충분-상수-역산
  insight_type: 통찰형
  depth: 3

- source: RPM-CM2-ST-명제-#0753
  page: 112
  category_type: 시험에꼭나오는
  problem_summary: |
    네 조건 $p,q,r,s$·복합 관계 하에 옳은 것 (3개)
  solution_summary: |
    ㄴ·ㄷ 참.
  category: 필요충분·복합
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 필요충분-복합-추론
  insight_type: 통찰형
  depth: 3

- source: RPM-CM2-ST-명제-#0754
  page: 112
  category_type: 시험에꼭나오는
  problem_summary: |
    "$x^2+y^2=3$ 만족 양의 유리수 $x,y$ 존재하지 않음" 증명 빈칸 (가)(나)(다)·$a$
  solution_summary: |
    (가) $3N^2$·(나) $3$·(다) $3$·$a=48$. $a+f(4)/g(2)=48/3\cdot 3+3=15$? 상세 답 15.
  category: 귀류법·복합증명
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 귀류법-복합
  insight_type: 통찰형
  depth: 3

- source: RPM-CM2-ST-명제-#0755
  page: 112
  category_type: 시험에꼭나오는(중요★)
  problem_summary: |
    양수 $x,y$·$2x^2+8y^2=5$·$xy$ 최댓값 $\gamma$·이때 $x=\alpha,y=\beta$일 때 $\beta/\alpha+\gamma$
  solution_summary: |
    AM-GM: $5\ge 8xy$·$xy\le 5/8$·$\gamma=5/8$. 등호 $2x^2=8y^2$·$x=2y$. $\alpha=\sqrt{5}/2$·$\beta=\sqrt{5}/4$. $\beta/\alpha=1/2$·$+5/8=9/8$. 답 ②.
  category: AM-GM·복합
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: AM-GM-복합
  insight_type: 통찰형
  depth: 3

- source: RPM-CM2-ST-명제-#0756
  page: 112
  category_type: 시험에꼭나오는
  problem_summary: |
    $a,b>0$·$(2a+1/(3b))(1/a+6b)$의 최솟값
  solution_summary: |
    전개 $=2+12ab+1/(3ab)+2$... $4+12ab+1/(3ab)\ge 4+2\sqrt{4}=8$. 답 ②.
  category: AM-GM·전개
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: AM-GM-전개
  insight_type: 통찰형
  depth: 3

- source: RPM-CM2-ST-명제-#0757
  page: 112
  category_type: 시험에꼭나오는
  problem_summary: |
    원 $x^2+y^2=16$ 위 점 $P(a,b)$·$a,b>0$·접선이 $x,y$축과 만나는 점 A·B·삼각형 OAB 넓이 최솟값
  solution_summary: |
    접선 $ax+by=16$. $A(16/a,0)$·$B(0,16/b)$. 넓이 $128/(ab)$. AM-GM: $a^2+b^2=16\ge 2ab$·$ab\le 8$. 넓이 $\ge 128/8=16$. 답 16.
  category: 접선·AM-GM
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 접선-AM-GM
  insight_type: 통찰형
  depth: 3

- source: RPM-CM2-ST-명제-#0758
  page: 112
  category_type: 시험에꼭나오는
  problem_summary: |
    둘레 20인 직사각형 가로 $x$·세로 $y$·$\sqrt{3x}+\sqrt{2y}$의 최댓값
  solution_summary: |
    $x+y=10$·코시 $(3+2)(x+y)\ge(\sqrt{3x}+\sqrt{2y})^2$·$50\ge$…·최댓값 $5\sqrt{2}$.
  category: 코시·문장제
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 코시-문장제
  insight_type: 통찰형
  depth: 3

---

## Section M. 07 서술형·실력up (0759~0765)

- source: RPM-CM2-ST-명제-#0759
  page: 113
  category_type: 서술형
  problem_summary: |
    "$a+b>1$이면 $a\ge 5$ 또는 $b\ge k$" 참인 실수 $k$ 최댓값
  solution_summary: |
    대우 "$a<5$·$b<k$이면 $a+b\le 1$" 참. $a+b<5+k\le 1$이므로 $k\le -4$. 최댓값 $-4$.
  category: 대우·부등식·서술형
  tier: star_4
  unit_code: CM2-ST
  mechanism_primary: 대우-부등식-최댓값
  insight_type: 통찰형
  depth: 3

- source: RPM-CM2-ST-명제-#0760
  page: 113
  category_type: 서술형
  problem_summary: |
    3조건 $p,q,r$에서 관계 하에 $b-a$ 최솟값 ($a\ge 0$)
  solution_summary: |
    수직선 정리. $b-a$ 최솟값 2.
  category: 필요·충분·최솟값
  tier: star_4
  unit_code: CM2-ST
  mechanism_primary: 필요충분-최솟값
  insight_type: 통찰형
  depth: 3

- source: RPM-CM2-ST-명제-#0761
  page: 113
  category_type: 서술형
  problem_summary: |
    양수 $a,b$·$a^2-4a+b/a+9a/b$ 최솟값 $m$·이때 $\alpha,\beta$·$m+\alpha+\beta$
  solution_summary: |
    $(a-2)^2+2\sqrt{9}-4=(a-2)^2+2$. $a=2,b=6$. $m=2·\alpha+\beta=8$. 총 10.
  category: AM-GM·완전제곱
  tier: star_4
  unit_code: CM2-ST
  mechanism_primary: AM-GM-완전제곱
  insight_type: 통찰형
  depth: 3

- source: RPM-CM2-ST-명제-#0762
  page: 113
  category_type: 서술형
  problem_summary: |
    실수 $x,y$·$x^2+y^2=2$일 때 $2x+y$ 최댓값 $M$·최솟값 $m$·$M^2+m^2$
  solution_summary: |
    코시 $5\cdot 2\ge(2x+y)^2$. $M=\sqrt{10}$·$m=-\sqrt{10}$. $M^2+m^2=20$.
  category: 코시·서술형
  tier: star_4
  unit_code: CM2-ST
  mechanism_primary: 코시-최대최소
  insight_type: 조건통합형
  depth: 3

- source: RPM-CM2-ST-명제-#0763
  page: 113
  category_type: 실력up
  problem_summary: |
    3집합 $P,Q,R$·3명제 참일 때 옳은 것 (3개)
  solution_summary: |
    ㄴ·ㄷ 참.
  category: 진리집합·복합
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 진리집합-복합-추론
  insight_type: 통찰형
  depth: 3

- source: RPM-CM2-ST-명제-#0764
  page: 113
  category_type: 실력up(교육청 기출)
  problem_summary: |
    $p:|x-k|\le 2$·$q:x^2-4x-5\le 0$·$p\to q$·$p\to \sim q$ 모두 거짓인 정수 $k$ 합
  solution_summary: |
    $P=[k-2,k+2]$·$Q=[-1,5]$. $P\not\subset Q$·$P\not\subset Q^c$. $k<1$ 또는 $k>3$ 그리고 $-3\le k\le 7$. 정수 $-3,-2,-1,0,4,5,6,7$. 합 16. 답 ②.
  category: 명제·거짓·정수
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 명제-거짓조건-정수
  insight_type: 통찰형
  depth: 3

- source: RPM-CM2-ST-명제-#0765
  page: 113
  category_type: 실력up
  problem_summary: |
    삼각형 ABC $\overline{AB}=3$·$\overline{AC}=4$·$\angle A=30°$·변 BC 위 점 P·PM·PN 수선의 발일 때 $\overline{AB}/\overline{PM}+\overline{AC}/\overline{PN}$의 최솟값
  solution_summary: |
    넓이 관계 $3x+4y=6$·AM-GM $(3/x+4/y)(3x+4y)\ge(3+4)^2$·$\ge 49/6$. 답 $49/6$.
  category: 기하·코시·문장제
  tier: star_3
  unit_code: CM2-ST
  mechanism_primary: 기하-넓이관계-코시
  insight_type: 통찰형
  depth: 3

---

