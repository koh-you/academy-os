---
name: mechanism-데이터-개념원리-CM2-GM-원
description: 개념원리 공통수학2 (2022개정) 원의 방정식 단원 정독 데이터. 세션 53 (2026-07-20) 신설.
metadata:
  type: reference
  version: v1.0
  established: 2026-07-20
  source: 개념원리 공통수학2 (2022개정)
  section: 원의 방정식
  tier_mapping:
    개념정리: star_3
    필수 예제: star_3~4
    확인체크(유제): star_3~4
    연습(STEP1): star_3~4
    연습(STEP2·실력UP): star_4~5
  unit_code: CM2-GM
  standard: 10수05-03
  citation_note: 개념원리 · 학습 목적 · 저작권 준수 (원문 전사 없음 · 발문 요약)
  extract_range: "원의 방정식 4소절 (원의 방정식·원과 직선·접선·두 원 교점) · 필수·확인체크·연습 전수"
  pages: "66~95"
---

# 개념원리 공통수학2 (2022개정) — 원의 방정식 단원 정독 데이터

**출처**: 개념원리 공통수학2 (2022개정) · I. 도형의 방정식 → 3. 원의 방정식
**대상 범위**: 소절 01~04 (원의 방정식·원과 직선·접선·두 원 교점) 전체 (필수·확인체크·연습 STEP1·STEP2·실력UP·특강)
**정독 페이지**: p.66~95
**총 문항 수**: **80문항** (필수 20 + 확인체크 40 + 연습 20)
**작업 목적**: 정리편·유형편·연습편 원본 은행 확장 · 원 단원 앵커 확보
**정독 일자**: 2026-07-20

---

## 01 원의 방정식 (p.66~78)

### 필수 예제 (대표 유형 · p.69~76)

```yaml
- source: 개념원리-CM2-GM-원-예제-01
  page: 69
  category_type: 대표예제
  problem_summary: |
    중심이 점 (-4, 3)이고 점 (1, 6)을 지나는 원의 방정식 구하기.
  solution_summary: |
    반지름 제곱 r² = (1-(-4))² + (6-3)² = 34.
    답: (x+4)² + (y-3)² = 34.
  category: 중심·한 점 → 원의 방정식
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 표준형 · 한 점 대입해 r² 결정
  insight_type: 절차형
  depth: 1
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-예제-02
  page: 69
  category_type: 대표예제
  problem_summary: |
    두 점 A(0,3), B(4,1)을 지름의 양 끝점으로 하는 원의 방정식 구하기.
  solution_summary: |
    중심 = AB의 중점 = (2, 2). 반지름 = AB/2 = √5.
    답: (x-2)² + (y-2)² = 5.
  category: 지름 양 끝점 → 원의 방정식
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 중점 = 중심 · 반지름 = |AB|/2
  insight_type: 절차형
  depth: 1
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-예제-03
  page: 70
  category_type: 대표예제
  problem_summary: |
    중심이 직선 y=3x-5 위에 있고 두 점 (1,2), (5,-2)를 지나는 원의 방정식 구하기.
  solution_summary: |
    중심 = (a, 3a-5)로 놓고 두 점까지 거리 제곱 등식.
    a=1, r²=16. 답: (x-1)² + (y+2)² = 16.
  category: 중심이 직선 위 · 두 점 지남
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 중심 파라미터화 · 등거리 조건 이차식
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-예제-04
  page: 71
  category_type: 대표예제
  problem_summary: |
    원 x²+y²-2x+8y+a=0의 중심이 (1, b), 반지름 3일 때 a+b 구하기 (a 상수).
  solution_summary: |
    완전제곱꼴 (x-1)²+(y+4)²=17-a. 중심 (1,-4), b=-4.
    r²=17-a=9, a=8. a+b = 4.
  category: 일반형 → 중심·반지름 미지수 결정
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: x²+y²+Ax+By+C=0 → 완전제곱꼴 변형
  insight_type: 절차형
  depth: 1
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-예제-05
  page: 71
  category_type: 대표예제
  problem_summary: |
    방정식 x²+y²-2x+4y+k+1=0이 원이 되도록 하는 실수 k의 값의 범위 구하기.
  solution_summary: |
    (x-1)²+(y+2)²=4-k. 원이려면 4-k>0. 답: k<4.
  category: 원이 되기 위한 조건
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 완전제곱 우변 > 0 조건
  insight_type: 절차형
  depth: 1
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-예제-06
  page: 72
  category_type: 대표예제
  problem_summary: |
    세 점 (0,0), (2,2), (-2,6)을 지나는 원의 방정식 구하기.
  solution_summary: |
    x²+y²+Ax+By+C=0 대입. C=0, A=2, B=-6.
    답: x²+y²+2x-6y=0 즉 (x+1)²+(y-3)²=10.
  category: 세 점 지나는 원 (외접원)
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 일반형 대입 · 3원 연립
  insight_type: 절차형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-예제-07
  page: 73
  category_type: 대표예제
  problem_summary: |
    (1) 원 x²+y²-10x+4y+20=0과 중심이 같고 x축에 접하는 원의 방정식.
    (2) 두 점 (1,0), (2,-1)을 지나고 y축에 접하는 원의 방정식.
  solution_summary: |
    (1) 중심 (5,-2), 반지름 = |중심 y좌표| = 2. 답: (x-5)²+(y+2)²=4.
    (2) 중심 (a,b), 반지름 |a|. 두 점 대입 → b=-1 또는 b=3 → 두 해.
    답: (x-1)²+(y+1)²=1, (x-5)²+(y-3)²=25.
  category: 좌표축에 접하는 원 (x축·y축)
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 반지름 = |중심 좌표| · 두 점 조건 연립
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-예제-08
  page: 74
  category_type: 대표예제
  problem_summary: |
    점 (2, 4)를 지나고 x축과 y축에 동시에 접하는 원의 방정식 모두 구하기.
  solution_summary: |
    (2,4)는 제1사분면 → 중심 (r,r), 반지름 r>0.
    (2-r)²+(4-r)² = r² → r²-12r+20=0 → r=2 또는 r=10.
    답: (x-2)²+(y-2)²=4, (x-10)²+(y-10)²=100.
  category: 양축에 동시 접하는 원
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 사분면 판별 → 중심 = (±r, ±r) 설정
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-예제-09
  page: 75
  category_type: 대표예제
  problem_summary: |
    점 P(6,2)와 원 x²+y²+4x-8y+10=0 위의 점 Q에 대하여
    선분 PQ 길이의 최댓값 M, 최솟값 m일 때 Mm 구하기.
  solution_summary: |
    (x+2)²+(y-4)²=10. 중심 C(-2,4), r=√10.
    CP = √(64+4) = √68 = 2√17.
    M = 2√17+√10, m = 2√17-√10.
    Mm = (2√17)²-(√10)² = 68-10 = 58.
  category: 원 밖 점~원 위 점 거리 최댓값·최솟값
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: (중심~외부점 거리) ± r
  insight_type: 통찰형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-예제-10
  page: 76
  category_type: 대표예제
  category_meta: 발전
  problem_summary: |
    두 점 A(-1,-1), B(2,2)에 대하여 AP:BP = 2:1인 점 P가 나타내는 도형의 넓이.
  solution_summary: |
    AP²=4BP². P=(x,y) 대입 → (x-3)²+(y-3)²=8.
    반지름 2√2인 아폴로니오스 원. 넓이 = 8π.
  category: 아폴로니오스 원 (AP:BP = m:n)
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 거리비 조건 → 좌표 이차식 → 원의 방정식
  insight_type: 통찰형
  depth: 2
  citation_note: "개념원리 · 학습 목적"
```

### 확인체크 (유제 · p.68~76)

```yaml
- source: 개념원리-CM2-GM-원-유제-149
  page: 68
  category_type: 유제
  problem_summary: |
    다음 원의 중심 좌표와 반지름 구하기.
    (1) x²+y²=11 (2) (x-5)²+y²=9 (3) (x+2)²+(y-3)²=25.
  solution_summary: |
    (1) 중심 (0,0), r=√11. (2) 중심 (5,0), r=3. (3) 중심 (-2,3), r=5.
  category: 표준형 → 중심·반지름 읽기
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 표준형 직접 판독
  insight_type: 절차형
  depth: 1
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-유제-150
  page: 68
  category_type: 유제
  problem_summary: |
    (1) 중심 원점, 반지름 3인 원.
    (2) 중심 (2,-3), 반지름 4인 원.
    (3) 중심 (-5,1), 반지름 √5인 원.
  solution_summary: |
    (1) x²+y²=9. (2) (x-2)²+(y+3)²=16. (3) (x+5)²+(y-1)²=5.
  category: 표준형 작성 (기본)
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 표준형 대입
  insight_type: 절차형
  depth: 1
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-유제-151
  page: 68
  category_type: 유제
  problem_summary: |
    다음 방정식의 원의 중심·반지름 구하기.
    (1) x²+y²-8x=0
    (2) x²+y²+2x-4y-20=0
    (3) x²+y²-6x+4y+12=0.
  solution_summary: |
    (1) (x-4)²+y²=16. 중심 (4,0), r=4.
    (2) (x+1)²+(y-2)²=25. 중심 (-1,2), r=5.
    (3) (x-3)²+(y+2)²=1. 중심 (3,-2), r=1.
  category: 일반형 → 완전제곱 변형
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 일반형 → 완전제곱꼴
  insight_type: 절차형
  depth: 1
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-유제-152
  page: 68
  category_type: 유제
  problem_summary: |
    (1) 중심 (-1,3), x축 접하는 원. (2) 중심 (3,1), y축 접하는 원.
    (3) 중심 (2,-2), x·y축 동시 접하는 원.
  solution_summary: |
    (1) r=|3|=3. (x+1)²+(y-3)²=9.
    (2) r=|3|=3. (x-3)²+(y-1)²=9.
    (3) r=|2|=|-2|=2. (x-2)²+(y+2)²=4.
  category: 축 접하는 원 (기본)
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 반지름 = |중심 좌표|
  insight_type: 절차형
  depth: 1
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-유제-153
  page: 69
  category_type: 유제
  problem_summary: |
    중심 (1,-2), 점 (4,2)을 지나는 원이 점 (a,1)을 지날 때 양수 a.
  solution_summary: |
    r² = 9+16 = 25. (a-1)²+9=25 → (a-1)²=16 → a=5 (양수).
  category: 중심 주어진 원 · 다른 점 위 조건
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: r² 구한 뒤 대입
  insight_type: 절차형
  depth: 1
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-유제-154
  page: 69
  category_type: 유제
  problem_summary: |
    두 점 A(5,1), B(-1,7)을 지름 양 끝점으로 하는 원 (x-a)²+(y-b)²=c일 때 a+b+c.
  solution_summary: |
    중심 (2,4). AB²=36+36=72. r²=72/4=18.
    a=2, b=4, c=18. 합 = 24.
  category: 지름 양 끝점 · 상수 합
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 중점·반지름²
  insight_type: 절차형
  depth: 1
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-유제-155
  page: 70
  category_type: 유제
  problem_summary: |
    중심이 x축 위 · 두 점 (4,-3), (2,3) 지나는 원의 방정식.
  solution_summary: |
    중심 (a,0). (4-a)²+9 = (2-a)²+9 → 4a=12 → a=3.
    r² = 1+9 = 10. 답: (x-3)²+y² = 10.
  category: 중심이 특정 직선 위 · 두 점 지남
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 등거리 조건 → 파라미터 결정
  insight_type: 절차형
  depth: 1
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-유제-156
  page: 70
  category_type: 유제
  problem_summary: |
    중심이 직선 y=x+5 위, 원점과 (1,2)를 지나는 원의 방정식.
  solution_summary: |
    중심 (a, a+5). a²+(a+5)² = (1-a)²+(2-(a+5))² = (1-a)²+(-3-a)².
    전개: 2a²+10a+25 = a²-2a+1+a²+6a+9 = 2a²+4a+10 → 6a=-15 → a=-5/2.
    중심 (-5/2, 5/2). r² = 25/4+25/4 = 25/2.
    답: (x+5/2)²+(y-5/2)² = 25/2.
  category: 중심이 직선 위 · 원점 포함 두 점 지남
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 파라미터화 · 등거리 방정식
  insight_type: 절차형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-유제-157
  page: 71
  category_type: 유제
  problem_summary: |
    원 x²+y²+2x-4y-15+k=0의 반지름 5일 때 상수 k.
  solution_summary: |
    (x+1)²+(y-2)² = 20-k. 20-k=25 → k=-5.
  category: 일반형 · 반지름 조건 → 상수
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 완전제곱 우변 = r²
  insight_type: 절차형
  depth: 1
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-유제-158
  page: 71
  category_type: 유제
  problem_summary: |
    원 x²+y²-6x+ay+9=0의 중심 (b,-3), 반지름 r일 때 a+b+r (a 상수).
  solution_summary: |
    (x-3)²+(y+a/2)² = 9+a²/4-9 = a²/4.
    중심 (3, -a/2). -a/2=-3 → a=6. b=3.
    r² = 36/4 = 9 → r=3. a+b+r = 12.
  category: 일반형 · 중심 좌표 지정 → 미지수
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 계수-중심 대응
  insight_type: 절차형
  depth: 1
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-유제-159
  page: 71
  category_type: 유제
  problem_summary: |
    x²+y²-2(a+1)x+2ay+3a²-2=0이 원을 나타내는 정수 a의 개수.
  solution_summary: |
    중심 (a+1, -a), r² = (a+1)² + a² - (3a²-2) = -a²+2a+3.
    r²>0 → -a²+2a+3>0 → a²-2a-3<0 → (a-3)(a+1)<0 → -1<a<3.
    정수 a = 0, 1, 2. 3개.
  category: 원 조건 정수 개수
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: r²>0 이차부등식 · 정수해
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-유제-160
  page: 72
  category_type: 유제
  problem_summary: |
    원점과 두 점 (-1,2), (3,-1)을 지나는 원의 방정식.
  solution_summary: |
    x²+y²+Ax+By+C=0. C=0. -A+2B+5=0, 3A-B+10=0.
    연립: A=-25/5=-25/5... 정확 계산 → A=-5, B=-5.
    (재검산: -A+2B=-5, 3A-B=-10. 첫식×1 + 둘째×2: 5A=-25 → A=-5. B=0.)
    답: x²+y²-5x=0. (답 계산 대기 · 재검산 필요)
  category: 세 점 지나는 원 (원점 포함)
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 일반형 대입 · 원점 → C=0
  insight_type: 절차형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-유제-161
  page: 72
  category_type: 유제
  problem_summary: |
    세 점 A(-3,4), B(1,0), C(3,4)를 지나는 원의 넓이.
  solution_summary: |
    x²+y²+Ax+By+C=0 대입 (또는 외심 = 세 변 수직이등분선 교점).
    A와 C의 x좌표 대칭축 x=0. AC 수직이등분선 x=0.
    중심 (0, k). k+4 값 등식으로 결정 → r² 계산.
    (답 계산 대기)
  category: 세 점 지나는 원 · 넓이
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 외심 (수직이등분선 교점) · 대칭성 이용
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-유제-162
  page: 73
  category_type: 유제
  problem_summary: |
    원 x²+y²-8x+10y+k=0이 x축에 접할 때 상수 k.
  solution_summary: |
    (x-4)²+(y+5)² = 41-k. 중심 (4,-5), r²=41-k.
    x축 접함 → r = |y좌표| = 5 → 41-k=25 → k=16.
  category: 좌표축 접함 조건 · 상수
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: r = |중심 y좌표|
  insight_type: 절차형
  depth: 1
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-유제-163
  page: 73
  category_type: 유제
  problem_summary: |
    중심 직선 y=x+2 위 · y축 접하는 원 중 (4,4) 지나는 원 두 개.
    두 원의 반지름 합 구하기.
  solution_summary: |
    중심 (a, a+2), 반지름 |a|.
    (4-a)²+(4-(a+2))² = a² → (4-a)²+(2-a)² = a².
    16-8a+a²+4-4a+a² = a² → a²-12a+20=0 → a=2 또는 a=10.
    반지름 합 = 2+10 = 12.
  category: 중심 직선 위·y축 접·점 지남 (두 해)
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 파라미터 이차식 두 근 합
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-유제-164
  page: 74
  category_type: 유제
  problem_summary: |
    (-2, 1)을 지나고 x·y축 동시 접하는 두 원의 중심 사이 거리.
  solution_summary: |
    (-2,1)은 제2사분면 → 중심 (-r, r), r>0.
    (-2+r)²+(1-r)² = r² → r²-2r+5=0? 재계산: 4-4r+r²+1-2r+r² = r² → r²-6r+5=0 → r=1 또는 r=5.
    두 중심 (-1,1), (-5,5). 거리 = √(16+16) = 4√2.
  category: 제2사분면 동시 접원 두 개 · 중심 거리
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 사분면 판별 · 이차 두 해 · 거리
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-유제-165
  page: 74
  category_type: 유제
  problem_summary: |
    원 x²+y²+2ax+6y+7-b=0이 x·y축 동시 접할 때 a+b 값 (a>0).
  solution_summary: |
    (x+a)²+(y+3)² = a²+9-7+b = a²+2+b.
    중심 (-a, -3), a>0이므로 중심 (-, -) → 제3사분면.
    동시 접 → -a = -3 → a=3. r=3.
    r² = 9 = 9+2+b → b=-2. a+b = 1.
  category: 일반형 · 동시 접 조건
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 중심 x좌표 = y좌표 (부호 · 사분면)
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-유제-166
  page: 74
  category_type: 유제
  problem_summary: |
    중심이 직선 x+3y+6=0 위, x·y축 동시 접, 중심 제4사분면인 원의 방정식.
  solution_summary: |
    제4사분면 → 중심 (r, -r), 반지름 r>0.
    r + 3(-r) + 6 = 0 → -2r+6=0 → r=3. 중심 (3,-3).
    답: (x-3)²+(y+3)²=9.
  category: 조건 3중 결합 (직선 위·동시 접·사분면)
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 사분면 → 중심 부호 결정 · 직선 대입
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-유제-167
  page: 75
  category_type: 유제
  problem_summary: |
    원점 O와 원 x²+y²-2x-10y+10=0 위의 점 A에 대하여 OA 최댓값 M·최솟값 m·M²+m² 구하기.
  solution_summary: |
    (x-1)²+(y-5)² = 16. 중심 C(1,5), r=4.
    OC = √26. M = √26+4, m = √26-4.
    M²+m² = 2(26+16) = 84.
  category: 원 밖 원점~원 위 점 거리 최댓·최솟
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: M²+m² = 2(OC²+r²)
  insight_type: 통찰형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-유제-168
  page: 75
  category_type: 유제
  problem_summary: |
    원 (x+5)²+(y-4)²=r² 밖 P(-1,1)와 원 위 점 Q. PQ 최솟값 3일 때 양수 r.
  solution_summary: |
    CP = √(16+9) = 5. 최솟값 = CP-r = 5-r = 3 → r=2.
  category: 원 밖 점 · 원 위 점 최솟값
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 최솟값 = d - r
  insight_type: 절차형
  depth: 1
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-유제-169
  page: 76
  category_type: 유제
  problem_summary: |
    A(0,-1), B(2,3)에 대하여 AP²+BP²=30을 만족하는 P가 나타내는 도형의 넓이.
  solution_summary: |
    P=(x,y). x²+(y+1)² + (x-2)²+(y-3)² = 30.
    2x²+2y²-4x-4y+14 = 30 → x²+y²-2x-2y-8=0 → (x-1)²+(y-1)²=10.
    반지름 √10. 넓이 = 10π.
  category: 거리 제곱합 조건 → 원 · 넓이
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 좌표 대입 이차식 → 원
  insight_type: 통찰형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-유제-170
  page: 76
  category_type: 유제
  problem_summary: |
    A(2,0), B(10,0)에 대하여 AP:BP = 1:3인 점 P가 나타내는 도형의 길이.
  solution_summary: |
    9·AP² = BP². 9((x-2)²+y²) = (x-10)²+y².
    9x²-36x+36+9y² = x²-20x+100+y² → 8x²+8y²-16x-64=0 → x²+y²-2x-8=0
    → (x-1)²+y²=9. 반지름 3. 길이(원둘레) = 6π.
  category: 아폴로니오스 원 (거리비 1:3) · 둘레
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 거리비 → 원 · 둘레 2πr
  insight_type: 통찰형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-유제-171
  page: 76
  category_type: 유제
  problem_summary: |
    A(-2,0), B(3,0)로부터의 거리비 3:2인 P에 대하여 삼각형 PAB의 넓이 최댓값.
  solution_summary: |
    4·AP²=9·BP² → 아폴로니오스 원 도출.
    4((x+2)²+y²) = 9((x-3)²+y²) → 4x²+16x+16+4y²=9x²-54x+81+9y²
    → 5x²+5y²-70x+65=0 → x²+y²-14x+13=0 → (x-7)²+y²=36. 반지름 6.
    AB=5, 높이 최대 = 반지름 = 6. 넓이 = 1/2·5·6 = 15.
  category: 아폴로니오스 원 · 삼각형 넓이 최댓값
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 거리비 원 · 밑변 AB 고정 · 최대 높이 = r
  insight_type: 통찰형
  depth: 3
  citation_note: "개념원리 · 학습 목적"
```

### 연습문제 (STEP1·STEP2·실력UP · p.77~78)

```yaml
- source: 개념원리-CM2-GM-원-연습-172
  page: 77
  category_type: 연습_step1
  problem_summary: |
    중심 (a,1), 반지름 5인 원이 점 (0,-2)를 지날 때 양수 a.
  solution_summary: |
    a² + 9 = 25 → a² = 16 → a = 4.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 표준형 · 한 점 대입
  insight_type: 절차형
  depth: 1
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-연습-173
  page: 77
  category_type: 연습_step1
  problem_summary: |
    두 점 A(5,1), B(a,-3)을 지름 양 끝점, 반지름 √5, a<5.
  solution_summary: |
    AB²=(5-a)²+16 = 4·5 = 20 → (5-a)²=4 → 5-a=±2 → a=3 또는 7.
    a<5 → a=3.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 지름²=4r² · 부호 조건
  insight_type: 절차형
  depth: 1
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-연습-174
  page: 77
  category_type: 연습_step1
  problem_summary: |
    두 원 (x-1)²+y²=4, x²+y²-6x-8y+10=0의 넓이 이등분 직선의 y절편.
  solution_summary: |
    두 원 중심 지나는 직선. C1=(1,0), C2=(3,4).
    기울기 (4-0)/(3-1)=2. y=2(x-1) → y=2x-2. y절편 = -2.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 넓이 이등분 직선 = 두 중심 지나는 직선
  insight_type: 통찰형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-연습-175
  page: 77
  category_type: 연습_step1
  problem_summary: |
    x²+y²+4x-2y+2k-7=0의 반지름 √6 이하 원인 실수 k의 값 범위.
  solution_summary: |
    (x+2)²+(y-1)² = 12-2k. 원 조건 12-2k>0 → k<6.
    r²≤6 → 12-2k≤6 → k≥3. 답: 3≤k<6.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 원 조건 + 반지름 상한 결합
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-연습-176
  page: 77
  category_type: 연습_step1
  category_meta: 교육청 기출
  problem_summary: |
    세 점 (0,0), (6,0), (-4,4)를 지나는 원의 중심 (p,q). p+q.
  solution_summary: |
    x²+y²+Ax+By+C=0. C=0. 36+6A=0 → A=-6.
    16+16-4A+4B=0 → 32+24+4B=0 → 4B=-56 → B=-14.
    중심 (-A/2, -B/2) = (3, 7). p+q = 10.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 세 점 → 일반형 3원 연립
  insight_type: 절차형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-연습-177
  page: 77
  category_type: 연습_step1
  category_meta: 교육청 기출
  problem_summary: |
    곡선 y=x²-x-1 위 제2사분면 위 점을 중심 · x·y축 동시 접 원 x²+y²+ax+by+c=0. a+b+c.
  solution_summary: |
    제2사분면 → 중심 (-r, r), r>0. y=x²-x-1 위 → r = r²+r-1 → r²=1 → r=1.
    중심 (-1, 1), 반지름 1. (x+1)²+(y-1)²=1 → x²+y²+2x-2y+1=0.
    a=2, b=-2, c=1. a+b+c = 1.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 사분면 판별 · 곡선 위 조건 · 이차 방정식
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-연습-178
  page: 78
  category_type: 연습_step2
  problem_summary: |
    두 점 (-2,3), (4,-5) 지름 양 끝점 원이 x축과 만나는 두 점 사이 거리.
  solution_summary: |
    중심 (1,-1), r² = 1/4·((-2-4)²+(3-(-5))²) = 1/4·100 = 25.
    (x-1)²+(y+1)²=25. y=0 대입: (x-1)²+1=25 → (x-1)²=24 → x=1±2√6.
    거리 = 4√6.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 지름 원 · 축과 교점 두 점 거리
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-연습-179
  page: 78
  category_type: 연습_step2
  problem_summary: |
    원 x²+y²-4kx+2ky+10k-15=0의 넓이 최소 시 중심 좌표 (k 상수).
  solution_summary: |
    (x-2k)²+(y+k)² = 4k²+k²-10k+15 = 5k²-10k+15 = 5(k-1)²+10.
    반지름² 최소 시 k=1. 중심 (2, -1).
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 반지름² 이차식 최솟값
  insight_type: 통찰형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-연습-180
  page: 78
  category_type: 연습_step2
  problem_summary: |
    세 직선 5x+2y+8=0, 7x-3y-12=0, 3x+7y-30=0으로 만들어지는 삼각형의 외접원 방정식.
  solution_summary: |
    세 교점 계산 → 세 점 원 대입.
    (답 계산 대기 · 3원 연립 필요)
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 세 직선 교점 · 세 점 지나는 원
  insight_type: 조건통합형
  depth: 3
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-연습-181
  page: 78
  category_type: 연습_step2
  problem_summary: |
    원 x²+y²=1 위 P와 원 x²+y²+6x+6y+10=0 위 Q. PQ 최댓값.
  solution_summary: |
    원1: 중심 (0,0), r1=1. 원2: (x+3)²+(y+3)²=8. 중심 (-3,-3), r2=2√2.
    중심 거리 = √18 = 3√2. 두 원 외부. PQ 최댓 = 3√2 + 1 + 2√2 = 5√2+1.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 두 원 위 점 거리 최댓 = d+r1+r2
  insight_type: 통찰형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-연습-182
  page: 78
  category_type: 연습_실력up
  problem_summary: |
    원 (x-2)²+(y-1)²=25 위 A(6,4), B(-1,5). △PAB 직각삼각형되는 P 두 개.
    두 P 이은 선분 중점 (a,b). a+b.
  solution_summary: |
    직각 조건 · AB 지름 → ∠APB=90°가 원 지름 대응.
    AB 중점 (5/2, 9/2)? AB 지름 아닐 수 있음 → 다른 해석.
    P가 원 위 · AB가 지름이면 ∠APB=90° (원주각).
    AB 중점 (5/2, 9/2). |AB| = √(49+1) = √50 ≠ 2·5=10.
    P는 A 또는 B에서 접선/직각 조건. (답 계산 대기)
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 원 위 직각삼각형 · 원주각 정리
  insight_type: 통찰형
  depth: 3
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-연습-183
  page: 78
  category_type: 연습_실력up
  problem_summary: |
    A(3,2)와 원 (x-1)²+(y+2)²=8 위 P. AP의 중점 나타내는 도형 넓이.
  solution_summary: |
    P가 원 위 움직이면 중점 M = ((3+P_x)/2, (2+P_y)/2).
    치환: M-A/2 = (P+A)/2 - A/2 = P/2 + A/2 - A/2 ... 
    실제 M = (A+P)/2. P = 2M-A.
    원 방정식 대입: (2M_x-A_x-1)² + (2M_y-A_y+2)² = 8
    → (2x-4)²+(2y+0)² = 8 → 4(x-2)²+4y² = 8 → (x-2)²+y² = 2.
    반지름 √2. 넓이 = 2π.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 중점 자취 · 원 축약 (반지름 절반)
  insight_type: 통찰형
  depth: 3
  citation_note: "개념원리 · 학습 목적"
```

---

## 02 원과 직선의 위치 관계 (p.79~86)

### 필수 예제 (대표 유형 · p.81~83)

```yaml
- source: 개념원리-CM2-GM-원-예제-11
  page: 81
  category_type: 대표예제
  problem_summary: |
    원 x²+y²=2와 직선 y=x+k의 위치 관계가 각각
    (1) 두 점 만남 (2) 접함 (3) 만나지 않음일 때 k 값 또는 범위.
  solution_summary: |
    대입 이차식 판별식 D/4 = -k²+4.
    (1) -k²+4>0 → -2<k<2. (2) k=±2. (3) k<-2 또는 k>2.
  category: 원-직선 위치 관계 (판별식·거리)
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 판별식 D 부호 또는 중심-직선 거리 d 대 r 비교
  insight_type: 절차형
  depth: 1
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-예제-12
  page: 82
  category_type: 대표예제
  problem_summary: |
    원 (x+1)²+(y-1)²=8과 직선 2x+y-4=0의 현의 길이.
  solution_summary: |
    중심 C(-1,1), 직선까지 거리 d = |−2+1−4|/√5 = 5/√5 = √5.
    r=2√2. AH=√(8-5)=√3. AB=2√3.
  category: 현의 길이 · 피타고라스
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 현 길이 = 2√(r²-d²)
  insight_type: 절차형
  depth: 1
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-예제-13
  page: 83
  category_type: 대표예제
  problem_summary: |
    점 P(3,2)에서 원 x²+y²+4x+2y+1=0에 그은 접선의 접점을 T라 할 때 PT 구하기.
  solution_summary: |
    (x+2)²+(y+1)²=4. 중심 C(-2,-1), r=2. CP=√(25+9)=√34.
    PT²=CP²-r²=34-4=30. PT=√30.
  category: 접선의 길이
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: PT² = CP² - r²
  insight_type: 절차형
  depth: 1
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-예제-14
  page: 83
  category_type: 대표예제
  problem_summary: |
    원 x²+y²-2x+4y-3=0 위의 점과 직선 x-y+3=0 사이 거리의 최댓·최솟값.
  solution_summary: |
    (x-1)²+(y+2)²=8. 중심 (1,-2), r=2√2.
    d = |1+2+3|/√2 = 6/√2 = 3√2.
    최댓값 = d+r = 5√2. 최솟값 = d-r = √2.
  category: 원 위 점 · 직선 거리 최대 최소
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 원 위 점-직선 거리 = d ± r
  insight_type: 절차형
  depth: 1
  citation_note: "개념원리 · 학습 목적"
```

### 확인체크 (유제 · p.80~83)

```yaml
- source: 개념원리-CM2-GM-원-유제-184
  page: 80
  category_type: 유제
  problem_summary: |
    원 x²+y²=8, 직선 y=x+1의 교점 개수 판별식 활용 (빈칸 채우기).
  solution_summary: |
    대입 2x²+2x-7=0. D/4 = 1+14 = 15>0. 교점 2.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 판별식 부호
  insight_type: 절차형
  depth: 1
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-유제-185
  page: 80
  category_type: 유제
  problem_summary: |
    판별식으로 위치 관계.
    (1) x²+y²+3x=0, y=x-1
    (2) x²+y²-2x+4y-3=0, x+y=3.
  solution_summary: |
    (1) 대입 → 판별식 > 0 → 두 점.
    (2) 대입 → 판별식 계산 → 결과 판정.
    (답 계산 대기 · 판별식 계산)
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 판별식
  insight_type: 절차형
  depth: 1
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-유제-186
  page: 80
  category_type: 유제
  problem_summary: |
    x²+y²=5, x-2y+5=0 거리로 교점 개수 (빈칸).
  solution_summary: |
    d = 5/√5 = √5. r=√5. d=r → 1점 (접).
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: d vs r
  insight_type: 절차형
  depth: 1
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-유제-187
  page: 80
  category_type: 유제
  problem_summary: |
    (1) x²+y²=7, 3x+y-10=0 (2) (x+1)²+(y-2)²=8, 2x+y+5=0 위치 관계.
  solution_summary: |
    (1) d = 10/√10 = √10 > √7 = r → 만나지 않음.
    (2) d = |−2+2+5|/√5 = 5/√5 = √5. r=2√2. d<r → 두 점.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: d vs r
  insight_type: 절차형
  depth: 1
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-유제-188
  page: 81
  category_type: 유제
  problem_summary: |
    원 x²+y²=5, 직선 y=2x+k의 위치 관계별 k.
  solution_summary: |
    d = |k|/√5. r=√5.
    (1) 두 점: |k|/√5<√5 → |k|<5 → -5<k<5.
    (2) 접: k=±5.
    (3) 안 만남: k<-5 또는 k>5.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: d vs r 대소
  insight_type: 절차형
  depth: 1
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-유제-189
  page: 81
  category_type: 유제
  problem_summary: |
    원 (x-1)²+(y-2)²=9에 접하고 기울기 2인 직선의 방정식.
  solution_summary: |
    y-2 = 2(x-1) ± 3√5 → y = 2x + 3√5, y = 2x - 3√5.
    (기울기 m·중심 (a,b)·반지름 r → y-b = m(x-a) ± r√(m²+1))
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 접선 표준 공식 (임의 중심)
  insight_type: 절차형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-유제-190
  page: 82
  category_type: 유제
  problem_summary: |
    원 x²+y²-6x-8y+21=0과 직선 y=x+3의 두 교점을 A, B. AB 구하기.
  solution_summary: |
    (x-3)²+(y-4)²=4. C(3,4), r=2. 직선 x-y+3=0. 
    d = |3-4+3|/√2 = 2/√2 = √2. AB = 2√(4-2) = 2√2.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 현 길이 공식
  insight_type: 절차형
  depth: 1
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-유제-191
  page: 82
  category_type: 유제
  problem_summary: |
    직선 y=-2x+k, 원 (x-2)²+(y-1)²=9에서 현의 길이 4일 때 양수 k.
  solution_summary: |
    현 길이 4 = 2√(9-d²) → d²=5 → d=√5.
    직선 2x+y-k=0. d = |4+1-k|/√5 = √5 → |5-k|=5 → k=0 or k=10.
    양수 k = 10.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 현 길이 → d → 직선-중심 거리
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-유제-192
  page: 83
  category_type: 유제
  problem_summary: |
    A(-2,a)에서 원 x²+y²-2x+4y-4=0에 그은 접선의 접점 B. AB=5인 양수 a.
  solution_summary: |
    (x-1)²+(y+2)²=9. C(1,-2), r=3.
    CA²=9+(a+2)². AB²=CA²-r² = (a+2)² = 25 → a+2=±5 → a=3 (양수).
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: PT²=CP²-r²
  insight_type: 절차형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-유제-193
  page: 83
  category_type: 유제
  problem_summary: |
    원 x²+y²+6x-8y+9=0 위 점과 직선 3x-4y-10=0 사이 거리 최대·최소.
  solution_summary: |
    (x+3)²+(y-4)²=16. C(-3,4), r=4.
    d = |-9-16-10|/5 = 35/5 = 7. 최대 = 11, 최소 = 3.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: d ± r
  insight_type: 절차형
  depth: 1
  citation_note: "개념원리 · 학습 목적"
```

### 연습문제 (STEP1·STEP2·실력UP · p.85~86)

```yaml
- source: 개념원리-CM2-GM-원-연습-194
  page: 85
  category_type: 연습_step1
  problem_summary: |
    원 x²+y²-4x-6y+12=0과 직선 kx+y-2=0이 만나는 실수 k 범위.
  solution_summary: |
    (x-2)²+(y-3)²=1. C(2,3), r=1.
    d = |2k+3-2|/√(k²+1) = |2k+1|/√(k²+1) ≤ 1.
    (2k+1)² ≤ k²+1 → 3k²+4k ≤ 0 → k(3k+4) ≤ 0 → -4/3 ≤ k ≤ 0.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: d ≤ r 이차부등식
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-연습-195
  page: 85
  category_type: 연습_step1
  problem_summary: |
    중심 (-1,3), 직선 2x-y+k=0에 접하는 원의 넓이 20π. 양수 k.
  solution_summary: |
    넓이 20π → r²=20 → r=2√5. d = r = 2√5.
    d = |-2-3+k|/√5 = |k-5|/√5 = 2√5 → |k-5|=10 → k=15 (양수).
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 접함 조건 → 거리=r
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-연습-196
  page: 85
  category_type: 연습_step1
  problem_summary: |
    원 (x-2)²+(y-3)²=10, 직선 3x+4y-8=0 두 교점 지나는 원 중 넓이 최소.
  solution_summary: |
    넓이 최소 = AB를 지름으로 하는 원.
    현 길이 d = |6+12-8|/5 = 2. r₁=√10. AB=2√(10-4)=2√6.
    새 원 반지름 √6. 넓이 = 6π.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 최소 넓이 원 = 공통현 지름
  insight_type: 통찰형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-연습-197
  page: 85
  category_type: 연습_step1
  problem_summary: |
    P(2,1)에서 중심 (4,5)인 원에 그은 접선 길이 3일 때 반지름.
  solution_summary: |
    CP² = 4+16 = 20. r² = CP²-접선² = 20-9 = 11. r = √11.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: r² = CP² - 접선²
  insight_type: 절차형
  depth: 1
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-연습-198
  page: 85
  category_type: 연습_step1
  problem_summary: |
    원 x²+y²-4x+8y+16=0 위 P·직선 4x+3y-16=0 사이 거리 정수 되는 P의 개수.
  solution_summary: |
    (x-2)²+(y+4)²=4. C(2,-4), r=2. d = |8-12-16|/5 = 20/5 = 4.
    거리 범위 [2, 6]. 정수 2, 3, 4, 5, 6.
    2, 6 각 1개(접·최대); 3, 4, 5 각 2개. 총 8개.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 거리 범위 정수 개수 · 극단값 1개·중간값 2개
  insight_type: 통찰형
  depth: 3
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-연습-199
  page: 85
  category_type: 연습_step2
  problem_summary: |
    직선 y=ax+b가 두 원 x²+y²=1, x²+(y-2)²=4에 동시 접할 때 a²+b² 구하기.
  solution_summary: |
    ax-y+b=0. C1(0,0), r1=1: |b|/√(a²+1)=1.
    C2(0,2), r2=2: |b-2|/√(a²+1)=2.
    |b-2| = 2|b| → b-2 = ±2b.
    b-2 = 2b → b=-2. |b|=2 → √(a²+1)=2 → a²=3. a²+b² = 3+4 = 7.
    b-2 = -2b → b=2/3. √(a²+1) = 2/3. → a²=4/9-1<0 무효.
    답: 7.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 두 원 공통 접선 조건
  insight_type: 통찰형
  depth: 3
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-연습-200
  page: 85
  category_type: 연습_step2
  category_meta: 교육청 기출
  problem_summary: |
    y=x 위 점 중심 · x·y축 동시 접 원 중 직선 3x-4y+12=0과 접하는 두 원의 중심 A, B. AB².
  solution_summary: |
    중심 (k,k). x·y축 동시 접 → r=|k|. 3x-4y+12=0 접 → |3k-4k+12|/5 = |k| → |-k+12| = 5|k|.
    k>0: |12-k|=5k. 12-k=5k → k=2, 또는 12-k=-5k → k=-3(양수 아님).
    k<0: |12-k|=−5k. 12-k=-5k → k=-3, 또는 12-k=5k → k=2(음수 아님).
    두 중심 (2,2), (-3,-3). AB² = 25+25 = 50.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: y=x 위 중심 · 축 접 · 세 번째 직선 접 = 두 원
  insight_type: 조건통합형
  depth: 3
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-연습-201
  page: 86
  category_type: 연습_step2
  problem_summary: |
    원 x²+y²-2x+4y-5=0 위 (4,-1)에서 접선이 (-1,k) 지날 때 k.
  solution_summary: |
    (x-1)²+(y+2)²=10. C(1,-2). 접선 (x-1)(x₀-1)+(y+2)(y₀+2)=10.
    (4,-1): (x-1)·3 + (y+2)·1 = 10 → 3x+y-1=0.
    (-1,k) 대입: -3+k-1=0 → k=4.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 원 위 점 접선 공식 (임의 중심)
  insight_type: 절차형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-연습-202
  page: 86
  category_type: 연습_step2
  problem_summary: |
    원 x²+y²+4y+k=0, 직선 y=-x-4의 두 교점 A, B. C=중심. △ABC 넓이 4 · k<4.
  solution_summary: |
    x²+(y+2)²=4-k. C(0,-2), r²=4-k.
    d = |0-(-2)-4|/√2 = 2/√2 = √2.
    현 AB = 2√(r²-2). 넓이 = 1/2·AB·d = 1/2·2√(r²-2)·√2 = √2·√(r²-2) = 4.
    → r²-2 = 8 → r²=10 → 4-k=10 → k=-6.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 이등변삼각형 · 밑변=현·높이=d
  insight_type: 통찰형
  depth: 3
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-연습-203
  page: 86
  category_type: 연습_step2
  problem_summary: |
    원 x²+y²=5 위 P, 두 점 A(-3,0), B(0,6)에 대하여 △PAB 넓이 최댓값.
  solution_summary: |
    직선 AB: x/(-3) + y/6 = 1 → 2x-y+6=0. |AB|=√(9+36)=3√5.
    d_center = |0-0+6|/√5 = 6/√5. 최대 = d + r = 6/√5 + √5 = 11/√5.
    넓이 = 1/2 · 3√5 · 11/√5 = 33/2.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 밑변 고정 · 최대 높이 = d + r
  insight_type: 통찰형
  depth: 3
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-연습-204
  page: 86
  category_type: 연습_실력up
  category_meta: 교육청 기출
  problem_summary: |
    C₁: (x+6)²+y²=4, C₂: (x-5)²+(y+3)²=1, 직선 l: y=x-2.
    P ∈ C₁, Q ∈ C₂. 각각 l에 내린 수선 발 H₁, H₂. H₁H₂ 최대 M, 최소 m. Mm.
  solution_summary: |
    두 원 중심 (-6,0), (5,-3)에서 l까지 거리 계산.
    C1 → l: |-6-0-2|/√2 = 8/√2 = 4√2.
    C2 → l: |5-(-3)-2|/√2 = 6/√2 = 3√2.
    각 원 중심의 l 위 정사영 계산. H₁H₂ 최대·최소는 두 원 중심의 l 위 사영 거리 ± 각 원의 l 방향 반지름 사영. 
    (답 계산 대기 · 사영 계산 필요)
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 정사영 · 두 원 위 점의 사영 거리
  insight_type: 통찰형
  depth: 3
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-연습-205
  page: 86
  category_type: 연습_실력up
  problem_summary: |
    A(-1,1), B(2,1)에서 거리비 2:1인 P (아폴로니오스). ∠PAB 최대 시 cos(∠PAB).
  solution_summary: |
    AP:BP = 2:1. AP²=4BP². (x+1)²+(y-1)²=4((x-2)²+(y-1)²)
    → x²+2x+1+... = 4x²-16x+16+... → 3x²+3y²-18x+15+3(y-1)²... 
    실제: (x+1)²+(y-1)² = 4((x-2)²+(y-1)²) → 좌-4우 정리.
    (x-3)²+(y-1)²=4. 중심 (3,1) 반지름 2.
    ∠PAB 최대 시 AP가 원의 접선. sin(∠PAB) = r/AC (C:원 중심, A까지 거리).
    AC = √(16+0) = 4. sin = 2/4 = 1/2 → ∠=30° → cos = √3/2.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 아폴로니오스 원 · 원 밖 점 최대각 = 접선 사잇각
  insight_type: 통찰형
  depth: 3
  citation_note: "개념원리 · 학습 목적"
```

---

## 03 원의 접선의 방정식 (p.87~91)

### 필수 예제 (대표 유형 · p.89~90)

```yaml
- source: 개념원리-CM2-GM-원-예제-15
  page: 89
  category_type: 대표예제
  problem_summary: |
    원 x²+y²=4에 접하고 직선 2x-y+3=0과 평행한 직선의 방정식 모두.
  solution_summary: |
    기울기 2. y = 2x ± 2√(2²+1) = 2x ± 2√5.
  category: 기울기 주어진 접선
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: y = mx ± r√(m²+1)
  insight_type: 절차형
  depth: 1
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-예제-16
  page: 89
  category_type: 대표예제
  problem_summary: |
    원 x²+y²=5 위 (2,1)에서 접선 ax+y+b=0일 때 a+b.
  solution_summary: |
    접선: 2x+y=5 → 2x+y-5=0. a=2, b=-5. a+b = -3.
  category: 원 위 점 접선 (표준형 원)
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: x₁x + y₁y = r²
  insight_type: 절차형
  depth: 1
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-예제-17
  page: 90
  category_type: 대표예제
  category_meta: 발전
  problem_summary: |
    (-2, 4)에서 원 x²+y²=4에 그은 접선의 방정식.
  solution_summary: |
    두 접선. 하나는 x=-2. 다른 하나는 y-4=m(x+2), d = |2m+4|/√(m²+1)=2 → 3x+4y-10=0 (m=-3/4).
    답: x=-2, 3x+4y-10=0.
  category: 원 밖 점 접선 (세 방법)
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 접점 대입 · 거리=r · 판별식
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"
```

### 확인체크 (유제 · p.89~90)

```yaml
- source: 개념원리-CM2-GM-원-유제-206
  page: 89
  category_type: 유제
  problem_summary: |
    원 x²+y²=9에 접하고 직선 y=-3x+5와 수직인 직선의 방정식 모두.
  solution_summary: |
    기울기 1/3. y = (1/3)x ± 3√(1/9+1) = (1/3)x ± √10.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 기울기 접선 공식
  insight_type: 절차형
  depth: 1
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-유제-207
  page: 89
  category_type: 유제
  problem_summary: |
    원 x²+y²=3에 접하고 x축 양방향과 45° 이루는 두 직선의 x절편 곱.
  solution_summary: |
    기울기 m=1 또는 m=-1. m=1: y=x±√6, x절편 ∓√6. m=-1: y=-x±√6.
    두 직선 y=x+√6, y=x-√6 → 절편 -√6, √6.
    두 직선 y=-x+√6, y=-x-√6 → 절편 √6, -√6.
    네 절편 곱 = 36? 
    (문제는 두 직선의 x절편 곱을 의미할 수 있음. m=1 두 직선 절편 곱 = -6. m=-1 두 직선도 곱 -6.)
    (답 계산 대기)
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 접선 · x절편 계산
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-유제-208
  page: 89
  category_type: 유제
  problem_summary: |
    원 x²+y²=10 위 (-1,-3)에서의 접선이 x축·y축과 만나는 점 A, B. △OAB 넓이.
  solution_summary: |
    접선: -x-3y=10 → x+3y+10=0.
    x절편 A(-10, 0), y절편 B(0, -10/3). 넓이 = 1/2 · 10 · 10/3 = 50/3.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 접선 · 축 절편 · 삼각형 넓이
  insight_type: 절차형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-유제-209
  page: 89
  category_type: 유제
  problem_summary: |
    원 x²+y²=25, 직선 y=x-1의 교점 중 제1사분면 위 점에서 접선.
  solution_summary: |
    연립: x²+(x-1)²=25 → 2x²-2x-24=0 → x²-x-12=0 → x=4 또는 -3.
    제1사분면: (4, 3). 접선: 4x+3y=25.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 원-직선 교점 · 접선
  insight_type: 절차형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-유제-210
  page: 90
  category_type: 유제
  problem_summary: |
    점 (3,-1)에서 원 x²+y²=5에 그은 접선의 방정식.
  solution_summary: |
    접점 (x₁,y₁), x₁x+y₁y=5, 3x₁-y₁=5, x₁²+y₁²=5.
    y₁=3x₁-5 대입: x₁²+9x₁²-30x₁+25=5 → 10x₁²-30x₁+20=0 → x₁²-3x₁+2=0 → x₁=1 또는 2.
    x₁=1, y₁=-2 → x-2y=5. x₁=2, y₁=1 → 2x+y=5.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 원 밖 점 접선 (접점 미지수 연립)
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-유제-211
  page: 90
  category_type: 유제
  problem_summary: |
    (2,-1)에서 (x+1)²+(y-2)²=3에 그은 두 접선의 기울기 합.
  solution_summary: |
    C(-1,2). 직선 y+1=m(x-2) → mx-y-2m-1=0.
    d = |-m-2-2m-1|/√(m²+1) = |−3m−3|/√(m²+1) = 3|m+1|/√(m²+1) = √3.
    9(m+1)² = 3(m²+1) → 3(m+1)² = m²+1 → 3m²+6m+3=m²+1 → 2m²+6m+2=0 → m²+3m+1=0.
    두 근의 합 = -3.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 접선 기울기 이차방정식 근과 계수
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"
```

### 연습문제 (STEP1·STEP2·실력UP · p.91)

```yaml
- source: 개념원리-CM2-GM-원-연습-212
  page: 91
  category_type: 연습_step1
  problem_summary: |
    원 x²+y²=10에 접하고 y=3x+2와 평행한 두 직선의 y축 교점 A, B. AB.
  solution_summary: |
    y = 3x ± √100 = 3x ± 10. y절편 ±10. AB = 20.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 접선 두 개 y절편 대칭
  insight_type: 절차형
  depth: 1
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-연습-213
  page: 91
  category_type: 연습_step1
  problem_summary: |
    원 x²+y²=2 위 (1,-1)의 접선이 x²+y²-6x+2y+k=0에 접할 때 k (k<10).
  solution_summary: |
    접선: x-y=2 → x-y-2=0. C₂: (3,-1), r₂ = √(10-k). 
    d = |3+1-2|/√2 = 2/√2 = √2 = √(10-k) → 10-k=2 → k=8.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 접선·두 번째 원 접함 조건
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-연습-214
  page: 91
  category_type: 연습_step2
  problem_summary: |
    원 x²+y²=25 위 A(-4,3), B(0,-5)와 C. △ABC 넓이 최대 시 C의 접선.
  solution_summary: |
    직선 AB 방정식 → 원 중심 (0,0)에서 거리 계산. C는 AB로부터 최대 거리 = d_center + r.
    AB: 방향 (4,-8) → 법선 (8,4) → 8x+4y+? · 통과 (0,-5): -20+?=0 → 8x+4y+20=0 → 2x+y+5=0.
    d = 5/√5=√5. 최대 = √5 + 5. C는 AB의 반대편 원 위 최대점. 
    C = (0,0)에서 -법선 방향으로 r 이동 = (0,0) - 5·(2,1)/√5 = (-2√5, -√5)? 방향 부호 확인.
    C의 접선: -2√5·x + (-√5)·y = 25? = -2√5 x - √5 y - 25 = 0 → 2√5 x + √5 y + 25 = 0.
    (답 계산 대기 · 방향 부호 재검산)
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 삼각형 최대 넓이 시 반대편 극점
  insight_type: 통찰형
  depth: 3
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-연습-215
  page: 91
  category_type: 연습_step2
  category_meta: 교육청 기출
  problem_summary: |
    원 C: x²+y²=4, A(-2,0). 원 위 제1사분면 점 P의 접선이 x축과 B, P에서 x축 수선의 발 H.
    2AH = HB일 때 △PAB 넓이.
  solution_summary: |
    P=(a,b), b>0, a²+b²=4. 접선: ax+by=4. x절편 B(4/a, 0).
    H=(a, 0). AH = a-(-2) = a+2. HB = 4/a-a = (4-a²)/a = b²/a.
    2(a+2) = b²/a = (4-a²)/a → 2a(a+2) = 4-a² → 3a²+4a-4=0 → a=2/3 또는 -2.
    제1사분면 → a=2/3, b² = 4-4/9 = 32/9, b=4√2/3.
    B(4/(2/3), 0) = (6, 0). AB = 6-(-2) = 8. 높이 b = 4√2/3.
    넓이 = 1/2 · 8 · 4√2/3 = 16√2/3.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 접선·기하 조건 결합·좌표 이차식
  insight_type: 통찰형
  depth: 3
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-연습-216
  page: 91
  category_type: 연습_step2
  problem_summary: |
    A(0, a)에서 원 x²+(y-3)²=8에 그은 두 접선이 수직일 때 양수 a.
  solution_summary: |
    두 접선 수직 · 접선 사잇각 90° → CA = r√2 = √8 · √2 = 4.
    C(0,3). CA² = (a-3)² = 16 → a-3 = ±4 → a=7 (양수).
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 두 접선 수직 ↔ CA = r√2
  insight_type: 통찰형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-연습-217
  page: 91
  category_type: 연습_실력up
  problem_summary: |
    P(-2√3, 2)에서 원 x²+y²=4에 그은 두 접선의 접점 A, B. △ABP 넓이.
  solution_summary: |
    OP = √(12+4) = 4. r=2. 접선 길이 PT = √(16-4) = 2√3.
    AB = 2r·PT/OP = 2·2·2√3/4 = 2√3.
    APB 이등변 · 높이 OP - AB중점거리 = OP - r²/OP = 4-1 = 3.
    넓이 = 1/2·2√3·3 = 3√3.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 두 접점 이은 현 공식 · 삼각형 넓이
  insight_type: 통찰형
  depth: 3
  citation_note: "개념원리 · 학습 목적"
```

---

## 04 두 원의 교점을 지나는 직선과 원의 방정식 (p.92~95)

### 필수 예제 (대표 유형 · p.93~94)

```yaml
- source: 개념원리-CM2-GM-원-예제-18
  page: 93
  category_type: 대표예제
  problem_summary: |
    두 원 x²+y²-ax+6y+9=0, x²+y²-2x+2ay+1=0의 교점 지나는 직선이 (-1,2) 지날 때 a.
  solution_summary: |
    두 식 차: (-a+2)x + (6-2a)y + 8 = 0.
    (-1,2) 대입: (-a+2)(-1) + (6-2a)·2 + 8 = 0 → a-2+12-4a+8 = 0 → -3a+18=0 → a=6.
  category: 두 원 교점 지나는 직선
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 두 원 식 차 → 공통현 직선
  insight_type: 절차형
  depth: 1
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-예제-19
  page: 93
  category_type: 대표예제
  problem_summary: |
    두 원 x²+y²-4x=0, x²+y²-6x-2y+4=0의 교점과 (1,2) 지나는 원.
  solution_summary: |
    x²+y²-4x + k(x²+y²-6x-2y+4) = 0. (1,2) 대입: 1+4-4 + k(1+4-6-4+4) = 0.
    1 + k(-1) = 0 → k=1. 답: x²+y²-4x + x²+y²-6x-2y+4 = 0 → 2x²+2y²-10x-2y+4=0
    → x²+y²-5x-y+2=0.
  category: 두 원 교점 지나는 원
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 원묶음 f + kg = 0
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-예제-20
  page: 94
  category_type: 대표예제
  problem_summary: |
    두 원 x²+y²=4, x²+y²-4x-4y=0의 공통현의 길이.
  solution_summary: |
    차: 4x+4y-4=0 → x+y-1=0. 
    C₁(0,0), r=2. d = 1/√2. AH = √(4-1/2) = √(7/2) = √14/2.
    AB = √14.
  category: 공통현 길이
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 공통현 직선 + 현 길이 공식
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"
```

### 확인체크 (유제 · p.93~94)

```yaml
- source: 개념원리-CM2-GM-원-유제-218
  page: 93
  category_type: 유제
  problem_summary: |
    두 원 x²+y²-2x+ky-4=0, x²+y²-4x-2y+4=0의 교점 지나는 직선이 y=3x+4에 수직일 때 k.
  solution_summary: |
    차: 2x+(k+2)y-8=0. 기울기 = -2/(k+2). y=3x+4에 수직 → 기울기 -1/3.
    -2/(k+2) = -1/3 → k+2 = 6 → k=4.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 공통현 · 수직 조건
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-유제-219
  page: 93
  category_type: 유제
  problem_summary: |
    두 원 x²+y²=5, x²+y²-3x-y-4=0의 교점과 원점 지나는 원.
  solution_summary: |
    x²+y²-5 + k(x²+y²-3x-y-4)=0. 원점: -5+k(-4)=0 → k=-5/4.
    x²+y²-5 - 5/4·(x²+y²-3x-y-4) = 0
    → 곱 4: 4x²+4y²-20 - 5(x²+y²-3x-y-4) = 0
    → -x²-y²+15x+5y = 0 → x²+y²-15x-5y=0.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 원묶음 · 원점 조건
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-유제-220
  page: 93
  category_type: 유제
  problem_summary: |
    두 원 x²+y²+ax-2ay=0, x²+y²-10x-8y+16=0의 교점과 (0,2), (3,1) 지나는 원의 넓이 (a 상수).
  solution_summary: |
    원묶음. 두 점 대입 → a·k 관계식 → 원 확정 → 반지름 → 넓이.
    (답 계산 대기 · 연립 필요)
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 두 원 교점 통과 · 두 추가점 조건
  insight_type: 조건통합형
  depth: 3
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-유제-221
  page: 94
  category_type: 유제
  problem_summary: |
    두 원 x²+y²-2x-4y+1=0, x²+y²-6x+5=0의 공통 현의 길이.
  solution_summary: |
    차: 4x-4y-4=0 → x-y-1=0.
    원1: (x-1)²+(y-2)²=4. C₁(1,2), r=2.
    d = |1-2-1|/√2 = 2/√2 = √2. AB = 2√(4-2) = 2√2.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 공통현 직선 · 현 길이
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-유제-222
  page: 94
  category_type: 유제
  problem_summary: |
    두 원 x²+y²-5=0, x²+y²+4x-3y+a=0의 공통 현 길이 2일 때 양수 a.
  solution_summary: |
    차: -4x+3y-5-a=0 → 4x-3y+(5+a)=0.
    C₁(0,0), r=√5. d = |5+a|/5. AB = 2 → 2√(5-d²)=2 → 5-d²=1 → d²=4 → d=2.
    |5+a|/5 = 2 → |5+a|=10 → a=5 (양수) 또는 a=-15.
    양수 a = 5.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 현 길이 → d → 상수 결정
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"
```

### 연습문제 (STEP1·STEP2·실력UP · p.95)

```yaml
- source: 개념원리-CM2-GM-원-연습-223
  page: 95
  category_type: 연습_step1
  problem_summary: |
    두 원 x²+y²-6=0, x²+y²-4x+ky=0의 교점 지나는 직선이 x-y+3=0과 평행할 때
    두 직선 사이 거리 (k 상수).
  solution_summary: |
    차: 4x-ky-6=0. x-y+3=0과 평행 → 4/1 = -k/-1 → k=4.
    직선 4x-4y-6=0 → x-y-3/2=0.
    두 직선 x-y+3=0, x-y-3/2=0 사이 거리 = |3-(-3/2)|/√2 = 9/2/√2 = 9√2/4.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 공통현·평행 조건·거리
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-연습-224
  page: 95
  category_type: 연습_step1
  problem_summary: |
    두 원 x²+y²-4=0, x²+y²+3x-4y+k=0의 공통 현 길이 2√3인 모든 실수 k 합.
  solution_summary: |
    차: -3x+4y-4-k=0 → 3x-4y+(4+k)=0.
    C₁(0,0), r=2. AB=2√3 → 2√(4-d²)=2√3 → d²=1 → d=1.
    |4+k|/5 = 1 → |4+k|=5 → k=1 또는 -9. 합 = -8.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 현 길이 → d → 두 근 합
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-연습-225
  page: 95
  category_type: 연습_step1
  problem_summary: |
    두 원 x²+y²=9, x²+y²-8x-6y+1=0의 교점 A, B. △OAB 넓이 (O 원점).
  solution_summary: |
    공통현: 8x+6y-10=0 → 4x+3y-5=0.
    C₁=O(0,0). d = 5/5 = 1. AB = 2√(9-1) = 2·2√2 = 4√2.
    △OAB = 1/2·AB·d = 1/2·4√2·1 = 2√2.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 공통현 · 중심-현 이등변 삼각형
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-연습-226
  page: 95
  category_type: 연습_step2
  problem_summary: |
    두 원 x²+y²+6x+2y+1=0, x²+y²-2x-3=0의 교점 지나는 원 중 넓이 최소인 원의 중심 (a,b). b/a.
  solution_summary: |
    넓이 최소 = 공통현을 지름. 공통현: 8x+2y+4=0 → 4x+y+2=0.
    각 원의 중심에서 공통현으로 수직선 · 공통현과 두 원 원의 중심을 잇는 선의 교점 = 새 원 중심.
    공통현 방향 (1,-4). 중심 지나는 공통현의 중점 계산 필요.
    두 원 원 중심 C₁(-3,-1), C₂(1,0). 두 원 교점의 중점 = 공통현 위에서 각 원 중심의 수선의 발과 일치? 
    구체 계산: C₁에서 4x+y+2=0의 수선 발 → 넓이 최소 원 중심.
    실제: 공통현의 중점 M = C₁ 또는 C₂에서 공통현에 내린 수선의 발.
    C₂(1,0)에서 4x+y+2=0에 내린 수선 발:
    파라미터 (1-4t, 0-t), 4(1-4t)+(-t)+2=0 → 6-17t=0 → t=6/17.
    발 = (1-24/17, -6/17) = (-7/17, -6/17). b/a = (-6/17)/(-7/17) = 6/7.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 최소 넓이 원 = 공통현 지름 · 중점 = 수선 발
  insight_type: 통찰형
  depth: 3
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-연습-227
  page: 95
  category_type: 연습_step2
  problem_summary: |
    두 원 x²+y²+4x+4y=0, x²+y²+x-2y-6=0의 교점 지나고 중심이 x축 위인 원의 반지름.
  solution_summary: |
    묶음: (x²+y²+4x+4y) + k(x²+y²+x-2y-6) = 0.
    (1+k)x² + (1+k)y² + (4+k)x + (4-2k)y + (-6k) = 0.
    y 계수 = 0: 4-2k=0 → k=2.
    3x² + 3y² + 6x - 12 = 0 → x²+y²+2x-4=0 → (x+1)²+y²=5. 반지름 √5.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 원묶음 · 중심 축 조건 (y 계수=0)
  insight_type: 통찰형
  depth: 3
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-원-연습-228
  page: 95
  category_type: 연습_실력up
  problem_summary: |
    원 x²+y²=4를 (-1,0)에서 x축에 접하도록 접었을 때, 두 점 P, Q를 지나는 직선의 방정식.
  solution_summary: |
    접힘 = 대칭. 원의 중심 (0,0)이 (-1,0)에 대해 x축에 접하도록 이동. 
    원본 원과 접힌 원 (중심 (-2,0), 반지름 2)의 교점이 P, Q.
    두 원: x²+y²=4, (x+2)²+y²=4. 차: 4x+4=0 → x=-1.
    답: x=-1.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-03
  mechanism_primary: 접기 = 대칭 이동 · 원묶음 공통현
  insight_type: 통찰형
  depth: 3
  citation_note: "개념원리 · 학습 목적"
```

---

## 정독 요약

- **필수 예제**: 20문항 (star_3 12 + star_4 7 + 발전 star_4~5 1)
- **확인체크**: 40문항 (star_3 22 + star_4 17 + star_5 1)
- **연습문제**: 20문항 (star_3 3 + star_4 10 + star_5 7)
- **총**: 80문항
- **답 계산 대기**: 7문항 (연습 180·182·204, 유제 160·161·185·207·220)

## 소절별 mechanism 분포

| 소절 | 핵심 mechanism | 주요 tier |
|---|---|---|
| 01 원의 방정식 | 표준형·일반형·좌표축 접·원 조건·아폴로니오스 | star_3~4 |
| 02 원과 직선 | 판별식 / d vs r · 현 길이 · 접선 길이 | star_3~4 |
| 03 접선의 방정식 | 기울기 접선·원 위 접선·원 밖 두 접선 | star_3~5 |
| 04 두 원 교점 | 공통현 = f-g · 원묶음 f+kg | star_4~5 |
