---
name: mechanism-데이터-GN-M31-16-p2
description: 개념원리 중학 3-1 16 이차방정식의 활용(2/2 · 중단원 마무리하기 STEP 1~3 · 서술형 대비) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 중학 3-1 · 전사본 latex-bank/gn-m31
  section: 16 이차방정식의 활용
  unit_code: "16"
  part: "2/2"
  extract_range: "154~159쪽 · 154-01~159-u6"
  total_problems: 32
  unit_total: 58
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-m31/items.json (원본 전사) · latex-bank/gn-m31/items/<id>.tex
  image_source: latex-bank/gn-m31/figures/ (crops.json)
---

# 개념원리 중학 3-1 · 16 이차방정식의 활용 (2/2) 정독 데이터 (v1.0)

이 파일은 16단원의 뒷부분, 즉 **중단원 마무리하기 STEP 1 기본 문제(12문) · STEP 2 발전 문제(9문) · STEP 3 실력 UP(3문) · 서술형 대비 문제(8문)** 32문항을 다룬다(154~159쪽). 앞부분(개념원리 확인하기 · 계산력 강화하기 · 핵심문제 익히기 · 이런 문제가 시험에 나온다)은 16-p1 에 있다. 단원 성격상 이 범위는 「근의 공식·판별식으로 푸는 계산 문항」과 「문장·도형을 이차방정식으로 옮기는 활용 문항」 두 갈래가 섞여 있다.

개념원리 중학은 문항별 난이도 표시(하·중·상)가 없고 **구역(section)이 난이도 층**이다. 그래서 ★ 출발점은 구역에서 잡는다 — STEP 1 → ★2 · STEP 2 → ★3 · STEP 3 실력 UP → ★4 · 서술형 대비 → ★3. 태그는 「꼭나와」(빈출 표시 · ★ 가산 없음) 하나뿐이다. 출발점에서 M_total 과 통찰 라벨로 ±1 조정했다.

이 파일의 주 용도는 **숫자 변형·창의 변형의 원본**이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(통찰 유형·depth·근거) · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 설정 변형과 ★ 변동 지점)를 채웠다. 이 단원의 변형에서 가장 자주 깨지는 제약은 **판별식이 제곱수인가(근이 정수로 떨어지는가)** 와 **활용 문항에서 두 근 중 하나가 조건(자연수·양수·대소)으로 기각되는가** 둘이다.

## 문항 데이터

### 중단원 마무리하기 STEP 1 기본 문제

```yaml
- id: GN-M31-154-01
  page: 154
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP1"
  summary: |
    이차방정식 2x^2+5x-5=0 의 해를 고르기. 5지선다.
  category: "근의 공식에 a, b, c 대입 → 근"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "근의 공식으로 이차방정식 풀기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    인수분해가 되지 않으므로 근의 공식 한 번. 분모 2a=4 와 근호 안 25+40=65 만 맞추면 되고 선택지는 분모·부호로 갈린다.
    식 변형 단계 1 · 통찰 0 · M_total 4 → STEP1 출발점 ★2 에서 -1 하여 ★1.
  tier: star_1
  mechanism_primary: "a=2, b=5, c=-5 → 근의 공식 → x=(-5±√65)/4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/154-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a, b, c 를 바꾼다. 제약: b^2-4ac 가 제곱수가 아니어야 근의 공식 문항이 되고(제곱수면 인수분해 문항으로 성격이 바뀜) 음수가 되면 해가 없어 선택지가 성립하지 않는다. 짝수 공식(b 가 짝수)으로 바꾸면 분모가 a 가 되어 오답 선택지 설계가 달라진다."
    creative: "(1) 근을 주고 a, b, c 를 되묻기(154-02 골조 ★2) (2) 계수를 분수·소수로 주어 정수화 단계를 앞에 붙이기(★2) (3) 두 근의 합·곱을 묻기(154-03 골조 ★2)."
```

```yaml
- id: GN-M31-154-02
  page: 154
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "중단원 마무리 STEP1"
  summary: |
    3x^2-8x+m=0 의 근이 x=(4±√10)/3 일 때 상수 m 의 값. 5지선다.
  category: "근의 공식 결과와 주어진 근의 꼴 비교 → 근호 안 대응"
  M: {s: 1, k: 2, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "근의 꼴이 주어졌을 때 미정계수 구하기(근의 공식 역이용)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    근의 공식으로 x=(8±√(64-12m))/6 을 얻은 뒤 약분해 (4±√(16-3m))/3 로 맞추고 근호 안을 10 과 비교한다.
    약분 전 꼴로 비교하면 근호 안이 40 이 되어 틀리는 것이 이 문항의 함정. 통찰 없는 표준 역이용 · M_total 6 → STEP1 ★2 유지.
  tier: star_2
  mechanism_primary: "근의 공식 → 분모·분자 약분해 주어진 꼴과 맞춤 → 16-3m=10 → m"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/154-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x^2 계수와 x 계수를 바꾼다. 제약: 약분이 되도록 b 가 2a 의 약수 관계에 있어야 주어진 근의 분모가 깔끔해지고, 근호 안 값이 양수이면서 제곱수가 아니어야 한다."
    creative: "(1) m 대신 x 계수를 미지수로 두기(비교 자리가 근호 밖으로 옮겨져 ★2 유지) (2) 근을 (b±√q)/a 꼴로 주고 p+q 를 묻기(159-u3 골조 ★3) (3) 약분 전후 두 꼴을 모두 선택지에 넣어 오답을 유도하면 함정 1개 추가 ★2~3."
```

```yaml
- id: GN-M31-154-03
  page: 154
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP1"
  summary: |
    0.1x^2=0.2(x+3) 의 두 근의 곱 구하기.
  category: "소수 계수 정수화 → 근의 공식 → 두 근의 곱"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "계수가 소수인 이차방정식 풀기와 두 근의 곱"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    양변에 10 을 곱해 x^2=2x+6 으로 정리한 뒤 근의 공식으로 두 근을 구하고 곱한다.
    중3 과정에는 근과 계수의 관계가 없으므로 두 근을 실제로 구해 (1+√7)(1-√7) 을 계산하는 것이 표준 경로. 통찰 없음 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "양변 ×10 → x^2-2x-6=0 → 근의 공식 → 두 근의 곱"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/154-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "소수 계수와 괄호 안 상수를 바꾼다. 제약: 정수화 후 판별식이 양수여야 하고, 두 근의 곱을 묻는 이상 곱이 정수로 떨어지도록 근호 항이 상쇄되는 꼴(합·곱 모두 유리수)이어야 한다."
    creative: "(1) 두 근의 합·차를 묻기(★2) (2) 소수 대신 분수 계수로 바꾸기(154-04 골조 ★2) (3) 두 근 사이의 정수 개수를 묻기(156-13 골조 ★3 — 무리수 근 어림이 추가되어 통찰 1개 붙음)."
```

```yaml
- id: GN-M31-154-04
  page: 154
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP1"
  summary: |
    분수·소수가 섞인 이차방정식 (x^2+7)/8 = 0.5x + 3/2 를 풀기.
  category: "양변 ×8 로 정수화 → 표준형 → 인수분해"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "계수가 분수·소수인 이차방정식 풀기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분모 8 과 소수 0.5 를 한 번에 없애려면 양변에 8 을 곱해야 한다는 판단이 전부이고, 이후 x^2-4x-5=0 은 인수분해로 끝난다.
    소수만 있거나 분수만 있을 때보다 곱할 수를 정하는 단계가 하나 더 있을 뿐 통찰은 없음 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "양변 ×8 → x^2+7=4x+12 → x^2-4x-5=0 → (x+1)(x-5)=0"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$x=-1$ 또는 $x=5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/154-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모와 소수 계수, 상수항을 바꾼다. 제약: 분모들의 최소공배수와 소수의 자릿수를 함께 없앨 수 있는 수가 존재해야 하고(10 의 거듭제곱과 분모의 lcm), 정수화 후 인수분해가 되도록 판별식을 제곱수로 잡는다."
    creative: "(1) 인수분해가 안 되게 상수항을 바꿔 근의 공식 문항으로(★2) (2) 두 근 중 큰 것을 묻기(★2) (3) 근이 (p±√q)/r 꼴이 되게 해 p+q 를 묻기(159-u3 골조 ★3)."
```

```yaml
- id: GN-M31-154-05
  page: 154
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP1"
  summary: |
    다섯 개의 이차방정식 중 근이 없는 것 모두 고르기(정답 2개).
  category: "각 식의 b^2-4ac 부호 판정 → 음수인 것 고르기"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차방정식의 근의 개수 판별(판별식의 부호)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    다섯 번 같은 계산을 반복하는 구조. ④ 4x^2+4x+1 은 판별식 0(중근)이라 「근이 없다」에 들어가지 않는 것이 유일한 함정이다.
    도구는 판별식 하나뿐이고 분기가 없어 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "각 선택지의 b^2-4ac 계산 → 부호로 근의 개수 분류 → 음수인 두 개"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②, ⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/154-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "다섯 선택지의 계수를 바꾼다. 제약: 판별식이 음수인 것이 정확히 두 개여야 하고, 중근(판별식 0)을 하나 섞어 두어야 이 문항의 함정이 유지된다."
    creative: "(1) 「중근을 갖는 것」이나 「서로 다른 두 근을 갖는 것」으로 물음을 바꾸기(★2) (2) 계수에 문자를 넣어 근이 없을 k 의 범위를 묻기(155-07 골조 ★2) (3) 근의 개수가 큰 것부터 나열하게 하면 판정 뒤 정렬이 붙어 ★2 유지."
```

```yaml
- id: GN-M31-154-06
  page: 154
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "중단원 마무리 STEP1"
  summary: |
    9x^2-6x+k-2=0 이 중근 x=a 를 가질 때 ak 의 값. 5지선다.
  category: "판별식 0 → k → 중근 x=-b/2a → 곱"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "중근을 가질 조건과 그때의 중근의 값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    중근 조건 36-36(k-2)=0 으로 k=3 을 얻고, 완전제곱식 (3x-1)^2=0 에서 중근 a=1/3 을 읽는다.
    k 만 구하고 a 를 잊는 것이 흔한 실수지만 두 단계 모두 정형이라 통찰 0 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "b^2-4ac=0 → k=3 → (3x-1)^2=0 → a=1/3 → ak"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/154-06.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x^2 계수와 x 계수를 완전제곱식이 되는 짝으로 바꾼다. 제약: x 계수가 2√(x^2계수)×(상수) 꼴이라야 중근이 유리수로 떨어지고, 미지수 k 는 상수항에 두어야 판별식이 k 의 일차식이 된다."
    creative: "(1) 미지수를 x 계수 자리에 두면 k 가 두 값으로 갈려 검증 단계가 붙음(★3) (2) a+k 나 a/k 를 묻기(★2 유지) (3) 「중근을 갖도록 하는 k 의 값의 합」으로 바꾸면 분기 후 합산이 되어 ★3."
```

```yaml
- id: GN-M31-155-07
  page: 155
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP1"
  summary: |
    x^2+(3-2k)x+k^2+1=0 이 근을 가질 때 상수 k 의 값이 될 수 없는 것 고르기. 5지선다.
  category: "판별식 ≥ 0 → k 의 범위 → 선택지 대입 판정"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "근을 가질 조건(판별식 ≥ 0)에서 상수의 값의 범위"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (3-2k)^2-4(k^2+1) 을 전개하면 k^2 이 상쇄되어 5-12k ≥ 0, 즉 k ≤ 5/12 라는 일차 부등식만 남는다.
    함정은 「근을 가진다」가 중근을 포함해 등호가 붙는다는 것과 부정형 발문 두 가지(Mₜ=2). 통찰 없는 표준 판별식 문항이라 ★2 유지.
  tier: star_2
  mechanism_primary: "판별식 ≥ 0 → k^2 상쇄 → k ≤ 5/12 → 선택지 중 벗어난 값"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/155-07.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x 계수의 k 항과 상수항의 k^2 항을 바꾼다. 제약: 판별식에서 k^2 항이 상쇄되어 일차 부등식이 되어야 중3 범위에 머문다(상쇄되지 않으면 이차부등식이 되어 교육과정 밖). 경계값 5/12 는 선택지 중 하나와 가깝게 두어야 변별이 생긴다."
    creative: "(1) 「서로 다른 두 근」으로 바꿔 등호를 빼기(경계 함정 강화 ★2) (2) 「근을 갖지 않을」 로 뒤집기(159-u4 골조 ★3) (3) k 의 최댓값을 묻는 서술형으로 바꾸면 범위 서술이 필요해 ★3."
```

```yaml
- id: GN-M31-155-08
  page: 155
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "중단원 마무리 STEP1"
  summary: |
    2x^2+px+q=0 의 두 근이 3/2, 2 일 때 p, q 를 두 근으로 하고 x^2 의 계수가 1 인 이차방정식 고르기. 5지선다.
  category: "두 근 → 계수(p, q) → 다시 그 두 수를 근으로 하는 방정식"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 근이 주어진 이차방정식 만들기 a(x-α)(x-β)=0"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    2(x-3/2)(x-2)=2x^2-7x+6 에서 p=-7, q=6 을 읽고, 다시 (x+7)(x-6)=x^2+x-42 를 만든다.
    같은 공식을 방향만 바꿔 두 번 쓰는 왕복 구조이고 부호(p=-7)를 흘리는 것이 함정. 통찰 0 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "a(x-α)(x-β) 전개 → p, q → 다시 (x-p)(x-q)=0"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/155-08.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 근과 x^2 계수를 바꾼다. 제약: x^2 계수가 두 근의 분모를 없애 p, q 가 정수로 떨어져야 하고, 두 번째 방정식의 근 p, q 도 선택지에서 부호로 갈릴 만큼 떨어져 있어야 한다."
    creative: "(1) p+q, pq 만 묻기(★2 한 단계 축소) (2) 한 근만 주고 나머지 근을 미지수로 두기(159-u5 골조 ★2) (3) x^2 계수를 1 이 아닌 수로 지정해 세 번째 단계에 곱셈을 추가(159-u5 골조 ★2~3)."
```

```yaml
- id: GN-M31-155-09
  page: 155
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP1"
  summary: |
    n 명 중 2 명을 뽑는 경우의 수가 n(n-1)/2 일 때, 그 값이 190 이 되는 학생 수 구하기.
  category: "주어진 공식에 대입 → 이차방정식 → 자연수 근 선택"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차방정식의 활용 — 공식이 주어진 수 문제"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    공식이 발문에 그대로 주어져 모델링 부담이 없다. n(n-1)/2=190 → n^2-n-380=0 → (n-20)(n+19)=0.
    음수 근을 사람 수 조건으로 버리는 것은 활용 단원의 표준 마무리라 통찰로 세지 않음 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "n(n-1)/2=190 → n^2-n-380=0 → 인수분해 → 자연수 근 n=20"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$20$명'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/155-09.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "경우의 수 값 190 을 바꾼다. 제약: 2×값이 연속한 두 자연수의 곱(n(n-1))으로 분해돼야 인수분해가 깔끔하다 — 21, 45, 66, 105, 210 등이 안전하고 임의의 수를 넣으면 무리수 근이 나온다."
    creative: "(1) 악수·경기 수 상황으로 배경만 바꾸기(★2 유지) (2) 공식을 주지 않고 상황에서 세우게 하면 모델링 통찰이 붙어 ★3 (3) 「경우의 수가 190 이하인 최대 인원」으로 바꾸면 경계 판정이 추가되어 ★3."
```

```yaml
- id: GN-M31-155-10
  page: 155
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP1"
  summary: |
    어떤 자연수를 제곱할 것을 4 배 했더니 제곱한 것보다 32 만큼 작았을 때 그 자연수. 5지선다.
  category: "문장 → 4x = x^2-32 → 인수분해 → 자연수 근"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차방정식의 활용 — 수에 대한 문제"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    「4배 한 것이 제곱한 것보다 32 작다」를 4x=x^2-32 로 옮기는 것이 전부이고, 뒤집어 쓰면 부호가 반대가 되는 것이 함정.
    x^2-4x-32=0 → (x-8)(x+4)=0 에서 음수 근은 자연수 조건으로 버린다. 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "4x=x^2-32 → x^2-4x-32=0 → (x-8)(x+4)=0 → 자연수 x=8"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/155-10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "배수 4 와 차이 32 를 바꾼다. 제약: x^2-(배수)x-(차이)=0 의 판별식이 제곱수여야 하고, 양의 근 하나·음의 근 하나가 되도록 차이를 양수로 둔다(차이가 음수면 두 근이 모두 양수가 되어 기각 단계가 필요)."
    creative: "(1) 「32 만큼 컸다」로 뒤집어 두 근이 모두 자연수가 되게 하면 검증 단계가 생겨 ★3 (2) 세 배 한 것과 제곱의 관계로 바꾸기(★2 유지) (3) 연속하는 두 수로 확장(159-u6 골조 ★3)."
```

```yaml
- id: GN-M31-155-11
  page: 155
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP1"
  summary: |
    나이 차가 3 살이고 나이의 곱이 180 인 두 사람에서 오빠의 나이. 5지선다.
  category: "미지수 설정(오빠 x, 동생 x-3) → 곱 조건 → 인수분해"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차방정식의 활용 — 나이·두 수의 곱"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x(x-3)=180 → x^2-3x-180=0 → (x-15)(x+12)=0. 미지수를 오빠로 잡느냐 동생으로 잡느냐에 따라 답이 15 인지 12 인지 갈리는 것이 유일한 함정.
    표준 곱 조건 활용이라 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "오빠 x → x(x-3)=180 → x^2-3x-180=0 → 양의 근 15"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/155-11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "나이 차와 곱을 바꾼다. 제약: 곱이 차만큼 떨어진 두 자연수의 곱이어야 한다(차 3·곱 180 → 12×15). 차를 짝수로 두면 두 근의 홀짝이 같아지고, 곱을 임의로 두면 무리수 근이 된다."
    creative: "(1) 나이의 합을 주고 곱을 묻기(연립 없이 풀리도록 ★2) (2) 「몇 년 후」 조건을 붙이면 미지수가 두 번 등장해 ★3 (3) 두 수의 차와 제곱의 합으로 바꾸기(157-19 골조 ★3)."
```

```yaml
- id: GN-M31-155-12
  page: 155
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "중단원 마무리 STEP1"
  summary: |
    반지름 9 cm 인 원 모양 반죽의 반지름을 늘여 넓이가 63π cm^2 만큼 늘었을 때 새 반지름 구하기.
  category: "넓이의 증가량 → πR^2-81π=63π → 양의 근"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차방정식의 활용 — 원의 넓이 변화"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    「늘어난 넓이」가 새 원과 원래 원의 넓이의 차임을 잡으면 πR^2=144π 로 바로 끝난다.
    늘어난 길이를 미지수로 두면 π(9+x)^2-81π=63π 로 전개가 한 단계 늘지만 결과는 같다. 통찰 0 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "πR^2-π·9^2=63π → R^2=144 → R=12(양수)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$12\,\mathrm{cm}$'
  answer_source: "답지"
  figure: "crop:fig-155-12.png"
  latex: latex-bank/gn-m31/items/155-12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "처음 반지름과 넓이 증가량을 바꾼다. 제약: (처음 반지름)^2+(증가량/π) 가 제곱수여야 새 반지름이 자연수로 떨어진다(9^2+63=144). 그림의 두 원 라벨은 고정."
    creative: "(1) 늘어난 길이를 묻기(★2 유지) (2) 반지름을 줄여 넓이가 줄어든 상황으로 바꾸면 두 근 중 0<R<9 검증이 붙어 ★3 (3) 원 대신 반원·부채꼴로 바꾸면 넓이 공식이 한 겹 늘어 ★3 (158-e2·158-u2 골조)."
```

### 중단원 마무리하기 STEP 2 발전 문제

```yaml
- id: GN-M31-156-13
  page: 156
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP2"
  summary: |
    (1/4)x^2-2x+5/3 = -7/12 의 두 근 사이에 있는 정수의 개수. 5지선다.
  category: "분수 계수 정리 → 무리수 근 → 근의 대소 어림 → 정수 세기"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 3
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "근 4±√7 을 수직선 위 위치로 옮겨 2<√7<3 으로 어림하고 사이의 정수를 세는 표현 전환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "이차방정식의 무리수 근 사이에 있는 정수의 개수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    양변에 12 를 곱해 x^2-8x+9=0 을 얻고 근 4±√7 을 구한 뒤, 답을 수치로 끝내지 않고 수직선 위 구간으로 옮겨야 한다.
    2<√7<3 이므로 구간은 약 1.35~6.65 이고 사이의 정수는 2,3,4,5,6 다섯 개. 근 자체를 정수 개수로 옮기는 전환 1개(RT d2)·경계 포함 여부 함정 → STEP2 ★3 유지.
  tier: star_3
  mechanism_primary: "양변 ×12 → x^2-8x+9=0 → x=4±√7 → √7 어림 → 사이의 정수 세기"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/156-13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정리 후 x^2-2mx+n=0 의 m, n 을 바꾼다. 제약: 판별식이 제곱수가 아니어야 하고(제곱수면 정수 근이 되어 경계 함정이 사라짐) 근호 안이 어림하기 쉬운 수(7, 5, 11)여야 한다. 분수 계수는 12 처럼 한 번에 없앨 수 있는 분모 조합으로."
    creative: "(1) 「두 근 사이의 자연수의 개수」로 바꿔 0 과 음수 경계를 추가(★3) (2) 근을 포함하는 최소 정수 구간 [a, b] 를 묻기(★3) (3) 두 근 중 큰 근보다 작은 자연수의 개수로 바꾸면 한쪽 경계만 남아 ★2."
```

```yaml
- id: GN-M31-156-14
  page: 156
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP2"
  summary: |
    x(x-3)/3 = (x+1)(x-2)/2 + a 의 근이 x=(b±√21)/2 일 때 유리수 a, b 에 대한 2a-b 의 값. 5지선다.
  category: "분모 제거·전개 → 표준형 → 근의 공식 꼴 비교 → a, b"
  M: {s: 2, k: 3, a: 2, t: 1}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "분수 계수 이차방정식의 근의 꼴 비교로 미정계수 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    양변 ×6 후 2x(x-3)=3(x+1)(x-2)+6a 를 전개하면 x^2 항이 한 번 상쇄되어 x^2+3x+(6a-6)=0 이 남는다.
    이후는 154-02 와 같은 꼴 비교(분모 2 → b=-3, 근호 안 33-24a=21 → a=1/2)지만 전개·이항 처리량이 커 Mₖ=3. 통찰 없는 계산형 · M_total 8 → STEP2 ★3 유지.
  tier: star_3
  mechanism_primary: "양변 ×6 → 전개·정리해 x^2+3x+(6a-6)=0 → 근의 공식 꼴과 비교 → a, b → 2a-b"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/156-14.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "양변의 분모(3, 2)와 괄호 안 상수를 바꾼다. 제약: 정리 후 x^2 계수가 1 이 되도록 분모를 맞춰야 주어진 근의 분모 2 와 맞고, 근호 안 값이 양수이면서 제곱수가 아니어야 한다. a 가 유리수로 떨어지도록 계수를 잡는다."
    creative: "(1) a 만 묻고 b 를 주기(★2~3) (2) 근이 중근이 되도록 a 를 정하게 하면 판별식 0 조건으로 바뀜(★3) (3) 근의 꼴 대신 「두 근의 차가 √21」 로 주면 차 → 판별식 전환이 붙어 ★4."
```

```yaml
- id: GN-M31-156-15
  page: 156
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "중단원 마무리 STEP2"
  summary: |
    x>y 인 두 수가 (x-y)(x-y-6)=16 을 만족시킬 때 x-y 의 값.
  category: "공통부분 치환 → 이차방정식 → 조건 x>y 로 한 근 기각"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 3
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "t=8, t=-2 두 후보 중 x>y 즉 t>0 을 만족하지 않는 -2 를 기각해야 답이 하나로 정해짐"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "공통부분을 한 문자로 치환하는 이차방정식(해의 조건 검증)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    x-y 를 t 로 묶으면 t^2-6t-16=0 → (t-8)(t+2)=0 으로 계산은 가볍다. 진짜 요구는 x, y 를 각각 구하려 들지 않고 덩어리로 보는 것과, 두 근 중 x>y 로 하나를 버리는 마지막 검증이다.
    치환 자체는 표준 절차라 통찰로 세지 않고 기각 단계만 VF d1 · M_total 7 → STEP2 ★3 유지.
  tier: star_3
  mechanism_primary: "x-y=t 치환 → t^2-6t-16=0 → t=8 또는 -2 → t>0 으로 8"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/156-15.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "괄호 안의 -6 과 우변 16 을 바꾼다. 제약: t^2-6t-16 이 인수분해되도록 판별식을 제곱수로 두고, 두 근의 부호가 서로 달라야 x>y 조건이 실제로 하나를 기각한다(둘 다 양수면 검증 단계가 무력화)."
    creative: "(1) 공통부분을 x+y 나 x^2-1 로 바꾸기(★3 유지) (2) 조건을 x<y 로 뒤집어 답을 음수로(★3) (3) x-y 를 구한 뒤 x^2-2xy+y^2 같은 식의 값까지 묻게 하면 전환이 하나 더 붙어 ★4."
```

```yaml
- id: GN-M31-156-16
  page: 156
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "중단원 마무리 STEP2"
  summary: |
    3x^2-2x+k-1=0 은 서로 다른 두 근을, x^2+kx+3=0 은 중근을 갖도록 하는 상수 k 구하기.
  category: "두 판별식 조건(부등식·등식) → 후보 k → 범위로 기각"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "중근 조건에서 나온 k=±2√3 두 후보를 앞 조건 k<4/3 에 되돌려 대입해 2√3 을 기각(무리수 대소 비교 포함)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "두 이차방정식의 근의 조건을 동시에 만족하는 상수 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    앞 식은 D/4=1-3(k-1)>0 → k<4/3 의 범위를, 뒤 식은 k^2-12=0 → k=±2√3 의 두 값을 준다.
    답이 되려면 두 조건을 모두 통과해야 하고 2√3≈3.46 은 범위 밖이므로 기각 — 이 되돌림이 없으면 답을 두 개로 쓰게 된다(VF d2). M_total 8 → STEP2 ★3 유지.
  tier: star_3
  mechanism_primary: "D>0 으로 k 범위 → D=0 으로 k 후보 → 범위에 대입해 하나 기각"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-2\sqrt{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/156-16.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 식의 계수를 바꾼다. 제약: 첫 식의 판별식이 k 의 일차식이어야 범위가 부등식 하나로 나오고, 둘째 식의 중근 조건이 k 의 두 값을 주되 그중 정확히 하나만 범위를 만족해야 한다. 근호 값은 대소 비교가 가능한 정도(2√3 vs 4/3)로."
    creative: "(1) 두 조건을 「근을 갖지 않음 + 중근」으로 바꾸기(159-u4 골조 ★3) (2) 중근 조건을 가진 식의 중근 값까지 묻기(★3~4) (3) k 가 정수라는 조건을 더해 후보를 늘리면 검증 대상이 많아져 ★4."
```

```yaml
- id: GN-M31-156-17
  page: 156
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP2"
  summary: |
    x^2+12x+k=0 의 한 근이 다른 근의 2 배일 때 상수 k 의 값. 5지선다.
  category: "두 근을 α, 2α 로 두기 → 전개 후 계수 비교 → k"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「한 근이 다른 근의 2배」라는 근들 사이의 관계를 (x-α)(x-2α)=x^2+12x+k 라는 계수 조건으로 옮김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "두 근의 비가 주어진 이차방정식에서 미정계수 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    근을 직접 구할 수 없으므로 두 근을 α, 2α 로 놓고 (x-α)(x-2α)=x^2-3αx+2α^2 을 원식과 계수 비교한다.
    -3α=12 → α=-4, k=2α^2=32. 근의 관계를 계수 관계로 옮기는 동치 변환이 문항의 전부(EQV d2)이고 α 가 음수라는 점이 함정 · M_total 7 → STEP2 ★3 유지.
  tier: star_3
  mechanism_primary: "두 근을 α, 2α → (x-α)(x-2α) 전개 → 계수 비교로 α → k=2α^2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/156-17.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x 계수와 근의 비(2배 → 3배, 2:3)를 바꾼다. 제약: x 계수가 (1+비)의 배수여야 α 가 유리수로 떨어지고, k=비×α^2 이 선택지에서 구별될 만큼 커야 한다."
    creative: "(1) 근의 차가 주어진 꼴(두 근 α, α+d)로 바꾸기(★3) (2) 두 근의 비를 2:3 으로 두면 미지수 설정이 한 단계 늘어 ★3 (3) k 가 자연수가 되는 x 계수를 모두 구하게 하면 분기·검증이 붙어 ★4."
```

```yaml
- id: GN-M31-156-18
  page: 156
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP2"
  summary: |
    x^2 의 계수가 1 인 이차방정식에서 한 사람은 x 의 계수를, 다른 사람은 상수항을 잘못 보고 풀었을 때 처음 방정식의 해. 5지선다.
  category: "잘못 본 항 → 맞게 본 항만 채택 → 방정식 복원 → 풀이"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「x 의 계수를 잘못 봤다」를 「상수항은 옳다」로 뒤집어, 각 오답에서 살아 있는 계수만 골라 쓰는 동치 해석"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "잘못 보고 푼 이차방정식에서 처음 방정식 복원하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    서윤이의 해에서는 상수항 (-4)×7=-28 만, 현우의 해에서는 x 의 계수 -(-9-3)=12 만 살린다. 어느 쪽 정보를 버릴지 정하는 것이 이 문항의 핵심(EQV d2).
    복원한 x^2+12x-28=0 은 (x+14)(x-2)=0 으로 바로 풀린다. 두 사람의 정보를 뒤바꿔 쓰는 것이 대표 오답 · M_total 7 → STEP2 ★3 유지.
  tier: star_3
  mechanism_primary: "잘못 본 항은 버리고 상수항 -28 · x 계수 12 채택 → x^2+12x-28=0 → 인수분해"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/156-18.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 사람이 구한 네 개의 근을 바꾼다. 제약: 살아남는 상수항(두 근의 곱)과 x 계수(두 근의 합의 부호 반전)로 만든 방정식이 인수분해돼야 하고, 선택지에 「정보를 뒤바꿔 쓴 방정식」의 해를 넣어야 함정이 작동한다."
    creative: "(1) 처음 방정식 자체를 쓰게 하는 서술형(★3 유지) (2) x^2 계수를 1 이 아닌 수로 두면 곱·합 환원에 계수가 끼어 ★4 (3) 한 사람의 해만 주고 다른 조건을 판별식으로 주면 조건 통합이 되어 ★4."
```

```yaml
- id: GN-M31-157-19
  page: 157
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP2"
  summary: |
    어느 해 5 월 달력에서 위아래로 이웃한 두 날짜의 제곱의 합이 205 일 때 두 날짜 구하기.
  category: "달력 배열 → 차가 7 인 두 수 → 제곱의 합 → 자연수 근"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "달력의 위아래 이웃이라는 배열 정보를 「차가 7 인 두 수 n, n+7」 이라는 대수 표현으로 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "이차방정식의 활용 — 달력에서 이웃한 날짜"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    그림(달력)에서 읽어야 할 것은 「위아래로 이웃 = 7 차이」 하나뿐이고, 그 뒤 n^2+(n+7)^2=205 → n^2+7n-78=0 → (n-6)(n+13)=0 은 정형이다.
    배열을 식으로 옮기는 전환 1개(RT d1)와 음수 근을 날짜 조건으로 버리는 마무리 · M_total 7 → STEP2 ★3 유지.
  tier: star_3
  mechanism_primary: "두 날짜를 n, n+7 → n^2+(n+7)^2=205 → n^2+7n-78=0 → n=6"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$6$일, $13$일'
  answer_source: "답지"
  figure: "crop:fig-157-19.png"
  latex: latex-bank/gn-m31/items/157-19.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "제곱의 합 205 를 바꾼다. 제약: 2n^2+14n+49=값 이 정수 근을 갖도록 값을 고르고(6,13 → 205 / 8,15 → 289) 두 날짜가 모두 그 달 안에 들어와야 한다. 달력 그림의 요일·날짜 배치는 고정이므로 「7 차이」 구조는 바꾸지 않는다."
    creative: "(1) 대각선으로 이웃(차 6 또는 8)으로 바꾸기(★3 유지) (2) 가로로 이웃한 세 날짜의 제곱의 합으로 확장(★3~4) (3) 두 날짜의 곱을 주면 계산이 가벼워져 ★2."
```

```yaml
- id: GN-M31-157-20
  page: 157
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "중단원 마무리 STEP2"
  summary: |
    높이가 (25t-5t^2+70) m 인 공이 지면에서 높이 90 m 이상인 지점을 지나는 시간(몇 초 동안). 5지선다.
  category: "높이=90 인 두 시각 → 두 근의 차 = 지속 시간"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「90 m 이상인 동안」을 중3 도구로 풀 수 있게 「높이가 정확히 90 이 되는 두 시각 사이」로 바꿔 두 근의 차를 답으로 삼음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "이차방정식의 활용 — 쏘아 올린 물체가 일정 높이 이상인 시간"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    이차부등식을 배우지 않은 단계이므로 25t-5t^2+70=90 → t^2-5t+4=0 → t=1, 4 를 구한 뒤 「그 사이 3 초 동안」으로 해석해야 한다(EQV d2).
    두 근을 답으로 쓰거나 큰 근 4 를 그대로 고르는 것이 대표 오답이고, 경계(이상)·단위(초) 함정이 겹침 · M_total 8 → STEP2 ★3 유지.
  tier: star_3
  mechanism_primary: "25t-5t^2+70=90 → t^2-5t+4=0 → t=1, 4 → 지속 시간 4-1"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/157-20.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초속(25)·건물 높이(70)·기준 높이(90)를 바꾼다. 제약: 정리한 이차방정식의 판별식이 제곱수여야 두 시각이 유리수로 떨어지고, 기준 높이가 최고점보다 낮아야 두 근이 존재한다. 중력 계수 5 는 문항 관례상 고정."
    creative: "(1) 「지면에 떨어지는 시각」(높이 0)으로 바꾸면 근 하나만 살아 ★2~3 (2) 최고점의 높이를 묻기(완전제곱 변형 필요 ★4) (3) 던진 높이를 미지수로 두고 지속 시간을 조건으로 주면 역추적이 되어 ★4."
```

```yaml
- id: GN-M31-157-21
  page: 157
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP2"
  summary: |
    가로 30 m, 세로 24 m 인 직사각형 공원에 폭이 일정한 산책로(세로 1 줄·가로 2 줄)를 낸 뒤 남은 넓이가 416 m^2 일 때 산책로의 폭. 5지선다.
  category: "산책로를 밀어 붙여 한 직사각형으로 → (30-x)(24-2x)=416"
  M: {s: 2, k: 3, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "흩어진 산책로를 평행이동해 붙이면 남은 땅이 가로 30-x, 세로 24-2x 인 한 개의 직사각형이 된다는 기하 → 대수 전환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "이차방정식의 활용 — 폭이 일정한 길을 낸 도형의 넓이"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    그림에서 세로 방향 길 1 줄·가로 방향 길 2 줄임을 읽어야 세로가 24-2x 가 된다. 길을 하나씩 빼면 겹치는 부분을 두 번 빼게 되므로 밀어 붙이는 전환이 사실상 필수(RT d2).
    (30-x)(24-2x)=416 → x^2-42x+152=0 → (x-4)(x-38)=0 이고 38 은 공원 밖이라 자명하게 기각 · M_total 9 → STEP2 ★3 유지.
  tier: star_3
  mechanism_primary: "길을 밀어 붙여 (30-x)(24-2x)=416 → x^2-42x+152=0 → 범위 안의 x=4"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "①"
  answer_source: "답지"
  figure: "crop:fig-157-21.png"
  latex: latex-bank/gn-m31/items/157-21.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공원의 가로·세로와 남은 넓이를 바꾼다. 제약: 그림의 길 개수(세로 1·가로 2)가 식의 24-2x 를 결정하므로 그림을 바꾸지 않는 한 고정이고, (가로-x)(세로-2x)=넓이 가 인수분해되면서 0<x<세로/2 인 근이 정확히 하나여야 한다."
    creative: "(1) 길을 세로 1·가로 1 로 줄이면 식이 (30-x)(24-x) 로 단순해져 ★3 (2) 길의 넓이를 주고 폭을 묻기(★3 유지) (3) 폭을 주고 남은 넓이가 전체의 몇 %인지 묻기(이차방정식이 사라져 ★2) (4) 길을 대각선 방향으로 두면 밀어 붙이기가 성립하지 않아 ★5 급으로 성격이 바뀜(중3 범위 밖)."
```

### 중단원 마무리하기 STEP 3 실력 UP

```yaml
- id: GN-M31-157-22
  page: 157
  vendor_label: "중단원 마무리하기 STEP 3 실력 UP"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP3"
  summary: |
    주사위를 두 번 던져 나온 눈 a, b 에 대하여 ax^2-4x+b=0 이 중근을 가질 확률 구하기.
  category: "중근 조건 → ab=4 → 눈의 순서쌍 세기 → 확률"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「중근을 가진다」를 눈 a, b 에 대한 조건 16-4ab=0, 즉 ab=4 로 옮김"
    - step: 2
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "ab=4 를 만족하는 순서쌍을 1~6 범위에서 세고 전체 36 으로 나누는 확률(경우의 수) 단원 도구가 함께 필요"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "이차방정식이 중근을 가질 확률(판별식 + 경우의 수)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    판별식은 한 줄(ab=4)이고, 그 뒤는 주사위 눈이 1~6 인 순서쌍 (1,4),(2,2),(4,1) 세 개를 빠짐없이 세는 확률 문제다.
    이차방정식과 확률이 한 문항에서 맞물리는 것이 실력 UP 의 의도(XU d2)이고, ab=4 에서 (4,1) 과 (1,4) 를 구별하지 않으면 답이 어긋난다.
    계산 부담 자체는 가볍지만 단원 결합 통찰 2개 · 실력 UP 출발점 → ★4 유지. [분류 이슈] 계산량만 보면 ★2~3 수준.
  tier: star_4
  mechanism_primary: "b^2-4ac=0 → ab=4 → 눈 1~6 안의 순서쌍 3개 → 3/36"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{1}{12}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/157-22.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x 계수(-4)를 바꿔 ab 의 값을 조절한다. 제약: ab 값이 1~6 안의 순서쌍을 적당히 만들어야 한다(ab=4 → 3쌍 / ab=6 → 4쌍 / ab=12 → 4쌍). x 계수가 홀수면 판별식이 4로 나누어떨어지지 않아 눈의 곱 조건이 지저분해진다."
    creative: "(1) 「서로 다른 두 근」·「근을 갖지 않을」 확률로 바꾸면 부등식 조건이 되어 세야 할 순서쌍이 늘고 ★4 유지 (2) a 를 x^2 계수가 아닌 상수항에 두기(★4) (3) 동전·카드로 표본공간을 바꾸면 XU 는 남고 계산은 가벼워져 ★3."
```

```yaml
- id: GN-M31-157-23
  page: 157
  vendor_label: "중단원 마무리하기 STEP 3 실력 UP"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP3"
  summary: |
    입장료 2000 원·하루 500 명인 고궁에서 입장료를 x 원 올리자 입장객이 x/5 명 줄었는데 총수입이 그대로일 때 양수 x 구하기.
  category: "(오른 요금)×(줄어든 인원) = 원래 총수입 → 이차방정식 → 양수 근"
  M: {s: 2, k: 3, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「총수입이 변함없다」를 (2000+x)(500-x/5)=2000×500 이라는 등식으로 옮기는 것이 풀이의 전부"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "이차방정식의 활용 — 가격 인상과 총수입"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    두 변화량이 서로 다른 단위(원·명)로 주어지고 한쪽이 분수 x/5 라서 식 세우기와 전개가 모두 무겁다.
    전개하면 상수항 1000000 이 상쇄되어 100x-x^2/5=0 → x(500-x)=0 이 되고 양수 조건으로 500 만 남는다.
    조건을 곱의 등식으로 옮기는 착안 1개(EQV d2)·M_total 9 → 실력 UP 출발점 ★4 유지.
  tier: star_4
  mechanism_primary: "(2000+x)(500-x/5)=1000000 → 전개·상쇄 → x(500-x)=0 → x=500"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$500$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/157-23.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "입장료·인원·감소 비율(x/5)을 바꾼다. 제약: 총수입이 같다는 조건이면 상수항이 상쇄되므로 남는 식이 x(정수-계수x)=0 꼴이 되도록 비율을 잡아야 하고, 감소 인원 x/5 가 정수가 되는 x 에서 답이 나와야 한다."
    creative: "(1) 「총수입이 5 만 원 늘었다」로 바꾸면 상수항이 남아 판별식·인수분해가 필요해 ★4 유지~★5 (2) 총수입이 최대가 되는 x 를 묻기(중3 범위 밖) (3) 요금을 내려 인원이 늘어나는 방향으로 뒤집기(부호 함정 추가 ★4)."
```

```yaml
- id: GN-M31-157-24
  page: 157
  vendor_label: "중단원 마무리하기 STEP 3 실력 UP"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP3"
  summary: |
    AB=15 cm, BC=12 cm 인 직각삼각형 ABC 안에 만든 직사각형 BDEF 의 넓이가 40 cm^2 이고 BD<DC 일 때 삼각형 EDC 의 넓이 구하기.
  category: "닮음으로 세로를 가로의 식으로 → 넓이 방정식 → 조건으로 근 선택 → 삼각형 넓이"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "닮음비 DE:AB=DC:BC 를 써서 직사각형의 세로를 BD 의 일차식으로 바꾸는 기하 → 대수 전환"
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "BD=4, 8 두 근 중 BD<DC 조건을 만족하는 4 만 채택하고 8 을 기각해야 EDC 의 넓이가 정해짐"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "이차방정식의 활용 — 직각삼각형 안에 내접한 직사각형"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    BD=x 로 두면 △CDE∽△CBA 에서 DE=15(12-x)/12 이고 넓이 조건은 x(12-x)=32 → x=4 또는 8 로 대칭적인 두 근을 준다.
    조건 BD<DC 가 없으면 답이 두 가지가 되므로 기각이 풀이의 마지막 필수 단계(VF d2)이고, 묻는 것이 직사각형이 아니라 △EDC 여서 한 번 더 옮겨야 한다.
    닮음+이차방정식 결합·통찰 2개·M_total 9 → 실력 UP ★4 유지.
  tier: star_4
  mechanism_primary: "BD=x → 닮음으로 DE 표현 → x(12-x)=32 → BD<DC 로 x=4 → △EDC 넓이"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$40\,\mathrm{cm}^2$'
  answer_source: "답지"
  figure: "crop:fig-157-24.png"
  latex: latex-bank/gn-m31/items/157-24.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 변의 길이와 직사각형의 넓이를 바꾼다. 제약: 넓이 조건에서 나오는 x(밑변-x)=값 의 판별식이 제곱수여야 하고, 값이 최대 넓이(밑변^2/4 에 닮음비를 곱한 값)를 넘으면 근이 없다. 그림의 점 D, E, F 위치와 직각의 위치는 고정."
    creative: "(1) 직사각형의 둘레를 주고 넓이를 묻기(★4 유지) (2) BD<DC 조건을 빼고 가능한 넓이를 모두 구하게 하면 VF 가 분기 열거로 바뀌어 ★4 (3) 직각삼각형을 이등변삼각형으로 바꾸면 닮음비가 달라지고 대칭성이 생겨 ★4~5 (4) 넓이가 최대가 되는 BD 를 묻는 것은 중3 범위 밖."
```

### 서술형 대비 문제

```yaml
- id: GN-M31-158-e1
  page: 158
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 대비"
  summary: |
    10x^2+ax+b=0 의 두 근이 -1/5, 1/2 일 때 bx^2+ax+2=0 의 두 근의 합 구하기. [7점]
  category: "두 근 → a, b → 새 방정식 → 두 근의 합"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 근으로 계수를 구해 다른 이차방정식의 두 근의 합·곱 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    10(x+1/5)(x-1/2)=10x^2-3x-1 에서 a=-3, b=-1 을 읽고, -x^2-3x+2=0 → x^2+3x-2=0 의 두 근을 근의 공식으로 구해 더한다.
    두 근이 (-3±√17)/2 로 무리수여서 더할 때 근호가 상쇄되는 것을 확인해야 하지만 도구는 전 단계와 같은 전개·대입뿐 · 통찰 0 · M_total 7 → 서술형 ★3 유지.
  tier: star_3
  mechanism_primary: "10(x-α)(x-β) 전개 → a, b → bx^2+ax+2=0 정리 → 근의 공식 → 합"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$-3$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/158-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 근과 x^2 계수를 바꾼다. 제약: x^2 계수가 두 근의 분모를 없애 a, b 가 정수여야 하고, 두 번째 방정식에서 b 가 x^2 계수 자리에 오므로 b≠0 이어야 한다. 합을 묻는다면 근호가 상쇄되므로 판별식이 제곱수가 아니어도 되지만, 곱을 묻는다면 곱이 유리수로 떨어지는지 확인한다."
    creative: "(1) 두 근의 곱을 묻기(158-u1 골조 ★3) (2) 두 근의 차를 묻기(근호가 남아 ★3~4) (3) 세 번째 방정식까지 이어 붙이면 같은 절차 반복으로 ★3 유지·계산량만 증가."
```

```yaml
- id: GN-M31-158-u1
  page: 158
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 대비"
  summary: |
    3x^2+ax+b=0 의 두 근이 -1/3, 2 일 때 bx^2+ax-3=0 의 두 근의 곱 구하기. [7점]
  category: "두 근 → a, b → 새 방정식 → 두 근의 곱"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 근으로 계수를 구해 다른 이차방정식의 두 근의 합·곱 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    3(x+1/3)(x-2)=3x^2-5x-2 에서 a=-5, b=-2. 새 식 -2x^2-5x-3=0 은 양변에 -1 을 곱해 2x^2+5x+3=0 → (2x+3)(x+1)=0 으로 인수분해된다.
    158-e1 의 유제로 골조가 같고 두 근이 유리수라 마무리가 더 가볍다. 통찰 0 · M_total 7 → 서술형 ★3 유지.
  tier: star_3
  mechanism_primary: "3(x-α)(x-β) 전개 → a, b → bx^2+ax-3=0 정리·인수분해 → 두 근의 곱"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{3}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/158-u1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 근과 x^2 계수를 바꾼다. 제약: a, b 가 정수로 떨어지고 두 번째 방정식이 인수분해되도록 판별식을 제곱수로 잡는다(안 그러면 곱을 구할 때 근호 계산이 추가). 상수항 -3 은 b 와 부호가 맞물려 양변 정리 단계를 만든다."
    creative: "(1) 두 근의 합을 묻기(158-e1 골조 ★3) (2) 새 방정식의 두 근을 모두 쓰게 하는 서술형(★3 유지) (3) b 를 x 계수 자리로 옮기면 계수 배치가 달라져 ★3."
```

```yaml
- id: GN-M31-158-e2
  page: 158
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 대비"
  summary: |
    지름 18 cm 인 큰 원 안에 지름이 큰 원의 지름을 둘로 나누는 두 원이 들어 있는 도형에서 색칠한 부분의 넓이가 36π cm^2 일 때 가장 작은 원의 반지름 구하기. [8점]
  category: "큰 원 - 두 작은 원 = 색칠 넓이 → 이차방정식 → 작은 쪽 근 선택"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 안쪽 원의 지름의 합이 큰 원의 지름 18 임을 읽어 반지름을 x 와 9-x 한 문자로 표현하는 기하 → 대수 전환"
    - step: 3
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x=3, 6 두 근 중 「가장 작은 원」 조건에 맞는 3 만 채택(6 은 두 원 중 큰 쪽이므로 기각)"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "이차방정식의 활용 — 원으로 이루어진 도형의 색칠한 넓이"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    작은 원의 반지름을 x 로 두면 다른 원은 9-x 이고, 색칠한 부분은 81π-π(9-x)^2-πx^2=36π → x^2-9x+18=0 → (x-3)(x-6)=0.
    두 근이 두 안쪽 원의 반지름 쌍(3 과 6)을 동시에 주는 구조라 「가장 작은」 이라는 말로 골라야 한다.
    통찰 2개지만 각 단계가 도형 활용의 정형(넓이 차 · 지름 합)이라 +1 하지 않고 서술형 ★3 유지.
  tier: star_3
  mechanism_primary: "작은 원 x, 다른 원 9-x → 81π-π(9-x)^2-πx^2=36π → x^2-9x+18=0 → x=3"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$3\,\mathrm{cm}$'
  answer_source: "본문 답"
  figure: "crop:fig-158-e2.png"
  latex: latex-bank/gn-m31/items/158-e2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "큰 원의 지름과 색칠한 넓이를 바꾼다. 제약: 지름 d 에 대해 x^2-(d/2)x+(색칠 넓이 관련 상수)=0 의 판별식이 제곱수여야 하고, 색칠 넓이가 0 보다 크고 두 원이 모두 존재하는 범위(판별식>0)여야 한다. 그림의 두 원이 큰 원의 지름 위에 맞닿아 있다는 배치는 고정."
    creative: "(1) 두 작은 원의 넓이의 합을 묻기(★3 유지) (2) 원 대신 반원으로 바꾸기(158-u2 골조 ★3) (3) 안쪽 원을 세 개로 늘리면 미지수가 둘이 되어 조건이 하나 더 필요(★4) (4) 색칠 넓이 대신 둘레의 길이를 주면 일차방정식이 되어 ★2."
```

```yaml
- id: GN-M31-158-u2
  page: 158
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 대비"
  summary: |
    AB=20 cm 위에 점 C 를 잡아 만든 세 반원 도형에서 색칠한 부분의 넓이가 21π cm^2 이고 AC>CB 일 때 AC 의 길이 구하기. [8점]
  category: "큰 반원 - 두 작은 반원 = 색칠 넓이 → 이차방정식 → AC>CB 로 근 선택"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "AC=x 로 두면 CB=20-x 이고 세 반원의 반지름이 10, x/2, (20-x)/2 라는 기하 → 대수 전환"
    - step: 3
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x=6, 14 두 근 중 AC>CB 를 만족하는 14 만 채택"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "이차방정식의 활용 — 반원으로 이루어진 도형의 색칠한 넓이"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    색칠한 부분은 지름 AB 인 반원에서 지름 AC, CB 인 두 반원을 뺀 넓이이므로 50π-(π/8)x^2-(π/8)(20-x)^2=21π → x^2-20x+84=0 → (x-6)(x-14)=0.
    반지름이 지름의 절반이라 분모 8 이 생기는 것이 계산 함정이고, 두 근이 AC 와 CB 를 함께 주므로 AC>CB 로 골라야 한다.
    158-e2 의 유제로 골조가 같음 · 통찰 2개지만 정형 · 서술형 ★3 유지.
  tier: star_3
  mechanism_primary: "AC=x → 50π-(π/8){x^2+(20-x)^2}=21π → x^2-20x+84=0 → AC>CB 로 x=14"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$14\,\mathrm{cm}$'
  answer_source: "답지"
  figure: "crop:fig-158-u2.png"
  latex: latex-bank/gn-m31/items/158-u2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AB 의 길이와 색칠한 넓이를 바꾼다. 제약: x^2-(AB)x+상수=0 의 판별식이 제곱수여야 하고, 색칠 넓이가 최대값(C 가 중점일 때)보다 작아야 두 근이 생긴다. AC>CB 조건이 두 근 중 큰 쪽을 고르게 하는 장치이므로 유지."
    creative: "(1) 색칠 부분을 「두 작은 반원의 넓이의 합」으로 바꾸기(★3 유지) (2) CB 를 묻기(같은 계산·답만 다름 ★3) (3) 반원 대신 정사각형·반원 혼합 도형으로 바꾸면 넓이 식이 이차·일차 혼합이 되어 ★4."
```

```yaml
- id: GN-M31-159-u3
  page: 159
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 대비"
  summary: |
    -0.1x+(x^2+1)/2 = 0.4-(4/5)x 의 근이 x=(p±√q)/10 일 때 유리수 p, q 에 대한 p+q 구하기. [7점]
  category: "소수·분수 혼합 정수화 → 표준형 → 근의 공식 → 꼴 비교"
  M: {s: 2, k: 3, a: 2, t: 1}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "계수가 소수·분수인 이차방정식을 풀어 근의 꼴과 비교하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    양변에 10 을 곱해 -x+5(x^2+1)=4-8x → 5x^2+7x+1=0 으로 정리하는 것이 계산의 대부분이고(소수 두 종류와 분모 2, 5 가 섞임), 이후 근의 공식으로 (-7±√29)/10 을 얻어 p, q 를 읽는다.
    분모 10 이 주어진 근의 분모와 그대로 맞아 약분 비교가 필요 없다. 통찰 0 · M_total 8 → 서술형 ★3 유지.
  tier: star_3
  mechanism_primary: "양변 ×10 → 5x^2+7x+1=0 → 근의 공식 → p=-7, q=29 → p+q"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$22$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/159-u3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "소수 계수와 분모를 바꾼다. 제약: 분모들의 최소공배수와 소수 자릿수를 한 수로 없앨 수 있어야 하고, 정리 후 2a 가 주어진 근의 분모와 같아야 약분 함정이 생기지 않는다. 판별식은 양수·비제곱수."
    creative: "(1) 근의 분모를 약분해야만 맞는 꼴로 주면 154-02 의 약분 함정이 추가되어 ★3 (2) pq 나 q-p 를 묻기(★3 유지) (3) 근이 중근이 되도록 상수항을 정하게 하면 판별식 0 조건으로 성격이 바뀜(★3)."
```

```yaml
- id: GN-M31-159-u4
  page: 159
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 대비"
  summary: |
    3x^2-6x-k=0 은 근을 갖지 않고 x^2+(k-1)x+9=0 은 중근을 가질 때 상수 k 구하기. [7점]
  category: "판별식 < 0 으로 범위 → 판별식 = 0 으로 후보 → 범위로 기각"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "중근 조건에서 나온 k=7, -5 두 후보를 앞 조건 k<-3 에 되돌려 대입해 7 을 기각"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "두 이차방정식의 근의 조건을 동시에 만족하는 상수 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    앞 식은 D/4=9+3k<0 → k<-3, 뒤 식은 (k-1)^2=36 → k-1=±6 → k=7 또는 -5 를 준다.
    156-16 과 같은 골조이며 여기서는 후보가 모두 정수라 대소 비교가 쉬운 대신 「근을 갖지 않는다 → D<0」 의 부등호 방향이 함정이다(VF d2).
    통찰 1개 · M_total 8 → 서술형 ★3 유지.
  tier: star_3
  mechanism_primary: "D<0 → k<-3 → (k-1)^2-36=0 → k=7, -5 → 범위로 k=-5"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/159-u4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 식의 계수를 바꾼다. 제약: 첫 식의 판별식이 k 의 일차식이어야 하고, 둘째 식의 중근 조건이 주는 두 후보 중 정확히 하나만 범위 안이어야 한다(둘 다 들어오면 답이 둘, 둘 다 밖이면 해 없음)."
    creative: "(1) 조건을 「서로 다른 두 근 + 중근」으로 바꾸기(156-16 골조 ★3) (2) 중근을 갖는 식의 중근 값까지 구하게 하면 단계가 하나 늘어 ★3~4 (3) 두 식 모두 부등식 조건으로 주면 범위의 교집합 문제가 되어 ★3."
```

```yaml
- id: GN-M31-159-u5
  page: 159
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 대비"
  summary: |
    x^2+kx-6=0 의 한 근이 1 일 때 k, 2 를 두 근으로 하고 x^2 의 계수가 3 인 이차방정식을 ax^2+bx+c=0 꼴로 나타내기. [6점]
  category: "한 근 대입 → k → 두 근으로 방정식 만들기(x^2 계수 3)"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "한 근이 주어진 이차방정식에서 계수를 구해 새 이차방정식 만들기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x=1 을 대입해 1+k-6=0 → k=5 를 얻고, 3(x-5)(x-2)=3x^2-21x+30 을 전개하면 끝이다.
    두 단계 모두 한 줄이고 x^2 계수 3 을 빠뜨리는 것이 유일한 함정. 통찰 0 · M_total 5 → 서술형 출발점 ★3 에서 -1 하여 ★2(이 범위 서술형 중 배점도 6점으로 가장 낮음).
  tier: star_2
  mechanism_primary: "x=1 대입 → k=5 → 3(x-5)(x-2)=0 전개"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$3x^2-21x+30=0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/159-u5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주어진 근, 상수항, 새 방정식의 x^2 계수를 바꾼다. 제약: 대입한 근에서 k 가 정수로 떨어져야 하고, 두 근 k 와 상수가 서로 달라야 이차방정식이 중근이 되지 않는다."
    creative: "(1) 다른 한 근을 먼저 구하게 한 뒤 그 둘로 방정식을 만들게 하면 단계가 하나 늘어 ★3 (2) x^2 계수를 문자로 주면 일반형 서술이 되어 ★3 (3) 두 근의 합과 곱만 쓰게 하면 ★2 유지."
```

```yaml
- id: GN-M31-159-u6
  page: 159
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 대비"
  summary: |
    연속하는 세 홀수에서 가장 큰 수와 가장 작은 수의 곱이 나머지 수의 8 배보다 11 만큼 작을 때 세 홀수의 합 구하기. [8점]
  category: "세 홀수를 x-2, x, x+2 로 두기 → 조건식 → 근 선택 → 합"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 3
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x=1, 7 두 근 중 답지가 채택한 것은 7(5, 7, 9)이며 x=1 은 -1, 1, 3 이 되어 버려진다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "이차방정식의 활용 — 연속하는 세 홀수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    가운데 수를 x 로 두면 세 홀수는 x-2, x, x+2 이고 조건은 (x+2)(x-2)=8x-11 → x^2-8x+7=0 → (x-1)(x-7)=0.
    「8 배보다 11 만큼 작다」의 방향을 뒤집는 것이 대표 오답이고, 마지막에 세 수의 합(3x)까지 옮겨야 한다.
    [분류 이슈] x=1 이면 -1, 1, 3 도 연속하는 세 홀수이지만 답지는 자연수를 암묵 전제하고 5, 7, 9 만 인정한다. 통찰 1개 · M_total 8 → 서술형 ★3 유지.
  tier: star_3
  mechanism_primary: "세 홀수 x-2, x, x+2 → (x+2)(x-2)=8x-11 → x^2-8x+7=0 → x=7 → 합 3x=21"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$21$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/159-u6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "배수 8 과 차이 11 을 바꾼다. 제약: x^2-(배수)x+(4+차이)=0 의 판별식이 제곱수이고 근이 홀수여야 세 홀수가 실제로 만들어진다. 근이 둘 다 양의 홀수이면 답이 두 개가 되므로 한쪽이 자연수 조건에서 밀려나도록 잡는다."
    creative: "(1) 연속하는 세 짝수·세 자연수로 바꾸기(★3 유지) (2) 「가장 큰 수의 제곱이 나머지 두 수의 곱보다 …」로 조건을 바꾸면 전개가 늘어 ★3 (3) 세 수의 제곱의 합을 조건으로 주면 계산 부담이 커져 ★3~4 (4) 「자연수」 조건을 명시하면 기각 근거가 분명해져 분류 이슈가 사라짐."
```

## 표본 판정 요약 (32문)

- ★ 분포: ★1 1 · ★2 12 · ★3 16 · ★4 3 · ★5 0
- 통찰형 15 · 절차형 17 · premium 0
- 통찰 유형 분포(라벨 17개): I-VF 7 · I-RT 5 · I-EQV 4 · I-XU 1 — 이 범위의 변별은 거의 전부 「두 근 중 하나를 조건으로 기각(VF)」과 「도형·배열을 한 문자의 식으로 옮기기(RT)」에서 나온다.
- 구역별: STEP1 12문(★1 1 · ★2 11) · STEP2 9문(모두 ★3) · STEP3 실력 UP 3문(모두 ★4) · 서술형 대비 8문(★2 1 · ★3 7).
- type_hint 상위 5: 「이차방정식의 활용 — 도형(원·반원·직사각형·길)」 6 · 「이차방정식의 활용 — 수·나이·날짜」 5 · 「두 근 ↔ 계수 되돌리기」 5 · 「판별식으로 근의 개수·중근 조건」 5 · 「계수 정리 후 근의 공식·근의 꼴 비교」 5
- 그림: 6문(`crop:fig-155-12.png` · `crop:fig-157-19.png` · `crop:fig-157-21.png` · `crop:fig-157-24.png` · `crop:fig-158-e2.png` · `crop:fig-158-u2.png`)
- 변형 제약의 공통분모: ① 판별식이 제곱수인가(정수 근) ② 두 근 중 하나가 양수·자연수·대소 조건으로 기각되는가 ③ 그림의 배치(길의 개수·원의 접점·직각의 위치)는 숫자 변형에서 고정.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-M31-157-22 | 실력 UP 구역·단원 결합(확률) 통찰 2개로 ★4 로 두었으나 계산량은 ab=4 의 세 쌍을 세는 정도로 가벼움. 카탈로그를 만들 때 「단원 결합만으로 ★4 를 줄 것인가」의 기준 사례 | ★3 / ★4 |
| GN-M31-159-u5 | 서술형 대비 구역 출발점은 ★3 이나 두 단계·M_total 5 로 ★2 로 내림(배점도 6점으로 최저). 구역 신호와 1단 차이 | ★2 / ★3 |
| GN-M31-159-u6 | x=1 일 때의 -1, 1, 3 도 「연속하는 세 홀수」 조건을 만족하지만 답지는 자연수를 암묵 전제하고 5, 7, 9 만 인정. 발문에 자연수 조건이 없음 | ★3 |
| GN-M31-158-e2 / 158-u2 | 통찰 2개(RT+VF)라 +1 후보이지만 두 단계 모두 도형 활용의 정형이라 ★3 유지. 카탈로그에서 「도형 넓이 + 근 선택」을 ★3 으로 고정할지 결정 필요 | ★3 / ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: ① 「두 근 중 조건으로 하나를 기각」(156-15 · 156-16 · 157-24 · 158-e2 · 158-u2 · 159-u4 · 159-u6) — 이 범위에서 가장 자주 반복되며 ★3~4 의 실제 변별점이다. ② 「폭이 일정한 길·내접 도형」(157-21 · 157-24) — 밀어 붙이기·닮음이라는 고유 도구가 있어 일반 도형 넓이와 분리해야 한다. ③ 「잘못 보고 푼 방정식 복원」(156-18) — 단독 유형.
- **통합해도 될 유형**: ① 154-02 · 156-14 · 159-u3 의 「근의 꼴 비교로 미정계수」는 계수가 분수·소수인지만 다르므로 한 유형(난이도 변형)으로 묶는다. ② 155-08 · 158-e1 · 158-u1 · 159-u5 의 「두 근 ↔ 계수 왕복」도 한 유형으로 묶고 묻는 것(합·곱·방정식)만 변형으로 둔다. ③ 154-05 · 154-06 · 155-07 의 판별식 3형(근의 개수·중근·범위)은 한 유형의 세 물음으로 묶을 수 있다.
- **앞부분(16-p1)과의 관계**: 이 범위의 활용 문항은 16-p1 의 「핵심문제 익히기」 활용 유형(수·도형·속도)과 골조가 겹치므로, 카탈로그는 p1·p2 를 합쳐 한 번에 세우는 것이 좋다.
