---
name: mechanism-데이터-GN-CM1-23
description: 개념원리 공통수학1 23 연립일차부등식(1/1 · 192~199쪽 · 31문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학1 (22개정 · 학생용) · 전사본 latex-bank/gn-cm1
  section: 23 연립일차부등식
  unit_code: "23"
  part: "1/1"
  extract_range: "192~199쪽 · 192-e3~199-428"
  total_problems: 31
  unit_total: 31
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm1/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm1/items/<id>.tex
  image_source: latex-bank/gn-cm1/figures/ (crops.json)
---

# 개념원리 공통수학1 · 23 연립일차부등식 (1/1) 정독 데이터 (v1.0)

이 파일은 192~199쪽 31문항 전수를 다룬다. 구역은 「필수·발전 예제」(필수 예제 7 + 그 아래 확인체크 12) 19문, 「연습문제 STEP 1」 6문, 「연습문제 STEP 2」 5문, 「연습문제 실력 UP」 1문이다. 이 단원에는 「개념원리 익히기」 구역과 「발전」 태그 예제가 없다. 개념원리 고등의 난이도 신호는 구역과 태그에 있다 — 필수 예제 ★2, STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4 가 출발점이고, 교육청 기출 태그는 통찰이 있을 때만 +1 로 썼다. **확인체크는 통번호를 달고 있지만 「개념원리 익히기」가 아니라 바로 위 예제의 유사문제이므로 대응 예제의 ★를 출발점으로 삼았다**(이 단원은 전부 필수 아래 확인체크 → ★2). 예제(id `쪽-eN`)는 상자 발문만 전사돼 있어 본문 풀이·KEY Point 없이 발문만으로 판정했다. 그림은 2문(197-416 식품 표 · 198-419 수직선)뿐이고 둘 다 크롭을 열어 수치·해 범위를 확인했다.

단원의 골조는 전부 `각 일차부등식을 계수 정리해 풀기 → 수직선에서 공통범위`이고, 변별은 (가) 공통범위를 구하는 데서 끝나는가, (나) 주어진 해·그림에서 미정계수를 역산하는가, (다) 「해가 없다·해를 갖는다·정수해가 N개」를 경계 등호까지 정확한 범위 조건으로 옮기는가에서 갈린다. 그래서 이 파일의 통찰은 I-EQV(조건의 동치 변환)에 몰려 있고, 활용 4문과 그림 1문에서 I-RT 가, STEP 2 두 문항에서 I-BW·I-XU 가 나온다. 함정은 거의 항상 T-경계(등호 포함 여부)와 T-부호(음수로 나눌 때 부등호 방향) 두 가지이며, 답을 가르는 문항에서만 Mₜ=2 로 매겼다. 이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-CM1-192-e3
  page: 192
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑵ 연립일차부등식 두 개 풀기. ⑴은 괄호를 푸는 정수 계수, ⑵는 소수 계수와 분수 계수가 섞인 꼴.
  category: '계수 정리(괄호·×10·×12) → 각 부등식의 해 → 수직선에서 공통범위'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "연립일차부등식의 풀이(계수 정리 → 공통범위)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 문항 모두 표준 절차 그대로다. 소수는 양변 10배, 분수는 분모의 최소공배수배로 정수 계수를 만든 뒤 각각 풀고 겹치는 구간을 읽으면 끝난다.
    음수로 나누며 부등호가 뒤집히는 자리가 있지만 답을 가르지는 않아 Mₜ=1. 통찰 0 · M_total 6 → 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: '각 부등식을 정수 계수로 정리 → 두 해를 따로 구함 → 수직선에서 공통범위'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $3<x\le\dfrac{13}{3}$ ⑵ $x>-\dfrac{1}{2}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/192-e3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '계수·상수는 자유롭게 바꿀 수 있다. 제약: 두 해가 반드시 겹쳐야 하고(겹치지 않으면 194-e5 유형이 된다), 경계값이 정수나 간단한 기약분수로 떨어지게 한다. 소수 문항은 10배, 분수 문항은 분모 최소공배수배로 정수 계수가 되도록 유지.'
    creative: '(1) 한쪽 부등호를 등호 포함으로 바꿔 경계 처리만 묻기(★2 유지) (2) 공통범위 안의 정수 개수나 가장 큰 정수를 묻기(192-406 꼴 · ★2) (3) 한 부등식의 상수를 문자로 바꿔 해가 주어진 역문제로 만들기(195-e6 꼴 · ★2~3).'
```

```yaml
- id: GN-CM1-192-405
  page: 192
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑷ 연립일차부등식 네 개 풀기. 정수 계수 두 개, 분수 계수 한 개, 소수와 분수가 섞인 것 한 개.
  category: '계수 정리 → 각 부등식의 해 → 공통범위'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "연립일차부등식의 풀이(계수 정리 → 공통범위)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    192-e3 의 유사문제로 도구가 같다. 네 문항이 각각 정수·괄호·분수·소수+분수 계수를 한 번씩 훈련시키는 배치다.
    ⑴과 ⑷에서 음수로 나누며 부등호가 뒤집히지만 답을 가르는 함정은 아니다. 통찰 0 · M_total 6 → 대응 예제와 같은 ★2.
  tier: star_2
  mechanism_primary: '각 부등식을 정수 계수로 정리 → 두 해를 따로 구함 → 공통범위'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $x>4$ ⑵ $x<-4$ ⑶ $-\dfrac{9}{2}\le x<4$ ⑷ $-9\le x\le -3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/192-405.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '네 문항의 계수는 독립적으로 바꿀 수 있다. 제약: 해의 꼴을 골고루(한쪽만 열린 구간 · 닫힌 구간 · 반열린 구간) 덮도록 배치하고, 소수·분수 문항은 정수배로 떨어지게 한다.'
    creative: '(1) 네 문항 중 하나를 해가 없는 꼴로 바꿔 특수해를 섞기(★2) (2) 각 답의 정수해 개수를 추가로 묻기(★2) (3) ⑷의 상수 하나를 문자로 바꿔 미정계수 역문제로(★2~3).'
```

```yaml
- id: GN-CM1-192-406
  page: 192
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    소수 계수 부등식과 분수 계수 부등식으로 된 연립부등식을 만족시키는 x 중 가장 큰 정수 구하기.
  category: '계수 정리 → 공통범위 → 범위 안의 가장 큰 정수'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "연립일차부등식의 해 중 정수 조건(가장 큰 정수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    공통범위를 구하는 데까지는 192-405 와 같고, 마지막에 분수 경계를 정수로 내리는 한 단계가 붙는다.
    첫 부등식에서 음수로 나누며 부등호가 뒤집히고(T-부호), 경계가 분수라 「이하」를 정수로 내릴 때 실수하기 쉬워(T-경계) Mₜ=2. 그래도 갈래 선택이나 조건 변환은 없어 절차형 ★2.
  tier: star_2
  mechanism_primary: '양변 정수화 → 두 해의 공통범위 → 경계 분수 아래의 최대 정수'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/192-406.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '계수를 바꿔 공통범위의 경계를 옮길 수 있다. 제약: 경계가 정수가 아닌 분수여야 「가장 큰 정수」가 묻는 의미가 있고, 두 부등식 중 하나만 실질적으로 작동하게(다른 하나는 넓은 범위) 두면 난이도가 유지된다.'
    creative: '(1) 「가장 작은 정수」로 바꿔 반대쪽 경계가 작동하게 하기(★2) (2) 정수해의 개수를 묻기(★2) (3) 경계를 정확히 정수로 떨어뜨려 등호 포함 여부가 답을 가르게 만들기(★2~3 · T-경계 강화).'
```

```yaml
- id: GN-CM1-193-e4
  page: 193
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑵ A<B<C 꼴 부등식 두 개 풀기. ⑵는 가운데 식에 괄호가 있어 먼저 정리해야 하는 꼴.
  category: 'A<B<C 를 A<B 와 B<C 의 연립으로 분해 → 각 해 → 공통범위'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "A<B<C 꼴 부등식의 풀이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    이 단원에서 가르치는 분해 규칙(A<B 와 B<C 를 연립)을 그대로 적용하면 192-e3 과 같은 문제가 된다. A<C 로 잘못 묶는 것이 대표 오류지만 발문 자체가 유형을 알려 준다.
    ⑵는 가운데 식을 먼저 정리하는 한 단계가 더 붙는다. 통찰 0 · M_total 6 → 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: 'A<B<C → {A<B, B<C} 로 분해 → 각각 풀어 공통범위'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $-6<x\le 3$ ⑵ $\dfrac{1}{2}<x<2$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/193-e4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '세 식의 계수를 바꿀 수 있다. 제약: 두 해가 겹쳐야 하고, 가운데 식이 x 를 포함해야(그래야 분해가 의미 있다) 한다. 등호는 한쪽에만 붙여 답이 반열린 구간이 되게 하면 경계 훈련이 된다.'
    creative: '(1) 가운데를 상수로, 양 끝을 x 식으로 바꿔 분해 방향을 뒤집기(★2) (2) 해가 한 점이거나 없도록 계수를 조정(194-e5 꼴 · ★2) (3) 양 끝에 문자 상수를 넣어 해가 주어진 역문제로(195-411 꼴 · ★2~3).'
```

```yaml
- id: GN-CM1-193-407
  page: 193
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑵ A<B<C 꼴 부등식 두 개 풀기. ⑵는 세 식 모두 분수 계수.
  category: '연립으로 분해 → 계수 정리 → 공통범위'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "A<B<C 꼴 부등식의 풀이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    193-e4 의 유사문제. ⑵는 분모 2, 4 를 정리하는 계산 부담이 붙지만 도구는 같다.
    ⑴은 두 해 중 좁은 쪽이 그대로 답이 되는 배치라 공통범위 판단이 쉽다. 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: 'A<B<C → {A<B, B<C} 분해 → 분모 정리 → 공통범위'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $x>5$ ⑵ $\dfrac{5}{6}<x\le 1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/193-407.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '분모는 2·3·4·6 정도로 유지해 정수화가 한 번에 끝나게 한다. 제약: ⑵처럼 우변에 음수 분수 계수를 두면 부등호 방향 함정이 생기므로 답의 경계가 기약분수로 깔끔하게 떨어지는지 확인.'
    creative: '(1) 세 식 중 하나를 소수 계수로 바꾸기(★2) (2) 정수해 개수를 추가로 묻기(193-408 꼴 · ★2) (3) 한 끝을 문자로 두고 해를 제시해 역산시키기(★2~3).'
```

```yaml
- id: GN-CM1-193-408
  page: 193
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    A<B<C 꼴 부등식(세 식 모두 괄호 포함)을 만족시키는 정수 x 의 개수 구하기.
  category: '연립으로 분해 → 공통범위 → 범위 안의 정수 개수'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "A<B<C 꼴 부등식의 정수해 개수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분해해서 풀면 양 끝이 모두 등호를 포함한 닫힌 구간이 되고, 개수는 경계를 포함하느냐에 직접 달려 있다(T-경계). 괄호를 푸는 과정에서 부호 실수도 나기 쉬워 Mₜ=2.
    다만 개수를 세는 단계가 조건 변환은 아니어서 통찰로는 세지 않았다. M_total 7 · 통찰 0 → ★2.
  tier: star_2
  mechanism_primary: '괄호 정리 후 {A≤B, B≤C} 로 분해 → 닫힌 구간 → 양 끝 포함해 정수 세기'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/193-408.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '계수를 바꿔 구간의 길이를 조절하면 개수가 바뀐다. 제약: 양 끝이 정수로 떨어지면 등호 포함 여부가 개수를 정확히 1씩 바꾸므로 경계 훈련에 좋고, 분수로 떨어지면 난이도가 내려간다.'
    creative: '(1) 등호를 한쪽만 빼서 개수가 하나 줄게 하기(★2 · 경계 함정 강화) (2) 「자연수 해의 개수」로 바꿔 추가 필터를 걸기(★2) (3) 한 끝에 문자를 넣고 정수해가 N개일 조건을 묻기(196-e8 꼴 · ★2~3).'
```

```yaml
- id: GN-CM1-194-e5
  page: 194
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑵ 특수한 해를 갖는 연립부등식 풀기. ⑴은 해가 한 점, ⑵는 해가 없는 경우.
  category: '두 해를 수직선에 배치 → 경계가 맞닿거나 겹치지 않는 특수 상황 판정'
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "특수한 해를 갖는 연립일차부등식(한 점·해 없음)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    계산은 가볍고 판단이 전부다. ⑴은 x≤4 와 x≥4 가 만나 x=4 한 점, ⑵는 두 범위가 어긋나 해가 없다.
    등호가 붙었는지에 따라 「한 점」과 「해 없음」이 갈리므로 T-경계가 답을 직접 가른다(Mₜ=2). 교과서가 이 판정 자체를 유형으로 가르치므로 통찰로는 세지 않고 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: '각 해를 구해 수직선에 배치 → 겹침이 한 점인지 공집합인지 판정'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $x=4$ ⑵ 해는 없다.'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/194-e5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 부등식의 경계값이 같아야 「한 점」, 어긋나야 「해 없음」이 된다. 제약: 한 점 문항은 양쪽 모두 등호를 포함해야 하고(하나라도 빼면 해 없음으로 바뀐다), 해 없음 문항은 경계가 같고 등호가 빠진 경우도 쓸 수 있다.'
    creative: '(1) 두 경우를 섞어 네 문항으로 늘리기(194-409 꼴 · ★2) (2) A<B<C 꼴로 바꿔 분해 후 특수해가 나오게 하기(★2) (3) 한 경계에 문자를 넣어 「해가 없도록 하는 a」를 묻기(196-e7 꼴 · ★2~3 — 경계 등호 판정이 답에 들어가면서 통찰형이 된다).'
```

```yaml
- id: GN-CM1-194-409
  page: 194
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑷ 특수한 해를 갖는 부등식 네 개 풀기. ⑷는 A<B≤C 꼴이며 ⑵~⑷는 모두 해가 없는 경우.
  category: '계수 정리 → 두 해 배치 → 한 점·해 없음 판정'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "특수한 해를 갖는 연립일차부등식(한 점·해 없음)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    194-e5 의 유사문제이고 소수·분수 계수와 A<B≤C 꼴이 섞여 계산 부담만 조금 늘었다.
    네 문항 중 셋이 해가 없는 경우라 「답이 나오지 않으면 틀린 것」이라는 선입견을 깨는 배치다. 통찰 0 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: '각 부등식을 정리해 해를 구함 → 수직선 배치 → 한 점·공집합 판정'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $x=-2$ ⑵ 해는 없다. ⑶ 해는 없다. ⑷ 해는 없다.'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/194-409.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '각 문항의 경계값을 독립적으로 옮길 수 있다. 제약: 「한 점」 문항은 경계가 정확히 일치하고 양쪽 등호가 모두 있어야 하며, 소수·분수 문항은 정수화가 한 번에 끝나게 한다.'
    creative: '(1) 해가 있는 보통 문항을 하나 섞어 판정 자체를 묻게 하기(★2) (2) 「해가 한 개인 것을 모두 고르시오」 형태의 보기 문제로(★2) (3) 경계 하나를 문자로 바꿔 특수해가 되는 조건을 묻기(★2~3).'
```

```yaml
- id: GN-CM1-195-e6
  page: 195
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    문자 상수 a 를 포함한 연립부등식의 해가 b ≤ x < 15/4 로 주어졌을 때 a + b 의 값 구하기.
  category: '수치 부등식의 해 → b 결정 · 문자 부등식의 해 → 오른쪽 경계와 비교해 a 결정'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "해가 주어진 연립일차부등식에서 미정계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 부등식 중 하나는 수치뿐이라 왼쪽 경계 b 가 바로 나오고, 남은 문자 부등식의 해가 오른쪽 경계 15/4 와 같아야 한다는 대응이 자동으로 정해진다.
    조건을 옮겨 쓰는 단계가 없는 표준 미정계수 대입이므로 I-BW 로 세지 않았다(스키마 §2.2 I-BW 판별의 제외 항목). 통찰 0 · M_total 7 → 필수 예제 ★2.
  tier: star_2
  mechanism_primary: '수치 부등식 → b · 문자 부등식의 해 경계 = 15/4 → a → a+b'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$6$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/195-e6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '주어진 해의 두 경계와 계수를 바꿀 수 있다. 제약: 수치 부등식이 만드는 경계와 주어진 해의 한쪽 경계가 반드시 일치해야 하고(아니면 문제가 모순), 등호 위치도 양쪽이 같아야 한다. a 가 정수나 간단한 분수로 떨어지게 계수를 고른다.'
    creative: '(1) 두 부등식 모두에 문자를 넣어 a, b 를 각각 역산하게 하기(★3) (2) 해를 그림(수직선)으로 제시하기(198-419 꼴 · ★2) (3) 해가 한 점 x=k 로 주어지게 바꿔 두 경계가 동시에 결정되게 하기(198-420 꼴 · ★2).'
```

```yaml
- id: GN-CM1-195-410
  page: 195
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    문자 상수 a 를 포함한 분수 계수 연립부등식의 해가 b ≤ x ≤ -2 일 때 a - b 의 값 구하기.
  category: '수치 부등식 → b · 분수 정리한 문자 부등식의 경계 = -2 → a'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "해가 주어진 연립일차부등식에서 미정계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    195-e6 과 같은 골조이고 분모 2, 5 를 정리하는 계산이 한 겹 더 있다. 문자 부등식을 x ≤ (a 에 대한 식) 꼴로 정리한 뒤 -2 와 같다고 놓으면 끝난다.
    대응 관계가 자명한 표준 미정계수 문제라 통찰 0 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: '양변 10배로 분수 정리 → x ≤ 18-5a 를 -2 와 대응 → a · 수치 부등식에서 b'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/195-410.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '분모와 상수항을 바꿔 a 의 값을 옮길 수 있다. 제약: 정리 후 x 의 계수가 1 이 되도록 분모를 고르면 a 가 정수로 떨어진다. 주어진 해의 등호 위치는 원 부등식의 등호와 일치해야 한다.'
    creative: '(1) 답을 a+b 대신 ab 나 b-a 로 바꾸기(★2 유지) (2) 문자 부등식을 왼쪽 경계를 만드는 쪽으로 옮기기(★2) (3) 해를 b ≤ x < -2 처럼 등호가 어긋나게 주어 모순을 찾게 하기(★3 · 판정 요소 추가).'
```

```yaml
- id: GN-CM1-195-411
  page: 195
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    문자 상수 a, b 를 포함한 A<B≤C 꼴 부등식의 해가 -3 < x ≤ 4 일 때 a + b 의 값 구하기.
  category: '연립으로 분해 → 왼쪽 부등식 경계 = -3, 오른쪽 부등식 경계 = 4 로 대응'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "해가 주어진 A<B<C 꼴 부등식에서 미정계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    A<B<C 분해(193-e4)와 미정계수 역산(195-e6)을 겹친 문항이다. 왼쪽 부등식은 a 만, 오른쪽은 b 만 포함하므로 두 경계가 서로 독립으로 정해진다.
    분해만 바르게 하면 대응이 일대일이라 조건 변환은 없다. 통찰 0 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: '{2x+a<3x+4, 3x+4≤-4x+b} 로 분해 → 각 해의 경계를 -3, 4 와 대응 → a, b'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$33$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/195-411.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '세 식의 계수와 주어진 해의 두 경계를 바꿀 수 있다. 제약: 문자 a, b 가 서로 다른 부등식에 하나씩만 들어가야 독립 역산이 되고(둘이 한 식에 모이면 미정이 된다), 등호 위치가 원 부등식과 일치해야 한다.'
    creative: '(1) a, b 를 같은 식에 넣어 조건이 하나 더 필요하게 만들기(★3) (2) 잘못 분해한 해를 주고 올바른 해를 묻기(199-423 꼴 · ★3) (3) 해를 정수해 개수로 바꿔 경계 범위를 묻게 하기(★3).'
```

```yaml
- id: GN-CM1-196-e7
  page: 196
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    문자 a 를 포함한 연립부등식이 해를 갖지 않도록 하는 실수 a 의 값의 범위 구하기.
  category: '두 해를 x ≥ 2 와 x < 2a-4 로 정리 → 겹치지 않을 배치 조건 → a 범위'
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「해를 갖지 않는다」를 수직선 위에서 두 범위가 겹치지 않을 경계 조건(2a-4 ≤ 2)으로 옮김 — 등호 포함 여부까지 같이 판단해야 함"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "해를 갖지 않을 조건(미지수 범위)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    각 부등식을 푸는 계산은 두 줄이고, 문제의 전부는 「해가 없다」를 문자 경계의 부등식으로 옮기는 단계다(EQV d1).
    경계가 맞닿는 a=3 에서 한쪽은 x<2, 다른 쪽은 x≥2 라 여전히 해가 없으므로 등호가 포함된다 — 이 판단이 T-경계 함정이자 이 유형의 핵심이다.
    통찰 1개 d1 · M_total 7 → 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: '각 해를 구함 → 「겹치지 않는다」를 경계 부등식 2a-4 ≤ 2 로 변환 → a 범위'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$a\le 3$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/196-e7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '수치 부등식의 경계(여기서는 2)와 문자 부등식의 계수를 바꿀 수 있다. 제약: 문자 쪽 부등호의 등호 유무가 답의 등호를 뒤집으므로(x<2a-4 인지 x≤2a-4 인지) 반드시 같이 확인한다. a 의 계수는 경계가 간단히 떨어지도록 2 정도로 둔다.'
    creative: '(1) 「해를 갖도록」으로 뒤집기(196-412 꼴 · 등호가 반대로 · ★2) (2) 두 부등식 모두에 문자를 넣어 범위가 구간으로 나오게 하기(★3) (3) 「해가 오직 한 개」로 바꾸면 경계가 정확히 맞닿아야 해 조건이 등식이 된다(★3 — ★ 변동 지점).'
```

```yaml
- id: GN-CM1-196-e8
  page: 196
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    문자 a 를 포함한 연립부등식을 만족시키는 정수인 해가 1개일 때 실수 a 의 값의 범위 구하기.
  category: '해를 2 < x ≤ a 로 정리 → 포함되는 정수가 3 뿐일 조건 → a 범위'
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「정수인 해가 1개」를 구간 2 < x ≤ a 가 3 은 포함하고 4 는 포함하지 않을 조건(3 ≤ a < 4)으로 옮김 — 양쪽 등호 방향이 모두 답을 가름"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "정수인 해의 개수 조건(미지수 범위)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    계산은 x>2 와 x≤a 두 줄로 끝나고, 남은 전부가 개수 조건을 경계 부등식으로 옮기는 단계다(EQV d2). a=3 은 포함(정수 3 이 해), a=4 는 제외(정수 4 까지 들어와 2개)라는 비대칭이 이 유형의 함정이다.
    통찰 1개 d2 라 산식상 +1 조건(통찰 2개 이상 또는 depth 3)에 못 미쳐 필수 예제 출발점 ★2 유지.
    [분류 이슈] 경계 판정이 답을 완전히 가르는 유형이라 체감은 ★3 에 가깝다 — 라벨은 벤더 신호대로 ★2 로 두고 기록만 함.
  tier: star_2
  mechanism_primary: '두 해를 2 < x ≤ a 로 합침 → 정수 3 만 포함할 경계 조건 → 3 ≤ a < 4'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$3\le a<4$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/196-e8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '고정 경계(2)와 정수해 개수(1개)를 바꿀 수 있다. 제약: 고정 경계가 정수여야 포함/제외 판정이 깔끔하고, 개수를 N 개로 늘리면 답은 폭이 1 인 반열린 구간으로 평행이동한다. 문자 쪽 부등호의 등호 유무가 답의 등호 방향을 그대로 결정한다.'
    creative: '(1) 정수해 개수를 2개로 늘리기(196-413 꼴 · ★2) (2) 「음의 정수해가 1개」처럼 필터를 추가하기(199-426 꼴 · ★3 — 후보 구간을 한 번 더 좁혀야 해 ★ 상승) (3) 「정수해가 없도록」으로 바꾸기(199-425 꼴 · ★3).'
```

```yaml
- id: GN-CM1-196-412
  page: 196
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    문자 a 를 포함한 연립부등식이 해를 갖도록 하는 실수 a 의 값의 범위 구하기.
  category: '두 해를 x > -2 와 x < a+2 로 정리 → 겹칠 조건 → a 범위'
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「해를 갖는다」를 두 범위가 겹칠 조건(a+2 > -2)으로 옮김 — 경계가 맞닿으면 공집합이므로 등호가 빠진다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "해를 가질 조건(미지수 범위)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    196-e7 을 뒤집은 문항이다. 양쪽 모두 등호가 없는 부등식이라 경계가 정확히 맞닿는 순간 해가 사라지고, 그래서 답에서 등호가 빠진다.
    e7 과 답의 등호 방향이 반대라는 점이 이 짝의 학습 포인트다. 통찰 1개 d1 · M_total 7 → 대응 예제와 같은 ★2.
  tier: star_2
  mechanism_primary: '각 해를 구함 → 「겹친다」를 a+2 > -2 로 변환 → a > -4'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$a>-4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/196-412.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '분수 계수와 고정 경계(-2)를 바꿀 수 있다. 제약: 두 부등식의 등호 유무가 답의 등호를 결정하므로, 한쪽에 등호를 붙이면 답도 등호가 붙는다는 점을 의도적으로 설계한다.'
    creative: '(1) 한쪽에 등호를 붙여 답의 등호가 바뀌는 것을 비교시키기(★2) (2) 「해가 오직 하나」로 바꾸기(★3 · 조건이 등식이 됨) (3) 두 부등식 모두 문자를 포함하게 해 a 에 대한 연립부등식으로 만들기(★3).'
```

```yaml
- id: GN-CM1-196-413
  page: 196
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    문자 k 를 포함한 연립부등식을 만족시키는 정수인 해가 2개일 때 실수 k 의 값의 범위 구하기.
  category: '해를 k-2 < x < 4 로 정리 → 포함되는 정수가 2, 3 뿐일 조건 → k 범위'
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「정수해가 2개」를 왼쪽 경계 k-2 가 1 이상 2 미만일 조건으로 옮김 — 열린 구간이라 경계가 정수일 때 그 정수가 빠진다는 점이 관건"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "정수인 해의 개수 조건(미지수 범위)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    196-e8 의 유사문제인데 이번에는 문자 경계가 왼쪽이고 양쪽 모두 등호가 없는 열린 구간이다. 오른쪽 x<4 가 정수 4 를 이미 배제하므로 포함되는 정수는 2, 3 이어야 하고, 왼쪽 경계가 1 이상 2 미만이면 된다.
    경계가 정확히 1 일 때 정수 1 이 들어오지 않는다는 판단이 함정이다. 통찰 1개 d2 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: '두 해를 k-2 < x < 4 로 합침 → 정수 2, 3 만 포함할 경계 조건 → 3 ≤ k < 4'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$3\le k<4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/196-413.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '고정 경계(4)와 정수해 개수를 바꿀 수 있다. 제약: 고정 경계를 정수로 두면 열린 부등호가 그 정수를 배제하므로 개수 계산이 한 칸 밀린다 — 문제를 만들 때 이 한 칸을 반드시 확인한다.'
    creative: '(1) 오른쪽 경계를 등호 포함으로 바꿔 개수가 하나 늘게 하기(★2) (2) 「정수해의 합이 N」으로 바꾸기(198-422 꼴 · ★3) (3) 「자연수 해가 2개」로 바꿔 추가 필터를 걸기(★3 — 필터가 한 겹 늘면 ★ 상승).'
```

```yaml
- id: GN-CM1-197-e9
  page: 197
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    8 % 소금물 300 g 에 14 % 소금물을 넣어 9 % 이상 11 % 이하로 만들 때, 넣어야 하는 14 % 소금물의 양의 범위 구하기.
  category: '넣는 양을 x 로 두고 소금의 양 보존 → 농도 조건을 A ≤ B ≤ C 부등식으로 → x 범위'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "농도 상황을 「섞은 뒤 소금의 양 / 전체 양」의 부등식으로 옮김 — 분모에 x 가 들어간 식을 양변에 곱해 일차부등식으로 되돌리는 표현 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "연립일차부등식의 활용(농도)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    소금의 양(24 + 0.14x)과 전체 양(300 + x)으로 농도식을 세우는 것이 전부이고, 300+x > 0 이므로 양변에 곱해도 부등호가 유지된다.
    % 와 g 를 섞어 쓰는 데서 단위 혼동(T-단위)과 「이상·이하」 경계(T-경계)가 겹쳐 Mₜ=2. 식만 세우면 계산은 정직해서 통찰 1개 d1 · M_total 7 → 필수 예제 ★2.
  tier: star_2
  mechanism_primary: '소금의 양 = 24+0.14x, 전체 = 300+x → 9 ≤ 100(소금/전체) ≤ 11 → 양변 곱해 연립일차부등식 → x 범위'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$60\,\mathrm{g}$ 이상 $300\,\mathrm{g}$ 이하'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/197-e9.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '원래 농도·양, 넣는 소금물의 농도, 목표 농도 구간을 바꿀 수 있다. 제약: 목표 구간이 두 농도 사이에 있어야 해가 존재하고, 답이 양수 범위로 깔끔하게 떨어지도록 수를 고른다(분모에 x 가 있어 답이 지저분해지기 쉽다).'
    creative: '(1) 물을 넣어 농도를 낮추는 설정으로 바꾸기(소금의 양 고정 · ★2) (2) 소금(고체)을 넣게 해 분자·분모가 함께 늘도록 바꾸기(★2~3) (3) 두 소금물을 섞어 전체 양까지 제한하기(197-416 꼴 · ★3 — 조건이 두 축으로 늘면 ★ 상승).'
```

```yaml
- id: GN-CM1-197-414
  page: 197
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    정수 x 를 2로 나누어 7을 빼면 0보다 크지 않고, x 에서 3을 빼 2배 하면 10보다 클 때 x 의 개수 구하기.
  category: '문장을 두 부등식으로 옮김 → 공통범위 → 정수 개수'
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "연립일차부등식의 활용(정수 조건)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    문장을 그대로 식으로 옮기면 되는 직역형이라 표현 전환으로 세지 않았다. 「0보다 크지 않다」를 ≤ 0 으로, 「10보다 크다」를 > 10 으로 읽는 것이 유일한 해석 지점이다.
    등호 포함 여부가 개수를 1 바꾸므로 T-경계가 답을 가른다(Mₜ=2). 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: '「x/2 − 7 ≤ 0」과 「2(x−3) > 10」 → 공통범위 → 그 안의 정수 개수'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/197-414.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 연산과 기준값을 바꿔 구간을 옮길 수 있다. 제약: 양 끝이 정수로 떨어지면 「크지 않다 / 크다」의 등호 차이가 개수를 정확히 1씩 바꾸므로 경계 훈련 효과가 크다.'
    creative: '(1) 「자연수 x」로 바꿔 필터를 하나 더 걸기(★2) (2) 개수 대신 최댓값·최솟값을 묻기(★2) (3) 기준값 하나를 문자로 두고 개수가 N 개일 조건을 묻기(196-e8 꼴 · ★2~3).'
```

```yaml
- id: GN-CM1-197-415
  page: 197
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    한 학생에게 4개씩 주면 10개가 남고 6개씩 주면 2개 이상 4개 미만이 남는다고 할 때 초콜릿의 개수 구하기.
  category: '학생 수를 미지수로 두고 초콜릿 수를 표현 → 남는 개수 조건을 부등식으로 → 자연수 해'
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「6개씩 주면 2개 이상 4개 미만 남는다」를 (초콜릿 수) − 6×(학생 수) 에 대한 부등식으로 옮김 — 남는 양을 식으로 표현하는 전환이 문제의 전부"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "연립일차부등식의 활용(나누어 주고 남는 개수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    학생 수를 미지수로 두면 초콜릿은 4n+10 이고, 6개씩 줄 때 남는 양이 2 이상 4 미만이라는 조건이 n 에 대한 연립일차부등식이 된다.
    푼 범위 안의 자연수는 하나뿐이라 학생 수가 확정되고 초콜릿 수가 나온다 — 자연수 조건이 마지막 필터다. 통찰 1개 d1 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: '학생 수 n · 초콜릿 4n+10 → 2 ≤ (4n+10) − 6n < 4 → n 범위 → 자연수 n → 초콜릿 수'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$26$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/197-415.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '한 사람당 개수(4, 6), 남는 개수(10), 두 번째 조건의 범위(2 이상 4 미만)를 바꿀 수 있다. 제약: 최종 범위 안에 자연수가 정확히 하나만 들어가야 답이 하나로 확정된다 — 수를 바꾸면 이 조건을 반드시 다시 확인한다.'
    creative: '(1) 「마지막 학생은 6개를 못 받는다」식 표현으로 바꿔 부등식 세우기를 어렵게 하기(199-428 꼴 · ★3~4) (2) 학생 수를 묻게 바꾸기(★2) (3) 남는 개수 범위를 넓혀 자연수 후보가 여럿 나오게 하고 「가능한 개수의 합」을 묻기(★3).'
```

```yaml
- id: GN-CM1-197-416
  page: 197
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    표로 주어진 두 식품 A, B 의 100 g 당 열량·단백질을 보고, 합하여 200 g 을 섭취하면서 열량 300 kcal 이상·단백질 30 g 이상이 되도록 하는 식품 A 의 양의 범위 구하기.
  category: 'A 의 양을 x, B 를 200−x 로 두고 표 수치를 100 g 당 비율로 환산 → 두 조건의 연립부등식 → 공통범위'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "표의 100 g 당 값을 x g 에 대한 비율식으로 옮기고 열량·단백질 두 축을 각각 부등식으로 세움"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "연립일차부등식의 활용(표 자료·혼합)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    표에서 A 는 100 g 당 120 kcal·20 g, B 는 320 kcal·10 g 이므로 x g 섭취량으로 환산해 두 부등식을 세운다. 열량 조건은 x 의 위쪽 경계를, 단백질 조건은 아래쪽 경계를 만들어 답이 닫힌 구간이 된다.
    100 g 당 값을 그대로 쓰는 단위 실수(T-단위)와 「이상」 경계(T-경계)가 겹쳐 Mₜ=2. 표 → 식 전환 통찰 1개 d1 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: 'A=x g, B=200−x g → 1.2x+3.2(200−x) ≥ 300 과 0.2x+0.1(200−x) ≥ 30 → 공통범위'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$100\,\mathrm{g}$ 이상 $170\,\mathrm{g}$ 이하'
  answer_source: "답지"
  figure: 'crop:fig-197-416.png'
  latex: latex-bank/gn-cm1/items/197-416.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '표의 네 수치(120·320·20·10), 총 섭취량 200 g, 두 기준(300 kcal·30 g)을 바꿀 수 있다. 제약: 두 조건이 서로 반대 방향의 경계를 만들어야 닫힌 구간이 나오고(한 식품이 열량은 높고 단백질은 낮아야 한다), 경계가 10 단위 정수로 떨어지게 한다. 표의 항목명·단위는 그림에 고정돼 있으므로 수치만 바꾼다.'
    creative: '(1) 조건을 「열량 이하·단백질 이상」으로 섞기(★2) (2) 총량 제한을 빼고 A, B 를 독립 변수로 두면 이변수가 되어 범위가 아니라 부등식 영역이 된다(교육과정 밖 · 피한다) (3) 세 번째 영양소를 추가해 조건을 세 개로 늘리기(★3 — 조건 수가 늘면 공통범위 판정이 ★ 상승 지점).'
```

### 연습문제 STEP 1

```yaml
- id: GN-CM1-198-417
  page: 198
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    연립부등식의 해가 a ≤ x < b 일 때 b − a 의 값 구하기.
  category: '두 부등식을 풀어 공통범위 → 양 끝값 a, b → 차'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "연립일차부등식의 해의 양 끝값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    문자가 답을 묻는 자리에만 있고 부등식 자체는 수치뿐이라 192-405 와 같은 계산 문제다. 두 부등식 모두 x 의 계수가 음수가 되어 부등호가 뒤집히는 자리가 있고(T-부호), 등호 위치가 a, b 중 어느 쪽인지 맞춰야 한다(T-경계).
    통찰 0 · M_total 7 → STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: '각 부등식을 풀어 −2 ≤ x < 4 → a, b 를 읽어 b−a'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/198-417.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '계수를 바꿔 구간을 옮길 수 있다. 제약: 두 해가 겹쳐야 하고, 등호가 한쪽에만 붙어야 a ≤ x < b 꼴이 유지된다. 양 끝이 정수로 떨어지면 b−a 가 깔끔하다.'
    creative: '(1) ab 나 a+b 를 묻기(★2 유지) (2) 구간 안의 정수 개수를 묻기(★2) (3) 한 계수를 문자로 바꿔 b−a=6 이 되도록 하는 값을 역으로 묻기(★3).'
```

```yaml
- id: GN-CM1-198-418
  page: 198
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    분수 계수로 된 A<B<C 꼴 부등식을 만족시키는 x 중 가장 큰 정수 구하기.
  category: '연립으로 분해 → 분모 정리 → 공통범위 → 최대 정수'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "A<B<C 꼴 부등식의 해 중 가장 큰 정수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    193-e4 의 분해와 192-406 의 정수 마무리를 합친 문항이다. 세 식의 분모가 2, 3, 4 라 12배로 한 번에 정리된다.
    오른쪽 부등식이 x < −3 을 주므로 등호가 없는 경계에서 최대 정수는 −4 — 경계가 정수일 때 그 정수를 빼야 한다는 점이 함정이다(T-경계). 통찰 0 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: '{A<B, B<C} 로 분해 → 양변 12배 → 공통범위 → 열린 경계 아래의 최대 정수'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/198-418.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '세 식의 분모와 상수를 바꿀 수 있다. 제약: 오른쪽 경계를 정수로 두고 등호를 빼면 「정수 경계 배제」 함정이 살아 있고, 등호를 붙이면 난이도가 내려간다. 왼쪽 경계는 답에 영향이 없도록 충분히 넓게 둔다.'
    creative: '(1) 「가장 작은 정수」로 바꿔 왼쪽 경계가 작동하게 하기(★2) (2) 정수해의 개수나 합을 묻기(★2~3) (3) 한 식에 문자를 넣어 최대 정수가 −4 가 되도록 하는 범위를 묻기(★3).'
```

```yaml
- id: GN-CM1-198-419
  page: 198
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    문자 a 를 포함한 분수 계수 연립부등식의 해를 수직선 위에 나타낸 그림이 주어질 때 상수 a 의 값 구하기.
  category: '그림에서 공통범위를 읽음 → 수치 부등식이 만드는 경계와 비교 → 문자 부등식의 경계 = 읽은 경계'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "수직선 그림의 색칠된 공통부분을 x ≤ −1/2 라는 해의 범위로 옮기고, 두 선 중 −1/2 에서 끊긴 쪽이 문자 부등식임을 대응시킴"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "수직선으로 주어진 해에서 미정계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 번째(수치) 부등식을 풀면 x ≤ 2/3 이고 이것이 그림의 2/3 에서 끊긴 선이다. 색칠된 공통부분이 x ≤ −1/2 이므로 남은 문자 부등식의 해가 x ≤ −1/2 여야 한다.
    그림을 범위로 읽는 전환이 한 단계 있고(RT d1), 채워진 점이라 등호가 포함된다는 판독(T-경계)이 붙는다. M_total 8 이지만 골조는 195-e6 과 같아 STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: '수치 부등식 → x ≤ 2/3 · 그림의 공통부분 → x ≤ −1/2 → 문자 부등식의 경계 (6−3a)/7 = −1/2 → a'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{19}{6}$'
  answer_source: "답지"
  figure: 'crop:fig-198-419.png'
  latex: latex-bank/gn-cm1/items/198-419.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '문자 부등식의 계수와 그림의 두 눈금을 바꿀 수 있다. 제약: 그림의 라벨(−1/2, 2/3)과 점의 채움 여부가 크롭 이미지에 고정돼 있으므로, 수치를 바꾸려면 그림도 함께 바꿔야 한다. 그림을 그대로 쓰려면 문자 부등식의 계수만 조정해 a 값만 옮긴다.'
    creative: '(1) 색칠 부분을 유한 구간으로 바꿔 양쪽 경계가 모두 작동하게 하기(★2~3) (2) 두 부등식 모두에 문자를 넣어 a, b 를 읽게 하기(★3) (3) 그림을 주고 「해가 이 그림과 같을 조건」을 범위로 묻기(★3 — 등식이 아니라 범위가 되면 ★ 상승).'
```

```yaml
- id: GN-CM1-198-420
  page: 198
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    문자 a, b 를 포함한 연립부등식의 해가 x = 8 뿐일 때 a + b 의 값 구하기.
  category: '두 해를 x ≥ a+3, x ≤ 13−b 로 정리 → 해가 한 점이려면 두 경계가 모두 8'
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「해가 x=8 하나뿐」을 두 경계가 동시에 8 과 같다는 등식 두 개로 옮김 — 한쪽만 맞추면 해가 구간이 되어 조건을 만족하지 못함"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "해가 한 점일 조건에서 미정계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    194-e5 의 「한 점」 판정과 195-e6 의 미정계수 역산을 합친 문항이다. 양쪽 모두 등호가 있으므로 두 범위가 정확히 8 에서만 만나려면 a+3 = 8, 13−b = 8 이어야 한다.
    조건을 등식 두 개로 옮기는 단계가 통찰 1개(EQV d1). 계산은 가볍고 M_total 7 → STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: '각 부등식을 정리 → 해가 한 점 → 두 경계 = 8 → a, b → a+b'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$10$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/198-420.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '한 점의 값(8)과 각 식의 계수를 바꿀 수 있다. 제약: 두 부등식 모두 등호를 포함해야 한 점 해가 성립한다 — 하나라도 등호를 빼면 해가 없는 문제가 되어 발문이 모순이 된다.'
    creative: '(1) 「해가 없도록」으로 바꿔 범위 답이 나오게 하기(196-e7 꼴 · ★2) (2) 해가 x=8 하나인 정수해 조건으로 완화해 범위를 묻기(★3) (3) a, b 를 한 식에 모아 관계식만 구하게 하기(★3).'
```

```yaml
- id: GN-CM1-198-421
  page: 198
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    문자 a 를 포함한 연립부등식의 해가 없을 때 a 의 값이 될 수 있는 것 고르기. 5지선다.
  category: '두 해를 x ≤ 1 과 x > (4a−3)/9 로 정리 → 겹치지 않을 조건 → 보기 대조'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「해가 없다」를 (4a−3)/9 ≥ 1 이라는 경계 조건으로 옮김 — 경계가 맞닿아도 한쪽이 열린 부등호라 해가 없으므로 등호가 포함됨"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "해를 갖지 않을 조건(미지수 범위)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    196-e7 과 같은 골조이고, 문자가 분수 계수 안에 들어 있어 정리 단계가 한 겹 더 있다. 조건을 범위로 옮긴 뒤 보기 다섯 개 중 들어가는 값을 고르면 된다.
    등호가 포함되는지에 따라 경계값이 답이 되기도 하므로 T-경계가 작동한다. 통찰 1개 d1 · M_total 8 → STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: '각 해를 구함 → 해가 없을 조건 (4a−3)/9 ≥ 1 → a ≥ 3 → 보기에서 해당 값'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑤'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/198-421.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '수치 부등식의 경계와 문자 부등식의 분수 계수를 바꿀 수 있다. 제약: 답이 경계값 자체가 되도록 보기를 배치하면 등호 판정이 정답을 가르는 좋은 함정이 된다. 보기 다섯 개 중 조건을 만족하는 것이 하나만 있어야 한다.'
    creative: '(1) 「해를 갖도록 하는 a 의 최솟값」처럼 값 하나를 묻기(★2) (2) 「해가 없도록 하는 자연수 a 의 최솟값」으로 정수 필터를 추가하기(★2~3) (3) 두 부등식 모두에 a 를 넣어 a 에 대한 연립부등식이 되게 하기(★3).'
```

```yaml
- id: GN-CM1-198-422
  page: 198
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 STEP 1"
  summary: |
    연립부등식을 만족시키는 모든 정수 x 의 합이 9 가 되도록 하는 자연수 a 의 최댓값 구하기. 5지선다.
  category: '해를 1 < x < (a+1)/3 으로 정리 → 정수해 집합이 {2,3,4} 여야 함을 역추적 → a 의 경계 범위 → 최댓값'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「정수해의 합이 9」에서 정수해 집합이 2, 3, 4 임을 역으로 확정 — 해의 왼쪽 끝이 2 로 고정돼 있다는 점을 써야 집합이 하나로 결정됨"
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "집합 {2,3,4} 를 오른쪽 경계 조건 4 < (a+1)/3 ≤ 5 로 옮김 — 경계가 정확히 5 일 때 정수 5 가 빠진다는 열린 부등호 판정이 최댓값을 결정"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "정수해의 합 조건에서 미지수의 최댓값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    앞의 정수해 개수 유형(196-e8·413)과 달리 개수가 아니라 합이 주어져, 먼저 합이 9 가 되는 연속 정수 집합을 역추적해야 한다(BW d2). 왼쪽 끝이 x>1 로 고정돼 있어 {2,3,4} 로 확정된다.
    그다음 그 집합만 포함할 오른쪽 경계 범위를 세우고(EQV d1), 열린 부등호라 경계 5 가 허용되어 자연수 최댓값이 14 가 된다.
    [분류 이슈] 통찰 2개(+1 후보)라 STEP 1 출발점 ★2 에서 한 단 올려 ★3 으로 판정 — 벤더와 1단 차이라 기록만 함. 교육청 기출 태그는 통찰이 이미 반영돼 추가 가산하지 않았다.
  tier: star_3
  mechanism_primary: '해를 1 < x < (a+1)/3 으로 정리 → 합 9 → 정수해 {2,3,4} → 4 < (a+1)/3 ≤ 5 → a 최댓값'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑤'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/198-422.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '왼쪽 고정 경계와 합의 값(9)을 바꿀 수 있다. 제약: 합이 되는 연속 정수 집합이 하나로만 결정돼야 하고(왼쪽 끝이 고정돼 있어야 한다), a 의 계수는 경계가 정수로 떨어지게 3 같은 값을 쓴다. 등호 방향이 최댓값을 1 바꾸므로 반드시 확인.'
    creative: '(1) 합 대신 곱을 주기(★3 · 후보 집합이 여럿이면 검증이 늘어 ★4) (2) a 를 실수로 풀어 범위를 묻기(★3) (3) 왼쪽 경계도 문자로 두면 정수해 집합 후보가 여러 개가 되어 기각 단계가 생긴다(★4 — ★ 변동 지점).'
```

### 연습문제 STEP 2

```yaml
- id: GN-CM1-199-423
  page: 199
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    A<B≤C 꼴 부등식을 {A<B, A≤C} 로 잘못 분해해 푼 해가 −3 ≤ x < 6 이었을 때, 원래 부등식의 해 구하기.
  category: '잘못된 연립의 해에서 a, b 역산 → 올바른 분해 {A<B, B≤C} 로 다시 풀기'
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "주어진 것이 틀린 풀이의 해라는 점을 이용해, 잘못된 연립을 문자 그대로 풀어 두 경계를 −3, 6 과 맞춰 a, b 를 역산"
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "A<B<C 의 올바른 분해는 가운데 식을 기준으로 {A<B, B≤C} 임을 적용해 원 부등식을 다시 세움"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "A<B<C 를 잘못 분해한 해에서 원 부등식 복원"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    「틀린 풀이의 해」라는 설정이 핵심이다. 잘못된 연립도 어쨌든 a, b 에 대한 정보를 주므로 두 경계를 −3, 6 과 대응시켜 상수를 먼저 확정하고(BW d2), 그다음 올바른 분해로 다시 푼다(EQV d1).
    두 번 푸는 구조라 단계 수가 많아 Mₛ=3. 통찰 2개 · M_total 8 → STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: '잘못된 연립을 풀어 경계 = −3, 6 → a, b → 올바른 분해 {A<B, B≤C} 로 다시 풀어 해'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$3\le x<6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/199-423.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '세 식의 계수와 잘못된 해의 두 경계를 바꿀 수 있다. 제약: 잘못된 연립에서 a, b 가 각각 한 경계씩 독립으로 정해져야 하고(아니면 역산 불가), 올바른 해가 공집합이 되지 않도록 수를 고른다. 등호 위치는 원 부등식의 등호를 따라간다.'
    creative: '(1) 잘못된 분해를 {A<C, B<C} 로 바꾸기(★3) (2) 올바른 해를 주고 잘못 푼 해를 묻는 역방향(★3) (3) 두 해가 같아지는 조건을 묻기(★4 — 조건이 등식 관계로 바뀌면 ★ 상승).'
```

```yaml
- id: GN-CM1-199-424
  page: 199
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    일차방정식 2x+3y−1 = 10x+y−3 의 해 중에서 부등식 3x+2 < 2y < 2x+5 를 만족시키는 자연수 x, y 구하기.
  category: '방정식을 2y = 8x−2 로 정리 → 부등식의 2y 에 통째로 대입 → x 범위 → 자연수 해'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "부등식의 가운데가 y 가 아니라 2y 이므로 방정식을 y= 꼴이 아닌 2y = 8x−2 꼴로 정리해 그대로 대입 — 분수를 만들지 않고 한 변수 부등식으로 넘어가는 전환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "일차방정식의 해 중 부등식을 만족하는 자연수 해"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    방정식을 정리하면 2y = 8x−2 이고, 부등식의 가운데가 마침 2y 라 그대로 갈아 끼우면 x 에 대한 A<B<C 꼴이 된다. 이 대입 형태를 못 보면 분수 y 를 대입해 계산이 지저분해진다(EQV d2).
    풀린 범위가 4/5 < x < 7/6 로 좁아 자연수 x 는 1 뿐이고 y 가 따라 정해진다. 통찰 1개 d2 · M_total 6 → STEP 2 출발점 ★3 유지(계산 자체는 가볍다).
  tier: star_3
  mechanism_primary: '방정식 → 2y = 8x−2 → 부등식의 2y 에 대입 → 3x+2 < 8x−2 < 2x+5 → x 범위 → 자연수 x, y'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$x=1$, $y=3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/199-424.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '방정식의 계수와 부등식의 양 끝 계수를 바꿀 수 있다. 제약: 방정식을 정리한 결과의 y 계수가 부등식 가운데의 y 계수와 같아야 깔끔한 대입이 되고, 최종 x 범위 안에 자연수가 정확히 하나 들어가야 답이 확정된다.'
    creative: '(1) 가운데를 3y 로 바꾸고 방정식도 3y 꼴로 맞추기(★3 유지) (2) 자연수 조건을 정수로 완화해 해가 여럿 나오게 하고 개수를 묻기(★3) (3) 방정식을 부정방정식으로 바꿔 정수해 후보를 먼저 만든 뒤 부등식으로 거르게 하기(★4 — 기각 단계가 생기면 ★ 상승).'
```

```yaml
- id: GN-CM1-199-425
  page: 199
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    문자 a 를 포함한 분수 계수 A<B<C 꼴 부등식을 만족시키는 정수 x 가 없을 때 실수 a 의 값의 범위 구하기.
  category: '분해·정리해 3 < x < 6−2a → 정수가 하나도 안 들어갈 조건 → a 범위'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「정수해가 없다」를 구간 (3, 6−2a) 가 정수 4 를 포함하지 않을 조건, 즉 6−2a ≤ 4 로 옮김 — 구간이 비는 경우까지 한꺼번에 덮는 부등식이어야 함"
    - step: 3
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "경계 6−2a = 4 일 때 구간이 3 < x < 4 가 되어 정수가 여전히 없음을 확인해 등호를 살림 — 이 확인을 빠뜨리면 a > 1 이라는 틀린 답이 나옴"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "정수해가 없을 조건(미지수 범위)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    오른쪽 부등식이 x > 3 을 고정해 주므로 왼쪽 경계가 어디까지 내려가야 정수가 안 들어오는지가 전부다(EQV d2). 3 다음 정수가 4 라는 점을 써서 6−2a ≤ 4 로 옮긴다.
    경계에서 구간이 3 < x < 4 가 되어도 정수가 없다는 확인이 등호를 살리고(VF d1), 구간이 아예 비는 경우도 같은 부등식이 덮는다.
    통찰 2개 · M_total 8 → STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: '분해·정리 → 3 < x < 6−2a → 정수 4 가 들어오지 않을 조건 6−2a ≤ 4 → a ≥ 1'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$a\ge 1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/199-425.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '분모와 상수를 바꿔 고정 경계(3)를 옮길 수 있다. 제약: 고정 경계가 정수여야 「다음 정수」가 명확해지고, 문자 쪽 부등호의 등호 유무가 답의 등호를 그대로 결정한다. a 의 계수는 답이 정수로 떨어지게 고른다.'
    creative: '(1) 「정수해가 한 개」로 바꾸기(196-e8 꼴 · ★3) (2) 「자연수 해가 없도록」으로 필터를 바꾸기(★3) (3) 양쪽 끝에 모두 문자를 넣어 두 경계가 함께 움직이게 하기(★4 — 케이스가 갈리면 ★ 상승).'
```

```yaml
- id: GN-CM1-199-426
  page: 199
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    문자 a 를 포함한 분수 계수 연립부등식을 만족시키는 음의 정수 x 가 1개뿐일 때 실수 a 의 값의 범위 구하기.
  category: '해를 (1−4a)/2 ≤ x ≤ 3 으로 정리 → 음의 정수는 −1 만 포함할 조건 → a 범위'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「음의 정수 해가 1개」를 왼쪽 경계가 −1 은 포함하고 −2 는 포함하지 않을 조건(−2 < (1−4a)/2 ≤ −1)으로 옮김 — 오른쪽 경계 3 은 음의 정수에 영향이 없음을 먼저 가려내야 함"
    - step: 3
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "경계에서 등호가 어느 쪽에 붙는지 재확인 — (1−4a)/2 = −1 이면 −1 이 해에 포함되어 조건을 만족하고, = −2 이면 −2 까지 들어와 기각된다"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "음의 정수해의 개수 조건(미지수 범위)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    정수해 개수 유형(196-e8)에 「음의」라는 필터가 한 겹 더 붙었다. 오른쪽 경계 x ≤ 3 은 0 이상 정수만 걸러내므로 음의 정수에는 관여하지 않는다는 판단이 먼저 필요하다.
    그다음 왼쪽 문자 경계가 −1 은 포함하고 −2 는 배제하는 반열린 구간 조건을 세우고(EQV d2), 양 끝 등호 방향을 확인한다(VF d1).
    통찰 2개 · M_total 8 → STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: '양변 8배로 정리 → (1−4a)/2 ≤ x ≤ 3 → 음의 정수는 −1 뿐 → −2 < (1−4a)/2 ≤ −1 → a 범위'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{3}{4}\le a<\dfrac{5}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/199-426.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '분모·상수와 개수 조건(1개)을 바꿀 수 있다. 제약: 수치 부등식이 만드는 고정 경계가 필터(음의 정수)와 겹치지 않아야 문제가 깔끔하고, 문자 쪽 등호 유무가 답의 두 등호를 결정한다. a 의 계수는 답이 분모 4 이하의 분수로 떨어지게 고른다.'
    creative: '(1) 필터를 「자연수」로 바꿔 오른쪽 경계가 작동하게 하기(★3) (2) 개수를 2개로 늘리기(★3 유지) (3) 필터를 「짝수인 정수」처럼 간격이 2 인 집합으로 바꾸면 경계 계산이 한 겹 늘어난다(★4 — ★ 변동 지점).'
```

```yaml
- id: GN-CM1-199-427
  page: 199
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 STEP 2"
  summary: |
    직선 y = x+k 가 이차함수 y = x²−2x+4 의 그래프와는 만나고 y = x²−5x+15 의 그래프와는 만나지 않도록 하는 정수 k 의 개수 구하기. 5지선다.
  category: '두 교점 조건을 각각 판별식 부호로 전환 → k 에 대한 연립일차부등식 → 정수 개수'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「그래프가 만난다 / 만나지 않는다」는 기하 조건을 연립해서 얻은 이차방정식의 판별식 부호(D ≥ 0 / D < 0)로 옮김"
    - step: 3
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "판별식(이차방정식 단원)에서 나온 두 조건을 이 단원의 연립일차부등식으로 묶어 k 의 범위와 정수 개수를 구함"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "직선과 이차함수 그래프의 교점 조건(판별식) + 연립부등식"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    이 범위에서 유일하게 단원 경계를 넘는 문항이다. 두 그래프 식을 각각 연립해 얻은 이차방정식에 D ≥ 0, D < 0 을 적용하면 k 에 대한 두 일차부등식이 되고, 그 공통범위 안의 정수를 센다.
    「만난다」에 접하는 경우가 포함되어 등호가 붙고(T-경계), 왼쪽 경계가 분수라 정수 세기에서 한 칸 실수하기 쉽다.
    [분류 이슈] 통찰 2개(I-XU 포함)로 +1 후보였으나, 교점 조건을 판별식으로 옮기는 것은 직전 단원에서 정형화된 절차라 STEP 2 출발점 ★3 을 유지했다 — ★4 후보로 기록만 함.
  tier: star_3
  mechanism_primary: '각각 연립해 이차방정식 → D ≥ 0 과 D < 0 → 7/4 ≤ k < 6 → 정수 개수'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '②'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/199-427.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 이차함수의 계수와 직선의 기울기를 바꿀 수 있다. 제약: 두 판별식이 모두 k 에 대한 일차식이어야 하고(직선의 기울기가 상수여야 한다), 공통범위가 비지 않으면서 정수 개수가 보기와 구별되게 떨어져야 한다. 한쪽 경계를 분수로 두면 정수 세기 함정이 살아난다.'
    creative: '(1) 「접한다」로 바꿔 한 조건을 등식으로 만들기(★3) (2) 두 조건 모두 「만나지 않는다」로 두어 부등호 방향을 같게 하기(★3) (3) 직선의 기울기에도 문자를 넣으면 판별식이 이차가 되어 케이스가 갈린다(★4~5 — 교육과정 경계 확인 필요).'
```

### 연습문제 실력 UP

```yaml
- id: GN-CM1-199-428
  page: 199
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    긴 의자에 5명씩 앉으면 학생이 8명 남고 6명씩 앉으면 의자가 4개 남을 때, 의자의 개수가 될 수 없는 것 고르기. 5지선다.
  category: '의자 수를 n 으로 두고 학생 수 5n+8 → 「의자가 4개 남는다」를 마지막으로 앉는 의자의 인원 조건으로 → n 범위 → 보기 대조'
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「6명씩 앉으면 의자가 4개 남는다」를 n−5 개 의자는 꽉 차고 n−4 번째 의자에는 1명 이상 6명 이하가 앉는다는 부등식 6(n−5) < 5n+8 ≤ 6(n−4) 로 옮김"
    - step: 3
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "얻은 범위 32 ≤ n < 38 의 양 끝 포함 여부를 확인해 보기 다섯 개 중 범위 밖인 것을 기각 — 경계 38 이 포함되는지가 정답을 가름"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "연립일차부등식의 활용(자리·인원 배치)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    이 단원 활용 문제 중 유일하게 부등식을 세우는 것 자체가 장벽이다. 「의자가 4개 남는다」는 말이 곧 마지막으로 학생이 앉는 의자가 n−4 번째이고 그 의자에는 1명 이상 6명 이하가 앉는다는 뜻임을 읽어야 한다(EQV d2).
    여기서 「의자가 4개 남는다」를 6(n−4) = 5n+8 같은 등식으로 잘못 옮기면 답이 하나로 나와 버린다. 범위를 얻은 뒤 보기와 대조해 경계 밖 하나를 기각한다(VF d1).
    통찰 2개 · M_total 8 · 실력 UP 구역 → 출발점 ★4 유지.
  tier: star_4
  mechanism_primary: '의자 n · 학생 5n+8 → 6(n−5) < 5n+8 ≤ 6(n−4) → 32 ≤ n < 38 → 보기 중 범위 밖'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑤'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/199-428.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '한 의자당 인원(5, 6), 남는 학생 수(8), 남는 의자 수(4)를 바꿀 수 있다. 제약: 두 번째 배치의 인원이 첫 번째보다 많아야 의자가 남고, 최종 범위가 보기 다섯 개 중 정확히 하나만 벗어나도록 폭을 조절한다. 부등호의 등호 위치(마지막 의자에 1명 이상, 6명 이하)를 바꾸면 경계가 한 칸 움직인다.'
    creative: '(1) 「학생 수가 될 수 없는 것」으로 묻는 대상을 바꾸기(★4 유지) (2) 남는 의자 수까지 범위로 주기(「의자가 3개 이상 5개 이하 남는다」 · ★4~5) (3) 조건을 하나만 주고 가능한 의자 개수의 합을 묻기(★4) (4) 남는 의자 수를 등식으로 오해해도 답이 나오지 않게 보기를 배치하면 검증 단계가 필수가 된다(★4 고정 지점).'
```

## 표본 판정 요약 (31문)

- ★ 분포: ★1 0 · ★2 24 · ★3 6 · ★4 1 · ★5 0
- 통찰형 17 · 절차형 14 · premium 0
- 통찰 유형 분포: I-EQV 11 · I-RT 4 · I-VF 3 · I-BW 2 · I-XU 1 (총 21 라벨 / 17 문항)
- M_total 분포: 6 → 8문 · 7 → 14문 · 8 → 9문 (Mₐ=2 는 문자 상수가 든 14문, Mₜ=2 는 경계가 답을 가르는 21문)
- type_hint 상위: 「해의 조건(해 없음·해 가짐·정수해 개수)」 8 · 「연립일차부등식의 활용」 5 · 「해가 주어진 미정계수」 5 · 「A<B<C 꼴 부등식」 4 · 「기본 풀이·정수 마무리」 4
- 대상층: 중하위권 12 · 중위권 16 · 중상위권 3
- 그림: 2문(`crop:fig-197-416.png` 식품 표 · `crop:fig-198-419.png` 수직선)
- 이 단원에는 「개념원리 익히기」 구역이 없어 ★1 이 한 문항도 없다. 가장 쉬운 문항도 계수 정리 + 공통범위 판정이 붙어 M_total 6 이상이다.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CM1-196-e8 | 정수해 개수 조건은 경계 등호가 답을 완전히 가르는데 통찰은 1개(EQV d2)라 산식상 +1 미달. 벤더 필수 예제 신호대로 ★2 로 둠 | ★2 / ★3 |
| GN-CM1-196-413 | e8 과 같은 사유. 열린 구간이라 경계 정수 배제 판정이 한 겹 더 있으나 ★2 유지 | ★2 / ★3 |
| GN-CM1-198-422 | STEP 1(★2 출발)이나 정수해 집합 역추적 + 경계 판정으로 통찰 2개 → ★3 으로 올림(1단 차이) | ★2 / ★3 |
| GN-CM1-199-424 | STEP 2(★3 출발)이나 계산량이 가볍고 통찰 1개·M_total 6 — 대입 형태를 못 보면 급격히 어려워져 ★3 유지 | ★2 / ★3 |
| GN-CM1-199-427 | 통찰 2개(I-XU 포함)로 +1 후보였으나 판별식 적용이 직전 단원의 정형 절차라 ★3 유지 | ★3 / ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: (가) 「해의 조건이 주어진 연립일차부등식」은 *해 없음/해 가짐*(196-e7·412·198-421)과 *정수해 개수·합*(196-e8·413·198-422·199-425·426)이 골조가 다르다 — 앞은 경계 배치 한 번, 뒤는 「어떤 정수를 포함하고 어떤 정수를 배제할지」를 세우는 단계가 추가된다. 두 유형으로 분리하는 편이 ★ 와 변형 설계에 맞는다. (나) 활용은 *농도·혼합*(197-e9·416)과 *나누어 주기·자리 배치*(197-415·199-428)를 나눠야 한다. 뒤쪽은 「남는다」를 부등식으로 옮기는 단계가 유형의 본질이고 ★ 가 한두 단 높다.
- **통합해도 될 유형**: 「연립일차부등식의 풀이」와 「A<B<C 꼴 부등식의 풀이」는 분해 규칙 한 줄만 다르고 이후 골조가 같다 — 하나의 유형에 *분해 필요 여부* 속성으로 두는 편이 낫다. 「해가 주어진 미정계수」와 「수직선 그림으로 해가 주어진 미정계수」(198-419)도 제시 방식만 다르므로 같은 유형의 변형으로 묶는다.
- **단원 경계**: 199-427 만 이차방정식 판별식과 결합한다. 카탈로그에서는 이 단원이 아니라 「이차방정식·이차함수의 활용」 쪽 유형에 두고 이 단원에서는 교차 참조로 걸어 두는 편이 맞다.
