---
name: mechanism-데이터-GN-CM2-26
description: 개념원리 공통수학2 26 함수(1/1 · 209-482~216-505) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학2 (22개정) · 전사본 latex-bank/gn-cm2
  section: 26 함수
  unit_code: CM2-26
  part: "1/1"
  extract_range: "209~216쪽 · 209-482~216-505"
  total_problems: 29
  unit_total: 29
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm2/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm2/items/<id>.tex
  image_source: latex-bank/gn-cm2/figures/ (crops.json)
---

# 개념원리 공통수학2 · 26 함수 (1/1) 정독 데이터 (v1.0)

이 파일은 26단원 29문 전수(209~216쪽 · 통번호 209-482~216-505)를 다룬다. 구역은 「개념원리 익히기」 3문 · 「필수·발전 예제」 14문(필수 5 · 확인체크 9) · 「연습문제 STEP 1」 5문 · 「STEP 2」 4문 · 「실력 UP」 3문이다. 단원은 함수 단원의 **입구**라서 도구가 네 갈래로만 반복된다. ⑴ **함수 판정** — 정의역의 모든 원소에 대응이 하나씩 있고 그 값이 공역 안에 들어오는가(209-482 · 210-e1 · 210-485 · 210-486 · 215-494 · 216-499). ⑵ **치역** — 유한 정의역에 전부 대입해 값을 모으고 **중복을 제거**한다(209-483 · 211-e3 · 211-488 · 211-489 · 215-496). ⑶ **서로 같은 함수** — 식이 달라도 정의역 각 원소의 함숫값이 같으면 같은 함수(209-484 · 212-e4 · 212-490 · 212-491 · 212-492 · 215-497 · 216-502). ⑷ **그래프 판정** — y축에 평행한 모든 직선과 꼭 한 점에서 만나는가(213-e5 · 213-493 · 215-498). 그림 문항은 4문(209-482 · 213-e5 · 213-493 · 215-498)이고 모두 보기 그림 자체가 판정 대상이라 골조는 발문만으로 결정된다.

벤더 난이도 신호와 이 파일의 출발점 규약: 「개념원리 익히기」 통번호 ★1 · 「필수」 예제 ★2 · STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4. **tag 「확인체크」 문항은 구역 신호를 우선**해 「필수·발전 예제」 구역 안의 확인체크는 바로 위 예제와 같은 출발점(★2)으로 두었다(예제의 유제 배치이므로 익히기 통번호의 ★1과 구분한다). 출발점에서 M_total·통찰로 ±1 조정했다. 이 단원에서 반복되는 세 규약을 29문 전체에 일관 적용했다. ⒜ **유한 정의역 전수 대입**과 **치역의 중복 제거**는 표준 절차로 보아 통찰로 세지 않고 Mₖ·Mₜ 로만 반영한다. ⒝ **f=g 를 정의역 원소별 등식 연립으로 옮기는 것**도 정의의 직접 적용이라 절차형이며, 정의역 자체가 미지(212-492)일 때만 I-EQV 를 센다. ⒞ **조각으로 정의된 함수에서 구한 해를 해당 구간 조건에 재대입해 일부를 버리는 단계**는 I-VF 로 센다(단순 유리·무리 판별이나 부호 판정은 Mₜ 로만 반영).

이 파일의 주 용도는 숫자 변형·창의 변형의 **원본**이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(통찰 유형·depth) · `variation_notes`(바꿔도 되는 수와 제약 / 골조를 유지한 설정 변형과 ★ 변동 지점)를 채웠다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-CM2-209-482
  page: 209
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    네 개의 대응 그림 ⑴~⑷ 중 집합 X 에서 집합 Y 로의 함수인 것을 모두 찾고, 함수인 것은 정의역·공역·치역을 구하기.
  category: "함수의 정의(정의역 원소마다 대응이 꼭 하나) → 함수 판정 → 정의역·공역·치역 읽기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "대응이 함수가 될 조건 판정과 정의역·공역·치역 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    대응 그림마다 정의역의 모든 원소에서 화살표가 하나씩 나가는지만 보면 판정이 끝난다.
    함수인 것을 고른 뒤 치역은 실제로 대응된 값만 모으므로 공역과 다를 수 있다는 점(⑷의 치역이 원소 2개)이 유일한 함정이다.
    익히기 구역 ★1 출발 · 통찰 0 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "대응 그림마다 정의역 원소의 화살표 개수 확인 → 함수 판정 → 치역은 실제 대응값만 모으기"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '함수: ⑶, ⑷ \quad ⑶ 정의역: $\{1,\,2,\,3\}$, 공역: $\{a,\,b,\,c\}$, 치역: $\{a,\,b,\,c\}$ \quad ⑷ 정의역: $\{1,\,2,\,3,\,4\}$, 공역: $\{a,\,b,\,c\}$, 치역: $\{a,\,b\}$'
  answer_source: "답지"
  figure: "crop:fig-209-482.png"
  latex: latex-bank/gn-cm2/items/209-482.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "X·Y 의 원소 개수(3~4개)와 화살표 배치를 바꿀 수 있다. 제약 — 함수가 아닌 예에는 '한 원소에서 화살표 2개'와 '화살표가 없는 원소' 두 가지가 모두 들어가야 하고, 함수인 예 중 적어도 하나는 치역이 공역의 진부분집합이 되게 둔다(치역=공역만 주면 함정이 사라진다)."
    creative: "(1) 대응을 그림 대신 표나 순서쌍 집합으로 제시(★1 유지) (2) 식으로 주고 공역 포함까지 확인하게 하면 210-e1 골조(★2) (3) 함수가 되도록 화살표 하나를 고쳐 그리게 하면 역방향 ★2."
```

```yaml
- id: GN-CM2-209-483
  page: 209
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    X={-1, 0, 1} 에서 Y={-2, -1, 0, 1, 2, 3} 으로의 함수 f 가 ⑴ f(x)=-x+1 ⑵ f(x)=x^3+x+1 ⑶ f(x)=|x|-1 일 때 각각의 치역.
  category: "정의역 세 원소 전수 대입 → 함숫값 모으기 → 중복 제거한 집합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "유한 정의역에서 함숫값을 모아 치역 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    세 식 각각에 -1, 0, 1 을 넣어 값 세 개를 모으는 것이 전부다.
    ⑶에서 |−1|−1 과 |1|−1 이 같은 값이라 치역의 원소가 둘로 줄어드는 중복 제거가 유일한 확인 지점이다.
    익히기 ★1 출발 · 통찰 0 · M_total 5 → ★1 유지.
  tier: star_1
  mechanism_primary: "x=-1, 0, 1 대입 → 값 수집 → 중복 제거해 집합으로 쓰기"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\{0,\,1,\,2\}$ ⑵ $\{-1,\,1,\,3\}$ ⑶ $\{-1,\,0\}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/209-483.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정의역 원소(-2~2 범위의 정수 3~4개)와 식의 계수를 바꿀 수 있다. 제약 — 모든 함숫값이 공역 Y 안에 들어와야 함수가 되므로 Y 를 함께 넓히고, 세 소문항 중 적어도 하나는 |x| 나 짝수 차수를 써서 함숫값이 겹치도록(치역 원소 수 < 정의역 원소 수) 둔다."
    creative: "(1) 치역이 주어지고 정의역을 찾게 하면 역방향 ★2 (2) 치역의 원소의 합·곱을 묻게 하면 211-488 골조(★2) (3) 세 식 중 X 에서 Y 로의 함수가 아닌 것을 고르게 하면 210-e1 골조(★2)."
```

```yaml
- id: GN-CM2-209-484
  page: 209
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    정의역이 X={-1, 1} 인 두 함수 f, g 에 대하여 f=g 인 것을 보기 ㄱ(x+1, x-1) · ㄴ(|x|, x) · ㄷ(x^3, 1/x) 에서 모두 고르기.
  category: "서로 같은 함수의 정의 → 정의역 원소 -1, 1 에서 함숫값 비교"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "서로 같은 함수의 판정(정의역 원소별 함숫값 비교)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    식의 모양이 아니라 정의역 두 점에서의 값만 비교하면 된다. ㄷ은 x^3 과 1/x 가 x=-1, 1 에서 모두 같은 값을 준다.
    '식이 다르면 다른 함수'라는 오개념(T-범위 — 정의역이 두 점뿐이라는 제한을 놓침)이 유일한 함정이다.
    익히기 ★1 출발 · 통찰 0 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "정의역 {-1, 1} 의 각 원소에서 두 함숫값 비교 → 모두 같은 보기만 선택"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "ㄷ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/209-484.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정의역을 {-1, 1} 대신 {0, 1} · {1, -1, 0} 등으로 바꿀 수 있다. 제약 — 1/x 류를 쓰면 0을 정의역에 넣을 수 없고, 정답 보기는 '식은 다르지만 그 정의역에서만 값이 일치'해야 하므로 정의역을 넓히면 답이 사라진다(예: X={-1, 1, 2} 면 ㄷ이 탈락)."
    creative: "(1) 정의역을 넓혀 같은 함수가 없게 만들고 '모두 고르시오(없으면 없다)'로 묻기(★2) (2) f=g 가 되도록 정의역 X 를 구하게 하면 212-492 골조(★3) (3) 미지수를 넣어 f=g 인 상수를 구하게 하면 212-e4 골조(★2)."
```

### 필수·발전 예제

```yaml
- id: GN-CM2-210-e1
  page: 210
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    X={-1, 0, 1}, Y={0, 1, 2} 에 대하여 X 에서 Y 로의 함수인 대응을 보기 ㄱ(-x) · ㄴ(|x|) · ㄷ(x^2+1) · ㄹ(2x+1) · ㅁ(x^3+1) 에서 모두 고르기.
  category: "함수 조건 두 가지(모든 원소에 대응 + 대응값이 공역 안) → 보기 5개 전수 판정"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "대응이 X 에서 Y 로의 함수가 될 조건(공역 포함 확인)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    식으로 주어진 대응은 '하나씩 대응' 조건은 저절로 만족하므로 **함숫값이 공역 Y 를 벗어나는가**만 보면 된다.
    ㄱ은 x=1 에서 -1, ㄹ은 x=-1 에서 -1 이 나와 Y 밖이다. 보기 5개 × 원소 3개의 전수 대입이 노동량 전부다.
    필수 예제 ★2 출발 · 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "보기마다 x=-1, 0, 1 대입 → 세 값이 모두 Y 의 원소인지 확인 → 벗어나면 탈락"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "ㄴ, ㄷ, ㅁ"
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/210-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "X 를 {-2, 0, 2}, Y 를 {0, 1, 4} 처럼 바꿀 수 있고 보기 식의 계수·차수도 자유롭다. 제약 — 탈락 보기는 반드시 **음수나 Y 최댓값 초과**처럼 눈에 보이는 이탈이어야 하고(계산 실수와 구별), 정답 보기 수는 2~3개로 두어 전수 확인이 필요하게 한다."
    creative: "(1) 대응을 그림으로 바꾸면 209-482 골조(★1) (2) 공역 Y 를 미지수로 두고 함수가 되도록 하는 최소 Y 를 묻기(★3) (3) 식에 상수 a 를 넣어 함수가 되게 하는 a 를 구하면 216-499 골조(★3)."
```

```yaml
- id: GN-CM2-210-485
  page: 210
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    X={0, 1, 2}, Y={0, 1, 2, 3} 에 대하여 X 에서 Y 로의 함수인 것을 보기 ㄱ(3-x) · ㄴ(|x-1|) · ㄷ(x^2) 에서 모두 고르기.
  category: "보기 3개에 정의역 전수 대입 → 함숫값이 공역 안인지 확인"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "대응이 X 에서 Y 로의 함수가 될 조건(공역 포함 확인)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    210-e1 과 같은 골조이고 보기만 셋으로 줄었다. ㄷ은 x=2 에서 4 가 나와 Y 를 벗어난다.
    통찰 0 · M_total 5 라 −1 후보이지만 바로 위 필수 예제의 유제 배치이므로 구역 신호를 우선해 ★2 를 유지했다.
  tier: star_2
  mechanism_primary: "보기마다 x=0, 1, 2 대입 → 세 값이 모두 Y 안인지 확인"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "ㄱ, ㄴ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/210-485.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "X={0, 1, 2} 를 {1, 2, 3} 으로, Y 의 상한을 3에서 다른 값으로 바꿀 수 있다. 제약 — 이탈은 **공역 상한 초과**(x^2 류) 또는 **음수**(일차식) 중 하나여야 하고, Y 의 상한을 올리면 탈락 보기가 사라지므로 상한과 최대 함숫값을 함께 조정한다."
    creative: "(1) 보기를 5개로 늘려 필수 예제 난도로(★2) (2) '함수가 아닌 것'을 고르게 뒤집기(★2 유지 · 부정 발문 함정 추가) (3) 공역을 Y={y | y는 자연수} 처럼 무한집합으로 바꾸면 0 포함 여부만 남아 ★1."
```

```yaml
- id: GN-CM2-210-486
  page: 210
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    X={-1, 0, 1} 에 대하여 X 에서 X 로의 함수가 '아닌' 대응을 5지선다에서 고르기(x, |x|+1, x^2-|x|+1, -x^2+1, x^3).
  category: "정의역=공역인 대응 → 전수 대입 → 공역을 벗어나는 보기 탐색"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "대응이 X 에서 X 로의 함수가 될 조건(공역 포함 확인)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    공역이 정의역과 같은 {-1, 0, 1} 이므로 함숫값이 이 세 값 안에 머무는지만 본다. ②는 x=±1 에서 2 가 나와 벗어난다.
    함정은 두 가지다 — '아닌 것'을 고르는 부정 발문(T-표기)과 |x| · x^2 이 섞여 x=±1 의 값이 같아지는 대칭(T-부호).
    확인체크 ★2 출발 · 통찰 0 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "보기마다 x=-1, 0, 1 대입 → 값이 {-1, 0, 1} 을 벗어나는 보기 찾기"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/210-486.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "X 를 {-2, 0, 2} · {0, 1} 등으로 바꿀 수 있다. 제약 — X 에서 X 로의 대응이므로 **모든 보기의 상수항이 X 의 폭 안**에 있어야 오답이 하나만 남고, |x| 와 x^2 을 섞을 때는 두 식이 X 위에서 같은 함수가 되지 않도록 X 에 ±1 이 아닌 원소를 넣는다."
    creative: "(1) 공역을 X 보다 넓게 주어 모두 함수가 되게 하고 치역을 묻기(★2) (2) 보기 중 서로 같은 함수 쌍을 고르게 하면 212-490 골조(★2) (3) 상수 a 를 넣어 X 에서 X 로의 함수가 되게 하는 a 를 구하면 ★3."
```

```yaml
- id: GN-CM2-211-e2
  page: 211
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    실수 전체에서 f(x)=x-2 (x는 유리수), f(x)=-x (x는 무리수) 로 정의된 함수에서 f(3)-f(√3-1) 의 값.
  category: "각 입력이 유리수인지 무리수인지 판별 → 해당 식 선택 → 대입·계산"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "유리수·무리수로 나누어 정의된 함수의 함숫값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    3은 유리수라 x-2 를, √3-1 은 무리수라 -x 를 쓴다. 두 값을 빼면 √3 만 남는다.
    함정은 무리수 쪽 식이 -x 여서 **부호가 두 번 뒤집히는 것**(T-부호)과 √3-1 을 무리수로 정확히 분류하는 것(T-범위)이다.
    필수 예제 ★2 출발 · 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "3은 유리수 → x-2, √3-1 은 무리수 → -x 선택 → 두 값의 차"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\sqrt{3}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/211-e2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 식(x-2, -x)의 계수·상수항과 대입값(정수 / a+b√c 꼴)을 바꿀 수 있다. 제약 — 무리수 쪽 입력은 **유리수로 정리되지 않는 꼴**이어야 하고(√4-1 같은 함정 입력은 유리수 쪽으로 분류됨에 주의), 답이 무리수 하나로 깔끔히 남도록 두 식의 무리수 항 계수를 맞춘다."
    creative: "(1) 유리수 입력에 √9-1 처럼 위장한 값을 넣어 분류 함정을 강화(★3) (2) 계수를 미지수로 두고 f(3)-f(√3-1)=k 를 만족시키는 상수를 구하기(★3) (3) 구간 분기(x<0 / x≥0)로 바꾸면 211-487 골조(★2)."
```

```yaml
- id: GN-CM2-211-e3
  page: 211
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    X={1, 2, 3, 4, 5, 6} 에서 f(x)=2x-1 (x는 홀수), f(x)=-x+2 (x는 짝수) 로 정의된 함수 f 의 치역.
  category: "정의역 원소를 홀·짝으로 나눠 해당 식에 대입 → 여섯 값을 모아 집합으로"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "경우로 나누어 정의된 함수의 치역"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    홀수 1, 3, 5 는 2x-1 로 1, 5, 9 를, 짝수 2, 4, 6 은 -x+2 로 0, -2, -4 를 준다. 여섯 값을 모으면 끝난다.
    함정은 치역을 **작은 값부터 정렬한 집합**으로 쓰는 것과 홀·짝 분기를 뒤섞지 않는 것(T-범위)뿐이다.
    필수 예제 ★2 출발 · 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "1, 3, 5 → 2x-1 / 2, 4, 6 → -x+2 대입 → 값 여섯 개를 집합으로 정리"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\{-4,\,-2,\,0,\,1,\,5,\,9\}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/211-e3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정의역 범위(1~6 → 1~8)와 두 식의 계수를 바꿀 수 있다. 제약 — 두 식의 값이 겹치면 치역 원소 수가 줄어드는데, **중복 제거를 학습 목표로 삼을 때만** 일부러 겹치게 설계하고 그렇지 않으면 홀수 쪽은 증가·짝수 쪽은 감소처럼 값 구간을 분리한다."
    creative: "(1) 치역의 원소의 합을 묻기(★2 · 211-488 골조) (2) 분기 기준을 '3의 배수 / 아닌 수'로 바꾸기(★2) (3) 치역이 주어지고 정의역 X 를 구하게 하면 역방향 ★3."
```

```yaml
- id: GN-CM2-211-487
  page: 211
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    실수 전체에서 f(x)=3x+4 (x<0), f(x)=-3x+2 (x≥0) 로 정의된 함수에서 f(1-√2)+f(3-2√2) 의 값.
  category: "무리수 입력의 부호 판정 → 해당 구간 식 선택 → 대입·정리"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구간으로 나누어 정의된 함수의 함숫값(무리수 부호 판정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    핵심은 대입할 두 무리수의 **부호를 먼저 가리는 것**이다. 1-√2 는 음수, 3-2√2 는 (√2-1)^2 이라 양수다.
    부호가 갈리면 각각 다른 식에 들어가고, 두 결과의 무리수 항이 더해져 정리된다.
    부호 판정(T-부호)과 구간 경계 x≥0(T-경계) 두 함정. 확인체크 ★2 출발 · 통찰 0 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "1-√2<0 → 3x+4 / 3-2√2>0 → -3x+2 선택 → 두 값을 더해 무리수 항 정리"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$3\sqrt{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/211-487.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "무리수 입력을 a-b√2 · a-b√3 꼴에서 고르고 두 식의 기울기를 바꿀 수 있다. 제약 — 입력 중 **하나는 음수, 하나는 양수**여야 분기 확인이 의미를 갖고, 3-2√2=(√2-1)^2 처럼 부호가 한눈에 안 보이는 값을 최소 하나 넣는다. 두 식의 무리수 계수를 맞추면 답이 하나의 근호 항으로 정리된다."
    creative: "(1) 구간 분기를 유리·무리 분기로 바꾸면 211-e2 골조(★2) (2) f(a)=k 를 만족시키는 a 를 되묻고 구간 조건으로 일부를 버리게 하면 216-500 골조(★3 · I-VF) (3) 경계 x=0 의 값을 묻는 소문항을 추가하면 T-경계 강화(★2)."
```

```yaml
- id: GN-CM2-211-488
  page: 211
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    |x|≤2 인 정수 x 의 집합을 정의역으로 하는 함수 f(x)=|x+1| 의 치역의 모든 원소의 합.
  category: "정의역을 원소나열로 풀기 → 전수 대입 → 중복 제거 후 합"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "유한 정의역에서 치역 구하고 원소의 합 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    조건제시형 정의역을 {-2, -1, 0, 1, 2} 로 먼저 푸는 것이 첫 단계다. 값은 1, 0, 1, 2, 3 이 나온다.
    함정이 바로 여기다 — 1 이 두 번 나오므로 **치역은 원소 4개**이고, 다섯 값을 그냥 더하면 틀린다(T-표기).
    확인체크 ★2 출발 · 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "정의역 {-2, -1, 0, 1, 2} → |x+1| 전수 대입 → 중복 제거한 치역의 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$6$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/211-488.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "|x|≤2 의 범위와 |x+1| 의 평행이동 상수를 바꿀 수 있다. 제약 — **절댓값 꼭짓점이 정의역 안**에 있어야 중복이 생겨 이 문제의 핵심 함정이 살아난다(꼭짓점이 밖이면 단조라 중복 없음). 정의역을 정수로 제한하는 문구를 빼면 치역이 구간이 되어 다른 유형이 된다."
    creative: "(1) 치역의 원소의 곱이나 최댓값·최솟값을 묻기(★2) (2) 치역의 원소 개수가 4가 되도록 하는 평행이동 상수를 구하면 역방향 ★3 (3) 정의역을 실수 구간으로 바꾸면 절댓값 함수의 치역(★3)."
```

```yaml
- id: GN-CM2-211-489
  page: 211
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    X={0, 1, 2, 3, 4, 5} 에서 정수 집합으로의 함수 f(x)=(x^2 을 5로 나눈 나머지) 의 치역.
  category: "정의역 여섯 원소의 제곱을 5로 나눈 나머지 계산 → 중복 제거"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "나머지로 정의된 함수의 치역"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    0~5 의 제곱 0, 1, 4, 9, 16, 25 를 5로 나눈 나머지는 0, 1, 4, 4, 1, 0 이다.
    여섯 값 중 서로 다른 것은 셋뿐이라 중복 제거가 답을 좌우한다(T-표기). 나머지가 **0 이상 4 이하**라는 범위 감각이 검산 역할을 한다.
    확인체크 ★2 출발 · 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "x=0~5 의 제곱을 5로 나눈 나머지 계산 → 중복 제거한 집합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\{0,\,1,\,4\}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/211-489.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "나누는 수(5 → 3, 4, 7)와 정의역 범위를 바꿀 수 있다. 제약 — 정의역이 나누는 수만큼의 연속 정수를 덮으면 **제곱 나머지가 대칭으로 반복**되어 치역 원소가 절반 정도로 줄고, 이 겹침이 문제의 핵심이므로 정의역을 나누는 수보다 짧게 잡지 않는다."
    creative: "(1) 치역의 원소의 합을 묻기(★2) (2) x^2 대신 x^3 으로 바꾸면 겹침 구조가 달라져 ★2~3 (3) 치역이 {0, 1} 이 되도록 정의역 X 를 정하게 하면 216-505 골조(★4)."
```

```yaml
- id: GN-CM2-212-e4
  page: 212
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    정의역이 X={-1, 1} 인 두 함수 f(x)=ax+b, g(x)=x^3+2a 가 f=g 일 때 상수 a, b 의 값.
  category: "f=g 정의 → 정의역 두 점에서 함숫값 일치 → a, b 연립"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "서로 같은 함수 조건에서 미정계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f(-1)=g(-1), f(1)=g(1) 두 식을 세우면 b 를 a 로 나타내는 식 둘이 나오고 빼면 a 가 정해진다.
    '같은 함수'를 **정의역 원소별 등식 연립**으로 옮기는 것은 정의의 직접 적용이라 통찰로 세지 않고 Mₐ(상수 2개)에 반영했다.
    필수 예제 ★2 출발 · 통찰 0 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "f(-1)=g(-1), f(1)=g(1) 두 등식 → a, b 연립 → 해"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$a=1$, $b=2$"
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/212-e4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정의역 {-1, 1} 과 두 식의 계수·차수를 바꿀 수 있다. 제약 — 정의역 원소 수와 미지수 개수가 같아야 해가 하나로 정해지고(원소 2개·미지수 2개), g 쪽에도 a 를 넣어 두 식이 **독립**이 되게 한다(같은 식이 두 번 나오면 부정)."
    creative: "(1) 정의역을 {0, 1} 로 바꾸면 212-491 골조(★2) (2) 정의역에 미지수를 넣으면 216-502 골조(★3 · I-VF) (3) 구한 함수의 치역까지 묻게 하면 215-497 골조(★2)."
```

```yaml
- id: GN-CM2-212-490
  page: 212
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    X={-1, 0, 1} 에서 f(x)=x 와 서로 같은 함수를 보기 ㄱ(x^3) · ㄴ(x^2) · ㄷ(√(x^2)) 에서 모두 고르기(세 함수의 정의역도 X).
  category: "정의역 세 점에서 함숫값 비교 → 모두 일치하는 보기 선택"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "서로 같은 함수의 판정(정의역 원소별 함숫값 비교)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    -1, 0, 1 에서 x^3 은 x 와 값이 모두 같고, x^2 과 √(x^2)=|x| 는 x=-1 에서 1 이 되어 갈린다.
    √(x^2) 을 x 로 착각하는 표기 함정(T-표기)이 핵심이다. 통찰 0 · M_total 5 라 −1 후보이지만 예제 유제 배치라 ★2 유지.
    [분류 이슈] 익히기 209-484 와 골조가 같은데 구역 신호 때문에 ★1/★2 로 갈린다 — 카탈로그 설계 때 통합 여부 결정.
  tier: star_2
  mechanism_primary: "x=-1, 0, 1 에서 x 와 각 보기의 값 비교 → 세 점 모두 일치하는 것만 선택"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "ㄱ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/212-490.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정의역을 {-1, 0, 1} 에서 {0, 1} 로 좁히면 ㄴ·ㄷ 도 정답이 되고, {-2, ..., 2} 로 넓히면 ㄱ 도 탈락한다. 제약 — **음수 원소가 최소 하나** 있어야 x^2 · |x| · x 가 갈리고, 홀수 차수 보기는 |원소|≤1 에서만 x 와 일치한다."
    creative: "(1) 정의역을 미지로 두고 f=g 가 되는 X 를 모두 구하게 하면 212-492 골조(★3) (2) √(x^2) 대신 (√x)^2 을 넣어 정의역 자체가 달라지는 함정 추가(★3) (3) 서로 같은 함수 쌍의 개수를 묻기(★2)."
```

```yaml
- id: GN-CM2-212-491
  page: 212
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    정의역이 X={0, 1} 인 두 함수 f(x)=2x^2+ax-3, g(x)=x+b 가 f=g 일 때 ab 의 값(a, b 는 상수).
  category: "x=0 에서 b 결정 → x=1 에서 a 결정 → 곱"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "서로 같은 함수 조건에서 미정계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x=0 을 넣으면 a 가 사라져 b 가 바로 나오고, 그 b 를 x=1 식에 넣으면 a 가 나온다(대입 순서가 계산을 줄인다).
    연립을 동시에 풀 필요가 없다는 점 외에는 212-e4 와 같은 골조다. 확인체크 ★2 출발 · 통찰 0 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "f(0)=g(0) → b / f(1)=g(1) → a → ab"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$3$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/212-491.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차항 계수·상수항과 정의역 {0, 1} 을 바꿀 수 있다. 제약 — 정의역에 **0 을 남겨 두면** 한 미지수가 먼저 떨어져 난도가 유지되고, 0 을 빼면 진짜 연립이 되어 Mₖ 가 오른다. 답을 ab · a+b 중 무엇으로 물을지에 따라 부호 함정의 세기가 달라진다."
    creative: "(1) 정의역을 {1, 3} 처럼 0 없이 주면 215-497 골조(★2) (2) a, b 가 자연수라는 조건을 추가해 후보 중 일부를 버리게 하면 ★3(I-VF) (3) f=g 인 정의역 X 를 모두 구하게 하면 212-492 골조(★3)."
```

```yaml
- id: GN-CM2-212-492
  page: 212
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    공집합이 아닌 집합 X 를 정의역으로 하는 두 함수 f(x)=x^3+3x, g(x)=6x^2-8x+6 에 대하여 f=g 를 만족시키는 X 를 모두 구하기.
  category: "f=g ⟺ X 의 모든 원소가 f(x)=g(x) 의 해 → 삼차방정식 해집합 → 공집합 아닌 부분집합 전부"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'두 함수가 같다'를 '정의역의 모든 원소가 방정식 f(x)=g(x) 의 해'로 옮겨, 미지의 정의역 X 를 해집합 {1, 2, 3} 의 부분집합 문제로 환원"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "f=g 를 만족시키는 정의역 X 구하기(해집합의 부분집합)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    앞의 문항들과 달리 정의역이 미지다. f=g 는 X 안에서만 요구되므로 X 는 x^3-6x^2+11x-6=0 의 해집합 {1, 2, 3} 의 부분집합이면 충분하다(I-EQV d2).
    남은 일은 부분집합 2^3 개에서 공집합을 빼는 것뿐이라 계산은 가볍다.
    확인체크 ★2 출발이지만 정의역을 미지로 두는 역발상 + 부분집합 전수 열거로 한 단 올려 ★3.
    [분류 이슈] 벤더 확인체크(★2)와 1단 차 — 유형 카탈로그에서는 '같은 함수'가 아니라 '조건을 만족시키는 정의역'으로 따로 세울 후보.
  tier: star_3
  mechanism_primary: "f(x)=g(x) → x^3-6x^2+11x-6=0 → 해집합 {1, 2, 3} → 공집합 아닌 부분집합 2^3-1 개"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\{1\}$, $\{2\}$, $\{3\}$, $\{1,\,2\}$, $\{1,\,3\}$, $\{2,\,3\}$, $\{1,\,2,\,3\}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/212-492.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 식을 바꿔 f(x)-g(x) 가 서로 다른 정수근 2~3개를 갖는 삼차식이 되게 한다. 제약 — **근이 모두 실수이고 서로 달라야** 부분집합 개수가 2^n-1 로 깔끔하고, 중근이 생기면 해집합 원소가 줄어 답의 개수가 바뀐다. 근의 개수 n 을 정하면 답은 자동으로 2^n-1."
    creative: "(1) 'X 의 개수'만 묻게 하면 계산이 한 줄로 줄어 ★2 (2) 원소가 최대인 X 를 묻기(★2) (3) 해집합에 무리수 근을 섞고 X ⊂ 정수 조건을 붙이면 사후 기각이 생겨 ★4(I-VF) (4) f=g 대신 f(x)>g(x) 로 바꾸면 부등식 단원과 결합(★4 · I-XU)."
```

```yaml
- id: GN-CM2-213-e5
  page: 213
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    보기로 주어진 그래프들 중에서 실수 전체의 집합에서 정의된 함수의 그래프인 것을 모두 고르기.
  category: "함수의 그래프 판정 → y축에 평행한 직선과의 교점이 모든 실수 x 에서 꼭 한 개"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수의 그래프 판정(y축에 평행한 직선과의 교점 검사)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    판정 도구는 하나다 — y축에 평행한 직선을 끌어 교점이 **꼭 한 개**인지 본다.
    함정은 두 갈래다. 교점이 둘 이상이면 함수가 아니고(T-표기), **교점이 없는 x 가 있으면** 정의역이 실수 전체가 아니라 탈락이다(T-범위). 후자를 빠뜨리기 쉽다.
    필수 예제 ★2 출발 · 통찰 0 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "보기 그래프마다 세로 직선 검사 → 교점이 모든 실수 x 에서 정확히 1개인 것만 선택"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "ㄱ, ㄹ"
  answer_source: "본문 풀이"
  figure: "crop:fig-213-e5.png"
  latex: latex-bank/gn-cm2/items/213-e5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "보기 그래프의 개수와 모양(직선·포물선·원·절댓값·계단)을 바꿀 수 있다. 제약 — 탈락 보기에는 **세로선과 두 점에서 만나는 그래프**(옆으로 누운 포물선·원)와 **일부 x 에서 정의되지 않는 그래프**(반직선·구멍)가 각각 최소 하나씩 들어가야 판정 도구 두 가지가 모두 필요해진다."
    creative: "(1) '함수의 그래프가 아닌 것'을 하나 고르게 하면 215-498 골조(★2) (2) 정의역을 실수 전체가 아니라 특정 구간으로 바꾸면 끊긴 그래프도 정답이 되어 판정 기준이 이동(★2) (3) 각 그래프의 치역을 함께 묻게 하면 ★3."
```

```yaml
- id: GN-CM2-213-493
  page: 213
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    보기로 주어진 그래프들 중에서 실수 전체의 집합에서 정의된 함수의 그래프인 것을 모두 고르기.
  category: "함수의 그래프 판정 → 세로 직선과의 교점이 모든 실수 x 에서 꼭 한 개"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수의 그래프 판정(y축에 평행한 직선과의 교점 검사)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    213-e5 와 같은 골조의 유제다. 세로 직선 검사로 교점이 두 개 이상인 그래프와 정의되지 않는 구간이 있는 그래프를 걸러 낸다.
    확인체크 ★2 출발 · 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "보기 그래프마다 세로 직선 검사 → 모든 실수 x 에서 교점 1개인 것만 선택"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "ㄷ, ㄹ"
  answer_source: "답지"
  figure: "crop:fig-213-493.png"
  latex: latex-bank/gn-cm2/items/213-493.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "보기 수(4개 안팎)와 그래프 종류를 바꿀 수 있다. 제약 — 정답 보기는 **정의역이 실수 전체로 끊김 없이 이어지는** 그래프여야 하고, 함수이지만 정의역이 일부뿐인 그래프를 오답 보기로 넣어 두 조건을 구분시키는 것이 이 유형의 핵심이다."
    creative: "(1) 보기를 5지선다 그림으로 바꾸면 215-498 골조(★2) (2) 함수인 그래프의 치역을 함께 묻기(★3) (3) 그래프를 식으로 바꿔 제시하면 210-e1 골조(★2)."
```

### 연습문제 STEP 1

```yaml
- id: GN-CM2-215-494
  page: 215
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    X={-2, -1, 0}, Y={0, 1, 2, 3} 에 대하여 X 에서 Y 로의 함수가 '아닌' 대응 두 개를 5지선다(2-|x|, x+3, x^3-3x, x^2+x+1, 조각으로 정의된 식)에서 고르기.
  category: "보기마다 x=-2, -1, 0 대입 → 함숫값이 Y 를 벗어나는 보기 탐색(정답 2개)"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "대응이 X 에서 Y 로의 함수가 될 조건(공역 포함 확인)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    정의역이 음수·0 뿐이라 삼차식과 조각식에서 음수 함숫값이 튀어나오는지가 갈림길이다. ③은 x=-2 에서, ⑤는 x=0 에서 Y 를 벗어난다.
    함정은 '아닌 것 2개'라는 부정·복수 발문(T-표기)과 음수 대입의 부호 처리(T-부호)다.
    STEP 1 ★2 출발 · 통찰 0 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "보기마다 x=-2, -1, 0 대입 → 세 값이 모두 Y 안인지 확인 → 벗어나는 두 보기 선택"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③, ⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/215-494.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "X 를 음수 쪽에, Y 를 음이 아닌 쪽에 두는 배치를 유지한 채 상수항과 차수를 바꿀 수 있다. 제약 — 정답이 2개인 복수 정답 문항이므로 **탈락 보기 정확히 둘**이 나오도록 나머지 보기의 최댓값이 Y 의 상한을 넘지 않는지 전부 확인한다. 조각 정의 보기는 경계 x=0 에서 어느 쪽 식을 쓰는지 표기를 분명히 둔다."
    creative: "(1) 함수인 것을 고르게 뒤집기(★2) (2) Y 를 바꿔 정답 개수를 1개로 만들면 ★2 하단 (3) 보기 중 하나에 상수 a 를 넣어 함수가 되게 하는 a 의 범위를 묻기(★3)."
```

```yaml
- id: GN-CM2-215-495
  page: 215
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    실수 전체에서 f(x)=-2x (x는 유리수), f(x)=x-3 (x는 무리수) 일 때 f(2)+√3 f(√3+2) 의 값.
  category: "입력의 유리·무리 판별 → 식 선택 → 무리수 계수를 곱해 전개·정리"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "유리수·무리수로 나누어 정의된 함수의 함숫값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    2는 유리수라 -2x, √3+2 는 무리수라 x-3 을 쓴다. 뒤 항에는 √3 이 한 번 더 곱해져 있어 전개하면 유리수 항과 무리수 항이 섞인다.
    함정은 무리수 판별(T-범위)과 √3(√3-1) 전개에서의 부호·차수 처리(T-부호)다. 211-e2 보다 계산이 한 겹 두껍다.
    STEP 1 ★2 출발 · 통찰 0 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "f(2)=-4 / √3+2 는 무리수 → f=√3-1 → √3(√3-1) 전개 → 두 값 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-1-\sqrt{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/215-495.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 식의 계수와 바깥에 곱해지는 무리수 계수(√3)를 바꿀 수 있다. 제약 — 무리수 입력에 같은 근호를 곱해 **유리수 항이 생기도록** 설계해야 답이 a+b√c 꼴로 정리되고, 유리수 쪽 입력은 근호가 있어도 유리수로 정리되는 값(√4 등)을 쓰지 않는 한 정수로 둔다."
    creative: "(1) 두 식 중 하나에 미지수를 넣고 식의 값이 유리수가 되게 하는 상수를 구하기(★3) (2) f(f(x)) 를 묻게 하면 합성 개념 선행(★3) (3) 분기를 x<0 / x≥0 으로 바꾸면 211-487 골조(★2)."
```

```yaml
- id: GN-CM2-215-496
  page: 215
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    X={15, 16, 17, 18, 19} 에서 자연수 집합으로의 함수 f(x)=(x 의 양의 약수의 개수) 일 때 치역의 모든 원소의 합.
  category: "다섯 수의 소인수분해 → 약수의 개수 → 중복 제거한 치역의 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "유한 정의역에서 치역 구하고 원소의 합 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    15, 16, 17, 18, 19 의 약수 개수를 차례로 세면 4, 5, 2, 6, 2 가 나온다.
    17 과 19 가 모두 소수라 값 2 가 겹치므로 **치역 원소는 넷**이다. 다섯 값을 그대로 더하면 틀린다(T-표기).
    STEP 1 ★2 출발 · 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "각 수를 소인수분해 → 약수의 개수 공식 → 중복 제거한 치역의 원소 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$17$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/215-496.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정의역을 다른 연속 자연수 5개(예: 20~24)로 바꿀 수 있다. 제약 — 구간 안에 **소수 두 개 이상**(값 중복)과 **제곱수 하나**(약수 개수 홀수)를 넣어야 중복 제거와 개수 공식 두 가지가 모두 필요해진다. 구간을 넓히면 계산량만 늘고 골조는 그대로다."
    creative: "(1) 치역의 원소 개수를 묻기(★2 하단) (2) f(x)=(x 의 소인수의 개수)로 바꾸면 값 범위가 좁아져 중복이 심해짐(★2) (3) 치역이 한 원소가 되도록 정의역을 고르게 하면 216-505 골조(★4)."
```

```yaml
- id: GN-CM2-215-497
  page: 215
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    정의역이 X={1, 3} 인 두 함수 f(x)=x^2+7ax+2b, g(x)=3ax+b 가 서로 같을 때 함수 g 의 치역(a, b 는 상수).
  category: "f=g 를 x=1, 3 에서 두 등식으로 → a, b 연립 → g 를 확정하고 치역 계산"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "서로 같은 함수 조건에서 미정계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    정의역에 0 이 없어 212-491 과 달리 진짜 연립이 된다. 두 등식에서 b 를 소거하면 a 가, 되돌리면 b 가 나온다.
    마지막에 **묻는 것이 상수가 아니라 g 의 치역**이라 확정된 g 에 1, 3 을 다시 넣는 한 단계가 더 붙는다(발문 함정).
    STEP 1 ★2 출발 · 통찰 0 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "f(1)=g(1), f(3)=g(3) → a, b 연립 → g 확정 → x=1, 3 대입해 치역"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\{-6,\,0\}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/215-497.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정의역 {1, 3} 과 7a·3a 의 계수를 바꿀 수 있다. 제약 — 두 등식이 **독립**이어야 a, b 가 하나로 정해지고(정의역 두 원소의 제곱차가 0이 아니면 대개 성립), 답인 치역이 정수 두 개로 떨어지도록 a, b 를 정수로 만드는 계수 조합을 택한다."
    creative: "(1) g 의 치역 대신 a+b 를 묻기(★2 하단 · 212-491 골조) (2) 정의역 원소 하나를 미지수로 두면 216-502 골조(★3 · I-VF) (3) f=g 인 a, b 가 존재하지 않도록 정의역을 세 원소로 늘려 '존재하지 않음'을 보이게 하면 ★4."
```

```yaml
- id: GN-CM2-215-498
  page: 215
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    5지선다 그림 중 실수 전체의 집합에서 정의된 함수의 그래프가 '아닌' 것 고르기.
  category: "세로 직선 검사 → 교점이 두 개 이상이거나 없는 x 가 있는 그래프 찾기"
  M: {s: 1, k: 1, a: 2, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수의 그래프 판정(y축에 평행한 직선과의 교점 검사)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    213-e5·213-493 과 같은 세로 직선 검사이고 발문만 '아닌 것 하나'로 바뀌었다.
    부정 발문(T-표기)과 '정의역이 실수 전체'라는 단서(T-범위)를 함께 봐야 오답 하나가 정확히 걸린다.
    STEP 1 ★2 출발 · 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "보기 그림마다 세로 직선 검사 → 교점 조건을 어기는 하나 선택"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: "crop:fig-215-498.png"
  latex: latex-bank/gn-cm2/items/215-498.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "보기 그림의 종류(직선·포물선·절댓값·계단·원)를 바꿀 수 있다. 제약 — 5지선다이므로 **탈락 그래프는 정확히 하나**여야 하고, 나머지 넷은 실수 전체에서 끊김 없이 정의돼야 한다(반직선이나 구멍 뚫린 그래프를 무심코 넣으면 정답이 둘이 된다)."
    creative: "(1) 보기 형태로 바꿔 '모두 고르시오'로 하면 213-493 골조(★2) (2) 각 그래프의 정의역·치역을 함께 묻기(★3) (3) 함수가 되도록 그래프의 일부를 지우는 방법 수를 묻기(★4)."
```

### 연습문제 STEP 2

```yaml
- id: GN-CM2-216-499
  page: 216
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    X={-1, 0, 1}, Y={1, 2, 3} 에 대하여 f(x)=ax^2+(a+1)x+2 가 X 에서 Y 로의 함수가 되도록 하는 모든 상수 a 의 값의 합.
  category: "세 함숫값이 모두 Y 의 원소 → a 가 소거되는 두 값 확인 → 남은 식이 Y 의 각 원소일 경우로 분기"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f(1)=2a+3 이 공역 Y 의 원소이기만 하면 되므로 1, 2, 3 세 경우로 분기해 a 를 각각 구하고 셋을 모두 답에 넣음(a 가 정수가 아닌 경우도 버리지 않음)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "함수가 되도록 하는 미정계수 구하기(공역 포함 조건의 경우 분기)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f(0)=2, f(-1)=1 은 a 와 무관하게 Y 안에 들어가므로 조건은 f(1)=2a+3 하나로 줄어든다(먼저 이걸 확인하지 않으면 세 부등식·방정식을 다 붙들게 된다).
    2a+3 이 1, 2, 3 각각인 세 경우가 모두 유효한 답이고(I-MI d2), a 가 -1/2 인 경우를 '정수가 아니라서' 버리면 틀린다.
    STEP 2 ★3 출발 · 통찰 1개 d2 · M_total 8 → ★3.
  tier: star_3
  mechanism_primary: "f(-1)=1, f(0)=2 는 항상 Y 안 → f(1)=2a+3 ∈ {1, 2, 3} 세 경우 → a 세 값의 합"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-\dfrac{3}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/216-499.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차식의 계수 배치(a 와 a+1)와 상수항, 공역 Y 를 바꿀 수 있다. 제약 — 설계의 핵심은 **x=-1 과 x=0 에서 a 가 소거**되는 것이다(x^2 과 x 의 계수 합이 0이 되도록 두면 x=-1 에서 사라진다). 이 성질이 깨지면 조건이 세 개로 늘어 답이 공집합이 되기 쉽다. 공역 원소 수가 그대로 답의 개수가 된다."
    creative: "(1) 값의 합 대신 a 의 개수를 묻기(★3 하단) (2) a 를 정수로 제한하면 후보 일부가 기각되어 I-VF 추가(★4) (3) 치역=공역(일대일 대응)까지 요구하면 조건이 겹쳐 ★4 (4) 공역을 부등식 범위로 주면 부등식 단원 결합(★4 · I-XU)."
```

```yaml
- id: GN-CM2-216-500
  page: 216
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    실수 전체에서 f(x)=|x|+2 (x<0), f(x)=x^2-3x-2 (x≥0) 일 때 f(a)=8 을 만족시키는 모든 실수 a 의 값의 곱.
  category: "구간마다 방정식 풀기 → 얻은 해가 그 구간 조건을 만족하는지 재검증 → 살아남은 해의 곱"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 구간에서 얻은 해 세 개를 각각 원래 구간 조건(x<0 / x≥0)에 되돌려 넣어, 이차방정식의 음근 하나를 조건 위배로 기각"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "구간으로 나누어 정의된 함수에서 f(a)=k 인 a 구하기(해의 구간 검증)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    x<0 에서는 일차방정식, x≥0 에서는 이차방정식을 풀어 후보 세 개를 얻는다.
    핵심은 **각 후보를 자기 구간 조건에 재대입**하는 마지막 단계다 — 이차방정식의 음근은 x≥0 구간에서 나온 것이라 기각되고, 이를 빠뜨리면 곱이 달라진다(I-VF d2).
    STEP 2 ★3 출발 · 통찰 1개 d2 · M_total 7 → ★3.
  tier: star_3
  mechanism_primary: "x<0 에서 -x+2=8 / x≥0 에서 x^2-3x-2=8 → 후보 세 개 → 구간 조건으로 기각 → 남은 해의 곱"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$-30$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/216-500.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "함숫값 k(=8)와 이차식의 계수를 바꿀 수 있다. 제약 — 이차방정식이 **부호가 다른 두 근**을 갖도록 k 를 잡아야 기각 단계가 살아 있고(두 근이 모두 양수면 I-VF 가 사라져 ★2로 떨어진다), 일차 쪽 해도 반드시 음수가 되게 k 를 그 구간의 치역 안에 둔다."
    creative: "(1) 해의 합이나 개수를 묻기(★3 유지) (2) f(a)=k 의 해가 2개가 되도록 하는 k 의 범위를 묻기(★4 · 그래프 개형 필요) (3) 경계 x=0 근처 값으로 k 를 잡아 T-경계 함정을 강화(★3) (4) 조각을 세 구간으로 늘리면 기각 후보가 늘어 ★4."
```

```yaml
- id: GN-CM2-216-501
  page: 216
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    임의의 실수 a, b 에 대하여 f(a+b)=f(a)+f(b)+4 를 만족시키는 함수 f 에서 f(4)+f(-4) 의 값.
  category: "항등식에 특수값 대입 → f(0) 결정 → a=4, b=-4 대입으로 구하는 합을 한 번에 만들기"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "구하려는 것이 f(4)+f(-4) 라는 점에서 거꾸로 a=4, b=-4 대입을 떠올리고, 그러면 필요한 f(0) 을 먼저 a=b=0 대입으로 확보"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "함수의 관계식(함수방정식)에 특수값을 대입해 함숫값 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f 의 식이 전혀 주어지지 않으므로(Mₐ=3) 관계식에 **무엇을 대입할지 고르는 것**이 풀이 전부다.
    a=b=0 으로 f(0) 을 먼저 얻고, a=4, b=-4 를 넣으면 좌변이 f(0) 이 되어 구하는 합이 그 자리에서 나온다(I-BW d2).
    f 를 일차함수로 가정해 구하는 접근은 근거가 없으므로 피한다. STEP 2 ★3 출발 · 통찰 1개 d2 → ★3.
  tier: star_3
  mechanism_primary: "a=b=0 → f(0)=-4 / a=4, b=-4 → f(0)=f(4)+f(-4)+4 → 구하는 합"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$-8$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/216-501.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수항 4 와 묻는 값 f(4)+f(-4) 의 인수를 바꿀 수 있다. 제약 — 관계식이 **f(0) 을 스스로 결정**하는 꼴이어야(a=b=0 대입에서 f(0) 이 한 값으로 풀려야) 문제가 성립하고, 묻는 두 점의 합이 0 이 되도록 짝지어야 f(0) 한 값만으로 답이 나온다."
    creative: "(1) f(1) 을 추가로 주고 f(3) 을 묻게 하면 반복 대입이 필요해 ★3~4 (2) 관계식을 f(a+b)=f(a)f(b) 꼴로 바꾸면 곱셈형(★4) (3) f 가 다항함수라는 조건을 붙여 식 자체를 결정하게 하면 ★4 (4) f(2025) 처럼 큰 값을 물으면 216-503 처럼 반복 구조 발견이 필요(★4)."
```

```yaml
- id: GN-CM2-216-502
  page: 216
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    정의역이 X={-2, 0, a} 인 두 함수 f(x)=x^2+2x, g(x)=x^3+bx 가 f=g 일 때 상수 a, b 의 값(a≠-2, a≠0).
  category: "x=-2 에서 b 결정 → x=a 에서 삼차방정식 → 제외 조건으로 근을 기각하고 a 확정"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 3
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "a 에 대한 삼차방정식의 세 근 중 a≠-2, a≠0 에 걸리는 두 근을 기각하고 남은 하나만 답으로 채택"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "서로 같은 함수 조건에서 정의역의 미지 원소와 미정계수 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    x=0 은 두 식이 자동으로 0 이라 정보를 주지 않고, x=-2 가 b 를 결정한다(어느 원소부터 대입할지가 계산량을 가른다).
    그 b 를 넣고 x=a 등식을 세우면 삼차방정식이 되는데 근 셋 중 둘이 정확히 제외 조건 -2, 0 이다 — 기각 단계를 빠뜨리면 답이 셋이 된다(I-VF d1).
    STEP 2 ★3 출발 · 통찰 1개 d1 · M_total 8 → ★3.
  tier: star_3
  mechanism_primary: "f(-2)=g(-2) → b → f(a)=g(a) 삼차방정식 → 근 중 -2, 0 기각 → a"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$a=3$, $b=-4$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/216-502.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정의역의 고정 원소(-2, 0)와 두 식의 계수를 바꿀 수 있다. 제약 — 삼차방정식의 근에 **고정 원소가 그대로 나타나도록** 설계해야 기각 단계가 생기고(정의역 원소는 f(x)=g(x) 의 해이므로 자동으로 근이 된다), 남는 근이 하나뿐이어야 답이 유일하다. 계수를 바꿀 때 남는 근이 정수가 되게 맞춘다."
    creative: "(1) 제외 조건을 빼고 '가능한 X 를 모두 구하라'로 바꾸면 212-492 골조(★3) (2) 정의역 원소를 두 개 미지수로 두면 ★4 (3) a 를 자연수로 제한하고 근에 음수를 섞으면 기각이 한 겹 더(★4)."
```

### 연습문제 실력 UP

```yaml
- id: GN-CM2-216-503
  page: 216
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    양의 실수 전체에서 정의된 f 가 ㈎ 모든 양의 실수 x 에서 f(4x)=4f(x) ㈏ 1≤x<4 에서 f(x)=|3-x|-1 을 만족시킬 때 f(2025) 의 값.
  category: "배율 관계식 반복 → f(4^n x)=4^n f(x) → 2025 를 4^n·t (1≤t<4) 꼴로 분해 → 기본 구간 식에 대입"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-PD
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f(4x)=4f(x) 를 거듭 적용하면 f(4^n x)=4^n f(x) 라는 자기닮음 구조가 나오고, 함수가 기본 구간 [1, 4) 의 값만으로 전부 결정됨을 파악"
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "2025 를 직접 계산하는 대신 4^n 으로 나누어 기본 구간 1≤t<4 에 들어가는 n 을 역으로 찾아 대입점을 만듦"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "배율 관계식이 주어진 함수의 함숫값(기본 구간으로 환원)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    조건 ㈎는 그래프가 4배씩 닮음 확대된다는 뜻이라 함수는 1≤x<4 의 모양 하나로 결정된다(I-PD d2).
    2025 를 4^n 으로 나눠 몫이 [1, 4) 에 들어오는 n 을 찾아 내려온 뒤(I-BW d2) 기본 구간 식 |3-x|-1 에 대입하고 4^n 을 곱해 되돌린다.
    절댓값 안의 부호 판정(T-부호)과 기본 구간의 경계 1≤x<4(T-경계)가 함정이다.
    실력 UP ★4 출발 · 통찰 2개(depth 2) → 통찰 3개·저노출 유형 요건 미달이라 ★5 로 올리지 않고 ★4.
  tier: star_4
  mechanism_primary: "f(4^n x)=4^n f(x) → 2025=4^n·t (1≤t<4) 분해 → f(t)=|3-t|-1 대입 → 4^n 배"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: "$23$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/216-503.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "배율(4)과 묻는 값(2025), 기본 구간의 식을 바꿀 수 있다. 제약 — **배율과 기본 구간의 폭이 맞아야** 한다(f(kx)=kf(x) 면 기본 구간은 [1, k)). 묻는 값은 4^n 으로 나눈 몫이 기본 구간에 들어가야 하고, 그 몫이 절댓값 꼭짓점(3)의 어느 쪽인지에 따라 부호가 갈리므로 답을 정수로 떨어뜨리려면 묻는 값과 배율의 거듭제곱 차를 함께 조정한다."
    creative: "(1) f(2025) 대신 f(x)=0 인 x 의 개수를 묻게 하면 자기닮음 구조 전체를 봐야 해 ★5 후보 (2) 조건을 f(x+4)=f(x) 주기형으로 바꾸면 환원 방식이 나머지 계산으로 단순화(★3) (3) 배율을 f(2x)=4f(x) 로 어긋나게 주면 지수 관계가 한 겹 더 생겨 ★5 (4) 기본 구간 식을 이차식으로 바꾸면 계산만 무거워지므로(질 저하) 피한다."
```

```yaml
- id: GN-CM2-216-504
  page: 216
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    세 변의 길이가 a, 6, 10 인 삼각형의 둘레의 길이를 f(a) 라 할 때 함수 y=f(a) 의 치역이 {y | p<y<q} 이다. pq 의 값.
  category: "삼각형이 되는 조건 → a 의 범위(정의역) → 둘레 a+16 의 범위(치역) → p, q 의 곱"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "문제에 정의역이 적혀 있지 않다는 점을 알아채고, '삼각형이 된다'를 두 변의 차 < a < 두 변의 합 이라는 a 의 부등식으로 옮겨 정의역을 스스로 만듦"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "도형 조건으로 정의역이 정해지는 함수의 치역"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f(a)=a+16 자체는 일차식이라 계산이 없다. 이 문항의 전부는 **정의역이 발문에 없다**는 것을 알아채고 삼각부등식으로 4<a<16 을 세우는 데 있다(I-EQV d2).
    그 뒤는 일차식이 증가함수이므로 범위를 그대로 옮기면 된다. 등호가 빠지는 열린구간(T-경계)이 치역 표기의 함정이다.
    [분류 이슈] 실력 UP ★4 출발이지만 도구가 삼각부등식 한 단계 + 일차식 범위 이동뿐이라 통찰 1개·M_total 7 로 한 단 내려 ★3 으로 두었다.
  tier: star_3
  mechanism_primary: "삼각부등식 10-6<a<10+6 → 4<a<16 → 둘레 f(a)=a+16 의 범위 20<y<32 → pq"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$640$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/216-504.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 고정 변(6, 10)을 바꾸면 정의역은 |차| < a < 합 으로 따라 움직이고 치역은 그만큼 평행이동한다. 제약 — 두 변이 **서로 달라야** 하한이 0보다 커지고, 답을 pq 로 물으려면 두 변의 값에서 p, q 가 정수로 떨어지는지 확인한다. 등호를 넣으면(축퇴 삼각형) 문제가 깨진다."
    creative: "(1) 둘레 대신 넓이를 f(a) 로 두면 치역이 비선형이 되어 ★4~5 (2) a 를 자연수로 제한하면 치역이 유한집합이 되어 개수 문제(★3) (3) 이등변삼각형이 되는 a 를 함께 묻게 하면 경우 분기가 생겨 ★4 (4) 세 변이 모두 미지수면 조건 결합(★5 · I-CON)."
```

```yaml
- id: GN-CM2-216-505
  page: 216
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    A={x | x는 30 이하의 자연수} 의 부분집합 X 를 정의역으로 하는 함수 f(x)=(x 를 4로 나눈 나머지) 의 치역이 {3} 이 되도록 하는 정의역 X 의 개수.
  category: "치역={3} ⟺ X 의 모든 원소가 나머지 3 이고 X 는 공집합 아님 → 후보 원소 세기 → 2^n-1"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'치역이 {3}' 이라는 결과 조건을 '정의역 X 가 나머지 3인 원소들의 집합의 부분집합이고 공집합이 아니다' 라는 정의역 조건으로 뒤집어, 함수 문제를 부분집합 개수 문제로 환원"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "치역 조건을 만족시키는 정의역의 개수(부분집합 세기)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    치역이 {3} 이려면 X 의 모든 원소가 4로 나눈 나머지 3 이어야 하고, 동시에 **원소가 적어도 하나** 있어야 한다(치역이 공집합이 되면 안 됨).
    결과 조건을 정의역 조건으로 뒤집는 것이 착안이고(I-EQV d2), 30 이하에서 나머지 3 인 수를 세면 7개이므로 답은 2^7 에서 공집합을 뺀 값이다.
    공집합 제외(T-범위)와 30 이하 개수 세기(T-경계)가 함정. 실력 UP ★4 출발 · 통찰 1개 d2 · M_total 8 → ★4.
  tier: star_4
  mechanism_primary: "치역={3} → X ⊂ {3, 7, 11, 15, 19, 23, 27}, X≠∅ → 2^7-1"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$127$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/216-505.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "전체집합의 상한(30)과 나누는 수(4), 지정 나머지(3)를 바꿀 수 있다. 제약 — 후보 원소 개수 n 이 답 2^n-1 을 결정하므로 **상한과 나머지의 조합에서 n 을 먼저 센다**(상한이 나누는 수의 배수 근처면 n 이 1 달라지기 쉽다). 나머지를 0 으로 바꾸면 후보에 나누는 수의 배수만 남아 n 이 달라진다."
    creative: "(1) 치역을 {1, 3} 으로 바꾸면 두 나머지 집합에서 각각 최소 하나씩 뽑아야 해 포함·배제가 필요(★5 후보) (2) 정의역의 원소 개수를 k 로 지정하면 조합 개수 문제(★4) (3) 치역의 원소 개수가 2 이하가 되도록 하는 X 의 개수를 묻기(★5) (4) f 를 약수의 개수로 바꾸면 215-496 의 후보 구조와 결합(★4)."
```

## 표본 판정 요약 (29문)

- ★ 분포: ★1 3 · ★2 18 · ★3 6 · ★4 2 · ★5 0
- 통찰형 8 · 절차형 21 · premium 0
- 통찰 라벨 9개(문항 8개): I-EQV 3(212-492 · 216-504 · 216-505) · I-VF 2(216-500 · 216-502) · I-BW 2(216-501 · 216-503) · I-PD 1(216-503) · I-MI 1(216-499). depth 3 은 없음 — 단원 입구라 통찰이 있어도 한 겹에서 끝난다.
- type_hint 상위: 「서로 같은 함수 계열(판정·미정계수·정의역)」 7 · 「대응이 함수가 될 조건(공역 포함)」 5 · 「유한 정의역의 치역·원소 합」 5 · 「경우·구간으로 나누어 정의된 함수의 함숫값」 4 · 「함수의 그래프 판정(세로 직선 검사)」 3. 나머지 5문(216-499 · 216-501 · 216-503 · 216-504 · 216-505)은 각각 단독 유형.
- 구역별 ★: 익히기 3문 모두 ★1 · 필수·발전 예제 14문 중 13문 ★2 + 1문 ★3(212-492) · STEP 1 5문 모두 ★2 · STEP 2 4문 모두 ★3 · 실력 UP 3문은 ★4 2 + ★3 1(216-504).
- 그림: 4문(`crop:fig-209-482.png` · `crop:fig-213-e5.png` · `crop:fig-213-493.png` · `crop:fig-215-498.png`). 모두 보기 그림 자체가 판정 대상이라 골조는 발문만으로 결정된다.
- 대상층: 하위권 3 · 중하위권 18 · 중위권 2 · 중상위권 5 · 상위권 1.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CM2-212-490 | 익히기 209-484 와 골조가 같은데(정의역 원소별 함숫값 비교) 구역 신호만으로 ★1 / ★2 로 갈린다. M_total 5 · 통찰 0 이라 −1 후보이지만 예제 유제 배치를 우선해 ★2 유지 | ★1 / ★2 |
| GN-CM2-212-492 | 벤더는 확인체크(★2 출발)이나 정의역 자체가 미지라 해집합의 부분집합 문제로 바뀐다(I-EQV d2). 한 단 올려 ★3 | ★2 / ★3 |
| GN-CM2-216-504 | 벤더 최상위 구역(실력 UP ★4 출발)이지만 도구는 삼각부등식 한 단계 + 일차식 범위 이동뿐이다. 한 단 내려 ★3 | ★3 / ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형** ⑴ 「대응이 함수가 될 조건」과 ⑵ 「서로 같은 함수」는 묻는 것이 겹쳐 보여도 사용하는 도구가 다르다(공역 포함 확인 vs 정의역 원소별 등식). 합치면 216-499 같은 미정계수형의 base ★ 를 정할 수 없다.
- **통합해도 될 유형** 「유한 정의역의 치역 구하기」(209-483 · 211-e3 · 211-489)와 「치역의 원소의 합」(211-488 · 215-496)은 마지막 한 줄만 다르므로 한 유형(base ★2) 아래 변형으로 둘 수 있다. 「함수의 그래프 판정」 3문(213-e5 · 213-493 · 215-498)도 발문 형태(모두 고르기 / 아닌 것 하나)만 다른 같은 유형이다.
- **base ★ 후보** 함수 판정·치역·같은 함수 판정은 ★2, 미정계수가 붙으면 ★2~3, 정의역이 미지이거나 결과 조건을 뒤집어야 하면 ★3~4(212-492 · 216-505), 관계식·자기닮음 구조는 ★4(216-503).
- **★5 부재** 이 범위에는 ★5 가 없다. v3.8 의 ★5 요건(통찰 3개 이상 + SC/VF/SYM/XU)을 채우려면 216-503(자기닮음 + 개수 세기)이나 216-505(치역을 두 원소로 확장)의 창의 변형이 출발점으로 가장 가깝다.
