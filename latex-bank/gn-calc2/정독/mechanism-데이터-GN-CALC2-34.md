---
name: mechanism-데이터-GN-CALC2-34
description: 개념원리 미적분Ⅱ 34 입체도형의 부피(1/1 · 272~276쪽 · 15문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 미적분Ⅱ · 전사본 latex-bank/gn-calc2
  section: 34 입체도형의 부피
  unit_code: "34"
  part: "1/1"
  extract_range: "272~276쪽 · 272-559~276-570"
  total_problems: 15
  unit_total: 15
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-calc2/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-calc2/items/<id>.tex
  image_source: latex-bank/gn-calc2/figures/ (crops.json)
---

# 개념원리 미적분Ⅱ · 34 입체도형의 부피 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 미적분Ⅱ 34단원 「입체도형의 부피」 272~276쪽 전 15문항을 다룬다. 구역은 「개념원리 익히기」(통번호 · 개념 확인) 2문, 「필수·발전 예제」(쪽-eN 상자 발문 + 딸린 확인체크) 8문, 「연습문제 STEP 1」 1문 · 「STEP 2」 3문 · 「실력 UP」 1문이다. 개념원리 고등의 난이도 층은 구역과 예제 태그(필수 ★2 · 발전 ★3 · STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4)로 드러나며, 이 파일은 그 출발점에서 M_total·통찰로 ±1 조정한 라벨을 기록한다.

단원 골조는 셋뿐이다. (가) 밑면과 평행한 단면의 넓이 S(x)를 높이 구간에서 적분하는 형, (나) 곡선으로 둘러싸인 평면도형을 밑면으로 하고 x축에 수직인 단면(정사각형·정삼각형·반원)의 넓이를 y로 표현해 적분하는 형, (다) 원기둥·반구·기울인 용기를 비스듬한 평면으로 자른 쐐기의 부피형이다. 여기에 V(x)를 주고 S(x)=V′(x)로 되돌리는 역방향 두 문항이 섞여 있다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(골조 한 줄) · `insights[]`(통찰 유형·depth) · `variation_notes`(바꿔도 되는 수와 제약 · 골조 유지 변형)를 채웠다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-CALC2-272-559
  page: 272
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    물의 높이가 x cm일 때 수면의 넓이가 3√x cm²인 그릇. 물의 높이가 8 cm일 때 물의 부피를 구하는 과정의 빈칸(S(x) · 피적분함수 · 부정적분 · 값) 채우기.
  category: "수면의 넓이 S(x) → 0~8 적분 → 부피"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "단면이 밑면과 평행한 경우의 입체도형의 부피(수면의 넓이 적분)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    수면의 넓이가 발문에 그대로 주어지고 빈칸이 공식의 자리를 알려준다. 적분 한 단계(2x^{3/2})만 하면 끝. 개념원리 익히기 구역·통찰 없음·M_total 3 → ★1.
  tier: star_1
  mechanism_primary: "S(x)=3√x → V=∫(0→8) 3√x dx → [2x^{3/2}] → 32√2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$3\sqrt{x}$, $3\sqrt{x}$, $2x^{\frac{3}{2}}$, $32\sqrt{2}$'
  answer_source: "답지"
  figure: crop:fig-272-559.png
  latex: latex-bank/gn-calc2/items/272-559.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수면 넓이의 계수와 지수(3√x → 2x, 4x^{3/2}, x²)와 물의 높이(8 → 4, 9, 27)를 바꿀 수 있다. 제약: 적분 상한에서 값이 깔끔하게 떨어지도록 지수와 상한을 맞춘다(무리수 지수면 상한을 완전제곱·완전세제곱으로). S(x)≥0 이 구간 전체에서 성립해야 한다."
    creative: "(1) 빈칸을 없애고 부피만 묻기(★1 유지) (2) 부피를 주고 물의 높이를 되묻기(I-BW d1 · ★2) (3) 수면의 넓이를 그림에서 읽게 하는 조건(원뿔대 등)으로 바꾸면 도형→식 전환이 생겨 ★2."
```

```yaml
- id: GN-CALC2-272-560
  page: 272
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    높이 10 cm인 용기를 높이 x 지점에서 밑면과 평행하게 자른 단면이 한 변 √(3x²+2) cm인 정사각형일 때, 용기의 부피를 구하는 과정의 빈칸 채우기.
  category: "한 변 → 단면의 넓이(제곱) → 0~10 적분"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "단면이 밑면과 평행한 경우의 입체도형의 부피(정사각형 단면)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    한 변을 제곱해 근호가 사라지면 다항함수 적분 한 줄. 적분 구간(0~10)도 높이로 바로 주어진다. 개념원리 익히기·통찰 없음·M_total 3 → ★1.
  tier: star_1
  mechanism_primary: "한 변 √(3x²+2) → S(x)=3x²+2 → ∫(0→10) → [x³+2x] → 1020"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$3x^2+2$, $10$, $3x^2+2$, $x^3+2x$, $10$, $1020$'
  answer_source: "답지"
  figure: crop:fig-272-560.png
  latex: latex-bank/gn-calc2/items/272-560.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "한 변의 식(√(3x²+2) → √(2x+1), √(x³+4))과 용기의 높이(10 → 5, 6)를 바꿀 수 있다. 제약: 제곱한 뒤 다항식이 되어야 적분이 한 줄로 끝나고, 근호 안이 0≤x≤h 에서 양수여야 한다."
    creative: "(1) 단면을 정사각형 대신 원(반지름 √(…))으로 바꾸면 π가 붙을 뿐 골조 동일(★1) (2) 단면을 정삼각형으로 하면 √3/4 계수가 추가돼 ★2 (3) 부피를 주고 용기의 높이를 되묻기(I-BW d1 · ★2)."
```

### 필수·발전 예제

```yaml
- id: GN-CALC2-273-e9
  page: 273
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ 높이 ln4인 물통에서 물의 높이가 x일 때 수면이 반지름 e^x인 원일 때 가득 채운 물의 부피. ⑵ 높이 x 지점의 단면이 한 변 1/√(x+2)인 정사각형인 입체의 부피가 2ln2일 때, 입체의 높이.
  category: "단면의 넓이 → 적분(⑴) / 부피 조건 → 상한 역산(⑵)"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 2
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "⑵ 부피 2ln2 라는 결과 조건에서 적분의 상한(높이)을 미지수로 두고 역추적"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "단면이 밑면과 평행한 경우의 입체도형의 부피(순방향·상한 역산)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ S=πe^{2x} 를 0~ln4 에서 적분해 (π/2)(16-1). ⑵ S=1/(x+2) 의 적분이 ln((h+2)/2)=ln4 → h=6. 순방향 한 문항과 역방향 한 문항을 나란히 놓아 상한 역산을 처음 겪게 하는 필수 예제. 통찰 1개(BW d1)·M_total 6 → 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "⑴ S=π(e^x)² → ∫(0→ln4) → 15π/2 / ⑵ S=1/(x+2) → ∫(0→h)=ln((h+2)/2)=2ln2 → h=6"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $\dfrac{15}{2}\pi$ ⑵ $6$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/273-e9.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 반지름을 e^x → e^{2x}, 2^x 로, 높이를 ln4 → ln3, ln9 로. ⑵ 한 변을 1/√(x+2) → 1/√(2x+1) 로, 목표 부피를 2ln2 → ln5 로. 제약: ⑴은 e^{2x} 적분 뒤 값이 유리수배 π가 되도록 상한을 ln(정수)로, ⑵는 ln 방정식의 해가 양의 정수 높이가 되도록 목표 부피를 ln(정수)로 맞춘다."
    creative: "(1) ⑵에서 높이 대신 단면 식의 상수(x+a 의 a)를 미지수로 두면 같은 BW 골조에 대입 위치만 바뀜(★2) (2) ⑴의 수면을 원이 아니라 정사각형·정삼각형으로 바꾸면 계수만 달라짐(★2 유지) (3) 두 소문항을 합쳐 「높이 h까지 채운 부피가 V(h)일 때 V(h)=k를 만족하는 h」로 만들면 지수·로그 방정식이 붙어 ★3."
```

```yaml
- id: GN-CALC2-273-561
  page: 273
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    높이 5인 입체도형을 높이 x 지점에서 밑면과 평행하게 자른 단면의 넓이가 ln(x+1)일 때, 입체도형의 부피.
  category: "단면의 넓이 ln(x+1) → 부분적분 → 부피"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "단면이 밑면과 평행한 경우의 입체도형의 부피(로그함수 단면)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    공식 적용 자체는 한 줄이고 부담은 ∫ln(x+1)dx 의 부분적분(또는 x+1=t 치환)에 있다. 착안 없이 표준 적분 기법을 쓰므로 통찰 0. M_total 5 라 -1 후보지만, 로그의 부분적분이 단원 안에서 계산 부담을 실제로 올리므로 확인체크 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "V=∫(0→5) ln(x+1)dx → 부분적분 [(x+1)ln(x+1)-(x+1)] → 6ln6-5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$6\ln 6-5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/273-561.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "높이(5 → 2, e-1)와 단면 식(ln(x+1) → ln(2x+1), xe^x, x·ln x)을 바꿀 수 있다. 제약: 부분적분 한 번으로 끝나는 꼴이어야 하고, 상한에서 로그의 진수가 정수가 되도록 높이를 잡는다(5 → ln6)."
    creative: "(1) 단면을 한 변 √(ln(x+1))인 정사각형으로 주면 제곱 단계가 하나 늘 뿐 같은 골조(★2) (2) 부피를 주고 높이를 역산시키면 초월방정식이 되어 수치해가 필요하므로 부적합 — 대신 단면 식의 계수를 역산시키면 ★3 (3) 단면 넓이를 구간별로 다르게 주면 적분 분할이 생겨 ★3."
```

```yaml
- id: GN-CALC2-273-562
  page: 273
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    물의 높이가 x cm일 때 채워진 물의 부피가 (x³-2x²+3x) cm³인 용기. 물의 높이가 3 cm일 때 수면의 넓이.
  category: "부피 함수 V(x) → 미분 → 수면의 넓이 S(3)"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "V(x)=∫S(t)dt 라는 관계를 S(x)=V′(x) 로 뒤집어, 적분 대신 미분으로 수면의 넓이를 얻는 동치 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "부피 함수의 미분 → 단면(수면)의 넓이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    단원의 공식을 반대 방향으로 쓰는 문항. V(x)를 미분해 S(x)=3x²-4x+3, x=3 대입으로 18. 계산은 가볍고 부담은 전부 「적분이 아니라 미분」이라는 방향 판단에 있다. 확인체크 ★2 출발·통찰 1개(EQV d1) → ★2. [분류 이슈] 미적분의 기본정리를 본문 공식으로 배운 직후라 이 방향 전환을 통찰로 셀지 표준 절차로 셀지 은행 전체 기준이 필요하다(276-567 과 같은 골조).
  tier: star_2
  mechanism_primary: "S(x)=V′(x)=3x²-4x+3 → x=3 대입 → 18"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$18\,\mathrm{cm}^2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/273-562.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "부피 함수의 계수(x³-2x²+3x → 2x³+x²-x)와 대입할 높이(3 → 1, 2)를 바꿀 수 있다. 제약: V(0)=0 이어야 물리적으로 맞고, V가 정의역에서 증가해야(V′>0) 수면의 넓이가 양수가 된다."
    creative: "(1) 수면의 넓이를 주고 그때의 높이를 되묻기(V′(x)=k 방정식 · ★3) (2) 부피 함수를 지수·로그로 바꾸면 미분 부담이 올라 ★3(276-567 이 그 형태) (3) 「높이가 1 cm에서 3 cm로 늘 때 수면 넓이의 평균변화율」로 바꾸면 V″까지 필요해 ★3."
```

```yaml
- id: GN-CALC2-274-e10
  page: 274
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    곡선 y=-x²+x (0≤x≤1)와 x축으로 둘러싸인 도형을 밑면으로 하고, x축에 수직인 단면이 모두 반원인 입체도형의 부피.
  category: "밑면의 세로 길이 y → 반원의 넓이 → 0~1 적분"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "밑면(평면도형)의 세로 길이 y 를 단면(반원)의 지름으로 읽어, 기하 상황을 넓이 함수 S(x)=πy²/8 로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "단면이 밑면과 수직인 경우의 입체도형의 부피(곡선 밑면·반원 단면)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    밑면 도형의 세로 길이가 곧 단면의 지름이라는 대응이 핵심이고, 반지름을 y/2 로 반으로 줄이는 데서 T-단위형 함정이 하나 생긴다. 이후는 (x-x²)² 전개 적분. 통찰 1개(RT d1)이라 +1 조건(통찰 2개 이상 또는 depth 3)에 못 미쳐 필수 예제 출발점 ★2 유지. [분류 이슈] M_total 7 과 지름·반지름 함정 때문에 학생 체감은 ★3 쪽이다.
  tier: star_2
  mechanism_primary: "지름 y=-x²+x → S(x)=(π/2)(y/2)²=πy²/8 → ∫(0→1) (x-x²)² dx=1/30 → π/240"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{\pi}{240}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/274-e10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "곡선(-x²+x → -x²+4x, sin x)과 구간(0≤x≤1 → 0≤x≤4, 0≤x≤π)을 바꿀 수 있다. 제약: 구간에서 y≥0 이어야 단면이 존재하고, 구간의 양 끝이 곡선과 x축의 교점이어야 「둘러싸인 도형」이 닫힌다. y² 의 적분이 손으로 끝나는 꼴을 유지한다."
    creative: "(1) 단면을 반원 대신 정사각형·정삼각형으로 바꾸면 계수만 달라짐(★2 · 274-563·564 가 그 형태) (2) 단면을 두 곡선 사이의 길이로 주면(위 곡선-아래 곡선) 단계가 하나 늘어 ★3 (3) 부피를 주고 곡선의 계수를 역산시키면 I-BW 가 붙어 ★3(276-568 이 그 형태)."
```

```yaml
- id: GN-CALC2-274-563
  page: 274
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    곡선 y=2√(sin x) (0≤x≤π)와 x축으로 둘러싸인 도형을 밑면으로 하고, x축에 수직인 단면이 모두 정사각형인 입체도형의 부피.
  category: "한 변 y → S=y²(근호 소거) → 0~π 적분"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "단면이 밑면과 수직인 경우의 입체도형의 부피(곡선 밑면·정사각형 단면)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    직전 필수 예제의 골조를 그대로 쓰되 단면이 정사각형이라 S=y² 이고, 제곱하면 근호가 사라져 ∫4sin x dx 한 줄로 끝난다. 착안 없이 공식 대입이므로 통찰 0. [분류 이슈] M_total 4·절차형이라 -1 후보지만 확인체크 구역 신호를 살려 ★2 로 둔다.
  tier: star_2
  mechanism_primary: "한 변 y=2√(sin x) → S=y²=4sin x → ∫(0→π) 4sin x dx → 8"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/274-563.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "곡선의 계수와 근호 안(2√(sin x) → 3√(cos x) on [-π/2, π/2], √(e^x))과 구간을 바꿀 수 있다. 제약: 구간에서 근호 안이 0 이상이고 양 끝이 x축과 만나야 하며, 제곱한 뒤 기본 적분 꼴이 되어야 한다."
    creative: "(1) 단면을 정삼각형으로 바꾸면 √3/4 계수만 추가(★2) (2) 구간을 0≤x≤π/2 로 잘라 반쪽만 구하게 하면 대칭 인식이 생겨 ★2 유지 (3) 부피를 주고 곡선 앞 계수를 역산시키면 ★3."
```

```yaml
- id: GN-CALC2-274-564
  page: 274
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    곡선 y=2/(x+1) (0≤x≤2)와 x축, 두 직선 x=0, x=2로 둘러싸인 도형을 밑면으로 하고, x축에 수직인 단면이 모두 정삼각형인 입체도형의 부피.
  category: "한 변 y → 정삼각형 넓이 (√3/4)y² → 0~2 적분"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "단면이 밑면과 수직인 경우의 입체도형의 부피(곡선 밑면·정삼각형 단면)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    정삼각형 넓이 공식 (√3/4)a² 를 떠올리면 피적분함수가 √3/(x+1)² 이고, (x+1)^{-2} 의 적분은 표준. 밑면이 직선 두 개로 닫혀 있어 구간을 찾는 부담도 없다. 통찰 0·M_total 5 → 확인체크 ★2 유지.
  tier: star_2
  mechanism_primary: "한 변 y=2/(x+1) → S=(√3/4)y²=√3/(x+1)² → ∫(0→2) → √3[-1/(x+1)] → 2√3/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{2\sqrt{3}}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/274-564.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자·분모(2/(x+1) → 3/(2x+1), 1/√(x+1))와 구간(0~2 → 1~3)을 바꿀 수 있다. 제약: 제곱한 뒤 유리함수 적분이 손으로 끝나야 하고(지수가 -2 이하이거나 1/(x+a) 꼴), 구간에서 분모가 0이 되지 않아야 한다."
    creative: "(1) 단면을 정사각형·반원으로 바꾸면 계수만 달라짐(★2) (2) 단면을 「빗변이 y인 직각이등변삼각형」으로 주면 한 변을 y/√2 로 환산하는 단계가 붙어 ★3 (3) 두 곡선 사이를 밑면으로 하면 한 변이 차 y₁-y₂ 가 되어 ★3."
```

```yaml
- id: GN-CALC2-275-e11
  page: 275
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["발전"]
  category_type: "발전 예제"
  summary: |
    밑면의 반지름 2, 높이 4인 원기둥을 밑면의 중심을 지나고 밑면과 60°를 이루는 평면으로 자를 때 생기는 두 입체 중 작은 것의 부피.
  category: "절단면과 밑면의 교선 설정 → 교선에 수직인 단면(직사각형)의 넓이 → 적분"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "비스듬히 잘린 입체를 좌표로 옮겨, 교선에 수직인 방향의 단면이 가로 2√(4-x²)·세로 x·tan60°인 직사각형임을 읽어내는 기하→대수 전환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "비스듬한 평면으로 자른 쐐기의 부피(원기둥)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    적분 공식은 같지만 단면을 스스로 만들어야 하는 첫 문항. 교선을 축으로 잡을지 교선에 수직인 방향을 축으로 잡을지 정한 뒤 현의 길이와 절단면 높이를 결합해야 한다. 높이 4가 2·tan60°=2√3 보다 커서 잘린 쪽이 쐐기로 닫히는지 확인하는 범위 함정도 하나 있다. 발전 예제 ★3 출발·통찰 1개(RT d2) → ★3 유지.
  tier: star_3
  mechanism_primary: "교선에서 거리 x → 단면 = 2√(4-x²) × x·tan60° 직사각형 → ∫(0→2) 2√3·x√(4-x²) dx → 16√3/3"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{16\sqrt{3}}{3}$'
  answer_source: "본문 풀이"
  figure: crop:fig-275-e11.png
  latex: latex-bank/gn-calc2/items/275-e11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "반지름(2 → 3, 1)·각(60° → 45°, 30°)·원기둥의 높이를 바꿀 수 있다. 제약: 쐐기가 원기둥 안에서 닫히려면 2r·tanθ ≤ 높이 여야 하고, 이 조건이 깨지면 윗면에서 잘려 부피 공식이 달라진다. tanθ 가 유리수나 √3 배가 되는 각을 쓰면 답이 정리된다."
    creative: "(1) 두 입체 중 큰 것의 부피를 묻기(전체에서 빼기 · ★3 유지) (2) 절단면이 밑면의 중심이 아니라 밑면의 한 점을 지나게 하면 적분 구간이 비대칭이 되어 ★4 (3) 원기둥 대신 정육면체·삼각기둥으로 바꾸면 단면이 사다리꼴이 되어 골조는 같고 계산이 쉬워짐(★2~3) (4) 높이를 작게 잡아 윗면에서 잘리게 하면 구간 분할(I-MI)이 붙어 ★4."
```

```yaml
- id: GN-CALC2-275-565
  page: 275
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    지름의 길이가 2인 반구를 밑면의 중심을 지나고 밑면과 30°를 이루는 평면으로 자를 때 생기는 두 입체 중 작은 것의 부피.
  category: "교선에 수직인 단면(부채꼴)의 넓이 → -1~1 적분"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "직전 예제의 직사각형 단면과 달리, 구면 때문에 단면이 반지름 √(1-x²)·중심각 30°인 부채꼴이 된다는 것을 도형에서 읽어내는 전환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "비스듬한 평면으로 자른 쐐기의 부피(반구·부채꼴 단면)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    골조는 275-e11 과 같지만 옆면이 곡면이라 단면이 직사각형이 아니라 부채꼴이다. 지름 2 → 반지름 1 로 바꾸는 표기 함정이 하나 있고, 단면 넓이 (1/2)(1-x²)(π/6)을 -1~1 에서 적분하면 π/9. 확인체크지만 발전 예제에 딸린 문항이라 ★3 출발·통찰 1개(RT d2) → ★3.
  tier: star_3
  mechanism_primary: "반지름 1 → 교선에서 거리 x 단면 = 반지름 √(1-x²)·중심각 30° 부채꼴 → ∫(-1→1) (π/12)(1-x²) dx → π/9"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{\pi}{9}$'
  answer_source: "답지"
  figure: crop:fig-275-565.png
  latex: latex-bank/gn-calc2/items/275-565.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지름(2 → 4, 6)과 각(30° → 45°, 60°)을 바꿀 수 있다. 제약: 부채꼴의 중심각이 곧 절단각이므로 각은 90° 미만이어야 하고, 답이 π의 유리수배가 되도록 각을 π의 간단한 분수로 잡는다. 「지름」인지 「반지름」인지 발문 표기를 바꾸면 함정의 세기가 달라진다."
    creative: "(1) 반구 대신 구 전체를 자르면 부피가 두 배(★3 유지) (2) 절단 평면이 밑면의 중심을 지나지 않게 하면 적분 구간과 단면이 모두 바뀌어 ★4 (3) 작은 쪽과 큰 쪽의 부피의 비를 묻기(★3) (4) 반구를 원뿔로 바꾸면 단면이 부채꼴이 아니라 삼각형이 되어 ★3."
```

### 연습문제 STEP 1

```yaml
- id: GN-CALC2-276-566
  page: 276
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    높이가 6인 입체도형을 높이 x 지점에서 밑면과 평행하게 자른 단면이 반지름의 길이와 호의 길이가 모두 6-x인 부채꼴일 때, 입체도형의 부피.
  category: "부채꼴 넓이 (1/2)rl → 0~6 적분"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "단면이 밑면과 평행한 경우의 입체도형의 부피(부채꼴 단면)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    반지름과 호의 길이가 함께 주어졌으므로 중심각을 구하지 않고 S=(1/2)rl=(1/2)(6-x)² 로 바로 간다. 이후 (6-x)² 적분 한 줄. 통찰 없이 공식 선택만 맞으면 끝. [분류 이슈] 통찰 0·M_total 4 라 -1 규칙상 ★1 후보지만 STEP 1 신호를 살려 ★2 로 둔다.
  tier: star_2
  mechanism_primary: "S(x)=(1/2)(6-x)(6-x) → ∫(0→6) (1/2)(6-x)² dx → 36"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$36$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/276-566.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "높이(6 → 4, 9)와 반지름·호의 식(6-x → 2(6-x), √(6-x))을 바꿀 수 있다. 제약: 0≤x≤h 에서 반지름과 호가 모두 양수여야 하고, 호의 길이 ≤ 2πr(중심각 ≤ 2π)이어야 부채꼴이 성립한다."
    creative: "(1) 반지름과 중심각을 따로 주면 l=rθ 단계가 하나 늘어 ★2 유지 (2) 단면을 활꼴로 바꾸면 부채꼴-삼각형 차가 되어 ★3 (3) 부피를 주고 입체의 높이를 역산시키면 I-BW 가 붙어 ★3."
```

### 연습문제 STEP 2

```yaml
- id: GN-CALC2-276-567
  page: 276
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    물의 깊이가 x일 때 채워진 물의 부피가 (1/ln3)(9^x+3^x-2)인 그릇. 수면의 넓이가 21이 되도록 물을 넣었을 때 채워진 물의 깊이.
  category: "V(x) 미분 → S(x)=2·9^x+3^x → 21 → 3^x 치환 이차방정식"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "수면의 넓이를 직접 주지 않고 부피 함수로 감췄으므로, S(x)=V′(x) 로 뒤집고 지수함수 미분까지 결합해야 조건 21을 쓸 수 있는 동치 변환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "부피 함수의 미분 → 수면의 넓이(지수함수·역산)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    273-562 의 골조에 지수함수 미분과 3^x 치환 이차방정식이 얹혔다. 1/ln3 계수가 미분에서 정확히 상쇄돼 S(x)=2·9^x+3^x 가 되는 것이 이 문항의 설계 포인트이고, 치환 뒤 음의 근은 3^x>0 으로 기각한다(T-범위). STEP 2 ★3 출발·통찰 1개(EQV d2) → ★3 유지.
  tier: star_3
  mechanism_primary: "S(x)=V′(x)=2·9^x+3^x → 2t²+t-21=0 (t=3^x>0) → t=3 → x=1"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/276-567.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(3 → 2, e)과 부피 함수의 계수, 목표 넓이(21 → 10, 36)를 바꿀 수 있다. 제약: 1/ln(밑) 계수가 미분에서 상쇄되도록 부피 함수를 (1/ln a)(a^{2x}+a^x-2) 꼴로 유지하고, 치환 이차방정식이 유리수 인수분해되며 양근이 a의 거듭제곱(정수 깊이)이 되도록 목표 넓이를 고른다. V(0)=0 을 지킨다."
    creative: "(1) 깊이를 주고 수면의 넓이를 묻는 순방향으로 바꾸면 ★2 (2) 부피 함수를 로그·삼각함수로 바꾸면 미분 뒤 방정식 종류만 달라짐(★3) (3) 「수면의 넓이가 깊이의 몇 배로 증가하는 순간」처럼 V″ 조건을 걸면 단계가 늘어 ★4."
```

```yaml
- id: GN-CALC2-276-568
  page: 276
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["평가원 기출"]
  category_type: "연습문제 STEP 2"
  summary: |
    곡선 y=√(kx/(2x²+1))과 x축, 두 직선 x=1, x=2로 둘러싸인 부분을 밑면으로 하고 x축에 수직인 단면이 모두 정사각형인 입체의 부피가 2ln3일 때 양수 k의 값. 5지선다.
  category: "S=y²(근호 소거) → f′/f 꼴 치환적분 → 부피 조건으로 k 역산"
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - step: 3
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "부피 2ln3 이라는 결과 조건에서 적분값 (k/4)ln3 을 거쳐 미정 상수 k 를 역추적"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "단면이 정사각형인 입체의 부피 조건에서 미정 상수 결정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    제곱해 근호를 없애면 S=kx/(2x²+1) 이고, 분자가 분모의 도함수의 상수배라 (k/4)ln(2x²+1) 로 바로 적분된다. 부피 조건 (k/4)(ln9-ln3)=2ln3 에서 k=8. 통찰은 역산 1개(BW d1)이고 치환적분은 표준. 평가원 기출 태그는 골조가 표준형이라 +0. STEP 2 ★3 출발 유지.
  tier: star_3
  mechanism_primary: "S=y²=kx/(2x²+1) → ∫(1→2) = (k/4)[ln(2x²+1)] = (k/4)ln3 = 2ln3 → k=8"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "③"
  answer_source: "답지"
  figure: crop:fig-276-568.png
  latex: latex-bank/gn-calc2/items/276-568.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모(2x²+1 → 3x²+2, x²+1)·구간(1~2 → 0~1, 1~3)·목표 부피를 바꿀 수 있다. 제약: 분자가 분모의 도함수의 상수배여야 로그 적분으로 끝나고, 구간 양 끝에서 로그의 진수 비가 정수가 되도록 잡아야 k가 정수로 떨어진다. k>0 과 구간에서 y≥0 을 유지한다."
    creative: "(1) k를 주고 부피를 묻는 순방향으로 바꾸면 ★2 (2) 단면을 정삼각형·반원으로 바꾸면 계수만 달라짐(★3 유지) (3) 「부피가 최소가 되는 k」처럼 최적화를 걸면 미분이 추가돼 ★4 (4) 구간의 오른쪽 끝을 미지수로 두면 로그방정식이 되어 ★4."
```

```yaml
- id: GN-CALC2-276-569
  page: 276
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    반지름의 길이가 2인 원을 밑면으로 하는 입체도형을 밑면의 한 지름에 수직인 평면으로 자른 단면이 모두 정삼각형일 때, 입체도형의 부피.
  category: "지름 위 x에서의 현의 길이 → 정삼각형 넓이 → -2~2 적분"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "밑면이 곡선의 식이 아니라 원으로 주어져, 단면의 한 변을 현의 길이 2√(4-x²)로 직접 세우는 기하→대수 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "단면이 밑면과 수직인 경우의 입체도형의 부피(원 밑면·정삼각형 단면)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    274-564 와 같은 골조지만 밑면이 원이라 한 변을 y 가 아니라 현 전체 2√(4-x²)로 잡아야 한다. 반현 √(4-x²)로 잘못 잡는 것이 이 문항의 주 함정(T-단위·표기)이고, 제곱하면 √3(4-x²)로 정리돼 적분은 가볍다. STEP 2 ★3 출발·통찰 1개(RT d1) → ★3 유지.
  tier: star_3
  mechanism_primary: "한 변 = 현 2√(4-x²) → S=(√3/4)·4(4-x²)=√3(4-x²) → ∫(-2→2) → 32√3/3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{32\sqrt{3}}{3}$'
  answer_source: "답지"
  figure: crop:fig-276-569.png
  latex: latex-bank/gn-calc2/items/276-569.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "원의 반지름(2 → 1, 3)을 바꿀 수 있다. 제약: 답이 r³ 에 비례하므로 유리수로 떨어지게 하려면 정수 반지름을 쓴다. 적분 구간은 항상 -r~r 이고 우함수라 0~r 의 두 배로 처리해도 된다."
    creative: "(1) 단면을 정사각형·반원으로 바꾸면 계수만 달라짐(★2~3) (2) 밑면을 원이 아니라 타원으로 바꾸면 현의 길이 식이 바뀌어 ★4 (3) 단면을 지름에 수직이 아니라 임의의 현에 수직으로 잡게 하면 대칭 인식(I-SYM)이 붙어 ★4 (4) 부피를 주고 반지름을 역산시키면 ★3."
```

### 연습문제 실력 UP

```yaml
- id: GN-CALC2-276-570
  page: 276
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    밑면의 반지름 4, 높이 4인 원기둥 모양 그릇에 물을 가득 담은 뒤 45°로 기울였을 때, 그릇에 남아 있는 물의 부피.
  category: "기울임 → 수면이 밑면의 지름을 지나는 쐐기 → 단면(직각이등변삼각형) 적분"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「45°로 기울여 물이 쏟아진 뒤」라는 상황을 「수면이 입구의 한 점과 밑면의 중심을 지나는 평면」이라는 절단 조건으로 옮김(반지름 4·높이 4·tan45°=1 이 맞물려 수면이 밑면의 지름을 지남)"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "남은 물을 좌표로 옮겨, 지름에 수직인 단면이 높이 |x|·밑변 2√(16-x²)인 직각삼각형임을 읽어내는 기하→대수 전환"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "기울인 원기둥 용기에 남은 물의 부피(쐐기)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    쐐기 부피 자체는 275-e11 과 같은 골조지만, 여기서는 절단 평면이 발문에 주어지지 않고 「기울임 + 넘쳐 쏟아짐」에서 학생이 스스로 결정해야 한다. 반지름 4·높이 4·45° 가 맞물려 수면이 밑면의 중심을 지나는 것이 핵심이고, 남은 쪽과 쏟아진 쪽을 뒤집는 범위·경계 함정이 둘 있다. 통찰 2개(EQV d2·RT d2)·M_total 8 → 실력 UP ★4 출발 유지. ★5 는 SC/VF/SYM/XU 통찰이 없어 부여하지 않는다.
  tier: star_4
  mechanism_primary: "45° 기울임 → 수면 평면이 밑면의 지름을 지남 → 단면 = (1/2)·2√(16-x²)·x 직각삼각형 → ∫(0→4) x√(16-x²) dx → 128/3"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$\dfrac{128}{3}$'
  answer_source: "답지"
  figure: crop:fig-276-570.png
  latex: latex-bank/gn-calc2/items/276-570.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "반지름·높이·기울인 각을 바꿀 수 있다. 제약: 높이 = 2r·tanθ 를 넘으면 물이 넘치지 않아 「남은 물 = 전체 - 쐐기」로 골조가 바뀌고, 반대로 높이 < r·tanθ 면 수면이 밑면을 가로질러 구간이 달라진다. 반지름 4·높이 4·45° 처럼 수면이 정확히 밑면의 중심을 지나는 조합이 계산이 가장 깔끔하다."
    creative: "(1) 쏟아진 물의 부피를 묻기(전체에서 빼기 · ★4 유지) (2) 각을 30°로 바꿔 수면이 밑면에 닿지 않게 하면 남은 물이 쐐기+원기둥 조각으로 나뉘어 경우 판단(I-MI)이 붙고 ★5 후보 (3) 그릇을 원뿔·정육면체로 바꾸면 단면 모양이 달라져 ★4 (4) 남은 물이 전체의 절반이 되는 기울임 각을 묻기(I-BW 추가 · ★5 후보)."
```

## 표본 판정 요약 (15문)

- ★ 분포: ★1 2 · ★2 7 · ★3 5 · ★4 1 · ★5 0
- 통찰형 9 · 절차형 6 · premium 0
- 통찰 유형 분포: I-RT 5(274-e10 · 275-e11 · 275-565 · 276-569 · 276-570) · I-EQV 3(273-562 · 276-567 · 276-570) · I-BW 2(273-e9 · 276-568). depth 2 는 5개(275-e11 · 275-565 · 276-567 · 276-570 의 두 통찰), 나머지는 depth 1. I-SC·I-VF·I-SYM·I-XU 는 이 범위에 없어 ★5 가 나오지 않았다.
- type_hint 상위: 「단면이 밑면과 평행한 경우의 부피」 5(272-559 · 272-560 · 273-e9 · 273-561 · 276-566) · 「단면이 밑면과 수직인 경우의 부피(곡선·원 밑면)」 4(274-e10 · 274-563 · 274-564 · 276-569) · 「비스듬한 평면으로 자른 쐐기의 부피」 3(275-e11 · 275-565 · 276-570) · 「부피 함수의 미분 → 단면의 넓이」 2(273-562 · 276-567) · 「부피 조건에서 미정 상수 결정」 1(276-568)
- 대상층: 하위권 2 · 중하위권 4 · 중위권 4 · 중상위권 4 · 상위권 1
- 그림: 7문(`crop:fig-272-559.png` · `crop:fig-272-560.png` · `crop:fig-275-e11.png` · `crop:fig-275-565.png` · `crop:fig-276-568.png` · `crop:fig-276-569.png` · `crop:fig-276-570.png`)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CALC2-273-562 | 미적분의 기본정리를 배운 직후라 S(x)=V′(x) 방향 전환을 통찰(I-EQV)로 셀지 표준 절차로 셀지 은행 기준이 필요. 여기서는 통찰 1개로 셈 | ★2 |
| GN-CALC2-274-e10 | 통찰 1개라 +1 조건에 못 미쳐 ★2 로 뒀으나 M_total 7 과 지름·반지름 함정 때문에 체감은 ★3 | ★2 / ★3 |
| GN-CALC2-274-563 | 통찰 0·M_total 4 라 -1 규칙상 ★1 후보지만 확인체크 구역 신호를 살려 ★2 | ★1 / ★2 |
| GN-CALC2-276-566 | 통찰 0·M_total 4 라 -1 규칙상 ★1 후보지만 STEP 1 신호를 살려 ★2 | ★1 / ★2 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: 「비스듬한 평면으로 자른 쐐기의 부피」(275-e11 · 275-565 · 276-570)는 다른 두 골조와 요구 능력이 다르다. 단면을 스스로 만들고 절단 평면을 좌표로 옮기는 단계가 있어 base ★3~4 로 독립시켜야 한다. 단면이 직사각형(기둥)·부채꼴(구면)·직각삼각형(기울인 용기)으로 갈리므로 하위 유형 셋을 두는 편이 낫다.
- **따로 세워야 할 유형**: 「부피 함수의 미분 → 단면의 넓이」(273-562 · 276-567)는 적분이 아니라 미분을 쓰는 역방향이라 나머지와 섞으면 안 된다. base ★2, 지수·로그가 붙으면 ★3.
- **통합해도 될 유형**: 「단면이 밑면과 수직인 경우」에서 단면이 정사각형·정삼각형·반원인 세 갈래(274-e10 · 563 · 564 · 276-569)는 넓이 계수만 다르고 골조가 같다. 한 유형 아래 「단면 도형」 변형 축으로 묶는다. 다만 밑면이 곡선의 식으로 주어지는 경우와 원·타원 같은 도형으로 주어지는 경우는 한 변을 y 로 잡느냐 현으로 잡느냐가 갈리므로 하위 갈래 둘로 나눈다.
- **통합해도 될 유형**: 「단면이 밑면과 평행한 경우」의 순방향(272-559 · 272-560 · 273-561 · 276-566)과 상한 역산(273-e9⑵)은 같은 유형의 순·역 변형으로 묶고, 역산 쪽에 +1 을 준다.
- 「부피 조건에서 미정 상수 결정」(276-568)은 위 두 큰 유형 어디에도 붙을 수 있는 **변형 축**(순방향 → 역산)이므로 독립 유형보다 변형 태그로 두는 것이 낫다.
