---
name: mechanism-데이터-GN-CM1-18
description: 개념원리 공통수학1 18 삼차방정식과 사차방정식(1/1 · 157~166쪽 31문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학1 · 전사본 latex-bank/gn-cm1
  section: 18 삼차방정식과 사차방정식
  unit_code: GN-CM1-18
  part: "1/1"
  extract_range: "157~166쪽 · 157-329~166-353"
  total_problems: 31
  unit_total: 31
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm1/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm1/items/<id>.tex
  image_source: latex-bank/gn-cm1/figures/ (crop:fig-163-340.png · crop:fig-166-353.png)
---

# 개념원리 공통수학1 · 18 삼차방정식과 사차방정식 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 공통수학1 157~166쪽, 단원 18 「삼차방정식과 사차방정식」의 31문항 전수를 다룬다. 구역은 「개념원리 익히기」 2문(157-329 · 157-330), 「필수·발전 예제」 16문(필수 예제 6 + 확인체크 10), 「연습문제 STEP 1」 7문, 「연습문제 STEP 2」 4문, 「연습문제 실력 UP」 2문이다. 개념원리 고등의 난이도 신호는 구역과 예제 태그다 — 「개념원리 익히기」는 ★1 출발, tag 「필수」는 ★2, 「연습문제 STEP 1」은 ★2, 「STEP 2」는 ★3, 「실력 UP」은 ★4 출발이다. 이 단원의 확인체크는 예외 없이 바로 앞 필수 예제의 골조를 숫자만 바꿔 반복하므로, 확인체크의 출발점은 짝이 되는 예제와 같은 층(여기서는 ★2)으로 잡고 M_total·통찰로 ±1 조정했다(확인체크 원칙 ★1 출발과 어긋나는 문항은 파일 끝 분류 이슈에 모았다).

단원의 골조는 크게 다섯이다. ⑴ 인수분해·인수정리로 삼·사차방정식 풀기, ⑵ 공통부분 치환(네 일차식 짝 묶기 포함), ⑶ 복이차식(치환이 안 되면 제곱 보정 후 합차), ⑷ 근이 주어진 방정식의 미정계수·근과 계수 관계, ⑸ 근의 조건(중근·허근·실근 개수)에서 계수 범위 역추적, 그리고 부피 조건에서 삼차방정식을 세우는 활용이다. ⑸ 계열은 삼차식이 항상 한 눈에 보이는 유리근(x=±1, x=2 등)을 갖고 (일차)×(이차)로 쪼개진 뒤 이차인수의 판별식과 「그 근이 이미 나온 근과 겹치는가」를 따지는 구조라, 경계·중복 처리가 이 단원 변별의 핵심이다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(유형 코드·depth·근거) · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 설정 변형과 ★ 변동 지점)를 채웠다. 공통수학1은 유형 카탈로그가 없으므로 `type_id`·`base_star` 는 null 이고 `type_hint` 에 유형명을 제안했으며 `effective_star` 는 잠정적으로 `star` 와 같다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-CM1-157-329
  page: 157
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑻ 삼차방정식 여덟 개를 풀기. 이미 인수분해된 꼴, 공통인수로 묶는 꼴, 항 네 개를 2+2 로 묶는 꼴, 세제곱의 합·차 공식 꼴, 완전세제곱 꼴이 차례로 나온다.
  category: '좌변 인수분해 → 각 인수 = 0 → 복소수 범위의 근 전부'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "인수분해로 푸는 삼차방정식(공통인수·2+2 묶기·세제곱 공식)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    좌변이 어떤 인수분해 꼴인지 알아보는 것이 전부다. 소문항마다 도구가 달라지지만(공통인수 · 2+2 묶기 · 세제곱 합차 공식 · 완전세제곱) 각각은 한 줄 판별이라 통찰로 세지 않았다.
    함정은 이차인수에서 나오는 허근을 빠뜨리는 것(T-범위) 하나다. 개념원리 익히기 구역 출발점 ★1 · 통찰 0 · M_total 6 → ★1 유지.
  tier: star_1
  mechanism_primary: "좌변 인수분해(공통인수·묶기·세제곱 공식) → 일차·이차 인수별로 근 → 허근까지 전부 나열"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $x=2$ 또는 $x=\dfrac{5}{2}$ 또는 $x=3$ ⑵ $x=-2$ 또는 $x=\dfrac{3\pm\sqrt{7}\,i}{2}$ ⑶ $x=0$ 또는 $x=\pm 2i$ ⑷ $x=0$ 또는 $x=-2$ 또는 $x=-1$ ⑸ $x=\dfrac{1}{2}$ 또는 $x=\pm i$ ⑹ $x=-2$ 또는 $x=1\pm\sqrt{3}\,i$ ⑺ $x=3$ 또는 $x=\dfrac{-3\pm 3\sqrt{3}\,i}{2}$ ⑻ $x=-2$(삼중근)'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/gn-cm1/items/157-329.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '각 인수의 상수항·계수를 바꿀 수 있음(세제곱 공식은 $x^3\pm a^3$ 의 $a$ 를 2·3·4 로, 완전세제곱은 $(x+a)^3$ 의 $a$ 를). 제약: 세제곱 공식 꼴은 이차인수가 항상 허근을 주므로 답에 허근이 반드시 들어가고, 2+2 묶기 꼴은 공통인수가 남도록 계수를 짝 지어야 함.'
    creative: "(1) 근의 개수나 실근만 묻기(★1 유지) (2) 실근·허근을 구분해 세 근의 합·곱을 묻기(★2) (3) 한 계수를 문자로 바꿔 특정 근을 갖도록 하는 값을 묻기(★2~3 · 161-e4 골조와 결합)."
```

```yaml
- id: GN-CM1-157-330
  page: 157
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑹ 사차방정식 여섯 개를 풀기. 인수분해된 꼴, 공통부분이 이미 보이는 꼴, 공통인수로 묶는 꼴, $x^4-1$ 합차 꼴, 인수정리·2+2 묶기 꼴이 섞여 있다.
  category: '좌변 인수분해(공통인수·합차·묶기) → 이차인수까지 내려 근 전부'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "인수분해로 푸는 사차방정식(공통인수·합차·2+2 묶기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    삼차와 같은 골조에 차수만 하나 올라갔다. ⑹ $x^4-2x^3+x-2$ 만 2+2 로 묶어 $x^3(x-2)+(x-2)$ 를 보는 눈이 필요하지만 교과서가 바로 앞에서 보여 준 꼴이라 통찰로 세지 않았다.
    함정은 ⑶ 의 중근 표기와 허근 누락(T-범위·T-표기)이다. 개념원리 익히기 ★1 출발 · 통찰 0 · M_total 6 → ★1 유지.
  tier: star_1
  mechanism_primary: "공통인수·합차·2+2 묶기로 (일차)(일차)(이차) 까지 분해 → 이차인수의 근(허근 포함)까지 나열"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $x=-3$ 또는 $x=-2$ 또는 $x=1$ 또는 $x=4$ ⑵ $x=1$ 또는 $x=2$ 또는 $x=\dfrac{3\pm\sqrt{17}}{2}$ ⑶ $x=0$(중근) 또는 $x=\pm\sqrt{2}$ ⑷ $x=\pm i$ 또는 $x=-1$ 또는 $x=1$ ⑸ $x=0$ 또는 $x=-2$ 또는 $x=2$ 또는 $x=3$ ⑹ $x=2$ 또는 $x=-1$ 또는 $x=\dfrac{1\pm\sqrt{3}\,i}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/157-330.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "인수의 근(−3·−2·1·4), 공통부분 상수(±2), 합차의 상수($x^4-1$ → $x^4-16$)를 바꿀 수 있음. 제약: ⑵ 처럼 공통부분을 남기려면 두 이차식의 $x^2, x$ 계수가 같아야 하고, 2+2 묶기 꼴은 두 묶음에서 같은 일차인수가 나오도록 계수를 맞춰야 함."
    creative: "(1) 실근의 개수만 묻기(★1) (2) 허근을 제외한 근의 합을 묻기(★2) (3) $x^4-1=0$ 을 네 근의 곱·합으로 확장하거나 $x^4+16=0$ 처럼 치환이 막히는 꼴로 바꾸면 160-e3 골조가 되어 ★3."
```

### 필수·발전 예제

```yaml
- id: GN-CM1-158-e1
  page: 158
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑵ 인수분해 공식이 바로 보이지 않는 삼차·사차방정식을 인수정리로 풀기.
  category: '유리근 후보 대입 → 조립제법으로 낮은 차수로 → 남은 이차식 풀기'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "인수정리를 이용한 삼·사차방정식의 풀이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    후보는 (상수항의 약수)/(최고차항 계수의 약수) 로 정해져 있고, 사차는 조립제법을 두 번 돌리면 이차식이 남는다. 탐색 범위가 규칙으로 주어지므로 통찰이 아니라 절차다.
    함정은 최고차항 계수가 1이 아닐 때 분수 후보를 빠뜨리는 것(T-범위)이다. 필수 예제 출발점 ★2 · 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "유리근 후보 대입으로 $f(a)=0$ 찾기 → 조립제법 → 남은 이차식의 근"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $x=-\dfrac{2}{3}$ 또는 $x=1$ 또는 $x=2$ ⑵ $x=1$ 또는 $x=2$ 또는 $x=-1\pm\sqrt{2}\,i$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/158-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수를 바꿀 수 있으나 상수항의 약수 중 근이 하나(사차는 둘) 있어야 함. 제약: 최고차 계수를 1이 아닌 수로 두면 분수 근이 생겨 후보 탐색이 늘고(★2 유지 상한), 남는 이차식의 판별식이 완전제곱이면 문제가 지나치게 쉬워짐."
    creative: "(1) 근 하나를 주고 나머지 근을 묻기(★1~2) (2) 계수에 문자를 넣어 특정 정수근을 갖게 하는 값을 묻기(★3 · I-BW) (3) 사차를 (이차)(이차)로만 쪼개지게 만들어 유리근이 아예 없게 하면 복이차·공통부분 골조로 넘어가 ★3."
```

```yaml
- id: GN-CM1-158-331
  page: 158
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑷ 삼차 두 개·사차 두 개를 인수정리로 풀기(158-e1 의 확인체크).
  category: '유리근 후보 대입 → 조립제법 → 남은 이차식의 근(무리근·허근 포함)'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "인수정리를 이용한 삼·사차방정식의 풀이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e1 과 같은 골조이고 ⑵ 처럼 최고차 계수가 3인 경우와 ⑶⑷ 사차가 섞여 조립제법 횟수만 늘어난다. 남는 이차식이 무리근을 주므로 계산 마찰은 있으나 판단은 한 갈래다.
    필수 예제 짝의 출발점 ★2 · 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "유리근 후보 대입 → 조립제법(사차는 두 번) → 남은 이차식을 근의 공식으로"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $x=2$ 또는 $x=1\pm\sqrt{5}$ ⑵ $x=1$ 또는 $x=\dfrac{11\pm\sqrt{13}}{6}$ ⑶ $x=-3$ 또는 $x=-2$ 또는 $x=-1$ 또는 $x=2$ ⑷ $x=-1$ 또는 $x=-2$ 또는 $x=\dfrac{3\pm\sqrt{5}}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/158-331.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수항과 중간 계수를 바꿀 수 있음. 제약: 유리근이 최소 하나(사차는 둘) 남아야 하고, 남는 이차식의 판별식이 너무 큰 무리수가 되지 않도록 조정."
    creative: "(1) 네 근 중 정수근만 묻기(★2) (2) 실근의 개수를 묻는 꼴로 바꾸기(★2~3) (3) 계수 하나를 문자로 두고 정수근 조건을 주면 ★3~4(I-BW)."
```

```yaml
- id: GN-CM1-159-e2
  page: 159
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑵ 공통부분이 있는 사차방정식 풀기. ⑵ 는 네 일차식의 곱이라 짝을 지어야 공통부분이 생긴다.
  category: '공통부분을 찾거나 만들어 치환 → 이차방정식 → 되돌려 이차식 풀기'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "⑵ 에서 상수항의 합이 같아지도록 (x+1)(x+4)·(x+2)(x+3) 으로 짝을 지어 없던 공통부분을 만들어 냄"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "공통부분이 있는 사차방정식의 풀이(치환·짝 묶기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 공통부분이 눈에 보여 치환만 하면 되고, ⑵ 는 어느 두 개를 묶어야 같은 이차식이 나오는지 고르는 착안이 필요하다(양 끝·가운데 짝). 이 짝 짓기를 EQV d2 로 한 단계 인정했다.
    치환 뒤 되돌릴 때 두 이차식을 모두 풀어야 하고 한쪽은 허근을 준다(T-범위). 필수 예제 ★2 출발 · 통찰 1개 d2 → ★2 유지.
  tier: star_2
  mechanism_primary: "짝 묶어 공통부분 만들기 → $t$ 치환 → 이차방정식 → $t$ 되돌려 두 이차식의 근"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $x=-5$ 또는 $x=-3$ 또는 $x=-1$ 또는 $x=1$ ⑵ $x=-6$ 또는 $x=1$ 또는 $x=\dfrac{-5\pm\sqrt{39}\,i}{2}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/159-e2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑵ 의 네 수는 등차여야 짝 묶기가 성립함(1,2,3,4 → 2,4,6,8 이나 1,3,5,7). 우변 상수는 치환한 이차방정식이 유리수 해를 갖도록 고른다. ⑴ 은 공통부분 계수와 우변 상수를 자유롭게 바꾸되 되돌린 이차식이 실근을 주도록 조정."
    creative: "(1) 실근만 묻기(★2) (2) 네 근의 합·곱을 묻기(★2~3) (3) 우변을 문자로 두고 실근의 개수 조건을 붙이면 판별식 분기가 생겨 ★4 (4) 등차가 아닌 네 수로 바꾸면 짝 묶기가 막혀 인수정리 골조로 되돌아감."
```

```yaml
- id: GN-CM1-159-332
  page: 159
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑶ 공통부분이 있는 방정식 풀기. ⑵ 는 우변을 정리해야 공통부분이 드러나고 ⑶ 은 네 일차식을 짝 지어야 한다.
  category: '공통부분 정리·짝 묶기 → 치환 → 이차방정식 → 되돌리기'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "⑵ 의 우변 $2x^2+4x+3$ 을 $2(x^2+2x)+3$ 으로 다시 묶고 ⑶ 은 양 끝·가운데로 짝 지어 공통부분을 만들어 냄"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "공통부분이 있는 사차방정식의 풀이(치환·짝 묶기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e2 와 같은 골조이며 ⑵ 에서 「우변도 공통부분으로 쓸 수 있게 다시 묶는다」는 한 수가 추가된다. 되돌린 뒤 중근·허근이 섞여 나와 근의 종류를 정확히 적어야 한다(T-표기).
    확인체크이지만 짝 예제와 같은 층 ★2 출발 · 통찰 1개 d2 → ★2 유지.
  tier: star_2
  mechanism_primary: "양변을 같은 공통부분으로 정리 → 치환 → 이차방정식 → 되돌려 근(중근·허근 구분)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $x=-4$ 또는 $x=1$ 또는 $x=\dfrac{-3\pm\sqrt{11}\,i}{2}$ ⑵ $x=-1$(중근) 또는 $x=-3$ 또는 $x=1$ ⑶ $x=-6$ 또는 $x=-2$ 또는 $x=-4\pm\sqrt{6}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/159-332.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑶ 의 네 수는 등차(1,3,5,7)여야 하고 더하는 상수(+15)는 치환식이 인수분해되도록 고른다. ⑴ 의 두 이차식은 $x^2+3x$ 부분이 일치해야 함. 제약: 되돌린 이차식 중 최소 하나가 실근을 주어야 답이 비지 않음."
    creative: "(1) 실근의 곱을 묻기(★2) (2) ⑵ 처럼 중근이 나오게 설계해 서로 다른 실근의 개수를 묻기(★3) (3) 우변 상수를 문자로 바꿔 허근을 가질 조건을 묻기(★3~4)."
```

```yaml
- id: GN-CM1-160-e3
  page: 160
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑵ 복이차식 방정식 풀기. ⑴ 은 $x^2$ 치환으로 인수분해되지만 ⑵ 는 치환해도 인수분해되지 않는다.
  category: '치환 가능 여부 판정 → 되면 $x^2=t$, 안 되면 제곱 보정 후 $A^2-B^2$'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-SC
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "$x^2$ 치환으로 인수분해되는지 먼저 보고, 막히면 제곱 보정(합차) 갈래로 전환하는 판단"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$x^4+x^2+1$ 에 $x^2$ 을 더하고 빼서 $(x^2+1)^2-x^2$ 로 만들어 합차 공식으로 분해"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "복이차식 방정식의 풀이(치환 또는 제곱 보정 후 합차)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    이 유형의 핵심은 계산이 아니라 「치환이 막혔을 때 없는 항을 만들어 넣는다」는 한 수다. 더하고 뺄 항을 $x^2$ 으로 고르는 근거(가운데 항을 완전제곱에 맞춘다)까지 가야 해서 EQV d2 로 보았다.
    갈래 선택(I-SC d1)과 보정(EQV d2) 두 단계 · M_total 6 → 필수 예제 ★2 출발에서 +1 하여 ★3.
  tier: star_3
  mechanism_primary: "치환 시도 → 막히면 $x^4+ax^2+b$ 에 제곱 보정 → $A^2-B^2$ 합차 분해 → 두 이차식의 근"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ $x=\pm i$ 또는 $x=\pm 2$ ⑵ $x=\dfrac{-1\pm\sqrt{3}\,i}{2}$ 또는 $x=\dfrac{1\pm\sqrt{3}\,i}{2}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/160-e3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '⑴ 은 $t$ 에 대한 이차식이 인수분해되는 계수 조합이면 자유(−3,−4 → −5,4 등). ⑵ 꼴은 보정 뒤 $B^2$ 이 완전제곱식이 되어야 하므로 $x^4+ax^2+b$ 에서 $b$ 가 제곱수이고 $2\sqrt{b}-a$ 가 제곱수여야 함($x^4+x^2+1$, $x^4-6x^2+1$, $x^4+16$ 이 표준).'
    creative: "(1) 네 근의 합·곱을 묻기(★3 · 대칭성으로 즉답) (2) 실근의 개수만 묻기(★2) (3) 계수를 문자로 두고 네 근이 모두 실수일 조건을 묻기(★4 · 판별식 두 개 + 범위) (4) 보정이 필요한 꼴만 골라 내게 하면 I-SC 가 주 통찰이 되어 ★3 유지."
```

```yaml
- id: GN-CM1-160-333
  page: 160
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑷ 복이차식 방정식 네 개 풀기. ⑴⑵ 는 치환으로 풀리고 ⑶⑷ 는 제곱 보정 후 합차로 분해해야 한다.
  category: '치환 갈래와 제곱 보정 갈래를 문항마다 갈라 적용'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-SC
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "네 문항이 치환 갈래와 보정 갈래로 나뉘어 있어 매번 어느 쪽인지 먼저 판정해야 함"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "⑶ 은 $(x^2-1)^2-4x^2$, ⑷ 는 $(x^2+4)^2-8x^2$ 로 없는 항을 만들어 합차 분해"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "복이차식 방정식의 풀이(치환 또는 제곱 보정 후 합차)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    e3 와 같은 골조인데 네 문항이 두 갈래로 섞여 있어 갈래 판정을 네 번 해야 한다. ⑷ $x^4+16=0$ 은 보정 상수가 $8x^2$ 이라 무리수 계수 이차식이 남고 근이 모두 허수라 정리 부담이 크다.
    확인체크지만 짝 예제와 같은 ★2 출발 · 통찰 2개(SC d1 · EQV d2) → ★3. [분류 이슈] 확인체크 원칙 출발점 ★1 기준으로는 2단 차이.
  tier: star_3
  mechanism_primary: "치환 가능 여부 판정 → 치환 또는 제곱 보정 합차 → 두 이차식의 근(무리·허수 계수 포함)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ $x=\pm 2\sqrt{2}\,i$ 또는 $x=\pm 3$ ⑵ $x=\pm\dfrac{\sqrt{2}}{2}i$ 또는 $x=\pm 1$ ⑶ $x=-1\pm\sqrt{2}$ 또는 $x=1\pm\sqrt{2}$ ⑷ $x=-\sqrt{2}\pm\sqrt{2}\,i$ 또는 $x=\sqrt{2}\pm\sqrt{2}\,i$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/160-333.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '치환 갈래는 $t$ 이차식이 인수분해되는 계수면 자유(−1,−72 → −2,−63). 보정 갈래는 상수항이 제곱수여야 하고 보정량 $2\sqrt{b}-a$ 가 제곱수여야 함($x^4-6x^2+1$, $x^4+4$, $x^4+16$). 제약: ⑷ 처럼 보정량이 제곱수가 아니면 무리수 계수가 남으므로 의도한 경우에만.'
    creative: "(1) 네 근 중 실근만 묻기(★2) (2) 네 근의 곱을 묻기(★3 · 상수항으로 즉답) (3) 「치환으로 풀리지 않는 것은?」 같은 갈래 판정 문항(★3 · I-SC 주) (4) $x^4+a=0$ 에서 $a$ 를 문자로 두면 ★4."
```

```yaml
- id: GN-CM1-161-e4
  page: 161
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ 한 근이 $-1$ 인 삼차방정식에서 상수 $a$ 를 구해 나머지 두 근의 곱을, ⑵ 두 근이 $1$, $-1$ 인 사차방정식에서 $a$, $b$ 를 구해 나머지 두 근의 합을 구하기.
  category: '근 대입으로 미정계수 결정 → 인수분해 또는 근과 계수 관계로 나머지 근'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "근이 주어진 삼·사차방정식의 미정계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    근을 대입해 계수를 정하는 것은 표준 절차라 I-BW 로 인정하지 않았다(스키마 §2.2 BW 판별 제외 항목). 이후 조립제법으로 남은 이차식을 만들거나 근과 계수 관계로 곱·합을 읽으면 끝난다.
    미정계수가 둘인 ⑵ 는 연립이 한 번 더 들어가 M 이 올라가지만 갈래는 하나다. 필수 예제 ★2 출발 · 통찰 0 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "주어진 근 대입 → 미정계수 연립 → 이미 아는 근으로 나눈 이차식에서 근과 계수 관계"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $6$ ⑵ $2$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/161-e4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주어지는 근($-1$, $1$)과 계수 위치를 바꿀 수 있음. 제약: 대입식이 미정계수에 대해 일차로 풀려야 하고(삼차는 한 근, 사차는 두 근), 나머지 이차식의 계수가 정수가 되도록 조정."
    creative: "(1) 나머지 두 근의 합 대신 제곱의 합을 묻기(★2~3) (2) 주어진 근을 허근 $1+i$ 로 바꾸면 켤레근 정리가 들어가 ★3(I-SYM) (3) 미정계수를 남긴 채 나머지 근이 정수일 조건을 묻기(★4 · I-BW)."
```

```yaml
- id: GN-CM1-161-334
  page: 161
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    삼차방정식 $x^3-px+6=0$ 의 한 근이 $-3$ 일 때 나머지 두 근 $\alpha$, $\beta$ 에 대해 $p+\alpha+\beta$ 의 값.
  category: '근 대입으로 $p$ 결정 → 세 근의 합에서 나머지 두 근의 합'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "근이 주어진 삼차방정식의 미정계수와 나머지 근"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $x=-3$ 을 넣어 $p$ 를 구하고, $x^2$ 항이 없으므로 세 근의 합이 0 임을 써서 나머지 두 근의 합을 바로 읽는다. 조립제법 없이 끝나는 두 단계짜리 절차다.
    함정은 $x^2$ 계수가 0 이라는 것을 놓치고 굳이 인수분해하는 것(T-표기) 정도다. 확인체크 ★2 출발 · 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: '$x=-3$ 대입 → $p$ → 세 근의 합 0 → $\alpha+\beta$ → 더하기'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$10$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/161-334.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주어진 근($-3$)과 상수항(6)을 바꿀 수 있음. 제약: 대입식에서 $p$ 가 정수로 나오도록 상수항을 근의 세제곱과 맞추고, $x^2$ 항을 0 으로 두어야 「나머지 두 근의 합」이 즉답이 됨."
    creative: '(1) $\alpha\beta$ 나 $\alpha^2+\beta^2$ 을 묻기(★2) (2) $x^2$ 항을 살려 계수를 하나 더 두면 조립제법이 필요해져 ★2 유지·계산만 증가 (3) 나머지 두 근이 허근일 조건을 묻기(★3).'
```

```yaml
- id: GN-CM1-161-335
  page: 161
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    사차방정식 $x^4+ax^3+3x^2+x+b=0$ 의 두 근이 $-1$, $2$ 일 때 나머지 두 근의 곱.
  category: '두 근 대입 → $a$, $b$ 연립 → 네 근의 곱에서 나머지 두 근의 곱'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "근이 주어진 사차방정식의 미정계수와 나머지 근"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 근을 넣어 $a$, $b$ 를 연립으로 정한 뒤, 네 근의 곱이 상수항 $b$ 라는 사실에서 나머지 두 근의 곱을 $b$ 를 $(-1)\times 2$ 로 나눠 읽는다. 인수분해까지 가지 않아도 되지만 가도 답은 같다.
    함정은 사차의 근과 계수 관계에서 부호를 놓치는 것(T-부호)이다. 확인체크 ★2 출발 · 통찰 0 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "두 근 대입 → $a$, $b$ 연립 → 네 근의 곱 $=b$ → 나머지 두 근의 곱"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/161-335.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주어지는 두 근($-1$, $2$)과 고정 계수(3, 1)를 바꿀 수 있음. 제약: 두 대입식이 $a$, $b$ 에 대해 일차 연립으로 풀려야 하고 나머지 두 근의 곱이 정수가 되도록 상수항을 맞춤."
    creative: "(1) 나머지 두 근의 합을 묻기(★2 · 네 근의 합 이용) (2) 나머지 두 근이 허근인지 판정하게 하기(★3) (3) 주어진 근 하나를 중근으로 두면 미분 없이도 인수분해 차수가 올라가 ★3."
```

```yaml
- id: GN-CM1-162-e5
  page: 162
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    삼차방정식 $x^3+(2p-1)x+2p=0$ 이 중근을 갖도록 하는 모든 실수 $p$ 의 값의 합.
  category: '$x=-1$ 로 (일차)(이차) 분해 → 중근이 생기는 두 경우 분기 → $p$ 의 합'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "중근 조건이 (i) 이차인수 자체가 중근 (ii) 이차인수가 $x=-1$ 을 근으로 가짐 의 두 경우로 갈리고 둘 다 답에 기여"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "삼차방정식이 중근을 가질 조건(계수 역추적)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $p$ 가 들어 있어도 $x=-1$ 이 항상 근이므로 (일차)(이차)로 쪼개지는 것이 출발이다. 여기까지는 절차지만, 「중근」이 이차인수 안에서 생길 수도 있고 이차인수가 $-1$ 을 다시 근으로 가져서 생길 수도 있다는 분기가 이 문제의 전부다.
    두 번째 경우를 빠뜨리면 $p=1/8$ 만 답하게 된다(T-경계). 필수 예제 ★2 출발 · MI d2 · M_total 8 → ★3.
  tier: star_3
  mechanism_primary: "항상 근인 $x=-1$ 로 분해 → 이차인수 판별식 0 / 이차인수가 $-1$ 을 근으로 → 두 $p$ 의 합"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-\dfrac{7}{8}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/162-e5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 배치를 바꿀 수 있으나 $p$ 에 무관한 근(여기서는 $-1$)이 반드시 남아야 함 — 상수항과 일차항의 $p$ 계수를 같게 두면 $x=-1$ 이 항상 근이 된다. 제약: 두 경우에서 나오는 $p$ 가 서로 달라야 「모든 값의 합」이 의미를 가짐."
    creative: "(1) 중근이 아니라 삼중근 조건으로 바꾸기(★4) (2) $p$ 의 곱이나 최댓값을 묻기(★3 유지) (3) 「서로 다른 실근이 두 개」 조건으로 바꾸면 같은 분기가 그대로 쓰여 ★3 (4) 항상 근인 값을 숨기도록 계수를 재배치하면 인수정리 탐색이 추가되어 ★4."
```

```yaml
- id: GN-CM1-162-336
  page: 162
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    삼차방정식 $x^3+x^2+kx-k-2=0$ 이 중근을 갖도록 하는 모든 실수 $k$ 의 값의 합.
  category: '$x=1$ 로 (일차)(이차) 분해 → 중근이 생기는 두 경우 분기 → $k$ 의 합'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "이차인수의 판별식이 0 인 경우와 이차인수가 $x=1$ 을 근으로 갖는 경우로 분기"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "삼차방정식이 중근을 가질 조건(계수 역추적)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $k$ 가 든 항들이 $kx-k$ 로 묶여 $x=1$ 이 항상 근이다. 분해 뒤 e5 와 똑같이 두 경우로 갈린다.
    두 경우에서 나온 $k$ 가 모두 유효하므로 기각은 없고 합만 구한다. 확인체크 ★2 출발 · MI d2 · M_total 8 → ★3. [분류 이슈] 확인체크 원칙 출발점 ★1 기준으로는 2단 차이.
  tier: star_3
  mechanism_primary: "$kx-k$ 를 묶어 $x=1$ 발견 → (일차)(이차) → 판별식 0 / 이차인수가 1 을 근으로 → $k$ 의 합"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/162-336.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "$k$ 가 붙는 항을 $k(x-1)$ 처럼 묶이게만 두면 나머지 계수는 자유. 제약: 항상 근인 값이 정수여야 하고, 판별식 0 에서 나오는 $k$ 와 겹침에서 나오는 $k$ 가 달라야 함."
    creative: "(1) 허근을 가질 조건으로 바꾸기(★2 · 337 골조) (2) 세 근이 모두 정수일 조건(★4 · I-BW) (3) 중근의 값 자체를 묻게 하면 분기별 검증이 강제되어 ★3~4(I-VF)."
```

```yaml
- id: GN-CM1-162-337
  page: 162
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    삼차방정식 $x^3+3x^2+(k+2)x+k=0$ 이 허근을 가질 때 실수 $k$ 의 값의 범위.
  category: '$x=-1$ 로 분해 → 허근 조건을 이차인수의 판별식 부등식으로'
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「삼차방정식이 허근을 갖는다」를 「남은 이차인수의 판별식이 음수」로 동치 변환(실근 하나는 이미 확보)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "삼차방정식이 허근을 가질 조건(판별식 부등식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $k(x+1)$ 로 묶여 $x=-1$ 이 항상 근이므로 남은 이차인수가 허근을 주면 된다. 분기가 없고 판별식 부등식 한 줄로 끝나 336·338 보다 가볍다.
    함정은 등호 포함 여부(T-경계)다. 확인체크 ★2 출발 · 통찰 1개 d2 · 분기 없음 → ★2 유지.
  tier: star_2
  mechanism_primary: "$x=-1$ 로 (일차)(이차) 분해 → 이차인수 판별식 $<0$ → $k$ 범위"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$k>1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/162-337.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "$k$ 를 $k(x+1)$ 로 묶을 수 있게 두고 나머지 계수를 바꿀 수 있음. 제약: 판별식이 $k$ 에 대해 일차가 되도록 이차인수의 상수항에만 $k$ 가 남게 설계."
    creative: "(1) 실근이 하나뿐일 조건으로 바꾸면 중근 경계가 붙어 ★3(351 골조) (2) 세 근이 모두 실수(★2 · 338) (3) 허근의 실수부·절댓값을 묻게 하면 근의 공식까지 가서 ★3."
```

```yaml
- id: GN-CM1-162-338
  page: 162
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    삼차방정식 $x^3-3x^2+(a+2)x-2a=0$ 의 세 근이 모두 실수가 되도록 하는 실수 $a$ 의 값의 범위.
  category: '$x=2$ 로 분해 → 세 근 실수 조건을 이차인수 판별식 $\ge 0$ 으로'
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「세 근이 모두 실수」를 「이차인수의 판별식이 0 이상」으로 옮김 — 중근을 허용하므로 등호가 들어감"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "삼차방정식의 세 근이 모두 실수일 조건(판별식 부등식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $a(x-2)$ 로 묶여 $x=2$ 가 항상 근이고, 남은 이차인수가 실근을 가지면 된다. 337 과 부호·등호만 다른 쌍둥이 문항이다.
    「모두 실수」는 중근도 실수로 세므로 등호를 포함해야 한다(T-경계). 확인체크 ★2 출발 · 통찰 1개 d2 → ★2 유지.
  tier: star_2
  mechanism_primary: '$x=2$ 로 (일차)(이차) 분해 → 이차인수 판별식 $\ge 0$ → $a$ 범위'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$a\le\dfrac{1}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/162-338.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "$a$ 를 $a(x-2)$ 로 묶이게 배치하고 나머지 계수를 바꿀 수 있음. 제약: 판별식이 $a$ 에 대해 일차여야 하고 경계값이 깔끔한 분수로 떨어지도록 계수를 고름."
    creative: "(1) 「서로 다른 세 실근」으로 바꾸면 등호가 빠지고 겹침 배제까지 붙어 ★3~4(350 골조) (2) 세 근이 모두 양수일 조건(★4 · 근과 계수 관계 결합) (3) 허근을 가질 조건(★2 · 337)."
```

```yaml
- id: GN-CM1-163-e6
  page: 163
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    정육면체의 가로·세로를 각각 $4\,\mathrm{cm}$ 늘이고 높이를 $2\,\mathrm{cm}$ 줄였더니 부피가 $128\,\mathrm{cm}^3$ 인 직육면체가 되었을 때 처음 한 모서리의 길이.
  category: '한 모서리를 $x$ 로 두기 → 부피 식 → 삼차방정식 → 길이 조건에 맞는 근'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "입체의 변화(가로·세로 늘이고 높이 줄이기)를 $(x+4)^2(x-2)=128$ 이라는 대수식으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "부피 조건에서 세우는 삼차방정식(활용)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    미지수를 처음 정육면체의 한 모서리로 잡는 것만 정하면 식은 한 줄이고, 전개하면 유리근 $x=4$ 가 바로 보인다. 나머지 이차인수는 허근이라 기각이 자동이다.
    길이가 양수여야 한다는 조건(T-범위)은 있으나 실제로 걸러 낼 후보가 없어 검증 부담은 가볍다. 필수 예제 ★2 출발 · RT d1 → ★2 유지.
  tier: star_2
  mechanism_primary: "한 모서리 $x$ → $(x+4)^2(x-2)=128$ → 삼차방정식 인수정리 → 양수 근 채택"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$4\,\mathrm{cm}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/163-e6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "늘이고 줄이는 길이(4, 2)와 최종 부피(128)를 바꿀 수 있음. 제약: 세운 삼차방정식이 양의 정수근을 갖도록 부피를 역산해 정하고, 줄이는 길이보다 큰 모서리만 답이 되도록 함($x>2$)."
    creative: "(1) 부피 대신 겉넓이 조건으로 바꾸면 이차방정식이 되어 ★1~2 (2) 처음 도형을 직육면체로 두고 비율 조건을 주면 미지수 설정이 한 단계 늘어 ★3(339 골조) (3) 나머지 근이 실수이지만 길이 조건에 맞지 않게 설계하면 기각이 실제로 필요해져 ★3(I-VF)."
```

```yaml
- id: GN-CM1-163-339
  page: 163
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    정육면체의 가로를 $1\,\mathrm{cm}$ 줄이고 세로·높이를 각각 $2\,\mathrm{cm}$, $3\,\mathrm{cm}$ 늘였더니 부피가 처음의 $\dfrac{5}{2}$ 배가 되었을 때 처음 한 모서리의 길이(자연수).
  category: '부피의 비 조건 → 양변에 $x^3$ 이 남는 삼차방정식 → 자연수 근'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '「부피가 처음의 $\dfrac{5}{2}$ 배」라는 비 조건을 $2(x-1)(x+2)(x+3)=5x^3$ 형태의 등식으로 옮김'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "부피 조건에서 세우는 삼차방정식(활용)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e6 와 골조가 같고, 비교 대상이 상수가 아니라 처음 부피라 우변에도 $x^3$ 이 남는 점만 다르다. 정리하면 최고차 계수가 1이 아닌 삼차방정식이 되어 유리근 후보가 늘어난다.
    문제에 「자연수」 조건이 명시돼 있어 무리근은 자동으로 빠진다(T-범위). 확인체크 ★2 출발 · RT d1 → ★2 유지.
  tier: star_2
  mechanism_primary: "한 모서리 $x$ → 두 부피를 비로 등식화 → 삼차방정식 정리 → 자연수 근 채택"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2\,\mathrm{cm}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/163-339.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '줄이고 늘이는 길이(1, 2, 3)와 배율($\dfrac{5}{2}$)을 바꿀 수 있음. 제약: 배율을 정한 뒤 자연수 근이 나오도록 세 변화량을 역산해야 하고, 줄이는 길이보다 모서리가 커야 함($x>1$).'
    creative: "(1) 자연수 조건을 빼면 무리근 기각을 학생이 직접 해야 해 ★3(I-VF) (2) 배율을 문자로 두고 자연수 해가 존재할 조건을 묻기(★4) (3) 겉넓이 비 조건으로 바꾸면 이차가 되어 ★2 이하."
```

```yaml
- id: GN-CM1-163-340
  page: 163
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    가로 $15\,\mathrm{cm}$, 세로 $12\,\mathrm{cm}$ 인 직사각형 종이의 네 귀퉁이에서 한 변이 $x\,\mathrm{cm}$ 인 정사각형을 잘라 내고 접어 만든 뚜껑 없는 상자의 부피가 $176\,\mathrm{cm}^3$ 일 때 자연수 $x$.
  category: '밑면 두 변과 높이를 $x$ 로 표현 → 부피 삼차방정식 → 범위·자연수 조건으로 근 기각'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "접어 만드는 상자의 세 모서리를 $(15-2x)$, $(12-2x)$, $x$ 로 읽어 부피식으로 옮김(잘라 내는 정사각형이 양쪽에서 빠지므로 $2x$)"
    - step: 3
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "삼차방정식의 나머지 두 근이 실수라서, $0<x<6$ 범위와 자연수 조건으로 실제로 기각해야 답이 하나로 정해짐"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "잘라 내어 접는 상자의 부피 삼차방정식(활용)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    양쪽에서 잘라 내므로 밑면 변이 $15-2x$, $12-2x$ 가 된다는 점이 첫 관문이고(한쪽만 빼는 실수가 전형적), 높이는 $x$ 자신이다.
    정리한 삼차방정식은 $x=2$ 외에 실근을 더 갖기 때문에 범위 $0<x<6$ 와 자연수 조건으로 걸러야 한다 — 검증이 풀이의 일부다(I-VF).
    확인체크 ★2 출발 · 통찰 2개 · M_total 7 → ★3. [분류 이슈] 확인체크 원칙 출발점 ★1 기준으로는 2단 차이.
  tier: star_3
  mechanism_primary: "밑면 $(15-2x)(12-2x)$ · 높이 $x$ → 부피 삼차방정식 → 인수정리 → $0<x<6$ · 자연수로 기각"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$2$'
  answer_source: "답지"
  figure: 'crop:fig-163-340.png'
  latex: latex-bank/gn-cm1/items/163-340.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "종이의 가로·세로(15, 12)와 부피(176)를 바꿀 수 있음. 제약: 부피를 먼저 정하지 말고 자연수 $x$ 를 정해 역산하며, 짧은 변의 절반보다 작은 범위 안에 근이 들어가야 함. 남는 이차인수가 실근을 갖도록 두면 기각 단계가 살아 있음."
    creative: "(1) 자연수 조건을 빼고 범위만으로 답을 하나로 만들기(★3 유지 · I-VF 강화) (2) 부피의 최댓값을 묻기(미분 필요 · 단원 밖) (3) 정사각형 종이로 바꾸면 식이 대칭이 되어 ★2 (4) 부피를 문자로 두고 해가 존재할 조건을 묻기(★4)."
```

### 연습문제 STEP 1

```yaml
- id: GN-CM1-165-341
  page: 165
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    삼차방정식 $x^3-9x^2+13x+23=0$ 의 세 실근 $\alpha$, $\beta$, $\gamma$ 에 대해 $|\alpha|+|\beta|+|\gamma|$ 의 값.
  category: '인수정리로 (일차)(이차) 분해 → 각 근의 부호 판정 → 절댓값을 벗겨 합'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '남은 이차인수의 두 근을 직접 구하지 않고 합·곱의 부호로 둘 다 양수임을 판정해 절댓값 합을 근의 합으로 환원'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "삼차방정식 세 실근의 절댓값의 합(부호 판정 + 근과 계수 관계)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $x=-1$ 을 찾아 분해하면 남은 이차인수는 무리근을 주므로 근을 다 구해 더하면 계산이 지저분해진다. 두 근의 합과 곱이 모두 양수 → 둘 다 양수 → 절댓값이 그대로 벗겨진다는 판정이 요점이다.
    음수 근 하나에만 부호를 뒤집는 함정(T-부호)이 있다. STEP 1 출발점 ★2 · 통찰 1개 d2 → ★2 유지.
  tier: star_2
  mechanism_primary: '$x=-1$ 로 분해 → 이차인수의 합·곱 부호로 두 근 모두 양수 판정 → $1+(\alpha+\beta)$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$11$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/165-341.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '계수를 바꾸되 정수근이 하나 남고 이차인수의 판별식이 양수여야 함. 제약: 이차인수의 두 근이 모두 양수(합>0, 곱>0)이거나 부호가 갈리도록 의도적으로 설계해야 절댓값 처리가 문제의 요점이 됨. 무리근이 남아야 「직접 구하지 않는다」는 착안이 살아 있음.'
    creative: '(1) 정수근을 양수로 바꿔 절댓값이 무의미해지면 ★1~2 (2) 이차인수의 두 근 부호가 갈리게 하면 분기가 생겨 ★3 (3) $|\alpha|+|\beta|+|\gamma|$ 대신 $\alpha^2+\beta^2+\gamma^2$ 을 묻기(★2 · 대칭식) (4) 계수에 문자를 넣어 절댓값 합이 특정 값이 되게 하면 ★4.'
```

```yaml
- id: GN-CM1-165-342
  page: 165
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    사차방정식 $x^4-2x^3+x^2-4=0$ 의 한 허근 $\alpha$ 에 대해 $\alpha+\dfrac{2}{\alpha}$ 의 값.
  category: '허근을 품은 이차인수 분리 → 그 이차식을 $\alpha$ 로 나눠 구하는 꼴로 변형'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$x^4-2x^3+x^2$ 을 $(x^2-x)^2$ 으로 묶어 $(x^2-x)^2-4$ 합차 분해(또는 인수정리 두 번)로 허근을 품은 이차인수를 분리'
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '허근을 직접 구하지 않고 $\alpha^2-\alpha+2=0$ 의 양변을 $\alpha$ 로 나눠 구하는 식 $\alpha+\dfrac{2}{\alpha}$ 를 만들어 냄'
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "사차방정식의 허근이 만족하는 식의 값(조건식 변형)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    허근을 근의 공식으로 구해 대입하면 복소수 나눗셈까지 가야 한다. 「허근이 만족하는 이차식을 $\alpha$ 로 나눈다」는 한 수가 이 문제의 전부이고, 그 앞에 이차인수를 분리하는 단계가 하나 더 붙는다.
    두 단계 모두 d2 통찰이고 M_total 7 → STEP 1 출발점 ★2 에서 +1 하여 ★3.
  tier: star_3
  mechanism_primary: '$(x^2-x)^2-4$ 로 분해 → 허근의 이차인수 $x^2-x+2=0$ → 양변을 $\alpha$ 로 나눠 값 읽기'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/165-342.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '허근을 주는 이차인수의 계수를 바꾸면 묻는 식의 분자가 함께 바뀜($x^2-x+2$ → $x^2-3x+5$ 면 $\alpha+\dfrac{5}{\alpha}$). 제약: 이차인수의 판별식이 음수여야 하고, 사차식 전체는 $(x^2+px)^2-q^2$ 꼴로 묶이거나 유리근 두 개를 갖도록 설계.'
    creative: '(1) $\alpha^2+\dfrac{4}{\alpha^2}$ 처럼 제곱 꼴을 묻기(★3 유지) (2) 두 허근의 곱·합을 묻기(★2) (3) $\alpha^n$ 의 값으로 확장하면 주기성이 생겨 ★4(I-PD) (4) 실근 쪽을 묻게 바꾸면 ★2.'
```

```yaml
- id: GN-CM1-165-343
  page: 165
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    방정식 $x(x-1)(x-2)(x-3)=24$ 의 두 실근을 $\alpha$, $\beta$, 두 허근을 $\gamma$, $\delta$ 라 할 때 $\alpha\beta-\gamma\delta$ 의 값.
  category: '양 끝·가운데로 짝 묶어 공통부분 치환 → 두 이차인수 → 판별식으로 실근·허근 구분 → 곱은 근과 계수 관계'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$x(x-3)$ 과 $(x-1)(x-2)$ 로 짝을 지어 $x^2-3x$ 라는 공통부분을 만들어 냄'
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '두 이차인수의 근을 구하지 않고 판별식 부호로 실근 쪽·허근 쪽을 가른 뒤 곱을 상수항에서 읽음'
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "네 일차식의 곱으로 된 사차방정식(짝 묶기 → 실근·허근 구분)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    짝 묶기는 159-e2 와 같지만, 여기서는 되돌린 두 이차식 중 어느 쪽이 허근인지를 가려야 하고 근을 구할 필요 없이 곱만 읽으면 된다는 점이 더해진다.
    실근 쪽과 허근 쪽을 바꿔 빼면 부호가 뒤집힌다(T-부호). STEP 1 출발점 ★2 · 통찰 2개 · M_total 7 → ★3.
  tier: star_3
  mechanism_primary: '양 끝·가운데 짝 묶기 → $t=x^2-3x$ 치환 → 두 이차인수 → 판별식으로 실·허 구분 → 곱을 상수항에서 읽어 빼기'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-10$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/165-343.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '네 일차식의 근은 등차여야 짝 묶기가 성립하고(0,1,2,3 → 1,3,5,7), 우변 상수는 치환한 이차방정식이 유리수 해 두 개를 갖고 그중 한쪽만 허근을 주도록 고른다. 제약: 우변이 너무 작으면 네 근이 모두 실수가 되어 문제가 성립하지 않음.'
    creative: '(1) $\alpha\beta+\gamma\delta$ 나 $\alpha+\beta$ 를 묻기(★2~3) (2) 네 근의 곱을 묻기(★2 · 상수항 즉답) (3) 우변을 문자로 두고 허근을 가질 조건을 묻기(★4) (4) 등차가 아닌 네 수로 바꾸면 짝 묶기가 막혀 인수정리 골조가 됨.'
```

```yaml
- id: GN-CM1-165-344
  page: 165
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    사차방정식 $x^4-15x^2+25=0$ 의 네 근 $\alpha$, $\beta$, $\gamma$, $\delta$ 에 대해 역수의 합 $\dfrac{1}{\alpha}+\dfrac{1}{\beta}+\dfrac{1}{\gamma}+\dfrac{1}{\delta}$ 의 값.
  category: '복이차식의 근이 $0$ 에 대칭인 $\pm$ 쌍임을 보고 역수의 합을 상쇄'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '짝수 차항만 있는 복이차식이므로 네 근이 $\pm p$, $\pm q$ 의 대칭 쌍이고, 역수의 합이 쌍마다 상쇄되어 $0$ 임을 즉시 결론'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "복이차식 네 근의 대칭식(역수의 합)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $t=x^2$ 으로 치환해 $t$ 를 구하면 이중근호가 나와 손이 묶인다. 짝수 차항만 있다는 대칭성 하나로 근이 $\pm$ 쌍임을 보면 계산 없이 $0$ 이다.
    노동량은 가볍지만(M_total 6) 착안이 없으면 진입 자체가 막히는 전형적인 SYM 문항이다. STEP 1 ★2 출발 · SYM d2 → ★3.
    [분류 이슈] 노동량 기준으로는 ★2, 통찰 기준으로는 ★3 으로 갈린다.
  tier: star_3
  mechanism_primary: '짝수 차항만 → 근이 $\pm p$, $\pm q$ 대칭 쌍 → 역수 합 쌍마다 상쇄 → $0$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/165-344.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$x^2$ 의 계수와 상수항은 거의 자유롭게 바꿀 수 있음(−15, 25 → −7, 9). 제약: 홀수 차항이 하나라도 들어오면 대칭이 깨져 골조가 무너지고, 상수항이 $0$ 이면 역수가 정의되지 않음. 근이 실수일 필요는 없음.'
    creative: '(1) 역수의 제곱의 합을 묻기(★3~4 · 상쇄가 안 되고 대칭식 계산 필요) (2) 네 근의 곱이나 제곱의 합을 묻기(★2~3) (3) 홀수 차항을 하나 넣어 대칭을 깨면 사차 근과 계수 관계가 필요해져 단원 밖 (4) $x^4+ax^2+b=0$ 에서 네 근의 합이 $0$ 임을 증명하게 하면 ★3 유지.'
```

```yaml
- id: GN-CM1-165-345
  page: 165
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    삼차방정식 $x^3-x^2+ax-1=0$ 의 세 근이 $-1$, $\alpha$, $\beta$ 일 때 $a^2+\alpha^2+\beta^2$ 의 값.
  category: '근 대입으로 $a$ 결정 → 근과 계수 관계로 $\alpha+\beta$, $\alpha\beta$ → 제곱의 합'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "근이 주어진 삼차방정식의 미정계수와 근과 계수 관계"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $x=-1$ 대입으로 $a$ 를 정하고, 세 근의 합·곱에서 $-1$ 을 덜어 내 $\alpha+\beta$ 와 $\alpha\beta$ 를 얻은 뒤 곱셈 공식으로 제곱의 합을 만든다. 세 단계 모두 표준 절차라 통찰로 세지 않았다.
    함정은 삼차 근과 계수 관계의 부호(T-부호)다. STEP 1 출발점 ★2 · 통찰 0 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: '$x=-1$ 대입 → $a$ → 세 근의 합·곱에서 $\alpha+\beta$, $\alpha\beta$ → $(\alpha+\beta)^2-2\alpha\beta$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$15$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/165-345.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '주어진 근($-1$)과 $x^2$ 계수·상수항을 바꿀 수 있음. 제약: 대입식이 $a$ 에 대해 일차로 풀려야 하고, 제곱의 합이 정수로 떨어지도록 계수를 고름.'
    creative: '(1) $\alpha^3+\beta^3$ 이나 $\dfrac{1}{\alpha}+\dfrac{1}{\beta}$ 로 바꾸기(★2~3) (2) $\alpha$, $\beta$ 가 허근임을 밝히게 하면 판별식이 추가되어 ★3 (3) $a$ 를 남긴 채 $\alpha^2+\beta^2$ 의 최솟값을 묻기(★4).'
```

```yaml
- id: GN-CM1-165-346
  page: 165
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    사차방정식 $x^4+ax^3+ax^2+11x+b=0$ 의 두 근이 $3$, $-2$ 일 때 나머지 근.
  category: '두 근 대입 → $a$, $b$ 연립 → 나머지 두 근의 합·곱 → 이차방정식 재구성'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 3
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '나머지 두 근을 구하려고 조립제법을 돌리는 대신, 네 근의 합·곱에서 남은 두 근의 합과 곱을 읽어 이차방정식을 새로 세움'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "근이 주어진 사차방정식의 나머지 근(근과 계수 관계)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $x^3$ 과 $x^2$ 계수가 같은 문자라 두 대입식이 $a$, $b$ 에 대한 일차 연립이 된다. 이후 $(x-3)(x+2)$ 로 나눠도 되지만, 네 근의 합·곱에서 남은 두 근의 합과 곱을 읽어 이차방정식을 세우는 쪽이 짧다.
    답이 단근이 아니라 중근이라 「나머지 근」을 두 개로 적을지 중근으로 적을지 표기 함정이 있다(T-표기). STEP 1 ★2 출발 · 통찰 1개 d2 → ★2 유지.
  tier: star_2
  mechanism_primary: '두 근 대입 → $a$, $b$ 연립 → 나머지 두 근의 합·곱 → 이차방정식 세워 중근 확인'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$x=1$(중근)'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/165-346.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '주어지는 두 근(3, −2)과 고정 계수(11)를 바꿀 수 있음. 제약: 두 대입식이 $a$, $b$ 에 대해 일차 연립으로 풀리도록 같은 문자를 두 자리에 배치해야 하고, 남는 이차식이 중근을 갖게 하려면 판별식이 0 이 되도록 역산.'
    creative: '(1) 남는 두 근이 허근이 되게 해 켤레근을 묻기(★3) (2) 나머지 근의 합만 묻기(★2 이하) (3) 주어진 근을 하나만 주고 나머지 세 근을 묻기(★3~4) (4) 중근 조건 자체를 묻는 역문제로 바꾸면 ★4.'
```

```yaml
- id: GN-CM1-165-347
  page: 165
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    삼차방정식 $x^3-(2k+1)x-2k=0$ 의 근이 모두 실수가 되도록 하는 실수 $k$ 의 값의 범위.
  category: '$x=-1$ 로 (일차)(이차) 분해 → 이차인수의 판별식 $\ge 0$'
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '「근이 모두 실수」를 「남은 이차인수의 판별식이 0 이상」으로 옮김 — 중근도 실수로 세므로 등호 포함'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "삼차방정식의 근이 모두 실수일 조건(판별식 부등식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $k$ 가 든 항이 $-2k(x+1)$ 로 묶여 $x=-1$ 이 항상 근이다. 162-338 과 같은 골조이고 경계 등호 처리(T-경계)가 같은 자리에 있다.
    분기가 없고 부등식 한 줄로 끝난다. STEP 1 출발점 ★2 · 통찰 1개 d2 → ★2 유지.
  tier: star_2
  mechanism_primary: '$-2k(x+1)$ 로 묶어 $x=-1$ 발견 → 이차인수 판별식 $\ge 0$ → $k$ 범위'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$k\ge-\dfrac{1}{8}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/165-347.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$k$ 가 $k(x+1)$ 이나 $k(x-1)$ 로 묶이게 배치하고 나머지 계수를 바꿀 수 있음. 제약: 판별식이 $k$ 에 대해 일차여야 경계가 한 점으로 나오고, 경계값이 깔끔한 분수가 되도록 계수를 고름.'
    creative: '(1) 「서로 다른 세 실근」으로 바꾸면 등호가 빠지고 겹침 배제가 붙어 ★3~4 (2) 허근을 가질 조건(★2 · 337) (3) 실근이 하나뿐일 조건(★3 · 351) (4) 정수 $k$ 의 개수를 묻게 하면 범위 해석이 한 단계 더 붙어 ★3.'
```

### 연습문제 STEP 2

```yaml
- id: GN-CM1-166-348
  page: 166
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    사차방정식 $x^4-4x^3+7x^2-8x+4=0$ 의 두 허근 $\alpha$, $\beta$ 에 대해 $\alpha^3+\beta^3$ 의 값.
  category: '인수정리 두 번으로 허근의 이차인수 분리 → 켤레근의 합·곱 → 세제곱 합 공식'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '유리근 $1$, $2$ 를 찾아 나눈 뒤 남는 이차인수가 두 허근을 품고 있다는 것을 확인'
    - step: 2
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '두 허근이 켤레쌍이라 합과 곱이 실수임을 이용해, 근을 구하지 않고 $\alpha^3+\beta^3=(\alpha+\beta)^3-3\alpha\beta(\alpha+\beta)$ 로 환원'
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "사차방정식 두 허근의 대칭식(켤레근 + 근과 계수 관계)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    허근을 근의 공식으로 구해 세제곱하면 복소수 계산이 길어진다. 켤레쌍의 합·곱이 이차인수 계수로 바로 읽힌다는 점과 세제곱 합을 대칭식으로 바꾸는 두 수가 핵심이다.
    사차식이 유리근 두 개를 내주므로 진입 자체는 무겁지 않다. STEP 2 출발점 ★3 · 통찰 2개 · M_total 7 → ★3 유지.
  tier: star_3
  mechanism_primary: '인수정리 두 번 → 허근의 이차인수에서 $\alpha+\beta$, $\alpha\beta$ → $(\alpha+\beta)^3-3\alpha\beta(\alpha+\beta)$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/166-348.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '사차식을 (유리근 두 개를 주는 이차식)×(판별식이 음수인 이차식)으로 설계하고 계수를 전개해 만든다. 제약: 허근 쪽 이차인수의 합·곱이 작은 정수여야 세제곱 합이 정수로 떨어짐.'
    creative: '(1) $\alpha^2+\beta^2$ 이나 $\dfrac{1}{\alpha}+\dfrac{1}{\beta}$ 로 바꾸기(★2~3) (2) $\alpha^n$ 의 주기성을 묻기(★4 · I-PD) (3) 실근과 허근을 섞은 식($\alpha\beta+$ 실근)으로 바꾸면 구분 단계가 추가되어 ★3~4 (4) 사차식을 복이차식으로 바꾸면 SYM 골조(344)로 옮겨 감.'
```

```yaml
- id: GN-CM1-166-349
  page: 166
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 STEP 2"
  summary: |
    삼차방정식 $x^3-x^2-kx+k=0$ 의 세 근을 $\alpha$, $\beta$, $\gamma$ 라 할 때, $\alpha$, $\beta$ 중 실수는 하나뿐이고 $\alpha^2=-2\beta$ 이면 $\beta^2+\gamma^2$ 의 값. 5지선다.
  category: '2+2 묶기로 $(x-1)(x^2-k)$ 분해 → 실수·허수 배정 분기와 기각 → 켤레근으로 $\gamma^2$ 읽기'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '$x^2(x-1)-k(x-1)$ 로 묶어 $(x-1)(x^2-k)$ 를 얻고, 허근이 있으려면 $k<0$ 이어야 함을 확인'
    - step: 2
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$\alpha$ 가 실수인 경우와 $\beta$ 가 실수인 경우로 갈라 보고, 앞쪽은 $\beta$ 가 실수가 되어 조건에 어긋나므로 기각해야 배정이 하나로 정해짐'
    - step: 3
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$\gamma$ 는 $\alpha$ 의 켤레근이므로 $\gamma^2=\alpha^2$ 임을 이용해 남은 값을 계산 없이 읽음'
  insight_count: 3
  depth_score: 1.67
  type_id: null
  type_hint: "삼차방정식의 근의 실수·허수 판정과 켤레근 활용"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    인수분해까지는 표준이지만, 「$\alpha$, $\beta$ 중 실수는 하나뿐」이라는 조건을 어느 쪽에 배정할지 두 경우를 따져 한쪽을 기각하는 단계가 이 문제의 중심이다.
    배정이 정해지면 $\alpha^2=-2\beta$ 에서 $k$ 가 나오고, 남은 근이 켤레근이라는 대칭성으로 $\gamma^2$ 을 그대로 쓴다.
    통찰 3개(EQV d1 · VF d2 · SYM d2) · M_total 8 · 교육청 기출 → STEP 2 출발점 ★3 에서 +1 하여 ★4.
    [분류 이슈] ★5 의 형식 요건(통찰 3개 + VF·SYM)은 채우지만 novelty_score 0 이라 v3.8 §2.14 기준으로는 ★5 를 줄 수 없어 ★4 로 기록.
  tier: star_4
  mechanism_primary: '$(x-1)(x^2-k)$ 분해 → 실수 근 배정 두 경우 중 하나 기각 → $\alpha^2=-2\beta$ 로 $k$ → 켤레근으로 $\gamma^2=\alpha^2$'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/166-349.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$k$ 가 $k(x-1)$ 로 묶이도록 두고 $\alpha^2=-2\beta$ 의 계수($-2$)를 바꿀 수 있음. 제약: 배정 조건에서 나오는 $k$ 가 음수여야 허근이 생기고, 두 배정 중 정확히 하나만 살아남도록 계수를 고름.'
    creative: '(1) $\alpha\beta\gamma$ 나 $k$ 자체를 묻기(★3) (2) 조건을 $\alpha^3=\beta$ 처럼 차수를 올려 주면 켤레·주기 계산이 늘어 ★4 유지 (3) 「실수인 근이 하나뿐」 조건을 「모두 실수」로 뒤집으면 판별식 골조(338·347)로 내려가 ★2~3 (4) 선다형을 서술형으로 바꾸면 기각 과정을 적어야 해 체감 ★4~5.'
```

```yaml
- id: GN-CM1-166-350
  page: 166
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    $x$ 에 대한 방정식 $x^3+(4-a)x^2-5ax+a^2=0$ 이 서로 다른 세 실근을 갖도록 하는 음의 정수 $a$ 의 개수.
  category: '$x=a$ 가 항상 근임을 찾아 분해 → 판별식 조건 + 근 겹침 배제 → 음의 정수 개수'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '계수에 든 $a$ 를 보고 $x=a$ 를 대입해 항상 근임을 확인, $(x-a)(x^2+4x-a)$ 로 분해'
    - step: 2
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '「서로 다른 세 실근」은 판별식 양수만으로 부족하고 $x=a$ 가 이차인수의 근이 되는 값을 기각해야 함 — 후보 $-1$, $-2$, $-3$ 중 $-3$ 이 실제로 걸러짐'
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "삼차방정식이 서로 다른 세 실근을 가질 조건(판별식 + 근 겹침 배제)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    문자가 계수 여러 자리에 흩어져 있어 $x=a$ 가 근이라는 것을 찾는 데 한 번 손이 간다. 분해 뒤에는 판별식 부등식으로 범위를 좁히는 것까지가 절반이고, 나머지 절반은 「세 근이 서로 달라야 한다」는 조건을 겹침 배제로 옮겨 후보를 실제로 기각하는 일이다.
    판별식만 쓰면 3개, 겹침을 배제하면 2개가 되어 기각이 답을 바꾼다. STEP 2 출발점 ★3 · 통찰 2개 · M_total 8 → ★3 유지.
    [분류 이슈] 기각 조건은 ★4 급 함정이지만 갈래가 하나이고 계산이 가벼워 출발점을 유지했다.
  tier: star_3
  mechanism_primary: '$x=a$ 로 $(x-a)(x^2+4x-a)$ 분해 → 판별식 $>0$ → $x=a$ 가 이차인수 근인 값 기각 → 음의 정수 세기'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/166-350.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$(x-a)(x^2+px-a)$ 를 전개해 만드는 구조이므로 $p$(여기서는 4)를 바꿀 수 있음. 제약: 판별식 범위 안의 정수 후보가 두세 개만 남도록 $p$ 를 정하고, 겹침에서 기각되는 값이 그 범위 안에 실제로 들어가야 기각 단계가 살아 있음.'
    creative: '(1) 「음의 정수」를 「정수」나 「자연수」로 바꿔 후보 수를 조절(★3 유지) (2) 겹침이 일어나지 않게 설계하면 단순 판별식 문제로 내려가 ★2 (3) 세 근이 모두 정수일 조건으로 바꾸면 ★4(I-BW) (4) 개수 대신 모든 값의 합·곱을 묻기(★3~4 · 352 골조).'
```

```yaml
- id: GN-CM1-166-351
  page: 166
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    삼차방정식 $2x^3-6x^2-2(k-2)x+2k=0$ 의 서로 다른 실근이 $1$ 개일 때 실수 $k$ 의 값의 범위.
  category: '$x=1$ 로 분해 → 실근 1개 조건을 허근 경우와 중근이 $1$ 과 겹치는 경우로 분기'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '양변을 2로 나누고 $k$ 가 든 항을 묶어 $x=1$ 이 항상 근임을 찾아 $(x-1)(x^2-2x-k)$ 로 분해'
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '「서로 다른 실근이 1개」가 (i) 이차인수가 허근 (ii) 이차인수가 중근이고 그 값이 $1$ 과 같음 두 경우로 갈리고 둘 다 답 범위에 들어감'
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "삼차방정식의 서로 다른 실근이 1개일 조건(허근 또는 중근 일치)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $x=1$ 은 항상 근이므로 실근 개수는 남은 이차인수가 결정한다. 판별식 음수만 답하면 경계 $k=-1$ 을 놓치는데, 이때 이차인수의 중근이 마침 $1$ 이라 실근이 여전히 하나다.
    경계가 답에 포함되는지 직접 확인해야 하는 T-경계 함정이 핵심이다. STEP 2 출발점 ★3 · 통찰 2개 · M_total 8 → ★3 유지.
  tier: star_3
  mechanism_primary: '$(x-1)(x^2-2x-k)$ 분해 → 판별식 $<0$ 또는 중근이 $1$ 과 일치 → 두 경우 합쳐 범위'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$k\le -1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/166-351.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$k$ 가 $k(x-1)$ 꼴로 묶이게 배치하고 나머지 계수를 바꿀 수 있음. 제약: 이차인수의 중근이 항상 근인 값과 일치하도록 설계해야 경계가 답에 포함되고, 그렇지 않으면 경계가 빠져 부등호가 달라짐 — 이 점이 변형의 핵심 함정.'
    creative: '(1) 「서로 다른 실근이 2개」로 바꾸면 경계만 답이 되어 ★3 (2) 중근이 항상 근과 어긋나게 설계해 경계를 제외시키기(★4 · 검증 강제) (3) 실근이 3개일 조건(★2~3 · 338·347) (4) 정수 $k$ 의 최댓값을 묻기(★3).'
```

### 연습문제 실력 UP

```yaml
- id: GN-CM1-166-352
  page: 166
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 실력 UP"
  summary: |
    $x$ 에 대한 사차방정식 $x^4+(2a+1)x^3+(3a+2)x^2+(a+2)x=0$ 의 서로 다른 실근의 개수가 $3$ 이 되도록 하는 모든 실수 $a$ 의 곱.
  category: '공통인수 $x$ + $x=-1$ 로 (일차)(일차)(이차) 분해 → 실근 3개가 되는 네 경우 분기 → 곱'
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$x$ 로 묶은 뒤 남은 삼차식에서 $x=-1$ 이 $a$ 에 무관한 근임을 찾아 $x(x+1)(x^2+2ax+a+2)=0$ 으로 분해'
    - step: 2
      type: I-MI
      depth: 3
      effective_depth: 3
      signal_ref: []
      description: '이미 확보한 실근 $0$, $-1$ 위에서 실근이 정확히 3개가 되는 경우를 (i) 이차인수가 중근이고 그 값이 $0$, $-1$ 과 다름 (ii) 이차인수가 서로 다른 두 실근인데 하나가 $0$ 또는 $-1$ 과 겹침 으로 남김없이 갈라야 함'
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '각 분기에서 얻은 $a$ 를 되돌려 넣어 중근이 기존 근과 겹치지 않는지·겹침 경우의 판별식이 실제로 양수인지 확인해야 네 값이 모두 살아남음'
  insight_count: 3
  depth_score: 2.33
  type_id: null
  type_hint: "사차방정식의 서로 다른 실근의 개수 조건(중근·겹침 완전 분기)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    분해까지는 앞의 350·351 과 같지만, 여기서는 이미 실근 두 개가 확보된 상태에서 「정확히 하나만 더 늘어나는」 경우를 빠짐없이 세어야 한다. 중근으로 하나 늘리는 길과 두 실근 중 하나가 기존 근과 겹쳐 하나만 늘리는 길이 모두 답이 된다.
    네 값 중 하나라도 빠지면 곱이 달라지므로 분기 완전성과 사후 검증이 동시에 요구된다.
    실력 UP 출발점 ★4 · 통찰 3개(EQV d2 · MI d3 · VF d2) · M_total 9 → ★4 유지. ★5 의 저노출 요건(VF)은 있으나 novelty_score 0 이라 ★5 로 올리지 않았다.
  tier: star_4
  mechanism_primary: '$x(x+1)(x^2+2ax+a+2)=0$ 분해 → 실근 3개가 되는 네 경우(중근 2가지 · 겹침 2가지) → $a$ 네 값의 곱'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$12$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/166-352.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$x(x+r)(x^2+2ax+c(a))$ 를 전개해 만드는 구조이므로 고정 근 $r$ 과 이차인수의 상수항 표현을 바꿀 수 있음. 제약: 이차인수의 판별식 $=0$ 이 $a$ 에 대해 두 근을 갖고, 겹침 조건 두 개도 각각 해를 가져야 답이 네 값이 됨. 중근 값이 고정 근과 우연히 겹치면 그 분기는 기각되므로 설계 시 확인 필요.'
    creative: '(1) 실근 개수를 2 나 4 로 바꾸면 분기 구성이 완전히 달라짐(★4 유지) (2) 모든 $a$ 의 합을 묻기(★4) (3) 고정 근을 하나만 남겨 $x(x^2+\cdots)$ 꼴로 줄이면 350 골조로 내려가 ★3 (4) 「실근의 개수가 3 이상」처럼 부등호로 바꾸면 범위가 답이 되어 ★4~5.'
```

```yaml
- id: GN-CM1-166-353
  page: 166
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    전개도를 접어 만든 오각기둥의 부피가 $216$ 일 때 $x$ 의 값. 전개도에는 밑면 오각형의 변과 기둥의 높이가 $x$ 로 표시돼 있다.
  category: '전개도에서 밑면 오각형과 높이를 읽기 → 직사각형에서 직각삼각형을 뺀 넓이 → 부피 삼차방정식'
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '평면 전개도의 어느 조각이 밑면이고 어느 길이가 기둥의 높이인지 대응시켜, 밑면 오각형을 가로·세로가 $x$ 로 표시된 직사각형에서 잘려 나간 직각삼각형을 뺀 도형으로 읽어 냄'
    - step: 3
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '삼차방정식을 풀고 얻은 근 중 길이 조건(양수·잘린 삼각형이 성립)을 만족하는 것만 남기는 확인'
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "전개도에서 세우는 각기둥 부피 삼차방정식(활용)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    계산 자체는 인수정리 한 번이지만, 전개도에서 밑면 오각형의 다섯 변과 옆면 띠의 대응을 읽어 내는 것이 이 문제의 실질이다. 잘려 나간 직각삼각형의 두 변이 $x$ 에 무관한 상수가 된다는 점을 보면 밑넓이가 두 일차식의 곱으로 정리된다.
    그러면 부피가 세 일차식의 곱이 되어 $216$ 의 약수 조합으로 근을 바로 짚을 수 있다.
    실력 UP 출발점 ★4 · 통찰 2개(RT d2 · VF d1) · M_total 8 → ★4 유지.
    [분류 이슈] 전개도 해석을 넘기면 계산은 ★3 수준이라 구역 출발점에 기대어 ★4 로 두었다.
  tier: star_4
  mechanism_primary: '전개도 → 밑면 오각형 = 직사각형 − 직각삼각형 → 밑넓이를 두 일차식의 곱으로 → 부피 삼차방정식 → 길이 조건에 맞는 근'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$3$'
  answer_source: "답지"
  figure: 'crop:fig-166-353.png'
  latex: latex-bank/gn-cm1/items/166-353.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '전개도의 각 변에 붙는 상수($x$, $x+1$, $x+2$, $x+3$, $x+5$)와 부피 값을 바꿀 수 있음. 제약: 잘려 나간 직각삼각형의 두 변이 $x$ 에 무관한 상수가 되도록 마주 보는 변의 상수 차를 고정해야 밑넓이가 인수분해되고, 부피는 양의 정수근이 나오도록 세 일차식의 곱으로 역산한다.'
    creative: '(1) 밑면을 사다리꼴·육각형으로 바꾸기(★4 유지 · 넓이 분해만 달라짐) (2) 부피 대신 겉넓이를 주면 이차방정식이 되어 ★3 (3) 전개도를 그림 없이 말로 설명하면 RT 가 빠져 ★3 (4) 부피를 문자로 두고 자연수 해가 존재할 조건을 묻기(★5 후보 · I-BW + I-VF).'
```

## 표본 판정 요약 (31문)

- ★ 분포: ★1 2 · ★2 15 · ★3 11 · ★4 3 · ★5 0
- 통찰형 23 · 절차형 8(157-329 · 157-330 · 158-e1 · 158-331 · 161-e4 · 161-334 · 161-335 · 165-345) · premium 0
- 통찰 유형 분포(총 36개): I-EQV 18 · I-VF 5 · I-MI 4 · I-RT 4 · I-SYM 3 · I-SC 2 · 그 외 0. depth 3 은 166-352 의 MI 하나뿐이고, ★5 의 저노출 요건(SC/VF/SYM/XU)은 166-349 · 166-352 · 166-353 이 갖추었으나 novelty_score 0 이라 ★5 슬롯은 두지 않았다.
- type_hint 계열별: 「근의 조건에서 계수 범위·값 역추적」 6(162-e5 · 162-336 · 162-337 · 162-338 · 165-347 · 166-351) · 「근이 주어진 방정식의 미정계수·나머지 근」 5(161-e4 · 161-334 · 161-335 · 165-345 · 165-346) · 「인수분해·인수정리로 풀기」 4(157-329 · 157-330 · 158-e1 · 158-331) · 「부피 조건 활용」 4(163-e6 · 163-339 · 163-340 · 166-353) · 「공통부분·짝 묶기」 3(159-e2 · 159-332 · 165-343) · 「복이차식」 3(160-e3 · 160-333 · 165-344)
- 대상층: 하위권 2 · 중하위권 6 · 중위권 9 · 중상위권 12 · 상위권 2
- 그림: 2문(`crop:fig-163-340.png` · `crop:fig-166-353.png`) · 소문항 묶음 요약: 157-329(8) · 157-330(6) · 158-e1(2) · 158-331(4) · 159-e2(2) · 159-332(3) · 160-e3(2) · 160-333(4) · 161-e4(2)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다. 이 단원의 확인체크는 모두 바로 앞 필수 예제의 골조를 반복하므로 출발점을 짝 예제와 같은 ★2 로 잡았고, 확인체크 원칙(★1 출발)과 2단 차이가 나는 문항을 아래에 모았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CM1-160-333 | 확인체크지만 치환·제곱 보정 두 갈래 판정(SC d1)과 보정 착안(EQV d2)이 있어 ★3. 확인체크 원칙 출발점 기준 2단 | ★2 / ★3 |
| GN-CM1-162-336 | 확인체크지만 중근이 생기는 두 경우 분기(MI d2)가 그대로 들어가 ★3. 원칙 출발점 기준 2단 | ★2 / ★3 |
| GN-CM1-163-340 | 확인체크지만 나머지 근이 실수라 범위·자연수 조건 기각(VF)이 실제로 필요해 ★3. 원칙 출발점 기준 2단 | ★2 / ★3 |
| GN-CM1-165-344 | M_total 6 으로 노동량은 가벼운데 대칭성 한 수로 즉답 — 노동량 기준 ★2, 통찰 기준 ★3. ★3 으로 기록 | ★2 / ★3 |
| GN-CM1-166-349 | 통찰 3개 + VF·SYM 으로 ★5 의 저노출 요건은 채우나 novelty_score 0 이라 v3.8 §2.14 기준 ★5 불가 → ★4 로 기록 | ★4 / ★5 |
| GN-CM1-166-350 | 근 겹침 배제(VF d2)가 답을 3에서 2로 바꾸는 ★4 급 함정이지만 갈래가 하나이고 계산이 가벼워 STEP 2 출발점 ★3 유지 | ★3 / ★4 |
| GN-CM1-166-353 | 전개도 해석(RT d2)을 넘기면 계산은 ★3 수준. 실력 UP 구역 출발점에 기대어 ★4 로 둠 | ★3 / ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 단원의 실질 골조는 **「항상 근인 값이 하나 숨어 있는 삼차방정식을 (일차)(이차)로 쪼갠 뒤 이차인수를 조건으로 제어한다」** 하나다. 162-e5 · 162-336 · 162-337 · 162-338 · 165-347 · 166-350 · 166-351 · 166-352 가 모두 여기에 속한다. 카탈로그에서는 이 골조를 하나의 상위 유형으로 세우고, 조건에 따라 **판별식 부등식형**(337 · 338 · 347 · base ★2), **중근·겹침 분기형**(e5 · 336 · 350 · 351 · base ★3), **실근 개수 완전 분기형**(352 · base ★4)의 세 소유형으로 나누는 것이 체감과 맞는다.
- **인수정리 풀이**(157-329 · 157-330 · 158-e1 · 158-331)는 base ★1~2 의 기초 유형 하나로 통합해도 된다. 소문항 도구(공통인수 · 2+2 묶기 · 세제곱 공식)는 유형이 아니라 소문항 태그로 두는 편이 낫다.
- **공통부분·짝 묶기**(159-e2 · 159-332 · 165-343)와 **복이차식**(160-e3 · 160-333)은 별도 유형으로 세운다. 둘 다 「없는 공통부분·없는 제곱항을 만들어 낸다」는 EQV d2 를 공유하지만, 전자는 네 수가 등차라는 구조 신호가, 후자는 상수항이 제곱수라는 신호가 진입 단서라 학생이 판별하는 기준이 다르다.
- **근이 주어진 미정계수**(161-e4 · 161-334 · 161-335 · 165-345 · 165-346)는 base ★2 한 유형으로 충분하다. 다만 165-346 처럼 「나머지 근을 조립제법 대신 근과 계수 관계로 재구성」하는 갈래는 소유형 표시를 남긴다 — 사차에서 계산량 차이가 크다.
- **켤레근·대칭성**(165-344 · 166-348 · 166-349)은 이 단원에서 ★4 슬롯 자격(SYM)을 주는 거의 유일한 통로다. 카탈로그에 「근을 구하지 않고 대칭식으로 환원」 유형을 따로 세우고 base ★3 으로 두면 ★4·★5 변형의 출발점이 된다.
- **부피 활용**(163-e6 · 163-339 · 163-340 · 166-353)은 한 유형으로 묶되 **기각이 필요한가**로 base ★ 가 갈린다(기각 없음 ★2 / 범위·자연수 기각 ★3 / 전개도 해석 추가 ★4). 변형을 만들 때 「나머지 근을 허근으로 둘지 실근으로 둘지」가 ★ 를 직접 움직이는 손잡이다.
