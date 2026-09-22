---
name: mechanism-데이터-RPM-CALC1-04-p1
description: RPM 미적분Ⅰ 04 도함수의 활용 (1)(1/2 · 교과서 04-1 접선의 방정식 ~ 유형 06 곡선과 직선이 접할 때 미정계수 구하기) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 미적분Ⅰ (22개정) · 전사본 latex-bank/rpm-calc1
  section: 04 도함수의 활용 (1)
  unit_code: CALC1-04
  part: "1/2"
  extract_range: "55~58쪽 · 0330~0366"
  total_problems: 37
  unit_total: 75
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-calc1/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-calc1/items/<id>.tex
  image_source: latex-bank/rpm-calc1/figures/ (crops.json)
---

# RPM 미적분Ⅰ · 04 도함수의 활용 (1) (1/2) 정독 데이터 (v1.0)

이 파일은 RPM 미적분Ⅰ 04 도함수의 활용 (1) 단원(75문) 가운데 55~58쪽의 37문항(0330~0366)을 다룬다. 구역은 교과서 04-1 접선의 방정식(2문) · 04-2 접선의 방정식을 구하는 방법(8문 · 접점·기울기·수직·평행·외부 점) · 04-3 롤의 정리(2문) · 04-4 평균값 정리(3문) 뒤로 유형 01 접선의 기울기 · 유형 02 접점의 좌표가 주어진 접선의 방정식 · 유형 03 접선과 수직인 직선의 방정식 · 유형 04 곡선과 접선의 교점 · 유형 05 기울기가 주어진 접선의 방정식 · 유형 06 곡선과 직선이 접할 때 미정계수 구하기 순이다. 교과서 구역은 ★1 출발, 각 유형의 첫 문항은 「대표문제」 태그(난이도 표시 없음 → ★2 출발), 나머지는 중하·중·상중 난이도 표시(★1~2 · ★2 · ★3 출발)와 「서술형」 태그를 가진다. 그림 문항은 0344(평균값 정리 그래프)·0358(접선과 곡선의 교점 그림) 2문이며 모두 크롭 이미지로 확인했다.

주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 사슬) · `insights[]`(유형 코드 · depth · effective_depth · 근거) · `variation_notes`(numeric/creative)를 채웠다. `depth_score` 는 insights 의 effective_depth 평균(없으면 0.00)이고, `insight_type` 은 통찰이 없거나 d1 한 개뿐이면 절차형, d2 이상 또는 2개 이상이면 통찰형으로 적었다. Mₜ 는 함정 0~1개면 1, 2~3개면 2 로 매겨 M_total 은 4 이상이다. ★ 조정은 벤더 출발점에서 「통찰 0 · M_total ≤ 5」 이면서 같은 골조의 교과서 문항이 이 범위에 있는 문항만 −1 했고(0353·0355·0359·0360), 교과서에 없는 미정계수 결정 골조(0345·0349·0365)나 단계가 4개 이상인 문항(0350)은 출발점을 유지했다. +1 후보(통찰 2개)는 0366 하나뿐이며 유형 표준 골조라 적용하지 않고 [분류 이슈] 로 기록했다. 전사 답은 37문 모두 다시 구해 일치했다(「전사 답 확인 필요」 0).

## 문항 데이터

### 교과서 04-1 접선의 방정식

```yaml
- id: RPM-CALC1-0330
  page: 55
  vendor_label: "교과서 04-1 접선의 방정식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    곡선 y=x²-1 위의 점 (2, 3) 에서의 접선의 기울기.
  category: "도함수 → 접점 x좌표 대입 → 기울기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "접점이 주어진 접선의 기울기 f'(a)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    y'=2x 에 x=2 를 넣어 4. 미분계수가 접선의 기울기라는 정의 확인 한 단계. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "y'=2x → x=2 대입 → 4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0330.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차식 계수·접점 x좌표를 바꿀 수 있음. 제약: 주어진 점이 곡선 위에 있도록 y좌표를 곡선값으로 맞추고, 도함수 값이 정수가 되게."
    creative: "(1) 점을 (2, a) 로 주어 a 부터 구하게 하기(★1) (2) 기울기 값을 주고 접점 x좌표를 역으로 묻기(★1~2) (3) 두 점에서의 접선 기울기의 합·곱(★2 · 절차형)."
```

```yaml
- id: RPM-CALC1-0331
  page: 55
  vendor_label: "교과서 04-1 접선의 방정식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    곡선 y=(1/3)x³+2x²-4 위의 점 (-3, 5) 에서의 접선의 기울기.
  category: "도함수 → 접점 x좌표 대입 → 기울기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "접점이 주어진 접선의 기울기 f'(a)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    y'=x²+4x 에 x=-3 을 넣어 9-12=-3. 음수 대입의 부호(T-부호)만 조심하면 한 단계. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "y'=x²+4x → x=-3 대입 → -3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0331.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼차식 계수(분수 계수 포함)·접점 x좌표를 바꿀 수 있음. 제약: 점이 곡선 위(y좌표 재계산), 도함수 값이 정수."
    creative: "(1) 접점 x좌표만 주고 y좌표도 함께 구하기(★1) (2) 「접선의 기울기가 0 인 점의 x좌표」 → y'=0 풀기(★1~2) (3) 기울기가 같은 두 접점 찾기 → x²+4x=k 의 두 근(★2)."
```

### 교과서 04-2 접선의 방정식을 구하는 방법

```yaml
- id: RPM-CALC1-0332
  page: 55
  vendor_label: "교과서 04-2 접선의 방정식을 구하는 방법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    곡선 y=2x²-3x+7 위의 점 (1, 6) 에서의 접선의 방정식.
  category: "도함수 → 기울기 → 점-기울기 식"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "접점의 좌표가 주어진 접선의 방정식"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    y'=4x-3 → y'(1)=1. y-6=1·(x-1) → y=x+5. 기울기 계산 뒤 점-기울기 식 한 줄. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "y'(1)=1 → y-6=(x-1) → y=x+5"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y=x+5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0332.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차식 계수·접점 x좌표 자유. 제약: 접점 y좌표는 곡선값으로 재계산, 기울기·절편이 정수."
    creative: "(1) 접선의 x절편·y절편 묻기(★1) (2) 접선과 두 좌표축이 이루는 삼각형 넓이(★2 · 절차형) (3) 접선이 지나는 다른 점을 조건으로 접점을 역추적(★2 · I-BW d1)."
```

```yaml
- id: RPM-CALC1-0333
  page: 55
  vendor_label: "교과서 04-2 접선의 방정식을 구하는 방법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    곡선 y=-x³+6x+8 위의 점 (-1, 3) 에서의 접선의 방정식.
  category: "도함수 → 기울기 → 점-기울기 식"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "접점의 좌표가 주어진 접선의 방정식"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    y'=-3x²+6 → y'(-1)=3. y-3=3(x+1) → y=3x+6. 0332 와 같은 골조에 삼차식·음수 대입만 다름. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "y'(-1)=3 → y-3=3(x+1) → y=3x+6"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y=3x+6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0333.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼차식 계수·접점 자유. 제약: 점이 곡선 위, 기울기·절편 정수."
    creative: "(1) 접선이 곡선과 다시 만나는 점(유형 04 골조 · ★2 · I-EQV d1) (2) 접선의 y절편만 묻기(★1) (3) 그 점에서의 접선에 수직인 직선(유형 03 골조 · ★1)."
```

```yaml
- id: RPM-CALC1-0334
  page: 55
  vendor_label: "교과서 04-2 접선의 방정식을 구하는 방법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    곡선 y=-x²+3x+5 에 접하고 기울기가 1 인 직선의 방정식.
  category: "y'=1 → 접점 → 점-기울기 식"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "기울기가 주어진 접선의 방정식"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    y'=-2x+3=1 → x=1, y=7. y-7=(x-1) → y=x+6. 기울기 조건으로 접점을 먼저 찾는 표준 절차. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "-2x+3=1 → 접점 (1, 7) → y=x+6"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y=x+6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0334.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차식 계수·기울기 값 자유. 제약: y'=k 의 해가 정수(접점 정수), 이차함수는 접선이 하나뿐."
    creative: "(1) 기울기 대신 「직선 y=x+k 에 평행」 으로(0338 골조 · ★1) (2) 삼차함수로 바꾸면 접점 둘(0336 골조 · ★1~2) (3) 「접선의 y절편이 최대가 되는 접선」 → 절편을 접점 t 의 함수로(★3 · I-EQV d1)."
```

```yaml
- id: RPM-CALC1-0335
  page: 55
  vendor_label: "교과서 04-2 접선의 방정식을 구하는 방법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    곡선 y=(1/2)x²-5x+3 에 접하고 기울기가 1 인 직선의 방정식.
  category: "y'=1 → 접점 → 점-기울기 식"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "기울기가 주어진 접선의 방정식"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    y'=x-5=1 → x=6, y=18-30+3=-9. y+9=(x-6) → y=x-15. 0334 와 같은 골조, 분수 계수의 함숫값 계산만 추가. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "x-5=1 → 접점 (6, -9) → y=x-15"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y=x-15$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0335.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분수 계수 유지 여부·일차항·상수항 자유. 제약: 접점 x 가 정수(x-5=k 이므로 항상 정수), y좌표 정수."
    creative: "(1) 접선과 x축·y축이 이루는 삼각형 넓이(★2) (2) 접선이 점 (a, 0) 을 지나도록 하는 a(★1) (3) 두 곡선 y=(1/2)x²-5x+3 과 y=-x²+3x+5 에 동시에 접하는 기울기 1 인 직선이 있는지 판정(★3 · I-CON d1)."
```

```yaml
- id: RPM-CALC1-0336
  page: 55
  vendor_label: "교과서 04-2 접선의 방정식을 구하는 방법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    곡선 y=x³-2x 에 접하고 기울기가 1 인 직선의 방정식(둘 다).
  category: "y'=1 → 접점 두 개 → 접선 두 개"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "기울기가 주어진 접선의 방정식"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    3x²-2=1 → x=±1. (1, -1) 에서 y=x-2, (-1, 1) 에서 y=x+2. 접점이 둘이라 접선도 둘 — 한 근만 잡는 누락이 유일한 함정. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "3x²-2=1 → x=±1 → y=x-2, y=x+2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y=x+2$, $y=x-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0336.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼차식 계수·기울기 자유. 제약: y'=k 가 정수해 둘(3x²-2=k → (k+2)/3 이 완전제곱수), 홀함수를 유지하면 두 접선이 원점 대칭."
    creative: "(1) 두 접선 사이의 거리(★2 · 공통수학2 거리 공식) (2) 두 접선의 y절편 차(0362 골조 · ★2) (3) 원점 대칭을 써서 한 접선에서 다른 접선을 즉시 얻게 하기(★2 · I-SYM d1)."
```

```yaml
- id: RPM-CALC1-0337
  page: 55
  vendor_label: "교과서 04-2 접선의 방정식을 구하는 방법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    곡선 y=-x³+4x 위의 점 (2, 0) 을 지나고 그 점에서의 접선과 수직인 직선의 방정식.
  category: "접선 기울기 → 음의 역수 → 점-기울기 식"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "접선과 수직인 직선의 방정식"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    y'=-3x²+4 → y'(2)=-8. 수직 기울기 1/8, y=(1/8)(x-2)=x/8-1/4. 접선 기울기의 음의 역수를 취하는 한 단계만 교과서 0332 골조에 더해짐. 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "y'(2)=-8 → 수직 기울기 1/8 → y=(1/8)(x-2)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y=\dfrac{1}{8}x-\dfrac{1}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0337.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼차식·점 자유. 제약: 접선 기울기가 0 이 아니어야 수직 직선의 기울기가 존재(0 이면 x=a 꼴), 분수 절편 허용 여부 명시."
    creative: "(1) 수직 직선의 x절편·y절편(0355 골조 · ★1) (2) 접선·수직선·x축이 만드는 삼각형 넓이(★2) (3) 접선 기울기가 0 인 점의 법선 x=a 를 섞은 ㄱㄴㄷ 참·거짓(★2 · I-MI d1)."
```

```yaml
- id: RPM-CALC1-0338
  page: 55
  vendor_label: "교과서 04-2 접선의 방정식을 구하는 방법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    곡선 y=x³+5 에 접하고 직선 y=3x+1 에 평행한 직선의 방정식(둘 다).
  category: "평행 → 기울기 3 → 접점 둘 → 접선 둘"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "기울기가 주어진 접선의 방정식(평행 조건)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    평행이므로 기울기 3. 3x²=3 → x=±1, (1, 6) 에서 y=3x+3, (-1, 4) 에서 y=3x+7. 0336 골조에 「평행 → 같은 기울기」 읽기만 추가. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "평행 → 기울기 3 → 3x²=3 → x=±1 → y=3x+3, y=3x+7"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y=3x+7$, $y=3x+3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0338.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼차식·주어진 직선의 기울기 자유. 제약: 3x²=k 의 해가 정수 둘(k=3, 12, 27 …), 상수항은 y절편에만 영향."
    creative: "(1) 두 접선 사이의 거리(★2) (2) 곡선을 이차로 바꿔 평행한 접선이 하나뿐(★1) (3) 두 접점을 잇는 선분의 중점 → 대칭으로 즉시(★2 · I-SYM d1)."
```

```yaml
- id: RPM-CALC1-0339
  page: 55
  vendor_label: "교과서 04-2 접선의 방정식을 구하는 방법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    점 (-1, 2) 에서 곡선 y=x³-x²-2 에 그은 접선 — ⑴ 접점 x좌표를 t 로 두고 접선의 방정식을 t 로 나타내기 ⑵ t 의 값 ⑶ 접선의 방정식.
  category: "접점 t 설정 → 접선식 → 외부 점 대입 → t 의 삼차방정식 → 접선"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선 밖의 점에서 그은 접선의 방정식(접점 t 설정)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    접점 (t, t³-t²-2) 에서 접선 y=(3t²-2t)(x-t)+t³-t²-2 를 정리하면 y=(3t²-2t)x-2t³+t²-2. (-1, 2) 대입 → t³+t²-t+2=0 → (t+2)(t²-t+1)=0, 이차 인수는 허근이라 t=-2 하나. 기울기 16, y=16x+18. 접점을 미지수로 두는 골조는 유형 07(뒤 범위)의 것이지만 소문항이 단계를 유도해 통찰 없음. 교과서 구역 ★1 — 유도 없이 내면 ★2.
    [분류 이슈] 교과서 구역 ★1 이나 M_total 7 · 소문항 유도를 빼면 외부 점 접선 골조 ★2 — ★1 로 두고 기록.
  tier: star_1
  mechanism_primary: "접점 (t, t³-t²-2) → 접선 y=(3t²-2t)x-2t³+t²-2 → (-1, 2) 대입 → t³+t²-t+2=0 → t=-2 → y=16x+18"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '(1) $y=(3t^2-2t)x-2t^3+t^2-2$ \quad (2) $-2$ \quad (3) $y=16x+18$'
  answer_source: "답지(답 크롭은 (1)까지 · (2)(3)은 해설 크롭의 답 줄)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0339.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "외부 점·삼차식 자유. 제약: 외부 점이 곡선 위에 있지 않아야 하고, t 의 삼차방정식이 정수근 하나 + 허근 이차 인수(접선 하나)인지 실근 셋(접선 셋)인지 명시."
    creative: "(1) 소문항 유도를 없애면 유형 07 골조 ★2 (2) 접선이 둘·셋 나오는 외부 점으로 바꿔 기울기의 합(★2~3 · I-MI d1) (3) 「접선이 하나뿐인 점 (a, b) 의 조건」 → 삼차방정식의 실근 개수(★4 · I-BW d2)."
```

### 교과서 04-3 롤의 정리

```yaml
- id: RPM-CALC1-0340
  page: 55
  vendor_label: "교과서 04-3 롤의 정리"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    f(x)=x²-4x 에 대해 닫힌구간 [-1, 5] 에서 롤의 정리를 만족시키는 c.
  category: "f(a)=f(b) 확인 → f'(c)=0 → 열린구간 안의 c"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "롤의 정리를 만족시키는 c 의 값"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f(-1)=f(5)=5 로 롤의 정리 조건 충족. f'(x)=2x-4=0 → c=2 ∈ (-1, 5). 정리의 결론 f'(c)=0 을 푸는 한 단계. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "f(-1)=f(5) → f'(x)=2x-4=0 → c=2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0340.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차식·구간 자유. 제약: f(a)=f(b) 유지(이차함수는 축에 대칭인 구간), c 는 열린구간 안."
    creative: "(1) 구간 한쪽 끝만 주고 f(a)=f(b) 인 다른 끝 b 부터 구하기(★1~2) (2) 삼차함수로 바꿔 c 가 둘 → 합 묻기(★2 · T-범위) (3) 롤의 정리가 성립하지 않는 함수(|x| 등)를 고르는 ㄱㄴㄷ(★2 · I-MI d1)."
```

```yaml
- id: RPM-CALC1-0341
  page: 55
  vendor_label: "교과서 04-3 롤의 정리"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    f(x)=x³-x²-5x-4 에 대해 닫힌구간 [-1, 3] 에서 롤의 정리를 만족시키는 c.
  category: "f(a)=f(b) 확인 → f'(c)=0 → 끝점 제외 → c"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "롤의 정리를 만족시키는 c 의 값"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f(-1)=f(3)=-1. f'(x)=3x²-2x-5=(3x-5)(x+1)=0 → x=5/3 또는 -1. -1 은 구간의 끝점이라 제외(T-경계), c=5/3. 인수분해 한 번과 끝점 제외가 전부. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "f(-1)=f(3)=-1 → 3x²-2x-5=0 → x=-1(끝점 제외), 5/3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{5}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0341.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼차식·구간 자유. 제약: f(a)=f(b) 유지, f'=0 의 한 근이 끝점과 겹치는 함정을 남길지 명시."
    creative: "(1) 함수에 미정계수를 넣고 f(a)=f(b) 로 먼저 결정한 뒤 c(★2) (2) c 의 개수만 묻기(★1) (3) 사차함수로 바꿔 열린구간 안 c 둘 → 곱(★2)."
```

### 교과서 04-4 평균값 정리

```yaml
- id: RPM-CALC1-0342
  page: 55
  vendor_label: "교과서 04-4 평균값 정리"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    f(x)=x² 에 대해 닫힌구간 [1, 3] 에서 평균값 정리를 만족시키는 c.
  category: "평균변화율 → f'(c) 와 같게 → c"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평균값 정리를 만족시키는 c 의 값"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (f(3)-f(1))/(3-1)=4, f'(c)=2c=4 → c=2. 평균값 정리의 식을 그대로 푸는 한 단계. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "(9-1)/2=4 → 2c=4 → c=2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0342.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차식·구간 자유. 제약: 이차함수는 c 가 항상 구간의 중점이므로 정수 구간이면 c 는 정수 또는 .5."
    creative: "(1) 구간을 [a, b] 문자로 두고 c=(a+b)/2 임을 보이기(★2 · Mₐ 2) (2) 삼차함수로 바꿔 무리수 c(0343 골조 · ★1) (3) 「c 가 구간 중점이 되는 함수는 이차함수뿐인가」 ㄱㄴㄷ(★3 · I-PD d1)."
```

```yaml
- id: RPM-CALC1-0343
  page: 55
  vendor_label: "교과서 04-4 평균값 정리"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    f(x)=-x³+x-2 에 대해 닫힌구간 [-2, 0] 에서 평균값 정리를 만족시키는 c.
  category: "평균변화율 → f'(c) 와 같게 → 이차방정식 → 구간 안 근"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평균값 정리를 만족시키는 c 의 값"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f(-2)=4, f(0)=-2 → 평균변화율 -3. f'(c)=-3c²+1=-3 → c²=4/3 → c=±2√3/3, 구간 (-2, 0) 안은 -2√3/3 (T-범위). 무리수 근과 구간 선택만 추가된 절차. 교과서 구역·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "(f(0)-f(-2))/2=-3 → -3c²+1=-3 → c=±2/√3 → 구간 안 -2√3/3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-\dfrac{2\sqrt{3}}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0343.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼차식·구간 자유. 제약: c² 값이 양수, 구간 안에 드는 근이 하나인지 둘인지 명시(둘이면 합·곱을 묻기)."
    creative: "(1) 구간을 [-2, 2] 로 바꿔 c 둘 → 곱(★2 · I-SYM d1) (2) 「c 의 개수」 로 바꿔 그래프 감각(0344 골조 · ★1~2) (3) 평균변화율이 0 이 되는 구간을 찾아 롤의 정리로 환원(★2 · I-EQV d1)."
```

```yaml
- id: RPM-CALC1-0344
  page: 55
  vendor_label: "교과서 04-4 평균값 정리"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    그래프로 주어진 y=f(x) 에 대해 닫힌구간 [a, b] 에서 평균값 정리를 만족시키는 c 의 개수. (그림)
  category: "현의 기울기 → 그 기울기와 평행한 접선 세기"
  M: {s: 1, k: 1, a: 3, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "평균값 정리의 c 를 「두 끝점을 잇는 현과 평행한 접선의 접점」 으로 옮겨 그래프에서 세기"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "평균값 정리 — 그래프에서 c 의 개수(현과 평행한 접선)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    그림에서 x=a 는 극대점, x=b 는 오르막 끝이고 f(b)>f(a) 라 현의 기울기는 양수. 기울기가 같은 접선은 가운데 오르막(골 → 봉우리)에서 기울기가 커졌다 작아지며 두 번, 마지막 오르막(골 → b)에서 한 번 → 3. 정리를 「현과 평행한 접선」 으로 읽는 RT d1 한 개 뒤는 그림 세기. 교과서 구역·d1 하나 → ★1 유지.
  tier: star_1
  mechanism_primary: "현의 기울기 (f(b)-f(a))/(b-a) → 평행한 접선을 그래프에서 세기 → 가운데 오르막 2 + 끝 오르막 1 → 3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$3$'
  answer_source: "답지"
  figure: "crop:fig-0344.png"
  latex: latex-bank/rpm-calc1/items/0344.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "그래프 문항이라 수치 변형 없음. 제약: 그림 라벨(O·a·b·y=f(x)) 고정, 새 그림은 봉우리·골 개수와 현의 기울기 대비로 답 개수를 통제(가운데 오르막의 최대 기울기가 현보다 커야 2개)."
    creative: "(1) f(a)=f(b) 인 그림으로 바꿔 롤의 정리 f'(c)=0 인 점 세기(★1) (2) 구간을 [a, b] 안의 부분 구간으로 옮겨 개수 변화 묻기(★2 · I-MI d1) (3) 식으로 준 삼차함수에서 c 의 개수 → 이차방정식 실근 개수(★2 · I-RT d1)."
```

### 유형 01 접선의 기울기

```yaml
- id: RPM-CALC1-0345
  page: 56
  vendor_label: "유형 01 접선의 기울기"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    곡선 y=x³+ax²+b 위의 점 (2, 6) 에서의 접선의 기울기가 8 일 때 상수 a, b 에 대해 a+b.
  category: "y'(2)=8 → a → 점 대입 → b"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "접선의 기울기 조건으로 미정계수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y'=3x²+2ax 에 x=2 → 12+4a=8 → a=-1. 점 (2, 6) 대입 → 8-4+b=6 → b=2. a+b=1. 기울기 조건과 점 조건으로 미정계수 둘을 순차 결정. 통찰 없음·M_total 5 로 −1 후보이나 교과서 구역엔 없는 미정계수 결정 골조라 유형 대표 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "y'(2)=12+4a=8 → a=-1 → (2, 6) 대입 → b=2 → a+b=1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0345.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접점·기울기·삼차식 형태 자유. 제약: a 가 기울기 식에만, b 가 점 조건에만 걸리게 두면 연립 없이 순차 결정, 정수해."
    creative: "(1) y=x³+ax²+bx 로 바꿔 a, b 가 두 식에 모두 걸리게 연립(★2 · Mₖ 2) (2) 「접선의 기울기가 8 인 점이 (2, 6) 뿐」 조건 → y'=8 이 중근(★3 · I-EQV d2) (3) 접선의 방정식까지 묻기(유형 02 골조 · ★2)."
```

```yaml
- id: RPM-CALC1-0346
  page: 56
  vendor_label: "유형 01 접선의 기울기"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    다항함수 f 의 그래프와 직선 y=-3x+2 가 점 (2, -4) 에서 접할 때 lim_{h→0} (f(2+5h)-f(2))/h 의 값.
  category: "접함 → f'(2)=-3 → 극한식을 미분계수로 → 5f'(2)"
  M: {s: 1, k: 1, a: 3, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "접선 조건 → f(a)·f'(a) → 미분계수 극한식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    접한다는 조건에서 f(2)=-4, f'(2)=-3. 극한식은 (f(2+5h)-f(2))/(5h)·5 → 5f'(2)=-15. 「접선 기울기 = 미분계수」 와 미분계수 정의(02 단원)의 표준 변형이라 통찰 없음. 추상 f 로 M_total 6 → 중하 범위(★1~2)에서 ★2.
  tier: star_2
  mechanism_primary: "접함 → f'(2)=-3 → (f(2+5h)-f(2))/h = 5·f'(2) → -15"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-15$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0346.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접점·직선·극한식의 h 계수(5h → 2h, -3h 등) 자유. 제약: 접점이 직선 위에 있도록 y좌표 맞춤, 분자 h 계수 / 분모 h 계수가 정수."
    creative: "(1) (f(2+h)-f(2-h))/h 꼴로 → 2f'(2)(★2) (2) lim_{x→2} (f(x)+4)/(x²-4) 처럼 x→a 꼴로 바꿔 인수분해 추가(★2~3) (3) 「곡선 y=f(x) 와 y=g(x) 가 x=2 에서 접함」 으로 바꿔 f'(2)=g'(2) 활용(★3 · I-EQV d1)."
```

```yaml
- id: RPM-CALC1-0347
  page: 56
  vendor_label: "유형 01 접선의 기울기"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    곡선 y=x³+3ax²+bx+c 위의 점 (-1, 1) 에서의 접선의 기울기가 15, x=2 인 점에서의 접선의 기울기가 6 일 때 ab+c.
  category: "y'(-1)=15, y'(2)=6 연립 → a, b → 점 대입 → c"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "접선의 기울기 조건으로 미정계수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y'=3x²+6ax+b 에서 3-6a+b=15, 12+12a+b=6 → a=-1, b=6. 점 (-1, 1) 대입 → -1+3a-b+c=1 → c=11. ab+c=5. 조건 셋을 순서대로 대입하고 연립 한 번. 중·통찰 없음·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "y'(-1)=15 · y'(2)=6 연립 → a=-1, b=6 → (-1, 1) 대입 → c=11 → ab+c=5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0347.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 기울기 조건의 x좌표·값과 점 좌표 자유. 제약: 연립 결과가 정수, 점 조건은 c 에만 걸리게 두면 순차 해결."
    creative: "(1) 기울기 조건 하나를 「x=2 에서 접선이 x축에 평행」 으로(★2) (2) 「두 점에서의 접선이 서로 평행」 조건 → y'(p)=y'(q) 의 대칭축(★3 · I-SYM d1) (3) 접선 기울기의 최솟값 조건으로 대체(0348 골조 · ★2~3)."
```

```yaml
- id: RPM-CALC1-0348
  page: 56
  vendor_label: "유형 01 접선의 기울기"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    곡선 y=-x³+9x²-20x+1 의 접선 중 기울기가 최대인 직선 l 의 기울기 M 과 접점 (p, q) 에 대해 p+q+M.
  category: "기울기 함수 y' → 이차함수의 최댓값 → 접점"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「접선 기울기의 최대」 를 도함수 y'=-3x²+18x-20 의 최댓값(꼭짓점) 으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "접선의 기울기의 최대·최소(도함수의 최댓값)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y'=-3x²+18x-20=-3(x-3)²+7 이 최대인 x=3 에서 M=7, q=y(3)=-5. p+q+M=5. 「기울기 최대」 를 도함수의 최댓값으로 읽는 EQV d1 한 개 뒤는 완전제곱 정리. 중 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "y'=-3(x-3)²+7 → 최대 x=3, M=7 → q=y(3)=-5 → p+q+M=5"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0348.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼차식 계수 자유(최고차 음수면 최대, 양수면 최소). 제약: y' 의 꼭짓점 x 가 정수, y(p) 정수."
    creative: "(1) 최고차 양수로 바꿔 「기울기가 최소인 접선」(★2) (2) 그 접선의 방정식·x절편 묻기(★2) (3) 「모든 접선의 기울기가 k 이하」 인 k 의 최솟값(★2~3 · I-EQV d1) (4) 사차함수로 바꾸면 y' 이 삼차 → 최대 없음, 「기울기 최소」 는 극소 비교(★3 · 05 단원 결합)."
```

### 유형 02 접점의 좌표가 주어진 접선의 방정식

```yaml
- id: RPM-CALC1-0349
  page: 56
  vendor_label: "유형 02 접점의 좌표가 주어진 접선의 방정식"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    곡선 y=x³-x²+ax+2 위의 점 (1, 3) 에서의 접선이 y=bx+c 일 때 상수 a, b, c 에 대해 abc. 5지선다.
  category: "점 대입 → a → y'(1) → b → 접선식 → c"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "접점의 좌표가 주어진 접선의 방정식(미정계수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (1, 3) 대입 → 1-1+a+2=3 → a=1. y'=3x²-2x+1 → y'(1)=2=b. y-3=2(x-1) → y=2x+1 → c=1. abc=2 → ②. 조건 순차 대입. 유형 대표·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "(1, 3) 대입 → a=1 → y'(1)=2=b → y=2x+1 → c=1 → abc=2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0349.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼차식·접점 자유. 제약: a 결정 뒤 기울기·절편이 정수, 선택지에 abc 가 들어가게."
    creative: "(1) 접선의 방정식을 주고 a 와 접점 x좌표를 역으로(★2~3 · I-BW d1) (2) 「접선이 원점을 지남」 조건으로 a 결정(★2) (3) 접선이 곡선과 다시 만나는 점(유형 04 골조 · ★2 · I-EQV d1)."
```

```yaml
- id: RPM-CALC1-0350
  page: 56
  vendor_label: "유형 02 접점의 좌표가 주어진 접선의 방정식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    곡선 y=-3x²+7x-4 위의 두 점 (0, -4), (2, -2) 에서의 접선 l, m 의 교점의 좌표.
  category: "두 접선식 → 연립 → 교점"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 접선의 교점"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y'=-6x+7 → l: y=7x-4, m: y+2=-5(x-2) → y=-5x+8. 연립 → (1, 3). 접선을 둘 세우고 연립하는 절차(이차함수에서 교점 x좌표가 두 접점 x좌표의 평균이라는 성질은 검산용). 중·통찰 없음, 단계 5개(Mₛ 2)라 −1 후보 미적용 → ★2 유지.
  tier: star_2
  mechanism_primary: "y'(0)=7 → l: y=7x-4 · y'(2)=-5 → m: y=-5x+8 → 연립 → (1, 3)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$(1,\,3)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0350.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차식·두 접점 자유. 제약: 이차함수는 교점 x좌표가 두 접점 x좌표의 평균이므로 두 x좌표 합이 짝수면 교점 정수."
    creative: "(1) 두 접선과 x축이 만드는 삼각형 넓이(★2) (2) 「두 접선이 서로 수직」 조건으로 접점 하나를 미지수로(★3 · I-BW d1) (3) 일반 이차함수에서 교점 x좌표가 접점 x좌표의 평균임을 보이기(★3 · I-PD d1 · Mₐ 3)."
```

```yaml
- id: RPM-CALC1-0351
  page: 56
  vendor_label: "유형 02 접점의 좌표가 주어진 접선의 방정식"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    다항함수 f 가 lim_{x→-1} (f(x)-3)/(x+1)=-2 를 만족할 때 점 (-1, f(-1)) 에서의 접선 y=ax+b 의 a+b. 서술형.
  category: "극한 조건 → f(-1)=3, f'(-1)=-2 → 접선식"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "극한이 존재하고 분모→0 이므로 분자→0: f(-1)=3, 그러면 극한식은 미분계수 정의 f'(-1)=-2"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "극한 조건 → f(a)·f'(a) → 접선의 방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분모→0 인데 극한이 존재하므로 f(-1)-3=0, 극한식은 f'(-1)=-2. 접선 y-3=-2(x+1) → y=-2x+1, a+b=-1. 극한 조건을 함숫값·미분계수로 옮기는 EQV d1 이 핵심이고 뒤는 한 줄. 중·서술형 → ★2 유지.
  tier: star_2
  mechanism_primary: "극한 존재 → f(-1)=3 · f'(-1)=-2 → y=-2(x+1)+3 → a+b=-1"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0351.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "극한점·극한값·상수 3 자유. 제약: 분모가 (x-a) 일차, 분자의 상수는 f(a) 가 되도록, 접선 계수 정수."
    creative: "(1) 분모를 x²-1 로 → 인수분해 뒤 f'(-1) 에 1/2 배(★2~3) (2) 조건을 둘(x→1, x→2) 주고 두 접선의 교점(★3) (3) lim_{x→-1} f(x)/(x+1) 이 존재한다는 조건만 주고 「접선이 원점을 지남」 을 결론(★2 · I-EQV d1)."
```

```yaml
- id: RPM-CALC1-0352
  page: 56
  vendor_label: "유형 02 접점의 좌표가 주어진 접선의 방정식"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    최고차항 계수 1 인 삼차함수 f 가 f(0)=f(3)=f(4), f(1)=1 을 만족할 때 x=2 인 점에서의 접선의 방정식.
  category: "세 점 등값 → f(x)=x(x-3)(x-4)+k → f(1) 로 k → 접선"
  M: {s: 2, k: 2, a: 3, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f(0)=f(3)=f(4)=k 를 「f(x)-k 가 x(x-3)(x-4) 를 인수로 가짐」 으로 옮겨 미정계수 넷 대신 k 하나로 f 를 결정"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "함숫값 등식 조건으로 삼차함수 결정 → 접선의 방정식"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    세 함숫값이 같으므로 f(x)=x(x-3)(x-4)+k, f(1)=6+k=1 → k=-5. f'(x)=3x²-14x+12 → f'(2)=-4, f(2)=-1 → y=-4x+7. 등값 조건을 인수 형태로 읽는 EQV d2 가 핵심(미정계수 넷 연립으로 풀면 Mₖ 3). 상중 출발·d2 하나 → ★3 유지.
  tier: star_3
  mechanism_primary: "f(0)=f(3)=f(4) → f(x)=x(x-3)(x-4)+k → f(1)=1 → k=-5 → f'(2)=-4, f(2)=-1 → y=-4x+7"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$y=-4x+7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0352.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "등값 세 점·f(1) 값·접점 x 자유. 제약: 세 점이 서로 달라야 하고(삼차 결정), 접점의 함숫값·기울기 정수."
    creative: "(1) 등값 조건을 f(0)=f(2), f'(1)=0 같은 대칭 조건으로 → SYM 유도(★3 · I-SYM d1) (2) 「x=2 에서의 접선이 x축에 평행」 을 조건으로 주고 최고차 계수를 미정으로(★3~4) (3) 그 접선이 곡선과 다시 만나는 점까지(유형 04 결합 · ★3~4)."
```

### 유형 03 접선과 수직인 직선의 방정식

```yaml
- id: RPM-CALC1-0353
  page: 57
  vendor_label: "유형 03 접선과 수직인 직선의 방정식"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    곡선 y=x(x+1)(2-x) 위의 점 (2, 0) 을 지나고 그 점에서의 접선과 수직인 직선 y=mx+n 의 m+n. 5지선다.
  category: "전개(또는 곱의 미분) → y'(2) → 음의 역수 → 직선"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "접선과 수직인 직선의 방정식"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    y=-x³+x²+2x, y'(2)=-12+4+2=-6. 수직 기울기 1/6, y=(1/6)(x-2) → m+n=1/6-1/3=-1/6 → ③. 곱 꼴을 전개(또는 곱의 미분)하는 것 말고는 교과서 0337 과 같은 골조. 대표문제 ★2 출발이나 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "y=-x³+x²+2x → y'(2)=-6 → 수직 기울기 1/6 → y=(x-2)/6 → m+n=-1/6"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0353.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "인수 형태 삼차식·점 자유. 제약: 점이 곡선 위(인수의 근을 쓰면 y=0), y'(a)≠0, 선택지 분수 맞추기."
    creative: "(1) 수직 직선의 x절편·y절편(★1) (2) 곱의 미분법에서 (x-2) 인수가 남는 항이 0 이 되는 지름길 유도(★2 · I-SC d1) (3) 접선·법선·x축이 만드는 삼각형 넓이(★2)."
```

```yaml
- id: RPM-CALC1-0354
  page: 57
  vendor_label: "유형 03 접선과 수직인 직선의 방정식"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    곡선 y=x²+ax+b 위의 점 (3, 2) 에서의 접선과 수직인 직선의 기울기가 -1/4 일 때 상수 a, b 에 대해 ab.
  category: "수직 기울기 → 접선 기울기 4 → y'(3)=4 → a → 점 대입 → b"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "접선과 수직인 직선의 방정식(미정계수)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    수직 직선 기울기 -1/4 → 접선 기울기 4. y'=2x+a → 6+a=4 → a=-2. (3, 2) 대입 → 9-6+b=2 → b=-1. ab=2. 수직 조건을 접선 기울기로 되돌린 뒤 미정계수 순차 결정. 중하·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "수직 기울기 -1/4 → 접선 기울기 4 → 6+a=4 → a=-2 → (3, 2) 대입 → b=-1 → ab=2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0354.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "점·수직 기울기 자유. 제약: 접선 기울기(수직 기울기의 음의 역수)가 정수, 점 조건 정수."
    creative: "(1) 수직 직선의 방정식을 주고 접점을 미지수로(★2 · I-BW d1) (2) 「접선과 수직인 직선이 원점을 지남」 조건(★2) (3) 삼차함수로 바꾸고 조건 하나 추가(★2)."
```

```yaml
- id: RPM-CALC1-0355
  page: 57
  vendor_label: "유형 03 접선과 수직인 직선의 방정식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    곡선 y=2x-(1/3)x³ 위의 점 (2, 4/3) 을 지나고 그 점에서의 접선과 수직인 직선 l 의 y절편.
  category: "y'(2) → 음의 역수 → 직선 → y절편"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "접선과 수직인 직선의 방정식"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    y'=2-x² → y'(2)=-2, 수직 기울기 1/2. y-4/3=(1/2)(x-2) → y=x/2+1/3, y절편 1/3. 분수 처리만 있고 교과서 0337 과 같은 골조. 중 출발이나 통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "y'(2)=-2 → 기울기 1/2 → y=(x-2)/2+4/3 → y절편 1/3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{1}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0355.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼차식·점 자유. 제약: 점이 곡선 위(분수 y좌표 허용), 접선 기울기 ≠0."
    creative: "(1) x절편으로(★1) (2) 법선이 곡선과 다시 만나는 점 → 삼차방정식(★3) (3) 접선·법선·y축이 만드는 삼각형 넓이(★2)."
```

### 유형 04 곡선과 접선의 교점

```yaml
- id: RPM-CALC1-0356
  page: 57
  vendor_label: "유형 04 곡선과 접선의 교점"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    곡선 y=x³-4x²+5 위의 점 (1, 2) 에서의 접선이 곡선과 다시 만나는 점 (a, b) 의 a-b.
  category: "접선식 → 곡선과 연립 → 접점을 이중근으로 나눔 → 다른 교점"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "접점 x=1 이 (곡선-접선)=0 의 이중근임을 써서 (x-1)² 로 나누거나 세 근의 합 4=1+1+a 로 남은 근을 얻음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "곡선과 접선의 교점(접점 = 이중근)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y'(1)=-5, 접선 y=-5x+7. x³-4x²+5=-5x+7 → x³-4x²+5x-2=(x-1)²(x-2)=0 → x=2, y=-3 → a-b=5. 접점이 이중근이라는 사실(또는 근의 합)로 나머지 근을 얻는 EQV d1. 유형 대표·M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "y=-5x+7 → x³-4x²+5x-2=0 → (x-1)²(x-2) → (2, -3) → a-b=5"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0356.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼차식·접점 자유. 제약: 다른 교점 x좌표 = -(x² 계수) - 2·(접점 x) 가 정수, 접점 y좌표 정수."
    creative: "(1) 다른 교점에서의 접선(0357 골조 · ★2) (2) 「접선이 곡선과 다시 만나지 않는」 접점 조건 → 변곡점(★3 · I-EQV d2) (3) 사차함수로 바꿔 다른 교점 둘 → 이차방정식(★3)."
```

```yaml
- id: RPM-CALC1-0357
  page: 57
  vendor_label: "유형 04 곡선과 접선의 교점"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    곡선 y=x³-3x²-2x+4 위의 점 (0, 4) 에서의 접선이 곡선과 다시 만나는 점 P 에서의 접선의 방정식.
  category: "접선 → 연립 → 이중근 나눔 → P → P 에서 접선"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "접점 x=0 이 (곡선-접선)=0 의 이중근이므로 x²(x-3)=0 으로 바로 갈라 P 의 x좌표 3 을 얻음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "곡선과 접선의 교점(접점 = 이중근)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y'(0)=-2, 접선 y=-2x+4. 곡선과 연립 x³-3x²=0 → x²(x-3)=0 → P(3, -2). y'(3)=7 → y=7x-23. 접점 이중근(x²)으로 다른 교점을 얻는 EQV d1 뒤 접선 한 번 더. 중 → ★2.
  tier: star_2
  mechanism_primary: "y=-2x+4 → x²(x-3)=0 → P(3, -2) → y'(3)=7 → y=7x-23"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$y=7x-23$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0357.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼차식·접점 자유. 제약: 접점을 x=0 으로 두면 상수항·일차항이 접선에 그대로 남아 연립이 x²(x-k) 로 단순, k 정수."
    creative: "(1) P 에서의 접선이 곡선과 다시 만나는 점 → 반복(★3) (2) 두 접선의 교점(★3) (3) 접점 x 를 t 로 두고 다른 교점 x=-2t-(x² 계수) 공식 유도(★3 · I-PD d1)."
```

```yaml
- id: RPM-CALC1-0358
  page: 57
  vendor_label: "유형 04 곡선과 접선의 교점"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    곡선 y=-x³+3x²+x-7 위의 점 P(2, -1) 에서의 접선이 x축과 만나는 점 Q, 곡선과 다시 만나는 점 R 일 때 PQ:PR. 5지선다. (그림)
  category: "접선 → Q(x절편) → 이중근 나눔 → R → 같은 직선 위 길이비 = x좌표 차의 비"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "접점 x=2 가 (곡선-접선)=0 의 이중근이므로 (x-2)²(x+1)=0 으로 갈라 R 의 x좌표 -1 을 얻음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "곡선과 접선의 교점(접점 = 이중근)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y'(2)=1, 접선 y=x-3, Q(3, 0). 연립 x³-3x²+4=(x-2)²(x+1)=0 → R(-1, -4). 세 점이 같은 직선 위이므로 PQ:PR=|3-2|:|2-(-1)|=1:3 → ②(거리 공식으로도 √2:3√2). 이중근으로 R 을 얻는 EQV d1 이 핵심, 길이비는 x좌표 차로 읽으면 한 줄. 중 → ★2.
  tier: star_2
  mechanism_primary: "y=x-3 → Q(3, 0) → (x-2)²(x+1)=0 → R(-1, -4) → x좌표 차 1:3"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지"
  figure: "crop:fig-0358.png"
  latex: latex-bank/rpm-calc1/items/0358.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼차식·접점 자유. 제약: 접선 기울기 ≠0(Q 존재), R 의 x좌표 정수, 그림의 P·Q·R 배치(Q 가 P 와 R 사이가 아님)를 새 그림에 맞춤."
    creative: "(1) 삼각형 OQR 넓이(★2~3) (2) Q 가 P 와 R 사이에 오도록 바꿔 PQ:QR(★2) (3) 「PQ:PR=1:3 이 되는 접점」 을 역으로 찾기(★4 · I-BW d2)."
```

### 유형 05 기울기가 주어진 접선의 방정식

```yaml
- id: RPM-CALC1-0359
  page: 58
  vendor_label: "유형 05 기울기가 주어진 접선의 방정식"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    곡선 y=3x²-4x+1 에 접하고 직선 x+y-3=0 에 평행한 직선의 방정식.
  category: "평행 → 기울기 -1 → y'=-1 → 접점 → 접선"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "기울기가 주어진 접선의 방정식(평행 조건)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    직선을 y=-x+3 으로 읽어 기울기 -1. y'=6x-4=-1 → x=1/2, y=-1/4. y=-(x-1/2)-1/4=-x+1/4. 일반형 직선에서 기울기를 읽는 단계 뒤는 교과서 0334·0338 골조, 분수 계산만. 대표문제 ★2 출발이나 통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "x+y-3=0 → 기울기 -1 → 6x-4=-1 → 접점 (1/2, -1/4) → y=-x+1/4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y=-x+\dfrac{1}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0359.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차식·직선 자유. 제약: 접점 x 가 간단한 분수·정수, 직선은 일반형으로 주어 기울기 읽기 단계 유지."
    creative: "(1) 접선과 주어진 직선 사이의 거리(★2) (2) 삼차함수로 → 평행한 접선 둘(★2) (3) 삼차함수에서 「평행한 접선이 존재하지 않는 직선의 기울기 범위」 → y' 의 치역(★3 · I-EQV d1)."
```

```yaml
- id: RPM-CALC1-0360
  page: 58
  vendor_label: "유형 05 기울기가 주어진 접선의 방정식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    곡선 y=-x²+3x+2 에 접하고 x축의 양의 방향과 이루는 각이 45° 인 직선의 x절편.
  category: "각 → 기울기 tan45°=1 → y'=1 → 접점 → 접선 → x절편"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "기울기가 주어진 접선의 방정식(각 → 기울기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    45° → 기울기 1. y'=-2x+3=1 → x=1, y=4. y=x+3 → x절편 -3. 각을 기울기로 바꾸는 표준 대응 뒤는 교과서 0334 골조. 중 출발이나 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "45° → 기울기 1 → -2x+3=1 → 접점 (1, 4) → y=x+3 → x절편 -3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0360.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차식·각(45°·135°) 자유. 제약: 각은 tan 값이 ±1 인 것만(미적분Ⅰ 범위), 접점 정수."
    creative: "(1) 135° 로 → 기울기 -1(★1) (2) 접선·x축·y축이 이루는 삼각형 넓이(★2) (3) 「접선이 x축 양의 방향과 이루는 각이 45° 이상」 인 접점 x 의 범위 → y'≥1 부등식(★2 · I-RT d1)."
```

```yaml
- id: RPM-CALC1-0361
  page: 58
  vendor_label: "유형 05 기울기가 주어진 접선의 방정식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    곡선 y=(1/2)x⁴ 위의 점과 직선 y=2x-9 사이의 거리의 최솟값.
  category: "최단거리 → 직선에 평행한 접선의 접점 → 점과 직선 사이 거리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「곡선 위 점과 직선 사이 거리의 최솟값」 을 「직선에 평행한 접선의 접점에서 직선까지의 거리」 로 기하적으로 옮김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "곡선 위의 점과 직선 사이 거리의 최솟값(평행한 접선)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    기울기 2 인 접선: y'=2x³=2 → x=1, 접점 (1, 1/2). 거리 |2·1-1/2-9|/√5=(15/2)/√5=3√5/2. 거리 최솟값을 평행한 접선으로 옮기는 RT d2 가 핵심, 뒤는 공통수학2 의 점과 직선 사이 거리 공식. 중 출발·d2 하나(+1 조건 미달) → ★2 유지(학생 체감은 ★3 에 가까움).
  tier: star_2
  mechanism_primary: "y'=2x³=2 → 접점 (1, 1/2) → |2-1/2-9|/√5 → 3√5/2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{3\sqrt{5}}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0361.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "곡선(짝수 차수·아래로 볼록)·직선 자유. 제약: 곡선과 직선이 만나지 않아야 최솟값이 접점에서 생김(만나면 0), y'=기울기 의 실근이 하나가 되게(x⁴ 계열은 y' 이 홀함수라 유일), 거리 값이 정리된 무리수."
    creative: "(1) 곡선을 삼차로 바꾸면 평행한 접선이 둘 → 직선과의 위치로 하나 기각(★3 · I-VF d1) (2) 「거리가 최소가 되는 곡선 위의 점의 좌표」(★2) (3) 직선을 y=2x+k 로 두고 최소 거리가 3√5/2 가 되는 k(★3 · I-BW d1)."
```

```yaml
- id: RPM-CALC1-0362
  page: 58
  vendor_label: "유형 05 기울기가 주어진 접선의 방정식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    곡선 y=x³-2x 에 접하고 기울기가 10 인 두 직선이 y축과 만나는 점 A, B 사이의 거리.
  category: "y'=10 → 접점 둘 → 접선 둘 → y절편 차"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "기울기가 주어진 접선의 방정식(두 접선의 y절편)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    3x²-2=10 → x=±2, 접점 (2, 4)·(-2, -4). 접선 y=10x-16, y=10x+16 → A(0, -16), B(0, 16), AB=32. 교과서 0336 골조를 두 번 하고 y절편 차. 홀함수라 한 접선에서 다른 접선을 원점 대칭으로 얻는 지름길(SYM)은 필수가 아님. 중·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "3x²-2=10 → x=±2 → y=10x-16, y=10x+16 → A(0, -16)·B(0, 16) → 32"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$32$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0362.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼차식(홀함수 유지 여부)·기울기 자유. 제약: y'=k 의 해가 정수 둘, 홀함수면 y절편이 ± 대칭이라 AB 는 한 절편의 2배."
    creative: "(1) 홀함수를 깨서(y=x³-2x+1 등) 대칭 지름길 제거(★2) (2) 두 접선 사이의 거리(★2~3) (3) 두 접점과 원점이 이루는 삼각형 넓이 → 대칭으로 한 줄(★2 · I-SYM d1)."
```

### 유형 06 곡선과 직선이 접할 때 미정계수 구하기

```yaml
- id: RPM-CALC1-0363
  page: 58
  vendor_label: "유형 06 곡선과 직선이 접할 때 미정계수 구하기"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    곡선 y=x³-3x²-9x+a 와 직선 y=-12x+11 이 접할 때 상수 a. 5지선다.
  category: "접함 → f'(t)=-12 → t → f(t)=-12t+11 → a"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선과 직선이 접할 때 미정계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    3t²-6t-9=-12 → (t-1)²=0 → t=1. f(1)=a-11=-12+11 → a=10 → ④. 접함을 「같은 점·같은 기울기」 두 식으로 쓰는 정의 적용이고 기울기 식이 완전제곱이라 접점 유일(-12 가 f' 의 최솟값 → 접점은 변곡점). 유형 대표·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "f'(t)=-12 → (t-1)²=0 → t=1 → f(1)=-12+11 → a=10"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0363.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼차식·직선 자유. 제약: f'(t)=직선 기울기 가 중근이면 접점 유일(아니면 접점 후보 둘 → a 둘이 되어 발문을 「모든 a 의 합」 으로 바꿔야 함), 정수해."
    creative: "(1) f'(t)=k 가 두 실근을 갖게 바꿔 「모든 a 의 합」(★2~3 · I-MI d1) (2) 접점 좌표까지 묻기(★2) (3) 직선 기울기를 미지수로 두고 「접점이 변곡점」 이 되는 조건(★3 · 05 단원 결합)."
```

```yaml
- id: RPM-CALC1-0364
  page: 58
  vendor_label: "유형 06 곡선과 직선이 접할 때 미정계수 구하기"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    곡선 y=x²-4x+a 와 직선 y=-2x+5 의 접점의 x좌표를 t 라 할 때 a+t.
  category: "y'=-2 → t → 접점이 직선·곡선 위 → a"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선과 직선이 접할 때 미정계수 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    2t-4=-2 → t=1. 접점 (1, 3) 이 곡선 위: 1-4+a=3 → a=6. a+t=7. (판별식 x²-2x+a-5=0, D/4=0 으로도 같음.) 이차함수라 미분 없이도 풀리는 최소 골조. 중하·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "2t-4=-2 → t=1 → (1, 3) 이 곡선 위 → a=6 → a+t=7"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0364.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차식·직선 자유. 제약: t 정수(y'=기울기 가 일차식이라 항상 하나), a 정수."
    creative: "(1) 판별식 풀이와 미분 풀이 두 갈래를 비교하게 하기(★1~2 · I-SC d1) (2) 직선의 y절편을 미지수로 두고 접점 x좌표 조건(★2) (3) 「접점이 x축 위」 조건 추가(★2)."
```

```yaml
- id: RPM-CALC1-0365
  page: 58
  vendor_label: "유형 06 곡선과 직선이 접할 때 미정계수 구하기"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    곡선 y=x³+ax+3 과 직선 y=4x+b 가 점 (-1, c) 에서 접할 때 abc. 5지선다.
  category: "f'(-1)=4 → a → c=f(-1) → 직선 대입 → b"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선과 직선이 접할 때 미정계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    3+a=4 → a=1. c=f(-1)=-1-1+3=1. 직선에 대입 1=-4+b → b=5. abc=5 → ④. 접점 x좌표가 주어져 기울기·함숫값·직선 세 조건을 순서대로 대입하는 절차. 중·통찰 없음·M_total 5 이나 교과서에 없는 미정계수 셋 결정 골조라 ★2 유지.
  tier: star_2
  mechanism_primary: "f'(-1)=3+a=4 → a=1 → c=f(-1)=1 → 1=-4+b → b=5 → abc=5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0365.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접점 x·직선 기울기·상수 자유. 제약: a 가 f' 에만, b 가 직선에만 걸리게 두면 순차 결정, 정수해."
    creative: "(1) 접점 x좌표를 숨겨 t 미지수로(0366 골조 · ★3) (2) a 를 x² 계수에도 넣어 연립(★2) (3) 「접점이 x축 위」 로 c=0 을 조건화(★2)."
```

```yaml
- id: RPM-CALC1-0366
  page: 58
  vendor_label: "유형 06 곡선과 직선이 접할 때 미정계수 구하기"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    곡선 y=x³+ax²+2ax+1 과 직선 y=3x+1 이 접하도록 하는 모든 상수 a 의 값의 곱.
  category: "접함 → f-g=x(x²+ax+2a-3) 이 중근 → x=0 중근 / 이차 인수 중근 두 갈래 → a 셋 → 곱"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "접함을 「f(x)-g(x) 가 중근을 가짐」 으로 옮기고 상수항이 같아 x 가 인수로 빠지는 x(x²+ax+2a-3) 구조를 봄"
    - step: 2
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "중근이 생기는 두 경우 — x=0 이 이차 인수의 근(2a-3=0) / 이차 인수의 판별식 0(a²-8a+12=0) — 를 모두 세어 a=3/2, 2, 6"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "곡선과 직선이 접할 때 미정계수 구하기(접점 갈래)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    접점 t 에서 f'(t)=3, f(t)=3t+1 로 두면 t(t²+at+2a-3)=0 과 3t²+2at+2a-3=0. t=0 이면 a=3/2, t≠0 이면 두 식에서 t=-a/2 → a²-8a+12=0 → a=2, 6(같은 결과: f-g=x(x²+ax+2a-3) 의 중근 조건 = 2a-3=0 또는 판별식 0). 곱 3/2·2·6=18. t=0 갈래를 빠뜨리면 12 가 되는 함정. 접함↔중근 EQV d2 + 두 갈래 MI d1. 상중 출발, 통찰 2개로 +1 후보이나 둘 다 유형 06 표준 골조라 ★3 유지.
    [분류 이슈] 통찰 2개(EQV d2·MI d1) 기준 ★4 후보 — ★3 으로 두고 기록.
  tier: star_3
  mechanism_primary: "f'(t)=3 · f(t)=3t+1 → t(t²+at+2a-3)=0 → t=0 → a=3/2 / t=-a/2 → a²-8a+12=0 → a=2, 6 → 곱 18"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$18$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0366.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선 기울기·상수, 곡선에서 a 의 배치 자유. 제약: 곡선과 직선의 상수항을 같게 두어 f-g 가 x 를 인수로 갖게 해야 두 갈래 구조가 유지, 이차 인수의 판별식이 a 의 이차식으로 정수근 둘, x=0 갈래의 a 가 판별식 근과 겹치지 않게."
    creative: "(1) 상수항을 다르게 해 x 인수를 없애면 삼차식 중근 조건 → 미분 연립만 남고 갈래 하나(★3) (2) 「접하도록 하는 a 의 개수」 로 바꿔 갈래 세기 강조(★3 · I-MI 유지) (3) 「접점이 두 개가 되는 a 가 있는가」 로 바꿔 두 갈래가 동시에 성립하는지 검증(★4 · I-VF d1)."
```

## 표본 판정 요약 (37문)

- ★ 분포: ★1 21 · ★2 14 · ★3 2 · ★4 0 · ★5 0
- 통찰형 3(0352 EQV d2 · 0361 RT d2 · 0366 EQV d2+MI d1) · 절차형 34 · premium 0. 통찰이 하나 이상 붙은 문항은 9(위 3 + 0344 RT d1 · 0348 EQV d1 · 0351 EQV d1 · 0356·0357·0358 EQV d1)
- type_hint 상위: 「기울기가 주어진 접선의 방정식」 계열 7(기본 3 · 평행 2 · 각 1 · 두 접선 y절편 1) · 「접선과 수직인 직선의 방정식」 4 · 「곡선과 직선이 접할 때 미정계수 구하기」 4 · 「곡선과 접선의 교점(접점 = 이중근)」 3 · 「접점의 좌표가 주어진 접선의 방정식」 3 · 「접선의 기울기 조건으로 미정계수 결정」 2 · 「접점이 주어진 접선의 기울기 f'(a)」 2 · 「롤의 정리 c」 2 · 「평균값 정리 c」 2 · 단독 8(외부 점 접선 0339 · 그래프 c 개수 0344 · 접선→미분계수 극한 0346 · 기울기 최대 0348 · 두 접선 교점 0350 · 극한 조건→접선 0351 · 함숫값 등식→삼차 결정 0352 · 거리 최솟값 0361)
- 그림: 2문(`crop:fig-0344.png` · `crop:fig-0358.png`)
- M_total: 4 가 14문 · 5 가 9문 · 6 가 9문 · 7 이 4문(0339·0347·0351·0366) · 8 이 1문(0352). 벤더 출발점에서 −1 한 문항은 0353·0355·0359·0360(교과서 골조와 동일·통찰 0·M_total ≤ 5) 넷, +1 한 문항은 없음. 전사 답을 다시 구해 37문 모두 일치(「전사 답 확인 필요」 0).

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-CALC1-0339 | 교과서 구역 ★1 이나 M_total 7 — 소문항 ⑴~⑶ 유도를 빼면 「곡선 밖의 점에서 그은 접선」(뒤 범위 유형 07) 골조 ★2. 유도가 있으므로 ★1 로 두고 기록 | ★1 / ★2 |
| RPM-CALC1-0366 | 상중 ★3 출발에 통찰 2개(EQV d2 · MI d1) → +1 후보 ★4. 둘 다 유형 06 의 표준 골조(접함↔중근 · 갈래 세기)라 ★3 유지하고 기록 | ★3 / ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 통합해도 될 유형: 「접점이 주어진 접선의 기울기 f'(a)」(교과서 04-1 · 0330~0331)와 「접점의 좌표가 주어진 접선의 방정식」(교과서 04-2 · 유형 02 · 0332~0333 · 0349)은 f'(a) 계산 → 점-기울기 식의 앞·뒤 단계라 한 유형 「접점이 주어진 접선」(base ★1)으로 묶고, 미정계수 결정(0345 · 0347 · 0349 · 0354 · 0365)은 하위 태그(base ★2)로 둔다.
- 통합해도 될 유형: 「기울기가 주어진 접선의 방정식」 계열(기본 · 평행 · 각 → 기울기 · 두 접선 y절편)은 y'=k → 접점 → 접선의 한 골조라 한 유형(base ★1, 접점이 둘이면 ★2)으로 묶고, 「접선과 수직인 직선의 방정식」(유형 03)은 음의 역수 한 단계만 다르므로 같은 유형의 하위 태그로 두어도 된다(벤더는 별도 유형). 이 두 유형의 대표문제(0353 · 0359)가 교과서 문항과 동일 골조라 ★1 인 점이 카탈로그 base ★ 결정의 근거.
- 따로 세울 유형: 「곡선과 접선의 교점(접점 = 이중근)」(유형 04 · 0356~0358)은 EQV d1 이 항상 붙고 삼차방정식 인수분해가 핵심이라 base ★2 로 독립. 다른 교점 x=-2t-(x² 계수) 공식 유도(PD)는 ★3 변형의 씨앗.
- 따로 세울 유형: 「곡선과 직선이 접할 때 미정계수 구하기」(유형 06 · 0363~0366)는 base ★2 이되, 접점이 미지수이고 갈래가 생기는 0366 형(★3, 통찰 2개)은 하위 태그 「접점 갈래」로 구분해 두면 ★3~4 슬롯 후보가 된다.
- 따로 세울 유형: 「곡선 위의 점과 직선 사이 거리의 최솟값(평행한 접선)」(0361)은 RT d2 가 본질이라 base ★2~3 으로 독립. 삼차 곡선으로 바꾸면 VF 가 붙어 ★3.
- 따로 세울 유형: 「곡선 밖의 점에서 그은 접선」(0339 · 뒤 범위 유형 07)은 접점 t 설정 골조라 base ★2 로 독립. 이 범위에서는 교과서 유도 문항 하나뿐이므로 2/2 부분의 유형 07 판정과 합쳐서 결정.
- 통합해도 될 유형: 「롤의 정리 c」·「평균값 정리 c」(0340~0343)는 정리별 한 유형씩(base ★1) 두고, 「평균값 정리 — 그래프에서 c 의 개수」(0344)는 평균값 정리 유형의 그래프 표현 하위 태그(RT d1)로 둔다.
- 참조로 둘 유형: 조건 해석형 0346(접함 → f'(a) → 극한식)·0351(극한 조건 → f(a)·f'(a) → 접선)은 02·03 단원의 「미분계수와 극한식」 유형과 골조가 겹치므로 접선 카탈로그에서는 그쪽을 참조하고 「접선 조건으로 f(a)·f'(a) 읽기」 를 하위 태그로만 둔다. 0348(기울기 최대 → 도함수의 최댓값)·0352(함숫값 등식 → 인수 형태로 삼차 결정)는 각각 05 단원(극값)·03 단원(다항함수 결정)과 접선의 결합형이라 이 단원 카탈로그에서는 「접선 + 타 단원 결합」 묶음으로 둔다.
