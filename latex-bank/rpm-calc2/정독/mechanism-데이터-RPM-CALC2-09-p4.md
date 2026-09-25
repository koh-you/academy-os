---
name: mechanism-데이터-RPM-CALC2-09-p4
description: RPM 미적분Ⅱ 09 치환적분법과 부분적분법 (4/4 · 유형 UP 21~22 · 시험에 꼭 나오는 문제 · 서술형 주관식 · 실력 Up) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 미적분Ⅱ (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-calc2
  section: 09 치환적분법과 부분적분법
  unit_code: CALC2-09
  part: "4/4"
  extract_range: "146~150쪽 · 1035~1070"
  total_problems: 36
  unit_total: 129
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-calc2/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-calc2/items/<id>.tex
  image_source: latex-bank/rpm-calc2/figures/ (crops.json)
---

# RPM 미적분Ⅱ · 09 치환적분법과 부분적분법 (4/4) 정독 데이터 (v1.0)

이 파일은 RPM 미적분Ⅱ 09 치환적분법과 부분적분법의 4/4 — 146~150쪽 · 1035~1070 · 36문항 — 을 다룬다. 구역은 「유형 UP 21 삼각함수를 이용한 치환적분법」(4문) · 「유형 UP 22 부분적분법; 두 번 적용하는 경우」(4문) · 「시험에 꼭 나오는 문제」(21문) · 「서술형 주관식」(4문) · 「실력 Up」(3문)이다. 유형 UP 구역은 대표문제 뒤에 난이도 표시(중·상중)가 붙고 ★3 출발, 시험에 꼭 나오는 문제는 난이도 표시가 없어 ★2 출발(통찰 0·M_total ≤ 4 → ★1, M_total ≥ 7 또는 통찰 1개 이상·M_total 7 → ★3), 서술형 주관식은 ★3, 실력 Up 은 ★4 출발로 잡았다. 태그는 대표문제 2 · 서술형 1 · 중요 4 · 교육청 기출 2 이고, 그림은 1051 의 꺾은선 그래프 하나뿐이다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다. 통찰형은 14문(I-SC 4 · I-EQV 6 · I-RT 2 · I-SYM 2 · I-BW 1)이고 나머지 22문은 절차형이다. 삼각치환·부분적분 두 번·양변 미분처럼 이 단원에서 정형 절차로 가르치는 골조는 통찰로 세지 않았고, 갈래 선택(사분원 넓이 vs 치환 · 계수 비교 vs 부분적분 · 합쳐서 상쇄 vs 따로 계산)과 조건의 동치 변환(적분을 상수로 놓기 · (x−t) 분리 · (xf)' 인식 · f'/f 변수 분리)만 세었다. 전사본 answer 는 36문 모두 다시 풀어 일치를 확인했다.

## 문항 데이터

### 유형 UP 21 삼각함수를 이용한 치환적분법

```yaml
- id: RPM-CALC2-1035
  page: 146
  vendor_label: "유형 UP 21 삼각함수를 이용한 치환적분법"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형 UP"
  summary: |
    정적분 ∫_0^1 1/√(4−x²) dx 의 값. 5지선다.
  category: "x=2sinθ 치환 → 피적분 1 로 약분 · 구간 0~π/6 → π/6"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각치환 x=a sinθ · √(a²−x²) 꼴 정적분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x=2sinθ (0≤θ≤π/2) 로 두면 √(4−x²)=2cosθ, dx=2cosθdθ 라 피적분함수가 1 로 약분되고 구간이 0~π/6 으로 옮겨져 값은 π/6. 치환 규칙이 유형 제목에 그대로 있고 계산은 한 줄. 유형 UP 출발점 ★3 이나 통찰 0·M_total 4 → −1 로 ★2.
    [분류 이슈] 유형 UP 대표문항이지만 골조는 교과서 예제 수준 — 라벨 ★2 / 벤더 신호 ★3.
  tier: star_2
  mechanism_primary: "√(4−x²) → x=2sinθ 치환 → 피적분 1 · 구간 0~π/6 → π/6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1035.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "반지름 2 를 a 로, 상한 1 을 a·sin(특수각) (a/2 · a√2/2 · a√3/2) 로 바꿀 수 있음. 제약: 상한이 a 를 넘지 않고 θ 가 특수각(π/6·π/4·π/3)이 되어야 선택지가 π 의 유리수배로 정리됨."
    creative: "(1) 상한을 a 로 두고 ∫_0^a 1/√(a²−x²)dx=π/2 가 a 에 무관함을 묻기(★2 유지) (2) 피적분을 x/√(4−x²) 와 나란히 두어 로그·삼각치환 갈래를 고르게 하기(I-SC d1 ★3) (3) 피적분을 √(4−x²) 로 바꾸면 반각공식이 들어와 M_k 상승(1038 골조 ★3)."
```

```yaml
- id: RPM-CALC2-1036
  page: 146
  vendor_label: "유형 UP 21 삼각함수를 이용한 치환적분법"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    ∫_1^3 3/(x²+3) dx = kπ 일 때 상수 k 에 대해 k² 의 값.
  category: "x=√3 tanθ 치환 → 피적분 √3 상수 → 구간 π/6~π/3 → k=√3/6 → k²"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각치환 x=a tanθ · 1/(x²+a²) 꼴 정적분"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    x=√3tanθ 로 두면 x²+3=3sec²θ, dx=√3sec²θdθ 라 피적분함수가 √3 상수. x=1, 3 이 tanθ=1/√3, √3 → θ=π/6, π/3 이므로 값은 √3·π/6, k=√3/6, k²=1/12. 치환·약분·구간 변환·k² 추출 5단계에 √3 처리가 붙어 M_total 6. 통찰 없음. 유형 UP·중 출발 ★3 유지.
  tier: star_3
  mechanism_primary: "1/(x²+3) → x=√3tanθ → 피적분 √3 · 구간 π/6~π/3 → √3π/6 → k²=1/12"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{1}{12}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1036.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모 상수 3 을 a² (1·3·4) 로, 분자를 a 의 배수로, 구간 끝을 a·tan(특수각) 으로 바꿀 수 있음. 제약: 하한·상한이 모두 특수각 θ 에 대응해야 하고, k 가 무리수일 때는 k² 처럼 유리수로 묻는 장치를 유지해야 답이 깔끔함."
    creative: "(1) 상수 a 를 미지수로 두고 ∫_0^a a/(x²+a²)dx=π/4 가 a 에 무관함을 묻기(1037 골조 ★3) (2) 분자에 x 를 섞어 ln 치환과 tanθ 치환을 분리하게 하기(1061 골조 ★3) (3) 구간을 −a~a 로 두고 우함수 대칭으로 절반만 계산(I-SYM d1 ★3)."
```

```yaml
- id: RPM-CALC2-1037
  page: 146
  vendor_label: "유형 UP 21 삼각함수를 이용한 치환적분법"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    a>0 일 때 ∫_0^a 1/(a²+x²) dx = b. 상수 a, b 에 대해 4ab 의 값.
  category: "x=a tanθ 치환 → (1/a)∫dθ → b=π/(4a) → 4ab=π"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각치환 x=a tanθ · 1/(x²+a²) 꼴 정적분"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    x=a tanθ 로 두면 a²+x²=a²sec²θ, dx=a sec²θdθ 라 피적분함수가 1/a 상수. 상한 x=a 가 θ=π/4 이므로 b=π/(4a), 4ab=π. 매개변수 a 가 남아 b 가 a 의 식이 되지만 곱 4ab 에서 소거되게 설계됨. 통찰 없음·M_total 6 → 유형 UP·중 출발 ★3 유지.
  tier: star_3
  mechanism_primary: "x=a tanθ → 피적분 1/a · 구간 0~π/4 → b=π/(4a) → 4ab=π"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1037.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상한을 a√3 (θ=π/3) · a/√3 (θ=π/6) 로 바꾸거나 분자에 상수를 곱할 수 있음. 제약: 묻는 식이 ab 의 배수여야 a 가 소거되고, a>0 조건을 유지해 tanθ 의 부호 혼동을 막음."
    creative: "(1) b 를 주고 a 를 역으로 구하게 하기(I-BW d1 ★3) (2) 구간을 −a~a 로 두어 우함수 대칭 활용(I-SYM d1 ★3) (3) 피적분을 x/(a²+x²) 로 바꾸면 ln 치환으로 골조가 바뀌어 ★2."
```

```yaml
- id: RPM-CALC2-1038
  page: 146
  vendor_label: "유형 UP 21 삼각함수를 이용한 치환적분법"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    ∫_0^a √(a²−x²) dx = π 를 만족시키는 양수 a. 5지선다.
  category: "x=a sinθ 치환 → a²cos²θ 반각 → πa²/4=π → a=2 (또는 사분원 넓이)"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-SC
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "정적분을 반지름 a 사분원 넓이 πa²/4 로 읽는 기하 갈래와 x=a sinθ 치환 뒤 반각공식으로 계산하는 대수 갈래 중 선택"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각치환 x=a sinθ · √(a²−x²) 꼴 정적분"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    치환 갈래: x=a sinθ 로 √(a²−x²)dx=a²cos²θdθ, 반각공식으로 ∫_0^{π/2} a²(1+cos2θ)/2 dθ=πa²/4. 기하 갈래: y=√(a²−x²) 가 반지름 a 사분원이라 넓이 πa²/4. 어느 쪽이든 πa²/4=π → a=2. 반각공식이 붙어 M_total 7, 갈래 선택 SC d1. 유형 UP·상중 출발 ★3 유지.
  tier: star_3
  mechanism_primary: "∫_0^a √(a²−x²)dx = πa²/4 (사분원 · 또는 x=a sinθ+반각) → πa²/4=π → a=2"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1038.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 π 를 4π·π/4·9π/4 로 바꾸면 a=4·1·3. 제약: a²/4 이 우변의 π 계수와 맞아 a 가 양의 유리수(가능하면 정수)로 나오게 하고, 선택지에 a² 값(오답 4)을 넣어 구별."
    creative: "(1) 상한을 a/2 로 바꾸면 사분원이 아니라 부채꼴+삼각형이 되어 기하 갈래도 계산이 필요(I-RT d1 ★3~4) (2) ∫_{−a}^{a} 로 바꾸면 반원 넓이·우함수 대칭(I-SYM d1 ★3) (3) 피적분을 x√(a²−x²) 로 바꾸면 단순 치환으로 골조가 내려가 ★2."
```

### 유형 UP 22 부분적분법; 두 번 적용하는 경우

```yaml
- id: RPM-CALC2-1039
  page: 146
  vendor_label: "유형 UP 22 부분적분법; 두 번 적용하는 경우"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형 UP"
  summary: |
    f(x)=∫x(ln x)² dx 이고 f(1)=−1 일 때 f(e) 의 값. 5지선다.
  category: "부분적분 (u=(ln x)²) → 남은 ∫x ln x 다시 부분적분 → C 결정 → 대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부분적분 두 번 · 다항×(로그·지수·삼각)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    u=(ln x)², dv=x dx 로 (x²/2)(ln x)² − ∫x ln x dx, 남은 적분을 한 번 더 부분적분하면 (x²/2)ln x − x²/4. f(1)=1/4+C=−1 에서 C=−5/4, f(e)=e²/2−e²/2+e²/4−5/4=(e²−5)/4. 두 번 부분적분·상수 결정·대입 5단계에 분수 계수 정리가 붙어 M_total 6. 통찰 없음 → 유형 UP 출발 ★3 유지.
  tier: star_3
  mechanism_primary: "∫x(ln x)² = (x²/2)(ln x)² − ∫x ln x → (x²/2)(ln x)² − (x²/2)ln x + x²/4 + C → f(1)=−1 로 C → f(e)"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1039.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f(1) 의 값(−1·0·1/4)과 묻는 점(e·e²)을 바꿀 수 있고, 피적분을 x²(ln x)² 로 올리면 계수가 1/3·2/9·2/27 로 바뀜. 제약: f(1) 에서 로그항이 0 이 되어 C 가 한 줄로 나오게 하고, 선택지는 (e²−k)/4 꼴로 통일."
    creative: "(1) (ln x)² 을 ln x 로 낮추면 부분적분 한 번 ★2 (2) f(e)−f(1) 을 정적분 ∫_1^e x(ln x)²dx 로 묻기(★3 유지) (3) t=ln x 치환으로 ∫t²e^{2t}dt 로 바꾸는 갈래를 열어 두면 I-SC d1 ★3."
```

```yaml
- id: RPM-CALC2-1040
  page: 146
  vendor_label: "유형 UP 22 부분적분법; 두 번 적용하는 경우"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형 UP"
  summary: |
    ∫(x²−2x)eˣ dx = eˣf(x)+C 가 성립할 때 방정식 f(x)=4 의 양수해.
  category: "부분적분 두 번 → eˣ(x−2)² → f(x)=(x−2)² → (x−2)²=4 → 양수해 4"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-SC
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "부분적분을 두 번 하는 갈래와 양변을 미분해 f+f'=x²−2x 의 이차식 계수를 비교하는 갈래 중 선택(후자가 한 줄)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "부분적분 두 번 · 다항×(로그·지수·삼각)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    부분적분 갈래: (x²−2x)eˣ − ∫(2x−2)eˣ = (x²−2x)eˣ − (2x−2)eˣ + 2eˣ = eˣ(x−2)². 미분 갈래: 양변을 미분하면 (x²−2x)eˣ = eˣ(f+f') 이므로 f 를 이차식으로 두고 f+f'=x²−2x 의 계수 비교로 f=x²−4x+4. f(x)=4 에서 x=0, 4 중 양수 4 (x=0 기각은 T-범위). 갈래 선택 SC d1·M_total 6 → 유형 UP 출발 ★3 유지.
  tier: star_3
  mechanism_primary: "∫(x²−2x)eˣ = eˣ(x²−4x+4)+C (부분적분 2회 또는 f+f'=x²−2x 계수 비교) → (x−2)²=4 → x=4"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$4$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1040.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차식 x²−2x 를 x²+2x·x²−4x+2 등으로 바꾸면 f 는 (x²+bx+c) 에 대해 x²+(b−2)x+(c−b) 꼴의 역산. 제약: f(x)=k 가 정수해 두 개(하나는 0 이나 음수)를 갖도록 f 가 완전제곱식 또는 정수근 이차식이 되게 하고 양수 조건으로 하나만 남김."
    creative: "(1) f 를 삼차식으로 올리면 부분적분 세 번·계수 비교 3개(★3~4) (2) eˣ 를 e^{2x} 로 바꾸면 미분 갈래에서 2f+f' 가 되어 계수 비교가 덜 자명(★3 유지) (3) 방정식 대신 f(x) 의 최솟값을 묻기(★3 · 이차식 꼭짓점)."
```

```yaml
- id: RPM-CALC2-1041
  page: 146
  vendor_label: "유형 UP 22 부분적분법; 두 번 적용하는 경우"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    f(x)=∫eˣ sin x dx 이고 f(π/4)=0 일 때 f(π) 의 값. 5지선다.
  category: "부분적분 두 번 → 원래 적분 I 가 되돌아옴 → I 의 방정식 → C 결정 → 대입"
  M: {s: 2, k: 3, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부분적분 두 번 · 지수×삼각 (원래 꼴로 돌아오는 경우)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    I=∫eˣ sin x dx 를 두 번 부분적분하면 I = eˣ sin x − eˣ cos x − I 라 I=(eˣ/2)(sin x − cos x)+C. f(π/4) 에서 sin=cos 이므로 C=0 이 한 줄로 나오고 f(π)=(e^π/2)(0+1)=e^π/2. 되돌아오는 적분을 방정식으로 푸는 골조는 이 유형의 정형 절차이지만 부호·계수 처리가 다단계라 M_k 3. 통찰 없음·M_total 7 → 유형 UP·상중 출발 ★3 유지.
  tier: star_3
  mechanism_primary: "I=∫eˣ sin x = eˣ(sin x − cos x) − I → I=(eˣ/2)(sin x−cos x)+C → f(π/4)=0 → C=0 → f(π)=e^π/2"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1041.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "sin 을 cos 으로, eˣ 를 e^{−x}·e^{2x} 로 바꾸면 계수가 1/2 → 1/5 등으로 바뀜. 제약: 조건점은 sin=cos (π/4·5π/4) 이나 sin·cos 중 하나가 0 인 점으로 두어 C 가 즉시 결정되게 하고, 묻는 점의 삼각함숫값이 0·±1 이 되게 함."
    creative: "(1) 정적분 ∫_0^π eˣ sin x dx 로 바꾸면 C 단계가 빠져 ★3 유지(1063 골조) (2) f'(x)=eˣ sin x 의 극값을 묻는 문제로 바꾸면 부호 분석이 얹혀 ★3~4 (3) 피적분을 eˣ(sin x + cos x) 로 바꾸면 (eˣ sin x)' 임을 알아채는 갈래가 생겨 I-SC d1 ★3."
```

```yaml
- id: RPM-CALC2-1042
  page: 146
  vendor_label: "유형 UP 22 부분적분법; 두 번 적용하는 경우"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    정적분 ∫_0^{π/2} x² cos x dx 의 값.
  category: "부분적분 (u=x²) → [x² sin x] − 2∫x sin x → 다시 부분적분 → 값"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부분적분 두 번 · 다항×(로그·지수·삼각)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    u=x², dv=cos x dx 로 [x² sin x]_0^{π/2} − 2∫_0^{π/2} x sin x dx = π²/4 − 2([−x cos x]+∫cos x) = π²/4 − 2·1. 경계항이 π/2 에서 sin=1, cos=0 으로 깔끔히 정리되고 부호만 조심하면 됨. 두 번 부분적분·경계 대입 5단계로 M_total 6, 통찰 없음 → 유형 UP·상중 출발 ★3 유지.
  tier: star_3
  mechanism_primary: "∫x²cos x = x² sin x − 2∫x sin x → x sin x 는 −x cos x + sin x → π²/4 − 2"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{\pi^2}{4}-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1042.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "cos 을 sin 으로, 구간을 0~π 로, x² 을 (x−a)² 로 바꿀 수 있음. 제약: 구간 끝점에서 sin·cos 값이 0·±1 이 되어 경계항이 정리되게 하고, 답은 π²·π·상수의 합 꼴로 유지."
    creative: "(1) x³ 으로 올리면 세 번 부분적분·부호 관리(★3~4) (2) ∫_0^π x² cos x 처럼 x² sin x 경계항이 0 이 되는 구간을 골라 함정(T-경계) 추가 (3) 대칭 구간 −π/2~π/2 에서 x²cos x 가 우함수임을 써서 절반만 계산(I-SYM d1 ★3)."
```

### 시험에 꼭 나오는 문제

```yaml
- id: RPM-CALC2-1043
  page: 147
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    f'(x)=x(x²−1)⁴, f(1)=0 일 때 f(0) 의 값. 5지선다.
  category: "x²−1=u 치환 → (x²−1)⁵/10 + C → f(1)=0 → f(0)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "치환적분 부정적분 + 조건으로 적분상수 결정"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    u=x²−1 이면 du=2x dx 라 f=(x²−1)⁵/10+C. f(1)=C=0, f(0)=(−1)⁵/10=−1/10. 치환 한 번·상수 결정·대입 3단계, 계산 한 줄. 시험에 꼭 나오는 문제 출발 ★2 이나 통찰 0·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "u=x²−1 → f=(x²−1)⁵/10+C → C=0 → f(0)=−1/10"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1043.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 4 를 2·3·5 로, 안쪽 x²−1 을 x²+1·x³−1 (앞 인수 x²) 로 바꿀 수 있음. 제약: 앞 인수가 안쪽 도함수의 상수배여야 하고, 조건점에서 안쪽 식이 0 이 되어 C 가 바로 나오게 함."
    creative: "(1) f(0) 대신 f(√2)−f(0) 을 정적분으로 묻기(★1 유지) (2) f 의 극값·증감을 묻기(★2 · 부호 분석) (3) f'(x)=x(x²−1)⁴ 와 g'(x)=(x²−1)⁴ 를 나란히 두어 치환 가능 여부를 판단하게 하기(I-SC d1 ★2)."
```

```yaml
- id: RPM-CALC2-1044
  page: 147
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    f=∫e^{−x}dx, g=∫xe^{−x²}dx, h=∫x²e^{−x³}dx 가 f(0)=g(0)=h(0)=0 일 때 f(1), g(1), h(1) 의 대소 관계. 5지선다.
  category: "세 부정적분 각각 치환 → 상수 결정 → (1−1/e)·(1, 1/2, 1/3) 비교"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "치환적분 부정적분 + 조건으로 적분상수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f=−e^{−x}+1, g=−(1/2)e^{−x²}+1/2, h=−(1/3)e^{−x³}+1/3 이므로 f(1)=1−1/e, g(1)=(1−1/e)/2, h(1)=(1−1/e)/3. 공통 인수 1−1/e>0 이라 계수 1>1/2>1/3 순으로 h<g<f. 같은 치환을 세 번 반복하고 상수를 셋 결정해 단계는 많지만 새 착안은 없음. M_total 6·통찰 0 → ★2.
  tier: star_2
  mechanism_primary: "각각 u=−x, −x², −x³ 치환 → (1/n)(1−e^{−xⁿ}) 꼴 → x=1 에서 (1−1/e)(1, 1/2, 1/3) → h<g<f"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1044.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "비교점을 x=2 로 옮기거나 지수의 부호를 + 로 바꿀 수 있음(그러면 순서가 뒤집힘). 제약: 세 함수가 같은 공통 인수 (1−e^{−k}) 를 갖도록 비교점을 1 로 두는 편이 깔끔하고, 부호 뒤집힘(T-부호)을 의도한다면 선택지에 역순을 넣음."
    creative: "(1) 일반항 (1/n)(1−e^{−xⁿ}) 을 발견해 n 에 대한 단조성으로 묻기(I-PD d1 ★2~3) (2) 조건을 f(1)=g(1)=h(1) 로 바꾸어 f(0), g(0), h(0) 비교(★2) (3) 부정적분 대신 정적분 ∫_0^1 xⁿ⁻¹e^{−xⁿ}dx 의 대소(★2)."
```

```yaml
- id: RPM-CALC2-1045
  page: 147
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    f(x)=∫ sin(ln x)/x dx 이고 f(1)=1 일 때 f(e^π) 의 값. 5지선다.
  category: "t=ln x 치환 → −cos(ln x)+C → 조건으로 C 결정 → 대입"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "치환적분 부정적분 + 조건으로 적분상수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    t=ln x 면 dt=dx/x 라 ∫sin t dt=−cos(ln x)+C. f(1)=−1+C=1 에서 C=2, f(e^π)=−cos π+2=3. 치환·상수 결정·대입 3단계에 계산은 한 줄. 통찰 0·M_total 4 이지만 ln 치환이 1043 보다 한 겹 추상적이라 구역 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "t=ln x → −cos(ln x)+C → f(1)=1 로 C=2 → f(e^π)=3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1045.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "조건값 f(1)=1 과 묻는 점 e^π 를 e^{π/2}·e^{2π}·e^{3π/2} 로 바꿀 수 있음. 제약: ln 의 값이 사인·코사인 특수각이 되도록 e 의 거듭제곱 꼴을 유지하고, 선택지가 정수로 떨어지게 조건값을 잡음."
    creative: "(1) 피적분함수를 cos(ln x)/x 로 바꾸기(★2 유지) (2) 정적분 ∫_1^{e^π} 로 물어 적분상수 단계를 없애기(★1) (3) f 의 극값이나 f 가 증가하는 구간을 묻기(★3 · 부호 분석 추가)."
```

```yaml
- id: RPM-CALC2-1046
  page: 147
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    점 (π/2, 0) 을 지나는 곡선 y=f(x) 위의 점에서의 접선의 기울기가 sin²x·cos x 일 때 f(π) 의 값. 주관식.
  category: "접선의 기울기=f'(x) → u=sin x 치환 → sin³x/3+C → 지나는 점으로 C"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "치환적분 부정적분 + 조건으로 적분상수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    기울기 조건이 곧 f'(x)=sin²x cos x. u=sin x 로 f=sin³x/3+C, f(π/2)=1/3+C=0 에서 C=−1/3, f(π)=0−1/3=−1/3. 기울기→도함수 번역은 표준이라 통찰로 세지 않음. M_total 4·통찰 0 이나 「중요」 표시와 두 조건 처리로 구역 출발 ★2 유지.
  mechanism_primary: "접선 기울기=f' → u=sin x → sin³x/3+C → f(π/2)=0 로 C=−1/3 → f(π)=−1/3"
  tier: star_2
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-\dfrac{1}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1046.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지나는 점을 (0,0)·(π,1) 로, 기울기를 cos²x·sin x 나 sin³x·cos x 로 바꿀 수 있음. 제약: 앞 인수가 안쪽 함수의 도함수의 상수배여야 하고, 조건점의 삼각함숫값이 특수각이어야 C 가 유리수로 나옴."
    creative: "(1) f(π) 대신 f 의 최댓값을 묻기(★3 · 극값 분석) (2) 두 점을 지난다는 조건을 주고 미지 계수 a 가 붙은 기울기 a sin²x cos x 에서 a 를 묻기(★3 · Mₐ 상승) (3) 곡선과 x 축이 둘러싼 넓이로 확장(★3 · I-RT)."
```

```yaml
- id: RPM-CALC2-1047
  page: 147
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    f(x)=∫ 1/(x ln x) dx 이고 f(e)=e 일 때 f(e²) 의 값. 5지선다.
  category: "t=ln x 치환 → ln|ln x|+C → f(e)=e 로 C=e → f(e²)=ln 2+e"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "치환적분 부정적분 + 조건으로 적분상수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    t=ln x 면 dt=dx/x 라 ∫dt/t=ln|ln x|+C. f(e)=ln 1+C=C=e, f(e²)=ln 2+e. 로그 안에 로그가 다시 들어가는 표기(T-표기)만 주의하면 3단계 절차. 통찰 0·M_total 5 로 −1 후보이나 이중 로그 표기 함정 때문에 구역 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "t=ln x → ln|ln x|+C → f(e)=e 로 C=e → f(e²)=ln 2+e"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1047.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "조건점 e 와 묻는 점 e² 를 e²·e⁴ 나 √e·e 로 바꿀 수 있고 f(e)=e 의 값도 자유. 제약: 두 점 모두 ln x>0 인 쪽(x>1)에 두어 절댓값이 벗겨지게 하고, ln(ln x) 의 차가 ln(정수) 로 떨어지게 지수를 배수 관계로 잡음."
    creative: "(1) 피적분함수를 1/(x(ln x)²) 로 바꿔 −1/ln x 꼴 만들기(★2) (2) 정의역이 0<x<1 인 구간에서 물어 절댓값 처리를 강제(★3 · T-부호) (3) ∫_e^{e²} 정적분으로 바꿔 상수 단계를 없애기(★1)."
```

```yaml
- id: RPM-CALC2-1048
  page: 147
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    부정적분 ∫ 2/(4x²−1) dx 를 구하기. 주관식.
  category: "부분분수 분해 → 1/(2x−1) − 1/(2x+1) → (1/2)ln|(2x−1)/(2x+1)|+C"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부분분수 분해에 의한 유리함수의 적분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    2/((2x−1)(2x+1)) 을 1/(2x−1)−1/(2x+1) 로 가르면 각 항이 (1/2)ln|2x±1|. 합쳐 (1/2)ln|(2x−1)/(2x+1)|+C. 부분분수는 이 단원의 표준 절차라 통찰로 세지 않고, 내부 계수 2 때문에 1/2 배가 붙는 것(T-단위)만 함정. M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "부분분수 → 1/(2x−1)−1/(2x+1) → (1/2)ln|(2x−1)/(2x+1)|+C"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{2}\ln\left|\dfrac{2x-1}{2x+1}\right|+C$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1048.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자 2 와 분모의 계수(9x²−4, x²−9, 4x²−9)를 바꿀 수 있음. 제약: 분모가 실수 범위에서 두 일차식의 곱으로 인수분해돼야 하고, 분자를 두 인수의 차로 맞춰야 계수가 정수로 떨어짐."
    creative: "(1) ∫_1^2 로 정적분화해 ln 값의 계수 비교를 묻기(★2~3) (2) 분모를 4x²+1 로 바꿔 삼각치환 쪽으로 넘기기(★2 · 다른 유형) (3) 2/(4x²−1)=A/(2x−1)+B/(2x+1) 에서 A, B 를 먼저 묻는 소문항으로 쪼개기(★1)."
```

```yaml
- id: RPM-CALC2-1049
  page: 147
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    ∫_{−1}^{3} |(x−2)/(x+2)| dx = a ln 2 + b ln 5 + c 일 때 정수 a, b, c 에 대하여 a+b−c 의 값. 주관식.
  category: "x=2 에서 절댓값 분할 → (x−2)/(x+2)=1−4/(x+2) 로 분리 → 두 구간 적분 → 계수 비교"
  M: {s: 3, k: 3, a: 1, t: 2}
  M_total: 9
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "절댓값이 있는 유리함수의 정적분"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    구간 [−1,3] 에서 x+2>0 이라 부호는 x−2 만 바꾼다. [−1,2] 는 부호 반전, [2,3] 은 그대로. 가분수를 1−4/(x+2) 로 갈라 원시함수 x−4ln(x+2) 로 계산하면 16ln2−4ln5−2 이므로 a+b−c=14. 분할과 가분수 분리 모두 표준 절차라 통찰 0, 그러나 부호(T-부호)·경계(T-경계)와 계산량이 커 M_total 9 → ★3.
  tier: star_3
  mechanism_primary: "x=2 에서 절댓값 분할 → 1−4/(x+2) → x−4ln(x+2) 대입 → 16ln2−4ln5−2"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$14$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1049.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "적분 구간 [−1,3] 과 분수 (x−2)/(x+2) 의 두 상수를 바꿀 수 있음. 제약: 분모의 영점 −2 가 적분 구간 밖이어야 하고(구간 안이면 이상적분), 분자의 영점은 구간 안에 두어야 절댓값 분할이 의미를 가짐. ln 의 진수가 서로 다른 소수(2, 5)가 되게 끝점을 잡아야 a, b 가 유일하게 결정됨."
    creative: "(1) 절댓값을 분모에만 걸어 |x+2| 로 바꾸고 구간을 −2 를 지나게 하기(★4 · 정의 자체를 따져야 함) (2) a ln2+b ln5+c 대신 적분값 자체를 묻기(★3 유지) (3) ∫|f(x)|dx 와 |∫f(x)dx| 를 함께 묻는 비교 문항으로 확장(★3 · I-MI)."
```

```yaml
- id: RPM-CALC2-1050
  page: 148
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["교육청 기출"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    ∫_1^e (3/x + 2/x²)ln x dx − ∫_1^e (2/x²)ln x dx 의 값. 5지선다.
  category: "두 정적분을 합쳐 (2/x²)ln x 항 상쇄 → ∫_1^e (3/x)ln x dx → t=ln x"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "적분 구간이 같은 두 정적분을 먼저 하나로 합치면 부분적분이 필요한 (2/x²)ln x 항이 통째로 상쇄된다는 것을 본다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 정적분의 합·차에서 상쇄되는 항 찾기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    각각을 따로 계산하면 (2/x²)ln x 에 부분적분이 필요해 계산이 길어진다. 구간이 [1,e] 로 같으므로 먼저 합치면 ∫_1^e (3/x)ln x dx 만 남고, t=ln x 로 3[t²/2]_0^1=3/2. 상쇄를 먼저 보는 통찰 1개(EQV d1)뿐이고 남은 계산은 한 줄이라 M_total 5 → 구역 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "두 적분 합치기 → (2/x²)ln x 상쇄 → ∫_1^e (3/x)ln x dx → t=ln x → 3/2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1050.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상쇄되는 항 2/x² 와 남는 항 3/x 의 계수, 적분 구간 [1,e] 를 바꿀 수 있음. 제약: 두 적분의 구간이 완전히 같아야 상쇄가 성립하고, 남는 항은 t=ln x 치환 한 번으로 끝나는 꼴(k/x 또는 k ln x/x)이어야 ★2 가 유지됨."
    creative: "(1) 상쇄되는 항을 부분적분이 두 번 필요한 x²ln x 로 키워 「따로 풀면 못 푼다」를 강하게 하기(★3) (2) 두 적분의 구간을 [1,e] 와 [1,e²] 로 어긋나게 해 구간 가법성까지 쓰게 하기(★3 · 1054 골조와 결합) (3) 상쇄 후 남는 적분을 부분적분이 필요한 ln x 단독으로 바꾸기(★3)."
```

```yaml
- id: RPM-CALC2-1051
  page: 148
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    구간 [−1,2] 에서 정의된 y=f(x) 의 그래프(원점 왼쪽은 기울기 2 인 선분, [0,2] 에서는 상수 2)가 주어질 때 ∫_{−1}^{1} e^x f(x+1) dx 의 값. 주관식.
  category: "x+1=t 치환 → (1/e)∫_0^2 e^t f(t)dt → 그림에서 [0,2] 의 f 는 상수 2 → 2(e−1/e)"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "치환으로 적분 구간이 [0,2] 로 옮겨지므로 그래프에서 기울어진 부분 [−1,0] 은 전혀 쓰이지 않고 상수부 f=2 만 남는다는 것을 그림에서 읽어낸다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "그래프로 주어진 함수의 치환정적분"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    t=x+1 로 두면 ∫_{−1}^1 e^x f(x+1)dx=(1/e)∫_0^2 e^t f(t)dt 이고, 그림에서 [0,2] 의 f 는 상수 2 이므로 (2/e)(e²−1)=2(e−1/e). 그림의 선분 부분을 적분에 넣으려다 틀리는 것이 이 문항의 함정(T-범위)이라 구간 이동을 먼저 보는 표현 전환이 핵심. 통찰 1개(RT d2)·M_total 7 → ★3.
  tier: star_3
  mechanism_primary: "t=x+1 → (1/e)∫_0^2 e^t f(t)dt → f≡2 → (2/e)(e²−1)=2(e−1/e)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2\left(e-\dfrac{1}{e}\right)$'
  answer_source: "답지"
  figure: "crop:fig-1051.png"
  latex: latex-bank/rpm-calc2/items/1051.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "평행이동 폭(x+1 을 x+2 로), 상수부의 값 2, 그래프의 꺾이는 위치를 바꿀 수 있음. 제약: 그림 라벨(−1, 2, 2)은 그래프와 함께 움직여야 하고, 치환 뒤 구간이 상수부 안에 완전히 들어가야 ★3 골조가 유지됨."
    creative: "(1) 치환 구간이 꺾인 점을 걸치게 해 두 조각으로 나눠 적분하게 만들기(★4 · 분할 추가) (2) e^x 대신 f(x+1) 만 적분하게 해 넓이로 환원(★2) (3) f 의 식을 주지 않고 ∫_0^2 f(t)dt 값만 주어 e^t 와의 곱을 못 쓰게 하는 반례형 판단 문항(★4 · I-VF)."
```

```yaml
- id: RPM-CALC2-1052
  page: 148
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    ∫_1^e sin(π ln x)/x dx = k/π 일 때 상수 k 의 값. 5지선다.
  category: "t=ln x 치환 → 구간 [1,e]→[0,1] → ∫_0^1 sin(πt)dt=2/π"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "치환적분 정적분 · t=ln x 꼴"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    t=ln x 면 dt=dx/x 이고 구간이 [0,1] 로 바뀌어 ∫_0^1 sin πt dt=[−cos πt/π]_0^1=2/π 이므로 k=2. 치환과 동시에 적분 구간을 바꾸는 것(T-범위)만 주의하면 한 줄. 통찰 0·M_total 5 → 구역 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "t=ln x → ∫_0^1 sin πt dt → 2/π → k=2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1052.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "내부 계수 π 를 2π·π/2 로, 구간 끝 e 를 e² 로 바꿀 수 있음. 제약: 치환 뒤 구간 [0, ln(끝점)] 이 사인의 반주기 배수에 걸려야 값이 깔끔하고, 주기의 정수배가 되면 답이 0 이 되므로 선택지 설계에 주의."
    creative: "(1) sin 을 cos 으로 바꿔 답이 0 이 되게 하고 그 사실을 묻기(★2 · T-부호) (2) 구간을 [1, e²] 로 늘려 사인 한 주기를 넘기게 하기(★2) (3) 같은 치환으로 ∫_1^e |sin(π ln x)|/x dx 를 묻기(★3 · 절댓값 분할 추가)."
```

```yaml
- id: RPM-CALC2-1053
  page: 148
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    정적분 ∫_0^{π/2} sin³x dx 의 값. 5지선다.
  category: "sin³x=sin x(1−cos²x) 로 분리 → t=cos x 치환 → ∫_0^1 (1−t²)dt=2/3"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수의 홀수 거듭제곱 정적분(치환)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    sin 을 하나 떼어 sin x(1−cos²x) 로 만들면 t=cos x 치환이 바로 되고 구간이 [1,0] 으로 뒤집혀 ∫_0^1(1−t²)dt=2/3. 홀수 차 삼각함수의 표준 처리라 통찰로 세지 않고, 치환 시 구간이 뒤집히는 부호(T-부호)만 함정. M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "sin³x=sin x(1−cos²x) → t=cos x → ∫_0^1(1−t²)dt=2/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1053.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "차수를 5 로, 구간을 [0,π]·[π/2,π] 로 바꿀 수 있고 cos³x 로 바꿔도 같은 골조. 제약: 차수가 홀수여야 한 개를 떼는 치환이 성립하고, 짝수 차수로 바꾸면 반각공식 유형으로 골조가 완전히 달라짐."
    creative: "(1) sin⁴x 로 바꿔 반각공식 유형으로 넘기기(★3 · 다른 골조) (2) sin³x cos²x 처럼 두 인수 모두 넣어 어느 쪽을 떼야 하는지 고르게 하기(★3 · I-SC) (3) ∫_0^{π} sin³x dx 로 바꿔 대칭성으로 2배임을 쓰게 하기(★2~3 · I-SYM)."
```

```yaml
- id: RPM-CALC2-1054
  page: 148
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    f(x)=2x ln x 일 때 ∫_2^4 f(x)dx − ∫_3^4 f(x)dx + ∫_1^2 f(x)dx 의 값. 주관식.
  category: "구간의 가법성으로 ∫_1^3 f 하나로 통합 → 부분적분 → x²ln x − x²/2 대입"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "세 정적분을 각각 계산하지 않고 구간의 가법성으로 ∫_2^4−∫_3^4=∫_2^3 을 만든 뒤 ∫_1^2 와 이어 붙여 ∫_1^3 하나로 통합한다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "구간을 합쳐 계산하는 정적분 + 부분적분"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ∫_2^4−∫_3^4=∫_2^3 이고 여기에 ∫_1^2 를 붙이면 ∫_1^3. 부분적분으로 원시함수 x²ln x−x²/2 를 얻어 대입하면 9ln3−9/2+1/2=9ln3−4. 통합을 놓치면 ln2·ln3·ln4 가 뒤섞여 계산량이 세 배가 되는 것이 변별점. 통찰 1개(EQV d1)·M_total 7 → ★3.
  tier: star_3
  mechanism_primary: "∫_2^4−∫_3^4+∫_1^2=∫_1^3 → 부분적분 x²ln x−x²/2 → 9ln3−4"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$9\ln 3-4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1054.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 구간의 끝점(1,2,3,4)과 f(x)=2x ln x 의 계수를 바꿀 수 있음. 제약: 부호까지 포함해 끝점이 서로 상쇄되어 하나의 구간으로 이어져야 하고, 최종 구간의 끝점에서 ln 값이 한 종류(ln3)만 남게 잡아야 답이 깔끔함."
    creative: "(1) 네 개의 적분으로 늘려 상쇄 구조를 감추기(★3 유지 · Mₛ 상승) (2) f 를 그래프로만 주고 각 구간의 넓이를 수치로 제시해 통합만 묻기(★2) (3) 합친 구간이 f 의 정의역 밖으로 나가도록 끝점을 잡아 존재 여부를 따지게 하기(★4 · I-VF)."
```

```yaml
- id: RPM-CALC2-1055
  page: 148
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    f(x)=e^x − ∫_0^2 t f(t)dt 를 만족시키는 f 에 대하여 ∫_0^2 3x f(x)dx 의 값. 주관식.
  category: "∫_0^2 t f(t)dt=A 로 상수화 → f(x)=e^x−A → A=e²+1−2A → 구하는 값은 3A"
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "적분 구간이 상수인 ∫_0^2 t f(t)dt 는 x 와 무관한 상수이므로 A 로 놓아 f 를 A 의 식으로 쓴다"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "구하는 ∫_0^2 3x f(x)dx 가 바로 3A 이므로 f 를 다시 적분할 필요 없이 A 만 확정하면 끝난다"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "정적분으로 정의된 함수; 적분 구간이 상수인 경우"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    A=∫_0^2 t f(t)dt 로 두면 f(x)=e^x−A, A=∫_0^2 t(e^t−A)dt=(e²+1)−2A 에서 3A=e²+1. 구하는 값이 3A 그 자체이므로 답은 e²+1. 상수화와 「구하는 값=3A」 인식 두 통찰(EQV d1 ×2)·M_total 7 → ★3.
  tier: star_3
  mechanism_primary: "A=∫_0^2 t f(t)dt 상수화 → f=e^x−A → 3A=e²+1 → ∫_0^2 3x f dx=3A=e²+1"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$e^2+1$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1055.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "적분 구간 [0,2], e^x 의 자리에 들어갈 함수, 구하는 식의 계수 3 을 바꿀 수 있음. 제약: 상수화한 A 의 방정식이 1 차로 풀려야 하므로 t f(t) 안의 t 차수를 올리면 A 의 계수가 달라지는 점을 확인해야 하고, 계수를 3 이 아닌 값으로 두면 「구하는 값=kA」 의 깔끔함이 사라짐."
    creative: "(1) 구하는 식을 ∫_0^2 f(x)dx 로 바꿔 A 를 구한 뒤 한 번 더 적분하게 하기(★3 · 계산 추가) (2) 적분 구간을 [0,x] 로 바꿔 적분방정식 유형(1056)으로 넘기기(★4) (3) f(x)=e^x−k∫_0^2 t f(t)dt 에서 해가 존재하지 않는 k 를 묻기(★4 · I-VF)."
```

```yaml
- id: RPM-CALC2-1056
  page: 148
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    x>0 에서 미분가능한 f 가 ∫_1^x f(t)dt = x f(x) + x²e^{−x} 를 만족시킬 때 f(2) 의 값. 주관식.
  category: "양변 미분 → 곱의 미분에서 f 상쇄되어 f'(x)=(x−2)e^{−x} → x=1 로 f(1)=−1/e → f(2)=f(1)+∫_1^2 f'"
  M: {s: 3, k: 3, a: 3, t: 1}
  M_total: 10
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f 를 직접 구할 길이 없으므로 양변을 미분해 역추적하고, 우변 x f(x) 의 곱의 미분에서 f(x) 가 좌변과 상쇄되어 f' 만 남는 구조를 본다"
    - step: 2
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "원식에 x=1 을 넣어 얻은 f(1)=−1/e 와 f' 의 정적분을 결합해 f(2)=f(1)+∫_1^2 f'(x)dx 로 답을 만든다"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "적분방정식; 양변을 미분하는 경우"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    양변 미분하면 f(x)=f(x)+x f'(x)+(2x−x²)e^{−x} 이므로 f'(x)=(x−2)e^{−x}. 원식 x=1 에서 f(1)=−1/e. ∫_1^2 (x−2)e^{−x}dx 를 부분적분하면 −e^{−2} 이라 f(2)=−1/e−1/e². 역추적 미분·초기조건 결합 통찰 2개에 M_total 10 → 구역 출발 ★3 에서 +1 하여 ★4. [분류 이슈] 「시험에 꼭 나오는 문제」는 level 표시가 없어 출발점이 ★2~3 로 폭이 넓다 — ★3 과 ★4 사이.
  tier: star_4
  mechanism_primary: "양변 미분 → f 상쇄 → f'=(x−2)e^{−x} → x=1 로 f(1)=−1/e → f(2)=f(1)+∫_1^2 f'"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-\dfrac{1}{e^2}-\dfrac{1}{e}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1056.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "적분의 아래끝 1, 묻는 점 2, 잔여항 x²e^{−x} 의 차수와 부호를 바꿀 수 있음. 제약: 아래끝을 대입했을 때 좌변이 0 이 되어 초기조건이 한 줄로 나와야 하고, 미분 후 남는 f' 가 부분적분 한 번으로 적분되는 꼴이어야 ★4 를 넘지 않음."
    creative: "(1) f(2) 대신 f 의 극값이나 최솟값을 묻기(★4~5 · 부호 분석 추가) (2) 우변을 x f(x)+g(x) 로 두고 g 를 그래프로 주기(★4 · I-RT 결합) (3) 적분의 아래끝을 미지수 a 로 두고 f(2)=0 이 되는 a 를 묻기(★5 · I-BW d3)."
```

```yaml
- id: RPM-CALC2-1057
  page: 149
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    모든 실수 x 에 대하여 ∫_π^x (x−t)f(t)dt = sin x + ax + b 일 때 상수 a, b 에 대하여 ab 의 값. 주관식.
  category: "(x−t) 분리 → x∫f − ∫t f → 미분하면 ∫_π^x f=cos x+a → x=π 로 a=1 → 원식 x=π 로 b=−π"
  M: {s: 3, k: 2, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "(x−t)f(t) 를 그대로 미분할 수 없으므로 x∫_π^x f(t)dt − ∫_π^x t f(t)dt 로 갈라 x 를 적분 밖으로 빼내는 동치 변형이 선행되어야 한다"
    - step: 2
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "미분한 식과 원식에 각각 x=π 를 대입해 적분이 0 이 되는 점을 이용, a 와 b 를 차례로 확정한다"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "적분방정식; (x−t)f(t) 꼴 분리 후 두 번 미분"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    분리 후 미분하면 ∫_π^x f(t)dt = cos x + a 이고, x=π 를 넣어 a=1. 원식에 x=π 를 넣으면 0=sin π+aπ+b 에서 b=−π 이므로 ab=−π. 분리라는 동치 변형을 못 하면 미분 자체가 막히는 것이 핵심 변별점. 통찰 2개(EQV d2 + CON d1)·M_total 9 → ★4. [분류 이슈] 구역 출발점이 ★2~3 이라 라벨 ★4 는 상한 쪽 판단.
  tier: star_4
  mechanism_primary: "(x−t) 분리 → 미분해 ∫_π^x f=cos x+a → x=π 로 a=1 → 원식 x=π 로 b=−π → ab=−π"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1057.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "아래끝 π, 우변의 sin x, ax+b 의 자리를 바꿀 수 있음. 제약: 아래끝을 대입했을 때 좌변이 0 이 되어야 두 조건이 나오고, 우변을 두 번 미분한 것이 f(x) 이므로 우변은 두 번 미분 가능한 초월함수여야 함."
    creative: "(1) a, b 대신 f(x) 자체를 구하게 하기(★4 유지 · 두 번 미분) (2) 우변을 e^x+ax+b 로 바꿔 f(x)=e^x 가 되게 하기(★4) (3) ∫_0^x (x−t)f(t)dt 가 주어진 그래프의 넓이와 같다는 조건으로 바꾸기(★5 · I-RT+I-XU)."
```

```yaml
- id: RPM-CALC2-1058
  page: 149
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    0<x<2π 에서 f(x)=∫_0^x (1−sin t)cos t dt 의 극댓값을 a, 극솟값을 b 라 할 때 a²−b² 의 값. 주관식.
  category: "f'(x)=(1−sin x)cos x 이고 1−sin x ≥ 0 → 부호는 cos x 가 결정 → x=π/2 극대·3π/2 극소 → f(x)=sin x−sin²x/2"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "1−sin x 는 항상 0 이상이므로 f' 의 부호가 cos x 만으로 결정되고, sin x=1 이 되는 x=π/2 는 cos x=0 인 점과 겹쳐 극점 후보가 둘뿐임을 본다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "정적분으로 정의된 함수의 극값·최댓값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f'(x)=(1−sin x)cos x 에서 1−sin x ≥ 0 이므로 부호 변화는 cos x 만 담당해 x=π/2 극대, x=3π/2 극소. f(x)=sin x−sin²x/2 이므로 a=1/2, b=−3/2 이고 a²−b²=−2. 두 인수의 영점이 x=π/2 에서 겹치는 것(T-부호·T-경계)이 함정. 통찰 1개·M_total 8 → ★3.
  tier: star_3
  mechanism_primary: "f'=(1−sin x)cos x → 부호는 cos x → 극대 π/2·극소 3π/2 → f=sin x−sin²x/2 → a²−b²=−2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$-2$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1058.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 0<x<2π 와 피적분함수의 인수 (1−sin t) 의 상수 1 을 바꿀 수 있음. 제약: 상수를 1 보다 크게 하면 첫 인수가 부호를 바꾸지 않아 난도가 내려가고, 1 보다 작게 하면 영점이 늘어 극점 후보가 많아져 골조가 달라짐. 구간은 두 극점을 모두 담아야 함."
    creative: "(1) a²−b² 대신 f 의 최댓값·최솟값을 묻기(★3 유지 · 끝점 비교 추가) (2) 인수를 (1+sin t)cos t 로 바꿔 부호 상황을 뒤집기(★3) (3) (k−sin t)cos t 로 두고 극점이 세 개가 되는 k 의 범위를 묻기(★5 · I-MI+I-VF)."
```

```yaml
- id: RPM-CALC2-1059
  page: 149
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    x ≥ 0 에서 f(x)=∫_0^x (t√t − 6t + 5√t)dt 의 최솟값. 주관식.
  category: "f'(x)=√x(x−6√x+5)=√x(√x−1)(√x−5) → x=1 극대·x=25 극소 → 경계 f(0)=0 과 비교"
  M: {s: 3, k: 3, a: 1, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "√x 를 하나의 문자로 보아야 f'(x)=√x(√x−1)(√x−5) 로 인수분해되고 영점 x=0,1,25 가 드러난다"
    - step: 2
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "정의역이 x ≥ 0 이므로 극솟값 f(25) 가 곧 최솟값인지 경계값 f(0)=0 과 비교해 확정해야 한다"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "정적분으로 정의된 함수의 극값·최댓값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f'(x)=x√x−6x+5√x=√x(√x−1)(√x−5) 이므로 증가–감소–증가, 최솟값 후보는 f(0)=0 과 f(25). f(x)=(2/5)x^{5/2}−3x²+(10/3)x^{3/2} 에서 f(25)=1250−1875+1250/3=−625/3 이라 최솟값은 −625/3. √x 치환 인수분해와 경계 비교 두 통찰·M_total 9(분수 지수 계산이 무거움) → ★3.
  tier: star_3
  mechanism_primary: "f'=√x(√x−1)(√x−5) → x=25 극소 → f(0)=0 과 비교 → 최솟값 −625/3"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-\dfrac{625}{3}$'
  answer_source: "답지(쪽 렌더 · 답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-calc2/items/1059.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "√x 에 대한 인수 (√x−1)(√x−5) 의 두 근 1, 5 를 바꿀 수 있음. 제약: 두 근이 모두 양수여야 x ≥ 0 안에 극점이 생기고, 큰 근의 제곱이 지나치게 커지면 f 값 계산이 폭발하므로 5 이하로 유지. 분수 지수 계산이 정수·기약분수로 떨어지는지 확인 필요."
    creative: "(1) 최솟값 대신 f(x)=0 인 양수 x 의 개수를 묻기(★4 · I-VF 강화) (2) 정의역을 0 ≤ x ≤ 9 로 제한해 극점이 구간 밖으로 나가게 하기(★3 · 경계 판단이 본질) (3) √t 를 ∛t 로 바꿔 치환 문자를 학생이 정하게 하기(★4 · I-SC)."
```

```yaml
- id: RPM-CALC2-1060
  page: 149
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    lim_{x→1} (1/(x−1))∫_1^{x²}(cos πt + ln t)e^t dt 의 값. 5지선다.
  category: "F(u)=∫_1^u g 로 두고 분모를 x²−1 로 맞춤 → F'(1)·2 = 2g(1) = −2e"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "적분의 위끝이 x² 이므로 분모 x−1 을 x²−1 로 바꿔 미분계수 꼴을 만들고, 남은 (x²−1)/(x−1)→2 를 따로 곱한다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "정적분으로 정의된 함수의 극한(미분계수 꼴)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    F(u)=∫_1^u (cos πt+ln t)e^t dt 로 두면 주어진 식은 {F(x²)−F(1)}/(x²−1) · (x²−1)/(x−1) → F'(1)·2. F'(1)=(cos π+0)e=−e 이므로 답은 −2e. 위끝이 x 가 아니라 x² 이라 분모를 맞춰 주는 조작(T-범위)이 유일한 변별점. 통찰 1개·M_total 6 → ★3.
  tier: star_3
  mechanism_primary: "분모를 x²−1 로 맞춤 → F'(1)·2 → 2(cos π)e = −2e"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1060.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "위끝 x², 극한점 1, 피적분함수 (cos πt+ln t)e^t 를 바꿀 수 있음. 제약: 적분의 아래끝과 극한점이 같아야 0/0 꼴이 되고, 극한점에서 ln t 처럼 0 이 되는 항을 두면 계산이 한 줄로 끝남. 위끝을 x³ 로 하면 곱해지는 상수가 3 으로 바뀜."
    creative: "(1) 위끝을 x²+x−1 처럼 1 에서 값이 1 이 되는 다른 식으로 바꾸기(★3 유지 · 도함수 값이 곱해짐) (2) 아래끝을 x 로 두고 위끝을 x² 로 해 두 항의 미분계수를 합치게 하기(★4) (3) 극한값을 주고 피적분함수의 상수를 역으로 묻기(★4 · I-BW)."
```

```yaml
- id: RPM-CALC2-1061
  page: 149
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    ∫_0^{1/3} (3x−1)/(9x²+1) dx = ln2/a + π/b 일 때 유리수 a, b 에 대하여 a+b 의 값. 5지선다.
  category: "분자를 분모의 도함수 부분 3x 와 상수 −1 로 분리 → (1/6)ln(9x²+1) 와 3x=tanθ 치환 → ln2/6 + π/(−12)"
  M: {s: 3, k: 3, a: 1, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "분자 3x−1 을 분모의 도함수에 비례하는 3x 와 상수 −1 로 갈라 로그 꼴 적분과 삼각치환 꼴 적분 두 개로 나눈다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "유리함수 정적분 · 분자를 분모의 도함수로 분리 + 삼각치환"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    앞쪽은 (1/6)ln(9x²+1) 로 [0,1/3] 에서 (ln2)/6, 뒤쪽은 3x=tanθ 치환으로 (1/3)(π/4)=π/12 를 빼므로 결과는 ln2/6 − π/12. 꼴을 ln2/a+π/b 에 맞추면 a=6, b=−12 라 a+b=−6. b 의 부호를 놓치는 것(T-부호)이 오답 유도점. 통찰 1개·M_total 9 → ★3.
  tier: star_3
  mechanism_primary: "분자 분리 → (1/6)ln(9x²+1) − (1/3)·(3x=tanθ 치환) → a=6, b=−12 → a+b=−6"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1061.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자 3x−1 의 두 계수와 분모 9x²+1, 적분 구간 [0,1/3] 을 바꿀 수 있음. 제약: 위끝이 분모의 tanθ 치환에서 특수각(π/4·π/6)이 되게 잡아야 π 항이 깔끔하고, 로그 항의 진수가 정수가 되도록 끝점을 맞춰야 a 가 유리수로 결정됨."
    creative: "(1) 분모를 9x²−1 로 바꿔 부분분수 유형(1048)으로 옮기기(★2~3) (2) 분자를 3x+1 로 바꿔 b 가 양수가 되게 하고 부호 함정을 제거(★2) (3) a+b 대신 ab 나 a, b 의 존재 조건을 묻기(★4 · I-VF)."
```

```yaml
- id: RPM-CALC2-1062
  page: 149
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    x>0 에서 f(x)+x f'(x)=(ln x)² 이고 f(1)=2 일 때 f(e) 의 값. 5지선다.
  category: "좌변이 {x f(x)}' 임을 알아봄 → x f(x)=∫(ln x)²dx → 부분적분 두 번 → f(1)=2 로 C=0"
  M: {s: 3, k: 2, a: 3, t: 0}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f+x f' 을 곱의 미분 {x f(x)}' 로 되읽어야 양변을 적분할 수 있는 꼴이 된다 — 이 되읽기를 못 하면 f 를 구할 길이 없다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "곱의 미분을 역으로 읽는 적분(f+xf' 꼴)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    좌변이 {x f(x)}' 이므로 x f(x)=∫(ln x)²dx=x(ln x)²−2x ln x+2x+C. x=1 에서 2=2+C 라 C=0 이고, x=e 에서 e f(e)=e−2e+2e=e 이므로 f(e)=1. 통찰은 하나지만 depth 2(못 보면 완전히 막힘)이고 ∫(ln x)²dx 에 부분적분이 두 번 필요. M_total 8 → ★3. [분류 이슈] 착안 실패 시 0 점에 가까운 구조라 ★4 로 볼 여지가 있음.
  tier: star_3
  mechanism_primary: "f+x f'={x f}' → x f(x)=x(ln x)²−2x ln x+2x+C → C=0 → f(e)=1"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1062.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 (ln x)² 와 조건 f(1)=2, 묻는 점 e 를 바꿀 수 있음. 제약: 좌변은 반드시 f+x f' 형태를 유지해야 {x f}' 되읽기가 성립하고, 우변은 부분적분으로 초등함수 원시함수가 나오는 꼴이어야 함. 조건점은 x=1 로 두어야 x f(x)=f(1) 이 바로 나옴."
    creative: "(1) 좌변을 2x f(x)+x² f'(x)={x² f}' 로 바꿔 되읽기 난도를 한 단계 올리기(★4) (2) 우변을 그래프로 주고 f(e) 의 부호만 묻기(★3 · I-RT) (3) f(1) 조건을 빼고 f(e) 가 결정되지 않음을 판단하게 하기(★4 · I-VF)."
```

```yaml
- id: RPM-CALC2-1063
  page: 149
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    정적분 ∫_0^π e^{−x}cos x dx 의 값. 5지선다.
  category: "부분적분 두 번 → 원래 적분 I 가 되돌아옴 → I 에 대한 일차방정식으로 정리"
  M: {s: 3, k: 3, a: 1, t: 1}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부분적분 두 번 · 지수×삼각 (원래 꼴로 돌아오는 경우)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    유형 UP 22 의 1041 과 같은 골조라 이 단원에서는 이미 학습된 표준 절차로 보고 통찰로 세지 않았다. 원시함수가 e^{−x}(sin x−cos x)/2 이므로 값은 e^{−π}/2+1/2=(1+e^π)/(2e^π). 지수의 부호가 −x 라 부분적분마다 부호가 뒤집히는 것(T-부호)이 실수 지점이고 계산량이 큼. M_total 8 → 구역 출발 ★2~3 중 ★3.
  tier: star_3
  mechanism_primary: "부분적분 2회 → I=−e^{−x}cos x−…−I 꼴 → 2I 로 정리 → (1+e^π)/(2e^π)"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1063.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수의 계수 −1 과 삼각함수(cos↔sin), 적분 구간 [0,π] 를 바꿀 수 있음. 제약: 구간 끝에서 sin·cos 값이 0 이나 ±1 이 되어야 답이 깔끔하고, 지수 계수를 k 로 두면 되돌아온 적분의 계수가 1+k² 로 바뀌므로 선택지를 다시 계산해야 함."
    creative: "(1) ∫_0^π e^{−x}|cos x| dx 로 바꿔 절댓값 분할을 추가(★4) (2) 무한구간 대신 [0,2π]·[0,nπ] 로 두고 값의 규칙을 묻기(★4 · I-PD) (3) e^{−x}cos x 의 원시함수를 미리 주고 검증만 시키기(★1~2)."
```

### 서술형 주관식

```yaml
- id: RPM-CALC2-1064
  page: 150
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    0 ≤ x ≤ ln 3 에서 f(x)=∫ e^x√(e^x+1) dx 의 최솟값이 4√2/3 일 때 f(x) 의 최댓값. 주관식.
  category: "u=e^x+1 치환 → (2/3)(e^x+1)^{3/2}+C → 피적분함수>0 이라 증가 → 양 끝점이 최소·최대"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "피적분함수 e^x√(e^x+1) 이 항상 양수라 f 가 증가함수이므로 최솟값은 x=0, 최댓값은 x=ln 3 에서 나온다는 것을 먼저 확정한다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "치환적분으로 구한 함수의 최대·최소"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    u=e^x+1 로 두면 f=(2/3)(e^x+1)^{3/2}+C. f 가 증가하므로 최솟값 f(0)=(2/3)·2√2+C=4√2/3 에서 C=0 이고, 최댓값 f(ln3)=(2/3)·4^{3/2}=16/3. 증가 판정으로 끝점을 특정하는 통찰 1개·M_total 7 → 서술형 구역 출발 ★3 유지.
  tier: star_3
  mechanism_primary: "u=e^x+1 → (2/3)(e^x+1)^{3/2}+C → f 증가 → f(0) 로 C=0 → f(ln3)=16/3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{16}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1064.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간의 위끝 ln 3 과 최솟값 4√2/3 을 바꿀 수 있음. 제약: 위끝에서 e^x+1 이 완전제곱수(여기서는 4)가 되어야 3/2 제곱이 정수로 떨어지고, 최솟값 조건은 x=0 에서의 값과 모순이 없어야 함."
    creative: "(1) 최댓값을 주고 최솟값을 묻는 역방향(★3 유지) (2) 구간을 −ln2 ≤ x ≤ ln3 으로 넓혀 e^x+1 이 정수가 아닌 끝점을 만들기(★3 · 계산 부담) (3) 최댓값과 최솟값의 차가 주어졌을 때 위끝을 구하게 하기(★4 · I-BW)."
```

```yaml
- id: RPM-CALC2-1065
  page: 150
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    f'(x)=x e^{x²+k} 이고 곡선 y=f(x) 위의 두 점 P(0, f(0)), Q(1, f(1)) 을 잇는 직선의 기울기가 (e−1)/(2e⁵) 일 때 상수 k 의 값. 주관식.
  category: "기울기=f(1)−f(0)=∫_0^1 f'(x)dx → e^k(e−1)/2 → e^k=e^{−5}"
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 점을 잇는 직선의 기울기라는 기하 조건을 f(1)−f(0), 곧 ∫_0^1 f'(x)dx 라는 정적분으로 옮겨야 f 를 구하지 않고 풀린다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "평균변화율을 정적분으로 바꾸기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    기울기는 (f(1)−f(0))/(1−0)=∫_0^1 x e^{x²+k}dx=e^k[e^{x²}/2]_0^1=e^k(e−1)/2. 이것이 (e−1)/(2e⁵) 이므로 e^k=e^{−5}, k=−5. f 자체를 구하려 하면 e^{x²} 의 부정적분이 없어 막히는 것이 변별점(표현 전환 d2). M_total 7 → 서술형 구역 출발 ★3 유지.
  tier: star_3
  mechanism_primary: "기울기=∫_0^1 f'(x)dx=e^k(e−1)/2 → e^k=e^{−5} → k=−5"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$-5$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1065.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 점의 x 좌표 0, 1 과 기울기 (e−1)/(2e⁵) 를 바꿀 수 있음. 제약: x e^{x²} 처럼 앞 인수가 지수의 도함수의 상수배여야 치환이 되고, 두 점의 x 좌표를 0 과 1 로 두어야 e^{x²} 값이 1 과 e 로 깔끔함. 기울기 값은 e^k 이 e 의 정수 거듭제곱이 되게 잡음."
    creative: "(1) 기울기 대신 두 점을 지나는 직선의 y 절편을 주기(★4 · f(0) 도 필요) (2) f'(x)=x e^{x²+k} 와 평균값 정리를 엮어 기울기가 f'(c) 인 c 를 묻기(★4 · I-XU) (3) 기울기가 최소가 되는 k 를 묻기(★4 · I-BW)."
```

```yaml
- id: RPM-CALC2-1066
  page: 150
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    x>0 에서 f'(x)=(x−2)ln x 이고 f 의 극댓값이 3/4 일 때 f 의 극솟값. 주관식.
  category: "f'=0 은 x=1, 2 → 부호표로 x=1 극대·x=2 극소 → 부분적분에서 v=x²/2−2x 로 잡아 적분 → 극댓값 조건으로 C"
  M: {s: 3, k: 3, a: 1, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-SC
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "부분적분에서 v 를 x²/2 가 아니라 x²/2−2x 로 잡는 갈래를 고르면 남는 적분이 x/2−2 로 떨어져 계산이 절반으로 줄어든다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "부정적분으로 구한 함수의 극값(부분적분)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    0<x<1 에서 f'>0, 1<x<2 에서 f'<0, x>2 에서 f'>0 이라 x=1 극대·x=2 극소. f(x)=(x²/2−2x)ln x−x²/4+2x+C 에서 f(1)=7/4+C=3/4 이므로 C=−1 이고 f(2)=−2ln2+2. 두 인수의 영점이 모두 부호를 바꾸는지 확인하는 부호표(T-부호)와 v 선택 전략이 요점. 통찰 1개·M_total 8 → 서술형 출발 ★3 유지.
  tier: star_3
  mechanism_primary: "부호표로 x=1 극대·x=2 극소 → 부분적분 v=x²/2−2x → C=−1 → f(2)=−2ln2+2"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-2\ln 2+2$'
  answer_source: "답지(쪽 렌더 · 답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-calc2/items/1066.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f'(x)=(x−a)ln x 의 a 와 극댓값 3/4 를 바꿀 수 있음. 제약: a>1 이어야 극대·극소가 모두 생기고(a ≤ 1 이면 극값이 하나뿐), a 는 ln a 가 계산 가능한 값(2, e)으로 두어야 답이 깔끔함."
    creative: "(1) 극솟값을 주고 극댓값을 묻는 역방향(★3 유지) (2) 극댓값과 극솟값의 차를 묻기(★3 · 적분상수가 상쇄됨) (3) f'(x)=(x−a)ln x 에서 극값의 차가 주어졌을 때 a 를 구하게 하기(★5 · I-BW d2)."
```

```yaml
- id: RPM-CALC2-1067
  page: 150
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    미분가능한 f 가 모든 실수 x 에 대하여 f(x)=e^{−x}+x+∫_0^x f'(t)e^{−t}dt 를 만족시킬 때 f(x) 를 구하기. 주관식.
  category: "양변 미분 → f'(x)(1−e^{−x})=1−e^{−x} → f'(x)=1 → 원식 x=0 으로 f(0)=1 → f(x)=x+1"
  M: {s: 3, k: 2, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "양변을 미분한 뒤 f'(x) 항을 한쪽으로 모아 공통인수 1−e^{−x} 로 묶어야 f'(x)=1 이 나온다 — 나누기 전에 1−e^{−x} 이 0 이 되는 x=0 을 따로 확인해야 한다"
    - step: 2
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "f'(x)=1 로 얻은 f(x)=x+C 에 원식의 x=0 대입값 f(0)=1 을 결합해 적분상수를 확정한다"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "적분방정식; 양변을 미분하는 경우"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    미분하면 f'(x)=−e^{−x}+1+f'(x)e^{−x} 이므로 f'(x)(1−e^{−x})=1−e^{−x}, 곧 f'(x)=1. 원식에 x=0 을 넣으면 f(0)=1 이라 f(x)=x+1. 미지함수가 f' 로 양쪽에 모두 들어 있어 묶기 전에는 정리되지 않고, 공통인수가 x=0 에서 0 이 되는 경계(T-경계)까지 서술해야 하는 서술형. 통찰 2개·M_total 10 → 서술형 출발 ★3 에서 +1 하여 ★4.
  tier: star_4
  mechanism_primary: "양변 미분 → f'(1−e^{−x})=1−e^{−x} → f'=1 → x=0 로 f(0)=1 → f(x)=x+1"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$f(x)=x+1$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1067.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "e^{−x}+x 의 두 항과 적분 안의 e^{−t} 를 바꿀 수 있음. 제약: 미분 후 f' 의 계수로 나오는 인수와 상수항의 인수가 같아야 f' 가 상수로 떨어지고, 아래끝은 0 으로 두어야 x=0 대입이 초기조건을 바로 준다."
    creative: "(1) 적분 안을 f(t)e^{−t} 로 바꿔 미분 후 f 와 f' 의 관계식(미분방정식)이 되게 하기(★5) (2) f(x) 대신 f(1) 만 묻기(★3 · 서술 부담 감소) (3) 공통인수가 0 이 되는 점 때문에 해가 유일하지 않을 수 있는지 판단하게 하기(★5 · I-VF d2)."
```

### 실력 Up

```yaml
- id: RPM-CALC2-1068
  page: 150
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    연속함수 f 가 모든 실수 x 에 대하여 f(x)+f(−x)=2cos x−1 을 만족시킬 때 ∫_{−π}^{π} f(x)dx 의 값. 주관식.
  category: "치환 x→−x 로 ∫_{−π}^{π}f(−x)dx=∫_{−π}^{π}f(x)dx → 2I=∫_{−π}^{π}(2cos x−1)dx=−2π"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f 를 구하려 하지 않고, 적분 구간이 원점 대칭이라 ∫f(−x)dx=∫f(x)dx 임을 써서 주어진 합 조건을 통째로 적분해 2I 를 만든다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "대칭 조건 f(x)+f(−x) 를 이용한 정적분"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    I=∫_{−π}^{π}f(x)dx 라 하면 x→−x 치환으로 ∫_{−π}^{π}f(−x)dx=I 이므로 2I=∫_{−π}^{π}(2cos x−1)dx=0−2π. 따라서 I=−π. f 가 하나로 정해지지 않는데도 적분값은 결정된다는 구조가 핵심이고, 계산 자체는 두 줄뿐이다. 통찰 1개(SYM d2)·M_total 7 → 실력 Up 출발 ★4 유지. [분류 이슈] 노동량만 보면 ★2 급이라 라벨과 M 사이에 간격이 있음.
  tier: star_4
  mechanism_primary: "x→−x 치환 → ∫f(−x)=∫f(x) → 2I=∫_{−π}^{π}(2cos x−1)dx=−2π → I=−π"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1068.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 2cos x−1 의 계수와 적분 구간 [−π, π] 를 바꿀 수 있음. 제약: 구간이 원점 대칭이어야 치환 논법이 성립하고, 우변은 우함수여야 한다(기함수를 넣으면 조건 자체가 모순). 끝점은 cos 의 특수각으로 두어야 값이 깔끔함."
    creative: "(1) 조건을 f(x)−f(−x)=g(x) 로 바꿔 적분값이 0 으로 결정되는 구조를 묻기(★4 유지) (2) f(x)+f(2−x)=h(x) 처럼 대칭축을 x=1 로 옮기기(★5 · I-SYM d3) (3) 조건을 만족시키는 f 가 무수히 많음을 보이고 그중 연속인 예를 제시하게 하기(★5 · I-VF)."
```

```yaml
- id: RPM-CALC2-1069
  page: 150
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: ["교육청 기출"]
  category_type: "실력 Up"
  summary: |
    도함수가 연속인 f 가 ㈎ f(−x)=f(x) ㈏ f(x+2)=f(x) 를 만족시키고 ∫_{−1}^{5}f(x)(x+cos 2πx)dx=47/2, ∫_0^1 f(x)dx=2 일 때 ∫_0^1 f'(x)sin 2πx dx 의 값. 5지선다.
  category: "주기 2 로 [−1,5] 를 세 주기로 접음 → 우함수·기함수로 ∫x f=0 → ∫_0^1 f cos2πx=−1/12 → 부분적분으로 f' 를 f 로"
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - step: 1
      type: I-SYM
      depth: 3
      effective_depth: 3
      signal_ref: []
      description: "주기 2 를 써서 [−1,5] 를 [−1,1] 세 벌로 접고, 이동한 x 좌표의 합이 3x+6 이 되도록 정리해 하나의 기본 구간 적분으로 바꾼다"
    - step: 2
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f 가 우함수라 x f(x) 는 기함수이므로 ∫_{−1}^{1}x f(x)dx=0 이고, f(x)cos 2πx 는 우함수라 ∫_0^1 의 2배로 접힌다"
    - step: 3
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "구하는 ∫_0^1 f'(x)sin 2πx dx 를 부분적분해 경계항이 0 이 되고 −2π∫_0^1 f(x)cos 2πx dx 만 남게 만들어 앞에서 얻은 값에 연결한다"
  insight_count: 3
  depth_score: 2.33
  type_id: null
  type_hint: "주기·우함수 조건과 부분적분의 결합"
  base_star: null
  effective_star: 5
  star: 5
  premium: false
  rationale: |
    주기로 접으면 ∫_{−1}^{5}x f dx=∫_{−1}^{1}(3x+6)f dx=6·4=24 이고, ∫_{−1}^{5}f cos2πx dx=6∫_0^1 f cos2πx dx. 합이 47/2 이므로 ∫_0^1 f cos2πx dx=−1/12. 부분적분으로 ∫_0^1 f' sin2πx dx=−2π(−1/12)=π/6. 주기 접기·기함수 소거·부분적분 연결 세 통찰(SYM d3 · SYM d2 · RT d2)이 모두 필요하고 하나만 빠져도 답에 못 간다. 실력 Up 출발 ★4 에서 통찰 3개 + SYM 보유로 ★5.
  tier: star_5
  mechanism_primary: "주기 2 로 [−1,5]→[−1,1] 접기 → ∫x f=0 → ∫_0^1 f cos2πx=−1/12 → 부분적분 → π/6"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1069.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 [−1,5] 의 주기 수(3), 주어진 두 값 47/2 와 2, 삼각함수의 각 2πx 를 바꿀 수 있음. 제약: 구간 길이가 주기의 정수배여야 접기가 성립하고, 삼각함수의 주기는 f 의 주기 2 의 약수여야 같은 방식으로 접힌다. 부분적분의 경계항이 0 이 되도록 sin 을 써야 함(cos 으로 바꾸면 f(1)−f(0) 항이 남음)."
    creative: "(1) 조건 ㈎ 를 기함수 f(−x)=−f(x) 로 바꿔 어느 적분이 0 이 되는지 뒤집기(★5 유지) (2) 주기를 3 으로 두어 구간과 삼각함수 주기가 어긋나게 하기(★5 · 접기 실패를 판단해야 함) (3) ∫_0^1 f(x)dx 를 미지수로 두고 구하는 값이 결정되는지 여부를 묻기(★5 · I-VF)."
```

```yaml
- id: RPM-CALC2-1070
  page: 150
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    x>0 에서 미분가능한 f 가 f(x)>0 이고 2x f(x)−x=∫_1^x {f(t)−1}dt 를 만족시킬 때 f(4) 의 값. 5지선다.
  category: "양변 미분 → f(x)+2x f'(x)=0 → f'/f=−1/(2x) → f=C x^{−1/2} → 원식 x=1 로 f(1)=1/2"
  M: {s: 3, k: 2, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "적분방정식의 양변을 미분해 f 와 f' 사이의 관계식 f(x)+2x f'(x)=0 으로 바꾼다"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f+2x f'=0 을 f'(x)/f(x)=−1/(2x) 로 변수분리해 양변을 적분하면 ln f=−(1/2)ln x, 곧 f=C x^{−1/2} 꼴이 나온다 — f(x)>0 조건이 로그를 쓸 수 있게 해 준다"
    - step: 3
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "원식에 x=1 을 넣어 적분이 0 이 되는 점에서 f(1)=1/2 을 얻어 상수 C 를 확정한다"
  insight_count: 3
  depth_score: 1.33
  type_id: null
  type_hint: "적분방정식; 양변을 미분하는 경우"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    미분하면 2f+2x f'−1=f−1 이라 f+2x f'=0. f>0 이므로 f'/f=−1/(2x) 를 적분해 f=C/√x. 원식 x=1 에서 2f(1)−1=0 이라 f(1)=1/2 이므로 C=1/2 이고 f(4)=1/4. 변수분리로 넘어가는 표현 전환이 핵심이고 f(x)>0 조건이 로그 사용의 전제. 통찰 3개지만 SC/VF/SYM/XU 가 없어 ★5 조건 미달 → 실력 Up 출발 ★4 유지.
  tier: star_4
  mechanism_primary: "양변 미분 → f+2x f'=0 → f'/f=−1/(2x) → f=C/√x → f(1)=1/2 → f(4)=1/4"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1070.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "좌변의 계수 2, 아래끝 1, 묻는 점 4 를 바꿀 수 있음. 제약: 아래끝을 대입했을 때 좌변이 0 이 되어 f(아래끝) 이 바로 나와야 하고, 계수 2 를 k 로 두면 f=C x^{(1−k)/k} 가 되므로 묻는 점을 그 지수로 계산되는 수(제곱수·세제곱수)로 잡아야 함."
    creative: "(1) f(4) 대신 f 가 감소함을 보이거나 ∫_1^4 f 를 묻기(★4 유지) (2) f(x)>0 조건을 빼고 해가 여럿일 수 있는지 판단하게 하기(★5 · I-VF) (3) 우변을 ∫_1^x {f(t)−t}dt 로 바꿔 변수분리가 안 되는 형태로 만들고 다른 갈래를 찾게 하기(★5 · I-SC)."
```

## 표본 판정 요약 (36문)

- ★ 분포: ★1 1 · ★2 9 · ★3 20 · ★4 5 · ★5 1
- 통찰형 20 · 절차형 16 · premium 0
- 구역별: 유형 UP 21 삼각함수 치환 4(★2 1 · ★3 3) · 유형 UP 22 부분적분 2회 4(전부 ★3) · 시험에 꼭 나오는 문제 21(★1 1 · ★2 9 · ★3 9 · ★4 2) · 서술형 주관식 4(★3 3 · ★4 1) · 실력 Up 3(★4 2 · ★5 1)
- type_hint 상위: 「치환적분 부정적분 + 조건으로 적분상수 결정」 5(1043~1047) · 「부분적분 두 번 · 다항×(로그·지수·삼각)」 3(1039·1040·1042) · 「적분방정식; 양변을 미분하는 경우」 3(1056·1067·1070) · 「삼각치환 x=a tanθ · 1/(x²+a²) 꼴」 2(1036·1037)와 「삼각치환 x=a sinθ · √(a²−x²) 꼴」 2(1035·1038) · 「부분적분 두 번 · 지수×삼각(원래 꼴로 돌아오는 경우)」 2(1041·1063) · 「정적분으로 정의된 함수의 극값·최댓값」 2(1058·1059)
- 통찰 유형 분포(누적 라벨 기준): I-EQV 12 · I-SYM 3 · I-RT 4 · I-CON 3 · I-VF 2 · I-SC 1 · I-BW 1 · I-PD 0 · I-MI 0 · I-XU 0
- 그림: 1문(`crop:fig-1051.png`) — 나머지 35문은 발문에 구조가 다 들어 있어 크롭을 열지 않았다.
- 답 출처: 34문 「답지」 · 2문 「답지(쪽 렌더 · 답 크롭 없음)」(1059 · 1066). 전수 재계산 결과 전사 답과 모두 일치했다.

## 분류 이슈 목록

판정이 애매하거나 벤더 구역 신호와 M·I 판정 사이에 간격이 있어 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-CALC2-1056 | 「시험에 꼭 나오는 문제」는 level 표시가 없어 출발점이 ★2~3 로 폭이 넓다. M_total 10·통찰 2 로 ★4 를 달았으나 표준 적분방정식 유형이라는 점에서 ★3 여지 | ★3 / ★4 |
| RPM-CALC2-1057 | 같은 이유로 출발점이 넓다. (x−t) 분리 착안이 없으면 완전히 막히는 구조를 근거로 ★4 | ★3 / ★4 |
| RPM-CALC2-1062 | 통찰은 1개뿐이지만 depth 2 이고 {x f(x)}' 되읽기를 못 하면 0 점에 가깝다. 통찰 수 기준으로는 ★3, 체감 기준으로는 ★4 | ★3 / ★4 |
| RPM-CALC2-1068 | 실력 Up 구역이라 ★4 로 두었으나 M_total 7·풀이 두 줄로 노동량은 ★2 급. 대칭 착안 하나에 전부가 걸린 문항 | ★2 / ★4 |

카탈로그 차원 메모(나중에 미적분Ⅱ 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: ① 「적분방정식; 양변을 미분하는 경우」(1055·1056·1067·1070) — 적분 구간이 상수인 경우(1055)와 위끝이 x 인 경우(1056·1067·1070)는 첫 수가 완전히 다르므로 두 유형으로 분리. ② 「(x−t)f(t) 꼴 분리 후 두 번 미분」(1057)은 위의 적분방정식과 첫 단계가 달라 독립 유형. ③ 「곱의 미분을 역으로 읽는 적분(f+xf')」(1062)은 이 범위에 하나뿐이지만 다른 어떤 유형으로도 환원되지 않는 착안이라 독립 등재 권장.
- **통합해도 될 유형**: ① 1043~1047 의 「치환적분 부정적분 + 조건으로 적분상수 결정」 5문은 치환 대상(다항·ln x·sin x)만 다르고 골조가 같아 한 유형 + 치환 대상 파라미터로 묶는 것이 낫다. ② 「정적분으로 정의된 함수의 극값·최댓값」(1058·1059)과 「부정적분으로 구한 함수의 극값·최대·최소」(1064·1066)는 f' 가 어디서 오는지만 다르고 부호표–적분–조건 대입 골조가 동일하므로 상위 유형 하나 아래 두 변종으로 둘 수 있다. ③ 「부분적분 두 번」(1039·1040·1042)과 「부분적분 두 번 · 지수×삼각(원래 꼴로 돌아오는 경우)」(1041·1063)은 상위 유형은 같지만 후자는 방정식으로 푸는 마무리가 추가되므로 하위 변종으로 구분.
- **★5 자격 유형**: 이 범위에서 ★5 는 1069 하나이고, 근거는 통찰 3개 + I-SYM 보유다. 카탈로그 설계 시 「주기·대칭 조건 + 부분적분 결합」을 ★5 변별 슬롯 유형으로 등재할 것.
- 이 범위에서 I-XU·I-PD·I-MI 라벨은 한 번도 나오지 않았다. 미적분Ⅱ 09 단원은 단원 내부에서 닫히는 유형이 대부분이므로, ★5 슬롯을 늘리려면 다른 단원(수열의 극한·미분법)과 엮는 I-XU 문항을 별도로 설계해야 한다.
