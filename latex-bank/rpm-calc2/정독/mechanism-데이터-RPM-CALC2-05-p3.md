---
name: mechanism-데이터-RPM-CALC2-05-p3
description: RPM 미적분Ⅱ 05 여러 가지 미분법(3/3 · 유형 10~14 + 시험에 꼭 나오는 문제 + 서술형 주관식 + 실력 Up) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 미적분Ⅱ (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-calc2
  section: 05 여러 가지 미분법
  unit_code: CALC2-05
  part: "3/3"
  extract_range: "80~85쪽 · 0553~0592"
  total_problems: 40
  unit_total: 114
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-calc2/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-calc2/items/<id>.tex
  image_source: latex-bank/rpm-calc2/figures/ (crops.json)
---

# RPM 미적분Ⅱ · 05 여러 가지 미분법 (3/3) 정독 데이터 (v1.0)

이 파일은 RPM 미적분Ⅱ 05 여러 가지 미분법 단원의 마지막 범위(80~85쪽 · 0553~0592 · 40문항)를 다룬다. 앞 18문(0553~0570)은 「유형 10 매개변수로 나타낸 함수의 미분법」 4문 · 「유형 11 음함수의 미분법」 4문 · 「유형 12 역함수의 미분법」 3문 · 「유형 13 역함수의 미분법의 응용」 4문 · 「유형 14 로그미분법」 3문의 유형별 기본 문제이고, 뒤 22문은 「시험에 꼭 나오는 문제」 15문(0571~0585 · 중단원 종합) · 「서술형 주관식」 4문(0586~0589) · 「실력 Up」 3문(0590~0592)이다. 벤더 신호는 유형 구역의 「대표문제」 5(각 유형의 첫 문항 · level 없음) · level 중하 4 · 중 6 · 상중 3, 시험 구역의 「중요」 3(0574·0582·0583) · 「평가원 기출」 0576 · 「교육청 기출」 0584, 실력 Up 의 「수능 기출」 0592 이며, 그림은 0581(장대·직각삼각형)과 0591(원·현·각 θ) 두 문항이다.

출발점은 유형 구역 ★2(대표·level 없음·중 → ★2, 중하 → ★1~2, 상중 → ★3), 시험 구역 ★2~3, 서술형 ★3, 실력 Up ★4 이고 M_total·통찰로 ±1 조정했다. 적용 정책: 중하는 공식 한 줄이면 ★1(0558·0565), 두 기법이 사슬이면 ★2; −1 후보(통찰 0·M_total ≤ 5)는 골조가 교과서 예제 수준의 표준 두 단계일 때만 적용(0570·0586); 시험 구역은 통찰이 있거나 M_total 7 이상·세 기법이 사슬이면 ★3, 아니면 ★2; 실력 Up 3문은 통찰이 2개 이상이라 ★4 이고, 통찰 3·depth 3 인 0592 도 ★5 gate(통찰 3 이상 + SC/VF/SYM/XU)의 저노출 유형이 없어 ★4 에 머문다. 결과는 ★1 2 · ★2 22 · ★3 13 · ★4 3, 통찰형 10(0567·0575·0576·0577·0583·0588·0589·0590·0591·0592)이다. 답은 40문 모두 재계산해 전사 답과 일치함을 확인했다.

주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(유형 코드+depth+근거 · 절차형은 빈 배열) · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 창의 변형과 ★ 변동 지점)를 채웠다. 유형 카탈로그가 없는 과목이므로 `type_id`·`base_star` 는 null 이고 `type_hint` 로 유형명을 제안했다. 판정이 애매한 6문은 rationale 에 `[분류 이슈]` 를 적고 파일 끝 표에 모았다.

## 문항 데이터

### 유형 10 매개변수로 나타낸 함수의 미분법

```yaml
- id: RPM-CALC2-0553
  page: 80
  vendor_label: "유형 10 매개변수로 나타낸 함수의 미분법"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    매개변수 함수 $x=t^2$, $y=t^4+2t^3+t^2$ 에서 $t=1$ 일 때 $\dfrac{dy}{dx}$ 의 값. 5지선다.
  category: "dx/dt · dy/dt → 비 → t=1 대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "매개변수 함수의 미분법 — 주어진 t 에서 dy/dx 의 값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    dx/dt=2t, dy/dt=4t³+6t²+2t → dy/dx=(4t³+6t²+2t)/(2t) → t=1 에서 12/2=6. 도함수 둘·비·대입 네 단계(s=2)·다항식 계산뿐. 유형 대표문항(level 없음)·통찰 없음·M_total 5 → 유형 골조(두 도함수의 비)를 온전히 쓰므로 ★2 유지(−1 후보는 공식 한 줄일 때만 적용).
  tier: star_2
  mechanism_primary: "dx/dt=2t · dy/dt=4t³+6t²+2t → dy/dx=(dy/dt)/(dx/dt) → t=1 대입 → 6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0553.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x=t² 의 지수·계수, y 의 다항식 계수, 대입점 t=1(→ −1·2)을 바꿀 수 있음. 제약: dx/dt≠0 인 t 를 골라야 하고(t=0 금지) 선택지가 정수·간단한 유리수로 정리돼야 함. y 를 (t²+t)² 처럼 인수 형태로 주어도 골조 동일."
    creative: "(1) 값을 주고 t 를 역으로 묻기(dy/dx=6 인 t · 2t²+3t+1=6 이차 → ★2) (2) t 대신 x 좌표(x=1)만 주어 t=±1 두 갈래에서 부호 판단을 넣기(T-범위·MI 약 · ★3) (3) 매개변수를 소거해 y=x²+2x^{3/2}+x 로 직접 미분한 값과 비교하게 하면 SC d1 ★3."
```

```yaml
- id: RPM-CALC2-0554
  page: 80
  vendor_label: "유형 10 매개변수로 나타낸 함수의 미분법"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    $x=\tan\theta$, $y=\cos^2\theta$ 에서 $\theta\to\dfrac{\pi}{4}$ 일 때 $\dfrac{dy}{dx}$ 의 극한값(연속이라 $\theta=\dfrac{\pi}{4}$ 에서의 값). 주관식.
  category: "삼각 매개변수 → 도함수 비 → sec² 정리 → 대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "매개변수 함수의 미분법 — 삼각함수 매개변수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    dx/dθ=sec²θ, dy/dθ=−2sinθcosθ → dy/dx=−2sinθcosθ·cos²θ=−2sinθcos³θ → θ=π/4 에서 −2·(√2/2)·(√2/4)=−1/2. lim 은 dy/dx 가 θ=π/4 에서 연속이라 그냥 대입. 합성(cos²θ) 미분·sec² 를 1/cos² 로 바꿔 정리·대입 네 단계(s=2). 벤더 「중하」 → ★1~2 · 합성 미분·정리·대입이 사슬이라 ★2.
  tier: star_2
  mechanism_primary: "dx/dθ=sec²θ · dy/dθ=−2sinθcosθ → dy/dx=−2sinθcos³θ → θ=π/4 → −1/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0554.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "y 를 sin²θ·cos 2θ·sin 2θ 로, x 를 cot θ·sec θ 로, 대입각을 π/6·π/3 로 바꿀 수 있음. 제약: dx/dθ≠0 이고 대입각에서 두 도함수가 정의돼야 함(tan 은 π/2 금지). 답이 유리수·간단한 무리수로 떨어지게 각을 고름."
    creative: "(1) x=tanθ 를 그대로 두고 값을 x=1 로 주어 θ 를 역으로 찾게 하기(★2) (2) 극한을 θ→π/2 처럼 dx/dθ 가 발산하는 지점으로 두면 극한 처리(0 수렴) 판단이 추가(T-경계 · ★3) (3) y=cos²θ 를 x=tanθ 로 소거해 y=1/(1+x²) 임을 확인시키는 SC 비교(★3)."
```

```yaml
- id: RPM-CALC2-0555
  page: 80
  vendor_label: "유형 10 매개변수로 나타낸 함수의 미분법"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    $x=e^{3t}-3a$, $y=e^{2t}-ae^t$ 에서 $t=\ln 2$ 일 때 $\dfrac{dy}{dx}=2$ 가 되는 상수 $a$. 주관식(서술형 태그).
  category: "도함수 비 → e^{ln2}=2 대입 → a 일차방정식"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "매개변수 함수의 미분법 — 미정계수(지수 매개변수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    dx/dt=3e^{3t}, dy/dt=2e^{2t}−ae^t. t=ln 2 에서 e^t=2 → dx/dt=24, dy/dt=8−2a → (8−2a)/24=2 → a=−20. 도함수 둘·대입·일차방정식 네 단계(s=2), 함정은 e^{ln 2}=2 표기 하나. x 의 −3a 는 dx/dt 에서 사라지는 장식. 벤더 「중」·서술형 태그·통찰 없음·M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "dx/dt=3e^{3t} · dy/dt=2e^{2t}−ae^t → t=ln2(e^t=2) → (8−2a)/24=2 → a=−20"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-20$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0555.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 계수(3t·2t)와 대입점 ln2(→ ln3), 목표값 2 를 바꿀 수 있음. 제약: e^t 가 정수가 되는 대입점(ln k)이어야 하고 a 의 일차방정식 계수가 0 이 아니어야 함. x 의 상수항 −3a 는 미분에서 사라지므로 어떤 값이어도 무방(장식 유지 여부 선택)."
    creative: "(1) a 를 x 의 지수(e^{at})에 넣으면 a 가 분모에 들어가 유리방정식(★2~3) (2) 조건을 「접선이 직선 y=2x+1 과 평행」으로 바꿔 기울기를 읽게 하기(EQV 약 · ★2) (3) t 대신 x 의 값(x=8−3a)을 주어 t 를 먼저 찾게 하면 지수방정식 한 단계 추가(★3)."
```

```yaml
- id: RPM-CALC2-0556
  page: 80
  vendor_label: "유형 10 매개변수로 나타낸 함수의 미분법"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    $x=1+2\sin\theta$, $y=3-\cos\theta$ 위의 $\theta=\alpha$ 인 점에서의 접선이 직선 $y=-4x+3$ 과 수직일 때 $\sec^2\alpha$ 의 값. 주관식.
  category: "도함수 비 tanθ/2 → 수직 조건 기울기 1/4 → tanα=1/2 → 1+tan²"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "매개변수 곡선의 접선 기울기 조건(수직·평행) → 삼각함수 값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    dx/dθ=2cosθ, dy/dθ=sinθ → dy/dx=(1/2)tanθ. 기울기 −4 와 수직 → 접선 기울기 1/4 → tanα=1/2 → sec²α=1+tan²α=5/4. α 를 구하지 않고 항등식으로 넘어가는 것이 핵심이지만 표준 항등식이라 통찰로 세지 않음. 다섯 단계(s=2)·함정은 수직 조건의 부호(T-부호). 벤더 「상중」 → ★3 출발 · 통찰 0·M_total 5 라 −1 후보이나 매개변수 미분·수직 조건·항등식 세 가지가 사슬로 이어져 ★3 유지(★2 와 경계).
    [분류 이슈] 상중 ★3 과 실질 절차형 ★2 의 경계 — 카탈로그가 생기면 「접선 조건 → 삼각값」 유형의 base ★ 로 재판정.
  tier: star_3
  mechanism_primary: "dy/dx=sinθ/(2cosθ)=tanθ/2 → 수직 조건 기울기 1/4 → tanα=1/2 → sec²α=1+1/4=5/4"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{5}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0556.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "sin·cos 의 계수(2, 1)와 직선의 기울기 −4 를 바꿀 수 있음(tanα 가 유리수가 되도록). 제약: 수직 조건이면 기울기 곱 −1, 평행이면 같음 — 어느 쪽인지 문구와 답이 맞아야 함. 묻는 값은 sec²·csc²·tan² 처럼 tan 에서 항등식 한 번으로 닿는 것으로."
    creative: "(1) 「수직」을 「평행」으로 바꾸면 부호 함정이 빠져 ★2 (2) 접선이 원점을 지난다는 조건으로 바꾸면 접점 좌표까지 써야 해 방정식이 하나 늘어 ★3~4 (3) 매개변수를 소거하면 타원 (x−1)²/4+(y−3)²=1 임을 이용해 음함수 미분과 비교하게 하면 SC d1 ★3."
```

### 유형 11 음함수의 미분법

```yaml
- id: RPM-CALC2-0557
  page: 81
  vendor_label: "유형 11 음함수의 미분법"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    곡선 $x^3+2y^3-axy+b=0$ 위의 점 $(0,-1)$ 에서의 접선의 기울기가 2 일 때 상수 $a$, $b$ 의 곱 $ab$. 5지선다.
  category: "점 대입 → b · 음함수 미분 → 기울기 조건 → a"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "음함수의 미분법 — 미정계수(점 통과 + 접선 기울기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (0,−1) 대입 → −2+b=0 → b=2. 양변 미분 3x²+6y²y'−a(y+xy')=0 → (0,−1) 에서 6y'+a=0 → y'=−a/6=2 → a=−12 → ab=−24. 점 대입·미분·대입·곱 네 단계(s=2), 함정은 xy 의 곱의 미분(T-표기). 유형 대표·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "(0,−1) 대입 → b=2 · 음함수 미분 → 6y'+a=0 → y'=2 → a=−12 → ab=−24"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0557.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "점 (0,−1) 을 다른 격자점으로, 기울기 2 를 다른 정수로, 계수 2y³·axy 를 바꿀 수 있음. 제약: 점을 대입했을 때 b 가 바로 결정되고(x 좌표가 0 이면 a 항이 사라져 b 가 분리됨) 기울기 식이 a 의 일차식이어야 함. x 좌표를 0 이 아닌 값으로 두면 a, b 연립이 됨(난이도 ↑)."
    creative: "(1) 점의 x 좌표를 0 이 아니게 두어 a, b 연립(★3) (2) 접선이 「직선 x+2y=1 과 평행」으로 조건을 바꿔 기울기를 읽게 하기(★2) (3) 두 점에서의 기울기를 모두 주면 세 조건 두 미지수로 과잉 조건 검증(VF 약 · ★3)."
```

```yaml
- id: RPM-CALC2-0558
  page: 81
  vendor_label: "유형 11 음함수의 미분법"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    곡선 $2x-\sqrt{y}-3=0$ 위의 점 $(2,1)$ 에서의 접선의 기울기. 주관식.
  category: "음함수 미분(√y 사슬) → y' → 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "음함수의 미분법 — 한 점에서의 접선 기울기(무리식)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    2−y'/(2√y)=0 → y'=4√y → (2,1) 에서 4. (또는 y=(2x−3)² 로 풀어 y'=4(2x−3)=4.) 미분·정리·대입 세 단계(s=1)·계산 한 줄. 벤더 「중하」 → ★1~2 · 통찰 없음·M_total 4·공식 한 줄이라 ★1.
  tier: star_1
  mechanism_primary: "2−y'/(2√y)=0 → y'=4√y → y=1 → 4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$4$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0558.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 2·3 과 점 (2,1) 을 바꿀 수 있음(점이 곡선 위에 있도록 2x−3=√y 를 만족). 제약: y>0 인 점이어야 √y 의 미분이 정의됨. √y 를 ∛y 나 y^{3/2} 로 바꿔도 골조 동일."
    creative: "(1) 점의 x 좌표만 주어 y 를 먼저 구하게 하기(★1~2) (2) x 와 y 자리를 바꿔 x=√y 꼴을 역함수 미분(유형 12)으로도 풀 수 있게 하면 SC 비교(★2) (3) 접선의 방정식까지 묻고 x 절편을 구하게 하면 단계 추가(★2)."
```

```yaml
- id: RPM-CALC2-0559
  page: 81
  vendor_label: "유형 11 음함수의 미분법"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    방정식 $\pi y=x+\sin xy$ 에서 $x=0$ 일 때 $\dfrac{dy}{dx}$ 의 값. 5지선다.
  category: "x=0 → y=0 · 음함수 미분(sin xy 사슬+곱) → 대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "음함수의 미분법 — 삼각·곱 포함(x 값만 주어짐)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x=0 대입 → πy=sin 0=0 → y=0. 미분 πy'=1+cos(xy)(y+xy') → (0,0) 에서 πy'=1 → y'=1/π. y 를 먼저 찾는 단계·사슬+곱 미분·대입 네 단계(s=2). 함정은 sin(xy) 안쪽의 곱 미분(T-표기). 벤더 「중」·통찰 없음·M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "x=0 → y=0 · πy'=1+cos(xy)(y+xy') → (0,0) → y'=1/π"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0559.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "π 를 다른 상수로, sin xy 를 cos xy·e^{xy} 로, x=0 을 다른 x 로 바꿀 수 있음. 제약: 주어진 x 에서 y 가 하나로 결정돼야 함(x=0 이면 sin 0=0 이라 자동). sin xy 를 유지하면 x=0 에서 cos 0=1 로 깔끔."
    creative: "(1) x=0 대신 y=0 을 주어 x 를 먼저 찾게 하기(x=0 유일 · ★2) (2) 「x=0 일 때 y 가 하나뿐임」을 먼저 보이게 하면 논증 단계 추가(★3) (3) 접선의 방정식·법선까지 묻기(★2)."
```

```yaml
- id: RPM-CALC2-0560
  page: 81
  vendor_label: "유형 11 음함수의 미분법"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    방정식 $\ln xy=2x^2-1$ 에서 $\dfrac{dy}{dx}=0$ 을 만족시키는 양수 $x$, $y$ 의 값. 주관식.
  category: "로그 분리 → 음함수 미분 → y'=0 조건 → x → y 역대입"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "음함수의 미분법 — dy/dx=0 인 점 찾기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ln x+ln y=2x²−1 → 1/x+y'/y=4x → y'=y(4x−1/x). y>0 이므로 y'=0 ⇔ 4x=1/x → x=1/2(양수). 원식에 대입 ln(y/2)=−1/2 → y=2e^{−1/2}. 로그 분리·미분·y'=0 해석·역대입 네 단계(s=2). 함정은 x>0 만 취하기(T-범위)와 ln xy 분리(T-표기) 둘. 벤더 「중」·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "ln x+ln y=2x²−1 → 1/x+y'/y=4x → y'=0 ⇔ 4x²=1 → x=1/2 → 원식 역대입 → y=2e^{−1/2}"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$x=\dfrac{1}{2}$, $y=2e^{-\frac{1}{2}}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0560.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 2x²−1 의 계수·상수, 좌변 ln xy 를 ln(x²y) 로 바꿀 수 있음. 제약: y'=0 이 x 만의 방정식으로 떨어지고 양수 해가 하나여야 함. 상수항은 y 가 e 의 간단한 거듭제곱이 되도록 조정."
    creative: "(1) 「dy/dx=0」 을 「접선이 x 축과 평행」으로 바꿔 조건 해석을 넣기(EQV 약 · ★2) (2) 우변을 2x²+ln y 처럼 y 를 양쪽에 섞으면 y' 정리에 대수 부담 추가(★3) (3) y 를 x 의 식 y=e^{2x²−1}/x 로 먼저 풀어 직접 미분하는 갈래와 비교(SC d1 · ★3)."
```

### 유형 12 역함수의 미분법

```yaml
- id: RPM-CALC2-0561
  page: 81
  vendor_label: "유형 12 역함수의 미분법"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    $x=\dfrac{1}{e^y+e^{2y}}$ 에서 $x=\dfrac{1}{2}$ 일 때 $\dfrac{dy}{dx}$ 의 값. 5지선다.
  category: "x=1/2 → e^y 이차방정식 → y=0 · dx/dy → 역수"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "역함수의 미분법 — x=f(y) 꼴에서 dy/dx=1/(dx/dy) 의 값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x=1/2 → e^y+e^{2y}=2 → (e^y+2)(e^y−1)=0 → e^y=1 → y=0(e^y>0 이므로 −2 기각). dx/dy=−(e^y+2e^{2y})/(e^y+e^{2y})² → y=0 에서 −3/4 → dy/dx=−4/3. y 찾기(이차)·몫(또는 −f'/f²) 미분·역수 다섯 단계(s=2)·계산은 중간(k=2). 함정은 e^y>0 기각(T-범위)과 역수 표기(T-표기). 유형 대표·통찰 없음·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "x=1/2 → e^{2y}+e^y−2=0 → e^y=1 → y=0 · dx/dy=−(e^y+2e^{2y})/(e^y+e^{2y})² → −3/4 → dy/dx=−4/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0561.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모 e^y+e^{2y} 의 계수, x 의 값(1/2 → 1/6 이면 e^y=2 → y=ln2)을 바꿀 수 있음. 제약: e^y 의 이차방정식이 양의 근 하나만 갖도록(다른 근 음수) 하고 dx/dy 값이 유리수로 떨어지게 함."
    creative: "(1) x=1/2 대신 y=0 을 주면 이차방정식 단계가 빠져 ★1~2 (2) x=e^y+e^{−y} 처럼 두 양근이 생기게 하면 y 의 두 값 검증(VF d1 · ★3) (3) dy/dx 를 x 만의 식으로 나타내게 하면 e^y 를 x 로 되돌리는 대수 부담(★3)."
```

```yaml
- id: RPM-CALC2-0562
  page: 81
  vendor_label: "유형 12 역함수의 미분법"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    $x=\sqrt[3]{y^2+y}$ $(y>0)$ 에서 $\dfrac{dy}{dx}$ 를 $y$ 의 식으로 구하기. 5지선다.
  category: "x=f(y) 사슬 미분 → 역수 → 근호 꼴 정리"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "역함수의 미분법 — x=f(y) 꼴 dy/dx 의 식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    dx/dy=(1/3)(y²+y)^{−2/3}(2y+1) → dy/dx=3(y²+y)^{2/3}/(2y+1)=3∛((y²+y)²)/(2y+1). 미분·역수·근호 표기 세 단계(s=1)이나 분수 지수를 근호로 되돌려 선택지와 맞추는 처리가 붙음(k=2). y>0 은 2y+1≠0 을 보장. 벤더 「중하」 → ★1~2 · 사슬 미분과 역수, 표기 변환이 이어져 ★2.
  tier: star_2
  mechanism_primary: "dx/dy=(2y+1)/(3(y²+y)^{2/3}) → dy/dx=1/(dx/dy)=3∛((y²+y)²)/(2y+1)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0562.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 차수(3 → 2·4)와 안의 다항식(y²+y → y²+2y·y³+y)을 바꿀 수 있음. 제약: y>0 같은 범위로 dx/dy≠0 을 보장하고 선택지에 「분자·분모 뒤바뀜」「지수 2/3 vs −2/3」 오답이 자연스럽게 생기도록."
    creative: "(1) 특정 y(y=1)에서의 값을 묻는 수치형(★1) (2) 특정 x(x=∛2 → y=1)를 주어 y 를 먼저 찾게 하기(★2) (3) 양변을 세제곱해 x³=y²+y 로 음함수 미분하는 갈래와 비교(SC d1 · ★2~3)."
```

```yaml
- id: RPM-CALC2-0563
  page: 81
  vendor_label: "유형 12 역함수의 미분법"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    곡선 $x=\tan y$ $\left(-\dfrac{\pi}{2}<y<\dfrac{\pi}{2}\right)$ 위의 $x=1$ 인 점에서의 접선의 기울기. 주관식.
  category: "x=1 → y 찾기 → dx/dy=sec²y → 역수"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "역함수의 미분법 — x=f(y) 꼴 곡선의 접선 기울기(삼각)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x=1 → tan y=1 → 주어진 범위에서 y=π/4 유일. dx/dy=sec²y=1+tan²y=2 → dy/dx=1/2. sec²y 를 각도 대입 없이 1+tan²y=1+x² 로 읽으면 한 줄. y 찾기·미분·역수 세 단계(s=1~2)·계산 한 줄. 함정은 범위 −π/2<y<π/2 로 y 를 하나로 고정하는 것(T-범위). 벤더 「중」·통찰 없음·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "x=1 → tan y=1 → y=π/4 · dx/dy=sec²y=1+tan²y=2 → dy/dx=1/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0563.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x 의 값(1 → √3 이면 y=π/3, 0 이면 y=0)을 바꿀 수 있고 x=tan y 를 x=2tan y·x=tan 2y 로 확장 가능. 제약: 주어진 범위 안에서 y 가 하나로 정해져야 하고 sec²y 가 유리수로 떨어져야 함(tan y 가 0·±1·±√3)."
    creative: "(1) 범위 제한을 빼면 y 가 무수히 많아져 「기울기가 같음」 을 논증하는 문제로 바뀜(★3) (2) dy/dx 를 x 의 식 1/(1+x²) 로 나타내게 하면 역삼각 도함수 골조(★2~3) (3) x=tan y 대신 x=sin y 로 두면 범위·부호 판단이 붙어 ★3."
```

### 유형 13 역함수의 미분법의 응용

```yaml
- id: RPM-CALC2-0564
  page: 82
  vendor_label: "유형 13 역함수의 미분법의 응용"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    $f(x)=x^3+2x^2+3x-4$ 의 역함수를 $g(x)$ 라 할 때 $g'(2)$ 의 값. 5지선다.
  category: "f(a)=2 인 a 찾기 → f'(a) → g'(2)=1/f'(a)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "역함수의 미분법 — g'(k)=1/f'(a) (f(a)=k 인 a 를 먼저 찾기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    g'(2)=1/f'(a) 이고 f(a)=2 → a³+2a²+3a−6=0 → (a−1)(a²+3a+6)=0 → a=1(나머지 인수는 실근 없음). f'(x)=3x²+4x+3 → f'(1)=10 → g'(2)=1/10. 삼차방정식의 근 찾기가 실제 부담(k=2)이고 나머지는 공식. 유형 대표문항·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "f(a)=2 → a³+2a²+3a−6=0 → a=1 · f'(1)=10 → g'(2)=1/f'(1)=1/10"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0564.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼차식의 계수와 묻는 점 g'(2) 를 바꿀 수 있음. 제약: f(a)=k 의 실근이 정수 하나로 떨어져야 하고(나머지 이차 인수의 판별식<0) f' 가 항상 양수여야 역함수가 존재함 — 계수를 바꿀 때 f'=3x²+bx+c 의 판별식<0 을 확인."
    creative: "(1) f' 의 판별식이 양수가 되게 하면 역함수 존재 여부부터 따져야 해 ★3 (2) g'(2) 대신 (g∘g)'(2) 나 g''(2) 를 물으면 사슬이 하나 더(★3) (3) a 를 정수로 떨어지지 않게 두고 f(a)=2 를 그래프 교점으로 읽게 하면 RT d1 ★3."
```

```yaml
- id: RPM-CALC2-0565
  page: 82
  vendor_label: "유형 13 역함수의 미분법의 응용"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    미분가능한 $f(x)$ 의 역함수가 $g(x)$ 이고 $f(1)=5$, $f'(1)=\dfrac{1}{3}$ 일 때 $g'(5)$ 의 값. 주관식.
  category: "f(1)=5 → g(5)=1 → g'(5)=1/f'(1)"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "역함수의 미분법 — f(a)·f'(a) 가 직접 주어진 g'(f(a))"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f(1)=5 이므로 g(5)=1 → g'(5)=1/f'(g(5))=1/f'(1)=3. 공식 한 줄이고 방정식·계산이 없다. 함수가 구체식 없이 일반 f 로 주어져 추상도만 조금 올라감(a=2). 벤더 「중하」 → ★1~2 · 통찰 없음·M_total 5·단계 하나 → ★1.
  tier: star_1
  mechanism_primary: "f(1)=5 ⇒ g(5)=1 → g'(5)=1/f'(1)=1/(1/3)=3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0565.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f(1)=5 의 두 수와 f'(1)=1/3 을 바꿀 수 있음. 제약: f'(a)≠0 이어야 하고 역수가 간단한 값이 되도록 분수로 주는 편이 좋음. 묻는 점은 반드시 f(a) 값(여기선 5)이어야 하고 a 를 그대로 물으면 틀린 문제가 됨."
    creative: "(1) f(1)=5, f'(1)=1/3 과 함께 f(5)=2, f'(5)=4 를 더 주고 g'(2) 를 물어 짝 맞추기를 검증하게 하기(VF 약 · ★2) (2) g'(5) 대신 (f∘g)'(5) 를 물어 항등식 1 임을 보게 하기(★2) (3) g(5) 를 먼저 구하게 하는 2단 서술형(★2)."
```

```yaml
- id: RPM-CALC2-0566
  page: 82
  vendor_label: "유형 13 역함수의 미분법의 응용"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    $f$ 의 역함수 $g$ 에 대하여 $\displaystyle\lim_{x\to 1}\dfrac{g(x)-2}{x-1}=5$ 일 때 $f'(2)$ 의 값. 5지선다.
  category: "극한 → g(1)=2 · g'(1)=5 → f'(2)=1/g'(1)"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "역함수의 미분법 — 미분계수 정의형 극한으로 주어진 g'(a)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분모가 0 으로 가는데 극한이 유한하므로 분자도 0 → g(1)=2, 그러면 그 극한이 곧 g'(1)=5. g(1)=2 ⇔ f(2)=1 이므로 f'(2)=1/g'(1)=1/5. 분자 0 판정·미분계수 정의·역함수 공식 세 단계(s=2). 함정은 f'(2) 가 1/g'(2) 가 아니라 1/g'(1) 이라는 짝 맞추기(T-표기). 벤더 「중」·통찰 없음(미분계수 정의 읽기는 표준)·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "분모→0 이므로 g(1)=2 · 극한=g'(1)=5 → f(2)=1 → f'(2)=1/g'(1)=1/5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0566.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "극한값 5 와 g 의 값 2, 접근점 1 을 바꿀 수 있음. 제약: 극한식의 상수(여기 2)가 g(접근점) 과 같아야 분자가 0 으로 가고, 답의 짝은 f'(그 상수)=1/g'(접근점) 이라는 대응이 유지돼야 함."
    creative: "(1) f' 를 주고 극한값을 묻는 역방향(★2) (2) 극한을 lim (g(x)−2)/(x²−1) 처럼 분모를 바꿔 계수 보정 단계를 넣기(EQV d1 · ★3) (3) 「f(2)=1」 을 조건으로 주지 않고 g(1)=2 만으로 f'(2) 를 읽게 하는 현재 골조를 그대로 두되 f, g 를 뒤바꿔 묻기(★2)."
```

```yaml
- id: RPM-CALC2-0567
  page: 82
  vendor_label: "유형 13 역함수의 미분법의 응용"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    $f(x)=2x^3-1$ 의 역함수를 $g(x)$ 라 할 때 $\displaystyle\lim_{x\to 1}\dfrac{f(x)g(x)-1}{x-1}$ 의 값. 주관식.
  category: "h=fg 로 보고 h(1)=1 확인 → 곱의 미분 → f'(1)·g(1)+f(1)·g'(1)"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "분자 f(x)g(x)−1 을 h(x)=f(x)g(x) 의 x=1 에서의 미분계수 꼴로 옮기고 h(1)=f(1)g(1)=1 임을 먼저 확인 — 이 동치 변환 없이는 f, g 를 따로 미분할 근거가 없음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "역함수의 미분법 — f(x)g(x) 꼴 곱함수의 미분계수 극한"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f(1)=1 이고 f(a)=1 → 2a³=2 → a=1 이므로 g(1)=1 → 분자는 x→1 에서 0. 따라서 극한=(fg)'(1)=f'(1)g(1)+f(1)g'(1). f'(x)=6x² → f'(1)=6, g'(1)=1/f'(g(1))=1/6 → 6·1+1·(1/6)=37/6. 곱함수의 미분계수로 옮기는 동치 변환(EQV d2)이 골조이고 f(1)·g(1) 을 각각 확인하는 단계가 붙어 M_total 7. 벤더 「상중」 → ★3 출발 · 통찰 1 → ★3 유지. 통찰형.
  tier: star_3
  mechanism_primary: "f(1)=g(1)=1 → 분자 0 → 극한=(fg)'(1)=f'(1)g(1)+f(1)g'(1)=6+1/6=37/6"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{37}{6}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0567.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f 의 계수(2x³−1 → 3x³+1 등)와 접근점 x=1 을 바꿀 수 있음. 제약: 접근점 c 에서 f(c)g(c) 가 분자의 상수와 같아야(분자→0) 하고, f(a)=c 의 해 a 가 정수여야 g(c) 가 깔끔함. f' 가 부호를 바꾸지 않아야 역함수 존재."
    creative: "(1) 분자를 f(x)+g(x)−2 로 바꾸면 합의 미분이라 ★2~3 로 내려감 (2) f(x)/g(x) 꼴로 두면 몫의 미분이 추가돼 ★3~4 (3) f 를 구체식 없이 f(1)=1, f'(1)=6 만 주면 추상도가 올라 ★3(Mₐ 2)."
```

### 유형 14 로그미분법

```yaml
- id: RPM-CALC2-0568
  page: 82
  vendor_label: "유형 14 로그미분법"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    $f(x)=\dfrac{x(x-2)^2}{x^2+1}$ 에 대하여 $f'(1)$ 의 값. 5지선다.
  category: "양변 로그 → f'/f = 항별 합 → x=1 대입 → f(1) 곱"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그미분법 — 곱·몫·거듭제곱이 섞인 유리식의 미분계수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ln|f|=ln|x|+2ln|x−2|−ln(x²+1) → f'/f=1/x+2/(x−2)−2x/(x²+1). x=1 에서 1−2−1=−2 이고 f(1)=1·1/2=1/2 → f'(1)=−1. 로그 취하기·항별 미분·대입·f(1) 곱 네 단계(s=2)이고 분수 셋을 통분하는 계산이 붙음(k=2). 함정은 f'(1) 이 f'/f 의 값이 아니라 거기에 f(1) 을 곱한 값이라는 것(T-표기). 유형 대표문항·통찰 없음(로그미분법은 이 유형이 지정한 표준 절차)·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "ln|f|=ln|x|+2ln|x−2|−ln(x²+1) → f'/f=1/x+2/(x−2)−2x/(x²+1) → x=1 에서 −2 → f'(1)=f(1)·(−2)=−1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0568.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "인수의 지수(2), 인수 x−2 의 상수, 분모 x²+1, 대입점 x=1 을 바꿀 수 있음. 제약: 대입점에서 모든 인수가 0 이 아니어야 하고(x=0·x=2 금지) f(대입점) 과 f'/f 가 모두 유리수로 떨어져야 선택지가 깔끔함."
    creative: "(1) f'(1)/f(1) 만 물으면 마지막 곱이 빠져 ★1~2 (2) 분모를 (x−2)³ 처럼 같은 인수로 두어 지수가 상쇄되게 하면 약분 착안이 추가(SC d1 · ★3) (3) 몫의 미분법으로 직접 푸는 갈래와 비교시켜 로그미분법의 이득을 묻는 서술형(★3)."
```

```yaml
- id: RPM-CALC2-0569
  page: 82
  vendor_label: "유형 14 로그미분법"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    $y=x^{\ln x}$ 의 $x=e$ 에서의 미분계수. 5지선다.
  category: "양변 로그 → ln y=(ln x)² → 양변 미분 → y 곱 → x=e 대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그미분법 — 밑과 지수에 모두 x 가 있는 함수(x^{g(x)})"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ln y=(ln x)² → y'/y=2ln x·(1/x) → y'=x^{ln x}·2ln x/x. x=e 에서 x^{ln x}=e¹=e 이고 2ln e/e=2/e → y'=2. 로그 취하기·합성 미분·y 곱·대입 네 단계(s=2)이고 계산은 한 줄. 함정은 지수·밑에 모두 x 가 있어 지수법칙이나 x^n 공식을 그냥 쓰면 안 된다는 것(T-표기). 벤더 「중」·통찰 없음·M_total 5 → 로그미분법 골조를 온전히 쓰므로 ★2 유지.
  tier: star_2
  mechanism_primary: "ln y=(ln x)² → y'/y=2ln x/x → y'=x^{ln x}·2ln x/x → x=e 에서 e·(2/e)=2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0569.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수를 ln x → 2ln x·ln x² 로, 대입점을 e → e² 로 바꿀 수 있음. 제약: 대입점에서 x^{ln x} 가 e 의 정수 거듭제곱이 되도록(x=e^k) 고르고 선택지가 정수·e 의 거듭제곱으로 떨어지게 함."
    creative: "(1) y=x^{ln x} 를 e^{(ln x)²} 로 고쳐 쓰고 합성함수 미분으로 푸는 갈래와 비교(SC d1 · ★3) (2) y'=0 인 x 를 묻기(x=1 · ★2) (3) 접선이 원점을 지나는 점을 묻기(★3~4)."
```

```yaml
- id: RPM-CALC2-0570
  page: 82
  vendor_label: "유형 14 로그미분법"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    $f(x)=x^x\ (x>0)$ 에 대하여 $\displaystyle\lim_{x\to 2}\dfrac{f(x)-4}{x-2}$ 의 값. 주관식.
  category: "극한=f'(2) 판정 → 로그미분법 → 대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그미분법 — x^x 꼴의 미분계수(정의형 극한)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f(2)=2²=4 이므로 주어진 극한은 미분계수 f'(2) 그대로. ln f=x ln x → f'/f=ln x+1 → f'(x)=x^x(ln x+1) → f'(2)=4(ln 2+1). 극한 판정·로그미분법·대입 세 단계(s=2)로 교과서 예제 수준의 표준 골조이고 계산이 한 줄. 벤더 「상중」 → ★3 출발이나 통찰 0·M_total 5·표준 두 단계라 −1 을 적용해 ★2.
    [분류 이슈] 벤더 「상중」(★3)과 판정 ★2 가 1단 어긋남 — 「x^x 로그미분」 유형의 base ★ 가 정해지면 재판정.
  tier: star_2
  mechanism_primary: "f(2)=4 ⇒ 극한=f'(2) · ln f=x ln x → f'=x^x(ln x+1) → f'(2)=4(ln 2+1)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4(\ln 2+1)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0570.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑·지수 조합(x^x → x^{2x}·(2x)^x)과 접근점 x=2(→ 1·e)를 바꿀 수 있음. 제약: 분자의 상수가 반드시 f(접근점) 과 같아야 극한이 미분계수가 됨(여기선 2²=4) — 이 값을 바꾸면 극한이 발산해 문제가 깨진다."
    creative: "(1) 분자의 상수를 f(2) 와 다르게 두고 「극한이 존재하도록 하는 상수」 를 묻는 역방향(BW d1 · ★3) (2) x^x 의 최솟값(x=1/e)을 묻는 증감 문제로 확장(★3) (3) x^x 와 x^{1/x} 두 함수의 미분계수를 비교시키는 서술형(★3)."
```

### 시험에 꼭 나오는 문제

```yaml
- id: RPM-CALC2-0571
  page: 83
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    $f(x)=\dfrac{1+\sin x}{\cos x}$ 에 대하여 $\displaystyle\lim_{x\to -\frac{\pi}{2}}f'(x)$ 의 값. 5지선다.
  category: "몫의 미분 → 삼각 항등식 정리 → 약분 → 극한"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수 몫의 미분 → 항등식 약분 후 극한"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(x)=[cos²x+sin x+sin²x]/cos²x=(1+sin x)/cos²x=(1+sin x)/((1−sin x)(1+sin x))=1/(1−sin x). x→−π/2 에서 sin x→−1 → 1/2. 약분 전에 그냥 대입하면 0/0 이 되므로 cos²x=1−sin²x 로 고쳐 약분하는 것이 핵심이지만 표준 인수분해라 통찰로 세지 않음. 몫미분·항등식·약분·극한 네 단계(s=2)·계산 중간(k=2). 시험 구역 첫 문항·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "f'=(1+sin x)/cos²x → cos²x=(1−sin x)(1+sin x) 약분 → f'=1/(1−sin x) → sin x→−1 → 1/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0571.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자의 1+sin x 를 1−sin x·1+cos x 로, 극한점을 π/2 로 바꿀 수 있음. 제약: 약분이 되려면 분자의 인수가 cos²x=1−sin²x 의 한 인수와 같아야 하고, 극한점은 약분 뒤 분모가 0 이 아닌 쪽이어야 함(1+sin x 를 쓰면 x→−π/2, 1−sin x 를 쓰면 x→π/2)."
    creative: "(1) 극한점을 반대쪽(π/2)으로 두면 약분해도 분모가 0 이 되어 발산 판정 문제로 바뀜(T-경계 · ★3) (2) f(x)=tan x+sec x 로 고쳐 쓰고 미분하는 갈래와 비교(SC d1 · ★3) (3) f'(x)=1/(1−sin x) 임을 보인 뒤 f' 의 최솟값을 묻기(★3)."
```

```yaml
- id: RPM-CALC2-0572
  page: 83
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    $f(x)=\dfrac{3x^5-2x^3-5}{x^3}$ 에 대하여 $\displaystyle\lim_{x\to -1}\dfrac{f(x)-6}{x+1}$ 의 값. 주관식.
  category: "항별 분리 → f(−1)=6 확인 → 극한=f'(−1) → 대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "음의 지수로 분리한 유리식의 미분계수(정의형 극한)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f(x)=3x²−2−5x^{−3} 로 분리. f(−1)=3−2+5=6 이므로 주어진 극한은 f'(−1). f'(x)=6x+15x^{−4} → f'(−1)=−6+15=9. 분리·f(−1) 확인·미분·대입 네 단계(s=2)이고 계산은 한 줄. 함정은 x^{−3} 의 미분 부호(T-부호). 시험 구역·통찰 없음·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "f=3x²−2−5x^{−3} · f(−1)=6 ⇒ 극한=f'(−1) · f'=6x+15x^{−4} → −6+15=9"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$9$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0572.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자의 계수(3, −2, −5)와 분모의 차수(x³), 접근점 −1 을 바꿀 수 있음. 제약: 분자의 상수 6 이 반드시 f(접근점) 과 같아야 극한이 미분계수가 됨 — 계수를 바꾸면 이 값을 다시 계산해 문제에 반영해야 한다. 접근점은 x≠0."
    creative: "(1) 분자의 상수를 미지수 k 로 두고 「극한이 존재하는 k」 를 묻기(BW d1 · ★3) (2) 분리하지 않고 몫의 미분법으로 푸는 갈래와 비교(SC d1 · ★2~3) (3) 접근점을 x→0 으로 두면 f 가 정의되지 않아 극한 존재 판정 문제(★3)."
```

```yaml
- id: RPM-CALC2-0573
  page: 83
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    $f(x)=e^{-x}\sin ax\cos x$ 에 대하여 $f'(0)=\pi$ 일 때 상수 $a$ 의 값. 주관식.
  category: "세 함수 곱의 미분 → x=0 대입(sin 0=0 으로 두 항 소멸) → a"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼중 곱함수의 미분 → 한 점에서의 미분계수로 미정계수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'=−e^{−x}sin ax cos x + a e^{−x}cos ax cos x − e^{−x}sin ax sin x. x=0 에서 sin 0=0 이라 1·3 항이 사라지고 2 항만 a·1·1·1=a 로 남아 a=π. 삼중 곱의 미분 공식을 쓰는 단계와 대입 단계뿐이고, 대입점이 0 이라 계산은 거의 없다(k=1). 함정은 sin ax 의 안쪽 미분에서 나오는 a(T-표기). 시험 구역·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "곱 세 개 미분 → x=0 에서 sin 0=0 으로 두 항 소멸 → f'(0)=a → a=π"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\pi$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0573.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "e^{−x} 의 지수 계수, cos x 를 cos bx 로, 목표값 π 를 바꿀 수 있음. 제약: 대입점에서 sin(a·점)=0 이 되어야 항이 정리되므로 x=0 을 유지하는 편이 안전하고, 그러면 f'(0)=a 라는 구조가 유지됨."
    creative: "(1) f(0)=0 임을 이용해 f'(0)=lim f(x)/x 로 가는 갈래와 비교(SC d1 · ★3) (2) sin ax 를 sin²ax 로 바꾸면 f'(0)=0 이 되어 조건이 모순임을 보이게 하는 판정 문제(VF d1 · ★3) (3) 대입점을 x=π/(2a) 로 두면 세 항이 모두 남아 계산 부담이 커짐(★3)."
```

```yaml
- id: RPM-CALC2-0574
  page: 83
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    $f(x)=\dfrac{3x}{e^x+1}$ 와 미분가능한 $g(x)$ 의 합성 $h(x)=g(f(x))$ 에 대하여 $h'(0)=12$ 일 때 $g'(0)$ 의 값. 5지선다.
  category: "f(0)=0 확인 → 몫의 미분으로 f'(0) → h'(0)=g'(0)f'(0) → g'(0)"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "합성함수의 미분법 — 안쪽 함수가 f(0)=0 일 때 바깥 함수의 미분계수 역산"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f(0)=0 이므로 h'(0)=g'(f(0))f'(0)=g'(0)f'(0). f'(x)=[3(e^x+1)−3xe^x]/(e^x+1)² → f'(0)=6/4=3/2 → g'(0)·(3/2)=12 → g'(0)=8. f(0)=0 확인·몫의 미분·합성 공식·역산 네 단계(s=2)이고 몫의 미분 계산이 중간(k=2), g 가 구체식 없는 일반 함수라 추상도 2. 시험 구역·「중요」 태그·M_total 7·세 기법(몫·합성·역산)이 사슬 → ★3.
    [분류 이슈] 통찰은 0 이고 골조는 합성함수 미분 한 번이라 ★2 로 볼 수도 있음 — 「중요」 태그와 M_total 7 을 근거로 ★3 을 라벨로 두되 카탈로그 확정 시 재판정.
  tier: star_3
  mechanism_primary: "f(0)=0 → h'(0)=g'(0)·f'(0) · f'(0)=3/2 → g'(0)=12/(3/2)=8"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0574.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자의 계수 3, 분모 e^x+1, h'(0)=12 를 바꿀 수 있음. 제약: f(0)=0 이어야 g'(f(0))=g'(0) 으로 묻는 값과 짝이 맞는다 — 분자에 상수항을 넣으면 f(0)≠0 이 되어 문제가 성립하지 않음. f'(0) 이 0 이 아니어야 역산 가능."
    creative: "(1) f 의 분자에 상수항을 넣어 f(0)=c 로 만들고 g'(c) 를 묻기(짝 맞추기 검증 · ★3) (2) h'(0) 대신 h(0) 과 h'(0) 을 함께 주고 g 의 접선을 묻기(★3) (3) 안팎을 바꿔 h=f∘g 로 두면 g(0) 을 모른다는 사실 때문에 조건이 하나 더 필요해짐(★3~4)."
```

```yaml
- id: RPM-CALC2-0575
  page: 83
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    $\displaystyle\lim_{x\to 0}\dfrac{1}{x}\ln\dfrac{e^x+e^{2x}+\cdots+e^{100x}}{100}=A$ 일 때 $100A$ 의 값. 주관식.
  category: "g(x)=ln(Σe^{kx}/100) 로 두고 g(0)=0 확인 → 극한=g'(0) → Σk/100"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "(1/x)·ln(…) 을 g(x)=ln((Σe^{kx})/100) 의 x=0 에서의 미분계수 (g(x)−g(0))/(x−0) 로 옮김 — g(0)=ln 1=0 임을 먼저 확인해야 이 동치가 성립하고, 그러지 않으면 100 개 항을 직접 다룰 길이 없음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "정의형 극한을 로그함수의 미분계수로 옮기기(항이 많은 지수합)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    g(x)=ln((e^x+…+e^{100x})/100) 으로 두면 g(0)=ln 1=0 이므로 주어진 극한은 g'(0). g'(x)=(Σk e^{kx})/(Σe^{kx}) → g'(0)=(1+2+…+100)/100=5050/100 → A=50.5, 100A=5050. 항이 100 개라도 x=0 에서 분모가 100, 분자가 자연수 합으로 떨어진다는 구조 인식(EQV d2)이 골조이고 등차수열 합이 붙는다. 시험 구역 ★2~3 출발 · 통찰 1·M_total 7 → ★3. 통찰형.
  tier: star_3
  mechanism_primary: "g=ln(Σe^{kx}/100) · g(0)=0 ⇒ 극한=g'(0)=(Σk)/100=5050/100 → 100A=5050"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$5050$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0575.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "항의 개수 100(→ 10·n)과 나누는 수를 바꿀 수 있음. 제약: 나누는 수가 항의 개수와 같아야 g(0)=ln 1=0 이 되어 극한이 미분계수가 됨 — 이 둘이 어긋나면 극한이 발산한다. 답은 Σk=n(n+1)/2 를 n 으로 나눈 (n+1)/2."
    creative: "(1) 나누는 수를 미지수로 두고 「극한이 존재하도록 하는 값」 을 묻는 역방향(BW d2 · ★4) (2) 지수를 e^{kx} 대신 k^x 로 바꾸면 ln k 의 합이 나와 ★3~4 (3) 100A 대신 A 가 자연수가 되는 항 개수를 묻기(정수 조건 · ★4)."
```

```yaml
- id: RPM-CALC2-0576
  page: 83
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["평가원 기출"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    미분가능한 $f$ 가 모든 실수 $x$ 에서 $f(x)+f\!\left(\dfrac{1}{2}\sin x\right)=\sin x$ 를 만족시킬 때 $f'(\pi)$ 의 값. 5지선다.
  category: "양변 미분 → x=π 대입(f'(π) 와 f'(0) 관계) → x=0 대입해 f'(0) 자기참조 결정"
  M: {s: 3, k: 2, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 3
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "x=π 를 대입해 얻은 f'(π)−(1/2)f'(0)=−1 에서 모르는 f'(0) 을 없애려면 (1/2)sin x 와 x 가 동시에 0 이 되는 x=0 을 대입해야 한다는 역추적 — x=0 에서 식이 f'(0)+(1/2)f'(0)=1 로 자기참조가 되어 f'(0)=2/3 이 결정된다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "함수방정식의 양변 미분 → 특정 대입점의 자기참조식으로 미분계수 결정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    양변 미분 f'(x)+f'((1/2)sin x)·(1/2)cos x=cos x. x=π → f'(π)−(1/2)f'(0)=−1. x=0 → f'(0)+(1/2)f'(0)=1 → f'(0)=2/3 → f'(π)=−1+1/3=−2/3. 함수방정식 미분 자체는 표준이고, 남은 f'(0) 을 (1/2)sin x=x=0 이 되는 유일한 대입점으로 역추적하는 것(BW d2)이 본질. 함수가 구체식 없이 주어져 추상도 3·M_total 9. 시험 구역 ★2~3 · 평가원 기출 · 통찰 1 → ★3.
    [분류 이슈] 평가원 4점 기출이고 자기참조 대입을 못 찾으면 풀이가 막히므로 ★4 후보 — 통찰을 1개로 셌기에 ★3 으로 두고 기록만 함.
  tier: star_3
  mechanism_primary: "양변 미분 → x=π: f'(π)−f'(0)/2=−1 · x=0: (3/2)f'(0)=1 → f'(0)=2/3 → f'(π)=−2/3"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "②"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0576.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "안쪽 계수 1/2, 우변 sin x, 묻는 점 π 를 바꿀 수 있음. 제약: 안쪽 계수 c 는 x=0 대입식 (1+c)f'(0)=1 이 풀리도록 c≠−1 이어야 하고, 묻는 점에서 sin 이 0 이 되어야(x=0, π, 2π) f'(0) 하나만 남는다. 계수가 1 에 가까우면 f'(0) 이 복잡해짐."
    creative: "(1) 묻는 점을 sin 이 0 이 아닌 x=π/2 로 두면 f'(1/2) 가 남아 대입점 사슬이 길어짐(★4~5) (2) 안쪽을 (1/2)x 로 바꾸면 반복 대입으로 등비급수가 생겨 ★4 (3) f(π) 값 자체를 묻게 하면 원식에 x=π 를 바로 대입하는 ★2 로 내려감."
```

```yaml
- id: RPM-CALC2-0577
  page: 83
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    $f(x)=\ln|\tan x|$ 에 대하여 $\displaystyle\lim_{n\to\infty}n\!\left\{f\!\left(\dfrac{\pi}{3}-\dfrac{1}{n}\right)-f\!\left(\dfrac{\pi}{3}+\dfrac{3}{n}\right)\right\}$ 의 값. 주관식.
  category: "두 차분으로 분해 → −f'(π/3)−3f'(π/3)=−4f'(π/3) → f' 계산"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "간격이 −1/n 과 +3/n 으로 다른 차분을 f(π/3) 을 끼워 넣어 두 개의 미분계수 정의형으로 쪼개고 계수 −1, −3 을 맞춰 −4f'(π/3) 로 통합 — 이 변환 없이는 n 배 극한을 다룰 수 없음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "서로 다른 간격의 차분 극한 → 미분계수 분해(계수 맞추기)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    h=1/n 으로 두고 f(π/3) 을 끼워 넣으면 [f(π/3−h)−f(π/3)]/h + [f(π/3)−f(π/3+3h)]/h → −f'(π/3)−3f'(π/3)=−4f'(π/3). f'(x)=sec²x/tan x=1/(sin x cos x) → f'(π/3)=1/((√3/2)(1/2))=4√3/3 → 답 −16√3/3. 분해·계수 맞추기·f' 정리·대입 다섯 단계(s=3). 함정은 앞 항의 부호와 뒤 항의 계수 3(T-부호)·절댓값 로그의 미분(T-표기) 둘. 시험 구역 · 통찰 1·M_total 8 → ★3. 통찰형.
  tier: star_3
  mechanism_primary: "f(π/3) 끼워 넣어 두 차분 분해 → −f'(π/3)−3f'(π/3)=−4f'(π/3) · f'=1/(sin x cos x) → −16√3/3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-\dfrac{16\sqrt{3}}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0577.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 간격 −1/n, +3/n 의 계수(합이 답의 배수 −(1+3)=−4 를 결정)와 기준점 π/3, 함수 ln|tan x| 를 바꿀 수 있음. 제약: 기준점에서 tan 이 0·정의불가가 아니어야 하고(π/3 은 안전) 두 계수가 다르게 유지돼야 분해가 의미를 가짐."
    creative: "(1) 두 간격을 같게(±1/n) 두면 대칭 차분 −2f'(π/3) 로 단순해져 ★3 유지·부호 함정만 남음 (2) 계수를 미지수 a 로 두고 극한값을 주어 a 를 묻는 역방향(BW d1 · ★4) (3) f 를 ln|sin x|+... 처럼 항이 여럿인 로그로 바꾸면 로그미분법 계산이 추가(★3)."
```

```yaml
- id: RPM-CALC2-0578
  page: 83
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    $f(x)=\sqrt{1+\cos^2 x}$ 에 대하여 $f'\!\left(\dfrac{\pi}{4}\right)$ 의 값. 주관식.
  category: "이중 합성(√ → cos²) 미분 → π/4 대입 → 무리수 정리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이중 합성함수의 미분 — 근호 안 삼각함수 제곱"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(x)=(2cos x·(−sin x))/(2√(1+cos²x))=−sin x cos x/√(1+cos²x). x=π/4 에서 sin=cos=√2/2 → −(1/2)/√(3/2)=−√6/6. 근호와 제곱을 두 겹으로 벗기는 합성 미분 한 번·대입·유리화 세 단계(s=2)이고 무리수 정리가 계산 부담(k=2). 시험 구역·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "f'=−sin x cos x/√(1+cos²x) → x=π/4 → −(1/2)/√(3/2)=−√6/6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-\dfrac{\sqrt{6}}{6}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0578.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안의 상수 1 과 cos²x 의 계수, 대입점 π/4 를 바꿀 수 있음. 제약: 근호 안이 항상 양수여야 하고 대입점에서 sin·cos 가 모두 간단한 값(π/4·π/3·π/6)이어야 유리화가 깔끔함."
    creative: "(1) f'(x)=0 인 x 를 묻기(sin x cos x=0 · ★2) (2) 근호 안을 1+cos² 대신 1−cos² 로 두면 |sin x| 가 되어 미분가능성 판정 문제로 바뀜(T-경계 · ★3~4) (3) f 의 최댓값·최솟값을 묻는 증감 문제로 확장(★3)."
```

```yaml
- id: RPM-CALC2-0579
  page: 84
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    $f(x)=\log|x-\sqrt{x^2+1}|$ 에 대하여 $f'(-1)$ 의 값. 주관식.
  category: "상용로그 → ln/ln10 → u'/u 정리 → x=−1 대입"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "상용로그·절댓값이 붙은 무리식의 로그 도함수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    u=x−√(x²+1) 로 두면 f=ln|u|/ln 10 이고 u'=1−x/√(x²+1)=(√(x²+1)−x)/√(x²+1)=−u/√(x²+1) 이므로 f'=u'/(u ln 10)=−1/(√(x²+1)·ln 10). x=−1 → −1/(√2 ln 10)=−√2/(2 ln 10). u'/u 를 정리하지 않고 그냥 대입해도 같은 값이 나오지만 식이 지저분해진다. 상용로그 밑 변환·절댓값·무리식 미분 세 가지가 겹쳐 함정 2(T-표기·T-부호)·M_total 7 → 시험 구역에서 ★3.
    [분류 이슈] 통찰 0 이고 계산이 일직선이라 ★2 로 볼 수도 있음 — 상용로그·절댓값·무리식 3중 표기 부담을 근거로 ★3 을 라벨로 둠.
  tier: star_3
  mechanism_primary: "f=ln|x−√(x²+1)|/ln10 → f'=u'/(u ln10)=−1/(√(x²+1)ln10) → x=−1 → −√2/(2ln10)"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$-\dfrac{\sqrt{2}}{2\ln 10}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0579.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안의 x²+1 의 상수, 대입점 −1, 로그의 밑(상용 → 자연로그·밑 2)을 바꿀 수 있음. 제약: x−√(x²+a) 는 a>0 이면 항상 음수라 절댓값이 필요하고, 대입점에서 √(x²+a) 가 간단한 무리수가 되도록 고름."
    creative: "(1) 밑을 e 로 바꾸면 ln 10 이 빠져 ★2 (2) 부호를 x+√(x²+1) 로 바꾸면 절댓값이 필요 없어져 함정 하나가 빠짐(★2) (3) f(x)+f(−x)=? 를 묻는 대칭 문제로 바꾸면 SYM d2 가 생겨 ★4 후보."
```

```yaml
- id: RPM-CALC2-0580
  page: 84
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    매개변수 곡선 $x=2\sqrt{t}+at$, $y=at^2-\dfrac{1}{t}$ 의 $t=1$ 인 점에서 접선의 기울기가 3 일 때, 이 곡선이 지나는 점 $(0,k)$ 의 $k$. 5지선다.
  category: "도함수 비 → t=1 에서 a 결정 → x=0 인 t 찾기 → y 계산"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "매개변수 곡선 — 기울기 조건으로 상수 결정 후 좌표축 교점 찾기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    dx/dt=1/√t+a, dy/dt=2at+1/t². t=1 에서 (2a+1)/(a+1)=3 → a=−2. 그러면 x=2√t−2t 이고 x=0 ⇔ √t=t ⇔ t=1(t>0 이므로 t=0 제외) → y=−2−1=−3. 기울기 조건으로 상수를 정한 뒤 다시 x=0 을 푸는 2단 구조(s=3)이고, 매개변수 범위 t>0 과 dx/dt≠0 판정이 함정 2. 시험 구역 ★2~3 출발 · 통찰 0 이나 M_total 9·두 단계 사슬 → ★3.
  tier: star_3
  mechanism_primary: "dy/dx=(2at+1/t²)/(1/√t+a) → t=1 에서 (2a+1)/(a+1)=3 → a=−2 → x=0 ⇔ t=1 → k=y(1)=−3"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "①"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0580.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "2√t 의 계수, y 의 −1/t, 기울기 3 을 바꿀 수 있음. 제약: t>0 이어야 √t·1/t 가 정의되고, a 를 푸는 식 (2a+1)/(a+1)=m 이 a+1≠0 을 만족해야 함. x=0 의 해가 t>0 안에 하나만 있도록 계수를 고름."
    creative: "(1) 점 (0,k) 대신 y 좌표가 0 인 점을 묻기(x 절편 · ★3) (2) 기울기 조건을 「접선이 원점을 지난다」 로 바꾸면 접점과 a 를 동시에 풀어야 해 ★4 (3) x=0 의 해가 둘 나오게 계수를 조정하면 두 후보 중 범위로 기각하는 VF d1 이 생겨 ★4."
```

```yaml
- id: RPM-CALC2-0581
  page: 84
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    길이 5 m 장대의 한 끝이 벽에서 $x$ m, 다른 끝이 지면에서 $y$ m 인 상태로 미끄러질 때 $x=4$ 에서의 $\dfrac{dy}{dx}$ 의 값. 그림 있음. 주관식.
  category: "그림 → x²+y²=25 → 음함수 미분 → y'=−x/y → (4,3) 대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "음함수의 미분법 — 실생활 도형(피타고라스 관계식)의 변화율"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    벽·지면이 직각이므로 x²+y²=5²=25. 양변 미분 2x+2yy'=0 → y'=−x/y. x=4 → y=3(길이라 양수) → y'=−4/3. 그림에서 직각삼각형을 읽는 단계·음함수 미분·y 구하기·대입 네 단계(s=2)이고 계산은 한 줄. 함정은 y 를 양수로 취하는 것(T-범위). 시험 구역·통찰 없음(피타고라스 옮기기는 그림에 직각 표시가 있어 자동)·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "x²+y²=25 → 2x+2yy'=0 → y'=−x/y → (4,3) → −4/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-\dfrac{4}{3}$'
  answer_source: "답지(쪽 렌더)"
  figure: crop:fig-0581.png
  latex: latex-bank/rpm-calc2/items/0581.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "장대 길이 5 와 대입점 x=4 를 바꿀 수 있음. 제약: (x, y) 가 피타고라스 수여야 답이 유리수로 떨어지고(3·4·5, 5·12·13) x<길이 라야 y>0 이다. 그림 라벨(5 m·x m·y m)은 본문과 같은 문자로 고정한다."
    creative: "(1) 시간 t 에 대한 변화율 dx/dt 를 주고 dy/dt 를 묻는 관련 변화율로 바꾸면 사슬이 하나 늘어 ★3 (2) 장대와 벽·지면이 이루는 각 θ 를 매개변수로 두어 매개변수 미분으로 풀게 하면 SC d1 ★3 (3) 삼각형의 넓이가 최대가 되는 순간을 묻기(★3~4)."
```

```yaml
- id: RPM-CALC2-0582
  page: 84
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    곡선 $2x^3-xy^2=6$ 위의 점 $(3,4)$ 에서의 접선의 기울기를 $m$ 이라 할 때 $36m$ 의 값. 5지선다.
  category: "음함수 미분(xy² 곱) → y' 정리 → (3,4) 대입 → 36 배"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "음함수의 미분법 — 곱 항이 있는 곡선의 접선 기울기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    6x²−(y²+2xyy')=0 → y'=(6x²−y²)/(2xy). (3,4) 에서 (54−16)/24=19/12 → 36m=57. 점이 곡선 위에 있는지(2·27−3·16=6)는 확인만 하면 된다. 미분·y' 정리·대입·배수 네 단계(s=2)이고 분수 정리가 계산 부담(k=2). 함정은 xy² 의 곱·합성 미분(T-표기). 시험 구역·「중요」 태그·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "6x²−y²−2xyy'=0 → y'=(6x²−y²)/(2xy) → (3,4) → 19/12 → 36m=57"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0582.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 2·상수 6·점 (3,4) 를 바꿀 수 있음. 제약: 점이 곡선 위에 있어야 하고(대입해 등식 성립) 분모 2xy≠0 이어야 한다. 36m 의 36 은 m 의 분모(2xy)를 지워 정수 선택지를 만들기 위한 장치이므로 점을 바꾸면 이 배수도 다시 잡아야 함."
    creative: "(1) 접선의 방정식과 x 절편까지 묻기(★3) (2) 기울기가 주어진 점을 곡선 위에서 찾게 하면 연립이 생겨 ★3~4 (3) 같은 곡선에서 접선이 x 축과 평행한 점을 묻기(6x²=y² · ★3)."
```

```yaml
- id: RPM-CALC2-0583
  page: 84
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    $0<x<\dfrac{\pi}{2}$ 에서 $f(x)=4\cos^2 x$ 의 역함수 $f^{-1}$ 에 대하여 $\displaystyle\lim_{h\to 0}\dfrac{f^{-1}(3-h)-f^{-1}(3+h)}{h}$ 의 값. 주관식.
  category: "대칭 차분 → −2g'(3) → f(a)=3 인 a=π/6 → f'(a) → 역수"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "g=f^{-1} 로 두고 분자에 g(3) 을 끼워 넣어 [g(3−h)−g(3)]/h 와 [g(3)−g(3+h)]/h 로 쪼개면 둘 다 −g'(3) 이 되어 전체가 −2g'(3) — 부호와 배수를 맞추는 이 변환이 풀이의 관문"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "역함수의 미분법 — 대칭 차분 극한을 −2g'(a) 로 분해"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    극한=−2g'(3). f(a)=3 → 4cos²a=3 → cos a=√3/2(범위에서 양수) → a=π/6. f'(x)=−8cos x sin x=−4sin 2x → f'(π/6)=−2√3 → g'(3)=−1/(2√3) → 답 −2·(−1/(2√3))=√3/3. 차분 분해(EQV d2)·a 찾기·f' 계산·역수·배수 다섯 단계(s=3). 함정은 대칭 차분의 부호(T-부호)와 0<x<π/2 로 cos a>0 만 취하기(T-범위) 둘. 시험 구역 · 「중요」 · 통찰 1·M_total 8 → ★3. 통찰형.
  tier: star_3
  mechanism_primary: "극한=−2g'(3) · 4cos²a=3 → a=π/6 · f'(π/6)=−2√3 → g'(3)=−√3/6 → √3/3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{\sqrt{3}}{3}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0583.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 4·주어진 값 3·정의역 (0, π/2) 를 바꿀 수 있음. 제약: f(a)=값 의 해 a 가 정의역 안에 하나만 있어야 하고(cos 의 부호 고정) 그 a 에서 cos·sin 이 간단한 값이어야 f' 가 유리수·간단한 무리수로 떨어짐. f' 가 정의역에서 부호를 바꾸지 않아야 역함수 존재."
    creative: "(1) 두 간격을 −h, +2h 처럼 다르게 두면 계수 맞추기가 −3g'(3) 으로 바뀜(★3) (2) 정의역을 (0, π) 로 넓히면 f 가 일대일이 아니어서 역함수 존재 여부부터 따져야 함(VF d2 · ★4) (3) f 를 4cos²x 대신 4cos 2x 로 바꾸면 안쪽 미분이 추가(★3)."
```

```yaml
- id: RPM-CALC2-0584
  page: 84
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["교육청 기출"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    $f(x)=x^3+x+1$ 의 역함수 $g$ 로 만든 매개변수 곡선 $x=g(t)+t$, $y=g(t)-t$ 에서 $t=3$ 일 때 $\dfrac{dy}{dx}$ 의 값. 5지선다.
  category: "매개변수 미분 → (g'−1)/(g'+1) → g'(3)=1/f'(1) → 대입"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "매개변수 미분법 + 역함수 미분법 결합 — 매개변수가 역함수인 곡선"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    dx/dt=g'(t)+1, dy/dt=g'(t)−1 → dy/dx=(g'(3)−1)/(g'(3)+1). f(a)=3 → a³+a−2=0 → (a−1)(a²+a+2)=0 → a=1 이므로 g(3)=1, f'(x)=3x²+1 → f'(1)=4 → g'(3)=1/4. 대입하면 (−3/4)/(5/4)=−3/5. 매개변수 미분과 역함수 미분 두 기법이 사슬이지만 같은 단원 안 결합이라 통찰로 세지 않음(스키마 §2.1 주). 삼차방정식 근 찾기·두 도함수·역함수 공식·분수 정리 다섯 단계(s=3). 시험 구역 · 교육청 기출 · M_total 8·두 기법 사슬 → ★3.
  tier: star_3
  mechanism_primary: "dy/dx=(g'(3)−1)/(g'(3)+1) · f(1)=3 → g'(3)=1/f'(1)=1/4 → (−3/4)/(5/4)=−3/5"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0584.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f 의 계수와 t=3, x·y 식의 ±t 계수를 바꿀 수 있음. 제약: f(a)=t 의 해 a 가 정수로 떨어져야 하고 f' 가 항상 양수여야 역함수가 존재함(x³+x+1 은 f'=3x²+1>0 으로 안전). dx/dt=g'+1≠0 도 필요."
    creative: "(1) x=g(t)+t, y=g(t)·t 처럼 곱을 넣으면 곱의 미분이 추가돼 ★3~4 (2) dy/dx=−1 이 되는 t 를 묻는 역방향(g'(t)=0 불가 판정 · ★4) (3) f 를 주지 않고 f(1)=3, f'(1)=4 만 주면 추상도가 올라가고 단계가 줄어 ★3(Mₐ 3·Mₛ 2)."
```

```yaml
- id: RPM-CALC2-0585
  page: 84
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    $y=x^{\sin x}\ (x>0)$ 의 $x=\dfrac{\pi}{2}$ 에서의 미분계수. 주관식.
  category: "양변 로그 → ln y=sin x ln x → 곱의 미분 → y 곱 → 대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그미분법 — x^{g(x)} 꼴(지수가 삼각함수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ln y=sin x·ln x → y'/y=cos x·ln x+sin x/x. x=π/2 에서 cos=0 이라 첫 항이 사라지고 1/(π/2)=2/π 만 남으며 y=(π/2)^1=π/2 → y'=(π/2)(2/π)=1. 로그 취하기·곱의 미분·y 곱·대입 네 단계(s=2)이고 대입점에서 항이 하나 사라져 계산이 가볍다. 시험 구역·통찰 없음·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "ln y=sin x ln x → y'/y=cos x ln x+sin x/x → x=π/2: y=π/2, y'/y=2/π → y'=1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0585.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수를 sin x → cos x·2sin x 로, 대입점을 π/2 → π 로 바꿀 수 있음. 제약: 대입점에서 x^{g(x)} 가 간단한 값이 되어야 하고(sin(π/2)=1 이라 y=π/2) ln x 가 붙는 항이 0 이 되는 점을 고르면 답이 깔끔하다."
    creative: "(1) 대입점을 x=1 로 두면 ln 1=0 이라 y'=sin 1 처럼 다른 항이 남음(★2) (2) 지수를 sin x 대신 1/x 로 두면 x^{1/x} 의 최댓값 문제로 확장(★3~4) (3) y=x^{sin x} 와 y=(sin x)^x 두 함수의 미분계수를 비교하게 하는 서술형(★3)."
```

### 서술형 주관식

```yaml
- id: RPM-CALC2-0586
  page: 85
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: ["서술형"]
  category_type: "서술형 주관식"
  summary: |
    $f(x)=\dfrac{kx}{2x-1}$ 에 대하여 $f'(3)=\dfrac{2}{5}$ 일 때 $\displaystyle\lim_{x\to 0}\dfrac{f(x)}{x}$ 의 값($k$ 는 상수). 주관식.
  category: "몫의 미분 → f'=−k/(2x−1)² → k 결정 → f(x)/x 약분 → 극한"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "몫의 미분법으로 미정계수 결정 후 유리함수의 극한"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(x)=[k(2x−1)−2kx]/(2x−1)²=−k/(2x−1)² → f'(3)=−k/25=2/5 → k=−10. f(x)/x=k/(2x−1) 이므로 x→0 에서 k/(−1)=−k=10. 몫의 미분·k 결정·약분·극한 네 단계(s=2)이고 계산은 한 줄. 서술형 구역 ★3 출발이나 통찰 0·M_total 6·골조가 교과서 예제 수준의 표준 두 단계(미정계수 → 약분 극한)라 −1 을 적용해 ★2.
    [분류 이슈] 서술형 구역 출발점 ★3 과 판정 ★2 가 1단 어긋남 — 서술형은 답안 작성 부담이 별도이므로 카탈로그 확정 시 구역 가중을 재검토.
  tier: star_2
  mechanism_primary: "f'=−k/(2x−1)² → f'(3)=−k/25=2/5 → k=−10 · f(x)/x=k/(2x−1) → x→0 → −k=10"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$10$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0586.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모 2x−1 의 계수·상수, 대입점 3, f'(3) 의 값을 바꿀 수 있음. 제약: 대입점에서 분모가 0 이 아니어야 하고 f'=−k/(ax+b)² 이 항상 부호가 같으므로 f'(3) 의 부호가 k 의 부호를 결정한다 — 극한값 −k/b 가 정수가 되도록 고름."
    creative: "(1) lim f(x)/x 대신 lim f(x)/(x−1) 처럼 분모를 옮기면 분자가 0 이 아니라 발산 판정이 필요(T-경계 · ★3) (2) f'(3) 대신 접선이 지나는 점을 주면 단계가 하나 늘어 ★3 (3) 분자를 kx+1 로 두면 f(0)≠0 이라 극한이 발산해 조건 모순을 판정하게 하는 문제(VF d1 · ★3)."
```

```yaml
- id: RPM-CALC2-0587
  page: 85
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: ["서술형"]
  category_type: "서술형 주관식"
  summary: |
    $\displaystyle\lim_{x\to 2}\dfrac{f(x)+2}{x-2}=5$ 이고 $g(x)=4x^2-2$ 일 때 $\displaystyle\lim_{x\to 1}\dfrac{f(g(x))+2}{x-1}$ 의 값. 주관식.
  category: "첫 극한 → f(2)=−2, f'(2)=5 → g(1)=2 확인 → 합성의 미분계수"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미분계수 정의형 극한 + 합성함수의 미분법"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    첫 극한에서 분모→0 이므로 f(2)=−2 이고 극한값이 f'(2)=5. g(1)=4−2=2 이므로 둘째 극한의 분자도 f(g(1))+2=f(2)+2=0 → 극한=(f∘g)'(1)=f'(g(1))·g'(1)=f'(2)·8=40. 두 극한을 모두 미분계수로 읽는 표준 처리에 g(1)=2 로 두 조건을 잇는 짝 맞추기가 붙는다(s=2). 함정은 f'(2) 를 f'(1) 로 착각하는 대응(T-표기). 서술형 ★3 출발 · 통찰 0·M_total 6 이나 두 기법(정의형 극한·합성 미분)이 사슬이라 ★3 유지.
  tier: star_3
  mechanism_primary: "f(2)=−2, f'(2)=5 · g(1)=2, g'(1)=8 → 극한=(f∘g)'(1)=f'(2)·8=40"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$40$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0587.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫 극한의 접근점 2·상수 +2·극한값 5, g 의 계수 4·−2 와 둘째 접근점 1 을 바꿀 수 있음. 제약: g(둘째 접근점)=첫 접근점 이어야 분자가 0 으로 가고 두 조건이 이어진다 — g 의 계수를 바꾸면 이 대응을 반드시 다시 맞춰야 한다."
    creative: "(1) g 를 미분가능한 일반 함수로 두고 g(1)=2, g'(1)=8 만 주면 추상도가 올라 ★3(Mₐ 3) (2) 둘째 극한의 상수를 +2 가 아닌 값으로 두어 발산 판정을 묻기(T-경계 · ★3) (3) 합성의 순서를 g(f(x)) 로 뒤집으면 f(x)→−2 에서의 g' 가 필요해 대응이 한 겹 더(★4)."
```

```yaml
- id: RPM-CALC2-0588
  page: 85
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: ["서술형"]
  category_type: "서술형 주관식"
  summary: |
    매개변수 함수 $x=t^3-1$, $y=3t^2-2t+1$ 을 $y=f(x)$ 로 볼 때 $\displaystyle\lim_{h\to 0}\dfrac{f(7+2h)-f(7-h)}{h}$ 의 값. 주관식.
  category: "차분 분해 → 3f'(7) → x=7 인 t=2 → 매개변수 미분"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "간격이 +2h 와 −h 로 다른 차분에 f(7) 을 끼워 넣어 2f'(7)+f'(7)=3f'(7) 로 옮김 — 계수 2 와 1 을 각각 맞추지 않으면 매개변수 미분값을 그대로 답으로 쓰게 된다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "비대칭 차분 극한 분해 + 매개변수 함수의 미분법"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    [f(7+2h)−f(7)]/h→2f'(7), [f(7)−f(7−h)]/h→f'(7) 이므로 극한=3f'(7). x=7 → t³=8 → t=2. dx/dt=3t²=12, dy/dt=6t−2=10 → dy/dx=5/6 → 3·(5/6)=5/2. 차분 분해(EQV d2)·t 찾기·매개변수 미분·배수 다섯 단계(s=3). 서술형 ★3 출발 · 통찰 1 → ★3. 통찰형.
  tier: star_3
  mechanism_primary: "극한=2f'(7)+f'(7)=3f'(7) · x=7 → t=2 · dy/dx=(6t−2)/(3t²)=5/6 → 5/2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{5}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0588.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 간격 계수(+2h, −h → 합이 3), x 값 7, 매개변수 식의 계수를 바꿀 수 있음. 제약: x=값 의 해 t 가 하나여야 하고(t³ 은 단조라 안전) dx/dt≠0 이어야 한다. x 를 t²−1 처럼 짝수 차수로 두면 t 가 둘 나와 검증 단계가 생긴다."
    creative: "(1) x 를 t²−1 로 바꾸면 t=±3 두 후보에서 조건으로 하나를 기각(VF d1 · ★4) (2) 간격을 +2h, +h 로 두면 계수가 2−1=1 이 되어 부호 함정이 강해짐(★3) (3) 극한값을 주고 x 값을 묻는 역방향(BW d2 · ★4)."
```

```yaml
- id: RPM-CALC2-0589
  page: 85
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: ["서술형"]
  category_type: "서술형 주관식"
  summary: |
    $f(x)=\dfrac{(x-3)^2(x+2)}{(x-2)^3}$ 에 대하여 $\displaystyle\lim_{x\to 0}\dfrac{f'(x)}{f(x)}$ 의 값. 주관식.
  category: "f'/f = (ln|f|)' 인식 → 항별 로그 도함수 합 → x=0 대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "묻는 것이 f' 도 f 도 아니라 비 f'/f 라는 점에서 이를 (ln|f|)' 로 옮겨 곱·몫 구조를 2/(x−3)+1/(x+2)−3/(x−2) 라는 단순한 합으로 바꿈 — 몫의 미분으로 f' 를 직접 구하면 5 차식 전개가 되어 사실상 풀리지 않는다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "로그미분법 — f'/f 꼴을 항별 로그 도함수의 합으로"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f'/f=(ln|f|)'=2/(x−3)+1/(x+2)−3/(x−2). x=0 에서 −2/3+1/2+3/2=4/3. f 를 직접 미분하지 않고 비만 구한다는 표현 전환(RT d2)이 전부이고 그 뒤는 대입 한 줄이라 M_total 5 로 낮다. 서술형 ★3 출발 · 통찰 1(−1 후보 아님) → ★3. 통찰형.
  tier: star_3
  mechanism_primary: "f'/f=(ln|f|)'=2/(x−3)+1/(x+2)−3/(x−2) → x=0 → −2/3+1/2+3/2=4/3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{4}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0589.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "인수의 상수(−3, +2, −2)와 지수(2, 1, 3), 대입점 0 을 바꿀 수 있음. 제약: 대입점에서 어떤 인수도 0 이 되면 안 되고(x=3·−2·2 금지) 각 항이 간단한 분수가 되도록 상수를 고름. 지수의 합·차는 답에 그대로 가중치로 들어간다."
    creative: "(1) f'(0) 자체를 묻게 하면 f(0) 을 따로 계산해 곱해야 해 계산 부담만 늘고 골조는 같음(★3) (2) f'/f=0 인 x 를 묻기(분수 방정식 · ★3~4) (3) 인수를 (x−a)^n 하나로 줄이면 n/(x−a) 한 줄이라 ★2 로 내려감."
```

### 실력 Up

```yaml
- id: RPM-CALC2-0590
  page: 85
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    이차 이상의 다항함수 $f$ 와 $g(x)=e^{-x^2+3x}$ 에 대하여 $(f\circ g)(3)=3$, $(f\circ g)'(3)=6$ 일 때 $f(x)$ 를 $(x-1)^2$ 으로 나눈 나머지 $R(x)$ 의 $R(-2)$. 주관식.
  category: "g(3)=1, g'(3)=−3 → f(1)=3, f'(1)=−2 → R(x)=ax+b 의 a=f'(1), a+b=f(1)"
  M: {s: 3, k: 2, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 2
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "합성함수 미분 f'(g(3))g'(3)=6 에서 g(3)=1, g'(3)=−3 을 먼저 계산해 f'(1)=−2 를 역추적 — f 의 식을 모르는 채 한 점의 함숫값·미분계수만 뽑아내는 것이 관문"
    - step: 3
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "다항식 나눗셈 f=(x−1)²Q+R 의 나머지 R=ax+b 를 미분해 f'(1)=a, f(1)=a+b 로 연결 — 다항식 나눗셈(대수)과 미분이 모두 있어야 R 이 결정되고 한쪽만으로는 풀이가 끊김"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "합성함수 미분으로 f(1)·f'(1) 을 얻어 (x−1)² 나눈 나머지 결정"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    g(3)=e⁰=1, g'(x)=(−2x+3)g(x) → g'(3)=−3. (f∘g)(3)=f(1)=3, (f∘g)'(3)=f'(1)·(−3)=6 → f'(1)=−2. f=(x−1)²Q+ax+b 를 미분하면 f'(1)=a=−2 이고 f(1)=a+b=3 → b=5 → R(x)=−2x+5 → R(−2)=9. 합성 미분으로 한 점 정보를 역추적하고(BW d1) 그것을 다항식 나눗셈의 나머지와 잇는(XU d2) 두 통찰이 골조이며 f 가 차수 미정 다항식이라 추상도 3. 실력 Up ★4 출발 · 통찰 2 → ★4(★5 는 통찰 3 이상 + SC/VF/SYM/XU 필요 — XU 는 있으나 통찰 수 미달). 통찰형.
  tier: star_4
  mechanism_primary: "g(3)=1·g'(3)=−3 → f(1)=3·f'(1)=−2 → R=ax+b 에서 a=f'(1)=−2, a+b=f(1)=3 → R(−2)=9"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$9$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0590.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "g 의 지수 −x²+3x 와 대입점 3, 두 조건값 3·6, 나누는 식 (x−1)², 묻는 점 −2 를 바꿀 수 있음. 제약: g(대입점) 이 나누는 식의 근(여기 1)과 같아야 f(1)·f'(1) 로 이어지고, g'(대입점)≠0 이어야 f'(1) 을 역산할 수 있다. 지수를 −x²+ax 로 두면 g(3)=1 을 유지하려면 a=3."
    creative: "(1) 나누는 식을 (x−1)³ 으로 올리면 f''(1) 까지 필요해 조건이 하나 더 붙음(★5 후보) (2) 나누는 식을 (x−1)(x−2) 로 두면 서로 다른 두 점의 함숫값이 필요해 g 의 대입점이 둘(★4~5) (3) R(−2) 대신 f 의 최고차항 계수를 묻게 하면 조건이 부족해 「결정되지 않음」 을 판정하는 문제(VF d2 · ★4)."
```

```yaml
- id: RPM-CALC2-0591
  page: 85
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    원 $x^2+y^2=8$ 과 점 $\mathrm{A}(0,1)$ 에 대하여 $\mathrm{A}$ 를 지나고 $x$ 축 양의 방향과 각 $\theta$ 를 이루는 직선이 원과 만나는 두 점을 $\mathrm{P}$, $\mathrm{Q}$ 라 할 때 $l(\theta)=\overline{\mathrm{PQ}}$ 의 $l'\!\left(\dfrac{\pi}{4}\right)$. 그림 있음. 주관식.
  category: "중심-직선 거리 d=|cosθ| → 현 길이 l=2√(8−cos²θ) → 미분 → 대입"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "P, Q 의 좌표를 구하지 않고 「현의 길이 = 2√(r²−d²)」 로 옮겨 θ 의 함수로 만드는 전환 — 좌표로 가면 이차방정식의 두 근의 차를 다뤄야 해 미분이 사실상 불가능하다"
    - step: 2
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "원 중심 O 에서 직선 x sinθ−y cosθ+cosθ=0 까지의 거리를 점과 직선 사이의 거리 공식으로 |cosθ| 라고 계산 — 도형의 방정식 도구를 미적분 문제 안에서 써야 l(θ) 가 닫힌 식이 된다"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "원의 현 길이를 매개(각)의 함수로 세워 미분하기"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    직선 AP 는 y=x tanθ+1 즉 x sinθ−y cosθ+cosθ=0 이고 O 와의 거리는 |cosθ|. 현 길이 l(θ)=2√(8−cos²θ) → l'(θ)=2cosθsinθ/√(8−cos²θ)=sin2θ/√(8−cos²θ) → θ=π/4 에서 1/√(15/2)=2/√30=√30/15. 좌표를 버리고 현 길이 공식으로 옮기는 전환(RT d2)과 점·직선 거리 공식 동원(XU d1)이 골조이고, 그 뒤 미분·대입은 한 줄. 실력 Up ★4 출발 · 통찰 2·M_total 7 → ★4. 통찰형.
  tier: star_4
  mechanism_primary: "d=|cosθ| → l=2√(8−cos²θ) → l'=sin2θ/√(8−cos²θ) → θ=π/4 → √30/15"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$\dfrac{\sqrt{30}}{15}$'
  answer_source: "답지(쪽 렌더)"
  figure: crop:fig-0591.png
  latex: latex-bank/rpm-calc2/items/0591.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "원의 반지름²(8), 점 A 의 y 좌표(1), 대입각 π/4 를 바꿀 수 있음. 제약: A 가 원 내부에 있어야(1<2√2) 현이 항상 두 점에서 생기고, d=|A 의 y 좌표·cosθ| 이므로 A 의 좌표를 바꾸면 거리식을 다시 세워야 한다. 대입각은 sin2θ·cos²θ 가 간단한 값이 되는 π/4·π/3 로. 그림 라벨(O·A·P·Q·θ)은 본문과 같게 고정."
    creative: "(1) A 를 원 위의 점으로 옮기면 현이 A 에서 시작해 길이가 2r|cos| 꼴로 단순해져 ★3 (2) l(θ) 의 최댓값·최솟값과 그때의 θ 를 묻는 증감 문제로 확장(★4~5) (3) 선분 AP·AQ 의 곱(방멱)이 일정함을 이용해 다른 갈래로 풀게 하면 SC d2 가 생겨 ★5 후보."
```

```yaml
- id: RPM-CALC2-0592
  page: 85
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: ["수능 기출"]
  category_type: "실력 Up"
  summary: |
    최고차항 계수 1 인 삼차함수 $f$ 와 $g(x)=f(e^x)+e^x$ 에 대하여 점 $(0,g(0))$ 에서의 접선이 $x$ 축이고 $g$ 가 역함수 $h$ 를 가질 때 $h'(8)$ 의 값. 5지선다.
  category: "접선=x축 → g(0)=g'(0)=0 → 역함수 존재로 g'≥0 → f'(t)+1=3(t−1)² 중근 → g=(e^x−1)³"
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「점 (0,g(0)) 에서의 접선이 x 축」 을 g(0)=0 이고 g'(0)=0 이라는 두 식으로 옮김 — 접선이 특정 직선이라는 진술을 함숫값·미분계수 두 조건으로 분해해야 f(1)=−1, f'(1)=−1 이 나온다"
    - step: 2
      type: I-BW
      depth: 3
      effective_depth: 3
      signal_ref: []
      description: "g'(x)=e^x(f'(e^x)+1) 이고 g'(0)=0 인데도 역함수가 존재하려면 g 가 단조여야 하므로 φ(t)=f'(t)+1 이 t>0 에서 부호를 바꾸지 않아야 한다 → φ 는 t=1 을 중근으로 갖는 3(t−1)² 여야 한다는 역추적. 이 단계가 없으면 f 의 계수 세 개 중 하나가 미결로 남는다"
    - step: 3
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "구한 f 로 g(x)=e^{3x}−3e^{2x}+3e^x−1=(e^x−1)³ 임을 알아보아 g(c)=8 을 e^c−1=2 한 줄로 해결"
  insight_count: 3
  depth_score: 5.00
  type_id: null
  type_hint: "역함수 존재 조건(단조)으로 미정 삼차함수를 결정한 뒤 h'(k)=1/g'(c)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    접선이 x 축 ⇒ g(0)=f(1)+1=0, g'(0)=f'(1)+1=0 → f(1)=−1, f'(1)=−1. g'(x)=e^x(f'(e^x)+1) 이고 역함수 존재 ⇒ g 단조 ⇒ f'(t)+1≥0 (t>0) 인데 t=1 에서 0 이므로 이 이차식은 3(t−1)² → f'(t)=3t²−6t+2 → f(t)=t³−3t²+2t+c, f(1)=−1 → c=−1. 그러면 g(x)=(e^x−1)³ 이고 g(c)=8 ⇒ e^c=3, g'(x)=3(e^x−1)²e^x → g'=3·4·3=36 → h'(8)=1/36. 조건 분해(EQV d1) → 단조성으로 중근 역추적(BW d3) → 완전세제곱 인식(RT d1) 세 통찰·M_total 11. 실력 Up ★4 출발 · 통찰 3·depth 3 이나 ★5 게이트(통찰 3 이상 + SC/VF/SYM/XU 중 하나)에서 저노출 유형이 없어 ★4. 통찰형.
  tier: star_4
  mechanism_primary: "접선=x축 ⇒ g(0)=g'(0)=0 → 역함수 존재로 f'(t)+1=3(t−1)² → g=(e^x−1)³ → g(c)=8 ⇒ e^c=3 → g'=36 → h'(8)=1/36"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: "①"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0592.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "g 에 더한 e^x 의 계수, 묻는 값 8, 접선이 되는 직선을 바꿀 수 있음. 제약: 최고차항 계수 1 과 「접선이 x 축」이 맞물려 f'(t)+1 이 3(t−1)² 로 확정되므로 계수를 바꾸면 중근 위치와 f 가 통째로 달라진다. 묻는 값은 (e^c−1)³ 이 세제곱수(8·27)가 되도록 골라야 e^c 가 정수."
    creative: "(1) 「역함수를 가진다」 를 빼면 f 가 하나로 정해지지 않아 조건 부족 판정 문제가 됨(VF d2 · ★5 후보) (2) 접선을 x 축 대신 y=x 로 두면 g'(0)=1 이 되어 중근 조건이 사라지고 ★3 으로 내려감 (3) f 를 사차함수로 올리면 φ 가 삼차라 단조 조건 분석이 한 겹 더해져 ★5."
```

## 표본 판정 요약 (40문)

- ★ 분포: ★1 2 · ★2 22 · ★3 13 · ★4 3 · ★5 0
- 통찰형 10 · 절차형 30 · premium 0
- 통찰형 목록: 0567(EQV d2) · 0575(EQV d2) · 0576(BW d2) · 0577(EQV d2) · 0583(EQV d2) · 0588(EQV d2) · 0589(RT d2) · 0590(BW d1+XU d2) · 0591(RT d2+XU d1) · 0592(EQV d1+BW d3+RT d1)
- 통찰 유형 분포: I-EQV 6 · I-RT 3 · I-BW 3 · I-XU 2 (SC·VF·MI·PD·SYM·CON 0) — ★5 게이트(통찰 3 이상 + SC/VF/SYM/XU)를 통과하는 문항은 없음
- 구역별 ★: 유형 10~14(18문) ★1 2 · ★2 14 · ★3 2 / 시험에 꼭 나오는 문제(15문) ★2 8 · ★3 7 / 서술형 주관식(4문) ★2 1 · ★3 3 / 실력 Up(3문) ★4 3
- 대상층: 하위권 2 · 중하위권 22 · 중위권 12 · 중상위권 1 · 상위권 3
- 그림: 2문(`crop:fig-0581.png` 장대·직각삼각형 · `crop:fig-0591.png` 원·현·각 θ)
- 답 대조: 40문 모두 다시 풀어 전사본 answer 와 일치. 불일치 없음.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-CALC2-0556 | 벤더 「상중」(★3)이나 통찰 0·M_total 5 — 매개변수 미분·수직 조건·삼각 항등식 세 기법이 사슬이라 ★3 유지, 실질은 절차형 | ★2 / ★3 |
| RPM-CALC2-0570 | 벤더 「상중」(★3)이나 골조가 「극한=f'(2) 판정 + x^x 로그미분」 표준 두 단계 — −1 적용해 ★2 | ★2 / ★3 |
| RPM-CALC2-0574 | 「중요」 태그·M_total 7 로 ★3 을 라벨로 두었으나 통찰 0·골조는 합성함수 미분 한 번 | ★2 / ★3 |
| RPM-CALC2-0576 | 평가원 4점 기출이고 x=0 자기참조 대입을 못 찾으면 풀이가 막힘 — 통찰을 1 개로 세어 ★3, ★4 후보 | ★3 / ★4 |
| RPM-CALC2-0579 | 상용로그·절댓값·무리식 3중 표기 부담으로 ★3, 계산은 일직선이고 통찰 0 | ★2 / ★3 |
| RPM-CALC2-0586 | 서술형 구역 출발점 ★3 과 판정 ★2 가 1단 어긋남 — 서술형 답안 작성 부담을 구역 가중으로 볼지 미정 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **이 범위에서 가장 많이 반복된 골조는 「정의형 극한 → 미분계수」다.** 0566·0567·0570·0572·0575·0577·0583·0586·0587·0588 열 문항이 여기 걸린다. 카탈로그에서는 (가) 그냥 f'(a) 인 것(0570·0572·0566), (나) 곱·합성으로 한 겹 있는 것(0567·0587), (다) 간격이 다른 차분을 계수 맞춰 분해하는 것(0577·0583·0588)을 **세 유형으로 갈라야** 한다 — (다)만 통찰형이고 (가)는 ★2, (나)는 ★2~3 로 층이 확실히 다르다.
- 「매개변수 함수의 미분법」(0553~0556·0580·0584·0588)과 「역함수의 미분법」(0561~0567·0583·0584·0592)은 각각 한 유형으로 묶되, **둘이 결합된 0584·0592 는 별도 상위 유형**으로 세우는 편이 낫다(base ★ 3~4).
- 「로그미분법」은 (가) 곱·몫 유리식의 f'(a)(0568·0589), (나) x^{g(x)} 꼴(0569·0570·0585) 두 갈래로 나뉜다. (나)는 밑·지수에 모두 x 가 있다는 표기 함정이 공통이라 통합 가능하고, (가) 중 f'/f 만 묻는 0589 는 RT 통찰이 붙어 층이 하나 높다.
- 「음함수의 미분법」(0557~0560·0581·0582)은 한 유형으로 충분하다. 실생활 도형(0581)도 관계식을 세우면 같은 골조라 따로 세울 필요가 없다.
- ★5 슬롯을 만들려면 이 범위에는 재료가 없다. 통찰 유형이 EQV·RT·BW·XU 에 몰려 있고 SC·VF·MI·SYM 이 하나도 없다 — 미적분Ⅱ 카탈로그에서 ★5 를 설계할 때는 0580·0588 의 「후보 t 가 둘 나오는 변형」이나 0592 의 「역함수 존재 조건 제거」처럼 **VF 를 인위적으로 심는 변형**이 현실적인 경로다(각 블록 `variation_notes.creative` 에 적어 둠).
