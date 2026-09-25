---
name: mechanism-데이터-GN-CALC2-29
description: 개념원리 미적분Ⅱ 29 부분적분법(1/1 · 240~244쪽) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 미적분Ⅱ · 전사본 latex-bank/gn-calc2
  section: 29 부분적분법
  unit_code: CALC2-29
  part: "1/1"
  extract_range: "240~244쪽 · 240-483~244-497"
  total_problems: 18
  unit_total: 18
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-calc2/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-calc2/items/<id>.tex
  image_source: latex-bank/gn-calc2/figures/ (이 범위에는 그림 문항 없음)
---

# 개념원리 미적분Ⅱ · 29 부분적분법 (1/1) 정독 데이터 (v1.0)

이 파일은 240~244쪽 「29 부분적분법」 18문항 전수를 다룬다. 구역은 다섯이다 — 「개념원리 익히기」 2문(공식 적용 과정의 빈칸 채우기), 「필수·발전 예제」 9문(필수 예제 `241-e8`·`243-e10`, 발전 예제 `242-e9`, 각 예제에 딸린 확인체크 6개), 「연습문제 STEP 1」 2문, 「연습문제 STEP 2」 4문, 「연습문제 실력 UP」 1문. 벤더 난이도 신호는 구역·태그(필수/발전/확인체크)와 연습문제의 level 필드이며, 기출 태그는 없다. 이 범위에는 그림 문항이 없다.

★ 출발점은 구역 규칙을 그대로 썼다 — 개념원리 익히기 ★1, 필수 예제 ★2, 발전 예제 ★3, STEP 1 ★2, STEP 2 ★3, 실력 UP ★4. 확인체크는 「바로 앞 예제의 유제」라는 배치 사실을 근거로 짝이 되는 예제와 같은 출발점을 썼고(필수 짝 ★2 · 발전 짝 ★3), 거기서 M_total·통찰로 ±1 조정했다. 단원 특성상 골조가 크게 세 갈래다 — (가) 한 번의 부분적분으로 끝나는 기본형, (나) 두 번 적용해 원래 적분이 되돌아오면 미지수로 놓고 이항하는 순환형, (다) 부분적분 결과에 초기조건·연속·극값 같은 바깥 조건을 붙여 적분상수를 결정하는 결합형. 이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-CALC2-240-483
  page: 240
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    부분적분법으로 부정적분을 구하는 과정의 빈칸을 채우는 문제.
    ⑴ $\int x\sin x\,dx$ ⑵ $\int (x+3)e^x\,dx$ — $f(x)$, $g'(x)$ 를 무엇으로 놓는지부터 최종 결과까지.
  category: "부분적분 공식 적용 절차 확인 → 빈칸 채우기"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부분적분법 기본형(다항×삼각·다항×지수) 과정 채우기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f 와 g' 의 자리가 빈칸으로 안내돼 있어 학생은 공식 ∫fg' = fg − ∫f'g 를 따라가기만 하면 된다.
    다항식을 f, 삼각·지수를 g' 로 두는 규칙을 확인하는 한 단계. 개념원리 익히기 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "f=x(또는 x+3), g'=sin x(또는 e^x) → fg − ∫f'g → −x cos x + sin x + C / (x+2)e^x + C"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $x$, $\sin x$, $1$, $-\cos x$, $-x\cos x$, $-\cos x$, $-x\cos x+\sin x+C$ ⑵ $x+3$, $e^x$, $1$, $e^x$, $(x+3)e^x$, $e^x$, $(x+2)e^x+C$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/240-483.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "다항 인수의 계수·상수(x → 2x, x+3 → x−1)와 삼각·지수의 각·밑(sin x → cos 2x, e^x → e^{3x})을 바꿀 수 있음. 제약: g' 의 부정적분이 한 줄로 떨어져야 빈칸 개수가 유지되고, 각을 kx 로 바꾸면 1/k 가 두 번 붙어 빈칸 수가 늘어난다."
    creative: "(1) 빈칸을 f·g' 선택만 남기고 결과는 학생이 쓰게 하기(★1 유지) (2) f 와 g' 를 거꾸로 놓은 풀이를 제시하고 왜 막히는지 설명하게 하기(I-SC d1 · ★2) (3) 같은 골조로 정적분 구간을 붙이기(★2)."
```

```yaml
- id: GN-CALC2-240-484
  page: 240
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    부분적분법으로 정적분 $\int_{1}^{e}x\ln x\,dx$ 의 값을 구하는 과정의 빈칸 채우기.
  category: "로그를 f 로 두는 선택 → 부분적분 → 구간 대입"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부분적분법을 이용한 정적분(다항×로그) 과정 채우기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ln x 를 f 로 두어야 f' = 1/x 가 되어 남는 적분이 ∫(1/2)x dx 로 간단해진다는 것이 요점인데, 그 선택 자체가 빈칸 배치로 안내돼 있다.
    남는 것은 [ ]₁^e 대입 계산뿐. 개념원리 익히기·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "f=ln x, g'=x → [(1/2)x² ln x]₁^e − ∫₁^e (1/2)x dx → (1/4)e² + 1/4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\ln x$, $x$, $\dfrac{1}{x}$, $\dfrac{1}{2}x^2$, $\dfrac{1}{2}x^2\ln x$, $\dfrac{1}{2}x$, $\dfrac{1}{2}e^2$, $\dfrac{1}{4}x^2$, $\dfrac{1}{4}e^2+\dfrac{1}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/240-484.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "다항 인수의 차수(x → x², x³)와 적분 구간(1~e → 1~e², 1~√e)을 바꿀 수 있음. 제약: 하한은 ln 1 = 0 이 되는 1 로 두어야 대입이 깔끔하고, 상한은 e 의 거듭제곱이라야 답이 유리수 계수로 정리된다."
    creative: "(1) 같은 식을 부정적분으로 묻기(★1) (2) 구간을 1~t 로 두고 t 에 대한 함수로 표현하게 하기(Mₐ 상승 ★2) (3) x ln x 대신 (ln x)/x² 처럼 g' 가 음의 차수인 꼴로 바꿔 g 선택에서 부호 함정을 만들기(★2)."
```

### 필수·발전 예제

```yaml
- id: GN-CALC2-241-e8
  page: 241
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    다음 부정적분을 구하는 문제. ⑴ $\int xe^{2x}\,dx$ ⑵ $\int \ln x\,dx$ ⑶ $\int (x-2)\cos 3x\,dx$.
  category: "f·g' 선택 → 부분적분 1회 → 정리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "곱의 꼴이 아닌 ln x 를 ln x · 1 로 보아 g'(x)=1 로 두는 착안"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "부분적분법 (1) — 다항×지수·로그·다항×삼각의 부정적분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴⑶ 은 다항을 f 로 두는 표준 1회 적용이고, 각이 2x·3x 라 g 에 1/2·1/3 이 붙는 계수 관리가 함정(T-단위)이다.
    ⑵ 는 피적분함수가 곱이 아니어서 ln x · 1 로 보는 착안(EQV d1)이 필요하다. 필수 예제 출발 ★2 · M_total 6 · 통찰 1 → ★2 유지.
  tier: star_2
  mechanism_primary: "다항(또는 ln x)을 f, 지수·삼각(또는 1)을 g' → fg − ∫f'g 1회 → 상수 계수 정리"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $\dfrac{1}{2}xe^{2x}-\dfrac{1}{4}e^{2x}+C$ ⑵ $x\ln x-x+C$ ⑶ $\dfrac{1}{3}(x-2)\sin 3x+\dfrac{1}{9}\cos 3x+C$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/241-e8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수·삼각의 각 계수(2x, 3x → −x, x/2)와 다항 인수(x, x−2 → 3x+1)를 바꿀 수 있음. 제약: 각이 kx 이면 g 에 1/k, 남는 적분에 다시 1/k 가 붙어 1/k² 항이 생기므로 k 는 작은 정수로 두는 것이 안전하다."
    creative: "(1) ⑵ 를 ∫log₂x dx 나 ∫ln(2x)dx 로 바꾸기(같은 EQV 골조 ★2) (2) ⑶ 을 ∫(x−2)cos3x dx 의 한 점 값 조건과 묶기(★2) (3) 다항 차수를 2 로 올려 반복 적용을 요구하면 ★3."
```

```yaml
- id: GN-CALC2-241-485
  page: 241
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    다음 부정적분을 구하는 문제. ⑴ $\int xe^{-x}\,dx$ ⑵ $\int x^3\ln x\,dx$ ⑶ $\int (2x+1)\sin 2x\,dx$.
  category: "f·g' 선택 → 부분적분 1회 → 정리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부분적분법 (1) — 다항×지수·다항×로그·다항×삼각의 부정적분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    세 문제 모두 곱의 꼴이 그대로 보여서 f·g' 선택 규칙(다항 또는 로그를 f)을 적용하면 1회로 끝난다.
    ⑵ 만 로그가 있어 f 를 로그로 뒤집어야 하고, ⑴⑶ 은 e^{-x}·sin 2x 의 적분 부호·계수가 함정(T-부호)이다. 통찰 없음이나 3문 누적 노동 M_total 6 → 필수 예제 유제 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "다항(또는 x³)을 f, 지수·삼각(또는 x³)을 g' → fg − ∫f'g 1회 → 부호·계수 정리"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $-e^{-x}(x+1)+C$ ⑵ $\dfrac{1}{4}x^4\ln x-\dfrac{1}{16}x^4+C$ ⑶ $-\dfrac{1}{2}(2x+1)\cos 2x+\dfrac{1}{2}\sin 2x+C$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/241-485.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수의 부호·계수(e^{-x} → e^{-2x}), 로그 앞 다항 차수(x³ → x⁵), 삼각의 각(2x → 4x)을 바꿀 수 있음. 제약: ⑵ 는 f'=1/x 와 g=x^{n+1}/(n+1) 이 약분돼야 하므로 g' 는 x 의 거듭제곱으로 유지한다."
    creative: "(1) ⑵ 를 ∫x³(ln x)² 로 올리면 반복 적용 → ★3 (2) ⑴ 을 정적분 0~1 로 바꿔 대입 부담만 추가(★2 유지) (3) 세 문제 중 f·g' 선택이 뒤집히는 것을 고르게 하는 판별형으로 바꾸면 I-SC d1 ★2."
```

```yaml
- id: GN-CALC2-241-486
  page: 241
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $f(x)=\int x\cos 2x\,dx$ 이고 $f(0)=\dfrac{1}{4}$ 일 때 $f\!\left(\dfrac{\pi}{4}\right)$ 의 값.
  category: "부분적분으로 원시함수 → 초기조건으로 C 결정 → 대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부분적분으로 구한 부정적분에 초기조건을 주어 함숫값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x cos 2x 를 1회 부분적분해 (1/2)x sin 2x + (1/4)cos 2x + C 를 얻고, f(0)=1/4 로 C=0 을 정한 뒤 π/4 를 대입하는 3단 절차.
    C 결정은 표준 미정계수 대입이라 통찰로 세지 않았다(§2.2 I-BW 판별 제외 조항). 확인체크·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "x cos2x 부분적분 → (1/2)x sin2x + (1/4)cos2x + C → f(0)=1/4 로 C=0 → x=π/4 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{\pi}{8}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/241-486.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 계수(2x → 3x), 초기조건 자리와 값(f(0)=1/4 → f(π/2)=0), 물어보는 점(π/4 → π/2)을 바꿀 수 있음. 제약: 초기조건 자리는 sin·cos 값이 0 이나 ±1 이 되는 점으로 두어야 C 가 유리수로 떨어진다."
    creative: "(1) 조건을 f(π/4)=0 으로 주고 f(0) 을 묻는 역방향(★2) (2) f(x) 의 극값을 묻게 바꾸면 도함수 부호 분석이 붙어 ★3 (3) 피적분함수를 x²cos2x 로 올려 반복 적용 → ★3."
```

```yaml
- id: GN-CALC2-242-e9
  page: 242
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["발전"]
  category_type: "발전 예제"
  summary: |
    다음 부정적분을 구하는 문제. ⑴ $\int x^2\sin x\,dx$ ⑵ $\int e^x\cos x\,dx$.
  category: "부분적분 반복 적용 → 순환하면 원 적분을 미지수로 놓고 이항"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "⑵ 에서 두 번 부분적분하면 원래 적분이 되돌아오는 것을 보고, 적분을 미지수 I 로 놓아 적분 문제를 일차방정식으로 전환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "부분적분법 (2) — 반복 적용과 순환형(지수×삼각)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑴ 은 다항 차수가 2 라 부분적분을 두 번 해서 차수를 떨어뜨리는 반복형이고, 같은 방향(다항을 계속 f)으로 유지해야 끝난다.
    ⑵ 는 두 번 해도 차수가 줄지 않고 원 적분이 재등장하는데, 여기서 멈추지 않고 I 로 놓아 이항하는 전환(RT d2)이 핵심이다. 발전 예제 출발 ★3 · 통찰 1(depth 2) → ★3 유지.
  tier: star_3
  mechanism_primary: "⑴ 다항을 f 로 두고 부분적분 2회 → 차수 소거 / ⑵ 부분적분 2회 후 원 적분 재등장 → I 로 놓고 2I = ... 이항"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ $(2-x^2)\cos x+2x\sin x+C$ ⑵ $\dfrac{1}{2}e^x(\cos x+\sin x)+C$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/242-e9.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 삼각을 cos x 로, ⑵ 의 지수를 e^{2x}·e^{-x} 로, 삼각을 sin x 로 바꿀 수 있음. 제약: ⑵ 에서 지수 밑이 e^{ax}, 삼각 각이 bx 이면 이항 계수가 1 + b²/a² 꼴이 되므로 a, b 는 답이 유리수 계수로 정리되는 작은 정수로 둔다."
    creative: "(1) ⑵ 를 정적분으로 바꾸고 결과를 a + be^{π} 꼴 계수 비교로 묻기(★3) (2) ⑴ 의 차수를 3 으로 올리면 반복만 늘어 통찰 없이 Mₖ 만 상승(질 저하 · ★3 유지) (3) ∫e^x cos x 와 ∫e^x sin x 를 연립으로 동시에 구하게 하면 I-CON d2 추가 → ★4."
```

```yaml
- id: GN-CALC2-242-487
  page: 242
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    다음 부정적분을 구하는 문제. ⑴ $\int x^2e^{-x}\,dx$ ⑵ $\int e^{-x}\sin 3x\,dx$.
  category: "부분적분 반복 → 순환형은 미지수로 놓고 이항"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "⑵ 에서 두 번 부분적분 후 원 적분이 재등장하는 순환 구조를 보고 적분을 미지수로 놓아 방정식으로 전환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "부분적분법 (2) — 반복 적용과 순환형(지수×삼각)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑴ 은 x² 를 f 로 두고 두 번 적용해 차수를 떨어뜨리는 반복형이며, e^{-x} 의 적분마다 −1 이 붙어 부호 누적이 함정(T-부호)이다.
    ⑵ 는 각이 3x 라 이항 계수가 1 + 9 = 10 으로 커져 순환 구조를 정확히 세우지 않으면 계수를 놓친다(RT d2). 발전 예제 유제 출발 ★3 유지.
  tier: star_3
  mechanism_primary: "⑴ x² 를 f 로 부분적분 2회 → −(x²+2x+2)e^{-x} / ⑵ 부분적분 2회 → I = ... − 9I → 10I 이항"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ $-(x^2+2x+2)e^{-x}+C$ ⑵ $-\dfrac{1}{10}e^{-x}(\sin 3x+3\cos 3x)+C$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/242-487.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 지수(e^{-x} → e^{2x})와 ⑵ 의 각(3x → 2x)·지수 계수를 바꿀 수 있음. 제약: ⑵ 의 이항 계수는 a²+b² 꼴로 커지므로 (a,b) 를 (1,1)·(1,2)·(2,1) 처럼 작게 두어야 답이 정리된다."
    creative: "(1) ⑵ 를 0~π 정적분으로 바꿔 계수 비교를 묻기(★3) (2) ⑴ 에 f(0) 조건을 붙여 함숫값을 묻는 결합형(★3) (3) ⑵ 에서 f·g' 를 반대로 잡은 풀이도 같은 답이 나옴을 보이게 하면 I-SC d2 추가 → ★4."
```

```yaml
- id: GN-CALC2-242-488
  page: 242
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $f(x)=\int (\ln x)^2\,dx$ 이고 $f(1)=2$ 일 때 $f\!\left(\dfrac{1}{e}\right)$ 의 값.
  category: "(ln x)²·1 로 보고 부분적분 반복 → 초기조건으로 C 결정 → 대입"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "곱의 꼴이 아닌 (ln x)² 를 (ln x)² · 1 로 보아 g'(x)=1 로 두고, 남은 ∫ln x dx 에 같은 착안을 한 번 더 적용"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "(ln x)² 의 부정적분(같은 착안 2회 반복)과 초기조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    g'=1 착안을 한 번 쓰면 x(ln x)² − 2∫ln x dx 가 되고, 남은 ∫ln x dx 에 같은 착안을 또 써야 끝난다는 중첩 구조가 이 문항의 무게다(EQV d1).
    이후 f(1)=2 로 C=0 을 정하고 1/e 를 대입하는 부분은 절차. 발전 예제 유제 출발 ★3 · M_total 7 → ★3 유지.
  tier: star_3
  mechanism_primary: "(ln x)²·1 부분적분 → x(ln x)² − 2∫ln x dx → 다시 부분적분 → f(1)=2 로 C 결정 → x=1/e 대입"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{5}{e}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/242-488.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초기조건 값(f(1)=2), 묻는 점(1/e → e, e²), 로그의 거듭제곱(2 → 3)을 바꿀 수 있음. 제약: 조건점은 ln 값이 정수인 e 의 거듭제곱으로 두어야 답이 e 의 유리식으로 떨어지고, 지수를 3 으로 올리면 부분적분이 3회가 된다."
    creative: "(1) (ln x)² 를 (ln x)(ln x²) 처럼 위장해 정리 단계를 추가(★3) (2) f 의 극값을 묻게 바꾸면 도함수 부호 분석 결합(★4 후보) (3) ∫₁^e (ln x)² dx 정적분으로 바꾸면 C 결정이 빠져 ★2 로 내려간다."
```

```yaml
- id: GN-CALC2-243-e10
  page: 243
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    다음 정적분의 값을 구하는 문제. ⑴ $\int_{1}^{2}\ln x^3\,dx$ ⑵ $\int_{0}^{\frac{\pi}{2}}x\cos x\,dx$ ⑶ $\int_{0}^{1}x^2e^{2x}\,dx$.
  category: "정적분 부분적분 공식 → [fg] 대입 + 남는 적분"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "⑴ 의 ln x³ 을 3 ln x 로 정리한 뒤 곱의 꼴이 아니므로 g'(x)=1 로 두는 착안"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "부분적분법을 이용한 정적분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    정적분판 공식 [fg]ₐᵇ − ∫ₐᵇ f'g 를 세 꼴에 적용하는 숙달형이다. ⑴ 은 로그 정리 + g'=1 착안(EQV d1), ⑵ 는 1회 적용, ⑶ 은 x² 때문에 2회 적용.
    대입 구간마다 경계값을 챙겨야 하는 것이 함정(T-경계)이다. 필수 예제 출발 ★2 · M_total 7 · 통찰 1(depth 1) → +1 요건(통찰 2개 또는 depth 3) 미달로 ★2 유지.
  tier: star_2
  mechanism_primary: "ln x³ = 3 ln x 정리(또는 다항을 f) → 정적분 부분적분 1~2회 → 경계 대입"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $6\ln 2-3$ ⑵ $\dfrac{\pi}{2}-1$ ⑶ $\dfrac{1}{4}e^2-\dfrac{1}{4}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/243-e10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간(1~2 → 1~e, 0~π/2 → 0~π)과 지수·차수(x²e^{2x} → x²e^{-x})를 바꿀 수 있음. 제약: 삼각 구간은 끝점에서 sin·cos 가 0, ±1 이 되게, 로그 구간은 하한을 1 로 두어야 답이 짧게 정리된다."
    creative: "(1) ⑶ 의 값을 ae²+b 꼴로 두고 a+b 를 묻는 계수형(★2) (2) ⑵ 를 ∫₀^{π/2} x sin x 와 묶어 합·차를 묻기(★3) (3) 구간을 0~t 로 두고 t 의 함수로 만든 뒤 극값을 묻기(★4)."
```

```yaml
- id: GN-CALC2-243-489
  page: 243
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    다음 정적분의 값을 구하는 문제. ⑴ $\int_{0}^{1}(x-1)e^{-x}\,dx$ ⑵ $\int_{0}^{\pi}x(\sin x+\cos x)\,dx$ ⑶ $\int_{1}^{e}\dfrac{\ln x}{x^2}\,dx$.
  category: "정적분 부분적분 1회 → 경계 대입"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부분적분법을 이용한 정적분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    세 문제 모두 곱의 꼴이 그대로 보여 f·g' 선택 규칙만 적용하면 1회로 끝난다. ⑵ 는 분배해 두 적분으로 나누고, ⑶ 은 g'=x^{-2} 에서 g=−1/x 의 부호(T-부호)를 챙기는 정도가 부담이다.
    통찰 없음이나 3문 누적 노동 M_total 7 → 필수 예제 유제 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "다항 또는 ln x 를 f, 나머지를 g' → [fg]ₐᵇ − ∫ₐᵇ f'g → 경계 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $-\dfrac{1}{e}$ ⑵ $\pi-2$ ⑶ $1-\dfrac{2}{e}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/243-489.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 다항(x−1 → 2x+1)·지수 부호, ⑵ 의 구간(0~π → 0~π/2), ⑶ 의 분모 차수(x² → x³)를 바꿀 수 있음. 제약: ⑶ 은 f'=1/x 와 g=x^{1-n}/(1-n) 이 약분되도록 분모를 x 의 거듭제곱으로 유지한다."
    creative: "(1) ⑵ 에서 sin x + cos x 를 √2 sin(x+π/4) 로 합성한 뒤 적분하게 하면 I-RT d2 → ★3 (2) ⑶ 의 상한을 t 로 두고 t→∞ 극한을 묻기(★4) (3) ⑴ 의 값을 이용해 ∫₀¹ xe^{-x} 를 구하게 하는 연결형(★2)."
```

```yaml
- id: GN-CALC2-243-490
  page: 243
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $\int_{0}^{\frac{\pi}{2}}e^{-x}\cos x\,dx=a+be^{-\frac{\pi}{2}}$ 일 때 유리수 $a$, $b$ 에 대하여 $ab$ 의 값.
  category: "순환형 정적분 → 이항으로 값 계산 → 꼴 맞춰 계수 비교"
  M: {s: 3, k: 3, a: 2, t: 0}
  M_total: 8
  insights:
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 번 부분적분하면 원 정적분이 되돌아오는 것을 보고 적분값을 미지수로 놓아 일차방정식으로 전환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "지수×삼각 순환형 정적분과 계수 비교"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    지수×삼각의 순환 구조(RT d2)를 정적분에서 쓰는 꼴이라, 경계 대입까지 끼어 있어 부정적분판보다 계산이 무겁다(Mₖ 3).
    마지막에 결과를 a + be^{-π/2} 꼴로 정리해 유리수 a, b 를 읽어내는 단계가 추가된다. 확인체크(필수 짝 ★2 출발)이나 통찰 1(depth 2)·M_total 8 → +1 해 ★3. [분류 이슈] 벤더 배치(필수 예제 유제)와 1단 어긋남.
  tier: star_3
  mechanism_primary: "부분적분 2회 → I = (경계항) − I → 2I 이항 → a + be^{-π/2} 로 정리 → a, b 읽어 곱하기"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{1}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/243-490.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 계수와 삼각 각(e^{-x}cos x → e^{-2x}sin x), 구간(0~π/2 → 0~π)을 바꿀 수 있음. 제약: 이항 계수가 a²+b² 이므로 (1,1)·(1,2) 정도로 두어야 a, b 가 유리수로 떨어지고, 구간 끝점은 sin·cos 가 0, ±1 이 되는 곳이라야 꼴이 a+be^{k} 로 맞는다."
    creative: "(1) a+b 나 a−b 를 묻는 식으로만 바꾸기(★3 유지) (2) e^{-x}sin x 와 e^{-x}cos x 두 적분을 연립으로 동시에 구하게 하면 I-CON d2 추가 → ★4 (3) 구간을 0~t 로 두고 t→∞ 극한을 묻기(★4)."
```

### 연습문제 STEP 1

```yaml
- id: GN-CALC2-244-491
  page: 244
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    미분가능한 함수 $f(x)$ 의 한 부정적분 $F(x)$ 가 $F(x)=xf(x)-x^2e^x$ 를 만족시키고 $f(0)=1$ 일 때 $f(1)$ 의 값.
  category: "관계식 양변 미분 → f' 식 확보 → 부분적분으로 f 복원 → 초기조건"
  M: {s: 2, k: 2, a: 3, t: 0}
  M_total: 7
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "구하려는 것은 f 인데 주어진 것은 F 에 대한 관계식이므로, 양변을 미분해 F'=f 를 쓰면 f 가 소거되고 f' 만 남는다는 역방향 착안"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "부정적분 관계식을 미분해 f 를 복원하기(부분적분 결합)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    양변을 미분하면 f = f + xf' − (2x+x²)e^x 에서 f 가 소거되어 f'(x) = (x+2)e^x 가 남는다(BW d1).
    이후 (x+2)e^x 를 부분적분해 f 를 복원하고 f(0)=1 로 적분상수를 정한다. f 가 일반함수라 Mₐ 3. STEP 1 출발 ★2 · 통찰 1(depth 1) → +1 요건 미달로 ★2 유지. [분류 이슈] M_total 7·추상도를 보면 ★3 후보.
  tier: star_2
  mechanism_primary: "F'=f 로 양변 미분 → f 소거 → f'(x)=(x+2)e^x → 부분적분으로 f=(x+1)e^x+C → f(0)=1 로 C=0 → f(1)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2e$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/244-491.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "관계식의 뒷항(x²e^x → x²sin x, x³e^x), 초기조건 값(f(0)=1), 묻는 점(f(1))을 바꿀 수 있음. 제약: 미분했을 때 f 가 소거되도록 앞항은 반드시 x·f(x) 꼴을 유지하고, 뒷항은 미분 후 x 로 나누어떨어져야 f' 가 깔끔하다."
    creative: "(1) f(1) 대신 F(1) 을 묻기(한 단계 추가 ★3) (2) 앞항을 (x+1)f(x) 로 바꾸면 f 가 완전히 소거되지 않아 미분방정식 꼴이 되어 ★4 (3) 초기조건을 F(0) 으로 주면 F 와 f 의 관계를 한 번 더 따져야 해 ★3."
```

```yaml
- id: GN-CALC2-244-492
  page: 244
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $f(x)=\sin x$, $g(x)=3x$ 일 때 정적분 $\int_{0}^{\pi}f(g(x))g(x)\,dx$ 의 값.
  category: "합성 표기 풀어쓰기 → 다항×삼각 정적분 부분적분"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "합성함수 표기를 풀어 쓴 뒤 부분적분(정적분)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f(g(x))g(x) 를 3x sin 3x 로 풀어 쓰기만 하면 표준 1회 부분적분이다. 피적분함수가 f(g(x))g'(x) 꼴로 보여 치환적분으로 가려는 것이 유일한 함정(T-표기)이며, g(x)=3x 라 g' 와 g 가 헷갈리기 쉽다.
    표기 해석은 정의 대입이라 통찰로 세지 않았다. STEP 1 출발 ★2 · 통찰 없음이나 M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "f(g(x))g(x) = 3x sin3x 로 풀어 쓰기 → f=3x, g'=sin3x 부분적분 → 0~π 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/244-492.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "g 의 계수(3x → 2x), f 의 종류(sin → cos), 구간(0~π → 0~π/2)을 바꿀 수 있음. 제약: 구간 끝점에서 sin kπ, cos kπ 가 0 이나 ±1 이 되도록 k 와 구간을 맞춰야 답이 π 의 유리수배로 떨어진다."
    creative: "(1) 같은 자리에 g'(x) 를 넣어 치환적분이 정답이 되는 쌍둥이 문항과 나란히 내면 I-SC d2 → ★3 (2) f, g 를 f(x)=e^x, g(x)=2x 로 바꾸면 순환 없이 같은 ★2 (3) f(g(x))g(x) 를 f(x)g(x) 와 비교하게 하는 판별형(★2)."
```

### 연습문제 STEP 2

```yaml
- id: GN-CALC2-244-493
  page: 244
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    $f(x)=e^x-1$ 의 역함수 $f^{-1}(x)$ 에 대하여 $g(x)=\int f^{-1}(x)\,dx$ 이고 $g(0)=1$ 일 때 $g(e-1)$ 의 값.
  category: "역함수 명시화 → 로그 적분(부분적분) → 초기조건으로 C 결정"
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "역함수를 ln(x+1) 로 명시한 뒤, 곱의 꼴이 아니므로 ln(x+1)·1 로 보아 g'(x)=1 로 두는 착안"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "역함수의 부정적분(로그 적분)과 적분상수 결정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    먼저 f 를 뒤집어 f⁻¹(x)=ln(x+1) 을 얻어야 적분할 대상이 생기고, 그 다음 g'=1 착안으로 부분적분한다(EQV d1).
    묻는 점 e−1 이 ln(x+1) 을 1 로 만드는 자리라는 것도 설계돼 있다. STEP 2 출발 ★3 · M_total 7 → ★3 유지.
  tier: star_3
  mechanism_primary: "f⁻¹(x)=ln(x+1) → ln(x+1)·1 부분적분 → (x+1)ln(x+1)−(x+1)+C → g(0)=1 로 C 결정 → x=e−1 대입"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/244-493.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "원함수(e^x−1 → e^{2x}, e^x+2), 초기조건 값(g(0)=1), 묻는 점(e−1)을 바꿀 수 있음. 제약: 묻는 점은 역함수의 로그 인수가 e 의 거듭제곱이 되는 자리로 두어야 답이 정수·유리수로 떨어진다."
    creative: "(1) ∫₀^{e−1} f⁻¹(x)dx 정적분으로 바꾸면 C 결정이 빠져 ★2 (2) 역함수 적분을 구간 넓이(직사각형 − 원함수 적분)로 풀게 유도하면 I-RT d2 추가 → ★4 (3) 원함수를 ln 꼴로 주어 역함수가 지수함수가 되게 뒤집기(★3)."
```

```yaml
- id: GN-CALC2-244-494
  page: 244
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    모든 실수에서 연속인 $f(x)$ 의 도함수가 $x>0$ 에서 $\sin x$, $x<0$ 에서 $2xe^{-x}$ 이고 $f(\pi)=2$ 일 때 $f(-2)$ 의 값.
  category: "구간별 부정적분 → x=0 연속으로 두 적분상수 연결 → 대입"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "오른쪽 구간의 f(π)=2 와 x=0 에서의 연속 조건을 결합해, 서로 독립인 두 적분상수를 하나의 사슬로 잇는다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "구간별 도함수 + 연속 조건으로 적분상수 결정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    부분적분 자체는 x<0 쪽의 ∫2xe^{-x}dx 한 번뿐이고, 무게는 구조에 있다 — 두 구간의 적분상수가 따로 생기므로 f(π)=2 만으로는 왼쪽을 정할 수 없고 x=0 에서의 연속을 다리로 써야 한다(CON d2).
    x=0 이 정의에서 빠져 있어 경계 처리가 함정(T-경계)이다. STEP 2 출발 ★3 · M_total 8 → ★3.
  tier: star_3
  mechanism_primary: "x>0 에서 f=−cos x+C₁, f(π)=2 로 C₁ → x=0 연속으로 왼쪽 상수 C₂ 결정 → x<0 에서 f=−2(x+1)e^{-x}+C₂ 에 x=−2 대입"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$2e^2+2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/244-494.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 구간의 도함수(sin x → cos x, 2xe^{-x} → 3x e^{x}), 주어진 함숫값 자리와 값(f(π)=2), 묻는 점(−2)을 바꿀 수 있음. 제약: 연속 조건이 쓰이도록 조건점과 묻는 점은 서로 반대 구간에 두고, 조건점은 삼각 값이 0·±1 이 되는 자리로 둔다."
    creative: "(1) f 가 x=0 에서 미분가능하다는 조건으로 바꾸면 도함수 좌우극한 일치까지 따져야 해 ★4 (2) 조건을 f(−2)=k 로 주고 f(π) 를 묻는 역방향(★3 유지) (3) 구간을 셋으로 늘리면 상수 사슬이 길어져 Mₛ 만 상승(★3 유지 · 질 저하)."
```

```yaml
- id: GN-CALC2-244-495
  page: 244
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    $x>0$ 에서 미분가능한 $f(x)$ 가 $f'(x)=(x-2)\ln x$ 이고 $f(x)$ 의 극댓값이 $\dfrac{3}{4}$ 일 때 극솟값.
  category: "도함수 부호로 극대·극소 위치 판정 → 부분적분으로 f 복원 → 극댓값 조건으로 C 역추적"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "적분상수를 정할 조건이 함숫값이 아니라 「극댓값이 3/4」이므로, 먼저 f'=0 인 두 점 중 어느 쪽이 극대인지 부호로 가려낸 뒤 거꾸로 C 를 정해야 한다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "도함수가 (다항)×ln x 인 함수의 극댓값·극솟값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f'=(x−2)ln x 의 영점은 x=1, x=2 두 개이고, 두 인수의 부호가 구간마다 함께 바뀌어 x=1 이 극대, x=2 가 극소가 된다 — 이 판정을 먼저 해야 어느 값이 3/4 인지 알 수 있다(BW d2).
    정의역이 x>0 이라 ln 의 부호 구간을 놓치면 판정이 뒤집힌다(T-범위). 복원 적분은 g'=x−2 로 두는 표준 1회. STEP 2 출발 ★3 유지.
  tier: star_3
  mechanism_primary: "f' 부호 분석으로 x=1 극대·x=2 극소 확정 → f=((1/2)x²−2x)ln x−(1/4)x²+2x+C 복원 → f(1)=3/4 로 C → f(2)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-2\ln 2+2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/244-495.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "다항 인수의 영점(x−2 → x−3, x−1/2)과 극댓값(3/4)을 바꿀 수 있음. 제약: 영점이 1 보다 커야 x=1 이 극대·다른 영점이 극소가 되는 배치가 유지되고, 영점이 1 이면 극값이 사라진다. ln 의 밑을 바꾸면 상수배만 달라진다."
    creative: "(1) 극솟값을 주고 극댓값을 묻는 뒤집기(★3 유지) (2) 다항 인수를 (x−1)(x−2) 로 올려 영점 세 개·부호 분기를 늘리면 I-MI 추가 → ★4 (3) 극댓값과 극솟값의 차를 묻게 하면 C 가 소거돼 ★2 로 내려간다."
```

```yaml
- id: GN-CALC2-244-496
  page: 244
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    정적분 $\int_{0}^{\pi}e^x\sin x\,dx$ 의 값.
  category: "순환형 정적분 → 미지수로 놓고 이항"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 번 부분적분해도 차수가 줄지 않고 원 정적분이 되돌아오는 것을 보고, 적분값을 미지수로 놓아 일차방정식으로 전환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "지수×삼각 순환형 정적분"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    다항이 없어 f·g' 선택 규칙이 통하지 않고, 어느 쪽을 f 로 잡든 두 번 뒤 제자리로 돌아온다. 여기서 「끝나지 않는다」가 아니라 「방정식이 생겼다」로 읽는 전환이 이 문항의 전부다(RT d2).
    두 번 적용 사이에 부호가 한 번 뒤집히는 것이 함정(T-부호)이다. STEP 2 출발 ★3 · 통찰 1(depth 2) → ★3 유지.
  tier: star_3
  mechanism_primary: "부분적분 2회 → I = (경계항) − I → 2I 이항 → (e^π+1)/2"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{e^{\pi}+1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/244-496.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 계수와 삼각 각(e^x sin x → e^{2x}sin x, e^x sin 2x), 구간(0~π → 0~2π, 0~π/2)을 바꿀 수 있음. 제약: 이항 계수가 a²+b² 이므로 a, b 는 작은 정수로, 구간 끝점은 sin·cos 가 0 이나 ±1 이 되는 자리로 둔다."
    creative: "(1) 값을 (e^π+k)/m 꼴로 두고 k+m 을 묻는 계수형(★3 유지) (2) ∫₀^π e^x cos x 와 묶어 합을 묻기(★3) (3) ∫₀^{nπ} e^x sin x dx 를 n 에 대한 수열로 만들어 일반항을 묻기(I-PD 추가 → ★4)."
```

### 연습문제 실력 UP

```yaml
- id: GN-CALC2-244-497
  page: 244
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    $F(x)=\int_{e^x}^{e^{2x}}\ln t\,dt$ 가 $x=a$ 에서 극댓값을 가질 때 상수 $a$ 의 값.
  category: "구간 양 끝이 변수인 정적분 함수의 미분 → 인수 부호 분기로 극대 판정"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "적분을 직접 계산하려 하지 않고, 적분으로 정의된 함수를 미분해 F'(x)=ln(e^{2x})·(e^{2x})'−ln(e^x)·(e^x)' 라는 대수식으로 전환"
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "F'(x)=xe^x(4e^x−1) 의 영점이 x=0 과 x=−ln4 두 개이고, 두 인수의 부호가 구간마다 다르게 바뀌므로 세 구간을 모두 따져야 어느 쪽이 극대인지 갈린다"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "적분 구간이 모두 변수인 정적분 함수의 미분과 극값"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    ln t 의 원시함수를 부분적분으로 구해 대입해도 되지만, 그 길은 계산이 길고 극값 판정이 흐려진다. 상·하한이 모두 x 의 함수라는 구조를 보고 바로 미분하는 쪽이 본선이다(RT d2).
    미분 결과가 x·e^x·(4e^x−1) 로 인수분해되고 영점이 둘이라, 부호를 세 구간에서 따져야 극대가 x=−ln4 쪽임이 나온다(MI d2). 실력 UP 출발 ★4 · 통찰 2 → ★4 유지(★5 는 SC/VF/SYM/XU 부재로 미달). [분류 이슈] 단원은 부분적분인데 핵심 골조는 정적분 함수의 미분·극값이다.
  tier: star_4
  mechanism_primary: "상·하한이 모두 변수 → F'(x)=2x·2e^{2x}−x·e^x = xe^x(4e^x−1) → 영점 x=0, x=−ln4 → 부호 분기로 극대는 x=−ln4"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$-\ln 4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/244-497.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상·하한의 지수(e^x, e^{2x} → e^x, e^{3x})와 피적분함수(ln t → t ln t)를 바꿀 수 있음. 제약: F' 가 x·e^{kx}·(상수·e^{kx}−1) 꼴로 인수분해돼 영점이 x=0 과 로그 한 개로 떨어져야 답이 −ln(상수) 로 정리된다. 상·하한의 대소가 뒤집히는 지점이 있어도 정적분 정의상 문제는 없다."
    creative: "(1) 극댓값 자체를 묻게 하면 ln t 의 부정적분(부분적분)까지 필요해져 단원과 맞고 ★4 유지 (2) 하한을 상수 1 로 고정하면 미분이 한 항뿐이라 ★3 (3) F(x) 의 최댓값·최솟값을 닫힌구간에서 묻는 꼴로 바꾸면 경계 검증이 붙어 I-VF 추가 → ★5 후보."
```

## 표본 판정 요약 (18문)

- ★ 분포: ★1 2 · ★2 7 · ★3 8 · ★4 1 · ★5 0
- 통찰형 12 · 절차형 6 · premium 0
- 통찰 유형 분포: I-RT 5(순환형 이항 4 + 정적분 함수 미분 1) · I-EQV 4(곱이 아닌 함수를 ·1 로 보기) · I-BW 2 · I-CON 1 · I-MI 1 — 합 13개 라벨(문항 12 · `244-497` 만 2개)
- type_hint 묶음: 「순환형(지수×삼각)」 4(`242-e9`·`242-487`·`243-490`·`244-496`) · 「초기조건·연속·극값으로 적분상수 결정」 4(`241-486`·`242-488`·`244-493`·`244-494`) · 「기본형 부정적분」 3(`240-483`·`241-e8`·`241-485`) · 「부분적분을 이용한 정적분」 3(`240-484`·`243-e10`·`243-489`) · 나머지 4는 단발(`244-491` 관계식 미분 · `244-492` 합성 표기 · `244-495` 극값 · `244-497` 정적분 함수 미분)
- 그림: 0문 (이 범위에는 그림 문항이 없다)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨·배치와 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CALC2-243-490 | 벤더 배치는 필수 예제(★2)의 확인체크 유제이나, 실제 골조는 발전 예제 쪽 순환형 + 계수 비교라 ★3 으로 올려 잡음 | ★2 / ★3 |
| GN-CALC2-244-491 | STEP 1(★2 출발)이지만 $f$ 가 일반함수 추상(Mₐ 3)이고 관계식 미분으로 $f$ 를 소거하는 착안이 필요해 ★3 후보. v3.8 +1 요건(통찰 2개 또는 depth 3)은 미달이라 라벨은 ★2 유지 | ★2 / ★3 |
| GN-CALC2-244-497 | 단원 라벨은 「부분적분법」이나 본선 골조는 적분 구간이 모두 변수인 정적분 함수의 미분과 극값 판정이다. 부분적분은 대안 경로에서만 쓰인다 — 카탈로그를 만들 때 이 문항을 부분적분 유형에 둘지 「정적분으로 정의된 함수」 유형에 둘지 결정 필요 | ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: ① 「순환형(지수×삼각) 부분적분」 — 이 범위에서 4문으로 가장 많고, 다른 부분적분 유형과 달리 「적분을 미지수로 놓는다」는 전환이 유일한 관문이라 base ★3 유형으로 독립시킬 만하다. ② 「곱의 꼴이 아닌 함수의 부분적분(ln x, (ln x)², 역함수)」 — `241-e8`⑵·`242-488`·`243-e10`⑴·`244-493` 이 모두 g'=1 착안 하나로 묶이므로 base ★2 유형 하나로 충분하다.
- **통합해도 될 유형**: 「다항×지수」·「다항×삼각」·「다항×로그」의 1회 적용 세 갈래는 f·g' 선택 규칙만 같고 난도 차가 없으므로 「부분적분 기본형」 하나로 합친다(개념원리의 예제 제목 「부분적분법 (1)」과 일치).
- **경계 사례**: 「부정적분 관계식 미분」(`244-491`)·「구간별 도함수 + 연속」(`244-494`)·「극값 조건으로 적분상수」(`244-495`)는 부분적분이 부품으로만 쓰이는 결합형이다. 부분적분 카탈로그에 두기보다 「적분상수 결정」이라는 상위 유형을 따로 두고 부품 적분법을 태그로 다는 편이 변형 생성에 유리하다.
