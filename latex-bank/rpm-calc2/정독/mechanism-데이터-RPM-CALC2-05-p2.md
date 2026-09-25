---
name: mechanism-데이터-RPM-CALC2-05-p2
description: RPM 미적분Ⅱ 05 여러 가지 미분법(2/3 · 교과서 05-5 + 유형 01~09) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: RPM 미적분Ⅱ (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-calc2
  section: 05 여러 가지 미분법
  unit_code: CALC2-05
  part: "2/3"
  extract_range: "75~80쪽 · 0515~0552"
  total_problems: 38
  unit_total: 114
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-calc2/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-calc2/items/<id>.tex
  image_source: latex-bank/rpm-calc2/figures/ (crops.json)
---

# RPM 미적분Ⅱ · 05 여러 가지 미분법 (2/3) 정독 데이터 (v1.0)

이 파일은 RPM 미적분Ⅱ 05 여러 가지 미분법 단원의 둘째 범위(75~80쪽 · 0515~0552 · 38문항)를 다룬다. 앞쪽 5문(0515~0519)만 「교과서 05-5 역함수의 미분법」 구역이고, 나머지 33문은 전부 유형별 기본 문제 구역이다 — 유형 01 몫의 미분법 1/g(x) 꼴 3문 · 유형 02 f(x)/g(x) 꼴 4문 · 유형 03 y=x^n(n 정수) 3문 · 유형 04 삼각함수의 도함수 4문 · 유형 05 합성함수의 미분법 유리함수 4문 · 유형 06 합성함수의 미분법 지수·로그·삼각 4문 · 유형 07 합성함수의 미분법의 응용 3문 · 유형 08 y=ln|f(x)| 4문 · 유형 09 y=x^n(n 실수) 4문. 유형 UP·시험에 꼭 나오는 문제·서술형 주관식·실력 Up 구역은 이 범위에 없다. 그림도 한 장도 없다.

벤더 신호는 RPM 표준대로 읽었다. 교과서 구역 5문은 ★1 출발, 유형 구역은 대표문제(level 표시 없음) ★2 출발, level 「중하」 ★1~2 · 「중」 ★2 · 「상중」 ★3 출발이다. 출발점에서 M_total·통찰로만 ±1 조정했고, 그 결과 ★1 5문 · ★2 30문 · ★3 3문(0541 · 0548 · 0550)이 되었다. 38문 모두 전사 답을 다시 구해 일치를 확인했다.

통찰형은 8문이다. 극한 조건을 함숫값·미분계수로 옮기는 I-EQV(0537 · 0541 · 0542), 로그 성질로 분해한 뒤 미분하는 I-EQV(0540), 비대칭 차분을 두 미분계수로 쪼개는 I-EQV(0529), 접선의 방정식을 f(a)·f'(a) 로 번역하는 I-RT(0544), 미분 결과를 급수 단원의 망원합으로 넘기는 I-XU·I-PD(0548), 켤레 곱으로 거듭제곱을 소거하는 I-SYM(0550)이다. 나머지 30문은 몫·합성·역함수 미분 공식의 직접 적용이라 절차형이다.

주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 창의 변형과 ★ 변동 지점)를 채웠다. 유형 카탈로그가 없는 과목이므로 `type_id`·`base_star` 는 null 이고 `type_hint` 로 유형명을 제안했다. 같은 section 제목을 가진 연속 group(U5-M12·U5-M13)은 한 절로 묶었다.

## 문항 데이터

### 교과서 05-5 역함수의 미분법

```yaml
- id: RPM-CALC2-0515
  page: 75
  vendor_label: "교과서 05-5 역함수의 미분법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    x=y^3 (x≠0) 에서 dy/dx 를 역함수의 미분법으로 구하기.
  category: "x 를 y 로 나타낸 식 → dx/dy → 역수"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "역함수의 미분법으로 dy/dx 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x 가 y 의 식으로 주어져 있으므로 dx/dy=3y^2 를 구하고 역수를 취하면 끝. 한 단계·통찰 없음.
    x≠0 은 y≠0 즉 분모가 0 이 되지 않게 하는 조건(T-범위)이다.
    교과서 구역 ★1 출발 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "x=y^3 → dx/dy=3y^2 → dy/dx=1/(3y^2)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{dy}{dx}=\dfrac{1}{3y^2}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0515.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 3 을 다른 홀수(5, 7)나 2x=y^3 같은 계수 꼴로 바꿀 수 있다. 제약: 짝수 지수로 바꾸면 역함수가 한 갈래가 아니므로 정의역 제한을 함께 준다."
    creative: "(1) x=y^3+y 처럼 항을 더해 dx/dy 가 두 항이 되게(★1 유지) (2) 특정 점에서의 dy/dx 값을 묻기(★1) (3) dy/dx 를 x 의 식으로 다시 표현하게 하면 역함수 구하기가 붙어 ★2."
```

```yaml
- id: RPM-CALC2-0516
  page: 75
  vendor_label: "교과서 05-5 역함수의 미분법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    x=cos y (0<y<π) 에서 dy/dx 를 구하기.
  category: "삼각함수를 y 로 미분 → 역수 → csc 로 정리"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "역함수의 미분법으로 dy/dx 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    dx/dy=-sin y 의 역수 -1/sin y 를 csc y 로 바꿔 쓰면 끝.
    0<y<π 는 sin y>0 을 보장해 분모가 0 이 되지 않게 하는 조건(T-범위)이다.
    교과서 구역 ★1 출발 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "x=cos y → dx/dy=-sin y → dy/dx=-1/sin y=-csc y"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{dy}{dx}=-\csc y$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0516.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "cos 를 sin(정의역 -π/2<y<π/2)·tan(-π/2<y<π/2) 로 바꿀 수 있다. 제약: 정의역은 그 삼각함수가 일대일이고 도함수가 0 이 되지 않는 구간이어야 한다."
    creative: "(1) 답을 sec·csc·cot 중 어느 기호로 쓸지 고르게 하기(★1) (2) x=2cos y 처럼 계수를 넣기(★1) (3) dy/dx 를 x 의 식으로 바꾸게 하면 sin y=√(1-x^2) 변환이 붙어 ★2."
```

```yaml
- id: RPM-CALC2-0517
  page: 75
  vendor_label: "교과서 05-5 역함수의 미분법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    y=(x-2)^(1/4) (x>2) 의 dy/dx 를 역함수의 미분법으로 구하기.
  category: "y 로 푼 식 x=y^4+2 → dx/dy → 역수 → x 로 환원"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "역함수의 미분법으로 dy/dx 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x 에 대해 풀린 꼴이 아니므로 먼저 x=y^4+2 로 뒤집고 dx/dy=4y^3 의 역수를 취한 뒤 y 를 x 로 되돌린다.
    x>2 이므로 y>0 이고 분모 4y^3 이 0 이 아니다(T-범위).
    교과서 구역 ★1 출발 · 단계 하나 늘어 M_total 5 · 통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "y=(x-2)^(1/4) → x=y^4+2 → dx/dy=4y^3 → dy/dx=1/(4(x-2)^(3/4))"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{dy}{dx}=\dfrac{1}{4\sqrt[4]{(x-2)^3}}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0517.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "거듭제곱근의 차수 4 와 평행이동 상수 2 를 바꿀 수 있다. 제약: 짝수 차수면 정의역 x>상수 를 반드시 붙이고, 홀수 차수면 x≠상수 만 붙인다."
    creative: "(1) 답을 유리수 지수 꼴로 쓰게 하기(★1) (2) x=3 같은 한 점의 미분계수를 묻기(★1) (3) y=(ax+b)^(1/n) 처럼 매개변수를 넣으면 Mₐ 상승 ★2."
```

```yaml
- id: RPM-CALC2-0518
  page: 75
  vendor_label: "교과서 05-5 역함수의 미분법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    y=(2x+6)^(1/3) (x≠-3) 의 dy/dx 를 역함수의 미분법으로 구하기.
  category: "x=(y^3-6)/2 → dx/dy → 역수 → x 로 환원"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "역함수의 미분법으로 dy/dx 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x=(y^3-6)/2 로 뒤집으면 dx/dy=3y^2/2, 역수는 2/(3y^2) 이고 y^2=(2x+6)^(2/3) 로 되돌린다.
    안쪽 일차식의 계수 2 가 분자에 남는 것이 실수 지점이다(T-단위).
    교과서 구역 ★1 출발 · M_total 5 · 통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "y=(2x+6)^(1/3) → x=(y^3-6)/2 → dx/dy=3y^2/2 → dy/dx=2/(3(2x+6)^(2/3))"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{dy}{dx}=\dfrac{2}{3\sqrt[3]{(2x+6)^2}}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0518.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "안쪽 일차식의 계수·상수(2x+6 → 3x-1 등)와 근호 차수 3 을 바꿀 수 있다. 제약: 제외점 x≠-3 은 안쪽 식이 0 이 되는 값으로 같이 옮긴다."
    creative: "(1) 합성함수의 미분법으로도 풀게 해 두 풀이를 비교시키기(★2 · I-SC) (2) 특정 점의 미분계수를 묻기(★1) (3) 안쪽을 이차식으로 바꾸면 미분 단계가 하나 늘어 ★2."
```

```yaml
- id: RPM-CALC2-0519
  page: 75
  vendor_label: "교과서 05-5 역함수의 미분법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    f(x)=x^3+x 의 역함수에 대하여 ⑴ f^{-1}(2) ⑵ (f^{-1})'(2) 의 값.
  category: "f(a)=2 인 a 찾기 → (f^{-1})'(2)=1/f'(a)"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "역함수의 함숫값과 미분계수 (f^{-1})'(a)=1/f'(f^{-1}(a))"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f(1)=2 이므로 f^{-1}(2)=1, f'(x)=3x^2+1 에서 f'(1)=4 이므로 (f^{-1})'(2)=1/4.
    ⑴의 답을 ⑵에서 그대로 쓰게 설계된 교과서 유도형이라 통찰 요구가 없다.
    교과서 구역 ★1 출발 · M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "f(1)=2 → f^{-1}(2)=1 → (f^{-1})'(2)=1/f'(1)=1/4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '(1) $1$ \quad (2) $\dfrac{1}{4}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0519.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f(x)=x^3+x 의 계수와 물어보는 값 2 를 바꿀 수 있다. 제약: f(a)=주어진 값 의 a 가 정수로 떨어져야 하고 f 가 증가함수여야(f'>0) 역함수가 존재한다."
    creative: "(1) ⑴ 없이 (f^{-1})'(2) 만 묻기(a 를 스스로 찾아야 해 ★2 · I-BW d1) (2) f(x)=x^3+x+k 로 매개변수화(★2) (3) 역함수 그래프의 접선의 기울기를 묻기(★2 · I-RT)."
```

### 유형 01 함수의 몫의 미분법; 1/g(x) 꼴

```yaml
- id: RPM-CALC2-0520
  page: 76
  vendor_label: '유형 01 함수의 몫의 미분법; $\dfrac{1}{g(x)}$ 꼴'
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    f(x)=1/(x^3+2) 일 때 lim_{h→0} (f(1+h)-f(1))/h 의 값. 5지선다.
  category: "극한식 = f'(1) 인식 → 1/g 꼴 미분 → 대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "1/g(x) 꼴의 도함수와 미분계수(극한 정의)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    주어진 극한이 미분계수의 정의 그대로이므로 f'(1) 만 구하면 된다.
    f'(x)=-3x^2/(x^3+2)^2 에서 f'(1)=-3/9=-1/3 → ③.
    유형 대표문제(level 표시 없음) ★2 출발 · 통찰 없음이지만 M_total 5 이고 대표문제이므로 유지 → ★2.
  tier: star_2
  mechanism_primary: "극한 = f'(1) → f'(x)=-(x^3+2)'/(x^3+2)^2 → f'(1)=-1/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0520.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모의 다항식(x^3+2 → x^2+3, x^3-x+2)과 대입점 1 을 바꿀 수 있다. 제약: 대입점에서 분모가 0 이 아니어야 하고 선택지가 간단한 유리수로 떨어지게 분모의 제곱값을 맞춘다."
    creative: "(1) 극한을 (f(1+2h)-f(1))/h 로 바꿔 계수 2 를 보게 하기(★2) (2) 대칭 차분 (f(1+h)-f(1-h))/h 로 2f'(1) 만들기(★2) (3) 분모를 지수·삼각으로 바꾸면 유형 04·06 과 합쳐져 ★2 유지."
```

```yaml
- id: RPM-CALC2-0521
  page: 76
  vendor_label: '유형 01 함수의 몫의 미분법; $\dfrac{1}{g(x)}$ 꼴'
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=1/(e^x-2) 일 때 f'(ln 3) 의 값.
  category: "1/g 꼴 미분 → e^{ln3}=3 대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "1/g(x) 꼴의 도함수와 미분계수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(x)=-e^x/(e^x-2)^2 에 x=ln3 을 넣고 e^{ln3}=3 으로 정리하면 -3/(3-2)^2=-3.
    로그와 지수의 역관계만 알면 계산이 한 줄이다.
    유형 구역 「중하」 → ★1~2 출발 · M_total 5 · 통찰 없음 → ★2.
  tier: star_2
  mechanism_primary: "f'(x)=-e^x/(e^x-2)^2 → e^{ln3}=3 대입 → -3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$-3$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0521.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모의 상수 2 와 대입점 ln 3 을 바꿀 수 있다. 제약: e^{ln k}=k 가 분모 상수와 같아지면 분모가 0 이 되므로 k 와 상수를 다르게 두어야 한다."
    creative: "(1) f'(a)=값 을 주고 a 를 역으로 묻기(★2 · I-BW d1) (2) 분모를 2^x-2 로 바꿔 ln2 가 남게 하기(★2) (3) 1/(e^x-2) 의 정의역·점근선까지 묻는 통합형(★3)."
```

```yaml
- id: RPM-CALC2-0522
  page: 76
  vendor_label: '유형 01 함수의 몫의 미분법; $\dfrac{1}{g(x)}$ 꼴'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=1/(x^2+kx) 이고 f'(1)=2/9 일 때 정수 k 의 값. 5지선다.
  category: "1/g 꼴 미분 → f'(1) 식 세우기 → 이차방정식 → 정수근"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "1/g(x) 꼴 미분계수 조건에서 미정계수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(x)=-(2x+k)/(x^2+kx)^2 에서 f'(1)=-(2+k)/(1+k)^2=2/9 → 2k^2+13k+20=0 → k=-4 또는 k=-5/2.
    정수 조건으로 k=-4 만 남지만 선택지에 -5/2 가 없어 사실상 계산 확인 수준이라 I-VF 로 세지 않았다.
    유형 구역 「중」 ★2 출발 · 통찰 없음 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "f'(1)=-(2+k)/(1+k)^2=2/9 → 2k^2+13k+20=0 → 정수해 k=-4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0522.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f'(1) 의 값 2/9 와 대입점 1 을 바꿀 수 있다. 제약: 만들어지는 이차방정식이 정수근을 하나 가져야 하고, 그 k 에서 x^2+kx 가 대입점에서 0 이 되지 않아야 한다."
    creative: "(1) 선택지를 없애고 주관식으로 두 근 중 정수만 고르게 하면 I-VF d1 이 생겨 ★3 (2) f'(1)>0 같은 부등식 조건으로 바꾸기(★3) (3) 분모를 x^2+kx+1 로 바꿔 근이 무리수가 되게 하면 조건 해석이 늘어 ★3."
```

### 유형 02 함수의 몫의 미분법; f(x)/g(x) 꼴

```yaml
- id: RPM-CALC2-0523
  page: 76
  vendor_label: '유형 02 함수의 몫의 미분법; $\dfrac{f(x)}{g(x)}$ 꼴'
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    f(x)=a e^x/(e^x+b) 가 f(0)=1, f'(0)=1/2 를 만족시킬 때 ab 의 값(b>0, a·b 는 상수).
  category: "f(0) 조건 → a=1+b · 몫의 미분 → f'(0) 조건 → b 결정"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "f(x)/g(x) 꼴 미분계수 조건에서 미정계수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f(0)=a/(1+b)=1 로 a=1+b 를 얻고, 몫의 미분법으로 f'(x)=ab e^x/(e^x+b)^2 를 정리한다.
    f'(0)=ab/(1+b)^2=b/(1+b)=1/2 → b=1, a=2 → ab=2.
    분자 정리에서 e^{2x} 항이 소거되는 것이 계산의 핵심이다.
    유형 대표문제 ★2 출발 · 통찰 없음 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "f(0)=1 → a=1+b → f'(x)=ab e^x/(e^x+b)^2 → f'(0)=b/(1+b)=1/2 → ab=2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$2$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0523.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f(0)·f'(0) 의 값 1 과 1/2 를 바꿀 수 있다. 제약: b>0 이 유지되도록 f'(0) 값이 0 과 f(0) 사이가 되어야 하고, a=f(0)(1+b) 가 깔끔한 수로 떨어지게 고른다."
    creative: "(1) b>0 조건을 빼고 두 해 중 하나를 기각하게 하면 I-VF d1 · ★3 (2) 점근선 y=a 를 함께 주어 조건을 하나 대체하기(★3 · I-EQV) (3) e^x 를 2^x 로 바꿔 ln2 가 남게 하기(★2)."
```

```yaml
- id: RPM-CALC2-0524
  page: 76
  vendor_label: '유형 02 함수의 몫의 미분법; $\dfrac{f(x)}{g(x)}$ 꼴'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=cos x/(sin x+cos x) 일 때 lim_{h→0} (f(π/2+h)-f(π/2-h))/h 의 값.
  category: "대칭 차분 = 2f'(π/2) → 몫의 미분 → 대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수 몫의 도함수와 대칭 차분 극한"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    대칭 차분은 2f'(π/2) 로 환원된다(RPM 이 이 단원에서 반복하는 표준 변형이라 통찰로 세지 않았다).
    몫의 미분법으로 정리하면 분자가 -(sin^2 x+cos^2 x)=-1 로 접혀 f'(x)=-1/(sin x+cos x)^2.
    f'(π/2)=-1 이므로 답은 -2.
    유형 구역 「중」 ★2 출발 · 통찰 없음 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "대칭 차분 → 2f'(π/2) → f'(x)=-1/(sin x+cos x)^2 → 2·(-1)=-2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$-2$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0524.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "대입점 π/2 를 0·π/4·π 로 바꿀 수 있다. 제약: sin x+cos x≠0 인 점이어야 하고(x≠3π/4 등), 값이 유리수·무리수 중 어느 쪽으로 떨어지는지 확인한다."
    creative: "(1) 대칭 차분 대신 (f(π/2+2h)-f(π/2-h))/h 로 계수를 비대칭으로 만들면 I-EQV d1 · ★3 (2) 분자를 sin x 로 바꿔 f'(x)=1/(sin x+cos x)^2 을 얻게 하기(★2) (3) f(x)+g(x)=1 인 짝 함수와 묶어 도함수의 합을 묻기(★3 · I-SYM)."
```

```yaml
- id: RPM-CALC2-0525
  page: 76
  vendor_label: '유형 02 함수의 몫의 미분법; $\dfrac{f(x)}{g(x)}$ 꼴'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=(3x+2)/(x^2+5) 일 때 f'(x)>0 을 만족시키는 정수 x 의 개수. 5지선다.
  category: "몫의 미분 → 분모 양수이므로 분자 부호 → 이차부등식 → 정수 세기"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "몫의 도함수의 부호(f'(x)>0) 구간과 정수 개수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(x)=(-3x^2-4x+15)/(x^2+5)^2 이고 분모가 항상 양수이므로 부등식은 3x^2+4x-15<0 과 동치다.
    (3x-5)(x+3)<0 → -3<x<5/3 이고 정수는 -2, -1, 0, 1 의 4개 → ④.
    경계 -3 과 5/3 을 포함하지 않는 처리가 실수 지점이다(T-경계).
    유형 구역 「중」 ★2 출발 · 분모 양수 관찰은 표준 절차 → ★2.
  tier: star_2
  mechanism_primary: "f'(x) 분자 -3x^2-4x+15>0 → (3x-5)(x+3)<0 → -3<x<5/3 → 정수 4개"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0525.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자 3x+2 의 계수와 분모 상수 5 를 바꿀 수 있다. 제약: 분모는 항상 양수인 x^2+양수 꼴을 유지하고, 도함수 분자의 이차부등식 해가 정수를 셀 만한 폭이 되도록 판별식을 양수로 둔다."
    creative: "(1) f 의 최댓값·최솟값을 묻기(★3) (2) f'(x)<0 인 구간의 길이를 묻기(★2) (3) 분모를 x^2-5 로 바꾸면 정의역 제외점이 생겨 구간이 쪼개지고 I-MI d1 · ★3."
```

```yaml
- id: RPM-CALC2-0526
  page: 76
  vendor_label: '유형 02 함수의 몫의 미분법; $\dfrac{f(x)}{g(x)}$ 꼴'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    미분가능한 f 가 f(0)=-2 일 때 g(x)=(x^2+3x)/(f(x)-1) 의 g'(0) 의 값. 5지선다.
  category: "몫의 미분법 → x=0 에서 f'(0) 항이 계수 0 으로 소거 → 대입"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "일반 함수가 든 몫 g(x)=h(x)/(f(x)-k) 의 미분계수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    g'(x)=[(2x+3)(f(x)-1)-(x^2+3x)f'(x)]/(f(x)-1)^2 에 x=0 을 넣으면 x^2+3x=0 이라 f'(0) 항이 자동으로 사라진다.
    g'(0)=3·(-3)/(-3)^2=-1 → ②.
    공식을 그대로 대입하면 소거가 저절로 일어나므로 통찰로 세지 않았다.
    [분류 이슈] 벤더 「중」이나 실제 노동량은 대입 한 번 — Mₐ 3(일반 함수 f)으로만 지탱되는 ★2.
  tier: star_2
  mechanism_primary: "몫의 미분법 → x=0 에서 (x^2+3x)f'(x) 항 소거 → 3(f(0)-1)/(f(0)-1)^2=-1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0526.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f(0) 의 값 -2 와 분자 x^2+3x 의 계수를 바꿀 수 있다. 제약: 분자는 x=0 에서 0 이 되는 꼴(상수항 0)을 유지해야 f'(0) 없이 답이 결정되고, f(0)-1≠0 이어야 한다."
    creative: "(1) 분자의 상수항을 0 이 아니게 두고 f'(0) 도 함께 주면 표준 대입형(★2) (2) f'(0) 을 주지 않은 채 상수항을 남겨 답이 결정되지 않음을 묻기(★3 · I-EQV) (3) g'(0) 값을 주고 f(0) 을 역으로 묻기(★3 · I-BW)."
```

### 유형 03 y=x^n (n은 정수)의 도함수

```yaml
- id: RPM-CALC2-0527
  page: 77
  vendor_label: '유형 03 $y=x^n$ ($n$은 정수)의 도함수'
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    f(x)=(x^2-3x+5)/x 일 때 f'(5) 의 값. 5지선다.
  category: "항별로 나눠 정수 지수 꼴 → 각 항 미분 → 대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "분수식을 정수 지수 꼴로 전개해 미분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    몫의 미분법 대신 f(x)=x-3+5x^{-1} 로 나눠 두면 f'(x)=1-5x^{-2} 한 줄이다.
    f'(5)=1-5/25=4/5 → ③.
    이 유형의 취지 자체가 나누어 쓰기이므로 전략 선택으로 세지 않았다.
    유형 대표문제 ★2 출발 · 통찰 없음 · M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "f(x)=x-3+5x^{-1} → f'(x)=1-5x^{-2} → f'(5)=4/5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0527.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자의 계수(-3, 5)와 대입점 5 를 바꿀 수 있다. 제약: 대입점의 제곱이 상수항을 나누어 떨어지게 두면 선택지가 간단한 유리수가 된다."
    creative: "(1) 분모를 x^2 으로 바꿔 지수가 -1, -2 두 개 나오게 하기(★2) (2) 같은 문제를 몫의 미분법으로도 풀게 해 비교시키기(★2 · I-SC d1) (3) f'(a)=0 인 a 를 묻기(★3 · I-BW)."
```

```yaml
- id: RPM-CALC2-0528
  page: 77
  vendor_label: '유형 03 $y=x^n$ ($n$은 정수)의 도함수'
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=(x-1)(x+1)(x^2+1)/x^3 일 때 f'(-1) 의 값. 5지선다.
  category: "분자 전개 (x^4-1) → x-x^{-3} → 미분 → 대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "분수식을 정수 지수 꼴로 전개해 미분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분자를 (x^2-1)(x^2+1)=x^4-1 로 묶으면 f(x)=x-x^{-3} 이 되어 곱의 미분법이 필요 없다.
    f'(x)=1+3x^{-4} 이고 f'(-1)=1+3=4 → ③.
    유형 구역 「중하」 ★1~2 출발 · 통찰 없음 · M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "분자=x^4-1 → f(x)=x-x^{-3} → f'(x)=1+3x^{-4} → f'(-1)=4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0528.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모의 지수 3 과 대입점 -1 을 바꿀 수 있다. 제약: 분자는 곱셈 공식으로 한 덩어리가 되는 꼴(합차공식 연쇄)을 유지하고, 대입점의 짝수 거듭제곱이 1 이 되게 ±1 을 쓰면 계산이 가볍다."
    creative: "(1) 분자를 (x-1)(x+1)(x^2+1)(x^4+1) 로 한 단 더 늘리기(★2) (2) 전개하지 않고 곱의 미분법으로 풀게 해 두 경로를 비교시키기(★3 · I-SC d1) (3) f'(x)=0 인 x 를 묻기(★3)."
```

```yaml
- id: RPM-CALC2-0529
  page: 77
  vendor_label: '유형 03 $y=x^n$ ($n$은 정수)의 도함수'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=1+1/x+1/x^2+…+1/x^10 일 때 lim_{h→0} (f(1+2h)-f(1-h))/h 의 값.
  category: "비대칭 차분을 2f'(1)+f'(1) 로 분해 → 항별 미분 → 1부터 10까지 합"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "f(1) 을 더하고 빼서 (f(1+2h)-f(1))/h 와 (f(1)-f(1-h))/h 로 쪼개면 각각 2f'(1), f'(1) 이 되어 합이 3f'(1) 임을 본다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "1/x^k 합의 미분계수와 비대칭 차분 극한"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    비대칭 차분이라 대칭 차분 공식이 그대로 통하지 않고 f(1) 을 끼워 두 조각으로 나눠야 한다 → 3f'(1).
    f'(x)=-(1·x^{-2}+2x^{-3}+…+10x^{-11}) 이므로 f'(1)=-(1+2+…+10)=-55, 답은 -165.
    항이 10 개라 계산량은 있으나 합 공식으로 접히므로 Mₖ 2 수준.
    유형 구역 「중」 ★2 출발 · 통찰 1개(+1 은 2개 이상부터) → ★2.
  tier: star_2
  mechanism_primary: "차분 분해 → 3f'(1) → f'(1)=-(1+2+…+10)=-55 → -165"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$-165$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0529.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "항의 개수 10 과 차분의 계수 (2, -1) 을 바꿀 수 있다. 제약: 대입점은 1 로 두어야 1/x^k 의 미분계수가 -k 로 떨어지고, 계수 합(여기서는 2+1=3)이 최종 배수가 된다."
    creative: "(1) 대입점을 -1 로 바꿔 부호가 번갈아 나오게 하기(★3 · I-PD) (2) 항을 무한히 늘려 급수 수렴까지 묻기(★4 · I-XU) (3) 차분을 (f(1+2h)-f(1+h))/h 로 두면 계수 차 2-1=1 이 되어 감각 확인용(★2)."
```

### 유형 04 삼각함수의 도함수

```yaml
- id: RPM-CALC2-0530
  page: 77
  vendor_label: "유형 04 삼각함수의 도함수"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    f(x)=tan x/(1+sec x) 일 때 f'(π/3) 의 값.
  category: "sin·cos 로 정리 → sin x/(1+cos x) → 몫의 미분 → 대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "tan·sec 이 든 삼각함수 몫의 미분계수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    tan x/(1+sec x) 를 sin·cos 로 고치면 sin x/(1+cos x) 이고, 몫의 미분에서 분자가 cos x+1 로 접혀 f'(x)=1/(1+cos x).
    f'(π/3)=1/(1+1/2)=2/3.
    정리하지 않고 sec^2·sec tan 공식으로 바로 미분해도 같은 값이 나와 갈래 차이가 크지 않으므로 I-SC 로 세지 않았다.
    유형 대표문제 ★2 출발 · 통찰 없음 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "tan/(1+sec)=sin x/(1+cos x) → f'(x)=1/(1+cos x) → f'(π/3)=2/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{2}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0530.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "대입점 π/3 을 π/4·π/6 으로 바꿀 수 있다. 제약: 1+cos x≠0 이어야 하고 cos 값이 간단한 특수각을 쓴다."
    creative: "(1) f(x)=tan(x/2) 임을 보이고 반각과 연결하기(★3 · I-EQV) (2) 분모를 1-sec x 로 바꿔 부호를 뒤집기(★2) (3) f'(x) 를 하나의 삼각함수로 나타내게 하기(★3 · I-RT)."
```

```yaml
- id: RPM-CALC2-0531
  page: 77
  vendor_label: "유형 04 삼각함수의 도함수"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=csc x cot x 의 도함수가 -g(x)/sin^3 x 일 때 g(x) 를 구하기.
  category: "곱의 미분 → csc·cot 도함수 공식 → sin·cos 로 통분 → 분자 읽기"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "csc·cot 곱의 도함수 정리"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    곱의 미분법으로 f'(x)=-csc x cot^2 x-csc^3 x 를 얻은 뒤 sin·cos 로 바꿔 통분하면 -(cos^2 x+1)/sin^3 x.
    따라서 g(x)=cos^2 x+1.
    csc 와 cot 의 도함수 부호를 모두 음으로 처리하는 것이 실수 지점이다(T-부호).
    유형 구역 「중하」 출발 · 통찰 없음 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "곱의 미분 → -csc x(cot^2 x+csc^2 x) → 통분 → g(x)=cos^2 x+1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$g(x)=\cos^2 x+1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0531.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모로 제시한 sin^3 x 의 지수를 바꾸면 g 의 꼴이 달라진다. 제약: 실제 도함수의 분모 차수와 맞아야 g 가 다항식 꼴로 남는다."
    creative: "(1) f(x)=sec x tan x 로 바꿔 cos^3 x 분모형으로(★2) (2) g(x) 대신 f'(π/4) 값만 묻기(★2) (3) g(x) 를 cos 만의 식으로 쓰게 하고 최댓값까지 묻기(★3)."
```

```yaml
- id: RPM-CALC2-0532
  page: 77
  vendor_label: "유형 04 삼각함수의 도함수"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=2tan x+a sec x 이고 f'(π/4)=8 일 때 상수 a 의 값. 5지선다.
  category: "tan·sec 도함수 공식 → π/4 대입 → 일차방정식"
  M: {s: 1, k: 2, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "tan·sec 선형결합의 미분계수 조건에서 미정계수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(x)=2sec^2 x+a sec x tan x 에 x=π/4(sec=√2, tan=1)를 넣으면 4+√2 a=8 → a=2√2 → ③.
    무리수 계수를 유리화하는 마지막 정리만 주의하면 된다.
    유형 구역 「중」 ★2 출발 · 통찰 없음 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "f'(x)=2sec^2 x+a sec x tan x → x=π/4 대입 → 4+√2 a=8 → a=2√2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0532.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 2 와 f'(π/4) 의 값 8 을 바꿀 수 있다. 제약: 대입점은 sec·tan 값이 특수각이어야 하고, 선택지가 무리수로 떨어지는지 유리수로 떨어지는지 미리 맞춘다."
    creative: "(1) 대입점을 π/3 으로 바꿔 sec=2, tan=√3 이 되게(★2) (2) f'(π/4)=f(π/4) 같은 자기참조 조건으로 바꾸기(★3 · I-CON) (3) a 의 범위 조건(f'>0 항상)으로 바꾸면 ★3."
```

```yaml
- id: RPM-CALC2-0533
  page: 77
  vendor_label: "유형 04 삼각함수의 도함수"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    f(x)=a e^x+b (x<0), 3tan x (x≥0) 가 x=0 에서 미분가능할 때 ab 의 값.
  category: "x=0 에서 연속 → a+b=0 · 좌우 미분계수 일치 → a=3"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구간별로 정의된 함수(지수·tan)의 미분가능 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    미분가능 → 연속이므로 a+b=3tan 0=0, 좌미분계수 a e^0=a 와 우미분계수 3sec^2 0=3 이 같아야 하므로 a=3, b=-3 → ab=-9.
    연속 조건을 빠뜨리고 미분계수만 맞추는 것이 전형적 실수다(T-경계).
    유형 구역 「중」·서술형 태그 ★2 출발 · 통찰 없음 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "연속 a+b=0 · 미분계수 a=3sec^2 0=3 → b=-3 → ab=-9"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$-9$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0533.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "오른쪽 식의 계수 3 과 왼쪽 식의 꼴(a e^x+b → a·2^x+b)을 바꿀 수 있다. 제약: 접합점에서 두 식의 값과 도함수가 모두 정의되어야 하고, tan 은 접합점이 π/2 의 홀수배가 아니어야 한다."
    creative: "(1) 접합점을 x=π/4 로 옮겨 tan 값이 1 이 되게(★3) (2) a, b 대신 a+b 의 최댓값을 묻는 부등식형(★3) (3) 오른쪽을 3tan x+c 로 두어 미지수를 셋으로 늘리면 조건 하나가 더 필요해 ★3 · I-CON."
```

### 유형 05 합성함수의 미분법; 유리함수

```yaml
- id: RPM-CALC2-0534
  page: 78
  vendor_label: "유형 05 합성함수의 미분법; 유리함수"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    f(x)=((3x+a)/(x-1))^3 이고 f'(0)=-6 일 때 정수 a 의 값. 5지선다.
  category: "합성함수 미분 3u^2 u' → x=0 대입 → 삼차방정식 정수근"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "(유리식)^n 의 미분계수 조건에서 미정계수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    u=(3x+a)/(x-1) 로 두면 u(0)=-a, u'(x)=-(3+a)/(x-1)^2 이라 u'(0)=-(3+a).
    f'(0)=3u(0)^2 u'(0)=-3a^2(3+a)=-6 → a^3+3a^2-2=0 → (a+1)(a^2+2a-2)=0 이고 정수근은 a=-1 → ②.
    나머지 두 근 -1±√3 은 정수가 아니어서 자동 배제된다.
    유형 대표문제 ★2 출발 · 통찰 없음 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "f'(0)=3u(0)^2 u'(0)=-3a^2(3+a)=-6 → a^3+3a^2-2=0 → a=-1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0534.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 3 과 f'(0) 의 값 -6 을 바꿀 수 있다. 제약: 만들어지는 삼차방정식이 정수근을 하나 가져야 하고(조립제법으로 찾을 수 있게 상수항의 약수), 분모 x-1 이 대입점에서 0 이 아니어야 한다."
    creative: "(1) 선택지를 없애고 정수근을 스스로 찾게 하면 조립제법 단계가 살아 ★3 (2) 지수를 2 로 낮춰 이차방정식이 되게(★2) (3) 안쪽을 (3x+a)/(x-a) 로 두어 a 가 두 군데 들어가게 하면 ★3."
```

```yaml
- id: RPM-CALC2-0535
  page: 78
  vendor_label: "유형 05 합성함수의 미분법; 유리함수"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=(x^2+2x+2)^3 일 때 lim_{x→0} (f(x)-8)/x 의 값. 5지선다.
  category: "f(0)=8 확인 → 극한 = f'(0) → 합성함수 미분 → 대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "다항식 거듭제곱의 미분계수(극한 정의)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f(0)=2^3=8 이므로 주어진 극한은 미분계수의 정의 (f(x)-f(0))/(x-0) 그대로다.
    f'(x)=3(x^2+2x+2)^2(2x+2) 이고 f'(0)=3·4·2=24 → ①.
    8 이 f(0) 임을 먼저 확인하는 한 단계만 붙는다.
    유형 구역 「중하」 출발 · 통찰 없음 · M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "f(0)=8 → 극한=f'(0) → f'(0)=3·(2)^2·2=24"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0535.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "안쪽 이차식의 상수항과 지수 3, 그리고 극한의 대입점 0 을 바꿀 수 있다. 제약: 빼는 상수는 반드시 f(대입점) 과 같아야 미분계수 정의가 되고, 아니면 극한이 발산한다."
    creative: "(1) 빼는 상수를 일부러 f(0) 과 다르게 두어 발산을 판단하게 하기(★3 · I-EQV) (2) 극한을 (f(x)-8)/(x^2) 로 바꿔 이계 감각을 묻기(★3) (3) 안쪽을 x^2+2x+2=(x+1)^2+1 로 완전제곱해 최솟값과 엮기(★3)."
```

```yaml
- id: RPM-CALC2-0536
  page: 78
  vendor_label: "유형 05 합성함수의 미분법; 유리함수"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=4x/(3x^2+1), g(x)=x^3-4x+1 이고 h=f∘g 일 때 h'(-2) 의 값.
  category: "g(-2)·g'(-2) 계산 → f' 를 그 점에서 → 연쇄법칙 곱"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "유리함수와 다항함수의 합성 (f∘g)'(a)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    g(-2)=1, g'(-2)=8 을 먼저 구하고, f'(x)=(4-12x^2)/(3x^2+1)^2 에서 f'(1)=-8/16=-1/2.
    h'(-2)=f'(g(-2))g'(-2)=(-1/2)·8=-4.
    f' 를 x=-2 가 아니라 g(-2)=1 에서 계산해야 하는 것이 유일한 함정이다(T-표기).
    유형 구역 「중」 ★2 출발 · 통찰 없음 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "g(-2)=1, g'(-2)=8 → f'(1)=-1/2 → h'(-2)=f'(1)g'(-2)=-4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$-4$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0536.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "g 의 계수와 대입점 -2 를 바꿀 수 있다. 제약: g(대입점) 이 f 의 분모를 0 으로 만들지 않아야 하고, f'(g(a)) 가 간단한 유리수가 되도록 g(a) 를 0 이나 ±1 로 맞추면 좋다."
    creative: "(1) h'(-2) 를 주고 g 의 계수를 역으로 묻기(★3 · I-BW) (2) (g∘f)'(0) 로 순서를 뒤집어 합성 순서를 구별시키기(★2) (3) f 를 삼각·지수로 바꾸면 유형 06 과 통합(★2)."
```

```yaml
- id: RPM-CALC2-0537
  page: 78
  vendor_label: "유형 05 합성함수의 미분법; 유리함수"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    미분가능한 f 가 모든 실수 x 에서 f(2x-3)=x^3-x^2+x-1 을 만족시킬 때 f'(1) 의 값.
  category: "관계식 양변 미분 → 2f'(2x-3) → 2x-3=1 인 x=2 대입"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "f 를 직접 구하지 않고 양변을 x 로 미분해 2f'(2x-3) 꼴을 만든 뒤 2x-3=1 이 되는 x=2 를 대입하는 것으로 조건을 바꿔 읽는다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "f(ax+b)=… 관계식 양변 미분으로 f'(k) 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    양변을 x 로 미분하면 2f'(2x-3)=3x^2-2x+1 이고, f'(1) 을 쓰려면 2x-3=1 즉 x=2 를 넣어야 한다.
    2f'(1)=12-4+1=9 → f'(1)=9/2.
    안쪽 함수의 계수 2 가 좌변에 남는다는 점이 이 유형의 핵심 실수 지점이다(T-단위).
    t=(2x-3) 로 치환해 f(t) 를 직접 구하는 경로도 있으나 계산량만 늘어 갈래 비교가 성립하지 않는다.
    유형 구역 「중」 ★2 출발 · 통찰 1개 → ★2.
  tier: star_2
  mechanism_primary: "양변 미분 → 2f'(2x-3)=3x^2-2x+1 → x=2 대입 → f'(1)=9/2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{9}{2}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0537.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "안쪽 일차식 2x-3 의 계수·상수와 우변 삼차식의 계수, 그리고 묻는 점 1 을 바꿀 수 있다. 제약: 2x-3=묻는 점 의 해 x 가 간단한 수로 떨어져야 한다."
    creative: "(1) f(x^2+1)=… 처럼 안쪽을 이차식으로 두면 대응하는 x 가 둘이 되어 I-MI d1 · ★3 (2) f(2x-3) 대신 (f∘g)(x)=… 로 두고 g 를 주기(★3) (3) f(1) 과 f'(1) 을 모두 묻기(★2)."
```

### 유형 06 합성함수의 미분법; 지수·로그·삼각함수

```yaml
- id: RPM-CALC2-0538
  page: 78
  vendor_label: "유형 06 합성함수의 미분법; 지수·로그·삼각함수"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    f(x)=2^{3x}, g(x)=sin 2x, h=f∘g 일 때 h'(π) 의 값. 5지선다.
  category: "h(x)=2^{3sin2x} → 지수·삼각 연쇄미분 → x=π 대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수와 삼각함수의 합성 (f∘g)'(a)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    h(x)=2^{3sin 2x} 이므로 h'(x)=2^{3sin2x}·ln2·3·2cos 2x.
    x=π 에서 sin 2π=0 이라 2^0=1, cos 2π=1 이므로 h'(π)=6 ln 2 → ⑤.
    밑 2 의 ln 2 와 안쪽 계수 3, 2 를 모두 곱해야 하는 것이 실수 지점이다(T-단위).
    유형 대표문제 ★2 출발 · 통찰 없음 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "h(x)=2^{3sin2x} → h'(x)=6 ln2·cos2x·2^{3sin2x} → h'(π)=6 ln 2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0538.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 2, 지수 계수 3, 안쪽 각의 계수 2, 대입점 π 를 바꿀 수 있다. 제약: 대입점에서 sin 값이 0 이나 ±1 같은 특수값이어야 2^{…} 가 간단히 떨어진다."
    creative: "(1) 합성 순서를 g∘f 로 바꿔 sin(2·2^{3x}) 로 만들기(★3) (2) 밑을 e 로 바꿔 ln 2 를 없애기(★2) (3) h'(a)=0 인 a 를 묻기(★3 · I-BW)."
```

```yaml
- id: RPM-CALC2-0539
  page: 78
  vendor_label: "유형 06 합성함수의 미분법; 지수·로그·삼각함수"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=cos^4 2x 일 때 f'(π/3) 의 값.
  category: "거듭제곱·삼각·안쪽 각 3중 연쇄미분 → 특수각 대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수 거듭제곱 cos^n(ax) 의 미분계수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(x)=4cos^3 2x·(-sin 2x)·2=-8cos^3 2x sin 2x.
    x=π/3 이면 2x=2π/3 이라 cos=-1/2, sin=√3/2 이므로 f'(π/3)=-8·(-1/8)·(√3/2)=√3/2.
    세 겹 연쇄에서 계수 2 를 빠뜨리거나 cos^3 의 부호를 놓치는 것이 실수 지점이다(T-부호).
    유형 구역 「중하」 출발 · 통찰 없음 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "f'(x)=-8cos^3 2x sin 2x → 2x=2π/3 대입 → √3/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{\sqrt{3}}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0539.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 4, 안쪽 각의 계수 2, 대입점 π/3 을 바꿀 수 있다. 제약: 2x 가 특수각이 되도록 대입점을 고르고, 홀수 지수로 바꾸면 부호가 뒤집히는 점을 확인한다."
    creative: "(1) sin^4 2x 로 바꿔 부호가 반대가 되게(★2) (2) 배각공식으로 cos^4 을 낮춰 쓴 뒤 미분해 결과가 같음을 확인시키기(★3 · I-SC) (3) f'(x)=0 인 x 의 개수를 구간에서 묻기(★3 · I-MI)."
```

```yaml
- id: RPM-CALC2-0540
  page: 78
  vendor_label: "유형 06 합성함수의 미분법; 지수·로그·삼각함수"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    y=ln√((1-cos x)/(1+cos x)) 의 x=π/6 에서의 미분계수.
  category: "로그 성질로 분해 → 두 로그의 미분 → 통분해 1/sin x → 대입"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "ln√(A/B) 를 (1/2)(ln A - ln B) 로 먼저 분해해야 근호와 분수를 미분하지 않고 지나갈 수 있다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "로그·삼각 합성함수를 로그 성질로 분해해 미분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y=(1/2){ln(1-cos x)-ln(1+cos x)} 로 고치면 y'=(1/2)sin x{1/(1-cos x)+1/(1+cos x)}=sin x/sin^2 x=1/sin x.
    x=π/6 에서 1/sin(π/6)=2.
    분해하지 않고 근호 안의 분수를 그대로 미분하면 계산량이 몇 배가 되므로 분해가 실질적 관문이다.
    유형 구역 「중」 ★2 출발 · 통찰 1개 → ★2.
  tier: star_2
  mechanism_primary: "로그 분해 → y'=(1/2){sin x/(1-cos x)+sin x/(1+cos x)}=1/sin x → 2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$2$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0540.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "대입점 π/6 을 π/3·π/2 로 바꿀 수 있다. 제약: sin x≠0 이고 1±cos x≠0 이어야 하며, 절댓값 없이 쓰려면 진수가 양인 구간(0<x<π)을 전제한다."
    creative: "(1) y=ln√((1+sin x)/(1-sin x)) 로 바꿔 답이 sec x 가 되게(★2) (2) y' 를 한 삼각함수로 나타내라고 묻기(★3 · I-RT) (3) 진수의 절댓값을 붙여 정의역 전체로 확장하면 구간 분기가 생겨 ★3 · I-MI."
```

```yaml
- id: RPM-CALC2-0541
  page: 78
  vendor_label: "유형 06 합성함수의 미분법; 지수·로그·삼각함수"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    최고차항의 계수가 1 인 이차함수 f 와 g(x)=e^{f(x)} 가 lim_{x→0} (g(2x)-1)/(5x)=1 을 만족시킬 때 f(-2) 의 값.
  category: "극한 유한 → g(0)=1 → f(0)=0 · 2x 배율 보정 → g'(0)=5/2 → f'(0) 결정"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "분모가 0 으로 가는데 극한이 유한하므로 분자도 0 이어야 한다 → g(0)=1 → e^{f(0)}=1 → f(0)=0 이라는 숨은 조건을 끌어낸다"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "(g(2x)-g(0))/(5x) 를 (2/5)·(g(2x)-g(0))/(2x) 로 배율 보정해 g'(0) 의 정의로 환원한다"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "e^{f(x)} 의 극한 조건에서 이차함수 f 결정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    g(0)=1 에서 f(0)=0, 배율 보정으로 (2/5)g'(0)=1 → g'(0)=5/2 이고 g'(x)=f'(x)e^{f(x)} 이므로 f'(0)=5/2.
    f(x)=x^2+(5/2)x 이므로 f(-2)=4-5=-1.
    숨은 조건 f(0)=0 을 못 찾으면 미지수가 하나 남아 풀리지 않는다.
    유형 구역 「상중」 ★3 출발 · 통찰 2개로 +1 후보였으나 도구가 모두 표준이라 ★3 유지.
    [분류 이슈] 통찰 2개(I-EQV d2·d1) 기준으로는 ★4 후보 — 카탈로그 작성 시 상중 유형의 상한을 함께 정할 것.
  tier: star_3
  mechanism_primary: "분자→0 → f(0)=0 → (2/5)g'(0)=1 → f'(0)=5/2 → f(x)=x^2+(5/2)x → f(-2)=-1"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$-1$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0541.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모의 계수 5, 안쪽 배율 2, 극한값 1, 묻는 점 -2 를 바꿀 수 있다. 제약: 최고차항 계수를 1 로 고정하면 f 는 f(0)=0, f'(0)=(극한값)(분모계수)/(배율) 두 조건으로 결정되므로 f'(0) 이 깔끔한 수가 되게 고른다."
    creative: "(1) f 를 삼차함수로 올려 조건을 하나 더 주기(★4 · I-CON) (2) g(x)=e^{f(x)} 대신 g(x)=ln f(x) 로 바꿔 진수 조건을 추가하기(★4 · I-VF) (3) 극한을 (g(2x)-g(x))/x 로 바꾸면 두 미분계수 차로 환원돼 ★4."
```

### 유형 07 합성함수의 미분법의 응용

```yaml
- id: RPM-CALC2-0542
  page: 79
  vendor_label: "유형 07 합성함수의 미분법의 응용"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    lim_{x→2} (f(x)+1)/(x-2)=5, lim_{x→-1} (g(x)-2)/(x+1)=3 일 때 y=(g∘f)(x) 의 x=2 에서의 미분계수.
  category: "극한 조건 → f(2)=-1, f'(2)=5 · g(-1)=2, g'(-1)=3 → 연쇄법칙"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "분모가 0 으로 가는 유한 극한이므로 분자도 0 → f(2)=-1 을 먼저 읽어내고, 그 뒤 같은 식이 미분계수의 정의임을 확인해 f'(2)=5 로 옮긴다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "극한 조건으로 주어진 f, g 의 합성함수 미분계수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 극한에서 f(2)=-1, f'(2)=5 와 g(-1)=2, g'(-1)=3 을 읽는다.
    (g∘f)'(2)=g'(f(2))f'(2)=g'(-1)·5=15.
    f(2)=-1 이 g 쪽 조건의 대입점 -1 과 맞물리게 설계된 문항이다.
    유형 대표문제 ★2 출발 · 통찰 1개(+1 은 2개 이상부터) → ★2.
  tier: star_2
  mechanism_primary: "f(2)=-1, f'(2)=5 · g'(-1)=3 → (g∘f)'(2)=g'(-1)f'(2)=15"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$15$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0542.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 극한값 5, 3 과 대입점 2, -1, 그리고 분자의 상수 1, 2 를 바꿀 수 있다. 제약: f(2) 의 값이 g 쪽 극한의 대입점과 같아야 합성이 연결된다."
    creative: "(1) f(2) 와 g 의 대입점을 일부러 어긋나게 두고 구할 수 없음을 판단하게 하기(★3 · I-EQV) (2) (f∘g)'(-1) 로 순서를 뒤집기(★2) (3) h(x)=f(x)g(x) 의 미분계수까지 함께 묻기(★3)."
```

```yaml
- id: RPM-CALC2-0543
  page: 79
  vendor_label: "유형 07 합성함수의 미분법의 응용"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    미분가능한 f 가 f(3)=1, f'(3)=3 일 때 y=x^2{f(x)}^3 의 x=3 에서의 미분계수. 5지선다.
  category: "곱의 미분 + {f(x)}^3 합성미분 → x=3 대입"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "x^2{f(x)}^3 꼴 곱·합성의 미분계수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y'=2x{f(x)}^3+3x^2{f(x)}^2 f'(x) 에 x=3 을 넣으면 6·1+27·1·3=87 → ③.
    곱의 미분과 합성함수 미분을 한 번씩 섞어 쓰는 표준형이다.
    {f(x)}^3 을 미분할 때 f'(x) 를 빠뜨리는 것이 실수 지점이다(T-표기).
    유형 구역 「중하」 출발 · 통찰 없음 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "y'=2x{f}^3+3x^2{f}^2 f' → x=3 대입 → 6+81=87"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0543.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f(3), f'(3) 의 값과 x^2·{f}^3 의 지수 조합을 바꿀 수 있다. 제약: f(3) 을 1 로 두면 거듭제곱이 사라져 계산이 가볍고, 다른 값으로 두면 Mₖ 가 오른다."
    creative: "(1) y=x^2/{f(x)}^3 로 몫을 섞어 유형 02 와 통합(★3) (2) y'(3)=0 이 되도록 f'(3) 을 역으로 묻기(★3 · I-BW) (3) f(3)=0 으로 두어 항 하나가 소거되게 하기(★2)."
```

```yaml
- id: RPM-CALC2-0544
  page: 79
  vendor_label: "유형 07 합성함수의 미분법의 응용"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    y=f(x) 위의 점 (-1, 4) 에서의 접선이 y=-3x+1, y=g(x) 위의 점 (-1, -1) 에서의 접선이 y=3x+2 일 때 lim_{x→-1} (f(g(x))-4)/(x+1) 의 값. 5지선다.
  category: "접선 → f(-1)=4, f'(-1)=-3 · g(-1)=-1, g'(-1)=3 → 극한 = (f∘g)'(-1)"
  M: {s: 3, k: 1, a: 3, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "접선의 방정식이라는 기하 정보를 함숫값 f(a) 와 미분계수 f'(a) 라는 대수 정보로 번역한다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "접선의 방정식에서 읽은 f(a), f'(a) 로 합성함수 미분계수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    접선에서 f(-1)=4, f'(-1)=-3, g(-1)=-1, g'(-1)=3 을 읽는다.
    g(-1)=-1 이므로 f(g(-1))=f(-1)=4 이고 주어진 극한은 (f∘g)'(-1)=f'(-1)g'(-1)=-9 → ③.
    분자의 4 가 f(g(-1)) 과 같다는 확인이 극한을 미분계수로 바꾸는 전제다.
    유형 구역 「중」 ★2 출발 · 통찰 1개 → ★2.
  tier: star_2
  mechanism_primary: "접선 → f(-1)=4, f'(-1)=-3, g(-1)=-1, g'(-1)=3 → (f∘g)'(-1)=-9"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0544.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 접선의 기울기 -3, 3 과 접점의 좌표를 바꿀 수 있다. 제약: g 의 접점의 y좌표가 f 의 접점의 x좌표와 같아야 합성이 연결되고, 접점이 접선 위에 있는지(대입 검산) 확인한다."
    creative: "(1) 접선 대신 법선의 방정식을 주기(★3 · I-RT d2) (2) g∘f 로 순서를 뒤집어 접점 연결이 끊기게 하고 판단시키기(★3) (3) 접선 그래프만 그림으로 주고 식을 읽게 하기(★3)."
```

### 유형 08 y=ln|f(x)|의 도함수

```yaml
- id: RPM-CALC2-0545
  page: 79
  vendor_label: '유형 08 $y=\ln|f(x)|$의 도함수'
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    f(x)=ln|x^2-7| 일 때 lim_{h→0} (f(3+h)-f(3-h))/h 의 값.
  category: "대칭 차분 = 2f'(3) → ln|f| 도함수 공식 → 대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "ln|f(x)| 의 도함수와 대칭 차분 극한"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    대칭 차분은 2f'(3) 으로 환원되고, f'(x)=2x/(x^2-7) 이므로 f'(3)=6/2=3, 답은 6.
    절댓값이 있어도 도함수는 f'/f 로 같다는 공식 확인이 이 유형의 취지다.
    유형 대표문제 ★2 출발 · 통찰 없음 · M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "대칭 차분 → 2f'(3) → f'(x)=2x/(x^2-7) → 2·3=6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$6$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0545.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "진수의 상수 7 과 대입점 3 을 바꿀 수 있다. 제약: 대입점에서 x^2-상수 ≠ 0 이어야 하고, 분모가 작은 정수가 되게 상수를 고르면 답이 정수로 떨어진다."
    creative: "(1) 대입점을 진수가 음수인 구간(예: x=2)으로 옮겨 절댓값의 역할을 부각시키기(★3 · I-EQV) (2) 진수를 삼차식으로 올리기(★2) (3) f'(x)=0 인 점과 정의역 제외점을 함께 묻기(★3 · I-MI)."
```

```yaml
- id: RPM-CALC2-0546
  page: 79
  vendor_label: '유형 08 $y=\ln|f(x)|$의 도함수'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=ln|cos^3(x/2)| 일 때 f'(π/3) 의 값.
  category: "로그 성질로 지수 3 을 앞으로 → ln|cos(x/2)| 미분 → -(3/2)tan(x/2) → 대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "ln|f(x)^n| 을 로그 성질로 분해해 미분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f(x)=3 ln|cos(x/2)| 이므로 f'(x)=3·(-sin(x/2)·(1/2))/cos(x/2)=-(3/2)tan(x/2).
    x=π/3 이면 x/2=π/6 이라 tan=√3/3 이고 f'(π/3)=-√3/2.
    지수를 앞으로 빼는 것은 이 유형의 표준 첫 단계라 통찰로 세지 않았다.
    유형 구역 「중」 ★2 출발 · 통찰 없음 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "f=3ln|cos(x/2)| → f'=-(3/2)tan(x/2) → x=π/3 → -√3/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-\dfrac{\sqrt{3}}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0546.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 3, 안쪽 각의 계수 1/2, 대입점 π/3 을 바꿀 수 있다. 제약: x/2 가 특수각이 되도록 대입점을 고르고, cos(x/2)≠0 이어야 한다."
    creative: "(1) sin 으로 바꿔 답이 cot 꼴이 되게(★2) (2) 지수를 미지수 n 으로 두고 f'(π/3) 값에서 n 을 역으로 묻기(★3 · I-BW) (3) 로그 분해 없이 합성함수 미분만으로 풀게 해 계산량을 비교시키기(★3 · I-SC)."
```

```yaml
- id: RPM-CALC2-0547
  page: 79
  vendor_label: '유형 08 $y=\ln|f(x)|$의 도함수'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=4log_3|3x-1| 이고 f'(a)=-6/ln 3 일 때 상수 a 의 값.
  category: "밑 변환으로 ln 꼴 → f'(x)=12/((3x-1)ln3) → 조건식 → 일차방정식"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "log_a|f(x)| 의 미분계수 조건에서 미정계수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    log_3|3x-1|=ln|3x-1|/ln 3 이므로 f'(x)=12/((3x-1)ln 3).
    f'(a)=-6/ln 3 에서 12/(3a-1)=-6 → 3a-1=-2 → a=-1/3.
    이때 3a-1=-2<0 이라 절댓값 덕분에 정의된다는 점이 이 유형의 포인트다.
    유형 구역 「중」 ★2 출발 · 통찰 없음 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "f'(x)=12/((3x-1)ln3) → 12/(3a-1)=-6 → a=-1/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-\dfrac{1}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0547.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 4, 밑 3, 진수의 일차식 3x-1, 조건값 -6/ln 3 을 바꿀 수 있다. 제약: 3a-1 이 정수로 떨어지게 조건값을 고르고, a 가 진수를 0 으로 만들지 않아야 한다."
    creative: "(1) 조건을 f'(a)>0 인 a 의 범위로 바꾸기(★3) (2) 밑을 미지수로 두고 밑을 묻기(★3 · I-BW) (3) 절댓값을 빼고 정의역을 제한해 절댓값의 역할을 대비시키기(★2)."
```

```yaml
- id: RPM-CALC2-0548
  page: 79
  vendor_label: '유형 08 $y=\ln|f(x)|$의 도함수'
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=ln|x^2-1| 일 때 무한급수 Σ_{n=2}^∞ 2f'(n)/n 의 값.
  category: "f'(n)=2n/(n^2-1) → 일반항 4/((n-1)(n+1)) → 부분분수 → 망원합"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "미분법으로 얻은 f'(n) 을 수열의 급수로 넘겨 부분합의 극한(급수 단원 도구)으로 처리해야 한다 — 두 단원의 도구가 모두 필요"
    - step: 2
      type: I-PD
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "일반항 4/((n-1)(n+1)) 을 2{1/(n-1)-1/(n+1)} 로 쪼개면 두 칸 건너 소거되는 망원 구조가 드러난다"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "ln|f(x)| 의 도함수로 만든 무한급수(망원합)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f'(x)=2x/(x^2-1) 이므로 2f'(n)/n=4/(n^2-1)=2{1/(n-1)-1/(n+1)}.
    부분합은 2{(1+1/2)-(1/N+1/(N+1))} 이고 N→∞ 에서 2·(3/2)=3.
    두 칸 건너 소거라 앞에서 두 항이 남는다는 점이 실수 지점이다(T-경계).
    유형 구역 「상중」 ★3 출발 · 통찰 2개로 +1 후보였으나 망원합 자체가 급수 단원 표준이라 ★3 유지.
    [분류 이슈] 유형 08 구역이지만 실제 골조의 무게중심은 무한급수 — 카탈로그에서 미분 유형과 급수 유형 중 어디에 둘지 결정 필요.
  tier: star_3
  mechanism_primary: "f'(n)=2n/(n^2-1) → 일반항 2{1/(n-1)-1/(n+1)} → 망원합 → 3"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$3$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0548.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "진수의 상수 1, 급수 앞 계수 2, 시작항 n=2 를 바꿀 수 있다. 제약: 시작항은 진수가 0 이 되는 n=1 을 피해야 하고, 부분분수의 간격(여기서는 2)이 남는 항의 개수를 정한다."
    creative: "(1) 진수를 x^2-4 로 바꿔 부분분수 간격이 4 가 되게 하면 남는 항이 늘어 ★4 (2) 급수의 값을 주고 진수의 상수를 역으로 묻기(★4 · I-BW) (3) 유한합 Σ_{n=2}^{10} 으로 바꾸면 극한이 빠져 ★2."
```

### 유형 09 y=x^n (n은 실수)의 도함수

```yaml
- id: RPM-CALC2-0549
  page: 80
  vendor_label: '유형 09 $y=x^n$ ($n$은 실수)의 도함수'
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    f(x)=((2x-1)^5)^(1/3) 일 때 lim_{x→1} (f(x)-f(1))/(x-1) 의 값. 5지선다.
  category: "유리수 지수 5/3 으로 고치기 → 합성함수 미분 → x=1 대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "유리수 지수 (ax+b)^{p/q} 의 미분계수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    주어진 극한이 f'(1) 의 정의이고 f(x)=(2x-1)^{5/3} 이므로 f'(x)=(10/3)(2x-1)^{2/3}.
    x=1 에서 2x-1=1 이라 f'(1)=10/3 → ⑤.
    근호를 유리수 지수로 바꾸는 첫 단계가 이 유형의 전부다.
    유형 대표문제 ★2 출발 · 통찰 없음 · M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "f(x)=(2x-1)^{5/3} → f'(x)=(10/3)(2x-1)^{2/3} → f'(1)=10/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0549.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 차수 3, 안쪽 지수 5, 일차식 2x-1, 대입점 1 을 바꿀 수 있다. 제약: 대입점에서 안쪽 일차식이 1 이 되게 두면 거듭제곱이 사라져 답이 계수만 남는다."
    creative: "(1) 대입점에서 안쪽이 0 이 되게 두어 미분불가능을 판단시키기(★3 · I-EQV) (2) 지수를 음의 유리수로 바꾸기(★2) (3) f'(a)=값 에서 a 를 역으로 묻기(★3 · I-BW)."
```

```yaml
- id: RPM-CALC2-0550
  page: 80
  vendor_label: '유형 09 $y=x^n$ ($n$은 실수)의 도함수'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=(x+√(1+x^2))^10 에 대하여 f'(1)=a, f'(-1)=b 일 때 ab 의 값.
  category: "도함수를 f(x) 배로 정리 → f'(±1) → 켤레 곱 (√2+1)(√2-1)=1 로 소거"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "1+x/√(1+x^2) 를 (x+√(1+x^2))/√(1+x^2) 로 묶으면 f'(x)=10 f(x)/√(1+x^2) 로 접혀 거듭제곱 지수가 10 으로 유지된다"
    - step: 2
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "a 와 b 를 따로 계산하지 않고 (√2+1)(√2-1)=1 인 켤레 대칭을 이용해 10 제곱끼리 곱하면 1 로 소거된다"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "무리식 거듭제곱의 도함수와 켤레 곱"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f'(x)=10(x+√(1+x^2))^9·(1+x/√(1+x^2))=10(x+√(1+x^2))^{10}/√(1+x^2).
    a=10(1+√2)^{10}/√2, b=10(√2-1)^{10}/√2 이고 ab=50{(√2+1)(√2-1)}^{10}=50.
    (1+√2)^{10} 을 실제로 전개하려 들면 풀리지 않으므로 켤레 소거가 유일한 길이다.
    [분류 이슈] 벤더 「중」(★2 출발)이나 통찰 2개(I-EQV d1 · I-SYM d2)로 +1 하여 ★3 라벨 — 1단 차이라 기록만 함.
  tier: star_3
  mechanism_primary: "f'(x)=10 f(x)/√(1+x^2) → ab=50{(√2+1)(√2-1)}^{10}=50"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$50$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0550.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 10 과 대입점 ±1 을 바꿀 수 있다. 제약: 대입점은 부호만 반대인 짝이어야 켤레 곱이 성립하고, 지수가 짝수라야 (√2-1)^n 의 부호 처리가 깔끔하다."
    creative: "(1) a/b 를 묻게 하면 소거가 안 되어 (3+2√2)^{10} 이 남고 ★4 (2) f(x)f(-x) 의 값을 먼저 묻는 유도 소문항을 붙이면 ★2 로 내려감 (3) √(1+x^2) 를 √(4+x^2) 로 바꾸면 켤레 곱이 4 가 되어 계산이 한 단 늘어 ★3 유지."
```

```yaml
- id: RPM-CALC2-0551
  page: 80
  vendor_label: '유형 09 $y=x^n$ ($n$은 실수)의 도함수'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=(1-√(x^2+1))/x 일 때 lim_{x→0} f'(x) 의 값.
  category: "몫의 미분 → f'(x) 정리 → 0/0 꼴 유리화 → 극한"
  M: {s: 3, k: 3, a: 1, t: 1}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "무리식 몫의 도함수의 극한"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    몫의 미분법으로 정리하면 f'(x)={√(x^2+1)-1}/x^2-1/√(x^2+1).
    앞 항은 분자를 유리화해 1/(√(x^2+1)+1) 로 바꾸면 x→0 에서 1/2, 뒤 항은 -1 이므로 답은 -1/2.
    f 가 x=0 에서 정의되지 않으므로 f'(0) 을 구하는 문제가 아니라 도함수의 극한임을 구분해야 한다(T-범위).
    유형 구역 「중」 ★2 출발 · 유리화는 표준 절차라 통찰 없음 · M_total 8 → ★2.
  tier: star_2
  mechanism_primary: "f'(x)={√(x^2+1)-1}/x^2-1/√(x^2+1) → 유리화 → 1/2-1=-1/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-\dfrac{1}{2}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0551.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안의 상수 1 과 분자의 상수 1 을 바꿀 수 있다. 제약: x→0 에서 분자가 0 이 되도록 두 상수를 맞춰야 0/0 꼴이 되고, 어긋나면 극한이 발산한다."
    creative: "(1) f(x) 자체의 x→0 극한을 먼저 묻는 소문항을 붙이기(★2) (2) 분모를 x^2 으로 바꿔 발산을 판단시키기(★3 · I-EQV) (3) 근호를 √(x^2+a) 로 두고 극한값에서 a 를 역으로 묻기(★3 · I-BW)."
```

```yaml
- id: RPM-CALC2-0552
  page: 80
  vendor_label: '유형 09 $y=x^n$ ($n$은 실수)의 도함수'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=1/√(2tan x+3) 에 대하여 f'(x)=f(x)g(x) 를 만족시키는 g 의 g(π/4) 의 값. 5지선다.
  category: "지수 -1/2 꼴로 미분 → f'/f 정리 → g(x)=-sec^2 x/(2tan x+3) → 대입"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "f'(x)=f(x)g(x) 를 만족시키는 g 구하기(로그미분법 꼴)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f(x)=(2tan x+3)^{-1/2} 이므로 f'(x)=-sec^2 x(2tan x+3)^{-3/2} 이고, g(x)=f'(x)/f(x)=-sec^2 x/(2tan x+3).
    x=π/4 에서 sec^2=2, tan=1 이므로 g(π/4)=-2/5 → ②.
    지수가 -3/2 와 -1/2 로 하나 차이라 나누면 지수 하나만 남는 구조다.
    유형 구역 「중」 ★2 출발 · 통찰 없음 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "f=(2tan x+3)^{-1/2} → g=f'/f=-sec^2 x/(2tan x+3) → g(π/4)=-2/5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0552.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안 2tan x+3 의 계수·상수와 대입점 π/4 를 바꿀 수 있다. 제약: 대입점에서 2tan x+3>0 이어야 근호가 정의되고, tan·sec 값이 특수각이어야 계산이 떨어진다."
    creative: "(1) g 를 구하지 말고 ln f 를 미분해 같은 결과를 얻게 하는 로그미분법 유도형(★3 · I-RT) (2) 지수를 -1/3 로 바꿔 나눗셈 구조를 확인시키기(★2) (3) g(x)=0 인 x 가 없음을 설명하게 하면 ★3."
```

## 표본 판정 요약 (38문)

- ★ 분포: ★1 5 · ★2 30 · ★3 3 · ★4 0 · ★5 0
- 통찰형 8 · 절차형 30 · premium 0
- 통찰 유형별: I-EQV 7회(0529 · 0537 · 0540 · 0541×2 · 0542 · 0550) · I-RT 1회(0544) · I-XU 1회(0548) · I-PD 1회(0548) · I-SYM 1회(0550) — 전체 통찰 라벨 11개
- 구역별 ★: 교과서 05-5 5문 전부 ★1 · 유형 01~09 33문은 ★2 30문 + ★3 3문(0541 · 0548 · 0550)
- 벤더 난이도별: level 없음(대표문제) 9문 → 전부 ★2 · 「중하」 5문 → ★2 5 · 「중」 17문 → ★2 16 + ★3 1(0550) · 「상중」 2문 → ★3 2
- type_hint 상위 5: 「극한 정의로 환원해 미분계수 구하기」 6문(0520 · 0524 · 0529 · 0535 · 0545 · 0549) · 「미분계수 조건에서 미정계수 결정」 5문(0522 · 0523 · 0532 · 0534 · 0547) · 「역함수의 미분법으로 dy/dx」 4문(0515~0518) · 「합성함수 (f∘g)'(a)」 4문(0536 · 0538 · 0542 · 0544) · 「로그 성질로 분해해 미분」 3문(0540 · 0546 · 0548)
- 대상층: 하위권 5 · 중하위권 25 · 중위권 5(0529 · 0537 · 0540 · 0542 · 0544) · 중상위권 3(0541 · 0548 · 0550)
- 그림: 0문(이 범위에 figure 가 지정된 문항 없음)
- 답 대조: 38문 전부 재계산해 전사 답과 일치. 「전사 답 확인 필요」 문항 없음

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-CALC2-0526 | 벤더 「중」이나 실제 노동량은 몫의 미분 공식 대입 한 번 — f'(0) 항이 계수 0 으로 자동 소거되어 Mₐ 3(일반 함수 f)만으로 ★2 를 지탱한다 | ★1 / ★2 |
| RPM-CALC2-0537 | 「유형 05 합성함수의 미분법; 유리함수」 구역이지만 골조는 다항 관계식의 양변 미분 — 유리함수와 무관해 구역 제목과 어긋난다 | ★2 |
| RPM-CALC2-0541 | 통찰 2개(I-EQV d2·d1)로 +1 후보(★4)였으나 도구가 모두 표준이라 「상중」 출발점 ★3 유지 | ★3 / ★4 |
| RPM-CALC2-0548 | 유형 08(ln\|f(x)\| 도함수) 구역이나 무게중심은 무한급수 망원합 — I-XU 포함 통찰 2개로 ★4 후보였으나 ★3 유지 | ★3 / ★4 |
| RPM-CALC2-0550 | 벤더 「중」(★2 출발)이지만 켤레 대칭 소거(I-SYM d2)가 없으면 풀리지 않아 ★3 으로 +1 — 1단 차이라 기록만 함 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세울 유형**: ① 「극한 정의로 환원해 미분계수 구하기」 — 대칭 차분 2f'(a)(0524 · 0545)와 비대칭 차분(0529)이 유형 01·02·03·08 에 흩어져 있다. 미분 공식과 무관한 독립 스킬이므로 한 유형으로 묶어야 한다. ② 「미분계수 조건에서 미정계수 결정」(0522 · 0523 · 0532 · 0534 · 0547) — 몫·삼각·합성·로그 구역에 하나씩 배치돼 있으나 골조는 전부 「f'(a)=k 식 세우고 방정식 풀기」로 같다. ③ 「관계식·접선·극한 조건에서 f(a), f'(a) 읽기」(0537 · 0542 · 0544) — 함수식이 주어지지 않는 추상형이라 계산형과 성격이 다르다.
- **통합해도 될 유형**: 유형 01(1/g 꼴)과 유형 02(f/g 꼴)는 몫의 미분법 한 공식이라 base ★ 가 같다. 유형 03(정수 지수)과 유형 09(실수 지수)도 「분수·근호를 지수 꼴로 고쳐 미분」 하나로 묶을 수 있다. 유형 05·06 은 안쪽 함수의 종류만 다를 뿐 합성함수 미분 한 가지다.
- **★4 이상 슬롯 후보 부재**: 이 범위 33문의 유형 문항 중 저노출 통찰(SC/VF/SYM/XU)이 든 것은 0548(XU)·0550(SYM) 둘뿐이다. 카탈로그에서 ★4·★5 변별 슬롯을 세우려면 05-p3 의 「유형 UP」·「실력 Up」 구역 문항을 base ★ 4 유형의 원본으로 삼아야 한다.
