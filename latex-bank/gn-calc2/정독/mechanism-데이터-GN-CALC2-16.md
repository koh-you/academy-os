---
name: mechanism-데이터-GN-CALC2-16
description: 개념원리 미적분Ⅱ 16 합성함수의 미분법(1/1 · 136~142쪽 · 26문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 미적분Ⅱ · 전사본 latex-bank/gn-calc2
  section: 16 합성함수의 미분법
  unit_code: CALC2-16
  part: "1/1"
  extract_range: "136~142쪽 · 136-e4~142-282"
  total_problems: 26
  unit_total: 26
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). insight_type 은 insights 유무로만 결정(비면 절차형 · 하나라도 있으면 통찰형). anchor_status 는 null. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-calc2/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-calc2/items/<id>.tex
  image_source: latex-bank/gn-calc2/figures/ (crops.json)
---

# 개념원리 미적분Ⅱ · 16 합성함수의 미분법 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 미적분Ⅱ 16단원(합성함수의 미분법)의 136~142쪽 26문항 전수를 다룬다. 전사본의 구역은 네 개다 — 「필수·발전 예제」 14문(필수 예제 4상자 `136-e4`·`137-e5`·`138-e6`·`140-e8`, 발전 예제 1상자 `139-e7`, 각 상자에 딸린 확인체크 유제 9문), 「연습문제 STEP 1」 6문, 「연습문제 STEP 2」 4문, 「연습문제 실력 UP」 2문. 개념원리 고등의 난이도 신호는 구역과 태그다 — 「필수」 예제 ★2, 「발전」 ★3, 연습문제는 STEP 1 ★2 / STEP 2 ★3 / 실력 UP ★4 출발이고, 교육청·평가원 기출 태그는 통찰 유무로 +0~1 한다.

★ 판정에서 이 범위에 적용한 두 가지 약속을 먼저 밝힌다. (1) 「확인체크」 유제는 「개념원리 익히기」 통번호(★1 출발)가 아니라 바로 위 필수·발전 예제에 딸린 유제여서 짝이 되는 예제와 같은 출발점(필수 ★2 · 발전 ★3)으로 잡았다. 01단원 파일과 같은 처리다. (2) 「통찰 0 · M_total ≤ 5 → −1」 후보는 **한 공식을 한 번 적용하는 순수 드릴**에만 적용했다(이 범위에서는 `137-e5` 하나). 몫의 미분·곱의 미분·로그 성질처럼 도구가 둘 이상 겹치는 문항은 M_total 이 5 여도 구역 출발점을 유지했고, 그 판단을 각 rationale 에 한 줄로 남겼다.

단원 성격상 대부분의 문항이 「바깥 미분 × 안쪽 미분」이라는 한 골조를 공유하는 계산 드릴이라 ★2 에 몰려 있고, 변별은 세 갈래에 몰린다 — **로그미분법을 고를 것인가**(139-e7·139-267·139-268·142-280), **주어진 극한식을 미분계수 정의로 되돌릴 것인가**(141-273·142-280·142-282), **도형·추상 함수 조건을 θ 나 f 의 식으로 세울 것인가**(142-278·142-279·142-281). 이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다. 그림 문항은 1문(`142-281`)이다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-CALC2-136-e4
  page: 136
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑶ $\{f(x)\}^n$ 꼴 세 함수를 미분. ⑴ $(2x-3)^5$ ⑵ $\left(\dfrac{x}{x^2+1}\right)^3$ ⑶ $(\sin x-\cos x)^3$.
  category: "바깥 거듭제곱 미분 → 안쪽 함수 미분 곱하기(⑵ 는 안쪽이 몫)"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "y={f(x)}^n 꼴 합성함수의 미분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    세 소문항 모두 $y'=n\{f(x)\}^{n-1}f'(x)$ 한 번이지만 ⑵ 는 안쪽에서 몫의 미분을 한 번 더 하고 분모를 $(x^2+1)^4$ 로 정리해야 해 도구가 둘이다. 통찰 없음·M_total 5 로 −1 후보가 걸리나 도구가 겹치는 드릴 세트라 필수 예제 출발점 ★2 를 유지했다.
  tier: star_2
  mechanism_primary: "y={f(x)}^n → n{f(x)}^{n-1}·f'(x) → ⑵ 는 f'(x) 를 몫의 미분으로 구해 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $y''=10(2x-3)^4$ ⑵ $y''=\dfrac{3x^2(1-x^2)}{(x^2+1)^4}$ ⑶ $y''=3(\sin x-\cos x)^2(\sin x+\cos x)$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/136-e4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 n(3·4·5), ⑴ 의 일차식 계수, ⑵ 의 분모 차수(x^2+1 → x^2+2 · x^3+1), ⑶ 의 삼각 조합(sin+cos · 2sin x-cos x). 제약: ⑵ 는 분모가 실수 전체에서 0 이 되지 않아야 하고, 정리 후 분모 차수가 (원분모 차수)×(n+1) 이 되므로 지수를 올리면 계산량만 늘고 골조는 그대로다."
    creative: "(1) ⑵ 를 몫 대신 곱 (x(x^2+1)^{-1})^3 으로 써서 지수법칙 정리 갈래를 추가(★2 유지) (2) ⑶ 을 (sin x-cos x)^3 = 제곱 정리 후 미분과 직접 미분 두 갈래로 비교시키면 I-SC 추가 ★3 (3) n 을 문자로 두고 y'(0) 을 묻는 형태로 바꾸면 Mₐ 상승 ★3."
```

```yaml
- id: GN-CALC2-136-262
  page: 136
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑷ 곱·몫·로그·삼각이 섞인 합성함수 네 개를 미분. ⑴ $(x^2+1)^3(x^3+x-1)^2$ ⑵ $\dfrac{4x-1}{(3x+2)^2}$ ⑶ $(\ln x)^2$ ⑷ $(1-\tan x)^3$.
  category: "곱·몫의 미분 + 합성함수 거듭제곱 → 공통인수로 묶어 정리"
  M: {s: 3, k: 2, a: 1, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곱·몫과 섞인 {f(x)}^n 꼴 합성함수의 미분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 곱의 미분 뒤 $2(x^2+1)^2(x^3+x-1)$ 을 공통인수로 묶어 남은 괄호를 전개·정리하는 데 단계가 가장 많고, ⑵ 는 몫의 미분 뒤 $(3x+2)$ 한 개를 약분해야 답 꼴이 나온다. ⑶⑷ 는 한 줄 드릴. 통찰 없음·M_total 6 이라 조정 없이 확인체크 유제 출발점 ★2.
  tier: star_2
  mechanism_primary: "곱(또는 몫)의 미분 → 각 인수에 합성함수 거듭제곱 공식 → 공통인수로 묶고 약분"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $y''=2(x^2+1)^2(x^3+x-1)(6x^4+7x^2-3x+1)$ ⑵ $y''=-\dfrac{2(6x-7)}{(3x+2)^3}$ ⑶ $y''=\dfrac{2\ln x}{x}$ ⑷ $y''=-3(1-\tan x)^2\sec^2 x$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/136-262.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 두 인수 지수(3·2 → 2·3), ⑵ 의 일차식 계수와 분모 지수, ⑶ 의 로그 지수, ⑷ 의 상수항. 제약: ⑴ 은 공통인수로 묶은 뒤 남는 다항식의 차수가 (두 인수 차수의 합 −1)이 되므로 지수를 올리면 정리가 급격히 무거워진다. ⑵ 는 분자 일차·분모 이차를 유지해야 한 번 약분으로 끝난다."
    creative: "(1) ⑵ 를 몫 대신 (4x-1)(3x+2)^{-2} 곱꼴로 주어 지수 음수 처리 연습으로(★2 유지) (2) ⑶ 을 (ln x)^n 으로 일반화해 y'(e) 를 묻기(Mₐ 상승 ★3) (3) ⑷ 를 (1-tan x)^3 의 극값이 되는 x 를 묻는 형태로 바꾸면 f'(x)=0 풀이가 붙어 ★3."
```

```yaml
- id: GN-CALC2-136-263
  page: 136
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $f(x)=(x^2+5x)^2$, $g(x)=\dfrac{4x-3}{2x-1}$ 일 때 $h=f\circ g$ 의 $h'(1)$.
  category: "합성함수의 미분계수 h'(1)=f'(g(1))g'(1)"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "합성함수의 미분계수 (f∘g)'(a)=f'(g(a))g'(a)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    합성을 전개하지 않고 $g(1)$ 을 먼저 구해 $f'(g(1))$ 에 넣는 것이 골조. $f'$ 은 거듭제곱 합성, $g'$ 은 몫의 미분이라 도구가 둘이고, 함정은 $f'(1)$ 과 $f'(g(1))$ 을 혼동하는 지점 하나뿐이다(여기서는 $g(1)=1$ 이라 우연히 같은 값). 통찰 없음·M_total 5 지만 순수 드릴이 아니어서 확인체크 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "g(1) 먼저 계산 → f'(x)=2(x^2+5x)(2x+5) 에 g(1) 대입 → 몫의 미분으로 구한 g'(1) 을 곱함"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$168$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/136-263.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f 의 안쪽 이차식 계수, g 의 분자·분모 일차식 계수, 대입점 a. 제약: g(a) 의 분모가 0 이 아니어야 하고, g(a)≠a 가 되도록 계수를 잡아야 f'(g(a)) 와 f'(a) 를 혼동하는 함정이 실제로 작동한다(현 문항은 g(1)=1 이라 함정이 무력화돼 있다)."
    creative: "(1) g(a)≠a 가 되도록 수를 바꿔 혼동 함정을 살리기(★2 유지, 오답률만 상승) (2) h'(1) 대신 h'(a)=0 이 되는 a 를 묻기(방정식 추가 ★3) (3) f 를 일반 미분가능 함수로 두고 f'(1)=k 만 주면 Mₐ 3 · 추상형 ★3."
```

```yaml
- id: GN-CALC2-137-e5
  page: 137
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑷ $y=f(g(x))$ 꼴 네 함수를 미분. ⑴ $e^{4x-2}$ ⑵ $\ln(5x^3+x)$ ⑶ $\sin(1-3x^2)$ ⑷ $(e^x+e^{-x})^2$.
  category: "바깥 함수 미분 × 안쪽 함수 미분(지수·로그·삼각 기본형)"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "y=f(g(x)) 꼴 합성함수 미분 기본 드릴(지수·로그·삼각)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    네 소문항 모두 합성함수 미분 공식을 정확히 한 번 적용하면 한 줄에 끝난다(⑷ 만 전개 후 $2(e^{2x}-e^{-2x})$ 로 정리하는 곱셈 공식이 한 단계 더 붙는다). 통찰 없음·M_total 4 로 −1 후보가 그대로 걸려 필수 예제 출발점 ★2 에서 ★1 로 내렸다. [분류 이슈] 딸린 확인체크 137-264 가 삼중 합성이라 오히려 ★2 로 더 높다 — 예제보다 유제가 어려운 배치.
  tier: star_1
  mechanism_primary: "y=f(g(x)) → f'(g(x))·g'(x) 한 번 적용 → ⑷ 만 전개해 지수 합차꼴로 정리"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $y''=4e^{4x-2}$ ⑵ $y''=\dfrac{15x^2+1}{5x^3+x}$ ⑶ $y''=-6x\cos(1-3x^2)$ ⑷ $y''=2(e^{2x}-e^{-2x})$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/137-e5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 안쪽 함수의 계수(4x-2 · 5x^3+x · 1-3x^2)와 ⑷ 의 지수 밑. 제약: ⑵ 는 진수가 부호를 바꾸지 않는 구간을 전제하므로 정의역을 명시하거나 절댓값으로 바꿔야 하고, ⑶ 의 안쪽을 일차로 낮추면 x 인자가 사라져 난이도가 더 떨어진다."
    creative: "(1) ⑴ 을 a^{4x-2} 로 바꿔 ln a 인자를 추가(★1~2) (2) ⑷ 를 (e^x+e^{-x})^n 으로 올려 거듭제곱 합성과 지수 정리를 겹치기(★2) (3) 네 소문항을 값 문제 y'(0) 로 바꾸면 대입 함정이 붙어 ★2."
```

```yaml
- id: GN-CALC2-137-264
  page: 137
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑷ 지수·로그·삼각이 겹친 합성함수를 미분. ⑴ $e^{x^2+x+1}$ ⑵ $3^{\cos x}$ ⑶ $\tan(\cot x)$ ⑷ $\cos^2(x^2-x+2)$.
  category: "지수 밑 변환·삼각 이중 합성 → 바깥에서 안쪽으로 차례로 미분"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수·로그·삼각이 겹친 다중 합성함수의 미분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑵ 는 $a^{f(x)}$ 의 $\ln a$ 인자, ⑶ 은 $\tan$ 안에 $\cot$ 이 들어간 이중 합성, ⑷ 는 제곱∘코사인∘이차식의 삼중 합성이라 미분 순서를 세 번 지켜야 한다. 함정은 $\ln a$ 누락·부호(T-표기/T-부호) 한 묶음. 통찰 없음·M_total 5 지만 합성 층이 둘 이상이라 확인체크 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "가장 바깥 함수부터 미분해 안쪽 도함수를 차례로 곱함 → ⑵ 는 ln 3 인자, ⑷ 는 제곱·cos·이차식 세 층"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $y''=(2x+1)e^{x^2+x+1}$ ⑵ $y''=-\ln 3\times 3^{\cos x}\sin x$ ⑶ $y''=-\sec^2(\cot x)\csc^2 x$ ⑷ $y''=-2(2x-1)\cos(x^2-x+2)\sin(x^2-x+2)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/137-264.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴⑷ 의 안쪽 이차식 계수, ⑵ 의 밑(2·5·1/3), ⑷ 의 바깥 지수. 제약: ⑵ 의 밑은 1 이 아닌 양수여야 하고 밑이 1보다 작으면 ln a 의 부호가 뒤집혀 답 부호가 바뀐다. ⑶ 은 cot x 가 정의되는 구간 전제가 필요하다."
    creative: "(1) ⑷ 를 2배각으로 먼저 낮춰 미분하는 갈래를 함께 요구하면 I-SC 추가 ★3 (2) ⑵ 를 3^{cos x} 의 최대·최소로 바꾸면 도함수 부호 분석이 붙어 ★3 (3) ⑶ 을 tan(cot x) 의 미분계수 값 문제로 바꾸면 정의역 함정이 살아나 ★2~3."
```

```yaml
- id: GN-CALC2-137-265
  page: 137
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $f(x)=\dfrac{5^x-5^{-x}}{5^x+5^{-x}}$ 의 $f'(0)$.
  category: "지수함수 분수식의 몫의 미분 → x=0 대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수 분수식의 미분계수 f'(0)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    몫의 미분에서 $5^{-x}$ 의 도함수 부호(−ln 5 인자)가 유일한 함정이고, $x=0$ 에서 분자·분모가 모두 정리돼 $\ln 5$ 만 남는다. 분자·분모에 $5^x$ 를 곱해 $\dfrac{5^{2x}-1}{5^{2x}+1}$ 로 바꾸는 갈래도 있으나 계산량이 비슷해 전략 선택으로 세지 않고 절차형으로 둔다. M_total 6 · 통찰 0 → 확인체크 출발점 ★2.
  tier: star_2
  mechanism_primary: "몫의 미분 적용(5^{±x} 의 도함수에 ±ln 5) → x=0 대입 → 분자 4ln 5 / 분모 4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\ln 5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/137-265.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 5 를 2·3·e 로, 대입점 0 을 1 로. 제약: 대입점을 0 이외로 옮기면 분모 (a^x+a^{-x})^2 이 정리되지 않아 답이 지저분해지므로, 값 문제로 남기려면 대입점 0 을 고정하는 편이 좋다. 밑이 e 면 답이 1 이 되어 ln 인자 함정이 사라진다."
    creative: "(1) f 가 기함수임을 먼저 보이고 f'(0) 을 그래프 대칭으로 설명시키면 I-SYM 추가 ★3 (2) f 의 치역을 묻는 문제로 바꾸면 미분 없이 지수 범위 논의로 이동(★2) (3) f'(x)>0 을 보여 증가함수임을 증명하게 하면 부호 판정이 붙어 ★3."
```

```yaml
- id: GN-CALC2-138-e6
  page: 138
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑷ 절댓값이 붙은 로그함수를 미분. ⑴ $\ln|{-x^2+5x}|$ ⑵ $x\ln|3x|$ ⑶ $\log_2|\sin x|$ ⑷ $\log_3|2x-3|^3$.
  category: "y=ln|f(x)| → f'(x)/f(x) · 밑 변환과 로그 성질로 먼저 정리"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "y=ln|f(x)| · y=log_a|f(x)| 의 도함수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    핵심은 절댓값이 도함수에서 사라져 $\dfrac{f'(x)}{f(x)}$ 가 된다는 공식 한 줄이지만, ⑵ 는 곱의 미분, ⑶⑷ 는 밑 변환($\log_a = \ln/\ln a$)과 로그 성질(⑷ 의 지수 3 을 앞으로 빼기)이 각각 한 단계씩 더 붙는다. 함정은 진수 0 제외(T-범위) 하나. 통찰 없음·M_total 5 지만 도구가 셋이라 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "로그 성질·밑 변환으로 먼저 정리 → y=ln|f(x)| 의 도함수 f'(x)/f(x) 적용 → ⑵ 만 곱의 미분"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $y''=\dfrac{-2x+5}{-x^2+5x}$ ⑵ $y''=\ln|3x|+1$ ⑶ $y''=\dfrac{\cot x}{\ln 2}$ ⑷ $y''=\dfrac{6}{(2x-3)\ln 3}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/138-e6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 이차식 계수, ⑵ 의 내부 계수 3, ⑶⑷ 의 밑(2·3·10)과 ⑷ 의 지수 3. 제약: ⑵ 에서 내부 계수는 도함수에 남지 않으므로(ln|3x|의 미분이 1/x) 계수를 바꿔도 답이 변하지 않는다는 점이 이 문항의 포인트다 — 변형 시 이 성질을 깨지 않도록 곱해지는 x 항은 유지한다."
    creative: "(1) ⑵ 의 결과를 이용해 x ln|kx| - x 의 도함수를 묻기(138-266 ⑶ 과 같은 골조 ★2) (2) ⑷ 를 log_a|f(x)|^n 일반형으로 두고 y' 을 a·n 의 식으로 쓰게 하면 Mₐ 상승 ★3 (3) ⑴ 의 정의역을 함께 묻는 형태로 바꾸면 T-범위 함정이 전면에 나와 ★2~3."
```

```yaml
- id: GN-CALC2-138-266
  page: 138
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑷ 절댓값 로그가 곱·몫과 섞인 함수를 미분. ⑴ $\ln|\cos x|$ ⑵ $\log_2(\sin^2 x)$ ⑶ $x\ln|x|-x$ ⑷ $\dfrac{\ln|x|}{x^2}$.
  category: "로그 성질로 정리 → f'/f 적용 → 곱·몫의 미분과 결합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "y=ln|f(x)| 꼴과 곱·몫이 섞인 로그함수의 미분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑵ 는 $\log_2(\sin^2 x)=\dfrac{2\ln|\sin x|}{\ln 2}$ 로 먼저 줄이면 한 줄, 그대로 미분하면 지저분해지는 대비가 핵심이고 ⑷ 는 몫의 미분 뒤 $x$ 한 개를 약분해야 답 꼴이 나온다. ⑶ 은 곱의 미분에서 $\ln|x|$ 만 남는 구조. 통찰 없음·M_total 6 → 확인체크 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "로그 성질로 지수를 앞으로 빼고 밑을 ln 으로 바꾼 뒤 f'/f 적용 → ⑶⑷ 는 곱·몫의 미분 결합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $y''=-\tan x$ ⑵ $y''=\dfrac{2\cot x}{\ln 2}$ ⑶ $y''=\ln|x|$ ⑷ $y''=\dfrac{1-2\ln|x|}{x^3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/138-266.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑵ 의 밑과 지수, ⑷ 의 분모 차수(x^2 → x^3 이면 답 분모가 x^4 · 분자 계수가 3 으로). 제약: ⑷ 의 분모 차수 n 에 대해 도함수 분자는 1-n·ln|x| 가 되므로 차수를 바꾸면 계수만 따라 바뀐다 — 답 꼴을 유지하려면 분자는 ln|x| 하나로 고정한다."
    creative: "(1) ⑷ 의 도함수 부호로 극값을 묻기(ln|x|=1/n → x=e^{1/n}, ★3) (2) ⑶ 의 결과가 원함수의 부정적분 관계임을 이용해 역방향(도함수가 ln|x| 인 함수 찾기)으로 뒤집으면 I-BW ★3 (3) ⑴ 을 ln|sec x + tan x| 로 올리면 정리 단계가 늘어 ★3."
```

```yaml
- id: GN-CALC2-139-e7
  page: 139
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["발전"]
  category_type: "발전 예제"
  summary: |
    ⑴ $y=x^{\sin x}\ (x>0)$ ⑵ $y=\dfrac{(x+2)^3(x+3)^4}{(x+1)^2}$ 를 미분(로그미분법).
  category: "양변에 자연로그 → 로그 성질로 합차 분해 → 양변 미분 후 y 를 곱함"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-SC
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "밑과 지수가 모두 변수이거나 곱·몫의 거듭제곱이 겹칠 때, 곱·몫의 미분을 직접 하는 갈래 대신 양변에 로그를 취하는 갈래를 고르는 판단"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "로그미분법(밑·지수가 모두 변수 · 곱몫의 거듭제곱)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑴ 은 밑·지수가 모두 $x$ 의 함수라 지수법칙도 거듭제곱 미분도 쓸 수 없고 로그를 취하는 갈래만 통한다. ⑵ 는 몫·곱의 미분으로도 되지만 로그미분법이 현저히 짧아 갈래 선택이 실제 이득이 된다 — I-SC d1. 마지막에 $y$ 를 되곱하는 것을 잊는 함정이 하나. 발전 예제 출발점 ★3 을 통찰 1개(d1)로 그대로 유지.
  tier: star_3
  mechanism_primary: "ln y 로 양변 로그 → 로그 성질로 곱몫을 합차로 → 양변 미분해 y'/y → y 를 곱해 복원"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ $y''=x^{\sin x}\left(\cos x\ln x+\dfrac{\sin x}{x}\right)$ ⑵ $y''=\dfrac{(x+2)^2(x+3)^3(5x^2+14x+5)}{(x+1)^3}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/139-e7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 지수 함수(sin x → cos x · ln x · x^2), ⑵ 의 세 인수의 평행이동과 지수(3·4·2). 제약: ⑴ 은 x>0 이어야 로그를 취할 수 있으므로 정의역 단서를 반드시 붙인다. ⑵ 는 지수 합(분자 7 · 분모 2)이 커질수록 정리 후 남는 이차식 계수가 커지니 답 꼴을 이차식으로 두려면 인수 3개를 유지한다."
    creative: "(1) ⑵ 를 y'(0) 값 문제로 바꾸면 대입 계산만 남아 ★2~3 (2) ⑴ 을 x^{sin x} 의 극값이 되는 x 조건으로 바꾸면 cos x·ln x + sin x/x = 0 논의가 붙어 ★4 (3) 밑을 상수로 고정하면 로그미분법이 불필요해져 골조가 무너진다 — ★2 로 하락하는 지점."
```

```yaml
- id: GN-CALC2-139-267
  page: 139
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑷ 로그미분법으로 미분. ⑴ $x^x\ (x>0)$ ⑵ $(\ln x)^x\ (x>1)$ ⑶ $\dfrac{(x-1)^2(x+1)}{(x+3)^3}$ ⑷ $\sqrt{\dfrac{(x-1)(x+3)}{(x+1)^3}}$.
  category: "양변 로그 → 합차 분해 → y'/y 정리 → y 곱해 복원(⑷ 는 지수 1/2 처리)"
  M: {s: 3, k: 3, a: 1, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-SC
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "밑·지수가 모두 변수인 ⑴⑵ 와 인수가 넷까지 늘어난 ⑶⑷ 에서 직접 미분 대신 로그를 취하는 갈래를 선택"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "로그미분법(x^x 꼴 · 곱몫의 거듭제곱 · 무리식)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑷ 가 이 범위에서 계산이 가장 무겁다 — 제곱근을 지수 $\tfrac12$ 로 올려 로그를 취한 뒤 $\tfrac12\left(\dfrac{1}{x-1}+\dfrac{1}{x+3}-\dfrac{3}{x+1}\right)$ 를 통분해 다시 $y$ 를 곱해야 답 꼴이 나온다(Mₖ 3). 통찰은 e7 과 같은 로그미분 갈래 선택 하나. 발전 예제 유제 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "제곱근·거듭제곱을 지수로 올림 → 양변 로그 후 합차 분해 → y'/y 통분 → y 를 곱해 복원"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ $y''=x^x(\ln x+1)$ ⑵ $y''=(\ln x)^x\left\{\ln(\ln x)+\dfrac{1}{\ln x}\right\}$ ⑶ $y''=\dfrac{(x-1)(10x+6)}{(x+3)^4}$ ⑷ $y''=\dfrac{-x^2-2x+11}{2(x+1)^2\sqrt{(x-1)(x+1)(x+3)}}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/139-267.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑶⑷ 의 인수 평행이동과 지수 조합. 제약: ⑷ 는 근호 안이 양수인 구간(x>1)을 전제해야 로그를 취할 수 있고, 지수 합이 홀수면 통분 뒤 분자가 이차를 넘어 답이 급격히 지저분해진다. ⑵ 는 ln x>0 이 필요해 x>1 단서를 뗄 수 없다."
    creative: "(1) ⑴ 을 x^x 의 최솟값(x=1/e)을 묻는 형태로 바꾸면 도함수 부호 분석이 붙어 ★4 (2) ⑶ 을 y'=0 인 x 를 묻는 형태로 바꾸면 10x+6=0 과 x=1 두 근의 처리로 I-VF 추가 ★4 (3) ⑷ 의 근호를 없애면 곧바로 ⑶ 과 같은 난도로 내려온다 — ★3 을 만드는 지점이 근호."
```

```yaml
- id: GN-CALC2-139-268
  page: 139
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $f(x)=\dfrac{e^x\cos x}{1+\sin x}$ 의 $f'(\pi)$.
  category: "지수·삼각이 곱·몫으로 얽힌 식 → 로그미분법으로 f'/f 를 구해 f(π) 를 곱함"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - step: 1
      type: I-SC
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "분자에 지수×삼각, 분모에 삼각이 있는 식을 몫의 미분으로 직접 갈지 양변 로그를 취해 f'/f 로 갈지 선택 — 후자면 x=π 대입이 한 줄"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "로그미분법을 쓰는 지수·삼각 분수식의 미분계수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    로그미분법 예제 뒤에 붙은 유제라 $\ln|f|=x+\ln|\cos x|-\ln(1+\sin x)$ 로 놓고 $\dfrac{f'}{f}=1-\tan x-\dfrac{\cos x}{1+\sin x}$ 를 구한 뒤 $f(\pi)=-e^{\pi}$ 를 곱하는 것이 의도된 골조다. 몫의 미분으로 직접 가도 세 줄이면 끝나 전략 이득이 크지 않다. [분류 이슈] I-SC 를 통찰로 세면 발전 유제 출발점 ★3 유지, 절차로 보면 M_total 5 로 −1 후보가 걸려 ★2.
  tier: star_3
  mechanism_primary: "양변 로그 → f'/f = 1 - tan x - cos x/(1+sin x) → x=π 에서 2 → f(π)=-e^π 를 곱함"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-2e^{\pi}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/139-268.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "대입점 π, 분모의 1+sin x, 분자의 e^x 계수. 제약: 대입점은 sin·cos 가 0 또는 ±1 이 되는 점(0 · π/2 · π)이어야 한 줄로 떨어지고, 분모 1+sin x 는 x=3π/2 에서 0 이 되므로 그 점은 대입점으로 쓸 수 없다(T-범위)."
    creative: "(1) 분모를 1+cos x 로 바꾸면 대입점 π 가 정의역에서 빠져 문제가 성립하지 않는다 — 변형 시 가장 먼저 확인할 지점 (2) f'(x)=0 인 x 를 구간에서 묻기(★4) (3) f 의 로그미분 결과를 그대로 두고 f'(π)/f(π) 값을 묻게 하면 마지막 곱 단계가 빠져 ★2."
```

```yaml
- id: GN-CALC2-140-e8
  page: 140
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑶ 실수 지수·거듭제곱근 함수를 미분. ⑴ $x^{\sqrt{2}}\ln x$ ⑵ $\dfrac{1}{\sqrt[3]{2x-1}}$ ⑶ $\sqrt[3]{1-\tan x}$.
  category: "거듭제곱근·분수를 실수 지수로 고쳐 쓰기 → (x^α)'=αx^{α-1} 과 합성 적용"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "실수 지수 y=x^α 와 거듭제곱근 함수의 미분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    골조는 「먼저 지수 꼴로 고치고 미분한 뒤 다시 거듭제곱근 꼴로 되돌린다」 한 줄이다. ⑵ 의 지수 $-\tfrac13$, ⑶ 의 $\tfrac13$ 에서 지수를 1 줄일 때 음수·분수 처리가 함정(T-표기/T-부호). ⑴ 은 곱의 미분이 추가돼 도구가 둘. 통찰 없음·M_total 6 → 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "거듭제곱근·역수를 x^α 꼴로 변환 → αx^{α-1}·(안쪽 도함수) → 다시 근호 꼴로 정리"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $y''=x^{\sqrt{2}-1}(\sqrt{2}\ln x+1)$ ⑵ $y''=-\dfrac{2}{3(2x-1)\sqrt[3]{2x-1}}$ ⑶ $y''=-\dfrac{\sec^2 x}{3\sqrt[3]{(1-\tan x)^2}}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/140-e8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 무리 지수(√2 → √3 · π), ⑵⑶ 의 근호 차수(3 → 4 · 5)와 안쪽 일차식 계수. 제약: 짝수 차수 근호로 바꾸면 안쪽이 0 이상이어야 한다는 정의역 조건이 새로 붙어 문항 성격이 달라지므로, 순수 계산 드릴로 두려면 홀수 차수를 유지한다."
    creative: "(1) ⑴ 을 x^α ln x 일반형으로 두고 y'=0 인 x 를 α 로 나타내게 하면 Mₐ 상승 ★3 (2) ⑵ 를 접선의 기울기 문제로 바꾸면 ★3 (3) ⑶ 의 근호를 벗겨 (1-tan x)^{1/3} 대신 (1-tan x)^3 로 올리면 136-e4 와 같은 골조로 내려온다 — ★2."
```

```yaml
- id: GN-CALC2-140-269
  page: 140
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑶ 실수 지수·거듭제곱근이 섞인 함수를 미분. ⑴ $(3x-2)^e$ ⑵ $\sqrt[3]{4x-x^2}$ ⑶ $x^{3\pi}\cos x$.
  category: "무리수 지수도 실수 지수 공식 그대로 → 합성·곱의 미분과 결합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "실수 지수·거듭제곱근 함수의 미분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    지수가 $e$·$3\pi$ 여도 상수이므로 $x^\alpha$ 공식이 그대로 적용된다는 것을 확인하는 드릴 — 지수를 변수로 착각해 지수함수 미분 공식을 쓰는 것이 유일한 함정(T-표기). ⑵ 는 합성, ⑶ 은 곱의 미분이 각각 한 겹 붙는다. 통찰 없음·M_total 5 지만 도구가 둘이라 확인체크 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "지수 e·3π 를 상수로 보고 αx^{α-1} 적용 → ⑵ 는 안쪽 도함수를 곱하고 ⑶ 은 곱의 미분으로 x^{3π-1} 을 묶음"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $y''=3e(3x-2)^{e-1}$ ⑵ $y''=\dfrac{4-2x}{3\sqrt[3]{(4x-x^2)^2}}$ ⑶ $y''=x^{3\pi-1}(3\pi\cos x-x\sin x)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/140-269.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 무리 지수와 일차식 계수, ⑵ 의 이차식(4x-x^2 → 2x-x^2), ⑶ 의 지수 3π. 제약: ⑵ 의 답을 근호 꼴로 정리하려면 안쪽 이차식의 도함수가 일차로 남아야 하므로 이차식은 유지한다. ⑶ 은 x^{3π-1} 로 묶이는 성질이 지수가 상수일 때만 성립한다."
    creative: "(1) ⑴ 의 지수를 x 로 바꿔 (3x-2)^x 로 만들면 로그미분법 문항이 되어 ★3 (2) ⑵ 를 y'=0 인 x(=2)를 묻는 극값 문항으로 바꾸면 ★3 (3) ⑶ 의 지수를 문자 a 로 두고 y'(1) 을 a 로 나타내면 Mₐ 상승 ★3."
```

```yaml
- id: GN-CALC2-140-270
  page: 140
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $f(x)=(2x-1)\sqrt{x^2+1}$ 의 $f'(1)$.
  category: "곱의 미분 + 근호의 합성 미분 → x=1 대입 후 분모 유리화"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곱과 무리함수가 섞인 함수의 미분계수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    곱의 미분으로 두 항을 만들고 그중 한 항에 근호 합성 미분($x/\sqrt{x^2+1}$)이 들어간다. $x=1$ 대입 뒤 $2\sqrt2+\dfrac{1}{\sqrt2}$ 를 통분·유리화해 $\dfrac{5\sqrt2}{2}$ 로 맞추는 마무리가 실제 실점 지점. 통찰 없음·M_total 5 지만 도구가 둘이어서 확인체크 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "f'=2√(x^2+1)+(2x-1)·x/√(x^2+1) → x=1 대입 → 유리화해 5√2/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{5\sqrt{2}}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/140-270.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차식 (2x-1) 의 계수, 근호 안 x^2+1 의 상수항, 대입점 1. 제약: 대입점에서 근호 안이 완전제곱수(또는 2·3 처럼 간단한 무리수)가 되어야 답이 정리된다 — x^2+1 을 x^2+3 으로 바꾸면 x=1 에서 2 가 되어 오히려 유리화 단계가 사라진다."
    creative: "(1) f'(x)=0 인 x 를 묻는 극값 문항으로 바꾸면 4x^2-x+2=0 판별식 논의가 붙어 ★3 (2) 근호를 세제곱근으로 올리면 140-e8 계열과 합쳐진다(★2) (3) f 를 (2x-1)√(x^2+a) 로 두고 f'(1)=0 이 되는 a 를 묻기 — I-BW 추가 ★3."
```

### 연습문제 STEP 1

```yaml
- id: GN-CALC2-141-271
  page: 141
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $f(x)=\dfrac{\tan x}{x}$ 의 그래프 위의 점 $\left(\dfrac{\pi}{4},f\left(\dfrac{\pi}{4}\right)\right)$ 에서의 접선의 기울기가 $\dfrac{a}{\pi}+\dfrac{b}{\pi^2}$ 일 때 $a+b$ (a, b 는 유리수).
  category: "접선의 기울기 = f'(π/4) → 몫의 미분 → 1/π 꼴로 정리해 계수 비교"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "접선의 기울기로 주어진 미분계수의 계수 비교"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    「접선의 기울기 = 그 점에서의 미분계수」를 옮기는 한 단계 외에는 전부 표준 절차다. 몫의 미분으로 $\dfrac{x\sec^2x-\tan x}{x^2}$ 를 얻고 $x=\dfrac{\pi}{4}$ 를 넣은 뒤, 결과를 $\dfrac{a}{\pi}+\dfrac{b}{\pi^2}$ 꼴에 맞추려 $\pi^2$ 을 분모로 통일하는 계수 비교가 마지막 단계. $\sec^2\dfrac{\pi}{4}=2$ 표기가 함정 하나. 통찰 없음·M_total 7 → STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "접선 기울기 → f'(π/4) → 몫의 미분 후 대입 → 8/π - 16/π^2 로 정리해 a=8, b=-16"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/141-271.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접점의 x 좌표(π/4 → π/3 · π/6)와 분모의 x. 제약: tan·sec^2 이 모두 간단한 값이 되는 특수각이어야 계수가 유리수로 떨어진다(π/3 이면 sec^2=4, tan=√3 이라 무리수가 섞여 a·b 유리수 조건이 깨진다) — 이 문항에서 π/4 는 사실상 고정값이다."
    creative: "(1) 기울기 대신 접선의 방정식을 묻고 y 절편을 요구하면 단계 하나 추가 ★3 (2) f(x)=tan x/x 대신 sin x/x 로 바꾸면 계수가 더 깔끔해져 ★2 하단 (3) 접선이 원점을 지나도록 하는 접점을 묻는 형태로 뒤집으면 I-BW 추가 ★4."
```

```yaml
- id: GN-CALC2-141-272
  page: 141
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: ["평가원 기출"]
  category_type: "연습문제 STEP 1"
  summary: |
    미분가능한 $f$ 에 대해 $g(x)=\dfrac{f(x)}{(e^x+1)^2}$, $f'(0)-f(0)=2$ 일 때 $g'(0)$. 5지선다.
  category: "몫의 미분(분모는 합성) → x=0 대입 → f'(0)-f(0) 덩어리로 정리"
  M: {s: 2, k: 2, a: 3, t: 0}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미분가능한 일반 함수 f 를 포함한 몫함수의 미분계수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $f$ 가 구체적으로 주어지지 않아 Mₐ 는 3 이지만, $g'(x)$ 를 몫의 미분으로 정리하고 $x=0$ 을 넣으면 $\dfrac{2\{f'(0)-f(0)\}}{8}$ 가 **저절로** 나온다 — 덩어리를 미리 알아채야 하는 구조가 아니라 통찰로 세지 않았다. 분모 $(e^x+1)^2$ 의 합성 미분과 $(e^x+1)$ 한 개 약분이 실제 단계. 평가원 기출 태그는 통찰이 없어 +0. STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "몫의 미분 → 분자·분모에서 (e^x+1) 약분 → x=0 대입해 2{f'(0)-f(0)}/8 = 1/2"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/141-272.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모의 지수 2, 밑 e^x+1 의 상수항, 조건값 2, 대입점 0. 제약: 대입점은 e^x 가 1 이 되는 x=0 이어야 분모가 정수로 떨어지고, 주어지는 조건은 g'(0) 정리식에 나타나는 조합(계수비가 f' : f = 1 : 1)과 정확히 같아야 답이 결정된다 — 분모 지수를 n 으로 바꾸면 조건도 f'(0)-nf(0)/2 꼴로 함께 바꿔야 한다."
    creative: "(1) 분모를 (e^x+1)^3 으로 올려 조건 조합을 학생이 역산하게 하면 I-EQV 추가 ★3 (2) g'(0) 대신 g(0)·g'(0) 을 모두 쓰는 접선 문제로 확장(★3) (3) f 에 f(0)=1 처럼 값을 하나 더 주면 추상도가 내려가 ★2 하단."
```

```yaml
- id: GN-CALC2-141-273
  page: 141
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $f(x)=\cos^2 x$ 일 때 $\displaystyle\lim_{h\to 0}\dfrac{f\left(\dfrac{\pi}{6}+h\right)-f\left(\dfrac{\pi}{6}-h\right)}{h}$.
  category: "대칭차분 극한을 미분계수 정의로 환원 → 2f'(π/6)"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "f(a+h)-f(a-h) 를 {f(a+h)-f(a)}+{f(a)-f(a-h)} 로 쪼개 주어진 극한을 2f'(a) 로 동치 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "대칭차분 극한을 미분계수 정의로 환원"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분자에 $f\left(\dfrac{\pi}{6}\right)$ 를 더하고 빼서 두 개의 미분계수로 갈라야 극한이 계산된다 — 조건을 풀이 가능한 꼴로 옮기는 I-EQV d1. 그 뒤는 $f'(x)=-\sin 2x$ 한 줄과 대입뿐이다. $-h$ 쪽 극한의 부호(T-부호)가 함정. 통찰 1개·depth 1 이라 +1 조건(2개 이상 또는 depth 3)에 못 미쳐 STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "분자에 ±f(π/6) 삽입 → 두 미분계수로 분리해 2f'(π/6) → f'(x)=-sin 2x 대입"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-\sqrt{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/141-273.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준점 π/6(→ π/4 · π/3), 분모 h 의 계수(h → 2h · 3h), 함수 cos^2 x(→ sin^2 x · sin x cos x). 제약: 분모 계수를 k 로 바꾸면 답이 2f'(a)/k 가 되므로 배수를 함께 조정해야 하고, 기준점은 2배각 값이 특수각이 되는 점으로 잡아야 답이 무리수 한 개로 떨어진다."
    creative: "(1) 분자를 f(a+2h)-f(a-3h) 처럼 비대칭으로 만들면 계수 5f'(a) 로 일반화 ★3 (2) f 를 일반 미분가능 함수로 두고 f'(a)=k 만 주면 Mₐ 3 · 추상형 ★3 (3) 좌·우 극한이 다른 함수(|cos x| 등)를 넣어 미분가능성 검증을 강제하면 I-VF 추가 ★4."
```

```yaml
- id: GN-CALC2-141-274
  page: 141
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $f(x)=\left(\dfrac{2x+a}{x+1}\right)^3$ 이고 $f'(0)=3$ 일 때 정수 $a$.
  category: "거듭제곱 합성 + 몫의 미분 → f'(0)=3 을 a 의 삼차방정식으로 → 정수근 선별"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 3
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "a 에 대한 삼차방정식의 세 근 중 「정수 a」 조건으로 이차인수 쪽 무리근 둘을 기각"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "f'(a) 조건으로 미정계수 구하기(합성·몫)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    미분 자체는 표준(바깥 세제곱 × 안쪽 몫의 미분)이지만 $x=0$ 을 넣으면 $3a^2(2-a)=3$, 즉 $a^3-2a^2+1=0$ 이라는 삼차방정식이 나와 인수분해 뒤 「정수」라는 사후 필터로 무리근을 기각해야 한다 — I-VF d1. 통찰 1개·depth 1 이라 +1 조건에 못 미쳐 STEP 1 출발점 ★2 유지(문항 체감은 STEP 1 상단).
  tier: star_2
  mechanism_primary: "f'(x)=3{(2x+a)/(x+1)}^2·(2-a)/(x+1)^2 → x=0 대입 → a^3-2a^2+1=0 → (a-1)(a^2-a-1)=0 에서 정수근 a=1"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/141-274.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "바깥 지수 3, 분자 계수 2, 분모 x+1 의 상수항, f'(0) 의 값 3. 제약: 삼차방정식이 유리근 하나를 갖도록 f'(0) 값을 잡아야 하고(조립제법으로 떨어질 것), 나머지 이차인수의 근이 무리수여야 「정수」 필터가 실제로 작동한다 — 이차인수가 정수근을 가지면 답이 둘이 되어 문항이 깨진다."
    creative: "(1) 「정수」를 「모든 실수 a 의 합」으로 바꾸면 근과 계수의 관계로 2 가 되어 141-275 골조와 합쳐진다(★2) (2) 바깥 지수를 n 으로 두고 a 를 n 의 식으로 쓰게 하면 Mₐ 상승 ★3 (3) f'(0)=3 대신 f'(0)>0 부등식으로 바꾸면 삼차부등식 + 정수 범위로 ★3."
```

```yaml
- id: GN-CALC2-141-275
  page: 141
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $f(x)=\ln|x^3+2|$ 일 때 $f'(a)=1$ 을 만족시키는 모든 실수 $a$ 의 값의 합.
  category: "ln|f| 의 도함수 f'/f → f'(a)=1 을 삼차방정식으로 → 근과 계수의 관계로 합"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 3
      type: I-SC
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "세 근을 모두 구해 더하는 갈래 대신 a^3-3a^2+2=0 의 근의 합을 근과 계수의 관계로 바로 읽는 갈래 선택"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "f'(a)=k 를 만족시키는 모든 a 의 합(근과 계수의 관계)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $f'(x)=\dfrac{3x^2}{x^3+2}$ 에서 $f'(a)=1$ 은 $a^3-3a^2+2=0$ 과 동치이고, 묻는 것이 「근의 합」이므로 인수분해해 $1,\,1\pm\sqrt3$ 을 다 구하지 않아도 근과 계수의 관계로 3 이 바로 나온다 — 갈래 선택 이득이 분명해 I-SC d1. 진수 $x^3+2\neq 0$ 제외점이 근에 포함되지 않는지 확인하는 T-범위 함정이 하나. 통찰 1개·depth 1 → STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "f'=3x^2/(x^3+2) → 3a^2=a^3+2 → a^3-3a^2+2=0 → 근의 합 = 3(진수 0 제외점 아님을 확인)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/141-275.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "진수의 상수항 2, 차수 3, 조건값 1. 제약: 만들어지는 삼차방정식의 근 중 어느 것도 진수를 0 으로 만들지 않아야 하며(제외점 -∛2 와 근이 겹치면 답이 바뀐다), 차수를 n 으로 올리면 방정식 차수도 n 으로 따라 올라가 근의 합이 n 이 된다."
    creative: "(1) 「모든 a 의 곱」으로 바꾸면 상수항 부호까지 따져야 해 난도가 비슷하게 유지(★2) (2) 「실근의 개수」를 묻는 형태로 바꾸면 삼차함수 그래프 논의가 붙어 ★3 (3) f'(a)=k 의 k 를 문자로 두고 근이 셋이 되는 k 의 범위를 묻기 — I-BW·I-MI 추가 ★4."
```

```yaml
- id: GN-CALC2-141-276
  page: 141
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $f(x)=\sqrt{1+x^2}$, $g(x)=\sin 2x$ 일 때 $y=(f\circ g)(x)$ 의 $x=\dfrac{\pi}{6}$ 에서의 미분계수.
  category: "합성함수 미분계수 f'(g(a))g'(a) → 무리함수 미분 + 유리화"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "합성함수 (f∘g)'(a) 의 값(무리함수·삼각함수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $g\left(\dfrac{\pi}{6}\right)=\dfrac{\sqrt3}{2}$, $g'\left(\dfrac{\pi}{6}\right)=1$ 을 먼저 구하고 $f'(x)=\dfrac{x}{\sqrt{1+x^2}}$ 에 대입하는 표준 골조다. 마지막에 $\dfrac{\sqrt3}{\sqrt7}$ 를 유리화해 $\dfrac{\sqrt{21}}{7}$ 로 맞추는 마무리가 실점 지점. 통찰 없음·M_total 5 지만 합성 미분·무리함수 미분·유리화 세 도구가 겹쳐 −1 을 적용하지 않고 STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "g(π/6)=√3/2 · g'(π/6)=1 → f'(x)=x/√(1+x^2) 에 대입 → 유리화해 √21/7"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{\sqrt{21}}{7}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/141-276.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "sin 2x 의 각 계수 2, f 의 상수항 1, 대입점 π/6. 제약: g(a) 가 특수각 값이 되어야 근호 안이 간단한 유리수로 떨어지고, g'(a)=2cos 2a 가 0 이 되는 점(a=π/4)을 대입점으로 잡으면 답이 0 이 되어 문항이 무의미해진다."
    creative: "(1) f 와 g 의 순서를 바꿔 (g∘f)'(a) 를 묻기(같은 골조 ★2) (2) (f∘g)(x) 의 최댓값을 묻는 형태로 바꾸면 sin 2x 의 치역 논의가 붙어 ★3 (3) g 를 sin kx 로 두고 (f∘g)'(π/6)=0 이 되는 k 를 묻기 — I-BW 추가 ★3."
```

### 연습문제 STEP 2

```yaml
- id: GN-CALC2-142-277
  page: 142
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    $f(x)=\dfrac{2x-3}{x^2+4}$ 일 때 $f'(x)\ge 0$ 을 만족시키는 모든 정수 $x$ 의 값의 합.
  category: "몫의 미분 → 분모 양수이므로 분자 이차부등식으로 동치 → 정수 해의 합"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "분모 (x^2+4)^2 이 항상 양수임을 근거로 분수부등식 f'(x)≥0 을 분자의 이차부등식으로 동치 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "도함수의 부호 조건 f'(x)≥0 을 만족시키는 정수 x"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    몫의 미분으로 $f'(x)=\dfrac{-2x^2+6x+8}{(x^2+4)^2}$ 를 얻은 뒤, 분모가 항상 양수라는 근거로 부등식을 분자만의 이차부등식으로 옮기는 것이 핵심 동치 변환(I-EQV d1). 양변에 $-1$ 을 곱할 때 부등호 방향(T-부호)과 등호 포함으로 $-1,\,4$ 를 세는 경계(T-경계) 두 함정이 겹쳐 Mₜ 2. STEP 2 출발점 ★3 을 통찰 1개(d1)로 유지.
  tier: star_3
  mechanism_primary: "몫의 미분 → 분모>0 이므로 -2x^2+6x+8≥0 → (x-4)(x+1)≤0 → -1≤x≤4 의 정수 합 9"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$9$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/142-277.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자 2x-3 의 계수, 분모 상수항 4. 제약: 분모는 실수 전체에서 0 이 되지 않아야(상수항 > 0) 동치 변환이 성립하고, 분자 이차식의 두 근이 정수가 되도록 계수를 잡아야 정수 개수 세기가 깔끔하다 — 근이 무리수면 경계 정수를 따로 판정해야 해 난도가 한 단계 오른다."
    creative: "(1) 두 근이 무리수가 되도록 바꿔 경계 정수 판정을 강제하면 I-VF 추가 ★4 (2) f 의 최댓값·최솟값을 묻는 형태로 바꾸면 증감표가 붙어 ★3 (3) 분모를 x^2-4 로 바꾸면 정의역 제외점이 생겨 범위 분할(I-MI)이 추가돼 ★4."
```

```yaml
- id: GN-CALC2-142-278
  page: 142
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    $g(x)=x^3+1$ 이고 $(f\circ g)(x)=xe^x$ 일 때 $f'(9)$.
  category: "합성함수 미분법을 역으로 사용 → g(x)=9 인 x 를 찾아 대입"
  M: {s: 2, k: 2, a: 3, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f 를 구하지 않고, 구하려는 f'(9) 에서 거꾸로 g(x)=9 가 되는 x=2 를 역추적해 f'(g(x))g'(x)=(xe^x)' 에 대입"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "합성함수 조건 (f∘g)(x) 가 주어질 때 f'(a) 역추적"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $g$ 의 역함수를 구해 $f$ 를 복원하려 하면 막히고, 양변을 미분한 $f'(g(x))\,g'(x)=(x+1)e^x$ 에서 $g(x)=9$ 가 되는 $x=2$ 를 역으로 찾아 넣는 것이 유일한 경로다 — 결과 조건에서 원인을 역추적하는 I-BW d2. $f$ 가 미지 함수라 Mₐ 3, $g'(2)=12$ 를 빠뜨리는 함정이 하나. STEP 2 출발점 ★3 을 통찰 1개(d2)로 유지(+1 은 depth 3 부터).
  tier: star_3
  mechanism_primary: "양변 미분 f'(g(x))g'(x)=(x+1)e^x → g(x)=9 인 x=2 → f'(9)·12=3e^2 → e^2/4"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{e^2}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/142-278.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "g 의 차수·상수항(x^3+1), 오른쪽 함수 xe^x, 묻는 점 9. 제약: 묻는 점 a 에 대해 g(x)=a 를 만족시키는 x 가 유일한 유리수여야 한다 — g 가 짝수 차수면 x 가 둘이 되어 분기(I-MI)가 새로 생기고, a 를 g 의 치역 밖으로 잡으면 문항이 성립하지 않는다."
    creative: "(1) g 를 x^2+1 같은 짝수 차수로 바꿔 x 가 둘 나오게 하면 I-MI 추가 ★4 (2) f'(9) 대신 f(9) 를 묻고 f 를 실제로 복원하게 하면 역함수 계산이 붙어 ★4 (3) 오른쪽을 x ln x 로 바꾸면 정의역 조건이 추가돼 ★4."
```

```yaml
- id: GN-CALC2-142-279
  page: 142
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 STEP 2"
  summary: |
    $f(x)=\ln(x^2-x+2)$, 미분가능한 $g$ 에 대해 $h(x)=f(g(x))$. $\displaystyle\lim_{x\to 2}\dfrac{g(x)-4}{x-2}=12$ 일 때 $h'(2)$. 5지선다.
  category: "극한 조건에서 g(2)·g'(2) 를 읽어냄 → h'(2)=f'(g(2))g'(2)"
  M: {s: 2, k: 2, a: 3, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "분모가 0 으로 가는데 극한이 유한하므로 분자도 0 → g(2)=4 이고 남은 극한이 g'(2)=12 라는 두 정보를 한 조건에서 동시에 읽어냄"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "극한 조건에서 g(a)·g'(a) 를 읽어 h'(a)=f'(g(a))g'(a) 에 대입"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    주어진 극한 하나가 $g(2)=4$ 와 $g'(2)=12$ 두 값을 동시에 담고 있고, 이를 분리해 읽어내는 것이 유일한 장벽이다(I-EQV d1). 그다음은 $f'(x)=\dfrac{2x-1}{x^2-x+2}$ 에 $g(2)=4$ 를 넣어 $\dfrac12$, 여기에 12 를 곱하는 표준 절차. $g$ 가 미지 함수라 Mₐ 3. 교육청 기출 태그는 통찰 1개(d1)로 +0. STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "극한 조건 → g(2)=4, g'(2)=12 → h'(2)=f'(4)·12 = (7/14)·12 = 6"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/142-279.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "극한값 12, g(2)=4 를 만드는 분자의 상수 4, f 의 진수 x^2-x+2, 대입점 2. 제약: 진수는 실수 전체에서 양수(판별식 < 0)여야 h 가 실수 전체에서 정의되고, f'(g(2)) 가 간단한 유리수가 되도록 g(2) 를 잡아야 선택지가 정수로 떨어진다."
    creative: "(1) 극한 조건을 g(2)=4 와 g'(2)=12 두 줄로 나눠 주면 통찰이 사라져 ★2 로 내려간다 — 이 문항의 ★ 를 지탱하는 지점 (2) h'(2) 대신 h 의 접선 방정식을 묻기(★3~4) (3) f 의 진수를 판별식 0 인 이차식으로 바꾸면 정의역 제외점이 생겨 I-VF 추가 ★4."
```

```yaml
- id: GN-CALC2-142-280
  page: 142
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    $f(x)=x^{\cos x}\ (x>0)$ 일 때 $\displaystyle\lim_{x\to\frac{\pi}{2}}\dfrac{f(x)-1}{x-\dfrac{\pi}{2}}$.
  category: "f(π/2)=1 임을 알아채 미분계수 정의로 환원 → 로그미분법으로 f'(π/2)"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "분자의 1 이 f(π/2)=(π/2)^0=1 임을 알아채 주어진 극한을 미분계수 f'(π/2) 의 정의로 동치 변환"
    - step: 2
      type: I-SC
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "밑과 지수가 모두 변수라 거듭제곱·지수함수 공식이 통하지 않음을 판단하고 로그미분법 갈래를 선택"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "x^{g(x)} 꼴의 미분계수를 극한 정의로 구하기(로그미분법)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    두 개의 서로 다른 단계에 통찰이 하나씩 붙는다 — 먼저 분자의 1 을 $f\left(\dfrac{\pi}{2}\right)$ 로 되읽어 극한을 미분계수 정의로 바꾸고(I-EQV), 그다음 밑·지수가 모두 변수라 로그미분법을 골라야 한다(I-SC). $\dfrac{f'}{f}=-\sin x\ln x+\dfrac{\cos x}{x}$ 에 $x=\dfrac{\pi}{2}$ 를 넣으면 $f=1$ 이라 그대로 답이 된다. 통찰 2개 → +1 후보 발동으로 STEP 2 출발점 ★3 에서 ★4. [분류 이슈] 실제 도구는 로그미분법 하나뿐이라 체감은 ★3 일 수 있다.
  tier: star_4
  mechanism_primary: "분자 1 = f(π/2) → 극한 = f'(π/2) → 로그미분법으로 f'/f = -sin x·ln x + cos x/x → x=π/2 대입"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\ln\dfrac{2}{\pi}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/142-280.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 cos x(→ sin x · ln x), 극한의 기준점 π/2. 제약: 기준점에서 지수가 0 이 되어야 f=1 이 되고 분자의 상수 1 이 f(기준점) 과 맞아떨어진다 — 지수를 sin x 로 바꾸면 기준점을 π 로 옮겨야 하고, 기준점이 지수 0 을 만들지 않으면 분자의 상수도 함께 바꿔야 한다."
    creative: "(1) 분자의 1 을 f(a) 로 명시해 주면 I-EQV 가 사라져 ★3 으로 내려간다 — ★4 를 지탱하는 지점 (2) 지수를 ln x 로 바꾸면 x^{ln x} 가 되어 로그미분 뒤 2ln x/x 로 정리(★4 유지) (3) 극한값을 주고 지수의 계수를 역으로 묻게 하면 I-BW 추가 ★5 후보."
```

### 연습문제 실력 UP

```yaml
- id: GN-CALC2-142-281
  page: 142
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    $\seg{BC}=1$, $\angle\pt{ABC}=\dfrac{\pi}{3}$, $\angle\pt{ACB}=2\theta$ 인 삼각형 $\pt{ABC}$ 의 내접원 반지름을 $r(\theta)$ 라 할 때 $r'\left(\dfrac{\pi}{6}\right)$ ($0<\theta<\dfrac{\pi}{3}$).
  category: "각 관계 → 사인법칙·내접원 반지름으로 r(θ) 를 세움 → 미분 후 덧셈정리로 정리"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "도형 배치(변 1 · 두 각)를 θ 하나의 함수식 r(θ) 로 옮기는 기하→대수 전환 — 어떤 내접원 공식을 쓸지가 이 전환의 성패를 가른다"
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "미분해 나온 분자 cos θ cos(π/3-θ) - sin θ sin(π/3-θ) 를 덧셈정리로 cos(π/3) 한 덩어리로 묶어 상수화"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "도형의 길이를 각의 함수로 세워 미분하기(내접원 반지름)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    내각의 합에서 $\angle A=\dfrac{2\pi}{3}-2\theta$ 를 얻고 사인법칙과 내접원 반지름 공식으로 $r(\theta)$ 를 $\theta$ 만의 식으로 세우는 전환이 이 문항의 전부다(I-RT d2 — 식 세우기에 실패하면 미분까지 가지 못한다). 세운 뒤에는 몫의 미분 결과를 덧셈정리로 $\cos\dfrac{\pi}{3}$ 로 묶는 정리가 한 번 더 필요하다(I-EQV d1). 통찰 2개로 +1 후보가 걸리지만 ★5 조건(통찰 3개 이상 + SC/VF/SYM/XU)을 채우지 못해 실력 UP 출발점 ★4 유지. $0<\theta<\dfrac{\pi}{3}$ 범위(T-범위)가 함정.
  tier: star_4
  mechanism_primary: "∠A=2π/3-2θ → 사인법칙·내접원 공식으로 r(θ) 를 θ 만의 식으로 → 미분 후 덧셈정리로 분자를 cos(π/3) 로 묶음 → θ=π/6 대입"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{1}{3}$'
  answer_source: "답지"
  figure: "crop:fig-142-281.png"
  latex: latex-bank/gn-calc2/items/142-281.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "고정각 π/3, 변 BC=1, 미분계수를 묻는 점 π/6. 제약: 세 내각의 합이 π 이므로 고정각 B 와 2θ 의 범위가 서로를 제약한다(0<2θ<π-B) — 고정각을 바꾸면 θ 의 정의역 단서도 함께 바꿔야 한다. 대입점은 삼각형이 정삼각형·직각삼각형 같은 특수 배치가 되는 각으로 잡아야 답이 유리수로 떨어진다."
    creative: "(1) 내접원 반지름 대신 외접원 반지름·넓이·둘레를 묻기(같은 전환 골조 · 식이 단순해지면 ★3) (2) r(θ) 의 최댓값을 묻는 형태로 바꾸면 도함수 부호 분석이 붙어 ★5 후보 (3) 변 BC 대신 둘레를 1 로 고정하면 식 세우기가 급격히 어려워져 I-SC 가 추가되고 ★5 가 된다."
```

```yaml
- id: GN-CALC2-142-282
  page: 142
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    $\displaystyle\lim_{x\to 0}\dfrac{1}{x}\ln\dfrac{e^x+e^{2x}+\cdots+e^{nx}}{n}=13$ 을 만족시키는 자연수 $n$.
  category: "극한을 F(0)=0 인 함수의 미분계수 정의로 환원 → F'(0)=(1+2+…+n)/n"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "F(x)=ln{(Σe^{kx})/n} 로 놓으면 F(0)=ln 1=0 이므로 주어진 식이 {F(x)-F(0)}/(x-0) 즉 F'(0) 의 정의와 동치임을 알아냄"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "n 항 지수합의 로그 극한 = 미분계수 → n 결정"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    $\dfrac1x\ln(\cdots)$ 를 보고 로그 안의 값이 $x\to 0$ 에서 1 이 된다는 것, 즉 극한 전체가 $F'(0)$ 이라는 것을 알아내는 한 수가 이 문항의 전부다(I-EQV d2). 그 뒤는 $F'(x)=\dfrac{\sum k e^{kx}}{\sum e^{kx}}$ 에 $x=0$ 을 넣어 $\dfrac{n(n+1)/2}{n}=\dfrac{n+1}{2}=13$ 을 푸는 표준 절차. 항이 $n$ 개라는 일반항 처리가 Mₐ 2 · T-표기 함정. 통찰 1개(d2)로 +1 조건에 못 미쳐 실력 UP 출발점 ★4 유지.
  tier: star_4
  mechanism_primary: "F(x)=ln{(Σe^{kx})/n}, F(0)=0 → 극한 = F'(0) = (Σk)/n = (n+1)/2 = 13 → n=25"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$25$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/142-282.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "극한값 13, 분모의 n, 지수의 계수 수열(1,2,…,n). 제약: 분모가 항의 개수 n 과 같아야 로그 안이 x→0 에서 1 이 되어 F(0)=0 이 성립한다 — 분모를 다른 수로 바꾸면 극한이 발산해 문항이 깨진다. 극한값은 (n+1)/2 꼴이므로 자연수 해가 나오려면 홀수여야 한다."
    creative: "(1) 지수를 1,3,5,…,(2n-1) 같은 다른 수열로 바꾸면 Σk 공식이 달라져 같은 골조로 난도 유지(★4) (2) 분모 n 을 문자로 두고 극한이 유한할 조건까지 묻게 하면 I-VF 추가 ★5 후보 (3) 로그를 벗기고 극한을 (Σe^{kx}/n)^{1/x} 꼴로 주면 e 의 정의까지 엮여 ★5."
```

## 표본 판정 요약 (26문)

- ★ 분포: ★1 1 · ★2 16 · ★3 6 · ★4 3 · ★5 0
- 통찰형 12 · 절차형 14 · premium 0
- 통찰 유형 분포(총 14개 라벨): I-EQV 6 · I-SC 5 · I-RT 1 · I-BW 1 · I-VF 1. depth 2 는 3개(142-278 의 I-BW · 142-281 의 I-RT · 142-282 의 I-EQV)이고 나머지 11개는 depth 1
- type_hint 상위: 「합성함수 미분 공식의 직접 적용 드릴({f(x)}^n · f(g(x)))」 4 · 「로그미분법」 4 · 「합성함수의 미분계수 (f∘g)'(a)」 3 · 「y=ln|f(x)| 계열의 도함수」 3 · 「극한식을 미분계수 정의로 환원」 3 · 「실수 지수·거듭제곱근 함수의 미분」 2
- 그림: 1문(`crop:fig-142-281.png`)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CALC2-137-e5 | 벤더 「필수」 예제(★2 출발)이나 네 소문항 모두 합성함수 미분 공식 1회 적용·통찰 0·M_total 4 라 −1 후보를 적용해 ★1. 딸린 확인체크 137-264(삼중 합성)가 ★2 로 더 높아 예제 < 유제 역전이 남는다 | ★1 / ★2 |
| GN-CALC2-139-268 | 로그미분법 갈래(I-SC)를 통찰로 세면 발전 유제 출발점 ★3 유지, 절차로 보면 M_total 5 로 −1 후보가 걸려 ★2. 직접 몫미분으로도 세 줄에 풀려 전략 이득이 크지 않다 | ★2 / ★3 |
| GN-CALC2-141-274 | 「정수 a」 사후 필터를 I-VF 로 셀지, 삼차식 인수분해의 표준 마무리로 볼지. ★ 는 어느 쪽이든 2 | ★2 |
| GN-CALC2-142-280 | 통찰 2개(I-EQV d1 + I-SC d1)로 +1 후보가 걸려 STEP 2 출발점 ★3 에서 ★4 로 올렸으나 실제로 쓰는 도구는 로그미분법 하나뿐이라 체감은 ★3 일 수 있다 | ★3 / ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위에서 반복된 축은 다섯이다 — (a) 합성함수 미분 공식의 직접 적용 드릴, (b) 합성함수의 미분계수 $(f\circ g)'(a)$, (c) $y=\ln|f(x)|$·$y=\log_a|f(x)|$ 의 도함수, (d) 로그미분법, (e) 실수 지수 $y=x^{\alpha}$ 와 거듭제곱근.
- **통합해도 될 유형**: $\{f(x)\}^n$ 과 $f(g(x))$ 는 같은 공식의 특수형·일반형이라 base ★2 한 유형 + 소태그(거듭제곱형/지수로그삼각형)로 충분하다. $\log_a|f(x)|$ 도 $\ln|f(x)|$ 유형의 밑 변환 변형으로 묶는 편이 낫다.
- **따로 세워야 할 유형**: 「극한식을 미분계수 정의로 환원」(141-273 · 142-280 · 142-282)은 이 단원의 도구(합성·로그미분)와 독립된 축이고 ★3~4 변별이 여기 몰려 있다. base ★3 의 독립 유형으로 두고 뒤 단원(여러 가지 미분법·도함수의 활용)과 연결하는 것이 맞다. 「도형의 길이를 각의 함수로 세워 미분」(142-281)도 기하→대수 전환이 본체라 계산 드릴과 섞지 말고 따로 세운다.
- **로그미분법**은 「밑·지수가 모두 변수($x^{g(x)}$)」와 「곱몫의 거듭제곱 정리」 두 하위 유형으로 나누는 것이 좋다 — 전자는 대안 갈래가 없어 base ★3, 후자는 직접 미분 갈래가 있어 I-SC 가 성립하므로 base ★2~3 으로 값이 갈린다.
- 「확인체크」 base ★ 를 카탈로그가 정할 때는 **개념원리 익히기 통번호의 확인체크(★1)** 와 **필수·발전 예제에 딸린 확인체크 유제(★2~3)** 를 구분해야 한다(01단원 메모와 같은 결론). 이 범위의 확인체크 9문은 모두 후자다.
