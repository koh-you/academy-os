---
name: mechanism-데이터-GN-M32-05-p2
description: 개념원리 중학 3-2 05 넓이 구하기(2/2 · 중단원 마무리하기 STEP 1~3 · 서술형 대비) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 중학 3-2 · 전사본 latex-bank/gn-m32
  section: 05 넓이 구하기
  unit_code: "05"
  part: "2/2"
  extract_range: "50~55쪽 · 50-01~55-u6"
  total_problems: 32
  unit_total: 49
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-m32/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-m32/items/<id>.tex
  image_source: latex-bank/gn-m32/figures/ (crops.json)
---

# 개념원리 중학 3-2 · 05 넓이 구하기 (2/2) 정독 데이터 (v1.0)

이 파일은 05단원 「넓이 구하기」(실제 내용은 삼각비의 활용 — 변의 길이·실생활 측량·삼각형과 사각형의 넓이)의 뒷부분 32문항을 다룬다. 구역은 「중단원 마무리하기 STEP 1 기본 문제」 12문(50~51쪽) · 「STEP 2 발전 문제」 9문(52~53쪽) · 「STEP 3 실력 UP」 3문(53쪽) · 「서술형 대비 문제」 8문(54~55쪽)이다. 개념원리 중학은 난이도 표기(level)가 없고 **구역 자체가 난이도 층**이므로 STEP 1 → ★2, STEP 2 → ★3, STEP 3 → ★4, 서술형 대비 → ★3 을 출발점으로 삼고 M_total·통찰로 ±1 조정했다. tag 「꼭나와」는 빈출 표시일 뿐 ★ 에 더하지 않았다(이 범위 7문).

통찰 인정 기준은 이 단원에서 반복되는 **표준 절차와 진짜 착안**을 갈라 일관되게 적용했다. 직각삼각형에 삼각비를 그대로 대입하는 것, 두 직각삼각형을 이어 붙이는 측량 표준형, 둔각의 삼각비를 180°−A 로 바꾸는 것, 넓이 공식 (1/2)ab sin C 를 그대로 쓰는 것은 **절차형**으로 두었다. 반대로 보조선(수선·대각선·반지름)을 스스로 도입해야 분해되는 것, 등적변형, 넓이·비 조건에서 각·변을 역추적하는 것, 원주각·무게중심 같은 **다른 단원 성질과의 결합**, 회전 대칭 발견은 통찰로 카운트했다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 사슬) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 창의 변형과 ★ 변동 지점)를 채웠다.

## 문항 데이터

### 중단원 마무리하기 STEP 1 기본 문제

```yaml
- id: GN-M32-50-01
  page: 50
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리"
  summary: |
    ∠C=90°인 직각삼각형 ABC(a=BC, b=CA, c=AB)에서 변을 삼각비로 나타낸 다섯 식 중 옳지 않은 것 고르기. 5지선다.
  category: "직각삼각형의 변 → 삼각비 표현 → 선택지 대조"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직각삼각형의 변의 길이를 삼각비로 나타내기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    각 변을 빗변·이웃변 기준으로 sin·cos·tan 어느 것에 붙여야 하는지 다섯 번 대조하는 정의 확인 문항.
    함정은 sin 자리에 tan 을 끼워 넣은 항(T-표기) 하나뿐이고 변형 단계도 각 한 줄.
    문자 표현(a, b, c)이라 Mₐ=2 이지만 통찰 없음 · M_total 6 → STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "∠C=90° → 각 변을 빗변 c 기준 sin·cos, 이웃변 기준 tan 으로 표현 → 선택지와 대조"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '④'
  answer_source: "답지"
  figure: "crop:fig-50-01.png"
  latex: latex-bank/gn-m32/items/50-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수치가 없는 문자식 문항이라 바꿀 수는 각이 아니라 표기다. 직각의 위치(∠C → ∠B)와 변 이름(a, b, c)을 바꿀 수 있고, 그림 라벨과 반드시 함께 옮겨야 한다. 제약: 오답 항은 정확히 하나여야 하고 나머지 네 항은 모두 참이어야 한다."
    creative: "(1) 옳은 것을 모두 고르는 ㄱㄴㄷ 보기로(★2 유지) (2) 한 변의 길이를 수치로 주고 나머지를 삼각비로 나타내게 하기(★1) (3) 두 직각삼각형을 붙여 공통변을 두 가지 삼각비로 표현하게 하면 표현 전환이 생겨 ★3."
```

```yaml
- id: GN-M32-50-02
  page: 50
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리"
  summary: |
    직육면체에서 FG=4 cm, GH=2√3 cm, ∠CFG=60°일 때 부피 구하기.
  category: "입체 속 직각삼각형 → tan 으로 높이 → 밑넓이×높이"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직육면체·기둥에서 삼각비로 모서리를 구해 부피 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    옆면의 직각삼각형 CFG 에서 CG=FG·tan 60° 로 높이를 얻고 밑넓이 FG×GH 를 곱하는 두 단계.
    직각삼각형이 그림에 이미 드러나 있어 단면을 찾는 착안이 필요하지 않다(절차형).
    무리수 곱(8√3 × 4√3)이 있어 Mₖ=2 · M_total 6 → STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "∠CFG=60°, FG=4 → CG=4tan60°=4√3 → 밑넓이 4×2√3 → 부피 96"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$96\,\mathrm{cm}^3$'
  answer_source: "답지"
  figure: "crop:fig-50-02.png"
  latex: latex-bank/gn-m32/items/50-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "FG·GH 와 각(30°·45°·60°)을 바꿀 수 있다. 제약: 특수각이어야 tan 값이 무리수 한 겹으로 끝나고, 부피가 유리수 또는 √ 한 겹으로 정리되도록 FG×GH 를 고르면 좋다."
    creative: "(1) 부피를 주고 모서리나 각을 역으로 묻기(I-BW 생겨 ★3) (2) 대각선 CF 의 길이나 ∠CFG 를 삼각비로 묻기(★2) (3) 직육면체를 삼각기둥·사각뿔로 바꾸면 단면 찾기가 생겨 ★3."
```

```yaml
- id: GN-M32-50-03
  page: 50
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "중단원 마무리"
  summary: |
    수평면 위 AB=200 m, ∠BAH=30°(수평면), ∠CAH=45°(연직면)일 때 산의 높이 CH 구하기. 5지선다.
  category: "수평면 직각삼각형 → 공유변 AH → 연직 직각삼각형"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각비의 실생활 활용 — 수평면과 연직면 두 직각삼각형으로 높이 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    수평면의 직각삼각형 ABH 에서 AH=200cos30°, 연직면의 직각삼각형 ACH 에서 CH=AH·tan45°.
    두 평면이 AH 를 공유한다는 구조가 그림에 직각 표시로 명시돼 있어 이 교재의 표준 2단 절차(절차형).
    통찰 없음 · M_total 6 → −1 조건(M_total ≤ 5) 미충족 → STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "△ABH(∠H=90°, ∠A=30°) → AH=100√3 → △ACH(∠CAH=45°) → CH=AH=100√3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '③'
  answer_source: "답지"
  figure: "crop:fig-50-03.png"
  latex: latex-bank/gn-m32/items/50-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AB(200 m)와 두 각(30°/45° → 60°/30°, 45°/60°)을 바꿀 수 있다. 제약: 두 각이 모두 특수각이어야 하고, 연직각을 45°가 아닌 값으로 하면 답에 √3 이 두 겹 들어가므로 AB 를 √3 배수로 고를 것. 그림의 직각 표시(H) 두 개는 고정."
    creative: "(1) 산의 높이를 주고 AB 나 한 각을 역으로 묻기(I-BW · ★3) (2) A, B 두 지점에서 각각 올려다본 각을 주고 AB 를 이용하게 하면 미지수 설정이 필요해 ★3 (3) 수평면 삼각형을 정삼각형·이등변으로 바꿔 AH 를 먼저 구하게 하면 ★3."
```

```yaml
- id: GN-M32-50-04
  page: 50
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리"
  summary: |
    △ABC 에서 AB=9, BC=10, cos B=1/3 일 때 AC 의 길이. 5지선다.
  category: "꼭짓점에서 수선 → 두 직각삼각형 → 피타고라스"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "한 변과 두 변의 끼인각(삼각비)이 주어진 삼각형에서 나머지 변의 길이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    A 에서 BC 에 수선 AH 를 내려 BH=9cos B=3, AH=√(81−9)=6√2, HC=7 로 나눈 뒤 피타고라스로 AC.
    「수선을 그어 직각삼각형 둘로」는 이 단원이 앞에서 공식처럼 가르치는 표준 절차라 통찰로 세지 않았다.
    6√2 와 √121 의 처리로 Mₖ=2 · 통찰 없음 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "A 에서 BC 에 수선 AH → BH=3, AH=6√2, HC=7 → AC=√(AH²+HC²)=11"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑤'
  answer_source: "답지"
  figure: "crop:fig-50-04.png"
  latex: latex-bank/gn-m32/items/50-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AB, BC, cos B 를 바꿀 수 있다. 제약: AB·cos B 가 정수라야 BH 가 깔끔하고, AH²+HC² 가 완전제곱이면 답이 정수로 떨어진다(9, 10, 1/3 은 그렇게 맞춰진 조합). cos B 를 1 보다 크게 두지 말 것."
    creative: "(1) cos B 대신 sin B 나 tan B 를 주면 AH 를 먼저 얻는 순서로 바뀜(★2) (2) ∠B 를 둔각으로 두어 수선의 발이 BC 의 연장선 위에 오게 하면 T-범위 함정이 생겨 ★3 (3) AC 를 주고 cos B 를 역으로 묻기(I-BW · ★3)."
```

```yaml
- id: GN-M32-50-05
  page: 50
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "중단원 마무리"
  summary: |
    열기구 A 를 지면의 두 지점 B, C 에서 올려다본 각이 각각 30°, 60°이고 BC=300 m(H 가 B, C 사이)일 때 높이 AH 구하기.
  category: "높이를 미지수로 → 두 tan 식 → BH+HC=BC"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각비의 실생활 활용 — 두 지점에서 올려다본 각과 높이(H 가 두 지점 사이)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    AH=h 로 두고 BH=h/tan30°=√3h, HC=h/tan60°=h/√3 를 BH+HC=300 에 넣어 h 를 얻는 이 단원의 대표 표준형.
    H 가 B, C 사이라 합, 바깥이면 차 — 그림이 위치를 명시하므로 해석 부담이 없어 절차형으로 두었다.
    미지수 h 도입으로 Mₐ=2 · M_total 7 이나 통찰 없음 → STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "AH=h → BH=√3h, HC=h/√3 → √3h+h/√3=300 → h=75√3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$75\sqrt{3}\,\mathrm{m}$'
  answer_source: "답지"
  figure: "crop:fig-50-05.png"
  latex: latex-bank/gn-m32/items/50-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "BC(300 m)와 두 올려본각(30°/60° → 30°/45°, 45°/60°)을 바꿀 수 있다. 제약: 두 각 모두 특수각이어야 하고, 두 tan 의 역수 합이 유리수 배 √3 이 되도록 BC 를 골라야 답이 √ 한 겹으로 끝난다."
    creative: "(1) H 가 BC 의 바깥(B, C 가 같은 쪽)에 오게 해 차 방정식으로 바꾸기(★2~3 · T-범위 함정 추가) (2) 높이를 주고 BC 를 묻기(★2) (3) 두 지점이 서로 다른 높이의 건물 위에 있게 하면 조건 통합이 생겨 ★3."
```

```yaml
- id: GN-M32-50-06
  page: 50
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리"
  summary: |
    △ABC 에서 BC=4, ∠B=40°, ∠ACH=58°(H 는 A 에서 내린 수선의 발, C 가 B 와 H 사이)일 때 AH 를 나타내는 식 고르기. 5지선다.
  category: "AH 를 미지수로 → 여각으로 바꾼 tan → BH−CH=BC"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "밑각 ∠B=40°, ∠ACH=58° 를 그대로 쓰지 않고 AH 를 기준으로 한 ∠BAH=50°, ∠CAH=32° 로 옮겨 BH=AH·tan50°, CH=AH·tan32° 를 만드는 동치 변환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "수선의 발이 변의 연장선 위에 있는 삼각형에서 높이를 식으로 나타내기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    답이 수치가 아니라 식이라 AH 를 기준각으로 하는 여각(50°, 32°)으로 갈아타야 선택지와 맞는 꼴이 나온다.
    C 가 B 와 H 사이여서 BH−CH=4(합이 아니라 차)라는 위치 판단이 두 번째 함정(T-범위·T-표기 → Mₜ=2).
    통찰 1개(EQV d2) · M_total 7 → 조정 없이 STEP 1 출발점 ★2 유지. 다만 기본 문제 중에서는 까다로운 편.
  tier: star_2
  mechanism_primary: "AH=h → ∠BAH=50°, ∠CAH=32° → BH−CH=h(tan50°−tan32°)=4 → h=4/(tan50°−tan32°)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '②'
  answer_source: "답지"
  figure: "crop:fig-50-06.png"
  latex: latex-bank/gn-m32/items/50-06.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "BC(4)와 두 각(40°, 58°)을 바꿀 수 있다. 제약: 특수각을 피해야 답이 식으로 남고, 두 각의 합이 90° 를 넘지 않게 해야 수선의 발이 의도한 쪽에 온다. 그림의 H 위치(C 바깥)는 각과 함께 고정."
    creative: "(1) H 가 B 와 C 사이에 오게 해 합 꼴 4/(tan a+tan b) 가 답이 되게 하기(★2 · 오답 선택지와 짝) (2) 삼각비 표 값을 주고 수치 답을 묻기(절차형 ★1~2) (3) BC 대신 AB 를 주면 sin·cos 로 갈아타야 해 ★3."
```

```yaml
- id: GN-M32-51-07
  page: 51
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리"
  summary: |
    AB=7 cm, ∠B=45°인 △ABC 의 넓이가 21√2 cm²일 때 BC 의 길이 구하기.
  category: "삼각형 넓이 공식 → 미지 변에 대해 역산"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각형의 넓이가 주어질 때 변의 길이 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (1/2)·7·BC·sin45°=21√2 한 줄을 BC 에 대해 풀면 끝나는 공식 역산.
    분기도 함정도 없고 변형 단계가 한 단계뿐이다.
    통찰 없음 · M_total 4 (≤5) → −1 적용 → STEP 1 출발점 ★2 에서 ★1.
  tier: star_1
  mechanism_primary: "(1/2)·AB·BC·sin B = 넓이 → BC = 2·21√2/(7·sin45°) = 12"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$12\,\mathrm{cm}$'
  answer_source: "답지"
  figure: "crop:fig-51-07.png"
  latex: latex-bank/gn-m32/items/51-07.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AB(7), ∠B(45°), 넓이(21√2)를 바꿀 수 있다. 제약: 넓이에서 sin B 를 나눈 뒤 AB 로 나눈 값이 정수가 되도록 세 수를 묶어 고를 것. ∠B 를 120° 등 둔각으로 두면 sin 변환이 한 단계 더 붙는다."
    creative: "(1) 각을 미지수로 두고 넓이·두 변으로 각을 묻기(I-BW · ★2) (2) 넓이를 주고 둘레를 묻는 두 조건 결합으로 바꾸면 ★3 (3) 사각형의 일부 넓이를 주고 나머지 변을 묻게 하면 분할이 추가돼 ★3."
```

```yaml
- id: GN-M32-51-08
  page: 51
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "중단원 마무리"
  summary: |
    AE∥DB 이고 DC=5 cm, EC=8 cm, ∠C=60°(B 가 C 와 E 사이)일 때 □ABCD 의 넓이. 5지선다.
  category: "평행선 등적변형 → 사각형을 한 삼각형으로 → 넓이 공식"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "AE∥DB 이므로 BD 를 밑변으로 하는 △ABD 와 △EBD 의 넓이가 같다는 등적변형으로 □ABCD 를 △DEC 하나로 옮김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "평행선을 이용한 등적변형으로 다각형의 넓이 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    □ABCD=△BCD+△ABD 인데 △ABD 를 그대로는 잴 수 없고, AE∥DB 를 써 △EBD 로 갈아타야 △DEC 로 합쳐진다.
    그 뒤는 (1/2)·5·8·sin60° 한 줄이라 계산 부담은 낮다(Mₖ=1).
    등적변형 착안 1개(EQV d2)이나 depth 3 도 통찰 2개도 아니라 +1 조건 미충족 → ★2 유지.
  tier: star_2
  mechanism_primary: "AE∥DB → △ABD=△EBD → □ABCD=△DEC=(1/2)·5·8·sin60°=10√3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '③'
  answer_source: "답지"
  figure: "crop:fig-51-08.png"
  latex: latex-bank/gn-m32/items/51-08.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "DC(5), EC(8), ∠C(60°)를 바꿀 수 있다. 제약: ∠C 는 특수각이어야 하고, DC×EC 가 짝수라야 (1/2) 이 정리된다. 그림에서 B 가 C 와 E 사이라는 배치와 평행 표시는 고정."
    creative: "(1) 넓이를 주고 EC 를 역으로 묻기(BW 추가 · ★3) (2) 평행 조건을 A 에서 DB 에 평행선을 긋는 작도로 바꿔 스스로 E 를 만들게 하면 ★3 (3) 오각형으로 늘려 등적변형을 두 번 쓰게 하면 통찰 2개 → ★3~4."
```

```yaml
- id: GN-M32-51-09
  page: 51
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리"
  summary: |
    ∠BAC=75°인 △ABC 의 외접원(중심 O)의 반지름이 10 cm 일 때 △OBC 의 넓이. 5지선다.
  category: "원주각 → 중심각 → 두 반지름과 끼인각의 넓이 공식"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "원 단원의 원주각·중심각 관계(∠BOC=2∠BAC=150°)를 끌어와야 삼각비 넓이 공식에 넣을 끼인각이 생김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "외접원의 반지름과 원주각을 이용한 삼각형의 넓이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    OB=OC=10 은 바로 보이지만 끼인각이 없어서, 75°(원주각)를 150°(중심각)로 바꾸는 원 단원의 성질이 있어야 풀린다.
    그 뒤 sin150°=sin30° 변환까지 넣어도 (1/2)·10·10·(1/2)=25 한 줄(Mₖ=1).
    단원 경계 결합 1개(XU d2) · M_total 5 → 통찰이 있으므로 −1 미적용 → ★2 유지.
  tier: star_2
  mechanism_primary: "∠BOC=2×75°=150° → △OBC=(1/2)·10·10·sin150°=25"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '①'
  answer_source: "답지"
  figure: "crop:fig-51-09.png"
  latex: latex-bank/gn-m32/items/51-09.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "반지름(10)과 원주각(75°)을 바꿀 수 있다. 제약: 중심각 2A 의 사인이 특수각이라야 하므로 원주각은 15°·30°·45°·60°·75° 중에서 고르고, 2A 가 180° 를 넘지 않게 할 것. 반지름은 sin 값의 분모를 지우는 값이 좋다."
    creative: "(1) 원주각이 둔각이어서 중심각이 우각이 되는 배치(★3 · T-범위) (2) △OBC 넓이를 주고 원주각을 묻기(BW 추가 · ★3) (3) 현 BC 의 길이를 함께 묻거나 활꼴 넓이로 확장하면 부채꼴−삼각형이 붙어 ★3~4."
```

```yaml
- id: GN-M32-51-10
  page: 51
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "중단원 마무리"
  summary: |
    AB=6 cm, BC=8 cm, ∠B=60°, AD=4 cm, DC=2√3 cm, ∠D=150°인 □ABCD 의 넓이. 5지선다.
  category: "대각선으로 두 삼각형 분할 → 둔각 삼각비 변환 → 합"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "대각선을 그어 두 삼각형으로 나눈 사각형의 넓이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    끼인각이 있는 두 꼭짓점(B, D)의 자료가 짝지어져 있어 대각선 AC 로 나누면 곧바로 (1/2)ab sin C 두 번.
    둔각 150° 를 sin30° 로 바꾸는 것은 이 단원이 공식으로 가르친 표준이라 통찰이 아니라 함정(T-범위)으로 처리했다.
    통찰 없음 · M_total 7 → STEP 1 출발점 ★2 유지. 사각형 넓이 표준형의 원형 문항.
  tier: star_2
  mechanism_primary: "AC 로 분할 → △ABC=(1/2)·6·8·sin60°=12√3, △ACD=(1/2)·4·2√3·sin30°=2√3 → 14√3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '④'
  answer_source: "답지"
  figure: "crop:fig-51-10.png"
  latex: latex-bank/gn-m32/items/51-10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 변(6, 8, 4, 2√3)과 두 각(60°, 150°)을 바꿀 수 있다. 제약: 두 각 모두 특수각이고, 두 삼각형의 넓이가 같은 무리수(여기서는 √3) 배수로 나와야 한 항으로 합쳐진다. 그림의 각 위치(∠B, ∠D)는 라벨과 함께 고정."
    creative: "(1) 사각형의 넓이를 주고 한 변을 역으로 묻기(BW · ★3) (2) 두 각 중 하나만 주고 나머지를 대각선 길이로 유도하게 하면 단계가 늘어 ★3 (3) 대각선 두 개와 끼인각 꼴(51-12)로 바꾸면 완전히 다른 골조."
```

```yaml
- id: GN-M32-51-11
  page: 51
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리"
  summary: |
    평행사변형 ABCD 에서 AB=8 cm, AD=6√3 cm, ∠C=120°, BE:EC=2:1(E 는 BC 위)일 때 △BED 의 넓이. 5지선다.
  category: "평행사변형 넓이 → 절반 삼각형 → 밑변 비로 축소"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행사변형의 넓이와 밑변의 비를 이용한 부분 넓이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ∠C=120° → ∠B=60° 로 바꿔 평행사변형 넓이 8·6√3·sin60°=72 를 얻고, △BCD 는 그 절반, △BED 는 다시 밑변 비 2:3.
    D 에서 BC 까지의 높이가 △BED 와 △BCD 에 공통이라는 중2 성질만 쓰므로 표준 절차(절차형).
    통찰 없음 · M_total 6 → −1 조건 미충족 → ★2 유지.
  tier: star_2
  mechanism_primary: "∠B=60° → □ABCD=8·6√3·sin60°=72 → △BCD=36 → △BED=(2/3)△BCD=24"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '③'
  answer_source: "답지"
  figure: "crop:fig-51-11.png"
  latex: latex-bank/gn-m32/items/51-11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 변(8, 6√3), 각(120°), 비(2:1)를 바꿀 수 있다. 제약: 두 변의 곱에 sin 을 곱한 값이 비의 분모로 나누어떨어져야 답이 정수. 이웃각 합 180° 때문에 ∠C 를 바꾸면 ∠B 도 함께 바뀐다."
    creative: "(1) E 를 대각선 위의 내분점으로 옮기면 분할 착안이 생겨 ★3 (2) △BED 넓이를 주고 비나 변을 역으로 묻기(BW · ★3) (3) 평행사변형을 사다리꼴로 바꾸면 높이를 따로 구해야 해 ★3."
```

```yaml
- id: GN-M32-51-12
  page: 51
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리"
  summary: |
    두 대각선이 12√2 cm, 10 cm 이고 두 대각선이 이루는 각이 x(90°<x<180°)인 □ABCD 의 넓이가 60 cm²일 때 x 구하기.
  category: "대각선 넓이 공식 → sin x 역산 → 범위로 해 택일"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "넓이 조건에서 거꾸로 sin x 를 뽑아낸 뒤, sin x=√2/2 의 두 해(45°, 135°) 가운데 주어진 범위에 맞는 둔각을 고르는 역추적"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "두 대각선의 길이와 넓이가 주어질 때 대각선이 이루는 각"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (1/2)·12√2·10·sin x=60 을 sin x 에 대해 풀면 √2/2, 여기서 멈추면 45° 로 답이 틀린다.
    90°<x<180° 라는 조건이 둔각 135° 를 강제하는 것이 이 문항의 무게중심(T-범위·T-경계 → Mₜ=2).
    역추적 통찰 1개(BW d2) · M_total 6 → STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "(1/2)·12√2·10·sin x=60 → sin x=√2/2 → 범위 조건으로 x=135°"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$135^\circ$'
  answer_source: "답지"
  figure: "crop:fig-51-12.png"
  latex: latex-bank/gn-m32/items/51-12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 대각선(12√2, 10)과 넓이(60)를 바꿀 수 있다. 제약: 2×넓이/(두 대각선의 곱)이 1/2, √2/2, √3/2 중 하나여야 특수각이 나오고, 그 값이 1 을 넘지 않아야 한다. 범위 조건은 답이 되는 각에 맞춰 함께 고칠 것."
    creative: "(1) 범위 조건을 빼고 가능한 x 를 모두 구하게 하면 I-MI 로 바뀜(★3) (2) 각을 주고 한 대각선을 묻기(절차형 ★1~2) (3) 두 대각선이 수직일 때의 넓이와 비교하게 하면 최대 넓이 논의가 붙어 ★3."
```

### 중단원 마무리하기 STEP 2 발전 문제

```yaml
- id: GN-M32-52-13
  page: 52
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리"
  summary: |
    길이 40 cm 인 실에 매달린 추가 연직선 OA 를 기준으로 좌우 30° 로 흔들릴 때, 최고점 B 가 A 보다 몇 cm 높은지. 5지선다.
  category: "연직 성분 40cos30° → 높이 차 40−40cos30°"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각비의 실생활 활용 — 진자의 높이 차"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    B 에서 OA 에 내린 수선의 발까지의 거리가 40cos30°=20√3 이고, 구하는 높이 차는 40 에서 그것을 뺀 값.
    그림이 수선과 각을 모두 보여 주므로 해석 부담이 없고 실제 변형은 두 줄이다.
    통찰 없음 · M_total 4 (≤5) → −1 적용 → STEP 2 출발점 ★3 에서 ★2. [분류 이슈] 발전 문제 구역 대비 실제 골조가 가벼움.
  tier: star_2
  mechanism_primary: "OH=40cos30°=20√3 → 높이 차 = OA−OH = 40−20√3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '④'
  answer_source: "답지"
  figure: "crop:fig-52-13.png"
  latex: latex-bank/gn-m32/items/52-13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "실의 길이(40 cm)와 흔들린 각(30°)을 바꿀 수 있다. 제약: 특수각이어야 cos 값이 정리되고, 실의 길이는 cos 의 분모를 지우는 값(2·4 의 배수)이 좋다. 좌우 대칭이라는 그림 설정은 고정."
    creative: "(1) 높이 차를 주고 각이나 실의 길이를 역으로 묻기(BW · ★3) (2) 좌우 각을 다르게 해 두 최고점의 높이 차를 묻기(조건 통합 · ★3) (3) 수평 이동 거리(40sin30°)를 함께 묻는 2문항 세트(★2)."
```

```yaml
- id: GN-M32-52-14
  page: 52
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리"
  summary: |
    평행사변형 ABCD 에서 AB=6, BC=9, ∠A=120°일 때 대각선 BD 의 길이. 5지선다.
  category: "둔각 → 변의 연장선에 수선 → 직각삼각형 둘 → 피타고라스"
  M: {s: 2, k: 3, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "끼인각이 둔각이라 삼각형 안에는 수선을 내릴 자리가 없고, D 에서 BA 의 연장선 위로 수선을 내려 직각삼각형 두 개 구조로 옮겨야 피타고라스가 쓰인다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "끼인각이 둔각인 삼각형에서 나머지 한 변의 길이"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    △ABD 에서 AD=BC=9, ∠A=120° 이므로 D 에서 BA 의 연장선에 수선 DH 를 내리면 ∠DAH=60°, AH=4.5, DH=(9√3)/2.
    BH=6+4.5 로 「빼는 게 아니라 더한다」는 위치 판단이 핵심 함정이고, BD²=110.25+60.75 계산도 무겁다(Mₖ=3).
    표현 전환 1개(RT d2) · M_total 8 → STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "△ABD(AD=9, ∠A=120°) → D 에서 BA 연장선에 수선 → AH=4.5, DH=(9√3)/2, BH=10.5 → BD=3√19"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑤'
  answer_source: "답지"
  figure: "crop:fig-52-14.png"
  latex: latex-bank/gn-m32/items/52-14.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AB(6), BC(9), ∠A(120°)를 바꿀 수 있다. 제약: 둔각은 120°·135°·150° 중에서 고르고, AH 가 반정수로 끝나므로 두 변은 짝수·짝수 또는 짝수·홀수로 두어 BD² 가 정수가 되게 할 것. 짧은 대각선 AC 를 묻는 경우 ∠B=60° 를 써야 한다."
    creative: "(1) 같은 평행사변형에서 짧은 대각선 AC 를 묻기(예각 쪽 · ★3) (2) 두 대각선의 길이를 모두 구해 비를 묻기(통찰 2개 · ★4) (3) 대각선 길이를 주고 ∠A 를 역으로 묻기(BW 추가 · ★4)."
```

```yaml
- id: GN-M32-52-15
  page: 52
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "중단원 마무리"
  summary: |
    세 지점 A, B, C 를 잇는 도로에서 BC=6 km, ∠B=105°, ∠C=45°일 때 A 와 C 사이의 거리 구하기.
  category: "특수각이 없는 꼭짓점 회피 → B 에서 AC 에 수선 → 두 조각의 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "105° 는 그대로 쓸 수 없으므로 수선을 어느 꼭짓점에서 내릴지 고르는 단계 — B 에서 AC 에 내려야 45°(△BCH)와 30°(△ABH) 두 특수각 직각삼각형으로 쪼개진다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "두 각과 한 변이 주어진 삼각형에서 변의 길이(수선 긋기)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ∠A=180°−105°−45°=30° 를 먼저 얻고, B 에서 AC 에 수선 BH 를 내려 CH=BH=3√2, AH=BH/tan30°=3√6 으로 나눈다.
    수선을 A 나 C 에서 내리면 105° 가 남아 풀리지 않으므로 「어디서 내리는가」가 실질 판단이다.
    표현 전환 1개(RT d2) · M_total 6 → STEP 2 출발점 ★3 유지. 삼각비 측량형의 대표 문항.
  tier: star_3
  mechanism_primary: "∠A=30° → B 에서 AC 에 수선 → CH=BH=6sin45°=3√2, AH=3√2/tan30°=3√6 → AC=3√2+3√6"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$(3\sqrt{2}+3\sqrt{6})\,\mathrm{km}$'
  answer_source: "답지"
  figure: "crop:fig-52-15.png"
  latex: latex-bank/gn-m32/items/52-15.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "BC(6 km)와 두 각(105°, 45°)을 바꿀 수 있다. 제약: 나머지 한 각도 특수각이 되도록 두 각의 합이 150°(→30°)·135°(→45°)·120°(→60°) 가 되게 맞추고, 수선을 내릴 꼭짓점의 두 조각각이 모두 특수각이어야 한다. BC 는 √2 를 지우는 짝수가 편하다."
    creative: "(1) AB 를 묻는 문항으로 바꾸면 수선을 C 에서 내려야 해 갈래 선택이 생김(I-SC · ★4) (2) 삼각형의 넓이까지 묻는 2단 세트(★4) (3) 105° 를 60°+45° 로 쪼개 두 삼각형을 합치는 구성으로 바꾸면 조건 통합이 붙어 ★4."
```

```yaml
- id: GN-M32-52-16
  page: 52
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리"
  summary: |
    ∠B=90°, ∠A=60°인 △ABC 와 ∠BDC=90°, ∠DBC=45°인 △DBC 가 BC 를 공유하며 겹쳐 있고 DC=4√2 일 때, 두 사선 AC, BD 의 교점을 E 라 할 때 △EBC 의 넓이 구하기.
  category: "공유변 BC 산출 → 두 밑각 45°·30° → 높이를 미지수로 한 방정식"
  M: {s: 3, k: 3, a: 2, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 삼각형이 공유하는 BC 를 매개로 △DBC 의 길이 자료(DC=4√2)와 △ABC 의 각 자료(∠A=60° → ∠ACB=30°)를 하나의 △EBC 조건으로 통합"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "△EBC 에는 잴 수 있는 변이 없으므로 E 에서 BC 에 수선을 내려 높이 h 를 미지수로 두고 BF+FC=BC 라는 h 의 방정식으로 전환"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "겹쳐진 두 직각삼각형의 교점이 만드는 삼각형의 넓이"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    △DBC 에서 BC=DC·√2=8 을 먼저 얻고, ∠EBC=45°, ∠ECB=30° 를 확인한 뒤 E 의 높이 h 로 h+√3h=8 을 세운다.
    구하는 삼각형의 변이 하나도 주어지지 않아 「높이를 미지수로」라는 두 번째 전환이 반드시 필요하다.
    통찰 2개(CON d2 · RT d2) · M_total 10 → +1 → STEP 2 출발점 ★3 에서 ★4. I-RT 가 있어 ★4 저노출 게이트 통과.
  tier: star_4
  mechanism_primary: "DC=4√2, ∠BDC=90°, ∠DBC=45° → BC=8 → △EBC 의 밑각 45°·30° → h(1+√3)=8 → 넓이=(1/2)·8·4(√3−1)=16(√3−1)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$16(\sqrt{3}-1)$'
  answer_source: "답지"
  figure: "crop:fig-52-16.png"
  latex: latex-bank/gn-m32/items/52-16.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "DC(4√2)와 두 각(60°, 45°)을 바꿀 수 있다. 제약: △DBC 가 특수각 직각삼각형이라야 BC 가 깔끔하고, △EBC 의 두 밑각도 특수각이어야 h(tan 의 역수 합) 방정식이 유리화로 끝난다. BC 는 (1+√3) 를 유리화했을 때 정수가 되는 값이 좋다."
    creative: "(1) △EBC 대신 △ABE 나 사각형 ABED 의 넓이를 묻기(빼기 한 단계 추가 · ★4) (2) DC 대신 AB 를 주면 BC 산출 경로가 바뀌어 갈래 선택이 생김(I-SC · ★4) (3) △EBC 의 넓이를 주고 DC 를 역으로 묻기(BW 추가 · ★5 후보)."
```

```yaml
- id: GN-M32-52-17
  page: 52
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리"
  summary: |
    △ABC 에서 AB=6, BC=8 이고 tan B=√2 (0°<∠B<90°)일 때 삼각형의 넓이. 5지선다.
  category: "tan 값 → 직각삼각형 작도 → sin 값 → 넓이 공식"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "넓이 공식이 요구하는 것은 sin B 인데 주어진 것은 tan B 이므로, 두 변이 1 과 √2 인 직각삼각형을 그려 빗변 √3 을 얻고 sin B=√6/3 으로 옮기는 전환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "한 삼각비의 값이 주어질 때 다른 삼각비를 구해 넓이 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    tan B=√2 는 특수각이 아니므로 각을 구하려 들면 막히고, 직각삼각형을 하나 그려 sin B 로 갈아타야 한다.
    범위 조건 0°<∠B<90° 가 sin B 의 부호·값을 하나로 고정한다.
    표현 전환 1개(RT d2) · M_total 6 → STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "tan B=√2 → 직각삼각형 (1, √2, √3) → sin B=√2/√3=√6/3 → (1/2)·6·8·sin B=8√6"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '③'
  answer_source: "답지"
  figure: "crop:fig-52-17.png"
  latex: latex-bank/gn-m32/items/52-17.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 변(6, 8)과 tan B 값(√2)을 바꿀 수 있다. 제약: tan 값이 유리수 또는 √(정수)라야 빗변이 √ 한 겹으로 끝나고, 두 변의 곱이 빗변의 유리화 분모를 지우면 답이 깔끔하다. 범위 조건은 반드시 함께 둘 것."
    creative: "(1) cos B 를 주고 tan 으로 넘어가게 하기(★3) (2) 범위를 0°<∠B<180° 로 넓히면 둔각 경우가 살아나 I-MI 가 생김(★4) (3) 넓이를 주고 tan B 를 역으로 묻기(BW 추가 · ★4)."
```

```yaml
- id: GN-M32-52-18
  page: 52
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "중단원 마무리"
  summary: |
    △ABC 에서 AB=15 cm, AC=10 cm 이고 AD 가 ∠A 를 30°씩 이등분할 때 AD 의 길이. 5지선다.
  category: "길이 문제 → 넓이의 분할 등식 → 미지수 AD 역산"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "AD 를 직접 재는 길이 도구가 없으므로 △ABC=△ABD+△ADC 라는 넓이의 등식으로 옮겨, 구하는 길이를 넓이식 안의 미지수로 바꾸는 전환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "각의 이등분선의 길이(넓이의 합으로 구하기)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    (1/2)·15·10·sin60° = (1/2)·15·AD·sin30° + (1/2)·10·AD·sin30° 한 등식에 AD 가 양변으로 들어가는 구조.
    「길이를 넓이로 바꿔 센다」는 착안이 없으면 중3 도구로는 막히는 대표 유형이다.
    표현 전환 1개(RT d2) · 미지수 도입으로 Mₐ=2 · M_total 7 → STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "△ABC=△ABD+△ADC → (1/2)·15·10·sin60°=(1/2)·AD·sin30°·(15+10) → AD=6√3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑤'
  answer_source: "답지"
  figure: "crop:fig-52-18.png"
  latex: latex-bank/gn-m32/items/52-18.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AB(15), AC(10), 이등분된 각(30°+30°)을 바꿀 수 있다. 제약: 원각과 반각이 모두 특수각이어야 하므로 (60°, 30°)·(90°, 45°)·(120°, 60°) 조합만 쓰고, 두 변의 합이 두 변의 곱을 나눌 때 정수나 √ 한 겹으로 끝나게 고를 것."
    creative: "(1) AD 를 주고 AC 를 역으로 묻기(★3~4) (2) 각의 이등분선 정리로 BD:DC 를 함께 묻는 2단 세트(단원 결합 · ★4) (3) 삼등분선으로 바꾸면 넓이 분할이 3항이 되어 ★4."
```

```yaml
- id: GN-M32-53-19
  page: 53
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리"
  summary: |
    반지름 2 cm 인 반원 O(지름 AB)에 내접하는 □ABCD 에서 ∠ABC=30°, AD=CD 일 때 □ABCD 의 넓이 구하기.
  category: "지름의 원주각 90° → △ABC → 반지름 세 개로 △ACD 를 합·차로"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "원 단원의 성질(지름에 대한 원주각이 90°, 중심각은 원주각의 두 배)을 끌어와 AC=2, BC=2√3 과 ∠AOC=60° 를 얻어야 삼각비 도구가 붙는다"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "AD=CD 에서 D 가 호 AC 의 중점임을 보고 반지름 OA, OD, OC 를 그어 △ACD 를 △AOD+△DOC−△AOC 의 합·차로 옮김(직접 재면 15° 가 나와 중3 도구로 막힘)"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "원(반원)에 내접하는 사각형의 넓이 — 반지름과 중심각으로 분할"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    앞부분 △ABC=2√3 은 지름의 원주각으로 바로 나오지만, △ACD 는 AD=CD 만 있어 변의 길이를 먼저 구하려 하면 막힌다.
    보조선으로 반지름 세 개를 그어 중심각 30°·30°·60° 의 삼각형 합·차(1+1−√3)로 바꾸는 것이 이 문항의 실제 무게중심.
    통찰 2개(XU d2 · RT d2) · M_total 8 → +1 → STEP 2 출발점 ★3 에서 ★4. I-XU 보유로 ★4 게이트 통과.
  tier: star_4
  mechanism_primary: "∠ACB=90° → AC=2, BC=2√3 → △ABC=2√3 / ∠AOC=60°, D 는 호 AC 의 중점 → △ACD=△AOD+△DOC−△AOC=2−√3 → 합 2+√3"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$(2+\sqrt{3})\,\mathrm{cm}^2$'
  answer_source: "답지"
  figure: "crop:fig-53-19.png"
  latex: latex-bank/gn-m32/items/53-19.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "반지름(2 cm)과 ∠ABC(30°)를 바꿀 수 있다. 제약: 중심각 ∠AOC=180°−2∠ABC 와 그 절반이 모두 특수각이어야 하므로 ∠ABC 는 30°·45°·60° 중에서 고른다. 반지름은 sin 의 분모를 지우는 짝수가 편하다."
    creative: "(1) AD=CD 조건을 빼고 ∠ADC 대신 CD 의 길이를 주면 분할 경로가 바뀜(★3) (2) 넓이를 주고 ∠ABC 를 역으로 묻기(BW 추가 · ★5 후보) (3) 색칠한 활꼴(부채꼴−삼각형)까지 함께 묻는 2단 세트(★4)."
```

```yaml
- id: GN-M32-53-20
  page: 53
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "중단원 마무리"
  summary: |
    한 변의 길이가 4 cm 인 정육각형 ABCDEF 의 넓이. 5지선다.
  category: "정육각형 → 정삼각형 6개 → 넓이 공식 ×6"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정다각형(정육각형)의 넓이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    중심과 각 꼭짓점을 이어 한 변 4 인 정삼각형 6개로 보고 (1/2)·4·4·sin60°×6 을 계산하면 끝난다.
    정육각형을 정삼각형으로 쪼개는 것은 교재가 앞에서 공식처럼 다루는 표준 분할이라 통찰로 세지 않았다.
    통찰 없음 · M_total 5 (≤5) → −1 적용 → STEP 2 출발점 ★3 에서 ★2. [분류 이슈] 발전 문제 구역 대비 한 줄 계산.
  tier: star_2
  mechanism_primary: "정육각형 = 한 변 4 인 정삼각형 6개 → 6×(1/2)·4·4·sin60°=24√3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '④'
  answer_source: "답지"
  figure: "crop:fig-53-20.png"
  latex: latex-bank/gn-m32/items/53-20.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "한 변(4 cm)과 변의 개수(정육각형 → 정팔각형·정십이각형)를 바꿀 수 있다. 제약: 정n각형의 중심각 360°/n 이 특수각이어야 하므로 n 은 4·6·8·12 중에서 고르고, 한 변이 아니라 외접원의 반지름을 주는 편이 정팔각형 이상에서 깔끔하다."
    creative: "(1) 넓이를 주고 한 변을 역으로 묻기(★2) (2) 정육각형에 내접·외접하는 원의 넓이와 비교하게 하면 단원 결합이 생겨 ★3 (3) 정육각형에서 삼각형 하나를 잘라낸 오각형의 넓이(빼기 한 단계 · ★3)."
```

```yaml
- id: GN-M32-53-21
  page: 53
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리"
  summary: |
    ∠B=60°인 평행사변형 ABCD 의 넓이가 9√3 cm²이고 2AB=BC 일 때 둘레의 길이. 5지선다.
  category: "넓이 공식에 비 조건 대입 → 이차식으로 변 역산 → 둘레"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "넓이와 두 변의 비만 주어졌으므로 AB=a, BC=2a 로 두고 넓이 공식을 a 에 대한 이차식으로 세워 변의 길이를 거꾸로 결정"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "평행사변형의 넓이가 주어질 때 변의 길이·둘레 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    a·2a·sin60°=9√3 → a²=9 → a=3 으로 두 변을 얻은 뒤 둘레 2(3+6)=18 로 마무리.
    구하는 것이 넓이가 아니라 둘레라 「변을 먼저 복원한다」는 역방향 설계가 골조다(길이는 양수라 a=−3 은 버린다).
    역추적 통찰 1개(BW d2) · 미지수 도입 Mₐ=2 · M_total 6 → STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "AB=a, BC=2a → 2a²sin60°=9√3 → a=3 → 둘레=2(a+2a)=18"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '②'
  answer_source: "답지"
  figure: "crop:fig-53-21.png"
  latex: latex-bank/gn-m32/items/53-21.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "넓이(9√3), ∠B(60°), 비(1:2)를 바꿀 수 있다. 제약: 넓이/(비의 곱×sin B)가 완전제곱이어야 a 가 정수로 떨어진다. ∠B 를 둔각으로 두면 sin 변환이 한 단계 붙지만 답은 그대로 살릴 수 있다."
    creative: "(1) 둘레를 주고 넓이를 묻는 역방향(★3) (2) 비 대신 두 변의 차를 주면 이차방정식 풀이가 붙어 ★4 (3) 대각선의 길이를 함께 묻는 2단 세트(52-14 골조 결합 · ★4)."
```

### 중단원 마무리하기 STEP 3 실력 UP

```yaml
- id: GN-M32-53-22
  page: 53
  vendor_label: "중단원 마무리하기 STEP 3 실력 UP"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리"
  summary: |
    지면에서 1700 m 높이의 비행기가 지면과 20° 를 유지하며 초속 125 m 로 착륙할 때 걸리는 시간(초) 구하기. sin20°=0.34, cos20°=0.94, tan20°=0.36 을 사용.
  category: "높이 → 빗변(비행 거리) = 높이/sin20° → 거리÷속력"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "비행기가 실제로 지나는 길은 밑변이나 높이가 아니라 빗변이므로, 주어진 세 삼각비 중 sin 을 골라 1700/sin20° 로 옮겨야 한다(cos·tan 을 쓰면 다른 변이 나온다)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각비의 실생활 활용 — 경사 거리와 속력·시간"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    1700/0.34=5000 m 를 125 로 나눠 40초. 골조는 「어느 삼각비를 고르는가」와 「거리=속력×시간」 두 단계뿐이다.
    삼각비 세 값을 모두 준 것 자체가 선택을 요구하는 장치이고, 단위(초속·m)가 두 번째 함정이다(Mₜ=2).
    통찰 1개(EQV d1) · M_total 7 이지만 실제 변형 단계가 얕아 실력 UP 출발점 ★4 에서 ★3 으로 내렸다. [분류 이슈] 벤더 구역(★4 출발) 대비 골조 2단계.
  tier: star_3
  mechanism_primary: "착륙 거리 = 1700/sin20° = 5000 m → 5000÷125 = 40초"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$40$초'
  answer_source: "답지"
  figure: "crop:fig-53-22.png"
  latex: latex-bank/gn-m32/items/53-22.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "높이(1700 m), 각(20°), 속력(125 m/s)과 주어지는 삼각비 표 값을 바꿀 수 있다. 제약: 높이/sin 값이 정수여야 하고 그 값이 속력으로 나누어떨어져야 답이 정수 초. 표 값은 문제에 제시한 세 개를 모두 유지해야 선택 장치가 살아 있다."
    creative: "(1) 수평 이동 거리(1700/tan20°)를 묻는 항목으로 바꾸면 tan 을 고르는 문항(★2~3) (2) 착륙 시간을 주고 각이나 높이를 역으로 묻기(BW · ★4) (3) 두 단계 하강(각이 도중에 바뀜)으로 만들면 조건 통합이 붙어 ★4."
```

```yaml
- id: GN-M32-53-23
  page: 53
  vendor_label: "중단원 마무리하기 STEP 3 실력 UP"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리"
  summary: |
    한 변의 길이가 3 cm 인 정사각형 ABCD 를 점 A 를 중심으로 30° 회전시켜 정사각형 AB'C'D' 을 만들 때, 두 정사각형이 겹치는 부분의 넓이 구하기.
  category: "회전 대칭 → 겹친 부분을 합동인 두 직각삼각형으로 → tan30°"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "회전 중심 A 와 교점 P 를 잇는 AP 가 ∠B'AD 를 이등분하므로 겹친 부분이 AP 에 대해 대칭인 합동 직각삼각형 두 개가 된다는 대칭성 발견"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "겹친 영역을 직접 재는 대신 ∠B'AP=∠DAP=30° 인 직각삼각형 하나의 넓이를 tan30° 로 구해 두 배 하는 구조로 전환"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "도형의 회전과 겹치는 부분의 넓이"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    ∠B'AD=90°−30°=60° 를 AP 가 30°씩 나누므로 △AB'P≡△ADP(직각·빗변·한 예각)이고 B'P=3tan30°=√3.
    회전각 30° 를 곧장 쓰려 하면 길이가 나오지 않고, 남은 각 60° 와 그 이등분이라는 대칭 구조를 봐야 풀린다.
    통찰 2개(SYM d2 · RT d2) · M_total 8 → 실력 UP 출발점 ★4 유지(★5 는 통찰 3개 이상 필요).
  tier: star_4
  mechanism_primary: "∠B'AD=60°, AP 가 이등분 → △AB'P≡△ADP, B'P=3tan30°=√3 → 넓이=2×(1/2)·3·√3=3√3"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$3\sqrt{3}\,\mathrm{cm}^2$'
  answer_source: "답지"
  figure: "crop:fig-53-23.png"
  latex: latex-bank/gn-m32/items/53-23.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "한 변(3 cm)과 회전각(30°)을 바꿀 수 있다. 제약: 90°−회전각의 절반이 특수각이어야 tan 이 정리되므로 회전각은 30°(→30°)·60°(→15°는 불가)처럼 제한적이다. 사실상 30° 가 거의 유일한 깔끔한 선택이고, 변의 길이는 자유."
    creative: "(1) 겹치지 않는 부분(정사각형 넓이−겹친 부분)을 묻기(빼기 한 단계 · ★4) (2) 정삼각형·정육각형을 회전시키는 구성(대칭 축이 늘어 ★4~5) (3) 겹친 넓이를 주고 회전각을 역으로 묻기(BW 추가 · 통찰 3개 → ★5 후보)."
```

```yaml
- id: GN-M32-53-24
  page: 53
  vendor_label: "중단원 마무리하기 STEP 3 실력 UP"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리"
  summary: |
    AB=10√2 cm, ∠B=45°, BC=15 cm, ∠ACD=60°, CD=8 cm 인 □ABCD 의 넓이 구하기.
  category: "대각선 AC 선택 → 수선으로 AC 산출 → 두 삼각형 넓이 합"
  M: {s: 3, k: 3, a: 1, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-SC
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "자료가 ∠B 와 ∠ACD 에 붙어 있으므로 BD 가 아니라 AC 로 잘라야 두 삼각형이 모두 (1/2)ab sin C 꼴이 된다는 분할선 선택"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "△ACD 를 재려면 AC 가 필요한데 주어지지 않으므로, A 에서 BC 에 수선을 내려 직각삼각형 두 개로 옮겨 AC 를 먼저 복원"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "대각선이 주어지지 않은 사각형의 넓이(분할선을 고르고 공유변을 복원)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    △ABC 는 (1/2)·10√2·15·sin45°=75 로 바로 나오지만 △ACD 는 AC 가 없어서 멈춘다.
    A 에서 BC 에 수선을 내려 AH=BH=10, HC=5 로 AC=5√5 를 복원한 뒤 (1/2)·5√5·8·sin60°=10√15 를 더하는 3단 구조.
    통찰 2개(SC d1 · RT d2) · M_total 9 → 실력 UP 출발점 ★4 유지. 무리수 제곱 처리로 Mₖ=3.
  tier: star_4
  mechanism_primary: "AC 로 분할 → △ABC=75 / A 에서 BC 에 수선 → AH=BH=10, HC=5 → AC=5√5 → △ACD=10√15 → 합 75+10√15"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$(75+10\sqrt{15})\,\mathrm{cm}^2$'
  answer_source: "답지"
  figure: "crop:fig-53-24.png"
  latex: latex-bank/gn-m32/items/53-24.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AB(10√2), BC(15), CD(8)과 두 각(45°, 60°)을 바꿀 수 있다. 제약: ∠B 가 45° 라야 AH=BH 로 수선 계산이 한 줄이고, AB·cos B 와 BC 의 차가 정수여야 AC² 가 정수가 된다. 두 각은 모두 특수각으로 둘 것."
    creative: "(1) ∠ACD 를 둔각으로 바꾸면 sin 변환이 추가되며 골조는 유지(★4) (2) AC 를 직접 주면 통찰이 하나 사라져 ★3 으로 내려감 (3) 넓이를 주고 CD 를 역으로 묻기(BW 추가 · 통찰 3개 → ★5 후보)."
```

### 서술형 대비 문제

```yaml
- id: GN-M32-54-e1
  page: 54
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    24 m 떨어진 건물의 P 지점에서 백화점 꼭대기 A 를 올려다본 각이 60°, 아랫부분 B 를 내려다본 각이 30° 일 때 백화점의 높이 AB 구하기. [6점]
  category: "올려본각·내려본각 두 직각삼각형 → 두 높이의 합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각비의 실생활 활용 — 올려본각과 내려본각으로 건물의 높이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    수평거리 24 를 공통 밑변으로 위쪽 24tan60°=24√3, 아래쪽 24tan30°=8√3 를 각각 구해 더하면 끝난다.
    두 각이 P 를 지나는 수평선의 위아래로 나뉜다는 것이 그림에 드러나 있어 표준 절차(절차형).
    통찰 없음 · M_total 5 (≤5) → −1 적용 → 서술형 출발점 ★3 에서 ★2.
  tier: star_2
  mechanism_primary: "수평거리 24 공통 → 위 24tan60°=24√3, 아래 24tan30°=8√3 → AB=32√3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$32\sqrt{3}\,\mathrm{m}$'
  answer_source: "본문 답"
  figure: "crop:fig-54-e1.png"
  latex: latex-bank/gn-m32/items/54-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수평거리(24 m)와 두 각(60°, 30°)을 바꿀 수 있다. 제약: 두 각 모두 특수각이어야 하고, 수평거리는 tan30° 의 유리화 분모 3 을 지우는 3의 배수가 좋다. 두 각을 같게 두면 답이 2배 형태로 단순해진다."
    creative: "(1) 백화점 높이를 주고 수평거리를 묻기(BW · ★3) (2) 관측점이 두 곳이 되어 거리를 미지수로 두는 구성(★3) (3) 관측자가 건물 옥상 위에 서서 키까지 더해지면 조건 통합이 붙어 ★3."
```

```yaml
- id: GN-M32-54-e2
  page: 54
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    ∠A=90°, AD=8 cm, ∠ADB=45°, ∠DBC=30°, BC=7√2 cm 인 □ABCD 의 넓이 구하기. [7점]
  category: "대각선 BD 산출 → 직각삼각형 + 넓이 공식 삼각형"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 삼각형의 자료가 서로 다른 종류(직각·길이 vs 각·길이)라 대각선 BD 를 공유변으로 삼아 △ABD 에서 구한 BD 를 △BCD 의 넓이 공식에 넘기는 전환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "대각선을 공유변으로 삼아 구하는 사각형의 넓이"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    △ABD 는 ∠A=90°, ∠ADB=45° 인 직각이등변이라 AB=8, 넓이 32, BD=8√2 가 한꺼번에 나온다.
    그 BD 를 △BCD 로 넘겨 (1/2)·8√2·7√2·sin30°=28 을 더하는 것이 골조이고, BD 를 구하지 않으면 뒷 삼각형이 막힌다.
    표현 전환 1개(RT d2) · M_total 7 → 서술형 출발점 ★3 유지. 배점 7점과도 맞는다.
  tier: star_3
  mechanism_primary: "△ABD(∠A=90°, 45°) → AB=8, BD=8√2, 넓이 32 → △BCD=(1/2)·8√2·7√2·sin30°=28 → 합 60"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$60\,\mathrm{cm}^2$'
  answer_source: "본문 답"
  figure: "crop:fig-54-e2.png"
  latex: latex-bank/gn-m32/items/54-e2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AD(8), BC(7√2)와 두 각(45°, 30°)을 바꿀 수 있다. 제약: ∠ADB 를 45° 로 두면 BD 가 √2 배로 깔끔하고, BC 를 √2 배수로 두면 두 √2 가 곱해져 정수가 된다. ∠A=90° 표시는 그림과 함께 고정."
    creative: "(1) ∠DBC 를 둔각으로 바꿔 sin 변환을 추가(★3) (2) 넓이를 주고 BC 를 역으로 묻기(BW 추가 · ★4) (3) 대각선 AC 쪽 자료를 주어 어느 대각선으로 나눌지 고르게 하면 I-SC 가 붙어 ★4."
```

```yaml
- id: GN-M32-54-u1
  page: 54
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    산에서 60 m 떨어진 B 지점에서 송신탑의 양 끝 A, D 를 올려다본 각이 각각 45°, 30° 일 때 송신탑의 높이 AD 구하기. [6점]
  category: "공통 밑변 60 → 두 높이 → 차"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각비의 실생활 활용 — 두 올려본각의 차로 탑의 높이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    60tan45°=60 과 60tan30°=20√3 을 구해 빼면 끝나는 두 줄 계산.
    54-e1 과 같은 골조이고 더하느냐 빼느냐만 다르다(여기서는 두 각이 같은 쪽이라 차).
    통찰 없음 · M_total 5 (≤5) → −1 적용 → 서술형 출발점 ★3 에서 ★2.
  tier: star_2
  mechanism_primary: "밑변 60 공통 → 위 60tan45°=60, 아래 60tan30°=20√3 → AD=60−20√3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$(60-20\sqrt{3})\,\mathrm{m}$'
  answer_source: "답지"
  figure: "crop:fig-54-u1.png"
  latex: latex-bank/gn-m32/items/54-u1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수평거리(60 m)와 두 각(45°, 30°)을 바꿀 수 있다. 제약: 두 각 모두 특수각이고 큰 각이 위쪽이어야 차가 양수. 수평거리는 tan30° 유리화 분모를 지우는 3의 배수가 좋다."
    creative: "(1) 탑의 높이를 주고 수평거리를 역으로 묻기(BW · ★3) (2) 관측점을 두 곳으로 늘려 거리를 미지수로 두면 ★3~4 (3) 산의 높이(아래쪽 높이)까지 함께 묻는 2항 서술형(★3)."
```

```yaml
- id: GN-M32-54-u2
  page: 54
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    ∠B=90°, ∠BAC=45°, BC=12 cm, ∠ACD=120°, CD=9 cm 인 □ABCD 의 넓이 구하기. [7점]
  category: "직각이등변 → 대각선 AC 복원 → 둔각 넓이 공식"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "△ABC 를 넓이만 구하고 끝내면 △ACD 가 막히므로, 같은 직각이등변에서 빗변 AC=12√2 까지 뽑아 두 번째 삼각형의 공유변으로 넘기는 전환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "대각선을 복원해 두 삼각형으로 나누는 사각형의 넓이(둔각 포함)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ∠B=90°, ∠BAC=45° 에서 AB=BC=12 → △ABC=72, AC=12√2 를 얻고, △ACD=(1/2)·12√2·9·sin120°=27√6 을 더한다.
    둔각 120° 를 sin60° 로 바꾸는 것은 이 단원의 표준이라 통찰이 아니라 함정으로 처리했다(Mₜ=2).
    표현 전환 1개(RT d2) · M_total 8 → 서술형 출발점 ★3 유지. 54-e2 와 같은 골조의 둔각 판.
  tier: star_3
  mechanism_primary: "△ABC(직각이등변) → AB=BC=12, 넓이 72, AC=12√2 → △ACD=(1/2)·12√2·9·sin120°=27√6 → 합 72+27√6"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$(72+27\sqrt{6})\,\mathrm{cm}^2$'
  answer_source: "답지"
  figure: "crop:fig-54-u2.png"
  latex: latex-bank/gn-m32/items/54-u2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "BC(12), CD(9)와 두 각(45°, 120°)을 바꿀 수 있다. 제약: ∠BAC 를 45° 로 두어야 AC 가 √2 배로 깔끔하고, ∠ACD 는 120°·135°·150° 중에서 골라야 sin 이 특수값. BC·CD 는 (1/2) 이 정리되도록 하나를 짝수로."
    creative: "(1) ∠BAC 를 30° 나 60° 로 바꾸면 AB 와 AC 가 달라져 계산이 한 단계 늘어남(★3~4) (2) □ABCD 의 넓이를 주고 CD 를 역으로 묻기(BW 추가 · ★4) (3) D 에서 AC 에 수선을 내려 높이를 묻는 항목을 덧붙이면 ★4."
```

```yaml
- id: GN-M32-55-u3
  page: 55
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    호수 가장자리의 두 지점 A, B 사이 거리를 재기 위해 AC=16 m, ∠CAB=75°, ∠ACB=60° 를 측량했을 때 AB 의 길이 구하기. [6점]
  category: "특수각이 없는 꼭짓점 회피 → A 에서 BC 에 수선 → 45° 직각삼각형"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "∠A=75° 는 쓸 수 없으므로 ∠B=45° 를 먼저 얻고 A 에서 BC 에 수선을 내려 60° 와 45° 의 직각삼각형 두 개로 옮기는 전환(수선을 내릴 꼭짓점 선택이 관건)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "두 각과 한 변이 주어진 삼각형에서 변의 길이(측량 서술형)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ∠B=180°−75°−60°=45° 를 먼저 구하고, A 에서 BC 에 수선 AH 를 내려 AH=16sin60°=8√3, AB=AH/sin45°=8√6.
    수선을 B 나 C 에서 내리면 75° 가 남아 진행되지 않으므로 「A 에서 내린다」가 실질 판단이다.
    표현 전환 1개(RT d2) · M_total 6 → 서술형 출발점 ★3 유지. 52-15 와 같은 골조의 서술형 판.
  tier: star_3
  mechanism_primary: "∠B=45° → A 에서 BC 에 수선 → AH=16sin60°=8√3 → AB=8√3/sin45°=8√6"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$8\sqrt{6}\,\mathrm{m}$'
  answer_source: "답지"
  figure: "crop:fig-55-u3.png"
  latex: latex-bank/gn-m32/items/55-u3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AC(16 m)와 두 각(75°, 60°)을 바꿀 수 있다. 제약: 남는 각도 특수각이 되도록 두 각의 합을 135°(→45°)·150°(→30°)·120°(→60°) 로 맞추고, 수선을 내린 꼭짓점의 두 조각각이 모두 특수각이어야 한다. AC 는 √2·√3 의 분모를 지우는 짝수가 좋다."
    creative: "(1) BC 를 묻게 바꾸면 두 조각의 합으로 구해야 해 단계가 늘어남(★3) (2) △ABC 의 넓이까지 묻는 2항 서술형(★4) (3) 측량 지점을 하나 더 두고 두 삼각형을 결합하면 조건 통합이 붙어 ★4."
```

```yaml
- id: GN-M32-55-u4
  page: 55
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    △ABC 에서 AB=10 cm, BC=12 cm, ∠B=45° 이고 G 가 무게중심일 때 △AGC 의 넓이 구하기. [6점]
  category: "전체 넓이(삼각비) → 무게중심의 넓이 3등분"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "삼각비 도구만으로는 △AGC 를 잴 수 없고, 무게중심이 삼각형을 넓이가 같은 세 부분으로 나눈다는 중2 도형의 성질을 끌어와야 1/3 이라는 다리가 생긴다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "무게중심과 삼각비를 결합한 부분 삼각형의 넓이"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    △ABC=(1/2)·10·12·sin45°=30√2 를 먼저 구하고, 무게중심 성질로 △AGC=(1/3)△ABC=10√2.
    두 도구(삼각비 넓이 공식 · 무게중심) 중 하나만 빠져도 풀이가 끊기는 전형적인 단원 결합 문항이다.
    단원 경계 결합 1개(XU d2) · M_total 6 → 서술형 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "△ABC=(1/2)·10·12·sin45°=30√2 → 무게중심 → △AGC=(1/3)△ABC=10√2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$10\sqrt{2}\,\mathrm{cm}^2$'
  answer_source: "답지"
  figure: "crop:fig-55-u4.png"
  latex: latex-bank/gn-m32/items/55-u4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AB(10), BC(12), ∠B(45°)를 바꿀 수 있다. 제약: 두 변의 곱에 sin 을 곱한 값이 3 으로 나누어떨어져야 답이 깔끔하다. ∠B 를 120° 로 두면 sin 변환이 한 단계 붙지만 골조는 그대로."
    creative: "(1) 무게중심 대신 내심·외심으로 바꾸면 성질이 달라져 골조가 바뀜(★4) (2) △AGC 넓이를 주고 BC 를 역으로 묻기(BW 추가 · ★4) (3) 중선 AD 의 길이까지 묻는 2항 서술형(수선 긋기 결합 · ★4)."
```

```yaml
- id: GN-M32-55-u5
  page: 55
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    반지름 6 cm 인 반원 O(지름 AB)에서 ∠CAB=30° 일 때 현 AC 와 호 AC 로 둘러싸인 색칠한 부분의 넓이 구하기. [7점]
  category: "이등변삼각형으로 중심각 120° → 부채꼴 − 삼각형"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "OA=OC 인 이등변삼각형(또는 원주각·중심각 관계)에서 ∠AOC=180°−2×30°=120° 를 끌어내야 부채꼴의 중심각이 정해진다"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "활꼴은 직접 잴 수 없으므로 색칠한 부분을 부채꼴 AOC 에서 △AOC 를 뺀 차로 다시 그려 두 표준 공식(부채꼴 넓이 · 삼각비 넓이)의 조합으로 전환"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "원(부채꼴)과 삼각형이 섞인 색칠한 부분의 넓이 — 활꼴"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    부채꼴 AOC=(120/360)·π·6²=12π, △AOC=(1/2)·6·6·sin120°=9√3 의 차가 답.
    중심각을 30° 나 60° 로 잘못 잡는 것과 「부채꼴−삼각형」 대신 반원에서 빼는 오답이 두 함정이다(Mₜ=2).
    통찰 2개(XU d1 · RT d2) · M_total 7 → +1 → 서술형 출발점 ★3 에서 ★4. I-XU 보유로 ★4 게이트 통과.
  tier: star_4
  mechanism_primary: "OA=OC, ∠CAB=30° → ∠AOC=120° → 부채꼴 12π − △AOC 9√3 = 12π−9√3"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$(12\pi-9\sqrt{3})\,\mathrm{cm}^2$'
  answer_source: "답지"
  figure: "crop:fig-55-u5.png"
  latex: latex-bank/gn-m32/items/55-u5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "반지름(6 cm)과 ∠CAB(30°)를 바꿀 수 있다. 제약: 중심각 180°−2A 가 특수각이어야 하므로 A 는 15°·30°·45°·60° 중에서 고르고, 반지름은 부채꼴 중심각 분수와 sin 분모를 함께 지우는 6의 배수가 편하다."
    creative: "(1) 색칠한 부분을 반원에서 활꼴을 뺀 나머지로 바꾸기(빼기 방향이 반대 · ★4) (2) 현 BC 쪽 활꼴까지 두 개를 묻는 2항 서술형(★4) (3) 넓이를 주고 ∠CAB 를 역으로 묻기(BW 추가 · 통찰 3개 → ★5 후보)."
```

```yaml
- id: GN-M32-55-u6
  page: 55
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    평행사변형 ABCD 에서 BC=20 cm, CD=14 cm, ∠ABC:∠BCD=1:3 이고 O 가 두 대각선의 교점일 때 △OBC 의 넓이 구하기. [8점]
  category: "이웃각 합 180° + 비 → 각 결정 → 평행사변형 넓이 → 대각선 4등분"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "각이 하나도 수치로 주어지지 않았고 비 1:3 만 있으므로, 평행사변형의 이웃각 합이 180° 라는 조건과 결합해 45°·135° 를 단번에 결정"
    - step: 2
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 대각선이 평행사변형의 넓이를 넓이가 같은 네 부분으로 나눈다는 중2 도형의 성질을 끌어와 △OBC=(1/4)□ABCD 로 연결"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "각의 비가 주어진 평행사변형에서 대각선이 나누는 부분의 넓이"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    ∠ABC=45°, ∠BCD=135° → □ABCD=20·14·sin45°=140√2 → △OBC=(1/4)·140√2=35√2.
    각을 비에서 복원하는 첫 단계와 넓이를 4등분하는 마지막 단계가 모두 삼각비 바깥의 성질이라 연결 고리가 둘이다.
    통찰 2개(CON d2 · XU d1) · M_total 8 → +1 → 서술형 출발점 ★3 에서 ★4. 배점 8점(이 범위 최고 배점)과도 맞는다.
  tier: star_4
  mechanism_primary: "이웃각 합 180° + 비 1:3 → ∠ABC=45° → □ABCD=20·14·sin45°=140√2 → △OBC=(1/4)□ABCD=35√2"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$35\sqrt{2}\,\mathrm{cm}^2$'
  answer_source: "답지"
  figure: "crop:fig-55-u6.png"
  latex: latex-bank/gn-m32/items/55-u6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "BC(20), CD(14), 각의 비(1:3)를 바꿀 수 있다. 제약: 180° 를 비의 합으로 나눈 값이 특수각이라야 하므로 비는 1:3(45°)·1:2(60°)·1:5(30°) 중에서 고르고, 두 변의 곱이 4 로 나누어떨어져야 답이 깔끔하다."
    creative: "(1) △OAB(같은 넓이)나 △OAB+△OBC 를 묻는 항목으로 바꾸기(★3~4) (2) △OBC 넓이를 주고 CD 를 역으로 묻기(BW 추가 · ★5 후보) (3) 평행사변형을 마름모로 바꿔 대각선 길이까지 묻는 2항 서술형(★4)."
```

## 표본 판정 요약 (32문)

- ★ 분포: ★1 1 · ★2 15 · ★3 10 · ★4 6 · ★5 0
- 통찰형 20 · 절차형 12 · premium 0
- 구역별 ★ 중앙값: STEP 1 기본 12문 → ★2(★1 1문) · STEP 2 발전 9문 → ★3(★2 2문 · ★4 2문) · STEP 3 실력 UP 3문 → ★4(★3 1문) · 서술형 대비 8문 → ★3(★2 2문 · ★4 2문). 구역 출발점과 판정이 대체로 일치하고, 어긋난 4문은 아래 이슈 표에 모았다.
- 통찰 유형 분포(총 25개 라벨): I-RT 10 · I-XU 4 · I-EQV 3 · I-BW 3 · I-CON 2 · I-SYM 1 · I-SC 1 · I-MI 0 · I-PD 0 · I-VF 0. 이 단원의 변별은 거의 전부 「보조선을 그어 다른 표현으로 옮기기(RT)」와 「원·무게중심 같은 다른 단원 성질 끌어오기(XU)」에서 나온다.
- type_hint 상위 5: 「대각선/보조선으로 분할하는 사각형의 넓이」 5(51-10 · 53-24 · 54-e2 · 54-u2 · 51-12) · 「삼각비의 실생활 활용(측량·높이)」 5(50-03 · 50-05 · 53-22 · 54-e1 · 54-u1) · 「두 각과 한 변이 주어진 삼각형의 변의 길이(수선 긋기)」 3(52-15 · 55-u3 · 50-04) · 「평행사변형의 넓이·변·부분 넓이」 3(51-11 · 53-21 · 55-u6) · 「원·부채꼴과 결합한 넓이」 3(51-09 · 53-19 · 55-u5).
- 그림: 32문 전수(`crop:fig-<id>.png`). 이 중 수치가 발문이 아니라 그림에만 있는 문항이 9문(51-10 · 51-12 · 52-16 · 53-24 · 54-e2 · 54-u2 · 55-u3 · 55-u5 · 50-03)이라 변형 시 그림 라벨을 반드시 함께 고쳐야 한다.
- 답 형식: 5지선다 16문 · 수치 서술 16문(서술형 8문은 배점 6~8점 표기 포함). 전사본 answer 를 그대로 옮겼고 골조를 잡는 과정에서 조건과 답이 어긋난 문항은 없었다.

## 분류 이슈 목록

판정이 애매하거나 벤더 구역 신호와 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-M32-52-13 | STEP 2 발전 문제(★3 출발)지만 40−40cos30° 두 줄로 끝나고 통찰 없음 · M_total 4 → ★2 로 내림 | ★2 / ★3 |
| GN-M32-53-20 | STEP 2 발전 문제(★3 출발)지만 정육각형=정삼각형 6개라는 표준 분할 한 줄 · M_total 5 → ★2 로 내림 | ★2 / ★3 |
| GN-M32-53-22 | STEP 3 실력 UP(★4 출발)이나 「sin 선택 → 거리÷속력」 2단계뿐 · 통찰 1(d1) → ★3 으로 내림. 구역 신호와 1단 차이 | ★3 / ★4 |
| GN-M32-52-16 | STEP 2 발전 문제(★3 출발)이나 통찰 2개(CON·RT)+M_total 10 으로 실력 UP 3문과 같은 무게 → ★4 로 올림 | ★3 / ★4 |
| GN-M32-53-19 | 위와 같은 사유로 STEP 2 에서 ★4 로 올림. 다만 반지름 보조선 풀이 대신 ∠ADC=150° 이등변 경로를 택하면 통찰 1개로 ★3 이 되어, 유형 카탈로그 작성 시 대표 풀이를 먼저 고정해야 함 | ★3 / ★4 |
| GN-M32-55-u5 | 서술형(★3 출발)이나 통찰 2개로 ★4. 중심각 도출을 원주각(원 단원)으로 보면 XU d2 가 되어 depth 가 올라가고, 이등변삼각형으로 보면 d1 — 여기서는 보수적으로 d1 로 두었다 | ★3 / ★4 |
| GN-M32-51-08 | 등적변형 착안(EQV d2)이 STEP 1 치고 무겁지만 계산이 한 줄이라 ★2 유지. 카탈로그에서 「등적변형」을 독립 유형으로 세우면 base ★3 이 될 수 있음 | ★2 / ★3 |
| GN-M32-50-06 | 기본 문제이나 여각 전환 + 수선의 발 위치 판단으로 M_total 7 · 통찰 1 → ★2 유지했으나 체감은 ★3 쪽 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: ⑴ 「사각형의 넓이 — 대각선으로 분할」(51-10 · 54-e2 · 54-u2 · 53-24)과 「사각형의 넓이 — 두 대각선과 끼인각」(51-12)은 겉보기 발문이 같지만 골조가 전혀 달라 반드시 분리해야 한다. ⑵ 「수선 긋기로 변의 길이」(50-04 · 52-14 · 52-15 · 55-u3)는 수선의 발이 변 **안**에 있는지 **연장선 위**에 있는지로 base ★ 가 1단 갈린다(52-14 는 연장선). ⑶ 「각의 이등분선의 길이 = 넓이의 합」(52-18)은 이 단원에서 유일하게 길이를 넓이식으로 옮기는 골조라 단독 유형이 맞다. ⑷ 「회전과 겹치는 부분」(53-23)도 단독.
- **통합해도 될 유형**: ⑴ 실생활 측량 5문(50-03 · 50-05 · 53-22 · 54-e1 · 54-u1)은 「공통 밑변/높이를 두고 두 tan 의 합 또는 차」 하나로 묶고, 3차원(50-03)과 미지수 설정(50-05)만 하위 변형으로 두면 된다. ⑵ 「원과 결합한 넓이」(51-09 · 53-19 · 55-u5)는 모두 중심각을 먼저 확정한 뒤 삼각비 넓이 공식으로 가는 같은 골조라 한 유형 + 난이도 층으로 충분하다. ⑶ 「평행사변형의 부분 넓이」(51-11 · 55-u6)도 넓이 비 도구만 다를 뿐 한 유형.
- **base ★ 설계 제안**: 이 범위에서 통찰 0~1 · M_total ≤ 6 인 표준형이 base ★2, 보조선을 스스로 도입하는 유형이 base ★3, 통찰 2개가 구조적으로 강제되는 유형(52-16 · 53-19 · 53-23 · 53-24 · 55-u5 · 55-u6)이 base ★4 로 모인다. ★5 는 이 범위에 없다(통찰 3개 이상 + SC/VF/SYM/XU 동시 보유 문항 부재). 카탈로그 작성 시 ★5 슬롯은 위 variation_notes 의 「BW 추가」 창의 변형에서 새로 만들어야 한다.
