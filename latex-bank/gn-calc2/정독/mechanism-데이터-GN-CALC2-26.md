---
name: mechanism-데이터-GN-CALC2-26
description: 개념원리 미적분Ⅱ 26 여러 가지 함수의 부정적분(1/1 · 개념원리 익히기 3문 + 필수·발전 예제 9문) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 미적분Ⅱ · 전사본 latex-bank/gn-calc2
  section: 26 여러 가지 함수의 부정적분
  unit_code: GN-CALC2-26
  part: "1/1"
  extract_range: "208~211쪽 · 208-423~211-431"
  total_problems: 12
  unit_total: 12
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-calc2/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-calc2/items/<id>.tex
  image_source: latex-bank/gn-calc2/figures/ (crops.json)
---

# 개념원리 미적분Ⅱ · 26 여러 가지 함수의 부정적분 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 미적분Ⅱ 208~211쪽, 단원 26 전체 12문항(「개념원리 익히기」 3문 + 「필수·발전 예제」 구역의 필수 예제 3문·확인체크 6문)을 다룬다. 이 단원은 치환적분·부분적분을 배우기 **전** 단계라, 쓸 수 있는 도구가 `x^n`(n=-1 은 ln|x|) · `e^x` · `a^x`(÷ln a) · 여섯 가지 삼각함수의 기본 부정적분표 딱 하나뿐이다. 그래서 모든 문항의 골조가 동일하다 — **피적분함수를 적분표가 그대로 적용되는 꼴로 고쳐 쓰는 것**이 풀이의 전부이고, 갈리는 것은 그 변형이 무엇인가(지수 꼴 정리 / 전개 / 항별 나눗셈 / 인수분해 약분 / 유리화 / 삼각 항등식)와, 마지막에 적분상수 결정·함숫값 대입이 한 단계 더 붙는가이다. 벤더 난이도 신호는 구역(개념원리 익히기 → ★1 출발 · 필수·발전 예제 → ★2 출발)과 태그(「필수」·「확인체크」)뿐이고 level 값은 없다.

통찰 라벨은 한 기준으로 통일했다. **전개·항별 나눗셈처럼 보이는 대로 정리하면 끝나는 변형은 절차**로 두고, **인수분해가 되는 것을 먼저 알아봐야 분모가 사라지거나(유리화 포함) 곱할 켤레식을 스스로 만들어야 하는 변형만 I-EQV** 로 세었다. 이 선을 그으면 12문 중 7문이 통찰형(모두 I-EQV 1개)이고, 그 7문이 곧 이 단원에서 학생이 실제로 막히는 지점이다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(골조 한 줄) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 설정 변경)를 채웠다. 그림 문항은 없다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-CALC2-208-423
  page: 208
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ 분수식·무리식을 $x^n$ 꼴로 고쳐 부정적분을 구하는 기본 4문.
    ⑴ $\dfrac{4}{x^3}$ ⑵ $\dfrac{1}{x\sqrt{x}}$ ⑶ $\sqrt[3]{x}+\sqrt{x}$ ⑷ $\dfrac{x^3-x+2}{x^2}$.
  category: "분수식·무리식을 x^n 의 합으로 정리 → x^n 의 부정적분 공식(n=-1 만 ln|x|)"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수 y=x^n 의 부정적분 — 분수식·무리식을 지수 꼴로 정리"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    네 소문항 모두 피적분함수를 $x^n$ 의 합으로 고쳐 쓰면 공식 한 줄로 끝난다.
    새로 배우는 것은 지수가 음의 정수·유리수까지 확장된다는 점과, ⑷ 의 $-x/x^2=-x^{-1}$ 만
    $x^{n+1}/(n+1)$ 이 아니라 $\ln|x|$ 로 간다는 예외(T-표기 함정 1개)다.
    통찰 0 · M_total 5 · 개념원리 익히기 구역 → ★1.
  tier: star_1
  mechanism_primary: "피적분함수를 x^n 의 합으로 정리 → n≠-1 은 x^(n+1)/(n+1), n=-1 은 ln|x| → +C"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $-\dfrac{2}{x^2}+C$ ⑵ $-\dfrac{2}{\sqrt{x}}+C$ ⑶ $\dfrac{3}{4}x\sqrt[3]{x}+\dfrac{2}{3}x\sqrt{x}+C$ ⑷ $\dfrac{1}{2}x^2-\ln|x|-\dfrac{2}{x}+C$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/208-423.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자 상수(4 → 6, 12)와 지수(1/x^3 → 1/x^4, 1/x^2)·근호 차수(세제곱근 → 네제곱근)를 자유롭게 바꿀 수 있음. 제약: (가) 지수가 -1 이 되는 항을 적어도 하나 남겨야 ln|x| 예외가 살아 있음 (나) 유리수 지수는 n+1 로 나눈 뒤 계수가 간단한 분수로 떨어지게(-3/2, 1/3, 1/2 등) 고를 것 (다) 정적분이 아니므로 x>0 제한은 붙이지 말고 ln|x| 의 절댓값을 유지할 것."
    creative: "(1) ⑷ 를 분자 차수가 더 높은 (x^4-x+2)/x^2 로 올리면 항 수만 늘어 ★1 유지 (2) 분모를 x^2 대신 x^2+x 처럼 인수분해해야 약분되는 꼴로 바꾸면 I-EQV 1개가 생겨 ★2 (3) 부정적분을 직접 묻지 않고 F(x) 를 준 뒤 원래 함수를 되묻는 역방향 발문으로 바꾸면 미분 확인 한 단계가 붙어 ★2."
```

```yaml
- id: GN-CALC2-208-424
  page: 208
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ 지수함수의 부정적분 4문.
    ⑴ $2e^{x+3}$ ⑵ $5^{2x-1}$ ⑶ $e^{2x}-e^x+3$ ⑷ $2^{x+2}+3^{2x}$.
  category: "지수법칙으로 밑이 상수인 a^x 꼴로 정리 → a^x 의 부정적분 a^x/ln a (e^x 는 그대로)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수의 부정적분 — 밑을 a^x 꼴로 정리"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    치환적분을 배우기 전이라 $a^{mx+n}$ 을 그대로 적분할 수 없고, 지수법칙으로 $x$ 만 지수에 남기는
    정리가 항상 먼저다. ⑵ 는 $5^{2x-1}=\dfrac{25^x}{5}$, ⑶ 은 $e^{2x}=(e^2)^x$, ⑷ 는 $2^{x+2}=4\cdot 2^x$·$3^{2x}=9^x$.
    $\ln a$ 로 나누는 것을 빠뜨리는 T-표기 함정 1개. 통찰 0 이지만 밑 변환 한 단계가 상시 필요하고
    M_total 6 이라 익히기 출발점 ★1 에서 +1 → ★2.
  tier: star_2
  mechanism_primary: "a^(mx+n) 을 지수법칙으로 상수배 (a^m)^x 로 정리 → a^x 의 부정적분 a^x/ln a 적용 → +C"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $2e^{x+3}+C$ ⑵ $\dfrac{25^x}{5\ln 25}+C$ ⑶ $\dfrac{1}{2}e^{2x}-e^x+3x+C$ ⑷ $\dfrac{2^{x+2}}{\ln 2}+\dfrac{9^x}{\ln 9}+C$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/208-424.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(5 → 2, 3, 7)과 지수의 일차식 계수·상수(2x-1 → 3x+2)를 바꿀 수 있음. 제약: (가) 밑을 바꾸면 답의 분모 ln(a^m) 도 같이 바뀌므로 ln 9 = 2 ln 3 처럼 정리 형태를 답과 통일할 것 (나) e 가 섞인 항은 e^(kx)=(e^k)^x 로 두면 분모가 k 로 떨어져 가장 깔끔함 (다) 지수 계수를 음수로 두면 부호가 뒤집히므로(T-부호) ★ 체감이 살짝 올라감."
    creative: "(1) ⑵ 를 밑이 다른 두 항의 합 5^(2x-1)+2^(3x+1) 로 늘리면 항 수만 증가 ★2 유지 (2) (a^x+a^(-x)) 꼴을 넣어 a^(-x) 의 적분 부호를 묻게 하면 T-부호가 추가돼 ★2 상단 (3) 부정적분 결과가 주어진 형태와 같아지도록 밑 a 를 역으로 구하게 하면 I-BW 1개가 생겨 ★3."
```

```yaml
- id: GN-CALC2-208-425
  page: 208
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑸ 삼각함수의 부정적분 5문.
    ⑴ $2\cos x+5\sin x$ ⑵ $\sec^2 x-3\csc^2 x$ ⑶ $\sec x(2\tan x+\sec x)$
    ⑷ $\dfrac{\cos^3 x+2}{\cos^2 x}$ ⑸ $\dfrac{\cot x-\csc x}{\sin x}$.
  category: "전개·항별 나눗셈으로 sec^2 x · csc^2 x · sec x tan x · csc x cot x 꼴을 만든 뒤 기본 적분표 적용"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수의 부정적분 — 항등식으로 기본 적분표 꼴 만들기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    여섯 개 기본 부정적분을 역방향으로 외웠는지 묻는 드릴이다. ⑴⑵ 는 표 그대로, ⑶ 은 전개해
    $2\sec x\tan x+\sec^2 x$, ⑷ 는 항별로 나눠 $\cos x+2\sec^2 x$, ⑸ 는 분모를 나눠 $\csc x\cot x-\csc^2 x$.
    보이는 대로 나누면 끝나므로 통찰은 세지 않았다. 다만 $\csc$ 계열 두 개가 음의 부호를 달고 있어
    T-부호 · T-표기 함정 2개(M_total 7). 익히기 출발점 ★1 에서 소문항 5개·부호 함정으로 +1 → ★2.
  tier: star_2
  mechanism_primary: "전개·항별 나눗셈으로 여섯 기본꼴(sec^2, csc^2, sec tan, csc cot, sin, cos) 합으로 정리 → 적분표 역방향 적용 → 부호 확인"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $2\sin x-5\cos x+C$ ⑵ $\tan x+3\cot x+C$ ⑶ $2\sec x+\tan x+C$ ⑷ $\sin x+2\tan x+C$ ⑸ $-\csc x+\cot x+C$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/208-425.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수(2, 5, 3)와 ⑷ 의 분자 상수(2 → 3)를 자유롭게 바꿀 수 있음. 제약: (가) 분자·분모 조합이 항별 나눗셈만으로 기본 여섯 꼴의 합이 되어야 함 — 예를 들어 분모를 sin x cos x 로 두면 이 단원 도구로는 풀리지 않음 (나) cot·csc 항의 적분 부호가 음수이므로 계수 부호를 바꿀 때 답의 부호도 같이 확인 (다) 소문항 수는 늘려도 ★ 가 움직이지 않음."
    creative: "(1) ⑸ 의 분모를 cos x 로 바꿔 sec x tan x 계열로 옮기면 같은 골조 ★2 (2) 분자에 1 을 두고 1=sin^2 x+cos^2 x 로 쪼개야 하는 꼴(1/(sin^2 x cos^2 x))로 바꾸면 항등식을 스스로 불러와야 해 I-EQV 1개 ★3 (3) 결과를 미분해 원래 식이 되는지 확인하라는 검증 발문을 붙이면 단계는 늘지만 통찰은 안 늘어 ★2 유지."
```

### 필수·발전 예제

```yaml
- id: GN-CALC2-209-e1
  page: 209
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑶ 그대로는 적분할 수 없는 분수식을 인수분해·약분으로 $x^n$ 합으로 만든 뒤 적분하는 필수 예제.
    ⑴ $\dfrac{x-1}{\sqrt{x}+1}$ ⑵ $\dfrac{x-1}{\sqrt[3]{x^2}}$ ⑶ $\dfrac{(\sqrt{x}-1)^2}{x}$.
  category: "무리식 분모를 인수분해·약분으로 없애 x^n 합으로 동치 변형 → x^n 부정적분 공식"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "분자 x-1 을 (√x-1)(√x+1) 로 보아 분모와 약분 — 분모의 무리식을 없애야 비로소 적분 가능한 꼴이 됨"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "함수 y=x^n 의 부정적분 — 인수분해·유리화로 적분 가능한 꼴 만들기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑵⑶ 은 항별 나눗셈·전개로 바로 $x^n$ 합이 되지만, ⑴ 은 $x-1$ 을 $\sqrt{x}$ 에 대한 제곱의 차로
    보아 약분한다는 것을 먼저 알아봐야 한다(유리화로도 같은 결과). 이 한 단계가 이 예제의 교육 목표라
    I-EQV 1개(d1)로 세었다.
    변형 뒤는 모두 $x^n$ 공식 한 줄. 통찰 1 · M_total 6 → 필수 예제 구역 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "분자를 √x 또는 세제곱근에 대한 곱으로 인수분해해 분모와 약분 → x^n 합으로 정리 → 적분(n=-1 은 ln|x|)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $\dfrac{2}{3}x\sqrt{x}-x+C$ ⑵ $\dfrac{3}{4}x\sqrt[3]{x}-3\sqrt[3]{x}+C$ ⑶ $x-4\sqrt{x}+\ln|x|+C$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/209-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 분모 상수(√x+1 → √x+2, √x-3)와 분자(x-1 → x-4, x-9)를 짝지어 바꿀 수 있음. 제약: (가) 분자가 분모를 인수로 가져야 약분이 되므로 분자 상수는 분모 상수의 제곱이어야 함 (나) ⑵ 의 근호 차수를 바꾸면 지수가 유리수로 바뀌어 n+1 이 0 이 되지 않는지 확인 (다) ⑶ 처럼 전개 후 x^(-1) 항이 남으면 ln|x| 가 등장하므로 답 형태를 통일할 것."
    creative: "(1) ⑴ 을 (x-8)/(∛x-2) 로 올리면 세제곱 차 인수분해가 되어 같은 골조 · 착안 난도만 상승 ★3 (2) 분자가 분모의 배수가 아니게 두면 이 단원 도구로는 풀 수 없으므로 금지 (3) 약분 결과를 적분하지 말고 F(1) 값을 주어 적분상수를 결정하게 하면 227·231 유형과 합쳐져 ★2~3."
```

```yaml
- id: GN-CALC2-209-426
  page: 209
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑶ 전개·항별 나눗셈으로 $x^n$ 합을 만든 뒤 적분하는 확인 문항.
    ⑴ $\left(x+\dfrac{1}{x^2}\right)\left(x-\dfrac{1}{x^2}\right)$ ⑵ $\dfrac{x^3+3x^2-x+2}{x^2}$ ⑶ $\dfrac{(\sqrt[3]{x}+1)^3}{x}$.
  category: "곱셈 공식 전개·항별 나눗셈으로 x^n 합 정리 → x^n 부정적분 공식(n=-1 은 ln|x|)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수 y=x^n 의 부정적분 — 전개·항별 나눗셈으로 적분 가능한 꼴 만들기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    세 소문항 모두 보이는 대로 전개하거나 항별로 나누면 $x^n$ 합이 되므로 착안 단계가 없다(절차형).
    ⑴ 은 합차 공식으로 $x^2-x^{-4}$, ⑶ 은 $(\sqrt[3]{x}+1)^3$ 을 전개한 뒤 $x$ 로 나누면 네 항이 나와
    계산량만 늘어난다(Mₖ 2). ⑵⑶ 에 $x^{-1}$ 항이 남아 $\ln|x|$ 로 가는 T-표기 함정 1개.
    통찰 0 · M_total 6(−1 조건인 M_total ≤ 5 미해당) → 필수·발전 예제 구역 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "곱셈 공식으로 전개하거나 분모로 항별 나눗셈 → x^n 합으로 정리 → 적분(x^(-1) 항만 ln|x|)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{1}{3}x^3+\dfrac{1}{3x^3}+C$ ⑵ $\dfrac{1}{2}x^2+3x-\ln|x|-\dfrac{2}{x}+C$ ⑶ $x+\dfrac{9}{2}\sqrt[3]{x^2}+9\sqrt[3]{x}+\ln|x|+C$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/209-426.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 두 항 지수(x, 1/x^2 → x^2, 1/x^3), ⑵ 의 분자 계수(3, -1, 2)와 분모 차수, ⑶ 의 근호 차수를 바꿀 수 있음. 제약: (가) 전개 후 지수가 -1 이 되는 항이 생기는지에 따라 ln|x| 유무가 갈리므로 의도한 쪽으로 맞출 것 (나) ⑴ 은 합차 꼴을 유지해야 중간항이 사라져 답이 두 항으로 짧게 떨어짐 (다) ⑶ 의 전개 계수(3, 3, 1)가 바뀌면 답의 9/2, 9 도 함께 재계산해야 함."
    creative: "(1) ⑴ 을 (x+1/x^2)^2 로 바꾸면 중간항이 살아남아 세 항이 되고 ln|x| 가 등장 — ★2 유지 (2) ⑶ 의 분모를 x 대신 ∛x 로 두면 지수가 모두 양의 유리수가 되어 ln 이 사라짐 ★2 (3) 세 소문항 중 하나를 (x^3-1)/(x-1) 처럼 인수분해가 필요한 꼴로 바꾸면 I-EQV 1개가 붙어 ★3 쪽으로 이동."
```

```yaml
- id: GN-CALC2-209-427
  page: 209
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $f(x)=\displaystyle\int \dfrac{x-4}{\sqrt{x}-2}\,dx$ 이고 $f(1)=\dfrac{2}{3}$ 일 때 $f(9)$ 의 값.
  category: "분자 인수분해·약분으로 적분 가능한 꼴 정리 → 부정적분 → 초기조건으로 적분상수 결정 → 함숫값 대입"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x-4 를 (√x-2)(√x+2) 로 보아 분모와 약분 — 무리식 분모를 없애야 적분할 수 있는 꼴이 됨"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "부정적분으로 정의된 함수 — 적분상수 결정 후 함숫값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    앞 예제 ⑴ 과 같은 착안(제곱의 차로 보고 약분)을 쓰되 적분 뒤 한 단계가 더 붙는다.
    피적분함수가 $\sqrt{x}+2$ 로 정리되면 $\dfrac{2}{3}x\sqrt{x}+2x+C$, 여기에 $f(1)$ 을 대입해 $C$ 를 확정한
    다음 $f(9)$ 를 계산한다. 적분상수를 남겨 두고 값부터 구하려는 실수(T-범위/누락)가 흔하다.
    통찰 1(I-EQV d1) · M_total 7 → 확인체크 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "분자를 (√x-2)(√x+2) 로 인수분해해 약분 → √x+2 를 적분 → f(1) 로 C 결정 → f(9) 대입"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$34$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/209-427.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모 상수(√x-2 → √x-3)와 그에 맞춘 분자(x-4 → x-9), 초기조건 지점(x=1)과 묻는 지점(x=9)을 바꿀 수 있음. 제약: (가) 분자 상수는 분모 상수의 제곱이어야 약분됨 (나) 약분으로 사라지는 점(여기서는 x=4)은 묻는 지점으로 쓰지 말 것 (다) 묻는 지점은 x√x 가 정수로 떨어지는 제곱수(4, 9, 16)로 두면 답이 정수."
    creative: "(1) f(9) 대신 f(4)-f(1) 처럼 두 값의 차를 물으면 적분상수가 소거돼 초기조건이 불필요해지고 ★2 아래로 내려감 (2) f(1) 대신 f(4)=0 같은 조건을 주면 같은 골조 ★2 유지 (3) f(9) 값을 주고 거꾸로 분모 상수를 구하게 하면 I-BW 1개가 추가돼 ★3."
```

```yaml
- id: GN-CALC2-210-e2
  page: 210
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑶ 지수함수 식을 전개·인수분해로 $a^x$ 합으로 만든 뒤 적분하는 필수 예제.
    ⑴ $(3^x-1)^2$ ⑵ $\dfrac{e^{2x}-x^2}{e^x-x}$ ⑶ $\dfrac{9^x+1}{3^x}$.
  category: "전개·인수분해·항별 나눗셈으로 a^x 합 정리 → a^x 부정적분 a^x/ln a 적용"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "e^(2x)-x^2 을 (e^x)^2-x^2 즉 (e^x-x)(e^x+x) 로 보아 분모와 약분 — 지수식을 제곱의 차로 읽어야 분모가 사라짐"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "지수함수의 부정적분 — 전개·인수분해로 적분 가능한 꼴 만들기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 전개해 $9^x-2\cdot 3^x+1$, ⑶ 은 나누어 $3^x+3^{-x}$ 로 보이는 대로 정리된다.
    ⑵ 만 분자를 $(e^x)^2-x^2$ 로 읽어 합차 인수분해해야 분모가 약분되므로 I-EQV 1개(d1)를 세었다.
    변형 뒤는 모두 $a^x/\ln a$ 한 줄이고 $3^{-x}=(1/3)^x$ 의 적분 부호(T-부호)만 주의한다.
    통찰 1 · M_total 6 → 필수 예제 구역 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "전개 또는 (a^x)^2-b^2 합차 인수분해로 분모를 약분 → a^x 합으로 정리 → a^x/ln a 적용"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $\dfrac{9^x}{\ln 9}-\dfrac{2\times 3^x}{\ln 3}+x+C$ ⑵ $e^x+\dfrac{1}{2}x^2+C$ ⑶ $\dfrac{3^x}{\ln 3}-\dfrac{3^{-x}}{\ln 3}+C$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/210-e2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(3 → 2, 5)과 ⑴ 의 상수항(-1 → -2), ⑶ 의 분모(3^x → 9^x)를 바꿀 수 있음. 제약: (가) ⑵ 는 분자가 분모의 곱셈 공식 인수여야 약분되므로 e^x 와 x 의 짝을 유지할 것 (나) 밑을 바꾸면 답의 ln 9 = 2 ln 3 류 정리 형태도 함께 통일 (다) a^(-x) 항이 생기면 적분 부호가 음수임을 확인."
    creative: "(1) ⑵ 를 (e^(3x)-x^3)/(e^x-x) 로 올리면 세제곱 차 인수분해가 되어 착안 난도만 상승 ★3 (2) ⑴ 을 (3^x-1)^3 으로 올리면 항 수·계산량만 증가 ★2 유지 (3) ⑶ 을 (9^x+1)/(3^x+1) 로 바꾸면 인수분해가 안 되어 이 단원 도구로 풀리지 않으므로 금지 — 대신 (27^x+1)/(3^x+1) 이면 세제곱 합으로 풀려 ★3."
```

```yaml
- id: GN-CALC2-210-428
  page: 210
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑶ 지수함수 식을 정리해 적분하는 확인 문항.
    ⑴ $\dfrac{xe^x-2ex-1}{x}$ ⑵ $\dfrac{8^x+1}{2^x+1}$ ⑶ $(2^x+2^{-x})^2$.
  category: "항별 나눗셈·세제곱 합 인수분해·전개로 a^x 합 정리 → a^x 부정적분 a^x/ln a 적용"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "8^x+1 을 (2^x)^3+1 로 보아 세제곱 합 인수분해 후 2^x+1 을 약분 — 밑을 통일해 읽는 것이 착안점"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "지수함수의 부정적분 — 전개·인수분해로 적분 가능한 꼴 만들기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 항별로 나누면 $e^x-2e-\dfrac{1}{x}$ 로 상수 $2e$ 와 $\ln|x|$ 항이 드러나는 절차,
    ⑶ 은 전개해 $4^x+2+4^{-x}$ 인데 $4^{-x}=(1/4)^x$ 의 적분이 $-\dfrac{4^{-x}}{\ln 4}$ 로 부호가 뒤집힌다(T-부호).
    ⑵ 만 세제곱 합 인수분해 착안이 필요해 I-EQV 1개(d1). $2e$ 를 지수로 오해하는 T-표기까지 함정 2개.
    통찰 1 · M_total 7 → 확인체크 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "항별 나눗셈·전개, ⑵ 는 (2^x)^3+1 세제곱 합 인수분해로 약분 → a^x 합 정리 → a^x/ln a (a^(-x) 는 부호 반전)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $e^x-2ex-\ln|x|+C$ ⑵ $\dfrac{4^x}{\ln 4}-\dfrac{2^x}{\ln 2}+x+C$ ⑶ $\dfrac{4^x}{\ln 4}-\dfrac{4^{-x}}{\ln 4}+2x+C$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/210-428.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 상수 계수(2e → 3e), ⑵ 의 밑(2 → 3 이면 27^x+1 과 3^x+1), ⑶ 의 밑과 지수 부호를 바꿀 수 있음. 제약: (가) ⑵ 는 분자가 분모의 세제곱 합 인수여야 하므로 8=2^3 관계를 유지할 것 (나) ⑶ 은 전개 중간항이 상수 2 로 떨어져야 x 항이 깔끔하므로 (a^x+a^(-x)) 짝을 유지 (다) a^(-x) 항의 적분 부호를 매번 확인."
    creative: "(1) ⑵ 를 (8^x-1)/(2^x-1) 로 바꾸면 세제곱 차가 되어 같은 골조 ★2 (2) ⑶ 을 (2^x+2^(-x))(2^x-2^(-x)) 로 바꾸면 중간항이 사라져 계산이 줄고 ★2 하단 (3) ⑴ 에서 e 를 문자 a 로 두면 Mₐ 가 올라 ★3 쪽으로 이동하고 a>0 조건 명시가 필요."
```

```yaml
- id: GN-CALC2-210-429
  page: 210
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    미분가능한 $f(x)$ 에 대해 $f'(x)=2e^x(e^x-1)$, $f(0)=1$ 일 때 $f(1)$ 의 값.
  category: "도함수를 전개해 적분 가능한 꼴로 정리 → 부정적분 → 초기조건으로 적분상수 결정 → 함숫값 대입"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "도함수가 주어진 함수의 함숫값 — 적분 후 적분상수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $f'(x)$ 를 전개하면 $2e^{2x}-2e^x$ 이고, $e^{2x}=(e^2)^x$ 로 보면 적분이 $e^{2x}-2e^x+C$ 로 바로 떨어진다.
    전개가 보이는 대로여서 착안 단계는 없다(절차형). $f(0)=1$ 로 $C$ 를 확정한 뒤 $f(1)$ 을 계산하는
    두 단계가 더 붙고, 함수 기호로 주어져 Mₐ 가 2. 함정은 따로 없다.
    통찰 0 · M_total 6(−1 조건 미해당) → 확인체크 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "f'(x) 전개해 2e^(2x)-2e^x → 적분해 e^(2x)-2e^x+C → f(0)=1 로 C 결정 → f(1) 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$e^2-2e+2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/210-429.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 2 와 괄호 안 상수(e^x-1 → e^x-3), 초기조건 값 f(0)=1, 묻는 지점 x=1 을 바꿀 수 있음. 제약: (가) e^(2x) 의 적분이 1/2 배로 떨어지므로 앞 계수를 2 로 두면 답이 깔끔함 (나) 묻는 지점을 0 이나 1 로 두면 답이 e 의 저차식으로 떨어짐 (다) 초기조건 지점과 묻는 지점을 같게 두지 말 것."
    creative: "(1) f'(x) 를 3^x(3^x-1) 처럼 밑이 e 가 아닌 꼴로 바꾸면 ln 3 분모가 등장해 계산이 무거워지고 ★2 상단 (2) f(1)-f(0) 을 물으면 적분상수가 소거돼 ★1~2 (3) f(1) 값을 주고 f'(x) 안의 계수를 역으로 구하게 하면 I-BW 1개가 붙어 ★3."
```

```yaml
- id: GN-CALC2-211-e3
  page: 211
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑶ 삼각 항등식으로 기본 적분표 꼴을 만든 뒤 적분하는 필수 예제.
    ⑴ $\dfrac{1-\cos^2 x}{\cos^2 x}$ ⑵ $\tan x(\sec x+\cot x)$ ⑶ $\dfrac{\cos^2 x}{1+\sin x}$.
  category: "삼각 항등식·인수분해로 sec^2 x · sec x tan x · sin x · 상수 꼴 정리 → 기본 부정적분표"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "cos^2 x 를 1-sin^2 x 로 바꿔 (1+sin x)(1-sin x) 로 약분 — 분모를 없애려면 피타고라스 항등식을 먼저 떠올려야 함"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각함수의 부정적분 — 항등식으로 기본 적분표 꼴 만들기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 나누면 $\sec^2 x-1$, ⑵ 는 전개하면 $\sec x\tan x+1$ 로 보이는 대로 정리된다.
    ⑶ 만 분자를 $1-\sin^2 x$ 로 되돌려 $1-\sin x$ 로 약분하는 착안이 필요해 I-EQV 1개(d1)를 세었다.
    세 답 모두 $x$ 항이 남는다는 점(상수 1 의 적분)이 이 예제의 공통 포인트이며,
    $\tan x-x$ 에서 $-x$ 를 빠뜨리는 실수가 T-표기 함정 1개.
    통찰 1 · M_total 5 → 필수 예제 구역 출발점 ★2 유지(−1 은 통찰 0 일 때만 적용).
  tier: star_2
  mechanism_primary: "피타고라스 항등식으로 1-cos^2 x, 1-sin^2 x 를 바꿔 약분·전개 → sec^2 x · sec x tan x · sin x · 상수 합으로 정리 → 적분표"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $\tan x-x+C$ ⑵ $\sec x+x+C$ ⑶ $x+\cos x+C$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/211-e3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 소문항의 계수(1 → 2, 3)와 ⑶ 의 분모 부호(1+sin x → 1-sin x)를 바꿀 수 있음. 제약: (가) ⑶ 은 분자가 분모의 켤레 인수를 포함해야 약분되므로 cos^2 x 와 1±sin x 의 짝을 유지할 것 (나) 분모를 1+cos x 로 바꾸면 분자도 sin^2 x 로 함께 바꿔야 함 (다) 상수항 적분으로 생기는 x 항의 부호를 답과 맞출 것."
    creative: "(1) ⑶ 을 sin^2 x/(1+cos x) 로 바꾸면 같은 골조에 답만 x-sin x 로 이동 ★2 (2) 분모를 1+sin x 로 두고 분자를 1 로 바꾸면 켤레를 스스로 곱해야 해 착안 난도가 올라 ★3(230 ⑶ 과 같은 계열) (3) 정적분 구간을 주어 특수각 대입을 붙이면 231 유형이 되어 ★3."
```

```yaml
- id: GN-CALC2-211-430
  page: 211
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑶ 삼각함수 식을 정리해 적분하는 확인 문항.
    ⑴ $(\tan x+3)\cos x$ ⑵ $3\cot^2 x$ ⑶ $\dfrac{1}{1+\cos x}$.
  category: "전개·항등식·켤레 곱(유리화)으로 기본 적분표 꼴 정리 → 부정적분"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 3
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "1/(1+cos x) 의 분모에 켤레 1-cos x 를 스스로 곱해 (1-cos x)/sin^2 x 즉 csc^2 x - csc x cot x 로 변형 — 곱할 식을 문제가 주지 않음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "삼각함수의 부정적분 — 항등식으로 기본 적분표 꼴 만들기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 전개하면 $\sin x+3\cos x$, ⑵ 는 $\cot^2 x=\csc^2 x-1$ 로 바꾸면 끝나는 절차다.
    ⑶ 이 이 단원에서 가장 착안이 필요한 자리다 — 분모를 없앨 켤레식 $1-\cos x$ 를 학생이 스스로
    만들어 곱해야 하므로 I-EQV depth 2 로 두었다. 결과 $\csc^2 x-\csc x\cot x$ 의 두 적분이 모두
    음의 부호를 달고 있어 T-부호·T-표기 함정 2개.
    통찰 1(d2) · M_total 7 → 확인체크 출발점 ★2 유지(+1 조건인 통찰 2개·depth 3 미해당).
    ⑶ 만 떼어 단독 출제하면 체감은 ★3 쪽이다.
  tier: star_2
  mechanism_primary: "전개·항등식으로 정리, ⑶ 은 분모에 켤레 1-cos x 를 곱해 sin^2 x 로 바꿈 → csc^2 x · csc x cot x 꼴 → 적분표(부호 주의)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $-\cos x+3\sin x+C$ ⑵ $-3\cot x-3x+C$ ⑶ $-\cot x+\csc x+C$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/211-430.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 상수(3 → 2, 5), ⑵ 의 계수(3 → 4), ⑶ 의 분모 부호(1+cos x → 1-cos x 또는 1±sin x)를 바꿀 수 있음. 제약: (가) ⑶ 은 켤레를 곱했을 때 분모가 sin^2 x 또는 cos^2 x 로 떨어지는 1±cos x, 1±sin x 꼴만 사용할 것 (나) 부호를 바꾸면 답의 cot·csc 부호가 모두 뒤집힘 (다) cot·csc 의 적분 부호가 음수임을 매번 확인."
    creative: "(1) ⑶ 의 분모를 1-sin x 로 바꾸면 sec^2 x + sec x tan x 계열로 옮겨 가 같은 골조 ★2 (2) ⑶ 의 분자를 cos x 로 두면 켤레 곱 뒤 한 항이 더 생겨 계산이 늘고 ★3 (3) ⑵ 를 tan^2 x + cot^2 x 합으로 바꾸면 항등식을 두 번 써야 해 ★3."
```

```yaml
- id: GN-CALC2-211-431
  page: 211
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $-\dfrac{\pi}{2}<x<\dfrac{\pi}{2}$ 에서 $f(x)=\displaystyle\int \dfrac{1-\cos^3 x}{1-\sin^2 x}\,dx$ 이고 $f(0)=0$ 일 때
    $f\left(\dfrac{\pi}{3}\right)$ 의 값.
  category: "분모를 항등식으로 cos^2 x 로 바꿔 항별 분리 → 적분 → 초기조건으로 적분상수 결정 → 특수각 대입"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "분모 1-sin^2 x 를 cos^2 x 로 읽고 분자를 항별로 나눠 sec^2 x - cos x 를 얻음 — 변형의 실마리가 분모에 숨어 있어 먼저 알아봐야 함"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "부정적분으로 정의된 함수 — 적분상수 결정 후 함숫값 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    분모를 $\cos^2 x$ 로 바꾸고 항별로 나누면 $\sec^2 x-\cos x$ 가 되어 적분이 $\tan x-\sin x+C$ 로 떨어진다.
    변형의 실마리가 분자가 아니라 분모에 숨어 있어 착안이 한 겹 더 깊다(I-EQV d2).
    그 뒤 $f(0)=0$ 으로 $C$ 를 확정하고 특수각 $\dfrac{\pi}{3}$ 을 대입하는 두 단계가 더 붙으며,
    정의역 $-\dfrac{\pi}{2}<x<\dfrac{\pi}{2}$ 는 $\cos x>0$ 과 $\tan x$ 의 정의를 보장하는 T-범위 함정이다.
    확인체크 출발점 ★2 에서 통찰 depth 2 + 변형·적분상수·특수각 3단 복합(M_total 7)으로 +1 → ★3.
  tier: star_3
  mechanism_primary: "분모 1-sin^2 x 를 cos^2 x 로 보고 항별 분리 → sec^2 x - cos x 적분해 tan x - sin x + C → f(0)=0 으로 C=0 → x=π/3 대입"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{\sqrt{3}}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/211-431.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자의 차수(1-cos^3 x → 1-cos^3 x 대신 2-cos^3 x), 초기조건 지점(x=0), 묻는 특수각(π/3 → π/4, π/6)을 바꿀 수 있음. 제약: (가) 분자를 분모 cos^2 x 로 나눴을 때 남는 항이 모두 기본 적분표 꼴(sec^2 x, cos x, sec x tan x 등)이어야 함 — 분자에 cos x 홀수 차수를 하나만 남길 것 (나) 특수각은 tan 과 sin 이 동시에 유리수·근호로 떨어지는 π/6, π/4, π/3 만 사용 (다) 정의역은 cos x>0 구간을 유지해야 tan 이 정의되고 절댓값 처리가 불필요."
    creative: "(1) f(0)=0 대신 f(π/4) 값을 주면 초기조건 계산이 무거워져 ★3 유지 (2) 분자를 1-cos^3 x 에서 1-cos^4 x 로 바꾸면 cos^2 x 항이 남아 반각공식이 필요해지고 이 단원 도구를 벗어나므로 금지 (3) f(π/3) 값을 주고 정의역 안에서 조건을 만족하는 계수를 역으로 구하게 하면 I-BW 가 추가돼 ★4 후보."
```

## 표본 판정 요약 (12문)

- ★ 분포: ★1 1 · ★2 10 · ★3 1 · ★4 0 · ★5 0
- 통찰형 7 · 절차형 5 · premium 0
- 통찰 유형은 전부 I-EQV(동치 변형) 7개 — depth 1 이 5개(209-e1 · 209-427 · 210-e2 · 210-428 · 211-e3), depth 2 가 2개(211-430 ⑶ 켤레 곱 · 211-431 분모에 숨은 항등식). I-XU·I-SC·I-VF·I-SYM 은 0개.
- type_hint 상위: 「삼각함수의 부정적분 — 항등식으로 기본 적분표 꼴 만들기」 3 · 「지수함수의 부정적분 — 전개·인수분해로 적분 가능한 꼴 만들기」 2 · 「부정적분으로 정의된 함수 — 적분상수 결정 후 함숫값 구하기」 2 · 「함수 y=x^n 의 부정적분」 계열 3(지수 꼴 정리 / 인수분해·유리화 / 전개·항별 나눗셈 각 1) · 「지수함수의 부정적분 — 밑을 a^x 꼴로 정리」 1 · 「도함수가 주어진 함수의 함숫값 — 적분 후 적분상수 결정」 1
- 그림: 0문
- 단원 전체가 「적분표가 적용되는 꼴로 고쳐 쓰기」 한 골조의 반복이라 ★ 가 ★2 에 몰린다. ★3 이상으로 올리려면 변형의 실마리를 숨기거나(211-431), 곱할 켤레식을 학생이 만들게 하거나(211-430 ⑶), 답을 주고 계수를 역추적하게 하는(I-BW) 설정이 필요하며 각 블록 `variation_notes.creative` 에 적어 두었다. 반대로 치환적분이 필요한 꼴(분모가 sin x cos x, 분자가 분모의 인수가 아닌 경우)은 이 단원 도구로 풀리지 않으므로 변형 금지 항목으로 `variation_notes.numeric` 에 명시했다.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| (없음) | 이 범위에서 벤더 신호와 2단 이상 어긋난 문항 없음 | - |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위의 type_hint 는 **피적분함수의 함수족**(x^n / 지수 / 삼각)과 **변형의 종류**(지수 꼴 정리 / 전개·항별 나눗셈 / 인수분해·유리화 / 항등식)의 곱으로 갈라져 있다. 카탈로그에서는 **함수족으로 3개 유형**(「y=x^n 의 부정적분」·「지수함수의 부정적분」·「삼각함수의 부정적분」)을 세우고, 변형의 종류는 유형 안의 난이도 눈금(보이는 대로 전개·나눗셈 ★1~2 → 인수분해 약분·유리화 ★2 → 켤레를 스스로 만들거나 실마리가 분모에 숨음 ★3)으로 두는 것이 맞다. 세 함수족의 골조가 완전히 같아 유형을 변형 종류별로 쪼개면 중복이 심해진다.
- 「부정적분으로 정의된 함수 — 적분상수 결정 후 함숫값」(209-427 · 211-431)과 「도함수가 주어진 함수의 함숫값」(210-429)은 **한 유형으로 통합**해도 된다. 세 문항 모두 `적분 가능한 꼴로 변형 → 적분 → 초기조건으로 C 결정 → 함숫값 대입` 으로 골조가 같고, 갈리는 것은 발문이 부정적분 기호로 주어지는가 도함수로 주어지는가뿐이다. 다만 이 계열은 앞쪽 계산 유형과 달리 **한 단계가 더 붙어 ★ 가 한 칸 위로 가는 자리**이므로 카탈로그에서는 별도 유형으로 세우고 base ★ 를 2~3 으로 두는 것이 낫다.
- 이 단원만으로는 ★4 이상 슬롯의 base ★ 근거가 없다. 치환적분·부분적분(단원 27 이후)과 정적분 단원에서 같은 변형 골조가 재등장하므로, 카탈로그 설계 시 그 문항들과 함께 모아 「적분 가능한 꼴로의 동치 변형」 축의 base ★ 상한을 정할 것.
