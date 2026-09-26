---
name: mechanism-데이터-GN-CALC2-27
description: 개념원리 미적분Ⅱ 27 여러 가지 함수의 정적분(1/1 · 214~221쪽) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 미적분Ⅱ · 전사본 latex-bank/gn-calc2
  section: 27 여러 가지 함수의 정적분
  unit_code: CALC2-27
  part: "1/1"
  extract_range: "214~221쪽 · 214-e4~221-456"
  total_problems: 31
  unit_total: 31
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-calc2/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-calc2/items/<id>.tex
  image_source: latex-bank/gn-calc2/figures/ (이 범위에는 그림 문항 없음)
---

# 개념원리 미적분Ⅱ · 27 여러 가지 함수의 정적분 (1/1) 정독 데이터 (v1.0)

이 파일은 214~221쪽 31문항 전수를 다룬다. 구역은 넷이다. 「필수·발전 예제」(214~218쪽 · 15문)는 필수 예제 6개(`214-e4` 유리·무리함수 · `215-e5` 지수·삼각함수 · `216-e6` 구간별 정의 함수 · `216-e7` 절댓값 · `217-e8` 우함수·기함수 · `218-e9` 주기함수)와 각 예제에 딸린 확인체크 9개가 번갈아 배치된 구조이고, 그 뒤로 「연습문제 STEP 1」 8문 · 「연습문제 STEP 2」 6문 · 「연습문제 실력 UP」 2문이 온다. 그림 문항은 없다.

★ 출발점은 구역과 태그로 잡았다. 필수 예제 ★2 · STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4 에서 출발했고, 확인체크는 원 규칙의 ★1(개념 확인)이 아니라 **바로 앞 필수 예제의 유제**라는 배치 사실을 근거로 ★2 에서 출발시킨 뒤 M_total·통찰로 ±1 조정했다(14·15 파일과 같은 관례). 이 읽기 차이 때문에 원 규칙(★1 출발) 기준으로 2단 어긋나는 확인체크 ★3 문항은 파일 끝 분류 이슈 표에 기록해 두었다.

단원 성격상 통찰이 몰리는 지점이 뚜렷하다. ① 피적분함수를 적분 가능한 꼴로 바꾸는 항등식 변형(항별 분리 · 세제곱 차 인수분해 · $\tan^2x=\sec^2x-1$ · 반각 · 배각 · 유리화) ② 적분변수 문자 무관과 상하한 교환으로 두 정적분을 한 구간에 합치기 ③ 우함수·기함수 대칭으로 항 소거 ④ 주기함수 환원. 이 넷이 I-EQV · I-SYM · I-PD 라벨의 대부분을 차지한다. 이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-CALC2-214-e4
  page: 214
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑵ 유리함수 $\dfrac{2x+1}{x^2}$ 와 무리식 $(x-\sqrt{x})^2$ 의 정적분 값을 구한다.
  category: '항별 분리 → 거듭제곱 꼴 부정적분 → 상하한 대입'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "유리함수·무리함수를 항별로 나눈 정적분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 $\dfrac{2}{x}+x^{-2}$ 로, ⑵ 는 전개해 $x^2-2x^{3/2}+x$ 로 쪼개면 각 항이 표준 공식이다.
    $\dfrac{1}{x}$ 만 $\ln$ 으로 가는 것을 놓치지 않으면 끝. 착안 없이 순서대로 진행되는 절차형.
    필수 예제 출발점 ★2 · 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: '피적분함수를 항별로 분리 → $x^n$·$1/x$ 각각 부정적분 → 상하한 대입'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $2\ln 2+\dfrac{1}{2}$ ⑵ $\dfrac{1}{30}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/214-e4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자 계수(2x+1 → 3x+2)와 적분 구간(1~2 → 1~e, 1~4)을 바꿀 수 있다. 제약: $1/x$ 항이 살아 있어야 $\\ln$ 이 나오고, 무리식은 전개 후 지수가 $-1$ 이 되지 않아야 한다. 구간 하한은 양수로 고정(정의역)."
    creative: "(1) 분모를 $x^3$ 로 올려 음의 지수 항을 늘리기(★2 유지) (2) $\\dfrac{2x+1}{x^2}$ 를 $\\dfrac{2x+1}{x^2+x}$ 로 바꿔 부분분수 분해를 요구하면 I-EQV d2 → ★3 (3) 값을 주고 분자 계수를 묻는 역방향(214-433 골조 · ★2)."
```

```yaml
- id: GN-CALC2-214-432
  page: 214
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑵ $\dfrac{3x^3-2x^2+1}{x}$ 의 $1\sim e$ 정적분과 $(\sqrt{x}-2)^2$ 의 $1\sim 4$ 정적분.
  category: '항별 분리 → 거듭제곱 꼴 부정적분 → 상하한 대입'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "유리함수·무리함수를 항별로 나눈 정적분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    214-e4 와 같은 골조의 유제. ⑴ 은 $3x^2-2x+\dfrac{1}{x}$ 로, ⑵ 는 $x-4\sqrt{x}+4$ 로 쪼갠다.
    상한이 $e$ 라 $\ln e=1$ 이 깔끔하게 떨어지는 배치일 뿐 착안은 없다.
    확인체크(유제) 출발점 ★2 · 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: '분자를 $x$ 로 나눠 항별 분리 → 각 항 부정적분($1/x\to\ln x$) → 대입'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $e^3-e^2+1$ ⑵ $\dfrac{5}{6}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/214-432.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자 다항식의 계수·차수와 구간 상한($e$, $e^2$)을 바꿀 수 있다. 제약: 분자에 상수항이 있어야 $\\ln$ 항이 생기고, $e$ 를 상한으로 두면 답이 $e$ 의 다항식으로 정리된다. 무리식 구간 하한은 0 이상."
    creative: "(1) 상한을 $e^2$ 로 올려 $\\ln$ 계수를 2로(★2 유지) (2) 분모를 $x^2$ 로 바꿔 $1/x^2$ 항까지 섞기(★2) (3) $\\int_1^e$ 값을 주고 분자의 미정계수를 묻기 → I-BW 없이도 Mₐ 상승 ★3."
```

```yaml
- id: GN-CALC2-214-433
  page: 214
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $\int_{1}^{4}\left(\sqrt{x}+\dfrac{k}{\sqrt{x}}\right)dx=4$ 가 되도록 하는 상수 $k$.
  category: '무리식 항별 적분 → $k$ 에 대한 일차방정식 → 해'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정적분 값이 주어질 때 미정상수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $\sqrt{x}=x^{1/2}$, $1/\sqrt{x}=x^{-1/2}$ 로 보면 적분은 한 줄이고, $k$ 는 적분 밖으로 나오므로
    결과가 $k$ 의 일차식이 되어 방정식이 즉시 풀린다. 미정계수 대입은 스키마상 I-BW 로 인정하지 않는다.
    확인체크 출발점 ★2 · 통찰 0 · M_total 7(≥6 이라 −1 조건 미해당) → ★2.
  tier: star_2
  mechanism_primary: '$x^{\pm 1/2}$ 로 보고 적분 → $\dfrac{14}{3}+2k=4$ → $k$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-\dfrac{1}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/214-433.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간(1~4 → 1~9, 4~9)과 우변 값을 바꿀 수 있다. 제약: 구간이 완전제곱수 사이여야 $\\sqrt{x}$ 대입이 유리수로 떨어지고, 하한은 0 보다 커야 $1/\\sqrt{x}$ 가 정의된다. 우변은 $k$ 가 유리수가 되도록 고른다."
    creative: "(1) $k$ 를 $\\sqrt{x}$ 계수 쪽에 두기(★2 유지) (2) 피적분함수를 $\\sqrt{x}+\\dfrac{k}{x}$ 로 바꾸면 $k\\ln 4$ 가 남아 로그 처리 필요 → ★2~3 (3) 「$k$ 가 자연수가 되도록 하는 구간 상한」으로 뒤집으면 I-BW d2 + 정수 조건 → ★3."
```

```yaml
- id: GN-CALC2-215-e5
  page: 215
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑷ 지수함수·삼각함수의 정적분. ⑷ 는 적분변수 문자가 다르고 상하한이 뒤집힌 두 정적분의 합.
  category: '지수·삼각 기본 적분 공식 → ⑷ 는 두 적분을 한 구간으로 통합'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 4
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "적분변수 문자가 무관함과 상하한 교환이 부호를 바꾼다는 두 성질로 두 정적분을 같은 구간의 한 적분으로 합침"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "지수함수·삼각함수의 정적분(적분변수 무관·상하한 교환 포함)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴~⑶ 은 $a^{mx+n}$, $e^{kx}$, $\sin x$·$\cos x$ 의 기본 공식 대입으로 끝난다.
    ⑷ 만 성격이 다르다. $dy$ 적분의 문자를 $x$ 로 바꾸고 상하한을 뒤집어 부호를 바꾸면
    두 피적분함수가 더해져 $2\cos x$ 만 남는다. 이 통합 착안 1개(EQV d1)는 이 예제의 학습 목표라 depth 1.
    필수 예제 ★2 출발 · 통찰 1개 d1 → ★2 유지.
  tier: star_2
  mechanism_primary: '기본 적분 공식 대입 → ⑷ 는 변수 문자 통일·상하한 교환으로 한 적분에 합쳐 $2\cos x$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $\dfrac{12}{\ln 3}$ ⑵ $\dfrac{1}{3}e^3-\dfrac{1}{3e^3}-6$ ⑶ $3$ ⑷ $2$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/215-e5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(3 → 2, 5)과 지수의 일차식 계수, 삼각함수 계수, 구간($0\\sim\\pi/2$ → $0\\sim\\pi$)을 바꿀 수 있다. 제약: ⑷ 는 두 피적분함수의 공통항이 상쇄되고 나머지가 한 항으로 남도록 부호를 맞춰야 한다($\\cos$ 끼리 더해지고 $e^{-x}$ 끼리 상쇄)."
    creative: "(1) ⑷ 에서 상쇄되는 항을 $\\sin$ 으로 바꾸기(★2 유지) (2) 두 적분의 구간을 서로 다르게 주면 통합 전에 구간 분할이 필요해 ★3 (3) ⑷ 를 「값이 2가 되도록 하는 계수」로 뒤집으면 Mₐ 상승 ★3."
```

```yaml
- id: GN-CALC2-215-434
  page: 215
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑷ 지수·삼각함수의 정적분. ⑵ 는 세제곱 차 꼴 곱, ⑶⑷ 는 상하한이 뒤집힌 두 적분의 합.
  category: '곱셈 공식으로 피적분함수 정리 → 두 적분 통합 → 기본 공식'
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "$(2^x-1)(4^x+2^x+1)$ 을 $a=2^x$ 의 세제곱 차 $a^3-1=8^x-1$ 로 보고 전개 없이 정리"
    - step: 3
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "⑶⑷ 에서 두 적분을 한 구간으로 합친 뒤 분자를 인수분해해 약분(⑶ $\\dfrac{1-e^{3x}}{1-e^x}=1+e^x+e^{2x}$) 또는 합차 공식으로 축약(⑷ $4\\cos x$)"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "곱셈 공식·두 적분 통합을 거치는 지수·삼각함수의 정적분"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑴ 은 전개만 하면 끝이지만 ⑵~⑷ 는 그대로 적분되지 않는다. ⑵ 는 $2^x$ 를 한 덩어리로 보는 세제곱 차,
    ⑶ 은 통합 후 $1-e^{3x}$ 인수분해 약분, ⑷ 는 통합 후 $(\cos x+1)^2-(\cos x-1)^2=4\cos x$ 로 축약된다.
    각각 착안 없이는 적분이 진행되지 않는 지점이라 통찰 2개(EQV d1·d2)로 셌다.
    확인체크 ★2 출발 + 통찰 2개 → +1 → ★3. [분류 이슈] 원 규칙(확인체크 ★1 출발) 기준으로는 2단 차이.
  tier: star_3
  mechanism_primary: '곱셈 공식으로 피적분함수를 단항 지수 꼴로 정리 → 뒤집힌 두 적분을 한 구간으로 통합·약분 → 기본 공식'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $\dfrac{1}{2}e^2-\dfrac{1}{2e^2}+2$ ⑵ $\dfrac{7}{\ln 8}-1$ ⑶ $\ln\dfrac{3}{2}+\dfrac{7}{2}$ ⑷ $-4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/215-434.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(2 → 3), 구간($\\ln 2\\sim\\ln 3$ → $\\ln 2\\sim\\ln 4$), ⑶ 분자의 지수(3 → 2)를 바꿀 수 있다. 제약: ⑶ 은 통합 후 분자가 분모 $1-e^x$ 로 나누어떨어지는 차수여야 하고, ⑷ 는 두 제곱의 차가 한 항으로 정리되도록 부호 쌍을 유지해야 한다."
    creative: "(1) ⑵ 를 세제곱 합 $(2^x+1)(4^x-2^x+1)$ 로(★3 유지) (2) ⑶ 의 분자 차수를 분모로 나누어떨어지지 않게 바꾸면 부분분수까지 필요 → ★4 (3) ⑷ 를 통합하지 않고 각각 적분해도 풀리게 구간을 같게 주면 통찰이 사라져 ★2."
```

```yaml
- id: GN-CALC2-215-435
  page: 215
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $0<k<\dfrac{\pi}{2}$ 에서 $\int_{0}^{k}\dfrac{1}{1-\sin^2 x}\,dx=\sqrt{3}$ 일 때 상수 $k$.
  category: '삼각항등식으로 $\sec^2x$ 변환 → $\tan$ 적분 → 방정식'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "$1-\\sin^2x=\\cos^2x$ 로 바꿔 피적분함수를 적분 공식이 있는 $\\sec^2x$ 꼴로 만듦"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각항등식으로 피적분함수를 바꾼 뒤 미정상수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    주어진 꼴 그대로는 적분 공식이 없고, $1-\sin^2x=\cos^2x$ 한 번이면 $\sec^2x$ 가 되어 적분이 $\tan x$ 다.
    $\tan k=\sqrt{3}$ 에서 $k$ 를 고르는 데 조건 $0<k<\dfrac{\pi}{2}$ 가 쓰인다(T-범위).
    변환 착안 1개(EQV d1)·M_total 6 → 확인체크 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: '$1-\sin^2x=\cos^2x$ → $\sec^2x$ 적분 $\tan x$ → $\tan k=\sqrt{3}$ → 범위 안 해'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{\pi}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/215-435.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 값($\\sqrt{3}$ → $1$, $\\dfrac{\\sqrt{3}}{3}$)과 범위 제한을 바꿀 수 있다. 제약: 우변은 특수각의 $\\tan$ 값이어야 하고, 범위는 $\\tan$ 가 일대일인 구간이어야 답이 하나로 정해진다."
    creative: "(1) 피적분함수를 $\\dfrac{1}{1-\\cos^2x}$ 로 바꿔 $\\csc^2x\\to-\\cot x$ 로(하한을 0에서 띄워야 함 · ★2) (2) 범위를 $0<k<\\pi$ 로 넓히면 해가 둘 이상 나와 사후 검증 필요 → I-VF d2 · ★3 (3) 우변을 매개변수 $a$ 로 두고 $k$ 를 $a$ 로 표현하면 Mₐ 상승 ★3."
```

```yaml
- id: GN-CALC2-216-e6
  page: 216
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    $x\le\pi$ 에서 $\sin x$, $x\ge\pi$ 에서 $\cos x+1$ 인 함수의 $0\sim 2\pi$ 정적분.
  category: '경계점에서 구간 분할 → 각 구간 식으로 적분 → 합'
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구간에 따라 다르게 정의된 함수의 정적분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    정의가 갈리는 $x=\pi$ 가 적분 구간 안에 있으므로 $[0,\pi]$ 와 $[\pi,2\pi]$ 로 나눠 각각 자기 식으로 적분한다.
    분할점이 발문에 이미 적혀 있어 찾을 필요가 없고 적분 자체도 기본 공식이라 절차형이다.
    필수 예제 ★2 · 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: '$x=\pi$ 에서 구간 분할 → $\int_0^{\pi}\sin x+\int_{\pi}^{2\pi}(\cos x+1)$ → 합'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2+\pi$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/216-e6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분할점($\\pi$ → $\\pi/2$), 두 구간의 함수식(지수·유리함수로 교체), 적분 구간 상하한을 바꿀 수 있다. 제약: 분할점이 적분 구간 내부에 있어야 하고, 두 식이 분할점에서 같은 값을 가지도록 상수항을 맞추면 연속함수가 된다($\\sin\\pi=0$, $\\cos\\pi+1=0$)."
    creative: "(1) 두 식이 분할점에서 어긋나게 해 불연속으로 만들기(적분값은 그대로 · ★2) (2) 분할점을 $x=a$ 로 두고 적분값이 주어진 값이 되도록 $a$ 를 찾게 하면 I-BW d2 → ★3 (3) 구간을 세 토막으로 늘리기(★2~3 · Mₛ 상승)."
```

```yaml
- id: GN-CALC2-216-e7
  page: 216
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    $\int_{0}^{1}|e^x-2|\,dx$ 의 값.
  category: '부호 변화점 $x=\ln 2$ 찾기 → 구간 분할·절댓값 제거 → 적분'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "절댓값 기호를 포함한 함수의 정적분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $e^x-2=0$ 에서 $x=\ln 2$ 이고 이 값이 $0<\ln 2<1$ 이므로 구간 안에 들어온다.
    $[0,\ln 2]$ 는 음수라 부호를 뒤집고 $[\ln 2,1]$ 은 그대로 적분한다.
    분할점을 직접 구해야 하는 만큼 T-부호·T-경계 함정이 둘이지만, 이 예제의 학습 목표 자체가 이 절차라 통찰로 세지 않았다.
    필수 예제 ★2 · 통찰 0 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: '$e^x-2=0\to x=\ln 2$ → 구간 분할 후 부호 붙여 절댓값 제거 → 두 적분의 합'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4\ln 2+e-5$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/216-e7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수(2 → 3)와 구간($0\\sim1$ → $0\\sim2$)을 바꿀 수 있다. 제약: 부호 변화점 $\\ln c$ 가 적분 구간 내부에 있어야 분할이 생긴다($c$ 가 구간 양 끝의 $e^x$ 값 사이). 밖으로 나가면 절댓값이 그냥 벗겨져 ★1 로 내려간다."
    creative: "(1) $|2^x-3|$ 처럼 밑을 바꾸기(★2 유지) (2) $|e^x-2|$ 대신 $|e^x-e^{-x}|$ 로 두면 분할점이 0 이라 대칭까지 보이게 됨 → I-SYM d1 · ★3 (3) 적분값이 주어진 값이 되도록 상수를 찾게 하면 I-BW + 사후 검증 → ★4."
```

```yaml
- id: GN-CALC2-216-436
  page: 216
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $x\le 0$ 에서 $e^{-x}$, $x\ge 0$ 에서 $\cos x$ 인 함수의 $-1\sim\pi$ 정적분.
  category: '경계점 $x=0$ 에서 구간 분할 → 각 구간 식으로 적분 → 합'
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구간에 따라 다르게 정의된 함수의 정적분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    216-e6 의 유제. 분할점 $x=0$ 이 적분 구간 $[-1,\pi]$ 안에 있으므로 두 토막으로 나눠
    $\int_{-1}^{0}e^{-x}dx+\int_{0}^{\pi}\cos x\,dx$ 를 계산한다. 뒤 적분이 0 이 되는 배치라 계산이 가볍다.
    확인체크 ★2 출발 · 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: '$x=0$ 에서 분할 → $\int_{-1}^{0}e^{-x}+\int_{0}^{\pi}\cos x$ → 합'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$e-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/216-436.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "적분 구간($-1\\sim\\pi$ → $-2\\sim\\pi/2$)과 두 구간의 함수식을 바꿀 수 있다. 제약: 분할점 $x=0$ 이 구간 내부여야 하고, 삼각 쪽 상한을 $\\pi$ 로 두면 그 토막이 0 이 되어 답이 간단해진다 — 상한을 $\\pi/2$ 로 바꾸면 1 이 더해진다."
    creative: "(1) 왼쪽 식을 $e^{-x}$ 대신 $2^{-x}$ 로(★2 유지) (2) $x\\ge0$ 쪽을 $|\\cos x|$ 로 바꾸면 분할이 두 번 → ★3 (3) 적분 구간의 하한을 미지수로 두고 값이 주어지게 하면 I-BW d2 · ★3."
```

```yaml
- id: GN-CALC2-216-437
  page: 216
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑶ 절댓값이 붙은 삼각·지수·무리식 $|\cos x|$, $|2^x-4|$, $|(x-1)\sqrt{x}|$ 의 정적분.
  category: '부호 변화점 찾기 → 구간 분할·절댓값 제거 → 적분 후 합'
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "⑶ 에서 $\\sqrt{x}\\ge0$ 이므로 곱의 부호가 $x-1$ 만으로 정해진다고 보고 분할점을 $x=1$ 하나로 줄임"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "절댓값 기호를 포함한 함수의 정적분(부호 변화점 분할)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    세 문항 모두 같은 골조지만 분할점을 찾는 방식이 다르다. ⑴ 은 $x=\pi/2$, ⑵ 는 $2^x=4$ 에서 $x=2$,
    ⑶ 은 $\sqrt{x}\ge0$ 이라는 관찰로 $x=1$ 하나만 남는다. ⑶ 의 관찰만 통찰(EQV d1)로 셌다.
    소문항 셋이라 노동량은 M_total 8 로 높지만 규칙상 +1 조건(통찰 2개 이상 또는 depth 3)에 못 미친다.
    확인체크 ★2 출발 → ★2 유지.
  tier: star_2
  mechanism_primary: '각 식의 부호 변화점 계산 → 구간 분할 후 부호 붙여 절댓값 제거 → 토막별 적분의 합'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $2$ ⑵ $\dfrac{17}{2\ln 2}+4$ ⑶ $8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/216-437.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑵ 의 밑과 상수($2^x-4$ → $3^x-9$), ⑶ 의 인수($x-1$ → $x-2$), 각 구간을 바꿀 수 있다. 제약: 부호 변화점이 구간 내부에 있어야 하고, ⑶ 은 하한이 0 이상이어야 $\\sqrt{x}$ 가 정의된다. ⑴ 의 상한을 $\\pi$ 의 정수배로 두면 값이 정수로 떨어진다."
    creative: "(1) ⑴ 의 상한을 $2\\pi$, $5\\pi/2$ 로 늘려 주기 착안을 넣으면 I-PD d1 · ★3 (2) ⑶ 을 $|(x-1)(x-3)\\sqrt{x}|$ 로 만들어 분할을 둘로(★3) (3) 세 문항 중 하나를 「적분값이 주어질 때 상수 구하기」로 뒤집기(★3)."
```

```yaml
- id: GN-CALC2-217-e8
  page: 217
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑵ 원점 대칭 구간에서 $\sin x+\cos x+\tan x$ 와 $x^2\sin x+\cos x$ 의 정적분.
  category: '항별 우함수·기함수 판정 → 기함수 항 소거 → 우함수만 $2\int_0^a$'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "적분 구간이 $-a\\sim a$ 임을 보고 각 항을 우함수·기함수로 분류해 기함수 항($\\sin x$, $\\tan x$, $x^2\\sin x$)의 적분을 0 으로 지움"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "우함수·기함수의 대칭성을 이용한 정적분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 문항 모두 대칭 구간이고, 기함수 항을 지우면 남는 것은 $\cos x$ 하나뿐이라 $2\int_0^a\cos x\,dx$ 로 끝난다.
    특히 ⑵ 의 $x^2\sin x$ 는 대칭을 쓰지 않으면 이 단원 도구로는 적분할 수 없어 통찰이 필수적이다(SYM d1 · 예제의 학습 목표라 depth 1).
    필수 예제 ★2 출발 · M_total 5 지만 통찰이 있어 −1 조건 미해당 → ★2.
  tier: star_2
  mechanism_primary: '대칭 구간 확인 → 항별 우·기함수 분류 → 기함수 소거 → 우함수만 $2\int_0^a$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ $\sqrt{3}$ ⑵ $2$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/217-e8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간의 $a$ 값($\\pi/3$, $\\pi/2$ → $\\pi/4$, $\\pi/6$)과 기함수 항의 계수를 바꿀 수 있다. 제약: 구간은 반드시 원점 대칭이어야 하고, $\\tan x$ 를 넣으면 $a<\\pi/2$ 여야 한다. 남는 우함수 항은 이 단원 공식으로 적분되는 것이어야 한다."
    creative: "(1) 기함수 항을 $x^3\\cos x$, $x\\sin^2x$ 등으로 갈아 끼우기(★2 유지) (2) 구간을 $-a\\sim 2a$ 처럼 비대칭으로 주면 대칭이 깨져 직접 적분해야 하므로 유형이 바뀜 (3) 기함수 항에 미정상수를 심어 적분값 조건으로 상수를 묻기 → 220-447 골조 ★2~3."
```

```yaml
- id: GN-CALC2-217-438
  page: 217
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑷ 대칭 구간의 삼각·지수 정적분. ⑶ 은 이어 붙은 두 적분, ⑷ 는 우·기함수가 섞인 지수식.
  category: '두 적분 합치기 → 항별 우·기함수 판정 → 기함수 소거 → $2\int_0^a$'
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "각 항을 우·기함수로 분류해 $x\\cos x$, $x\\sin^2x$, $x^3\\cos x$, $4^x-4^{-x}$ 를 소거하고 남은 우함수만 $2\\int_0^a$ 로 계산"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "⑶ 에서 구간이 맞닿은 두 적분($-2\\sim0$ 과 $0\\sim2$)을 $-2\\sim2$ 한 적분으로 합쳐야 대칭 논법이 작동함"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "우함수·기함수의 대칭성을 이용한 정적분(적분 구간 합치기 포함)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    217-e8 의 유제지만 소문항이 넷이고 ⑶ 이 한 겹 더 있다. ⑶ 은 두 적분을 먼저 붙여 대칭 구간을 만들어야
    우함수 논법을 쓸 수 있고, ⑷ 는 $3^x+3^{-x}$(우)와 $4^x-4^{-x}$(기)를 갈라내야 한다.
    통찰 2개(SYM d1 · EQV d1)·M_total 8 → 확인체크 ★2 출발에서 +1 → ★3.
    [분류 이슈] 원 규칙(확인체크 ★1 출발) 기준으로는 2단 차이.
  tier: star_3
  mechanism_primary: '맞닿은 두 적분을 대칭 구간 하나로 합침 → 항별 우·기함수 분류 → 기함수 소거 → $2\int_0^a$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ $\sqrt{2}$ ⑵ $1$ ⑶ $2\left(e^2-\dfrac{1}{e^2}\right)$ ⑷ $\dfrac{16}{3\ln 3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/217-438.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 구간의 $a$ 와 밑(3, 4 → 2, 5)을 바꿀 수 있다. 제약: 구간은 원점 대칭, ⑶ 은 두 적분의 구간이 맞닿아야 합쳐진다. ⑷ 는 우함수 쌍($a^x+a^{-x}$)과 기함수 쌍($b^x-b^{-x}$)의 부호를 유지해야 한 쪽만 남는다."
    creative: "(1) ⑷ 의 부호를 뒤집어 어느 쪽이 남는지 바꾸기(★3 유지) (2) ⑶ 의 두 적분 구간을 어긋나게 주면 겹치는 부분 처리까지 필요 → ★4 (3) 우함수 항에 미정상수를 심고 전체 적분값을 주면 I-BW 추가 ★4."
```

```yaml
- id: GN-CALC2-218-e9
  page: 218
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    $\int_{0}^{5\pi}|\cos x|\,dx$ 의 값.
  category: '$|\cos x|$ 의 주기 $\pi$ 파악 → 한 주기 적분 × 주기 수'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-PD
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "$\\cos x$ 의 주기는 $2\\pi$ 지만 절댓값을 씌우면 주기가 $\\pi$ 로 줄어듦을 발견해 구간 $[0,5\\pi]$ 를 다섯 주기로 셈"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "주기함수·절댓값 함수의 정적분(한 주기 반복)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    다섯 토막을 일일이 적분하는 대신 $|\cos x|$ 의 주기가 $\pi$ 임을 보면 $5\int_0^{\pi}|\cos x|dx$ 한 줄이다.
    주기가 문제에 적혀 있지 않고 절댓값 때문에 원래 주기의 절반으로 줄어든다는 점이 착안 지점(PD d1).
    필수 예제 ★2 · 통찰 1개 d1 · M_total 5(통찰이 있어 −1 미해당) → ★2.
  tier: star_2
  mechanism_primary: '$|\cos x|$ 주기 $\pi$ → $\int_0^{5\pi}=5\int_0^{\pi}|\cos x|dx=5\times2$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$10$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/218-e9.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상한의 주기 수(5 → 3, 7)와 삼각함수 종류($\\cos$ → $\\sin$)를 바꿀 수 있다. 제약: 상한이 $\\pi$ 의 정수배여야 답이 정수로 떨어진다. 정수배가 아니면 마지막 토막을 따로 적분해야 해 난도가 한 단계 오른다."
    creative: "(1) 상한을 $\\dfrac{9}{2}\\pi$ 처럼 반 주기로 끊어 자투리 토막을 남기기(★3) (2) $|\\sin 2x|$ 로 주기를 $\\pi/2$ 로 줄이기(★3 · 배각까지) (3) 「$\\int_0^{k\\pi}|\\cos x|dx=20$ 인 자연수 $k$」로 뒤집으면 I-BW d1 · ★2~3."
```

```yaml
- id: GN-CALC2-218-439
  page: 218
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $\int_{0}^{3\pi}|\sin x|\,dx$ 의 값.
  category: '$|\sin x|$ 의 주기 $\pi$ 파악 → 한 주기 적분 × 주기 수'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-PD
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "$|\\sin x|$ 의 주기가 $\\pi$ 임을 발견해 $[0,3\\pi]$ 를 세 주기로 환원"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "주기함수·절댓값 함수의 정적분(한 주기 반복)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    218-e9 의 유제. $|\sin x|$ 는 $[0,\pi]$ 에서 $\sin x$ 그대로라 한 주기 적분이 2 이고, 세 주기라 6 이다.
    절댓값 때문에 주기가 $\pi$ 로 줄어든다는 착안 1개(PD d1).
    확인체크 ★2 출발 · M_total 5 → ★2.
  tier: star_2
  mechanism_primary: '$|\sin x|$ 주기 $\pi$ → $3\int_0^{\pi}\sin x\,dx=3\times2$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/218-439.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상한의 주기 수(3 → 4, 6)를 바꿀 수 있다. 제약: 상한이 $\\pi$ 의 정수배여야 자투리가 없다. 하한을 0 이 아닌 $\\pi/2$ 로 옮기면 주기 길이 구간이 아니게 되어 토막 처리가 추가된다."
    creative: "(1) 하한을 $\\pi/2$ 로 옮겨 자투리 반 주기를 만들기(★3) (2) $|\\sin x|$ 대신 $\\sin^2x$ 로 바꾸면 반각 변형이 필요해 I-EQV 추가 ★3 (3) 상한을 미지수 $k\\pi$ 로 두고 적분값을 주기(★2~3)."
```

```yaml
- id: GN-CALC2-218-440
  page: 218
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $f(x)=f(x+2)$ 이고 $-1\le x\le 1$ 에서 $f(x)=e^x+e^{-x}$ 일 때 $\int_{-1}^{11}f(x)\,dx$.
  category: '주기 2 확인 → 적분 구간 길이 12 를 여섯 주기로 환원 → 기준 구간 적분 × 6'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-PD
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$f(x)=f(x+2)$ 를 주기 2 로 읽고 길이 12 인 적분 구간을 기준 구간 $[-1,1]$ 여섯 개로 환원"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "주기 조건으로 주어진 함수의 정적분(주기 환원)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    함수식이 기준 구간 $[-1,1]$ 에서만 주어지고 나머지는 주기 조건으로만 정의된다(Mₐ 2).
    $11-(-1)=12=6\times2$ 라는 환산이 풀이의 전부이며, 그 뒤 $\int_{-1}^{1}(e^x+e^{-x})dx$ 는 기본 공식이다.
    218-439 같은 직접 계산형과 달리 추상 조건을 기준 구간으로 옮기는 단계가 하나 더 있어(PD d2)
    확인체크 ★2 출발에서 +1 → ★3. [분류 이슈] 원 규칙 기준 2단 차이로 이슈 표에 기록.
  tier: star_3
  mechanism_primary: '주기 2 → $\int_{-1}^{11}=6\int_{-1}^{1}(e^x+e^{-x})dx$ → 기본 공식'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$12\left(e-\dfrac{1}{e}\right)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/218-440.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주기(2 → 4)와 상한(11 → 9, 15), 기준 구간의 함수식($e^x+e^{-x}$ → $\\cos\\pi x$)을 바꿀 수 있다. 제약: 적분 구간 길이가 주기의 정수배여야 자투리가 없고, 기준 구간은 주기와 길이가 같아야 한다($[-1,1]$ 길이 2 = 주기 2)."
    creative: "(1) 상한을 주기 정수배에서 어긋나게 해 자투리 토막을 남기기(★4) (2) 기준 구간 함수를 우함수로 두고 대칭까지 요구하면 I-SYM 추가 ★4 (3) 주기 조건을 $f(x+2)=-f(x)$ 로 바꾸면 두 주기마다 상쇄되어 I-SYM·I-PD 결합 ★4."
```

### 연습문제 STEP 1

```yaml
- id: GN-CALC2-219-441
  page: 219
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $f(x)$ 의 부정적분을 구해야 하는데 잘못하여 미분했더니 $\dfrac{2}{3\sqrt[3]{x}}$ 가 되었다.
    $f(8)=3$ 일 때 $f(x)$ 의 부정적분.
  category: '잘못 미분한 식을 $f''$ 로 읽기 → 적분해 $f$ 복원 → 한 번 더 적분'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「잘못하여 미분한 결과」라는 진술을 $f'(x)=\\dfrac{2}{3}x^{-1/3}$ 이라는 식으로 옮겨 적분 방향을 바로잡음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "잘못 미분한 함수로부터 원함수의 부정적분 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    주어진 식이 $f$ 가 아니라 $f'$ 라는 점을 먼저 옮겨야 한다(EQV d1). 한 번 적분해 $f(x)=x^{2/3}+C$ 를
    얻고 $f(8)=3$ 으로 $C$ 를 정한 뒤, 묻는 것이 $f$ 의 부정적분이므로 또 한 번 적분한다.
    적분을 두 번 하고 적분상수를 두 번 다루는 것이 함정(T-표기·T-단위)이다.
    STEP 1 출발점 ★2 · 통찰 1개 d1 → ★2 유지.
  tier: star_2
  mechanism_primary: '$f''(x)=\dfrac{2}{3}x^{-1/3}$ → 적분해 $f(x)=x^{2/3}+C$ → $f(8)=3$ 으로 $C$ → 다시 적분'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{3}{5}x\sqrt[3]{x^2}-x+C$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/219-441.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "미분 결과의 계수·지수($\\dfrac{2}{3}x^{-1/3}$ → $\\dfrac{3}{4}x^{-1/4}$)와 조건점($f(8)=3$ → $f(1)=2$)을 바꿀 수 있다. 제약: 두 번 적분해도 지수가 $-1$ 이 되지 않아야 하고, 조건점은 무리수 지수가 유리수로 떨어지는 값(완전세제곱수 등)으로 고른다."
    creative: "(1) 지수를 바꿔 세제곱근 대신 네제곱근으로(★2 유지) (2) 「부정적분을 구해야 하는데 잘못하여 두 번 미분」으로 만들면 적분이 세 번 → Mₛ 상승 ★3 (3) 지수함수·삼각함수 버전($f'(x)=e^{2x}$ 등)으로 갈아 끼우기(★2)."
```

```yaml
- id: GN-CALC2-219-442
  page: 219
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    점 $(0,\,2\pi)$ 를 지나는 곡선 $y=f(x)$ 위의 점에서의 접선의 기울기가 $\tan^2 x$ 일 때 $f(\pi)$.
  category: '접선의 기울기 = 도함수 → $\tan^2x=\sec^2x-1$ 변형 → 적분 → 지나는 점으로 상수 결정'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "$\\tan^2x$ 는 적분 공식이 없으므로 $\\sec^2x-1$ 로 바꿔 $\\tan x-x$ 로 적분 가능하게 만듦"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "접선의 기울기가 주어진 곡선의 함숫값(삼각항등식 변형)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    접선의 기울기가 $f'(x)$ 라는 해석은 표준이고, 실제 관문은 $\tan^2x$ 를 그대로 적분할 수 없다는 점이다.
    $\sec^2x-1$ 로 바꾸면 $f(x)=\tan x-x+C$ 이고 지나는 점으로 $C=2\pi$ 가 정해진다.
    변형 착안 1개(EQV d1)·M_total 5 → STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: '$f''(x)=\tan^2x=\sec^2x-1$ → $f(x)=\tan x-x+C$ → $f(0)=2\pi$ 로 $C$ → $f(\pi)$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/219-442.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지나는 점의 $y$ 좌표($2\\pi$ → $1$, $-\\pi$)와 묻는 점($\\pi$ → $\\pi/4$, $\\pi/3$)을 바꿀 수 있다. 제약: 묻는 점에서 $\\tan$ 값이 특수각이어야 답이 깔끔하고, $x=\\pi/2$ 를 넘지 않는 배치가 안전하다."
    creative: "(1) 기울기를 $\\cot^2x$ 로 바꿔 $\\csc^2x-1$ 변형 요구(★2 유지) (2) 기울기를 $\\tan^2x+\\sec x\\tan x$ 처럼 두 항으로 늘리기(★2~3) (3) 지나는 점 대신 $\\int_0^{\\pi/4}f(x)dx$ 값을 주면 적분이 한 겹 더 붙어 ★3."
```

```yaml
- id: GN-CALC2-219-443
  page: 219
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $\int_{\frac{\pi}{6}}^{\frac{\pi}{4}}\dfrac{1+5\sin^3 x}{\sin^2 x}\,dx=a\sqrt{2}+b\sqrt{3}-1$ 일 때 유리수 $a$, $b$ 에 대하여 $a+b$.
  category: '분자를 항별로 나눠 $\csc^2x+5\sin x$ → 적분 → 무리수 계수 비교'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "분수식을 $\\dfrac{1}{\\sin^2x}+\\dfrac{5\\sin^3x}{\\sin^2x}=\\csc^2x+5\\sin x$ 로 쪼개 두 항 모두 기본 적분 공식에 맞춤"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각함수 분수식을 항별로 나눈 정적분과 계수 비교"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    그대로는 적분이 안 되고 분자를 분모로 나눠 $\csc^2x+5\sin x$ 로 만드는 것이 유일한 관문이다(EQV d1).
    적분 결과 $-\cot x-5\cos x$ 에 특수각을 대입하면 $\sqrt{2}$ 항과 $\sqrt{3}$ 항이 갈라져 계수를 읽을 수 있다.
    STEP 1 ★2 · 통찰 1개 d1 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: '분자 항별 분리 → $-\cot x-5\cos x$ → 특수각 대입 후 $\sqrt{2}$·$\sqrt{3}$ 계수 비교 → $a+b$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/219-443.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자의 계수(5 → 3, 7)와 구간($\\pi/6\\sim\\pi/4$ → $\\pi/4\\sim\\pi/3$)을 바꿀 수 있다. 제약: 구간 양 끝이 특수각이어야 하고, 답 꼴 $a\\sqrt{2}+b\\sqrt{3}-1$ 의 무리수 종류가 구간 끝의 삼각비와 맞아야 한다. 하한이 0 이면 $\\cot$ 가 발산하므로 0 을 피한다."
    creative: "(1) 분모를 $\\cos^2x$ 로 바꿔 $\\sec^2x+5\\cos x$ 꼴로(★2 유지) (2) 분자에 $\\sin^2x$ 항을 더해 상수항까지 생기게(★2) (3) $a$, $b$ 를 따로 묻지 않고 $ab$ 나 $a-b$ 로 바꿔 계수 분리를 더 정확히 요구(★2~3)."
```

```yaml
- id: GN-CALC2-219-444
  page: 219
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $f(x)=e^x-ax$ 에 대하여 $\int_{0}^{1}f(x)\,dx=f(1)$ 을 만족시키는 상수 $a$.
  category: '양변을 각각 $a$ 의 식으로 계산 → 일차방정식 → $a$'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정적분과 함숫값이 같도록 하는 미정상수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    좌변은 기본 공식으로 $e-1-\dfrac{a}{2}$, 우변은 대입으로 $e-a$ 이고 두 식을 놓으면 $a$ 의 일차방정식이다.
    $e$ 가 양변에서 상쇄되어 계산이 한 줄로 끝난다. 착안 없이 정의대로 진행되는 절차형.
    STEP 1 ★2 · 통찰 0 · M_total 6(−1 조건 미해당) → ★2.
  tier: star_2
  mechanism_primary: '$\int_0^1(e^x-ax)dx=e-1-\dfrac{a}{2}$ 와 $f(1)=e-a$ 를 등치 → $a$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/219-444.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "$f$ 의 꼴($e^x-ax$ → $e^x-ax^2$, $2^x-ax$)과 비교 대상($f(1)$ → $f(0)$, $f'(1)$)을 바꿀 수 있다. 제약: $a$ 에 대한 방정식이 일차가 되도록 $a$ 를 일차항 계수로만 두고, 두 변의 초월수 항이 상쇄되어야 답이 유리수가 된다."
    creative: "(1) 비교 대상을 $f'(1)$ 로 바꾸기(★2 유지) (2) $f(x)=e^x-ax^2$ 로 두고 $\\int_0^1 f=f(1)$ 을 요구하면 계산 부담만 늘어 ★2 (3) 「$\\int_0^1 f(x)dx=f(k)$ 인 $k$ 가 존재」로 바꾸면 평균값 정리 결합 → I-XU d2 · ★4."
```

```yaml
- id: GN-CALC2-219-445
  page: 219
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $x\le 1$ 에서 $-2^x+2$, $x\ge 1$ 에서 $2^x-2$ 인 함수의 $0\sim 2$ 정적분.
  category: '$x=1$ 에서 구간 분할 → 각 구간 식으로 적분 → 합'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구간에 따라 다르게 정의된 지수함수의 정적분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분할점 $x=1$ 이 적분 구간 안에 있으므로 $[0,1]$ 과 $[1,2]$ 로 나눠 각각 적분한다.
    사실상 $|2^x-2|$ 와 같은 함수지만 부호가 이미 발문에 갈라져 있어 분할점을 찾는 단계가 없다.
    $\int 2^x dx=\dfrac{2^x}{\ln 2}$ 만 정확히 쓰면 되는 절차형.
    STEP 1 ★2 · 통찰 0 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: '$x=1$ 에서 분할 → $\int_0^1(-2^x+2)+\int_1^2(2^x-2)$ → 합'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{\ln 2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/219-445.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(2 → 3)과 상수항, 적분 구간($0\\sim2$ → $0\\sim3$)을 바꿀 수 있다. 제약: 분할점이 구간 내부에 있어야 하고, 두 식이 분할점에서 같은 값을 가져야 연속이 된다($-2^1+2=0=2^1-2$)."
    creative: "(1) 두 식을 분할점에서 어긋나게 해 불연속으로(★2 유지) (2) 발문을 $\\int_0^2|2^x-2|dx$ 로 바꾸면 분할점을 직접 찾아야 해 216-e7 골조 ★2 (3) 상한을 미지수 $k$ 로 두고 적분값을 주면 I-BW d2 · ★3."
```

```yaml
- id: GN-CALC2-219-446
  page: 219
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $\int_{2}^{8}\left|\dfrac{x-4}{x}\right|dx$ 의 값.
  category: '$x>0$ 이므로 부호는 $x-4$ 가 결정 → $x=4$ 분할 → $1-\dfrac{4}{x}$ 적분'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "적분 구간에서 $x>0$ 이므로 분수식의 부호가 분자 $x-4$ 만으로 정해진다고 보고 분할점을 $x=4$ 하나로 확정, 동시에 $\\dfrac{x-4}{x}=1-\\dfrac{4}{x}$ 로 쪼개 적분 가능하게 만듦"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "유리식 절댓값의 정적분(부호 변화점 분할)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분모가 있어 부호 판정이 한 겹 더 있지만 구간이 $[2,8]$ 이라 $x>0$ 이 보장되고, 결국 $x=4$ 한 점에서 갈린다.
    피적분함수를 $1-\dfrac{4}{x}$ 로 쪼개는 것까지가 한 착안(EQV d1)이고 나머지는 $\ln$ 계산이다.
    두 토막의 $\ln$ 이 상쇄되어 답이 정수로 떨어지는 배치.
    STEP 1 ★2 · 통찰 1개 d1 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: '$x>0$ → 부호는 $x-4$ → $x=4$ 분할 → 각 토막에서 $1-\dfrac{4}{x}$ 적분 후 부호 붙여 합'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/219-446.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자의 상수(4 → 3, 6)와 구간($2\\sim8$ → $1\\sim9$)을 바꿀 수 있다. 제약: 구간 전체에서 $x>0$ 이어야 부호 판정이 간단해지고, 분할점이 구간 내부에 있어야 한다. 구간 양 끝과 분할점이 $\\ln$ 이 상쇄되는 비($2:4:8$)로 놓이면 답이 정수가 된다."
    creative: "(1) 분자를 $x-a$ 로 두고 적분값이 주어지게 해 $a$ 를 묻기 → I-BW d2 · ★3 (2) 구간을 음수까지 넓히면 분모의 부호까지 갈려 분할이 셋 → ★3 (3) $\\left|\\dfrac{x-4}{x^2}\\right|$ 로 바꾸면 $\\ln$ 대신 $1/x$ 항이 남음(★2)."
```

```yaml
- id: GN-CALC2-220-447
  page: 220
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $\int_{-\frac{\pi}{4}}^{\frac{\pi}{4}}(x^3+\sin x+a)\cos x\,dx=1$ 일 때 상수 $a$.
  category: '전개 → 기함수 항 소거 → 남은 $a\cos x$ 만 $2a\int_0^{\pi/4}\cos x$ → 방정식'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "괄호를 $\\cos x$ 에 분배한 뒤 $x^3\\cos x$·$\\sin x\\cos x$ 가 기함수임을 보고 대칭 구간에서 지움 — 이 단원 도구로는 두 항을 직접 적분할 수 없어 대칭 판정이 필수"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "기함수 소거를 이용해 미정상수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $x^3\cos x$ 는 부분적분이 필요해 이 시점 도구로는 손댈 수 없고, 대칭 구간의 기함수라는 판정만이 길을 연다(SYM d2).
    $\sin x\cos x$ 도 같은 이유로 지워지고 $2a\int_0^{\pi/4}\cos x\,dx=a\sqrt{2}=1$ 만 남는다.
    통찰은 1개지만 depth 2 이고, 규칙상 +1 조건(통찰 2개 이상 또는 depth 3)에는 못 미친다.
    STEP 1 ★2 출발 → ★2 유지.
  tier: star_2
  mechanism_primary: '$\cos x$ 분배 → 기함수 두 항 소거 → $2a\int_0^{\pi/4}\cos x\,dx=1$ → $a$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{\sqrt{2}}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/220-447.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간의 $a$ 값($\\pi/4$ → $\\pi/3$, $\\pi/6$), 기함수 항의 차수($x^3$ → $x^5$), 우변 값을 바꿀 수 있다. 제약: 구간은 원점 대칭, 소거될 항은 반드시 기함수(홀수 차수 × $\\cos$ 또는 $\\sin\\times\\cos$)여야 하고, 남는 항의 적분이 특수각 값으로 떨어져야 한다."
    creative: "(1) 곱하는 함수를 $\\sin x$ 로 바꿔 어느 항이 남는지 뒤집기(★2~3) (2) 미정상수를 기함수 항 쪽에 심으면 소거되어 방정식이 성립하지 않는 함정 문제가 됨 → I-VF d2 · ★3 (3) 구간을 비대칭으로 주면 대칭 논법이 막혀 유형 자체가 바뀜."
```

```yaml
- id: GN-CALC2-220-448
  page: 220
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $f\left(x+\dfrac{\pi}{2}\right)=f(x)$ 이고 $-\dfrac{\pi}{4}\le x\le\dfrac{\pi}{4}$ 에서 $f(x)=\sec^2 x$ 일 때
    $\int_{-\frac{\pi}{4}}^{\frac{9}{4}\pi}f(x)\,dx$.
  category: '주기 $\dfrac{\pi}{2}$ 확인 → 적분 구간 길이 $\dfrac{5}{2}\pi$ 를 다섯 주기로 환원 → 기준 구간 적분 × 5'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-PD
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$f\\left(x+\\dfrac{\\pi}{2}\\right)=f(x)$ 를 주기 $\\dfrac{\\pi}{2}$ 로 읽고 구간 길이 $\\dfrac{9}{4}\\pi-\\left(-\\dfrac{\\pi}{4}\\right)=\\dfrac{5}{2}\\pi$ 가 주기의 5배임을 계산해 기준 구간 적분 다섯 개로 환원"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "주기 조건으로 주어진 함수의 정적분(주기 환원)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    함수식이 기준 구간에서만 주어지고 나머지는 주기 조건으로만 정의된다(Mₐ 2). 풀이의 전부는
    구간 길이 $\dfrac{5}{2}\pi$ 가 주기 $\dfrac{\pi}{2}$ 의 5배라는 환산이고, 그 뒤 $\int\sec^2x\,dx=\tan x$ 는 기본 공식이다.
    218-440 과 같은 골조이므로 같은 기준으로 판정했다 — 추상 조건을 기준 구간으로 옮기는 단계(PD d2)가
    직접 계산형보다 한 겹 위라 STEP 1 출발점 ★2 에서 +1 → ★3. [분류 이슈] 구역 신호와 1단 차이로 기록.
  tier: star_3
  mechanism_primary: '주기 $\dfrac{\pi}{2}$ → 구간 길이 $\dfrac{5}{2}\pi$ = 5주기 → $5\int_{-\pi/4}^{\pi/4}\sec^2x\,dx=5\times2$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$10$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/220-448.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주기($\\pi/2$ → $\\pi$), 상한($\\dfrac{9}{4}\\pi$ → $\\dfrac{13}{4}\\pi$), 기준 구간 함수($\\sec^2x$ → $\\cos 2x$)를 바꿀 수 있다. 제약: 기준 구간 길이가 주기와 같아야 하고, 적분 구간 길이가 주기의 정수배여야 자투리가 없다. $\\sec^2x$ 는 기준 구간 끝에서 발산하지 않아야 하므로 $\\pm\\pi/4$ 를 넘기지 않는다."
    creative: "(1) 상한을 주기 정수배에서 어긋나게 해 자투리 반 주기를 남기기(★4) (2) 기준 구간을 $[0,\\pi/2]$ 로 옮기고 적분 구간 하한도 옮기기(★3 유지) (3) 주기 조건을 $f(x+\\pi/2)=2f(x)$ 로 바꾸면 등비 구조가 생겨 I-XU(급수) 결합 ★4."
```

### 연습문제 STEP 2

```yaml
- id: GN-CALC2-220-449
  page: 220
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["수능 기출"]
  category_type: "연습문제"
  summary: |
    $x>0$ 에서 $f'(x)=2-\dfrac{3}{x^2}$, $f(1)=5$ 이고, $x<0$ 에서 미분가능한 $g$ 가
    ㈎ $g'(x)=f'(-x)$ ㈏ $f(2)+g(-2)=9$ 를 만족시킬 때 $g(-3)$. 5지선다.
  category: '$f$ 복원 → $f''(-x)$ 를 $x$ 의 식으로 바꿔 $g$ 복원 → 조건 ㈏ 로 적분상수 결정'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "조건 ㈎ 의 $g'(x)=f'(-x)$ 에 $-x$ 를 실제로 대입해 $2-\\dfrac{3}{x^2}$ 라는 명시적 도함수식으로 바꿔야 $x<0$ 에서 적분이 가능해짐"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "도함수 조건으로 정의된 두 함수의 적분상수 결정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $f$ 는 적분과 $f(1)=5$ 로 바로 정해진다. 관문은 ㈎ 를 그대로 두지 않고 $-x$ 를 대입해
    $g'(x)$ 를 $x$ 만의 식으로 옮기는 것이다(EQV d2). $(-x)^2=x^2$ 이라 결과적으로 $f'$ 와 같은 꼴이 되지만,
    정의역이 $x<0$ 이라 적분상수는 별개이고 ㈏ 가 그 상수를 정한다(T-범위·T-부호).
    STEP 2 출발점 ★3 · 수능 기출 +0(통찰 1개) → ★3.
  tier: star_3
  mechanism_primary: '$f$ 를 적분·$f(1)=5$ 로 확정 → $g''(x)=f''(-x)=2-\dfrac{3}{x^2}$ 적분 → ㈏ 로 $g$ 의 상수 결정 → $g(-3)$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/220-449.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "$f'$ 의 계수(2, 3), 조건점($f(1)=5$, $f(2)+g(-2)=9$), 묻는 점($g(-3)$)을 바꿀 수 있다. 제약: $f'$ 가 $x^2$ 처럼 짝수 꼴이어야 $f'(-x)$ 가 같은 식이 되고, 조건점은 정의역 쪽($f$ 는 양수, $g$ 는 음수)에서 잡아야 한다. 선택지는 정수로 떨어지게 고른다."
    creative: "(1) $f'$ 에 홀수 차 항을 넣어 $f'(-x)$ 에서 부호가 뒤집히게 하면 T-부호 함정이 진짜로 작동 → ★4 (2) 조건 ㈎ 를 $g'(x)=-f'(-x)$ 로 바꾸면 $g$ 가 $f$ 의 기함수 짝이 되어 I-SYM d2 결합 ★4 (3) ㈏ 를 $\\int_{-2}^{-1}g=k$ 로 바꾸면 적분이 한 겹 더 ★4."
```

```yaml
- id: GN-CALC2-220-450
  page: 220
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    미분가능한 $f$, $g$ 에 대하여 $\dfrac{d}{dx}\{f(x)+g(x)\}=e^x$, $\dfrac{d}{dx}\{f(x)-g(x)\}=e^{-2x}$ 이고
    $f(0)=g(0)=0$ 일 때 $\dfrac{g(\ln 2)}{f(\ln 2)}$.
  category: '$f+g$·$f-g$ 를 각각 한 덩어리로 적분 → $x=\ln 2$ 에서 합·차 값 → 비 계산'
  M: {s: 2, k: 2, a: 3, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 도함수 조건을 $f$, $g$ 각각이 아니라 $f+g$ 와 $f-g$ 라는 두 덩어리로 묶어 적분하고 $f(0)=g(0)=0$ 으로 두 적분상수를 한꺼번에 결정"
    - step: 2
      type: I-SC
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "$f$, $g$ 를 명시적으로 풀어내는 갈래 대신 $x=\\ln 2$ 에서 합과 차의 값만 구해 비를 계산하는 갈래를 선택"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "두 함수의 합·차의 도함수가 주어진 경우의 함숫값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    합과 차를 각각 하나의 함수로 보는 시선(CON d1)과, 개별 함수를 복원하지 않고 $\ln 2$ 에서의
    합·차 값만으로 비를 구하는 갈래 선택(SC d1)이 핵심이다. 통찰은 2개지만 발문이 이미
    $f+g$, $f-g$ 를 묶어 제시해 착안 난도가 낮으므로 +1 하지 않았다.
    STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: '$f+g=e^x-1$, $f-g=\dfrac{1-e^{-2x}}{2}$ → $x=\ln 2$ 대입 → 합·차에서 $g/f$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{5}{11}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/220-450.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 도함수($e^x$, $e^{-2x}$ → $2^x$, $e^{3x}$)와 대입점($\\ln 2$ → $\\ln 3$)을 바꿀 수 있다. 제약: 대입점에서 두 지수값이 유리수가 되어야 비가 유리수로 떨어지고($e^{\\ln 2}=2$), 초기조건 $f(0)=g(0)=0$ 은 적분상수를 확정하기 위해 유지한다."
    creative: "(1) $f(0)$, $g(0)$ 을 0 이 아닌 값으로 주기(★3 유지) (2) $\\dfrac{d}{dx}\\{f\\cdot g\\}$ 조건으로 바꾸면 곱의 미분법 역산이 필요해 ★4 (3) $f(\\ln 2)+g(\\ln 2)$ 대신 $\\int_0^{\\ln 2}f$ 를 물으면 적분이 한 겹 더 붙어 ★4."
```

```yaml
- id: GN-CALC2-220-451
  page: 220
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $f(x)=\int\cos^2\dfrac{x}{2}\,dx$ 이고 $f(0)=\pi$ 일 때 $f(\pi)$.
  category: '반각공식으로 차수 낮추기 → 적분 → $f(0)$ 으로 상수 결정 → 대입'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$\\cos^2\\dfrac{x}{2}$ 는 그대로 적분할 수 없으므로 반각공식 $\\dfrac{1+\\cos x}{2}$ 로 차수를 낮춰 기본 공식에 맞춤"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "반각공식으로 차수를 낮춘 삼각함수의 부정적분"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    반각공식 한 번이 풀이의 전부다. $\dfrac{1+\cos x}{2}$ 로 바꾸면 $f(x)=\dfrac{x}{2}+\dfrac{\sin x}{2}+C$ 이고
    $f(0)=\pi$ 에서 $C=\pi$, $f(\pi)=\dfrac{\pi}{2}+\pi$ 로 끝난다.
    통찰 1개(EQV d2)이고 −1 조건(통찰 0)에 해당하지 않아 STEP 2 출발점 ★3 을 유지했다.
    [분류 이슈] 다만 M_total 5 로 이 구역에서 가장 가볍고 실제 체감은 ★2 에 가깝다.
  tier: star_3
  mechanism_primary: '$\cos^2\dfrac{x}{2}=\dfrac{1+\cos x}{2}$ → $\dfrac{x}{2}+\dfrac{\sin x}{2}+C$ → $f(0)=\pi$ 로 $C$ → $f(\pi)$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{3}{2}\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/220-451.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각의 계수($x/2$ → $x$, $2x$), 초기조건 $f(0)$, 묻는 점($\\pi$ → $2\\pi$, $\\pi/2$)을 바꿀 수 있다. 제약: 반각 후 남는 $\\sin$ 항이 묻는 점에서 특수각 값이어야 답이 깔끔하다. $\\cos^2 kx$ 는 반각 후 $\\dfrac{1+\\cos 2kx}{2}$ 가 되므로 계수 처리에 주의."
    creative: "(1) $\\sin^2\\dfrac{x}{2}$ 로 바꿔 부호를 뒤집기(★3 유지) (2) $\\cos^4\\dfrac{x}{2}$ 로 올리면 반각을 두 번 써야 해 ★4 (3) $f(\\pi)-f(0)$ 을 정적분으로 묻고 구간을 대칭으로 주면 I-SYM 결합 ★3."
```

```yaml
- id: GN-CALC2-221-452
  page: 221
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    자연수 $n$ 에 대하여 $a_n=\ln 3\times\int_{0}^{n}3^x\,dx$ 일 때 급수 $\sum_{n=1}^{\infty}\dfrac{1}{1+a_n}$ 의 합.
  category: '정적분으로 일반항 $a_n=3^n-1$ 계산 → $1+a_n=3^n$ → 무한등비급수'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "정적분으로 얻은 일반항을 수열·급수 단원의 도구로 넘겨 $\\sum\\dfrac{1}{3^n}$ 을 무한등비급수로 처리 — 두 단원의 도구가 모두 있어야 풀이가 끊기지 않음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "정적분으로 정의된 수열의 급수(무한등비급수)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    적분 자체는 $\int_0^n 3^x dx=\dfrac{3^n-1}{\ln 3}$ 한 줄이고 앞의 $\ln 3$ 이 분모를 지워 $a_n=3^n-1$ 이 된다.
    핵심은 $1+a_n$ 이 정확히 $3^n$ 이 되도록 설계됐다는 점을 보고 급수로 넘기는 것이다(XU d2).
    정적분과 무한등비급수가 모두 필요한 단원 결합형.
    STEP 2 출발점 ★3 · 통찰 1개 d2 → ★3.
  tier: star_3
  mechanism_primary: '$a_n=\ln 3\times\dfrac{3^n-1}{\ln 3}=3^n-1$ → $\dfrac{1}{1+a_n}=\left(\dfrac{1}{3}\right)^n$ → 무한등비급수 합'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/221-452.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(3 → 2, 5)과 앞에 곱한 상수($\\ln 3$ → $\\ln 2$), 급수의 분모 꼴($1+a_n$)을 바꿀 수 있다. 제약: 곱한 상수가 적분에서 나오는 $\\ln$ 을 정확히 지워야 $a_n$ 이 깔끔한 지수식이 되고, $1+a_n$ 이 등비수열이 되도록 상수항을 맞춰야 한다. 공비는 $|r|<1$ 이어야 수렴한다."
    creative: "(1) 밑을 2 로 바꿔 합이 1 이 되게(★3 유지) (2) 급수를 $\\sum\\dfrac{1}{a_na_{n+1}}$ 로 바꾸면 부분분수 분해가 추가돼 ★4 (3) $a_n$ 을 $\\int_0^n x e^x dx$ 류로 바꾸면 부분적분이 필요해 단원 밖(★4~5)."
```

```yaml
- id: GN-CALC2-221-453
  page: 221
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $\int_{0}^{2\pi}\left|\sin\dfrac{x}{2}\cos\dfrac{x}{2}\right|dx$ 의 값.
  category: '배각공식으로 $\dfrac{1}{2}|\sin x|$ 로 축약 → 주기 $\pi$ 로 두 토막 → 계산'
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "$\\sin\\dfrac{x}{2}\\cos\\dfrac{x}{2}=\\dfrac{1}{2}\\sin x$ 로 배각공식을 거꾸로 써서 곱을 단항으로 축약"
    - step: 2
      type: I-PD
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "$|\\sin x|$ 의 주기가 $\\pi$ 임을 보고 $[0,2\\pi]$ 를 두 주기로 환원"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "배각공식 변형 후 절댓값 삼각함수의 주기 정적분"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    곱 꼴 그대로는 절댓값 부호 변화점을 잡기 번거롭지만 $\dfrac{1}{2}\sin x$ 로 축약하면(EQV d1)
    218-e9 와 같은 주기 문제가 된다(PD d1). 통찰이 2개지만 둘 다 이 단원에서 직전에 배운 표준 도구라
    +1 하지 않고 STEP 2 출발점 ★3 을 유지했다.
  tier: star_3
  mechanism_primary: '$\left|\sin\dfrac{x}{2}\cos\dfrac{x}{2}\right|=\dfrac{1}{2}|\sin x|$ → 주기 $\pi$ 두 주기 → $\dfrac{1}{2}\times2\times2$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/221-453.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각의 계수($x/2$ → $x$, $2x$)와 적분 구간($0\\sim2\\pi$ → $0\\sim3\\pi$)을 바꿀 수 있다. 제약: 축약 후 주기가 구간 길이를 정수로 나눠야 자투리가 없고, 각의 계수를 바꾸면 주기가 함께 바뀌므로 구간도 같이 조정해야 한다."
    creative: "(1) $|\\cos^2 x-\\sin^2 x|=|\\cos 2x|$ 버전으로 바꾸기(★3 유지) (2) 구간 상한을 주기 정수배에서 어긋나게 해 자투리를 남기기(★4) (3) 절댓값을 벗긴 $\\sin\\dfrac{x}{2}\\cos\\dfrac{x}{2}$ 로 두면 대칭 소거로 0 이 되어 I-SYM d1 · ★2."
```

```yaml
- id: GN-CALC2-221-454
  page: 221
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $[-2,\,2]$ 에서 $f(x)=\dfrac{1}{e^{|x|}}$ 이고 모든 실수 $x$ 에 대하여 $f(x+4)=f(x)$ 일 때 $\int_{0}^{4}f(x)\,dx$.
  category: '주기 4 → 한 주기 길이 적분은 시작점 무관 → 기준 구간 $[-2,2]$ 로 옮김 → 우함수 대칭'
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-PD
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "주기가 4 이고 적분 구간 $[0,4]$ 의 길이도 4 이므로 한 주기 길이의 적분은 시작점과 무관하다는 성질로 함수식이 주어진 기준 구간 $[-2,2]$ 로 옮김"
    - step: 2
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "$e^{-|x|}$ 가 우함수임을 보고 $\\int_{-2}^{2}=2\\int_{0}^{2}e^{-x}dx$ 로 계산 단축"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "주기함수의 한 주기 정적분(구간 이동 · 우함수 대칭)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    묻는 구간 $[0,4]$ 에는 $f$ 의 식이 직접 주어져 있지 않다. 한 주기 길이의 적분이 시작점과 무관하다는
    주기함수 성질로 $[-2,2]$ 로 옮기는 것이 관문이고(PD d2), 그 뒤 절댓값 지수함수의 우함수 대칭으로
    계산을 반으로 줄인다(SYM d1). 통찰 2개지만 둘 다 이 단원 필수 예제(e8·e9)에서 다룬 표준 골조라
    +1 하지 않고 STEP 2 출발점 ★3 을 유지했다.
  tier: star_3
  mechanism_primary: '주기 4 → $\int_0^4 f=\int_{-2}^{2}f$ → 우함수 → $2\int_0^2 e^{-x}dx$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$2\left(1-\dfrac{1}{e^2}\right)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/221-454.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주기(4 → 2, 6), 기준 구간의 함수식($e^{-|x|}$ → $\\cos\\dfrac{\\pi x}{2}$, $2^{-|x|}$), 적분 구간($0\\sim4$ → $1\\sim5$)을 바꿀 수 있다. 제약: 기준 구간 길이가 주기와 같아야 하고, 적분 구간 길이도 주기와 같아야 구간 이동만으로 끝난다. 기준 구간 함수는 양 끝에서 값이 같아야 주기 연장이 모순되지 않는다."
    creative: "(1) 적분 구간을 $[1,5]$ 로 옮겨도 답이 같음을 묻기(★3 유지) (2) 구간 길이를 주기의 1.5배로 주면 자투리 처리까지 필요해 ★4 (3) $f$ 를 기함수 성질 $f(-x)=-f(x)$ 와 함께 주면 한 주기 적분이 0 이 되는 구조 → I-SYM d2 · ★4."
```

### 연습문제 실력 UP

```yaml
- id: GN-CALC2-221-455
  page: 221
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $-\dfrac{\pi}{2}<x<\dfrac{\pi}{2}$ 에서 $f(x)=-1+\sin x-\sin^2 x+\sin^3 x-\cdots$ 의 한 부정적분을 $F$ 라 할 때
    $F(0)=1$ 이면 $F\left(\dfrac{\pi}{3}\right)$.
  category: '무한등비급수 합으로 $f$ 를 닫힌 식으로 → 유리화해 적분 가능한 꼴 → 적분·상수 결정'
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "첫항 $-1$, 공비 $-\\sin x$ 인 무한등비급수로 읽고 $|{-\\sin x}|<1$(주어진 범위에서 성립)을 확인해 $f(x)=\\dfrac{-1}{1+\\sin x}$ 라는 닫힌 식으로 바꿈 — 급수 단원 도구가 없으면 적분을 시작할 수 없음"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$\\dfrac{-1}{1+\\sin x}$ 는 적분 공식이 없으므로 분모·분자에 $1-\\sin x$ 를 곱해 $\\dfrac{-(1-\\sin x)}{\\cos^2x}=-\\sec^2x+\\sec x\\tan x$ 로 바꿈"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "무한등비급수로 주어진 함수의 부정적분(유리화 후 적분)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    관문이 둘이고 어느 하나만 빠져도 풀이가 멈춘다. 먼저 점 세 개짜리 식을 무한등비급수로 읽어야 하고
    (XU d2 · 범위 조건이 수렴조건 $|\sin x|<1$ 을 보장한다는 점도 확인해야 한다),
    그다음 $\dfrac{1}{1+\sin x}$ 를 켤레 유리화로 $\sec^2x$·$\sec x\tan x$ 조합으로 바꿔야 적분 공식에 닿는다(EQV d2).
    실력 UP 출발점 ★4 · 통찰 2개 d2 → ★4(★5 는 통찰 3개 이상 요건 미충족).
  tier: star_4
  mechanism_primary: '무한등비급수 합 $f(x)=\dfrac{-1}{1+\sin x}$ → 유리화 $-\sec^2x+\sec x\tan x$ → $F(x)=-\tan x+\sec x+C$ → $F(0)=1$ 로 $C=0$ → 대입'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$2-\sqrt{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/221-455.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫항의 부호·크기, 묻는 점($\\pi/3$ → $\\pi/4$, $\\pi/6$), 초기조건 $F(0)$ 을 바꿀 수 있다. 제약: 공비가 $\\pm\\sin x$ 여야 $|r|<1$ 이 주어진 범위에서 보장되고, 묻는 점은 $\\tan$·$\\sec$ 가 특수각 값인 곳이어야 한다. 범위는 $\\cos x>0$ 이 유지되도록 $(-\\pi/2,\\pi/2)$ 를 넘기지 않는다."
    creative: "(1) 공비를 $\\cos x$ 로 바꾸면 $\\dfrac{1}{1-\\cos x}$ 유리화가 되어 $\\csc$ 조합으로(★4 유지) (2) 급수를 $1+\\sin x+\\sin^2x+\\cdots$ 로 두면 유리화 없이 $\\dfrac{1}{1-\\sin x}$ 여도 같은 골조(★4) (3) $F$ 대신 정적분 $\\int_0^{\\pi/3}f$ 를 묻고 구간을 대칭으로 주면 I-SYM 까지 셋 → ★5 후보."
```

```yaml
- id: GN-CALC2-221-456
  page: 221
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    미분가능한 $f$ 가 ㈎ $f(2)=3$ ㈏ $f'$ 는 연속 ㈐ 곡선 $y=f(x)$ 는 원점에 대하여 대칭 을 만족시킬 때
    $\int_{-2}^{2}f'(x)(1+\sin x+\sin^3 x)\,dx$.
  category: '원점 대칭 → $f$ 기함수 → $f''$ 우함수 → 우×기 항 소거 → 남은 $\int f''$ 를 기본정리로'
  M: {s: 2, k: 1, a: 3, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-SYM
      depth: 3
      effective_depth: 3
      signal_ref: []
      description: "「원점 대칭」을 $f$ 가 기함수라는 뜻으로 옮기고, 거기서 도함수 $f'$ 는 우함수라는 한 단계를 더 끌어낸 뒤 우함수 × 기함수($\\sin x+\\sin^3x$)가 기함수임을 이용해 대칭 구간에서 그 항의 적분을 0 으로 지움"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "남은 $\\int_{-2}^{2}f'(x)dx$ 를 미적분의 기본정리로 $f(2)-f(-2)$ 로 바꾸고, 다시 기함수 성질 $f(-2)=-f(2)$ 를 써서 $2f(2)$ 로 정리"
  insight_count: 2
  depth_score: 2.50
  type_id: null
  type_hint: "대칭성을 이용한 정적분(기함수 소거 · 미적분의 기본정리)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    $f$ 의 식이 전혀 주어지지 않고 대칭성과 한 점의 값만 주어진다(Mₐ 3). $f$ 가 기함수이면 $f'$ 는 우함수라는
    판정이 이 문제의 전부이고, 이 단계는 학생이 스스로 미분해 확인해야 하므로 depth 3 으로 봤다(SYM d3).
    그 뒤 $f'\times(\sin x+\sin^3x)$ 는 우×기 = 기함수라 지워지고 $\int_{-2}^{2}f'=f(2)-f(-2)=2f(2)$ 만 남는다(EQV d2).
    계산은 거의 없고 판정만으로 끝나는 전형적 통찰형. 실력 UP ★4 · 통찰 2개(d3 포함) → ★4
    (★5 는 통찰 3개 이상 요건 미충족).
  tier: star_4
  mechanism_primary: '원점 대칭 → $f$ 기함수 → $f''$ 우함수 → $f''\times(\sin x+\sin^3x)$ 기함수라 소거 → $\int_{-2}^{2}f''=f(2)-f(-2)=2f(2)$'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/221-456.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "$f(2)$ 의 값(3 → 5), 적분 구간($-2\\sim2$ → $-3\\sim3$·조건점도 함께), 괄호 안 기함수 항($\\sin x+\\sin^3x$ → $x+x^3$, $\\tan x$)을 바꿀 수 있다. 제약: 구간은 원점 대칭이고 조건점이 상한과 일치해야 하며, 괄호 안은 상수항 1 과 기함수 항들로만 이뤄져야 소거 구조가 유지된다."
    creative: "(1) 대칭 조건을 $y$ 축 대칭으로 바꾸면 $f$ 우함수 → $f'$ 기함수가 되어 남는 항이 뒤집힘(★4 유지) (2) 괄호 안에 $\\cos x$ 같은 우함수 항을 섞으면 그 항은 지워지지 않아 부분적분이 필요 → 단원 밖 ★5 (3) $f(2)$ 대신 $\\int_0^2 f$ 를 주면 기본정리를 거꾸로 써야 해 I-BW 추가 ★5 후보."
```

## 표본 판정 요약 (31문)

- ★ 분포: ★1 0 · ★2 19 · ★3 10 · ★4 2 · ★5 0
- 통찰형 23 · 절차형 8 · premium 0
- 통찰 유형 분포(라벨 기준): I-EQV 15 · I-SYM 5 · I-PD 5 · I-XU 2 · I-CON 1 · I-SC 1 (I-BW · I-MI · I-VF · I-RT 0)
- type_hint 상위: 「구간별 정의·절댓값 함수의 정적분」 6 · 「주기함수의 정적분(주기 환원)」 6 · 「항별 변형으로 적분 가능한 꼴 만들기」 6 · 「정적분 값 조건으로 미정상수 구하기」 4 · 「도함수 조건에서 원함수 복원」 4
- 그림: 0문(이 범위에는 그림 문항이 없다)
- 구역별 ★ 중앙값: 필수·발전 예제 ★2 · 연습문제 STEP 1 ★2 · 연습문제 STEP 2 ★3 · 연습문제 실력 UP ★4

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CALC2-215-434 | 확인체크지만 통찰 2개(세제곱 차 인수분해 · 두 적분 통합·약분)로 ★3. 원 규칙(확인체크 ★1 출발) 기준이면 2단 차이 | ★2 / ★3 |
| GN-CALC2-217-438 | 확인체크지만 소문항 4개 + 구간 합치기까지 있어 ★3. 원 규칙 기준 2단 차이 | ★2 / ★3 |
| GN-CALC2-218-440 | 확인체크 + 통찰 1개(d2)인데 규칙상 +1 조건(통찰 2개 또는 depth 3)을 만족하지 않는데도 추상 주기 조건을 이유로 ★3 으로 올림 | ★2 / ★3 |
| GN-CALC2-220-448 | 218-440 과 같은 골조여서 같은 기준으로 ★3. STEP 1 구역 신호(★2)와 1단 차이 | ★2 / ★3 |
| GN-CALC2-220-451 | STEP 2 구역이라 ★3 을 유지했으나 반각공식 한 번이면 3줄이고 M_total 5 로 이 구역에서 가장 가벼움 | ★2 / ★3 |
| GN-CALC2-221-454 | 통찰 2개(주기 구간 이동 + 우함수 대칭)로 +1 하면 ★4 지만, 둘 다 같은 단원 필수 예제에서 다룬 표준 도구라 ★3 유지 | ★3 / ★4 |
| GN-CALC2-216-437 | 소문항 3개로 M_total 8(이 구역 최고 수준)인데 통찰 1개라 규칙상 ★2. 노동량만 보면 ★3 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: ① 「구간에 따라 다르게 정의된 함수의 정적분」과 ② 「절댓값 기호를 포함한 함수의 정적분」은 이 범위에서 각각 3문·3문으로 고르게 나오지만 난도 원천이 다르다(①은 분할점이 주어짐, ②는 분할점을 직접 구함). 합치면 ★ 판정이 흐려진다.
- **따로 세워야 할 유형**: 「주기함수의 정적분」도 직접 계산형(218-e9 · 218-439 · 221-453)과 주기 조건만 추상적으로 주어지는 환원형(218-440 · 220-448 · 221-454)으로 갈린다. 후자가 일관되게 한 단계 위였다.
- **통합해도 될 유형**: 「유리함수·무리함수를 항별로 나눈 정적분」 「지수·삼각함수의 정적분」 「삼각함수 분수식을 항별로 나눈 정적분」은 모두 *피적분함수를 항별로 쪼개 기본 공식에 맞추기* 하나로 묶을 수 있다(6문). 하위 구분은 함수 종류일 뿐 골조가 같다.
- **통합해도 될 유형**: 「정적분 값이 주어질 때 미정상수 구하기」(214-433 · 215-435 · 219-444 · 220-447)는 적분 후 일차방정식이라는 골조가 동일하다. 다만 220-447 은 대칭 소거가 선행하므로 ★ 산정에서 통찰 가산을 따로 둬야 한다.
- **단원 결합 슬롯**: 221-452(정적분 + 무한등비급수)와 221-455(무한등비급수 + 유리화 적분)는 I-XU 가 붙는 유일한 두 문항이다. 카탈로그에서는 「급수로 정의된 함수·수열의 적분」이라는 별도 상위 유형으로 두는 편이 ★4~5 슬롯 설계에 유리하다.
- **감쇠 후보**: 이 범위에서 I-EQV(항등식 변형)는 15회로 압도적이다. 카탈로그 확정 시 미적분Ⅱ 단원의 학습 자산화 상위 유형에 I-EQV 를 넣고 §2.9 감쇠(depth 3 → 2)를 적용할지 검토해야 한다.
