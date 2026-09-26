---
name: mechanism-데이터-RPM-CALC2-04-p3
description: RPM 미적분Ⅱ 04 삼각함수의 미분(3/3 · 유형 16~19 + 시험에 꼭 나오는 문제 + 서술형 주관식 + 실력 Up) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 미적분Ⅱ (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-calc2
  section: 04 삼각함수의 미분
  unit_code: CALC2-04
  part: "3/3"
  extract_range: "65~71쪽 · 0436~0478"
  total_problems: 42
  unit_total: 119
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-calc2/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-calc2/items/<id>.tex
  image_source: latex-bank/rpm-calc2/figures/ (crops.json)
---

# RPM 미적분Ⅱ · 04 삼각함수의 미분 (3/3) 정독 데이터 (v1.0)

이 파일은 RPM 미적분Ⅱ 04 삼각함수의 미분 단원의 마지막 범위(65~71쪽 · 0436~0478 · 42문항 · 0446 은 전사본에 없는 번호)를 다룬다. 앞 14문(0436~0450)은 「유형 16 삼각함수의 도함수」 · 「유형 17 미분계수를 이용하여 극한값 구하기; 삼각함수」 · 「유형 18 함수의 미분가능성; 삼각함수」 · 「유형 19 삼각함수의 극한의 도형에의 활용」의 유형별 문제(각 유형 첫 문항이 「대표문제」 · 나머지는 난이도 「중」「상중」)이고, 이어 「시험에 꼭 나오는 문제」 21문(0451~0471 · 난이도 표시 없음 · 태그 「중요」 3 · 「교육청 기출」 3 · 「평가원 기출」 1)이 삼각함수의 덧셈정리부터 도함수까지 중단원 전체를 되짚으며, 끝에 「서술형 주관식」 4문(0472~0475)과 「실력 Up」 3문(0476~0478)이 붙는다. RPM 은 구역이 곧 난이도 층이므로 유형 구역은 ★2(「상중」은 ★3), 종합 구역은 ★2~3, 서술형은 ★3, 실력 Up 은 ★4 를 출발점으로 삼았다. 그림은 9문(0447 · 0448 · 0449 · 0450 · 0456 · 0457 · 0471 · 0475 · 0478)에 있다.

출발점에서 M_total·통찰로만 ±1 조정했다. 유형 16~18 은 전부 절차형이라 ★2 그대로이고(M_total 4 라도 두 기법이 사슬로 이어지면 ★2 유지 · 한 단계짜리 M_total 4 만 −1), 유형 19 는 「상중」 두 문항(0449 · 0450)이 도형 조건을 θ 의 삼각식으로 옮기는 RT 통찰을 갖는다. 종합 구역은 한 단계짜리 두 문항(0451 · 0461)을 ★1 로 내렸고, 덧셈정리 조건을 변환하는 문항(0452 · 0454 · 0455 · 0458)과 도형·각 분해 문항(0457 · 0471)을 통찰형 ★2~3 으로 판정했다. 서술형 4문 중 3문은 통찰 0·M_total ≤ 5 라 ★2 로 내렸고, 실력 Up 3문 중 0476 · 0477 은 통찰 1개짜리 표준 골조라 ★3 으로 내리고 [분류 이슈] 로 기록했으며 0478 만 통찰 2개(RT d2 + EQV d2)·M_total 8 의 ★4 다. 결과는 ★1 2 · ★2 27 · ★3 12 · ★4 1 · 통찰형 11 이다.

주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(유형 코드 + depth + 근거 · 절차형은 빈 배열) · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 창의 변형과 ★ 변동 지점)를 채웠다. 유형 카탈로그가 없는 과목이므로 `type_id`·`base_star` 는 null 이고 `type_hint` 로 유형명을 제안했다. 미지 함수 f·g 가 「값 하나짜리 인자」로만 쓰이는 문항(0462 · 0469 · 0476)은 Mₐ 를 2 로 두었다(일반 함수 추상 3 은 함수 구조 자체를 다뤄야 할 때만).

## 문항 데이터

### 유형 16 삼각함수의 도함수

```yaml
- id: RPM-CALC2-0436
  page: 65
  vendor_label: "유형 16 삼각함수의 도함수"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    f(x)=e^x(3cos x−2) 에 대하여 f'(0) 의 값. 5지선다.
  category: "곱의 미분 → x=0 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수를 포함한 함수의 미분계수(곱의 미분)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    곱의 미분 f'(x)=e^x(3cos x−2)+e^x(−3sin x)=e^x(3cos x−2−3sin x) 에 x=0 을 넣으면 3−2=1. 지수·삼각 도함수와 곱의 미분이 사슬로 이어지는 유형 대표문제라 M_total 4 지만 한 단계짜리가 아니므로 벤더 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "곱의 미분 f'(x)=e^x(3cos x−2−3sin x) → x=0 대입 → 1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0436.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 3·−2 와 대입점(0 · π/2 · π)을 바꿀 수 있음. 제약: 대입점에서 sin·cos 값이 유리수나 간단한 무리수가 되고 선택지 5개가 서로 다른 값이 되게. e^x 대신 e^{-x}·x 곱도 가능."
    creative: "(1) f'(a)=0 인 a 를 묻기(tan 방정식 · ★2) (2) 몫의 미분 e^x/(cos x+2) 로 바꾸면 Mk 상승(★2) (3) 접선의 방정식·법선까지 묻는 서술형(★2~3)."
```

```yaml
- id: RPM-CALC2-0437
  page: 65
  vendor_label: "유형 16 삼각함수의 도함수"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=a sin x cos x+b 의 그래프가 점 (π/3, 1) 을 지나고 그 점에서의 접선의 기울기가 −√3/2 일 때 상수 a, b 의 곱 ab.
  category: "배각으로 정리 → 지나는 점·기울기 두 조건 연립 → ab"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "접선의 기울기 조건으로 삼각함수의 계수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f(x)=(a/2)sin 2x+b 로 정리하면 f'(x)=a cos 2x. f'(π/3)=−a/2=−√3/2 → a=√3, f(π/3)=√3/4+b=1 → b=1/4, ab=√3/4. 두 조건을 연립하는 절차형 M_total 6 → 유형 「중」 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "sin x cos x=(1/2)sin 2x → f'(π/3)=−a/2 로 a → f(π/3)=1 로 b → ab"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{\sqrt{3}}{4}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0437.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "점의 x좌표(π/6 · π/4)와 기울기·y값을 바꿀 수 있음. 제약: cos 2x 값이 0 이 아닌 점을 골라 a 가 결정되게(π/4 면 f'=0 이라 a 미결정). ab 가 깔끔한 무리수·유리수가 되게 조정."
    creative: "(1) 곱의 미분으로 직접 풀어도 되지만 배각 정리가 빠름 — 두 갈래를 비교시키면 SC 신호 약하게(★2 유지) (2) 접선이 직선 y=mx+k 와 평행·수직이라는 간접 조건(★3) (3) a, b 대신 주기·최댓값 조건과 결합(★3)."
```

```yaml
- id: RPM-CALC2-0438
  page: 65
  vendor_label: "유형 16 삼각함수의 도함수"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=sin x−3cos x 에 대하여 f'(α)=0 일 때 csc²α 의 값. 5지선다.
  category: "도함수=0 → tan α → 1+cot² 로 csc²"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "f'(α)=0 조건에서 tan α 로 삼각함수 값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(x)=cos x+3sin x=0 → tan α=−1/3. csc²α=1+cot²α=1+9=10. 두 항등식이 이어지는 절차형 M_total 5. −1 후보에 걸리지만 도함수 → tan → 역수 항등식 사슬이라 유형 「중」 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "f'(α)=cos α+3sin α=0 → tan α=−1/3 → csc²α=1+cot²α=10"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0438.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 1·−3 을 바꾸면 tan α=−(cos 계수)/(sin 계수). 제약: csc²=1+cot² 가 정수·간단한 분수가 되게 계수를 정수로. 묻는 값을 sec²α·sin 2α·cos 2α 로 교체 가능."
    creative: "(1) f'(α)=0 대신 f(α) 최대 조건(합성 → 같은 tan 결론 · ★2) (2) 0<α<π 범위를 주고 sin α 의 값(부호 결정 T-부호 · ★2) (3) f(x)=a sin x+b cos x 매개변수로 두고 csc²α 를 a, b 로 표현(Ma 상승 ★3)."
```

```yaml
- id: RPM-CALC2-0439
  page: 65
  vendor_label: "유형 16 삼각함수의 도함수"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=sin²x 에 대하여 lim_{x→π} f'(x)/(x−π) 의 값. 5지선다.
  category: "f'(x)=sin 2x → x−π 치환 → sin 2t/t"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수의 도함수와 극한의 결합(f'(x) 의 극한)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(x)=2sin x cos x=sin 2x. t=x−π 로 두면 sin(2π+2t)=sin 2t 이고 sin 2t/t → 2. f'(π)=0 이므로 이 극한을 f''(π)=2cos 2π=2 로 읽어도 됨. 절차형 M_total 5 · 두 기법 사슬 → ★2 유지.
  tier: star_2
  mechanism_primary: "f'(x)=sin 2x → t=x−π 치환 → sin 2t/t → 2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0439.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f(x)=sin²x 를 cos²x·sin 3x 로, 극한점 π 를 π/2·2π 로 바꿀 수 있음. 제약: f'(극한점)=0 이어야 0/0 꼴이 되고, 치환 뒤 sin(2π+2t) 같은 주기 정리가 부호 없이 떨어지도록 극한점을 고름(π/2 면 sin(π+2t)=−sin 2t · T-부호)."
    creative: "(1) f'(x)/(x−π) 대신 f(x)/(x−π)² 로 두면 f(π)=f'(π)=0 이라 sin²t/t² → 1 (★2) (2) 극한을 f''(π) 로 읽는 해석을 묻는 ㄱㄴㄷ(★3 · I-RT d1) (3) f(x)=e^x sin²x 처럼 곱으로 확장(Mk 상승 ★3)."
```

### 유형 17 미분계수를 이용하여 극한값 구하기; 삼각함수

```yaml
- id: RPM-CALC2-0440
  page: 66
  vendor_label: "유형 17 미분계수를 이용하여 극한값 구하기; 삼각함수"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    f(x)=x cos x 에 대하여 lim_{h→0} {f(π+2h)−f(π)}/h 의 값. 5지선다.
  category: "미분계수 정의 꼴로 변형 → 2f'(π)"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미분계수의 정의를 이용한 극한값(삼각함수 · 증분 계수 보정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분모 h 를 2h 로 맞추면 2f'(π). f'(x)=cos x−x sin x, f'(π)=−1 → −2. 정의 변형 + 곱의 미분 절차형 M_total 5, 유형 대표 ★2 유지.
  tier: star_2
  mechanism_primary: "{f(π+2h)−f(π)}/h=2·f'(π) → f'(x)=cos x−x sin x → f'(π)=−1 → −2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0440.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "증분 계수 2 와 점 π 를 바꿀 수 있음(3h · π/2). 제약: f'(점) 이 특수각으로 간단히 계산되는 점. 함수는 x sin x · x² cos x 등 곱 꼴 유지."
    creative: "(1) f(π−h) 꼴로 부호 함정 추가(T-부호 · ★2) (2) 분모를 sin h 로 바꿔 삼각함수 극한과 결합(★3) (3) f(π+2h)−f(π−h) 처럼 양쪽 증분(3f'(π) · ★2)."
```

```yaml
- id: RPM-CALC2-0441
  page: 66
  vendor_label: "유형 17 미분계수를 이용하여 극한값 구하기; 삼각함수"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=e^x sin x 에 대하여 lim_{h→0} {f(π+3h)−f(π−3h)}/h 의 값.
  category: "양쪽 증분 → 6f'(π)"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미분계수의 정의를 이용한 극한값(양쪽 증분 · 지수×삼각)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분자를 [f(π+3h)−f(π)]−[f(π−3h)−f(π)] 로 나누면 3f'(π)+3f'(π)=6f'(π). f'(x)=e^x(sin x+cos x), f'(π)=−e^π → −6e^π. 절차형 M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "양쪽 증분 → 6f'(π) → f'(x)=e^x(sin x+cos x) → −6e^π"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-6e^{\pi}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0441.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "증분 계수(3h·−3h → 2h·−4h 면 6f'(π)) 와 점 π 를 바꿀 수 있음. 제약: 답이 e^π 의 정수배 꼴로 나오게 f'(점) 의 삼각 부분이 ±1·0 이 되는 특수각."
    creative: "(1) 계수를 비대칭(f(π+2h)−f(π−h) → 3f'(π)) 으로 두어 정의를 한 번 더 쪼개게(★2) (2) f'(x)=√2 e^x sin(x+π/4) 합성으로 f'(a)=0 인 a 를 묻기(★3) (3) 분모를 e^h−1 로 바꿔 지수 극한과 결합(★3)."
```

```yaml
- id: RPM-CALC2-0442
  page: 66
  vendor_label: "유형 17 미분계수를 이용하여 극한값 구하기; 삼각함수"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=e^x(sin x−cos x+1) 에 대하여 lim_{x→0} f(x)/x 의 값.
  category: "f(0)=0 확인 → 극한=f'(0) → 곱의 미분"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "f(a)=0 인 함수의 f(x)/(x−a) 극한 = f'(a)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f(0)=1·(0−1+1)=0 이므로 극한은 f'(0). f'(x)=e^x(sin x−cos x+1)+e^x(cos x+sin x)=e^x(2sin x+1), f'(0)=1. f(0)=0 확인이 관건인 절차형 M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "f(0)=0 → lim f(x)/x=f'(0) → f'(x)=e^x(2sin x+1) → 1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$1$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0442.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "괄호 안 상수 +1 은 f(0)=0 을 만드는 값이라 cos 계수와 묶여 있음(−cos x+1 → −2cos x+2). 극한점을 π/2 로 옮기면 상수를 sin 쪽에 맞춰야 함. 제약: f(극한점)=0 유지."
    creative: "(1) f(0)≠0 인 함수를 섞어 극한이 발산하는 보기를 고르는 ㄱㄴㄷ(★3) (2) 분모를 sin x·e^x−1 로 바꿔 두 극한 결합(★3) (3) f(x)/x² 로 두고 f'(0)=0 이 되도록 설계하면 f''(0)/2 (★3~4 · I-RT d2)."
```

### 유형 18 함수의 미분가능성; 삼각함수

```yaml
- id: RPM-CALC2-0443
  page: 66
  vendor_label: "유형 18 함수의 미분가능성; 삼각함수"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    −1<x<0 에서 ax+b, 0≤x<1 에서 sin x 인 함수가 x=0 에서 미분가능할 때 상수 a, b 의 합 a+b.
  category: "연속 조건 b → 좌우 미분계수 일치 a"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구간별 함수(삼각함수)의 미분가능 조건으로 상수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    연속: b=sin 0=0. 미분계수: a=cos 0=1. a+b=1. 표준 두 조건 절차형 M_total 6 → 유형 대표 ★2.
  tier: star_2
  mechanism_primary: "연속 b=sin 0=0 → 미분계수 a=cos 0=1 → a+b=1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$1$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0443.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "sin x 를 cos x+1·2sin x·tan x 로, 경계점 0 을 π/2 로 바꿀 수 있음. 제약: 경계점에서 삼각함수 값과 도함수 값이 특수각 값이어야 하고 일차식 쪽은 두 미지수를 유지."
    creative: "(1) 일차식을 이차식 ax²+bx+c 로 늘려 조건 하나가 남게 하고 f(1) 을 묻기(★2) (2) 경계점을 x=π 로 두고 sin(x−π) 등 평행이동 결합(T-부호 · ★2~3) (3) 미분가능 + 특정 점 값 세 조건으로 서술형(★3)."
```

```yaml
- id: RPM-CALC2-0444
  page: 66
  vendor_label: "유형 18 함수의 미분가능성; 삼각함수"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x<0 에서 ae^x, x≥0 에서 b sin x+2x−1 인 함수가 x=0 에서 미분가능하도록 하는 상수 a, b 의 곱 ab. 5지선다.
  category: "연속 a → 미분계수 a=b+2 → ab"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구간별 함수(지수·삼각)의 미분가능 조건으로 상수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    연속: a=−1. 미분계수: ae^0=a=b cos 0+2 → b=a−2=−3. ab=3. 전사본에 「답 크롭 불일치」 기록이 있으나 계산값 3 은 ⑤ 와 일치. 절차형 M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "연속 a=−1 → 미분계수 a=b+2 → b=−3 → ab=3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지(쪽 렌더 · 답 크롭 불일치)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0444.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "2x−1 의 계수·상수와 ae^x 의 지수(e^{2x}) 를 바꿀 수 있음. 제약: 연속 조건에서 a 가 곧바로 상수로 결정되고 미분 조건이 b 의 일차식이 되어 ab 가 정수·선택지 안에 있게."
    creative: "(1) e^x 쪽에도 미지수 둘(ae^x+c) 을 두어 조건 부족을 인지시키는 ㄱㄴㄷ(★3) (2) 미분가능 대신 「연속이지만 미분불가능」 조건(I-EQV d1 · ★3) (3) 두 번 미분가능 조건까지 확장하면 e^x 와 sin x 의 2계 도함수 비교(★3)."
```

```yaml
- id: RPM-CALC2-0445
  page: 66
  vendor_label: "유형 18 함수의 미분가능성; 삼각함수"
  vendor_level: "상중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    x≤0 에서 cos x, x>0 에서 5x²+ax+b 인 함수가 x=0 에서 미분가능할 때 f(2) 의 값(a, b 는 상수). 서술형.
  category: "연속 b=1 → 미분계수 a=0 → f(2) 계산"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구간별 함수(삼각·다항)의 미분가능 조건으로 상수 결정 후 함숫값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    연속: b=cos 0=1. 미분계수: a=−sin 0=0. f(2)=20+0+1=21. 골조는 0443·0444 와 같고 f(2) 계산 한 줄이 더해진 절차형 M_total 6. 벤더 「상중」·서술형 출발점 ★3 을 두되 실질은 ★2.
    [분류 이슈] 상중·서술형 라벨이나 통찰 0·골조가 유형 대표와 동일 → ★2 후보(라벨 ★3 유지 · 기록만).
  tier: star_3
  mechanism_primary: "연속 b=cos 0=1 → 미분계수 a=−sin 0=0 → f(2)=5·4+1=21"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$21$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0445.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차항 계수 5 와 묻는 점 2 를 바꿀 수 있음. cos x 를 sin x+1·e^x 로 바꾸면 a 가 0 이 아닌 값이 됨. 제약: 경계점에서 삼각함수의 값·도함수 값이 정해지는 특수각."
    creative: "(1) 다항 쪽을 삼차로 늘리고 f'(1) 조건 추가(★3) (2) 구간을 셋으로 나눠 두 경계에서 모두 미분가능(조건 통합 · ★3~4) (3) 「미분가능하지 않다」로 바꾸어 a, b 조건을 부정 표현(I-EQV d1 · ★3)."
```

### 유형 19 삼각함수의 극한의 도형에의 활용

```yaml
- id: RPM-CALC2-0447
  page: 67
  vendor_label: "유형 19 삼각함수의 극한의 도형에의 활용"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    ∠A=π/2, AB=1, ∠B=2θ 인 직각삼각형 ABC 에서 A 에서 BC 에 내린 수선의 발 H 에 대하여 lim_{θ→0+} CH/θ² 의 값. 5지선다.
  category: "CH 를 θ 삼각식으로 → sin²2θ/θ² 극한"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직각삼각형의 수선의 발과 삼각함수의 극한(θ² 차수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ∠CAH=∠B=2θ, AC=tan 2θ 이므로 CH=AC sin 2θ=sin²2θ/cos 2θ (또는 BC−BH=sec 2θ−cos 2θ). sin²2θ/θ² → 4. 길이 표현 한 번 + 표준 극한의 절차형 M_total 5 → 유형 「중」 ★2.
  tier: star_2
  mechanism_primary: "∠CAH=2θ → CH=tan 2θ·sin 2θ=sin²2θ/cos 2θ → /θ² → 4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: "crop:fig-0447.png"
  latex: latex-bank/rpm-calc2/items/0447.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AB=1 을 k, ∠B=2θ 를 3θ 로 바꾸면 답이 k·(각 계수)². 제약: 그림 라벨(A·B·C·H·1·2θ) 고정, 분모 θ² 차수를 CH 의 차수(sin² → 2차)와 맞출 것. BH/θ 나 AH/θ 로 바꾸면 1차."
    creative: "(1) CH 대신 △AHC 의 넓이/θ³ (3차 · ★3) (2) 내접원 반지름/θ 로 바꾸면 반각 공식(★3 · I-RT d1) (3) BH·CH 의 곱과 AH² 관계로 두 길이의 비를 묻기(★2)."
```

```yaml
- id: RPM-CALC2-0448
  page: 67
  vendor_label: "유형 19 삼각함수의 극한의 도형에의 활용"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    반지름 6 인 사분원 위의 점 A 에서 OB 에 내린 수선의 발 H, ∠AOB=θ 일 때 lim_{θ→0+} BH/θ² 의 값.
  category: "OH=6cos θ → BH=6(1−cos θ) → (1−cos θ)/θ² → 1/2"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "사분원의 수선의 발과 1−cos θ 극한"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    BH=6−6cos θ=6(1−cos θ), (1−cos θ)/θ²=sin²θ/{θ²(1+cos θ)} → 1/2 이므로 3. 절차형 M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "BH=6(1−cos θ) → (1−cos θ)/θ² → 1/2 → 3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$3$"
  answer_source: "답지"
  figure: "crop:fig-0448.png"
  latex: latex-bank/rpm-calc2/items/0448.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "반지름 6 을 r(답 r/2), 각을 2θ(답 2r) 로. 제약: 라벨 O·A·B·C·H 고정, 분모 차수 θ² 유지(BH 가 2차 소량)."
    creative: "(1) AH/θ 로 바꾸면 sin θ (1차 · ★1) (2) 부채꼴 OAB 와 △OAH 의 넓이 차/θ³ (★3 · 3차 전개) (3) 호 AB 와 현 AB 의 길이 차/θ³ (★3~4 · 테일러 3차)."
```

```yaml
- id: RPM-CALC2-0449
  page: 67
  vendor_label: "유형 19 삼각함수의 극한의 도형에의 활용"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    반지름 r 인 원에 내접하는 정n각형의 한 변 AB 에 대하여 △OAB 의 넓이를 f(n) 이라 할 때 lim_{n→∞} n f(n) 을 r 로 나타내기.
  category: "중심각 2π/n → f(n)=(1/2)r² sin(2π/n) → n→∞ 를 θ→0 으로 전환"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "n→∞ 인 수열 극한을 θ=2π/n→0+ 인 삼각함수 극한으로 전환(n=2π/θ 대입)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "정n각형의 넓이와 n→∞ 극한(원의 넓이 근사)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    중심각 2π/n 이므로 f(n)=(1/2)r² sin(2π/n), n f(n)=πr²·sin(2π/n)/(2π/n) → πr². 이산 n 을 연속 θ 로 바꾸는 전환 통찰 1개(RT d1)·M_total 6 → 「상중」 출발점 ★3 유지. 결과가 원의 넓이라는 해석이 붙는 문항.
  tier: star_3
  mechanism_primary: "f(n)=(1/2)r² sin(2π/n) → n f(n)=πr²·sin θ/θ (θ=2π/n) → πr²"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\pi r^2$'
  answer_source: "답지"
  figure: "crop:fig-0449.png"
  latex: latex-bank/rpm-calc2/items/0449.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "r 을 구체값(2 · 3)으로 바꾸거나 넓이 대신 변 AB 의 길이 g(n) 으로 n g(n) → 2πr(둘레). 제약: 라벨 A·B·O·r 고정, 중심각이 2π/n 임을 그림에서 읽게 둠."
    creative: "(1) 정n각형의 둘레·넓이와 원의 둘레·넓이 비교 ㄱㄴㄷ(★3) (2) 외접 정n각형(변이 원에 접함)으로 바꾸면 tan(π/n) (★3) (3) n f(n) 대신 n²(πr²−n f(n)) 처럼 2차 오차항(★4~5 · 테일러 3차 · I-PD)."
```

```yaml
- id: RPM-CALC2-0450
  page: 67
  vendor_label: "유형 19 삼각함수의 극한의 도형에의 활용"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    BC=2, ∠B=∠C=θ 인 이등변삼각형의 내접원(중심 O)이 AB·AC 와 만나는 점 D·E 에 대하여 △ODE 의 넓이 S(θ) 일 때 lim_{θ→0+} S(θ)/θ³ 의 값. 5지선다.
  category: "내접원 반지름 r=tan(θ/2) → ∠DOE=2θ → S=(1/2)r² sin 2θ → θ³ 차수"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "B 에서 내접원까지의 접선 길이가 1(BC 의 절반)임을 써서 r=tan(θ/2), 사각형 ADOE 의 내각 합에서 ∠DOE=π−∠A=2θ — 도형 조건 둘을 θ 의 삼각식으로 전환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "내접원과 이등변삼각형의 넓이 극한(반각 · θ³ 차수)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    BC 의 중점이 접점이므로 r=1·tan(θ/2). ∠A=π−2θ 이고 ∠ADO=∠AEO=π/2 라 ∠DOE=2θ. S=(1/2)tan²(θ/2)sin 2θ → (1/2)(θ/2)²(2θ)/θ³=1/4. 반지름·중심각 두 도형 전환이 한 덩어리 통찰(RT d2)·M_total 6 → 「상중」 ★3.
  tier: star_3
  mechanism_primary: "r=tan(θ/2) · ∠DOE=2θ → S=(1/2)tan²(θ/2)sin 2θ → /θ³ → 1/4"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0450.png"
  latex: latex-bank/rpm-calc2/items/0450.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "BC=2 를 2k 로 두면 r=k tan(θ/2), 답 k²/4. 제약: 라벨 A·B·C·D·E·O·θ·2 고정, 분모 θ³ 유지(r² 이 2차 · sin 2θ 가 1차)."
    creative: "(1) △ADE 의 넓이/θ 나 DE 의 길이/θ 로 바꾸면 반각 하나만(★2~3) (2) 내접원 대신 외접원 반지름으로 바꾸면 사인법칙(★3) (3) 내접원과 BC·두 변으로 둘러싸인 부분 넓이(활꼴 보정 · ★4)."
```

### 시험에 꼭 나오는 문제

```yaml
- id: RPM-CALC2-0451
  page: 68
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    csc θ sec θ<0 일 때 항상 옳은 것 고르기. 5지선다.
  category: "역수 부호 → sin θ cos θ<0 → tan θ<0"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수의 역수 관계와 부호"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    csc θ sec θ=1/(sin θ cos θ)<0 → sin θ cos θ<0 → tan θ<0. 한 단계 M_total 4·통찰 0 → 종합 구역 출발점 ★2 에서 −1 → ★1.
  tier: star_1
  mechanism_primary: "csc θ sec θ=1/(sin θ cos θ)<0 → tan θ<0"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "③"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0451.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "부등호 방향(>0 → tan θ>0), 조합(csc θ cot θ<0 → cos θ<0 · sec θ tan θ>0 등)을 바꿀 수 있음. 제약: 한 조건만으로 부호가 결정되는 함수가 정답 하나뿐이도록 선택지 구성."
    creative: "(1) 두 조건(csc θ sec θ<0, sin θ+cos θ>0)으로 사분면 확정 후 sin θ−cos θ 의 부호(★2) (2) sec²θ−tan²θ 처럼 항등식과 결합(★2) (3) θ 의 범위를 묻는 서술형(★2)."
```

```yaml
- id: RPM-CALC2-0452
  page: 68
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    α+β=5π/4 일 때 (1+tan α)(1+tan β) 의 값. 5지선다.
  category: "tan(α+β)=1 → tan α+tan β=1−tan α tan β → 전개식 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "각의 합 조건을 tan 덧셈정리로 tan α+tan β+tan α tan β=1 로 바꾸고, 목표식의 전개 1+(tan α+tan β)+tan α tan β 가 정확히 그 식임을 봄"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "tan 덧셈정리로 (1+tan α)(1+tan β) 꼴 값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    tan(5π/4)=1 이므로 tan α+tan β=1−tan α tan β. (1+tan α)(1+tan β)=1+tan α+tan β+tan α tan β=2. 조건을 목표식 형태로 옮기는 동치 변환 통찰 1개(EQV d1)·M_total 4 → ★2.
  tier: star_2
  mechanism_primary: "tan(α+β)=1 → tan α+tan β+tan α tan β=1 → (1+tan α)(1+tan β)=2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0452.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "합을 π/4(값 2)·3π/4(tan=−1 → 값 0) 로. 제약: tan(α+β)=±1 이어야 곱이 상수로 결정됨(π/3 이면 (1+tan α)(1+tan β) 가 tan α tan β 에 의존해 미결정)."
    creative: "(1) (1−tan α)(1−tan β) 나 (1+cot α)(1+cot β) 로 대칭 변형(★2) (2) tan α, tan β 가 이차방정식의 두 근일 때 계수 조건으로 α+β 를 역으로 묻기(★3 · I-BW d1) (3) 세 각 α+β+γ=π 의 tan 항등식으로 확장(★4 · I-CON)."
```

```yaml
- id: RPM-CALC2-0453
  page: 68
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    단위원 위의 두 점 P(cos α, sin α), Q(cos β, sin β) 사이의 거리가 √2 일 때 |α−β| 의 값(0<α<π, 0<β<π).
  category: "거리 제곱 → 2−2cos(α−β)=2 → cos(α−β)=0 → 범위로 각 확정"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "단위원 위 두 점 사이의 거리와 cos(α−β)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    PQ²=2−2(cos α cos β+sin α sin β)=2−2cos(α−β)=2 → cos(α−β)=0. |α−β|<π 이므로 π/2. 덧셈정리의 유도 골조 그대로인 절차형 M_total 4, 거리 → 덧셈정리 → 범위 사슬이라 ★2 유지.
  tier: star_2
  mechanism_primary: "PQ²=2−2cos(α−β)=2 → cos(α−β)=0 → |α−β|=π/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{\pi}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0453.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "거리를 1(cos=1/2 → π/3)·√3(cos=−1/2 → 2π/3) 로. 제약: 범위 0<α, β<π 로 |α−β|<π 를 보장해 답이 하나가 되게. 반지름 r 원이면 거리²=2r²(1−cos)."
    creative: "(1) 거리 대신 △OPQ 의 넓이(sin|α−β|) (★2) (2) 세 점으로 확장해 두 거리 조건에서 cos 값 둘 → 덧셈정리로 세 번째 거리(★3 · I-CON) (3) 거리의 최댓값·최솟값을 α−β 의 함수로(★2)."
```

```yaml
- id: RPM-CALC2-0454
  page: 68
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["교육청 기출"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    삼각형의 세 내각 α<β<γ 가 이 순서로 등차수열, cos α, 2cos β, 8cos γ 가 이 순서로 등비수열일 때 tan α tan γ 의 값.
  category: "등차 → β=π/3 · α+γ=2π/3 → 등비 → cos α cos γ=1/8 → cos(α+γ) 덧셈정리 → sin α sin γ → 비"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 3
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "목표 tan α tan γ 를 sin α sin γ/cos α cos γ 로 보고, cos(α+γ)=cos(2π/3)=−1/2 의 덧셈정리 전개에서 sin α sin γ 를 끌어냄 — 개별 각을 구하지 않고 곱만 다룸"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "삼각형 내각 조건(등차·등비)과 덧셈정리로 tan 의 곱"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    등차: β=π/3, α+γ=2π/3. 등비: (2cos β)²=1=8cos α cos γ → cos α cos γ=1/8. cos(α+γ)=−1/2=1/8−sin α sin γ → sin α sin γ=5/8. tan α tan γ=5. 각을 직접 구하지 않고 곱의 관계로 닫는 EQV d2 통찰 1개·M_total 5 → 교육청 기출 ★3.
  tier: star_3
  mechanism_primary: "β=π/3 → cos α cos γ=1/8 → cos(α+γ)=−1/2 로 sin α sin γ=5/8 → tan α tan γ=5"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$5$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0454.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "등비수열의 계수 1·2·8 을 바꾸면 cos α cos γ 값이 바뀜. 제약: 등비 중항 조건에서 cos α cos γ>0, 그에 맞는 α<β<γ 삼각형이 실제로 존재해야 함(검산 필수). 묻는 값을 sin α sin γ·cos(α−γ) 로."
    creative: "(1) 등비 대신 sin α+sin γ 값을 주고 합→곱 공식(★3~4 · I-SYM) (2) 세 각이 등차인 조건만 주고 tan α+tan γ 와 tan α tan γ 의 관계식 도출(★3 · I-CON) (3) cos α cos γ 와 sin α sin γ 둘 다에서 cos(α−γ) 를 구해 α, γ 를 실제로 결정(★4)."
```

```yaml
- id: RPM-CALC2-0455
  page: 68
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    x²−4x−1=0 의 두 근이 tan α, tan β 일 때 cos α cos β−sin α sin β 의 값(0<α<π/2, π/2<β<π).
  category: "근과 계수 → tan(α+β)=2 → 목표=cos(α+β) → 범위·부호 → −1/√5"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "π/2<α+β<3π/2 라는 범위와 tan(α+β)=2>0 을 합쳐 α+β 가 제3사분면임을 확정 → cos(α+β)<0"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "근과 계수의 관계로 tan(α+β) → cos(α+β) 의 값(부호 결정)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    tan α+tan β=4, tan α tan β=−1 → tan(α+β)=4/2=2. 목표식은 cos(α+β). α+β∈(π/2, 3π/2) 에서 tan>0 이면 제3사분면이라 cos(α+β)=−1/√(1+4)=−√5/5. 범위와 tan 부호를 결합해 사분면을 정하는 EQV d1 통찰·T-범위·T-부호 함정 → ★3.
  tier: star_3
  mechanism_primary: "근과 계수 → tan(α+β)=2 → cos(α+β)=−1/√(1+tan²) (제3사분면) → −√5/5"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-\dfrac{\sqrt{5}}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0455.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차방정식 계수(x²−2x−1 → tan(α+β)=1 → cos=−√2/2)를 바꿀 수 있음. 제약: 근의 곱 tan α tan β<0 이 범위(한 근 양·한 근 음)와 맞아야 하고 1−tan α tan β≠0."
    creative: "(1) 범위를 둘 다 제1사분면으로 바꾸면 근의 곱이 양수여야 하며 부호 결정이 쉬워짐(★2) (2) sin(α+β)·sin(α−β) 로 바꾸면 개별 근이 필요(무리수 · ★3~4) (3) 세 근 tan α, tan β, tan γ 의 삼차방정식으로 tan(α+β+γ) (★4 · I-PD/CON)."
```

```yaml
- id: RPM-CALC2-0456
  page: 68
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    한 변 1 인 정사각형 3개를 이어 붙인 직사각형에서 ∠ACD=α, ∠BCD=β 일 때 cos(α+β) 의 값.
  category: "그림에서 tan α=1/2, tan β=1/3 → tan(α+β)=1 → α+β=π/4"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "격자 도형에서 tan 값 읽기와 덧셈정리(α+β=π/4)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    tan α=1/2, tan β=1/3 → tan(α+β)=(1/2+1/3)/(1−1/6)=1, 0<α+β<π 라 π/4 → cos=√2/2. sin·cos 값을 직접 넣어도 됨(6/√50−1/√50). 절차형 M_total 4, 도형 → tan → 덧셈정리 사슬이라 ★2 유지(태그 「중요」).
  tier: star_2
  mechanism_primary: "tan α=1/2, tan β=1/3 → tan(α+β)=1 → α+β=π/4 → cos=√2/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{\sqrt{2}}{2}$'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0456.png"
  latex: latex-bank/rpm-calc2/items/0456.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정사각형 개수(2개면 tan α=1, tan β=1/2)·묻는 값(sin(α+β) · tan(α−β)). 제약: 그림 라벨 A·B·C·D·α·β·1 고정, tan(α+β) 가 특수각 값(1·√3·1/√3)이 되도록 격자 비 선택."
    creative: "(1) 정사각형 n개로 일반화해 α+β 가 π/4 인 n 찾기(★3 · I-BW) (2) 세 각 α, β, γ 의 합이 π/4 임을 보이는 격자 문제(★3~4 · I-CON) (3) 대각선 길이로 코사인 법칙을 쓰는 대안 갈래와 비교(★3 · I-SC)."
```

```yaml
- id: RPM-CALC2-0457
  page: 68
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["교육청 기출"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    AB=BC=1, ∠B=π/2 인 직각이등변삼각형에서 AD=2BE 인 점 D(AB 위)·E(BC 위), AE 와 CD 의 교점 F. tan(∠CFE)=16/15 일 때 tan(∠CDB) 의 값(π/4<∠CDB<π/2). 5지선다.
  category: "BE=t 로 두 각의 tan → ∠CFE=∠CDB−∠BAE(외각) → tan 뺄셈정리 → 이차방정식 → t → 답"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "△ADF 의 외각 관계로 ∠CFE(=∠AFD)=∠CDB−∠DAF 임을 읽고 두 기준각의 tan(1/(1−2t), t)의 뺄셈정리로 옮김 — 미지 각을 그림의 두 직각삼각형 각의 차로 분해"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "도형에서 각의 차로 표현한 tan 뺄셈정리와 미지 길이 결정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    BE=t, AD=2t, BD=1−2t 로 tan∠CDB=1/(1−2t), tan∠BAE=t. ∠CFE=∠CDB−∠BAE 이므로 (1/(1−2t)−t)/(1+t/(1−2t))=(1−t+2t²)/(1−t)=16/15 → 30t²+t−1=0 → t=1/6 (t>0). tan∠CDB=1/(1−1/3)=3/2. 각 분해 통찰(RT d2)·M_total 8 로 이 구역에서 가장 무거움. 교육청 기출 출발점 ★3.
    [분류 이슈] M_total 8·RT d2 → ★4 후보(통찰 1개라 +1 규칙엔 미달 · 라벨 ★3 유지).
  tier: star_3
  mechanism_primary: "BE=t → tan∠CDB=1/(1−2t), tan∠BAE=t → tan(∠CDB−∠BAE)=16/15 → 30t²+t−1=0 → t=1/6 → 3/2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0457.png"
  latex: latex-bank/rpm-calc2/items/0457.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "tan(∠CFE)=16/15 와 비 AD=2BE 를 바꿀 수 있음. 제약: 이차방정식이 유리근을 갖고 양의 근 하나가 0<AD<1 과 각 범위(π/4<∠CDB<π/2 ⇔ 0<BD<1)를 만족하게 역설계(t 를 먼저 정하고 16/15 를 계산). 그림 라벨 고정."
    creative: "(1) tan(∠CDB) 를 주고 tan(∠CFE) 를 묻기(정방향 · ★2~3) (2) AD=BE 로 바꾸면 대칭이 생겨 ∠CFE 가 상수(I-SYM · ★3) (3) 넓이 조건(△AFD 의 넓이)으로 바꾸면 길이·각 동시 처리(★4)."
```

```yaml
- id: RPM-CALC2-0458
  page: 69
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    직선 y=mx 가 직선 y=2x 와 x축이 이루는 예각을 이등분할 때 상수 m 의 값.
  category: "tan α=2 인 각의 절반 → m=tan(α/2) → 배각 공식 → 이차방정식 → 양의 근"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「각의 이등분」을 x축과의 각 α/2 로 읽어 m=tan(α/2) 로 두고, tan α=2 와 배각 공식 2m/(1−m²)=2 로 연결"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "각의 이등분선의 기울기(tan 배각·반각)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    y=2x 가 x축과 이루는 각 α 는 tan α=2. 이등분선은 각 α/2 라 m=tan(α/2), 2m/(1−m²)=2 → m²+m−1=0 → m=(−1+√5)/2 (0<m<1). 기하 조건을 배각 관계로 옮기는 RT d1·양의 근 선택 T-부호 → ★3. 점과 두 직선의 거리가 같다는 자취 갈래도 있음.
  tier: star_3
  mechanism_primary: "tan α=2 → m=tan(α/2) → 2m/(1−m²)=2 → m²+m−1=0 → m=(−1+√5)/2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{-1+\sqrt{5}}{2}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0458.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기울기 2 를 3·1/2 로. 제약: m²+(2/k)m−1=0 꼴에서 양의 근을 답으로 하며 무리수 답이 정리되게. 직선을 y=2x+1 처럼 평행이동해도 각은 같음."
    creative: "(1) 두 직선 y=2x, y=−x/2 가 이루는 각의 이등분선(둘 다 tan 으로 · ★3) (2) 이등분선 기울기 m 을 주고 원래 기울기를 묻기(배각 정방향 · ★2) (3) 「점에서 두 직선까지 거리가 같다」 자취로 푸는 갈래와 비교시키는 서술형(★3 · I-SC)."
```

```yaml
- id: RPM-CALC2-0459
  page: 69
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    sin θ−cos θ=1/2 (0<θ<π/2) 일 때 cos 2θ 의 값.
  category: "제곱 → sin 2θ=3/4 → cos 2θ=±√7/4 → θ>π/4 로 부호"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "sin θ±cos θ 의 값에서 cos 2θ(부호 결정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    양변 제곱: 1−sin 2θ=1/4 → sin 2θ=3/4. cos 2θ=±√7/4 인데 sin θ>cos θ 이면 π/4<θ<π/2, 2θ∈(π/2, π) 라 음수. 또는 (sin θ+cos θ)²=7/4 로 cos 2θ=(cos θ−sin θ)(cos θ+sin θ)=−(1/2)(√7/2). 절차형 M_total 6 · T-부호 함정 → ★2.
  tier: star_2
  mechanism_primary: "제곱 → sin 2θ=3/4 → cos 2θ=−√(1−9/16) (θ>π/4) → −√7/4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-\dfrac{\sqrt{7}}{4}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0459.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "1/2 을 1/3 으로, 범위를 (0, π) 로. 제약: |sin θ−cos θ|≤√2, 범위가 cos 2θ 의 부호를 하나로 정하게(범위를 넓히면 두 답)."
    creative: "(1) sin θ+cos θ 값을 주고 tan 2θ (★2) (2) 범위를 −π/2<θ<π/2 로 두면 부호가 둘 → 「모든 값의 합」(★3 · I-MI) (3) sin θ−cos θ=t 를 매개변수로 cos 2θ 를 t 로 표현(★2~3 · Ma 상승)."
```

```yaml
- id: RPM-CALC2-0460
  page: 69
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    lim_{x→0} sin(3x²+5x)/(5x²+4x) 의 값. 5지선다.
  category: "sin u/u → 1 → 다항식 비 → 5/4"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "sin(다항식)/(다항식) 극한"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    u=3x²+5x 로 sin u/u → 1 을 곱하고 (3x²+5x)/(5x²+4x)=(3x+5)/(5x+4) → 5/4. 두 단계 절차형 M_total 4. −1 후보이나 sin 극한과 유리식 약분 두 기법 사슬이라 ★2 유지.
  tier: star_2
  mechanism_primary: "sin u/u·(3x²+5x)/(5x²+4x) → 1·(3x+5)/(5x+4) → 5/4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0460.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "다항식 계수(제약: 두 다항식 모두 상수항 0 · 일차항 계수 0 아님 → 답은 일차항 계수 비). 분모에 sin·tan 을 섞어도 같은 골조."
    creative: "(1) 분모를 sin(5x²+4x) 로 바꾸면 sin/sin (★2) (2) 상수항이 있는 분모로 바꾸면 0/상수 함정형(★2) (3) x→0 대신 x→∞ 로 1/x 치환(★2)."
```

```yaml
- id: RPM-CALC2-0461
  page: 69
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    lim_{x→0} x/(tan x+tan 2x+tan 3x) 의 값. 5지선다.
  category: "분모를 x 로 나눔 → tan kx/x → k → 1/6"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "tan kx/x 극한의 합"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    분자·분모를 x 로 나누면 1/(1+2+3)=1/6. 한 단계 M_total 4·통찰 0 → 출발점 ★2 에서 −1 → ★1.
  tier: star_1
  mechanism_primary: "x/(tan x+tan 2x+tan 3x)=1/(tan x/x+tan 2x/x+tan 3x/x) → 1/(1+2+3)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0461.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 1·2·3 을 1·3·5 등으로(답 1/합). 제약: 계수 합이 0 이 되지 않게(예: tan x−tan 2x+tan x 는 발산)."
    creative: "(1) 분모 항 수를 n 개로 일반화해 극한을 n 의 식으로(★2 · I-PD 약) (2) tan 대신 sin·tan·x 혼합(★1~2) (3) 분자를 sin 2x 로 바꿔 2/6 (★1)."
```

```yaml
- id: RPM-CALC2-0462
  page: 69
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    lim_{x→0} f(x)(1−cos 2x)=8 일 때 lim_{x→0} x²f(x) 의 값. 5지선다.
  category: "1−cos 2x=2sin²x ~ 2x² → x²f(x)=f(x)(1−cos 2x)·x²/(1−cos 2x)"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "극한값이 주어진 함수와 1−cos 극한의 결합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x²f(x)=f(x)(1−cos 2x)·x²/(1−cos 2x) 이고 (1−cos 2x)/x² → 2 이므로 8·(1/2)=4. 주어진 극한을 곱으로 끼워 넣는 표준 절차 M_total 5(f 는 미지 인자 하나로만 작동해 Ma 2) → ★2.
  tier: star_2
  mechanism_primary: "x²f(x)=f(x)(1−cos 2x)·x²/(1−cos 2x) → 8·(1/2) → 4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0462.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "극한값 8 과 1−cos 2x 의 각 계수(1−cos 3x → 9/2 로 나눔). 제약: 묻는 식의 차수(x²)가 1−cos kx 의 차수(2차)와 같아야 유한값."
    creative: "(1) lim f(x) sin 2x=8 로 바꾸면 x f(x) (1차 · ★2) (2) lim f(x)/x² 가 주어지고 f(x)/(1−cos x) 를 묻기(역방향 · ★2) (3) f(x) 가 다항식이라는 조건으로 f 를 결정하는 문제(★3 · I-BW)."
```

```yaml
- id: RPM-CALC2-0463
  page: 69
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    lim_{x→3} sin(cos(πx/2))/(x−3) 의 값.
  category: "t=x−3 치환 → cos(3π/2+πt/2)=sin(πt/2) → sin(sin u)/t 이중 극한"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "치환과 삼각함수 변환이 필요한 합성 삼각함수 극한"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    t=x−3 이면 cos(πt/2+3π/2)=sin(πt/2). sin(sin(πt/2))/t=[sin(sin u)/sin u]·[sin u/u]·(u/t) (u=πt/2) → π/2. 치환·주기 변환·이중 극한이 겹치는 절차형 M_total 6 · cos(3π/2+u) 의 부호 함정 → ★2.
    [분류 이슈] 절차형이지만 세 기법이 겹쳐 종합 구역 안에서 ★3 경계(라벨 ★2 · 기록만).
  tier: star_2
  mechanism_primary: "t=x−3 → cos(3π/2+πt/2)=sin(πt/2) → sin(sin u)/t → π/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{\pi}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0463.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "극한점 3 을 1(cos(π/2+u)=−sin u · 답 −π/2)·5 로, 계수 π/2 를 π/4 로. 제약: 극한점에서 안쪽 cos 값이 0 이어야 sin(0)/0 꼴, 변환 뒤 부호 확인."
    creative: "(1) 바깥 sin 을 tan 으로(★2) (2) 분모를 x²−9 로 바꿔 인수 (x+3) 처리 추가(★2~3) (3) sin(cos(πx/2)) 를 f(x) 로 두고 f'(3) 으로 읽는 미분계수 해석(★3 · I-RT d1)."
```

```yaml
- id: RPM-CALC2-0464
  page: 69
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    lim_{x→∞} sin(tan(2/x))·csc(4/x) 의 값.
  category: "t=1/x→0+ 치환 → sin(tan 2t)/sin 4t 를 표준 극한의 곱으로"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "x→∞ 에서 1/x 치환한 삼각함수 극한(합성 · 역수 함수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    t=1/x 로 sin(tan 2t)/sin 4t=[sin(tan 2t)/tan 2t]·[tan 2t/2t]·[4t/sin 4t]·(2t/4t) → 1/2. 표준 극한 네 조각을 이어 붙이는 절차형 M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "t=1/x → sin(tan 2t)/sin 4t → 1·1·1·(2/4) → 1/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{2}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0464.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "안쪽 계수 2·4(답 2/4). csc 를 cot(발산 주의)·sec(→ 0) 로 바꾸면 차수가 달라짐. 제약: 분자·분모 모두 1차 소량이어야 유한 극한."
    creative: "(1) x→∞ 를 유지한 채 x·sin(2/x) 형태(★1~2) (2) sin(tan 2t)−tan(sin 2t) 같은 고차 소량 차(★4~5 · 테일러) (3) f(x)=x sin(1/x) 의 x→∞ 극한과 미분계수 결합(★3)."
```

```yaml
- id: RPM-CALC2-0465
  page: 69
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    lim_{x→0} (√(ax+b)−2)/sin 3x=2 일 때 상수 a, b 의 합 a+b. 5지선다.
  category: "분모→0 이므로 분자→0 → b=4 → 유리화 → a/12=2 → a=24"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수 극한값을 이용한 미정계수 결정(무리식 유리화)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    극한이 존재하고 분모→0 이므로 √b−2=0 → b=4. 유리화하면 ax/[(√(ax+4)+2)sin 3x] → a/(4·3)=2 → a=24, a+b=28. 표준 미정계수 절차 M_total 6(유리화는 Mk 1) → ★2(태그 「중요」).
  tier: star_2
  mechanism_primary: "분자→0 → b=4 → 유리화 → a/12=2 → a=24 → 28"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0465.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "√b 의 값(2 → 3 이면 b=9)과 극한값 2·sin 3x 의 계수. 제약: a=(극한값)·2√b·(sin 계수) 가 정수가 되게 조합. 선택지에 a+b 오답(a−b, ab)을 배치."
    creative: "(1) 분모가 √(ax+b)−2, 분자가 sin 3x 인 역수형(★2) (2) 극한값 대신 「극한이 존재」만 주고 a 의 조건(★2~3 · I-EQV) (3) sin 3x 를 1−cos 3x 로 바꿔 차수를 2 로 만들면 분자도 2차 소량이어야 함 → a=0 이라는 판단(★3 · I-BW)."
```

```yaml
- id: RPM-CALC2-0466
  page: 70
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    x≠1 에서 sin(πx)/(1−x), x=1 에서 a 인 함수가 x=1 에서 연속일 때 상수 a 의 값. 5지선다.
  category: "a=lim_{x→1} → t=x−1 → sin(π+πt)=−sin πt → π"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "연속 조건으로 상수 결정(치환이 필요한 삼각함수 극한)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a=lim sin πx/(1−x). t=x−1 이면 sin(π+πt)/(−t)=(−sin πt)/(−t)=sin πt/t → π. 부호 두 번(sin(π+u), 1−x=−t)이 상쇄되는 절차형 M_total 5 → ★2(태그 「중요」).
  tier: star_2
  mechanism_primary: "a=lim sin πx/(1−x) → t=x−1 → (−sin πt)/(−t) → π"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0466.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "극한점 1 을 2(sin(2π+πt)=sin πt · 분모 2−x → 답 −π)·1/2 로. 제약: 극한점에서 sin πx=0 이어야 하고 분모 부호와 sin 변환 부호를 맞춰 답의 부호를 확정."
    creative: "(1) 분모를 x²−1 로 바꿔 (x+1) 인수 추가(★2) (2) tan πx/(1−x) 로(★2) (3) 두 점 x=1, x=2 에서 모두 연속인 구간별 함수로 상수 둘(★3)."
```

```yaml
- id: RPM-CALC2-0467
  page: 70
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["평가원 기출"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    실수 전체에서 연속인 f 가 모든 실수 x 에서 (e^{2x}−1)²f(x)=a−4cos(πx/2) 를 만족할 때 a×f(0) 의 값(a 는 상수). 5지선다.
  category: "x=0 대입 → a=4 → f(0)=lim (4−4cos(πx/2))/(e^{2x}−1)² → 1−cos·(e^x−1) 표준 극한"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "연속함수의 함수 항등식과 삼각·지수 극한의 결합(평가원)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    x=0: 0=a−4 → a=4. 연속이므로 f(0)=lim_{x→0} 4(1−cos(πx/2))/(e^{2x}−1)². 1−cos(πx/2)~(π²/8)x², (e^{2x}−1)²~4x² → f(0)=π²/8, a·f(0)=π²/2. 항등식+연속으로 f(0) 을 극한으로 정하는 표준 골조지만 두 극한(1−cos · e^x−1)을 차수 맞춰 결합하는 M_total 7·평가원 기출 → ★3.
  tier: star_3
  mechanism_primary: "x=0 대입 → a=4 → f(0)=lim 4(1−cos(πx/2))/(e^{2x}−1)² → π²/8 → a·f(0)=π²/2"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "⑤"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0467.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "cos 의 계수 4·각 계수 π/2, 지수의 계수 2. 제약: x=0 에서 우변이 0 이 되도록 a 가 cos 계수와 같아야 하고, 좌변 인자 차수(2차)와 1−cos 차수(2차)가 맞아야 f(0) 유한."
    creative: "(1) 좌변을 (e^x−1)sin x 처럼 두 인자로(★3) (2) 우변을 sin²(πx/2)−a 로 바꾸면 a=0 결정 후 같은 골조(★3) (3) f(0) 대신 f'(0) 까지 묻기(★4~5 · 3차 전개 · I-RT d2)."
```

```yaml
- id: RPM-CALC2-0468
  page: 70
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    f(x)=sin²x−cos²x 일 때 f'(π/6) 의 값. 5지선다.
  category: "제곱의 미분 두 번(또는 −cos 2x 로 정리) → f'(x)=2 sin 2x → 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "sin·cos 의 제곱으로 된 함수의 도함수와 미분계수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (sin²x)'=2 sin x cos x, (cos²x)'=−2 cos x sin x 이므로 f'(x)=4 sin x cos x=2 sin 2x. f'(π/6)=2 sin(π/3)=√3. sin²x−cos²x=−cos 2x 로 먼저 정리하면 f'(x)=2 sin 2x 한 줄로 끝난다. M_total 4 지만 제곱(곱)의 미분 두 번과 배각 정리가 사슬로 이어지므로 종합 구역 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "f(x)=−cos 2x → f'(x)=2 sin 2x → f'(π/6)=√3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0468.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "대입각 π/6(→ π/4 면 2 · π/3 이면 √3 · π/12 면 1). 제약: 2 sin 2x 가 특수각 값이 되도록 대입각을 π 의 단순 분수로 두고, 선택지에 배각을 놓친 값(2 sin(π/6)=1)을 오답으로 배치."
    creative: "(1) f(x)=sin²x+cos²x 로 바꿔 f'(x)=0 임을 묻기(항등식 인식 · ★2) (2) f(x)=sin⁴x−cos⁴x 로 올리면 인수분해 후 −cos 2x 로 같은 골조(★2) (3) 주어진 구간에서 f'(x)=0 인 x 를 모두 구하기(★3 · I-MI)."
```

```yaml
- id: RPM-CALC2-0469
  page: 70
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    f(x)=sin x−2cos x−x 와 미분가능한 함수 g 에 대하여 h(x)=f(x)g(x). h'(0)=10 일 때 g'(0). 5지선다.
  category: "곱의 미분 → h'(0)=f'(0)g(0)+f(0)g'(0) → f'(0)=0·f(0)=−2 → −2g'(0)=10"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곱의 미분법으로 미지 함수의 미분계수 구하기(삼각함수 인자)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f(0)=−2, f'(x)=cos x+2 sin x−1 이므로 f'(0)=0. h'(0)=f'(0)g(0)+f(0)g'(0)=−2g'(0)=10 → g'(0)=−5. f'(0)=0 이라 알 수 없는 g(0) 이 저절로 사라지도록 설계된 문항이지만, 곱의 미분 공식을 쓰고 두 값을 대입하는 표준 절차라 통찰로 세지 않았다. M_total 6(미지 함수 g 는 값 하나짜리 인자라 Mₐ=2) → ★2.
  tier: star_2
  mechanism_primary: "h'=f'g+fg' → f'(0)=0, f(0)=−2 → −2g'(0)=10 → g'(0)=−5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0469.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "cos 의 계수 2 와 −x 의 계수, h'(0) 의 값 10. 제약: f'(0)=1+(sin 계수)·0−(x 계수)=0 이 되도록 x 의 계수를 1 로 맞춰야 g(0) 이 사라지고, f(0)=−(cos 계수) 로 나눈 g'(0) 이 선택지 정수가 되게 할 것."
    creative: "(1) −x 를 빼서 f'(0)≠0 으로 만들고 g(0) 도 함께 주기(★2 · 연립) (2) h'(0) 대신 h'(π/2) 를 주기(★2) (3) h(0), h'(0) 두 조건에서 g(0) 을 거치지 않고 g'(0) 을 묻기(★3 · I-CON)."
```

```yaml
- id: RPM-CALC2-0470
  page: 70
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    f(x)=ln x×cos x 일 때 lim_{h→0} [f(π/2−3h)−f(π/2)]/h 의 값을 구하는 주관식.
  category: "증분 −3h → 극한 = −3f'(π/2) → 곱의 미분 → −3·(−ln(π/2))"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미분계수의 정의 변형(f(a−kh) 꼴)과 곱의 미분법"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분모를 −3h 로 맞추면 주어진 극한은 −3f'(π/2). f'(x)=cos x/x−ln x·sin x 이므로 f'(π/2)=0−ln(π/2)=−ln(π/2), 답은 3 ln(π/2). 증분 계수 −3 을 밖으로 빼는 부호 처리(T-부호)가 유일한 함정인 절차형이지만 정의 변형과 곱의 미분 두 기법이 사슬로 이어지고 태그 「중요」라 ★2 유지.
  tier: star_2
  mechanism_primary: "−3·lim[f(π/2−3h)−f(π/2)]/(−3h)=−3f'(π/2) → f'(π/2)=−ln(π/2) → 3 ln(π/2)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$3\ln\dfrac{\pi}{2}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0470.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "증분 계수 −3 과 기준점 π/2. 제약: 기준점에서 cos·sin 중 하나가 0 이 되어야 f'(기준점) 이 한 항으로 정리됨(π/2 → −ln(π/2) · π → −1/π). 답에 ln 이 남으므로 객관식이 아니라 주관식으로만."
    creative: "(1) f(x)=ln x×sin x 로 바꾸면 f'(π/2)=2/π 로 로그가 사라짐(★2) (2) 분자를 f(π/2+2h)−f(π/2−3h) 양쪽 증분으로(★3 · 계수 합 5) (3) 구간에서 f'(x)=0 인 점이 존재함을 보이게 하기(★3 · I-BW)."
```

```yaml
- id: RPM-CALC2-0471
  page: 70
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    반지름 r 인 서로 외접하는 n 개의 원의 중심이 반지름 4 인 원 위에 놓일 때, n 개 원의 둘레의 길이의 합 f(n) 의 n→∞ 극한. 5지선다.
  category: "중심이 정n각형 → 한 변 2r=8 sin(π/n) → f(n)=8πn sin(π/n) → 8π²"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「서로 외접 · 중심이 반지름 4 인 원 위」라는 도형 조건을 정n각형의 한 변(=이웃 중심거리 2r)으로 읽고 중심각 2π/n 에 대한 현의 길이 2·4·sin(π/n) 로 옮김 — 기하 조건 → n 의 삼각식"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "정n각형 위에 놓인 외접원들의 둘레 합과 n→∞ 극한"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    이웃한 두 작은 원의 중심 사이 거리는 2r 이고 두 중심은 반지름 4 인 원에서 중심각 2π/n 을 이루므로 2r=2·4·sin(π/n), 즉 r=4 sin(π/n). f(n)=n·2πr=8πn sin(π/n)=8π²·sin(π/n)/(π/n) → 8π². 도형 조건을 현의 길이로 옮기는 RT d2 통찰 1개·M_total 6 → 종합 구역 출발점 ★2 에서 +1 하여 ★3.
  tier: star_3
  mechanism_primary: "2r=8 sin(π/n) → f(n)=8πn sin(π/n) → 8π²·lim sin(π/n)/(π/n) → 8π²"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "⑤"
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0471.png"
  latex: latex-bank/rpm-calc2/items/0471.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "큰 원의 반지름 4(일반적으로 R → 답 2π²R). 제약: 선택지가 π² 의 정수배가 되도록 R 을 짝수로 두고, 그림의 라벨 r·4 는 고정(중심각 2π/n 과 반각 π/n 의 대응이 그림에 묶여 있음)."
    creative: "(1) 둘레 합 대신 넓이 합 nπr²=πR²·n sin²(π/n) 의 극한을 묻기 → 차수가 달라 0(★3 · 차수 감각) (2) 작은 원들이 서로 외접하면서 큰 원에 내접하도록 바꾸면 r=R sin(π/n)/(1+sin(π/n)) 로 한 단계 추가(★4) (3) n 개 원의 넓이 합과 큰 원의 넓이의 비의 극한(★3)."
```

### 서술형 주관식

```yaml
- id: RPM-CALC2-0472
  page: 71
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    0<α<π/2, π/2<β<π 이고 sin α=1/3, cos β=−2/3 일 때 sin(α+β)=(a+2√b)/9 인 정수 a, b 의 합 a+b.
  category: "사분면으로 cos α·sin β 부호 결정 → sin 덧셈정리 → 계수 비교"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "각의 범위로 나머지 삼각함수 값을 정하고 sin 덧셈정리 적용"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    α 는 제1사분면각이라 cos α=2√2/3(양), β 는 제2사분면각이라 sin β=√5/3(양). sin(α+β)=(1/3)(−2/3)+(2√2/3)(√5/3)=(−2+2√10)/9 이므로 a=−2, b=10, a+b=8. 범위→부호→덧셈정리의 3단 표준 절차이고 통찰 0·M_total 5 → 서술형 출발점 ★3 에서 −1 하여 ★2.
  tier: star_2
  mechanism_primary: "cos α=2√2/3, sin β=√5/3 → sin(α+β)=(−2+2√10)/9 → a=−2, b=10 → 8"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$8$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0472.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "sin α=1/3, cos β=−2/3 의 분모·분자. 제약: 1−(값)² 이 제곱근으로 정리되고 두 곱의 합이 (정수+2√정수)/9 꼴로 떨어져야 하므로 두 분모를 같게(3, 3) 두고 분자는 1·2 처럼 작은 정수로. 각 범위를 바꾸면 부호가 뒤집혀 a 의 부호도 바뀜."
    creative: "(1) cos(α+β) 나 tan(α+β) 로 바꾸기(★2) (2) β 의 범위를 빼고 「cos β=−2/3 인 β 가 둘」로 두어 두 경우를 모두 따지게(★3 · I-MI) (3) sin(α+β) 값을 주고 β 의 범위를 되묻기(★3 · I-BW)."
```

```yaml
- id: RPM-CALC2-0473
  page: 71
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    두 직선 y=−2x+1, y=x+1 이 이루는 예각의 크기를 θ 라 할 때 sec²θ 의 값.
  category: "두 직선이 이루는 각의 tan 공식 → tan θ=3 → sec²θ=1+tan²θ"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 직선이 이루는 예각의 tan 과 sec²θ=1+tan²θ"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 직선의 기울기가 −2, 1 이므로 tan θ=|(1−(−2))/(1+(−2)·1)|=|3/(−1)|=3(예각이므로 절댓값). sec²θ=1+tan²θ=10. 공식 두 개를 순서대로 쓰는 한 단계짜리 절차형이고 M_total 4 → 서술형 출발점 ★3 에서 −1 하여 ★2. 절댓값을 빼면 tan θ=−3 이 나와 둔각이 되는 T-부호 함정만 있다.
  tier: star_2
  mechanism_primary: "tan θ=|(m₂−m₁)/(1+m₁m₂)|=3 → sec²θ=1+9=10"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$10$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0473.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 기울기 −2, 1(y절편 1 은 각과 무관하므로 자유). 제약: 1+m₁m₂≠0(수직이면 tan 정의 안 됨)이고 tan θ 가 유리수로 떨어지도록 기울기를 정수로. sec²θ 가 정수가 되려면 tan θ 도 정수."
    creative: "(1) sec²θ 대신 cos 2θ·sin θ 로 묻기(★2) (2) 한 직선의 기울기를 미지수 m 으로 두고 θ=π/4 가 되는 m 을 모두 구하기(★3 · I-BW·I-MI) (3) 세 직선이 이루는 각 중 가장 작은 것을 고르게(★3 · I-SC)."
```

```yaml
- id: RPM-CALC2-0474
  page: 71
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    lim_{x→π/2} cos x/(ax+b)=1/2 일 때 상수 a, b 에 대하여 ab 의 값.
  category: "극한이 0 이 아닌 유한값·분자→0 → 분모→0 → b=−aπ/2 → t 치환 → −1/a=1/2"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수 극한값으로 일차식의 미정계수 결정(분모→0 판단)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    x→π/2 에서 분자 cos x→0 인데 극한이 1/2(≠0)이므로 분모도 0 이어야 한다 → a(π/2)+b=0, 즉 ax+b=a(x−π/2). t=x−π/2 로 놓으면 cos(t+π/2)=−sin t 이므로 극한은 −sin t/(at) → −1/a=1/2 → a=−2, b=π, ab=−2π. 분모→0 역추론과 cos→−sin 변환의 두 부호 처리가 겹치는 절차형 M_total 6 → 서술형 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "분모→0 → b=−aπ/2 → t=x−π/2 → −sin t/(at) → −1/a=1/2 → a=−2, b=π → −2π"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$-2\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0474.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "극한점 π/2 와 극한값 1/2. 제약: 극한점에서 분자가 0 이어야 하고(cos 은 π/2 의 홀수배), a=−1/(극한값) 이 정수가 되도록 극한값을 단위분수로. 답 ab=−aπ/2·a 에 π 가 남으므로 주관식."
    creative: "(1) 분자를 sin x, 극한점을 π 로 바꾸기(sin(t+π)=−sin t · 같은 골조 ★3) (2) 분모를 ax²+b 로 올려 두 해 중 하나를 고르게(★3~4 · I-MI) (3) 극한값을 주지 않고 「극한이 존재하고 0 이 아니다」만 주어 a, b 의 관계식을 구하게(★3 · I-EQV)."
```

```yaml
- id: RPM-CALC2-0475
  page: 71
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    A(1,0)과 단위원 위의 점 B, ∠AOB=θ, B 에서 x축에 내린 수선의 발 C. 부채꼴 OAB 의 넓이 S₁, 삼각형 BOC 의 넓이 S₂ 일 때 lim_{θ→0+} S₁/S₂.
  category: "S₁=θ/2, S₂=(1/2)sin θ cos θ → 비 = θ/(sin θ cos θ) → 1"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "단위원의 부채꼴과 직각삼각형의 넓이비의 θ→0 극한"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    반지름 1 이므로 S₁=(1/2)·1²·θ=θ/2 이고, C(cos θ, 0)·B(cos θ, sin θ) 이므로 S₂=(1/2)cos θ sin θ. S₁/S₂=θ/(sin θ cos θ)=[θ/sin θ]·(1/cos θ) → 1·1=1. 두 넓이 공식을 그림에서 바로 읽고 sin θ/θ→1 을 쓰는 표준 골조라 통찰 0·M_total 5 → 서술형 출발점 ★3 에서 −1 하여 ★2.
  tier: star_2
  mechanism_primary: "S₁=θ/2, S₂=(1/2)sin θ cos θ → θ/(sin θ cos θ) → 1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$1$"
  answer_source: "답지"
  figure: "crop:fig-0475.png"
  latex: latex-bank/rpm-calc2/items/0475.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "원의 반지름 1(반지름 r 이면 S₁=r²θ/2, S₂=r²sin θ cos θ/2 로 r 이 약분되어 답은 그대로 1). 제약: 두 넓이가 모두 θ 의 1차 소량이어야 비가 유한. 그림의 라벨 A·B·C·O·θ 는 고정."
    creative: "(1) S₂ 를 삼각형 ABC 의 넓이로 바꾸면 (1−cos θ)sin θ/2 로 3차 소량 → S₁/S₂ 가 발산(★3 · 차수 감각) (2) 활꼴(부채꼴−삼각형 OBC 아님)의 넓이와의 비로 바꾸면 θ³ 차수(★4) (3) S₁/S₂ 대신 (S₁−S₂)/θ³ 를 묻기(★4 · I-RT d2)."
```

### 실력 Up

```yaml
- id: RPM-CALC2-0476
  page: 71
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    실수 전체에서 미분가능한 f 에 대하여 f'(1)=10 일 때 lim_{x→0} [f(2−cos x)−f(1)]/x² 의 값.
  category: "증분 (2−cos x)−1=1−cos x → 미분계수 정의 × (1−cos x)/x² → 10·(1/2)"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "합성된 인자 2−cos x 를 1 에서의 증분 1−cos x 로 읽고, 주어진 분수를 [f(u)−f(1)]/(u−1) 과 (1−cos x)/x² 의 곱으로 쪼갬 — 미지 함수의 극한을 미분계수 정의와 표준 삼각 극한의 곱으로 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "합성 증분의 미분계수 정의 분해와 (1−cos x)/x² 극한"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    u=2−cos x 로 두면 x→0 일 때 u→1 이고 u−1=1−cos x. 주어진 식은 {[f(u)−f(1)]/(u−1)}·{(1−cos x)/x²} 이므로 f'(1)·(1/2)=10·(1/2)=5. 증분을 1−cos x 로 읽는 RT d1 통찰 1개·M_total 6(미지 함수 f 는 값 하나짜리 인자라 Mₐ=2).
    [분류 이슈] 실력 Up 구역 출발점 ★4 이나 통찰 1개·d1 의 표준 골조(미분계수 정의 × 표준 극한)라 ★3 으로 내림(기록만 · ★4 후보).
  tier: star_3
  mechanism_primary: "u=2−cos x → [f(u)−f(1)]/(u−1)·(1−cos x)/x² → f'(1)·(1/2)=5"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$5$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0476.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f'(1) 의 값 10 과 기준점 1(인자 2−cos x 의 상수 2 를 바꾸면 기준점도 같이 이동). 제약: x→0 에서 인자가 기준점으로 가야 하고, 분모 x² 와 증분 1−cos x 의 차수(둘 다 2차)가 맞아야 유한. 답은 f'(기준점)/2."
    creative: "(1) 인자를 1+sin x, 분모를 x 로 바꾸면 f'(1) 그대로(★2 · 차수 1) (2) 분모를 x⁴ 로 올려 극한이 발산함을 판단하게(★3 · 차수 감각) (3) f'(1) 대신 「f(1)=2, f'(1)=10」 을 주고 lim [f(2−cos x)]^{1/x²} 같은 지수형으로(★4~5 · I-XU)."
```

```yaml
- id: RPM-CALC2-0477
  page: 71
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    구간 (−π/2, π/2)에서 x≠0 이면 x²+x²/(1+tan²x)+x²/(1+tan²x)²+⋯, x=0 이면 a 인 함수가 x=0 에서 연속이 되도록 하는 상수 a.
  category: "1+tan²x=sec²x → 공비 cos²x 인 등비급수 → 합 x²/sin²x → 극한 1"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "1+tan²x=sec²x 로 각 항의 비가 cos²x 임을 읽어 무한등비급수(수열의 극한 단원)의 합 공식으로 닫고, 닫힌 식 x²/sin²x 를 삼각함수의 극한으로 넘김 — 급수와 삼각 극한 두 단원의 도구가 모두 필요"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "무한등비급수의 합을 닫은 뒤 연속 조건으로 상수 결정(삼각 항등식)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    1/(1+tan²x)=cos²x 이므로 급수는 첫항 x², 공비 cos²x 인 무한등비급수다. 0<|x|<π/2 에서 0≤cos²x<1 이라 수렴하고 합은 x²/(1−cos²x)=x²/sin²x. 연속 조건 a=lim_{x→0} (x/sin x)²=1. 급수를 닫는 XU d2 통찰 1개·M_total 6(공비<1 범위와 x=0 제외 경계로 Mₜ=2).
    [분류 이슈] 실력 Up 구역 출발점 ★4 이나 「sec² 항등식 → 등비급수 → sin x/x」 는 이 단원의 표준 골조이고 통찰 1개라 ★3 으로 내림(기록만 · ★4 후보).
  tier: star_3
  mechanism_primary: "1/(1+tan²x)=cos²x → 합 x²/(1−cos²x)=x²/sin²x → a=lim (x/sin x)²=1"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$1$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0477.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫항 x² 의 차수(x 로 낮추면 합이 x/sin²x 라 발산 · x³ 이면 0)와 공비 1/(1+tan²x). 제약: 첫항의 차수가 1−공비=sin²x 의 차수(2차)와 같아야 a 가 0 도 ∞ 도 아닌 값이 된다. 구간은 tan 이 정의되는 (−π/2, π/2) 로 고정."
    creative: "(1) 공비를 1/(1+cot²x)=sin²x 로 바꾸면 합이 x²/cos²x → a=0(★3 · 차수 비교) (2) 첫항을 1−cos x 로 두어 차수 감각만 묻기(★3) (3) a 를 주고 첫항의 차수를 되묻기(★4 · I-BW) (4) 급수의 수렴 범위까지 함께 서술하게(★4 · I-VF)."
```

```yaml
- id: RPM-CALC2-0478
  page: 71
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: ["교육청 기출"]
  category_type: "실력 Up"
  summary: |
    AB=2 를 지름으로 하는 반원의 호 AB 위의 점 P, 호 AP 위에 호 PB=호 PQ 인 점 Q, AP 와 BQ 의 교점 R, B 를 지나 AB 에 수직인 직선과 직선 AP 의 교점 S. ∠BAP=θ 일 때 선분 PR·QR 과 호 PQ 로 둘러싸인 넓이 f(θ), 선분 PS·BS 와 호 BP 로 둘러싸인 넓이 g(θ) 에 대하여 lim_{θ→0+} [f(θ)+g(θ)]/θ³.
  category: "원주각 → 호 PB·PQ 의 중심각 2θ → f+g 에서 활꼴 상쇄 → △PQR+△PBS=4sin³θcos θ → 4"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "원주각 ∠BAP=θ 를 호 PB 의 중심각 2θ 로 옮기고 「호 PQ=호 PB」를 Q 의 중심각 4θ 로 읽어, 도형의 길이·각을 모두 θ 의 삼각식(AP=2cos θ, BS=2tan θ, RP=2sin²θ/cos θ, RQ=2sin θcos 2θ/cos θ)으로 전환"
    - step: 3
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f(θ)=△PQR+활꼴(중심각 2θ), g(θ)=△PBS−활꼴(중심각 2θ) 이고 두 활꼴의 중심각이 같으므로 f+g 를 「삼각형 두 개의 넓이 합」으로 동치 변환 — 활꼴 넓이 (2θ−sin 2θ)/2 를 아예 구하지 않고 끝냄"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "반원 위 두 영역의 넓이 합과 θ³ 차수 극한(활꼴 상쇄)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    ∠APB=π/2 이므로 AP=2cos θ, BP=2sin θ 이고 호 PB 의 중심각은 2θ, 호 PQ=호 PB 이므로 Q 는 중심각 4θ 위치다. S=(1,2tan θ) 에서 △PBS=(1/2)(2tan θ)(1−cos 2θ)=2sin³θ/cos θ, AR=2cos 2θ/cos θ 이므로 RP=2sin²θ/cos θ·RQ=2sin θcos 2θ/cos θ·∠PRQ=π/2+θ 로 △PQR=2sin³θcos 2θ/cos θ. 두 활꼴(중심각 모두 2θ)이 상쇄되어 f+g=(2sin³θ/cos θ)(1+cos 2θ)=4sin³θcos θ → 극한 4. 각 전환(RT d2)과 활꼴 상쇄(EQV d2) 통찰 2개·M_total 8 → 실력 Up 출발점 ★4 유지.
  tier: star_4
  mechanism_primary: "호 PB=호 PQ → 중심각 2θ·4θ → f+g=△PQR+△PBS(활꼴 상쇄)=4sin³θcos θ → 4"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: "$4$"
  answer_source: "답지"
  figure: "crop:fig-0478.png"
  latex: latex-bank/rpm-calc2/items/0478.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지름 2(지름 d 면 두 넓이가 d² 배라 극한은 d²배 = 4 → d²). 제약: 「호 PQ=호 PB」 는 두 활꼴의 중심각을 같게 만들어 상쇄를 일으키는 핵심이라 비율을 바꾸면(호 PQ=2호 PB) 상쇄가 깨져 활꼴 (2θ−sin 2θ)/2 ~ 2θ³/3 항이 남고 답이 바뀐다. θ 범위 0<θ<π/4 와 그림 라벨 A·B·P·Q·R·S 는 고정."
    creative: "(1) f(θ)/θ³ 와 g(θ)/θ³ 를 따로 묻기 → 활꼴 상쇄가 막히고 각각 발산·유한 판단이 필요(★5 · I-VF) (2) 호 PQ=k·호 PB 로 일반화해 극한이 유한이 되는 k 를 찾게(★5 · I-BW) (3) 넓이 합 대신 둘레의 합으로 바꾸면 1차 소량이라 θ 로 나눔(★3) (4) S 를 B 에서의 접선과 AP 의 교점으로 바꾸면 같은 점이라 골조 유지(★4)."
```

## 표본 판정 요약 (42문)

- ★ 분포: ★1 2 · ★2 27 · ★3 12 · ★4 1 · ★5 0 (평균 ★2.29)
- 통찰형 11 · 절차형 31 · premium 0 · depth_score 합 17.00(통찰형 평균 1.55)
- 통찰 유형: I-RT 7 · I-EQV 4 · I-XU 1 (SC·VF·SYM·PD·BW·MI·CON 0 — ★5 자격 유형이 이 범위에 거의 없어 천장이 ★4)
- M_total 평균 5.38(최소 4 · 최대 8 · 8 은 0457 · 0478 둘뿐). Mₖ≥2 는 6문뿐 — 계산 마찰이 아니라 변환 단계 수로 난이도가 갈린다.
- 구역별: 유형 16~19 14문(★2 11 · ★3 3) · 시험에 꼭 나오는 문제 21문(★1 2 · ★2 13 · ★3 6) · 서술형 주관식 4문(★2 3 · ★3 1) · 실력 Up 3문(★3 2 · ★4 1)
- 대상층: 하위권 2 · 중하위권 26 · 중위권 12 · 중상위권 1 · 상위권 1
- type_hint 상위: 「덧셈정리로 각의 합·차의 값」 9(0452·0453·0454·0455·0456·0457·0458·0472·0473) · 「미정계수·연속·미분가능 조건으로 상수 결정」 8(0443·0444·0445·0465·0466·0467·0474·0477) · 「도형에서의 삼각함수 극한(차수 감각)」 7(0447·0448·0449·0450·0471·0475·0478) · 「삼각함수 극한 계산(치환·표준 극한)」 6(0439·0460·0461·0462·0463·0464) · 「미분계수의 정의를 이용한 극한값」 5(0440·0441·0442·0470·0476) · 「삼각함수의 도함수·미분계수 직접 계산」 5(0436·0437·0438·0468·0469)
- 그림: 9문(`crop:fig-0447.png` · `crop:fig-0448.png` · `crop:fig-0449.png` · `crop:fig-0450.png` · `crop:fig-0456.png` · `crop:fig-0457.png` · `crop:fig-0471.png` · `crop:fig-0475.png` · `crop:fig-0478.png`)
- 답 대조: 42문 모두 다시 풀어 전사본 `answer` 와 일치. 「전사 답 확인 필요」로 남긴 문항 없음.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-CALC2-0445 | 벤더 「상중」·서술형 라벨이나 통찰 0 이고 골조가 같은 유형의 대표문제와 동일 → ★2 후보(라벨 ★3 유지) | ★2 / ★3 |
| RPM-CALC2-0457 | M_total 8·RT d2 로 종합 구역에서 가장 무거우나 통찰 1개라 +1 규칙에 미달 → ★4 후보(라벨 ★3 유지) | ★3 / ★4 |
| RPM-CALC2-0463 | 절차형이지만 치환·삼각 변환·합성 세 기법이 겹쳐 종합 구역 안에서 ★3 경계(라벨 ★2) | ★2 / ★3 |
| RPM-CALC2-0476 | 실력 Up 구역 출발점 ★4 이나 통찰 1개·d1(미분계수 정의 × 표준 극한)의 표준 골조 → ★3 으로 내림 | ★3 / ★4 |
| RPM-CALC2-0477 | 실력 Up 구역 출발점 ★4 이나 「sec² 항등식 → 등비급수 → sin x/x」 는 이 단원의 표준 골조이고 통찰 1개 → ★3 으로 내림 | ★3 / ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: ① 「미분계수의 정의 변형(증분 계수·양쪽 증분)」 — 0440·0441·0442·0470·0476 이 모두 같은 골조인데 증분의 계수·부호·합성 여부만 다르다. base ★2, 합성 증분(0476)만 ★3. ② 「도형 조건 → θ 의 삼각식 → 차수 비교」 — 0447~0450·0471·0475·0478 의 공통 골조. 답이 유한이냐 0 이냐 발산이냐는 분자·분모의 θ 차수로 결정되므로 base ★3 에 「차수 일치」를 판정 기준으로 둘 것. ③ 「구간별 함수의 미분가능 조건」(0443·0444·0445)은 연속+미분계수 일치 2식 연립이 고정이라 base ★2 로 별도 유형.
- **통합해도 될 유형**: 덧셈정리 계열 9문(0452~0458·0472·0473)은 sin/cos/tan 과 도형/좌표 포장만 다를 뿐 「두 각의 삼각함수 값 확보 → 덧셈정리 대입」 한 골조다. 하위 구분은 유형이 아니라 variation_notes 의 creative 축으로 두는 편이 낫다. 「연속 조건으로 상수 결정」(0466·0474·0477)도 「미정계수 결정」 유형 하나로 묶고 극한의 종류만 태그로 구분하면 된다.
- **★4~5 슬롯 부족**: 이 범위의 통찰은 I-RT 7·I-EQV 4·I-XU 1 뿐이고 SC·VF·SYM·PD 는 0 이다. §2.13 기준으로 ★5 를 세울 문항이 없으므로, 카탈로그에서 이 단원의 ★4·★5 유형은 0478 계열(활꼴 상쇄·차수 비교)을 확장하거나 다른 단원과의 XU 결합으로 따로 설계해야 한다.
