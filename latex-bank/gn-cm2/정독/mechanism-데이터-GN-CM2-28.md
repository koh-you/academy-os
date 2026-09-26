---
name: mechanism-데이터-GN-CM2-28
description: 개념원리 공통수학2 28 합성함수(1/1 · 226~233쪽 · 32문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학2 (22개정 · 학생용) · 전사본 latex-bank/gn-cm2
  section: 28 합성함수
  unit_code: GN-CM2-28
  part: "1/1"
  extract_range: "226~233쪽 · 226-524~233-550"
  total_problems: 32
  unit_total: 32
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·예제 태그·연습문제 STEP)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). insight_type 은 insights 가 비어 있으면 절차형, 하나라도 있으면 통찰형. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm2/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm2/items/<id>.tex
  image_source: latex-bank/gn-cm2/figures/ (crops.json)
---

# 개념원리 공통수학2 · 28 합성함수 (1/1) 정독 데이터 (v1.0)

226~233쪽의 「28 합성함수」 전 32문항을 다룬다. 구역은 개념원리 익히기 3문 · 필수·발전 예제 구역 17문(필수 예제 4 · 발전 예제 1 · 확인체크 12) · 연습문제 STEP 1 5문 · STEP 2 4문 · 실력 UP 3문이다. 개념원리 고등의 난이도 신호는 구역과 태그로 읽는다. 개념원리 익히기 → ★1 출발, 필수 예제 → ★2, 발전 예제 → ★3, 연습문제 STEP 1 → ★2, STEP 2 → ★3, 실력 UP → ★4 출발이다. 확인체크는 바로 앞 예제의 짝 문항이므로 **짝 예제의 층(필수 ★2 · 발전 ★3)을 출발점**으로 삼고 M_total·통찰로 ±1 조정했다(확인체크를 일률적으로 ★1 에서 출발시키면 같은 골조의 예제와 2단이 벌어져 라벨이 실제 체감과 어긋난다). 단원 내용은 합성함수의 정의와 함숫값, 교환법칙 $f\circ g=g\circ f$ 의 미정계수, 미지함수 $h$ 결정, $f^n$ 꼴의 반복합성(규칙·주기), 합성함수의 그래프 다섯 골조로 나뉜다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(유형 코드+depth) · `variation_notes`(바꿔도 되는 수와 제약 · 골조 유지 변형)를 채웠다. 답은 전사·검수 단계에서 답지와 대조가 끝난 값을 그대로 옮겼고 정독 단계에서 재검산하지 않았다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-CM2-226-524
  page: 226
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    대응 그림으로 주어진 두 함수 f, g 에 대해 ⑴~⑶ (g∘f)(5), (g∘f)(6), (g∘f)(7) ⑷~⑹ (f∘g)(a), (f∘g)(b), (f∘g)(c) 의 값.
  category: '합성함수의 정의 → 화살표를 안쪽 함수부터 두 번 따라가기'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '대응 그림에서 합성함수의 함숫값 구하기'
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (g∘f)(5)=g(f(5)) 처럼 안쪽 f 를 먼저 적용하는 순서만 지키면 그림에서 값을 읽어 끝난다. 합성 순서를 뒤집는 T-표기 함정 하나뿐이고 계산이 없다. 개념원리 익히기 구역·통찰 0·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: 'x → f 화살표 → g 화살표 → (g∘f)(x)'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $4$ ⑵ $7$ ⑶ $4$ ⑷ $c$ ⑸ $a$ ⑹ $a$'
  answer_source: "답지"
  figure: 'crop:fig-226-524.png'
  latex: latex-bank/gn-cm2/items/226-524.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '그림의 대응 자체(원소 이름과 화살표 연결)를 바꿀 수 있다. 제약: f 의 치역이 g 의 정의역에 포함돼야 하고, 묻는 원소가 두 번 따라갈 수 있는 것이어야 한다. 그림 라벨(5,6,7 / a,b,c)은 답과 직결되므로 크롭을 새로 만들지 않는 한 고정.'
    creative: '(1) (g∘f)(x)=특정값 인 x 를 묻는 역방향(★2 · I-BW d1) (2) f∘g 와 g∘f 가 다름을 확인시키는 비교 발문(★1 유지) (3) g∘f 의 치역을 묻기(★2).'
```

```yaml
- id: GN-CM2-226-525
  page: 226
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    f(x)=2x+3, g(x)=-x^2 에 대하여 ⑴ (g∘f)(x) ⑵ (f∘g)(x) ⑶ (f∘f)(x) ⑷ (g∘g)(x) 를 각각 구하기.
  category: '안쪽 함수의 식을 바깥 함수의 x 자리에 대입 → 전개'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '두 함수의 합성식 구하기(대입·전개)'
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    네 개 모두 대입 한 번과 전개로 끝난다. -(2x+3)^2 의 부호와 (g∘g)(x)=-(-x^2)^2 의 차수만 주의하면 된다. 개념원리 익히기·통찰 0 · M_total 6 이라 −1 조건(M_total ≤ 5)에는 걸리지 않지만 개념 확인 구역 그대로 ★1.
  tier: star_1
  mechanism_primary: '안쪽 식 대입 → 전개 → 정리'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $(g\circ f)(x)=-4x^2-12x-9$ ⑵ $(f\circ g)(x)=-2x^2+3$ ⑶ $(f\circ f)(x)=4x+9$ ⑷ $(g\circ g)(x)=-x^4$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/gn-cm2/items/226-525.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'f 의 일차계수·상수항(2x+3 → 3x-1 등)과 g 의 이차식(-x^2 → 2x^2, x^2-1)을 바꿀 수 있다. 제약: (g∘g)(x) 가 사차식으로 남아 차수 감각을 보여주도록 g 를 이차 이상으로 둔다.'
    creative: '(1) f∘g 와 g∘f 를 나란히 구하게 해 교환법칙이 성립하지 않음을 확인(★1 유지) (2) g 를 구간함수로 바꿔 가지 판정을 넣기(★2 · T-범위) (3) (f∘f)(x)=ax+b 의 a, b 를 묻는 미정계수형(★2).'
```

```yaml
- id: GN-CM2-226-526
  page: 226
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    f(x)=x^2-2, g(x)=-x+5, h(x)=2x-1 에 대하여 ⑴ ((f∘g)∘h)(x) ⑵ (f∘(g∘h))(x) ⑶ ((g∘f)∘h)(x) ⑷ (f∘(h∘g))(x) 를 각각 구하기.
  category: '두 함수씩 먼저 합성 → 남은 함수에 대입 → 결합법칙 확인'
  M: {s: 2, k: 3, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '세 함수의 합성과 결합법칙'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴⑵ 가 같은 값으로 나오는 것이 결합법칙의 확인이고, ⑶⑷ 는 합성 순서를 바꾸면 값이 달라짐을 보여준다. 골조는 대입·전개뿐이지만 이차식 전개가 네 번 들어가 Mₖ 3. 개념원리 익히기 출발 ★1 에서 M_total 7 로 +1 → ★2.
  tier: star_2
  mechanism_primary: '괄호 안 두 함수 먼저 합성 → 바깥 함수에 대입 → 전개'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $((f\circ g)\circ h)(x)=4x^2-24x+34$ ⑵ $(f\circ(g\circ h))(x)=4x^2-24x+34$ ⑶ $((g\circ f)\circ h)(x)=-4x^2+4x+6$ ⑷ $(f\circ(h\circ g))(x)=4x^2-36x+79$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/226-526.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '세 함수의 계수를 바꿀 수 있다. 제약: f 만 이차로 두고 g, h 를 일차로 두어야 전개가 이차식 한 번으로 끝나고, ⑴=⑵ 라는 결합법칙 확인이 살아 있도록 짝을 유지한다.'
    creative: '(1) ⑴⑵ 만 주고 결합법칙이 성립하는 이유를 쓰게 하기(★2 유지) (2) h 를 미지함수로 두고 ((f∘g)∘h)(x) 를 주어 h 를 역으로 구하게 하기(★3 · I-EQV) (3) 세 함수 중 하나를 구간함수로 바꿔 구간 분할을 넣기(★3).'
```

### 필수·발전 예제

```yaml
- id: GN-CM2-227-e9
  page: 227
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    대응 그림으로 주어진 함수 f: X → X 에 대해 ⑴ f(2)+(f∘f)(2)+(f∘f∘f)(2) ⑵ 함수 f∘f 의 치역.
  category: '화살표 반복 적용 → 함숫값 합 · 모든 원소의 상의 상을 모아 치역'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '대응 그림에서 f∘f·f∘f∘f 의 함숫값과 치역'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 2 에서 출발해 화살표를 한 번·두 번·세 번 따라간 값을 더하면 되고, ⑵ 는 X 의 원소 전부에 대해 f 를 두 번 적용한 값을 모으면 된다. 치역이 X 전체가 아닐 수 있다는 점만 확인 포인트. 필수 예제 출발 ★2·통찰 0·M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: 'x → f → f → f 를 그림에서 반복 → 값의 합 · X 의 모든 원소의 f∘f 값 집합 = 치역'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $7$ ⑵ $\{0,\,1,\,3\}$'
  answer_source: "본문 풀이"
  figure: 'crop:fig-227-e9.png'
  latex: latex-bank/gn-cm2/items/227-e9.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '출발 원소(2)와 합성 횟수(3회 → 4회)를 바꿀 수 있다. 제약: 그림의 대응은 크롭 고정이므로 새 그림 없이는 화살표를 바꾸지 못한다. 치역을 묻는 ⑵ 는 f 가 일대일대응이 아니어야 의미가 있다.'
    creative: '(1) f∘f∘f 의 치역까지 물어 치역이 줄어드는 과정을 보이기(★3 · I-PD) (2) f^n(2) 가 일정해지는 n 을 묻기(★3 · 주기·고정점) (3) f∘f 가 항등함수가 되도록 화살표 하나를 고치게 하기(★3 · I-BW).'
```

```yaml
- id: GN-CM2-227-527
  page: 227
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    대응 그림으로 주어진 두 함수 f: X → Y, g: Y → Z 에 대해 (g∘f)(x)=3 을 만족시키는 x 의 값.
  category: 'g 에서 3 으로 가는 원소 찾기 → 그 원소로 가는 f 의 원소 찾기'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '대응 그림에서 합성함숫값이 주어질 때 원소 찾기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    화살표를 거꾸로 두 번 따라가는 문제지만 Y 의 후보가 하나로 정해지므로 분기가 없고, 대응 그림에서는 역추적이 표준 절차라 통찰로 세지 않았다. 짝 예제(필수) 출발 ★2·M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: 'g(y)=3 인 y 찾기 → f(x)=y 인 x 찾기'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-1$'
  answer_source: "답지"
  figure: 'crop:fig-227-527.png'
  latex: latex-bank/gn-cm2/items/227-527.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '목표값 3 을 Z 의 다른 원소로 바꿀 수 있다. 제약: 그 원소로 가는 경로가 존재해야 하고, 경로가 둘 이상이면 답이 여러 개가 되므로 발문을 「모든 x」로 바꿔야 한다.'
    creative: '(1) (g∘f)(x)=k 인 x 가 존재하지 않는 k 를 묻기(★3 · 치역 해석) (2) g∘f 의 치역을 묻기(★2) (3) f, g 중 하나의 화살표를 가리고 (g∘f) 가 일대일대응이 되게 복원(★3 · I-BW).'
```

```yaml
- id: GN-CM2-227-528
  page: 227
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    f(x)=2x-1 과 구간함수 g(x)(x≥1 이면 -x+3, x<1 이면 5)에 대하여 (f∘g)(2)+(g∘f)(-1) 의 값.
  category: '안쪽 함숫값 계산 → 그 값이 속한 구간으로 g 의 가지 선택 → 바깥 함수 대입'
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '구간함수가 포함된 합성함수의 함숫값'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    g(2) 는 x≥1 가지, f(-1)=-3 이므로 g(-3) 은 x<1 가지를 쓴다. 안쪽 값을 먼저 구하고 그 값으로 가지를 고르는 순서만 지키면 된다. 함정은 가지 선택(T-범위)과 합성 순서(T-표기) 둘 → Mₜ 2. 확인체크 출발 ★2 유지.
  tier: star_2
  mechanism_primary: '안쪽 함숫값 → 구간 판정으로 가지 선택 → 바깥 함수에 대입 → 합'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/227-528.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '대입값(2, -1)과 g 의 경계(x≥1)·가지 식을 바꿀 수 있다. 제약: 두 대입이 서로 다른 가지를 쓰도록 값을 고르고, 경계값 자체(x=1)를 쓰면 어느 가지인지 발문이 명확해야 한다.'
    creative: '(1) 대입값을 경계 x=1 로 두어 경계 처리(T-경계)를 묻기(★2 유지) (2) (f∘g)(x) 를 구간별 식으로 구하게 하기(★3 · I-MI) (3) (g∘f)(a)=5 인 a 의 범위를 묻기(★3 · I-BW+I-MI).'
```

```yaml
- id: GN-CM2-227-529
  page: 227
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    X={1,2,3} 에서 X 로의 두 일대일대응 f, g 가 f(2)=g(1)=3, (g∘f)(2)=(f∘g)(1)=1 일 때 (f∘f)(3)+(g∘f)(1) 의 값.
  category: '합성 조건으로 f, g 의 값 하나씩 확정 → 일대일대응으로 남은 대응 결정'
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '주어진 합성값과 일대일대응(치역=X·서로 다른 상) 조건을 함께 써서 f, g 의 대응표를 빈칸 없이 확정'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '일대일대응 조건과 합성값으로 대응표 완성하기'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    (g∘f)(2)=g(f(2))=g(3)=1, (f∘g)(1)=f(g(1))=f(3)=1 로 각각 한 값이 정해지고, 나머지는 일대일대응이라 남은 원소끼리 짝지어 확정된다. 조건을 따로 보면 막히고 표로 합쳐야 풀린다는 점에서 I-CON d1. 확인체크(짝 예제 필수 ★2) 출발에서 M_total 7·통찰 1 → ★3.
  tier: star_3
  mechanism_primary: '합성값 → g(3), f(3) 확정 → 일대일대응으로 남은 칸 채우기 → 두 합성값 계산'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/227-529.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '주어지는 값(f(2)=g(1)=3 · 합성값 1)과 묻는 합성값을 바꿀 수 있다. 제약: 일대일대응 조건까지 넣었을 때 f, g 가 유일하게 결정돼야 하고, 원소 수를 3 에서 4 로 늘리면 조건 하나를 더 줘야 유일해진다.'
    creative: '(1) 원소를 4개로 늘리고 조건 하나를 더 주기(★3 유지 · 표 크기만 증가) (2) 조건을 만족시키는 (f,g) 의 개수를 묻기(★4 · I-MI+I-VF) (3) 일대일대응 조건을 빼고 가능한 (f∘f)(3) 값을 모두 구하게 하기(★4 · I-MI).'
```

```yaml
- id: GN-CM2-228-e10
  page: 228
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    f(x)=ax+3, g(x)=-x+4 에 대하여 f∘g=g∘f 가 성립할 때 상수 a 의 값.
  category: '양변을 x 에 대한 일차식으로 전개 → 항등식이므로 계수 비교 → a'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: 'f∘g=g∘f 를 만족시키는 미정계수 구하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f(g(x))=a(-x+4)+3, g(f(x))=-(ax+3)+4 를 각각 정리해 모든 x 에 대한 항등식으로 보고 상수항을 비교하면 a 가 나온다(일차항은 저절로 같다). 「모든 x 에서 성립 → 계수 비교」는 공통수학1 항등식의 표준 절차라 통찰로 세지 않았다. 필수 예제 ★2 유지.
  tier: star_2
  mechanism_primary: 'f(g(x)) 와 g(f(x)) 전개 → 항등식 계수 비교 → a'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-\dfrac{1}{2}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/228-e10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'f 의 상수항 3 과 g 의 계수(-1, 4)를 바꿀 수 있다. 제약: 두 일차함수의 일차항 계수가 같아져 상수항 비교만 남는 구조를 유지하려면 g 의 일차계수를 고정하고 f 의 상수항으로 조절한다. a 가 분수로 떨어져도 무방.'
    creative: '(1) f, g 를 모두 미정계수로 두고 관계식을 구하게 하기(★3 · I-CON) (2) f∘g=g∘f 를 만족시키는 a 가 존재하지 않는 g 를 찾게 하기(★4 · I-BW) (3) f 를 이차함수로 바꾸면 계수 비교가 세 개로 늘어 ★3.'
```

```yaml
- id: GN-CM2-228-530
  page: 228
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    f(x)=2x+3, g(x)=-x+k 에 대하여 f∘g=g∘f 가 성립할 때 g(-2) 의 값(k 는 상수).
  category: '계수 비교로 k 결정 → g 에 -2 대입'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: 'f∘g=g∘f 로 미정계수를 구한 뒤 함숫값 계산'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e10 과 같은 골조에 마지막 대입 한 단계가 붙었다. 양변을 전개해 상수항을 비교하면 k 가 정해지고 g(-2) 를 계산한다. 통찰 0·M_total 7 → 확인체크 출발 ★2 유지.
  tier: star_2
  mechanism_primary: '전개 → 상수항 비교로 k → g(-2) 대입'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/228-530.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'f 의 계수(2, 3)와 마지막 대입값(-2)을 바꿀 수 있다. 제약: g 의 일차계수는 -1 로 고정해야 일차항 비교가 자동으로 성립하고 k 가 유일하게 정해진다.'
    creative: '(1) 묻는 것을 k 가 아니라 (f∘g)(1) 로 바꾸기(★2 유지) (2) g(x)=-x+k 를 g(x)=mx+k 로 바꿔 (m,k) 쌍을 모두 구하게 하기(★3 · I-MI) (3) f∘g=g∘f 를 만족시키는 k 의 존재 조건을 묻기(★4 · I-BW).'
```

```yaml
- id: GN-CM2-228-531
  page: 228
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    f(x)=ax-1, g(x)=bx+2 가 f∘g=g∘f 를 만족시키고 g(3)=-1 일 때 상수 a, b 에 대한 ab 의 값.
  category: '계수 비교로 a, b 의 관계식 → g(3)=-1 로 b 결정 → a 계산'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: 'f∘g=g∘f 와 함숫값 조건으로 두 미정계수 구하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f(g(x))=abx+2a-1, g(f(x))=abx-b+2 에서 일차항은 같으므로 상수항 비교로 2a-1=-b+2 하나, g(3)=3b+2=-1 로 b 하나가 나와 연립이 바로 풀린다. 두 조건을 순서대로 쓰는 표준 연립이라 통찰 없음. 확인체크 ★2 유지.
  tier: star_2
  mechanism_primary: '상수항 비교 → 2a-1=-b+2 · g(3)=-1 → b → a → ab'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/228-531.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'f, g 의 상수항(-1, 2)과 g(3)=-1 의 자리·값을 바꿀 수 있다. 제약: 두 함수 모두 일차여야 일차항이 ab 로 같아져 상수항 비교 한 줄로 줄고, b 가 유리수로 떨어지도록 값을 고른다.'
    creative: '(1) g(3) 대신 (f∘g)(1) 값을 주기(★3 · 조건 해석 한 겹 추가) (2) ab 대신 a+b 의 최댓값을 묻고 조건을 부등식으로 주기(★4) (3) f∘g=g∘f 를 항등함수 조건 f∘g=x 로 바꾸면 역함수 골조로 이동(★3 · I-EQV).'
```

```yaml
- id: GN-CM2-228-532
  page: 228
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    대응 그림으로 주어진 f: X → X 와 g(1)=3, f∘g=g∘f 를 만족시키는 g: X → X 에 대하여 g(2)-g(4) 의 값.
  category: '함수 등식을 원소별 g(f(x))=f(g(x)) 로 바꿔 g 의 값을 연쇄 결정'
  M: {s: 2, k: 1, a: 3, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: 'f∘g=g∘f 라는 함수 등식을 각 원소에서 g(f(x))=f(g(x)) 로 옮겨, 아는 값 g(1)=3 에서 f 의 순환(1→2→3→4→1)을 따라 g(2), g(3), g(4) 를 차례로 확정'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: 'f∘g=g∘f 인 미지의 대응 g 를 그림에서 결정하기'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    그림의 f 는 1→2→3→4→1 의 순환이다. x=1 에 등식을 쓰면 g(2)=g(f(1))=f(g(1))=f(3), 이어서 x=2, 3 에 쓰면 g(3), g(4) 가 연달아 정해진다. 식이 아니라 대응에서 등식을 원소별로 풀어 쓰는 전환이 핵심이라 I-EQV d2. 확인체크 출발 ★2 에서 통찰 1(d2)·M_total 8 → ★3.
  tier: star_3
  mechanism_primary: 'g(f(x))=f(g(x)) 에 x=1,2,3 대입 → g(1)=3 에서 f 의 순환을 따라 g 값 연쇄 확정 → g(2)-g(4)'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2$'
  answer_source: "답지"
  figure: 'crop:fig-228-532.png'
  latex: latex-bank/gn-cm2/items/228-532.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '시작 조건 g(1)=3 의 값과 묻는 차(g(2)-g(4))를 바꿀 수 있다. 제약: 그림의 f 가 X 전체를 한 바퀴 도는 순환이어야 한 값에서 g 전체가 결정된다. 순환이 둘로 쪼개지면 조건을 하나 더 줘야 한다.'
    creative: '(1) g(1) 값을 주지 않고 조건을 만족시키는 g 의 개수를 묻기(★4 · I-MI+I-VF) (2) g 가 일대일대응인지 판정하게 하기(★3 유지) (3) f 를 순환이 아닌 대응으로 바꾸면 g 가 유일하지 않아 ★4 로 상승.'
```

```yaml
- id: GN-CM2-229-e11
  page: 229
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    f(x)=x+2, g(x)=3x+1 에 대하여 ⑴ (f∘h)(x)=g(x) ⑵ (h∘f)(x)=g(x) ⑶ (h∘g∘f)(x)=f(x) 를 만족시키는 함수 h(x) 를 각각 구하기.
  category: 'h 가 안쪽이면 바깥 f 를 벗겨내고, h 가 바깥이면 안쪽 식을 t 로 치환'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '합성 조건을 만족시키는 미지함수 h 구하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 f(h(x))=h(x)+2=3x+1 에서 바로, ⑵ 는 h(x+2)=3x+1 에서 x+2=t 로 치환해, ⑶ 은 안쪽 g∘f 를 먼저 합성한 뒤 같은 치환으로 푼다. h 가 안쪽인지 바깥인지에 따라 방법이 갈리는 것이 이 유형의 핵심이지만 둘 다 교과서 표준 절차라 통찰로 세지 않았다. 필수 예제 ★2 유지.
  tier: star_2
  mechanism_primary: 'h 가 안쪽 → 바깥 함수 벗기기 · h 가 바깥 → 안쪽 식을 t 로 치환해 h(t) 복원'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $h(x)=3x-1$ ⑵ $h(x)=3x-5$ ⑶ $h(x)=\dfrac{1}{3}x-\dfrac{1}{3}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/229-e11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'f, g 의 계수를 바꿀 수 있다. 제약: 치환 후 h 의 계수가 유리수로 떨어지도록 f 의 일차계수를 1 이나 g 의 계수의 약수로 두고, ⑶ 처럼 세 함수가 섞이면 안쪽 합성이 먼저 계산되는지 확인.'
    creative: '(1) h 를 구하지 말고 h(1) 만 묻기(★2 유지) (2) f 를 이차함수로 바꾸면 치환이 막혀 대입 비교로 가야 해 ★3 (3) (f∘h)(x)=(h∘f)(x) 인 h 를 모두 구하게 하기(★4 · I-MI).'
```

```yaml
- id: GN-CM2-229-533
  page: 229
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    f(x)=2x-1, g(x)=-3x+4 에 대하여 ⑴ (f∘h)(x)=g(x) ⑵ (h∘f)(x)=g(x) ⑶ (h∘g∘f)(x)=g(x) 를 만족시키는 함수 h(x) 를 각각 구하기.
  category: 'h 의 위치에 따라 바깥 벗기기 또는 안쪽 치환'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '합성 조건을 만족시키는 미지함수 h 구하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e11 과 같은 골조를 계수만 바꿔 반복한다. ⑶ 은 g∘f 를 먼저 합성한 뒤 그 식을 t 로 치환해 h 를 복원한다. 통찰 0·M_total 7 → 확인체크 출발 ★2 유지.
  tier: star_2
  mechanism_primary: '⑴ 바깥 f 벗기기 · ⑵⑶ 안쪽 식을 t 로 치환 → h(t) 복원'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $h(x)=-\dfrac{3}{2}x+\dfrac{5}{2}$ ⑵ $h(x)=-\dfrac{3}{2}x+\dfrac{5}{2}$ ⑶ $h(x)=\dfrac{1}{2}x+\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/229-533.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'f, g 의 계수를 바꿀 수 있다. 제약: ⑴⑵ 의 답이 우연히 같아지는 현재 조합은 계수를 바꾸면 깨지므로, 그 우연을 논점으로 쓸지 먼저 정한다. 치환 후 분수 계수가 나와도 무방.'
    creative: '(1) ⑴ 과 ⑵ 의 h 가 같아지는 f, g 의 조건을 묻기(★4 · I-BW) (2) h 를 구간함수로 만들도록 g 를 구간함수로 주기(★3 · I-MI) (3) h∘h=g 인 h 를 구하게 하기(★4 · 제곱 구조).'
```

```yaml
- id: GN-CM2-229-534
  page: 229
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    모든 실수 x 에 대하여 f((x+1)/2)=3x+2 일 때 f((1-2x)/3) 을 구하기.
  category: '괄호 안 식을 t 로 놓아 f 의 일반식 복원 → 새 식 대입'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: 'f 의 식이 아니라 f 에 어떤 식을 넣은 결과만 주어졌음을 보고, 괄호 안을 t 로 치환해 x 를 t 로 되돌려 f(t) 자체를 복원하는 동치 변환'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: 'f(ax+b) 꼴 조건에서 f 의 식 복원하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (x+1)/2=t 로 놓으면 x=2t-1 이므로 f(t)=3(2t-1)+2 로 f 가 복원되고, 여기에 (1-2x)/3 을 넣으면 끝난다. 주어진 조건을 그대로 쓸 수 없어 되돌리는 변환이 필요하므로 I-EQV d1. 확인체크 출발 ★2, 통찰 1(d1) 로 +1 조건(2개 이상 또는 d3) 미달 → ★2 유지.
  tier: star_2
  mechanism_primary: '(x+1)/2=t 치환 → x=2t-1 → f(t)=6t-1 → (1-2x)/3 대입'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$f\!\left(\dfrac{1-2x}{3}\right)=-4x+1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/229-534.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '괄호 안 식 (x+1)/2 와 우변 3x+2, 그리고 묻는 식 (1-2x)/3 을 바꿀 수 있다. 제약: 괄호 안이 일차식이어야 역으로 x 를 t 로 풀 수 있고, 최종 답이 일차식으로 정리되도록 계수를 고른다.'
    creative: '(1) f(t) 를 복원한 뒤 f(2) 같은 한 점 값만 묻기(★2 유지) (2) 괄호 안을 이차식으로 바꾸면 치환이 일대일이 아니라 정의역 제한이 필요해 ★4 (3) f(x+1)-f(x) 를 묻는 차분형으로 바꾸기(★3).'
```

```yaml
- id: GN-CM2-230-e12
  page: 230
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    f(x)=x+1 에 대하여 f^1=f, f^(n+1)=f∘f^n 으로 정의할 때 f^10(a)=30 을 만족시키는 상수 a 의 값.
  category: 'f 를 두세 번 합성해 f^n 의 규칙 찾기 → n=10 대입 → 역으로 a'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-PD
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: 'f^2(x)=x+2, f^3(x)=x+3 을 직접 계산해 f^n(x)=x+n 이라는 일반항을 스스로 찾아내야 10회 합성을 우회할 수 있음'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: 'f^n 꼴 반복합성의 규칙 찾기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f 를 두 번, 세 번 합성해 보면 더해지는 값이 합성 횟수와 같다는 규칙이 바로 보이고, f^10(a)=a+10=30 에서 a 가 나온다. 규칙 발견이 한 번의 관찰로 끝나 I-PD d1. 필수 예제 출발 ★2·M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: 'f^2, f^3 계산 → f^n(x)=x+n 규칙 → a+10=30 → a'
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '$20$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/230-e12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '더하는 상수(1), 합성 횟수(10), 목표값(30)을 바꿀 수 있다. 제약: f 가 x+c 꼴이면 f^n(x)=x+nc 로 항상 규칙이 성립하므로 값 선택이 자유롭고, a 가 정수로 떨어지게 목표값을 고른다.'
    creative: '(1) f(x)=2x 로 바꿔 f^n(x)=2^n x 규칙을 찾게 하기(★2 유지 · 지수 규칙) (2) f(x)=-x+2 처럼 주기 2 인 함수로 바꿔 홀짝 판정을 넣기(★3 · I-PD d2) (3) f^n(a)=30 인 (n,a) 쌍을 모두 구하게 하기(★4 · I-MI).'
```

```yaml
- id: GN-CM2-230-535
  page: 230
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    f(x)=x+2 에 대하여 f^1=f, f^(n+1)=f∘f^n 일 때 f^2025(1) 의 값.
  category: 'f^n(x)=x+2n 규칙 적용 → n=2025, x=1'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: 'f^n 꼴 반복합성의 규칙 찾기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    앞 예제에서 익힌 f^n(x)=x+nc 규칙을 그대로 적용하는 자리라 규칙 발견을 통찰로 세지 않았다(예제 직후 확인체크). 2025 라는 큰 수가 직접 합성을 막는 장치일 뿐 골조는 대입 한 줄. 확인체크 출발 ★2·M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: 'f^n(x)=x+2n → f^2025(1)=1+2·2025'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4051$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/230-535.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '더하는 상수(2), 합성 횟수(2025), 출발값(1)을 자유롭게 바꿀 수 있다. 제약: 규칙이 x+nc 로 유지되도록 f 를 평행이동형 일차함수로 둔다.'
    creative: '(1) f^n(1)>1000 인 최소의 n 을 묻기(★3 · 부등식 결합) (2) f(x)=x+2 를 f(x)=2x+1 로 바꿔 f^n 의 규칙이 등비꼴이 되게 하기(★3 · I-PD d2) (3) f^n(1) 을 n 으로 나타낸 뒤 그 값이 3의 배수인 n 을 묻기(★3 · I-XU).'
```

```yaml
- id: GN-CM2-230-536
  page: 230
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    f(x)=x/3 에 대하여 f^1=f, f^(n+1)=f∘f^n 으로 정의할 때 f^5(729)+f^4(243) 의 값.
  category: 'f^n(x)=x/3^n 규칙 적용 → 두 값 계산 → 합'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: 'f^n 꼴 반복합성의 규칙 찾기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    합성할 때마다 3 으로 나뉘므로 f^n(x)=x/3^n 이고, 729=3^6, 243=3^5 이라 각각 3 이 남는다. 거듭제곱 정리만 하면 되고 규칙도 한 번 합성에서 바로 보여 통찰로 세지 않았다. 확인체크 출발 ★2 유지.
  tier: star_2
  mechanism_primary: 'f^n(x)=x/3^n → 729/3^5 + 243/3^4'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/230-536.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '나누는 수(3), 합성 횟수(5,4), 대입값(729,243)을 바꿀 수 있다. 제약: 대입값을 밑의 거듭제곱으로 두어야 답이 정수로 떨어진다.'
    creative: '(1) f^n(729)=1 인 n 을 묻기(★2 유지 · 역방향 한 겹) (2) f(x)=x/3 을 f(x)=x/3+1 로 바꾸면 규칙이 등비수열 합 꼴이 되어 ★4 (3) f^n(x) 를 n 으로 나타내게 하는 서술형(★3).'
```

```yaml
- id: GN-CM2-230-537
  page: 230
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    대응 그림으로 주어진 f: X → X 에 대하여 f^1=f, f^(n+1)=f∘f^n 일 때 f^100(1)+f^101(3) 의 값.
  category: '화살표를 반복해 궤도의 주기 발견 → 지수를 주기로 나눈 나머지로 환원'
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-PD
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '1 과 3 에서 출발해 화살표를 따라가면 같은 원소로 되돌아오는 주기가 생김을 발견하고, 100·101 을 그 주기로 나눈 나머지로 바꿔야 계산이 끝남'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '대응 그림에서 f^n 의 주기 찾기'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    식이 아니라 대응이라 일반항이 없고, 궤도가 되돌아오는 주기를 직접 찾아야 한다. 출발점이 1 과 3 으로 둘이라 각각의 궤도를 따로 추적하고 나머지 0 인 경우의 처리(T-경계)에서 실수가 나온다. 규칙 발견의 깊이가 한 단계 더 있어 I-PD d2, 확인체크 출발 ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: '궤도 추적 → 주기 p 발견 → 100 mod p, 101 mod p 로 환원 → 두 값의 합'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$8$'
  answer_source: "답지"
  figure: 'crop:fig-230-537.png'
  latex: latex-bank/gn-cm2/items/230-537.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '지수(100, 101)와 출발 원소(1, 3)를 바꿀 수 있다. 제약: 그림의 대응은 크롭 고정이므로 주기는 바꿀 수 없고, 지수를 주기의 배수로 두면 나머지 0 처리를 묻는 문제가 된다.'
    creative: '(1) f^n(1)=1 을 만족시키는 100 이하의 n 의 개수를 묻기(★4 · I-PD+세기) (2) f^100(x)=x 인 x 를 모두 구하게 하기(★4 · I-MI) (3) 대응을 순환이 아닌 합류형으로 바꿔 결국 한 점으로 모이게 하기(★3 유지 · 고정점).'
```

```yaml
- id: GN-CM2-231-e13
  page: 231
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["발전"]
  category_type: "발전 예제"
  summary: |
    0≤x≤2 에서 정의된 두 함수 y=f(x), y=g(x) 의 그래프가 주어질 때 합성함수 y=(f∘g)(x) 의 그래프를 그리기.
  category: '그래프 → 구간별 식 → g(x) 값의 범위로 f 의 가지 선택 → 구간별 합성식 → 꺾은선'
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '주어진 것도 답도 그래프인데 중간 계산은 식으로만 가능하므로, 꺾은선을 구간별 일차식으로 옮겼다가 다시 그래프로 되돌리는 표현 전환이 풀이의 축'
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '안쪽 g(x) 의 값이 f 의 어느 구간에 들어가는지에 따라 쓸 가지가 달라지므로 정의역을 그 기준으로 다시 쪼개야 함'
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: '두 꺾은선 그래프의 합성함수 그래프 그리기'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 그래프를 각각 구간별 일차식으로 읽고, 안쪽 g 의 치역이 f 의 어느 구간에 걸리는지로 x 의 구간을 다시 나눈 뒤 대입한다. 정의역 분할 기준이 x 가 아니라 g(x) 라는 점이 이 유형의 벽이다. 통찰 2개지만 구간이 둘로만 갈리는 정형이라 발전 예제 출발 ★3 유지.
  mechanism_primary: '그래프 → g, f 의 구간별 식 → g(x) 의 범위로 구간 재분할 → 구간별 합성식 → 꺾은선'
  tier: star_3
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '풀이 참조 ($(f\circ g)(x)=\begin{cases} 2 & (0\le x\le 1) \\ -2x+4 & (1\le x\le 2) \end{cases}$의 그래프 — 세 점~$(0,\,2)$, $(1,\,2)$, $(2,\,0)$을 차례로 잇는 꺾은선)'
  answer_source: "본문 풀이"
  figure: 'crop:fig-231-e13.png'
  latex: latex-bank/gn-cm2/items/231-e13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 그래프의 꺾이는 점과 기울기를 바꿀 수 있다. 제약: g 의 치역이 f 의 정의역 0≤x≤2 안에 들어가야 합성이 정의되고, 꺾인 점의 좌표가 정수·단순 분수여야 그래프를 그릴 수 있다. 현재 크롭을 쓰는 한 그림은 고정.'
    creative: '(1) 순서를 바꿔 g∘f 를 그리게 하기(★3 유지 · 분할 기준이 달라짐) (2) (f∘g)(x)=k 인 x 의 개수를 k 로 나타내게 하기(★4 · I-MI d3) (3) f=g 로 두고 f∘f 를 그리게 하면 구간이 네 개로 늘어 ★4.'
```

```yaml
- id: GN-CM2-231-538
  page: 231
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    y=f(x) (0≤x≤2), y=g(x) (-1≤x≤1) 의 그래프가 주어질 때 합성함수 y=(g∘f)(x) 의 그래프를 그리기.
  category: '그래프 → 구간별 식 → f(x) 값의 범위로 g 의 가지 선택 → 구간별 합성식'
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '꺾은선 그래프를 구간별 일차식으로 옮겨 합성한 뒤 다시 그래프로 되돌리는 전환'
    - step: 2
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: 'f(x) 가 g 의 정의역 -1≤x≤1 의 어느 쪽에 들어가는지로 구간을 나눠야 함(분기는 두 갈래로 좁음)'
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: '두 꺾은선 그래프의 합성함수 그래프 그리기'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    예제 e13 과 같은 골조를 순서만 바꿔(g∘f) 반복한다. 결과가 |x-1| 꼴의 V 자로 정리되는 것이 확인 포인트. 바깥 함수의 정의역이 f 의 정의역과 다르다는 점(T-범위)이 함정. 확인체크(짝 예제 발전 ★3) 출발 유지 → ★3.
  mechanism_primary: '그래프 → f, g 의 구간별 식 → f(x) 의 범위로 구간 분할 → (g∘f)(x) 식 → 꺾은선'
  tier: star_3
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '풀이 참조 ($(g\circ f)(x)=|x-1|$ $(0\le x\le 2)$의 그래프 — 세 점~$(0,\,1)$, $(1,\,0)$, $(2,\,1)$을 차례로 잇는 꺾은선)'
  answer_source: "답지(그래프)"
  figure: 'crop:fig-231-538.png'
  latex: latex-bank/gn-cm2/items/231-538.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 그래프의 꺾인 점·기울기와 g 의 정의역 폭을 바꿀 수 있다. 제약: f 의 치역이 g 의 정의역에 포함돼야 하고, 합성 결과가 절댓값 꼴로 깔끔히 정리되도록 기울기를 ±1 로 두면 채점이 쉽다.'
    creative: '(1) 결과를 절댓값 기호 하나로 나타내게 하는 서술형(★3 유지) (2) (g∘f)(x)=1/2 인 x 의 개수를 묻기(★3) (3) f 의 치역이 g 의 정의역을 벗어나게 만들어 정의되지 않는 구간을 찾게 하기(★4 · T-범위).'
```

### 연습문제 STEP 1

```yaml
- id: GN-CM2-232-539
  page: 232
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    구간함수 f(x)(x≥0 이면 -x^2, x<0 이면 x^2)와 g(x)=-x 에 대하여 (f∘f∘g∘g)(√2) 의 값.
  category: '오른쪽(안쪽) 함수부터 차례로 적용 → 각 단계에서 부호로 f 의 가지 선택'
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '구간함수의 반복 합성 함숫값'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    g 를 두 번 적용하면 제자리로 돌아오고, 남은 f 두 번은 매번 직전 값의 부호를 보고 가지를 고른다. 함정은 가지 선택(T-부호)과 합성 순서(T-표기) 둘. 네 번 합성이지만 각 단계가 한 줄이라 STEP 1 출발 ★2 유지.
  mechanism_primary: '안쪽부터 g, g, f, f 순서로 적용 → 각 단계 부호로 가지 선택'
  tier: star_2
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/232-539.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '대입값(√2)과 f 의 가지 식(±x^2), g 의 식(-x)을 바꿀 수 있다. 제약: 중간값의 부호가 적어도 한 번은 바뀌어야 가지 선택이 의미를 갖고, 무리수를 넣으면 제곱에서 유리수로 떨어지게 고른다.'
    creative: '(1) g∘g 가 항등임을 먼저 보이게 하는 서술형(★2 유지) (2) (f∘f)(x) 를 구간별 식으로 구하게 하기(★3 · I-MI) (3) (f∘f∘g∘g)(a)=4 인 a 를 모두 구하게 하기(★3 · I-BW).'
```

```yaml
- id: GN-CM2-232-540
  page: 232
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제"
  summary: |
    X={2,3} 을 정의역으로 하는 f(x)=ax-3a 와 f 의 치역을 정의역, X 를 공역으로 하는 g(x)=x^2+2x+b 에 대하여 g∘f: X → X 가 항등함수일 때 a+b 의 값.
  category: '항등함수 조건을 원소별 g(f(x))=x 로 바꿔 두 식 세우기 → a, b'
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '「g∘f 가 항등함수」라는 말을 정의역의 각 원소에서 g(f(2))=2, g(f(3))=3 이라는 두 등식으로 옮겨야 계산이 시작됨'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '합성함수가 항등함수일 조건으로 미정계수 구하기'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f(3)=0 이라 g(0)=b=3 이 먼저 정해지고, 남은 g(f(2))=2 가 a 에 대한 이차방정식이 되는데 중근이라 a 가 하나로 정해진다. 항등함수의 뜻을 원소별 등식으로 옮기는 단계가 없으면 손을 못 댄다. STEP 1 출발 ★2 에서 M_total 9·통찰 1·교육청 기출 → ★3.
  mechanism_primary: 'g∘f=항등 → g(f(2))=2, g(f(3))=3 → b 먼저, a 는 이차방정식의 중근 → a+b'
  tier: star_3
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/232-540.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '정의역 X 의 두 원소와 f 의 꼴(ax-3a 의 근 3), g 의 상수항을 바꿀 수 있다. 제약: f 의 한 원소가 0 으로 가야 b 가 즉시 결정되고, 남은 방정식이 중근(또는 조건에 맞는 근 하나)을 가져야 a 가 유일해진다.'
    creative: '(1) g∘f 대신 f∘g 를 항등함수로 두기(★3 유지) (2) 항등함수가 아니라 일대일대응 조건으로 바꾸면 경우가 늘어 ★4 (I-MI+I-VF) (3) X 를 세 원소로 늘려 조건을 세 개 만들고 모순이 생기는 경우를 찾게 하기(★4).'
```

```yaml
- id: GN-CM2-232-541
  page: 232
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    일차함수 f(x) 에 대하여 (f∘f)(x)=9x-4 일 때 함수 f(x) 를 모두 구하기.
  category: 'f(x)=ax+b 로 놓고 f∘f 전개 → 계수 비교 → a 두 값 각각에서 b'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: 'a^2=9 에서 a=3 과 a=-3 이 모두 살아남아 f 가 두 개가 되고, 각각에 대해 b 를 따로 구해야 함(한쪽만 쓰면 답이 절반)'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '(f∘f)(x) 가 주어질 때 일차함수 f 구하기'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f(x)=ax+b 로 놓으면 (f∘f)(x)=a^2x+ab+b 이므로 a^2=9, ab+b=-4 두 식이 나온다. 「모두 구하시오」가 a 의 부호 두 갈래를 모두 살리라는 신호(I-MI d1). 음수 갈래를 빠뜨리는 실수가 잦아 Mₜ 2. STEP 1 출발 ★2 에서 +1 → ★3.
  mechanism_primary: 'f=ax+b 놓기 → a^2x+ab+b=9x-4 계수 비교 → a=±3 각각에서 b'
  tier: star_3
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$f(x)=-3x+2$, $f(x)=3x-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/232-541.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '우변 9x-4 의 계수를 바꿀 수 있다. 제약: 일차항 계수는 완전제곱수여야 a 가 유리수로 두 개 나오고, 상수항은 a=3 과 a=-3 양쪽에서 b 가 유리수로 떨어지도록 고른다(a=-1 이면 b 가 무수히 많거나 없어 발문이 깨진다).'
    creative: '(1) f 가 증가함수라는 조건을 붙여 답을 하나로 줄이기(★2 · I-MI 제거) (2) (f∘f∘f)(x)=8x+7 로 바꾸면 a^3 이라 갈래가 하나로 줄고 계산은 늘어 ★3 유지 (3) f 를 이차함수로 두면 f∘f 가 사차식이 되어 계수 비교가 네 개로 늘어 ★4.'
```

```yaml
- id: GN-CM2-232-542
  page: 232
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    세 함수 f, g, h 에 대하여 (f∘g)(x)=x^2+4, h(x)=x-1 일 때 (f∘(g∘h))(x)=20 을 만족시키는 모든 실수 x 의 값의 곱.
  category: '결합법칙으로 f∘(g∘h)=(f∘g)∘h 로 묶기 → 주어진 f∘g 에 h 대입 → 이차방정식 근의 곱'
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: 'f 와 g 를 각각은 모르는 채로, 결합법칙을 써서 f∘(g∘h) 를 (f∘g)∘h 로 다시 묶으면 주어진 x^2+4 를 그대로 쓸 수 있음을 알아채는 것이 유일한 진입로'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '결합법칙으로 합성을 다시 묶어 미지의 f, g 우회하기'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f, g 가 따로 주어지지 않았으므로 결합법칙으로 (f∘g)∘h 로 묶는 것 말고는 길이 없다. 묶고 나면 (x-1)^2+4=20 인 이차방정식이고 근의 곱은 근과 계수의 관계로 바로 읽는다. 추상도(일반 함수 f, g)가 높아 Mₐ 3. STEP 1 출발 ★2 에서 통찰 d2 로 +1 → ★3.
  mechanism_primary: 'f∘(g∘h)=(f∘g)∘h → (x-1)^2+4=20 → 이차방정식 → 근과 계수로 곱'
  tier: star_3
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-15$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/232-542.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'f∘g 의 식(x^2+4), h 의 식(x-1), 목표값 20 을 바꿀 수 있다. 제약: 대입 후 이차방정식이 서로 다른 두 실근을 가져야 「모든 x 의 곱」이 의미 있고, 근의 곱이 정수로 떨어지게 상수항을 고른다.'
    creative: '(1) 근의 곱 대신 합을 묻기(★3 유지) (2) 목표값을 판별식 경계에 두어 실근이 하나뿐이게 만들기(★4 · I-VF) (3) h 를 안쪽이 아니라 바깥에 두어 (h∘f∘g)(x)=20 으로 바꾸기(★3 · 묶는 방향이 달라짐).'
```

```yaml
- id: GN-CM2-232-543
  page: 232
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    f(x)=-x, g(x)=2x-1 에 대하여 h∘g∘f=f 를 만족시키는 일차함수 h(x) 가 있을 때 h(k)=4 를 만족시키는 상수 k 의 값.
  category: '안쪽 g∘f 를 먼저 합성 → 그 식을 t 로 치환해 h 복원 → h(k)=4 로 역산'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: 'h((g∘f)(x))=f(x) 를 h 의 식으로 바꾸려면 안쪽 식을 t 로 놓고 x 를 t 로 되돌리는 변환이 필요함'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '합성 조건에서 바깥 미지함수 h 복원 후 역산'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    g∘f 를 먼저 합성해 일차식 하나로 만든 뒤 그것을 t 로 치환하면 h(t) 가 복원되고, 마지막에 h(k)=4 를 k 에 대해 풀면 된다. 229-533 과 같은 치환 골조에 역산 한 단계가 붙었을 뿐이라 통찰 1(d1)·M_total 7 로 STEP 1 출발 ★2 유지.
  mechanism_primary: 'g∘f 합성 → 치환으로 h(t) 복원 → h(k)=4 를 k 에 대해 풀기'
  tier: star_2
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '$7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/232-543.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'f, g 의 계수와 h(k)=4 의 값을 바꿀 수 있다. 제약: g∘f 의 일차계수가 0 이 아니어야 치환이 가능하고, h 의 계수가 유리수로 떨어지도록 f, g 를 고른다.'
    creative: '(1) h 를 구하는 것까지만 묻기(★2 유지) (2) h∘g∘f=f 가 아니라 g∘h∘f=f 로 위치를 바꿔 h 가 가운데 오게 하기(★3) (3) f 를 구간함수로 두어 h 도 구간함수가 되게 하기(★4 · I-MI).'
```

### 연습문제 STEP 2

```yaml
- id: GN-CM2-232-544
  page: 232
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    자연수 전체에서 정의된 f(n)(n 이 홀수면 n+1, 짝수면 n/2+1)에 대하여 (f∘f)(n)=5 를 만족시키는 모든 자연수 n 의 값의 합.
  category: 'f(m)=5 인 m 을 홀·짝으로 나눠 찾기 → 다시 f(n)=m 인 n 을 홀·짝으로 찾기 → 유효한 것만 합'
  M: {s: 3, k: 1, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '값 5 에서 출발해 f 를 두 겹 거꾸로 거슬러 올라가야 하고, 각 겹마다 정의가 홀·짝으로 갈려 역상이 여러 개 생김'
    - step: 2
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '홀수 가지로 얻은 후보가 실제로는 짝수여서 가정과 모순되는 식으로 후보 일부가 기각되며, 이 재검증을 빠뜨리면 합이 커진다'
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: '구간(홀·짝) 정의 함수의 합성값에서 역상 모두 구하기'
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    두 겹 역추적에서 매 단계 홀수 가정·짝수 가정을 모두 세운 뒤 얻은 값이 그 가정을 실제로 만족하는지 되돌려 확인해야 한다(가정 위배 후보 기각). 이 기각 절차가 빠지면 틀린 합에 도달하므로 I-VF 를 인정했다. STEP 2 출발 ★3 에서 통찰 2개로 +1 → ★4. [분류 이슈] 벤더 STEP 2 인데 라벨은 실력 UP 과 같은 ★4 — 역추적 겹 수는 2로 얕아 ★3 도 가능.
  mechanism_primary: '5 의 역상 → 8 (짝수 가지만 유효) → 8 의 역상 → 7, 14 → 합'
  tier: star_4
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$21$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/232-544.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '목표값 5 와 두 가지의 식(n+1, n/2+1)을 바꿀 수 있다. 제약: 역상이 자연수로 떨어져야 하고, 가지 가정과 모순되는 후보가 적어도 하나 나와야 I-VF 골조가 유지된다. 목표값을 키우면 역상 수가 늘어 합만 커지고 난도는 그대로.'
    creative: '(1) 겹을 하나 늘려 (f∘f∘f)(n)=5 로 바꾸기(★5 후보 · 분기 폭 급증) (2) 합 대신 그런 n 의 개수를 묻기(★4 유지) (3) 정의를 3의 배수 여부로 갈라 세 가지로 만들기(★4~5 · I-MI 확대).'
```

```yaml
- id: GN-CM2-233-545
  page: 233
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    X={1,2,3}, Y={3,4,5}, Z={5,6,7} 에 대하여 일대일대응 f: X → Y, g: Y → Z 가 f(1)=3, g(5)=6, (g∘f)(3)=5 를 만족시킬 때 (g∘f)(1) 의 값.
  category: '합성 조건의 후보를 세우고 이미 정해진 값과 충돌하는 것을 기각 → 일대일대응으로 나머지 확정'
  M: {s: 3, k: 1, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: 'g(f(3))=5 에서 f(3) 의 후보를 세운 뒤, g(5)=6 이라는 기존 조건과 충돌하는 후보를 기각해야 f(3) 이 하나로 정해짐'
    - step: 2
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '일대일대응 조건과 이미 확정된 두 대응을 합쳐 남은 칸을 소거법으로 채움'
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: '일대일대응 조건과 합성값으로 대응표 완성하기'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f(1)=3 이므로 f(3) 은 4 나 5 인데, f(3)=5 이면 g(5)=6≠5 로 조건과 충돌해 기각되고 f(3)=4, g(4)=5 가 확정된다. 그다음 g 의 남은 값이 소거법으로 정해져 (g∘f)(1)=g(3) 이 나온다. 기각 절차가 있어 통찰 2개지만 원소가 셋뿐이라 분기 폭이 좁다. STEP 2 출발 ★3 유지. [분류 이슈] 통찰 2개(+1 후보)인데 ★4 로 올리지 않음 — 후보 ★3/★4.
  mechanism_primary: 'f(3) 후보 2개 → g(5)=6 과 충돌하는 쪽 기각 → 일대일대응 소거 → g(3)'
  tier: star_3
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/233-545.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '세 집합의 원소와 주어지는 세 조건(f(1), g(5), 합성값)을 바꿀 수 있다. 제약: 조건을 넣었을 때 f, g 가 유일하게 결정돼야 하고, 후보 중 적어도 하나가 기존 조건과 충돌해 기각되도록 값을 배치해야 골조가 산다.'
    creative: '(1) 조건을 하나 빼고 가능한 (g∘f)(1) 값을 모두 구하게 하기(★4 · I-MI) (2) 조건을 만족시키는 (f,g) 쌍의 개수를 묻기(★4) (3) Y, Z 의 원소 수를 늘려 일대일대응이 아닌 함수로 바꾸기(★4 · 소거법 무효화).'
```

```yaml
- id: GN-CM2-233-546
  page: 233
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    f(x)=-ax+b, g(x)=3x+4 가 f∘g=g∘f 를 만족시킬 때 y=f(x) 의 그래프가 a 의 값에 관계없이 항상 지나는 점 (m,n) 에 대하여 m+n 의 값(a, b 는 상수).
  category: '계수 비교로 b 를 a 로 표현 → f 를 a 에 대한 항등식으로 정리 → a 의 계수와 나머지를 0 으로'
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: 'f∘g=g∘f 를 모든 x 에 대한 항등식으로 보고 상수항을 비교해 b 를 a 로 나타냄'
    - step: 2
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '「a 의 값에 관계없이 항상 지나는 점」을 이번엔 x, y 가 아니라 a 에 대한 항등식으로 다시 읽어 a 의 계수와 상수항을 각각 0 으로 두는 공통수학1 항등식·정점 도구를 끌어옴'
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: 'f∘g=g∘f 조건과 a 에 무관한 정점 찾기'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    먼저 교환 조건에서 b 를 a 로 정리하면 f(x) 가 a 한 문자로만 남고, 이것을 a 에 대한 항등식으로 보면 정점이 나온다. 변수를 x 에서 a 로 바꿔 보는 시선이 핵심이지만 정점 문제는 공통수학1 에서 반복 훈련된 정형이라 STEP 2 출발 ★3 유지.
  mechanism_primary: '계수 비교 → b=-2a-2 → f(x)=-a(x+2)-2 → x+2=0 에서 정점 (m,n) → m+n'
  tier: star_3
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/233-546.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'g 의 계수(3, 4)를 바꿀 수 있다. 제약: g 의 일차계수가 1 이면 교환 조건이 항등식이 되어 b 가 결정되지 않으므로 1 이 아닌 값으로 두고, 정점의 좌표가 정수로 떨어지게 상수항을 고른다.'
    creative: '(1) 정점 대신 a 의 값에 관계없이 만나지 않는 직선을 찾게 하기(★4) (2) f 를 이차함수로 바꿔 「a 에 무관한 점」을 묻기(★4 · 항등식 두 개) (3) b 를 묻고 정점 조건을 빼면 ★2 로 하강.'
```

```yaml
- id: GN-CM2-233-547
  page: 233
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    X={1,2,3,4,5} 에서 f(1)=5, f(x)=x-1 (x>1) 이고 f^1=f, f^(n+1)=f∘f^n 일 때 f^2024(3) 의 값.
  category: '반복 적용이 X 를 한 바퀴 도는 순환임을 보고 → 2024 를 주기로 나눈 나머지로 환원'
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-PD
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: 'f 가 1 을 5 로 보내고 나머지를 1씩 내리므로 5개 원소를 한 바퀴 도는 주기 5 의 순환임을 발견하고, 2024 를 5 로 나눈 나머지 자리로 환원'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '함수식으로 주어진 f^n 의 주기 찾기'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f 를 몇 번 적용해 보면 3 → 2 → 1 → 5 → 4 → 3 으로 되돌아와 주기가 5 임이 보인다. 2024 를 5 로 나눈 나머지로 환원하는데, 나머지가 0 인 경우의 처리(T-경계)가 대표적 실수 지점이라 Mₜ 2. STEP 2 출발 ★3 유지.
  mechanism_primary: '순환 주기 5 발견 → 2024 mod 5 → 그 횟수만큼만 적용'
  tier: star_3
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/233-547.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '집합의 크기(5), 출발 원소(3), 지수(2024)를 바꿀 수 있다. 제약: 정의가 X 전체를 한 바퀴 도는 순환이 되도록 경계 원소의 상을 반대쪽 끝으로 보내야 하고, 지수를 주기의 배수로 두면 나머지 0 처리를 묻는 문제가 된다.'
    creative: '(1) f^n(3)=3 인 100 이하 n 의 개수를 묻기(★4) (2) 순환을 두 개로 쪼개(예: 1↔2, 3→4→5→3) 출발점에 따라 주기가 다르게 만들기(★4 · I-MI) (3) f^2024(x)=x 를 만족시키는 x 를 모두 구하게 하기(★4).'
```

### 연습문제 실력 UP

```yaml
- id: GN-CM2-233-548
  page: 233
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    f(x)=x-4 와 구간함수 g(x)(x<0 이면 -x+7, x≥0 이면 2x^2-4ax+7)에 대하여 합성함수 y=(f∘g)(x) 의 치역이 {y | y≥1} 일 때 상수 a 의 값.
  category: '합성의 치역 조건을 g 의 치역 조건으로 옮기기 → 이차 가지의 최솟값 조건 → 꼭짓점 위치 검증'
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '(f∘g)(x)=g(x)-4 이므로 합성함수의 치역 조건을 g 의 치역이 5 이상이라는 조건으로 옮겨야 손댈 수 있음'
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '이차 가지는 정의역이 x≥0 로 잘려 있어 꼭짓점이 정의역 안에 있는 경우와 밖에 있는 경우로 최솟값이 갈리고, 두 경우를 모두 따져야 a 가 정해짐'
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: '구간함수를 포함한 합성함수의 치역 조건으로 미정계수 구하기'
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    f 가 평행이동이라 치역 조건이 g 로 그대로 내려오고, x<0 가지는 7 보다 큰 값만 주므로 최솟값 5 는 이차 가지에서 나와야 한다. 꼭짓점이 x≥0 안에 있어야 한다는 조건이 부호 검증으로 남아 후보 하나가 걸러진다. 실력 UP 출발 ★4, 통찰 2개(d2) → ★4 유지. [분류 이슈] 꼭짓점 위치 검증을 I-VF 로 따로 세면 통찰 3개가 되어 ★5 후보 — 정형 이차 최솟값이라 ★4 로 둠.
  mechanism_primary: '(f∘g)(x)=g(x)-4 → g 의 치역 ≥5 → 이차 가지 최솟값 7-2a^2=5 → 꼭짓점이 x≥0 인지 검증 → a'
  tier: star_4
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/233-548.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'f 의 평행이동량(-4), 치역의 하한(1), 이차 가지의 계수(2, 7)와 경계(x≥0)를 바꿀 수 있다. 제약: x<0 가지의 값이 이차 가지의 최솟값보다 항상 커야 최솟값이 한쪽에서만 나오고, 꼭짓점 조건에서 a 가 유일하게 살아남도록 부호를 배치한다.'
    creative: '(1) 치역이 아니라 최솟값을 주고 a 를 모두 구하게 하기(★4 유지 · I-VF 강화) (2) f 를 f(x)=-x+4 로 바꾸면 부등호가 뒤집혀 최댓값 문제가 됨(★4 · T-부호) (3) a 의 값에 따른 치역을 경우로 나눠 서술하게 하기(★5 후보 · I-MI d3).'
```

```yaml
- id: GN-CM2-233-549
  page: 233
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    0≤x≤4 에서 정의된 y=f(x) 의 그래프가 주어질 때 f^1(1)+f^2(1)+…+f^100(1) 의 값(f^1=f, f^(n+1)=f∘f^n).
  category: '그래프에서 궤도 추적 → 값이 되풀이되는 주기 발견 → 주기 묶음의 합 × 묶음 수 + 나머지'
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '꺾은선 그래프에서 f(1) 값을 읽고 그 값을 다시 x 축으로 되먹이는 그래프↔수치 왕복으로 궤도를 만들어야 함'
    - step: 2
      type: I-PD
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '궤도가 세 값을 되풀이하는 주기임을 발견하고, 100 을 주기로 나눈 몫과 나머지로 합을 묶는 것이 유일한 계산 경로'
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: '그래프로 주어진 f 의 반복합성 궤도와 주기 합'
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    그래프는 (0,4)에서 (2,0)으로 내려갔다 (4,2)로 올라가는 V 자라 1 에서 출발한 궤도가 세 값을 되풀이한다. 항이 100개이므로 주기 묶음의 합에 나머지 항을 더해야 하고, 나머지를 앞에서 셀지 뒤에서 셀지에서 실수가 난다(T-경계). 실력 UP 출발 ★4, 통찰 2개 → ★4 유지.
  mechanism_primary: '그래프에서 궤도 추적 → 주기 3 발견 → (주기 합)×(묶음 수) + 남은 항'
  tier: star_4
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$200$'
  answer_source: "답지"
  figure: 'crop:fig-233-549.png'
  latex: latex-bank/gn-cm2/items/233-549.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '출발값(1)과 항의 개수(100)를 바꿀 수 있다. 제약: 그래프는 크롭 고정이므로 궤도와 주기는 바꿀 수 없고, 항 수를 주기의 배수로 두면 나머지 처리가 사라져 쉬워진다. 출발값을 바꾸면 궤도가 다른 주기로 들어갈 수 있으니 먼저 확인.'
    creative: '(1) 합이 아니라 f^n(1)=0 인 100 이하 n 의 개수를 묻기(★4 유지) (2) 출발값을 미지수 a 로 두고 합이 최대가 되는 a 를 묻기(★5 후보 · I-MI+I-VF) (3) 그래프를 꼭짓점 위치가 다른 V 자로 바꿔 주기가 2 나 4 가 되게 하기(★4).'
```

```yaml
- id: GN-CM2-233-550
  page: 233
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    0≤x≤1 에서 정의된 y=f(x) 의 그래프(봉우리 모양 꺾은선)가 주어질 때 y=(f∘f)(x) 의 그래프를 그리기.
  category: '그래프 → 구간별 식 → f(x) 가 어느 구간에 들어가는지로 정의역 재분할 → 네 조각 꺾은선'
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '주어진 것도 답도 그래프지만 합성은 식으로만 되므로 구간별 일차식으로 옮겼다가 다시 꺾은선으로 되돌려야 함'
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '바깥 f 의 가지가 안쪽 f(x) 의 값이 봉우리의 왼쪽인지 오른쪽인지로 갈려, 원래 두 구간이 각각 둘로 쪼개져 네 구간이 됨'
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: '같은 함수의 반복 합성 그래프 그리기(구간 분할 증가)'
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    f 가 두 조각이라 f∘f 는 네 조각이 되고, 분할점은 f(x) 가 봉우리 꼭짓점의 x 좌표와 같아지는 지점에서 새로 생긴다. 분할 기준이 x 가 아니라 f(x) 라는 점, 그리고 조각이 배로 늘어난다는 점이 이 문제의 벽이다. 실력 UP 출발 ★4, 통찰 2개 → ★4 유지(저노출 유형 I-RT 있음).
  mechanism_primary: 'f 를 구간별 식으로 → f(x) 값의 범위로 정의역 재분할 → 네 구간의 (f∘f)(x) → 꺾은선'
  tier: star_4
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '풀이 참조 (다섯 점~$(0,\,0)$, $\left(\dfrac{1}{4},\,1\right)$, $\left(\dfrac{1}{2},\,0\right)$, $\left(\dfrac{3}{4},\,1\right)$, $(1,\,0)$을 차례로 잇는 꺾은선)'
  answer_source: "답지(그래프)"
  figure: 'crop:fig-233-550.png'
  latex: latex-bank/gn-cm2/items/233-550.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '봉우리의 위치와 높이를 바꿀 수 있다. 제약: f 의 치역이 정의역 0≤x≤1 과 같아야 f∘f 가 정의되고, 꼭짓점이 1/2 이 아니면 분할점이 분수로 지저분해진다. 현재 크롭을 쓰는 한 그림은 고정.'
    creative: '(1) f∘f∘f 를 그리게 해 조각이 여덟 개로 늘게 하기(★5 후보 · I-PD 추가) (2) (f∘f)(x)=1/2 인 x 의 개수를 묻기(★4 유지) (3) 봉우리를 계곡으로 뒤집어(0→1→0 대신 1→0→1) 같은 골조에서 부호 감각을 묻기(★4).'
```

## 표본 판정 요약 (32문)

- ★ 분포: ★1 2 · ★2 15 · ★3 11 · ★4 4 · ★5 0
- 통찰형 18 · 절차형 14 · premium 0
- 통찰 유형 분포(연인원 26): I-MI 7 · I-RT 5 · I-EQV 7 · I-PD 4 · I-CON 2 · I-VF 2 · I-BW 1 · I-XU 1 · I-SC 0 · I-SYM 0
- M_total 분포: 4~6 이 9문 · 7 이 9문 · 8 이 7문 · 9 가 7문 (최대 9 · ★5 를 받칠 만한 M_total 10+ 는 없음)
- type_hint 상위 5: 「f^n 꼴 반복합성의 규칙·주기」 6문(230-e12 · 535 · 536 · 537 · 233-547 · 549) · 「f∘g=g∘f 미정계수」 5문(228-e10 · 530 · 531 · 532 · 233-546) · 「미지함수 h 복원(치환)」 4문(229-e11 · 533 · 534 · 232-543) · 「합성함수의 그래프」 3문(231-e13 · 538 · 233-550) · 「대응 그림에서 합성함숫값」 3문(226-524 · 227-e9 · 527)
- 대상층: 하위권 2 · 중하위권 13 · 중위권 11 · 중상위권 6 · 상위권 0
- 그림: 9문(`crop:fig-226-524.png` · `fig-227-e9.png` · `fig-227-527.png` · `fig-228-532.png` · `fig-230-537.png` · `fig-231-e13.png` · `fig-231-538.png` · `fig-233-549.png` · `fig-233-550.png`)
- 확인체크 12문의 출발점은 짝 예제의 층(필수 ★2 · 발전 ★3)으로 잡았다. 「확인체크=개념 확인 ★1」을 문자 그대로 적용하면 같은 골조의 예제와 2단이 벌어져 라벨이 실제 체감과 어긋나기 때문이며, 이 규약은 frontmatter 의 judgment_protocol 에도 적어 두었다.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CM2-232-544 | STEP 2(출발 ★3)인데 통찰 2개(I-BW+I-VF)로 +1 해 실력 UP 과 같은 ★4 가 됨. 역추적 겹이 2로 얕아 ★3 도 가능 | ★3 / ★4 |
| GN-CM2-233-545 | 통찰 2개(I-VF+I-CON)라 +1 후보지만 원소 3개짜리 소거 퍼즐이라 분기 폭이 좁아 ★3 유지 — 544 와 판정 방향이 반대 | ★3 / ★4 |
| GN-CM2-233-548 | 꼭짓점 위치 검증을 I-VF 로 따로 세면 통찰 3개 + VF 가 되어 ★5 요건을 형식상 충족. 정형 이차 최솟값이라 ★4 로 둠 | ★4 / ★5 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 단원은 다섯 골조로 깨끗하게 갈린다 — ① 합성함숫값(식·대응 그림·구간함수) ② f∘g=g∘f 미정계수 ③ 미지함수 h 복원(치환) ④ f^n 반복합성(규칙형/주기형) ⑤ 합성함수의 그래프. 카탈로그 유형은 이 다섯을 기본 축으로 세우면 32문이 빠짐없이 들어간다.
- ④ 는 **규칙형(f^n 의 일반항이 식으로 나오는 것 · e12 · 535 · 536)과 주기형(궤도가 되돌아오는 것 · 537 · 547 · 549)을 반드시 따로 세워야 한다.** 겉보기 발문은 같지만 주기형은 나머지 처리(T-경계)라는 별도 함정과 I-PD d2 를 갖고 base ★ 가 한 단 높다.
- ⑤ 의 그래프 유형은 「서로 다른 두 함수의 합성(e13 · 538)」과 「같은 함수의 반복 합성(550)」을 나누는 편이 낫다. 후자는 구간 조각 수가 배로 늘어 base ★ 가 한 단 높다.
- 통합해도 될 것: 「대응 그림에서 합성함숫값(524 · e9 · 527)」과 「식으로 주어진 합성함숫값(525 · 528 · 539)」은 표현만 다르고 골조가 같으므로 한 유형의 두 표현 변이로 묶어도 된다. 「일대일대응 대응표 퍼즐(529 · 545)」은 ① 과 분리해 독립 유형으로 두는 편이 낫다(I-CON·I-VF 가 붙는다).
- 이 범위에는 I-SC·I-SYM 이 한 번도 나오지 않았고 M_total 최대가 9 라, v3.8 기준으로 ★5 자격을 갖춘 문항이 없다. 합성함수 단원에서 ★5 슬롯을 만들려면 544·549·550 의 creative 변형(겹 늘리기 · 출발값 매개변수화 · f^3 그래프)처럼 분기와 검증을 한 겹 더 얹어야 한다.
