---
name: mechanism-데이터-RPM-CALC1-08-p1
description: RPM 미적분Ⅰ 08 정적분 (1/3 · 교과서 08-1 정적분 ~ 유형 03 정적분의 계산: 적분 구간이 같은 경우) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 미적분Ⅰ (22개정) · 전사본 latex-bank/rpm-calc1
  section: 08 정적분
  unit_code: CALC1-08
  part: "1/3"
  extract_range: "109~111쪽 · 0690~0723"
  total_problems: 34
  unit_total: 111
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-calc1/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-calc1/items/<id>.tex
  image_source: latex-bank/rpm-calc1/figures/ (crops.json)
---

# RPM 미적분Ⅰ · 08 정적분 (1/3) 정독 데이터 (v1.0)

이 파일은 RPM 미적분Ⅰ 08 정적분 단원(111문) 가운데 109~111쪽의 34문항(0690~0723)을 다룬다. 구역은 교과서 08-1 정적분(9문 · 기본 계산 · 위끝<아래끝 부호 · 곱 전개) · 08-2 정적분의 성질(7문 · 같은 구간 합차 · 구간 이어 붙이기 · 방향 뒤집기) · 08-3 ∫_{-a}^{a} x^n dx 의 계산(2문 · 홀수 차수 소거) · 08-4 정적분으로 정의된 함수(4문 · 양변 미분 2 · 미분계수 꼴 극한 2) 뒤로 유형 01 미적분의 기본정리(4문) · 유형 02 미적분의 기본정리의 활용(4문) · 유형 03 정적분의 계산: 적분 구간이 같은 경우(4문) 순이다. 교과서 구역은 ★1 출발, 각 유형의 첫 문항은 「대표문제」 태그(난이도 표시 없음 → ★2 출발), 나머지는 중하·중·상중 난이도 표시(★1~2 · ★2 · ★3 출발)이며 「서술형」 태그는 0718 하나다. 그림 문항은 없다.

주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 사슬) · `insights[]`(유형 코드 · depth · effective_depth · 근거) · `variation_notes`(numeric/creative)를 채웠다. `depth_score` 는 insights 의 effective_depth 평균(없으면 0.00)이고, `insight_type` 은 통찰이 없거나 d1 한 개뿐이면 절차형, d2 이상 또는 2개 이상이면 통찰형으로 적었다. Mₐ 는 구체 수치 1, 미정계수·매개변수 2, 미지 함수 f 가 기호로만 주어져 그 값·적분값만 다루는 문항도 2, 부정적분 사이의 관계식처럼 함수의 구조를 다뤄야 하는 문항은 3 으로 매겼다. Mₜ 는 함정 0~1개면 1, 2~3개면 2. ★ 조정은 벤더 출발점에서 「통찰 0 · M_total ≤ 5 · Mₛ 1」 이면서 같은 골조의 교과서 문항이 이 범위에 있는 문항만 −1 했고(0712 · 0713 · 0721), 교과서 범위에 없는 매개변수 골조(0716 · 0717)는 출발점을 유지했다. d2 통찰 한 개(0715 · 0723)는 출발점 유지, +1 적용 문항은 없다. 08-3 구역의 홀수 차수 소거는 구역 자체가 가르치는 절차라 I-SYM 으로 세지 않았다. 전사 답은 34문 모두 다시 구해 일치했다(「전사 답 확인 필요」 0).

## 문항 데이터

### 교과서 08-1 정적분

```yaml
- id: RPM-CALC1-0690
  page: 109
  vendor_label: "교과서 08-1 정적분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ∫_2^2 (x³+4)dx 의 값. 위끝과 아래끝이 같은 정적분.
  category: "위끝=아래끝 → 정의로 0"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "위끝=아래끝인 정적분은 0"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ∫_a^a f(x)dx = 0 정의 확인 한 단계. 부정적분 x⁴/4+4x 를 구해 대입해도 F(2)−F(2)=0. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "위끝=아래끝 → ∫_a^a f dx = 0 → 0"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$0$'
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-calc1/items/0690.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "피적분함수(차수·계수)와 공통 끝값을 자유롭게 바꿀 수 있음. 제약: 위끝과 아래끝이 같아야 하며, 답은 항상 0 이므로 함수가 복잡해도 난이도는 변하지 않음."
    creative: "(1) 0712 처럼 값이 있는 정적분과 합으로 묶어 함정으로 심기(★1~2) (2) ∫_a^x f(t)dt 꼴에서 x=a 를 넣어 초기조건을 얻는 08-4 골조와 결합(★2) (3) 「위끝=아래끝이면 0」 을 정적분 성질 ㄱㄴㄷ 판별 보기로 넣기(★2 · I-MI d1)."
```

```yaml
- id: RPM-CALC1-0691
  page: 109
  vendor_label: "교과서 08-1 정적분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ∫_0^1 2x dx 의 값.
  category: "부정적분 → 위끝·아래끝 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "다항함수의 정적분 기본 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    [x²]_0^1 = 1. 미적분의 기본정리 한 줄 적용. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "F(x)=x² → F(1)−F(0) → 1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0691.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수·구간을 바꿀 수 있음(∫_0^2 3x² dx 등). 제약: 정수 답이 나오도록 끝값을 고름."
    creative: "(1) 값을 주고 위끝 a 를 묻기(0717 골조 · ★2) (2) ∫_0^1 2x dx 를 y=2x 아래 삼각형 넓이로 확인하는 대수↔기하 대응(★1 · 다음 단원 예고) (3) 피적분함수를 |2x−1| 로 바꾸면 구간 분할이 필요(★2)."
```

```yaml
- id: RPM-CALC1-0692
  page: 109
  vendor_label: "교과서 08-1 정적분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ∫_1^3 (2y−1)dy 의 값. 적분변수가 y.
  category: "부정적분 → 대입 → 6"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "다항함수의 정적분 기본 계산(적분변수 문자)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    [y²−y]_1^3 = 6−0 = 6. 적분변수 문자가 y 여도 계산은 같다는 표기 확인(Mₜ 1). 교과서 구역·통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "F(y)=y²−y → F(3)−F(1) → 6"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0692.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차식 계수·구간을 바꿀 수 있음. 제약: 문자를 t·u 로 바꿔도 되나 답이 문자와 무관함을 유지."
    creative: "(1) 같은 식을 x 와 y 로 두 번 써서 값이 같음을 확인(0704 골조 · ★1) (2) 위끝 a 를 미지수로 두고 값 6 이 되는 a 를 묻기(★2) (3) 구간을 [1, a] 로 두고 값이 a 의 이차식임을 보이는 매개변수화(★2)."
```

```yaml
- id: RPM-CALC1-0693
  page: 109
  vendor_label: "교과서 08-1 정적분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ∫_1^2 (x²−2x+6)dx 의 값.
  category: "부정적분 → 대입 → 분수 정리"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "다항함수의 정적분 기본 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    [x³/3−x²+6x]_1^2 = (8/3+8)−(1/3+5) = 16/3. 분수 산술만 있는 한 줄 계산. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "F(x)=x³/3−x²+6x → F(2)−F(1) → 16/3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{16}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0693.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차식 계수·구간 변경 가능. 제약: 분모 3 이 남는 것이 자연스러우니 답이 기약분수로 정리되는지 확인."
    creative: "(1) x²−2x+6 = (x−1)²+5 로 보고 (x−1) 거듭제곱으로 적분(★1) (2) ∫_1^2 f = 16/3 인 이차함수의 미정계수 역산(0719 골조 · ★2) (3) 두 구간 [1, 2]·[2, 3] 의 값 비교(★1)."
```

```yaml
- id: RPM-CALC1-0694
  page: 109
  vendor_label: "교과서 08-1 정적분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ∫_3^1 (3x²−x+1)dx 의 값. 위끝이 아래끝보다 작다.
  category: "부정적분 → F(1)−F(3) 부호 유지"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "위끝<아래끝인 정적분(부호 유지)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    [x³−x²/2+x]_3^1 = 3/2 − 51/2 = −24. 위끝<아래끝이면 값이 음수가 되는 것을 그대로 계산하거나 −∫_1^3 으로 뒤집음. 부호 함정 1개(Mₜ 1). 교과서 구역 → ★1.
  tier: star_1
  mechanism_primary: "F(x)=x³−x²/2+x → F(1)−F(3) → −24"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-24$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0694.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수·구간 변경 가능. 제약: 위끝<아래끝 유지, 답이 정수가 되게 x 항 계수는 짝수로 조정."
    creative: "(1) ∫_1^3 의 값을 먼저 주고 ∫_3^1 을 묻는 성질 확인(★1) (2) 0705 처럼 −∫_2^1 을 +∫_1^2 로 뒤집어 이어 붙이는 골조와 결합(★1~2) (3) 위끝 a 를 미지수로 두고 값이 음수가 되는 a 의 범위(★2 · T-부호)."
```

```yaml
- id: RPM-CALC1-0695
  page: 109
  vendor_label: "교과서 08-1 정적분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ∫_1^{−2} (x³+3x²)dx 의 값. 위끝이 음수이고 아래끝보다 작다.
  category: "부정적분 → F(−2)−F(1) → 음수·분수 정리"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "위끝<아래끝인 정적분(부호 유지)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    [x⁴/4+x³]_1^{−2} = (4−8)−(1/4+1) = −21/4. 음수 끝값 대입과 구간 방향의 부호 처리가 겹치지만 같은 카테고리(T-부호 · Mₜ 1). 교과서 구역·통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "F(x)=x⁴/4+x³ → F(−2)−F(1) → −21/4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-\dfrac{21}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0695.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼차식 계수·구간(음수 끝값) 변경 가능. 제약: x⁴/4 때문에 분모 4 가 남으므로 답의 분수 형태를 확인하고, 홀수 거듭제곱에 음수를 대입하는 부호를 채점 포인트로 유지."
    creative: "(1) 뒤집어서 −∫_{−2}^1 로 계산하게 유도한 뒤 값 비교(★1) (2) x³+3x² = x²(x+3) 의 부호 변화를 넓이 해석과 연결(★2 · 다음 단원) (3) ∫_1^a = −21/4 인 a 를 묻는 역산(사차 방정식 → ★3)."
```

```yaml
- id: RPM-CALC1-0696
  page: 109
  vendor_label: "교과서 08-1 정적분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ∫_{−2}^0 x(x+4)dx 의 값.
  category: "곱 전개 → 부정적분 → 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곱 전개 후 정적분"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x²+4x 로 전개한 뒤 [x³/3+2x²]_{−2}^0 = 0−(−8/3+8) = −16/3. 전개 한 번과 음수 끝값 대입. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "x(x+4) = x²+4x → F(x)=x³/3+2x² → F(0)−F(−2) → −16/3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-\dfrac{16}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0696.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "인수 (x+4) 의 상수·구간 변경 가능. 제약: 구간 끝을 근(0, −4)으로 두면 넓이 해석과 이어지므로 근 사이 구간을 쓸지 의도적으로 결정."
    creative: "(1) 구간을 [−4, 0] 으로 두면 −(4)³/6 공식(0697 골조)과 대조(★1~2) (2) x(x+k) 로 매개변수화해 값이 0 이 되는 k(★2) (3) 0713 처럼 x²f(x) 로 차수를 올리기(★1)."
```

```yaml
- id: RPM-CALC1-0697
  page: 109
  vendor_label: "교과서 08-1 정적분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ∫_1^2 (x−1)(x−2)dx 의 값.
  category: "곱 전개 → 부정적분 → 대입 → 음수 분수"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곱 전개 후 정적분(두 근 사이 구간)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x²−3x+2 로 전개한 뒤 [x³/3−3x²/2+2x]_1^2 = 2/3−5/6 = −1/6. 두 근 사이 구간이라 값이 음수. 공식 ∫_α^β (x−α)(x−β)dx = −(β−α)³/6 으로도 즉시 −1/6. 교과서 구역 → ★1.
  tier: star_1
  mechanism_primary: "(x−1)(x−2) = x²−3x+2 → F(2)−F(1) → −1/6"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-\dfrac{1}{6}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0697.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 근 α<β 와 구간을 바꿀 수 있음. 제약: 구간을 [α, β] 로 두면 답은 항상 −(β−α)³/6 이므로 근 차이가 정수면 답은 유리수."
    creative: "(1) 근 차이를 3 으로 두고 −27/6 = −9/2 공식 확인(★1) (2) 구간을 근 밖 [2, 3] 으로 옮겨 부호가 바뀌는 이유 묻기(★2 · 넓이 예고) (3) (x−1)(x−2)(x−3) 삼차로 올려 대칭 중심 2 에서 ∫_1^3 = 0 이 됨을 발견(★3 · I-SYM d2)."
```

```yaml
- id: RPM-CALC1-0698
  page: 109
  vendor_label: "교과서 08-1 정적분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ∫_0^1 (x+3)(x²−3x+9)dx 의 값.
  category: "세제곱 합 공식 → x³+27 → 정적분"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곱 전개 후 정적분(곱셈 공식)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (x+3)(x²−3x+9) = x³+27 을 알아보면 [x⁴/4+27x]_0^1 = 109/4 한 줄. 직접 전개해도 세 줄. 곱셈 공식 기억이 계산량을 줄일 뿐 골조는 같음. 교과서 구역·통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "(x+3)(x²−3x+9) = x³+27 → F(x)=x⁴/4+27x → F(1)−F(0) → 109/4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{109}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0698.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세제곱 합·차 공식의 a(2, 3, 4)와 구간 변경 가능. 제약: 공식이 성립하는 (x±a)(x²∓ax+a²) 짝을 유지하고 답은 사차항 + a³·구간길이."
    creative: "(1) (x−1)(x²+x+1) 차 공식으로 바꾸기(★1) (2) 인수 짝을 살짝 어긋나게 (x+3)(x²−3x+8) 로 두면 공식이 안 통해 전개 필수 → 함정형(★2 · T-표기) (3) 구간을 [−a, a] 로 대칭화해 08-3 골조와 결합(★1~2)."
```

### 교과서 08-2 정적분의 성질

```yaml
- id: RPM-CALC1-0699
  page: 109
  vendor_label: "교과서 08-2 정적분의 성질"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ∫_0^2 (x²−1)dx + ∫_0^2 (x²+1)dx 의 값. 적분 구간이 같은 두 정적분의 합.
  category: "같은 구간 → 피적분함수 합치기 → 2x²"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "적분 구간이 같은 정적분의 합·차"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    같은 구간이므로 (x²−1)+(x²+1) = 2x² 로 합쳐 [2x³/3]_0^2 = 16/3. 따로 계산해도 같은 값이지만 성질을 쓰는 것이 구역의 목적. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "같은 구간 → ∫(f+g) = ∫_0^2 2x² dx → 16/3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{16}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0699.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 피적분함수의 상수항(±1)이 상쇄되도록 짝을 맞춰 구간·계수 변경 가능. 제약: 합친 뒤 식이 단순해져야 성질을 쓸 동기가 유지됨."
    creative: "(1) 상수배를 섞어 0721 골조로(★1~2) (2) 0720 처럼 합쳐야만 다항식이 되는 분수식으로 바꾸면 I-EQV d1 → ★2 (3) 구간이 다르면 합칠 수 없음을 확인하는 ㄱㄴㄷ 보기(★2)."
```

```yaml
- id: RPM-CALC1-0700
  page: 109
  vendor_label: "교과서 08-2 정적분의 성질"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ∫_{−1}^3 (3x²+x−2)dx − ∫_{−1}^3 (x+3)dx 의 값. 적분 구간이 같은 두 정적분의 차.
  category: "같은 구간 → 피적분함수 빼기 → 3x²−5"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "적분 구간이 같은 정적분의 합·차"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (3x²+x−2)−(x+3) = 3x²−5 로 합쳐 [x³−5x]_{−1}^3 = 12−4 = 8. 뺄 때 괄호 부호가 유일한 함정. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "같은 구간 → ∫(f−g) = ∫_{−1}^3 (3x²−5)dx → 8"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0700.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x 항이 상쇄되는 짝을 유지하며 계수·구간 변경 가능. 제약: 답이 정수가 되도록 상수항·구간 조정."
    creative: "(1) 두 식을 f, g 로 이름 붙이고 ∫f = A, ∫g = B 만 주는 추상형(0723 골조 · ★2) (2) 빼기 순서를 바꿔 부호 함정(★1) (3) 세 정적분의 합차로 늘리기(★1)."
```

```yaml
- id: RPM-CALC1-0701
  page: 109
  vendor_label: "교과서 08-2 정적분의 성질"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ∫_{−2}^1 (x+1)³dx − ∫_{−2}^1 (x−1)³dx 의 값.
  category: "같은 구간 → 세제곱 차 전개 → 6x²+2 → 정적분"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "적분 구간이 같은 정적분의 합·차"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    합쳐서 (x+1)³−(x−1)³ = 6x²+2 로 정리하면 [2x³+2x]_{−2}^1 = 4−(−20) = 24. 따로 전개하면 사차식 둘을 대입해야 하므로 성질을 써야 계산이 준다. 계산 부담 중간(Mₖ 2)이나 통찰은 없음. 교과서 구역 → ★1.
  tier: star_1
  mechanism_primary: "같은 구간 → (x+1)³−(x−1)³ = 6x²+2 → F(x)=2x³+2x → F(1)−F(−2) → 24"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$24$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0701.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "(x±a)³ 의 a 와 구간 변경 가능. 제약: 차는 6ax²+2a³ 으로 항상 짝수 차수만 남으므로 구간을 대칭으로 두면 08-3 골조와 겹침."
    creative: "(1) 구간을 [−1, 1] 로 두어 짝함수 2배 계산과 결합(★1~2) (2) (x+1)⁴−(x−1)⁴ 로 차수 올리기(★2 · Mₖ 3) (3) 각각 (x+1)³ 의 부정적분 (x+1)⁴/4 를 바로 쓰는 갈래와 비교하는 I-SC 논의 소재(★2)."
```

```yaml
- id: RPM-CALC1-0702
  page: 109
  vendor_label: "교과서 08-2 정적분의 성질"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ∫_{−1}^0 (x²+1)dx + ∫_0^2 (x²+1)dx 의 값. 같은 함수의 이어진 구간.
  category: "같은 함수·이어진 구간 → ∫_{−1}^2 로 통합"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "적분 구간 이어 붙이기 ∫_a^b + ∫_b^c = ∫_a^c"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ∫_a^b + ∫_b^c = ∫_a^c 로 [x³/3+x]_{−1}^2 = (8/3+2)−(−1/3−1) = 6. 구간 이어 붙이기 한 단계. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "∫_{−1}^0 + ∫_0^2 = ∫_{−1}^2 (x²+1)dx → 6"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0702.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "함수와 분할점 변경 가능. 제약: 분할점이 두 구간의 공통 끝이어야 하며 답이 정수가 되도록 함수를 고름."
    creative: "(1) 둘째 항 구간을 뒤집어 0705 골조(★1) (2) 세 구간 이상으로 쪼개고 하나는 방향 반대(★1~2) (3) 구간별로 다른 식(x≤0 이면 x², x>0 이면 x)을 주어 반대로 「쪼개야만」 계산되는 구간 분할 정적분(★2)."
```

```yaml
- id: RPM-CALC1-0703
  page: 109
  vendor_label: "교과서 08-2 정적분의 성질"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ∫_{−1}^0 (2x²−x+1)dx + ∫_0^{−1} (2x²−x+1)dx 의 값. 구간 방향이 반대인 두 정적분의 합.
  category: "∫_a^b + ∫_b^a = 0"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∫_a^b + ∫_b^a = 0 (구간 방향 뒤집기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    둘째 항이 첫째 항의 방향을 뒤집은 것이므로 합은 0. 부정적분을 구하지 않고 성질만으로 끝남(부호 함정 Mₜ 1). 교과서 구역·통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "∫_b^a = −∫_a^b → 합 0 → 0"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0703.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "함수·구간 자유. 제약: 두 정적분의 끝값이 정확히 맞바뀌어야 함(계수를 살짝 다르게 하면 0 이 아니게 됨)."
    creative: "(1) 둘째 항 계수를 2배로 두어 −∫ 한 개가 남게 하기(★1) (2) ∫_a^b f = 3 을 주고 ∫_b^a f − ∫_a^b f 의 값(★1) (3) 세 항 순환 ∫_a^b + ∫_b^c + ∫_c^a = 0 발견(★2 · I-PD d1)."
```

```yaml
- id: RPM-CALC1-0704
  page: 109
  vendor_label: "교과서 08-2 정적분의 성질"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ∫_{−2}^{−1} (x²−4x+5)dx + ∫_{−1}^1 (y²−4y+5)dy 의 값. 적분변수가 다른 이어진 구간.
  category: "변수 문자 무관 → 구간 이어 붙이기 → ∫_{−2}^1"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "적분 구간 이어 붙이기(적분변수 문자)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    적분변수가 달라도 같은 함수이므로 ∫_{−2}^1 (x²−4x+5)dx = [x³/3−2x²+5x]_{−2}^1 = 10/3−(−62/3) = 24. 표기 함정 1개(Mₜ 1). 교과서 구역·통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "y 와 x 는 같은 함수 → ∫_{−2}^{−1} + ∫_{−1}^1 = ∫_{−2}^1 → 24"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$24$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0704.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "함수·분할점 변경 가능. 제약: 두 항의 함수가 문자만 다르고 같아야 하며, 이어 붙인 뒤 정수 답."
    creative: "(1) 둘째 항을 t 로 쓰고 −∫_1^{−2} 로 뒤집기까지 섞기(★1) (2) 둘째 항 함수를 미묘하게 다르게(y²−4y+6) 두어 「합칠 수 없음」 판단(★2 · T-표기) (3) 이어 붙인 ∫_{−2}^1 을 그래프 넓이 합으로 확인(★2 · 다음 단원)."
```

```yaml
- id: RPM-CALC1-0705
  page: 109
  vendor_label: "교과서 08-2 정적분의 성질"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ∫_0^1 (x³−3x²)dx − ∫_2^1 (x³−3x²)dx 의 값. 뒤집기와 이어 붙이기.
  category: "−∫_2^1 = ∫_1^2 → ∫_0^2 로 통합"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "적분 구간 뒤집기 + 이어 붙이기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    −∫_2^1 = +∫_1^2 로 뒤집으면 ∫_0^2 (x³−3x²)dx = [x⁴/4−x³]_0^2 = 4−8 = −4. 뒤집기와 이어 붙이기가 한 문항에 들어간 종합 확인(부호 함정 Mₜ 1). 교과서 구역 → ★1.
  tier: star_1
  mechanism_primary: "−∫_2^1 = ∫_1^2 → ∫_0^1 + ∫_1^2 = ∫_0^2 (x³−3x²)dx → −4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0705.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "함수·분할점 변경 가능. 제약: 부호와 방향을 맞바꿔야 이어지도록 둘째 항 구간을 역방향으로 유지."
    creative: "(1) 셋째 항 +∫_3^2 를 붙여 세 조각 통합(★1~2) (2) 값을 주고 위끝 a 를 묻기(★2) (3) 같은 골조를 추상 함수 f 로 두고 ∫_0^1 f, ∫_2^1 f 값만 주는 형태(0723 예고 · ★2)."
```

### 교과서 08-3 정적분 $\int_{-a}^{a}x^n\,dx$의 계산

```yaml
- id: RPM-CALC1-0706
  page: 109
  vendor_label: '교과서 08-3 정적분 $\int_{-a}^{a}x^n\,dx$의 계산'
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ∫_{−1}^1 (x⁵−x³+3x²+5x+1)dx 의 값. 대칭 구간.
  category: "홀수 차수 소거 → 2∫_0^1 (3x²+1) → 4"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∫_{-a}^{a} x^n dx: 홀수 차수 소거·짝수 차수 2배"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    대칭 구간에서 홀수 차수 항의 정적분은 0 이므로 2∫_0^1 (3x²+1)dx = 2·2 = 4. 구역 제목이 곧 방법이라 대칭성(I-SYM)으로 세지 않고 절차로 봄. 교과서 구역·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "대칭 구간 → 홀수 차수 항 소거 → 2∫_0^1 (3x²+1)dx → 4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0706.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "홀수 차수 항의 계수는 무엇이든 답에 영향 없음(함정용). 짝수 차수 계수 c₂·c₀ 와 a 를 바꾸면 답 = 2(c₂a³/3 + c₀a). 제약: 답이 정수가 되도록 c₂ 를 3 의 배수 등으로 조정."
    creative: "(1) 홀수 항을 (x+1)³ 처럼 전개 전 형태로 숨겨 전개 후 소거를 요구(★2) (2) f(x)=x⁵−x³+… 라 두고 ∫_{−1}^1 f(x)dx 와 ∫_{−1}^1 f(−x)dx 비교(★2 · I-SYM d1) (3) ∫_{−a}^{a} = 4 인 a 를 묻는 역산(삼차 방정식 → ★2)."
```

```yaml
- id: RPM-CALC1-0707
  page: 109
  vendor_label: '교과서 08-3 정적분 $\int_{-a}^{a}x^n\,dx$의 계산'
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ∫_{−2}^2 (x⁷−5x⁴+3x²−1)dx 의 값. 대칭 구간.
  category: "홀수 차수 소거 → 2∫_0^2 (−5x⁴+3x²−1) → −52"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∫_{-a}^{a} x^n dx: 홀수 차수 소거·짝수 차수 2배"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x⁷ 항 소거 후 2[−x⁵+x³−x]_0^2 = 2(−32+8−2) = −52. 짝수 항이 셋이라 산술은 조금 늘지만 한 줄. 교과서 구역·통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "x⁷ 항 소거 → 2∫_0^2 (−5x⁴+3x²−1)dx → −52"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-52$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0707.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a(1, 2, 3)·짝수 차수 계수 변경 가능. 제약: a=2 에서 x⁴ 항의 적분이 32 배로 커지므로 계수를 작게 두어 답 크기 관리."
    creative: "(1) 구간을 [−2, 3] 으로 비대칭화해 [−2, 2] + [2, 3] 분할이 유리한 갈래를 고르게(★2 · I-SC d1) (2) 답 −52 를 주고 x⁴ 계수 k 역산(★2) (3) 홀수 차수 항만 있는 식으로 만들어 답 0 을 즉답(★1)."
```

### 교과서 08-4 정적분으로 정의된 함수

```yaml
- id: RPM-CALC1-0708
  page: 109
  vendor_label: "교과서 08-4 정적분으로 정의된 함수"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    모든 실수 x 에 대하여 ∫_2^x f(t)dt = x²−2x 가 성립할 때 f(x).
  category: "양변 x 로 미분 → f(x)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정적분으로 정의된 함수의 미분 d/dx ∫_a^x f(t)dt = f(x)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    d/dx ∫_a^x f(t)dt = f(x) 이므로 우변을 미분해 f(x) = 2x−2. x=2 에서 좌변 0 = 4−4 로 일관성만 확인. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "양변 미분 → f(x) = (x²−2x)' → 2x−2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$f(x)=2x-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0708.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 다항식과 아래끝 a 변경 가능. 제약: 우변에 x=a 를 대입하면 0 이 되도록 맞춰야 등식이 모순 없음."
    creative: "(1) 우변에 상수 k 를 넣어 x=a 대입으로 k 를 먼저 결정(★2 · I-CON d1) (2) 아래끝을 미지수 a 로 두고 우변의 x=a 대입 = 0 조건으로 a 구하기(★2) (3) ∫_a^x (x−t)f(t)dt 꼴로 x 를 적분 밖으로 꺼내야 하는 형태(★3 · I-EQV d2)."
```

```yaml
- id: RPM-CALC1-0709
  page: 109
  vendor_label: "교과서 08-4 정적분으로 정의된 함수"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    모든 실수 x 에 대하여 ∫_1^x f(t)dt = x³+x²−x−1 이 성립할 때 f(x).
  category: "양변 x 로 미분 → f(x)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정적분으로 정의된 함수의 미분 d/dx ∫_a^x f(t)dt = f(x)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    우변 미분으로 f(x) = 3x²+2x−1. x=1 에서 우변 0 인지 확인하면 등식 일관. 0708 과 같은 골조. 교과서 구역 → ★1.
  tier: star_1
  mechanism_primary: "양변 미분 → f(x) = (x³+x²−x−1)' → 3x²+2x−1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$f(x)=3x^2+2x-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0709.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼차식 계수와 아래끝 변경 가능. 제약: 우변에 아래끝을 대입하면 0 이 되어야 함(x³+x²−x−1 은 x=1 에서 0)."
    creative: "(1) 우변을 (x−1)(x+1)² 처럼 인수 형태로 주어 전개 후 미분(★1) (2) f(x) 대신 f(1)·f'(1) 을 묻기(★1~2) (3) 우변에 미정계수를 두고 x=1 대입 0 조건과 f(0) 값으로 결정(★2 · I-CON d1)."
```

```yaml
- id: RPM-CALC1-0710
  page: 109
  vendor_label: "교과서 08-4 정적분으로 정의된 함수"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    lim_{x→1} 1/(x−1) ∫_1^x (2t²+3)dt 의 극한값.
  category: "F(x)=∫_1^x → (F(x)−F(1))/(x−1) → F'(1)=f(1)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정적분으로 정의된 함수의 극한 lim 1/(x−a) ∫_a^x f(t)dt = f(a)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    F(x)=∫_1^x (2t²+3)dt 로 두면 F(1)=0 이므로 극한은 F'(1) = f(1) = 2+3 = 5. 미분계수 정의로 옮기는 것이 구역의 표준 절차라 통찰로 세지 않음. 직접 적분해 (2/3)(x³−1)+3(x−1) 을 x−1 로 나눠도 5. 교과서 구역 → ★1.
  tier: star_1
  mechanism_primary: "F(x)=∫_1^x (2t²+3)dt, F(1)=0 → lim (F(x)−F(1))/(x−1) = F'(1) → f(1) = 5"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0710.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "피적분함수와 a 변경 가능. 제약: 아래끝과 극한점이 같아야 F(a)=0 이 되어 미분계수 꼴이 성립. 답은 f(a)."
    creative: "(1) 아래끝과 극한점을 다르게(∫_2^x, x→1) 두면 미분계수 꼴이 아니라 극한이 발산하거나 직접 적분이 필요(★2 · T-표기 함정) (2) 분모를 x²−1 로 바꿔 (x−1)(x+1) 인수 처리 추가(★2) (3) 피적분함수를 미지 다항함수 f 로 두고 극한값 조건으로 미정계수 결정(★2)."
```

```yaml
- id: RPM-CALC1-0711
  page: 109
  vendor_label: "교과서 08-4 정적분으로 정의된 함수"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    lim_{h→0} 1/h ∫_0^h (x²−2x−1)dx 의 극한값.
  category: "F(h)=∫_0^h → (F(h)−F(0))/h → F'(0)=f(0)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정적분으로 정의된 함수의 극한 lim 1/(x−a) ∫_a^x f(t)dt = f(a)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    F(h)=∫_0^h (x²−2x−1)dx 는 F(0)=0 이므로 극한은 F'(0) = f(0) = −1. h→0 형태의 미분계수 정의. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "F(h)=∫_0^h f, F(0)=0 → lim (F(h)−F(0))/h = f(0) → −1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0711.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "피적분함수의 상수항이 곧 답이므로 상수항만 바꿔도 됨. 제약: 아래끝 0 과 h→0 을 맞춰 유지."
    creative: "(1) ∫_a^{a+h} 로 아래끝을 옮겨 f(a) 가 답이 되는 일반형(★1~2) (2) ∫_{a−h}^{a+h} 로 양쪽 확장하면 2f(a)(★2 · I-EQV d1) (3) 분모를 h² 으로 올려 극한이 존재할 조건(f(0)=0)을 묻기(★3 · I-BW d1)."
```

### 유형 01 미적분의 기본정리

```yaml
- id: RPM-CALC1-0712
  page: 110
  vendor_label: "유형 01 미적분의 기본정리"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    ∫_{−1}^2 (6t+5)(1−2t)dt + ∫_3^3 (6t−5)(1+2t)dt 의 값. 5지선다.
  category: "둘째 항 위끝=아래끝 → 0 · 첫째 항 전개 → 정적분"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곱 전개 후 정적분(위끝=아래끝 항 포함)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ∫_3^3 은 0 이라 둘째 항은 함정. 첫째 항은 −12t²−4t+5 로 전개해 [−4t³−2t²+5t]_{−1}^2 = −30−(−3) = −27 → ①. 골조가 교과서 0690(위끝=아래끝)과 0696(곱 전개)의 결합이고 통찰 없음·M_total 5·Mₛ 1 → 유형 대표 출발점 ★2 에서 −1 해 ★1.
    [분류 이슈] 유형 01 대표문제인데 교과서 골조 그대로라 ★1 로 둠 — 카탈로그에서 유형 01 의 base ★ 를 정할 때 대표문제와 유형 안 문항(0714·0715)의 골조가 다름을 참고.
  tier: star_1
  mechanism_primary: "∫_3^3 = 0 → (6t+5)(1−2t) = −12t²−4t+5 → F(2)−F(−1) → −27"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0712.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 일차식의 계수·구간 변경 가능. 제약: 답이 선택지에서 ± 로 짝을 이루게(−27/27) 부호 함정을 유지하고, 둘째 항의 두 끝값은 같게."
    creative: "(1) 둘째 항 구간을 ∫_3^4 로 바꿔 실제 계산 필요(★1~2) (2) 첫째 항을 ∫_{−1}^2 과 ∫_2^{−1} 두 조각으로 나눠 0 이 되는 조합 찾기(★2) (3) (6t+5)(1−2t) 를 f(t) 로 놓고 ∫_{−1}^2 f = −27 을 준 뒤 ∫_{−1}^2 {f(t)+kt}dt 를 묻는 선형결합(★2)."
```

```yaml
- id: RPM-CALC1-0713
  page: 110
  vendor_label: "유형 01 미적분의 기본정리"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=5x²−8x+3 일 때 ∫_0^2 x²f(x)dx 의 값.
  category: "x²f(x) 전개 → 사차식 정적분"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곱 전개 후 정적분"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x²f(x) = 5x⁴−8x³+3x² 을 적분해 [x⁵−2x⁴+x³]_0^2 = 32−32+8 = 8. 곱 전개 후 대입뿐이며 교과서 0696 골조와 같음. 벤더 중하(★1~2)·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "x²f(x) = 5x⁴−8x³+3x² → F(x)=x⁵−2x⁴+x³ → F(2)−F(0) → 8"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0713.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f 의 계수·곱하는 x 의 차수·구간 변경 가능. 제약: 사차 이상 적분 결과가 정수가 되도록 계수를 (차수+1) 의 배수로 조정(5x⁴→x⁵, 8x³→2x⁴, 3x²→x³)."
    creative: "(1) f 를 주지 않고 ∫_0^2 x²f(x)dx = 8 과 f 가 이차라는 조건으로 미정계수(★2~3 · I-BW d1) (2) x²f(x) 대신 f(x)f'(x) 를 곱해 {f²}' 로 보는 갈래(★2 · I-SC d1) (3) 구간을 [−2, 2] 로 두어 홀수 차수 소거 결합(★1~2)."
```

```yaml
- id: RPM-CALC1-0714
  page: 110
  vendor_label: "유형 01 미적분의 기본정리"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    다항함수 f 에 대하여 ∫_{−2}^1 {f'(x)+3x²}dx = 2, f(−2)=5 일 때 f(1) 의 값.
  category: "∫f' = f(1)−f(−2) → ∫3x² = 9 → f(1)"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "∫_{−2}^1 f'(x)dx 를 f(1)−f(−2) 로 읽어 미지 함수 f 를 구하지 않고 값의 차만 사용"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "미적분의 기본정리 ∫_a^b f'(x)dx = f(b)−f(a)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    적분을 둘로 나누면 ∫f' = f(1)−f(−2) = f(1)−5, ∫_{−2}^1 3x²dx = 9. 그래서 f(1)−5+9 = 2 → f(1) = −2. f 자체는 구할 수 없고 구할 필요도 없다는 점이 핵심(EQV d1). 벤더 중 → ★2 유지.
  tier: star_2
  mechanism_primary: "∫{f'+3x²} = [f(1)−f(−2)] + 9 = 2 → f(1) = 2−9+5 → −2"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0714.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간·주어진 f 값·더해진 다항식(3x²)을 바꿀 수 있음. 제약: 더해진 항의 정적분이 정수가 되게 하고, 답의 부호(음수·양수)를 의도적으로 정해 부호 함정을 둠."
    creative: "(1) f'(x) 대신 {xf(x)}' 같은 곱의 미분 표기로 바꾸기(★2 · I-EQV d1) (2) f(−2)=5 대신 x=−2 에서의 접선 방정식을 주어 04 단원과 결합(★3 · I-XU d1) (3) ∫_{−2}^1 f'(x)dx 와 ∫_1^{−2} f'(x)dx 를 섞어 부호 함정 추가(★2)."
```

```yaml
- id: RPM-CALC1-0715
  page: 110
  vendor_label: "유형 01 미적분의 기본정리"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    다항함수 f 의 두 부정적분 F, G 가 F(0)=G(0)+1, F(1)=2, G(4)=7 을 만족할 때 ∫_1^4 f(x)dx 의 값.
  category: "F−G=상수 → C=1 → G(1)=1 → G(4)−G(1)"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "한 점 x=0 에서의 차 F(0)−G(0)=1 을 「같은 함수의 부정적분끼리는 상수 차」 로 읽어 모든 x 에서 F(x)=G(x)+1 임을 끌어냄 — 이것이 없으면 F(1) 과 G(4) 를 같은 함수의 값으로 묶지 못함"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "부정적분의 상수 차와 정적분 ∫_a^b f = F(b)−F(a)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    같은 f 의 부정적분이므로 F(x)=G(x)+C 이고 F(0)=G(0)+1 에서 C=1. F(1)=2 → G(1)=1. 따라서 ∫_1^4 f = G(4)−G(1) = 7−1 = 6 (F 로 통일하면 F(4)=8, F(4)−F(1)=6 으로 같음). 한 점의 차를 전역 상수 차로 읽는 EQV d2 한 개·Mₐ 3(부정적분 사이의 관계식). 벤더 상중 → ★3 유지.
  tier: star_3
  mechanism_primary: "F=G+C, F(0)=G(0)+1 → C=1 → G(1)=F(1)−1=1 → ∫_1^4 f = G(4)−G(1) → 6"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0715.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수 차(1)·F(1)·G(4)·구간을 바꿀 수 있음. 제약: 세 값이 서로 모순되지 않게(C 를 정한 뒤 나머지 두 값은 자유) 하고, 답 = G(4) − (F(1) − C)."
    creative: "(1) F(0)=G(0)+1 대신 F(2)−G(2)=−3 처럼 다른 점·음수 차로(★3 유지) (2) 조건 셋 중 하나를 F'(1) 값으로 바꿔 「쓸모없는 조건」 판별을 추가(★3~4 · I-VF d1) (3) 세 부정적분 F, G, H 의 순환 차 F−G, G−H 로 확장(★4 · I-CON d2)."
```

### 유형 02 미적분의 기본정리의 활용

```yaml
- id: RPM-CALC1-0716
  page: 110
  vendor_label: "유형 02 미적분의 기본정리의 활용"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    ∫_0^2 (−6x²+6kx−5)dx 의 값이 10 보다 작도록 하는 정수 k 의 최댓값.
  category: "k 포함 정적분 → 12k−26 → 부등식 → 정수 최댓값"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "매개변수 포함 정적분 → 부등식·정수 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    [−2x³+3kx²−5x]_0^2 = 12k−26 < 10 → k < 3 → 최댓값 2. 정적분이 k 의 일차식이 되는 것을 계산으로 확인한 뒤 경계(등호 없음 · T-경계) 처리. 통찰 없음·M_total 5 지만 매개변수 골조가 교과서 범위에 없어 대표문제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "∫_0^2 (−6x²+6kx−5)dx = 12k−26 → 12k−26 < 10 → k < 3 → 최댓값 2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0716.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수·구간·부등식 우변 변경 가능. 제약: 12k−26 < 10 처럼 경계가 정수(k<3)에 걸리게 두면 등호 포함 여부가 답을 바꾸므로 「보다 작다/이하」 를 명시."
    creative: "(1) 부등식 대신 「값이 k 에 관계없이 일정」 조건으로 계수 결정(★2) (2) k² 항이 남게 (kx−1)² 을 적분해 k 의 이차부등식(★2~3 · 0718 골조) (3) 정적분 값이 최소가 되는 정수 k 로 바꾸기(★2)."
```

```yaml
- id: RPM-CALC1-0717
  page: 110
  vendor_label: "유형 02 미적분의 기본정리의 활용"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    ∫_0^a (3x²+2x−2)dx = 0 일 때 양수 a 의 값.
  category: "위끝 a 정적분 → a³+a²−2a=0 → 인수분해 → 양수 근"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "위끝이 미지수인 정적분 = 값 → 방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    [x³+x²−2x]_0^a = a³+a²−2a = a(a+2)(a−1) = 0 에서 양수 근 a=1. 0·−2 를 조건으로 버리는 것은 단순 범위 필터(T-범위)라 I-VF 로 세지 않음. 벤더 중하(★1~2)·M_total 5 이나 위끝 매개변수·삼차 인수분해 골조가 교과서 범위에 없어 ★2.
  tier: star_2
  mechanism_primary: "F(a)−F(0) = a³+a²−2a = 0 → a(a+2)(a−1) = 0 → a>0 → 1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0717.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "피적분함수 계수를 바꿔 a³+pa²+qa 가 유리수 근을 갖게. 제약: a=0 이 항상 근이므로 「양수」 조건 유지, 나머지 이차식이 인수분해되게(판별식이 완전제곱)."
    creative: "(1) 우변을 0 이 아닌 값(예: 4)으로 두어 삼차 방정식에 인수정리 필요(★2~3) (2) 아래끝도 −a 로 두어 대칭 구간 소거와 결합(★2 · 08-3 골조) (3) 「양수 a 가 2개 존재하도록」 상수항 조건 → 판별식·근의 부호(★3 · I-BW d1)."
```

```yaml
- id: RPM-CALC1-0718
  page: 110
  vendor_label: "유형 02 미적분의 기본정리의 활용"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    ∫_0^1 (6a²x²−8ax−3)dx 가 최소가 되는 상수 a 를 m, 그때의 정적분 값을 n 이라 할 때 m+n 의 값. 서술형.
  category: "a 포함 정적분 → 2a²−4a−3 → 완전제곱 → 최소 → m+n"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x 로 적분한 결과 2a²−4a−3 을 a 의 이차함수로 보고 최솟값 문제로 옮김 — 정적분이 x 가 아니라 a 의 함수라는 시선 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "매개변수 포함 정적분 값의 최대·최소(이차함수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    [2a²x³−4ax²−3x]_0^1 = 2a²−4a−3 = 2(a−1)²−5 이므로 a=1 에서 최소 −5. m=1, n=−5 → m+n = −4. 적분 결과를 a 의 이차함수로 다시 보는 RT d1 한 개·서술형 태그(+0). 벤더 중 → ★2 유지.
  tier: star_2
  mechanism_primary: "∫_0^1 (6a²x²−8ax−3)dx = 2a²−4a−3 → 2(a−1)²−5 → m=1, n=−5 → −4"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$-4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0718.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a² 항·a 항 계수와 상수항 변경 가능. 제약: 결과 이차식 pa²+qa+r 에서 꼭짓점 a = −q/(2p) 가 정수(또는 간단한 유리수)이고 p>0 이어야 최솟값이 존재."
    creative: "(1) p<0 으로 두어 최댓값을 묻기(★2) (2) 구간을 [0, a] 로 두어 a 의 삼차식 극값 → 04 단원 결합(★3 · I-XU d1) (3) 최솟값이 0 이 되도록 상수항을 결정(★2 · I-BW d1)."
```

```yaml
- id: RPM-CALC1-0719
  page: 110
  vendor_label: "유형 02 미적분의 기본정리의 활용"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    이차함수 f(x)=ax²+bx+c 의 그래프가 두 점 (−1, 1), (1, 1) 을 지나고 ∫_0^1 f(x)dx = −1 일 때 a 의 값. 5지선다.
  category: "두 점 조건 → b=0, a+c=1 → 정적분 조건 → a"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정적분 조건으로 이차함수 미정계수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f(−1)=f(1)=1 을 빼면 b=0, 더하면 a+c=1. ∫_0^1 f = a/3+c = −1 에 c=1−a 를 넣어 −2a/3 = −2 → a=3 → ④. 두 점이 y축 대칭이라 b=0 을 바로 볼 수도 있지만 연립으로도 한 줄이라 통찰로 세지 않음. 벤더 중 → ★2.
  tier: star_2
  mechanism_primary: "f(−1)=f(1)=1 → b=0, a+c=1 → ∫_0^1 f = a/3+c = −1 → a=3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0719.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 점의 좌표·정적분 값·구간 변경 가능. 제약: 조건 3개로 (a, b, c) 가 유일하게 결정되고 a 가 선택지의 정수가 되게 정적분 값을 역산해 둠."
    creative: "(1) 두 점을 비대칭 (−1, 1), (2, 4) 로 바꾸면 3원 연립(★2 · Mₖ 2) (2) 정적분 구간을 [−1, 1] 로 두어 b 항이 자동 소거되는 대칭 구간 골조(★2 · I-SYM d1) (3) 「그래프가 x축과 만나지 않는」 조건 추가 → 판별식 결합(★3 · I-BW d1)."
```

### 유형 03 정적분의 계산: 적분 구간이 같은 경우

```yaml
- id: RPM-CALC1-0720
  page: 111
  vendor_label: "유형 03 정적분의 계산: 적분 구간이 같은 경우"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    ∫_0^1 1/(x+1) dx − ∫_1^0 y³/(y+1) dy 의 값. 분수식 피적분함수.
  category: "구간 뒤집기 → 같은 구간 합치기 → (x³+1)/(x+1) = x²−x+1 → 정적분"
  M: {s: 1, k: 1, a: 1, t: 2}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "분수식은 따로 적분할 수 없으므로 −∫_1^0 을 +∫_0^1 로 뒤집어 합친 뒤 (x³+1)/(x+1) 을 x²−x+1 로 약분 — 합쳐야만 다항식이 됨"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "적분 구간이 같은 정적분의 합·차(합쳐야 다항식이 되는 분수식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    1/(x+1) 은 미적분Ⅰ 범위에서 단독으로 적분할 수 없다. 둘째 항을 뒤집어 같은 구간으로 만들고 합치면 (x³+1)/(x+1) = x²−x+1. ∫_0^1 = 1/3−1/2+1 = 5/6. 「합쳐야 다항식」 이 유형의 골조(EQV d1)이고 구간 방향·변수 문자 함정 둘(Mₜ 2). 대표문제 → ★2 유지.
  tier: star_2
  mechanism_primary: "−∫_1^0 = ∫_0^1 → ∫_0^1 (1+x³)/(x+1) dx = ∫_0^1 (x²−x+1)dx → 5/6"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{5}{6}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0720.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모 (x+1) 과 분자 짝(1, x³)·구간 변경 가능. 제약: 합친 분자가 분모로 나누어떨어지게(x³+1 = (x+1)(x²−x+1) · x²−1 등) 유지하고 분모가 구간에서 0 이 되지 않게."
    creative: "(1) 분모를 x−2, 분자를 x² 과 4 로 두어 x²−4 약분(★2) (2) 셋째 항까지 늘려 두 번 합쳐야 하는 형태(★2~3) (3) 분수식 대신 |x| 같은 절댓값 짝으로 바꿔 합쳐서 소거(★2 · I-EQV d1)."
```

```yaml
- id: RPM-CALC1-0721
  page: 111
  vendor_label: "유형 03 정적분의 계산: 적분 구간이 같은 경우"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    ∫_{−1}^3 (2x²+x+1)dx + 2∫_{−1}^3 (−x²+1)dx 의 값.
  category: "상수배 포함 같은 구간 합치기 → x+3 → 정적분"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "적분 구간이 같은 정적분의 합·차(상수배)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    2∫(−x²+1) 을 안으로 넣어 (2x²+x+1)+(−2x²+2) = x+3. [x²/2+3x]_{−1}^3 = 27/2−(−5/2) = 16. 상수배 처리 외에는 교과서 0700 과 같은 골조·통찰 없음·M_total 4 → 중하 출발점에서 −1 해 ★1.
  tier: star_1
  mechanism_primary: "2∫(−x²+1) = ∫(−2x²+2) → ∫_{−1}^3 (x+3)dx → 16"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$16$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0721.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수배·계수·구간 변경 가능. 제약: 이차항이 상쇄되도록 상수배와 계수를 맞추고, 남은 일차식의 정적분이 정수."
    creative: "(1) 상수배를 −3 등 음수로 두어 부호 함정(★1) (2) 상쇄 후 상수만 남게 하여 답 = 상수 × 구간길이(★1) (3) 상수배 k 를 미지수로 두고 값이 16 이 되는 k 역산(★2)."
```

```yaml
- id: RPM-CALC1-0722
  page: 111
  vendor_label: "유형 03 정적분의 계산: 적분 구간이 같은 경우"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    ∫_0^2 (x+k)²dx + ∫_2^0 (x−k)²dx = 16 을 만족시키는 상수 k 의 값. 5지선다.
  category: "구간 뒤집기 → (x+k)²−(x−k)² = 4kx → 8k=16 → k"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "둘째 항을 뒤집어 같은 구간의 차로 만들면 (x+k)²−(x−k)² = 4kx 로 k² 항이 사라져 k 의 일차 방정식 — 따로 전개해도 풀리지만 합쳐야 한 줄"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "적분 구간이 같은 정적분의 합·차(매개변수 소거)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ∫_2^0 = −∫_0^2 이므로 ∫_0^2 {(x+k)²−(x−k)²}dx = ∫_0^2 4kx dx = 8k = 16 → k=2 → ④. 합쳐서 제곱 차 공식을 쓰면 k² 이 소거되는 것이 골조(EQV d1). 벤더 중 → ★2 유지.
  tier: star_2
  mechanism_primary: "∫_2^0 = −∫_0^2 → (x+k)²−(x−k)² = 4kx → ∫_0^2 4kx dx = 8k = 16 → 2"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0722.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 끝(2)·우변(16)·제곱 안의 ±k 변경 가능. 제약: 답 = 우변/(구간끝)² 이므로 k 가 선택지의 간단한 유리수가 되도록 우변을 정함."
    creative: "(1) (x+k)³−(x−k)³ 으로 차수를 올려 k 의 삼차 방정식(★2~3) (2) 두 항의 구간을 [0, 2]·[1, 3] 으로 다르게 두어 합칠 수 없음을 판단(★2 · T-표기) (3) k 대신 함수 g 로 일반화해 ∫(f+g)² − ∫(f−g)² = 4∫fg 발견(★3 · I-PD d1)."
```

```yaml
- id: RPM-CALC1-0723
  page: 111
  vendor_label: "유형 03 정적분의 계산: 적분 구간이 같은 경우"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    연속함수 f 가 ㈎ ∫_3^1 f(x)dx = −2, ㈏ ∫_1^3 {f(x)}²dx = 6 을 만족시킬 때 ∫_1^3 {f(x)−2}²dx 의 값.
  category: "전개 → ∫f² − 4∫f + ∫4 → 조건 대입(구간 뒤집기·상수 적분)"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "미지 함수 f 를 구하지 않고 목표식을 전개해 주어진 두 적분값의 선형결합 ∫f² − 4∫f + 4·(구간길이) 로 옮김 — 적분의 선형성을 추상 함수에 적용"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "추상 함수의 정적분 선형결합(주어진 적분값 조합)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    {f−2}² = f²−4f+4 로 전개하면 ∫_1^3 f² − 4∫_1^3 f + ∫_1^3 4 dx. ㈎ 를 뒤집어 ∫_1^3 f = 2, ㈏ 6, 상수항 4·(3−1) = 8 → 6−8+8 = 6. f 를 모르는 채 적분값만 조작하는 EQV d2 한 개와 뒤집기·상수 적분 함정 둘(Mₜ 2). 벤더 중 → ★2 유지.
    [분류 이슈] d2 통찰형·M_total 7 이라 ★3 후보이나 유형 03 의 표준 골조라 ★2 로 둠 — 카탈로그에서 「추상 함수 적분값 조합」 을 별도 유형으로 세우면 base ★3 검토.
  tier: star_2
  mechanism_primary: "{f−2}² = f²−4f+4 → ∫f² − 4∫f + 4·2 → 6 − 4·2 + 8 → 6"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0723.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "㈎ 의 값·방향, ㈏ 의 값, 빼는 상수(2)·구간 변경 가능. 제약: 답 = ㈏ − 2c·∫f + c²·구간길이 ≥ 0 이어야 하고, 실제 존재하는 f 가 있으려면 (∫f)² ≤ 구간길이 × ∫f² (코시-슈바르츠)를 만족하는 값으로 둠."
    creative: "(1) 조건을 ∫(f+1)² 와 ∫f 로 주고 ∫f² 을 역산(★2~3 · I-BW d1) (2) 세 조건 ∫f, ∫f², ∫f³ 으로 ∫(f−1)³ 확장(★3) (3) ∫(f−c)² 이 최소가 되는 c 를 묻기 → 0718 골조 결합(★3 · I-RT d1)."
```

## 표본 판정 요약 (34문)

- ★ 분포: ★1 25 · ★2 8 · ★3 1 · ★4 0 · ★5 0
- 통찰형 2(0715 · 0723 · 모두 EQV d2) · d1 통찰 라벨만 있는 절차형 4(0714 · 0718 · 0720 · 0722) · 순수 절차형 28 · premium 0
- 벤더 출발점 조정: −1 적용 3(0712 · 0713 · 0721 — 교과서 골조 그대로) · +1 적용 0 · 「전사 답 확인 필요」 0
- type_hint 상위: 「적분 구간이 같은 정적분의 합·차」 계열 6(0699 · 0700 · 0701 · 0720 · 0721 · 0722) · 「곱 전개 후 정적분」 계열 5(0696 · 0697 · 0698 · 0712 · 0713) · 「적분 구간 이어 붙이기·뒤집기」 계열 4(0702 · 0703 · 0704 · 0705) · 「다항함수의 정적분 기본 계산」 3(0691 · 0692 · 0693) · 「위끝<아래끝인 정적분(부호)」 2(0694 · 0695) — 그 뒤 「∫_{-a}^{a} x^n dx」 2 · 「정적분으로 정의된 함수의 미분」 2 · 「정적분으로 정의된 함수의 극한」 2 · 「매개변수 포함 정적분」 계열 2(0716 · 0718)
- 그림: 0문

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-CALC1-0712 | 유형 01 대표문제(출발점 ★2)이나 골조가 교과서 0690(위끝=아래끝)+0696(곱 전개) 그대로·통찰 없음·M_total 5 → ★1 로 둠. 유형 01 안의 0714·0715 와 골조가 달라 카탈로그에서 대표문제 기준 base ★ 를 정하면 유형이 갈라짐 | ★1 / ★2 |
| RPM-CALC1-0723 | 벤더 「중」(★2)이나 추상 함수의 적분값 선형결합(EQV d2)·M_total 7 로 ★3 후보. 유형 03 표준 골조라 ★2 유지 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 반복된 type_hint: 「적분 구간이 같은 정적분의 합·차」 6 · 「곱 전개 후 정적분」 5 · 「적분 구간 이어 붙이기·뒤집기」 4 · 「다항함수의 정적분 기본 계산」 3 이 이 범위의 골격이다.
- 따로 세워야 할 유형: (a) 「같은 구간 합·차」 는 단순 합치기(0699 · 0700 · 0721 · base ★1) · 합쳐야 다항식이 되는 분수식(0720 · ★2) · 매개변수 소거(0722 · ★2) 로 base ★ 가 달라 세 하위 유형으로 분리 권장. (b) 유형 01 「미적분의 기본정리」 는 계산(0712 · 0713)과 ∫f' = f(b)−f(a)(0714) · 부정적분 상수 차(0715) 가 한 유형에 섞여 있어 후자 둘을 「기본정리의 추상 적용」 으로 따로 세우고 base ★2~3. (c) 「추상 함수의 정적분 선형결합」(0723) 은 08-2 성질의 추상판이라 별도 유형(base ★2~3). (d) 「정적분으로 정의된 함수」 는 양변 미분(0708 · 0709)과 미분계수 꼴 극한(0710 · 0711)의 골조가 달라 두 유형.
- 통합해도 될 유형: 교과서 08-1 의 기본 계산·위끝<아래끝 부호·곱 전개는 base ★1 하나(「다항함수 정적분 계산」)로 통합. 08-2 후반의 이어 붙이기·뒤집기·변수 문자도 하나(「구간 성질」 · base ★1). 「매개변수 포함 정적분」(0716 · 0717 · 0718) 은 부등식·방정식·최대최소로 발문만 다르고 골조(적분 결과가 매개변수의 다항식)가 같아 하나의 유형에 발문 변형으로 두어도 됨(base ★2).
- 08-3 의 홀수 차수 소거는 절차(base ★1)로 두되, 비대칭 구간을 대칭+나머지로 분할하는 변형(0707 creative)은 I-SC 가 생기므로 별도 유형(★2) 후보.
