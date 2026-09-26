---
name: mechanism-데이터-GN-M32-08-p2
description: 개념원리 중학 3-2 08 원의 접선 (2)(2/2 · 32문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 중학 3-2 · 전사본 latex-bank/gn-m32
  section: 08 원의 접선 (2)
  unit_code: GN-M32-08
  part: "2/2"
  extract_range: "76~81쪽 · 76-01~81-u6"
  total_problems: 32
  unit_total: 49
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). depth_score 는 effective_depth 의 합. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-m32/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-m32/items/<id>.tex
  image_source: latex-bank/gn-m32/figures/ (crops.json)
---

# 개념원리 중학 3-2 · 08 원의 접선 (2) (2/2) 정독 데이터 (v1.0)

이 파일은 76~81쪽 32문항 전수를 다룬다. 08단원 후반은 개념 학습이 끝난 뒤의 **정리 구역**만으로 이루어져 있다 — 「중단원 마무리하기 STEP 1 기본 문제」 12문(76~77쪽) · 「STEP 2 발전 문제」 9문(78~79쪽) · 「STEP 3 실력 UP」 3문(79쪽) · 「서술형 대비 문제」 8문(80~81쪽 · 예제 `e` 2문 + 유제 `u` 6문). 개념원리 중학은 난이도 표기(`level`)가 없고 **구역 자체가 난이도 층**이라 ★ 출발점을 구역에서 잡았다(STEP 1 ★2 · STEP 2 ★3 · STEP 3 ★4 · 서술형 ★3). 태그는 「꼭나와」 6문(76-02 · 76-05 · 77-09 · 77-11 · 78-16 · 79-19)뿐이고 「UP」 태그는 없다. 32문 **전부 그림 문항**이라 `figure` 가 none 인 블록은 하나도 없다.

단원 내용은 (가) 중심에서 현에 내린 수선 = 현의 수직이등분(반지름·현·중심거리의 직각삼각형), (나) 중심에서 같은 거리에 있는 두 현의 길이 상등(과 그 역 · 이등변삼각형), (다) 원 밖의 한 점에서 그은 두 접선의 길이 상등(접선⊥반지름 직각삼각형 포함), (라) 삼각형의 내접원 접선 길이 배분과 직각삼각형 내접원의 반지름, (마) 원에 외접하는 다각형의 대변 길이의 합 다섯 갈래다. 정리 구역이라 한 문항이 (가)~(마) 중 둘을 엮는 경우가 많고, 그 엮는 지점이 이 범위의 통찰 대부분(주로 I-EQV — 길이 조건과 거리 조건을 서로 옮기는 동치 변환)이다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다. 이 단원의 **숫자 변형은 제약이 세다** — 피타고라스 직각삼각형이 정수 또는 정리되는 무리수로 떨어져야 하고, 접선 길이 배분은 삼각부등식과 "각 접선 길이가 양수"를 동시에 만족해야 하며, 그림에 찍힌 라벨(접점 이름·직각 표시)은 그대로 두어야 한다. 그 제약을 문항별로 `variation_notes.numeric` 에 적었다.

## 문항 데이터

### 중단원 마무리하기 STEP 1 기본 문제

```yaml
- id: GN-M32-76-01
  page: 76
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "마무리 STEP1 기본"
  summary: |
    원 O에서 지름 CD가 현 AB와 수직으로 만나고 CE=7cm, ED=3cm일 때 AB의 길이. 5지선다.
  category: "지름 길이 → 반지름·중심거리 → 수직이등분 직각삼각형"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "원의 중심과 현의 수직이등분(피타고라스로 현의 길이 구하기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    CE+ED로 지름 10을 얻어 반지름 5, 중심 O에서 E까지는 OD-ED=2. 수직이등분이므로 AE를 피타고라스로 구해 2배.
    통찰 0·M_total 5로 -1 후보지만, 지름 인식과 중심-현 수직 정리 두 도구를 이어 붙여야 해 STEP 1 출발점 ★2를 유지했다.
    함정은 OE를 7-5가 아니라 5-3으로 잡는 위치 판단(T-부호) 하나.
  tier: star_2
  mechanism_primary: "CD=CE+ED=10 → r=5 → OE=r-ED=2 → AE=√(r²-OE²) → AB=2AE"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: "crop:fig-76-01.png"
  latex: latex-bank/gn-m32/items/76-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "CE·ED 를 바꿀 수 있음. 제약: (1) CE+ED 가 짝수여야 반지름이 정수 (2) r²-OE² 가 완전제곱이면 정수 답, 아니면 2√k 꼴 선택지 (3) CE>ED 로 두어야 그림의 E 위치가 유지됨."
    creative: "(1) AB 를 주고 ED 를 묻는 역방향(I-BW 추가 · ★3) (2) CD 가 지름이라는 말을 빼고 「AB 의 수직이등분선이 CD」로만 주면 중심 위치 판단이 필요해 ★3 (3) △ABD 의 넓이로 확장하면 한 단계 추가(★2 유지)."
```

```yaml
- id: GN-M32-76-02
  page: 76
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "마무리 STEP1 기본"
  summary: |
    원 O에서 OC가 현 AB와 수직(M은 교점)이고 AM=8cm, CM=4cm일 때 반지름 OB의 길이. 5지선다.
  category: "반지름을 미지수로 → 중심거리 r-CM → 피타고라스 일차방정식"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "원의 중심과 현의 수직이등분(반지름 구하기 · 미지수 놓기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    반지름을 r로 놓으면 OM=r-4, AM=8 이고 r²=(r-4)²+64 에서 r²이 상쇄돼 일차방정식 8r=80.
    「반지름을 미지수로 놓기」는 이 단원의 표준 절차라 통찰로 세지 않았다. Mₐ 만 미지수 때문에 2.
    빈출 태그(꼭나와)이며 STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "OB=r 로 놓기 → OM=r-CM → r²=OM²+AM² → r² 상쇄 → r"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: "crop:fig-76-02.png"
  latex: latex-bank/gn-m32/items/76-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AM·CM 조합을 바꿀 수 있음. 제약: r=(AM²+CM²)/(2·CM) 이 정수로 떨어지려면 AM²+CM² 가 2CM 의 배수여야 함(예: AM=12, CM=8 → r=13). CM<r 도 확인."
    creative: "(1) 반지름을 주고 CM 을 묻기(같은 식 · ★2) (2) C 대신 현 AB 를 원의 중심 반대편으로 연장한 점을 써 OM=r+CM 으로 바꾸면 부호 함정 추가(★3) (3) 원의 넓이나 둘레까지 요구하면 단계 하나 추가(★2 유지)."
```

```yaml
- id: GN-M32-76-03
  page: 76
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "마무리 STEP1 기본"
  summary: |
    반지름 15cm인 원의 일부인 호 AB에서 AB⊥HP, AH=BH, HP=6cm일 때 삼각형 APB의 넓이. 5지선다.
  category: "중심 복원 → OH=r-HP → 반현 AH → 넓이"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "그림에 없는 중심을 HP 의 연장선 위에 복원 — 현의 수직이등분선은 중심을 지난다는 조건을 OH=r-HP 로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "호(원의 일부)에서 중심 복원 후 반지름·현 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    원이 통째로 그려져 있지 않고 호만 있어, AH=BH·AB⊥HP 로부터 중심이 직선 PH 위에 있음을 먼저 세워야 한다.
    그 뒤는 OH=15-6=9 → AH=√(15²-9²) → AB=2AH, 넓이는 ½·AB·HP 한 줄.
    보조선(중심) 착안 통찰 1개(EQV d1)·M_total 5 → STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "중심 O를 PH 위에 복원 → OH=r-HP → AH=√(r²-OH²) → 넓이=½·2AH·HP"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: "crop:fig-76-03.png"
  latex: latex-bank/gn-m32/items/76-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "r 과 HP 를 바꿀 수 있음. 제약: (1) r²-(r-HP)² 가 완전제곱이어야 넓이가 정수(예: r=25, HP=8 → AH=20) (2) HP<r 이어야 P 가 호 위 (3) 선택지가 모두 정수 넓이로 정리되게 AB·HP 의 곱이 짝수."
    creative: "(1) AB 와 HP 를 주고 반지름·원의 둘레를 묻기(81-u3 과 같은 골조 · ★3) (2) 색칠한 활꼴 넓이로 바꾸면 중심각 판단이 더해져 ★4 (3) 호를 원기둥 단면(수면 높이) 문장제로 옮기면 I-RT 추가 ★3."
```

```yaml
- id: GN-M32-76-04
  page: 76
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "마무리 STEP1 기본"
  summary: |
    원 O에서 AB⊥OM, CD⊥ON, OM=ON이고 AM=9cm일 때 CD의 길이를 구하는 단답형.
  category: "중심에서 거리 상등 → 현의 길이 상등 → 2배"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "중심에서 같은 거리에 있는 두 현의 길이는 같다"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    OM=ON → AB=CD 정리를 그대로 쓰고, AM 이 반현이므로 AB=18=CD. 식 변형 한 단계·계산 한 줄.
    통찰 0·M_total 3 이라 v3.8 -1 규칙을 그대로 적용해 STEP 1 출발점 ★2 에서 ★1 로 내렸다(1단 차 · 이슈 표에 기록).
    이 범위에서 유일한 ★1 이며 정리 확인용 문항이다.
  tier: star_1
  mechanism_primary: "OM=ON → AB=CD → CD=2·AM"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$18\,\mathrm{cm}$'
  answer_source: "답지"
  figure: "crop:fig-76-04.png"
  latex: latex-bank/gn-m32/items/76-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AM 값만 자유롭게 바꿀 수 있음(답은 항상 2·AM). 제약: 반지름을 함께 주려면 AM<r 이어야 하고, AM 을 현 전체로 주는지 반현으로 주는지 발문에서 분명히 해야 함."
    creative: "(1) CD 를 주고 OM=ON 임을 보이게 하는 서술형(역 정리 · ★2) (2) 반지름을 추가로 주고 OM 의 길이까지 묻기(피타고라스 한 단계 추가 ★2) (3) 세 현이 같은 거리에 있어 정삼각형이 되는 78-15 형태로 확장하면 ★3."
```

```yaml
- id: GN-M32-76-05
  page: 76
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "마무리 STEP1 기본"
  summary: |
    원 O의 중심에서 두 현 AB, AC에 내린 수선의 발이 M, N이고 OM=ON, ∠ACB=52°일 때 ∠MON의 크기. 5지선다.
  category: "거리 상등 → 현 상등 → 이등변삼각형의 각 → 사각형 내각의 합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "OM=ON(거리 조건)을 AB=AC(길이 조건)로 옮기고 다시 이등변삼각형의 각 조건으로 옮기는 2단 동치 변환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "중심에서 같은 거리에 있는 두 현 → 이등변삼각형의 각"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    OM=ON 이 곧 AB=AC 이므로 △ABC 는 이등변삼각형, ∠ABC=∠ACB=52° 에서 ∠A=76°.
    사각형 AMON 의 내각의 합에서 ∠MON=360-90-90-76 으로 마무리.
    거리→길이→각 2단 변환 통찰 1개(EQV d2)·M_total 5 → 빈출 태그이지만 ★2 유지(+1 은 통찰 2개 이상일 때).
  tier: star_2
  mechanism_primary: "OM=ON → AB=AC → ∠A=180-2∠ACB → 사각형 AMON 에서 ∠MON=360-90-90-∠A"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지"
  figure: "crop:fig-76-05.png"
  latex: latex-bank/gn-m32/items/76-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "∠ACB 값만 바꾸면 됨. 제약: 0<∠ACB<90 이어야 이등변삼각형이 만들어지고, ∠MON=2∠ACB-... 가 아니라 180-∠A 와 같아지므로 선택지 간격(2°)을 유지하려면 ∠ACB 를 짝수로."
    creative: "(1) ∠MON 을 주고 ∠ACB 를 묻는 역방향(I-BW · ★3) (2) OM=ON 을 빼고 AB=AC 를 직접 주면 통찰 1단 감소(★2→★1~2) (3) 현이 세 개인 경우로 늘려 ∠MON+∠NOL 을 묻기(★3)."
```

```yaml
- id: GN-M32-76-06
  page: 76
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "마무리 STEP1 기본"
  summary: |
    점 T가 원 O의 접점이고 OT=5cm, PT=5√3cm일 때 PQ(P에서 원까지의 최단 거리)의 길이. 5지선다.
  category: "접선⊥반지름 직각삼각형 → PO → PQ=PO-r"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "접선과 반지름은 수직(접선의 길이와 중심거리)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    OT⊥PT 이므로 PO=√(OT²+PT²)=10, Q 는 선분 PO 와 원의 교점이라 PQ=PO-OQ=PO-r.
    무리수 제곱(5√3)² 처리와 「PQ 는 PO 자체가 아니라 반지름을 뺀 값」이라는 위치 함정(T-경계)이 전부.
    통찰 0·M_total 5 로 -1 후보이나 두 도구(접선⊥반지름 · PQ 분해)를 이어 붙여 STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: "OT⊥PT → PO=√(OT²+PT²) → PQ=PO-OT"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: "crop:fig-76-06.png"
  latex: latex-bank/gn-m32/items/76-06.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "OT 와 PT 를 바꿀 수 있음. 제약: OT²+PT² 가 완전제곱이어야 PO 가 정수(3-4-5 · 5-12-13 · 8-15-17 계열), 그래야 PQ=PO-OT 도 정수로 떨어져 선택지가 깔끔함."
    creative: "(1) PQ 와 OT 를 주고 접선의 길이 PT 를 묻는 역방향(★2) (2) 접선을 두 개로 늘려 ∠TPT' 나 사각형 넓이를 묻기(★3) (3) PT 와 PQ 만 주고 반지름을 미지수로 두면 이차방정식이 되어 ★3."
```

```yaml
- id: GN-M32-77-07
  page: 77
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "마무리 STEP1 기본"
  summary: |
    외접하는 두 원 O, O'에 점 P에서 그은 접선 PA, PB, PC(B는 두 원의 접점)에서 PA=(13+x)cm, PC=(3x-7)cm일 때 x의 값. 5지선다.
  category: "두 원 각각의 접선 길이 상등 → 공통 세그먼트 PB로 연결 → 일차방정식"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "PA=PB(원 O)와 PB=PC(원 O')를 PB 를 다리로 이어 PA=PC 라는 한 식으로 환원 — 원이 둘이라는 겉모습을 지움"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "원 밖의 한 점에서 그은 두 접선의 길이(두 원이 접할 때)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    원이 두 개라 어느 접선끼리 같은지 먼저 갈라야 한다. PB 가 두 원 모두의 접선 노릇을 해 PA=PB=PC 가 되고,
    13+x=3x-7 일차방정식 한 줄로 끝난다. 계산 부담은 거의 없고 관계 파악이 전부.
    연결 통찰 1개(EQV d2)·M_total 6 → STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "PA=PB(원 O) · PB=PC(원 O') → PA=PC → 13+x=3x-7 → x"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "⑤"
  answer_source: "답지"
  figure: "crop:fig-77-07.png"
  latex: latex-bank/gn-m32/items/77-07.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 일차식의 계수를 바꿀 수 있음. 제약: (1) 해 x 가 양의 정수 (2) 대입한 접선 길이 13+x, 3x-7 이 모두 양수 (3) 선택지가 연속한 정수라 해가 6~10 범위에 들어가게."
    creative: "(1) PB 의 길이를 묻기(같은 골조 · ★2) (2) 두 원의 반지름을 주고 PO, PO' 를 묻으면 피타고라스가 더해져 ★3 (3) 두 원이 외접이 아니라 떨어져 있고 공통외접선을 그은 배치로 바꾸면 연결이 끊겨 ★4."
```

```yaml
- id: GN-M32-77-08
  page: 77
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "마무리 STEP1 기본"
  summary: |
    A, B가 점 P에서 원 O에 그은 두 접선의 접점이고 ∠P=48°일 때 ∠x(=∠OAB)의 크기. 5지선다.
  category: "PA=PB 이등변삼각형의 밑각 → 접선⊥반지름에서 빼기"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "원 밖의 한 점에서 그은 두 접선(이등변삼각형과 각의 크기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    PA=PB 이므로 △PAB 는 이등변삼각형, ∠PAB=(180-48)÷2=66°.
    접선⊥반지름이라 ∠PAO=90° 이고 ∠x=∠OAB=90-66.
    두 도구를 순서대로 쓰는 표준 절차라 통찰로 세지 않았다. M_total 5 이지만 STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: "∠PAB=(180-∠P)/2 → ∠PAO=90° → ∠x=90-∠PAB"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: "crop:fig-77-08.png"
  latex: latex-bank/gn-m32/items/77-08.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "∠P 만 바꾸면 됨(답은 항상 ∠P/2). 제약: 0<∠P<90 이어야 접선 두 개가 실제로 그어지고, 선택지 간격을 1° 로 유지하려면 ∠P 를 짝수로."
    creative: "(1) ∠AOB 를 묻기(사각형 내각의 합 · ★2) (2) ∠x 를 주고 ∠P 를 묻는 역방향(★2) (3) 접선 둘 대신 접선 하나와 현을 주고 ∠OAB 를 묻기(★3) (4) 78-17 처럼 길이까지 함께 묻는 보기 판별형으로 바꾸면 ★3."
```

```yaml
- id: GN-M32-77-09
  page: 77
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "마무리 STEP1 기본"
  summary: |
    AD, BC, AF가 원 O의 접선(접점 D, E, F)이고 AB=7cm, AC=5cm, BC=6cm일 때 AD의 길이를 구하는 단답형.
  category: "접선 길이 상등 → AD+AF를 삼각형 둘레로 환원 → 2로 나누기"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "BD=BE, CF=CE 를 대입해 AD+AF 를 AB+BC+CA(삼각형의 둘레)로 바꾸는 환원 — 개별 접선 길이를 구하지 않고 합만 본다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "삼각형의 방접원·연장 접선에서 접선의 길이(둘레의 절반)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    AD=AF 이고 AD=AB+BD, AF=AC+CF 인데 BD=BE, CF=CE 이므로 AD+AF=AB+AC+BC.
    즉 2AD=둘레 18 → AD=9. 개별 문자를 세우지 않고 합으로 넘어가는 것이 이 문항의 전부다.
    환원 통찰 1개(EQV d2)·M_total 5 → 빈출 태그이지만 STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "AD=AF · BD=BE · CF=CE → 2AD=AB+BC+CA → AD=둘레/2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$9\,\mathrm{cm}$'
  answer_source: "답지"
  figure: "crop:fig-77-09.png"
  latex: latex-bank/gn-m32/items/77-09.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 변을 바꿀 수 있음. 제약: (1) 삼각부등식 (2) 둘레가 짝수라야 AD 가 정수 (3) BD=AD-AB>0 이 되도록 AB, AC 가 둘레의 절반보다 작아야 함."
    creative: "(1) AD 를 주고 BC 를 묻는 역방향(★3) (2) BE 나 CE 개별 길이를 묻기(연립 한 단계 추가 ★2) (3) 내접원으로 바꾸면 77-10 과 같은 (a+b-c)/2 유형이 되어 별도 유형 (4) 사각형의 방접원으로 확장하면 ★4."
```

```yaml
- id: GN-M32-77-10
  page: 77
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "마무리 STEP1 기본"
  summary: |
    원 O가 삼각형 ABC의 내접원(접점 D, E, F)이고 AB=10cm, BC=11cm, CA=9cm일 때 CE의 길이. 5지선다.
  category: "접선 길이를 x, y, z로 → 세 변 연립 → CE=(BC+CA-AB)/2"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각형의 내접원과 접선의 길이(세 변에서 접선 길이 구하기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    AD=AF=x, BD=BE=y, CE=CF=z 로 놓고 x+y=10, y+z=11, z+x=9 를 연립하면 z=(11+9-10)/2.
    미지수 세 개 연립이라 Mₖ·Mₐ 가 올라가지만, 이 단원에서 반복 훈련하는 표준 절차라 통찰은 0.
    M_total 7 로 -1 대상이 아니므로 STEP 1 출발점 ★2 그대로.
  tier: star_2
  mechanism_primary: "접선 길이 x, y, z → 세 변 연립 → CE=(BC+CA-AB)/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: "crop:fig-77-10.png"
  latex: latex-bank/gn-m32/items/77-10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 변을 바꿀 수 있음. 제약: (1) 삼각부등식 (2) BC+CA-AB 가 짝수면 정수, 홀수면 선택지가 분수(원문처럼 9/2·11/2 를 섞는 배치가 가능) (3) 세 접선 길이가 모두 양수."
    creative: "(1) 묻는 접점을 AD 나 BE 로 바꾸기(★2) (2) 내접원의 반지름·넓이를 함께 묻기(★3) (3) 직각삼각형으로 바꾸면 r=(a+b-c)/2 유형(79-20·81-u6)으로 넘어감 (4) DE 접선을 추가하면 79-19 의 둘레 환원형이 되어 ★3."
```

```yaml
- id: GN-M32-77-11
  page: 77
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "마무리 STEP1 기본"
  summary: |
    AD∥BC인 등변사다리꼴 ABCD가 원 O에 외접하고 AD=8cm, BC=18cm일 때 AB의 길이를 구하는 단답형.
  category: "외접사각형 대변 합 상등 → 등변 조건으로 2AB=AD+BC"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "원에 외접하는 사각형의 대변의 길이의 합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    AB+CD=AD+BC 에 등변사다리꼴이라 AB=CD 를 대입해 2AB=26.
    통찰 0·M_total 4 라 -1 후보지만, 외접사각형 성질과 등변사다리꼴 성질 두 가지를 동시에 꺼내야 해
    76-04(정리 한 줄)보다는 무겁다고 보아 빈출 태그와 함께 STEP 1 출발점 ★2 를 유지했다.
  tier: star_2
  mechanism_primary: "AB+CD=AD+BC → AB=CD 대입 → AB=(AD+BC)/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$13\,\mathrm{cm}$'
  answer_source: "답지"
  figure: "crop:fig-77-11.png"
  latex: latex-bank/gn-m32/items/77-11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AD·BC 를 바꿀 수 있음. 제약: (1) AD+BC 가 짝수라야 AB 가 정수 (2) AB>(BC-AD)/2 라야 사다리꼴이 실제로 그려짐 (3) 반지름을 함께 주려면 높이=2r 이 (BC-AD)/2 와 피타고라스로 맞아떨어져야 함."
    creative: "(1) 사다리꼴의 둘레나 넓이를 묻기(높이=2r 한 단계 추가 ★3) (2) AB 를 주고 BC 를 묻는 역방향(★2) (3) 등변 조건을 빼고 AB 와 CD 를 따로 주면 성질 한 번으로 끝나 ★1~2 (4) 육각형으로 확장하면 79-23 유형(★4)."
```

```yaml
- id: GN-M32-77-12
  page: 77
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "마무리 STEP1 기본"
  summary: |
    사각형 ABCD가 반지름 4cm인 원 O에 외접하고 ∠B=90°, BC=10cm, CD=9cm일 때 접점 P에 대한 DP의 길이를 구하는 단답형.
  category: "직각 꼭짓점의 접선 길이=반지름 → C의 접선 길이 → 빼기"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "∠B=90° 이고 두 변이 접선이면 B 쪽 접선 길이가 반지름과 같다(정사각형)는 것으로 바꿔 읽어 수치 하나를 확보"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "원에 외접하는 사각형(직각이 있는 경우의 접선의 길이)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    B 에서 두 접선과 두 반지름이 정사각형을 이루므로 B 의 접선 길이는 r=4.
    그러면 C 쪽 접선 길이는 BC-4=6 이고, CD 위에서 DP=CD-6=3.
    반지름을 접선 길이로 바꿔 읽는 통찰 1개(EQV d2)·M_total 5 → STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "∠B=90° → B의 접선 길이=r → C의 접선 길이=BC-r → DP=CD-(BC-r)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$3\,\mathrm{cm}$'
  answer_source: "답지"
  figure: "crop:fig-77-12.png"
  latex: latex-bank/gn-m32/items/77-12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "r·BC·CD 를 바꿀 수 있음. 제약: (1) BC>r 이라야 C 의 접선 길이가 양수 (2) CD>BC-r 이라야 DP 가 양수 (3) 반지름이 BC 와 AB 양쪽에 맞게 원이 사각형 안에 들어가야 함."
    creative: "(1) AB 나 AD 를 묻기(대변 합 성질 추가 ★2) (2) 사각형의 둘레를 묻기(★3) (3) ∠B=90° 를 빼고 대신 AB 를 주면 대변 합 성질만으로 풀려 통찰 유형이 바뀜 (4) 80-e2·80-u2 처럼 대각선과 피타고라스를 얹으면 ★3."
```

### 중단원 마무리하기 STEP 2 발전 문제

```yaml
- id: GN-M32-78-13
  page: 78
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "마무리 STEP2 발전"
  summary: |
    AB가 원 O의 지름이고 AB=12cm, 현 CD=8cm일 때 삼각형 COD의 넓이를 구하는 단답형.
  category: "지름 → 반지름 → 중심에서 현까지 거리 → 삼각형 넓이"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "원의 중심과 현의 수직이등분(중심거리와 삼각형의 넓이)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    r=6, 중심에서 CD 에 내린 수선이 CD 를 이등분하므로 거리=√(6²-4²)=2√5, 넓이=½·8·2√5.
    도구가 하나뿐이고 계산도 한 줄이라 통찰 0·M_total 5 → v3.8 -1 규칙으로 STEP 2 출발점 ★3 에서 ★2 로 내렸다(1단 차).
    같은 구역의 다른 문항들보다 눈에 띄게 가볍다.
  tier: star_2
  mechanism_primary: "r=AB/2 → 중심거리=√(r²-(CD/2)²) → 넓이=½·CD·거리"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$8\sqrt{5}\,\mathrm{cm}^2$'
  answer_source: "답지"
  figure: "crop:fig-78-13.png"
  latex: latex-bank/gn-m32/items/78-13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AB·CD 를 바꿀 수 있음. 제약: (1) CD<AB (2) r²-(CD/2)² 가 완전제곱이면 정수 넓이(예: AB=20, CD=16 → 거리 6), 아니면 k√m 꼴 (3) CD 가 짝수여야 반현이 정수."
    creative: "(1) 넓이를 주고 CD 를 묻는 역방향(★3) (2) 삼각형 ACD 나 사각형 ACBD 의 넓이로 바꾸면 밑변·높이 배치가 한 단계 늘어 ★3 (3) 평행한 두 현으로 늘리면 78-14 유형 (4) 중심각까지 묻게 하면 특수각 단원과 결합해 ★4."
```

```yaml
- id: GN-M32-78-14
  page: 78
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "마무리 STEP2 발전"
  summary: |
    반지름 7cm인 원 O에서 AB∥CD이고 AB=CD=10cm일 때 두 현 사이의 거리. 5지선다.
  category: "현 하나의 중심거리 → 길이가 같은 평행 현은 중심 반대편 → 2배"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "길이가 같은 두 평행 현이 중심에 대해 대칭이므로 중심이 두 현의 한가운데 — 거리를 한 번만 구하고 2배 한다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "길이가 같은 두 평행한 현 사이의 거리(중심 대칭)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    중심에서 AB 까지 거리는 √(7²-5²)=2√6. AB=CD 이므로 CD 까지 거리도 2√6 이고 두 현은 중심 반대편.
    따라서 사이 거리는 4√6. 「같은 쪽에 있으면 두 현이 겹친다」를 알아채 2배로 가는 것이 함정 겸 통찰.
    대칭 활용 통찰 1개(SYM d1)·M_total 6 → STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "중심거리 d=√(r²-(AB/2)²) → AB=CD 이므로 중심 반대편 → 거리=2d"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "④"
  answer_source: "답지"
  figure: "crop:fig-78-14.png"
  latex: latex-bank/gn-m32/items/78-14.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "r·현의 길이를 바꿀 수 있음. 제약: (1) 현<지름 (2) r²-(현/2)² 가 완전제곱이면 정수 답(예: r=13, 현=24 → 거리 10) (3) 현이 짝수라야 반현이 정수 (4) 선택지에 2배 하지 않은 값(2√6)을 오답으로 넣어야 함정이 살아남."
    creative: "(1) 두 현의 길이를 다르게 주면 대칭이 깨져 거리의 합·차 두 경우가 생기고 I-MI 추가 ★4 (2) 거리를 주고 현의 길이를 묻는 역방향(★3) (3) 두 현 사이 띠 모양의 넓이를 묻기(★4)."
```

```yaml
- id: GN-M32-78-15
  page: 78
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "마무리 STEP2 발전"
  summary: |
    삼각형 ABC의 외접원의 중심 O에서 세 변에 내린 수선의 발이 D, E, F이고 OD=OE=OF, AB=6cm일 때 원 O의 넓이. 5지선다.
  category: "거리 상등 → 세 현 상등 → 정삼각형 → 30-60-90으로 반지름"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "OD=OE=OF(거리)를 AB=BC=CA(길이)로 옮겨 삼각형이 정삼각형임을 확정하는 2단 변환 — 이후 모든 수치가 여기서 나온다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "중심에서 같은 거리에 있는 현(정삼각형과 외접원의 반지름)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    세 변이 중심에서 같은 거리 → 세 현의 길이가 모두 같음 → 정삼각형(한 변 6).
    정삼각형의 중심각·수선을 쓰면 r=2√3(높이 3√3 의 2/3)이고 넓이는 12π.
    거리→길이→정삼각형 판정 통찰 1개(EQV d2)·M_total 6 → STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "OD=OE=OF → AB=BC=CA(정삼각형) → r=2/3·높이 → 넓이=πr²"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: "crop:fig-78-15.png"
  latex: latex-bank/gn-m32/items/78-15.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "한 변의 길이만 바꾸면 됨(넓이는 항상 πa²/3). 제약: a 가 3의 배수면 넓이가 π의 정수배로 떨어져 선택지가 깔끔함(a=6 → 12π, a=9 → 27π)."
    creative: "(1) 원의 넓이를 주고 한 변을 묻는 역방향(★3) (2) 내접원의 넓이나 두 원 사이 고리 넓이를 묻기(★4) (3) OD=OE 만 주면 이등변삼각형까지만 확정돼 조건이 부족해짐 — 조건 개수 감각을 묻는 서술형으로 전환 가능(★4)."
```

```yaml
- id: GN-M32-78-16
  page: 78
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "마무리 STEP2 발전"
  summary: |
    중심이 같은 두 원에서 큰 원의 현 AB가 작은 원의 접선이고 색칠한 부분(고리)의 넓이가 36π cm²일 때 AB의 길이. 5지선다.
  category: "고리 넓이 → R²-r² → 접점이 AB의 중점인 직각삼각형으로 반현"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "R, r 이 각각 정해지지 않아도 R²-r²=36 이 곧 반현의 제곱이라는 점으로 옮겨 두 반지름을 구하지 않고 끝낸다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "동심원에서 큰 원의 현이 작은 원의 접선인 경우(고리의 넓이)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    접점은 AB 의 중점이고 중심거리는 작은 원의 반지름 r 이므로 (AB/2)²=R²-r².
    고리의 넓이 π(R²-r²)=36π 에서 R²-r²=36 이니 반현이 6, AB=12.
    개별 반지름을 구하려다 막히는 자리라 「제곱의 차만 필요하다」는 환원이 핵심 통찰(EQV d2)·M_total 6 → STEP 2 ★3 유지.
  tier: star_3
  mechanism_primary: "접점=AB의 중점 → (AB/2)²=R²-r² → 고리 넓이 π(R²-r²) → AB=2√(넓이/π)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: "crop:fig-78-16.png"
  latex: latex-bank/gn-m32/items/78-16.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "고리 넓이만 바꾸면 됨. 제약: 넓이/π 가 완전제곱이어야 AB 가 정수(16π → 8, 36π → 12, 64π → 16). 두 반지름 값을 함께 주면 조건 과잉이 되니 주지 않는다."
    creative: "(1) AB 를 주고 고리 넓이를 묻는 역방향(★3) (2) 작은 원의 반지름을 추가로 주고 큰 원의 넓이를 묻게 하면 통찰이 사라져 ★2 (3) 현이 접선이 아니라 작은 원을 가로지르게 바꾸면 두 교점이 생겨 경우가 늘고 ★4."
```

```yaml
- id: GN-M32-78-17
  page: 78
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "마무리 STEP2 발전"
  summary: |
    A, B가 P에서 원 O에 그은 두 접선의 접점이고 ∠AOB=120°, OA=12cm일 때 각·길이·넓이에 관한 다섯 보기 중 옳지 않은 것 고르기.
  category: "접선⊥반지름 + 30-60-90 직각삼각형으로 보기 5개를 각각 검증"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "원 밖의 한 점에서 그은 두 접선(각·접선의 길이·넓이 종합)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ∠AOB=120° 이면 ∠AOP=60°, ∠APO=30° 이고 직각삼각형 AOP 가 30-60-90 이라 PO=2·OA, PA=√3·OA 가 차례로 나온다.
    AB 는 이등변삼각형 OAB(꼭지각 120°)의 밑변이라 √3·OA, △OAB 의 넓이는 밑변×높이÷2 로 36√3.
    보기 다섯 개를 각각 확인해야 해 단계 수는 많지만(Mₛ 3) 도구는 모두 같은 직각삼각형 하나라 통찰 0.
    노동량으로 STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "∠AOP=60° → 30-60-90 비로 PO·PA → 이등변 △OAB 의 밑변·높이 → 넓이 비교"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: "crop:fig-78-17.png"
  latex: latex-bank/gn-m32/items/78-17.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "OA 와 ∠AOB 를 바꿀 수 있음. 제약: ∠AOB 는 90°·120° 처럼 특수각이어야 중3 범위에서 길이가 나오고, OA 를 짝수로 두어야 넓이가 정수·√3 배로 정리됨. 오답 보기는 정답에서 √3 배나 2배만 어긋나게 만든다."
    creative: "(1) 「옳은 것」을 고르게 뒤집기(같은 노동 ★3) (2) 보기 하나를 색칠한 활꼴 넓이로 바꾸면 부채꼴 계산이 추가돼 ★4 (3) ∠AOB 를 미지수로 두고 PA:AB 비를 묻기(Mₐ 상승 ★4)."
```

```yaml
- id: GN-M32-78-18
  page: 78
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "마무리 STEP2 발전"
  summary: |
    AC, BD, CD가 반원 O의 접선(P는 CD의 접점)이고 AC=5cm, BD=3cm일 때 삼각형 COD의 넓이를 구하는 단답형.
  category: "접선 길이로 CD → 사다리꼴 보조선으로 지름 → 넓이=½·CD·r"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "CP=CA, DP=DB 로 빗변 CD=AC+BD 를 직접 얻는다 — 사다리꼴의 빗변을 따로 계산하지 않는다"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "사다리꼴 ABDC 를 D 에서 AC 에 내린 수선으로 직각삼각형으로 바꿔 AB=√(CD²-(AC-BD)²) 로 지름을 구한다(기하 배치 → 피타고라스 식)"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "반원의 세 접선(직각사다리꼴과 접선의 길이)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    CD=CP+DP=AC+BD=8 이 첫 수확이고, 사다리꼴에서 높이 AB 를 보조선 직각삼각형으로 뽑아 AB=2√15, r=√15.
    마지막으로 OP⊥CD 이므로 △COD 의 넓이는 ½·CD·r.
    통찰 2개(EQV d1 + RT d2)라 +1 후보지만 반원 3접선은 이 단원의 표준 골조(81-u5 와 같은 틀)여서 STEP 2 출발점 ★3 을 유지했다 — [분류 이슈] ★3/★4.
  tier: star_3
  mechanism_primary: "CD=AC+BD → 보조선으로 AB=√(CD²-(AC-BD)²) → r=AB/2 → 넓이=½·CD·r"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$4\sqrt{15}\,\mathrm{cm}^2$'
  answer_source: "답지"
  figure: "crop:fig-78-18.png"
  latex: latex-bank/gn-m32/items/78-18.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AC·BD 를 바꿀 수 있음(AB=2√(AC·BD)). 제약: (1) AC·BD 가 완전제곱이면 지름이 정수(AC=8, BD=2 → AB=8), 아니면 무리수 (2) AC≠BD 라야 사다리꼴이 되고 (3) 답 ½·CD·r 이 정리되는 값인지 확인."
    creative: "(1) 사다리꼴 ABDC 의 넓이나 둘레를 묻기(81-u5 골조 ★3) (2) AC 와 반지름을 주고 BD 를 묻는 역방향(★4) (3) 반원 대신 두 평행선 사이의 원으로 바꾸면 같은 골조가 「두 접선 사이 거리」 문제로 전환(★3)."
```

```yaml
- id: GN-M32-79-19
  page: 79
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "마무리 STEP2 발전"
  summary: |
    원 O가 삼각형 ABC의 내접원(접점 P, Q, R)이고 DE도 원 O의 접선일 때 AB=18cm, BC=16cm, CA=12cm에서 삼각형 DBE의 둘레의 길이. 5지선다.
  category: "작은 삼각형의 둘레를 접선 길이로 상쇄 → 2·BP"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "DE 위의 접점을 기준으로 D 쪽·E 쪽 접선 길이 상등을 대입하면 △DBE 의 둘레가 BP+BQ 로 통째로 상쇄된다 — D, E 의 위치를 몰라도 답이 정해진다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "삼각형의 내접원과 또 하나의 접선(작은 삼각형의 둘레)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    DE 의 접점을 기준으로 D 쪽·E 쪽 접선 길이가 각각 상쇄되어 △DBE 의 둘레=BP+BQ=2BP.
    BP 는 내접원 접선 길이 공식 (AB+BC-CA)/2=11 이므로 둘레 22.
    「D, E 가 어디에 있든 둘레가 일정」이라는 불변량 인식이 이 문항의 전부(EQV d2)·M_total 6 → STEP 2 출발점 ★3 유지. 빈출 태그.
  tier: star_3
  mechanism_primary: "접선 길이 상쇄 → △DBE 둘레=2·BP → BP=(AB+BC-CA)/2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: "crop:fig-79-19.png"
  latex: latex-bank/gn-m32/items/79-19.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 변을 바꿀 수 있음. 제약: (1) 삼각부등식 (2) AB+BC-CA 가 짝수라야 BP 가 정수 (3) DE 가 실제로 접선이 되도록 D 는 AB 위, E 는 BC 위여야 하고 세 접선 길이가 모두 양수."
    creative: "(1) DE 를 A 쪽·C 쪽으로 옮겨 △ADE, △CDE 의 둘레를 묻기(같은 골조 ★3) (2) 둘레를 주고 한 변을 묻는 역방향(★4) (3) 내접원의 반지름·넓이를 함께 묻기(★4) (4) 사각형에 외접하는 원으로 확장하면 다른 유형."
```

```yaml
- id: GN-M32-79-20
  page: 79
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "마무리 STEP2 발전"
  summary: |
    ∠A=90°인 직각삼각형 ABC의 내접원 O(접점 D, E, F)에서 BE=4cm, CE=6cm일 때 원 O의 반지름의 길이를 구하는 단답형.
  category: "AD=AF=r로 두 변을 r의 식으로 → 피타고라스 → 이차방정식"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "직각 꼭짓점 A 쪽 접선 길이가 반지름과 같다는 점으로 AB=BE+r, AC=CE+r 를 세워 미지수를 r 하나로 줄인다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "직각삼각형의 내접원의 반지름(접선의 길이로 세 변 표현)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ADOF 가 정사각형이라 AD=AF=r. BD=BE=4, CF=CE=6 이므로 AB=4+r, AC=6+r, BC=10.
    피타고라스에서 (4+r)²+(6+r)²=100 → r²+10r-24=0 → r=2(음근 버림).
    미지수를 r 하나로 모으는 통찰 1개(EQV d2)·M_total 7 → STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "AD=AF=r → AB=BE+r, AC=CE+r, BC=BE+CE → 피타고라스 이차방정식 → r"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2\,\mathrm{cm}$'
  answer_source: "답지"
  figure: "crop:fig-79-20.png"
  latex: latex-bank/gn-m32/items/79-20.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "BE·CE 를 바꿀 수 있음. 제약: (1) 이차방정식 r²+(BE+CE)r-2·BE·CE=0 의 양의 근이 유리수여야 하므로 판별식이 완전제곱(BE=3, CE=9 → r=3 / BE=6, CE=6 → r=6(√2-1) 은 무리수라 부적합) (2) 음근은 반드시 버림."
    creative: "(1) r=(AB+AC-BC)/2 공식을 직접 쓰게 하는 형태로 바꾸면 통찰이 줄어 ★2 (2) 내접원의 넓이·삼각형의 넓이 비를 묻기(★4) (3) 빗변과 반지름을 주고 두 변을 묻는 역방향(연립·I-BW 추가 ★4) (4) 81-u6 처럼 각을 주는 형태로 바꾸면 특수각 단원과 결합(I-XU)."
```

```yaml
- id: GN-M32-79-21
  page: 79
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "마무리 STEP2 발전"
  summary: |
    원 O가 직사각형 ABCD의 세 변과 E, F, G에서 접하고 DI와도 H에서 접할 때 AB=8cm, AD=10cm에서 GI의 길이. 5지선다.
  category: "반지름=AB/2 → 접선 길이로 DI=DH+HI → 직각삼각형 방정식"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "DI 를 DH+HI=(D의 접선 길이)+(I의 접선 길이)=6+GI 로 바꿔 쓰고, 같은 DI 를 직각삼각형 빗변으로도 써서 한 미지수 방정식을 만든다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "직사각형의 세 변에 접하는 원과 추가 접선(접선의 길이 + 피타고라스)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    세 변에 접하므로 r=AB/2=4 이고 각 변의 접점은 변을 4:6 또는 중점으로 나눈다. D 쪽 접선 길이는 10-4=6.
    GI=x 로 놓으면 DI=6+x 이면서 직각삼각형에서 DI²=(AD-?)²+... 가 되어 x=8/3.
    같은 선분을 접선 길이와 빗변 두 방식으로 표현해 방정식을 만드는 것이 핵심(EQV d2)·M_total 8 → STEP 2 출발점 ★3 유지(구역 내 최고 노동량).
  tier: star_3
  mechanism_primary: "r=AB/2 → D·I 의 접선 길이로 DI=DH+HI → 직각삼각형 피타고라스와 연립 → GI"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: "crop:fig-79-21.png"
  latex: latex-bank/gn-m32/items/79-21.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AB·AD 를 바꿀 수 있음. 제약: (1) AB 가 짝수라야 r 이 정수 (2) AD>AB 라야 원이 세 변에만 접하는 배치가 유지됨 (3) 방정식 해가 유리수로 떨어지는지 확인(답이 분수여도 선택지로 가능)."
    creative: "(1) DI 나 IH 의 길이를 묻기(같은 방정식 ★3) (2) 잘라 낸 △DCI 의 넓이를 묻기(한 단계 추가 ★4) (3) DI 를 접는 선으로 보고 종이접기 문장으로 바꾸면 I-RT 추가 ★4 (4) 직사각형을 사다리꼴로 바꾸면 배치 파악이 어려워 ★4."
```

### 중단원 마무리하기 STEP 3 실력 UP

```yaml
- id: GN-M32-79-22
  page: 79
  vendor_label: "중단원 마무리하기 STEP 3 실력 UP"
  vendor_level: "-"
  vendor_tags: []
  category_type: "마무리 STEP3 실력UP"
  summary: |
    반지름 10cm인 원 O를 현 AB를 접는 선으로 접었더니 호 AB가 중심 O를 지날 때 색칠한 부분(활꼴)의 넓이를 구하는 단답형.
  category: "접기 대칭 → 중심거리=r/2 → 중심각 120° → 부채꼴-삼각형"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "접는 선 AB 가 O 와 접힌 호 위의 대응점의 수직이등분선이라는 대칭으로 「중심에서 AB 까지 거리=r/2」를 끌어낸다"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "거리 r/2 를 30-60-90 직각삼각형으로 옮겨 중심각 ∠AOB=120° 와 현의 길이 10√3 을 동시에 확보"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "원을 현으로 접는 문제(중심까지의 거리와 활꼴의 넓이)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    접기 조건을 「O 에서 AB 까지의 거리가 반지름의 절반」으로 번역하는 것이 관문이고, 나머지는 특수각 직각삼각형.
    ∠AOB=120° 이므로 색칠한 활꼴=부채꼴(120°)-△OAB.
    통찰 2개(SYM d2 + EQV d1)·M_total 7 → STEP 3 출발점 ★4 유지. SYM 이 있어 ★4 저노출 조건도 충족.
  tier: star_4
  mechanism_primary: "접기 대칭 → 중심거리=r/2 → ∠AOB=120° → 부채꼴 넓이 - 삼각형 넓이"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\left(\dfrac{100}{3}\pi-25\sqrt{3}\right)\,\mathrm{cm}^2$'
  answer_source: "답지"
  figure: "crop:fig-79-22.png"
  latex: latex-bank/gn-m32/items/79-22.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "반지름만 바꿀 수 있음(넓이는 r² 에 비례). 제약: 접힌 호가 중심을 지난다는 조건이 거리 r/2 를 고정하므로 각은 항상 120° — 반지름을 짝수로 두어야 π 계수와 √3 계수가 분수로 지저분해지지 않음."
    creative: "(1) 색칠한 부분을 겹친 영역(렌즈)이나 남은 부분으로 바꾸기(넓이 조합 한 단계 추가 ★4) (2) 접힌 호가 중심이 아니라 반지름의 중점을 지나게 하면 거리가 3r/4 가 되어 특수각이 깨지고 중3 범위 밖(출제 금지) (3) 현의 길이를 묻기만 하면 ★3."
```

```yaml
- id: GN-M32-79-23
  page: 79
  vendor_label: "중단원 마무리하기 STEP 3 실력 UP"
  vendor_level: "-"
  vendor_tags: []
  category_type: "마무리 STEP3 실력UP"
  summary: |
    육각형 ABCDEF가 원 O에 외접하고 다섯 변의 길이가 주어졌을 때 나머지 한 변 EF의 길이를 구하는 단답형.
  category: "여섯 꼭짓점의 접선 길이를 한 칸 건너 짝지어 합 상등식 유도"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-PD
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "사각형에서 배운 「대변의 합이 같다」를 육각형의 「한 칸 건너 세 변의 합이 같다(AB+CD+EF=BC+DE+FA)」로 일반화해 발견한다"
    - step: 2
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "여섯 꼭짓점의 접선 길이 조건을 문자로 모두 세운 뒤 더해 한 등식으로 통합한다"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "원에 외접하는 다각형의 변의 길이(사각형 성질의 육각형 일반화)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    외접사각형 성질을 그대로 쓸 수 없고, 각 꼭짓점의 접선 길이를 a~f 로 놓아 여섯 변을 표현한 뒤
    한 칸 건너 세 변씩 더하면 양쪽이 a+b+c+d+e+f 로 같아진다는 것을 학생이 직접 만들어야 한다.
    그 뒤 대입은 산술 한 줄. 일반화 발견(PD d2)+조건 통합(CON d1) 2개·M_total 8 → STEP 3 출발점 ★4 유지.
    [분류 이슈] 카탈로그에서 77-11·77-12 의 외접사각형 유형과 통합할지 별도 「외접다각형 일반화」로 세울지 미정.
  tier: star_4
  mechanism_primary: "각 꼭짓점 접선 길이 a~f → 여섯 변을 표현 → AB+CD+EF=BC+DE+FA → EF"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: "$5$"
  answer_source: "답지"
  figure: "crop:fig-79-23.png"
  latex: latex-bank/gn-m32/items/79-23.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "다섯 변의 값을 바꿀 수 있음. 제약: (1) BC+DE+FA-(AB+CD) 가 양수여야 EF 가 양수 (2) 그림의 라벨(접점 위치)과 어긋나지 않게 인접한 두 변의 합이 너무 작지 않아야 함 (3) 값이 모두 한 자리면 암산 부담이 적어 통찰에 집중됨."
    creative: "(1) 묻는 변을 AB 나 CD 로 옮기기(같은 등식 ★4) (2) 팔각형으로 늘리기(같은 일반화 ★4) (3) 육각형의 둘레를 묻고 변 하나를 미지수로 주면 방정식 한 단계 추가(★4) (4) 오각형(홀수 변)으로 바꾸면 한 칸 건너 짝짓기가 성립하지 않아 반례 탐구형 서술형이 됨(★5 후보)."
```

```yaml
- id: GN-M32-79-24
  page: 79
  vendor_label: "중단원 마무리하기 STEP 3 실력 UP"
  vendor_level: "-"
  vendor_tags: []
  category_type: "마무리 STEP3 실력UP"
  summary: |
    가로 25cm, 세로 18cm인 직사각형 ABCD의 변에 접하는 두 원 O, O'이 외접할 때 원 O'의 반지름의 길이를 구하는 단답형.
  category: "두 원의 반지름·중심 위치 확정 → 외접 조건 중심거리 → 이차방정식 → 근 선별"
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「변에 접한다」를 중심에서 각 변까지의 거리가 반지름이라는 좌표 조건으로 바꿔 큰 원의 반지름 9 와 두 중심의 가로·세로 간격을 확정"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 원이 외접한다는 기하 조건을 중심 사이 거리=r+r' 로 옮기고, 그 거리를 가로·세로 간격의 직각삼각형으로 다시 써서 대수 방정식으로 만든다"
    - step: 3
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "이차방정식의 두 근 중 직사각형 안에 들어가지 않는 큰 근을 조건 위배로 기각한다"
  insight_count: 3
  depth_score: 4.00
  type_id: null
  type_hint: "직사각형에 내접·외접하는 두 원(중심거리와 반지름)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    세로 18 에서 큰 원의 반지름 9 가 먼저 결정되고, 작은 원은 두 변에 접하므로 중심 좌표가 r' 로 표현된다.
    외접 조건을 중심거리로 옮겨 직각삼각형을 세우면 r'²-68r'+256=0 이 되고 두 근 중 상자 밖 근을 버린다.
    통찰 3개에 I-VF 가 포함돼 형식상 ★5 자격은 되지만, 배치가 전형적이고 마지막 기각이 자명해 중3 실력 UP 의 ★4 로 두었다.
    [분류 이슈] ★4/★5.
  tier: star_4
  mechanism_primary: "세로에서 r=9 → 두 중심 좌표를 r' 로 표현 → 중심거리=9+r' 피타고라스 → 이차방정식 → 상자 안 근 채택"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$4\,\mathrm{cm}$'
  answer_source: "답지"
  figure: "crop:fig-79-24.png"
  latex: latex-bank/gn-m32/items/79-24.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "가로·세로를 바꿀 수 있음. 제약: (1) 세로가 짝수라야 큰 원의 반지름이 정수 (2) 이차방정식의 판별식이 완전제곱이어야 답이 유리수 (3) 가로가 충분히 길어야 두 원이 겹치지 않고 (4) 작은 근만 상자 안에 들어오도록 큰 근이 세로보다 커야 기각이 성립."
    creative: "(1) 작은 원의 반지름을 주고 직사각형의 가로를 묻는 역방향(I-BW 추가 ★5 후보) (2) 원을 셋으로 늘려 연쇄 외접(★5) (3) 두 원의 넓이의 합이나 색칠한 부분을 묻기(계산만 추가 ★4) (4) 직사각형을 정사각형으로 바꾸면 대칭이 생겨 ★3 으로 내려감."
```

### 서술형 대비 문제

```yaml
- id: GN-M32-80-e1
  page: 80
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 대비"
  summary: |
    원 O에서 AB⊥OE이고 AB=CD, OE=4cm, BE=5cm일 때 삼각형 OCD의 넓이를 구하는 서술형 [6점].
  category: "AB=CD → 중심거리 상등 → 밑변 CD·높이 OE로 넓이"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "AB=CD(길이 상등)를 「중심에서 CD 까지 거리도 OE 와 같다」는 거리 조건으로 옮겨 CD 쪽 높이를 계산 없이 확보"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "길이가 같은 두 현과 중심거리(삼각형의 넓이)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    OE⊥AB 이므로 AB=2BE=10 이고 AB=CD 에서 CD=10, 중심에서 CD 까지 거리도 4.
    넓이는 ½·10·4=20 한 줄. 서술형 예제라 계산은 최소이고 논증 서술이 목적.
    통찰 1개(EQV d1)·M_total 5 → 서술형 출발점 ★3 에서 -1 하여 ★2(같은 구역의 유제 80-u1 보다 한 단계 가볍다).
  tier: star_2
  mechanism_primary: "AB=2BE → CD=AB → 중심거리=OE → 넓이=½·CD·OE"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$20\,\mathrm{cm}^2$'
  answer_source: "본문 답"
  figure: "crop:fig-80-e1.png"
  latex: latex-bank/gn-m32/items/80-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "OE·BE 를 바꿀 수 있음(넓이는 항상 BE·OE·... 꼴로 정리됨). 제약: 반지름 √(OE²+BE²) 를 함께 묻지 않는 한 값은 자유롭지만, 넓이가 정수로 떨어지게 두 값 중 하나를 짝수로."
    creative: "(1) 반지름이나 원의 넓이를 함께 묻기(피타고라스 추가 ★3) (2) 80-u1 처럼 BE 대신 OC 를 주면 한 단계 늘어 ★3 (3) △OAB 와 △OCD 가 합동임을 보이는 증명형으로 바꾸면 논증 부담이 커져 ★3."
```

```yaml
- id: GN-M32-80-e2
  page: 80
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 대비"
  summary: |
    사각형 ABCD가 원에 외접하고 AC=15cm, BC=12cm, CD=13cm, ∠B=90°일 때 AD의 길이를 구하는 서술형 [5점].
  category: "직각삼각형에서 AB → 외접사각형 대변 합 상등 → AD"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "원의 접선 조건 전체를 AB+CD=AD+BC 한 등식으로 바꿔 접점 위치를 따지지 않고 AD 를 끌어낸다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "원에 외접하는 사각형의 대변의 길이의 합(직각삼각형 결합)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ∠B=90° 이므로 직각삼각형 ABC 에서 AB=√(15²-12²)=9 를 먼저 구하고,
    외접사각형 성질 AB+CD=AD+BC 에 대입해 9+13=AD+12.
    두 단원의 도구(피타고라스 + 외접사각형)를 순서대로 쓰는 표준 결합이라 통찰은 1개(EQV d1)·M_total 6 → 서술형 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "AB=√(AC²-BC²) → AB+CD=AD+BC → AD"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$10\,\mathrm{cm}$'
  answer_source: "본문 답"
  figure: "crop:fig-80-e2.png"
  latex: latex-bank/gn-m32/items/80-e2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AC·BC 를 피타고라스 수로, CD 를 자유롭게 바꿀 수 있음. 제약: (1) AC²-BC² 가 완전제곱(9-12-15 · 5-12-13 · 8-15-17) (2) AD=AB+CD-BC 가 양수 (3) 네 변으로 실제 외접사각형이 그려지도록 값 차이가 과하지 않게."
    creative: "(1) 80-u2 처럼 AD 를 주고 CD 를 묻는 배치(★3) (2) 사각형의 넓이나 내접원의 반지름을 묻기(★4) (3) ∠B=90° 를 빼고 대각선 둘을 주면 피타고라스를 쓸 수 없어 조건 재구성이 필요(★4)."
```

```yaml
- id: GN-M32-80-u1
  page: 80
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 대비"
  summary: |
    원 O에서 AB=CD, AB⊥OE이고 OE=6cm, OC=9cm일 때 삼각형 OCD의 넓이를 구하는 서술형 [6점].
  category: "반지름 OC → 피타고라스로 반현 → CD=AB → 넓이"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "AB=CD 를 중심거리 상등으로 옮겨 OE=6 을 △OCD 의 높이로 그대로 쓰고, 밑변은 반지름 OC 로 계산"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "길이가 같은 두 현과 중심거리(반지름에서 현 구하기)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    OC=9 가 반지름이므로 OB 도 9, 중심거리 6 에서 BE=√(81-36)=3√5, AB=6√5=CD.
    AB=CD 이므로 중심에서 CD 까지 거리도 6 이고 넓이는 ½·6√5·6=18√5.
    80-e1 과 같은 골조이지만 반현을 직접 구하는 단계가 더 있어 Mₖ 가 오르고 무리수 계산이 들어간다(EQV d1)·M_total 6 → 서술형 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "r=OC → BE=√(r²-OE²) → CD=AB=2BE → 넓이=½·CD·OE"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$18\sqrt{5}\,\mathrm{cm}^2$'
  answer_source: "답지"
  figure: "crop:fig-80-u1.png"
  latex: latex-bank/gn-m32/items/80-u1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "OC·OE 를 바꿀 수 있음. 제약: (1) OE<OC (2) OC²-OE² 가 완전제곱이면 정수 답(OC=10, OE=6 → 반현 8 → 넓이 48), 아니면 k√m 꼴 (3) 넓이 ½·2√(r²-d²)·d 가 정리되는지 확인."
    creative: "(1) 넓이를 주고 OE 를 묻는 역방향(이차방정식 ★4) (2) 두 현이 이루는 각이나 사각형 ABDC 의 넓이를 묻기(★4) (3) AB=CD 대신 「OE=OF」를 주면 80-e1 방향의 역 정리 서술이 됨(★3)."
```

```yaml
- id: GN-M32-80-u2
  page: 80
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 대비"
  summary: |
    사각형 ABCD가 원에 외접하고 ∠B=90°, AB=6cm, AC=3√13cm, AD=5cm일 때 DC의 길이를 구하는 서술형 [5점].
  category: "직각삼각형에서 BC → 외접사각형 대변 합 상등 → DC"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "접선 조건을 AB+CD=AD+BC 한 등식으로 바꿔 접점 위치를 따지지 않고 DC 를 끌어낸다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "원에 외접하는 사각형의 대변의 길이의 합(직각삼각형 결합)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ∠B=90° 이므로 BC=√((3√13)²-6²)=√81=9. 여기서 (3√13)²=117 을 정확히 다루는 것이 계산상 함정.
    외접사각형 성질 AB+CD=AD+BC 에 대입하면 6+CD=5+9.
    80-e2 와 같은 골조의 유제이며 무리수 제곱 처리만 더 무겁다(EQV d1)·M_total 6 → 서술형 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "BC=√(AC²-AB²) → AB+CD=AD+BC → CD"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$8\,\mathrm{cm}$'
  answer_source: "답지"
  figure: "crop:fig-80-u2.png"
  latex: latex-bank/gn-m32/items/80-u2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AB·AC 를 피타고라스 수로, AD 를 자유롭게. 제약: (1) AC²-AB² 가 완전제곱 (2) CD=AD+BC-AB 가 양수 (3) AC 를 k√m 꼴로 주면 제곱 처리 함정이 살아나고, 정수로 주면 ★2 수준으로 가벼워짐."
    creative: "(1) 사각형의 둘레를 묻기(한 줄 추가 ★3) (2) 내접원의 반지름을 묻기(∠B=90° 접선 길이 성질 추가 ★4) (3) 대각선 AC 대신 넓이를 주면 역추적이 필요해 ★4."
```

```yaml
- id: GN-M32-81-u3
  page: 81
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 대비"
  summary: |
    호 AB가 원의 일부이고 AB⊥CM, AM=BM, AB=12cm, CM=3cm일 때 이 원의 둘레의 길이를 구하는 서술형 [8점].
  category: "중심 복원 → 반지름 미지수 → 피타고라스 일차방정식 → 둘레"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "호만 있는 그림에서 「AB 의 수직이등분선 CM 의 연장선 위에 중심이 있다」로 옮겨 OA=OC=r, OM=r-CM 이라는 식 재료를 만든다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "호(원의 일부)에서 원의 반지름·둘레 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    중심 O 를 CM 의 연장선 위에 잡으면 r²=6²+(r-3)² 이고 r² 이 상쇄돼 6r=45, r=15/2.
    둘레는 2πr=15π. 76-03 과 같은 골조이나 반지름이 미지수라 Mₐ 가 오르고 답이 분수 반지름이다.
    중심 복원 통찰 1개(EQV d2)·M_total 7 → 서술형 출발점 ★3 유지. 배점 8점으로 구역 내 최고.
  tier: star_3
  mechanism_primary: "중심을 CM 연장선 위에 복원 → r²=(AB/2)²+(r-CM)² → r → 둘레 2πr"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$15\pi\,\mathrm{cm}$'
  answer_source: "답지"
  figure: "crop:fig-81-u3.png"
  latex: latex-bank/gn-m32/items/81-u3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AB·CM 을 바꿀 수 있음(r=((AB/2)²+CM²)/(2CM)). 제약: (1) AB 가 짝수 (2) r 이 정수로 떨어지려면 (AB/2)²+CM² 가 2CM 의 배수(AB=16, CM=4 → r=10) (3) CM<r 이어야 C 가 호 위."
    creative: "(1) 원의 넓이나 활꼴 넓이를 묻기(★4) (2) 반지름을 주고 CM 을 묻는 역방향(★3) (3) 「깨진 접시 조각에서 원래 지름 구하기」 실생활 문장제로 바꾸면 I-RT 추가 ★4 (4) 76-03 처럼 삼각형 넓이를 묻는 형태로 내리면 ★2."
```

```yaml
- id: GN-M32-81-u4
  page: 81
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 대비"
  summary: |
    A, B가 점 P에서 원 O에 그은 두 접선의 접점이고 PA=20cm, OA=10cm일 때 AB의 길이를 구하는 서술형 [7점].
  category: "접선⊥반지름으로 PO → 직각삼각형 넓이 이중 계산(또는 닮음)으로 AB의 절반"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "AB 를 직접 재지 않고 △PAO 의 넓이를 두 가지 밑변·높이(PA·OA 와 PO·AM)로 두 번 세어 AM 을 끌어낸다 — 길이 문제를 넓이 식으로 옮김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "원 밖의 한 점에서 그은 두 접선(접점을 잇는 현의 길이)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    OA⊥PA 이므로 PO=√(20²+10²)=10√5. AB 는 PO 와 수직으로 만나 이등분되므로 AM 을 구하면 된다.
    △PAO 의 넓이를 ½·PA·OA 와 ½·PO·AM 두 방식으로 세어 AM=PA·OA/PO, AB=2AM=8√5.
    닮음(△PAO∽△AMO)으로도 같은 식이 나오지만 어느 쪽이든 「직접 재지 않는다」는 전환이 관문(RT d2)·M_total 7 → 서술형 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "PO=√(PA²+OA²) → △PAO 넓이 이중 계산 → AM=PA·OA/PO → AB=2AM"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$8\sqrt{5}\,\mathrm{cm}$'
  answer_source: "답지"
  figure: "crop:fig-81-u4.png"
  latex: latex-bank/gn-m32/items/81-u4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "PA·OA 를 바꿀 수 있음. 제약: (1) PA²+OA² 가 완전제곱이면 PO 가 정수라 답이 깔끔(PA=8, OA=6 → PO=10 → AB=9.6 은 소수라 부적합 · PA=12, OA=5 → PO=13) (2) 2·PA·OA/PO 가 정수 또는 정리되는 무리수인지 확인."
    creative: "(1) 사각형 PAOB 의 넓이나 △PAB 의 넓이를 묻기(한 단계 추가 ★4) (2) AB 를 주고 OA 를 묻는 역방향(★4) (3) ∠APB 를 특수각으로 주면 78-17 처럼 30-60-90 으로 바로 풀려 통찰이 사라짐(★2~3)."
```

```yaml
- id: GN-M32-81-u5
  page: 81
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 대비"
  summary: |
    AB가 반원 O의 지름이고 AD, BC, CD가 반원의 접선(E는 CD의 접점)일 때 AD=8cm, BC=4cm에서 사각형 ABCD의 둘레의 길이를 구하는 서술형 [7점].
  category: "접선 길이로 CD → 사다리꼴 보조선으로 AB → 네 변 합"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "DE=DA, CE=CB 로 CD=AD+BC 를 바로 얻는다 — 접점 E 의 위치를 구하지 않는다"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "사다리꼴에서 C 를 지나 AB 에 평행한 보조선을 그어 AB=√(CD²-(AD-BC)²) 로 지름을 대수적으로 계산한다"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "반원의 세 접선(직각사다리꼴의 둘레)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    CD=AD+BC=12 가 먼저 나오고, 직각사다리꼴에서 보조선 직각삼각형으로 AB=√(12²-4²)=8√2.
    둘레는 AD+BC+CD+AB=24+8√2. 78-18 과 완전히 같은 골조의 서술형 판이다.
    통찰 2개(EQV d1 + RT d2)라 +1 후보지만 78-18 과의 일관성을 위해 서술형 출발점 ★3 유지 — [분류 이슈] ★3/★4.
  tier: star_3
  mechanism_primary: "CD=AD+BC → AB=√(CD²-(AD-BC)²) → 둘레=AD+BC+CD+AB"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$(24+8\sqrt{2})\,\mathrm{cm}$'
  answer_source: "답지"
  figure: "crop:fig-81-u5.png"
  latex: latex-bank/gn-m32/items/81-u5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AD·BC 를 바꿀 수 있음(AB=2√(AD·BC)). 제약: (1) AD·BC 가 완전제곱이면 지름이 정수(AD=9, BC=4 → AB=12) (2) AD≠BC 라야 사다리꼴 (3) 둘레가 정수+무리수로 갈리지 않게 하려면 AD·BC 를 완전제곱으로."
    creative: "(1) 사다리꼴의 넓이를 묻기(78-18 의 △COD 대신 · ★3) (2) 반지름을 주고 BC 를 묻는 역방향(★4) (3) 접선 CD 가 지름과 이루는 각을 특수각으로 주면 삼각비 단원과 결합해 ★4."
```

```yaml
- id: GN-M32-81-u6
  page: 81
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 대비"
  summary: |
    원 O가 직각삼각형 ABC의 내접원(접점 D, E, F)이고 빗변 AC=4cm, ∠C=30°일 때 원 O의 반지름의 길이를 구하는 서술형 [8점].
  category: "30-60-90 비로 두 변 → 직각삼각형 내접원 r=(a+b-c)/2"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "각 조건만 주어져 길이가 없는 상태에서 특수각 삼각비(30-60-90 변의 비 · 02단원)를 끌어와 두 변을 확보한다 — 접선 단원의 도구만으로는 풀이가 시작되지 않는다"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "직각 꼭짓점 쪽 접선 길이가 반지름과 같다(정사각형)는 것으로 r=(두 변의 합-빗변)/2 로 바꿔 쓴다"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "직각삼각형의 내접원의 반지름(특수각으로 변을 구하는 경우)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    빗변 AC=4 와 ∠C=30° 에서 30-60-90 비로 두 변이 2 와 2√3 으로 정해지고, r=(2+2√3-4)/2=√3-1.
    각 → 길이로 넘어가는 다리를 다른 단원(특수각 삼각비)에서 가져와야 해 XU 로 셌고, 직각 위치가 발문에 없어 그림에서 읽어야 하는 함정이 있다.
    통찰 2개(XU d2 + EQV d1)·M_total 7 → 서술형 출발점 ★3 에서 +1 하여 ★4. 이 구역에서 유일한 ★4 이며 배점도 8점.
  tier: star_4
  mechanism_primary: "AC·∠C → 30-60-90 비로 두 변 → r=(두 변의 합-빗변)/2"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$(\sqrt{3}-1)\,\mathrm{cm}$'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-81-u6.png"
  latex: latex-bank/gn-m32/items/81-u6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "빗변의 길이와 각을 바꿀 수 있음. 제약: (1) 각은 30°·45°·60° 만 가능(중3 특수각) (2) 45° 로 바꾸면 두 변이 같아져 r=(√2-1)·(빗변/√2) 꼴 (3) 빗변을 2의 배수로 두어야 r 이 정리됨 (4) 답이 무리수이므로 「유리화까지」를 채점 기준에 명시."
    creative: "(1) 반지름을 주고 빗변을 묻는 역방향(I-BW 추가 ★4~5) (2) 내접원의 넓이나 삼각형과의 넓이 비를 묻기(★4) (3) 각 대신 두 변을 주면 79-20 유형으로 내려가 XU 가 사라짐(★3) (4) 외접원 반지름까지 함께 묻기(★4)."
```

## 표본 판정 요약 (32문)

- ★ 분포: ★1 1 · ★2 13 · ★3 14 · ★4 4 · ★5 0
- 통찰형 23 · 절차형 9 · premium 0
- 구역별 ★ 중앙값: STEP 1 기본 ★2(12문) · STEP 2 발전 ★3(9문) · STEP 3 실력 UP ★4(3문) · 서술형 대비 ★3(8문). 벤더 구역 출발점과 대체로 일치하고, 내린 것은 76-04(★2→★1) · 78-13(★3→★2) · 80-e1(★3→★2) 셋, 올린 것은 81-u6(★3→★4) 하나다.
- 통찰 유형 분포: I-EQV 17 · I-RT 4 · I-SYM 2 · I-PD 1 · I-CON 1 · I-XU 1 · I-VF 1 (총 27 라벨 / 23문). 이 단원의 통찰은 대부분 **거리 조건 ↔ 길이 조건 ↔ 각 조건을 서로 옮기는 동치 변환(I-EQV)** 이고, 보조선을 그어 기하 배치를 대수식으로 옮기는 I-RT 가 그다음이다.
- type_hint 상위 5: 「원의 중심과 현의 수직이등분(피타고라스)」 6(76-01·76-02·76-03·78-13·78-14·81-u3) · 「중심에서 같은 거리에 있는 현의 길이 상등」 5(76-04·76-05·78-15·80-e1·80-u1) · 「원 밖의 한 점에서 그은 두 접선」 5(76-06·77-07·77-08·78-17·81-u4) · 「원에 외접하는 다각형의 대변의 합」 5(77-11·77-12·79-23·80-e2·80-u2) · 「삼각형의 내접원과 접선의 길이」 5(77-09·77-10·79-19·79-20·81-u6).
- 나머지 6문은 단발 유형이다: 78-16(동심원과 고리) · 78-18·81-u5(반원의 세 접선) · 79-21(직사각형+추가 접선) · 79-22(원 접기) · 79-24(직사각형 안 두 원의 외접).
- 그림: 32문 전부 그림 문항(`crop:fig-<id>.png`). 발문만으로 배치가 확정되지 않아 크롭을 실제로 연 문항은 77-07(두 원과 일차식 라벨) · 77-08(∠x 의 위치) · 79-23(육각형 다섯 변의 값) 셋이다.
- 무리수 답 9문(78-13·78-14·78-18·79-22·80-u1·81-u4·81-u5·81-u6 등)으로, 숫자 변형 시 「피타고라스 결과가 정리되는가」가 가장 강한 제약이다.

## 분류 이슈 목록

판정이 애매하거나 벤더 구역 신호와 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-M32-76-04 | STEP 1 기본(★2 출발)이지만 정리 한 줄·M_total 3·통찰 0 이라 v3.8 -1 규칙대로 ★1 로 내림. 이 범위 유일한 ★1 | ★1 / ★2 |
| GN-M32-78-13 | STEP 2 발전(★3 출발)이지만 도구 하나·계산 한 줄이라 ★2 로 내림. 같은 구역 다른 문항과 체감 차가 큼 | ★2 / ★3 |
| GN-M32-78-18 | 통찰 2개(EQV+RT)로 +1 후보이나 반원 3접선은 이 단원의 표준 골조라 ★3 유지 | ★3 / ★4 |
| GN-M32-81-u5 | 78-18 과 같은 골조의 서술형 판. 같은 이유로 ★3 유지(둘을 함께 올리거나 함께 두어야 일관됨) | ★3 / ★4 |
| GN-M32-79-23 | 외접사각형 성질의 육각형 일반화. 카탈로그에서 77-11·77-12 와 한 유형으로 묶을지 「외접다각형 일반화」로 따로 세울지 미정 | ★4 |
| GN-M32-79-24 | 통찰 3개 + I-VF 로 형식상 ★5 자격을 갖추지만 배치가 전형적이고 근 기각이 자명해 ★4 로 둠(novelty_score 0 이라 ★5 는 RED) | ★4 / ★5 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: (1) 「중심과 현의 수직이등분」은 *현을 구하는 형*(76-01·76-03·78-13)과 *반지름을 미지수로 놓는 형*(76-02·81-u3)이 학생 체감이 달라 분리하는 편이 낫다. (2) 「직각삼각형의 내접원 반지름」은 *두 변이 주어진 형*(79-20)과 *각이 주어져 특수각을 끌어와야 하는 형*(81-u6, I-XU)이 다른 유형이다. (3) 「반원의 세 접선」(78-18·81-u5)은 이 범위에서 2회 반복되고 보조선 착안이 고정돼 독립 유형 자격이 충분하다.
- **통합해도 될 유형**: (1) 「중심에서 같은 거리에 있는 현」 5문(76-04·76-05·78-15·80-e1·80-u1)은 모두 *거리 상등 → 길이 상등* 한 다리를 건너는 같은 골조라 한 유형 + 난이도 층(★1~★3)으로 묶으면 된다. (2) 「외접사각형 대변의 합」(77-11·77-12·80-e2·80-u2)도 한 유형이며, 79-23(육각형)만 상위 변형으로 붙이면 충분하다. (3) 「원 밖의 한 점에서 그은 두 접선」은 각을 묻는 형(77-08·78-17)과 길이를 묻는 형(76-06·77-07·81-u4)을 한 유형의 두 갈래로 둔다.
- **base_star 초안 제안**: 위 통합 기준으로 유형을 세울 때 base ★ 는 「중심과 현」 2 · 「같은 거리의 현」 2 · 「두 접선」 2 · 「외접다각형」 2 · 「내접원 접선 길이」 3 · 「반원 세 접선」 3 · 단발 유형(접기·동심원·두 원 외접) 4 가 이 범위의 실제 체감에 맞는다.
