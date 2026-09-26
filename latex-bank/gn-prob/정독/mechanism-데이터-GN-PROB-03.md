---
name: mechanism-데이터-GN-PROB-03
description: 개념원리 확률과 통계 03 중복조합(1/1 · 34~42쪽) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 확률과 통계 · 전사본 latex-bank/gn-prob
  section: 03 중복조합
  unit_code: GN-PROB-03
  part: "1/1"
  extract_range: "34~42쪽 · 34-53~42-82"
  total_problems: 36
  unit_total: 36
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). depth_score 는 라벨링된 통찰의 effective_depth 평균. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-prob/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-prob/items/<id>.tex
  image_source: latex-bank/gn-prob/figures/ (이 범위에는 그림 문항 없음)
---

# 개념원리 확률과 통계 · 03 중복조합 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 확률과 통계 03단원 「중복조합」 34~42쪽의 36문항 전수를 다룬다. 구역은 개념원리 익히기 4문 · 필수·발전 예제(예제 + 딸린 확인체크) 21문 · 연습문제 STEP 1 4문 · STEP 2 5문 · 실력 UP 2문이다. 벤더 난이도 신호는 구역과 태그에 들어 있다 — 익히기는 개념 확인(★1 출발), 「필수」 예제와 그에 딸린 「확인체크」는 ★2 출발, 「발전」 예제와 그 확인체크는 ★3 출발, 연습문제는 STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4 출발이며 평가원 기출 태그는 통찰 유무로 +0~1 한다. 출발점에서 M_total 과 통찰 수로 ±1 조정했다.

통찰 라벨링 기준을 한 가지 통일했다. **이 단원의 표준 치환(각 1개 이상 → 미리 한 개씩 배분하고 나머지를 중복조합)은 유형의 표준 절차로 보고 통찰로 세지 않는다.** 표현 자체가 바뀌는 전환만 통찰로 라벨링했다 — 전개식의 항 ↔ 중복조합, 함수의 대소 조건 ↔ 중복조합, 부등식 ↔ 여유변수 등식화, 여사건·포함배제 전략 선택, 계수·나머지 때문에 생기는 경우 분기, 조건 결합. 그래서 같은 ★2 안에서도 「바로 공식」과 「한 번 옮겨야 공식」이 insight_type 으로 갈린다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 사슬), `insights[]`(유형 코드 + depth + 근거), `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 설정 변형과 ★ 가 변하는 지점)를 채웠다. 이 범위에는 그림 문항이 없다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-PROB-34-53
  page: 34
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "익히기"
  summary: |
    ⑴~⑷ ${}_7\mathrm{H}_4$, ${}_2\mathrm{H}_5$, ${}_4\mathrm{H}_4$, ${}_3\mathrm{H}_0$ 의 값을 각각 구하기.
  category: "중복조합의 정의 → 조합으로 바꾸어 값 계산"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "nHr 의 값 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    정의 nHr = (n+r-1)Cr 을 네 번 대입하는 한 줄 계산. ⑷ 3H0 만 r=0 경계를 확인시킨다.
    익히기 구역 ★1 출발 · 통찰 0 · M_total 4 → ★1 유지.
  tier: star_1
  mechanism_primary: "nHr 정의 대입 → (n+r-1)Cr 조합 계산 → 값"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $210$ ⑵ $6$ ⑶ $35$ ⑷ $1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/34-53.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "n 과 r 을 자유롭게 바꿀 수 있다. 제약: n+r-1 을 12 이하로 두어 조합값이 세 자리 이하로 남게 하고, r=0 인 소문항 하나는 남겨 값 1 인 경계를 확인시킨다. n=1 이면 어떤 r 에서도 1 이 되므로 다른 소문항과 겹치지 않게 쓴다."
    creative: "(1) nHr 과 nCr 을 나란히 놓고 대소를 비교시키기(★1 유지) (2) nHr = (n+r-1)C(r-1) 로 잘못 쓴 풀이에서 오류를 찾게 하기(★2 · I-EQV d1) (3) 값을 먼저 주고 n 또는 r 을 구하게 하면 역방향이 되어 ★2."
```

```yaml
- id: GN-PROB-34-54
  page: 34
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "익히기"
  summary: |
    ⑴⑵ 등식 ${}_5\mathrm{H}_2={}_n\mathrm{C}_2$, ${}_2\mathrm{H}_3={}_n\mathrm{C}_1$ 을 만족시키는 $n$ 의 값 구하기.
  category: "좌변 H 를 값으로 계산 → 조합 방정식 → n"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "nHr = nCr 등식에서 미지수 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    좌변을 먼저 수로 계산한 뒤 nC2 또는 nC1 이 그 값이 되는 n 을 찾는 두 단계.
    ⑴ 은 nC2 를 n(n-1)/2 로 풀어야 하지만 작은 수라 대입으로도 끝난다.
    익히기 구역 ★1 출발 · 통찰 0 → ★1.
  tier: star_1
  mechanism_primary: "좌변 nHr 을 수로 계산 → nCr 방정식 → n 결정"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $6$ ⑵ $4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/34-54.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "좌변의 (n, r) 과 우변 조합의 아래 첨자를 바꿀 수 있다. 제약: 우변이 nC2 이면 n(n-1)/2 가 좌변값과 딱 맞아떨어지는 정수 n 이 있어야 하고, nCr = nC(n-r) 때문에 답이 둘이 되지 않도록 아래 첨자를 작게(1 또는 2) 둔다."
    creative: "(1) 우변을 nHr 로 바꿔 H 끼리 비교하기(★1 유지) (2) 미지수를 위가 아니라 아래 첨자에 두어 5Hr = 21 꼴로 묻기(★2 · I-BW d1) (3) nH2 = nC2 + n 같은 항등식을 만족시키는 n 을 모두 구하게 하면 ★3."
```

```yaml
- id: GN-PROB-34-55
  page: 34
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "익히기"
  summary: |
    $4$ 개의 문자 $a$, $b$, $c$, $d$ 중에서 중복을 허용하여 $5$ 개를 택하는 경우의 수.
  category: "서로 다른 4개에서 중복 허용 5개 선택 → 4H5"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "중복조합의 수 — 서로 다른 것에서 중복 허용해 택하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    중복조합 기호를 세우는 최초 연습. n=4, r=5 를 정의에 그대로 넣어 4H5 = 8C5 한 줄.
    순서를 따지지 않는다는 점만 확인하면 끝난다. 익히기 ★1 출발 · 통찰 0 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "중복 허용·순서 무관 → 4H5 = 8C3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$56$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/34-55.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "문자 개수 n 과 택하는 개수 r 을 바꿀 수 있다(3~6 과 3~7 범위면 답이 세 자리 이내). 제약: r > n 인 조합을 하나는 남겨 중복조합에서는 r 이 n 보다 커도 된다는 점을 확인시킨다."
    creative: "(1) 같은 수치로 중복순열(4^5)을 함께 묻어 순서 유무를 대비시키기(★2 · I-RT d1) (2) 특정 문자를 반드시 포함하도록 조건을 붙이면 표준 치환이 생겨 ★2 (3) 택한 5개를 일렬로 나열하는 경우의 수까지 묻으면 같은 것이 있는 순열과 결합되어 ★3."
```

```yaml
- id: GN-PROB-34-56
  page: 34
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "익히기"
  summary: |
    감·사과·배 세 종류의 과일을 파는 가게에서 $5$ 개의 과일을 사는 경우의 수(각 과일은 충분히 많다).
  category: "세 종류에서 개수만 정해 5개 구입 → 3H5"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "중복조합의 수 — 여러 종류에서 개수만 택하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    같은 종류끼리 구별하지 않으므로 「각 종류를 몇 개 사는가」만 정하면 된다 → 3H5 = 7C2.
    「충분히 많다」는 개수 상한이 없다는 뜻으로 읽으면 함정이 사라진다.
    익히기 ★1 출발 · 통찰 0 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "종류별 구입 개수 (x, y, z) → 3H5 = 7C2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$21$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/34-56.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "종류 수(3~5)와 사는 개수(4~8)를 바꿀 수 있다. 제약: 「충분히 많다」를 유지해야 상한 조건 없는 단순 중복조합으로 남는다. 종류별 재고를 유한하게 바꾸면 유형이 달라진다."
    creative: "(1) 각 종류를 적어도 한 개씩 사게 하면 표준 치환 추가(★2) (2) 한 종류의 개수에 상한(배는 2개 이하)을 주면 여사건 또는 경우 분기로 ★3 (3) 가격을 붙여 총액 조건을 주면 계수가 다른 방정식의 해의 개수로 바뀌어 ★3~4."
```

### 필수·발전 예제

```yaml
- id: GN-PROB-35-e11
  page: 35
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    똑같은 공 $9$ 개를 네 바구니 $\mathrm{A}$, $\mathrm{B}$, $\mathrm{C}$, $\mathrm{D}$ 에 나누어 담는 경우의 수(빈 바구니 허용).
  category: "같은 것을 서로 다른 곳에 분배 → 바구니별 개수 → 4H9"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "중복조합의 수 — 같은 것을 서로 다른 곳에 나누어 담기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    공이 같고 바구니가 다르므로 「바구니별 개수」만 정하면 된다 → 4H9 = 12C3 = 220.
    빈 바구니 허용이라 하한 조건이 없어 치환 단계도 없다. 이 단원 분배형의 표준 골조를 세우는 필수 예제.
    ★2 출발 · 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "공은 같고 바구니는 다름 → 바구니별 개수 (a,b,c,d) → 4H9 = 12C3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$220$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-prob/items/35-e11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공의 개수(6~12)와 바구니 수(3~5)를 바꿀 수 있다. 제약: 공은 「똑같은」, 바구니는 「서로 다른」 상태를 유지해야 중복조합이 된다. 계산이 네 자리를 넘지 않게 n+r-1 을 14 이하로."
    creative: "(1) 공도 서로 다르게 만들면 중복순열(4^9)로 유형이 바뀜(★2 · I-RT d1) (2) 빈 바구니를 금지하면 표준 치환이 들어가 ★2 유지(36-e12 계열) (3) 특정 바구니의 개수에 상한을 주면 여사건이 필요해 ★3 (4) 바구니까지 구별하지 않으면 중복조합을 벗어나 분할 문제가 되어 ★4."
```

```yaml
- id: GN-PROB-35-57
  page: 35
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    동일한 $7$ 통의 편지를 서로 다른 $3$ 개의 우체통 $\mathrm{A}$, $\mathrm{B}$, $\mathrm{C}$ 에 넣는 경우의 수(빈 우체통 허용).
  category: "같은 것을 서로 다른 곳에 분배 → 우체통별 통수 → 3H7"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "중복조합의 수 — 같은 것을 서로 다른 곳에 나누어 담기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    35-e11 과 같은 골조의 확인 문항. 편지가 동일하므로 우체통별 통수만 정하면 된다 → 3H7 = 9C2 = 36.
    「동일한」과 「서로 다른」의 짝을 확인하는 것이 전부. ★2 출발 · 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "편지는 같고 우체통은 다름 → 통수 (a,b,c) → 3H7 = 9C2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$36$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/35-57.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "편지 수(5~9)와 우체통 수(3~4)를 바꿀 수 있다. 제약: 편지가 동일해야 하며, 「넣지 않는 우체통이 있을 수도 있다」를 빼면 자연수해 조건으로 유형이 바뀐다."
    creative: "(1) 편지를 서로 다르게 하면 중복순열 3^7(★2 · I-RT d1) (2) 모든 우체통에 적어도 한 통씩이면 ★2(치환) (3) A 에 넣는 통수를 3 이상으로 제한하면 하한 치환 ★2, 상한을 주면 여사건 ★3."
```

```yaml
- id: GN-PROB-35-58
  page: 35
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $2$ 명의 후보가 출마한 선거에서 $6$ 명의 유권자가 한 명에게 각각 무기명으로 투표할 때 투표 결과의 수(기권·무효 없음).
  category: "무기명 → 후보별 득표수만 결정 → 2H6"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「무기명」 조건을 「누가 찍었는지는 구별하지 않고 후보별 득표수 쌍만 남는다」로 옮김 — 2^6 이 아니라 2H6"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "중복조합의 수 — 무기명 투표 결과의 수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    이 문항의 전부는 「무기명」의 해석이다. 기명이면 2^6, 무기명이면 득표수 (a, b) 만 남아 2H6 = 7C1 = 7.
    계산은 한 줄이지만 조건 해석에서 갈리므로 통찰 1개(EQV d1)로 라벨링했다.
    확인체크 ★2 출발 · 통찰 1 d1 · M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "무기명 → 득표수 (a, b), a+b=6 → 2H6 = 7C1"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/35-58.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "후보 수(2~4)와 유권자 수(5~10)를 바꿀 수 있다. 제약: 「기권이나 무효표는 없다」를 유지해야 합이 유권자 수로 고정된다. 후보 3명 이상이면 답이 커지므로 유권자 수를 8 이하로."
    creative: "(1) 기명 투표로 바꿔 중복순열과 대비시키기(★2 · I-RT d1) (2) 기권을 허용하면 변수 하나가 늘어 여유변수형이 됨(★3 · I-EQV d2) (3) 「어느 후보도 0표가 아닌」 조건을 붙이면 치환 ★2 (4) 당선자가 정해지는(과반) 결과만 세게 하면 부등식 조건이 되어 ★4."
```

```yaml
- id: GN-PROB-35-59
  page: 35
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $3$ 명의 학생에게 같은 종류의 빵 $2$ 개, 같은 종류의 떡 $4$ 개, 쿠키 $1$ 개를 나누어 주는 경우의 수($1$ 개도 못 받는 학생 허용).
  category: "종류별로 독립 분배 → 3H2 · 3H4 · 3 의 곱"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "중복조합의 수 — 여러 종류를 동시에 나누어 주기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    빵·떡·쿠키는 서로 다른 종류라 분배가 독립이므로 곱의 법칙을 쓴다 → 3H2 · 3H4 · 3H1.
    쿠키 1개는 3H1 = 3 으로 세든 「받을 학생 3명 중 택 1」로 세든 같다.
    확인체크 ★2 출발 · 종류별 분배는 이 단원 표준 절차 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "종류별 독립 분배 → 3H2 × 3H4 × 3H1 곱의 법칙"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$270$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/35-59.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "학생 수(3~4)와 종류별 개수(1~5)를 바꿀 수 있다. 제약: 각 종류 안에서는 같은 것이어야 하고 종류끼리는 구별돼야 곱의 법칙이 성립한다. 종류 수가 늘면 답이 급히 커지므로 3종 이하로."
    creative: "(1) 쿠키를 서로 다른 2개로 바꾸면 중복순열 3^2 가 한 인수로 들어감(★2) (2) 종류마다 다른 하한(빵은 각 1개 이상)을 주면 인수별 치환 ★3 (3) 「한 개도 받지 못한 학생이 없도록」을 전체 조건으로 주면 종류 간 독립이 깨져 여사건·포함배제가 필요해 ★4(42-81 계열)."
```

```yaml
- id: GN-PROB-36-e12
  page: 36
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    같은 종류의 연필 $4$ 자루와 볼펜 $8$ 자루를 두 필통 $\mathrm{A}$, $\mathrm{B}$ 에 나누어 담되 각 필통에 볼펜을 적어도 한 자루씩 담는 경우의 수(연필은 0자루 허용).
  category: "연필은 제한 없음 · 볼펜은 각 1자루 이상 → 2H4 × 2H6"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "조건이 있는 중복조합의 수 — 적어도 k개씩"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 종류를 독립으로 나눈 뒤 볼펜 쪽에만 하한 조건을 적용한다. 볼펜은 미리 한 자루씩 주고 남은 6자루를 2H6.
    연필과 볼펜의 조건이 다르다는 점(연필은 0 허용)이 유일한 함정이라 Mₜ=2.
    필수 예제 ★2 출발 · 하한 치환은 이 단원 표준 절차라 통찰 미계상 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "연필 2H4 × (볼펜 각 1자루 선배분 → 남은 6자루 2H6) → 곱"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$35$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-prob/items/36-e12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "연필 수·볼펜 수·필통 수와 하한 값을 바꿀 수 있다. 제약: (볼펜 수) − (필통 수 × 하한) ≥ 0 이어야 경우의 수가 0 이 되지 않는다. 필통이 3개 이상이면 답이 커지므로 개수를 줄인다."
    creative: "(1) 하한을 두 종류 모두에 주면 인수 둘 다 치환(★2 유지) (2) 한 종류에 상한(연필은 3자루 이하)을 주면 여사건 필요 ★3 (3) 「필통마다 적어도 한 자루(종류 무관)」로 바꾸면 종류 간 독립이 깨져 포함배제 ★4 (4) 필통을 구별하지 않으면 중복 보정이 생겨 ★4."
```

```yaml
- id: GN-PROB-36-60
  page: 36
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $4$ 명의 학생에게 같은 영화표 $8$ 장을 각 학생이 적어도 한 장씩 받도록 나누어 주는 경우의 수.
  category: "각 1장 이상 → 4장 선배분 → 남은 4장 4H4"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "조건이 있는 중복조합의 수 — 적어도 k개씩"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    하한 치환의 가장 순수한 형태. 네 명에게 한 장씩 먼저 주고 남은 4장을 자유 분배 → 4H4 = 7C3 = 35.
    자연수해 개수 공식(n-1 C k-1)으로 바로 가도 같다.
    확인체크 ★2 출발 · 표준 치환 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "각 1장 선배분 → 남은 4장 자유 분배 → 4H4 = 7C3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$35$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/36-60.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "학생 수 k 와 영화표 수 n 을 바꿀 수 있다. 제약: n ≥ k 여야 하고, 남는 수 n−k 가 5 이하면 답이 두 자리로 유지된다."
    creative: "(1) 하한을 2장으로 올리면 같은 골조로 수만 바뀜(★2 유지) (2) 특정 학생만 하한을 다르게 주면 치환이 비대칭이 되어 ★2~3 (3) 「적어도 한 장 못 받는 학생이 있도록」으로 뒤집으면 여사건 ★3 (4) 학생마다 상한(3장 이하)을 주면 포함배제 ★4."
```

```yaml
- id: GN-PROB-36-61
  page: 36
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    오렌지·사과·포도·딸기 주스 중에서 $11$ 병을 구입할 때 오렌지는 $2$ 병 이상, 사과는 $4$ 병 이상 구입하는 경우의 수(각 종류는 충분히 있다).
  category: "종류별 하한 선배분 → 남은 5병 4H5"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "조건이 있는 중복조합의 수 — 적어도 k개씩"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    하한이 종류마다 다른 치환. 오렌지 2병·사과 4병을 먼저 빼고 남은 11−6=5 병을 네 종류에 자유 분배 → 4H5 = 8C3 = 56.
    하한이 비대칭이지만 처리 순서는 36-60 과 같다. 확인체크 ★2 출발 · 표준 치환 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "하한 2병·4병 선배분 → 남은 5병 자유 분배 → 4H5 = 8C3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$56$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/36-61.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "총 병수와 두 하한을 바꿀 수 있다. 제약: (총 병수) − (하한의 합) ≥ 0 이어야 하고, 「각 종류는 충분히 있다」를 유지해야 상한이 생기지 않는다. 남는 수를 4~6 으로 두면 답이 두 자리."
    creative: "(1) 하한을 세 종류에 주면 남는 수만 줄어 ★2 유지 (2) 한 종류에 상한(딸기 3병 이하)을 추가하면 여사건 한 번 ★3 (3) 「오렌지는 사과보다 많이」처럼 종류 사이의 대소 조건으로 바꾸면 대소 조건형이 되어 ★3 (4) 총 병수를 11병 이하로 바꾸면 여유변수 도입 ★3."
```

```yaml
- id: GN-PROB-36-62
  page: 36
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    같은 종류의 초콜릿 $5$ 개를 $4$ 명에게 각각 $1$ 개 이상씩 나누어 주고, 초콜릿을 $1$ 개만 받은 학생에게만 같은 종류의 사탕 $7$ 개를 $1$ 개 이상씩 나누어 주는 경우의 수.
  category: "초콜릿 분배(각 1개 이상) → 1개만 받은 학생 수 확정 → 그 인원에 사탕 분배"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "초콜릿 분배 결과가 사탕을 받을 인원을 결정한다는 점을 결합 — 어느 경우든 1개만 받은 학생이 3명이므로 뒤 단계가 같은 수로 고정"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "조건이 있는 중복조합의 수 — 앞 분배 결과에 의존하는 2단 분배"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 분배가 독립이 아니라 앞 결과가 뒤 조건을 정하는 2단 구조다. 초콜릿은 각 1개씩 준 뒤 남은 1개를 누가 받는지만 정해지고,
    그때 1개만 받은 학생은 항상 3명이므로 사탕은 3명에게 각 1개 이상 → 남은 4개 자유 분배.
    확인체크 ★2 출발이지만 종속 구조(I-CON d2)와 M_total 8 로 +1 → ★3. [분류 이슈] 벤더 확인체크(★2)와 1단 차이.
  tier: star_3
  mechanism_primary: "초콜릿 각 1개 선배분 → 남은 1개의 주인 4가지 → 1개만 받은 3명에게 사탕 각 1개 선배분 → 남은 4개 3H4"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$60$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/36-62.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "학생 수·초콜릿 수·사탕 수를 바꿀 수 있다. 제약: 초콜릿 수 − 학생 수 = 1 을 유지하면 「1개만 받은 학생 수」가 한 값으로 고정돼 경우 분기가 생기지 않는다. 이 차를 2 이상으로 키우면 분기가 생겨 난이도가 크게 오른다."
    creative: "(1) 초콜릿을 6개로 늘리면 (2,1,1,1)·(3,1,1,1) 등 분포별 분기가 생겨 I-MI 추가 ★4 (2) 뒤 단계 대상을 「2개 이상 받은 학생」으로 바꾸면 인원이 1명이 되어 ★2로 내려감 (3) 사탕 하한을 없애면 뒤 인수만 3H7 로 바뀌고 ★3 유지 (4) 두 분배를 독립으로 만들면 곱의 법칙 ★2."
```

```yaml
- id: GN-PROB-37-e13
  page: 37
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    $(x+y+z)^5$ 을 전개할 때 생기는 서로 다른 항의 개수.
  category: "항 x^a y^b z^c ↔ a+b+c=5 의 음이 아닌 정수해 → 3H5"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "전개식의 항 x^a y^b z^c 를 지수의 순서쌍 (a, b, c) 로 옮겨 「합이 5인 음이 아닌 정수해의 개수」로 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "항의 개수 — 다항식 전개식의 서로 다른 항"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    대수 전개를 개수 세기로 옮기는 것이 전부다. 항 하나 = 지수 (a, b, c), a+b+c=5 → 3H5 = 7C2 = 21.
    계수는 묻지 않으므로 다항정리 계산이 필요 없다는 점이 포인트.
    필수 예제 ★2 출발 · 표현 전환 1개(RT d1) · M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "항 ↔ 지수 순서쌍 (a,b,c), a+b+c=5 → 3H5 = 7C2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$21$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-prob/items/37-e13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "문자 수(2~5)와 지수(4~8)를 바꿀 수 있다. 제약: 문자들이 서로 달라야 항이 합쳐지지 않는다. 문자 5개·지수 8 이면 답이 네 자리로 커지므로 둘 중 하나는 작게 둔다."
    creative: "(1) 계수까지 묻으면 다항정리와 결합해 ★3 (2) 특정 문자를 포함·미포함 조건으로 제한하면 여사건 ★3(41-77 계열) (3) 두 다항식의 곱으로 바꾸면 곱의 법칙 인수 분해 ★2(37-64) (4) (x+y+z)^5 의 항 중 계수가 최대인 항을 묻게 하면 ★4."
```

```yaml
- id: GN-PROB-37-63
  page: 37
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴⑵ $(a+b)^4$, $(a+b-c+d)^6$ 을 전개할 때 생기는 서로 다른 항의 개수.
  category: "항 ↔ 지수 순서쌍 → 2H4 · 4H6"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "항을 지수 순서쌍으로 옮겨 합이 지수와 같은 음이 아닌 정수해의 개수로 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "항의 개수 — 다항식 전개식의 서로 다른 항"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    37-e13 의 확인 문항. ⑴ 2H4 = 5, ⑵ 4H6 = 9C3 = 84.
    ⑵ 의 −c 는 계수 부호만 바꿀 뿐 항의 「종류」를 바꾸지 않는다는 점이 함정이라 Mₜ=2.
    확인체크 ★2 출발 · RT d1 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "문자 개수 n · 지수 r → nHr (부호는 항의 개수에 무관)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $5$ ⑵ $84$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/37-63.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "문자 수와 지수를 바꿀 수 있고 일부 문자 앞의 부호도 자유롭게 바꿀 수 있다(답 불변). 제약: 같은 문자가 두 번 나오면(예: a+a+b) 문자 수가 줄어 답이 달라지므로 서로 다른 문자만 쓴다."
    creative: "(1) 계수가 붙은 (2a−3b+c)^5 로 바꿔도 답이 같음을 확인시키기(★2 · 함정 강화) (2) 전개식에서 계수가 양수인 항의 개수를 묻게 하면 부호 분석이 들어가 ★3 (3) (a+b)^4(a+b)^2 처럼 문자가 겹치게 만들면 지수 합으로 환원해야 해 ★3."
```

```yaml
- id: GN-PROB-37-64
  page: 37
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $(a+b)^5(x+y+z)^4$ 의 전개식에서 서로 다른 항의 개수.
  category: "문자 집합이 겹치지 않음 → 인수별 항의 개수의 곱 → 2H5 × 3H4"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "각 인수의 항을 지수 순서쌍으로 옮긴 뒤, 두 인수의 문자 집합이 겹치지 않으므로 항끼리 합쳐지지 않음을 확인해 곱의 법칙 적용"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "항의 개수 — 두 다항식 곱의 전개식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    2H5 = 6, 3H4 = 15 을 곱해 90. 핵심은 곱해도 되는 이유(a, b 와 x, y, z 가 겹치지 않아 서로 다른 항이 합쳐지지 않는다)다.
    문자가 겹치면 곱의 법칙이 깨지므로 Mₜ=2. 확인체크 ★2 출발 · RT d1 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "인수별 항의 개수 2H5 · 3H4 → 문자 집합이 서로소 → 곱"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$90$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/37-64.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 인수의 문자 수와 지수를 각각 바꿀 수 있다. 제약: 두 인수의 문자 집합이 서로소여야 단순 곱이 된다. 두 인수의 값이 각각 10 이하가 되게 두면 답이 세 자리 이내."
    creative: "(1) 문자를 겹치게 (a+b)^5(b+c+d)^4 로 바꾸면 곱의 법칙이 깨져 b 의 지수 합을 따로 세야 하므로 ★4 (2) 세 인수의 곱으로 늘리면 ★2 유지(계산만 증가) (3) 특정 문자를 포함하는 항만 세게 하면 여사건 결합 ★3."
```

```yaml
- id: GN-PROB-38-e14
  page: 38
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴⑵ 방정식 $x+y+z=10$ 의 음이 아닌 정수해의 개수와 자연수해의 개수.
  category: "음이 아닌 정수해 3H10 · 자연수해는 각 1 선배분 후 3H7"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "방정식의 해의 개수 — 음이 아닌 정수해·자연수해"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분배 문제와 같은 골조를 방정식 언어로 옮긴 표준 예제. ⑴ 3H10 = 12C2 = 66, ⑵ 각 변수에 1씩 준 뒤 3H7 = 9C2 = 36.
    ⑴ 과 ⑵ 의 차이(0 허용 여부)가 이 유형의 전부다.
    필수 예제 ★2 출발 · 하한 치환은 표준 절차 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "x+y+z=10 → ⑴ 3H10 ⑵ 각 1 선배분 후 x'+y'+z'=7 → 3H7"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $66$ ⑵ $36$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-prob/items/38-e14.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "변수 개수(3~5)와 우변(6~12)을 바꿀 수 있다. 제약: 자연수해 소문항에서는 (우변) ≥ (변수 개수) 여야 해가 존재한다. 우변이 커지면 답이 세 자리를 넘으므로 12 이하로."
    creative: "(1) 하한을 변수마다 다르게 주면 비대칭 치환 ★2 (2) 한 변수에 상한을 주면 여사건 ★3 (3) 등식을 부등식으로 바꾸면 여유변수 도입 ★3(38-67) (4) 한 변수의 계수를 2로 바꾸면 경우 분기 ★3(42-78) (5) 해의 개수를 주고 우변을 구하게 하면 역방향 ★2(38-66)."
```

```yaml
- id: GN-PROB-38-65
  page: 38
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴⑵ 방정식 $x+y+z+w=8$ 의 음이 아닌 정수해의 개수와 자연수해의 개수.
  category: "음이 아닌 정수해 4H8 · 자연수해는 각 1 선배분 후 4H4"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "방정식의 해의 개수 — 음이 아닌 정수해·자연수해"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    38-e14 의 변수 4개 판. ⑴ 4H8 = 11C3 = 165, ⑵ 각 1씩 준 뒤 4H4 = 7C3 = 35.
    변수가 하나 늘어 조합 계산만 무거워진다. 확인체크 ★2 출발 · 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "x+y+z+w=8 → ⑴ 4H8 ⑵ 각 1 선배분 후 합 4 → 4H4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $165$ ⑵ $35$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/38-65.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "변수 개수와 우변을 바꿀 수 있다. 제약: 자연수해 쪽은 (우변) ≥ (변수 개수). 변수 4개에서 우변을 10 이상으로 올리면 조합값이 세 자리 후반이 되어 계산 부담만 커진다."
    creative: "(1) 소문항에 「양의 짝수해」를 추가하면 2로 나누는 치환이 들어가 ★3 (2) w 에만 하한 2를 주면 비대칭 치환 ★2 (3) x ≤ y ≤ z ≤ w 조건을 붙이면 대소 조건형으로 바뀌어 ★3 (4) 우변을 미지수 n 으로 두고 해의 개수를 주면 역방향 ★2."
```

```yaml
- id: GN-PROB-38-66
  page: 38
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    방정식 $x+y+z=n$ 의 음이 아닌 정수해의 개수가 $105$ 일 때 자연수 $n$ 의 값.
  category: "해의 개수 3Hn = (n+2)C2 = 105 → n 에 대한 이차방정식"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "해의 개수가 먼저 주어지고 우변 n 을 역추적 — 개수 공식을 n 에 대한 방정식으로 세워 푼다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "방정식의 해의 개수 — 해의 개수로부터 미지수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    3Hn = (n+2)C2 = (n+2)(n+1)/2 = 105 → (n+2)(n+1) = 210 → 연속한 두 정수의 곱으로 n 을 찾는다.
    방향이 거꾸로라는 점(BW d1)과 우변이 매개변수라는 점(Mₐ=2)이 앞 문항들과 다르다.
    확인체크 ★2 출발 · 통찰 1 d1 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "3Hn = (n+2)C2 = 105 → (n+2)(n+1) = 210 → 자연수 n"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$13$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/38-66.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "변수 개수와 주어진 해의 개수를 바꿀 수 있다. 제약: 변수 3개면 해의 개수가 삼각수여야 자연수 n 이 나온다(105 = 15·14/2). 변수 4개로 바꾸면 (n+3)(n+2)(n+1)/6 이 되어 세제곱 수준의 시행착오가 필요하므로 값을 작게 둔다."
    creative: "(1) 자연수해의 개수를 주면 치환이 한 단계 더 붙어 ★3 (2) 해의 개수가 100 이상이 되는 최소의 n 을 묻게 하면 부등식 판정이 들어가 ★3 (3) 변수 개수 자체를 미지수로 두고 해의 개수를 주면 ★4."
```

```yaml
- id: GN-PROB-38-67
  page: 38
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    부등식 $x+y+z\le 2$ 의 음이 아닌 정수해의 개수.
  category: "여유변수 w 도입 → x+y+z+w=2 → 4H2"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "부등식을 그대로는 셀 수 없으므로 부족분을 받는 여유변수 w ≥ 0 을 도입해 등식 x+y+z+w=2 로 동치 변환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "부등식의 해의 개수 — 여유변수 도입"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    이 단원에서 처음 나오는 비표준 전환이다. 여유변수를 넣으면 4H2 = 5C2 = 10 한 줄로 끝난다.
    합이 0, 1, 2 인 경우를 각각 세는 갈래도 있으나 여유변수가 정석. 「≤ 2」의 경계(합 0 포함)를 놓치기 쉬워 Mₜ=2.
    확인체크 ★2 출발 · 통찰 1 d2 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "부등식 ≤ 2 → 여유변수 w 도입 → x+y+z+w=2 → 4H2 = 5C2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$10$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/38-67.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "변수 개수와 우변 상한을 바꿀 수 있다. 제약: 우변이 커질수록 여유변수를 쓰지 않고 직접 나열하는 갈래가 불리해지므로 상한을 4 이상으로 두면 여유변수의 이점이 드러난다. 부등호를 < 로 바꾸면 상한이 1 줄어든다."
    creative: "(1) 자연수해로 바꾸면 치환과 여유변수가 겹쳐 ★3(41-74) (2) 1 ≤ x+y+z ≤ 5 처럼 양쪽 범위를 주면 여유변수 둘 또는 차집합이 필요해 ★3 (3) 부등식 두 개를 동시에 주면 포함배제 ★4."
```

```yaml
- id: GN-PROB-39-e15
  page: 39
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ㈎ $a$, $b$, $c$, $d$ 중 $2$ 개가 $0$ 이고 ㈏ $a+b+c+d=10$ 인 음이 아닌 정수 순서쌍 $(a,\,b,\,c,\,d)$ 의 개수.
  category: "0인 자리 4C2 선택 → 나머지 두 수는 자연수 합 10 → 2H8"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「정확히 2개가 0」과 「합이 10」을 결합해 〈0 자리 4C2 선택〉 × 〈나머지 두 수는 0이 아닌 합 10〉 으로 분리 — 나머지가 0이면 안 된다는 점이 중복 방지의 핵심"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "나머지 두 수가 자연수라는 조건을 1씩 선배분해 음이 아닌 정수 방정식으로 치환"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "조건을 만족시키는 순서쌍의 개수 — 0의 개수 지정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    0인 자리 두 곳을 고르는 4C2 = 6 과, 남은 두 수가 「0이 아닌」 합 10(즉 자연수해 9가지)의 곱.
    「2개가 0」을 「적어도 2개가 0」으로 읽으면 중복이 생기므로 나머지를 자연수로 묶는 것이 전부다.
    필수 예제 ★2 출발 · 조건 결합 통찰 2개 → +1 → ★3.
  tier: star_3
  mechanism_primary: "0인 자리 4C2 → 남은 두 수 자연수 합 10 → 각 1 선배분 후 2H8"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$54$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-prob/items/39-e15.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "변수 개수·0인 변수의 개수·합을 바꿀 수 있다. 제약: (변수 개수 − 0인 개수) ≤ 합 이어야 나머지가 모두 자연수일 수 있다. 0인 개수를 1로 줄이면 나머지 세 수 자연수해로 바뀐다."
    creative: "(1) 「적어도 2개가 0」으로 바꾸면 경우 분기 + 중복 보정이 생겨 ★4 (2) 0 대신 특정 값(2개가 3이다)으로 바꾸면 같은 골조에 치환만 추가 ★3 (3) 0인 자리를 지정(a=b=0)하면 자리 선택이 사라져 ★2 (4) ㈎ 를 「짝수가 2개」로 바꾸면 홀짝 분석이 붙어 ★4."
```

```yaml
- id: GN-PROB-39-68
  page: 39
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ㈎ $a\times b\times c$ 가 홀수이고 ㈏ $a\le b\le c\le 12$ 인 자연수 순서쌍 $(a,\,b,\,c)$ 의 개수.
  category: "곱이 홀수 → 세 수 모두 홀수 → 12 이하 홀수 6개에서 중복조합 6H3"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「곱이 홀수」를 「세 수가 모두 홀수」로 동치 변환해 후보 집합을 12 이하 홀수 6개로 좁힘"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "a ≤ b ≤ c 인 순서쌍을 「6개에서 중복을 허용해 3개를 뽑는 경우」로 전환 — 뽑은 다중집합이 비내림차순 배열과 일대일 대응"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "조건을 만족시키는 순서쌍의 개수 — 대소 조건과 홀짝"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    조건 두 개가 각각 다른 일을 한다. ㈎ 는 후보를 {1,3,5,7,9,11} 로 좁히고, ㈏ 의 비내림차순은 중복조합으로 바뀐다 → 6H3 = 8C3 = 56.
    대소 조건이 「순서를 고정한다 = 순서를 따지지 않는다」로 뒤집히는 것이 이 유형의 핵심이라 RT d2.
    확인체크 ★2 출발 · 통찰 2개 → +1 → ★3.
  tier: star_3
  mechanism_primary: "곱 홀수 → 모두 홀수 → 후보 6개 → a≤b≤c → 6H3 = 8C3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$56$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/39-68.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상한 12 와 변수 개수를 바꿀 수 있다. 제약: 상한이 정해지면 후보 홀수의 개수 n 이 정해지고 답은 nH3 이므로, 상한을 10 이나 14 로 바꾸면 n 이 5 나 7 로 바뀐다. 변수 4개면 답이 세 자리로 커진다."
    creative: "(1) 「곱이 짝수」로 바꾸면 여사건(모두 홀수 제외)이 필요해 ★4 (2) 대소를 a < b < c 로 강하게 만들면 중복조합이 조합으로 바뀜(★3 유지 · 대비 학습에 좋음) (3) 「곱이 3의 배수」로 바꾸면 여사건 + 배수 분석 ★4 (4) 상한을 없애고 합 조건을 주면 방정식형으로 이동."
```

```yaml
- id: GN-PROB-39-69
  page: 39
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $1<a<b\le 5<c\le d\le 10$ 을 만족시키는 자연수 $a$, $b$, $c$, $d$ 의 순서쌍 $(a,\,b,\,c,\,d)$ 의 개수.
  category: "연쇄 부등식을 (a,b)·(c,d) 두 덩어리로 분리 → 4C2 × 5H2"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "긴 연쇄 부등식을 「a, b ∈ {2,3,4,5} 이고 a<b」와 「c, d ∈ {6,…,10} 이고 c≤d」 두 독립 조건으로 분리"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "강부등식 a<b 는 서로 다른 둘을 뽑는 조합, 약부등식 c≤d 는 중복을 허용해 둘을 뽑는 중복조합으로 각각 전환"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "조건을 만족시키는 순서쌍의 개수 — 연쇄 부등식 분리"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    가운데의 5 가 사슬을 두 토막으로 끊는다. 앞은 4C2, 뒤는 5H2 = 6C2 이고 두 덩어리가 독립이므로 곱한다.
    같은 문제 안에서 < 와 ≤ 가 각각 C 와 H 로 갈리는 대비가 학습 포인트라 Mₜ=2(경계).
    확인체크 ★2 출발 · 통찰 2개 → +1 → ★3.
  tier: star_3
  mechanism_primary: "5 를 기준으로 분리 → a<b 는 4C2 · c≤d 는 5H2 → 곱"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$90$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/39-69.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "양 끝값(1, 10)과 분리점(5), 부등호의 강약을 바꿀 수 있다. 제약: 분리점이 한쪽에만 등호로 붙어야(b ≤ 5 < c) 두 구간이 겹치지 않는다. 구간 크기를 각각 4~6 으로 두면 답이 세 자리 이내."
    creative: "(1) 두 부등호를 모두 ≤ 로 바꾸면 5H2 × 5H2 로 ★3 유지 (2) 분리점을 미지수로 두면 경우 분기 ★4 (3) 사슬을 끊지 않고 1 < a ≤ b ≤ c ≤ d ≤ 10 으로 주면 한 덩어리 중복조합 ★2 (4) 합 조건을 추가하면 방정식형과 결합해 ★4."
```

```yaml
- id: GN-PROB-40-e16
  page: 40
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["발전"]
  category_type: "발전 예제"
  summary: |
    $X=\{1,2,3\}$, $Y=\{4,5,6,7\}$ 에 대하여 ⑴ 일대일함수 ⑵ $x_1<x_2$ 이면 $f(x_1)<f(x_2)$ ⑶ $x_1<x_2$ 이면 $f(x_1)\le f(x_2)$ 를 만족시키는 함수 $f:X\to Y$ 의 개수.
  category: "세 대소 조건을 순열·조합·중복조합으로 각각 대응"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "증가함수는 치역 3원소를 고르면 대응 순서가 하나로 정해지므로 함수의 개수 = 4C3 조합으로 전환"
    - step: 3
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "비감소함수는 같은 값이 허용되므로 4개에서 중복을 허용해 3개를 뽑는 4H3 로 전환"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "함수의 개수 — 일대일·증가·비감소"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑴ 은 순열 4P3, ⑵ 는 「뽑으면 배열이 결정된다」로 4C3, ⑶ 은 중복을 허용한 4H3 = 6C3.
    한 문항 안에서 순열·조합·중복조합이 대소 조건의 강약에 따라 갈리는 구조라 이 단원 함수형의 기준 예제다.
    발전 예제 ★3 출발 · 통찰 2개(모두 RT d2)지만 각 전환이 한 줄이라 +1 을 적용하지 않고 ★3 유지.
  tier: star_3
  mechanism_primary: "대소 조건의 강약 → ⑴ 4P3 ⑵ 4C3 ⑶ 4H3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $24$ ⑵ $4$ ⑶ $20$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-prob/items/40-e16.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "|X| 와 |Y| 를 바꿀 수 있다. 제약: ⑴⑵ 는 |Y| ≥ |X| 여야 0이 아니고, ⑶ 만은 |Y| < |X| 여도 된다. |Y| 를 5~6 으로 올리면 세 답의 차이가 더 뚜렷해진다."
    creative: "(1) 감소·비증가 조건으로 뒤집어도 개수는 같음을 확인시키기(★3 유지 · 40-70) (2) 치역에 조건을 붙이면 범위가 좁아져 ★3(41-75) (3) X 의 일부 원소에만 대소 조건을 주면 자유 변수가 생겨 ★3(40-71) (4) 구간별로 다른 대소·범위 조건을 주면 두 블록의 곱 ★4(42-80)."
```

```yaml
- id: GN-PROB-40-70
  page: 40
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $X=\{1,2,3\}$, $Y=\{1,2,3,4,5,6\}$ 에 대하여 $x_1<x_2$ 이면 $f(x_1)\ge f(x_2)$ 를 만족시키는 함수 $f:X\to Y$ 의 개수.
  category: "비증가함수 → Y 의 6개에서 중복 허용 3개 → 6H3"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "비증가 조건은 뽑은 세 값(중복 허용)을 내림차순으로 놓는 방법이 하나뿐임을 뜻하므로 함수의 개수 = 6H3"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "함수의 개수 — 비증가함수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    40-e16 ⑶ 의 부등호를 뒤집은 확인 문항. 방향이 바뀌어도 「뽑으면 배열이 하나」라는 구조는 같아 6H3 = 8C3 = 56.
    전환만 하면 한 줄이지만 그 전환 자체가 이 유형의 전부다.
    발전 구역 확인체크 ★3 출발 · 통찰 1 d2 · M_total 7 → ★3 유지. [분류 이슈] 계산량만 보면 ★2 후보.
  tier: star_3
  mechanism_primary: "비증가 → 중복 허용해 세 값 선택 → 6H3 = 8C3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$56$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/40-70.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "|X| 와 |Y| 를 바꿀 수 있다(답은 |Y|H|X|). 제약: 비증가·비감소는 |Y| < |X| 여도 답이 0이 아니므로 자유롭지만, |Y|+|X|−1 을 10 이하로 두면 답이 세 자리 이내."
    creative: "(1) 부등호를 > 로 강하게 하면 조합 6C3 로 바뀌어 ★3 유지 (2) f(1) 의 값을 지정하면 범위가 잘려 ★3 (3) 치역의 원소 개수를 지정하면 같은 것이 있는 순열·포함배제와 결합해 ★4 (4) 비증가와 비감소를 함께 묻고 공통인 함수(상수함수) 개수까지 세게 하면 ★4."
```

```yaml
- id: GN-PROB-40-71
  page: 40
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $X=\{1,2,3,4,5\}$ 에서 $X$ 로의 함수 $f$ 중 $f(1)\le f(3)\le f(5)$ 를 만족시키는 함수의 개수.
  category: "조건이 걸린 세 값은 5H3 · 자유로운 두 값은 5^2 → 곱"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f(1) ≤ f(3) ≤ f(5) 를 「5개에서 중복을 허용해 3개를 뽑는 경우」로 전환하고, 조건이 없는 f(2), f(4) 는 각각 자유롭게 5가지임을 분리"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "함수의 개수 — 일부 값에만 대소 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    조건이 걸린 자리와 걸리지 않은 자리를 분리하는 것이 핵심이다. 5H3 = 7C3 = 35 와 5 × 5 = 25 의 곱.
    f(2), f(4) 까지 대소 사슬에 넣어 버리는 실수가 잦아 Mₜ=2.
    발전 구역 확인체크 ★3 출발 · 통찰 1 d2 · M_total 8 → ★3.
  tier: star_3
  mechanism_primary: "조건 있는 세 값 5H3 × 자유로운 두 값 5^2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$875$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/40-71.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "|X| 와 조건이 걸리는 자리의 개수를 바꿀 수 있다. 제약: 자유 자리 수가 늘면 답이 |X| 의 거듭제곱으로 급히 커지므로 |X| ≤ 5, 자유 자리 ≤ 2 로 둔다."
    creative: "(1) 조건을 f(1) < f(3) < f(5) 로 바꾸면 5C3 로 내려가 ★3 유지 (2) 자유 자리에도 범위 조건(f(2) ≤ 3)을 주면 인수 하나가 바뀌며 ★3 (3) 조건 사슬을 두 개로 쪼개 각각 다른 범위를 주면 ★4(42-80) (4) f 가 일대일이라는 조건을 겹치면 중복조합이 깨져 ★4."
```

### 연습문제 STEP 1

```yaml
- id: GN-PROB-41-72
  page: 41
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    ${}_4\mathrm{H}_0+{}_4\mathrm{H}_1+{}_4\mathrm{H}_2+{}_4\mathrm{H}_3+{}_4\mathrm{H}_4$ 의 값.
  category: "각 항을 조합으로 바꾸어 계산 후 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "nHr 의 값 계산 — 합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    4Hr = (r+3)C3 으로 바꾸면 3C3+4C3+5C3+6C3+7C3 이고, 항마다 계산해 더해도 다섯 번의 조합 계산으로 끝난다.
    하키스틱 항등식으로 8C4 로 묶는 갈래도 있으나 필수는 아니라 통찰로 세지 않았다.
    STEP 1 ★2 출발 · 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "4Hr = (r+3)C3 으로 각 항 계산 → 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$70$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/41-72.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 n 과 합의 범위 r=0..k 를 바꿀 수 있다. 제약: 항이 다섯 개를 넘으면 계산만 길어지므로 k ≤ 5, n ≤ 5 로 둔다. n 을 고정하고 r 을 연속으로 두어야 하키스틱 갈래가 살아 있다."
    creative: "(1) 합을 하나의 조합으로 나타내라고 요구하면 패턴 발견이 필수가 되어 ★3(I-PD d2) (2) nH0+…+nHk 를 일반식 (n+k)C k 로 증명하게 하면 ★4 (3) 합의 값을 주고 k 를 구하게 하면 역방향 ★3."
```

```yaml
- id: GN-PROB-41-73
  page: 41
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    숫자 $1$, $2$, $3$, $4$, $5$ 에서 중복을 허용하여 $6$ 개를 택할 때 숫자 $1$ 을 $1$ 개 이하로 택하는 경우의 수.
  category: "1의 개수 0 · 1 로 분기 → 4H6 + 4H5"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「1개 이하」가 1을 0개 택하는 경우와 1개 택하는 경우 두 갈래를 만들고, 각 갈래에서 남은 수를 나머지 4개 숫자로만 채워야 함"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "조건이 있는 중복조합의 수 — 특정 원소 개수 제한"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    상한 조건이라 하한 치환이 통하지 않는다. 1을 0개 택하면 4H6, 1개 택하면 남은 5개를 4H5 로 채운다.
    두 갈래에서 모두 「1은 더 못 쓴다」를 지키는 것이 함정이라 Mₜ=2.
    STEP 1 ★2 출발 · 통찰 1 d1 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "1의 개수로 분기 → (0개) 4H6 + (1개) 4H5"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$140$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/41-73.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "숫자의 개수 n, 택하는 개수 r, 상한 값을 바꿀 수 있다. 제약: 상한이 2 이상이면 갈래가 3개로 늘어 계산만 길어지므로 1~2 로 둔다. r 을 크게 하면 여사건(상한 초과를 빼기) 갈래가 더 유리해진다."
    creative: "(1) 상한을 두 숫자에 동시에 주면 포함배제 ★4 (2) 「1을 적어도 1개」로 뒤집으면 여사건 한 번 ★2 (3) 택한 6개를 일렬로 나열하는 경우의 수까지 물으면 같은 것이 있는 순열과 결합 ★4 (4) 상한을 r 에 가깝게 잡으면 여사건 갈래가 압도적으로 빨라져 I-SC 가 생기며 ★3."
```

```yaml
- id: GN-PROB-41-74
  page: 41
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    부등식 $x+y+z+w<7$ 의 자연수인 해의 개수.
  category: "자연수 치환 + 여유변수 도입 → 5개 변수의 합이 2인 등식 → 5H2"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "자연수 조건을 1씩 선배분해 음이 아닌 정수로 낮추고, 남은 강부등식(합 < 3, 즉 합 ≤ 2)을 여유변수로 등식화 — 두 변환을 겹쳐 쓴다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "부등식의 해의 개수 — 자연수해·여유변수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    치환 후 합이 3 미만, 즉 2 이하가 되고 여기에 여유변수를 더하면 5개 변수의 합이 2 → 5H2 = 6C2 = 15.
    강부등식 < 을 ≤ 로 내리는 경계 처리와 두 변환의 순서가 함정이라 Mₜ=2.
    STEP 1 ★2 출발이지만 변환이 두 겹이고 M_total 8 → +1 → ★3. [분류 이슈] 벤더 STEP 1(★2)과 1단 차이.
  tier: star_3
  mechanism_primary: "자연수 → 각 1 선배분 → 합 ≤ 2 → 여유변수 추가 → 5H2 = 6C2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$15$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/41-74.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "변수 개수와 우변, 부등호의 강약을 바꿀 수 있다. 제약: 치환 후 남는 값 (우변 − 변수 개수 − 1) 이 0 이상이어야 해가 존재한다. 이 값이 커지면 답이 급히 커지므로 3 이하로 둔다."
    creative: "(1) 부등호를 ≤ 로 바꾸면 남는 값만 1 늘어 ★3 유지 (2) 음이 아닌 정수해로 되돌리면 변환이 한 겹이라 ★2(38-67) (3) 하한을 변수마다 다르게 주면 비대칭 치환 ★3 (4) 2 ≤ x+y+z+w < 7 처럼 양쪽을 막으면 차집합 또는 여유변수 둘 ★4."
```

```yaml
- id: GN-PROB-41-75
  page: 41
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $X=\{1,2,3,4\}$, $Y=\{1,3,5,7,9\}$ 에 대하여 ㈎ $x_1<x_2$ 이면 $f(x_1)\le f(x_2)$ ㈏ 치역의 최솟값이 $5$ 인 함수 $f:X\to Y$ 의 개수.
  category: "비감소 → 최솟값은 f(1) → f(1)=5 고정 후 나머지 셋을 {5,7,9} 에서 3H3"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "비감소이므로 치역의 최솟값은 반드시 f(1) — 「최솟값이 5」를 「f(1)=5 이고 나머지 값은 모두 5 이상」으로 동치 변환"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "남은 f(2) ≤ f(3) ≤ f(4) 를 {5,7,9} 3개에서 중복을 허용해 3개를 뽑는 3H3 으로 전환"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "함수의 개수 — 비감소 + 치역 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 조건이 맞물린다. ㈎ 때문에 최솟값의 위치가 f(1) 로 고정되고, ㈏ 가 그 값을 5 로 못 박아 후보 집합이 {5,7,9} 로 줄어든다 → 3H3 = 5C3 = 10.
    「최솟값이 5」를 「5 이상」으로만 읽으면 f(1)=7 인 경우가 섞여 틀리므로 경계 함정 Mₜ=2.
    STEP 1 ★2 출발이지만 통찰 2개(d2) · M_total 9 → +1 → ★3. [분류 이슈] 벤더 STEP 1 과 1단 차이.
  tier: star_3
  mechanism_primary: "비감소 → 최솟값 = f(1) → f(1)=5 → 나머지 셋을 {5,7,9} 에서 3H3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$10$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/41-75.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "|X|, Y 의 원소와 지정하는 최솟값을 바꿀 수 있다. 제약: 지정한 최솟값 이상인 Y 의 원소 개수 m 과 남은 자리 수 k 로 답이 mHk 가 되므로, m 과 k 를 3~4 로 두면 답이 두 자리."
    creative: "(1) 조건을 「치역의 최댓값이 5」로 바꾸면 f(4)=5 로 뒤집혀 ★3 유지 (2) 「치역의 원소가 2개」로 바꾸면 값 선택 + 분할이 필요해 ★4 (3) 비감소를 증가로 바꾸면 조합이 되어 ★3 (4) 최솟값과 최댓값을 동시에 지정하면 포함배제 ★4."
```

### 연습문제 STEP 2

```yaml
- id: GN-PROB-41-76
  page: 41
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["평가원 기출"]
  category_type: "연습문제"
  summary: |
    빨간색 카드 $4$ 장, 파란색 $2$ 장, 노란색 $1$ 장을 세 학생에게 남김없이 나누어 줄 때 세 가지 색을 모두 한 장 이상 받는 학생이 있도록 하는 경우의 수(같은 색끼리는 구별하지 않고, 못 받는 학생이 있어도 된다). 5지선다.
  category: "노란 카드를 받은 학생으로 조건을 좁힘 → 그 학생이 빨강·파랑도 받는 경우"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "노란 카드가 1장뿐이므로 「세 색을 모두 받은 학생」은 노란 카드를 받은 학생 하나뿐 — 전체 조건을 그 한 학생에 대한 조건으로 동치 변환(중복 계수 걱정이 사라짐)"
    - step: 2
      type: I-SC
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "그 학생이 빨강·파랑을 적어도 한 장씩 받는 경우를 직접 세는 대신 색마다 (전체 분배) − (그 학생이 0장) 여사건으로 계산하는 갈래를 선택"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "조건이 있는 중복조합의 수 — 여사건으로 세는 분배"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    「그런 학생이 있다」를 그대로 세면 중복 계수가 생기지만, 노란 카드가 1장이라는 점이 그 학생을 유일하게 만들어 문제를 한 학생 조건으로 바꿔 준다.
    그다음 빨강·파랑 각각에 대해 「그 학생이 0장인 경우」를 빼는 여사건이 빠른 갈래다.
    STEP 2 ★3 출발 · 통찰 2개(EQV d2 · SC d2) · 평가원 기출 → +1 → ★4.
  tier: star_4
  mechanism_primary: "노란 카드 주인 3가지 → 그 학생이 빨강 ≥1 (전체 − 0장) × 파랑 ≥1 (전체 − 0장) → 곱"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '③'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/41-76.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "색별 장수와 학생 수를 바꿀 수 있다. 제약: 한 색의 장수를 1로 유지해야 「세 색을 모두 받은 학생」이 유일해져 중복 보정이 필요 없다. 그 장수를 2 이상으로 올리면 두 학생이 동시에 조건을 만족할 수 있어 포함배제가 필요해진다(난이도 급상승)."
    creative: "(1) 노란 카드를 2장으로 늘리면 포함배제가 강제되어 ★5 급 (2) 「두 가지 색 이상을 받는 학생이 있도록」으로 바꾸면 조건이 여러 학생에 걸려 ★5 (3) 학생 수를 4명으로 늘리면 같은 골조에 수만 커져 ★4 유지 (4) 「모든 학생이 적어도 한 장」을 추가하면 조건 두 겹 ★5."
```

```yaml
- id: GN-PROB-41-77
  page: 41
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $(p+q+r+s)^6$ 의 전개식에서 $p$ 는 포함하지 않고 $r$ 는 포함하는 서로 다른 항의 개수.
  category: "p 제외 → q, r, s 의 6차 항 → r 없는 것을 빼기"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "항을 지수 순서쌍으로 옮겨 「합이 6인 음이 아닌 정수해」의 개수 문제로 전환"
    - step: 2
      type: I-SC
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「r 를 포함」을 r 의 지수 1 이상으로 보아 치환하는 갈래와, q·r·s 전체에서 r 가 없는 경우를 빼는 여사건 갈래 중 택일 — 두 갈래 모두 통하지만 포함·미포함이 섞여 있어 순서를 잘못 잡으면 꼬인다"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "항의 개수 — 특정 문자 포함·미포함"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    p 를 빼면 문자는 q, r, s 세 개이고 항의 개수는 3H6 = 8C2 = 28. 여기서 r 가 없는 항(2H6 = 7)을 빼면 된다.
    r 의 지수에 1을 미리 배정해 3H5 로 세도 같은 값이다. 포함과 미포함이 한 문장에 섞여 있어 Mₜ=2.
    STEP 2 ★3 출발 · 통찰 2개지만 각 단계가 한 줄 · M_total 7 → ★3 유지.
  tier: star_3
  mechanism_primary: "p 제외 → 3H6 → r 없는 2H6 빼기"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$21$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/41-77.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "문자 수와 지수를 바꿀 수 있다. 제약: 제외하는 문자와 포함하는 문자가 서로 달라야 하고, 지수가 문자 수보다 작으면 답이 0 에 가까워지므로 지수를 5~8 로 둔다."
    creative: "(1) 포함해야 할 문자를 둘로 늘리면 포함배제 ★4 (2) 「r 의 차수가 2 이상」으로 바꾸면 치환만 커져 ★3 유지 (3) 계수까지 함께 묻으면 다항정리 결합 ★4 (4) 두 다항식의 곱에서 같은 조건을 묻게 하면 문자 겹침 판정이 붙어 ★4."
```

```yaml
- id: GN-PROB-42-78
  page: 42
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    방정식 $x+y+z+2w=6$ 의 음이 아닌 정수인 해의 개수.
  category: "계수 2인 w 의 값으로 분기 → 각 경우 3H(6-2w) 합산"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "계수가 1이 아닌 변수 때문에 중복조합 공식을 한 번에 쓸 수 없음을 알고 w=0,1,2,3 으로 경우를 나눈 뒤 각각 3H(6−2w) 를 더함"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "방정식의 해의 개수 — 계수가 다른 변수(경우 분기)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    2w 가 공식 적용을 막는다는 것을 알아차리는 것이 전부다. w 의 범위는 2w ≤ 6 에서 0~3 으로 닫히고,
    각 경우 x+y+z 의 값이 6, 4, 2, 0 이므로 3H6+3H4+3H2+3H0 을 더한다.
    STEP 2 ★3 출발 · 통찰 1 d2 · M_total 7 → ★3.
  tier: star_3
  mechanism_primary: "w = 0,1,2,3 분기 → 각각 x+y+z = 6,4,2,0 → 3Hk 합산"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$50$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/42-78.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수(2, 3)와 우변, 변수 개수를 바꿀 수 있다. 제약: 분기 수는 (우변)/(계수)+1 이므로 우변을 계수의 4배 이하로 두어야 분기가 5개를 넘지 않는다. 계수를 3으로 올리면 분기가 줄고 계산이 가벼워진다."
    creative: "(1) 계수가 2인 변수를 둘로 늘리면 이중 분기 ★4 (2) 자연수해로 바꾸면 치환 + 분기가 겹쳐 ★4 (3) 부등식 2w + x+y+z ≤ 6 으로 바꾸면 여유변수 + 분기 ★4 (4) 우변을 미지수로 두고 해의 개수를 주면 역방향 ★4."
```

```yaml
- id: GN-PROB-42-79
  page: 42
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    ㈎ $x+y+z+w=12$ ㈏ 네 수 중 $2$ 개는 $3$ 으로 나눈 나머지가 $1$, $2$ 개는 나머지가 $2$ 인 자연수 순서쌍 $(x,\,y,\,z,\,w)$ 의 개수.
  category: "나머지별 자리 선택 4C2 → 3k+1, 3k+2 로 매개변수화 → 몫의 합 방정식"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "나머지 조건을 x = 3a+1, y = 3b+2 꼴로 매개변수화해 합 조건을 몫들의 방정식으로 바꿈 — 상수항 합 6 을 빼면 3(몫의 합) = 6"
    - step: 2
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "어느 두 자리가 나머지 1인지 고르는 4C2 와 몫 방정식의 해의 개수를 곱해 두 조건을 하나의 계산으로 결합"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "조건을 만족시키는 순서쌍의 개수 — 나머지 조건 매개변수화"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    나머지 조건을 3으로 나눈 몫으로 옮기는 순간 합 12 가 몫의 합 2 로 줄고 4H2 = 6 이 남는다. 여기에 자리 선택 4C2 = 6 을 곱한다.
    ㈏ 가 「어느 자리인지」를 정해 주지 않는다는 점을 놓치면 자리 선택 인수를 빠뜨린다.
    STEP 2 ★3 출발 · 통찰 2개(d2 + d1) · M_total 9 → ★3 유지(+1 은 적용하지 않음 · 각 단계가 표준 도구).
  tier: star_3
  mechanism_primary: "나머지 1인 자리 4C2 → x=3a+1·y=3b+2 매개변수화 → 몫의 합 2 → 4H2"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$60$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/42-79.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "합과 나눗수, 나머지 조합을 바꿀 수 있다. 제약: (합 − 상수항 합) 이 나눗수의 배수여야 몫의 합이 정수가 된다(12 − 6 = 6 = 3·2). 몫의 합을 2~3 으로 두면 답이 두 자리."
    creative: "(1) 나머지 종류를 셋으로 늘리면 자리 선택이 다항계수가 되어 ★4 (2) 「2개는 홀수, 2개는 짝수」로 바꾸면 매개변수화가 가벼워져 ★3 유지 (3) 자리를 지정(x, y 가 나머지 1)하면 선택 인수가 사라져 ★2 (4) 나머지 조건을 부등식과 섞으면 ★4."
```

```yaml
- id: GN-PROB-42-80
  page: 42
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $X=\{1,\dots,6\}$ 에 대하여 ㈎ $1\le a<b\le 3$ 이면 $2\le f(a)\le f(b)$ ㈏ $4\le a<b\le 6$ 이면 $f(a)\le f(b)\le 4$ 인 함수 $f:X\to X$ 의 개수.
  category: "앞 세 값은 2 이상 비감소 5H3 · 뒤 세 값은 4 이하 비감소 4H3 → 곱"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "2 ≤ f(a) ≤ f(b) 는 f(a) 뿐 아니라 f(b) 도 2 이상, f(a) ≤ f(b) ≤ 4 는 f(a) 도 4 이하라는 뜻 — 조건을 「세 값 모두의 범위 + 비감소」로 동치 변환"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "각 덩어리의 비감소 세 값을 축소된 후보 집합(5개·4개)에서 중복을 허용해 3개 뽑는 것으로 전환하고, 두 덩어리가 독립이므로 곱함"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "함수의 개수 — 구간별 대소·범위 조건"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    조건문의 범위 표기를 정확히 읽어야 후보 집합이 {2,…,6} 과 {1,…,4} 로 줄어든다. 각각 5H3 = 7C3, 4H3 = 6C3 이고 정의역이 겹치지 않아 곱한다.
    경계를 f(a) 에만 적용하는 오독이 가장 흔한 실패라 Mₜ=2.
    STEP 2 ★3 출발 · 통찰 2개(EQV d2 · RT d2) · M_total 9 → +1 → ★4(저노출 유형 RT 포함).
  tier: star_4
  mechanism_primary: "㈎ → f(1)≤f(2)≤f(3), 모두 2 이상 → 5H3 · ㈏ → f(4)≤f(5)≤f(6), 모두 4 이하 → 4H3 → 곱"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$700$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/42-80.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "|X|, 두 구간의 크기, 범위 경계(2, 4)를 바꿀 수 있다. 제약: 두 구간이 정의역을 겹치지 않고 덮어야 곱의 법칙이 성립한다. 경계를 바꾸면 후보 집합 크기 m 이 바뀌고 답은 mH3 이므로 m 을 4~5 로 두면 답이 세 자리."
    creative: "(1) 두 구간이 한 원소를 공유하게 만들면 그 값에서 두 조건이 맞물려 경우 분기 ★5 (2) 한쪽을 강부등식으로 바꾸면 조합이 되어 ★4 유지 (3) 정의역을 세 구간으로 쪼개면 인수 3개 ★4 (4) 치역 조건을 추가하면 포함배제 ★5."
```

### 연습문제 실력 UP

```yaml
- id: GN-PROB-42-81
  page: 42
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    흰 공 $3$ 개와 검은 공 $6$ 개를 세 상자 $\mathrm{A}$, $\mathrm{B}$, $\mathrm{C}$ 에 나누어 넣을 때 각 상자에 공이 $2$ 개 이상씩 들어가는 경우의 수(같은 색끼리는 구별하지 않는다).
  category: "색별 분배는 독립이나 하한은 색 합계에 걸림 → 여사건·포함배제"
  M: {s: 3, k: 3, a: 1, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-SC
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "하한이 「색별」이 아니라 「상자별 총 개수」에 걸려 있어 색마다 따로 치환할 수 없음을 알고, 전체 분배(3H3 × 3H6)에서 조건 위반을 빼는 여사건 갈래를 선택"
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "한 상자가 위반하는 경우를 총 0개와 총 1개(흰 1개 또는 검 1개)로 나누어 세고, 두 상자가 동시에 위반하는 경우를 포함배제로 되살림"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "조건이 있는 중복조합의 수 — 두 종류 공 · 상자별 하한"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    두 색을 따로 나누면 곱의 법칙이 통하지만, 하한이 색 합계에 걸리는 순간 인수 분해가 깨진다. 그래서 전체에서 「어떤 상자의 공이 1개 이하」인 경우를 빼는 여사건이 정석이다.
    위반 상자의 총 개수가 0 인지 1 인지, 1 이면 흰지 검은지까지 갈라야 하고 두 상자 동시 위반도 되살려야 한다.
    실력 UP ★4 출발 · 통찰 2개(SC d2 · MI d2) → ★4 유지.
  tier: star_4
  mechanism_primary: "전체 3H3 × 3H6 → 상자별 총 개수 ≤ 1 인 경우를 포함배제로 제외"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$88$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/42-81.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "색별 공의 개수와 상자 수, 하한을 바꿀 수 있다. 제약: (총 공의 수) ≥ (상자 수 × 하한) 이어야 하고, 여유가 클수록 위반 경우가 줄어 계산이 가벼워진다. 하한을 1 로 낮추면 위반 경우가 「총 0개」뿐이라 난이도가 한 단 내려간다."
    creative: "(1) 하한을 1 로 낮추면 포함배제가 한 겹이라 ★3 (2) 색을 세 가지로 늘리면 여사건의 분기가 늘어 ★5 (3) 「각 상자에 흰 공도 검은 공도 적어도 하나」로 바꾸면 색별 치환으로 분해돼 오히려 ★3 (4) 상자를 구별하지 않으면 중복 보정이 필요해 ★5."
```

```yaml
- id: GN-PROB-42-82
  page: 42
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: ["평가원 기출"]
  category_type: "연습문제"
  summary: |
    ㈎ $a+b+c+d=12$ ㈏ $a\ne 2$ 이고 $a+b+c\ne 10$ 인 음이 아닌 정수 순서쌍 $(a,\,b,\,c,\,d)$ 의 개수.
  category: "전체에서 두 제외 조건을 포함배제로 빼기"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-SC
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "≠ 조건 두 개를 직접 만족시키는 경우를 세는 대신 전체 4H12 에서 a=2 인 경우와 a+b+c=10 인 경우를 빼고 겹침을 되살리는 여사건·포함배제 갈래를 선택"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "㈎ 아래에서 a+b+c=10 은 d=2 와 같은 조건 — 세 변수에 걸린 합 조건을 한 변수의 값 조건으로 바꿔 두 제외 조건을 같은 모양으로 맞춤"
    - step: 3
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 제외 조건의 교집합을 a=2 이고 d=2, 즉 b+c=8 로 결합해 겹침을 한 번에 계산"
  insight_count: 3
  depth_score: 1.67
  type_id: null
  type_hint: "방정식의 해의 개수 — 두 제외 조건의 포함배제"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    전체는 4H12 = 15C3. a=2 이면 b+c+d=10 이고, a+b+c=10 이면 d=2 이므로 두 제외 집합의 크기는 같은 3H10 이다.
    교집합은 a=2, d=2 → b+c=8 로 2H8. 포함배제로 전체 − 두 개 + 겹침.
    실력 UP + 평가원 기출 ★4 출발 · 통찰 3개 · M_total 9 → ★4. [분류 이슈] 통찰 3개 + I-SC 로 ★5 후보이나 조합이 표준 포함배제라 novelty_score 0 → ★4 유지.
  tier: star_4
  mechanism_primary: "전체 4H12 − (a=2 → 3H10) − (d=2 → 3H10) + (a=2 ∧ d=2 → 2H8)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$332$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/42-82.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "합 12 와 제외값(2, 10)을 바꿀 수 있다. 제약: a+b+c 의 제외값은 (합 − d값) 형태라야 d 에 대한 단일 조건으로 바뀐다. 제외값이 합보다 크면 그 집합이 비어 포함배제가 무의미해지므로 합보다 작게 둔다."
    creative: "(1) 제외 조건을 셋으로 늘리면 포함배제 3항 ★5 (2) ≠ 를 ≤ 로 바꾸면 여유변수형이 되어 ★3 (3) 변수 하나에 상한을 추가하면 포함배제와 치환이 겹쳐 ★5 (4) 「a ≠ b」처럼 변수 사이의 조건으로 바꾸면 대칭성 논의가 필요해 ★5."
```

## 표본 판정 요약 (36문)

- ★ 분포: ★1 4 · ★2 16 · ★3 12 · ★4 4 · ★5 0
- 통찰형 23 · 절차형 13 · premium 0
- 통찰 유형 분포(라벨 35개): I-RT 12 · I-EQV 11 · I-CON 4 · I-SC 4 · I-MI 3 · I-BW 1 (I-XU·I-PD·I-SYM·I-VF 0)
- type_hint 상위: 「조건이 있는 중복조합의 수」 7 · 「중복조합의 수(기본 분배)」 6 · 「함수의 개수」 5 · 「방정식의 해의 개수」 5 · 「항의 개수」 4 (그 밖에 「순서쌍의 개수」 4 · 「nHr 값 계산」 3 · 「부등식의 해의 개수」 2)
- 그림: 0문 (이 범위에는 그림 문항이 없다)
- 구역별 ★ 중앙값: 익히기 ★1 · 필수·발전 예제 ★2 · STEP 1 ★2.5 · STEP 2 ★3 · 실력 UP ★4

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-PROB-36-62 | 벤더는 필수 예제의 확인체크(★2 출발)이나 앞 분배 결과가 뒤 조건을 정하는 2단 종속 구조·M_total 8 → ★3 으로 올림 | ★2 / ★3 |
| GN-PROB-40-70 | 발전 구역 확인체크(★3 출발)이지만 전환 한 번 뒤 6H3 한 줄 → 계산량만 보면 ★2 | ★2 / ★3 |
| GN-PROB-41-74 | STEP 1(★2 출발)이나 자연수 치환 + 여유변수 두 변환이 겹침 → ★3 | ★2 / ★3 |
| GN-PROB-41-75 | STEP 1(★2 출발)이나 「최솟값 = f(1)」 동치 변환 + 중복조합 전환 두 겹 → ★3 | ★2 / ★3 |
| GN-PROB-42-82 | 통찰 3개 + I-SC 로 §2.13 ★5 자격은 충족하나 조합이 표준 포함배제라 §2.14 참신도 0 → ★4 유지 | ★4 / ★5 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위에서 반복된 type_hint 는 ① 중복조합의 수(기본 분배·선택) ② 조건이 있는 중복조합의 수(하한·상한) ③ 방정식/부등식의 해의 개수 ④ 항의 개수 ⑤ 함수의 개수 ⑥ 조건을 만족시키는 순서쌍의 개수 여섯 갈래다. ①②③ 은 같은 골조(음이 아닌 정수해)를 말만 바꾼 것이므로 **카탈로그에서는 하나의 기본 유형 + 조건 변형(하한 치환 / 상한 여사건 / 여유변수 / 계수 분기)으로 묶는 편이 낫다**.
- 반대로 **따로 세워야 할 유형**은 ④ 항의 개수(전개식 ↔ 지수 순서쌍 전환이 별도 진입 장벽)와 ⑤ 함수의 개수(대소 조건의 강약이 순열·조합·중복조합으로 갈리는 대비가 유형의 본질)다. ⑤ 는 다시 「단순 비감소·비증가」(★2~3)와 「구간 분할·치역 조건이 붙은 것」(★4)으로 base ★ 가 달라 두 슬롯이 필요하다.
- 하한 치환(적어도 k개씩)은 이 단원의 표준 절차이므로 카탈로그에서 통찰로 치지 말고 base ★ 안에 흡수하는 편이 일관된다. 반대로 **여사건·포함배제(41-76, 42-81, 42-82)와 계수·나머지 분기(42-78, 42-79)** 는 ★4 대의 변별 슬롯 자격이 있으므로 별도 유형으로 등재할 만하다.
- 이 범위에는 I-XU·I-PD·I-SYM·I-VF 라벨이 하나도 없다. ★5 슬롯을 만들려면 다른 단원(이항정리·확률)과의 결합이나 사후 기각이 필요한 설정을 새로 설계해야 한다.
