---
name: mechanism-데이터-고쟁이-CM1-CH07-여러부등식-STEP1
description: 고쟁이 공통수학1 2025 CH07 여러 가지 부등식 STEP 1 정독 데이터. Stage 1 P2 · 원본 은행. 저작권 준수.
metadata:
  type: reference
  version: v1.0
  established: 2026-07-16
  source: 고쟁이 공통수학1 2025 (이투스북)
  step: STEP 1
  tier_mapping:
    STEP_1: star_3 (default) · star_4 (예외 명시)
  unit_code: CM1-EQ
  citation_note: 고쟁이 · 학습 목적 · 저작권 준수 (원문 전사 없음)
  extract_range: "문항 539~561 (23문 · STEP 1 교과서 정복 핵심 유형)"
  pages_problem: p.142~146 (본문)
  pages_solution: p.109~111 (해설)
---

# 고쟁이 공통수학1 (2022개정) — CH07 여러 가지 부등식 · STEP 1 정독 데이터

**출처**: 고쟁이 공통수학1 2025 · CH07 여러 가지 부등식
**대상 범위**: STEP 1 교과서를 정복하는 핵심 유형 (539~561, 23문항)
**정독 페이지**: 본문 p.142~146 · 해설 p.109~111
**총 문항 수**: **23문항**
**정독 일자**: 2026-07-16

---

## STEP 1 (#539~#561, 23문항 · p.142~146)

### 유형 01 부등식의 성질과 절댓값을 포함한 일차부등식 (#539~#543)

```yaml
- source: 고쟁이-CM1-CH07-STEP1-#539
  page: 142
  problem_summary: |
    부등식 |3x-1|<5를 만족시키는 정수 x의 개수 구하기.
  category: 절댓값 부등식 · 정수 개수
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: -5<3x-1<5 → 정수 x 개수
  insight_type: 절차형
  depth: 1
  frequency_mark: 빈출

- source: 고쟁이-CM1-CH07-STEP1-#540
  page: 142
  problem_summary: |
    두 상수 a, b (a<b)에 대해 부등식 |x-a| ≤ |x-b|의 해 구하기.
  category: 두 절댓값 비교 (수직선 거리)
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: |x-a|≤|x-b| ↔ x는 (a+b)/2 이하 · 수직선 거리 해석
  insight_type: I-EQV
  depth: 1

- source: 고쟁이-CM1-CH07-STEP1-#541
  page: 142
  problem_summary: |
    부등식 |ax-b|≤3의 해가 -1≤x≤2일 때, 양의 실수 a, b에 대해 a-b 값 구하기.
  category: 절댓값 부등식 · 해 조건 → 계수
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: 해 구간 중점=b/a · 반지름 3/a · 연립 결정
  insight_type: I-EQV
  depth: 2

- source: 고쟁이-CM1-CH07-STEP1-#542
  page: 142
  problem_summary: |
    부등식 |x+1|+|x-2|<9를 만족시키는 정수 x의 개수 (선택형).
  category: 두 절댓값 합
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: 세 구간 분할 (x<-1·-1≤x<2·x≥2) → 각 경우 해집합
  insight_type: 절차형
  depth: 1
  frequency_mark: 빈출

- source: 고쟁이-CM1-CH07-STEP1-#543
  page: 142
  problem_summary: |
    임의의 세 실수 a, b, c에 대해 보기 3항 (a<b이면 a+c<b+c / ab≠0, a<b이면 1/a>1/b / a²<b²이면 a<b) 중 옳은 것 고르기.
  category: 부등식 성질 판정
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: 부등식 성질 · 반례
  insight_type: I-MI
  depth: 2
```

### 유형 02 미지수가 1개인 연립일차부등식 (#544~#545)

```yaml
- source: 고쟁이-CM1-CH07-STEP1-#544
  page: 143
  problem_summary: |
    연립부등식 {-4≤x≤6, -11<2x-1<9}을 만족시키는 정수 x의 개수.
  category: 연립일차부등식 · 정수 개수
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: 두 해 공통 부분 · 정수 카운팅
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH07-STEP1-#545
  page: 143
  problem_summary: |
    연립부등식 -15<2x-3<x+8의 해가 p<x<q일 때 p+q 값.
  category: 연쇄 부등식 · 해 구간 합
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: 두 부등식 분리 · 공통 해 · 끝값 합
  insight_type: 절차형
  depth: 1
```

### 유형 03 이차부등식의 풀이 (#546~#552)

```yaml
- source: 고쟁이-CM1-CH07-STEP1-#546
  page: 143
  problem_summary: |
    다음 중 이차부등식의 해를 잘못 구한 것 (선택형 5개 항 나열 · 판별식 분석).
  category: 이차부등식 · 오답 판정
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: 판별식 D · 이차부등식 해 유형 5종 판단
  insight_type: I-MI
  depth: 2

- source: 고쟁이-CM1-CH07-STEP1-#547
  page: 143
  problem_summary: |
    이차부등식 6x²-ax+b<0의 해가 -1/2<x<7/3일 때, 실수 a, b에 대해 a+b 값.
  category: 이차부등식 해 → 계수 결정
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: 해 구간 → 이차식 인수화 → 계수 매칭
  insight_type: I-EQV
  depth: 2

- source: 고쟁이-CM1-CH07-STEP1-#548
  page: 144
  problem_summary: |
    이차부등식 x²+(a+1)x+a≥0이 모든 실수 x에 대해 성립할 때, 실수 a 값 (선택형).
  category: 절대부등식 · D≤0
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: 판별식 D=(a+1)²-4a=(a-1)²≤0 → a=1
  insight_type: I-EQV
  depth: 2
  frequency_mark: 빈출

- source: 고쟁이-CM1-CH07-STEP1-#549
  page: 144
  problem_summary: |
    이차부등식 f(x)>0의 해가 -3<x<1일 때, 부등식 f(2x-1)≥f(2)를 만족시키는 정수 x의 개수.
  category: 함수의 이차부등식 · 치환
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: f(x) = a(x+3)(x-1), a<0 · 대칭축 x=-1 · f 값 비교 → 2x-1 위치 판정
  insight_type: I-RT
  depth: 2
  frequency_mark: 빈출

- source: 고쟁이-CM1-CH07-STEP1-#550
  page: 144
  problem_summary: |
    이차항의 계수가 음수인 이차함수 y=f(x)의 그래프가 직선 y=2x+1과 서로 다른 두 점에서 만남. 이 두 점의 y좌표가 각각 -1, 11일 때, 이차부등식 f(x)-2x-1≥0의 해.
  category: 그래프 교점 y좌표 → 해 구간
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: y좌표 → x좌표 (직선식) · f(x)-2x-1=0의 두 근 · 이차부등식 해
  insight_type: I-EQV
  depth: 2

- source: 고쟁이-CM1-CH07-STEP1-#551
  page: 144
  problem_summary: |
    이차함수 y=f(x)의 그래프 (그림 제공 · 축과 두 점 -6, 2에서 만남 · 최소 y=-12)에 대해 부등식 f(x)+7≥0의 해 (선택형).
  category: 그래프 · 부등식 해석
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: 그래프 → f(x) = (x+6)(x-2) 형태 · f(x)+7=0 인수 → 해
  insight_type: I-MI
  depth: 2

- source: 고쟁이-CM1-CH07-STEP1-#552
  page: 144
  problem_summary: |
    0<x<2인 모든 실수 x에 대해 이차부등식 -2x²+4kx-k+3>0이 성립하도록 하는 실수 k의 값의 범위.
  category: 특정 구간에서 부등식 성립
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: g(x)=-2x²+4kx-k+3, g(0)≥0 and g(2)≥0 (경계값 조건)
  insight_type: I-CON
  depth: 2
  frequency_mark: 빈출
```

### 유형 04 연립이차부등식의 풀이 (#553~#557)

```yaml
- source: 고쟁이-CM1-CH07-STEP1-#553
  page: 145
  problem_summary: |
    다음 연립부등식의 해 구하기: (1) {2x-3>1, x²-6x+5≤0} · (2) {x²+3<4x, 2x²-5x+2≥0}.
  category: 연립 (일차·이차)
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: 각 부등식 해 · 공통 부분
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH07-STEP1-#554
  page: 145
  problem_summary: |
    연립부등식 x+2<x²≤3x+10을 만족시키는 정수 x의 개수.
  category: 연쇄 이차부등식
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: 두 부등식 분리 · 이차 각각 해 · 공통 · 정수
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH07-STEP1-#555
  page: 145
  problem_summary: |
    연립부등식 {|x-1|≤4, x²-2x-3<0}을 만족시키는 정수 x의 개수 (선택형).
  category: 절댓값 · 이차부등식 연립
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: 각 해 · 공통
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH07-STEP1-#556
  page: 145
  problem_summary: |
    x에 대한 연립부등식 x²+6≤2x²+x<x²-2x+4의 해 (선택형).
  category: 이중 연쇄 이차
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: 두 부등식 분리 후 각각 이차부등식 · 공통
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH07-STEP1-#557
  page: 145
  problem_summary: |
    연립부등식 {x²-x-12≤0, x²+(1-k)x-k<0}의 해가 -3≤x<-1이 되도록 하는 실수 k 범위.
  category: 연립 해 조건 → k 범위
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: 첫 부등식 해 [-3,4] · 두번째 (x+1)(x-k)<0 · 공통 해 조건
  insight_type: I-CON
  depth: 2
```

### 유형 05 부등식의 활용 (#558~#561)

```yaml
- source: 고쟁이-CM1-CH07-STEP1-#558
  page: 145
  problem_summary: |
    이차방정식 x²+(a-2)x+4=0의 두 근이 모두 양수가 되도록 하는 실수 a의 범위 (선택형).
  category: 두 근 부호 조건
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: D≥0, 근의 합>0, 근의 곱>0 세 조건
  insight_type: I-CON
  depth: 2
  frequency_mark: 빈출

- source: 고쟁이-CM1-CH07-STEP1-#559
  page: 146
  problem_summary: |
    이차방정식 x²-4kx-4k-1=0의 두 근이 모두 음수일 때, 실수 k의 범위.
  category: 두 근 부호 조건 (음수)
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: D≥0, 근의 합<0, 근의 곱>0
  insight_type: I-CON
  depth: 2

- source: 고쟁이-CM1-CH07-STEP1-#560
  page: 146
  problem_summary: |
    이차방정식 x²-(k²-4k+3)x-k+2=0이 양의 실근과 음의 실근을 각각 하나씩 가진다. 양의 실근의 절댓값보다 음의 실근의 절댓값이 더 클 때, 실수 k 범위 (선택형).
  category: 두 근 부호 반대 + 절댓값 비교
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: 근의 곱<0 · 근의 합<0 (음의 근이 더 큰 절댓값)
  insight_type: I-CON
  depth: 2

- source: 고쟁이-CM1-CH07-STEP1-#561
  page: 146
  problem_summary: |
    지상으로부터 높이 50m인 건물 위에서 물체를 위쪽으로 던지고 t초 후 물체가 지면에 닿기 전 지면으로부터 높이 -5t²+15t+50이다. 이 물체가 지면에 닿기 전 지면으로부터의 높이가 건물의 높이(50m)보다 낮은 시간이 몇 초인가 (선택형).
  category: 물리 활용 · 이차부등식
  tier: star_4
  _step: STEP1
  unit_code: CM1-EQ
  mechanism_primary: -5t²+15t+50<50 → -5t²+15t<0 → t 범위 · 지면 닿기 전 조건
  insight_type: I-CON
  depth: 2
```

---

## 통계 요약

- **총 문항 수**: 23문
- 유형 01 부등식 성질·절댓값: 5문 (#539~#543)
- 유형 02 연립일차부등식: 2문 (#544~#545)
- 유형 03 이차부등식의 풀이: 7문 (#546~#552)
- 유형 04 연립이차부등식: 5문 (#553~#557)
- 유형 05 부등식의 활용: 4문 (#558~#561)

**tier 분포**: star_3 = 10문 · star_3·4 = 8문 · star_4 = 5문

**빈출**: #539·#542·#548·#549·#552·#558

**주요 mechanism**: 절댓값 부등식 · 이차부등식 해와 계수 · 판별식 부호 · 연립·연쇄 · 근의 부호 조건 (합·곱·판별식) · 실생활 활용

**연관 파일**: `bank/mechanism-데이터-고쟁이-CM1-CH07-여러부등식.md` (STEP 2·3)
