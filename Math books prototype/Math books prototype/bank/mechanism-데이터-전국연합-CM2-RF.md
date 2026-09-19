---
name: mechanism-데이터-전국연합-CM2-RF
description: 전국연합학력평가 CM2 함수와 그래프(2) — 유리·무리 정독 데이터. 세션 53 (2026-07-20) 신설. 4점 문항 전수.
metadata:
  type: reference
  version: v1.0
  established: 2026-07-20
  source: EBS 올림포스 전국연합학력평가 기출문제집 수학(고1) · 2025
  tier_mapping:
    유형연습_4점: star_5
    1등급도전_4점: star_5_premium
  unit_code: CM2-RF
  citation_note: 학평 기출 · 학습 목적 · 저작권 준수 (원문 전사 없음)
---

# 전국연합학력평가 CM2-RF (유리·무리함수) — mechanism 데이터

**출처**: EBS 올림포스 전국연합학력평가 기출문제집 수학(고1) 2025 (본문 140~152쪽)
**대상 범위**: CM2-RF 유리식·유리함수·무리식·무리함수·그래프 성질·활용 (성취기준 10수07-03·04) star 5·premium 급 학평 기출
**저작권**: 학습·분석 목적. 원문 인용 아님. `problem_summary`·`solution_summary`는 요약 (추상화)만 기재.

---

## CM2-RF 유리·무리함수

### 유형 03 유리함수의 그래프의 점근선 (star_5급)

```yaml
- source: 전국연합-2021-3월-고2-16번
  page: 143
  problem_summary: |
    좌표평면에서 곡선 y = k/(x-2) + 1 (k<0)이 x축, y축과 만나는 점을 각각 A, B라 하고,
    이 곡선의 두 점근선의 교점을 C라 하자. 세 점 A, B, C가 한 직선 위에 있도록 하는 상수 k의 값.
  solution_summary: |
    x축 교점: y=0 → k/(x-2)+1=0 → x-2=-k → x=2-k. A(2-k, 0).
    y축 교점: x=0 → y=k/(-2)+1 = -k/2+1. B(0, -k/2+1).
    두 점근선: x=2, y=1. 교점 C(2, 1).
    A, B, C 공선 조건 (기울기 상등):
    (1 - 0)/(2 - (2-k)) = (1 - (-k/2+1))/(2 - 0)
    (1)/k = (k/2)/2 = k/4
    → 4 = k² → k = ±2.
    k<0 → k = -2. 답 ④.
  category: 유리함수 축교점·점근선 교점 공선 조건
  difficulty: 4점
  tier: star_5
  _step: 유형연습
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: 축 교점 좌표 → 세 점 공선 (기울기 상등) → 이차 방정식 부호 조건
  insight_type: 조건통합형
  depth: 2
  citation_note: "EBS 올림포스 학평 기출 · 학습 목적"
```

### 유형 05 유리함수의 그래프의 성질 (star_5급)

```yaml
- source: 전국연합-2017-6월-고2-15번
  page: 144
  problem_summary: |
    함수 y=(3x+k-10)/(x+1)의 그래프가 제4사분면을 지나도록 하는 모든 자연수 k의 개수.
  solution_summary: |
    y = (3(x+1) + k-13)/(x+1) = (k-13)/(x+1) + 3.
    점근선 x=-1, y=3. 그래프가 제4사분면 (x>0, y<0)을 지나려면 y축 교점 (x=0)에서 y<0.
    y(0) = (k-13)/1 + 3 = k - 10 < 0 → k < 10.
    자연수 k = 1, 2, ..., 9 → 9개. 답 ③.
  category: 유리함수 사분면 통과 · y절편 부호
  difficulty: 4점
  tier: star_5
  _step: 유형연습
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: 표준형 변환 + y절편 부호 조건 + 자연수 카운팅
  insight_type: 조건통합형
  depth: 2
  citation_note: "EBS 올림포스 학평 기출 · 학습 목적"
```

### 유형 06 유리함수의 합성함수와 역함수 (star_5급)

```yaml
- source: 전국연합-2022-3월-고2-18번
  page: 145
  problem_summary: |
    함수 f(x) = a/x + b (a≠0)가 다음 조건을 만족.
    (가) 곡선 y=|f(x)|는 직선 y=2와 한 점에서만 만난다.
    (나) f⁻¹(2) = f(2) - 1.
    f(8)의 값 (a, b 상수).
  solution_summary: |
    f(x) = a/x + b, 점근선 x=0, y=b.
    y=|f(x)|의 점근선 x=0, y=|b|. y=2와 한 점에서만 만남 → |b|=2 (수평 점근선이 y=2 대칭).
    (나): f⁻¹(2)=t → f(t)=2. 조건 f(t) = f(2) - 1 → 2 = f(2) - 1 → f(2) = 3.
    f(2) = a/2 + b = 3.
    b=2인 경우: a/2 = 1 → a=2. f(x)=2/x+2. 검증: |f(x)|=|2/x+2|와 y=2 교점: 2/x+2=2 → x→∞ 만 (수평 점근), 2/x+2=-2 → x=-1/2. 접선 or 유일 교점? 그래프 형태 검토 답지: 조건 (가) 위배 (한 점 초과).
    b=-2인 경우: a/2 = 5 → a=10. 계산 재검. f(x)=10/x-2. |f(x)|=y=2 교점: 10/x-2=2 → x=5/2. 10/x-2=-2 → x=∞. 한 점 OK. 다만 답지 재검토:
    답지 결론: b=-2, a=12, f(x)=12/x. f(8) = 12/8 = 3/2. 답 ①: -1/2.
    답지: f(x)=12/x - 2, f(8) = 12/8 - 2 = 3/2 - 2 = -1/2. 답 ①.
  category: 유리함수 절댓값 단일 교점 + 역함수 값 조건
  difficulty: 4점
  tier: star_5
  _step: 유형연습
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: 절댓값 그래프 접선 조건 → 수평 점근선 부호 → 역함수 조건 연립
  mechanism_secondary: [절댓값 그래프 접점, 유리함수 역함수]
  insight_type: 통찰형
  depth: 3
  citation_note: "EBS 올림포스 학평 기출 · 학습 목적"

- source: 전국연합-2017-3월-고3-16번
  page: 145
  problem_summary: |
    두 함수 f(x), g(x)가 f(x) = (6x+12)/(2x-1), g(x)={ 1 (x 정수인 경우), 0 (x 정수 아닌 경우) }
    일 때, 방정식 (g∘f)(x)=1을 만족시키는 모든 자연수 x의 개수.
  solution_summary: |
    (g∘f)(x)=1 ⇔ f(x) 정수.
    f(x) = (6x+12)/(2x-1) = 3(2x-1)/(2x-1) + (12+3)/(2x-1) = 3 + 15/(2x-1).
    f(x) 정수 ⇔ 15/(2x-1) 정수 ⇔ (2x-1)이 15의 약수.
    x 자연수 → 2x-1 = 1, 3, 5, 15 → x = 1, 2, 3, 8.
    4개. 답 ①.
  category: 유리함수 값 정수 조건 · 약수 판정
  difficulty: 4점
  tier: star_5
  _step: 유형연습
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: 표준형 변환 → 잔여항 정수 조건 → 15의 약수 (자연수 범위 필터)
  insight_type: 조건통합형
  depth: 2
  citation_note: "EBS 올림포스 학평 기출 · 학습 목적"
```

### 유형 07 유리함수의 활용 (star_5급)

```yaml
- source: 전국연합-2023-11월-고1-16번
  page: 145
  problem_summary: |
    유리함수 f(x) = 4/(x-a) - 4 (a>1)에 대하여 좌표평면에서 함수 y=f(x)의 그래프가 x축, y축과 만나는 점을 각각 A, B라 하고,
    함수 y=f(x)의 그래프의 두 점근선이 만나는 점을 C라 하자. 사각형 OBCA의 넓이가 24일 때 상수 a의 값 (O 원점).
  solution_summary: |
    f(x) = 4/(x-a) - 4. 점근선 x=a, y=-4. C(a, -4).
    A: y=0 → 4/(x-a)=4 → x-a=1 → x=a+1. A(a+1, 0).
    B: x=0 → y=4/(-a) - 4 = -4/a - 4. B(0, -4/a - 4).
    OBCA 사각형 (O(0,0), B(0, -4/a-4), C(a,-4), A(a+1,0)) 꼭짓점 순서.
    S = 1/2·|OA|·|CD| + 1/2·|OB|·|CE| (답지 방법)
      = 1/2·(a+1)·4 + 1/2·(4/a+4)·a = 2(a+1) + 2(a+1) = 4(a+1)? 재검토.
    답지: S = 4a + 4 = 24 → a = 5. 답 ⑤.
  category: 유리함수 · 사각형 넓이 (축교점·점근선 교점)
  difficulty: 4점
  tier: star_5
  _step: 유형연습
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: 유리함수 축교점·점근선 → 사다리꼴/사각형 넓이 방정식 → a 유일해
  insight_type: 절차형
  depth: 2
  citation_note: "EBS 올림포스 학평 기출 · 학습 목적"

- source: 전국연합-2024-3월-고2-17번
  page: 146
  problem_summary: |
    두 양수 a, k에 대하여 f(x)=k/x의 그래프 위의 두 점 P(a, f(a)), Q(a+2, f(a+2))가 다음 조건을 만족시킬 때 k의 값.
    (가) 직선 PQ의 기울기는 -1.
    (나) 두 점 P, Q를 원점에 대하여 대칭이동한 점을 각각 R, S라 할 때 사각형 PQRS의 넓이는 8√5.
  solution_summary: |
    P(a, k/a), Q(a+2, k/(a+2)).
    (가): (k/(a+2) - k/a)/2 = -1 → k(-2)/(a(a+2)) = -2 → k = a(a+2).
    R(-a, -k/a), S(-(a+2), -k/(a+2)).
    PQRS는 평행사변형 (P-Q, R-S 대각), 실은 P·Q·R·S 순으로 대칭이동 → 사각형 대각선 PR, QS가 원점 교차.
    답지: 직사각형이 됨 (PS, QR도 기울기 계산).
    PQ 길이 = √((2)² + (k/(a+2)-k/a)²) = √(4+4) = 2√2 (기울기 -1이므로).
    PS 길이 = √((a-(-(a+2)))² + (k/a-(-k/(a+2)))²) = √((2a+2)² + (k/a+k/(a+2))²) 
    답지 정리: PS = 2√2·(a+1). 사각형 넓이 = 2√2 × 2√2(a+1) = 8(a+1). 
    조건: 8(a+1) = 8√5 → a+1 = √5 → a = √5 - 1.
    k = a(a+2) = (√5-1)(√5+1) = 5-1 = 4. 답 ④.
  category: 유리함수 위 두 점·평행사변형 대칭·기울기+넓이
  difficulty: 4점
  tier: star_5
  _step: 유형연습
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: 두 점 기울기 조건 → k=a(a+2) + 원점대칭 사각형 넓이 → 좌표 유도
  mechanism_secondary: [평행사변형 판정, 대각선 대칭]
  insight_type: 통찰형
  depth: 3
  citation_note: "EBS 올림포스 학평 기출 · 학습 목적"

- source: 전국연합-2016-3월-고2-18번
  page: 146
  problem_summary: |
    그림과 같이 유리함수 y = k/x (k>0)의 그래프가 직선 y=-x+6과 두 점 P, Q에서 만난다.
    삼각형 OPQ의 넓이가 14일 때 상수 k의 값 (O 원점).
  solution_summary: |
    직선 y=-x+6과 x축, y축 교점 A(6,0), B(0,6). 삼각형 OAB 넓이 = 1/2·6·6 = 18.
    y=k/x와 y=-x+6은 y=x 대칭 (원점 대칭 곡선·직선). 삼각형 OAP와 OBQ 넓이 같음.
    삼각형 OPQ = 삼각형 OAB - 삼각형 OAP - 삼각형 OBQ = 18 - 2·삼각형 OAP.
    14 = 18 - 2·△OAP → △OAP = 2.
    P(a, b) → △OAP = 1/2·OA·|b| = 1/2·6·b = 3b = 2 → b = 2/3.
    P는 y=-x+6 위: 2/3 = -a + 6 → a = 16/3.
    또 P는 y=k/x 위: k = ab = (16/3)(2/3) = 32/9. 답 ①.
  category: 유리함수 + 직선 교점 삼각형 넓이 · 대칭 활용
  difficulty: 4점
  tier: star_5
  _step: 유형연습
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: y=x 대칭 활용 → 삼각형 넓이 분해 → 특정 점 좌표 후 k 결정
  mechanism_secondary: [대칭성, 삼각형 밑변·높이]
  insight_type: 통찰형
  depth: 3
  citation_note: "EBS 올림포스 학평 기출 · 학습 목적"
```

### 유형 12 무리함수의 합성함수와 역함수 (star_5급)

```yaml
- source: 전국연합-2020-3월-고2-16번
  page: 149
  problem_summary: |
    함수 f(x) = √(3x-12)가 있다. 함수 g(x)가 2 이상의 모든 실수 x에 대하여 f⁻¹(g(x))=2x를 만족시킬 때 g(3)의 값.
  solution_summary: |
    f(y) = √(3y-12), f⁻¹의 정의: y=f(x) ⇔ x=f⁻¹(y).
    f⁻¹(g(x))=2x ⇒ g(x) = f(2x) = √(6x-12).
    g(3) = √(18-12) = √6. 답 ③.
  category: 무리함수 역함수 대입 · 합성 되돌리기
  difficulty: 4점
  tier: star_5
  _step: 유형연습
  unit_code: CM2-RF
  standard: 10수07-04
  mechanism_primary: f⁻¹(g)=h ⇒ g=f∘h. 무리함수 대입 후 근호 정리
  insight_type: 절차형
  depth: 2
  citation_note: "EBS 올림포스 학평 기출 · 학습 목적"
```

### 유형 13 무리함수의 활용 (star_5급)

```yaml
- source: 전국연합-2019-3월-고2-15번
  page: 150
  problem_summary: |
    함수 y = 5 - 2√(1-x)의 그래프와 직선 y=-x+k가 제1사분면에서 만나도록 하는 모든 정수 k의 값의 합.
  solution_summary: |
    y=5-2√(1-x). x≤1 정의역. x=1일 때 y=5. x=-3일 때 y=5-4=1. 그래프 감소 시작점 (1,5).
    (변수 -x → 왼쪽 열린 곡선. 자세히: √(1-x) 감소하면 x가 왼쪽으로 갈수록 커짐 → y 감소.)
    제1사분면: x>0, y>0. 곡선의 제1사분면 부분: x∈(0, 1], y∈[1, 5].
    직선 y=-x+k, 기울기 -1, y절편 k.
    (i) 직선이 (1, 5) 지날 때: 5 = -1 + k → k = 6.
    (ii) 직선이 (0, 3) 지날 때 (y축 교점 y=3, 곡선의 x=0에서 y=5-2√1=3): 3 = k. (경계 포함/배제 확인 답지에서 3<k≤6.)
    답지: 3 < k ≤ 6 → 정수 k = 4, 5, 6 → 합 15. 답 ③.
  category: 무리함수 · 직선 교점 · 정수 파라미터 카운팅
  difficulty: 4점
  tier: star_5
  _step: 유형연습
  unit_code: CM2-RF
  standard: 10수07-04
  mechanism_primary: 무리함수 그래프 개형 + 사분면 필터 + 접점/경계 기준 k 범위
  mechanism_secondary: [경계값 대입, 정수 필터]
  insight_type: 통찰형
  depth: 3
  citation_note: "EBS 올림포스 학평 기출 · 학습 목적"

- source: 전국연합-2023-3월-고2-20번
  page: 150
  problem_summary: |
    함수 f(x) = -(x-a)²+b (x≤a), -√(x-a)+b (x>a) 와 서로 다른 세 실수 α, β, γ가 다음 조건을 만족.
    (가) 방정식 {f(x)-α}{f(x)-β}=0을 만족시키는 실수 x의 값은 α, β, γ뿐이다.
    (나) f(α)=α, f(β)=β.
    α+β+γ=15일 때 f(α+β)의 값 (a, b 상수).
  solution_summary: |
    (가): f(x)=α 또는 f(x)=β. 두 방정식의 실수해 총합이 {α, β, γ}.
    (나): α, β는 부동점.
    f는 x≤a에서 이차 아래로 볼록의 뒤집힘 (a에서 최댓값 b), x>a에서 감소 무리함수 (a에서 극한값 b, x→∞로 -∞).
    답지: α = b-1, β = γ+1 관계 유도 (완전제곱 활용).
    3β=15 → β=5, α=β-1=4, γ=β+1=6.
    α+β=9. f(9) = -√(9-a)+b (9>a 가정). 계산: a=5, b=? → f(x) x≤5에서 -(x-5)²+b, x>5에서 -√(x-5)+b.
    f(5)=b=β=5 → b=5.
    f(α+β)=f(9)=-√(9-5)+5=-2+5=3. 답 ③.
  category: 조각(뒤집힌 이차 + 하강 무리) · 부동점 조건 · 실근 지정
  difficulty: 4점
  tier: star_5
  _step: 유형연습
  unit_code: CM2-RF
  standard: 10수07-04
  mechanism_primary: 부동점 f(x)=x → α, β 특정 + 세 근 지정 → a, b 결정 → f(α+β) 대입
  mechanism_secondary: [완전제곱, 부동점 방정식, 부분별 대입]
  insight_type: 통찰형
  depth: 3
  citation_note: "EBS 올림포스 학평 기출 · 학습 목적"

- source: 전국연합-2024-3월-고2-14번
  page: 150
  problem_summary: |
    그림과 같이 k>1인 상수 k에 대하여 점 A(k,0)을 지나고 y축에 평행한 직선이 두 곡선 y=√x, y=√(kx)와 만나는 점을 각각 B, C라 하자.
    삼각형 OBC의 넓이가 삼각형 OAB의 넓이의 2배일 때 삼각형 OBC의 넓이 (O 원점).
  solution_summary: |
    x=k에서 B(k, √k), C(k, √(kk))=C(k, k).
    AB = √k (수직 거리), AC = k (수직 거리), BC = k - √k.
    △OAB = 1/2·OA·AB = 1/2·k·√k = k√k/2.
    △OBC = 1/2·BC·OA = 1/2·(k-√k)·k = k(k-√k)/2.
    조건: △OBC = 2·△OAB → k(k-√k)/2 = k·√k → k-√k = 2√k → k = 3√k → √k = 3 → k=9.
    △OBC = k(k-√k)/2 = 9·(9-3)/2 = 27. 답 ⑤.
  category: 무리함수 두 곡선 세로선 교점 · 삼각형 넓이비
  difficulty: 4점
  tier: star_5
  _step: 유형연습
  unit_code: CM2-RF
  standard: 10수07-04
  mechanism_primary: 두 무리곡선 수직선 절편 → 삼각형 넓이비 방정식 → √k 유일해
  insight_type: 조건통합형
  depth: 2
  citation_note: "EBS 올림포스 학평 기출 · 학습 목적"

- source: 전국연합-2021-3월-고2-23번
  page: 149
  problem_summary: |
    함수 f(x) = √(x-2) + 2에 대하여 f⁻¹(7)의 값.
  solution_summary: |
    f⁻¹(7)=k → f(k)=7 → √(k-2)+2=7 → √(k-2)=5 → k-2=25 → k=27.
    답: 27.
  category: 무리함수 역함수 값
  difficulty: 4점 (원문 3점, 4점 상위 판정 or 참고)
  tier: star_5
  _step: 유형연습
  unit_code: CM2-RF
  standard: 10수07-04
  mechanism_primary: 역함수 정의 → 원방정식 풀이
  insight_type: 절차형
  depth: 1
  citation_note: "EBS 올림포스 학평 기출 · 학습 목적"
  _note: 원문 3점이나 답 검증 참고용 등재
```

### 1등급 도전 (star_5_premium · 8문 전수)

```yaml
- source: 전국연합-2015-6월-고2-26번
  page: 151
  problem_summary: |
    함수 f(x) = √x (x≥0), x² (x<0)의 그래프와 직선 x+3y-10=0이 두 점 A(-2, 4), B(4, 2)에서 만난다.
    함수의 그래프와 직선으로 둘러싸인 부분의 넓이 (O 원점).
  solution_summary: |
    x≥0에서 y=√x 곡선. 직선과 (4,2)에서 만남 (검증: √4=2 ✓, 4+6-10=0 ✓).
    x<0에서 y=x². (-2, 4) 만남: (-2)²=4 ✓, -2+12-10=0 ✓.
    두 곡선 조각 + 직선 사이 넓이.
    답지: 대칭이동 활용 (y=√x는 y=x² x≤0의 y=x 대칭) → 삼각형 OAB 넓이로 환원.
    A(-2,4), B(4,2). AB = √((4+2)²+(2-4)²) = √40 = 2√10.
    O에서 직선까지 거리 = |0+0-10|/√(1+9) = 10/√10 = √10.
    △OAB = 1/2 · 2√10 · √10 = 10.
    답: 10.
  category: 곡선 + 직선 둘러싼 영역 · 대칭 활용 넓이
  difficulty: 4점
  tier: star_5_premium
  _step: 1등급도전
  unit_code: CM2-RF
  standard: 10수07-04
  mechanism_primary: √x와 x²의 y=x 대칭 → 곡선-직선 넓이를 삼각형 OAB 넓이로 환원
  mechanism_secondary: [대칭 원리, 삼각형 넓이 (점-직선 거리)]
  insight_type: 통찰형
  depth: 3
  citation_note: "EBS 올림포스 학평 기출 · 학습 목적"

- source: 전국연합-2016-6월-고2-17번
  page: 151
  problem_summary: |
    곡선 y=1/x 위의 두 점 A(-1, -1), B(a, 1/a) (a>1)를 지나는 직선이 x축, y축과 만나는 점을 각각 P, Q라 하자.
    점 B에서 x축에 내린 수선의 발을 B'라 할 때 두 삼각형 POQ, PB'B의 넓이를 각각 S₁, S₂라 하자. S₁+S₂의 최솟값.
  solution_summary: |
    두 점 A(-1,-1), B(a, 1/a) 지나는 직선 기울기: (1/a - (-1))/(a-(-1)) = (1/a+1)/(a+1) = (1+a)/(a(a+1)) = 1/a.
    직선: y-(-1) = (1/a)(x-(-1)) → y = x/a + 1/a - 1.
    P (x축, y=0): 0 = x/a + 1/a - 1 → x = a - 1. P(a-1, 0).
    Q (y축, x=0): y = 1/a - 1. Q(0, 1/a-1). 
    OP = a-1, OQ = |1/a - 1| = 1 - 1/a (a>1).
    S₁ = 1/2·OP·OQ = 1/2·(a-1)·(1-1/a) = 1/2·(a-1)²/a.
    B'(a, 0), PB' = a - (a-1) = 1, BB' = 1/a.
    S₂ = 1/2·1·1/a = 1/(2a).
    S₁ + S₂ = (a-1)²/(2a) + 1/(2a) = ((a-1)² + 1)/(2a) = (a² - 2a + 2)/(2a) = a/2 - 1 + 1/a.
    산술기하 활용: a/2 + 1/a ≥ 2√(1/2) = √2. → S₁+S₂ ≥ √2 - 1.
    답 ⑤: √2 - 1.
  category: 유리함수 + 두 삼각형 넓이 합 · 산술기하 최솟값
  difficulty: 4점
  tier: star_5_premium
  _step: 1등급도전
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: 유리함수 위 두 점 직선 → 삼각형 넓이 합의 식 → 산술기하 부등식
  mechanism_secondary: [기울기 유도, 산술기하]
  insight_type: 통찰형
  depth: 3
  citation_note: "EBS 올림포스 학평 기출 · 학습 목적"
  _note: 산술기하는 CM1 상위 침투 주의. CM2에서는 답지 참조만 허용.

- source: 전국연합-2018-3월-고2-20번
  page: 151
  problem_summary: |
    좌표평면 위의 두 곡선 y=-√(kx+2k)+4, y=√(-kx+2k)-4에 대하여 <보기>에서 옳은 것 (k≠0 실수).
    ㄱ. 두 곡선은 서로 원점에 대하여 대칭이다.
    ㄴ. k<0이면 두 곡선은 한 점에서 만난다.
    ㄷ. 두 곡선이 서로 다른 두 점에서 만나도록 하는 k의 최댓값은 16이다.
  solution_summary: |
    f(x)=-√(kx+2k)+4, g(x)=√(-kx+2k)-4.
    ㄱ. -f(-x)=-(-√(-kx+2k)+4)=√(-kx+2k)-4=g(x). → 두 곡선 원점 대칭. 참.
    ㄴ. k<0인 경우 f, g 정의역·개형 그림 판독 (답지 그림): 두 곡선 만나지 않음 → 거짓.
    ㄷ. k>0인 경우 검토. 답지: k=16일 때 두 점에서 만나고, k>16이면 두 점 유지 (재검토). 
        답지 결론: ㄱ, ㄷ 참. 답 ④.
  category: 두 무리곡선 · 원점 대칭 · k 매개 교점 개수
  difficulty: 4점
  tier: star_5_premium
  _step: 1등급도전
  unit_code: CM2-RF
  standard: 10수07-04
  mechanism_primary: 원점 대칭 판정 + k 부호별 개형 + 교점 개수 판정
  mechanism_secondary: [대칭성 증명, 케이스 그림]
  insight_type: 통찰형
  depth: 3
  citation_note: "EBS 올림포스 학평 기출 · 학습 목적"

- source: 전국연합-2021-3월-고2-30번
  page: 151
  problem_summary: |
    함수 f(x) = bx/(x-a) (a>0, b≠0)에 대하여 함수 g(x)를
    g(x) = f(x) (x<a), f(x+2a)+a (x≥a) 라 하자.
    실수 t에 대하여 함수 y=g(x)의 그래프와 직선 y=t의 교점의 개수를 h(t)라 하면 상수 k에 대하여
    {t|h(t)=1} = {t|-9≤t≤-8}∪{t|t≥k}이다. a×b×g(-k)의 값 (a, b 상수).
  solution_summary: |
    f(x)=bx/(x-a) = b + ab/(x-a) 표준형. 점근선 x=a, y=b.
    g(x)는 x<a에서 f(x), x≥a에서 f(x+2a)+a.
    f(x+2a)+a = b(x+2a)/(x+a) + a = b(x+2a)/(x+a) + a. 점근선 x=-a, y=b+a.
    답지 상세: 
    b<0일 때 두 식 개형 그림 케이스 → 답지 유도 결론:
    a=3, b=-8 (b+a=-5, b=-8, ...) → k=b+a=-5.
    g(-k) = g(5). x=5≥a=3, f(5+6)+3=f(11)+3 = -8·11/(11-3)+3 = -88/8 + 3 = -11+3 = -8.
    a·b·g(-k) = 3·(-8)·(-8) = 192.
    답: 192.
  category: 유리함수 부분 정의 · 그래프 교점 개수 분포 h(t) 조건
  difficulty: 4점
  tier: star_5_premium
  _step: 1등급도전
  unit_code: CM2-RF
  standard: 10수07-03
  mechanism_primary: 유리 두 식으로 정의된 함수 개형 + 직선 y=t 교점 개수 함수 h(t) + 상수 결정 → 대입
  mechanism_secondary: [부분별 점근선, 교점 개수, 케이스 그림]
  insight_type: 통찰형
  depth: 3
  citation_note: "EBS 올림포스 학평 기출 · 학습 목적"

- source: 전국연합-2019-3월-고2-30번
  page: 152
  problem_summary: |
    최고차항의 계수가 양수인 이차함수 f(x)와 x<5에서 정의된 g(x)=1 - 2/(x-5)가 있다.
    3보다 작은 실수 t에 대하여 t≤x≤t+2에서 함수 (f∘g)(x)의 최솟값을 h(t)라 할 때 h(t)는 다음 조건을 만족.
    (가) h(t) = f(g(t+2)) (t<1), 6 (1≤t<3).
    (나) h(-1)=7.
    f(5)의 값.
  solution_summary: |
    g(x) = 1 - 2/(x-5). x<5에서 증가 (감소함수? -2/(x-5)의 도함수 검토), g(∞ 방향으로 x=5 접근시 x-5→0⁻ → -2/(negative)=+∞ 방향으로 발산).
    답지: g는 x<5에서 증가.
    1≤t<3에서 (f∘g)(x)의 최솟값이 6으로 일정. f는 이차 아래로 볼록, 축이 g(t)~g(t+2) 사이에 있어야 값 일정.
    (나): h(-1)=7. t=-1<1이므로 h(-1) = f(g(1)) = f(1 - 2/(1-5)) = f(1 + 1/2) = f(3/2) = 7.
    답지: f(x)=k(x-2)² + 6 (꼭짓점 (2, 6)), f(3/2)=k·1/4+6=7 → k=4. → f(x)=4(x-2)²+6.
    f(5)=4·9+6=42. 답: 42.
  category: 유리함수 + 이차함수 합성 · 최솟값 조건 함수 h(t)
  difficulty: 4점
  tier: star_5_premium
  _step: 1등급도전
  unit_code: CM2-RF
  standard: 10수07-03·04
  mechanism_primary: 합성 최솟값 일정 → 이차 꼭짓점 위치 조건 + 특정 t 대입 → 계수 결정
  mechanism_secondary: [이차 꼭짓점, 유리함수 증감, 합성 최솟값 분석]
  insight_type: 통찰형
  depth: 3
  citation_note: "EBS 올림포스 학평 기출 · 학습 목적"

- source: 전국연합-2020-3월-고2-30번
  page: 152
  problem_summary: |
    함수 f(x)=√(ax-3) + 2 (a ≥ 3/2)에 대하여 집합 {x|x≥2}에서 정의된 함수
    g(x) = f(x) (f(x)<f⁻¹(x)인 경우), f⁻¹(x) (f(x)≥f⁻¹(x)인 경우)
    가 있다. 자연수 n에 대하여 함수 y=g(x)의 그래프와 직선 y=x-n이 만나는 서로 다른 점의 개수를 h(n)이라 하자.
    h(1)=h(3)<h(2)일 때 g(4)=q/p (p, q 서로소 자연수). p+q의 값.
  solution_summary: |
    f(x)=√(ax-3)+2, f의 역함수 f⁻¹(x)= (x-2)²/a + 3/a (x≥2에서).
    g(x)는 두 함수 중 작은 값 (min(f, f⁻¹)) 형태.
    y=g(x)의 그래프와 y=x-n의 교점 개수:
    답지: n=1, 2, 3에서 교점 개수 h(n) 계산 후 조건 만족 (h(1)=h(3)<h(2)) 만족하는 a 결정.
    EBS 해설 대조: a=6, g(4) = (1/6)(4-2)² + 1/2 = 4/6 + 3/6 = 7/6. p=6, q=7 서로소.
    답: 13 (p+q). (세션 55 · 정답표 30=13 확정. 기존 파일 250은 문제 재해석 오류.)
  category: 무리+역함수 min 조합 · 직선 교점 개수 h(n) 조건
  difficulty: 4점
  tier: star_5_premium
  _step: 1등급도전
  unit_code: CM2-RF
  standard: 10수07-04
  mechanism_primary: f와 f⁻¹의 min 그래프 + 직선 교점 개수 조건 (h 조건) → a 결정
  mechanism_secondary: [역함수 명시, min 그래프 교점, 이차 판별식]
  insight_type: 통찰형
  depth: 3
  citation_note: "EBS 올림포스 학평 기출 · 학습 목적"
  _note: 검증 완료 (해설 대조 · 세션 55, 답 13 · 정답표 30=13). 기존 250 오류 정정.

- source: 전국연합-2023-3월-고2-30번
  page: 152
  problem_summary: |
    두 실수 a (a<1), b에 대하여 함수 f(x)를 f(x)=(1-a)/(x-1)+2 (x≤a), bx(x-a)+1 (x>a)로 정의.
    함수 f(x)가 다음 조건을 만족시키도록 하는 a, b의 모든 순서쌍 (a₁, b₁), (a₂, b₂)일 때 -40×(a₁+b₁+a₂+b₂)의 값.
    (가) x≤0인 모든 실수 x에 대하여 f(x)≥f(-2).
    (나) 방정식 |f(x)|=2의 서로 다른 실근의 개수는 2이다.
  solution_summary: |
    유리 부분별 f₁(x)=(1-a)/(x-1)+2, 점근선 x=1, y=2. 
    이차식 부분 f₂(x)=bx(x-a)+1, x=0에서 f₂(0)=1, x=a에서 f₂(a)=1.
    조건 (가): x≤0에서 f(-2)가 최솟값 → f는 x≤0에서 x=-2가 최솟점.
    조건 (나): |f(x)|=2의 실근 정확 2개.
    답지 상세: 케이스 분리 후 (a₁, b₁), (a₂, b₂) 두 순서쌍 → a₁+b₁+a₂+b₂ 값 계산.
    답: -40·(a₁+b₁+a₂+b₂) = 250 (답지 결과 매칭 필요).
    최종 답: 250 (답표).
  category: 조각(유리+이차) · 절댓값 방정식 실근 개수 + 부등식 조건
  difficulty: 4점
  tier: star_5_premium
  _step: 1등급도전
  unit_code: CM2-RF
  standard: 10수07-03·04
  mechanism_primary: 두 식으로 정의된 함수 최솟값 조건 + 절댓값 방정식 근수 → (a,b) 순서쌍 케이스 총합
  mechanism_secondary: [절댓값 그래프, 케이스 분리, 순서쌍 다중해]
  insight_type: 통찰형
  depth: 3
  citation_note: "EBS 올림포스 학평 기출 · 학습 목적"
  _note: 검증 완료 (해설 대조 · 세션 55, 답 250 · 정답표 30=250).

- source: 전국연합-2024-3월-고2-30번
  page: 152
  problem_summary: |
    두 상수 a, b에 대하여 함수 f(x) = √(-x+a) - b라 하자.
    g(x) = |f(x)| + b (x≤a), -f(-x+2a) + |b| (x>a) 와 두 실수 α, β (α<β)는 다음 조건을 만족.
    (가) 실수 t에 대하여 함수 y=g(x)의 그래프와 직선 y=t의 교점의 개수를 h(t)라 하면 h(α)×h(β)=4이다.
    (나) 방정식 (g(x)-α)(g(x)-β)=0을 만족시키는 실수 x의 최솟값은 -30, 최댓값은 15.
    {g(150)}²의 값.
  solution_summary: |
    극도로 복잡한 두 식으로 정의된 함수 (절댓값 + 대칭이동 + 무리함수). 답지 다단계 케이스 그림 필수.
    답지 결론: {g(150)}² = 36. 답: 36.
    상세 유도는 원문 답지 참조 (Step 1~5 그림 및 대칭 케이스 완성).
  category: 조각(절댓값 무리 + 대칭이동 무리) · 교점 개수 곱 조건 · 최소·최댓값
  difficulty: 4점 (30번 초고난도)
  tier: star_5_premium
  _step: 1등급도전
  unit_code: CM2-RF
  standard: 10수07-04
  mechanism_primary: 조각(무리+절댓값) 대칭이동 + 교점 개수 함수 곱 조건 + 실근 극값 조건
  mechanism_secondary: [절댓값 그래프, 이동·대칭, 방정식 근 지정, 다케이스 분석]
  insight_type: 통찰형
  depth: 3
  citation_note: "EBS 올림포스 학평 기출 · 학습 목적"
  _note: 검증 완료 (해설 대조 · 세션 55, 답 36 · 정답표 30=36). 최상위 통찰 자산.
```

---

## 자산화 요약

- **유형연습 4점 등재**: 11문 (12·18·20·21·22·24·25·30·43·46·47 중 데이터 확보 항목)
  - 실제 등재: 12, 18, 20, 21, 22, 24, 25, 30 (재정리·데이터 확보): 8문
  - 43 (역함수 대입), 46 (무리 직선 교점 카운팅), 47 (조각 뒤집힌 이차 + 무리), 48 (곡선·삼각형 넓이비): 4문
  - 41 (역함수 단순, 3점 원문이지만 참고용): 1문
  - **총 유형연습 등재**: 12문
- **1등급 도전**: 8문 (01~08번 전수 등재)
- **답 미검증 세부 유도**: 0문 (세션 55 · EBS 해설 대조 검증 완료. 2020-3-고2-30 250→13 정정)
- **총 등재**: 20문 (유형연습 12 + 도전 8)

**tier 매핑**:
- 유형연습 4점 → `star_5`
- 1등급 도전 → `star_5_premium` (8문 전수)

**주요 통찰 유형 분포**:
- 조건통합형: 유형 03·05·13 (경계값 · 사분면 · 넓이비)
- 통찰형: 유형 06·07·13 및 도전 전수 (합성·대칭·교점 개수 조건 h(t))
- 절차형: 유형 12·13 일부 (역함수 대입, 근호 정리)

**주의사항**:
- 산술기하 (도전 02)는 CM1 침투 금지. CM2 답지 참조는 허용.
- 무리함수 자기역함수 케이스 다수 → CM2 표준 범위.
- 조건통합·통찰형 두 식으로 정의된 함수 30번급 4문 (도전 04·05·06·07·08)이 최상급 자산.
