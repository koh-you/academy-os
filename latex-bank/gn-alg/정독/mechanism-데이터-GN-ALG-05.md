---
name: mechanism-데이터-GN-ALG-05
description: 개념원리 대수 05 상용로그(1/1 · 46~55쪽 · 42문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 대수 (22개정 · 학생용) · 전사본 latex-bank/gn-alg
  section: 05 상용로그
  unit_code: ALG-05
  part: "1/1"
  extract_range: "46~55쪽 · 46-86~55-118"
  total_problems: 42
  unit_total: 42
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-alg/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-alg/items/<id>.tex
  image_source: latex-bank/gn-alg/figures/ (crops.json)
---

# 개념원리 대수 · 05 상용로그 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 대수 05단원 「상용로그」 전체(46~55쪽 · 46-86~55-118 · 42문항)를 다룬다. 구역은 **개념원리 익히기** 5문 · **필수·발전 예제** 21문 · **연습문제 STEP 1** 5문 · **연습문제 STEP 2** 6문 · **연습문제 실력 UP** 5문이다. 개념원리 고등의 난이도 신호는 구역이 곧 층이어서 익히기 ★1 · 필수 예제 ★2 · 발전 예제 ★3 · STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4 를 출발점으로 삼고, 여기에 M_total·통찰로 ±1 을 조정했다. tag 「확인체크」 문항은 전사본 구역이 「필수·발전 예제」이고 본문에서 바로 앞 예제의 유제로 놓인 자리이므로 **해당 예제와 같은 출발점**(필수 유제 ★2 · 발전 유제 ★3)을 썼다.

단원 내용상 도구는 셋뿐이다. ⑴ 진수를 `A×10^n` 으로 분해해 상용로그를 `n + log A` 로 쪼개는 것, ⑵ 정수 부분·소수 부분의 정의(소수 부분은 0 이상 1 미만이므로 음수 로그는 정수 부분을 한 칸 더 내린다), ⑶ 정수 부분에서 자릿수·소수점 아래 자리·최고 자리 숫자를 읽는 것이다. 그래서 절차형(23문)이 다수이고, 통찰 라벨이 붙는 19문은 거의 모두 **소수 부분을 수치로 근사하지 않고 log 꼴이나 미지수 α 로 유지해 조건을 동치 변환하는 자리**(I-EQV)이거나 **자리 조건에서 로그 값 범위를 역추적하는 자리**(I-BW)다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 / 골조를 유지한 설정 변형과 ★ 가 변하는 지점)를 채웠다. 그림 문항은 상용로그표 크롭 1문(53-105)뿐이다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-ALG-46-86
  page: 46
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑹ 진수가 10의 거듭제곱(꼴로 고칠 수 있는 수)인 상용로그의 값 구하기($\log 10000$ · $\log\frac{1}{100}$ · $\log 0.001$ · $\log\sqrt[4]{10^3}$ · $\log 10\sqrt{10}$ · $\log\sqrt[3]{100}$).
  category: "진수를 10의 거듭제곱으로 고치기 → 지수가 곧 값"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "상용로그의 값(진수를 10의 거듭제곱으로)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    log 10^k = k 한 줄이 전부다. 분수·소수·거듭제곱근을 10의 유리수 지수로 고치는 표기 확인만 있고 변형 단계가 없다.
    통찰 0 · M_total 4(≤5) 로 −1 후보지만 개념원리 익히기 출발점 ★1 이 하한이라 ★1.
  tier: star_1
  mechanism_primary: "진수를 10^k 꼴로 정리 → log 10^k = k → 값"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $4$ ⑵ $-2$ ⑶ $-3$ ⑷ $\dfrac{3}{4}$ ⑸ $\dfrac{3}{2}$ ⑹ $\dfrac{2}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/46-86.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "10의 지수(10^5 · 0.0001 · 1000√10)와 거듭제곱근의 차수를 자유롭게 바꿀 수 있다. 제약: 진수가 10의 유리수 거듭제곱으로 정확히 표현되어야 하고(그렇지 않으면 상용로그표 유형으로 바뀐다) 값이 간단한 유리수로 떨어져야 한다."
    creative: "(1) 값이 주어지고 진수를 묻는 역방향으로(★1 유지) (2) 두 상용로그의 합·차를 한 값으로 묻기(★1~2) (3) 진수를 2·5의 곱으로 주어 log 2 를 함께 써야 하게 하면 47-e12 유형으로 넘어가 ★2."
```

```yaml
- id: GN-ALG-46-87
  page: 46
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑶ 교과서 부록의 상용로그표를 이용해 $\log 5.16$, $\log 6.6$, $\log 2.48$ 의 값 읽기.
  category: "상용로그표의 행·열 교차 읽기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "상용로그표 읽기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    표의 세로(수의 소수 첫째 자리까지)와 가로(소수 둘째 자리)를 교차해 읽으면 끝난다. ⑵ 의 6.6 은 6.60 으로 보고 0 열을 읽어야 한다는 표기 확인이 유일한 마찰이다.
    통찰 0 · M_total 4 이지만 익히기 구역 하한이라 ★1.
  tier: star_1
  mechanism_primary: "수를 (소수 첫째 자리)·(소수 둘째 자리)로 분해 → 표의 행·열 교차값"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $0.7126$ ⑵ $0.8195$ ⑶ $0.3945$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/46-87.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "1.00~9.99 사이의 어떤 수로도 바꿀 수 있다. 제약: 상용로그표에 실제로 실린 두 자리 소수여야 하고, 소수 둘째 자리가 0 인 수(6.6 같은)를 한 개쯤 섞어야 열 읽기 확인이 된다."
    creative: "(1) 표에서 값을 읽어 세 수의 곱의 로그를 구하게 하기(★2) (2) 표 값을 주고 진수를 되찾게 하면 53-105 유형(★2) (3) 표에 없는 자리(예: 5.164)를 주어 읽을 수 없음을 판단하게 하면 ★2."
```

```yaml
- id: GN-ALG-46-88
  page: 46
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    $\log 3.62=0.5587$ 을 이용해 $\log 362$ 를 구하는 과정의 빈칸 ㈎㈏㈐ 채우기(진수를 $3.62\times 10^{㈎}$ 로 분해하는 과정이 제시돼 있다).
  category: "진수의 A×10^n 분해 → 로그의 합으로 쪼개기(과정 빈칸)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "상용로그표와 진수의 10^n 분해(과정 빈칸 채우기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    풀이 골조가 발문에 그대로 인쇄돼 있고 학생은 지수 2 와 표 값 0.5587, 그 합만 채우면 된다. 스스로 세울 단계가 없다.
    통찰 0 · M_total 4 · 과정 제시형이라 이 단원에서 가장 가벼운 축이지만 익히기 하한 ★1.
  tier: star_1
  mechanism_primary: "362 = 3.62×10^2 → log 3.62 + log 10^2 → 0.5587 + 2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '㈎ $2$ ㈏ $0.5587$ ㈐ $2.5587$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/46-88.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준 값(3.62 → 0.5587)과 10의 지수(10^3 · 10^-2)를 바꿀 수 있다. 제약: 기준 값은 1 이상 10 미만이어야 소수 부분이 그대로 보존되고, 음의 지수를 쓰면 ㈐ 가 음수가 되어 46-90 의 함정이 섞인다."
    creative: "(1) 빈칸을 없애고 값만 묻기(★1 유지) (2) 지수를 음수로 바꿔 정수 부분·소수 부분까지 묻기(★2 · T-부호) (3) 역으로 log 362 값을 주고 log 3.62 를 묻는 빈칸으로(★1~2)."
```

```yaml
- id: GN-ALG-46-89
  page: 46
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑶ $\log 3.24=0.5105$ 를 이용해 $\log 3240$, $\log 0.00324$, $\log\sqrt[5]{324}$ 의 값 구하기.
  category: "진수의 A×10^n 분해 → n + log A (거듭제곱근은 지수 분수배)"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "주어진 log 값으로 다른 상용로그 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    세 소문항 모두 진수를 3.24×10^n 으로 고치고 n 을 더하는 같은 골조다. ⑵ 는 n=−3 이라 값이 음수가 되고, ⑶ 은 log 324 = 2.5105 를 구한 뒤 1/5 배 하는 한 단계가 더 붙는다.
    통찰 0 · M_total 5 로 −1 후보지만 익히기 하한이라 ★1.
  tier: star_1
  mechanism_primary: "진수 = 3.24×10^n → n + 0.5105 (거듭제곱근이면 전체에 1/m 배)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $3.5105$ ⑵ $-2.4895$ ⑶ $0.5021$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/46-89.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준 값(3.24 → 0.5105)과 10의 지수, 거듭제곱근 차수를 바꿀 수 있다. 제약: 기준 값은 1 이상 10 미만, 거듭제곱근 차수는 소수 부분이 깔끔히 나눠지는 값(2·4·5)이 좋고, 음의 지수 소문항은 답이 음수임을 답지와 맞춰 둬야 한다."
    creative: "(1) ⑵ 를 정수 부분·소수 부분까지 묻게 확장(★2 · 46-90 골조 결합) (2) 두 값의 곱·몫의 로그로 묶기(★2) (3) 값을 주고 진수를 되찾는 역방향으로 하면 48-e14 유형(★2)."
```

```yaml
- id: GN-ALG-46-90
  page: 46
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑶ $\log N$ 의 값이 $3.5593$, $-0.0693$, $-2.6021$ 일 때 각각의 정수 부분과 소수 부분 구하기.
  category: "소수 부분 0 이상 1 미만 조건 → 음수 로그의 정수 부분 한 칸 내리기"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "상용로그의 정수 부분과 소수 부분"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴ 은 그대로 읽으면 되고 ⑵⑶ 이 이 단원 전체의 핵심 함정이다. −0.0693 을 (−1) + 0.9307 로, −2.6021 을 (−3) + 0.3979 로 고쳐야 소수 부분이 0 이상 1 미만 조건을 만족한다.
    T-부호·T-경계가 함께 걸려 Mₜ=2 이지만, 정의를 그대로 적용하는 자리라 통찰 라벨은 붙이지 않았다. 통찰 0 이므로 +1 근거가 없어 익히기 출발점 ★1 유지.
  tier: star_1
  mechanism_primary: "log N 값을 (정수) + (0 이상 1 미만) 꼴로 강제 분해 → 음수면 정수 부분을 한 칸 더 내리고 소수 부분을 보정"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ 정수 부분: $3$, 소수 부분: $0.5593$ ⑵ 정수 부분: $-1$, 소수 부분: $0.9307$ ⑶ 정수 부분: $-3$, 소수 부분: $0.3979$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/46-90.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 값의 부호·크기를 바꿀 수 있다. 제약: 음수 값을 반드시 하나 이상 넣어야 이 유형의 의미가 살고, −1 과 0 사이의 값(−0.0693 처럼)을 넣어야 정수 부분이 −1 이 되는 경계 확인이 된다. 소수 부분 보정 결과는 4자리 소수로 떨어지게."
    creative: "(1) 정수 부분만, 또는 소수 부분만 묻기(★1 유지) (2) 정수 부분과 소수 부분의 합·곱을 묻기(★2) (3) 두 부분을 이차방정식의 두 근으로 주면 48-e15 유형(★3) (4) log N 대신 log(1/N) 의 정수 부분을 묻게 하면 55-114 의 축소판(★3)."
```

### 필수·발전 예제

```yaml
- id: GN-ALG-47-e12
  page: 47
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑶ $\log 2=0.3010$, $\log 3=0.4771$ 일 때 $\log 12$, $\log\frac{5}{2}$, $\log\sqrt{5}$ 의 값 구하기.
  category: "진수를 2·3·10의 곱·몫으로 분해 → 로그 법칙 → 대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "log 2·log 3 으로 상용로그의 값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    12 = 2²×3, 5 = 10/2 로 분해하면 주어진 두 값과 log 10 = 1 만으로 끝난다. 5 를 10/2 로 보는 착안이 유일한 마찰이지만 본문이 직접 가르치는 표준 절차라 통찰 라벨은 붙이지 않았다.
    통찰 0 · M_total 5 로 −1 후보지만 소문항 3개가 서로 다른 분해(곱·몫·거듭제곱근)를 요구해 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "진수를 2·3·10 의 곱·몫으로 분해 → log 법칙으로 분리 → log 5 = 1 − log 2 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $1.0791$ ⑵ $0.3980$ ⑶ $0.3495$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/47-e12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "진수를 2·3·5·10 만으로 소인수분해되는 수(15·24·45·√20 등)로 바꿀 수 있다. 제약: 7·11 같은 소인수가 섞이면 주어진 값으로 풀 수 없고, 5 가 들어가면 반드시 1 − log 2 경유가 필요하다."
    creative: "(1) log 2 대신 log 5 를 주고 log 2 를 되찾게 하기(★2 유지) (2) 진수에 미지수를 넣어 log x = a log 2 + b log 3 의 a·b 를 묻기(Mₐ 상승 ★3) (3) 값이 아니라 두 상용로그의 대소 비교를 묻기(★3 · I-EQV)."
```

```yaml
- id: GN-ALG-47-e13
  page: 47
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴⑵ $\log 2.71=0.4330$ 을 이용해 $\log 2710$, $\log 0.00271$ 의 값과 각각의 정수 부분·소수 부분 구하기.
  category: "A×10^n 분해 → 값 → 음수일 때 정수 부분 보정"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "상용로그의 정수 부분과 소수 부분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    46-89 와 46-90 을 한 문항에 붙여 놓은 자리다. ⑵ 에서 −2.5670 을 (−3) + 0.4330 으로 고쳐야 하고, 이때 소수 부분이 ⑴ 과 똑같이 0.4330 으로 보존된다는 것이 이 유형의 결론이다.
    통찰 0 · M_total 6 · 필수 예제 → ★2.
  tier: star_2
  mechanism_primary: "진수 = 2.71×10^n → n + 0.4330 → 음수면 (n−1) + (1−0.4330) 이 아니라 정수 부분만 내리고 소수 부분 0.4330 보존 확인"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $3.4330$, 정수 부분: $3$, 소수 부분: $0.4330$ ⑵ $-2.5670$, 정수 부분: $-3$, 소수 부분: $0.4330$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/47-e13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준 값(2.71 → 0.4330)과 10의 지수를 바꿀 수 있다. 제약: 음의 지수 소문항이 반드시 하나 있어야 하고, 두 소문항의 소수 부분이 같아진다는 결론이 보이도록 같은 기준 값을 써야 한다."
    creative: "(1) 두 소문항의 소수 부분이 같은 이유를 설명하게 하기(★3 · I-EQV) (2) 정수 부분만 주고 진수의 자릿수를 묻기(★2) (3) 소수 부분을 α 로 두고 10^α 를 묻게 하면 47-93 골조(★2~3)."
```

```yaml
- id: GN-ALG-47-91
  page: 47
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크(필수 예제 유제)"
  summary: |
    ⑴~⑶ $\log 2=0.3010$, $\log 3=0.4771$ 일 때 $\log 18$, $\log\frac{5}{3}$, $\log\sqrt{6}$ 의 값 구하기.
  category: "진수를 2·3·10의 곱·몫으로 분해 → 로그 법칙 → 대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "log 2·log 3 으로 상용로그의 값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    47-e12 의 유제로 분해만 18 = 2×3², 5/3 = 10/(2×3), √6 = (2×3)^(1/2) 로 바뀐다. ⑶ 은 답이 5자리 소수(0.38905)로 떨어지므로 반올림하지 않도록 주의.
    통찰 0 · M_total 5 · 필수 예제 유제 → ★2.
  tier: star_2
  mechanism_primary: "진수를 2·3·10 의 곱·몫으로 분해 → log 법칙 → log 5 = 1 − log 2 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $1.2552$ ⑵ $0.2219$ ⑶ $0.38905$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/47-91.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "진수를 2·3·5·10 만으로 분해되는 수로 바꿀 수 있다. 제약: 거듭제곱근 소문항은 안쪽 로그가 홀수 자리 소수가 되면 답이 5자리로 늘어나므로 출제 의도에 맞게 자릿수를 정해 둘 것."
    creative: "(1) 세 소문항의 답을 더해 한 값으로 묻기(★2) (2) log 2 를 주지 않고 log 6 만 주어 역으로 log 3 을 쓰게 하기(★2~3) (3) 답이 1보다 큰지 작은지만 판정하게 하면 계산 없이 크기 비교(★2 · I-EQV)."
```

```yaml
- id: GN-ALG-47-92
  page: 47
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크(필수 예제 유제)"
  summary: |
    ⑴⑵ $\log 5.23=0.7185$ 를 이용해 $\log 52.3$, $\log 0.0523$ 의 값과 각각의 정수 부분·소수 부분 구하기.
  category: "A×10^n 분해 → 값 → 음수일 때 정수 부분 보정"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "상용로그의 정수 부분과 소수 부분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    47-e13 의 유제. ⑵ 의 −1.2815 를 (−2) + 0.7185 로 고치는 한 단계가 핵심이고 ⑴ 과 소수 부분이 같음을 확인하게 돼 있다.
    통찰 0 · M_total 6 · 필수 예제 유제 → ★2.
  tier: star_2
  mechanism_primary: "진수 = 5.23×10^n → n + 0.7185 → 음수면 정수 부분 한 칸 내리고 소수 부분 0.7185 보존"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $1.7185$, 정수 부분: $1$, 소수 부분: $0.7185$ ⑵ $-1.2815$, 정수 부분: $-2$, 소수 부분: $0.7185$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/47-92.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준 값(5.23 → 0.7185)과 10의 지수를 바꿀 수 있다. 제약: 음의 지수 소문항 필수, 두 소문항이 같은 기준 값을 공유해야 소수 부분 보존이 드러난다."
    creative: "(1) 소수 부분이 같은 두 수를 나열해 고르게 하기(★2) (2) log x 의 정수 부분이 −2 가 되는 x 의 범위를 묻기(★3 · I-BW) (3) 값을 주고 진수를 되찾는 48-e14 유형으로 뒤집기(★2)."
```

```yaml
- id: GN-ALG-47-93
  page: 47
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크(필수 예제 유제)"
  summary: |
    $\log 50$ 의 소수 부분을 $\alpha$ 라 할 때 $1000^{\alpha}$ 의 값 구하기.
  category: "소수 부분을 로그 꼴로 유지 → 10의 거듭제곱으로 환원"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "소수 부분 α 를 0.6990 이라는 수치로 근사하지 않고 α = log 5 라는 로그 꼴로 유지해 1000^α = 10^(3 log 5) = 5³ 로 표현을 되돌림"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "소수 부분을 로그 꼴로 유지해 지수 계산하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    log 50 = 2 − log 2 라 정수 부분 1, 소수 부분은 log 5 다. 여기서 α 를 소수로 바꾸면 1000^α 가 계산 불가능해지고, α = log 5 로 둔 채 10^(3α) 로 옮겨야 진수 5³ 이 나온다. 지수 표현과 로그 표현을 오가는 자리라 I-RT d2.
    통찰 1개 d2 는 +1 조건(2개 이상 또는 d3)에 못 미쳐 필수 예제 유제 출발점 ★2 유지. 체감은 ★3 쪽이다.
  tier: star_2
  mechanism_primary: "log 50 = 1 + log 5 → α = log 5 → 1000^α = 10^(3 log 5) = 5³"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$125$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/47-93.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "진수(50 → 20·500·25)와 밑(1000 → 100·10^4)을 바꿀 수 있다. 제약: 소수 부분이 log(한 자리 유리수) 꼴이어야 하고, 밑의 지수와 곱해 진수가 정수로 떨어져야 한다(1000 과 log 5 → 5³)."
    creative: "(1) 10^{-α} 를 묻게 하면 진수의 역수로(54-109 골조 ★3) (2) 정수 부분 n 과 α 를 함께 써서 10^{n+α} = 원래 진수임을 확인하게 하기(★2) (3) α 를 두 로그의 합으로 만들어(log 50 과 log 20) 두 지수의 곱을 묻기(★3)."
```

```yaml
- id: GN-ALG-48-e14
  page: 48
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴⑵ $\log 5.67=0.7536$ 을 이용해 $\log x=4.7536$, $\log x=-2.2464$ 를 만족시키는 $x$ 구하기.
  category: "로그 값을 (정수) + 0.7536 꼴로 맞추기 → 진수 복원"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "상용로그의 진수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    47-e13 의 역방향이다. ⑴ 은 4 + 0.7536 이라 바로 5.67×10⁴. ⑵ 는 −2.2464 를 그대로 쪼개면 소수 부분이 음수가 되므로 (−3) + 0.7536 으로 고쳐야 5.67×10⁻³ 이 나온다.
    역방향이지만 주어진 소수 부분에 맞추는 표준 절차라 I-BW 는 인정하지 않았다. 통찰 0 · M_total 6 · 필수 예제 → ★2.
  tier: star_2
  mechanism_primary: "로그 값을 (정수 n) + 0.7536 꼴로 강제 분해 → x = 5.67×10^n"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $x=56700$ ⑵ $x=0.00567$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/48-e14.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준 값(5.67 → 0.7536)과 정수 부분을 바꿀 수 있다. 제약: 음수 소문항의 값은 반드시 −(정수 − 0.7536) 꼴, 즉 소수 부분이 보정 후 정확히 0.7536 이 되도록 정해야 한다."
    creative: "(1) x 가 몇 자리 정수인지만 묻기(★2 · 49-e16 골조) (2) 상용로그표를 주고 기준 값을 직접 찾게 하면 53-105 유형(★2) (3) log x 값을 부등식으로 주고 x 의 범위를 묻기(★3 · I-BW)."
```

```yaml
- id: GN-ALG-48-e15
  page: 48
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    $\log A$ 의 정수 부분과 소수 부분이 이차방정식 $3x^2+7x+k=0$ 의 두 근일 때 상수 $k$ 의 값 구하기.
  category: "근과 계수의 관계 → 합을 (정수)+(0 이상 1 미만)으로 유일 분해 → 곱으로 k"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "이차방정식 단원의 근과 계수의 관계를 끌어와 두 근의 합·곱을 로그의 정수 부분·소수 부분 조건으로 옮김"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 근의 합 −7/3 을 정수 부분 n 과 0 이상 1 미만인 소수 부분 α 의 합으로 유일하게 분해(n = −3, α = 2/3)"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "이차방정식의 두 근이 상용로그의 정수 부분·소수 부분"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    합이 −7/3 이라는 한 식에서 두 미지수를 정하는 것은 일반적으로 불가능하지만, 소수 부분이 0 이상 1 미만이라는 제약이 분해를 유일하게 만든다. 이 제약을 쓰지 않으면 문제가 풀리지 않는다.
    근과 계수의 관계(다른 단원 도구)와 소수 부분 제약의 동치 변환 두 단계가 라벨된다. 통찰 2개 → 필수 예제 출발점 ★2 에서 +1 하여 ★3.
  tier: star_3
  mechanism_primary: "근과 계수 → n + α = −7/3 · nα = k/3 → 0 이하 1 미만 제약으로 (n, α) = (−3, 2/3) 유일 결정 → k"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-6$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/48-e15.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차항·일차항 계수(3, 7)를 바꿀 수 있다. 제약: 두 근의 합이 정수가 아닌 유리수여야 분해가 의미 있고, 합의 소수 부분이 0 이상 1 미만이 되도록 부호를 맞춰야 한다. 합이 정수면 α = 0 이 되어 문제가 무너진다."
    creative: "(1) k 대신 log A 또는 A 자체를 묻기(★3 유지) (2) 두 근의 차나 제곱의 합을 조건으로 주기(★3~4) (3) log A 와 log(1/A) 를 두 방정식에 나눠 주면 55-114(★4) (4) 합을 양수로 만들어 n ≥ 0 인 경우로 바꾸면 난이도 하락(★2)."
```

```yaml
- id: GN-ALG-48-94
  page: 48
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크(필수 예제 유제)"
  summary: |
    ⑴~⑶ $\log 2.34=0.3692$ 를 이용해 $\log x=2.3692$, $\log x=-0.6308$, $\log x=-2.6308$ 을 만족시키는 $x$ 구하기.
  category: "로그 값을 (정수) + 0.3692 꼴로 맞추기 → 진수 복원"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "상용로그의 진수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    48-e14 의 유제로 음수 소문항이 둘이다. −0.6308 은 (−1) + 0.3692, −2.6308 은 (−3) + 0.3692 로 고쳐 각각 2.34×10⁻¹, 2.34×10⁻³ 을 얻는다.
    통찰 0 · M_total 6 · 필수 예제 유제 → ★2.
  tier: star_2
  mechanism_primary: "로그 값을 (정수 n) + 0.3692 꼴로 분해 → x = 2.34×10^n"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $234$ ⑵ $0.234$ ⑶ $0.00234$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/48-94.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준 값(2.34 → 0.3692)과 각 소문항의 정수 부분을 바꿀 수 있다. 제약: 음수 값은 소수 부분 보정 후 정확히 0.3692 가 되어야 하므로 −(n − 0.3692) 꼴만 허용."
    creative: "(1) x 의 자릿수 또는 소수점 아래 몇째 자리인지만 묻기(★2) (2) 세 x 의 곱을 묻기(★2) (3) log x 가 아니라 log(1/x) 값을 주어 한 번 더 뒤집기(★3)."
```

```yaml
- id: GN-ALG-48-95
  page: 48
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크(필수 예제 유제)"
  summary: |
    $\log A$ 의 정수 부분과 소수 부분이 이차방정식 $2x^2+5x+k=0$ 의 두 근일 때 상수 $k$ 의 값 구하기.
  category: "근과 계수의 관계 → 합을 (정수)+(0 이상 1 미만)으로 유일 분해 → 곱으로 k"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "이차방정식 단원의 근과 계수의 관계를 끌어와 합·곱 조건으로 전환"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "합 −5/2 를 정수 부분 −3 과 소수 부분 1/2 로 유일 분해(0 이상 1 미만 제약이 유일성의 근거)"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "이차방정식의 두 근이 상용로그의 정수 부분·소수 부분"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    48-e15 의 유제로 계수만 바뀐다. 합 −5/2 를 (−3) + 1/2 로 쪼개는 것이 핵심이고, −2 와 −1/2 로 쪼개려는 실수를 소수 부분 제약이 막는다.
    통찰 2개 → 필수 예제 유제 출발점 ★2 에서 +1 하여 ★3.
  tier: star_3
  mechanism_primary: "근과 계수 → n + α = −5/2 · nα = k/2 → 제약으로 (n, α) = (−3, 1/2) → k"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/48-95.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수(2, 5)를 바꿀 수 있다. 제약: 두 근의 합이 분모 2·3·4 정도의 유리수여야 α 가 깔끔하고, 합이 정수가 되면 α = 0 이라 문제가 성립하지 않는다."
    creative: "(1) k 대신 A 의 값 또는 자릿수를 묻기(★3) (2) 두 근을 정수 부분·소수 부분이 아니라 정수 부분과 그 역수로 주기(★3) (3) 합만 주고 k 의 가능한 값을 모두 구하게 하면 분기·기각이 생겨 ★4."
```

```yaml
- id: GN-ALG-49-e16
  page: 49
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴⑵ $\log 2=0.3010$, $\log 3=0.4771$ 일 때 $3^{20}$, $6^{50}$ 이 각각 몇 자리의 정수인지 구하기.
  category: "상용로그의 정수 부분 n → 자릿수 n+1"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "자릿수 결정(상용로그의 정수 부분 + 1)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    로그를 취해 20 log 3 = 9.542, 50(log 2 + log 3) = 38.905 를 얻고 정수 부분에 1 을 더하면 끝난다. 「자릿수 = 정수 부분 + 1」 은 본문이 정리로 제시하는 도구라 통찰로 세지 않았다.
    통찰 0 이지만 두 자리 곱셈이 실제 부담이라 Mₖ=2, M_total 6 → 필수 예제 ★2 유지.
  tier: star_2
  mechanism_primary: "양변에 상용로그 → 지수×(주어진 값) → 정수 부분 n → n+1 자리"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $10$자리 ⑵ $39$자리'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/49-e16.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(2·3·5·6·12)과 지수(10~100)를 바꿀 수 있다. 제약: 밑은 2·3·5 로 분해돼야 주어진 값으로 계산되고, 로그 값이 정수에 아주 가까우면(예: 10 log 10) 반올림 오차로 자릿수 판정이 흔들리므로 피한다."
    creative: "(1) 자릿수를 주고 지수를 역으로 묻기(★3~4 · 54-110 골조) (2) 최고 자리 숫자를 함께 묻기(★3 · 50-e18) (3) 두 수의 자릿수 차를 묻기(★2~3) (4) 밑에 미지수를 넣어 자릿수 조건을 만족하는 자연수 밑의 개수를 묻기(★4)."
```

```yaml
- id: GN-ALG-49-e17
  page: 49
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    $\left(\frac{1}{5}\right)^{100}$ 을 소수로 나타낼 때 소수점 아래 몇째 자리에서 처음으로 0 이 아닌 숫자가 나타나는지 구하기($\log 2=0.3010$).
  category: "음수 로그의 정수 부분 −n → 소수점 아래 n째 자리"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "소수점 아래 처음 0이 아닌 숫자의 자리 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    log 5 = 1 − log 2 로 고쳐 −100(0.6990) = −69.90 을 얻고, 이를 (−70) + 0.10 으로 분해해 정수 부분 −70 을 읽는다. 자리 수가 70 인 이유는 정수 부분이 −70 이기 때문이지 69.9 를 반올림해서가 아니다.
    음수 분해가 T-부호·T-경계로 걸려 Mₜ=2. 통찰 0 · M_total 7 · 필수 예제 → ★2.
  tier: star_2
  mechanism_primary: "log 5 = 1 − log 2 → 100 log(1/5) = −69.90 → 정수 부분 −70 → 소수점 아래 70째 자리"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '소수점 아래 $70$째 자리'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/49-e17.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(1/2·1/5·1/8·0.3)과 지수(20~200)를 바꿀 수 있다. 제약: 로그 값이 정수에 아주 가까우면 정수 부분 판정이 흔들리므로 소수 부분이 0.1~0.9 사이로 떨어지게 지수를 고른다."
    creative: "(1) 처음 나타나는 0 이 아닌 숫자까지 묻기(★4 · 최고 자리 결합) (2) 자리 조건을 주고 지수의 개수를 묻기(★4 · 55-115) (3) 자릿수 유형과 한 문항에 묶기(★2~3 · 53-107)."
```

```yaml
- id: GN-ALG-49-96
  page: 49
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크(필수 예제 유제)"
  summary: |
    ⑴⑵ $\log 2=0.3010$, $\log 3=0.4771$ 일 때 $5^{30}$, $2^{30}\times 3^{30}$ 이 각각 몇 자리의 정수인지 구하기.
  category: "상용로그의 정수 부분 n → 자릿수 n+1"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "자릿수 결정(상용로그의 정수 부분 + 1)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    49-e16 의 유제. ⑴ 은 log 5 = 1 − log 2 경유가 한 단계 더 붙고 ⑵ 는 6^30 으로 묶어 30(log 2 + log 3) 을 계산한다.
    통찰 0 · M_total 6 · 필수 예제 유제 → ★2.
  tier: star_2
  mechanism_primary: "상용로그 → 30(1 − log 2) · 30(log 2 + log 3) → 정수 부분 + 1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $21$자리 ⑵ $24$자리'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/49-96.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑과 지수를 바꿀 수 있다. 제약: 2·3·5 로 분해되는 밑만 가능하고, ⑵ 처럼 두 밑의 지수가 같으면 곱으로 묶는 정리 단계가 살아난다."
    creative: "(1) 두 수의 곱의 자릿수와 각 자릿수의 합을 비교하게 하기(★3 · 자릿수는 더해지지 않는다는 함정) (2) 자릿수가 같아지는 지수를 묻기(★4) (3) 5^30 과 2^30 의 자릿수 합이 31 임을 보이게 하기(★3 · I-EQV)."
```

```yaml
- id: GN-ALG-49-97
  page: 49
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크(필수 예제 유제)"
  summary: |
    ⑴⑵ $2^{-20}$, $\left(\frac{1}{8}\right)^{100}$ 을 소수로 나타낼 때 소수점 아래 몇째 자리에서 처음으로 0 이 아닌 숫자가 나타나는지 구하기($\log 2=0.3010$).
  category: "음수 로그의 정수 부분 −n → 소수점 아래 n째 자리"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "소수점 아래 처음 0이 아닌 숫자의 자리 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    49-e17 의 유제. −20 log 2 = −6.02 → (−7) + 0.98 → 7째 자리, −300 log 2 = −90.3 → (−91) + 0.7 → 91째 자리. 두 소문항 모두 음수 분해가 관건이다.
    통찰 0 · M_total 7 · 필수 예제 유제 → ★2.
  tier: star_2
  mechanism_primary: "상용로그 → 음수 값을 (정수) + (0 이상 1 미만)으로 분해 → 정수 부분의 절댓값이 곧 자리"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ 소수점 아래 $7$째 자리 ⑵ 소수점 아래 $91$째 자리'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/49-97.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(2^-n · (1/8)^n · (1/4)^n)과 지수를 바꿀 수 있다. 제약: 로그 값의 소수 부분이 0 에 너무 가까우면 자리 판정이 애매해지므로 피하고, 정확히 정수가 되는 경우(10의 거듭제곱)는 제외한다."
    creative: "(1) 두 수의 곱이 소수점 아래 몇째 자리인지 묻기(★3) (2) 소수점 아래 n째 자리가 되도록 하는 지수를 묻기(★4 · 55-115) (3) 처음 나타나는 숫자까지 묻기(★4)."
```

```yaml
- id: GN-ALG-50-e18
  page: 50
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["발전"]
  category_type: "발전 예제"
  summary: |
    ⑴⑵ $3^{14}$ 이 몇 자리의 정수인지, 그리고 최고 자리의 숫자가 무엇인지 구하기($\log 2=0.3010$, $\log 3=0.4771$).
  category: "정수 부분 → 자릿수 · 소수 부분을 log k 사이에 끼우기 → 최고 자리 숫자"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "3^14 = 10^6 × 10^0.6794 로 보고, 최고 자리 숫자를 묻는 문제를 10^0.6794 가 어느 두 정수 사이인지의 문제, 즉 log 4 ≤ 0.6794 < log 5 라는 로그 값 대소 비교로 옮김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "최고 자리의 숫자 결정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑴ 은 정수 부분 6 → 7자리로 끝나지만 ⑵ 는 소수 부분 0.6794 를 그대로 두고 주어진 log 값으로 만들 수 있는 log 4 = 0.6020 과 log 5 = 0.6990 사이에 끼워야 한다. 자릿수 유형과 달리 소수 부분이 답을 결정한다는 점이 이 유형의 전환점이다.
    통찰 1개 d2 → 발전 예제 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "14 log 3 = 6.6794 → 정수 부분 6 → 7자리 · 소수 부분 0.6794 를 log 4 와 log 5 사이에 끼움 → 최고 자리 4"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $7$자리 ⑵ $4$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/50-e18.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(2·3·6)과 지수를 바꿀 수 있다. 제약: 소수 부분이 주어진 log 값으로 만들 수 있는 두 수(log 2·log 3·log 4·log 5·log 6·log 8·log 9) 사이에 확실히 들어가야 하고, 경계에 아주 가까우면 판정이 흔들린다."
    creative: "(1) 자릿수와 최고 자리의 합·곱을 묻기(★3~4 · 50-98·55-116) (2) 최고 자리가 특정 숫자가 되는 지수를 찾게 하기(★4~5 · I-BW) (3) 소수 첫째 자리까지 묻기(★4) (4) 최고 자리 숫자가 1 인 경우를 묻게 하면 log 1 = 0 경계가 걸려 ★4."
```

```yaml
- id: GN-ALG-50-98
  page: 50
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크(발전 예제 유제)"
  summary: |
    $5^{20}$ 이 $a$ 자리의 정수이고 최고 자리의 숫자가 $b$ 일 때 $a+b$ 의 값 구하기($\log 2=0.3010$, $\log 3=0.4771$).
  category: "정수 부분 → 자릿수 · 소수 부분을 log k 사이에 끼우기 → 최고 자리 숫자"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "소수 부분 0.98 을 log 9 = 0.9542 와 log 10 = 1 사이에 끼워 최고 자리 숫자를 9 로 읽음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "최고 자리의 숫자 결정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    50-e18 의 유제. 20(1 − log 2) = 13.98 에서 a = 14 를 얻고, 소수 부분 0.98 이 log 9 보다 크고 1 보다 작다는 비교로 b = 9 를 얻는다. 소수 부분이 1 에 가까운 경우라 log 9 를 2 log 3 으로 만들어야 한다는 점이 추가 마찰이다.
    통찰 1개 d2 → 발전 예제 유제 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "20 log 5 = 13.98 → a = 14 · 0.98 을 2 log 3 과 1 사이에 끼움 → b = 9 → a+b"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$23$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/50-98.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑과 지수를 바꿀 수 있다. 제약: 소수 부분이 log 9 와 1 사이처럼 좁은 구간에 놓이면 주어진 log 값의 정밀도(4자리)가 판정을 가르므로, 경계에서 0.01 이상 떨어지게 지수를 고른다."
    creative: "(1) a−b 또는 ab 를 묻기(★3~4 · 55-116) (2) 최고 자리가 9 가 되는 가장 작은 지수를 찾게 하기(★4) (3) 5^20 과 2^20 의 최고 자리를 비교하게 하기(★4 · 곱이 10^20 이라는 대칭 활용 → I-SYM)."
```

```yaml
- id: GN-ALG-51-e19
  page: 51
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["발전"]
  category_type: "발전 예제"
  summary: |
    ⑴ $10<x<100$ 이고 $\log x$ 와 $\log x^3$ 의 소수 부분이 같을 때 $x$ 구하기. ⑵ $\log x$ 의 정수 부분이 3 이고 $\log x$ 의 소수 부분과 $\log\sqrt[3]{x}$ 의 소수 부분의 합이 1 일 때 양수 $x$ 구하기.
  category: "소수 부분 조건 → 소수 부분 α 한 변수 방정식 → 범위로 후보 걸러내기"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "⑴ 두 로그의 소수 부분이 같다는 조건을 그 차 2 log x 가 정수라는 조건으로 동치 변환하고, ⑵ 는 정수 부분을 3 으로 고정해 두 소수 부분을 α 와 α/3 으로 표현"
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "⑴ 에서 2α 가 정수라는 조건이 주는 α = 0, 1/2 두 후보 중 α = 0(x = 10)은 10 < x 조건 위배로 기각해야 답이 하나로 남음"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "상용로그 소수 부분의 활용(소수 부분이 같을 조건·소수 부분의 합 조건)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    ⑴ 은 소수 부분이 같다는 말을 차가 정수라는 식으로 바꾸는 것이 전부이고, 그 다음 후보 기각이 답을 하나로 만든다. ⑵ 는 log 세제곱근 x 의 정수 부분이 1 임을 α 범위로 확인한 뒤 α + α/3 = 1 을 푼다.
    두 소문항이 각각 다른 변형(차가 정수 / 소수 부분 합)을 요구하고 통찰 2개(EQV·VF) → 발전 예제 출발점 ★3 에서 +1 하여 ★4. ★4 저노출 게이트는 I-VF 로 충족.
  tier: star_4
  mechanism_primary: "log x = n + α 로 두기 → 소수 부분 조건을 α 방정식으로 → 0 이상 1 미만·주어진 범위로 후보 기각 → x = 10^(n+α)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ $x=10^{\frac{3}{2}}$ ⑵ $x=10^{\frac{15}{4}}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/51-e19.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 지수(x^3 → x^4·x^5)와 범위(10<x<100 → 100<x<1000), ⑵ 의 정수 부분 3 과 근호 차수 3 을 바꿀 수 있다. 제약: ⑵ 는 정수 부분과 근호 차수의 조합에 따라 log(x^(1/m)) 의 정수 부분이 달라지므로(3과 3이면 1, 3과 2면 1.5+α/2) 소수 부분 표현을 매번 다시 확인해야 한다 — 55-117 이 이 함정을 쓴다."
    creative: "(1) 소수 부분의 합이 아니라 차·곱을 조건으로(★4) (2) 답을 x 가 아니라 다른 로그의 소수 부분으로 묻기(★4 · 51-100·55-117) (3) 범위를 넓혀 해를 모두 구하게 하면 개수 세기로(★3~4 · 51-99·54-112) (4) 범위 조건을 없애면 α=0 이 살아나 답이 둘이 되고 I-VF 가 사라져 ★3."
```

```yaml
- id: GN-ALG-51-99
  page: 51
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크(발전 예제 유제)"
  summary: |
    $\log x$ 의 정수 부분이 2 이고 $\log x^2-\log\frac{1}{x}$ 의 값이 정수가 되도록 하는 양수 $x$ 를 모두 구하기.
  category: "식을 3 log x 로 정리 → 정수 조건을 3α 가 정수로 변환 → 후보 나열"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "log x² − log(1/x) 를 3 log x = 6 + 3α 로 정리해 「값이 정수」를 「3α 가 정수」라는 α 조건으로 바꿈"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "로그 식이 정수가 될 조건(소수 부분 활용)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    식을 먼저 3 log x 로 합치지 않으면 조건을 α 로 옮길 수 없다. 합친 뒤에는 0 이상 1 미만인 α 중 3α 가 정수인 것이 0, 1/3, 2/3 세 개로 유한함이 바로 보인다.
    후보가 모두 답에 기여하므로 기각(I-VF)은 없고 통찰 1개 d2 → 발전 예제 유제 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "log x² − log(1/x) = 3 log x = 6 + 3α → 3α 가 정수 → α = 0, 1/3, 2/3 → x = 10^(2+α)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$10^2$, $10^{\frac{7}{3}}$, $10^{\frac{8}{3}}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/51-99.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "식의 계수 조합(log x² − log(1/x) → log x³ + log x² 등)으로 α 의 분모를 3·4·5 로 바꿀 수 있고 정수 부분 2 도 바꿀 수 있다. 제약: 합친 계수 m 이 α 후보를 m 개 만들므로 답 개수를 의도한 대로 정해야 하고, 정수 부분이 바뀌어도 후보 개수는 m 으로 유지된다."
    creative: "(1) 값을 모두 구하는 대신 개수만 묻기(★3 · 54-112) (2) 정수 부분을 미지수 n 으로 두고 n 에 따른 개수를 묻기(★4) (3) 범위를 부등식으로 주어 후보 일부를 기각하게 하면 I-VF 가 추가되어 ★4."
```

```yaml
- id: GN-ALG-51-100
  page: 51
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크(발전 예제 유제)"
  summary: |
    $\log x$ 의 정수 부분이 4 이고 $\log x$ 의 소수 부분과 $\log\sqrt{x}$ 의 소수 부분의 합이 1 일 때 $\log\sqrt[4]{x}$ 의 소수 부분 구하기.
  category: "소수 부분을 α 로 통일 → 합 조건으로 α 결정 → 다른 로그의 소수 부분 계산"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "log x = 4 + α 로 두면 log √x = 2 + α/2 이므로 그 소수 부분이 α/2 임을 α 범위로 확정하고, 조건을 α + α/2 = 1 이라는 한 변수 방정식으로 바꿈"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "소수 부분의 합 조건에서 다른 소수 부분 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    정수 부분이 4(짝수)라 (4+α)/2 = 2 + α/2 가 되어 소수 부분이 그대로 α/2 다. α = 2/3 을 얻은 뒤 log x 의 1/4 인 (4+2/3)/4 = 7/6 에서 정수 부분 1 을 떼어내 소수 부분 1/6 을 읽는다.
    마지막에 다시 정수 부분을 떼어야 한다는 점이 함정이다. 통찰 1개 d2 → 발전 예제 유제 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "log x = 4 + α → log √x 의 소수 부분 α/2 → α + α/2 = 1 → α = 2/3 → log x^(1/4) = 7/6 → 소수 부분 1/6"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{1}{6}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/51-100.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정수 부분(4)·근호 차수(2, 4)·합의 값(1)을 바꿀 수 있다. 제약: 정수 부분이 근호 차수의 배수가 아니면 소수 부분이 α/m 이 아니라 (나머지/m) + α/m 이 되므로(55-117 의 함정) 의도한 쪽을 택해 확인해야 한다. α 는 0 이상 1 미만이어야 하므로 합의 값이 너무 크면 해가 없다."
    creative: "(1) 정수 부분을 홀수로 바꿔 함정을 살리기(★4 · 55-117) (2) 묻는 대상을 x 자체로(★3) (3) 합이 아니라 두 소수 부분이 같을 조건으로(★3~4 · 54-111) (4) 근호 차수를 미지수 m 으로 두고 소수 부분이 0 이 되는 m 을 묻기(★4~5)."
```

```yaml
- id: GN-ALG-52-e20
  page: 52
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    pH 를 수소 이온 농도의 상용로그로 정의한 관계식이 주어진 상황에서, 사탕 직후 타액의 pH 가 6.6 이고 10분 후 농도가 50배가 되었을 때 10분 후 pH 구하기($\log 2=0.3$).
  category: "정의식 대입 → 농도 배수를 로그의 차로 → pH 감소량"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "상용로그의 실생활 활용(pH)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    정의를 그대로 대입해 새 pH = 6.6 − log 50 을 세우고 log 50 = 2 − log 2 = 1.7 을 넣으면 끝난다. 농도가 50배가 되면 pH 는 log 50 만큼 줄어든다는 관계가 정의에서 곧바로 나온다.
    통찰 0 · M_total 5 로 −1 후보지만 실생활 문맥에서 두 상태를 세우는 해석 단계가 있어 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "pH' = −log(50[H+]) = pH − log 50 → log 50 = 2 − log 2 = 1.7 → 6.6 − 1.7"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4.9$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/52-e20.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "처음 pH(6.6)와 배수(50 → 20·200·1/5)를 바꿀 수 있다. 제약: 배수는 2·5·10 으로 분해돼야 주어진 log 2 만으로 계산되고, 결과 pH 가 0 이상이 되도록 배수를 제한한다."
    creative: "(1) pH 차를 주고 농도 배수를 역으로 묻기(★3 · I-BW) (2) 두 용액의 pH 를 주고 농도 비를 묻기(★2~3 · 52-102 골조) (3) 농도가 매 10분마다 일정 배수로 늘어난다고 하고 특정 pH 가 되는 시각을 묻기(★4)."
```

```yaml
- id: GN-ALG-52-101
  page: 52
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크(필수 예제 유제)"
  summary: |
    냉각 관계식 $T=T_a+(T_0-T_a)10^{-0.02t}$ 에서 외부 온도 20, 처음 온도 120 인 물체가 25 가 되는 것은 몇 분 후인지 구하기($\log 2=0.3$).
  category: "관계식 대입 → 10의 거듭제곱 꼴로 정리 → 로그를 취해 t 구하기"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "상용로그의 실생활 활용(지수 관계식에서 시각 구하기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    값을 대입해 10^(−0.02t) = 1/20 으로 정리한 뒤 양변에 상용로그를 취하면 −0.02t = −(1 + log 2) = −1.3 이 되어 t = 65. 지수 방정식을 로그로 푸는 정의 수준의 절차라 표현 전환으로 세지 않았다.
    통찰 0 · M_total 7 · 필수 예제 유제 → ★2.
  tier: star_2
  mechanism_primary: "대입 → 10^(−0.02t) = 1/20 → 양변 상용로그 → −0.02t = −(1 + log 2) → t"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$65$분'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/52-101.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "외부 온도·처음 온도·목표 온도와 지수의 계수(−0.02)를 바꿀 수 있다. 제약: (T − Ta)/(T0 − Ta) 가 2·5·10 의 거듭제곱 꼴이어야 주어진 log 2 만으로 풀리고, 목표 온도는 외부 온도보다 커야 한다(같거나 작으면 해가 없다)."
    creative: "(1) 시각을 주고 온도를 묻는 순방향으로(★2 이하) (2) 두 시각의 온도 차를 묻기(★3) (3) 온도가 절반으로 떨어지는 데 걸리는 시간(반감기)을 일반식으로 묻기(★4 · Mₐ 상승) (4) 외부 온도를 미지수로 두고 두 관측값에서 역산하기(★4 · I-CON)."
```

```yaml
- id: GN-ALG-52-102
  page: 52
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크(필수 예제 유제)"
  summary: |
    포화증기압 관계식 $\log P=9-\frac{2200}{t+180}$ 에서 $t=30$ 일 때의 $P_1$, $t=40$ 일 때의 $P_2$ 에 대해 $\frac{P_2}{P_1}$ 의 값을 구하는 5지선다.
  category: "비를 로그의 차로 환원 → 상수항 소거 → 10의 거듭제곱"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "P1 과 P2 를 각각 구하려 하면 10^(큰 수) 꼴이라 막히므로, 묻는 대상을 log(P2/P1) = log P2 − log P1 로 바꿔 상수항 9 를 소거"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "상용로그의 실생활 활용(두 값의 비)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    차를 잡으면 −2200/220 + 2200/210 = −10 + 220/21 = 10/21 한 줄로 끝난다. 각각을 구하려 들면 계산이 불가능해지므로 비를 로그 차로 옮기는 착안이 사실상 유일한 관문이다.
    분수 계산이 무거워 Mₖ=2. 통찰 1개 d1 → 필수 예제 유제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "log(P2/P1) = log P2 − log P1 → 상수 9 소거 → 2200(1/210 − 1/220) = 10/21 → 10^(10/21)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/52-102.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 온도(30, 40)와 상수(9, 2200, 180)를 바꿀 수 있다. 제약: t+180 두 값이 2200 을 적당히 나눠 분수가 간단한 유리수로 떨어져야 하고, 정의역 0<t<70 안에 있어야 한다."
    creative: "(1) 비가 아니라 P2/P1 이 10^k 일 때 k 를 묻기(★2 유지 · 54-113 골조) (2) 비를 주고 두 온도 중 하나를 역으로 묻기(★3~4 · I-BW) (3) 세 온도의 압력을 등비수열로 만드는 조건을 묻기(★4 · I-CON)."
```

### 연습문제 STEP 1

```yaml
- id: GN-ALG-53-103
  page: 53
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $\log 3.23=0.5092$ 일 때 $\log\frac{1}{3230}$ 의 값 구하기.
  category: "역수의 로그 = 부호 반전 → A×10^n 분해"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "주어진 log 값으로 다른 상용로그 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    log 3230 = 3 + 0.5092 를 구하고 앞에 음의 부호를 붙이면 끝이다. 정수 부분·소수 부분으로 분해하라는 요구가 없어 음수 보정 함정조차 발동하지 않는다.
    통찰 0 · M_total 4(≤5) → STEP 1 출발점 ★2 에서 −1 하여 ★1.
  tier: star_1
  mechanism_primary: "log(1/3230) = −log(3.23×10³) = −(3 + 0.5092)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-3.5092$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/53-103.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준 값(3.23 → 0.5092)과 10의 지수를 바꿀 수 있다. 제약: 기준 값은 1 이상 10 미만이어야 하고, 지수를 음수로 하면 답이 양수가 되어 부호 확인 의도가 사라진다."
    creative: "(1) 정수 부분·소수 부분까지 묻기(★2 · 46-90 결합) (2) 거듭제곱근을 씌워 1/m 배 단계를 추가(★2) (3) 값을 주고 진수를 되찾게 하기(★2 · 48-e14)."
```

```yaml
- id: GN-ALG-53-104
  page: 53
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    양수 $A$ 에 대하여 $\log A=1.2$ 일 때 $\log\frac{1}{\sqrt[4]{A}}$ 의 정수 부분 $a$, 소수 부분 $b$ 에 대해 $100ab$ 의 값 구하기.
  category: "지수 −1/4 배 → 음수 값의 정수 부분·소수 부분 분해"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "상용로그의 정수 부분과 소수 부분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    log(A^(−1/4)) = −1.2/4 = −0.3 을 얻은 뒤 (−1) + 0.7 로 고쳐야 a = −1, b = 0.7 이 나온다. −0.3 을 정수 부분 0, 소수 부분 −0.3 으로 읽는 실수를 막는 것이 출제 의도다.
    통찰 0 · M_total 7 · STEP 1 → ★2.
  tier: star_2
  mechanism_primary: "log A^(−1/4) = −0.3 → (−1) + 0.7 → a = −1, b = 0.7 → 100ab"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-70$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/53-104.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "log A 값(1.2)과 근호 차수(4 → 2·3·5)를 바꿀 수 있다. 제약: 나눈 결과가 음수이면서 정수가 아니어야 보정 함정이 살아나고, 100ab 가 정수로 떨어지도록 소수 자릿수를 맞춘다."
    creative: "(1) a+b 나 b−a 를 묻기(★2 유지) (2) A 자체를 10의 거듭제곱 꼴로 묻기(★2) (3) a, b 를 이차방정식의 두 근으로 만들기(★3 · 48-e15 결합) (4) log A 를 미지수로 두고 a = −1 이 되는 범위를 묻기(★3 · I-BW)."
```

```yaml
- id: GN-ALG-53-105
  page: 53
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    제시된 상용로그표를 이용해 $\log x=-0.4260$ 을 만족시키는 $x$ 의 값 구하기.
  category: "음수 값을 (정수) + (표에 있는 소수 부분)으로 분해 → 표 역방향 읽기"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "상용로그표로 진수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    −0.4260 을 그대로 표에서 찾으면 없다. (−1) + 0.5740 으로 고쳐야 표에 실린 0.5740 에 대응하는 3.75 를 찾을 수 있고, 정수 부분 −1 에서 x = 3.75×10⁻¹ 이 나온다.
    표를 값→진수 방향으로 거꾸로 읽는 것과 음수 보정이 겹치지만 모두 표준 절차라 통찰 라벨은 없다. M_total 6 · STEP 1 → ★2.
  tier: star_2
  mechanism_primary: "−0.4260 = (−1) + 0.5740 → 표에서 0.5740 → 3.75 → x = 3.75×10^(−1)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$0.375$'
  answer_source: "답지"
  figure: "crop:fig-53-105.png"
  latex: latex-bank/gn-alg/items/53-105.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "제시된 표에 실린 값 범위 안에서 소수 부분과 정수 부분을 바꿀 수 있다. 제약: 보정 후 소수 부분이 반드시 크롭된 표 안에 있어야 하므로 그림을 바꾸지 않는 한 값 선택 폭이 좁다. 그림 라벨(표의 행·열 머리)은 고정."
    creative: "(1) 양수 값으로 바꿔 보정 단계를 없애기(★1~2) (2) 표에서 두 값을 읽어 곱의 진수를 묻기(★3) (3) 표에 없는 소수 부분을 주어 가장 가까운 값으로 근사하게 하기(★3 · I-VF) (4) x 의 소수점 아래 몇째 자리에서 0 이 아닌 숫자가 나오는지 함께 묻기(★2~3)."
```

```yaml
- id: GN-ALG-53-106
  page: 53
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $\log 200$ 의 정수 부분과 소수 부분이 이차방정식 $x^2+ax+b=0$ 의 두 근일 때 상수 $a$, $b$ 에 대하여 $2a+b$ 의 값 구하기.
  category: "정수 부분·소수 부분을 log 2 로 표현 → 근과 계수 → 2a+b 에서 log 2 소거"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "소수 부분을 0.3010 으로 근사하지 않고 log 2 로 유지하면 a = −(2 + log 2), b = 2 log 2 가 되어 2a + b 에서 log 2 가 정확히 소거되고 답이 −4 라는 정수로 떨어짐"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "이차방정식의 두 근이 상용로그의 정수 부분·소수 부분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    log 200 = 2 + log 2 이므로 정수 부분 2, 소수 부분 log 2 다. 48-e15 와 달리 합·곱에서 미지수를 되찾는 것이 아니라 계수 조합 2a+b 를 만들어 무리한 값을 소거시키는 것이 요점이고, 근삿값을 대입해도 −4.602+0.602 로 같은 답이 나오지만 소거 구조를 보면 계산이 한 줄로 끝난다.
    통찰 1개 d2 → STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "log 200 = 2 + log 2 → a = −(2 + log 2), b = 2 log 2 → 2a + b = −4"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/53-106.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "진수(200 → 500·20·3000)와 묻는 계수 조합(2a+b)을 바꿀 수 있다. 제약: 계수 조합은 정수 부분 n 에 대해 소수 부분이 소거되도록 n·a + b 꼴로 맞춰야 답이 정수로 떨어진다. 진수가 바뀌면 소거용 계수도 함께 바뀐다."
    creative: "(1) a, b 를 각각 묻기(★2 · 답이 무리수) (2) a−b, ab 등 소거되지 않는 조합을 묻기(★3) (3) 진수를 미지수로 두고 2a+b 가 정수가 되는 조건을 묻기(★4 · I-BW) (4) 두 근의 차를 묻기(★3)."
```

```yaml
- id: GN-ALG-53-107
  page: 53
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $3^{100}$ 이 $a$ 자리의 정수이고 $\left(\frac{1}{2}\right)^{200}$ 이 소수점 아래 $b$ 째 자리에서 처음으로 0 이 아닌 숫자가 나타날 때 $a+b$ 의 값 구하기($\log 2=0.3010$, $\log 3=0.4771$).
  category: "자릿수(정수 부분+1)와 소수점 아래 자리(음수 정수 부분)를 한 문항에서 결합"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "자릿수와 소수점 아래 자리 결정의 결합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    앞은 100 log 3 = 47.71 → 48자리, 뒤는 −200 log 2 = −60.2 → (−61) + 0.8 → 61째 자리다. 두 표준 정리를 한 문항에서 각각 쓰는 구성이고 서로 얽히지 않는다.
    양수 쪽은 정수 부분+1, 음수 쪽은 정수 부분의 절댓값이라는 비대칭을 혼동하지 않는 것이 유일한 함정. 통찰 0 · M_total 7 · STEP 1 → ★2.
  tier: star_2
  mechanism_primary: "100 log 3 = 47.71 → a = 48 · −200 log 2 = −60.2 → 정수 부분 −61 → b = 61 → a+b"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$109$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/53-107.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 밑과 두 지수를 각각 바꿀 수 있다. 제약: 두 로그 값 모두 소수 부분이 0 에서 충분히 떨어져야 자리 판정이 안전하고, 음수 쪽은 지수를 크게 잡아도 계산이 한 줄로 끝나므로 부담이 늘지 않는다."
    creative: "(1) a−b 를 묻기(★2 유지) (2) 두 수의 곱의 자릿수를 묻게 하면 지수법칙 정리가 추가(★3) (3) a = b 가 되게 하는 지수 관계를 묻기(★4 · I-BW) (4) 최고 자리 숫자를 함께 묻기(★3~4)."
```

### 연습문제 STEP 2

```yaml
- id: GN-ALG-53-108
  page: 53
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $\log_3 x=20$ 인 양수 $x$ 에 대하여 $\log\frac{1}{x}=n+\alpha$ ($n$ 은 정수, $0\le\alpha<1$)일 때 $1000\alpha$ 의 값 구하기($\log 3=0.4771$).
  category: "밑 3 로그 → x = 3^20 → 상용로그 → 음수 값의 소수 부분"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "상용로그의 정수 부분과 소수 부분"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    로그의 정의로 x = 3^20 을 얻고 log(1/x) = −20 log 3 = −9.542 를 (−10) + 0.458 로 분해하면 α = 0.458 이다. 발문이 0 이상 1 미만 조건을 명시해 주어 소수 부분 정의를 따로 떠올릴 필요도 없다.
    통찰 0 이지만 M_total 7 이라 −1 조건(M_total ≤ 5)에 해당하지 않아 STEP 2 출발점 ★3 유지. 체감 난이도는 ★2 쪽이다.
  tier: star_3
  mechanism_primary: "log₃x = 20 → x = 3^20 → log(1/x) = −20 log 3 = −9.542 → (−10) + 0.458 → 1000α"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$458$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/53-108.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(3 → 2·5·6)과 지수(20)를 바꿀 수 있다. 제약: −(지수×log 밑) 의 소수 부분이 세 자리 소수로 깔끔히 떨어져야 1000α 가 정수가 되고, 지수×log 가 정수에 가까우면 α 가 0 이나 1 근처로 몰려 위험하다."
    creative: "(1) n 과 α 를 모두 묻기(★3 유지) (2) n + 1000α 같은 조합으로(★3) (3) log x 와 log(1/x) 의 소수 부분의 합이 1 임을 보이게 하기(★4 · I-EQV · 55-114 로 가는 길) (4) x 의 자릿수를 함께 묻기(★3)."
```

```yaml
- id: GN-ALG-54-109
  page: 54
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $\log 12$ 의 정수 부분을 $x$, 소수 부분을 $y$ 라 할 때 $10^{x}+10^{-y}$ 의 값 구하기.
  category: "소수 부분을 로그 꼴로 유지 → 10^(−y) 를 진수의 역수로 환원"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "소수 부분 y 를 수치로 근사하지 않고 y = log(12/10) = log(6/5) 로 유지해 10^(−y) 를 진수의 역수 5/6 으로 되돌림"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "소수 부분을 로그 꼴로 유지해 지수 계산하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    log 12 = 1 + log 1.2 이므로 x = 1, y = log(6/5). y 를 0.0792 같은 수치로 바꾸면 10^(−y) 를 계산할 수 없고, 로그 꼴로 둔 채 10^(−log(6/5)) = 5/6 으로 옮겨야 답이 유리수로 떨어진다. 47-93 과 같은 골조에 지수가 음수인 만큼 역수 처리가 한 겹 더해진다.
    통찰 1개 d2 → STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "log 12 = 1 + log(6/5) → x = 1, y = log(6/5) → 10^1 + 10^(−log(6/5)) = 10 + 5/6"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{65}{6}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/54-109.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "진수(12 → 25·48·150)와 지수 부호를 바꿀 수 있다. 제약: 진수를 10^n 으로 나눈 값이 간단한 유리수여야 답이 분수로 떨어지고, 진수가 1 과 10 사이면 정수 부분이 0 이 되어 10^x = 1 이 된다."
    creative: "(1) 10^x × 10^y = 원래 진수임을 확인하게 하기(★2) (2) 10^(2y) 나 100^y 처럼 배수 지수를 묻기(★3 · 47-93 골조) (3) x 와 y 를 이차방정식의 두 근으로 주기(★4 · 48-e15 결합) (4) 진수를 미지수로 두고 10^x + 10^(−y) 가 정수가 되는 조건을 묻기(★4~5)."
```

```yaml
- id: GN-ALG-54-110
  page: 54
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    자연수 $A$ 에 대하여 $A^{50}$ 이 67자리의 정수일 때 $A^{20}$ 은 몇 자리의 정수인지 구하기.
  category: "자릿수 조건 → log A 부등식 범위 역추적 → 20 log A 범위가 한 정수 구간에 들어감"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「67자리」라는 결과 조건에서 66 ≤ 50 log A < 67, 즉 1.32 ≤ log A < 1.34 라는 log A 의 범위를 역추적"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "구한 범위를 20배 해 26.4 ≤ 20 log A < 26.8 을 얻고, 이 구간이 통째로 [26, 27) 안에 들어가므로 A 를 특정하지 않아도 자릿수가 27 로 유일하게 결정됨을 확인"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "자릿수 조건에서 log A 범위 역추적"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    A 를 구할 수 없는데도 답이 정해진다는 것이 이 문항의 핵심이다. 등식이 아니라 부등식 범위로 다루고, 20배 한 범위가 한 정수 구간을 벗어나지 않음을 확인해야 비로소 답을 단정할 수 있다. 범위가 걸쳐 있었다면 답이 결정되지 않는다.
    통찰 2개(BW·EQV) → STEP 2 출발점 ★3 에서 +1 하여 ★4. ★4 저노출 게이트는 I-BW 로 충족.
  tier: star_4
  mechanism_primary: "66 ≤ 50 log A < 67 → 1.32 ≤ log A < 1.34 → 26.4 ≤ 20 log A < 26.8 ⊂ [26, 27) → 27자리"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$27$자리'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/54-110.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 지수(50, 20)와 자릿수(67)를 바꿀 수 있다. 제약: 변환된 범위가 반드시 한 정수 구간 안에 완전히 들어가야 답이 유일하다. 두 번째 지수가 크면 범위가 넓어져 구간을 걸치므로(예: 50 → 100) 지수 비와 자릿수를 함께 검증해야 한다."
    creative: "(1) 답이 결정되지 않는 지수를 주고 가능한 자릿수를 모두 구하게 하기(★5 · I-VF 추가) (2) A 가 될 수 있는 자연수를 모두 구하게 하기(★4~5) (3) 소수점 아래 자리 버전으로 뒤집기(★4) (4) 자릿수를 미지수 k 로 두고 일반식을 묻기(★5 · Mₐ 3)."
```

```yaml
- id: GN-ALG-54-111
  page: 54
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $2<\log x<3$ 이고 $\log x^4$ 의 소수 부분과 $\log x^2$ 의 소수 부분이 같을 때 양수 $x$ 의 값 구하기.
  category: "소수 부분이 같다 → 차가 정수 → α 후보 중 범위 위배 기각"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 소수 부분이 같다는 조건을 차 log x⁴ − log x² = 2 log x 가 정수라는 조건으로 동치 변환"
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "2α 가 정수에서 나온 α = 0, 1/2 두 후보 중 α = 0(x = 100)은 log x < 3 은 만족해도 2 < log x 의 등호 없는 경계 때문에 남는 해가 1/2 뿐임을 확인·기각"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "소수 부분이 같을 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    51-e19 ⑴ 과 같은 골조다. log x = 2 + α 로 두면 차가 4 + 2α 이고, 이것이 정수이려면 2α 가 정수라 α 는 0 또는 1/2 인데 범위 조건이 한쪽을 지운다.
    통찰 2개로 +1 후보지만 소문항이 하나이고 후보도 둘뿐이라 M_total 7 로 51-e19(M_total 9 · 소문항 2개)보다 확실히 가볍다. STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "log x = 2 + α → 2 log x = 4 + 2α 가 정수 → α = 0 or 1/2 → 범위로 α = 1/2 → x = 10^(5/2)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$10^{\frac{5}{2}}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/54-111.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 지수(4, 2)와 범위(2<log x<3)를 바꿀 수 있다. 제약: 두 지수의 차 m 이 α 후보를 m 개 만들므로 답이 하나로 남으려면 범위가 나머지 후보를 지워야 한다. 범위를 등호 포함으로 바꾸면 α = 0 이 살아나 답이 둘이 된다."
    creative: "(1) 범위를 넓혀 해를 모두 구하게 하기(★3 · I-VF 소멸) (2) 지수 차를 크게 해 후보를 늘리고 개수를 묻기(★3~4 · 54-112) (3) 소수 부분이 같다가 아니라 합이 1 이라는 조건으로(★4 · 51-100·55-117) (4) x 대신 log x⁴ 의 소수 부분을 묻기(★3)."
```

```yaml
- id: GN-ALG-54-112
  page: 54
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $\log x$ 의 정수 부분이 2 일 때 $\log x^3+\log x^2$ 의 값이 정수가 되도록 하는 $x$ 의 개수 구하기.
  category: "식을 5 log x 로 정리 → 정수 조건을 5α 가 정수로 변환 → 후보 개수"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "log x³ + log x² 를 5 log x = 10 + 5α 로 합쳐 「값이 정수」를 「5α 가 정수」라는 α 조건으로 바꾸고, 0 이상 1 미만에서 후보가 5개임을 읽음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "로그 식이 정수가 될 조건(소수 부분 활용)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    51-99 와 같은 골조에 계수가 3 에서 5 로 바뀌고 값 대신 개수를 묻는다. 합친 계수가 곧 후보 개수라는 구조를 보면 α = 0, 1/5, 2/5, 3/5, 4/5 를 일일이 적지 않아도 5 가 나온다.
    정수 부분이 2 라는 조건은 개수에 영향을 주지 않는다는 점도 확인 대상이다. 통찰 1개 d2 → STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "log x³ + log x² = 5 log x = 10 + 5α 가 정수 → 5α 가 정수 → 0 이상 1 미만에서 α 후보 5개"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/54-112.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 지수의 합(3+2=5)과 정수 부분 2 를 바꿀 수 있다. 제약: 개수는 합친 계수와 정확히 같으므로 원하는 답에 맞춰 계수를 정하면 되고, 정수 부분을 바꿔도 개수는 변하지 않는다(문항의 미끼)."
    creative: "(1) x 의 값을 모두 구하게 하기(★3 · 51-99) (2) x 의 값들의 곱을 묻기(★4 · 지수 합이 등차수열) (3) 식을 log x² − log(1/x³) 처럼 부호가 섞이게 써서 정리 단계를 늘리기(★3) (4) 정수 부분이 −2 인 경우로 바꿔 음수 함정을 넣기(★4)."
```

```yaml
- id: GN-ALG-54-113
  page: 54
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    수요량과 판매 가격 사이에 $\log D=\log c-\frac{1}{3}\log P$ 가 성립할 때, 가격이 $P_1$, $4P_1$ 일 때의 수요량 $D_1$, $D_2$ 에 대해 $\frac{D_2}{D_1}=2^{k}$ 인 상수 $k$ 구하기.
  category: "두 상태의 비를 로그 차로 환원 → 상수 c 소거 → 밑 2 로 표현"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "D1, D2 를 각각 구하지 않고 log D2 − log D1 = −(1/3)(log 4P1 − log P1) = −(1/3) log 4 로 옮겨 미지 상수 c 와 P1 을 동시에 소거"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "상용로그의 실생활 활용(두 값의 비)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    52-102 와 같은 골조이며 c 와 P1 이 모두 미지수라는 점에서 비로 환원하는 것이 선택이 아니라 필수다. 마지막에 −(2/3) log 2 를 log 2^(−2/3) 으로 되읽어 k 를 뽑는 표현 정리가 한 단계 더 있다.
    통찰 1개 d1 → STEP 2 출발점 ★3 유지. 계산 자체는 가볍다.
  tier: star_3
  mechanism_primary: "log(D2/D1) = −(1/3) log 4 = −(2/3) log 2 → D2/D1 = 2^(−2/3) → k = −2/3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-\dfrac{2}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/54-113.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "가격 배수(4 → 8·16·1/2)와 지수 계수(1/3 → 1/2·2/3)를 바꿀 수 있다. 제약: 배수는 2의 거듭제곱이어야 답이 2^k 꼴로 떨어지고, 배수가 1보다 작으면 k 가 양수가 된다."
    creative: "(1) 수요량 비를 주고 가격 배수를 역으로 묻기(★4 · I-BW) (2) 답을 10^k 꼴로 묻기(★3 · 52-102) (3) 가격이 두 번 연속 오를 때의 누적 비를 묻기(★3~4) (4) 계수 1/3 을 미지수로 두고 조건에서 역산하기(★4 · I-CON)."
```

### 연습문제 실력 UP

```yaml
- id: GN-ALG-55-114
  page: 55
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $\log z$ 의 정수 부분과 소수 부분이 $x^2-ax+b=0$ 의 두 근이고, $\log\frac{1}{z}$ 의 정수 부분과 소수 부분이 $x^2+ax+b-\frac{3}{2}=0$ 의 두 근일 때 상수 $a$, $b$ 구하기($b\ne 0$).
  category: "log(1/z) 의 정수·소수 부분을 (−n−1, 1−α)로 변환 → 두 근과 계수 조건 통합 → 0 이상 1 미만으로 n 유일 결정"
  M: {s: 3, k: 2, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "log z = n + α 일 때 log(1/z) = −n − α 의 정수 부분은 −n 이 아니라 −n−1, 소수 부분은 1−α 임을 0 이상 1 미만 조건에서 끌어냄(b ≠ 0 이 α ≠ 0 을 보장)"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 이차방정식의 근과 계수 조건 네 개를 합 조건은 자동 성립으로 걸러내고 곱 조건 (−n−1)(1−α) = nα − 3/2 하나로 통합"
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "통합식에서 나온 α = n − 1/2 를 0 < α < 1 에 재대입해 n 이 1 뿐임을 확인(다른 정수 n 은 모두 조건 위배로 기각)"
  insight_count: 3
  depth_score: 2.00
  type_id: null
  type_hint: "이차방정식의 두 근이 상용로그의 정수 부분·소수 부분(역수 조건 결합)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    48-e15 의 구조에 역수 로그를 얹은 이 범위 최난도 문항이다. 첫 단계에서 log(1/z) 의 정수 부분을 −n 으로 잘못 두면 두 방정식이 모순이 되고 풀이가 끝난다. 두 방정식의 합 조건은 자동으로 같아져 정보를 주지 않으므로 곱 조건만 남기는 정리도 필요하다.
    통찰 3개(EQV·CON·VF)로 +1 후보(★5)이고 저노출 게이트(VF·CON)도 통과하지만, 각 단계가 이 단원 표준 도구의 조합이라 novelty_score 0 이어서 v3.8 §2.14 게이트상 ★5 로 올리지 않고 실력 UP 출발점 ★4 로 둔다. [분류 이슈] ★4/★5 경계.
  tier: star_4
  mechanism_primary: "log z = n + α → log(1/z) = (−n−1) + (1−α) → 곱 조건 (−n−1)(1−α) = nα − 3/2 → α = n − 1/2 → 0<α<1 로 n=1 → a = 3/2, b = 1/2"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$a=\dfrac{3}{2}$, $b=\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/55-114.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "둘째 방정식의 상수항 차(3/2)를 바꿀 수 있다. 제약: α = n − (그 값 −1) 꼴로 나오므로 결과 α 가 0 보다 크고 1 보다 작은 정수 n 이 정확히 하나만 존재하도록 값을 골라야 한다. b ≠ 0 조건은 α ≠ 0 을 보장하는 장치라 빼면 안 된다."
    creative: "(1) a, b 대신 z 를 묻기(★4 유지) (2) log(1/z) 대신 log z² 나 log √z 로 바꾸기(★4~5 · 정수 부분 변환이 달라짐) (3) 상수항 차를 미지수로 두고 해가 존재할 조건을 묻기(★5 · I-BW 추가) (4) b ≠ 0 조건을 빼고 가능한 (a, b) 를 모두 구하게 하기(★5 · I-MI 추가)."
```

```yaml
- id: GN-ALG-55-115
  page: 55
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $\left(\frac{3}{5}\right)^{n}$ 을 소수로 나타낼 때 소수점 아래 14째 자리에서 처음으로 0 이 아닌 숫자가 나타나도록 하는 자연수 $n$ 의 개수 구하기($\log 2=0.30$, $\log 3=0.48$).
  category: "자리 조건 → 로그 정수 부분이 −14 라는 부등식 → n 의 범위 → 정수 개수"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「소수점 아래 14째 자리」라는 결과 조건을 −14 ≤ n log(3/5) < −13 이라는 부등식으로 역추적해 n 의 범위 59.09… < n ≤ 63.63… 을 얻음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "소수점 아래 자리 조건에서 지수의 개수 구하기"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    49-e17 은 n 이 주어지고 자리를 구했지만 여기는 자리가 주어지고 n 을 찾는다. log(3/5) = 0.48 − 0.70 = −0.22 를 구한 뒤 정수 부분이 −14 라는 조건을 −14 ≤ −0.22n < −13 으로 옮기고, 음수로 나누면서 부등호가 뒤집히는 처리와 등호 위치를 정확히 지켜야 개수가 4 로 떨어진다.
    통찰 1개 d2 → 실력 UP 출발점 ★4 유지. ★4 저노출 게이트는 I-BW 로 충족.
  tier: star_4
  mechanism_primary: "log(3/5) = −0.22 → 정수 부분 −14 ⟺ −14 ≤ −0.22n < −13 → 59.09… < n ≤ 63.63… → n = 60~63, 4개"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/55-115.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(3/5 → 2/5·3/4)과 자리(14)를 바꿀 수 있다. 제약: log 값을 두 자리 소수로 반올림해 쓰게 되어 있으므로 범위 양 끝이 정수에 너무 가까우면 개수가 흔들린다. 주어진 log 값의 자릿수(0.30·0.48)를 바꾸면 답도 바뀌므로 함께 조정해야 한다."
    creative: "(1) n 의 최솟값·최댓값만 묻기(★4 유지) (2) 자릿수 버전(양수 쪽)으로 뒤집기(★4) (3) 같은 자리에서 처음 나오는 숫자까지 지정하면 최고 자리 조건이 추가되어 ★5 (4) 밑을 미지수로 두고 조건을 만족하는 유리수 밑을 찾게 하기(★5)."
```

```yaml
- id: GN-ALG-55-116
  page: 55
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $\log 2=0.3010$, $\log 3=0.4771$ 일 때 $27^{100}\div 5^{200}$ 의 정수 부분이 $a$ 자리의 수이고 최고 자리의 숫자가 $b$ 일 때 $ab$ 의 값 구하기.
  category: "지수법칙으로 로그 정리 → 정수 부분으로 자릿수 → 소수 부분을 log k 사이에 끼워 최고 자리"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 3
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "소수 부분 0.33 을 log 2 = 0.3010 과 log 3 = 0.4771 사이에 끼워 최고 자리 숫자를 2 로 읽음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "최고 자리의 숫자 결정"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    27^100 = 3^300, 5^200 = (10/2)^200 으로 고쳐 300 log 3 − 200(1 − log 2) = 3.33 을 얻는다. 나눗셈 형태라 밑이 두 종류로 섞이고 지수를 정리하는 단계가 50-e18 보다 한 겹 더 붙는다.
    그 다음은 e18 과 같은 골조(정수 부분 3 → 4자리, 소수 부분 0.33 을 log 2 와 log 3 사이에 끼움)다. 통찰 1개 d2 → 실력 UP 출발점 ★4 유지. 계산 마찰은 §2.11 에 따라 ★ 상승 신호로 쓰지 않았다.
  tier: star_4
  mechanism_primary: "300 log 3 − 200 log 5 = 3.33 → a = 4 · 소수 부분 0.33 을 log 2 와 log 3 사이에 끼움 → b = 2 → ab"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/55-116.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 밑(27, 5)과 지수(100, 200)를 바꿀 수 있다. 제약: 결과 로그 값이 작은 양수여야 자릿수가 한 자리 수로 떨어져 답이 깔끔하고, 소수 부분이 log 2·log 3·log 4… 경계에서 0.01 이상 떨어져야 판정이 안전하다."
    creative: "(1) a+b 를 묻기(★4 유지 · 50-98) (2) 결과가 1보다 작아지게 지수를 조정해 소수점 아래 자리와 처음 숫자를 묻기(★4~5) (3) 최고 자리가 1 이 되도록 하는 지수를 찾게 하기(★5 · I-BW) (4) 27^100 과 5^200 각각의 자릿수 합과 몫의 자릿수를 비교하게 하기(★4)."
```

```yaml
- id: GN-ALG-55-117
  page: 55
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $\log x$ 의 정수 부분이 3 이고 $\log x$ 의 소수 부분과 $\log\sqrt{x}$ 의 소수 부분의 합이 $\frac{3}{4}$ 일 때 $\log\sqrt{x}$ 의 소수 부분 구하기.
  category: "정수 부분이 홀수 → log √x 의 소수 부분이 α/2 가 아니라 1/2 + α/2"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "log x = 3 + α 이면 log √x = 1.5 + α/2 이고 0 ≤ α < 1 에서 이 값이 1.5 이상 2 미만이므로, 정수 부분은 1 이고 소수 부분은 α/2 가 아니라 1/2 + α/2 임을 확정"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "소수 부분의 합 조건에서 다른 소수 부분 구하기(정수 부분이 홀수인 경우)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    51-100 과 발문이 거의 같지만 정수 부분이 4 가 아니라 3 이라는 한 글자 차이가 전부를 바꾼다. 습관대로 소수 부분을 α/2 로 두면 α + α/2 = 3/4 에서 α = 1/2 이 나오고 답이 1/4 로 틀린다. 실제로는 α + 1/2 + α/2 = 3/4 에서 α = 1/6 이고 구하는 소수 부분은 1/2 + 1/12 = 7/12 다.
    틀린 풀이도 0 이상 1 미만인 α 를 주기 때문에 스스로 검증할 단서가 적다. 통찰 1개 d2 → 실력 UP 출발점 ★4 유지.
  tier: star_4
  mechanism_primary: "log x = 3 + α → log √x = 1.5 + α/2, 소수 부분 1/2 + α/2 → α + 1/2 + α/2 = 3/4 → α = 1/6 → 7/12"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{7}{12}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/55-117.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정수 부분(3)·근호 차수(2)·합의 값(3/4)을 바꿀 수 있다. 제약: 정수 부분을 근호 차수로 나눈 나머지가 소수 부분에 더해지므로 매번 다시 계산해야 하고(3÷2 → 1/2 가 더해짐), 합의 값은 α 가 0 이상 1 미만이 되도록 골라야 한다."
    creative: "(1) 정수 부분을 미지수 n 으로 두고 홀짝에 따라 답이 갈리게 하기(★5 · I-MI 추가) (2) 근호 차수를 3 으로 바꿔 나머지가 1/3·2/3 로 갈리게 하기(★5) (3) 소수 부분의 합이 아니라 차·곱 조건으로(★4) (4) x 자체를 묻기(★4 유지)."
```

```yaml
- id: GN-ALG-55-118
  page: 55
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    2시간마다 3배가 되는 세균을 48시간 배양하면 세균 수가 $x$ 배가 될 때, $x$ 는 몇 자리의 정수인지 구하기($\log 3=0.48$).
  category: "배양 횟수 세기 → x = 3^24 → 자릿수 = 정수 부분 + 1"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "실생활 활용과 자릿수 결정의 결합"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    48 ÷ 2 = 24 회 배가 → x = 3^24, log x = 24×0.48 = 11.52 → 12자리. 실생활 문맥에서 지수를 24 로 세는 것이 유일한 해석 단계이고 나머지는 49-e16 의 기본형과 같다.
    [분류 이슈] 벤더 구역이 실력 UP(★4 출발)이지만 통찰 0 · M_total 5 로 이 범위 실력 UP 중 가장 가볍다. 규칙대로 −1 한 ★3 으로 라벨하되 실제 체감은 ★2 다.
  tier: star_3
  mechanism_primary: "48/2 = 24 회 → x = 3^24 → log x = 11.52 → 정수 부분 11 → 12자리"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$12$자리'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/55-118.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "배가 주기(2시간)·배율(3배)·전체 시간(48시간)을 바꿀 수 있다. 제약: 전체 시간이 주기로 나누어떨어져야 지수가 정수이고, 배율은 2·3·5 여야 주어진 log 값으로 계산된다. log 3 = 0.48 이라는 두 자리 근삿값을 쓰므로 결과가 정수에 가까우면 자릿수가 흔들린다."
    creative: "(1) 자릿수를 주고 배양 시간을 역으로 묻기(★4 · I-BW) (2) 최고 자리 숫자를 함께 묻기(★4 · 55-116) (3) 감소(반감기) 상황으로 바꿔 소수점 아래 자리를 묻기(★3~4) (4) 두 세균의 배율·주기를 다르게 주고 수가 같아지는 시각을 묻기(★5 · I-CON)."
```

## 표본 판정 요약 (42문)

- ★ 분포: ★1 6 · ★2 18 · ★3 12 · ★4 6 · ★5 0
- 통찰형 19 · 절차형 23 · premium 0
- 통찰 유형 분포(연 24회): I-EQV 13 · I-RT 4 · I-VF 3 · I-XU 2 · I-BW 2 · I-CON 1. I-SC·I-MI·I-PD·I-SYM 은 이 범위에 없다. 이 단원의 변별은 거의 전부 「소수 부분을 수치로 근사하지 않고 α 또는 log 꼴로 유지해 조건을 동치 변환하는 자리」에서 나온다.
- 구역별 ★ 중앙값: 개념원리 익히기 ★1 · 필수 예제와 그 유제 ★2 · 발전 예제와 그 유제 ★3 · STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4. 벤더 구역 신호가 실제 판정과 거의 그대로 일치했고 ±1 조정은 6문(53-103 −1 · 55-118 −1 · 48-e15 +1 · 48-95 +1 · 51-e19 +1 · 54-110 +1)에 그쳤다.
- type_hint 상위: 「상용로그의 정수 부분과 소수 부분」 5 · 「이차방정식의 두 근이 상용로그의 정수 부분·소수 부분」 4 · 「상용로그의 실생활 활용」 3 · 「최고 자리의 숫자 결정」 3 · 「주어진 log 값으로 다른 상용로그 구하기」 2 / 「자릿수 결정」 2 / 「소수점 아래 처음 0이 아닌 숫자의 자리 결정」 2 / 「소수 부분을 로그 꼴로 유지해 지수 계산하기」 2 / 「로그 식이 정수가 될 조건」 2.
- 대상층: 하위권 6 · 중하위권 16 · 중위권 12 · 중상위권 7 · 상위권 1.
- 그림: 1문(53-105 · `crop:fig-53-105.png` 상용로그표 크롭). 나머지 41문은 `none`.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-ALG-55-118 | 벤더 구역은 실력 UP(★4 출발)이나 통찰 0 · M_total 5 로 49-e16 기본형과 같은 무게. 규칙대로 −1 한 ★3 으로 라벨했지만 체감은 ★2 로 2단 차이 | ★2 / ★3 |
| GN-ALG-55-114 | 통찰 3개(EQV·CON·VF)로 v3.8 +1 후보이자 ★5 저노출 게이트도 통과하지만, 통찰 조합이 이 단원 표준 도구의 결합이라 novelty_score 0 → §2.14 게이트로 ★5 를 막고 ★4 유지 | ★4 / ★5 |
| GN-ALG-54-111 | 통찰 2개(EQV·VF)로 +1 후보지만 소문항 1개·후보 2개·M_total 7 로 같은 골조의 51-e19(★4 · M_total 9)보다 명백히 가벼워 ★3 유지. 같은 골조에 서로 다른 ★ 를 준 사례 | ★3 / ★4 |
| GN-ALG-53-108 | 통찰 0 인데 M_total 7 이라 −1 조건(M_total ≤ 5)에 걸리지 않아 STEP 2 출발점 ★3 을 유지했으나 실제 풀이는 두 줄 | ★2 / ★3 |
| GN-ALG-47-93 | 통찰 1개 d2(I-RT)라 +1 조건(2개 이상 또는 d3)에 못 미쳐 ★2 로 두었으나, 소수 부분을 log 꼴로 유지하는 착안이 없으면 풀리지 않아 체감은 ★3. 같은 골조의 54-109 는 STEP 2 구역이라 ★3 이 되어 구역 차이만으로 ★ 가 갈린 사례 | ★2 / ★3 |
| GN-ALG-46-90 | 음수 로그의 정수 부분·소수 부분 보정은 이 단원 최대 함정(Mₜ=2)이지만 통찰 라벨 기준(동치 변환이 아니라 정의 적용)에 못 미쳐 ★1. 카탈로그 설계 때 「함정 밀도」를 ★ 에 반영할지 결정 필요 | ★1 / ★2 |

### 카탈로그 차원 메모

나중에 대수 유형 카탈로그를 만들 때 참고할 사항이다.

- **따로 세워야 할 유형**: ⑴ 「상용로그의 정수 부분과 소수 부분」과 ⑵ 「상용로그 소수 부분의 활용(소수 부분이 같을 조건·합 조건·정수가 될 조건)」은 겉보기 발문이 비슷하지만 base ★ 가 다르다. ⑴ 은 정의 적용(★1~2), ⑵ 는 log x = n + α 치환 후 α 방정식을 세우는 것(★3~4)이라 한 유형으로 묶으면 안 된다.
- **따로 세워야 할 유형**: 「자릿수 결정」과 「최고 자리의 숫자 결정」도 분리한다. 앞은 정수 부분만 쓰는 절차형(★2), 뒤는 소수 부분을 log k 사이에 끼우는 I-RT 통찰형(★3~4)이다. 51-e19·54-111 처럼 소수 부분 조건에서 후보를 기각해야 하는 문항은 I-VF 가 붙는 상위 유형으로 따로 둔다.
- **통합해도 될 유형**: 「주어진 log 값으로 다른 상용로그 구하기」(46-88·46-89·53-103·47-e12·47-91)는 진수를 A×10^n 또는 2·3·10 의 곱·몫으로 분해하는 하나의 유형으로 묶어도 된다. 「상용로그의 진수 구하기」(48-e14·48-94·53-105)도 그 역방향이라 같은 유형의 하위 변형으로 둘 수 있다.
- **통합해도 될 유형**: 「실생활 활용」 4문(52-e20·52-101·52-102·54-113)은 문맥만 다르고 골조는 ⑴ 정의식 대입 ⑵ 두 상태의 비를 로그 차로 환원 둘 중 하나다. 문맥별로 유형을 나누지 말고 이 두 골조로 세운다.
- **경계 결정이 필요한 항목**: 「이차방정식의 두 근이 상용로그의 정수 부분·소수 부분」(48-e15·48-95·53-106·55-114)은 base ★ 가 3 이지만 53-106(계수 조합으로 무리수 소거 · ★2)과 55-114(역수 로그 결합 · ★4)가 양끝으로 벌어진다. 「합·곱에서 (n, α) 를 유일 분해」를 base ★3 으로 두고, 소거형은 하위 변형, 역수 결합형은 상위 변형으로 두는 것이 맞다.
- **★5 슬롯 부재**: 이 범위에는 ★5 가 없다. 상용로그만으로 ★5 를 만들려면 55-114·55-117 처럼 정수 부분의 홀짝·역수 변환에 I-MI 분기를 추가하거나, 54-110 처럼 답이 유일하게 결정되지 않는 경우를 함께 따지게 해 I-VF 를 강제해야 한다.
