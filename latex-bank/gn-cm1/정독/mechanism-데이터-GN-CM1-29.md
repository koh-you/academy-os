---
name: mechanism-데이터-GN-CM1-29
description: 개념원리 공통수학1 29 경우의 수(1/1 · 234~243쪽 41문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학1(22개정) · 전사본 latex-bank/gn-cm1
  section: 29 경우의 수
  unit_code: "29"
  part: "1/1"
  extract_range: "234~243쪽 · 234-503~243-536"
  total_problems: 41
  unit_total: 41
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm1/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm1/items/<id>.tex
  image_source: latex-bank/gn-cm1/figures/ (crops.json)
---

# 개념원리 공통수학1 · 29 경우의 수 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 공통수학1 234~243쪽에 실린 29단원 경우의 수 전 41문항을 다룬다. 전사본 group section 은 「개념원리 익히기」 4 · 「필수·발전 예제」 26(필수 예제 6 · 발전 예제 1 · 확인체크 19) · 「연습문제 STEP 1」 5 · 「연습문제 STEP 2」 5 · 「연습문제 실력 UP」 1 이고, 절 순서는 전사본 순서를 그대로 따랐다.

★ 출발점은 구역·태그로 잡았다 — 「개념원리 익히기」 ★1 · 「필수」 예제 ★2 · 「발전」 예제 ★3 · STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4. 이 단원의 「확인체크」는 모두 바로 앞 예제의 쌍둥이 연습(같은 쪽·같은 골조)이라 **짝이 되는 예제의 출발점을 물려받았다**(필수 뒤 ★2 · 발전 뒤 ★3). 지시서의 「확인체크 ★1 출발」은 통번호로 실린 「개념원리 익히기」 문항에 적용했다. 출발점에서 통찰 0 · M_total ≤ 5 면 −1, 통찰 2개 이상이거나 통찰 1개 + M_total 8 이상이면 +1 로 조정하고, 조정 근거는 각 블록 rationale 에 적었다.

단원 골조는 다섯 갈래로 거의 전부 설명된다 — ① 합의 법칙·여사건(배수·서로소 세기) ② 정수해 순서쌍(계수 큰 변수 고정 후 분기) ③ 곱의 법칙(자리 수·전개식 항·약수의 개수) ④ 도로망 경로(경유 지점 분기 → 곱 → 합) ⑤ 색칠·지불(인접 제약 순서 결정 / 금액 중복 제거). 계산은 전 문항이 가볍고(Mₖ 대부분 1~2), 변별은 **분기를 빠짐없이 나누는가**와 **중복을 제거하는가**에 몰려 있다. 그래서 통찰 라벨도 I-MI(분기)와 I-EQV(조건 동치 변환)에 집중되고, I-XU·I-BW·I-SYM 은 연습문제 뒷부분 4문에만 나타난다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(통찰 유형·depth·근거) · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 창의 변형과 ★ 변동 지점)를 채웠다. 그림 문항은 13문이며 도로망·색칠·격자·정육면체 그림이다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-CM1-234-503
  page: 234
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    김밥 4종류, 라면 3종류, 볶음밥 3종류 중에서 한 가지 음식을 택하는 경우의 수.
  category: "합의 법칙 → 배타적인 세 사건의 경우의 수 더하기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "합의 법칙 — 동시에 일어나지 않는 사건의 경우의 수"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    한 가지만 택하므로 세 사건이 동시에 일어나지 않는다 → 4+3+3. 단계 1개·통찰 없음·M_total 4 로 개념원리 익히기 출발 ★1 을 그대로 둔다.
  tier: star_1
  mechanism_primary: "배타적인 세 선택지 → 4+3+3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$10$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/234-503.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 종류의 개수(4,3,3)를 자유롭게 바꿀 수 있고 종류 수를 4가지로 늘려도 골조가 같다. 제약: 겹치는 메뉴(예: 김밥이면서 라면)가 생기지 않아야 단순 합이 유지된다."
    creative: "(1) 「두 가지를 각각 하나씩」으로 바꾸면 곱의 법칙(★1 유지) (2) 「한 가지 또는 두 가지」로 바꾸면 합+곱 결합(★2) (3) 세트 메뉴처럼 일부가 중복되게 하면 중복 제거가 필요해 ★2(I-EQV d1)."
```

```yaml
- id: GN-CM1-234-504
  page: 234
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    서로 다른 두 주사위를 던질 때 ⑴ 두 눈의 수의 합이 11 이상인 경우의 수 ⑵ 두 눈의 수의 차가 1 이하인 경우의 수.
  category: "주사위 두 개 → 조건을 만족하는 값별로 순서쌍 세어 더하기"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "주사위 두 개의 눈의 합·차 조건과 합의 법칙"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴ 합 11·12 ⑵ 차 0·1 로 값을 쪼갠 뒤 각 값의 순서쌍을 세어 더하는 표준 나열. 통찰 없음·M_total 5 라 −1 후보지만 하한이라 개념원리 익히기 ★1 유지.
  tier: star_1
  mechanism_primary: "조건을 만족하는 합(또는 차)의 값별 분류 → 각 값의 순서쌍 개수 → 합의 법칙"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $3$ ⑵ $16$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/234-504.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준값(11 이상 · 1 이하)과 부등호 방향을 바꿀 수 있다. 제약: 순서쌍이 (a,b)≠(b,a) 로 구분되는 서로 다른 주사위라는 전제를 유지하고, 차 조건은 절댓값 기준임을 명시."
    creative: "(1) 합이 소수·배수인 경우로 바꾸기(★1~2) (2) 주사위를 3개로 늘리면 분기가 늘어 ★2 (3) 「합이 11 이상 또는 차가 1 이하」로 묶으면 중복 제거가 필요해 ★2(I-EQV d1)."
```

```yaml
- id: GN-CM1-234-505
  page: 234
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    모자 4종류, 티셔츠 3종류, 바지 5종류에서 각각 하나씩 고르는 방법의 수.
  category: "곱의 법칙 → 독립인 세 선택을 차례로 곱하기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곱의 법칙 — 각각 하나씩 고르는 방법의 수"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    세 선택이 서로 영향을 주지 않으므로 4×3×5 한 줄. 앞 문항(합의 법칙)과 대비되는 곱의 법칙 확인용. 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "독립인 세 단계 선택 → 4×3×5"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$60$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/234-505.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 품목 수(4,3,5)와 품목 종류 수를 바꿀 수 있다. 제약: 각 단계가 서로의 선택지를 줄이지 않아야 단순 곱이 유지된다."
    creative: "(1) 「모자는 쓰지 않아도 된다」를 넣으면 4→5(★1, T-범위 함정) (2) 특정 조합 금지 조건을 추가하면 여사건 ★2 (3) 「하나만 고른다」로 바꾸면 합의 법칙(★1)과 대비 문항이 된다."
```

```yaml
- id: GN-CM1-234-506
  page: 234
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    집·도서관·학교를 잇는 그림의 도로망에서 집에서 도서관을 거쳐 학교까지 가는 방법의 수.
  category: "도로망 → 구간별 경로 수의 곱"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 구간 도로망에서 곱의 법칙"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    경유지가 도서관 하나로 지정돼 분기가 없다. 집→도서관 길 수와 도서관→학교 길 수를 그림에서 읽어 곱하면 끝. M_total 4·통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "집→도서관 경로 수 × 도서관→학교 경로 수"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$12$'
  answer_source: "답지"
  figure: crop:fig-234-506.png
  latex: latex-bank/gn-cm1/items/234-506.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 구간의 길 수를 바꿀 수 있다(그림 라벨 집·도서관·학교는 고정). 제약: 구간을 건너뛰는 직행 길을 그리면 합의 법칙이 추가로 필요해진다."
    creative: "(1) 왕복(같은 길 재사용 금지)으로 바꾸면 두 번째 구간 선택지가 줄어 ★2 (2) 경유지를 두 곳으로 늘리면 3구간 곱(★1~2) (3) 「도서관을 거치거나 거치지 않고」로 바꾸면 합+곱 결합 ★2."
```

### 필수·발전 예제

```yaml
- id: GN-CM1-235-e1
  page: 235
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    1부터 100까지 적힌 카드 100장에서 1장을 뽑을 때 ⑴ 12의 배수 또는 13의 배수 ⑵ 2의 배수 또는 5의 배수 ⑶ 100과 서로소인 수가 나오는 경우의 수.
  category: "배수의 개수 → 합집합(공배수 중복 제거) → 여사건"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'100과 서로소' 를 '2의 배수도 5의 배수도 아님' 으로 옮기고 ⑵ 의 결과를 여사건으로 빼는 동치 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "합의 법칙 — 배수의 개수와 여사건(서로소)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 공배수가 100 이하에 없어 단순 합, ⑵ 는 10의 배수를 빼는 포함배제, ⑶ 은 100=2²·5² 이므로 ⑵ 의 여사건. 세 소문항이 한 골조 위에 쌓이는 구조라 단계는 4~6개(Mₛ 2). 통찰 1개(EQV d1)이나 여사건은 이 예제가 가르치는 표준 기법이라 +1 하지 않고 필수 예제 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "각 배수의 개수 → 공배수 빼기(합집합) → 서로소는 전체에서 여사건 빼기"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $15$ ⑵ $60$ ⑶ $40$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/235-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상한(100)과 두 배수(12·13, 2·5)를 바꿀 수 있다. 제약: ⑴ 처럼 중복이 없게 하려면 두 수의 최소공배수가 상한을 넘어야 하고, ⑶ 은 상한의 소인수가 ⑵ 의 두 수와 일치해야 여사건으로 이어진다."
    creative: "(1) 세 수의 배수(2·3·5)로 늘리면 포함배제 3항 → ★3(I-EQV d2) (2) 「서로소인 수의 합」을 묻기(★3) (3) 상한을 1000 으로 올리고 배수를 6·10 처럼 최소공배수가 상한 안에 오게 하면 중복 처리 필수 ★3."
```

```yaml
- id: GN-CM1-235-507
  page: 235
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    서로 다른 두 주사위를 던질 때 두 눈의 수의 합이 3의 배수 또는 5의 배수가 되는 경우의 수.
  category: "합의 값별 순서쌍 세기 → 배타적인 값들의 합의 법칙"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "주사위 두 눈의 합이 배수가 되는 경우의 수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    합이 3·6·9·12(3의 배수)와 5·10(5의 배수)인 순서쌍을 각각 세어 더한다. 두 조건이 동시에 성립하는 합은 없어 중복 제거가 필요 없다. 나열량은 있으나 통찰 없음·M_total 6 → 확인체크 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "합의 값별 순서쌍 개수 나열 → 3의 배수 6개 값 + 5의 배수 2개 값 → 합의 법칙"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$19$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/235-507.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 배수(3·5)를 바꿀 수 있다. 제약: 두 배수의 공배수가 합의 범위(2~12) 안에 들어오면(예: 2와 3 → 6, 12) 중복 제거가 추가로 필요하므로 의도에 맞게 고른다."
    creative: "(1) 합이 6의 배수인 경우처럼 중복이 생기게 하면 포함배제 ★2~3 (2) 두 눈의 곱이 배수인 경우로 바꾸면 소인수 분기 ★3 (3) 주사위 3개로 늘리면 분기 폭발 ★3."
```

```yaml
- id: GN-CM1-235-508
  page: 235
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    1~5가 적힌 공이 든 두 상자에서 공을 한 개씩 꺼낼 때 두 수의 차가 2 이하인 경우의 수.
  category: "차의 값별(0·1·2) 순서쌍 세기 → 합의 법칙"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 수의 차 조건을 만족하는 순서쌍의 개수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    차가 0·1·2 인 경우를 각각 세어 더한다. 상자가 서로 다르므로 (a,b)와 (b,a)를 따로 센다는 점이 유일한 함정. 통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "차 = 0, 1, 2 로 분류 → 각 차의 순서쌍 개수 → 합의 법칙"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$19$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/235-508.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공의 최대 수(5)와 차의 기준(2 이하)을 바꿀 수 있다. 제약: 기준이 최대 수에 가까워지면 여사건(차가 기준 초과)으로 세는 편이 빨라지므로 의도한 골조가 바뀐다."
    creative: "(1) 「차가 2 이상」으로 뒤집어 여사건 활용(★2, I-SC d1) (2) 두 상자의 공 개수를 다르게 하면 비대칭 나열 ★2 (3) 「두 수의 합이 짝수이고 차가 2 이하」처럼 조건을 겹치면 ★3(I-CON 후보)."
```

```yaml
- id: GN-CM1-235-509
  page: 235
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    1부터 100까지의 자연수 중 5 또는 7로 나누어떨어지는 수의 개수.
  category: "각 배수의 개수 → 공배수 개수 빼기(포함배제)"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "일정 범위에서 두 수의 배수의 개수(포함배제)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    5의 배수 개수 + 7의 배수 개수 − 35의 배수 개수. 함정은 상한 100 포함 여부(T-범위)와 「또는」에서 공배수를 두 번 세는 것(T-표기) 둘뿐이고 계산은 나눗셈 세 번. 통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "각 배수의 개수(몫) → 최소공배수의 배수 개수를 한 번 빼기"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$32$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/235-509.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상한(100)과 두 수(5·7)를 바꿀 수 있다. 제약: 두 수가 서로소가 아니면 공배수가 최소공배수 기준이라는 점을 학생이 놓치기 쉬우므로 서로소 여부를 의도적으로 정한다."
    creative: "(1) 「5로도 7로도 나누어떨어지지 않는」으로 뒤집으면 여사건 ★3(242-531 과 같은 골조) (2) 세 수의 배수로 늘리면 포함배제 3항 ★3 (3) 범위를 「50 이상 200 이하」로 옮기면 양끝 처리 함정이 강화돼 ★2~3."
```

```yaml
- id: GN-CM1-236-e2
  page: 236
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    x + 2y + 3z = 11 을 만족시키는 자연수 x, y, z 의 순서쌍의 개수.
  category: "계수가 큰 변수 고정 → 남은 이원방정식의 자연수해 나열 → 합의 법칙"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정수(자연수) 해의 순서쌍 개수 — 계수가 큰 변수 기준 분기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    z 의 값 범위가 가장 좁으므로 z 를 먼저 고정하고 남은 x+2y 의 자연수해를 센다. 함정은 자연수(1 이상)라는 하한(T-범위)과 각 분기의 상한 경계(T-경계). 통찰 없음·M_total 7 → 필수 예제 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "범위가 가장 좁은 z 고정 → 각 z 마다 x+2y 값의 자연수해 개수 → 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$5$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/236-e2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수(1,2,3)와 우변(11)을 바꿀 수 있다. 제약: 우변이 커지면 분기 수가 급증하므로 계수가 큰 변수의 분기가 3~5개가 되도록 우변을 고른다. 자연수인지 음이 아닌 정수인지에 따라 답이 달라지므로 발문에 명시."
    creative: "(1) 음이 아닌 정수로 바꾸면 분기가 늘어 ★2 (2) 부등식(≤)으로 바꾸면 한 변수의 자유도가 생겨 ★2 (3) 「순서쌍의 개수가 k 가 되도록 우변을 정하라」로 뒤집으면 역추적 ★3(I-BW d2)."
```

```yaml
- id: GN-CM1-236-510
  page: 236
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    2x + y + z = 5 를 만족시키는 음이 아닌 정수 x, y, z 의 순서쌍의 개수.
  category: "계수가 큰 변수 고정 → 남은 합의 해 개수 세기 → 합의 법칙"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정수 해의 순서쌍 개수 — 음이 아닌 정수 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x 를 0,1,2 로 고정하면 y+z 가 각각 5,3,1 이 되고 그 해의 개수는 (값+1)개. 0 을 허용한다는 점(T-범위)과 각 분기의 상한(T-경계)이 함정. 통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "2의 계수를 가진 x 고정 → y+z = (남은 값) 의 해 개수 → 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$12$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/236-510.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수(2)와 우변(5)을 바꿀 수 있다. 제약: 음이 아닌 정수이므로 각 분기의 해 개수가 (남은 값+1)로 일정해야 골조가 유지된다."
    creative: "(1) 자연수 조건으로 바꾸면 하한 이동이 필요해 ★2 (2) 변수 하나에 상한(y ≤ 3)을 추가하면 기각 검증이 생겨 ★3(I-VF d2) (3) 방정식을 부등식으로 바꾸면 236-511 골조."
```

```yaml
- id: GN-CM1-236-511
  page: 236
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    3x + y ≤ 10 을 만족시키는 자연수 x, y 의 순서쌍의 개수.
  category: "x 의 가능한 값 분기 → 각 분기의 y 개수 → 합의 법칙"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부등식을 만족시키는 자연수 순서쌍의 개수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y ≥ 1 이므로 3x ≤ 9, 즉 x = 1,2,3 이고 각 x 마다 y 는 1부터 10−3x 까지. 부등식이라 상한이 분기마다 달라지는 것(T-경계)과 자연수 하한(T-범위)이 함정. 통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "y ≥ 1 로 x 의 범위 확정 → 각 x 마다 y 의 개수(10−3x) → 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$12$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/236-511.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수(3)와 우변(10)을 바꿀 수 있다. 제약: x 의 분기가 3~5개가 되도록 계수와 우변의 비를 잡고, 자연수/음이 아닌 정수 여부를 발문에 명시(하한이 답을 바꾼다)."
    creative: "(1) 음이 아닌 정수로 바꾸면 242-526 골조 (2) 변수 3개(3x+y+z ≤ 10)로 늘리면 이중 분기 ★3 (3) 「순서쌍이 12개가 되는 우변」으로 뒤집으면 ★3(I-BW d2)."
```

```yaml
- id: GN-CM1-236-512
  page: 236
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    500원·1000원·2000원 우표를 세 종류 모두 한 장 이상 포함해 합계 10000원어치 사는 방법의 수.
  category: "금액 조건을 정수방정식으로 → 최소 1장 하한 → 계수 큰 변수 분기"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "금액 조건을 500으로 약분한 정수방정식으로 옮기고 '세 종류 모두 한 장 이상' 을 세 변수의 하한 1 로 바꿔 읽는 동치 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "금액 조건 정수방정식의 해 개수(각 종류 최소 1장)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    500으로 약분해 x+2y+4z=20 (x,y,z ≥ 1) 로 만든 뒤 z 를 1부터 고정해 각 분기의 y 범위를 센다. 분기가 4개라 단계가 7개 이상(Mₛ 3)이고 「적어도 한 장씩」 하한(T-범위)과 각 분기 상한(T-경계)이 함정. 약분·하한 이동의 동치 변환 1개(EQV d1)에 M_total 8 이 겹쳐 확인체크 출발 ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: "500으로 약분 → x+2y+4z=20, x,y,z ≥ 1 → z 분기별 y 개수 → 합"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$16$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/236-512.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 액면가(500·1000·2000)와 총액(10000)을 바꿀 수 있다. 제약: 액면가들의 최대공약수로 약분한 뒤 계수가 1,2,4 처럼 서로 배수 관계여야 분기 수가 관리 가능하고, 총액은 최소 구성(세 종류 1장씩)보다 충분히 커야 해가 존재한다."
    creative: "(1) 「적어도 한 장씩」을 빼면 분기가 늘어 ★3 유지·나열량만 증가 (2) 특정 종류의 장수 상한을 주면 기각 검증 ★3(I-VF d2) (3) 「방법의 수가 16이 되는 총액」으로 뒤집으면 역추적 ★4."
```

```yaml
- id: GN-CM1-237-e3
  page: 237
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    십의 자리 숫자는 홀수이고 일의 자리 숫자는 소수인 두 자리 자연수의 개수.
  category: "자리별 후보 개수 → 곱의 법칙"
  M: {s: 1, k: 1, a: 1, t: 2}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곱의 법칙 — 자리 조건이 주어진 자연수의 개수"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    십의 자리 후보(홀수 5개)와 일의 자리 후보(소수 2,3,5,7 의 4개)를 세어 곱하면 끝. 함정은 1이 소수가 아니라는 것(T-표기)과 자리 숫자 범위(T-범위)뿐. 필수 예제 출발 ★2 이나 곱의 법칙 1회 적용·통찰 없음·M_total 5 라 −1 → ★1.
  tier: star_1
  mechanism_primary: "십의 자리 후보 수 × 일의 자리 후보 수"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$20$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/237-e3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "자리 조건(홀수·소수)을 약수·배수 조건으로 바꿀 수 있다. 제약: 최고 자리에 0이 올 수 없다는 점과 0이 배수 조건에 포함되는지를 조건마다 다시 확인해야 한다."
    creative: "(1) 세 자리로 늘리면 237-513 골조 (2) 「각 자리 숫자가 모두 다른」 조건을 넣으면 단계별 선택지 감소 ★2 (3) 「이 중 3의 배수인 것」을 추가하면 자리합 조건으로 분기 ★3."
```

```yaml
- id: GN-CM1-237-513
  page: 237
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    백의 자리 숫자는 6의 약수, 십의 자리 숫자는 4의 배수인 세 자리 자연수 중 짝수의 개수.
  category: "자리별 후보 개수(0 포함 여부 판정) → 곱의 법칙"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곱의 법칙 — 자리마다 약수·배수 조건이 붙은 자연수의 개수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    백의 자리(6의 약수) · 십의 자리(4의 배수) · 일의 자리(짝수)의 후보를 각각 세어 곱한다. 변별 지점은 자리 숫자로 쓸 수 있는 4의 배수에 0 을 넣을지(T-범위)와 일의 자리 짝수에 0 을 포함하는지(T-경계). 통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "세 자리 각각의 후보 숫자 개수를 세어 곱하기"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$40$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/237-513.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준 수(6의 약수·4의 배수)와 마지막 조건(짝수)을 바꿀 수 있다. 제약: 0 을 후보에 넣는지에 따라 답이 달라지므로 의도를 발문·해설에서 고정해야 한다."
    creative: "(1) 「3의 배수」로 바꾸면 자리합 조건이라 곱의 법칙이 깨지고 ★3 (2) 네 자리로 늘리면 나열량만 증가(★2) (3) 「각 자리가 서로 다른」을 추가하면 순서 의존 선택 ★3."
```

```yaml
- id: GN-CM1-237-514
  page: 237
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴ (a+b+c)(x+y+z) ⑵ (a+b)(c+d) − (x+y+z)(p−q) 의 전개식에서 항의 개수.
  category: "각 곱의 항 수는 곱의 법칙 → 동류항이 없으면 합의 법칙"
  M: {s: 1, k: 1, a: 1, t: 2}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "다항식 전개식의 항의 개수(곱의 법칙)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    각 괄호에서 한 항씩 고르는 것이 곱의 법칙이므로 3×3, 2×2 와 3×2 를 더한다. 함정은 두 곱 사이에 같은 문자가 없어 동류항이 생기지 않는다는 확인(T-표기)과 부호(T-부호)뿐. 통찰 없음·M_total 5 → 확인체크 출발 ★2 에서 −1 → ★1.
  tier: star_1
  mechanism_primary: "괄호마다 한 항씩 선택 → 항 수의 곱 → 서로 다른 문자면 그대로 더하기"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $9$ ⑵ $10$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/237-514.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 괄호의 항 수를 바꿀 수 있다. 제약: 두 곱에 공통 문자가 들어가면 동류항이 생겨 단순 합이 깨지므로 문자 집합을 서로 분리해 둔다."
    creative: "(1) 같은 문자를 공유시켜 동류항을 만들면 중복 제거 ★2~3 (2) 제곱 꼴 (a+b+c)² 로 바꾸면 242-527 골조(★2) (3) 세 다항식의 곱으로 늘리면 나열량만 증가(★2)."
```

```yaml
- id: GN-CM1-237-515
  page: 237
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    서로 다른 주사위 3개를 동시에 던졌을 때 세 눈의 수의 곱이 홀수인 경우의 수.
  category: "곱이 홀수 ⟺ 세 눈이 모두 홀수 → 곱의 법칙"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곱의 홀짝 조건과 곱의 법칙"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    짝수가 하나라도 있으면 곱이 짝수이므로 세 눈이 모두 홀수여야 한다 → 3×3×3. 홀짝 판정은 교과서가 바로 가르치는 한 줄이라 통찰로 세지 않았다. M_total 4 → 확인체크 출발 ★2 에서 −1 → ★1.
  tier: star_1
  mechanism_primary: "곱이 홀수 ⟺ 모든 눈이 홀수 → 3×3×3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$27$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/237-515.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주사위 개수(3)와 면 수를 바꿀 수 있다. 제약: 홀수 눈의 개수가 곱의 밑이 되므로 면 수가 홀수일 때 홀·짝 개수가 달라진다는 점을 반영."
    creative: "(1) 「곱이 짝수」로 뒤집으면 여사건 ★2(I-SC d1) (2) 「곱이 4의 배수」로 바꾸면 짝수 개수 분기 ★3(I-MI d2) (3) 「합이 홀수」로 바꾸면 홀수 눈의 개수가 홀수여야 하므로 분기 ★2~3."
```

```yaml
- id: GN-CM1-238-e4
  page: 238
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ 360의 양의 약수의 개수 ⑵ 360과 540의 양의 공약수의 개수.
  category: "소인수분해 → (지수+1) 의 곱 / 공약수는 최대공약수의 약수"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "약수의 개수와 공약수의 개수(최대공약수 이용)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 360을 소인수분해해 지수에 1을 더해 곱하고, ⑵ 는 공약수가 최대공약수의 약수라는 성질로 같은 계산을 한 번 더 한다. 두 성질 모두 이 예제가 가르치는 공식이라 통찰로 세지 않았고, 계산 2회·M_total 6 → 필수 예제 ★2 유지.
  tier: star_2
  mechanism_primary: "소인수분해 → (지수+1) 곱 / 공약수는 최대공약수의 약수 개수"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $24$ ⑵ $18$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/238-e4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 수(360·540)를 바꿀 수 있다. 제약: 소인수가 2~3종류이고 지수가 1~3 정도여야 계산이 한 줄에 들어오며, 공약수 문항은 두 수의 최대공약수가 1이 아니어야 의미가 있다."
    creative: "(1) 「약수의 총합」으로 바꾸면 등비합 결합 ★3 (2) 「약수의 개수가 홀수인 수」로 바꾸면 완전제곱 성질 ★3(I-EQV d2) (3) 「약수의 개수가 24가 되는 가장 작은 수」로 뒤집으면 역추적 ★4."
```

```yaml
- id: GN-CM1-238-516
  page: 238
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴ 144의 양의 약수의 개수 ⑵ 144와 504의 양의 공약수의 개수.
  category: "소인수분해 → (지수+1) 의 곱 / 공약수는 최대공약수의 약수"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "약수의 개수와 공약수의 개수(최대공약수 이용)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    238-e4 와 같은 골조로 수만 다르다. 소인수분해 두 번과 최대공약수 한 번이 전부이고 함정은 지수에 1을 더하는 것을 빠뜨리는 것(T-표기). 통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "소인수분해 → (지수+1) 곱 / 최대공약수의 약수 개수"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $15$ ⑵ $12$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/238-516.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 수(144·504)를 바꿀 수 있다. 제약: 144처럼 제곱수를 쓰면 약수의 개수가 홀수가 되므로 그 성질을 노출할지 정해야 한다."
    creative: "(1) 「공약수 중 짝수의 개수」로 바꾸면 238-518 골조(★2, I-EQV d1) (2) 세 수의 공약수로 늘리면 최대공약수 계산만 증가(★2) (3) 「최소공배수의 약수의 개수」로 바꾸면 지수 최댓값 사용 ★3."
```

```yaml
- id: GN-CM1-238-517
  page: 238
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    270의 양의 약수 중 홀수의 개수.
  category: "소인수분해 → 2의 지수를 0으로 고정 → 남은 부분의 약수 개수"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'홀수인 약수' 를 '소인수 2를 쓰지 않은 약수', 즉 2를 제외한 부분의 약수로 바꿔 읽는 동치 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "특정 성질(홀수·배수)을 가진 약수의 개수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    270 = 2 × 3³ × 5 에서 홀수 약수는 2의 지수가 0인 것이므로 3³ × 5 의 약수 개수와 같다. 지수를 0으로 고정한다는 착안(EQV d1) 하나가 전부이고 계산은 한 줄. 통찰 1개지만 M_total 6 이라 +1 하지 않고 ★2.
  tier: star_2
  mechanism_primary: "소인수분해 → 2의 지수 0 고정 → 남은 소인수들의 (지수+1) 곱"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/238-517.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "원래 수(270)를 바꿀 수 있다. 제약: 2의 지수가 1 이상이어야 홀수 조건이 의미를 갖고, 홀수 소인수가 2종류 이상이어야 계산이 곱으로 남는다."
    creative: "(1) 「짝수인 약수의 개수」로 바꾸면 2의 지수 하한 1 → 238-518 골조(★2) (2) 「3의 배수인 약수」로 바꾸면 지수 하한 이동(★2) (3) 「홀수인 약수의 총합」으로 바꾸면 등비합 결합 ★3."
```

```yaml
- id: GN-CM1-238-518
  page: 238
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    600의 양의 약수 중 2의 배수의 개수를 p, 3의 배수의 개수를 q 라 할 때 p+q 의 값.
  category: "배수 조건을 지수의 하한으로 옮겨 각각 약수의 개수 세기 → 합"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'2의 배수인 약수' 를 '2의 지수가 1 이상인 약수' 로 옮겨 지수의 선택 가짓수를 하나 줄이는 동치 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "특정 배수인 약수의 개수(지수 하한 이동)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    600 = 2³ × 3 × 5² 에서 2의 배수인 약수는 2의 지수를 1~3 중에서, 3의 배수인 약수는 3의 지수를 1로 고정해 센다. 배수 조건을 지수 하한으로 옮기는 착안(EQV d1) 하나. p 와 q 를 따로 구해 더하는 두 번 계산이라 M_total 7 이지만 +1 기준(M_total 8)에는 못 미쳐 ★2.
  tier: star_2
  mechanism_primary: "소인수분해 → 배수 조건을 해당 소인수 지수의 하한으로 → 각각 (지수 선택 수) 곱 → p+q"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$30$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/238-518.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "원래 수(600)와 두 배수 조건(2·3)을 바꿀 수 있다. 제약: 조건에 쓰는 수가 원래 수의 소인수여야 하고, 지수가 클수록 하한 이동의 효과가 잘 드러난다."
    creative: "(1) p−q 나 pq 를 묻기(★2 유지) (2) 「2의 배수이면서 3의 배수인 약수」로 바꾸면 두 하한 동시 적용 ★2~3 (3) 「2의 배수 또는 3의 배수인 약수」로 바꾸면 포함배제까지 들어가 ★3(I-EQV d2)."
```

```yaml
- id: GN-CM1-239-e5
  page: 239
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    네 도시 A, B, C, D 를 잇는 그림의 도로망에서 ⑴ 지나간 도시를 다시 지나지 않고 A 에서 B 로 가는 경우의 수 ⑵ 두 사람이 A 에서 B 로 가되 한 사람이 지난 중간 도시는 다른 사람이 지날 수 없을 때의 경우의 수.
  category: "경유 도시 조합별 분기 → 구간 도로 수의 곱 → 합의 법칙"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "⑵ 에서 '한 사람이 지난 중간 도시는 다른 사람이 못 지난다' 는 조건이 두 사람의 경유 도시 배정을 여러 경우로 갈라, 각 배정마다 남은 도로 수가 달라지는 것을 모두 따져야 함"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "도로망에서의 경우의 수 — 경유 지점 분기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑴ 은 경유 도시를 없음·C·D·C→D·D→C 로 나눠 각 구간 도로 수를 곱한 뒤 더하는 표준 분기. ⑵ 는 여기에 두 사람의 중간 도시 배정이 겹치지 않아야 한다는 조건이 붙어 분기가 한 층 더 생긴다(MI d2). 단계 7개 이상·M_total 8·통찰 1 → 필수 예제 출발 ★2 에서 +1.
  tier: star_3
  mechanism_primary: "경유 도시 경우로 분기 → 각 경우의 구간 도로 수 곱 → 합 → ⑵ 는 두 사람의 경유 도시 배정별로 다시 곱"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ $15$ ⑵ $108$'
  answer_source: "본문 풀이"
  figure: crop:fig-239-e5.png
  latex: latex-bank/gn-cm1/items/239-e5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 구간의 도로 개수를 바꿀 수 있다(도시 라벨 A·B·C·D 와 연결 구조는 그림 고정). 제약: 도로 수를 바꾸면 ⑴ 의 분기별 곱만 달라지고 골조는 유지되며, 중간 도시를 늘리면 분기 수가 급격히 커진다."
    creative: "(1) 사람을 3명으로 늘리면 배정 분기가 늘어 ★4 (2) 「C 를 반드시 지난다」를 넣으면 분기가 줄어 ★2 (3) 왕복(같은 도로 재사용 금지)으로 바꾸면 239-520 골조 ★3."
```

```yaml
- id: GN-CM1-239-519
  page: 239
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    네 도시 A, B, C, D 를 잇는 그림의 도로망에서 같은 도시를 두 번 이상 지나지 않고 A 에서 D 로 가는 경우의 수.
  category: "경유 도시 순서별 분기 → 구간 도로 수의 곱 → 합의 법칙"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "도로망에서의 경우의 수 — 경유 지점 분기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    A→D 의 경유 도시를 없음·B·C·B→C·C→B 로 빠짐없이 나눈 뒤 각 분기의 구간 도로 수를 곱해 더한다. 분기 나열이 길어 M_total 8 이지만 239-e5 ⑴ 과 같은 골조의 반복이고 새 착안이 없어 확인체크 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "경유 도시의 순서까지 포함해 분기 → 각 분기 구간 도로 수 곱 → 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$38$'
  answer_source: "답지"
  figure: crop:fig-239-519.png
  latex: latex-bank/gn-cm1/items/239-519.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 구간 도로 수를 바꿀 수 있다(그림의 도시 라벨·연결 구조 고정). 제약: 분기를 빠뜨리지 않으려면 경유 도시 순서(B→C 와 C→B)를 구분해 세야 한다."
    creative: "(1) 도착지를 B 로 바꾸면 239-e5 ⑴ (2) 「C 를 지나지 않는」 조건을 넣으면 분기 축소 ★2 (3) 「도시를 다시 지나도 되지만 같은 도로는 한 번만」으로 바꾸면 분기 성격이 바뀌어 ★3."
```

```yaml
- id: GN-CM1-239-520
  page: 239
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    세 지점 A, B, C 를 잇는 그림의 도로망에서 같은 도로를 두 번 이상 지나지 않고 A 에서 출발해 C 를 한 번만 지나 A 로 돌아오는 경우의 수(이동 중 A 는 지나지 않는다).
  category: "갈 때 경로 분기 → 쓴 도로를 뺀 나머지로 올 때 경로 세기 → 곱·합"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "갈 때 B 를 거쳤는지에 따라 돌아올 때 쓸 수 있는 도로 수가 달라지므로 갈 때 경로의 종류별로 경우를 나눠야 함"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "도로망 왕복 — 사용한 도로 제외 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    갈 때 A→C 직행인지 A→B→C 인지로 나누고, 각 경우에 이미 쓴 도로를 제외한 채 돌아오는 경로를 센다. 「같은 도로 두 번 금지」와 「C 는 한 번만·이동 중 A 금지」가 겹쳐 함정이 두 층(T-범위·T-경계). 통찰 1(MI d2)·M_total 8 → 확인체크 출발 ★2 에서 +1.
  tier: star_3
  mechanism_primary: "갈 때 경로를 종류별로 분기 → 각 분기에서 사용한 도로를 뺀 나머지로 올 때 경로 수 → 곱한 뒤 합"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$34$'
  answer_source: "답지"
  figure: crop:fig-239-520.png
  latex: latex-bank/gn-cm1/items/239-520.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 구간 도로 수를 바꿀 수 있다(그림의 지점 라벨 고정). 제약: 갈 때 쓴 도로를 뺀 뒤에도 돌아올 경로가 남도록 각 구간에 도로가 2개 이상 있어야 한다."
    creative: "(1) 「같은 도로를 다시 지나도 된다」로 풀면 단순 곱 ★2 (2) 「B 를 반드시 지난다」를 넣으면 분기 축소 ★2 (3) 지점을 4개로 늘리면 갈 때 분기가 늘어 ★4."
```

```yaml
- id: GN-CM1-240-e6
  page: 240
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    그림의 다섯 영역 A~E 를 서로 다른 5가지 색으로, 인접한 영역은 다른 색이 되도록(같은 색 중복 사용 가능) 칠하는 방법의 수.
  category: "인접이 많은 영역부터 순서 정하기 → 남은 색 수의 곱"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "색칠하는 방법의 수 — 인접 조건과 곱의 법칙"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    가장 많은 영역과 맞닿은 영역을 먼저 칠하고 나머지를 인접 순서대로 칠하면 각 단계의 선택지가 5, 4, 3, 3, 3 으로 확정돼 곱의 법칙 한 줄. 떨어져 있는 영역끼리는 같은 색을 써도 된다는 점(T-범위)과 칠하는 순서를 잘못 잡으면 선택지가 고정되지 않는 점(T-표기)이 함정. 분기가 없고 통찰 없음·M_total 7 → 필수 예제 ★2 유지.
  tier: star_2
  mechanism_primary: "인접 수가 많은 영역부터 칠하는 순서 결정 → 각 단계의 남은 색 수를 곱하기"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$540$'
  answer_source: "본문 풀이"
  figure: crop:fig-240-e6.png
  latex: latex-bank/gn-cm1/items/240-e6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "색의 개수(5)를 바꿀 수 있다(영역 라벨 A~E 와 인접 구조는 그림 고정). 제약: 색 수가 인접 영역 수보다 작아지면 칠할 수 없는 단계가 생기므로 색 수 하한을 확인해야 한다."
    creative: "(1) 색을 4가지로 줄이면 240-522 골조(★2) (2) 「5가지 색을 모두 사용」 조건을 넣으면 여사건·중복 제거가 필요해 ★4 (3) 마주 보는 영역이 인접하지 않도록 구조를 바꾸면 동색 분기가 생겨 ★3(I-MI d2)."
```

```yaml
- id: GN-CM1-240-521
  page: 240
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    그림의 네 영역 A~D 를 서로 다른 4가지 색으로, 인접한 영역은 다른 색이 되도록 칠하는 방법의 수.
  category: "인접이 많은 영역부터 순서 정하기 → 남은 색 수의 곱"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "색칠하는 방법의 수 — 인접 조건과 곱의 법칙"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    240-e6 의 축소판으로 영역 4개·색 4가지. 인접 관계를 읽어 칠하는 순서를 정하면 각 단계 선택지가 바로 확정돼 분기가 없다. 통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "인접 수가 많은 영역부터 칠하기 → 각 단계 남은 색 수의 곱"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$48$'
  answer_source: "답지"
  figure: crop:fig-240-521.png
  latex: latex-bank/gn-cm1/items/240-521.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "색의 개수(4)를 바꿀 수 있다(영역 구조는 그림 고정). 제약: 서로 모두 인접한 영역의 개수보다 색이 적으면 답이 0 이 되므로 하한 확인."
    creative: "(1) 영역을 하나 더 붙이면 240-522 골조 (2) 「A 와 D 는 같은 색으로」 조건을 추가하면 묶기 변환 ★3(I-EQV d1) (3) 색을 5가지로 늘리면 계산만 커짐(★2)."
```

```yaml
- id: GN-CM1-240-522
  page: 240
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    그림의 다섯 영역 A~E 를 서로 다른 4가지 색으로, 인접한 영역은 다른 색이 되도록 칠하는 방법의 수.
  category: "인접이 많은 영역부터 순서 정하기 → 남은 색 수의 곱"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "색칠하는 방법의 수 — 인접 조건과 곱의 법칙"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    영역 5개에 색이 4가지라 각 단계의 남은 색 수가 4, 3, 2, 2, 2 로 줄지만 분기는 생기지 않는다. 색이 부족해 보이는 단계에서 「인접하지 않은 영역과는 같은 색 가능」을 확인하는 것이 함정. 통찰 없음·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "인접 수가 많은 영역부터 칠하기 → 각 단계 남은 색 수의 곱"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$96$'
  answer_source: "답지"
  figure: crop:fig-240-522.png
  latex: latex-bank/gn-cm1/items/240-522.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "색의 개수(4)를 바꿀 수 있다(영역 구조 고정). 제약: 한 영역에 인접한 영역이 3개이면 색이 4가지 이상이어야 답이 0 이 되지 않는다."
    creative: "(1) 색을 3가지로 줄이면 칠하지 못하는 구조인지 먼저 판정해야 해 ★3 (2) 「4가지 색을 모두 사용」을 넣으면 여사건 ★4 (3) 인접 구조를 고리 모양으로 바꾸면 동색 분기 ★3(I-MI d2)."
```

```yaml
- id: GN-CM1-240-523
  page: 240
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    그림처럼 네 영역 A~D 로 나뉜 도시를 서로 다른 5가지 색으로, 인접한 영역은 다른 색이 되도록 칠하는 방법의 수(한 점만 공유하는 두 영역은 인접하지 않은 것으로 본다).
  category: "한 점만 공유하는 두 영역의 동색 여부로 분기 → 각 경우 곱 → 합"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "한 점만 공유하는 두 영역은 같은 색이어도 되므로, 그 두 영역이 같은 색인 경우와 다른 색인 경우에 남은 영역의 선택지가 달라져 두 경우를 모두 따져야 함"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "색칠하는 방법의 수 — 비인접 영역의 동색 분기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    네 영역이 고리처럼 이어져 있어 마주 보는 두 영역만 한 점을 공유한다. 이 두 영역을 같은 색으로 칠할 수 있으므로 동색·이색 두 경우로 나눈 뒤 각각 곱하고 더해야 한다(MI d2). 같은 구역의 240-521·522 와 달리 분기가 필수라 단계가 7개 이상. 통찰 1·M_total 8 → 확인체크 출발 ★2 에서 +1.
  tier: star_3
  mechanism_primary: "한 점만 공유하는 두 영역의 동색·이색으로 분기 → 각 경우 남은 색 수의 곱 → 합"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$260$'
  answer_source: "답지"
  figure: crop:fig-240-523.png
  latex: latex-bank/gn-cm1/items/240-523.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "색의 개수(5)를 바꿀 수 있다(영역 구조와 「한 점 공유」 단서는 고정). 제약: 색이 3가지 미만이면 고리 구조를 칠할 수 없고, 색 수가 바뀌어도 동색·이색 분기 골조는 그대로다."
    creative: "(1) 색을 4가지로 줄이면 243-535 와 같은 문항이 된다(★3) (2) 「한 점만 공유해도 인접으로 본다」로 단서를 뒤집으면 분기가 사라져 ★2 (3) 영역을 5개 고리로 늘리면 분기가 두 층이 돼 ★4."
```

```yaml
- id: GN-CM1-241-e7
  page: 241
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["발전"]
  category_type: "발전 예제"
  summary: |
    100원 1개, 50원 2개, 10원 3개의 일부 또는 전부로 지불할 때 ⑴ 지불하는 방법의 수 ⑵ 지불할 수 있는 금액의 수(0원 제외).
  category: "방법의 수는 (개수+1) 의 곱 −1 → 금액의 수는 큰 단위를 작은 단위로 환산해 중복 제거"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "50원 2개가 100원 1개와 같은 금액을 만들어 방법이 달라도 금액이 겹치므로, 100원짜리를 50원짜리로 환산해 단위를 통일한 뒤 같은 곱셈을 다시 적용하는 동치 변환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "지불 방법의 수와 지불 금액의 수(단위 환산으로 중복 제거)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑴ 은 동전 종류마다 쓰는 개수를 0~n 중 고르는 곱셈에서 0원을 빼면 끝난다. ⑵ 는 같은 골조로 세면 중복 금액이 생기므로 100원을 50원 2개로 바꿔 단위를 하나로 통일한 뒤 다시 세는 것이 핵심(EQV d2). 두 물음의 답이 다른 이유를 설명하는 것이 이 유형의 변별 지점이라 발전 예제 출발 ★3 유지.
  tier: star_3
  mechanism_primary: "방법의 수 = (각 동전 개수+1) 곱 −1 → 금액의 수 = 큰 단위를 작은 단위로 환산해 개수를 합친 뒤 같은 곱 −1"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $23$ ⑵ $19$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/241-e7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 동전의 액면가와 개수를 바꿀 수 있다. 제약: 작은 단위 동전의 개수가 큰 단위를 만들 만큼 있어야(예: 50원 2개 = 100원) 금액 중복이 생겨 ⑴ 과 ⑵ 의 답이 갈린다. 개수가 부족하면 두 답이 같아져 문항의 의도가 사라진다."
    creative: "(1) 두 답의 차나 합을 묻기(242-530·241-525 골조 ★2~3) (2) 「지불할 수 없는 금액의 개수」로 뒤집으면 여사건 ★4 (3) 동전 종류를 4가지로 늘리고 환산이 두 단계가 되게 하면 ★4."
```

```yaml
- id: GN-CM1-241-524
  page: 241
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    100원 2개, 50원 4개, 10원 3개의 일부 또는 전부로 지불할 때 ⑴ 지불하는 방법의 수 ⑵ 지불할 수 있는 금액의 수(0원 제외).
  category: "방법의 수는 (개수+1) 의 곱 −1 → 금액의 수는 단위 환산 후 다시 곱"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "100원 2개를 50원 4개로 환산해 50원 단위로 통일한 뒤 금액의 수를 세는 동치 변환(방법이 달라도 금액이 겹치는 중복 제거)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "지불 방법의 수와 지불 금액의 수(단위 환산으로 중복 제거)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    241-e7 과 같은 골조이고 동전 개수만 커졌다. ⑵ 에서 100원 2개를 50원 4개로 바꿔 50원 (4+4)개로 통일한 뒤 세는 것이 핵심. 발전 예제의 확인체크라 출발 ★3 이고 통찰 1·M_total 7 이라 조정 없음.
  tier: star_3
  mechanism_primary: "방법의 수 = (개수+1) 곱 −1 → 금액의 수 = 100원을 50원으로 환산해 합친 개수로 같은 곱 −1"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $59$ ⑵ $35$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/241-524.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 동전의 개수를 바꿀 수 있다. 제약: 50원 개수가 2개 이상이어야 100원과 금액이 겹쳐 환산이 의미를 갖고, 10원은 다른 단위로 환산되지 않아야 골조가 2단계로 유지된다."
    creative: "(1) a+b·a−b 를 묻기(241-525·242-530 골조) (2) 500원을 추가해 환산이 두 번 필요하게 하면 ★4 (3) 「지불 금액이 1000원 이상인 방법의 수」로 바꾸면 범위 조건 분기 ★4."
```

```yaml
- id: GN-CM1-241-525
  page: 241
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    500원 1개, 100원 7개, 10원 4개의 일부 또는 전부로 지불하는 방법의 수 a 와 지불할 수 있는 금액의 수 b 에 대하여 a+b 의 값(0원 제외).
  category: "방법의 수와 금액의 수를 각각 구해(환산으로 중복 제거) 더하기"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "500원 1개를 100원 5개로 환산해 100원 단위로 통일한 뒤 금액의 수를 세는 동치 변환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "지불 방법의 수와 지불 금액의 수(단위 환산으로 중복 제거)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    a 는 (개수+1) 의 곱에서 0원을 빼고, b 는 500원을 100원 5개로 환산해 100원 (7+5)개로 통일한 뒤 같은 방식으로 센다. 두 값을 각각 구해 더하는 형태라 중복 제거를 놓치면 a 와 b 가 같아지는 것이 함정. 발전 예제의 확인체크 출발 ★3 유지.
  tier: star_3
  mechanism_primary: "a = (개수+1) 곱 −1 → 500원을 100원으로 환산해 b 계산 → a+b"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$143$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/241-525.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "액면가와 개수를 바꿀 수 있다. 제약: 작은 단위 동전이 큰 단위를 만들 만큼 충분해야(100원 5개 이상) 환산이 성립하고, 10원처럼 환산되지 않는 단위는 그대로 둔다."
    creative: "(1) a−b 를 묻기(242-530) (2) 동전 종류를 넷으로 늘려 환산을 두 단계로 만들면 ★4 (3) 「b 가 주어졌을 때 10원 동전의 개수」로 뒤집으면 역추적 ★4(I-BW d2)."
```

### 연습문제 STEP 1

```yaml
- id: GN-CM1-242-526
  page: 242
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    2x + 3y ≤ 9 를 만족시키는 음이 아닌 정수 x, y 의 순서쌍의 개수.
  category: "계수가 큰 변수 분기 → 각 분기의 다른 변수 개수 → 합의 법칙"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부등식을 만족시키는 음이 아닌 정수 순서쌍의 개수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y 를 0, 1, 2 로 고정하면 2x 의 상한이 정해지고 각 분기의 x 개수를 세어 더한다. 0 을 포함한다는 것(T-범위)과 부등식의 상한 경계(T-경계)가 함정. 통찰 없음·M_total 6 → STEP 1 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "계수가 큰 y 고정 → 각 y 마다 x 의 개수 → 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$12$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/242-526.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수(2,3)와 우변(9)을 바꿀 수 있다. 제약: 계수가 큰 변수의 분기가 3~5개가 되도록 우변을 정하고, 음이 아닌 정수인지 자연수인지를 발문에 명시(하한이 답을 바꾼다)."
    creative: "(1) 자연수 조건으로 바꾸면 236-511 골조 (2) 「2x+3y=9」 등식으로 바꾸면 분기가 줄어 ★2 (3) 변수 3개로 늘리면 이중 분기 ★3."
```

```yaml
- id: GN-CM1-242-527
  page: 242
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    다항식 (a+b+c)²(x+y) 를 전개했을 때 항의 개수.
  category: "제곱 전개의 서로 다른 항 수 → 곱의 법칙"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "다항식 전개식의 항의 개수(동류항 처리)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (a+b+c)² 은 3×3=9 가 아니라 동류항(ab 와 ba)이 합쳐져 항이 6개이고, 여기에 (x+y) 의 2를 곱한다. 곱의 법칙을 기계적으로 쓰면 틀리는 동류항 함정(T-표기)이 이 문항의 전부. 통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "제곱 전개의 서로 다른 항 수(동류항 합침) → (x+y) 의 항 수와 곱하기"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$12$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/242-527.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "괄호 안 문자 수와 지수를 바꿀 수 있다. 제약: 지수가 붙은 괄호는 동류항이 생기므로 단순 곱이 성립하지 않는다는 점이 유지되어야 하고, 두 괄호의 문자 집합은 겹치지 않게 둔다."
    creative: "(1) 세제곱으로 올리면 항 수 계산이 조합 논리로 넘어가 ★3 (2) 두 괄호에 같은 문자를 넣어 동류항이 한 번 더 생기게 하면 ★3 (3) 237-514 처럼 뺄셈으로 이어 붙이면 합의 법칙 결합(★1~2)."
```

```yaml
- id: GN-CM1-242-528
  page: 242
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    54의 n제곱의 양의 약수의 개수가 40일 때 자연수 n 의 값.
  category: "소인수분해 → 약수의 개수를 n 의 식으로 → 방정식의 자연수해"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "약수의 개수가 40이라는 결과 조건에서 지수를 n 의 식으로 세우고 거꾸로 n 을 찾는 역방향 처리"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "약수의 개수 조건에서 지수(미지수) 역추적"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    54 = 2 × 3³ 이므로 54의 n제곱은 2의 n제곱 × 3의 3n제곱이고 약수의 개수는 (n+1)(3n+1). 이를 40과 놓고 자연수해를 찾는다. 역방향이지만 식이 한 줄로 나와 depth 1 로 보고, 통찰 1·M_total 7 이라 STEP 1 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "54 소인수분해 → 약수의 개수 (n+1)(3n+1) → = 40 의 자연수해"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/242-528.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(54)과 약수의 개수(40)를 바꿀 수 있다. 제약: 밑의 소인수 지수 구조가 (n+1)(kn+1) 꼴을 만들고, 목표 개수는 자연수 n 이 유일하게 나오도록 골라야 한다."
    creative: "(1) 「약수의 개수가 40 이상이 되는 최소의 n」으로 바꾸면 부등식 역추적 ★3 (2) 밑을 2의 제곱수 꼴로 바꿔 해가 두 개 나오게 하면 기각 검증 ★3(I-VF d2) (3) 「약수의 총합」 조건으로 바꾸면 ★4."
```

```yaml
- id: GN-CM1-242-529
  page: 242
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    그림의 도로망에서 같은 지점을 한 번만 지나며 강남에서 청량리로 가는 경우의 수.
  category: "경유 지점 분기 → 구간 경로 수의 곱 → 합의 법칙"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "도로망에서의 경우의 수 — 경유 지점 분기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    239-e5·519 와 같은 골조로, 어느 중간 지점을 어떤 순서로 지나는지 분기한 뒤 구간별 길 수를 곱해 더한다. 분기 나열이 길어 M_total 8 이지만 새 착안이 없어 STEP 1 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "경유 지점과 순서로 분기 → 각 분기 구간 길 수의 곱 → 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$54$'
  answer_source: "답지"
  figure: crop:fig-242-529.png
  latex: latex-bank/gn-cm1/items/242-529.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 구간의 길 수를 바꿀 수 있다(그림의 지점 이름과 연결 구조는 고정). 제약: 「같은 지점은 한 번만」 조건 때문에 되돌아가는 분기를 세지 않아야 한다."
    creative: "(1) 특정 지점을 반드시 지나게 하면 분기 축소 ★2 (2) 왕복으로 바꾸면 239-520 골조 ★3 (3) 「도로 한 개가 공사로 막혔을 때 경우의 수가 k 가 되는 도로」를 묻는 역추적 ★4."
```

```yaml
- id: GN-CM1-242-530
  page: 242
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    10000원 2장, 5000원 3장, 1000원 4장의 일부 또는 전부로 지불하는 방법의 수 a 와 지불할 수 있는 금액의 수 b 에 대하여 a−b 의 값(0원 제외).
  category: "방법의 수와 금액의 수를 각각 구해(환산으로 중복 제거) 빼기"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "10000원 2장을 5000원 4장으로 환산해 5000원 단위로 통일한 뒤 금액의 수를 세는 동치 변환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "지불 방법의 수와 지불 금액의 수(단위 환산으로 중복 제거)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a 는 (장수+1) 의 곱에서 0원을 빼고, b 는 10000원을 5000원 2장으로 환산해 5000원 (3+4)장으로 통일한 뒤 같은 곱으로 센다. 241-e7 계열과 골조가 같지만 벤더 구역이 STEP 1 이라 출발 ★2 이고 통찰 1·M_total 7 로 조정 없음. [분류 이슈] 같은 골조가 발전 예제에서는 ★3, 여기서는 ★2 로 갈린다.
  tier: star_2
  mechanism_primary: "a = (장수+1) 곱 −1 → 10000원을 5000원으로 환산해 b 계산 → a−b"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$20$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/242-530.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지폐의 액면가와 장수를 바꿀 수 있다. 제약: 작은 단위가 큰 단위를 만들 만큼 있어야(5000원 2장 = 10000원) a 와 b 가 달라진다. 1000원은 환산되지 않는 단위로 남겨 둔다."
    creative: "(1) a+b 를 묻기(241-525 골조) (2) 지폐 종류를 넷으로 늘려 환산이 두 단계가 되면 ★4 (3) 「a−b 가 20이 되도록 1000원 장수를 정하라」로 뒤집으면 역추적 ★4(I-BW d2)."
```

### 연습문제 STEP 2

```yaml
- id: GN-CM1-242-531
  page: 242
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    1부터 100까지의 자연수 중에서 3과 5로 모두 나누어떨어지지 않는 자연수의 개수.
  category: "여사건 → 3의 배수와 5의 배수의 합집합(포함배제)을 전체에서 빼기"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'3과 5로 모두 나누어떨어지지 않는다' 를 '3의 배수도 5의 배수도 아니다' 로 읽고 전체에서 합집합을 빼는 여사건으로 바꾸는 동치 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "범위 안에서 두 배수 조건의 여사건 개수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    직접 세면 조건이 부정형이라 나열이 불가능하므로 100에서 (3의 배수 + 5의 배수 − 15의 배수)를 뺀다. 조건 문장을 여집합으로 읽는 것(T-표기)과 양끝 처리(T-범위)가 함정이고 계산은 나눗셈 세 번. 통찰 1·M_total 7 이라 STEP 2 출발 ★3 유지하지만 실질 노동량은 235-509(★2)의 여사건 버전에 가깝다.
  tier: star_3
  mechanism_primary: "부정 조건을 여사건으로 → 전체 100 − (3의 배수 + 5의 배수 − 15의 배수)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$53$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/242-531.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상한(100)과 두 수(3·5)를 바꿀 수 있다. 제약: 두 수의 최소공배수가 상한 안에 있어야 포함배제 항이 살아 있고, 두 수가 서로소가 아니면 공배수 계산을 최소공배수로 해야 한다."
    creative: "(1) 「3으로는 나누어떨어지지만 5로는 나누어떨어지지 않는」으로 바꾸면 차집합 ★3 (2) 세 수로 늘리면 포함배제 3항 ★4 (3) 「개수가 53이 되는 상한」으로 뒤집으면 역추적 ★4."
```

```yaml
- id: GN-CM1-242-532
  page: 242
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    서로 다른 두 주사위의 눈의 수를 a, b 라 할 때 이차방정식 x²+2ax+b=0 이 실근을 갖도록 하는 순서쌍 (a,b) 의 개수.
  category: "판별식으로 실근 조건을 부등식으로 → a 별로 b 의 개수 세기 → 합"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "이차방정식 단원의 판별식을 경우의 수 문항에 끌어와 '실근을 갖는다' 를 b 에 대한 부등식으로 바꿈"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "이차방정식의 근의 조건을 만족시키는 순서쌍의 개수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    실근 조건은 판별식이 0 이상, 즉 b 가 a 의 제곱 이하. a 를 1부터 6까지 고정하면 b 의 개수는 a 의 제곱과 6 중 작은 값이 되고 이를 더한다. 중근을 포함하는 등호(T-경계)와 눈의 수 범위 1~6(T-범위)이 함정. 판별식 적용은 표준 도구라 depth 1 로 보고 STEP 2 출발 ★3 유지.
  tier: star_3
  mechanism_primary: "판별식 ≥ 0 → b ≤ a² → a 별로 1~6 안의 b 개수 → 합"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$29$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/242-532.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차방정식의 계수 배치(2a·b)와 주사위 면 수를 바꿀 수 있다. 제약: 판별식이 a, b 에 대해 단순한 부등식으로 정리되어야 하고, 눈의 수 상한 때문에 개수가 잘리는 구간이 생기도록 계수를 고르면 변별이 살아난다."
    creative: "(1) 「허근을 갖도록」으로 뒤집으면 여사건 ★3 (2) 「서로 다른 두 실근」으로 바꾸면 등호 제외 경계 함정 강화 ★3 (3) 「두 근이 모두 양수」로 바꾸면 근과 계수의 관계까지 결합 ★4(I-XU d2)."
```

```yaml
- id: GN-CM1-243-533
  page: 243
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    그림의 도로망에 A 지점과 C 지점을 잇는 도로를 추가해 A 에서 D 로 가는 경우의 수가 53이 되게 할 때 추가해야 하는 도로의 개수(지나간 지점은 다시 지나지 않고 도로끼리 만나지 않는다).
  category: "추가 도로 수를 미지수로 두고 경우의 수를 식으로 → 방정식 풀기"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'경우의 수가 53이 되도록' 이라는 결과 조건에서 출발해, 추가 도로 수를 미지수로 둔 경우의 수 식을 먼저 세운 뒤 거꾸로 미지수를 확정"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "도로망 경우의 수 역추적(추가 도로 개수 결정)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    추가 도로 개수를 n 으로 두면 A→C 를 거치는 경로가 n 에 비례해 늘어나므로 전체 경우의 수가 n 의 일차식이 된다. 원래 도로망의 분기를 모두 세고(단계 7개 이상) 그 식을 53과 놓고 푸는 2단 구조라 M_total 9. 역방향 사고(BW d2)와 노동량이 겹쳐 STEP 2 출발 ★3 에서 +1.
  tier: star_4
  mechanism_primary: "추가 도로 n 개일 때의 경로 수를 n 의 일차식으로 표현 → 53 과 놓고 n 확정"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$4$'
  answer_source: "답지"
  figure: crop:fig-243-533.png
  latex: latex-bank/gn-cm1/items/243-533.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "목표 경우의 수(53)와 기존 구간 도로 수를 바꿀 수 있다(그림의 지점 라벨·구조 고정). 제약: 목표값에서 기존 경로 수를 뺀 값이 추가 도로 한 개당 늘어나는 경로 수로 나누어떨어져야 자연수 해가 나온다."
    creative: "(1) 추가 구간을 B–D 로 바꾸면 계수가 달라져 같은 골조 ★4 (2) 「도로를 하나 없앨 때 줄어드는 경우의 수」로 바꾸면 ★3 (3) 추가 도로를 두 구간에 나눠 넣으면 미지수 2개의 정수해 ★5 후보(I-BW+I-MI)."
```

```yaml
- id: GN-CM1-243-534
  page: 243
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 STEP 2"
  summary: |
    가로 3칸·세로 2칸으로 놓인 정사각형 6개(위쪽 1·2·3, 아래쪽 4·5·6)에 4가지 색의 일부 또는 전부로 칠하되 ㈎ 1번과 6번은 같은 색 ㈏ 변을 공유하는 두 칸은 다른 색일 때의 경우의 수. 5지선다.
  category: "동색 조건으로 두 칸을 한 색으로 묶기 → 인접 순서대로 칠하며 동색 여부 분기 → 합"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "조건 ㈎ 를 '1번과 6번을 하나의 색 변수로 묶는다' 로 옮겨, 대각으로 떨어진 두 칸을 같은 색으로 고정한 채 나머지를 칠하는 문제로 바꿈"
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "변을 공유하지 않는 칸끼리는 같은 색을 써도 되므로, 3번·4번이 1번(=6번)의 색과 같은지 다른지에 따라 남은 칸의 선택지가 달라져 여러 경우를 모두 따져야 함"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "격자 색칠 — 떨어진 두 칸 동색 조건과 분기"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    1번과 6번은 변을 공유하지 않으므로 ㈎ 가 모순 없이 성립하고, 두 칸을 한 색으로 묶은 뒤 1→2→3, 4→5 순으로 칠한다. 중간에 비인접 칸의 동색 여부로 경우가 갈려 분기를 빠짐없이 세는 것이 변별 지점. 통찰 2개·M_total 8 로 STEP 2 출발 ★3 에서 +1(기출 태그도 +0~1 구간). [분류 이슈] ★4 인데 통찰이 EQV·MI 뿐이라 v3.8 §2.13 저노출 유형이 없다.
  tier: star_4
  mechanism_primary: "1번=6번을 한 색으로 묶기 → 인접 순서대로 칠하며 비인접 칸의 동색 여부로 분기 → 각 분기 곱 → 합"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '③'
  answer_source: "답지"
  figure: crop:fig-243-534.png
  latex: latex-bank/gn-cm1/items/243-534.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "색의 개수(4)와 동색으로 묶을 두 칸의 번호를 바꿀 수 있다(2×3 격자 구조와 번호 배치는 그림 고정). 제약: 묶는 두 칸은 변을 공유하지 않아야 조건이 모순되지 않고, 색 수가 3 미만이면 칠할 수 없는 배치가 생긴다."
    creative: "(1) 조건 ㈎ 를 「1번과 6번은 다른 색」으로 뒤집으면 여사건 ★4 (2) 「4가지 색을 모두 사용」을 넣으면 중복 제거가 겹쳐 ★5 후보 (3) 격자를 3×2 에서 2×2 로 줄이면 243-535 계열의 고리 분기 ★3."
```

```yaml
- id: GN-CM1-243-535
  page: 243
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    그림의 네 영역 A~D 를 서로 다른 4가지 색으로, 인접한 영역은 다른 색이 되도록 칠하는 방법의 수(한 점만 공유하는 두 영역은 인접하지 않은 것으로 본다).
  category: "한 점만 공유하는 두 영역의 동색 여부로 분기 → 각 경우 곱 → 합"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "한 점만 공유하는 두 영역은 같은 색이어도 되므로 동색·이색 두 경우로 나눠 각각의 선택지를 세야 함"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "색칠하는 방법의 수 — 비인접 영역의 동색 분기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    네 영역이 고리처럼 이어져 마주 보는 두 영역만 한 점을 공유하므로 그 두 영역의 동색·이색으로 나눠 센다. 240-523 과 골조·M·통찰이 같고 색의 개수만 5에서 4로 줄었다. [분류 이슈] 산식대로면 STEP 2 출발 ★3 에 통찰 1·M_total 8 로 +1 해 ★4 이지만, 같은 골조인 240-523(★3)과 벌어지지 않도록 ★3 으로 두고 기록만 한다.
  tier: star_3
  mechanism_primary: "한 점만 공유하는 두 영역의 동색·이색으로 분기 → 각 경우 남은 색 수의 곱 → 합"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$84$'
  answer_source: "답지"
  figure: crop:fig-243-535.png
  latex: latex-bank/gn-cm1/items/243-535.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "색의 개수(4)를 바꿀 수 있다(영역 구조와 「한 점 공유」 단서 고정). 제약: 색이 3가지 미만이면 고리 구조를 칠할 수 없고, 색 수가 커져도 동색·이색 분기 골조는 유지된다."
    creative: "(1) 색을 5가지로 늘리면 240-523 과 같은 문항(★3) (2) 「한 점만 공유해도 인접으로 본다」로 뒤집으면 분기 소멸 ★2 (3) 영역을 5개 고리로 늘리면 분기가 두 층이 돼 ★4."
```

### 연습문제 실력 UP

```yaml
- id: GN-CM1-243-536
  page: 243
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    그림의 정육면체에서 꼭짓점 A 를 출발해 모서리를 따라 움직여 대각선 반대쪽 꼭짓점 G 에 도착하는 경우의 수(지나간 꼭짓점은 다시 지나지 않는다).
  category: "첫 모서리의 대칭성으로 한 방향만 세기 → 경로 길이별 분기 → 3배"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "A 에서 나가는 세 모서리가 정육면체의 대칭으로 모두 같은 상황을 만들므로 한 방향의 경로만 세고 3배 하면 된다는 대칭 활용"
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "꼭짓점 재방문 금지 아래 A 에서 G 까지의 경로 길이가 3·4·5 모서리로 갈라져, 길이별로 가능한 경로를 모두 따져야 함"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "정육면체 모서리 경로의 수(대칭 활용·재방문 금지)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    A 에서 나가는 세 모서리는 대칭이라 한 방향만 끝까지 세고 3을 곱하면 된다(SYM d2). 각 방향 안에서도 꼭짓점을 재방문하지 않는 경로가 모서리 3개·4개·5개짜리로 갈라져 분기를 빠짐없이 세야 한다(MI d2). 통찰 2개·M_total 8 로 실력 UP 출발 ★4 유지(통찰 3개 미만이라 ★5 조건은 미달).
  tier: star_4
  mechanism_primary: "A 의 세 출발 모서리 대칭 → 한 방향의 경로를 길이별로 분기해 세기 → 3배"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$18$'
  answer_source: "답지"
  figure: crop:fig-243-536.png
  latex: latex-bank/gn-cm1/items/243-536.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "도착 꼭짓점을 A 와 마주 보는 G 대신 이웃 꼭짓점이나 면 대각 꼭짓점으로 바꿀 수 있다(정육면체 라벨 고정). 제약: 도착점이 바뀌면 대칭의 배수(3배)가 달라지므로 출발 모서리의 대칭 개수를 다시 확인해야 한다."
    creative: "(1) 「모서리를 4개 이하로 지나」 같은 길이 제한을 붙이면 분기가 잘려 ★4 (2) 정팔면체·직육면체로 바꾸면 대칭 구조가 달라져 ★4~5 (3) 「지나간 모서리는 다시 지나지 않는다」로 조건을 바꾸면 꼭짓점 재방문이 허용돼 경우가 크게 늘고 ★5 후보."
```

## 표본 판정 요약 (41문)

- ★ 분포: ★1 7 · ★2 21 · ★3 10 · ★4 3 · ★5 0
- 통찰형 18 · 절차형 23 · premium 0
- 통찰 라벨 20개의 유형 분포: I-EQV 10(서로소·지수 하한·단위 환산·동색 묶기) · I-MI 6(경유·동색·경로 길이 분기) · I-BW 2(약수 개수 역추적 · 추가 도로 수) · I-XU 1(판별식) · I-SYM 1(정육면체 대칭). I-SC·I-VF·I-PD·I-CON·I-RT 는 이 범위에 없다.
- M_total: 4~5 가 7문 · 6~7 이 24문 · 8 이 9문 · 9 가 1문. Mₖ 는 대부분 1~2 로, 이 단원의 변별은 계산량이 아니라 **분기를 빠짐없이 나누는가**와 **중복을 제거하는가**에 있다.
- 함정: Mₜ 가 2 인 문항이 대부분이고 카테고리는 T-범위(자연수·0 포함 여부·눈의 수 상한)와 T-경계(부등식 상한·중근 등호), T-표기(공배수 중복·동류항·서로소 해석)에 몰려 있다. T-부호·T-단위는 거의 쓰이지 않는다.
- type_hint 상위 5: 「도로망에서의 경우의 수 — 경유 지점 분기」 4(239-e5 · 239-519 · 242-529 + 왕복 239-520) · 「지불 방법의 수와 지불 금액의 수」 4(241-e7 · 241-524 · 241-525 · 242-530) · 「색칠하는 방법의 수 — 인접 조건과 곱의 법칙」 3(240-e6 · 240-521 · 240-522) · 「정수(자연수) 해의 순서쌍 개수」 4(236-e2 · 236-510 · 236-511 · 242-526) · 「약수의 개수」계열 4(238-e4 · 238-516 · 238-517 · 238-518)
- 대상층: 하위권 7 · 중하위권 16 · 중위권 10 · 중상위권 7 · 상위권 1
- 그림: 13문(234-506 · 239-e5 · 239-519 · 239-520 · 240-e6 · 240-521 · 240-522 · 240-523 · 242-529 · 243-533 · 243-534 · 243-535 · 243-536) — 도로망 6 · 색칠 5 · 격자 1 · 정육면체 1
- 객관식은 243-534 한 문항뿐이고 나머지 40문은 답을 직접 구하는 형태다.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CM1-243-535 | 산식대로면 STEP 2 출발 ★3 + 통찰 1·M_total 8 → ★4 이나, 골조·M·통찰이 같은 240-523(확인체크 ★3)과 벌어지지 않도록 ★3 유지 | ★3 / ★4 |
| GN-CM1-242-530 | 241-e7·524·525 와 골조가 같은데 벤더 구역이 STEP 1 이라 출발점이 한 단 낮아 ★2. 같은 유형이 구역에 따라 ★2~3 으로 갈림 | ★2 / ★3 |
| GN-CM1-243-534 | ★4 인데 통찰이 I-EQV·I-MI 뿐이라 v3.8 §2.13 저노출 유형(SC/VF/SYM/XU/RT/PD/BW)이 없음 → YELLOW. 교육청 기출·분기량을 근거로 ★4 유지 | ★3 / ★4 |
| GN-CM1-236-512 | 확인체크(★2 출발)인데 분기 4개·M_total 8 로 노동량이 연습문제 STEP 2 급 | ★2 / ★3 |
| GN-CM1-242-531 | STEP 2 출발 ★3 을 유지했으나 실질 골조는 235-509(★2)의 여사건 버전이라 한 단 높게 보일 수 있음 | ★2 / ★3 |

참고(이슈까지는 아닌 1단 조정): 237-e3(필수 ★2 → M_total 5·통찰 0 으로 −1 해 ★1) · 237-514 · 237-515(확인체크 ★2 → −1 해 ★1) 는 −1 규칙을 그대로 적용한 결과다.

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위의 type_hint 는 다섯 갈래로 수렴한다 — ① 합의 법칙·배수 세기(여사건 포함) ② 정수해 순서쌍 ③ 곱의 법칙(자리·전개식·약수의 개수) ④ 도로망 경로 ⑤ 색칠·지불.
- ③ 안의 「약수의 개수」는 **따로 세워야 한다**. 238-e4·516 은 공식 적용(base ★2)이지만 238-517·518 은 「지수의 하한·고정」이라는 동치 변환이 붙고 242-528 은 그것을 역추적한다. 같은 이름으로 묶으면 base ★ 가 2와 3 사이에서 흔들린다.
- ④ 도로망은 「경유 지점 분기」(239-e5 ⑴ · 239-519 · 242-529, base ★2)와 「제약이 붙은 경로」(239-520 왕복 · 239-e5 ⑵ 두 사람 · 243-533 역추적, base ★3~4)로 **갈라야 한다**. 앞쪽은 분기 나열의 반복이고 뒤쪽은 이미 쓴 자원을 빼면서 세는 다른 사고다.
- ⑤ 색칠은 「인접 순서대로 곱하기」(240-e6·521·522, base ★2)와 「비인접 영역의 동색 분기」(240-523·243-535·243-534, base ★3)로 **갈라야 한다**. 「한 점만 공유」 단서 한 줄이 분기의 유무를 결정하므로 카탈로그에서는 이 단서를 유형 식별자로 삼는 것이 좋다.
- ⑤ 지불(241-e7·524·525·242-530)은 네 문항이 완전히 같은 골조라 **하나로 통합**하고, 묻는 형태(⑴⑵ 분리 · a+b · a−b)는 출제 형식 차이로 두면 된다. 다만 벤더 구역이 발전 예제와 STEP 1 로 갈려 라벨 ★ 가 ★2~3 으로 흔들리므로 base ★3 으로 고정하는 편이 학생 체감과 맞는다.
- 이 단원에는 I-SC·I-VF 가 한 문항도 없다. ★5 슬롯을 만들려면 「여러 갈래 중 효율적인 세기 방법 선택」이나 「후보를 구한 뒤 조건 위배로 일부 기각」이 들어간 문항을 새로 출제해야 한다(variation_notes 의 creative 항목에 후보를 남겨 두었다).
