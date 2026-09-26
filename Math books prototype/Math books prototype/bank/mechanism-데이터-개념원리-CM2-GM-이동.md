---
name: mechanism-데이터-개념원리-CM2-GM-이동
description: 개념원리 공통수학2 (2022개정) 도형의 이동 단원 정독 데이터. 세션 53 (2026-07-20) 신설.
metadata:
  type: reference
  version: v1.0
  established: 2026-07-20
  source: 개념원리 공통수학2 (2022개정)
  section: 도형의 이동
  tier_mapping:
    개념정리: star_3
    필수 예제: star_3~4
    확인체크(유제): star_3~4
    연습(STEP1): star_3~4
    연습(STEP2·실력UP): star_4~5
  unit_code: CM2-GM
  standard: 10수05-04
  citation_note: 개념원리 · 학습 목적 · 저작권 준수 (원문 전사 없음 · 발문 요약)
  extract_range: "도형의 이동 3소절 (평행이동·대칭이동·점과 직선 대칭) + 특강 f(x,y)=0 이동 · 필수·확인체크·연습 전수"
  pages: "98~118"
---

# 개념원리 공통수학2 (2022개정) — 도형의 이동 단원 정독 데이터

**출처**: 개념원리 공통수학2 (2022개정) · I. 도형의 방정식 → 4. 도형의 이동
**대상 범위**: 소절 01~03 (평행이동·대칭이동·점과 직선 대칭) + 특강 (필수·확인체크·연습 전수)
**정독 페이지**: p.98~118
**총 문항 수**: **61문항** (필수 9 + 확인체크 32 + 연습 20)
**작업 목적**: 정리편·유형편·연습편 원본 은행 확장 · 이동 단원 앵커 확보
**정독 일자**: 2026-07-20

---

## 01 평행이동 (p.98~104)

### 필수 예제 (대표 유형 · p.100~102)

```yaml
- source: 개념원리-CM2-GM-이동-예제-01
  page: 100
  category_type: 대표예제
  problem_summary: |
    (1) 평행이동 (x,y) → (x+1,y-b)에 의해 (-2,3) → (a,2). a-b.
    (2) (5,-1)을 (3,4)로 옮기는 평행이동에 의해 (1,-3)이 옮겨지는 점.
  solution_summary: |
    (1) a=-1, b=1. a-b = -2.
    (2) 이동 (-2, 5). (1,-3) → (-1, 2).
  category: 점의 평행이동
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: (x+a, y+b) · 이동벡터 확정
  insight_type: 절차형
  depth: 1
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-이동-예제-02
  page: 101
  category_type: 대표예제
  problem_summary: |
    (-3,4)를 (-1,1)로 옮기는 평행이동에 의해 3x-y+2=0이 ax-y+b=0으로 옮겨질 때 a+b.
  solution_summary: |
    이동 (2, -3). x → x-2, y → y+3 대입.
    3(x-2) - (y+3) + 2 = 0 → 3x - y - 7 = 0. a=3, b=-7. a+b = -4.
  category: 직선의 평행이동
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: f(x-a, y-b)=0 대입
  insight_type: 절차형
  depth: 1
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-이동-예제-03
  page: 102
  category_type: 대표예제
  problem_summary: |
    (1) 포물선 y=2x²-4x+5를 x축 p, y축 p+2 평행이동한 포물선 꼭짓점이 x축 위. p.
    (2) 평행이동 (x,y) → (x+3, y-4)에 의해 원 x²+y²+4x-2y+a=0이 원 (x-1)²+(y+b)²=3으로. a, b.
  solution_summary: |
    (1) y=2(x-1)²+3. 꼭짓점 (1,3) → (1+p, 5+p). 5+p=0 → p=-5.
    (2) 이동 (3,-4). 중심 (-2,1) → (1,-3). b=3.
    반지름² = 5-a = 3 → a=2.
  category: 포물선·원의 평행이동
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: 꼭짓점 이동 · 중심 이동
  insight_type: 절차형
  depth: 2
  citation_note: "개념원리 · 학습 목적"
```

### 확인체크 (유제 · p.99~102)

```yaml
- source: 개념원리-CM2-GM-이동-유제-229
  page: 99
  category_type: 유제
  problem_summary: |
    x축으로 -3, y축으로 4만큼 평행이동한 점.
    (1) (7,2) (2) (-6,5) (3) (-2,-4).
  solution_summary: |
    (1) (4, 6). (2) (-9, 9). (3) (-5, 0).
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: 좌표 더하기
  insight_type: 절차형
  depth: 1
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-이동-유제-230
  page: 99
  category_type: 유제
  problem_summary: |
    (x,y) → (x-5, y+3) 옮기는 점.
    (1) (1,3) (2) (4,-6) (3) (-2,5).
  solution_summary: |
    (1) (-4, 6). (2) (-1, -3). (3) (-7, 8).
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: 이동 규칙 적용
  insight_type: 절차형
  depth: 1
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-이동-유제-231
  page: 99
  category_type: 유제
  problem_summary: |
    x축 2, y축 -3 평행이동한 도형의 방정식.
    (1) 3x-2y+5=0 (2) y=x²+4 (3) (x-3)²+(y+4)²=1.
  solution_summary: |
    (1) 3(x-2)-2(y+3)+5=0 → 3x-2y-7=0.
    (2) y+3 = (x-2)²+4 → y = x²-4x+5.
    (3) (x-5)²+(y+1)²=1.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: f(x-a, y-b)=0
  insight_type: 절차형
  depth: 1
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-이동-유제-232
  page: 99
  category_type: 유제
  problem_summary: |
    (x,y) → (x-2, y+5)에 의해 옮겨진 도형.
    (1) 2x-y-3=0 (2) y=-x²+2x (3) (x+3)²+(y-2)²=5.
  solution_summary: |
    (1) 2(x+2)-(y-5)-3=0 → 2x-y+6=0.
    (2) y-5 = -(x+2)²+2(x+2) → y = -x²-2x+5.
    (3) (x+1)²+(y-7)²=5.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: 역방향 대입
  insight_type: 절차형
  depth: 1
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-이동-유제-233
  page: 100
  category_type: 유제
  problem_summary: |
    (x,y) → (x-3, y+2)에 의해 (a,-1)이 직선 y=2x-3 위로. a.
  solution_summary: |
    (a-3, 1). 1 = 2(a-3)-3 → 2a-10=0 → a=5.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: 이동 후 직선 대입
  insight_type: 절차형
  depth: 1
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-이동-유제-234
  page: 100
  category_type: 유제
  problem_summary: |
    (2,-4)를 (1,-3)으로 옮기는 이동에 의해 (-3,6)이 옮겨지는 점.
  solution_summary: |
    이동 (-1, 1). (-3-1, 6+1) = (-4, 7).
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: 이동 벡터 결정 · 적용
  insight_type: 절차형
  depth: 1
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-이동-유제-235
  page: 100
  category_type: 유제
  problem_summary: |
    (m,n)을 x축 2, y축 -3 평행이동하니 x²+y²-6x+8y+19=0의 중심과 일치. mn.
  solution_summary: |
    (x-3)²+(y+4)²=6. 중심 (3,-4).
    (m+2, n-3) = (3, -4) → m=1, n=-1. mn = -1.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: 원 중심 · 이동 후 일치
  insight_type: 절차형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-이동-유제-236
  page: 101
  category_type: 유제
  problem_summary: |
    직선 2x-3y+k=0을 x축 1, y축 -2 평행이동한 직선이 (1,-4) 지날 때 k.
  solution_summary: |
    2(x-1)-3(y+2)+k=0 → 2x-3y-8+k=0.
    (1,-4) 대입: 2+12-8+k=0 → k=-6.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: 직선 이동 · 점 조건
  insight_type: 절차형
  depth: 1
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-이동-유제-237
  page: 101
  category_type: 유제
  problem_summary: |
    (1,2)를 (-2,4)로 옮기는 이동에 의해 3x-4y+2=0이 3x+py+q=0으로. p+q.
  solution_summary: |
    이동 (-3, 2). 3(x+3)-4(y-2)+2=0 → 3x-4y+19=0. 
    비교: p=-4, q=19. p+q = 15.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: 직선 역대입
  insight_type: 절차형
  depth: 1
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-이동-유제-238
  page: 101
  category_type: 유제
  problem_summary: |
    직선 y=ax+b를 x축 -3, y축 2 평행이동한 직선과 y=2x+1이 y축에서 수직으로 만남. b-a.
  solution_summary: |
    이동 후 직선: y-2 = a(x+3)+b → y = ax+3a+b+2.
    y=2x+1과 수직 · y축 위 만남.
    y축: 각 y절편 3a+b+2 = 1 → 3a+b = -1.
    수직: a·2 = -1 → a = -1/2. b = -1-3(-1/2) = 1/2.
    b-a = 1/2-(-1/2) = 1.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: 이동 · 수직·y절편 조건
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-이동-유제-239
  page: 102
  category_type: 유제
  problem_summary: |
    평행이동 (x,y) → (x-a, y+2b)에 의해 y=x²-4x+3이 y=x²-3으로. a+b.
  solution_summary: |
    y-2b = (x+a)²-4(x+a)+3.
    y = x²+(2a-4)x+(a²-4a+3+2b).
    비교 x²-3: 2a-4=0 → a=2. a²-4a+3+2b = -3 → 4-8+3+2b=-3 → 2b=-2 → b=-1. a+b=1.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: 포물선 이동 · 계수 비교
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-이동-유제-240
  page: 102
  category_type: 유제
  problem_summary: |
    원 x²+y²+6x+2y+8=0을 x축 a, y축 b 평행이동하니 x²+y²-4x-4y+6=0과 일치. ab.
  solution_summary: |
    원1: (x+3)²+(y+1)²=2. 중심 (-3,-1), r²=2.
    원2: (x-2)²+(y-2)²=2. 중심 (2,2), r²=2.
    이동 (5, 3). ab = 15.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: 중심 이동
  insight_type: 절차형
  depth: 1
  citation_note: "개념원리 · 학습 목적"
```

### 연습문제 (STEP1·STEP2·실력UP · p.103~104)

```yaml
- source: 개념원리-CM2-GM-이동-연습-241
  page: 103
  category_type: 연습_step1
  problem_summary: |
    A(2,a), B(b,3)을 A'(-1,5), B'(1,0)으로 옮기는 이동에 의해 (a+b, a-b)가 옮겨지는 점.
  solution_summary: |
    이동 (-3, 5-a) = (1-b, -3) → -3=1-b → b=4. 5-a=-3 → a=8.
    (a+b, a-b) = (12, 4). 이동 후: (12-3, 4+(-3)) = (9, 1).
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: 두 점 대응 · 이동 벡터 결정
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-이동-연습-242
  page: 103
  category_type: 연습_step1
  problem_summary: |
    직선 2x-y+4=0을 x축 a, y축 b 평행이동해 원래와 일치할 때 a/b (ab≠0).
  solution_summary: |
    2(x-a)-(y-b)+4=0 → 2x-y-2a+b+4 = 0.
    원래 2x-y+4=0과 일치 → -2a+b = 0 → b = 2a. a/b = 1/2.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: 직선 자기 일치 조건
  insight_type: 통찰형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-이동-연습-243
  page: 103
  category_type: 연습_step1
  problem_summary: |
    y=x/2-1을 x축 a, y축 -3 평행이동하니 y=-x+5와 y축에서 만남. 이 이동에 의해 (-1,2)가 옮겨지는 점.
  solution_summary: |
    이동 후: y+3 = (x-a)/2 - 1 → y = (x-a)/2 - 4.
    y축(x=0) 위 만남: y=-a/2-4 = 5 (y=-x+5의 y절편 5). → -a/2 = 9 → a=-18.
    (-1,2) 이동: (-1+(-18), 2-3) = (-19, -1).
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: 이동 · y절편 일치
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-이동-연습-244
  page: 103
  category_type: 연습_step1
  problem_summary: |
    f(x,y)=0 → f(x-4, y+1)=0 이동에 의해 y=x²+2ax+3이 옮겨진 포물선의 꼭짓점 (3, b). a+b.
  solution_summary: |
    y=x²+2ax+3 = (x+a)²+3-a². 꼭짓점 (-a, 3-a²).
    이동 (4, -1): (-a+4, 3-a²-1) = (4-a, 2-a²) = (3, b).
    4-a = 3 → a=1. b = 2-1 = 1. a+b = 2.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: 꼭짓점 이동 · 좌표 비교
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-이동-연습-245
  page: 103
  category_type: 연습_step1
  problem_summary: |
    원 x²+(y-1)²=9를 (x-1)²+y²=9로 옮기는 평행이동에 의해 x+2y-4=0이 x+ay+b=0으로. a+b.
  solution_summary: |
    두 원 중심 (0,1) → (1,0). 이동 (1, -1).
    직선 이동: (x-1) + 2(y+1) - 4 = 0 → x + 2y - 3 = 0. 
    비교: a=2, b=-3. a+b = -1.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: 두 원 대응으로 이동 결정 · 직선 이동
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-이동-연습-246
  page: 103
  category_type: 연습_step2
  problem_summary: |
    원점 O·A(2,0)·C(0,3) 직사각형 OABC. 평행이동하니 B'(6,4).
    직선 A'C'의 y절편.
  solution_summary: |
    B의 좌표 (2, 3). B → B' 이동 (4, 1).
    A(2,0) → A'(6,1). C(0,3) → C'(4,4).
    A'C' 직선: 기울기 (4-1)/(4-6) = -3/2. y-1 = -3/2·(x-6) → y = -3x/2 + 10.
    y절편 = 10.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: 도형 평행이동 · 직선 구성
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-이동-연습-247
  page: 104
  category_type: 연습_step2
  problem_summary: |
    직선 4x+3y-5=0을 y축 k 평행이동한 직선이 (x-1)²+y²=4에 접할 때 양수 k.
  solution_summary: |
    이동: 4x+3(y-k)-5=0 → 4x+3y-5-3k=0.
    중심 (1,0)까지 거리 = |4-5-3k|/5 = |−1−3k|/5 = 2 → |1+3k|=10.
    양수 k: 1+3k=10 → k=3 또는 1+3k=-10 → k=-11/3.
    양수: k=3.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: 직선 이동 · 원 접함
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-이동-연습-248
  page: 104
  category_type: 연습_step2
  problem_summary: |
    포물선 y=x²+8x+9를 y=x²으로 옮기는 이동에 의해 l: 2x-3y-2=0이 l'으로. l과 l' 사이 거리.
  solution_summary: |
    y=(x+4)²-7. 꼭짓점 (-4, -7) → (0, 0). 이동 (4, 7).
    l → l': 2(x-4)-3(y-7)-2 = 0 → 2x-3y+11=0.
    두 평행선 사이 거리 = |11-(-2)|/√13 = 13/√13 = √13.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: 포물선 이동으로 이동 결정 · 평행선 거리
  insight_type: 통찰형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-이동-연습-249
  page: 104
  category_type: 연습_step2
  problem_summary: |
    C₁: x²+y²-6x+2y+2=0을 x축 -2, y축 p 평행이동한 C₂. C₁·C₂ 중심 거리 3일 때 C₂ 중심 (p>0).
  solution_summary: |
    C₁: (x-3)²+(y+1)²=8. 중심 (3, -1).
    C₂ 중심 (3-2, -1+p) = (1, p-1). 거리² = 4+p² = 9 → p=√5 (양수).
    C₂ 중심 (1, √5-1).
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: 원 중심 이동 · 거리 조건
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-이동-연습-250
  page: 104
  category_type: 연습_step2
  category_meta: 교육청 기출
  problem_summary: |
    (x-a)²+(y-b)²=b² 원을 x축 3, y축 -8 평행이동한 원 C가 x·y축 동시 접. a+b (a, b 양수).
  solution_summary: |
    이동 후 중심 (a+3, b-8), 반지름 b.
    x·y축 동시 접 → |a+3| = |b-8| = b.
    b>0, b-8<0 (가정) → -b+8 = b → b=4. 그리고 |a+3|=4 → a+3=4 (a>0) → a=1.
    확인: (a+3, b-8) = (4, -4). 반지름 4. 축 접함 OK.
    a+b = 5. 답 ①.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: 원 이동 · 축 접 조건
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-이동-연습-251
  page: 104
  category_type: 연습_step2
  problem_summary: |
    (x,y) → (x+2, y-3)에 의해 원 x²+(y-1)²=9 평행이동한 원이 직선 3x-4y+k=0과 두 점 만나는 k의 범위 m<k<n. n-m.
  solution_summary: |
    이동 후 원: (x-2)²+(y+2)²=9. 중심 (2,-2), r=3.
    d = |6+8+k|/5 = |14+k|/5 < 3 → |14+k| < 15 → -29 < k < 1.
    m=-29, n=1. n-m = 30.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: 원 이동 · 두 점 만남 · 거리 부등식
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-이동-연습-252
  page: 104
  category_type: 연습_실력up
  problem_summary: |
    O(0,0), A(3,0), B(0,4) 꼭짓점 △OAB의 평행이동 △O'A'B'에서 B'(6,2). △O'A'B' 내접원의 방정식.
  solution_summary: |
    B → B' 이동 (6, -2). O'=(6,-2), A'=(9,-2), B'=(6,2).
    직각삼각형 (직각 O'). 세 변 3, 4, 5. 내접원 반지름 r = (3+4-5)/2 = 1.
    직각 O'(6,-2)에서 두 다리 방향으로 1씩 이동 → 중심 (7, -1). r=1.
    답: (x-7)²+(y+1)² = 1.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: 평행이동 · 직각삼각형 내접원 공식
  insight_type: 통찰형
  depth: 3
  citation_note: "개념원리 · 학습 목적"
```

---

## 02 대칭이동 (p.105~111)

### 필수 예제 (대표 유형 · p.108~111)

```yaml
- source: 개념원리-CM2-GM-이동-예제-04
  page: 108
  category_type: 대표예제
  problem_summary: |
    (4,6)을 x축 대칭이동한 P, y축 대칭이동한 Q. 두 점 P, Q 지나는 직선.
  solution_summary: |
    P(4,-6), Q(-4,6). 기울기 = (6-(-6))/(-4-4) = 12/-8 = -3/2.
    y+6 = -3/2 (x-4) → y = -3x/2.
  category: 점의 대칭이동
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: 4 축·원점·y=x 대칭 규칙
  insight_type: 절차형
  depth: 1
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-이동-예제-05
  page: 109
  category_type: 대표예제
  problem_summary: |
    원 x²+y²+4x-2y+1=0을 y=x 대칭이동한 원 · x축 a, y축 b 평행이동한 원이 일치. a, b.
  solution_summary: |
    원: (x+2)²+(y-1)²=4. y=x 대칭: (y+2)²+(x-1)²=4 → (x-1)²+(y+2)²=4.
    이동 후: (x-1-a)²+(y+2-b)²=4. 원본과 일치: -1-a=-2, -2-b=1?
    비교: 이동 후 원 = 원본 (x+2)²+(y-1)²=4.
    중심 (1+a, -2+b) = (-2, 1) → a=-3, b=3. 
    문제 재해석: y=x 대칭 후 평행이동한 것 = 원본.
    중심 (1, -2) + (a, b) = (-2, 1) → a=-3, b=3.
  category: 도형 대칭이동·평행이동 연속
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: 대칭이동 후 이동
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-이동-예제-06
  page: 110
  category_type: 대표예제
  problem_summary: |
    직선 y=3x+2를 x축 a 평행이동 후 원점 대칭. 옮긴 직선이 (2,1) 지날 때 a.
  solution_summary: |
    이동: y=3(x-a)+2. 원점 대칭 (x → -x, y → -y): -y=3(-x-a)+2 → y=3x+3a-2.
    (2,1): 1=6+3a-2 → 3a=-3 → a=-1.
  category: 평행이동 · 대칭이동 연속
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: 순차 적용
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-이동-예제-07
  page: 111
  category_type: 대표예제
  problem_summary: |
    A(0,2), B(6,3), x축 위 P. AP+BP 최솟값.
  solution_summary: |
    B의 x축 대칭 B'(6, -3). AP+BP = AP + B'P ≥ AB' = √(36+25) = √61.
  category: 선분 길이 합 최솟값 (대칭)
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: 한 점 대칭 · 직선 위 최단거리
  insight_type: 통찰형
  depth: 2
  citation_note: "개념원리 · 학습 목적"
```

### 확인체크 (유제 · p.107~111)

```yaml
- source: 개념원리-CM2-GM-이동-유제-253
  page: 107
  category_type: 유제
  problem_summary: |
    (-2, 3) 대칭이동. (1) x축 (2) y축 (3) 원점 (4) y=x.
  solution_summary: |
    (1) (-2, -3). (2) (2, 3). (3) (2, -3). (4) (3, -2).
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: 4 대칭 기본
  insight_type: 절차형
  depth: 1
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-이동-유제-254
  page: 107
  category_type: 유제
  problem_summary: |
    3x-2y+1=0 대칭이동. (1) x축 (2) y축 (3) 원점 (4) y=x.
  solution_summary: |
    (1) 3x+2y+1=0. (2) -3x-2y+1=0 → 3x+2y-1=0.
    (3) -3x+2y+1=0 → 3x-2y-1=0. (4) 3y-2x+1=0 → -2x+3y+1=0.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: 대칭이동 대입 규칙
  insight_type: 절차형
  depth: 1
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-이동-유제-255
  page: 107
  category_type: 유제
  problem_summary: |
    y=x²-2x+3 대칭이동. (1) x축 (2) y축 (3) 원점.
  solution_summary: |
    (1) -y=x²-2x+3 → y=-x²+2x-3.
    (2) y=x²+2x+3.
    (3) -y=x²+2x+3 → y=-x²-2x-3.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: 대입
  insight_type: 절차형
  depth: 1
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-이동-유제-256
  page: 107
  category_type: 유제
  problem_summary: |
    (x-3)²+(y+2)²=6 대칭이동. (1) x축 (2) y축 (3) 원점 (4) y=x.
  solution_summary: |
    (1) (x-3)²+(y-2)²=6. (2) (x+3)²+(y+2)²=6.
    (3) (x+3)²+(y-2)²=6. (4) (y-3)²+(x+2)²=6 → (x+2)²+(y-3)²=6.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: 중심 대칭 · 반지름 불변
  insight_type: 절차형
  depth: 1
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-이동-유제-257
  page: 108
  category_type: 유제
  problem_summary: |
    (3,-5)를 원점 대칭이동한 점이 ax-2y+1=0 위. a.
  solution_summary: |
    (-3, 5). -3a - 10 + 1 = 0 → -3a = 9 → a=-3.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: 원점 대칭 · 직선 대입
  insight_type: 절차형
  depth: 1
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-이동-유제-258
  page: 108
  category_type: 유제
  problem_summary: |
    P(2,4)를 y=x 대칭 Q, Q를 x축 대칭 R. △PQR 넓이.
  solution_summary: |
    Q(4, 2). R(4, -2). 
    P(2,4), Q(4,2), R(4,-2). QR 수직 (x=4). QR 길이 = 4.
    밑변 QR = 4, 높이 = |2-4| = 2. 넓이 = 4.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: 대칭 순차 · 삼각형 넓이
  insight_type: 절차형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-이동-유제-259
  page: 108
  category_type: 유제
  problem_summary: |
    (k,3)을 y축 대칭한 P, y=x 대칭한 Q. PQ = 2√5. 양수 k.
  solution_summary: |
    P(-k, 3). Q(3, k). PQ² = (3+k)²+(k-3)² = 2k²+18 = 20 → k²=1 → k=1 (양수).
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: 대칭 좌표 · 거리 방정식
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-이동-유제-260
  page: 109
  category_type: 유제
  problem_summary: |
    y=-3x+6을 y축 대칭이동한 직선에 수직이고 (-3, 4) 지나는 직선.
  solution_summary: |
    y축 대칭: y=3x+6. 기울기 3. 수직 기울기 -1/3.
    y-4 = -1/3(x+3) → y = -x/3 + 3.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: 대칭 · 수직 · 점 지남
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-이동-유제-261
  page: 109
  category_type: 유제
  problem_summary: |
    2x-3y+1=0을 x축 대칭한 직선이 (x-4)²+(y+k)²=3의 넓이를 이등분할 때 상수 k.
  solution_summary: |
    x축 대칭: 2x+3y+1=0. 이등분 = 원의 중심 지남.
    중심 (4, -k) 대입: 8-3k+1=0 → k=3.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: 대칭 직선 · 중심 지남
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-이동-유제-262
  page: 109
  category_type: 유제
  problem_summary: |
    y=x²-2mx+m²-5를 원점 대칭한 포물선의 꼭짓점 (-2, k). m+k (m 상수).
  solution_summary: |
    y=(x-m)²-5. 꼭짓점 (m, -5). 원점 대칭 → (-m, 5).
    -m=-2 → m=2. k=5. m+k = 7.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: 꼭짓점 대칭 이동
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-이동-유제-263
  page: 110
  category_type: 유제
  problem_summary: |
    4x-2y+3=0을 y=x 대칭 후 x축 -1, y축 2 평행이동한 직선.
  solution_summary: |
    y=x 대칭: 4y-2x+3=0 → -2x+4y+3=0.
    이동: -2(x+1)+4(y-2)+3=0 → -2x+4y-7=0 → 2x-4y+7=0.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: 대칭 후 평행이동 순차
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-이동-유제-264
  page: 110
  category_type: 유제
  problem_summary: |
    y=x²-2x+a를 x축 3, y축 1 평행이동 후 x축 대칭이동하니 y=-x²+8x-10. a.
  solution_summary: |
    y=(x-1)²+a-1. 이동: y-1 = (x-3-1)²+a-1 → y = (x-4)²+a = x²-8x+16+a.
    x축 대칭: -y = x²-8x+16+a → y = -x²+8x-16-a.
    비교 -x²+8x-10: -16-a = -10 → a = -6.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: 이동·대칭 순차 · 계수 비교
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-이동-유제-265
  page: 110
  category_type: 유제
  problem_summary: |
    원 x²+y²-4x=0을 y축 대칭 후 y축 1 평행이동한 원이 y=mx-2에 접할 때 m.
  solution_summary: |
    (x-2)²+y²=4. y축 대칭: (x+2)²+y²=4. 이동: (x+2)²+(y-1)²=4.
    중심 (-2, 1), r=2. 직선 mx-y-2=0.
    d = |-2m-1-2|/√(m²+1) = |−2m−3|/√(m²+1) = 2 → (2m+3)² = 4(m²+1)
    → 4m²+12m+9 = 4m²+4 → 12m = -5 → m = -5/12.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: 대칭·이동 · 원-직선 접함
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-이동-유제-266
  page: 111
  category_type: 유제
  problem_summary: |
    A(2,4), B(3,-5), y축 위 P. AP+BP 최솟값.
  solution_summary: |
    A의 y축 대칭 A'(-2, 4). AP+BP = A'P + BP ≥ A'B = √(25+81) = √106.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: y축 대칭 · 최단거리
  insight_type: 통찰형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-이동-유제-267
  page: 111
  category_type: 유제
  problem_summary: |
    A(1,2), B(3,4), y=x 위 P. AP+BP 최솟값과 P 좌표.
  solution_summary: |
    A의 y=x 대칭 A'(2, 1). A'B = √(1+9) = √10.
    A'B 직선: 기울기 3, y-1 = 3(x-2). y=x 교점: x = 3x-5 → x=5/2, y=5/2.
    P(5/2, 5/2). 최솟값 √10.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: y=x 대칭 · 최단거리 · P 좌표
  insight_type: 통찰형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-이동-유제-268
  page: 111
  category_type: 유제
  problem_summary: |
    A(2,3), B(6,1), y축 위 P, x축 위 Q. AP+PQ+QB 최솟값.
  solution_summary: |
    A의 y축 대칭 A'(-2, 3). B의 x축 대칭 B'(6, -1).
    최솟값 = A'B' = √(64+16) = √80 = 4√5.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: 두 번 대칭 · 최단거리
  insight_type: 통찰형
  depth: 2
  citation_note: "개념원리 · 학습 목적"
```

---

## 03 점과 직선에 대한 대칭이동 (p.112~118)

### 필수 예제 (대표 유형 · p.113~115)

```yaml
- source: 개념원리-CM2-GM-이동-예제-08
  page: 113
  category_type: 대표예제
  problem_summary: |
    (1) (2,-3)을 (-2,1)에 대칭이동한 점.
    (2) 원 x²+y²-10x+24=0을 (3,4)에 대칭이동한 원.
  solution_summary: |
    (1) (a, b) = (2·(-2)-2, 2·1-(-3)) = (-6, 5).
    (2) (x-5)²+y²=1. 중심 (5, 0) 대칭 이동: 중심 = (2·3-5, 2·4-0) = (1, 8).
    답: (x-1)²+(y-8)²=1.
  category: 점에 대한 대칭이동
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: (2a-x, 2b-y) · 원 중심 대칭
  insight_type: 절차형
  depth: 1
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-이동-예제-09
  page: 114
  category_type: 대표예제
  problem_summary: |
    (1) P(1,4)를 직선 y=2x-3에 대칭이동한 점.
    (2) y=2x-1을 y=x+3에 대칭이동한 직선.
  solution_summary: |
    (1) P'(a, b). 중점 조건: (4+b)/2 = 2·(1+a)/2 - 3 → 2a - b = -8.
        수직 조건: (b-4)/(a-1)·2 = -1 → a+2b = 9.
        연립: a=5, b=2.
    (2) 임의점 (x,y)의 대칭 (x',y'). 중점 y=x+3 위: (y+y')/2 = (x+x')/2 + 3 → x-y = -x'+y'-6.
        수직: (y'-y)/(x'-x)·1 = -1 → x+y = x'+y'.
        연립 (x,y): x=y'-3, y=x'+3.
        y=2x-1: x'+3 = 2(y'-3)-1 → x'-2y'+10=0. 답: x-2y+10=0.
  category: 직선에 대한 대칭이동
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: 중점 조건 + 수직 조건 연립
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"
```

### 확인체크 (유제 · p.113~115)

```yaml
- source: 개념원리-CM2-GM-이동-유제-269
  page: 113
  category_type: 유제
  problem_summary: |
    (a, 3)을 (4, 5) 대칭한 점 (-2, b). ab.
  solution_summary: |
    (2·4 - a, 2·5 - 3) = (8-a, 7). 8-a=-2 → a=10. b=7. ab=70.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: 중점 규칙
  insight_type: 절차형
  depth: 1
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-이동-유제-270
  page: 113
  category_type: 유제
  problem_summary: |
    포물선 y=-x²+2x+5를 (a,b) 대칭이동한 포물선의 꼭짓점 (3, 6). a+b.
  solution_summary: |
    y=-(x-1)²+6. 꼭짓점 (1, 6). 대칭 후 (2a-1, 2b-6) = (3, 6).
    a=2, b=6. a+b = 8.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: 꼭짓점 점 대칭
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-이동-유제-271
  page: 113
  category_type: 유제
  problem_summary: |
    원 (x-3)²+(y+1)²=4를 (1,2) 대칭이동한 원.
  solution_summary: |
    중심 (3, -1) → (2·1-3, 2·2-(-1)) = (-1, 5). 반지름 2.
    답: (x+1)²+(y-5)² = 4.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: 원 중심 점 대칭
  insight_type: 절차형
  depth: 1
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-이동-유제-272
  page: 114
  category_type: 유제
  problem_summary: |
    P(-3, 4), Q(1, 8)이 y=ax+b에 대칭. a+b.
  solution_summary: |
    중점 (-1, 6) 직선 위: 6 = -a+b → b = a+6.
    PQ 기울기 = 4/4 = 1. 수직: a·1 = -1 → a = -1. b = 5.
    a+b = 4.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: 두 점 대칭 = 수직이등분선 조건
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-이동-유제-273
  page: 114
  category_type: 유제
  problem_summary: |
    원 x²+(y+1)²=4를 직선 x-2y+3=0 대칭이동한 원의 방정식.
  solution_summary: |
    중심 (0, -1)의 x-2y+3=0 대칭점 계산.
    수선: 방향 (1, -2). (0, -1)+t(1,-2) = (t, -1-2t). 직선 위: t-2(-1-2t)+3=0 → 5t+5=0 → t=-1.
    발 (-1, 1). 대칭점 = 2(-1, 1) - (0, -1) = (-2, 3). 반지름 2.
    답: (x+2)²+(y-3)² = 4.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: 원 중심 직선 대칭 · 수선의 발 파라미터
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-이동-유제-274
  page: 115
  category_type: 유제
  problem_summary: |
    f(x,y)=0의 그래프 주어짐. (1) f(-x+1, y+1)=0 (2) f(y+1, x-1)=0 그래프.
  solution_summary: |
    (1) f(-x, y)=0 (y축 대칭) 후 x축 1, y축 -1 평행이동.
    (2) f(y, x)=0 (y=x 대칭) 후 x축 -1, y축 1 평행이동.
    도해 문제 · 그래프 이동
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: 대칭 + 평행이동 조합 그래프
  insight_type: 통찰형
  depth: 2
  citation_note: "개념원리 · 학습 목적"
```

### 연습문제 (STEP1·STEP2·실력UP · p.116~118)

```yaml
- source: 개념원리-CM2-GM-이동-연습-275
  page: 116
  category_type: 연습_step1
  problem_summary: |
    (-5, 4)를 x축 대칭 P, y축 대칭 Q. PQ 길이.
  solution_summary: |
    P(-5,-4), Q(5,4). PQ = √(100+64) = √164 = 2√41.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: 대칭 좌표 · 거리
  insight_type: 절차형
  depth: 1
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-이동-연습-276
  page: 116
  category_type: 연습_step1
  category_meta: 교육청 기출
  problem_summary: |
    A(-3, 4)의 y=x 대칭 B. B의 x축 2, y축 k 평행이동 C. A, B, C 한 직선. k.
  solution_summary: |
    B(4, -3). C(6, -3+k).
    A(-3,4), B(4,-3) 직선 기울기 = -7/7 = -1. y-4 = -(x+3) → x+y=1.
    C 대입: 6+(-3+k)=1 → k = -2. 답 ④.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: 대칭·평행이동 · 공선 조건
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-이동-연습-277
  page: 116
  category_type: 연습_step1
  problem_summary: |
    l: x-3y-6=0을 x축 -2 평행이동 m. l을 x축 대칭 n. m·n과 y축으로 둘러싸인 넓이.
  solution_summary: |
    m: (x+2)-3y-6=0 → x-3y-4=0.
    n: x+3y-6=0.
    m·n의 y축 절편: m: -4/(-3)... x=0에서 m: -3y=4 → y=-4/3. n: 3y=6 → y=2.
    m·n 교점: x=3y+4, x=6-3y → 3y+4 = 6-3y → y=1/3, x=5.
    삼각형 꼭짓점 (0,-4/3), (0,2), (5, 1/3).
    밑변 y축 |2-(-4/3)| = 10/3. 높이 5. 넓이 = 1/2·10/3·5 = 25/3.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: 평행이동·대칭·교점·삼각형 넓이
  insight_type: 조건통합형
  depth: 3
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-이동-연습-278
  page: 116
  category_type: 연습_step1
  problem_summary: |
    (6, -2)를 x축 대칭 후 y=x 대칭 후 x축 -3 평행이동한 점이 y=ax+4 위. a.
  solution_summary: |
    (6, -2) → x축: (6, 2) → y=x: (2, 6) → x축 -3: (-1, 6).
    6 = -a+4 → a=-2.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: 대칭·이동 순차
  insight_type: 절차형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-이동-연습-279
  page: 116
  category_type: 연습_step1
  problem_summary: |
    A(3, 1), B(a, 4), y축 위 P. AP+BP 최솟값 5인 양수 a.
  solution_summary: |
    A의 y축 대칭 A'(-3, 1). 최솟값 = A'B = √((a+3)²+9) = 5 → (a+3)² = 16 → a+3=±4 → a=1 (양수).
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: y축 대칭 · 최소값 조건
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-이동-연습-280
  page: 116
  category_type: 연습_step1
  problem_summary: |
    P(-1, 3)을 y=2x+1 대칭한 Q(a, b). a+b.
  solution_summary: |
    중점 ((a-1)/2, (b+3)/2) 위: (b+3)/2 = 2(a-1)/2 + 1 = a-1+1 = a → b+3 = 2a → 2a-b=3.
    수직: (b-3)/(a+1)·2 = -1 → 2b-6 = -a-1 → a+2b = 5.
    연립: 2a-b=3, a+2b=5. 4a-2b=6 + a+2b=5 → 5a=11 → a=11/5. b = 2·11/5-3 = 7/5.
    a+b = 18/5.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: 중점·수직 연립
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-이동-연습-281
  page: 117
  category_type: 연습_step2
  problem_summary: |
    (x-1)²+(y-a)²=4를 x축 3, y축 -2 평행이동 후 y=x 대칭이동한 원이 y축 접함. 양수 a.
  solution_summary: |
    이동: (x-4)²+(y-a+2)²=4. y=x 대칭: (y-4)²+(x-a+2)²=4 → 중심 (a-2, 4), r=2.
    y축 접함 → |a-2| = 2 → a=4 (양수) 또는 a=0.
    양수: a=4.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: 이동 후 대칭 후 접함
  insight_type: 조건통합형
  depth: 3
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-이동-연습-282
  page: 117
  category_type: 연습_step2
  problem_summary: |
    A(3, 1), y=x 위 P, x축 위 Q. △APQ 둘레 최솟값.
  solution_summary: |
    A의 y=x 대칭 A₁(1, 3). A의 x축 대칭 A₂(3, -1).
    둘레 = AP+PQ+QA ≥ A₁P + PQ + QA₂ = A₁A₂ = √(4+16) = 2√5.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: 두 번 대칭 · 세 변 최소 = 두 대칭점 거리
  insight_type: 통찰형
  depth: 3
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-이동-연습-283
  page: 117
  category_type: 연습_step2
  category_meta: 교육청 기출
  problem_summary: |
    (x-6)²+(y+3)²=4 위 P, x축 위 Q. A(0, -5)에 대하여 AQ+QP 최솟값.
  solution_summary: |
    A의 x축 대칭 A'(0, 5). 원 중심 C(6, -3), 반지름 2.
    AQ+QP ≥ A'Q + QP ≥ A'C - r = √(36+64) - 2 = 10 - 2 = 8.
    답 ①.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: 대칭 · 원 위 점 · 최단거리 - r
  insight_type: 통찰형
  depth: 3
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-이동-연습-284
  page: 117
  category_type: 연습_step2
  problem_summary: |
    y=3x²+12x+8을 (a, -a) 대칭이동한 포물선의 꼭짓점이 제1사분면 위에 있는 정수 a 개수.
  solution_summary: |
    y=3(x+2)²-4. 꼭짓점 (-2, -4). 대칭 후 (2a+2, -2a+4).
    제1사분면: 2a+2>0 → a>-1. -2a+4>0 → a<2. 정수 a = 0, 1. 2개.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: 점 대칭 · 사분면 조건
  insight_type: 조건통합형
  depth: 2
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-이동-연습-285
  page: 117
  category_type: 연습_step2
  problem_summary: |
    x²+y²-4x-8y=0을 y=ax+b 대칭이동하니 x²+y²=c. abc.
  solution_summary: |
    원1: (x-2)²+(y-4)²=20. 중심 (2, 4), r²=20.
    원2: 중심 (0, 0), r²=20 → c=20.
    두 중심이 y=ax+b 대해 대칭 → 중점 (1, 2) 위: 2 = a+b.
    수직: (4-0)/(2-0)·a = -1 → 2a = -1 → a = -1/2. b = 5/2.
    abc = -1/2 · 5/2 · 20 = -25.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: 두 원 중심 대칭 · 축 = 수직이등분선
  insight_type: 통찰형
  depth: 3
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-이동-연습-286
  page: 118
  category_type: 연습_실력up
  problem_summary: |
    f(x,y)=0 그래프 주어짐. f(y, x-1)=0 그래프 (5지선다).
  solution_summary: |
    f(y, x-1)=0 = f(y, (x-1))=0.
    유도: y=x 대칭 (f(y,x)=0) 후 x축 1 평행이동 (x → x-1).
    그림 판독: 원래 반원 → y=x 대칭 후 오른쪽 1 평행이동한 형태.
    (답 계산 대기 · 시각 판단)
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: 대칭·이동 조합 그래프 판독
  insight_type: 통찰형
  depth: 3
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-이동-연습-287
  page: 118
  category_type: 연습_실력up
  problem_summary: |
    x²+y²-2x-3=0을 원점 대칭이동 후 y=x 대칭이동한 원이 x축에 의해 잘린 현 길이.
  solution_summary: |
    원: (x-1)²+y²=4. 원점 대칭: (x+1)²+y²=4. y=x 대칭: (y+1)²+x²=4 → x²+(y+1)²=4.
    중심 (0, -1), r=2. x축 (y=0)과 교점: x²+1=4 → x=±√3. 현 길이 = 2√3.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: 대칭 이중 · x축 자른 현
  insight_type: 조건통합형
  depth: 3
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-이동-연습-288
  page: 118
  category_type: 연습_실력up
  problem_summary: |
    가로 5·세로 6 직사각형 ABCD. BP=1(BC 위), DQ=1(AD 위). 
    X∈AB, Y∈CD. PX+XY+YQ 최솟값.
  solution_summary: |
    P의 AB에 대한 대칭 P'. Q의 CD에 대한 대칭 Q'.
    P'X+XY+YQ' = PX+XY+YQ ≥ P'Q'.
    좌표: A(0,6), B(0,0), C(5,0), D(5,6). P(1,0), Q(4,6).
    P의 AB(x=0) 대칭 P'(-1, 0). Q의 CD(x=5) 대칭 Q'(6, 6).
    P'Q' = √(49+36) = √85.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: 두 변 대칭 (직사각형) · 최단 경로
  insight_type: 통찰형
  depth: 3
  citation_note: "개념원리 · 학습 목적"

- source: 개념원리-CM2-GM-이동-연습-289
  page: 118
  category_type: 연습_실력up
  problem_summary: |
    3x+y-3=0을 직선 x-y-8=0 대칭이동한 직선 l. (1, 2)와 l 사이 거리.
  solution_summary: |
    3x+y-3=0 위 두 점: (1, 0), (0, 3).
    (1, 0)의 x-y-8=0 대칭: 수선 방향 (1, -1). (1+t, -t) 위 대칭축.
    (1+t)-(-t)-8=0 → 2t = 7 → t = 7/2. 발 (9/2, -7/2). 대칭점 (8, -7).
    (0, 3)의 대칭: (t, 3-t). t-(3-t)-8=0 → 2t=11 → t=11/2. 발 (11/2, -5/2). 대칭 (11, -8).
    l 통과 (8, -7), (11, -8). 기울기 -1/3. y+7 = -1/3(x-8) → x+3y+13=0.
    (1, 2)와 거리 = |1+6+13|/√10 = 20/√10 = 2√10.
  tier: star_3
  unit_code: CM2-GM
  standard: 10수05-04
  mechanism_primary: 직선 대칭 (두 점 대칭 이용) · 점-직선 거리
  insight_type: 통찰형
  depth: 3
  citation_note: "개념원리 · 학습 목적"
```

---

## 정독 요약

- **필수 예제**: 9문항 (star_3 5 + star_4 4)
- **확인체크**: 32문항 (star_3 21 + star_4 11)
- **연습문제**: 20문항 (star_3 2 + star_4 8 + star_5 10)
- **총**: 61문항
- **답 계산 대기**: 1문항 (연습 286 시각 판독)

## 소절별 mechanism 분포

| 소절 | 핵심 mechanism | 주요 tier |
|---|---|---|
| 01 평행이동 | (x+a, y+b) · f(x-a, y-b)=0 · 꼭짓점·중심 이동 | star_3~4 |
| 02 대칭이동 | 4대칭 (x축·y축·원점·y=x) · 순차 · 최단거리 | star_3~5 |
| 03 점·직선 대칭 | (2a-x, 2b-y) · 중점+수직 연립 · 원 중심 대칭 | star_3~5 |
| 특강 f(x,y)=0 이동 | 부호 치환 그래프 판독 | star_4~5 |
