---
name: mechanism-데이터-GN-CALC2-31
description: 개념원리 미적분Ⅱ 31 구분구적법(1/1 · 필수·발전 예제 4문) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 미적분Ⅱ · 전사본 latex-bank/gn-calc2
  section: 31 구분구적법
  unit_code: GN-CALC2-31
  part: "1/1"
  extract_range: "255~256쪽 · 255-e1~256-521"
  total_problems: 4
  unit_total: 4
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-calc2/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-calc2/items/<id>.tex
  image_source: latex-bank/gn-calc2/figures/ (crops.json)
---

# 개념원리 미적분Ⅱ · 31 구분구적법 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 미적분Ⅱ 255~256쪽 두 쪽, 단원 31 「구분구적법」 4문항 전수를 다룬다. 구역은 「필수·발전 예제」 하나뿐이고 그 안이 필수 예제 2문(255-e1 · 256-e2)과 각 예제 바로 뒤의 확인체크 2문(255-520 · 256-521)으로 짝을 이룬다. 이 단원에는 개념원리 익히기·연습문제 STEP 1·STEP 2·실력 UP 구역이 배정돼 있지 않아 벤더 난이도 신호가 「필수」(★2) 한 층에서 끊기고, 확인체크도 바로 앞 예제의 수·설정만 바꾼 쌍둥이라 같은 ★2 출발점을 쓴다. 그 결과 이 범위의 ★ 분포는 ★2 네 문항에 그대로 몰린다.

골조는 정확히 두 갈래이고 각 갈래가 「예제 → 확인체크」 한 쌍이다. (가) **평면 넓이형**(255-e1 · 255-520) — 구간을 n등분 해 직사각형 넓이의 합을 만들고 Σk^2 공식으로 정리한 뒤 n→∞ 극한을 잡는다. (나) **입체 부피형**(256-e2 · 256-521) — 높이를 n등분 해 밑면에 평행한 단면을 얻고, 닮음비로 k번째 단면의 크기를 원래 크기의 k/n 배로 결정한 다음 기둥 부피의 합을 같은 Σk^2 공식으로 정리한다. (나)의 두 문항에는 입체를 단면 기둥의 합으로 바꿔 보고 닮음비로 단면 크기를 정하는 단계가 있어 I-RT 통찰 1개(depth 2)를 부여했다. 다만 벤더 신호 출발점이 ★2 이고 ±1 조정 조건(통찰 2개 이상 또는 depth 3)에 닿지 않아 라벨은 ★2 로 두고, 체감 난도가 ★3 쪽이라는 점만 rationale 과 파일 끝 표에 [분류 이슈] 로 기록했다.

같은 Σk^2 → 1/3 이라는 한 가지 극한이 네 문항 전부의 마지막 줄이라는 점이 이 단원의 특징이다. 변형을 만들 때 거듭제곱 차수를 올리면 Σk^3 공식으로 갈아타야 하고 답의 분모가 1/3 에서 1/4 로 옮겨 가므로, `variation_notes.numeric` 에 그 제약을 문항마다 적어 두었다. 이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(골조 한 줄) · `insights[]` · `variation_notes` 를 채웠다. 그림 문항은 1문(256-521)이다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-CALC2-255-e1
  page: 255
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수·발전 예제"
  summary: |
    곡선 $y=x^2$ 과 직선 $x=1$ 및 $x$축으로 둘러싸인 도형의 넓이를 구분구적법으로 구하는 문항.
  category: "구간 [0,1] n등분 → 직사각형 넓이의 합 → Σk^2 공식 → n→∞ 극한"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구분구적법으로 곡선 아래 넓이 구하기(n등분 → Σk^2 → 극한)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    구분구적법의 정의를 처음 적용해 보이는 대표 예제다. 구간을 n등분 하고 k번째 소구간의 오른쪽 끝에서 높이를 재
    직사각형 넓이의 합을 만든 뒤, Σk^2 = n(n+1)(2n+1)/6 을 대입해 n 의 식으로 정리하고 극한을 잡는 네다섯 단계가 전부다.
    어느 단계도 학생이 스스로 표현을 바꾸거나 전략을 고르지 않고 정의가 시키는 순서를 따라가므로 통찰 0.
    M_total 6 → 필수 예제 출발점 ★2 유지(−1 조건인 M_total ≤ 5 에 해당하지 않음).
  tier: star_2
  mechanism_primary: "[0,1] 을 n등분 → k번째 직사각형 넓이 (k/n)^2·(1/n) → 합 (1/n^3)Σk^2 → n→∞ 극한 1/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{3}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/255-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "곡선의 계수와 오른쪽 경계(y=x^2 · x=1 → y=2x^2 · x=1, y=x^2 · x=2, y=x^3 · x=1)를 바꿀 수 있음. 제약: (가) 거듭제곱 차수를 3 으로 올리면 Σk^2 이 아니라 Σk^3 = {n(n+1)/2}^2 로 공식을 갈아타야 하고 답의 분모가 3 에서 4 로 바뀜 (나) 오른쪽 경계를 x=c 로 두면 소구간 폭 c/n 과 높이 (ck/n)^2 이 함께 들어가 답이 c^3/3 이 되므로 c 는 답이 깔끔한 작은 정수로 (다) x축과 x=0 이 왼쪽 경계라는 전제가 깨지면(예: 1≤x≤2) 합이 Σk^2 하나로 끝나지 않고 Σk 항이 더 붙음."
    creative: "(1) 왼쪽 끝점으로 잡은 합(k=0~n-1)으로 바꿔 두 합의 극한이 같음을 함께 보이게 하면 사후 검증 단계가 생겨 I-VF 1개 ★3 (2) 같은 도형을 y축 쪽에서 가로 직사각형으로 잘라 넓이를 구하게 하면 역함수 표현으로 옮기는 단계가 붙어 I-RT 1개 ★3 (3) 곡선과 직선 y=x 사이 넓이처럼 두 함수의 차로 높이를 잡게 하면 조건 통합이 붙어 ★3 (4) n등분 합의 식만 세우게 하고 극한을 빼면 ★1."
```

```yaml
- id: GN-CALC2-255-520
  page: 255
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "필수·발전 예제"
  summary: |
    곡선 $y=\dfrac{1}{2}x^2$ 과 직선 $x=2$ 및 $x$축으로 둘러싸인 도형의 넓이를 구분구적법으로 구하는 문항.
  category: "구간 [0,2] n등분 → 직사각형 넓이의 합 → Σk^2 공식 → n→∞ 극한"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구분구적법으로 곡선 아래 넓이 구하기(n등분 → Σk^2 → 극한)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    바로 앞 필수 예제와 같은 골조를 소구간 폭이 1/n 이 아닌 경우로 한 번 더 밟게 하는 확인체크다.
    구간 길이가 2 라서 폭 2/n 과 높이 (1/2)(2k/n)^2 이 따로 들어가고, 두 인수를 곱해 (4/n^3)Σk^2 로 정리하는 지점이 유일한 걸림돌이다.
    폭을 1/n 로 두는 실수가 흔하지만 표준 함정 카테고리에는 들어가지 않아 Mₜ 는 1 로 두었다. 통찰 0 · M_total 6 → 확인체크도 앞 예제와 같은 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "[0,2] 를 n등분 → k번째 직사각형 넓이 (1/2)(2k/n)^2·(2/n) → 합 (4/n^3)Σk^2 → n→∞ 극한 4/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{4}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/255-520.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "곡선의 계수 1/2 와 오른쪽 경계 2 를 짝으로 바꿀 수 있음(y=(1/3)x^2 · x=3, y=3x^2 · x=1). 제약: (가) 답이 계수×(경계)^3/3 이므로 계수와 경계를 함께 골라 답이 정수나 간단한 기약분수로 떨어지게 할 것 (나) 소구간 폭이 c/n 으로 남아야 앞 예제와 구분되는 확인체크 역할이 유지됨(경계를 1 로 되돌리면 예제와 완전히 같아짐) (다) 차수를 올리면 Σk^3 으로 공식이 바뀜."
    creative: "(1) 넓이를 주고 곡선의 계수를 거꾸로 묻게 하면 역추적 단계가 붙어 I-BW 1개 ★3 (2) 직선 x=2 대신 두 곡선의 교점까지로 구간을 정하게 하면 경계를 먼저 구하는 단계가 붙어 ★3 (3) n등분 합을 시그마 식까지만 쓰게 하면 ★1 (4) 같은 도형을 정적분으로도 구해 두 값을 비교하게 하면 표현 전환이 붙어 I-RT 1개 ★3."
```

```yaml
- id: GN-CALC2-256-e2
  page: 256
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수·발전 예제"
  summary: |
    밑면의 반지름의 길이가 $r$, 높이가 $h$ 인 원뿔의 부피를 구분구적법으로 구하는 문항.
  category: "높이 n등분 → 닮음비로 단면 반지름 rk/n → 원기둥 부피의 합 → n→∞ 극한"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "원뿔의 부피를 밑면에 평행한 단면으로 자른 원기둥 부피의 합으로 옮겨 보고, 꼭짓점에서 k번째 단면의 반지름을 닮음비로 rk/n 으로 결정"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "구분구적법으로 입체의 부피 구하기(닮음비 단면 → Σk^2 → 극한)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    평면 넓이에서 쓰던 골조를 입체로 옮기는 대표 예제다. 높이를 n등분 한 뒤 각 층을 원기둥으로 바꿔 보는 것과
    꼭짓점에서 k번째 단면의 반지름을 닮음비로 rk/n 으로 잡는 것이 한 단계에 묶여 있고, 이 전환이 없으면 합 자체를 세울 수 없어 I-RT 1개(d2)를 부여했다.
    그 뒤는 π(rk/n)^2·(h/n) 을 더해 (πr^2h/n^3)Σk^2 로 정리하고 극한을 잡는 표준 절차다. r·h 가 문자라 Mₐ=2 · M_total 7.
    필수 예제 출발점 ★2 이고 +1 조건(통찰 2개 이상 또는 depth 3)에 닿지 않아 ★2 유지.
    [분류 이슈] 문자 일반화 + 닮음 단계 때문에 체감은 ★3 쪽 — 라벨은 벤더 신호대로 ★2 로 두고 기록만 함.
  tier: star_2
  mechanism_primary: "높이 h 를 n등분 → 닮음으로 k번째 단면 반지름 rk/n → 원기둥 부피 π(rk/n)^2·(h/n) → 합 (πr^2h/n^3)Σk^2 → 극한 πr^2h/3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{1}{3}\pi r^2 h$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/256-e2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "r·h 를 구체 수치(r=3, h=4)로 내리거나, 잘린 원뿔(원뿔대)처럼 위 반지름을 따로 주는 식으로 바꿀 수 있음. 제약: (가) 단면 반지름이 닮음비로 일차식이어야 합이 Σk^2 하나로 끝남 — 반지름이 높이의 제곱에 비례하는 입체로 바꾸면 Σk^4 가 필요해 교육과정을 벗어남 (나) 원뿔대는 반지름이 r1+(r2−r1)k/n 이라 Σk 와 Σk^2 가 함께 나오므로 계산량이 한 단계 늘어남 (다) 수치로 내리면 Mₐ 가 1 로 떨어져 ★2 아래쪽으로 내려감."
    creative: "(1) 각뿔·구·회전체로 입체만 바꾸면 같은 I-RT 골조가 유지되며 단면이 원이 아닌 도형이 되어 ★2~3 (2) 부피를 주고 밑면 반지름을 역으로 묻게 하면 I-BW 가 더해져 ★3 (3) 꼭짓점 쪽 내접 합과 밑면 쪽 외접 합을 모두 세워 두 극한이 같음을 보이게 하면 I-VF 가 붙어 ★3 (4) 원뿔을 밑면에 수직인 단면으로 자르는 다른 갈래와 비교하게 하면 전략 선택이 생겨 I-SC ★4 쪽."
```

```yaml
- id: GN-CALC2-256-521
  page: 256
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "필수·발전 예제"
  summary: |
    한 변의 길이가 $a$ 인 정사각형을 밑면으로 하고 높이가 $h$ 인 정사각뿔에서, 높이를 $n$등분 한 분점을 지나며 밑면과 평행한 밑면을 갖는 $(n-1)$개의 직육면체를 만들고 그 부피의 합으로 정사각뿔의 부피를 구하는 문항. 그림 제시.
  category: "높이 n등분 → 닮음비로 단면 한 변 ak/n → 내접 직육면체 부피의 합(k=1~n-1) → n→∞ 극한"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "정사각뿔의 부피를 밑면에 평행한 단면으로 자른 직육면체 부피의 합으로 옮겨 보고, 꼭짓점에서 k번째 분점의 단면 한 변을 닮음비로 ak/n 으로 결정"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "구분구적법으로 입체의 부피 구하기(닮음비 단면 → Σk^2 → 극한)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    앞 원뿔 예제와 같은 골조를 단면이 정사각형인 입체로 한 번 더 밟게 하는 확인체크다. 단면 한 변이 닮음비로 ak/n,
    각 직육면체의 부피가 (ak/n)^2·(h/n) 이 되어 합이 (a^2h/n^3)Σk^2 로 같은 꼴로 정리된다.
    다른 점은 그림의 직육면체가 내접이라 더하는 범위가 k=1~n-1 이고 Σk^2 를 (n−1)n(2n−1)/6 으로 써야 한다는 것 하나뿐이며, 극한에서는 1~n 합과 같은 값이 된다(T-범위 1개).
    통찰 1개(I-RT d2) · M_total 7 → 확인체크 출발점 ★2 유지(+1 조건 미충족).
    [분류 이슈] 문자 일반화 + 닮음 + 합 범위 때문에 체감은 ★3 쪽 — 라벨은 ★2 로 두고 기록만 함.
  tier: star_2
  mechanism_primary: "높이 h 를 n등분 → 닮음으로 k번째 단면 한 변 ak/n → 직육면체 부피 (ak/n)^2·(h/n) → 합 (a^2h/n^3)Σ_{k=1}^{n-1}k^2 → 극한 a^2h/3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{1}{3}a^2h$'
  answer_source: "답지"
  figure: crop:fig-256-521.png
  latex: latex-bank/gn-calc2/items/256-521.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a·h 를 구체 수치로 내리거나 밑면을 정삼각형·정육각형으로 바꿀 수 있음(단면 넓이가 한 변의 제곱에 비례하면 골조 그대로). 제약: (가) 단면 한 변이 ak/n 인 일차 닮음이라야 Σk^2 하나로 끝남 (나) 그림의 직육면체가 내접이므로 합 범위는 k=1~n-1 로 고정 — 외접으로 바꾸면 k=1~n 이 되고 그림도 함께 바꿔야 함 (다) 그림의 라벨 a·h·n 은 발문과 일대일이라 문자 이름은 그대로 두는 편이 안전함."
    creative: "(1) 외접 직육면체(n개) 합도 함께 세워 두 극한이 같음을 보이게 하면 사후 검증이 붙어 I-VF 1개 ★3 (2) 정사각뿔을 잘라 낸 각뿔대의 부피를 같은 방법으로 묻게 하면 합 범위가 중간부터 시작해 ★3 (3) 부피를 주고 h 를 역으로 묻게 하면 I-BW 가 더해져 ★3 (4) 직육면체 부피의 합 S_n 만 n 의 식으로 나타내게 하고 극한을 빼면 ★2 아래쪽."
```

## 표본 판정 요약 (4문)

- ★ 분포: ★1 0 · ★2 4 · ★3 0 · ★4 0 · ★5 0
- 통찰형 2 · 절차형 2 · premium 0
- type_hint 상위: 「구분구적법으로 곡선 아래 넓이 구하기(n등분 → Σk^2 → 극한)」 2 · 「구분구적법으로 입체의 부피 구하기(닮음비 단면 → Σk^2 → 극한)」 2
- 통찰 유형 분포: I-RT 2 (모두 depth 2) · 그 밖 0
- 그림: 1문(`crop:fig-256-521.png`)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CALC2-256-e2 | 벤더 신호는 「필수」 ★2 출발이고 +1 조건(통찰 2개 이상·depth 3)에 닿지 않지만, r·h 문자 일반화 + 닮음비 단면이라 체감은 ★3 쪽 | ★2 / ★3 |
| GN-CALC2-256-521 | 위와 같은 골조에 내접 합 범위(k=1~n-1) 처리가 더해져 확인체크 ★2 라벨보다 체감이 한 단 높음 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고): 이 범위의 type_hint 는 「구분구적법으로 곡선 아래 넓이 구하기」 2문과 「구분구적법으로 입체의 부피 구하기」 2문, 두 갈래뿐이다. 마지막 줄이 Σk^2/n^3 → 1/3 으로 같지만, 넓이형은 높이를 함숫값에서 바로 읽고 부피형은 닮음비로 단면 크기를 만들어야 해서 **학생이 막히는 지점이 다르므로 카탈로그에서는 따로 세우는 것이 맞다**(넓이형은 절차형 ★2, 부피형은 I-RT 통찰형 ★2~3). 반대로 부피형 안의 원뿔(256-e2)과 정사각뿔(256-521)은 단면이 원이냐 정사각형이냐만 다르고 골조·통찰·계산이 완전히 같으므로 **한 유형으로 통합**하고 단면 도형을 변형 축으로 두면 된다. 합의 범위(k=1~n vs k=1~n-1, 내접·외접)는 별도 유형이 아니라 같은 유형 안의 난도 조절 축으로 기록해 둔다. 또한 이 단원은 바로 다음 단원인 정적분의 정의와 골조가 이어지므로, 카탈로그를 만들 때 「구분구적법 → 정적분 표현으로 옮기기」 유형을 두 갈래의 상위 유형으로 하나 더 두는 것을 검토한다.
