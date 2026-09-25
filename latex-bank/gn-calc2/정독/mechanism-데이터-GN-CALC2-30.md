---
name: mechanism-데이터-GN-CALC2-30
description: 개념원리 미적분Ⅱ 30 정적분으로 정의된 함수(1/1 · 27문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 미적분Ⅱ · 전사본 latex-bank/gn-calc2
  section: 30 정적분으로 정의된 함수
  unit_code: "30"
  part: "1/1"
  extract_range: "246~252쪽 · 246-e11~252-519"
  total_problems: 27
  unit_total: 27
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). insight_type 은 insights 유무로만 정함(비면 절차형). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-calc2/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-calc2/items/<id>.tex
  image_source: latex-bank/gn-calc2/figures/ (이 범위에는 그림 문항 없음)
---

# 개념원리 미적분Ⅱ · 30 정적분으로 정의된 함수 (1/1) 정독 데이터 (v1.0)

246~252쪽 27문항 전수다. 구역은 「필수·발전 예제」 15문(필수 예제 e11~e15 다섯 + 각 예제 뒤의 확인체크 열 문항) · 「연습문제 STEP 1」 5문 · 「연습문제 STEP 2」 4문 · 「연습문제 실력 UP」 3문. 이 범위에 그림 문항은 없다.

벤더 난이도 신호는 구역과 태그다. 필수 예제(tag 「필수」)와 그 직후 확인체크는 같은 골조를 반복하므로 둘 다 ★2 를 출발점으로 삼았다(개념원리 익히기 구역의 확인체크와 달리 여기 확인체크는 필수 예제의 유제다). STEP 1 은 ★2, STEP 2 는 ★3, 실력 UP 은 ★4 에서 출발해 M_total·통찰로 ±1 조정했다. 이 단원은 「정적분을 상수로 치환」「적분 구간의 변수 → 양변 미분」「(x−t) 분리 후 두 번 미분」「극한 → 미분계수 정의」 네 골조의 반복이라, 단원이 직접 가르치는 절차를 그대로 밟는 문항은 통찰 0(절차형)으로 두고, 그 절차를 쓰기 전에 식을 한 번 옮겨야 하는 단계(합성 인수 치환 · 분모·상한 맞추기 · 적분을 원함수로 되돌리기)에만 I-EQV·I-RT 를 매겼다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(유형·depth·근거) · `variation_notes`(바꿔도 되는 수와 제약 · 통찰 골조를 유지한 설정 변경)를 채웠다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-CALC2-246-e11
  page: 246
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴⑵ 정적분 항의 구간이 상수인 등식 $f(x)=\sin x+\int_{0}^{\pi/2}f(t)dt$, $f(x)=e^{-x}+\int_{0}^{1}xf(t)dt$ 를 만족시키는 $f(x)$ 를 구하기.
  category: "정적분을 상수 k 로 치환 → f 꼴 확정 → k 일차방정식"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "적분 구간이 상수인 경우 — 정적분을 상수로 치환"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    적분 구간이 상수라 ∫ 항을 k 로 놓으면 f 가 즉시 결정되고, 그 f 를 정의식에 되넣어 k 의 일차방정식을 푼다. ⑵ 는 x 가 적분 밖 인수라 k 가 일차항 계수로 들어가는 차이뿐이다.
    단원이 직접 가르치는 표준 절차 그대로라 통찰 0. 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "∫ 상수항을 k 로 치환 → f(x)=g(x)+k(또는 +kx) → 정의식 재대입 → k 일차방정식 → f 확정"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $f(x)=\sin x+\dfrac{2}{2-\pi}$ ⑵ $f(x)=e^{-x}+2\left(1-\dfrac{1}{e}\right)x$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/246-e11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "적분 구간(0~π/2 → 0~π · 0~1 → 0~2)과 g(x)(sin x → cos x · e^{-x} → e^{x})를 바꿀 수 있다. 제약: 재대입 뒤 k 의 계수가 1 이 되면 k 가 소거돼 해가 없거나 부정이 되므로 1−(구간에서 나오는 계수)≠0 을 먼저 확인."
    creative: "(1) k 계수가 1 이 되도록 만들어 「만족시키는 f 가 없음」을 논증하게 하면 ★3(I-VF) (2) 피적분함수를 tf(t)·f(t)sin t 로 바꿔 부분적분을 강제해도 ★2 유지 (3) f 를 구하지 않고 ∫ 값 자체를 묻는 형태로 바꾸면 251-508 골조(★2)."
```

```yaml
- id: GN-CALC2-246-498
  page: 246
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴⑵ $f(x)=\ln x+\int_{1}^{e}f(t)dt$, $f(x)=\cos x+\int_{0}^{\pi/3}f(t)\sin t\,dt$ 를 만족시키는 $f(x)$ 를 구하기.
  category: "정적분을 상수 k 로 치환 → 부분적분·삼각 적분 → k 일차방정식"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "적분 구간이 상수인 경우 — 정적분을 상수로 치환"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    246-e11 과 같은 골조이고 재대입 뒤 계산만 무겁다. ⑴ 은 ∫ln t dt 부분적분, ⑵ 는 ∫sin t cos t dt 와 ∫sin t dt 로 갈라 k 계수 1/2 를 얻는다.
    골조 인식은 예제에서 이미 주어졌으므로 통찰 0, ★2 유지.
  tier: star_2
  mechanism_primary: "∫ 항을 k 로 치환 → f=g(x)+k → 재대입 시 ∫g·(가중치)와 k∫(가중치)로 분리 → k 확정"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $f(x)=\ln x+\dfrac{1}{2-e}$ ⑵ $f(x)=\cos x+\dfrac{3}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/246-498.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간(1~e → 1~e^2 · 0~π/3 → 0~π/2)과 가중치(sin t → cos t)를 바꿀 수 있다. 제약: ⑵ 처럼 가중치가 붙으면 k 의 계수가 ∫가중치 이므로 그 값이 1 이 되지 않게 구간을 고를 것(π/2 까지면 계수가 1 이 되어 해가 없어진다)."
    creative: "(1) 가중치를 t 로 바꿔 ∫t ln t dt 부분적분을 강제(★2) (2) 두 개의 상수 ∫_0^1 f, ∫_0^2 f 를 동시에 넣어 연립으로 만들면 ★3(I-CON) (3) f(x)=g(x)+k∫ 꼴에서 k 앞 계수를 미지수 a 로 두고 「해가 존재할 a 의 조건」을 묻기(★4 · I-BW)."
```

```yaml
- id: GN-CALC2-246-499
  page: 246
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $f(x)=e^x+3x+\int_{0}^{1}f'(t)dt$ 를 만족시키는 $f(x)$ 에 대하여 $f(1)$ 의 값.
  category: "∫f' 을 상수로 치환 → f' 은 상수와 무관 → k 계산 → f(1)"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "적분 구간이 상수인 경우 — 피적분함수가 f'(t) 인 형태"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ∫_0^1 f'(t)dt 를 k 로 놓으면 f(x)=e^x+3x+k 이고, 미분하면 상수 k 가 사라져 f'(t)=e^t+3 이 k 와 무관하게 확정된다. 그다음 k 를 계산해 f(1) 에 대입한다.
    상수의 미분이 0 이라는 표준 사실만 쓰므로 통찰 0. T-표기(∫f' 도 상수임을 놓치는 함정) 하나로 Mₜ=1, ★2 유지.
  tier: star_2
  mechanism_primary: "∫_0^1 f'(t)dt=k → f=e^x+3x+k → 미분해 f'(t)=e^t+3 → k=e+2 → f(1)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2e+5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/246-499.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "e^x+3x 의 계수와 적분 구간(0~1 → 0~2)을 바꿀 수 있다. 제약: ∫f' 은 f(1)−f(0) 이기도 하므로 두 경로의 답이 같아야 한다(검산 지점). 묻는 값을 f(1) 대신 f(0)·f'(1) 로 바꿔도 된다."
    creative: "(1) ∫_0^1 f'(t)dt 대신 f(1)−f(0) 을 직접 주어 같은 식을 만들게 하기(★2 · I-EQV) (2) f(x)=g(x)+∫_0^1 f''(t)dt 로 한 단계 올리기(★3) (3) f' 안에 k 가 남도록 g 를 kx 꼴로 설계하면 연립이 되어 ★3."
```

```yaml
- id: GN-CALC2-247-e12
  page: 247
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    연속함수 $f$ 가 $\int_{0}^{x}f(t)dt=e^x-2\cos x+a(x-1)$ 을 만족시킬 때 $f(\pi/2)$ 의 값($a$ 는 상수).
  category: "하한 대입으로 a 결정 → 양변 미분 → 함수값 대입"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "적분 구간에 변수가 있는 경우 — 하한 대입 + 양변 미분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x=0 을 넣으면 좌변이 0 이 되어 a 가 나오고, 양변을 x 로 미분하면 f(x) 가 바로 나온다. 두 도구(하한 대입 · 미적분의 기본정리)를 순서대로 쓰는 단원 표준 절차다.
    x=0 대입을 빠뜨리면 a 가 미정으로 남는 T-경계 함정 하나. 통찰 0, 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "x=0 대입 → a 결정 → 양변 미분해 f(x)=e^x+2sin x+a → x=π/2 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$e^{\frac{\pi}{2}}+1$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/247-e12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 항(e^x·−2cos x)과 a(x−1) 의 형태, 하한(0 → 1 · π/4), 묻는 점(π/2)을 바꿀 수 있다. 제약: 하한을 c 로 바꾸면 우변이 x=c 에서 0 이 되도록 상수항을 맞춰야 하고, 그렇지 않으면 a 가 그 조건으로 결정된다."
    creative: "(1) a 를 묻는 문제로 뒤집기(★2) (2) 하한을 미지수 c 로 두고 「c 와 a 를 모두 구하라」로 바꾸면 조건 두 개 연립 ★3(I-CON) (3) 우변에 x 가 곱해진 항을 넣어 미분 시 곱의 미분이 필요하게 하면 247-500 골조(★2~3)."
```

```yaml
- id: GN-CALC2-247-500
  page: 247
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    연속함수 $f$ 가 $\int_{0}^{x}tf(t)dt=e^x-xe^x-1$ 을 만족시킬 때 $f(3)$ 의 값.
  category: "양변 미분 → xf(x) 꼴 정리 → f(x) 확정"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "적분 구간에 변수가 있는 경우 — 피적분함수에 t 가 곱해진 형태"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    양변을 미분하면 좌변은 xf(x), 우변은 곱의 미분으로 −xe^x 가 되어 x 로 나누면 f(x)=−e^x 다. 하한 대입이 필요 없고 미분 한 번으로 끝난다.
    x 로 나눌 때 x≠0 을 짚어야 하는 T-범위 함정 하나. 통찰 0, ★2 유지.
  tier: star_2
  mechanism_primary: "양변 미분 → xf(x)=−xe^x → x≠0 에서 나눠 f(x)=−e^x → x=3 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-e^3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/247-500.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변을 e^x−xe^x−1 대신 x sin x+cos x−1 류로 바꾸고 묻는 점(3)을 옮길 수 있다. 제약: 우변은 x=0 에서 0 이어야 하고, 미분 결과가 x 를 인수로 가져야 f(x) 가 깔끔하게 남는다."
    creative: "(1) 피적분 가중치를 t^2 으로 올려 x^2 f(x) 꼴로 만들기(★2) (2) f(0) 의 값을 연속성으로 따로 묻게 하면 T-범위가 본질이 되어 ★3(I-VF) (3) 우변에 미지 상수를 넣어 하한 대입과 미분을 둘 다 쓰게 하면 247-501 골조."
```

```yaml
- id: GN-CALC2-247-501
  page: 247
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    연속함수 $f$ 가 $\int_{\pi/4}^{x}f(t)dt=\sin x-a\cos x+\sqrt{2}$ 를 만족시킬 때 $f(3\pi/2)$ 의 값($a$ 는 상수).
  category: "하한 π/4 대입으로 a 결정 → 양변 미분 → 함수값 대입"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "적분 구간에 변수가 있는 경우 — 하한 대입 + 양변 미분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    247-e12 와 같은 골조인데 하한이 0 이 아니라 π/4 라 대입값에 √2/2 가 섞여 계산이 한 겹 늘었을 뿐이다. x=π/4 로 a 를 정한 뒤 미분해 f(x)=cos x+a sin x 를 얻는다.
    하한이 0 이 아니라는 점을 놓치는 T-경계 함정 하나. 통찰 0, ★2 유지.
  tier: star_2
  mechanism_primary: "x=π/4 대입 → a=3 → 양변 미분해 f(x)=cos x+3sin x → x=3π/2 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/247-501.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "하한(π/4 → π/6 · π/3)과 우변 상수항(√2)을 짝지어 바꿀 수 있다. 제약: 하한에서 우변이 0 이 되도록 상수항을 맞추거나, 그 조건이 a 를 유일하게 결정하도록 계수를 배치할 것. 묻는 점은 삼각비가 특수각인 곳으로."
    creative: "(1) 상수항을 미지수 b 로 하나 더 두고 a,b 를 묻기(★3 · 조건 두 개) (2) 하한을 x 의 함수(예: x^2)로 바꾸면 합성함수 미분이 필요해 ★3~4 (3) f 의 최댓값(√10)을 묻는 삼각 합성 문제로 확장하면 ★3."
```

```yaml
- id: GN-CALC2-248-e13
  page: 248
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    연속함수 $f$ 가 $\int_{0}^{x}(x-t)f(t)dt=e^{2x}-2\sin x-1$ 을 만족시킬 때 $f(0)$ 의 값.
  category: "(x−t) 분리 → 한 번 미분해 ∫f 만 남기기 → 두 번째 미분"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x 는 적분변수 t 와 무관하므로 x∫f(t)dt−∫tf(t)dt 로 분리해야 미분이 가능해진다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "적분 구간과 피적분함수에 변수가 있는 경우 — (x−t) 분리 후 두 번 미분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (x−t)f(t) 를 그대로 두면 미분할 수 없고, x 를 적분 밖으로 빼는 동치 변환이 선행돼야 한다. 분리 후 한 번 미분하면 xf(x) 가 상쇄돼 ∫_0^x f(t)dt 만 남고, 다시 미분하면 f(x) 가 나온다.
    분리 착안 통찰 1개(EQV d1)·M_total 7 → 필수 예제 출발점 ★2 유지.
  mechanism_primary: "x∫f−∫tf 로 분리 → 1차 미분에서 xf(x) 상쇄 → ∫_0^x f=2e^{2x}−2cos x → 2차 미분 → f(0)"
  tier: star_2
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$4$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/248-e13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변을 e^{2x}−2sin x−1 대신 e^x+ x^2 −x−1 류로 바꿀 수 있다. 제약: 우변과 그 도함수가 x=0 에서 모두 0 이어야 한다(좌변과 1차 미분한 좌변이 x=0 에서 0 이므로). 묻는 점은 f(0)·f(π) 등 삼각·지수값이 정리되는 곳."
    creative: "(1) f(0) 대신 f(x) 전체를 구하게 하기(★2) (2) 우변에 미지 상수를 넣어 하한 대입까지 쓰게 하면 248-502(★2) (3) 피적분을 (x−t)f'(t) 로 바꾸면 미분 한 번으로 f 를 복원해야 해 ★3(248-503) (4) 하한을 1 로 옮기면 조건이 두 개가 되어 251-511 골조."
```

```yaml
- id: GN-CALC2-248-502
  page: 248
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    연속함수 $f$ 가 $\int_{0}^{x}(x-t)f(t)dt=e^x+x^2-x+a$ 를 만족시키고 $f(1)=b$ 일 때 $a+b$ 의 값($a$ 는 상수).
  category: "하한 대입으로 a 결정 → (x−t) 분리 → 두 번 미분해 f 확정"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "(x−t) 를 x∫f−∫tf 로 분리해야 미분이 되고, 1차 미분에서 xf(x) 가 상쇄된다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "적분 구간과 피적분함수에 변수가 있는 경우 — (x−t) 분리 후 두 번 미분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    248-e13 골조에 상수 a 가 붙은 형태다. x=0 대입으로 a=−1 을 먼저 얻고, 분리 후 두 번 미분해 f(x)=e^x+2 에서 b=f(1)=e+2 를 얻는다.
    분리 착안 1개(EQV d1) · 하한 대입을 빠뜨리는 T-경계 1개. ★2 유지.
  tier: star_2
  mechanism_primary: "x=0 대입 → a=−1 → (x−t) 분리 후 두 번 미분 → f(x)=e^x+2 → b=f(1) → a+b"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$e+1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/248-502.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변의 e^x+x^2−x 를 다른 조합(sin x+x^2 · 2^x+3x)으로 바꾸고 묻는 점(f(1))을 옮길 수 있다. 제약: a 는 하한 대입으로 결정되므로 자유롭게 두고, 1차 미분한 우변도 x=0 에서 0 이 되도록 일차항 계수를 맞출 것."
    creative: "(1) a 와 b 를 따로 묻지 말고 f(x) 를 구하게 하기(★2) (2) 1차 미분 뒤 값이 x=0 에서 0 이 아니게 만들어 「그런 f 는 없다」를 논증하게 하면 ★4(I-VF) (3) 피적분을 (x−t)^2 f(t) 로 올리면 미분 세 번 ★3."
```

```yaml
- id: GN-CALC2-248-503
  page: 248
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $f'$ 이 연속이고 $\int_{0}^{x}(x-t)f'(t)dt=\cos 2x-x^2-1$, $f(0)=2$ 일 때 $f(x)$ 를 구하기.
  category: "(x−t) 분리·미분 → ∫f' 를 f(x)−f(0) 으로 되돌리기"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "(x−t)f'(t) 를 분리해 미분하면 xf'(x) 가 상쇄되고 ∫_0^x f'(t)dt 만 남는다"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "남은 ∫_0^x f'(t)dt 를 f(x)−f(0) 으로 읽어 한 번의 미분만으로 f 자체를 복원"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "적분 구간과 피적분함수에 변수가 있는 경우 — 피적분이 f'(t) 인 형태"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    같은 (x−t) 분리이지만 피적분이 f' 이라 1차 미분 뒤 남는 것이 ∫_0^x f'(t)dt 이고, 이를 f(x)−f(0) 으로 되돌리면 두 번째 미분 없이 f 가 나온다. 여기서 f(0)=2 가 쓰인다.
    두 번 미분하면 f' 만 나와 f 를 다시 적분해야 하므로 「어디서 멈출지」 판단이 이 문항의 핵심이다. 통찰 2개 → 확인체크 출발점 ★2 에서 +1 해 ★3. [분류 이슈] 벤더 라벨은 확인체크(★2 출발).
  tier: star_3
  mechanism_primary: "(x−t)f' 분리 → 1차 미분 → ∫_0^x f'=f(x)−f(0) → f(x)=−2sin2x−2x+2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$f(x)=-2\sin 2x-2x+2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/248-503.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변(cos2x−x^2−1)의 진동수와 계수, f(0) 값을 바꿀 수 있다. 제약: 우변과 그 도함수가 x=0 에서 0 이어야 하고(cos0−0−1=0), f(0) 은 자유 상수라 답의 상수항만 따라 움직인다."
    creative: "(1) f(0) 대신 f(π) 를 주면 상수 결정이 한 단계 늘어 ★3 유지 (2) f(0) 을 주지 않고 「f(x)+C 꼴로 답하라」로 두면 통찰이 하나 줄어 ★2 (3) 피적분을 (x−t)f''(t) 로 올려 f'(0)·f(0) 두 조건을 요구하면 ★4."
```

```yaml
- id: GN-CALC2-249-e14
  page: 249
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    $0<x<\pi$ 에서 $f(x)=\int_{0}^{x}(1+2\cos t)\sin t\,dt$ 의 극댓값.
  category: "기본정리로 f' → 부호 변화점 → 극대점에서 정적분 계산"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정적분으로 정의된 함수의 극대·극소와 최대·최소"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(x)=(1+2cos x)sin x 를 기본정리로 바로 읽고, 0<x<π 에서 sin x>0 이므로 부호는 1+2cos x 만 결정한다. x=2π/3 에서 +→− 로 바뀌어 극대이고, 그 점까지의 정적분을 계산하면 극댓값이다.
    구간 제한으로 sin x 의 부호를 고정하는 T-범위 함정 하나. 통찰 0, 필수 예제 ★2 유지.
  tier: star_2
  mechanism_primary: "f'=(1+2cos x)sin x → 0<x<π 에서 sin x>0 → cos x=−1/2 에서 극대 → ∫_0^{2π/3} 계산"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{9}{4}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/249-e14.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 2(1+2cos t)와 구간(0<x<π)을 바꿀 수 있다. 제약: |계수|>1 이어야 1+a cos x=0 이 구간 안에서 해를 갖고, 그 해가 특수각이어야 극값이 유리수·무리수로 깔끔하게 떨어진다."
    creative: "(1) 극솟값을 묻도록 구간을 π<x<2π 로 옮기기(★2) (2) 피적분을 (1+2cos t)sin t 대신 (a+cos t)sin t 로 두고 「극값을 갖도록 하는 a 의 범위」를 묻기(★4 · I-BW) (3) 구간을 닫아 최대·최소 비교로 바꾸면 249-505 골조(★2~3)."
```

```yaml
- id: GN-CALC2-249-504
  page: 249
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $x>1$ 에서 $f(x)=\int_{1}^{x}\sqrt{t}\,(t-2)dt$ 의 극솟값.
  category: "기본정리로 f' → 부호 변화점 x=2 → 유리수 지수 적분"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정적분으로 정의된 함수의 극대·극소와 최대·최소"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(x)=√x(x−2) 이고 x>1 에서 √x>0 이므로 x=2 에서 −→+ 로 바뀌어 극소다. 극솟값은 ∫_1^2(t^{3/2}−2t^{1/2})dt 를 유리수 지수 적분으로 계산한다.
    골조는 249-e14 와 같고 계산만 분수 지수로 바뀌었다. 통찰 0, ★2 유지.
  tier: star_2
  mechanism_primary: "f'=√x(x−2) → x>1 에서 √x>0 → x=2 극소 → ∫_1^2(t^{3/2}−2t^{1/2})dt"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{14-16\sqrt{2}}{15}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/249-504.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "√t 의 지수(1/2 → 1/3)와 (t−2) 의 근(2 → 3), 하한(1)을 바꿀 수 있다. 제약: 근이 정의구간 안에 있어야 극값이 생기고, 하한과 근이 다르면 답에 무리수가 남는다(하한=근이면 0 이 되어 시시해진다)."
    creative: "(1) 극솟값 대신 「f(x)=0 인 x」를 묻기(★3 · I-BW) (2) 피적분을 √t(t−a) 로 두고 극솟값이 최소가 되는 a 를 묻기(★4) (3) 구간을 0<x<∞ 로 넓혀 √t 의 정의역까지 따지게 하면 T-범위가 본질이 되어 ★3."
```

```yaml
- id: GN-CALC2-249-505
  page: 249
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $0\le x\le 2\pi$ 에서 $f(x)=\int_{0}^{x}(1-2\sin t)dt$ 의 최댓값과 최솟값.
  category: "f' 의 부호 변화점 두 개 → 극값과 양 끝값 비교"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정적분으로 정의된 함수의 극대·극소와 최대·최소"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(x)=1−2sin x 의 부호가 x=π/6, 5π/6 에서 바뀌므로 증가·감소·증가다. 닫힌구간이라 두 극값과 양 끝값 f(0), f(2π) 네 개를 모두 비교해야 하고, f(x)=x+2cos x−2 를 계산해 대입한다.
    끝값 비교를 빠뜨리면 최댓값을 극댓값으로 착각하는 T-경계 함정 하나. 통찰 0, ★2 유지.
  tier: star_2
  mechanism_primary: "f'=1−2sin x → sin x=1/2 에서 부호 변화 → f(x)=x+2cos x−2 → 네 후보값 비교"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '최댓값: $2\pi$, 최솟값: $\dfrac{5}{6}\pi-\sqrt{3}-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/249-505.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "1−2sin t 의 계수와 구간(0~2π → 0~π)을 바꿀 수 있다. 제약: 계수의 절댓값이 1 보다 커야 부호 변화점이 생기고, 구간 끝이 2π 면 f(2π)=2π 가 극댓값을 넘어 최댓값이 끝점에서 나온다(이 배치가 함정의 핵심이므로 구간을 줄이면 난이도가 내려간다)."
    creative: "(1) 최댓값만 묻고 구간을 0≤x≤π 로 줄이면 252-516 수준(★2~3) (2) 1−a sin t 로 두고 최솟값이 f(0) 과 같아지는 a 를 묻기(★4 · I-BW) (3) 그래프 개형(증가·감소 표)을 함께 요구하면 표현 전환이 들어가 ★3."
```

```yaml
- id: GN-CALC2-250-e15
  page: 250
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴⑵ 극한 $\lim_{x\to1}\frac{1}{x-1}\int_{1}^{x}\sqrt{2^t+1}\,dt$, $\lim_{x\to0}\frac{1}{x}\int_{0}^{x}\frac{\cos t}{1-\sin t}dt$ 의 값.
  category: "정적분의 극한 → 미분계수 정의 → 피적분함수의 함숫값"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "적분을 F(x)−F(a) 로 보고 극한식을 F'(a) 의 정의로 옮겨야 진행된다(적분 표현 → 미분계수 표현)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "정적분으로 정의된 함수의 극한 — 미분계수 정의"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 문항 모두 부정적분을 구할 수 없거나 구할 필요가 없고, F(x)=∫_a^x 로 두면 F(a)=0 이라 식이 그대로 {F(x)−F(a)}/(x−a) → F'(a)=f(a) 가 된다.
    적분 표현을 미분계수 표현으로 옮기는 전환 1개(RT d1). M_total 4 로 가볍지만 통찰이 있어 −1 을 적용하지 않고 필수 예제 ★2 유지.
  tier: star_2
  mechanism_primary: "F(x)=∫_a^x f → F(a)=0 → 극한식={F(x)−F(a)}/(x−a) → F'(a)=f(a) 대입"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $\sqrt{3}$ ⑵ $1$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/250-e15.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "피적분함수(√(2^t+1) · cos t/(1−sin t))와 접근점(1 · 0)을 바꿀 수 있다. 제약: 접근점이 적분의 하한과 같아야 F(a)=0 이 되어 미분계수 정의가 성립하고, 피적분함수가 그 점에서 연속·정의돼야 한다(1−sin t 의 분모 0 회피)."
    creative: "(1) 분모를 x−1 대신 x^2−1 로 바꿔 인수분해 보정을 요구하면 250-506(★3) (2) 상한을 x^2 으로 올려 합성 보정을 강제(★3) (3) 하한을 접근점과 다르게 두어 극한이 발산함을 논증하게 하면 ★4(I-VF)."
```

```yaml
- id: GN-CALC2-250-506
  page: 250
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴⑵ 극한 $\lim_{x\to1}\frac{1}{x^3-1}\int_{1}^{x^2}e^tt^3dt$, $\lim_{x\to\pi}\frac{1}{x^2-\pi^2}\int_{\pi}^{x}(\sin t+1)^2dt$ 의 값.
  category: "분모·상한을 (변화량) 꼴로 맞춤 → 미분계수 정의 → 나머지 인수의 극한"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "분모 x^3−1·x^2−π^2 를 상한의 변화량(x^2−1 · x−π)과 나머지 인수의 곱으로 쪼개야 정의 꼴이 된다"
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "남은 몫을 F'(1)·F'(π) 로 읽고 나머지 인수는 따로 극한을 취한다"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "정적분으로 정의된 함수의 극한 — 분모·상한 보정이 필요한 형태"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑴ 은 상한이 x^2 이고 분모가 x^3−1 이라 (x^2−1)/(x^3−1) 을 따로 떼어 (x+1)/(x^2+x+1) 의 극한 2/3 를 곱해야 한다. ⑵ 도 x^2−π^2=(x+π)(x−π) 로 쪼개 1/(2π) 를 남긴다.
    분모·상한 맞추기(EQV d1)와 미분계수 전환(RT d1) 두 단계. 확인체크 출발점 ★2 에서 통찰 2개로 +1 → ★3. [분류 이슈] 벤더 라벨은 확인체크(★2 출발).
  tier: star_3
  mechanism_primary: "분모를 (상한 변화량)×(나머지)로 분해 → 앞은 F'(a)=f(a) → 뒤는 대입 극한 → 곱"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $\dfrac{2}{3}e$ ⑵ $\dfrac{1}{2\pi}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/250-506.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모의 차수(x^3−1 → x^4−1)와 상한(x^2 → x^3), 피적분함수를 바꿀 수 있다. 제약: 분모는 접근점에서 0 이 되어야 하고 상한의 변화량을 인수로 포함해야 한다. 남는 인수의 극한이 유한한 값이 되도록 차수를 맞출 것."
    creative: "(1) 상한과 하한을 모두 x 의 함수로 두어 보정이 두 번 필요하게 하기(★4) (2) 답을 주고 피적분함수의 미정계수를 역산하게 하면 ★4(I-BW) (3) 분모의 인수가 상한 변화량을 포함하지 않게 만들어 발산을 판정하게 하면 ★4(I-VF)."
```

```yaml
- id: GN-CALC2-250-507
  page: 250
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴⑵ 극한 $\lim_{h\to0}\frac{1}{3h}\int_{1}^{1+2h}(3^x+e^x)dx$, $\lim_{h\to0}\frac{1}{h}\int_{e^2-h}^{e^2+h}x\ln x^2dx$ 의 값.
  category: "h 꼴 극한 → 구간 폭에 맞춰 분모 보정 → 미분계수 정의"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "분모 3h 를 구간 폭 2h 에 맞춰 (2/3)·(1/2h) 로 고치고, ⑵ 는 양쪽으로 벌어진 구간을 F(e^2+h)−F(e^2−h) 로 갈라 2F'(e^2) 를 만든다"
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "정리된 몫을 F'(a)=f(a) 로 읽어 피적분함수에 값을 대입한다"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "정적분으로 정의된 함수의 극한 — h→0 꼴·양쪽 구간"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑴ 은 분모 3h 와 구간 폭 2h 가 어긋나 계수 2/3 를 먼저 떼야 하고, ⑵ 는 하한도 움직이므로 기준점 e^2 을 넣어 두 개의 변화량으로 갈라야 2f(e^2) 가 된다.
    폭 맞추기(EQV d1)와 미분계수 전환(RT d1) 두 단계. 확인체크 출발점 ★2 에서 +1 → ★3. [분류 이슈] 벤더 라벨은 확인체크(★2 출발).
  tier: star_3
  mechanism_primary: "분모를 구간 폭과 같게 보정 → {F(a+ph)−F(a−qh)}/h → (p+q)f(a)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $\dfrac{2}{3}(3+e)$ ⑵ $8e^2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/250-507.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모 계수(3h)와 구간 폭(2h · ±h)의 비, 기준점(1 · e^2), 피적분함수를 바꿀 수 있다. 제약: 기준점에서 피적분함수가 연속이어야 하고, ln x^2 처럼 로그가 들어가면 기준점을 e 의 거듭제곱으로 잡아야 값이 정리된다."
    creative: "(1) 구간을 [a−2h, a+3h] 로 비대칭으로 만들어 계수 5 를 끌어내기(★3 유지) (2) 분모를 h^2 으로 두어 극한이 발산·수렴하는 조건을 묻기(★4 · I-VF) (3) f(a) 값을 주고 피적분함수의 미정계수를 역산하게 하면 ★4(I-BW)."
```

### 연습문제 STEP 1

```yaml
- id: GN-CALC2-251-508
  page: 251
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    연속함수 $f$ 가 $f(x)=e^{x^2}+\int_{0}^{1}tf(t)dt$ 를 만족시킬 때 $\int_{0}^{1}xf(x)dx$ 의 값.
  category: "∫tf(t)dt 를 k 로 치환 → 구하는 정적분이 곧 k"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "구하라는 ∫_0^1 xf(x)dx 가 치환한 상수 k 와 같은 값임을 알아채면 f 를 끝까지 구할 필요가 없다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "적분 구간이 상수인 경우 — 구하는 값이 치환 상수와 같은 형태"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    k=∫_0^1 tf(t)dt 로 두면 f(x)=e^{x^2}+k 이고, 재대입하면 ∫_0^1 te^{t^2}dt 는 치환적분으로 (e−1)/2, k 항은 k/2 가 되어 k=e−1 이다. 묻는 값이 곧 k 다.
    e^{x^2} 자체는 적분되지 않지만 가중치 t 가 붙어 치환이 되는 배치가 이 문항의 설계다. 전환 1개(EQV d1), STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "k=∫_0^1 tf(t)dt → f=e^{x^2}+k → 재대입해 k=(e−1)/2+k/2 → 구하는 값=k=e−1"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$e-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/251-508.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "e^{x^2} 를 e^{x^3}(가중치 t^2)·x e^{x^2} 로 바꾸고 구간(0~1)을 조정할 수 있다. 제약: 가중치와 지수가 맞아 치환적분이 되어야 하고, 재대입 뒤 k 의 계수 ∫_0^1 t dt=1/2 가 1 이 되지 않게 구간을 고를 것."
    creative: "(1) 구하는 값을 f(1) 로 바꾸면 k 를 구한 뒤 한 단계 더 필요해 ★2 유지 (2) 가중치를 빼 ∫_0^1 f(t)dt 로 만들면 e^{x^2} 가 적분되지 않아 성립하지 않는 설계(오답 유도 · ★3 · I-VF) (3) 상수 항을 2∫ 로 키우면 251-513 골조."
```

```yaml
- id: GN-CALC2-251-509
  page: 251
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    연속함수 $f$ 가 $f(x)=x+\int_{0}^{\pi}f(t)\cos t\,dt$ 를 만족시킬 때 $f(3)$ 의 값.
  category: "정적분을 상수 k 로 치환 → 부분적분 → k 확정 → f(3)"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "적분 구간이 상수인 경우 — 정적분을 상수로 치환"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    k 로 치환하면 f(x)=x+k 이고 재대입하면 ∫_0^π t cos t dt(부분적분)와 k∫_0^π cos t dt 로 갈린다. 뒤 항이 0 이라 k 가 즉시 −2 로 나온다.
    246-e11 과 같은 골조이고 부분적분 한 번만 더해진다. 통찰 0, STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "k=∫_0^π f cos t dt → f=x+k → 재대입 → ∫t cos t dt=−2, k∫cos t dt=0 → k=−2 → f(3)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/251-509.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "가중치(cos t → sin t)와 구간(0~π → 0~π/2), f 의 기저(x → x^2)를 바꿀 수 있다. 제약: 가중치의 정적분이 1 이 되면 k 가 소거된다. 0~π 에서 ∫cos t dt=0 이라 k 가 한 줄에 나오는 것이 이 배치의 장점."
    creative: "(1) 구간을 0~π/2 로 바꾸면 ∫cos t dt=1 이 되어 해가 없어진다 — 「f 가 존재하지 않음」 논증 문제로(★4 · I-VF) (2) 기저를 x^2 으로 올려 부분적분 두 번(★3) (3) 묻는 값을 ∫_0^π f(t)dt 로 바꾸면 ★2 유지."
```

```yaml
- id: GN-CALC2-251-510
  page: 251
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $F(x)=\int_{\pi/6}^{x}(e^t+\cos t)dt$ 에 대하여 $\lim_{x\to\pi/6}\frac{F(x)}{x-\pi/6}$ 의 값.
  category: "F(π/6)=0 확인 → 미분계수 정의 → 피적분함수 값 대입"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "F(π/6)=0 이므로 분자를 F(x)−F(π/6) 으로 보고 극한을 F'(π/6) 로 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "정적분으로 정의된 함수의 극한 — 미분계수 정의"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    적분 하한과 극한의 접근점이 같아 F(π/6)=0 이고, 분자를 변화량으로 읽으면 곧바로 F'(π/6)=e^{π/6}+cos(π/6) 이다. 부정적분을 구해 대입해도 같은 값이지만 정의 전환이 한 줄 풀이다.
    전환 1개(RT d1)·M_total 4. STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "F(π/6)=0 → {F(x)−F(π/6)}/(x−π/6) → F'(π/6)=e^{π/6}+√3/2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$e^{\frac{\pi}{6}}+\dfrac{\sqrt{3}}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/251-510.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "하한·접근점(π/6 → π/3 · π/4)과 피적분함수(e^t+cos t → 2^t+sin t)를 함께 바꾼다. 제약: 하한과 접근점이 같아야 하고, 접근점이 특수각이어야 답이 정리된다."
    creative: "(1) 접근점을 하한과 다르게 두어 극한이 발산함을 판정하게 하기(★4 · I-VF) (2) 분모를 x^2−(π/6)^2 로 바꿔 보정을 요구(★3 · 250-506 골조) (3) F 의 극값을 함께 묻는 복합 문제로 만들면 ★3."
```

```yaml
- id: GN-CALC2-251-511
  page: 251
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    양의 실수에서 연속인 $f$ 가 $\int_{1}^{x}(x-t)f(t)dt=x^3\ln x+ax+b$ 를 만족시킬 때 상수 $a$, $b$ 에 대한 $ab$ 의 값.
  category: "(x−t) 분리 → x=1 대입 두 번(원식·1차 미분식)으로 a, b 결정"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "(x−t) 를 분리해 미분하면 xf(x) 가 상쇄되고 ∫_1^x f(t)dt 만 남아, 이 식도 x=1 에서 0 이라는 두 번째 조건이 생긴다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "적분 구간과 피적분함수에 변수가 있는 경우 — 하한이 1 인 형태"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    원식에 x=1 을 넣어 a+b=0, 분리·미분한 식 ∫_1^x f=3x^2 ln x+x^2+a 에 다시 x=1 을 넣어 a=−1, 따라서 b=1 이다. 조건 두 개가 같은 점에서 나온다는 것이 골조다.
    f 를 직접 구할 필요가 없다. 분리 착안 1개(EQV d1)·M_total 7. STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "x=1 대입 → a+b=0 → (x−t) 분리 후 1차 미분 → x=1 재대입 → a=−1, b=1 → ab"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/251-511.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변의 x^3 ln x 를 x^2 ln x · x e^x 로, 하한(1)을 e 로 바꿀 수 있다. 제약: 우변은 하한에서 0, 우변의 도함수도 하한에서 0 이 되도록 a, b 가 결정돼야 한다(그 두 조건이 문제의 답이다). ln 이 들어가면 하한은 양수여야 한다."
    creative: "(1) a, b 대신 f(x) 를 구하게 하면 두 번째 미분이 추가돼 ★3 (2) 하한을 미지수 c 로 두고 a,b,c 를 모두 묻기(★4) (3) 우변 도함수가 하한에서 0 이 되지 않게 만들어 「그런 f 는 없다」를 논증(★4 · I-VF)."
```

```yaml
- id: GN-CALC2-251-512
  page: 251
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $f(x)=\int_{x}^{x+h}e^{-t^2/2}dt$ 에 대하여 $\lim_{h\to0}\frac{f(0)}{h}$ 의 값.
  category: "f(0)=∫_0^h 로 정리 → h→0 미분계수 정의 → 피적분함수의 0 에서의 값"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "f(0)=∫_0^h e^{-t^2/2}dt 를 F(h)−F(0) 으로 읽어 h→0 극한을 F'(0) 로 전환(피적분함수의 부정적분은 구할 수 없다)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "정적분으로 정의된 함수의 극한 — 구간 폭이 h 인 형태"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f 의 변수 x 와 극한 변수 h 가 섞여 보이지만 f(0) 을 먼저 쓰면 ∫_0^h e^{-t^2/2}dt 하나만 남고, 이는 F(h)−F(0) 이라 극한이 F'(0)=e^0=1 이다.
    e^{-t^2/2} 의 부정적분이 없으므로 정의 전환이 유일한 길이다(RT d1). f(0) 안에 h 가 남아 있는 T-표기 함정 하나. STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "f(0)=∫_0^h e^{-t^2/2}dt=F(h)−F(0) → {F(h)−F(0)}/h → F'(0)=1"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/251-512.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "피적분함수(e^{-t^2/2} → sin(t^2) · √(t^4+1))와 평가점 f(0) → f(1) 을 바꿀 수 있다. 제약: 부정적분이 없는 함수를 쓰는 것이 이 유형의 핵심이고, 평가점에서 함숫값이 계산되는 함수여야 한다."
    creative: "(1) f(1)/h 로 바꾸면 F'(1)=e^{-1/2}(★2 유지) (2) 구간을 [x−h, x+2h] 로 넓혀 계수 3 을 끌어내기(★3 · 250-507 골조) (3) lim f(x)/h 를 x 의 함수로 구하게 하면 Mₐ 가 올라 ★3."
```

### 연습문제 STEP 2

```yaml
- id: GN-CALC2-251-513
  page: 251
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    연속함수 $f$ 가 $f(x)=\frac{x}{x^2+1}+2\int_{0}^{1}f(t)dt$ 를 만족시킬 때 $f(1)$ 의 값.
  category: "정적분을 상수 k 로 치환 → 로그 적분 → k 확정 → f(1)"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "적분 구간이 상수인 경우 — 정적분을 상수로 치환"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    k=∫_0^1 f(t)dt 로 두면 f(x)=x/(x^2+1)+2k 이고, 재대입하면 ∫_0^1 t/(t^2+1)dt=½ln2 와 2k 가 남아 k=−½ln2 다. f(1)=½−ln2.
    골조는 246-e11 과 똑같고 분수함수의 로그 적분과 계수 2(k 의 부호가 음수가 되는 배치)만 추가됐다. 통찰 0·M_total 6 이라 −1 조건(M_total ≤5)에 걸리지 않아 STEP 2 출발점 ★3 을 유지했다.
    [분류 이슈] 체감 난이도는 246-e11·251-509 와 같은 ★2 이며 벤더 배치(STEP 2)와 1단 차이. 라벨은 억지로 내리지 않고 기록만 한다.
  tier: star_3
  mechanism_primary: "k=∫_0^1 f → f=x/(x^2+1)+2k → 재대입 k=½ln2+2k → k=−½ln2 → f(1)"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{1}{2}-\ln 2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/251-513.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 2 와 기저 x/(x^2+1)(→ x/(x^2+4) · 1/(x+1)), 구간(0~1)을 바꿀 수 있다. 제약: 재대입 뒤 k 의 계수가 1 이 되면(구간 길이 × 앞 계수 = 1) 해가 없어진다. 여기서는 2×1=2≠1."
    creative: "(1) 계수를 1 로 두어 해가 없음을 논증하게 하기(★4 · I-VF) (2) 기저를 1/(x^2+1) 로 바꿔 arctan 이 필요 없게 x 를 붙여둘 것(교육과정 밖 회피) (3) f(1) 대신 ∫_0^1 f 를 물으면 k 자체가 답이라 ★2."
```

```yaml
- id: GN-CALC2-252-514
  page: 252
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    연속함수 $f$ 가 $\cos x\ne-1$ 인 $x$ 에 대하여 $\int_{0}^{x}f(x-t)dt=\frac{\sin^2x}{1+\cos x}$ 를 만족시킬 때 $f(\pi/6)$ 의 값.
  category: "x−t=u 치환으로 합성 제거 → 우변 삼각 간단화 → 양변 미분"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "x−t=u 로 치환하면 구간이 뒤집히며 ∫_0^x f(u)du 가 되어 f 의 합성이 사라진다 — 이 전환 없이는 미분할 수 없다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "f(x−t) 꼴 정적분 — 치환으로 합성 제거 후 미분"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    좌변의 f(x−t) 는 적분변수와 상한에 같은 x 가 들어 있어 그대로는 손댈 수 없다. u=x−t 치환으로 ∫_0^x f(u)du 를 만들고, 우변은 sin^2x/(1+cos x)=1−cos x 로 줄인 뒤 양변을 미분해 f(x)=sin x 를 얻는다.
    치환 착안이 전부인 문항이라 통찰 1개지만 깊이 2(EQV d2). STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "u=x−t 치환 → ∫_0^x f(u)du=1−cos x → 양변 미분 → f(x)=sin x → f(π/6)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/252-514.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변(sin^2x/(1+cos x))을 1−cos x 와 같은 값이 되는 다른 꼴(예: (1−cos^2x)/(1+cos x))이나 e^x−1 · x^2 류로 바꾸고 묻는 점(π/6)을 옮길 수 있다. 제약: 우변은 x=0 에서 0 이어야 하며(좌변이 0), 삼각 간단화를 남겨두면 난이도가 유지된다."
    creative: "(1) 우변을 이미 간단한 1−cos x 로 주면 통찰이 치환 하나만 남아 ★2~3 (2) 좌변을 ∫_0^x (x−t)f(t)dt 로 바꾸면 248-e13 골조(★2) (3) f(x−t) 대신 f(x+t) 로 두어 구간 이동을 다루게 하면 ★4."
```

```yaml
- id: GN-CALC2-252-515
  page: 252
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $x>0$ 에서 $f(x)=\int_{1}^{x}(\ln t-1)dt$ 의 극솟값.
  category: "f'=ln x−1 → x=e 에서 극소 → 부분적분으로 정적분 계산"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정적분으로 정의된 함수의 극대·극소와 최대·최소"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f'(x)=ln x−1 이 x=e 에서 −→+ 로 바뀌므로 극소이고, 극솟값은 ∫_1^e(ln t−1)dt 를 부분적분([t ln t−2t])으로 계산한다.
    골조는 249-504 와 같고 부분적분과 정의역 x>0 만 추가된다. 통찰 0이지만 M_total 6 이라 −1 조건에 걸리지 않아 STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "f'=ln x−1 → x=e 극소 → ∫_1^e(ln t−1)dt=[t ln t−2t]_1^e=2−e"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$2-e$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/252-515.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "ln t−1 의 상수(−1 → −2 이면 극소점이 e^2)와 하한(1)을 바꿀 수 있다. 제약: 극소점 e^k 가 정의역 안에 있어야 하고, 하한이 1 이어야 ln1=0 으로 답이 깔끔하다."
    creative: "(1) 극솟값 대신 f 의 최솟값·부호를 묻기(★3) (2) 피적분을 ln t−a 로 두고 극솟값이 −1 이 되는 a 를 묻기(★4 · I-BW) (3) 구간을 [1, e^2] 로 닫아 끝값 비교를 추가하면 249-505 골조(★3)."
```

```yaml
- id: GN-CALC2-252-516
  page: 252
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $0\le x\le\pi$ 에서 $f(x)=\int_{0}^{x}(1+\sin t)\cos t\,dt$ 의 최댓값.
  category: "f'=(1+sin x)cos x → 1+sin x≥0 확인 → cos x 부호로 최대점 결정"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정적분으로 정의된 함수의 극대·극소와 최대·최소"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f'(x)=(1+sin x)cos x 에서 0≤x≤π 이면 1+sin x>0 이므로 부호는 cos x 가 결정하고 x=π/2 에서 +→− 로 바뀐다. 최댓값은 ∫_0^{π/2}(cos t+sin t cos t)dt=[sin t+½sin^2t] 로 3/2.
    인수 하나의 부호를 먼저 고정하는 249-e14 와 같은 골조. 통찰 0·M_total 6 이라 STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "f'=(1+sin x)cos x → 1+sin x>0 → x=π/2 최대 → ∫_0^{π/2} 계산=3/2"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{3}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/252-516.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "(1+sin t) 의 상수 1 과 구간(0~π)을 바꿀 수 있다. 제약: 상수가 1 이상이어야 인수의 부호가 고정되고, 1 보다 작으면 부호 변화점이 늘어 경우가 갈린다(그때는 ★4)."
    creative: "(1) 상수를 1/2 로 낮춰 부호 변화점을 세 개로 만들면 끝값 비교까지 필요해 ★4(I-MI) (2) 구간을 0~2π 로 넓혀 최솟값도 함께 묻기(★3 · 249-505 골조) (3) 최댓값이 주어진 값이 되도록 계수를 역산하게 하면 ★4(I-BW)."
```

### 연습문제 실력 UP

```yaml
- id: GN-CALC2-252-517
  page: 252
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    미분가능한 $f$ 가 $xf(x)=x^2\sin x+\int_{\pi/2}^{x}f(t)dt$ 를 만족시킬 때 $f(\pi)$ 의 값.
  category: "양변 미분 → f(x) 상쇄 → f' 확정 → 적분하고 x=π/2 로 상수 결정"
  M: {s: 2, k: 2, a: 3, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "양변을 미분하면 좌변 곱의 미분에서 나온 f(x) 와 우변 적분의 미분 f(x) 가 상쇄돼 f 에 대한 미분방정식 xf'(x)=2x sin x+x^2 cos x 만 남는다"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "원식에 x=π/2 를 넣어 적분항을 0 으로 만들고 f(π/2)=π/2 를 얻어 적분상수를 확정한다"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "xf(x) 꼴 등식 — 양변 미분으로 f' 을 얻고 하한 대입으로 초기조건"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    좌변이 곱이고 우변에 f 의 적분이 있어 미분하면 f(x) 가 양쪽에서 상쇄되는 것이 핵심이다. 남은 f'(x)=2sin x+x cos x 를 부분적분으로 되돌리면 f(x)=x sin x−cos x+C 이고, 하한 π/2 대입으로 얻은 f(π/2)=π/2 가 C=0 을 준다.
    미분 → 상쇄 → 재적분 → 초기조건의 네 국면이고 f 가 미지 일반함수라 Mₐ=3. 통찰 2개(EQV d2+d1)·실력 UP 출발점 ★4 유지.
  tier: star_4
  mechanism_primary: "양변 미분 → f 상쇄 → f'=2sin x+x cos x → 적분 → x=π/2 로 C=0 → f(π)=1"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$1$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/gn-calc2/items/252-517.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 x^2 sin x 를 x^2 e^x · x^2 ln x 로, 하한(π/2)과 묻는 점(π)을 바꿀 수 있다. 제약: 미분 후 x 로 나눠야 하므로 x≠0 인 구간이어야 하고, f' 이 초등적으로 적분되는 꼴이어야 한다. 하한 대입값이 f(하한) 을 바로 주도록 배치할 것."
    creative: "(1) 좌변을 x^2 f(x) 로 올리면 상쇄가 부분적으로만 일어나 ★4~5 (2) f(π) 대신 f 의 극값을 묻기(★4) (3) 하한을 0 으로 두면 x=0 에서 나눌 수 없어 연속성 논증이 추가돼 ★5 후보(I-VF)."
```

```yaml
- id: GN-CALC2-252-518
  page: 252
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $f(x)=\int_{0}^{x}t\sin(x-t)dt$ 에 대하여 $\lim_{x\to0}\frac{f'(x)}{x^2}$ 의 값.
  category: "x−t=u 치환으로 x 분리 → 미분에서 상쇄 → f'=1−cos x → 극한"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "u=x−t 치환으로 f(x)=x∫_0^x sin u du−∫_0^x u sin u du 를 만들어 x 를 적분 밖으로 빼야 미분이 가능해진다"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "미분하면 x sin x 항이 서로 지워져 f'(x)=1−cos x 만 남는다"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "f(x−t) 꼴 정적분 — 치환 후 미분·극한"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    t sin(x−t) 는 적분변수와 x 가 한 인수 안에 섞여 있어 치환으로 x 를 밖으로 빼야 한다. 그러면 (x−t) 분리형과 같은 구조가 되고, 미분에서 x sin x 가 상쇄돼 f'(x)=1−cos x 라는 매우 단순한 결과가 나온다.
    마지막 (1−cos x)/x^2 → 1/2 는 표준 극한이다. 통찰 2개(EQV d2+d1)·실력 UP 출발점 ★4 유지.
  tier: star_4
  mechanism_primary: "u=x−t 치환 → x∫sin u−∫u sin u → 미분 시 상쇄 → f'=1−cos x → (1−cos x)/x^2=1/2"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/252-518.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "피적분 t sin(x−t) 를 t cos(x−t) · t e^{x−t} 로, 분모 x^2 을 x · x^3 으로 바꿀 수 있다. 제약: 치환 후 두 적분이 모두 초등적이어야 하고, 분모 차수는 f' 의 0 근방 차수(여기서는 2)와 맞아야 유한 극한이 나온다."
    creative: "(1) 분모를 x 로 낮추면 극한이 0 이 되어 차수 판단이 핵심이 되는 문제(★4 · I-VF) (2) f''(0) 을 묻기(★4) (3) 피적분을 t^2 sin(x−t) 로 올리면 치환 후 항이 셋으로 늘어 ★5 후보."
```

```yaml
- id: GN-CALC2-252-519
  page: 252
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    미분가능한 $f$ 가 $f(2)=1$ 이고 $\lim_{x\to2}\frac{1}{x^2-4}\int_{f(2)}^{f(x)}e^t\sin\frac{\pi}{2}t\,dt=2e$ 를 만족시킬 때 $f'(2)$ 의 값.
  category: "적분을 G(f(x))−G(f(2)) 로 보고 합성 미분계수로 분해 → f'(2) 역산"
  M: {s: 2, k: 2, a: 3, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "적분을 G(u)=∫_1^u e^t sin(πt/2)dt 의 차 G(f(x))−G(f(2)) 로 옮겨 극한을 미분계수로 읽는다"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "분모를 (f(x)−f(2))·(x−2)·(x+2) 로 쪼개 G'(f(2))·f'(2)·1/4 의 곱으로 분해한다(합성함수 미분계수 구조)"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "합성함수 상한의 정적분 극한 — 미분계수 곱으로 분해 후 역산"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    적분의 상·하한이 모두 f 값이고 분모는 x 의 식이라, 250-506 의 보정을 두 겹으로 해야 한다. f(x)−f(2) 를 분모·분자에 끼워 넣어 G'(1)·f'(2)·lim 1/(x+2) 로 갈라야 비로소 식이 풀린다.
    G'(1)=e sin(π/2)=e 이므로 e·f'(2)/4=2e 에서 f'(2) 가 역산된다. 통찰 2개(RT d1+EQV d2)·f 가 미지 일반함수라 Mₐ=3·실력 UP 출발점 ★4 유지. ★5 는 SC/VF/SYM/XU 가 없어 부여하지 않았다.
  tier: star_4
  mechanism_primary: "G(u)=∫_1^u e^t sin(πt/2)dt → 분모를 (f(x)−f(2))(x−2)(x+2) 로 분해 → G'(1)·f'(2)/4=2e → f'(2)=8"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/252-519.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "피적분함수(e^t sin(πt/2)), 접근점(2), f(2) 값(1), 우변(2e)을 바꿀 수 있다. 제약: 접근점에서 분모가 0 이어야 하고 상·하한이 같아져야 하며(f(2) 가 하한), 피적분함수의 f(2) 에서의 값이 0 이 아니어야 f'(2) 를 나눌 수 있다."
    creative: "(1) f'(2) 대신 피적분함수의 미정계수를 역산하게 하기(★4) (2) 피적분함수 값이 f(2) 에서 0 이 되게 만들어 「f'(2) 를 정할 수 없음」을 논증(★5 후보 · I-VF) (3) 분모를 (x−2)^2 로 두어 차수 비교까지 요구하면 ★5 후보."
```

## 표본 판정 요약 (27문)

- ★ 분포: ★1 0 · ★2 17 · ★3 7 · ★4 3 · ★5 0
- 통찰형 14 · 절차형 13 · premium 0
- 통찰 유형 분포(총 20단계): I-EQV 14 · I-RT 6 (SC·VF·SYM·XU 0 → 이 범위에 ★5 는 없다)
- type_hint 상위: 「정적분을 상수로 치환」 6 · 「정적분의 극한 → 미분계수 정의」 5 · 「(x−t) 분리 후 두 번 미분」 4 · 「극대·극소와 최대·최소」 5 · 「적분 구간에 변수 → 하한 대입+양변 미분」 3 (나머지 4문은 f(x−t) 치환 2 · xf(x) 양변 미분 1 · 합성 상한 극한 1)
- 대상층: 중하위권 10 · 중위권 14 · 중상위권 3
- 그림: 0문(이 범위에는 그림 문항이 없다)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CALC2-248-503 | 벤더는 확인체크(★2 출발)이나 (x−t) 분리 + ∫f'=f(x)−f(0) 복원 두 단계라 ★3 으로 올림. 같은 줄의 248-502 와 1단 차이 | ★2 / ★3 |
| GN-CALC2-250-506 | 확인체크지만 분모·상한 보정이 더해져 ★3. 예제 250-e15(★2)와 1단 차이 | ★2 / ★3 |
| GN-CALC2-250-507 | 확인체크지만 구간 폭 보정·양쪽 구간 분해로 ★3. 506 과 같은 사유 | ★2 / ★3 |
| GN-CALC2-251-513 | 벤더 STEP 2(★3 출발)이나 골조가 246-e11·251-509 와 동일한 상수 치환 절차형 → 체감 ★2. 라벨은 출발점 유지 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 단원은 네 골조의 반복이므로 최소 네 유형이 필요하다 — ① 적분 구간이 상수(정적분을 상수로 치환) ② 적분 구간에 변수(하한 대입 + 양변 미분) ③ 적분 구간과 피적분함수에 변수((x−t) 분리 후 두 번 미분) ④ 정적분의 극한(미분계수 정의).
- ①의 하위 갈래(피적분이 f'(t) 인 246-499, 구하는 값이 치환 상수 자체인 251-508)는 별도 유형으로 세우지 말고 ① 안의 변형으로 묶어도 된다. 반면 「해가 존재하지 않는 배치(k 의 계수가 1)」는 판정 성격이 달라 따로 세울 가치가 있다.
- ④는 보정 유무로 둘로 갈라야 한다 — 접근점이 하한과 같아 바로 F'(a) 가 되는 형(250-e15 · 251-510 · 251-512)과 분모·상한·구간 폭을 맞춰야 하는 형(250-506 · 250-507 · 252-519). 뒤쪽은 ★3~4 대의 변별 슬롯으로 쓰기 좋다.
- f(x−t) 치환형(252-514 · 252-518)은 ③과 골조가 닿아 있으나 「치환으로 합성을 제거한다」는 착안이 별도라 독립 유형으로 세우는 편이 낫다.
- 극대·극소·최대·최소형(249-e14 · 249-504 · 249-505 · 252-515 · 252-516)은 다섯 문항 모두 「f' 의 한 인수 부호를 구간으로 고정한다」가 본질이므로 하나의 유형으로 통합하고, 닫힌구간 끝값 비교 여부만 base ★ 를 가르는 축으로 두면 된다.
