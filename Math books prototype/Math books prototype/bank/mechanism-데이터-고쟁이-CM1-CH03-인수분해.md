---
name: mechanism-데이터-고쟁이-CM1-CH03-인수분해
description: 고쟁이 공통수학1 2025 CH03 인수분해 STEP 1·2·3 전문항 mechanism 정독 데이터 (162~228, 총 67문). 본문 p.48~66 + 해설 p.32~45 1:1 매칭.
metadata:
  type: mechanism_extract
  source: 고쟁이 공통수학1 2025 (이투스북)
  chapter: CH03 인수분해
  category: 인수분해
  cm1_unit: PL (다항식)
  pages_problem: p.49~62 (STEP 1·2·3) · 표지·유형 안내 p.48
  pages_solution: p.32~45 (답지)
  extract_range: 문항 162~228 (STEP 1 = 162~184 · STEP 2 = 185~210 · STEP 3 = 211~228)
  total_count: 67
  step1_count: 23 (162~184)
  step2_count: 26 (185~210)
  step3_count: 18 (211~228)
  extracted: 2026-07-14
  updated: 2026-07-16
  copyright: 발문 원문 전사 금지. mechanism·풀이 요약만 기록.
  tier_mapping:
    STEP_1: star_3·4
    STEP_2: star_5
    STEP_3: star_5_premium
  unit_code: CM1-PL
---

# 고쟁이 공통수학1 2025 · CH03 인수분해 · STEP 1·2·3 mechanism 데이터

**저작권 준수**: 문제 발문 원문 전사 배제. category·mechanism·풀이 요약·답만 기록.

**cross-reference**: STEP 2·3 중 "인수 정리·조립제법"이 실제로 결정타인 문항 다수 (인수분해 = 인수정리·조립제법 통합 단원). 유형 05·06가 이에 해당.

---

## STEP 1 교과서를 정복하는 핵심 유형 (162~184, 23문항 · p.49~53)

```yaml
- source: 고쟁이-CM1-CH03-STEP1-#162
  page: 49
  problem_summary: |
    (1) a²+4a+4-b² (2) a³+9a²b+27ab²+27b³ (3) a³+8b³ (4) a²+4b²+c²+4ab-4bc-2ca 인수분해 (4문).
  category: 인수분해 공식
  tier: star_4
  _step: STEP1
  unit_code: CM1-PL
  mechanism_primary: 완전제곱·세제곱·(a+b+c)² 등 기본 공식 조합
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH03-STEP1-#163
  page: 49
  problem_summary: |
    5개 인수분해 (x³y-9xy³, 64x³-48x²+12x-1 등) 중 옳지 않은 것 (객관식).
  category: 인수분해 공식 검증
  tier: star_4
  _step: STEP1
  unit_code: CM1-PL
  mechanism_primary: 공식별 확장·검증
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH03-STEP1-#164
  page: 49
  problem_summary: |
    2a³+3a²b-3ab²-2b³ 을 인수분해하는 객관식 5택.
  category: 3차 다항식 인수분해
  tier: star_4
  _step: STEP1
  unit_code: CM1-PL
  mechanism_primary: 묶어내기 후 (a-b), (a+b), (2a+b) 등 확인
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH03-STEP1-#165
  page: 49
  problem_summary: |
    x+y=4, xy=2일 때 x³-xy²-x²y+y³ 값 구하기.
  category: 인수분해·대칭식 대입
  tier: star_4
  _step: STEP1
  unit_code: CM1-PL
  mechanism_primary: x³+y³-xy(x+y) = (x+y)³-3xy(x+y)-xy(x+y)
  insight_type: I-EQV
  depth: 2

- source: 고쟁이-CM1-CH03-STEP1-#166
  page: 49
  problem_summary: |
    a+b+c=0일 때 a³+b³+c³-3abc의 값 (객관식).
  category: 대칭식 항등식
  tier: star_4
  _step: STEP1
  unit_code: CM1-PL
  mechanism_primary: a³+b³+c³-3abc = (a+b+c)(a²+b²+c²-ab-bc-ca) = 0
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH03-STEP1-#167
  page: 49
  problem_summary: |
    (1) (x²+x+3)(x²+2x+3)-2x² (2) (x²+2x-2)(x²+2x+5)+12 (3) (x²-2x)²-2x²+4x-3 인수분해 (3문).
  category: 공통부분 치환
  tier: star_4
  _step: STEP1
  unit_code: CM1-PL
  mechanism_primary: 공통항 X=x²+2x 등 치환 후 이차식 인수분해
  insight_type: I-RT
  depth: 2

- source: 고쟁이-CM1-CH03-STEP1-#168
  page: 50
  problem_summary: |
    (x-1)(x-2)(x+2)(x+3)-60 의 인수가 아닌 것 (객관식).
  category: 두 쌍 곱 치환
  tier: star_4
  _step: STEP1
  unit_code: CM1-PL
  mechanism_primary: (x-1)(x+3)·(x-2)(x+2) 짝 → 공통 X=x²+x, x²-4 → 치환
  insight_type: I-RT
  depth: 2

- source: 고쟁이-CM1-CH03-STEP1-#169
  page: 50
  problem_summary: |
    (x²-4x+3)(x²+6x+8)-56 = (x²+x-a)(x²+x+b) 일 때 두 양수 a·b의 차 a-b.
  category: 공통부분 치환·인수분해 결과 매칭
  tier: star_4
  _step: STEP1
  unit_code: CM1-PL
  mechanism_primary: (x-1)(x-3)·(x+2)(x+4) 쌍 조정 후 치환·계수비교
  insight_type: I-RT
  depth: 2

- source: 고쟁이-CM1-CH03-STEP1-#170
  page: 50
  problem_summary: |
    x⁴-2x³+3x²-2x+1 의 인수인 것 (객관식).
  category: 상반다항식 인수분해
  tier: star_4
  _step: STEP1
  unit_code: CM1-PL
  mechanism_primary: x²로 나누고 X=x+1/x 치환 → X²-2X+1
  insight_type: I-RT
  depth: 2

- source: 고쟁이-CM1-CH03-STEP1-#171
  page: 50
  problem_summary: |
    (1) 유리수 (2) 실수 범위에서 x⁴-7x²+12 인수분해 (2문).
  category: 복이차식 인수분해·범위
  tier: star_4
  _step: STEP1
  unit_code: CM1-PL
  mechanism_primary: X=x² 치환 → (x²-3)(x²-4), 실수 범위에서 x²-3=(x-√3)(x+√3)
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH03-STEP1-#172
  page: 50
  problem_summary: |
    x⁴-6x²y²+y⁴ 의 인수인 것 (객관식).
  category: 복이차식 A²-B² 변형
  tier: star_4
  _step: STEP1
  unit_code: CM1-PL
  mechanism_primary: (x²-y²)²-4x²y² 로 변형 후 A²-B² 인수분해
  insight_type: I-EQV
  depth: 2

- source: 고쟁이-CM1-CH03-STEP1-#173
  page: 50
  problem_summary: |
    (1) x⁴+4 (2) x⁴+7x²+16 인수분해 (2문).
  category: 소피 제르맹 항등식·복이차식
  tier: star_4
  _step: STEP1
  unit_code: CM1-PL
  mechanism_primary: A²+B²-2AB → (A+B)²-(?)² 조정 후 차의 제곱
  insight_type: I-EQV
  depth: 2

- source: 고쟁이-CM1-CH03-STEP1-#174
  page: 51
  problem_summary: |
    x²+3xy+2y²-2x-y-3 의 인수인 것 (객관식).
  category: 여러 문자 인수분해·내림차순 정리
  tier: star_4
  _step: STEP1
  unit_code: CM1-PL
  mechanism_primary: x에 대한 이차식으로 정리 후 근의 공식 or 판별식
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH03-STEP1-#175
  page: 51
  problem_summary: |
    3x²-2xy-y²-7x-y+2 = (ax-y+b)(cx+dy+2) 인수분해할 때 a-b+c-d (객관식).
  category: 여러 문자 인수분해·계수비교
  tier: star_4
  _step: STEP1
  unit_code: CM1-PL
  mechanism_primary: 좌변 인수분해 후 우변 형태 매칭
  insight_type: I-EQV
  depth: 2

- source: 고쟁이-CM1-CH03-STEP1-#176
  page: 51
  problem_summary: |
    (1) 8x³+4x²y-4xy-3y²+4y-1 (2) x⁴+2x²y-4x²+y²-4y-5 인수분해 (2문).
  category: 여러 문자 · 낮은 차수 정리
  tier: star_4
  _step: STEP1
  unit_code: CM1-PL
  mechanism_primary: 낮은 차수 문자에 대해 정리 → 이차식 인수분해
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH03-STEP1-#177
  page: 51
  problem_summary: |
    a²b-ab²+b²c-bc²+c²a-ca² 인수분해 (객관식).
  category: 대칭식·순환 인수분해
  tier: star_4
  _step: STEP1
  unit_code: CM1-PL
  mechanism_primary: 한 문자 정리 후 (a-b), (b-c), (c-a) 순환 검증
  insight_type: I-SYM
  depth: 2

- source: 고쟁이-CM1-CH03-STEP1-#178
  page: 51
  problem_summary: |
    x³+2x²-5x-6 인수분해.
  category: 인수정리·조립제법
  tier: star_4
  _step: STEP1
  unit_code: CM1-PL
  mechanism_primary: f(-1)=0 or f(2)=0 확인 후 조립제법
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH03-STEP1-#179
  page: 52
  problem_summary: |
    f(x)=x³-2x²+kx+12 가 x-1로 나누어떨어질 때 (1) k 구하기 (2) 조립제법으로 f(x) 인수분해 (서술형).
  category: 인수정리·조립제법 종합
  tier: star_4
  _step: STEP1
  unit_code: CM1-PL
  mechanism_primary: f(1)=0 → k → 조립제법
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH03-STEP1-#180
  page: 52
  problem_summary: |
    2x⁴-7x³-6x²+7x+4 의 인수가 아닌 것 (객관식).
  category: 인수정리·조립제법·4차
  tier: star_4
  _step: STEP1
  unit_code: CM1-PL
  mechanism_primary: 정수근 후보 ±1, ±2, ±4 or ±1/2 대입
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH03-STEP1-#181
  page: 52
  problem_summary: |
    (1) 89³+3·89²+3·89+1 (2) 32²+19²+49²+2(32·19+19·49+49·32) 계산 (2문).
  category: 곱셈 공식 역이용
  tier: star_4
  _step: STEP1
  unit_code: CM1-PL
  mechanism_primary: (a+1)³ = 90³ / (a+b+c)² 활용
  insight_type: I-PD
  depth: 2

- source: 고쟁이-CM1-CH03-STEP1-#182
  page: 52
  problem_summary: |
    999³-1 을 999·1000+1 로 나눈 몫 (객관식).
  category: 인수분해 활용·수 계산
  tier: star_4
  _step: STEP1
  unit_code: CM1-PL
  mechanism_primary: a³-1=(a-1)(a²+a+1), a=999 대입
  insight_type: I-EQV
  depth: 2

- source: 고쟁이-CM1-CH03-STEP1-#183
  page: 53
  problem_summary: |
    자연수 N에 대해 (1) N=38³+7·38²-17·38+9=a²b, b-a 구하기 (2) N=29³+2·29²-5·29-6 소인수분해 지수 합 구하기 (2문).
  category: 인수분해·수 계산
  tier: star_4
  _step: STEP1
  unit_code: CM1-PL
  mechanism_primary: x=38 (또는 29)로 두고 3차식 인수분해 → 대입
  insight_type: I-PD
  depth: 2

- source: 고쟁이-CM1-CH03-STEP1-#184
  page: 53
  problem_summary: |
    직육면체 A(x×x×x), B(y×y×y), C(x×y×y), D(x×x×y) 각각 27·1·9·27개로 만든 정육면체의 한 모서리 (객관식, x≠y).
  category: 인수분해·부피 활용
  tier: star_4
  _step: STEP1
  unit_code: CM1-PL
  mechanism_primary: 총 부피 = 27x³+y³+9xy²+27x²y = (3x+y)³ 인식
  insight_type: I-PD
  depth: 3
```

---

## STEP 2 (심화 유형, 185~210)

### 185
- category: 인수분해
- mechanism_primary: $a^3+b^3+c^3-3abc$ 공식 유도 과정 (빈칸 채우기)
- mechanism_secondary: 곱셈공식 $\{(a+b)+c\}^3$ 전개 → 인수 결합
- 유형: 01 인수분해 공식
- 풀이 요약: $(a+b)^3+c^3-3ab(a+b)-3abc$에서 $A^3+B^3$ 공식 적용, $\{(a+b)+c\}\{(a+b)^2-(a+b)c+c^2\}-3ab(a+b+c)$ → $(a+b+c)(a^2+b^2+c^2-ab-bc-ca)$. $X=a+b$, $Y=a+b+c$, $Z=a^2+b^2+c^2-ab-bc-ca$ → $XY+Z = 2a^2+2b^2+c^2+ab$
- 답: ③

### 186
- category: 인수분해
- mechanism_primary: 나머지정리 · 이차 나눗셈 (재귀 대입)
- mechanism_secondary: 항등식 계수 결정
- 유형: 05 인수 정리를 이용한 인수분해 (실제로는 05 유형에 배치되었으나 나머지정리 문제)
- 풀이 요약: $f(x)=(x^3-1)Q(x)+R(x)$, $R(x)=a(x^2+x+1)+(2x-5)$. $f(1)=9$ → $3a-3=9$, $a=4$. $R(2)=4(2^2+2+1)+4-5=27$
- 답: 27 (문항 지문상 표기)

### 187
- category: 인수분해
- mechanism_primary: 다항식 항등 · 완전 인수분해 후 몫 결정
- mechanism_secondary: 나머지정리 (구성 대입)
- 유형: 05
- 풀이 요약: $x^6+x^4-3x^3-x^2 = x^2(x^4+x^2-1) \cdot ?$ 전개. $x^2(x^2+x+1)(x^2-x+1)-3x^2 \cdot \ldots$ 형태로 유도 후 $Q(x)=x^2-x+1$, $P(x)=x^2(x^2+x+1)$. $Q(x-2)$ ÷ $(x-1)$ 나머지 $=Q(-1)=3$ 조건과 부합. $P(1)+Q(3)=3+7=10$
- 답: 10

### 188
- category: 인수분해
- mechanism_primary: 인수분해 후 나머지정리 (특수 대입 $x=\tfrac{1}{2}$)
- mechanism_secondary: 몫의 재나눗셈
- 유형: 05
- 풀이 요약: $R_1 = f(-\tfrac{1}{2}) = \tfrac{1}{2^8}$. $x^8-\tfrac{1}{2^8} = (x^4+\tfrac{1}{2^4})(x^2+\tfrac{1}{2^2})(x+\tfrac{1}{2})(x-\tfrac{1}{2})$로 인수분해 → $Q(x) = (x^4+\tfrac{1}{2^4})(x^2+\tfrac{1}{2^2})(x-\tfrac{1}{2})$. $R_2 = Q(-\tfrac{1}{2}) = -\tfrac{1}{2^4}$. $R_2/R_1 = -2^4 = -16$
- 답: ③ ($-16$)

### 189
- category: 인수분해
- mechanism_primary: $x^n-1$ 조립제법 몫의 일반형 인식
- mechanism_secondary: 몫 대입 (기하급수 합)
- 유형: 05
- 풀이 요약: $x^{101}-1=(x-1)(x^{100}+x^{99}+\cdots+x+1)$. $Q(x) = x^{100}+x^{99}+\cdots+x+1$. $Q(1)=101$, $Q(-1)=1$ (100개 항 짝수개 대칭 소거). $Q(1)+Q(-1)=102$
- 답: ④ (102)

### 190
- category: 인수분해
- mechanism_primary: $(x-1)^2$ 나눗셈의 R(x) 결정 (이중근 조건)
- mechanism_secondary: $x^{50}-1$ 형 항등식 대입 → 계수 방정식 풀이
- 유형: 05
- 풀이 요약: $R(x)=ax+b$. $x=1$ 대입 $0=a+b$ → $b=-a$. 원식 나눗셈 정리 후 $x^{49}+x^{48}+\cdots+x+1=(x-1)Q(x)+a$. 다시 $x=1$ 대입 → $a=50$, $b=-50$. $R(10)=500-50=450$
- 답: 450

### 191
- category: 인수분해
- mechanism_primary: 공통부분 치환 ($x^2+10x+16$·$x^2+10x+24$) → $X$ 치환
- mechanism_secondary: 완전제곱 조건 → 판별식/상수 매칭
- 유형: 02 공통부분이 있는 다항식의 인수분해
- 풀이 요약: $(x+2)(x+8)(x+4)(x+6)+k = (x^2+10x+16)(x^2+10x+24)+k$. $X=x^2+10x+16$ 치환 → $X(X+8)+k = X^2+8X+k$. 완전제곱 조건 $k=16$. $\{f(x)\}^2 = (X+4)^2$ → $f(x)=x^2+10x+20$
- 답: ④

### 192
- category: 인수분해
- mechanism_primary: 공통부분 $X=x^2+x$ 치환 → 이차식 인수분해 ($p,q$ 자연수 case)
- mechanism_secondary: 자연수 곱 분해 case 열거 ($12=1\cdot12=2\cdot6=3\cdot4$)
- 유형: 02
- 풀이 요약: $X(X-4)+aX+12 = X^2+(a-4)X+12$. $12$의 자연수 곱 분해 3가지 → $(a-4)$ 각각 13·8·7 → $a=17, 12, 11$. 합 $=40$
- 답: 40

### 193
- category: 인수분해
- mechanism_primary: $x^4+ax^2+b$ 꼴 치환 ($Y=(x-3)^2$)
- mechanism_secondary: 4개 인수 좌표 상수합의 제곱합
- 유형: 03 $x^4+ax^2+b$ 꼴
- 풀이 요약: $(x-3)^4-5(x-3)^2+4 = Y^2-5Y+4 = (Y-1)(Y-4) = \{(x-3)^2-1\}\{(x-3)^2-4\} = (x-4)(x-2)(x-5)(x-1)$. $a,b,c,d=1,2,4,5$ → $a^2+b^2+c^2+d^2 = 46$
- 답: 46

### 194
- category: 인수분해
- mechanism_primary: 여러 문자 · $x$에 대한 내림차순 정리 → 이차식 인수분해
- mechanism_secondary: (1)에서 계수 비교로 $k$ 결정
- 유형: 04 여러 가지 문자가 포함된 식의 인수분해
- 풀이 요약: 
  - (1) $x^2+(ky-1)x-(3y+2)(2y+1)$ 형태 → $(2y+1)-(3y+2)=ky-1$에서 $k=-1$
  - (2) $x^2+(3y-2)x + 2y^2-5y+k$ → $2y^2-5y+k=(2y+a)(y+b)$ 인수분해 가능 조건. 십자곱 방식 → $a=1, b=-3$, $k=ab=-3$
- 답: (1) $-1$ (2) $-3$

### 195
- category: 인수분해
- mechanism_primary: 여러 문자식 · $a-b+c$ 인수 판정 (내림차순 인수분해)
- mechanism_secondary: 3식 각각 인수분해 후 인수 확인
- 유형: 04
- 풀이 요약: 
  - ㄱ. $a^2+b^2+c^2-2ab-2bc+2ca = (a-b+c)^2$ (○)
  - ㄴ. $(a+b)(b+c)(c+a)+abc$ 전개 후 $a$ 내림차순 → $(a+b+c)(ab+bc+ca)$ ($a-b+c$ 인수 아님, ✗)
  - ㄷ. $a^2(b+c)-b^2(a-c)+c^2(a-b)-abc$ $a$ 내림차순 정리 → $(b+c)a^2 -(b^2+bc-c^2)a + bc(b-c) = (a-b+c)(ab-bc+ca)$ (○)
- 답: ④ (ㄱ, ㄷ)

### 196
- category: 인수분해
- mechanism_primary: 인수정리 · 조립제법 (사차 → 4인수 분해)
- mechanism_secondary: $(x+k)(x-k)P(x)$ 형태로 매칭하여 $k$ 결정 · $P(k)$ 계산
- 유형: 05 인수 정리를 이용한 인수분해
- 풀이 요약: $f(x)=x^4-4x^3-x^2+16x-12$. $f(1)=0$, $f(2)=0$ → 조립제법 2회 → $(x-1)(x-2)(x^2-x-6) = (x-1)(x-2)(x+2)(x-3)$. $(x+k)(x-k)P(x)$ 꼴 매칭 → $k=2$, $P(x)=(x-1)(x-3)$. $P(2)=1\cdot(-1)=-1$
- 답: $-1$

### 197
- category: 인수분해
- mechanism_primary: 인수정리 · 조립제법 (사차 → 인수분해 후 $x-k$ 공통 인수 결정)
- mechanism_secondary: 공통 인수 결정 → $P(x)$, $Q(x)$ 분리 → 합 계산
- 유형: 05
- 풀이 요약: $P(x)Q(x) = x^4+6x^3+9x^2-4x-12$. $x=1, -2$ 대입 0 → 조립제법 → $(x-1)(x+2)(x^2+5x+6) = (x-1)(x+2)^2(x+3)$. $x-k$ 공통 인수 → $k=-2$, $x+2$가 공통 인수. 최고차항 계수 1 이차식 → $P(x)=(x+2)(x-1)$, $Q(x)=(x+2)(x+3)$ (혹은 반대). $P(x)+Q(x) = (x+2)\{(x-1)+(x+3)\} = (x+2)(2x+2) = 2x^2+6x+4$
- 답: ① ($2x^2+6x+4$)

### 198
- category: 인수분해
- mechanism_primary: 인수정리·조립제법 · 다항식 나눗셈 잔차 결정
- mechanism_secondary: $\{Q(x)\}^2 = (x-2)^2$로 나눈 나머지 계산
- 유형: 05
- 풀이 요약: $P(x)Q(x)=x^4-5x^3+9x^2-8x+4$. $x=2$ 대입 0 → 조립제법 → $(x-2)(x^3-3x^2+3x-2) = (x-2)^2(x^2-x+1)$. $P$가 $Q$보다 차수 큼 → $P(x)=(x-2)(x^2-x+1)$, $Q(x)=x-2$. $P(x) = (x-2)^2(x+1)+3(x-2)$이므로 $\{Q(x)\}^2=(x-2)^2$으로 나눈 나머지 $=3(x-2)=3x-6$
- 답: $3x-6$

### 199
- category: 인수분해
- mechanism_primary: 치환 $t=x+2$ → 삼차식 인수정리·조립제법
- mechanism_secondary: $x+2 = t$ 변수 복원 · $a<b<c$ 조건 하 상수 확정
- 유형: 03 → 05 결합
- 풀이 요약: $(x+2)^3 - 3(x+2)^2 - 6x-4 = t^3-3t^2-6t+8$ ($-6x-4 = -6(x+2)+8$). $f(1) \ne 0$이지만 $t=1$ 대입 $\ldots$ 실제 답지: $f(t)=t^3-3t^2-6t+8$, $f(-2)=0$ (⇒ $(t+2)$로 나눔). 조립제법 → $(t+2)(t^2-5t+4) = (t+2)(t-1)(t-4) = (x+4)(x+1)(x-2)$. $a=-2, b=1, c=4$ ($a<b<c$) → $a+2b+3c = -2+2+12=12$
- 답: ② (12)

### 200
- category: 인수분해
- mechanism_primary: $(x-1)^2$ 이중근 조건 → 인수정리 2단 (연속 나눗셈)
- mechanism_secondary: 계수 결정 후 $a^2+b^2$ 계산
- 유형: 03·05 결합
- 풀이 요약: $f(x)=x^4+ax^2+b$. $f(1)=0$ → $b=-a-1$. $f(x) = (x^2+a+1)(x-1)(x+1)$ 로 정리 (해설). $(x-1)^2$ 인수로 가지려면 $x^2+a+1$도 $x-1$을 인수로 → $1+a+1=0$, $a=-2$, $b=1$. $a^2+b^2=5$
- 답: 5

### 201
- category: 인수분해
- mechanism_primary: $A^6-B^6 = (A^2-B^2)(A^4+A^2B^2+B^4)$ 인수분해 활용
- mechanism_secondary: 수치 대입 계산
- 유형: 06 인수분해의 활용
- 풀이 요약: $x=19, y=11$ 대입 $\dfrac{x^6-y^6}{x^4+x^2y^2+y^4} = \dfrac{(x^2-y^2)(x^4+x^2y^2+y^4)}{x^4+x^2y^2+y^4} = x^2-y^2 = (x-y)(x+y) = 8\times30 = 240$
- 답: 240

### 202
- category: 인수분해
- mechanism_primary: TIP 활용 $x^4+x^2+1 = (x^2-x+1)(x^2+x+1)$ 인수분해
- mechanism_secondary: 분모 $x(x+1)+1 = x^2+x+1$ 매칭
- 유형: 06
- 풀이 요약: $x=90$. $\dfrac{x^4+x^2+1}{x^2+x+1} = \dfrac{(x^2-x+1)(x^2+x+1)}{x^2+x+1} = x^2-x+1 = 8100-90+1 = 8011$
- 답: ④ (8011)

### 203
- category: 인수분해
- mechanism_primary: $x=2+\sqrt{6}$ 활용 $x^2-4x-2=0$ 관계식 유도
- mechanism_secondary: 분자·분모 인수분해 (조립제법 · 공통인수 $x-1$·$x^2-4x$)
- 유형: 06
- 풀이 요약: $x^2-4x+4=6$ → $x^2-4x=2$. 분자 $x^3-5x^2+5x-1$: $f(1)=0$이므로 $(x-1)(x^2-4x+1)$. 분모 $x^3-5x^2+4x = x(x^2-5x+4)=x(x-1)(x-4)$. 약분 후 $\dfrac{x^2-4x+1}{x^2-4x} = \dfrac{2+1}{2} = \dfrac{3}{2}$
- 답: ② ($\tfrac{3}{2}$)

### 204
- category: 인수분해
- mechanism_primary: $x=1234$ 치환 → 삼차식 인수분해 (조립제법)
- mechanism_secondary: 자릿수 합 계산
- 유형: 06
- 풀이 요약: $x=1234$. $\dfrac{x^3-x^2-3x+2}{x^2+x-1}$. 분자 $f(x)=x^3-x^2-3x+2$, $f(2)=0$ → $(x-2)(x^2+x-1)$. 약분 → $x-2 = 1232$. 자릿수 합 $=1+2+3+2=8$
- 답: 8

### 205
- category: 인수분해
- mechanism_primary: $2^{12}-1 = (2^6-1)(2^6+1)$ 인수분해 · 소인수분해로 약수 열거
- mechanism_secondary: 30~40 범위 약수 찾기
- 유형: 06
- 풀이 요약: $2^{12}-1 = 63 \times 65 = 3^2 \cdot 5 \cdot 7 \cdot 13$. 30~40 사이 약수: $35=5\cdot 7$, $39=3\cdot 13$. 합 $=74$
- 답: ④ (74)

### 206
- category: 인수분해
- mechanism_primary: 정팔면체 꼭짓점 6개·면 8개 → 8면의 세 수 곱의 합 = $(a+f)(b+d)(c+e)$ 인수분해
- mechanism_secondary: $165 = 3\cdot 5\cdot 11$ 3자연수 곱 분해 → 6꼭짓점 합
- 유형: 06 (교육청 변형)
- 풀이 요약: 정팔면체 대각축 3쌍 ($a\leftrightarrow f$, $b\leftrightarrow d$, $c\leftrightarrow e$). 8면 곱의 합 인수분해 → $(a+f)(b+d)(c+e)=165=3\cdot 5\cdot 11$. 자연수 조건 → 3, 5, 11 배정 → $a+b+c+d+e+f=19$
- 답: 19

### 207
- category: 인수분해
- mechanism_primary: 여러 문자식 · $a$ 내림차순 → 인수분해 → 삼각형 판정 (실질적 등변조건 유도)
- mechanism_secondary: 변의 길이 조건 ($a+b>0$, $b+c>0$ 등)으로 잔여 case 소거
- 유형: 06 (스키마 문항 - 풀이 흐름 상세 제시)
- 풀이 요약: $ab(a+b)-bc(b+c)-ca(c-a) = a^2b+ab^2-b^2c-bc^2-c^2a+ca^2$. $a$ 내림차순 → $(b+c)a^2+(b^2-c^2)a-bc(b+c) = (b+c)\{a^2+(b-c)a-bc\} = (b+c)(a+b)(a-c)$. $=0$이므로 $a=c$ (변 조건). 이등변삼각형 ($a=c$)
- 답: ③ ($a=c$인 이등변삼각형)

### 208
- category: 인수분해
- mechanism_primary: 조건 (가) $a^3-ab^2-b^2c+a^2c+ac^2+c^3=0$ → 인수분해 $(a+c)(a^2+c^2-b^2)=0$
- mechanism_secondary: 삼각형 조건 → 직각삼각형 판정 · 조건 (나)로 둘레 계산
- 유형: 06 (서술형 · 빈출)
- 풀이 요약: 좌변 $= a^3+c^3-b^2(a+c)+ac(a+c) = (a+c)(a^2-ac+c^2)-b^2(a+c)+ac(a+c) = (a+c)(a^2+c^2-b^2)=0$. $a+c>0$이므로 $a^2+c^2=b^2$ (빗변 $b$ 직각삼각형). 넓이 $2 = \tfrac{1}{2}ac$ → $ac=4$. 조건 (나) $a+c = \tfrac{3}{5}\sqrt{5}b$ 양변 제곱 → $a^2+2ac+c^2=\tfrac{9}{5}b^2$ → $b^2+8=\tfrac{9}{5}b^2$ → $b^2=10$, $b=\sqrt{10}$. $a+c=\tfrac{3}{5}\sqrt{5}\cdot\sqrt{10}=3\sqrt{2}$. 둘레 $=(a+c)+b=3\sqrt{2}+\sqrt{10}$
- 답: $3\sqrt{2}+\sqrt{10}$

### 209
- category: 인수분해
- mechanism_primary: 원기둥 부피 $\pi r^2 h$ 인수분해 → 계수 1 일차식으로 반지름·높이 분리
- mechanism_secondary: 삼차식 조립제법 → 완전제곱 $\{r(x)\}^2 \cdot h(x)$ 매칭
- 유형: 06 (도형의 부피·겉넓이 활용)
- 풀이 요약: $x^3+3x^2-9x+5 = \{r(x)\}^2 h(x)$. $f(1)=0$ → $(x-1)(x^2+4x-5) = (x-1)(x-1)(x+5) = (x-1)^2(x+5)$. $r(x)=x-1$, $h(x)=x+5$. 겉넓이 $=2\pi r^2 + 2\pi r h = 2\pi(x-1)^2 + 2\pi(x-1)(x+5) = 2\pi(x-1)\{(x-1)+(x+5)\} = 2\pi(x-1)(2x+4) = 4\pi(x-1)(x+2)$
- 답: ⑤ ($4\pi(x-1)(x+2)$)

### 210
- category: 인수분해
- mechanism_primary: 부피 뺄셈·중복 계산 (포함배제 3구멍 정육면체) → $x^3-3xy^2+2y^3$
- mechanism_secondary: 대칭식 인수분해 → $(x-y)^2(x+2y)$
- 유형: 06 (교육청 기출)
- 풀이 요약: 부피 $= x^3 - 3\cdot xy^2 + 2\cdot y^3$ (구멍 3개 - 겹침 3회 + 정육점 2회 보정). 인수분해: $x^3-y^3-3y^2(x-y) = (x-y)(x^2+xy+y^2) - 3y^2(x-y) = (x-y)(x^2+xy-2y^2) = (x-y)(x-y)(x+2y) = (x-y)^2(x+2y)$
- 답: ① ($(x-y)^2(x+2y)$)

---

## STEP 3 (최고난도 유형, 211~228)

### 211
- category: 인수분해
- mechanism_primary: 연속 4자연수 곱 + 1 = 완전제곱 증명 · 치환 $X=n^2+3n$
- mechanism_secondary: $\sqrt{\ }$ 특수값 대입
- 유형: 05 · 서술형
- 풀이 요약: 
  - (1) $n(n+1)(n+2)(n+3)+1 = \{n(n+3)\}\{(n+1)(n+2)\}+1 = (n^2+3n)(n^2+3n+2)+1$. $X=n^2+3n$ 치환 → $X(X+2)+1 = (X+1)^2 = (n^2+3n+1)^2$
  - (2) $n=11$: $\sqrt{11\cdot 12\cdot 13\cdot 14+1} = 11^2+3\cdot 11+1 = 121+33+1 = 155$
- 답: (1) 풀이참조 (2) 155

### 212
- category: 인수분해
- mechanism_primary: 3개 일차식 곱 $(x+p)(x+q)(x+r)$ 상수항 조건 $pqr=3$ · 정수 case 열거
- mechanism_secondary: 각 case에서 $a+b$ 계산 · 최댓값·최솟값 합
- 유형: 05
- 풀이 요약: $pqr=3$ 정수 case 3가지 (부호까지):
  - (i) $(x+1)(x+1)(x+3)$: $a+b=5+7=12$
  - (ii) $(x+1)(x-1)(x-3)$: $a+b=-3+(-1)=-4$
  - (iii) $(x-1)(x-1)(x+3)$: $a+b=1+(-5)=-4$
  - $M=12$, $m=-4$ → $M+m=8$
- 답: ⑤ (8) (해설에 답 8 명기)

### 213
- category: 인수분해
- mechanism_primary: 인수정리 → 조립제법 → 이차식 인수분해 조건
- mechanism_secondary: 정수 조건 하 $ab$ 최소·최대 case 열거
- 유형: 05 (선행 192)
- 풀이 요약: $f(x)=x^3-(1-6ab)x+n$. $f(1)=0$ 대신... (해설) $x-1$ 인수 조건에서 $n=-6ab$, $ab \ge -\tfrac{50}{3}$ (100 이하 자연수 조건). $(x-1)(x-2a)(x-3b)$ 인수분해 조건 → $2a+3b=-1$ 정수 case 열거. 최솟값 $ab=-1$일 때 $n=6$, 최댓값 $ab=-15$일 때 $n=90$. 합 $=96$
- 답: 96

### 214
- category: 인수분해
- mechanism_primary: 인수정리 (분자 $f(-1)=0$) · 조립제법 · 분수식 정수 조건
- mechanism_secondary: $\dfrac{8}{k+3}$ 정수 조건 → 8의 약수 case
- 유형: 05
- 풀이 요약: $\dfrac{k^3+2k^2+3k+2}{k^2+4k+3} = \dfrac{(k+1)(k^2+k+2)}{(k+3)(k+1)} = \dfrac{k^2+k+2}{k+3} = k-2+\dfrac{8}{k+3}$. $k+3 \in \{\pm 1, \pm 2, \pm 4, \pm 8\}$ ($k\ne -3, -1$ 제외) → $k = -2, 1, 5, -4, -5, -7, -11$. 합 $= -23$
- 답: ② ($-23$)

### 215
- category: 인수분해
- mechanism_primary: $(P+Q)^3 - 3PQ(P+Q)$ 곱셈공식 → $PQ$ 결정
- mechanism_secondary: $PQ$ 사차식 조립제법 인수분해 → 두 이차식 분리
- 유형: 01 (교육청 기출)
- 풀이 요약: $\{P(x)\}^3+\{Q(x)\}^3 = (P+Q)^3 - 3PQ(P+Q) = 64 - 12PQ$. 조건 (나) $=12x^4+24x^3+12x^2+16$ → $-12PQ = 12x^4+24x^3+12x^2-48$ → $PQ = -(x^4+2x^3+x^2-4)$. 조립제법 → $(x-1)(x+2)(x^2+x+2)$의 부호 반전 → $-PQ = (x-1)(x+2)(x^2+x+2)$. 이차식 두 개로 분리 → $P(x)=-x^2-x+2$ ($P$ 최고차항 음수), $Q(x)=x^2+x+2$. $P(2)+Q(3) = -4+14=10$
- 답: ⑤ (10)

### 216
- category: 인수분해
- mechanism_primary: 세로·가로 각 삼차 다항식 인수분해 (2가지 인수정리)
- mechanism_secondary: 정사각형 사진 $(n+2)$ 크기 배치·나눗셈 관계로 개수 카운트
- 유형: 06 (교육청 기출)
- 풀이 요약: 
  - 가로 $n^3+an^2+8n+7 = (n+2)\cdot(가로 개수) + 3$. $f(n)=n^3+an^2+8n+4$, $f(-2)=0$ → $a=5$. $f(n) = (n+2)(n^2+3n+2) = (n+2)^2(n+1)$. 가로 개수 $(n+2)(n+1)$.
  - 세로 $n^3+6n^2+bn+7 = (n+2)\cdot(세로 개수) + 1$. $g(n)=n^3+6n^2+bn+6$, $g(-2)=0$ → $b=11$. $g(n)=(n+2)(n^2+4n+3)=(n+2)(n+1)(n+3)$. 세로 개수 $(n+1)(n+3)$.
  - 총 $= (n+2)(n+1)\cdot(n+1)(n+3) = (n+1)^2(n+2)(n+3)$
- 답: ② ($(n+1)^2(n+2)(n+3)$)

### 217
- category: 인수분해
- mechanism_primary: 대칭식 $a^3+b^3-c^3-\ldots$ 인수분해 → 직각삼각형 판정
- mechanism_secondary: 삼각부등식 + 부등호 조건으로 case 소거 → 넓이 계산
- 유형: 06
- 풀이 요약: $a^3+b^3-c^3-(b-c)a^2-(c+a)b^2-(a-b)c^2 = a^2b+ab^2-b^2c-bc^2-c^2a+ca^2$ 형태 유도. $a$ 내림차순 → $(a-b+c)(a^2-b^2-c^2)=0$. 삼각부등식 $b < a+c$에서 $a-b+c>0$ → $a^2=b^2+c^2$ (빗변 $a$인 직각삼각형). 넓이 $=\tfrac{1}{2}bc$
- 답: ② ($\tfrac{1}{2}bc$)

### 218
- category: 인수분해
- mechanism_primary: 대칭 사차식 $x^4+2ax^3+bx^2+2ax+1$ → $x^2$ 나누기 · $x+\tfrac{1}{x}$ 치환
- mechanism_secondary: 판정 명제 3개 (보기 ㄱㄴㄷ) 각각 완전제곱·이차식 인수분해 case 열거
- 유형: 03 · 보기 판정
- 풀이 요약: $x^4+2ax^3+bx^2+2ax+1 = x^2\{(x+\tfrac{1}{x})^2 + 2a(x+\tfrac{1}{x}) + b-2\}$.
  - ㄱ. $N(2,6)+N(0,-2)=4+4=8$ (거짓 - 조건 값 3.5 라벨 참조)
  - ㄴ. $N(k,2)=2$: $x^2+2kx+1$ 정수 계수 일차식 곱 조건 → $k=\pm 1$ (2개, 참)
  - ㄷ. $b=a^2+2$: 완전제곱 $(x^2+ax+1)^2$. $N(a,b)=4$ 조건 → $a=\pm 2$, 곱 $=-4$ (참)
- 답: ⑤ (ㄴ, ㄷ)

### 219
- category: 인수분해
- mechanism_primary: 사차식 $N=x^4-25x^2-50x-25 = (x^2)^2-\{5(x+1)\}^2$ (제곱 차)
- mechanism_secondary: $(x^2+5x+5)(x^2-5x-5)$ 인수분해 · $|N|$ 소수 조건 case 소거
- 유형: 05·03 결합
- 풀이 요약: $N = (x^2+5x+5)(x^2-5x-5)$. $|N|$ 소수 조건 → 두 인수 중 하나는 $\pm 1$, 다른 하나는 $\pm$소수:
  - (i) $x^2+5x+5=1$: $x=-4, -1$; $|N|=31, 1$; 소수는 $x=-4$
  - $x^2+5x+5=-1$: $x=-2, -3$; $|N|=9, 19$; 소수는 $x=-3$
  - (ii) $x^2-5x-5=1$: $x=6, -1$; $|N|=71, 1$; 소수는 $x=6$
  - $x^2-5x-5=-1$: (정수해 없음)
  - 정수 $x$ 개수 $p=3$ ($x=-4, -3, 6$). 최댓값 $q=71$. $p+q=74$
- 답: 74

### 220
- category: 인수분해
- mechanism_primary: $x^2=t$ 치환 → $t^2-at+36$ 정수 계수 일차식 곱 case 5가지
- mechanism_secondary: $(t-m)(t-n) = (x^2-m)(x^2-n)$에서 $m, n$이 각각 완전제곱수 case
- 유형: 03
- 풀이 요약: $t^2-at+36$ 정수 계수 이차식 인수분해 case: $(t-1)(t-36), (t-2)(t-18), (t-3)(t-12), (t-4)(t-9), (t-6)^2$. 이 중 $x$ 일차식 4개 인수분해 되려면 두 상수 모두 완전제곱수:
  - $(t-1)(t-36) = (x+1)(x-1)(x+6)(x-6)$: $a=37$
  - $(t-4)(t-9) = (x+2)(x-2)(x+3)(x-3)$: $a=13$
  - 나머지는 완전제곱수 조건 실패. 합 $=37+13=50$
- 답: ⑤ (50)

### 221
- category: 인수분해
- mechanism_primary: $n^4+2n^2-3 = (n^2-1)(n^2+3) = (n-1)(n+1)(n^2+3)$
- mechanism_secondary: $(n-1)(n-2)$의 배수 조건 → $(n-1)(n+1)(n^2+3)$을 $(n-1)(n-2)$로 나누고 나머지 조건
- 유형: 05 · 정수 배수 판정
- 풀이 요약: $(n-1)(n+1)(n^2+3)$을 $(n-1)(n-2)$로 나눔. $(n+1)(n^2+3) = (n-2)(n^2+3n+9)+21(n-1)+\ldots$ 정리 → 21(n-1)이 $(n-1)(n-2)$의 배수가 되려면 $n-2$가 21의 양의 약수: $1, 3, 7, 21$ → $n=3, 5, 9, 23$. 합 $=40$
- 답: 40

### 222
- category: 인수분해
- mechanism_primary: $x, y$ 이차식 $x^2-y^2-ax-by-2$가 정수 계수 두 일차식 곱으로 인수분해 조건
- mechanism_secondary: 상수항 $-y^2-by-2$ 인수분해 case 열거
- 유형: 04 (선행 194)
- 풀이 요약: $x^2-ax-(y^2+by+2)$ 형태. $y^2+by+2$ 인수분해 case:
  - $(y+1)(y+2)$: $b=3$, $a=\pm 1$
  - $(y-1)(y-2)$: $b=-3$, $a=\pm 1$
  - 가능한 $a+b$: $\{2, 4, -2, -4\}$. 0은 불가
- 답: ③ (0)

### 223
- category: 인수분해
- mechanism_primary: 대칭 표현 $ab(a^2-b^2)+bc(b^2-c^2)+ca(c^2-a^2)$ 인수분해
- mechanism_secondary: 정수 인수 분해 $138=2\cdot 3\cdot 23$ 매칭 → $a, b, c$ 결정
- 유형: 06
- 풀이 요약: 좌변 인수분해 → $(a-b)(b-c)(c-a)(a+b+c)\cdot(-1) = -(a-b)(b-c)(c-a)(a+b+c)$ 부호. 해설: $(b-c)(a-c)(a-b)(a+b+c)=138 = 1\cdot 2\cdot 3\cdot 23$. 자연수 10이하 · $a>b>c$ 조건 → $a=9, b=8, c=6$. $a^2+b^2+c^2=81+64+36=181$
- 답: 181

### 224
- category: 인수분해
- mechanism_primary: $P(x)=(x-a)(x+a)(x^2-250+a^2)$ 인수분해 후 삼분해 조건
- mechanism_secondary: $250-a^2$ 완전제곱 case 열거 (15 이하)
- 유형: 05·정수 조건 (교육청 변형)
- 풀이 요약: $P(x)=x^4-250x^2+b$. $x-a$ 인수 → $b=250a^2-a^4=a^2(250-a^2)>0$, $b$ 자연수. 조립제법 → $P(x)=(x-a)(x+a)(x^2-(250-a^2))$. 3개 서로 다른 정수 계수 다항식 곱 조건 → $x^2-(250-a^2)$이 두 일차식으로 분해되지 말아야. 즉 $250-a^2$이 완전제곱이 되지 않아야. $250-a^2$ 완전제곱 case: $a=5$($225=15^2$), $a=9$($169=13^2$), $a=13$($81=9^2$), $a=15$($25=5^2$). 이들 제외. $a \in \{1,\ldots,15\}\setminus\{5,9,13,15\}$ → $p=15-4=11$. $a$ 최댓값 $=14$일 때 $b=q=14^2\cdot 54$. $\dfrac{q}{9(p+1)} = \dfrac{14^2\cdot 54}{9\cdot 12} = 98$
- 답: 98

### 225
- category: 인수분해
- mechanism_primary: $P(x^{12}) = x^{24}+x^{12}+1$ · $P(x)=x^2+x+1$로 나눔
- mechanism_secondary: $x^3-1=(x-1)P(x)$ 이용, $x^{24}, x^{12}$을 $x^3$의 거듭제곱으로 재정리
- 유형: 05
- 풀이 요약: $P(x^{12}) = x^{24}+x^{12}+1 = \{(x^3)^8-1\} + \{(x^3)^4-1\} + 3 = (x^3-1)\cdot Q_1(x) + (x^3-1)\cdot Q_2(x)+3$. 인수정리로 나머지 $=3$
- 답: 3

### 226
- category: 인수분해
- mechanism_primary: $x^{27}+x^{26}+x^{24}+x^{23}+x+3$을 $x^4+x^3+x^2+x+1$로 나눔
- mechanism_secondary: $x^{25}-1$ 인수분해 활용 · 몫 재구성
- 유형: 05
- 풀이 요약: 원식 $= x^{23}(x^4+x^3+x^2+x+1)+(x-1)(\cdots)+x+2$ 형태로 재정리. TIP: $x^{25}-1 = (x^5-1)(x^{20}+x^{15}+x^{10}+x^5+1)$. 나머지 $=x+2$
- 답: ① ($x+2$)

### 227
- category: 인수분해
- mechanism_primary: $x^{10}-2x^5-3 = X^2-2X-3 = (X+1)(X-3) = (x^5+1)(x^5-3)$ 치환
- mechanism_secondary: $x^5+1 = (x+1)(x^4-x^3+x^2-x+1)$ (홀수 지수 성질) → $Q(x)$ 분리
- 유형: 05 (선행 190)
- 풀이 요약: $x^{10}-2x^5-3 = (x+1)(x^4-x^3+x^2-x+1)(x^5-3) = (x+1)Q(x)$. $Q(x)=(x^4-x^3+x^2-x+1)(x^5-3)$. 나머지정리: $Q(-1) = (1+1+1+1+1)\cdot(-1-3) = 5\cdot(-4) = -20$
- 답: ③ ($-20$)

### 228
- category: 인수분해
- mechanism_primary: 정사각뿔 두 부피 합 → $a^3+b^3 = (a+b)(a^2-ab+b^2)$ 인수분해
- mechanism_secondary: 삼각형 FAI에 피타고라스 (60도 각) · $(a-b)^2$ 유도 → 넓이 $S$ 결정
- 유형: 06 (교육청 기출)
- 풀이 요약: 정사각뿔 O-ABCD 부피 $\tfrac{\sqrt{2}}{6}a^3$, 정사각뿔 O-EFGH 부피 $\tfrac{\sqrt{2}}{6}b^3$. 합 $=\tfrac{\sqrt{2}}{6}(a^3+b^3)=2\sqrt{2}$ → $a^3+b^3=12$. $\triangle BFI$ ($\angle FBI=60°$ 직각삼각형)에서 $\overline{FI}=\tfrac{\sqrt{3}}{2}(a-b)$, $\overline{AI}=\tfrac{1}{2}(a+b)$. $\overline{AF}^2 = \tfrac{3}{4}(a-b)^2 + \tfrac{1}{4}(a+b)^2 = a^2-ab+b^2 = 4$. $a^3+b^3=(a+b)(a^2-ab+b^2)=(a+b)\cdot 4=12$ → $a+b=3$. $(a+b)^2-3ab=4$ → $ab=\tfrac{5}{3}$. $(a-b)^2=9-4\cdot\tfrac{5}{3}=\tfrac{7}{3}$. $S = \tfrac{\sqrt{3}}{4}(a^2-b^2) = \tfrac{\sqrt{3}}{4}\cdot 3\cdot\tfrac{\sqrt{21}}{3} = \tfrac{3}{4}\sqrt{7}$. $32\times S^2 = 32\cdot \tfrac{63}{16}=126$
- 답: 126

---

## Mechanism 빈도 통계 (44문)

| Mechanism | 문항 수 | 문항 번호 |
|---|---|---|
| 인수정리·조립제법 (STEP 2·3) | 15 | 186·187·188·189·190·196·197·198·199·200·211·213·214·216·224·225·226·227 |
| 여러 문자 · 내림차순 정리 | 6 | 194·195·207·208·217·222·223 |
| 공통부분 치환 ($X=\ldots$) | 5 | 191·192·193·203·215·218·220 |
| $x^4+ax^2+b$ 꼴 · $A^2-B^2$ 변형 | 4 | 193·200·218·220 |
| 삼각형 판정 (인수분해 → 등변·직각) | 3 | 207·208·217 |
| 도형 부피·넓이 인수분해 활용 | 5 | 206·209·210·216·228 |
| 수치·큰 수 계산 인수분해 활용 | 5 | 201·202·203·204·205 |
| 완전제곱 판별 | 3 | 191·200·220 |
| $x^n-1$ · 기하급수 형 | 4 | 189·190·225·226·227 |
| 정수 배수·소수 판정 | 5 | 213·214·219·221·222·224 |

## 특이 사항

1. **STEP 2·3에서 "인수정리·조립제법" (유형 05)이 압도적 다수** (약 40% 이상). 순수 "인수분해 공식"·"$x^4+ax^2+b$ 꼴"보다 인수정리·조립제법으로 삼차 이상 다항식을 인수분해하는 문제가 심화·최고난도의 핵심.

2. **★ 5 성격 정점 문항 후보** (mechanism 복합·통찰 다중):
   - 199 (치환 + 조립제법 + 상수 확정)
   - 208 (인수분해 + 직각삼각형 + 조건 (나) 결합)
   - 218 (대칭 사차식 + 완전제곱 판정 + 보기 3개 판정)
   - 219 (제곱 차 + 소수 판정 + case 열거)
   - 224 (다항식 인수분해 + 완전제곱 case 열거 + 최댓값 산정)
   - 228 (도형 + $a^3+b^3$ 인수분해 + 피타고라스 결합)

3. **정수 조건 · 배수 · 소수 판정**이 STEP 3의 특징적 심화 유형. 단순 인수분해 skill을 넘어 case 열거·정수론적 판정이 결합됨.

4. **교육청 기출·변형** 명시: 192·194·210·215·216·224·228 (7문).

5. **서술형** 문항: 179 (STEP 1) · 208 · 211 (STEP 3). 208·211은 채점 배점표 명시.

---

## 저작권 준수 확인

- ✅ 발문 원문 전사 없음. mechanism·풀이 절차·답만 기록.
- ✅ 해설 풀이 원문 전사 없음. 핵심 아이디어·계산 결과만 요약.
- ✅ 이투스북 저작권 명시 (원본 저작권자).
- 참고자료 분석 목적에 한함. 문제 재사용 시 최소 변형 원칙 (숫자만 변경) 또는 동등 변형 적용 예정.
