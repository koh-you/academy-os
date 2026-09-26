---
name: mechanism-데이터-GN-CM2-05
description: 개념원리 공통수학2 05 직선의 위치 관계(1/1 · 49~55쪽 28문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학2 (22개정) · 전사본 latex-bank/gn-cm2
  section: 05 직선의 위치 관계
  unit_code: CM2-05
  part: "1/1"
  extract_range: "49~55쪽 · 49-98~55-121"
  total_problems: 28
  unit_total: 28
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). insight_type 은 insights 가 비면 절차형, 하나라도 있으면 통찰형. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm2/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm2/items/<id>.tex
  image_source: latex-bank/gn-cm2/figures/ (crops.json)
---

# 개념원리 공통수학2 · 05 직선의 위치 관계 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 공통수학2 49~55쪽, 단원 05 「직선의 위치 관계」 28문항 전수를 다룬다. 구역은 전사본 group 순서대로 「개념원리 익히기」 3문 · 「필수·발전 예제」 12문(필수 예제 3 · 발전 예제 1 · 확인체크 8) · 「연습문제 STEP 1」 6문 · 「연습문제 STEP 2」 5문 · 「연습문제 실력 UP」 2문이다.

벤더 난이도 신호는 구역과 태그다. 「개념원리 익히기」(통번호 · 확인체크)는 개념 확인 → ★1 출발, 「필수 예제」(쪽-eN · tag 필수) → ★2 출발, 「발전 예제」(tag 발전) → ★3 출발, 예제 뒤에 붙는 확인체크는 앞선 예제의 출발점을 그대로 따랐다(필수 뒤 → ★2 · 발전 뒤 → ★3). 연습문제는 STEP 1 → ★2 · STEP 2 → ★3 · 실력 UP → ★4 출발이며 「교육청 기출」 태그는 통찰 유무로 +0~1 판단했다. 출발점에서 M_total·통찰로 ±1 조정했고 라벨을 억지로 맞추지 않았다.

이 단원의 도구는 좁다(평행·수직의 계수 조건 · 한 점을 지나고 평행/수직인 직선 · 수직이등분선 · 세 직선의 위치 관계). 그래서 변별은 대부분 「조건을 어떤 대수식으로 옮기는가」와 「해 중 어느 것을 기각하는가」에서 생긴다. 이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-CM2-49-98
  page: 49
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑵ 두 직선이 평행하도록 하는 상수 a 의 값을 모두 구하기. ⑴ 기울기 꼴 두 식, ⑵ 일반형 ax+4y+1=0 과 x+ay-3=0.
  category: "평행 조건(기울기 같고 절편 다름 · 계수비) → a 에 대한 방정식"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 직선의 평행 조건으로 미정계수 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴ 기울기 비교 한 줄. ⑵ 계수비 a/1 = 4/a 에서 a 제곱이 4, 상수항 비가 달라 둘 다 살아남는다.
    개념 확인 구역·통찰 없음·M_total 6 → ★1 유지. 일치 배제 확인이 한 번 들어가 Mₜ 1.
  tier: star_1
  mechanism_primary: "평행 조건 → 계수비 등식 → a 값 + 일치 여부 확인"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $-3$ ⑵ $-2$, $2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/49-98.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 기울기(-3)와 ⑵ 의 y 계수(4)·상수항을 바꿀 수 있음. 제약: ⑵ 는 a 제곱이 완전제곱수가 되게 해야 답이 유리수이고, 상수항 비가 계수비와 같아지면 일치가 되어 답이 하나 줄어든다."
    creative: "(1) 일치 조건으로 바꾸기(★1 유지) (2) 한 근이 일치가 되도록 상수항을 조정해 기각 단계를 넣기(I-VF d1 · ★2) (3) 평행하지 않을 조건(a 의 범위)을 묻기(★2)."
```

```yaml
- id: GN-CM2-49-99
  page: 49
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑵ 두 직선이 일치하도록 하는 상수 a, b 의 값 구하기. ⑴ 기울기 꼴, ⑵ 일반형 ax+3y-2=0 과 3x+by+6=0.
  category: "일치 조건(세 계수비가 모두 같음) → a, b 결정"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 직선의 일치 조건으로 미정계수 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑵ 는 상수항 비 -2/6 을 먼저 잡으면 a, b 가 한 줄에 나온다. 평행과 달리 배제 단계가 없다.
    개념 확인 구역·통찰 없음·M_total 6 → ★1.
  tier: star_1
  mechanism_primary: "일치 조건 → 상수항 비로 비례상수 확정 → a, b 대입"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $a=-1$, $b=5$ ⑵ $a=-1$, $b=-9$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/49-99.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑵ 의 상수항(-2, 6)과 확정된 계수(3)를 바꿀 수 있음. 제약: 상수항 비가 정수나 간단한 분수가 되어야 a, b 가 정수로 떨어진다."
    creative: "(1) 평행 조건으로 바꿔 일치를 배제하게 하기(★1~2) (2) a, b 중 하나만 주고 나머지를 묻기(★1) (3) 세 직선이 모두 일치할 조건으로 확장(★2)."
```

```yaml
- id: GN-CM2-49-100
  page: 49
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑵ 두 직선이 수직이도록 하는 상수 a 의 값을 모두 구하기. ⑵ 는 (a-2)x+3y-1=0 과 ax-y+3=0.
  category: "수직 조건(기울기 곱 -1 · 계수 내적 0) → a 이차방정식"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 직선의 수직 조건으로 미정계수 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑵ 는 계수끼리의 곱의 합 (a-2)a + 3(-1) = 0 으로 놓으면 a 제곱 - 2a - 3 = 0, 두 근 모두 유효하다.
    개념 확인 구역·통찰 없음·M_total 6 → ★1. 이차 인수분해는 부담이 아니라 Mₖ 1.
  tier: star_1
  mechanism_primary: "수직 조건 → 계수 곱의 합 0 → a 이차방정식 풀이"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $-\dfrac{1}{4}$ ⑵ $-1$, $3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/49-100.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 기울기(4)와 ⑵ 의 계수(a-2, 3, a, -1)를 바꿀 수 있음. 제약: ⑵ 는 판별식이 완전제곱이어야 근이 정수로 떨어지고, 근 중 하나가 두 직선을 같게 만들지 않는지 확인해야 한다."
    creative: "(1) 근 두 개의 합·곱을 묻기(★2) (2) 수직이 되지 않을 a 의 범위(★2) (3) 수직인 동시에 한 점을 지나는 조건을 추가(★2~3 · 50-103 골조)."
```

### 필수·발전 예제

```yaml
- id: GN-CM2-50-e10
  page: 50
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑵ 두 직선 x+ay+1=0, ax+(a+2)y+2=0 이 ⑴ 평행할 때, ⑵ 수직일 때(a 는 0 이 아님) 상수 a 의 값 구하기.
  category: "평행·수직 조건 → a 이차방정식 → 일치·제외 조건으로 근 기각"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "평행 조건에서 나온 두 근 중 상수항 비까지 같아져 일치가 되는 근을 원 조건에 되돌려 기각해야 답이 하나로 확정된다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 직선의 평행·수직 조건 (일치 배제 포함)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 계수비 1/a = a/(a+2) 에서 a 제곱 - a - 2 = 0, 두 근 중 하나는 상수항 비까지 같아 일치가 되어 기각된다.
    ⑵ 는 계수 곱의 합 a + a(a+2) = 0 에서 a(a+3) = 0, 단서 a 가 0 이 아님으로 하나가 걸러진다.
    기각이 풀이의 본질이라 I-VF d1. 필수 예제 출발 ★2 · 통찰 1개 d1 → ★2 유지. 배제 조건 두 종류(일치 · a 제외)로 Mₜ 2.
  tier: star_2
  mechanism_primary: "평행/수직 계수 조건 → a 이차방정식 → 일치 근과 제외값 기각 → 유일한 a"
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '⑴ $-1$ ⑵ $-3$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/50-e10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "y 계수의 꼴(a+2)과 상수항(1, 2)을 바꿀 수 있음. 제약: 평행에서 나온 두 근 중 정확히 하나가 일치가 되도록 상수항 비를 맞춰야 기각 단계가 살아 있고, 아니면 통찰이 사라져 ★1~2 절차형이 된다."
    creative: "(1) 두 근 모두 유효하게 만들어 절차형으로 낮추기(★1~2) (2) 평행·수직 어느 쪽도 아닐 a 의 범위를 묻기(★3) (3) 세 번째 직선을 더해 세 직선의 위치 관계로 확장(★3 · 53-e13 골조)."
```

```yaml
- id: GN-CM2-50-101
  page: 50
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 직선 (a+1)x+y-1=0, 2x-(a-2)y-1=0 이 평행할 때 상수 a 의 값 구하기.
  category: "평행 계수비 → a 이차방정식 → 일치가 되는 근 기각"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "계수비에서 얻은 두 근 중 상수항 비까지 같아지는 근이 일치라 기각되어야 답이 하나가 된다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 직선의 평행 조건 (일치 배제 포함)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (a+1)/2 = 1/(-(a-2)) 에서 a 제곱 - a = 0, 두 근 중 하나는 세 계수비가 모두 1 이 되어 일치로 기각된다.
    앞 필수 예제 ⑴ 과 같은 골조의 확인체크. 출발 ★2 · I-VF d1 → ★2 유지.
  tier: star_2
  mechanism_primary: "평행 계수비 → a 이차방정식 → 상수항 비로 일치 근 기각"
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '$0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/50-101.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 꼴(a+1, a-2)과 상수항(-1, -1)을 바꿀 수 있음. 제약: 상수항을 서로 다른 비로 두면 기각 단계가 사라지고 답이 두 개가 된다."
    creative: "(1) 수직 조건으로 바꾸기(기각 없음 · ★1~2) (2) 평행하지 않을 a 의 조건(★2) (3) 두 직선 사이의 위치 관계를 a 의 값에 따라 분류하게 하기(I-MI d2 · ★3)."
```

```yaml
- id: GN-CM2-50-102
  page: 50
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    직선 ax-6y=5 가 x-2y=3 과 평행하고 2x-by+1=0 과 수직일 때 a+b 의 값 구하기.
  category: "평행으로 a 확정 → 확정된 기울기로 수직 조건 → b"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "한 직선에 평행하고 다른 직선에 수직인 직선의 미정계수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    평행 조건에서 a 를 먼저 확정한 뒤 그 기울기로 수직 조건을 세우는 순서만 지키면 각 단계는 한 줄이다.
    두 조건이지만 순차 적용이라 통찰 없음. 확인체크 출발 ★2 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "평행 계수비 → a 확정 → 수직 계수 조건 → b → a+b"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/50-102.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준 직선의 계수(1, -2, 3)와 -6, 2 를 바꿀 수 있음. 제약: 평행에서 나온 a 가 정수여야 수직 조건의 b 도 정수로 떨어진다."
    creative: "(1) a, b 의 곱이나 ab 를 묻기(★2 유지) (2) 평행·수직 대상을 바꿔 순서를 뒤집기(★2) (3) 세 직선이 한 점에서 만난다는 조건을 더해 교점 계산을 추가(★3)."
```

```yaml
- id: GN-CM2-50-103
  page: 50
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 직선 (a-2)x+y+1=0 과 ax-3y+b=0 이 점 (-2, c) 에서 수직으로 만날 때(a 는 양수) a+b+c 의 값 구하기.
  category: "수직 조건으로 a → 교점을 각 직선에 대입해 c, b"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 직선이 주어진 점에서 수직으로 만날 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    수직 조건 (a-2)a - 3 = 0 의 두 근 중 a 가 양수라는 단서로 하나가 걸러지고, 그 뒤 교점을 두 직선에 차례로 대입한다.
    기각이 명시 단서라 통찰로 세지 않음. 확인체크 출발 ★2 · M_total 7 → ★2 유지. 대입이 두 번이라 Mₖ 2.
  tier: star_2
  mechanism_primary: "수직 계수 조건 → a(양수 단서로 선택) → 점 대입으로 c → 점 대입으로 b"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$13$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/50-103.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "교점의 x 좌표(-2)와 계수 -3, 상수항 1 을 바꿀 수 있음. 제약: 수직 조건의 이차식이 정수근 두 개를 갖고 그중 하나만 양수여야 단서가 작동한다."
    creative: "(1) a 가 양수라는 단서를 빼고 두 경우를 모두 구하게 하기(I-MI d1 · ★3) (2) 교점을 미지수 (p, q) 로 두고 p+q 를 묻기(★3) (3) 교점이 x 축 위에 있다는 조건으로 바꾸기(★2~3 · 54-115 골조)."
```

```yaml
- id: GN-CM2-51-e11
  page: 51
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ 두 점 (2, -1), (4, 3) 을 지나는 직선에 평행하고 x 절편이 4 인 직선의 방정식. ⑵ 점 (-1, 2) 를 지나고 직선 3x-2y+4=0 에 수직인 직선의 방정식.
  category: "기준 기울기 구하기 → 평행/수직으로 기울기 변환 → 점과 기울기로 직선식"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "한 직선에 평행 또는 수직인 직선의 방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 두 점의 기울기 2 를 그대로 쓰고 x 절편 4 를 지나는 점으로 본다. ⑵ 기울기의 음의 역수를 쓴다.
    단계는 짧지만 이 단원 모든 작도형 문항의 기준 골조라 필수 예제 출발 ★2 를 유지했다(통찰 0 · M_total 5 로 -1 후보이나 벤더 기준 예제라 내리지 않음).
  tier: star_2
  mechanism_primary: "기준 직선의 기울기 → 평행이면 그대로 · 수직이면 음의 역수 → 지나는 점 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $y=2x-8$ ⑵ $y=-\dfrac{2}{3}x+\dfrac{4}{3}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/51-e11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 점의 좌표와 x 절편 4, 기준 직선의 계수(3, -2, 4)를 바꿀 수 있음. 제약: ⑵ 는 기울기의 음의 역수가 분수라 지나는 점을 분모의 배수로 잡아야 답이 깔끔하다."
    creative: "(1) x 절편 대신 y 절편이나 특정 점을 지나게 하기(★2 유지) (2) 두 점을 지나는 직선에 수직이고 그 선분을 이등분하게 하면 수직이등분선(★2 · 52-e12) (3) 구한 직선이 좌표축과 만드는 넓이를 묻기(★2~3 · 54-113 골조)."
```

```yaml
- id: GN-CM2-51-104
  page: 51
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    직선 y=4x-12 에 평행하고 점 (-2, 5) 를 지나는 직선이 점 (6, k) 를 지날 때 k 의 값 구하기.
  category: "평행 기울기 → 점기울기 직선식 → 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "한 직선에 평행한 직선 위의 점"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    기울기를 그대로 가져와 점기울기 꼴을 쓰고 x 에 6 을 넣으면 끝난다. 세 단계 안쪽.
    확인체크 출발 ★2 이나 통찰 0 · M_total 4 로 -1 적용 → ★1.
  tier: star_1
  mechanism_primary: "평행 → 기울기 동일 → 점기울기 직선식 → x 대입"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$37$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/51-104.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기울기 4, 지나는 점 (-2, 5), 묻는 x 좌표 6 을 바꿀 수 있음. 제약: 기울기가 정수면 k 도 정수."
    creative: "(1) 평행 대신 수직으로 바꿔 음의 역수를 쓰게 하기(★1~2) (2) k 대신 x 절편·y 절편을 묻기(★2) (3) 두 직선 사이 거리를 묻는 형태로 확장하면 다음 단원 도구가 필요(★3)."
```

```yaml
- id: GN-CM2-51-105
  page: 51
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 점 (1, 3), (5, -7) 을 이은 선분의 중점을 지나고 직선 3x+5y-12=0 에 수직인 직선의 방정식 구하기.
  category: "중점 공식 → 수직 기울기(음의 역수) → 점기울기 직선식"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "선분의 중점을 지나고 주어진 직선에 수직인 직선"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    중점과 수직 기울기를 각각 구해 합치는 2도구 문항. 어느 쪽도 어렵지 않지만 순서가 필요하다.
    확인체크 출발 ★2 · 통찰 0 · M_total 5 이나 도구가 둘이라 -1 하지 않고 ★2 유지.
  tier: star_2
  mechanism_primary: "중점 좌표 → 기준 직선 기울기의 음의 역수 → 점기울기 직선식"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$y=\dfrac{5}{3}x-7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/51-105.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 점의 좌표와 기준 직선의 계수(3, 5, -12)를 바꿀 수 있음. 제약: 중점이 정수 좌표가 되려면 두 점의 좌표 합이 짝수여야 하고, 수직 기울기의 분모가 중점 좌표와 약분되면 답이 깔끔하다."
    creative: "(1) 중점 대신 내분점(2:1)으로 바꾸기(★2 · 54-113 골조) (2) 기준 직선을 두 점을 잇는 직선 자신으로 바꾸면 수직이등분선(★2) (3) 구한 직선이 특정 점을 지나도록 미정계수를 넣기(★3)."
```

```yaml
- id: GN-CM2-52-e12
  page: 52
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    두 점 A(-1, 3), B(3, -5) 를 이은 선분 AB 의 수직이등분선의 방정식이 x+ay+b=0 일 때 ab 의 값 구하기.
  category: "수직이등분선 = 중점 통과 + AB 에 수직 → 일반형 계수 비교"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "선분의 수직이등분선의 방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    중점과 AB 기울기의 음의 역수로 직선을 세운 뒤 x 계수가 1 인 일반형으로 맞춰 a, b 를 읽는다.
    수직이등분선은 이 단원의 표준 명명 도구라 통찰로 세지 않음. 필수 예제 출발 ★2 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "중점 + AB 수직 기울기 → 직선식 → x 계수 1 인 일반형으로 정리 → a, b"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$6$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/52-e12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A, B 의 좌표를 바꿀 수 있음. 제약: 중점이 정수이고 AB 기울기가 정수여야 x 계수 1 로 맞춘 일반형의 a, b 가 정수로 떨어진다."
    creative: "(1) 수직이등분선이 지나는 점을 묻기(★2 · 52-106) (2) 수직이등분선을 주고 끝점을 역으로 묻기(I-BW d2 · ★3 · 55-117) (3) 두 선분의 수직이등분선 교점(외심)으로 확장(★3~4)."
```

```yaml
- id: GN-CM2-52-106
  page: 52
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 점 A(-1, 2), B(5, -4) 를 이은 선분 AB 의 수직이등분선이 점 (a, -2) 를 지날 때 a 의 값 구하기.
  category: "수직이등분선 세우기 → 지나는 점 대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수직이등분선 위의 점"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    중점 (2, -1), AB 기울기 -1 이라 수직 기울기 1 로 직선이 바로 나오고 y 에 -2 를 대입하면 끝난다.
    확인체크 출발 ★2 · 통찰 0 · M_total 5 → 2도구 문항이라 ★2 유지.
  tier: star_2
  mechanism_primary: "중점 + 수직 기울기 → 수직이등분선 → 점 대입으로 a"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/52-106.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A, B 의 좌표와 대입할 y 좌표(-2)를 바꿀 수 있음. 제약: AB 기울기가 ±1 이면 수직 기울기도 정수라 계산이 짧아지고, 다른 값이면 분수 대입이 된다."
    creative: "(1) 수직이등분선이 x 축·y 축과 만나는 점을 묻기(★2) (2) AB 의 한 끝점을 미지수로 두기(I-BW d2 · ★3 · 52-107) (3) 점 (a, -2) 가 A, B 에서 같은 거리라는 표현으로 바꾸기(I-EQV d2 · ★3)."
```

```yaml
- id: GN-CM2-52-107
  page: 52
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 점 A(-5, -4), B(a, 8) 을 이은 선분 AB 의 수직이등분선의 방정식이 2x+3y+b=0 일 때 a-b 의 값 구하기.
  category: "수직이등분선의 기울기 역이용 → 끝점 a → 중점 대입 → b"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "수직이등분선이 결과로 주어져 있어 그 기울기의 음의 역수가 AB 의 기울기라는 역방향 관계로 끝점 B 의 좌표를 먼저 역추적한다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "수직이등분선이 주어질 때 선분의 끝점 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    주어진 직선의 기울기 -2/3 에서 AB 기울기 3/2 를 얻어 a 를 확정한 뒤, 중점을 그 직선에 대입해 b 를 얻는다.
    결과에서 원인을 되짚는 순서가 핵심이라 I-BW d1. 확인체크 출발 ★2 · 통찰 1개 d1 → ★2 유지.
  tier: star_2
  mechanism_primary: "주어진 수직이등분선 기울기 → AB 기울기(음의 역수) → a → 중점 대입 → b"
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '$7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/52-107.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A 의 좌표, B 의 y 좌표(8), 수직이등분선의 계수(2, 3)를 바꿀 수 있음. 제약: y 좌표 차가 수직이등분선 기울기의 분모·분자와 약분되어야 a 가 정수이고, 중점이 정수여야 b 가 정수다."
    creative: "(1) b 를 주고 a 를 묻는 방향으로 바꾸기(★2) (2) B 의 두 좌표를 모두 미지수로 두기(★3 · 55-117 골조) (3) 수직이등분선 대신 각의 이등분선으로 바꾸면 도구가 달라져 범위를 벗어남."
```

```yaml
- id: GN-CM2-53-e13
  page: 53
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["발전"]
  category_type: "발전 예제"
  summary: |
    세 직선 x-y=0, x+y=2, 5x-ky=15 가 삼각형을 이루지 않도록 하는 상수 k 의 값을 모두 구하기.
  category: "삼각형을 이루지 않음 → 두 직선 평행 또는 세 직선 공점 → 경우별 k"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "삼각형을 이루지 않는다는 기하 조건을 두 직선이 평행하다 또는 세 직선이 한 점에서 만난다는 대수 조건으로 옮긴다"
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "평행 상대가 두 가지이고 공점까지 더해 세 경우를 빠짐없이 따져야 답이 모두 나온다"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "세 직선이 삼각형을 이루지 않을 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    앞의 두 직선은 고정이고 세 번째 직선만 k 를 갖는다. 평행 두 경우는 기울기 비교, 공점은 고정 두 직선의 교점을 대입한다.
    조건 동치 변환과 경우 분기 두 단계로 통찰 2개(EQV·MI d2). 발전 예제 출발 ★3 · +1 후보이나 저노출 유형(SC·VF·SYM·XU·RT·PD·BW) 부재로 ★3 유지.
  tier: star_3
  mechanism_primary: "삼각형 아님 → 평행 2경우 + 공점 1경우 → 각 경우 k"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-10$, $-5$, $5$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/53-e13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "고정 두 직선의 계수와 5x-ky=15 의 5, 15 를 바꿀 수 있음. 제약: 고정 두 직선의 교점이 정수 좌표여야 공점 k 가 정수이고, 평행 두 경우의 k 가 서로 달라야 답이 세 개로 유지된다."
    creative: "(1) k 의 합이나 곱을 묻기(★3 유지 · 53-108 · 55-119) (2) 삼각형을 이루도록 하는 k 의 범위로 뒤집기(I-VF 성격 추가 · ★3~4) (3) 세 직선이 직각삼각형을 이루게 하기(수직 분기로 교체 · ★3 · 55-118)."
```

```yaml
- id: GN-CM2-53-108
  page: 53
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    세 직선 2x+y+1=0, x-y+2=0, ax-y=0 이 삼각형을 이루지 않도록 하는 모든 상수 a 의 값의 합 구하기.
  category: "삼각형을 이루지 않음 → 평행 2경우 + 공점 1경우 → a 값의 합"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "삼각형을 이루지 않는다를 평행 또는 공점이라는 대수 조건으로 옮긴다"
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "평행 상대 두 가지와 공점 한 가지를 모두 따져야 값의 합이 맞는다"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "세 직선이 삼각형을 이루지 않을 조건 (값의 합)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    세 번째 직선이 원점을 지나는 ax-y=0 이라 공점 경우는 고정 두 직선의 교점을 대입하면 바로 나온다.
    발전 예제 뒤 확인체크라 출발 ★3 · EQV·MI d2 두 개 → 저노출 유형 부재로 ★3 유지.
  tier: star_3
  mechanism_primary: "평행 2경우(기울기 비교) + 공점 1경우(교점 대입) → a 세 값의 합"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/53-108.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "고정 두 직선의 계수를 바꿀 수 있음. 제약: 교점이 정수 좌표여야 공점 a 가 유리수로 깔끔하고, 세 번째 직선을 ax-y=0 으로 두면 원점 통과가 고정된다."
    creative: "(1) 값의 곱을 묻기(★3 · 55-119) (2) 세 번째 직선에 상수항을 넣어 원점 통과를 풀기(경우 수 유지 · ★3) (3) 좌표평면이 몇 부분으로 나뉘는지로 묻기(I-RT d2 · ★3 · 54-114 골조)."
```

### 연습문제 STEP 1

```yaml
- id: GN-CM2-54-109
  page: 54
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    직선 x+ay+1=0 이 2x-by+1=0 과 수직이고 x-(b-3)y-1=0 과 평행할 때 a 제곱 + b 제곱의 값 구하기.
  category: "수직 조건과 평행 조건을 a, b 연립으로 결합 → 대칭식 값"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행·수직 두 조건을 동시에 만족하는 미정계수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    수직에서 ab 값, 평행에서 a 와 b 의 합 관계가 나와 a, b 가 서로 바뀐 두 쌍이 된다. 묻는 것이 대칭식이라 어느 쌍이든 값이 같다.
    두 조건의 순차 연립이라 표준 절차로 보고 통찰 없음. STEP 1 출발 ★2 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "수직 조건 → ab · 평행 조건 → a 와 b 의 관계 → 연립 → 대칭식 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/54-109.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 2, -1 과 (b-3) 의 상수 3 을 바꿀 수 있음. 제약: 연립 이차식의 두 근이 정수여야 하고, 묻는 식이 a 와 b 에 대칭이어야 두 쌍 중 어느 것을 골라도 답이 하나가 된다."
    creative: "(1) 비대칭식(a-b 나 a 만)을 묻게 해 어느 쌍인지 가리는 단서를 추가(I-VF d1 · ★3) (2) 평행 조건에 일치 배제를 넣기(★3) (3) 세 직선이 모두 한 점을 지날 조건으로 바꾸기(★3)."
```

```yaml
- id: GN-CM2-54-110
  page: 54
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    두 직선 2x+ay+3=0, bx+2y+c=0 이 점 (1, 1) 에서 수직으로 만날 때 abc 의 값 구하기.
  category: "교점 대입으로 a → 수직 조건으로 b → 교점 대입으로 c"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 직선이 주어진 점에서 수직으로 만날 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a 를 먼저 교점 대입으로 얻고, 그 값을 수직 조건에 넣어 b 를 얻고, 마지막에 c 를 대입으로 얻는 일방향 순서다.
    분기도 기각도 없어 통찰 없음. STEP 1 출발 ★2 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "점 (1,1) 대입 → a → 계수 곱의 합 0 → b → 점 대입 → c → abc"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$175$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/54-110.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "교점 좌표 (1, 1) 과 상수항 3 을 바꿀 수 있음. 제약: 교점을 정수로 두면 a, b, c 가 모두 정수로 떨어진다. 교점을 원점으로 두면 상수항이 0 이 되어 문항이 무너진다."
    creative: "(1) a+b+c 를 묻기(★2 유지) (2) 교점을 미지수로 두고 두 직선의 계수만 주기(★3) (3) 수직 대신 평행으로 바꿔 교점 조건을 모순으로 만들어 가능/불가능을 판정하게 하기(I-VF d2 · ★3)."
```

```yaml
- id: GN-CM2-54-111
  page: 54
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    두 직선 x-y+5=0, 2x-y+3=0 의 교점을 지나고 직선 3x-2y+1=0 과 평행한 직선이 y=ax+b 일 때 ab 의 값 구하기.
  category: "두 직선 연립 → 교점 → 평행 기울기 → 점기울기 직선식"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 직선의 교점을 지나고 주어진 직선에 평행한 직선"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    교점 구하기와 평행 기울기 가져오기 두 도구를 순서대로 쓴다. 각 단계는 한 줄.
    통찰 0 · M_total 5 로 -1 후보이나 2도구 조합이라 STEP 1 출발 ★2 를 유지했다.
  tier: star_2
  mechanism_primary: "두 직선 연립 → 교점 → 평행이므로 기울기 동일 → 점기울기 직선식 → a, b"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/54-111.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 직선의 계수와 기준 직선 3x-2y+1=0 을 바꿀 수 있음. 제약: 교점이 정수 좌표여야 b 가 깔끔하고, 기울기가 분수면 y 절편도 분수가 된다."
    creative: "(1) 평행 대신 수직으로 바꾸기(★2) (2) 교점을 지나는 직선을 직선족(두 식의 일차결합)으로 다루게 하기(I-RT d2 · ★3) (3) 구한 직선이 좌표축과 이루는 삼각형 넓이를 묻기(★3)."
```

```yaml
- id: GN-CM2-54-112
  page: 54
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제"
  summary: |
    점 (2, 5) 를 지나고 직선 3x+2y-4=0 에 수직인 직선이 2x+ay+b=0 일 때 a+b 의 값 구하기.
  category: "수직 기울기 → 점기울기 직선식 → x 계수 2 인 일반형으로 정리"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "한 점을 지나고 주어진 직선에 수직인 직선 (일반형 계수 비교)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    51-e11 ⑵ 와 같은 골조에 마지막 한 단계(주어진 일반형의 x 계수 2 에 맞춰 양변을 정리)만 더 붙였다.
    기출 태그이지만 통찰이 없어 +0. STEP 1 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "기준 기울기의 음의 역수 → 점기울기 직선식 → x 계수 2 로 맞춘 일반형 → a, b"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/54-112.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지나는 점 (2, 5), 기준 직선의 계수(3, 2, -4), 목표 일반형의 x 계수 2 를 바꿀 수 있음. 제약: 목표 x 계수가 수직 기울기의 분모와 맞아야 a, b 가 정수로 떨어진다."
    creative: "(1) 수직 대신 평행으로 바꾸기(★2 유지) (2) 지나는 점을 미지수로 두고 a+b 값을 주고 역으로 묻기(I-BW d2 · ★3) (3) 두 직선의 교점과 원점을 잇는 직선까지 묶기(★3)."
```

```yaml
- id: GN-CM2-54-113
  page: 54
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    A(-3, 2), B(9, -4) 에 대해 선분 AB 를 2:1 로 내분하는 점 C 를 지나고 직선 AB 에 수직인 직선이 x 축 및 y 축과 둘러싸는 부분의 넓이 구하기.
  category: "내분점 → AB 수직 기울기 → 직선식 → 두 절편으로 직각삼각형 넓이"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "내분점을 지나고 선분에 수직인 직선과 좌표축이 만드는 넓이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    내분점 공식·수직 기울기·절편 넓이 세 도구를 한 줄기로 이어 붙인다. 단계는 일곱 개쯤이지만 각각이 표준이고 분기가 없다.
    STEP 1 출발 ★2 · 통찰 0 · M_total 7 → ★2 유지. 다만 이 범위의 STEP 1 중 단계 수가 가장 많다.
  tier: star_2
  mechanism_primary: "2:1 내분점 C → AB 기울기의 음의 역수 → C 를 지나는 직선 → x 절편·y 절편 → 넓이"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$36$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/54-113.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A, B 의 좌표와 내분비 2:1 을 바꿀 수 있음. 제약: 내분점이 정수 좌표여야 하고(좌표 차가 내분비의 합으로 나누어떨어져야 함), 수직 기울기가 정수여야 두 절편이 정수가 되어 넓이가 깔끔하다."
    creative: "(1) 내분점 대신 외분점으로 바꾸기(★3 · 부호 함정 추가) (2) 넓이를 주고 내분비를 역으로 묻기(I-BW d2 · ★3) (3) 좌표축 대신 다른 두 직선과 둘러싸인 넓이로 바꾸기(교점 계산 추가 · ★3)."
```

```yaml
- id: GN-CM2-54-114
  page: 54
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    서로 다른 세 직선 ax+y+5=0, 2x+by-4=0, x+2y+3=0 에 의해 좌표평면이 네 부분으로 나누어질 때 a+b 의 값 구하기.
  category: "평면 분할 개수 → 세 직선이 모두 평행 → 기울기 일치 조건"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "좌표평면이 몇 부분으로 나뉘는가라는 기하적 분할 개수를 세 직선의 위치 관계(모두 평행이면 네 부분)라는 대수 조건으로 옮긴다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "세 직선이 좌표평면을 나누는 부분의 개수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    분할 수를 세어 보면 삼각형이면 일곱, 공점이거나 두 개만 평행이면 여섯, 셋이 모두 평행일 때만 넷이다. 이 대응을 세우는 것이 문항 전부이고 그 뒤 기울기 비교는 한 줄이다.
    표현 전환 통찰 1개(RT d2) · 서로 다른 세 직선이라는 일치 배제 조건까지 있어 STEP 1 출발 ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: "네 부분 → 세 직선 모두 평행 → 기준 직선 기울기와 일치 → a, b"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{9}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/54-114.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준 직선 x+2y+3=0 의 계수와 상수항 5, -4 를 바꿀 수 있음. 제약: 세 직선의 상수항 비가 기울기 비와 같아지면 일치가 되어 서로 다른 세 직선이라는 단서를 위배한다."
    creative: "(1) 여섯 부분으로 바꾸면 공점 또는 두 개만 평행의 두 갈래가 되어 I-MI 추가(★4) (2) 일곱 부분(삼각형)으로 바꾸면 조건이 범위가 되어 부등식(★3~4) (3) 직선을 넷으로 늘려 분할 개수의 최대·최소를 묻기(I-PD d2 · ★4)."
```

### 연습문제 STEP 2

```yaml
- id: GN-CM2-54-115
  page: 54
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    점 (2, 0) 을 지나는 직선과 직선 (3k-2)x-y+5=0 이 y 축에서 수직으로 만날 때 상수 k 의 값 구하기.
  category: "y 축에서 만남 → 교점은 주어진 직선의 y 절편 → 두 점으로 기울기 → 수직 조건"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "y 축에서 수직으로 만난다는 말을 교점이 곧 주어진 직선의 y 절편이라는 좌표 정보로 옮겨야 첫 직선의 기울기가 결정된다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 직선이 좌표축 위에서 수직으로 만날 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    k 가 들어 있어도 y 절편은 k 와 무관하게 정해진다는 점이 열쇠다. 그 좌표와 (2, 0) 으로 첫 직선의 기울기를 얻고 수직 조건을 세운다.
    조건의 동치 변환 통찰 1개(EQV d2). 첫 직선이 주어지지 않은 채 조건만으로 결정된다는 진입 저항이 있어 STEP 2 출발 ★3 유지.
  tier: star_3
  mechanism_primary: "주어진 직선의 y 절편 = 교점 → (2,0) 과의 기울기 → 기울기 곱 -1 → k"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{4}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/54-115.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지나는 점 (2, 0), 상수항 5, 기울기 꼴 (3k-2) 를 바꿀 수 있음. 제약: 상수항이 y 절편이므로 0 이 되면 두 직선이 원점에서 만나 문항이 달라지고, (2,0) 의 x 좌표가 0 이면 조건이 모순이 된다."
    creative: "(1) x 축에서 만나게 바꾸면 y 절편 대신 x 절편이라 k 가 분모에 들어가 경우가 늘어남(★3~4) (2) 수직 대신 평행으로 바꾸면 만날 수 없어 모순 판정 문항(I-VF d2 · ★3) (3) 교점이 y 축 위 특정 구간에 있을 조건으로 바꾸기(★4)."
```

```yaml
- id: GN-CM2-55-116
  page: 55
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    점 A(1, 4) 에서 직선 y=x-3 에 내린 수선의 발 H 의 좌표 구하기.
  category: "수선의 발 → A 를 지나는 수직선 → 두 직선 연립"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "한 점에서 직선에 내린 수선의 발"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    기울기 1 의 음의 역수 -1 로 A 를 지나는 직선을 세우고 연립하면 끝난다. 수치가 모두 정수라 계산도 가볍다.
    STEP 2 출발 ★3 이나 통찰 0 · M_total 5 로 -1 적용 → ★2. 벤더와 1단 차이라 이슈로 올리지 않았다.
  tier: star_2
  mechanism_primary: "수직 기울기로 A 를 지나는 직선 → 주어진 직선과 연립 → 교점 H"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$(4,\,1)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/55-116.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A 의 좌표와 직선의 기울기·절편을 바꿀 수 있음. 제약: 기울기가 ±1 이 아니면 연립 결과가 분수가 된다. 정수 답을 원하면 기울기를 ±1 로 두거나 A 를 맞춰 잡는다."
    creative: "(1) 수선의 발 대신 직선에 대한 대칭점을 묻기(H 가 중점 · I-BW d2 · ★3 · 55-117 골조) (2) 선분 AH 의 길이를 묻기(★3 · 점과 직선 사이 거리로 연결) (3) H 를 주고 A 를 역으로 묻기(★3)."
```

```yaml
- id: GN-CM2-55-117
  page: 55
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    두 점 A(1, -4), B 에 대해 직선 x+3y+1=0 이 선분 AB 의 수직이등분선일 때 점 B 의 좌표 구하기.
  category: "수직이등분선 조건 → AB 수직 + 중점 통과 두 식 연립 → B"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "수직이등분선이 결과로 주어지고 끝점을 역추적해야 한다. B 를 미지수로 두고 수직 조건과 중점 통과 조건 두 개를 동시에 세우는 역방향 설계가 풀이의 출발점이다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "수직이등분선이 주어질 때 선분의 다른 끝점 (직선에 대한 대칭점)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    B 를 미지수 두 개로 두고 AB 기울기가 3(주어진 직선 기울기의 음의 역수)이라는 식과 중점이 직선 위라는 식을 연립한다.
    미지수가 둘이고 두 식을 모두 세워야 해 52-107 보다 한 단 위. 역방향 통찰 1개(BW d2) · STEP 2 출발 ★3 유지.
  tier: star_3
  mechanism_primary: "B 를 미지수로 → AB 기울기 = 음의 역수 · 중점이 직선 위 → 두 식 연립 → B"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$(3,\,2)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/55-117.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A 의 좌표와 직선 x+3y+1=0 의 계수를 바꿀 수 있음. 제약: A 가 그 직선 위에 있으면 B 가 A 와 같아져 문항이 무너지고, 계수비가 정수 대칭을 만들어야 B 가 정수 좌표로 떨어진다."
    creative: "(1) 대칭점이라는 말로 바꿔 같은 골조를 다른 표현으로 묻기(I-RT 성격 · ★3) (2) 직선에 대한 대칭인 도형(직선의 대칭 직선)을 묻기(★4) (3) A, B 와 직선 위 임의의 점까지 거리가 같다는 조건으로 바꾸기(I-EQV d2 · ★3~4)."
```

```yaml
- id: GN-CM2-55-118
  page: 55
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    세 직선 x+2y=3, 2x-3y-12=0, ax+y=1 로 둘러싸인 삼각형이 직각삼각형이 되도록 하는 모든 상수 a 의 값의 합 구하기.
  category: "직각삼각형 → 세 직선 중 두 직선이 수직 → 수직 쌍 경우 분기"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "직각이 생길 수 있는 꼭짓점이 어디인지가 갈린다. 고정된 두 직선은 서로 수직이 아니므로 a 가 든 직선이 나머지 둘 중 어느 것과 수직인지 두 경우를 모두 따져야 값의 합이 맞는다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "세 직선이 직각삼각형을 이룰 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    먼저 고정 두 직선의 기울기 곱이 -1 이 아님을 확인해 그 꼭짓점을 배제하고, 남은 두 경우에서 각각 a 를 구해 더한다.
    둘러싸인 삼각형이 실제로 만들어져야 한다는 전제(평행·공점 배제)로 Mₜ 2. 경우 분기 통찰 1개(MI d2) · STEP 2 출발 ★3 유지.
  tier: star_3
  mechanism_primary: "고정 두 직선 수직 여부 확인 → a 직선과 각 직선의 수직 조건 두 경우 → a 값의 합"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/55-118.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "고정 두 직선의 계수를 바꿀 수 있음. 제약: 고정 두 직선의 기울기 곱이 -1 이 되면 a 와 무관하게 직각이 되어 문항이 무너진다. 두 경우의 a 가 서로 달라야 합이 의미를 갖는다."
    creative: "(1) 이등변삼각형 조건으로 바꾸기(기울기 대신 길이 · 범위를 벗어남) (2) 직각삼각형이 되지 않을 a 의 범위로 뒤집기(★4) (3) 삼각형을 이루지 않을 조건과 묶어 두 물음으로 만들기(★3~4 · 55-119 골조)."
```

```yaml
- id: GN-CM2-55-119
  page: 55
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    세 직선 2x-y=4, 3x+2y=-1, x-ay=0 이 삼각형을 이루지 않도록 하는 모든 상수 a 의 값의 곱 구하기.
  category: "삼각형을 이루지 않음 → 평행 2경우 + 공점 1경우 → a 값의 곱"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "삼각형을 이루지 않는다를 두 직선이 평행하다 또는 세 직선이 한 점에서 만난다는 대수 조건으로 옮긴다"
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "평행 상대 두 가지와 공점 한 가지를 모두 따져야 하고, a 가 분모에 들어가므로 기울기를 1/a 로 보는 처리까지 필요하다"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "세 직선이 삼각형을 이루지 않을 조건 (값의 곱)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    53-e13 과 같은 골조이나 세 번째 직선이 x-ay=0 이라 기울기가 1/a 꼴이고 값의 곱을 묻는다.
    공점 경우는 고정 두 직선의 교점을 대입한다. EQV·MI d2 두 개 · STEP 2 출발 ★3 · 저노출 유형 부재로 +1 하지 않고 ★3.
  tier: star_3
  mechanism_primary: "평행 2경우(1/a 를 각 기울기와 일치) + 공점 1경우(교점 대입) → 세 a 값의 곱"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{1}{6}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/55-119.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "고정 두 직선의 계수와 상수항을 바꿀 수 있음. 제약: 교점이 정수 좌표여야 공점 a 가 유리수로 깔끔하고, x-ay=0 은 원점을 지나므로 고정 직선 중 하나가 원점을 지나면 경우가 줄어든다."
    creative: "(1) 값의 합을 묻기(★3 · 53-108) (2) 세 번째 직선을 ax-y=k 로 바꿔 원점 통과를 풀면 경우마다 계산이 늘어남(★3~4) (3) 삼각형을 이룰 a 의 범위로 뒤집어 여집합으로 답하게 하기(I-VF d2 · ★4)."
```

### 연습문제 실력 UP

```yaml
- id: GN-CM2-55-120
  page: 55
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제"
  summary: |
    포물선 y=x 제곱 위의 점 P(1, 1) 에서의 접선을 l1, P 를 지나고 l1 에 수직인 직선을 l2 라 할 때 l1 과 y 축의 교점 Q, l2 와 포물선의 P 아닌 교점 R 에 대해 삼각형 PRQ 의 넓이 S 의 40배 구하기.
  category: "접선(판별식 중근) → 수직 직선 → 포물선과 연립 → 직각삼각형 넓이"
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "접한다는 기하 조건을 포물선과 직선을 연립한 이차방정식이 중근을 갖는다는 판별식 조건으로 옮겨야 접선의 기울기가 나온다"
    - step: 2
      type: I-SC
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "넓이를 좌표 넓이 공식으로 밀어붙이는 갈래 대신 l1 과 l2 가 수직이라는 사실을 살려 두 변의 길이 곱의 절반으로 처리하는 갈래를 고르면 계산이 절반으로 준다"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "이차함수의 접선과 그에 수직인 직선이 만드는 삼각형의 넓이"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    접선을 판별식으로 얻고, 음의 역수 기울기로 l2 를 세워 포물선과 연립해 R 을 얻는다. 직각인 끼인각이 P 에 있으므로 넓이는 PQ 와 PR 길이의 곱의 절반이다.
    표현 전환과 전략 선택 두 통찰(RT·SC d2) · 단원 밖 도구(접선·이차방정식 판별식) 결합 · 실력 UP 출발 ★4 유지. 저노출 유형 RT·SC 가 있어 §2.13 경고 없음.
  tier: star_4
  mechanism_primary: "판별식 중근 → 접선 l1 → 수직 기울기 l2 → 포물선과 연립해 R → 직각 끼고 PQ·PR 길이 곱의 절반"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$125$'
  answer_source: "답지"
  figure: 'crop:fig-55-120.png'
  latex: latex-bank/gn-cm2/items/55-120.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접점의 x 좌표(1)와 포물선의 계수를 바꿀 수 있음. 제약: 접점을 옮기면 접선 기울기와 수직 기울기가 함께 바뀌어 R 의 좌표가 분수가 되기 쉽다. 답을 정수로 만들려고 넓이에 곱한 40 같은 배율은 R 의 분모에 맞춰 다시 잡아야 한다. 그림의 P, Q, R, l1, l2 라벨 위치는 고정."
    creative: "(1) Q 를 x 축과의 교점으로 바꾸기(넓이 식이 달라짐 · ★4 유지) (2) R 를 묻는 대신 삼각형이 이등변이 되는 접점을 역으로 묻기(I-BW 추가 · ★5 후보) (3) 접선 두 개가 이루는 각으로 확장(★4~5) (4) 포물선을 원으로 바꾸면 접선 조건이 거리 조건이 되어 다음 단원 도구가 필요."
```

```yaml
- id: GN-CM2-55-121
  page: 55
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    삼각형 ABC 의 세 꼭짓점 A(3, -1), B(8, 4), C(2, 6) 에서 각각의 대변에 그은 세 수선의 교점(수심)의 좌표 구하기.
  category: "수심 → 대변 기울기의 음의 역수로 수선 두 개 → 연립"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "세 수선의 교점이라는 조건을 두 수선의 교점만 구하면 충분하다는 형태로 줄여야 연립이 두 식으로 끝난다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각형의 세 수선의 교점(수심)의 좌표"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    대변의 기울기를 구해 음의 역수로 수선을 세우는 과정을 두 번 반복하고 연립한다. 도구는 이 단원 것뿐이지만 단계가 길고 분수 연립이 끼어든다.
    통찰은 EQV d1 하나뿐이고 저노출 유형이 없어 §2.13 기준으로는 ★4 슬롯에 YELLOW 다. 벤더 실력 UP 출발을 존중해 ★4 로 두고 파일 끝에 이슈로 기록한다.
    [분류 이슈] 실력 UP(★4 출발)이나 통찰은 EQV d1 하나 · 저노출 유형 부재 → ★3 후보.
  tier: star_4
  mechanism_primary: "대변 BC 기울기 → A 에서의 수선 · 대변 AC 기울기 → B 에서의 수선 → 두 직선 연립 → 수심"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\left(\dfrac{9}{2},\,\dfrac{7}{2}\right)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/55-121.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 꼭짓점의 좌표를 바꿀 수 있음. 제약: 대변의 기울기가 0 이나 정의되지 않으면 수선이 수직·수평선이 되어 연립이 오히려 쉬워지고, 정수 좌표 수심을 원하면 두 대변의 기울기를 정수로 맞춰야 한다."
    creative: "(1) 수심 대신 외심(수직이등분선 두 개의 교점)을 묻기(같은 골조 · ★4) (2) 무게중심까지 구해 세 중심이 한 직선 위에 있음을 확인하게 하기(I-PD d2 · ★5 후보) (3) 수심의 좌표를 주고 한 꼭짓점을 역으로 묻기(I-BW d2 · ★4~5)."
```

## 표본 판정 요약 (28문)

- ★ 분포: ★1 4 · ★2 15 · ★3 7 · ★4 2 · ★5 0
- 통찰형 12 · 절차형 16 · premium 0
- 통찰 유형 분포: I-EQV 5 · I-MI 4 · I-VF 2 · I-BW 2 · I-RT 2 · I-SC 1 (총 16개 라벨 · depth 3 없음)
- type_hint 상위: 「두 직선의 평행·수직 조건으로 미정계수 구하기」 계열 7 · 「수직이등분선 관련」 4 · 「세 직선의 위치 관계(삼각형을 이루지 않을·직각삼각형)」 4 · 「한 직선에 평행 또는 수직인 직선의 방정식」 4 · 「주어진 점에서 수직으로 만날 조건」 2
- 구역별 출발점 대비 조정: 하향 2문(51-104 · 55-116 — 통찰 0 · M_total 5 이하) · 상향 1문(54-114 — 평면 분할 표현 전환) · 나머지 25문은 벤더 신호 유지
- 그림: 1문(`crop:fig-55-120.png` · 발문에 P, Q, R, l1, l2 배치가 모두 서술돼 있어 골조 판단에 그림이 필수는 아님)
- 단원 특성: 도구가 좁아(평행·수직 계수 조건 · 중점/내분점 · 세 직선의 위치 관계) ★3 이상의 변별은 거의 전부 「조건을 어떤 대수식으로 옮기는가(EQV·RT)」와 「경우를 빠짐없이 따지고 일치 근을 기각하는가(MI·VF)」에서 나온다. 단원 밖 도구가 들어오는 문항은 55-120(포물선 접선·판별식) 하나뿐이고 이 범위에서 유일한 I-SC 이기도 하다.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CM2-55-121 | 벤더 실력 UP(★4 출발)이나 통찰은 I-EQV d1 하나뿐이고 §2.13 저노출 유형(SC·VF·SYM·XU·RT·PD·BW)이 없어 ★4 슬롯 YELLOW. 단계 수와 분수 연립 부담으로 ★4 를 유지했으나 질로 보면 ★3 | ★3 / ★4 |
| GN-CM2-50-e10 · GN-CM2-50-101 | 「평행 조건에서 일치 근 기각」을 I-VF 로 셀지(검증이 풀이의 본질) 표준 절차로 볼지 경계. I-VF 로 세되 depth 1 로 낮게 두어 ★2 를 유지 | ★2 |
| GN-CM2-53-e13 · GN-CM2-53-108 · GN-CM2-55-119 | 통찰 2개(EQV+MI d2)로 v3.8 +1 후보이나 저노출 유형이 없어 ★4 로 올리면 §2.13 RED/YELLOW. ★3 유지 | ★3 / ★4 |
| GN-CM2-54-114 | STEP 1(★2 출발)이나 「평면이 네 부분」을 위치 관계로 옮기는 I-RT d2 가 문항의 전부라 ★3 으로 올림. 벤더와 1단 차 | ★2 / ★3 |
| 예제 뒤 확인체크 8문(50-101~53-108) | 전사본 section 이 「필수·발전 예제」 하나라 확인체크의 출발 ★ 를 직전 예제(필수 ★2 · 발전 ★3)에서 물려받도록 정했다. 카탈로그를 만들 때 확인체크를 독립 층으로 둘지 결정 필요 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고).

- **따로 세워야 할 유형**: ⑴ 「두 직선의 평행·수직 조건으로 미정계수」는 *일치 배제가 있는 것*(50-e10 · 50-101)과 *없는 것*(49-98 · 49-100)을 나누는 편이 좋다. 기각 단계 유무가 체감 난이도를 한 단 가른다. ⑵ 「세 직선의 위치 관계」는 *삼각형을 이루지 않을 조건*(53-e13 · 53-108 · 55-119)과 *직각삼각형이 될 조건*(55-118), *평면 분할 개수*(54-114)를 별개 유형으로. 세 번째는 표현 전환이 주 통찰이라 성격이 다르다.
- **통합해도 될 유형**: 「한 직선에 평행/수직인 직선의 방정식」(51-e11 · 51-104 · 54-111 · 54-112)은 지나는 점이 주어진 점인지, 두 직선의 교점인지, 절편인지만 다르고 골조가 같다. 하나의 유형에 변형 축으로 둘 것. 「수직이등분선」(52-e12 · 52-106 · 52-107 · 55-117)도 *세우기*와 *역추적*(52-107 · 55-117) 둘로만 나누면 충분하다.
- **이 범위에서 상위 슬롯 후보**: 55-120 하나뿐이다. 단원 안 도구만으로는 ★4 이상을 만들기 어려우므로 카탈로그에서 이 단원의 ★4·★5 슬롯은 접선·원·점과 직선 사이 거리와의 결합 유형으로 설계하는 편이 낫다.
