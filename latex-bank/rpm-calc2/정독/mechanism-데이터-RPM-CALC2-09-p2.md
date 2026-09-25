---
name: mechanism-데이터-RPM-CALC2-09-p2
description: RPM 미적분Ⅱ 09 치환적분법과 부분적분법(2/4 · 유형 05~12) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 미적분Ⅱ (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-calc2
  section: 09 치환적분법과 부분적분법
  unit_code: CALC2-09
  part: "2/4"
  extract_range: "138~141쪽 · 0974~1003"
  total_problems: 30
  unit_total: 129
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-calc2/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-calc2/items/<id>.tex
  image_source: latex-bank/rpm-calc2/figures/ (crops.json)
---

# RPM 미적분Ⅱ · 09 치환적분법과 부분적분법 (2/4) 정독 데이터 (v1.0)

이 파일은 RPM 미적분Ⅱ 09 치환적분법과 부분적분법 단원의 둘째 범위(138~141쪽 · 0974~1003 · 30문항)를 다룬다. 30문 전부 「유형」 구역이며 여덟 유형이 이어진다 — 「유형 05 치환적분법; 삼각함수 (1)」 4문(0974~0977 · ax+b 꼴 삼각 적분과 극값·극한 조건) · 「유형 06 치환적분법; 삼각함수 (2)」 4문(0978~0981 · g(sin x)cos x, g(cos x)sin x 치환) · 「유형 07 f'(x)/f(x) 꼴의 치환적분」 5문(0982~0986 · 로그 적분과 f'=3f 관계식·역함수 미분) · 「유형 08 (분자 차수)≥(분모 차수)」 2문(0987~0988 · 나눗셈 후 로그) · 「유형 09 (분자 차수)<(분모 차수)」 3문(0989~0991 · 부분분수) · 「유형 10 정적분; 분수·무리함수」 4문(0992~0995) · 「유형 11 정적분; 지수·로그」 4문(0996~0999) · 「유형 12 정적분; 삼각함수」 4문(1000~1003). RPM 은 구역이 곧 난이도 층이므로 출발점은 유형 구역 기본 ★2 이고, 각 유형의 첫 문항(태그 「대표문제」 8문 · level 없음)이 그 유형의 대표다. 난이도 표시는 중하 4문(0983·0984·0990·0997) · 중 15문 · 상중 3문(0977·0986·0995)이고, 「서술형」 태그 2문(0988·0994) · 기출 태그 없음 · 그림 없음.

출발점에서 M_total·통찰로만 ±1 조정했다. 치환 한 번에 상하한 대입으로 끝나는 문항(통찰 0·M_total 4)은 −1 을 적용해 ★1 로 두었고(12문 — 대표문제 5문과 중하 4문 포함, 중 표시 0979·0980·1001 도 M_total 4 라 ★1), 적분 뒤에 적분상수 결정·최댓값·계수 비교·절댓값 함정·미지 상한 방정식이 한 단계 더 붙는 문항은 M_total 5~7 이라 ★2 를 유지했다(15문). 통찰이 잡힌 문항은 5문뿐이다 — 극솟값 조건을 부호 변화로 번역하는 0976(EQV) · 극한 조건을 f(π)=0, f'(π)=a−1 로 번역하는 0977(EQV) · f'=3f 를 f'/f=3 으로 바꾸는 0985(EQV) · 역함수 미분계수의 대응점을 역추적하는 0986(BW) · 무리식을 t=√(x−2) 로 유리화해 부분분수로 잇는 0995(RT). 모두 depth 1 이라 +1 은 적용하지 않았고 상중 3문은 ★3 으로 두었다. ★1/★2 경계(0981) · 통찰 개수(0986) · 절차형 M_total 7(1003) 세 문항은 [분류 이슈] 로 기록만 했다. 답은 30문 모두 재계산해 전사 답과 일치함을 확인했다.

주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄 · 조건 → 변환 → 답 화살표 사슬) · `insights[]`(유형 코드+depth+근거 · 절차형은 빈 배열) · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 창의 변형과 ★ 변동 지점)를 채웠다. 유형 카탈로그가 없는 과목이므로 `type_id`·`base_star` 는 null 이고 `type_hint` 로 유형명을 제안했다. 이 범위에서는 f'(x)/f(x) 꼴이 유형 07·10·11·12 에 걸쳐 일곱 번 반복되므로 카탈로그를 세울 때 함수 종류(다항·지수·삼각)와 무관한 한 유형으로 묶을 후보다(파일 끝 메모).

## 문항 데이터

### 유형 05 치환적분법; 삼각함수 (1)

```yaml
- id: RPM-CALC2-0974
  page: 138
  vendor_label: "유형 05 치환적분법; 삼각함수 (1)"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    f(x)=∫(sec²x+sin 3x)dx 이고 f(0)=1 일 때 f(π/3) 의 값.
  category: "삼각함수 기본 적분(sec² · sin 3x) → 적분상수 결정 → 함숫값"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수의 부정적분(ax+b 꼴 치환)과 적분상수 결정"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ∫sec²x dx=tan x, ∫sin 3x dx=−(1/3)cos 3x 를 그대로 쓰고 f(0)=1 로 C=4/3. f(π/3)=√3+1/3+4/3. 공식 대입 세 단계·통찰 없음·M_total 4 → 유형 대표 출발 ★2 에서 −1 → ★1. 함정은 cos 3x 의 부호와 1/3 계수뿐.
  tier: star_1
  mechanism_primary: "항별 적분 tan x−(1/3)cos 3x+C → f(0)=1 로 C=4/3 → f(π/3)=√3+5/3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\sqrt{3}+\dfrac{5}{3}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0974.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "피적분함수의 항(sec²x → csc²x, sin 3x → cos 2x·sin(x/2))·초기조건 f(0)=1·평가점(π/3 → π/4·π/6)을 바꿀 수 있음. 제약: 평가점에서 tan·cos 값이 유리수나 √3·√2 로 정리되고, sec² 항이면 조건점과 평가점이 tan 의 같은 연속 구간 안이어야 함."
    creative: "(1) 초기조건을 f(π/4)=k 로 옮기기(★1 유지) (2) sec²x tan x 처럼 곱 꼴로 바꿔 t=tan x 치환을 요구(유형 06 골조 ★2) (3) 조건을 극값이나 접선 기울기로 주면 EQV d1 이 붙어 ★2."
```

```yaml
- id: RPM-CALC2-0975
  page: 138
  vendor_label: "유형 05 치환적분법; 삼각함수 (1)"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    ∫(sin x−1)²dx = a sin 2x + b cos x + cx + C 가 성립할 때 상수 a, b, c 의 곱 abc.
  category: "제곱 전개 → 반각 공식 sin²x=(1−cos 2x)/2 → 항별 적분 → 계수 비교"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수의 제곱 꼴 적분(반각 공식)과 계수 비교"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (sin x−1)²=sin²x−2 sin x+1 에서 sin²x 를 반각으로 내리면 3/2−(1/2)cos 2x−2 sin x. 적분해 (3/2)x−(1/4)sin 2x+2 cos x+C → a=−1/4, b=2, c=3/2, abc=−3/4. 반각 공식은 표준 항등식이라 통찰로 세지 않음. 유형·중 출발 ★2, M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "제곱 전개 → sin²x 반각 공식 → 항별 적분 (3/2)x−(1/4)sin 2x+2 cos x → a, b, c 계수 비교 → abc=−3/4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-\dfrac{3}{4}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0975.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "(sin x−1)² → (cos x+1)²·(1−2 sin x)²·(sin x+cos x)² 로 바꿀 수 있음. 제약: 전개 뒤 sin²·cos²·sin x cos x 항이 반각·2배각 공식으로 1차 삼각식이 되어야 하고, 우변 꼴(a sin 2x+b cos x+cx)의 항 종류가 그 결과와 맞아야 함. abc 가 0 이 되지 않게 계수를 잡음."
    creative: "(1) (sin x+cos x)² 로 바꿔 sin x cos x → (1/2)sin 2x 2배각까지 요구(★2) (2) 우변 꼴을 주지 않고 f(0)=k 조건으로 함숫값을 묻기(★2) (3) (sin x−cos x)² 처럼 항이 상쇄되는 설정에서 sin 2x 계수만 묻기 — SYM d1 이 붙으면 ★3 후보."
```

```yaml
- id: RPM-CALC2-0976
  page: 138
  vendor_label: "유형 05 치환적분법; 삼각함수 (1)"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f'(x)=sin 2x−cos 2x (0<x<π) 이고 f(x) 의 극솟값이 √2/2 일 때 f(x) 의 극댓값.
  category: "f' 적분 → f'=0 의 근과 부호 변화로 극소·극대 판별 → 극솟값으로 C → 극댓값"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "극솟값 조건을 f'(x)=0 의 두 근 π/8·5π/8 중 부호가 −→+ 로 바뀌는 x=π/8 에서의 함숫값=√2/2 로 번역해 C 를 결정"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "도함수가 삼각함수인 함수의 극값과 적분상수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f=−(1/2)cos 2x−(1/2)sin 2x+C. f'=√2 sin(2x−π/4) 로 보면 0<x<π 에서 π/8 극소·5π/8 극대. f(π/8)=−√2/2+C=√2/2 → C=√2, f(5π/8)=√2/2+√2=3√2/2. 극값의 위치·종류를 부호 분석으로 골라 조건을 옮기는 EQV 1개(d1). 유형·중 출발 ★2, M_total 7·통찰 1 → ★2 유지. 함정: 구간 0<x<π 안의 근 선택(T-범위)·극소/극대 뒤바꿈(T-부호).
  tier: star_2
  mechanism_primary: "f' 항별 적분 → tan 2x=1 로 극점 π/8·5π/8 → 부호 변화로 극소=π/8 → 극솟값 √2/2 로 C=√2 → f(5π/8)=3√2/2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{3\sqrt{2}}{2}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0976.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f' 를 sin 2x+cos 2x·√3 sin 2x−cos 2x·sin x−cos x 로, 구간을 0<x<2π 로, 주어진 극값을 극댓값으로 바꿀 수 있음. 제약: f'=0 의 근이 구간 안에서 특수각으로 떨어지고 극소·극대가 각각 하나 이상 있어야 하며 극값 상수가 삼각 특수값의 합으로 정리돼야 함."
    creative: "(1) 극댓값을 주고 극솟값을 묻기(★2 동일) (2) 극댓값과 극솟값의 차만 묻기 — C 가 소거되어 적분상수 단계가 빠짐(★2·EQV 유지) (3) f'=a sin 2x−cos 2x 매개변수로 주고 극값의 차가 k 가 되는 a 를 묻기 — 합성 진폭 √(a²+1) 활용 BW d2 → ★3."
```

```yaml
- id: RPM-CALC2-0977
  page: 138
  vendor_label: "유형 05 치환적분법; 삼각함수 (1)"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    ㈎ f'(x)=a cos(x/3), ㈏ lim_{x→π} f(x)/(x−π) = a−1 을 만족시키는 f 에 대하여 상수 a 의 값과 af(3π).
  category: "극한 조건 → f(π)=0·f'(π)=a−1 → a 결정 → 적분·C → 함숫값"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "극한이 존재하고 분모→0 이므로 f(π)=0 이고, 극한은 미분계수 정의로 f'(π)=a−1 — 극한 조건을 두 등식으로 번역"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "극한 조건(미분계수 정의)으로 적분상수·매개변수를 정하는 삼각함수 적분"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f'(π)=a cos(π/3)=a/2=a−1 → a=2. f=6 sin(x/3)+C, f(π)=3√3+C=0 → C=−3√3. f(3π)=6 sin π−3√3=−3√3, af(3π)=−6√3. 극한→미분계수 번역 EQV 1개(d1)에 cos(x/3) 적분(×3)과 매개변수 a. 유형·상중 출발 ★3, M_total 6·통찰 1 → ★3 유지(−1 후보 아님).
  tier: star_3
  mechanism_primary: "lim 조건 → f(π)=0, f'(π)=a−1 → a=2 → f=6 sin(x/3)+C → C=−3√3 → af(3π)=−6√3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-6\sqrt{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0977.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "cos(x/3) → sin(x/2)·cos 2x, 극한점 π → 2π·π/2, 극한값 a−1 → 2a·a+1 로 바꿀 수 있음. 제약: f'(극한점)=(주어진 값) 이 a 의 일차방정식으로 유일해를 갖고, f(극한점)=0 에서 C 가 √3·√2 등 특수값으로 떨어지며 최종 평가점의 sin 값이 간단해야 함."
    creative: "(1) 극한 조건을 접선 조건(x=π 에서의 접선이 y=(a−1)(x−π))으로 바꾸기 — 같은 EQV ★3 (2) lim 을 f(x)/(x−π)² 꼴로 주어 f(π)=f'(π)=0 두 조건이 필요하게 하면 EQV d2 → ★3~4 (3) 조건 ㈎ 를 f''(x) 로 주면 적분 두 번·상수 둘 → M 상승 ★4 후보."
```

### 유형 06 치환적분법; 삼각함수 (2)

```yaml
- id: RPM-CALC2-0978
  page: 138
  vendor_label: "유형 06 치환적분법; 삼각함수 (2)"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    f(x)=∫(1−cos x)³ sin x dx 이고 f(0)=0 일 때 f(x) 의 최댓값. 5지선다.
  category: "t=1−cos x 치환(dt=sin x dx) → t⁴/4 → C → 1−cos x 의 범위로 최댓값"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수 치환적분(g(cos x)·sin x 꼴)과 함수의 최댓값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    t=1−cos x 로 f=(1−cos x)⁴/4+C, f(0)=0 → C=0. 0≤1−cos x≤2 이므로 최댓값은 cos x=−1 에서 2⁴/4=4. 치환 착안은 유형 06 의 표준 절차·최댓값은 코사인 범위 한 줄. 통찰 0·M_total 5 로 −1 후보이나 적분 뒤 최댓값 단계가 이어져 유형 대표 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "t=1−cos x 치환 → (1−cos x)⁴/4 → f(0)=0 로 C=0 → 0≤1−cos x≤2 로 최댓값 4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0978.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "거듭제곱 3 → 2·4, 1−cos x → 1+sin x·2−cos x, 초기조건 f(0)=0 → f(π)=k 로 바꿀 수 있음. 제약: 치환 뒤 t 의 범위가 닫힌 구간으로 정해져야 하고, 최댓값이 t 범위의 끝점(cos x=±1)에서 나오도록 거듭제곱이 짝수이거나 t≥0 이어야 함."
    creative: "(1) 최솟값이나 최댓값과 최솟값의 차를 묻기(★2) (2) (1−cos x)³ sin x 를 (1−cos x)³ cos x 로 바꾸면 치환이 막혀 전개·반각이 필요 — SC 판단 추가 ★3 (3) 0≤x≤4π 에서 최댓값을 갖는 x 의 개수를 함께 묻기 ★2~3."
```

```yaml
- id: RPM-CALC2-0979
  page: 138
  vendor_label: "유형 06 치환적분법; 삼각함수 (2)"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    부정적분 ∫sin x cos²x dx.
  category: "t=cos x 치환(dt=−sin x dx) → −t³/3"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수 치환적분(cosⁿx·sin x 꼴)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    cos x=t 로 두면 −∫t²dt=−t³/3+C. 한 단계·부호 한 곳. 유형·중 출발 ★2 에서 통찰 0·M_total 4 로 −1 → ★1(1단 차이 · 이슈 아님).
  tier: star_1
  mechanism_primary: "t=cos x 치환 → −∫t²dt → −(1/3)cos³x+C"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-\dfrac{1}{3}\cos^3 x+C$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0979.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 2 → 3·4, sin x cos²x → cos x sin²x·sin x cos⁴x 로. 제약: 한 인수가 다른 인수의 도함수(부호 포함)여야 하고 적분상수를 답에 포함."
    creative: "(1) 정적분 [0, π/2] 로 바꿔 값을 묻기(★1) (2) sin³x cos²x 처럼 홀수 거듭제곱을 분리해야 하는 꼴(sin²x=1−cos²x)로 확장 ★2 (3) sin x cos x 로 바꿔 t=sin x·t=cos x·2배각 세 풀이가 상수 차이로 같음을 확인하게 하기 — SC d1 ★2."
```

```yaml
- id: RPM-CALC2-0980
  page: 138
  vendor_label: "유형 06 치환적분법; 삼각함수 (2)"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f'(x)=sec²x tan x 이고 f(π/4)=−1/2 일 때 f(π/6) 의 값.
  category: "t=tan x 치환(dt=sec²x dx) → tan²x/2 → C → 함숫값"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수 치환적분(sec²x·tan x 꼴)과 적분상수"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    tan x=t 로 f=tan²x/2+C, f(π/4)=1/2+C=−1/2 → C=−1, f(π/6)=1/6−1=−5/6. t=sec x 로 두어도 상수 차이로 같은 답. 공식 세 단계·통찰 0·M_total 4 → 유형·중 출발 ★2 에서 −1 → ★1.
  tier: star_1
  mechanism_primary: "t=tan x 치환 → tan²x/2+C → f(π/4)=−1/2 로 C=−1 → f(π/6)=−5/6"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-\dfrac{5}{6}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0980.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "sec²x tan x → sec²x tan²x·sec x tan x·csc²x cot x, 조건점 π/4·평가점 π/6 → π/3 등. 제약: 평가점의 tan 값이 유리수나 √3 배여야 하고, tan 의 불연속점 π/2 를 조건점과 평가점 사이에 두지 않음."
    creative: "(1) sec x 치환과 tan x 치환의 두 답이 상수만큼 다름을 확인하게 하기 — SC d1 ★2 (2) f(π/4) 대신 (−π/2, π/2) 에서의 최솟값을 조건으로 주면 tan²x≥0 이용 EQV d1 ★2 (3) 정적분 [0, π/3] 값으로 바꾸면 ★1."
```

```yaml
- id: RPM-CALC2-0981
  page: 138
  vendor_label: "유형 06 치환적분법; 삼각함수 (2)"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=∫cos³x dx 이고 f(0)=0 일 때 f(π/3) 의 값.
  category: "cos³x=(1−sin²x)cos x → t=sin x 치환 → t−t³/3 → C → 함숫값"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수의 홀수 거듭제곱 적분(cos²x=1−sin²x 분리 치환)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    홀수 거듭제곱에서 cos x 하나를 dt 로 남기고 나머지를 1−sin²x 로 바꾸면 sin x−sin³x/3+C, f(0)=0 → C=0. f(π/3)=√3/2−(√3/2)³/3=√3/2−√3/8=3√3/8. 분리 착안은 유형 06 의 표준 기법이라 통찰로 세지 않음. 통찰 0·M_total 5 로 −1 후보이나 단순 치환(0979)보다 한 단계 위(항등식 분리+세제곱 계산)라 유형·중 출발 ★2 유지. [분류 이슈] −1 규칙대로면 ★1 — ★1/★2 경계.
  tier: star_2
  mechanism_primary: "cos³x=(1−sin²x)cos x → t=sin x → sin x−sin³x/3+C → f(0)=0 로 C=0 → f(π/3)=3√3/8"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{3\sqrt{3}}{8}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0981.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "cos³x → sin³x·cos⁵x·sin³x cos²x, 평가점 π/3 → π/6·π/2. 제약: 홀수 거듭제곱 인수가 하나 있어야 분리 치환이 되고(둘 다 짝수면 반각 공식 → 다른 유형), 평가점의 sin·cos 값이 √3/2·1/2 등 특수값."
    creative: "(1) 정적분 [0, π/2] 로 바꾸면 C 단계가 사라져 ★1 (2) cos³x 와 cos²x 를 나란히 주어 홀수/짝수 거듭제곱의 풀이 갈래(분리 치환 vs 반각)를 고르게 하기 — SC d1 ★2~3 (3) f(x) 의 [0, 2π] 최댓값을 묻기 — t=sin x 의 3차식 t−t³/3 의 최댓값(t=1) EQV d1 ★2."
```

### 유형 07 $\dfrac{f'(x)}{f(x)}$ 꼴의 치환적분

```yaml
- id: RPM-CALC2-0982
  page: 139
  vendor_label: '유형 07 $\dfrac{f''(x)}{f(x)}$ 꼴의 치환적분'
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    f(x)=∫3x²/(x³+1)dx 이고 f(0)=1 일 때 f(1) 의 값. 5지선다.
  category: "분자=분모의 도함수 → ln|x³+1| → C → 함숫값"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "f'(x)/f(x) 꼴 적분(다항식)과 적분상수"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    3x²=(x³+1)' 이므로 f=ln|x³+1|+C, f(0)=1 → C=1, f(1)=ln 2+1. 유형 대표 출발 ★2 에서 통찰 0·M_total 4 → −1 → ★1.
  tier: star_1
  mechanism_primary: "(x³+1)'=3x² 확인 → ln|x³+1|+C → f(0)=1 로 C=1 → f(1)=ln 2+1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "④"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0982.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x³+1 → x²+3·x⁴−2, 분자를 도함수의 상수배(6x²)로, 조건점·평가점을 x=1·x=2 로 바꿀 수 있음. 제약: 평가 구간에서 분모가 0 이 되지 않고 분자가 분모 도함수의 상수배여야 함(아니면 유형 08·09 로 넘어감)."
    creative: "(1) 분자를 x² 로 주어 상수배 조정(1/3)을 요구(★1) (2) 분자를 3x²+1 처럼 도함수+상수 로 주어 두 항 분리(★2) (3) 조건을 곡선 y=f(x) 가 점 (0, 1) 을 지난다로 표현 — 같은 골조 ★1."
```

```yaml
- id: RPM-CALC2-0983
  page: 139
  vendor_label: '유형 07 $\dfrac{f''(x)}{f(x)}$ 꼴의 치환적분'
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f'(x)=(x+2)/(x²+4x+5) 이고 f(−2)=0 일 때 f(x) 를 구하기.
  category: "분자를 분모 도함수의 1/2 배로 → (1/2)ln(x²+4x+5) → C=0"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "f'(x)/f(x) 꼴 적분(분자가 도함수의 상수배)과 함수 결정"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (x²+4x+5)'=2x+4=2(x+2) 이므로 f=(1/2)ln(x²+4x+5)+C(분모=(x+2)²+1>0 이라 절댓값 불필요). f(−2)=(1/2)ln 1+C=0 → C=0. 유형·중하 출발·통찰 0·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "(x²+4x+5)'=2(x+2) → (1/2)ln(x²+4x+5)+C → f(−2)=0 로 C=0"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$f(x)=\dfrac{1}{2}\ln(x^2+4x+5)$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0983.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모 x²+4x+5 → x²+2x+3·x²−6x+10(판별식<0 유지), 분자 x+2 → 2x+4·3x+6, 조건점을 분모 최솟값 위치(−2)에서 다른 점으로. 제약: 분모가 항상 양이면 절댓값이 필요 없고, 분모=1 인 점을 조건점으로 잡으면 C=0."
    creative: "(1) 조건점을 f(0)=0 으로 옮겨 C=−(1/2)ln 5 가 남게 하기(★1~2) (2) f(x) 대신 e^{2f(x)} 를 묻기 — 로그·지수 상쇄 EQV d1 ★2 (3) f'(x) 를 (x+2)/(x²+4x+3) 으로 바꾸면 인수분해·부분분수 필요 → 유형 09 ★2."
```

```yaml
- id: RPM-CALC2-0984
  page: 139
  vendor_label: '유형 07 $\dfrac{f''(x)}{f(x)}$ 꼴의 치환적분'
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=e^x/(3e^x+1) 의 한 부정적분을 F 라 할 때 F(ln 5)−F(0). 5지선다.
  category: "분자가 분모 도함수의 1/3 배 → (1/3)ln(3e^x+1) → 두 값의 차"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "f'(x)/f(x) 꼴 적분; 지수함수"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (3e^x+1)'=3e^x 이므로 F=(1/3)ln(3e^x+1)(분모>0 이라 절댓값 불필요). F(ln5)−F(0)=(1/3)(ln16−ln4)=(1/3)ln4=(2/3)ln2. 유형·중하 출발·통찰 0·M_total 4 → −1 적용해 ★1.
  tier: star_1
  mechanism_primary: "분자가 (3e^x+1)' 의 1/3 배 → (1/3)ln(3e^x+1) → (1/3)(ln 16−ln 4)=(2/3)ln 2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0984.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모의 계수 3 → 2·5(적분 계수가 1/2·1/5 로 바뀜), 상한 ln 5 → ln m. 제약: 3e^x+1 은 항상 양수라 절댓값이 필요 없고, 두 끝값 3e^x+1 의 비가 2 의 거듭제곱이어야 선택지가 ln 2 의 유리수배로 떨어진다."
    creative: "(1) F(ln5)−F(0) 대신 정적분 기호로 물으면 유형 11 (★1 유지) (2) F(0)=0 조건을 주고 F(x) 자체를 구하게 하면 적분상수 단계 추가(★1~2) (3) 분모를 (3e^x+1)² 로 올리면 t=3e^x+1 치환 후 t^{-2} 적분 → ★2."
```

```yaml
- id: RPM-CALC2-0985
  page: 139
  vendor_label: '유형 07 $\dfrac{f''(x)}{f(x)}$ 꼴의 치환적분'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)>0 이고 f'(x)=3f(x), f'(0)=3e 일 때 f(1). 5지선다.
  category: "f'/f=3 → 양변 적분 → 지수함수 복원 → 초기조건으로 f(1)"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "f'(x)=3f(x) 를 f'(x)/f(x)=3 으로 옮겨야 이 단원의 로그 적분 꼴이 된다는 동치 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "f'(x)=kf(x) 관계식에서 지수함수 복원"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    관계식을 그대로 두면 손댈 데가 없고, f>0 을 근거로 f'/f=3 으로 옮겨 ln f=3x+C → f=Ae^{3x} 를 얻는 것이 골조다. f'(0)=3f(0)=3e 에서 f(0)=A=e 이므로 f(1)=e·e^3=e^4. 동치 변환 통찰 1개(EQV d1)·M_total 6 → 유형 「중」 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "f'/f=3 → ln f=3x+C → f=Ae^{3x} → f'(0)=3f(0)=3e 로 A=e → f(1)=e^4"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0985.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "비례상수 3 → 2·k, 초기조건 f'(0)=3e → f'(0)=ke^m, 묻는 점 f(1) → f(t). 제약: f(x)>0 조건이 있어야 ln f 로 갈 수 있고, 답이 e 의 정수 거듭제곱이 되도록 초기값을 e 의 거듭제곱으로 잡는다."
    creative: "(1) f'(0) 대신 f(0)=e 를 주면 동치 변환 뒤가 단순 대입이라 ★1~2 (2) f'(x)=3f(x)+1 처럼 상수항을 붙이면 f'/(3f+1) 치환 한 단계 추가 → ★3 (3) f(2)/f(1) 를 물으면 초기값이 필요 없어 골조만 남는다(★2)."
```

```yaml
- id: RPM-CALC2-0986
  page: 139
  vendor_label: '유형 07 $\dfrac{f''(x)}{f(x)}$ 꼴의 치환적분'
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    구간 [0, π/2) 에서 f'(x)=tan x, f(0)=0 인 f 의 역함수를 g 라 할 때 g'(ln 2). 5지선다.
  category: "f=−ln(cos x) 복원 → f(x)=ln 2 인 x=π/3 역추적 → g'=1/f'(π/3)"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "g'(ln 2)=1/f'(g(ln 2)) 를 쓰려면 먼저 f(x)=ln 2 가 되는 x 를 역추적해야 한다(cos x=1/2 → x=π/3)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "f'(x)/f(x) 적분으로 f 복원 후 역함수 미분계수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    tan x=sin x/cos x 의 분자가 −(cos x)' 이므로 f=−ln(cos x)+C, f(0)=0 에서 C=0. 여기서 끝나지 않고 g'(ln 2)=1/f'(π/3)=1/tan(π/3)=√3/3 까지 가야 한다. 적분 복원은 표준이고 대응점 역추적 1개(BW d1)·M_total 6 → 벤더 「상중」 출발점 ★3 유지.
    [분류 이슈] 적분 복원·역함수 미분법·대응점 역추적을 각각 세면 통찰 2~3개(XU 포함)로 ★4 후보로도 읽히지만, 세 단계 모두 교과 표준 절차라 주 통찰 1개만 카운트했다.
  tier: star_3
  mechanism_primary: "f=−ln(cos x)(f(0)=0 로 C=0) → f(x)=ln 2 ↔ cos x=1/2 ↔ x=π/3 → g'(ln2)=1/tan(π/3)=√3/3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0986.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "묻는 값 g'(ln 2) → g'(ln k)(대응점 cos x=1/k), f'(x)=tan x → 2tan x·tan 2x. 제약: cos x=1/k 인 x 가 특수각이어야 f'(x) 값이 무리수 한 개로 떨어지고, 구간 [0, π/2) 안이어야 역함수가 존재한다."
    creative: "(1) g'(ln 2) 대신 g(ln 2) 를 물으면 역추적만 남아 ★2 (2) f'(x)=tan x 를 f'(x)=1/cos x 로 바꾸면 적분 자체가 어려워져 범위 밖 (3) f(0)=0 을 f(π/4)=0 으로 옮기면 적분상수가 남아 대응점 계산이 한 단계 늘어난다(★3)."
```

### 유형 08 분수함수의 치환적분; (분자의 차수)$\ge$(분모의 차수)

```yaml
- id: RPM-CALC2-0987
  page: 139
  vendor_label: '유형 08 분수함수의 치환적분; (분자의 차수)$\ge$(분모의 차수)'
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    f'(x)=(2x²+x+2)/(x−1), f(0)=0 일 때 f(2). 5지선다.
  category: "다항식 나눗셈으로 2x+3+5/(x−1) → 적분 → 적분상수 결정 → f(2)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "(분자 차수)≥(분모 차수) 분수함수 적분; 나눗셈 후 로그"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    2x²+x+2=(x−1)(2x+3)+5 로 나눠 f=x²+3x+5ln|x−1|+C. f(0)=5ln1+C=C=0 이고 f(2)=4+6+5ln1=10. 조건점과 평가점에서 |x−1|=1 이라 로그항이 모두 0 으로 사라지는 설계다(x=1 이 두 점 사이에 있는 점은 교재가 다루지 않는다). 통찰 없음·M_total 6 → 유형 대표문제 ★2 유지.
  tier: star_2
  mechanism_primary: "나눗셈 2x²+x+2=(x−1)(2x+3)+5 → f=x²+3x+5ln|x−1|+C → f(0)=0 로 C=0 → f(2)=10"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0987.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자의 계수(2, 1, 2)와 분모 x−1 → x−a, 조건점·평가점. 제약: 두 평가점이 |x−a|=1 을 만족해야 로그항이 상쇄돼 답이 정수가 되고, 나머지가 정수가 되도록 계수를 잡는다."
    creative: "(1) f(2) 대신 f(3) 을 물으면 5ln2 가 남아 선택지가 로그형(★2) (2) 분자를 삼차식으로 올리면 나눗셈 단계가 늘어 ★2~3 (3) f'(x) 대신 곡선이 두 점을 지난다는 조건으로 주면 0988 골조(★2)."
```

```yaml
- id: RPM-CALC2-0988
  page: 139
  vendor_label: '유형 08 분수함수의 치환적분; (분자의 차수)$\ge$(분모의 차수)'
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    f(x)=∫(4−x)/(x+2)dx 의 그래프가 두 점 (−1, 0), (−3, k) 를 지날 때 k. 서술형.
  category: "−1+6/(x+2) 로 분리 → −x+6ln|x+2|+C → 적분상수 결정 → k"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "(분자 차수)≥(분모 차수) 분수함수 적분; 나눗셈 후 로그"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (4−x)/(x+2)=−1+6/(x+2) 로 분리하면 f=−x+6ln|x+2|+C. f(−1)=1+6ln1+C=0 에서 C=−1, f(−3)=3+6ln1−1=2. 평가점 x=−3 은 x+2<0 이라 절댓값이 필수이고(T-부호), 두 점이 x=−2 를 사이에 두고 있다는 점도 함정(T-범위)이다. 통찰 없음·M_total 6·서술형(+0) → ★2.
  tier: star_2
  mechanism_primary: "(4−x)/(x+2)=−1+6/(x+2) → f=−x+6ln|x+2|+C → f(−1)=0 로 C=−1 → k=f(−3)=2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$2$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0988.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자 4−x → a−x(나머지 a+2), 분모 x+2 → x+c, 두 점의 x 좌표. 제약: 두 점에서 |x+c|=1 이어야 로그항이 사라져 k 가 정수가 되고, 부호가 다른 쪽 점을 하나 넣어야 절댓값 함정이 산다."
    creative: "(1) 두 점을 모두 x+2>0 쪽에 두면 절댓값 함정이 사라져 ★1~2 (2) 한 점을 |x+2|=e 로 잡으면 k 에 로그가 남아 계산 부담만 증가(★2) (3) k 대신 두 점 사이 f 의 최솟값을 물으면 f'=0 판정이 붙어 ★3."
```

### 유형 09 분수함수의 치환적분; (분자의 차수)$<$(분모의 차수)

```yaml
- id: RPM-CALC2-0989
  page: 140
  vendor_label: '유형 09 분수함수의 치환적분; (분자의 차수)$<$(분모의 차수)'
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    ∫(x+5)/(x²+x−2)dx = ln((x+b)²/|x+a|)+C 일 때 상수 a, b 에 대하여 a+b. 5지선다.
  category: "부분분수 −1/(x+2)+2/(x−1) → 로그 하나로 합치기 → 계수 비교"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부분분수 분해 후 로그 적분; 계수 비교"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x²+x−2=(x+2)(x−1) 로 분해하고 A(x−1)+B(x+2)=x+5 에서 A=−1, B=2. 적분하면 2ln|x−1|−ln|x+2|+C=ln((x−1)²/|x+2|)+C 이므로 b=−1, a=2, a+b=1. 계수 +2 쪽이 제곱(분자), −1 쪽이 분모로 가는 대응만 보면 되는 표준 절차라 통찰 없음·M_total 6 → 유형 대표문제 ★2 유지.
  tier: star_2
  mechanism_primary: "(x+5)/((x+2)(x−1))=−1/(x+2)+2/(x−1) → ln((x−1)²/|x+2|)+C → b=−1, a=2 → a+b=1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0989.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자 x+5 와 분모 두 인수 (x+2)(x−1) → 부분분수 계수가 정수가 되는 다른 조합. 제약: 한쪽 계수가 2(제곱으로 올라가는 쪽), 다른 쪽이 −1 이어야 주어진 답 꼴 ln((x+b)²/|x+a|) 이 그대로 유지된다."
    creative: "(1) 답 꼴을 주지 않고 부정적분을 직접 구하게 하면 계수 비교가 빠져 ★2 (2) 분자를 x²+5 로 올리면 유형 08+09 결합 ★3 (3) 분모를 (x+2)(x−1)² 로 만들면 부분분수에 1/(x−1)² 항이 생겨 로그가 아닌 항이 섞인다(★3)."
```

```yaml
- id: RPM-CALC2-0990
  page: 140
  vendor_label: '유형 09 분수함수의 치환적분; (분자의 차수)$<$(분모의 차수)'
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    부정적분 ∫1/(x²+3x)dx 를 구하기. 5지선다.
  category: "1/(x(x+3)) = (1/3)(1/x − 1/(x+3)) → (1/3)ln|x/(x+3)|+C"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부분분수 분해 후 로그 적분"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    두 인수의 차가 3 이므로 1/(x(x+3))=(1/3)(1/x−1/(x+3)), 적분하면 (1/3)ln|x/(x+3)|+C. 선택지는 계수(1/3 vs 3)와 분수의 방향(x/(x+3) vs (x+3)/x)만 뒤집은 함정이다. 중하 출발·통찰 0·M_total 4 → −1 적용해 ★1.
  tier: star_1
  mechanism_primary: "1/(x(x+3))=(1/3)(1/x−1/(x+3)) → (1/3)ln|x/(x+3)|+C"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "⑤"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0990.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x²+3x → x²+kx(계수 1/k) 또는 x²−4(계수 1/4). 제약: 분모가 유리수 근으로 인수분해돼야 하고, 두 인수의 차가 계수의 역수로 바로 나와야 ★1 수준이 유지된다."
    creative: "(1) 정적분으로 바꾸면 유형 10 (★1~2) (2) 분모를 x²+3x+2 로 바꾸면 두 인수 차가 1 이라 계수가 사라져 더 쉬워진다(★1) (3) 분자를 x+1 로 올리면 부분분수 계수 계산이 붙어 ★2."
```

```yaml
- id: RPM-CALC2-0991
  page: 140
  vendor_label: '유형 09 분수함수의 치환적분; (분자의 차수)$<$(분모의 차수)'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=∫(x+2)/(x²+2x−3)dx, f(0)=0 일 때 e^{f(−2)}.
  category: "부분분수 (1/4)/(x+3)+(3/4)/(x−1) → 적분상수 결정 → e^{f(−2)} 로 로그 상쇄"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부분분수 분해 후 로그 적분; 적분상수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (x+2)/((x+3)(x−1)) = (1/4)/(x+3)+(3/4)/(x−1) 이므로 f=(1/4)ln|x+3|+(3/4)ln|x−1|+C, f(0)=0 에서 C=−(1/4)ln3. f(−2)=(3/4)ln3−(1/4)ln3=(1/2)ln3 이고 e^{f(−2)}=√3. x=−2 에서 x−1<0 이라 절댓값이 필수(T-부호). 통찰 없음·M_total 6 → 「중」 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "부분분수 (1/4)/(x+3)+(3/4)/(x−1) → f(0)=0 로 C=−(1/4)ln3 → f(−2)=(1/2)ln3 → e^{f(−2)}=√3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\sqrt{3}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0991.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자 x+2 와 분모 (x+3)(x−1) 의 근, 조건점 0 과 평가점 −2. 제약: 조건점과 평가점 사이에 분모의 근(−3, 1)이 없어야 하고, 로그 계수의 합이 1/2·1 처럼 간단해야 e^{f} 가 √3 같은 꼴로 떨어진다."
    creative: "(1) e^{f(−2)} 대신 f(−2) 를 물으면 로그 정리가 답에 남아 ★2 (2) e^{2f(x)} 를 x 의 유리식으로 나타내게 하면 지수·로그 상쇄가 골조가 돼 EQV 통찰 ★3 (3) 평가점을 x=2 로 옮기면 절댓값 함정이 사라져 ★1~2."
```

### 유형 10 치환적분법을 이용한 정적분; 분수함수, 무리함수

```yaml
- id: RPM-CALC2-0992
  page: 140
  vendor_label: "유형 10 치환적분법을 이용한 정적분; 분수함수, 무리함수"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    정적분 ∫₀¹ (x+1)/(x²+2x+2)dx 의 값.
  category: "분자가 분모 도함수의 1/2 배 → (1/2)[ln(x²+2x+2)]₀¹"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "f'(x)/f(x) 꼴 정적분; 분수함수"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (x²+2x+2)'=2(x+1) 이라 적분은 (1/2)ln(x²+2x+2) 이고, 분모=(x+1)²+1>0 이라 절댓값이 필요 없다. (1/2)(ln5−ln2)=(1/2)ln(5/2). 치환 한 번에 상하한 대입으로 끝남·통찰 0·M_total 4 → 유형 대표문제 ★2 에서 −1 적용해 ★1.
  tier: star_1
  mechanism_primary: "(x²+2x+2)'=2(x+1) → (1/2)[ln(x²+2x+2)]₀¹ → (1/2)ln(5/2)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{1}{2}\ln\dfrac{5}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0992.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모 x²+2x+2 → 판별식<0 인 다른 이차식(x²+4x+5 등), 적분 구간. 제약: 분자가 분모 도함수의 상수배여야 하고, 분모가 항상 양이어야 절댓값 논의가 빠진다."
    creative: "(1) 분자를 x 로만 두면 상수항 분리에서 1/((x+1)²+1) 이 남아 교과 범위를 벗어나므로, 분모를 인수분해되는 꼴로 바꿔 유형 09 로 돌린다 (2) 상한을 미지수 a 로 두고 적분값을 주면 역추적 ★2 (3) f(0)=1 조건의 부정적분으로 바꾸면 유형 07 골조(★1~2)."
```

```yaml
- id: RPM-CALC2-0993
  page: 140
  vendor_label: "유형 10 치환적분법을 이용한 정적분; 분수함수, 무리함수"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    ∫₀³ 3/(x²+5x+4)dx = ln k 일 때 상수 k 에 대하여 7k. 5지선다.
  category: "부분분수 1/(x+1)−1/(x+4) → [ln((x+1)/(x+4))]₀³ → k=16/7"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부분분수 분해 후 로그 정적분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x²+5x+4=(x+1)(x+4) 이고 두 인수의 차가 3 이라 분자 3 이 그대로 떨어져 1/(x+1)−1/(x+4). 적분하면 [ln((x+1)/(x+4))]₀³=ln(4/7)−ln(1/4)=ln(16/7) 이므로 k=16/7, 7k=16. 부분분수 뒤 로그 차 정리까지 두 단계·통찰 없음·M_total 6 → 「중」 출발점 ★2.
  tier: star_2
  mechanism_primary: "3/((x+1)(x+4))=1/(x+1)−1/(x+4) → [ln((x+1)/(x+4))]₀³=ln(16/7) → 7k=16"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0993.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자 3 은 두 인수의 차와 같게(차가 d 면 분자 d) 잡고, 분모 (x+1)(x+4) 의 근과 구간 [0,3] 을 바꾼다. 제약: 구간 안에 분모의 근이 없어야 하고, 양 끝 로그값의 비가 유리수라야 k·7k 가 정수 선택지가 된다."
    creative: "(1) 분자를 1 로 두면 계수 1/3 이 남아 k 가 세제곱근 꼴(★2) (2) 상한을 미지수로 두고 적분값 ln(16/7) 을 주면 역추적 ★3 (3) 부정적분으로 되돌리면 유형 09(★1~2)."
```

```yaml
- id: RPM-CALC2-0994
  page: 140
  vendor_label: "유형 10 치환적분법을 이용한 정적분; 분수함수, 무리함수"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    ∫₀^a x/√(x²+1)dx = 1 일 때 양수 a. 서술형.
  category: "피적분함수가 √(x²+1) 의 도함수 → √(a²+1)−1=1 → a 역추적"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "무리함수 치환 정적분; 상한 역추적"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (√(x²+1))'=x/√(x²+1) 이므로 적분값은 √(a²+1)−1. 이것이 1 이면 √(a²+1)=2, a²=3 이고 양수 조건이 a=−√3 을 기각한다(T-부호). 적분값이 주어지고 상한을 역추적하지만 한 번 제곱해 푸는 표준 방정식이라 통찰로 세지 않았다. M_total 6 → 「중」 출발점 ★2.
  tier: star_2
  mechanism_primary: "x/√(x²+1)=(√(x²+1))' → √(a²+1)−1=1 → a²=3 → a>0 로 a=√3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\sqrt{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0994.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안 x²+1 → x²+c, 적분값 1 → m. 제약: √(c)+m 이 간단해야 a²=(m+√c)²−c 가 유리수·무리수 한 개로 떨어지고, a>0 조건을 남겨 음의 해를 기각하게 둔다."
    creative: "(1) 하한을 0 이 아닌 값으로 옮기면 상수항 계산이 한 단계 늘어난다(★2) (2) 분자를 x³ 로 바꾸면 t=x²+1 치환 뒤 (t−1)/√t 분리가 필요해 ★3 (3) a 를 주고 적분값을 묻는 순방향으로 바꾸면 ★1."
```

```yaml
- id: RPM-CALC2-0995
  page: 140
  vendor_label: "유형 10 치환적분법을 이용한 정적분; 분수함수, 무리함수"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    정적분 ∫₆¹¹ 1/((x−3)√(x−2))dx 의 값.
  category: "t=√(x−2) 치환 → 2/(t²−1) 부분분수 → [ln((t−1)/(t+1))]₂³"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "무리식 √(x−2) 를 t 로 두어 유리식 2/(t²−1) 로 옮겨야 부분분수가 가능해진다는 표현 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "무리식 t 치환 후 부분분수 정적분"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    x=t²+2, dx=2t dt 로 두면 (x−3)√(x−2)=(t²−1)t 라 t 가 약분돼 ∫₂³ 2/(t²−1)dt 가 되고, 여기서 1/(t−1)−1/(t+1) 부분분수로 [ln((t−1)/(t+1))]₂³=ln(1/2)+ln3=ln(3/2). 무리식을 유리식으로 옮기는 착안(RT d1)이 없으면 진행이 안 된다. 치환·구간 변환·부분분수로 M_total 7 → 「상중」 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "t=√(x−2)(x=t²+2, dx=2t dt) → ∫₂³ 2/(t²−1)dt → [ln((t−1)/(t+1))]₂³=ln(3/2)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\ln\dfrac{3}{2}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0995.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 [6,11] → x−2 가 완전제곱이 되는 다른 두 점, 분모 x−3 → x−a(치환 후 t²−(a−2)). 제약: a−2 가 완전제곱이어야 t²−(a−2) 가 유리수 계수로 인수분해되고, 구간 안에 t²=a−2 인 점이 없어야 한다."
    creative: "(1) √(x−2) 를 ∛(x−2) 로 바꾸면 치환 후 차수가 올라 ★3~4 (2) 분모 x−3 을 x−2 로 바꾸면 t² 로 약분돼 ★1~2 (3) 부정적분으로 돌리면 절댓값·정의역 논의가 붙어 ★3."
```

### 유형 11 치환적분법을 이용한 정적분; 지수함수, 로그함수

```yaml
- id: RPM-CALC2-0996
  page: 141
  vendor_label: "유형 11 치환적분법을 이용한 정적분; 지수함수, 로그함수"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    정적분 ∫₀¹ x e^{1−x²}dx 의 값. 5지선다.
  category: "t=1−x² 치환(dt=−2x dx) → (1/2)∫₀¹ e^t dt"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수 치환 정적분(t=g(x))"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    지수의 도함수가 −2x 라 x dx 가 −(1/2)dt 로 흡수된다. 상하한이 1→0 으로 뒤집히면서 부호가 정리돼 (1/2)(e−1). 치환 한 번에 상하한 대입으로 끝남·통찰 0·M_total 4 → 유형 대표문제 ★2 에서 −1 적용해 ★1.
  tier: star_1
  mechanism_primary: "t=1−x², dt=−2x dx → (1/2)∫₀¹ e^t dt → (1/2)(e−1)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "①"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0996.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 1−x² → k−x²·1−x³(분자를 x² 로 맞춤), 구간 [0,1]. 제약: 앞의 다항식이 지수 도함수의 상수배여야 하고, 치환 후 상하한이 정수라야 답이 e 의 간단한 식으로 떨어진다."
    creative: "(1) 상한을 미지수로 두고 적분값을 주면 역추적 ★2 (2) f(x)=e^x 를 써서 f(1−x²) 꼴로 추상화하면 Mₐ 가 올라 1001 골조(★1~2) (3) 지수를 1−x² 대신 (1−x)² 로 바꾸면 x dx 가 흡수되지 않아 전개가 필요하다(★2)."
```

```yaml
- id: RPM-CALC2-0997
  page: 141
  vendor_label: "유형 11 치환적분법을 이용한 정적분; 지수함수, 로그함수"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    정적분 ∫₁^e 1/(x(1+ln x)²)dx 의 값.
  category: "t=1+ln x 치환(dt=dx/x) → ∫₁² t^{-2}dt"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그함수 치환 정적분(t=1+ln x)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    1/x dx 가 그대로 dt 라 ∫₁² t^{-2}dt=[−1/t]₁²=1/2. 상하한이 x=1→t=1, x=e→t=2 로 정수라 계산이 한 줄이다. 중하 출발·통찰 0·M_total 4 → −1 적용해 ★1.
  tier: star_1
  mechanism_primary: "t=1+ln x, dt=dx/x → ∫₁² t^{-2}dt=[−1/t]₁²=1/2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{1}{2}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0997.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 −2 → −3, 1+ln x → a+ln x, 상한 e → e^k. 제약: 상한을 e 의 정수 거듭제곱으로 둬야 치환 상하한이 정수가 되고, 구간에서 a+ln x≠0 이어야 한다."
    creative: "(1) (1+ln x)² 를 분자로 올리면 t² 적분이라 난이도 동일(★1) (2) 적분값을 주고 상한 e^k 를 역추적하게 하면 0999 골조(★2) (3) 분모를 x(1+ln x) 로 낮추면 로그 적분 꼴이라 유형 07 계열(★1~2)."
```

```yaml
- id: RPM-CALC2-0998
  page: 141
  vendor_label: "유형 11 치환적분법을 이용한 정적분; 지수함수, 로그함수"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    ∫_{−2}^{0} e^x/(e^x+1)dx + ∫_{0}^{2} e^x/(e^x+1)dx 의 값. 5지선다.
  category: "인접 구간 합으로 [−2,2] 하나의 적분 → [ln(e^x+1)] → 지수 약분"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "f'(x)/f(x) 꼴 정적분; 지수함수·구간 합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 적분의 구간이 맞닿아 있어 ∫_{−2}^{2} 하나로 합치고, (e^x+1)'=e^x 이므로 [ln(e^x+1)]_{−2}^{2}=ln((e²+1)/(e^{−2}+1)). e^{−2}+1=(e²+1)/e² 로 약분하면 ln e²=2. 구간 합과 지수 약분 모두 표준 정리라 통찰로 세지 않았다. M_total 6 → 「중」 출발점 ★2.
  tier: star_2
  mechanism_primary: "구간 합 → [ln(e^x+1)]_{−2}^{2} → (e²+1)/(e^{−2}+1)=e² → 2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0998.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 ±2 → ±k(답이 k 로 나옴), 분모 e^x+1 → ae^x+1. 제약: 두 적분의 구간이 맞닿아야 합칠 수 있고, 상하한이 부호 대칭이라야 지수가 약분돼 정수 답이 된다."
    creative: "(1) 구간을 비대칭으로 두면 약분이 안 돼 로그가 남는다(★2) (2) 두 적분의 피적분함수를 다르게 주면 각각 계산해야 해 계산량만 증가(★2) (3) e^x/(e^x+1)+1/(e^x+1)=1 대칭을 쓰게 설계하면 SYM 통찰이 생겨 ★3."
```

```yaml
- id: RPM-CALC2-0999
  page: 141
  vendor_label: "유형 11 치환적분법을 이용한 정적분; 지수함수, 로그함수"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    k>1 이고 ∫₁^k (ln x)³/x dx = 4 일 때 상수 k.
  category: "t=ln x 치환 → (ln k)⁴/4=4 → ln k=2 → k=e²"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그함수 치환 정적분; 상한 역추적"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    t=ln x 로 두면 ∫₀^{ln k} t³dt=(ln k)⁴/4=4, 즉 (ln k)⁴=16. 네제곱이라 ln k=±2 가 나오지만 k>1 이 음수 해를 기각한다(T-부호). 상한 역추적이지만 치환 뒤 한 줄 방정식이라 통찰 미인정·M_total 6 → 「중」 출발점 ★2.
  tier: star_2
  mechanism_primary: "t=ln x → ∫₀^{ln k}t³dt=(ln k)⁴/4=4 → (ln k)⁴=16 → k>1 로 ln k=2 → k=e²"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$e^2$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0999.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 3 → 1·2(적분 결과 (ln k)^{n+1}/(n+1)), 적분값 4 → m. 제약: (n+1)m 이 완전거듭제곱이라야 ln k 가 정수로 떨어지고, 짝수 지수일 때만 k>1 조건이 음의 해를 기각하는 역할을 한다."
    creative: "(1) 하한을 e 로 올리면 (ln k)⁴−1 꼴 방정식이 돼 계산이 한 단계 는다(★2) (2) 지수를 −1 로 두면 ln(ln x) 가 나와 정의역 논의가 붙는다(★3) (3) k 를 주고 적분값을 묻는 순방향이면 ★1."
```

### 유형 12 치환적분법을 이용한 정적분; 삼각함수

```yaml
- id: RPM-CALC2-1000
  page: 141
  vendor_label: "유형 12 치환적분법을 이용한 정적분; 삼각함수"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    정적분 ∫₀^{π/2} sin x/(1+cos x)dx 의 값.
  category: "분자가 분모 도함수의 −1 배 → [−ln(1+cos x)]₀^{π/2}"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "f'(x)/f(x) 꼴 정적분; 삼각함수"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (1+cos x)'=−sin x 이므로 적분은 −ln(1+cos x)(구간에서 1+cos x>0 이라 절댓값 불필요). −ln1+ln2=ln2. 치환 한 번에 상하한 대입으로 끝남·통찰 0·M_total 4 → 유형 대표문제 ★2 에서 −1 적용해 ★1.
  tier: star_1
  mechanism_primary: "분자가 (1+cos x)' 의 −1 배 → [−ln(1+cos x)]₀^{π/2} → ln 2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\ln 2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1000.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모 1+cos x → 2+cos x·1+sin x(분자도 대응해서 교체), 구간의 양 끝을 cos 값이 간단한 특수각으로. 제약: 구간에서 분모가 0 이 되지 않아야 하고, 양 끝값의 비가 2·3 처럼 간단해야 답이 ln 한 개로 떨어진다."
    creative: "(1) 분모를 (1+cos x)² 로 올리면 t^{-2} 적분(★1~2) (2) 구간을 [0,π] 로 늘리면 분모가 0 에 닿아 교과 범위를 벗어나므로 피한다 (3) 분자를 sin 2x 로 바꾸면 sin 2x=2 sin x cos x 분해가 한 단계 붙는다(★2)."
```

```yaml
- id: RPM-CALC2-1001
  page: 141
  vendor_label: "유형 12 치환적분법을 이용한 정적분; 삼각함수"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=e^x 일 때 정적분 ∫_{−π/2}^{π/2} f(sin x)cos x dx 의 값. 5지선다.
  category: "t=sin x 치환(dt=cos x dx) → ∫_{−1}^{1} e^t dt"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수 치환 정적분(t=sin x)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f 가 e^x 로 구체적으로 주어져 있어 f(sin x)cos x=e^{sin x}cos x 이고, t=sin x 로 두면 ∫_{−1}^{1}e^t dt=e−1/e. 함수 기호로 감쌌을 뿐 치환 한 번에 상하한 대입으로 끝난다. 통찰 0·M_total 4 → 「중」 표시지만 −1 적용해 ★1.
  tier: star_1
  mechanism_primary: "t=sin x, dt=cos x dx → ∫_{−1}^{1}e^t dt=e−1/e"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1001.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f(x)=e^x → e^{2x}·x³, 구간 ±π/2 → ±π/6(치환 상하한 ±1/2). 제약: 원시함수가 쉬운 f 라야 하고, 구간이 sin 의 일대일 구간 안이어야 치환이 안전하다."
    creative: "(1) f 를 주지 않고 ∫f(sin x)cos x dx 를 ∫f(t)dt 로 바꾸는 것만 묻게 하면 RT 통찰이 생겨 ★2~3 (2) 구간을 [0,π] 로 두면 t=sin x 가 일대일이 아니라 구간 분할이 필요해 ★3 (3) cos x 를 sin x 로 바꾸면 치환이 막혀 다른 기법이 필요하다."
```

```yaml
- id: RPM-CALC2-1002
  page: 141
  vendor_label: "유형 12 치환적분법을 이용한 정적분; 삼각함수"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    정적분 ∫₀^π (1−cos³x)cos x sin x dx 의 값.
  category: "t=cos x 치환 → ∫_{−1}^{1}(t−t⁴)dt → 홀·짝 정리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수 치환 정적분(t=cos x); 다항식 전개"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    t=cos x, dt=−sin x dx 로 두면 구간이 1→−1 로 뒤집히며 부호가 정리돼 ∫_{−1}^{1}(1−t³)t dt=∫_{−1}^{1}(t−t⁴)dt. 홀함수 t 는 0, 짝함수 t⁴ 만 남아 −2/5. 대칭을 쓰면 빠르지만 직접 대입해도 같은 단계라 통찰로 세지 않았다. 전개·부호·대칭 정리로 M_total 6 → 「중」 출발점 ★2.
  tier: star_2
  mechanism_primary: "t=cos x, dt=−sin x dx → ∫_{−1}^{1}(t−t⁴)dt → 0−2/5 = −2/5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-\dfrac{2}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1002.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "cos³x 의 지수 3 → 2·4, 앞 괄호 1−cos³x → a−cos^n x, 구간 [0,π]. 제약: 치환 상하한이 ±1 이 되는 구간이라야 홀·짝 대칭이 살고, 지수 조합이 유리수 답을 주어야 한다."
    creative: "(1) 구간을 [0,π/2] 로 줄이면 대칭이 사라져 단순 대입(★1~2) (2) (1−cos³x) 를 (1−cos x)³ 로 바꾸면 0978 골조(★2) (3) 홀·짝함수 대칭을 근거로 답을 예측하게 하는 물음으로 바꾸면 SYM 통찰 ★3."
```

```yaml
- id: RPM-CALC2-1003
  page: 141
  vendor_label: "유형 12 치환적분법을 이용한 정적분; 삼각함수"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    ∫_{π/4}^{π/3}(1+cot²x)cos x dx = a√2+b√3 일 때 유리수 a, b 에 대하여 a−b.
  category: "1+cot²x=1/sin²x → cos x/sin²x, t=sin x → [−1/sin x] → 계수 비교"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각항등식 변형 후 삼각함수 치환 정적분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    1+cot²x=csc²x=1/sin²x 로 고쳐야 cos x/sin²x 가 되고, t=sin x 치환으로 ∫t^{-2}dt=−1/t. [−1/sin x]_{π/4}^{π/3}=−2/√3+√2=√2−(2√3)/3 이므로 a=1, b=−2/3, a−b=5/3. 유리화와 계수 비교까지 네 단계.
    [분류 이슈] 통찰 없이 M_total 7(항등식 변형·치환·무리수 유리화·계수 비교)이라 ★3 후보로도 읽히지만, 각 단계가 모두 표준이고 벤더 「중」이라 ★2 로 두고 기록만 한다.
  tier: star_2
  mechanism_primary: "1+cot²x=1/sin²x → t=sin x → [−1/sin x]_{π/4}^{π/3}=√2−2√3/3 → a=1, b=−2/3 → a−b=5/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{5}{3}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/1003.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 π/4~π/3 → sin 값이 무리수인 다른 두 특수각, 피적분함수 (1+cot²x)cos x → (1+tan²x)sin x. 제약: 두 끝의 sin(또는 cos)값이 √2/2·√3/2 같은 무리수라야 a√2+b√3 꼴 계수 비교가 성립한다."
    creative: "(1) 1+tan²x=sec²x 버전으로 바꿔 t=cos x 치환으로 만들면 같은 골조(★2) (2) a, b 를 묻지 않고 적분값만 물으면 계수 비교가 빠져 ★1~2 (3) 피적분함수를 (1+cot²x)cos³x 로 올리면 sin·cos 혼합 분해가 필요해 ★3."
```

## 표본 판정 요약 (30문)

- ★ 분포: ★1 12 · ★2 15 · ★3 3 · ★4 0 · ★5 0 (★4·★5 없음 — 전 범위가 「유형」 구역 기본·심화 문항이고 「유형 UP」·「실력 Up」 구역은 이 범위에 없다)
- 통찰형 5(0976 EQV · 0977 EQV · 0985 EQV · 0986 BW · 0995 RT) · 절차형 25 · premium 0 · 모든 통찰 depth 1 이라 +1 보정 없음
- 벤더 난이도와의 관계: 중하 4문은 모두 ★1, 상중 3문(0977·0986·0995)은 모두 ★3, 「중」 15문 중 3문(0979·0980·1001)은 M_total 4 라 ★1 로 내렸다. 대표문제 8문 중 5문(0974·0982·0992·0996·1000)이 M_total 4 로 ★1
- type_hint 상위 5: 「f'(x)/f(x) 꼴 적분(부정·정적분)」 7(0982·0983·0984·0986·0992·0998·1000) · 「삼각함수 치환(t=sin x·t=cos x)」 7(0978~0981·1001·1002·1003) · 「ax+b 꼴 삼각함수 부정적분」 4(0974~0977) · 「부분분수 분해 후 로그 적분」 4(0989·0990·0991·0993) · 「지수·로그 치환 정적분」 3(0996·0997·0999). 그 밖에 「나눗셈 후 로그」 2(0987·0988) · 「무리식 t 치환」 2(0994·0995) · 「f'=kf 관계식」 1(0985)
- 그림: 없음(30문 모두 `figure: none`) · 서술형 태그 2문(0988·0994) · 기출 태그 0
- 답 대조: 30문 모두 재계산해 전사본 answer 와 일치

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-CALC2-0981 | 통찰 0·M_total 5 라 −1 규칙대로면 ★1 이지만 단순 치환(0979)보다 한 단계 위(항등식 분리+세제곱 계산)라 벤더 「중」을 따라 ★2 로 둠 | ★1 / ★2 |
| RPM-CALC2-0986 | 적분 복원·역함수 미분법·대응점 역추적을 각각 세면 통찰 2~3개(XU 포함)로 ★4 후보. 세 단계 모두 교과 표준이라 주 통찰 1개(BW d1)로만 카운트 | ★3 / ★4 |
| RPM-CALC2-1003 | 통찰 없이 M_total 7(항등식·치환·유리화·계수 비교)이라 ★3 후보로도 읽히나 각 단계가 표준이고 벤더 「중」이라 ★2 유지 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **하나로 묶을 후보**: 「f'(x)/f(x) 꼴 적분」이 유형 07·10·11·12 에 걸쳐 7번 반복된다(다항 0982·0992, 지수 0984·0998, 삼각 1000, 로그 복원 0983·0986). 분자가 분모의 도함수의 상수배임을 알아보는 동일 골조이므로 함수 종류(다항·지수·삼각)로 유형을 쪼개지 말고 한 유형 + 함수 종류 변형축으로 두는 편이 낫다. 「삼각함수 치환(t=sin x / t=cos x)」 7문도 같은 이유로 한 유형(홀수 거듭제곱 분리 포함)으로 묶을 후보다.
- **따로 세워야 할 유형**: (1) 「f'(x)=kf(x) 관계식에서 지수함수 복원」(0985) — 적분 기법이 아니라 관계식을 f'/f 로 옮기는 동치 변환이 본질이라 별도 유형. (2) 「무리식 t 치환 후 부분분수」(0995) — 치환으로 유리화한 뒤 다른 유형(부분분수)으로 넘기는 2단 구조라 ★3 변별 슬롯의 씨앗. (3) 「적분값을 주고 상한·상수를 역추적」(0994·0999) — 적분 기법과 무관하게 역방향 물음이 공통이므로 기법 유형과 교차하는 변형축으로 둘지 별도 유형으로 둘지 결정 필요.
- **경계가 겹치는 유형**: 유형 08(분자 차수 ≥ 분모 차수)과 유형 09(분자 차수 < 분모 차수)는 나눗셈 한 단계 차이뿐이라 카탈로그에서는 「분수함수 적분」 한 유형의 두 변형으로 두고 base ★ 를 같게(★2) 주는 것이 자연스럽다.
