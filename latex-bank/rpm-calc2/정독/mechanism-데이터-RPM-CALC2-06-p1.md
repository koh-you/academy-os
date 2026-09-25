---
name: mechanism-데이터-RPM-CALC2-06-p1
description: RPM 미적분Ⅱ 06 도함수의 활용 (1)(1/4 · 교과서 06-2~06-5) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 미적분Ⅱ (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-calc2
  section: 06 도함수의 활용 (1)
  unit_code: CALC2-06
  part: "1/4"
  extract_range: "87~89쪽 · 0593~0625"
  total_problems: 33
  unit_total: 137
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-calc2/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-calc2/items/<id>.tex
  image_source: latex-bank/rpm-calc2/figures/ (crops.json)
---

# RPM 미적분Ⅱ · 06 도함수의 활용 (1) (1/4) 정독 데이터 (v1.0)

이 파일은 RPM 미적분Ⅱ 06 도함수의 활용 (1) 단원의 첫 범위(87~89쪽 · 0593~0625 · 33문항)를 다룬다. 33문 전부 「교과서 06-2 ~ 06-5」 구역(접선의 방정식을 구하는 방법 · 이계도함수 · 함수의 증가와 감소 · 함수의 극대와 극소)의 교과서 기본 문제로 난이도 표시·태그·그림이 없다. 06-2 는 전사본에서 다섯 group(0593~0597 접점이 주어진 접선 · 0598 법선 · 0599~0603 기울기가 주어진 접선 · 0604~0607 곡선 밖의 점에서 그은 접선 · 0608~0609 매개변수·음함수 소문항), 06-5 는 두 group(0621~0624 극값 · 0625 이계도함수 빈칸)으로 나뉘어 있으나 section 이름이 같아 한 절로 묶고 공통 발문을 group 경계에 한 줄로 표시했다. RPM 은 구역이 곧 난이도 층이므로 교과서 구역은 ★1 을 출발점으로 두고 M_total·통찰로만 ±1 조정했다. 통찰이 있는 문항이 없고 depth 3·통찰 2개 이상 조건에 드는 문항도 없어 +1 조정은 없었으며, 결과는 ★1 33문이다. 다만 곡선 밖의 점에서 그은 접선(0604~0607)과 매개변수·음함수 접선(0608·0609)은 M_total 5~6 으로 유형 구역 기본 문항과 골조가 같아 ★2 후보로 분류 이슈에 기록했다.

주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 사슬) · `insights[]`(유형 코드 · depth · effective_depth · 근거) · `variation_notes`(numeric/creative)를 채웠다. `depth_score` 는 insights 의 effective_depth 평균(없으면 0.00)이고, `insight_type` 은 통찰이 없거나 d1 한 개뿐이면 절차형, d2 이상 또는 2개 이상이면 통찰형으로 적었다. 접점을 미지수 t 로 두는 곡선 밖 접선 골조(0604~0607)는 교과서가 직접 가르치는 표준 절차라 I-BW 로 세지 않았고, 소문항이 단계를 안내하는 0608·0609 도 절차형으로 두었다. Mₜ 는 함정 0~1개면 1, 2~3개면 2 로 매겨 M_total 은 4 이상이며, 정의역 제외점과 구간 표기·부등호 방향이 함께 걸리는 증가·감소 문항(0616 · 0618 · 0620)만 2 로 매겨 target_cohort 를 중하위권으로 올렸다. 전사 답은 33문 모두 다시 구해 일치했다(「전사 답 확인 필요」 0). 유형 카탈로그가 없는 과목이므로 `type_id`·`base_star` 는 null 이고 `type_hint` 로 유형명을 제안했다.

## 문항 데이터

### 교과서 06-2 접선의 방정식을 구하는 방법

공통 발문(0593~0597): 다음 곡선 위의 주어진 점에서의 접선의 방정식을 구하시오.

```yaml
- id: RPM-CALC2-0593
  page: 87
  vendor_label: "교과서 06-2 접선의 방정식을 구하는 방법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    곡선 y = 1/(x−2) 위의 점 (3, 1) 에서의 접선의 방정식.
  category: "유리함수 미분 → f'(3) = 기울기 → 점-기울기꼴 직선"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선 위의 점에서의 접선의 방정식(접점이 주어진 경우)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    y' = −1/(x−2)² 이므로 x = 3 에서 기울기 −1. y − 1 = −(x − 3) 을 정리하면 y = −x + 4. 미분 한 단계와 점-기울기꼴 한 단계뿐이며 함정은 기울기의 부호 정도. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "y' = −1/(x−2)² → y'(3) = −1 → y − 1 = −(x − 3) → y = −x + 4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y=-x+4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0593.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접점의 x 좌표(3 → 1 · 4 · 0)와 분모의 상수(x−2 → x+1 · x−3)를 바꿈. 제약: 접점이 곡선 위에 있어야 하고(y 좌표를 함께 갱신) x ≠ 2, 기울기 −1/(a−2)² 가 정수나 간단한 분수가 되도록 a−2 = ±1, ±2 로 둔다."
    creative: "(1) 접선의 x절편·y절편이 만드는 삼각형의 넓이(★2 · 절차 추가) (2) 접선이 원점을 지나도록 하는 접점 찾기(접점 (1, −1) · ★2 · 접점을 미지수로 두는 역방향) (3) 접점의 x 좌표를 a 로 두고 접선의 y절편을 a 의 식으로(★2 · Mₐ 2)."
```

```yaml
- id: RPM-CALC2-0594
  page: 87
  vendor_label: "교과서 06-2 접선의 방정식을 구하는 방법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    곡선 y = √x 위의 점 (1, 1) 에서의 접선의 방정식.
  category: "무리함수 미분(1/(2√x)) → f'(1) = 1/2 → 점-기울기꼴 직선"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선 위의 점에서의 접선의 방정식(접점이 주어진 경우)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    y' = 1/(2√x) 에서 x = 1 의 기울기 1/2. y − 1 = (1/2)(x − 1) → y = x/2 + 1/2. 미분 공식 대입과 직선식 정리 두 단계. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "y' = 1/(2√x) → y'(1) = 1/2 → y − 1 = (x − 1)/2 → y = x/2 + 1/2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y=\dfrac{1}{2}x+\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0594.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접점을 (4, 2) · (9, 3) 처럼 완전제곱수 x 좌표로, 함수를 √(x+1) · 2√x · ³√x 로. 제약: 접점 x 좌표가 완전제곱수여야 기울기가 유리수가 되고, x = 0 에서는 미분계수가 없으므로 접점으로 쓰지 않는다."
    creative: "(1) 접선과 x축·y축이 이루는 삼각형 넓이(★2) (2) 접선이 점 (−1, 0) 을 지나는 것을 이용해 「점 (−1, 0) 에서 그은 접선」 골조로 뒤집기(★2) (3) y = √x 와 y = x/2 + 1/2 의 위치 관계(접함 · 다른 교점 없음)를 그래프로 확인(★2 · RT d1)."
```

```yaml
- id: RPM-CALC2-0595
  page: 87
  vendor_label: "교과서 06-2 접선의 방정식을 구하는 방법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    곡선 y = (1/2)e^{2x} 위의 점 (0, 1/2) 에서의 접선의 방정식.
  category: "지수함수 합성 미분(e^{2x}·2) → f'(0) = 1 → 점-기울기꼴"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선 위의 점에서의 접선의 방정식(접점이 주어진 경우)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    y' = (1/2)·2e^{2x} = e^{2x} 이므로 x = 0 에서 기울기 1. y − 1/2 = x → y = x + 1/2. 합성함수 미분에서 계수 2 가 1/2 과 상쇄되는 것이 유일한 계산. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "y' = e^{2x} → y'(0) = 1 → y − 1/2 = x → y = x + 1/2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y=x+\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0595.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 계수(2x → 3x · −x)와 앞 계수(1/2 → 1/3 · 2)를 바꾸고 접점은 x = 0 이나 x = 1/2 처럼 e^{2x} 가 e 의 정수 거듭제곱이 되는 값으로. 제약: 접점 y 좌표는 함수값과 일치해야 하고, 답에 e 가 남아도 되게 할지 정한다."
    creative: "(1) 접선의 y절편이 0 이 되도록 하는 접점 찾기(a = 1/2 · ★2 · 역방향) (2) 접선과 x축·y축이 만드는 삼각형 넓이(★2) (3) 접점의 x 좌표를 a 로 두고 접선의 x절편을 a 의 식으로 나타내기(★2~3 · Mₐ 2)."
```

```yaml
- id: RPM-CALC2-0596
  page: 87
  vendor_label: "교과서 06-2 접선의 방정식을 구하는 방법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    곡선 y = ln x² 위의 점 (e, 2) 에서의 접선의 방정식.
  category: "ln x² 미분(2x/x² = 2/x) → f'(e) = 2/e → 점-기울기꼴(원점 통과)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선 위의 점에서의 접선의 방정식(접점이 주어진 경우)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    y' = 2x/x² = 2/x 이므로 x = e 에서 기울기 2/e. y − 2 = (2/e)(x − e) 를 정리하면 상수항이 소거되어 y = (2/e)x, 즉 접선이 원점을 지난다. ln x² = 2ln x 로 먼저 정리해도 같다. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "y' = 2/x → y'(e) = 2/e → y − 2 = (2/e)(x − e) → y = (2/e)x"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y=\dfrac{2}{e}x$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0596.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접점을 (1, 0) · (e², 4) 로, 함수를 ln x³ · ln 2x · ln(x²+1) 로. 제약: 접점은 곡선 위(y = ln a²)여야 하고 a > 0 이면 ln a² = 2ln a 가 되며, 접선이 원점을 지나는 성질은 y = k·ln x 꼴에서 접점 x = e 일 때만 유지된다."
    creative: "(1) 접선이 원점을 지나는 이유를 묻고 접점을 a 로 일반화(★2 · Mₐ 2) (2) 원점에서 y = ln x 에 그은 접선의 방정식으로 뒤집기(★2 · 곡선 밖의 점 골조) (3) y = ln x² 의 x < 0 부분(2ln|x|)에서 대칭인 접선을 함께 묻기(★2 · SYM d1)."
```

```yaml
- id: RPM-CALC2-0597
  page: 87
  vendor_label: "교과서 06-2 접선의 방정식을 구하는 방법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    곡선 y = sin x 위의 점 (π, 0) 에서의 접선의 방정식.
  category: "sin 미분(cos x) → cos π = −1 → 점-기울기꼴"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선 위의 점에서의 접선의 방정식(접점이 주어진 경우)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    y' = cos x 이므로 x = π 에서 기울기 −1. y − 0 = −(x − π) → y = −x + π. 특수각의 cos 값 부호가 유일한 함정. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "y' = cos x → y'(π) = −1 → y = −(x − π) → y = −x + π"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y=-x+\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0597.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접점을 (0, 0) · (π/2, 1) · (π/6, 1/2) 로, 함수를 cos x · 2sin x · sin 2x 로. 제약: 접점 y 좌표가 함수값과 일치해야 하고, 기울기가 특수각 cos 값(0 · ±1 · ±1/2 · ±√3/2)이 되도록 x 좌표를 고른다."
    creative: "(1) 접선이 x축의 양의 방향과 이루는 각(기울기 −1 → 135°)을 묻기(★1~2 · RT d1) (2) y = sin x 위의 점 (a, sin a) 에서의 접선이 원점을 지날 조건 tan a = a 로 일반화(★3 · Mₐ 2) (3) 0 ≤ x ≤ 2π 에서 기울기가 −1 인 접선을 모두 구하기(★2 · 기울기 주어진 골조 + 여러 접점)."
```

group 경계(0598 · 단독 발문).

```yaml
- id: RPM-CALC2-0598
  page: 87
  vendor_label: "교과서 06-2 접선의 방정식을 구하는 방법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    곡선 y = 2cos x 위의 점 (π/2, 0) 을 지나고 이 점에서의 접선과 수직인 직선의 방정식.
  category: "cos 미분 → 접선 기울기 −2 → 수직 조건으로 기울기 1/2 → 점-기울기꼴"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "접선에 수직인 직선(법선)의 방정식"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    y' = −2sin x 이므로 x = π/2 에서 접선 기울기 −2. 수직인 직선의 기울기는 −1/(−2) = 1/2 이고 점 (π/2, 0) 을 지나므로 y = (1/2)(x − π/2) = x/2 − π/4. 접선 골조에 수직 조건(기울기 곱 −1) 한 단계가 얹힌다. 교과서 구역·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "y' = −2sin x → 접선 기울기 −2 → 수직 기울기 1/2 → y = (x − π/2)/2 → y = x/2 − π/4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y=\dfrac{1}{2}x-\dfrac{\pi}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0598.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "함수를 sin x · 2sin x · cos 2x 로, 접점을 (π/6, √3) 처럼 특수각으로. 제약: 접점에서의 기울기가 0 이면 수직인 직선이 x = a 꼴(기울기 없음)이 되므로 y' ≠ 0 인 점을 고른다."
    creative: "(1) 접선과 법선이 x축과 만드는 삼각형의 넓이(★2) (2) y = sin x 위의 점 (π/2, 1) 처럼 접선 기울기가 0 이라 법선이 x = π/2 가 되는 경우를 함께 묻기(★2 · T-표기) (3) 곡선 y = e^x 위의 점에서의 법선이 점 (k, 0) 을 지날 때 k 를 접점 좌표 a 로(★2~3 · Mₐ 2)."
```

공통 발문(0599~0603): 다음 곡선에 접하고 기울기가 2 인 접선의 방정식을 구하시오.

```yaml
- id: RPM-CALC2-0599
  page: 87
  vendor_label: "교과서 06-2 접선의 방정식을 구하는 방법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    곡선 y = −2/x (x > 0) 에 접하고 기울기가 2 인 접선의 방정식.
  category: "y' = 2/x² = 2 → x = 1 (x > 0) → 접점 (1, −2) → 점-기울기꼴"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "기울기가 주어진 접선의 방정식(f'(x) = m 으로 접점 찾기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    y' = 2/x² 을 2 와 같다고 놓으면 x² = 1, 조건 x > 0 으로 x = 1. 접점 (1, −2) 에서 y + 2 = 2(x − 1) → y = 2x − 4. 「기울기 = f'(x)」 로 접점을 먼저 찾는 골조이며 범위 조건이 x = −1 을 걸러 준다. 교과서 구역·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "y' = 2/x² = 2 → x = 1 (x > 0) → 접점 (1, −2) → y = 2x − 4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y=2x-4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0599.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자 상수(−2 → −8 · −1/2)와 기울기(2 → 1/2 · 8)를 짝지어 x² 이 완전제곱이 되게. 제약: 유리함수 y = k/x 는 k < 0 이면 y' > 0 이므로 양의 기울기만 가능하고, x > 0 조건을 빼면 접선이 두 개(x = ±1) 생기니 의도에 맞게 조건을 둔다."
    creative: "(1) x > 0 조건을 없애 접선 두 개를 모두 구하게(★2 · MI d1) (2) 직선 y = 2x + k 가 곡선에 접할 때 k 의 값(★2 · 같은 골조를 매개변수로) (3) 곡선 위의 점에서 직선 y = 2x 까지의 거리가 최소가 되는 점(★3 · 접선 평행 착안 RT d1)."
```

```yaml
- id: RPM-CALC2-0600
  page: 87
  vendor_label: "교과서 06-2 접선의 방정식을 구하는 방법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    곡선 y = 2√(x+1) 에 접하고 기울기가 2 인 접선의 방정식.
  category: "y' = 1/√(x+1) = 2 → x = −3/4 → 접점 (−3/4, 1) → 점-기울기꼴"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "기울기가 주어진 접선의 방정식(f'(x) = m 으로 접점 찾기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    y' = 2·1/(2√(x+1)) = 1/√(x+1) 을 2 로 놓으면 √(x+1) = 1/2, x = −3/4 이고 y = 2·(1/2) = 1. y − 1 = 2(x + 3/4) → y = 2x + 5/2. 접점 x 좌표가 분수라 정리에서 부호·분수 실수만 주의. 교과서 구역·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "y' = 1/√(x+1) = 2 → √(x+1) = 1/2 → 접점 (−3/4, 1) → y = 2x + 5/2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y=2x+\dfrac{5}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0600.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "앞 계수(2 → 1 · 4)와 기울기(2 → 1 · 1/2)를 바꿔 √(x+1) 이 유리수가 되게. 제약: 기울기 m > 0 이어야(무리함수 y' > 0) 접점이 존재하고, y = k√(x+1) 에서 √(x+1) = k/(2m), x = k²/(4m²) − 1 > −1 이면 항상 정의역 안이다."
    creative: "(1) 접점의 x 좌표가 정수가 되게(계수 2·기울기 1 → 접점 (0, 2))(★1) (2) 직선 y = 2x + k 와 곡선이 접할 때·두 점에서 만날 때 k 범위(★3 · RT d1 그래프 위치 관계) (3) 기울기 대신 「직선 y = 2x − 1 에 평행한 접선」 으로 표현(★2 · EQV d1)."
```

```yaml
- id: RPM-CALC2-0601
  page: 87
  vendor_label: "교과서 06-2 접선의 방정식을 구하는 방법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    곡선 y = ln(x−1) 에 접하고 기울기가 2 인 접선의 방정식.
  category: "y' = 1/(x−1) = 2 → x = 3/2 → 접점 (3/2, −ln 2) → 점-기울기꼴"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "기울기가 주어진 접선의 방정식(f'(x) = m 으로 접점 찾기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    y' = 1/(x−1) = 2 에서 x = 3/2, y = ln(1/2) = −ln 2. y + ln 2 = 2(x − 3/2) → y = 2x − 3 − ln 2. ln(1/2) 를 −ln 2 로 고쳐 쓰는 것이 유일한 손질. 교과서 구역·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "y' = 1/(x−1) = 2 → x = 3/2 → y = −ln 2 → y = 2x − 3 − ln 2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y=2x-3-\ln 2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0601.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "평행이동(x−1 → x+2)과 기울기(2 → 1 · 1/2 · e)를 바꿈. 제약: x − 1 = 1/m > 0 이므로 m > 0 이어야 하고, 기울기를 1 로 두면 접점이 (2, 0) 이라 ln 이 사라져 답이 깔끔해진다."
    creative: "(1) 기울기 1 로 바꿔 접점이 (2, 0) 이 되게(★1) (2) 접선의 y절편이 −3 − ln 2 인 것을 이용해 「y절편이 정수가 되는 기울기」 를 묻기(★2~3 · 역방향) (3) 직선 y = 2x + k 가 곡선과 만나지 않을 k 범위(★3 · RT d1)."
```

```yaml
- id: RPM-CALC2-0602
  page: 87
  vendor_label: "교과서 06-2 접선의 방정식을 구하는 방법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    곡선 y = e^{2x} + 1 에 접하고 기울기가 2 인 접선의 방정식.
  category: "y' = 2e^{2x} = 2 → x = 0 → 접점 (0, 2) → 점-기울기꼴"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "기울기가 주어진 접선의 방정식(f'(x) = m 으로 접점 찾기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    y' = 2e^{2x} = 2 에서 e^{2x} = 1, x = 0 이고 y = 2. y − 2 = 2x → y = 2x + 2. 지수방정식 e^{2x} = 1 → x = 0 이 접점 찾기의 전부. 교과서 구역·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "y' = 2e^{2x} = 2 → e^{2x} = 1 → 접점 (0, 2) → y = 2x + 2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y=2x+2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0602.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기울기(2 → 2e² · 1)와 상수항(+1 → −1 · 0)을 바꿈. 제약: 2e^{2x} = m 에서 x = (1/2)ln(m/2) 이므로 m/2 가 e 의 거듭제곱이어야 접점이 깔끔하고, m > 0 이어야 한다."
    creative: "(1) 기울기를 2e² 로 두어 접점이 (1, e²+1) 이 되게(★1~2) (2) 직선 y = 2x + k 가 곡선에 접할 때 k(★2 · 매개변수) (3) 곡선 y = e^{2x} + 1 과 직선 y = 2x + k 의 교점 개수를 k 에 따라(★3 · RT d1 + MI d1)."
```

```yaml
- id: RPM-CALC2-0603
  page: 87
  vendor_label: "교과서 06-2 접선의 방정식을 구하는 방법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    곡선 y = tan x (0 < x < π/2) 에 접하고 기울기가 2 인 접선의 방정식.
  category: "y' = sec²x = 2 → cos²x = 1/2 → x = π/4 → 접점 (π/4, 1) → 점-기울기꼴"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "기울기가 주어진 접선의 방정식(f'(x) = m 으로 접점 찾기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    y' = sec²x = 2 에서 cos²x = 1/2, 범위 0 < x < π/2 에서 x = π/4 이고 y = tan(π/4) = 1. y − 1 = 2(x − π/4) → y = 2x − π/2 + 1. sec² 을 cos² 으로 옮겨 특수각을 읽는 한 단계가 핵심이며 범위가 해를 하나로 고정한다. 교과서 구역·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "y' = sec²x = 2 → cos²x = 1/2 → x = π/4 → 접점 (π/4, 1) → y = 2x − π/2 + 1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y=2x-\dfrac{\pi}{2}+1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0603.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기울기(2 → 4 → cos²x = 1/4 → x = π/3 · 4/3 → cos²x = 3/4 → x = π/6)와 범위를 바꿈. 제약: sec²x ≥ 1 이므로 기울기는 1 이상이어야 하고, cos²x 값이 특수각(1/4 · 1/2 · 3/4)이 되게 기울기를 4 · 2 · 4/3 으로 고른다."
    creative: "(1) 범위를 −π/2 < x < π/2 로 넓혀 접선 두 개(★2 · MI d1) (2) 기울기 1 로 두면 접점 (0, 0) 이 되어 접선 y = x 와 y = tan x 의 위치 관계로 확장(★2) (3) 「y = tan x 의 접선 중 기울기가 가장 작은 것」 처럼 최소 기울기(sec²x ≥ 1 → y = x)로 바꾸기(★2 · EQV d1)."
```

공통 발문(0604~0607): 주어진 점에서 다음 곡선에 그은 접선의 방정식을 구하시오.

```yaml
- id: RPM-CALC2-0604
  page: 87
  vendor_label: "교과서 06-2 접선의 방정식을 구하는 방법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    점 (4, 0) 에서 곡선 y = 1/x 에 그은 접선의 방정식.
  category: "접점 (t, 1/t) 설정 → 접선식 → (4, 0) 대입 → t = 2 → 접선 확정"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선 밖의 한 점에서 그은 접선의 방정식(접점 (t, f(t)) 설정)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    점 (4, 0) 은 곡선 위에 없으므로 접점을 (t, 1/t) 로 두고 접선 y − 1/t = −(1/t²)(x − t) 에 (4, 0) 을 대입하면 −1/t = −(4 − t)/t², 즉 t = 4 − t 로 t = 2. 접점 (2, 1/2) · 기울기 −1/4 로 y = −x/4 + 1. 접점을 미지수로 두는 교과서 표준 골조이며 t 방정식이 일차로 떨어진다. 교과서 구역·통찰 없음·M_total 6 → ★1.
    [분류 이슈] 유형 구역 「곡선 밖의 한 점에서 그은 접선」 기본 문항과 골조가 같아 ★2 후보이나 +1 조건(통찰 2개·depth 3)에 들지 않아 교과서 출발점 ★1 유지.
  tier: star_1
  mechanism_primary: "접점 (t, 1/t) → y − 1/t = −(x − t)/t² → (4, 0) 대입 → t = 2 → y = −x/4 + 1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y=-\dfrac{1}{4}x+1$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0604.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "외부 점을 (a, 0) 으로 두면 t = a/2 이므로 a 를 짝수(2 · 6 · 8)로, 함수를 k/x 로. 제약: 외부 점이 곡선 위에 있으면 안 되고(y = 1/x 를 만족하지 않게), 점 (0, b) 로 바꾸면 t 방정식이 2/t = b 로 형태가 달라지니 답이 유리수인지 확인한다."
    creative: "(1) 점 (a, 0) 에서 그은 접선의 접점이 (a/2, 2/a) 임을 일반화(★2 · Mₐ 2) (2) 점 (1, 2) 처럼 접선이 없는 위치 · (1, 0) 처럼 하나 · (−1, 1) 처럼 두 개인 위치로 접선 개수 판단(t 이차방정식의 판별식 · ★3 · MI d1) (3) 접선과 두 좌표축이 만드는 삼각형 넓이가 접점과 무관하게 2 로 일정함을 확인(★3 · PD d1)."
```

```yaml
- id: RPM-CALC2-0605
  page: 87
  vendor_label: "교과서 06-2 접선의 방정식을 구하는 방법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    점 (2, 0) 에서 곡선 y = √(x−3) 에 그은 접선의 방정식.
  category: "접점 (t, √(t−3)) 설정 → 접선식 → (2, 0) 대입 → t = 4 → 접선 확정"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선 밖의 한 점에서 그은 접선의 방정식(접점 (t, f(t)) 설정)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    접점을 (t, √(t−3)) 로 두면 기울기 1/(2√(t−3)) 이고 접선에 (2, 0) 을 대입하면 −√(t−3) = (2 − t)/(2√(t−3)). 양변에 2√(t−3) 을 곱해 −2(t − 3) = 2 − t, t = 4. 접점 (4, 1) · 기울기 1/2 로 y = x/2 − 1. 근호 정리가 한 번 들어가지만 t 방정식은 일차. 교과서 구역·통찰 없음·M_total 6 → ★1.
    [분류 이슈] 0604 와 같은 사유로 ★2 후보 · 라벨 ★1 유지.
  tier: star_1
  mechanism_primary: "접점 (t, √(t−3)) → 기울기 1/(2√(t−3)) → (2, 0) 대입 → −2(t−3) = 2−t → t = 4 → y = x/2 − 1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y=\dfrac{1}{2}x-1$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0605.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "평행이동(x−3 → x−1 · x+2)과 외부 점 (a, 0) 을 바꿈. 제약: y = √(x−c) 에 대해 (a, 0) 에서 그은 접선의 접점은 t = 2c − a 이므로 a < c 여야 접선이 존재하고, 접점 y 좌표 √(c − a) 가 유리수가 되게 c − a 를 완전제곱수로."
    creative: "(1) 외부 점을 (−1, 0) 으로 두면 접점 (7, 2) 로 같은 골조(★2) (2) a ≥ c 이면 접선이 없음을 그래프로 설명(★2 · RT d1) (3) y = √(x−3) 와 직선 y = m(x − 2) 가 접할 조건을 제곱한 이차방정식의 판별식으로 풀어 접점 설정 풀이와 비교(★3 · SC d1)."
```

```yaml
- id: RPM-CALC2-0606
  page: 87
  vendor_label: "교과서 06-2 접선의 방정식을 구하는 방법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    점 (1, 0) 에서 곡선 y = e^{−x} 에 그은 접선의 방정식.
  category: "접점 (t, e^{−t}) 설정 → 접선식 → (1, 0) 대입 → t = 0 → 접선 확정"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선 밖의 한 점에서 그은 접선의 방정식(접점 (t, f(t)) 설정)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    접점 (t, e^{−t}) · 기울기 −e^{−t} 로 접선 y − e^{−t} = −e^{−t}(x − t) 에 (1, 0) 을 넣으면 −e^{−t} = −e^{−t}(1 − t). e^{−t} ≠ 0 으로 나누어 1 = 1 − t, t = 0. 접점 (0, 1) · 기울기 −1 로 y = −x + 1. 지수가 공통 인수로 빠져 t 방정식이 즉시 일차. 교과서 구역·통찰 없음·M_total 5 → ★1.
    [분류 이슈] 0604 와 같은 사유로 ★2 후보 · 라벨 ★1 유지.
  tier: star_1
  mechanism_primary: "접점 (t, e^{−t}) → y − e^{−t} = −e^{−t}(x − t) → (1, 0) 대입 → 1 = 1 − t → t = 0 → y = −x + 1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y=-x+1$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0606.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "외부 점 (a, 0) 을 바꾸면 접점 t = a − 1 이므로 a 를 정수로, 함수를 e^{x} · e^{2x} · e^{−2x} 로. 제약: 외부 점은 곡선 위에 있으면 안 되고(y = e^{−a} ≠ 0 이면 자동), 접선의 기울기 −e^{−(a−1)} 이 깔끔하려면 a = 1 또는 a = 2 (기울기 −1/e)."
    creative: "(1) 원점에서 y = e^{x} 에 그은 접선(접점 (1, e) · y = ex)으로 바꾸기(★2 · 대표 문항) (2) 점 (a, 0) 에서 y = e^{−x} 에 그은 접선의 y절편을 a 의 식으로(★2 · Mₐ 2) (3) 점 (0, k) 에서 접선이 존재할 k 의 범위(k = (1+t)e^{−t} 의 치역 · ★3 · RT d1 + 접선 개수)."
```

```yaml
- id: RPM-CALC2-0607
  page: 87
  vendor_label: "교과서 06-2 접선의 방정식을 구하는 방법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    원점 (0, 0) 에서 곡선 y = ln x 에 그은 접선의 방정식.
  category: "접점 (t, ln t) 설정 → 접선식 → (0, 0) 대입 → ln t = 1 → t = e → 접선 확정"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선 밖의 한 점에서 그은 접선의 방정식(접점 (t, f(t)) 설정)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    접점 (t, ln t) · 기울기 1/t 로 접선 y − ln t = (x − t)/t 에 원점을 넣으면 −ln t = −1, t = e. 접점 (e, 1) · 기울기 1/e 로 y = x/e. 원점 통과 조건이 ln t = 1 로 바로 떨어지는 가장 짧은 사례. 교과서 구역·통찰 없음·M_total 5 → ★1.
    [분류 이슈] 0604 와 같은 사유로 ★2 후보 · 라벨 ★1 유지.
  tier: star_1
  mechanism_primary: "접점 (t, ln t) → y − ln t = (x − t)/t → (0, 0) 대입 → ln t = 1 → t = e → y = x/e"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y=\dfrac{1}{e}x$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0607.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "함수를 ln 2x · log₂x · ln(x+1) 로, 외부 점을 (0, b) 로. 제약: 원점에서 y = ln x 에 그은 접선의 접점은 항상 (e, 1) 이며 (0, b) 로 바꾸면 ln t = 1 + b → t = e^{1+b} 이므로 b 는 정수로 두어 답을 e 의 거듭제곱으로 유지한다."
    creative: "(1) 접선 y = x/e 와 y = ln x 의 위치 관계로 부등식 ln x ≤ x/e 를 끌어내기(★3 · RT d1 → 부등식 증명 골조) (2) y = ln x 와 y = e^x 가 y = x 에 대칭임을 써서 원점에서 y = e^x 에 그은 접선 y = ex 를 바로 얻기(★2 · SYM d1) (3) 직선 y = mx 와 y = ln x 의 교점 개수를 m 에 따라(★3 · MI d1)."
```

group 경계(0608~0609 · 소문항 문항).

```yaml
- id: RPM-CALC2-0608
  page: 87
  vendor_label: "교과서 06-2 접선의 방정식을 구하는 방법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    매개변수 t 로 나타낸 곡선 x = t² − 1, y = t + 1/t 에 대해 ⑴ dy/dx ⑵ t = 2 일 때 x, y 의 값 ⑶ t = 2 에 대응하는 점에서의 접선의 방정식.
  category: "매개변수 미분 dy/dx = (dy/dt)/(dx/dt) → t = 2 대입(점·기울기) → 점-기울기꼴"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "매개변수로 나타낸 곡선의 접선의 방정식"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴ dx/dt = 2t, dy/dt = 1 − 1/t² 이므로 dy/dx = (1 − 1/t²)/(2t) = (t² − 1)/(2t³). ⑵ t = 2 에서 x = 3, y = 5/2. ⑶ 기울기 (4 − 1)/16 = 3/16 이므로 y − 5/2 = (3/16)(x − 3), 정리하면 y = (3/16)x + 31/16. 소문항이 절차를 세 토막으로 안내하며 분수 정리가 노동의 대부분. 교과서 구역·통찰 없음·M_total 6 → ★1.
    [분류 이슈] 유형 구역 「매개변수로 나타낸 곡선의 접선」 기본 문항과 골조가 같아 ★2 후보 · 소문항 안내가 있어 라벨 ★1 유지.
  tier: star_1
  mechanism_primary: "dy/dx = (1 − 1/t²)/(2t) = (t² − 1)/(2t³) → t = 2: 점 (3, 5/2) · 기울기 3/16 → y = (3/16)x + 31/16"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '(1) $\dfrac{dy}{dx}=\dfrac{t^2-1}{2t^3}$ (2) $x=3$, $y=\dfrac{5}{2}$ (3) $y=\dfrac{3}{16}x+\dfrac{31}{16}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0608.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "t 값(2 → 3 · −2)과 x = t² − 1 의 상수, y = t + 1/t 의 계수를 바꿈. 제약: t = ±1 은 dy/dt = 0 이라 접선이 수평(기울기 0)이 되고, t = 0 은 y 가 정의되지 않으며 dx/dt = 0 이라 제외한다."
    creative: "(1) 소문항 없이 「t = 2 에 대응하는 점에서의 접선」 한 문장으로(★2) (2) 접선의 기울기가 0 이 되는 t 와 그때의 점(dy/dt = 0 · ★2) (3) 매개변수를 소거해 y² = (x+1) + 2 + 1/(x+1) 로 만든 뒤 음함수 미분으로 같은 기울기가 나오는지 비교(★3 · SC d1)."
```

```yaml
- id: RPM-CALC2-0609
  page: 87
  vendor_label: "교과서 06-2 접선의 방정식을 구하는 방법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    곡선 x² − 2xy − y² + 7 = 0 에 대해 ⑴ dy/dx ⑵ 점 (1, 2) 에서의 접선의 기울기 ⑶ 점 (1, 2) 에서의 접선의 방정식.
  category: "음함수 미분(양변 x 로 미분 · y' 정리) → 점 대입 → 점-기울기꼴"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "음함수의 접선의 방정식(음함수 미분법)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴ 양변을 x 로 미분하면 2x − 2y − 2xy' − 2yy' = 0 이므로 y' = (x − y)/(x + y). ⑵ (1, 2) 를 대입하면 −1/3. ⑶ y − 2 = −(1/3)(x − 1) → y = −x/3 + 7/3. −2xy 항의 곱 미분과 y' 인수 정리가 노동의 중심이고 소문항이 단계를 안내한다. 교과서 구역·통찰 없음·M_total 6 → ★1.
    [분류 이슈] 유형 구역 「음함수의 접선」 기본 문항과 골조가 같아 ★2 후보 · 소문항 안내가 있어 라벨 ★1 유지.
  tier: star_1
  mechanism_primary: "2x − 2y − 2xy' − 2yy' = 0 → y' = (x − y)/(x + y) → (1, 2): −1/3 → y = −x/3 + 7/3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '(1) $\dfrac{dy}{dx}=\dfrac{x-y}{x+y}$ (2) $-\dfrac{1}{3}$ (3) $y=-\dfrac{1}{3}x+\dfrac{7}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0609.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수항 7 과 점 (1, 2) 를 함께 바꿈(점이 곡선 위에 있도록 상수항을 역산). 제약: 접점에서 x + y ≠ 0 이어야 기울기가 정의되고, 계수(−2xy · −y²)를 바꾸면 y' 의 식이 달라지므로 답 ⑴ 을 다시 유도한다."
    creative: "(1) 소문항 없이 접선 한 문장(★2) (2) 접선의 기울기가 0 인 점(x = y 와 연립 · x² = 7/2)과 y축에 평행한 접선의 존재 여부(x + y = 0 은 연립 시 실근 없음)를 함께 묻기(★3 · VF d1) (3) 곡선을 y 에 대해 풀어 y = −x ± √(2x² + 7) 로 두고 직접 미분한 결과와 비교(★3 · SC d1)."
```

### 교과서 06-3 이계도함수

공통 발문(0610~0615): 다음 함수의 이계도함수를 구하시오.

```yaml
- id: RPM-CALC2-0610
  page: 89
  vendor_label: "교과서 06-3 이계도함수"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    y = x³ − 2x² + 5 의 이계도함수.
  category: "다항함수 두 번 미분"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이계도함수 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    y' = 3x² − 4x, y'' = 6x − 4. 다항식 미분 두 번. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "y' = 3x² − 4x → y'' = 6x − 4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$y''=6x-4$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0610.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수와 차수(x⁴ · 5x³ − x)를 바꿈. 제약: 상수항은 y'' 에 영향이 없고 일차 이하 항도 사라지므로 최소 이차 이상 항을 남긴다."
    creative: "(1) y'' = 0 을 만족시키는 x(x = 2/3)를 물어 변곡점 후보로 연결(★1~2) (2) f''(1) = 2 가 되도록 계수 a 정하기(★2 · 역방향·Mₐ 2) (3) f(x) = x³ + ax² + bx 에서 f'(1) = 0, f''(1) = 0 조건으로 a, b(★2 · 두 조건 연립)."
```

```yaml
- id: RPM-CALC2-0611
  page: 89
  vendor_label: "교과서 06-3 이계도함수"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    y = 1/(x²+1) 의 이계도함수.
  category: "(x²+1)^{−1} 합성 미분 → 곱·합성 미분 한 번 더 → 통분해 인수 정리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이계도함수 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    y = (x²+1)^{−1} 에서 y' = −2x(x²+1)^{−2}. 다시 미분하면 y'' = −2(x²+1)^{−2} + 8x²(x²+1)^{−3} 이고 통분하면 (−2(x²+1) + 8x²)/(x²+1)³ = 2(3x²−1)/(x²+1)³. 몫(합성) 미분 두 번과 통분·인수 정리가 노동의 전부. 교과서 구역·통찰 없음·M_total 6 → ★1.
  tier: star_1
  mechanism_primary: "y' = −2x(x²+1)^{−2} → y'' = −2(x²+1)^{−2} + 8x²(x²+1)^{−3} → 통분 → 2(3x²−1)/(x²+1)³"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y''''=\dfrac{2(3x^2-1)}{(x^2+1)^3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0611.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모를 x²+2 · x²−1 · 2x²+1 로, 분자를 x 로. 제약: 분모가 0 이 되는 x 를 정의역에서 빼고, 답은 (분모)³ 으로 통분해 분자를 인수분해한 꼴로 통일한다."
    creative: "(1) y'' = 0 인 x(±1/√3)를 물어 변곡점으로 연결(★2) (2) y = x/(x²+1) 로 바꿔 곱·몫 미분 조합(★2 · Mₖ 상승) (3) y = (x²+1)^{−1} 을 u = x²+1 로 보고 y'' 를 u 와 x 로 표현해 일반화(★3 · Mₐ 2)."
```

```yaml
- id: RPM-CALC2-0612
  page: 89
  vendor_label: "교과서 06-3 이계도함수"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    y = √(x+2) 의 이계도함수.
  category: "(x+2)^{1/2} 지수 미분 두 번 → 근호 꼴로 정리"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이계도함수 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    y = (x+2)^{1/2} 에서 y' = (1/2)(x+2)^{−1/2}, y'' = −(1/4)(x+2)^{−3/2} = −1/(4(x+2)√(x+2)). 지수 법칙 미분 두 번과 근호 꼴 환산. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "y' = (1/2)(x+2)^{−1/2} → y'' = −(1/4)(x+2)^{−3/2} → −1/(4(x+2)√(x+2))"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y''''=-\dfrac{1}{4(x+2)\sqrt{x+2}}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0612.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "평행이동(x+2 → x−1 · 2x+1)과 근호 계수를 바꿈. 제약: 정의역 x > −2 를 유지하고, 2x+1 처럼 x 계수가 붙으면 합성 미분 인수 2 가 두 번 곱해져 답이 −1/((2x+1)√(2x+1)) 로 바뀐다."
    creative: "(1) y'' 의 부호가 항상 음(위로 볼록)임을 확인(★1~2) (2) y = ³√(x+2) 로 지수 1/3 (★1) (3) y = √(x²+2) 로 바꿔 합성 미분 + 몫 미분 조합(★2 · Mₖ 2)."
```

```yaml
- id: RPM-CALC2-0613
  page: 89
  vendor_label: "교과서 06-3 이계도함수"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    y = e^{4x−1} 의 이계도함수.
  category: "e^{ax+b} 합성 미분 두 번(계수 a² 배)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이계도함수 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    y' = 4e^{4x−1}, y'' = 16e^{4x−1}. 합성 미분에서 지수의 계수 4 가 두 번 곱해진다. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "y' = 4e^{4x−1} → y'' = 16e^{4x−1}"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$y''=16e^{4x-1}$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0613.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수의 일차식 계수(4 → −2 · 1/2)와 상수(−1 → 3)를 바꿈. 제약: 상수는 답에 그대로 남고 계수는 제곱(16 · 4 · 1/4)이 되므로 음수 계수의 부호가 사라지는 것에 주의."
    creative: "(1) y'' − 16y = 0 을 만족시키는지 확인(★1~2 · EQV d1) (2) y = xe^{4x} 로 곱 미분 결합(★2) (3) y = e^{ax} 에서 y'' = 9y 가 되는 a(★2 · 역방향·Mₐ 2)."
```

```yaml
- id: RPM-CALC2-0614
  page: 89
  vendor_label: "교과서 06-3 이계도함수"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    y = ln x 의 이계도함수.
  category: "ln x 미분(1/x) → x^{−1} 미분(−x^{−2})"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이계도함수 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    y' = 1/x, y'' = −1/x². 로그 미분 뒤 거듭제곱 미분 한 번. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "y' = 1/x → y'' = −1/x²"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y''''=-\dfrac{1}{x^2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0614.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "ln 2x · ln(x+3) · log₂x · ln x² 로. 제약: ln kx 의 y'' 는 k 와 무관하게 −1/x² 이고, log_a x 는 1/ln a 배, ln x² 은 2 배가 된다."
    creative: "(1) y = x ln x 로 곱 미분 결합(y'' = 1/x)(★2) (2) y = ln x 에서 y'' < 0 이 항상 성립함을 볼록성으로 해석(★2 · RT d1) (3) y = (ln x)² 로 합성·곱 미분(★2)."
```

```yaml
- id: RPM-CALC2-0615
  page: 89
  vendor_label: "교과서 06-3 이계도함수"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    y = cos(x/2) 의 이계도함수.
  category: "cos(ax) 합성 미분 두 번(−a² 배)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이계도함수 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    y' = −(1/2)sin(x/2), y'' = −(1/4)cos(x/2). 합성 미분 인수 1/2 이 두 번 곱해지고, sin 을 미분할 때 부호가 다시 바뀌지 않는 점만 주의. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "y' = −(1/2)sin(x/2) → y'' = −(1/4)cos(x/2)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y''''=-\dfrac{1}{4}\cos\dfrac{x}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0615.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각의 계수(x/2 → 3x · 2x)와 함수(cos → sin)를 바꿈. 제약: y'' = −a²y 가 되므로 계수 a² 과 부호를 답에 반영한다."
    creative: "(1) y'' + (1/4)y = 0 확인(★1~2 · EQV d1) (2) y = sin²x 로 바꿔 배각으로 정리한 뒤 미분(y'' = 2cos 2x)(★2 · RT d1) (3) y = e^x cos x 로 곱 미분 두 번(★2 · Mₖ 2)."
```

### 교과서 06-4 함수의 증가와 감소

공통 발문(0616~0620): 다음 함수의 증가와 감소를 조사하시오.

```yaml
- id: RPM-CALC2-0616
  page: 89
  vendor_label: "교과서 06-4 함수의 증가와 감소"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    f(x) = x²/2 + 1/x 의 증가와 감소를 조사.
  category: "f' = x − 1/x² = (x³−1)/x² → 부호 → x = 0 제외한 구간 표"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "도함수의 부호로 증가·감소 구간 조사"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    정의역 x ≠ 0. f'(x) = x − 1/x² = (x³ − 1)/x² 이므로 부호는 x³ − 1 이 정한다. x < 1 에서 f' < 0, x > 1 에서 f' > 0 이지만 x = 0 이 정의역에 없으므로 감소 구간을 (−∞, 0) 과 (0, 1] 로 나누어 적고 [1, ∞) 에서 증가. 정의역 제외점과 구간 표기(닫힘·열림)가 함정 둘. 교과서 구역·통찰 없음·M_total 6 → ★1.
  tier: star_1
  mechanism_primary: "f' = (x³ − 1)/x² → 부호 = sign(x³ − 1) · x ≠ 0 → (−∞, 0), (0, 1] 감소 · [1, ∞) 증가"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '풀이 참조 (구간 $(-\infty,\,0)$, $(0,\,1]$에서 감소, 구간 $[1,\,\infty)$에서 증가)'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0616.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "1/x 의 계수(→ 4/x · −1/x)와 x² 의 계수를 바꿈. 제약: f' = 0 의 근이 x³ = k 꼴이라 k 가 완전세제곱수(1 · 8 · −1)여야 경계가 유리수이고, 계수 부호가 바뀌면 부호표가 뒤집힌다."
    creative: "(1) 1/x 대신 1/(2x²) 을 넣어 f' = (x⁴ − 1)/x³ 로 근이 두 개(±1)가 되게(★2 · MI d1) (2) 감소 구간을 (−∞, 1] 로 잘못 합친 오답을 제시하고 이유를 묻기(★2 · T-범위 명시) (3) f(x) = x²/2 + a/x 가 x > 0 에서 증가만 하도록 하는 a 의 범위(a ≤ 0 · ★3 · BW d1)."
```

```yaml
- id: RPM-CALC2-0617
  page: 89
  vendor_label: "교과서 06-4 함수의 증가와 감소"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    f(x) = √(x²+x+1) 의 증가와 감소를 조사.
  category: "f' = (2x+1)/(2√(x²+x+1)) → 분모 양수 → 부호 = 2x+1"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "도함수의 부호로 증가·감소 구간 조사"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x² + x + 1 > 0 이므로 정의역은 실수 전체. f'(x) = (2x + 1)/(2√(x²+x+1)) 에서 분모가 양수라 부호는 2x + 1 이 정하며, (−∞, −1/2] 에서 감소, [−1/2, ∞) 에서 증가. 근호 안이 항상 양수임을 판별식으로 확인하는 것이 유일한 손질. 교과서 구역·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "f' = (2x+1)/(2√(x²+x+1)) → 부호 = sign(2x+1) → (−∞, −1/2] 감소 · [−1/2, ∞) 증가"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '풀이 참조 (구간 $\left(-\infty,\,-\dfrac{1}{2}\right]$에서 감소, 구간 $\left[-\dfrac{1}{2},\,\infty\right)$에서 증가)'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0617.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안 이차식(x²−2x+3 · x²+4)을 판별식 음수인 것으로. 제약: 판별식이 0 이상이면 정의역이 잘리고 경계에서 미분 불가능해 구간 표기가 달라진다."
    creative: "(1) 근호 안을 x²−4 로 바꿔 정의역이 잘리는 경우(★2 · T-범위) (2) √(x²+x+1) 의 최솟값(x = −1/2 에서 √3/2)으로 연결(★2) (3) 근호 안 이차식의 증감이 곧 f 의 증감이라는 이유(단조 합성)를 설명하게(★2 · EQV d1)."
```

```yaml
- id: RPM-CALC2-0618
  page: 89
  vendor_label: "교과서 06-4 함수의 증가와 감소"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    f(x) = e^{−x}/x 의 증가와 감소를 조사.
  category: "몫 미분 → f' = −e^{−x}(x+1)/x² → 부호 = −(x+1) · x ≠ 0"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "도함수의 부호로 증가·감소 구간 조사"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    정의역 x ≠ 0. f'(x) = (−e^{−x}·x − e^{−x})/x² = −e^{−x}(x + 1)/x² 이고 e^{−x} > 0, x² > 0 이므로 부호는 −(x + 1). x < −1 에서 증가, −1 < x < 0 과 x > 0 에서 감소이며 x = 0 을 사이에 두고 감소 구간을 둘로 나눈다. 몫 미분에서 e^{−x} 의 부호(−) 처리와 정의역 제외가 함정. 교과서 구역·통찰 없음·M_total 7 → ★1.
  tier: star_1
  mechanism_primary: "f' = −e^{−x}(x+1)/x² → 부호 = −sign(x+1) · x ≠ 0 → (−∞, −1] 증가 · [−1, 0), (0, ∞) 감소"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '풀이 참조 (구간 $(-\infty,\,-1]$에서 증가, 구간 $[-1,\,0)$, $(0,\,\infty)$에서 감소)'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0618.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "e^{−x} → e^{x} · e^{2x}, 분모 x → x² 로. 제약: 지수 계수를 바꾸면 f' = 0 의 근이 x = −1/a 로 움직이고, 분모를 x² 으로 바꾸면 f' = −e^{−x}(x+2)/x³ 처럼 분모 부호가 x 의 부호를 따라 부호표에 한 줄이 더 든다."
    creative: "(1) f(x) = xe^{−x} 로 바꿔 정의역 제외점 없이 같은 골조(★1) (2) 감소 구간을 [−1, ∞) 로 합칠 수 없는 이유를 묻기(★2 · T-범위) (3) x > 0 에서의 극한·점근선과 결합해 그래프 개형(★3 · RT d1)."
```

```yaml
- id: RPM-CALC2-0619
  page: 89
  vendor_label: "교과서 06-4 함수의 증가와 감소"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    f(x) = x ln x 의 증가와 감소를 조사.
  category: "곱 미분 → f' = ln x + 1 → x = 1/e 경계 → 정의역 x > 0"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "도함수의 부호로 증가·감소 구간 조사"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    정의역 x > 0. f'(x) = ln x + 1 = 0 에서 x = 1/e 이고, 0 < x < 1/e 에서 f' < 0, x > 1/e 에서 f' > 0. 따라서 (0, 1/e] 에서 감소, [1/e, ∞) 에서 증가. 곱 미분과 로그 방정식 ln x = −1 한 단계. 교과서 구역·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "f' = ln x + 1 → ln x = −1 → x = 1/e → (0, 1/e] 감소 · [1/e, ∞) 증가"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '풀이 참조 (구간 $\left(0,\,\dfrac{1}{e}\right]$에서 감소, 구간 $\left[\dfrac{1}{e},\,\infty\right)$에서 증가)'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0619.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x² ln x · x ln x − x · x ln 2x 로. 제약: 정의역 x > 0 을 유지하고, f' = 0 의 근이 e 의 거듭제곱(1/e · 1/√e · 1)이 되도록 계수를 고른다."
    creative: "(1) 최솟값 −1/e 를 함께 묻기(★2) (2) f(x) = x ln x − ax 의 극솟값이 −e 가 되는 a(a = 2 · ★2~3 · 역방향) (3) 감소 구간 (0, 1/e] 의 왼쪽 끝을 0 으로 닫지 않는 이유(정의역)를 묻기(★2 · T-범위)."
```

```yaml
- id: RPM-CALC2-0620
  page: 89
  vendor_label: "교과서 06-4 함수의 증가와 감소"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    f(x) = tan x − 2x (−π/2 < x < π/2) 의 증가와 감소를 조사.
  category: "f' = sec²x − 2 → cos²x 와 1/2 비교 → |x| = π/4 경계"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "도함수의 부호로 증가·감소 구간 조사"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f'(x) = sec²x − 2 = 0 에서 cos²x = 1/2, 범위 안에서 x = ±π/4. f' > 0 은 sec²x > 2, 즉 cos²x < 1/2 이므로 |x| > π/4 에서 증가하고 [−π/4, π/4] 에서 감소. sec² 과 cos² 의 역수 관계에서 부등호 방향이 뒤집히는 것과 열린 범위 끝 표기가 함정. 교과서 구역·통찰 없음·M_total 6 → ★1.
  tier: star_1
  mechanism_primary: "f' = sec²x − 2 → cos²x = 1/2 → x = ±π/4 → (−π/2, −π/4], [π/4, π/2) 증가 · [−π/4, π/4] 감소"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '풀이 참조 (구간 $\left(-\dfrac{\pi}{2},\,-\dfrac{\pi}{4}\right]$, $\left[\dfrac{\pi}{4},\,\dfrac{\pi}{2}\right)$에서 증가, 구간 $\left[-\dfrac{\pi}{4},\,\dfrac{\pi}{4}\right]$에서 감소)'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0620.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수 2 → 4 (cos²x = 1/4 → x = ±π/3) · 4/3 (x = ±π/6) 로. 제약: sec²x ≥ 1 이므로 상수가 1 이하이면 f' ≥ 0 이 되어 감소 구간이 사라지고, 범위 (−π/2, π/2) 를 넓히면 주기마다 경계가 반복된다."
    creative: "(1) 상수를 1 로 바꿔 f = tan x − x 가 범위 전체에서 증가함을 확인(x = 0 에서 f' = 0 이어도 증가 · ★2) (2) 0 < x < π/2 에서 f 의 최솟값 1 − π/2 (x = π/4)를 묻기(★2) (3) f(x) = tan x − ax 가 감소 구간을 갖기 위한 a 의 범위(a > 1 · ★3 · BW d1)."
```

### 교과서 06-5 함수의 극대와 극소

공통 발문(0621~0624): 도함수를 이용하여 다음 함수의 극값을 구하시오.

```yaml
- id: RPM-CALC2-0621
  page: 89
  vendor_label: "교과서 06-5 함수의 극대와 극소"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    f(x) = x/(x²+1) 의 극값(도함수 이용).
  category: "몫 미분 → f' = (1−x²)/(x²+1)² → x = ±1 부호 변화 → 극댓값·극솟값"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "도함수의 부호 변화로 극값 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f'(x) = (1 − x²)/(x²+1)² 이므로 f' = 0 은 x = ±1. x < −1 에서 음, −1 < x < 1 에서 양, x > 1 에서 음이므로 x = −1 에서 극솟값 −1/2, x = 1 에서 극댓값 1/2. 분모는 항상 양수라 부호는 1 − x² 이 정하고, 어느 쪽이 극대인지 부호 순서로 판단. 교과서 구역·통찰 없음·M_total 6 → ★1.
  tier: star_1
  mechanism_primary: "f' = (1 − x²)/(x²+1)² → x = ±1 → 부호 −,+,− → 극댓값 f(1) = 1/2 · 극솟값 f(−1) = −1/2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '극댓값: $\dfrac{1}{2}$, 극솟값: $-\dfrac{1}{2}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0621.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자를 2x 로, 분모를 x² + 4 로. 제약: f' 의 분자가 a − x² 꼴이라 a 가 완전제곱수(1 · 4)여야 극점이 유리수이고, 분자를 x − 1 로 바꾸면 f' = (−x² + 2x + 1)/(⋯)² 로 근이 무리수가 된다."
    creative: "(1) 극댓값·극솟값의 합이 0 인 이유(기함수)를 묻기(★2 · SYM d1) (2) 최댓값·최솟값(극값이 곧 최대·최소 · 점근선 y = 0)으로 확장(★2 · RT d1) (3) f(x) = x/(x²+a) 의 극댓값이 1/4 이 되는 a(a = 4 · ★3 · Mₐ 2 · 역방향)."
```

```yaml
- id: RPM-CALC2-0622
  page: 89
  vendor_label: "교과서 06-5 함수의 극대와 극소"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    f(x) = √(x²+3) 의 극값(도함수 이용).
  category: "합성 미분 → f' = x/√(x²+3) → x = 0 에서 부호 −→+ → 극솟값"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "도함수의 부호 변화로 극값 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f'(x) = x/√(x²+3) 이고 분모가 양수이므로 부호는 x 와 같다. x = 0 에서 −에서 +로 바뀌어 극솟값 f(0) = √3, 극댓값은 없다. 정의역은 실수 전체. 교과서 구역·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "f' = x/√(x²+3) → 부호 = sign(x) → x = 0 극소 → 극솟값 √3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '극솟값: $\sqrt{3}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0622.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안 상수(3 → 1 · 4)와 x 의 평행이동(x² → (x−1)²)을 바꿈. 제약: 근호 안이 항상 양수여야 정의역이 실수 전체이고, x²−1 처럼 0 이 되는 값이 있으면 정의역이 잘려 극값 논의가 달라진다."
    creative: "(1) 근호 안을 완전제곱 + 상수로 두고 극솟값을 근호 없이 만들기(x²−2x+5 → 극솟값 2)(★1) (2) √(x²+3) 을 원점과 점 (x, √3) 사이의 거리로 보고 최소 거리로 해석(★2 · RT d1) (3) f(x) = √(x²+3) − x 처럼 일차항을 빼 극값이 사라지는 경우와 비교(★3 · MI d1)."
```

```yaml
- id: RPM-CALC2-0623
  page: 89
  vendor_label: "교과서 06-5 함수의 극대와 극소"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    f(x) = xe^{2x} 의 극값(도함수 이용).
  category: "곱 미분 → f' = e^{2x}(1+2x) → x = −1/2 부호 −→+ → 극솟값"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "도함수의 부호 변화로 극값 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f'(x) = e^{2x} + 2xe^{2x} = e^{2x}(1 + 2x) 이고 e^{2x} > 0 이므로 부호는 1 + 2x. x = −1/2 에서 −에서 +로 바뀌어 극솟값 f(−1/2) = −(1/2)e^{−1} = −1/(2e). 극댓값은 없다. 공통 인수 e^{2x} 로 묶어 부호를 읽는 것이 전부. 교과서 구역·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "f' = e^{2x}(1 + 2x) → x = −1/2 극소 → 극솟값 −1/(2e)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '극솟값: $-\dfrac{1}{2e}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0623.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 계수(2x → −x · 3x)와 앞 인수(x → x² · x−1)를 바꿈. 제약: xe^{ax} 의 극점은 x = −1/a 이므로 a 를 정수나 간단한 분수로, x²e^{x} 로 바꾸면 극점이 x = 0, −2 두 개가 되어 극댓값·극솟값이 모두 생긴다."
    creative: "(1) x²e^{x} 로 바꿔 극대·극소 둘 다 있는 경우(★2) (2) 최솟값과 x → −∞ 극한(0)을 합쳐 그래프 개형(★2 · RT d1) (3) f(x) = xe^{ax} 의 극솟값이 −1/(3e) 가 되는 a(a = 3 · ★2 · 역방향·Mₐ 2)."
```

```yaml
- id: RPM-CALC2-0624
  page: 89
  vendor_label: "교과서 06-5 함수의 극대와 극소"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    f(x) = sin x − cos x (0 < x < π) 의 극값(도함수 이용).
  category: "f' = cos x + sin x = 0 → tan x = −1 → x = 3π/4 → 부호 +→− → 극댓값"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "도함수의 부호 변화로 극값 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f'(x) = cos x + sin x = 0 에서 tan x = −1, 범위 0 < x < π 에서 x = 3π/4. 0 < x < 3π/4 에서 f' > 0, 3π/4 < x < π 에서 f' < 0 이므로 극댓값 f(3π/4) = √2/2 + √2/2 = √2. 범위가 해를 하나로 고정하며 cos x + sin x 의 부호는 대입 검사나 √2 sin(x + π/4) 로 읽는다. 교과서 구역·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "f' = cos x + sin x → tan x = −1 → x = 3π/4 → 부호 +→− → 극댓값 √2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '극댓값: $\sqrt{2}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0624.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "범위(0 < x < 2π → 극솟값 −√2 도 생김)와 계수(sin x − √3 cos x → x = 5π/6 · 극댓값 2)를 바꿈. 제약: 삼각방정식 f' = 0 의 해가 특수각이 되도록 계수를 1·√3 조합으로, 범위 끝(0 · π)은 열린 구간이라 끝점은 극값 후보에서 제외."
    creative: "(1) 범위를 0 < x < 2π 로 넓혀 극댓값·극솟값 둘 다(★2 · MI d1) (2) f(x) = √2 sin(x − π/4) 로 합성해 극값을 바로 읽고 두 풀이 비교(★2 · SC d1) (3) f(x) = sin x − a cos x 의 극댓값이 2 가 되는 양수 a(a = √3 · ★3 · 역방향·Mₐ 2)."
```

group 경계(0625 · 빈칸 단독).

```yaml
- id: RPM-CALC2-0625
  page: 89
  vendor_label: "교과서 06-5 함수의 극대와 극소"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    빈칸 채우기 — 이계도함수로 f(x) = x³ − 3x² − 5 의 극값을 구하는 과정에서 f'' 의 식, f''(0)·f''(2) 의 부호, 극댓값·극솟값(㈎~㈒).
  category: "f' = 3x² − 6x = 0 → x = 0, 2 → f'' = 6x − 6 부호 → 극대·극소 판정 → 값 대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이계도함수를 이용한 극값 판정(f''(a) 의 부호)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f'(x) = 3x² − 6x = 0 에서 x = 0, 2. f''(x) = 6x − 6 (㈎) 이므로 f''(0) = −6 < 0 (㈏), f''(2) = 6 > 0 (㈐). 따라서 x = 0 에서 극댓값 f(0) = −5 (㈑), x = 2 에서 극솟값 f(2) = −9 (㈒). 이계도함수 판정법의 부호 규칙(f'' < 0 이면 극대)이 유일한 함정이며 빈칸이 절차를 안내한다. 교과서 구역·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "f' = 3x² − 6x → x = 0, 2 → f'' = 6x − 6 → f''(0) < 0 극댓값 −5 · f''(2) > 0 극솟값 −9"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "풀이 참조 (㈎ $6x-6$, ㈏ $<$, ㈐ $>$, ㈑ $-5$, ㈒ $-9$)"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0625.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼차식의 계수(x³ − 3x² − 5 → x³ − 6x² + 9x · 2x³ − 3x²)를 바꿈. 제약: f' = 0 의 근이 서로 다른 정수 두 개여야 f'' 의 부호가 양쪽에서 갈리고, 중근이면 f'' = 0 이라 이계도함수 판정이 실패한다."
    creative: "(1) 빈칸 없이 「이계도함수를 이용하여 극값을 구하시오」 한 문장(★1) (2) f(x) = x⁴ − 4x³ 처럼 f'(0) = 0, f''(0) = 0 인 점이 섞인 예로 판정법이 실패하면 부호표로 되돌아가게(★2 · VF d1) (3) 극댓값 −5 · 극솟값 −9 를 주고 f(x) = x³ + ax² + b 의 a, b 를 역산(a = −3, b = −5 · ★2 · 역방향)."
```

## 표본 판정 요약 (33문)

- ★ 분포: ★1 33 · ★2 0 · ★3 0 · ★4 0 · ★5 0
- 통찰형 0 · 절차형 33 · premium 0
- type_hint 상위: 「이계도함수 구하기」 6 · 「곡선 위의 점에서의 접선의 방정식(접점이 주어진 경우)」 5 · 「기울기가 주어진 접선의 방정식(f'(x) = m 으로 접점 찾기)」 5 · 「도함수의 부호로 증가·감소 구간 조사」 5 · 「곡선 밖의 한 점에서 그은 접선의 방정식(접점 (t, f(t)) 설정)」 4 · 「도함수의 부호 변화로 극값 구하기」 4 · 「접선에 수직인 직선(법선)의 방정식」 1 · 「매개변수로 나타낸 곡선의 접선의 방정식」 1 · 「음함수의 접선의 방정식(음함수 미분법)」 1 · 「이계도함수를 이용한 극값 판정(f''(a) 의 부호)」 1
- 대상층: 하위권 30 · 중하위권 3(0616 · 0618 · 0620 — Mₜ 2)
- 그림: 0문
- 전사 답 확인 필요: 없음(33문 모두 재계산 일치)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-CALC2-0604 | 교과서 구역(★1 출발)이지만 접점 (t, f(t)) 를 미지수로 두는 「곡선 밖의 한 점에서 그은 접선」 골조 · M_total 6. 유형 구역 기본 문항(★2)과 골조가 같아 ★2 후보. +1 조건(통찰 2개·depth 3)에 들지 않아 라벨 ★1 유지(1단 차) | ★1 / ★2 |
| RPM-CALC2-0605 | 0604 와 같음(무리함수 · 근호 정리 한 번 · M_total 6) | ★1 / ★2 |
| RPM-CALC2-0606 | 0604 와 같음(지수함수 · 공통 인수로 t 즉시 결정 · M_total 5) | ★1 / ★2 |
| RPM-CALC2-0607 | 0604 와 같음(로그함수 · 원점 통과 · M_total 5) | ★1 / ★2 |
| RPM-CALC2-0608 | 매개변수 곡선의 접선 · M_total 6. 소문항 셋이 단계를 안내해 ★1 유지, 유형 구역에서 소문항 없이 나오면 ★2 | ★1 / ★2 |
| RPM-CALC2-0609 | 음함수 미분 접선 · M_total 6. 0608 과 같은 사유 | ★1 / ★2 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 접선 유형은 넷으로 세운다 — 「접점이 주어진 접선」(base ★1) · 「기울기가 주어진 접선」(★1~2 · f'(x) = m 방정식과 범위 조건) · 「곡선 밖의 한 점에서 그은 접선」(★2 · 접점 미지수 t) · 「법선」 은 별도 유형이 아니라 접점 주어진 접선의 하위 tag(수직 조건 +0). 이 범위의 교과서 문항이 각 유형의 최소 사례다.
- 「매개변수 곡선의 접선」 과 「음함수의 접선」 은 미분 방식 자체가 다르므로 각각 별도 유형(base ★2). 소문항으로 쪼개진 0608·0609 는 base 가 아니라 안내판이고, 유형 구역의 한 문장 문항이 실제 base.
- 「이계도함수 구하기」 는 단독 유형(★1)으로 두고 함수 종류(다항·유리·무리·지수·로그·삼각)는 tag 로. 유형 구역에서 「f''(a) 의 값」 · 「y'' 와 y 의 관계식(y'' = −a²y · y'' − 16y = 0)」 이 붙으면 EQV d1 유형(★2)으로 분리 후보.
- 「증가·감소 구간 조사」 와 「극값 구하기」 는 같은 「f' 부호표」 골조라 통합 가능하지만 답 형식(구간 vs 값)과 함정(정의역 제외점 · 구간 표기)이 달라 하위 항목으로 나눈다. 정의역 제외점이 있는 0616·0618 은 tag T-범위로 남긴다.
- 「이계도함수를 이용한 극값 판정」(0625)은 유형 구역에서 「f''(a) 부호로 극대·극소 판정 + 미정계수」 로 확장되므로 별도 유형(★2) 후보. f'' = 0 인 실패 사례(VF)는 ★3 변형 지점.
- 유형 구역에서 반복될 확장 — 「접선이 지나는 점 조건으로 미정계수」(BW d1 · ★2~3) · 「두 곡선의 공통접선」(CON d1 · ★3) · 「증가하도록 하는 a 의 범위」(BW d1 · ★3) · 「극값을 갖도록/갖지 않도록 하는 조건」(★3) — 은 이 범위의 ★1 골조가 그대로 숫자 변형·창의 변형의 원본이 된다.
