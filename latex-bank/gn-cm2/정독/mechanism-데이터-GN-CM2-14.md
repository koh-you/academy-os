---
name: mechanism-데이터-GN-CM2-14
description: 개념원리 공통수학2 14 집합의 뜻과 표현(1/1 · 122~126쪽 24문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학2 (22개정) · 전사본 latex-bank/gn-cm2
  section: 14 집합의 뜻과 표현
  unit_code: GN-CM2-14
  part: "1/1"
  extract_range: "122~126쪽 · 122-290~126-307"
  total_problems: 24
  unit_total: 24
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·level·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm2/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm2/items/<id>.tex
  image_source: latex-bank/gn-cm2/figures/ (이 범위는 그림 없음)
---

# 개념원리 공통수학2 · 14 집합의 뜻과 표현 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 공통수학2 122~126쪽, 단원 14 「집합의 뜻과 표현」 전 24문항을 다룬다. 구역은 `개념원리 익히기`(5) · `필수·발전 예제`(필수 예제 6 + 확인체크 7 = 13) · `연습문제 STEP 1`(3) · `연습문제 STEP 2`(2) · `연습문제 실력 UP`(1) 다섯 개다. 이 범위에 그림 문항은 없다.

벤더 난이도 신호는 구역과 태그에 있다. 「개념원리 익히기」와 예제 뒤의 「확인체크」는 ★1, 「필수」 예제는 ★2, 연습문제는 STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4 에서 출발했다. 이 출발점에서 M_total 과 통찰로 ±1 만 조정했고 벤더 라벨에 억지로 맞추지 않았다. 조정 기준은 두 줄이다 — (a) 통찰 0 이고 M_total ≤ 5 이며 정의 한 줄로 즉답되면 −1, (b) 출발점이 ★1 인 개념 확인 문항인데 M_total ≥ 7 이거나 선행 단원 도구를 실제로 써야 하면 +1. ★2 이상에서의 +1 은 통찰 2개 이상 또는 depth 3 일 때만 적용했다. 선지·보기 판정은 같은 판정의 반복이면 Mₛ 한 단계, 선지마다 다른 개념을 요구하면 두 단계로 셌다. `depth_score` 는 effective_depth 의 평균이다.

단원 자체가 교과 초입이라 도구는 네 개뿐이다 — (1) 기준이 객관적이면 집합, (2) 원소나열법 ↔ 조건제시법 ↔ 벤다이어그램의 상호 번역, (3) 원소 개수로 유한·무한·공집합 분류, (4) n(A) 의 정의. 그래서 변별은 도구의 개수가 아니라 **집합 안에 들어온 선행 단원 표현(이차부등식·절댓값·소인수분해·원의 방정식)을 원소로 옮기는 단계**와 **원소의 중복·경계·∅ 표기**에서만 생긴다. 그 지점만 `insights[]` 로 표시했고, 나열·대입처럼 이 단원이 가르치는 절차 자체는 통찰로 세지 않았다. 그 결과 24문 중 통찰형은 6문뿐이다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 · 통찰 골조를 유지한 변형)를 채웠다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-CM2-122-290
  page: 122
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    보기 ㄱ~ㄹ 네 모임 중 집합인 것을 모두 고르고 그 집합의 원소를 나열. (ㄴ '큰 정수', ㄷ '50에 가까운 자연수'는 기준이 주관적.)
  category: "집합의 정의(기준의 명확성) 판정 → 집합인 것의 원소 나열"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "집합의 뜻 — 기준이 명확한 모임 판별과 원소 나열"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    '크다' '가깝다'처럼 사람마다 기준이 갈리는 말이 있으면 집합이 아니라는 정의 한 줄이 전부다. 남은 ㄱ은 약수 나열, ㄹ은 이미 인수분해된 이차방정식이라 즉답.
    익히기 구역 ★1 출발 · 통찰 0 · M_total 5 → ★1 유지.
  tier: star_1
  mechanism_primary: "각 모임의 기준이 명확한지 판정 → 집합인 것만 선택 → 조건을 만족하는 원소 나열"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '집합: ㄱ, ㄹ · ㄱ의 원소: $1$, $3$, $5$, $15$ · ㄹ의 원소: $-1$, $2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/122-290.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "ㄱ의 15를 다른 합성수(12·18·24)로, ㄹ의 이차방정식을 다른 인수분해형 (x-3)(x+4)=0 으로 바꿀 수 있다. 제약: 원소가 4개 안팎으로 나열 가능해야 하고 ㄹ은 인수분해된 형태를 유지해야 ★1 을 벗어나지 않는다."
    creative: "(1) 주관적 표현을 '작은' '많은' '잘하는'으로 교체(★1 유지) (2) 집합이 아닌 이유를 서술하게 하면 Mₛ만 오르고 ★1 유지 (3) ㄹ을 인수분해가 필요한 x²-x-2=0 으로 바꾸면 선행 도구가 들어와 ★2."
```

```yaml
- id: GN-CM2-122-291
  page: 122
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ 5의 배수의 집합을 A라 할 때 5, 12, 18, 30 이 A의 원소인지 기호 ∈, ∉ 로 표시.
  category: "배수 판정 → 원소 여부를 기호로 표기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "집합과 원소 사이의 관계 기호(∈, ∉)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    5로 나누어떨어지는지만 보면 끝난다. 기호의 방향(원소가 왼쪽, 집합이 오른쪽)을 익히는 것이 목적.
    익히기 ★1 출발 · 통찰 0 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "각 수가 5의 배수인지 판정 → ∈ 또는 ∉ 표기"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\in$ ⑵ $\notin$ ⑶ $\notin$ ⑷ $\in$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/122-291.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준 집합을 3·4·7의 배수나 약수 집합으로, 물어보는 네 수를 바꿀 수 있다. 제약: ∈ 과 ∉ 가 2:2 정도로 섞여야 찍기로 맞지 않는다."
    creative: "(1) 약수 집합으로 바꾸면 배수·약수 혼동 함정이 생김(★1 유지) (2) A를 조건제시법으로 주면 표현 번역이 한 겹 붙어 ★1~2 (3) A⊂B 같은 집합 사이 기호를 섞으면 ∈ 과 ⊂ 의 구별 함정이 생겨 ★2."
```

```yaml
- id: GN-CM2-122-292
  page: 122
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑶ 10 이하의 소수의 집합 A를 원소나열법·조건제시법·벤다이어그램으로 각각 나타내기.
  category: "소수 나열 → 같은 집합을 세 가지 표현으로 번역"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "집합의 세 가지 표현 방법(원소나열법·조건제시법·벤다이어그램)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    10 이하의 소수 2, 3, 5, 7 을 먼저 확정하면 세 표현은 같은 내용을 형식만 바꿔 쓰는 것이다. 1이 소수가 아니라는 것만 주의.
    익히기 ★1 출발 · 통찰 0 · M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "10 이하의 소수를 확정 → 원소나열법 → 같은 조건을 문장으로(조건제시법) → 원 안에 원소 배치(벤다이어그램)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $A=\{2,\,3,\,5,\,7\}$ ⑵ $A=\{x \mid x$는 $10$ 이하의 소수$\}$ ⑶ 벤다이어그램(원 $A$ 안에 $2$, $3$, $5$, $7$)'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/122-292.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상한 10을 15·20으로 바꾸거나 소수를 '12의 양의 약수'·'20 이하의 4의 배수'로 교체. 제약: 원소가 6개를 넘으면 벤다이어그램 작도가 번거로워진다."
    creative: "(1) 조건제시법으로 주고 나머지 둘을 쓰게 하면 방향만 뒤집힌 같은 골조(★1) (2) 무한집합을 주면 원소나열법에 ⋯ 표기가 필요해져 ★2 (3) 두 집합의 벤다이어그램을 겹쳐 그리게 하면 다음 단원(포함관계) 선행이라 ★2."
```

```yaml
- id: GN-CM2-122-293
  page: 122
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    조건제시법으로 주어진 네 집합 A(6의 양의 약수)·B(9의 양의 배수)·C(1<x<5인 자연수)·D(2<x<4인 짝수) 중 ⑴유한집합 ⑵무한집합 ⑶공집합인 것을 모두 고르기.
  category: "네 집합을 원소나열 → 원소 개수로 유한·무한·공집합 분류"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "유한집합·무한집합·공집합의 분류"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    A·C 는 원소를 세면 끝, B 는 9, 18, 27, ⋯ 로 끝나지 않는다. D 는 2와 4 사이에 짝수가 없어 공집합이고, 공집합도 원소 개수가 0인 유한집합이므로 ⑴에도 함께 들어간다 — 이 두 겹이 유일한 함정이다.
    익히기 ★1 출발 · 통찰 0 · M_total 6(중립) → ★1. [분류 이슈] 공집합이 유한집합에 포함되는 이중 판정 때문에 체감은 ★2 에 가깝다.
  tier: star_1
  mechanism_primary: "네 집합을 각각 원소나열 → 개수가 유한인지 판정 → 원소가 없는 것은 공집합이면서 유한집합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $A$, $C$, $D$ ⑵ $B$ ⑶ $D$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/122-293.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "6·9 를 다른 수로, C·D 의 부등식 범위를 바꿀 수 있다. 제약: 네 집합 중 정확히 하나가 공집합, 하나가 무한집합이어야 세 소문항의 답이 갈린다. D 의 범위는 해당 조건의 수가 하나도 없도록 좁게."
    creative: "(1) 공집합을 만드는 조건을 '2<x<4인 정수'(=3, 공집합 아님)로 바꾸면 함정이 반전(★1 유지) (2) n(A)+n(C) 같은 개수 계산을 붙이면 ★2 (3) 조건에 이차부등식을 넣으면 선행 도구가 들어와 ★2."
```

```yaml
- id: GN-CM2-122-294
  page: 122
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑶ 세 집합의 원소의 개수 n(A) 구하기. ⑴ 2부터 20까지의 짝수 ⑵ x²+1=0 인 실수 ⑶ |x|<2 인 정수.
  category: "각 집합을 원소나열 → 개수 세기"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "유한집합의 원소의 개수 n(A) 구하기(공집합 포함)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴은 2×1 부터 2×10 까지라 10개, ⑵는 제곱해서 -1 이 되는 실수가 없어 공집합이므로 0, ⑶은 -1, 0, 1 의 3개. 세 소문항이 각각 다른 함정(개수 세기·허근·절댓값 경계)을 하나씩 쥐고 있지만 각각은 한 줄이다.
    익히기 ★1 출발 · 통찰 0 · M_total 6(중립) → ★1.
  tier: star_1
  mechanism_primary: "각 집합을 원소나열(또는 원소 없음 확인) → n(A) 로 개수 표기"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $10$ ⑵ $0$ ⑶ $3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/122-294.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴의 상한 20을 30·50 으로(개수는 등차수열 항 수로 계산), ⑶의 2를 3·5 로 바꿀 수 있다. 제약: ⑵는 실근이 없는 형태(x²+k=0, k>0)를 유지해야 n=0 이 나온다."
    creative: "(1) ⑶을 |x|≤2 로 바꾸면 경계가 포함돼 5개(★1 유지, 함정 이동) (2) ⑵의 조건을 '실수' 대신 '복소수'로 바꾸면 n=2 (3) n(A)의 값을 주고 조건의 미지수를 구하게 하면 역방향이라 ★3."
```

### 필수·발전 예제

```yaml
- id: GN-CM2-123-e1
  page: 123
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    다섯 모임 중 집합인 것 2개 고르기. 5지선다(키가 작은·예쁜·170cm에 가까운 등 주관적 표현 포함).
  category: "집합의 정의(기준의 명확성) 판정"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "집합의 뜻 — 기준이 명확한 모임 판별"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    '작은' '예쁜' '가까운'은 사람마다 기준이 달라 제외되고, 혈액형 B형과 3<x<10 인 자연수만 누가 판정해도 같은 답이 나온다. 정의 한 줄 즉답.
    필수 예제 ★2 출발이나 통찰 0 · M_total 4 · 단계 1 → −1 하여 ★1. [분류 이슈] 벤더 「필수」 라벨과 1단 차이 — 기록만 함.
  tier: star_1
  mechanism_primary: "각 선지의 기준이 객관적인지 판정 → 명확한 것만 집합"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "③, ⑤"
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/123-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑤의 범위 3<x<10 을 다른 구간으로, 혈액형을 다른 객관적 속성(출생 월·학번)으로. 제약: 정답이 2개라는 발문과 개수를 맞춘다."
    creative: "(1) 선지 하나를 '원소가 없지만 기준은 명확한' 모임(1보다 작은 자연수)으로 바꾸면 공집합 함정이 추가돼 ★2 (2) 집합인 것의 원소 개수를 함께 묻기(★2) (3) 집합이 아닌 이유를 고르는 형태로 뒤집기(★1 유지)."
```

```yaml
- id: GN-CM2-123-e2
  page: 123
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    4의 양의 배수의 집합 A, 8의 양의 약수의 집합 B에 대하여 ∈·∉ 로 쓴 다섯 명제 중 옳은 것 고르기.
  category: "두 집합 원소나열 → 각 선지의 ∈·∉ 주장 대조"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "집합과 원소 사이의 관계(배수·약수 집합의 ∈, ∉ 판정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    A={4, 8, 12, ⋯}, B={1, 2, 4, 8} 을 먼저 나열해 두면 다섯 명제는 대조 작업이 된다. 배수와 약수를 뒤바꾸면 선지 전체가 통째로 뒤집히는 것이 이 문제의 유일한 함정이고, 부정형(∉)이 섞여 있어 판정 방향도 매번 바뀐다.
    필수 ★2 출발 · M_total 5 이지만 두 집합 나열과 부정형 판정이 있어 −1 하지 않고 ★2 유지.
  tier: star_2
  mechanism_primary: "A·B 를 원소나열 → 각 선지의 ∈/∉ 주장을 나열된 원소와 대조"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/123-e2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "4·8 을 다른 쌍(3의 배수·12의 약수 등)으로, 선지에 쓰는 수를 바꿀 수 있다. 제약: 배수 집합은 무한이므로 선지 수를 작게 잡고, 두 집합에 모두 들어가는 수(여기서는 4, 8)를 최소 하나 남겨야 혼동 함정이 산다."
    creative: "(1) '옳지 않은 것'으로 뒤집기(★2 유지) (2) A, B 를 조건제시법으로 주면 번역이 한 겹 붙어 ★2 (3) A∩B 의 원소를 묻게 하면 다음 단원 선행이라 ★3."
```

```yaml
- id: GN-CM2-123-295
  page: 123
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    다섯 모임 중 집합인 것 2개 고르기. 5지선다(⑤ '1보다 크고 2보다 작은 자연수의 모임'은 해당 수가 없음).
  category: "집합의 정의 판정 → 원소가 없어도 기준이 명확하면 집합"
  M: {s: 1, k: 1, a: 1, t: 2}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "집합의 뜻 — 기준이 명확한 모임 판별(공집합 포함)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    '작은' '유명한' '잘하는'을 걸러내면 남는 것은 3월에 태어난 학생과 ⑤뿐이다. ⑤는 1과 2 사이의 자연수가 하나도 없지만 기준은 누구에게나 같으므로 공집합이라는 집합이다 — 원소의 유무와 집합 여부를 혼동하지 않는 것이 핵심.
    확인체크 ★1 출발 · 통찰 0 → ★1.
  tier: star_1
  mechanism_primary: "각 모임의 기준이 객관적인지 판정 → 원소가 없어도 기준이 명확하면 집합"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "④, ⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/123-295.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑤의 구간 1<x<2 를 다른 빈 구간(4<x<5 인 자연수)으로. 제약: 구간 안에 해당 수가 하나도 없어야 공집합 함정이 유지된다."
    creative: "(1) 주관적 표현을 늘리고 객관적 선지를 하나만 남기면 정답 개수가 바뀜(★1 유지) (2) 공집합인 선지의 원소 개수를 함께 묻기(★2) (3) '집합이 아닌 것'을 고르게 하면 부정형 판정이 추가돼 ★1~2."
```

```yaml
- id: GN-CM2-123-296
  page: 123
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    이차부등식 x²-8x+12<0 의 정수인 해의 집합을 A라 할 때 ∈·∉ 로 쓴 다섯 명제 중 옳지 않은 것 고르기.
  category: "이차부등식 풀이 → 해 구간의 정수 원소 확정 → 선지 대조"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "부등식의 해 구간 2<x<6 을 정수 원소 집합 {3, 4, 5} 로 옮겨야 ∈·∉ 판정이 가능"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "이차부등식의 정수해 집합과 원소 판정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (x-2)(x-6)<0 에서 2<x<6, 정수는 3, 4, 5 뿐이다. 부등호가 등호를 포함하지 않아 경계 2와 6이 빠지고, 그래서 ③(2∈A)이 옳지 않은 선지가 된다.
    확인체크 ★1 출발이지만 선행 단원의 이차부등식을 실제로 풀어 연속 구간을 이산 원소로 옮기는 단계(RT d1)와 경계 함정이 있어 +1 하여 ★2.
  tier: star_2
  mechanism_primary: "x²-8x+12<0 인수분해 → 2<x<6 → 정수 원소 {3, 4, 5} → 각 선지 대조"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/123-296.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차부등식의 계수를 바꿔 해 구간을 이동할 수 있다. 제약: 두 근이 정수여야 인수분해로 풀리고, 구간 안 정수가 3개 안팎이어야 선지 다섯 개를 참·거짓으로 고르게 배치할 수 있다. 경계값을 선지에 반드시 하나 넣어야 함정이 산다."
    creative: "(1) 부등호를 ≤ 로 바꾸면 경계 2, 6 이 원소가 되어 정답 선지가 이동(★2 유지) (2) n(A) 를 묻기(★2) (3) 부등식에 문자 계수를 넣어 A의 원소 개수가 주어진 값이 되게 하면 역방향이라 ★3."
```

```yaml
- id: GN-CM2-124-e3
  page: 124
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑷ 원소나열법으로 주어진 집합은 조건제시법으로, 조건제시법으로 주어진 집합은 원소나열법으로 바꿔 쓰기.
  category: "원소의 공통 성질 요약 ↔ 조건을 만족하는 수 나열"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "집합의 표현 방법 — 원소나열법과 조건제시법의 상호 변환"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 1, 2, 5, 10 은 10의 양의 약수, ⑵ 3, 6, 9, ⋯ 는 3의 양의 배수로 묶인다. ⑶⑷는 반대로 조건을 만족하는 수를 작은 것부터 쓰되, ⑶은 1<x<14 라 2부터 12까지, ⑷는 무한집합이라 ⋯ 표기가 필요하다.
    필수 ★2 출발 유지 — 네 소문항의 방향이 번갈아 바뀌지만 각각은 표준 번역이고 통찰은 없다.
  tier: star_2
  mechanism_primary: "나열된 원소의 공통 성질을 한 문장으로 요약 → 조건제시법 / 조건을 만족하는 수를 작은 것부터 나열 → 원소나열법"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\{x \mid x$는 $10$의 양의 약수$\}$ ⑵ $\{x \mid x$는 $3$의 양의 배수$\}$ ⑶ $\{2,\,4,\,6,\,8,\,10,\,12\}$ ⑷ $\{1,\,4,\,7,\,10,\,\cdots\}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/124-e3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "10·3 을 다른 수로, ⑶의 구간과 ⑷의 나머지 조건(3으로 나눈 나머지 1 → 5로 나눈 나머지 2)을 바꿀 수 있다. 제약: 원소나열법으로 줄 집합은 공통 성질이 한 문장으로 떨어져야 하고(약수·배수·자릿수), 무한집합에는 ⋯ 를 쓴다."
    creative: "(1) 유한·무한을 섞어 ⋯ 표기 여부를 판단하게 하기(★2 유지) (2) 같은 집합을 나타내는 조건제시법이 여러 개임을 보이고 옳지 않은 표현을 고르게 하면 대조가 늘어 ★2~3 (3) 두 조건의 교집합을 나열하게 하면 다음 단원 선행 ★3."
```

```yaml
- id: GN-CM2-124-e4
  page: 124
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴⑵ A={0, 1, 2} 일 때 B={x+y | x∈A, y∈A}, C={xy | x∈A, y∈A} 를 각각 원소나열법으로.
  category: "모든 순서쌍의 값 계산 → 중복 제거 → 원소나열"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "조건제시법으로 정의된 집합의 원소나열(x+y·xy 꼴)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x 와 y 가 각각 A의 세 원소를 독립으로 훑으므로 9쌍을 표로 계산한다. 합은 0부터 4까지 모두 나오고, 곱은 0이 다섯 번·2가 두 번 나오지만 집합의 원소는 한 번만 쓴다. x=y 도 허용된다는 점(x≠y 조건이 없음)을 놓치면 0과 4가 빠진다.
    필수 ★2 출발 유지 — M_total 7 이지만 통찰 없이 조직적 나열과 중복 제거로 끝난다.
  tier: star_2
  mechanism_primary: "x·y 의 순서쌍 9개에 대한 값을 표로 계산 → 중복 원소 제거 → 원소나열"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $B=\{0,\,1,\,2,\,3,\,4\}$ ⑵ $C=\{0,\,1,\,2,\,4\}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/124-e4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A의 원소를 {1, 2, 3}·{-1, 0, 1} 등으로 바꿀 수 있다. 제약: 중복이 생기는 조합(0을 포함하거나 합이 겹치는 수)을 남겨야 '중복 제거' 함정이 살고, 원소가 4개를 넘으면 순서쌍이 16개로 늘어 계산만 무거워진다."
    creative: "(1) x≠y 조건을 붙이면 대각선이 빠져 답이 바뀜(★2 유지, 126-307 골조로 연결) (2) n(B) 만 묻기(★2) (3) B가 주어지고 A를 찾게 하면 역방향이라 ★4."
```

```yaml
- id: GN-CM2-124-297
  page: 124
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    집합 {3, 5, 7} 을 조건제시법으로 바르게 나타낸 것 고르기. 5지선다.
  category: "각 선지의 조건을 원소나열로 되돌려 주어진 집합과 대조"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "원소나열법 집합을 조건제시법으로 옮기기(선지 대조)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    선지마다 조건을 원소로 되돌려 {3, 5, 7} 과 정확히 같은지 본다. ①②에는 9가, ④에는 2가, ⑤에는 1이 더 붙는다. x=2n+1, n=1, 2, 3 만 정확히 세 원소를 만든다. '이상·이하'와 '보다 큰'의 경계, 소수와 홀수의 차이가 함정.
    확인체크 ★1 출발이나 선지 다섯 개를 각각 나열해 대조해야 하고 M_total 7 → +1 하여 ★2.
  tier: star_2
  mechanism_primary: "각 선지의 조건을 원소나열로 되돌림 → {3, 5, 7} 과 정확히 일치하는 것 선택"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/124-297.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "목표 집합을 {2, 3, 5, 7}·{4, 6, 8} 등으로 바꾸고 선지의 경계를 한 칸씩 어긋나게 설계. 제약: 오답 선지는 원소가 정확히 하나씩만 더 붙거나 빠져야 변별이 된다."
    creative: "(1) '옳지 않은 것'으로 뒤집기(★2 유지) (2) 선지에 x=2n+1 형태의 n 범위를 여러 개 두면 매개변수 해석이 늘어 ★2~3 (3) 조건제시법을 주고 원소나열을 쓰게 하면 방향이 뒤집힌 ★1~2."
```

```yaml
- id: GN-CM2-124-298
  page: 124
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    A={x | x는 0<x<10 인 2의 배수} 일 때 B={y | y=3x-2, x∈A} 를 원소나열법으로.
  category: "A를 원소나열 → 각 원소를 y=3x-2 에 대입 → B 나열"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "조건제시법 집합의 상집합(y=ax+b 대입) 원소나열"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    A={2, 4, 6, 8} 을 먼저 확정하고 3x-2 에 차례로 대입하면 끝난다. 0<x<10 의 부등호에 등호가 없어 10이 A에 들어가지 않는 것만 주의. 일대일 대응이라 중복도 생기지 않는다.
    확인체크 ★1 출발 · 통찰 0 · M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "A를 원소나열 → 각 원소를 y=3x-2 에 대입 → B를 원소나열"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\{4,\,10,\,16,\,22\}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/124-298.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A의 조건(2의 배수 → 3의 배수, 0<x<10 → 0<x<15)과 대응식 3x-2 의 계수를 바꿀 수 있다. 제약: A의 원소가 4~5개여야 나열이 끝나고, 대응식이 일차식이면 중복이 생기지 않는다."
    creative: "(1) 대응식을 y=x² 처럼 비단사 함수로 바꾸면 중복 제거가 필요해 ★2 (2) 모든 원소의 합을 묻기(★2) (3) B가 주어지고 A를 역추적하게 하면 ★3."
```

```yaml
- id: GN-CM2-124-299
  page: 124
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    A={x | x=2^p×5^q, p, q는 자연수} 의 원소가 아닌 것 고르기. 5지선다(10, 60, 100, 250, 400).
  category: "각 선지를 소인수분해 → 2와 5 이외의 소인수·지수 0 여부 확인"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'A의 원소이다'를 '소인수가 2와 5뿐이고 두 지수가 모두 1 이상이다'라는 판정 가능한 조건으로 바꿔 씀"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "지수 꼴 조건제시법 집합의 원소 판별(소인수분해)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    조건을 그대로 쓸 수는 없고 '소인수가 2와 5뿐'이라는 판정 기준으로 옮겨야 한다. 60=2²×5×3 의 3이 걸려 원소가 아니다. p, q 가 자연수라 지수 0 이 허용되지 않는다는 점(2나 5 한쪽만 있는 수도 원소가 아님)이 숨은 함정이다.
    확인체크 ★1 출발 · M_total 8 · EQV d1 → +1 하여 ★2.
  tier: star_2
  mechanism_primary: "각 선지를 소인수분해 → 소인수가 2와 5뿐이고 두 지수가 모두 1 이상인지 확인"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/124-299.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 2·5 를 2·3 이나 3·5 로, 선지의 다섯 수를 바꿀 수 있다. 제약: 오답이 되는 수는 정확히 하나여야 하고, 그 수만 제3의 소인수를 갖거나 한쪽 밑이 빠져야 한다. 선지 수가 세 자리를 크게 넘으면 소인수분해 부담만 늘어난다."
    creative: "(1) p, q 를 '음이 아닌 정수'로 바꾸면 1·2·5·25 도 원소가 되어 함정 위치가 이동(★2 유지) (2) 100 이하의 원소를 모두 나열하거나 개수를 묻기(★3) (3) 원소 중 가장 작은 세 수의 합처럼 나열+계산을 붙이면 ★3."
```

```yaml
- id: GN-CM2-125-e5
  page: 125
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    다섯 집합 중 무한집합인 것 2개 고르기. 5지선다(1<x<2 인 기약분수, x²-3x+2<0 인 유리수 등).
  category: "원소나열 시도 → 끝나면 유한, 구간 안 유리수처럼 끝나지 않으면 무한"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'1<x<2 인 기약분수·유리수'를 '두 수 사이에는 유리수가 조밀하게 무한히 있다'로 바꿔 판정 — 원소나열로는 결론이 나지 않음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "유한집합과 무한집합의 판별(공집합·조밀한 유리수 구간 포함)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ①은 n이 네 개라 유한, ④는 세 자리 자연수라 개수가 크지만 유한, ②는 9보다 큰 한 자리 홀수가 없어 공집합이므로 유한이다. ③과 ⑤는 모두 1과 2 사이의 유리수로, 원소를 세는 방식으로는 끝나지 않고 조밀성으로 판정해야 한다. ⑤의 이차부등식을 풀어 1<x<2 를 얻는 것이 ③과 같은 구조임을 드러낸다.
    필수 ★2 출발 · 통찰 1개(d2)는 +1 조건(2개 이상 또는 d3) 미달 → ★2.
  tier: star_2
  mechanism_primary: "각 집합의 원소나열을 시도 → 개수가 끝나면 유한(공집합 포함) → 구간 안 유리수는 조밀해 무한"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③, ⑤"
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/125-e5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "①의 n 범위, ④의 자릿수, ⑤의 이차부등식 계수를 바꿀 수 있다. 제약: 무한집합이 되는 선지는 '구간 안의 유리수·실수' 또는 '끝없이 이어지는 배수'여야 하고, 공집합 선지는 조건을 만족하는 수가 하나도 없어야 한다."
    creative: "(1) ③의 기약분수를 '정수'로 바꾸면 유한(공집합)이 되어 정답이 이동(★2 유지) (2) 유한집합의 원소 개수까지 구하게 하면 ★3 (3) '유한집합이면서 공집합이 아닌 것'처럼 조건을 겹치면 판정이 두 겹이 되어 ★3."
```

```yaml
- id: GN-CM2-125-e6
  page: 125
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    n(A) 를 비교·계산한 다섯 명제 중 옳은 것 고르기. 5지선다(n({0}), n({∅, 3}), n(∅), n({∅}) 등).
  category: "각 집합의 원소를 세어 n 값을 확정 → 다섯 명제의 등호·부등호 확인"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "유한집합의 원소의 개수 n(A) — ∅과 {∅}, 0의 구별"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    n({0})=1(원소가 0 하나), n(∅)=0(원소 없음), n({∅})=1(∅ 자체가 원소)을 정의대로 적용하면 끝난다. ③은 3-2=1 로 참. 원소가 0이라는 것과 원소가 없다는 것, 공집합과 공집합을 원소로 갖는 집합을 구별하는 표기 함정이 전부이고 계산은 한 자리 뺄셈뿐이다.
    필수 ★2 출발 유지 — 함정 밀도는 높지만 각 판정은 정의 한 줄.
  tier: star_2
  mechanism_primary: "각 집합의 원소를 세어 n 값을 적음 → 다섯 명제의 등호·부등호 확인"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/125-e6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 집합의 원소 수와 ⑤의 합 값을 바꿀 수 있다. 제약: ∅ 과 {∅}, 0 을 원소로 갖는 집합이 적어도 하나씩 들어가야 표기 함정이 유지되고, 참인 선지는 하나만 남겨야 한다."
    creative: "(1) '옳지 않은 것'으로 뒤집기(★2 유지) (2) {∅, {∅}} 처럼 원소가 집합인 경우를 넣으면 표기 함정이 깊어져 ★3 (3) n(A)=3 인 A를 모두 쓰게 하면 다음 단원(부분집합) 선행 ★3."
```

```yaml
- id: GN-CM2-125-300
  page: 125
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    보기 ㄱ~ㄹ 중 유한집합인 것 모두 고르기. (ㄴ은 {∅}, ㄷ은 1<x<3 인 홀수의 집합.)
  category: "각 집합의 원소 개수를 셈 → 셀 수 있으면 유한집합"
  M: {s: 1, k: 1, a: 1, t: 2}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "유한집합·무한집합 판별({∅}·공집합 표기 포함)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ㄱ(10보다 큰 홀수)과 ㄹ(짝수)은 끝없이 이어져 무한. ㄴ은 ∅ 하나를 원소로 갖는 원소 1개짜리 집합이고, ㄷ은 1과 3 사이에 홀수가 없어 공집합(원소 0개)이다. 둘 다 유한집합이라는 표기 판정이 전부.
    확인체크 ★1 출발 · 통찰 0 · M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "각 집합의 원소 개수를 셈 → 셀 수 있으면 유한({∅}은 1개, 공집합은 0개)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "ㄴ, ㄷ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/125-300.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "ㄱ의 기준 10, ㄷ의 구간 1<x<3, ㄹ의 배수를 바꿀 수 있다. 제약: 무한집합 보기와 유한집합 보기가 2:2 로 섞이고, 공집합 보기는 구간 안에 해당 수가 하나도 없어야 한다."
    creative: "(1) ㄷ의 구간을 1<x<5 로 넓히면 원소 3이 생겨 여전히 유한(함정 약화, ★1 유지) (2) 무한집합인 것을 고르게 뒤집기(★1~2) (3) 각 보기의 n 값을 함께 쓰게 하면 ★2."
```

```yaml
- id: GN-CM2-125-301
  page: 125
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    A(50보다 작은 7의 양의 배수)·B(x²=-4 인 실수)·C(|x|=4) 에 대하여 n(A)+n(B)-n(C) 의 값 구하기.
  category: "세 집합을 각각 원소나열 → n 값을 구해 식에 대입"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "여러 집합의 원소의 개수 n(A) 조합 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    A={7, 14, ⋯, 49} 로 7개(50 미만이라 49까지), 제곱해서 -4 가 되는 실수는 없어 n(B)=0, |x|=4 는 ±4 두 개다. 집합마다 함정의 종류가 다르지만(배수의 상한·허근·절댓값의 두 해) 각각은 한 줄로 끝난다.
    확인체크 ★1 출발 · 통찰 0 · M_total 6(중립) → ★1.
  tier: star_1
  mechanism_primary: "세 집합을 각각 원소나열 → n(A)=7, n(B)=0, n(C)=2 → 식에 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/125-301.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A의 배수 7과 상한 50, C의 절댓값 4를 바꿀 수 있다. 제약: 상한이 배수의 배수가 되면 '미만'과 '이하'의 차이가 드러나 함정이 살고, B는 실근이 없는 형태(x²=-k, k>0)를 유지해야 n=0 이 나온다."
    creative: "(1) C의 조건을 |x|<4 인 정수로 바꾸면 n(C)=7 (★1 유지, 계산만 이동) (2) 식을 n(A)-n(B)+n(C) 처럼 부호를 바꾸기(★1) (3) 주어진 값이 되도록 상한을 정하게 하면 역방향이라 ★3."
```

### 연습문제 STEP 1

```yaml
- id: GN-CM2-126-302
  page: 126
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    보기 ㄱ~ㅁ 다섯 모임 중 집합인 것 모두 고르기. (ㄷ '1보다 작은 자연수의 모임'은 해당 수가 없음, ㅁ은 '20에 가까운 수'.)
  category: "기준의 객관성 판정 → 원소가 없어도 기준이 명확하면 집합"
  M: {s: 1, k: 1, a: 1, t: 2}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "집합의 뜻 — 기준이 명확한 모임 판별(공집합 포함)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ㄴ '좋아하는', ㅁ '가까운'은 사람마다 기준이 달라 집합이 아니다. ㄷ은 1보다 작은 자연수가 하나도 없지만 기준 자체는 누구에게나 같으므로 공집합이라는 집합이고, 이것이 이 문제가 노리는 유일한 함정이다.
    STEP 1 ★2 출발 · M_total 5 이지만 공집합 함정 때문에 −1 하지 않고 ★2 유지.
  tier: star_2
  mechanism_primary: "각 모임의 기준이 객관적인지 판정 → 원소가 없어도 기준이 명확하면 집합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "ㄱ, ㄷ, ㄹ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/126-302.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "ㄱ의 기준 10, ㄷ의 기준 1, ㅁ의 20·30 을 바꿀 수 있다. 제약: 공집합이 되는 보기를 반드시 하나 남기고, 주관적 표현 보기는 두 개 정도로 유지해야 정답 개수가 3개로 떨어진다."
    creative: "(1) '우리나라 광역시'를 '큰 도시'로 바꾸면 집합이 아니게 되어 정답이 이동(★2 유지) (2) 집합인 것의 원소 개수를 함께 묻기(★2) (3) 집합이 아닌 이유를 서술형으로 요구하면 Mₛ만 오르고 ★2."
```

```yaml
- id: GN-CM2-126-303
  page: 126
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    A={x | x=2k²+1, k≤3 인 자연수} 에 대하여 B={y | y는 x를 4로 나누었을 때의 나머지, x∈A} 의 모든 원소의 합 구하기.
  category: "A 원소나열 → 각 원소의 나머지 → 중복 제거 → 합"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "조건제시법 상집합(나머지)의 원소나열과 원소의 합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    k=1, 2, 3 에서 A={3, 9, 19}, 이를 4로 나눈 나머지는 차례로 3, 1, 3 이므로 B={1, 3} 이고 합은 4다. 나머지 3이 두 번 나와도 집합의 원소로는 한 번만 쓴다는 것이 이 문제의 전부 — 중복을 지우지 않으면 7이 된다. k≤3 인 자연수라 k=0 이 들어가지 않는 것도 함께 확인해야 한다.
    STEP 1 ★2 출발 유지(M_total 7 이지만 통찰 없이 대입·중복 제거).
  tier: star_2
  mechanism_primary: "k=1, 2, 3 대입해 A 나열 → 각 원소를 4로 나눈 나머지 → 중복 제거해 B → 원소의 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/126-303.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "2k²+1 의 계수와 나누는 수 4, k의 상한 3을 바꿀 수 있다. 제약: 나머지에 중복이 반드시 생기도록 설계해야 하고(같은 나머지가 두 번 이상), k 상한이 커지면 계산만 늘고 함정은 그대로다."
    creative: "(1) n(B) 를 묻기(★2 유지) (2) k의 상한을 없애고 모든 자연수로 두면 나머지의 주기를 찾아야 해 I-PD 가 생겨 ★3 (3) B가 주어지고 나누는 수를 찾게 하면 역방향이라 ★3."
```

```yaml
- id: GN-CM2-126-304
  page: 126
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    n(A) 를 비교·계산한 다섯 명제 중 옳은 것 고르기. 5지선다(n(A)=0 이면 A={∅} 인가 포함).
  category: "각 집합의 원소를 세어 n 값을 확정 → 다섯 명제 판정"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "유한집합의 원소의 개수 n(A) — ∅과 {∅}의 구별"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    n({∅, 1})=2, n({0})=n({2})=1, n({a, c})=n({f, g})=2 로 ③만 참이다. ④는 n(A)=0 이면 A=∅ 이지 {∅} 가 아니라는 표기 함정이고, 원소가 무엇이든(숫자든 문자든 ∅ 이든) 개수만 본다는 것이 이 유형의 핵심이다.
    STEP 1 ★2 유지 — 125-e6 과 같은 골조이며 ④의 A={∅} 선지가 하나 더 얹혔다.
  tier: star_2
  mechanism_primary: "각 집합의 원소를 세어 n 값을 적음 → 다섯 명제의 등호·부등호와 ∅·{∅} 구별 확인"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/126-304.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 집합의 원소 수와 ⑤의 차 값을 바꿀 수 있다. 제약: ∅ 과 {∅} 를 구별하게 하는 선지를 반드시 하나 두고, 참인 선지는 하나만 남긴다."
    creative: "(1) ③을 문자 집합 대신 원소 개수가 다른 집합으로 바꾸면 정답이 이동(★2 유지) (2) n(A)=0 인 A를 직접 쓰게 하는 서술형(★2) (3) 원소가 집합인 {∅, {∅}} 를 넣으면 표기 함정이 깊어져 ★3."
```

### 연습문제 STEP 2

```yaml
- id: GN-CM2-126-305
  page: 126
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    X={x | x²-ax+4≤0, x는 실수} 가 공집합이 되도록 하는 정수 a의 개수 구하기.
  category: "해집합이 공집합 → 모든 실수에서 부등식이 성립하지 않음 → 판별식 조건 → 정수 개수"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'X가 공집합'을 '모든 실수 x에서 x²-ax+4>0', 다시 '판별식 D<0'으로 바꿔 씀 — D=0 이면 한 점이 해가 되므로 등호를 빼는 것까지가 동치 변환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "해집합이 공집합이 되는 조건(이차부등식·판별식)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    부등식을 푸는 문제가 아니라 해가 하나도 없을 조건을 찾는 문제다. 아래로 볼록한 이차함수가 x축과 만나지 않아야 하므로 D=a²-16<0, 즉 -4<a<4 이고 정수는 -3부터 3까지 7개다. ≤ 이므로 D=0(a=±4)을 포함시키면 접점 하나가 해가 되어 X가 공집합이 아니게 된다 — 경계 처리가 이 문제의 전부.
    STEP 2 ★3 출발 유지(통찰 1개·d2 는 +1 조건 미달).
  tier: star_3
  mechanism_primary: "X=∅ ⟺ 모든 실수에서 x²-ax+4>0 ⟺ D=a²-16<0 → -4<a<4 → 정수 개수"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/126-305.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수항 4를 다른 완전제곱수(9·16)로 바꾸면 -2√c<a<2√c 구간이 달라진다. 제약: 4c 가 완전제곱수여야 구간 끝이 정수로 떨어져 개수 세기가 깔끔하고, 일차항 계수를 문자로 유지해야 골조가 산다."
    creative: "(1) 부등호를 <0 으로 바꾸면 D≤0 이 되어 경계 정수 2개가 추가(★3 유지, 함정 반전) (2) X의 원소가 단 하나가 되도록 하는 a를 묻기(D=0, ★3) (3) X가 공집합이 아닐 조건으로 뒤집으면 여집합 범위를 다뤄야 해 ★3~4."
```

```yaml
- id: GN-CM2-126-306
  page: 126
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    A={(x, y) | x²+y²=25, x, y는 정수}, B={x | x는 k 이하의 자연수} 에 대하여 n(A)+n(B)=25 일 때 자연수 k 구하기.
  category: "원 위의 정수 격자점 개수 세기 → n(B)=k 로 방정식 풀기"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "원의 방정식 x²+y²=25 를 '25를 두 제곱수의 합으로 쓰는 방법'이라는 개수 세기 문제로 옮김(원소가 순서쌍)"
    - step: 2
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "(3, 4) 한 쌍에서 부호 교체와 x·y 교환의 대칭으로 8개를 빠짐없이 얻고, 축 위의 (±5, 0)·(0, ±5) 4개를 따로 더함"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "격자점 집합의 원소의 개수(x²+y²=r²의 정수해 세기)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    25=5²+0²=3²+4² 두 가지뿐이므로 축 위의 (±5, 0)·(0, ±5) 4개와 (±3, ±4)·(±4, ±3) 8개를 합쳐 n(A)=12 다. n(B)=k 이므로 k=13. 원소가 순서쌍이라는 것과 부호·좌표 교환을 대칭으로 훑는 것이 핵심이고, 대칭을 의식하지 않으면 개수를 빠뜨린다.
    STEP 2 ★3 출발 · 통찰 2개로 +1 후보이나 두 통찰 모두 얕고(d1·d2) 실제 부담은 열거라 ★3 유지. [분류 이슈] 후보 ★3/★4.
  tier: star_3
  mechanism_primary: "25를 두 제곱수의 합으로 분해 → 부호·좌표 교환 대칭으로 정수 순서쌍 12개 → k=25-12"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$13$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/126-306.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "반지름의 제곱 25를 두 제곱수 합 표현이 있는 다른 수(50=1+49=25+25, 100=36+64)로, 우변 25를 다른 값으로 바꿀 수 있다. 제약: n(A) 가 우변보다 작아야 k가 자연수로 남고, 반지름 제곱이 제곱수여야 축 위의 격자점 4개가 생긴다."
    creative: "(1) A의 조건을 x²+y²≤25 로 바꾸면 내부 격자점까지 세어야 해 ★4 (2) B를 'k 이하의 짝수'로 바꾸면 n(B) 가 k/2 꼴이 되어 경우가 갈림(★3~4) (3) n(A) 만 묻고 k를 없애면 ★3 이하로 내려간다."
```

### 연습문제 실력 UP

```yaml
- id: GN-CM2-126-307
  page: 126
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    서로 다른 세 자연수를 원소로 갖는 A={a, b, c} 에 대하여 서로 다른 두 원소의 합의 집합 B={x+y | x∈A, y∈A, x≠y}={6, 9, 11} 일 때 A의 원소 중 가장 큰 수 구하기.
  category: "쌍합 3개를 순서로 대응 → 세 식을 더해 총합 통합 → 최대 원소 역산"
  M: {s: 2, k: 1, a: 3, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "결과로 주어진 쌍합 집합 B에서 원래 원소 a, b, c 를 역추적 — a<b<c 로 순서를 고정해야 대응이 하나로 정해짐"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "세 쌍합을 각각 구하려 연립하는 대신 모두 더해 2(a+b+c)=26 으로 통합 → a+b+c=13 한 줄"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "쌍합 집합에서 원래 집합의 원소 역추적(합 통합)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    a<b<c 로 두면 가장 작은 쌍합이 a+b=6, 가장 큰 쌍합이 b+c=11, 남은 것이 a+c=9 로 강제된다. 세 식을 더하면 2(a+b+c)=26 이므로 a+b+c=13 이고, 가장 큰 수 c는 13에서 자신이 빠진 쌍합 a+b=6 을 뺀 값이다. 개별 연립을 풀지 않고 총합으로 통합하는 것이 골조이고, x≠y 때문에 쌍합이 정확히 3개라는 것이 대응의 근거다.
    실력 UP ★4 출발 · 통찰 2개(BW·CON d2) → ★4 유지(★5 는 통찰 3개 이상 + SC/VF/SYM/XU 필요).
  tier: star_4
  mechanism_primary: "a<b<c 순서 고정 → 쌍합 3개를 B의 세 원소에 대응 → 세 식을 더해 a+b+c=13 → c=13-(a+b)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/126-307.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "B의 세 원소를 바꿀 수 있다. 제약: 세 원소의 합이 짝수여야 a+b+c 가 정수로 떨어지고, 그 결과 a, b, c 가 모두 서로 다른 자연수여야 한다(각 쌍합이 총합보다 작아야 함)."
    creative: "(1) 가장 작은 원소나 A 자체를 구하게 하면 같은 골조(★4 유지) (2) A의 원소를 4개로 늘리면 쌍합이 6개가 되고 대응 분기가 생겨 ★5 후보 (3) B의 원소가 2개만 주어져 쌍합에 중복이 있으면 경우 나눔과 사후 검증(I-VF)이 붙어 ★5 (4) 원소를 자연수에서 정수로 풀면 부호 경우가 늘어 ★4~5."
```

## 표본 판정 요약 (24문)

- ★ 분포: ★1 10 · ★2 11 · ★3 2 · ★4 1 · ★5 0
- 통찰형 6 (123-296 · 124-299 · 125-e5 · 126-305 · 126-306 · 126-307) · 절차형 18 · premium 0
- 통찰 유형 분포: I-EQV 3 · I-RT 2 · I-SYM 1 · I-BW 1 · I-CON 1 (연 8개 라벨, 최대 depth 2 — 이 범위에 depth 3 은 없다)
- M_total 분포: 4 → 2문 · 5 → 7문 · 6 → 7문 · 7 → 5문 · 8 → 3문 (평균 5.9)
- type_hint 상위: 「집합의 뜻 — 기준이 명확한 모임 판별」 4 · 「n(A) 원소의 개수」 4 · 「유한·무한집합 판별」 3 · 「원소나열법 ↔ 조건제시법 번역」 3 · 「조건제시법 상집합의 원소나열」 3
- 대상층: 하위권 5 · 중하위권 13 · 중위권 4 · 중상위권 2 · 상위권 0
- 그림: 0문 (이 범위에 도형·그래프 문항 없음)
- 구역별 ★ 중앙값: 개념원리 익히기 ★1 · 확인체크 ★1~2 · 필수 예제 ★2 · STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4 — 벤더 신호와 라벨이 대체로 1단 안에서 일치한다.
- 단원 특성: 집합 자체의 도구가 네 개뿐이라 ★3 이상은 집합 안에 들어온 **선행 단원 표현**(126-305 이차부등식·판별식, 126-306 원의 방정식과 격자점)이나 **역방향 구성**(126-307 쌍합)에서만 나왔다. 변형 작업에서도 ★를 올리려면 원소를 만드는 조건 쪽을 건드려야 하고, 나열·대입 절차를 늘리는 것만으로는 ★2 를 넘지 못한다.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CM2-122-293 | 익히기 ★1 출발·통찰 0·M_total 6 으로 ★1 라벨했으나, 공집합 D가 유한집합에도 들어가는 이중 판정 때문에 학생 체감은 ★2 에 가깝다 | ★1 / ★2 |
| GN-CM2-123-e1 | 벤더 「필수」 예제(★2 출발)이나 기준의 객관성 한 줄로 즉답되고 M_total 4 → −1 하여 ★1 라벨. 같은 유형의 확인체크 123-295 와 동급 | ★1 / ★2 |
| GN-CM2-126-306 | 통찰 2개(RT d1 + SYM d2)로 v3.8 의 +1 후보에 걸리지만 두 통찰이 얕고 실제 부담은 격자점 열거라 STEP 2 출발점 ★3 을 유지 | ★3 / ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위에서 반복된 type_hint 는 네 덩어리다 — (1) **집합의 뜻·기준의 명확성**(122-290 · 123-e1 · 123-295 · 126-302), (2) **원소와 집합의 관계 ∈·∉**(122-291 · 123-e2 · 123-296), (3) **표현 방법의 상호 번역**(122-292 · 124-e3 · 124-297)과 그 확장인 **상집합 원소나열**(124-e4 · 124-298 · 126-303), (4) **유한·무한·공집합과 n(A)**(122-293 · 122-294 · 125-e5 · 125-e6 · 125-300 · 125-301 · 126-304).
- 따로 세워야 할 유형: **n(A) 의 ∅·{∅} 표기 판정**(125-e6 · 126-304)은 개수 계산이 아니라 표기 함정이 본질이라 「유한집합의 원소의 개수」와 분리하는 편이 낫다. **집합 조건에 선행 단원 도구가 들어온 문항**(123-296 이차부등식 · 124-299 소인수분해 · 126-305 판별식 · 126-306 격자점)도 집합 단원 유형이 아니라 「조건을 원소로 옮기기」라는 별도 축으로 묶어야 변형 설계가 쉬워진다.
- 통합해도 될 유형: 「집합의 뜻 판별」과 「공집합도 집합인가」는 선지 하나 차이라 한 유형의 난이도 두 단계로 두면 충분하다. 「원소나열법 → 조건제시법」과 그 역방향도 방향만 다른 같은 유형이다.
- base ★ 제안(카탈로그 신설 시): 기준 판별 ★1 · ∈/∉ 판정 ★1~2 · 표현 번역 ★2 · 상집합 원소나열 ★2 · 유한/무한/n(A) ★1~2 · 조건에 선행 도구가 들어온 집합 ★3 · 쌍합 역추적 ★4.
