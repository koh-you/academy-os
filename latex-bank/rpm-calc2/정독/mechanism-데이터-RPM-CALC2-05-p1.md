---
name: mechanism-데이터-RPM-CALC2-05-p1
description: RPM 미적분Ⅱ 05 여러 가지 미분법(1/3 · 교과서 05-1~05-5) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 미적분Ⅱ (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-calc2
  section: 05 여러 가지 미분법
  unit_code: CALC2-05
  part: "1/3"
  extract_range: "73~75쪽 · 0479~0514"
  total_problems: 36
  unit_total: 114
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-calc2/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-calc2/items/<id>.tex
  image_source: latex-bank/rpm-calc2/figures/ (crops.json)
---

# RPM 미적분Ⅱ · 05 여러 가지 미분법 (1/3) 정독 데이터 (v1.0)

이 파일은 RPM 미적분Ⅱ 05 여러 가지 미분법 단원의 첫 범위(73~75쪽 · 0479~0514 · 36문항)를 다룬다. 36문 전부 교과서 기본 문제 구역이다 — 「교과서 05-1 함수의 몫의 미분법」 12문(0479~0490 · 「다음 함수를 미분하시오」 아래 소문항처럼 나열) · 「교과서 05-2 합성함수의 미분법」 13문(0491~0502 미분 12문 + 0503 dy/du·du/dx 과정 빈칸) · 「교과서 05-3 매개변수로 나타낸 함수의 미분법」 6문(0504~0505 관계식 · 0506~0509 dy/dx) · 「교과서 05-4 음함수의 미분법」 4문(0510~0513) · 「교과서 05-5 역함수의 미분법」 1문(0514 과정 빈칸). RPM 은 구역이 곧 난이도 층(교과서 → 유형 → 유형 UP → 시험에 꼭 나오는 문제 → 서술형 → 실력 Up)이므로 이 범위는 전부 ★1 출발이다. 난이도 표시(level)·태그·그림은 하나도 없다.

출발점에서 M_total·통찰로만 ±1 조정했다. 36문 전부 절차형(통찰 0)이고 M_total 은 4~6 이라 −1 후보(★1 이하 없음)·+1 후보(통찰 2개 이상) 모두 해당 없음 → ★1 36문. 다만 곱·몫의 미분 뒤 삼각 항등식 정리가 붙는 0489·0490 과 몫 항이 든 음함수 미분 0512(M_total 6 · 유형 구역 기본 문항과 골조가 같음)는 라벨 ★1 을 유지하고 [분류 이슈] 로 기록만 했다. 답은 36문 모두 재계산해 전사 답과 일치함을 확인했다.

주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(이 범위는 전부 절차형이라 빈 배열) · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 창의 변형과 ★ 변동 지점)를 채웠다. 유형 카탈로그가 없는 과목이므로 `type_id`·`base_star` 는 null 이고 `type_hint` 로 유형명을 제안했다. 같은 section 제목을 가진 연속 group(05-2 의 U5-M4·U5-M7, 05-3 의 U5-M8·U5-M9)은 한 절로 묶었다.

## 문항 데이터

### 교과서 05-1 함수의 몫의 미분법

```yaml
- id: RPM-CALC2-0479
  page: 73
  vendor_label: "교과서 05-1 함수의 몫의 미분법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    $y=\dfrac{1}{x-3}$ 을 미분(1/f(x) 꼴의 몫의 미분법).
  category: "1/f 꼴 → −f'/f² 공식 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "몫의 미분법(1/f(x) 꼴)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (1/f)' = −f'/f² 에 f = x−3, f' = 1 을 넣으면 −1/(x−3)². 공식 대입 한 단계. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "f = x−3, f' = 1 → (1/f)' = −f'/f² → −1/(x−3)²"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y''=-\dfrac{1}{(x-3)^2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0479.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모의 상수 −3 을 다른 정수로, 분모를 ax+b(a≠0)로 바꿀 수 있음(답 −a/(ax+b)²). 제약: 분모가 일차식이면 f' 이 상수라 한 단계로 끝나고, 분모를 이차식으로 바꾸면 f' 이 일차식이 되어 답이 −(2x+c)/(…)² 꼴이 됨."
    creative: "(1) (x−3)^{−1} 로 보고 정수 지수 공식으로 풀어 두 경로가 같은 답인지 확인(★1) (2) 1/(x−3) 의 x=4 에서의 미분계수·접선 기울기 묻기(★1) (3) 1/(x−3)+1/(x+3) 처럼 두 항의 합을 미분해 통분 여부를 선택하게 하기(★2 · 계산량 상승)."
```

```yaml
- id: RPM-CALC2-0480
  page: 73
  vendor_label: "교과서 05-1 함수의 몫의 미분법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    $y=\dfrac{1}{e^x+4}$ 을 미분(분모가 지수함수인 1/f(x) 꼴).
  category: "1/f 꼴 → −f'/f² · f' = e^x"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "몫의 미분법(1/f(x) 꼴)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (1/f)' = −f'/f² 에 f = e^x+4, f' = e^x → −e^x/(e^x+4)². 상수 4 가 미분에서 사라져 분자에 e^x 만 남는 점이 확인점. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "f = e^x+4, f' = e^x → −f'/f² → −e^x/(e^x+4)²"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y''=-\dfrac{e^x}{(e^x+4)^2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0480.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수 4 를 다른 수로, e^x 를 a^x(답에 ln a 가 붙음)로 바꿀 수 있음. 제약: e^{2x} 처럼 합성 미분이 필요한 지수는 다음 구역이므로 이 구역에선 피하고, 분모의 상수항은 답에 나타나지 않는 이유를 학생이 설명할 수 있어야 함."
    creative: "(1) 분모를 e^x−4 로 두고 정의역(x≠ln 4)까지 묻기(T-범위 · ★1~2) (2) 1/(e^x+4) 의 x=0 미분계수 묻기(★1) (3) e^x/(e^x+4) 로 분자에도 e^x 를 두면 f/g 꼴이 되어 0481 골조로 이동(★1)."
```

```yaml
- id: RPM-CALC2-0481
  page: 73
  vendor_label: "교과서 05-1 함수의 몫의 미분법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    $y=\dfrac{x+1}{3x-2}$ 을 미분(일차/일차 f(x)/g(x) 꼴).
  category: "몫의 미분법 → 분자 f'g − fg' 정리 → 상수만 남음"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "몫의 미분법(f(x)/g(x) 꼴)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (f/g)' = (f'g − fg')/g² 에 f = x+1, g = 3x−2: 분자 1·(3x−2) − (x+1)·3 = −5. 일차/일차는 분자가 항상 상수(ad−bc)가 되므로 검산이 쉽다. 뺄셈 부호가 유일한 함정. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "f'g − fg' = (3x−2) − 3(x+1) = −5 → −5/(3x−2)²"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y''=-\dfrac{5}{(3x-2)^2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0481.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자·분모 일차식의 계수를 자유롭게 바꿀 수 있음(답의 분자 = ad−bc 상수). 제약: ad−bc ≠ 0 이어야 상수함수가 아니고, 분모 계수 3 을 바꾸면 답의 분모 제곱 안도 바뀜."
    creative: "(1) 분자를 이차식으로 두어 답의 분자가 일차식이 되게 하기(★1~2) (2) (x+1)/(3x−2) = 1/3 + (5/3)/(3x−2) 로 나눈 뒤 1/f 꼴로 미분해 같은 답인지 확인(★2 · 전략 비교) (3) 분자가 항상 상수인 이유(ad−bc)를 문자 계수로 일반화해 묻기(Mₐ 2 · ★2)."
```

```yaml
- id: RPM-CALC2-0482
  page: 73
  vendor_label: "교과서 05-1 함수의 몫의 미분법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    $y=\dfrac{\ln x}{x}$ 을 미분(분자가 로그함수인 f(x)/g(x) 꼴).
  category: "몫의 미분법 → (1/x)·x − ln x → (1−ln x)/x²"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "몫의 미분법(f(x)/g(x) 꼴)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f = ln x, g = x 로 (f'g − fg')/g² = (1 − ln x)/x². 분자의 (1/x)·x = 1 정리가 전부. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "f = ln x, f' = 1/x, g = x → (1 − ln x)/x²"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y''=\dfrac{1-\ln x}{x^2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0482.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모를 x²·x³(답 (1−2ln x)/x³ 등)으로, 분자를 ln x + c · log_a x 로 바꿀 수 있음. 제약: 분자 ln x 의 미분 1/x 와 분모 x 가 약분되는 구조가 유지돼야 답이 깔끔함."
    creative: "(1) y' = 0 이 되는 x(= e)를 묻기(★1~2 · 다음 단원 극대 준비) (2) x/ln x 로 뒤집어 분모 제곱 (ln x)² 에 익숙해지기(★1) (3) ln x · x^{−1} 로 보고 곱의 미분으로 같은 답 확인(★1)."
```

```yaml
- id: RPM-CALC2-0483
  page: 73
  vendor_label: "교과서 05-1 함수의 몫의 미분법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    $y=\dfrac{1-\cos x}{1+\cos x}$ 을 미분(분자·분모가 삼각함수인 f(x)/g(x) 꼴).
  category: "몫의 미분법 → 분자 전개 → sin x cos x 항 소거"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "몫의 미분법(f(x)/g(x) 꼴)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (f'g − fg')/g² 의 분자 sin x(1+cos x) − (1−cos x)(−sin x) = 2 sin x — sin x cos x 항이 상쇄된다. 전개·소거가 한 줄 더 들어가 Mₖ 2. 교과서 구역·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "f' = sin x, g' = −sin x → 분자 sin x(1+cos x) + sin x(1−cos x) = 2 sin x → 2 sin x/(1+cos x)²"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y''=\dfrac{2\sin x}{(1+\cos x)^2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0483.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "cos x 를 sin x 로, 상수 1 을 다른 수 a 로(답 2a sin x/(a+cos x)²) 바꿀 수 있음. 제약: 분자·분모의 삼각함수 부분이 같아야 교차항이 소거되고, 상수를 0 으로 두면 −1 이 되어 상수함수가 됨."
    creative: "(1) (1−cos x)/(1+cos x) = −1 + 2/(1+cos x) 로 고쳐 1/f 꼴로 미분하는 경로와 비교(★2 · 전략 비교) (2) 답이 tan²(x/2) 의 도함수와 같음을 반각 공식으로 확인(04단원 결합 ★2~3) (3) x=π/2 에서의 미분계수 묻기(★1)."
```

```yaml
- id: RPM-CALC2-0484
  page: 73
  vendor_label: "교과서 05-1 함수의 몫의 미분법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    $y=2x^{-5}$ 를 미분(음의 정수 지수 거듭제곱).
  category: "(x^n)' = nx^{n−1} (n 음의 정수) 공식 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "x^n (n 음의 정수)의 도함수"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (x^n)' = nx^{n−1} 이 음의 정수 n 에서도 성립(몫의 미분법으로 유도) → 2·(−5)x^{−6} = −10x^{−6}. 공식 한 줄. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "2x^{−5} → 2·(−5)·x^{−5−1} → −10x^{−6}"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y''=-10x^{-6}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0484.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 2 와 지수 −5 를 다른 정수로. 제약: 지수가 음수이므로 n−1 에서 절댓값이 커지는(−5 → −6) 방향을 학생이 확인해야 함."
    creative: "(1) 2/x⁵ 로 써서 음의 지수로 고치는 단계 추가(0486 골조 ★1) (2) 2x^{−5} 의 x=1 미분계수 묻기(★1) (3) 몫의 미분법 (1/x⁵)' 로 직접 구해 공식과 같음을 확인(★1)."
```

```yaml
- id: RPM-CALC2-0485
  page: 73
  vendor_label: "교과서 05-1 함수의 몫의 미분법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    $y=2x^2+x^{-7}$ 을 미분(양·음 정수 지수 항의 합).
  category: "항별 (x^n)' = nx^{n−1} 공식 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "x^n (n 음의 정수)의 도함수"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    항별로 4x − 7x^{−8}. 양의 지수와 음의 지수가 섞여 있어도 같은 공식. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "항별 미분 → 4x + (−7)x^{−8} → 4x − 7x^{−8}"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y''=4x-7x^{-8}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0485.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수·지수 자유. 제약: 음의 지수 항의 계수 부호(−7)를 놓치지 않도록 답의 부호를 명시."
    creative: "(1) 2x² + 1/x⁷ 로 써서 지수 변환 단계 추가(★1) (2) x^{−7} 을 x^{−n}(n 자연수)으로 두고 y' 의 일반형 묻기(Mₐ 2 · ★1~2) (3) 세 항 이상·음의 지수 두 항으로 계산량만 늘리기(★1)."
```

```yaml
- id: RPM-CALC2-0486
  page: 73
  vendor_label: "교과서 05-1 함수의 몫의 미분법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    $y=-\dfrac{4}{x^3}$ 을 미분(분수식을 음의 지수로 고쳐 미분).
  category: "−4/x³ = −4x^{−3} → (x^n)' 공식 → 분수식으로 되돌리기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "x^n (n 음의 정수)의 도함수"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    −4x^{−3} 으로 고치면 (−4)(−3)x^{−4} = 12/x⁴. 부호 두 개(계수 −4 · 지수 −3)의 곱이 양수가 되는 것이 확인 포인트. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "−4/x³ = −4x^{−3} → (−4)(−3)x^{−4} → 12/x⁴"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y''=\dfrac{12}{x^4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0486.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 −4 와 차수 3 을 바꿀 수 있음(답 = −계수·차수/x^{차수+1}). 제약: 답을 분수식으로 되돌려 쓰게 할지 음의 지수로 둘지 표기를 정함."
    creative: "(1) 몫의 미분법 (1/x³)' 로 직접 풀어 두 경로 비교(★1) (2) −4/x³ + 2/x 처럼 두 분수 항의 합(★1) (3) 접선 기울기가 12 인 점을 묻기(x=±1 · 역산 ★1~2)."
```

```yaml
- id: RPM-CALC2-0487
  page: 73
  vendor_label: "교과서 05-1 함수의 몫의 미분법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    $y=\dfrac{x^6-2}{x^4}$ 을 미분(분자를 항별로 나누어 지수 형태로 고친 뒤 미분).
  category: "항별 나누기 → x² − 2x^{−4} → (x^n)' 공식"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "x^n (n 음의 정수)의 도함수"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (x⁶−2)/x⁴ = x² − 2x^{−4} 로 나누면 2x + 8x^{−5}. 몫의 미분법을 그대로 쓰면 (6x⁵·x⁴ − (x⁶−2)·4x³)/x⁸ 을 정리해야 해 길어지므로 「먼저 나누기」가 이 문항의 핵심. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "(x⁶−2)/x⁴ = x² − 2x^{−4} → 2x + 8x^{−5}"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y''=2x+\dfrac{8}{x^5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0487.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자의 차수·상수와 분모 차수를 바꿀 수 있음. 제약: 분모가 단항식이어야 항별로 나눌 수 있고, 분모를 x⁴+1 처럼 다항식으로 바꾸면 몫의 미분법이 필수(0481 골조)."
    creative: "(1) 몫의 미분법으로 풀고 나누기 경로와 답이 같은지 확인(★1~2 · 계산 비교) (2) 분자를 x⁶−2x⁴+3 처럼 세 항으로(★1) (3) 분모를 x^k 매개변수로 두고 y' 의 일반형(Mₐ 2 · ★2)."
```

```yaml
- id: RPM-CALC2-0488
  page: 73
  vendor_label: "교과서 05-1 함수의 몫의 미분법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    $y=\tan x+2\cot x$ 를 미분(tan·cot 의 도함수 공식).
  category: "(tan x)' = sec²x · (cot x)' = −csc²x 공식 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수 tan·cot·sec·csc 의 도함수"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    항별로 sec²x + 2·(−csc²x) = sec²x − 2csc²x. cot 의 도함수 부호(−)가 유일한 확인점. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "(tan x)' = sec²x, (cot x)' = −csc²x → sec²x − 2csc²x"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y''=\sec^2 x-2\csc^2 x$'
  answer_source: "해설(답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0488.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 2 를 다른 수로, tan·cot 을 sec·csc 조합으로 바꿀 수 있음. 제약: cot·csc 의 도함수는 부호가 음이므로 계수 부호와 곱해 답의 부호를 명시."
    creative: "(1) tan x = sin x/cos x 로 몫의 미분법에서 sec²x 를 직접 유도하게 하기(★1~2) (2) tan x + cot x = 1/(sin x cos x) 임을 이용해 답을 다른 형태로 확인(0489 골조 ★2) (3) x=π/4 미분계수(★1)."
```

```yaml
- id: RPM-CALC2-0489
  page: 73
  vendor_label: "교과서 05-1 함수의 몫의 미분법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    $y=\sec x\csc x$ 를 미분(sec·csc 의 곱 → 곱의 미분법 뒤 항등식으로 정리).
  category: "곱의 미분법 → sec x csc x(tan x − cot x) → 항등식 정리 → sec²x − csc²x"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수 tan·cot·sec·csc 의 도함수"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (sec x)' = sec x tan x, (csc x)' = −csc x cot x 를 곱의 미분법에 넣으면 sec x csc x(tan x − cot x). 여기서 sec x csc x tan x = sec²x, sec x csc x cot x = csc²x 로 정리해야 답 형태가 나온다(항등식 두 번). 교과서 구역·통찰 없음이나 M_total 6 으로 범위 내 최고 노동량 → ★1 유지.
    [분류 이슈] 곱의 미분 + 항등식 정리 두 단계가 사슬로 이어져 유형 구역 「삼각함수의 도함수」 기본 문항(★2)과 골조가 같음. 후보 ★1/★2.
  tier: star_1
  mechanism_primary: "곱의 미분법 → sec x csc x(tan x − cot x) → 항등식 정리 → sec²x − csc²x"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$y''=\sec^2 x-\csc^2 x$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0489.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "sec x csc x 를 sec x tan x · csc x cot x · tan x sec x 등 다른 짝으로 바꿀 수 있음. 제약: 답을 정리된 형태(sec²x − csc²x)로 요구하면 항등식 정리가 필요하고, 정리 전 형태를 허용하면 ★1 로 내려감."
    creative: "(1) sec x csc x = 1/(sin x cos x) 로 고쳐 몫의 미분법으로 풀고 답이 같음을 확인(★2 · 전략 비교) (2) = 2/sin 2x 로 보면 합성함수 미분(다음 구역)과 결합(★2~3) (3) y' = 0 이 되는 x(sec²x = csc²x → x = π/4 등)를 묻기(★2)."
```

```yaml
- id: RPM-CALC2-0490
  page: 73
  vendor_label: "교과서 05-1 함수의 몫의 미분법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    $y=\dfrac{x}{\tan x}$ 을 미분(몫의 미분법 뒤 sec²x/tan²x = csc²x 로 정리).
  category: "몫의 미분법 → (tan x − x sec²x)/tan²x → 항별 나누기 → cot x − x csc²x"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수 tan·cot·sec·csc 의 도함수"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f = x, g = tan x 로 (tan x − x sec²x)/tan²x. 항별로 나누어 1/tan x = cot x, sec²x/tan²x = 1/sin²x = csc²x 로 정리해야 답 형태. x cot x 로 고쳐 곱의 미분법을 쓰면 cot x − x csc²x 가 바로 나오므로 경로에 따라 정리량이 크게 다르다. 교과서 구역·통찰 없음·M_total 6 → ★1 유지.
    [분류 이슈] 몫의 미분 뒤 항등식 정리(sec²/tan² = csc²)가 필요해 0489 와 같이 유형 구역 기본 문항(★2) 수준. 후보 ★1/★2.
  tier: star_1
  mechanism_primary: "(tan x − x sec²x)/tan²x → 항별 나누기 → cot x − x csc²x (또는 x cot x 곱의 미분)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$y''=\cot x-x\csc^2 x$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0490.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자 x 를 x²·2x 로, 분모 tan x 를 cot x·sec x 로 바꿀 수 있음. 제약: 답을 cot·csc 로 정리하게 할지 tan·sec 그대로 둘지 표기 기준을 정해야 하며, 정리 형태를 요구할수록 항등식 단계가 늘어남."
    creative: "(1) x cot x 로 고쳐 곱의 미분법으로 푸는 경로를 먼저 주고 몫의 미분법 답과 대조(★2 · 전략 비교) (2) tan x/x 로 뒤집어 분모 x² 형태(★1~2) (3) x=π/4 에서의 접선의 기울기(★1~2)."
```

### 교과서 05-2 합성함수의 미분법

```yaml
- id: RPM-CALC2-0491
  page: 73
  vendor_label: "교과서 05-2 합성함수의 미분법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    $y=(x+3)^6$ 을 미분({f(x)}^n 꼴의 합성함수 미분법).
  category: "{f}^n → n{f}^{n−1}·f' · f' = 1"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "합성함수의 미분법({f(x)}^n 꼴)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    u = x+3 으로 y = u⁶, dy/dx = 6u⁵·1 = 6(x+3)⁵. 전개하지 않고 겉·속을 차례로 미분하는 첫 문항. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "u = x+3 → 6u⁵·u' → 6(x+3)⁵"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y''=6(x+3)^5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0491.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 6 과 속 함수 x+3 을 바꿀 수 있음(속이 ax+b 면 답에 a 가 곱해짐). 제약: 지수가 작으면(2·3) 전개해서 푸는 학생이 있으므로 합성 미분을 강제하려면 지수 5 이상 또는 속을 이차식으로."
    creative: "(1) 속을 2x+3 으로 두어 속미분 2 가 붙는 점(★1) (2) (x²+3)⁶ 처럼 속이 이차식(★1) (3) (x+3)⁶ 의 x=−2 미분계수·접선(★1)."
```

```yaml
- id: RPM-CALC2-0492
  page: 73
  vendor_label: "교과서 05-2 합성함수의 미분법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    $y=e^{3x+1}$ 을 미분(e^{f(x)} 꼴).
  category: "e^{f} → e^{f}·f' · f' = 3"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "합성함수의 미분법(e^{f(x)} · a^{f(x)} 꼴)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (e^{3x+1})' = e^{3x+1}·3. 지수법칙으로 e·e^{3x} 로 풀어 써도 같음. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "e^{u}, u = 3x+1 → e^{u}·3 → 3e^{3x+1}"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y''=3e^{3x+1}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0492.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수의 계수 3 과 상수 1 을 바꿀 수 있음(답의 계수 = 지수의 계수). 제약: 지수를 이차식(x²+1)으로 바꾸면 답에 2x 가 붙어 0493 골조로 이동."
    creative: "(1) e^{3x+1} = e·e^{3x} 로 풀어 03단원 공식만으로 풀고 대조(★1) (2) e^{−3x+1} 로 부호 함정(★1) (3) y' = 6 이 되는 x 묻기(로그 역산 ★2)."
```

```yaml
- id: RPM-CALC2-0493
  page: 73
  vendor_label: "교과서 05-2 합성함수의 미분법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    $y=2^{x^2-x}$ 을 미분(a^{f(x)} 꼴 · ln a 인수).
  category: "a^{f} → a^{f}·ln a·f' · f' = 2x−1"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "합성함수의 미분법(e^{f(x)} · a^{f(x)} 꼴)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (a^u)' = a^u ln a · u' 에 u = x²−x, u' = 2x−1 → (2x−1)2^{x²−x} ln 2. ln 2 를 빠뜨리거나 u' 를 곱하지 않는 것이 함정. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "u = x²−x → 2^{u}·ln 2·u' → (2x−1)2^{x²−x} ln 2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y''=(2x-1)2^{x^2-x}\ln 2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0493.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 2 를 3·5·1/2 로, 지수 x²−x 를 다른 이차식으로 바꿀 수 있음. 제약: 밑이 e 면 ln a 가 사라져 0492 골조, 밑 1/2 는 ln(1/2) = −ln 2 부호 처리가 붙음."
    creative: "(1) 2^{x²−x} = e^{(x²−x)ln 2} 로 고쳐 e^{f} 공식으로 풀고 대조(★1~2) (2) y' = 0 이 되는 x(= 1/2)를 묻기(★1~2) (3) 밑을 a 매개변수로 두고 y'(0) = −ln 3 이 되는 a(역산 · Mₐ 2 · ★2)."
```

```yaml
- id: RPM-CALC2-0494
  page: 73
  vendor_label: "교과서 05-2 합성함수의 미분법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    $y=\ln(3-2x)$ 를 미분(ln f(x) 꼴 · 속미분이 음수).
  category: "ln f → f'/f · f' = −2 → 분모 부호 정리"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "합성함수의 미분법(ln|f(x)| · log_a|f(x)| 꼴)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (ln u)' = u'/u 에 u = 3−2x, u' = −2 → −2/(3−2x) = 2/(2x−3). 답지는 분모 부호를 바꿔 정리한 형태. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "u = 3−2x → u'/u = −2/(3−2x) → 2/(2x−3)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y''=\dfrac{2}{2x-3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0494.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "속 함수 3−2x 의 계수·상수를 바꿀 수 있음(답 a/(ax+b)). 제약: 진수 조건 3−2x>0(x<3/2)이 정의역이므로 미분계수를 묻는 점은 그 안에서 고름."
    creative: "(1) ln|3−2x| 로 절댓값을 붙여 정의역을 넓히고 답이 그대로임을 확인(0497 골조 ★1) (2) ln(3−2x) = ln 2 + ln(3/2 − x) 처럼 로그 성질로 풀어 쓰고 미분 대조(★1~2) (3) 미분계수 −2 가 되는 x 를 묻기(★1~2)."
```

```yaml
- id: RPM-CALC2-0495
  page: 73
  vendor_label: "교과서 05-2 합성함수의 미분법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    $y=\cos(3x^2+x)$ 를 미분(cos f(x) 꼴).
  category: "cos f → −sin f·f' · f' = 6x+1"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "합성함수의 미분법(삼각함수 sin f(x)·cos f(x) 꼴)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    u = 3x²+x → −sin u·u' = −(6x+1) sin(3x²+x). 부호(−)와 속미분 곱을 함께 챙기는 문항. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "u = 3x²+x → −sin u·(6x+1) → −(6x+1) sin(3x²+x)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y''=-(6x+1)\sin(3x^2+x)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0495.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "속 이차식의 계수와 cos↔sin 을 바꿀 수 있음. 제약: cos 는 도함수에 −가 붙고 sin 은 붙지 않으므로 답의 부호를 명시."
    creative: "(1) cos²x 처럼 겉이 거듭제곱인 경우(0496 골조 ★1) (2) cos(3x²+x) 의 x=0 미분계수(★1) (3) sin(cos x) 처럼 삼각함수 이중 합성(★2)."
```

```yaml
- id: RPM-CALC2-0496
  page: 73
  vendor_label: "교과서 05-2 합성함수의 미분법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    $y=\sin^3 x$ 를 미분({sin x}³ 꼴 · 겉이 거듭제곱).
  category: "{f}³ → 3{f}²·f' · f = sin x"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "합성함수의 미분법({f(x)}^n 꼴)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (sin x)³ 로 읽고 3 sin²x·cos x. sin³x 표기가 (sin x)³ 임을 아는 것이 표기 함정(sin x³ 과 구별). 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "u = sin x → 3u²·u' → 3 sin²x cos x"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y''=3\sin^2 x\cos x$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0496.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 3 과 sin↔cos·tan 을 바꿀 수 있음(cos³x 면 −3cos²x sin x). 제약: sin³x 와 sin x³·sin 3x 표기를 구별하는 것이 핵심이므로 표기를 혼용하지 않음."
    creative: "(1) sin x³ · sin 3x · sin³x 세 가지를 함께 미분해 표기 차이 대조(T-표기 · ★2) (2) sin³x 를 삼배각 공식으로 풀어 03·04단원 공식으로 풀고 대조(★2~3) (3) sin²x + cos²x 를 미분해 0 이 됨을 확인(★1)."
```

```yaml
- id: RPM-CALC2-0497
  page: 73
  vendor_label: "교과서 05-2 합성함수의 미분법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    $y=\ln|x^2-3|$ 을 미분(ln|f(x)| 꼴 · 절댓값 처리).
  category: "ln|f| → f'/f · 절댓값 무관 · f' = 2x"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "합성함수의 미분법(ln|f(x)| · log_a|f(x)| 꼴)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (ln|u|)' = u'/u 이므로 2x/(x²−3). 절댓값이 있어도 도함수 공식이 같다는 것이 이 문항의 확인점. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "u = x²−3 → u'/u → 2x/(x²−3)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y''=\dfrac{2x}{x^2-3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0497.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "속 함수를 다른 이차식·삼차식으로 바꿀 수 있음(답 f'/f). 제약: 절댓값을 빼면 진수 조건 x²−3>0 이 붙어 정의역이 바뀌지만 도함수 식은 같음."
    creative: "(1) ln|x²−3| 을 ln|x−√3| + ln|x+√3| 로 쪼개 미분하고 통분 대조(★2) (2) x=1 에서의 미분계수(속이 음수인 점 · T-범위 ★1~2) (3) (ln|tan x|)' 같은 삼각 결합(★2)."
```

```yaml
- id: RPM-CALC2-0498
  page: 73
  vendor_label: "교과서 05-2 합성함수의 미분법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    $y=\ln|\cos x|$ 를 미분(ln|f(x)| 꼴 → 답이 −tan x 로 정리).
  category: "ln|cos x| → (cos x)'/cos x → −sin x/cos x = −tan x"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "합성함수의 미분법(ln|f(x)| · log_a|f(x)| 꼴)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (ln|u|)' = u'/u 에 u = cos x → −sin x/cos x = −tan x. 답을 tan 으로 정리하는 한 단계. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "u = cos x → u'/u = −sin x/cos x → −tan x"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y''=-\tan x$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0498.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "cos x 를 sin x(답 cot x)·sec x(답 tan x)로 바꿀 수 있음. 제약: 절댓값이 있어야 cos x<0 구간까지 정의됨을 설명하고, 답은 정리된 삼각함수 하나로 두기."
    creative: "(1) ln|sin x|·ln|sec x| 와 함께 세 개를 미분해 부호·역수 관계 관찰(★1~2) (2) (ln|cos x|)' = −tan x 를 거꾸로 읽어 tan x 의 부정적분 예고(★2 · 적분 단원 연결) (3) ln|cos 2x| 로 속미분 2 추가(★1)."
```

```yaml
- id: RPM-CALC2-0499
  page: 73
  vendor_label: "교과서 05-2 합성함수의 미분법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    $y=\log_2|e^x-1|$ 을 미분(log_a|f(x)| 꼴 · 분모에 ln a).
  category: "log_a|f| → f'/(f ln a) · f' = e^x"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "합성함수의 미분법(ln|f(x)| · log_a|f(x)| 꼴)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (log_a|u|)' = u'/(u ln a) 에 u = e^x−1, u' = e^x → e^x/((e^x−1) ln 2). ln 2 의 위치(분모)와 절댓값 처리를 함께 확인. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "u = e^x−1 → u'/(u ln 2) → e^x/((e^x−1) ln 2)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y''=\dfrac{e^x}{(e^x-1)\ln 2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0499.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 2 를 3·10 으로, 속을 e^x+1·e^{2x}−1 로 바꿀 수 있음. 제약: 밑 e 면 ln a 가 사라져 0497 골조가 되고, 속 e^x−1 은 x=0 에서 0 이라 절댓값이 필요함."
    creative: "(1) 밑 변환 log₂|u| = ln|u|/ln 2 로 고쳐 ln 공식만으로 풀고 대조(★1) (2) x=ln 2 에서의 미분계수(★1~2) (3) log₂(e^x−1) − log₂(e^x+1) 처럼 두 항 차의 미분 뒤 통분(★2)."
```

```yaml
- id: RPM-CALC2-0500
  page: 73
  vendor_label: "교과서 05-2 합성함수의 미분법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    $y=\dfrac{1}{x\sqrt{x}}$ 을 미분(무리식을 유리수 지수 x^{−3/2} 로 고쳐 미분).
  category: "1/(x√x) = x^{−3/2} → (x^r)' = rx^{r−1} → 무리식으로 되돌리기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "x^r (r 유리수·실수)의 도함수"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x√x = x^{3/2} 이므로 y = x^{−3/2}, y' = −(3/2)x^{−5/2} = −3/(2x²√x). 지수 변환과 되돌리기가 계산의 전부. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "1/(x√x) = x^{−3/2} → (−3/2)x^{−5/2} → −3/(2x²√x)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y''=-\dfrac{3}{2x^2\sqrt{x}}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0500.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x√x 를 x²√x·√x·∛x 로 바꿀 수 있음(지수 5/2 · 1/2 · 1/3). 제약: 답을 무리식으로 되돌린 형태로 요구하면 x^{−5/2} = 1/(x²√x) 변환을 학생이 해야 함."
    creative: "(1) 몫의 미분법 (1/f)' 에 f = x√x 를 넣어 풀고 대조(★2 · 계산 비교) (2) x=4 에서의 미분계수(★1) (3) 접선 기울기가 −3/2 인 점을 묻기(x=1 · 역산 ★2)."
```

```yaml
- id: RPM-CALC2-0501
  page: 73
  vendor_label: "교과서 05-2 합성함수의 미분법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    $y=3x^{\sqrt{3}}\ (x>0)$ 을 미분(실수 지수 거듭제곱).
  category: "(x^r)' = rx^{r−1} (r 실수) 공식 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "x^r (r 유리수·실수)의 도함수"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    지수가 무리수 √3 이어도 (x^r)' = rx^{r−1} 이므로 3√3·x^{√3−1}. x>0 조건이 실수 지수의 정의역임을 확인. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "3x^{√3} → 3·√3·x^{√3−1}"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y''=3\sqrt{3}\,x^{\sqrt{3}-1}$'
  answer_source: "해설(답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0501.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 3 과 지수 √3 을 다른 무리수(√2·π)로 바꿀 수 있음. 제약: x>0 조건은 실수 지수 정의를 위해 필수이고, 지수를 정수·유리수로 바꾸면 0484·0500 골조가 됨."
    creative: "(1) x^{√3} 을 e^{√3 ln x} 로 고쳐 합성 미분으로 풀고 대조(★2) (2) x^{√3} 과 (√3)^x 를 함께 미분해 밑·지수 역할 대조(T-표기 · ★2) (3) x=1 에서의 미분계수 3√3 묻기(★1)."
```

```yaml
- id: RPM-CALC2-0502
  page: 73
  vendor_label: "교과서 05-2 합성함수의 미분법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    $y=x^e\ (x>0)$ 을 미분(지수가 상수 e 인 거듭제곱 · e^x 와 구별).
  category: "(x^e)' = ex^{e−1} · e^x 와 표기 대조"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "x^r (r 유리수·실수)의 도함수"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    e 는 상수이므로 (x^r)' 공식으로 ex^{e−1}. e^x 의 도함수 e^x 와 혼동하는 표기 함정이 이 문항의 목적. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "x^e → e·x^{e−1}"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y''=ex^{e-1}$'
  answer_source: "해설(답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0502.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 e 를 π·√2 로 바꿀 수 있음. 제약: 밑이 x, 지수가 상수여야 하며 x>0 조건 유지."
    creative: "(1) x^e·e^x·e^e 세 개를 함께 미분해 상수·변수 위치 대조(T-표기 · ★2) (2) y = x^e·e^x 곱의 미분(★2) (3) x^e 의 x=1 미분계수 e 묻기(★1)."
```

```yaml
- id: RPM-CALC2-0503
  page: 73
  vendor_label: "교과서 05-2 합성함수의 미분법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    함수 $y=\sqrt{2x^2+1}$ 의 $\dfrac{dy}{dx}$ 를 $u=2x^2+1$ 로 놓고 구하는 과정의 빈칸 ㈎~㈑(y 를 u 로 나타낸 식 · dy/du · du/dx · dy/dx) 채우기.
  category: "치환 u = 2x²+1 → dy/du · du/dx → 곱해서 x 로 되돌리기"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "합성함수의 미분법(dy/du·du/dx 과정 빈칸)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    y = √u → dy/du = 1/(2√u), du/dx = 4x, 곱하면 4x/(2√u) = 2x/√(2x²+1). 합성함수 미분법의 정의(dy/dx = dy/du·du/dx)를 빈칸으로 따라가게 한 문항. 교과서 구역·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "y = √u, dy/du = 1/(2√u), du/dx = 4x → 곱 → 2x/√(2x²+1)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '㈎ $\sqrt{u}$ \quad ㈏ $\dfrac{1}{2\sqrt{u}}$ \quad ㈐ $4x$ \quad ㈑ $\dfrac{2x}{\sqrt{2x^2+1}}$'
  answer_source: "해설(답지 「풀이 참조」)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0503.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "속 함수 2x²+1 의 계수·상수와 겉 함수 √u 를 ∛u·u⁵ 로 바꿀 수 있음. 제약: 빈칸 네 개의 역할(치환식·겉 미분·속 미분·곱)이 유지되도록 겉·속이 모두 미분 가능한 기본 함수여야 함."
    creative: "(1) 빈칸 없이 √(2x²+1) 을 바로 미분하게 하고 과정과 대조(★1) (2) √(2x²+1) = (2x²+1)^{1/2} 로 유리수 지수 공식으로 풀기(★1) (3) y = √(sin x + 2) 처럼 속을 삼각함수로 바꿔 같은 과정 반복(★2)."
```

### 교과서 05-3 매개변수로 나타낸 함수의 미분법

```yaml
- id: RPM-CALC2-0504
  page: 75
  vendor_label: "교과서 05-3 매개변수로 나타낸 함수의 미분법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    매개변수 $x=3t-4$, $y=6t+7$ 에서 t 를 소거해 x 와 y 사이의 관계식 구하기.
  category: "t = (x+4)/3 → y 에 대입 → 직선"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "매개변수 소거(x, y 사이의 관계식)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x = 3t−4 에서 t = (x+4)/3, y = 6·(x+4)/3 + 7 = 2x+15. 일차식 소거 한 단계. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "t = (x+4)/3 → y = 2(x+4)+7 → y = 2x+15"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y=2x+15$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0504.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x, y 의 t 계수와 상수를 바꿀 수 있음(기울기 = y 의 t 계수/x 의 t 계수). 제약: x 의 t 계수가 0 이 아니어야 t 로 풀 수 있고, 정수 계수로 두면 답이 정수 직선."
    creative: "(1) x = t², y = 2t 처럼 이차식으로 두어 포물선 y² = 4x 와 범위 x≥0 을 함께 묻기(T-범위 ★2) (2) 관계식 없이 바로 dy/dx = 6/3 = 2 를 구해 기울기와 대조(0506 골조 ★1) (3) 두 매개변수 직선의 교점을 묻기(★2)."
```

```yaml
- id: RPM-CALC2-0505
  page: 75
  vendor_label: "교과서 05-3 매개변수로 나타낸 함수의 미분법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    매개변수 $x=2\cos t$, $y=3\sin t$ 에서 t 를 소거해 x 와 y 사이의 관계식(타원) 구하기.
  category: "cos t = x/2, sin t = y/3 → sin²t + cos²t = 1 → 타원"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "매개변수 소거(x, y 사이의 관계식)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    cos t = x/2, sin t = y/3 을 sin²t + cos²t = 1 에 넣어 x²/4 + y²/9 = 1. 삼각항등식으로 t 를 없애는 표준 절차. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "cos t = x/2, sin t = y/3 → 항등식 대입 → x²/4 + y²/9 = 1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{x^2}{4}+\dfrac{y^2}{9}=1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0505.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "반지름 2·3 을 다른 양수로(같으면 원), 중심 이동 x = 2cos t + 1 을 추가할 수 있음. 제약: cos·sin 이 각각 x, y 에 하나씩 있어야 항등식 한 번으로 소거되고, 답의 분모는 계수의 제곱."
    creative: "(1) x = sec t, y = tan t 로 두어 1 + tan² = sec² 항등식 사용(쌍곡선 ★2) (2) x = cos 2t, y = sin t 로 두면 이배각 공식이 필요(★2~3 · 04단원 결합) (3) 관계식과 dy/dx 를 함께 구해 음함수 미분과 대조(★2)."
```

```yaml
- id: RPM-CALC2-0506
  page: 75
  vendor_label: "교과서 05-3 매개변수로 나타낸 함수의 미분법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    매개변수 $x=t^2+2$, $y=t^4-t^3$ 에서 $\dfrac{dy}{dx}$ 구하기(다항식 · t≠0 조건).
  category: "dy/dt ÷ dx/dt → (4t³−3t²)/(2t) → 약분"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "매개변수로 나타낸 함수의 미분법"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    dx/dt = 2t, dy/dt = 4t³−3t² 이므로 dy/dx = (4t³−3t²)/(2t) = 2t² − (3/2)t (t≠0). 약분 뒤 t≠0 조건을 남기는 것이 확인점. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "dx/dt = 2t, dy/dt = 4t³−3t² → 비 → 2t² − (3/2)t (t≠0)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{dy}{dx}=2t^2-\dfrac{3}{2}t$ \cond{$t\ne 0$}'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0506.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x, y 의 다항식 차수·계수를 바꿀 수 있음. 제약: dx/dt = 0 이 되는 t 를 제외 조건으로 반드시 명시하고, dy/dt 가 dx/dt 의 인수를 갖게 두면 약분이 되어 답이 깔끔함."
    creative: "(1) 특정 t(=1)에서의 dy/dx 값을 묻기(★1) (2) dy/dx = 0 이 되는 t 를 묻기(역산 ★1~2) (3) 관계식 y = (x−2)² − (x−2)^{3/2} 를 만들어 직접 미분과 대조(★2~3 · 유리수 지수)."
```

```yaml
- id: RPM-CALC2-0507
  page: 75
  vendor_label: "교과서 05-3 매개변수로 나타낸 함수의 미분법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    매개변수 $x=\dfrac{1}{t+2}$, $y=-3(t+2)^3$ 에서 $\dfrac{dy}{dx}$ 구하기(유리식·거듭제곱 합성).
  category: "dx/dt = −1/(t+2)², dy/dt = −9(t+2)² → 비 → 부호·거듭제곱 정리"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "매개변수로 나타낸 함수의 미분법"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    dx/dt = −(t+2)^{−2}, dy/dt = −9(t+2)² 이므로 dy/dx = −9(t+2)² ÷ (−(t+2)^{−2}) = 9(t+2)⁴. 음수÷음수와 분수 나누기의 지수 합산(2+2)이 계산 부담. 교과서 구역·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "dx/dt = −(t+2)^{−2}, dy/dt = −9(t+2)² → 비 → 9(t+2)⁴"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{dy}{dx}=9(t+2)^4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0507.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "y 의 계수 −3 과 지수 3, x 의 분모 t+2 를 바꿀 수 있음(x = 1/(t+a), y = c(t+a)^n 짝이면 답 −cn(t+a)^{n+1}). 제약: x, y 의 속 함수(t+2)가 같아야 지수가 깔끔히 합쳐짐."
    creative: "(1) t+2 = 1/x 로 y = −3/x³ 을 만들어 직접 미분 후 x 로 답 대조(★2 · 전략 비교) (2) 답을 x 로 표현하게 하기(9/x⁴ · ★2) (3) 부호를 바꿔 y = 3(t+2)³ 으로 답 부호 대조(★1)."
```

```yaml
- id: RPM-CALC2-0508
  page: 75
  vendor_label: "교과서 05-3 매개변수로 나타낸 함수의 미분법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    매개변수 $x=2e^{t+1}$, $y=e^{4t-3}$ 에서 $\dfrac{dy}{dx}$ 구하기(지수함수 · 지수법칙 정리).
  category: "dx/dt = 2e^{t+1}, dy/dt = 4e^{4t−3} → 비 → 지수법칙 e^{(4t−3)−(t+1)}"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "매개변수로 나타낸 함수의 미분법"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    dy/dx = 4e^{4t−3}/(2e^{t+1}) = 2e^{3t−4}. 합성 미분(계수 4·1)과 지수법칙 뺄셈이 전부. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "dx/dt = 2e^{t+1}, dy/dt = 4e^{4t−3} → 비 → 2e^{3t−4}"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{dy}{dx}=2e^{3t-4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0508.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수의 계수(1, 4)와 상수, 앞 계수 2 를 바꿀 수 있음(답 계수 = y 지수계수·y 계수/(x 지수계수·x 계수)). 제약: 밑이 같아야 지수법칙으로 한 항이 되고, 밑을 2^t 로 바꾸면 ln 2 가 약분되는지 확인."
    creative: "(1) x 를 t 로 풀어 y 를 x 로 나타내고 직접 미분 대조(★2) (2) dy/dx 를 x 로 표현하게 하기(★2) (3) 밑을 2 와 e 로 다르게 두어 ln 2 가 남는 답(★2)."
```

```yaml
- id: RPM-CALC2-0509
  page: 75
  vendor_label: "교과서 05-3 매개변수로 나타낸 함수의 미분법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    매개변수 $x=4t+3\cos t$, $y=5t-2\sin t$ 에서 $\dfrac{dy}{dx}$ 구하기(삼각함수 포함 · 정리 없이 비 그대로).
  category: "dx/dt = 4−3sin t, dy/dt = 5−2cos t → 비"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "매개변수로 나타낸 함수의 미분법"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    dx/dt = 4 − 3 sin t, dy/dt = 5 − 2 cos t 를 나누면 끝. 4 − 3 sin t > 0 이라 제외 조건 없이 항상 정의됨. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "dx/dt = 4 − 3 sin t, dy/dt = 5 − 2 cos t → (5 − 2cos t)/(4 − 3 sin t)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{dy}{dx}=\dfrac{5-2\cos t}{4-3\sin t}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0509.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 4·3·5·2 를 바꿀 수 있음. 제약: x 의 삼각항 계수가 t 계수보다 작아야(3<4) dx/dt ≠ 0 이 보장되어 조건 없이 답이 나오고, 크게 두면 제외 조건이 생김."
    creative: "(1) t = π/2 에서의 dy/dx 값(★1) (2) 계수를 4·5 로 바꿔 dx/dt = 0 이 되는 t 의 제외 조건을 묻기(T-범위 ★2) (3) 사이클로이드 x = t − sin t, y = 1 − cos t 로 바꾸어 반각 정리까지(★2~3)."
```

### 교과서 05-4 음함수의 미분법

```yaml
- id: RPM-CALC2-0510
  page: 75
  vendor_label: "교과서 05-4 음함수의 미분법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    방정식 $2x^2+3y^2=5$ 에서 음함수 미분법으로 $\dfrac{dy}{dx}$ 구하기.
  category: "양변 x 로 미분(y 항에 y' 곱) → y' 정리"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "음함수의 미분법"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    4x + 6y·y' = 0 → y' = −2x/(3y) (y≠0). y² 을 미분할 때 y' 을 곱하는 것이 음함수 미분의 핵심 한 단계. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "4x + 6y y' = 0 → y' = −2x/(3y) (y≠0)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{dy}{dx}=-\dfrac{2x}{3y}$ \cond{$y\ne 0$}'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0510.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 2·3·5 를 바꿀 수 있음(답 −(x 계수)x/((y 계수)y)). 제약: y≠0 조건을 답에 붙이고, 우변 상수는 도함수에 나타나지 않음."
    creative: "(1) 곡선 위 한 점(1, 1)에서의 접선 기울기(★1~2) (2) y = ±√((5−2x²)/3) 으로 풀어 직접 미분 후 대조(★2 · 전략 비교) (3) xy 항을 섞어 0511 골조로(★1~2)."
```

```yaml
- id: RPM-CALC2-0511
  page: 75
  vendor_label: "교과서 05-4 음함수의 미분법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    방정식 $xy=x^3+2y^2$ 에서 음함수 미분법으로 $\dfrac{dy}{dx}$ 구하기(xy 곱 항 포함).
  category: "xy 곱의 미분 → y' 항 모으기 → 인수로 묶어 나누기"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "음함수의 미분법"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    y + x y' = 3x² + 4y y' → y'(x − 4y) = 3x² − y → y' = (3x²−y)/(x−4y) (x−4y≠0). 곱의 미분과 y' 항 이항·묶기 두 단계. 교과서 구역·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "y + x y' = 3x² + 4y y' → y'(x−4y) = 3x² − y → (3x²−y)/(x−4y)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{dy}{dx}=\dfrac{3x^2-y}{x-4y}$ \cond{$x-4y\ne 0$}'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0511.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x³·2y² 의 계수·차수와 xy 의 계수를 바꿀 수 있음. 제약: y' 항이 양변에 생기도록 xy 와 y² 항을 함께 두고, 분모 x−4y ≠ 0 조건을 답에 명시."
    creative: "(1) 곡선 위 점(2, 1) 등에서의 접선 기울기 묻기(★2) (2) x²y + xy² = c 처럼 곱 항 두 개(★2) (3) y' = 0 이 되는 점의 조건으로 바꿔 역산(★2~3)."
```

```yaml
- id: RPM-CALC2-0512
  page: 75
  vendor_label: "교과서 05-4 음함수의 미분법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    방정식 $x^2-\dfrac{x}{y}+2=0$ 에서 음함수 미분법으로 $\dfrac{dy}{dx}$ 구하기(x/y 몫 항 포함).
  category: "x/y 몫의 미분(y' 포함) → y' 정리 → 답 형태 −2y²+y/x"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "음함수의 미분법"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    2x − (y − x y')/y² = 0 → x y'/y² = 1/y − 2x → y' = y/x − 2y². 몫의 미분 안에 y' 이 들어가 정리가 길고, 먼저 y 를 곱해 x²y − x + 2y = 0 으로 만든 뒤 미분하면 y' = (1−2xy)/(x²+2) 로 겉모양이 다른 답이 나온다(곡선 위에서 동치). 교과서 구역·통찰 없음이나 M_total 6 → ★1 유지.
    [분류 이슈] 몫 항이 든 음함수 미분 + 경로에 따라 답 형태가 달라 동치 확인이 필요 — 유형 구역 「음함수의 미분법」 기본 문항(★2) 수준. 후보 ★1/★2.
  tier: star_1
  mechanism_primary: "2x − (y − x y')/y² = 0 → x y'/y² = 1/y − 2x → y' = y/x − 2y²"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{dy}{dx}=-2y^2+\dfrac{y}{x}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0512.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x² 의 계수·상수 2 와 x/y 의 부호를 바꿀 수 있음. 제약: x/y 항이 있어야 몫의 미분 안에 y' 이 들어가고, 답을 어떤 형태(y/x − 2y² 또는 (1−2xy)/(x²+2))로 받을지 기준을 정해야 함."
    creative: "(1) 양변에 y 를 곱해 미분하는 경로와 몫 그대로 미분하는 경로의 답이 동치임을 보이게 하기(★2 · 전략 비교) (2) x/y = x²+2 → y = x/(x²+2) 로 풀어 직접 미분 후 대조(★2) (3) 점(1, 1/3)에서의 접선 기울기(★2)."
```

```yaml
- id: RPM-CALC2-0513
  page: 75
  vendor_label: "교과서 05-4 음함수의 미분법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    방정식 $\sin x+\cos y=1$ 에서 음함수 미분법으로 $\dfrac{dy}{dx}$ 구하기(삼각함수 · 부호).
  category: "cos x − sin y·y' = 0 → y' 정리"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "음함수의 미분법"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    cos x − sin y·y' = 0 → y' = cos x/sin y (sin y≠0). cos y 의 미분에서 −sin y 와 y' 을 함께 붙이는 한 단계. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "cos x − sin y y' = 0 → y' = cos x/sin y (sin y≠0)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{dy}{dx}=\dfrac{\cos x}{\sin y}$ \cond{$\sin y\ne 0$}'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0513.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "sin·cos 의 배치를 바꾸거나(cos x + sin y = 1 → y' = sin x/cos y) 계수를 붙일 수 있음. 제약: sin y ≠ 0 같은 제외 조건을 답에 명시하고, 부호가 답에 어떻게 반영되는지 확인."
    creative: "(1) sin(x+y) = 1 처럼 합성 안에 x, y 가 함께 있는 꼴(★2) (2) 점(π/2, π/2) 등 특정 점에서의 기울기(★1~2) (3) x sin y = 1 처럼 곱 항(★2)."
```

### 교과서 05-5 역함수의 미분법

```yaml
- id: RPM-CALC2-0514
  page: 75
  vendor_label: "교과서 05-5 역함수의 미분법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    역함수의 미분법으로 $x=\sqrt{y^2+9}$ 에서 $\dfrac{dy}{dx}$ 를 구하는 과정의 빈칸 ㈎(dx/dy 의 근호 안), ㈏(dy/dx) 채우기.
  category: "양변 y 로 미분 → dx/dy = y/√(y²+9) → dy/dx = 1/(dx/dy)"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "역함수의 미분법(dy/dx = 1/(dx/dy) 과정 빈칸)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    dx/dy = 2y/(2√(y²+9)) = y/√(y²+9) → ㈎ y²+9. 역수를 취해 dy/dx = √(y²+9)/y (y≠0) → ㈏. dy/dx = 1/(dx/dy) 정의를 빈칸으로 따라가는 문항. 교과서 구역·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "dx/dy = y/√(y²+9) → dy/dx = 1/(dx/dy) = √(y²+9)/y (y≠0)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '㈎ $y^2+9$ \quad ㈏ $\dfrac{\sqrt{y^2+9}}{y}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0514.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수 9 와 근호 안 y² 의 계수를 바꿀 수 있음(x = √(ay²+b) → dy/dx = √(ay²+b)/(ay)). 제약: dx/dy = 0 이 되는 y 를 제외 조건으로 명시하고, 근호 안이 항상 양수가 되게 상수를 양수로."
    creative: "(1) 빈칸 없이 dy/dx 를 x 로 나타내게 하기(y = √(x²−9) 로 풀어 x/√(x²−9) · ★2) (2) 음함수 미분법(x² = y²+9)으로 풀어 세 경로 대조(★2 · 전략 비교) (3) x = y³ + y 처럼 y 로 풀 수 없는 꼴로 바꿔 역함수 미분법이 유일한 경로임을 보이기(★2)."
```

## 표본 판정 요약 (36문)

- ★ 분포: ★1 36 · ★2 0 · ★3 0 · ★4 0 · ★5 0
- 통찰형 0 · 절차형 36 · premium 0
- type_hint 상위: 「합성함수의 미분법」 10(꼴별 하위 구분: ln|f|·log_a|f| 4 · {f}^n 2 · e^{f}·a^{f} 2 · 삼각 sin f·cos f 1 · dy/du·du/dx 과정 빈칸 1) · 「몫의 미분법」 5(1/f 꼴 2 · f/g 꼴 3) · 「x^n (n 음의 정수)의 도함수」 4 · 「매개변수로 나타낸 함수의 미분법」 4 · 「음함수의 미분법」 4 · 「삼각함수 tan·cot·sec·csc 의 도함수」 3 · 「x^r (r 유리수·실수)의 도함수」 3 · 「매개변수 소거(x, y 사이의 관계식)」 2 · 「역함수의 미분법(과정 빈칸)」 1
- 대상층: 하위권 33 · 중하위권 3(0489 · 0490 · 0512 — M_total 6)
- 그림: 0문
- 전사 답 확인 필요: 없음(36문 모두 재계산 일치)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-CALC2-0489 | 교과서 구역(★1 출발)이지만 곱의 미분법 뒤 sec·csc·tan 항등식 정리 두 번이 사슬로 이어져 M_total 6. 유형 구역 「삼각함수의 도함수」 기본 문항(★2)과 골조가 같음. 라벨 ★1 유지(1단 차·통찰 없음) | ★1 / ★2 |
| RPM-CALC2-0490 | 몫의 미분법 뒤 sec²/tan² = csc² 정리가 필요(M_total 6). x cot x 로 고치면 곱의 미분 한 단계라 경로에 따라 노동량이 갈림. 라벨 ★1 유지 | ★1 / ★2 |
| RPM-CALC2-0512 | 몫 항 x/y 가 든 음함수 미분(M_total 6). 양변에 y 를 곱해 미분하면 (1−2xy)/(x²+2) 로 겉모양이 다른 답이 나와 동치 확인이 필요 — 유형 구역 「음함수의 미분법」 기본 문항(★2) 수준. 라벨 ★1 유지 | ★1 / ★2 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 반복된 type_hint 9종은 교과서 소절(05-1~05-5)과 거의 1:1 이다. 「몫의 미분법」은 1/f 꼴과 f/g 꼴을 한 유형(base ★1)으로 통합해도 되고, 분자·분모가 삼각함수라 교차항 소거가 붙는 0483 은 tag 로만 남기면 된다.
- 「x^n (n 음의 정수)」과 「x^r (r 유리수·실수)」은 공식이 같으므로 하나의 유형 「일반 지수 거듭제곱의 도함수」(base ★1)로 통합 가능하다. 무리식→유리수 지수 변환(0500)·항별 나누기(0487)·x^e 와 e^x 표기 구별(0502)은 하위 tag.
- 「삼각함수 tan·cot·sec·csc 의 도함수」는 별도 유형으로 세워야 한다. 공식 대입만 하는 0488(★1)과 곱·몫의 미분 뒤 항등식 정리가 붙는 0489·0490(★2 후보)으로 base ★ 가 갈리므로 카탈로그에서 두 단계로 두는 것이 정확하다.
- 「합성함수의 미분법」은 겉 함수 종류({f}^n · e^{f}·a^{f} · ln|f|·log_a|f| · 삼각)로 유형을 쪼개지 말고 한 유형(base ★1)으로 두되 겉 함수 종류를 tag 로 남긴다. 유형 구역에서 「합성함수 미분 + 미분계수 역산」「이중 합성」이 붙으면 별도 유형(★2~3) 후보.
- 「매개변수 소거(관계식)」는 06단원 접선 방정식 준비용 소유형(base ★1)으로 따로 두고, 삼각항등식 소거(0505)는 tag. 「매개변수로 나타낸 함수의 미분법」은 별도 유형(base ★1)이며 유형 구역에서 「특정 t 에서의 미분계수」「dx/dt = 0 제외 조건」이 붙으면 ★2.
- 「음함수의 미분법」은 별도 유형(base ★1). 곱 항(0511)·몫 항(0512)이 들어가 y' 항 이항·묶기가 붙는 경우는 ★2 후보이며, 경로에 따라 답 형태가 달라지는 문항(0512)에는 카탈로그 차원의 「답 형태 동치」 검수 규칙이 필요하다.
- 「역함수의 미분법」은 별도 유형(base ★1). 이 범위에는 과정 빈칸 1문(0514)뿐이며, 빈칸 채우기(0503·0514)는 유형이 아니라 「과정 빈칸」 형식 tag 로 처리한다.
