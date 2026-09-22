---
name: mechanism-데이터-RPM-CALC1-09-p1
description: RPM 미적분Ⅰ 09 정적분의 활용(1/3 · 교과서 09-1~09-3 · 유형 01~03) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 미적분Ⅰ (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-calc1
  section: 09 정적분의 활용
  unit_code: CALC1-09
  part: "1/3"
  extract_range: "123~125쪽 · 0801~0829"
  total_problems: 29
  unit_total: 85
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-calc1/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-calc1/items/<id>.tex
  image_source: latex-bank/rpm-calc1/figures/ (crops.json)
---

# RPM 미적분Ⅰ · 09 정적분의 활용 (1/3) 정독 데이터 (v1.0)

이 파일은 RPM 미적분Ⅰ 09 정적분의 활용의 첫 범위(123~125쪽 · 0801~0829 · 29문)를 다룬다. 구역은 교과서 09-1 곡선과 x축 사이의 넓이(0801~0807) · 교과서 09-2 두 곡선 사이의 넓이(0808~0813) · 교과서 09-3 수직선 위를 움직이는 점의 위치와 움직인 거리(0814) · 유형 01 곡선과 x축 사이의 넓이(0815~0821) · 유형 02 곡선과 직선 사이의 넓이(0822~0825) · 유형 03 두 곡선 사이의 넓이(0826~0829)다. 벤더 난이도 신호는 구역(교과서 → ★1 · 유형 → ★2 출발)과 유형 구역의 난이도 표시(하·중하·중 — 이 범위에는 상중·상이 없다), 태그(대표문제 · 서술형)다. 그림이 있는 문항은 교과서 구역 7문(0801 · 0802 · 0805 · 0806 · 0807 · 0808 · 0811)으로, 그림이 절편·교점과 위아래를 알려 준다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다. 범위 전체가 「교점(절편) → 위아래(부호) 판단 → 정적분 (β-α)³/6 또는 구간 분할」 골조이며 대부분 절차형이다. 통찰형은 0818(I-EQV · 주어진 정적분 값을 목표 구간으로 변환)과 0829(I-XU · 도형의 이동으로 곡선 복원) 둘뿐이다.

## 문항 데이터

### 교과서 09-1 곡선과 $x$축 사이의 넓이

```yaml
- id: RPM-CALC1-0801
  page: 123
  vendor_label: "교과서 09-1 곡선과 $x$축 사이의 넓이"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    그림: 곡선 y=-x²-x+2 (x절편 -2, 1)와 x축으로 둘러싸인 도형의 넓이.
  category: "x절편 읽기 → 곡선이 x축 위 → 한 구간 정적분"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선과 x축 사이의 넓이 (한 구간 · 기본)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    그림에 절편 -2, 1 이 있고 [-2, 1] 에서 곡선이 x축 위이므로 ∫_{-2}^{1}(-x²-x+2)dx 한 번. (β-α)³/6 = 27/6 = 9/2. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "그림의 x절편 -2, 1 → 곡선이 x축 위 → ∫_{-2}^{1}(-x²-x+2)dx = (β-α)³/6 = 9/2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{9}{2}$'
  answer_source: "답지"
  figure: "crop:fig-0801.png"
  latex: latex-bank/rpm-calc1/items/0801.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 x절편(정수)을 바꾸되 최고차항 계수 음수(위로 볼록) 유지. 절편 차 d 에 대해 넓이 d³/6 이므로 d 가 3 의 배수면 정수, 아니면 분수. 그림 라벨(절편·식)을 식과 함께 고친다."
    creative: "(1) 아래로 볼록으로 바꿔 부호 처리를 시키기(★1 유지 · T-부호) (2) 그림 없이 식만 주고 절편을 스스로 구하게(★1 · 0803 골조) (3) 절편 하나를 매개변수로 두고 넓이 조건에서 역산(★2 · 0819 골조)."
```

```yaml
- id: RPM-CALC1-0802
  page: 123
  vendor_label: "교과서 09-1 곡선과 $x$축 사이의 넓이"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    그림: 곡선 y=x²-2x (x절편 0, 2)와 x축으로 둘러싸인 도형(x축 아래)의 넓이.
  category: "x절편 읽기 → 곡선이 x축 아래 → 부호 바꿔 한 구간 정적분"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선과 x축 사이의 넓이 (한 구간 · 기본)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    [0, 2] 에서 x²-2x ≤ 0 이므로 넓이는 -∫_0^2(x²-2x)dx = 2³/6 = 4/3. 부호 하나(T-부호)만 조심. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "x절편 0, 2 → 곡선이 x축 아래 → -∫_0^2(x²-2x)dx = 2³/6 = 4/3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{4}{3}$'
  answer_source: "답지"
  figure: "crop:fig-0802.png"
  latex: latex-bank/rpm-calc1/items/0802.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "절편을 0, k(자연수)로 바꾸면 넓이 k³/6. 아래로 볼록(최고차 양수)을 유지하면 부호 처리가 그대로. 그림 라벨 동기화."
    creative: "(1) 절편이 둘 다 0 이 아닌 아래로 볼록 포물선(★1 · 0803 골조) (2) 넓이 값을 주고 k 역산(★2) (3) 구간을 [0, 3] 으로 넓혀 x축 아래·위 두 부분이 생기게(★2 · 0815 골조)."
```

```yaml
- id: RPM-CALC1-0803
  page: 123
  vendor_label: "교과서 09-1 곡선과 $x$축 사이의 넓이"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    곡선 y=x²-5x+4 와 x축으로 둘러싸인 도형의 넓이.
  category: "인수분해로 x절편 → 부호 확인(아래) → 부호 바꿔 한 구간 정적분"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선과 x축 사이의 넓이 (한 구간 · 기본)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (x-1)(x-4) 로 절편 1, 4. 그 사이에서 음수이므로 -∫_1^4(x²-5x+4)dx = 3³/6 = 9/2. 그림이 없어 절편·부호를 스스로 잡아야 하지만 한 구간. 교과서 구역·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "x²-5x+4=(x-1)(x-4) → [1, 4] 에서 음수 → -∫_1^4(x²-5x+4)dx = 3³/6 = 9/2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{9}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0803.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정수 절편 p<q 로 (x-p)(x-q). 넓이 (q-p)³/6. 최고차 계수 a 를 넣으면 |a|(q-p)³/6."
    creative: "(1) 최고차 계수를 음수로 바꿔 부호 판단을 뒤집기(★1) (2) 삼차 x(x-p)(x-q) 로 두 구간 분할(★1~2 · 0804/0817 골조) (3) 절편 대신 꼭짓점 좌표를 주어 식 복원 한 단계 추가(★2)."
```

```yaml
- id: RPM-CALC1-0804
  page: 123
  vendor_label: "교과서 09-1 곡선과 $x$축 사이의 넓이"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    곡선 y=x³-4x 와 x축으로 둘러싸인 도형의 넓이.
  category: "삼차 인수분해 → 세 절편·부호 → 두 구간 정적분(원점 대칭으로 2배)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선과 x축 사이의 넓이 (부호 구간 분할)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x(x+2)(x-2) 로 절편 -2, 0, 2. [-2, 0] 위·[0, 2] 아래로 두 구간을 따로 적분하거나 기함수 대칭으로 2∫_0^2(4x-x³)dx = 2·4 = 8. 대칭은 단축 수단일 뿐 필수가 아니라 통찰로 세지 않음. 교과서 구역·M_total 6 → ★1.
  tier: star_1
  mechanism_primary: "x³-4x=x(x+2)(x-2) → 절편 -2, 0, 2 → 대칭으로 2∫_0^2(4x-x³)dx = 8"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$8$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0804.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x³-a²x 꼴로 a(자연수)를 바꾸면 넓이 a⁴/2. 기함수를 유지하면 대칭 풀이 가능. 비대칭 삼차로 바꾸면 두 구간을 따로 계산(0817)."
    creative: "(1) 대칭을 깨는 삼차 x(x+1)(x-2) 로 두 구간 각각(★2) (2) 두 부분 넓이의 비·곱을 묻기(★2 · 0828 골조) (3) f(-x)=-f(x) 조건만 주고 한쪽 넓이로 전체를 구하게 해 대칭이 필수가 되게(★3 · I-SYM)."
```

```yaml
- id: RPM-CALC1-0805
  page: 123
  vendor_label: "교과서 09-1 곡선과 $x$축 사이의 넓이"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    그림: 곡선 y=x²+1 과 x축 및 두 직선 x=-2, x=1 로 둘러싸인 도형의 넓이.
  category: "구간 지정 · 곡선이 항상 x축 위 → 정적분 그대로"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선과 x축 및 두 직선 사이의 넓이 (구간 지정 · 한 부호)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x²+1>0 이라 부호 걱정 없이 ∫_{-2}^{1}(x²+1)dx = [x³/3+x] = 6. 교과서 구역·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "x²+1>0 → ∫_{-2}^{1}(x²+1)dx = 6"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$6$"
  answer_source: "답지"
  figure: "crop:fig-0805.png"
  latex: latex-bank/rpm-calc1/items/0805.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 끝점(정수)·상수항(양수)을 바꾸기. 답이 정수가 되려면 끝점 세제곱의 차가 3 의 배수인지 확인."
    creative: "(1) 상수항을 음수로 바꿔 구간 안에서 부호가 바뀌게(★1~2 · 0807 골조) (2) 한 끝점을 매개변수 t 로 두고 넓이 조건에서 t 역산(★2) (3) 구간을 [a, a+1] 로 두고 넓이가 최소가 되는 a(적분 뒤 이차함수 최솟값 · ★3)."
```

```yaml
- id: RPM-CALC1-0806
  page: 123
  vendor_label: "교과서 09-1 곡선과 $x$축 사이의 넓이"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    그림: 곡선 y=x³-3x² 과 x축 및 두 직선 x=-1, x=2 로 둘러싸인 도형의 넓이.
  category: "구간 지정 · 원점에서 접하되 부호 안 바뀜 → 부호 바꿔 한 구간 정적분"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선과 x축 및 두 직선 사이의 넓이 (구간 지정 · 한 부호)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x²(x-3) 은 [-1, 2] 에서 0 이하(x=0 은 접점, 부호 불변)이므로 -∫_{-1}^{2}(x³-3x²)dx = -[(4-8)-(1/4+1)] = 21/4. 접점에서 나누지 않아도 되는 것이 함정 하나. 교과서 구역·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "x³-3x²=x²(x-3) ≤ 0 on [-1, 2] → -∫_{-1}^{2}(x³-3x²)dx = 21/4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{21}{4}$'
  answer_source: "답지"
  figure: "crop:fig-0806.png"
  latex: latex-bank/rpm-calc1/items/0806.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 끝점(정수)을 바꾸되 x=3 을 넘지 않게(넘으면 부호 분할이 필요해져 ★ 상승). 계수 3 을 바꾸면 접점이 아니라 다른 근이 이동한다."
    creative: "(1) 구간을 [2, 4] 로 옮겨 x=3 에서 부호 분할(★2) (2) 접점 x=0 에서 부호가 바뀐다고 착각하게 하는 ㄱㄴㄷ 참·거짓(★2 · T-부호) (3) 그림 없이 식만 주기(★1~2)."
```

```yaml
- id: RPM-CALC1-0807
  page: 123
  vendor_label: "교과서 09-1 곡선과 $x$축 사이의 넓이"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    그림: 곡선 y=x²+2x-3 과 x축 및 두 직선 x=-2, x=2 로 둘러싸인 도형의 넓이.
  category: "구간 지정 · 절편 x=1 에서 부호 분할 → 두 정적분 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선과 x축 사이의 넓이 (부호 구간 분할)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (x+3)(x-1) 이 [-2, 1] 에서 음, [1, 2] 에서 양. -∫_{-2}^{1} + ∫_1^2 = 9 + 7/3 = 34/3. 분할 지점을 절편 1 로 잡는 것과 두 부호가 골조. 교과서 구역·M_total 6 → ★1(교과서 출발점 유지).
  tier: star_1
  mechanism_primary: "절편 1 에서 분할 → -∫_{-2}^{1}(x²+2x-3)dx + ∫_{1}^{2}(x²+2x-3)dx = 9 + 7/3 = 34/3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{34}{3}$'
  answer_source: "답지"
  figure: "crop:fig-0807.png"
  latex: latex-bank/rpm-calc1/items/0807.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 끝점과 이차식 절편(정수)을 바꾸되 절편 하나가 구간 안에 있게 유지. 답은 유리수. 그림 라벨 동기화."
    creative: "(1) 정적분 값 ∫_{-2}^{2} 과 넓이가 다름을 대비시키는 문제(★2 · 개념 대비) (2) 구간 끝점을 매개변수로 두고 넓이 조건 역산(★2~3) (3) 두 부분 넓이가 같아지는 끝점 찾기(★3 · I-EQV)."
```

### 교과서 09-2 두 곡선 사이의 넓이

```yaml
- id: RPM-CALC1-0808
  page: 123
  vendor_label: "교과서 09-2 두 곡선 사이의 넓이"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    그림: 곡선 y=-x² 과 직선 y=x-2 로 둘러싸인 도형의 넓이.
  category: "교점 구하기 → (위 함수 - 아래 함수) 한 구간 정적분"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선과 직선 사이의 넓이 (기본)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    -x²=x-2 → x=-2, 1. 그 사이에서 포물선이 직선 위이므로 ∫_{-2}^{1}(-x²-x+2)dx = 3³/6 = 9/2. 그림이 위아래를 알려 줌. 교과서 구역·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "교점 -2, 1 → ∫_{-2}^{1}((-x²)-(x-2))dx = 3³/6 = 9/2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{9}{2}$'
  answer_source: "답지"
  figure: "crop:fig-0808.png"
  latex: latex-bank/rpm-calc1/items/0808.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선 y=x+c 의 c 나 포물선 계수를 바꾸되 판별식 양수(두 교점)·교점이 정수가 되게. 넓이 = (교점 차)³/6."
    creative: "(1) 직선 기울기를 매개변수 m 으로 두고 넓이 최소(★3) (2) 넓이 조건으로 c 역산(★2 · 0825 골조) (3) 접선을 직선으로 주면 넓이 0 이 되는 개념 확인(★1~2)."
```

```yaml
- id: RPM-CALC1-0809
  page: 123
  vendor_label: "교과서 09-2 두 곡선 사이의 넓이"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    곡선 y=x²-3x 와 직선 y=-x 로 둘러싸인 도형의 넓이.
  category: "교점 → 위아래 판단 → 한 구간 정적분"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선과 직선 사이의 넓이 (기본)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x²-3x=-x → x=0, 2. [0, 2] 에서 직선이 위이므로 ∫_0^2(2x-x²)dx = 2³/6 = 4/3. 그림이 없어 위아래를 스스로 정함. 교과서 구역·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "x²-2x=0 → 교점 0, 2 → ∫_0^2(-x-(x²-3x))dx = 2³/6 = 4/3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{4}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0809.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선 y=mx 의 m 을 바꾸면 교점 0, m+3 · 넓이 (m+3)³/6. m>-3 유지."
    creative: "(1) m 을 매개변수로 두고 넓이 36 → m(★2 · 0825 골조) (2) 직선을 y=mx+n 으로 넓혀 교점이 정수가 아닐 때 공식 활용(★2) (3) 포물선을 x축 아래로 옮겨 그림 없이 위아래 판단(★1~2)."
```

```yaml
- id: RPM-CALC1-0810
  page: 123
  vendor_label: "교과서 09-2 두 곡선 사이의 넓이"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    곡선 y=x³ 과 직선 y=x 로 둘러싸인 도형의 넓이.
  category: "세 교점 -1, 0, 1 → 두 영역 · 원점 대칭으로 2배"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선과 직선 사이의 넓이 (세 교점 · 두 영역)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x³-x=0 → -1, 0, 1. [0, 1] 에서 직선이 위, [-1, 0] 에서 곡선이 위이지만 두 함수가 기함수라 두 영역이 합동 → 2∫_0^1(x-x³)dx = 2·(1/4) = 1/2. 대칭 없이 두 구간을 따로 해도 가벼움. 교과서 구역·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "x³=x → 교점 -1, 0, 1 → 대칭으로 2∫_0^1(x-x³)dx = 1/2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0810.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "y=x³ 과 y=kx(k>0) 로 바꾸면 교점 ±√k 라 넓이 k²/2. k 가 완전제곱수면 교점이 정수."
    creative: "(1) 직선을 y=x+c 로 옮겨 대칭을 깨고 세 교점 각각 계산(★2) (2) 두 영역 넓이가 같음을 이용해 한쪽만 묻기(★1) (3) y=x³ 과 y=ax 사이 넓이가 8 이 되는 a(★2 · 역산)."
```

```yaml
- id: RPM-CALC1-0811
  page: 123
  vendor_label: "교과서 09-2 두 곡선 사이의 넓이"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    그림: 두 곡선 y=x²-1, y=-x²+7 로 둘러싸인 도형의 넓이.
  category: "두 포물선 교점 → 차함수 한 구간 정적분"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 곡선 사이의 넓이 (기본)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    2x²=8 → x=±2. 위 곡선 -x²+7 에서 아래 x²-1 을 빼면 8-2x² → ∫_{-2}^{2}(8-2x²)dx = 2·4³/6 = 64/3. 그림이 위아래를 알려 줌. 교과서 구역·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "x²-1=-x²+7 → 교점 ±2 → ∫_{-2}^{2}(8-2x²)dx = 2·4³/6 = 64/3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{64}{3}$'
  answer_source: "답지"
  figure: "crop:fig-0811.png"
  latex: latex-bank/rpm-calc1/items/0811.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 포물선 상수항을 바꾸어 교점 ±p(정수)가 되게(차가 2x²-2p² 꼴). 최고차 계수 차 |a| 를 바꾸면 넓이 |a|(2p)³/6. 그림 라벨 동기화."
    creative: "(1) 두 포물선의 축을 다르게 해 교점이 원점 대칭이 아니게(★1~2 · 0812 골조) (2) 넓이 조건으로 상수항 역산(★2) (3) 직선 y=k 로 도형을 잘라 두 넓이가 같은 k(★3~4 · I-EQV)."
```

```yaml
- id: RPM-CALC1-0812
  page: 123
  vendor_label: "교과서 09-2 두 곡선 사이의 넓이"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    두 곡선 y=x²-5x+6, y=-x²+3x 로 둘러싸인 도형의 넓이.
  category: "두 포물선 교점 → 차함수 한 구간 정적분"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 곡선 사이의 넓이 (기본)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    차 2x²-8x+6=2(x-1)(x-3) → 교점 1, 3. 넓이 2·2³/6 = 8/3. 위아래는 차함수 부호로 판단(교점 사이에서 -x²+3x 가 위). 교과서 구역·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "차 2(x-1)(x-3) → 교점 1, 3 → 2·(3-1)³/6 = 8/3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{8}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0812.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 이차식의 차가 2(x-p)(x-q)(p<q 정수)가 되게 조정. 넓이 2(q-p)³/6 = (q-p)³/3."
    creative: "(1) 한쪽을 직선으로 바꿔 유형 02 골조로(★1) (2) 두 포물선의 최고차 계수를 다르게 해 차가 일차항이 남는 이차식으로(★1~2) (3) 교점 하나를 매개변수로 두고 역산(★2)."
```

```yaml
- id: RPM-CALC1-0813
  page: 123
  vendor_label: "교과서 09-2 두 곡선 사이의 넓이"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    두 곡선 y=x³-x², y=x² 으로 둘러싸인 도형의 넓이.
  category: "삼차-이차 교점(중근 포함) → 한 영역 정적분"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 곡선 사이의 넓이 (기본)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x³-2x²=x²(x-2)=0 → 교점 0(중근), 2. 중근이라 영역은 하나이고 [0, 2] 에서 x² 이 위 → ∫_0^2(2x²-x³)dx = 16/3-4 = 4/3. 접점을 영역 경계로 잘못 세는 것이 함정. 교과서 구역·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "x²(x-2)=0 → 교점 0(접점), 2 → ∫_0^2(2x²-x³)dx = 4/3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{4}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0813.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "y=x³-x², y=kx²(k>0) 로 바꾸면 교점 0, k+1 · 넓이 (k+1)⁴/12. 답이 간단해지도록 k 선택(k=1 → 4/3)."
    creative: "(1) 접점이 아닌 세 교점이 나오게 y=x²+2x 로 바꿔 두 영역(★2 · 0826 골조) (2) 넓이 조건으로 k 역산(★2) (3) 접하는 두 곡선은 접점에서 위아래가 안 바뀜을 ㄱㄴㄷ 로 판별(★2)."
```

### 교과서 09-3 수직선 위를 움직이는 점의 위치와 움직인 거리

```yaml
- id: RPM-CALC1-0814
  page: 123
  vendor_label: "교과서 09-3 수직선 위를 움직이는 점의 위치와 움직인 거리"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    원점을 출발해 수직선 위를 움직이는 점 P 의 속도 v(t)=-t²+4t-3 에 대해 ⑴ t=2 에서의 위치 ⑵ t=1 에서 t=4 까지 위치의 변화량 ⑶ 같은 구간에서 움직인 거리.
  category: "속도 정적분 → 위치·변화량 · |v| 로 거리(t=3 에서 분할)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수직선 위 점의 위치 · 위치의 변화량 · 움직인 거리"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴ ∫_0^2 v = -2/3 ⑵ ∫_1^4 v = 0 ⑶ v=-(t-1)(t-3) 이 [1, 3] 양·[3, 4] 음이므로 ∫_1^3 v - ∫_3^4 v = 4/3+4/3 = 8/3. 변화량과 거리의 차이(부호)가 핵심 함정. 세 소문항을 합쳐 M_total 6 이지만 교과서 기본 정의 확인 → ★1.
  tier: star_1
  mechanism_primary: "위치 = 출발점 + ∫v · 변화량 = ∫_1^4 v = 0 · 거리 = ∫_1^4 |v| → 부호 바뀌는 t=3 에서 분할 → 8/3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '(1) $-\dfrac{2}{3}$ (2) $0$ (3) $\dfrac{8}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0814.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "v(t)=-(t-p)(t-q) 의 근 p<q(정수)와 구간 끝을 바꾸기. 변화량 0 이 되는 구간은 정적분이 상쇄되는 끝점을 직접 계산해 고른다. 출발점을 x=a 로 두면 위치에 a 가 더해짐."
    creative: "(1) 속도 그래프 그림으로 주고 넓이로 읽게(★1~2 · I-RT) (2) 출발 뒤 처음으로 원점에 돌아오는 시각(★2 · 방정식) (3) 운동 방향을 바꾼 뒤 움직인 거리(★2) (4) 가속도 조건으로 v 를 먼저 복원(★2~3 · 미분과 결합)."
```

### 유형 01 곡선과 $x$축 사이의 넓이

```yaml
- id: RPM-CALC1-0815
  page: 124
  vendor_label: "유형 01 곡선과 $x$축 사이의 넓이"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    구간 [-1, 3] 에서 곡선 y=x²-6x 와 x축 및 두 직선 x=-1, x=3 으로 둘러싸인 도형의 넓이.
  category: "구간 지정 · 절편 0 에서 부호 분할 → 두 정적분 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선과 x축 사이의 넓이 (부호 구간 분할)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x(x-6) 은 [-1, 0] 양·[0, 3] 음. ∫_{-1}^{0}(x²-6x)dx - ∫_0^3(x²-6x)dx = 10/3 + 18 = 64/3. 0807 과 같은 골조(구간 안 절편에서 분할). 유형 구역 출발점 ★2 · M_total 6·통찰 없음 → ★2 유지.
  tier: star_2
  mechanism_primary: "x(x-6) 의 절편 0 이 구간 안 → [-1, 0] 양·[0, 3] 음 → 10/3 + 18 = 64/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{64}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0815.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차식 절편(정수)과 구간 끝점을 바꾸되 절편 하나만 구간 안에 있게. 두 절편이 모두 들어오면 세 구간(★2~3)."
    creative: "(1) 정적분 값과 넓이를 함께 묻는 대비형(★2) (2) 구간 끝점 t 를 매개변수로 두고 넓이 함수 S(t) 의 최솟값(★3~4 · 미분 결합 I-XU) (3) 그래프 그림에서 색칠 부분만 주기(★2)."
```

```yaml
- id: RPM-CALC1-0816
  page: 124
  vendor_label: "유형 01 곡선과 $x$축 사이의 넓이"
  vendor_level: "하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    곡선 y=-x²+6x-9 와 x축 및 y축으로 둘러싸인 도형의 넓이. 5지선다.
  category: "완전제곱 인식 → 접점 3 · y축 경계 → 부호 바꿔 한 구간 정적분"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선과 x축 사이의 넓이 (한 구간 · 기본)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    -(x-3)² ≤ 0 이므로 [0, 3] 에서 -∫ = ∫_0^3(x-3)²dx = 9. 경계가 y축(x=0)과 접점 x=3 임을 읽는 것이 전부. 벤더 「하」·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "-(x-3)² 접점 3 · y축 경계 → ∫_0^3(x-3)²dx = 9"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0816.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "-(x-p)² 의 p(자연수)를 바꾸면 넓이 p³/3. 최고차 계수 a 를 곱하면 |a|p³/3. 선택지는 정수."
    creative: "(1) 경계를 y축 대신 x=p+1 까지로 바꿔 접점 너머까지(부호 불변 · ★1) (2) 접점이 아닌 두 절편으로 바꾸기(★1) (3) 넓이 조건으로 p 역산(★2)."
```

```yaml
- id: RPM-CALC1-0817
  page: 124
  vendor_label: "유형 01 곡선과 $x$축 사이의 넓이"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    곡선 y=x³+x²-2x 와 x축으로 둘러싸인 도형의 넓이. 5지선다.
  category: "삼차 인수분해 → 절편 -2, 0, 1 · 부호 → 두 구간 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선과 x축 사이의 넓이 (부호 구간 분할)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x(x+2)(x-1) → [-2, 0] 양·[0, 1] 음. ∫_{-2}^{0} - ∫_0^1 = 8/3 + 5/12 = 37/12. 대칭이 없어 두 구간을 각각 계산. 벤더 「중하」·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "x(x+2)(x-1) → 절편 -2, 0, 1 → ∫_{-2}^{0}f - ∫_{0}^{1}f = 8/3 + 5/12 = 37/12"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0817.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x(x-p)(x-q) 의 p<0<q(정수)를 바꾸기. 답이 분모 12 이하 유리수로 정리되는지 확인. 선택지에 정적분 값(두 부분의 차)을 오답으로 넣기."
    creative: "(1) 두 부분의 넓이가 같아지는 조건(★3 · I-EQV) (2) 넓이 비 S1:S2 묻기(★2) (3) 계수 하나를 매개변수로 두고 넓이 조건 역산(★2~3)."
```

```yaml
- id: RPM-CALC1-0818
  page: 124
  vendor_label: "유형 01 곡선과 $x$축 사이의 넓이"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    0<α<β, f(x)=(x-α)(x-β) 에 대해 ∫_0^α f = 7/3, ∫_0^β f = -1/2 일 때 곡선 y=f(x) 와 x축으로 둘러싸인 도형의 넓이.
  category: "목표 넓이 -∫_α^β f 를 주어진 두 정적분의 차로 변환"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "구하려는 넓이를 [α, β](f≤0) 의 정적분으로 놓고 ∫_α^β = ∫_0^β - ∫_0^α 로 주어진 조건에 연결"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "정적분 값 조건에서 곡선과 x축 사이의 넓이 (α, β 미정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    α, β 를 구할 수 없으므로 넓이 S = -∫_α^β f 를 ∫_0^α f - ∫_0^β f = 7/3 + 1/2 = 17/6 으로 바꿔야 함. [α, β] 에서 f≤0 인 것(부호)과 구간 가법성이 골조. 조건을 목표에 맞게 해석하는 EQV d1 하나·M_total 6 → 벤더 「중」 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "S = -∫_α^β f = ∫_0^α f - ∫_0^β f = 7/3 + 1/2 = 17/6"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{17}{6}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0818.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 정적분 값(유리수)을 바꾸기. 제약: 첫 값 양수·둘째 값이 첫 값보다 작아야 부호 배치(0<α<β 에서 [0, α] 양·[α, β] 음)와 모순되지 않음. α, β 자체는 정해지지 않아도 됨."
    creative: "(1) ∫_0^β 와 ∫_β^{2β} 같은 다른 구간 조합(★2~3) (2) 조건을 「곡선과 x축 사이 넓이 = 정적분 값」 서술로 바꿔 부호 해석을 더 시키기(★3) (3) f 를 삼차로 바꿔 부호 분할 구간이 늘어나게(★3 · EQV d2)."
```

```yaml
- id: RPM-CALC1-0819
  page: 124
  vendor_label: "유형 01 곡선과 $x$축 사이의 넓이"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    곡선 y=-x²+ax 와 x축으로 둘러싸인 도형의 넓이가 32/3 일 때 양수 a. 5지선다.
  category: "절편 0, a → 넓이 a³/6 = 32/3 → a"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "넓이 조건으로 계수 결정 (역산)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    -x(x-a) 의 절편 0, a. 넓이 ∫_0^a(-x²+ax)dx = a³/6 = 32/3 → a³ = 64 → a = 4. 매개변수 적분 한 번과 세제곱 방정식. 「~되도록 하는 a」지만 표준 미정계수라 BW 아님. 벤더 「중」·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "절편 0, a → ∫_0^a(-x²+ax)dx = a³/6 = 32/3 → a³ = 64 → a = 4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0819.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "넓이 값을 k³/6 꼴(k 자연수)로 주면 a=k. 선택지는 a 근처 유리수. 최고차 계수를 -2 로 하면 넓이 2a³/6 에 맞춰 조정."
    creative: "(1) 절편을 a, a+2 로 두어 넓이가 a 와 무관함을 눈치채게(★2~3 · I-EQV) (2) 넓이를 이등분하는 직선 x=c(★3) (3) 「넓이가 최대」 같은 최적화로 확장(★3 · 미분 결합)."
```

```yaml
- id: RPM-CALC1-0820
  page: 124
  vendor_label: "유형 01 곡선과 $x$축 사이의 넓이"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    곡선 y=kx³ 과 x축 및 두 직선 x=-1, x=2 로 둘러싸인 도형의 넓이가 17 일 때 양수 k.
  category: "부호 분할(x=0) → k(1/4+4) = 17 → k"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "넓이 조건으로 계수 결정 (역산)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    kx³ 은 [-1, 0] 음·[0, 2] 양. 넓이 k(∫_{-1}^{0}(-x³)dx + ∫_0^2 x³dx) = k(1/4+4) = 17k/4 = 17 → k=4. 부호 분할과 k 로 묶어내기가 골조. 벤더 「중」·M_total 7·통찰 없음 → ★2.
  tier: star_2
  mechanism_primary: "kx³ 부호 분할 → k(1/4 + 4) = 17k/4 = 17 → k = 4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$4$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0820.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 끝점 [-p, q](정수)로 바꾸면 넓이 k(p⁴+q⁴)/4. 넓이 값을 그 배수로 주면 k 정수."
    creative: "(1) 넓이 대신 정적분 값 ∫_{-1}^{2} kx³ = 15k/4 를 주고 비교(★2 · 개념 대비) (2) 곡선을 kx³+m 으로 바꿔 절편이 이동(★3) (3) 두 부분 넓이 비가 1:16 임을 이용하는 문제(★2)."
```

```yaml
- id: RPM-CALC1-0821
  page: 124
  vendor_label: "유형 01 곡선과 $x$축 사이의 넓이"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    모든 실수 x 에 대해 ∫_1^x f(t)dt = (2/3)x³ - (1/2)x² - 1/6 일 때 곡선 y=f(x) 와 x축으로 둘러싸인 도형의 넓이.
  category: "양변 미분 → f(x)=2x²-x → 절편 0, 1/2 → 넓이"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정적분으로 정의된 함수 → 곡선과 x축 사이의 넓이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    양변을 x 로 미분해 f(x)=2x²-x=x(2x-1). 절편 0, 1/2 사이에서 음수이므로 넓이 2·(1/2)³/6 = 1/24. 정적분으로 정의된 함수의 미분(08 단원)은 표준 절차라 통찰로 세지 않음. 벤더 「중」·M_total 7 → ★2.
    [분류 이슈] 08 「정적분으로 정의된 함수」와 09 「넓이」 두 갈래 — 카탈로그에서 어느 유형에 둘지 결정 필요.
  tier: star_2
  mechanism_primary: "∫_1^x f(t)dt 양변 미분 → f(x)=2x²-x → 절편 0, 1/2 → 2·(1/2)³/6 = 1/24"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{24}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0821.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 다항식을 바꾸되 x=1 대입 시 0 이 되게(하한 1 정합) · 미분한 f 가 정수 또는 간단한 분수 절편을 갖게. 최고차 계수 |a| 와 절편 차 d 로 넓이 |a|d³/6."
    creative: "(1) 우변 상수항을 미지수로 두고 하한 정합 조건으로 먼저 구하게(★2~3) (2) 좌변을 xf(x) 꼴로 주어 곱의 미분이 필요하게(★3) (3) 넓이 조건으로 우변 계수 역산(★3)."
```

### 유형 02 곡선과 직선 사이의 넓이

```yaml
- id: RPM-CALC1-0822
  page: 125
  vendor_label: "유형 02 곡선과 직선 사이의 넓이"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    곡선 y=x(x-3)² 과 직선 y=x 로 둘러싸인 도형의 넓이. 5지선다.
  category: "차 x(x-2)(x-4) → 세 교점 → 두 영역 합(점대칭으로 같음)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선과 직선 사이의 넓이 (세 교점 · 두 영역)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x(x-3)²-x = x(x-2)(x-4) → 교점 0, 2, 4. [0, 2] 곡선 위·[2, 4] 직선 위. 각각 4 → 합 8. 차함수가 (2, 0) 점대칭이라 두 영역이 같지만 직접 계산해도 가벼움. 유형 대표(level 없음)·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "x(x-3)²-x = x(x-2)(x-4) → 교점 0, 2, 4 → ∫_0^2 f + (-∫_2^4 f) = 4 + 4 = 8"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0822.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "y=x(x-p)² 와 y=x 의 차 x((x-p)²-1) = x(x-p-1)(x-p+1) → 교점 0, p-1, p+1(p≥2 정수). 두 영역은 각각 계산. 선택지는 정수."
    creative: "(1) 점대칭을 이용해 한 영역만 구하면 되도록 명시(★2 · I-SYM d1) (2) 직선을 y=kx 로 바꿔 교점이 정수가 되는 k 조건(★3) (3) 두 영역 넓이의 차(정적분 값)를 묻기(★2)."
```

```yaml
- id: RPM-CALC1-0823
  page: 125
  vendor_label: "유형 02 곡선과 직선 사이의 넓이"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    곡선 y=-x²+6x 와 직선 y=2x-5 로 둘러싸인 도형의 넓이.
  category: "교점 -1, 5 → (교점 차)³/6"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선과 직선 사이의 넓이 (기본)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    -x²+6x=2x-5 → x²-4x-5=(x-5)(x+1) → 교점 -1, 5. 위로 볼록 포물선이 위 → ∫_{-1}^{5}(-x²+4x+5)dx = 6³/6 = 36. 한 구간·공식 한 번. 벤더 「중하」지만 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "교점 -1, 5 → ∫_{-1}^{5}(-x²+4x+5)dx = 6³/6 = 36"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$36$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0823.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선 y=mx+n 의 m, n 을 바꾸되 교점이 정수 두 개(판별식 완전제곱). 넓이 (교점 차)³/6."
    creative: "(1) 직선을 y=2x+n 으로 두고 넓이 36 → n 역산(★2) (2) 포물선과 직선이 접하는 n 을 먼저 구한 뒤 넓이(★2~3) (3) 기울기를 바꿔 넓이가 최소가 되는 직선(★3)."
```

```yaml
- id: RPM-CALC1-0824
  page: 125
  vendor_label: "유형 02 곡선과 직선 사이의 넓이"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    곡선 y=x³+4x²+k 와 직선 y=k 로 둘러싸인 도형의 넓이 (k 는 상수).
  category: "차 x³+4x² 로 k 소거 → 교점 -4, 0(중근) → 한 영역"
  M: {s: 1, k: 2, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선과 직선 사이의 넓이 (기본)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    곡선-직선 = x²(x+4) 이므로 k 는 사라지고 교점 -4, 0(접점). [-4, 0] 에서 곡선이 위 → ∫_{-4}^{0}(x³+4x²)dx = 64/3. 상수 k 가 결과와 무관함을 아는 것과 접점 처리가 전부. 벤더 「중하」·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "곡선-직선 = x²(x+4) (k 소거) → 교점 -4, 0 → ∫_{-4}^{0}(x³+4x²)dx = 64/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{64}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0824.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x³+px²+k 의 p(자연수)로 교점 -p, 0 · 넓이 p⁴/12. k 는 어떤 값이든 무관(정답 불변)."
    creative: "(1) 직선을 y=k+m 으로 어긋나게 해 k 소거를 깨기(교점 비정수 위험 · ★3) (2) 「k 의 값에 관계없이 넓이가 일정한 이유」 서술(★2) (3) 삼차의 변곡점을 지나는 직선과의 넓이(점대칭 · ★3 · I-SYM)."
```

```yaml
- id: RPM-CALC1-0825
  page: 125
  vendor_label: "유형 02 곡선과 직선 사이의 넓이"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    곡선 y=x²-3x 와 직선 y=ax 로 둘러싸인 도형의 넓이가 36 일 때 양수 a. 5지선다.
  category: "교점 0, a+3 → (a+3)³/6 = 36 → a"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "넓이 조건으로 계수 결정 (역산)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x²-(a+3)x=0 → 교점 0, a+3(a>0 이라 양수). 넓이 (a+3)³/6 = 36 → (a+3)³=216 → a=3. 매개변수 교점·세제곱 방정식. 벤더 「중」·M_total 7·통찰 없음 → ★2.
  tier: star_2
  mechanism_primary: "x²-(a+3)x = 0 → 교점 0, a+3 → (a+3)³/6 = 36 → a = 3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0825.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "넓이를 k³/6(k 자연수)로 주면 a=k-3 · a>0 이 되게 k>3. 포물선 y=x²-px 의 p 를 바꾸면 a=k-p."
    creative: "(1) 직선 y=ax+b 로 확장해 교점 차가 √(판별식)이 되는 골조(★3) (2) 양수 조건을 빼면 |a+3|³=216 에서 a=-9 도 해가 됨을 검토(★3 · I-VF) (3) 넓이 최소가 되는 직선(★3)."
```

### 유형 03 두 곡선 사이의 넓이

```yaml
- id: RPM-CALC1-0826
  page: 125
  vendor_label: "유형 03 두 곡선 사이의 넓이"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    두 곡선 y=x³-4x 와 y=3x² 으로 둘러싸인 도형의 넓이.
  category: "차 x(x+1)(x-4) → 세 교점 → 두 영역 각각 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 곡선 사이의 넓이 (세 교점 · 두 영역)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x³-3x²-4x = x(x+1)(x-4) → 교점 -1, 0, 4. [-1, 0] 삼차 위(3/4)·[0, 4] 포물선 위(32) → 131/4. 두 영역이 대칭이 아니라 각각 계산하고 부호를 맞추는 것이 골조. 유형 대표(level 없음)·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "x³-3x²-4x = x(x+1)(x-4) → 교점 -1, 0, 4 → ∫_{-1}^{0} f + (-∫_{0}^{4} f) = 3/4 + 32 = 131/4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{131}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0826.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "차가 x(x-p)(x-q)(p<0<q 정수)가 되게 두 곡선 계수를 조정. 넓이는 두 구간 각각 계산 · 분모 4 이하 유리수로 정리되는지 확인."
    creative: "(1) 두 영역 넓이의 비·곱(★2 · 0828 골조) (2) 삼차와 접하는 포물선으로 바꿔 접점 처리(★2) (3) 두 영역 넓이가 같아지는 조건(차함수 정적분 0 · ★3 · I-EQV)."
```

```yaml
- id: RPM-CALC1-0827
  page: 125
  vendor_label: "유형 03 두 곡선 사이의 넓이"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    두 곡선 y=x²-4x+5, y=-x²+6x-3 으로 둘러싸인 도형의 넓이. 5지선다.
  category: "두 포물선 교점 1, 4 → 2·(교점 차)³/6"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 곡선 사이의 넓이 (기본)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    차 2x²-10x+8=2(x-1)(x-4) → 교점 1, 4 → 2·3³/6 = 9. 0812 와 같은 골조. 벤더 「중하」지만 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "차 2(x-1)(x-4) → 교점 1, 4 → 2·3³/6 = 9"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0827.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 포물선 계수를 바꿔 차가 2(x-p)(x-q)(정수 p<q)가 되게. 넓이 2(q-p)³/6 = (q-p)³/3. 선택지는 정수."
    creative: "(1) 최고차 계수가 다른 두 포물선(차가 x²+…)로 바꾸기(★1~2) (2) 넓이 조건으로 상수항 역산(★2) (3) 두 포물선의 꼭짓점을 잇는 직선이 넓이를 이등분하는지 판단(★3~4 · I-SYM)."
```

```yaml
- id: RPM-CALC1-0828
  page: 125
  vendor_label: "유형 03 두 곡선 사이의 넓이"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    두 곡선 y=x³-3x², y=x²-3x 로 둘러싸인 두 도형의 넓이 S₁, S₂ 의 곱 S₁S₂. 서술형.
  category: "차 x(x-1)(x-3) → 세 교점 → 두 영역 각각 → 곱"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 곡선 사이의 넓이 (세 교점 · 두 영역)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x³-4x²+3x = x(x-1)(x-3) → 교점 0, 1, 3. [0, 1] 삼차 위 → S₁ = 5/12 · [1, 3] 포물선 위 → S₂ = 8/3 · 곱 10/9. 두 영역을 각각 정확히 계산하는 서술형. 벤더 「중」·서술형 태그·M_total 6·통찰 없음 → ★2.
  tier: star_2
  mechanism_primary: "x³-4x²+3x = x(x-1)(x-3) → S₁ = ∫_0^1 f = 5/12 · S₂ = -∫_1^3 f = 8/3 → S₁S₂ = 10/9"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{10}{9}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0828.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "차가 x(x-p)(x-q)(0<p<q 정수)가 되게 두 곡선을 조정. S₁·S₂ 가 분수라 곱이 간단해지는지 확인. 곱 대신 합·비를 물어도 됨."
    creative: "(1) S₁ = S₂ 가 되게 하는 계수 조건(★3 · I-EQV) (2) 서술형 채점 요소로 「교점 → 위아래 판단 → 각 정적분」 단계 명시(★2) (3) 한 곡선을 y=kx²-3x 로 두고 S₁:S₂ 가 주어진 비가 되는 k(★3~4)."
```

```yaml
- id: RPM-CALC1-0829
  page: 125
  vendor_label: "유형 03 두 곡선 사이의 넓이"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    곡선 y=x²-1 을 x축 대칭이동한 뒤 x축 방향 1, y축 방향 3 만큼 평행이동한 곡선 y=f(x) 와 원래 곡선 y=x²-1 로 둘러싸인 도형의 넓이.
  category: "도형의 이동으로 f(x)=-x²+2x+3 복원 → 두 포물선 교점 -1, 2 → 2·3³/6"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "공통수학2 도형의 이동(대칭 → 평행이동 순서)으로 f 를 먼저 결정해야 넓이 계산이 시작됨"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 곡선 사이의 넓이 (기본)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x축 대칭 -x²+1, 평행이동 -(x-1)²+4 = -x²+2x+3. 두 곡선 차 2x²-2x-4 = 2(x-2)(x+1) → 교점 -1, 2 → 2·27/6 = 9. 이동 순서(대칭 뒤 평행이동)를 지키는 것이 함정. 벤더 「중」·M_total 5·XU d1 → ★2.
    [분류 이슈] 도형의 이동은 공통수학2 표준 절차라 I-XU 로 인정할지 절차형으로 볼지 애매 — XU d1 로 기록하되 ★ 는 어느 쪽이든 ★2.
  tier: star_2
  mechanism_primary: "x축 대칭 → 평행이동(1, 3) → f(x) = -x²+2x+3 → 차 2(x-2)(x+1) → 교점 -1, 2 → 2·3³/6 = 9"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$9$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0829.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "평행이동량 (p, q)(정수)를 바꾸면 f(x) = -(x-p)²+1+q. 교점이 정수가 되려면 두 곡선 차 2x²-2px+p²-2-q 의 판별식이 완전제곱. 이동 순서를 바꾸면 식이 달라짐."
    creative: "(1) 이동 순서를 「평행이동 후 대칭」으로 바꿔 함정 위치 이동(★2) (2) 두 포물선이 접하도록 하는 이동량(넓이 0 · ★2~3) (3) 원점 대칭이동 + 평행이동으로 두 곡선이 서로 점대칭이 되게 해 I-SYM 으로 넓이 절반(★3). y=x 대칭이동은 포물선이 아닌 곡선이 되어 미적분Ⅰ 범위 밖 — 사용 금지."
```

## 표본 판정 요약 (29문)

- ★ 분포: ★1 17 · ★2 12 · ★3 0 · ★4 0 · ★5 0
- 통찰형 2(0818 I-EQV d1 · 0829 I-XU d1) · 절차형 27 · premium 0
- type_hint 상위: 「두 곡선 사이의 넓이 (기본)」 5 · 「곡선과 x축 사이의 넓이 (한 구간 · 기본)」 4 · 「곡선과 x축 사이의 넓이 (부호 구간 분할)」 4 · 「곡선과 직선 사이의 넓이 (기본)」 4 · 「넓이 조건으로 계수 결정 (역산)」 3 · 그 외 「곡선과 x축 및 두 직선 사이의 넓이 (구간 지정 · 한 부호)」 2 · 「곡선과 직선 사이의 넓이 (세 교점 · 두 영역)」 2 · 「두 곡선 사이의 넓이 (세 교점 · 두 영역)」 2 · 「정적분 값 조건에서 곡선과 x축 사이의 넓이 (α, β 미정)」 1 · 「정적분으로 정의된 함수 → 곡선과 x축 사이의 넓이」 1 · 「수직선 위 점의 위치 · 위치의 변화량 · 움직인 거리」 1
- 그림: 7문(`crop:fig-0801.png` · `crop:fig-0802.png` · `crop:fig-0805.png` · `crop:fig-0806.png` · `crop:fig-0807.png` · `crop:fig-0808.png` · `crop:fig-0811.png`)
- 벤더 신호 대조: 교과서 14문 전부 ★1 · 유형 15문은 level 하 1(★1) · 중하 4(★1 2 · ★2 2) · 중 7(★2) · 대표문제 3(★2). 2단 이상 어긋난 문항 없음. 「중하」 두 문항(0823 · 0827)은 M_total 4·통찰 0 으로 −1 조정해 ★1 — 1단 차이라 이슈로 올리지 않음.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-CALC1-0821 | 정적분으로 정의된 함수(08)의 미분 뒤 넓이(09) — 유형 제목이 두 갈래. 카탈로그에서 「정적분으로 정의된 함수 → 넓이」를 09 하위 유형으로 둘지 08 응용으로 둘지 결정 필요 | ★2 |
| RPM-CALC1-0829 | 도형의 이동(공통수학2)으로 f 를 복원하는 단계를 I-XU d1 로 기록. 표준 절차로 보면 절차형 — 「이동·변환으로 곡선을 먼저 결정하는 넓이 문제」의 XU 인정 기준을 카탈로그에서 결정. ★ 는 어느 쪽이든 ★2 | ★2 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 반복된 type_hint: 「두 곡선 사이의 넓이 (기본)」 5 · 「곡선과 x축 사이의 넓이 (한 구간 · 기본)」 4 · 「곡선과 x축 사이의 넓이 (부호 구간 분할)」 4 · 「곡선과 직선 사이의 넓이 (기본)」 4 · 「넓이 조건으로 계수 결정 (역산)」 3.
- 따로 세워야 할 유형: (a) 「부호 구간 분할」은 「한 구간 기본」과 M_total 이 2 차이(4 vs 6)나므로 base ★ 를 달리하는 별도 유형(★1 vs ★2). (b) 「넓이 조건으로 계수 결정(역산)」은 유형 01·02 에 걸쳐 반복(0819 · 0820 · 0825)되므로 구역과 무관한 독립 유형(base ★2). (c) 「정적분 값 조건 → 넓이 (α, β 미정)」(0818)은 이 범위에서 EQV 통찰이 있는 유일한 골조 — base ★2~3 독립 유형. (d) 「정적분으로 정의된 함수 → 넓이」(0821)는 08·09 결합 — 배치 결정 필요(이슈 표). (e) 「수직선 위 점의 위치·거리」(0814)는 교과서 09-3 한 문항뿐이라 2/3·3/3 범위에서 유형 04 이후와 합쳐 세울 것.
- 통합해도 될 유형: 「곡선과 직선 (기본)」과 「두 곡선 (기본)」은 골조(교점 → 차함수 → (β-α)³/6)가 같아 「두 그래프 사이의 넓이 (기본)」 하나로 통합 가능. 「세 교점 · 두 영역」도 곡선-직선(0810 · 0822)과 두 곡선(0826 · 0828)을 합쳐 하나(base ★2)로 둘 수 있음.
- 교과서 구역(0801~0814)은 전부 ★1 절차형이라 base ★1 유형의 예시 풀·숫자 변형 원본으로 쓰기 좋고, 그림 7문은 라벨(절편·교점) 동기화만 지키면 숫자 변형이 안전하다.
