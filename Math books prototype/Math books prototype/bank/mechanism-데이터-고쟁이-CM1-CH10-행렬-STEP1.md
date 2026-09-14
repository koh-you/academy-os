---
name: mechanism-데이터-고쟁이-CM1-CH10-행렬-STEP1
description: 고쟁이 공통수학1 2025 CH10 행렬의 뜻과 연산 STEP 1 정독 데이터. Stage 1 P2 · 원본 은행.
metadata:
  type: reference
  version: v1.0
  established: 2026-07-16
  source: 고쟁이 공통수학1 2025 (이투스북)
  step: STEP 1
  tier_mapping:
    STEP_1: star_3 (default) · star_4 (예외 명시)
  unit_code: CM1-MX
  citation_note: 고쟁이 · 학습 목적 · 저작권 준수
  extract_range: "문항 767~813 (47문 · STEP 1 교과서 정복 핵심 유형)"
  pages_problem: p.205~212 (본문)
  pages_solution: p.154~158 (해설)
---

# 고쟁이 공통수학1 — CH10 행렬의 뜻과 연산 · STEP 1 정독 데이터

**총 문항 수**: **47문항** (#767~#813 · p.205~212)
**정독 일자**: 2026-07-16

---

## STEP 1 (#767~#813 · p.205~212)

### 유형 01 행렬의 뜻 (#767~#773)

```yaml
- source: 고쟁이-CM1-CH10-STEP1-#767
  page: 205
  problem_summary: |
    3×2 행렬 A의 (i,j) 성분 a_ij = (-1)^i + 3j - 2ij일 때, 행렬 A의 모든 성분의 합.
  category: 성분 정의 · 합 계산
  tier: star_4
  _step: STEP1
  unit_code: CM1-MX
  mechanism_primary: (i,j) 대입 · 6개 성분 합
  insight_type: 절차형
  depth: 1
  frequency_mark: 빈출

- source: 고쟁이-CM1-CH10-STEP1-#768
  page: 205
  problem_summary: |
    강에 댐 설치, 물고기 통로 어도. 상류 3개·하류 4개 설치. 삼차정사각행렬 A의 (i,j) 성분 a_ij 조건 (i=j: 0 / i≠j: P_i→P_j 가는 방법 수). 행렬 A 구하기.
  category: 실생활 · 경로 그래프 인접행렬
  tier: star_4
  _step: STEP1
  unit_code: CM1-MX
  mechanism_primary: 어도 개수 → 경로 수 계산
  insight_type: I-CON
  depth: 2

- source: 고쟁이-CM1-CH10-STEP1-#769
  page: 205
  problem_summary: |
    삼차정사각행렬 A의 (i,j) 성분 a_ij = ij (i>j) / 2i²-3j (i=j) / a_ji (i<j)일 때, 행렬 A의 제2열의 모든 성분의 합.
  category: 조건별 정의 · 대칭
  tier: star_4
  _step: STEP1
  unit_code: CM1-MX
  mechanism_primary: 세 조건별 성분 결정 · 제2열 합
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH10-STEP1-#770
  page: 205
  problem_summary: |
    두 행렬 A = (x, y+3z; x+2y, 1), B = (y+4, 5; 1, x-z)에 대해 A=B일 때, 세 실수 x, y, z에 대해 x²+y²+z².
  category: 서로 같은 행렬 · 연립
  tier: star_4
  _step: STEP1
  unit_code: CM1-MX
  mechanism_primary: 대응 성분 등식 4개 · 연립
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH10-STEP1-#771
  page: 205
  problem_summary: |
    삼차정사각행렬 A의 (i,j) 성분 a_ij = 1 (i=j) / ai+bj+3 (i≠j). 행렬 A가 주어졌을 때 xy 값 (a,b 상수).
  category: 조건별 정의 · 미지수 결정
  tier: star_4
  _step: STEP1
  unit_code: CM1-MX
  mechanism_primary: 성분 대입으로 a·b 결정 · x·y 계산
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH10-STEP1-#772
  page: 206
  problem_summary: |
    두 행렬 A = (x²-x, -4; 3, 3y-2), B = (6, xy; 3, y²)에 대해 A=B일 때, y-x 값.
  category: 서로 같은 행렬 · 이차 연립
  tier: star_4
  _step: STEP1
  unit_code: CM1-MX
  mechanism_primary: 대응 성분 · x²-x=6, 3y-2=y² 연립
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH10-STEP1-#773
  page: 206
  problem_summary: |
    등식 (a³, a-b; ab, b³) = (5√2+7, 2; k, 5√2-7)이 성립할 때, 상수 k 값 (선택형).
  category: 서로 같은 행렬 · 무리수 · 세제곱
  tier: star_4
  _step: STEP1
  unit_code: CM1-MX
  mechanism_primary: a³+b³ / a³·b³ 관계 · 근과 계수의 관계
  insight_type: I-EQV
  depth: 2
```

### 유형 02 행렬의 덧셈·뺄셈과 실수배 (#774~#778)

```yaml
- source: 고쟁이-CM1-CH10-STEP1-#774
  page: 206
  problem_summary: |
    두 행렬 A=(-4,6;0,8), B=(3,-5;1,-1)에 대해 행렬 3(A-2B) - (1/2)(5A-8B)의 모든 성분의 합 (선택형).
  category: 행렬식 정리 · 성분 합
  tier: star_4
  _step: STEP1
  unit_code: CM1-MX
  mechanism_primary: 스칼라 분배 · 정리 (A/2)+(B/2) 형태
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH10-STEP1-#775
  page: 206
  problem_summary: |
    두 행렬 A=(5,4;3,2), B=(3,-3;2,-1)에 대해 2(A-2X)+8B=6(2B-X)를 만족시키는 행렬 X의 모든 성분의 곱.
  category: 행렬 방정식 X
  tier: star_4
  _step: STEP1
  unit_code: CM1-MX
  mechanism_primary: X에 대해 정리 · 성분 대입
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH10-STEP1-#776
  page: 206
  problem_summary: |
    세 행렬 A=(0,1;-3,4), B=(0,k;-4,1), C=(0,-7;6,5)에 대해 xA+yB=C가 성립할 때 k+x+y 값 (k,x,y 실수).
  category: 선형결합 · 성분 매칭
  tier: star_4
  _step: STEP1
  unit_code: CM1-MX
  mechanism_primary: 대응 성분 등식 4개 · 연립
  insight_type: 절차형
  depth: 1
  frequency_mark: 빈출

- source: 고쟁이-CM1-CH10-STEP1-#777
  page: 206
  problem_summary: |
    두 이차정사각행렬 A, B에 대해 2A-3B=(-8,1;2,6), 3A+2B=(1,8;-10,9)일 때, A+B=(a,b;c,d). ad-bc 값 서술.
  category: 행렬 연립 · ad-bc (행렬식)
  tier: star_4
  _step: STEP1
  unit_code: CM1-MX
  mechanism_primary: A·B 각각 구한 후 A+B → ad-bc
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH10-STEP1-#778
  page: 207
  problem_summary: |
    이차방정식 x²-ax+b²=0의 두 근을 α, β라 하자. 등식 α(α,2;β,0)+β(β,2;α,0)=(7,6;2aβ,0)일 때, 실수 a+b 값 (b>0, 선택형).
  category: 이차방정식 · 행렬 조건
  tier: star_4
  _step: STEP1
  unit_code: CM1-MX
  mechanism_primary: (1,1) 성분 α²+β² 등 근과 계수 · a·b 결정
  insight_type: I-CON
  depth: 2
```

### 유형 03 행렬의 곱셈 (#779~#787)

```yaml
- source: 고쟁이-CM1-CH10-STEP1-#779
  page: 207
  problem_summary: |
    이차정사각행렬 A, B에 대해 A의 (i,j) 성분 a_ij = i-3j (i≠j) / i+j (i=j). B-2A의 (i,j) 성분 c_ij = i²-j. 행렬 B의 모든 성분의 합.
  category: 성분 정의 · 뺄셈 → B
  tier: star_4
  _step: STEP1
  unit_code: CM1-MX
  mechanism_primary: A·C 계산 후 B = C + 2A
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH10-STEP1-#780
  page: 207
  problem_summary: |
    행렬 A=(1,0;0,2)에 대해 행렬 A^n의 모든 성분의 합이 65가 되도록 하는 자연수 n 구하기.
  category: 대각행렬 거듭제곱
  tier: star_4
  _step: STEP1
  unit_code: CM1-MX
  mechanism_primary: A^n = (1,0;0,2^n) · 성분 합 1+2^n=65
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH10-STEP1-#781
  page: 207
  problem_summary: |
    등식 (5,-2;4,a)(a;b) = (1,3;-3,4)(-2;a) 성립할 때, 두 실수 a·b에 대해 a²+b² 값.
  category: 행렬 곱 · 벡터
  tier: star_4
  _step: STEP1
  unit_code: CM1-MX
  mechanism_primary: 좌·우 곱 각각 · 두 성분 등식
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH10-STEP1-#782
  page: 207
  problem_summary: |
    이차정사각행렬 A의 성분 a_ij = i-j+1, B의 성분 b_ij = i+j+1 (i=1,2·j=1,2)일 때, 행렬 AB의 (2,2) 성분.
  category: 성분 정의 · 곱 특정 성분
  tier: star_4
  _step: STEP1
  unit_code: CM1-MX
  mechanism_primary: 성분 배열 후 AB의 (2,2) = 2행 · 2열 곱합
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH10-STEP1-#783
  page: 207
  problem_summary: |
    행렬 A=(1,0;3,1)과 자연수 n에 대해 행렬 A^n의 모든 성분의 합을 S_n이라 할 때, S_n>150을 만족시키는 n의 최솟값 (선택형).
  category: 삼각행렬 거듭제곱 · 부등식
  tier: star_4
  _step: STEP1
  unit_code: CM1-MX
  mechanism_primary: A^n = (1,0;3n,1) · S_n = 3n+2 > 150
  insight_type: I-EQV
  depth: 2
  frequency_mark: 빈출

- source: 고쟁이-CM1-CH10-STEP1-#784
  page: 208
  problem_summary: |
    표 1(마트·편의점 빵·우유 가격) 표 2(지수·민지 구입 개수) 활용. 두 행렬 A=(a,b;c,d), B=(e,f;g,h)에 대해 다음 중 민지가 마트에서 빵·우유 살 때와 지수가 편의점에서 빵·우유 살 때 지불 각 금액의 합 (선택형: AB·BA의 특정 성분 조합).
  category: 실생활 · 행렬 곱 해석
  tier: star_4
  _step: STEP1
  unit_code: CM1-MX
  mechanism_primary: AB 곱 계산 · (지불금액) = 성분 위치
  insight_type: I-MI
  depth: 2

- source: 고쟁이-CM1-CH10-STEP1-#785
  page: 208
  problem_summary: |
    두 이차정사각행렬 A, B에 대해 A+2B=(3,-1;1,6), A-2B=(-5,7;1,-6)일 때, 행렬 A²-4B²의 (1,2) 성분 (선택형).
  category: 인수분해 (A+2B)(A-2B)
  tier: star_4
  _step: STEP1
  unit_code: CM1-MX
  mechanism_primary: A²-4B² = (A+2B)(A-2B) 성립 조건 (교환) · 그냥 곱해도 무관
  insight_type: I-EQV
  depth: 2

- source: 고쟁이-CM1-CH10-STEP1-#786
  page: 208
  problem_summary: |
    행렬 A=(1,-3;1,-3)에 대해 A^6+A^7+A^8 = kA일 때, 실수 k 값.
  category: 특별 행렬 (A²=cA) 거듭제곱
  tier: star_4
  _step: STEP1
  unit_code: CM1-MX
  mechanism_primary: A² = -2A · A^n = (-2)^(n-1) A
  insight_type: I-EQV
  depth: 2

- source: 고쟁이-CM1-CH10-STEP1-#787
  page: 208
  problem_summary: |
    등식 (x,y;1,1)(2,x;-1,y) = (1,40;4,x) + (4,10;-3,y)를 만족시키는 두 실수 x, y에 대해 xy의 최솟값 서술.
  category: 서술 · 행렬 방정식
  tier: star_4
  _step: STEP1
  unit_code: CM1-MX
  mechanism_primary: 곱·합 각각 계산 · 4 성분 등식 · xy 최소
  insight_type: I-CON
  depth: 2
```

### 유형 04 행렬의 곱셈에 대한 성질 (#788~#795)

```yaml
- source: 고쟁이-CM1-CH10-STEP1-#788
  page: 208
  problem_summary: |
    두 이차정사각행렬 A, B에 대해 A-B=(1,0;3,-2), A²+B²=(3,5;2,1)일 때, 행렬 AB+BA의 제2열의 모든 성분의 합.
  category: (A-B)² 전개 · 교환 X
  tier: star_4
  _step: STEP1
  unit_code: CM1-MX
  mechanism_primary: (A-B)² = A²-AB-BA+B² · AB+BA = A²+B² - (A-B)²
  insight_type: I-EQV
  depth: 2

- source: 고쟁이-CM1-CH10-STEP1-#789
  page: 208
  problem_summary: |
    세 이차정사각행렬 A, B, C에 대해 A=(-1,0;3,1), (1/3)(B-C)=(2,1;-1,0)일 때, 행렬 A(2B+3C) - 5AC의 가장 큰 성분과 가장 작은 성분의 합.
  category: 분배법칙 · 성분 최대·최소
  tier: star_4
  _step: STEP1
  unit_code: CM1-MX
  mechanism_primary: A(2B+3C-5C) = A(2B-2C) = 2A(B-C)
  insight_type: I-EQV
  depth: 2

- source: 고쟁이-CM1-CH10-STEP1-#790
  page: 209
  problem_summary: |
    두 이차정사각행렬 A, B에 대해 (A+B)²=(1,0;2,4), A²+B²=(1,0;0,4)일 때, (A-B)²의 가장 큰 성분.
  category: 전개 · AB+BA
  tier: star_4
  _step: STEP1
  unit_code: CM1-MX
  mechanism_primary: (A+B)² = A²+AB+BA+B² · (A-B)² = A²-AB-BA+B² = 2(A²+B²) - (A+B)²
  insight_type: I-EQV
  depth: 2

- source: 고쟁이-CM1-CH10-STEP1-#791
  page: 209
  problem_summary: |
    두 행렬 A=(2,-2;3,-1), B=(x,y;-3,4)에 대해 (A-2B)² = A²-4AB+4B²이 성립할 때, 두 실수 x·y에 대해 xy 값.
  category: 교환법칙 성립 조건
  tier: star_4
  _step: STEP1
  unit_code: CM1-MX
  mechanism_primary: 조건 ⇔ AB=BA · 성분 등식
  insight_type: I-EQV
  depth: 2
  frequency_mark: 빈출

- source: 고쟁이-CM1-CH10-STEP1-#792
  page: 209
  problem_summary: |
    두 이차정사각행렬 A, B에 대해 (A-B)(A+B)=(4,3;0,0), A²-B²=(3,4;1,1)일 때, 행렬 (A+B)(A-B)의 모든 성분의 합 (선택형).
  category: (A+B)(A-B) vs A²-B²
  tier: star_4
  _step: STEP1
  unit_code: CM1-MX
  mechanism_primary: 두 식 차 · AB-BA 결정
  insight_type: I-EQV
  depth: 2

- source: 고쟁이-CM1-CH10-STEP1-#793
  page: 209
  problem_summary: |
    세 행렬 A=(1,2;3,4), B=(1,3;-1,0), C=(0,-1;1,2)에 대해 행렬 (A+B)C + A(B-C) - (A-C)B의 모든 성분의 합.
  category: 분배법칙 정리
  tier: star_4
  _step: STEP1
  unit_code: CM1-MX
  mechanism_primary: 전개 · 정리 (A+C)B 등의 형태
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH10-STEP1-#794
  page: 209
  problem_summary: |
    두 행렬 A=(2,1;0,-3), B=(0,-1;1,2)에 대해 행렬 A²+2AB-BA-2B²의 (1,1)+(2,2) 성분.
  category: 분배 · 특정 성분
  tier: star_4
  _step: STEP1
  unit_code: CM1-MX
  mechanism_primary: A²+2AB-BA-2B² = (A-B)(A+2B) 정리 or 직접 계산
  insight_type: I-EQV
  depth: 2

- source: 고쟁이-CM1-CH10-STEP1-#795
  page: 209
  problem_summary: |
    두 이차정사각행렬 A, B에 대해 A²+B² = (1/2,0;-1/2,5), AB+BA = (1/2,0;5/2,-4)일 때, (A+B)^66의 모든 성분의 합 (선택형).
  category: 특수 (A+B)² · 거듭제곱
  tier: star_4
  _step: STEP1
  unit_code: CM1-MX
  mechanism_primary: (A+B)² = A²+AB+BA+B² · (A+B)²의 규칙적 형태
  insight_type: I-CON
  depth: 2
  frequency_mark: 빈출
```

### 유형 05 행렬의 변형과 곱셈 (#796~#801)

```yaml
- source: 고쟁이-CM1-CH10-STEP1-#796
  page: 210
  problem_summary: |
    두 행렬 A=(x,5;2x,-2), B=(-2,-5;y,3)에 대해 (A-3B)(A+3B)=A²-9B²일 때, A-B의 (2,1) 성분.
  category: 교환 성립 조건
  tier: star_4
  _step: STEP1
  unit_code: CM1-MX
  mechanism_primary: AB=BA · 성분 등식
  insight_type: I-EQV
  depth: 2

- source: 고쟁이-CM1-CH10-STEP1-#797
  page: 210
  problem_summary: |
    두 행렬 A=(1,2;2,-3x), B=(y,3;3,4)가 (A+B)²=A²+2AB+B²를 만족한다. 점 (x,y)가 나타내는 그래프가 점 (3,k)를 지날 때, 상수 k 값 (선택형).
  category: 교환 조건 → 자취 → 점
  tier: star_4
  _step: STEP1
  unit_code: CM1-MX
  mechanism_primary: AB=BA · x·y 관계식 · 그래프
  insight_type: I-CON
  depth: 2

- source: 고쟁이-CM1-CH10-STEP1-#798
  page: 210
  problem_summary: |
    두 행렬 A=(6x,1;1,x²), B=(y²,1;1,7)에 대해 (A+2B)(A-B) = A²+AB-2B²일 때, 두 정수 x·y의 순서쌍 (x,y)의 개수 서술.
  category: 교환 · 정수 쌍 카운팅
  tier: star_4
  _step: STEP1
  unit_code: CM1-MX
  mechanism_primary: AB=BA 조건 · x·y 정수 해
  insight_type: I-CON
  depth: 2

- source: 고쟁이-CM1-CH10-STEP1-#799
  page: 210
  problem_summary: |
    이차정사각행렬 A에 대해 A(3a;b)=(4;-1), A(3a;5b)=(2;1)일 때, A(a;b)의 값 (선택형).
  category: 선형 변환 · 선형결합
  tier: star_4
  _step: STEP1
  unit_code: CM1-MX
  mechanism_primary: A(3a;b), A(3a;5b) 차 = A(0;4b) → A(0;b), 원래 - 이 = A(3a;0) → A(a;0)
  insight_type: I-EQV
  depth: 2

- source: 고쟁이-CM1-CH10-STEP1-#800
  page: 210
  problem_summary: |
    이차정사각행렬 A에 대해 A²=(1,0;0,3), A(p;q)=(r;s)일 때, A(p-r;q-s)와 같은 것 (선택형).
  category: A² 관계 · 벡터 변환
  tier: star_4
  _step: STEP1
  unit_code: CM1-MX
  mechanism_primary: A(p-r;q-s) = A(p;q) - A(r;s) = (r;s) - A²(p;q) = ...
  insight_type: I-EQV
  depth: 2

- source: 고쟁이-CM1-CH10-STEP1-#801
  page: 210
  problem_summary: |
    이차정사각행렬 A에 대해 A(1;2)=(3;1), A(2;-1)=(2;6), A(1;7)=(p;q)일 때, p+q 값.
  category: 선형결합
  tier: star_4
  _step: STEP1
  unit_code: CM1-MX
  mechanism_primary: (1;7) = α(1;2) + β(2;-1) 분해 · A 값
  insight_type: I-EQV
  depth: 2
```

### 유형 06 단위행렬 (#802~#812)

```yaml
- source: 고쟁이-CM1-CH10-STEP1-#802
  page: 211
  problem_summary: |
    행렬 A=(1,-1;3,-2)에 대해 행렬 A^1021 (선택형).
  category: A^3=?E 주기
  tier: star_4
  _step: STEP1
  unit_code: CM1-MX
  mechanism_primary: A^3 = E or -E 확인 · 1021 mod 주기
  insight_type: I-EQV
  depth: 2

- source: 고쟁이-CM1-CH10-STEP1-#803
  page: 211
  problem_summary: |
    행렬 A=(1,2;-1,-1)에 대해 A^80+A^81+A^82와 같은 행렬 (선택형: -3A/-E/A/3E/A+2E).
  category: 주기적 거듭제곱 합
  tier: star_4
  _step: STEP1
  unit_code: CM1-MX
  mechanism_primary: A^4=E 등 · 세 연속 지수 합
  insight_type: I-EQV
  depth: 2

- source: 고쟁이-CM1-CH10-STEP1-#804
  page: 211
  problem_summary: |
    행렬 A=(-1,-1;2,1)에 대해 A^n = E를 만족시키는 두 자리 자연수 n의 최댓값.
  category: 주기 · 최댓값
  tier: star_4
  _step: STEP1
  unit_code: CM1-MX
  mechanism_primary: A의 최소 주기 k · 두 자리 n = k의 배수 중 최대
  insight_type: I-EQV
  depth: 2

- source: 고쟁이-CM1-CH10-STEP1-#805
  page: 211
  problem_summary: |
    행렬 A=(1,-4;2,-1)에 대해 행렬 (A+E)(A²-A+E)의 모든 성분의 합.
  category: 인수분해 A³+E
  tier: star_4
  _step: STEP1
  unit_code: CM1-MX
  mechanism_primary: (A+E)(A²-A+E) = A³+E
  insight_type: I-EQV
  depth: 2
  frequency_mark: 빈출

- source: 고쟁이-CM1-CH10-STEP1-#806
  page: 211
  problem_summary: |
    행렬 A=(-1,3;-1,-1)에 대해 A^6(1;1) = (a;b)일 때, a+b 값.
  category: A^6 · 벡터
  tier: star_4
  _step: STEP1
  unit_code: CM1-MX
  mechanism_primary: A^2 = -2E or 특수 · A^6 = (-2)^3 E
  insight_type: I-EQV
  depth: 2

- source: 고쟁이-CM1-CH10-STEP1-#807
  page: 211
  problem_summary: |
    두 행렬 A=(1,-1;2,3), B=(-2,-1;2,0)에 대해 행렬 A²B - AB²의 가장 작은 성분.
  category: 곱셈 정리 · 최소 성분
  tier: star_4
  _step: STEP1
  unit_code: CM1-MX
  mechanism_primary: AB(A-B) 형태 정리 or 직접 계산
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH10-STEP1-#808
  page: 212
  problem_summary: |
    행렬 A=(x,-2;2,-y)에 대해 (A-2E)(A+2E)=E가 성립할 때, 두 실수 x·y에 대해 x+y의 최솟값 서술.
  category: A²-4E=E 조건 → A²=5E
  tier: star_4
  _step: STEP1
  unit_code: CM1-MX
  mechanism_primary: A² = 5E → 성분 조건 (대각 5·나머지 0)
  insight_type: I-CON
  depth: 2

- source: 고쟁이-CM1-CH10-STEP1-#809
  page: 212
  problem_summary: |
    두 이차정사각행렬 A, B에 대해 A+B=O, AB=2E일 때, A⁴+B⁴ = (a,b;c,d). a+b+c+d 값 (선택형).
  category: A=-B · 곱셈 관계
  tier: star_4
  _step: STEP1
  unit_code: CM1-MX
  mechanism_primary: A+B=O → B=-A · AB=-A²=2E → A²=-2E · A⁴=4E
  insight_type: I-EQV
  depth: 2

- source: 고쟁이-CM1-CH10-STEP1-#810
  page: 212
  problem_summary: |
    두 이차정사각행렬 A, B에 대해 A-B=E, AB=O일 때, A^5-B^5 간단히 하기 (선택형).
  category: 인수분해 · 특수 조건
  tier: star_4
  _step: STEP1
  unit_code: CM1-MX
  mechanism_primary: AB=BA=O 조건 · 이항 전개 없이 A·B 각자 거듭제곱 합
  insight_type: I-EQV
  depth: 2

- source: 고쟁이-CM1-CH10-STEP1-#811
  page: 212
  problem_summary: |
    두 이차정사각행렬 A, B에 대해 A+B=3E, AB=E일 때, A²+B² = kE. 실수 k 값.
  category: A²+B² = (A+B)²-2AB
  tier: star_4
  _step: STEP1
  unit_code: CM1-MX
  mechanism_primary: (A+B)²-2AB = 9E-2E = 7E
  insight_type: I-EQV
  depth: 2

- source: 고쟁이-CM1-CH10-STEP1-#812
  page: 212
  problem_summary: |
    이차정사각행렬 A에 대해 A²=(1,2;-1,a)일 때, 행렬 (A²+A+E)(A²-A+E)의 모든 성분의 합이 37이다. 양수 a 값.
  category: A⁴+A²+E 인수 · 성분 합
  tier: star_4
  _step: STEP1
  unit_code: CM1-MX
  mechanism_primary: (A²+A+E)(A²-A+E) = A⁴+A²+E
  insight_type: I-EQV
  depth: 2
```

### 유형 07 행렬의 연산의 활용 (#813)

```yaml
- source: 고쟁이-CM1-CH10-STEP1-#813
  page: 212
  problem_summary: |
    두 실수 x, y에 대해 x△y를 행렬 (x,y;y,x)라 할 때, 보기 3항 (a△b=b△a / k(a△b)=ka△kb / (a△b)-(c△d)=(a-c)△(b-d)) 중 옳은 것 (선택형).
  category: 새로운 연산 정의 · 성질 판정
  tier: star_4
  _step: STEP1
  unit_code: CM1-MX
  mechanism_primary: 정의 대입 · 각 항 성분 판정
  insight_type: I-MI
  depth: 2
```

---

## 통계 요약

- **총 문항 수**: 47문
- 유형 01 행렬의 뜻: 7문 (#767~#773)
- 유형 02 덧셈·뺄셈·실수배: 5문 (#774~#778)
- 유형 03 곱셈: 9문 (#779~#787)
- 유형 04 곱셈에 대한 성질: 8문 (#788~#795)
- 유형 05 변형과 곱셈: 6문 (#796~#801)
- 유형 06 단위행렬: 11문 (#802~#812)
- 유형 07 연산의 활용: 1문 (#813)

**tier 분포**: star_3 = 12문 · star_3·4 = 25문 · star_4 = 10문

**빈출**: #767·#776·#783·#791·#795·#805

**주요 mechanism**: 성분 정의·서로 같은 행렬 (연립)·거듭제곱 (대각·삼각·주기)·교환법칙 성립 조건 (AB=BA)·인수분해 (A²-B², A³+E 등)·특수 관계 (A+B=O, AB=E 등)·선형결합

**연관 파일**: `bank/mechanism-데이터-고쟁이-CM1-CH10-행렬.md` (STEP 2·3)
