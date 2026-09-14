# CM2-ST 표준 유형 카탈로그 (집합과 명제)

> **단일 출처**. 시험범위가 "집합과 명제 (전 소단원)"인 경우 본 카탈로그에서 *서로 다른 T-code* ≥ 7개 사용 의무.
>
> 본 카탈로그는 *2022 개정 공통수학2 §"집합과 명제"* 범위 내 표준 유형을 정의. 소단원 3개(S01 집합의 뜻과 표현 · S02 집합의 연산 · S03 명제) 각각 T-code 세트 구성.
>
> **시스템 참조**: v3.10 시스템 (README.md §4 base ★ 산정 원칙 v4.0 + §5 출제 시 의무 G3' + §6 검수 의무). Xᵤ 친숙도 보정 폐지 (인플레이션 방지).
>
> **표본 근거**: `bank/4점-패턴-카탈로그/13-CM2-진정변별-후보.md` §2 (일품 CM2 ST 04·05·06 70문 라벨링) + `data/cm2-premium-samples.json` (CM2-ST 198문 등재). ST 04 (집합의 뜻) ★ 5 비율 **76%** — CM2 전 단원 중 위장 정교도 다층 최고. ST 05·06은 표준 패턴 위주 40%대.
>
> **저작권**: 표본 발문 원문 인용 금지. 유형 정의만 기술.

---

## 소단원 1: 집합의 뜻과 표현 (S01–S15)

### S01: 집합의 정의 판정 (원소 명확성)
- **id**: `CM2-ST-S01`
- **base ★**: 1
- **meta_type**: ST-set-definition
- **section**: ST-set-def
- **본질 통찰**: "집합"은 원소가 명확히 결정되는 모임 — 주관적 형용사("큰"·"잘하는") 포함은 집합 아님
- **대안 발문**: "다음 중 집합인 것 개수", "집합이 아닌 것", "집합이 되려면 형용사를 어떻게 수정"
- **대표 자산 (v2.0 확대)**:
  - `SRC-GJ-CM2-ST-101` (집합인 것 판별, EQV·★ 2)
  - `SRC-GJ-CM2-ST-105` (공집합 원소 개수 판별, EQV·MI·★ 2)
  - `SRC-GJ-CM2-ST-108` (공집합·원소 기호 판별, EQV·MI·★ 2)
- **금지 변형**: 원소 나열형만으로는 ★ 2 도달 불가

### S02: 원소 판정과 기호 사용 (∈·∉)
- **id**: `CM2-ST-S02`
- **base ★**: 1
- **meta_type**: ST-set-notation
- **section**: ST-set-def
- **본질 통찰**: 원소 $a$가 집합 $A$에 속하면 $a \in A$, 속하지 않으면 $a \notin A$. 원소 vs 부분집합 기호 구별
- **대안 발문**: 옳은 기호 사용 개수, $\{1\} \in A$와 $1 \in A$ 구별
- **대표 자산 (v2.0 확대)**:
  - `DI-F11-021` (벤다이어그램이 나타내는 집합, ★ 1)
  - `SRC-GJ-CM2-ST-109` (원소를 원소로 갖는 집합 표기, EQV·MI·★ 2)
  - `SRC-GJ-CM2-ST-105` (공집합 원소 개수 판별, EQV·MI·★ 2)

### S03: 원소나열법 ↔ 조건제시식 변환
- **id**: `CM2-ST-S03`
- **base ★**: 2
- **meta_type**: ST-set-representation
- **section**: ST-set-def
- **본질 통찰**: $\{x \mid p(x)\}$ 형식을 원소 나열로 (또는 역). $p(x)$ 방정식·부등식 해 판정
- **대안 발문**: "$\{x \mid x^2-5x+6=0, x \text{ 정수}\}$를 원소나열법으로", 조건식 만족 개수
- **대표 자산 (v2.0 확대)**:
  - `DI-F12-049` (집합의 표현 방법, ★ 2)
  - `SRC-GJ-CM2-ST-102` (소수집합 원소나열, EQV·★ 2)
  - `SRC-GJ-CM2-ST-103` (짝수집합 조건제시법, EQV·★ 2)

### S04: 유한·무한·공집합 판별 + 원소 개수 $n(A)$
- **id**: `CM2-ST-S04`
- **base ★**: 2
- **meta_type**: ST-cardinality-basic
- **section**: ST-set-def
- **본질 통찰**: 유한집합의 원소 개수 $n(A)$ 정확 카운트. 공집합 $\emptyset$과 $\{0\}$·$\{\emptyset\}$ 구별
- **대안 발문**: $n(A)+n(B)$ 값, 무한집합 개수 골라내기
- **대표 자산 (v2.0 확대)**:
  - `DI-F10-018` (유한집합의 원소의 개수, ★ 2)
  - `SRC-GJ-CM2-ST-104` (세 집합 원소 개수 합, EQV·★ 2)
  - `SRC-GJ-CM2-ST-105` (공집합·집합 원소 개수 판별, EQV·MI·★ 2)

### S05: 부분집합 판별 (⊂·⊄) + 서로 같은 집합
- **id**: `CM2-ST-S05`
- **base ★**: 2
- **meta_type**: ST-subset-basic
- **section**: ST-set-def
- **본질 통찰**: $A \subset B \iff (\forall x)(x \in A \Rightarrow x \in B)$. $A=B \iff A \subset B$ 및 $B \subset A$
- **대안 발문**: 옳은 포함 관계 개수, 서로 같은 집합 골라내기
- **대표 자산 (v2.0 확대)**:
  - `SRC-GJ-CM2-ST-106` (부분집합 아닌 것, EQV·★ 2)
  - `SRC-GJ-CM2-ST-107` (두 집합 포함 관계, EQV·★ 2)
  - `SRC-GJ-CM2-ST-110` ($A=B$ 조건 $a \times b$, EQV·CON·★ 2)
  - `SRC-GJ-CM2-ST-111` ($A \subset B$ 조건 $a \times b$, EQV·CON·★ 2)
- **금지 변형**: 원소 나열만으로는 ★ 3 도달 불가

### S06: 부분집합의 개수 공식 ($2^n$)
- **id**: `CM2-ST-S06`
- **base ★**: 2
- **meta_type**: ST-subset-count
- **section**: ST-set-def
- **본질 통찰**: $n(A)=n$이면 부분집합 수 $2^n$. 진부분집합 수 $2^n-1$
- **대안 발문**: 부분집합 수·진부분집합 수 차, $2^n \le 100$인 최대 $n$
- **대표 자산 (v2.0 확대)**:
  - `SRC-GJ-CM2-ST-130` (소수집합 부분집합 개수, EQV·★ 2)
  - `SRC-GJ-CM2-ST-131` (진부분집합 개수, EQV·MI·★ 2)
  - `SRC-GJ-CM2-ST-132` (4 원소 부분집합 개수, EQV·★ 2)

### S07: 특정 원소 포함/제외 부분집합의 개수 ★★★
- **id**: `CM2-ST-S07`
- **base ★**: 3
- **meta_type**: ST-subset-count-restrict
- **section**: ST-set-def
- **본질 통찰**: 특정 원소 $k$개를 반드시 포함 (또는 제외)하는 부분집합 수 $2^{n-k}$. "적어도 하나 포함"은 여집합 원리
- **대안 발문**: "1과 2를 포함하고 5는 포함하지 않는", "적어도 한 개의 홀수를 포함하는"
- **대표 자산 (v2.0 확대)**:
  - `DI-F9-079`·`DI-F12-086` (특정 원소 부분집합 개수, ★ 3)
  - `SRC-GJ-CM2-ST-133` (서로소 부분집합 개수, EQV·PD·★ 2)
  - `SRC-GJ-CM2-ST-134` (포함·배제 부분집합 개수, EQV·CON·★ 2)
  - `SRC-GJ-CM2-ST-135` (홀수·짝수 지정 부분집합 개수, EQV·CON·PD·★ 3)
  - `SRC-GJ-CM2-ST-137` (소수 하나 포함 부분집합, EQV·BW·★ 2)

### S08: $A \subset X \subset B$형 부분집합 개수
- **id**: `CM2-ST-S08`
- **base ★**: 3
- **meta_type**: ST-subset-count-restrict
- **section**: ST-set-def
- **본질 통찰**: $A \subset X \subset B$ 조건에서 $X$의 개수 = $B \setminus A$ 부분집합 수 = $2^{n(B)-n(A)}$
- **대안 발문**: $\{1,2\} \subset X \subset \{1,2,...,7\}$인 $X$ 개수, $A \subsetneq X$ 진부분 제약
- **대표 자산 (v2.0 확대)**:
  - `SRC-GJ-CM2-ST-136` ($(B-A) \subset X \subset B$의 $X$ 개수, EQV·CON·★ 2)
  - `SRC-GJ-CM2-ST-138` ($A \subset B \subset U$ 순서쌍 개수, EQV·PD·★ 2)
  - `SRC-RPM-ST-007` ($A=\{x^2-7x+12=0\}$, $B=\{12/n\}$, $A \subset X \subset B$ 개수, XU·EQV·CON·★ 5)

### S09: 부분집합 원소의 합·곱
- **id**: `CM2-ST-S09`
- **base ★**: 4
- **meta_type**: ST-subset-sum
- **section**: ST-set-def
- **본질 통찰**: 원소 $a_i$가 부분집합에 포함될 경우의 수 = $2^{n-1}$ → 합 = $2^{n-1}(a_1+...+a_n)$. *포함·제외 분포 대칭*
- **대안 발문**: 모든 부분집합의 원소 합, 홀수 원소 합, 원소 곱의 합
- **대표 자산 (v2.0 확대)**:
  - `SRC-IP-2-ST-00-14` (일품 ST 04 #14, $\{2,3,5,7\}$ 부분집합 최소원소 합, PD·CON·MI·★ 5)
  - `SRC-AB-ST04-B21` (절대등급 ST04 B21, $A=\{1,\dots,5\}$ 부분집합 max 원소 합, PD·SYM·CON·★ 5)
  - `SRC-AB-ST04-B30` (절대등급 ST04 B30, $A$와 서로소인 $X$ 원소 합 총합, PD·SYM·CON·★ 5)
  - `SRC-GJ-CM2-ST-002` (고쟁이 STEP2·3, 부분집합 원소 합 $S(X)$·세 진술, MI·CON·EQV·★ 5)
  - `SRC-GJ-CM2-ST-006` (고쟁이, 부분집합 최댓값 합, PD·SYM·MI·★ 5)

### S10: 자기참조 조건 + 부분집합 필터 ★★★★
- **id**: `CM2-ST-S10`
- **base ★**: 5
- **meta_type**: ST-self-reference
- **section**: ST-set-def
- **본질 통찰**: "$a \in A \Rightarrow f(a) \in A$" 형태의 *닫힘* (closure) 조건 → $A$가 가능한 최소·최대 원소 결정. 대응 주기·궤도 추적
- **대안 발문**: "$5 \in A$이고 $a \in A \Rightarrow \frac{1}{1-a} \in A$", "$a \in A \Rightarrow a^2-2 \in A$"인 $A$의 최소 원소 개수
- **대표 자산 (v2.0 확대, I-PD·P5 자기참조 정점)**:
  - `SRC-IP-2-ST-00-05` (일품 ST 04 #05, $5 \in A$ + $\frac{1}{1-a} \in A$ 닫힘, PD·CON·MI·★ 5)
  - `SRC-RPM-ST-009` (RPM 실력UP, $x \in A \Rightarrow 64/x \in A$, $M-m$, SC·PD·CON·★ 5 최상위)
  - `SRC-OL-0169` (EBS 올림포스, 부분집합 6개·연산 폐쇄 조건 개수, SC·MI·★ 5 최상위)
  - `SRC-OL-0163` (EBS 올림포스, $(x^2+k)/4 \in A$ 조건 $n(A)=1$ 인 $k$, SC·EQV·★ 5 최상위)
  - `SRC-GJ-CM2-ST-008` (고쟁이, $X$ 두 조건 폐쇄·$X$ 개수, PD·CON·EQV·★ 5)
- **출제 빈도**: 시리즈 5회마다 ≥ 1회 (변별 정점)

### S11: 조건 만족 집합의 개수 (수치 조건 카운트) ★★★
- **id**: `CM2-ST-S11`
- **base ★**: 4
- **meta_type**: ST-set-condition-count
- **section**: ST-set-def
- **본질 통찰**: "원소 합 = $k$", "최대 원소 = $k$", "원소 곱 홀수 + 합 짝수" 등 *수치 조건*을 만족하는 부분집합 카운트 → 경우 분류
- **대안 발문**: "합이 짝수인 부분집합", "가장 큰 원소가 5인", "곱이 홀수인"
- **대표 자산 (v2.0 확대)**:
  - `SRC-IP-2-ST-00-13` (일품 ST 04 #13, 곱 홀수 + 합 짝수 → $A$ 개수, EQV·PD·CON·★ 5)
  - `SRC-IP-2-ST-00-15` (일품 ST 04 #15, $S(X)$ = 최대+최소 = 9인 $X$ 개수, EQV·PD·MI·★ 5)
  - `SRC-AB-ST04-B17` (절대등급, 원소 곱 짝수 집합 개수 (여사건 배제), BW·EQV·CON·★ 4)
  - `SRC-AB-ST04-B19` (절대등급, 원소 2개 이상 $A$: max-min 차 ≥ 4인 $A$ 개수, PD·CON·★ 5)
  - `SRC-OL-0165` (EBS 올림포스, $n(X) \ge 2$·원소 합·곱 홀수 $X$ 개수, CON·PD·MI·★ 4)

### S12: 서로 같은 집합 결정 (원소 대응)
- **id**: `CM2-ST-S12`
- **base ★**: 3
- **meta_type**: ST-set-equality
- **section**: ST-set-def
- **본질 통찰**: $A = B$ 조건에서 원소 대응 → 미지수 결정. 원소 중복 가능성 (예: $a=a^2$) 케이스 분기
- **대안 발문**: "$A=\{1,a,a^2\}=B=\{1,b,4\}$인 $a+b$", 실근 조건
- **대표 자산 (v2.0 확대)**:
  - `SRC-IP-2-ST-00-10` (일품 ST 04 #10, $A \subset B$, $B \subset A$ → 정수 $a, b$, EQV·CON·MI·★ 4)
  - `SRC-IP-2-ST-00-08` (일품 ST 04 #08, $A \subset B$ + $1 \cdot \sqrt 3 i \in A$ 원소 대응, EQV·CON·MI·★ 5)
  - `SRC-GJ-CM2-ST-110` (고쟁이, $A=B$ 조건 $a \times b$, EQV·CON·★ 2)
  - `SRC-RPM-ST-001` (RPM, $n(A)=n(B)$ 정수 $a$ 개수 이차방정식 해, CON·EQV·★ 4)

### S13: 조건 만족 부분집합 존재성 (자연수 자유도) ★★★★
- **id**: `CM2-ST-S13`
- **base ★**: 4
- **meta_type**: ST-subset-existence
- **section**: ST-set-def
- **본질 통찰**: "$B \subset A$이고 $B$가 특정 조건 만족" → $B$ 후보를 원소 유형(짝수·소수·배수)별로 분할 카운트
- **대안 발문**: "$\{1,...,50\}$의 부분집합 중 두 원소 합이 7의 배수 아닌 것의 원소 수 최댓값"
- **대표 자산 (v2.0 확대)**:
  - `SRC-IP-2-ST-00-09` (일품 ST 04 #09, $\{1,\dots,50\}$ 두 원소 합 7의 배수 아님 → $|X|$ 최댓, EQV·CON·MI·PD·★ 5)
  - `SRC-AB-ST04-C03` (절대등급 ST04 C03, 원소끼리 서로소인 $X$ (9 이하 자연수) 개수, PD·CON·SC·★ 5 최상위)
  - `SRC-AB-ST04-B16` (절대등급 ST04 B16, (가)~(다) 조건 만족 $X$ 개수, CON·EQV·SC·★ 5)
  - `SRC-BL-ST-10` (블랙라벨, 자연수 $n$·$(3n+2)$개 자연수 조건, PD·CON·EQV·MI·★ 5)
  - `SRC-OL-0186` (EBS 올림포스, $b \in B$·$a+b$ 3의 배수 아님·합 최댓값, CON·PD·★ 5 최상위)

### S14: 정의된 새 연산 (집합·원소 조합)
- **id**: `CM2-ST-S14`
- **base ★**: 3
- **meta_type**: ST-new-operation
- **section**: ST-set-def
- **본질 통찰**: $A \star B = \{xy \mid x \in A, y \in B\}$ 같은 새 연산 정의 → 정의 그대로 열거
- **대안 발문**: 원소 개수, 특정 원소 소속 여부
- **대표 자산 (v2.0 확대, I-XU 단원결합 정점)**:
  - `SRC-IP-2-ST-00-01` (일품 ST 04 #01, $\sqrt 2 x^2 - 4x + \sqrt 2 = 0$ 두 근 + 1 원소, 연산 $*$, EQV·MI·CON·★ 4)
  - `SRC-IP-2-ST-01-01` (일품 ST 05 #01, $A*B=\{xy \mid \cdot\}$·$(X*Y) \cup (Z*Y)$ 부분집합, EQV·CON·MI·★ 4)
  - `SRC-GJ-CM2-ST-018` (고쟁이, $A*B$ 연산·세 진술, PD·EQV·SYM·★ 5)
  - `SRC-GJ-CM2-ST-020` (고쟁이, $X \odot Y$ 연산·배수 원소수, EQV·SYM·PD·★ 4)
  - `SRC-OL-0190` (EBS 올림포스, 새 연산 $X \diamond Y$·$A \diamond C = B$·$C$ 원소합, RT·EQV·★ 4)

### S15: 집합의 자기 대응 (역상 카운트) ★★★★
- **id**: `CM2-ST-S15`
- **base ★**: 5
- **meta_type**: ST-set-self-mapping
- **section**: ST-set-def
- **본질 통찰**: "$B \subset A$이면서 $f(B) = B$ 자기대응 + 추가 조건" → 대응 궤도 분석 + 자유도 카운트
- **대안 발문**: "$A$의 부분집합 $B$ 중 $B$의 원소를 각각 제곱한 집합이 $B$인" 것의 개수
- **대표 자산 (v2.0 확대, P5 자기참조 + I-SYM 대칭)**:
  - `SRC-IP-2-ST-00-11` (일품 ST 04 #11, $B$ 자기 대응 + 짝수 카운트 1 → $A$ 개수, EQV·MI·CON·BW·SYM·★ 5)
  - `SRC-IP-2-ST-사04` (일품 ST 04 사04, $p(A_1) \cdots p(A_n)=3^k$ → $n+k$, PD·CON·MI·EQV·BW·★ 5)
  - `SRC-SN-CM2-ST-011` (쎈, 집합 $X \to f(X) \subseteq X$ 조건, BW·CON·★ 5 최상위)
  - `SRC-OL-0184` (EBS 올림포스, $B=\{ab \mid a,b \in A\}$·조건 만족 $A$ 원소합, MI·SC·CON·★ 5 최상위)
  - `SRC-OL-0199` (EBS 올림포스 상위 1%, $B=\{a+k \mid a \in A\}$·$A,B$ 원소곱, SC·CON·PD·★ 5 최상위)

---

## 소단원 2: 집합의 연산 (O01–O14)

### O01: 합집합·교집합 직접 계산
- **id**: `CM2-ST-O01`
- **base ★**: 1
- **meta_type**: ST-set-op-basic
- **section**: ST-set-op
- **본질 통찰**: $A \cup B$ (합집합) / $A \cap B$ (교집합) 정의 그대로 원소 나열
- **대안 발문**: 원소 개수, 특정 원소 소속
- **대표 자산 (v2.0 확대)**:
  - `SRC-GJ-CM2-ST-114` (고쟁이, 집합의 연산 정의 옳은 것, EQV·★ 2)
  - `SRC-GJ-CM2-ST-115` (고쟁이, 전체집합 두 부분집합 연산, EQV·★ 2)
  - `SRC-GJ-CM2-ST-116` (고쟁이, 자연수 두 집합 연산, EQV·CON·★ 2)

### O02: 여집합·차집합 계산 + 벤 다이어그램 판독
- **id**: `CM2-ST-O02`
- **base ★**: 2
- **meta_type**: ST-set-op-basic
- **section**: ST-set-op
- **본질 통찰**: $A^c = U \setminus A$, $A - B = A \cap B^c$. 벤 다이어그램의 영역과 연산식 대응
- **대안 발문**: 벤 다이어그램의 색칠 영역이 나타내는 집합, $(A^c \cup B)^c$ 원소 나열
- **대표 자산 (v2.0 확대)**:
  - `DI-2026M-123`·`DI-F7-090` (여집합과 차집합, ★ 1·3)
  - `SRC-GJ-CM2-ST-113` (고쟁이, 여·차집합 항등식 아닌 것, EQV·★ 2)
  - `SRC-GJ-CM2-ST-121` (고쟁이, 벤 다이어그램 색칠 표현, EQV·RT·★ 2)
  - `SRC-GJ-CM2-ST-122` (고쟁이, $A^c \cap B$·$A^c \cap B^c$ 조건 $A$, EQV·CON·BW·★ 3)

### O03: 조건 만족 집합 역추적 (연산 결과로부터 미지수)
- **id**: `CM2-ST-O03`
- **base ★**: 3
- **meta_type**: ST-set-op-inverse
- **section**: ST-set-op
- **본질 통찰**: $A \cap B$·$A \cup B$·$A - B$가 주어진 상태에서 $A$·$B$ 원소 재구성 또는 미지수 결정
- **대안 발문**: "$A \cap B = \{2,3\}$, $A \cup B = \{1,2,3,4,5\}$인 $A$·$B$ 후보 수", $x^2-2ax+b$ 근 조건
- **대표 자산 (v2.0 확대)**:
  - `SRC-IP-2-ST-01-02` (일품 ST 05 #02, $A \cup B=U$·$A \cap B=\{2,3,5\}$ → $s(A)s(B)$ 최댓, EQV·CON·MI·BW·PD·★ 4)
  - `SRC-IP-2-ST-01-09` (일품 ST 05 #09, $A=\{-1,1\}$·$B=\{x^2-2ax+b=0\}$·$A \cap B=B$, EQV·MI·CON·BW·PD·★ 4)
  - `SRC-OL-0170` (EBS 올림포스, $B-A=\{6,7\}$·조건 상수 $a$·원소합, CON·MI·★ 4)
  - `SRC-BL-ST-06` (블랙라벨, 벤다이어그램 $A,B,C$ 조건 값, CON·MI·EQV·★ 4)

### O04: 집합의 연산 법칙 (교환·결합·분배)
- **id**: `CM2-ST-O04`
- **base ★**: 2
- **meta_type**: ST-set-op-laws
- **section**: ST-set-op
- **본질 통찰**: $A \cup (B \cap C) = (A \cup B) \cap (A \cup C)$ 등 분배 법칙. 옳은 등식 골라내기
- **대안 발문**: 항상 성립하는 등식 개수, 반례가 되는 원소
- **대표 자산 (v2.0 확대)**:
  - `DI-F8-053` (집합의 연산 법칙, ★ 1)
  - `SRC-IP-2-ST-01-07` (일품 ST 05 #07, $(A \cap B) \cup B=A$ 항상 옳은, EQV·MI·★ 4)
  - `SRC-IP-2-ST-01-08` (일품 ST 05 #08, $(A \cup B)-(A \cap B)=\emptyset$ 항상 옳은, EQV·MI·★ 4)
  - `SRC-GJ-CM2-ST-119` (고쟁이, 차집합 분배 증명 빈칸, EQV·PD·★ 2)
  - `SRC-GJ-CM2-ST-120` (고쟁이, $A \cap B$·$A \cap C$ 조건 $A \cap (B \cup C)$, EQV·CON·★ 2)

### O05: 드모르간의 법칙 활용
- **id**: `CM2-ST-O05`
- **base ★**: 3
- **meta_type**: ST-de-morgan
- **section**: ST-set-op
- **본질 통찰**: $(A \cup B)^c = A^c \cap B^c$, $(A \cap B)^c = A^c \cup B^c$. 복합식 간단히 정리
- **대안 발문**: $(A^c \cup B^c)^c \cap A$와 같은 것, 간단히 정리한 결과
- **대표 자산 (v2.0 확대)**:
  - `SRC-IP-2-ST-01-11` (일품 ST 05 #11, $A^c-B^c=\emptyset$ → $a$ 범위, EQV·MI·CON·BW·★ 4)
  - `SRC-IP-2-ST-01-15` (일품 ST 05 #15, $(X \cup Y) \subset Z$·$(Z-X)^c \cap Y$와 같은 것 (드모르간), EQV·MI·CON·★ 4)
  - `SRC-GJ-CM2-ST-127` (고쟁이, $n(A)$·$n(B)$·$n(A^c \cup B^c)$, EQV·CON·★ 2)

### O06: 대칭차 $A \triangle B$ = $(A-B) \cup (B-A)$
- **id**: `CM2-ST-O06`
- **base ★**: 4
- **meta_type**: ST-symmetric-difference
- **section**: ST-set-op
- **본질 통찰**: 대칭차의 성질 (교환·결합) + $A \triangle B = (A \cup B) - (A \cap B)$ 등가 변환
- **대안 발문**: $A \triangle B$ 원소 개수, $A \triangle B = \emptyset \iff A = B$
- **대표 자산 (v2.0 확대)**:
  - `SRC-IP-2-ST-01-19` (일품 ST 05 #19, $A \triangle B$ 대칭차 + 3조건 → $n((A-C) \cup (C-A))$, EQV·CON·SYM·PD·★ 5)
  - `SRC-IP-2-ST-01-12` (일품 ST 05 #12, $(A-B) \cup (B-A)=\emptyset$ → $a^2+b^2$, EQV·CON·MI·★ 4)
  - `SRC-RPM-ST-018` (RPM, 은행 $A \cdot B$ 대칭차 여학생 수 실생활, XU·CON·★ 5)
  - `SRC-RPM-ST-019` (RPM, 대칭차 $X \ominus Y$ 정의 벤다이어그램 판정, EQV·RT·★ 4)

### O07: 포함 관계 조건 활용 ($A \subset B$)
- **id**: `CM2-ST-O07`
- **base ★**: 3
- **meta_type**: ST-set-op-inclusion
- **section**: ST-set-op
- **본질 통찰**: $A \subset B \iff A \cap B = A \iff A \cup B = B$ 세 등가 명제. 미지수 결정에 활용
- **대안 발문**: $A \subset B$이면 성립하는 등식, $B \cup A^c = U$ 필요조건
- **대표 자산 (v2.0 확대)**:
  - `SRC-IP-2-ST-01-04` (일품 ST 05 #04, $X \subset A$, $Y \subset B$, $X-Y=X$, $(A \cap B) \subset (X \cup Y)$ 순서쌍, EQV·CON·MI·BW·★ 4)
  - `SRC-IP-2-ST-01-10` (일품 ST 05 #10, $A$ 소수·$A-B=A$ → $B$ 개수, EQV·MI·CON·PD·★ 4)
  - `SRC-GJ-CM2-ST-117` (고쟁이, $A \subset B$ 항상 옳은 것, EQV·★ 2)
  - `SRC-GJ-CM2-ST-118` (고쟁이, 서로소 옳은 것 개수, EQV·MI·★ 2)

### O08: 배수·약수 집합의 연산 ($A_n = \{n\text{의 배수}\}$) ★★★★
- **id**: `CM2-ST-O08`
- **base ★**: 4
- **meta_type**: ST-multiple-set
- **section**: ST-set-op
- **본질 통찰**: $A_m \cap A_n = A_{\text{lcm}(m,n)}$, $A_m \cup A_n \subset A_{\gcd(m,n)}$. 배수집합 연산은 lcm·gcd로 환원
- **대안 발문**: "$(A_2 \cup A_6) \cap (A_4 \cup A_9) = A_k$인 최소 $k$", 소수·서로소 조건
- **대표 자산 (v2.0 확대, P4 다층 나눗셈·인수 결합)**:
  - `SRC-IP-2-ST-01-14` (일품 ST 05 #14, $A_n=\{n\text{과 서로소 아닌}\}$, $(A_2 \cup A_6) \cap (A_4 \cup A_9)=A_k$ 최솟, EQV·PD·CON·MI·★ 5)
  - `SRC-IP-2-ST-01-05` (일품 ST 05 #05, $A_k=\{k\text{ 배수}\}$ 보기, EQV·MI·CON·★ 4)
  - `SRC-RPM-ST-015` (RPM, $A_k=\{k \text{배수}\}$·$A_m \subset (A_4 \cap A_6)$·$(A_{12} \cup A_{18}) \subset A_n$, EQV·PD·★ 5)
  - `SRC-GJ-CM2-ST-123` (고쟁이, $A_n$ 배수집합 합·교집합, EQV·PD·★ 2)
  - `SRC-OL-0175` (EBS 올림포스, $A_n$ 배수·$(A_{12} \cup A_{18}) \subset A_k$ 최댓값, XU·EQV·★ 4)
- **출제 빈도**: 시리즈 3~5회마다 1회

### O09: 유한집합의 원소 개수 원리 ($n(A \cup B) = n(A)+n(B)-n(A \cap B)$)
- **id**: `CM2-ST-O09`
- **base ★**: 2
- **meta_type**: ST-inclusion-exclusion
- **section**: ST-set-op
- **본질 통찰**: 포함배제 원리. 벤 다이어그램 영역 카운트
- **대안 발문**: "80명 중 A책만, B책만, 둘 다 읽은 사람 수", 최댓값·최솟값
- **대표 자산 (v2.0 확대)**:
  - `DI-F10-018`·`DI-F6-073` (유한집합 원소 개수, ★ 2·5)
  - `SRC-IP-2-ST-01-20` (일품 ST 05 #20, 80명 + $A \cdot B \cdot C$ 적어도 1권 → 한 권만 학생 수, EQV·CON·MI·★ 4)
  - `SRC-GJ-CM2-ST-125` (고쟁이, $n(A \cup B)$ 공식 $n(A-B)$, EQV·★ 2)
  - `SRC-GJ-CM2-ST-128` (고쟁이, 유클리드·페르마 아는 학생, EQV·RT·★ 2)
  - `SRC-GJ-CM2-ST-129` (고쟁이, 3·5 배수 $n(A \cup B)$, EQV·PD·★ 2)

### O10: 세 집합 포함배제 (3개 집합 원소 개수)
- **id**: `CM2-ST-O10`
- **base ★**: 3
- **meta_type**: ST-inclusion-exclusion
- **section**: ST-set-op
- **본질 통찰**: $n(A \cup B \cup C) = n(A)+n(B)+n(C)-n(A \cap B)-n(A \cap C)-n(B \cap C)+n(A \cap B \cap C)$
- **대안 발문**: "적어도 한 종목", "정확히 두 종목만"
- **대표 자산 (v2.0 확대)**:
  - `SRC-IP-2-ST-01-사05` (일품 ST 05 사05, 300명 + 3조건 (한 종목 = 다른 두 종목) → 두 종목 이상 학생, EQV·MI·CON·BW·PD·★ 5)
  - `SRC-RPM-ST-022` (RPM 실력UP, 국어·과학·수학 구독 학생수 실생활, XU·CON·★ 5)
  - `SRC-BL-ST-05` (블랙라벨, 학생 취미 조사 조건 최댓값·최솟값, CON·MI·EQV·★ 5)
  - `SRC-OL-0198` (EBS 올림포스 신유형, 3강좌 학생·9명 공통·최솟값, CON·PD·★ 4)
  - `SRC-GJ-CM2-ST-004` (고쟁이, 3과목 신청 벤다이어그램·두 과목만, XU·CON·MI·★ 4)

### O11: 원소 개수 최댓값·최솟값 ★★★
- **id**: `CM2-ST-O11`
- **base ★**: 4
- **meta_type**: ST-cardinality-extremum
- **section**: ST-set-op
- **본질 통찰**: $n(A) = a$, $n(B) = b$일 때 $n(A \cap B)$의 최댓 = $\min(a,b)$, 최솟 = $\max(0, a+b-n(U))$
- **대안 발문**: "$n(A \cup B)$ 최댓값+최솟값 합", "세 집합 중 정확히 두 종목 학생 수 최솟값"
- **대표 자산 (v2.0 확대)**:
  - `DI-F11-097`·`DI-F12-076` (유한집합 활용, ★ 4)
  - `SRC-IP-2-ST-01-17` (일품 ST 05 #17, $n(A)=15, n(B)=12$·$3 \le n(A \cap B) \le 6$ → $n(A \cup B)$ 최댓+최솟 합, EQV·CON·MI·★ 4)
  - `SRC-IP-2-ST-01-18` (일품 ST 05 #18, 세 집합 카운트 + $n(B-(A \cup C))$ 최솟, EQV·CON·MI·BW·★ 4)
  - `SRC-IP-2-ST-01-16` (일품 ST 05 #16, 세 부분집합 3조건 → $n(A \cap B)$ 최대 시 $C$ 개수, EQV·CON·MI·BW·PD·★ 5)
  - `SRC-IGS-CM2-ST-015` (일등급 수학, 100명 카페 5조건 → 학생 최댓값·최솟값 합, CON·SC·★ 5 최상위)
  - `SRC-BL-ST-12` (블랙라벨 2020 교육청, 전체집합·$S(A)-S(B)$ 최댓값, XU·CON·MI·EQV·★ 5)

### O12: 연산 방정식 (X 미지집합 결정) ★★★
- **id**: `CM2-ST-O12`
- **base ★**: 4
- **meta_type**: ST-set-equation
- **section**: ST-set-op
- **본질 통찰**: "$A \cap X = B \cup X$" 같은 미지집합 방정식 → 벤 다이어그램 영역 분해 후 $X$ 자유도 카운트
- **대안 발문**: "$A \cap X = B$이고 $A \cup X = C$인 $X$ 개수", 조건 만족 $X$의 합
- **대표 자산 (v2.0 확대)**:
  - `SRC-IP-2-ST-01-사01` (일품 ST 05 사01, $A \cap X = B \cup X$ → $X$ 개수, EQV·MI·CON·★ 5)
  - `SRC-OL-0172` (EBS 올림포스, 조건 $A \cap X = X$·$(A-B) \cup X = X$·$k$ 최대·최소, EQV·CON·★ 5 최상위)
  - `SRC-GJ-CM2-ST-007` (고쟁이, $A \cup C = B \cup C$·$C$ 개수 16·$(a,b)$ 개수, CON·EQV·PD·★ 5)
  - `SRC-RPM-ST-017` (RPM, $n(A)=16, n(A-B)=14, n(B)=17$ $X$ 개수, CON·EQV·★ 4)
  - `SRC-RPM-ST-020` (RPM 실력UP, $A \subset X$, $X \cap B = \emptyset$, CON·EQV·★ 4)

### O13: 조건 만족 부분집합 존재성 (연산 결합) ★★★★
- **id**: `CM2-ST-O13`
- **base ★**: 5
- **meta_type**: ST-set-op-combined
- **section**: ST-set-op
- **본질 통찰**: 여러 연산 (교·합·차·여) + 원소 개수·포함관계 다중 조건 → 미지집합 개수 카운트
- **대안 발문**: "$A - B = \{k\text{의 배수}\}$이고 $n(B) = 16$", "$(A \cup B) - (A \cap B)$ 조건 결합"
- **대표 자산 (v2.0 확대, P2 조건 통합 + 자유도)**:
  - `SRC-IP-2-ST-01-06` (일품 ST 05 #06, $A$ 소수·$(A \cup B)-(A \cap B)=\{n,n+1,n+2,n+3\}$ + $B$ 부분 16개 → $n$ 합, EQV·MI·CON·BW·PD·★ 5)
  - `SRC-IP-2-ST-01-사03` (일품 ST 05 사03, $A$=3배수·$(A \cup B)-(A \cap B)$=4배수 → $n(B)$, EQV·MI·CON·BW·PD·★ 5)
  - `SRC-IP-2-ST-01-사04` (일품 ST 05 사04, 복합 조건 + $n(A) n(B)$ 홀수 → $(A,B)$ 개수, EQV·MI·CON·BW·PD·★ 5)
  - `SRC-GJ-CM2-ST-014` (고쟁이, 20 이하·$A \cdot B$ 세 조건·$S(A)-S(B)$ 최댓값, CON·EQV·PD·★ 5)
  - `SRC-OL-0192` (EBS 올림포스 신유형, 조건 $X$·원소합 최솟값, SC·CON·★ 5 최상위)

### O14: 유리·무리 원소 분리 + 연산 ★★★
- **id**: `CM2-ST-O14`
- **base ★**: 4
- **meta_type**: ST-set-op-rational-irrational
- **section**: ST-set-op
- **본질 통찰**: 원소를 유리수·무리수·소수 등 특수 부분집합으로 분류 → 각 부분집합 연산 결과 결합
- **대안 발문**: "$(A - C) \cap (B - C)$의 원소 합", 유리수 · 무리수 원소 분포
- **대표 자산 (v2.0 확대)**:
  - `SRC-IP-2-ST-01-13` (일품 ST 05 #13, 유리·무리 분리 결합 $(A-C) \cap (B-C)$ 원소 합, EQV·CON·MI·PD·★ 5)
  - `SRC-IP-2-ST-00-04` (일품 ST 04 #04, $S=\{z \mid z^2-2z \text{실수}\}$ 보기, EQV·MI·CON·★ 5)
  - `SRC-IP-2-ST-00-07` (일품 ST 04 #07, $A=\{x \mid x^2 \text{유리}\}$ 보기, MI·EQV·CON·★ 4)
  - `SRC-GJ-CM2-ST-009` (고쟁이, 복소수집합 $A \cdot B \cdot C$·실수 원소 갖는 부분집합, XU·CON·MI·★ 5)

---

## 소단원 3: 명제 (P01–P16)

### P01: 명제·조건 판별과 부정
- **id**: `CM2-ST-P01`
- **base ★**: 1
- **meta_type**: ST-proposition-basic
- **section**: ST-proposition
- **본질 통찰**: 참·거짓이 결정되는 문장이 명제. $\sim p$ 부정 (예: "$x < 3$"의 부정은 "$x \ge 3$")
- **대안 발문**: 명제인 것 개수, 부정 명제 판별
- **대표 자산 (v2.0 확대)**:
  - `SRC-GJ-CM2-ST-139` (고쟁이, 명제인 것 개수 판별, EQV·★ 2)
  - `SRC-GJ-CM2-ST-145` (고쟁이, 두 조건 부정 표현, EQV·BW·★ 2)
  - `SRC-GJ-CM2-ST-149` (고쟁이, 명제 부정 (미만/이상), EQV·BW·★ 2)

### P02: 진리집합과 명제의 참·거짓
- **id**: `CM2-ST-P02`
- **base ★**: 2
- **meta_type**: ST-truth-set
- **section**: ST-proposition
- **본질 통찰**: 조건 $p$의 진리집합 $P$ = $\{x \mid p(x)\}$. "$p \Rightarrow q$가 참" $\iff P \subset Q$
- **대안 발문**: 진리집합 원소 개수, 참·거짓 판별
- **대표 자산 (v2.0 확대)**:
  - `DI-2026M-136` (조건의 진리집합, ★ 4)
  - `SRC-GJ-CM2-ST-140` (고쟁이, $p, q$ 진리집합·$p \to q$ 판별, EQV·CON·★ 2)
  - `SRC-GJ-CM2-ST-141` (고쟁이, 참인 명제 고르기, EQV·★ 2)
  - `SRC-GJ-CM2-ST-142` (고쟁이, $p \to q$ 거짓 원소 합, EQV·CON·★ 2)
  - `SRC-GJ-CM2-ST-147` (고쟁이, 진리집합 $P$ 옳은 것, EQV·MI·BW·★ 3)

### P03: 명제의 역·이·대우 참·거짓
- **id**: `CM2-ST-P03`
- **base ★**: 2
- **meta_type**: ST-converse-contrapositive
- **section**: ST-proposition
- **본질 통찰**: $p \Rightarrow q$의 대우 $\sim q \Rightarrow \sim p$는 항상 등가. 역·이는 원명제와 등가 아님 (반례 가능)
- **대안 발문**: 원명제·역·이·대우 중 참 개수, 역이 참이지만 대우가 거짓 반례
- **대표 자산 (v2.0 확대)**:
  - `SRC-GJ-CM2-ST-151` (고쟁이, 명제 역·대우 참거짓, EQV·★ 2)
  - `SRC-GJ-CM2-ST-152` (고쟁이, 역 참인 명제, EQV·★ 2)
  - `SRC-GJ-CM2-ST-160` (고쟁이, 대우 명제, EQV·BW·★ 2)

### P04: 대우 판별 위장 (문장 변환) ★★★
- **id**: `CM2-ST-P04`
- **base ★**: 3
- **meta_type**: ST-converse-contrapositive
- **section**: ST-proposition
- **본질 통찰**: "역은 참이고 대우는 거짓" 형태의 위장 발문 → 원명제 참·거짓 및 진리집합 관계 신중 분석
- **대안 발문**: 옳게 표현한 대우, 역이 참인 것 골라내기
- **대표 자산 (v2.0 확대, P3 항등식 위장)**:
  - `SRC-IP-2-ST-02-06` (일품 ST 06 #06, 역 참·대우 거짓 보기 위장 정교, MI·EQV·CON·★ 5)
  - `SRC-IP-2-ST-02-08` (일품 ST 06 #08, $\sim p \to q$, $r \to \sim p$ 참 보기, EQV·MI·CON·★ 5)
  - `SRC-GJ-CM2-ST-024` (고쟁이, 무리식·$p \to \sim q$ 역 참·$a$ 최댓값, XU·EQV·PD·★ 5)
  - `SRC-OL-0228` (EBS 올림포스, 명제 $\sim q \to \sim p$ 반례 $x=3$뿐인 $k$의 합, BW·EQV·★ 5 최상위)

### P05: 명제가 참이 되도록 하는 미지수 결정
- **id**: `CM2-ST-P05`
- **base ★**: 3
- **meta_type**: ST-truth-parameter
- **section**: ST-proposition
- **본질 통찰**: 진리집합 $P \subset Q$ 조건 → 부등식·방정식 미지수 결정. 실수 전체·자연수 등 정의역 유의
- **대안 발문**: "모든 $x$에 대해 $x^2 - 2ax + 4 > 0$인 $a$ 범위", 성립 미지수 값의 합
- **대표 자산 (v2.0 확대)**:
  - `DI-F11-087` (명제가 참이 되도록 하는 미지수, ★ 1)
  - `SRC-IP-2-ST-00-06` (일품 ST 04 #06, $\{x \mid a(x^2-2x+2)>-2x\}=\emptyset$ → $a$ 범위, EQV·CON·MI·★ 5)
  - `SRC-OL-0234` (EBS 올림포스, $f=x^3+ax^2+2ax+4$·양수 $x$·명제 참 $a$ 최댓값, SC·EQV·★ 5 최상위)
  - `SRC-RPM-ST-027` (RPM, 명제 참·실수 $k$ 최댓값 대우, EQV·BW·★ 4)
  - `SRC-RPM-ST-030` (RPM 실력UP·교육청, $p \to q$, $p \to \sim q$ 정수 $k$ 합, CON·EQV·★ 5)

### P06: "모든"·"어떤" 명제 참·거짓
- **id**: `CM2-ST-P06`
- **base ★**: 3
- **meta_type**: ST-quantifier
- **section**: ST-proposition
- **본질 통찰**: 전칭 $\forall$ ↔ 존재 $\exists$의 부정 관계. "모든 $x$에 대해 참" ↔ "$P = U$"
- **대안 발문**: "어떤 실수 $x$에 대해 참" 조건 $\iff P \ne \emptyset$
- **대표 자산 (v2.0 확대)**:
  - `SRC-GJ-CM2-ST-148` (고쟁이, 모든·어떤 명제 참 개수, EQV·★ 2)
  - `SRC-GJ-CM2-ST-150` (고쟁이, 부정 참 $k$ 최댓값, EQV·BW·CON·★ 3)
  - `SRC-OL-0230` (EBS 올림포스, $R$ 개수 (모든 $x$·$\sim p$이고 $\sim q \to r$ 참), EQV·MI·★ 5 최상위)
  - `SRC-AB-ST05-B08` (절대등급, $m(2x-1)<x^2+2<n(2x-1)$ 모든 $x$ → $m \cdot n$ 범위, RT·CON·EQV·★ 4)

### P07: 삼단논법과 추론
- **id**: `CM2-ST-P07`
- **base ★**: 2
- **meta_type**: ST-syllogism
- **section**: ST-proposition
- **본질 통찰**: $p \Rightarrow q$, $q \Rightarrow r$이면 $p \Rightarrow r$. 진리집합 추이성 $P \subset Q \subset R$
- **대안 발문**: 추가로 참이 되는 명제 골라내기, 대우 연쇄
- **대표 자산 (v2.0 확대)**:
  - `DI-F7-085` (삼단논법, ★ 1)
  - `SRC-GJ-CM2-ST-154` (고쟁이, 삼단논법 참인 명제, EQV·PD·★ 2)
  - `SRC-GJ-CM2-ST-158` (고쟁이, 세 조건 벤 다이어그램, EQV·PD·★ 2)
  - `SRC-IP-2-ST-02-04` (일품 ST 06 #04, $(p \land q) \to r$ + $r \to (p \lor q)$ → $m+n$, EQV·CON·MI·BW·PD·★ 5)

### P08: 충분조건·필요조건·필요충분조건 판별
- **id**: `CM2-ST-P08`
- **base ★**: 3
- **meta_type**: ST-necessary-sufficient
- **section**: ST-proposition
- **본질 통찰**: "$p$는 $q$이기 위한 충분조건" $\iff p \Rightarrow q$ 참 $\iff P \subset Q$. 필요·필요충분 대칭
- **대안 발문**: 옳은 관계 표현, 필요조건이지만 충분조건 아닌 것
- **대표 자산 (v2.0 확대)**:
  - `DI-F12-048`·`DI-F7-094`·`DI-F11-049`·`DI-F12-006` (충분·필요, ★ 2·3·4)
  - `SRC-GJ-CM2-ST-155` (고쟁이, 필요·충분 채우기, EQV·★ 2)
  - `SRC-GJ-CM2-ST-156` (고쟁이, 충분조건이지만 필요조건 아닌 것, EQV·★ 2)
  - `SRC-GJ-CM2-ST-159` (고쟁이, 충분·필요 옳지 않은 것, EQV·CON·★ 2)
  - `SRC-RPM-ST-023` (RPM, $p, q, r$로부터 충분·필요조건 판정, EQV·MI·★ 3)

### P09: 충분·필요 조건 만족 미지수 결정 ★★★
- **id**: `CM2-ST-P09`
- **base ★**: 4
- **meta_type**: ST-necessary-sufficient-param
- **section**: ST-proposition
- **본질 통찰**: 진리집합 포함 관계 $P \subset Q$ 만족 → 부등식·조건에서 매개변수 범위 결정. 경계 포함 여부 주의
- **대안 발문**: "$p$가 $q$의 필요조건인 $a$ 값의 범위", "충분조건이지만 필요조건 아닌 최소 $a$"
- **대표 자산 (v2.0 확대)**:
  - `SRC-IP-2-ST-02-10` (일품 ST 06 #10, $p, q \to r$ 충분이지만 필요 아님 → $a+b$, EQV·CON·MI·BW·★ 5)
  - `SRC-AB-ST05-B10` (절대등급, 진리집합 조건 + 역·대우 참 → $a, b$, CON·EQV·PD·MI·★ 5)
  - `SRC-OL-0247` (EBS 올림포스, $|x+2|+|x-4|<k$ 필요조건 $k$ 최솟값, EQV·MI·SC·★ 4)
  - `SRC-OL-0229` (EBS 올림포스, $P$=이차부등식·$\sim p \to q$인 $a$의 합, EQV·MI·★ 4)
  - `SRC-BL-ST-14` (블랙라벨, 두 실수 $x,y$·명제 $p \to \sim q$ 참 실수 $k$ 개수, BW·EQV·CON·★ 4)

### P10: 명제 세 개 조건 결합 (충분·필요 다층) ★★★★
- **id**: `CM2-ST-P10`
- **base ★**: 5
- **meta_type**: ST-multi-proposition
- **section**: ST-proposition
- **본질 통찰**: "$p \Rightarrow q$가 충분·필요 아님" + "$r \Rightarrow p$가 필요" 등 3개 이상 조건 → 진리집합 여러 층 포함관계 결합
- **대안 발문**: "$p, q$가 $r$의 충분이지만 필요 아닌 $a+b$", 세 조건 결합 최댓값
- **대표 자산 (v2.0 확대, P1 다중 조건 동시 결정)**:
  - `SRC-IP-2-ST-02-사03` (일품 ST 06 사03, $p \to q$ 충분 + $r \to p$ 필요 → $a^2+b^2$ 최댓, EQV·MI·CON·BW·★ 5)
  - `SRC-IP-2-ST-02-사01` (일품 ST 06 사01, $q \to \sim p$ 역 참 → $a$ 범위 → $\alpha+\beta$, EQV·MI·CON·BW·PD·★ 5)
  - `SRC-OL-0254` (EBS 올림포스, $2 \le k \le 100$·$A_n \cap A_m$·필요충분 아님 $n, b$, EQV·MI·★ 5 최상위)
  - `SRC-OL-0255` (EBS 올림포스, 두 실수 $a,b$·조건 $p, q, r$·필요조건 판정 3항, EQV·PD·★ 5 최상위)
  - `SRC-GJ-CM2-ST-029` (고쟁이, 두 조건 필요충분·정수 $k$ 개수, XU·EQV·CON·PD·★ 5)
- **출제 빈도**: 시리즈 5회마다 ≥ 1회 (변별 정점)

### P11: 대우를 이용한 증명 (빈칸)
- **id**: `CM2-ST-P11`
- **base ★**: 2
- **meta_type**: ST-proof-contrapositive
- **section**: ST-proposition
- **본질 통찰**: "$p \Rightarrow q$"를 증명하기 어려우면 대우 "$\sim q \Rightarrow \sim p$"를 증명. 빈칸 채우기 형식
- **대안 발문**: 증명 논리 빈칸, 다음 단계로 옳은 것
- **대표 자산 (v2.0 확대)**:
  - `SRC-IP-2-ST-02-12` (일품 ST 06 #12, 대우 증명 빈칸, EQV·MI·★ 4)
  - `SRC-GJ-CM2-ST-161` (고쟁이, 대우 이용 증명 빈칸, EQV·BW·★ 2)
  - `SRC-GJ-CM2-ST-162` (고쟁이, $n^2 \cdot n$ 홀수 대우 증명, EQV·BW·★ 2)
  - `SRC-GJ-CM2-ST-032` (고쟁이 STEP2·3, $m \cdot n$ 서로소 대우 증명, XU·EQV·PD·★ 5)

### P12: 귀류법 증명 (빈칸)
- **id**: `CM2-ST-P12`
- **base ★**: 3
- **meta_type**: ST-proof-contradiction
- **section**: ST-proposition
- **본질 통찰**: 결론의 부정에서 모순 도출. "$\sqrt 2$는 무리수" 증명이 대표
- **대안 발문**: 귀류법 논리 빈칸, 가정 단계 명시
- **대표 자산 (v2.0 확대)**:
  - `DI-F12-032`·`DI-F7-124` (귀류법, ★ 2·3)
  - `SRC-IP-2-ST-02-13` (일품 ST 06 #13, 귀류법 빈칸, EQV·MI·CON·★ 4)
  - `SRC-GJ-CM2-ST-031` (고쟁이, $\sqrt{n^2-1}$ 무리수 증명 빈칸, PD·EQV·XU·★ 5)
  - `SRC-GJ-CM2-ST-163` (고쟁이, 대우 증명 빈칸, EQV·BW·★ 2)

### P13: 절대부등식 증명 (실수의 성질)
- **id**: `CM2-ST-P13`
- **base ★**: 3
- **meta_type**: ST-absolute-inequality
- **section**: ST-inequality
- **본질 통찰**: $a^2 \ge 0$, 완전제곱꼴, $|a| \ge a \ge -|a|$ 활용 → 모든 실수에서 성립하는 부등식 증명
- **대안 발문**: 항상 성립하는 부등식 판별, 등호 성립 조건
- **대표 자산 (v2.0 확대)**:
  - `SRC-IP-2-ST-02-14` (일품 ST 06 #14, 절대부등식 보기, EQV·MI·CON·★ 4)
  - `SRC-GJ-CM2-ST-164` (고쟁이, 절대부등식 판별, EQV·★ 2)
  - `SRC-OL-0256` (EBS 올림포스, 절대부등식 판정 5항 (근호 부등식), EQV·MI·★ 5 최상위)

### P14: 산술평균·기하평균 관계 (AM-GM) 활용 ★★★
- **id**: `CM2-ST-P14`
- **base ★**: 3
- **meta_type**: ST-am-gm
- **section**: ST-inequality
- **본질 통찰**: $a, b > 0$이면 $\frac{a+b}{2} \ge \sqrt{ab}$ (등호 $a=b$). *합이 일정할 때 곱 최댓*, *곱이 일정할 때 합 최솟*
- **대안 발문**: "$x + \frac{9}{x}$ 최솟값 ($x > 0$)", 두 양수 곱 정할 때 합의 최솟값
- **대표 자산 (v2.0 확대)**:
  - `SRC-IP-2-ST-02-15` (일품 ST 06 #15, $\frac{1}{x}+\frac{1}{y}=1$ → $\frac{y^2}{x}+\frac{x^2}{y}$ 최솟, EQV·CON·BW·★ 4)
  - `SRC-RPM-ST-024` (RPM, 산술기하 $x, y$ 최댓값 $\alpha+\beta$, EQV·CON·★ 4)
  - `SRC-RPM-ST-025` (RPM, $(2a+\frac{1}{3b})(\frac{1}{a}+6b)$ 최솟값, EQV·CON·★ 4)
  - `SRC-GJ-CM2-ST-165` (고쟁이, 산술기하 증명 빈칸, EQV·PD·★ 2)
  - `SRC-GJ-CM2-ST-166` (고쟁이, 양수 $x+y=4$ $xy$ 최대·최소, EQV·CON·★ 2)
- **금지 변형**: 등호 성립 조건 확인 누락 시 오답 유도 (검수 필수)

### P15: AM-GM + 도형·응용 ★★★★
- **id**: `CM2-ST-P15`
- **base ★**: 4
- **meta_type**: ST-am-gm-application
- **section**: ST-inequality
- **본질 통찰**: 도형 (넓이·둘레) 조건 + AM-GM → 도형의 최적화. *합이 일정한 두 변으로 넓이 최대*, *3항 이상 AM-GM 결합*
- **대안 발문**: "전선 30m로 4개 입구 넓이 최대", "직각이등변삼각형 내부 두 넓이 곱의 최댓값"
- **대표 자산 (v2.0 확대, P6 단원 결합 I-XU)**:
  - `SRC-IP-2-ST-02-16` (일품 ST 06 #16, 4개 입구 + 전선 30m → 입구 넓이 최댓 (AM-GM), RT·EQV·CON·BW·★ 4)
  - `SRC-IP-2-ST-02-18` (일품 ST 06 #18, 직각이등변 + $AED \cdot DFC$ 넓이 $S_1, S_2$ 최솟값, EQV·CON·BW·RT·PD·★ 5)
  - `SRC-BL-ST-21` (블랙라벨, 삼각형·$\frac{5}{a}+\frac{12}{b}+\frac{13}{c}$ 최소, CON·EQV·XU·MI·★ 5)
  - `SRC-BL-ST-15` (블랙라벨, $x+y=10$·근호 최댓값, XU·EQV·MI·★ 5)
  - `SRC-RPM-ST-031` (RPM 실력UP, 삼각형 수선발 $\frac{AB}{PM}+\frac{AC}{PN}$ 최솟값, XU·EQV·★ 5 최상위)
  - `SRC-GJ-CM2-ST-033` (고쟁이, 직사각형 울타리·총비용 최소 $BC$, XU·MI·EQV·★ 5)

### P16: 코시-슈바르츠 부등식 활용 ★★★★
- **id**: `CM2-ST-P16`
- **base ★**: 4
- **meta_type**: ST-cauchy-schwarz
- **section**: ST-inequality
- **본질 통찰**: $(a^2+b^2)(x^2+y^2) \ge (ax+by)^2$ (등호 $ay=bx$). "$ax+by$의 최댓·최솟", "$x^2+y^2$ 최솟" 문제
- **대안 발문**: "$3x+2y=12$일 때 $x^2+y^2$ 최솟", 조건 만족 두 실수 곱의 최댓
- **대표 자산 (v2.0 확대)**:
  - `SRC-IP-2-ST-02-사05` (일품 ST 06 사05, 코시-슈바르츠 부등식 보기, EQV·MI·CON·★ 5)
  - `SRC-IP-2-ST-02-17` (일품 ST 06 #17, $3x+2y=12$ 위 $P$, 두 삼각형 넓이 곱 최댓, EQV·CON·BW·RT·★ 4)
  - `SRC-BL-ST-16` (블랙라벨, $x^2+y^2 \le 2$·$M \cdot m$ 곱 최댓값, CON·EQV·MI·★ 5)
  - `SRC-GJ-CM2-ST-170` (고쟁이, 코시-슈바르츠 증명 빈칸, EQV·PD·★ 2)
  - `SRC-GJ-CM2-ST-171` (고쟁이, $a^2+b^2=5$ $a+2b$ 최대·최소차, EQV·CON·★ 2)
  - `SRC-AB-ST05-B18` (절대등급, $3a+2b=1$일 때 $\frac{3}{a}+\frac{2}{b}$ 최솟값, EQV·CON·PD·★ 4)

---

## 카탈로그 종합 정보

### 소단원별 T-code 개수

| 소단원 | T-code | 커버 base ★ | 정점 유형 |
|---|---|---|---|
| S 집합의 뜻과 표현 | S01–S15 (15개) | 1~5 | S10 자기참조 · S15 자기 대응 |
| O 집합의 연산 | O01–O14 (14개) | 1~5 | O08 배수집합 · O13 연산 결합 |
| P 명제 (+ 부등식) | P01–P16 (16개) | 1~5 | P10 3조건 결합 · P15 AM-GM 응용 · P16 코시-슈바르츠 |
| **합계** | **45개** | | |

### 소단원별 ★ 분포 (base ★)

| 소단원 | ★ 1 | ★ 2 | ★ 3 | ★ 4 | ★ 5 |
|---|--:|--:|--:|--:|--:|
| S 집합의 뜻 | S01·S02 | S03·S04·S05·S06 | S07·S08·S12·S14 | S09·S11·S13 | S10·S15 |
| O 집합의 연산 | O01 | O02·O04·O09 | O03·O05·O07·O10 | O06·O08·O11·O12·O14 | O13 |
| P 명제 | P01 | P02·P03·P07·P11 | P04·P05·P06·P08·P12·P13·P14 | P09·P15·P16 | P10 |

### ★ 5 변별 정점 유형 (시리즈 우선 셀렉트)
- **S10 자기참조 닫힘** — $a \in A \Rightarrow f(a) \in A$ 궤도 추적
- **S15 자기 대응** — $f(B) = B$ 자기 사상 카운트
- **O13 연산 결합** — 다중 연산 + 원소 개수 조건 결합
- **P10 3조건 결합** — 충분·필요 다층 명제

### 검수 게이트 (v3.10 시스템)
- 시험지 1회차 ST 슬롯 10문 → ≥ 7개 서로 다른 T-code (README.md §5)
- 각 슬롯에 `type_id` (예: `CM2-ST-S10`) + `anchor_ref` 최소 1건 명시 의무
- ★ 4·5 슬롯 → 대표 자산 (일품·EBS·블랙라벨·절대등급) 인용 의무
- CM1 교과 침투 검증 (집합 기호 자체는 CM2 허용, 그러나 통계·확률 개념 밴)

### CM2 시판 표본 ★ 5 최상위 (0문 = 시판 책 한계)
`bank/4점-패턴-카탈로그/13-CM2-진정변별-후보.md` §2 표본 라벨링 결과, CM2-ST 70문 (일품 CM2 22개정) 중 ★ 5 최상위 (depth_score ≥ 8.5 + max=3 + count ≥ 5) **0문**. 시판 책은 *깊이 3 통찰 1~2개*에서 정점 형성. 진정 최상위 (통찰 5개 이상)는 학평 30번급에서만 등장 → 별도 EX-SN·EX-HG 자산 활용.

### 진정 변별 6대 패턴 (CM2-ST 매핑)
- **P1 다중 조건 동시 결정** — S15 · P10
- **P2 조건 통합 + 자유도** — S10 · S13 · O13
- **P3 항등식 위장** — P04 (역·대우 위장) · O05 (드모르간 위장)
- **P4 다층 나눗셈·인수 결합** — O08 (배수집합 lcm·gcd)
- **P5 자기참조** — S10 · S15
- **P6 단원 결합 (I-XU)** — S14 (새 연산 + 대수) · P15 (부등식 + 도형)

---

## 변경 이력

- **2026-07-06 v2.0** — 대표 자산 인용 확대. 45 T-code 전 항목에 `대표 자산 (v2.0 확대)` 필드 추가. 근거 표본 풀 = 카탈로그 §8 8종 시판 (절대등급 AB·블랙라벨 BL·EBS 올림포스 OL·고쟁이 GJ·쎈 SN·RPM·마플시너지 MPS·일등급수학 IGS) + 일품 IP + 마스터 앵커 DI-*. 저노출 통찰 정점(I-XU·I-SYM·I-PD·P1·P4·P5)에 매칭 표본 우선 인용. 인용 형식: `SRC-{교재약자}-CM2-ST-###` 30자 요약. 저작권 준수 (원문 인용 금지).
- **2026-07-06 v1.0** — CM2-ST 신설. 3소단원 45 T-code (S01–S15, O01–O14, P01–P16). 일품 CM2 ST 04·05·06 70문 라벨링 + `data/cm2-premium-samples.json` 198문 근거. 대표 자산 = DI-* 앵커 15문 + 일품 표본 15문 인용. 변별 정점 4유형 (S10·S15·O13·P10) 지정. v3.10 시스템 (base ★ 산정 원칙 v4.0 + G3' 다양성 의무) 준수.
