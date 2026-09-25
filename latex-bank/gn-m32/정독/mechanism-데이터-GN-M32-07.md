---
name: mechanism-데이터-GN-M32-07
description: 개념원리 중학 3-2 07 원의 접선(1/1 · 66~70쪽) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 중학 3-2 · 전사본 latex-bank/gn-m32
  section: 07 원의 접선
  unit_code: GN-M32-07
  part: "1/1"
  extract_range: "66~70쪽 · 66-01~70-05"
  total_problems: 21
  unit_total: 21
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-m32/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-m32/items/<id>.tex
  image_source: latex-bank/gn-m32/figures/ (crops.json)
---

# 개념원리 중학 3-2 · 07 원의 접선 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 중학 3-2 의 중단원 **07 원의 접선**(66~70쪽 · 21문항 전수)을 다룬다. 구역은 「개념원리 확인하기」 4문 · 「핵심문제 익히기」 12문(핵심문제 h 5 + 확인문제 c 7) · 「이런 문제가 시험에 나온다」 5문이다. 「계산력 강화하기」·「중단원 마무리하기」 구역은 이 범위에 없다.

개념원리 중학은 난이도 level 표기가 없고 **구역 자체가 난이도 층**이다. 「개념원리 확인하기」는 정의 적용 드릴(★1), 「핵심문제 익히기」는 대표 유형 h 와 짝 확인문제 c(★2 출발), 「이런 문제가 시험에 나온다」는 시험 대비(★2~3)로 읽었다. 이 범위에는 태그(「꼭나와」·「UP」)가 하나도 없어 ★ 조정은 전적으로 M_total·통찰로만 했다.

이 단원은 **두 개의 도구**(① 접선 ⊥ 그 접점을 지나는 반지름 ② 원 밖 한 점에서 그은 두 접선의 길이는 같다)를 피타고라스 정리와 엮는 드릴이 몸통이라 앞쪽 절반은 절차형이다. 통찰이 붙는 지점은 **접점을 현의 중점으로 옮겨 읽는 자리**(67-h2 · 67-c2 · 70-02), **여러 쌍의 접선 길이 상등을 둘레 하나로 통합하는 자리**(69-h4 · 69-c6 · 70-04), **사다리꼴에 수선을 그어 직각삼각형으로 옮기는 자리**(69-h5 · 69-c7 · 70-05) 세 곳에 몰려 있다. 그림 없는 문항이 하나도 없어(21문 전부 crop) 창의 변형 때 그림 라벨 재작성이 필수다.

이 파일의 주 용도는 **숫자 변형·창의 변형의 원본**이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다.

## 문항 데이터

### 개념원리 확인하기

```yaml
- id: GN-M32-66-01
  page: 66
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    ⑴~⑵ PA 가 원 O 의 접선이고 A 가 접점일 때 ∠x 의 크기. ⑴ ∠APO=35° 에서 ∠AOP 를, ⑵ ∠AOP=60° 에서 ∠APO 를 묻는 역방향 한 쌍.
  category: "접선 ⊥ 반지름 → 직각삼각형의 내각의 합 → ∠x"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "원의 접선과 반지름 — 직각삼각형에서 각 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    접점 A 에서 ∠OAP=90° 를 세우면 △AOP 의 나머지 두 예각 합이 90° 라는 한 줄로 끝난다. ⑴⑵ 가 묻는 각만 서로 바뀐 짝이라 새 도구가 없다.
    확인하기 구역 ★1 출발 · 통찰 없음 · M_total 4 → ★1 유지.
  tier: star_1
  mechanism_primary: "∠OAP=90° → △AOP 의 두 예각 합 90° → ∠x"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $55^\circ$ ⑵ $30^\circ$'
  answer_source: "답지"
  figure: "crop:fig-66-01.png"
  latex: latex-bank/gn-m32/items/66-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "35°·60° 자리를 0°<각<90° 인 다른 예각으로 바꾸면 된다. 제약: 직각삼각형이 하나뿐이라 두 예각의 합이 90° 로 유지돼야 하고, 그림 라벨(O·A·P·x 위치)은 그대로 두어야 ⑴은 중심각·⑵는 꼭지각이 답이 된다."
    creative: "(1) 접선을 두 개(PA·PB)로 늘려 사각형 내각합으로 바꾸기(66-02 골조 · ★1 유지) (2) 각 대신 반지름·접선 길이를 주고 피타고라스로 잇기(★2) (3) ∠x 를 원주각·호의 길이까지 연결하면 단원 경계를 넘어 I-XU 가 붙고 ★3."
```

```yaml
- id: GN-M32-66-02
  page: 66
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    ⑴~⑵ PA·PB 가 원 O 의 두 접선(A·B 가 접점)일 때 ∠x 의 크기. ⑴ 중심각 ∠AOB=130° 에서 ∠P 를, ⑵ ∠P=85° 에서 중심각을 묻는 역방향 한 쌍.
  category: "두 접점에서 직각 두 개 → 사각형 APBO 의 내각의 합 360° → ∠P+∠AOB=180°"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "원 밖의 한 점에서 그은 두 접선 — ∠P 와 중심각 ∠AOB 의 관계"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ∠OAP=∠OBP=90° 두 개를 사각형 APBO 에 넣으면 ∠P 와 ∠AOB 가 보각이라는 관계식 하나로 끝난다. ⑴⑵ 모두 180° 에서 빼는 한 줄.
    확인하기 구역 ★1 출발 · 통찰 없음 · M_total 4 → ★1 유지.
  tier: star_1
  mechanism_primary: "∠OAP=∠OBP=90° → □APBO 내각 합 360° → ∠P+∠AOB=180° → ∠x"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $50^\circ$ ⑵ $95^\circ$'
  answer_source: "답지"
  figure: "crop:fig-66-02.png"
  latex: latex-bank/gn-m32/items/66-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "130°·85° 자리를 0°<각<180° 인 다른 각으로. 제약: 보각 관계라 두 각이 모두 0°보다 크고 180°보다 작아야 하며, 두 접선이 실제로 만나려면 중심각이 180° 미만이어야 한다."
    creative: "(1) ∠OAB(현과 반지름이 이루는 각)를 묻도록 바꾸면 이등변삼각형이 한 겹 더 붙어 ★2 (2) ∠AOB 를 호의 중심각으로 주고 호의 길이를 함께 묻기(★2) (3) 사각형 APBO 가 원에 내접할 조건까지 확장하면 ★3."
```

```yaml
- id: GN-M32-66-03
  page: 66
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    ⑴~⑵ PA·PB 가 원 O 의 두 접선(A·B 가 접점)일 때 x 의 값. ⑴ PA=14 에서 PB 를, ⑵ PO=13·OA=5 에서 PB 를 묻는다.
  category: "접선 길이 상등 PA=PB (필요하면 직각삼각형 OAP 에서 피타고라스) → x"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "원 밖의 한 점에서 그은 두 접선의 길이"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴은 접선 길이 상등 한 줄, ⑵는 △OAP 가 직각삼각형임을 쓴 피타고라스 한 줄 뒤 상등 한 줄. 도구가 둘뿐이고 순서가 고정이다.
    확인하기 구역 ★1 출발 · 통찰 없음 · M_total 4 → ★1 유지.
  tier: star_1
  mechanism_primary: "PA=PB (접선 길이 상등) · ⑵는 △OAP 직각 → PA=√(PO²−OA²) → x"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $14$ ⑵ $12$'
  answer_source: "답지"
  figure: "crop:fig-66-03.png"
  latex: latex-bank/gn-m32/items/66-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴의 14 는 아무 양수나 가능. ⑵의 (13, 5) 는 피타고라스 수 쌍(5-12-13, 3-4-5, 8-15-17, 7-24-25)에서 골라야 답이 무리수로 지저분해지지 않는다. 제약: 빗변 자리에 PO 가 와야 하므로 PO>OA."
    creative: "(1) x 를 반지름 자리로 옮겨 PO·PA 에서 OA 를 묻기(역방향 · ★2) (2) 사각형 APBO 의 둘레·넓이를 묻기(★2) (3) PA=PB 를 쓰지 않으면 풀리지 않도록 PB 쪽만 값을 주고 PA 를 묻는 배치로 바꾸기(★1 유지)."
```

```yaml
- id: GN-M32-66-04
  page: 66
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    ⑴~⑵ PA·PB 가 원 O 의 두 접선(A·B 가 접점)일 때 ∠x 의 크기. ⑴ ∠P=56° 에서 밑각 ∠PAB 를, ⑵ 밑각 70° 에서 ∠P 를 묻는 역방향 한 쌍.
  category: "PA=PB → △PAB 이등변 → 밑각 = (180°−∠P)÷2 (역은 ∠P = 180°−2×밑각)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 접선이 만드는 이등변삼각형의 각"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    접선 길이 상등을 각 문제로 옮긴 표준 드릴. △PAB 가 이등변임을 쓰면 밑각 공식 한 줄이고, ⑵는 그 식을 거꾸로 푼 것뿐이다.
    확인하기 구역 ★1 출발 · 통찰 없음 · M_total 4 → ★1 유지.
  tier: star_1
  mechanism_primary: "PA=PB → △PAB 이등변 → 밑각=(180°−∠P)÷2 → ∠x"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $62^\circ$ ⑵ $40^\circ$'
  answer_source: "답지"
  figure: "crop:fig-66-04.png"
  latex: latex-bank/gn-m32/items/66-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴의 ∠P 는 0°<∠P<180° 인 짝수 각이면 밑각이 정수로 떨어진다. ⑵의 밑각은 0°<밑각<90° 여야 ∠P>0°. 제약: 밑각이 60° 면 정삼각형이 되어 문제가 자명해지므로 피한다."
    creative: "(1) ∠AOB 와 ∠PAB 를 잇도록 바꾸면 사각형 내각합이 한 겹 더 붙어 ★2 (2) AB 의 길이까지 묻기(★2, 68-c5 골조) (3) 밑각 60° 로 두고 △PAB 가 정삼각형임을 이용하게 하면 I-SYM 이 붙어 ★2."
```

### 핵심문제 익히기

```yaml
- id: GN-M32-67-h1
  page: 67
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    A 가 원 O 의 접점이고 PA=15 cm, OB=8 cm 일 때 PB 의 길이. (B 는 선분 OP 와 원의 교점)
  category: "접선 ⊥ 반지름 → △OAP 피타고라스로 OP → PB=OP−OB"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "원의 접선과 반지름 — 피타고라스로 중심거리·접선 길이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    OA=OB=8 이 반지름이라는 것만 읽으면 △OAP 에서 OP=17 이고 PB 는 OP 에서 반지름을 뺀 나머지다. 세 단계지만 순서에 선택지가 없다.
    핵심문제 구역 ★2 출발 · 통찰 없음이나 M_total 5 이고 반지름을 OP 위로 옮겨 놓는 자리가 한 번 있어 −1 하지 않고 ★2 유지.
  tier: star_2
  mechanism_primary: "OA=OB=8 → △OAP 직각 → OP=√(15²+8²)=17 → PB=OP−OB"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$9\,\mathrm{cm}$'
  answer_source: "본문 답"
  figure: "crop:fig-67-h1.png"
  latex: latex-bank/gn-m32/items/67-h1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "(PA, OB) 를 피타고라스 수 쌍의 두 변(8-15-17, 5-12-13, 3-4-5, 7-24-25)에서 고른다. 제약: PB=OP−OB>0 이어야 하므로 OP>OB, 즉 PA>0 이면 자동 성립하지만 답이 정수가 되려면 빗변이 정수여야 한다."
    creative: "(1) PB 를 주고 반지름을 묻는 역방향으로 바꾸면 미지수를 세워야 해 ★2~3 (68-c3 골조) (2) △OAP 의 넓이나 둘레를 묻기(★2) (3) 접선을 두 개로 늘려 사각형 APBO 넓이로 잇기(★2~3)."
```

```yaml
- id: GN-M32-67-c1
  page: 67
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    T 가 원 O 의 접점이고 OA=3 cm, PA=6 cm 일 때 △OTP 의 넓이. (A 는 선분 OP 와 원의 교점)
  category: "OT=OA=반지름 → OP=OA+AP → 직각삼각형 OTP 에서 PT → 넓이 ½·OT·PT"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "원의 접선과 반지름 — 직각삼각형의 넓이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    OT 가 반지름 3 이고 OP=OA+AP=9 임을 세운 뒤 피타고라스로 PT=6√2, 마지막에 두 직각변을 곱해 반으로 나눈다. 네 단계지만 각 단계가 정해져 있다.
    확인문제 ★2 출발 · 통찰 없음 · M_total 6 이라 −1 조건(M_total ≤ 5)에 걸리지 않아 ★2 유지. 무리수 정리가 한 번 들어가 67-h1 보다 Mₖ 가 무겁다.
  tier: star_2
  mechanism_primary: "OT=OA=3 · OP=OA+AP=9 → PT=√(9²−3²)=6√2 → 넓이 ½·3·6√2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$9\sqrt{2}\,\mathrm{cm}^2$'
  answer_source: "답지"
  figure: "crop:fig-67-c1.png"
  latex: latex-bank/gn-m32/items/67-c1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "(OA, PA) 를 바꿀 수 있고 OP=OA+PA 가 빗변이 된다. 제약: PT=√(OP²−OT²) 가 정수나 간단한 무리수로 떨어지려면 (OT, OP) 가 피타고라스 수이거나 OP²−OT² 가 완전제곱수의 배수여야 한다(예 OA=3·PA=2 → OP=5, PT=4)."
    creative: "(1) 넓이를 주고 PA 를 묻는 역방향(★2~3) (2) △OTP 대신 사각형 OTPT′(두 접선) 넓이를 묻기(★2) (3) PT 를 접선 길이로 두고 원의 넓이까지 잇기(★2)."
```

```yaml
- id: GN-M32-67-h2
  page: 67
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    중심이 같은 두 원에서 큰 원의 현 AB 가 작은 원의 접선이고 C 가 접점이다. OC=3 cm, OD=5 cm 일 때 AB 의 길이. (D 는 큰 원 위의 점)
  category: "작은 원의 접점 C = 현 AB 의 중점 → △OCA 피타고라스 → AB=2·AC"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「작은 원의 접점」이라는 조건을 「OC ⊥ AB 이고 C 가 현 AB 의 중점」으로 옮겨 읽어야 반지름 두 개가 한 직각삼각형에 모인다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "중심이 같은 두 원 — 큰 원의 현이 작은 원의 접선"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    접선 ⊥ 반지름과 「중심에서 현에 내린 수선은 현을 이등분한다」를 이어 붙여야 AC 를 구할 수 있다. 그 뒤는 △OCA 피타고라스 한 줄과 2배 한 줄.
    접점을 중점으로 옮겨 읽는 자리에 I-EQV d1 하나. 핵심문제 ★2 출발 · 통찰 1개(+1 후보는 2개 이상) → ★2 유지. AB=2AC 를 잊는 T-표기 함정이 상시.
  tier: star_2
  mechanism_primary: "OC ⊥ AB 이고 C 는 AB 의 중점 → AC=√(OA²−OC²)=4 → AB=2AC"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$8\,\mathrm{cm}$'
  answer_source: "본문 답"
  figure: "crop:fig-67-h2.png"
  latex: latex-bank/gn-m32/items/67-h2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "(OC, OD) = (작은 반지름, 큰 반지름) 을 피타고라스 수 쌍(3-4-5, 6-8-10, 5-12-13, 8-15-17)에서 고른다. 제약: 작은 원이 큰 원 안에 있어야 하므로 OC<OD, 그리고 AB=2√(OD²−OC²)."
    creative: "(1) AB 를 주고 두 반지름의 차·넓이 차를 묻기(70-02 골조 · ★3) (2) 작은 원의 반지름 대신 현까지의 거리를 문장으로 주면 접선 조건이 사라져 ★2 (3) 두 원 사이 고리(annulus) 넓이를 묻기(★3) (4) 큰 원의 현을 두 개로 늘려 대칭을 쓰게 하면 I-SYM 이 붙어 ★3."
```

```yaml
- id: GN-M32-67-c2
  page: 67
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    중심이 같은 두 원에서 큰 원의 현 AB 가 작은 원의 접선이고 Q 가 접점이다. PQ=6 cm, OQ=3 cm 일 때 AB 의 길이. (P 는 반직선 OQ 와 큰 원의 교점)
  category: "OP=OQ+QP 로 큰 반지름을 만든 뒤 접점 Q=현의 중점 → AB=2·AQ"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "접점 Q 를 현 AB 의 중점으로 옮겨 읽고, 동시에 PQ·OQ 를 이어 붙여 큰 원의 반지름 OP 를 만들어야 직각삼각형이 닫힌다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "중심이 같은 두 원 — 큰 원의 현이 작은 원의 접선"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    67-h2 와 같은 골조인데 큰 원의 반지름이 직접 주어지지 않고 OP=OQ+QP=9 로 합성해야 한다는 한 단계가 더 있다. 그 뒤 AQ=6√2, AB=12√2.
    접점을 중점으로 읽는 I-EQV d1 하나. 확인문제 ★2 출발 · 통찰 1개 · M_total 6 → ★2 유지. 무리수 정리 때문에 Mₖ 가 67-h2 보다 하나 무겁다.
  tier: star_2
  mechanism_primary: "OP=OQ+QP=9 (큰 반지름) → AQ=√(9²−3²)=6√2 → AB=2AQ"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$12\sqrt{2}\,\mathrm{cm}$'
  answer_source: "답지"
  figure: "crop:fig-67-c2.png"
  latex: latex-bank/gn-m32/items/67-c2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "(OQ, PQ) 를 바꾸면 큰 반지름은 OQ+PQ 다. 제약: 답을 정수로 만들려면 (OQ, OQ+PQ) 가 피타고라스 수여야 한다(예 OQ=3·PQ=2 → OP=5, AB=8). 지금 값은 의도적으로 무리수 답."
    creative: "(1) AB 를 주고 PQ 를 묻는 역방향(★3) (2) 두 원 사이 고리 넓이를 묻기(★3 · 70-02 골조) (3) 작은 원에 접하는 현을 두 개 그려 사각형을 만들면 I-SYM 이 붙어 ★3."
```

```yaml
- id: GN-M32-68-h3
  page: 68
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    ⑴~⑵ A·B 가 점 P 에서 원 O 에 그은 두 접선의 접점일 때 x 의 값. ⑴ 반지름 2 cm·P 에서 원까지 3 cm 에서 접선 길이 PB 를, ⑵ ∠APB=44° 에서 밑각 ∠PBA 를 묻는다.
  category: "⑴ PO 합성 후 피타고라스로 접선 길이 · ⑵ PA=PB 이등변의 밑각"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "원의 접선의 성질 — 접선 길이 상등과 이등변삼각형"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴은 PO=3+2=5 를 만든 뒤 △OAP 에서 PA=√21, PB=PA. ⑵는 이등변삼각형 밑각 공식 한 줄. 66-03·66-04 를 한 문제에 붙여 놓은 대표 유형이라 새 도구가 없다.
    핵심문제 ★2 출발 · 통찰 없음이나 M_total 5 이고 ⑴에서 반지름을 PO 위로 합성하는 자리가 있어 −1 하지 않고 ★2 유지.
  tier: star_2
  mechanism_primary: "⑴ PO=3+2=5 → PA=√(5²−2²)=√21 → PB=PA · ⑵ PA=PB → 밑각=(180°−44°)÷2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\sqrt{21}$ ⑵ $68$'
  answer_source: "본문 답"
  figure: "crop:fig-68-h3.png"
  latex: latex-bank/gn-m32/items/68-h3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴은 (반지름, P에서 원까지 거리) 를 바꾸면 PO 가 둘의 합이므로, 답을 정수로 원하면 (반지름, 합) 이 피타고라스 수여야 한다(2·3 → PO=5 는 √21 로 무리수). ⑵의 ∠APB 는 짝수 각이어야 밑각이 정수."
    creative: "(1) ⑵를 거꾸로 밑각을 주고 ∠APB 를 묻기(★2 유지) (2) ⑴에 사각형 APBO 의 넓이를 이어 붙이기(★3) (3) ⑴⑵를 합쳐 접선 길이와 AB 를 동시에 묻기(68-c5 골조 · ★2~3)."
```

```yaml
- id: GN-M32-68-c3
  page: 68
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    A·B 가 점 P 에서 원 O 에 그은 두 접선의 접점이고 PA=12 cm, PC=6 cm 일 때 OB 의 길이. (C 는 선분 OP 와 원의 교점)
  category: "반지름을 r 로 놓고 OP=PC+r → △OAP 피타고라스 → r 에 대한 일차방정식"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "원의 접선과 반지름 — 반지름을 미지수로 놓는 피타고라스"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    67-h1 을 거꾸로 돌린 문제다. OB=r 로 놓으면 OP=6+r 이고 r²+12²=(6+r)² 에서 r² 이 소거되어 일차방정식 한 줄로 끝난다.
    미지수를 세워 표준 공식에 대입하는 절차라 통찰로 세지 않았다(스키마: 단순 미정계수 대입은 I-BW·I-EQV 불인정). 확인문제 ★2 출발 · M_total 7 로 −1 조건에 안 걸려 ★2 유지. Mₐ 는 반지름이 매개변수라 2.
  tier: star_2
  mechanism_primary: "OB=r → OP=PC+r → r²+PA²=(PC+r)² → r² 소거 → r"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$9\,\mathrm{cm}$'
  answer_source: "답지"
  figure: "crop:fig-68-c3.png"
  latex: latex-bank/gn-m32/items/68-c3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "(PA, PC) 를 바꾸면 r=(PA²−PC²)÷(2·PC). 제약: r 이 양수가 되려면 PA>PC 여야 하고, 정수 답을 원하면 PA²−PC² 가 2·PC 의 배수여야 한다(12·6 → 9, 8·4 → 6, 15·5 → 20)."
    creative: "(1) r 을 주고 PC 를 묻기(★2 · 67-h1 골조로 되돌아감) (2) 사각형 APBO 의 넓이나 둘레까지 잇기(★3) (3) PC 대신 원의 넓이를 주면 단위 환산이 끼어 ★2 유지 (4) C 를 접점으로 바꾸면 조건 자체가 달라져 문제가 성립하지 않으므로 그림 라벨은 고정."
```

```yaml
- id: GN-M32-68-c4
  page: 68
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    A·B 가 점 P 에서 원 O 에 그은 두 접선의 접점이고 BC 가 원 O 의 지름일 때, ∠ABC=21° 에서 ∠APB 의 크기.
  category: "지름이라 ∠ABC=∠OBA → △OAB 이등변 → 중심각 ∠AOB → ∠APB=180°−∠AOB"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "BC 가 지름이므로 O 가 BC 위에 있고 ∠ABC 가 곧 △OAB 의 밑각 ∠OBA 라는 것으로 조건을 옮겨 읽어야 중심각이 나온다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "원 밖의 한 점에서 그은 두 접선 — 중심각을 거쳐 ∠APB 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    주어진 각이 접선이 아니라 현 쪽에 있어 곧장 쓸 수 없다. 지름 조건으로 ∠ABC=∠OBA 로 옮긴 뒤 OA=OB 이등변 → ∠AOB=180°−2×21°, 마지막에 66-02 의 보각 관계로 ∠APB.
    조건을 중심각으로 옮겨 읽는 I-EQV d1 하나. 확인문제 ★2 출발 · 통찰 1개 · M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "BC 지름 → ∠OBA=∠ABC=21° → △OAB 이등변 → ∠AOB=180°−2×21° → ∠APB=180°−∠AOB"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$42^\circ$'
  answer_source: "답지"
  figure: "crop:fig-68-c4.png"
  latex: latex-bank/gn-m32/items/68-c4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "∠ABC 는 0°<∠ABC<45° 인 각이면 된다(∠APB=2×∠ABC 가 되어 0°<∠APB<90°). 제약: 45° 이상이면 ∠AOB 가 90° 이하가 되어 그림이 뒤집히므로 그림 라벨과 함께 검토해야 한다."
    creative: "(1) ∠APB 를 주고 ∠ABC 를 묻는 역방향(★2 유지) (2) 지름 조건을 빼고 ∠AOB 를 직접 주면 66-02 로 내려가 ★1 (3) 접선 길이까지 묻도록 반지름을 추가하면 ★3 (4) ∠ABC 를 접현각으로 읽게 하면 다음 단원과 엮여 I-XU 가 붙고 ★3."
```

```yaml
- id: GN-M32-68-c5
  page: 68
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    ⑴~⑵ A·B 가 점 P 에서 원 O 에 그은 두 접선의 접점이고 ∠APB=60°, OA=5 cm 일 때 ⑴ PA 의 길이 ⑵ AB 의 길이.
  category: "⑴ ∠APO=30° 직각삼각형의 변의 비 → PA · ⑵ 이등변+60° → △PAB 정삼각형 → AB=PA"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 3
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "PA=PB 와 ∠P=60° 를 묶으면 △PAB 가 정삼각형이라는 대칭이 보여 ⑵가 계산 없이 ⑴의 답과 같아진다(모르면 수선을 내려 다시 계산해야 함)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 접선이 만드는 정삼각형 — 접선 길이와 현의 길이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴은 OP 가 ∠P 를 이등분해 ∠APO=30°, △OAP 의 변의 비 1:2:√3 로 PA=5√3. ⑵는 ⑴의 답을 그대로 옮기는 자리인데 정삼각형을 못 보면 수선을 내려 다시 계산하게 된다.
    대칭으로 단계를 지우는 I-SYM d1 하나. 확인문제 ★2 출발 · 통찰 1개 · M_total 6 → ★2 유지. ⑴⑵의 답이 같은 것이 함정처럼 보이지만 정상이다.
  tier: star_2
  mechanism_primary: "OP 가 ∠P 이등분 → ∠APO=30° → PA=√3·OA · PA=PB 이고 ∠P=60° → △PAB 정삼각형 → AB=PA"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ $5\sqrt{3}\,\mathrm{cm}$ ⑵ $5\sqrt{3}\,\mathrm{cm}$'
  answer_source: "답지"
  figure: "crop:fig-68-c5.png"
  latex: latex-bank/gn-m32/items/68-c5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "OA 는 아무 양수나 가능하고 PA=√3·OA 로 따라온다. ∠APB 는 60° 를 유지해야 ⑵의 정삼각형 골조가 살아 있다. 60° 를 90° 로 바꾸면 PA=OA·AB=√2·PA 로 비가 바뀌고, 120° 로 바꾸면 PA=OA÷√3 이 되어 답이 지저분해진다."
    creative: "(1) AB 를 주고 반지름을 묻는 역방향(★3) (2) △PAB 의 넓이나 활꼴 넓이까지 잇기(★3) (3) ∠APB 를 90° 로 바꿔 사각형 APBO 가 정사각형이 되게 하면 I-SYM 이 더 세져 ★3 (4) 60° 를 빼고 OP 길이를 주면 통찰이 사라져 ★2 절차형."
```

```yaml
- id: GN-M32-69-h4
  page: 69
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    AD·AE·BC 가 원 O 의 접선이고 D·E·F 가 각각 접점이다. AB=7 cm, AC=8 cm, BC=5 cm 일 때 AE 의 길이.
  category: "세 쌍의 접선 길이 상등을 묶어 AD+AE = △ABC 의 둘레 → AE"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "AD=AE·BD=BF·CE=CF 세 개의 독립된 상등을 하나로 통합해 2·AE 가 △ABC 의 둘레라는 단일 관계로 만든다(개별 선분을 각각 구하려 들면 미지수가 세 개라 막힌다)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "삼각형의 세 변에 접하는 원(방접원) — 접선 길이 합과 둘레"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    BD·CE 를 따로 구할 수 없다는 것을 알아채고 AD+AE 를 (AB+BD)+(AC+CE) 로 쪼갠 뒤 BD=BF, CE=CF 로 BC 를 만들어 넣어야 둘레 20 이 나온다. 그 뒤 AE=둘레÷2.
    통합 착안이 이 문제의 전부라 I-CON d2 하나. 핵심문제 ★2 출발 · 통찰 1개(+1 후보는 2개 이상 또는 depth 3) → ★2 유지.
    [분류 이슈] 통합 착안 한 번으로 풀이 전체가 결정되는 대표 유형이라 학생 체감은 ★3 에 가깝다 — 규칙상 ★2 로 두고 기록만 한다.
  tier: star_2
  mechanism_primary: "AD+AE=(AB+BD)+(AC+CE)=AB+AC+BC → 2·AE=둘레 → AE"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$10\,\mathrm{cm}$'
  answer_source: "본문 답"
  figure: "crop:fig-69-h4.png"
  latex: latex-bank/gn-m32/items/69-h4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AB·AC·BC 는 삼각형 부등식을 만족하는 세 수면 된다. 제약: 둘레가 짝수여야 AE 가 정수이고, BD=AE−AB>0·CE=AE−AC>0 이 되려면 둘레÷2 가 AB·AC 보다 커야 한다."
    creative: "(1) AE 를 주고 BC 를 묻는 역방향(69-c6 골조 · ★2) (2) 내접원으로 바꿔 세 접선 길이를 각각 묻기(★3) (3) △ABC 를 직각삼각형으로 고정하고 반지름까지 묻기(★3) (4) 접선을 하나 더 그어 사각형의 둘레로 확장하면 조건 통합이 한 겹 더 붙어 ★3~4."
```

```yaml
- id: GN-M32-69-c6
  page: 69
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    AD·AE·BC 가 원 O 의 접선이고 D·E·F 가 각각 접점이다. AB=12 cm, AD=18 cm, AC=14 cm 일 때 BC 의 길이.
  category: "AD=AE 로 AE 를 얻고 BD=BF·CE=CF 를 옮겨 BC=BF+CF"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 2
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "BD 와 CE 를 각각 BF·CF 로 옮긴 뒤 둘을 붙여야 BC 가 된다 — 구하려는 변이 두 접선 길이의 합이라는 통합"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각형의 세 변에 접하는 원(방접원) — 접선 길이 합과 둘레"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    69-h4 를 거꾸로 돌린 짝이다. BD=AD−AB=6, CE=AE−AC=AD−AC=4 를 각각 BF·CF 로 옮기면 BC=6+4.
    69-h4 와 달리 둘레를 통째로 쓰지 않고 두 조각을 붙이는 정도라 I-CON d1 으로 낮춰 잡았다. 확인문제 ★2 출발 · 통찰 1개 · M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "AE=AD → BD=AD−AB · CE=AD−AC → BC=BF+CF=BD+CE"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$10\,\mathrm{cm}$'
  answer_source: "답지"
  figure: "crop:fig-69-c6.png"
  latex: latex-bank/gn-m32/items/69-c6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AD 를 고정하고 AB·AC 를 AD 보다 작은 값으로 고르면 BC=2·AD−AB−AC. 제약: BD=AD−AB>0, CE=AD−AC>0 이어야 하고 AB·AC·BC 가 삼각형 부등식을 만족해야 그림이 성립한다."
    creative: "(1) BC 를 주고 AD 를 묻기(69-h4 골조 · ★2) (2) △ABC 의 둘레를 묻기(★2, 답이 2·AD 로 즉답이라 오히려 쉬워짐) (3) 접점이 변 위에 없는 방접원 배치로 바꾸면 I-MI 가 붙어 ★3 (4) AD·AB·AC 중 하나를 미지수로 두고 방정식을 세우게 하면 Mₐ 상승 ★3."
```

```yaml
- id: GN-M32-69-h5
  page: 69
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    AB 가 반원 O 의 지름이고 AD·BC·CD 가 반원의 접선(E 는 접점)이다. AD=4 cm, BC=9 cm 일 때 AB 의 길이.
  category: "DE=DA·CE=CB 로 DC 를 만들고 사다리꼴에 수선 → 직각삼각형에서 AB"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "DE=DA, CE=CB 두 상등을 붙여 빗변 DC=AD+BC 라는 한 값을 만든다"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "사다리꼴 ABCD 를 D 에서 BC 에 내린 수선으로 직각삼각형으로 옮겨야 AB 가 변으로 등장한다 — 보조선을 긋기 전에는 AB 가 식에 나타나지 않는다"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "반원에서의 접선 — 사다리꼴에 수선을 그어 지름 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    접선 길이 상등으로 DC=4+9=13 을 얻는 것이 1단, 사다리꼴을 직각삼각형으로 바꾸는 보조선이 2단이다. 밑변이 BC−AD=5 이므로 AB=√(13²−5²)=12.
    보조선을 찾지 못하면 완전히 막히는 자리라 I-RT 를 d2 로 잡았다. 핵심문제 ★2 출발 · 통찰 2개 → +1 → ★3.
  tier: star_3
  mechanism_primary: "DC=DE+CE=AD+BC=13 → D 에서 BC 에 수선 → 직각삼각형(빗변 13 · 밑변 BC−AD=5) → AB=12"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$12\,\mathrm{cm}$'
  answer_source: "본문 답"
  figure: "crop:fig-69-h5.png"
  latex: latex-bank/gn-m32/items/69-h5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AB=2√(AD·BC) 이므로 (AD, BC) 의 곱이 완전제곱수여야 정수 답이 된다(4·9 → 12, 2·8 → 8, 3·12 → 12, 1·9 → 6). 제약: AD≠BC 여야 사다리꼴이고, AD<BC 로 두어 그림 라벨(D 위·C 아래)을 유지한다."
    creative: "(1) AB 를 주고 BC 를 묻는 역방향(★3 유지) (2) 사다리꼴의 넓이를 묻기(69-c7 골조 · ★3) (3) 반원의 넓이·둘레까지 잇기(70-05 골조 · ★3) (4) AD=BC 로 두면 직사각형이 되어 통찰이 사라지고 ★1 (5) 반원을 온전한 원으로 바꾸면 접선이 네 개가 되어 조건 통합이 늘고 ★4."
```

```yaml
- id: GN-M32-69-c7
  page: 69
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    AB 가 반원 O 의 지름이고 AD·BC·CD 가 반원의 접선(E 는 접점)이다. AD=6 cm, BC=3 cm 일 때 사각형 ABCD 의 넓이.
  category: "접선 길이 상등으로 DC → 수선으로 AB → 사다리꼴 넓이 ½(AD+BC)·AB"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "DE=DA, CE=CB 를 붙여 빗변 DC=AD+BC=9 를 만든다"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "사다리꼴을 수선으로 직각삼각형으로 옮겨야 높이 AB 가 나온다 — 넓이 공식에 필요한 높이가 그림에 직접 주어져 있지 않다"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "반원에서의 접선 — 사다리꼴의 넓이"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    69-h5 와 같은 골조에 넓이 한 단계가 더 붙었다. DC=9, 밑변 차 3 에서 AB=√(81−9)=6√2 이고 넓이는 ½(6+3)·6√2.
    높이가 무리수라 마지막 정리에서 Mₖ 가 한 단 무겁다. 확인문제 ★2 출발 · 통찰 2개 → +1 → ★3.
  tier: star_3
  mechanism_primary: "DC=AD+BC=9 → 수선으로 직각삼각형(밑변 AD−BC=3) → AB=6√2 → 넓이 ½(AD+BC)·AB"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$27\sqrt{2}\,\mathrm{cm}^2$'
  answer_source: "답지"
  figure: "crop:fig-69-c7.png"
  latex: latex-bank/gn-m32/items/69-c7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "넓이는 (AD+BC)·√(AD·BC) 이므로 AD·BC 가 완전제곱수면 정수 답(4·9 → 78, 2·8 → 40). 지금 값(6·3)은 무리수 답을 의도한 배치다. 제약: AD≠BC."
    creative: "(1) 넓이를 주고 BC 를 묻는 역방향(★3~4) (2) △DOC 의 넓이만 묻기(★3, 반원 넓이의 절반 관계가 드러남) (3) 색칠한 부분(사다리꼴−반원)을 묻기(★3) (4) AD·BC 를 문자로 두고 넓이를 식으로 나타내게 하면 Mₐ 3 으로 올라 ★4."
```

### 이런 문제가 시험에 나온다

```yaml
- id: GN-M32-70-01
  page: 70
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 나온다"
  summary: |
    직선 PT 가 원 O 의 접선이고 T 가 접점이다. PT=8 cm, PA=4 cm 일 때 원 O 의 반지름. (A 는 선분 PO 와 원의 교점)
  category: "반지름을 r 로 놓고 PO=PA+r → △OTP 피타고라스 → r 에 대한 일차방정식"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "원의 접선과 반지름 — 반지름을 미지수로 놓는 피타고라스"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    68-c3 과 완전히 같은 골조다. r 로 놓으면 (4+r)²=8²+r² 에서 r² 이 소거되어 8r=48, r=6.
    미지수를 세워 표준 공식에 넣는 절차라 통찰로 세지 않았다. M_total 7 로 −1 조건에는 걸리지 않는다.
    [분류 이슈] 구역 신호는 ★2~3 이지만 확인문제 68-c3 과 수치만 다른 같은 문제라 ★2 로 맞췄다 — 구역과 1단 어긋난다.
  tier: star_2
  mechanism_primary: "반지름 r → PO=PA+r → (PA+r)²=PT²+r² → r² 소거 → r"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$6\,\mathrm{cm}$'
  answer_source: "답지"
  figure: "crop:fig-70-01.png"
  latex: latex-bank/gn-m32/items/70-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "r=(PT²−PA²)÷(2·PA). 제약: r>0 이려면 PT>PA, 정수 답을 원하면 PT²−PA² 가 2·PA 의 배수여야 한다(8·4 → 6, 12·6 → 9, 6·2 → 8)."
    creative: "(1) 반지름을 주고 PT 를 묻기(★1~2 로 내려감) (2) 원의 넓이·둘레까지 잇기(★2) (3) 접선을 두 개로 늘려 사각형 넓이를 묻기(★3) (4) PA 대신 PB(먼 쪽 교점까지 거리)를 주면 PB=PA+2r 로 식이 바뀌어 T-표기 함정이 하나 늘고 ★3."
```

```yaml
- id: GN-M32-70-02
  page: 70
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 나온다"
  summary: |
    중심이 같은 두 원에서 큰 원의 현 AB 가 작은 원의 접선이다. AB=20 cm 일 때 색칠한 부분(두 원 사이 고리)의 넓이.
  category: "접점이 현의 중점 → R²−r²=(AB÷2)² → 고리 넓이 π(R²−r²)"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 반지름이 각각 정해지지 않는다는 것을 알아채고 구하는 넓이를 π(R²−r²) 라는 차 하나로 바꾼 뒤, 그 차를 피타고라스로 (AB÷2)² 로 통째로 대체한다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "중심이 같은 두 원 — 두 원 사이 고리의 넓이(R²−r²)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    R·r 을 각각 구하려 들면 조건이 모자라 막힌다. 접점이 현의 중점이므로 R²−r²=10² 이고, 구하는 넓이가 πR²−πr² 이라 그대로 100π.
    「개별 값이 아니라 차만 필요하다」는 전환이 이 문제의 전부라 I-EQV d2. 시험 구역 ★2~3 출발 · 통찰 depth 2 → ★3.
  tier: star_3
  mechanism_primary: "접점=AB 의 중점 → R²−r²=(AB÷2)²=100 → 넓이=πR²−πr²=100π"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$100\pi\,\mathrm{cm}^2$'
  answer_source: "답지"
  figure: "crop:fig-70-02.png"
  latex: latex-bank/gn-m32/items/70-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AB 만 바꾸면 되고 넓이는 π(AB÷2)². 제약: AB 를 짝수로 두어야 답이 깔끔하고, 두 반지름은 끝까지 결정되지 않으므로 그림에 반지름 수치를 적으면 안 된다(적는 순간 문제의 통찰이 사라진다)."
    creative: "(1) 넓이를 주고 AB 를 묻는 역방향(★3 유지) (2) 큰 원의 반지름을 추가로 주면 R·r 이 모두 정해져 통찰이 사라지고 ★2 (3) 작은 원에 접하는 현을 두 개 그려 겹친 부분을 묻기(★4) (4) 고리 대신 부채꼴 모양 색칠로 바꾸면 중심각 조건이 하나 더 붙어 ★3~4."
```

```yaml
- id: GN-M32-70-03
  page: 70
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 나온다"
  summary: |
    A·B 가 점 P 에서 원 O 에 그은 두 접선의 접점이고 ∠AOB=120°, AP=6 cm 일 때 옳지 않은 것 고르기(PB·∠APB·두 삼각형의 합동·OA·OP 에 대한 5지선다).
  category: "접선 길이 상등·보각 관계·RHS 합동·30°-60°-90° 변의 비로 선지 다섯 개를 각각 검증"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "원 밖의 한 점에서 그은 두 접선의 성질 종합 — 옳지 않은 것 고르기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ①②③은 이 단원의 기본 성질 세 개를 그대로 묻는 즉답이고, ④⑤만 △OAP(∠OPA=30°)의 변의 비 계산이 필요하다. 각 선지가 독립이라 분기 통찰은 없다.
    함정은 두 개 — 「옳지 않은 것」이라는 지시(T-표기)와 30°-60°-90° 에서 어느 변이 √3 배인지(T-부호·비의 방향).
    [분류 이슈] 시험 구역 ★2~3 출발이고 M_total 7 이지만 선지 다섯 개가 모두 단발 확인이라 체감은 ★2 — 하한을 택했다.
  tier: star_2
  mechanism_primary: "PA=PB · ∠APB=180°−∠AOB=60° · △PAO≡△PBO(RHS) · ∠OPA=30° → OA=AP÷√3, OP=2·OA → 어긋나는 선지 고르기"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: "crop:fig-70-03.png"
  latex: latex-bank/gn-m32/items/70-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "∠AOB 를 120° 로 유지하면 OA=AP÷√3·OP=2·OA 라는 비가 살아 있고 AP 만 바꾸면 된다. 90° 로 바꾸면 OA=AP·OP=√2·AP 로 비가 전부 달라지므로 선지 다섯 개를 모두 다시 써야 한다."
    creative: "(1) 틀린 선지를 ⑤(OP) 로 옮겨 30°-60°-90° 의 다른 자리를 건드리기(★2 유지) (2) 「옳은 것을 모두 고르시오」 보기형으로 바꾸면 모든 선지를 끝까지 검증해야 해 I-VF 가 붙고 ★3 (3) 사각형 APBO 의 넓이를 선지에 추가(★3) (4) 서술형으로 바꿔 ∠AOB 와 ∠APB 의 관계를 설명하게 하기(★3)."
```

```yaml
- id: GN-M32-70-04
  page: 70
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 나온다"
  summary: |
    PA·PB·DE 가 원 O 의 접선이고 A·B·C 가 각각 접점이다. OB=5 cm, OP=13 cm 일 때 삼각형 PED 의 둘레.
  category: "피타고라스로 PB → 세 쌍의 접선 길이 상등을 묶어 (둘레)=PA+PB=2·PB"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "DC=DA, EC=EB 를 써서 둘레 PD+DE+EP 를 PD+DA+EB+EP 로 갈아 끼우면 DE 가 사라지고 둘레가 두 접선 길이의 합으로 통합된다 — DE 나 D·E 의 위치를 개별로 구하려 들면 정보가 모자라 막힌다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "삼각형의 세 변에 접하는 원(방접원) — 접선 길이 합과 둘레"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    앞부분은 △OBP 피타고라스로 PB=12 한 줄. 본론은 DE 가 어디에 있든 둘레가 항상 PA+PB=24 라는 통합이고, D·E 의 위치가 주어지지 않은 것 자체가 그 힌트다.
    69-h4 와 같은 계열이지만 「위치가 정해지지 않아도 답이 하나」라는 점에서 착안 강도가 한 단 높아 I-CON d2. 시험 구역 ★2~3 출발 · depth 2 통합 → ★3.
  tier: star_3
  mechanism_primary: "PB=√(OP²−OB²)=12 → DC=DA·EC=EB → 둘레=PA+PB=2·PB=24"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$24\,\mathrm{cm}$'
  answer_source: "답지"
  figure: "crop:fig-70-04.png"
  latex: latex-bank/gn-m32/items/70-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "(OB, OP) 를 피타고라스 수 쌍(5-12-13, 3-4-5, 8-15-17, 7-24-25)에서 고르면 둘레=2·PB 가 정수. 제약: OP>OB 여야 하고, DE 의 위치는 답에 영향을 주지 않으므로 그림에서 D·E 에 수치를 적으면 안 된다."
    creative: "(1) 둘레를 주고 반지름을 묻는 역방향(★3~4) (2) 접선 DE 를 두 개로 늘려 사각형의 둘레를 묻기(★3) (3) PD 를 추가로 주고 DE 를 묻게 하면 통합이 반쯤 풀려 ★3 (4) △PED 의 넓이를 묻기(반지름이 내접원 반지름이라 넓이=½·r·둘레 로 이어져 ★4)."
```

```yaml
- id: GN-M32-70-05
  page: 70
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 나온다"
  summary: |
    AD·BC·CD 가 AB 를 지름으로 하는 반원 O 의 접선(E 는 접점)이다. AD=3 cm, BC=4 cm 일 때 반원 O 의 넓이.
  category: "접선 길이 상등으로 DC → 수선으로 AB → 반지름 → 반원 넓이 ½πr²"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "DE=DA, CE=CB 를 붙여 빗변 DC=AD+BC=7 을 만든다"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "사다리꼴을 D 에서 내린 수선으로 직각삼각형으로 옮겨야 지름 AB 가 변으로 등장한다 — 넓이에 필요한 반지름이 그림에 직접 없다"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "반원에서의 접선 — 반원의 넓이"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    69-h5 골조에 넓이 한 단계를 붙인 시험용 문항이다. DC=7, 밑변 차 1 에서 AB=√48=4√3, 반지름 2√3, 반원 넓이 ½π(2√3)².
    반지름을 구한 뒤 반원(원의 절반)임을 놓치는 T-표기 함정이 마지막에 하나 있다. 시험 구역 ★2~3 출발 · 통찰 2개 → +1 → ★3.
  tier: star_3
  mechanism_primary: "DC=AD+BC=7 → 수선으로 직각삼각형(밑변 BC−AD=1) → AB=4√3 → r=2√3 → ½πr²"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$6\pi\,\mathrm{cm}^2$'
  answer_source: "답지"
  figure: "crop:fig-70-05.png"
  latex: latex-bank/gn-m32/items/70-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AB=2√(AD·BC) 이고 반원 넓이=½π·AD·BC 로 곱에만 의존한다. 제약: AD·BC 가 정수면 넓이가 π 의 유리수배로 떨어지고(3·4 → 6π, 2·8 → 8π), AD≠BC 여야 사다리꼴 배치가 유지된다."
    creative: "(1) 넓이를 주고 BC 를 묻는 역방향(★3~4) (2) 사다리꼴 ABCD 의 넓이를 묻기(69-c7 골조 · ★3) (3) 색칠한 부분(사다리꼴−반원)을 묻기(★4, 계산이 한 겹 더) (4) AD·BC 를 문자로 두고 반원 넓이를 식으로 나타내게 하면 Mₐ 3 으로 올라 ★4 (5) 반원을 원으로 바꾸면 접선이 네 개가 되어 조건 통합이 늘고 ★4."
```

## 표본 판정 요약 (21문)

- ★ 분포: ★1 4 · ★2 12 · ★3 5 · ★4 0 · ★5 0
- 통찰형 11 · 절차형 10 · premium 0
- 통찰 유형 분포: I-CON 6(69-h4 · 69-c6 · 69-h5 · 69-c7 · 70-04 · 70-05) · I-EQV 4(67-h2 · 67-c2 · 68-c4 · 70-02) · I-RT 3(69-h5 · 69-c7 · 70-05) · I-SYM 1(68-c5). I-XU·I-SC·I-VF·I-PD·I-BW·I-MI 는 0 — 이 단원이 한 단원 안의 두 도구만으로 닫혀 있어서다.
- depth 2 통찰은 5개(69-h4 · 69-h5 · 69-c7 · 70-02 · 70-04 의 각 1개), 나머지는 전부 depth 1. depth 3 은 없다.
- type_hint 상위: 「원 밖의 한 점에서 그은 두 접선」 계열 7(66-02 · 66-03 · 66-04 · 68-h3 · 68-c4 · 68-c5 · 70-03) · 「원의 접선과 반지름」 계열 5(66-01 · 67-h1 · 67-c1 · 68-c3 · 70-01) · 「중심이 같은 두 원」 3(67-h2 · 67-c2 · 70-02) · 「삼각형의 세 변에 접하는 원 — 접선 길이 합」 3(69-h4 · 69-c6 · 70-04) · 「반원에서의 접선」 3(69-h5 · 69-c7 · 70-05)
- 그림: 21문 전부(`crop:fig-<id>.png`). 그림 없는 문항 0. 소문항(⑴⑵) 묶음은 6문(66-01 · 66-02 · 66-03 · 66-04 · 68-h3 · 68-c5).
- M_total 분포: 4 가 4문 · 5 가 7문 · 6 가 7문 · 7 이 3문. 최대 7(68-c3 · 70-01 · 70-03).
- 대상층: 하위권 4 · 중하위권 6 · 중위권 4 · 중상위권 7.

## 분류 이슈 목록

판정이 애매하거나 벤더 구역 신호와 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-M32-69-h4 | 통합 착안(I-CON d2) 한 번으로 풀이 전체가 결정되는 대표 유형이라 체감은 ★3 이나, 통찰 1개·depth 2 는 +1 후보 규칙에 걸리지 않아 ★2 로 둠 | ★2 / ★3 |
| GN-M32-70-01 | 구역은 「시험에 나온다」(★2~3)이나 확인문제 68-c3 과 수치만 다른 같은 골조라 ★2 로 맞춤 — 구역 신호와 1단 어긋남 | ★2 / ★3 |
| GN-M32-70-03 | M_total 7(선지 5개 검증·함정 2종)이지만 각 선지가 단발 확인이라 체감 ★2 — 구역 출발 범위의 하한을 택함 | ★2 / ★3 |
| GN-M32-68-c5 | ⑵의 「이등변+60° → 정삼각형」을 I-SYM 으로 셀지 표준 절차로 볼지 갈림. 계산을 실제로 지우므로 d1 로 인정했으나 카탈로그 설계 때 재확인 필요 | ★2 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형** ① 「중심이 같은 두 원 — 현이 작은 원의 접선」(67-h2 · 67-c2 · 70-02): 접점을 현의 중점으로 옮겨 읽는 I-EQV 가 고정 골조이고, 70-02 의 「R²−r² 만 필요」는 한 단 위라 base ★ 를 2 와 3 으로 나눠 둘 만하다. ② 「반원에서의 접선(사다리꼴+수선)」(69-h5 · 69-c7 · 70-05): AB=2√(AD·BC) 가 공통 결론이고 묻는 대상(지름·넓이·반원 넓이)만 갈리므로 한 유형 + 출력 변형으로 묶는다.
- **통합해도 될 유형** ① 「접선 길이 합 → 둘레」(69-h4 · 69-c6 · 70-04)는 삼각형이 방접원이든 PA·PB 배치든 「2×접선 길이 = 둘레」 하나로 묶인다. ② 「반지름을 r 로 놓는 피타고라스」(68-c3 · 70-01)는 완전히 같은 유형이므로 카탈로그에서 한 칸이어야 한다. ③ 66-01~66-04 의 확인하기 드릴 네 개는 「접선 ⊥ 반지름」과 「두 접선」 두 칸이면 충분하다.
- **base ★ 제안**: 접선 ⊥ 반지름 드릴 1 · 두 접선 기본 1~2 · 피타고라스 결합 2 · 반지름 미지수 2 · 중심이 같은 두 원 2(고리 넓이 3) · 접선 길이 합 둘레 3 · 반원 사다리꼴 3. 이 단원에는 ★4~5 자격(I-SC·I-VF·I-SYM·I-XU 중심 유형)이 없으므로 변별 슬롯은 창의 변형 쪽에서 만들어야 한다.
