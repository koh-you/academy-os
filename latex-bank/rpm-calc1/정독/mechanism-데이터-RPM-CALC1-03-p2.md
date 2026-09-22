---
name: mechanism-데이터-RPM-CALC1-03-p2
description: RPM 미적분Ⅰ 03 미분계수와 도함수(2/3 · 유형 01 평균변화율 ~ 유형 09 곱의 미분법) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 미적분Ⅰ (22개정) · 전사본 latex-bank/rpm-calc1
  section: 03 미분계수와 도함수
  unit_code: CALC1-03
  part: "2/3"
  extract_range: "42~47쪽 · 0244~0282"
  total_problems: 39
  unit_total: 125
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-calc1/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-calc1/items/<id>.tex
  image_source: latex-bank/rpm-calc1/figures/ (crops.json)
---

# RPM 미적분Ⅰ · 03 미분계수와 도함수 (2/3) 정독 데이터 (v1.0)

이 파일은 RPM 미적분Ⅰ 03 미분계수와 도함수 단원(125문) 가운데 42~47쪽의 39문항(0244~0282)을 다룬다. 구역은 유형 01 평균변화율 · 유형 02 평균변화율과 미분계수 · 유형 03·04 미분계수를 이용한 극한값의 계산(h→0 꼴 · x→a 꼴) · 유형 05 관계식이 주어진 경우 · 유형 06 미분계수의 기하적 의미 · 유형 07 미분가능성과 연속성 · 유형 08 미분법의 공식 · 유형 09 곱의 미분법 순이며, 각 유형의 첫 문항은 「대표문제」 태그(난이도 표시 없음 → ★2 출발), 나머지는 중하·중·상중 난이도 표시(★2 출발에서 −1 후보 · ★2 · ★3 출발)와 「서술형」 태그(0250 · 0268 · 0279)를 가진다. 그림 문항은 6문(0247 · 0263 · 0264 · 0265 · 0267 · 0269)이며 모두 크롭 이미지로 확인했다.

주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 사슬) · `insights[]`(유형 코드 · depth · effective_depth · 근거) · `variation_notes`(numeric/creative)를 채웠다. `depth_score` 는 insights 의 effective_depth 평균(없으면 0.00)이고, `insight_type` 은 통찰이 없거나 d1 한 개뿐이면 절차형, d2 이상 또는 2개 이상이면 통찰형으로 적었다. Mₐ 는 구체 수치 1, 미정계수·매개변수 2, 다항함수 f 가 기호로만 주어져 그 값·미분계수만 다루는 문항도 2, 관계식·그래프처럼 f 의 구조 자체를 다뤄야 하는 문항은 3 으로 매겼다. Mₜ 는 함정 0~1개면 1, 2~3개면 2. ★ 조정은 통찰 0·M_total ≤ 5·한 단계(Mₛ=1)면 −1, d2 통찰 한 개는 출발점 유지, d2 통찰과 M_total ≥ 9 가 겹치면 +1 후보, 통찰 2개 이상·d3 는 +1 로 적용했다. `target_cohort` 는 §3.3 fit 가운데 가장 자연스러운 주 대상층 하나다.

## 문항 데이터

### 유형 01 평균변화율

```yaml
- id: RPM-CALC1-0244
  page: 42
  vendor_label: "유형 01 평균변화율"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    $f(x)=x^3-2x+5$ 에서 $x$ 가 $1$ 에서 $a$ 까지 변할 때의 평균변화율이 $5$ 가 되는 상수 $a$ ($a>1$).
  category: "평균변화율 식 세우기 → (a-1) 로 약분 → 이차방정식 → a>1 인 근 선택"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평균변화율 — 구간 끝 미지수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (f(a)-f(1))/(a-1) = (a³-2a+1)/(a-1) = a²+a-1 (분자를 (a-1) 로 나눔). a²+a-1=5 → (a+3)(a-2)=0, a>1 이므로 a=2. 삼차식을 (a-1) 로 약분하는 한 단계가 있을 뿐 통찰은 없다. 유형 대표(난이도 표시 없음)·통찰 0·M_total 5·두 단계 → ★2 유지.
  tier: star_2
  mechanism_primary: "평균변화율 (f(a)-f(1))/(a-1) → 분자를 (a-1) 로 약분해 a²+a-1 → =5 이차방정식 → a>1 인 근 2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0244.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼차식 계수·시작점 1·평균변화율 값 5 를 바꿀 수 있음. 제약: 분자가 (a-시작점) 으로 약분된 뒤 나오는 이차방정식이 정수근을 갖고, a>1 조건으로 한 근만 남게 다른 근은 음수나 1 이하로."
    creative: "(1) 시작점도 미지수로 두고 「x 가 a 에서 a+2 까지」 의 평균변화율 = 상수 → a 의 이차식(★2 유지) (2) 평균변화율을 특정 x=c 의 순간변화율과 같게 두면 유형 02 골조로 넘어감(★2) (3) 이차함수로 바꾸면 약분 뒤 일차식이 되어 ★1."
```

```yaml
- id: RPM-CALC1-0245
  page: 42
  vendor_label: "유형 01 평균변화율"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    $f(x)=x^2$ 에서 $x$ 가 $1$ 에서 $1+h$ 까지 변할 때의 평균변화율이 $3$ 인 양수 $h$.
  category: "평균변화율 식 → h 로 약분 → 일차방정식"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평균변화율 — 구간 끝 미지수 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ((1+h)²-1)/h = 2+h = 3 → h=1. 약분 한 줄이며 h>0 조건도 자동으로 만족. 중하·통찰 0·M_total 4·한 단계 → ★2 출발에서 −1 → ★1.
  tier: star_1
  mechanism_primary: "((1+h)²-1²)/h → 2+h → =3 → h=1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0245.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f 의 계수(2x², x²+x)·시작점·평균변화율 값을 바꿀 수 있음. 제약: h 로 약분되어 일차식이 되고 h>0 인 정수·간단한 분수 해."
    creative: "(1) 삼차 f 로 바꾸면 h 에 대한 이차식 → 양수 h 선택(★2) (2) h→0 극한을 이어 물어 미분계수 도입 문항으로(★1~2) (3) 「평균변화율이 3 이 되는 양수 h 가 존재하지 않도록 하는 f 의 계수」 로 뒤집으면 판별식 사고(★3·I-BW d1)."
```

```yaml
- id: RPM-CALC1-0246
  page: 42
  vendor_label: "유형 01 평균변화율"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    $f(x)=x^2-3x+a$ 에서 $x$ 가 $1$ 에서 $a$ 까지 변할 때의 평균변화율이 $2a-7$ 인 상수 $a$.
  category: "f(a)-f(1) 인수분해 → (a-1) 약분 → 평균변화율 a-2 → 일차방정식"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평균변화율 — 구간 끝 미지수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f(a)=a²-2a, f(1)=a-2 → 분자 a²-3a+2=(a-1)(a-2) → 평균변화율 a-2. a-2=2a-7 → a=5. 상수 a 가 함수의 상수항과 구간 끝에 겹쳐 나오는 표기 함정 하나(상수항 a 는 차에서 상쇄). 중·통찰 0·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "f(a)-f(1)=(a-1)(a-2) → 평균변화율 a-2 → =2a-7 → a=5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0246.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항 계수 -3 과 우변 2a-7 을 바꿀 수 있음. 제약: 분자가 (a-1)(a-p) 로 인수분해되도록(상수항 a 가 f(a)-f(1) 에서 상쇄되는 구조 유지) · 최종 일차방정식의 해가 1 이 아닌 정수."
    creative: "(1) 상수 a 를 이차항 계수로 옮기면 약분 뒤 a 의 이차식 → ★2~3 (2) 「평균변화율이 a 의 값에 관계없이 일정」 하도록 하는 f 의 조건 찾기 → 항등식 사고(★3·I-EQV d1) (3) 구간을 [a, a+1] 로 주면 a 가 세 곳에 등장 → Mₜ 상승(★2)."
```

```yaml
- id: RPM-CALC1-0247
  page: 42
  vendor_label: "유형 01 평균변화율"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    축이 직선 $x=2$ 인 이차함수 그래프(꼭짓점 A(2, f(2)) · 점 B(4, f(4)))에서 직선 AB 의 기울기가 $2$ 일 때 $x$ 가 $0$ 에서 $2$ 까지 변할 때의 평균변화율. 그림 있음.
  category: "AB 기울기 = [2,4] 평균변화율 → 축 대칭 f(0)=f(4) → [0,2] 평균변화율은 부호 반전"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 2
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "축 대칭 f(0)=f(4) 로 구간 [0,2] 의 평균변화율을 [2,4] 의 평균변화율(=AB 기울기)의 부호 반전으로 읽기"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "이차함수 그래프의 대칭축과 평균변화율(기울기 부호 반전)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    축 x=2 대칭이므로 f(0)=f(4). (f(2)-f(0))/2 = (f(2)-f(4))/2 = -(f(4)-f(2))/2 = -(AB 기울기) = -2. 대칭으로 두 구간의 평균변화율이 부호만 다름을 읽는 것이 전부이며, 식을 세워도(f=p(x-2)²+q → 2p=2 → p=1) 같은 결론. 상중·통찰 1(SYM d2)·M_total 5 → ★3 유지. [분류 이슈] 대수 경로가 짧아 체감은 ★2~3 — 라벨 ★3 은 벤더 신호 우선.
  tier: star_3
  mechanism_primary: "AB 기울기 2 = [2,4] 평균변화율 → 축 x=2 대칭 f(0)=f(4) → [0,2] 평균변화율 = -2"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-2$'
  answer_source: "답지"
  figure: "crop:fig-0247.png"
  latex: latex-bank/rpm-calc1/items/0247.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "축 위치(2)·B 의 x 좌표(4)·AB 기울기(2)를 바꿀 수 있음. 제약: 묻는 구간이 축 기준으로 [2,4] 의 거울상이 되도록 좌우 폭을 같게 유지 · 그림 라벨(A, B, 2, 4)을 함께 수정."
    creative: "(1) 거울상이 아닌 구간 [0,3] 을 물으면 f=p(x-2)²+q 를 실제로 세워야 함 → I-SYM 소멸·절차형 ★2 (2) 「x 가 0 에서 k 까지의 평균변화율이 0」 인 k 를 물으면 대칭을 거꾸로 쓰는 I-BW d1(★3) (3) 삼차함수(변곡점 점대칭)로 바꾸어 같은 골조 → ★4 후보(I-SYM d2 + 점대칭 이해)."
```

### 유형 02 평균변화율과 미분계수

```yaml
- id: RPM-CALC1-0248
  page: 42
  vendor_label: "유형 02 평균변화율과 미분계수"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    $f(x)=x^2-2x$ 에서 $x$ 가 $-1$ 에서 $4$ 까지 변할 때의 평균변화율과 $x=a$ 에서의 미분계수가 같을 때 상수 $a$.
  category: "평균변화율 계산 → f'(a) 식 → 등식 → a"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평균변화율 = 미분계수 조건에서 미지수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (f(4)-f(-1))/5 = (8-3)/5 = 1. f'(a)=2a-2=1 → a=3/2. 평균변화율과 미분계수를 각각 계산해 등식 한 번. 유형 대표·통찰 0·M_total 5·두 단계 → ★2 유지.
  tier: star_2
  mechanism_primary: "[-1,4] 평균변화율 (8-3)/5=1 → f'(a)=2a-2 → 2a-2=1 → a=3/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{3}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0248.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차식 계수·구간 [-1,4] 를 바꿀 수 있음. 제약: 이차함수에서는 평균변화율 = f'(구간 중점) 이므로 답은 항상 구간의 중점(3/2) — 답을 바꾸려면 구간을 바꿔야 함."
    creative: "(1) 삼차함수로 바꾸면 f'(a)=상수 가 이차방정식 → 두 근 중 구간 안 조건 선택(★2·I-VF d1) (2) 「평균변화율 = f'(a) 인 a 가 구간의 중점임을 보이기」 서술형(★3·I-PD d1) (3) 구간을 [k, k+2] 로 주고 a 를 k 로 나타내기(★2)."
```

```yaml
- id: RPM-CALC1-0249
  page: 42
  vendor_label: "유형 02 평균변화율과 미분계수"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    $f(x)=x^3-1$ 에서 $x$ 가 $1$ 에서 $k$ 까지 변할 때의 평균변화율과 $x=\sqrt{7}$ 에서의 순간변화율이 같을 때 상수 $k$ ($k>1$).
  category: "평균변화율 k²+k+1 → f'(√7)=21 → 이차방정식 → k>1 선택"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평균변화율 = 미분계수 조건에서 미지수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (k³-1)/(k-1) = k²+k+1. f'(x)=3x² → f'(√7)=21. k²+k-20=0 → (k+5)(k-4)=0, k>1 이므로 k=4. 약분·미분계수·이차방정식의 표준 절차. 중·통찰 0·M_total 5·두 단계 → ★2.
  tier: star_2
  mechanism_primary: "[1,k] 평균변화율 k²+k+1 → f'(√7)=21 → k²+k-20=0 → k>1 인 근 4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0249.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "순간변화율 지점 √7(→ f'=3·7)과 시작점 1 을 바꿀 수 있음. 제약: 3c² 이 정수가 되게 c=√n · 이차방정식 k²+k+1=3n 이 정수근 · k>1 로 한 근만 남게."
    creative: "(1) f'(c)=평균변화율 인 c 를 거꾸로 묻기 → c=±√((k²+k+1)/3) 부호 선택(★2·I-VF d1) (2) 구간 [1,k] 를 [k,2k] 로 → k 의 이차식(★2) (3) 「x=√7 에서의 순간변화율」 을 「접선의 기울기」 로 바꾸어 유형 06 연계(★2)."
```

```yaml
- id: RPM-CALC1-0250
  page: 42
  vendor_label: "유형 02 평균변화율과 미분계수"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    $f(x)=ax^2+2x$ 에서 $x$ 가 $a$ 에서 $2a$ 까지 변할 때의 평균변화율과 $x=1$ 에서의 미분계수가 같을 때 양수 $a$ (서술형).
  category: "평균변화율 (f(2a)-f(a))/a → 3a²+2 → f'(1)=2a+2 → a 의 이차방정식 → 양수 해"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평균변화율 = 미분계수 조건에서 미지수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f(2a)-f(a) = 3a³+2a 를 구간 폭 a 로 나눠 3a²+2. f'(x)=2ax+2 → f'(1)=2a+2. 3a²+2=2a+2 → a(3a-2)=0, 양수이므로 a=2/3. a 가 계수와 구간에 함께 있어 문자 계산이 조금 무겁지만 절차는 표준. 중·서술형·통찰 0·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "(f(2a)-f(a))/a = 3a²+2 → f'(1)=2a+2 → 3a²-2a=0 → a>0 → 2/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{2}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0250.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항 계수 2·구간 [a,2a]·미분계수 지점 1 을 바꿀 수 있음. 제약: 평균변화율 식이 a 로 약분되어 a 의 이차식이 되고 양수 해가 유리수 · a=0 이 항상 근으로 나오므로 「양수 a」 조건 유지."
    creative: "(1) 구간을 [a, a+1] 로 주면 a 의 이차방정식이 두 양근 → 조건 추가 필요(★2~3·I-VF d1) (2) 「모든 a 에 대해 평균변화율 = f'(c)」 인 c 를 a 로 나타내기 → c=3a/2 (★3·I-EQV d1) (3) 서술형 채점 기준(평균변화율·미분계수·방정식 풀이 3단계) 그대로 활용."
```

```yaml
- id: RPM-CALC1-0251
  page: 42
  vendor_label: "유형 02 평균변화율과 미분계수"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    다항함수 $f$ 가 $f(1)=3$ 이고 $x$ 가 $1$ 에서 $k$ 까지 변할 때의 평균변화율이 $-k$ ($k\ne 1$) 일 때 $x=-1$ 에서의 미분계수.
  category: "평균변화율 조건을 k 의 항등식으로 읽기 → f(k)=-k²+k+3 → f 결정 → f'(-1)"
  M: {s: 3, k: 1, a: 3, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「k 마다 성립하는 평균변화율 -k」 를 f(k) 에 대한 항등식으로 바꿔 f 를 통째로 결정"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "평균변화율 조건(항등식)으로 다항함수 결정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    (f(k)-3)/(k-1) = -k 가 모든 k≠1 에서 성립 → f(k) = -k(k-1)+3 = -k²+k+3, 다항함수이므로 f(x)=-x²+x+3 (f(1)=3 도 만족). f'(x)=-2x+1 → f'(-1)=3. 한 조건이 「k 마다」 성립함을 항등식으로 읽어 f 자체를 결정하는 전환이 핵심(EQV d2). 상중·통찰 1(d2)·M_total 8 → ★3.
  tier: star_3
  mechanism_primary: "(f(k)-3)/(k-1)=-k (모든 k≠1) → f(k)=-k²+k+3 → f(x)=-x²+x+3 → f'(-1)=3"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0251.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f(1) 값 3·평균변화율 식 -k 를 일차식 pk+q 로 바꿀 수 있음. 제약: f(k)=(pk+q)(k-1)+f(1) 이 k=1 에서 f(1) 과 모순 없이 이어지고, 묻는 f'(c) 가 정수."
    creative: "(1) 평균변화율을 k² 꼴로 주면 f 가 삼차 → 같은 골조(★3) (2) 구간을 [k, 2k] 로 주면 f(2k)-f(k) 조건 → f 의 차수 논증까지 필요(★4·I-EQV d2 + I-BW d1) (3) 「f'(1) 을 구하시오」 로 바꾸면 lim_{k→1}(-k)=-1 로 정의 자체가 답 → 유형 02 골조(★2)."
```

### 유형 03 미분계수를 이용한 극한값의 계산; $\lim\limits_{h\to 0}\frac{f(a+h)-f(a)}{h}$의 꼴

```yaml
- id: RPM-CALC1-0252
  page: 43
  vendor_label: '유형 03 미분계수를 이용한 극한값의 계산; $\lim\limits_{h\to 0}\frac{f(a+h)-f(a)}{h}$의 꼴'
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    다항함수 $f$ 가 $f'(2)=6$ 일 때 $\lim_{h\to 0}\dfrac{f(2+h)-f(2-h)}{3h}$ 의 값.
  category: "분자에 f(2) 빼고 더하기 → 두 미분계수 → (1/3)(f'(2)+f'(2))"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미분계수 정의로 극한값 계산(h→0 꼴)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분자를 [f(2+h)-f(2)]-[f(2-h)-f(2)] 로 나누고 각각 h, -h 로 맞추면 f'(2)+f'(2)=12, 3 으로 나눠 4. 이 유형의 표준 절차(대표문제)이며 부호·계수 맞추기만 있다. 유형 대표·통찰 0·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "f(2+h)-f(2-h) = [f(2+h)-f(2)] + [f(2)-f(2-h)] → f'(2)+f'(2)=12 → ÷3 → 4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0252.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f'(2) 값·분모 계수 3·양쪽 h 계수(2+ph, 2-qh)를 바꿀 수 있음. 제약: 답 = (p+q)f'(2)/분모계수 가 정수나 간단한 분수."
    creative: "(1) 한쪽을 f(2-h²) 처럼 h² 으로 바꾸면 그 항의 극한이 0 → 함정 추가(★2·I-EQV d1 · 0255 골조) (2) 분모를 h(h+1) 로 → 극한 분리 한 단계(★2) (3) f'(2) 대신 lim_{x→2}(f(x)-f(2))/(x-2)=6 으로 주면 유형 04 와 결합(★2)."
```

```yaml
- id: RPM-CALC1-0253
  page: 43
  vendor_label: '유형 03 미분계수를 이용한 극한값의 계산; $\lim\limits_{h\to 0}\frac{f(a+h)-f(a)}{h}$의 꼴'
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    다항함수 $f$ 가 $f'(1)=3$ 이고 $\lim_{h\to 0}\dfrac{f(1+kh)-f(1)}{h}=6$ 일 때 상수 $k$.
  category: "분모를 kh 로 맞추기 → k·f'(1) → 일차방정식"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미분계수 정의로 극한값 계산(h→0 꼴)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (f(1+kh)-f(1))/h = k·(f(1+kh)-f(1))/(kh) → k·f'(1) = 3k = 6 → k=2. kh 로 맞추는 한 단계. 중하·통찰 0·M_total 5·한 단계 → ★2 출발에서 −1 → ★1.
  tier: star_1
  mechanism_primary: "(f(1+kh)-f(1))/h = k·f'(1) → 3k=6 → k=2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0253.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f'(1) 값·극한값·k 의 위치(kh 대신 h/k)를 바꿀 수 있음. 제약: k=극한값/f'(1) 이 정수나 간단한 분수 · k≠0."
    creative: "(1) f(1+kh)-f(1-h) 로 양쪽 확장 → (k+1)f'(1) (★2) (2) k 가 두 곳에 나오는 (f(1+kh)-f(1+h))/(kh) → (k-1)/k 비율 방정식(★2·I-EQV d1) (3) 「k 의 값에 관계없이 극한값이 같아지는 h 계수 배치」 를 찾게 하면 항등식 사고(★3)."
```

```yaml
- id: RPM-CALC1-0254
  page: 43
  vendor_label: '유형 03 미분계수를 이용한 극한값의 계산; $\lim\limits_{h\to 0}\frac{f(a+h)-f(a)}{h}$의 꼴'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    다항함수 $f$ 에 대하여 $\lim_{h\to 0}\dfrac{f(a+2h)-f(a-3h)}{h}$ 를 $f'(a)$ 로 나타내기. 5지선다.
  category: "분자에 f(a) 빼고 더하기 → 2f'(a)+3f'(a)"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미분계수 정의로 극한값 계산(h→0 꼴)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    [f(a+2h)-f(a)]/h → 2f'(a), -[f(a-3h)-f(a)]/h = 3·[f(a-3h)-f(a)]/(-3h) → 3f'(a). 합 5f'(a)(⑤). 부호가 두 번 뒤집히는 a-3h 쪽이 유일한 함정. 중·통찰 0·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "f(a+2h)-f(a-3h) = [f(a+2h)-f(a)] - [f(a-3h)-f(a)] → 2f'(a)+3f'(a) → 5f'(a)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0254.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "h 계수 2, -3 을 바꿀 수 있음. 제약: 답이 (p+q)f'(a) 꼴이며 부호 함정(a-3h 쪽의 -(-3)=+3)이 살아 있도록 한쪽은 음수 계수 유지 · 선택지에 (p-q)f'(a) 오답을 배치."
    creative: "(1) 분모를 2h 로 → 계수 나눗셈 추가(★2) (2) 세 항 f(a+2h)-2f(a)+f(a-2h) 처럼 1차 항이 상쇄되는 조합을 주면 극한이 0 → 함정형(★3·I-EQV d1) (3) f'(a) 대신 「f(a+h)-f(a)=h·g(h), g 연속」 조건으로 주어 정의를 재해석하게 하기(★3·I-EQV d1)."
```

```yaml
- id: RPM-CALC1-0255
  page: 43
  vendor_label: '유형 03 미분계수를 이용한 극한값의 계산; $\lim\limits_{h\to 0}\frac{f(a+h)-f(a)}{h}$의 꼴'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    다항함수 $f$ 가 $f'(a)=-3$ 일 때 $\lim_{h\to 0}\dfrac{f(a+3h)-f(a+h^2)}{h}$ 의 값.
  category: "분자 분리 → 3h 항은 3f'(a) → h² 항은 h·(차분/h²) → 0"
  M: {s: 3, k: 1, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "f(a+h²)-f(a) 를 h² 로 나눈 뒤 h 를 곱한 꼴로 읽어 그 항의 극한이 f'(a)·0=0 임을 알아내기"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "미분계수 정의로 극한값 계산(h→0 꼴)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분자 = [f(a+3h)-f(a)] - [f(a+h²)-f(a)]. 앞은 3f'(a)=-9. 뒤는 (f(a+h²)-f(a))/h² · h → f'(a)·0 = 0. 답 -9. h² 항이 「h 로 나눈 뒤에도 h 가 남아 0」 이 되는 것을 읽는 한 단계가 통찰(EQV d1), 나머지는 표준. 중·통찰 1(d1)·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "분자 분리 → [f(a+3h)-f(a)]/h → 3f'(a)=-9 · [f(a+h²)-f(a)]/h = h·(차분/h²) → 0 → -9"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-9$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0255.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f'(a) 값·3h 계수·h² 대신 h³, 2h² 등으로 바꿀 수 있음. 제약: 소거되는 항의 h 차수가 2 이상이어야 0 이 되고, 답 = (계수)·f'(a) 정수."
    creative: "(1) f(a+h²)-f(a-h²) 만 있는 극한을 h² 로 나누게 하면 2f'(a)(★2) (2) 분모를 h² 으로 바꾸어 f(a+h)-f(a+h²) 을 나누면 발산 → 「극한값이 존재하도록 하는 상수」 를 묻는 역문제로 재구성(★3·I-BW d1) (3) 분자에 f(a+h²) 항을 두 개(f(a+2h²)-f(a-h²)) 두고 분모 h² → 3f'(a)(★2)."
```

### 유형 04 미분계수를 이용한 극한값의 계산; $\lim\limits_{x\to a}\frac{f(x)-f(a)}{x-a}$의 꼴

```yaml
- id: RPM-CALC1-0256
  page: 43
  vendor_label: '유형 04 미분계수를 이용한 극한값의 계산; $\lim\limits_{x\to a}\frac{f(x)-f(a)}{x-a}$의 꼴'
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    다항함수 $f$ 가 $f'(1)=2$ 일 때 $\lim_{x\to 1}\dfrac{f(x^3)-f(1)}{x-1}$ 의 값.
  category: "분모를 x³-1 로 바꾸고 (x³-1)/(x-1) 을 곱하기 → f'(1)·3"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미분계수 정의로 극한값 계산(x→a 꼴)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x³=t 로 보면 (f(x³)-f(1))/(x³-1) · (x³-1)/(x-1) → f'(1)·3 = 6. 치환과 (x³-1)=(x-1)(x²+x+1) 두 단계, 이 유형의 표준 절차. 유형 대표·통찰 0·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "(f(x³)-f(1))/(x-1) = (f(x³)-f(1))/(x³-1) · (x³-1)/(x-1) → f'(1)·3 → 6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0256.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "안쪽 지수 3(x², x⁴)·극한점 1·f'(1) 값을 바꿀 수 있음. 제약: 극한점 a 에서 aⁿ 이 f' 을 아는 지점과 일치해야 하고(a=1 이 편함), (xⁿ-1)/(x-1)→n 이 답의 계수."
    creative: "(1) f(x³)-f(x) 처럼 양쪽 다 x 의 함수면 [f(x³)-f(1)]-[f(x)-f(1)] → 3f'(1)-f'(1)(★2) (2) 극한점을 x→-1 로 주고 f((-1)³)=f(-1) 을 쓰게 하면 부호 함정(★2) (3) 분모를 x²-1 로 → 한 번 더 인수분해(★2·I-EQV d1)."
```

```yaml
- id: RPM-CALC1-0257
  page: 43
  vendor_label: '유형 04 미분계수를 이용한 극한값의 계산; $\lim\limits_{x\to a}\frac{f(x)-f(a)}{x-a}$의 꼴'
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    다항함수 $f$ 가 $\lim_{x\to 3}\dfrac{f(x)-f(3)}{x-3}=1$ 을 만족할 때 $\lim_{h\to 0}\dfrac{f(3+3h)-f(3)}{h}$ 의 값.
  category: "조건을 f'(3)=1 로 읽기 → 분모를 3h 로 맞추기 → 3f'(3)"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미분계수 정의로 극한값 계산(x→a 꼴)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    조건은 미분계수 정의 그대로 f'(3)=1. 묻는 극한은 3·(f(3+3h)-f(3))/(3h) → 3f'(3) = 3. x→a 꼴과 h→0 꼴을 서로 번역하는 두 단계. 중하·통찰 0·M_total 6·두 단계 → ★2.
  tier: star_2
  mechanism_primary: "lim_{x→3}(f(x)-f(3))/(x-3)=1 → f'(3)=1 → (f(3+3h)-f(3))/h = 3f'(3) → 3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0257.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "극한점 3·조건 극한값·h 계수 3 을 바꿀 수 있음. 제약: 답 = h 계수 × f'(3) 정수."
    creative: "(1) 조건을 lim_{x→3}(f(x)-f(3))/(x²-9)=1 로 주어 f'(3)=6 을 먼저 뽑게 하기(★2·I-EQV d1) (2) 묻는 극한을 (f(3+3h)-f(3-h))/h 로 → 4f'(3)(★2) (3) 조건과 질문의 표현(x→a 꼴 ↔ h→0 꼴)을 서로 바꿔 두 번 번역하게 하기(★2)."
```

```yaml
- id: RPM-CALC1-0258
  page: 43
  vendor_label: '유형 04 미분계수를 이용한 극한값의 계산; $\lim\limits_{x\to a}\frac{f(x)-f(a)}{x-a}$의 꼴'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    다항함수 $f$ 가 $f(-1)=3$, $f'(-1)=-2$ 일 때 $\lim_{x\to -1}\dfrac{f(x)+xf(-1)}{x^2+3x+2}$ 의 값. 5지선다.
  category: "xf(-1)=3x 치환 → 분자를 [f(x)-f(-1)]+3(x+1) 로 재배열 → (x+1) 약분 → 나머지 (x+2) 대입"
  M: {s: 3, k: 1, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "상수 f(-1) 을 3 으로 바꾸고 분자에 f(-1) 을 빼고 더해 미분계수 정의 꼴 [f(x)-f(-1)] + 3(x+1) 로 재배열"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "미분계수 정의로 극한값 계산(x→a 꼴)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    xf(-1)=3x 이므로 분자 = f(x)+3x = [f(x)-f(-1)] + 3(x+1) (f(-1)=3 사용). 분모 (x+1)(x+2). (x+1) 로 나누면 f'(-1)+3=1, 남은 1/(x+2)→1. 답 1(④). 분자를 f(x)-f(-1) 이 보이도록 재배열하는 착안(EQV d1) 뒤는 표준. 중·통찰 1(d1)·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "xf(-1)=3x → 분자 = [f(x)-f(-1)] + 3(x+1) → ÷(x+1)(x+2) → (f'(-1)+3)/(−1+2) → 1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0258.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f(-1), f'(-1) 값과 분모 이차식(극한점을 근으로 갖는)을 바꿀 수 있음. 제약: 분자가 극한점에서 0 이 되도록 f(a)+a·f(a)=0 이 되는 a=-1 구조(또는 상수항 보정)를 유지 · 답 정수."
    creative: "(1) 분자를 x²f(-1)-f(x) 로 바꿔 부호와 이차항을 함께 처리(★2) (2) f(-1) 값을 주지 않고 「극한값이 존재」 조건에서 f(-1) 을 먼저 결정하게 하기(★3·I-BW d1) (3) 분모를 (x+1)² 로 주면 극한이 존재할 조건 f'(-1)=-3 을 묻는 역문제(★3·I-BW d1)."
```

```yaml
- id: RPM-CALC1-0259
  page: 43
  vendor_label: '유형 04 미분계수를 이용한 극한값의 계산; $\lim\limits_{x\to a}\frac{f(x)-f(a)}{x-a}$의 꼴'
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    다항함수 $f$ 가 $f(1)=9$, $f'(1)=6$ 이고 $f(x)>0$ 일 때 $\lim_{x\to 1}\dfrac{\sqrt{f(x)}-3}{\sqrt{x}-1}$ 의 값.
  category: "9=f(1), 3=√f(1) 읽기 → 분자·분모 동시 유리화 → (f(x)-f(1))/(x-1) 노출 → f'(1)·(√x+1)/(√f(x)+3)"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "√f(x)-3 과 √x-1 을 각각 √f(x)-√f(1), √x-√1 로 읽고 두 겹 유리화로 (f(x)-f(1))/(x-1) 을 만들어내기"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "미분계수 정의로 극한값 계산(x→a 꼴)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    분자·분모를 각각 유리화하면 (f(x)-9)/(x-1) · (√x+1)/(√f(x)+3). f(1)=9 이므로 앞은 f'(1)=6, 뒤는 2/6. 답 2. √f(x)-3 을 √f(x)-√f(1) 로 읽고 두 겹 유리화로 미분계수 정의를 드러내는 전환이 핵심(EQV d2). f(x)>0 조건은 유리화의 정당화. 상중·통찰 1(d2)·M_total 8 → ★3.
  tier: star_3
  mechanism_primary: "9=f(1), 3=√f(1) 읽기 → 분자·분모 동시 유리화 → (f(x)-f(1))/(x-1) · (√x+1)/(√f(x)+3) → 6·(2/6) → 2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0259.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f(1)=9 를 완전제곱수(4·16·25)로, f'(1) 과 극한점(√x-√a 꼴)을 바꿀 수 있음. 제약: 답 = f'(a)·2√a/(2√f(a)) = f'(a)√a/√f(a) 가 유리수 · f(x)>0 조건 유지."
    creative: "(1) 분모를 x-1 로 두면 유리화 한 겹(★2) (2) 세제곱근 ∛f(x)-2 로 바꾸면 a³-b³ 인수분해 유리화(★3·I-EQV d2) (3) 「극한값이 2 가 되도록 하는 f'(1)」 을 묻는 역문제(★3·I-BW d1)."
```

### 유형 05 관계식이 주어진 경우 미분계수 구하기

```yaml
- id: RPM-CALC1-0260
  page: 44
  vendor_label: "유형 05 관계식이 주어진 경우 미분계수 구하기"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    미분가능한 $f$ 가 모든 실수 $x, y$ 에 대하여 $f(x+y)=f(x)+f(y)-1$ 을 만족시키고 $f'(2)=1$ 일 때 $f'(1)$ 의 값. 5지선다.
  category: "x=y=0 → f(0)=1 → 정의에 관계식 대입 → f'(x)=f'(0) 상수 → f'(1)=f'(2)"
  M: {s: 3, k: 1, a: 3, t: 1}
  M_total: 8
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "f(x+h)-f(x)=f(h)-1=f(h)-f(0) 으로 바꿔 f'(x) 가 x 와 무관한 상수 f'(0) 임을 읽기"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "관계식 f(x+y) 에서 미분계수 정의로 f' 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x=y=0 → f(0)=1. f'(x)=lim (f(x+h)-f(x))/h = lim (f(h)-1)/h = lim (f(h)-f(0))/h = f'(0). 즉 f' 은 상수이고 f'(1)=f'(2)=1 → ①. 관계식 유형의 표준 절차(f(0) 구하기 → 정의에 관계식 대입)이며 f'(x)=f'(0) 이 상수임을 읽는 것이 답. 유형 대표·통찰 1(d1)·M_total 8 → ★2.
  tier: star_2
  mechanism_primary: "x=y=0 → f(0)=1 → 정의에 관계식 대입 → f'(x)=lim(f(h)-f(0))/h=f'(0) → f' 상수 → f'(1)=f'(2)=1"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "①"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0260.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수 -1 (→ +c)·f'(2)=1 값·묻는 지점을 바꿀 수 있음. 제약: f(x+y)=f(x)+f(y)+c 꼴이면 f 는 일차함수 mx-c 이므로 f' 은 어디서나 같은 값 — 답이 곧 주어진 f' 값."
    creative: "(1) f(x+y)=f(x)+f(y)+xy 처럼 xy 항을 넣으면 f'(x)=f'(0)+x 로 x 의존(★2·0261 골조) (2) f'(2) 대신 lim_{h→0}(f(h)-1)/h 같은 극한으로 f'(0) 을 감추기(★3·I-EQV d1) (3) 「f 를 구하시오」 로 확장하면 도함수 상수 → 일차함수 논증(★3)."
```

```yaml
- id: RPM-CALC1-0261
  page: 44
  vendor_label: "유형 05 관계식이 주어진 경우 미분계수 구하기"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    미분가능한 $f$ 가 모든 실수 $x, y$ 에 대하여 $f(x+y)=f(x)+f(y)-xy$ 를 만족시키고 $f'(0)=-1$, $f'(2a)=7$ 일 때 상수 $a$. 5지선다.
  category: "x=y=0 → f(0)=0 → 정의에 대입 → f'(x)=f'(0)-x → f'(2a)=7 일차방정식"
  M: {s: 3, k: 1, a: 3, t: 1}
  M_total: 8
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "관계식을 정의에 넣어 f(x+h)-f(x)=f(h)-xh 로 만들고 f'(x)=f'(0)-x 로 x 의존항을 분리"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "관계식 f(x+y) 에서 미분계수 정의로 f' 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x=y=0 → f(0)=0. f'(x)=lim (f(h)-xh)/h = f'(0)-x = -1-x. f'(2a)=-1-2a=7 → a=-4 → ②. 표준 절차(f(0) → 정의에 대입 → xy 항이 -x 로 남음). 중·통찰 1(d1)·M_total 8 → ★2.
  tier: star_2
  mechanism_primary: "x=y=0 → f(0)=0 → f(x+h)-f(x)=f(h)-xh → f'(x)=f'(0)-x=-1-x → -1-2a=7 → a=-4"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0261.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "xy 계수(-1 → 2xy 등)·f'(0) 값·f'(2a)=7 조건을 바꿀 수 있음. 제약: f'(x)=f'(0)+kx 꼴이므로 a 는 일차방정식의 해 — 정수 답이 선택지 안에."
    creative: "(1) f'(0) 을 주지 않고 f(1)=… 을 주어 f 를 구한 뒤 f'(0) 을 얻게 하기 → 이차함수 결정(★3·I-BW d1) (2) f(x+y)=f(x)+f(y)+2xy 와 f'(0)=1 → f'(x)=1+2x → f 가 x²+x 임을 보이기(★3) (3) 관계식에 f(x)f(y) 곱 항 → 0262 골조(★3)."
```

```yaml
- id: RPM-CALC1-0262
  page: 44
  vendor_label: "유형 05 관계식이 주어진 경우 미분계수 구하기"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    미분가능한 $f$ 가 모든 실수 $x, y$ 에 대하여 $f(x+y)=2f(x)f(y)$ 를 만족시키고 $f(x)>0$, $f'(0)=3$ 일 때 $\dfrac{f'(2)}{f(2)}$ 의 값.
  category: "x=y=0, f>0 → f(0)=1/2 → f(x+h)-f(x)=f(x)(2f(h)-1) → f'(x)=2f(x)f'(0) → 비율 상수"
  M: {s: 4, k: 2, a: 3, t: 1}
  M_total: 10
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f(x+h)-f(x) 에서 f(x) 를 묶고 2f(h)-1=2(f(h)-f(0)) 으로 읽어 f'(x)/f(x) 가 상수 2f'(0) 임을 끌어내기"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "관계식 f(x+y) 에서 미분계수 정의로 f' 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    x=y=0 → f(0)=2f(0)², f>0 이므로 f(0)=1/2. f'(x)=lim (2f(x)f(h)-f(x))/h = f(x)·lim (2f(h)-1)/h = f(x)·2·lim (f(h)-f(0))/h = 2f(x)f'(0) = 6f(x). 따라서 f'(2)/f(2)=6. 곱셈형 관계식에서 f(x) 를 묶어내고 2f(h)-1 을 2(f(h)-f(0)) 으로 읽는 전환이 핵심(EQV d2). f(x)>0 은 f(0)=0 기각 조건. 상중·통찰 1(d2)·M_total 10 → ★3.
  tier: star_3
  mechanism_primary: "x=y=0, f>0 → f(0)=1/2 → f(x+h)-f(x)=f(x)(2f(h)-1) → f'(x)=2f(x)f'(0)=6f(x) → f'(2)/f(2)=6"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0262.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 2 (→ f(x+y)=kf(x)f(y))·f'(0) 값을 바꿀 수 있음. 제약: f(0)=1/k · f'(x)/f(x)=k·f'(0) 이므로 답 = k·f'(0) 정수 · f>0 조건 유지."
    creative: "(1) f'(2)/f(2) 대신 f'(1)·f(1) 을 물으면 f(1) 을 알 수 없어 성립 안 함 — 비율만 묻는 구조를 유지해야 함 (2) f(x+y)=f(x)f(y), f(0)=1 을 주고 「f'(x)=f'(0)f(x) 를 보이시오」 서술형(★3) (3) 조건을 f(x-y)=f(x)/f(y) 로 바꾸면 f(0)=1 부터 다시 유도(★4·I-EQV d2 + I-BW d1)."
```

### 유형 06 미분계수의 기하적 의미

```yaml
- id: RPM-CALC1-0263
  page: 44
  vendor_label: "유형 06 미분계수의 기하적 의미"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    $x>0$ 에서 미분가능한 $f$ 의 그래프(원점에서 출발해 $y=x$ 아래로 휘는 위로 볼록 증가 곡선)와 직선 $y=x$ 가 주어질 때 $0<a<b$ 에 대해 ㄱ $f'(a)<f'(b)$ · ㄴ $f(b)-f(a)<b-a$ · ㄷ $\dfrac{f(a)}{a}<\dfrac{f(b)}{b}$ 의 참·거짓. 그림 있음.
  category: "미분계수=접선 기울기 · 평균변화율=할선 기울기 · f(x)/x=원점과 잇는 직선 기울기 → 그래프 모양으로 대소 비교"
  M: {s: 3, k: 1, a: 3, t: 1}
  M_total: 8
  insights:
    - step: 3
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f(a)/a 와 f(b)/b 를 원점과 곡선 위 점을 잇는 직선의 기울기로 번역해 그래프에서 대소 읽기"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "그래프에서 접선·할선 기울기 비교(보기 판정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    곡선은 위로 볼록·증가이므로 접선 기울기가 줄어듦 → ㄱ 거짓. [a,b] 할선 기울기는 y=x 아래에서 1 보다 작음 → ㄴ 참. f(a)/a 는 원점과 (a, f(a)) 를 잇는 직선의 기울기이고 위로 볼록이라 x 가 커질수록 작아짐 → ㄷ 거짓. 답 ㄴ. ㄷ 의 「f(x)/x 를 원점 기울기로 읽기」 가 이 문항의 통찰(RT d2). 유형 대표(난이도 표시 없음)·통찰 1(d2)·M_total 8 → ★2 유지. [분류 이슈] ㄷ 의 기울기 번역이 있어 ★3 후보 — 벤더 기본 라벨 ★2 로 두고 기록.
  tier: star_2
  mechanism_primary: "f'=접선 기울기(감소) → ㄱ 거짓 · 할선 기울기<1 → ㄴ 참 · f(x)/x=원점 기울기(감소) → ㄷ 거짓 → ㄴ"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "ㄴ"
  answer_source: "답지"
  figure: "crop:fig-0263.png"
  latex: latex-bank/rpm-calc1/items/0263.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "그래프 라벨 a, b 위치와 곡선 모양(위로 볼록 증가)은 고정 — 수치 변형 여지는 거의 없고 보기 문장의 부등호 방향·조합만 바꿀 수 있음. 제약: 세 보기가 각각 접선·할선·원점 기울기 셋에 대응하도록 유지."
    creative: "(1) 아래로 볼록 곡선으로 바꾸면 세 보기의 참·거짓이 모두 뒤집힘(★2 유지) (2) 보기 ㄷ 을 「a·f(b) < b·f(a)」 처럼 곱 형태로 감추면 f(x)/x 번역 한 단계 추가(★3·I-RT d2) (3) 「(f(b)-f(a))/(b-a)=f'(c) 인 c 가 (a,b) 에 존재」 를 보기로 넣으면 평균값 정리 예고(★3)."
```

```yaml
- id: RPM-CALC1-0264
  page: 44
  vendor_label: "유형 06 미분계수의 기하적 의미"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    미분가능한 $f$ 의 그래프($x=-2$ 에서 극대, $x=2$ 와 $4$ 사이에서 극소, 그 뒤 급증)가 주어질 때 $f'(-2), f'(0), f'(2), f'(4), f'(5)$ 중 가장 큰 값 고르기. 그림 있음.
  category: "미분계수=접선 기울기 → 극대점 0 · 감소구간 음수 · 증가구간 양수 · 가파를수록 큼"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "그래프에서 미분계수 크기 비교"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    미분계수는 접선의 기울기. x=-2 는 극대라 0, x=0·2 는 내려가는 구간이라 음수, x=4 부터 오르고 x=5 가 더 가파르다 → f'(5) 가 최대 → ⑤. 그래프에서 기울기의 부호와 가파름을 읽는 한 단계. 중하·통찰 0·M_total 4·한 단계 → ★2 출발에서 −1 → ★1.
  tier: star_1
  mechanism_primary: "미분계수=접선 기울기 → 극대점 0 · 감소구간 음수 · 증가구간 양수 · 가파를수록 큼 → f'(5)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "⑤"
  answer_source: "답지"
  figure: "crop:fig-0264.png"
  latex: latex-bank/rpm-calc1/items/0264.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "그래프 라벨(-2, 2, 4, 5)과 선택지 지점을 바꿀 수 있음(새 그림 필요). 제약: 극대·극소·증가·감소가 선택지 지점에 고르게 분포하고 최댓값 지점이 하나만 확실히 가파르게."
    creative: "(1) 「가장 작은 것」 으로 바꾸면 극소 근처가 아니라 가장 가파르게 내려가는 지점을 찾아야 해 함정(★2) (2) f'(a)=0 인 a 의 개수 세기(★1) (3) f'(2)·f'(4) 의 부호 곱을 묻기 → 부호 판단(★1~2)."
```

```yaml
- id: RPM-CALC1-0265
  page: 44
  vendor_label: "유형 06 미분계수의 기하적 의미"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    미분가능한 $f$ 의 그래프(원점을 최저점으로 아래로 볼록하게 증가)가 주어질 때 $0<a<b$ 에 대해 ㄱ $f'(a)<f'(b)$ · ㄴ $\dfrac{f(b)-f(a)}{b-a}<f'(b)$ · ㄷ $f'\left(\dfrac{a+b}{2}\right)>f'(\sqrt{ab})$ 의 참·거짓. 그림 있음.
  category: "아래로 볼록 → f' 증가 → ㄱ · 할선<오른쪽 접선 → ㄴ · (a+b)/2>√ab 와 f' 증가 결합 → ㄷ"
  M: {s: 3, k: 1, a: 3, t: 1}
  M_total: 8
  insights:
    - step: 3
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f' 의 대소를 입력값 (a+b)/2 와 √ab 의 대소로 환원하고 산술·기하평균 부등식(절대부등식 단원)을 끌어오기"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "그래프에서 접선·할선 기울기 비교(보기 판정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    아래로 볼록 증가이므로 접선 기울기 증가 → ㄱ 참. 할선 기울기는 오른쪽 끝 접선보다 작음 → ㄴ 참. ㄷ 은 (a+b)/2>√ab (산술·기하평균, a≠b) 이고 f' 이 증가하므로 참. 답 ㄱ,ㄴ,ㄷ. ㄱ·ㄴ 은 유형 표준, ㄷ 은 절대부등식을 끌어와 f' 의 증가성과 결합하는 단원 밖 결합(XU d2). 중·통찰 1(d2)·M_total 8 → ★2 유지. [분류 이슈] ㄷ 의 AM-GM 결합으로 ★3 후보 — 벤더 「중」 라벨 유지·기록.
  tier: star_2
  mechanism_primary: "아래로 볼록 → f' 증가 → ㄱ 참 · 할선<오른쪽 접선 → ㄴ 참 · (a+b)/2>√ab + f' 증가 → ㄷ 참 → ㄱ,ㄴ,ㄷ"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "ㄱ, ㄴ, ㄷ"
  answer_source: "답지"
  figure: "crop:fig-0265.png"
  latex: latex-bank/rpm-calc1/items/0265.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "그래프는 아래로 볼록 증가 모양으로 고정 · 보기의 평균 종류((a+b)/2 · √ab · 2ab/(a+b))를 바꿀 수 있음. 제약: 산술≥기하≥조화 순서가 f' 증가성과 결합해 참·거짓이 정해지도록."
    creative: "(1) 위로 볼록 곡선으로 바꾸면 ㄷ 이 거짓 — 세 보기 조합이 달라짐(★2) (2) ㄴ 을 「f'(a) < 할선 < f'(b)」 로 확장해 평균값 정리 감각(★3) (3) ㄷ 에 조화평균 2ab/(a+b) 를 넣어 세 평균 비교(★3·I-XU d2)."
```

### 유형 07 미분가능성과 연속성

```yaml
- id: RPM-CALC1-0266
  page: 45
  vendor_label: "유형 07 미분가능성과 연속성"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    $x=1$ 에서 미분가능한 함수 고르기 — ㄱ $x^2$ · ㄴ $|x^2-x|$ · ㄷ $\dfrac{1}{x}$.
  category: "다항함수 → 가능 · 절댓값 안이 x=1 에서 부호 변화 → 꺾임 → 불가 · 유리함수는 정의역 안 → 가능"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "절댓값·조각 정의 함수의 미분가능성 판정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ㄱ 다항함수 → 미분가능. ㄴ x²-x=x(x-1) 이 x=1 에서 부호가 바뀌므로 절댓값 그래프가 꺾임 → 좌·우 미분계수 -1, 1 로 다름. ㄷ 1/x 는 x=1 근방에서 미분가능(미분계수 -1). 답 ㄱ,ㄷ. 절댓값 안이 0 이 되며 부호가 바뀌는 점에서 꺾인다는 판정이 전부. 유형 대표·통찰 0·M_total 5·두 단계 → ★2.
  tier: star_2
  mechanism_primary: "다항함수 → 가능 · |x(x-1)| 은 x=1 에서 부호 변화 → 꺾임 → 불가 · 1/x 는 x=1 에서 정의·미분가능 → ㄱ,ㄷ"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "ㄱ, ㄷ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0266.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "판정 지점 1 과 세 함수(절댓값 안의 식·유리함수의 극점 위치)를 바꿀 수 있음. 제약: 절댓값 보기는 판정 지점에서 안의 식이 0 이 되며 부호가 바뀌게(단순근) · 유리함수 보기는 판정 지점이 정의역 안."
    creative: "(1) |(x-1)²| 처럼 중근이면 절댓값이 있어도 미분가능 — 이를 보기로 넣어 「부호 변화」 조건을 시험(★3·I-EQV d1) (2) √x, [x] 등 다른 계열 보기로 교체(★2) (3) 「x=1 에서 연속이지만 미분가능하지 않은 것」 으로 질문 바꾸기(★2·0270 골조)."
```

```yaml
- id: RPM-CALC1-0267
  page: 45
  vendor_label: "유형 07 미분가능성과 연속성"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    열린구간 $(-3,\,3)$ 에서 그래프($x=-2$ 뜀 · $x=1$ 구멍과 고립점 · $x=2$ 뾰족점)가 주어질 때 불연속인 $x$ 의 개수 $m$ 과 미분가능하지 않은 $x$ 의 개수 $n$ 의 합. 그림 있음.
  category: "불연속점 세기(뜀·구멍) → 미분불가능점 = 불연속점 + 뾰족점 → m+n"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "그래프에서 불연속·미분불가능 점 세기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x=-2 는 왼쪽 극한과 f(-2) 가 달라 불연속, x=1 은 극한은 있으나 f(1) 이 달라 불연속 → m=2. 미분가능하지 않은 점은 불연속인 두 점에 x=2 의 뾰족점을 더해 n=3. m+n=5. 「불연속이면 미분불가능」 을 빠뜨리거나 열린구간 끝 ±3 을 세는 것이 함정(Mₜ 2). 중하·통찰 0·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "불연속점(뜀 x=-2 · 구멍 x=1) 세기 → 미분불가능점 = 불연속점 + 뾰족점 x=2 → 2+3=5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$5$'
  answer_source: "답지"
  figure: "crop:fig-0267.png"
  latex: latex-bank/rpm-calc1/items/0267.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "그래프 라벨(-3~3)·뜀·구멍·뾰족점 위치를 바꿀 수 있음(새 그림 필요). 제약: 「극한은 있으나 불연속」 · 「좌·우극한 다름」 · 「연속이지만 뾰족」 세 종류를 하나씩은 유지해야 m, n 이 구별됨 · 구간 끝은 열린 채로."
    creative: "(1) 「연속이지만 미분가능하지 않은 x 의 개수」 만 묻기 → n-m (★2) (2) 구간을 닫힌구간으로 바꾸면 끝점 처리 논쟁이 생기므로 피할 것 (3) 보기 ㄱㄴㄷ(극한 존재·연속·미분가능) 판정형으로 재구성(★2·0269 골조)."
```

```yaml
- id: RPM-CALC1-0268
  page: 45
  vendor_label: "유형 07 미분가능성과 연속성"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    $f(x)=(x+2)|x-1|$ 의 $x=1$ 에서의 연속성과 미분가능성 조사(서술형).
  category: "f(1)=극한=0 → 연속 · 절댓값을 x>1, x<1 로 풀어 우·좌 미분계수 3, -3 → 미분불가능"
  M: {s: 3, k: 1, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "절댓값·조각 정의 함수의 미분가능성 판정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f(1)=0 이고 x→1 극한도 0 → 연속. 우미분계수 lim (x+2)(x-1)/(x-1)=3, 좌미분계수 lim -(x+2)(x-1)/(x-1)=-3 으로 다름 → 미분가능하지 않다. 정의대로 좌·우를 나눠 쓰는 서술 절차. 중·서술형·통찰 0·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "f(1)=0=극한 → 연속 · x>1: (x+2)(x-1), x<1: -(x+2)(x-1) → 우 3 · 좌 -3 → 미분불가능"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "연속이지만 미분가능하지 않다."
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0268.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "인수 (x+2)·절댓값 안 (x-1) 을 바꿀 수 있음. 제약: 좌·우 미분계수 = ±(다른 인수의 값) 이므로 그 인수가 판정 지점에서 0 이 아니어야 「연속이지만 미분불가능」 이 유지됨(0 이면 미분가능해져 결론이 바뀜)."
    creative: "(1) 인수를 (x-1) 로 바꿔 (x-1)|x-1| → 좌·우 모두 0 으로 미분가능 → 결론이 뒤집히는 대비 문항(★2~3·I-EQV d1) (2) |x-1| 대신 |x²-1| → x=1 과 -1 두 지점 조사(★2) (3) (x+k)|x-1| 이 x=1 에서 미분가능하도록 하는 상수 k 를 찾게 하기 → k=-1 (★3·I-BW d1)."
```

```yaml
- id: RPM-CALC1-0269
  page: 45
  vendor_label: "유형 07 미분가능성과 연속성"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    구간 $(0,\,5)$ 에서 그래프($x=1$ 뾰족점 · $x=2$ 구멍과 고립점 · $x=4$ 뜀)가 주어질 때 ① $f'(3)>0$ ② $x\to 2$ 극한 없음 ③ $f'(x)=0$ 인 $x$ 존재 ④ 불연속점 3개 ⑤ 미분불가능점 3개 중 옳은 것. 그림 있음.
  category: "각 x 에서 좌·우극한·함숫값·접선 기울기 읽기 → 극한 존재≠연속 · 뾰족점·불연속점 = 미분불가능"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "그래프에서 불연속·미분불가능 점 세기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x=3 은 내려가는 구간이라 f'(3)<0(① 거짓). x=2 는 좌·우극한이 같은 구멍이라 극한은 존재(② 거짓). 수평 접선을 갖는 점이 없음(③ 거짓 — 봉우리 x=2 는 정의값이 달라 미분불가능). 불연속점은 x=2, 4 두 개(④ 거짓). 미분불가능점은 x=1(뾰족)·2·4 세 개(⑤ 참). 극한 존재와 연속을 구별하고 「구멍 위 봉우리」 를 f'=0 으로 착각하지 않는 두 함정(Mₜ 2). 중·통찰 0·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "각 x 에서 좌·우극한·함숫값·접선 기울기 읽기 → 극한 존재≠연속 · 뾰족점·불연속점 = 미분불가능 → ⑤"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0269.png"
  latex: latex-bank/rpm-calc1/items/0269.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "그래프 라벨과 특이점(뾰족·구멍·뜀) 위치를 바꿀 수 있음(새 그림 필요). 제약: 「극한은 있으나 불연속」 인 구멍을 하나 두어 ② 함정을 유지 · 수평 접선이 없도록 봉우리는 구멍 위에."
    creative: "(1) ③ 을 참으로 만들려면 매끄러운 봉우리를 하나 추가 → 선택지 재배치(★2) (2) 보기를 「lim_{x→2}f(x)+f(2)」 같은 값 계산으로(★2) (3) 「미분가능하지만 f'=0 은 아닌 점」 등 조건 조합 세기(★2)."
```

```yaml
- id: RPM-CALC1-0270
  page: 45
  vendor_label: "유형 07 미분가능성과 연속성"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    $x=0$ 에서 연속이지만 미분가능하지 않은 함수 고르기 — ㄱ $|x|$ 꼴 조각함수 · ㄴ $x^2-3|x|+2$ · ㄷ $x\ge 0$ 에서 $(x+1)^2$, $x<0$ 에서 $2x+1$.
  category: "각 보기: x=0 연속 확인 → 좌·우 미분계수 계산 → 다르면 해당"
  M: {s: 3, k: 1, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "절댓값·조각 정의 함수의 미분가능성 판정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ㄱ 은 |x| 로 x=0 에서 꺾임 → 해당. ㄴ 은 연속이고 우미분계수 -3, 좌미분계수 3 → 해당. ㄷ 은 f(0)=1=좌극한으로 연속이고 우미분계수 2(x+1)|₀=2, 좌미분계수 2 로 같음 → 미분가능이라 제외. 답 ㄱ,ㄴ. 세 함수 각각 연속 확인 후 좌·우 미분계수 계산. 중·통찰 0·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "각 보기: x=0 연속 확인 → 좌·우 미분계수 계산 → 다르면 해당 → ㄱ(±1) ㄴ(±3) 해당 · ㄷ(2=2) 제외"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "ㄱ, ㄴ"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0270.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "ㄴ 의 |x| 계수·ㄷ 의 두 조각식을 바꿀 수 있음. 제약: ㄷ 은 x=0 에서 값과 미분계수가 모두 같게(연속+미분가능) 만들어 「제외되는 보기」 역할 유지."
    creative: "(1) 보기 하나를 x=0 에서 불연속(값이 다른 조각)으로 바꿔 「연속」 조건까지 걸러내게 하기(★2) (2) ㄷ 의 x<0 조각을 ax+1 로 두고 미분가능하게 하는 a 를 묻기(★2·I-BW d1) (3) x|x|, x²|x| 처럼 절댓값이 있어도 미분가능한 보기를 섞기(★3·I-EQV d1)."
```

```yaml
- id: RPM-CALC1-0271
  page: 45
  vendor_label: "유형 07 미분가능성과 연속성"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    $f(x)=|x|$ 와 $x=0$ 에서 뜀이 있는 $g(x)$($x\ge 0$ 에서 $x-2$, $x<0$ 에서 $x+2$)에 대해 ㄱ $xf(x)$ · ㄴ $f(x)+xg(x)$ · ㄷ $f(x)g(x)$ 중 $x=0$ 에서 미분가능한 것.
  category: "세 함수 모두 x=0 에서 값 0 → h(x)/x 의 좌·우극한을 정의로 계산 → |x|/x 부호와 g 의 좌·우 값 결합"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "곱의 미분법을 쓸 수 없는 함수(|x| · 불연속 g)이므로 x=0 에서의 미분계수를 정의 lim h(x)/x 로 되돌려 좌·우를 계산하기"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "절댓값·조각 정의 함수의 미분가능성 판정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    셋 다 x=0 에서 값이 0 이므로 (h(x)-0)/x 의 좌·우극한을 정의로 계산. ㄱ x|x|/x=|x|→0 양쪽 같음 → 가능. ㄴ |x|/x+g(x) → 우 1+(-2)=-1, 좌 -1+2=1 → 불가. ㄷ |x|g(x)/x → 우 g(x)→-2, 좌 -g(x)→-2 → 같음 → 가능. 답 ㄱ,ㄷ. 미분불가능한 함수끼리의 곱·합이 미분가능할 수 있음을 알고 곱의 미분법이 아니라 정의로 되돌아가는 판단이 핵심(EQV d2), 부호 함정(|x|/x)과 g 의 뜀이 겹침(Mₜ 2). 상중·통찰 1(d2)·M_total 8 → ★3.
  tier: star_3
  mechanism_primary: "h(0)=0 확인 → h(x)/x 의 좌·우극한 정의 계산 → |x|/x 부호와 g 의 좌·우 값 결합 → ㄱ(0=0) ㄷ(-2=-2) 가능 · ㄴ(-1≠1) 불가"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "ㄱ, ㄷ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0271.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "g 의 두 조각 상수(∓2)와 ㄴ 의 결합 방식을 바꿀 수 있음. 제약: ㄷ 이 미분가능하려면 g 의 좌·우 값이 서로 부호 반대·절댓값 같아야 함(|x|/x 의 ±1 과 곱해 일치) · ㄴ 은 값이 달라 불가가 되도록 유지."
    creative: "(1) g 의 뜀을 비대칭(x-2, x+3)으로 바꾸면 ㄷ 도 불가 → 답 ㄱ 만(★3) (2) 「f(x)g(x) 가 x=0 에서 미분가능하도록 하는 g 의 조건」 을 서술하게 하기(★4·I-EQV d2 + I-BW d1) (3) f 를 x|x| 로 바꿔 이미 미분가능한 함수와 불연속 함수의 곱(★3·I-EQV d2)."
```

### 유형 08 미분법의 공식

```yaml
- id: RPM-CALC1-0272
  page: 46
  vendor_label: "유형 08 미분법의 공식"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    $f(x)=x^3-3x^2+ax+5$ 에서 $f'(1)=2$ 인 상수 $a$. 5지선다.
  category: "미분 → f'(1)=a-3 → 일차방정식"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미분법 공식으로 미분계수·미정계수 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f'(x)=3x²-6x+a → f'(1)=a-3=2 → a=5(⑤). 미분법 공식 적용 한 줄. 유형 대표(난이도 표시 없음)이지만 통찰 0·M_total 5·한 단계이므로 ★2 출발에서 −1 → ★1. 유형 대표 가운데 가장 가벼운 문항.
  tier: star_1
  mechanism_primary: "f'(x)=3x²-6x+a → f'(1)=-3+a → =2 → a=5"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0272.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수·미분계수 지점·값을 자유롭게. 제약: a 가 일차로 풀리며 선택지가 정수."
    creative: "(1) f'(1)=2 와 f(1)=k 두 조건으로 상수 둘 결정(★2·0274 골조) (2) f'(a)=2 처럼 지점을 미지수로 두면 이차방정식(★2) (3) f(x) 에 xf'(1) 같은 상수 항을 섞으면 0275 골조(★2·I-EQV d1)."
```

```yaml
- id: RPM-CALC1-0273
  page: 46
  vendor_label: "유형 08 미분법의 공식"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    $f(x)=x+\dfrac{1}{2}x^2+\dfrac{1}{3}x^3+\cdots+\dfrac{1}{100}x^{100}$ 의 $f'(1)$.
  category: "항별 미분 (xᵏ/k)'=xᵏ⁻¹ → f'(x)=1+x+…+x⁹⁹ → x=1 대입 → 항 수"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-PD
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "계수 1/k 가 미분으로 사라져 모든 항이 x=1 에서 1 이 되는 규칙 발견"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "미분법 공식으로 미분계수·미정계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    각 항 xᵏ/k 의 도함수는 xᵏ⁻¹ 이므로 f'(x)=1+x+x²+…+x⁹⁹, f'(1)=1 이 100 개 → 100. 항별 미분 규칙을 발견해 일반화하는 작은 패턴 읽기(PD d1). 중하·통찰 1(d1)·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "(xᵏ/k)' = xᵏ⁻¹ → f'(x)=1+x+…+x⁹⁹ → x=1 대입 → 항 100 개 → 100"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$100$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0273.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "항 수 100·계수 1/k 를 바꿀 수 있음. 제약: 계수와 지수의 관계(xᵏ/k)를 유지해야 도함수가 등비 꼴로 정리됨 · f'(1)=항 수."
    creative: "(1) f'(-1) 을 물으면 1-1+1-… 부호 교대 → 짝수 항 수라 0(★2) (2) 계수를 k 로 바꿔 f(x)=Σkxᵏ 이면 f'(1)=Σk² → 수열 합 공식(★3·I-XU d1) (3) f'(2) 를 물으면 등비수열 합 2¹⁰⁰-1 (★2·I-XU d1)."
```

```yaml
- id: RPM-CALC1-0274
  page: 46
  vendor_label: "유형 08 미분법의 공식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    $f(x)=ax^3+bx+3$ 이 $f(1)=1$, $f'(1)=4$ 를 만족할 때 $ab$ 의 값 ($a$, $b$ 상수). 5지선다.
  category: "f(1) 조건 → a+b=-2 · f'(1) 조건 → 3a+b=4 → 연립 → ab"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미분법 공식으로 미분계수·미정계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f(1)=a+b+3=1 → a+b=-2. f'(x)=3ax²+b → 3a+b=4. 연립해 a=3, b=-5, ab=-15(③). 두 조건을 연립하는 표준 절차. 중·통찰 0·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "f(1)=1 → a+b=-2 · f'(1)=4 → 3a+b=4 → 연립 → a=3, b=-5 → ab=-15"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0274.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수항·조건값을 바꿀 수 있음. 제약: 연립 일차방정식이 정수해 · ab 가 선택지 안."
    creative: "(1) f(-1) 조건으로 바꾸면 홀수 차수만 있어 f(-1)=-f(1)+6 → 대칭 활용(★2·I-SYM d1) (2) 「f'(1)=f(1)」 처럼 두 조건을 한 식으로 묶어 주고 조건 하나 더(★2·I-EQV d1) (3) 미지수 셋(ax³+bx²+cx)에 조건 셋(★2)."
```

```yaml
- id: RPM-CALC1-0275
  page: 46
  vendor_label: "유형 08 미분법의 공식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    다항함수 $f$ 가 $f(x)=2x^2-xf'(1)$ 을 만족할 때 $f'(3)$.
  category: "f'(1)=k 상수 취급 → f(x)=2x²-kx → f'(1)=4-k=k → k=2 → f'(3)"
  M: {s: 3, k: 1, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "식 안에 나타난 f'(1) 을 미지의 상수 k 로 치환해 방정식으로 바꾸기"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "f'(a) 를 상수로 두는 다항함수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(1) 은 상수이므로 k 로 두면 f(x)=2x²-kx, f'(x)=4x-k, f'(1)=4-k=k → k=2. f'(x)=4x-2 → f'(3)=10. 식 안의 f'(1) 을 미지의 상수로 보는 착안(EQV d1)이 핵심, 나머지는 표준. 중·통찰 1(d1)·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "f'(1)=k 상수 취급 → f(x)=2x²-kx → f'(1)=4-k=k → k=2 → f'(3)=10"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$10$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0275.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차항 계수·f'(1) 앞 계수·묻는 지점을 바꿀 수 있음. 제약: k 에 대한 일차방정식이 정수해 · f'(1) 의 계수를 바꾸면(예: 2xf'(1)) k 의 계수가 달라져 해가 바뀜을 확인."
    creative: "(1) f(x)=x³+f'(1)x²+f'(2)x 처럼 상수 둘 → 연립(★3·I-EQV d1) (2) f(1) 상수를 섞어 f(x)=2x²-f(1)x → f(1)=2-f(1) → f(1)=1 (★2) (3) 「f'(1) 의 값에 관계없이 f'(c) 가 일정한 c」 를 찾게 하기 → 항등식(★3·I-EQV d1)."
```

### 유형 09 곱의 미분법

```yaml
- id: RPM-CALC1-0276
  page: 46
  vendor_label: "유형 09 곱의 미분법"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    미분가능한 $f$, $g$ 가 $g(x)=(x^2+3x)f(x)$ 이고 $f(1)=3$, $f'(1)=2$ 일 때 $g'(1)$.
  category: "곱의 미분법 g'=(2x+3)f+(x²+3x)f' → x=1 대입"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곱의 미분법으로 미분계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    g'(x)=(2x+3)f(x)+(x²+3x)f'(x). x=1 대입: 5·3+4·2=23. 곱의 미분법 한 번 적용. 유형 대표·통찰 0·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "곱의 미분법 g'=(2x+3)f+(x²+3x)f' → x=1 대입 → 15+8=23"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$23$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0276.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "다항 인수·f(1), f'(1) 값·지점을 바꿀 수 있음. 제약: 답 = p'(1)f(1)+p(1)f'(1) 정수."
    creative: "(1) g'(1) 을 주고 f'(1) 을 거꾸로 묻기(★2) (2) g(x)={f(x)}² → 2f(1)f'(1)(★2) (3) g(x)=(x²+3x)f(x) 와 lim_{x→1}(g(x)-g(1))/(x-1)=k 조건을 섞어 유형 04 와 결합(★2~3)."
```

```yaml
- id: RPM-CALC1-0277
  page: 46
  vendor_label: "유형 09 곱의 미분법"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    $f(x)=(x+1)(x+2)(x+3)$ 의 $f'(0)$. 5지선다.
  category: "세 인수 곱의 미분법(또는 전개) → f'(0)=2·3+1·3+1·2"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곱의 미분법으로 미분계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    세 인수 곱의 미분법으로 f'=(x+2)(x+3)+(x+1)(x+3)+(x+1)(x+2), x=0 에서 6+3+2=11(①). 전개해도 f=x³+6x²+11x+6 → f'(0)=11 로 같다. 표준 절차. 중하·통찰 0·M_total 5·두 단계 → ★2.
  tier: star_2
  mechanism_primary: "세 인수 곱의 미분법 (또는 전개) → f'(0)=2·3+1·3+1·2 → 11"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0277.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 상수 1, 2, 3 과 지점을 바꿀 수 있음. 제약: f'(0) = 세 상수의 두 개씩 곱의 합 — 선택지 범위 안 정수."
    creative: "(1) 인수를 넷으로 늘려 (x+1)(x+2)(x+3)(x+4) → 세 개씩 곱의 합(★2) (2) f'(-1) 을 물으면 (x+1) 인수가 사라져 1·2 한 항만 남는 착안(★2·I-EQV d1 · 0279 골조) (3) 인수 하나를 (x+a) 로 두고 f'(0)=k 인 a 찾기(★2)."
```

```yaml
- id: RPM-CALC1-0278
  page: 46
  vendor_label: "유형 09 곱의 미분법"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    $f(x)=(3x^2-1)^3$ 의 $f'(1)$. 5지선다.
  category: "{g(x)}ⁿ 의 미분 공식 → 3(3x²-1)²·6x → x=1 대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곱의 미분법으로 미분계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y={g(x)}³ 의 미분 공식으로 f'(x)=3(3x²-1)²·6x=18x(3x²-1)², f'(1)=18·4=72(⑤). 거듭제곱 곱의 미분 공식 한 줄, 안쪽 미분 6x 를 빠뜨리는 것이 유일한 함정. 중하·통찰 0·M_total 5·두 단계 → ★2.
  tier: star_2
  mechanism_primary: "y={g(x)}³ → 3{g(x)}²g'(x) → 3(3x²-1)²·6x → x=1 → 72"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0278.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "안쪽 이차식·지수 3·지점을 바꿀 수 있음. 제약: 안쪽 식이 지점에서 작은 정수(여기 2) · 답 = n·(안쪽값)ⁿ⁻¹·안쪽미분 이 선택지 범위."
    creative: "(1) 전개 경로와 공식 경로를 비교하게 하면 공식이 현저히 빠름(★2·I-SC d1) (2) 지수를 미지수 n 으로 두고 f'(1)=72 인 n 찾기(★3·I-BW d1) (3) f(x)=(x²+ax)³ 에서 f'(1)=0 인 a → 안쪽값 0 또는 안쪽미분 0 의 두 갈래(★3·I-MI d1)."
```

```yaml
- id: RPM-CALC1-0279
  page: 47
  vendor_label: "유형 09 곱의 미분법"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    $f(x)=(x-a)(x^3+2x^2+8)$ 이 $f'(a)=11$ 일 때 $f'(-1)$ ($a$ 상수, 서술형).
  category: "곱의 미분법 → f'(a)=둘째 인수의 값 → 삼차방정식 인수분해 → a=1 → f'(-1)"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곱의 미분법으로 미분계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(x)=(x³+2x²+8)+(x-a)(3x²+4x). x=a 에서 둘째 항이 0 → f'(a)=a³+2a²+8=11 → a³+2a²-3=(a-1)(a²+3a+3)=0, 실수 a=1. f'(-1)=(-1+2+8)+(-2)(3-4)=9+2=11. (x-a) 인수 덕에 f'(a) 가 둘째 인수의 값으로 축약되지만 곱의 미분법에 그대로 대입해도 같은 식이 나오므로 통찰로 세지 않음. 삼차방정식 인수분해와 이차 인수의 실근 없음(판별식) 확인까지 서술. 중·서술형·통찰 0·M_total 8 → ★2.
  tier: star_2
  mechanism_primary: "곱의 미분법 → f'(a)=g(a)=a³+2a²+8=11 → (a-1)(a²+3a+3)=0 → a=1 → f'(-1)=9+2=11"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$11$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0279.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "둘째 인수의 계수·f'(a) 값·묻는 지점을 바꿀 수 있음. 제약: g(a)=f'(a) 값 이 되는 삼차방정식이 정수근 하나(나머지 이차 인수의 판별식 음수)로 떨어지게 · f'(-1) 정수."
    creative: "(1) f(x)=(x-a)g(x) 에서 「f'(a)=g(a)」 인 이유를 서술하게 하기(★3·I-EQV d1) (2) g 를 미지의 다항함수로 두고 f'(a)=g(a) 를 이용해 g(a) 를 묻기(★3·I-EQV d2) (3) a 의 방정식이 실근 둘이 되게 바꿔 각 경우 f'(-1) 을 모두 구하게 하기(★3·I-MI d1)."
```

```yaml
- id: RPM-CALC1-0280
  page: 47
  vendor_label: "유형 09 곱의 미분법"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    $f(x)=-x^2+3x$, $g(x)=2x^3+x^2-x-4$ 일 때 곡선 $y=f(x)g(x)$ 위의 점 $(1,\,-4)$ 에서의 접선의 기울기.
  category: "접선 기울기=(fg)'(1) → f'(1)g(1)+f(1)g'(1) → 값 대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곱의 미분법으로 미분계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    접선의 기울기는 (fg)'(1)=f'(1)g(1)+f(1)g'(1). f(1)=2, g(1)=-2(점 (1,-4) 확인), f'(1)=1, g'(1)=7 → 1·(-2)+2·7=12. 곱의 미분법에 「접선 기울기=미분계수」 를 얹은 표준 절차. 중·통찰 0·M_total 5·두 단계 → ★2.
  tier: star_2
  mechanism_primary: "접선 기울기=(fg)'(1) → f'(1)g(1)+f(1)g'(1) → 1·(-2)+2·7 → 12"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$12$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0280.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f, g 의 계수와 점의 x 좌표를 바꿀 수 있음. 제약: 점의 y 좌표 = f(1)g(1) 로 일치시켜야 하고 답 정수."
    creative: "(1) 접선의 방정식까지 묻기 → y=12(x-1)-4 (★2) (2) 「접선의 기울기가 12 인 점」 을 거꾸로 묻기 → (fg)'(x)=12 고차방정식 — 계수 조정 필요(★3·I-BW d1) (3) f, g 대신 f(1), f'(1), g(1), g'(1) 값만 주기 → 0276 골조(★2)."
```

```yaml
- id: RPM-CALC1-0281
  page: 47
  vendor_label: "유형 09 곱의 미분법"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    두 다항함수 $f$, $g$ 가 모든 실수 $x$ 에서 ㈎ $f(x)=x^3g(x)$ ㈏ $f'(x)g(x)-f(x)g'(x)=48x^4$ 을 만족할 때 $f(-1)g(-1)$ 의 값. 5지선다.
  category: "㈎ 미분 f'=3x²g+x³g' → ㈏ 대입 → g' 항 소거 → 3x²g²=48x⁴ → g=±4x → f(-1)g(-1)=-g(-1)²"
  M: {s: 3, k: 2, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "㈎ 를 미분해 ㈏ 에 넣으면 fg' 항이 소거되어 조건이 3x²g²=48x⁴ 로 축약됨을 읽기"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "두 다항함수의 관계식·미분 조건에서 함수 결정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ㈎ 를 미분하면 f'=3x²g+x³g'. ㈏ 에 넣으면 (3x²g+x³g')g-x³g·g'=3x²g² 이므로 3x²g²=48x⁴ → g²=16x² → g(x)=±4x. f(-1)g(-1)=(-1)³g(-1)² = -16(①) — g 의 부호와 무관. 두 조건을 결합하면 g' 항이 소거되어 g 가 결정되는 전환(EQV d2)과 「f(-1)g(-1)=-g(-1)²」 로 부호 분기가 사라지는 정리. 중·통찰 1(d2)·M_total 9 → ★2 출발에서 +1 → ★3. [분류 이슈] 벤더 「중」이나 미지 다항함수 둘·조건 결합·부호 처리로 ★3 판정 — 1단 차이, 기록.
  tier: star_3
  mechanism_primary: "㈎ 미분 f'=3x²g+x³g' → ㈏ 대입 → g' 항 소거 → 3x²g²=48x⁴ → g=±4x → f(-1)g(-1)=-g(-1)²=-16"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0281.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x³ 의 지수·우변 48x⁴ 를 바꿀 수 있음. 제약: f=xⁿg 꼴이면 좌변 = n·xⁿ⁻¹·g² 이므로 우변은 n·k²·x^(n-1+2m) 꼴로 두어 g=±k·xᵐ 이 나오게 · 묻는 값이 g 의 부호에 무관(짝수 거듭제곱)하도록."
    creative: "(1) g 의 부호가 답에 영향을 주는 값(f(1)+g(1))을 물으면 조건 추가(g(1)>0) 필요 → I-VF d1 로 ★3~4 (2) ㈎ 를 f(x)=(x²+1)g(x) 로 바꾸면 소거 뒤 2x·g² (★3) (3) ㈏ 의 좌변을 두 함수의 몫과 연결하는 방향은 교과 밖(몫의 미분법)이라 비권장."
```

```yaml
- id: RPM-CALC1-0282
  page: 47
  vendor_label: "유형 09 곱의 미분법"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    다항함수 $f$ 가 $(x-1)^2f(x)=x^8+ax+b$ 를 만족할 때 $f(2)$ 의 값 ($a$, $b$ 상수). 5지선다.
  category: "x=1 대입 → 1+a+b=0 · 양변 미분 후 x=1 → 8+a=0 → a, b 결정 → f(2)=(2⁸+2a+b)/1"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "(x-1)² 인수 조건을 「x=1 에서 값 0 · 도함수 0」 두 식으로 바꾸기 위해 항등식의 양변을 미분"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "항등식 양변 미분으로 미정계수 결정((x-a)² 인수)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    x=1 대입: 1+a+b=0. 양변 미분: 2(x-1)f(x)+(x-1)²f'(x)=8x⁷+a, x=1 대입: 0=8+a → a=-8, b=7. f(2)=2⁸-16+7=247(②). 우변이 (x-1)² 을 인수로 가지려면 값과 도함수가 모두 x=1 에서 0 이어야 함을 「양변 미분」 으로 끌어내는 전환(EQV d2). 조립제법 두 번으로도 가능하나 훨씬 길다. 상중·통찰 1(d2)·M_total 8 → ★3.
  tier: star_3
  mechanism_primary: "x=1 대입 → a+b=-1 · 양변 미분 후 x=1 → 8+a=0 → a=-8, b=7 → f(2)=(256-16+7)/1 → 247"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0282.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 8·인수 (x-1)² 의 중근 위치·묻는 지점 2 를 바꿀 수 있음. 제약: 중근 c 에서 값과 도함수 조건이 a, b 를 유일하게 정하고, f(k)=(kⁿ+ak+b)/(k-c)² 가 정수."
    creative: "(1) (x-1)² 을 (x-1)(x-2) 로 바꾸면 미분 없이 대입 두 번 → ★2 (2) 우변을 x⁸+ax²+bx+c 로 늘리고 (x-1)³ 인수 → 미분을 두 번 반복(★4·I-EQV d2 + I-PD d1) (3) 「f(1) 의 값」 을 물으면 lim (x⁸-8x+7)/(x-1)² 계산 — 극한과 결합(★4·I-RT d1)."
```

## 표본 판정 요약 (39문)

- ★ 분포: ★1 4 · ★2 28 · ★3 7 · ★4 0 · ★5 0
- 통찰형 9 · 절차형 30 · premium 0 (insights 가 비어 있지 않은 블록은 15 — 그중 d1 한 개뿐인 6문은 절차형)
- type_hint 상위: 「곱의 미분법으로 미분계수 구하기」 5 · 「미분계수 정의로 극한값 계산(h→0 꼴)」 4 · 「미분계수 정의로 극한값 계산(x→a 꼴)」 4 · 「절댓값·조각 정의 함수의 미분가능성 판정」 4 · 「평균변화율 — 구간 끝 미지수 구하기」 3 · 「평균변화율 = 미분계수 조건에서 미지수 구하기」 3 · 「관계식 f(x+y) 에서 미분계수 정의로 f' 구하기」 3 · 「미분법 공식으로 미분계수·미정계수 구하기」 3
- 통찰 유형: I-EQV 11 · I-SYM 1 · I-RT 1 · I-XU 1 · I-PD 1
- 그림: 6문(`crop:fig-0247.png` · `crop:fig-0263.png` · `crop:fig-0264.png` · `crop:fig-0265.png` · `crop:fig-0267.png` · `crop:fig-0269.png`)
- 서술형 태그 3문(0250 · 0268 · 0279) 모두 ★2 절차형 · 전사 답 확인 필요 문항 없음(39문 모두 재계산 일치)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다(2단 이상 드리프트는 없음 · 모두 1단 차이의 후보 기록).

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-CALC1-0247 | 벤더 「상중」·SYM d2 로 ★3 두었으나 f=p(x-2)²+q 로 세우는 대수 경로가 짧아 체감은 ★2~3 | ★2 / ★3 |
| RPM-CALC1-0263 | 유형 대표(라벨 없음 → ★2)이나 ㄷ 의 f(x)/x=원점 기울기 번역(RT d2)이 있어 ★3 후보 | ★2 / ★3 |
| RPM-CALC1-0265 | 벤더 「중」 → ★2 두었으나 ㄷ 의 산술·기하평균 결합(XU d2)이 있어 ★3 후보 · AM-GM 을 단원 밖 결합으로 볼지 카탈로그 설계 때 결정 | ★2 / ★3 |
| RPM-CALC1-0281 | 벤더 「중」이나 미지 다항함수 둘·조건 결합(EQV d2)·M_total 9 로 ★3 판정 — 라벨을 ★3 으로 두고 기록 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 통합해도 될 유형: 유형 03·04(h→0 꼴 · x→a 꼴)는 「미분계수 정의로 극한값 계산」 한 유형 아래 표현 두 갈래의 하위 변형으로 두는 편이 자연스럽다(골조가 같고 h² · x³ · 유리화 같은 치환 변형이 난이도를 정함). 유형 01·02 도 「평균변화율·미분계수 등식」 한 유형으로 묶고 0251(항등식으로 f 결정)만 상위 변형으로 분리.
- 따로 세워야 할 유형: (1) 「관계식 f(x+y)」 — 덧셈형(0260·0261 · f'(x)=f'(0)+kx)과 곱셈형(0262 · f'(x)=k·f'(0)·f(x))은 골조가 달라 두 항목. (2) 「그래프에서 기울기 비교(보기 판정)」 — 볼록성 방향이 골조이고 f(x)/x · 평균 비교 같은 번역 보기가 ★ 를 올림(0263·0265). (3) 「절댓값·조각 함수의 미분가능성」 — 정의 계산형(0266·0268·0270)과 「곱의 미분법을 못 쓰는 함수의 곱」(0271)은 후자를 상위 유형으로 분리. (4) 「항등식 양변 미분」(0282) — 유형 09 안에 있으나 곱의 미분법 계산 유형과 골조가 달라 별도 유형. (5) 「f'(a) 를 상수로 두는 다항함수 결정」(0275) — 미분법 공식의 하위 변형이지만 반복 출제 골조라 별도 항목 권장.
- 「그래프에서 불연속·미분불가능 점 세기」(0267·0269)는 02 단원의 「그래프에서 극한 존재·불연속점 읽기」 와 같은 계열이므로 단원을 넘어 하나의 카탈로그 항목(연속→미분가능 확장)으로 묶을 수 있다.
