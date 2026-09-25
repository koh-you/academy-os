---
name: mechanism-데이터-GN-CALC2-14
description: 개념원리 미적분Ⅱ 14 삼각함수의 도함수(1/1 · 121~123쪽 · 13문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 미적분Ⅱ · 전사본 latex-bank/gn-calc2
  section: 14 삼각함수의 도함수
  unit_code: CALC2-14
  part: "1/1"
  extract_range: "121~123쪽 · 121-e15~123-255"
  total_problems: 13
  unit_total: 13
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·태그·level)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). insight_type 은 insights 유무로만 결정(비면 절차형 · 하나라도 있으면 통찰형). anchor_status 는 null. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-calc2/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-calc2/items/<id>.tex
  image_source: latex-bank/gn-calc2/figures/ (crops.json)
---

# 개념원리 미적분Ⅱ · 14 삼각함수의 도함수 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 미적분Ⅱ 14단원(삼각함수의 도함수)의 121~123쪽 13문항 전수를 다룬다. 전사본의 구역은 네 개다 — 「필수·발전 예제」 7문(필수 예제 상자 3문 `121-e15` · `122-e16` · `122-e17` 과 그 아래 확인체크 유제 4문), 「연습문제 STEP 1」 2문, 「연습문제 STEP 2」 3문, 「연습문제 실력 UP」 1문. 개념원리 고등의 난이도 신호는 구역·태그·level 이다 — 「확인체크」는 개념 확인(★1 출발), 「필수」 예제는 ★2, 「발전」·「특강」은 ★3, 연습문제는 STEP 1 ★2 / STEP 2 ★3 / 실력 UP ★4 출발이다. 다만 이 범위의 확인체크 네 문항은 「개념원리 익히기」 통번호가 아니라 바로 위 필수 예제에 딸린 유제여서 예제와 같은 ★2 출발로 잡았고(같은 은행 01단원과 동일한 처리), 거기서 M_total·통찰로 ±1 조정한 결과를 각 rationale 에 남겼다.

단원 성격상 도구는 셋뿐이다 — (sin x)'=cos x · (cos x)'=−sin x 공식, 곱의 미분법, 그리고 미분계수의 정의. 그래서 변별점은 계산이 아니라 **주어진 극한식을 미분계수 꼴로 읽어 내는가**(122-e16 · 122-248 · 123-251 · 123-252 · 123-253)와 **조각함수의 미분가능 조건 분해**(122-e17 · 122-249 · 123-254) 두 축에 몰려 있고, 마지막 실력 UP 한 문항만 삼각함수의 합성과 범위 검증으로 층이 올라간다. 이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다. 이 범위에 그림 문항은 없다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-CALC2-121-e15
  page: 121
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    ⑴~⑷ 삼각함수가 섞인 네 함수를 미분하기 — $\sqrt{3}\sin x+\cos x$, $\sin x\cos x$, $2\cos^2 x+3\sin^2 x$, $e^x(2\cos x-1)$.
  category: "삼각함수 도함수 공식 + 곱의 미분법 → 항별 도함수"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수를 포함한 함수의 미분(곱의 미분법)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    네 소문항 모두 (sin x)'=cos x, (cos x)'=−sin x 와 곱의 미분법의 직접 적용이다. ⑶ 은 2+sin²x 로 줄여 미분해도 되고 각 항에 곱의 미분을 그대로 써도 같은 줄 수라 전략 분기로 보지 않았다.
    ⑷ 만 지수함수와의 곱이라 한 단계 더 붙는다. 통찰 0·M_total 5 로 −1 후보이지만 소문항 4개에 삼각·지수·배각 정리가 모두 섞여 필수 예제 출발점 ★2 를 유지했다.
  tier: star_2
  mechanism_primary: "각 항의 곱·합 구조 판별 → 삼각함수 도함수 공식과 곱의 미분법 적용 → 삼각 항 정리"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $y''=\sqrt{3}\cos x-\sin x$ ⑵ $y''=\cos^2 x-\sin^2 x$ ⑶ $y''=2\sin x\cos x$ ⑷ $y''=e^x(2\cos x-2\sin x-1)$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/121-e15.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 두 계수(√3, 1), ⑶ 의 두 계수 2·3, ⑷ 의 괄호 안 계수와 상수항. 제약: ⑵⑶ 은 배각공식으로 한 항으로 정리되는 조합이라야 답이 한 줄로 떨어지고, ⑷ 의 밑을 e 가 아닌 a 로 바꾸면 ln a 가 붙어 답 형태가 달라진다."
    creative: "(1) ⑶ 을 a cos²x+b sin²x 로 두고 도함수가 항등적으로 0 이 되는 a, b 관계를 묻기(I-BW 추가 → ★3) (2) 네 도함수 중 우함수·기함수인 것을 고르게 하기(I-SYM 추가 → ★3) (3) ⑷ 를 f'(0) 의 값 한 개로 바꾸면 계산이 한 점으로 줄어 ★1."
```

```yaml
- id: GN-CALC2-121-246
  page: 121
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑷ 네 함수를 미분하기 — $(5x^2-3)\cos x$, $3^x-\sin x$, $\sin^2 x-\cos^2 x$, $\sin 2x-\ln x$.
  category: "다항·지수·로그와 삼각함수의 곱·합 → 곱의 미분법으로 항별 미분"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수를 포함한 함수의 미분(곱의 미분법)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    121-e15 의 유제로 도구만 넓어졌다 — 다항식·지수함수·로그함수가 각각 삼각함수와 붙는다. ⑷ 의 sin 2x 는 합성함수 미분 이전 단계라 2 sin x cos x 로 바꿔 곱의 미분을 쓰는 것이 이 단원의 표준 경로이고, 전사본 답 형태(2cos²x−2sin²x)가 그 경로를 그대로 보여 준다. 그래서 표현 전환으로 세지 않았다.
    통찰 0·M_total 5 로 −1 후보이지만 한 문항에서 네 종류의 미분 공식을 요구하므로 예제와 같은 ★2 를 유지했다.
  tier: star_2
  mechanism_primary: "소문항별 구조 판별 → 곱의 미분법·지수/로그 도함수 적용 → sin 2x 는 2 sin x cos x 로 바꿔 미분"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $y''=10x\cos x-(5x^2-3)\sin x$ ⑵ $y''=3^x\ln 3-\cos x$ ⑶ $y''=4\sin x\cos x$ ⑷ $y''=2\cos^2 x-2\sin^2 x-\dfrac{1}{x}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/121-246.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 다항식 계수·차수, ⑵ 의 지수 밑 3, ⑷ 의 각 계수 2(sin 2x → sin 3x 는 이 단원 도구로는 전개가 길어진다). 제약: ⑷ 는 배각 전개로 곱의 미분이 가능한 각 계수(2 배)에 묶어 두어야 하고, ⑵ 의 밑은 1 이 아닌 양수라야 ln 이 살아 있다."
    creative: "(1) ⑶ 을 sin²x−cos²x 대신 sin⁴x−cos⁴x 로 두어 인수분해 뒤 배각으로 줄이게 하기(I-RT 추가 → ★3) (2) 네 소문항 중 x=0 에서 도함수가 정의되지 않는 것을 고르게 하기(정의역 검증 → ★2~3) (3) ⑴ 을 f'(x)=0 의 해 존재 구간을 묻는 형태로 바꾸기(I-BW → ★4)."
```

```yaml
- id: GN-CALC2-121-247
  page: 121
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $f(x)=x^2\sin x$ 에 대하여 $f'(\pi)$ 의 값.
  category: "곱의 미분법 → 도함수 → 특수각 대입"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수의 도함수와 미분계수의 값"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    곱의 미분법 한 번으로 f'(x)=2x sin x+x² cos x 를 얻고 x=π 를 대입하면 sin π=0, cos π=−1 이라 첫 항이 사라져 답이 한 줄에 나온다.
    통찰 0·M_total 3 으로 확인체크 유제 출발점 ★2 에서 −1 조정해 ★1. 이 범위에서 가장 가벼운 문항이다.
  tier: star_1
  mechanism_primary: "곱의 미분법 → f'(x)=2x sin x+x² cos x → x=π 대입"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-\pi^2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/121-247.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "다항 인수의 차수(x² → x³), 삼각 인수(sin → cos), 대입하는 각 π(π/2·2π 등). 제약: 대입 각은 두 항 중 하나가 0 이 되는 특수각이라야 답이 한 항으로 정리되고, 차수를 올리면 계수만 커질 뿐 골조는 같다."
    creative: "(1) f'(π) 대신 f''(π) 를 묻어 곱의 미분을 두 번 쓰게 하기(★2) (2) f(x)=x² sin x 의 도함수가 0 이 되는 x 를 구간에서 찾게 하면 방정식 x tan x = −2 가 되어 그래프 해석이 붙는다(I-RT → ★4) (3) f(x)=ax² sin x 로 두고 f'(π)=−4π² 인 a 를 묻기(I-BW d1 → ★2)."
```

```yaml
- id: GN-CALC2-122-e16
  page: 122
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    $f(x)=\cos x-\sqrt{5}\sin x$ 에 대하여 $\lim_{h\to 0}\dfrac{f(\pi+h)-f(\pi-2h)}{h}$ 의 값.
  category: "분자에 ±f(π) 삽입 → 계수를 맞춘 미분계수 두 개로 분해 → 3f'(π)"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "분자를 {f(π+h)−f(π)}−{f(π−2h)−f(π)} 로 쪼개고 두 번째 항은 h 의 계수 −2 를 맞춰 미분계수 꼴로 동치 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "미분계수를 이용한 극한값 계산; 삼각함수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    발문의 극한은 그대로는 미분계수 정의가 아니다. 분자에 f(π) 를 더하고 빼 두 극한으로 쪼개야 하고, 두 번째 항은 증분이 −2h 라 −2 를 곱해 분모를 맞춰야 해서 합이 1·f'(π)+2·f'(π)=3f'(π) 가 된다. 계수를 맞추지 않고 f'(π)−f'(π)=0 으로 보는 것이 이 유형의 대표 오답이라 Mₜ 에 1 을 주었다.
    그 뒤 f'(x)=−sin x−√5 cos x 에 π 를 넣는 계산은 한 줄. 통찰 1개(EQV d1)·M_total 5 로 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "분자에 ±f(π) 삽입 → h 계수를 맞춘 미분계수 두 개로 분해 → 3f'(π) 계산"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$3\sqrt{5}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/122-e16.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f 의 두 계수(1, −√5), 기준점 π, 두 증분의 h 계수(+1, −2). 제약: 기준점은 sin·cos 값이 특수각이라야 답이 간단한 무리수로 떨어지고, 답은 (첫 계수)−(둘째 계수) 배의 f'(π) 이므로 계수를 바꾸면 답이 정확히 그 비율로 바뀐다."
    creative: "(1) 증분을 f(π+2h)−f(π−3h) 로 바꿔 5f'(π) 로 만들기(골조·★2 유지) (2) f 를 주지 않고 f'(π)=2 만 준 채 같은 극한을 묻기(Mₐ 상승 → ★3) (3) f 에 |sin x| 처럼 π 에서 좌우 미분계수가 다른 항을 넣어 좌우 분해를 강제하기(I-MI 추가 → ★4)."
```

```yaml
- id: GN-CALC2-122-e17
  page: 122
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    $f(x)=e^x\ (x<0)$, $a\sin x+b\ (x\ge 0)$ 가 $x=0$ 에서 미분가능하도록 하는 상수 $a$, $b$ 에 대한 $a+b$.
  category: "미분가능 → 연속 + 좌우 미분계수 일치 → 두 상수 결정"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수를 포함한 조각함수의 미분가능성"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x=0 에서 미분가능하면 연속이고 좌우 미분계수가 같다는 교과서 정리를 그대로 두 식으로 옮기는 문항이다. 연속에서 e⁰=1=b, 도함수에서 e⁰=1=a cos 0=a 가 나와 a+b=2.
    조건 분해가 정리의 직접 적용이라 통찰로 세지 않았고(같은 골조의 122-249·123-254 도 동일하게 처리), 경계 x=0 의 좌우 처리로 Mₜ 1. M_total 6 이라 −1 조건에 걸리지 않아 필수 예제 ★2 유지.
  tier: star_2
  mechanism_primary: "x=0 연속 조건 → b 결정 → 좌우 미분계수 일치 → a 결정 → a+b"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/122-e17.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "왼쪽 함수(e^x → 2e^x·x+1), 오른쪽 a sin x+b 의 삼각 항(sin → cos 로 바꾸면 연속 조건과 미분 조건의 역할이 뒤바뀐다), 묻는 값(a+b → ab·a−b). 제약: 연속 조건이 먼저 한 상수를, 미분 조건이 나머지를 결정하도록 두 조건이 독립이어야 하고, x=0 에서의 함숫값·미분계수가 모두 간단한 수라야 한다."
    creative: "(1) 좌우 구간을 바꿔 다항식을 오른쪽에 두기(★2 유지) (2) 미분가능이 아니라 연속만 요구하고 미분불가능하게 하는 a 를 묻기(I-BW → ★3) (3) 오른쪽을 a sin x+b cos x 로 두면 두 조건이 같은 상수에 겹쳐 해의 존재를 따로 확인해야 한다(I-VF → ★3~4)."
```

```yaml
- id: GN-CALC2-122-248
  page: 122
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $f(x)=e^x\cos x$ 에 대하여 $\lim_{h\to 0}\dfrac{f\left(\dfrac{\pi}{3}+h\right)-f\left(\dfrac{\pi}{3}-h\right)}{h}$ 의 값.
  category: "대칭 차분 → 2f'(π/3) 로 환원 → 곱의 미분 후 대입"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "분자에 ±f(π/3) 를 넣어 대칭 차분을 f'(π/3)+f'(π/3) 두 미분계수로 동치 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "미분계수를 이용한 극한값 계산; 삼각함수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    122-e16 과 같은 기법이되 증분이 +h·−h 로 대칭이라 계수 맞춤이 없어 한 단계 가볍다. 대신 f'(x)=e^x(cos x−sin x) 를 구하는 곱의 미분과 π/3 의 삼각값 대입이 더해져 계산량이 늘었다.
    [분류 이슈] 대칭 차분을 2f'(a) 로 보는 것을 통찰(EQV d1)로 볼지 암기된 표준 변형으로 볼지가 애매하다. 절차로 보면 절차형·중하위권이 되지만 ★ 는 어느 쪽이든 2 다. 확인체크 유제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "대칭 차분 → 2f'(π/3) 환원 → 곱의 미분으로 f' 계산 → 특수각 대입"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$(1-\sqrt{3})e^{\frac{\pi}{3}}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/122-248.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준점 π/3(π/4·π/6 등 특수각), f 의 두 인수(e^x·cos x → e^x·sin x), 두 증분의 h 계수. 제약: 2f'(a) 가 되려면 두 증분의 절댓값이 같아야 하고, 기준점은 특수각이라야 답이 e^{a}·(간단한 무리수) 꼴로 정리된다."
    creative: "(1) 증분을 +h·−3h 로 비대칭화해 4f'(a) 로 만들기(★2 유지) (2) f 를 주지 않고 f(π/3)·f'(π/3) 값만 주기(Mₐ 상승 → ★3) (3) 이 극한이 0 이 되는 기준점 a 를 구간에서 찾게 하면 tan a=1 방정식이 되어 범위 검증이 붙는다(I-BW+I-VF → ★4)."
```

```yaml
- id: GN-CALC2-122-249
  page: 122
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $f(x)=\sin x+a\ (x\ge 0)$, $bx-1\ (x<0)$ 이 $x=0$ 에서 미분가능하도록 하는 상수 $a$, $b$ 에 대한 $ab$.
  category: "미분가능 → 연속 + 좌우 미분계수 일치 → 두 상수 결정"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수를 포함한 조각함수의 미분가능성"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    122-e17 의 유제로 골조가 같다. 연속에서 sin 0+a=a=−1, 좌우 미분계수에서 cos 0=1=b 가 나와 ab=−1. 왼쪽이 일차함수라 미분계수가 기울기 b 로 바로 읽혀 e17 보다 한 단계 가볍다.
    매개변수 2개와 경계 처리로 M_total 6 이라 −1 에 걸리지 않고, 확인체크 유제 출발점 ★2 유지. 통찰 없음.
  tier: star_2
  mechanism_primary: "x=0 연속 → a 결정 → 좌우 미분계수 일치 → b=cos 0 → ab"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/122-249.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "왼쪽 일차함수의 상수항 −1, 오른쪽 삼각 항(sin → cos), 묻는 값(ab → a+b). 제약: 왼쪽의 상수항이 연속 조건으로 a 를 결정하므로 두 식이 같은 상수를 동시에 건드리지 않아야 하고, 기울기 b 는 x=0 에서의 삼각함수 도함수 값과 같아야 한다."
    creative: "(1) 왼쪽을 이차함수 bx²−1 로 바꾸면 미분계수가 0 이 되어 b 가 결정되지 않는 함정 문항이 된다(I-VF → ★3) (2) 미분가능한 (a, b) 가 존재하지 않는 조각함수를 고르는 보기형(★3) (3) a, b 를 구한 뒤 f(π/2) 나 f(−1) 값을 추가로 묻기(★2 유지 · 123-254 형태)."
```

### 연습문제 STEP 1

```yaml
- id: GN-CALC2-123-250
  page: 123
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $f(x)=a\sin x+b\cos x$ 가 $f'\left(\dfrac{\pi}{4}\right)=0$, $f'\left(\dfrac{\pi}{6}\right)=\sqrt{3}-1$ 일 때 상수 $a$, $b$ 에 대한 $ab$.
  category: "도함수 계산 → 두 특수각 대입 → 연립으로 미정계수 결정"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미분계수 조건으로 미정계수 정하기; 삼각함수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(x)=a cos x−b sin x 에 두 각을 대입하는 표준 미정계수 연립이다. π/4 조건은 (√2/2)(a−b)=0 이라 a=b 를 먼저 주고, 이를 π/6 조건에 넣으면 a(√3−1)/2=√3−1 이 되어 a 가 한 줄에 나온다.
    조건을 어느 순서로 쓰느냐가 계산량을 바꾸지만 도구는 하나뿐이라 전략 분기로 보지 않았다. 통찰 0·M_total 6 이라 −1 에 걸리지 않아 STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "f'(x)=a cos x−b sin x → 두 특수각 대입 → a=b 먼저 확정 → ab"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/123-250.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 각(π/4·π/6)과 두 조건값(0, √3−1). 제약: 한 조건을 f'=0 으로 두면 a 와 b 의 비가 먼저 나와 연립이 한 번에 풀리고, 두 각을 특수각이 아닌 값으로 두거나 같은 각으로 두면 연립이 결정되지 않거나 답이 정수로 떨어지지 않는다."
    creative: "(1) 조건을 f(π/4) 와 f'(π/4) 로 섞어 원함수·도함수를 함께 쓰게 하기(★2 유지) (2) f'(x)=0 의 해가 주어진 구간에 하나뿐이도록 하는 조건으로 바꾸면 합성과 범위 해석이 붙어 ★4 (3) a, b 가 정수라는 조건만 주고 f'(π/6) 의 가능한 값을 모두 묻기(I-MI → ★3)."
```

```yaml
- id: GN-CALC2-123-251
  page: 123
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $f(x)=\lim_{h\to 0}\dfrac{x\sin(x+h)-x\sin x}{h}$ 로 정의된 $f$ 에 대하여 $f'\left(\dfrac{\pi}{2}\right)$ 의 값.
  category: "극한 속 x 는 상수 → 공통인수 분리 → f(x)=x cos x → 곱의 미분"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "h→0 극한에서 x 를 상수로 보고 공통인수 x 를 밖으로 빼, 남은 극한을 (sin x)' 의 정의 꼴로 동치 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "극한으로 정의된 함수의 도함수; 삼각함수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분자의 공통인수 x 는 h 와 무관하므로 극한 밖으로 나오고 남은 것이 (sin x)'=cos x 라서 f(x)=x cos x 다. 여기서 다시 곱의 미분법을 써 f'(x)=cos x−x sin x 를 얻고 π/2 를 대입한다.
    극한 변수 h 와 미분 변수 x 를 혼동하면 첫 줄에서 막히는 지점이라 Mₜ 1 과 EQV d1 을 함께 두었다. 미분을 두 번(정의로 한 번, 공식으로 한 번) 쓰는 이중 구조가 이 문항의 성격이며 STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "x 를 상수로 보고 공통인수 분리 → f(x)=x cos x → 곱의 미분 → x=π/2 대입"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-\dfrac{\pi}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/123-251.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공통인수의 차수(x → x²), 안쪽 삼각함수(sin → cos), 마지막 대입 각 π/2. 제약: 공통인수는 h 를 포함하지 않아야 밖으로 나오고, 대입 각은 cos x−x sin x 의 두 항 중 하나가 0 이 되는 특수각이라야 답이 한 항으로 정리된다."
    creative: "(1) 분자를 sin(x+h)cos x−sin x cos x 로 바꿔 공통인수를 cos x 로 두기(골조·★2 유지) (2) 같은 정의를 f'(x) 자리에 놓아 f 가 이계도함수로 이어지게 하기(★3) (3) 분모를 2h 로 바꿔 계수 맞춤 단계를 하나 더 붙이기(Mₜ +1 · ★2 유지)."
```

### 연습문제 STEP 2

```yaml
- id: GN-CALC2-123-252
  page: 123
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $f(x)=\sin^2 x$ 에 대하여 $\lim_{x\to\pi}\dfrac{f'(x)}{x-\pi}$ 의 값.
  category: "f'(π)=0 확인 → 분자를 f'(x)−f'(π) 로 → 이계미분계수 f''(π)"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "분모가 0 으로 가는데 f'(π)=0 임을 확인해 분자를 f'(x)−f'(π) 로 읽고, 극한 전체를 도함수 f' 의 x=π 에서의 미분계수로 동치 변환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "도함수의 극한을 이계미분계수로 환원하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f'(x)=2 sin x cos x 는 x=π 에서 0 이므로 이 극한은 0/0 꼴이고, 곧 f' 의 x=π 에서의 미분계수다. f''(x)=2(cos²x−sin²x) 에 π 를 넣으면 답이 나온다.
    t=x−π 로 치환해 sin 2t/t 기본 극한으로 가는 갈래도 있지만 같은 계열 도구라 전략 분기(I-SC)로 세지 않았다. 미분한 함수를 한 번 더 미분계수로 읽는 한 단계(EQV d2)가 실제 걸림돌이어서 STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "f'(x)=2 sin x cos x → f'(π)=0 확인 → 미분계수 정의로 f''(π) 환원 → 값 계산"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/123-252.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f 의 계수와 꼴(sin²x → 3sin²x·sin x cos x), 기준점 π(0·π/2 등). 제약: 기준점에서 반드시 f'=0 이라야 0/0 꼴이 되어 미분계수로 환원되고, f'(기준점)≠0 이면 극한이 발산한다."
    creative: "(1) 기준점을 f'≠0 인 점으로 바꿔 극한이 존재하지 않음을 판정하게 하기(I-VF 추가 → ★3) (2) 분자를 f(x)−f(π) 로 낮춰 일계 미분계수만 묻기(★2) (3) f 를 a sin²x+b 로 두고 이 극한이 1 이 되게 하는 a 를 묻기(I-BW 추가 → ★4)."
```

```yaml
- id: GN-CALC2-123-253
  page: 123
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $f(x)=\sin x+\cos x$ 일 때 $\lim_{x\to a}\dfrac{\{f(x)\}^2-\{f(a)\}^2}{x-a}=1$ 을 만족시키는 실수 $a$ 에 대한 $\sin^2 a$ 의 값.
  category: "극한을 g={f(x)}² 의 미분계수로 → g'(a)=1 → 배각으로 sin²a"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "분자가 제곱한 함수의 차이 꼴임을 보고 극한 전체를 g(x)={f(x)}² 의 x=a 에서의 미분계수로 읽어 조건을 g'(a)=1 로 동치 변환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "제곱한 함수의 미분계수 조건에서 삼각식 값 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f 를 미분해 놓고 주어진 극한을 f' 로 맞추려 하면 막힌다. 분자는 g(x)={f(x)}² 의 차이이므로 조건은 g'(a)=1 이고, g=1+2 sin x cos x 로 정리하면 g'(x)=2(cos²x−sin²x) 가 되어 cos 2a=1/2 가 나온다.
    그 뒤 배각공식 cos 2a=1−2sin²a 로 묻는 값으로 옮기는 것은 표준 계산이라 통찰로 세지 않았다. 제곱을 먼저 전개해 배각으로 줄이는 판단(EQV d2) 하나가 핵심이고 STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "극한을 g={f(x)}² 의 미분계수로 → g'(a)=1 → cos 2a=1/2 → 배각으로 sin²a"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{1}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/123-253.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f 의 두 계수(sin x+cos x → sin x+√3 cos x), 극한값 1, 묻는 값(sin²a → cos 2a·sin a cos a). 제약: {f(x)}² 가 배각 꼴로 정리되는 계수 조합이라야 하고, 극한값은 g' 의 진폭(여기서는 2) 이하라야 그런 a 가 존재한다."
    creative: "(1) f 를 sin x−cos x 로 바꿔 부호만 뒤집기(골조·★3 유지) (2) a 의 범위를 주고 조건을 만족하는 a 를 모두 구하게 하면 해 개수 확인이 붙어 ★4(I-VF 추가) (3) 극한값을 3 처럼 진폭 밖 값으로 두고 그런 a 가 없음을 보이게 하기(I-BW+I-VF → ★4)."
```

```yaml
- id: GN-CALC2-123-254
  page: 123
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $f(x)=\cos x\ (x\le 0)$, $3x^2+ax+b\ (x>0)$ 가 $x=0$ 에서 미분가능할 때 $f(2)$ 의 값.
  category: "미분가능 → 연속 + 좌우 미분계수 일치 → 상수 결정 → 함숫값 대입"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수를 포함한 조각함수의 미분가능성"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    122-e17·122-249 와 같은 골조다. 연속에서 cos 0=1=b, 좌우 미분계수에서 −sin 0=0=a 가 나오고 f(2)=12+0+1 로 끝난다. 조건 분해 뒤 값을 한 번 더 대입하는 것뿐이라 통찰 0·절차형.
    [분류 이슈] 벤더는 STEP 2(★3 출발)이지만 같은 유형의 확인체크 유제(122-249)와 노동량·통찰이 같고 대입 한 줄만 늘어 ★2 로 내렸다. 라벨을 벤더에 맞추지 않고 기록만 남긴다.
  tier: star_2
  mechanism_primary: "x=0 연속 → b=1 → 좌우 미분계수 일치 → a=0 → f(2) 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$13$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/123-254.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "오른쪽 이차항의 계수 3, 묻는 함숫값 f(2), 왼쪽 삼각함수(cos → sin 이면 연속 조건이 b=0 으로 바뀐다). 제약: 왼쪽 함수의 x=0 에서의 값이 b 를, 도함수 값이 a 를 결정하므로 좌변이 x=0 에서 미분가능한 함수라야 하고, 묻는 점은 오른쪽 구간(x>0)에 있어야 한다."
    creative: "(1) f(2) 대신 f(−π) 를 물어 왼쪽 식을 쓰게 하기(★2 유지) (2) 오른쪽을 3x²+ax+b 대신 a x³+b|x| 로 바꿔 미분가능하지 않은 경우를 걸러내게 하기(I-VF → ★3) (3) 미분가능한 a, b 가 존재하도록 하는 왼쪽 함수를 보기에서 고르기(I-MI → ★3)."
```

### 연습문제 실력 UP

```yaml
- id: GN-CALC2-123-255
  page: 123
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $f(x)=\sqrt{3}\cos x-\sin x-x$ 에 대하여 $0\le a\le\dfrac{\pi}{2}$ 에서 $f'(a)=-\sqrt{2}-1$ 을 만족시키는 $a$ 의 값.
  category: "f' 계산 → 상수항 소거 → 삼각함수 합성 → 범위 안 해 선택"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "√3 sin a+cos a 를 한 개의 사인함수 2 sin(a+π/6) 으로 합성해, 두 삼각함수가 섞인 방정식을 풀 수 있는 표현으로 전환"
    - step: 2
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "sin 값이 √2/2 인 두 각 후보 중 a+π/6 이 [π/6, 2π/3] 안에 드는 쪽만 남기고 나머지를 범위 위배로 기각"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "삼각함수의 합성으로 f'(a) 방정식 풀기"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    f'(x)=−√3 sin x−cos x−1 이므로 조건의 상수 −1 이 양변에서 지워지고 √3 sin a+cos a=√2 가 남는다. 좌변을 2 sin(a+π/6) 으로 합성하는 것이 이 문항의 전환점이고(RT d2), 그 다음 sin 값이 √2/2 인 각이 둘인데 주어진 범위가 옮겨 간 구간 [π/6, 2π/3] 안에 드는 쪽만 답이 된다(VF d1).
    합성 없이 제곱해 풀면 부호 검증이 더 무거워진다. 통찰 2개·M_total 6 으로 실력 UP 출발점 ★4 유지. ★5 는 통찰 3개 이상 조건에 못 미친다.
  tier: star_4
  mechanism_primary: "f' 계산 → 상수항 소거 → 2 sin(a+π/6)=√2 합성 → 옮긴 구간에서 유효한 해만 선택"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{\pi}{12}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/123-255.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "합성 전 두 계수(√3, 1 → 합성각 π/6 과 진폭 2), 우변의 −√2 부분, a 의 범위와 f 의 −x 항 계수. 제약: 두 계수는 √(p²+q²) 가 간단한 수가 되는 조합이라야 하고, 우변의 삼각 부분은 진폭 이하라야 해가 존재하며, 범위는 두 후보 중 하나만 남기도록 잡아야 답이 유일하다."
    creative: "(1) 범위를 0≤a≤π 로 넓히면 두 해가 모두 살아 기각 단계가 사라지고 I-VF 가 빠져 ★3 (2) −x 항을 −kx 로 두고 그런 a 가 존재할 k 의 범위를 묻기(I-BW 추가 · 진폭 해석 → ★5 후보) (3) f'(a) 의 최솟값과 그때의 a 를 묻는 최대·최소형으로 바꾸기(합성 뒤 범위 해석 · ★4 유지)."
```

## 표본 판정 요약 (13문)

- ★ 분포: ★1 1 · ★2 9 · ★3 2 · ★4 1 · ★5 0
- 통찰형 6(`122-e16` · `122-248` · `123-251` · `123-252` · `123-253` · `123-255`) · 절차형 7 · premium 0
- 통찰 유형 분포: I-EQV 5(d1 3 · d2 2) · I-RT 1(d2) · I-VF 1(d1). 통찰 2개 문항은 `123-255` 하나뿐이다.
- type_hint 상위: 「삼각함수를 포함한 조각함수의 미분가능성」 3 · 「삼각함수를 포함한 함수의 미분(곱의 미분법)」 2 · 「미분계수를 이용한 극한값 계산; 삼각함수」 2 · 나머지 6종 각 1(총 9종)
- 그림: 0문

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CALC2-122-248 | 대칭 차분 {f(a+h)−f(a−h)}/h → 2f'(a) 를 통찰(I-EQV d1)로 볼지 암기된 표준 변형으로 볼지. 절차로 보면 절차형·중하위권이 되고 ★ 는 어느 쪽이든 2 | ★2 |
| GN-CALC2-123-254 | 벤더는 STEP 2(★3 출발)이나 골조·노동량이 확인체크 유제 122-249 와 같고 f(2) 대입만 늘어 ★2 로 판정(1단 하향) | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위의 9종 type_hint 는 사실상 **세 축**으로 묶인다 — (a) 미분 공식·곱의 미분법 적용(121-e15 · 121-246 · 121-247), (b) 주어진 극한을 미분계수로 읽기(122-e16 · 122-248 · 123-251 · 123-252 · 123-253), (c) 조각함수의 미분가능 조건 분해(122-e17 · 122-249 · 123-254). 카탈로그에서는 이 세 축을 독립 유형으로 세우고 나머지는 발문 형식 태그로 흡수하는 편이 낫다.
- (b) 축은 base ★ 를 하나로 두면 안 된다. 증분 계수를 맞추는 것뿐인 122-e16·122-248(★2)과, 분모가 0 이 되는 것을 확인해 이계미분계수로 올라가는 123-252·제곱한 함수로 올라가는 123-253(★3)은 학생이 막히는 지점이 다르다. 「미분계수 꼴로 환원(★2)」과 「한 단계 올린 함수의 미분계수로 환원(★3)」을 나누어 세우는 것이 이 단원 오답 구조에 맞다.
- (c) 축은 삼각함수 단원 고유 유형이 아니라 미분가능성 공통 유형이다. 12·13단원(지수·로그함수의 도함수)에도 같은 골조가 반복되므로 **단원별로 중복 등재하지 말고 하나의 유형에 함수군 태그(지수/로그/삼각)를 붙이는 방식**이 맞다. base ★ 는 2 가 적정이며, 123-254 처럼 STEP 2 에 실려 있어도 노동량은 그대로다.
- 「확인체크」 태그의 base ★ 를 정할 때는 01단원 메모와 같이 **개념원리 익히기 통번호의 확인체크(★1 출발)** 와 **필수·발전 예제에 딸린 확인체크 유제(★2 출발)** 를 구분해야 한다. 이 범위의 246~249 는 후자로 잡았고, 그중 121-247 만 M_total 4·통찰 0 이라 −1 해서 ★1 이 되었다.
- 121-e15·121-246 처럼 소문항 4개짜리 미분 드릴은 통찰 0·M_total 5 라 산식상 −1 후보지만, 한 문항에서 요구하는 공식의 종류가 넷이라 ★2 를 유지했다. 카탈로그를 만들 때 **소문항 묶음 문항의 M 산정 규칙**(소문항 수를 Mₛ 에 반영할지, 도구 종류 수를 별도 축으로 볼지)을 한 번 정해 두면 이 판단이 흔들리지 않는다.
