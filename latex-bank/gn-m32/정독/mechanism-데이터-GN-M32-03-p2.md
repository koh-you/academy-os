---
name: mechanism-데이터-GN-M32-03-p2
description: 개념원리 중학 3-2 03 임의의 예각의 삼각비의 값(2/2 · 32문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 중학 3-2 · 전사본 latex-bank/gn-m32
  section: 03 임의의 예각의 삼각비의 값
  unit_code: GN-M32-03
  part: "2/2"
  extract_range: "28~33쪽 · 28-01~33-u6"
  total_problems: 32
  unit_total: 56
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). depth_score 는 effective_depth 의 합. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-m32/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-m32/items/<id>.tex
  image_source: latex-bank/gn-m32/figures/ (crops.json)
---

# 개념원리 중학 3-2 · 03 임의의 예각의 삼각비의 값 (2/2) 정독 데이터 (v1.0)

이 파일은 03 단원의 뒷부분, 28~33쪽 32문항 전수를 다룬다. 구역은 「중단원 마무리하기 STEP 1 기본 문제」 12문(28~29쪽) · 「STEP 2 발전 문제」 9문(30~31쪽) · 「STEP 3 실력 UP」 3문(31쪽) · 「서술형 대비 문제」 8문(32~33쪽 · 예제 `e` 와 유제 `u` 가 짝을 이룸)이다. 즉 이 범위는 단원 마무리 전체이며, 앞부분(1/2 · 21~27쪽)의 개념·핵심문제 구역에서 나온 골조가 여기서 섞여 재출제된다.

개념원리 중학은 난이도 표기(`level`)가 없고 **구역 자체가 난이도 층**이라 ★ 출발점을 구역에서 잡았다(STEP 1 ★2 · STEP 2 ★3 · STEP 3 ★4 · 서술형 ★3). 거기에서 M_total·통찰로 ±1 조정했다. 태그는 「꼭나와」 6문(28-03 · 28-04 · 29-07 · 29-11 · 30-14 · 30-17 · 31-20)뿐이고 「UP」 태그는 없다.

단원 내용은 (가) 직각삼각형에서 피타고라스 + 삼각비 정의, (나) 특수각·0°·90° 값 계산과 각 복원, (다) 반지름 1인 사분원에서 선분을 삼각비로 읽기와 삼각비의 표, (라) 보조선(수선·연장선)으로 직각삼각형을 만들어 각을 옮기기, (마) 직선의 기울기 = tan, (바) 입체도형 단면 여섯 갈래다. 이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다. 이 단원은 **무리수가 정리되는 변의 길이로 숫자 자유도가 제한**되고(3-4-5 · 1-2-√5 · 1-√3-2 계열), 각은 특수각과 그 합성(15°·22.5°·75°)으로만 움직인다 — 그 제약을 문항별 `variation_notes.numeric` 에 적었다.

## 문항 데이터

### 중단원 마무리하기 STEP 1 기본 문제

```yaml
- id: GN-M32-28-01
  page: 28
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP 1"
  summary: |
    ∠B=90° 인 직각삼각형 ABC 에서 AB:BC=3:2 일 때 cos C 의 값. 5지선다.
  category: "변의 비를 문자로 → 피타고라스로 빗변 → cos 정의 → 유리화"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직각삼각형에서 두 변의 비가 주어질 때의 삼각비"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    비가 주어졌으므로 3k, 2k 로 두는 한 단계가 먼저 필요하고(Mₐ 2) 빗변 √13 k 뒤 분모 유리화까지 간다.
    통찰 0·M_total 5 라 v3.8 −1 후보이나, cos C 가 C 를 낀 변의 비라는 점과 유리화가 실제 오답원이라 구역 신호 ★2 를 유지했다.
  tier: star_2
  mechanism_primary: "AB=3k, BC=2k → AC=√13 k → cos C=BC/AC=2√13/13"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: 'crop:fig-28-01.png'
  latex: latex-bank/gn-m32/items/28-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "비 3:2 를 다른 서로소 쌍(4:3 · 5:12 · 1:2)으로. 제약: 3:4·5:12 처럼 피타고라스 수를 쓰면 유리화가 사라져 ★1 로 내려가고, 그 외에는 √(a²+b²) 가 무리수라 유리화 단계가 유지된다. 묻는 삼각비는 sin·tan 어느 것이어도 무방."
    creative: "(1) 비 대신 두 변의 실제 길이를 주면 문자 도입이 사라져 ★1 (2) cos C 값을 주고 AB:BC 를 되묻으면 I-BW d1 · ★2 유지 (3) sin C+cos C 처럼 두 값을 합쳐 묻거나 넓이까지 요구하면 Mₖ 상승 ★3."
```

```yaml
- id: GN-M32-28-02
  page: 28
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP 1"
  summary: |
    ∠B=90° 인 직각삼각형 ABC 에서 빗변 AC=14, sin A=3/7 일 때 AB 의 길이.
  category: "sin 정의로 대변 길이 → 피타고라스로 나머지 변 → 무리수 정리"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각비의 값이 주어질 때 변의 길이 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    sin A=BC/AC 로 BC=6 을 얻고 √(14²−6²)=√160 을 4√10 으로 정리하면 끝난다.
    계산은 두 줄이지만 √160 의 소인수 정리가 Mₖ 2 를 만든다. 통찰 0 · 기본 문제 구역 → ★2.
  tier: star_2
  mechanism_primary: "sin A=BC/AC → BC=6 → AB=√(14²−6²)=4√10"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4\sqrt{10}$'
  answer_source: "답지"
  figure: 'crop:fig-28-02.png'
  latex: latex-bank/gn-m32/items/28-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "빗변 14 와 sin A=3/7 의 짝은 '분모가 빗변의 약수'여야 대변이 정수가 된다(10 과 3/5 · 15 와 2/3 등). 제약: 나머지 변이 √(정수) 로 정리되게 하려면 세 수를 피타고라스 수로 맞추지 않아야 무리수 정리 단계가 남는다."
    creative: "(1) 주어지는 비를 cos·tan 으로 바꾸면 어느 변이 대변인지 판별하는 함정이 추가돼 ★2 유지 (2) 구하는 대상을 삼각형의 넓이로 바꾸면 Mₖ 상승 ★2~3 (3) 각 A 를 다른 도형(직사각형 대각선) 안에 숨기면 각 이동 통찰이 붙어 ★3."
```

```yaml
- id: GN-M32-28-03
  page: 28
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "중단원 마무리 STEP 1"
  summary: |
    ∠B=90° 인 직각삼각형 ABC 에서 2 tan A=1 일 때 sin A × cos A 의 값. 5지선다.
  category: "tan 값 → 두 변을 1,2 로 두기 → 빗변 √5 → sin·cos 곱"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "한 삼각비의 값으로 다른 삼각비의 값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    tan A=1/2 를 '대변 1, 인접변 2 인 직각삼각형'으로 바꾸는 표준 절차 하나로 끝난다. 빗변 √5 를 만든 뒤 (1/√5)(2/√5) 에서 √ 가 상쇄되는 것이 계산의 전부(Mₖ 2).
    그림 없이 ∠B=90° 만 주어져 어느 변이 대변인지 스스로 잡아야 한다. 통찰 0 · 기본 문제 → ★2.
  tier: star_2
  mechanism_primary: "tan A=1/2 → BC=1, AB=2, AC=√5 → sin A·cos A=(1/√5)(2/√5)=2/5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m32/items/28-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "tan A 의 값은 어떤 유리수여도 되고(1/3 · 3/4 · 2) 빗변이 무리수여도 곱에서 상쇄된다. 제약: 3 tan A=2 처럼 계수를 붙이면 첫 단계가 한 줄 늘 뿐 난이도는 그대로. 묻는 식을 sin A×cos A 로 두면 항상 (분자 곱)/(빗변²) 이라 답이 유리수가 된다."
    creative: "(1) sin A+cos A 나 sin A÷cos A 로 바꾸면 유리화가 살아나 ★2 유지 (2) sin²A+cos²A 를 묻고 값이 tan 과 무관함을 보이게 하면 I-EQV d1 · ★3 (3) 주어진 값을 cos A 로 주고 tan A 를 되묻으면 골조 동일."
```

```yaml
- id: GN-M32-28-04
  page: 28
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "중단원 마무리 STEP 1"
  summary: |
    AB=12, AD=16 인 직사각형 ABCD 에서 AH⊥BD 이고 ∠BAH=x 일 때 sin x 의 값. 5지선다.
  category: "대각선 BD → ∠BAH=∠ADB 로 각 이동 → sin x=AB/BD"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "직각삼각형 ABH·ABD 가 같은 각을 공유함을 이용해 ∠BAH 를 ∠ADB 로 옮겨, 수선 AH 를 구하지 않고 답에 도달"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "직각삼각형의 빗변에 내린 수선이 만드는 각의 삼각비"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    BD=20 을 먼저 얻고, ∠BAH 와 ∠ADB 가 모두 ∠ABD 의 여각임을 보면 sin x=AB/BD=3/5 로 한 줄에 끝난다.
    각을 옮기지 않으면 AH=48/5, BH=36/5 를 거쳐야 해서 계산이 두 배가 된다(I-EQV d1).
    통찰 1개지만 depth 1 이고 단원 표준 각 이동이라 구역 신호 ★2 유지.
  tier: star_2
  mechanism_primary: "BD=√(12²+16²)=20 → ∠BAH=∠ADB(여각) → sin x=AB/BD=3/5"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: 'crop:fig-28-04.png'
  latex: latex-bank/gn-m32/items/28-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "12·16 은 3:4 피타고라스 수의 4배. 다른 배수(6·8 · 9·12)나 5:12 계열로 바꿔도 BD 가 정수라 골조가 유지된다. 제약: 피타고라스 수를 벗어나면 BD 가 무리수가 되어 sin x 에 유리화가 붙고 ★3 쪽으로 이동."
    creative: "(1) 묻는 값을 cos x·tan x 로 바꾸면 각 이동은 그대로이고 대응 변만 달라짐(★2) (2) 수선의 발 H 를 기준으로 BH·DH 의 길이를 묻게 하면 닮음비 단계가 추가돼 ★3 (3) 직사각형을 평행사변형으로 바꾸면 수선의 발이 밖으로 나가 I-MI d2 · ★4."
```

```yaml
- id: GN-M32-28-05
  page: 28
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP 1"
  summary: |
    특수각의 삼각비로 이루어진 다섯 식 중 계산 결과가 나머지 넷과 다른 하나 고르기. 5지선다.
  category: "특수각 값 대입 → 다섯 식을 각각 계산 → 값이 다른 하나 비교"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "특수각의 삼각비를 포함한 식의 계산(다른 하나 찾기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    한 식이 아니라 다섯 식을 모두 계산해야 하므로 단계 수(Mₛ 2)와 계산량(Mₖ 2)만으로 난이도가 만들어진다.
    ④ 의 (1−cos60°)(1+cos60°) 는 곱셈 공식으로 1−cos²60° 로 두면 빠르지만 그대로 곱해도 되어 통찰로 카운트하지 않았다. 기본 문제 구역 → ★2.
  tier: star_2
  mechanism_primary: "각 선택지에 특수각 값 대입 → ①②③⑤ 는 모두 √3 · ④ 만 3/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m32/items/28-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공통값(√3)과 예외 선택지의 값(3/2)만 정하면 다섯 식은 얼마든지 재구성된다. 제약: 특수각 표(30·45·60 과 0·90) 안에서만 조합해야 하고, 예외 선택지가 공통값과 육안으로 구별될 만큼 달라야 한다(√3 대 3/2 처럼 무리수/유리수로 가르면 안전)."
    creative: "(1) '나머지 넷과 다른 하나' 대신 '값이 가장 큰 것'으로 바꾸면 대소 비교가 추가돼 ★3 (2) 선택지에 0°·90° 를 섞으면 정의되지 않는 tan90° 함정으로 Mₜ 상승 (3) 다섯 식의 합을 묻게 하면 순수 계산량 문제가 되어 질이 떨어짐(★2 유지, 권장하지 않음)."
```

```yaml
- id: GN-M32-28-06
  page: 28
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP 1"
  summary: |
    0°<x<75° 에서 cos(x+15°)=1/2 일 때 tan x 의 값.
  category: "cos 값 → 치환각 60° 복원 → x=45° → tan 45°"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "특수각의 삼각비를 이용한 각의 크기 구하기(치환각)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    cos60°=1/2 를 떠올리면 x+15°=60° → x=45° → tan45°=1 로 세 줄이다. 범위 0°<x<75° 는 치환각이 예각 하나로 정해지게 하는 장치라 실제 분기가 생기지 않는다.
    통찰 0·M_total 4 로 v3.8 −1 조건을 충족 → 기본 문제 구역 ★2 에서 −1 하여 ★1.
  tier: star_1
  mechanism_primary: "cos(x+15°)=1/2 → x+15°=60° → x=45° → tan45°=1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m32/items/28-06.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이동량 15° 와 최종 각 45° 를 바꿔도 된다. 제약: 치환각(x+a)이 30·45·60 중 하나여야 하고, 범위 상한은 '치환각이 90° 를 넘지 않게'(a+상한=90°) 맞춰야 한다. 묻는 삼각비를 tan 으로 두면 x=45° 일 때만 답이 정수."
    creative: "(1) 치환식을 2x+a 로 만들면 나누는 단계가 하나 늘어 ★2 (2) sin(x+a)=cos(x+b) 처럼 서로 다른 삼각비를 등호로 두면 여각 관계 통찰 I-EQV d2 · ★3 (3) 범위를 넓혀 치환각 후보가 둘이 되게 하면 I-MI d2 · ★3."
```

```yaml
- id: GN-M32-29-07
  page: 29
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "중단원 마무리 STEP 1"
  summary: |
    ∠BAC=90°, ∠D=90°, ∠B=45°, ∠DAC=60° 이고 BC=2√6 cm 일 때 CD 의 길이. 5지선다.
  category: "45° 직각삼각형에서 공통변 AC → 60° 직각삼각형에서 CD"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "특수각을 낀 두 직각삼각형에서 공통변을 이용한 변의 길이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 삼각형이 변 AC 를 공유한다는 점만 보면 AC=BC·sin45°=2√3, CD=AC·sin60°=3 으로 두 줄이다.
    공통변을 다리로 쓰는 구조가 발문과 그림에 그대로 노출돼 있어(∠DAC 가 A 에서 시작) 통찰로 카운트하지 않고 절차형으로 두었다. 무리수 두 번 정리가 Mₖ 2. 기본 문제 → ★2.
  tier: star_2
  mechanism_primary: "AC=BC·sin45°=2√3 → CD=AC·sin60°=3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: 'crop:fig-29-07.png'
  latex: latex-bank/gn-m32/items/29-07.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "BC 의 길이는 두 번의 특수각 곱이 정리되도록 √6 의 배수 계열로 잡아야 한다(2√6 → 4√6 등). 제약: 두 각 45°·60° 를 30°·45° 로 바꾸면 필요한 BC 형태도 바뀐다. 묻는 변을 AD 로 바꾸면 마지막 단계만 cos60° 로 교체."
    creative: "(1) 공통변을 문자 a 로 두고 두 식을 연립하게 하면 Mₐ 상승 ★3 (2) 두 삼각형이 공통변을 공유하지 않고 닮음으로만 연결되게 하면 I-EQV d2 · ★3 (3) 사각형 ABCD 의 넓이까지 묻게 하면 단계 두 개 추가 ★3."
```

```yaml
- id: GN-M32-29-08
  page: 29
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP 1"
  summary: |
    일차방정식 3x−5y+15=0 의 그래프가 x축의 양의 방향과 이루는 각을 α 라 할 때 tan α 의 값. 5지선다.
  category: "일차방정식을 y=ax+b 꼴로 → 기울기=tan α"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "직선이 x축과 이루는 각(기하)을 기울기라는 대수 계수로 전환 — 직각삼각형을 그리지 않고 계수에서 바로 읽는다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "직선의 기울기와 삼각비"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y=(3/5)x+3 으로 고치면 tan α=3/5 로 끝난다. 계산은 이항 한 번(Mₖ 1)뿐이고 난이도의 전부가 '기울기=tan α' 표현 전환에 있다(I-RT d1).
    M_total 4 로 낮지만 통찰이 1개 있어 −1 하지 않고 기본 문제 구역 ★2 유지.
  tier: star_2
  mechanism_primary: "3x−5y+15=0 → y=(3/5)x+3 → tan α=기울기=3/5"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: 'crop:fig-29-08.png'
  latex: latex-bank/gn-m32/items/29-08.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x·y 계수는 자유이나 기울기가 양수여야 α 가 예각이 된다. 제약: 기울기가 √3·1·√3/3 이면 α 가 특수각이 되어 문항 성격이 '각 구하기'로 바뀐다. 상수항은 답에 영향이 없어 아무 값이나 가능."
    creative: "(1) tan α 를 주고 직선의 방정식을 되묻으면 I-BW d1 · ★2~3 (2) 기울기가 음수인 직선으로 바꿔 x축의 양의 방향과 이루는 각이 둔각이 되게 하면 중3 범위를 벗어남(권장하지 않음) (3) 이 직선과 두 좌표축이 만드는 삼각형의 넓이까지 묻게 하면 30-18 골조와 합쳐져 ★3."
```

```yaml
- id: GN-M32-29-09
  page: 29
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP 1"
  summary: |
    반지름의 길이가 1인 사분원에서 OB 의 길이와 값이 같은 것 모두 고르기(정답 2개). ∠AOB=x, ∠OAB=y.
  category: "반지름 1 인 직각삼각형 OAB → OB=cos x · 여각 관계로 OB=sin y"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "사분원 그림의 선분 OB 를 '빗변이 1인 직각삼각형의 밑변', 즉 cos x 로 읽는 기하→대수 전환"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "같은 선분을 y 쪽에서 보면 대변이 되므로 OB=sin y — 여각 관계로 두 번째 표현을 얻어야 '정답 2개'가 완성"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "반지름이 1인 사분원에서 선분의 길이로 삼각비 읽기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    OB=cos x 는 대부분 찾지만, 같은 선분이 ∠OAB=y 에 대해서는 대변이 되어 sin y 와도 같다는 두 번째 표현을 놓치면 '정답 2개'를 채우지 못한다.
    계산은 전혀 없고(Mₖ 1) 난이도가 통찰 2개(RT d1 + EQV d1)에만 있다. 기본 문제 구역 ★2 에서 통찰 2개로 +1 → ★3.
    [분류 이슈] 두 통찰 모두 depth 1 이고 단원 표준이라 ★2 로 볼 여지가 있음.
  tier: star_3
  mechanism_primary: "OA=1 인 직각삼각형 OAB → OB=cos x, ∠OAB=y 기준으로는 OB=sin y"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "②, ④"
  answer_source: "답지"
  figure: 'crop:fig-29-09.png'
  latex: latex-bank/gn-m32/items/29-09.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "반지름 1 은 이 유형의 고정값이라 바꿀 수 없다(바꾸면 선분이 삼각비 값 자체가 아니게 된다). 그림 라벨 O·A·B·C·D 와 두 각 x·y 의 위치도 고정."
    creative: "(1) 묻는 선분을 AB(=sin x=cos y) 나 CD(=tan x) 로 바꾸면 같은 골조 ★3 (2) '정답 2개' 를 '하나'로 줄이면 여각 단계가 사라져 ★2 (3) OB+AB 처럼 두 선분의 합을 sin·cos 로 표현하게 하면 I-CON d2 · ★4 (4) 31-21 처럼 1−cos x 꼴 선분(BC)을 끼우면 ★4."
```

```yaml
- id: GN-M32-29-10
  page: 29
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP 1"
  summary: |
    cos0°+sin90°−sin45°×cos45°+tan0°−2 tan45° 를 계산하기. 5지선다.
  category: "0°·90°·45° 의 삼각비 값 대입 → 사칙 계산"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "0°, 90°, 특수각의 삼각비를 포함한 식의 값"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    cos0°=sin90°=1, tan0°=0, sin45°×cos45°=1/2, tan45°=1 을 그대로 넣으면 1+1−1/2+0−2=−1/2 이다.
    단계는 대입 한 번이고 기억해야 할 값이 0°·90° 를 포함한다는 것 외의 부담이 없다. 통찰 0·M_total 4 → 기본 문제 ★2 에서 −1 하여 ★1.
  tier: star_1
  mechanism_primary: "0°·90°·45° 값 대입 → 1+1−1/2+0−2=−1/2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m32/items/29-10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "항의 개수와 계수는 자유. 제약: 0°·90° 와 45° 값만 써야 답이 간단한 유리수로 떨어지고, tan90° 는 정의되지 않으므로 넣지 않는다. 답이 0 이 되게 계수를 맞추면 채점은 쉽지만 변별이 사라진다."
    creative: "(1) sin²45°+cos²45° 처럼 제곱 항을 섞으면 Mₖ 1 상승 (2) 식 안에 미지의 각 x 를 넣고 값을 만족하는 x 를 되묻으면 I-BW d1 · ★2 (3) tan90° 가 정의되지 않음을 판단하게 하는 보기를 섞으면 Mₜ 상승 ★2."
```

```yaml
- id: GN-M32-29-11
  page: 29
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "중단원 마무리 STEP 1"
  summary: |
    x=53° 일 때 sin x, cos x, tan x 의 대소 관계를 바르게 나타낸 식 고르기. 5지선다.
  category: "45°<x<90° 구간의 삼각비 대소 성질 → cos x<sin x<tan x"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "예각의 크기에 따른 삼각비의 대소 관계"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    53° 라는 구체값은 '45° 보다 크다'는 사실만 쓰이고, 그때 tan x>1>sin x>cos x 라는 단원 결론을 그대로 적용하면 끝난다.
    계산·단계가 없어 M_total 4 이지만 45° 경계 판단이라는 단일 함정(T-경계)이 오답을 직접 만들고 sin 과 tan 의 순서를 뒤집는 오답이 많아 −1 하지 않고 ★2 로 두었다.
  tier: star_2
  mechanism_primary: "45°<53°<90° → tan x>1, sin x>cos x → cos x<sin x<tan x"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m32/items/29-11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각은 45°<x<90° 안의 아무 값(53·62·78)으로 바꿀 수 있고 결론이 같다. 제약: 0°<x<45° 로 옮기면 정답이 tan x<sin x<cos x 로 바뀌고, x=45° 로 두면 sin=cos 라 대소가 성립하지 않는다."
    creative: "(1) 각을 문자 x 로 두고 범위만 주면 Mₐ 2 · ★3 (2) 0°<x<45° 와 45°<x<90° 를 한 문항에 섞어 경우를 나누게 하면 I-MI d2 · ★3 (3) sin x, cos x, tan x 에 1 을 섞어 네 값의 대소를 묻게 하면 ★3."
```

```yaml
- id: GN-M32-29-12
  page: 29
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP 1"
  summary: |
    sin x=0.8829, cos y=0.4848, tan z=1.9626 일 때 삼각비의 표를 이용하여 x+y−z 의 크기 구하기.
  category: "삼각비의 표에서 값 → 각 역참조 3회 → 각의 합·차"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각비의 표에서 각의 크기 찾기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    표의 세 열(sin·cos·tan)에서 각각 값을 찾아 x=62°, y=61°, z=63° 를 읽고 62+61−63 을 계산한다.
    역참조를 세 번 하면서 '어느 열에서 찾는가'만 틀리지 않으면 되어 계산 부담은 없다(Mₖ 1). 통찰 0·M_total 5 이나 세 번 반복과 열 선택 함정으로 구역 신호 ★2 유지.
  tier: star_2
  mechanism_primary: "표에서 x=62°, y=61°, z=63° 역참조 → x+y−z=60°"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$60^\circ$'
  answer_source: "답지"
  figure: 'crop:fig-29-12.png'
  latex: latex-bank/gn-m32/items/29-12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 값은 첨부된 표의 행 안에서만 고를 수 있다(표 밖의 값을 쓰면 문항이 성립하지 않음). 제약: x+y−z 가 특수각(60°)처럼 깔끔하게 떨어지도록 세 각을 고르는 것이 이 유형의 설계 포인트."
    creative: "(1) 묻는 대상을 sin(x+y−z) 로 바꾸면 특수각 대입 한 단계가 추가돼 ★3 (2) 세 값 중 하나를 '표에 없는 값'으로 주고 가장 가까운 각을 고르게 하면 근삿값 판단이 붙어 ★3 (3) 31-21 처럼 표를 쓰기 전에 선분을 1−cos x 꼴로 바꾸는 단계를 끼우면 I-EQV d2 · ★4."
```

### 중단원 마무리하기 STEP 2 발전 문제

```yaml
- id: GN-M32-30-13
  page: 30
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP 2"
  summary: |
    ∠B=90°, AB=2√3, AC=6 인 직각삼각형 ABC 에서 BC 의 중점을 D, ∠BAD=x 라 할 때 cos x 의 값. 5지선다.
  category: "피타고라스로 BC → 중점으로 BD → 작은 직각삼각형 ABD 에서 다시 피타고라스 → cos x"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직각삼각형의 중선이 만드는 각의 삼각비"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    BC=2√6 → BD=√6 → AD=√(12+6)=3√2 로 피타고라스를 두 번 쓰고 cos x=AB/AD 에서 유리화한다.
    x 가 큰 삼각형이 아니라 △ABD 의 각이라는 점만 잡으면 나머지는 표준 절차라 통찰 0 으로 두었다.
    무리수 계산이 세 번 반복돼 Mₖ 2, M_total 6 → −1 조건 미달이라 발전 문제 구역 ★3 유지.
  tier: star_3
  mechanism_primary: "BC=2√6 → BD=√6 → AD=3√2 → cos x=AB/AD=√6/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: 'crop:fig-30-13.png'
  latex: latex-bank/gn-m32/items/30-13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AB 와 AC 는 AC>AB 이기만 하면 되지만, BC 가 √(짝수) 라야 중점 BD 가 다시 정리된다(2√3·6 → BC=2√6). 제약: 3-4-5 계열을 쓰면 BD 가 유리수가 되어 유리화가 사라지고 ★2 로 내려간다."
    creative: "(1) D 를 중점이 아니라 삼등분점으로 바꾸면 비만 달라지고 골조 동일(★3) (2) ∠BAD 대신 ∠DAC 를 물으면 각의 차를 다뤄야 해 31-22 골조로 올라가 ★4 (3) 중선 AD 의 길이만 묻게 하면 삼각비가 빠져 ★2."
```

```yaml
- id: GN-M32-30-14
  page: 30
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "중단원 마무리 STEP 2"
  summary: |
    AB=10, AC=4√5 인 삼각형 ABC 에서 cos B=3/5 일 때 sin C 의 값(직각삼각형이 아님).
  category: "꼭짓점 A 에서 BC 에 수선 → cos B 로 BH·AH → △AHC 에서 sin C"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "삼각비는 직각삼각형에서만 정의되므로, 직각이 없는 △ABC 를 A 에서 내린 수선으로 두 직각삼각형으로 바꾸는 보조선 착안(기하 구조 전환)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "직각삼각형이 아닌 삼각형에서 수선을 그어 삼각비 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    보조선 AH 를 긋지 않으면 cos B 와 sin C 를 이을 길이 없다 — 이 문항의 난이도 전부가 그 착안에 있다(I-RT d2).
    수선을 그으면 BH=6, AH=8 이 3:4:5 로 떨어지고 △AHC 에서 sin C=AH/AC=2√5/5 로 끝난다.
    통찰 1개(d2)·M_total 6 → 발전 문제 구역 ★3 유지.
  tier: star_3
  mechanism_primary: "A 에서 BC 에 수선 AH → cos B=3/5 로 BH=6, AH=8 → sin C=AH/AC=2√5/5"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{2\sqrt{5}}{5}$'
  answer_source: "답지(쪽 렌더)"
  figure: 'crop:fig-30-14.png'
  latex: latex-bank/gn-m32/items/30-14.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AB 와 cos B 는 BH·AH 가 정수로 떨어지는 3:4:5 계열(10 과 3/5 · 13 과 5/13)로 잡는다. AC 는 sin C 가 정리되는 값이면 되고, AC≥AH 여야 삼각형이 성립한다. 제약: AC<AH 면 수선의 발이 변 밖으로 나가 문항이 깨진다."
    creative: "(1) 주어진 각을 cos B 대신 tan B 로 주면 첫 단계만 바뀜(★3) (2) sin C 대신 △ABC 의 넓이를 물으면 AH 활용이 직접적이라 ★2~3 (3) ∠B 를 둔각으로 두어 수선의 발이 변의 연장선 위에 오게 하면 I-MI d2 · ★4 (4) BC 의 길이를 물으면 BH+HC 두 조각을 모두 구해야 해 Mₛ 상승 ★4."
```

```yaml
- id: GN-M32-30-15
  page: 30
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP 2"
  summary: |
    ∠A=90° 인 직각삼각형 ABC 에서 D는 AC 위, DE⊥BC, EF⊥DC 일 때 다섯 개의 변의 비 중 tan B 를 나타내지 않는 것 고르기. 5지선다.
  category: "닮은 직각삼각형 사슬에서 ∠B 와 같은 각 찾기 → 각 삼각형에서 tan 의 대변/인접변 확인"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "∠B=∠EDC=∠FEC=∠FDE 임을 닮음으로 옮겨, 서로 다른 세 직각삼각형에서 같은 tan 값을 읽어내는 각의 이동"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "닮은 직각삼각형에서 같은 각의 삼각비 찾기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    수치가 하나도 없고 선분 기호만 주어져(Mₐ 2) 각을 옮기는 것만으로 판정해야 한다.
    ∠B 와 같은 각을 세 번 옮긴 뒤 각 직각삼각형에서 tan=대변/인접변 을 확인하면 ⑤ 만 역수임이 드러난다(정답이 tan 의 역수라는 함정).
    통찰 1개(EQV d2)·M_total 6 → 발전 문제 구역 ★3 유지.
  tier: star_3
  mechanism_primary: "∠B=∠EDC=∠FEC=∠FDE → 각 직각삼각형에서 tan 확인 → ⑤ DF/EF 는 tan 의 역수"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "⑤"
  answer_source: "답지"
  figure: 'crop:fig-30-15.png'
  latex: latex-bank/gn-m32/items/30-15.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수치가 없는 문항이라 숫자 변형 여지가 없다. 변형은 그림의 수선 개수(사슬 길이)와 선택지 구성으로만 만든다. 제약: 그림 라벨 A~F 와 두 수선의 위치는 고정."
    creative: "(1) 묻는 삼각비를 sin B·cos B 로 바꾸면 대응 변만 달라지고 골조 동일(★3) (2) 사슬을 한 단 더 늘려 네 번째 닮은 삼각형을 만들면 Mₛ 상승 ★4 (3) 변 하나에 수치를 주고 나머지 변의 길이까지 구하게 하면 닮음비 계산이 붙어 ★4 (4) '모두 고르시오' 형식으로 바꾸면 I-VF 성격이 생겨 ★4."
```

```yaml
- id: GN-M32-30-16
  page: 30
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP 2"
  summary: |
    이차방정식 2x²+ax−4=0 의 한 근이 tan45°−cos60° 일 때 상수 a 의 값. 5지선다.
  category: "특수각 값으로 근 계산 → 근을 방정식에 대입 → a 에 대한 일차방정식"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각비의 값을 근으로 갖는 이차방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    tan45°−cos60°=1/2 를 구한 뒤 대입하면 1/2+a/2−4=0 → a=7 로 두 줄이다. 삼각비는 '근을 만들어 주는 수치 공급원'일 뿐이고 풀이의 본체는 근의 대입이라 I-XU 로 카운트하지 않았다(단순 표기 차용).
    상수 a 가 미지수라 Mₐ 2. 통찰 0·M_total 5 → 발전 문제 ★3 에서 −1 하여 ★2.
    [분류 이슈] 이차방정식과 삼각비의 결합을 I-XU 로 볼지에 따라 ★3 가 될 수 있음.
  tier: star_2
  mechanism_primary: "tan45°−cos60°=1/2 → 2(1/2)²+a(1/2)−4=0 → a=7"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m32/items/30-16.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근으로 쓰는 특수각 조합(tan45°−cos60°=1/2 · sin30°+cos60°=1 · tan60°×cos30°=3/2)과 이차방정식의 계수는 자유. 제약: 근이 무리수(√3/2 등)면 대입 계산이 급격히 무거워져 질이 떨어지므로 유리수 근으로 둔다."
    creative: "(1) 두 근을 모두 삼각비로 주고 근과 계수의 관계로 계수를 구하게 하면 I-XU d2 · ★3~4 (2) a 를 주고 다른 근을 묻게 하면 I-BW d1 · ★3 (3) 삼각비 값이 근이 되도록 하는 각 x 를 되묻는 형태로 뒤집으면 I-BW d2 · ★4."
```

```yaml
- id: GN-M32-30-17
  page: 30
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "중단원 마무리 STEP 2"
  summary: |
    AD∥BC 인 등변사다리꼴 ABCD 에서 AB=4 cm, BC=10 cm, ∠B=60° 일 때 사다리꼴의 넓이.
  category: "양 끝에서 수선 → 높이와 밑변 조각 → 윗변 AD 복원 → 사다리꼴 넓이 공식"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "사다리꼴을 두 개의 60° 직각삼각형과 직사각형으로 분해하는 보조선 착안 — 대칭인 밑변 조각 2 cm 두 개를 빼야 윗변 AD 가 나온다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "특수각을 이용한 등변사다리꼴의 넓이"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    A·D 에서 BC 에 수선을 내리면 높이 4 sin60°=2√3, 밑변 조각 4 cos60°=2 이고 등변사다리꼴의 대칭으로 양쪽이 같아 AD=10−2×2=6 이다.
    높이만 구하고 끝내거나 AD 를 복원하지 못하는 오답이 많다. 보조선 분해 통찰 1개(RT d2)·M_total 6 → 발전 문제 ★3 유지.
  tier: star_3
  mechanism_primary: "수선 분해 → 높이 2√3, 밑변 조각 2 → AD=6 → 넓이=(6+10)/2×2√3=16√3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$16\sqrt{3}\,\mathrm{cm}^2$'
  answer_source: "답지"
  figure: 'crop:fig-30-17.png'
  latex: latex-bank/gn-m32/items/30-17.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AB 는 짝수여야 cos60° 조각이 정수가 되고, BC>2×(AB cos60°) 여야 윗변이 양수로 남는다. ∠B 는 30°·45°·60° 모두 가능하며 45° 면 높이와 조각이 같아진다. 제약: AB=4·BC=10 처럼 조각 2 두 개를 빼서 윗변이 정수가 되게 맞추는 것이 설계 포인트."
    creative: "(1) 윗변 AD 를 주고 AB 를 되묻으면 I-BW d2 · ★3~4 (2) 등변사다리꼴을 일반 사다리꼴로 바꿔 양쪽 각을 다르게 하면 조각 두 개를 따로 구해야 해 Mₛ 상승 ★4 (3) 둘레를 묻게 하면 넓이 공식이 빠져 ★2 (4) 대각선의 길이를 묻게 하면 분해 후 피타고라스가 추가돼 ★4."
```

```yaml
- id: GN-M32-30-18
  page: 30
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP 2"
  summary: |
    점 (3, 2√3) 을 지나고 x축의 양의 방향과 30° 를 이루는 직선이 x축·y축과 만드는 삼각형의 넓이. 5지선다.
  category: "각 30° → 기울기 tan30° → 점을 지나는 직선의 식 → 두 절편 → 넓이"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x축과 이루는 각(기하)을 기울기 tan30°=√3/3 이라는 대수 계수로 전환해야 직선의 식을 세울 수 있다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "x축과 이루는 각이 주어진 직선과 좌표축이 만드는 도형"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    기울기 √3/3 과 점 (3, 2√3) 으로 y=(√3/3)x+√3 을 얻고, x절편 −3 · y절편 √3 에서 넓이 (1/2)×3×√3=3√3/2 이다.
    x절편이 음수라 밑변에 절댓값을 취해야 하는 부호 함정이 있고(T-부호), 29-08 과 달리 직선의 식 세우기·절편·넓이까지 세 단계가 더 붙는다.
    통찰 1개(RT d1)·M_total 6 → 발전 문제 구역 ★3 유지.
  tier: star_3
  mechanism_primary: "tan30°=√3/3 → y=(√3/3)(x−3)+2√3 → 절편 (−3, 0)·(0, √3) → 넓이 3√3/2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m32/items/30-18.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각은 30°·45°·60° 중 아무거나, 지나는 점은 좌표가 기울기와 맞물려 절편이 정리되는 값이어야 한다((3, 2√3) 과 30° 처럼 y좌표에 √3 을 심는 방식). 제약: 절편 부호가 바뀌면 넓이 계산의 절댓값 처리가 달라지므로 그림과 일치시켜야 한다."
    creative: "(1) 넓이를 주고 지나는 점을 되묻으면 I-BW d2 · ★4 (2) 직선이 이루는 각을 미지수로 두고 넓이가 최소가 되는 경우를 묻게 하면 중3 범위 밖 (3) 두 직선(30°·60°)과 x축이 만드는 삼각형으로 바꾸면 교점 계산이 추가돼 ★4 (4) 넓이 대신 원점에서 직선까지의 거리를 묻게 하면 수선 분해가 붙어 ★4."
```

```yaml
- id: GN-M32-31-19
  page: 31
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP 2"
  summary: |
    AD=BD=2 이고 ∠ADC=45° 인 그림에서 tan 22.5° 의 값 구하기.
  category: "이등변삼각형의 외각=밑각의 2배 → ∠B=22.5° → 두 변 계산 → tan 정의 → 유리화"
  M: {s: 2, k: 3, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "특수각이 아닌 22.5° 를 '이등변삼각형 ABD 의 밑각이고 외각 45° 의 절반'이라는 그림 안의 각으로 동치 변환 — 이 인식이 없으면 22.5° 를 다룰 도구가 없다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "이등변삼각형의 외각을 이용한 22.5°의 삼각비"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    AD=BD 인 이등변삼각형에서 ∠ADC 가 외각이므로 ∠B=22.5°. 45° 직각삼각형 ADC 에서 DC=AC=√2 를 얻고 BC=2+√2 로 tan22.5°=√2/(2+√2) → 유리화하여 √2−1.
    분모에 무리수가 남아 유리화가 실질 부담(Mₖ 3)이고, 외각 인식이 통찰의 전부다(EQV d2).
    통찰 1개(d2)·M_total 7 → 발전 문제 구역 ★3 유지.
  tier: star_3
  mechanism_primary: "이등변 외각 → ∠B=22.5° → DC=AC=√2 → BC=2+√2 → tan22.5°=√2/(2+√2)=√2−1"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\sqrt{2}-1$'
  answer_source: "답지"
  figure: 'crop:fig-31-19.png'
  latex: latex-bank/gn-m32/items/31-19.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AD=BD 의 값 2 는 자유(유리화 구조는 같다). 외각 ∠ADC 는 특수각이어야 하며 45°→22.5°, 60°→30°(이미 아는 값이라 문항이 깨짐), 30°→15° 가 가능하다. 제약: 45° 를 쓸 때만 DC=AC 가 되어 계산이 한 줄 줄어든다."
    creative: "(1) 묻는 값을 sin22.5°·cos22.5° 로 바꾸면 빗변 AB 를 더 구해야 해 Mₛ 상승 ★4 (2) 외각을 30° 로 두어 tan15° 를 구하게 하면 같은 골조·수치만 무거워짐(★3~4) (3) 31-24 처럼 직사각형 안에 15° 를 숨기면 ★4 (4) tan22.5° 값을 주고 BD 를 되묻으면 I-BW d2 · ★4."
```

```yaml
- id: GN-M32-31-20
  page: 31
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "중단원 마무리 STEP 2"
  summary: |
    45°<A<90° 이고 √((sin A+cos A)²)+√((cos A−sin A)²)=24/13 일 때 tan A×cos A 의 값. 5지선다.
  category: "√(X²)=|X| → 범위로 두 괄호의 부호 결정 → 2 sin A 로 정리 → tan A×cos A=sin A"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "√(X²)=|X| 로 바꾼 뒤 45°<A<90° 에서 sin A>cos A 임을 써서 두 절댓값의 부호를 각각 결정 — 부호를 잘못 풀면 식이 2cos A 가 되어 답이 달라진다"
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "tan A×cos A 를 (sin A/cos A)×cos A=sin A 로 정리하면 cos A 를 따로 구할 필요가 없다는 인식"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "√((sin A±cos A)²) 꼴 식의 값(부호 판정)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    45°<A<90° 에서 sin A+cos A>0, cos A−sin A<0 이므로 식은 (sin A+cos A)+(sin A−cos A)=2 sin A=24/13 → sin A=12/13.
    묻는 값이 tan A×cos A=sin A 라서 여기서 바로 끝나는데, 이를 모르면 cos A=5/13 을 구해 곱셈까지 가는 우회를 한다.
    부호(T-부호)와 범위(T-범위) 두 함정으로 Mₜ 2. 통찰 2개지만 둘 다 단원 표준 변환(EQV)이고 계산이 짧아 +1 하지 않고 ★3 유지.
    [분류 이슈] 통찰 2개 규칙을 그대로 적용하면 ★4.
  tier: star_3
  mechanism_primary: "√(X²)=|X| → 범위로 부호 결정 → 2 sin A=24/13 → sin A=12/13 → tan A×cos A=sin A"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m32/items/31-20.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 24/13 은 2 sin A 이므로 sin A 가 피타고라스 수 비(12/13 · 4/5 · 24/25)가 되도록 잡는다. 제약: 45°<A<90° 조건과 sin A>1/√2 가 어긋나지 않아야 한다(sin A=12/13>0.707 은 적합, 3/5 는 부적합)."
    creative: "(1) 범위를 0°<A<45° 로 바꾸면 식이 2 cos A 가 되어 부호 판정이 반대(★3 유지) (2) 범위를 아예 빼면 두 경우를 모두 따져야 해 I-MI d2 · ★4 (3) 묻는 값을 sin A×cos A 나 tan A 로 바꾸면 우회가 필요해 Mₖ 상승 ★3~4 (4) 33-u6 처럼 결과 각을 3배 해 sin3A 를 묻게 하면 각 복원이 추가돼 ★4."
```

```yaml
- id: GN-M32-31-21
  page: 31
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP 2"
  summary: |
    반지름의 길이가 1인 사분원에서 BC=0.6744 일 때 삼각비의 표를 이용하여 CD 의 길이 구하기(B는 A에서 OC에 내린 수선의 발, D는 C에서 세운 수선과 OA 의 연장선의 교점).
  category: "BC=1−cos x 로 동치 변환 → 표에서 cos x=0.3256 → x=71° → CD=tan x"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "BC 는 삼각비 그 자체가 아니라 OC−OB=1−cos x 라는 차 — 이 변환을 하지 못하면 표에서 찾을 값이 없다"
    - step: 3
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "접선 방향 선분 CD 를 '밑변이 1인 직각삼각형의 높이', 즉 tan x 로 읽는 기하→대수 전환"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "반지름이 1인 사분원과 삼각비의 표"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    BC=0.6744 를 표에서 그대로 찾으려는 학생은 어느 열에도 없어 막힌다. OB=cos x 이므로 BC=1−cos x → cos x=0.3256 → 표에서 x=71°, 그러면 CD=tan71°=2.9042.
    계산은 뺄셈 한 번(Mₖ 1)뿐이고 난이도 전부가 '표를 쓸 수 있는 꼴로 바꾸기'(EQV d2)와 '선분을 tan 으로 읽기'(RT d1)에 있다.
    통찰 2개 → 발전 문제 구역 ★3 에서 +1 하여 ★4. ★4 저노출 유형 게이트는 I-RT 로 통과.
  tier: star_4
  mechanism_primary: "BC=1−OB=1−cos x=0.6744 → cos x=0.3256 → x=71° → CD=tan71°=2.9042"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$2.9042$'
  answer_source: "답지"
  figure: 'crop:fig-31-21-2.png'
  latex: latex-bank/gn-m32/items/31-21.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주어지는 값과 답은 첨부된 표(70°~73°)의 행 안에서만 고를 수 있다. BC=1−cos x 이므로 표의 cos 열 값을 1에서 뺀 수를 제시하면 된다(71° → 1−0.3256=0.6744). 제약: 반지름 1 은 고정."
    creative: "(1) 주어지는 선분을 AB(=sin x) 로 바꾸면 EQV 단계가 사라져 ★3 (2) 묻는 값을 OD(=1/cos x) 로 바꾸면 표에 없는 값이라 나눗셈이 추가돼 ★4 유지 (3) BC 대신 AB+BC 처럼 두 선분의 합을 주면 I-CON d2 가 붙어 ★5 후보(단 SC/VF/SYM/XU 가 없어 ★4 상한) (4) 29-09 처럼 '같은 값 모두 고르기'로 바꾸면 ★3."
```

### 중단원 마무리하기 STEP 3 실력 UP

```yaml
- id: GN-M32-31-22
  page: 31
  vendor_label: "중단원 마무리하기 STEP 3 실력 UP"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP 3"
  summary: |
    BD=DC=6, ∠B=∠E=90° 인 그림(E는 AD 의 연장선 위)에서 ∠BAE=x, ∠CAE=y 이고 sin x=2/3 일 때 tan y 의 값.
  category: "△ABD 에서 AD·AB → 맞꼭지각으로 각 이동 → △CDE 에서 DE·CE → 직각삼각형 ACE 에서 tan y"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "∠BDA 와 ∠CDE 가 맞꼭지각임을 보고 △ABD 에서 얻은 sin·cos 값을 그대로 △CDE 에 재사용 — 새로 각을 구하지 않는다"
    - step: 4
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "각의 차 y 를 직접 다룰 수 없으므로 CE⊥AE 를 이용해 y 를 낀 직각삼각형 ACE 를 만들고 tan y=CE/AE 로 읽는 전환(AE=AD+DE)"
  insight_count: 2
  depth_score: 4.00
  type_id: null
  type_hint: "두 직각삼각형을 잇는 각의 이동(tan 의 차)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    sin x=BD/AD=6/AD 에서 AD=9, AB=3√5 를 먼저 얻는다. 그다음 ∠CDE=∠BDA 이므로 DE=6·(6/9)=4, CE=6·(3√5/9)=2√5 이고 AE=AD+DE=13 이라 tan y=CE/AE.
    중3 에 탄젠트의 차 공식이 없으므로 '두 각의 차'를 그림 위의 직각삼각형 하나로 바꾸는 것이 유일한 길이다(EQV d2 + RT d2).
    통찰 2개·M_total 7 → 실력 UP 구역 ★4 유지. 저노출 유형 게이트는 I-RT 로 통과.
  tier: star_4
  mechanism_primary: "sin x=6/AD → AD=9, AB=3√5 → 맞꼭지각으로 DE=4, CE=2√5 → AE=13 → tan y=CE/AE=2√5/13"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{2\sqrt{5}}{13}$'
  answer_source: "답지(쪽 렌더)"
  figure: 'crop:fig-31-22.png'
  latex: latex-bank/gn-m32/items/31-22.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "BD=DC 의 값과 sin x 의 분모·분자는 AD 가 정수로 떨어지게 맞춘다(6 과 2/3 → AD=9). 제약: AB=√(AD²−BD²) 가 무리수여도 되지만 CE 계산에서 다시 살아나므로 √5 계열처럼 정리되는 값이어야 한다. BD=DC 라는 중점 조건은 DE·CE 를 같은 비로 만들어 주므로 유지하는 편이 좋다."
    creative: "(1) sin x 대신 tan x 를 주면 첫 단계만 바뀜(★4 유지) (2) BD:DC 를 1:2 로 바꾸면 비 계산이 한 겹 늘어 Mₛ 상승 ★4 (3) tan y 대신 △ACE 의 넓이를 물으면 Mₖ 상승·통찰 동일 (4) 두 각의 합(∠BAC)의 삼각비를 묻게 하면 같은 보조선 골조로 ★4~5 후보."
```

```yaml
- id: GN-M32-31-23
  page: 31
  vendor_label: "중단원 마무리하기 STEP 3 실력 UP"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP 3"
  summary: |
    정사면체에서 M 이 BC 의 중점이고 ∠ADM=x 일 때 cos x 의 값.
  category: "모서리를 a 로 → 두 정삼각형의 높이 AM=DM → 이등변삼각형 ADM 단면 → 대칭으로 수선의 발이 AD 의 중점 → cos x"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "입체(정사면체)에서 각 x 를 품은 평면 △ADM 을 잘라내어 평면 삼각비 문제로 전환 — 입체 그대로는 삼각비를 쓸 수 없다"
    - step: 3
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "AM=DM 인 이등변삼각형의 대칭을 이용해 M 에서 내린 수선의 발이 AD 의 중점임을 즉시 확정 — 수선의 길이를 구하지 않고 cos x=(a/2)/DM 으로 끝낸다"
  insight_count: 2
  depth_score: 4.00
  type_id: null
  type_hint: "정사면체의 단면에서 삼각비 구하기"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    모서리를 a 로 두면 △ABC·△DBC 가 정삼각형이므로 AM=DM=(√3/2)a 이고 △ADM 은 AD=a 인 이등변삼각형이다.
    M 에서 AD 에 내린 수선의 발은 대칭으로 AD 의 중점이므로 cos x=(a/2)/((√3/2)a)=√3/3 — a 가 약분되어 모서리 길이가 주어지지 않아도 값이 정해진다는 점이 이 문항의 핵심이다.
    통찰 2개(RT d2 + SYM d2)·Mₐ 2(문자 모서리)·M_total 7 → 실력 UP 구역 ★4 유지. 저노출 유형 게이트는 I-SYM 으로 통과.
  tier: star_4
  mechanism_primary: "모서리 a → AM=DM=(√3/2)a, AD=a → 이등변 대칭으로 수선의 발=AD 의 중점 → cos x=(a/2)/DM=√3/3"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{\sqrt{3}}{3}$'
  answer_source: "답지(쪽 렌더)"
  figure: 'crop:fig-31-23.png'
  latex: latex-bank/gn-m32/items/31-23.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모서리 길이를 구체 수치(6·12)로 주면 Mₐ 가 1 로 내려가 ★3 에 가까워진다. 제약: 정사면체라는 조건이 AM=DM 을 보장하므로 바꿀 수 없고, 정사면체가 아니면 이등변 대칭이 깨져 골조가 무너진다."
    creative: "(1) 묻는 값을 sin x·tan x 로 바꾸면 수선의 길이를 실제로 구해야 해 Mₖ 상승 ★4 (2) 정사면체를 직육면체·정팔면체로 바꾸면 단면 선택이 갈려 I-SC d2 · ★5 후보 (3) △ADM 의 넓이를 묻게 하면 단면 착안은 같고 마지막만 넓이 공식(★4) (4) 모서리 길이를 주고 이면각의 코사인을 묻게 하면 고등 범위."
```

```yaml
- id: GN-M32-31-24
  page: 31
  vendor_label: "중단원 마무리하기 STEP 3 실력 UP"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP 3"
  summary: |
    AB=3 인 직사각형 ABCD 에서 E는 BC 위, F는 DC 위이고 ∠AEF=90°, ∠BAE=30°, ∠EAF=45° 일 때 sin 15° 의 값.
  category: "∠DAF=90°−30°−45°=15° 확정 → AE·AF·EF 계산 → ∠FEC=30° 로 EC·CF → DF=3−√3 → sin15°=DF/AF"
  M: {s: 3, k: 3, a: 1, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "sin15° 를 구하라는 결과 조건에서 출발해 '그림 안에서 15° 인 각은 ∠DAF 뿐'임을 먼저 역추적해야 어느 직각삼각형을 만들지가 정해진다"
    - step: 3
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "∠AEB=60° 와 ∠AEF=90° 에서 ∠FEC=30° 를 각의 합으로 옮겨, DF 를 구할 수 있는 직각삼각형 EFC 로 연결"
  insight_count: 2
  depth_score: 4.00
  type_id: null
  type_hint: "직각삼각형을 겹쳐 15°의 삼각비 구하기"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    AE=AB/cos30°=2√3, ∠EAF=45°·∠AEF=90° 이므로 EF=AE=2√3, AF=2√6. ∠FEC=30° 에서 EC=3, CF=√3 이므로 AD=BE+EC=√3+3, DF=DC−CF=3−√3.
    ∠DAF 가 15° 임을 먼저 보지 못하면 어디서도 15° 가 나오지 않는다(BW d2). 그다음 각을 EFC 로 옮기는 단계가 하나 더 필요하다(EQV d2).
    단계가 7 개 이상이고 마지막 유리화까지 있어 Mₛ·Mₖ 모두 3. 통찰 2개 → 실력 UP ★4 유지(★5 는 SC/VF/SYM/XU 필요).
  tier: star_4
  mechanism_primary: "∠DAF=15° → AE=2√3, EF=2√3, AF=2√6 → ∠FEC=30° 로 CF=√3 → DF=3−√3 → sin15°=DF/AF=(√6−√2)/4"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{\sqrt{6}-\sqrt{2}}{4}$'
  answer_source: "답지(쪽 렌더)"
  figure: 'crop:fig-31-24.png'
  latex: latex-bank/gn-m32/items/31-24.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AB=3 은 자유(모든 길이가 비례하고 sin15° 는 비이므로 답이 불변). 제약: 세 각 30°+45°+15°=90° 를 만족해야 직사각형 안에 딱 들어맞으므로 ∠BAE·∠EAF 는 (30°, 45°) 또는 (45°, 30°) 로만 바꿀 수 있고, 후자면 ∠DAF 가 15° 로 같아 골조가 동일."
    creative: "(1) 묻는 값을 cos15°·tan15° 로 바꾸면 마지막 비만 달라짐(★4 유지) (2) ∠BAE=15°, ∠EAF=45° 로 두어 ∠DAF=30° 를 만들면 답이 특수각이라 문항이 깨짐(피할 것) (3) 31-19 의 이등변 외각 골조로 tan22.5° 를 겹쳐 물으면 ★4~5 (4) 직사각형 대신 정사각형으로 고정하면 조건이 과잉이 되어 모순."
```

### 서술형 대비 문제

```yaml
- id: GN-M32-32-e1
  page: 32
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    ∠C=90° 인 직각삼각형 ABC 에서 D는 BC 위, AB=4√5, AD=2√5, DC=2 이고 ∠B=x 일 때 cos x 의 값. [6점]
  category: "작은 직각삼각형 ADC 에서 AC → 큰 직각삼각형 ABC 에서 BC → cos x=BC/AB"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 직각삼각형에서 피타고라스 정리로 변을 구한 뒤 삼각비"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    AC=√(20−4)=4 를 먼저 얻고 BC=√(80−16)=8 로 피타고라스를 두 번 쓰면 cos x=BC/AB=2√5/5 이다.
    두 삼각형이 변 AC 를 공유한다는 구조가 그림에 그대로 보이고 각 이동도 없어 절차형이다.
    서술형 구역 출발 ★3 이나 통찰 0·표준 2단 계산이라 −1 하여 ★2(예제·유제 도입 문항).
  tier: star_2
  mechanism_primary: "△ADC 에서 AC=4 → △ABC 에서 BC=8 → cos x=BC/AB=8/(4√5)=2√5/5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{2\sqrt{5}}{5}$'
  answer_source: "본문 답"
  figure: 'crop:fig-32-e1.png'
  latex: latex-bank/gn-m32/items/32-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AD·DC 는 AC 가 정수로 떨어지는 피타고라스 쌍(2√5·2 → 4 · 5·3 → 4)이어야 하고, AB 는 다시 BC 가 정수가 되도록 맞춘다. 제약: 두 번 모두 정수로 떨어지게 하는 것이 이 유형의 설계 포인트이며, 하나만 무리수로 두면 Mₖ 가 올라간다."
    creative: "(1) 묻는 삼각비를 sin x·tan x 로 바꾸면 대응 변만 달라짐(★2) (2) DC 대신 BD 를 주면 BC=BD+DC 조립 단계가 추가돼 ★3 (3) cos x 값을 주고 AB 를 되묻으면 I-BW d1 · ★3 (4) D 를 BC 의 중점으로 두면 30-13 골조가 된다."
```

```yaml
- id: GN-M32-32-u1
  page: 32
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    ∠B=90° 인 직각삼각형 ABC 에서 D는 BC 위, BD=5, AD=13, AC=15 이고 ∠C=x 일 때 tan x 의 값. [6점]
  category: "작은 직각삼각형 ABD 에서 AB → 큰 직각삼각형 ABC 에서 BC → tan x=AB/BC"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 직각삼각형에서 피타고라스 정리로 변을 구한 뒤 삼각비"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    32-e1 의 유제로 골조가 같다. AB=√(169−25)=12, BC=√(225−144)=9 로 tan x=AB/BC=4/3.
    5-12-13 과 9-12-15 두 피타고라스 수가 겹쳐 있어 무리수가 아예 나오지 않는다(예제보다 오히려 가볍다).
    통찰 0 · 표준 2단 계산 → 서술형 ★3 에서 −1 하여 ★2.
  tier: star_2
  mechanism_primary: "△ABD 에서 AB=12 → △ABC 에서 BC=9 → tan x=AB/BC=4/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{4}{3}$'
  answer_source: "답지"
  figure: 'crop:fig-32-u1.png'
  latex: latex-bank/gn-m32/items/32-u1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공통변 AB 를 축으로 두 피타고라스 수를 겹치면 된다(12 를 공유하는 5-12-13 과 9-12-15 · 8 을 공유하는 6-8-10 과 15-8-17). 제약: 두 쌍이 같은 변을 공유하지 않으면 무리수가 남는다."
    creative: "(1) DC 의 길이를 묻게 하면 BC−BD 조립만 추가돼 ★2 (2) △ADC 의 넓이를 묻게 하면 밑변·높이 선택이 필요해 ★3 (3) ∠ADB 의 삼각비까지 함께 물으면 각 이동이 붙어 ★3 (4) AD 를 미지수로 두고 tan x 를 주면 I-BW d2 · ★4."
```

```yaml
- id: GN-M32-32-e2
  page: 32
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    0°<x<40° 에서 tan(2x+5°)=sin90° 일 때 sin(x+10°)+cos3x 의 값. [6점]
  category: "sin90°=1=tan45° → 2x+5°=45° → x=20° → 특수각 대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각비의 값으로 각을 정한 뒤 다시 삼각비의 값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    우변 sin90°=1 을 먼저 수치로 바꾸고 tan45°=1 에서 2x+5°=45° → x=20°. 그다음 sin30°+cos60°=1/2+1/2=1.
    범위 0°<x<40° 는 2x+5° 가 예각 하나로 정해지도록 잡아 둔 장치라 분기가 생기지 않는다.
    통찰 0·M_total 5 → 서술형 구역 ★3 에서 −1 하여 ★2.
    [분류 이슈] 서술형 구역 신호(★3)보다 1단 낮음.
  tier: star_2
  mechanism_primary: "sin90°=1 → tan(2x+5°)=tan45° → x=20° → sin30°+cos60°=1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$1$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m32/items/32-e2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "치환식 2x+5° 의 계수·이동량과 최종 각은 자유이나 (가) 치환각이 특수각, (나) x 가 정수 도수, (다) 뒤에 대입할 x+10°·3x 도 특수각이 되도록 세 조건을 동시에 맞춰야 한다. 제약: 범위 상한은 치환각이 90° 를 넘지 않게 잡는다."
    creative: "(1) 우변을 cos0°·tan45° 등 다른 1 로 바꿔도 동일 (2) 대입 항을 세 개로 늘리면 Mₖ 만 상승(★2) (3) 치환각이 두 개 가능한 범위를 주면 I-MI d2 · ★3 (4) 뒤 항에 tan(90°−x) 처럼 여각을 섞으면 I-EQV d2 · ★3."
```

```yaml
- id: GN-M32-32-u2
  page: 32
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    5°<x<35° 에서 sin(3x−15°)=cos60° 일 때 sin(x+45°)+cos(90°−4x)−tan4x 의 값. [6점]
  category: "cos60°=1/2=sin30° → 3x−15°=30° → x=15° → 세 항에 특수각 대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각비의 값으로 각을 정한 뒤 다시 삼각비의 값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    32-e2 의 유제로 골조가 같고 대입 항이 셋으로 늘었을 뿐이다. cos60°=1/2=sin30° 에서 3x−15°=30° → x=15°, 그러면 sin60°+cos30°−tan60°=√3/2+√3/2−√3=0.
    cos(90°−4x) 를 여각으로 풀지 않고 90°−60°=30° 로 직접 계산해도 되어 통찰로 카운트하지 않았다.
    통찰 0 · 특수각 대입 한 갈래 → 서술형 구역 ★3 에서 −1 하여 ★2.
    [분류 이슈] 서술형 구역 신호(★3)보다 1단 낮음.
  tier: star_2
  mechanism_primary: "cos60°=sin30° → 3x−15°=30° → x=15° → sin60°+cos30°−tan60°=0"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m32/items/32-u2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 항의 계수를 조절해 답이 0 이 되도록 설계한 문항이다. 치환식 3x−15° 와 뒤 항의 x+45°·4x 는 x=15° 에서 모두 특수각이 되도록 묶여 있어 x 를 바꾸면 세 항을 전부 다시 잡아야 한다. 제약: 답이 0 이면 부호 실수를 잡아내기 쉬우므로 유지할 만하다."
    creative: "(1) 항을 둘로 줄이면 32-e2 와 완전히 같아짐(★2) (2) cos(90°−4x) 를 sin4x 로 먼저 바꾸도록 유도하면 I-EQV d1 이 붙어 ★3 (3) tan4x 대신 tan(90°−4x) 를 넣어 정의되지 않는 경우를 피하게 하면 Mₜ 상승 ★3 (4) 각 x 를 되묻는 역방향으로 뒤집으면 I-BW d2 · ★4."
```

```yaml
- id: GN-M32-33-u3
  page: 33
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    ∠A=90° 인 직각삼각형 ABC 에서 D는 AB 위, E는 AC 위이고 AE=6, DE=12, ∠ADE=∠ACB 일 때 sin B × tan C 의 값. [7점]
  category: "△ADE 에서 sin∠ADE=1/2 → ∠ADE=30° → ∠C=30°, ∠B=60° → 특수각 대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'∠ADE=∠ACB' 라는 각의 등식을 '△ADE 의 두 변으로 ∠ADE 를 특수각 30° 로 확정한 뒤 그 값을 ∠C 로 옮긴다'로 바꾸는 동치 변환 — 길이 6, 12 가 각을 정하는 장치임을 보아야 한다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "삼각비로 각의 크기를 정한 뒤 특수각의 삼각비 계산"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    AE=6, DE=12 는 길이를 구하라는 자료가 아니라 sin∠ADE=6/12=1/2 로 ∠ADE=30° 를 확정하라는 장치다. 조건에 따라 ∠C=30°, ∠B=60° 이므로 sin60°×tan30°=(√3/2)(√3/3)=1/2.
    길이를 계속 계산하려 들면 막히고, 각을 확정하는 쪽으로 방향을 바꿔야 풀린다(EQV d2).
    통찰 1개(d2)·M_total 5 → 서술형 구역 ★3 유지.
  tier: star_3
  mechanism_primary: "sin∠ADE=AE/DE=1/2 → ∠ADE=∠C=30° → ∠B=60° → sin60°×tan30°=1/2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{1}{2}$'
  answer_source: "답지"
  figure: 'crop:fig-33-u3.png'
  latex: latex-bank/gn-m32/items/33-u3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AE:DE 의 비만 의미가 있고 절대 길이는 자유(6:12=1:2 → 30°). 제약: 비가 1:2(30°) · 1:√2(45°) · √3:2(60°) 중 하나여야 특수각이 나온다. 1:2 가 가장 깔끔해 실제 출제에서 반복된다."
    creative: "(1) 주어지는 두 변을 AD·DE 로 바꾸면 cos 로 각을 확정하게 되어 골조 동일(★3) (2) sin B×tan C 대신 sin B÷tan C 로 바꾸면 값만 달라짐 (3) 각의 등식을 빼고 ∠ADE 자체의 삼각비만 묻게 하면 ★2 (4) 결론이 sin B×tan C=sin C 임을 일반적으로 보이게 하면 I-EQV d3 · ★4."
```

```yaml
- id: GN-M32-33-u4
  page: 33
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    밑면의 가로·세로가 8, 6 이고 높이가 10 인 직육면체에서 ∠BHF=x 일 때 √2 cos x+tan x 의 값. [7점]
  category: "밑면 대각선 FH=10 → BF⊥FH 인 직각삼각형 BFH → BH=10√2 → cos x·tan x 대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "입체에서 BF 가 윗면에 수직임을 보고 ∠BFH=90° 인 평면 직각삼각형 BFH 를 잘라내는 전환 — 어느 삼각형이 직각삼각형인지 고르는 것이 이 문항의 전부"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "직육면체의 대각선이 이루는 각의 삼각비"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    FH=√(8²+6²)=10, BF=10 이고 BF⊥FH 이므로 BH=10√2. 따라서 cos x=FH/BH=√2/2, tan x=BF/FH=1 이고 √2(√2/2)+1=2.
    8-6-10 과 BF=10 이 맞물려 △BFH 가 직각이등변이 되도록 설계돼 있어 계산은 가볍다. 난이도는 직각인 평면을 찾는 데 있다(RT d2).
    통찰 1개(d2)·M_total 6 → 서술형 구역 ★3 유지.
  tier: star_3
  mechanism_primary: "FH=10, BF=10, ∠BFH=90° → BH=10√2 → cos x=√2/2, tan x=1 → √2 cos x+tan x=2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2$'
  answer_source: "답지"
  figure: 'crop:fig-33-u4.png'
  latex: latex-bank/gn-m32/items/33-u4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑면 8·6 은 대각선이 정수 10 이 되는 피타고라스 쌍이어야 한다(3·4 · 5·12 계열). 높이는 자유지만 대각선과 같게 두면(10) △BFH 가 직각이등변이 되어 답이 특수각으로 떨어진다. 제약: 높이를 다르게 하면 cos x 에 유리화가 붙어 Mₖ 상승."
    creative: "(1) ∠BHF 대신 ∠BHD(밑면과 공간대각선이 이루는 각)를 묻게 하면 다른 단면 선택이 필요해 ★4 (2) 높이를 미지수로 두고 tan x 값을 주면 I-BW d2 · ★4 (3) 직육면체를 정육면체로 바꾸면 수치가 사라져 Mₐ 상승·★3 유지 (4) 삼각형 BFH 의 넓이를 묻게 하면 삼각비가 빠져 ★2."
```

```yaml
- id: GN-M32-33-u5
  page: 33
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    ∠C=90° 인 직각삼각형 ABC 에서 AB=16, ∠B=30° 이고 CD⊥AB, DE⊥BC 일 때 DE 의 길이. [6점]
  category: "같은 30° 가 세 직각삼각형에 반복 → BC → BD → DE 로 한 단씩 내려가기"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "수선이 만든 △BCD·△BDE 가 모두 ∠B=30° 를 공유함을 보고 같은 삼각비를 세 번 되쓰는 사슬로 환원 — 매번 새 각을 구하지 않는다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "닮은 직각삼각형 사슬에서 특수각으로 변의 길이 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    BC=16 cos30°=8√3 → BD=BC cos30°=12 → DE=BD sin30°=6 으로 같은 30° 를 세 번 쓴다.
    마지막에 sin 을 써야 하는데 앞의 두 단계가 모두 cos 이라 무엇을 곱할지 혼동하기 쉽다(어느 변이 대변인지가 단계마다 바뀜).
    통찰 1개(EQV d1)·M_total 6 → 서술형 구역 ★3 유지.
  tier: star_3
  mechanism_primary: "BC=16 cos30°=8√3 → BD=BC cos30°=12 → DE=BD sin30°=6"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$6$'
  answer_source: "답지"
  figure: 'crop:fig-33-u5.png'
  latex: latex-bank/gn-m32/items/33-u5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AB 는 cos30° 를 두 번 곱해도 정리되도록 4의 배수 계열로 잡는다(16 → BD=12). ∠B 는 30°·45°·60° 모두 가능하며 45° 면 세 단계가 모두 같은 값이라 난이도가 내려간다. 제약: 수선을 한 번 더 그어 사슬을 늘리면 무리수가 누적되므로 AB 를 더 큰 배수로 바꿔야 한다."
    creative: "(1) 수선을 하나 더 그어 네 단계 사슬로 만들면 Mₛ 상승 ★4 (2) DE 대신 BE 나 △BDE 의 넓이를 묻게 하면 마지막 단계만 교체(★3) (3) DE 를 주고 AB 를 되묻으면 I-BW d2 · ★4 (4) 30-15 처럼 수치를 빼고 같은 각을 모두 고르게 하면 ★3."
```

```yaml
- id: GN-M32-33-u6
  page: 33
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    0°<x<45° 이고 √((sin x+cos x)²)+√((sin x−cos x)²)=√3 일 때 sin3x 의 값. [8점]
  category: "√(X²)=|X| → 범위로 부호 결정 → 2 cos x=√3 → x=30° → sin90°"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "√(X²)=|X| 로 바꾼 뒤 0°<x<45° 에서 sin x<cos x 임을 써서 두 번째 절댓값의 부호를 뒤집어야 한다 — 그대로 더하면 2 sin x 가 되어 각이 어긋난다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "√((sin x±cos x)²) 꼴의 식과 각의 배수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    부호를 바로 풀면 (sin x+cos x)+(cos x−sin x)=2 cos x=√3 → cos x=√3/2 → x=30°, 따라서 sin3x=sin90°=1.
    31-20 과 부호 판정 골조가 같고, 마지막에 3x=90° 가 되어 0°·90° 의 삼각비까지 확장되는 것이 이 문항만의 마무리다.
    범위(T-범위)와 부호(T-부호) 두 함정으로 Mₜ 2. 통찰 1개(d2)·M_total 7 → 서술형 구역 ★3 유지.
    [분류 이슈] 3x=90° 인식을 두 번째 통찰로 세면 ★4 후보.
  tier: star_3
  mechanism_primary: "√(X²)=|X| → 0°<x<45° 로 부호 결정 → 2 cos x=√3 → x=30° → sin3x=sin90°=1"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m32/items/33-u6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 √3 은 2 cos x 이므로 cos x 가 특수각 값(√3/2 → 30° · √2/2 → 45°(범위와 모순) · 1/2 → 60°(범위와 모순))이어야 한다. 사실상 0°<x<45° 에서는 30° 하나로 고정되고, 범위를 45°<x<90° 로 바꾸면 2 sin x 가 되어 60° 를 쓸 수 있다. 배수 3x 는 90° 가 되도록 맞춘 것."
    creative: "(1) 묻는 값을 cos2x·tan(3x−45°) 등으로 바꾸면 마지막 대입만 달라짐(★3) (2) 범위를 빼면 두 경우를 따져야 해 I-MI d2 · ★4 (3) 31-20 처럼 tan x×cos x 꼴로 묻게 하면 정리 통찰이 하나 더 붙어 ★4 (4) 좌변을 √((sin x+cos x)²)−√((sin x−cos x)²) 로 바꾸면 2 sin x 가 되어 부호 함정이 더 커짐(★4)."
```

## 표본 판정 요약 (32문)

- ★ 분포: ★1 2 · ★2 14 · ★3 12 · ★4 4 · ★5 0
- 통찰형 17 · 절차형 15 · premium 0
- 통찰 유형 분포(총 23개): I-EQV 12 · I-RT 9 · I-SYM 1(31-23) · I-BW 1(31-24) · 나머지 6유형 0
- type_hint 상위: 「특수각·0°·90° 값 계산과 각 복원」 6 · 「직각삼각형 두 개에서 피타고라스+삼각비」 5 · 「닮은 직각삼각형에서 같은 각 찾기」 4 · 「보조선(수선·연장선)으로 직각삼각형 만들기」 4 · 「반지름 1인 사분원·삼각비의 표」 3
- 대상층: 하위권 2 · 중하위권 13 · 중위권 13 · 중상위권 4
- 그림: 21문(무그림 11문 = 28-03 · 28-05 · 28-06 · 29-10 · 29-11 · 30-16 · 30-18 · 31-20 · 32-e2 · 32-u2 · 33-u6)
- 구역별 라벨 평균: STEP 1 ★1.8(출발 ★2) · STEP 2 ★3.0(출발 ★3) · STEP 3 ★4.0(출발 ★4) · 서술형 ★2.6(출발 ★3). 서술형 구역만 출발점보다 낮은데, 예제·유제 네 문항(32-e1 · 32-u1 · 32-e2 · 32-u2)이 도입용 2단 계산·특수각 대입이기 때문이다.
- 이 범위의 변별은 계산량이 아니라 **각을 옮기는 능력**에서 생긴다: I-EQV 12개 중 9개가 '같은 각을 다른 직각삼각형으로 옮기기'(28-04 · 30-15 · 31-19 · 31-21 · 31-22 · 31-24 · 33-u3 · 33-u5)와 '절댓값 부호 결정'(31-20 · 33-u6) 둘로 갈린다. Mₖ 3 은 31-19 · 31-24 둘뿐이라 계산 마찰로 난이도를 만든 문항은 없다(v3.8 §2.11 YELLOW 해당 없음).

## 분류 이슈 목록

판정이 애매하거나 벤더 구역 신호와 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다. 이 범위에 2단 이상 어긋난 문항은 없다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-M32-29-09 | 통찰 2개(RT d1+EQV d1)로 +1 해 ★3 으로 두었으나 둘 다 depth 1 이고 단원 표준 — 기본 문제 구역 신호대로 ★2 로 볼 여지 | ★2 / ★3 |
| GN-M32-30-16 | 이차방정식과 삼각비의 결합을 I-XU 로 인정하면 통찰형 ★3. 삼각비가 근 수치를 공급할 뿐이라 절차형 ★2 로 둠 | ★2 / ★3 |
| GN-M32-31-20 | 통찰 2개 규칙을 그대로 적용하면 +1 로 ★4. 두 통찰 모두 EQV·단원 표준 변환이고 계산이 짧아 ★3 유지 | ★3 / ★4 |
| GN-M32-32-e2 · GN-M32-32-u2 | 서술형 구역 출발 ★3 대비 특수각 대입 한 갈래뿐이라 ★2 로 내림(32-e1 · 32-u1 도 동일) — 서술형 8문 중 4문이 구역 신호보다 1단 낮다 | ★2 / ★3 |
| GN-M32-33-u6 | 3x=90° 로 0°·90° 삼각비까지 확장되는 마무리를 두 번째 통찰로 세면 ★4 후보. 단순 대입으로 보고 ★3 유지 | ★3 / ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: ① 「반지름 1인 사분원에서 선분 읽기」(29-09 · 31-21) — 유일하게 '선분 자체가 삼각비'라는 표현 규약을 쓰고, 1−cos x 꼴 차 선분이 끼면 곧바로 ★4 로 올라가는 변별 슬롯의 원천이다. ② 「입체도형 단면의 삼각비」(31-23 · 33-u4) — 평면 유형과 base ★ 가 한 단 다르고 I-RT 가 상시 붙는다. ③ 「√((sin±cos)²) 부호 판정」(31-20 · 33-u6) — 범위·부호 함정이 난이도의 전부라 별도 유형이 맞다. ④ 「각의 합·차를 보조선으로 푸는 유형」(31-22 · 31-24) — 중3 에 삼각함수 덧셈정리가 없어 15°·22.5° 를 만드는 작도가 유일한 도구이며, ★4 슬롯 대부분이 여기서 나온다.
- **통합해도 될 유형**: 「특수각 값 계산·각 복원」 6문(28-05 · 28-06 · 29-10 · 30-16 · 32-e2 · 32-u2)은 항 수와 치환식 계수만 다를 뿐 골조가 같아 한 유형 + 난이도 파라미터로 충분하다. 「두 직각삼각형에서 피타고라스+삼각비」 5문(28-01 · 28-02 · 30-13 · 32-e1 · 32-u1)도 공통변이 무엇이냐만 다르다.
- 「닮은 직각삼각형에서 같은 각 찾기」(28-04 · 30-15 · 33-u3 · 33-u5)는 카탈로그에서 **각 이동(28-04 · 30-15)** 과 **사슬 계산(33-u5)**, **각 확정(33-u3)** 세 하위 갈래로 나누는 편이 변형 설계에 유리하다. 앞의 둘은 수치가 없어도 성립하고, 뒤의 둘은 수치가 각·길이를 확정하는 장치다.
- base_star 후보: 특수각 값 계산 ★1~2 · 두 직각삼각형 피타고라스 ★2 · 삼각비의 표 ★2~3 · 닮은 직각삼각형 각 이동 ★2~3 · 수선 분해 ★3 · 직선의 기울기 ★2~3 · 사분원 선분 읽기 ★3~4 · 입체 단면 ★3~4 · 각의 합·차 작도 ★4.
