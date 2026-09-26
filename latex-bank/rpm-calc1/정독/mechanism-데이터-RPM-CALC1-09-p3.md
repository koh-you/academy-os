---
name: mechanism-데이터-RPM-CALC1-09-p3
description: RPM 미적분Ⅰ 09 정적분의 활용 (3/3 · 유형 UP 12 역함수의 그래프와 넓이 ~ 실력 Up) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 미적분Ⅰ (22개정) · 전사본 latex-bank/rpm-calc1
  section: 09 정적분의 활용
  unit_code: CALC1-09
  part: "3/3"
  extract_range: "131~134쪽 · 0859~0885"
  total_problems: 27
  unit_total: 85
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-calc1/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-calc1/items/<id>.tex
  image_source: latex-bank/rpm-calc1/figures/ (crops.json)
---

# RPM 미적분Ⅰ · 09 정적분의 활용 (3/3) 정독 데이터 (v1.0)

이 파일은 RPM 미적분Ⅰ 09 정적분의 활용 단원(85문) 가운데 131~134쪽의 27문항(0859~0885)을 다룬다. 구역은 유형 UP 12 역함수의 그래프와 넓이(6문) · 시험에 꼭 나오는 문제(14문) · 서술형 주관식(4문) · 실력 Up(3문) 순이다. 유형 UP 의 첫 문항은 「대표문제」(난이도 표시 없음 → ★3 출발), 나머지는 중·상중 표시(★2 · ★3 출발)를 가진다. 시험에 꼭 나오는 문제는 난이도 표시가 없어 ★2 출발로 두고 d2 통찰 · d1 통찰 + M_total 7 · M_total 8 이상이면 ★3, 통찰 0 · M_total 4 면 ★1 로 조정했다. 서술형 주관식은 ★3 출발(통찰 0 · M_total 5 면 −1), 실력 Up 은 ★4 출발이다. 태그는 「중요」 3문(0866 · 0875 · 0880), 기출 3문(0873 수능 · 0883 교육청 · 0885 평가원)이며 기출은 통찰 유무로만 ±0~1 을 판단했다. 그림 문항은 0860 · 0866 · 0871 · 0872 · 0873 · 0877 · 0879 · 0882 · 0883 아홉 문이며 모두 크롭 이미지로 확인했다.

주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 사슬) · `insights[]`(유형 코드 · depth · effective_depth · 근거) · `variation_notes`(numeric/creative)를 채웠다. `depth_score` 는 insights 의 effective_depth 평균(없으면 0.00)이고, `insight_type` 은 통찰이 없거나 d1 한 개뿐이면 절차형, d2 이상 또는 2개 이상이면 통찰형으로 적었다. Mₜ 는 함정 0~1개면 1, 2~3개면 2 로 매겨 M_total 은 4 이상이다. 이 범위의 역함수 문항(0859~0864 · 0878)은 「역함수 g 를 직접 적분하지 않고 y=x 대칭으로 원함수 쪽 영역으로 옮긴다」는 한 골조를 공유하므로, 둘러싸인 넓이를 2배로 줄이는 쪽은 I-SYM, ∫g 를 직사각형−∫f 로 바꾸는 쪽은 I-RT 로 구분해 라벨링했고, 그림이나 식 없이 스스로 대응 구간·그림을 세워야 하는 경우만 d2 로 올렸다. 「넓이가 같다 → 부호 있는 정적분 0」(0872 · 0873 · 0883)은 I-EQV 로 두고 교점을 구할 수 없어 전환이 강제될 때 d2 로 매겼다.

## 문항 데이터

### 유형 UP 12 역함수의 그래프와 넓이

```yaml
- id: RPM-CALC1-0859
  page: 131
  vendor_label: "유형 UP 12 역함수의 그래프와 넓이"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형 UP"
  summary: |
    f(x)=x²/9 (x≥0) 의 역함수 g 에 대하여 두 곡선 y=f(x), y=g(x) 로 둘러싸인 도형의 넓이. 5지선다.
  category: "역함수 대칭 → 2×(y=x 와 f 사이 넓이) → 교점 0, 9 → 적분"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "f 와 g 가 y=x 대칭이므로 둘러싸인 넓이 = 2×∫₀⁹(x−x²/9)dx — g=3√x 는 수Ⅱ 범위에서 직접 적분할 수 없어 대칭 환원이 필수"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "역함수와 원함수로 둘러싸인 넓이(y=x 대칭)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    교점은 f(x)=x 에서 x=0, 9. 대칭으로 넓이 = 2(81/2−27) = 27. 유형 UP 대표문제라 ★3 출발, SYM d1 한 개·M_total 5 이므로 조정 없이 ★3. 골조가 이 유형의 정의 그 자체(역함수 넓이 = 2×원함수와 y=x 사이).
  tier: star_3
  mechanism_primary: "f(x)=x 교점 0, 9 → y=x 대칭으로 2×∫₀⁹(x−x²/9)dx → 27"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0859.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 1/9 → 1/4, 1/16, 1/k(교점이 0, k 로 정수) 또는 f(x)=x²/k+c 꼴로 이동. 제약: x≥0 제한을 유지해 역함수가 존재해야 하고, 교점 두 개가 유리수·넓이가 선택지에 맞게 정수·간단 분수로 나와야 함."
    creative: "(1) 넓이 대신 「두 곡선 사이 넓이가 S 일 때 k」로 역질문(★3 유지) (2) 삼차 f(x)=(x−1)³+1 처럼 교점이 셋인 함수로 바꾸면 잎이 두 개·점대칭 활용이 추가돼 0864 골조 ★3 (3) 역함수를 그림 없이 「f(a)=b, f(b)=a」 조건만 주면 추상도 상승 ★3~4."
```

```yaml
- id: RPM-CALC1-0860
  page: 131
  vendor_label: "유형 UP 12 역함수의 그래프와 넓이"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    그림의 y=f(x) 와 역함수 y=g(x) 가 (1,1), (3,3) 에서 만나고 ∫₁³ f(x)dx=3 일 때 두 곡선으로 둘러싸인 도형의 넓이. 단답.
  category: "역함수 대칭 → 2×(y=x 아래 사다리꼴 − ∫f) → 2(4−3)"
  M: {s: 1, k: 1, a: 3, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "둘러싸인 넓이 = 2×(y=x 와 f 사이) = 2(∫₁³x dx − ∫₁³f dx) — f 의 식 없이 대칭만으로 닫힘"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "역함수와 원함수로 둘러싸인 넓이(y=x 대칭)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ∫₁³ x dx = 4 이고 ∫₁³ f dx = 3 < 4 이므로 [1,3] 에서 f 는 y=x 아래. 넓이 = 2(4−3) = 2. 식이 없는 일반 함수(Mₐ 3)지만 계산은 한 줄. 유형 UP 이나 난이도 「중」이라 ★2 출발, SYM d1·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "∫₁³ f = 3 · ∫₁³ x = 4 → y=x 대칭으로 넓이 = 2(4−3) → 2"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$2$'
  answer_source: "답지"
  figure: "crop:fig-0860.png"
  latex: latex-bank/rpm-calc1/items/0860.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "교점 (1,1),(3,3) → (a,a),(b,b) 와 ∫ₐᵇ f 값. 제약: ∫ₐᵇ f 가 (b²−a²)/2 보다 작아야(f 가 y=x 아래) 그림과 맞고, 크면 f 가 위쪽인 그림으로 라벨을 바꿔야 함. 그림 라벨(1, 3) 고정 시 적분값만 변경."
    creative: "(1) ∫₁³ g dx 값을 주고 같은 넓이를 묻기(대칭 한 번 더 · ★2) (2) 교점 셋 (1,1),(2,2),(3,3) 에 두 구간 적분값을 주면 잎 두 개 합 ★3 (3) 「∫₁³ f + ∫₁³ g」를 묻는 0862 골조로 옮기면 RT ★3."
```

```yaml
- id: RPM-CALC1-0861
  page: 131
  vendor_label: "유형 UP 12 역함수의 그래프와 넓이"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    f(x)=3x²+1 (x≥0) 의 역함수 g 에 대하여 곡선 y=g(x) 와 x축, 직선 x=13 으로 둘러싸인 도형의 넓이. 5지선다.
  category: "g(13)=2 → y=x 대칭으로 원함수 영역(y=f 와 y축·y=13 사이)으로 전환 → 26−∫₀²f"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "g 의 식 √((x−1)/3) 을 적분하지 않고, 대칭시켜 「y=f(x) 와 y축·y=13 사이 넓이 = 2·13 − ∫₀² f」로 표현 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "역함수의 정적분(y=x 대칭 전환·∫f+∫g=bd−ac)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f(2)=13 이므로 g(13)=2, 또 f(0)=1 이라 g(1)=0. 구하는 넓이 = ∫₁¹³ g = 직사각형 2×13 − ∫₀²(3x²+1)dx = 26−10 = 16. 함정은 적분 구간 [1,13] 이 f 쪽에서는 [0,2] 라는 구간 대응(T-범위) 하나. 난이도 「중」·RT d1·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "f(2)=13 → ∫₁¹³ g = 2·13 − ∫₀² f → 26−10 → 16"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0861.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f(x)=ax²+b (a>0, b≥0) 와 직선 x=c 를 바꿀 수 있음. 제약: c=f(p) 가 되는 정수 p 를 잡아 g(c)=p 가 정수가 되도록(예: a=2, b=3, c=11 → p=2). x축과 만나는 왼쪽 끝은 g(b)=0, 즉 x=b."
    creative: "(1) x축 대신 「직선 y=1 과 x=13」으로 바꾸면 직사각형에서 빼는 항이 달라져 T-범위 강화(★2~3) (2) f 를 삼차 x³/2+2 (0878) 로 바꾸면 같은 골조 (3) 「곡선 y=g(x) 와 y=x 사이」로 바꾸면 0859 골조 SYM 으로 이동."
```

```yaml
- id: RPM-CALC1-0862
  page: 131
  vendor_label: "유형 UP 12 역함수의 그래프와 넓이"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    f(4)=4, f(10)=10 인 연속함수 f 와 그 역함수 g 에 대하여 ∫₄¹⁰ f(x)dx=S 일 때 ∫₄¹⁰ g(x)dx=a−S 인 상수 a. 5지선다.
  category: "∫f + ∫g 를 y=x 대칭으로 한 그림에 모으기 → ㄱ자 영역 = 10²−4² → a=84"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "식이 없는 f 에 대해 ∫₄¹⁰ g 를 y=x 대칭으로 「y=f(x) 왼쪽·y∈[4,10] 영역」으로 옮겨 두 적분의 합이 정사각형 차 100−16 임을 그림으로 읽어야 함(∫f+∫g=bd−ac)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "역함수의 정적분(y=x 대칭 전환·∫f+∫g=bd−ac)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ∫₄¹⁰ f + ∫₄¹⁰ g = 10·10 − 4·4 = 84 이므로 a=84. 계산은 한 줄이지만 f 의 식이 전혀 없어(Mₐ 3) 대칭 그림을 스스로 세워야 하는 RT d2. 난이도 「중」 출발 ★2 에서 d2 통찰로 +1 → ★3.
    [분류 이슈] 벤더 「중」이나 식 없는 일반 함수 + 그림 없는 대칭 전환이라 ★2/★3 경계 — ★3 으로 두고 기록.
  tier: star_3
  mechanism_primary: "f(4)=4, f(10)=10 → ∫₄¹⁰ f + ∫₄¹⁰ g = 10²−4² → a = 84"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0862.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "고정점 (4,4),(10,10) → (p,p),(q,q) 로 바꾸면 a=q²−p². 제약: f(p)=p, f(q)=q 처럼 y=x 위의 점이어야 정사각형 차로 닫힘. f(p)=c, f(q)=d 로 일반화하면 a=qd−pc 로 직사각형 차(증가함수 조건 명시)."
    creative: "(1) 「f(2)=3, f(5)=9 일 때 ∫₂⁵ f + ∫₃⁹ g」처럼 구간이 다른 꼴로 바꾸면 구간 대응 T-범위가 추가돼 ★3 유지·함정 상승 (2) 구체 함수(0863·0878)로 내리면 ★3 (3) f 가 감소함수인 설정은 부호가 뒤집혀 별도 검토 필요 — 증가 조건을 명시할 것."
```

```yaml
- id: RPM-CALC1-0863
  page: 131
  vendor_label: "유형 UP 12 역함수의 그래프와 넓이"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    f(x)=√x 의 역함수 g 에 대하여 ∫₁⁹ f(x)dx + ∫₁³ g(x)dx 의 값. 단답.
  category: "√x 는 직접 적분 불가 → 구간 [1,9]↔[1,3] 대응 확인 → 합 = 9·3−1·1"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "∫₁⁹√x 를 수Ⅱ 도구로 구할 수 없으므로, g 의 구간 [1,3] 이 f 의 [1,9] 의 상(f(1)=1, f(9)=3)임을 확인하고 두 적분을 한 그림의 ㄱ자 영역(27−1)으로 통합"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "역함수의 정적분(y=x 대칭 전환·∫f+∫g=bd−ac)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    g(x)=x² (x≥0). f(1)=1, f(9)=3 이므로 ∫₁⁹ f + ∫₁³ g = 9·3 − 1·1 = 26. 검산: ∫₁³ x² = 26/3 이니 ∫₁⁹√x = 52/3. 무리함수 적분이 막혀 있어 전환이 강제되는 RT d2. 「상중」 출발 ★3 유지.
  tier: star_3
  mechanism_primary: "f(1)=1, f(9)=3 → ∫₁⁹ f + ∫₁³ g = 9·3 − 1·1 → 26"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$26$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0863.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 [1,9] → [a²,b²] 와 g 쪽 [a,b] 로 바꾸면 답 b³−a³. 제약: 두 구간이 정확히 f 의 상·원상으로 대응해야 하고 √ 값이 정수가 되도록 완전제곱수 끝점. 구간을 일부러 어긋나게 주면 오답 유도가 되므로 정답 구간 대응 명시."
    creative: "(1) f(x)=³√x 로 바꾸면 g=x³ 이라 같은 골조(★3) (2) 「∫₁⁹ f − ∫₁³ g」 차로 바꾸면 ∫g 를 실제로 계산해야 하는 두 단계 ★3 (3) 그림 없이 f 를 「증가 연속함수, f(1)=1, f(9)=3」만 주면 0862 골조 추상도 상승."
```

```yaml
- id: RPM-CALC1-0864
  page: 131
  vendor_label: "유형 UP 12 역함수의 그래프와 넓이"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    f(x)=x³−3x²+3x 의 역함수 g 에 대하여 두 곡선 y=f(x), y=g(x) 로 둘러싸인 도형의 넓이. 5지선다.
  category: "증가함수 → 교점은 f(x)=x 의 근 0,1,2 → 대칭 2× → 두 잎 점대칭 → 4×∫₀¹"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "f 가 증가함수이므로 f 와 g 의 교점은 y=x 위 → f(x)=x, 즉 x(x−1)(x−2)=0 · 둘러싸인 넓이 = 2×∫₀²|x−f(x)|dx"
    - step: 2
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "f(x)−x = x(x−1)(x−2) 가 (1,0) 점대칭이라 두 잎의 넓이가 같음 → 4×∫₀¹ x(x−1)(x−2)dx = 4×1/4"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "역함수와 원함수로 둘러싸인 넓이(y=x 대칭)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f(x)=(x−1)³+1 이고 f(x)=x ⟺ (x−1)³=x−1 ⟺ x=0,1,2. [0,1] 에서 f>x, [1,2] 에서 f<x 이며 ∫₀¹(x³−3x²+2x)dx=1/4. 넓이 = 2(1/4+1/4) = 1. 「상중」 출발 ★3. 통찰 2개(둘 다 d1)라 +1 후보이나 둘째 잎은 직접 적분해도 되는 단축이라 ★3 유지.
    [분류 이슈] 통찰 2개(SYM d1×2)로 +1 후보 조건은 만족하나 모두 d1 단축 — ★3/★4 경계, ★3 으로 기록.
  tier: star_3
  mechanism_primary: "f(x)=x → x=0,1,2 → 대칭으로 2∫₀²|x−f| → 점대칭으로 4×1/4 → 1"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0864.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f(x)=(x−p)³+p 꼴(교점 p−1, p, p+1)로 이동하면 넓이는 항상 1. k(x−p)³+p 로 계수 k 를 넣으면 교점 p±1/√k 라 k 는 완전제곱 역수(1/4 등)로 제한. 제약: f 가 증가함수(도함수 ≥ 0)여야 역함수가 있고 교점이 y=x 위에만 있음."
    creative: "(1) 두 잎 합 대신 「x≥1 인 부분 넓이」만 묻기(★3 · 점대칭 대신 구간 하나) (2) f(x)=x³−3x²+3x+c 로 평행이동하면 교점이 달라지고 잎이 비대칭 → 직접 두 적분 ★3~4 (3) 증가 조건을 깨는 삼차(예: x³−x)는 역함수 자체가 없으므로 최고차항 양수·도함수 판별식 ≤ 0 을 유지 — 변형 금지 지점."
```

### 시험에 꼭 나오는 문제

```yaml
- id: RPM-CALC1-0865
  page: 132
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    곡선 y=x(x−2)² 과 x축으로 둘러싸인 도형의 넓이. 5지선다.
  category: "x절편 0, 2(중근) → [0,2] 에서 부호 하나 → ∫₀² 전개 적분"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선과 x축 사이의 넓이"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x=2 가 중근이라 곡선은 x축에 접하고 [0,2] 에서 y≥0. ∫₀²(x³−4x²+4x)dx = 4−32/3+8 = 4/3. 시험 구역 출발 ★2 이나 통찰 0·M_total 4 라 −1 → ★1.
    [분류 이슈] 시험 구역(★2~3)인데 절차 두 단계·M_total 4 → ★1 로 기록. 중근 접점 판단(T-부호)만이 유일한 변별점.
  tier: star_1
  mechanism_primary: "x(x−2)²=0 → 0, 2(중근) → ∫₀²(x³−4x²+4x)dx → 4/3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0865.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x(x−a)² 의 a 를 1, 3 등으로 → 넓이 a⁴/12. 부호를 −x(x−a)² 로 뒤집으면 절댓값 처리. 제약: 중근 위치가 정수, 넓이가 선택지의 분수와 겹치지 않게."
    creative: "(1) x(x−a)²(중근) → x(x−a)(x−b) 로 근 셋이면 부호가 바뀌어 두 조각 절댓값 ★2 (2) 「곡선과 x축 및 x=3 으로 둘러싸인」으로 구간을 늘리면 접점 너머 영역 추가 ★2 (3) 넓이를 주고 a 를 역으로 묻기(a⁴/12=S · ★2)."
```

```yaml
- id: RPM-CALC1-0866
  page: 132
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    그림처럼 곡선 y=x²−2x 와 x축, 직선 x=a (a>2) 로 둘러싸인 도형의 넓이가 8/3 일 때 a 의 값. 단답.
  category: "[0,2] 아래 넓이 4/3 + ∫₂ᵃ(x²−2x) = 8/3 → 삼차 방정식 a²(a−3)=0"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선과 x축·직선 x=a 사이 넓이 조건 → 미지수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x축 아래 [0,2] 부분은 4/3 (1/6 공식), 위 부분 ∫₂ᵃ(x²−2x)dx = a³/3−a²+4/3. 합이 8/3 이면 a³/3−a² = 0, a=3. 「위·아래 넓이가 같으므로 ∫₀ᵃ(x²−2x)=0」으로 바로 갈 수도 있으나 필수는 아님. 시험 구역 ★2 출발·통찰 0·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "아래 넓이 4/3 → 위 넓이 ∫₂ᵃ(x²−2x) = 4/3 → a³−3a²=0 → a=3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$3$'
  answer_source: "답지"
  figure: "crop:fig-0866.png"
  latex: latex-bank/rpm-calc1/items/0866.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "포물선 x²−kx (근 0,k) 와 목표 넓이 S. 전체 넓이 T(a)=a³/3−a²+8/3 이므로 S 는 a 가 정수가 되는 값만(S=8/3 → a=3, S=8 → a=4). 그림 라벨(O, a) 고정 시 곡선 식·넓이만 변경."
    creative: "(1) a 의 범위를 0<a<2 로 두면 아래 조각만 남아 ★1~2 (2) 「x축 위·아래 넓이가 같다」로 주면 0872 골조 EQV ★2 (3) 세로선 x=a 대신 가로선 y=b 로 바꾸면 역함수·구간 분할이 필요해 ★3."
```

```yaml
- id: RPM-CALC1-0867
  page: 132
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    곡선 y=−x²+5nx 와 직선 y=2nx 로 둘러싸인 도형의 넓이 Sₙ 에 대하여 Sₙ>180 인 자연수 n 의 최솟값. 단답.
  category: "차 −x²+3nx 의 근 0, 3n → 1/6 공식 Sₙ=9n³/2 → n³>40 → n=4"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "포물선과 직선·접선 사이의 넓이(1/6 공식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    교점 x=0, 3n. Sₙ = (3n)³/6 = 9n³/2. 9n³/2 > 180 ⟺ n³ > 40 이고 3³=27, 4³=64 이므로 n=4. 매개변수 n 이 있지만 1/6 공식 대입뿐. 시험 구역 ★2·통찰 0·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "−x²+5nx=2nx → x=0, 3n → Sₙ=(3n)³/6 → 9n³/2>180 → n=4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0867.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 5n, 2n → pn, qn (p>q) 로 바꾸면 Sₙ=(p−q)³n³/6. 부등식 우변은 n³ 의 경계가 정수 사이에 떨어지도록(예: 180 → n³>40). 제약: p−q 가 양의 정수, 답 n 이 유일."
    creative: "(1) Sₙ 을 수열로 보고 Σ 나 Sₙ₊₁/Sₙ 를 묻기 — 수열 단원 결합 XU ★3 (2) 직선을 접선으로 바꾸면 접점 계산이 추가돼 ★2~3 (3) 「Sₙ ≤ 180 인 n 의 개수」로 바꾸면 경계 처리 T-경계 ★2."
```

```yaml
- id: RPM-CALC1-0868
  page: 132
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    두 곡선 y=x³−2x 와 y=x² 으로 둘러싸인 도형의 넓이. 5지선다.
  category: "차 x(x−2)(x+1) 의 근 −1, 0, 2 → 구간별 부호 → 두 적분 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 곡선 사이의 넓이(삼차와 이차)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x³−x²−2x = x(x−2)(x+1). [−1,0] 에서 삼차가 위(5/12), [0,2] 에서 포물선이 위(8/3). 합 37/12. 구간별 부호 판단(T-부호) 하나와 분수 계산이 전부. 시험 구역 ★2·통찰 0·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "x³−2x=x² → x=−1,0,2 → ∫₋₁⁰(x³−x²−2x) + ∫₀²(x²+2x−x³) → 5/12+8/3 → 37/12"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0868.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "차함수가 x(x−p)(x+q) 로 인수분해되는 계수 조합(예: y=x³−3x 와 y=2x² → x(x−3)(x+1)). 제약: 삼차−이차 의 근 셋이 정수이고 선택지 분수가 12 분모 정도로 정리. 근 두 개(중근 포함)면 조각이 하나로 줄어 ★1~2."
    creative: "(1) 두 곡선 중 하나를 직선으로 바꾸면 조각이 하나(1/6 공식) ★1~2 (2) 세 근이 대칭(−a, 0, a · 예: y=x³, y=a²x)이면 점대칭으로 2× 단축 SYM ★2 (3) 넓이를 주고 계수를 역으로 묻기 ★3."
```

```yaml
- id: RPM-CALC1-0869
  page: 132
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    곡선 y=2x|x−1| 과 직선 y=x 로 둘러싸인 도형의 넓이. 단답.
  category: "절댓값 분할(x<1 / x≥1) → 교점 0, 1/2, 3/2 → 세 조각(x=1 에서 식 전환) 적분 합"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "절댓값 곡선과 직선 사이의 넓이"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    x<1 에서 −2x²+2x=x → x=0, 1/2. x≥1 에서 2x²−2x=x → x=3/2 (x=0 은 범위 밖 기각). [0,1/2] 곡선 위 1/24, [1/2,1] 직선 위 5/24, [1,3/2] 직선 위 7/24, 합 13/24. 절댓값 분할은 표준이라 통찰 0 이지만, 직선이 위인 구간 [1/2,3/2] 안에서 곡선 식이 x=1 에서 바뀌는 것을 놓치기 쉬움(T-범위·T-부호). 단계 7+ · M_total 8 → 시험 구역 ★2 에서 ★3.
  tier: star_3
  mechanism_primary: "|x−1| 분할 → 교점 0, 1/2, 3/2 → 1/24 + 5/24 + 7/24 → 13/24"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{13}{24}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0869.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "y=kx|x−a| 와 y=mx 의 k, a, m. 제약: 두 갈래 이차방정식의 근이 유리수이고 교점이 절댓값 꺾이는 점 a 양쪽에 하나씩 놓여야 세 조각 구조가 유지됨(2x|x−1| vs x: 근 1/2·3/2). m 을 키워 교점이 x≥a 쪽 하나뿐이면 조각 둘 ★2."
    creative: "(1) 직선을 y=x 대신 원점을 지나지 않는 y=x+c 로 바꾸면 교점 셋이 모두 이차 근 → 계산 ★3 (2) 곡선을 y=|x²−x| 처럼 x축 반사 절댓값으로 바꾸면 조각 구조가 달라져 ★2~3 (3) 「둘러싸인 두 부분의 넓이 차」를 묻기 ★3."
```

```yaml
- id: RPM-CALC1-0870
  page: 132
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    곡선 y=x² 위의 점 (1,1) 에서의 접선과 곡선 y=ax²−1 (a>0) 로 둘러싸인 도형의 넓이가 4/3 일 때 상수 a. 5지선다.
  category: "접선 y=2x−1 → 차 ax²−2x=x(ax−2) → 1/6 공식 4/(3a²)=4/3 → a=1"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "포물선과 직선·접선 사이의 넓이(1/6 공식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    접선 y=2x−1 과 ax²−1 의 차는 ax²−2x, 근 0 과 2/a. 넓이 = a(2/a)³/6 = 4/(3a²). 4/3 과 같으면 a²=1, a>0 이므로 a=1. 접선 구하기 + 1/6 공식의 두 절차. 시험 구역 ★2·통찰 0·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "접선 y=2x−1 → ax²−2x=0 근 0, 2/a → a·(2/a)³/6 = 4/3 → a=1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0870.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접점 (1,1) → (p,p²), 곡선 상수 −1 → c, 넓이 값. 접선 y=2px−p² 과 ax²+c 의 차 ax²−2px+(c+p²) 에서 c=−p² 로 두면 근 0, 2p/a 라 1/6 공식이 4p³/(3a²) 로 닫힘. 제약: a>0 유지, 넓이 값은 a 가 유리수가 되게."
    creative: "(1) 두 포물선의 공통접선으로 바꾸면 접선 결정에 연립이 필요 ★3 (2) 접선 대신 「점 (1,1) 을 지나는 기울기 m 직선」으로 넓이 최소를 묻기 ★3~4 (3) a 의 범위(a>0)를 빼면 a=±1 로 T-부호 함정."
```

```yaml
- id: RPM-CALC1-0871
  page: 132
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    그림처럼 y=ax²+1 과 y=2|x| 의 그래프가 두 점 A, B 에서 각각 접할 때 색칠한 부분(포물선과 V 자 사이)의 넓이. 단답.
  category: "x>0 에서 ax²−2x+1=0 중근 → a=1, 접점 x=1 → y축 대칭 2∫₀¹(x−1)²dx"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "접하는 두 곡선(판별식) 사이의 넓이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x>0 쪽에서 ax²+1=2x 가 중근 ⟺ 1−a=0, a=1, 접점 B(1,2). 색칠 부분은 [−1,1] 에서 포물선이 위이고 y축 대칭이므로 2∫₀¹(x²−2x+1)dx = 2/3. 판별식·대칭 모두 이 유형의 표준 절차. 시험 구역 ★2·통찰 0·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "접함 ⟺ ax²−2x+1=0 판별식 0 → a=1, 접점 x=±1 → 2∫₀¹(x−1)²dx → 2/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{2}{3}$'
  answer_source: "답지"
  figure: "crop:fig-0871.png"
  latex: latex-bank/rpm-calc1/items/0871.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "y=ax²+c 와 y=m|x| 의 c, m. 접할 조건 m²=4ac, 접점 x=m/(2a), 넓이 = m³/(12a²) (m=2, a=1 → 2/3). c 와 m 을 정수로 잡고 a 를 미지수로 두면 답이 분수. 제약: a>0 (아래로 볼록) 유지, 그림 라벨 A·B·O 고정."
    creative: "(1) 접하는 대신 「두 점에서 만나고 넓이가 S」로 바꾸면 a 가 넓이 조건에서 결정 ★3 (2) V 자를 y=|x−1| 처럼 비대칭으로 옮기면 대칭 단축이 사라져 두 적분 ★2~3 (3) 「포물선과 x축, V 자로 둘러싸인 바깥 부분」을 묻기(전체 삼각형 − 안쪽) ★2."
```

```yaml
- id: RPM-CALC1-0872
  page: 132
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    그림처럼 곡선 y=−x²+3x 와 x축, 직선 x=k (k>3) 로 둘러싸인 두 도형의 넓이가 같을 때 상수 k. 단답.
  category: "두 넓이 같음 ⟺ ∫₀ᵏ(−x²+3x)dx=0 → k²(−k/3+3/2)=0 → k=9/2"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "위(0~3)·아래(3~k) 넓이가 같다 ⟺ 부호 있는 정적분 ∫₀ᵏ(−x²+3x)dx = 0 — 두 넓이를 따로 계산하지 않고 한 식으로"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 도형의 넓이가 같을 조건(정적분 0)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ∫₀ᵏ(−x²+3x)dx = −k³/3 + 3k²/2 = 0, k>0 이므로 k=9/2. 「넓이 같음 → 정적분 0」은 이 유형의 기본 통찰이라 d1. 시험 구역 ★2·EQV d1·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "S₁=S₂ ⟺ ∫₀ᵏ(−x²+3x)dx=0 → −k³/3+3k²/2=0 → k=9/2"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{9}{2}$'
  answer_source: "답지"
  figure: "crop:fig-0872.png"
  latex: latex-bank/rpm-calc1/items/0872.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "−x²+px (근 0, p) 로 바꾸면 k=3p/2 — 항상 유리수. 계수 −1 → −q 로 바꿔도 k 는 불변(넓이 비만 관여). 제약: k>p 조건과 그림 라벨(O, 3, k) 정합."
    creative: "(1) 왼쪽 경계를 x=0 이 아닌 x=−1 로 옮기면 ∫₋₁ᵏ=0 이 삼차 → 인수분해 ★3 (2) 삼차 곡선 y=x(x−a)(x−b) 에서 두 잎 넓이 같음 조건 → a, b 관계 ★3 (3) 두 넓이의 비가 1:2 인 k 는 정적분 0 이 아니라 각 조각 계산 → 골조가 무너져 ★2 절차형."
```

```yaml
- id: RPM-CALC1-0873
  page: 133
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["수능 기출"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    두 곡선 y=x³+x², y=−x²+k (4<k<5) 와 y축으로 둘러싸인 부분의 넓이 A, 두 곡선과 직선 x=2 로 둘러싸인 부분의 넓이 B 가 같을 때 상수 k. 5지선다.
  category: "교점을 구하지 않고 A=B ⟺ ∫₀²{(−x²+k)−(x³+x²)}dx=0 → 2k=28/3 → k=14/3"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "교점 x좌표가 k 를 포함한 삼차방정식의 근이라 구할 수 없음 → A=B 를 「[0,2] 전체에서 두 곡선 차의 부호 있는 정적분이 0」으로 바꿔야 진행됨. 4<k<5 는 교점이 (0,2) 안에 하나뿐임을 보장"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "두 도형의 넓이가 같을 조건(정적분 0)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ∫₀²(−x³−2x²+k)dx = −4 − 16/3 + 2k = 0 → k=14/3 (4<14/3<5 확인). 0872 와 같은 「넓이 같음 → 정적분 0」이지만 교점이 미지·두 곡선이라 전환이 강제되는 d2. 수능 기출(+0~1)·시험 구역 ★2 출발에서 d2 통찰로 ★3.
  tier: star_3
  mechanism_primary: "A=B ⟺ ∫₀²(−x³−2x²+k)dx = 0 → −4−16/3+2k=0 → k=14/3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지"
  figure: "crop:fig-0873.png"
  latex: latex-bank/rpm-calc1/items/0873.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "오른쪽 경계 x=2 → x=c 로 바꾸면 k = c³/4 + 2c²/3 (c=2 → 14/3). 제약: 그 k 에서 두 곡선의 교점이 (0,c) 안에 정확히 하나여야 하므로 k 범위 조건(4<k<5 류)을 함께 다시 계산해 명시."
    creative: "(1) y축 대신 x=−1 을 왼쪽 경계로 두면 [−1,2] 부호 적분 ★3 (2) 두 곡선을 y=f(x), y=f(x)+k 처럼 평행이동 관계로 주면 차가 상수 → 통찰이 사라져 ★2 (3) A:B=1:2 로 바꾸면 교점이 필요해 풀리지 않음 — 변형 금지 지점(정적분 0 골조만 유효)."
```

```yaml
- id: RPM-CALC1-0874
  page: 133
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    곡선 y=−x²+4x 와 직선 y=−2x 로 둘러싸인 도형의 넓이가 직선 x=a 에 의해 이등분될 때 상수 a. 단답.
  category: "차 −x²+6x 의 근 0, 6 → 전체 36 → ∫₀ᵃ(−x²+6x)=18 삼차 또는 축 x=3 대칭 → a=3"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "차함수 −x²+6x 가 x=3 대칭인 포물선이므로 이등분선은 축 x=3 — 삼차방정식 a³−9a²+54=0 을 풀지 않고 즉시 결론"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "넓이의 이등분"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 그래프 사이 영역의 세로 폭은 −x²+6x 라서 넓이 분포가 x=3 대칭 → a=3. 대칭을 못 보면 ∫₀ᵃ(−x²+6x)dx = 18 에서 a³−9a²+54=0 → (a−3)(a²−6a−18)=0, 0<a<6 인 근 a=3 (M_k 2). 시험 구역 ★2 출발·SYM d1·M_total 7 → ★3.
  tier: star_3
  mechanism_primary: "−x²+4x=−2x → x=0, 6 → 차함수 x=3 대칭(또는 ∫₀ᵃ=18 삼차) → a=3"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0874.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "포물선 −x²+px 와 직선 −qx 의 p, q 를 바꾸면 차의 근 0, p+q 이고 a=(p+q)/2 — 정수 답을 원하면 p+q 짝수. 제약: 대칭 단축이 항상 성립하므로 답이 항상 중점. 그림 없음이라 라벨 제약 없음."
    creative: "(1) 이등분선을 y=b (가로선)로 바꾸면 대칭이 깨지고 역함수 적분 필요 ★3~4 (2) 비를 1:2 로 바꾸면 삼차 a³−9a²+36=0 의 근이 무리수라 출제 부적합 — 대칭 골조(1:1)만 유효한 변형 금지 지점 (3) 곡선을 삼차(x³−3x 등)로 바꾸면 축 대칭이 사라지고 삼차 방정식 풀이가 필수 → 절차형 ★3."
```

```yaml
- id: RPM-CALC1-0875
  page: 133
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    원점을 동시에 출발한 두 점 P, Q 의 속도가 각각 t(t−1), 2t+3 일 때 두 점이 다시 만나는 시각. 5지선다.
  category: "위치 같음 ⟺ ∫₀ᵀ(v_P−v_Q)dt=0 → T³/3−3T²/2−3T=0 → 2T²−9T−18=0 → T=6"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 점이 다시 만나는 시각(위치 같음)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x_P(T)=T³/3−T²/2, x_Q(T)=T²+3T. 같다고 놓으면 T(2T²−9T−18)=0 → (2T+3)(T−6)=0, T>0 이므로 T=6. 「만난다 = 위치 같음」은 유형 표준·통찰 없음. 시험 구역 ★2·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "∫₀ᵀ t(t−1)dt = ∫₀ᵀ(2t+3)dt → 2T²−9T−18=0 → T=6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0875.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "v_Q=2t+3 의 계수를 바꿀 때 이차 2T²−9T−18 이 정수근을 갖도록 역산(답 T 를 먼저 정하고 상수항 조정). 제약: T>0 유일, 다른 근은 음수로 기각되게. v_P 의 t(t−1) 을 t(t−p) 로 바꿔도 같은 골조."
    creative: "(1) 「두 점 사이 거리의 최댓값(만나기 전)」으로 바꾸면 위치 차의 극값 → 미분 결합 XU ★3 (2) 한 점의 속도를 그래프로 주면 RT ★2~3 (3) 「다시 만날 때까지 P 가 움직인 거리」로 바꾸면 v_P 부호 변화 구간(0<t<1) 절댓값 처리 T-부호 ★3."
```

```yaml
- id: RPM-CALC1-0876
  page: 133
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    원점 출발 점 P 의 속도 v(t)=t²−5t+4 에 대하여 ㄱ(출발 방향과 반대로 움직인 시간이 2초) · ㄴ(2초 후 위치 2/3) · ㄷ(3초 동안 움직인 거리 3) 의 참·거짓. 5지선다.
  category: "v=(t−1)(t−4) 부호 → ㄱ 반대 구간 1<t<4 는 3초 · ㄴ ∫₀²v=2/3 · ㄷ ∫₀¹v+|∫₁³v|=31/6"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "속도 식과 위치·움직인 거리(ㄱㄴㄷ)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    v(0)=4>0 이고 v<0 인 구간은 1<t<4 로 3초 → ㄱ 거짓. ∫₀²(t²−5t+4)dt = 8/3−10+8 = 2/3 → ㄴ 참. 거리 = ∫₀¹v + ∫₁³|v| = 11/6 + 10/3 = 31/6 ≠ 3 → ㄷ 거짓. 답 ㄴ. 보기 셋이 각각 독립 계산이라 노동(M_total 7)은 있으나 통찰 없음. 시험 구역 ★2 유지.
  tier: star_2
  mechanism_primary: "v=(t−1)(t−4) 부호표 → ㄱ 3초 ✗ · ㄴ ∫₀²v=2/3 ✓ · ㄷ 거리 31/6 ✗ → ㄴ"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0876.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "v=(t−p)(t−q) 의 p<q 와 보기의 시각·수치. 제약: ㄱ 의 「반대 방향 시간」은 q−p, ㄴ 의 위치는 정적분 값이 분수로 깔끔, ㄷ 의 거리는 부호 변화점을 지나는 구간으로 잡아 절댓값 함정 유지."
    creative: "(1) 보기 하나를 「원점으로 되돌아오는 시각」으로 바꾸면 삼차방정식 ★2~3 (2) v 를 그래프로 주면 0877 골조 RT (3) 「움직인 거리와 위치의 변화량이 같은 t 의 최댓값」을 묻기 → v≥0 인 최대 구간 판단 EQV ★3."
```

```yaml
- id: RPM-CALC1-0877
  page: 133
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    속도 v(t) 의 그래프(0≤t≤6 · 꺾은선: 0→1 상승, 1~2 에서 1, 2→4 하강해 −1, 4~5 에서 −1, 5→6 상승해 0)가 주어질 때 ㄱ(t=2, 4 의 운동 방향 반대) · ㄴ(t=3 위치가 원점) · ㄷ(t=1, 5 의 위치 같음) · ㄹ(1≤t≤4 움직인 거리 2) 중 옳은 것. 단답(기호).
  category: "그래프 넓이 읽기 → ㄱ 부호 반대 ✓ · ㄴ ∫₀³v=2 ✗ · ㄷ ∫₁⁵v=0 ✓ · ㄹ ∫₁⁴|v|=2 ✓"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "식 없이 속도 그래프의 부호·넓이(삼각형·직사각형)를 위치·거리로 읽는 표현 전환 — t=3 에서 v=0 이 「위치 0」이 아님을 구분"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "속도 그래프와 위치·움직인 거리"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    v(2)=1>0, v(4)=−1<0 → ㄱ 참. ∫₀³v = 1/2+1+1/2 = 2 ≠ 0 → ㄴ 거짓. ∫₁⁵v = 1+1/2−1/2−1 = 0 → ㄷ 참. ∫₁⁴|v| = 1+1/2+1/2 = 2 → ㄹ 참. 그래프 넓이 읽기(RT d1)와 방향·거리 함정 둘(T-부호·T-경계). 시험 구역 ★2·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "그래프 조각 넓이(삼각형 1/2 · 직사각형 1) → ㄱ ✓ ㄴ ✗(위치 2) ㄷ ✓(∫₁⁵v=0) ㄹ ✓(거리 2)"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "ㄱ, ㄷ, ㄹ"
  answer_source: "답지"
  figure: "crop:fig-0877.png"
  latex: latex-bank/rpm-calc1/items/0877.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "꺾은선의 꼭짓점 시각(1,2,3,4,5,6)과 높이 ±1 을 바꿀 수 있음. 제약: 조각 넓이가 1/2 배수로 떨어지게 정수 격자 유지, ㄷ 처럼 「위치 같음」 보기는 그 구간의 부호 있는 넓이 합이 0 이 되도록 대칭 설계(그래프 라벨 고정 시 보기만 변경)."
    creative: "(1) 보기를 「원점에서 가장 멀 때의 시각」으로 바꾸면 v 부호 변화점 판단 ★2 (2) 「t=6 까지 움직인 거리와 위치의 변화량」 두 값을 함께 묻는 서술형 ★2~3 (3) 그래프를 v 가 아닌 가속도 a(t) 로 주고 v(0) 을 주면 두 번 적분 ★3~4."
```

```yaml
- id: RPM-CALC1-0878
  page: 133
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    f(x)=x³/2+2 (x≥0) 의 역함수 g 에 대하여 ∫₀² f(x)dx + ∫₂⁶ g(x)dx 의 값. 단답.
  category: "f(0)=2, f(2)=6 → g 구간 [2,6] 은 f 구간 [0,2] 의 상 → 합 = 2·6 − 0·2 = 12"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "g 는 세제곱근 꼴이라 직접 적분 불가 → 두 적분 구간이 f 로 대응됨(f(0)=2, f(2)=6)을 확인하고 y=x 대칭으로 직사각형 [0,2]×[0,6] 넓이 12 로 통합"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "역함수의 정적분(y=x 대칭 전환·∫f+∫g=bd−ac)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ∫₀² f + ∫_{f(0)}^{f(2)} g = 2·f(2) − 0·f(0) = 12. 검산: ∫₀²(x³/2+2)dx = 2+4 = 6 이므로 ∫₂⁶ g = 6. 0863 과 같은 골조(구간 대응 + 직사각형)이며 그림 없이 스스로 세워야 하는 RT d2. 시험 구역 ★2 출발에서 d2 통찰로 ★3.
  tier: star_3
  mechanism_primary: "f(0)=2, f(2)=6 → ∫₀² f + ∫₂⁶ g = 2·6 − 0·2 → 12"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$12$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0878.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f(x)=ax³+b 의 a, b 와 f 쪽 구간 [0,p] → g 쪽 구간 [b, ap³+b], 답 p(ap³+b). 제약: 두 구간이 정확히 대응해야 하며 왼쪽 끝을 0 이 아닌 q 로 두면 답 p·f(p) − q·f(q) 로 일반화."
    creative: "(1) 「∫₂⁶ g(x)dx 의 값」만 묻기 → 12 − ∫₀² f 로 한 단계 추가·같은 ★3 (2) f 를 이차 x²+2 로 내리면 g=√(x−2) 라 역시 직접 적분 불가·같은 골조 ★3 (3) f 의 식을 지우고 「증가함수, f(0)=2, f(2)=6」만 주면 0862 골조 추상도 상승."
```

### 서술형 주관식

```yaml
- id: RPM-CALC1-0879
  page: 134
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    그림의 이차함수 y=f(x)(y절편 3, x절편 1, 3)에 대하여 색칠한 도형(0≤x≤1 의 위쪽 부분과 1≤x≤3 의 아래쪽 부분)의 넓이. 서술형 단답.
  category: "그래프에서 f(x)=(x−1)(x−3) 결정 → ∫₀¹ f + |∫₁³ f| = 4/3 + 4/3"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선과 x축 사이의 넓이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x절편 1, 3 과 f(0)=3 에서 f(x)=(x−1)(x−3)=x²−4x+3. ∫₀¹ f = 4/3, [1,3] 아래 넓이는 1/6 공식으로 8/6 = 4/3, 합 8/3. 식 결정과 두 조각 절댓값 모두 표준 절차. 서술형 출발 ★3 이나 통찰 0·M_total 5 → −1 → ★2.
  tier: star_2
  mechanism_primary: "그래프 → f=(x−1)(x−3) → ∫₀¹ f + |∫₁³ f| = 4/3+4/3 → 8/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{8}{3}$'
  answer_source: "답지"
  figure: "crop:fig-0879.png"
  latex: latex-bank/rpm-calc1/items/0879.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x절편 p<q 와 y절편 k·pq 로 f=k(x−p)(x−q). 제약: 그림 라벨(3, 1, 3)을 바꾸면 그림도 바꿔야 하므로 라벨 고정 시 변형 불가 — 그림 없이 「x절편 1, 3, y절편 3」 문장형으로 옮기면 자유."
    creative: "(1) 색칠 범위를 [0,4] 로 늘리면 조각 셋 ★2 (2) 「y축·x=1 사이 넓이와 x축 아래 넓이가 같도록 하는 y절편」 역질문 ★3 (3) 이차 대신 삼차 x(x−1)(x−3) 으로 바꾸면 조각 부호가 바뀌고 계산 상승 ★2~3."
```

```yaml
- id: RPM-CALC1-0880
  page: 134
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "서술형 주관식"
  summary: |
    곡선 y=x³−5x²+4x 와 이 곡선 위의 점 (1,0) 에서의 접선으로 둘러싸인 도형의 넓이. 서술형 단답.
  category: "접선 y=−3x+3 → 차 (x−1)²(x−3) → ∫₁³ (x−1)²(3−x)dx = 4/3 (1/12 공식)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선과 접선으로 둘러싸인 넓이(1/12 공식)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f'(1)=−3 이라 접선은 y=−3x+3. f(x)−(−3x+3) = x³−5x²+7x−3 = (x−1)²(x−3) 이므로 다른 교점은 x=3, [1,3] 에서 접선이 위. 넓이 = ∫₁³(x−1)²(3−x)dx = 2⁴/12 = 4/3. 접점 중근 인수분해는 표준. 서술형·「중요」 ★3 출발·M_total 6 → ★3 유지.
  tier: star_3
  mechanism_primary: "f'(1)=−3 → 접선 y=−3x+3 → f−접선 = (x−1)²(x−3) → ∫₁³ = 4/3"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{4}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0880.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼차 x(x−1)(x−4) 꼴의 근과 접점 위치. 접점 x=p 에서 차함수 (x−p)²(x−q) 이고 넓이 (q−p)⁴/12 이므로 q−p 를 정수(2, 3)로 두면 답이 4/3, 27/4. 제약: 접점이 곡선 위의 점이고 q≠p."
    creative: "(1) 접선 대신 「점 (1,0) 을 지나는 직선 중 넓이가 최소인 것」 → 미분 결합 ★4 (2) 곡선 밖의 점에서 그은 접선으로 바꾸면 접점 t 설정 단계 추가 ★3 (3) 사차 곡선과 두 점에서 접하는 직선 → (x−p)²(x−q)² 적분 1/30 공식 ★3~4."
```

```yaml
- id: RPM-CALC1-0881
  page: 134
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    원점 출발 점 P 의 속도 v(t)=3t²+2t−k, t=1 에서의 위치가 −4 일 때 t=1 에서 t=3 까지의 위치의 변화량. 서술형 단답.
  category: "∫₀¹ v = 2−k = −4 → k=6 → ∫₁³(3t²+2t−6)dt = 22"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "속도와 위치의 변화량(미정 상수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    위치 x(1)=∫₀¹(3t²+2t−k)dt = 2−k = −4 → k=6. 변화량 = [t³+t²−6t]₁³ = 18−(−4) = 22. 미정 상수 결정과 정적분 두 단계뿐, 거리가 아니라 변화량이라 절댓값도 없음. 서술형 출발 ★3 이나 통찰 0·M_total 5 → −1 → ★2.
  tier: star_2
  mechanism_primary: "x(1)=2−k=−4 → k=6 → ∫₁³ v dt = 22"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$22$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0881.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "v=3t²+2t−k 의 계수와 x(1) 값을 바꾸면 k 가 선형으로 결정 — 항상 정수 가능. 제약: 변화량을 묻는 구간에서 v 의 부호가 바뀌어도 상관없지만, 「움직인 거리」로 바꿀 때는 근 t=(−1+√19)/3 ≈ 1.12 가 무리수라 절댓값 처리가 지저분해짐 → 거리 변형 시 k 를 조정해 v 의 근이 유리수가 되게."
    creative: "(1) 「위치의 변화량」을 「움직인 거리」로 바꾸고 k=5 (v=(3t+5)(t−1) · 근 1) 처럼 근이 유리수인 상수로 → 절댓값 분할 T-부호 ★3 (2) x(1) 대신 「t=1 에서 운동 방향을 바꾼다」로 k 를 주면 v(1)=0 조건 EQV d1 ★2 (3) 두 점 P, Q 로 확장해 0875 골조."
```

```yaml
- id: RPM-CALC1-0882
  page: 134
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    속도 v(t) 의 그래프(0≤t≤6 · 0→2 에서 0 부터 a 까지 상승, 2~4 에서 a, 4→6 에서 a 부터 −a 까지 하강, t=5 에서 0)가 주어지고 t=4 의 위치가 6 일 때 t=0 에서 6 까지 움직인 거리. 서술형 단답.
  category: "∫₀⁴ v = 사다리꼴 3a = 6 → a=2 → 거리 = 3a + a/2 + a/2 = 4a = 8"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "식 없는 그래프에서 위치 = 부호 있는 넓이, 거리 = 절댓값 넓이로 읽고, 미지 높이 a 를 사다리꼴 넓이 조건으로 결정하는 표현 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "속도 그래프와 위치·움직인 거리"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    [0,4] 넓이 = 삼각형 a + 직사각형 2a = 3a = 6 → a=2. [4,5] 는 +a/2, [5,6] 은 −a/2 이므로 거리 = 3a + a/2 + a/2 = 4a = 8 (변화량이라면 3a = 6). 그래프 읽기 RT d1 에 미지수 a 와 거리·변화량 구분(T-부호·T-경계). 서술형 ★3 출발·M_total 7 → ★3.
  tier: star_3
  mechanism_primary: "∫₀⁴ v = 3a = 6 → a=2 → ∫₀⁶|v| = 3a + a = 8"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$8$'
  answer_source: "답지"
  figure: "crop:fig-0882.png"
  latex: latex-bank/rpm-calc1/items/0882.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "위치 조건 6 → 3a 의 배수, 꼭짓점 시각(2, 4, 5, 6)을 바꾸면 조각 넓이 비가 달라짐. 제약: 그래프 라벨(a, −a, 2, 4, 5, 6) 고정 시 위치 값만 변경 가능(a 가 정수·분수 모두 허용)."
    creative: "(1) 「t=6 에서의 위치」와 「움직인 거리」를 나란히 묻는 두 소문항 서술형 ★3 (2) 위치 조건을 t=6 에서 주면 3a+a/2−a/2 = 3a 로 같은 식 — 대신 t=5 에서 주면 7a/2 ★3 (3) 「원점에서 가장 멀어지는 시각」을 묻기(v 부호 변화 t=5) EQV ★3."
```

### 실력 Up

```yaml
- id: RPM-CALC1-0883
  page: 134
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: ["교육청 기출"]
  category_type: "실력 Up"
  summary: |
    최고차항 계수 1 인 사차함수 f 의 그래프가 직선 y=x/2 와 원점에서 접하고 x>0 인 두 점 A, B (OA<OB) 에서 만난다. 곡선과 선분 OA 로 둘러싸인 넓이 S₁, 곡선과 선분 AB 로 둘러싸인 넓이 S₂ 에 대하여 AB=√5, S₁=S₂ 일 때 f(1). 5지선다.
  category: "f−x/2 = x²(x−α)(x−β) 설정 → AB=√5 ⟹ β−α=2 → S₁=S₂ ⟺ ∫₀^β x²(x−α)(x−β)dx=0 ⟹ 5α=3β → α=3, β=5 → f(1)=17/2"
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「원점에서 접하고 A, B 에서 만난다」를 차함수 f(x)−x/2 = x²(x−α)(x−β) (원점 중근 · 최고차항 1) 로 옮기는 조건 변환"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "S₁=S₂ 를 교점 사이 두 넓이의 개별 계산이 아니라 「[0,β] 전체에서 차함수의 부호 있는 정적분 = 0」으로 통합해 β⁴(5α−3β)/60 = 0 한 식으로 닫음"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "넓이가 같을 조건(정적분 0)과 접선 차함수 설정(사차)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    AB 는 기울기 1/2 직선 위 두 점이라 AB = (β−α)·√5/2 = √5 → β−α=2. ∫₀^β(x⁴−(α+β)x³+αβx²)dx = β⁴(5α−3β)/60 = 0 → 5α=3β, 따라서 α=3, β=5. f(1) = 1/2 + 1·(−2)(−4) = 17/2. 통찰 2개(EQV d1·d2)·매개변수 둘·5차 적분 정리(M_k 3). 실력 Up ★4 출발·+1 후보이나 ★5 조건(통찰 3·SC/VF/SYM/XU) 미달 → ★4.
  tier: star_4
  mechanism_primary: "f−x/2 = x²(x−α)(x−β) → AB=√5 ⟹ β−α=2 → ∫₀^β 차함수 = 0 ⟹ 5α=3β → (3,5) → f(1)=17/2"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "⑤"
  answer_source: "답지"
  figure: "crop:fig-0883.png"
  latex: latex-bank/rpm-calc1/items/0883.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선 기울기 1/2 → m 이면 AB = (β−α)√(1+m²) 라 AB 값을 그에 맞춰(예: m=1 → AB=2√2), 정적분 0 조건 5α=3β 는 기울기와 무관. 제약: β−α 와 5α=3β 가 동시에 정수해를 갖도록 β−α 를 2 의 배수로(β−α=4 → α=6, β=10). 최고차항 1·원점 접함 유지."
    creative: "(1) 사차 → 삼차 f−mx = x²(x−α) 로 내리면 잎이 하나라 S₁=S₂ 조건이 성립 불가 — 대신 「S₁ 의 값」을 묻는 ★3 (2) 접점을 원점이 아닌 (p, mp) 로 옮기면 평행이동으로 같은 골조·계산 상승 ★4 (3) S₁=S₂ 대신 S₁:S₂ 를 주면 교점 계산이 필요해 풀리지 않음 — 변형 금지 (4) AB 길이 대신 A 의 x좌표를 직접 주면 좌표 전환 단계가 빠져 ★3~4."
```

```yaml
- id: RPM-CALC1-0884
  page: 134
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    f(x)=−x(x−7) 과 0<t<7 에 대하여 x≤t 에서는 f(x), x≥t 에서는 기울기 −1 직선 −x+t+f(t) 로 정의된 g(x) 의 그래프와 x축으로 둘러싸인 도형의 넓이의 최댓값. 단답.
  category: "넓이 S(t) = ∫₀ᵗ f + f(t)²/2 (직각이등변삼각형) → S'(t) = f(t)(1+f'(t)) = 0 ⟺ f'(t)=−1 ⟺ t=4 → S(4)=320/3"
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "구간별 정의를 그림으로 읽어 영역이 「포물선 아래 [0,t] + 기울기 −1 직선이 만드는 직각이등변삼각형(밑변·높이 f(t))」임을 파악 → S(t) = ∫₀ᵗ f(x)dx + f(t)²/2 로 표현"
    - step: 2
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "정적분으로 정의된 넓이 함수의 최댓값을 도함수(05 단원)로 구함 — S'(t) = f(t){1+f'(t)} 로 보면 접선 기울기 −1 지점 t=4 가 바로 나오고, 사차식으로 전개해 미분해도 2t(t−4)(t−7)"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "구간별 정의 함수와 x축 사이 넓이의 최댓값"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    직선이 x축과 만나는 점은 x = t+f(t) 이므로 삼각형 넓이 f(t)²/2. S(t) = −t³/3 + 7t²/2 + t²(7−t)²/2 = t⁴/2 − 22t³/3 + 28t², S'(t) = 2t(t−4)(t−7) → 0<t<7 에서 t=4 극대. S(4) = 104/3 + 72 = 320/3. 영역 구조 읽기 RT d2 + 적분·미분 결합 XU d1, 매개변수 t 와 사차 미분(M_k 3). 실력 Up ★4 출발 → ★4.
  tier: star_4
  mechanism_primary: "영역 = ∫₀ᵗ f + f(t)²/2 → S'(t)=f(t)(1+f'(t))=0 → f'(t)=−1 ⟹ t=4 → 104/3+72 → 320/3"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{320}{3}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0884.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f(x)=−x(x−p) 의 p 와 직선 기울기 −m. 삼각형 넓이는 f(t)²/(2m), 최대 지점은 f'(t)=−m ⟺ t=(p+m)/2 이므로 p+m 이 짝수면 t 정수(p=7, m=1 → 4). 제약: 0<t<p 안에 극대가 있어야 하고 f(t)>0."
    creative: "(1) 직선 기울기를 −1 대신 −2 로 바꾸면 삼각형이 f(t)²/(2m) 꼴로 일반화·같은 골조 ★4 (2) 최댓값 대신 「S(t) 가 최대인 t」만 묻기 → 계산 부담 감소 ★3~4 (3) 직선을 접선(기울기 f'(t))으로 바꾸면 삼각형 높이·밑변이 접선식으로 바뀌어 넓이 함수가 달라짐·최대 지점 재계산 ★4 (4) 포물선을 x축과 만나지 않는 곡선으로 두면 영역이 닫히지 않음 — 변형 금지 지점."
```

```yaml
- id: RPM-CALC1-0885
  page: 134
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: ["평가원 기출"]
  category_type: "실력 Up"
  summary: |
    a≥0 에 대하여 속도 v(t)=−t(t−1)(t−a)(t−2a) 인 점 P 가 t=0 출발 후 운동 방향을 한 번만 바꾸도록 하는 a 에 대하여, t=0 에서 t=2 까지 위치의 변화량의 최댓값. 5지선다.
  category: "방향 전환 1회 ⟺ 양의 근 중 부호가 바뀌는 근이 하나 ⟹ 근 겹침 a∈{0, 1/2, 1} → 각 ∫₀² v 계산(−12/5, −11/15, 4/15) → 최대 4/15"
  M: {s: 3, k: 3, a: 2, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「방향을 한 번만 바꾼다」에서 근 0, 1, a, 2a 의 중복 구조를 역추적 — 양의 근 1, a, 2a 가 모두 다르면 세 번 바뀌므로 짝수 중근으로 두 개를 죽여야 함 ⟹ a=0(t=0 삼중근), a=1/2(t=1 이중근), a=1(t=1 이중근)"
    - step: 2
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "세 경우가 모두 유효하므로 각각 ∫₀² v 를 계산해 최댓값 비교 — u=t−1 치환으로 홀수 차 항을 소거하면 계산이 짧아짐(선택적 단축)"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "운동 방향 전환 횟수 조건과 위치의 변화량 최대"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    a=0: v=−t³(t−1), ∫₀² = −12/5. a=1/2: v=−t(t−1)²(t−1/2), ∫₀² = −11/15. a=1: v=−t(t−1)²(t−2), ∫₀² = 4/15. 최댓값 4/15. 조건 역추적(BW d2) 뒤 세 케이스 사차 적분(MI d1 · M_k 3), a=0 포함 여부(T-경계)와 짝수 중근 부호 판단(T-부호). 실력 Up ★4 출발·평가원 기출. +1 후보이나 ★5 조건(통찰 3 + SC/VF/SYM/XU) 미달 → ★4.
    [분류 이슈] t−1 치환 대칭을 SYM 으로 세면 통찰 3·SYM 포함으로 ★5 형식 조건이 충족되나 선택적 단축이라 제외 — ★4/★5 경계, ★4 로 기록.
  tier: star_4
  mechanism_primary: "방향 전환 1회 ⟹ a∈{0, 1/2, 1} → 각 ∫₀² v dt → −12/5, −11/15, 4/15 → 4/15"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0885.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근 구조 t(t−1)(t−a)(t−2a) 의 배율(예: (t−a)(t−3a) → a=0, 1/3, 1) 및 적분 구간 [0,2]. 제약: 후보 a 가 유한(근 겹침만)이어야 하고, 각 케이스 적분값이 서로 다른 유리수로 비교 가능. a≥0 을 a>0 으로 바꾸면 a=0 케이스가 빠져 답이 달라질 수 있음(여기선 최대가 a=1 이라 불변)."
    creative: "(1) 「방향을 세 번 바꾸도록 하는 a」로 열면 a 가 연속 범위(a≠0, 1/2, 1)가 되어 변화량이 a 의 이차식 → 최댓값은 미분 결합 ★5 후보 (2) 변화량 대신 「t=0~2 움직인 거리」로 바꾸면 절댓값 분할·케이스별 부호 검증 VF 성격 추가 ★5 (3) 속도를 삼차 −t(t−1)(t−a) 로 내리면 케이스가 a∈{0,1} 둘 ★3~4."
```

## 표본 판정 요약 (27문)

- ★ 분포: ★1 1 · ★2 13 · ★3 10 · ★4 3 · ★5 0
- 통찰형 8 · 절차형 19 · premium 0 (insights 가 있는 블록은 15 — 그중 d1 한 개뿐인 7문은 절차형으로 분류)
- 구역별: 유형 UP 12(6문) ★2 3 · ★3 3 / 시험에 꼭 나오는 문제(14문) ★1 1 · ★2 9 · ★3 4 / 서술형 주관식(4문) ★2 2 · ★3 2 / 실력 Up(3문) ★4 3
- type_hint 상위: 「역함수의 정적분(y=x 대칭 전환·∫f+∫g=bd−ac)」 4 · 「역함수와 원함수로 둘러싸인 넓이(y=x 대칭)」 3 · 「두 도형의 넓이가 같을 조건(정적분 0)」 2(+사차 접선 변형 0883 1) · 「속도 그래프와 위치·움직인 거리」 2 · 「곡선과 x축 사이의 넓이」 2 · 「포물선과 직선·접선 사이의 넓이(1/6 공식)」 2
- 통찰 유형(라벨 횟수): I-RT 7(역함수 전환 4 · 속도 그래프 2 · 0884 영역 읽기 1) · I-SYM 5 · I-EQV 4 · I-BW 1 · I-MI 1 · I-XU 1
- 대상층: 하위권 1 · 중하위권 9 · 중위권 13 · 중상위권 3 · 상위권 1
- 그림: 9문(`crop:fig-0860.png` · `crop:fig-0866.png` · `crop:fig-0871.png` · `crop:fig-0872.png` · `crop:fig-0873.png` · `crop:fig-0877.png` · `crop:fig-0879.png` · `crop:fig-0882.png` · `crop:fig-0883.png`)
- 전사 답 확인 필요: 없음(27문 모두 재계산 결과가 전사본 answer 와 일치)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-CALC1-0862 | 벤더 「중」이나 식 없는 일반 함수(Mₐ 3) + 그림 없이 대칭 그림을 스스로 세워야 하는 RT d2 → ★3 으로 두고 기록 | ★2 / ★3 |
| RPM-CALC1-0864 | 통찰 2개(SYM d1×2)로 +1 후보 조건은 만족하나 모두 d1 단축(둘째 잎은 직접 적분 가능) → ★3 유지 | ★3 / ★4 |
| RPM-CALC1-0865 | 시험 구역(★2~3)인데 절차 두 단계·통찰 0·M_total 4 → ★1 로 기록. 중근 접점 부호 판단만이 변별점 | ★1 / ★2 |
| RPM-CALC1-0885 | t−1 치환 대칭을 SYM 으로 세면 통찰 3·SYM 포함으로 ★5 형식 조건 충족 — 선택적 단축이라 제외하고 ★4 유지 | ★4 / ★5 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 「역함수의 정적분(∫f+∫g=bd−ac)」 4문(0861 · 0862 · 0863 · 0878)과 「역함수와 원함수로 둘러싸인 넓이」 3문(0859 · 0860 · 0864)은 RPM 유형 UP 12 한 제목 아래 있지만 골조(RT 직사각형 차 vs SYM 2배)가 달라 카탈로그에서는 두 유형으로 세우는 편이 변형에 유리하다. base ★ 는 구체 함수형 2~3 · 일반 함수·구간 대응형 3 정도로 갈린다.
- 「두 도형의 넓이가 같을 조건(정적분 0)」은 x축·직선 x=k(0872 ★2) → 두 곡선·교점 미지(0873 ★3) → 접선 차함수 사차(0883 ★4)로 한 유형의 깊이 사다리로 묶을 수 있다. 「넓이의 이등분」(0874)은 같은 유형의 SYM 변종.
- 「속도 그래프와 위치·거리」(0877 · 0882)와 「속도 식과 위치·거리」(0875 · 0876 · 0881)는 도구가 같아 통합 가능하나 그래프형은 RT 라벨이 붙으므로 sub-type 으로 구분한다.
- 「포물선과 직선·접선 1/6 공식」(0867 · 0870, 0866·0879 의 부분 단계)과 「곡선과 x축 사이 넓이」(0865 · 0879)는 09-p1·p2 의 기본 유형과 통합.
- 단독 유형: 0869 절댓값 곡선(세 조각) · 0871 접하는 두 곡선(판별식) · 0880 접선 1/12 공식 · 0884 넓이 함수 최대(적분+미분 XU) · 0885 방향 전환 횟수(BW+MI).
