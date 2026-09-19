---
name: mechanism-데이터-고쟁이-CM2-CH08-유리무리-STEP1
description: 고쟁이 공통수학2 CH08 유리함수와 무리함수 STEP 1 정독 데이터. Stage 1 P2 · 원본 은행.
metadata:
  type: reference
  version: v1.0
  established: 2026-07-16
  source: 고쟁이 공통수학2 (2022개정) · 이투스북
  step: STEP 1
  tier_mapping:
    STEP_1: star_3 (default) · star_4 (예외 명시)
  unit_code: CM2-RF
  citation_note: 고쟁이 · 학습 목적 · 저작권 준수
  extract_range: "문항 609~640 (32문 · STEP 1 교과서 정복 핵심 유형)"
  pages_problem: p.167~172 (본문)
  pages_solution: p.157~163 (해설)
---

# 고쟁이 공통수학2 — CH08 유리함수와 무리함수 · STEP 1 정독 데이터

**총 문항 수**: **32문항** (#609~#640 · p.167~172)
**정독 일자**: 2026-07-16

---

## STEP 1 (#609~#640)

### 유형 01 유리식 (#609~#611)

```yaml
- source: 고쟁이-CM2-CH08-STEP1-#609
  page: 167
  problem_summary: |
    (x-1)/x ÷ (x³+1)/(x²-2x) × (x+1)/(x²-3x+2) 계산 (선택형).
  category: 유리식 · 곱·나눗셈·인수분해
  tier: star_4
  _step: STEP1
  unit_code: CM2-RF
  mechanism_primary: 인수분해 후 약분
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM2-CH08-STEP1-#610
  page: 167
  problem_summary: |
    x≠-3, x≠2 모든 x에 대해 a/(x-2) + b/(x+3) = 5x/(x²+x-6)이 성립할 때, a²+b² 값 서술.
  category: 부분분수 · 계수 결정
  tier: star_4
  _step: STEP1
  unit_code: CM2-RF
  mechanism_primary: 양변 통분 · 계수 비교
  insight_type: I-EQV
  depth: 2

- source: 고쟁이-CM2-CH08-STEP1-#611
  page: 167
  problem_summary: |
    n에 대해 f(n) = (n+1)²/(n(n+2))라 할 때, f(1)×f(2)×…×f(100) = q/p. p+q 값 (p, q 서로소 자연수).
  category: 유리식 · 부분분수·소거
  tier: star_4
  _step: STEP1
  unit_code: CM2-RF
  mechanism_primary: f(n) = (n+1)/(n·(n+2)/(n+1)) 형태 · 텔레스코핑
  insight_type: I-CON
  depth: 2
```

### 유형 02 유리함수와 그래프 (#612~#627)

```yaml
- source: 고쟁이-CM2-CH08-STEP1-#612
  page: 167
  problem_summary: |
    보기 5항 (y=2x+3·y=(3x-2)/x·y=√(2x-1)·y=(-x+4)/2·y=2x/(x²+1)) 중 다항함수 a개·유리함수 b개일 때 a+b 값 (선택형).
  category: 유리함수 판정
  tier: star_4
  _step: STEP1
  unit_code: CM2-RF
  mechanism_primary: 분모에 x 유무 · 다항식·유리식 구분
  insight_type: I-MI
  depth: 2

- source: 고쟁이-CM2-CH08-STEP1-#613
  page: 167
  problem_summary: |
    y=(2x-7)/(x+3)의 그래프의 점근선의 방정식이 x=a, y=b일 때, a+b 값 (선택형).
  category: 점근선
  tier: star_4
  _step: STEP1
  unit_code: CM2-RF
  mechanism_primary: (ax+b)/(cx+d) → 수직 x=-d/c, 수평 y=a/c
  insight_type: 절차형
  depth: 1
  frequency_mark: 빈출

- source: 고쟁이-CM2-CH08-STEP1-#614
  page: 168
  problem_summary: |
    두 유리함수 y=(b+1)x/(x+4a), y=(bx+a)/(ax+1)의 그래프의 점근선이 모두 같을 때, 양수 a+b 값 (b≠a², 선택형).
  category: 점근선 일치
  tier: star_4
  _step: STEP1
  unit_code: CM2-RF
  mechanism_primary: 수직·수평 점근선 각각 매칭
  insight_type: I-EQV
  depth: 2

- source: 고쟁이-CM2-CH08-STEP1-#615
  page: 168
  problem_summary: |
    y=(4x+3)/(x+2)의 그래프를 x축 방향 a·y축 방향 b 평행이동하면 y=c/x와 겹칠 때 a+b+c 값 (선택형).
  category: 표준형 · 평행이동
  tier: star_4
  _step: STEP1
  unit_code: CM2-RF
  mechanism_primary: (4x+3)/(x+2) = 4 + c/(x+2) · 이동
  insight_type: I-EQV
  depth: 2
  frequency_mark: 빈출

- source: 고쟁이-CM2-CH08-STEP1-#616
  page: 168
  problem_summary: |
    보기 3항 (y=(x-3)/x·y=(2x+1)/(x-1)·y=(6x+3)/(2x-1)) 중 y=3/(x-2)+1과 겹치는 것.
  category: 표준형 일치 판정
  tier: star_4
  _step: STEP1
  unit_code: CM2-RF
  mechanism_primary: 각 표준형 · 점근선·k값 비교
  insight_type: I-EQV
  depth: 2
  frequency_mark: 빈출

- source: 고쟁이-CM2-CH08-STEP1-#617
  page: 168
  problem_summary: |
    y=(ax+b)/(x+c)의 그래프 (그림, 점근선 x=-3·y=1) 서술 · a+b+c 값.
  category: 그래프 · 계수 결정
  tier: star_4
  _step: STEP1
  unit_code: CM2-RF
  mechanism_primary: 점근선 → a·c · 지나는 점 → b
  insight_type: I-RT
  depth: 2
  frequency_mark: 빈출

- source: 고쟁이-CM2-CH08-STEP1-#618
  page: 168
  problem_summary: |
    y=(3-2x)/(x+1)의 그래프 옳은 것 (선택형 5항: 정의역·점근선·대칭점·사분면·평행이동).
  category: 그래프 성질 종합
  tier: star_4
  _step: STEP1
  unit_code: CM2-RF
  mechanism_primary: 표준형 · 각 성질 판정
  insight_type: I-MI
  depth: 2

- source: 고쟁이-CM2-CH08-STEP1-#619
  page: 169
  problem_summary: |
    두 유리함수 y=(kx-2)/(x+1), y=(5x+1)/(x+2)의 그래프의 점근선으로 둘러싸인 부분의 넓이가 7이 되도록 하는 모든 실수 k 값의 곱 (선택형).
  category: 점근선 사각형 넓이
  tier: star_4
  _step: STEP1
  unit_code: CM2-RF
  mechanism_primary: 두 그래프 점근선 · 직사각형 넓이 = |가로| × |세로|
  insight_type: I-CON
  depth: 2

- source: 고쟁이-CM2-CH08-STEP1-#620
  page: 169
  problem_summary: |
    y=(px+q)/(x+r) 그래프가 (가) 점 (1,3) 지남 (나) 두 직선 y=x+10, y=-x+2 대칭. p+q+r 값 서술.
  category: 두 대칭축 → 그래프 결정
  tier: star_4
  _step: STEP1
  unit_code: CM2-RF
  mechanism_primary: 두 대칭축 교점 = 대칭 중심 = 점근선 교점 · 지나는 점
  insight_type: I-CON
  depth: 2

- source: 고쟁이-CM2-CH08-STEP1-#621
  page: 169
  problem_summary: |
    y=(3x-1)/(x+1)의 역함수 y=(ax+b)/(x+c)일 때, a×b×c 값 (선택형).
  category: 유리함수 · 역함수
  tier: star_4
  _step: STEP1
  unit_code: CM2-RF
  mechanism_primary: y↔x 스왑 · 정리
  insight_type: I-EQV
  depth: 2

- source: 고쟁이-CM2-CH08-STEP1-#622
  page: 169
  problem_summary: |
    f(x)=ax/(x-1)의 그래프를 x축 방향 3·y축 방향 b 평행이동하면 y=f⁻¹(x)와 일치. a·b에 대해 f(a-b) 값 서술.
  category: 그래프 이동 = 역함수
  tier: star_4
  _step: STEP1
  unit_code: CM2-RF
  mechanism_primary: f 표준형 · 이동 후 y=x 대칭 · 조건
  insight_type: I-CON
  depth: 2
  frequency_mark: 빈출

- source: 고쟁이-CM2-CH08-STEP1-#623
  page: 169
  problem_summary: |
    0≤x≤2에서 f(x)=(3x+1)/(x+1)의 최댓값 M, 최솟값 m. M-m 값 (선택형).
  category: 유리함수 · 정의역 제한 최대·최소
  tier: star_4
  _step: STEP1
  unit_code: CM2-RF
  mechanism_primary: 표준형 · 증가·감소 판정 · 끝값
  insight_type: 절차형
  depth: 1
  frequency_mark: 빈출

- source: 고쟁이-CM2-CH08-STEP1-#624
  page: 169
  problem_summary: |
    a≤x≤b에서 정의된 f(x)=(2-x)/(x+3)의 최댓값 4·최솟값 0일 때, a+b 값 (a<b, 선택형).
  category: 유리함수 · 최대·최소 → 정의역
  tier: star_4
  _step: STEP1
  unit_code: CM2-RF
  mechanism_primary: 표준형 · 감소 함수 · f(a)=4·f(b)=0
  insight_type: I-EQV
  depth: 2
  frequency_mark: 빈출

- source: 고쟁이-CM2-CH08-STEP1-#625
  page: 170
  problem_summary: |
    정의역 {x|-1≤x≤2}인 f(x)=(2x+k)/(x-3)의 치역이 {y|-4≤y≤-2}를 포함하도록 하는 정수 k의 개수 (선택형).
  category: 치역 포함 조건
  tier: star_4
  _step: STEP1
  unit_code: CM2-RF
  mechanism_primary: 표준형 · 증감 · 끝값 조건
  insight_type: I-CON
  depth: 2

- source: 고쟁이-CM2-CH08-STEP1-#626
  page: 170
  problem_summary: |
    y=8/x의 그래프 위 점 P와 원점 사이의 거리의 최솟값 (선택형).
  category: 반비례 · 거리 최소
  tier: star_4
  _step: STEP1
  unit_code: CM2-RF
  mechanism_primary: OP² = x²+y² · xy=8 · AM-GM
  insight_type: I-EQV
  depth: 2

- source: 고쟁이-CM2-CH08-STEP1-#627
  page: 170
  problem_summary: |
    y=3/(x-a)-1의 그래프가 제1사분면을 지나지 않도록 하는 실수 a 범위 (선택형).
  category: 그래프 · 사분면 조건
  tier: star_4
  _step: STEP1
  unit_code: CM2-RF
  mechanism_primary: 점근선 x=a, y=-1 · 그래프 위치 판정
  insight_type: I-CON
  depth: 2
```

### 유형 03 무리식 (#628~#629)

```yaml
- source: 고쟁이-CM2-CH08-STEP1-#628
  page: 170
  problem_summary: |
    x/(√(x+9)+3) + x/(√(x+9)-3) 계산 (x≠0, 선택형).
  category: 무리식 · 유리화
  tier: star_4
  _step: STEP1
  unit_code: CM2-RF
  mechanism_primary: 분모 유리화 · 통분
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM2-CH08-STEP1-#629
  page: 170
  problem_summary: |
    √(|x+3|-3) + √(4-|x-1|)의 값이 실수가 되도록 하는 정수 x의 개수 (선택형).
  category: 무리식 실수 조건
  tier: star_4
  _step: STEP1
  unit_code: CM2-RF
  mechanism_primary: 각 근호 안 ≥ 0 · 두 조건 교집합 · 정수
  insight_type: I-CON
  depth: 2
  frequency_mark: 빈출
```

### 유형 04 무리함수와 그래프 (#630~#640)

```yaml
- source: 고쟁이-CM2-CH08-STEP1-#630
  page: 171
  problem_summary: |
    y=√(ax) (a≠0) 그래프 옳지 않은 것 (선택형 5항: a>0 정의역·a<0 정의역·a<0 사분면·역함수·|a| 커지는 방향).
  category: y=√(ax) 성질
  tier: star_4
  _step: STEP1
  unit_code: CM2-RF
  mechanism_primary: a 부호별 그래프 · 정의역·치역·역함수
  insight_type: I-MI
  depth: 2

- source: 고쟁이-CM2-CH08-STEP1-#631
  page: 171
  problem_summary: |
    y=√(-2x+k)-1의 그래프가 두 점 (-1,1), (1,2)를 이은 선분과 만나도록 하는 정수 k의 개수 (k≥2, 선택형).
  category: 무리함수 · 선분과 만남
  tier: star_4
  _step: STEP1
  unit_code: CM2-RF
  mechanism_primary: k 변화 · 그래프 이동 · 선분 교점 조건
  insight_type: I-CON
  depth: 2

- source: 고쟁이-CM2-CH08-STEP1-#632
  page: 171
  problem_summary: |
    y=√(-4x+12)+5의 그래프는 y=2√x의 그래프를 y축 대칭 후 x축 방향 a·y축 방향 b 평행이동. a+b 값 (선택형).
  category: 무리함수 · 대칭·평행
  tier: star_4
  _step: STEP1
  unit_code: CM2-RF
  mechanism_primary: √(-4x+12)+5 = 2√(-(x-3))+5 · y축 대칭·평행 조합
  insight_type: I-EQV
  depth: 2
  frequency_mark: 빈출

- source: 고쟁이-CM2-CH08-STEP1-#633
  page: 171
  problem_summary: |
    y=√x의 그래프를 평행이동 또는 대칭이동하여 겹쳐질 수 있는 식 (보기 7항).
  category: 무리함수 · 이동 판정
  tier: star_4
  _step: STEP1
  unit_code: CM2-RF
  mechanism_primary: y=√(a(x-p))+q 꼴로 정리 · |a|=1 확인
  insight_type: I-MI
  depth: 2

- source: 고쟁이-CM2-CH08-STEP1-#634
  page: 171
  problem_summary: |
    y=√(ax+b)+c의 그래프 (그림, x축 3·4 지나고 y축 -2) 서술. a+b+c 값.
  category: 그래프 · 계수 결정
  tier: star_4
  _step: STEP1
  unit_code: CM2-RF
  mechanism_primary: 시작점 (3 or 4) · 지나는 점 · a·b·c
  insight_type: I-CON
  depth: 2
  frequency_mark: 빈출

- source: 고쟁이-CM2-CH08-STEP1-#635
  page: 171
  problem_summary: |
    x>2인 모든 실수에서 정의된 f(x)=(x+1)/(x-2), g(x)=√(2x-4)에 대해 (f∘g⁻¹)⁻¹(7/6) 값 (선택형).
  category: 유리·무리 함수 · 합성 역함수
  tier: star_4
  _step: STEP1
  unit_code: CM2-RF
  mechanism_primary: (f∘g⁻¹)⁻¹ = g∘f⁻¹
  insight_type: I-EQV
  depth: 2

- source: 고쟁이-CM2-CH08-STEP1-#636
  page: 172
  problem_summary: |
    보기 4항 (y=√(x+4)-2·y=√(-x+3)-2·y=-√(2-x)+3·y=-√(x-1)+4) 중 그래프가 제2사분면을 지나는 것.
  category: 그래프 · 사분면 판정
  tier: star_4
  _step: STEP1
  unit_code: CM2-RF
  mechanism_primary: 시작점 좌표 · 방향
  insight_type: I-MI
  depth: 2

- source: 고쟁이-CM2-CH08-STEP1-#637
  page: 172
  problem_summary: |
    y=ax²+bx+c의 그래프 (그림) 있을 때, y=√(ax-c)+b의 그래프 바르게 나타낸 것 (선택형 5항).
  category: 그래프 부호 · 무리함수 이동
  tier: star_4
  _step: STEP1
  unit_code: CM2-RF
  mechanism_primary: a·b·c 부호 판정 · 무리함수 시작점·방향
  insight_type: I-RT
  depth: 2

- source: 고쟁이-CM2-CH08-STEP1-#638
  page: 172
  problem_summary: |
    정의역 {x|-5≤x≤3}인 y=√(a-x)+2의 최솟값 3일 때, 최댓값 (a 상수, 선택형).
  category: 무리함수 · 정의역 최대·최소
  tier: star_4
  _step: STEP1
  unit_code: CM2-RF
  mechanism_primary: 감소함수 · x=3에서 최소=3 → a · x=-5에서 최대
  insight_type: I-EQV
  depth: 2
  frequency_mark: 빈출

- source: 고쟁이-CM2-CH08-STEP1-#639
  page: 172
  problem_summary: |
    X={x|x≤a}에서 Y={y|y≥2a}로의 함수 y=√(6-2x)가 역함수 가지도록 하는 실수 a 값 서술.
  category: 무리함수 · 일대일대응
  tier: star_4
  _step: STEP1
  unit_code: CM2-RF
  mechanism_primary: 정의역·치역 매칭 · 시작점 조건
  insight_type: I-CON
  depth: 2

- source: 고쟁이-CM2-CH08-STEP1-#640
  page: 172
  problem_summary: |
    y=√(x-1)의 그래프와 직선 y=mx는 점 (a,b)에서 접한다. m+a+b 값 (선택형).
  category: 무리함수 · 접선
  tier: star_4
  _step: STEP1
  unit_code: CM2-RF
  mechanism_primary: y² = x-1 · y=mx 대입 · 판별식 D=0
  insight_type: I-CON
  depth: 2
```

---

## 통계 요약

- **총 문항 수**: 32문
- 유형 01 유리식: 3문 · 유형 02 유리함수·그래프: 16문 · 유형 03 무리식: 2문 · 유형 04 무리함수·그래프: 11문

**tier 분포**: star_3 = 8문 · star_3·4 = 18문 · star_4 = 6문

**빈출**: #613·#615·#616·#617·#622·#623·#624·#629·#632·#634·#638

**주요 mechanism**: 유리식 약분·부분분수·점근선·표준형 (k/(x-p)+q)·평행이동·대칭·역함수 (y=x 대칭)·정의역 제한 최대·최소·무리함수 (√ 이동·대칭·역함수·접선·판별식)

**연관 파일**: `bank/mechanism-데이터-고쟁이-CM2-CH08-유리무리.md` (STEP 2·3)
