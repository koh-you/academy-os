---
name: mechanism-데이터-GN-M32-09
description: 개념원리 중학 3-2 09 원주각(1/1 · 30문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id·base_star null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 중학 3-2 · 전사본 latex-bank/gn-m32
  section: 09 원주각
  unit_code: GN-M32-09
  part: "1/1"
  extract_range: "86~92쪽 · 86-01~92-10"
  total_problems: 30
  unit_total: 30
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). insight_type 은 insights 가 비면 절차형, 하나라도 있으면 통찰형. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-m32/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-m32/items/<id>.tex
  image_source: latex-bank/gn-m32/figures/ (crops.json)
---

# 개념원리 중학 3-2 · 09 원주각 (1/1) 정독 데이터 (v1.0)

86~92쪽 30문항 전수. 구역은 「개념원리 확인하기」(4문 · 86쪽) · 「핵심문제 익히기」(16문 · 87~90쪽 · 핵심문제 `h` 와 그 확인문제 `c` 가 짝) · 「이런 문제가 시험에 나온다」(10문 · 91~92쪽) 셋이다. 개념원리 중학은 RPM 과 달리 문항별 난이도 표기(하·중·상)나 태그가 없고 **구역 자체가 난이도 층**이므로, 확인하기 ★1 · 핵심문제 익히기 ★2 · 시험에 나온다 ★2~3 을 출발점으로 삼고 M_total·통찰로 ±1 조정했다.

이 단원의 도구는 사실상 넷이다 — ⑴ 원주각 = 중심각의 절반, ⑵ 한 호에 대한 원주각은 모두 같다, ⑶ 반원(지름)에 대한 원주각은 90°, ⑷ 한 원에서 원주각의 크기는 호의 길이에 정비례. 30문항 대부분은 이 넷 중 하나를 삼각형 내각·외각과 한 번 엮는 절차형이라 ★2 에 몰려 있고, 통찰로 카운트한 것은 **지름 보조선을 그어 직각삼각형·삼각비로 옮기는 단계(I-RT)** · **접선 조건을 ∠AOB 와 ∠APB 의 보각 관계로 바꾸는 단계(I-EQV)** · **원 전체 360° 를 구성해 미지 호를 역산하는 단계(I-CON/I-BW)** 세 갈래뿐이다. 단순 「절반·2배·상등·비례」 적용과 삼각형 각 계산은 이 학년의 표준 절차로 보고 통찰로 세지 않았다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다. 원주각 단원은 그림 라벨(점 이름·호의 위치)이 골조를 고정하므로 `variation_notes.numeric` 에 「그림 라벨 고정 · 각의 합이 360°/180° 를 넘지 않을 것」 같은 제약을 함께 적었다.

## 문항 데이터

### 개념원리 확인하기

```yaml
- id: GN-M32-86-01
  page: 86
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념확인"
  summary: |
    ⑴~⑶ 원 O 와 원주각·중심각이 표시된 세 그림에서 ∠x 의 크기.
  category: "원주각과 중심각의 관계 → ∠x"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "원주각과 중심각의 크기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    원주각 = 중심각의 1/2 을 세 그림에 그대로 대입하는 한 단계. ⑶ 은 원주각에서 중심각을 역으로 구하는 방향(2배)이라 방향만 바뀐다. 개념 확인 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "중심각 ↔ 원주각(1/2 · 2배) 한 번 적용 → ∠x"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $65^\circ$ ⑵ $80^\circ$ ⑶ $148^\circ$'
  answer_source: "답지"
  figure: "crop:fig-86-01.png"
  latex: latex-bank/gn-m32/items/86-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주어진 각(130°·40°·74°)을 자유롭게 바꿀 수 있음. 제약: 중심각은 0~360°, 원주각은 그 절반이므로 짝수 각으로 두면 답이 정수. 우호를 쓰는 소문항은 중심각이 180° 를 넘게 두어야 그림과 어긋나지 않음. 점 이름과 호의 위치는 그림에 고정."
    creative: "(1) 중심각을 직접 주지 않고 ∠OAB 같은 이등변삼각형 밑각으로 주기(★2 · 91-01 골조) (2) 우호/열호 중 어느 호의 원주각인지 고르게 하면 T-범위 함정 추가(★2) (3) 중심각 대신 부채꼴 넓이·호의 길이로 주면 I-RT 1개 추가(★2~3)."
```

```yaml
- id: GN-M32-86-02
  page: 86
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념확인"
  summary: |
    ⑴⑵ 같은 호를 보는 원주각이 여러 개 표시된 두 그림에서 ∠x 의 크기.
  category: "한 호에 대한 원주각은 모두 같다 → ∠x"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "한 호에 대한 원주각의 성질"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    같은 호의 원주각이 서로 같다는 성질을 옮겨 적고, 필요하면 삼각형 내각의 합으로 한 번 마무리. 개념 확인 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "같은 호의 원주각 상등 → (필요시) 삼각형 내각합 → ∠x"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $51^\circ$ ⑵ $75^\circ$'
  answer_source: "답지"
  figure: "crop:fig-86-02.png"
  latex: latex-bank/gn-m32/items/86-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "표시된 원주각 값을 바꾸면 그대로 성립. 제약: 삼각형 내각합을 쓰는 소문항은 두 각의 합이 180° 미만이어야 하고, 네 점의 원 위 배치(호의 어느 쪽인지)는 그림에 고정."
    creative: "(1) 두 원주각을 같다고 놓고 미지수 방정식으로 풀게 하기(★2) (2) 같은 호가 아닌 각을 섞어 어느 각이 같은지 고르게 하면 T-표기 함정(★2) (3) 두 현의 교점을 만들어 외각으로 연결하면 88-h3 골조(★2)."
```

```yaml
- id: GN-M32-86-03
  page: 86
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념확인"
  summary: |
    ⑴⑵ 지름이 그려진 두 그림에서 ∠x 의 크기.
  category: "반원(지름)에 대한 원주각 90° → 삼각형 내각합 → ∠x"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "반원에 대한 원주각의 크기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    지름을 보고 90° 를 찍은 뒤 삼각형 내각합으로 나머지 한 각. 두 단계지만 모두 정형. 개념 확인 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "지름 → 원주각 90° → 삼각형 내각합 → ∠x"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $52^\circ$ ⑵ $35^\circ$'
  answer_source: "답지"
  figure: "crop:fig-86-03.png"
  latex: latex-bank/gn-m32/items/86-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주어진 각(38°·55° 류)을 1~89° 안에서 바꾸면 그대로 성립. 제약: 90° 를 뺀 나머지가 양수여야 하므로 주어진 각 < 90°. 지름의 양 끝점 라벨은 그림 고정."
    creative: "(1) 90° 인 각을 직접 묻지 말고 두 직각을 겹쳐 사각형 내각합으로 잇기(★2) (2) 지름을 명시하지 않고 중심 O 를 지나는 현으로만 그려 스스로 알아채게 하기(★2 · I-EQV d1) (3) 직각삼각형 변의 길이를 주고 삼각비로 확장하면 89-h5 골조(★2~3)."
```

```yaml
- id: GN-M32-86-04
  page: 86
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념확인"
  summary: |
    ⑴~⑶ 호의 길이와 원주각이 함께 표시된 세 그림에서 x 의 값.
  category: "원주각의 크기 ∝ 호의 길이 → 비례식 → x"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "원주각의 크기와 호의 길이"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    한 원에서 원주각과 호가 정비례한다는 사실로 비례식 한 줄. 미지수가 호의 길이 쪽일 때와 각 쪽일 때가 섞여 있으나 방향만 다름. 개념 확인 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "원주각 : 원주각 = 호 : 호 비례식 → x"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $20$ ⑵ $12$ ⑶ $9$'
  answer_source: "답지"
  figure: "crop:fig-86-04.png"
  latex: latex-bank/gn-m32/items/86-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각·호 네 수 중 세 개를 자유롭게 바꿀 수 있음. 제약: 비례식의 답이 정수가 되도록 (각의 비) = (호의 비) 가 약분되는 조합으로 두고, 각의 합이 한 원 안에서 180° 를 넘지 않게 함."
    creative: "(1) 호의 길이 대신 원의 둘레에 대한 비율로 주면 92-10 골조(★3 · I-EQV d2) (2) 세 호의 비로 삼각형 세 내각을 묻기(90-h8 골조 ★2) (3) 중심각과 호를 섞어 주면 단계 하나 추가(★2)."
```

### 핵심문제 익히기

```yaml
- id: GN-M32-87-h1
  page: 87
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    원 O 에서 ∠AOB = 140° 일 때 두 원주각 ∠x, ∠y 의 크기. (x 는 열호 쪽, y 는 우호 쪽 원주각)
  category: "중심각 140° → 열호·우호 각각의 원주각"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "원주각과 중심각의 크기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x 는 140° 의 절반. y 는 반대쪽 호를 보는 원주각이므로 중심각을 360° − 140° = 220° 로 바꾼 뒤 절반. 어느 호에 대한 원주각인지 가리는 T-범위 함정이 핵심이라 Mₜ 2. 한 문항에서 두 방향을 모두 묻는 정도이고 통찰은 없음 → 구역 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "∠AOB=140° → x=140/2 · 반대쪽 호의 중심각 220° → y=220/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\angle x=70^\circ$, $\angle y=110^\circ$'
  answer_source: "본문 답"
  figure: "crop:fig-87-h1.png"
  latex: latex-bank/gn-m32/items/87-h1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "중심각 140° 를 다른 값으로. 제약: 짝수여야 두 원주각이 모두 정수, 0 < 중심각 < 360 이고 그림상 우호·열호 구분이 보이게 180° 에서 충분히 떨어진 값(예: 100·160·200)."
    creative: "(1) y 만 묻고 x 를 없애면 T-범위 함정만 남아 ★2 유지 (2) ∠x + ∠y 를 묻게 하면 항상 180° 인 성질(원에 내접하는 사각형)로 이어져 ★3 (3) 중심각 대신 ∠OAB 이등변 밑각을 주면 단계 하나 추가(★2)."
```

```yaml
- id: GN-M32-87-c1
  page: 87
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    ⑴⑵ 중심각·원주각이 섞여 표시된 두 그림에서 ∠x 의 크기.
  category: "중심각 ↔ 원주각 + 삼각형(이등변) 각 → ∠x"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "원주각과 중심각의 크기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    87-h1 과 같은 골조의 반복 확인. 각 소문항이 중심각↔원주각 한 번에 삼각형 각 계산 한 번을 덧붙인 정도. 통찰 없음·M_total 5 로 −1 후보이나 두 그림에서 방향이 서로 달라 구역 출발점 ★2 를 유지.
  tier: star_2
  mechanism_primary: "중심각 ↔ 원주각 환산 → 삼각형 내각합 → ∠x"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $40^\circ$ ⑵ $50^\circ$'
  answer_source: "답지"
  figure: "crop:fig-87-c1.png"
  latex: latex-bank/gn-m32/items/87-c1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주어진 각을 바꾸면 그대로 성립. 제약: 중심각은 짝수, 삼각형 각 계산 결과가 양수. 점 배치와 O 의 위치는 그림 고정."
    creative: "(1) 두 소문항을 한 그림에 합쳐 x, y 를 동시에 묻기(★2) (2) 한 소문항을 우호 쪽 원주각으로 바꾸면 T-범위 함정(★2) (3) OA·OB 반지름의 이등변 성질을 명시하지 않고 쓰게 하면 ★2~3."
```

```yaml
- id: GN-M32-87-h2
  page: 87
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    PA, PB 가 원 O 의 접선(접점 A, B)이고 ∠ACB = 55° 일 때 ∠x(= ∠APB)의 크기.
  category: "원주각 → 중심각 → 접선 두 개가 만드는 사각형의 보각 → ∠APB"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "접선 ⊥ 반지름을 사각형 APBO 의 내각합으로 옮겨 ∠APB = 180° − ∠AOB 라는 보각 관계로 바꿈"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "원주각과 중심각의 크기: 두 접선이 주어진 경우"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ∠ACB 를 2배해 중심각 ∠AOB 를 얻는 것까지는 정형이고, 거기서 ∠APB 로 넘어가려면 ∠OAP = ∠OBP = 90° 인 사각형 APBO 의 내각합을 써야 한다. 접선 조건을 보각 관계로 바꾸는 이 한 단계를 I-EQV d1 로 셌다. 구역 출발 ★2, 통찰 1개이나 M_total 5 로 상쇄 → ★2.
  tier: star_2
  mechanism_primary: "∠ACB → ∠AOB = 2∠ACB → 사각형 APBO 내각합 → ∠APB = 180° − ∠AOB"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$70^\circ$'
  answer_source: "본문 답"
  figure: "crop:fig-87-h2.png"
  latex: latex-bank/gn-m32/items/87-h2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "∠ACB 를 바꿀 수 있음. 제약: 0 < 2∠ACB < 180 이어야 P 가 원 밖에 생기므로 ∠ACB < 90°, 그리고 답이 정수가 되게 ∠ACB 를 정수로. C 가 우호 위에 있다는 그림 설정은 고정."
    creative: "(1) 87-c2 처럼 ∠APB 를 주고 원주각을 묻는 역방향(★2) (2) C 를 열호 쪽으로 옮기면 중심각이 우호가 되어 T-범위 함정 추가(★3 · 91-03 골조) (3) 접선의 길이 PA = PB 를 함께 주고 삼각형 PAB 의 각까지 묻기(★3 · I-CON d1)."
```

```yaml
- id: GN-M32-87-c2
  page: 87
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    PA, PB 가 원 O 의 접선(접점 A, B)이고 ∠APB = 50° 일 때 ∠x(원주각)의 크기.
  category: "접선 사이 각 → 중심각(보각) → 원주각"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "사각형 APBO 의 두 직각을 이용해 ∠AOB = 180° − ∠APB 로 조건을 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "원주각과 중심각의 크기: 두 접선이 주어진 경우"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    87-h2 의 역방향. 접선 사이 각에서 중심각으로 넘어가는 보각 관계(I-EQV d1)가 같고, 그 뒤는 절반 한 번. 구역 출발 ★2·M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "∠APB=50° → ∠AOB = 180° − 50° → 원주각 = ∠AOB / 2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$65^\circ$'
  answer_source: "답지"
  figure: "crop:fig-87-c2.png"
  latex: latex-bank/gn-m32/items/87-c2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "∠APB 를 바꿀 수 있음. 제약: 0 < ∠APB < 180 이고 180 − ∠APB 가 짝수여야 원주각이 정수(∠APB 를 짝수로). 접점 라벨과 원주각을 보는 점의 위치(열호/우호)는 그림 고정."
    creative: "(1) ∠x 를 우호 쪽 원주각으로 바꾸면 (360 − ∠AOB)/2 로 T-범위 함정 추가(★3) (2) 접선 대신 ∠OAB 를 주면 이등변삼각형 경로(★2) (3) 사각형 APBO 의 넓이·접선의 길이를 곁들이면 XU 결합(★3~4)."
```

```yaml
- id: GN-M32-88-h3
  page: 88
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    원 위의 네 점 A, P, Q, B 에서 두 현 AQ, PB 의 교점을 R 이라 할 때 ∠PAQ = 20°, ∠ARB = 70° 이면 ∠y − ∠x (x = ∠PBQ, y = ∠AQB)의 크기.
  category: "같은 호의 원주각 상등 → 삼각형의 외각 → 두 각의 차"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "한 호에 대한 원주각의 성질"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    호 PQ 를 보는 원주각이 같으므로 ∠x = ∠PAQ = 20°. ∠ARB 는 삼각형 RBQ 의 외각이므로 ∠ARB = ∠x + ∠y 에서 ∠y 가 나오고 차를 만든다. 성질 두 개를 순서대로 쓰는 정형이라 통찰로 세지 않음. 구역 출발 ★2·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "호 PQ 의 원주각 상등 → x=20° → 삼각형 RBQ 외각 ∠ARB = x + y → y=50° → y − x"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$30^\circ$'
  answer_source: "본문 답"
  figure: "crop:fig-88-h3.png"
  latex: latex-bank/gn-m32/items/88-h3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "∠PAQ 와 ∠ARB 를 바꿀 수 있음. 제약: ∠ARB > ∠PAQ 이어야 y 가 양수이고, 두 각의 합이 180° 미만이어야 삼각형이 성립. 네 점의 원 위 배치와 교점 R 의 라벨은 그림 고정."
    creative: "(1) y 대신 y + x 나 y 자체를 묻기(★2) (2) 교점을 원 밖으로 옮기면 ∠ARB = y − x 로 부호가 뒤집혀 T-부호 함정(★3) (3) 호 AB 와 호 PQ 의 길이 비를 함께 주면 호↔원주각 비례가 더해져 ★3."
```

```yaml
- id: GN-M32-88-c3
  page: 88
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    ⑴⑵ 두 현이 만나거나 원주각이 겹쳐 표시된 두 그림에서 ∠x 의 크기.
  category: "같은 호의 원주각 상등 → 삼각형 내각·외각 → ∠x"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "한 호에 대한 원주각의 성질"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    88-h3 과 같은 골조의 확인. 같은 호를 보는 각을 옮긴 뒤 삼각형 내각합이나 외각으로 마무리. 통찰 없음·M_total 5 → 구역 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "같은 호의 원주각 상등 → 삼각형 내각합/외각 → ∠x"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $56^\circ$ ⑵ $13^\circ$'
  answer_source: "답지"
  figure: "crop:fig-88-c3.png"
  latex: latex-bank/gn-m32/items/88-c3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "표시된 각들을 바꿀 수 있음. 제약: 삼각형 내각합·외각 계산 결과가 모두 양수이고, 한 원 안의 각 합이 그림과 모순되지 않을 것. 점 배치는 그림 고정."
    creative: "(1) 두 소문항을 미지수 방정식(예: ∠x 를 두 경로로 표현)으로 묶기(★3) (2) 현 대신 접선을 하나 끼우면 접선 각 관계 추가(★3) (3) 답을 각이 아니라 두 각의 합·차로 묻기(★2 · 88-h3 골조)."
```

```yaml
- id: GN-M32-88-h4
  page: 88
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    AB 가 원 O 의 지름이고 ∠ACD = 64° 일 때 ∠x 의 크기.
  category: "지름 → 원주각 90° → 같은 호의 원주각 → 삼각형 내각합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "반원에 대한 원주각의 크기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    AB 가 지름이므로 그에 대한 원주각은 90°. ∠ACD 를 같은 호 AD 의 원주각으로 옮긴 뒤 직각삼각형 안에서 나머지 각을 뺀다. 두 성질을 순서대로 쓰는 정형 → 통찰 없음, 구역 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "지름 AB → ∠ADB(또는 ∠ACB) = 90° → 호 AD 의 원주각 = ∠ACD = 64° → 90° − 64°"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$26^\circ$'
  answer_source: "본문 답"
  figure: "crop:fig-88-h4.png"
  latex: latex-bank/gn-m32/items/88-h4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "∠ACD 를 1~89° 안에서 바꿀 수 있음. 제약: 90° 에서 빼므로 ∠ACD < 90°, 점 D 가 A 와 B 사이 호 위에 있다는 배치는 그림 고정."
    creative: "(1) ∠x 를 반대쪽 각으로 옮겨 90° − 가 아니라 90° + 가 되게 하면 T-부호 함정(★3) (2) 호 AD = 호 DC 조건을 더하면 92-07 골조(★2~3) (3) BD·AD 의 길이를 주어 삼각비로 넘기면 ★3(I-RT d1)."
```

```yaml
- id: GN-M32-88-c4
  page: 88
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    ⑴⑵ 지름이 그려진 두 그림에서 ∠x 의 크기.
  category: "지름에 대한 원주각 90° + 같은 호의 원주각 → ∠x"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "반원에 대한 원주각의 크기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    88-h4 의 확인. 지름을 찾아 90° 를 세우고 같은 호의 원주각을 옮긴 뒤 삼각형 내각합. 통찰 없음·M_total 5 → 구역 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "지름 → 원주각 90° → 같은 호의 원주각 상등 → 삼각형 내각합 → ∠x"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $40^\circ$ ⑵ $42^\circ$'
  answer_source: "답지"
  figure: "crop:fig-88-c4.png"
  latex: latex-bank/gn-m32/items/88-c4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주어진 각을 1~89° 에서 바꿀 수 있음. 제약: 90° 를 뺀 값이 양수. 지름의 끝점과 나머지 점들의 배치는 그림 고정."
    creative: "(1) 지름을 직접 표시하지 않고 중심 O 를 지나는 현으로만 두기(★2 · I-EQV d1) (2) 원 밖 한 점에서 두 할선을 그어 각의 차로 묻기(★3) (3) 반지름 길이를 주어 넓이·호의 길이까지 잇기(★3 · 91-02 골조)."
```

```yaml
- id: GN-M32-89-h5
  page: 89
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    반지름 6 cm 인 원 O 에 내접하는 삼각형 ABC 에서 BC = 8 cm 일 때 tan A 의 값.
  category: "지름 보조선 → 직각삼각형 → 같은 호의 원주각 → 삼각비"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "원 위의 ∠A 를 직접 다룰 수 없으므로 B(또는 C)에서 지름을 그어 ∠A 와 같은 크기의 직각삼각형 각으로 옮기고, 각 문제를 변의 길이 문제로 전환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "원주각의 성질과 삼각비의 값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    BC 를 한 변으로 갖는 직각삼각형을 만들기 위해 지름 BA' 를 긋는 보조선이 골조 전체를 결정한다. ∠A = ∠A'(호 BC 의 원주각), ∠BCA' = 90° 이므로 피타고라스로 A'C 를 얻어 tan 을 만든다. 보조선 작도로 각↔변을 바꾸는 I-RT d2 하나. 구역 출발 ★2 이고 M_total 6 이라 조정 없이 ★2.
  tier: star_2
  mechanism_primary: "지름 BA' 작도 → ∠A = ∠A' · ∠BCA' = 90° → 피타고라스로 A'C → tan A = BC / A'C"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{2\sqrt{5}}{5}$'
  answer_source: "본문 답"
  figure: "crop:fig-89-h5.png"
  latex: latex-bank/gn-m32/items/89-h5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "반지름 r 과 BC 를 바꿀 수 있음. 제약: BC < 2r(현이 지름보다 짧아야 함), 답이 정리되려면 (2r)² − BC² 가 완전제곱이거나 √ 가 간단해야 함(예: r=5, BC=6 → 8 로 tan=3/4)."
    creative: "(1) 89-c5 처럼 각을 주고 반지름을 묻는 역방향(★2) (2) 92-06 처럼 삼각비 값을 주고 원의 넓이를 묻기(★3 · I-BW 추가) (3) sin A = BC/2r 을 일반식으로 유도하게 하면 Mₐ 상승 ★3."
```

```yaml
- id: GN-M32-89-c5
  page: 89
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    원 O 에 내접하는 삼각형 ABC 에서 ∠A = 60°, BC = 9 cm 일 때 원 O 의 반지름의 길이.
  category: "지름 보조선 → 직각삼각형 → sin A = BC / 지름 → 반지름"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "지름을 그어 ∠A 를 직각삼각형의 한 각으로 옮기고, 각 조건을 지름 길이(변)의 식으로 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "원주각의 성질과 삼각비의 값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    89-h5 와 같은 보조선 골조를 역방향으로 쓴다. 지름 BA' 를 긋고 ∠A' = 60°, ∠BCA' = 90° 이므로 sin 60° = BC / BA' 에서 지름을, 절반이 반지름. 보조선 전환 I-RT d1 하나이고 나머지는 삼각비 대입 → 구역 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "지름 BA' 작도 → ∠A'=∠A=60° · ∠BCA'=90° → sin 60° = BC / BA' → 반지름 = BA' / 2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$3\sqrt{3}\,\mathrm{cm}$'
  answer_source: "답지"
  figure: "crop:fig-89-c5.png"
  latex: latex-bank/gn-m32/items/89-c5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "∠A 는 30°·45°·60° 중에서, BC 는 자유. 제약: 특수각이라야 삼각비 값이 나오고, BC 를 sin 값의 분모와 맞춰 두면 답의 근호가 정리됨(예: ∠A=45°, BC=8 → 반지름 4√2)."
    creative: "(1) 반지름 대신 원의 넓이·둘레를 묻기(★2~3) (2) ∠A 를 특수각이 아닌 tan 값으로 주면 92-06 골조(★3) (3) 내접원·외접원을 한 그림에 두고 두 반지름을 비교하면 XU 결합(★4)."
```

```yaml
- id: GN-M32-89-h6
  page: 89
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    두 현 AB, CD 의 교점이 P 이고 호 AC = 호 BD, ∠ABC = 32° 일 때 ∠x(교점에서 생기는 각)의 크기.
  category: "호 상등 → 원주각 상등 → 삼각형의 외각 → ∠x"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "원주각의 크기와 호의 길이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ∠ABC 는 호 AC 의 원주각이고 호 AC = 호 BD 이므로 호 BD 의 원주각 ∠BCD 도 같다. 두 각이 삼각형 PBC 의 두 내각이 되어 교각이 외각으로 둘의 합. 호 상등 → 원주각 상등은 이 단원의 표준 절차라 통찰로 세지 않음. 구역 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "호 AC = 호 BD → ∠BCD = ∠ABC = 32° → 삼각형 PBC 의 외각 ∠x = 32° + 32°"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$64^\circ$'
  answer_source: "본문 답"
  figure: "crop:fig-89-h6.png"
  latex: latex-bank/gn-m32/items/89-h6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "∠ABC 를 바꿀 수 있음. 제약: 2∠ABC < 180° 이어야 교각이 성립. 호 AC = 호 BD 라는 상등 조건과 교점 P 의 위치(원 안)는 그림 고정."
    creative: "(1) 호 AC = 2 호 BD 처럼 비로 주면 계산 한 단계 추가(★2~3) (2) 교점을 원 밖으로 옮기면 외각이 차가 되어 T-부호 함정(★3) (3) 호 상등 대신 현의 길이 상등(AC = BD)으로 주면 I-EQV d1 추가(★3)."
```

```yaml
- id: GN-M32-89-c6
  page: 89
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    원에 내접하는 네 점 A, B, C, D 에서 호 AB = 호 BC 이고 ∠ABD = 56°, ∠DAC = 40° 일 때 ∠x(= ∠BDC)의 크기.
  category: "두 원주각 → 호 AD·DC → 원 전체 360° 구성 → 남은 호를 이등분 → ∠x"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "흩어진 두 각 조건을 각각 호로 바꾼 뒤 원 한 바퀴 360° = 호AB + 호BC + 호AD + 호DC 라는 한 식으로 묶어 미지의 두 호를 결정"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "한 호에 대한 원주각의 성질"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ∠ABD 를 호 AD 로, ∠DAC 를 호 DC 로 바꾸고, 남은 호 AB·BC 가 서로 같다는 조건을 써서 원 한 바퀴를 한 식으로 세워야 x 가 나온다. 각 하나를 옮기는 것으로는 끝나지 않고 전체를 통합하는 단계가 필요해 I-CON d2. 앞 핵심문제(89-h6)보다 한 단계 무겁고 M_total 7 → 구역 출발 ★2 에서 +1 하여 ★3. [분류 이슈] 확인문제인데 짝이 되는 핵심문제보다 무거워 ★2/★3 사이.
  tier: star_3
  mechanism_primary: "∠ABD → 호 AD · ∠DAC → 호 DC → 360° − (호AD + 호DC) 를 호AB = 호BC 로 이등분 → ∠x 는 그 절반의 원주각"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$42^\circ$'
  answer_source: "답지"
  figure: "crop:fig-89-c6.png"
  latex: latex-bank/gn-m32/items/89-c6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "∠ABD 와 ∠DAC 를 바꿀 수 있음. 제약: 두 각의 합 < 180° 이어야 남은 호가 양수이고, 360° − 2(∠ABD + ∠DAC) 가 4 의 배수여야 답이 정수. 호 AB = 호 BC 상등 표시와 네 점 배치는 그림 고정."
    creative: "(1) 호 AB : 호 BC 를 1:2 로 바꾸면 이등분이 비례 배분으로(★3) (2) x 대신 삼각형 ABD 의 남은 각을 묻기(★2) (3) 네 점을 내접사각형으로 보고 대각의 합 180° 로 푸는 다른 경로를 열어 두면 I-SC d2 추가(★4)."
```

```yaml
- id: GN-M32-90-h7
  page: 90
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    호 BC = 6 cm, 호 CD = 9 cm 이고 ∠BAC = 24° 일 때 ∠BED 의 크기.
  category: "원주각 ∝ 호의 길이 → 호 BD 에 대한 원주각"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "원주각의 크기와 호의 길이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ∠BAC 가 호 BC(6 cm)에 대응하므로 호 BD = 6 + 9 = 15 cm 에 대응하는 원주각은 비례식 한 줄. 두 호를 먼저 합쳐야 한다는 점만 유의하면 정형이라 통찰 없음. 구역 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "호 BD = 호BC + 호CD = 15 → 24° : 6 = ∠BED : 15 → ∠BED"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$60^\circ$'
  answer_source: "본문 답"
  figure: "crop:fig-90-h7.png"
  latex: latex-bank/gn-m32/items/90-h7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 호의 길이와 ∠BAC 를 바꿀 수 있음. 제약: (호BC + 호CD) / 호BC 가 ∠BAC 와 곱해 정수가 되도록 하고, 결과 원주각이 180° 미만이어야 함. 점 E 가 호 BD 의 반대쪽에 있다는 배치는 그림 고정."
    creative: "(1) ∠BED 를 주고 호 CD 를 묻는 역방향(★2 · I-BW d1) (2) 90-c7 처럼 두 현의 교각을 끼워 넣기(★2~3) (3) 호를 원둘레에 대한 비율로 주면 92-10 골조(★3)."
```

```yaml
- id: GN-M32-90-c7
  page: 90
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    호 BC = 12 cm 이고 ∠BDC = 30°, 두 현의 교점에서 ∠BPC = 80° 일 때 호 AD 의 길이.
  category: "삼각형의 외각으로 ∠ACD 역산 → 원주각 ∝ 호 비례식 → 호 AD"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "구하려는 호 AD 에 대응하는 원주각이 직접 주어지지 않아, 교각 80° 를 외각으로 분해해 ∠ACD 를 먼저 역산"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "원주각의 크기와 호의 길이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    호 AD 의 원주각 ∠ACD 가 그림에 없어서, 교점 P 의 각 80° 가 삼각형의 외각으로 ∠BDC + ∠ACD 임을 이용해 먼저 만들어야 한다(역방향 I-BW d1). 그 뒤는 30° : 12 = ∠ACD : 호AD 비례식 한 줄. 구역 출발 ★2·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "∠BPC = ∠BDC + ∠ACD → ∠ACD = 50° → 30° : 12 = 50° : 호AD"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$20\,\mathrm{cm}$'
  answer_source: "답지"
  figure: "crop:fig-90-c7.png"
  latex: latex-bank/gn-m32/items/90-c7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "호 BC, ∠BDC, ∠BPC 를 바꿀 수 있음. 제약: ∠BPC > ∠BDC 이어야 ∠ACD 가 양수이고, (∠BPC − ∠BDC) / ∠BDC × 호BC 가 정수가 되게 조합할 것. 교점 P 가 원 안이라는 배치는 그림 고정."
    creative: "(1) 호 AD 를 주고 ∠BPC 를 묻는 방향 뒤집기(★2) (2) 교점을 원 밖으로 옮겨 외각이 차가 되게 하면 T-부호 함정(★3) (3) 호 AD : 호 BC 를 묻게 하면 각이 지워져도 풀리는 비례 문제(★2)."
```

```yaml
- id: GN-M32-90-h8
  page: 90
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    원 O 에서 호 AB : 호 BC : 호 CA = 3 : 4 : 5 일 때 삼각형 ABC 의 세 내각 ∠A, ∠B, ∠C 의 크기.
  category: "호의 비 = 원주각의 비 → 내각의 합 180° 로 배분"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "원주각의 크기와 호의 길이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    세 내각의 비가 마주 보는 호의 비와 같으므로 180° 를 3:4:5 로 배분. 각 각이 어느 호에 대응하는지(∠A ↔ 호 BC) 짝짓는 것이 유일한 함정이라 Mₜ 2. 비례 배분 자체는 정형이라 통찰 없음 → 구역 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "∠A:∠B:∠C = 호BC:호CA:호AB = 4:5:3 → 180° 를 비례 배분"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\angle\pt{A}=60^\circ$, $\angle\pt{B}=75^\circ$, $\angle\pt{C}=45^\circ$'
  answer_source: "본문 답"
  figure: "crop:fig-90-h8.png"
  latex: latex-bank/gn-m32/items/90-h8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 호의 비를 바꿀 수 있음. 제약: 비의 합이 180 의 약수여야 세 각이 모두 정수(예: 1:2:3 · 2:3:4 · 3:4:5 · 5:6:7). 삼각형 ABC 가 원에 내접한다는 배치는 그림 고정."
    creative: "(1) 90-c8 처럼 가장 큰 내각 하나만 묻기(★2) (2) 세 호의 비 대신 두 호의 비와 한 각을 주면 조건 통합(★3) (3) 호의 비에서 넓이·외접원 반지름까지 잇게 하면 XU 결합(★4)."
```

```yaml
- id: GN-M32-90-c8
  page: 90
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    원 O 에서 호 AB : 호 BC : 호 CA = 2 : 3 : 4 일 때 삼각형 ABC 의 가장 큰 내각의 크기.
  category: "호의 비 = 원주각의 비 → 가장 긴 호에 대응하는 각 선택 → 180° 배분"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "원주각의 크기와 호의 길이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    90-h8 의 축소판. 세 각을 다 구하지 않고 가장 긴 호(4)에 대응하는 각만 180° × 4/9 로 뽑으면 된다. 「가장 큰 내각 = 가장 긴 호의 원주각」 대응을 놓치기 쉬운 것이 함정이라 Mₜ 2. 통찰 없음 → 구역 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "가장 긴 호 CA(비 4)의 원주각이 최대각 → 180° × 4/9"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$80^\circ$'
  answer_source: "답지"
  figure: "crop:fig-90-c8.png"
  latex: latex-bank/gn-m32/items/90-c8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 호의 비를 바꿀 수 있음. 제약: 비의 합이 180 의 약수여야 정수각, 최댓값이 하나로 정해지도록 세 수가 서로 달라야 함. 가장 작은 각을 묻는 변형도 같은 제약."
    creative: "(1) 가장 큰 각과 가장 작은 각의 차를 묻기(★2~3) (2) 둔각삼각형이 되는 비의 조건을 찾게 하면 I-BW d2(★4) (3) 세 각을 모두 묻는 90-h8 로 되돌리기(★2)."
```

### 이런 문제가 시험에 나온다

```yaml
- id: GN-M32-91-01
  page: 91
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험대비"
  summary: |
    원 O 에서 ∠OAB = 28° 일 때 ∠x 의 크기. 5지선다.
  category: "반지름 이등변삼각형 → 중심각 → 원주각"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "원주각과 중심각의 크기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    OA = OB 이므로 삼각형 OAB 가 이등변, ∠AOB = 180° − 2 × 28° = 124°, 원주각은 그 절반. 중심각이 직접 주어지지 않고 밑각으로 한 겹 감춰진 정도라 통찰 없음. 시험 구역 출발 ★2~3 중 M_total 5·통찰 0 이라 ★2.
  tier: star_2
  mechanism_primary: "OA=OB 이등변 → ∠AOB = 180° − 2∠OAB → ∠x = ∠AOB / 2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: "crop:fig-91-01.png"
  latex: latex-bank/gn-m32/items/91-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "∠OAB 를 1~89° 에서 바꿀 수 있음. 제약: 180 − 2∠OAB > 0 이고 짝수여야 원주각이 정수(∠OAB 를 정수로 두면 자동), 선택지는 답 주변 2° 간격으로 배치하면 원 문항의 오답 유도가 유지됨."
    creative: "(1) 객관식을 주관식으로 바꾸고 우호 쪽 원주각을 묻기(★3) (2) ∠OAB 대신 ∠AOB 의 외각을 주기(★2) (3) 삼각형 OAB 의 넓이나 현 AB 의 길이를 함께 묻으면 삼각비 결합(★3)."
```

```yaml
- id: GN-M32-91-02
  page: 91
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험대비"
  summary: |
    반지름 3 cm 인 원 O 에서 ∠ABC = 100° 일 때 색칠한 부분(부채꼴)의 넓이.
  category: "원주각 → 중심각(우호) → 부채꼴의 넓이"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "원주각으로 얻은 중심각을 중1 「원과 부채꼴」의 넓이 공식으로 넘겨 각 문제를 넓이 문제로 결합"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "원주각과 중심각의 크기 → 부채꼴의 넓이"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ∠ABC = 100° 는 열호에 대한 원주각이므로 색칠된 쪽 중심각은 200° 이고, 여기에 부채꼴 넓이 공식을 붙인다. 우호·열호를 뒤집으면 160° 쪽을 계산하게 되는 T-범위 함정이 핵심이라 Mₜ 2. 단원을 건너 넓이로 잇는 I-XU d1 하나·M_total 7 → 시험 구역에서 ★3.
  tier: star_3
  mechanism_primary: "∠ABC=100° → 색칠한 쪽 중심각 200° → 넓이 = π r² × 200/360"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$5\pi\,\mathrm{cm}^2$'
  answer_source: "답지"
  figure: "crop:fig-91-02.png"
  latex: latex-bank/gn-m32/items/91-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "반지름과 ∠ABC 를 바꿀 수 있음. 제약: 2∠ABC 가 360 의 약수 배수로 떨어지고 r² × (중심각/360) 이 정리되도록(예: r=6, ∠ABC=105° → 중심각 210° → 21π). 색칠 영역이 우호 쪽이라는 그림 표시는 고정."
    creative: "(1) 넓이 대신 색칠한 호의 길이를 묻기(★3 유지) (2) 부채꼴에서 삼각형을 빼는 활꼴 넓이로 바꾸면 계산 부담만 커지므로 질 저하 주의(★3) (3) 넓이를 주고 ∠ABC 를 묻는 역방향(★3 · I-BW d1 추가)."
```

```yaml
- id: GN-M32-91-03
  page: 91
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험대비"
  summary: |
    PA, PB 가 원 O 의 접선(접점 A, B)이고 ∠APB = 48° 일 때 ∠x 의 크기.
  category: "접선 사이 각 → 중심각(보각) → 반대쪽 호의 원주각"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "사각형 APBO 의 두 직각으로 ∠AOB = 180° − ∠APB 라는 보각 관계로 조건을 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "원주각과 중심각의 크기: 두 접선이 주어진 경우"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    87-c2 와 같은 보각 전환(I-EQV d1)을 쓰지만, ∠x 를 보는 점이 열호 쪽이 아니라 반대쪽에 있어 중심각을 360° − 132° = 228° 로 바꾼 뒤 절반을 잡아야 한다. 이 한 겹 때문에 확인문제보다 한 단계 무겁다. 통찰 1·Mₜ 2·M_total 6 → 시험 구역에서 ★3. [분류 이슈] 87-c2 와 골조가 같아 ★2 로도 볼 수 있음.
  tier: star_3
  mechanism_primary: "∠APB=48° → ∠AOB = 132° → 반대쪽 중심각 228° → ∠x = 228° / 2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$114^\circ$'
  answer_source: "답지"
  figure: "crop:fig-91-03.png"
  latex: latex-bank/gn-m32/items/91-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "∠APB 를 바꿀 수 있음. 제약: 0 < ∠APB < 180 이고 360 − (180 − ∠APB) 가 짝수여야 정수(∠APB 를 짝수로). 원주각을 보는 점이 어느 호에 있는지는 그림 고정."
    creative: "(1) ∠x 를 열호 쪽 원주각으로 되돌리면 87-c2 와 같아져 ★2 (2) ∠x + (열호 쪽 원주각) = 180° 임을 묻는 내접사각형 문제로 바꾸기(★3) (3) 접선의 길이 PA 와 반지름을 함께 주면 삼각비 결합(★4)."
```

```yaml
- id: GN-M32-91-04
  page: 91
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험대비"
  summary: |
    원 O 에서 ∠APB = 20°, ∠BOC = 80° 일 때 ∠x(= ∠AQC)의 크기.
  category: "원주각 → 중심각 ∠AOB → ∠AOC = ∠AOB + ∠BOC → 원주각"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "원주각과 중심각의 크기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ∠APB 를 중심각 40° 로 올리고, 이미 주어진 ∠BOC = 80° 와 붙여 ∠AOC = 120° 를 만든 뒤 다시 절반. 중심각을 경유지로 삼는 표준 경로라 통찰 없음. 시험 구역이지만 M_total 5·통찰 0 → ★2.
  tier: star_2
  mechanism_primary: "∠APB=20° → ∠AOB=40° → ∠AOC = 40° + 80° = 120° → ∠x = 60°"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$60^\circ$'
  answer_source: "답지"
  figure: "crop:fig-91-04.png"
  latex: latex-bank/gn-m32/items/91-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "∠APB 와 ∠BOC 를 바꿀 수 있음. 제약: 2∠APB + ∠BOC < 360 이고 그 합이 짝수여야 ∠x 가 정수. 점 A, B, C 의 원 위 순서(B 가 A 와 C 사이)는 그림 고정."
    creative: "(1) 합이 아니라 차가 되도록 B 를 A·C 바깥으로 옮기면 T-부호 함정(★3) (2) ∠AQC 를 주고 ∠BOC 를 묻는 역방향(★2~3 · I-BW d1) (3) 호 AB : 호 BC 를 함께 물으면 호↔각 비례 결합(★3)."
```

```yaml
- id: GN-M32-91-05
  page: 91
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험대비"
  summary: |
    AB 가 반원 O 의 지름이고 ∠COD = 36° 일 때 두 선분의 교점에서 생기는 ∠APB 의 크기.
  category: "지름에 대한 원주각 90° + 작은 중심각의 원주각 → 삼각형 내각합"
  M: {s: 3, k: 1, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "떨어져 있는 두 조건(지름이 만드는 90° 와 중심각 36° 가 만드는 원주각 18°)을 ∠APB 를 포함하는 한 삼각형 안으로 모음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "반원에 대한 원주각의 크기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    지름 AB 에 대한 원주각이 90°, 중심각 36° 인 호 CD 에 대한 원주각이 18°. 이 둘이 ∠APB 와 같은 삼각형의 세 각이 되도록 묶어야 180° − 90° − 18° 가 나온다. 조건이 그림의 서로 다른 곳에 흩어져 있어 모으는 단계를 I-CON d1 로 셈. 통찰 1·M_total 6 → 시험 구역에서 ★3.
  tier: star_3
  mechanism_primary: "지름 → 원주각 90° · 중심각 36° → 원주각 18° → 삼각형 내각합 180° − 90° − 18°"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$72^\circ$'
  answer_source: "답지"
  figure: "crop:fig-91-05.png"
  latex: latex-bank/gn-m32/items/91-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "∠COD 를 바꿀 수 있음. 제약: 짝수여야 원주각이 정수이고, 90° + (∠COD / 2) < 180° 이어야 삼각형이 성립(∠COD < 180°). 반원·지름 배치와 C, D 가 호 위에 있다는 설정은 그림 고정."
    creative: "(1) ∠COD 대신 호 CD 의 길이와 반원의 둘레 비로 주기(★3 · I-EQV d2) (2) ∠APB 를 주고 ∠COD 를 묻는 역방향(★3) (3) 반원이 아닌 원으로 바꾸고 두 할선의 각 = 호 차의 절반을 일반화시키면 ★4."
```

```yaml
- id: GN-M32-92-06
  page: 92
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험대비"
  summary: |
    원 O 에 내접하는 삼각형 ABC 에서 BC = 4 cm 이고 tan A = √2 일 때 원 O 의 넓이. 5지선다.
  category: "지름 보조선 → 직각삼각형 → tan 값에서 변 역산 → 지름 → 넓이"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "지름을 그어 ∠A 를 직각삼각형의 각으로 옮겨 각·삼각비 문제를 변의 길이 문제로 전환"
    - step: 2
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "구하는 것이 넓이이므로 tan 값 → 나머지 변 → 빗변(지름) → 반지름 순으로 거꾸로 올라가야 함"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "원주각의 성질과 삼각비의 값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    89-h5 의 보조선 골조를 그대로 쓰되 방향이 반대다. 지름 BA' 를 긋고 ∠A' = ∠A, ∠BCA' = 90° 에서 tan A' = BC / A'C 로 A'C 를 역산한 뒤, 피타고라스로 지름 → 반지름 → 넓이까지 세 번 더 올라간다. I-RT d2 + I-BW d1 · M_total 7 → 시험 구역에서 ★3.
  tier: star_3
  mechanism_primary: "지름 BA' 작도 → tan A = BC / A'C 로 A'C 역산 → 지름 = √(BC² + A'C²) → 넓이 = π (지름/2)²"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "②"
  answer_source: "답지"
  figure: "crop:fig-92-06.png"
  latex: latex-bank/gn-m32/items/92-06.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "BC 와 tan A 를 바꿀 수 있음. 제약: tan A 값에 맞춰 BC : A'C 비가 떨어져야 하고 BC² + A'C² 이 정리되어야 함(예: tan A = 2, BC = 4 → A'C = 2 → 지름 2√5 → 넓이 5π). 선택지는 π 계수만 바꾼 다섯 개로."
    creative: "(1) 넓이 대신 외접원의 둘레·반지름을 묻기(★3 유지) (2) tan 대신 sin 을 주면 지름 = BC / sin A 한 줄로 끝나 ★2 (3) 삼각형의 넓이까지 함께 물으면 XU 결합 ★4."
```

```yaml
- id: GN-M32-92-07
  page: 92
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험대비"
  summary: |
    AB 가 원 O 의 지름이고 호 AD = 호 CD, ∠BAC = 26° 일 때 ∠x 의 크기.
  category: "지름 → 원주각 90° → 나머지 각 → 호 상등으로 이등분"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "반원에 대한 원주각의 크기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    AB 가 지름이므로 ∠ACB = 90°, 삼각형에서 ∠ABC = 64°. 호 AD = 호 CD 이므로 그 각을 두 원주각이 똑같이 나눠 가져 절반인 32°. 성질 세 개를 순서대로 쓰는 정형이고 새 착안이 없어 통찰 없음 → 시험 구역에서 ★2.
  tier: star_2
  mechanism_primary: "지름 AB → ∠ACB=90° → ∠ABC = 90° − 26° = 64° → 호AD = 호CD 로 이등분 → ∠x = 32°"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$32^\circ$'
  answer_source: "답지"
  figure: "crop:fig-92-07.png"
  latex: latex-bank/gn-m32/items/92-07.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "∠BAC 를 1~89° 에서 바꿀 수 있음. 제약: 90° − ∠BAC 가 짝수여야 이등분 결과가 정수(∠BAC 를 짝수로). 호 AD = 호 CD 상등과 네 점 배치는 그림 고정."
    creative: "(1) 호 AD : 호 CD 를 1:2 로 바꾸면 이등분이 비례 배분(★3) (2) ∠x 를 D 에서 보는 각으로 옮기기(★2) (3) BD 를 그어 사각형 ABCD 의 대각 관계까지 묻기(★3 · I-CON d1)."
```

```yaml
- id: GN-M32-92-08
  page: 92
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험대비"
  summary: |
    원 O 에서 호 AB = ½ 호 BC 이고 ∠AEB = 25° 일 때 ∠x + ∠y (x = ∠BEC, y = ∠ADC)의 크기.
  category: "호의 비 → 원주각의 비 → 같은 호의 원주각 상등 → 두 각의 합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "원주각의 크기와 호의 길이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    호 BC 가 호 AB 의 2배이므로 ∠BEC = 2 × 25° = 50°. ∠ADC 는 호 AC 를 보는 각이라 같은 호를 보는 ∠AEC = 25° + 50° 와 같다. 호↔원주각 비례와 상등만 두 번 쓰는 정형이라 통찰 없음 → M_total 5·통찰 0 으로 시험 구역에서 ★2.
  tier: star_2
  mechanism_primary: "호BC = 2 호AB → ∠x = 2 × 25° = 50° → ∠y = ∠AEC = 25° + 50° = 75° → 합 125°"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$125^\circ$'
  answer_source: "답지"
  figure: "crop:fig-92-08.png"
  latex: latex-bank/gn-m32/items/92-08.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "∠AEB 와 호의 비(1:2)를 바꿀 수 있음. 제약: ∠AEB × (1 + 비) 가 180° 를 넘지 않아야 하고 비가 정수·간단한 분수여야 답이 정수. 점 D 가 호 AC 의 반대쪽에 있다는 배치는 그림 고정."
    creative: "(1) x 와 y 를 따로 묻기(★2) (2) 호 AB : 호 BC : 호 CA 세 항의 비로 확장하면 90-h8 골조(★2~3) (3) 호의 비 대신 원둘레에 대한 분수로 주면 92-10 골조(★3)."
```

```yaml
- id: GN-M32-92-09
  page: 92
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험대비"
  summary: |
    AB 와 CD 가 모두 원 O 의 지름이고 ∠DCB = 30°, 호 DB = 6 cm 일 때 호 AD 의 길이. 5지선다.
  category: "원주각 → 중심각 → 지름이므로 보각 → 호는 중심각에 비례"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "원주각의 크기와 호의 길이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ∠DCB = 30° 에서 ∠DOB = 60°. AB 가 지름이라 ∠AOD = 180° − 60° = 120° 이고, 호는 중심각에 비례하므로 6 × (120/60). 지름이 일직선(180°)이라는 사실을 중간에 한 번 쓰는 정도라 통찰 없음 → 시험 구역에서 ★2.
  tier: star_2
  mechanism_primary: "∠DCB=30° → ∠DOB=60° → 지름 AB 로 ∠AOD = 120° → 호AD = 6 × 120/60"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: "crop:fig-92-09.png"
  latex: latex-bank/gn-m32/items/92-09.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "∠DCB 와 호 DB 를 바꿀 수 있음. 제약: 2∠DCB < 180° 이어야 ∠AOD 가 양수이고, (180 − 2∠DCB) / (2∠DCB) × 호DB 가 정수가 되게 조합(예: ∠DCB=45°, 호DB=6 → 호AD=6). 두 지름이 중심에서 만난다는 배치는 그림 고정."
    creative: "(1) 호 AD 를 주고 ∠DCB 를 묻는 역방향(★2~3) (2) CD 를 지름이 아닌 현으로 바꾸면 보각 단계가 사라져 ★2 (3) 호 AD + 호 BC 처럼 맞꼭지 호의 합을 묻기(★3 · I-SYM d1)."
```

```yaml
- id: GN-M32-92-10
  page: 92
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험대비"
  summary: |
    호 AB, 호 CD 의 길이가 각각 원의 둘레의 1/6, 1/9 일 때 두 현의 교점에서 생기는 ∠x 의 크기.
  category: "둘레에 대한 비율 → 중심각 → 원주각 → 삼각형의 외각으로 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「둘레의 1/6」이라는 길이 조건을 360° × 1/6 인 중심각으로 바꿔야 각 계산이 시작됨"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "원주각의 크기와 호의 길이"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    호의 길이가 수치가 아니라 원둘레에 대한 분수로만 주어져, 먼저 중심각 60°·40° 로 동치 변환해야 한다(I-EQV d2). 그 뒤 각각의 원주각 30°·20° 를 삼각형의 외각으로 합쳐 ∠x. 조건 표현이 한 겹 감춰져 있고 M_total 6 → 시험 구역에서 ★3.
  tier: star_3
  mechanism_primary: "둘레 비 → 중심각 60°·40° → 원주각 30°·20° → 교점의 각 = 두 원주각의 합"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$50^\circ$'
  answer_source: "답지"
  figure: "crop:fig-92-10.png"
  latex: latex-bank/gn-m32/items/92-10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 분수를 바꿀 수 있음. 제약: 360 × 분수가 짝수 정수여야 원주각이 정수(분모를 360 의 약수인 5·6·8·9·10·12 로), 두 호의 합이 원 전체보다 작아야 함. 교점이 원 안이라는 배치는 그림 고정."
    creative: "(1) 교점을 원 밖으로 옮기면 합이 아니라 차(★3~4 · T-부호) (2) 분수 대신 호의 길이와 반지름을 주면 둘레 계산이 한 단계 추가(★3) (3) ∠x 를 주고 한쪽 분수를 묻는 역방향(★3 · I-BW d1)."
```

## 표본 판정 요약 (30문)

- ★ 분포: ★1 4 · ★2 20 · ★3 6 · ★4 0 · ★5 0
- 통찰형 11 · 절차형 19 · premium 0
- 통찰 코드 분포: I-EQV 4(87-h2 · 87-c2 · 91-03 · 92-10) · I-RT 3(89-h5 · 89-c5 · 92-06) · I-CON 2(89-c6 · 91-05) · I-BW 2(90-c7 · 92-06) · I-XU 1(91-02). depth 3 은 없고 ★4·★5 도 없다 — 개념원리 중학 본문 구역(확인하기·핵심문제·시험에 나온다)까지는 변별 슬롯이 나오지 않는다.
- type_hint 상위: 「원주각의 크기와 호의 길이」 9 · 「원주각과 중심각의 크기」 5 · 「반원에 대한 원주각의 크기」 5 · 「한 호에 대한 원주각의 성질」 4 · 「원주각과 중심각의 크기: 두 접선이 주어진 경우」 3 (그 밖에 「원주각의 성질과 삼각비의 값」 3 · 「원주각과 중심각의 크기 → 부채꼴의 넓이」 1)
- 그림: 30문 전부 크롭 있음(`crop:fig-<id>.png`). 소문항 묶음(⑴~⑶) 그림은 `figure_layout: below` 인 확인하기·확인문제 쪽에 몰려 있다.
- 대상층: 하위권 4 · 중하위권 15 · 중위권 6 · 중상위권 5 · 상위권 0.

## 분류 이슈 목록

판정이 애매하거나 벤더 구역 신호와 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-M32-89-c6 | 「핵심문제 익히기」의 확인문제인데 짝이 되는 핵심문제(89-h6)보다 한 단계 무겁다(원 한 바퀴 360° 구성 · I-CON d2 · M_total 7). 구역 신호는 ★2 | ★2 / ★3 |
| GN-M32-91-03 | 87-c2 와 접선 보각 골조가 동일하고, 차이는 ∠x 가 반대쪽 호의 원주각이라는 한 겹뿐. 그 한 겹을 ★ 1단으로 볼지 함정(Mₜ)으로만 볼지 | ★2 / ★3 |
| GN-M32-91-02 | 원주각 단원에 있지만 실제 부담의 절반이 중1 「원과 부채꼴」 넓이 계산이다. type_hint 를 원주각 쪽으로 둘지 부채꼴 쪽으로 둘지 카탈로그 설계 때 결정 필요 | ★3 |

**카탈로그 차원 메모** (나중에 유형 카탈로그를 만들 때 참고)

- 이 단원은 「원주각과 중심각」 · 「한 호에 대한 원주각」 · 「반원에 대한 원주각」 · 「원주각과 호의 길이」 **네 축**으로 거의 전부 덮인다. 카탈로그를 세운다면 이 넷을 base 유형으로 두고 나머지를 변형으로 매다는 구조가 자연스럽다.
- **따로 세워야 할 유형**: ⑴ 「두 접선이 주어진 경우」(87-h2 · 87-c2 · 91-03) — 접선 ⊥ 반지름과 사각형 내각합이 필요해 중심각 유형과 도구가 다르다. ⑵ 「원주각의 성질과 삼각비의 값」(89-h5 · 89-c5 · 92-06) — 지름 보조선 작도가 골조를 지배하고, 이 단원에서 유일하게 삼각비·피타고라스를 쓴다. base ★2~3 권장.
- **통합해도 될 유형**: 90-h8 과 90-c8 은 「세 호의 비 → 세 내각」 하나에서 묻는 개수만 다르다. 89-h6·90-c7·92-10 의 「두 현의 교각 = 두 원주각의 합」도 한 유형으로 묶고 교점이 원 안/밖인 경우를 변형으로 두는 편이 낫다. 86-01~86-04 는 각 base 유형의 ★1 진입 슬롯으로 흡수 가능.
- **경계가 걸치는 것**: 91-02(부채꼴 넓이)는 중1 단원과의 결합이라 원주각 카탈로그에 두면 I-XU 가 base 에 섞인다. 별도 「원주각 → 부채꼴」 결합 유형으로 빼거나, 원과 부채꼴 카탈로그에 교차 참조를 거는 방식을 권한다.
