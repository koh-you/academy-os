---
name: mechanism-데이터-GN-PROB-02
description: 개념원리 확률과 통계 02 같은 것이 있는 순열(1/1 · 24~31쪽 33문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 확률과 통계 (22개정) · 전사본 latex-bank/gn-prob
  section: 02 같은 것이 있는 순열
  unit_code: GN-PROB-02
  part: "1/1"
  extract_range: "24~31쪽 · 24-e6~31-52"
  total_problems: 33
  unit_total: 33
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). insight_type 은 insights 유무로 결정(빈 배열이면 절차형). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-prob/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-prob/items/<id>.tex
  image_source: latex-bank/gn-prob/figures/ (crops.json)
---

# 개념원리 확률과 통계 · 02 같은 것이 있는 순열 (1/1) 정독 데이터 (v1.0)

이 파일은 24~31쪽의 33문항 전수를 다룬다. 구역은 네 개다. 「필수·발전 예제」(24~28쪽 · 17문)는 필수 예제 `24-e6`~`27-e9`, 발전 예제 `28-e10` 과 그 바로 아래의 `확인체크` 짝 문항으로 이루어진다. 이어서 「연습문제 STEP 1」(6문) · 「연습문제 STEP 2」(7문) · 「연습문제 실력 UP」(3문)이 온다.

벤더 난이도 신호는 구역과 태그다. `필수` ★2 · `발전` ★3 · STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4 를 출발점으로 삼았고, `확인체크` 는 「개념원리 익히기」 의 확인체크가 아니라 **바로 위 예제의 짝 문항**이므로 그 예제의 출발점(필수 ★2 · 발전 ★3)을 물려받게 두었다. 출발점에서 M_total·통찰로 ±1 조정했다. `교육청 기출` 태그는 통찰이 실제로 늘어난 경우에만 +1 로 반영했다.

단원 내용은 같은 것이 있는 순열 한 갈래지만, 실제 문항은 (가) 문자·숫자 나열에서 자리 고정·묶음·순서 고정, (나) 0 을 포함한 자연수 만들기, (다) 최단 거리 도로망(격자 공식 · 누적 합 · 입체)의 세 골조로 갈린다. 연습문제 일부는 앞 절(중복순열·함수의 개수) 내용이라 type_hint 가 단원명과 어긋나는데, 파일 끝 「분류 이슈 목록」 에 모았다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-PROB-24-e6
  page: 24
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ tomorrow 의 8개 문자를 일렬로 나열할 때 양 끝에 o 를 놓는 경우의 수 ⑵ agreement 의 9개 문자를 나열할 때 모음끼리 이웃하게 놓는 경우의 수.
  category: "같은 것이 있는 순열 → 자리 고정 · 묶음 처리"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "문자를 나열하는 경우의 수 — 특정 문자 자리 고정·이웃 묶기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 양 끝에 o 두 개를 고정하면 남은 6개(r 2개)의 같은 것이 있는 순열. ⑵ 모음 4개(e 3개)를 한 묶음으로 보고 묶음 배열 × 묶음 내부 배열.
    둘 다 단원이 절차로 제시하는 기법이라 통찰 카운트 없음. 필수 예제 출발 ★2 유지(두 기법을 한 문항에서 쓰므로 −1 하지 않음).
  tier: star_2
  mechanism_primary: "양 끝 고정 → 남은 문자의 같은 것이 있는 순열 · 모음 묶음 → 묶음 배열 × 묶음 내부 배열"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $360$ ⑵ $2880$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-prob/items/24-e6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "단어를 바꿔 반복 문자 구성을 조정(o 3개 → 2개 · r 2개 → 3개). 제약: 양 끝에 놓는 문자는 2개 이상 있어야 하고, 묶음 조건에서는 묶는 문자 안의 중복 수가 내부 배열의 분모를 따로 결정하므로 바깥·안쪽 분모를 각각 다시 잡아야 한다."
    creative: "(1) 양 끝을 '모두 모음'처럼 집합 조건으로 바꾸면 분기가 생겨 ★3 (2) '이웃하지 않도록'으로 뒤집으면 여사건이나 사이 끼우기로 골조가 바뀌며 ★3 (3) 양 끝 조건과 이웃 조건을 한 문항에 동시에 걸면 I-MI 가 붙어 ★3."
```

```yaml
- id: GN-PROB-24-25
  page: 24
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    condition 의 9개 문자를 일렬로 나열할 때 양 끝에 n 을 나열하는 경우의 수.
  category: "양 끝 문자 고정 → 남은 문자의 같은 것이 있는 순열"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "양 끝에 특정 문자를 고정하는 나열의 수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    n 2개를 양 끝에 고정하면 남은 7개(o 2개 · i 2개)의 7!/(2!2!). 앞 예제 ⑴ 과 같은 한 기법이지만 남은 문자에서 중복이 무엇인지 다시 파악하는 단계가 있다.
    필수 예제 짝 문항 출발 ★2, 통찰 없음·M_total 5 지만 중복이 두 종류라 −1 하지 않고 ★2.
  tier: star_2
  mechanism_primary: "n 2개를 양 끝에 고정 → 남은 7개(o 2개 · i 2개)의 같은 것이 있는 순열 7!/(2!2!)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$1260$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/24-25.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "양 끝에 놓는 문자의 개수(2개 → 3개 이상)와 남은 문자의 중복 수. 제약: 양 끝 문자가 정확히 2개면 고정 방법은 1가지, 3개 이상이면 어느 두 개를 끝에 놓을지가 같은 문자라 여전히 1가지지만 남은 문자에 그 문자가 남아 분모가 달라진다."
    creative: "(1) '양 끝이 모두 모음'으로 바꾸면 어떤 모음을 놓느냐로 분기가 생겨 ★3 (2) 'n 2개가 이웃하지 않도록'이면 여사건 ★3 (3) '특정 문자가 처음과 끝에 오지 않도록'이면 여사건 두 번 ★3."
```

```yaml
- id: GN-PROB-24-26
  page: 24
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    calendar 의 8개 문자를 일렬로 나열할 때 자음끼리 이웃하도록 나열하는 경우의 수.
  category: "자음 묶음 → 묶음 포함 배열(a 2개 중복) × 묶음 내부 배열"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "특정 문자끼리 이웃하게 나열하는 경우의 수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    자음 5개를 한 묶음으로 보면 바깥은 묶음 + 모음 3개(a 2개)의 4!/2!, 묶음 안은 5!. 이웃 조건을 묶음으로 바꾸는 표준 절차다.
    바깥 배열에 중복이 남아 분모를 한 번 더 잡는 단계가 있어 필수 예제 짝 문항 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "자음 5개를 한 묶음으로 → 묶음 + 모음 3개(a 2개) 배열 4!/2! → 묶음 내부 5! → 곱"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$1440$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/24-26.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "단어를 바꿔 자음·모음 개수와 중복 위치를 조정. 제약: 묶음 바깥에 남는 중복(a 2개)이 4!/2! 의 분모를, 묶음 안의 중복이 5! 의 분모를 각각 결정하므로 두 곳을 따로 계산해야 한다."
    creative: "(1) '모음끼리 이웃하도록'으로 바꾸면 중복이 묶음 안으로 옮겨가 같은 ★2 (2) '자음끼리 이웃하지 않도록'이면 모음 사이에 끼우기로 골조가 바뀌어 ★3 (3) '자음 묶음이 맨 앞·맨 뒤에 오지 않도록'을 더하면 여사건이 붙어 ★3."
```

```yaml
- id: GN-PROB-24-27
  page: 24
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    1, 2, 3, 3, 4 가 적힌 5장의 카드를 일렬로 나열할 때 1 과 2 가 적힌 카드 사이에 한 장이 오도록 하는 경우의 수(같은 숫자 카드는 구분하지 않음).
  category: "사이에 끼울 카드 분기 → 묶음 배열(분기마다 남은 카드의 중복이 다름)"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "가운데에 3이 오는 경우와 4가 오는 경우에 남은 두 장이 {3, 4} 인지 {3, 3} 인지 갈려 바깥 배열 수가 달라진다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "두 수 사이에 일정 개수를 끼워 넣는 나열의 수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    1□2 를 한 묶음으로 보고 1·2 의 순서 2가지를 곱하는 것까지는 표준이지만, 가운데 카드로 무엇을 넣느냐에 따라 남은 두 장의 중복 여부가 갈려 바깥 배열이 3! 과 3!/2! 로 나뉜다.
    같은 숫자를 구분하지 않는다는 단서가 T-표기 함정으로 걸려 있다. 분기 1개·M_total 7 → 확인체크 출발 ★2 에서 +1.
  tier: star_3
  mechanism_primary: "가운데 카드 선택으로 분기 → 1·2 순서 2가지 → 묶음 포함 3개 배열(남은 카드 중복 확인) → 두 경우 합"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$18$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/24-27.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "카드 구성(3이 2장 → 3장 · 숫자 종류 추가)과 사이에 끼우는 장수(한 장 → 두 장). 제약: 같은 숫자를 구분하지 않으므로 남은 카드의 중복 수가 바뀌면 바깥 배열의 분모가 바뀌고, 끼우는 장수를 늘리면 묶음 길이와 남은 장수가 같이 줄어 전체 자리 수를 다시 세야 한다."
    creative: "(1) '1과 2가 이웃하지 않도록'이면 여사건 한 번으로 끝나 ★2 (2) 사이에 끼울 카드를 '3이 적힌 카드'로 지정하면 분기가 사라져 ★2 (3) 사이의 카드 수를 '1장 이상'으로 열면 분기가 늘어 ★4."
```

```yaml
- id: GN-PROB-25-e7
  page: 25
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ 1, 1, 1, 2, 3 으로 만드는 다섯 자리 자연수 ⑵ 0, 1, 1, 2, 2, 2 로 만드는 여섯 자리 자연수 ⑶ 1, 1, 1, 2, 2 중 4개를 택해 만드는 네 자리 자연수의 개수.
  category: "같은 것이 있는 순열 → 맨 앞 0 제외 → 택한 구성별 분기 합"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "같은 숫자가 있는 카드로 만드는 자연수의 개수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 5!/3!, ⑵ 는 전체에서 맨 앞이 0 인 경우를 빼는 표준 절차, ⑶ 은 택한 4개의 구성((1,1,1,2)·(1,1,2,2))별로 나눠 더한다.
    세 기법 모두 예제가 절차로 제시하는 것이라 통찰 카운트 없음. 맨 앞 0(T-범위)이 걸려 M_total 7 이지만 필수 예제 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "같은 것이 있는 순열 → (0 이 있으면) 맨 앞 0 인 경우를 빼기 → (일부만 택하면) 구성별로 나눠 센 뒤 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $20$ ⑵ $50$ ⑶ $10$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-prob/items/25-e7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 숫자의 개수와 0 의 포함 여부, 택하는 개수(4개 → 3개). 제약: 0 이 들어가면 반드시 맨 앞 제외를 빼야 하고, 일부만 택하는 ⑶ 유형은 가능한 개수 조합이 모두 나열될 만큼 종류가 적어야 한다."
    creative: "(1) '홀수·짝수만' 조건을 붙이면 끝자리 분기가 생겨 ★3 (2) '5의 배수'로 바꾸면 끝자리 0·5 분기와 맨 앞 0 제약이 겹쳐 ★3 (3) '3의 배수'로 바꾸면 자릿수 합 판정이 들어와 ★4."
```

```yaml
- id: GN-PROB-25-28
  page: 25
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    1, 1, 1, 2, 2 를 모두 사용하여 만드는 다섯 자리 자연수 중 홀수의 개수.
  category: "끝자리 홀수 고정 → 남은 네 자리의 같은 것이 있는 순열"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "같은 숫자로 만드는 자연수 중 홀수·짝수의 개수(끝자리 고정)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    홀수가 되려면 끝자리가 1 뿐이라 분기가 없고, 남은 1, 1, 2, 2 의 4!/(2!2!) 한 줄로 끝난다.
    통찰 없음·M_total 4 → 확인체크 출발 ★2 에서 −1.
  tier: star_1
  mechanism_primary: "홀수 → 끝자리는 1 뿐 → 남은 1, 1, 2, 2 의 4!/(2!2!)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/25-28.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "1 과 2 의 개수(3개·2개 → 2개·3개), 자릿수. 제약: 끝자리 후보가 한 종류여야 분기 없이 ★1 이 유지된다. 홀수 후보가 둘 이상이 되면 분기가 생겨 난도가 올라간다."
    creative: "(1) 숫자에 3 을 끼워 홀수 후보를 둘로 만들면 분기 ★2 (2) 0 을 넣어 짝수를 물으면 맨 앞 0 제약과 겹쳐 ★3 (3) '홀수의 개수'가 아니라 '홀수의 합'을 물으면 자리별 기여를 세야 해 ★4."
```

```yaml
- id: GN-PROB-25-29
  page: 25
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    0, 1, 1, 1, 2, 2, 3 을 모두 사용하여 만드는 일곱 자리 자연수 중 짝수의 개수.
  category: "끝자리 0/2 분기 → 각 경우의 같은 것이 있는 순열 → 맨 앞 0 제외"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "끝자리가 0 인 경우와 2 인 경우로 갈리는데, 맨 앞 0 제약이 끝자리 2 인 쪽에만 걸려 두 분기의 계산 형태가 다르다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "0 이 있는 숫자로 만드는 자연수 중 짝수의 개수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    끝자리 후보가 0 과 2 두 가지이고, 0 을 끝에 쓰면 맨 앞 제약이 사라지지만 2 를 쓰면 남은 수에 0 이 남아 맨 앞 0 을 따로 빼야 한다.
    분기마다 절차가 달라지는 지점이 학생이 자주 놓치는 곳이다. 분기 1개·M_total 7 → 확인체크 출발 ★2 에서 +1.
  tier: star_3
  mechanism_primary: "끝자리 0/2 분기 → 각 경우 남은 6개의 같은 것이 있는 순열 → 끝자리 2 인 쪽만 맨 앞 0 제외 → 합"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$160$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/25-29.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 숫자의 개수와 짝수 후보의 수(0, 2 → 0, 2, 4). 제약: 0 이 반드시 들어가야 두 분기의 비대칭(맨 앞 제약)이 생긴다. 짝수 후보를 늘리면 분기가 늘어 계산량만 커지고 골조는 그대로다."
    creative: "(1) '홀수'로 바꾸면 0 이 끝자리에 못 와 분기 비대칭이 사라져 ★2 (2) '5의 배수'로 바꾸면 끝자리 0 과 5 분기가 같은 골조로 유지되며 ★3 (3) '짝수이면서 맨 앞이 홀수'처럼 조건을 겹치면 ★4."
```

```yaml
- id: GN-PROB-25-30
  page: 25
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    1, 1, 2, 2, 2, 3, 3 중에서 4개를 택하여 만드는 네 자리 자연수 중 3의 배수의 개수.
  category: "3의 배수 판정 → 택한 네 수의 합 조건 → 구성별 같은 것이 있는 순열 합"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "3의 배수 판정(각 자리 수의 합)을 끌어와 '어떤 네 수를 택하는가' 의 합 조건으로 문제를 갈아탄다"
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "1·2·3 의 개수 조합(각각 2개·3개·2개 이하) 중 합이 3의 배수인 것만 추려 각 구성을 따로 센다"
  insight_count: 2
  depth_score: 4.00
  type_id: null
  type_hint: "같은 숫자에서 일부를 택해 만드는 3의 배수의 개수"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    나열을 세기 전에 '무엇을 택하는가' 로 문제를 옮겨야 한다. 3의 배수 판정을 합 조건으로 바꾸고, 보유 개수 상한(1 은 2개·2 는 3개·3 은 2개)을 지키는 구성만 추린 뒤 구성별로 같은 것이 있는 순열을 더한다.
    통찰 2개·M_total 8. [분류 이슈] 벤더 확인체크(필수 예제 짝 ★2 신호)와 판정 ★4 가 2단 어긋나지만 라벨을 낮추지 않고 기록만 한다.
  tier: star_4
  mechanism_primary: "3의 배수 → 자릿수 합 조건 → 보유 개수 안에서 합이 3의 배수인 구성 추리기 → 구성별 4!/(중복!) 합"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$22$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/25-30.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 숫자의 보유 개수와 택하는 개수(4개 → 5개), 배수 조건(3 → 9 는 불가·4 나 6 은 가능). 제약: 보유 개수 상한을 넘는 구성이 섞이지 않게 상한을 먼저 고정해야 하고, 답이 손으로 셀 수 있을 만큼 구성 수가 적어야 한다."
    creative: "(1) '4의 배수'로 바꾸면 끝 두 자리 조건이라 골조가 끝자리 분기로 옮겨가며 ★3 (2) 보유 개수를 넉넉히 주고 '중복을 허락하여'로 바꾸면 중복순열 + 합 조건이 되어 ★4 (3) '3의 배수가 아닌 것'으로 뒤집으면 여사건이 하나 더 붙어 ★4."
```

```yaml
- id: GN-PROB-26-e8
  page: 26
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    climate 의 7개 문자를 일렬로 나열할 때 m, a, t, e 를 이 순서대로 나열하는 경우의 수.
  category: "순서가 정해진 문자 → 같은 문자로 보고 나누기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "순서가 정해진 문자가 있는 나열의 수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    순서가 정해진 4개를 같은 문자 하나로 바꿔 7!/4! 로 세는 것이 이 예제가 가르치는 절차 그 자체다.
    단계가 짧지만(M_total 4) 단원 핵심 기법의 첫 제시라 필수 예제 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "순서가 정해진 4개를 같은 문자로 보기 → 7!/4!"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$210$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-prob/items/26-e8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "전체 문자 수와 순서가 정해진 문자 수(4개 → 3개). 제약: 순서가 정해진 문자끼리는 서로 달라야 하며, 원래 단어에 중복 문자가 있으면 그 분모까지 함께 나눠야 한다."
    creative: "(1) 순서가 정해진 묶음을 둘로 나누면(두 쌍 각각 순서 고정) 분모가 2!×2! 로 ★2~3 (2) '이 순서대로 이웃하여'로 바꾸면 묶음 문제가 되어 ★2 (3) 중복 문자가 있는 단어로 바꾸면 두 종류의 나눗셈이 겹쳐 ★2."
```

```yaml
- id: GN-PROB-26-31
  page: 26
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    study 의 5개 문자를 일렬로 나열할 때 d 가 y 보다 앞에 오도록 나열하는 경우의 수.
  category: "두 문자의 순서 고정 → 전체의 절반"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 문자의 앞뒤 순서가 정해진 나열의 수"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    5개가 모두 다르고 순서가 정해진 문자가 두 개뿐이라 5!/2! 한 줄이다.
    통찰 없음·M_total 4 → 확인체크 출발 ★2 에서 −1.
  tier: star_1
  mechanism_primary: "d, y 를 같은 문자로 보기 → 5!/2!"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$60$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/26-31.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "전체 문자 수와 순서를 정하는 문자 수(2개 → 3개). 제약: 순서를 정하는 문자 수가 k 이면 분모가 k! 이고, 단어에 중복 문자가 있으면 분모를 하나 더 곱해야 한다."
    creative: "(1) 'd 가 y 바로 앞'으로 바꾸면 묶음 문제 ★2 (2) 중복 문자가 있는 단어로 바꾸면 두 분모가 겹쳐 ★2 (3) 순서 조건을 두 쌍으로 늘리면 ★2~3."
```

```yaml
- id: GN-PROB-26-32
  page: 26
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    technique 의 9개 문자를 일렬로 나열할 때 t, n, i 를 이 순서대로 나열하는 경우의 수.
  category: "중복 문자 나누기 + 순서 고정 나누기(두 분모)"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "순서가 정해진 문자가 있는 나열의 수(중복 문자 포함)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e 가 2개라 같은 것이 있는 순열의 분모 2! 와 t, n, i 의 순서 고정에서 오는 분모 3! 을 함께 나눠 9!/(2!×3!) 로 센다.
    성격이 다른 두 나눗셈을 한 식에 모으는 한 단계가 추가된다. 통찰 없음·M_total 5 → 확인체크 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "중복 문자 e 2개와 순서가 정해진 t, n, i 를 함께 처리 → 9!/(2!×3!)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$30240$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/26-32.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "중복 문자의 개수와 순서를 정하는 문자 수. 제약: 순서를 정하는 문자 안에 중복 문자가 섞이면 두 분모가 독립이 아니게 되므로 서로 다른 문자로 골라야 한다."
    creative: "(1) 순서를 정하는 문자에 중복 문자(e)를 포함시키면 분모 계산이 엉켜 ★3 (2) '이 순서대로 이웃하여'로 바꾸면 묶음 ★2 (3) 순서 조건을 두 쌍으로 쪼개면 ★2."
```

```yaml
- id: GN-PROB-26-33
  page: 26
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    happiness 의 9개 문자를 일렬로 나열할 때 모음이 자음보다 앞에 오도록 나열하는 경우의 수.
  category: "조건 → 앞 3자리 모음·뒤 6자리 자음으로 자리 확정 → 각각 배열"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'모음이 자음보다 앞' 을 '앞 3자리는 모음, 뒤 6자리는 자음' 으로 옮겨야 셀 수 있는 형태가 된다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "모음·자음의 앞뒤 순서가 정해진 나열의 수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    앞의 문항들처럼 두 문자의 순서가 아니라 집합끼리의 순서라, 조건을 자리 배정(앞 3칸 모음 · 뒤 6칸 자음)으로 바꾸는 한 단계가 먼저 필요하다.
    그 뒤는 3! × 6!/(2!2!) 로 표준. 통찰 1개(EQV d2)·M_total 6 → 확인체크 출발 ★2 에서 +1.
  tier: star_3
  mechanism_primary: "모음 3개가 앞 3자리를 차지한다고 확정 → 3! × 자음 6개(p 2개 · s 2개) 6!/(2!2!)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$1080$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/26-33.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "단어를 바꿔 모음·자음 개수와 중복 위치를 조정. 제약: 모음 수 + 자음 수 = 전체이므로 자리 분할이 유일하게 정해지고, 각 덩어리 안의 중복이 그 덩어리의 분모를 결정한다."
    creative: "(1) '모음끼리 순서가 a, e, i 로 정해져'로 바꾸면 순서 고정 나눗셈 ★2 (2) '모음이 모두 자음보다 앞'이 아니라 '첫 글자는 모음'이면 자리 하나만 고정돼 ★2 (3) '모음끼리 이웃하며 자음보다 앞'이면 묶음 + 자리 확정이 겹쳐 ★3."
```

```yaml
- id: GN-PROB-27-e9
  page: 27
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    격자 도로망에서 A 지점에서 C 지점을 거쳐 B 지점까지 최단 거리로 가는 경우의 수(C 는 격자 안쪽 한 점).
  category: "최단 경로 = 같은 것이 있는 순열 → 구간 분할 후 곱"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "특정 지점을 거치는 최단 경로의 수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    가로·세로 이동을 문자 나열로 보는 변환과 '거쳐 간다 → 구간을 나눠 곱한다' 가 이 예제가 가르치는 절차다.
    A→C 는 오른쪽 2·아래 1, C→B 는 오른쪽 2·아래 3 으로 각각 같은 것이 있는 순열. 통찰 카운트 없음, 필수 예제 출발 ★2.
  tier: star_2
  mechanism_primary: "A→C 와 C→B 로 구간 분할 → 각 구간을 같은 것이 있는 순열로 세고 곱"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$30$'
  answer_source: "본문 풀이"
  figure: crop:fig-27-e9.png
  latex: latex-bank/gn-prob/items/27-e9.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "격자 크기(4×4)와 C 의 위치. 제약: C 는 A 에서 B 로 가는 최단 경로 위(가로·세로 모두 A 와 B 사이)에 있어야 하고, 그림의 A·B·C 라벨 위치는 고정해 발문과 어긋나지 않게 한다."
    creative: "(1) 거쳐야 할 점을 둘로 늘리면 구간이 셋이 되어 ★2~3 (2) '거치지 않고'로 뒤집으면 여사건 ★3 (3) 도로 일부를 지우면 공식이 깨져 누적 합으로 전환 ★3."
```

```yaml
- id: GN-PROB-27-34
  page: 27
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    격자 도로망에서 A 지점에서 C 지점을 거치지 않고 B 지점까지 최단 거리로 가는 경우의 수.
  category: "전체 최단 경로 − C 를 거치는 경로(여사건)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "특정 지점을 거치지 않는 최단 경로의 수(여사건)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    '거치지 않고' 를 전체에서 거치는 경우를 빼는 여사건으로 처리하는 표준 절차. 다만 전체 경로 수, A→C, C→B 세 번의 조합 계산을 모두 해야 한다.
    통찰 카운트 없이도 계산 단계가 앞 예제의 두 배라 확인체크 출발 ★2 에서 +1.
  tier: star_3
  mechanism_primary: "전체 최단 경로 수 − (A→C) × (C→B)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$66$'
  answer_source: "답지"
  figure: crop:fig-27-34.png
  latex: latex-bank/gn-prob/items/27-34.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "격자 크기(가로 5·세로 4)와 C 의 위치. 제약: C 가 최단 경로 위에 없으면 빼는 항이 0 이 되어 문제가 성립하지 않는다. 그림의 블록 배치와 A·B·C 라벨은 고정."
    creative: "(1) 지나지 않아야 할 점을 둘로 늘리면 포함배제가 필요해 ★4 (2) 점이 아니라 도로 한 구간을 막으면 그 구간을 지나는 경로를 빼는 형태로 ★3 (3) '반드시 C 또는 D 를 거쳐'로 바꾸면 합집합 보정이 붙어 ★4."
```

```yaml
- id: GN-PROB-28-e10
  page: 28
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["발전"]
  category_type: "발전 예제"
  summary: |
    가운데 여러 구간의 도로가 빠져 있는 도로망에서 A 지점에서 B 지점까지 최단 거리로 가는 경우의 수.
  category: "격자 공식 불가 → 각 교차점 누적 합(합의 법칙)"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-SC
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "직사각형 격자가 아니어서 조합 공식이 통하지 않음을 먼저 보고, 각 교차점에 경우의 수를 적어 더하는(또는 구간을 나누는) 방법으로 갈아탄다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "도로가 일부 빠진 도로망의 최단 경로의 수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    같은 것이 있는 순열 공식을 그대로 쓰면 틀리는 첫 문항이다. 빠진 구간 때문에 지날 수 없는 꼭짓점이 생기므로, A 에서 시작해 각 교차점에 도달 경우의 수를 적어 올라가며 B 까지 누적한다.
    전략 전환 통찰 1개(SC d2)·M_total 7 → 발전 예제 출발 ★3 유지.
  tier: star_3
  mechanism_primary: "빠진 도로 확인 → 각 교차점에 A 에서 오는 경우의 수를 적어 누적(합의 법칙) → B 의 값"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$110$'
  answer_source: "본문 풀이"
  figure: crop:fig-28-e10.png
  latex: latex-bank/gn-prob/items/28-e10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "격자 크기와 빠진 구간의 위치·개수. 제약: A 에서 B 까지 최단 거리로 갈 수 있는 길이 남아 있어야 하고, 빠진 구간 때문에 우회(되돌아감)가 필요해지면 최단 거리 전제가 깨진다. 그림의 A·B 위치는 고정."
    creative: "(1) 빠진 구간을 직사각형 한 덩어리로 모으면 '전체 − 그 안을 지나는 경우'로도 풀려 I-SC 가 강해지며 ★3 (2) 빠진 구간 대신 호수를 그리면 같은 골조 ★3 (3) 도착점을 격자 모서리가 아닌 변 위의 점으로 옮기면 구간 분할이 추가돼 ★3."
```

```yaml
- id: GN-PROB-28-35
  page: 28
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    정사각형 여섯 개가 계단 모양으로 이어진 도로망에서 A 지점에서 B 지점까지 최단 거리로 가는 경우의 수.
  category: "비격자 도로망 → 각 꼭짓점 누적 합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "도로가 일부 빠진 도로망의 최단 경로의 수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    앞 발전 예제에서 배운 누적 합을 그대로 적용하는 짝 문항이고, 꼭짓점이 열 몇 개뿐이라 한 번에 채워진다.
    통찰 카운트 없음·M_total 5 → 발전 예제 짝 출발 ★3 에서 −1.
  tier: star_2
  mechanism_primary: "각 꼭짓점에 A 에서 오는 경우의 수를 적어 누적 → B 의 값"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$18$'
  answer_source: "답지"
  figure: crop:fig-28-35.png
  latex: latex-bank/gn-prob/items/28-35.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계단의 칸 수와 단 수(6칸 → 8칸). 제약: 도형이 계단 모양이면 각 단의 꼭짓점에서 올 수 있는 방향이 한쪽으로 제한되므로, 칸을 붙일 때 A→B 최단 경로가 끊기지 않게 이어야 한다. 그림의 A(왼쪽 아래)·B(오른쪽 위) 라벨은 고정."
    creative: "(1) 계단을 대칭으로 만들면 절반만 세고 대칭으로 두 배 하는 길이 열려 I-SYM ★3 (2) 중간 한 꼭짓점을 반드시 지나게 하면 구간 분할 ★2 (3) 계단을 3차원(정육면체 붙이기)으로 올리면 ★4."
```

```yaml
- id: GN-PROB-28-36
  page: 28
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    가운데에 호수가 있어 안쪽 길이 없는 도로망에서 A 지점에서 B 지점까지 최단 거리로 가는 경우의 수.
  category: "호수로 막힌 격자 → 각 교차점 누적 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "도로가 일부 빠진 도로망의 최단 경로의 수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    호수가 격자 한가운데를 넓게 가려 지날 수 없는 꼭짓점이 많고, 위·아래 두 갈래의 값이 서로 다르게 쌓인다.
    누적 합 자체는 배운 절차지만 채워야 할 교차점이 많아 계산 단계가 늘어난다. 통찰 카운트 없음·M_total 6 → 발전 예제 짝 출발 ★3 유지.
  tier: star_3
  mechanism_primary: "호수에 막힌 꼭짓점 제외 → 각 교차점에 누적 합 → B 의 값"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$37$'
  answer_source: "답지"
  figure: crop:fig-28-36.png
  latex: latex-bank/gn-prob/items/28-36.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "격자 크기(가로 6·세로 5)와 호수가 가리는 범위. 제약: 호수가 A 나 B 를 막거나 최단 경로를 모두 끊으면 안 되고, 호수 경계가 도로와 겹치는 방식(꼭짓점만 막는지 구간도 막는지)을 그림에서 분명히 해야 한다."
    creative: "(1) 호수를 직사각형으로 바꾸면 '전체 − 호수 자리 통과'로도 풀려 I-SC ★3 (2) 호수를 둘로 나누면 갈래가 늘어 ★3 (3) 도착점을 변 위로 옮기면 ★3."
```

### 연습문제 STEP 1

```yaml
- id: GN-PROB-29-37
  page: 29
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    서로 다른 6개의 과일을 두 바구니 A, B 에 빈 바구니가 없도록 나누어 담는 경우의 수.
  category: "각 과일의 바구니 선택(중복순열) → 한쪽이 비는 경우 제외"
  M: {s: 1, k: 1, a: 1, t: 2}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "서로 다른 것을 두 묶음으로 나누는 경우의 수(빈 묶음 제외)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    과일마다 바구니가 두 가지이므로 2^6, 여기서 한 바구니가 비는 2가지를 뺀다. 여사건이 두 가지뿐이라 표준 절차다.
    '빈 바구니가 없도록' 이 T-경계 함정으로 걸려 M_total 5. 통찰 없음, STEP 1 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "각 과일이 A·B 중 하나 → 2^6 → 한 바구니가 비는 2가지 제외"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$62$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/29-37.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "과일 수(6 → 7)와 바구니 수(2 → 3). 제약: 바구니가 3개가 되면 빼는 항이 포함배제(3×2^n − 3)로 바뀌므로 단순히 −2 로 두면 안 된다."
    creative: "(1) 바구니를 3개로 늘리면 포함배제가 들어와 ★4 (2) 바구니를 구분하지 않으면 2로 나누는 보정이 붙어 ★3 (3) '각 바구니에 2개 이상'처럼 하한을 주면 분기가 생겨 ★3."
```

```yaml
- id: GN-PROB-29-38
  page: 29
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    0, 1, 2, 3, 4 에서 중복을 허용하여 4개를 택해 만든 네 자리 자연수 중 3000 보다 작은 것의 개수.
  category: "천의 자리 조건(0 제외·3000 미만) → 나머지 자리는 중복순열"
  M: {s: 1, k: 1, a: 1, t: 2}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "중복순열로 만드는 자연수의 개수(크기 조건)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    네 자리라 천의 자리는 0 이 될 수 없고 3000 미만이라 1 또는 2 두 가지, 나머지 세 자리는 각각 5가지로 2×5^3.
    두 제약이 모두 천의 자리 하나에 모여 분기가 생기지 않는다. T-범위·T-경계 2개로 M_total 5, STEP 1 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "천의 자리는 1 또는 2 → 나머지 세 자리는 각각 5가지 → 2×5^3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$250$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/29-38.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "숫자 집합의 크기(5개 → 6개), 자릿수, 기준 값(3000). 제약: 기준 값이 3000 처럼 '한 자리만 보면 판정되는 수' 여야 분기가 없다. 3200 처럼 두 자리를 봐야 하면 골조가 분기형으로 바뀐다."
    creative: "(1) 기준을 3200 으로 바꾸면 천의 자리 1·2 / 3 인 경우로 갈라져 ★3 (2) '짝수' 조건을 더하면 끝자리 분기가 겹쳐 ★3 (3) '서로 다른 숫자' 로 바꾸면 중복순열이 순열로 바뀌어 ★2."
```

```yaml
- id: GN-PROB-29-39
  page: 29
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    X = {1, 2, 3, …, n} 에서 X 로의 일대일대응의 개수가 120 일 때 X 에서 X 로의 함수의 개수(n 은 자연수).
  category: "일대일대응 개수 n! 로 n 역추적 → 함수의 개수 n^n"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "개수(120)가 먼저 주어지고 원소 개수 n 을 역으로 찾아야 뒤 계산이 시작된다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "일대일대응·함수의 개수로 집합의 크기를 역추적"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    일대일대응의 개수는 n!, 함수의 개수는 n^n 이라는 두 공식을 알면 120 = 5! 에서 n = 5 를 얻어 5^5 로 끝난다.
    역추적이 한 번 들어가지만 깊이는 얕다(BW d1). 집합 기호로 표현돼 Mₐ 2·M_total 6, STEP 1 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "일대일대응 n! = 120 → n = 5 → 함수의 개수 5^5"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$3125$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/29-39.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주어지는 개수(120 = 5! → 720 = 6!)와 묻는 대상(함수 → 일대일함수). 제약: 주어진 개수는 반드시 어떤 n 의 계승이어야 하고, n 이 너무 커지면 n^n 이 손으로 쓸 수 없는 크기가 된다."
    creative: "(1) 함수의 개수를 주고 일대일대응의 개수를 물으면 역방향이 뒤집혀 ★2 (2) 'X 에서 Y 로' 로 두 집합을 분리하면 m^n 과 순열이 갈려 ★3 (3) '일대일함수의 개수가 60' 처럼 주면 nPk 역추적이라 분기가 생겨 ★3."
```

```yaml
- id: GN-PROB-29-40
  page: 29
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    X = {1, 2, 3}, Y = {1, 2, 3, 4} 에 대하여 f(1) ≠ 1 인 함수 f : X → Y 의 개수.
  category: "함수의 개수(중복순열) → 특정 함숫값 하나만 제한"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수의 개수(특정 함숫값 제외)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f(1) 은 1 을 뺀 3가지, f(2)·f(3) 은 각각 4가지로 3×4^2. 여사건(전체 − f(1)=1)로 풀어도 같은 한 줄이다.
    제한이 한 원소에만 걸려 분기가 없다. 함수 기호로 Mₐ 2·M_total 5, STEP 1 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "f(1) 은 3가지 · f(2), f(3) 은 각각 4가지 → 3×4^2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$48$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/29-40.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 집합의 크기(3·4 → 4·5)와 제한을 거는 원소 수. 제약: 제한이 서로 다른 원소에 하나씩 걸릴 때만 곱으로 끝나고, 같은 함숫값을 동시에 제한하면 포함배제가 필요하다."
    creative: "(1) 'f(1) ≠ 1 이고 f(2) ≠ 2' 로 늘리면 여전히 곱이지만 f(1) ≠ f(2) 를 더하면 ★3 (2) '일대일함수' 조건을 얹으면 순열로 바뀌어 ★3 (3) 'f(1) < f(2) < f(3)' 이면 조합 선택으로 골조가 바뀌어 ★3."
```

```yaml
- id: GN-PROB-29-41
  page: 29
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    a, a, b, b, c, d 를 일렬로 나열할 때 c 와 d 가 이웃하지 않도록 나열하는 경우의 수.
  category: "전체 − c, d 를 묶은 경우(여사건)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이웃하지 않게 나열하는 경우의 수(같은 것이 있는 순열)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    전체 6!/(2!2!) 에서 c, d 를 한 묶음으로 본 5!/(2!2!)×2! 를 뺀다. 이웃하지 않음을 여사건으로 바꾸는 표준 절차이고, 두 항 모두 같은 분모를 쓴다.
    통찰 카운트 없음·M_total 6, STEP 1 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "전체 6!/(2!2!) − c, d 묶음 5!/(2!2!)×2!"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$120$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/29-41.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "중복 문자의 개수(a 2개·b 2개 → a 3개)와 이웃 금지 문자 수(2개 → 3개). 제약: 이웃 금지 문자가 3개가 되면 여사건이 포함배제로 바뀌므로 '사이에 끼우기' 로 푸는 편이 안전하다."
    creative: "(1) '같은 문자끼리 이웃하지 않도록' 으로 바꾸면 사이 끼우기·포함배제가 필요해 ★4 (2) 'c 가 d 보다 앞' 이면 순서 고정 나눗셈으로 ★2 (3) 이웃 금지 쌍을 두 쌍으로 늘리면 포함배제 ★3."
```

```yaml
- id: GN-PROB-29-42
  page: 29
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제"
  summary: |
    직사각형 격자 도로망에서 A 지점을 출발해 위쪽 변의 P 지점을 지나 B 지점까지 최단 거리로 가는 경우의 수(한 번 지난 도로를 다시 지날 수 있음). 5지선다.
  category: "P 에서 구간 분할 → 두 구간의 최단 경로 수의 곱"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "특정 지점을 지나는 최단 경로의 수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    A 와 B 가 아래 변의 양 끝, P 가 위 변 위에 있으므로 A→P 는 위로만·오른쪽으로만, P→B 는 아래로만·오른쪽으로만 가는 두 격자 문제로 나뉜다.
    '지난 도로를 다시 지날 수 있다' 는 단서는 구간이 겹치지 않아 실제로는 영향이 없다. 통찰 카운트 없음·M_total 6, 기출이지만 골조가 예제와 같아 STEP 1 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "A→P 와 P→B 로 구간 분할 → 각각 같은 것이 있는 순열로 세고 곱"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: crop:fig-29-42.png
  latex: latex-bank/gn-prob/items/29-42.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "격자 크기(가로 5·세로 3)와 P 의 위치. 제약: P 가 위쪽 변 위에 있어야 두 구간이 각각 단순 격자가 되고, 선택지가 서로 가까운 값(200·210·220…)이라 격자 크기를 바꾸면 선택지도 다시 만들어야 한다. 그림의 A·B·P 라벨 위치는 고정."
    creative: "(1) P 를 격자 안쪽 점으로 옮기면 같은 골조 ★2 (2) 'P 를 지나지 않고' 로 뒤집으면 여사건 ★3 (3) 지나야 할 점을 둘로 늘리면 구간이 셋이 되어 ★3."
```

### 연습문제 STEP 2

```yaml
- id: GN-PROB-30-43
  page: 30
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제"
  summary: |
    세 학생 A, B, C 에게 서로 다른 사탕 5개를 남김없이 나누어 줄 때 ㈎ A 는 적어도 하나를 받고 ㈏ B 가 받는 개수는 2 이하가 되게 하는 경우의 수. 5지선다(못 받는 학생이 있을 수 있음).
  category: "사탕별 학생 선택(중복순열) → 두 조건을 여사건으로 차례로 제외"
  M: {s: 3, k: 3, a: 1, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'적어도 하나' 와 '2 이하' 두 조건을 각각 여사건(A 가 하나도 못 받음 · B 가 3개 이상)으로 바꿔 빼는 형태로 옮긴다"
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "B 가 3개 이상인 경우를 3개·4개·5개로 갈라 각각 사탕을 고르고 남은 사탕을 두 학생에게 나누는 수를 따로 센다"
  insight_count: 2
  depth_score: 4.00
  type_id: null
  type_hint: "서로 다른 것을 나누어 주는 경우의 수(조건부 중복순열)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    사탕마다 받을 학생이 3가지이므로 전체는 3^5. 여기서 B 가 3개 이상인 경우를 개수별로 갈라 빼고, 남은 것에서 다시 A 가 하나도 못 받는 경우를 빼는 두 겹의 여사건이다.
    두 조건이 서로 다른 학생에 걸려 있어 빼는 순서를 정하지 않으면 중복해서 빼게 된다. 통찰 2개·M_total 9 → STEP 2 출발 ★3 에서 +1.
  tier: star_4
  mechanism_primary: "각 사탕의 학생 선택 3^5 → B 가 3개 이상인 경우 제외 → 남은 것에서 A 가 하나도 못 받는 경우 다시 제외"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/30-43.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "사탕 수(5 → 6)·학생 수(3 → 4)·상한(2 이하 → 1 이하). 제약: 선택지가 167·170·173·176·179 처럼 촘촘해 수를 바꾸면 선택지를 다시 만들어야 하고, 상한이 커지면 여사건 쪽 분기 수가 바뀐다."
    creative: "(1) ㈏ 를 'B 는 적어도 하나' 로 바꾸면 두 조건이 같은 모양이 되어 포함배제 한 번으로 끝나 ★3 (2) 사탕을 '같은 종류' 로 바꾸면 중복조합 문제로 골조가 통째로 바뀜 (3) 'C 는 짝수 개' 같은 조건을 더하면 분기가 겹쳐 ★5."
```

```yaml
- id: GN-PROB-30-44
  page: 30
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    전체집합 U = {1, 2, 3, …, 7} 의 두 부분집합 A, B 가 A∪B = U, n(A∩B) = 2 를 만족시킬 때 순서쌍 (A, B) 의 개수.
  category: "각 원소의 소속 분류(A만·B만·둘 다) → 교집합 원소 선택 × 나머지 중복순열"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "집합 조건을 '각 원소가 A 에만·B 에만·둘 다 중 어디에 속하는가' 의 분류로 옮기면 A∪B = U 는 '어느 쪽에도 속하지 않는 원소가 없다' 가 되어 중복순열로 셀 수 있다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "집합의 원소를 분류하는 중복순열(합집합·교집합 조건)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    합집합이 U 라는 조건 덕분에 각 원소가 갈 수 있는 자리는 세 곳뿐이고, 그중 '둘 다' 에 가는 원소가 정확히 2개다.
    교집합에 갈 2개를 고른 뒤 남은 5개는 각각 A 만·B 만 두 가지이므로 21×2^5. 표현 전환 통찰 1개(RT d2)·M_total 7 → STEP 2 출발 ★3 유지.
  tier: star_3
  mechanism_primary: "각 원소를 세 영역 중 하나로 분류 → 교집합에 갈 2개 선택 → 남은 5개는 각각 2가지 → 21×2^5"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$672$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/30-44.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "전체집합의 크기(7 → 8)와 교집합의 크기(2 → 3). 제약: 교집합 크기는 전체집합 크기 이하여야 하고, A∪B = U 조건이 빠지면 각 원소의 선택지가 네 곳으로 늘어 식이 달라진다."
    creative: "(1) A∪B = U 를 빼고 n(A∩B) = 2 만 주면 선택지가 4가지가 되어 ★3 (2) 'A ⊂ B' 조건으로 바꾸면 원소별 2지 선택이 되어 ★2 (3) 집합을 셋(A, B, C)으로 늘리면 원소별 7지 분류가 되어 ★4."
```

```yaml
- id: GN-PROB-30-45
  page: 30
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    a, b, c, d 에서 중복을 허용하여 만든 문자 4개짜리 문자열을 사전식으로 배열할 때 90번째에 오는 문자열.
  category: "사전식 순서 → 자리별 묶음 크기(4^3, 4^2, 4)로 범위 좁히기"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'몇 번째인가' 를 '각 자리를 고정할 때마다 몇 개씩 묶이는가' 로 옮겨(4^3 → 4^2 → 4) 자리마다 구간을 좁히는 문제로 바꾼다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "사전식 배열에서 k 번째 문자열 찾기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    첫 글자가 같은 문자열이 4^3 = 64개씩 묶이므로 90번째는 b 로 시작한다. 남은 순번을 둘째 자리 16개씩, 셋째 자리 4개씩, 넷째 자리 1개씩으로 계속 좁혀 간다.
    누적 개수와 순번의 경계(64번째·80번째처럼 딱 떨어지는 지점)를 헷갈리기 쉬운 것이 함정이다. 표현 전환 통찰 1개(RT d2)·M_total 7 → STEP 2 출발 ★3 유지.
  tier: star_3
  mechanism_primary: "첫 글자마다 4^3 = 64개 → 90번째는 b 로 시작 → 남은 순번을 16, 4, 1 단위로 좁혀 자리마다 문자를 확정"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$bbcb$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/30-45.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "문자 종류 수(4 → 5)·문자열 길이(4 → 5)·순번(90). 제약: 순번은 전체 개수(4^4 = 256) 이하여야 하고, 묶음 경계에 정확히 걸리는 순번(64·128)은 마지막 자리가 가장 큰 문자가 되므로 답이 직관과 어긋난다."
    creative: "(1) 거꾸로 특정 문자열이 몇 번째인지 물으면 역방향이 되어 ★3 (2) 중복을 허용하지 않으면 순열의 사전식 배열이 되어 자리마다 남은 문자 수가 줄어 ★4 (3) 같은 문자가 정해진 개수만큼 있는 나열의 사전식 순서를 물으면 같은 것이 있는 순열과 결합돼 ★4."
```

```yaml
- id: GN-PROB-30-46
  page: 30
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    0, 0, 0, 1, 1, 2, 3 을 모두 사용하여 만드는 일곱 자리 자연수 중 홀수의 개수.
  category: "끝자리 1/3 분기 → 각 경우의 같은 것이 있는 순열 → 맨 앞 0 제외"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "끝자리가 1 인 경우와 3 인 경우에 남은 여섯 개의 중복 구성(1 이 하나 남는지 둘 남는지)이 달라 맨 앞 0 제외 계산도 따로 해야 한다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "0 이 있는 숫자로 만드는 자연수 중 홀수의 개수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    끝자리 후보가 1 과 3 두 가지이고, 어느 쪽을 쓰느냐에 따라 남는 수의 중복이 달라 같은 것이 있는 순열의 분모가 바뀐다. 두 분기 모두에서 맨 앞 0 인 경우를 따로 빼야 한다.
    0 이 세 개나 있어 맨 앞 제외의 비중이 크다. 분기 1개·M_total 8 → STEP 2 출발 ★3 유지.
  tier: star_3
  mechanism_primary: "끝자리 1/3 분기 → 각 경우 남은 6개의 같은 것이 있는 순열 → 각각 맨 앞 0 인 경우 제외 → 합"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$90$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/30-46.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "0 의 개수(3개)와 나머지 숫자의 중복 구성, 자릿수. 제약: 0 이 많을수록 맨 앞 제외 항이 커지고, 홀수 후보가 한 종류뿐이면 분기가 사라져 ★2 로 떨어진다."
    creative: "(1) '짝수' 로 바꾸면 끝자리 0·2 분기가 되어 맨 앞 제약이 한쪽에만 걸려 ★3 유지 (2) '5의 배수' 로 바꾸면 끝자리 0 뿐이라 ★2 (3) '홀수이면서 맨 앞이 1' 처럼 두 자리를 동시에 묶으면 ★4."
```

```yaml
- id: GN-PROB-30-47
  page: 30
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    X = {1, 2, 3}, Y = {1, 2, 3, 4, 5} 에 대하여 f(1) + f(2) + f(3) = 11 을 만족시키는 함수 f : X → Y 의 개수.
  category: "합이 11 인 함숫값 조합 분류 → 조합마다 나열 수를 더하기"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "합 조건을 만족하는 세 함숫값의 조합을 빠짐없이 찾고, 값이 모두 다른 경우와 두 개가 같은 경우의 나열 수(3! 과 3!/2!)를 구별해 더해야 한다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "함숫값의 합이 주어진 함수의 개수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    함수의 개수를 세는 문제지만 실제 골조는 '1 이상 5 이하의 세 수로 합 11 만들기' 의 순서쌍 개수다. 조합을 먼저 찾고 각 조합의 나열 수를 더한다.
    중복값이 있는 조합에서 나열 수를 3! 로 세면 과다 계산이 된다. 분기 1개·M_total 7 → STEP 2 출발 ★3 유지.
  tier: star_3
  mechanism_primary: "합이 11 인 값 조합을 중복 여부로 분류 → 조합마다 나열 수(3! 또는 3!/2!)를 더함"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$15$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/30-47.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "합의 값(11)·Y 의 크기(5)·X 의 크기(3). 제약: 합이 최솟값 3 과 최댓값 15 사이에 있어야 하고, 합이 가운데 값(9)에 가까울수록 조합 수가 늘어 손으로 세기 어려워진다."
    creative: "(1) 'f(1) < f(2) < f(3) 이고 합이 11' 이면 순서가 고정돼 조합만 세면 되어 ★2 (2) 'f(1) + f(2) + f(3) ≤ 11' 로 바꾸면 누적 합이 되어 ★4 (3) 'f 가 일대일함수' 를 더하면 중복 조합이 빠져 ★3."
```

```yaml
- id: GN-PROB-31-48
  page: 31
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    a, b, c, d, e, f, g 를 일렬로 나열할 때 a 는 c 보다 앞에, b 는 e 보다 앞에 오도록 나열하는 경우의 수.
  category: "두 쌍의 순서 고정 → 7! 을 2!×2! 로 나누기"
  M: {s: 1, k: 1, a: 1, t: 2}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 쌍의 순서가 정해진 나열의 수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    순서가 정해진 두 쌍이 서로 다른 네 문자라 두 조건이 독립이고, 각 쌍에서 절반씩 남으므로 7!/(2!×2!) 한 줄이다.
    분모를 2! + 2! 로 더하거나 한 번만 나누는 실수가 T-표기 함정. 통찰 없음·M_total 5 → STEP 2 출발 ★3 에서 −1.
  tier: star_2
  mechanism_primary: "두 순서 조건이 서로 다른 문자쌍이라 독립 → 7!/(2!×2!)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$1260$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/31-48.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "전체 문자 수(7)와 순서가 정해진 쌍의 수(2쌍 → 3쌍). 제약: 쌍끼리 문자가 겹치면(a < c, c < e 처럼) 세 문자의 순서가 한 줄로 묶여 분모가 3! 이 되므로 독립이 아니다."
    creative: "(1) 'a < c < e' 처럼 세 문자를 한 줄로 묶으면 분모가 3! 이 되어 ★2 (2) 'a 는 c 바로 앞' 으로 바꾸면 묶음 문제 ★2 (3) 중복 문자가 있는 단어에 두 쌍의 순서 조건을 걸면 분모가 셋으로 늘어 ★3."
```

```yaml
- id: GN-PROB-31-49
  page: 31
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    가운데에 호수가 있어 안쪽 길이 없는 도로망에서 A 지점에서 오른쪽 변 위의 B 지점까지 최단 거리로 가는 경우의 수.
  category: "호수로 막힌 격자 → 각 교차점 누적 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "도로가 일부 빠진 도로망의 최단 경로의 수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    앞의 발전 예제에서 배운 누적 합을 그대로 쓰되, 호수가 격자 가운데를 크게 가려 지날 수 없는 꼭짓점이 많고 도착점 B 가 모서리가 아니라 오른쪽 변 위에 있다.
    호수 위·아래 두 갈래의 값이 다르게 쌓여 채워야 할 교차점이 많다. 통찰 카운트 없음(배운 방법의 반복)·M_total 6 → STEP 2 출발 ★3 유지.
  tier: star_3
  mechanism_primary: "호수에 막힌 꼭짓점 제외 → 각 교차점에 A 에서 오는 경우의 수를 적어 누적 → 변 위의 B 값"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$80$'
  answer_source: "답지"
  figure: crop:fig-31-49.png
  latex: latex-bank/gn-prob/items/31-49.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "격자 크기(가로 7·세로 5)·호수가 가리는 범위·B 의 위치. 제약: 호수가 최단 경로를 모두 끊으면 안 되고, B 가 변 위에 있으므로 B 보다 오른쪽·위쪽 교차점은 셀 필요가 없다. 그림의 호수 모양과 A·B 라벨은 고정."
    creative: "(1) B 를 오른쪽 위 모서리로 옮기면 채울 교차점이 늘어 계산만 길어짐(★3 유지) (2) 호수를 직사각형으로 바꾸면 '전체 − 호수 통과' 로도 풀려 전략 분기 ★3 (3) 반드시 호수 위쪽으로 지나게 하면 구간 분할 ★2."
```

### 연습문제 실력 UP

```yaml
- id: GN-PROB-31-50
  page: 31
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제"
  summary: |
    0, 1, 2 에서 중복을 허락하여 5개를 택해 만드는 다섯 자리 자연수 중 0 과 1 을 각각 1개 이상 포함하는 것의 개수.
  category: "맨 앞 0 제외한 전체 → 0 없는 경우·1 없는 경우 제외 → 겹치는 경우 보정"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'0 과 1 을 각각 1개 이상' 을 '전체에서 0 이 없는 경우와 1 이 없는 경우를 뺀다' 로 옮긴다"
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 여사건이 겹치는 경우(2 만으로 이루어진 수)를 다시 더하고, 모든 항에서 맨 앞이 0 인 경우를 먼저 빼 둔 채로 계산해야 한다"
  insight_count: 2
  depth_score: 4.00
  type_id: null
  type_hint: "적어도 조건이 붙은 중복순열(자연수의 개수)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    다섯 자리 자연수라 맨 앞은 1 또는 2 뿐이고, 그 상태에서 '0 이 하나도 없는 수' 와 '1 이 하나도 없는 수' 를 빼고 둘 다 없는 수(2 로만 이루어진 한 가지)를 다시 더한다.
    맨 앞 0 제약을 여사건 각 항에도 같이 걸어야 하는 것이 최대 함정이다. 통찰 2개·M_total 8 → 실력 UP 출발 ★4 유지.
  tier: star_4
  mechanism_primary: "맨 앞 0 제외 전체 2×3^4 → 0 없는 경우·1 없는 경우 빼기 → 둘 다 없는 경우 다시 더하기"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$115$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/31-50.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "숫자 종류(0, 1, 2)·자릿수(5)·'1개 이상' 을 요구하는 숫자의 수. 제약: 0 이 숫자에 들어 있어야 맨 앞 제약이 생기고, 요구하는 숫자가 셋이 되면 포함배제 항이 여덟 개로 늘어 손 계산이 버거워진다."
    creative: "(1) '0 을 2개 이상' 처럼 개수 하한을 올리면 여사건 항이 늘어 ★4 유지 (2) 숫자를 0, 1, 2, 3 으로 늘리고 조건은 그대로 두면 ★4 (3) '0 과 1 을 각각 정확히 1개' 로 바꾸면 자리 선택 문제가 되어 ★3."
```

```yaml
- id: GN-PROB-31-51
  page: 31
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    간격이 일정한 도로망에서 승희는 A 에서 C 까지, 윤아는 C 에서 A 까지 굵은 선을 따라 걷고 재호는 B 에서 D 까지 최단 거리로 걷는다. 세 사람이 동시에 출발해 같은 속력으로 걸을 때 세 사람이 모두 만나도록 재호가 가는 경우의 수.
  category: "마주 보고 걷는 두 사람의 만남 지점(대칭) → 재호가 같은 시각 같은 지점을 지나는 경로 수"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-SYM
      depth: 3
      effective_depth: 3
      signal_ref: []
      description: "같은 굵은 선을 반대 방향으로 같은 속력으로 걸으므로 승희와 윤아는 대칭성에 의해 그 경로의 한가운데에서 만난다. 경로 길이가 홀수라 만남 지점은 꼭짓점이 아니라 다섯 번째 도로의 중점이다"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'세 사람이 모두 만난다' 를 '재호도 그 시각에 같은 지점에 있다', 즉 '재호가 지나는 다섯 번째 도로가 바로 그 도로다' 로 옮긴다"
    - step: 3
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "시간 조건을 경로 분할로 바꿔 B 에서 그 도로의 한 끝까지 4칸, 다른 끝에서 D 까지 4칸의 최단 경로 수의 곱으로 센다"
  insight_count: 3
  depth_score: 7.00
  type_id: null
  type_hint: "최단 경로에서의 만남 조건(시간·대칭)"
  base_star: null
  effective_star: 5
  star: 5
  premium: false
  rationale: |
    경우의 수를 세기 전에 '어디서 만나는가' 를 먼저 결정해야 한다. 마주 보고 같은 속력으로 걷는 두 사람의 만남 지점은 굵은 선의 중점이고, 전체 길이가 홀수(9칸)이므로 그 지점은 다섯 번째 도로의 한가운데다.
    재호도 B 에서 D 까지 9칸이라 같은 시각에 그 도로의 중점에 있으려면 다섯 번째 도로가 그 도로여야 하고, 그러면 세기는 4칸+4칸의 곱으로 끝난다. 통찰 3개(SYM d3 포함)·M_total 9 → 실력 UP 출발 ★4 에서 +1. §2.13 ★5 저노출 유형 요건(SYM) 충족. novelty_score 는 이 자산 전체 관례대로 0 이라 §2.14 참신도 게이트는 적용하지 않는다.
  tier: star_5
  mechanism_primary: "마주 보고 걷는 두 사람 → 굵은 선의 중점에서 만남 → 재호의 다섯 번째 도로가 그 도로 → (B→한 끝 4칸) × (다른 끝→D 4칸)"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$36$'
  answer_source: "답지"
  figure: crop:fig-31-51.png
  latex: latex-bank/gn-prob/items/31-51.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "격자 크기와 굵은 선의 모양(중점이 놓이는 도로의 위치). 제약: A→C 와 B→D 의 거리가 같아야 세 사람이 같은 시각에 한가운데에 오고, 그 거리가 홀수면 만남 지점이 도로의 중점·짝수면 꼭짓점이 되어 세는 방법이 달라진다. 그림의 굵은 선과 A·B·C·D 라벨은 고정."
    creative: "(1) 경로 길이를 짝수로 만들면 만남 지점이 꼭짓점이라 (B→그 점)×(그 점→D) 로 단순해져 ★4 (2) '재호가 두 사람 중 한 명과만 만나면 된다' 로 풀면 분기는 늘지만 대칭 통찰이 약해져 ★4 (3) 세 사람의 속력을 다르게 주면 만남 지점이 중점이 아니게 되어 비율 계산이 추가되며 ★5 유지."
```

```yaml
- id: GN-PROB-31-52
  page: 31
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    크기가 같은 정육면체 3개를 붙여 놓은 입체에서 모서리를 따라 꼭짓점 A 에서 꼭짓점 B 까지 최단 거리로 가는 경우의 수.
  category: "입체의 모서리 → 세 방향 이동으로 보고 각 꼭짓점 누적 합"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "평면 격자 공식이 통하지 않는 입체를 '각 꼭짓점에 A 에서 오는 경우의 수를 적어 더하는' 세 방향 누적 문제로 옮긴다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "입체(정육면체를 붙인 도형)의 모서리를 따라가는 최단 경로의 수"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    정육면체를 붙여 만든 입체라 가로·세로·높이 세 방향 이동이고, 붙인 면에서 모서리가 공유되어 직육면체 공식이 통하지 않는다. A 에서 시작해 각 꼭짓점에 값을 적어 누적해야 한다.
    그림에서 점선으로 그려진 뒤쪽 모서리를 빠뜨리기 쉬운 것이 최대 함정이다. 표현 전환 통찰 1개(RT d2)·M_total 8 → 실력 UP 출발 ★4 유지.
  tier: star_4
  mechanism_primary: "입체의 모서리를 세 방향 이동으로 보고 각 꼭짓점에 A 에서 오는 경우의 수를 적어 누적 → B 의 값"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$25$'
  answer_source: "답지"
  figure: crop:fig-31-52.png
  latex: latex-bank/gn-prob/items/31-52.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정육면체의 개수와 붙이는 모양(ㄱ 자·일자·계단). 제약: A 와 B 는 최단 경로가 세 방향 모두를 쓰는 꼭짓점이어야 하고, 정육면체가 2×1×1 직육면체를 이루면 공식 3!/(…) 이 그대로 통해 난도가 떨어진다. 그림의 A·B 라벨과 점선 모서리 표기는 고정."
    creative: "(1) 직육면체(2×2×1)로 바꾸면 같은 것이 있는 순열 공식이 그대로 통해 ★2 (2) 특정 꼭짓점을 반드시 지나게 하면 구간 분할이 추가돼 ★4 유지 (3) 모서리 하나를 지날 수 없게 막으면 누적 합에 제외가 더해져 ★5."
```

## 표본 판정 요약 (33문)

- ★ 분포: ★1 2 · ★2 15 · ★3 11 · ★4 4 · ★5 1
- 통찰형 14 · 절차형 19 · premium 0
- 통찰 유형 분포(총 19개 라벨): I-MI 7 · I-EQV 4 · I-RT 4 · I-XU 1 · I-SC 1 · I-BW 1 · I-SYM 1 (depth 3 은 `GN-PROB-31-51` 의 I-SYM 하나뿐)
- type_hint 묶음 상위: 「최단 경로」 계열 9(도로 빠진 격자 4 · 특정 지점 거치기 3 · 만남 1 · 입체 1) · 「같은 숫자로 만드는 자연수의 개수」 5 · 「순서가 정해진 나열」 4 · 「중복순열 분배·적어도 조건」 4 · 「문자 자리 고정·묶음」 3
- 그림: 9문(`crop:fig-27-e9.png` · `crop:fig-27-34.png` · `crop:fig-28-e10.png` · `crop:fig-28-35.png` · `crop:fig-28-36.png` · `crop:fig-29-42.png` · `crop:fig-31-49.png` · `crop:fig-31-51.png` · `crop:fig-31-52.png`)
- 대상층: 하위권 2 · 중하위권 14 · 중위권 9 · 중상위권 7 · 상위권 1

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-PROB-25-30 | 벤더는 필수 예제 짝 확인체크(★2 신호)인데 3의 배수 판정(I-XU) + 구성 분기(I-MI)로 통찰 2개·M_total 8 → 판정 ★4. 2단 차이라 라벨은 ★4 로 두고 기록 | ★2 / ★4 |
| GN-PROB-29-37 · 29-38 · 29-39 · 29-40 | 단원명은 「같은 것이 있는 순열」이나 실제 골조는 앞 절의 중복순열·함수의 개수다. type_hint 가 단원과 어긋나므로 카탈로그에서는 중복순열 쪽에 붙여야 한다 | ★2 (유지) |
| GN-PROB-30-43 | 위와 같은 중복순열 분배 유형이고 STEP 2·교육청 기출이라 ★4 로 올렸지만, 단원 소속이 애매해 카탈로그 배치를 따로 정해야 한다 | ★4 |
| GN-PROB-28-35 | 발전 예제 짝(★3 신호)이나 꼭짓점이 적어 누적 합 한 번이면 끝나 ★2. 1단 차이지만 같은 방법을 쓰는 28-36·31-49 가 ★3 이라 함께 기록 | ★2 / ★3 |
| GN-PROB-31-51 | 만남 조건을 대칭으로 푸는 골조가 이 단원에서 유일하다. 최단 경로 유형의 하위로 둘지 별도 유형으로 세울지 카탈로그 설계 때 결정 | ★5 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 반복된 type_hint 는 ① 「도로가 일부 빠진 도로망의 최단 경로의 수」 4문(28-e10 · 28-35 · 28-36 · 31-49) ② 「순서가 정해진 문자가 있는 나열의 수」 4문(26-e8 · 26-31 · 26-32 · 31-48) ③ 「0 이 있는 숫자로 만드는 자연수의 개수(끝자리 조건)」 4문(25-e7 · 25-28 · 25-29 · 30-46) 이다. 이 셋은 카탈로그에서 각각 하나의 유형으로 세울 만하다.
- 따로 세워야 할 유형: 「최단 경로에서의 만남(시간·대칭)」(31-51)과 「입체 모서리의 최단 경로」(31-52)는 격자 공식이 통하지 않고 통찰 구성이 달라 최단 경로 유형의 하위 항목이 아니라 별도 유형이 맞다. 「사전식 배열에서 k 번째 찾기」(30-45)도 이 단원의 다른 골조와 겹치지 않는다.
- 통합해도 될 유형: 「특정 지점을 거치는 최단 경로」(27-e9 · 29-42)와 「거치지 않는 최단 경로」(27-34)는 구간 분할 + 여사건이라는 한 골조의 앞뒤라 한 유형의 난이도 두 단계로 묶어도 된다. 「양 끝 고정」(24-25)·「이웃 묶음」(24-26)도 필수 예제 24-e6 의 두 소문항이므로 한 유형 안의 변형으로 둘 수 있다.
- 단원 경계 메모: 연습문제 STEP 1 의 절반(29-37 ~ 29-40)과 STEP 2 의 30-43 · 30-44 · 30-47 은 중복순열·함수의 개수 쪽 유형이다. 확률과 통계 카탈로그를 만들 때 「같은 것이 있는 순열」 유형 목록에 이들을 넣지 말고 앞 절 유형에 연결해야 한다.
