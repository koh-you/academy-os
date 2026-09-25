---
name: mechanism-데이터-GN-M32-03-p1
description: 개념원리 중학 3-2 03 임의의 예각의 삼각비의 값(1/2 · 개념원리 확인하기~이런 문제가 시험에 나온다) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 중학 3-2 · 전사본 latex-bank/gn-m32
  section: 03 임의의 예각의 삼각비의 값
  unit_code: GN-M32-03
  part: "1/2"
  extract_range: "22~27쪽 · 22-01~27-05"
  total_problems: 24
  unit_total: 56
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-m32/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-m32/items/<id>.tex
  image_source: latex-bank/gn-m32/figures/ (crops.json)
---

# 개념원리 중학 3-2 · 03 임의의 예각의 삼각비의 값 (1/2) 정독 데이터 (v1.0)

이 파일은 22~27쪽 24문항(개념원리 확인하기 7 · 핵심문제 익히기 12 · 이런 문제가 시험에 나온다 5)을 다룬다. 개념원리 중학은 문항별 난이도 표시(하·중·상)나 태그가 없고 **구역(section) 자체가 난이도 층**이므로 ★ 출발점은 구역에서 잡고 M_total·통찰로 ±1 조정했다(확인하기 ★1 · 핵심문제 익히기 ★2 · 이런 문제가 시험에 나온다 ★2~3). 핵심문제 익히기 안의 `쪽-hN` 은 핵심문제, `쪽-cN` 은 그 짝인 확인문제다.

단원은 반지름 1 인 사분원으로 삼각비를 선분 길이로 바꾸는 장치 하나에서 출발해 0°·90° 값, 대소 관계, 삼각비의 표로 갈라진다. 그래서 통찰이 붙는 자리도 세 갈래뿐이다 — 삼각비↔사분원 선분의 표현 전환, 종류가 다른 삼각비의 대소를 0·1·45° 기준값 비교로 옮기는 동치 변환(여기에 √(X²)=|X| 의 부호 판정이 붙는다), 표의 값에서 각을 거꾸로 찾는 역조회. 노동량은 대부분 선택지 전수 판정에서 나온다. 이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다.

## 문항 데이터

### 개념원리 확인하기

```yaml
- id: GN-M32-22-01
  page: 22
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    ⑴~⑸ 반지름 1 인 사분원 그림에서 sin x, cos x, tan x, sin y, cos y 와 길이가 같은 선분을 빈칸에 써넣기(분수 꼴과 분모는 이미 인쇄돼 있음).
  category: "반지름 1 확인 → 삼각비의 분모가 1 → 대응 선분 읽기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "사분원을 이용하여 삼각비의 값 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    분수 꼴과 분모(OA)가 이미 인쇄돼 있어 학생은 대변·이웃변에 해당하는 선분만 채우면 된다.
    tan x 만 사분원 안의 직각삼각형이 아니라 접선 쪽 삼각형(OD=1)에서 읽어야 하는 표기 함정(T-표기)이 하나 있다.
    [분류 이슈] 24-h1·27-01 과 대응 골조는 같지만 안내가 있어 통찰을 세지 않았다. 확인하기 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "OA=OD=1 확인 → 각 삼각비의 분모를 1 로 → 분자 선분을 그대로 답으로"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\seg{AB}$, $\seg{AB}$ ⑵ $\seg{OB}$, $\seg{OB}$ ⑶ $\seg{OD}$, $\seg{CD}$ ⑷ $\seg{OB}$, $\seg{OB}$ ⑸ $\seg{AB}$, $\seg{AB}$'
  answer_source: "답지"
  figure: "crop:fig-22-01.png"
  latex: latex-bank/gn-m32/items/22-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "반지름은 1 로 고정해야 선분=삼각비가 성립하므로 바꾸지 않는다. 바꿀 수 있는 것은 점 이름(A·B·C·D), 묻는 삼각비의 조합, 각 x·y 의 표시 위치뿐."
    creative: "(1) 분모 빈칸까지 비워 대응을 학생이 세우게 하면 24-h1 수준(★2 · I-RT d1) (2) 반지름을 2 로 바꾸면 삼각비=선분÷2 단계가 추가(★2) (3) 선분 길이를 소수로 주고 값을 묻는 22-02 형태로 전환."
```

```yaml
- id: GN-M32-22-02
  page: 22
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    ⑴~⑸ 좌표평면 위 원점 중심·반지름 1 인 사분원 그림에서 sin 40°, cos 40°, tan 40°, sin 50°, cos 50° 의 값을 소수로 구하기.
  category: "반지름 1 → 좌표·접선 선분 값 읽기 → 50°는 여각으로 환원"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "사분원을 이용하여 삼각비의 값 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    그림에 점의 좌표와 접선 위 점의 값이 소수로 적혀 있어 sin=y좌표, cos=x좌표, tan=접선 선분을 그대로 옮기면 된다.
    50° 는 같은 직각삼각형의 다른 예각이라 sin 50°=cos 40° 로 값이 재사용되지만, 그림에서 각 y 를 읽으면 끝나므로 별도 통찰로 세지 않았다.
    확인하기 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "호 위 점의 x·y 좌표 → cos 40°·sin 40° / 접선 위 점의 y → tan 40° / 50°는 여각이라 값 교환"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "⑴ $0.6428$ ⑵ $0.7660$ ⑶ $0.8391$ ⑷ $0.7660$ ⑸ $0.6428$"
  answer_source: "답지"
  figure: "crop:fig-22-02.png"
  latex: latex-bank/gn-m32/items/22-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각을 40° 대신 다른 예각(35°·55°)으로 바꾸고 좌표값을 삼각비의 표 값으로 교체. 제약: 반지름 1 고정, 여각 쌍(40°/50°)의 합이 90° 여야 하고 두 값이 같은 그림 안에서 x·y 좌표로 맞물려야 함."
    creative: "(1) 값 하나를 지우고 나머지로 추론하게 하면 ★2 (2) 소수 대신 선분 이름으로 묻는 22-01 형태 (3) sin 50°=cos 40° 인 이유를 설명하게 하면 여각 관계가 주 통찰이 되어 ★2(I-EQV d1)."
```

```yaml
- id: GN-M32-22-03
  page: 22
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    0°·30°·45°·60°·90° 에 대한 sin·cos·tan 값 표를 완성하기.
  category: "특수각 값 복원 + 사분원에서 0°·90° 극한 위치 → 표 채우기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "0°·90°와 특수각의 삼각비의 값 표"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    특수각 세 개는 이미 배운 값이고 이 단원에서 새로 채우는 칸은 0°·90° 의 네 칸과 tan 90° 를 정할 수 없다는 한 칸이다.
    계산이 아니라 사분원에서의 극한 위치를 기억하는 확인 문항이고, tan 90° 자리의 표기 함정(T-표기) 하나만 있다.
    확인하기 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "특수각 값 복원 → 사분원에서 0°·90° 의 선분 위치 → tan 90° 는 정할 수 없음"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '풀이 참조 ($\sin\pt{A}$: $0$, $\dfrac{1}{2}$, $\dfrac{\sqrt{2}}{2}$, $\dfrac{\sqrt{3}}{2}$, $1$ / $\cos\pt{A}$: $1$, $\dfrac{\sqrt{3}}{2}$, $\dfrac{\sqrt{2}}{2}$, $\dfrac{1}{2}$, $0$ / $\tan\pt{A}$: $0$, $\dfrac{\sqrt{3}}{3}$, $1$, $\sqrt{3}$, 정할 수 없다)'
  answer_source: "답지 · 계산(표 값)"
  figure: "crop:fig-22-03.png"
  latex: latex-bank/gn-m32/items/22-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "표의 각 배열을 바꾸거나 일부 칸만 비워 두기. 제약: 0°·90° 열과 tan 90° 칸은 이 단원의 핵심이라 반드시 비운 채로 둔다."
    creative: "(1) 값 하나를 주고 각을 찾게 하는 역방향(★2 · I-BW) (2) 표를 sin·cos 의 증감 방향 설명과 묶으면 23-05 형태 (3) tan 90° 를 정할 수 없는 이유를 사분원의 접선으로 설명하게 하면 ★2."
```

```yaml
- id: GN-M32-23-04
  page: 23
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    ⑴~⑷ sin 0°+cos 90°, sin 90°−tan 0°, cos 0°×tan 45°, sin 90°÷cos 60° 을 계산하기.
  category: "0°·90°·특수각 값 대입 → 사칙연산 한 줄"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "0°, 90°의 삼각비의 값"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    표에서 값을 꺼내 한 줄로 계산하는 문항. 값이 0 과 1 뿐이라 계산 부담이 없다.
    0 을 더하거나 빼는 자리에서의 표기 실수(T-표기)만 조심하면 되고 판단 단계는 없다.
    확인하기 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "각 삼각비를 0·1·특수각 값으로 치환 → 사칙연산 한 줄"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "⑴ $0$ ⑵ $1$ ⑶ $1$ ⑷ $2$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m32/items/23-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 식의 연산 조합을 바꾸되 값이 0·1·1/2·√3/2 로만 이루어지게 유지. 제약: 나눗셈에는 0 이 되는 값(sin 0°·cos 90°·tan 0°)을 분모에 두지 않는다."
    creative: "(1) 옳은 것 고르기 선택형으로 바꾸면 24-h2(★2) (2) 값이 같은 두 식을 찾게 하기(★2) (3) 결과가 주어진 값이 되도록 빈칸의 각을 찾게 하면 역방향 ★2~3."
```

```yaml
- id: GN-M32-23-05
  page: 23
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    ⑴~⑷ 0°≤x≤90° 에서 sin 은 증가·cos 는 감소, 0°≤x<45° 에서 sin x>cos x, 45°<x<90° 에서 cos x<tan x 라는 네 진술의 ○/× 판정.
  category: "사분원에서 선분 길이 변화 → 증감 판정 → 45° 기준 대소"
  M: {s: 1, k: 1, a: 1, t: 2}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각비의 값의 대소 관계"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴⑵ 는 사분원에서 선분 길이 변화를 그대로 읽는 정의 확인이고, ⑶⑷ 만 45° 를 기준으로 종류가 다른 삼각비를 비교한다.
    각 범위의 등호 포함 여부와 경계 45°(T-범위·T-경계) 두 가지가 깔려 있어 Mₜ 2.
    [분류 이슈] 25-h3 과 골조는 같지만 진술이 교과서 개념 그대로라 통찰을 세지 않았다. 확인하기 구역·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "사분원에서 선분 길이 변화로 sin 증가·cos 감소 확정 → 45° 를 기준으로 sin·cos·tan 대소 비교"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "⑴ ○ ⑵ ○ ⑶ × ⑷ ○"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m32/items/23-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준각 45° 의 어느 쪽을 쓰는지와 부등호 방향을 바꿔 ×가 되는 진술을 섞기. 제약: 0°≤x≤90° 범위를 유지하고 tan 은 90° 를 제외한다."
    creative: "(1) 보기 ㄱㄴㄷㄹ 묶음으로 바꾸면 25-c3(★2) (2) 거짓인 진술의 반례 각을 직접 들게 하면 ★2~3 (3) x 가 45° 를 지날 때 sin x−cos x 의 부호가 바뀌는 것을 묻는 25-h4 골조로 연결."
```

```yaml
- id: GN-M32-23-06
  page: 23
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    ⑴~⑷ sin 25°와 sin 40°, cos 50°와 cos 70°, tan 40°와 tan 65°, sin 85°와 cos 85° 사이에 들어갈 부등호를 써넣기.
  category: "같은 삼각비는 증감 규칙 → 다른 삼각비는 45° 기준 비교"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각비의 값의 대소 관계"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴~⑶ 은 같은 삼각비끼리라 증감 방향만 알면 끝나고, ⑷ 만 sin 과 cos 를 직접 비교하는데 85°>45° 라 sin 쪽이 크다는 한 줄이다.
    cos 만 감소한다는 방향 혼동(T-부호)이 유일한 실수 지점.
    확인하기 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "같은 삼각비끼리는 증감 방향 적용 → 종류가 다르면 45° 기준으로 sin·cos 비교"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "⑴ $<$ ⑵ $>$ ⑶ $<$ ⑷ $>$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m32/items/23-06.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "비교하는 두 각을 45° 의 같은 쪽에서 고르면 난도 유지, 45° 를 사이에 두면 판단 단계가 하나 늘어난다. 제약: tan 끼리 비교할 때 두 각 모두 90° 미만."
    creative: "(1) 세 개 이상을 한 줄로 나열하게 하면 27-03(★2) (2) sin·cos·tan 을 섞으면 25-h3 (3) 부등호가 성립하는 각의 범위를 구하게 하면 역방향 ★3."
```

```yaml
- id: GN-M32-23-07
  page: 23
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    주어진 삼각비의 표를 이용하여 sin 35°, cos 38°, tan 37° 의 값 구하기.
  category: "표에서 각의 행 찾기 → 삼각비의 열 → 값 읽기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각비의 표를 이용하여 삼각비의 값 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    행과 열을 맞춰 값을 읽는 조회 한 단계뿐이다.
    행이 한 칸 어긋나면 그대로 오답이 되는 표 읽기 함정(T-표기)만 있고 계산도 없다.
    확인하기 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "표에서 각도 행 찾기 → 해당 삼각비 열의 값 그대로 읽기"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "⑴ $0.5736$ ⑵ $0.7880$ ⑶ $0.7536$"
  answer_source: "답지"
  figure: "crop:fig-23-07.png"
  latex: latex-bank/gn-m32/items/23-07.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "크롭된 표 안의 다른 각·다른 열로 교체. 제약: 표에 실제로 보이는 각 범위 안에서만 고른다."
    creative: "(1) 값을 주고 각을 찾는 역조회로 바꾸면 26-h5 ⑵ 형태(★2 · I-BW d1) (2) 두세 값을 더하고 빼게 하면 26-c5 (3) 표 값을 직각삼각형의 변 길이 계산에 쓰면 26-h6."
```

### 핵심문제 익히기

```yaml
- id: GN-M32-24-h1
  page: 24
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제 익히기"
  summary: |
    반지름 1 인 사분원에서 sin x=AB, sin y=OB, cos x=OB, cos z=CD, tan x=CD 다섯 중 옳지 않은 것 고르기.
  category: "선택지마다 각이 속한 직각삼각형 확인 → 빗변이 1 인지 판정 → 틀린 것 찾기"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "다섯 삼각비를 모두 사분원 위 선분 길이로 옮겨 한꺼번에 판정 — 대수 표현 그대로는 참거짓을 가릴 수 없음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "사분원을 이용하여 삼각비의 값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    다섯 선택지를 모두 선분으로 옮겨야 해 단계가 4~6(Mₛ 2)이다.
    틀린 곳은 z 가 접선 쪽 삼각형 OCD 의 각이라 빗변이 OC 이고 1 이 아니라는 지점 하나이며, 22-01 과 달리 분모 안내가 없어 학생이 대응을 스스로 세운다.
    핵심문제 구역 출발 ★2, 통찰 1(RT d1)·M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "각이 속한 직각삼각형 확인 → 빗변이 1 인 것만 선분=삼각비 → cos z 는 빗변 OC≠1 이라 탈락"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "④"
  answer_source: "본문 답"
  figure: "crop:fig-24-h1.png"
  latex: latex-bank/gn-m32/items/24-h1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "반지름 1 고정. 바꿀 수 있는 것은 선택지에 넣는 삼각비 조합과 어느 것을 오답으로 둘지. 제약: 오답은 빗변이 1 이 아닌 접선 쪽 삼각형의 sin·cos 로 만드는 것이 가장 자연스럽다."
    creative: "(1) 옳은 것 모두 고르기로 바꾸면 판정 부담만 늘고 ★2 유지 (2) 각 y·z 를 지우고 여각 관계를 학생이 세우게 하면 ★3 (3) 선분 길이를 소수로 주고 값을 묻는 24-c1 형태."
```

```yaml
- id: GN-M32-24-c1
  page: 24
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제 익히기"
  summary: |
    좌표평면 위 반지름 1 인 사분원 그림에서 sin 47°=0.68, cos 47°=0.73, tan 47°=1.07, sin 43°=0.68, cos 43°=1.07 중 옳은 것 두 개 고르기.
  category: "좌표·접선 값 읽기 → 47°와 43°의 여각 대응 → 선택지 판정"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "그림의 좌표와 접선 위 값을 어느 삼각비에 붙일지 옮겨야 선택지 판정이 시작됨"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "사분원을 이용하여 삼각비의 값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    그림의 두 소수(0.68·0.73)와 접선 값(1.07)을 sin·cos·tan 어디에 붙일지 정하는 것이 전부다.
    ④ 는 43° 가 47° 의 여각이라 sin 43°=cos 47°=0.68 로 값이 재사용되는 자리이고, ⑤ 는 cos 가 1 을 넘을 수 없다는 점에서 바로 걸러진다.
    핵심문제 구역·통찰 1(RT d1)·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "호 위 점의 x·y 좌표 → cos 47°·sin 47° / 접선 선분 → tan 47° / 43°는 여각이라 값 교환"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③, ④"
  answer_source: "답지"
  figure: "crop:fig-24-c1.png"
  latex: latex-bank/gn-m32/items/24-c1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각을 47°/43° 대신 다른 여각 쌍으로, 소수는 삼각비의 표 값으로 교체. 제약: 두 각의 합이 90° 여야 하고 sin·cos 값은 1 이하, tan 은 45° 초과각이면 1 보다 커야 한다."
    creative: "(1) 정답 개수를 밝히지 않으면 전수 판정 부담이 늘어 ★3 후보 (2) 값 하나를 미지수로 두고 나머지로 구하게 하면 ★3 (3) 선분 이름으로 묻는 24-h1 형태."
```

```yaml
- id: GN-M32-24-h2
  page: 24
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제 익히기"
  summary: |
    sin 0°+tan 0°=1 등 0°·90°·특수각이 섞인 다섯 식 중 옳은 것 고르기.
  category: "0°·90°·특수각 값 대입 → 선택지 다섯 개 전수 계산 → 참인 것 선택"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "0°, 90°의 삼각비의 값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    선택지 다섯 개를 모두 계산해야 해 단계와 계산량이 함께 늘어난다(Mₛ·Mₖ 2).
    ⑤ 만 두 괄호의 곱이라 (0+√2/2)(0−√2/2) 전개가 한 번 더 들어가고 부호 처리(T-부호)가 실수 지점이다.
    핵심문제 구역·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "0°·90°·특수각 값 대입 → 선택지 다섯 개 각각 계산 → 참인 것 선택"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m32/items/24-h2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 선택지의 연산과 특수각 조합을 교체. 제약: 참이 정확히 하나가 되도록 나머지 넷의 값이 서로 다르게 나오게 배치하고 tan 90° 는 쓰지 않는다."
    creative: "(1) 옳지 않은 것 고르기로 뒤집기(★2 유지) (2) 값을 직접 계산하게 하면 24-c2 (3) 식이 성립하도록 빈칸의 각을 찾게 하면 역방향 ★3."
```

```yaml
- id: GN-M32-24-c2
  page: 24
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제 익히기"
  summary: |
    ⑴~⑶ sin 90°×cos 90°+cos 0°×tan 0°, sin 0°−tan 30°×tan 60°+cos 90°, (2cos 60°+sin 90°)÷tan 45° 을 계산하기.
  category: "0°·90°·특수각 값 대입 → 곱·나눗셈 순서대로 정리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "0°, 90°의 삼각비의 값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    세 식 모두 대입 후 정리지만 ⑵ 의 tan 30°×tan 60°=1, ⑶ 의 분수 꼴 때문에 한 줄로는 끝나지 않는다.
    0 을 곱하는 자리와 음수 부호 처리(T-부호)가 실수 지점이고 판단 단계는 없다.
    핵심문제 구역·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "각 삼각비를 0·1·특수각 값으로 치환 → 곱셈·나눗셈 순서대로 정리"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑴ $0$ ⑵ $-1$ ⑶ $2$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m32/items/24-c2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 식의 특수각 조합과 연산 순서를 교체. 제약: 분모에 0 이 되는 값을 두지 않고 결과가 정수나 간단한 분수로 떨어지게 한다."
    creative: "(1) 선택형으로 바꾸면 24-h2 (2) 결과가 0 이 되도록 빈칸의 각을 찾게 하면 ★3 (3) 근호를 더 얹는 변형은 계산량만 늘어 질이 떨어지므로 피한다."
```

```yaml
- id: GN-M32-25-h3
  page: 25
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제 익히기"
  summary: |
    sin 45°=cos 45°, sin 50°<sin 55°, cos 20°>cos 25°, tan 70°<tan 80°, sin 65°>tan 50° 다섯 중 옳지 않은 것 고르기.
  category: "같은 삼각비는 증감 규칙 → 종류가 다르면 1 기준 비교 → 거짓인 것 찾기"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "sin 65° 와 tan 50° 처럼 종류가 다른 삼각비의 비교를 「45° 보다 큰 tan 은 1 보다 크고 sin 은 1 이하」라는 기준값 비교로 바꿈"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각비의 값의 대소 관계"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ①~④ 는 증감 규칙 한 줄이고 변별은 ⑤ 한 곳에서 난다.
    sin 과 tan 은 직접 비교할 수 없으니 1 을 사이에 두는 기준값 비교로 옮겨야 하고, 이 전환이 없으면 값을 모른 채 추측하게 된다.
    핵심문제 구역·통찰 1(EQV d1)·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "①~④ 는 증감 규칙 적용 → ⑤ 는 tan 50°>1≥sin 65° 로 기준값 비교 → ⑤ 가 거짓"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "⑤"
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m32/items/25-h3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "비교 각을 바꾸되 ⑤ 자리의 tan 쪽 각은 45° 초과로 유지. 제약: sin 은 1 을 넘지 않고 tan 45°=1 이 기준이므로 두 각이 모두 45° 아래면 판정이 뒤집힌다."
    creative: "(1) 보기 묶음형으로 바꾸면 25-c3 (2) 큰 것부터 나열하게 하면 27-03(★2) (3) 대소 결과를 √ 식 정리에 쓰게 하면 25-h4 골조로 연결(★2~3)."
```

```yaml
- id: GN-M32-25-c3
  page: 25
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제 익히기"
  summary: |
    보기 ㄱ~ㄹ(sin 40°<sin 50°, cos 65°<cos 80°, sin 38°>cos 38°, cos 60°<tan 60°) 중 옳은 것 모두 고르기.
  category: "같은 삼각비는 증감 규칙 → 종류가 다르면 45°·1 기준 비교 → 참인 보기 선별"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "ㄷ·ㄹ 처럼 종류가 다른 삼각비의 비교를 45°(sin=cos)와 특수각 값(cos 60°=1/2, tan 60°=√3)이라는 기준으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각비의 값의 대소 관계"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ㄱ·ㄴ 은 증감 규칙이고 ㄴ 은 cos 가 감소한다는 방향을 뒤집어 놓은 거짓 보기다.
    ㄷ 은 38°<45° 라 cos 쪽이 크고, ㄹ 은 특수각 값을 직접 대입해 1/2<√3 으로 끝난다. 네 보기 전수 판정 부담이 있다.
    핵심문제 구역·통찰 1(EQV d1)·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "ㄱㄴ 증감 규칙 → ㄷ 45° 기준 sin·cos 비교 → ㄹ 특수각 값 대입 → 참인 것 수집"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "ㄱ, ㄹ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m32/items/25-c3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 보기의 각을 바꾸되 참·거짓이 두 개씩 섞이게 배치. 제약: ㄷ 자리는 45° 의 어느 쪽인지가 답을 뒤집으므로 각을 옮기면 부등호도 함께 검토한다."
    creative: "(1) 옳은 것의 개수만 묻기(★2 유지) (2) 보기에 0°·90° 를 넣으면 24-h2 성격이 섞임 (3) 거짓인 보기가 참이 되도록 각의 범위를 고치게 하면 ★3."
```

```yaml
- id: GN-M32-25-h4
  page: 25
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제 익히기"
  summary: |
    0°<A<45° 일 때 √(sin²A)+√((sin A−cos A)²) 을 간단히 하기.
  category: "√(X²)=|X| → 각 범위로 부호 판정 → 절댓값 풀어 정리"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "주어진 각의 범위를 sin A−cos A 의 부호 조건으로 바꿔야 절댓값을 벗길 수 있음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각비의 값의 대소 관계를 이용한 식의 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    √(X²) 를 |X| 로 본 뒤 0°<A<45° 에서 sin A>0, sin A−cos A<0 이라는 두 부호 판정이 전부다.
    각 범위(T-범위)와 절댓값 부호(T-부호) 두 함정이 겹쳐 Mₜ 2, 수치가 아니라 문자 A 로 표현돼 Mₐ 2.
    핵심문제 구역·통찰 1(EQV d1)·M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "√(X²)=|X| → 0°<A<45° 에서 sin A>0·sin A−cos A<0 → sin A+(cos A−sin A)=cos A"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\cos\pt{A}$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m32/items/25-h4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 범위를 45°<A<90° 로 옮기면 부호가 뒤집혀 답이 2sin A−cos A 꼴이 된다. 제약: 범위의 경계는 0°·45°(sin=cos)·90° 중에서 잡아야 부호가 한 가지로 정해진다."
    creative: "(1) 범위를 45°<A<90° 로 바꿔 부호를 뒤집기(★2 유지) (2) 두 근호의 차로 만들면 27-04 처럼 0 이 되는 함정 (3) 범위를 주지 않고 경우를 나누게 하면 I-MI 가 붙어 ★3~4."
```

```yaml
- id: GN-M32-25-c4
  page: 25
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제 익히기"
  summary: |
    0°<A<90° 일 때 √((cos A+1)²)+√((cos A−1)²) 을 간단히 하기.
  category: "√(X²)=|X| → 0<cos A<1 로 두 괄호의 부호 판정 → 정리"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "0°<A<90° 라는 각 조건을 0<cos A<1 이라는 값 범위로 옮겨야 cos A+1>0, cos A−1<0 이 확정됨"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각비의 값의 대소 관계를 이용한 식의 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    각 조건을 cos A 의 값 범위로 먼저 옮겨야 두 절댓값의 부호가 갈린다.
    (cos A+1)+(1−cos A) 로 cos A 가 소거돼 상수만 남는 것이 이 문항의 핵심이고, 부호를 한쪽만 바꾸면 2cos A 로 틀린다.
    핵심문제 구역·통찰 1(EQV d1)·M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "0°<A<90° → 0<cos A<1 → |cos A+1|+|cos A−1|=(cos A+1)+(1−cos A)=2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$2$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m32/items/25-c4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "1 대신 다른 상수 k 를 쓰면 cos A 와 k 의 대소를 따로 따져야 한다. 제약: k≥1 이어야 부호가 한 가지로 정해지고, k<1 이면 각 범위를 더 좁혀 주어야 한다."
    creative: "(1) cos 대신 tan 으로 바꾸면 1 을 넘을 수 있어 경우 분기가 생겨 ★3 (2) 합 대신 차로 바꾸면 답에 cos A 가 남음 (3) 결과가 상수 2 가 되는 이유를 설명하게 하면 ★3."
```

```yaml
- id: GN-M32-26-h5
  page: 26
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제 익히기"
  summary: |
    ⑴ 삼각비의 표를 이용해 sin 68°+cos 66° 의 값 구하기 ⑵ tan x=2.3559 일 때 x 의 크기 구하기.
  category: "표 정조회 후 덧셈 → 표 역조회로 각 찾기"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 2
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "⑵ 는 값에서 각을 거꾸로 찾는 역조회 — 표를 읽는 방향이 반대라 tan 열을 세로로 훑어 해당 행의 각을 잡아야 함"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각비의 표를 이용하여 삼각비의 값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 두 값을 읽어 더하는 조회이고 변별은 ⑵ 의 방향 전환에 있다.
    각 → 값 이 아니라 값 → 각 이라 표를 세로로 훑어야 하고, 열을 잘못 잡으면 다른 각이 나온다(T-표기).
    핵심문제 구역·통찰 1(BW d1)·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "표에서 sin 68°·cos 66° 읽어 합 → tan 열에서 2.3559 가 있는 행을 찾아 x"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $1.3339$ ⑵ $67^\circ$'
  answer_source: "본문 답"
  figure: "crop:fig-26-h5.png"
  latex: latex-bank/gn-m32/items/26-h5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "조회할 각과 역조회할 값을 크롭된 표 안의 다른 칸으로 교체. 제약: 역조회 값은 표에 정확히 실린 값이어야 하고, 합·차가 표 밖 각을 요구하지 않게 한다."
    creative: "(1) 두 값의 차·곱으로 바꾸기(★2 유지) (2) 역조회를 두 번 시켜 두 각의 합을 묻기(★3) (3) 찾은 각을 직각삼각형에 넣어 변의 길이까지 구하게 하면 26-h6 과 결합돼 ★3."
```

```yaml
- id: GN-M32-26-c5
  page: 26
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제 익히기"
  summary: |
    삼각비의 표를 이용해 sin 50°+cos 49°−tan 51° 의 값 구하기.
  category: "표에서 세 값 조회 → 덧셈·뺄셈"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각비의 표를 이용하여 삼각비의 값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    각이 세 개 모두 다른 행이라 조회가 세 번이고 소수 네 자리 덧셈·뺄셈이 이어진다(Mₖ 2).
    방향 전환은 없고 행을 한 칸 잘못 읽는 함정(T-표기)만 있다.
    핵심문제 구역·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "sin 50°·cos 49°·tan 51° 를 표에서 각각 읽기 → 더하고 빼기"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$0.1872$"
  answer_source: "답지"
  figure: "crop:fig-26-c5.png"
  latex: latex-bank/gn-m32/items/26-c5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 각과 연산 부호를 표 안의 다른 칸으로 교체. 제약: tan 값이 지나치게 커지는 각을 빼기 자리에 두면 결과가 음수가 되므로 50° 부근에서 고른다."
    creative: "(1) 값 하나를 미지수로 두고 결과를 주면 역조회가 되어 ★3 (2) 세 값의 대소를 묻는 형태로 바꾸면 27-03 (3) 자릿수만 늘리는 변형은 질 저하라 피한다."
```

```yaml
- id: GN-M32-26-h6
  page: 26
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제 익히기"
  summary: |
    빗변 AB=10, ∠B=25° 인 직각삼각형 ABC 에서 삼각비의 표를 이용해 x+y(=AC+BC)의 값 구하기.
  category: "sin·cos 로 두 변을 빗변과 각으로 표현 → 표에서 값 조회 → 10 배 후 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각비의 표를 이용하여 변의 길이 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x=10 sin 25°, y=10 cos 25° 로 옮긴 뒤 표 값을 곱하는 표준 절차이고 조회가 두 번, 곱셈이 두 번이라 Mₖ 2.
    어느 변이 sin 쪽인지 정하는 지점(T-표기)만 조심하면 되고 방향 전환이나 조건 해석은 없다.
    핵심문제 구역·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "x=10 sin 25°, y=10 cos 25° → 표에서 두 값 조회 → 10 배 한 뒤 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$13.289$"
  answer_source: "본문 답"
  figure: "crop:fig-26-h6-2.png"
  latex: latex-bank/gn-m32/items/26-h6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "빗변 10 과 각 25° 를 표에 있는 다른 각·다른 정수 빗변으로 교체. 제약: 각은 크롭된 표에 실린 범위 안이어야 하고, 빗변을 10 으로 두면 표 값의 소수점만 옮기면 돼 계산 부담이 낮게 유지된다."
    creative: "(1) 합 대신 차를 묻는 27-05 형태 (2) 빗변 대신 한 변을 주면 tan 을 골라야 하는 26-c6 형태 (3) 변의 길이를 주고 각을 찾게 하면 역조회가 붙어 ★3."
```

```yaml
- id: GN-M32-26-c6
  page: 26
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제 익히기"
  summary: |
    밑변 BC=5, ∠B=42° 인 직각삼각형 ABC 에서 삼각비의 표를 이용해 AC 의 길이 구하기.
  category: "주어진 변이 빗변이 아님 → tan 선택 → 표 값 조회 후 곱"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각비의 표를 이용하여 변의 길이 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    밑변과 끼인각이 주어졌으니 sin·cos 가 아니라 tan 을 골라야 한다는 한 단계가 전부이고 계산은 곱셈 한 줄이다.
    [분류 이슈] 통찰 0·M_total 5 라 산식상 −1 후보지만 핵심문제 구역이라 ★2 로 두었다. 같은 표 이용 문항 26-h6(M_total 6)보다 가벼운데 라벨은 같다.
    핵심문제 구역·통찰 없음 → ★2 유지.
  tier: star_2
  mechanism_primary: "주어진 변이 빗변이 아님 확인 → AC=5 tan 42° → 표에서 tan 42° 조회 후 곱"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$4.502$"
  answer_source: "답지"
  figure: "crop:fig-26-c6-2.png"
  latex: latex-bank/gn-m32/items/26-c6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑변 5 와 각 42° 를 교체. 제약: 각이 45° 를 넘으면 AC 가 밑변보다 길어지므로 그림 비율과 어긋나지 않는 범위에서 고르고, 각은 표에 실린 값이어야 한다."
    creative: "(1) 빗변을 묻게 하면 cos 를 쓰는 단계가 추가(★2) (2) 두 변의 합·차를 묻는 26-h6·27-05 형태 (3) 넓이를 묻게 하면 변 두 개를 모두 구해야 해 ★3."
```

### 이런 문제가 시험에 나온다

```yaml
- id: GN-M32-27-01
  page: 27
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    반지름 1 인 사분원에서 tan x 와 cos y 의 값을 나타내는 선분을 차례대로 나열한 것 고르기.
  category: "tan 은 접선 쪽 삼각형 → cos y 는 여각 쪽 삼각형 → 두 선분의 짝 고르기"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 삼각비를 사분원 위 선분으로 옮기되 tan 은 접선 삼각형, y 는 여각 쪽 삼각형이라 서로 다른 삼각형에서 읽어야 함"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "사분원을 이용하여 삼각비의 값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    선택지가 두 선분의 순서쌍이라 둘 다 맞아야 하고, tan x 와 cos y 는 서로 다른 삼각형에서 나온다.
    22-01 과 골조는 같지만 빈칸 안내가 없어 학생이 대응을 스스로 세워야 한다.
    이런 문제가 시험에 나온다 구역 출발 ★2~3, 통찰 1(RT d1)·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "tan x=CD/OD (OD=1) → y=∠OAB 로 보고 cos y=AB/OA (OA=1) → 두 선분의 짝"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지"
  figure: "crop:fig-27-01.png"
  latex: latex-bank/gn-m32/items/27-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "묻는 삼각비 쌍을 sin x·tan x·sin y 등으로 교체. 제약: 반지름 1 고정, 같은 선분이 여러 선택지에 반복 등장하게 배치해 소거만으로 풀리지 않게 한다."
    creative: "(1) 세 개를 차례로 묻기(★2~3) (2) 옳지 않은 것 찾기로 바꾸면 24-h1 (3) 선분 길이를 소수로 주고 삼각비 값을 묻는 24-c1 형태."
```

```yaml
- id: GN-M32-27-02
  page: 27
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    sin 30°+sin 60°=sin 90° 등 특수각·0°·90° 가 섞인 다섯 식 중 옳은 것 두 개 고르기.
  category: "특수각·0°·90° 값 대입 → 선택지 전수 계산 → 참인 둘 선별"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "0°, 90°의 삼각비의 값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ① 은 삼각비가 각에 대해 덧셈적이지 않다는 대표 오개념 자리이고, ⑤ 는 1×1×1=1 이라 √2 가 아니다.
    다섯 개 전수 계산이 부담의 전부이며 방향 전환이나 조건 해석은 없다(Mₛ·Mₖ 2).
    이런 문제가 시험에 나온다 구역 출발 ★2~3, 통찰 없음 → 하단 선택 ★2.
  tier: star_2
  mechanism_primary: "각 선택지에 특수각·0°·90° 값 대입 → 좌변·우변 비교 → 참인 둘 선택"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③, ④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m32/items/27-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "선택지의 각 조합을 교체. 제약: 참이 정확히 두 개가 되게 하고, 오답에는 sin(A+B)=sin A+sin B 류 대표 오개념을 하나 남긴다."
    creative: "(1) 정답 개수를 숨기면 판정 부담이 늘어 ★3 (2) 옳지 않은 것 하나 고르기로 바꾸면 24-h2 (3) 식이 성립하는 각을 찾게 하면 역방향 ★3."
```

```yaml
- id: GN-M32-27-03
  page: 27
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    sin 0°, cos 0°, sin 80°, cos 80°, tan 80° 을 큰 것부터 나열할 때 세 번째에 해당하는 것 고르기.
  category: "0 과 1 을 기준으로 다섯 값을 구간에 배치 → 정렬 → 세 번째"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "종류가 다른 다섯 삼각비의 대소를 값 계산이 아니라 0 과 1 을 기준선으로 한 구간 배치 문제로 바꿈(tan 80°>1=cos 0°>sin 80°>cos 80°>sin 0°=0)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각비의 값의 대소 관계"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    다섯 값을 하나씩 계산할 수 없으니 0 과 1 을 기준선으로 두고 각 값이 어느 구간에 들어가는지로 정렬해야 한다.
    80° 가 90° 에 가까워 sin 80° 가 1 에 가깝지만 cos 0°=1 보다는 작다는 경계 판단(T-경계)이 실수 지점이다.
    이런 문제가 시험에 나온다 구역 출발 ★2~3, 통찰 1(EQV d1)·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "sin 0°=0·cos 0°=1 확정 → 80°>45° 이므로 tan 80°>1, sin 80° 는 1 에 근접·cos 80° 는 0 에 근접 → 정렬 후 세 번째"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m32/items/27-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각을 80° 대신 70°·85° 로 바꾸거나 묻는 순위를 둘째·넷째로 교체. 제약: 각이 45° 보다 커야 tan>1 이 유지되고, sin 과 cos 0°=1 의 경계 관계가 흔들리지 않아야 한다."
    creative: "(1) 전부 나열하게 하면 부담만 늘고 ★2 유지 (2) 45° 보다 작은 각을 섞으면 tan<1 이 되어 구간이 뒤섞이며 ★3 (3) 대소 결과를 √ 식 정리에 쓰게 하면 27-04 골조."
```

```yaml
- id: GN-M32-27-04
  page: 27
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    45°<A<90° 일 때 √((1−tan A)²)−√((tan A−1)²) 을 간단히 하기.
  category: "√(X²)=|X| → tan A>1 로 두 절댓값 확정 → 같은 값의 차라 0"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "45°<A<90° 를 tan A>1 로 옮기면 부호가 반대인 두 괄호가 같은 절댓값(tan A−1)으로 정리된다는 것을 확인해야 함"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각비의 값의 대소 관계를 이용한 식의 계산"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    45° 초과에서 tan A>1 이라는 한 줄이 두 절댓값을 동시에 결정하고, 부호가 반대인 두 괄호가 같은 값으로 정리돼 차가 0 이 된다.
    한쪽 부호만 바꿔 −2(tan A−1) 로 답하는 오답이 가장 흔해 부호 판정이 실질 변별이다(T-범위·T-부호).
    이런 문제가 시험에 나온다 구역 출발 ★2~3 에서 M_total 7·통찰 1 로 상단 선택 → ★3. [분류 이슈] 골조가 같은 25-h4·25-c4 는 핵심문제 구역이라 ★2 로 둬 구역만으로 한 단 차이가 난다.
  tier: star_3
  mechanism_primary: "√(X²)=|X| → 45°<A<90° 이면 tan A>1 → |1−tan A|=|tan A−1|=tan A−1 → 차는 0"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$0$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m32/items/27-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "범위를 0°<A<45° 로 바꿔도 두 절댓값이 같아 답은 0 으로 유지된다. 제약: 45° 를 범위 안에 포함시키면 tan A=1 에서의 경계 논의가 따로 필요하다."
    creative: "(1) 차 대신 합으로 바꾸면 2(tan A−1) 가 되어 부호 판정이 진짜 변별이 됨(★3) (2) tan 대신 sin−cos 로 바꾸면 25-h4 (3) 범위를 주지 않고 A 에 따라 경우를 나누게 하면 I-MI 가 붙어 ★4."
```

```yaml
- id: GN-M32-27-05
  page: 27
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    빗변 AB=10, ∠B=35° 인 직각삼각형 ABC 에서 삼각비의 표를 이용해 y−x(=BC−AC)의 값 구하기.
  category: "sin·cos 로 두 변 표현 → 표에서 값 조회 → 10 배 후 차"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각비의 표를 이용하여 변의 길이 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x=10 sin 35°, y=10 cos 35° 로 옮긴 뒤 차를 구하는 26-h6 의 뺄셈판이다.
    35°<45° 라 cos 쪽이 크다는 것을 놓치면 부호가 뒤집힌다(T-부호). 방향 전환은 없다.
    이런 문제가 시험에 나온다 구역 출발 ★2~3, 통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "x=10 sin 35°, y=10 cos 35° → 표에서 두 값 조회 → 10 배 한 뒤 차"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$2.456$"
  answer_source: "답지"
  figure: "crop:fig-27-05-2.png"
  latex: latex-bank/gn-m32/items/27-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 35° 와 빗변 10 을 교체. 제약: 각이 45° 를 넘으면 y−x 가 음수가 되므로 답을 양수로 두려면 45° 미만에서 고르고, 각은 표에 실린 값이어야 한다."
    creative: "(1) 합을 묻는 26-h6 형태 (2) 한 변을 주고 빗변을 묻게 하면 나눗셈이 들어가 ★2~3 (3) 두 변을 구한 뒤 넓이·둘레까지 묻게 하면 ★3."
```

## 표본 판정 요약 (24문)

- ★ 분포: ★1 7 · ★2 16 · ★3 1 · ★4 0 · ★5 0
- 통찰형 10 · 절차형 14 · premium 0
- 통찰 유형 분포: I-EQV 6(기준값 대소 비교 3 · √(X²)=|X| 부호 판정 3) · I-RT 3(사분원 선분 대응) · I-BW 1(삼각비의 표 역조회) — 모두 depth 1, depth 2 이상 없음
- 구역별: 개념원리 확인하기 7(전부 ★1) · 핵심문제 익히기 12(전부 ★2) · 이런 문제가 시험에 나온다 5(★2 4 · ★3 1)
- type_hint 상위: 「사분원을 이용하여 삼각비의 값 구하기」 5 · 「삼각비의 값의 대소 관계」 5 · 「0°, 90°의 삼각비의 값」 4 · 「삼각비의 값의 대소 관계를 이용한 식의 계산」 3 · 「삼각비의 표를 이용하여 삼각비의 값 구하기」 3 · 「삼각비의 표를 이용하여 변의 길이 구하기」 3 · 「0°·90°와 특수각의 삼각비의 값 표」 1
- 그림: 12문(`crop:fig-22-01.png` · `fig-22-02.png` · `fig-22-03.png` · `fig-23-07.png` · `fig-24-h1.png` · `fig-24-c1.png` · `fig-26-h5.png` · `fig-26-c5.png` · `fig-26-h6-2.png` · `fig-26-c6-2.png` · `fig-27-01.png` · `fig-27-05-2.png`). 이 중 26-h6·26-c6·27-05 는 삼각형 크롭과 삼각비의 표 크롭 두 장이며 `figure` 에는 삼각형 쪽을 적었다(표 크롭은 전사본 `figure_extra`).
- 이 범위에는 ★4~5 를 만들 골조(SC·VF·SYM·XU)가 없다. 단원이 정의·표 조회·대소 판정 중심이라 변별은 선택지 전수 판정 부담과 depth 1 통찰에서만 나온다.

## 분류 이슈 목록

판정이 애매하거나 벤더 구역 신호와 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-M32-22-01 | 24-h1·27-01 과 선분 대응 골조가 같으나 분수 꼴·분모가 인쇄돼 있어 통찰 0·★1. 안내 유무만으로 ★ 가 갈림 | ★1 / ★2 |
| GN-M32-23-05 | ⑶⑷ 가 25-h3 과 같은 「종류가 다른 삼각비의 대소」 골조인데 진술이 교과서 개념 그대로라 통찰 0·★1 로 둠 | ★1 / ★2 |
| GN-M32-26-c6 | 통찰 0·M_total 5 로 산식상 −1 후보지만 핵심문제 구역이라 ★2 유지. 26-h6(M_total 6)과 라벨이 같음 | ★1 / ★2 |
| GN-M32-27-04 | 25-h4·25-c4 와 골조 동일(√(X²) 절댓값 부호 판정)인데 구역 차이와 「두 근호가 같은 값」 함정만으로 ★3 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: ① 「사분원을 이용하여 삼각비의 값 구하기」 — 분모·분수 꼴 안내가 있는 확인형(22-01·22-02)과 학생이 대응을 스스로 세우는 선택형(24-h1·24-c1·27-01)은 체감이 달라 base ★ 1/2 로 분리하는 편이 낫다. ② 「삼각비의 표」 — 정조회(23-07·26-c5)와 역조회(26-h5 ⑵)는 읽는 방향이 반대라 별도 유형이고, 표 값을 직각삼각형의 변 길이 계산에 쓰는 것(26-h6·26-c6·27-05)은 또 다른 유형이다. ③ 「대소 관계」 — 같은 삼각비끼리 증감만 보는 것(23-06)과 종류가 다른 삼각비를 0·1·45° 기준으로 비교하는 것(25-h3·25-c3·27-03)을 나눌 것. 전자는 base ★1, 후자는 base ★2 가 자연스럽다.
- **통합해도 될 유형**: 「0°, 90°의 삼각비의 값」(23-04·24-h2·24-c2·27-02)과 22-03 의 표 완성은 값 대입이라는 골조가 같아 한 유형으로 묶고 계산형·선택형·표 완성형을 변형 슬롯으로 둔다. 「대소 관계를 이용한 √ 식 정리」(25-h4·25-c4·27-04)도 √(X²)=|X| → 각 범위로 부호 결정이라는 한 골조라 한 유형으로 두고 sin−cos·cos±1·tan−1 을 변형 슬롯으로 둔다 — 이 범위에서 ★3 이 나온 유일한 자리이므로 카탈로그에서는 base ★2 에 범위 미제시(경우 분기) 변형을 ★3~4 로 얹는 구조가 맞다.
