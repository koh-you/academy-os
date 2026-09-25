---
name: mechanism-데이터-GN-ALG-18
description: 개념원리 대수 18 일반각에 대한 삼각함수의 성질(1/1 · 174~178쪽 · 21문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 대수 (22개정) · 전사본 latex-bank/gn-alg
  section: 18 일반각에 대한 삼각함수의 성질
  unit_code: ALG-18
  part: "1/1"
  extract_range: "174~178쪽 · 174-408~178-425"
  total_problems: 21
  unit_total: 21
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·예제 태그·연습문제 STEP)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-alg/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-alg/items/<id>.tex
  image_source: latex-bank/gn-alg/figures/ (이 범위 그림 2문 · fig-174-411.png 삼각함수표 · fig-178-425.png 단위원 8등분)
---

# 개념원리 대수 · 18 일반각에 대한 삼각함수의 성질 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 대수 174~178쪽, 18단원 「일반각에 대한 삼각함수의 성질」 21문항 전수를 다룬다. 구역은 개념원리 익히기 4문, 필수·발전 예제 구역 7문(필수 예제 `쪽-eN` 3문 + 확인체크 4문), 연습문제 STEP 1 4문, STEP 2 4문, 실력 UP 2문이다. 개념원리 고등의 난이도 신호는 구역과 태그에 들어 있어 개념원리 익히기 → ★1, 필수 예제·확인체크 → ★2, STEP 1 → ★2, STEP 2 → ★3, 실력 UP → ★4 를 출발점으로 삼고 M_total 과 통찰 수로 ±1 조정했다. 단원의 도구는 네 개뿐이다 — (1) `2nπ+α` 주기 분해, (2) `−θ` 부호 뒤집기, (3) `π/2×n±θ` 에서 n 의 홀짝으로 함수가 바뀌고 원래 각을 예각으로 볼 때의 사분면으로 부호가 정해지는 규칙, (4) 이 규칙에서 나오는 `90°−θ`·`180°−θ` 짝짓기. 앞 11문은 (1)~(3) 의 반복 숙달이고, 176쪽 이후와 연습문제 후반은 (4) 의 대칭 상쇄가 골조를 지배한다.

주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 사슬) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 설정 변형과 ★ 변동 지점)를 채웠다. 이 단원 변형에서 가장 자주 깨지는 제약은 (1) 각을 바꾸면 사분면이 달라져 부호가 통째로 뒤집히는 것, (2) 짝짓기 합·곱 문제에서 짝이 없이 남는 끝 항(`sin² 45°`·`sin² 90°`·`cos 90°`·`cos 180°`·`tan 45°`)의 개수와 값, (3) `tan` 이 정의되지 않는 각(`π/2` 의 홀수배)을 범위에 넣지 않는 것 세 가지다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-ALG-174-408
  page: 174
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑶ 일반각의 삼각함수 값 구하기. ⑴ sin 750° 를 360°×2+30° 로 나누는 과정이 빈칸으로 안내되고, ⑵ cos 420°, ⑶ tan (7/3)π 는 같은 방식으로 직접 구한다.
  category: "일반각을 360°×n+α (2nπ+α) 로 분해 → 예각의 값으로 환원"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "일반각의 삼각함수 — 2nπ+α 로 분해해 값 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    주기가 360°(2π)이므로 360°×n 을 떼어 내면 예각의 값만 남는다. 빈칸이 분해 절차를 그대로 보여 주어 학생이 판단할 지점이 없다.
    개념원리 익히기 ★1 출발 · 통찰 0 · M_total 4 → ★1 유지.
  tier: star_1
  mechanism_primary: "750° = 360°×2+30° → sin 30° (나머지도 주기 분해 한 번)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $30^\circ$, $30^\circ$, $\dfrac{1}{2}$ ⑵ $\dfrac{1}{2}$ ⑶ $\sqrt{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/174-408.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '회전 수 n 과 예각 α 를 바꾼다(810°, 1110°, 13/4 π, 19/6 π 등). 제약: α 가 특수각(30·45·60·90°)이어야 값이 떨어지고, tan 은 α=90° 를 피한다. 빈칸 ⑴ 의 답은 α 와 그 함숫값 두 개로 고정.'
    creative: '(1) 값을 먼저 주고 0°~720° 에서 해당하는 각을 찾게 하면 I-BW ★2 (2) 세 값을 더한 한 식으로 묶기(175-e10 골조 ★2) (3) 음의 일반각을 섞어 부호 판정을 추가하면 ★2.'
```

```yaml
- id: GN-ALG-174-409
  page: 174
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑶ 음의 각의 삼각함수 값. ⑴ tan(−π/6) 를 −tan(π/6) 로 바꾸는 빈칸, ⑵ sin(−π/4), ⑶ cos(−π/3).
  category: "−θ 공식으로 부호만 정리 → 특수각 값"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "음의 각 −θ 의 삼각함수 — sin·tan 은 부호 반전, cos 는 그대로"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    sin·tan 은 기함수, cos 는 우함수라는 한 줄 규칙의 확인. 각이 이미 특수각이라 분해 단계도 없다.
    개념원리 익히기 ★1 출발 · 통찰 0 · M_total 4 → ★1 유지. 유일한 함정은 cos 만 부호가 그대로라는 점(T-부호).
  tier: star_1
  mechanism_primary: "−θ → sin·tan 은 부호 반전, cos 는 유지 → 특수각 값 대입"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\dfrac{\pi}{6}$, $-\dfrac{\sqrt{3}}{3}$ ⑵ $-\dfrac{\sqrt{2}}{2}$ ⑶ $\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/174-409.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '특수각 π/6·π/4·π/3 를 서로 바꾸고 함수도 섞는다. 제약: 세 소문항이 sin·cos·tan 을 한 번씩 덮어 cos 만 부호가 유지된다는 대비가 살아 있어야 한다.'
    creative: '(1) 음의 각 + 한 바퀴 이상(−13/6 π)으로 주기 분해를 얹으면 ★2 (2) 세 값의 합·곱을 묻기(★2) (3) sin(−θ)=−sin θ 를 이용해 f(x)=sin x 의 기함수 성질을 묻는 참·거짓 보기로 바꾸면 I-SYM ★2~3.'
```

```yaml
- id: GN-ALG-174-410
  page: 174
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ π/2×n±θ 꼴의 삼각함수 값. ⑴ cos(7/6)π 와 ⑵ sin 135° 는 90°×n+α 로 나누어 함수 변환·부호를 채우는 빈칸, ⑶ tan 240°, ⑷ cos(23/6)π 는 직접 구한다.
  category: "π/2×n±θ 분해 → n 의 홀짝으로 함수 결정 → 사분면으로 부호 결정"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "π/2×n±θ (90°×n±θ) 의 삼각함수 — 함수 변환과 부호 결정"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    n 이 짝수면 함수 그대로, 홀수면 sin↔cos·tan↔1/tan 으로 바뀌고, 부호는 θ 를 예각으로 볼 때 원래 각이 놓인 사분면에서 정한다. 이 단원 전체를 지탱하는 규칙이지만 빈칸이 두 소문항에서 절차를 그대로 안내한다.
    개념원리 익히기 ★1 출발 · 통찰 0 · M_total 5 → ★1 유지. 부호 결정이 유일한 함정(T-부호).
  tier: star_1
  mechanism_primary: "각을 π/2×n±θ 로 분해 → n 홀짝으로 함수 변환 → 사분면으로 부호 → 특수각 값"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $2$, $\dfrac{\pi}{6}$, $\dfrac{\pi}{6}$, $-\dfrac{\sqrt{3}}{2}$ ⑵ $1$, $45^\circ$, $45^\circ$, $\dfrac{\sqrt{2}}{2}$ ⑶ $\sqrt{3}$ ⑷ $\dfrac{\sqrt{3}}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/174-410.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '각을 네 사분면에 고르게 흩어 놓는다(5/6 π, 4/3 π, 11/6 π, 225°, 330°). 제약: 빈칸이 있는 소문항은 분해 계수 n 과 예각이 정수·특수각으로 유일해야 하고, 한 바퀴 넘는 각(23/6 π)은 주기 분해를 먼저 거치게 둔다.'
    creative: '(1) 값을 주고 0≤θ<2π 에서 각을 모두 찾게 하면 I-MI ★2~3 (2) 네 사분면 부호표(ASTC)를 완성시키는 표 채우기(★1) (3) 한 각을 π/2×n±θ 로 두 가지로 분해해 같은 값이 나옴을 보이게 하면 I-EQV ★2.'
```

```yaml
- id: GN-ALG-174-411
  page: 174
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑶ 주어진 삼각함수표(49°~51° 부근)를 이용해 sin 769°, cos 1029°, tan(−410°) 의 값 구하기.
  category: "일반각 → 0°~360° 환원 → 예각으로 환원 → 표에서 읽기"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수표를 쓰기 위한 일반각의 예각 환원"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    769°=360°×2+49°, 1029°=360°×2+309°=360°×3−51°, −410°=−(360°+50°) 처럼 두 번 줄여 표에 있는 예각으로 옮기고 부호만 붙인다. 환원이 두 단계인 ⑵⑶ 이 실수 지점이지만 절차는 앞 문항과 같다.
    개념원리 익히기 ★1 출발 · 통찰 0 · M_total 5 → ★1 유지.
  tier: star_1
  mechanism_primary: "360°×n 제거 → 360°−θ·−θ 로 예각 환원 → 사분면 부호 → 표 값"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $0.7547$ ⑵ $0.6293$ ⑶ $-1.1918$'
  answer_source: "답지"
  figure: 'crop:fig-174-411.png'
  latex: latex-bank/gn-alg/items/174-411.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '회전 수와 예각을 바꾸되 예각이 표에 실린 값이어야 한다(표가 49°~51° 면 409°·771°·1131°·−1030° 등). 제약: 표의 각 범위가 고정이므로 환원 결과가 반드시 그 범위 안에 떨어져야 하고, 그림(표)의 라벨은 바꾸지 않는다.'
    creative: '(1) 표에 없는 각을 하나 섞어 90°−θ 로 다른 함수 칸을 읽게 하면 I-RT ★2 (2) 표 값을 주고 각을 역으로 찾게 하면 I-BW ★2 (3) 세 값을 더한 식의 근삿값을 묻기(★2).'
```

### 필수·발전 예제

```yaml
- id: GN-ALG-175-e10
  page: 175
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    tan(5/4)π − cos(−16/3 π) + sin(9/2)π 의 값.
  category: "세 항을 각각 주기 분해·부호 정리로 특수각 값까지 환원 → 더하기"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "일반각·음의 각이 섞인 삼각함수 값의 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    세 항이 각각 다른 도구를 요구한다 — tan 은 주기가 π 라 5/4 π 에서 바로 π/4, cos 는 우함수로 부호를 없앤 뒤 4π 를 떼고, sin 은 9/2 π 에서 4π 를 떼어 π/2 로. 중간 부호 하나만 틀려도 답이 달라진다.
    도구 선택은 각의 형태가 지시하므로 통찰은 아니다. 필수 예제 ★2 출발 · 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "tan 주기 π · cos 우함수 후 2nπ 제거 · sin 2nπ 제거 → 특수각 세 값의 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{5}{2}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/175-e10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '세 각의 분모(4·3·2)와 회전 수를 바꾼다. 제약: 환원 결과가 특수각이어야 하고, tan 항은 π/2 의 홀수배가 되지 않아야 하며, 합이 지저분한 무리수 합으로 흩어지지 않게 두 항이 같은 근호를 갖도록 맞추면 좋다.'
    creative: '(1) 항을 곱·나눗셈으로 묶어 부호 실수가 즉시 드러나게(★2) (2) 한 항을 미지의 n 이 든 일반각(sin(2nπ+π/3))으로 두면 Mₐ 상승 ★3 (3) 값이 주어진 상태에서 빠진 항의 각을 찾게 하면 I-BW ★3.'
```

```yaml
- id: GN-ALG-175-e11
  page: 175
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑵ 여러 가지 각의 삼각함수로 이루어진 식 간단히 하기. ⑴ 3/2 π±θ, π−θ, π/2+θ 가 분수식으로 섞인 식, ⑵ sin² 이 네 개(π/2−θ, π−θ, 3/2 π−θ, 2π−θ) 더해진 식.
  category: "각 인수를 θ 의 sin·cos 로 환원 → 약분 → 삼각함수 사이의 관계로 상수화"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "여러 가지 각의 삼각함수로 식 간단히 하기(약분형·제곱합형)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 인수 여섯 개를 모두 ±sin θ·±cos θ 로 바꾸면 tan²θ − 1/cos²θ 가 되고 1+tan²θ=1/cos²θ 로 −1. ⑵ 는 네 항이 cos²θ, sin²θ, cos²θ, sin²θ 로 바뀌어 2.
    환원 규칙을 기계적으로 적용하면 끝나고 마지막 항등식도 같은 단원의 표준 공식이라 통찰로 카운트하지 않았다. 필수 예제 ★2 출발 · 통찰 0 · M_total 8(항 수가 많아 Mₛ·Mₖ 높음) → ★2 유지.
  tier: star_2
  mechanism_primary: "모든 인수를 ±sin θ·±cos θ 로 환원 → 약분 → 1+tan²θ=1/cos²θ · sin²θ+cos²θ=1 로 상수"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $-1$ ⑵ $2$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/175-e11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '각 인수의 각을 π/2·π·3/2 π·2π 기준의 다른 조합으로 바꾸고 제곱 차수를 옮긴다. 제약: 약분 뒤 남는 식이 tan²θ−sec²θ 나 sin²θ+cos²θ 처럼 상수로 떨어져야 하고, 분모에 오는 인수가 0 이 될 각을 조건으로 배제한다.'
    creative: '(1) 결과가 상수가 아니라 tan²θ 처럼 남게 만들고 θ 값을 대입시키기(★2) (2) 네 항 제곱합을 2π 를 n 등분한 각으로 확장하면 I-SYM ★3 (3) 식이 θ 에 무관함을 보이라고 서술형으로 물으면 Mₐ 상승 ★3.'
```

```yaml
- id: GN-ALG-175-412
  page: 175
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    sin(−17/6 π) + tan(−π/4) + cos(−10/3 π) 의 값.
  category: "음의 각 → 우·기함수로 부호 정리 → 2nπ 제거 → 특수각 값의 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "일반각·음의 각이 섞인 삼각함수 값의 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    세 항 모두 음의 각이라 먼저 −θ 규칙으로 부호를 빼내고, 남은 각에서 2π 를 떼면 5/6 π·π/4·4/3 π 가 되어 사분면 부호를 한 번 더 판정한다. 부호가 두 겹이라는 점이 175-e10 과의 차이.
    확인체크 ★2 출발 · 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "−θ 부호 분리 → 2nπ 제거 → 사분면 부호 → 세 값의 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/175-412.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '분모 6·4·3 과 분자(회전 수)를 바꾼다. 제약: 환원 각이 특수각이고 tan 항이 π/2 의 홀수배를 피해야 하며, 부호가 두 겹(−θ + 사분면)으로 겹치는 항을 최소 하나는 남긴다.'
    creative: '(1) 답을 주고 한 항의 각을 미지수로 두면 I-BW ★3 (2) 세 항을 곱으로 바꾸면 부호 실수가 한 번에 드러남(★2) (3) 각을 −(2nπ+α) 꼴 문자식으로 일반화하면 Mₐ 상승 ★3.'
```

```yaml
- id: GN-ALG-175-413
  page: 175
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    cos(π+θ) − cos(π/2+θ) + cos(2π+θ) − cos(3/2 π+θ) 를 간단히 하기.
  category: "네 항을 ±sin θ·±cos θ 로 환원 → 상쇄"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "여러 가지 각의 삼각함수로 식 간단히 하기(합·차형)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    네 항이 각각 −cos θ, −sin θ, cos θ, −sin θ 로 바뀌고 앞의 부호와 합쳐 cos 끼리·sin 끼리 상쇄된다. 함수가 바뀌는 항(π/2+θ, 3/2 π+θ)과 그대로인 항(π+θ, 2π+θ)을 구분하는 것이 전부.
    확인체크 ★2 출발 · 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "π/2 의 홀수배 항은 sin 으로, 짝수배 항은 cos 으로 환원 → 부호 정리 → 0"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/175-413.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '네 항의 각(π±θ, π/2±θ, 3/2 π±θ, 2π±θ)과 앞 부호를 조합한다. 제약: 결과를 0 으로 두려면 cos 계열 두 항과 sin 계열 두 항이 각각 상쇄되도록 부호를 맞춰야 하고, 0 이 아닌 결과를 원하면 sin θ 나 2cos θ 처럼 한 항만 남게 설계한다.'
    creative: '(1) 결과를 sin θ 로 남기고 θ 값을 대입해 수치를 묻기(★2) (2) 식이 0 임을 이용해 항등식의 참·거짓 보기를 만들면 ★2~3 (3) cos 을 tan 으로 바꿔 정의되지 않는 각을 배제하는 조건을 넣으면 T-범위 추가 ★3.'
```

```yaml
- id: GN-ALG-176-e12
  page: 176
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    sin² 1° + sin² 2° + … + sin² 89° + sin² 90° 의 값.
  category: "sin(90°−θ)=cos θ 로 앞뒤 짝짓기 → 쌍마다 1 → 남는 항 따로"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "1°와 89°, 2°와 88° 처럼 합이 90°인 항을 짝지으면 sin²θ+cos²θ=1 이 되어 90개 항이 44쌍과 남은 두 항으로 줄어든다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "일정하게 증가하는 각의 삼각함수의 합(90°−θ 짝짓기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    항을 순서대로 계산할 수 없고 「합이 90°인 두 항」이라는 대칭을 먼저 봐야 한다. 짝을 지으면 1이 44번, 짝이 없는 sin² 45°=1/2 와 sin² 90°=1 이 남는다.
    실수는 거의 전부 남는 항의 개수·값에서 나온다(T-경계). 필수 예제 ★2 출발 · 통찰 1개(depth 2) → +1 조건(2개 이상 또는 depth 3) 미달로 ★2 유지.
  tier: star_2
  mechanism_primary: "합이 90°인 항 짝짓기 → 쌍마다 sin²+cos²=1 → 44 + sin²45° + sin²90°"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{91}{2}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/176-e12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '각의 간격(1°·2°·5°·10°)과 끝점(89°·90°)을 바꾼다. 제약: 간격이 90° 를 정확히 나눠야 짝이 맞고, 45° 가 항에 포함되는지·90° 항이 있는지에 따라 남는 항이 달라지므로 쌍의 개수를 매번 다시 센다.'
    creative: '(1) sin² 대신 cos² 으로 바꾸기(176-414 ⑴ · ★2) (2) tan 의 곱으로 바꾸면 짝의 값이 1 이 되는 곱 버전(★2) (3) 0°~180° 로 범위를 넓혀 180°−θ 짝까지 쓰게 하면 I-SYM 강화 ★3 (4) 보기 참·거짓 형태로 묶으면 검증이 강제돼 ★3(178-423).'
```

```yaml
- id: GN-ALG-176-414
  page: 176
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴ cos² 0° + cos² 5° + … + cos² 90° 의 값, ⑵ tan 1° × tan 2° × … × tan 89° 의 곱.
  category: "90°−θ 짝짓기 → 합은 쌍마다 1, 곱은 쌍마다 1 → 남는 항 따로"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "합이 90°인 두 각을 짝지어 ⑴ 은 cos²θ+sin²θ=1, ⑵ 는 tan θ·tan(90°−θ)=1 로 만들고 짝이 없는 45° 항만 따로 처리"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "일정하게 증가하는 각의 삼각함수의 합·곱(90°−θ 짝짓기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    176-e12 와 같은 대칭을 합과 곱 두 형태로 쓴다. ⑴ 은 0°~90° 를 5° 간격으로 19개 항이라 9쌍과 cos² 45°, ⑵ 는 44쌍과 tan 45°=1.
    항의 개수를 잘못 세면 쌍의 수가 틀어지는 것이 유일한 난점(T-단위). 확인체크 ★2 출발 · 통찰 1개(depth 2) → ★2 유지.
  tier: star_2
  mechanism_primary: "합이 90°인 항 짝짓기 → ⑴ 쌍마다 1 · 9쌍 + cos²45° · ⑵ 쌍마다 1 · tan45°=1"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ $\dfrac{19}{2}$ ⑵ $1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/176-414.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '간격(1°·2°·3°·5°·10°)과 양 끝(0° 포함 여부·90° 포함 여부)을 바꾼다. 제약: 간격이 90° 의 약수여야 45° 가 항에 들어가고, 0° 와 90° 를 동시에 넣으면 그 둘이 한 쌍이 되어 남는 항이 45° 하나뿐임을 확인한다.'
    creative: '(1) 합과 곱을 한 문제에서 비교하게 두고 왜 결과가 1 계열인지 설명시키기(★3) (2) tan 곱에서 항 하나를 빼고 값을 묻기(★3 · I-VF) (3) 각을 라디안으로 바꿔 π/2−θ 짝으로 표현하면 표기만 달라지고 골조 유지(★2).'
```

```yaml
- id: GN-ALG-176-415
  page: 176
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    θ=π/12 일 때 cos θ + cos 2θ + … + cos 12θ 의 값.
  category: "kπ/12 와 (12−k)π/12 를 짝지어 cos(π−α)=−cos α 로 상쇄 → 남는 항"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "각의 합이 π 인 두 항(kθ 와 (12−k)θ)은 cos(π−α)=−cos α 로 서로 지워져 다섯 쌍이 0 이 되고 cos(π/2)·cos π 만 남는다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "각이 일정하게 증가하는 cos 의 합(180°−θ 상쇄)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    12θ=π 이므로 항들이 0 과 π 사이를 12등분한다. 90°−θ 짝이 아니라 180°−θ 짝이라 쌍의 값이 1 이 아니라 0 이라는 점이 앞 두 문항과의 차이.
    남는 항은 cos(π/2)=0 과 cos π=−1 뿐. 확인체크 ★2 출발 · 통찰 1개(depth 2) → ★2 유지.
  tier: star_2
  mechanism_primary: "12θ=π 확인 → 합이 π 인 항끼리 상쇄(5쌍) → cos(π/2)+cos π"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/176-415.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'θ=π/n 과 항의 개수 n 을 함께 바꾼다(π/6 로 6항, π/10 으로 10항). 제약: 마지막 항이 정확히 nθ=π 가 되어야 상쇄 구조가 성립하고, n 이 짝수면 cos(π/2)=0 항이 생기지만 홀수면 생기지 않아 남는 항이 달라진다.'
    creative: '(1) cos 을 sin 으로 바꾸면 sin(π−α)=sin α 라 상쇄가 아니라 두 배가 됨(대비 문제 ★3) (2) 단위원 n등분 점의 x좌표 합으로 기하화하면 I-RT 추가 ★3(178-425 골조) (3) 합이 0 이 되도록 항의 범위를 설계하라는 역문제면 I-BW ★4.'
```

### 연습문제 STEP 1

```yaml
- id: GN-ALG-177-416
  page: 177
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 STEP 1"
  summary: |
    양수 a 에 대하여 f(x)=sin(ax+π/6) 의 주기가 4π 일 때 f(π) 의 값. 5지선다.
  category: "주기 2π/a=4π 로 a 결정 → f(π)=sin(π/2+π/6) → π/2+θ 규칙"
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수의 주기 조건으로 미정계수를 정하고 함숫값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    sin(ax+b) 의 주기 2π/a 를 4π 와 놓아 a=1/2 를 얻는 역산이 한 단계, 그 뒤는 sin(π/2+π/6)=cos(π/6) 으로 이 단원 규칙 한 번이다.
    통찰 없음·M_total 5 라 −1 후보지만 주기와 각 변환 두 도구를 이어 써야 해서 STEP 1 출발점 ★2 를 유지했다.
    [분류 이슈] 주 도구가 주기여서 카탈로그를 만들면 18단원이 아니라 삼각함수의 그래프 유형으로 갈 가능성이 크다.
  tier: star_2
  mechanism_primary: "주기 2π/a=4π → a=1/2 → f(π)=sin(π/2+π/6)=cos(π/6)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/177-416.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주기(2π·π·6π)와 위상(π/6·π/3·π/4), 대입하는 x 를 바꾼다. 제약: a=2π/주기 가 간단한 유리수여야 하고 ax+위상 이 특수각에 떨어져야 선택지가 무리수 한 개로 정리된다."
    creative: "(1) 주기 대신 f(0) 이나 최댓값을 조건으로 주면 같은 골조 ★2 (2) 주기와 f(π) 를 함께 주고 a 와 위상을 동시에 구하게 하면 연립 → ★3 (3) tan 으로 바꾸면 주기가 π/a 라 주기 공식 자체가 함정이 되어 ★3."
```

```yaml
- id: GN-ALG-177-417
  page: 177
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    y=cos(x/2) 의 그래프를 x축 방향으로 π 만큼 평행이동한 후 x축에 대하여 대칭이동한 그래프의 식. 5지선다.
  category: "x→x−π 대입 → cos(x/2−π/2)=sin(x/2) → x축 대칭으로 부호 반전"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수 그래프의 평행이동·대칭이동 결과 식 고르기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    이동 두 번을 식으로 옮기는 표준 절차다. x 방향 π 이동은 x 자리에 x−π 를 넣는 것이고 주기가 4π 라 각은 π/2 만 움직인다.
    cos(x/2−π/2)=sin(x/2) 로 함수명이 바뀐 뒤 x축 대칭이 부호만 뒤집는다. 오답은 이동 부호와 함수명 변환에서 나오지만 통찰 단계는 아니라 STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: "x→x−π 대입 → cos(x/2−π/2)=sin(x/2) → x축 대칭 → −sin(x/2)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/177-417.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각의 계수(x/2·2x·x/3)와 이동량, 이동 순서(대칭 먼저·평행 먼저)를 바꾼다. 제약: 이동량이 주기의 1/4 의 홀수배여야 cos 이 sin 으로 바뀌고, 아니면 선택지가 같은 함수의 위상차로만 남아 변별이 사라진다."
    creative: "(1) y축 대칭·원점 대칭으로 바꾸면 부호 규칙만 달라지고 ★2 유지 (2) 이동 결과 식을 주고 어떤 이동이었는지 역으로 묻기 → I-BW ★3 (3) 두 그래프가 겹치는 최소 평행이동량을 묻기 → ★3."
```

```yaml
- id: GN-ALG-177-418
  page: 177
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    삼각형 ABC 의 세 내각 A, B, C 에 대한 다섯 등식 중 옳지 않은 것. 5지선다.
  category: "A+B+C=π → B+C=π−A · (B+C)/2=π/2−A/2 로 옮겨 보기마다 규칙 적용"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "삼각형 내각의 합 조건을 B+C=π−A · (B+C)/2=π/2−A/2 라는, 이 단원 규칙이 바로 적용되는 꼴로 옮긴다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각형의 세 내각 관계(A+B+C=π)를 쓰는 삼각함수 항등 판정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    다섯 보기 모두 π−θ 또는 π/2−θ 규칙 한 번으로 판정된다. 반각 보기는 π/2−θ 라 함수명이 바뀌고 온각 보기는 π−θ 라 sin 은 그대로·cos 은 부호가 뒤집힌다.
    그래서 cos A=cos(B+C) 만 −cos A 가 되어 어긋난다. 조건 치환 통찰 1개(EQV d1)·M_total 6 → STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "A+B+C=π 를 π−A·π/2−A/2 꼴로 치환 → 다섯 보기에 규칙 적용 → cos A=−cos A 인 ③ 기각"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/177-418.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "보기의 각 조합((A+C)/2 · B+C · (A−B)/2)과 함수(sin·cos·tan)를 바꾼다. 제약: 반각 보기는 π/2−θ, 온각 보기는 π−θ 가 되도록 짝을 맞춰야 하고 tan 보기는 반각이 π/2 가 되지 않아야 한다."
    creative: "(1) 옳은 것만 고르는 ㄱㄴㄷ 보기로 바꾸면 ★2 유지 (2) 등식 하나를 주고 삼각형의 모양을 판정하게 하면 ★3 (3) 178-422 처럼 등식에서 특정 각의 삼각함수 값을 구하게 하면 ★3."
```

```yaml
- id: GN-ALG-177-419
  page: 177
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    cos(π+θ)/{sin(3π/2+θ)cos²(π−θ)} + {sin(π+θ)tan²(π−θ)}/cos(3π/2+θ) 를 간단히 하기.
  category: "모든 각을 θ 로 환원 → 1/cos²θ − tan²θ → 1+tan²θ=1/cos²θ 로 상수"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "여러 가지 각의 삼각함수로 식 간단히 하기(약분형)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    여섯 개의 각을 π±θ·3π/2±θ 규칙으로 θ 로 바꾸면 앞 항은 1/cos²θ, 뒤 항은 −tan²θ 로 정리된다.
    마지막은 1+tan²θ=1/cos²θ 를 그대로 쓰는 것이라 통찰 단계가 아니다. 175-e11 과 같은 골조이며 항이 더 많을 뿐이어서 STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: "각 여섯 개를 θ 로 환원 → 1/cos²θ − tan²θ → 1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$1$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/gn-alg/items/177-419.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "항의 개수와 각(π/2±θ · 2π−θ · 5π/2+θ), 제곱이 붙는 위치를 바꾼다. 제약: 환원 결과가 1+tan²θ=1/cos²θ 나 sin²θ+cos²θ=1 로 닫혀야 답이 상수가 되고, 분모에 오는 sin θ·cos θ 가 0 이 되는 각은 제외해야 한다."
    creative: "(1) 답을 상수가 아니라 tan²θ 같은 식으로 남기면 ★2 유지 (2) 간단히 한 뒤 구체각을 대입해 값까지 구하게 하면 ★2 (3) 정리 결과가 sin θ cos θ 로 남고 sin θ+cos θ 의 값이 따로 주어지면 곱셈 공식이 붙어 ★3."
```

### 연습문제 STEP 2

```yaml
- id: GN-ALG-177-420
  page: 177
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    f(x)=sin 2x+3cos²x+tan(x/2) 의 주기를 p 라 할 때 f(2π/3−p) 의 값.
  category: "세 항의 주기 π·π·2π → 최소공배수 p=2π → f(2π/3−p)=f(2π/3) → 대입"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "cos²x 의 주기를 cos 의 2π 가 아니라 (1+cos 2x)/2 로 보아 π 로 옮겨야 세 항의 최소공배수가 제대로 정해진다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "여러 항이 섞인 삼각함수의 주기와 주기성을 이용한 함숫값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    주기를 구하는 것으로 끝나지 않고, 구한 p 로 −p 를 지워 f(2π/3) 로 되돌리는 두 번째 단계가 본체다.
    세 항의 주기는 π·π·2π 이고 tan(x/2) 가 최소공배수 2π 를 결정한다. 제곱 항의 주기가 절반이 된다는 동치 변환 통찰 1개(EQV d2)·M_total 7 → STEP 2 ★3 유지.
  tier: star_3
  mechanism_primary: "각 항의 주기 π·π·2π → p=2π → f(2π/3−p)=f(2π/3) → sin(4π/3)+3cos²(2π/3)+tan(π/3)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{\sqrt{3}}{2}+\dfrac{3}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/177-420.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "항의 조합(sin 2x · cos 3x · sin²x · tan(x/3))과 대입하는 각을 바꾼다. 제약: 각 항의 주기가 서로 유리수배여야 최소공배수가 존재하고, tan 항의 각이 π/2 의 홀수배가 되는 x 를 대입하지 않아야 한다."
    creative: "(1) 주기만 묻는 문제로 줄이면 ★2 (2) 주기 값을 주고 계수를 역산하게 하면 I-BW ★3 (3) 항 하나에 절댓값을 씌워 주기가 절반이 되게 하면 최소공배수 계산이 한 겹 더 생겨 ★4 후보."
```

```yaml
- id: GN-ALG-178-421
  page: 178
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    다섯 함수의 그래프 중 y=sin 2x 를 평행이동하여 겹쳐지지 않는 것. 5지선다.
  category: "각 보기를 A sin(2x+c)+d 꼴로 환원 → 진폭·주기가 같아야 평행이동으로 겹침"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "평행이동으로 겹친다 는 조건을 진폭과 주기가 같다 로 옮긴 뒤 다섯 보기를 모두 sin 2x 표준형으로 환원한다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "평행이동으로 겹치는 삼각함수 그래프 판정(진폭·주기 비교)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    cos(2x−π/2)=sin 2x, −sin(2x+π)=sin 2x 이므로 ②와 ⑤는 상하 이동만 남고, ①·④도 위상·상하 이동뿐이다. ③만 진폭이 2 라 어떤 평행이동으로도 겹치지 않는다.
    함수명 변환과 부호 두 갈래가 실제 오답 지점이라 Mₜ 2. 통찰 1개(EQV d2)·M_total 6.
    [분류 이슈] 진폭이 다르다는 것만 보면 즉답이어서 STEP 2 출발 ★3 대신 ★2 도 가능하다. 라벨은 벤더 신호대로 ★3 으로 두었다.
  tier: star_3
  mechanism_primary: "다섯 보기를 sin 2x 표준형으로 환원 → 진폭이 2 인 ③만 평행이동 불가"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/178-421.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준 함수(sin 2x · cos 3x)와 보기의 위상·상하 이동량을 바꾼다. 제약: 오답이 될 보기 하나만 진폭이나 주기를 다르게 두고 나머지 넷은 위상·상하 이동으로만 만들어야 한다."
    creative: "(1) 겹치는 것을 모두 고르게 하면 ★3 유지 (2) 겹치기 위한 최소 평행이동량을 묻기 → ★3 (3) 대칭이동까지 허용하면 판정 기준이 늘어 ★4 후보."
```

```yaml
- id: GN-ALG-178-422
  page: 178
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    삼각형 ABC 에서 2sin{(A−B+C)/2}=cos A cos(π−A)+sin A sin(π+A) 가 성립할 때 cos B 의 값.
  category: "A+C=π−B 로 좌변 2cos B · π±A 규칙으로 우변 −(cos²A+sin²A)=−1"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "A−B+C 를 내각의 합 조건으로 π−2B 로 바꿔 좌변을 2sin(π/2−B)=2cos B 로 옮긴다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "삼각형의 세 내각 관계를 쓰는 삼각함수 등식에서 값 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    좌변은 삼각형 조건을 넣어야만 B 하나로 줄고, 우변은 π−A·π+A 규칙으로 −(cos²A+sin²A) 가 되어 A 가 통째로 사라진다.
    양변이 서로 다른 방식으로 한 문자·상수로 줄어드는 구조가 이 문항의 골조다. 조건 치환 통찰 1개(EQV d2)·M_total 6 → STEP 2 ★3.
  tier: star_3
  mechanism_primary: "A+C=π−B → 좌변 2cos B · 우변 −1 → cos B=−1/2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/178-422.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "좌변의 계수(2·4·−2)와 각 조합((A+B−C)/2 · (−A+B+C)/2), 우변 항의 부호를 바꾼다. 제약: 우변이 sin²A+cos²A 로 닫혀 상수가 되어야 하고, 나오는 cos B 가 −1 과 1 사이이면서 삼각형의 내각으로 가능해야 한다."
    creative: "(1) cos B 대신 B 의 크기나 삼각형의 모양을 묻기(★3 유지) (2) 우변을 상수가 아닌 sin A 의 식으로 두면 미지각이 둘 남아 ★4 (3) 등식을 만족하는 삼각형이 없는 계수 범위를 묻기 → I-BW ★4."
```

```yaml
- id: GN-ALG-178-423
  page: 178
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    보기 ㄱ(sin²10°+…+sin²90°=5) ㄴ(cos 10°+…+cos 180°=0) ㄷ(tan 5°×…×tan 85°=1) 중 옳은 것을 모두 고르기.
  category: "ㄱ·ㄷ 은 90°−θ 짝, ㄴ 은 180°−θ 짝으로 상쇄 → 짝이 없이 남는 끝항 확인"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "세 보기를 각각 90°−θ(ㄱ·ㄷ) 와 180°−θ(ㄴ) 짝으로 묶으면 각 쌍이 1 또는 0 으로 정해진다"
    - step: 2
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "짝을 짓고 남는 끝항(sin²90°·cos 90°·cos 180°·tan 45°)을 되짚어야 ㄴ 이 0 이 아니라 −1 임이 드러나고, 이 점검을 빼면 ㄴ 도 참으로 잘못 판정된다"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "일정하게 증가하는 각의 삼각함수의 합·곱 참거짓 판정(짝짓기)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ㄱ 은 네 쌍이 각각 1 이고 sin²90°=1 이 남아 5, ㄷ 은 여덟 쌍이 1 이고 tan 45°=1 이 남아 1 이다.
    ㄴ 은 여덟 쌍이 0 이고 cos 90°=0 과 cos 180°=−1 이 남아 −1 이라 거짓이다. 짝만 세고 끝항을 빠뜨리면 ㄴ 을 참으로 보게 되는 구조가 변별의 전부다.
    통찰 2개지만 176쪽(176-e12·176-414·176-415)의 골조를 보기 세 개에 나눠 재사용한 것이라 +1 하지 않고 STEP 2 ★3 을 유지했다.
  tier: star_3
  mechanism_primary: "세 보기를 짝짓기로 상쇄 → 남는 끝항 확인 → ㄴ 만 cos 180°=−1 이 남아 거짓"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "ㄱ, ㄷ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/178-423.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "보기마다 간격(5°·10°·15°)과 양 끝 각을 바꾼다. 제약: 간격이 90°(ㄱ·ㄷ) 또는 180°(ㄴ)의 약수여야 짝이 맞아떨어지고, 간격을 바꾸면 남는 끝항의 개수와 값이 달라지므로 각 보기의 참거짓을 다시 정해야 한다."
    creative: "(1) 세 보기를 모두 참으로 만들고 값을 계산하게 하면 ★3 (2) 보기 하나의 우변을 미지수로 두고 그 값을 구하게 하면 ★3 (3) 끝항이 남지 않도록 각의 범위를 설계하라는 역문제면 I-BW ★4."
```

### 연습문제 실력 UP

```yaml
- id: GN-ALG-178-424
  page: 178
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    직선 y=−(3/2)x 위의 점 P(a, b)(a<0)에 대하여 선분 OP 가 x축 양의 방향과 이루는 각이 θ 일 때 sin(π−θ)cos(3π+θ)+sin(3π/2−θ)cos(5π/2−θ) 의 값.
  category: "a<0 → 제2사분면 점 (−2, 3) · r=√13 → 식 전체를 −2 sin θ cos θ 로 환원"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "직선의 기울기와 a<0 조건을 제2사분면 위의 한 점 (−2, 3) 과 r=√13 으로 옮겨 sin θ·cos θ 를 좌표비로 읽는다"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "네 인수를 θ 로 환원하면 식이 −2 sin θ cos θ 한 덩어리가 되어 θ 자체는 끝까지 구할 필요가 없다"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "좌표평면의 직선 위의 점으로 정해지는 각의 삼각함수 값"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    기울기 −3/2 와 a<0 에서 점이 제2사분면에 있음을 정해야 cos θ 의 부호가 결정된다. 여기가 이 문항의 진짜 관문이고, 부호를 놓치면 답의 부호가 뒤집힌다.
    각 환원은 3π+θ→π+θ, 5π/2−θ→π/2−θ 로 2nπ 를 먼저 떼는 이 단원 표준 절차이며, 네 인수가 모두 sin θ·cos θ 로 바뀌어 −2 sin θ cos θ 로 모인다.
    좌표↔각 전환 통찰(RT d2)이 있고 M_total 8 이라 실력 UP 출발점 ★4 를 유지했다.
  tier: star_4
  mechanism_primary: "기울기 −3/2 · a<0 → P(−2, 3) · r=√13 → 식 −2 sin θ cos θ → 좌표비 대입"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{12}{13}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/178-424.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선의 기울기(−4/3 · 2 · −1)와 a 의 부호 조건을 바꾼다. 제약: 기울기와 부호 조건이 함께 사분면을 정하므로 sin·cos 의 부호가 통째로 바뀌고, 3·4·5 나 5·12·13 같은 피타고라스 쌍을 쓰면 r 이 정수라 답이 정리된다."
    creative: "(1) 각을 2θ 나 θ+π 로 바꿔 부호 규칙을 한 번 더 쓰게 하면 ★4 유지 (2) 직선 대신 원 위의 점과 조건식을 주면 ★4 (3) a 의 부호 조건을 빼면 두 사분면을 모두 따져야 해서 I-MI 가 붙고 ★4~5."
```

```yaml
- id: GN-ALG-178-425
  page: 178
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    좌표평면의 단위원을 8등분한 점 P₁~P₈ 에서 ∠P₁OP₂=θ 일 때 sin θ+sin 2θ+…+sin 8θ 의 값.
  category: "8등분 → θ=π/4 → sin(k+4)θ=−sin kθ 로 네 쌍 상쇄"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "합을 단위원 8등분 점의 y좌표의 합으로 옮기면 원점 대칭인 두 점이 서로 지워지는 그림 문제가 된다"
    - step: 2
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "각이 π 만큼 차이 나는 항(k 와 k+4)은 부호가 반대라 네 쌍이 모두 0 이 되고 남는 항이 없다"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "단위원 n등분 점과 삼각함수의 합(대칭 상쇄)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    그림에서 θ=2π/8=π/4 를 읽는 것이 첫 단계이고, 그 다음은 sin(α+π)=−sin α 로 네 쌍이 지워져 한 줄로 끝난다.
    176-415 의 cos 상쇄와 같은 골조지만 각의 값을 식이 아니라 그림에서 얻고, 짝이 180° 차이라 남는 항이 아예 없다는 점이 다르다.
    [분류 이슈] 대칭을 보면 계산이 한 줄(M_total 5)이라 실력 UP 출발 ★4 대신 ★3 도 가능하다. 통찰 2개(RT·SYM)를 근거로 ★4 를 유지했다.
  tier: star_4
  mechanism_primary: "단위원 8등분 → θ=π/4 → k 와 k+4 항이 부호 반대로 상쇄 → 0"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$0$'
  answer_source: "답지"
  figure: 'crop:fig-178-425.png'
  latex: latex-bank/gn-alg/items/178-425.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "등분 수 n(6·10·12)과 묻는 함수(sin·cos)를 바꾼다. 제약: n 이 짝수여야 π 만큼 떨어진 짝이 생겨 합이 0 이 되고, n 이 홀수면 짝이 없는 항이 남아 합이 0 이 아니게 된다. 그림의 점 이름과 각의 시작 위치는 고정한다."
    creative: "(1) 합 대신 제곱의 합을 묻기(상쇄가 아니라 n/2 로 모여 ★4) (2) 점 일부만 골라 합을 묻게 하면 남는 항이 생겨 ★4 (3) 합이 0 이 되는 등분 수를 모두 구하라는 역문제면 I-BW ★5 후보."
```

## 표본 판정 요약 (21문)

- ★ 분포: ★1 4 · ★2 11 · ★3 4 · ★4 2 · ★5 0
- 통찰형 10 · 절차형 11 · premium 0
- 통찰 유형(라벨 13개): I-SYM 5 · I-EQV 5 · I-RT 2 · I-VF 1 (depth 3 없음 · 통찰 2개 라벨 문항 3)
- 대상층: 하위권 4 · 중하위권 7 · 중위권 4 · 중상위권 6
- type_hint 묶음: 「일반각·음의 각을 2nπ+α·−θ 로 분해해 값 구하기」 5 · 「일정하게 증가하는 각의 합·곱 짝짓기 상쇄」 5 · 「그래프의 주기·평행이동·대칭이동」 4 · 「여러 가지 각의 삼각함수로 식 간단히 하기」 3 · 「삼각형 세 내각 관계(A+B+C=π) 적용」 2 · 그 밖에 삼각함수표 예각 환원 1 · 좌표평면 직선 위의 점 1
- 그림: 2문(`crop:fig-174-411.png` 삼각함수표 · `crop:fig-178-425.png` 단위원 8등분)
- 구역별 출발점과 최종 라벨이 어긋난 문항은 없다(모두 출발점 유지). 단원 전체가 도구 네 개의 반복이라 ★2 가 절반이고, ★4 는 좌표 전환(178-424)과 대칭 상쇄(178-425) 두 문항뿐이다.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-ALG-177-416 | 주 도구가 주기(삼각함수의 그래프)라서 이 단원 유형으로 묶기 애매 — 카탈로그 설계 때 귀속 결정 | ★2 |
| GN-ALG-178-421 | 진폭이 다르다는 것만 보면 즉답 · STEP 2 출발 ★3 과 판정 ★2 가 1단 차이 | ★2 / ★3 |
| GN-ALG-178-425 | 통찰 2개(RT·SYM)지만 M_total 5·풀이 한 줄 · 실력 UP ★4 와 판정 ★3 이 1단 차이 | ★3 / ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: (1) 「일반각·음의 각의 삼각함수 값」(2nπ+α 분해 · −θ 부호)과 (2) 「π/2×n±θ 로 식 간단히 하기」는 도구가 달라 분리한다. (3) 「일정하게 증가하는 각의 합·곱」은 90°−θ 짝(합이 1)과 180°−θ 짝(합이 0)이 답의 구조를 다르게 만들므로 한 유형 안의 두 하위 유형으로 두는 것이 좋다(176-e12·176-414 대 176-415·178-425).
- **통합해도 될 유형**: 175-e10 과 175-412, 175-e11 과 175-413·177-419 는 각각 같은 골조의 난이도 차이라 한 유형의 ★2 변형으로 묶을 수 있다.
- **다른 단원으로 보낼 후보**: 177-416·177-417·177-420·178-421 은 주기·평행이동·대칭이동이 주 도구라 「삼각함수의 그래프」 유형에 두고, 이 단원에서는 각 변환 규칙이 한 번 쓰이는 응용으로 참조하는 편이 낫다.
- **★4 이상 슬롯 후보**: 좌표평면 전환(178-424)과 단위원 n등분 대칭(178-425) 두 골조만 저노출 통찰(RT·SYM)을 쓴다. 이 단원에서 ★5 를 만들려면 두 골조에 역방향 조건(합이 0 이 되는 n 찾기)이나 사분면 다중 해석을 얹어야 한다.
