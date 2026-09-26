---
name: mechanism-데이터-GN-ALG-06
description: 개념원리 대수 06 지수함수의 뜻과 그래프(1/1 · 60-119~67-147) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 대수 (22개정 · 학생용) · 전사본 latex-bank/gn-alg
  section: 06 지수함수의 뜻과 그래프
  unit_code: ALG-06
  part: "1/1"
  extract_range: "60~67쪽 · 60-119~67-147"
  total_problems: 35
  unit_total: 35
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-alg/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-alg/items/<id>.tex
  image_source: latex-bank/gn-alg/figures/ (crops.json)
---

# 개념원리 대수 · 06 지수함수의 뜻과 그래프 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 대수 06단원 「지수함수의 뜻과 그래프」 전체(60~67쪽 · 60-119~67-147 · 35문항)를 다룬다. 구역이 곧 난이도 층이어서 **개념원리 익히기**(통번호) ★1, **필수 예제**(쪽-eN · tag 「필수」) ★2, **연습문제 STEP 1** ★2, **STEP 2** ★3, **실력 UP** ★4 를 출발점으로 잡고 M_total·통찰로 ±1 을 조정했다. 필수 예제 뒤에 붙은 **확인체크**는 직전 예제와 같은 골조의 짝 문항이라 개념원리 익히기 통번호(★1)가 아니라 **예제와 같은 ★2 를 출발점**으로 삼고, 내용이 단순 개념 확인에 그치면 −1 하는 기준을 이 파일 전체에 일관되게 적용했다(구역 신호 해석이 갈리지 않도록 여기 명시).

단원 내용상 이 범위는 지수함수의 정의·성질 확인에서 시작해 **평행이동·대칭이동 → 그림에서 값 읽기 → 그래프로 둘러싸인 도형의 넓이 → 사분면·고정점·수직 조건**으로 올라간다. 그래서 통찰 라벨은 I-RT(식↔그래프·역함수 전환)와 I-EQV(밑 통일·계수를 지수 이동으로 고쳐 읽기)에 크게 몰려 있다. 이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 / 골조를 유지한 설정 변형과 ★ 가 변하는 지점)를 채웠다. 그림 문항은 6문(fig-64-e5 · fig-64-131 · fig-65-136 · fig-66-138 · fig-66-139 · fig-67-146)이다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-ALG-60-119
  page: 60
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    보기 6개 중 지수함수인 것만 모두 고르기.
  category: "지수함수의 정의 → 밑이 1이 아닌 양의 상수이고 지수가 변수인 식 고르기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수의 뜻(y=a^x 꼴 판별)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    y=a^x (a>0, a≠1) 꼴인지만 보면 끝나는 정의 확인.
    다항식(y=-2x^3, y=x^2)과 분수 꼴로 위장한 1/2^x=(1/2)^x 의 구분이 유일한 함정(T-표기).
    익히기 구역 ★1 출발 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "각 식이 y=a^x (a>0, a≠1) 꼴인지 확인 → 지수 자리에 x 가 있는 것만 채택"
  insight_type: 절차형
  target_cohort: 하위권
  answer: 'ㄱ, ㄴ, ㄹ, ㅂ'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/60-119.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑의 값(2, 0.3, 3)·계수·다항식 보기의 차수를 바꿀 수 있다. 제약: 밑은 1이 아닌 양수여야 하고, 1/2^x 처럼 분수로 위장한 지수함수를 적어도 하나 남겨야 판별이 의미 있다."
    creative: "(1) 지수함수가 아닌 이유를 한 줄로 쓰게 하기(★1 유지) (2) y=(a-1)^x 처럼 밑에 문자를 넣어 지수함수가 되도록 하는 a 의 범위를 묻기(★2 · 조건 분리) (3) y=a^x 와 y=x^a 를 섞어 정의역·치역까지 비교시키면 ★2."
```

```yaml
- id: GN-ALG-60-120
  page: 60
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑹ f(x)=2^x, g(x)=(1/3)^x 의 함숫값(x=2, -1/2, -3 과 x=0, 3, -2) 구하기.
  category: "지수함수에 값 대입 → 음의 지수·유리수 지수를 지수법칙으로 정리"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수의 함숫값 계산(음의 지수·유리수 지수)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    대입 한 번과 음의 지수(역수)·유리수 지수(거듭제곱근) 정리만 필요하다.
    밑이 1/3 인 쪽에서 음의 지수가 역수로 뒤집히는 것(T-부호)이 유일한 걸림돌.
    익히기 ★1 출발 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "f(x)=2^x, g(x)=(1/3)^x 에 x 대입 → 음의 지수는 역수, 분수 지수는 거듭제곱근으로 정리"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $4$ \quad ⑵ $\dfrac{\sqrt{2}}{2}$ \quad ⑶ $\dfrac{1}{8}$ \quad ⑷ $1$ \quad ⑸ $\dfrac{1}{27}$ \quad ⑹ $9$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/60-120.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(2, 1/3)과 대입값을 바꿀 수 있다. 제약: 분수 지수는 밑이 완전거듭제곱이거나 답이 근호 한 겹으로 정리되는 값(-1/2, 1/3 등)으로 두고, 음의 지수를 최소 하나 남긴다."
    creative: "(1) f(a)=k 를 주고 a 를 되묻기(★2 · 역방향) (2) f(x)g(x) 나 f(x)/g(x) 의 값을 한 번에 묻기(★2 · 밑 통일) (3) f(x+1)/f(x) 가 일정함을 확인시키면 ★2 로 함수 방정식 성질과 연결."
```

```yaml
- id: GN-ALG-60-121
  page: 60
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑸ f(x)=a^x (a>0, a≠1) 의 정의역·치역·증가감소(a>1, 0<a<1)·점근선을 빈칸에 채우기.
  category: "지수함수의 기본 성질 → 정의역·치역·단조성·점근선 정리"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수 y=a^x 의 기본 성질(정의역·치역·증가감소·점근선)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    성질을 그대로 재생하는 빈칸 문제로 계산이 없다. 밑이 문자 a 라 Mₐ=2.
    a>1 과 0<a<1 에서 부등호가 뒤집히는 것(T-부호)만 구분하면 된다.
    익히기 ★1 출발 · 통찰 없음 · M_total 5 → ★1(하한).
  tier: star_1
  mechanism_primary: "y=a^x 의 정의 → 정의역 실수·치역 양의 실수 → 밑이 1보다 큰지 작은지로 단조성 결정 → 점근선 x축"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ 실수 \quad ⑵ 양의 실수 \quad ⑶ $<$ \quad ⑷ $>$ \quad ⑸ $x$축'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/60-121.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "빈칸에 들어갈 값 자체는 수가 아니라 성질이라 숫자 변형 여지가 작다. 밑을 구체수(2, 1/3)로 바꿔 같은 다섯 항목을 묻는 정도가 한계."
    creative: "(1) 틀린 설명을 고르는 5지선다로 바꾸기(★2) (2) y=a^{x-m}+n 으로 바꿔 치역·점근선이 어떻게 움직이는지 채우게 하기(★2 · 이동 개념 추가) (3) 「a 의 값에 관계없이 항상 옳은 것」을 고르게 하면 ★3 으로 고정점·단조성 통합."
```

```yaml
- id: GN-ALG-60-122
  page: 60
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ y=3^x 를 이용해 y=3^{x-1}, y=3^x+2, y=(1/3)^x, y=-3^x 의 그래프를 그리고 정의역·치역·점근선의 방정식 구하기.
  category: "기본 그래프의 평행이동·대칭이동 → 치역과 점근선 읽기"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수 그래프의 평행이동·대칭이동과 치역·점근선"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    네 가지 이동(x축 방향 평행, y축 방향 평행, y축 대칭, x축 대칭)을 차례로 적용하는 표준 절차.
    함정은 치역의 부등호 방향(T-범위)과 y=-3^x 에서 치역이 음수로 뒤집히는 것(T-부호) 둘.
    익히기 ★1 출발 · 통찰 없음 · M_total 6 이라 −1 조건도 아님 → ★1.
  tier: star_1
  mechanism_primary: "y=3^x 를 기준으로 각 식의 이동 종류 판정 → 점근선을 함께 옮김 → 치역을 점근선 기준 부등호로 씀"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '그래프는 풀이 참조 \quad ⑴ 정의역: $\{x \mid x$는 실수$\}$, 치역: $\{y \mid y>0\}$, 점근선의 방정식: $y=0$ \quad ⑵ 정의역: $\{x \mid x$는 실수$\}$, 치역: $\{y \mid y>2\}$, 점근선의 방정식: $y=2$ \quad ⑶ 정의역: $\{x \mid x$는 실수$\}$, 치역: $\{y \mid y>0\}$, 점근선의 방정식: $y=0$ \quad ⑷ 정의역: $\{x \mid x$는 실수$\}$, 치역: $\{y \mid y<0\}$, 점근선의 방정식: $y=0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/60-122.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(3)과 이동량(-1, +2)을 바꿀 수 있다. 제약: y축 방향 이동량이 점근선과 치역을 동시에 바꾸므로 답의 부등호 방향과 함께 수정해야 하고, x축 대칭 문항을 하나는 남겨야 치역 부호가 검증된다."
    creative: "(1) 그래프를 주고 식을 되묻기(★2 · 역방향) (2) y=-3^{x-1}+2 처럼 이동을 둘 이상 겹치기(★2) (3) 네 그래프 중 평행이동만으로 서로 겹쳐지는 쌍을 고르게 하면 ★3."
```

```yaml
- id: GN-ALG-60-123
  page: 60
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴ 세제곱근 3 과 네제곱근 9, ⑵ (1/5)^{-2} 과 (1/5)^{0.5} 의 대소 비교.
  category: "밑 통일 → 지수함수의 증가·감소로 대소 판정"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "밑을 통일한 두 수의 대소 비교(지수함수의 증가·감소)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    거듭제곱근을 유리수 지수로 고쳐 밑을 3(또는 1/5)으로 맞춘 뒤 지수만 비교하는 표준 절차.
    ⑵ 는 밑이 1보다 작아 지수 대소와 값 대소가 반대가 되는 점(T-부호)이 핵심 함정이고, 근호를 지수로 바꾸는 표기 전환(T-표기)이 하나 더 있다.
    익히기 ★1 출발 · 통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "거듭제곱근을 유리수 지수로 → 밑 통일 → 밑이 1보다 큰지 작은지로 지수 대소를 값 대소에 반영"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\sqrt[3]{3}<\sqrt[4]{9}$ \quad ⑵ $\left(\dfrac{1}{5}\right)^{-2}>\left(\dfrac{1}{5}\right)^{0.5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/60-123.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안의 수와 근지수(3, 4), 지수(-2, 0.5)를 바꿀 수 있다. 제약: 두 수의 밑이 같은 수의 거듭제곱이어야 통일되고, 밑이 1보다 작은 문항을 하나는 남겨야 부등호 반전이 검증된다."
    creative: "(1) 세 수로 늘리기(★2) (2) 밑을 문자 a 로 두고 0<a<1, a>1 로 나눠 답하게 하기(★3 · 경우 분리) (3) 두 수 사이에 들어가는 정수를 묻는 형태로 바꾸면 ★3."
```

### 필수·발전 예제

```yaml
- id: GN-ALG-61-e1
  page: 61
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    y=(1/3)^x 에 대한 보기 4개(점 (1,0) 통과 · 점근선이 y축 · 제3사분면 통과 여부 · 증가 여부) 중 옳은 것 모두 고르기.
  category: "0<a<1 인 지수함수의 그래프 성질 참·거짓 판정"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수 y=a^x (0<a<1) 의 성질 참·거짓 판정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    보기마다 기본 성질 하나씩(통과점 (0,1) · 점근선 x축 · 치역이 양수라 제1·2사분면만 · 감소)을 대조하는 절차형.
    점근선을 y축으로 착각하는 표기 함정과 사분면 판정의 범위 함정(T-표기·T-범위) 둘.
    필수 예제 ★2 출발 · 통찰 없음 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "y=(1/3)^x 의 개형(감소·점근선 x축·치역 y>0) 확정 → 보기 넷을 개형과 하나씩 대조"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: 'ㄷ'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/61-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(1/3)과 보기에 나오는 점의 좌표를 바꿀 수 있다. 제약: 밑이 1보다 작아야 증가·감소 보기가 거짓이 되고, 통과점은 (0,1) 한 점만 확정이므로 다른 좌표는 거짓 보기로만 쓴다."
    creative: "(1) 밑을 3으로 바꿔 참·거짓이 뒤집히는 보기를 만들기(★2) (2) y=(1/3)^{x-1}+1 로 옮겨 사분면·점근선 보기를 다시 판정시키기(★3) (3) 옳은 것의 개수를 묻는 5지선다로 바꾸면 ★2 유지."
```

```yaml
- id: GN-ALG-61-124
  page: 61
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    y=5^x 에 대한 보기 4개(점 (0,1) 통과 · 점근선이 x=0 · 증가 여부 · 일대일 여부) 중 옳은 것 모두 고르기.
  category: "a>1 인 지수함수의 성질 참·거짓 판정(점근선·증가·일대일)"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수 y=a^x (a>1) 의 성질 참·거짓 판정(점근선·증가·일대일)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    직전 필수 예제와 같은 골조로 밑만 1보다 크게 바뀐 짝 문항.
    점근선을 직선 x=0(y축)으로 적은 보기와, 증가함수라 일대일이라는 보기가 판정 포인트(T-표기·T-범위).
    확인체크는 예제와 같은 ★2 출발 · 통찰 없음 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "y=5^x 의 개형(증가·점근선 y=0·치역 y>0) 확정 → 보기 넷을 개형·단조성과 대조"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: 'ㄱ, ㄷ, ㄹ'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/61-124.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(5)만 1보다 큰 다른 수로 바꾸면 답이 그대로 유지된다. 제약: 밑을 1보다 작게 바꾸면 증가 보기가 거짓이 되므로 답을 함께 고쳐야 한다."
    creative: "(1) 일대일 보기를 역함수 존재로 바꿔 묻기(★3 · 역함수 연결) (2) 그래프가 지나지 않는 사분면을 보기로 넣기(★2) (3) 두 밑 5 와 1/5 의 그래프 관계(y축 대칭)를 보기로 추가하면 ★3."
```

```yaml
- id: GN-ALG-61-125
  page: 61
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    f(x)=a^x (a>0, a≠1) 에 대해 f(x+1)=af(x), f(-x)=1/f(x), f(x^2)={f(x)}^2, f(x+y)=f(x)f(y) 중 옳은 것 모두 고르기.
  category: "지수법칙을 함수 표기로 옮겨 성립 여부 판정"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수의 함수 방정식 성질(f(x+y)=f(x)f(y) 등) 판정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    각 보기를 a^x 로 되돌려 지수법칙과 맞춰 보는 절차형. 밑이 문자라 Mₐ=2.
    거짓 보기 f(x^2)={f(x)}^2 은 a^{x^2} 과 a^{2x} 의 차이라 지수의 곱과 거듭제곱을 혼동하는 표기 함정(T-표기)과 지수 부호 처리(T-부호)가 걸린다.
    확인체크 ★2 출발 · 통찰 없음 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "보기의 함수 표기를 a^x 로 환원 → 지수법칙(합·역수·거듭제곱)과 일치하는지 대조"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: 'ㄱ, ㄴ, ㄹ'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/gn-alg/items/61-125.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "보기 안의 평행량(x+1 의 1)과 지수(x^2 의 2)를 바꿀 수 있다. 제약: 참인 보기는 지수법칙에서 그대로 따라오는 식이어야 하고, 거짓 보기는 a^{x^2} 과 a^{2x} 처럼 반례가 쉬운 형태로 둔다."
    creative: "(1) 거짓 보기의 반례를 직접 쓰게 하기(★2) (2) f(x+y)=f(x)f(y) 와 f(1)=k 만 주고 f(3) 을 구하게 하기(★3 · 함수 방정식) (3) f(x)f(-x) 가 상수임을 이용하는 값 계산으로 바꾸면 ★3."
```

```yaml
- id: GN-ALG-62-e2
  page: 62
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ y=2^{x-1}-1, ⑵ y=3^{-x}+1 의 그래프를 그리고 정의역·치역·점근선의 방정식 구하기.
  category: "평행이동·y축 대칭이동한 지수함수의 그래프와 치역·점근선"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행이동·대칭이동한 지수함수의 그래프와 치역·점근선"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    기본형 y=2^x, y=3^x 에서 이동량을 읽어 점근선을 함께 옮기고 치역을 점근선 기준으로 적는 표준 절차.
    ⑵ 에서 3^{-x} 를 (1/3)^x 로 보는 표기 전환과, 치역 부등호가 점근선을 포함하지 않는 것(T-범위·T-표기)이 함정.
    필수 예제 ★2 출발 · 통찰 없음 → ★2.
  tier: star_2
  mechanism_primary: "식에서 이동 종류·이동량 읽기 → 점근선을 함께 이동 → 치역을 점근선 기준 부등호로 결정"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '그래프는 풀이 참조 \quad ⑴ 정의역: $\{x \mid x$는 실수$\}$, 치역: $\{y \mid y>-1\}$, 점근선의 방정식: $y=-1$ \quad ⑵ 정의역: $\{x \mid x$는 실수$\}$, 치역: $\{y \mid y>1\}$, 점근선의 방정식: $y=1$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/62-e2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(2, 3)과 이동량(-1, +1)을 바꿀 수 있다. 제약: y축 방향 이동량이 곧 점근선이고 치역의 경계라 세 값을 함께 고쳐야 하며, 음수 이동을 하나는 남겨야 부호 확인이 된다."
    creative: "(1) y=-2^{x-1}-1 로 x축 대칭을 겹쳐 치역 부등호를 뒤집기(★2) (2) 그래프가 지나는 사분면까지 묻기(★3) (3) 두 그래프의 교점 존재 여부를 묻는 형태로 바꾸면 ★3."
```

```yaml
- id: GN-ALG-62-126
  page: 62
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑹ y=2^{-x}-1, y=-2^{-x}, y=2^{x-2}-1, y=(1/4)^{x-1}+2, y=3^{-x+1}, y=-(1/2)^x+2 의 그래프를 그리고 정의역·치역·점근선 구하기.
  category: "평행이동·x축/y축 대칭이동을 겹친 지수함수의 그래프와 치역·점근선"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행이동·대칭이동한 지수함수의 그래프와 치역·점근선"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    직전 예제와 같은 골조를 여섯 개로 반복하되 x축 대칭(음의 계수)이 섞여 치역 부등호가 뒤집히는 문항이 둘 들어 있다.
    함정은 대칭 뒤 치역 방향(T-부호)과 점근선 위치(T-범위)뿐이고 단계 자체는 짧다.
    확인체크 ★2 출발 · 통찰 없음 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "각 식을 기본형의 대칭·평행이동 조합으로 분해 → 점근선 이동 → 계수 부호로 치역 방향 결정"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '그래프는 풀이 참조 \quad ⑴ 정의역: $\{x \mid x$는 실수$\}$, 치역: $\{y \mid y>-1\}$, 점근선의 방정식: $y=-1$ \quad ⑵ 정의역: $\{x \mid x$는 실수$\}$, 치역: $\{y \mid y<0\}$, 점근선의 방정식: $y=0$ \quad ⑶ 정의역: $\{x \mid x$는 실수$\}$, 치역: $\{y \mid y>-1\}$, 점근선의 방정식: $y=-1$ \quad ⑷ 정의역: $\{x \mid x$는 실수$\}$, 치역: $\{y \mid y>2\}$, 점근선의 방정식: $y=2$ \quad ⑸ 정의역: $\{x \mid x$는 실수$\}$, 치역: $\{y \mid y>0\}$, 점근선의 방정식: $y=0$ \quad ⑹ 정의역: $\{x \mid x$는 실수$\}$, 치역: $\{y \mid y<2\}$, 점근선의 방정식: $y=2$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/gn-alg/items/62-126.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑과 두 방향 이동량을 자유롭게 바꿀 수 있다. 제약: 음의 계수가 붙은 문항은 치역이 점근선 아래가 되므로 부등호를 반대로 적어야 하고, 지수의 부호(-x)가 그래프의 증가·감소를 뒤집는다."
    creative: "(1) 여섯 식 중 평행이동만으로 서로 겹쳐지는 것을 고르게 하기(★3) (2) 그래프를 주고 식을 고르게 하기(★2 · 역방향) (3) 각 그래프가 지나지 않는 사분면을 함께 묻기(★3)."
```

```yaml
- id: GN-ALG-62-127
  page: 62
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    y=5^{x-1}-2 의 그래프가 지나는 사분면 모두 말하기.
  category: "평행이동한 지수함수의 개형 → 점근선·절편으로 사분면 판정"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "식만으로는 답이 안 나오고 점근선 y=-2 와 y절편 5^{-1}-2<0 을 좌표평면 개형으로 옮겨야 사분면이 결정됨"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "지수함수 그래프가 지나는 사분면 판정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    점근선 y=-2, 증가함수, y절편이 음수라는 세 정보를 개형으로 옮기면 제2사분면만 지나지 않는다는 결론이 나온다.
    식에서 그래프로 옮기는 표현 전환 1개(RT d1)이고, 경계인 제2사분면 판정이 범위 함정.
    확인체크 ★2 출발 · 통찰 1 → ★2 유지.
  tier: star_2
  mechanism_primary: "점근선 y=-2 와 y절편 5^{-1}-2<0 → 증가하는 개형을 그려 x절편 오른쪽/왼쪽 거동 확인 → 지나는 사분면 결정"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '제$1$, $3$, $4$사분면'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/62-127.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(5)·x축 이동량(1)·y축 이동량(-2)을 바꿀 수 있다. 제약: y절편의 부호가 사분면 답을 결정하므로 5^{-1}-2 에 해당하는 값의 부호를 계산해 답을 함께 고쳐야 하고, 점근선이 x축 위로 올라가면 제3·4사분면이 사라진다."
    creative: "(1) 지나지 않는 사분면을 묻기(★2 유지) (2) y축 이동량을 문자 k 로 두고 제3사분면을 지나지 않을 조건을 묻기(★3~4 · 67-143 골조) (3) 밑을 1보다 작게 바꿔 감소 개형에서 다시 판정시키면 ★3."
```

```yaml
- id: GN-ALG-63-e3
  page: 63
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    y=2^x 를 x축 방향 2, y축 방향 1 평행이동한 뒤 x축에 대하여 대칭이동한 그래프가 y=a×2^x+b 일 때 상수 a, b 구하기.
  category: "평행이동 → x축 대칭이동 → 계수 비교로 a, b 결정"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수 그래프의 평행이동·대칭이동 후 식 결정(계수 비교)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    이동을 순서대로 식에 반영(x-2 대입·+1·양변 부호 반전)한 뒤 2^{x-2} 를 (1/4)·2^x 로 분리해 계수를 맞추는 절차형.
    x축 대칭에서 상수항 부호까지 함께 뒤집히는 것(T-부호)과 평행이동의 부호 방향(T-표기)이 함정.
    필수 예제 ★2 출발 · 통찰 없음 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "y=2^{x-2}+1 로 평행이동 → x축 대칭이라 y 대신 -y → y=-2^{x-2}-1 → 2^{x-2}=(1/4)2^x 로 분리해 a, b 비교"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$a=-\dfrac{1}{4}$, $b=-1$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/63-e3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(2)·이동량(2, 1)과 대칭축을 바꿀 수 있다. 제약: x축 방향 이동량이 그대로 계수 a 의 거듭제곱(밑^{-이동량})으로 들어가므로 답이 유리수로 떨어지는 값으로 두는 것이 좋다."
    creative: "(1) 대칭이동을 y축·원점으로 바꾸기(★2 · 63-128 골조) (2) 이동 순서를 대칭 먼저로 바꿔 결과가 달라지는지 묻기(★3) (3) a, b 를 주고 이동량을 되묻는 역방향으로 바꾸면 ★3."
```

```yaml
- id: GN-ALG-63-e4
  page: 63
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ 3^{0.5}, 루트27, 세제곱근 9 와 ⑵ 0.1^{-0.1}, 0.1^{-1/2}, 0.1^{-4} 의 대소 비교.
  category: "밑 통일 → 지수 대소 → 밑의 크기로 부등호 방향 결정"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "밑을 통일한 세 수의 대소 비교(지수함수의 증가·감소)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 모두 밑 3 의 유리수 지수(0.5, 3/2, 2/3)로, ⑵ 는 밑 0.1 의 음의 지수로 고쳐 지수만 비교하는 절차형.
    밑이 1보다 작은 ⑵ 에서 지수가 클수록 값이 작아지는 반전(T-부호)과 근호↔유리수 지수 전환(T-표기)이 함정.
    필수 예제 ★2 출발 · 통찰 없음 → ★2.
  tier: star_2
  mechanism_primary: "세 수를 같은 밑의 거듭제곱으로 통일 → 지수 대소 비교 → 밑이 1보다 크면 그대로, 작으면 반대로 옮김"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $3^{0.5}<\sqrt[3]{9}<\sqrt{27}$ \quad ⑵ $0.1^{-0.1}<0.1^{-\frac{1}{2}}<0.1^{-4}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/63-e4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(3, 0.1)과 세 지수를 바꿀 수 있다. 제약: 세 수가 한 밑으로 통일되어야 하고, 지수가 서로 다른 값이어야 대소가 확정된다. 밑이 1보다 작은 문항은 반드시 하나 남긴다."
    creative: "(1) 네 수로 늘려 순서대로 나열시키기(★2) (2) 밑을 문자 a 로 두고 0<a<1 과 a>1 로 나눠 답하게 하기(★3) (3) 세 수 사이에 1 이 어디 들어가는지 함께 묻기(★3)."
```

```yaml
- id: GN-ALG-63-128
  page: 63
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    y=3^x 를 x축 방향 3, y축 방향 -2 평행이동한 뒤 원점에 대하여 대칭이동한 그래프가 y=a×3^{-x}+b 일 때 상수 a, b 구하기.
  category: "평행이동 → 원점 대칭이동 → 계수 비교로 a, b 결정"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행이동·원점 대칭이동 후 식 결정(계수 비교)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y=3^{x-3}-2 로 옮긴 뒤 원점 대칭이라 x, y 를 모두 -로 바꾸고 3^{-x-3} 을 (1/27)3^{-x} 로 분리해 계수를 맞춘다.
    x, y 두 부호를 동시에 뒤집는 처리(T-부호)와 평행이동 부호(T-표기)가 함정이며 골조는 63-e3 과 동일.
    확인체크 ★2 출발 · 통찰 없음 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "y=3^{x-3}-2 → 원점 대칭이라 x는 -x, y는 -y → y=-3^{-x-3}+2 → 3^{-x-3}=(1/27)3^{-x} 로 분리해 a, b 비교"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$a=-\dfrac{1}{27}$, $b=2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/63-128.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(3)·이동량(3, -2)을 바꿀 수 있다. 제약: x축 방향 이동량이 계수 a 에 밑^{-이동량} 으로 들어가므로 답이 간단한 분수가 되도록 작은 정수로 두고, y축 이동량은 대칭 뒤 부호가 반대로 나타난다."
    creative: "(1) 대칭을 y축으로 바꾸기(★2) (2) 결과 식을 주고 이동량을 역추적시키기(★3) (3) 이동 후 그래프가 지나는 고정점이나 사분면을 함께 묻기(★3)."
```

```yaml
- id: GN-ALG-63-129
  page: 63
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    y=(2/3)^x 를 x축 방향 -1 평행이동한 뒤 y축에 대하여 대칭이동한 그래프가 두 점 (-1, m), (2, n) 을 지날 때 mn 의 값 구하기.
  category: "평행이동·y축 대칭이동으로 식 확정 → 두 함숫값의 곱"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이동한 지수함수 그래프 위의 두 점의 함숫값 곱"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y=(2/3)^{x+1} 로 옮긴 뒤 y축 대칭에서 x 를 -x 로 바꿔 y=(2/3)^{-x+1} 을 얻고 두 점을 대입해 곱한다.
    이동 부호(-1 이면 x+1)와 대칭에서의 지수 부호가 겹치는 표기·부호 함정이 핵심이고, 곱은 지수 합으로 묶어도 된다.
    확인체크 ★2 출발 · 통찰 없음 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "y=(2/3)^{x+1} → y축 대칭이라 x는 -x → y=(2/3)^{-x+1} → x=-1, 2 대입해 mn 계산(지수 합으로 묶어도 동일)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{2}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/63-129.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(2/3)·이동량(-1)·두 점의 x좌표(-1, 2)를 바꿀 수 있다. 제약: 두 x좌표의 합이 곱 mn 의 지수를 결정하므로 답이 간단해지도록 합을 작은 정수로 두고, 밑은 유리수여야 답이 분수로 정리된다."
    creative: "(1) m/n 이나 m+n 을 묻기(★2~3 · 합은 묶이지 않아 계산이 늘어남) (2) 대칭을 원점으로 바꾸기(★2) (3) 두 점 중 하나를 미지수로 두고 mn 값을 주어 좌표를 역추적시키면 ★3."
```

```yaml
- id: GN-ALG-63-130
  page: 63
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴ 루트(2^3), 0.5^{1/3}, 세제곱근 4 와 ⑵ 루트(1/9), 세제곱근(1/3), 네제곱근(1/27) 의 대소 비교.
  category: "거듭제곱근을 유리수 지수로 고쳐 밑 통일 → 지수 대소로 판정"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "밑을 통일한 세 수의 대소 비교(거듭제곱근 → 유리수 지수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 0.5=2^{-1} 까지 고쳐 밑 2 로, ⑵ 는 모두 밑 1/3(또는 3^{-1})로 통일한 뒤 지수만 비교한다.
    밑이 1보다 작은 ⑵ 에서 부등호가 뒤집히고(T-부호), 소수·분수·근호가 섞여 표기 전환 부담이 있다(T-표기).
    확인체크 ★2 출발 · 통찰 없음 → ★2.
  tier: star_2
  mechanism_primary: "소수·분수·근호를 모두 같은 밑의 유리수 지수로 통일 → 지수 대소 비교 → 밑의 크기로 부등호 방향 결정"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $0.5^{\frac{1}{3}}<\sqrt[3]{4}<\sqrt{2^3}$ \quad ⑵ $\sqrt{\dfrac{1}{9}}<\sqrt[4]{\dfrac{1}{27}}<\sqrt[3]{\dfrac{1}{3}}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/63-130.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안의 수와 근지수를 바꿀 수 있다. 제약: 세 수가 한 밑(2 또는 1/3)의 거듭제곱으로 통일되어야 하고, 0.5 처럼 소수로 위장한 항을 하나 남기면 밑 통일 단계가 살아난다."
    creative: "(1) 밑이 1보다 큰 수와 작은 수를 한 문항에 섞어 두 그룹으로 나눠 비교시키기(★3) (2) 가장 큰 수만 고르는 5지선다로 줄이기(★2) (3) 세 수의 곱이나 비를 함께 묻기(★3)."
```

```yaml
- id: GN-ALG-64-e5
  page: 64
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    그림으로 주어진 f(x)=3^x 의 그래프에서 x=a, x=b 에 대응하는 값이 m, n 일 때 a+b=4 이면 mn 의 값 구하기.
  category: "그림의 좌표 라벨을 함숫값으로 옮기기 → 곱을 지수 합으로 묶기"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "그림의 a, b, m, n 라벨을 m=3^a, n=3^b 라는 함숫값 관계로 옮겨야 식이 생김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "지수함수 그래프의 좌표 라벨에서 함숫값의 곱·합 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a, b 를 각각 구할 수 없고 mn=3^a·3^b=3^{a+b} 로 묶어야 주어진 a+b=4 가 쓰인다.
    그림 라벨을 함숫값 관계로 읽는 표현 전환 1개(RT d1)이고, 묶는 단계 자체는 지수법칙 적용이라 통찰로 세지 않았다.
    필수 예제 ★2 출발 · 통찰 1 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "그림에서 m=3^a, n=3^b → mn=3^{a+b} → a+b=4 대입"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$81$'
  answer_source: "본문 풀이"
  figure: "crop:fig-64-e5.png"
  latex: latex-bank/gn-alg/items/64-e5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(3)과 a+b 의 값(4)을 바꿀 수 있다. 제약: 답이 밑^{a+b} 이므로 a+b 는 정수로 두고, a, b 개별 값은 그림 라벨이라 지정하지 않는다(그림 라벨 위치는 고정)."
    creative: "(1) mn 대신 m/n 을 주고 a-b 를 묻기(★2 유지) (2) mn 값을 주고 a+b 를 되묻기(★2 · 66-138 골조) (3) 밑이 다른 두 함수의 그래프를 겹쳐 m=2^a, n=3^b 로 만들면 묶이지 않아 ★3."
```

```yaml
- id: GN-ALG-64-e6
  page: 64
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    두 함수 y=2^x, y=2^{x-2} 의 그래프와 두 직선 y=1, y=3 으로 둘러싸인 부분의 넓이 구하기.
  category: "평행이동 관계인 두 곡선 사이 영역 → 평행사변형으로 환원"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 곡선이 x축 방향 2 평행이동 관계임을 보고 곡선 사이 영역을 밑변 2·높이 2 인 평행사변형으로 환원(곡선 부분이 서로 상쇄)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "평행이동 관계인 두 지수함수 그래프로 둘러싸인 도형의 넓이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    곡선 모양을 구하지 않고 「같은 곡선이 오른쪽으로 2 만큼 옮겨진 것」만 쓰면 잘린 부분이 그대로 메워져 평행사변형이 된다.
    적분 없이 도형으로 환원하는 표현 전환 1개(RT d2)이고 계산은 2×2 한 줄.
    필수 예제 ★2 출발 · 통찰 1(depth 2 는 +1 조건 아님) → ★2.
  tier: star_2
  mechanism_primary: "y=2^{x-2} 는 y=2^x 를 x축 방향 2 평행이동한 것 → 두 직선 사이 영역이 밑변 2·높이 (3-1)=2 인 평행사변형 → 넓이 4"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$4$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/64-e6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "평행이동량(2)과 두 직선의 높이(1, 3)를 바꿀 수 있다. 제약: 두 곡선은 반드시 같은 밑의 평행이동 관계여야 하고, 두 직선은 x축에 평행해야 넓이가 (이동량)×(높이 차)로 떨어진다."
    creative: "(1) 두 직선을 x=α, x=β 로 바꿔 세로로 자르기(★3 · 높이가 곡선이라 환원이 달라짐) (2) 곡선을 y=2^x, y=4×2^x 로 주어 이동량을 로그로 구하게 하기(★3 · 64-132 골조) (3) 자르는 직선을 기울기 -1 로 바꾸면 ★4(67-147 골조)."
```

```yaml
- id: GN-ALG-64-131
  page: 64
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    그림에서 y=2^x 의 그래프와 직선 y=x 가 이루는 계단 구조의 네 값 a, b, c, d 에 대하여 a+b+c+d 의 값 구하기.
  category: "곡선과 y=x 를 번갈아 쓰는 계단 구조 → 값의 사슬 계산"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "직선 y=x 가 y축의 값을 x축으로 옮겨 주는 장치임을 읽어 a=2^0, b=a, c=2^b, d=2^c 라는 사슬로 그림을 번역"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "지수함수 그래프와 직선 y=x 의 계단 구조에서 값 읽기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    계산은 2의 거듭제곱 몇 개지만, 점선이 곡선과 직선을 번갈아 오가며 값을 넘겨준다는 구조를 읽어야 식이 선다.
    그림을 값의 사슬로 옮기는 표현 전환 1개(RT d2)가 난이도 전부다.
    확인체크 ★2 출발 · 통찰 1 · M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "y축의 a=2^0 → y=x 로 x축에 옮겨 b=a → 곡선으로 올려 c=2^b → 다시 y=x 로 옮겨 d=2^c → 네 값 합"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$8$'
  answer_source: "답지"
  figure: "crop:fig-64-131.png"
  latex: latex-bank/gn-alg/items/64-131.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(2)을 바꿀 수 있고 계단 칸 수를 늘릴 수 있다. 제약: 그림의 라벨 위치와 시작점(y축 절편)은 고정이며, 밑을 키우면 마지막 값이 급격히 커져 합이 지저분해진다."
    creative: "(1) 계단을 한 칸 늘려 다섯 값의 합을 묻기(★3) (2) 밑을 1/2 로 바꿔 계단이 줄어드는 방향으로 만들기(★3) (3) 곡선을 y=2^x 와 그 역함수로 바꿔 대칭 구조로 묻으면 ★3(66-139 골조)."
```

```yaml
- id: GN-ALG-64-132
  page: 64
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 함수 y=(1/5)^x, y=4×(1/5)^x 의 그래프와 두 직선 y=1, y=4 로 둘러싸인 도형의 넓이 구하기.
  category: "상수배를 평행이동으로 고쳐 읽기 → 평행사변형 넓이"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "4×(1/5)^x 을 (1/5)^{x-p} 꼴로 고쳐 상수배를 x축 방향 평행이동량 p=log_5 4 로 바꿔 읽음"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "평행이동 관계가 확인되면 곡선 사이 영역이 밑변 p·높이 (4-1) 인 평행사변형으로 환원"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "상수배(평행이동)로 놓인 두 지수함수 그래프로 둘러싸인 도형의 넓이"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    64-e6 과 같은 평행사변형 환원이지만, 상수배 4 를 먼저 평행이동량 log_5 4 로 번역해야 한다는 단계가 하나 더 있다.
    통찰 2개(EQV d2 + RT d2)라 확인체크 ★2 출발에서 +1.
    밑이 1보다 작아 이동 방향이 반대로 나오는 것이 부호 함정이지만 넓이는 절댓값이라 답에는 영향이 없다.
  tier: star_3
  mechanism_primary: "4×(1/5)^x=(1/5)^{x-log_5 4} → 두 곡선은 평행이동 관계 → 넓이=이동량 log_5 4 × 높이 차 3 = 6log_5 2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$6\log_5 2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/64-132.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(1/5)·상수배(4)·두 직선의 높이(1, 4)를 바꿀 수 있다. 제약: 답이 (높이 차)×log_밑 상수 꼴이므로 상수배는 밑의 거듭제곱이나 로그가 간단해지는 수로 두어야 하고, 두 직선은 모두 양수 높이여야 한다."
    creative: "(1) 상수배를 밑의 거듭제곱(25)으로 바꿔 답이 유리수가 되게 하기(★2) (2) 넓이를 주고 상수배를 역추적시키기(★3) (3) 두 직선을 기울기 있는 직선으로 바꾸면 환원이 깨져 ★4."
```

### 연습문제 STEP 1

```yaml
- id: GN-ALG-65-133
  page: 65
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    f(x)=a^x (a>0) 에서 f(2)=16 일 때 f(-1)f(3)/f(1) 의 값 구하기.
  category: "조건으로 밑 결정 → 함숫값의 곱·몫을 지수 합차로 정리"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수의 함숫값의 곱·몫(지수 합차)과 밑 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a^2=16 과 a>0 에서 a=4 를 얻고, 곱·몫을 a^{-1+3-1}=a 로 묶으면 바로 끝난다.
    통찰 없음 · M_total 5 로 −1 후보이지만, 밑을 먼저 확정하는 단계와 음의 지수 처리가 있어 STEP 1 출발점 ★2 를 유지했다.
    a>0 조건으로 음의 근을 버리는 것이 범위 함정.
  tier: star_2
  mechanism_primary: "a^2=16, a>0 → a=4 → f(-1)f(3)/f(1)=a^{-1+3-1}=a"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/65-133.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "조건값(f(2)=16)과 세 지수(-1, 3, 1)를 바꿀 수 있다. 제약: 조건값은 밑의 거듭제곱이어야 a 가 유리수로 떨어지고, 지수의 합차가 정수가 되도록 두면 답이 깔끔하다."
    creative: "(1) 답을 a 로 남기지 않고 f(k) 꼴로 되묻기(★2) (2) f(2)=16 대신 f(2)f(-2)=1 처럼 항등식을 주어 a 를 못 정하게 하기(★3) (3) f(x)f(y)=f(x+y) 를 이용해 f(1)+f(-1) 값을 묻는 대칭식으로 바꾸면 ★3."
```

```yaml
- id: GN-ALG-65-134
  page: 65
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    y=3^{2x-1}+1 에 대한 설명(치역·증감·평행이동·점근선·겹침) 5개 중 옳은 것 고르기.
  category: "밑 통일로 식을 고쳐 읽기 → 그래프 성질 판정"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "3^{2x-1} 을 9^{x-1/2} 로 고쳐야 평행이동량과 「y=3^x 와 겹쳐지는가」 선택지를 판정할 수 있음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "지수함수의 식 변형(밑 통일)과 그래프 성질 판정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    치역(y>1)·증가·점근선 y=1 은 바로 읽히고, 평행이동과 겹침 선택지는 밑을 9 로 통일해야 참거짓이 갈린다.
    식을 다시 쓰는 동치 변환 1개(EQV d2)이고 함정은 치역 부등호(T-범위)와 이동량 1/2 vs 1(T-표기).
    STEP 1 ★2 출발 · 통찰 1 → ★2.
  tier: star_2
  mechanism_primary: "3^{2x-1}+1=9^{x-1/2}+1 로 고쳐 씀 → 점근선 y=1·치역 y>1·증가 확인 → 이동량과 밑으로 선택지 판정"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '④'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/65-134.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(3)·지수의 계수와 상수(2x-1)·y축 이동량(1)을 바꿀 수 있다. 제약: 지수의 계수가 1이 아니어야 밑 통일 단계가 살아나고, y축 이동량이 점근선·치역 선택지의 정답을 결정한다."
    creative: "(1) 옳지 않은 것을 고르게 뒤집기(★2) (2) 겹침 선택지만 남겨 평행이동으로 겹쳐지는 함수를 모두 고르게 하기(★3 · 66-141 골조) (3) 밑을 1보다 작게 바꿔 증감 선택지의 정답을 뒤집으면 ★2 유지."
```

```yaml
- id: GN-ALG-65-135
  page: 65
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    y=4^x 를 x축 방향 m, y축 방향 n 평행이동하면 y=(1/2)×2^{2x}-1 과 겹쳐질 때 m+n 의 값 구하기.
  category: "상수배를 지수 안으로 흡수 → 평행이동량 비교"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "(1/2)×2^{2x} 을 2^{2x-1}=4^{x-1/2} 로 고쳐 앞의 상수배를 x축 방향 이동량으로 바꿔 읽음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "상수배를 평행이동으로 고쳐 읽고 이동량 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    2^{2x}=4^x 로 밑을 맞춘 뒤 계수 1/2 을 지수 -1 로 흡수하면 4^{x-1/2}-1 이 되어 m, n 이 바로 읽힌다.
    상수배를 이동으로 번역하는 동치 변환 1개(EQV d2)가 핵심이고, 이동량이 1/2 이라는 분수 처리(T-표기)와 -1 의 부호(T-부호)가 함정.
    STEP 1 ★2 출발 · 통찰 1 → ★2.
  tier: star_2
  mechanism_primary: "(1/2)2^{2x}-1=2^{2x-1}-1=4^{x-1/2}-1 → m=1/2, n=-1 → m+n"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/65-135.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(4)·앞 계수(1/2)·상수항(-1)을 바꿀 수 있다. 제약: 계수는 밑의 유리수 거듭제곱이어야 이동량이 유리수로 떨어지고(1/2 → 지수 -1/2), 상수항이 그대로 n 이 된다."
    creative: "(1) m, n 을 각각 묻기(★2 유지) (2) 계수를 3 처럼 밑의 거듭제곱이 아닌 수로 바꿔 이동량을 로그로 만들기(★3) (3) 대칭이동을 섞어 겹쳐지는지 여부부터 판정시키면 ★3(66-141 골조)."
```

```yaml
- id: GN-ALG-65-136
  page: 65
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    y=3^x 를 y축에 대하여 대칭이동한 뒤 x축 방향 a, y축 방향 b 만큼 평행이동한 그래프가 그림과 같을 때(원점을 지나고 점근선이 y=-3) a+b 의 값 구하기.
  category: "그림의 점근선·통과점 → 이동량 a, b 역추적"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "그림에서 읽을 수 있는 것이 점근선 y=-3 과 원점 통과 둘뿐임을 파악해 b=-3, 3^{a}=3 이라는 식 조건으로 옮김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "그림으로 주어진 이동한 지수함수 그래프에서 이동량 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    대칭 뒤 식 y=3^{-(x-a)}+b 를 세우고, 점근선이 곧 b, 원점 통과가 곧 a 를 준다.
    그림의 시각 정보를 식 조건 두 개로 옮기는 표현 전환 1개(RT d2)가 난이도이고, 대칭에서 지수의 부호(T-부호)와 이동 부호(T-표기)가 함정.
    STEP 1 ★2 출발 · 통찰 1 → ★2.
  tier: star_2
  mechanism_primary: "y축 대칭 → y=3^{-x} → 이동해 y=3^{-(x-a)}+b → 점근선에서 b=-3, 원점 대입에서 3^a=3 → a=1 → a+b"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-2$'
  answer_source: "답지"
  figure: "crop:fig-65-136.png"
  latex: latex-bank/gn-alg/items/65-136.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(3)과 그림의 점근선 값(-3)을 바꿀 수 있다. 제약: 그림이 원점을 지난다는 정보가 a 를 정하므로 점근선 값은 밑의 거듭제곱에 음수를 붙인 수(-3, -9)로 두어야 a 가 정수로 떨어진다."
    creative: "(1) 통과점을 원점이 아닌 (1,0) 등으로 바꾸기(★2 유지) (2) 대칭을 원점 대칭으로 바꾸기(★3) (3) 점근선만 주고 지나는 사분면 조건을 추가해 a 의 범위를 묻게 하면 ★4(67-143 골조)."
```

```yaml
- id: GN-ALG-65-137
  page: 65
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 STEP 1"
  summary: |
    a>1 에서 직선 y=-x 가 곡선 y=a^x 과 만나는 점이 (p, -p), 곡선 y=a^{2x} 과 만나는 점이 (q, -q) 이고 log_a pq=-8 일 때 p+2q 의 값 구하기.
  category: "교점 조건을 로그 등식으로 전환 → 로그의 합으로 분해해 치환"
  M: {s: 2, k: 2, a: 3, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "교점 조건 a^p=-p, a^{2q}=-q 를 로그 등식 log_a(-p)=p, log_a(-q)=2q 로 전환"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "p, q 가 음수라 pq=(-p)(-q) 임을 이용해 log_a pq 를 두 로그의 합으로 분해하면 그대로 p+2q 가 됨"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "지수함수와 직선의 교점 조건을 로그로 전환해 값 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    p, q 를 각각 구하려 하면 풀리지 않고, 교점 조건을 로그로 옮겨 log_a pq=log_a(-p)+log_a(-q)=p+2q 로 묶는 것이 전부다.
    통찰 2개(RT d2 + EQV d2)라 STEP 1 ★2 출발에서 +1 → ★3. p, q 가 음수라 절댓값 처리를 빠뜨리면 로그가 정의되지 않는 것이 핵심 부호·범위 함정.
    [분류 이슈] 구역 신호는 STEP 1(★2)인데 통찰 밀도는 ★4 급 기출에 가깝다 — 2단 드리프트를 피해 ★3 으로 두고 기록만 함.
  tier: star_3
  mechanism_primary: "교점에서 a^p=-p, a^{2q}=-q → log_a(-p)=p, log_a(-q)=2q → log_a pq=p+2q=-8"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑤'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/65-137.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "log_a pq 의 값(-8)과 두 번째 곡선의 지수 배수(2)를 바꿀 수 있다. 제약: 답이 p+(배수)q 로 그대로 나오므로 주어진 로그값이 곧 답이고, 직선은 y=-x 처럼 교점의 두 좌표가 부호만 다른 형태여야 분해가 성립한다."
    creative: "(1) 곡선을 y=a^{3x} 로 바꿔 p+3q 를 묻기(★3 유지) (2) log_a(p/q) 를 주고 p-2q 를 묻기(★3) (3) 직선을 y=-x+k 로 바꾸면 좌표 관계가 깨져 ★4~5."
```

```yaml
- id: GN-ALG-66-138
  page: 66
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    그림의 y=3^x 그래프에서 x=a, x=b 에 대응하는 값이 α, β 이고 αβ=27 일 때 a+b 의 값 구하기.
  category: "그림의 좌표 라벨 → 함숫값 곱을 지수 합으로 묶어 역추적"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "그림 라벨을 α=3^a, β=3^b 로 옮기고 αβ=3^{a+b} 로 묶어야 a+b 가 한 번에 나옴"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "지수함수 그래프의 좌표 라벨에서 함숫값의 곱·합 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    64-e5 의 역방향 문항으로, 곱을 지수 합으로 묶으면 3^{a+b}=27 에서 a+b=3 이 바로 나온다.
    그림 라벨을 함숫값으로 읽는 표현 전환 1개(RT d1)이고 계산은 한 줄.
    STEP 1 ★2 출발 · 통찰 1 · M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "그림에서 α=3^a, β=3^b → αβ=3^{a+b}=27 → a+b=3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '③'
  answer_source: "답지"
  figure: "crop:fig-66-138.png"
  latex: latex-bank/gn-alg/items/66-138.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(3)과 곱의 값(27)을 바꿀 수 있다. 제약: 곱이 밑의 정수 거듭제곱이어야 a+b 가 정수로 떨어지고, 그림 라벨의 위치는 고정이다."
    creative: "(1) α/β 를 주고 a-b 를 묻기(★2 유지) (2) a+b 를 주고 αβ 를 묻기(★2 · 64-e5 골조) (3) 세 점으로 늘려 αβγ 와 a+b+c 를 연결하면 ★3."
```

```yaml
- id: GN-ALG-66-139
  page: 66
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    그림에서 y=2^x 와 그 역함수 y=g(x) 의 그래프가 주어지고 g(k)=3 일 때 k 의 값 구하기.
  category: "역함수 관계 → 그래프에서 읽은 대응을 원함수로 되돌리기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "역함수 그래프 위의 점 (k, 3) 을 원함수 위의 점 (3, k) 로 바꿔 읽어야 k=2^3 이 나옴"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "지수함수와 그 역함수 그래프의 대응(역함수 관계로 값 읽기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    계산은 2^3 한 줄이지만, 그림에서 k 가 역함수 쪽 x좌표라는 점을 읽고 x, y 를 맞바꿔야 한다.
    역함수 대응으로 옮기는 표현 전환 1개(RT d2)가 난이도 전부이고, x와 y를 바꾸지 않으면 log 값으로 오답이 되는 표기 함정.
    STEP 1 ★2 출발 · 통찰 1 · M_total 4 → ★2.
  tier: star_2
  mechanism_primary: "g 가 y=2^x 의 역함수 → g(k)=3 ⟺ 2^3=k → k=8"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$8$'
  answer_source: "답지"
  figure: "crop:fig-66-139.png"
  latex: latex-bank/gn-alg/items/66-139.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(2)과 그림의 높이(3)를 바꿀 수 있다. 제약: 답이 밑^{높이} 이므로 높이는 작은 정수로 두어야 하고, 그림의 1 표시(두 그래프의 절편)는 밑과 무관하게 고정이다."
    creative: "(1) 두 그래프가 직선 y=x 에 대하여 대칭임을 이용해 교점을 묻기(★3) (2) g(k)=3 대신 두 그래프 사이 선분 길이를 묻기(★3) (3) 역함수를 직접 log 로 써서 값을 구하게 하면 ★2 로 내려간다."
```

### 연습문제 STEP 2

```yaml
- id: GN-ALG-66-140
  page: 66
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    f(x)=a^x (a>0, a≠1) 에 대하여 8f(x+2)=2f(x+1)+f(x) 가 성립할 때 f(3) 의 값 구하기.
  category: "함수 방정식을 a^x 로 나눠 밑에 대한 이차방정식으로 환원"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "모든 x 에서 성립하는 항등식임을 보고 양변을 a^x 로 나눠 x 를 소거, 8a^2=2a+1 이라는 a 의 이차방정식으로 바꿈"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "지수함수의 함수 방정식 → 밑에 대한 이차방정식"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f(x+2)=a^x·a^2 처럼 공통인수 a^x 를 뽑아 없애는 것이 유일한 갈림길이고, 그 뒤는 이차방정식 풀이와 조건 걸러내기.
    두 근 중 a>0 을 만족하는 1/2 만 남기는 범위 함정(T-범위)과 지수 이동 부호(T-부호)가 있다.
    STEP 2 ★3 출발 · 통찰 1 → ★3.
  tier: star_3
  mechanism_primary: "8a^{x+2}=2a^{x+1}+a^x 를 a^x 로 나눠 8a^2-2a-1=0 → a>0 에서 a=1/2 → f(3)=(1/2)^3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{1}{8}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/66-140.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 계수(8, 2, 1)와 묻는 함숫값(f(3))을 바꿀 수 있다. 제약: 이차방정식이 인수분해되고 양의 근이 정확히 하나만 나오도록 계수를 잡아야 하며(음의 근은 a>0 으로 기각), a=1 이 근이 되면 안 된다."
    creative: "(1) f(x+1)=kf(x) 꼴로 낮춰 일차로 만들기(★2) (2) 두 양의 근이 모두 조건을 만족하도록 계수를 잡아 답을 두 개로 만들기(★4 · 사후 검증 강제) (3) 점화식을 f(x+2)=f(x+1)+f(x) 로 두어 무리수 밑이 나오게 하면 ★4."
```

```yaml
- id: GN-ALG-66-141
  page: 66
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    보기 4개((1/4)^x, (1/4)^{3-x}, -(1/2)^{2x}, 2^{2x-1}) 중 평행이동만으로 y=4^x 의 그래프와 겹쳐질 수 있는 것 모두 고르기.
  category: "각 식을 밑 4 의 지수 꼴로 통일 → 평행이동만으로 겹치는지 판정"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "네 식을 모두 4^{±x+c} 또는 -4^{±x} 꼴로 고쳐, 겹침 여부가 지수의 x 계수 부호와 앞의 부호로만 갈린다는 형태로 바꿈"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "평행이동으로 겹쳐지는 지수함수 판별(밑 통일)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    밑을 4 로 통일하면 ㄴ은 4^{x-3}, ㄹ은 4^{x-1/2} 이라 평행이동으로 겹치고, ㄱ은 4^{-x}(y축 대칭), ㄷ은 -4^{-x}(대칭 두 번)이라 겹치지 않는다.
    식을 같은 밑으로 다시 쓰는 동치 변환 1개(EQV d2)가 판정의 전부이며, 지수의 부호(T-부호)와 계수를 이동으로 흡수하는 표기(T-표기)가 함정.
    STEP 2 ★3 출발 · 통찰 1 → ★3.
  tier: star_3
  mechanism_primary: "각 보기를 밑 4 의 거듭제곱으로 통일 → 지수의 x 계수가 +1 이고 앞에 음수가 없는 것만 평행이동으로 겹침"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: 'ㄴ, ㄹ'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/66-141.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준 함수의 밑(4)과 보기 속 상수(3, 1/2)를 바꿀 수 있다. 제약: 모든 보기가 같은 수의 거듭제곱을 밑으로 가져야 통일이 되고, 지수의 x 계수 절댓값이 기준과 같아야(여기서는 4^{±x}) 판정이 성립한다."
    creative: "(1) 대칭이동까지 허용해 겹쳐지는 것을 고르게 하기(★3 유지 · 답이 늘어남) (2) 겹쳐지는 보기에 대해 이동량까지 쓰게 하기(★3) (3) 밑이 8, 2 처럼 x 계수가 달라지는 보기를 섞으면 ★4."
```

```yaml
- id: GN-ALG-66-142
  page: 66
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    y=a^{2x} (a>0, a≠1) 를 x축 방향 2, y축 방향 3 평행이동한 그래프가 a 의 값에 관계없이 항상 지나는 점 (α, β) 에 대하여 αβ 의 값 구하기.
  category: "a 에 무관한 고정점 → 지수를 0으로 만드는 x 찾기"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「a 의 값에 관계없이 항상 지난다」를 「a^{지수} 가 a 와 무관한 상수가 된다」 즉 지수=0 이라는 식 조건으로 바꿈"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "a 의 값에 관계없이 지나는 고정점(지수=0 조건)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    이동한 식 y=a^{2(x-2)}+3 에서 a 가 사라지려면 지수 2(x-2)=0, 즉 x=2 여야 하고 그때 y=1+3=4.
    조건을 식으로 옮기는 동치 변환 1개(EQV d2)가 핵심이며, a^0=1 을 쓰지 않고 a=1 을 대입하는 오답(T-범위)과 이동 부호(T-표기)가 함정.
    STEP 2 ★3 출발 · 통찰 1 → ★3.
  tier: star_3
  mechanism_primary: "y=a^{2(x-2)}+3 → a 무관 조건은 지수 2(x-2)=0 → α=2, β=1+3=4 → αβ=8"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/66-142.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수의 계수(2)와 두 이동량(2, 3)을 바꿀 수 있다. 제약: 고정점의 x좌표는 x축 방향 이동량으로, y좌표는 1+y축 이동량으로 정해지므로 답 αβ 가 원하는 값이 되도록 둘을 함께 조정한다."
    creative: "(1) 대칭이동을 섞어 고정점을 다시 찾게 하기(★3 유지) (2) y=a^{2x}+a 처럼 a 가 두 곳에 있어 고정점이 없도록 만들고 그 이유를 묻기(★4) (3) 고정점이 주어졌을 때 이동량을 역추적시키면 ★3."
```

```yaml
- id: GN-ALG-67-143
  page: 67
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    y=2^{-3x+6}+k 의 그래프가 제3사분면을 지나지 않도록 하는 정수 k 의 최솟값 구하기.
  category: "사분면 조건을 부등식으로 전환 → 감소함수의 경계값으로 k 범위 결정"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「제3사분면을 지나지 않는다」를 감소하는 개형에서 x<0 인 부분의 y 값이 0 이상이라는 부등식으로 옮기고, 경계인 x=0 에서의 값 2^6+k 만 확인하면 된다는 데까지 환원"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "지수함수 그래프가 특정 사분면을 지나지 않을 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    지수의 x 계수가 음수라 감소 그래프이고, x<0 쪽에서 y 가 가장 작아지는 곳이 x=0 경계다.
    사분면 조건을 부등식으로 옮기고 경계값 64+k≥0 만 보면 되는 전환 1개(RT d2)가 난이도이며, 등호·경계 처리(T-경계)와 정수 최솟값(T-범위)이 함정.
    STEP 2 ★3 출발 · 통찰 1 → ★3.
  tier: star_3
  mechanism_primary: "y=2^{-3(x-2)}+k 는 감소·점근선 y=k → x<0 에서 y≥0 이려면 경계 x=0 의 값 2^6+k≥0 → k≥-64 → 정수 최솟값 -64"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-64$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/67-143.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(2)과 지수의 계수·상수(-3x+6)를 바꿀 수 있다. 제약: 답이 -(밑^{상수항}) 이므로 x=0 에서의 값이 정수가 되도록 지수 상수항을 정수로 두고, 지수의 x 계수 부호가 감소·증가를 바꾸면 확인해야 할 경계도 반대쪽으로 옮겨간다."
    creative: "(1) 제2사분면이나 제4사분면을 지나지 않을 조건으로 바꾸기(★3~4 · 경계가 달라짐) (2) 모든 사분면을 지나도록 하는 k 의 범위를 묻기(★4) (3) k 를 고정하고 밑을 미지수로 두면 ★4."
```

```yaml
- id: GN-ALG-67-144
  page: 67
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    0<a<1 이고 n 이 3 이상의 자연수일 때 A=(n-1)제곱근 a^n, B=n제곱근 a^{n+1}, C=(n+1)제곱근 a^{n+2} 의 대소 비교.
  category: "거듭제곱근을 유리수 지수로 → 지수를 1+1/(n-k) 꼴로 분해해 비교"
  M: {s: 2, k: 2, a: 3, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "세 지수 n/(n-1), (n+1)/n, (n+2)/(n+1) 을 1+1/(n-1), 1+1/n, 1+1/(n+1) 로 분해해 n 이 문자인 채로 대소를 확정"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "일반항 꼴 거듭제곱근 세 수의 대소 비교(0<a<1)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    밑이 같으므로 지수만 비교하면 되는데, 분수 지수를 그대로 두면 비교가 안 되고 1+1/(분모) 꼴로 쪼개야 분모 크기로 순서가 정해진다.
    분해라는 동치 변환 1개(EQV d2)이고, 0<a<1 이라 지수 순서와 값 순서가 반대가 되는 것(T-부호)과 n 이 일반 자연수라는 추상(Mₐ=3)이 부담.
    STEP 2 ★3 출발 · 통찰 1 → ★3.
  tier: star_3
  mechanism_primary: "A=a^{1+1/(n-1)}, B=a^{1+1/n}, C=a^{1+1/(n+1)} → 지수는 A>B>C → 0<a<1 이므로 값은 A<B<C"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$A<B<C$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/67-144.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근지수와 지수의 어긋남(n 과 n+1 등)을 바꿀 수 있고 n 의 하한(3 이상)도 조정 가능하다. 제약: 세 지수가 모두 1+1/(정수) 꼴로 쪼개져야 하고, n-1 이 1 이상이어야 근지수가 성립한다."
    creative: "(1) a>1 로 바꿔 답을 뒤집기(★3 유지) (2) 네 수로 늘려 일반항 규칙을 발견하게 하기(★4 · I-PD) (3) 밑을 0<a<1 과 a>1 로 나눠 모두 답하게 하면 ★4."
```

```yaml
- id: GN-ALG-67-145
  page: 67
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["수능 기출"]
  category_type: "연습문제 STEP 2"
  summary: |
    y=a^x (a>1) 의 그래프와 직선 y=루트3 의 교점을 A, B(4, 0) 이라 할 때 직선 OA 와 직선 AB 가 수직이 되도록 하는 모든 a 의 값의 곱 구하기.
  category: "교점을 문자로 두고 수직 조건을 이차방정식으로 → 두 해를 모두 살려 곱하기"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "A 를 (t, 루트3) 으로 두고 기하 조건(OA⊥AB)을 기울기의 곱이 -1 인 대수식으로 옮겨 t 의 이차방정식을 얻음"
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "t 의 두 해가 모두 a>1 을 만족해 둘 다 답에 기여하므로 「모든 a 의 값」이 두 개가 됨"
    - step: 3
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "a^t=루트3 에서 a=3^{1/(2t)} 로 정리해 두 a 의 곱을 지수의 합 1/(2t1)+1/(2t2) 로 묶어 계산"
  insight_count: 3
  depth_score: 2.00
  type_id: null
  type_hint: "지수함수 그래프 위의 점과 수직 조건(기하 조건 → 지수 방정식)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    좌표를 문자로 두는 것부터 시작해 수직 조건을 이차식으로 옮기고, 두 해를 각각 a 로 되돌린 뒤 곱을 지수 합으로 묶는 세 단계가 모두 필요하다.
    통찰 3개(RT·MI·EQV)로 STEP 2 ★3 출발에서 +1 → ★4(저노출 유형 RT 포함). 두 해 중 하나를 버리면 오답이 되는 것이 함정(T-범위).
    ★5 는 통찰 3개 이상에 더해 SC/VF/SYM/XU 가 필요해 해당하지 않음.
  tier: star_4
  mechanism_primary: "A(t, 루트3), a^t=루트3 → OA⊥AB 에서 t^2-4t+3=0 → t=1, 3 → a=3^{1/(2t)} → 곱=3^{1/2+1/6}"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '②'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/67-145.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선의 높이(루트3)와 점 B 의 x좌표(4)를 바꿀 수 있다. 제약: 수직 조건에서 나오는 이차방정식 t^2-(B의 x좌표)t+(높이의 제곱)=0 이 서로 다른 두 양의 실근을 가져야 하고(판별식>0), a>1 이려면 두 근이 모두 양수여야 한다."
    creative: "(1) 모든 a 의 곱 대신 합을 묻기(★4 · 지수 합으로 묶이지 않아 계산이 늘어남) (2) 수직 대신 삼각형 OAB 의 넓이 조건으로 바꾸기(★4) (3) 한 근이 a>1 을 위배하도록 수를 잡아 사후 기각을 넣으면 I-VF 가 붙어 ★5 후보."
```

```yaml
- id: GN-ALG-67-146
  page: 67
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    P(0, k) 를 지나고 x축에 평행한 직선이 y=a^x, y=3^x 의 그래프와 만나는 점이 A, B 일 때 삼각형 OAP 와 OBP 의 넓이의 비가 1:2 이면 상수 a 의 값 구하기(k>1, a>3).
  category: "넓이 비를 밑변 공통 삼각형의 높이 비로 환원 → 로그 밑 변환"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 삼각형이 밑변 OP 를 공유함을 보고 넓이 비를 두 점의 x좌표(높이) 비로 바꿈"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "높이 비 log_a k : log_3 k = 1:2 를 밑 변환으로 풀면 k 가 소거되어 a 만 남는다는 형태로 고쳐 씀"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "지수함수 그래프와 삼각형 넓이 비로 밑 결정"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    두 삼각형의 밑변이 같다는 것을 알아채면 넓이 비가 곧 x좌표 비가 되고, 그 좌표는 로그로 표현된다.
    통찰 2개(RT d2 + EQV d2)로 STEP 2 ★3 출발에서 +1 → ★4. k 가 끝까지 남지 않고 소거된다는 점이 핵심이며, a>3 조건과 좌표의 부호 처리(T-범위·T-부호)가 함정.
  tier: star_4
  mechanism_primary: "밑변 OP 공통 → 넓이 비 = A, B 의 x좌표 비 = log_a k : log_3 k = 1:2 → 밑 변환에서 k 소거 → a=9"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$9$'
  answer_source: "답지"
  figure: "crop:fig-67-146.png"
  latex: latex-bank/gn-alg/items/67-146.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준 함수의 밑(3)과 넓이 비(1:2)를 바꿀 수 있다. 제약: a 는 기준 밑의 (비율)제곱으로 나오므로 비가 정수비여야 답이 깔끔하고, a>3 을 유지하려면 삼각형 OAP 쪽이 더 좁아야 한다."
    creative: "(1) a 를 주고 넓이 비를 묻기(★3 · 역방향이라 한 단계 줄어듦) (2) 직선을 y축에 평행하게 바꿔 세로 선분 길이 비로 묻기(★4 · 지수 비로 바뀜) (3) 세 번째 곡선을 추가해 세 넓이의 비를 묻게 하면 ★5 후보."
```

### 연습문제 실력 UP

```yaml
- id: GN-ALG-67-147
  page: 67
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    두 함수 y=2^x, y=2^{x-2}-2 의 그래프와 두 직선 y=-x+3, y=-x+1 로 둘러싸인 부분의 넓이 구하기.
  category: "평행이동 벡터가 자르는 직선과 평행함을 발견 → 평행사변형 넓이"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-SYM
      depth: 3
      effective_depth: 3
      signal_ref: []
      description: "두 곡선을 잇는 평행이동 (2, -2) 가 두 직선의 방향(기울기 -1)과 같아 직선들이 이 이동에 대해 그대로 옮겨진다는 것을 발견"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "그 불변성 덕분에 곡선 부분이 서로 메워져 영역이 평행사변형이 되고, 넓이를 이동벡터 길이 2루트2 와 두 직선 사이 거리 루트2 의 곱으로 환원"
  insight_count: 2
  depth_score: 2.50
  type_id: null
  type_hint: "평행이동 벡터가 자르는 직선과 평행한 경우의 도형 넓이"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    곡선 두 개와 기울기 -1 인 직선 두 개가 겹친 영역이지만, 이동벡터 (2, -2) 가 직선 방향과 같다는 한 가지 발견으로 평행사변형으로 무너진다.
    통찰 2개(SYM d3 + RT d2)에 depth 3 이 있어 실력 UP ★4 출발을 유지·확정. ★5 는 통찰 3개 이상 요건을 못 채워 해당 없음.
    적분으로 접근하면 풀리지 않는다는 점에서 진입 저항이 큰 문항이다.
  tier: star_4
  mechanism_primary: "y=2^{x-2}-2 는 y=2^x 를 (2, -2) 평행이동한 것이고 이 벡터가 두 직선과 평행 → 영역은 평행사변형 → 넓이 = 2루트2 × 루트2 = 4"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/67-147.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이동량 (2, -2) 와 두 직선의 절편(3, 1)을 바꿀 수 있다. 제약: 이동벡터의 기울기가 두 직선의 기울기와 반드시 같아야(여기서는 -1) 평행사변형 환원이 성립하고, 두 직선은 서로 평행해야 한다."
    creative: "(1) 두 직선을 x축에 평행하게 되돌려 난이도를 낮추기(★2 · 64-e6 골조) (2) 이동벡터와 직선 기울기를 일부러 어긋나게 해 환원이 안 되는 이유를 묻기(★5 후보) (3) 곡선을 y=2^x 와 그 역함수로 바꿔 y=x 대칭까지 결합하면 ★5 후보."
```

## 표본 판정 요약 (35문)

- ★ 분포: ★1 5 · ★2 20 · ★3 7 · ★4 3 · ★5 0
- 구역별 출발점과 결과: 개념원리 익히기 5문 모두 ★1 · 필수 예제 6문 ★2 · 확인체크 9문 ★2 8 + ★3 1 · STEP 1 7문 ★2 6 + ★3 1 · STEP 2 7문 ★3 5 + ★4 2 · 실력 UP 1문 ★4
- 통찰형 19 · 절차형 16 · premium 0 · novelty_score 0(전부)
- 통찰 유형 분포: I-RT 10 · I-EQV 9 · I-MI 1 · I-SYM 1 (총 21 라벨 / 19문). 단원 성격상 「식 ↔ 그래프·역함수 전환」과 「밑 통일·상수배를 이동으로 고쳐 읽기」 둘이 사실상 전부다.
- type_hint 상위 5: 「평행이동·대칭이동한 지수함수의 그래프와 치역·점근선」 3 · 「밑을 통일한 두·세 수의 대소 비교」 3 · 「지수함수 그래프의 좌표 라벨에서 함숫값의 곱·합」 2 · 「평행이동·대칭이동 후 식 결정(계수 비교)」 2 · 「평행이동 관계인 두 그래프로 둘러싸인 도형의 넓이」 2
- 대상층: 하위권 2 · 중하위권 13 · 중위권 15 · 중상위권 3 · 상위권 2
- 그림: 6문(`crop:fig-64-e5.png` · `crop:fig-64-131.png` · `crop:fig-65-136.png` · `crop:fig-66-138.png` · `crop:fig-66-139.png` · `crop:fig-67-146.png`)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-ALG-65-137 | 구역은 STEP 1(★2 출발)인데 교육청 기출이고 통찰 밀도(RT+EQV, 교점 조건의 로그 전환)는 ★4 급. 2단 드리프트를 피해 ★3 으로 두고 기록 | ★3 / ★4 |
| GN-ALG-64-132 | 확인체크(★2 출발)지만 상수배를 로그 이동량으로 번역하는 단계가 추가돼 짝인 필수 예제 64-e6(★2)보다 한 단 높게 잡음. 카탈로그에서 두 문항을 같은 유형으로 묶을지 갈릴 수 있음 | ★2 / ★3 |
| GN-ALG-60-122 | 익히기 통번호(★1)지만 평행·대칭 4종을 한 문항에서 다루고 M_total 6. 규칙상 +1 조건(통찰 2개 이상)에 해당하지 않아 ★1 유지 | ★1 / ★2 |
| GN-ALG-64-131 | 계단 구조 읽기가 체감 난이도의 전부라 학생 체감은 ★3 에 가까우나, 통찰 1개·M_total 5 라 확인체크 출발점 ★2 유지 | ★2 / ★3 |
| GN-ALG-67-146 | STEP 2 이지만 넓이 비 → 로그 밑 변환 두 단계라 ★4 로 올림. 같은 구역의 67-143(★3)과 체감 차가 크지 않다는 반론 가능 | ★3 / ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고)

- **따로 세워야 할 유형**: ⑴ 「평행이동·대칭이동 후 식 결정(계수 비교)」(63-e3 · 63-128) — 이동 순서와 대칭 종류만 바뀌는 안정된 골조라 독립 유형이 필요하다. ⑵ 「평행이동 관계인 두 그래프로 둘러싸인 도형의 넓이」(64-e6 · 64-132 · 67-147) — 자르는 직선이 x축에 평행한지, 이동벡터와 평행한지에 따라 ★2 / ★3 / ★4 로 갈리므로 하위 갈래까지 함께 정의해야 한다. ⑶ 「그림의 좌표 라벨에서 함숫값의 곱·합」(64-e5 · 66-138) — 정·역방향 한 쌍으로 묶어 base ★2. ⑷ 「특정 사분면을 지나지 않을 조건」(62-127 · 67-143) — 판정만 하는 ★2 와 미지수 범위를 구하는 ★3~4 를 같은 유형의 깊이 차로 둔다.
- **통합해도 될 유형**: 「밑을 통일한 두 수 / 세 수의 대소 비교」(60-123 · 63-e4 · 63-130 · 67-144)는 항의 개수와 밑이 문자인지만 다르므로 한 유형 + 깊이 축으로 충분하다. 「지수함수의 성질 참·거짓 판정」(61-e1 · 61-124 · 65-134)도 밑이 1보다 큰지 작은지로만 갈리므로 하나로 묶는다.
- **카탈로그 밖 연결**: 64-132 · 65-137 · 67-146 은 로그(07단원 이후)를 답에 쓰거나 밑 변환이 필요해, 06단원 유형으로만 두면 선수 개념이 어긋난다. 카탈로그에서 로그 의존 여부를 태그로 남길 것.
