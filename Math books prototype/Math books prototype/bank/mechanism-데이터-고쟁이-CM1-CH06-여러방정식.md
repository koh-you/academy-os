---
name: mechanism-데이터-고쟁이-CM1-CH06-여러방정식
description: 고쟁이 공통수학1 (2025) CH06 여러 가지 방정식 STEP 2·STEP 3 전문항(47문) mechanism 정밀 매칭 데이터. 저작권 준수 — 발문 원문 미전사, 구조·mechanism·풀이 흐름만 기록.
metadata:
  type: mechanism-mapping-data
  source: "고쟁이 공통수학1 2025 (이투스북)"
  chapter: "II-03 여러 가지 방정식"
  pages_main: "p.124–141 (본문 p.131–139)"
  pages_solution: "정답과 풀이 p.97–108"
  scope: "STEP 2 (문항 492–526, 총 35문) + STEP 3 (문항 527–538, 총 12문) = 총 47문"
  cm_line: CM1
  cm_unit: EQ (방정식과 부등식)
  extracted_by: "Claude (전수 1:1 매칭)"
  extracted_date: 2026-07-14
  copyright: "저작권 준수 — 발문·풀이 원문 미전사. mechanism 라벨·풀이 흐름 요약만."
  tier_mapping:
    STEP_2: star_5
    STEP_3: star_5_premium
  unit_code: CM1-EQ
---

# 고쟁이 CM1 CH06 여러 가지 방정식 · STEP 2/3 Mechanism 데이터

## 범례

- **문항번호**: 고쟁이 본책 문항 번호
- **step**: STEP 2 (심화 유형) / STEP 3 (최고난도 유형)
- **category**: 여러 가지 방정식 (전 문항 공통)
- **mechanism_primary**: 문항 풀이의 핵심 mechanism (1개)
- **mechanism_secondary**: 결합·부수 mechanism (0~2개)
- **object_type**: 대상 방정식/체계 종류 (삼차·사차·연립이차·부정 등)
- **key_technique**: 실제 풀이 handle (핵심 조작 도구)
- **traps**: 학생이 걸리는 함정
- **difficulty_est**: 고쟁이의 STEP 분류 기준 상대 난이도 (★ 3~5, 편집 참고용)
- **notes**: 특기 사항 (선행 문항 참조·교육청 기출·유형 결합 등)

## Mechanism 분류 체계 (본 CH06 내 발견)

### 삼·사차방정식 계열
- **M-CBQ-Factor**: 인수분해 공식 직접 이용 ($a^3\pm b^3$, $x^n=1$ 형)
- **M-CBQ-RemFactor**: 인수정리 + 조립제법 인수분해
- **M-CBQ-Subst**: 공통 부분 치환 ($x^2=X$, $x^2+3x=t$ 등)
- **M-CBQ-SquareGrp**: 상반방정식·대칭 계수 → $x + 1/x = t$ 치환
- **M-CBQ-BiQuad**: 복이차식 $ax^4 + bx^2 + c = 0$ → $X = x^2$ 이차식화
- **M-CBQ-RootCoeff**: 삼·사차방정식 근과 계수 관계 (뉴턴 항등식 포함)
- **M-CBQ-ComplexRoot**: 실계수 방정식의 켤레복소수 성질
- **M-CBQ-OmegaProp**: $x^3 = 1$·$x^3 = -1$ 허근 $\omega$의 성질 (거듭제곱 주기·이차식 관계)
- **M-CBQ-RealImagCase**: 실근·허근 개수 조건 판별 (판별식 + 유리인수 분해 case 분기)
- **M-CBQ-CommonRoot**: 두 다항방정식의 공통근
- **M-CBQ-IdentityMatch**: 항등식 계수 비교 (사차식 $= (x^2 + ax + b)(x^2 + cx + d)$ 등)

### 연립이차방정식 계열
- **M-SIM-LinSub**: (일차) × (이차) — 일차식 대입 소거
- **M-SIM-QuadFactor**: (이차) × (이차) — 인수분해 가능 이차식이 있어 두 일차식으로 분해
- **M-SIM-SumProd**: $x + y = a, xy = b$ 대칭식 치환 → $t^2 - at + b = 0$ 근
- **M-SIM-Symmetric**: $x, y$ 대칭 방정식 — $x+y$·$xy$ 치환
- **M-SIM-DiscCond**: 실근·중근·해 유일 조건 → 판별식 조건 유도

### 부정방정식 계열
- **M-IND-IntFactor**: 정수 조건 + 인수분해 = (정수)×(정수) case 열거
- **M-IND-SumOfSquares**: 실수·자연수 조건 + $A^2 + B^2 = 0$ 형 → $A=0, B=0$
- **M-IND-QuadDiscNonneg**: 실수 조건 이차식 판별식 $\ge 0$

### 활용 계열
- **M-APP-Geom**: 도형(길이·넓이·부피) → 방정식 세우기
- **M-APP-RealLife**: 실생활 상황(속도·개수 등) → 방정식 세우기
- **M-APP-DigitPlace**: 자릿수·자연수 표기 조건

---

## STEP 2 (35문, 492–526)

### 유형 01 삼차·사차방정식의 풀이 (492–511)

**492**
- category: 여러 가지 방정식
- step: STEP 2
- object_type: 삼차방정식 ($x^3 - 4x^2 + (m-14)x + 2m - 4 = 0$)
- mechanism_primary: M-CBQ-RemFactor (조립제법 인수분해)
- mechanism_secondary: [M-CBQ-RealImagCase (실근 3개 · 1보다 작거나 같은 근 1개 조건 → 판별식 + 축 위치)]
- key_technique: $x=-2$ 대입 확인 → $(x+2)(x^2-6x+m-2)=0$ → 이차식 두 실근이 모두 1 초과이려면 $D/4>0$ + $f(1)>0$ + 축 $x=3>1$
- traps: "1보다 작거나 같은 근이 오직 1개" = 이차식의 두 근이 모두 1 초과 (등호 처리)
- difficulty_est: ★ 4
- notes: 정수 $m$ 값의 합 27

**493** (빈출, 서술형)
- object_type: 삼차방정식 ($x^3 - kx^2 + k - 1 = 0$, 중근 조건)
- mechanism_primary: M-CBQ-RemFactor
- mechanism_secondary: [M-CBQ-RealImagCase (중근 조건 2 case)]
- key_technique: $x=1$ 근 확인 → $(x-1)\{x^2 - (k-1)x - (k-1)\} = 0$ → 이차식이 $x=1$을 근으로 갖는 case + 이차식 자체 중근 case 분기
- traps: "중근" 조건이 두 경우 모두 포함
- difficulty_est: ★ 4
- notes: 서술형 · $k$ 값 합 $-1/2$

**494**
- object_type: 사차방정식 ($(x^2-4x)^2 + (x^2-4x) - 20 = 0$)
- mechanism_primary: M-CBQ-Subst ($X = x^2 - 4x$ 치환)
- mechanism_secondary: [M-CBQ-BiQuad (치환 후 이차식 판별)]
- key_technique: $X^2+X-20=0 \Rightarrow (X+5)(X-4)=0$ → 두 이차식으로 분해 → 하나는 실근·다른 하나는 허근
- traps: 원 사차식이 4근 모두 실이 아님 (허근 case 놓치기 쉬움)
- difficulty_est: ★ 4
- notes: 모든 실근의 합 A=4, 모든 허근의 곱 B=5, A+B=9

**495**
- object_type: 사차방정식 ($x^4 - 6x^2 + a - 5 = 0$)
- mechanism_primary: M-CBQ-BiQuad ($X = x^2$)
- mechanism_secondary: [M-CBQ-RealImagCase (모든 근 실수 조건)]
- key_technique: $X^2 - 6X + a - 5 = 0$이 음 아닌 두 실근 → $D/4 \ge 0$ + 두 근의 곱 $\ge 0$
- traps: $X = x^2 \ge 0$ 조건 (음이 아닌 두 실근)
- difficulty_est: ★ 4
- notes: 정수 $a$ 개수 = 10

**496** (스키마 예시 문항)
- object_type: 사차방정식 ($x^4 + (2-2a)x^2 + 10 - 5a = 0$)
- mechanism_primary: M-CBQ-BiQuad ($x^2 = X$)
- mechanism_secondary: [M-CBQ-RealImagCase (두 실근 + 두 허근 조건: 두 근의 곱 < 0)]
- key_technique: 치환 이차식이 양의 실근 1개 + 음의 실근 1개 → 근과 계수 관계에서 두 근의 곱 = 상수항 < 0
- traps: 실근·허근 균등 분배 조건 = 이차식 근의 부호 반대
- difficulty_est: ★ 4
- notes: $p = 2$ · 스키마 풀이 흐름 도식 별첨

**497** (교육청 기출)
- object_type: 삼차다항식 $P(x) = x^3 + ax^2 + bx + c$, $P(x)=0$·$P(3x-1)=0$ 각각의 근 조건
- mechanism_primary: M-CBQ-RootCoeff (근과 계수 관계 + 켤레복소수)
- mechanism_secondary: [M-CBQ-ComplexRoot, M-CBQ-IdentityMatch]
- key_technique: $P(x)=0$의 세 근 $\alpha, \beta, \gamma$·$P(3x-1)=0$의 세 근은 $(\alpha+1)/3, (\beta+1)/3, (\gamma+1)/3$ · 조건 두 개로 연립
- traps: 근 변수 치환 관계 (변수 $x \to 3x-1$ ⇔ 근 $\to (\text{근}+1)/3$)
- difficulty_est: ★ 5
- notes: $a+b+c=3$ · 교육청

**498**
- object_type: 삼차방정식 ($2x^3 - (2k+1)x^2 + (5k+2)x - 2k - 1 = 0$, 모든 $k$ 관계없이 성립)
- mechanism_primary: M-CBQ-IdentityMatch ($k$ 항등식 정리)
- key_technique: $k$에 관해 정리 $k(-2x^2 + 5x - 2) + (2x^3 - x^2 + 2x - 1) = 0$ → 두 다항식 모두 0 → 공통근
- traps: 항등식 성립 조건 = 두 다항식 계수 각각 0 (여기서는 두 다항식 값 각각 0)
- difficulty_est: ★ 4
- notes: 공통근 $x = 1/2$

**499**
- object_type: 사차방정식 ($x^4 + 4x^3 - 7x^2 + 4x + 1 = 0$, 상반방정식)
- mechanism_primary: M-CBQ-SquareGrp ($x + 1/x = k$ 치환)
- mechanism_secondary: [M-CBQ-RootCoeff]
- key_technique: 양변 $x^2$ 나눔 → $(x^2 + 1/x^2) + 4(x + 1/x) - 7 = 0$ → $t = x + 1/x$ 치환 → $t^2 + 4t - 9 = 0$
- traps: $x=0$ 근 아님을 먼저 확인 (양변 나눗셈 정당화)
- difficulty_est: ★ 4
- notes: 모든 $k$ 값 곱 $=-9$

**500**
- object_type: 사차방정식 ($x^4 - 7x^2 + 1 = 0$)
- mechanism_primary: M-CBQ-Factor ($x^4 + 2x^2 + 1 - 9x^2 = (x^2+1)^2 - (3x)^2$ 곱셈공식 역이용)
- mechanism_secondary: [M-CBQ-RootCoeff, M-CBQ-RealImagCase]
- key_technique: 두 이차식 $x^2 + 3x + 1 = 0$·$x^2 - 3x + 1 = 0$으로 분해 → 각각 판별식 > 0 → 항상 실근
- traps: ㄷ (모든 $a$ 실수) 판정 — 두 이차식 모두 실근
- difficulty_est: ★ 4
- notes: 보기 ㄱ ㄴ ㄷ 모두 참

**501** (빈출)
- object_type: 삼차식 $f(x)$ (최고차 1) 조건 $f(-2)=f(1)=f(3)=k$
- mechanism_primary: M-CBQ-IdentityMatch ($f(x)-k = (x+2)(x-1)(x-3)$)
- mechanism_secondary: [M-CBQ-RootCoeff]
- key_technique: 세 값이 같음 → $f(x)-k$가 $(x+2)(x-1)(x-3)$을 인수로 가짐 → $x=2$ 대입해 $k$ 결정
- traps: "$k$ 상수" 발견 (문제 표면 = 세 값 각각 대입 조건)
- difficulty_est: ★ 4
- notes: $\alpha^2 + \beta^2 = 10$

**502** (빈출, 선행 466)
- object_type: 삼차방정식 ($x^3 + ax^2 + bx + 20 = 0$, 근 $2+i$)
- mechanism_primary: M-CBQ-ComplexRoot (실계수 → 켤레 $2-i$도 근)
- mechanism_secondary: [M-CBQ-RootCoeff]
- key_technique: 세 근 $2+i, 2-i, \alpha$ 근과 계수 관계 · $\alpha$·$a$·$b$ 결정
- traps: 세 근의 곱 = $-20$ 부호
- difficulty_est: ★ 3
- notes: $a - b = 11$

**503**
- object_type: 삼차방정식 ($x^3 + ax^2 + bx + c = 0$, 근 $-1+\sqrt{2}i$)
- mechanism_primary: M-CBQ-ComplexRoot (켤레 $-1-\sqrt{2}i$도 근)
- mechanism_secondary: [M-CBQ-CommonRoot (이차식 $x^2 + ax - 8 = 0$과 공통근 오직 하나 조건)]
- key_technique: 삼차식 세 근 결정 후 이차식 공통근 case 분기 → $x = p$ (제3 실근)만 공통근
- traps: "공통근 오직 하나" = 이차식이 켤레 근을 갖지 않음 (계수 실수 이차식이므로 공통근이 실수)
- difficulty_est: ★ 5
- notes: $c = -12$

**504** (선행 473)
- object_type: 삼차방정식 ($x^3 - 4x + 2 = 0$, 세 근 $\alpha, \beta, \gamma$)
- mechanism_primary: M-CBQ-RootCoeff (뉴턴 항등식 $\alpha^3 + \beta^3 + \gamma^3$)
- key_technique: $A = (3-\alpha)(3-\beta)(3-\gamma) = f(3)$ 함수값 활용 + $\alpha^3 = 4\alpha - 2$ 대입 세 근 합산
- traps: 근에 대해 원방정식 대입 재활용 (거듭제곱 축약)
- difficulty_est: ★ 4
- notes: $A = 17, B = -6$

**505**
- object_type: 사차식 $f(x) = x^4 + 2x^3 + ax^2 + bx + 5$, 조건 $f(1-\sqrt{2}i) = -1$
- mechanism_primary: M-CBQ-ComplexRoot ($f(x)+1$이 $x^2 - 2x + 3$ 인수)
- mechanism_secondary: [M-CBQ-IdentityMatch]
- key_technique: $f(x)+1 = (x^2 - 2x + 3)(x^2 + px + q)$ 항등식 · 계수 비교
- traps: 켤레 $1+\sqrt{2}i$도 근이라는 인식 필요
- difficulty_est: ★ 5
- notes: $a + b = 5$

**506**
- object_type: 삼차방정식 ($x^3 + ax^2 + bx + c = 0$, 세 근 $\alpha, \beta, \gamma$), 근 변환식
- mechanism_primary: M-CBQ-RootCoeff (역수 근 방정식)
- key_technique: $1/(\alpha\beta), 1/(\beta\gamma), 1/(\gamma\alpha)$를 근으로 갖는 삼차식 유도 → 세 계수 비교 · $c^2 = 1$·$b/c = 3$
- traps: 근 변환 대칭식 계산
- difficulty_est: ★ 4
- notes: $a^2 + b^2 + c^2 = 11$

**507**
- object_type: 삼차방정식 ($3x^3 + 5x^2 + (a+2)x + a = 0$, 양수·음수 근 조건)
- mechanism_primary: M-CBQ-RemFactor ($x = -1$ 근 확인)
- mechanism_secondary: [M-CBQ-RealImagCase (양·음 실근 조건 = 두 근의 곱 < 0)]
- key_technique: $(x+1)(3x^2+2x+a)=0$ → 이차식이 양의 실근 1 + $-1$ 아닌 음의 실근 1개 → $a/3 < 0$
- traps: $x = -1$이 이차식 근이 아닌 조건 별도 확인 ($a \ne -1$)
- difficulty_est: ★ 4
- notes: 정수 $a$ 최댓값 $= -2$

**508**
- object_type: 삼차방정식 ($ax^3 + 3x^2 - 3x - a = 0$, 1 이외 실근 오직 하나)
- mechanism_primary: M-CBQ-RemFactor ($x=1$ 근 확인)
- mechanism_secondary: [M-CBQ-RealImagCase (중근 조건)]
- key_technique: $(x-1)\{ax^2 + (a+3)x + a\} = 0$ → 이차식 중근 조건 (판별식 $=0$) + $x=1$ 근 아님
- traps: "1 이외 실근 오직 하나" = 이차식이 1 아닌 중근 OR 이차식이 $x=1$ 근 & 1 아닌 다른 실근 1개
- difficulty_est: ★ 4
- notes: $a = 3$

**509** (빈출)
- object_type: 방정식 $x^3 - 8 = 0$의 허근 $w$ (관례상 $\omega$ 아님, $w^3 = 8$)
- mechanism_primary: M-CBQ-OmegaProp ($x^2 + 2x + 4 = 0$의 허근 성질)
- mechanism_secondary: [M-CBQ-RootCoeff (근·켤레 관계)]
- key_technique: $w^2 + 2w + 4 = 0$·$w + \bar{w} = -2, w\bar{w} = 4$ 활용 · 보기 4개 판정
- traps: $x^3 - 8 = 0$ (표준 $x^3 = 1$ 아님) — 유도 이차식이 $x^2+2x+4$
- difficulty_est: ★ 4
- notes: 옳은 것 ㄴ ㄹ 2개

**510**
- object_type: 사차방정식 ($x^4 - 2x^3 - x + 2 = 0$)의 허근 $\omega$의 거듭제곱 합
- mechanism_primary: M-CBQ-RemFactor + M-CBQ-OmegaProp
- key_technique: $(x-1)(x-2)(x^2+x+1) = 0$ → 허근은 $x^2 + x + 1 = 0$의 근 → $\omega^3 = 1$
- traps: 원 사차식 인수분해 후 허근이 어느 이차식 근인지 판별
- difficulty_est: ★ 4
- notes: $1 + \omega + \omega^2 + \cdots + \omega^{100} = 1 + \omega$ (100 = 3·33+1)

**511**
- object_type: 삼차방정식 $x^3 = 1$의 허근 $\omega$
- mechanism_primary: M-CBQ-OmegaProp
- key_technique: $\omega^2 + \omega + 1 = 0$·$\omega^3 = 1$ 이용 → 복잡한 분수식 간단화 후 $(-\omega)^n$ · 음의 실수 조건 (홀수 & 3의 배수)
- traps: 음의 실수 = $n$ 홀수 & $\omega^n$ 실수 → $n$이 3의 배수 (100 이하 3의 배수 중 6의 배수 제외 = 33-16=17)
- difficulty_est: ★ 5
- notes: 자연수 개수 17

### 유형 03 미지수가 2개인 연립이차방정식 (513–518)

**513**
- object_type: 연립방정식 $\{x^2 - xy = 5, xy - y^2 = 2\}$
- mechanism_primary: M-SIM-QuadFactor (이차식 두 개 → 계수 조작 인수분해)
- mechanism_secondary: [M-SIM-Symmetric]
- key_technique: $2 \times$ 첫식 $- 5 \times$ 둘째식 → $2x^2 - 7xy + 5y^2 = 0 = (2x-5y)(x-y)$ → $2x = 5y$ 또는 $x=y$
- traps: $x = y$ case는 원식 만족 안 됨
- difficulty_est: ★ 4
- notes: $\alpha\beta = 10/3$

**514**
- object_type: 연립방정식 $\{x+y+xy = -2, x^2 y + y^2 x = -24\}$
- mechanism_primary: M-SIM-SumProd ($A = x+y, B = xy$ 치환)
- key_technique: $A + B = -2$·$AB = -24$ → $A, B$ 두 근인 이차식 $t^2 + 2t - 24 = 0$ → $A, B$ case 분기 → $xy$ 값 후보
- traps: $A, B$가 $x, y$ 위치 대칭 (두 case)
- difficulty_est: ★ 4
- notes: $xy$ 값 합 $= -2$

**515**
- object_type: 연립방정식 $\{(x+2)(y+2)=a, (x-4)(y-4)=a\}$ (해 오직 한 쌍)
- mechanism_primary: M-SIM-LinSub (두 식 뺄셈)
- mechanism_secondary: [M-SIM-DiscCond (중근 조건)]
- key_technique: 뺄셈 → $6(x+y) = 12 \Rightarrow x+y = 2$ 대입 → 이차식 $x^2 - 2x + a - 8 = 0$ 중근 조건 $D = 0$
- traps: "오직 한 쌍" = 이차식 중근
- difficulty_est: ★ 5
- notes: $a = 9$

**516**
- object_type: 연립방정식 $\{(x-y)^2 = x-y+2, x^2 = y^2 + 5\}$ (두 양수 조건)
- mechanism_primary: M-SIM-Subst ($X = x-y$)
- mechanism_secondary: [M-SIM-QuadFactor]
- key_technique: 첫식 $X^2 - X - 2 = 0 \Rightarrow X = -1$ 또는 $2$ → case (i) $x-y=-1$ (양수 조건 실패) (ii) $x-y=2$
- traps: 양수 조건 case 검증 (case (i) 탈락)
- difficulty_est: ★ 4
- notes: $80xy = 45$

**517**
- object_type: 두 연립이차방정식 공통근 $\{x+y=3, x^2+py^2=15\} \cap \{qx-y=5, x^2+y^2=17\}$
- mechanism_primary: M-SIM-LinSub (각 연립에서 공통근 대입)
- mechanism_secondary: [M-SIM-Symmetric]
- key_technique: 공통근 $\alpha, \beta$ 대입 두 시스템 → 후자로 $\alpha, \beta$ 결정 후 $p, q$ 결정
- traps: 공통근 조건 = 두 시스템 모두 만족 (연립 4식 연립)
- difficulty_est: ★ 5
- notes: $a+b+p+q = 3$

**518** (선행 485)
- object_type: 연립방정식 $\{x^2+y^2+2(x+y)=k, x^2+xy+y^2=5\}$ 항상 양수 조건
- mechanism_primary: M-SIM-SumProd ($A = x+y, B = xy$)
- mechanism_secondary: [M-SIM-DiscCond, M-CBQ-RootCoeff]
- key_technique: $A^2 - 2B + 2A = k$·$A^2 - B = 5$ → $B$ 소거 → $A$ 이차식 판별식 & 두 근 곱 > 0
- traps: "$a + \beta$ 항상 양수" = $A$ 방정식 두 근 곱 > 0 조건 + $D \ge 0$
- difficulty_est: ★ 5
- notes: $10 < k \le 11$

### 유형 04 방정식의 활용 (519–522)

**519**
- object_type: 세 자리 자연수 $N$의 자릿수 관계 (백·십·일)
- mechanism_primary: M-APP-DigitPlace
- mechanism_secondary: [M-SIM-LinSub]
- key_technique: $a + b + c = 12$·$2b = a + c$·$100c + 10b + a = N + 594$ (자릿수 뒤바뀜 조건) → 3식 연립
- traps: 자릿수 뒤바뀜 방정식 세우기
- difficulty_est: ★ 4
- notes: $N = 147$

**520**
- object_type: 세 식물 X, Y, Z (총 무게 1 kg, 성분 A 추출 백분율)
- mechanism_primary: M-APP-RealLife (혼합 성분)
- mechanism_secondary: [M-SIM-LinSub]
- key_technique: 총량·성분 추출·무게 비 3식 연립
- traps: 실생활 상황 → 3원 1차 연립
- difficulty_est: ★ 3
- notes: $x=500, y=300, z=200$

**521**
- object_type: 두 사람 만남 (속도·시간·거리)
- mechanism_primary: M-APP-RealLife (속도·시간·거리)
- mechanism_secondary: [M-SIM-LinSub]
- key_technique: $xt = 4y$·$yt = x$ (만난 후 후속 이동) → $t = x/y$ 대입 → $x = 2y$ + $4y - x = 8$
- traps: 만난 지점 이후 각각의 이동 조건 → 방정식 2식
- difficulty_est: ★ 4
- notes: $x + S = 32$

**522**
- object_type: 캡슐형 알약 (원기둥 + 양 끝 반구, 부피 조건)
- mechanism_primary: M-APP-Geom (부피·겉넓이)
- mechanism_secondary: [M-CBQ-RemFactor]
- key_technique: 부피식 $\frac{4}{3}\pi x^3 + \pi x^2 (x+6) = 117\pi$ → 삼차식 $\frac{7}{3}x^3 + 6x^2 - 117 = 0$ 인수분해
- traps: 부피식 세우고 삼차식 근 찾기 ($x=3$)
- difficulty_est: ★ 4
- notes: 겉넓이 $90\pi$ mm²

### 유형 05 부정방정식 (523–526)

**523**
- object_type: 이차방정식 ($x^2 + (m-1)x + 2m + 3 = 0$, 두 근 정수)
- mechanism_primary: M-IND-IntFactor (두 근 근과 계수 관계 + 정수 조건)
- mechanism_secondary: [M-CBQ-RootCoeff]
- key_technique: $\alpha + \beta = 1-m$·$\alpha\beta = 2m+3$ → $m$ 소거 → $(\alpha+2)(\beta+2)=9$ → 정수 곱 case
- traps: $9 = 1\cdot9 = 3\cdot3 = (-1)(-9) = (-3)(-3)$ 4 case
- difficulty_est: ★ 4
- notes: $m$ 값 합 20

**524**
- object_type: 삼차방정식 ($2x^3 - kx^2 + 49 = 0$, 정수근 $\alpha$)
- mechanism_primary: M-IND-IntFactor
- mechanism_secondary: [M-CBQ-RemFactor, M-CBQ-RootCoeff]
- key_technique: $2\alpha^3 - k\alpha^2 = -49$ → $\alpha^2(2\alpha-k) = -49$ → $\alpha$·$2\alpha - k$ 정수 곱 case → 1보다 큰 자연수 $\alpha$ 제한 → $\alpha=7, k=15$
- traps: $-49 = (-1) \cdot 7^2$ 유일 (자연수 & 자연수 이상 case)
- difficulty_est: ★ 5
- notes: $4(\beta^2+\gamma^2) - k = 14$

**525**
- object_type: $x^2 + y^2 - 2x + 4y - 8 = 0$, 정수 $x, y$
- mechanism_primary: M-IND-IntFactor ($(x-1)^2 + (y+2)^2 = 13$)
- key_technique: 두 완전제곱 합 = 13 = $2^2 + 3^2$ → case 분기 (부호·순서)
- traps: $13 = 2^2 + 3^2$ 유일 분해 (부호 케이스 열거)
- difficulty_est: ★ 4
- notes: $xy$ 최댓값 = 8

**526**
- object_type: 삼차방정식 ($ax^3 - 2bx^2 + 4(a+b)x - 16a = 0$, 세 정수근)
- mechanism_primary: M-IND-IntFactor + M-CBQ-RemFactor ($x=2$ 근 확인)
- mechanism_secondary: [M-CBQ-RootCoeff]
- key_technique: $(x-2)\{ax^2 + 2(a-b)x + 8a\} = 0$ → 이차식이 2 아닌 서로 다른 두 정수근 → 두 근 곱 = 8/a·두 근 합 = $-2(a-b)/a$ · $a, b$ 순서쌍 열거
- traps: $a$ 배수 조건 + 서로 다른 두 정수근 · 부호 4 case
- difficulty_est: ★ 5
- notes: 순서쌍 (a,b) 42개

---

## STEP 3 (12문, 527–538) — 최고난도 유형

**527** (빈출)
- object_type: 사차방정식 ($x^4 - kx^3 - (k+1)x^2 + k^2 x + k^2 = 0$, 서로 다른 네 실근)
- mechanism_primary: M-CBQ-RemFactor (조립제법 반복 $x=-1, x=k$ 대입)
- mechanism_secondary: [M-CBQ-RealImagCase (네 실근 조건)]
- key_technique: $(x+1)(x-k)(x^2 - x - k) = 0$ → 이차식 판별식 > 0 + $x=-1, k$가 이차식 근 아님
- traps: 4근 모두 서로 다름 = 3 조건 결합 ($k \ne -1, k \ne 2, D > 0$)
- difficulty_est: ★ 5
- notes: 10 이하 정수 $k$ 개수 = 9

**528** (선행 493)
- object_type: 삼차방정식 ($x^3 - 2x^2 + x = k^3 - 2k^2 + k$, 중근 조건)
- mechanism_primary: M-CBQ-RemFactor ($x=k$ 대입 확인 → 조립제법)
- mechanism_secondary: [M-CBQ-RealImagCase (중근 case 분기)]
- key_technique: $(x-k)\{x^2 + (k-2)x + k^2 - 2k + 1\} = 0$ → 이차식이 $x=k$ 근 case (i) + 이차식 자체 중근 case (ii)
- traps: 두 case 모두 열거 및 합산
- difficulty_est: ★ 5
- notes: $k$ 값 합 = 8/3

**529** (선행 502)
- object_type: 삼차방정식 ($x^3 + ax^2 + bx - 2 = 0$, 한 실근 $\alpha$·두 허근 $\alpha, \alpha^2/2$)
- mechanism_primary: M-CBQ-ComplexRoot (켤레복소수 성질)
- mechanism_secondary: [M-CBQ-RootCoeff]
- key_technique: 실계수 → 두 허근이 켤레 → $\alpha, \alpha^2/2$가 켤레 → $\alpha^2/2 = \bar\alpha$ 관계 → $\alpha + \bar\alpha, \alpha\bar\alpha$ 실수 조건
- traps: 두 허근 중 하나가 다른 것의 함수 = 켤레 관계식 유도
- difficulty_est: ★ 5
- notes: $2a + b = 6$

**530** (선행 512)
- object_type: 방정식 $x^3 = 1$의 허근 $\omega$·$f(n) = 1/\omega + 1/\omega^2 + \cdots + 1/\omega^n$
- mechanism_primary: M-CBQ-OmegaProp
- mechanism_secondary: [M-CBQ-RootCoeff (등비 합 개념)]
- key_technique: $\omega^3=1$·$\omega^2+\omega+1=0$ → $f(n)$ 3주기 값 (n=3k, 3k-1, 3k-2)
- traps: 세 case 값 $\{0, -1, 1/\omega\}$ 계산 후 보기 판정
- difficulty_est: ★ 5
- notes: 옳은 것 ㄱ만

**531**
- object_type: 연립방정식 $\{x+y=2, [x]^2 + [x] - 6 = 0\}$ (가우스 기호)
- mechanism_primary: M-CBQ-Subst ($[x]$ 이차식 → $[x]$ 값 도출) + M-APP-Realdomain
- mechanism_secondary: [M-CBQ-RemFactor]
- key_technique: $[x]^2 + [x] - 6 = ([x]+3)([x]-2) = 0$ → $[x] = -3$ or $2$ → $-3 \le x < -2$ 또는 $2 \le x < 3$ → 이차함수 $f(x) = x^2 + 2x + 2y^2$ 대입 → 구간별 최대·최소
- traps: 가우스 기호로 인한 $x$ 구간 분리 + 이차함수 극값 위치
- difficulty_est: ★ 5
- notes: $M + m = 61$

**532**
- object_type: 연립방정식 두 이차식 (인수분해 두 조합)
- mechanism_primary: M-SIM-QuadFactor (내림차순 정리 → 두 인수)
- key_technique: 첫식 $2x^2 + 3(y-1)x + y^2 - y - 2 = 0 = (x+y-2)(2x+y+1)$ · 둘째식 유사 → 조합 4 case
- traps: 각 case 연립 후 해 존재 판정
- difficulty_est: ★ 5
- notes: 해 3쌍 명시 (풀이 참조)

**533**
- object_type: 이차함수 $y=f(x)$ 접선 $y=2x+1$·삼차방정식 $\{f(x)-2x\}^3 - 2\{f(x)-2x\}^2 - 5\{f(x)-2x\} + 6 = 0$
- mechanism_primary: M-CBQ-Subst ($t = f(x)-2x$)
- mechanism_secondary: [M-CBQ-RemFactor + 이차함수 접선]
- key_technique: 삼차식 $t^3 - 2t^2 - 5t + 6 = 0 = (t-1)(t+2)(t-3)$ → 세 이차방정식 $f(x)=2x+1, 2x-2, 2x+3$ · 접선 조건으로 각 방정식 실근 개수 판정
- traps: 위 볼록·아래 볼록 두 case 모두 실근 총합 3
- difficulty_est: ★ 5
- notes: 서로 다른 실근 개수 3

**534** (교육청 변형, 선행 495, 496)
- object_type: 사차방정식 ($x^4 + 2(1-a)x^2 + a^2 - 2a - 8 = 0$)
- mechanism_primary: M-CBQ-Factor (곱셈공식 $x^4+2(1-a)x^2+(a-4)(a+2) = (x^2-a+4)(x^2-a-2)$)
- mechanism_secondary: [M-CBQ-RealImagCase (실근·허근 case 분기)]
- key_technique: 두 이차식 $x^2 = a-4, x^2 = a+2$ 각각 실근/허근 case → 보기 3개 판정
- traps: ㄷ (정수 근) = $a-4$ 또는 $a+2$가 정수 제곱
- difficulty_est: ★ 5
- notes: 보기 ㄱ ㄴ ㄷ 모두 참

**535** (교육청 기출)
- object_type: 등변사다리꼴 ABCD + 두 원 (AB·CD 지름) 접함, $S^2 + 8l = 6720$
- mechanism_primary: M-APP-Geom (원·사다리꼴 기하)
- mechanism_secondary: [M-CBQ-RemFactor + M-CBQ-RealImagCase]
- key_technique: 두 원 중심·접점·수선 발 좌표 → $BC \cdot AD$ 관계 → $S = (1/2)(BC+AD) \cdot DH$ 넓이·둘레 표현 → 반지름 $r$ 삼차식 → $r=5$ 유일
- traps: 두 원 반지름 = $r$ 접함 조건 + 사다리꼴 넓이·둘레 대수화
- difficulty_est: ★ 5
- notes: $\overline{BD}^2 = 164$

**536**
- object_type: 방정식 $(x-p)(x-q)(x-r) = 14$ (서로 다른 세 정수 $p<q<r$, 근 $\alpha$ 정수)
- mechanism_primary: M-IND-IntFactor ($14 = (\alpha-p)(\alpha-q)(\alpha-r)$)
- mechanism_secondary: [M-CBQ-RootCoeff]
- key_technique: $\alpha-p > \alpha-q > \alpha-r$ 정수 세 개 곱 $= 14$ → 5 case (부호·크기순 열거) → $\alpha$ 각 표현 대비
- traps: 세 인수 크기 순서 강제
- difficulty_est: ★ 5
- notes: 될 수 없는 표현 ④

**537**
- object_type: 방정식 $x^7 = 1$의 근 $x$에 대해 $\frac{x}{1+x^2} + \frac{x^2}{1+x^4} + \frac{x^3}{1+x^6}$
- mechanism_primary: M-CBQ-OmegaProp (7차 단위근 성질 $x^7=1$)
- mechanism_secondary: [M-CBQ-Factor, M-CBQ-IdentityMatch]
- key_technique: $x=1$ case + $x^6+x^5+\cdots+x+1=0$ case → 각각 값 통분 계산 (분모 대수 조작 $x^7=1$ 적용)
- traps: 두 case 값 합산 (case (i) = 3/2, case (ii) = $-2$)
- difficulty_est: ★ 5
- notes: 값 합 $= -1/2$

**538**
- object_type: $x^3 - x^2 + 3x - 1 = 0$의 세 근 $\alpha, \beta, \gamma$·삼차식 $f(x) = (x+2)^3 + p(x+2)^2 + q(x+2) + r$ 조건 3식 $f((2\beta+2\gamma)/\alpha) = f((2\alpha+2\gamma)/\beta) = f((2\alpha+2\beta)/\gamma) = 0$
- mechanism_primary: M-CBQ-RootCoeff (근 변환 삼차식)
- mechanism_secondary: [M-CBQ-IdentityMatch]
- key_technique: $\alpha+\beta+\gamma=1$ 이용 → $(2\beta+2\gamma)/\alpha - 2 = 2/\alpha - 2$·유사 세 근 = $2/\alpha, 2/\beta, 2/\gamma$ → 근 변환 삼차식 계수 결정
- traps: 세 근 대칭성으로 인해 실질 근은 $2/\alpha, 2/\beta, 2/\gamma$
- difficulty_est: ★ 5
- notes: $pq/r = 3$

---

## 요약 통계

### 유형별 문항 수 (STEP 2·3 합산)

| 유형 | STEP 2 | STEP 3 | 총계 |
|---|---|---|---|
| 01 삼차·사차방정식의 풀이 | 492–507 (16문) | 527–529, 534 (4문) | 20문 |
| 02 $x^3 = \pm 1$ 허근 성질 | 509–512 (4문) | 530, 537 (2문) | 6문 |
| 03 미지수 2개 연립이차 | 513–518 (6문) | 531, 532 (2문) | 8문 |
| 04 방정식의 활용 | 519–522 (4문) | 533, 535, 538 (3문) | 7문 |
| 05 부정방정식 | 523–526 (4문) | 536 (1문) | 5문 |
| **합계** | **35문** | **12문** | **47문** |

### mechanism_primary 분포 (Top)

| mechanism | 문항 수 | 대표 문항 |
|---|---|---|
| M-CBQ-RemFactor (조립제법 인수분해) | 8 | 492, 493, 508, 510, 522, 524, 527, 528 |
| M-CBQ-RootCoeff (근과 계수) | 6 | 497, 504, 506, 530, 536, 538 |
| M-CBQ-BiQuad ($X = x^2$) | 3 | 495, 496, 500 |
| M-CBQ-Subst (공통부분 치환) | 4 | 494, 499, 531, 533 |
| M-CBQ-ComplexRoot (켤레) | 4 | 502, 503, 505, 529 |
| M-CBQ-OmegaProp ($\omega$) | 5 | 509, 510, 511, 530, 537 |
| M-CBQ-IdentityMatch (계수 비교) | 2 | 498, 501 |
| M-SIM-QuadFactor | 3 | 513, 516, 532 |
| M-SIM-SumProd ($x+y, xy$) | 3 | 514, 517, 518 |
| M-SIM-LinSub | 2 | 515, 519, 520, 521 |
| M-IND-IntFactor (정수 곱 case) | 5 | 523, 524, 525, 526, 536 |
| M-APP-Geom | 3 | 522, 535 |
| M-APP-RealLife | 3 | 520, 521 |
| M-APP-DigitPlace | 1 | 519 |

(mechanism_secondary는 중복 계상되지 않음)

### 특기 사항 (교육청 기출·빈출·서술형)

- **교육청 기출**: 497, 535
- **교육청 변형**: 534
- **빈출 마크**: 470(STEP1), 473, 480, 483, 490, 493, 500, 502, 505, 509, 510, 511, 512, 517, 527
- **서술형**: 493

### 선행 문항 참조 (STEP 3 → STEP 1·2)

- 528 → 493 (중근 조건 확장)
- 529 → 502 (켤레복소수 확장)
- 530 → 512 ($\omega$ 등비 합 확장)
- 534 → 495, 496 (사차 실·허 case 확장)

### 심층 mechanism 결합 패턴

- **삼·사차 + 근과 계수**: 497·501·504·506·529·538
- **$\omega$ + 정수 자유도**: 511 (100 이하 3의 배수 & 6의 배수 제외)
- **연립 + 판별식·중근**: 515·517·518
- **부정 + 인수분해**: 523·524·525·526·536
- **활용 + 도형**: 522·535 (기하-대수 다중 번역)

---

## 참고 · 저작권

- 원문 발문·풀이 전사 없음. 구조·mechanism·조작 handle만 요약.
- 정답 최종값은 학습·검수 참조용으로만 포함 (전체 풀이 대체 아님).
- 상세 풀이는 원 해설지 (정답과 풀이 p.97–108) 참조.

## 활용

- CM1 유형편(공통수학1) 방정식 단원 신규 출제 시 mechanism·유형 셀렉 참조
- `bank/anchors/CM1-EQ.md` 앵커 후보 발굴 (특히 STEP 3 12문)
- `problem-author` agent가 CM1 방정식 정점 문항 설계 시 mechanism 라이브러리로 활용
