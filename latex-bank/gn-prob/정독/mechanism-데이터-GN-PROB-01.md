---
name: mechanism-데이터-GN-PROB-01
description: 개념원리 확률과 통계 01 중복순열(1/1 · 11~21쪽) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 확률과 통계 (22개정) · 전사본 latex-bank/gn-prob
  section: 01 중복순열
  unit_code: GN-PROB-01
  part: "1/1"
  extract_range: "11~21쪽 · 11-e1~21-24"
  total_problems: 33
  unit_total: 33
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-prob/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-prob/items/<id>.tex
  image_source: latex-bank/gn-prob/figures/ (이 범위는 그림 없음)
---

# 개념원리 확률과 통계 · 01 중복순열 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 확률과 통계 **01 중복순열** 전 범위(11~21쪽 · 33문항)를 다룬다. 구역은 세 개다. ⑴ 11~14쪽 **「특강」** — 합의 법칙·곱의 법칙·순열·조합을 다시 훑는 선수 복습 구역(예제 4 + 확인체크 11), ⑵ 17쪽 **「개념원리 익히기」** — ₙΠᵣ 정의 확인 4문항, ⑶ 18~21쪽 **「필수·발전 예제」** — 필수 예제 5(투표·신호·자연수의 개수 2종·함수의 개수)와 각 예제에 딸린 확인체크 9.

벤더 난이도 신호는 구역과 태그다. 개념원리 고등은 「특강」을 보통 교육과정 심화(★2~3)로 쓰지만, **이 단원의 특강은 심화가 아니라 이전 과정(경우의 수) 복습**이라 실제 체감은 ★1~2다. 그래서 이 구역의 출발점을 ★2 로 잡고 M_total·통찰로 내렸으며, 2단 이상 어긋난 문항은 라벨을 억지로 맞추지 않고 파일 끝 「분류 이슈 목록」에 기록했다. 「필수」 예제는 ★2 출발, 그 아래 확인체크는 같은 유형의 유제이므로 예제와 같은 출발점에서 조정했다.

이 파일의 주 용도는 **숫자 변형·창의 변형의 원본**이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(통찰 유형·depth·근거) · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 창의 변형과 ★ 변동 지점)를 채웠다. 이 범위에는 그림이 있는 문항이 없다(전 문항 `figure: none`).

## 문항 데이터

### 특강

```yaml
- id: GN-PROB-11-e1
  page: 11
  vendor_label: "특강"
  vendor_level: "-"
  vendor_tags: ["특강"]
  category_type: "특강"
  summary: |
    서로 다른 두 주사위를 던질 때 ⑴ 두 눈의 수의 합이 5 또는 10 ⑵ 합이 4의 배수가 되는 경우의 수.
  category: "배반인 경우로 분해 → 각 경우 세기 → 합의 법칙"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "합의 법칙 — 배반인 경우로 나누어 세기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    합이 특정 값이 되는 순서쌍을 나열해 세고, 동시에 일어나지 않으므로 더한다. ⑵ 는 4의 배수를 4·8·12 세 값으로 먼저 쪼개는 한 단계가 더 있다.
    합의 법칙의 표준 적용이라 통찰 없음. M_total 5 · 특강(복습) 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "조건을 배반인 경우로 분할 → 각 경우의 순서쌍 세기 → 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $7$ ⑵ $9$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-prob/items/11-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "목표 합(5·10 → 6·9 등), 배수(4의 배수 → 3의 배수·5의 배수), 주사위 개수(2 → 3)를 바꿀 수 있다. 제약: 두 조건이 배반이어야 그대로 더할 수 있고(합 6과 3의 배수처럼 겹치면 합의 법칙이 깨짐), 합의 범위는 2~12 안이어야 한다."
    creative: "(1) 주사위를 정사면체·정팔면체로 바꿔 눈의 범위를 조정(★2 유지) (2) 겹치는 두 조건을 주어 포함배제를 쓰게 하면 ★3 (3) 세 개의 주사위로 늘려 합의 경우를 표로 만들게 하면 Mₛ 상승 ★3."
```

```yaml
- id: GN-PROB-11-1
  page: 11
  vendor_label: "특강"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "특강"
  summary: |
    x, y 가 자연수일 때 x+y<4 를 만족시키는 순서쌍 (x, y) 의 개수.
  category: "부등식을 합의 값으로 분할 → 각 합의 순서쌍 세기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부등식을 만족시키는 자연수 순서쌍의 개수"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    자연수라 x+y 는 2 또는 3뿐이고 각각 1개·2개를 직접 센다. 한 줄 나열로 끝난다.
    통찰 없음·M_total 4 → 특강 출발점 ★2 에서 −1 하여 ★1. [분류 이슈] 벤더 「특강」 신호(★2~3)보다 낮지만 선수 복습 구역이라 기록만 한다.
  tier: star_1
  mechanism_primary: "자연수 조건에서 x+y=2, 3 만 가능 → 각각의 순서쌍 나열 → 합"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/11-1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "부등호 우변(4 → 6·8)과 부등호 종류(< → ≤)를 바꿀 수 있다. 제약: 자연수 범위라 최소 합이 2이고, 우변을 키우면 개수가 삼각수로 늘어 나열이 길어진다(우변 8 이상이면 공식화 필요)."
    creative: "(1) 음이 아닌 정수로 바꾸면 경계 0 이 추가돼 함정 1개 증가(★2) (2) x+y+z<n 세 변수로 확장하면 Mₛ 상승 ★3 (3) 부등식을 x+2y<8 처럼 계수 있게 주면 분할이 불균등해져 ★2."
```

```yaml
- id: GN-PROB-11-2
  page: 11
  vendor_label: "특강"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "특강"
  summary: |
    서로 다른 두 주사위를 동시에 던질 때 두 눈의 수의 차가 1 이하인 경우의 수.
  category: "차의 값으로 경우 분할 → 각각 세기 → 합의 법칙"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "합의 법칙 — 두 주사위 눈의 조건을 경우로 나누어 세기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    「차가 1 이하」를 차 0 과 차 1 로 나눈 뒤, 차 1 은 (a, a+1) 과 (a+1, a) 두 방향을 모두 세는 것이 요지다.
    표준 분할이라 통찰 없음. 순서쌍 방향을 빠뜨리는 함정이 있어 M_total 5 · 특강 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "차 0 인 경우와 차 1 인 경우로 분할 → 각 순서쌍을 방향까지 세기 → 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$16$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/11-2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "차의 상한(1 → 2·3)이나 조건을 「차가 정확히 k」로 바꿀 수 있다. 제약: 상한을 키우면 분할 개수가 늘어 Mₛ 가 오르고, 차 0 만 방향이 1가지라는 비대칭은 그대로 유지해야 한다."
    creative: "(1) 「두 눈의 수의 곱이 짝수」처럼 여사건이 빠른 조건으로 바꾸면 I-SC 가 붙어 ★3 (2) 주사위 3개로 늘려 가장 큰 눈과 가장 작은 눈의 차를 묻기(★3~4) (3) 「차가 1 이하가 아닌 경우」로 뒤집어 여사건을 쓰게 하면 ★2 유지."
```

```yaml
- id: GN-PROB-12-e2
  page: 12
  vendor_label: "특강"
  vendor_level: "-"
  vendor_tags: ["특강"]
  category_type: "특강"
  summary: |
    ⑴ 144의 양의 약수의 개수 ⑵ (a+b)(l+m+n)(x+y+z) 의 전개식에서 항의 개수.
  category: "독립인 선택 단계로 분해 → 각 단계의 가짓수 곱하기"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곱의 법칙 — 약수의 개수와 전개식 항의 개수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 소인수분해 후 각 소인수의 지수 선택이 독립임을 보고 (지수+1) 의 곱, ⑵ 는 각 괄호에서 항을 하나씩 고르는 독립 선택의 곱이다. 둘 다 같은 곱의 법칙의 두 얼굴을 보여 주는 예제다.
    표준 공식 적용이라 통찰 없음. M_total 5 · 특강 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "소인수분해 후 지수 선택의 곱 / 각 괄호에서 한 항 선택의 곱"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $15$ ⑵ $18$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-prob/items/12-e2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "대상 수(144 → 180·360·600)와 괄호 안 항의 개수(2·3·3 → 3·3·4)를 바꿀 수 있다. 제약: 약수 개수는 소인수분해가 쉬운 수여야 하고, 전개식 쪽은 괄호끼리 공통 문자가 없어야 항이 겹치지 않는다."
    creative: "(1) 「약수의 총합」이나 「홀수인 약수의 개수」로 바꾸면 조건 해석이 붙어 ★3 (2) 괄호에 공통 문자를 넣어 동류항이 생기게 하면 단순 곱이 깨져 ★3 (3) 약수의 개수를 12로 만드는 자연수를 거꾸로 묻기(I-BW · ★3)."
```

```yaml
- id: GN-PROB-12-3
  page: 12
  vendor_label: "특강"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "특강"
  summary: |
    십의 자리는 홀수, 일의 자리는 소수인 두 자리 자연수의 개수.
  category: "자리마다 가능한 숫자 세기 → 곱의 법칙"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곱의 법칙 — 자리마다 조건이 있는 자연수의 개수"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    십의 자리 홀수 5개, 일의 자리 한 자리 소수 4개를 세어 곱하면 끝난다.
    「1은 소수가 아니다」가 유일한 함정. 통찰 없음·M_total 4 → 특강 출발점에서 −1 하여 ★1.
  tier: star_1
  mechanism_primary: "각 자리의 후보 숫자 개수를 세어 곱하기"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$20$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/12-3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "자리 조건(홀수·소수 → 짝수·3의 배수)과 자릿수(두 자리 → 세 자리)를 바꿀 수 있다. 제약: 최고 자리는 0을 쓸 수 없고, 한 자리 소수는 2·3·5·7 네 개뿐임을 유지해야 한다."
    creative: "(1) 조건이 두 자리에 걸치게(「두 자리 수의 합이 짝수」) 바꾸면 자리 독립이 깨져 ★3 (2) 세 자리로 늘리고 최고 자리 0 제외 함정을 넣으면 ★2 (3) 조건을 만족하는 수의 총합을 묻기(★3)."
```

```yaml
- id: GN-PROB-12-4
  page: 12
  vendor_label: "특강"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "특강"
  summary: |
    ⑴ 54 ⑵ 120 의 양의 약수의 개수.
  category: "소인수분해 → 각 지수에 1을 더해 곱하기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "소인수분해를 이용한 약수의 개수"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    소인수분해한 뒤 지수에 1씩 더해 곱하는 공식 한 줄. 두 수 모두 분해가 쉽다.
    통찰 없음·M_total 4 → ★1. [분류 이슈] 「특강」 구역 신호(★2~3)와 2단 어긋나지만, 이 특강은 심화가 아니라 경우의 수 복습이라 라벨을 올리지 않고 기록만 한다.
  tier: star_1
  mechanism_primary: "소인수분해 → (지수+1) 의 곱"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $8$ ⑵ $16$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/12-4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "대상 수(54·120 → 72·200·360)를 바꿀 수 있다. 제약: 소인수가 2~3종이고 지수가 한 자리여야 암산 범위에 들어온다."
    creative: "(1) 「약수의 총합」으로 바꾸면 등비합이 붙어 ★2 (2) 「약수의 개수가 6인 가장 작은 자연수」처럼 역방향으로 물으면 I-BW · ★3 (3) 두 수의 공약수의 개수로 확장하면 최대공약수 단계가 추가돼 ★2."
```

```yaml
- id: GN-PROB-12-5
  page: 12
  vendor_label: "특강"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "특강"
  summary: |
    (a+b+c)(p+q)(x+y) 의 전개식에서 a 를 포함하는 항의 개수.
  category: "한 괄호를 고정 → 나머지 괄호의 선택만 곱하기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "전개식에서 특정 문자를 포함하는 항의 개수"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    첫 괄호는 a 로 고정되므로 선택지가 1가지, 나머지 두 괄호에서 각각 하나씩 고르는 곱만 남는다.
    통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "a 가 든 괄호를 1가지로 고정 → 남은 괄호의 항 수를 곱하기"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/12-5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "괄호 개수와 각 괄호의 항 수(3·2·2 → 4·3·2)를 바꿀 수 있다. 제약: 괄호끼리 문자가 겹치면 동류항이 생겨 단순 곱이 무너진다."
    creative: "(1) 「a 또는 p 를 포함하는 항의 개수」로 바꾸면 포함배제가 필요해 ★3 (2) 「a 를 포함하지 않는 항의 개수」로 뒤집으면 여사건 착안(I-SC) ★2 (3) 괄호 하나를 제곱으로 주어 전개 차수를 올리면 ★3."
```

```yaml
- id: GN-PROB-13-e3
  page: 13
  vendor_label: "특강"
  vendor_level: "-"
  vendor_tags: ["특강"]
  category_type: "특강"
  summary: |
    ⑴ 5명의 순서 정하기 ⑵ 10명 중 대표 1명과 총무 1명 뽑기 ⑶ a, b, c, d 를 일렬로 나열할 때 a 와 c 를 이웃하게 나열하기.
  category: "순열 세 갈래(전부 나열 · 뽑아 나열 · 이웃 묶음) 구분해 적용"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "순열 — 일렬 나열·뽑아 나열·이웃하게 나열"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 전부 나열, ⑵ 는 자리가 구별되는 뽑기라 순열, ⑶ 은 이웃하는 둘을 한 덩어리로 묶고 덩어리 안을 다시 나열하는 표준 기법이다.
    셋 모두 교과 표준 절차라 통찰 없음. M_total 5 · 특강 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "이웃 조건은 묶음 하나로 축소 → 덩어리 나열 × 덩어리 내부 나열"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $120$ ⑵ $90$ ⑶ $12$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-prob/items/13-e3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "사람 수(5 → 6·7), 뽑는 직책 수(2 → 3), 문자 개수(4 → 5)를 바꿀 수 있다. 제약: 이웃 묶음 문항은 묶는 대상이 2개일 때 내부 나열이 2!로 단순하고, 3개 이상이면 3!로 커져 Mₖ 가 오른다."
    creative: "(1) 「a 와 c 가 이웃하지 않게」로 뒤집으면 여사건 한 단계 추가(★3) (2) 「대표·부대표·총무」로 늘려 순열 차수를 키우기(★2 유지) (3) 이웃 조건과 양 끝 조건을 동시에 주면 경우 분할이 생겨 ★3."
```

```yaml
- id: GN-PROB-13-6
  page: 13
  vendor_label: "특강"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "특강"
  summary: |
    관광지 네 곳을 한 번씩 관광하는 순서를 정하는 경우의 수.
  category: "서로 다른 4개를 모두 일렬로 나열 → 4!"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "순열의 수 — 일렬로 나열하는 경우의 수"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    네 대상을 모두 쓰는 순열이므로 4! 한 줄이다. 조건도 함정도 없다.
    통찰 없음·M_total 4 → ★1. [분류 이슈] 「특강」 구역 신호와 2단 차이지만 라벨은 올리지 않고 기록만 한다.
  tier: star_1
  mechanism_primary: "서로 다른 4개의 순열 → 4!"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$24$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/gn-prob/items/13-6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "대상 개수(4 → 5·6)를 바꿀 수 있다. 제약: 6을 넘으면 답이 세 자리 이상이 되어 확인체크 자리에는 무겁다."
    creative: "(1) 「특정 한 곳을 가장 먼저」 조건을 붙이면 자리 고정 한 단계 추가(★2) (2) 두 곳을 연달아 가야 한다는 이웃 조건(★2) (3) 「특정 한 곳을 마지막에 가지 않는다」로 여사건을 쓰게 하면 ★2."
```

```yaml
- id: GN-PROB-13-7
  page: 13
  vendor_label: "특강"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "특강"
  summary: |
    1, 2, 3, 4, 5 중 서로 다른 3개를 택해 만드는 세 자리 자연수의 개수.
  category: "자리가 구별되는 뽑기 → 순열"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "서로 다른 숫자로 만드는 세 자리 자연수의 개수(순열)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    0이 없어 최고 자리 제약이 없고, 서로 다른 5개에서 3개를 뽑아 자리에 배치하는 순열 한 줄이다.
    통찰 없음·M_total 4 → ★1. 뒤의 중복순열 문항(17-14)과 짝을 이루는 대조 문항이다.
  tier: star_1
  mechanism_primary: "서로 다른 5개에서 3개를 택해 나열 → 5P3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$60$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/13-7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "숫자 집합의 크기(5 → 6)와 자릿수(3 → 4)를 바꿀 수 있다. 제약: 집합에 0을 넣는 순간 최고 자리 제약이 생겨 유형이 달라지므로, 이 문항을 그대로 두려면 0을 넣지 않는다."
    creative: "(1) 집합에 0을 넣어 최고 자리 제외를 요구하면 ★2 (2) 「짝수만」 조건을 붙이면 일의 자리 고정 후 경우 분할(★3) (3) 중복을 허용하는 쪽으로 바꾸면 곧바로 17-14 유형이 된다(★1)."
```

```yaml
- id: GN-PROB-13-8
  page: 13
  vendor_label: "특강"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "특강"
  summary: |
    olympic 의 7개 문자를 일렬로 나열할 때 c 와 y 를 양 끝에 나열하는 경우의 수.
  category: "제약이 있는 자리를 먼저 채우고 → 나머지를 자유 나열"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "특정 문자를 양 끝에 고정하는 순열"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    양 끝 두 자리에 c, y 를 배치(2!)한 뒤 남은 5개를 가운데에 나열(5!)하는 두 단계다. 「제약 자리 먼저」라는 순열의 기본 전략이 처음 나오는 자리다.
    표준 절차라 통찰 없음. M_total 5 · 특강 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "양 끝 자리 배치 2! → 남은 5문자 나열 5! → 곱"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$240$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/13-8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "단어(문자 수 7)와 고정할 문자 수(2)를 바꿀 수 있다. 제약: 단어에 같은 문자가 반복되면 같은 것이 있는 순열이 되어 유형이 달라지므로, 문자가 모두 다른 단어를 골라야 한다."
    creative: "(1) 「모음이 양 끝」처럼 조건을 집합으로 주면 고르기 단계가 추가돼 ★3 (2) 「c 가 y 보다 앞」 같은 순서 조건이면 대칭성으로 절반(I-SYM · ★3) (3) 반복 문자가 있는 단어로 바꾸면 같은 것이 있는 순열 유형(★3)."
```

```yaml
- id: GN-PROB-14-e4
  page: 14
  vendor_label: "특강"
  vendor_level: "-"
  vendor_tags: ["특강"]
  category_type: "특강"
  summary: |
    ⑴ 남학생 5명·여학생 4명 중 남 2명과 여 2명을 뽑는 경우의 수 ⑵ A, B 를 포함한 8명 중 A, B 를 포함해 5명을 뽑아 일렬로 세울 때 A, B 가 이웃하는 경우의 수.
  category: "조합으로 뽑고 → 조건에 맞게 나열 → 곱의 법칙"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "조합 — 뽑기와 이웃 조건이 결합된 나열"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 두 집단에서 독립으로 뽑아 곱하는 조합, ⑵ 는 A·B 가 이미 확정이므로 나머지 6명 중 3명을 뽑고(조합) 그 뒤 A·B 묶음을 포함한 4덩어리를 나열(순열)한다.
    조합 뒤 순열이라는 전형 절차라 통찰 없음. 3단계 결합으로 M_total 6 · 특강 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "필수 인물 제외하고 나머지 뽑기(조합) → A·B 묶음 포함 나열(순열) × 묶음 내부 2!"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $60$ ⑵ $960$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-prob/items/14-e4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "집단 크기(5·4 → 6·5), 뽑는 수(2·2 → 3·2), 전체 인원과 뽑는 인원(8명 중 5명 → 9명 중 4명)을 바꿀 수 있다. 제약: ⑵ 는 뽑는 인원이 필수 인물 수보다 커야 하고, 묶음 나열이 성립하려면 남는 자리가 1개 이상이어야 한다."
    creative: "(1) 「A, B 가 이웃하지 않게」로 뒤집으면 여사건 한 단계 추가(★3) (2) 「A 는 포함, B 는 제외」로 조건을 갈라 놓으면 경우 분할(★3) (3) 남녀를 교대로 세우는 조건을 붙이면 배치 구조가 바뀌어 ★4."
```

```yaml
- id: GN-PROB-14-9
  page: 14
  vendor_label: "특강"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "특강"
  summary: |
    서로 다른 책 12권 중에서 3권을 택하는 경우의 수.
  category: "순서 없는 뽑기 → 조합"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "조합의 수 — 서로 다른 것에서 택하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    순서가 없으므로 조합 공식 한 줄이다. 순열과 구분하는 것이 전부다.
    통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "순서 없는 선택 → 12C3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$220$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/14-9.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "전체 개수와 뽑는 개수(12·3 → 10·4·9·2)를 바꿀 수 있다. 제약: 답이 세 자리를 넘지 않게 두면 확인체크 자리에 맞고, 뽑는 개수가 전체의 절반을 넘으면 여집합으로 바꾸는 편이 빠르다."
    creative: "(1) 「특정 책 1권을 반드시 포함」 조건을 붙이면 자리 고정 한 단계(★2) (2) 「3권을 서로 다른 세 사람에게 준다」로 바꾸면 순열이 되어 ★2 (3) 종류가 나뉜 책에서 종류별 최소 1권 조건을 주면 경우 분할 ★3."
```

```yaml
- id: GN-PROB-14-10
  page: 14
  vendor_label: "특강"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "특강"
  summary: |
    A~G 7개 문자 중 C, F 를 포함하여 4개를 뽑아 일렬로 나열할 때 C 와 F 가 이웃하지 않는 경우의 수.
  category: "필수 문자 제외하고 뽑기 → 전체 나열에서 이웃 나열 빼기"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이웃하지 않도록 뽑아 나열하기(조합 + 여사건 순열)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    C, F 가 확정이므로 나머지 5개 중 2개를 뽑고(조합), 뽑은 4개의 전체 나열에서 C·F 가 이웃하는 나열을 빼는 세 층 구조다. 「이웃하지 않는다 = 전체 − 이웃」은 교과 표준 기법이라 통찰로 카운트하지 않았다.
    통찰 0 이지만 조합·순열·여사건이 겹쳐 M_total 6 → 특강 출발점 ★2 에서 +1 하여 ★3. [분류 이슈] 통찰 없이 절차 부담만으로 오른 사례.
  tier: star_3
  mechanism_primary: "나머지에서 2개 뽑기(5C2) → 4개 전체 나열 4! − C·F 이웃 나열 3!×2!"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$120$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/14-10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "전체 문자 수(7 → 8), 뽑는 개수(4 → 5), 필수 문자 수(2 → 3)를 바꿀 수 있다. 제약: 필수 문자가 3개 이상이면 「모두 이웃」과 「둘만 이웃」이 갈려 단순 여사건이 깨지므로 필수 2개를 유지해야 한다."
    creative: "(1) 여사건 대신 나머지 2개를 먼저 세우고 사이에 C·F 를 끼워 넣는 풀이를 유도하면 I-SC 가 붙어 ★3 유지·통찰형 전환 (2) 「C 가 F 보다 앞」 조건을 더하면 대칭으로 절반(I-SYM · ★4) (3) 필수 문자를 3개로 늘려 「어느 둘도 이웃하지 않게」로 바꾸면 끼워넣기 필수 ★4."
```

```yaml
- id: GN-PROB-14-11
  page: 14
  vendor_label: "특강"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "특강"
  summary: |
    1부터 9까지의 자연수 중 서로 다른 세 수를 택할 때 세 수의 곱이 짝수가 되는 경우의 수.
  category: "곱이 짝수 ⇔ 적어도 하나 짝수 → 전체에서 모두 홀수인 경우 빼기"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-SC
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "짝수 개수로 직접 세는 세 갈래 분기 대신 전체 − (모두 홀수) 여사건을 택해 한 줄로 줄임"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "여사건으로 세는 조합 — 곱이 짝수가 되는 경우"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    곱이 짝수라는 조건을 「적어도 하나가 짝수」로 읽고 나면, 직접 세기는 짝수 1·2·3개 세 갈래로 갈리고 여사건은 한 줄이다. 어느 갈래를 고르느냐가 풀이 길이를 가르므로 I-SC d1 로 잡았다.
    특강 출발점 ★2 에 여사건 착안 1개를 더해 ★3. 계산 자체는 두 조합의 차로 가볍다.
  tier: star_3
  mechanism_primary: "곱이 짝수 = 적어도 하나 짝수 → 9C3 − (홀수 5개에서 3개) 5C3"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$74$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/14-11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "범위(1~9 → 1~10·1~12)와 뽑는 개수(3 → 4)를 바꿀 수 있다. 제약: 여사건이 효율적이려면 홀수(또는 짝수) 쪽 개수가 뽑는 개수 이상이어야 하고, 범위를 바꾸면 홀·짝 개수가 달라지므로 둘 다 다시 세어야 한다."
    creative: "(1) 「곱이 4의 배수」로 바꾸면 2의 지수를 따져야 해 여사건이 복잡해지고 I-MI 가 추가돼 ★4 (2) 「합이 짝수」로 바꾸면 홀수 개수의 홀짝 분기(I-MI · ★3) (3) 「곱이 홀수」로 뒤집으면 여사건이 필요 없어져 ★1~2 로 내려간다."
```

### 개념원리 익히기

```yaml
- id: GN-PROB-17-12
  page: 17
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴ ₇Π₁ ⑵ ₆Π₂ ⑶ ₃Π₄ ⑷ ₂Π₅ 의 값.
  category: "중복순열의 정의 ₙΠᵣ = nʳ 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "중복순열의 수 ₙΠᵣ = nʳ 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    정의를 그대로 대입하는 값 계산 4개. ⑶⑷ 처럼 r 이 n 보다 커도 된다는 점이 순열과 다른 유일한 확인 지점이다.
    통찰 없음·M_total 4 · 개념 확인 구역 → ★1.
  tier: star_1
  mechanism_primary: "ₙΠᵣ 의 정의 nʳ 에 n, r 대입"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $7$ ⑵ $36$ ⑶ $81$ ⑷ $32$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/17-12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "n, r 값을 바꿀 수 있다. 제약: nʳ 이 네 자리를 넘지 않게 두고, r > n 인 경우를 최소 하나 넣어 순열과의 차이를 확인시킨다."
    creative: "(1) ₙPᵣ 와 나란히 주고 두 값을 비교하게 하면 정의 대조가 생겨 ★2 (2) ₙΠᵣ 를 소인수분해 형태로 답하게 하면 계산 성격이 달라짐(★1 유지) (3) ₙΠᵣ = ₙPᵣ 가 되는 조건을 묻기(★3)."
```

```yaml
- id: GN-PROB-17-13
  page: 17
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴ ₙΠ₃=125 ⑵ ₙΠ₅=243 ⑶ ₂Π_r=128 ⑷ ₇Π_r=343 을 만족시키는 n 또는 r 의 값.
  category: "nʳ 꼴로 바꾼 뒤 밑 또는 지수 비교"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "ₙΠᵣ 등식에서 n 또는 r 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    좌변을 nʳ 로 바꾸고 우변을 같은 꼴의 거듭제곱으로 고쳐 밑끼리 또는 지수끼리 비교하면 끝난다.
    앞 문항의 역방향이지만 거듭제곱 표현 하나만 알면 되므로 통찰로 세지 않았다. M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "ₙΠᵣ = nʳ 로 고치기 → 우변을 같은 밑의 거듭제곱으로 표현 → 밑·지수 비교"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $5$ ⑵ $3$ ⑶ $7$ ⑷ $3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/17-13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 값을 바꿀 수 있다. 제약: 우변이 반드시 자연수 밑·자연수 지수의 거듭제곱이어야 하고(125·243·128·343 처럼), 그렇지 않으면 n 이나 r 이 자연수로 나오지 않는다."
    creative: "(1) ₙΠ₂ = ₙP₂ + 6 처럼 두 기호를 섞은 등식으로 주면 이차방정식이 생겨 ★3 (2) ₙΠᵣ = 64 를 만족시키는 (n, r) 순서쌍을 모두 구하게 하면 I-MI 분기 ★3 (3) 부등식 ₂Πᵣ ≥ 500 의 최소 r 로 바꾸면 19-20 유형과 같아진다(★3)."
```

```yaml
- id: GN-PROB-17-14
  page: 17
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    1, 2, 3, 4, 5 중에서 중복을 허용하여 4개를 택해 만들 수 있는 네 자리 자연수의 개수.
  category: "각 자리에 5가지 독립 선택 → 중복순열"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "중복순열로 만드는 자연수의 개수"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    0이 없어 최고 자리 제약이 없고, 자리가 4개·후보가 5개이므로 ₅Π₄ 한 줄이다.
    n 과 r 을 뒤집어 ₄Π₅ 로 쓰는 것이 유일한 함정. 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "자리 수 4가 r, 숫자 개수 5가 n → ₅Π₄"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$625$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/17-14.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "숫자 개수와 자릿수(5·4 → 4·3·6·3)를 바꿀 수 있다. 제약: 숫자 집합에 0을 넣으면 최고 자리 제외 단계가 생겨 20-e3 유형으로 넘어가므로, ★1 을 유지하려면 0을 넣지 않는다."
    creative: "(1) 0을 포함시켜 최고 자리 제외를 요구(★2) (2) 「홀수만」 조건을 더해 일의 자리를 고정(★2) (3) 13-7(서로 다른 수) 과 나란히 배치해 순열·중복순열을 대조하게 하면 I-RT 가 생겨 ★2."
```

```yaml
- id: GN-PROB-17-15
  page: 17
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    O, X 로만 답할 수 있는 5개의 문제에 임의로 답하는 경우의 수.
  category: "문항마다 2가지 독립 선택 → 중복순열"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "중복순열 — 두 가지 중 택일을 반복하는 경우의 수"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    문제(자리)가 5개, 선택지가 2개이므로 ₂Π₅ 다. 「문제 쪽이 r」이라는 대응만 잡으면 한 줄로 끝난다.
    통찰 없음·M_total 4 → ★1. 뒤의 18-e1(투표)·19-20(깃발) 과 같은 골조의 가장 단순한 형태다.
  tier: star_1
  mechanism_primary: "선택하는 쪽(문제)이 r, 선택지(O·X)가 n → ₂Π₅"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$32$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/17-15.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "문제 수(5 → 6·8)와 선택지 수(2 → 4·5지선다)를 바꿀 수 있다. 제약: nʳ 이 커지므로 문항 수를 늘릴 때는 선택지를 2로 두는 편이 답이 관리된다."
    creative: "(1) 「모두 맞힐 확률」로 이어 붙이면 확률 단원과 결합(★2) (2) 「적어도 한 문제는 O 로 답하는 경우」로 바꾸면 여사건 한 단계(★2) (3) 「무응답도 허용」을 더해 선택지를 3으로 늘리면 ★1 유지지만 함정 1개 추가."
```

### 필수·발전 예제

```yaml
- id: GN-PROB-18-e1
  page: 18
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수·발전 예제"
  summary: |
    후보 2명이 나온 선거에서 유권자 6명이 각각 기명으로 한 명에게 투표하는 경우의 수(기권·무효 없음).
  category: "유권자마다 후보를 중복 허용해 택함 → 중복순열"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "중복순열의 수 — 서로 다른 것을 대상에 배정하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    「기명」이므로 유권자가 서로 구별되고, 한 후보에게 표가 몰려도 되므로 유권자 6명 각각이 후보 2명 중 하나를 고르는 ₂Π₆ 이다. 누가 n 이고 누가 r 인지 가리는 것이 이 단원의 첫 관문이라 함정 1개로 잡았다.
    계산은 한 줄이라 M_total 4. [분류 이슈] v3.8 산식만 보면 통찰 0·M_total 4 로 −1(★1) 이지만 단원 대표 유형이라 필수 신호 ★2 를 유지했다.
  tier: star_2
  mechanism_primary: "구별되는 쪽(유권자 6)이 r, 선택지(후보 2)가 n → ₂Π₆"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$64$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-prob/items/18-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "후보 수와 유권자 수(2·6 → 3·4·2·8)를 바꿀 수 있다. 제약: nʳ 이 네 자리 안에 들어오게 두고, 「기명」과 「기권 없음」 두 단서는 반드시 남겨야 유형이 유지된다(무기명이면 중복조합으로 바뀐다)."
    creative: "(1) 「무기명 투표」로 바꾸면 표의 분포만 세는 중복조합이 되어 유형이 통째로 바뀜(★3) (2) 「기권도 가능」을 넣으면 선택지가 하나 늘어 ★2 유지 (3) 「특정 후보가 적어도 1표를 얻는 경우」를 묻으면 여사건 한 단계 추가(★3)."
```

```yaml
- id: GN-PROB-18-16
  page: 18
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "필수·발전 예제"
  summary: |
    서로 다른 편지 3통을 서로 다른 우체통 2개에 넣는 경우의 수(빈 우체통이 있어도 된다).
  category: "편지마다 우체통을 중복 허용해 택함 → 중복순열"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "중복순열의 수 — 서로 다른 것을 대상에 배정하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    편지가 서로 다르므로 편지 하나하나가 우체통을 고르는 쪽(r)이고 우체통이 선택지(n)다. 「빈 우체통이 있을 수도 있다」는 단서가 제한 없는 중복순열임을 보장한다.
    18-e1 과 같은 골조의 유제. 통찰 없음·M_total 4 → 예제와 같은 ★2.
  tier: star_2
  mechanism_primary: "편지 3통이 r, 우체통 2개가 n → ₂Π₃"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/18-16.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "편지 수와 우체통 수(3·2 → 4·3·5·2)를 바꿀 수 있다. 제약: 「서로 다른 편지」와 「빈 우체통 허용」 두 단서를 그대로 두어야 하고, 편지가 같은 것으로 바뀌면 중복조합이 된다."
    creative: "(1) 「빈 우체통이 없도록」으로 바꾸면 여사건 제외가 붙어 ★3(18-18 골조) (2) 편지를 모두 같은 것으로 바꾸면 중복조합 유형(★3) (3) 우체통마다 넣을 수 있는 편지 수에 상한을 주면 경우 분할 ★4."
```

```yaml
- id: GN-PROB-18-17
  page: 18
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "필수·발전 예제"
  summary: |
    여행자 5명이 서로 다른 호텔 3곳에 투숙하는 경우의 수(각 호텔의 빈 방은 충분하다).
  category: "여행자마다 호텔을 중복 허용해 택함 → 중복순열"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "중복순열의 수 — 서로 다른 것을 대상에 배정하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    「빈 방이 충분하다」가 인원 제한이 없다는 뜻이므로, 여행자 5명 각각이 호텔 3곳 중 하나를 고르는 ₃Π₅ 다.
    18-e1·18-16 과 동일 골조이고 n·r 이 뒤집히기 쉬운 배치(5 vs 3)라는 점만 다르다. 통찰 없음·M_total 4 → ★2.
  tier: star_2
  mechanism_primary: "여행자 5명이 r, 호텔 3곳이 n → ₃Π₅"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$243$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/18-17.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "여행자 수와 호텔 수(5·3 → 4·3·6·2)를 바꿀 수 있다. 제약: 「빈 방 충분」 단서를 없애면 방 배정 인원 제한이 생겨 유형이 달라지고, nʳ 이 네 자리를 넘지 않게 둔다."
    creative: "(1) 「모든 호텔에 적어도 1명」 조건을 붙이면 포함배제가 필요해 ★4 (2) 「특정 두 사람은 같은 호텔」 조건이면 묶음 축소 한 단계(★3) (3) 여행자를 구별 없는 것으로 바꾸면 중복조합(★3)."
```

```yaml
- id: GN-PROB-18-18
  page: 18
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "필수·발전 예제"
  summary: |
    남학생 5명은 홀수 반, 여학생 4명은 짝수 반이 되도록 1·2·3반에 배정하는 경우의 수(각 반에 적어도 1명 배정).
  category: "홀·짝 반으로 후보를 좁힘 → 중복순열 → 빈 반이 생기는 경우 제외"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「여학생은 짝수 반」을 1·2·3반 중 짝수는 2반 하나뿐이라는 사실로 옮겨 여학생 배정의 자유도를 0으로 만듦"
    - step: 2
      type: I-SC
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「각 반에 적어도 1명」을 직접 세지 않고 남학생이 1반이나 3반 한쪽에만 몰리는 2가지를 전체에서 빼는 여사건으로 처리"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "조건이 붙은 배정 — 중복순열에서 '적어도 1명' 제외"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    먼저 짝수 반이 2반 하나뿐임을 알아채야 여학생 쪽이 1가지로 확정되고, 남은 것은 남학생 5명이 1반·3반 중 하나를 고르는 중복순열이다. 여기서 「각 반에 적어도 1명」은 사실상 1반·3반이 비면 안 된다는 뜻이므로 한쪽 몰림 2가지를 뺀다.
    조건 해석 1개 + 여사건 착안 1개로 통찰 2개, M_total 6 → 유제 출발점 ★2 에서 +1 하여 ★3.
  tier: star_3
  mechanism_primary: "여학생은 2반으로 확정(1가지) → 남학생 ₂Π₅ → 1반·3반 한쪽 몰림 2가지 제외"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$30$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/18-18.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "남녀 인원(5·4 → 6·3)과 반의 개수(3 → 5)를 바꿀 수 있다. 제약: 반의 개수를 5로 늘리면 홀수 반이 3개·짝수 반이 2개가 되어 양쪽 모두 여사건이 필요해지고 포함배제로 커진다. 반이 3개일 때만 여학생 쪽이 1가지로 확정된다."
    creative: "(1) 반을 4개로 바꿔 홀·짝이 각각 2개가 되게 하면 남녀 모두 '적어도 1명' 제외가 필요해 ★4 (2) 「남학생은 2반에 배정하지 않는다」처럼 금지 조건으로 바꾸면 I-EQV 1개만 남아 ★2 (3) 「어느 반도 3명을 넘지 않게」 상한을 주면 경우 분할·검증이 붙어 ★4."
```

```yaml
- id: GN-PROB-19-e2
  page: 19
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수·발전 예제"
  summary: |
    두 기호를 일렬로 나열해 신호를 만들 때, 기호를 1개 이상 4개 이하로 사용하여 만들 수 있는 서로 다른 신호의 개수.
  category: "사용 개수별로 중복순열을 구해 더하기"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "신호의 개수 — 개수를 달리한 중복순열의 합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    사용하는 기호 개수가 1·2·3·4 로 갈리므로 각각 ₂Π₁ ~ ₂Π₄ 를 구해 더한다. 길이가 다르면 서로 다른 신호이므로 배반이고 그대로 합의 법칙이다.
    같은 공식을 네 번 쓰는 구조라 독립 시나리오 분기로 보지 않아 통찰 없음. M_total 5 · 필수 신호 ★2 유지.
  tier: star_2
  mechanism_primary: "길이 1~4 각각의 중복순열 2¹+2²+2³+2⁴ → 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$30$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-prob/items/19-e2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기호 종류 수(2 → 3)와 길이 범위(1~4 → 2~5·1~5)를 바꿀 수 있다. 제약: 길이별 값이 등비수열이므로 합이 커지기 쉽고, 하한을 1보다 크게 두면 앞쪽 항을 빼는 처리가 추가된다."
    creative: "(1) 「적어도 한 번은 특정 기호를 쓴다」를 더하면 여사건 합이 되어 ★3 (2) 길이를 n 으로 일반화하고 개수가 100 이상이 되는 최소 n 을 묻기(19-20 골조 · ★3) (3) 같은 기호를 연속해 쓸 수 없다는 조건이면 점화식이 생겨 I-PD ★4."
```

```yaml
- id: GN-PROB-19-19
  page: 19
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "필수·발전 예제"
  summary: |
    청색·녹색·적색 세 깃발을 1번 이상 3번 이하로 들어 올려 만들 수 있는 서로 다른 신호의 개수(동시에 둘 이상 들지 않는다).
  category: "드는 횟수별로 중복순열을 구해 더하기"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "신호의 개수 — 개수를 달리한 중복순열의 합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    「동시에 둘 이상 들지 않는다」가 매 회 한 색을 고른다는 뜻이므로 횟수 1·2·3 각각 ₃Π₁ ~ ₃Π₃ 을 더한다. 같은 색을 다시 들어도 되는 것이 중복순열의 근거다.
    19-e2 와 같은 골조의 유제. 통찰 없음·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "횟수 1~3 각각의 중복순열 3¹+3²+3³ → 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$39$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/19-19.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "깃발 종류(3 → 2·4)와 횟수 범위(1~3 → 1~4)를 바꿀 수 있다. 제약: 3⁴=81 처럼 항이 급히 커지므로 종류를 늘리면 횟수 상한을 줄인다. 「동시에 들지 않는다」 단서는 유지해야 한다."
    creative: "(1) 동시에 두 개까지 들 수 있게 하면 매 회 선택지가 늘어 ★3 (2) 「같은 색을 연달아 들 수 없다」로 바꾸면 곱의 구조가 바뀌어 ★3 (3) 신호가 50개 이상이 되는 최소 횟수를 묻기(★3)."
```

```yaml
- id: GN-PROB-19-20
  page: 19
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "필수·발전 예제"
  summary: |
    같은 깃발 n 개를 일렬로 놓고 각 깃발을 올리거나 내려 100개 이상의 서로 다른 신호를 만들 때 자연수 n 의 최솟값.
  category: "신호 수를 n 의 식으로 세운 뒤 부등식을 만족시키는 최소 자연수 찾기"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "신호 개수라는 결과 조건에서 출발해 깃발 수 n 을 역추적 — 먼저 신호 수를 2ⁿ 으로 일반화해야 부등식을 세울 수 있음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "신호의 개수 조건에서 개수의 최솟값 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    깃발이 같아도 자리가 구별되므로 각 자리가 올림·내림 2가지, 신호 수는 2ⁿ 이다. 여기서 2ⁿ ≥ 100 을 만족시키는 최소 자연수를 2의 거듭제곱을 키워 가며 찾는다.
    앞의 두 문항이 값을 구하는 데 비해 여기는 결과에서 n 을 되짚는 역방향이고 Mₐ 가 2(일반 n)로 오른다. [분류 이슈] 통찰 1개·depth 1 이라 +1 기준에는 못 미치지만 추상도를 근거로 ★3 으로 올렸다.
  tier: star_3
  mechanism_primary: "각 깃발 2가지 → 신호 수 2ⁿ → 2ⁿ ≥ 100 의 최소 자연수 n"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/19-20.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "목표 신호 수(100 → 200·500)와 각 깃발의 상태 수(2 → 3)를 바꿀 수 있다. 제약: 목표가 거듭제곱 값과 가까우면 경계에서 답이 갈리므로 2ⁿ 표를 다시 확인해야 하고, 상태 수를 3으로 바꾸면 3ⁿ 으로 답이 작아진다."
    creative: "(1) 「모두 내린 상태는 신호로 보지 않는다」를 더하면 2ⁿ−1 ≥ 100 이 되어 경계 검증(I-VF)이 붙고 ★4 (2) 깃발을 서로 다른 색으로 바꾸면 상태 수가 늘어 ★3 유지 (3) 신호 수가 정확히 128이 되는 n 을 묻기(★2)."
```

```yaml
- id: GN-PROB-20-e3
  page: 20
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수·발전 예제"
  summary: |
    ⑴ 1, 2, 3, 4 에서 중복을 허용해 3개를 택해 만드는 세 자리 자연수 중 홀수의 개수 ⑵ 0~5 에서 중복을 허용해 3개를 택해 만드는 세 자리 자연수의 개수.
  category: "제약이 있는 자리를 먼저 정하고 → 남은 자리는 중복순열"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "제한 조건이 있는 자연수의 개수(중복순열)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 홀수 조건이 일의 자리에만 걸리므로 일의 자리를 먼저 2가지로 정하고 앞 두 자리를 ₄Π₂ 로 채운다. ⑵ 는 최고 자리에 0을 쓸 수 없다는 제약이 백의 자리에만 걸려 5×6×6 이다.
    두 함정(홀수 자리 고정·최고 자리 0 제외)이 모두 표준 처리라 통찰 없음. M_total 6 · 필수 신호 ★2 유지.
  tier: star_2
  mechanism_primary: "제약 자리(일의 자리 홀수 / 최고 자리 0 제외) 먼저 고정 → 남은 자리를 중복순열로 채우고 곱하기"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $32$ ⑵ $180$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-prob/items/20-e3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "숫자 집합(1~4 · 0~5)과 자릿수(3 → 4), 조건(홀수 → 짝수·5의 배수)을 바꿀 수 있다. 제약: 0이 든 집합에서는 최고 자리 제외를 반드시 유지하고, 조건이 일의 자리에 걸릴 때만 자리 고정 한 번으로 끝난다(0이 조건 숫자에 포함되면 최고 자리와 겹쳐 분할이 생긴다)."
    creative: "(1) 0을 포함한 집합에서 짝수를 물어 일의 자리 0 과 최고 자리 제약이 겹치게 하면 경우 분할이 생겨 ★3(20-21 ⑴ 골조) (2) 「3의 배수」로 바꾸면 자리 합 조건이라 자리 독립이 깨져 ★4 (3) 「각 자리 숫자가 서로 다른」 조건을 더하면 순열로 되돌아가 ★2."
```

```yaml
- id: GN-PROB-20-e4
  page: 20
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수·발전 예제"
  summary: |
    1, 2, 3, 4 에서 중복을 허용해 4개를 택해 만드는 네 자리 자연수 중 2300보다 큰 수의 개수.
  category: "윗자리부터 크기를 비교해 배반인 경우로 분할 → 각 경우 중복순열 → 합"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「2300보다 크다」가 천의 자리가 큰 경우와 천의 자리가 같고 백의 자리로 갈리는 경우로 나뉘어, 각 갈래를 빠뜨리지 않고 모두 세어야 함"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "특정 수보다 큰 자연수의 개수(중복순열·자리별 분할)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    천의 자리가 3 이상이면 뒤는 자유, 천의 자리가 2면 백의 자리가 3 이상인지에서 다시 갈리고, 백의 자리가 3일 때 뒤 두 자리가 무엇이든 2300을 넘는지까지 확인해야 한다. 자리별 사전식 분할을 빠뜨림 없이 세우는 것이 전부다.
    분기 전부가 답에 기여하므로 I-MI d2 하나. M_total 7 → 필수 출발점 ★2 에서 +1 하여 ★3.
  tier: star_3
  mechanism_primary: "천의 자리 3·4 → 자유 / 천의 자리 2 → 백의 자리 3·4 로 다시 분할 → 각 경우 중복순열의 합"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$160$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-prob/items/20-e4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준 수(2300)와 숫자 집합(1~4 → 1~5)을 바꿀 수 있다. 제약: 기준 수의 각 자리가 집합 안의 숫자여야 분할이 깔끔하고, 기준 수 자체가 만들 수 있는 수인지에 따라 「보다 큰」에서 1개를 빼야 할지가 갈린다(20-22 참조)."
    creative: "(1) 기준 수를 2310처럼 뒷자리까지 걸리게 하면 분할이 한 층 깊어져 ★4 (2) 「2300보다 작은 수」로 뒤집어 여사건을 쓰게 하면 I-SC 추가 ★3 (3) 집합에 0을 넣으면 최고 자리 제약이 겹쳐 ★4."
```

```yaml
- id: GN-PROB-20-21
  page: 20
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "필수·발전 예제"
  summary: |
    ⑴ 0~5 에서 중복을 허용해 4개를 택해 만드는 네 자리 자연수 중 짝수의 개수 ⑵ 0~4 에서 중복을 허용해 만드는 세 자리 이하 자연수의 개수.
  category: "제약 자리 고정 → 나머지 중복순열 / 자릿수별로 나누어 합하기"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "제한 조건이 있는 자연수의 개수(중복순열)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑴ 은 최고 자리(0 제외)와 일의 자리(짝수) 두 곳에 제약이 걸리고 두 제약이 서로 다른 자리라 곱으로 처리된다. ⑵ 는 한 자리·두 자리·세 자리를 각각 세어 더하되 매번 최고 자리 0 제외를 다시 적용해야 한다.
    처리 자체는 표준이라 통찰 없음. 제약 두 개 + 자릿수 분할로 M_total 7 → 유제 출발점 ★2 에서 +1 하여 ★3. [분류 이슈] 통찰 없이 절차 부담만으로 오른 사례.
  tier: star_3
  mechanism_primary: "최고 자리 0 제외 × 일의 자리 짝수 × 나머지 자유 / 자릿수 1·2·3 각각 세어 합"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '⑴ $540$ ⑵ $124$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/20-21.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "숫자 집합(0~5 · 0~4)과 자릿수 상한(4 · 3), 조건(짝수 → 5의 배수)을 바꿀 수 있다. 제약: 일의 자리 조건 숫자에 0이 들어가면 최고 자리 제약과 겹치는지 늘 확인해야 하고(여기서는 자리가 달라 겹치지 않는다), 자릿수 합산에서는 매 자릿수마다 최고 자리 제외를 다시 걸어야 한다."
    creative: "(1) 「네 자리 이하의 홀수」처럼 조건과 자릿수 합산을 동시에 걸면 ★4 (2) 세 자리 이하를 「1000 이하」로 바꾸면 경계 처리가 생겨 I-VF ★4 (3) ⑴ 에서 「각 자리가 서로 다른 짝수」로 바꾸면 순열로 전환 ★3."
```

```yaml
- id: GN-PROB-20-22
  page: 20
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "필수·발전 예제"
  summary: |
    0, 1, 2, 3 에서 중복을 허용해 4개를 택해 만드는 네 자리 자연수 중 2000보다 큰 수의 개수.
  category: "최고 자리로 분할해 세고 → 기준 수 자신을 조건 위배로 제외"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "천의 자리가 2 또는 3인 수를 모두 센 뒤, 그중 2000 자신은 「2000보다 크다」를 만족하지 않으므로 사후에 1개를 기각해야 함"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "특정 수보다 큰 자연수의 개수 — 경계값 제외(중복순열)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    천의 자리가 2·3 이면 뒤 세 자리는 자유이므로 곱만 하면 되지만, 이렇게 센 안에 2000 자신이 들어 있어 「보다 큰」 조건에서 1개를 빼야 한다. 검증을 건너뛰면 곧바로 틀린 답에 도달하므로 이 기각 단계가 문항의 본질이다.
    사후 기각 1개 → I-VF d2, M_total 6 → 유제 출발점 ★2 에서 +1 하여 ★3. 바로 앞 20-e4 와 대비되는 경계 함정 문항이다.
  tier: star_3
  mechanism_primary: "천의 자리 2·3 → 뒤 세 자리 ₄Π₃ → 2000 자신 1개 제외"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$127$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/20-22.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준 수(2000)와 숫자 집합(0~3 → 0~4)을 바꿀 수 있다. 제약: 기준 수가 집합의 숫자로 만들 수 있는 수여야 제외 1개가 생기고, 만들 수 없는 수(예: 2500)로 바꾸면 검증 단계가 사라져 유형이 달라진다."
    creative: "(1) 「2000 이상」으로 바꾸면 기각이 사라져 ★2 로 내려간다 — ★ 가 바뀌는 지점이 정확히 여기다 (2) 기준 수를 2100처럼 백의 자리까지 걸리게 하면 분할과 기각이 함께 생겨 ★4 (3) 「2000보다 크고 3000보다 작은」 범위로 주면 양쪽 경계 검증 ★4."
```

```yaml
- id: GN-PROB-21-e5
  page: 21
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수·발전 예제"
  summary: |
    X 의 원소가 3개, Y 의 원소가 5개일 때 X 에서 Y 로의 함수의 개수 m, 일대일함수의 개수 n 에 대하여 m+n 의 값.
  category: "함수를 정의역 원소별 대응 선택으로 번역 → 중복순열과 순열로 계산"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「X 에서 Y 로의 함수」를 정의역 원소 각각이 공역에서 하나를 택하는 나열로 옮겨 중복순열로, 일대일 조건이 붙으면 순열로 번역"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "함수의 개수와 일대일함수의 개수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    함수의 정의(정의역의 각 원소에 공역의 원소가 꼭 하나 대응)를 개수 세기 언어로 옮기면 정의역 3개가 r, 공역 5개가 n 인 중복순열이고, 일대일이면 값이 겹칠 수 없으므로 순열이다. 정의역과 공역의 역할을 뒤집는 것이 대표 함정이다.
    함수 ↔ 나열 번역 1개(I-RT d2)·Mₐ 2 · M_total 6 → 필수 출발점 ★2 에서 +1 하여 ★3.
  tier: star_3
  mechanism_primary: "함수 = 정의역 원소별 공역 선택 → 5³ / 일대일 = 값이 겹치지 않는 선택 → 5P3 → 합"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$185$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-prob/items/21-e5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 집합의 원소 개수(3·5 → 4·5·2·6)를 바꿀 수 있다. 제약: 일대일함수가 존재하려면 정의역의 크기가 공역의 크기 이하여야 하고, 뒤집으면 n=0 이 되므로 문항이 성립하지 않는다."
    creative: "(1) 「일대일대응의 개수」를 함께 물으면 두 집합 크기가 같아야 한다는 조건 검토가 붙어 ★4 (2) 「치역의 원소가 2개인 함수」로 바꾸면 포함배제가 필요해 ★4 (3) m−n 이나 m:n 을 묻는 형태로 바꾸면 계산만 달라지고 골조는 유지(★3)."
```

```yaml
- id: GN-PROB-21-23
  page: 21
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "필수·발전 예제"
  summary: |
    X 의 원소가 2개, Y 의 원소가 n 개일 때 X 에서 Y 로의 함수의 개수가 64 이면 자연수 n 의 값.
  category: "함수의 개수를 n 의 식으로 번역 → 방정식 풀기"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "X 에서 Y 로의 함수의 개수를 ₙΠ₂ = n² 이라는 식으로 번역해야 미지수 방정식을 세울 수 있음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "함수의 개수 조건에서 공역의 크기 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    정의역 원소가 2개이므로 함수의 개수는 n² 이고, n²=64 에서 자연수 n 은 8 하나다. 번역만 하면 방정식은 한 줄이다.
    I-RT d1 하나에 Mₐ 2 로 M_total 5. 통찰 1개·depth 1 이라 유제 출발점 ★2 를 그대로 둔다. 21-e5 의 역방향 유제.
  tier: star_2
  mechanism_primary: "함수의 개수 = ₙΠ₂ = n² → n² = 64 → 자연수 n"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/21-23.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정의역 원소 수(2 → 3)와 함수의 개수(64 → 125·81)를 바꿀 수 있다. 제약: 주어진 개수가 nʳ 꼴로 자연수 n 을 주는 값이어야 하고, r 이 짝수면 음의 해를 자연수 조건으로 버리는 단계가 생긴다."
    creative: "(1) 「일대일함수의 개수가 20」으로 바꾸면 n(n−1)=20 이차방정식이 되고 음의 해 기각(I-VF)이 붙어 ★3 (2) 정의역 크기도 미지수로 두고 순서쌍을 모두 구하게 하면 I-MI ★4 (3) 개수가 64 이하가 되는 n 의 최댓값으로 바꾸면 부등식 ★3."
```

```yaml
- id: GN-PROB-21-24
  page: 21
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "필수·발전 예제"
  summary: |
    X = {1, 2, 3, 4}, Y = {5, 6, 7, 8, 9} 일 때 f(1), f(3) 은 짝수이고 f(2), f(4) 는 홀수인 함수 f 의 개수.
  category: "정의역을 조건별로 나누고 공역을 짝·홀로 좁힘 → 각 묶음의 중복순열을 곱하기"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "함수의 개수를 정의역 원소마다 공역에서 하나를 고르는 중복순열로 번역"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「f(1), f(3) 은 짝수」를 공역을 짝수 2개짜리 부분집합으로 좁히는 조건으로 바꾸어, 정의역을 두 묶음으로 나눈 독립 선택의 곱으로 만듦"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "조건이 붙은 함수의 개수 — 공역을 나누어 중복순열"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    Y 안에서 짝수는 2개, 홀수는 3개다. 조건이 정의역을 {1, 3} 과 {2, 4} 두 묶음으로 갈라 놓고 각 묶음의 선택지 수가 달라지므로, 두 묶음의 중복순열을 따로 구해 곱한다. 함수 번역 1개 + 공역 분할 해석 1개로 통찰 2개.
    Mₐ 2 · M_total 6 · 통찰 2개 → 유제 출발점 ★2 에서 +1 하여 ★3.
  tier: star_3
  mechanism_primary: "Y 를 짝수 2개·홀수 3개로 분할 → {f(1), f(3)} 은 2², {f(2), f(4)} 는 3² → 곱"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$36$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/21-24.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공역 Y 의 원소(5~9 → 1~6 등)와 조건이 걸리는 정의역 원소의 묶음 크기를 바꿀 수 있다. 제약: 공역의 짝수·홀수 개수를 매번 다시 세어야 하고, 어느 한쪽이 0개가 되면 답이 0이 되므로 양쪽 모두 1개 이상이어야 한다."
    creative: "(1) 「f(1) < f(2)」 같은 대소 조건으로 바꾸면 조합 계수가 필요해 ★4 (2) 「f(1), f(3) 의 값이 서로 다르다」를 더하면 그 묶음만 순열이 되어 ★3 유지·함정 1개 추가 (3) 조건을 「치역이 짝수만으로 이루어진다」로 바꾸면 포함배제 ★4."
```

## 표본 판정 요약 (33문)

- ★ 분포: ★1 11 · ★2 13 · ★3 9 · ★4 0 · ★5 0
- 통찰형 8 · 절차형 25 · premium 0
- 통찰 유형 분포: I-RT 3 · I-SC 2 · I-EQV 2 · I-MI 1 · I-VF 1 · I-BW 1 (총 라벨 10개 · depth 3 없음)
- 구역별 ★ 중앙값: 특강 ★1~2(★1 7 · ★2 6 · ★3 2) · 개념원리 익히기 ★1(4문 모두) · 필수·발전 예제 ★2~3(★2 7 · ★3 7)
- type_hint 상위: 「중복순열의 수 — 서로 다른 것을 대상에 배정하기」 3 · 「함수의 개수」 계열 3 · 「신호의 개수 — 개수를 달리한 중복순열의 합」 2 · 「제한 조건이 있는 자연수의 개수(중복순열)」 2 · 「특정 수보다 큰 자연수의 개수(중복순열·자리별 분할)」 2
- 그림: 0문(전 문항 `figure: none`)
- 대상층: 하위권 11 · 중하위권 10 · 중위권 6 · 중상위권 6

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-PROB-12-4 | 「특강」 구역 신호는 ★2~3 이지만 11~14쪽 특강은 심화가 아니라 경우의 수 선수 복습 — 약수 개수 공식 한 줄이라 ★1. 같은 사유로 11-1·12-3·12-5·13-6·13-7·14-9 도 ★1 로 두었다 | ★1 / ★3 |
| GN-PROB-13-6 | 위와 같은 구역 차원 어긋남. 4! 한 줄이라 벤더 「특강」 신호와 2단 차이 | ★1 / ★3 |
| GN-PROB-14-10 | 통찰 0 인데 조합·순열·여사건 3층 절차 부담(M_total 6)만으로 ★3. 통찰 기준으로만 보면 ★2 | ★2 / ★3 |
| GN-PROB-18-e1 | v3.8 산식은 통찰 0·M_total 4 → −1(★1) 이지만 단원 대표 유형(n·r 식별)이라 필수 신호 ★2 를 유지 | ★1 / ★2 |
| GN-PROB-19-20 | 통찰 1개·depth 1 이라 +1 기준을 못 채우지만 Mₐ=2(일반 n)와 역방향 부등식을 근거로 ★3. 조정 규칙 밖의 근거 | ★2 / ★3 |
| GN-PROB-20-21 | 확인체크인데 ⑴⑵ 모두 다단계(M_total 7) → 통찰 0 상태로 ★3. 절차 부담만으로 오른 사례(★4 천장 정책상 허용 범위) | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형** ⑴ 「중복순열의 기본 배정」(18-e1·18-16·18-17 · 무엇이 n 이고 무엇이 r 인가만 묻는 ★2 층) ⑵ 「신호·부호의 개수」(19-e2·19-19 · 길이별 중복순열의 합 · 19-20 은 여기에 부등식 최솟값이 얹힌 상위 변형) ⑶ 「중복순열로 만드는 자연수의 개수」(17-14·20-e3·20-21 · 최고 자리 0 제외와 일의 자리 조건이 핵심 함정) ⑷ 「특정 수보다 큰 자연수의 개수」(20-e4·20-22 · 자리별 사전식 분할 + 경계값 기각 — 앞 유형과 함정 구조가 달라 분리해야 한다) ⑸ 「함수의 개수」(21-e5·21-23·21-24 · 함수 ↔ 중복순열 번역이 공통 골조).
- **통합해도 될 유형** 18-16·18-17 은 18-e1 과 숫자만 다른 동형이라 한 유형의 난이도 변형으로 묶으면 된다. 19-e2 와 19-19 도 마찬가지다. 17-12·17-13 은 「ₙΠᵣ 정의·계산」 한 유형 아래 정방향·역방향 두 변형으로 둘 수 있다.
- **이 범위 밖으로 보낼 것** 11~14쪽 「특강」 15문항은 중복순열이 아니라 경우의 수(합·곱의 법칙·순열·조합) 복습이다. 카탈로그를 만들 때는 이 단원이 아니라 선수 단원 유형으로 등재하는 편이 맞다.
- **★4 이상 슬롯 부재** 이 범위에는 ★4·★5 가 없고 depth 3 통찰도 없다. 저노출 유형(SC·VF·SYM·XU) 은 I-SC 2·I-VF 1 만 나타났으므로, 이 단원에서 ★4 슬롯을 만들려면 `variation_notes.creative` 에 적어 둔 확장(18-17 의 「모든 호텔에 적어도 1명」 포함배제, 20-22 의 양쪽 경계 검증, 21-e5 의 치역 조건)을 원본으로 쓰는 것이 좋다.
