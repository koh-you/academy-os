---
name: mechanism-데이터-RPM-ALG-05-p2
description: RPM 대수 05 삼각함수(2/3 · 유형 03~09) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 대수 (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-alg
  section: 05 삼각함수
  unit_code: ALG-05
  part: "2/3"
  extract_range: "67~70쪽 · 0488~0517"
  total_problems: 30
  unit_total: 96
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 이 파일의 조정 규칙 — 유형 구역 출발점은 대표문제·난이도 없음 ★2, 하 ★1, 중하 ★1~2, 중 ★2, 상중 ★3이고, 통찰 0·M_total 4(전 축 최소)이면 −1, M_total 5 이상이면 출발점 유지, 통찰 2개 이상·depth 3 이면 +1. insight_type 은 depth 2 이상 통찰이 있거나 통찰이 2개 이상일 때만 통찰형, d1 표준 착안 하나뿐이면 절차형(견본 0041 방식). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-alg/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-alg/items/<id>.tex
  image_source: latex-bank/rpm-alg/figures/ (crops.json)
---

# RPM 대수 · 05 삼각함수 (2/3) 정독 데이터 (v1.0)

이 파일은 RPM 대수 05 삼각함수 단원의 두 번째 조각으로, 67~70쪽의 유형 03(두 동경의 위치 관계)부터 유형 09(삼각함수 사이의 관계를 이용하여 식의 값 구하기)까지 일곱 유형 구역 30문항(0488~0517)을 전수 정독한 것이다. 이 범위는 모두 「유형 NN」 구역이라 벤더 난이도 신호는 구역 자체(유형별 기본 문제)와 각 문항의 난이도 표시(하·중하·중·상중)·태그(대표문제 7 · 서술형 3)로 읽었다. 대표문제는 난이도 표시가 없는 그 유형의 첫 문항이고, 상중은 0502·0509·0513·0517 네 문항, 그림은 0498(부채꼴 내접원)·0501(원에 내접한 직사각형) 두 문항이다.

이 자산의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 풀이 골조 한 줄(`mechanism_primary`), 단계별 통찰 라벨(`insights[]` · 절차형이면 빈 배열), 그리고 바꿔도 되는 수와 제약(`variation_notes.numeric`)·통찰 골조를 유지한 채 바꿀 수 있는 설정과 ★ 변동 지점(`variation_notes.creative`)을 채웠다. ★ 는 위 frontmatter 의 조정 규칙대로 벤더 출발점에서 M_total·통찰로 ±1 만 움직였고, 정직한 판정이 벤더 신호와 2단 이상 어긋나는 문항은 라벨을 억지로 맞추지 않고 `[분류 이슈]` 로 기록해 파일 끝 표에 모았다. 답은 전사본 answer 를 그대로 옮겼고 30문항 모두 다시 풀어 일치를 확인했다.

## 문항 데이터

### 유형 03 두 동경의 위치 관계

```yaml
- id: RPM-ALG-0488
  page: 67
  vendor_label: "유형 03 두 동경의 위치 관계"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    각 θ 와 각 7θ 의 동경이 일치할 때 θ 의 크기(90°<θ<180°).
  category: "동경 일치 조건(차가 360°n) → 범위로 정수 n 결정"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 동경의 위치 관계(일치·반대·대칭 조건으로 θ 결정)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    7θ−θ=360°·n → θ=60°n, 90°<60°n<180° 에서 n=2 → 120°. 관계식 하나에 범위로 정수 n 을 고르는 표준 절차(T-범위 1개). 유형 대표문제라 ★2 에서 출발하지만 통찰 없음·M_total 4(전 축 최소) → ★1.
  tier: star_1
  mechanism_primary: "동경 일치 → 7θ−θ=360°n → θ=60°n → 90°<θ<180° 로 n=2 → 120°"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$120^\circ$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0488.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "배수 7 을 4·5·9·13 으로, 범위를 다른 사분면(0°~90°, 180°~270°)으로 바꿀 수 있음. 제약: (배수−1)θ=360°n 에서 범위 안에 정수 n 이 정확히 하나 있어야 답이 하나(둘 이상이면 발문을 '모두 구하시오'로)."
    creative: "(1) 호도법 범위(π/2<θ<π)로 바꾸기(★1 유지) (2) nθ 와 mθ 두 배수 동경의 일치(★1~2) (3) '일치'를 '일직선 반대'(차가 360°n+180°)·'x축 대칭'(합이 360°n)으로 바꾸면 같은 유형의 다른 하위 조건(★1~2) (4) 범위를 주지 않고 '가장 작은 양의 각'을 묻기(★2 · 범위 해석 T-범위 추가)."
```

```yaml
- id: RPM-ALG-0489
  page: 67
  vendor_label: "유형 03 두 동경의 위치 관계"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    각 θ 와 각 5θ 의 동경이 일직선 위에 있고 방향이 반대일 때 θ 의 크기(0°<θ<90°).
  category: "반대 방향 조건(차가 360°n+180°) → 범위로 정수 n 결정"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 동경의 위치 관계(일치·반대·대칭 조건으로 θ 결정)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    5θ−θ=360°n+180° → θ=90°n+45°, 0°<θ<90° 에서 n=0 → 45°. 일치 조건에 180° 만 더한 표준 관계식·3단계. 벤더 「중」이지만 통찰 없음·M_total 4 → ★1(1단 차이·이슈 아님).
  tier: star_1
  mechanism_primary: "일직선 반대 → 5θ−θ=360°n+180° → θ=90°n+45° → 0°<θ<90° 로 n=0 → 45°"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$45^\circ$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0489.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "배수 5 를 3·7·9 로, 범위를 90°~180° 등으로 바꿀 수 있음. 제약: (배수−1)θ=360°n+180° 에서 180°/(배수−1) 이 깔끔한 각이 되고 범위 안 정수 n 이 하나여야 함."
    creative: "(1) 호도법 범위(★1 유지) (2) '방향이 반대'를 '원점 대칭'(같은 조건임을 알아채기)·'y축 대칭'(합이 360°n+180°)으로(★1~2) (3) 반대 방향이면서 특정 사분면 조건까지 동시에 만족하는 θ 모두 → 두 조건 교집합 ★2."
```

```yaml
- id: RPM-ALG-0490
  page: 67
  vendor_label: "유형 03 두 동경의 위치 관계"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    각 θ 와 각 4θ 의 동경이 x축에 대하여 대칭일 때 θ 의 크기를 모두(180°<θ<360°).
  category: "x축 대칭 조건(합이 360°n) → 범위 안 정수 n 모두"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 동경의 위치 관계(일치·반대·대칭 조건으로 θ 결정)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    θ+4θ=360°n → θ=72°n, 180°<72°n<360° 에서 n=3, 4 → 216°, 288°. 범위 안 정수 n 이 둘이라 하나만 쓰는 T-범위 실수가 함정이나 관계식·단계는 0488 과 같음. 벤더 「중」·통찰 없음·M_total 4 → ★1(1단 차이).
  tier: star_1
  mechanism_primary: "x축 대칭 → θ+4θ=360°n → θ=72°n → 180°<θ<360° 로 n=3,4 → 216°, 288°"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$216^\circ$, $288^\circ$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0490.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "배수 4 를 2·5·8 로, 범위를 0°~180° 등으로. 제약: 합 조건 (배수+1)θ=360°n 에서 범위 안 정수 n 의 개수를 발문과 맞춤(1개면 단답, 2개 이상이면 '모두')."
    creative: "(1) y축 대칭(합이 360°n+180°)으로 바꾸기(★1) (2) 모든 θ 의 합을 묻기(★1~2) (3) 배수 n 을 미지수로 두고 θ 하나를 주어 n 을 역산 → I-BW d1 ★2 (4) 두 동경이 x축 대칭이면서 θ 가 특정 사분면 → 조건 교집합 ★2."
```

```yaml
- id: RPM-ALG-0491
  page: 67
  vendor_label: "유형 03 두 동경의 위치 관계"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    각 2θ 와 각 7θ 의 동경이 직선 y=x 에 대하여 대칭일 때 모든 θ 의 크기의 합(0°<θ<90°).
  category: "y=x 대칭 조건(합이 360°n+90°) → 범위 안 n 모두(경계 제외) → 합"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 동경의 위치 관계(일치·반대·대칭 조건으로 θ 결정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    2θ+7θ=360°n+90° → θ=40°n+10°, 0°<θ<90° 에서 n=0, 1 → 10°, 50°(n=2 는 90° 로 경계 밖) → 합 60°. 관계식은 표준이나 두 각 모두 배수·경계 제외(T-경계)·합까지 4단계에 T-범위 겹침. 벤더 「중」·M_total 6·통찰 없음 → ★2 유지.
  tier: star_2
  mechanism_primary: "y=x 대칭 → 2θ+7θ=360°n+90° → θ=40°n+10° → 0°<θ<90° 로 n=0,1 → 10°+50°=60°"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$60^\circ$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0491.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 배수 (2,7)→(3,5)·(1,8), 범위 변경. 제약: 합 조건 (m+n)θ=360°k+90° 에서 어떤 k 가 경계값(90°)에 정확히 걸리게 두면 T-경계 함정이 유지됨."
    creative: "(1) y=−x 대칭(합이 360°n+270°)으로(★2) (2) 답의 개수를 묻기(★2) (3) 범위 없이 '가장 작은 양의 각 두 개의 차' (★2) (4) 세 동경(θ·2θ·7θ)이 동시에 만족할 조건 → 두 관계식 연립 ★3."
```

### 유형 04 육십분법과 호도법

```yaml
- id: RPM-ALG-0492
  page: 67
  vendor_label: "유형 04 육십분법과 호도법"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    육십분법·호도법 변환 다섯 보기(45°, 160°, −144°, 3π/10, 9π/5) 중 옳은 것. 5지선다.
  category: "각 보기 변환(×π/180 · ×180°/π) → 일치 확인"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "육십분법·호도법 변환"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ① 45°=π/4 ② 160°=8π/9 ③ −144°=−4π/5 ④ 3π/10=54° ⑤ 9π/5=324° 로 ⑤ 만 옳음. 보기 다섯을 모두 변환하는 계산 부담(Mₖ 2)과 부호·분수 약분(T-표기). 통찰 없음·M_total 5 → 대표문제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "각 보기를 1°=π/180, 1 rad=180°/π 로 변환 → 일치 여부 확인 → ⑤"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0492.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "보기의 각을 15°·210°·−300°, 7π/12·11π/6 등으로. 제약: 오답 보기는 분모·분자 바꿈이나 부호 실수로 만든 '그럴듯한' 값으로 두고 정답은 하나."
    creative: "(1) '옳지 않은 것' 고르기(★2) (2) 2 라디안=360°/π 처럼 π 가 분모에 남는 보기 섞기(0494 골조 ★2) (3) 변환 결과의 사분면까지 묻는 보기(★2)."
```

```yaml
- id: RPM-ALG-0493
  page: 67
  vendor_label: "유형 04 육십분법과 호도법"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    432° 를 호도법 (b/a)π (a, b 서로소) 로, (a/b)π 를 육십분법 c° 로 나타낼 때 a+b+c.
  category: "육십분법→호도법 기약분수 → 역수 각 → 육십분법"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "육십분법·호도법 변환"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    432°=(432/180)π=(12/5)π → a=5, b=12. (5/12)π=75° → c=75 → 92. 약분·역수·변환의 한 줄 계산. 「중하」 출발·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "432°=12π/5 → (a,b)=(5,12) → 5π/12=75° → 5+12+75=92"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$92$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0493.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "432° 를 150°·252°·−396° 등으로. 제약: 기약분수 b/a 로 만든 뒤 역수 (a/b)π 가 육십분법으로 정수 각이 되도록(b 가 180 의 약수 계열이면 안전)."
    creative: "(1) (a/b)π 대신 (a+b)π/ab 등 다른 조합(★1) (2) 호도법에서 시작해 육십분법으로 순서 뒤집기(★1) (3) 서로소 조건을 빼고 가능한 (a,b) 를 모두 묻기 → I-MI d1 ★2."
```

```yaml
- id: RPM-ALG-0494
  page: 67
  vendor_label: "유형 04 육십분법과 호도법"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    ㄱ 16°=4π/45 · ㄴ 2 라디안=360°/π · ㄷ −4π/3 은 제3사분면의 각 · ㄹ −5π/4, 3π/4, 19π/4 의 동경 일치 — 옳은 것만 고르기.
  category: "보기별 단위 변환·2π 배수 제거 → 사분면·동경 일치 판정"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "육십분법·호도법 변환과 각의 표현(사분면·동경 일치) 판정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ㄱ 16π/180=4π/45 ✓ · ㄴ 2×180°/π=360°/π ✓ · ㄷ −4π/3+2π=2π/3 → 제2사분면 ✗ · ㄹ −5π/4+2π=3π/4, 19π/4−4π=3π/4 로 모두 일치 ✓ → ㄱ, ㄴ, ㄹ. 변환과 2π 배수 정리를 네 번 반복하는 절차(T-부호). 「중」·M_total 5·통찰 없음 → ★2 유지. [분류 이슈] 유형 제목은 단위 변환이나 ㄷ·ㄹ 은 유형 02 각의 표현(사분면·동경 일치) 골조 — type_hint 를 어느 쪽에 둘지 카탈로그 설계 때 결정.
  tier: star_2
  mechanism_primary: "각 보기 → 단위 변환 또는 2π 배수 제거로 0~2π 표현 → 사분면·일치 판정 → ㄱ, ㄴ, ㄹ"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "ㄱ, ㄴ, ㄹ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0494.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 보기의 각을 −7π/6·25π/4·−225° 등으로. 제약: 거짓 보기는 부호나 사분면 경계 실수로 틀리게 만들고 참 보기는 2~3개."
    creative: "(1) 보기를 사분면 판정만으로 통일(★1~2) (2) 음의 각·2π 초과 각을 더 섞기(★2) (3) 동경 일치 보기를 '방향 반대'(차가 π 의 홀수배)로 바꿔 함정(★2) (4) 라디안 값이 π 의 배수가 아닌 각(2 라디안이 제몇 사분면)을 판정하게 하기 → 근사 감각 ★2."
```

### 유형 05 부채꼴의 호의 길이와 넓이

```yaml
- id: RPM-ALG-0495
  page: 68
  vendor_label: "유형 05 부채꼴의 호의 길이와 넓이"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    호의 길이 6π, 넓이 12π 인 부채꼴의 중심각. 5지선다.
  category: "S=½rl 로 r → l=rθ 로 θ"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부채꼴의 호의 길이·넓이 공식(l=rθ, S=½rl)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    12π=½·r·6π → r=4, 6π=4θ → θ=3π/2. 공식 두 개를 순서대로 대입. 대표문제 ★2 출발이지만 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "S=½rl → r=4 → l=rθ → θ=3π/2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0495.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "(l, S) 를 (4π, 8π)·(3π, 9π) 등으로. 제약: r=2S/l 이 정수, θ=l/r 가 2π 미만의 간단한 π 유리수 배."
    creative: "(1) r·θ 를 주고 l·S 구하기(순방향 ★1) (2) 넓이와 중심각으로 호의 길이(r 에 √ 등장 ★1~2) (3) 두 부채꼴의 넓이비·호 길이비 조건으로 매개변수화 → Mₐ 2 ★2."
```

```yaml
- id: RPM-ALG-0496
  page: 68
  vendor_label: "유형 05 부채꼴의 호의 길이와 넓이"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    중심각 5π/6, 호의 길이 10π 인 부채꼴의 반지름 a·넓이 bπ 일 때 b−a.
  category: "l=rθ 로 r → S=½rl"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부채꼴의 호의 길이·넓이 공식(l=rθ, S=½rl)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    r=10π÷(5π/6)=12=a, S=½·12·10π=60π → b=60 → 48. 공식 대입 두 줄·분수 나눗셈. 「중하」 출발·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "l=rθ → r=12 → S=½rl=60π → b−a=48"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$48$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0496.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "(θ, l) 을 (2π/3, 8π)·(3π/4, 6π) 등으로. 제약: r=l/θ 가 정수, S 가 π 의 정수 배."
    creative: "(1) S 와 θ 를 주고 r·l 구하기(★1) (2) 중심각을 육십분법(150°)으로 주어 변환 단계 추가(★1~2) (3) 반지름과 호의 길이의 합 조건과 넓이를 주어 연립 → ★2."
```

```yaml
- id: RPM-ALG-0497
  page: 68
  vendor_label: "유형 05 부채꼴의 호의 길이와 넓이"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    둘레의 길이가 24 인 부채꼴 중 넓이가 최대인 것의 반지름.
  category: "둘레 조건으로 l 소거 → S 를 r 의 이차함수로 → 꼭짓점에서 최대"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "둘레 조건 2r+l=24 로 l 을 지우고 넓이를 r 의 이차식 S=½r(24−2r)=−(r−6)²+36 으로 바꿔 최대를 읽음(도형 조건 → 이차함수 최댓값)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "부채꼴 둘레 고정 → 넓이 최대(이차함수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    l=24−2r, S=½r(24−2r)=12r−r²=−(r−6)²+36 → r=6 에서 최대(0<r<12 확인 · T-범위). 부채꼴 넓이를 이차함수 최댓값 문제로 옮기는 표현 전환 1단계(RT d1 · 교과서 표준 유형). 「중」·M_total 4·통찰 1 → ★2 유지.
  tier: star_2
  mechanism_primary: "2r+l=24 → S=½r(24−2r)=−(r−6)²+36 → r=6 (최댓값 36, 그때 θ=2)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$6$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0497.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "둘레 24 를 20·36 등으로. 제약: 둘레가 4 의 배수면 r=둘레/4 가 정수이고 최댓값 (둘레/4)² 도 정수."
    creative: "(1) 최대 넓이 값이나 그때의 중심각(항상 2 라디안)을 묻기(★2) (2) 넓이 고정 → 둘레 최소로 뒤집으면 산술·기하평균이 필요해 I-XU 등장 ★3 (3) 둘레 대신 '호의 길이+반지름=k' 조건 → 같은 골조 ★2."
```

```yaml
- id: RPM-ALG-0498
  page: 68
  vendor_label: "유형 05 부채꼴의 호의 길이와 넓이"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    반지름 12, 중심각 π/3 인 부채꼴 PAB 에 내접하는 원 O 를 그릴 때 색칠한 부분(부채꼴−원)의 넓이. [그림]
  category: "내접원 반지름(이등분선·sin 30°) → 부채꼴 넓이 − 원 넓이"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "내접원 중심 O 가 각 P 의 이등분선 위에 있음을 보고, 접점과 이루는 직각삼각형에서 PO=r/sin(π/6)=2r, PO+r=12 로 r 을 결정(그림 → 보조선·삼각비 식)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "부채꼴에 내접하는 원(색칠 부분 넓이)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    이등분선 위의 O 와 변 PA 의 접점이 만드는 직각삼각형에서 PO=2r, 2r+r=12 → r=4. 부채꼴 ½·12²·(π/3)=24π, 원 16π → 8π. 보조선(이등분선·접점 수선)을 세워 r 을 잡는 1단계(RT d1)가 핵심이고 나머지는 공식 대입. 「중」·M_total 5·통찰 1 → ★2.
  tier: star_2
  mechanism_primary: "내접원: PO=2r, PO+r=12 → r=4 → ½·12²·(π/3) − π·4² = 24π−16π = 8π"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$8\pi$'
  answer_source: "답지"
  figure: "crop:fig-0498.png"
  latex: latex-bank/rpm-alg/items/0498.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "반지름 12 를 6·18 로(r=R/3 유지), 중심각 π/3 을 π/2 로(r=R(√2−1)) 등. 제약: 중심각 α 에 대해 r=R·sin(α/2)/(1+sin(α/2)) 가 깔끔한 값이 되는 α(π/3 이 가장 깔끔). 그림 라벨(P, A, B, O, 12, π/3) 고정."
    creative: "(1) 내접원 반지름만 묻기(★2) (2) 색칠 부분의 둘레(호+두 선분+원 둘레) 묻기(★2~3) (3) 중심각을 일반 θ 로 두고 원과 부채꼴의 넓이비 → Mₐ 상승 ★3 (4) 내접원 대신 호에 접하는 두 원 등 배치 변경 → 보조선 설계 단계 증가 ★3."
```

### 유형 06 삼각함수의 정의

```yaml
- id: RPM-ALG-0499
  page: 68
  vendor_label: "유형 06 삼각함수의 정의"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    원점과 P(12, −5) 를 지나는 동경 OP 의 각 θ 에 대해 13sinθ−13cosθ+12tanθ 의 값.
  category: "r=13 → 정의로 sin·cos·tan → 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "동경 위의 점으로 삼각함수 값 구하기(정의)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    r=√(144+25)=13, sinθ=−5/13, cosθ=12/13, tanθ=−5/12 → −5−12−5=−22. 정의 대입 한 줄·y 좌표 부호(T-부호)만 주의. 대표문제 ★2 출발이지만 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "P(12,−5), r=13 → sin=−5/13, cos=12/13, tan=−5/12 → 13sin−13cos+12tan=−22"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$-22$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0499.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "P 를 (−3,4)·(−8,−15)·(5,−12) 등 피타고라스 세 쌍으로, 계수는 r 과 x 의 배수로 두어 정수 답. 제약: (x, y, r) 피타고라스 세 쌍 유지, tan 의 계수는 x 의 배수."
    creative: "(1) P 대신 직선 위의 점으로 주기(0502 골조 ★2) (2) 식의 값에서 거꾸로 P 의 좌표를 구하기 → I-BW d1 ★2 (3) 원 x²+y²=r² 과 직선의 교점으로 P 를 주기(★2)."
```

```yaml
- id: RPM-ALG-0500
  page: 68
  vendor_label: "유형 06 삼각함수의 정의"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    제2사분면의 점 P(a, 3/2) 에 대해 동경 OP 의 각 θ 가 tanθ=−3/4 일 때 a+OP.
  category: "tan 정의 → a 결정(사분면 부호) → r"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "동경 위의 점으로 삼각함수 값 구하기(정의)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    tanθ=(3/2)/a=−3/4 → a=−2(제2사분면과 부합), r=√(4+9/4)=5/2 → a+r=1/2. 정의 한 줄·분수 처리. 「중하」 출발·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "tanθ=(3/2)/a=−3/4 → a=−2 → r=5/2 → a+r=1/2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0500.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "y 좌표·tan 값을 (3, −3/4 → a=−4, r=5) 등으로. 제약: (a, y, r) 이 피타고라스 세 쌍의 유리수 배, 사분면과 tan 부호가 일치."
    creative: "(1) sin 값을 주고 a 구하기(제곱근 방정식 ★1~2) (2) 사분면 대신 cos 의 부호 조건으로 주기(★1) (3) 사분면을 주지 않고 가능한 a 를 모두 → I-MI d1 ★2."
```

```yaml
- id: RPM-ALG-0501
  page: 68
  vendor_label: "유형 06 삼각함수의 정의"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    가로 6·세로 2 인 직사각형 ABCD 가 원 x²+y²=10 에 내접(변이 축과 평행). 동경 OA, OD 의 각 α, β 에 대해 sinα cosβ. [그림]
  category: "대칭 배치로 A(−3,1)·D(3,1) 좌표 → 정의 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "그림의 직사각형이 원점 대칭 배치임을 읽어 반가로 3·반세로 1 로 A(−3,1), D(3,1) 좌표를 세움(도형 조건 → 좌표)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "동경 위의 점으로 삼각함수 값 구하기(정의)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    변이 축과 평행하고 원에 내접하므로 중심이 원점 → A(−3,1), D(3,1)(9+1=10 확인), r=√10. sinα=1/√10, cosβ=3/√10 → 3/10. 좌표를 세우는 1단계(RT d1) 뒤 정의 대입. 「중」·M_total 4·통찰 1 → ★2 유지.
  tier: star_2
  mechanism_primary: "A(−3,1), D(3,1), r=√10 → sinα=1/√10, cosβ=3/√10 → 3/10"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{3}{10}$'
  answer_source: "답지"
  figure: "crop:fig-0501.png"
  latex: latex-bank/rpm-alg/items/0501.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "가로·세로 (6,2)→(8,4)·(2,6), 원의 반지름² = (가로/2)²+(세로/2)². 제약: 꼭짓점이 원 위에 오도록 r² 를 맞춤. 그림 라벨(A, B, C, D, O, 원 방정식) 고정."
    creative: "(1) B, C 등 다른 꼭짓점 쌍으로 부호 함정(★2) (2) tanα·tanγ 등 곱·합(★2) (3) 직사각형을 정사각형·마름모로 바꿔 좌표 유도 단계 증가(★2~3) (4) 원의 방정식을 주지 않고 가로·세로만 주어 r 을 구하게 하기(★2)."
```

```yaml
- id: RPM-ALG-0502
  page: 68
  vendor_label: "유형 06 삼각함수의 정의"
  vendor_level: "상중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    직선 y=−√3x 위의 제4사분면 점 P 에 대한 동경 OP 의 각 θ 일 때 −sinθ+cosθ+tanθ 의 값.
  category: "직선 위 대표점(1, −√3) → r=2 → 정의 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "동경 위의 점으로 삼각함수 값 구하기(정의)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x>0 인 점 P(1, −√3), r=2 → sin=−√3/2, cos=1/2, tan=−√3 → √3/2+1/2−√3=(1−√3)/2. 직선 위 대표점을 사분면에 맞게 잡는 것은 표준 절차(T-부호). 벤더 「상중」(서술형)이나 통찰 없음·M_total 4 → −1 하여 ★2. [분류 이슈] 정직한 판정은 0499 와 같은 절차형 ★1~2 로 벤더 ★3 과 2단 차이 가능 — 라벨은 ★2 로 두고 기록.
  tier: star_2
  mechanism_primary: "y=−√3x, 제4사분면 → P(1,−√3), r=2 → sin=−√3/2, cos=1/2, tan=−√3 → (1−√3)/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1-\sqrt{3}}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0502.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기울기 −√3 을 −1·−1/√3·√3 등 특수각 tan 값으로, 사분면을 제2사분면으로. 제약: 기울기가 특수각 tan 값이어야 무리수 답이 정리되고, 사분면과 기울기 부호가 일치(제4사분면이면 음의 기울기)."
    creative: "(1) 원 x²+y²=4 와의 교점으로 P 를 주기(★2) (2) 직선을 ax+by=0 일반형으로 두어 Mₐ 2 (★2) (3) 두 직선 위 두 점의 각의 합·차 조건 → ★3 (4) 사분면 조건을 빼고 가능한 값을 모두 → I-MI d1 ★2."
```

### 유형 07 삼각함수의 값의 부호

```yaml
- id: RPM-ALG-0503
  page: 69
  vendor_label: "유형 07 삼각함수의 값의 부호"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    sinθcosθ>0, cosθtanθ>0 을 동시에 만족하는 θ 는 제몇 사분면의 각인지.
  category: "곱의 부호 → 각 조건의 사분면 → 교집합"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수 값의 부호로 사분면 결정"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    sinθcosθ>0 → 제1·3사분면, cosθtanθ=sinθ>0 → 제1·2사분면 → 제1사분면. 부호표 한 번이면 끝. 대표문제 ★2 출발·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "sin·cos>0 → 제1·3사분면, cos·tan=sin>0 → 제1·2사분면 → 교집합 제1사분면"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "제$1$사분면"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0503.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "부호 조합(sin·cos<0, sin·tan>0 등)으로 답 사분면 변경. 제약: 두 조건의 교집합이 정확히 한 사분면."
    creative: "(1) 조건 하나를 sinθ/cosθ 꼴 분수로(곱과 부호 같음 ★1) (2) 교집합이 두 사분면이 되게 하고 '모두' 묻기(★1~2) (3) 0509 처럼 θ/2 의 사분면으로 이어가기 → I-MI ★3."
```

```yaml
- id: RPM-ALG-0504
  page: 69
  vendor_label: "유형 07 삼각함수의 값의 부호"
  vendor_level: "하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    tanθ<0, cosθ>0 을 동시에 만족하는 θ 의 크기가 될 수 있는 것(π/4, π/3, 2π/3, 5π/4, 5π/3). 5지선다.
  category: "부호 조건 → 제4사분면 → 보기 판정"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수 값의 부호로 사분면 결정"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    cos>0·tan<0 → 제4사분면 → 보기 중 5π/3 만 해당. 「하」·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "cos>0·tan<0 → 제4사분면 → 5π/3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0504.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "조건 부호 조합·보기 각 변경. 제약: 보기 중 정확히 하나만 답 사분면에 있고 나머지는 다른 세 사분면이나 경계."
    creative: "(1) 육십분법 보기(★1) (2) 음의 각·2π 초과 각 보기로 정리 단계 추가(★1~2) (3) '될 수 없는 것' 묻기(★1)."
```

```yaml
- id: RPM-ALG-0505
  page: 69
  vendor_label: "유형 07 삼각함수의 값의 부호"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    π<θ<3π/2 일 때 |sinθ|+|cosθ|+√(sin²θ)+∛(cos³θ) 를 간단히. 5지선다.
  category: "제3사분면 부호 → 절댓값·짝수 근호 풀기(홀수 근호는 그대로)"
  M: {s: 1, k: 1, a: 1, t: 2}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "사분면 부호로 절댓값·근호 식 간단히 하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    제3사분면 sin<0, cos<0 → −sin−cos−sin+cos=−2sin. √(sin²)=|sin| 과 ∛(cos³)=cos 의 구분(T-표기)과 부호(T-부호)가 함정이고 단계는 짧음. 「중」·통찰 없음·M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "제3사분면: sin<0, cos<0 → |sin|=−sin, |cos|=−cos, √(sin²)=−sin, ∛(cos³)=cos → −2sin"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0505.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "범위를 다른 사분면으로, 항 조합(|tan|·√(tan²)·∛(sin³)) 변경. 제약: 짝수 근호는 절댓값·홀수 근호는 그대로라는 규칙이 답에서 드러나도록 두 종류를 섞음."
    creative: "(1) 0506 처럼 두 함수의 합 (cos+tan) 의 부호 판단 항 추가(★2) (2) 범위 대신 부호 조건(sin·cos>0 등)으로 주기(★2) (3) 답이 0 이 되는 조합으로 상쇄 확인(★2)."
```

```yaml
- id: RPM-ALG-0506
  page: 69
  vendor_label: "유형 07 삼각함수의 값의 부호"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    π/2<θ<π 일 때 √(sin²θ)−√((cosθ+tanθ)²)+cosθ−sinθ+|tanθ| 를 간단히.
  category: "제2사분면 부호 → 합(cos+tan)의 부호 판단 → 절댓값 풀기"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "사분면 부호로 절댓값·근호 식 간단히 하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    제2사분면 sin>0, cos<0, tan<0 → cos+tan<0. sin−(−(cos+tan))+cos−sin−tan=2cos. 두 음수의 합의 부호 판단과 √(X²)=|X| 처리(T-부호·T-표기)가 겹치나 절차는 정해져 있음. 「중」·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "제2사분면: sin>0, cos<0, tan<0 → cos+tan<0 → sin+(cos+tan)+cos−sin−tan=2cos"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2\cos\theta$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0506.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "범위 변경(제3사분면이면 cos+tan 의 부호가 정해지지 않으므로 sin+cos 처럼 같은 부호인 합으로 교체), 항 교체. 제약: 합 항 안의 두 삼각함수가 그 사분면에서 같은 부호여야 절댓값이 풀림."
    creative: "(1) 부호가 다른 두 함수의 합(제2사분면의 sin+cos)을 넣어 '더 간단히 할 수 없음'을 판정하게 하기 → I-VF 성격 ★3 (2) 범위 대신 부호 조건으로 주기(★2) (3) 0513 처럼 1±2sincos 근호와 결합(★3)."
```

```yaml
- id: RPM-ALG-0507
  page: 69
  vendor_label: "유형 07 삼각함수의 값의 부호"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    √cosθ/√sinθ=−√(cosθ/sinθ) 를 만족하는 θ 의 범위가 aπ<θ<bπ 일 때 a+b (0<θ<2π, sinθcosθ≠0). 5지선다.
  category: "제곱근 성질(√a/√b=−√(a/b) ⇔ a>0, b<0) → 사분면 → 범위"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "공통수학1 의 제곱근 성질 √a/√b=−√(a/b) ⇔ a>0, b<0 을 떠올려 cosθ>0, sinθ<0 이라는 삼각함수 부호 조건으로 옮김(단원 밖 도구가 없으면 풀이가 끊김)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "제곱근 성질과 삼각함수 부호로 사분면 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    성질에서 cos>0, sin<0 → 제4사분면 → 3π/2<θ<2π → a+b=7/2. 제곱근 성질을 떠올리는 단원 밖 결합 1단계(XU d1 · 이 유형의 고정 레퍼토리라 d1) 뒤 사분면 한 줄(T-부호). 「중」·M_total 4·통찰 1 → ★2. [분류 이슈] 제곱근 성질을 I-XU 로 볼지 단순 표기 차용으로 볼지 경계 — 통찰을 빼면 M_total 4 로 ★1 후보.
  tier: star_2
  mechanism_primary: "√cos/√sin=−√(cos/sin) ⇔ cos>0, sin<0 → 제4사분면 → (a,b)=(3/2, 2) → 7/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0507.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자·분모 교체(√sin/√cos → 제2사분면), 곱 꼴 √a√b=−√(ab)(a,b<0 → 제3사분면)로. 제약: 성질의 부호 조건이 한 사분면으로 결정되도록."
    creative: "(1) |cos|=−cos 같은 절댓값 조건과 결합해 두 조건 교집합(★2) (2) 조건에서 θ/2 나 2θ 의 사분면 묻기(★3 · I-MI) (3) 성질 자체가 성립하는 조건을 ㄱㄴㄷ 로 판정(★2)."
```

```yaml
- id: RPM-ALG-0508
  page: 69
  vendor_label: "유형 07 삼각함수의 값의 부호"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    cosθ<0, tanθ<0 (0<θ<2π) 일 때 ㄱ sinθcosθ>0 · ㄴ sinθtanθ<0 · ㄷ tan(θ/2)>0 · ㄹ sin2θ>0 중 옳은 것. 5지선다.
  category: "부호 → 제2사분면 → 보기별 부호 판정(θ/2·2θ 범위 환산 포함)"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수 값의 부호로 사분면 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    cos<0·tan<0 → sin>0 → 제2사분면(π/2<θ<π). ㄱ ✗ · ㄴ ✓ · ㄷ π/4<θ/2<π/2 → tan>0 ✓ · ㄹ π<2θ<2π → sin<0 ✗ → ㄴ, ㄷ. θ/2·2θ 의 범위 환산(T-범위)이 추가 단계이나 0<θ<2π 가 주어져 케이스 분기는 없음. 「중」·M_total 6·통찰 없음 → ★2.
  tier: star_2
  mechanism_primary: "cos<0·tan<0 → sin>0 → π/2<θ<π → 보기별 부호 (θ/2∈(π/4,π/2), 2θ∈(π,2π)) → ㄴ, ㄷ"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0508.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "조건 부호 조합으로 사분면을 제3·4 로, 보기의 배각·반각을 θ/3·3θ 로. 제약: 0<θ<2π 를 주어 θ/2 가 한 사분면에 들어가게(범위를 빼면 0509 골조가 됨)."
    creative: "(1) 0<θ<2π 조건을 빼고 θ/2 보기를 두면 일반각 케이스 → I-MI d2 ★3 (2) 보기를 sin(θ+π/2) 등 변환각으로(다음 소단원 결합 ★3) (3) 부등식 대신 sinθ>cosθ 같은 대소 조건으로 사분면 결정(★2)."
```

```yaml
- id: RPM-ALG-0509
  page: 69
  vendor_label: "유형 07 삼각함수의 값의 부호"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    sinθtanθ>0, cosθtanθ<0 일 때 θ/2 를 나타내는 동경이 존재하는 사분면을 모두.
  category: "부호 → θ 제4사분면 → 일반각 2nπ+… → θ/2 를 n 홀짝으로 분기"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "θ 를 2nπ+3π/2<θ<2nπ+2π 일반각으로 써야 θ/2 가 nπ+3π/4<θ/2<nπ+π 가 되고, n 의 홀짝에 따라 제2·제4사분면 두 경우가 모두 답에 기여(0<θ<2π 로만 두면 제2사분면 하나만 나와 틀림)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "θ 의 사분면 → θ/2 동경의 사분면(일반각 분기)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    sin·tan=sin²/cos>0 → cos>0, cos·tan=sin<0 → 제4사분면. 일반각 2nπ+3π/2<θ<2nπ+2π 로 두고 반으로 나누면 nπ+3π/4<θ/2<nπ+π → n 짝수 제2, 홀수 제4사분면. 일반각 표현이 필수라는 점(T-범위)과 홀짝 케이스가 모두 답이 되는 분기 통찰 1개(MI d2). 「상중」·M_total 6 → ★3 유지.
  tier: star_3
  mechanism_primary: "cos>0, sin<0 → 2nπ+3π/2<θ<2nπ+2π → nπ+3π/4<θ/2<nπ+π → n 짝수 제2·홀수 제4사분면"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "제$2$사분면, 제$4$사분면"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0509.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "부호 조건을 바꿔 θ 를 제1·2·3사분면으로, θ/2 를 θ/3(세 경우)이나 2θ(두 사분면 합집합)로. 제약: 반각이면 항상 두 사분면, θ/3 이면 세 사분면이 나오므로 답 개수를 발문('모두')과 맞춤."
    creative: "(1) sin(θ/2)cos(θ/2) 의 부호로 가능한 경우를 묻기(★3) (2) θ 의 사분면을 동경 위 점의 좌표 부호로 주기(★3) (3) 3θ/2 처럼 분모·분자가 있는 배각 → 케이스 4개 ★4 후보(I-MI d3) (4) 0508 처럼 0<θ<2π 를 주면 분기가 사라져 ★2 로 내려감."
```

### 유형 08 삼각함수 사이의 관계를 이용하여 식 간단히 하기

```yaml
- id: RPM-ALG-0510
  page: 70
  vendor_label: "유형 08 삼각함수 사이의 관계를 이용하여 식 간단히 하기"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    (cos²θ−sin²θ)/(1+2sinθcosθ)+(tanθ−1)/(tanθ+1) 을 간단히. 5지선다.
  category: "1=sin²+cos² 로 완전제곱 → 인수분해·약분 → tan 을 sin/cos 로 통일 → 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "분모의 상수 1 을 sin²+cos² 로 바꿔 (sin+cos)² 을 만들고 분자 (cos−sin)(cos+sin) 과 약분(유형 08 의 공통 착안)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "sin²θ+cos²θ=1·tanθ=sinθ/cosθ 로 식 간단히 하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    첫 항=(cos−sin)/(cos+sin), 둘째 항=(sin/cos−1)/(sin/cos+1)=(sin−cos)/(sin+cos) → 합 0. 상수 1 을 항등식으로 치환하는 유형 표준 착안(EQV d1)과 분수식 정리(Mₖ 2). 대표문제 ★2 출발·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "1+2sincos=(sin+cos)², cos²−sin²=(cos−sin)(cos+sin) → (cos−sin)/(cos+sin); (tan−1)/(tan+1)=(sin−cos)/(sin+cos) → 합 0"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0510.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "부호 배치(1−2sincos 과 tan+1 조합 등) 변경, 계수 2 는 완전제곱을 위해 유지. 제약: 두 항이 상쇄되거나 상수가 되도록 부호 짝을 맞춤(답을 2 나 −2 로 만들 수도 있음)."
    creative: "(1) 한 항만 주고 tan 값을 넣어 값 구하기(0516 골조 ★2) (2) 세 항으로 늘려 상수 답(★2~3) (3) 분모가 0 이 되는 조건(tanθ≠−1)을 묻는 보기 추가(★2)."
```

```yaml
- id: RPM-ALG-0511
  page: 70
  vendor_label: "유형 08 삼각함수 사이의 관계를 이용하여 식 간단히 하기"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    sinθ/(1−cosθ)+(1−cosθ)/sinθ 를 간단히.
  category: "통분 → 분자 전개 → sin²+cos²=1 → 약분"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "sin²θ+cos²θ=1·tanθ=sinθ/cosθ 로 식 간단히 하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    통분 분자 sin²+(1−cos)²=2−2cos=2(1−cos) → 약분하여 2/sin. 통분·전개·항등식 대입의 정해진 절차(4단계). 「중」·M_total 6·통찰 없음 → ★2.
  tier: star_2
  mechanism_primary: "통분 → [sin²+(1−cos)²]/[sin(1−cos)] → 2(1−cos)/[sin(1−cos)] → 2/sin"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{2}{\sin\theta}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0511.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "1−cos ↔ 1+cos, sin ↔ cos 교체(답 2/cos 등), 합을 차로 바꾸면 2cos/sin. 제약: 분자가 2(1∓cos) 로 묶여 약분되도록 두 분수가 서로 역수 꼴."
    creative: "(1) 값 조건(sinθ=3/5, 제2사분면)을 붙여 수치 답(★2) (2) 좌변=우변 증명형 서술(★2) (3) 1/(1−cos)+1/(1+cos) 꼴로 바꿔 2/sin² 을 이끌고 방정식으로(0515 골조 ★2)."
```

```yaml
- id: RPM-ALG-0512
  page: 70
  vendor_label: "유형 08 삼각함수 사이의 관계를 이용하여 식 간단히 하기"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    ㄱ (1−cos²θ)/tan²θ+sin²θ=0 · ㄴ (1+1/sinθ)(1+1/cosθ)(1−1/sinθ)(1−1/cosθ)=2 · ㄷ (sinθ+1/sinθ)²+(cosθ+1/cosθ)²−(tanθ+1/tanθ)²=5 중 옳은 것.
  category: "보기별 항등식 정리(켤레 짝 묶기·합차 공식·1/sin²−cos²/sin²=1)"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "ㄴ 은 (1+1/sin)(1−1/sin) 처럼 켤레 짝을 먼저 묶어 1−1/sin²=−cos²/sin² 으로, ㄷ 은 전개 뒤 1/sin²−cos²/sin², 1/cos²−sin²/cos² 짝으로 묶어 각각 1 이 됨을 봄"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "sin²θ+cos²θ=1·tanθ=sinθ/cosθ 로 식 간단히 하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ㄱ sin²·cos²/sin²+sin²=1 ✗ · ㄴ (1−1/sin²)(1−1/cos²)=(−cos²/sin²)(−sin²/cos²)=1 ✗ · ㄷ 전개 후 3+(1/sin²−cos²/sin²)+(1/cos²−sin²/cos²)=5 ✓ → ㄷ. 항 묶기 착안 1개(EQV d1)에 전개량이 많음(Mₛ 3). 「중」·M_total 7·통찰 d1 → ★2 유지(계산량만으로 올리지 않음). [분류 이슈] 계산량 체감은 ★3 이나 규칙상 +1 근거(통찰 2개·d3) 없음 — 라벨 ★2.
  tier: star_2
  mechanism_primary: "ㄱ 항등식 → 1 ✗ · ㄴ 켤레 짝 묶기 → 1 ✗ · ㄷ 전개 후 (1/sin²−cos²/sin²)+(1/cos²−sin²/cos²)=2 → 5 ✓"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "ㄷ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0512.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 보기의 우변 상수 변경(ㄴ 을 =1 로 하면 참), 보기 개수 조정. 제약: 참 보기 1~2개, 거짓 보기의 우변은 실제 값과 다른 '그럴듯한' 상수."
    creative: "(1) ㄷ 만 떼어 서술형으로(★2) (2) sinθ+1/sinθ=k 로 매개변수화해 ㄷ 의 값을 k 로 → Mₐ 2 ★3 (3) tanθ+1/tanθ=1/(sinθcosθ) 를 이용하는 값 문제(0517 골조 ★3)."
```

```yaml
- id: RPM-ALG-0513
  page: 70
  vendor_label: "유형 08 삼각함수 사이의 관계를 이용하여 식 간단히 하기"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    0<cosθ<sinθ 일 때 √(1−2sinθcosθ)−√(1+2sinθcosθ) 를 간단히.
  category: "1±2sincos=(sin±cos)² → 절댓값 → 조건 0<cos<sin 으로 부호 결정"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "1 을 sin²+cos² 로 바꿔 근호 안을 (sin−cos)², (sin+cos)² 완전제곱으로 보고, 조건 0<cos<sin 을 sin−cos>0·sin+cos>0 이라는 절댓값 부호 판단으로 옮김(완전제곱 인식 + 조건의 부호 해석)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "1±2sinθcosθ=(sinθ±cosθ)² 근호 식 간단히 하기(조건 부호)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    √((sin−cos)²)=|sin−cos|=sin−cos, √((sin+cos)²)=sin+cos → 차 −2cos. 완전제곱 인식(유형 08 공통)에 조건을 두 절댓값의 부호로 해석하는 단계가 겹친 통찰 1개(EQV d2)·T-부호 둘. 「상중」·M_total 6·통찰 d2 → ★3.
  tier: star_3
  mechanism_primary: "1∓2sincos=(sin∓cos)² → |sin−cos|−|sin+cos| → (0<cos<sin) (sin−cos)−(sin+cos)=−2cos"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-2\cos\theta$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0513.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "조건을 0<sin<cos(답 −2sin)·cos<0<sin 등으로 바꿔 답 부호 변경, 차를 합으로(답 2sin). 제약: 조건이 sin−cos 와 sin+cos 두 부호를 모두 결정해야 함."
    creative: "(1) 조건을 θ 의 범위(π/4<θ<π/2)로 주어 부호 판단을 한 단계 더(★3) (2) 조건 없이 '가능한 값을 모두' → 부호 케이스 4개 I-MI ★4 후보 (3) √(1−sin²)+√(1−cos²) 처럼 단일 함수 완전제곱과 섞기(★2~3)."
```

### 유형 09 삼각함수 사이의 관계를 이용하여 식의 값 구하기

```yaml
- id: RPM-ALG-0514
  page: 70
  vendor_label: "유형 09 삼각함수 사이의 관계를 이용하여 식의 값 구하기"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    θ 가 제3사분면의 각이고 cosθ=−4/5 일 때 5sinθ+8tanθ. 5지선다.
  category: "sin²+cos²=1 로 sin(부호는 사분면) → tan=sin/cos → 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "한 삼각함수 값과 사분면 → 나머지 값(정의·관계식)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    sin=−3/5(제3사분면), tan=3/4 → −3+6=3. 관계식 한 번·부호 하나(T-부호). 대표문제 ★2 출발·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "cos=−4/5, 제3사분면 → sin=−3/5 → tan=3/4 → 5sin+8tan=3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0514.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "cos 값(−5/13·−12/13·−3/5)·사분면(제2·3)·계수 변경. 제약: 유리수 삼각비(피타고라스 세 쌍)·계수는 분모의 배수로 두어 정수 답."
    creative: "(1) tan 값을 주고 sin·cos 구하기(0516 골조 ★2) (2) 사분면 대신 부호 조건(sinθ<0)으로 주기(★1) (3) 식의 값에서 cos 를 역산 → I-BW d1 ★2."
```

```yaml
- id: RPM-ALG-0515
  page: 70
  vendor_label: "유형 09 삼각함수 사이의 관계를 이용하여 식의 값 구하기"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    1/(1+cosθ)+1/(1−cosθ)=8/3 (3π/2<θ<2π) 일 때 tanθ−sinθ.
  category: "통분 → 2/sin²=8/3 → sin²=3/4 → 사분면 부호 → cos·tan → 대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "한 삼각함수 값과 사분면 → 나머지 값(정의·관계식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    좌변 통분 2/(1−cos²)=2/sin²=8/3 → sin²=3/4, 제4사분면 → sin=−√3/2, cos=1/2, tan=−√3 → −√3+√3/2=−√3/2. 통분·항등식·부호의 정해진 순서(5단계·T-부호). 「중」·통찰 없음·M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "통분 → 2/sin²=8/3 → sin²=3/4 → (제4사분면) sin=−√3/2, cos=1/2 → tan−sin=−√3/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-\dfrac{\sqrt{3}}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0515.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 8/3 을 8(sin²=1/4)·4(sin²=1/2)로, 범위 변경. 제약: 우변=2/sin² 이므로 sin² 이 특수각 값(1/4·1/2·3/4)이 되게 둠."
    creative: "(1) 1/(1+sinθ)+1/(1−sinθ) 로 cos² 결정(★2) (2) 우변을 k 로 두고 가능한 k 의 범위 → I-BW ★3 (3) sin²=3/4 에서 θ 자체를 구해 각으로 답하기(★2)."
```

```yaml
- id: RPM-ALG-0516
  page: 70
  vendor_label: "유형 09 삼각함수 사이의 관계를 이용하여 식의 값 구하기"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    θ 가 제2사분면의 각이고 tanθ=−2/3 일 때 (sin²θ−cos²θ)/(1+sinθcosθ).
  category: "tan → (sin, cos)=(2/√13, −3/√13) 또는 cos² 으로 나눠 tan 식으로 → 대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "tanθ 값 → sin·cos 식의 값(cos² 나누기·tan/(1+tan²))"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    사분면 부호로 sin=2/√13, cos=−3/√13 → (4−9)/13 ÷ (1−6/13)=−5/7. 분모·분자를 cos² 으로 나눠 (tan²−1)/(1+tan²+tan) 로 두면 부호 없이 같은 답(두 길 모두 표준이라 SC 로 세지 않음). 「중」·M_total 6·통찰 없음 → ★2.
  tier: star_2
  mechanism_primary: "tan=−2/3, 제2사분면 → sin=2/√13, cos=−3/√13 → (sin²−cos²)/(1+sincos)=(−5/13)/(7/13)=−5/7"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-\dfrac{5}{7}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0516.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "tan 값(−3/4·−1/2), 사분면(제4), 분수식 구조 변경. 제약: 분모 1+sincos≠0 이고 답이 간단한 유리수(1+tan² 로 나눠 떨어지는 tan)."
    creative: "(1) 사분면 조건을 빼면 cos² 나누기 길만 남아 '사분면이 불필요함'을 깨닫는 I-SC d1 ★3 (2) (sin³+cos³)/(sin+cos) 등 대칭식으로(★2) (3) 분모를 sin²+2sincos 처럼 0 이 될 수 있게 두어 T-범위 추가(★3)."
```

```yaml
- id: RPM-ALG-0517
  page: 70
  vendor_label: "유형 09 삼각함수 사이의 관계를 이용하여 식의 값 구하기"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    3π/2<θ<2π 이고 (1+tanθ)/(1−tanθ)=2−√3 일 때 sinθcosθ.
  category: "tan 방정식 풀기(유리화) → sincos=tan/(1+tan²) 또는 특수각(θ=11π/6) → 값"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "sinθcosθ 를 sinθcosθ/(sin²θ+cos²θ)=tanθ/(1+tan²θ) 로 바꿔 tan 만으로 계산(또는 tan=−1/√3 을 특수각으로 읽어 sin·cos 를 직접 잡음)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "tanθ 값 → sin·cos 식의 값(cos² 나누기·tan/(1+tan²))"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    1+tan=(2−√3)(1−tan) → tan(3−√3)=1−√3 → tan=−1/√3. sincos=tan/(1+tan²)=(−1/√3)/(4/3)=−√3/4(제4사분면이라 음수 부합). tan 방정식의 무리수 정리(Mₖ 2)와 분모에 1=sin²+cos² 를 만드는 착안(EQV d1). 「상중」·M_total 6·통찰 1 → ★3 유지(특수각 θ=11π/6 을 알아채면 ★2 체감).
  tier: star_3
  mechanism_primary: "(1+tan)/(1−tan)=2−√3 → tan=−1/√3 → sincos=tan/(1+tan²)=−√3/4"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$-\dfrac{\sqrt{3}}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0517.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 2−√3 을 2+√3(tan=1/√3)·−(2+√3)(tan=√3) 등 tan 이 특수각 값이 되는 값으로, 범위 변경. 제약: tan 값의 부호와 범위가 일치하고 유리화가 한 번에 끝나는 우변."
    creative: "(1) sinθ+cosθ 를 묻기((sin+cos)²=1+2sincos 뒤 부호 판단 T-부호 ★3) (2) tan 이 특수각이 아닌 값(−1/2)이면 특수각 길이 막혀 항등식 길만 남음(★3) (3) sin³θ+cos³θ 처럼 대칭식 확장(★3)."
```

## 표본 판정 요약 (30문)

- ★ 분포: ★1 11 · ★2 16 · ★3 3 · ★4 0 · ★5 0
- 통찰형(insight_type) 2(0509 MI d2 · 0513 EQV d2) · 절차형 28 · premium 0. 통찰 라벨을 가진 문항은 9(d1 표준 착안 7 포함: 0497·0498·0501 RT · 0507 XU · 0510·0512·0517 EQV)
- 벤더 신호 대비: 대표문제 7 중 5 가 M_total 4 로 ★1(1단 하향) · 「중」 12 중 2 가 ★1(0489·0490) · 「상중」 4 중 1 이 ★2(0502) · 「중하」 3 모두 ★1 · 「하」 1 ★1
- type_hint 상위: 「두 동경의 위치 관계」 4 · 「동경 위의 점으로 삼각함수 값 구하기(정의)」 4 · 「삼각함수 값의 부호로 사분면 결정」 3 · 「sin²θ+cos²θ=1·tanθ=sinθ/cosθ 로 식 간단히 하기」 3 · 「육십분법·호도법 변환」 2 · 「부채꼴의 호의 길이·넓이 공식」 2 · 「사분면 부호로 절댓값·근호 식 간단히 하기」 2 · 「한 삼각함수 값과 사분면 → 나머지 값」 2 · 「tanθ 값 → sin·cos 식의 값」 2
- 그림: 2문(`crop:fig-0498.png` · `crop:fig-0501.png`) · 서술형 3문(0491·0502·0506) · 대표문제 7문
- 답: 30문 모두 다시 풀어 전사본 answer 와 일치(전사 답 확인 필요 없음)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-ALG-0494 | 유형 제목은 단위 변환이나 보기 ㄷ·ㄹ 은 유형 02 각의 표현(사분면·동경 일치) 골조 — type_hint 를 어느 유형에 둘지 카탈로그 설계 때 결정 | ★2 |
| RPM-ALG-0502 | 벤더 「상중」(서술형)이나 통찰 없음·M_total 4 로 0499 와 같은 절차형 ★1~2. 라벨은 −1 한 ★2 로 두고 기록 | ★1 / ★2 |
| RPM-ALG-0507 | 제곱근 성질 √a/√b=−√(a/b) 를 I-XU 로 볼지 단순 표기 차용으로 볼지 경계. 통찰을 빼면 M_total 4 로 ★1 후보 | ★1 / ★2 |
| RPM-ALG-0512 | 「중」·M_total 7·EQV d1 로 규칙상 ★2 이나 세 보기 전개량 때문에 체감은 ★3. +1 근거(통찰 2개·d3) 없어 라벨 ★2 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세울 유형**: 「두 동경의 위치 관계」(0488~0491 · 일치/반대/x축/y축/y=x/y=−x 대칭은 한 유형 안의 하위 조건으로 두고 변형 축으로 씀) · 「부채꼴 둘레 고정 → 넓이 최대」(0497 · 이차함수 결합이라 공식 유형과 분리) · 「부채꼴에 내접하는 원」(0498 · 보조선 구성이 골조) · 「θ 의 사분면 → θ/2 동경의 사분면」(0509 · 일반각 케이스 분기 MI 가 골조라 부호 유형과 분리, ★3 층) · 「1±2sinθcosθ 완전제곱 근호 식」(0513 · 0510 과 착안을 공유하나 조건 부호 판단이 붙어 ★3 층).
- **통합해도 될 유형**: 「육십분법·호도법 변환」(0492·0493·0494 — 0494 의 사분면·동경 일치 보기는 유형 02 와 겹치므로 카탈로그에서는 각의 표현 유형에 교차 참조) · 「부채꼴 공식 적용」(0495·0496) · 「동경 위의 점으로 삼각함수 값」(0499~0502 — 점·직선·도형 제시 방식은 변형 축) · 「부호로 사분면 결정」(0503·0504·0508, 0507 은 제곱근 성질 결합 변형으로 흡수 가능) · 「절댓값·근호 식 간단히」(0505·0506) · 「항등식으로 식 간단히」(0510·0511·0512) · 「한 값 → 나머지 값」(0514·0515) · 「tan → sin·cos 식의 값」(0516·0517 — 0517 의 tan 방정식·특수각 인식은 변형 축).
- 이 범위의 ★3 은 셋뿐이고 ★4 후보(0509 의 3θ/2 분기 확장 · 0513 의 조건 없는 케이스 4개)는 creative 변형 쪽에만 있다. 상위권용 변형은 유형 07·08 의 케이스 분기(MI)와 조건 부호 해석(EQV d2)을 결합하는 방향이 자연스럽다.
