---
name: mechanism-데이터-GN-CALC2-19
description: 개념원리 미적분Ⅱ 19 접선의 방정식(1/1 · 34문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 미적분Ⅱ (22개정) · 전사본 latex-bank/gn-calc2
  section: 19 접선의 방정식
  unit_code: "19"
  part: "1/1"
  extract_range: "156~164쪽 · 156-e1~164-332"
  total_problems: 34
  unit_total: 34
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). depth_score 는 effective_depth 의 평균(통찰 없으면 0.00). insight_type 은 insights 유무로만 정함(빈 배열이면 절차형). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-calc2/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-calc2/items/<id>.tex
  image_source: latex-bank/gn-calc2/figures/ (이 범위에는 그림 문항 없음)
---

# 개념원리 미적분Ⅱ · 19 접선의 방정식 (1/1) 정독 데이터 (v1.0)

156~164쪽, 34문항 전수다. 구역은 「필수·발전 예제」 22문(필수 예제 7 + 딸림 확인체크 15) · 「연습문제 STEP 1」 5문 · 「연습문제 STEP 2」 5문 · 「연습문제 실력 UP」 2문. 단원 전체가 도함수를 접선의 기울기로 읽는 한 가지 도구 위에 서 있고, 그 위에 ⑴ 접점이 주어진 경우 ⑵ 기울기가 주어진 경우 ⑶ 곡선 밖의 점에서 그은 경우 ⑷ 접선의 개수 ⑸ 두 곡선이 접할 조건 ⑹ 매개변수 곡선 ⑺ 음함수 곡선의 일곱 갈래가 예제 단위로 얹혀 있다. 이 범위에 그림 문항은 없다.

벤더 난이도 신호는 구역과 태그다. 「필수」 예제 ★2 출발 · 그 아래 「확인체크」도 같은 예제의 반복 훈련이므로 ★2 출발(개념원리 익히기 구역이 이 단원에는 없다) · STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4 출발로 두고, `통찰 0 · M_total ≤ 5 → −1` / `통찰 2개 이상 · depth 3 → +1` 을 후보 신호로 써서 한 단만 조정했다. 다만 **필수 예제는 그 유형을 처음 도입하는 대표 문항이라 −1 을 적용하지 않고 ★2 를 바닥으로 두었다**(157-e2 · 161-e6 이 여기 해당하며 rationale 에 적어 두었다).

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 사슬) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 / 골조를 유지한 설정 변경과 ★ 변동 지점)를 채웠다. 답은 전사본 값을 그대로 옮겼고 재검산하지 않았다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-CALC2-156-e1
  page: 156
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑶ 곡선 $y=\dfrac{x^2+1}{x+1}$, $y=e^{x-1}$, $y=\sin^2 x$ 위의 주어진 점에서의 접선의 방정식을 각각 구하기.
  category: "접점이 주어진 접선 → 미분계수 = 기울기 → 점-기울기식"
  M: {s: 3, k: 2, a: 1, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "접점이 주어진 곡선의 접선의 방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    몫미분·지수 합성·삼각 합성 세 갈래를 한 문항에서 돌리지만 절차는 하나다. 접점이 이미 주어져 있어 역추적이 없다.
    필수 예제 ★2 출발 · 통찰 0 · M_total 6 → 조정 없이 ★2. 이 단원 전체의 기준 문항.
  tier: star_2
  mechanism_primary: "각 곡선을 미분 → 접점의 x좌표 대입해 기울기 m → y-y1=m(x-x1)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $y=\dfrac{1}{2}x+\dfrac{1}{2}$ ⑵ $y=ex-e$ ⑶ $y=x-\dfrac{\pi}{4}+\dfrac{1}{2}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/156-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접점의 좌표와 함수의 계수를 바꿀 수 있다. 제약: 접점이 반드시 곡선 위의 점이어야 하고(대입해 등식 성립), 기울기가 유리수 또는 e·pi 한 개로 떨어지게 지수·삼각의 특수각을 고른다. sin^2 x 는 2sin x cos x = sin 2x 로 정리되는 각(pi/4, pi/6)만 쓴다."
    creative: "(1) 같은 점에서의 법선을 묻기(★2 유지) (2) 접선의 x절편·y절편이나 두 좌표축과 만드는 삼각형 넓이로 확장(★2) (3) 접점을 좌표 대신 'x=1인 점'처럼 한 좌표만 주기(★2) (4) 접점을 빼고 기울기만 주면 역추적이 생겨 ★2 상단~★3."
```

```yaml
- id: GN-CALC2-156-306
  page: 156
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑶ 곡선 $y=\sqrt{x^2+5}$, $y=\ln x^2$, $y=xe^x-2$ 위의 주어진 점에서의 접선의 방정식.
  category: "접점이 주어진 접선 → 합성·곱의 미분 → 점-기울기식"
  M: {s: 3, k: 2, a: 1, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "접점이 주어진 곡선의 접선의 방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    156-e1 과 같은 골조를 무리함수·로그·곱의 미분으로 반복한다. ln x^2 을 2ln|x| 로 보지 않아도 합성으로 바로 2/x 가 나온다.
    확인체크 ★2 출발 · 통찰 0 · M_total 6 → ★2. e1 과 난이도 차가 거의 없다.
  tier: star_2
  mechanism_primary: "합성·곱의 미분으로 y' → 접점 대입해 m → y-y1=m(x-x1)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $y=\dfrac{2}{3}x+\dfrac{5}{3}$ ⑵ $y=\dfrac{2}{e}x$ ⑶ $y=x-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/156-306.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "무리함수 안의 상수(x^2+5 → x^2+3 등)와 접점을 함께 바꾼다. 제약: 근호 안이 양수이고 접점의 y값이 유리수가 되게 완전제곱을 만들 것. 로그는 x=e^k 형태의 접점만, xe^x 꼴은 x=0 처럼 e^x=1 이 되는 점을 고르면 계수가 깨끗하다."
    creative: "(1) 세 소문항 중 하나를 '접선이 원점을 지남'으로 바꾸면 곡선 밖 접선 유형으로 넘어가 ★2 상단 (2) 접선의 y절편을 묻기(★2) (3) 세 접선의 기울기의 합을 묻는 합성 문항(★2~3)."
```

```yaml
- id: GN-CALC2-156-307
  page: 156
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    곡선 $y=\dfrac{2x+1}{x^2+2}$ 위의 점 $\left(0,\dfrac{1}{2}\right)$을 지나고 그 점에서의 접선에 수직인 직선이 $ax+by-1=0$일 때 $ab$.
  category: "접점에서의 법선 → 계수 비교"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "접점에서의 법선(수직인 직선)의 방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    몫미분으로 m=1 → 법선 기울기 -1 → 법선식을 상수항이 -1 인 $ax+by-1=0$ 꼴로 정규화해 a, b 를 읽는다.
    정규화(양변에 2를 곱해 상수항을 맞추는 단계)에서 T-표기 함정 1개. 통찰은 없다. 확인체크 ★2 출발 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "몫미분으로 y'(0)=1 → 법선 기울기 -1 → 법선식을 ax+by-1=0 꼴로 맞춰 a, b 비교 → ab"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/156-307.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자·분모의 계수와 접점의 x좌표를 바꾼다. 제약: x=0 처럼 몫미분 결과가 정수로 떨어지는 점을 골라야 법선 기울기가 유리수가 되고, 목표 형태의 상수항(-1)에 맞췄을 때 a, b 가 정수로 나오도록 접점의 y값을 단순분수로 둔다."
    creative: "(1) 목표 형태를 $ax+by+c=0$ 으로 열어 두고 a+b+c 를 묻기(정규화가 사라져 ★2 하단) (2) 법선의 x절편·y절편으로 바꾸기(★2) (3) 접선과 법선이 좌표축과 만드는 삼각형 넓이(★3) (4) 법선이 곡선과 다시 만나는 점을 묻는 방향은 계산이 무거워져 질이 떨어진다."
```

```yaml
- id: GN-CALC2-157-e2
  page: 157
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴⑵ 곡선 $y=e^{2x}$에 접하고 기울기가 $2$인 직선, 곡선 $y=\ln(x-1)$에 접하고 직선 $y=x-1$에 평행한 직선의 방정식.
  category: "기울기가 주어진 접선 → y'=m 으로 접점 역산 → 접선식"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "기울기가 주어진 접선의 방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    접점이 주어지지 않고 기울기가 주어지므로 y'=m 을 풀어 접점을 먼저 찾는다. 방향이 한 번 뒤집히지만 이 단원이 가르치는 표준 절차라 통찰로 세지 않았다.
    T-표기 함정 1개(평행 조건을 기울기로 옮기기). 통찰 0 · M_total 5 로 -1 후보이나 이 유형을 도입하는 필수 예제라 ★2 를 유지했다.
  tier: star_2
  mechanism_primary: "y'=m 을 풀어 접점의 x → 접점 좌표 → y-y1=m(x-x1)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $y=2x+1$ ⑵ $y=x-2$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/157-e2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수의 계수(e^{2x} → e^{3x})와 주어진 기울기를 함께 바꾼다. 제약: y'=m 이 지수·로그 방정식으로 풀려야 하므로 m 을 계수의 배수(2e^{2x}=2 처럼 지수가 0이 되는 값)로 고른다. ln(x-1) 쪽은 평행한 직선의 기울기를 1/k 꼴로 두면 접점이 x=1+k 로 깔끔하다."
    creative: "(1) '평행' 대신 '수직'으로 바꾸기(기울기 한 번 더 변환 · ★2 유지) (2) 접선의 y절편이 주어진 값이 되게 하는 곡선의 상수를 묻기(역방향 한 겹 추가 · ★3) (3) 접선과 곡선이 만나는 다른 점을 묻기(★3) (4) 기울기를 매개변수 m 으로 두고 접선의 y절편을 m 의 식으로 표현(Ma 상승 · ★3)."
```

```yaml
- id: GN-CALC2-157-308
  page: 157
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    곡선 $y=\sqrt{4x-7}$에 접하고 직선 $y=2x+5$에 평행한 직선의 방정식.
  category: "기울기가 주어진 접선(평행) → 접점 역산"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "기울기가 주어진 접선의 방정식(평행 조건)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    y'=2/√(4x-7)=2 → 근호 안이 1 → 접점 (2,1) → y=2x-3. 세 줄이면 끝나고 함정도 없다.
    확인체크 ★2 출발이지만 통찰 0 · M_total 4 로 -1 을 적용해 ★1. 이 단원에서 가장 가벼운 문항이다.
  tier: star_1
  mechanism_primary: "y'=2 를 풀어 접점 → 점-기울기식"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y=2x-3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/157-308.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안의 일차식 계수(4x-7)와 평행한 직선의 기울기를 바꾼다. 제약: y'=2k/√(...)=m 에서 근호 안이 완전제곱수가 되어 접점의 x가 유리수로 떨어져야 한다. 정의역 4x-7>0 도 함께 옮길 것."
    creative: "(1) '평행' 대신 '수직'(기울기 부호가 음수가 되어 무리함수에서는 접선이 없음 → 존재 조건을 묻는 ★2~3 문항) (2) 접선과 x축·근호의 시작점이 만드는 넓이(★2) (3) 기울기를 미지수로 두고 접선이 원점을 지나게 하기(곡선 밖 접선 유형 · ★2)."
```

```yaml
- id: GN-CALC2-157-309
  page: 157
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    곡선 $y=e^{-x}$에 접하고 $x$축의 양의 방향과 이루는 각의 크기가 $135^\circ$인 직선의 방정식.
  category: "각 → 기울기 변환 → 접점 역산"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "기울기가 주어진 접선의 방정식(각 → tan)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    m=tan135°=-1 로 옮기는 한 단계가 추가될 뿐 157-308 과 같은 골조다. 각을 기울기로 옮기는 것은 표준 공식이라 통찰로 세지 않고 T-표기 함정으로만 잡았다.
    확인체크 ★2 출발 · 통찰 0 · M_total 5 → -1 적용해 ★1.
  tier: star_1
  mechanism_primary: "m=tan135°=-1 → -e^{-x}=-1 로 접점 (0,1) → y=-x+1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y=-x+1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/157-309.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각을 45°·120°·150° 등 tan 값이 특수각인 것으로 바꾸고 지수의 부호·계수를 맞춘다. 제약: y'=-e^{-x} 는 항상 음수이므로 각은 둔각(90°<θ<180°)이어야 접선이 존재한다. 이 부호 제약이 이 문항의 핵심이므로 변형 때 반드시 확인."
    creative: "(1) 각을 예각으로 주고 '그런 직선이 존재하지 않음'을 보이게 하기(부호 논증 · ★2) (2) y=e^{-x} 대신 y=e^{-x}+k 로 두고 접선이 원점을 지나는 k 를 묻기(★3) (3) 접선과 두 좌표축이 만드는 삼각형 넓이(★2)."
```

```yaml
- id: GN-CALC2-157-310
  page: 157
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    곡선 $y=\sin 2x$ $(0\le x\le\pi)$에 접하고 직선 $x-2y+2=0$에 수직인 직선의 방정식.
  category: "수직 조건 → 기울기 → 삼각방정식으로 접점 역산"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "기울기가 주어진 접선의 방정식(수직 조건·정의역 제한)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    주어진 직선의 기울기 1/2 → 수직이므로 m=-2 → 2cos2x=-2 → cos2x=-1 → 0≤x≤π 에서 x=π/2 하나.
    삼각방정식의 해를 제한된 구간에서 골라내는 T-범위 함정 1개. 통찰은 없다. 확인체크 ★2 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "수직 → m=-2 → 2cos2x=-2 → 구간 안의 해 x=π/2 → 접점 (π/2,0) → y=-2x+π"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$y=-2x+\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/157-310.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "sin 2x 의 주기 계수와 주어진 직선의 기울기를 바꾼다. 제약: cos(kx)=±1 또는 ±1/2 처럼 특수각이 되도록 목표 기울기를 도함수의 최댓값·최솟값 근처로 고를 것. |m| 이 도함수의 최댓값을 넘으면 접선이 존재하지 않으므로 반드시 확인하고, 구간을 넓히면 해가 여러 개가 되어 답이 하나가 아니게 된다."
    creative: "(1) 구간을 0≤x≤2π 로 넓혀 접선을 모두 구하게 하기(해가 둘 이상 · I-MI 발생 ★3) (2) 목표 기울기를 도함수 범위 밖으로 주고 존재하지 않음을 보이기(★3) (3) 수직 대신 '두 접선이 서로 수직'인 두 접점을 찾기(★3~4)."
```

```yaml
- id: GN-CALC2-158-e3
  page: 158
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    원점을 지나고 곡선 $y=e^{5x}$에 접하는 직선의 방정식.
  category: "곡선 밖의 점에서 그은 접선 → 접점 매개화 → 통과 조건"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "원점은 접점이 아니라는 것을 인식하고 접점을 (t, e^{5t}) 로 두어 통과 조건에서 t 를 역추적"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "곡선 밖의 점에서 그은 접선의 방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    이 단원의 갈림길. 주어진 점이 곡선 위에 없으므로 그 점의 x를 도함수에 바로 넣는 실수(T-표기)가 표준 오답이다.
    접점을 문자로 두고 접선이 원점을 지난다는 조건을 세우면 t=1/5 로 한 번에 정해진다. 필수 예제 ★2 출발 · 통찰 1개 d1 → ★2 유지.
  tier: star_2
  mechanism_primary: "접점 (t, e^{5t}) → 접선 y=5e^{5t}(x-t)+e^{5t} → 원점 대입 → t=1/5 → y=5ex"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$y=5ex$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/158-e3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 계수 5 를 다른 양수 k 로 바꾸면 접점은 항상 t=1/k, 접선은 y=kex 로 같은 꼴이 나온다. 제약: 지나는 점을 원점이 아닌 (0,c) 로 옮기면 t 방정식이 초월방정식이 되어 특수한 c 에서만 풀리므로, 원점 또는 x축 위의 점으로 제한할 것."
    creative: "(1) 지나는 점을 (a,0) 으로 일반화하면 접선의 개수 유형(159-e4)으로 승급(★3) (2) 접선과 곡선·y축이 둘러싼 넓이(적분 결합 · ★3) (3) y=e^{5x} 대신 y=ln x 로 바꾸면 같은 골조로 y=x/e (★2) (4) 원점에서 그은 두 접선의 기울기 곱을 묻는 방향은 164-331 형태(★4)."
```

```yaml
- id: GN-CALC2-158-311
  page: 158
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴⑵ 점 $(0,-1)$에서 곡선 $y=x\ln x$에, 점 $(-1,0)$에서 곡선 $y=\sqrt{x}$에 그은 접선의 방정식.
  category: "곡선 밖의 점에서 그은 접선 → 접점 매개화 → 통과 조건"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "주어진 점이 곡선 밖에 있음을 보고 접점을 문자로 두어 통과 조건에서 역추적"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "곡선 밖의 점에서 그은 접선의 방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    158-e3 의 골조를 로그·무리함수로 두 번 반복한다. ⑴ 은 통과 조건에서 로그항이 소거되고 ⑵ 는 근호 항이 정리되어 접점이 유리수로 나온다.
    정의역(x>0)을 놓치면 엉뚱한 접점이 남는다(T-범위). 확인체크 ★2 · 통찰 1개 d1 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "접점 (t, f(t)) → 접선식 → 주어진 점 대입해 t → 접선의 방정식"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $y=x-1$ ⑵ $y=\dfrac{1}{2}x+\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/158-311.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지나는 점의 좌표를 바꾼다. 제약: x ln x 는 (0,c) 꼴의 점에서만 t 방정식이 대수적으로 풀리고, √x 는 (-a,0) 꼴에서 t=a 로 깔끔하다. 정의역(x>0)을 벗어난 t 는 버릴 것."
    creative: "(1) 접선이 두 개 나오도록 지나는 점을 곡선의 볼록한 쪽으로 옮기기(★3) (2) 두 접선이 이루는 각을 묻기(★4) (3) 접점의 좌표 대신 접선의 y절편을 묻기(★2) (4) 지나는 점을 매개변수 a 로 두고 접선이 존재할 조건(★3)."
```

```yaml
- id: GN-CALC2-158-312
  page: 158
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    점 $(1,0)$에서 곡선 $y=e^{x-1}$에 그은 접선이 점 $\left(k,\dfrac{e}{2}\right)$를 지날 때 $k$.
  category: "곡선 밖의 점에서 그은 접선 → 접선 위의 다른 점"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "(1,0) 이 접점이 아님을 보고 접점을 (t, e^{t-1}) 로 두어 통과 조건에서 t=2 를 역추적"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "곡선 밖의 점에서 그은 접선이 지나는 점"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    접선을 구한 뒤 그 위의 점을 대입하는 한 단계가 붙었을 뿐 158-e3 과 같다. 통과 조건에서 e^{t-1} 이 통째로 약분되어 t 가 일차로 떨어진다.
    확인체크 ★2 · 통찰 1개 d1 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "접점 (t, e^{t-1}) → (1,0) 통과로 t=2 → 접선 y=ex-e → y=e/2 대입해 k"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{3}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/158-312.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지나는 점 (1,0) 의 x좌표와 마지막 점의 y좌표(e/2)를 바꾼다. 제약: 통과 조건이 e^{t-1}(1-(1-t))=... 처럼 지수가 약분되어 t 가 일차방정식으로 떨어지려면 지나는 점을 x축 위에 두는 것이 안전하다. 마지막 y값은 접선 y=ex-e 에 넣어 k 가 단순분수가 되게 고른다."
    creative: "(1) k 대신 접선과 x축·y축이 만드는 삼각형 넓이(★2) (2) 지나는 점을 (a,0) 으로 두고 접선이 특정 점을 지나는 a 를 묻기(역방향 두 겹 · ★3) (3) 곡선을 y=e^{x-1}+c 로 바꿔 접선이 원점을 지나는 c 를 묻기(★3)."
```

```yaml
- id: GN-CALC2-159-e4
  page: 159
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    점 $(a,0)$에서 곡선 $y=e^{-x^2}$에 그을 수 있는 서로 다른 접선이 $2$개가 되도록 하는 $a$의 값의 범위.
  category: "접선의 개수 → 접점 방정식의 실근 개수 → 판별식"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "접점을 (t, e^{-t^2}) 로 두고 (a,0) 통과 조건을 세워 t 의 방정식으로 환원"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'서로 다른 접선 2개' 를 't 에 대한 이차방정식이 서로 다른 두 실근을 가짐' 으로 옮겨 판별식 조건으로 처리"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "곡선에 그을 수 있는 접선의 개수(판별식)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    통과 조건에서 e^{-t^2} 이 통째로 약분되어 2t^2-2at+1=0 이라는 깨끗한 이차식이 남는 것이 이 유형의 설계 포인트다.
    접선의 개수를 근의 개수로 옮기는 동치 변환(d2)과 접점 역추적(d1)으로 통찰 2개 · M_total 8 → 필수 예제 ★2 출발에서 +1 하여 ★3.
    등호 포함 여부(T-경계)가 오답의 주요 원인이다.
  tier: star_3
  mechanism_primary: "접점 (t, e^{-t^2}) → (a,0) 통과 → 2t^2-2at+1=0 → 판별식 a^2-2>0"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$a<-\sqrt{2}$ 또는 $a>\sqrt{2}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/159-e4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접선의 개수를 1개(판별식=0) 또는 0개(판별식<0)로 바꾸면 같은 이차식에서 답만 갈린다. 지수의 계수(e^{-kx^2})를 바꾸면 판별식 조건이 a^2>2/k 로 바뀐다. 제약: 지나는 점이 x축 위(y=0)여야 지수항이 약분되어 t 가 이차로 떨어진다. y좌표를 0 이 아닌 값으로 두면 초월방정식이 되어 이 골조가 무너진다."
    creative: "(1) 점을 (0,b) 로 옮기고 개수를 묻기(그래프의 볼록성 논증이 필요해 ★4) (2) 접선이 2개일 때 두 접점의 x좌표의 곱을 묻기(근과 계수 · ★3) (3) 곡선을 y=xe^{-x} 로 바꾸면 159-314 형태 (4) 개수를 3개로 요구하면 삼차 이상이 필요해 곡선 자체를 바꿔야 한다."
```

```yaml
- id: GN-CALC2-159-313
  page: 159
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    점 $(3,1)$에서 곡선 $y=\dfrac{x^2+2}{x}$에 그을 수 있는 접선의 개수.
  category: "접선의 개수 → 접점 방정식의 실근 개수"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "접점을 (t, t+2/t) 로 두고 (3,1) 통과 조건을 t 의 방정식으로 환원"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "접선의 개수를 t 방정식의 실근 개수로 옮기고 t≠0 을 확인해 개수를 확정"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "곡선에 그을 수 있는 접선의 개수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    y=x+2/x 로 분리하면 y'=1-2/t^2 이 간단해진다. 통과 조건을 t^2 배 하면 삼차항이 서로 지워져 t^2+2t-3=0 으로 떨어지는 것이 핵심.
    t≠0 (정의역) 확인이 마지막 관문이다(T-범위). 확인체크 ★2 출발 · 통찰 2개 · M_total 7 → +1 하여 ★3.
  tier: star_3
  mechanism_primary: "y=x+2/x 분리 → 접점 (t, t+2/t) → (3,1) 통과 → t^2+2t-3=0 → t≠0 확인 → 2개"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/159-313.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지나는 점의 좌표와 분자의 상수(x^2+2)를 바꾼다. 제약: 분수식을 x+k/x 로 분리했을 때 통과 조건에서 t^3 항이 상쇄되어야 이차로 떨어진다. 지나는 점이 곡선 위에 오거나 t=0 이 해가 되는 좌표는 피할 것. 점이 두 가지 점근선 사이에 놓이면 접선 개수가 달라진다."
    creative: "(1) 개수 대신 두 접선의 기울기의 합·곱을 묻기(근과 계수 · ★3) (2) 지나는 점을 (a,1) 로 두고 접선이 1개인 a 를 묻기(★3) (3) 두 접선이 서로 수직인 점의 자취(★4) (4) 점을 곡선 위로 옮기면 접선이 1개가 되는 퇴화 사례로 반례 문항이 된다."
```

```yaml
- id: GN-CALC2-159-314
  page: 159
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    점 $(a,0)$ $(a\ne 0)$에서 곡선 $y=xe^{-x}$에 한 개의 접선을 그을 수 있을 때 $a$.
  category: "접선의 개수 조건(중근) → 판별식 = 0"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "접점을 (t, te^{-t}) 로 두고 (a,0) 통과 조건을 t 의 이차방정식 t^2-at+a=0 으로 환원"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'접선이 한 개' 를 '이차방정식이 중근' 으로 옮겨 판별식 a^2-4a=0 으로 처리하고 a≠0 으로 후보를 걸러냄"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "접선의 개수 조건으로 상수 정하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    159-e4 의 개수 조건을 '2개' 에서 '1개' 로 바꾼 쌍둥이 문항. 통과 조건에서 e^{-t} 이 약분되며 t^2-at+a=0 이 남는다.
    판별식 0 에서 a=0, 4 두 후보가 나오고 단서 a≠0 으로 하나를 버리는 것이 마지막 관문(T-경계).
    확인체크 ★2 출발 · 통찰 2개 · M_total 8 → +1 하여 ★3.
  tier: star_3
  mechanism_primary: "접점 (t, te^{-t}) → (a,0) 통과 → t^2-at+a=0 → 판별식 0 → a=0 또는 4 → a≠0 으로 4"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/159-314.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "곡선을 y=xe^{-kx} 로 두면 t 이차식의 계수만 바뀐다. 접선의 개수를 0개·2개로 바꾸면 부등식 문항이 된다. 제약: 지나는 점을 x축 위에 두어야 지수항이 약분된다. a=0 처럼 곡선 위의 점이 되어 퇴화하는 후보가 항상 하나 생기므로 단서로 배제하거나 검증 단계를 남겨 둘 것."
    creative: "(1) a≠0 단서를 빼고 '모든 a 를 구하시오' 로 바꾸면 a=0 의 기하적 의미(원점이 곡선 위)를 따져야 해 I-VF 가 생기고 ★4 (2) 접선이 2개인 a 의 범위(★3) (3) 접점의 x좌표를 묻기(★3) (4) 곡선을 y=x^2e^{-x} 로 바꾸면 t 방정식이 삼차가 되어 ★4."
```

```yaml
- id: GN-CALC2-160-e5
  page: 160
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    두 곡선 $y=2\ln x$, $y=kx^2$이 한 점에서 접할 때 상수 $k$.
  category: "두 곡선이 접할 조건 → 함숫값 일치 + 미분계수 일치"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'한 점에서 접한다' 를 접점 t 에서 f(t)=g(t) 와 f'(t)=g'(t) 가 동시에 성립한다는 두 식으로 옮김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "두 곡선이 접할 조건(공통접선)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    접선 자체를 구하지 않고 '접한다' 를 두 등식으로 번역하는 것이 전부다. 미분계수 조건 2/t=2kt 에서 k=1/t^2 을 얻어 함숫값 조건에 넣으면 ln t=1/2 로 바로 떨어진다.
    '접한다=만난다' 로 오해해 한 식만 쓰는 것이 표준 오답(T-표기). 필수 예제 ★2 출발 · 통찰 1개 d2 → ★2 유지(+1 후보는 통찰 2개 이상).
  tier: star_2
  mechanism_primary: "접점 t 에서 2ln t=kt^2, 2/t=2kt 연립 → k=1/t^2 대입 → ln t=1/2 → k=1/e"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{1}{e}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/160-e5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "로그의 계수(2ln x → a ln x)나 이차항의 꼴(kx^2 → kx^3)을 바꾼다. 제약: 미분계수 조건에서 k 를 t 만의 식으로 풀 수 있어야 하고, 대입 후 ln t 가 유리수로 떨어져야 k 가 e 의 유리수 거듭제곱으로 나온다."
    creative: "(1) 공통접선의 방정식까지 묻기(★3) (2) 접점의 좌표를 묻기(★2) (3) '접한다' 대신 '서로 다른 두 점에서 만난다' 로 바꾸면 그래프 개형·최대최소 논증이 필요해 ★4 (4) 두 곡선 모두에 미지의 상수를 두어 두 조건으로 둘을 동시에 결정(★3)."
```

```yaml
- id: GN-CALC2-160-315
  page: 160
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $0<x<\pi$에서 두 곡선 $y=a-2\sin^2 x$, $y=2\cos x$가 한 점에서 접할 때 상수 $a$.
  category: "두 곡선이 접할 조건(삼각) → 삼각방정식으로 접점 → 상수"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'접한다' 를 함숫값·미분계수 두 등식으로 옮기고, 미분계수 식 sin2x=sin x 를 sin x(2cos x-1)=0 으로 인수분해해 구간 안의 접점을 특정"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "두 곡선이 접할 조건(삼각함수)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    160-e5 의 골조에 삼각방정식 처리가 얹혔다. 미분계수 조건을 먼저 써야 a 가 빠진 방정식이 남는 것이 순서의 요령이다.
    구간 0<x<π 에서 sin x≠0 이므로 cos x=1/2 만 남기는 판단이 관문(T-범위). 확인체크 ★2 출발 · M_total 8 · 통찰 d2 → +1 하여 ★3.
  tier: star_3
  mechanism_primary: "미분계수 조건 -2sin2x=-2sin x → sin x(2cos x-1)=0 → 구간에서 x=π/3 → 함숫값 조건에 대입 → a=5/2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{5}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/160-315.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "sin^2 x 와 cos x 의 계수를 바꾼다. 제약: 미분계수 조건이 sin x 로 묶여 인수분해되어야 하고, 남은 cos x 값이 특수각(±1/2, ±√2/2)이어야 a 가 유리수로 떨어진다. 구간을 (0,π) 로 유지해야 해가 하나다."
    creative: "(1) 구간을 (0,2π) 로 넓혀 a 를 모두 구하게 하기(I-MI 추가 ★4) (2) 접점의 x좌표를 묻기(★3) (3) 2sin^2 x 를 1-cos2x 로 바꿔 쓴 형태로 제시(표현 전환이 먼저 필요해 ★3) (4) 두 곡선이 접하지 않을 a 의 범위(★4)."
```

```yaml
- id: GN-CALC2-160-316
  page: 160
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 곡선 $y=\dfrac{a}{2x}$, $y=e^x$이 한 점에서 공통인 접선을 가질 때($a\ne 0$) 그 접선의 방정식.
  category: "공통접선 → 두 조건 연립 → 접점 → 접선식"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'한 점에서 공통인 접선' 을 함숫값·미분계수 두 등식으로 옮긴 뒤 두 식을 나눠 a 를 소거하고 접점 t=-1 을 먼저 확정"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "두 곡선의 공통인 접선의 방정식"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    a/(2t)=e^t 와 -a/(2t^2)=e^t 를 변끼리 나누면 -1/t=1 로 t 가 한 줄에 나온다. a 를 먼저 구하려 들면 계산이 길어진다.
    접선까지 써야 하므로 단계가 한 겹 더 있다. 확인체크 ★2 출발 · M_total 8 · 통찰 d2 → +1 하여 ★3.
  tier: star_3
  mechanism_primary: "두 조건을 변끼리 나눠 a 소거 → t=-1 → 기울기 1/e, 접점 (-1,1/e) → y=x/e+2/e"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$y=\dfrac{1}{e}x+\dfrac{2}{e}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/160-316.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모의 계수(2x → kx)를 바꾸면 접점 t 는 그대로 -1 이고 a 만 바뀐다. 제약: 유리함수와 지수함수를 짝지어야 두 식을 나눌 때 a 가 소거되고 t 가 일차로 떨어진다. a≠0, t≠0 을 반드시 단서로 남길 것."
    creative: "(1) a 의 값을 묻기(★3) (2) 접점의 좌표만 묻기(★2) (3) y=a/(2x) 를 y=a/x^2 으로 바꾸면 t 가 -2 로 옮겨가며 같은 골조 (4) '공통접선' 을 '서로 다른 두 점에서 각각 접하는 공통접선' 으로 바꾸면 미지수가 둘이 되어 ★4~5."
```

```yaml
- id: GN-CALC2-161-e6
  page: 161
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    매개변수 $t$로 나타낸 곡선 $x=t^2-2t$, $y=3t+2$에서 $t=-1$에 대응하는 점에서의 접선의 방정식.
  category: "매개변수 곡선의 접선 → dy/dx=(dy/dt)/(dx/dt)"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "매개변수로 나타낸 곡선의 접선의 방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    dy/dx 를 (dy/dt)/(dx/dt) 로 쓰는 공식을 도입하는 문항. t=-1 을 넣어 기울기 -3/4 와 접점 (3,-1) 을 얻으면 끝난다.
    dy/dt 를 그대로 기울기로 쓰는 것이 표준 오답(T-표기). 통찰 0 · M_total 5 로 -1 후보이나 유형 도입 필수 예제라 ★2 유지.
  tier: star_2
  mechanism_primary: "dx/dt=2t-2, dy/dt=3 → dy/dx=3/(2t-2) → t=-1 에서 기울기 -3/4, 점 (3,-1) → 접선"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$y=-\dfrac{3}{4}x+\dfrac{5}{4}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/161-e6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x, y 의 t 식 계수와 주어진 t 값을 바꾼다. 제약: dx/dt≠0 인 t 를 고를 것(t=1 이면 접선이 수직이 되어 이 공식이 무너진다). 기울기가 유리수로 떨어지도록 dx/dt 가 정수가 되는 t 를 쓴다."
    creative: "(1) dx/dt=0 이 되는 t 를 주고 접선이 y축에 평행함을 보이게 하기(★3) (2) 매개변수를 소거해 x,y 관계식을 먼저 구한 뒤 접선을 구하는 다른 풀이와 비교(I-SC 발생 ★3) (3) 접선이 지나는 점이나 절편을 묻기(★2) (4) t 를 미지수로 두고 접선이 원점을 지나는 t 를 묻기(★3)."
```

```yaml
- id: GN-CALC2-161-317
  page: 161
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    매개변수 $\theta$로 나타낸 곡선 $x=1-\cos\theta$, $y=\theta-\sin\theta$의 $\theta=\dfrac{\pi}{2}$에 대응하는 점에서의 접선이 점 $(2,a)$를 지날 때 $a$.
  category: "매개변수 곡선의 접선 → 접선 위의 점 대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "매개변수로 나타낸 곡선의 접선과 지나는 점"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    사이클로이드 꼴이지만 θ=π/2 에서 dx/dθ=sinθ=1, dy/dθ=1-cosθ=1 이라 기울기가 1 로 떨어진다.
    접점 (1, π/2-1) 을 쓴 뒤 x=2 를 대입하면 a=π/2. 매개변수 표기 혼동(T-표기) 외에 함정은 없다. 확인체크 ★2 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "dy/dx=(1-cosθ)/sinθ → θ=π/2 에서 기울기 1, 접점 (1, π/2-1) → 접선에 x=2 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{\pi}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/161-317.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "대응시키는 θ 값을 π/3, 2π/3 등 특수각으로 바꾸고 지나는 점의 x좌표를 조정한다. 제약: sinθ≠0 이어야 하고(θ=0, π 에서는 접선이 수직), 기울기 (1-cosθ)/sinθ = tan(θ/2) 가 특수각 값이 되는 θ 를 골라야 a 가 깔끔하다."
    creative: "(1) 기울기가 tan(θ/2) 로 정리됨을 이용해 기울기가 1인 θ 를 역으로 묻기(I-RT 발생 ★3) (2) θ=0 근처에서 접선의 극한 방향을 묻기(★4) (3) 접선의 y절편을 θ 의 식으로 나타내기(Ma 상승 ★3)."
```

```yaml
- id: GN-CALC2-161-318
  page: 161
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    매개변수 $t$로 나타낸 곡선 $x=\dfrac{1-t^2}{1+t^2}$, $y=\dfrac{2t}{1+t^2}$ 위의 점 $\left(-\dfrac{3}{5},\dfrac{4}{5}\right)$를 지나고 이 점에서의 접선에 수직인 직선의 방정식.
  category: "매개변수 곡선의 법선 → 점에 대응하는 t 역산"
  M: {s: 3, k: 3, a: 1, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "좌표로 주어진 점에 대응하는 매개변수 t 를 두 식에서 역으로 찾아야 미분을 시작할 수 있음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "매개변수로 나타낸 곡선의 법선의 방정식"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    점이 t 가 아니라 좌표로 주어져 t=2 를 먼저 역산해야 한다. 여기가 앞의 두 매개변수 문항과 갈리는 지점이다.
    dx/dt, dy/dt 모두 몫미분이라 계산이 무겁지만 (1+t^2)^2 이 약분되어 dy/dx=(1-t^2)/(-2t) 로 정리된다. 법선 기울기 -4/3 으로 뒤집는 단계까지.
    확인체크 ★2 출발 · M_total 8 · 통찰 1개 → +1 하여 ★3.
  tier: star_3
  mechanism_primary: "두 좌표식에서 t=2 역산 → dy/dx=(1-t^2)/(-2t)=3/4 → 법선 기울기 -4/3 → 점을 지나는 직선"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$y=-\dfrac{4}{3}x$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/161-318.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이 곡선은 단위원의 유리매개화라 주어지는 점은 피타고라스 삼조(±3/5,±4/5), (±5/13,±12/13) 중에서 고르면 t 가 유리수로 떨어진다. 제약: 점이 반드시 곡선 위(x^2+y^2=1, 단 (-1,0) 제외)여야 하고 t 가 두 식에서 같은 값으로 나오는지 확인할 것."
    creative: "(1) 매개변수를 소거해 x^2+y^2=1 임을 보이고 법선이 원점을 지남을 설명하게 하기(I-RT·I-SYM 발생 ★4) (2) 접선의 방정식을 묻기(★3) (3) t 를 직접 주면 역산이 사라져 ★2 (4) 접선과 두 좌표축이 만드는 삼각형 넓이(★3)."
```

```yaml
- id: GN-CALC2-162-e7
  page: 162
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    곡선 $x^2+2xy-y^3+1=0$ 위의 점 $(0,1)$에서의 접선의 방정식.
  category: "음함수 미분 → 접점 대입 → 접선식"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "음함수 f(x,y)=0 의 접선의 방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y 를 x 의 함수로 보고 양변을 미분하는 절차를 도입하는 문항. 2xy 항에서 곱의 미분을, y^3 항에서 합성함수 미분을 쓰는 것이 관문(T-표기).
    y' 를 정리하지 않고 접점을 바로 대입하면 계산이 짧다. 필수 예제 ★2 출발 · 통찰 0 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "양변 x로 미분 → 2x+2y+2xy'-3y^2y'=0 → (0,1) 대입 → y'=2/3 → y=2x/3+1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$y=\dfrac{2}{3}x+1$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/162-e7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 항의 계수와 차수를 바꾼다. 제약: 주어진 점이 반드시 곡선 위여야 하고(대입해 확인), 접점에서 y' 의 분모(∂F/∂y)가 0 이 아니어야 한다. 접점을 x=0 이나 y=0 처럼 한 좌표가 0 인 점으로 두면 대입 후 계산이 한 줄로 끝난다."
    creative: "(1) 같은 점에서의 법선(★2) (2) 접선의 x절편·y절편(162-319 형태 ★2) (3) 곡선에 미지의 상수를 넣고 접선의 기울기를 주어 상수를 결정(162-320 형태 ★3) (4) 접선이 x축에 평행한 점을 모두 찾기(y'=0 조건 · ★3~4)."
```

```yaml
- id: GN-CALC2-162-319
  page: 162
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    곡선 $\sqrt{x}+\sqrt{y}=5$ 위의 점 $(4,9)$에서의 접선의 $x$절편과 $y$절편의 합.
  category: "음함수 미분 → 접선 → 두 절편의 합"
  M: {s: 3, k: 2, a: 1, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "음함수 접선의 절편"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    음함수 미분으로 y'=-√y/√x=-3/2 를 얻고 접선을 쓴 뒤 두 절편을 더하면 된다. 절차가 한 방향으로만 흐른다.
    이 곡선은 절편의 합이 항상 25(=5^2)로 일정한 성질이 있지만 문제는 한 점만 묻고 있어 발견을 요구하지 않는다. 확인체크 ★2 · 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "음함수 미분 → y'=-√y/√x=-3/2 → 접선 y=-3x/2+15 → x절편 10, y절편 15 → 합 25"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$25$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/162-319.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변의 상수 5 와 접점을 바꾼다. 제약: 접점의 두 좌표가 모두 완전제곱수여야 √x, √y 가 유리수로 떨어지고 기울기가 유리수가 된다(예: 상수 5 → (1,16),(4,9),(9,4),(16,1))."
    creative: "(1) 접점을 문자로 두고 절편의 합이 항상 25 임을 보이게 하면 I-PD·I-SYM 이 생겨 ★4 (2) 접선과 두 좌표축이 만드는 삼각형의 넓이의 최솟값(★4) (3) 절편의 곱을 묻기(★2) (4) 곡선을 x^{2/3}+y^{2/3}=a 로 바꾸면 같은 종류의 불변량 문항(★4)."
```

```yaml
- id: GN-CALC2-162-320
  page: 162
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    곡선 $x^3+y^2+ax+by=0$ 위의 점 $(1,2)$에서의 접선의 기울기가 $-1$일 때 상수 $a$, $b$에 대하여 $ab$.
  category: "음함수 접선 → 곡선 위 조건 + 기울기 조건 연립"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'점이 곡선 위' 와 '그 점에서의 기울기가 -1' 두 독립 조건을 a, b 에 대한 연립일차방정식으로 결합"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "음함수 접선의 기울기 조건으로 상수 정하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    기울기 조건만 쓰면 식이 하나뿐이라 미지수 둘을 못 정한다. 점이 곡선 위라는 조건을 함께 세우는 것이 이 문항의 관문이고, 그것을 빠뜨리는 것이 표준 오답(T-범위).
    두 식 a+2b=-5, a-b=1 을 풀면 (a,b)=(-1,-2). 확인체크 ★2 출발 · 통찰 1개 d2 · M_total 8 → +1 하여 ★3.
  tier: star_3
  mechanism_primary: "곡선 위 조건 a+2b=-5 + 음함수 미분 후 y'=-1 조건 a-b=1 연립 → a=-1, b=-2 → ab=2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/162-320.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접점과 목표 기울기를 바꾼다. 제약: 두 조건이 a, b 에 대한 일차 연립이 되도록 상수를 일차항에만 붙이고, 연립의 해가 정수로 떨어지게 접점·기울기를 역산해서 고를 것. 접점에서 ∂F/∂y=2y+b≠0 도 확인."
    creative: "(1) a+b 나 a-b 를 묻기(★3 유지) (2) 기울기 대신 '접선이 원점을 지난다' 로 조건을 주기(★3) (3) 미지수를 하나로 줄이면 조건 통합이 사라져 ★2 (4) 접선이 x축에 평행할 조건을 추가해 세 조건을 다루기(★4)."
```

### 연습문제 STEP 1

```yaml
- id: GN-CALC2-163-321
  page: 163
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    곡선 $y=\sqrt{1+\sin\pi x}$ 위의 점 $(1,1)$에서의 접선의 방정식이 $y=ax+b$일 때 $a-b$.
  category: "접점이 주어진 접선 → 계수 읽기"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "접점이 주어진 접선의 계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    무리함수 안에 삼각함수가 든 이중 합성이라 미분에서 π 와 cos πx 를 모두 챙겨야 한다(T-단위).
    x=1 에서 cos π=-1 이므로 기울기 -π/2. 접선을 써서 a, b 를 읽는 것이 전부다. STEP 1 ★2 출발 · 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "합성 미분으로 y'=πcosπx/(2√(1+sinπx)) → x=1 에서 -π/2 → y=-πx/2+π/2+1 → a-b"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-\pi-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/163-321.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안의 상수와 sin 의 주기 계수를 바꾸고 접점을 옮긴다. 제약: 접점에서 1+sin(kx) 가 완전제곱(1 또는 4)이 되어 근호가 벗겨져야 하고, 그 점에서 1+sin(kx)≠0 이어야 미분계수가 존재한다(sin=-1 인 점은 피할 것)."
    creative: "(1) a+b 나 ab 를 묻기(★2 유지) (2) 접선이 x축과 만나는 점을 묻기(★2) (3) 1+sinπx 가 0 이 되는 점을 접점으로 주고 미분불가능을 판정하게 하기(★3) (4) 접점을 문자로 두고 기울기의 최댓값을 묻기(★4)."
```

```yaml
- id: GN-CALC2-163-322
  page: 163
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    곡선 $y=e^x$에 접하고 기울기가 $1$인 직선과 원점 사이의 거리.
  category: "기울기가 주어진 접선 → 점과 직선 사이의 거리"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights:
    - step: 2
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "구한 접선을 일반형으로 고쳐 도형의 방정식 단원의 점과 직선 사이의 거리 공식으로 넘김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "접선과 원점 사이의 거리"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e^x=1 에서 접점 (0,1), 접선 y=x+1 까지는 두 줄이다. 남은 절반은 미적분이 아니라 거리 공식이라 단원 경계를 한 번 넘는다(I-XU d1).
    M_total 4 로 -1 후보이지만 서로 다른 단원의 도구를 이어야 해서 STEP 1 출발 ★2 를 유지했다.
  tier: star_2
  mechanism_primary: "e^x=1 → 접점 (0,1) → 접선 x-y+1=0 → 원점까지의 거리 1/√2"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{\sqrt{2}}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/163-322.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기울기를 m>0 인 다른 값으로 바꾸면 접점이 (ln m, m) 이 된다. 제약: 거리가 유리수·간단한 무리수로 떨어지려면 m=1 처럼 ln m 이 깔끔한 값이어야 한다. m≤0 이면 접선이 없으므로 양수로 제한할 것."
    creative: "(1) 원점 대신 다른 점까지의 거리(★2) (2) 접선과 두 좌표축이 만드는 삼각형 넓이(★2) (3) 곡선을 y=ln x 로 바꿔 같은 거리를 묻고 y=x 대칭으로 값이 같음을 보이게 하기(I-SYM ★3) (4) 기울기를 m 으로 두고 거리를 m 의 함수로 나타내 최솟값을 묻기(★4)."
```

```yaml
- id: GN-CALC2-163-323
  page: 163
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    원점에서 곡선 $y=\dfrac{\ln x}{x}$에 그은 접선이 점 $\left(a,\dfrac{1}{2}\right)$을 지날 때 $a$.
  category: "곡선 밖의 점에서 그은 접선 → 접선 위의 점"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "원점이 접점이 아님을 보고 접점을 (t, ln t/t) 로 두어 원점 통과 조건에서 ln t=1/2 를 역추적"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "원점에서 그은 접선"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    원점을 지나는 접선이므로 통과 조건이 f(t)/t=f'(t) 한 줄로 정리되고, 몫미분 결과 (1-ln t)/t^2 과 맞추면 ln t=1/2 가 바로 나온다.
    정의역 x>0 확인이 필요하다(T-범위). STEP 1 ★2 출발 · 통찰 1개 d1 · M_total 7 → ★2 유지(통찰 2개·M_total 8 중 어느 쪽도 못 넘겨 +1 하지 않음).
  tier: star_2
  mechanism_primary: "접점 (t, ln t/t) → 원점 통과 → ln t=1-ln t → t=√e → 접선 y=x/(2e) → y=1/2 대입해 a=e"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$e$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/163-323.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "마지막 점의 y좌표(1/2)를 바꾸면 a 만 비례해서 바뀐다. 곡선을 y=(ln x)/x^2 이나 y=x ln x 로 바꾸면 ln t 가 다른 유리수로 떨어진다. 제약: 지나는 점을 원점으로 둬야 통과 조건이 f(t)=t f'(t) 로 단순해진다. t>0 을 반드시 확인."
    creative: "(1) 접선의 기울기나 접점의 좌표를 묻기(★2) (2) 원점 대신 (0,c) 에서 그은 접선의 개수를 묻기(★3~4) (3) 접선과 곡선·x축이 둘러싼 넓이(적분 결합 ★4) (4) 이 곡선의 최댓값(x=e)과 접선을 함께 묻는 그래프 개형 문항(★3)."
```

```yaml
- id: GN-CALC2-163-324
  page: 163
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $0<t<\pi$에서 두 곡선 $y=k-\cos^2 x$, $y=\cos x$가 $x=t$인 점에서 접할 때 상수 $k$.
  category: "두 곡선이 접할 조건(삼각) → 접점 → 상수"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'x=t 에서 접한다' 를 함숫값·미분계수 두 등식으로 옮기고 미분계수 식을 sin x(2cos x+1)=0 으로 인수분해해 접점을 특정"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "두 곡선이 접할 조건(삼각함수)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    160-315 와 같은 골조이고 부호만 반대다. 미분계수 조건 2cos x sin x=-sin x 에서 구간 안 sin x≠0 이므로 cos t=-1/2, t=2π/3.
    함숫값 조건에 넣으면 k-1/4=-1/2 로 k=-1/4. STEP 1 ★2 출발 · M_total 8 · 통찰 d2 → +1 하여 ★3. STEP 1 치고는 무거운 편이다.
  tier: star_3
  mechanism_primary: "미분계수 조건 → sin x(2cos x+1)=0 → 구간에서 cos t=-1/2 → 함숫값 조건 대입 → k=-1/4"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-\dfrac{1}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/163-324.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "cos^2 x 와 cos x 의 계수를 바꾼다. 제약: 미분계수 조건이 sin x 로 묶여야 하고 남는 cos t 값이 특수각이어야 k 가 유리수. 구간 (0,π) 를 유지해야 sin x≠0 으로 해를 하나로 좁힐 수 있다."
    creative: "(1) 접점의 x좌표 t 를 묻기(★3) (2) 구간을 빼고 모든 k 를 구하게 하면 t=0,π 퇴화 사례 검증이 생겨 I-VF ★4 (3) cos^2 x 를 (1+cos2x)/2 로 바꿔 제시(표현 전환 선행 ★3) (4) 두 곡선이 만나지 않을 k 의 범위(★4)."
```

```yaml
- id: GN-CALC2-163-325
  page: 163
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    곡선 $\dfrac{x^2}{2}-\dfrac{y^2}{4}=1$ 위의 점 $(2,2)$에서의 접선과 $x$축 및 $y$축으로 둘러싸인 도형의 넓이.
  category: "음함수(이차곡선) 접선 → 절편 → 삼각형 넓이"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 3
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "접선의 방정식을 두 절편으로 옮겨 좌표축과 만드는 삼각형의 밑변·높이로 읽는 대수→기하 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "음함수(이차곡선) 접선과 좌표축이 만드는 도형의 넓이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    음함수 미분으로 y'=2x/y=2 → 접선 y=2x-2. x절편 1, y절편 -2 이고 넓이는 절편의 절댓값으로 계산해야 한다(T-부호).
    도형화가 한 겹 붙었지만 각 단계는 짧다. STEP 1 ★2 출발 · 통찰 1개 d1 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "음함수 미분 → y'=2x/y=2 → 접선 y=2x-2 → 절편 1, -2 → 삼각형 넓이 1"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/163-325.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "쌍곡선의 두 분모(2, 4)와 접점을 바꾼다. 제약: 접점이 곡선 위여야 하고 두 좌표가 정수여야 기울기·절편이 유리수로 떨어진다. y=0 인 꼭짓점에서는 접선이 수직이라 삼각형이 만들어지지 않으므로 피할 것."
    creative: "(1) 타원 x^2/a+y^2/b=1 로 바꾸면 같은 골조에 부호 함정이 사라져 ★2 (2) 접점을 문자로 두고 삼각형 넓이의 최솟값을 묻기(★4) (3) 접선이 점근선과 만나는 두 점의 중점이 접점임을 보이게 하기(I-SYM ★4) (4) 넓이 대신 둘레를 묻는 방향은 계산만 무거워져 권하지 않는다."
```

### 연습문제 STEP 2

```yaml
- id: GN-CALC2-163-326
  page: 163
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    곡선 $y=(\ln x)^2$ 위의 점 $(t,(\ln t)^2)$에서의 접선의 $x$절편을 $f(t)$라 할 때 $f'(\sqrt{e})$.
  category: "접선의 절편을 매개변수의 함수로 → 다시 미분"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "접선의 x절편이라는 기하량을 t 의 함수 f(t)=t-t ln t/2 로 옮겨 놓고, 그 함수를 다시 미분 대상으로 삼음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "접선의 절편을 t 의 함수로 두고 미분"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    접선을 한 점이 아니라 움직이는 점 t 에서 세우고, 거기서 나온 절편을 다시 함수로 보는 두 겹 구조가 이 문항의 전부다.
    f(t)=t-(t ln t)/2 로 정리한 뒤 곱의 미분을 한 번 더 쓰면 f'(t)=1/2-(ln t)/2. STEP 2 ★3 출발 · 통찰 1개 d2 · M_total 8 → ★3 유지.
  tier: star_3
  mechanism_primary: "접점 t 에서 접선 → y=0 으로 x절편 f(t)=t-t ln t/2 → 곱의 미분으로 f'(t) → t=√e 대입"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{1}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/163-326.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "대입하는 t 값(√e → e, e^2)을 바꾸면 ln t 만 갈린다. 곡선을 y=(ln x)^3 나 y=x ln x 로 바꿔도 같은 골조다. 제약: t=1 은 ln t=0 이라 접선이 x축에 평행해져 x절편이 없으므로 피할 것. f(t) 를 정리할 때 ln t 로 나누는 과정이 들어가면 ln t≠0 을 명시."
    creative: "(1) x절편 대신 y절편을 f(t) 로 두기(★3) (2) f(t) 의 최댓값을 묻기(증감표 결합 ★4) (3) lim_{t→∞} f(t)/t 를 묻기(극한 결합 ★4) (4) 절편을 그대로 묻고 미분을 빼면 ★2 로 내려간다."
```

```yaml
- id: GN-CALC2-164-327
  page: 164
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["평가원 기출"]
  category_type: "연습문제"
  summary: |
    $0<t<\pi$에서 곡선 $y=\sin x$ 위의 점 $\mathrm{P}(t,\sin t)$에서의 접선과 $\mathrm{P}$를 지나고 기울기가 $-1$인 직선이 이루는 예각을 $\theta$라 할 때 $\lim\limits_{t\to\pi-}\dfrac{\tan\theta}{(\pi-t)^2}$. 5지선다.
  category: "두 직선이 이루는 각 → tan 덧셈정리 → 삼각함수 극한"
  M: {s: 3, k: 3, a: 2, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'두 직선이 이루는 예각' 이라는 기하 조건을 tan 덧셈정리로 옮겨 tanθ=|(cos t+1)/(1-cos t)| 라는 대수식으로 바꿈"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "t→π- 에서 1+cos t 를 (π-t)^2 과 같은 위수로 보고 반각 또는 sin x/x 꼴로 고쳐 극한을 유한값으로 환원"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "접선이 이루는 각과 삼각함수 극한"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    접선 구하기는 한 줄(기울기 cos t)이고 무게중심은 각을 tan 으로 옮긴 뒤 0/0 꼴 극한을 처리하는 데 있다.
    예각이므로 절댓값을 씌워야 하고(T-부호) 좌극한이라는 점도 챙겨야 한다(T-범위). 1+cos t 가 (π-t)^2 과 같은 2차 위수라는 관찰이 답을 가른다.
    STEP 2 ★3 출발 · 평가원 기출 · 통찰 2개(모두 d2) → +1 하여 ★4. 이 범위에서 가장 무거운 문항이다.
  tier: star_4
  mechanism_primary: "접선 기울기 cos t → tanθ=|(cos t+1)/(1-cos t)| → 1+cos t 를 (π-t)^2 위수로 근사 → 극한 1/4"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '③'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/164-327.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "비교 직선의 기울기(-1)와 분모의 차수((π-t)^2)를 바꿀 수 있다. 제약: 극한이 0 도 ∞ 도 아닌 유한값이 되려면 분모의 차수가 분자의 소멸 위수와 정확히 맞아야 한다. 기울기를 -1 이 아닌 값으로 바꾸면 t→π- 에서 분자가 1차로 소멸해 분모도 1차로 낮춰야 한다."
    creative: "(1) t→0+ 로 바꾸면 소멸 위수가 달라져 분모 차수를 다시 맞춰야 한다(★4) (2) 곡선을 y=cos x 로 바꾸고 대응하는 극한점을 옮기기(★4) (3) 각 대신 두 직선의 교각의 이등분선 기울기를 묻기(★5 후보) (4) 극한을 빼고 t=2π/3 에서 tanθ 값만 묻기(★3 으로 하강)."
```

```yaml
- id: GN-CALC2-164-328
  page: 164
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    점 $(a,0)$에서 곡선 $y=(x-1)e^x$에 서로 다른 두 접선을 그을 수 있는 $a$의 범위가 $a<\alpha$ 또는 $a>\beta$일 때 $\alpha^2+\beta^2$.
  category: "접선의 개수 → 접점 이차방정식의 판별식 → 경계값"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "접점을 (t,(t-1)e^t) 로 두고 (a,0) 통과 조건을 t^2-(a+1)t+1=0 으로 환원"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'서로 다른 두 접선' 을 이차방정식의 서로 다른 두 실근으로 옮기고 판별식 (a+1)^2>4 를 풀어 경계값 α, β 를 읽음"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "접선의 개수 조건으로 상수의 범위 정하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    y'=te^t 라 통과 조건에서 e^t 이 통째로 약분되고 t^2-(a+1)t+1=0 이 남는다. 159-e4 와 완전히 같은 골조를 (x-1)e^x 로 갈아 끼운 문항이다.
    판별식 부등식을 푼 뒤 α=-3, β=1 을 부등호 방향에 맞게 짝짓는 것이 마지막 관문(T-경계).
    통찰 2개로 +1 후보였지만 159-e4 의 반복이라 올리지 않고 STEP 2 출발 ★3 을 유지했다.
  tier: star_3
  mechanism_primary: "접점 (t,(t-1)e^t) → (a,0) 통과 → t^2-(a+1)t+1=0 → 판별식>0 → a<-3 또는 a>1 → α^2+β^2=10"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$10$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/164-328.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "곡선을 y=(x-k)e^x 로 두면 t 이차식의 상수항이 k 로 바뀌어 판별식 조건이 (a+1)^2>4k 가 된다. 접선 개수를 1개·0개로 바꾸면 등식·역부등식 문항이 된다. 제약: 지나는 점은 x축 위에 두어야 e^t 이 약분된다. k≤0 이면 판별식이 항상 양수가 되어 문제가 성립하지 않는다."
    creative: "(1) αβ 나 α+β 를 묻기(근과 계수 · ★3) (2) 두 접점의 x좌표의 합을 a 의 식으로 나타내기(★3) (3) 두 접선이 서로 수직인 a 를 묻기(★4~5) (4) 지나는 점을 (0,b) 로 옮기면 약분이 깨져 그래프 개형 논증이 필요해 ★4."
```

```yaml
- id: GN-CALC2-164-329
  page: 164
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    매개변수 $t$로 나타낸 곡선 $x=e^t-e^{-t}$, $y=2e^t$ 위의 점 $(a,b)$에서의 접선의 기울기가 $\dfrac{9}{5}$일 때 $ab$.
  category: "매개변수 곡선 → 기울기 조건으로 t 역산 → 좌표"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "매개변수 곡선에서 기울기가 주어진 접점 찾기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    dy/dx=2e^t/(e^t+e^{-t}) 를 분자·분모에 e^t 을 곱해 2e^{2t}/(e^{2t}+1) 로 고치면 e^{2t}=9 가 바로 나온다. 이 정리 없이 풀면 식이 지저분해진다.
    다만 각 단계가 모두 표준 절차라 통찰로 세지 않았다(T-표기: dy/dt 를 기울기로 착각). STEP 2 ★3 출발 · M_total 7 → ★3 유지.
  tier: star_3
  mechanism_primary: "dy/dx=2e^{2t}/(e^{2t}+1)=9/5 → e^t=3 → a=8/3, b=6 → ab=16"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$16$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/164-329.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주어진 기울기 9/5 와 y 식의 계수를 바꾼다. 제약: 2X/(X+1)=m 을 풀었을 때 X=e^{2t} 가 완전제곱수여야 e^t 이 유리수로 떨어지고 a, b 가 분수로 정리된다. 기울기는 0<m<2 범위 안이어야 해가 존재한다."
    creative: "(1) 기울기의 범위(0<dy/dx<2)를 묻기(★4) (2) 매개변수를 소거해 x, y 관계식을 구한 뒤 음함수 미분으로 푸는 다른 풀이와 비교(I-SC ★4) (3) 접선의 y절편을 묻기(★3) (4) 접선이 원점을 지나는 t 를 묻기(★3)."
```

```yaml
- id: GN-CALC2-164-330
  page: 164
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    곡선 $y^3-3y^2+10x+4y=0$의 접선 중에서 기울기가 최소인 접선의 방정식.
  category: "음함수 미분 → 기울기를 y 의 식으로 → 최솟값"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "음함수 미분 결과를 y'=-10/(3(y-1)^2+1) 로 정리해 기울기를 y 만의 식으로 옮김"
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'기울기가 최소' 라는 결과 조건에서 분모가 최소가 되는 y=1 을 역추적(분자가 음수라 분모 최소가 기울기 최소)"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "접선의 기울기의 최솟값(음함수)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    x 가 일차로만 들어 있어 음함수 미분 뒤 y' 가 y 만의 식으로 완전히 분리되는 것이 설계의 핵심이다.
    분모 3y^2-6y+4 를 3(y-1)^2+1 로 완전제곱해 최솟값 1 을 읽고, 분자가 -10 이라 부호가 뒤집히므로 '분모 최소 = 기울기 최소' 임을 판단해야 한다(T-부호). 이 부호를 놓치면 최대·최소가 바뀐다.
    STEP 2 ★3 출발 · 통찰 2개(d2 둘) → +1 하여 ★4.
  tier: star_4
  mechanism_primary: "음함수 미분 → y'=-10/(3(y-1)^2+1) → 분모 최소 y=1 → 기울기 -10, 접점 (-1/5,1) → y=-10x-1"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$y=-10x-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/164-330.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x 의 계수(10)와 y 의 삼차·이차·일차 계수를 바꾼다. 제약: x 는 반드시 일차항으로만 넣어야 y' 가 y 만의 식이 된다. 분모의 이차식이 실근을 갖지 않아야(판별식<0) 접선이 모든 y 에서 존재하고 최솟값이 유한하다. 완전제곱의 꼭짓점 y 가 정수가 되게 계수를 맞출 것."
    creative: "(1) 기울기가 최대인 접선을 묻기(부호 판단 방향만 반대 · ★4) (2) 기울기의 범위를 묻기(★4) (3) 분모의 이차식이 실근을 갖도록 계수를 바꾸면 수직접선이 생겨 논의가 갈리고 ★5 후보 (4) x 를 이차항으로 넣으면 y' 가 x,y 의 식이 되어 이 골조가 무너진다."
```

### 연습문제 실력 UP

```yaml
- id: GN-CALC2-164-331
  page: 164
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    점 $(2,0)$에서 곡선 $y=xe^x$에 그은 두 접선의 기울기를 $m_1$, $m_2$라 할 때 $m_1m_2$.
  category: "곡선 밖의 두 접선 → 접점 이차방정식 → 근과 계수로 대칭식"
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "접점을 (t,te^t) 로 두고 (2,0) 통과 조건을 t^2-2t-2=0 으로 환원"
    - step: 2
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 접점을 각각 구하지 않고 m1m2=(1+t1)(1+t2)e^{t1+t2} 라는 대칭식으로 보아 근과 계수의 관계로 한 번에 계산"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "곡선 밖의 점에서 그은 두 접선의 기울기의 곱(근과 계수)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    t^2-2t-2=0 의 근이 무리수라 접점을 직접 구하면 지수에 무리수가 들어가 손을 댈 수 없다. 기울기의 곱이 두 근에 대한 대칭식이라는 것을 보고 합 2, 곱 -2 만 쓰는 것이 유일한 길이다.
    지수부가 e^{t1+t2}=e^2 로, 나머지가 1+(t1+t2)+t1t2=1 로 정리되어 답이 e^2 로 떨어진다.
    실력 UP ★4 출발 · 통찰 2개(SYM d2 포함) → ★4 유지. ★5 게이트(통찰 3개 이상)는 넘지 못한다.
  tier: star_4
  mechanism_primary: "접점 (t,te^t) → (2,0) 통과 → t^2-2t-2=0 → m1m2=(1+t1)(1+t2)e^{t1+t2}=1·e^2"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$e^2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/164-331.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지나는 점의 x좌표(2)를 바꾸면 t 이차식의 계수가 바뀌고 답은 (1+합+곱)e^{합} 으로 계산된다. 제약: 지나는 점은 x축 위여야 e^t 이 약분되고, 판별식>0 이어야 접선이 둘 생긴다. 근이 무리수여야 대칭식을 쓸 수밖에 없는 설계가 유지된다(근이 정수면 직접 계산으로 풀려 통찰이 사라진다)."
    creative: "(1) m1+m2 를 묻기(지수부가 e^{t1}+e^{t2} 라 대칭식으로 정리되지 않아 문제가 성립하지 않음 — 변형 금지 지점) (2) 두 접점의 x좌표의 곱을 묻기(★3 으로 하강) (3) 곡선을 y=(x-1)e^x 로 바꿔 164-328 과 이어 붙인 세트 문항(★4) (4) 지나는 점을 (a,0) 으로 두고 m1m2 를 a 의 식으로 나타내기(★5 후보)."
```

```yaml
- id: GN-CALC2-164-332
  page: 164
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    함수 $f(x)=e^{ax}$ $(a>0)$의 그래프와 그 역함수의 그래프가 서로 접할 때 상수 $a$.
  category: "역함수 그래프의 y=x 대칭 → 접점이 y=x 위 → 접할 조건"
  M: {s: 3, k: 2, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-SYM
      depth: 3
      effective_depth: 3
      signal_ref: []
      description: "두 그래프가 y=x 에 대해 대칭이므로 서로 접한다면 접점이 y=x 위에 있다는 것을 써서 역함수를 구하지 않고 f(x)=x 로 바꿈"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'접한다' 를 f(t)=t 와 f'(t)=1 두 등식으로 옮겨 a 를 결정"
  insight_count: 2
  depth_score: 2.50
  type_id: null
  type_hint: "함수와 역함수의 그래프가 접할 조건(y=x 대칭)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    역함수 y=(ln x)/a 를 직접 구해 연립하려 들면 초월방정식에 막힌다. y=x 대칭이라는 구조를 써서 접점을 y=x 위로 옮기는 한 수가 전부를 결정한다.
    그 다음은 e^{at}=t 와 a e^{at}=1 을 연립해 t=1/a → e=1/a → a=1/e. 대칭 논증을 쓰지 않는 갈래는 사실상 막혀 있다.
    실력 UP ★4 출발 · I-SYM d3 로 +1 후보였으나 ★5 는 통찰 3개 이상을 요구하고 novelty_score 도 0 이라 ★4 로 둔다.
  tier: star_4
  mechanism_primary: "y=x 대칭 → 접점이 y=x 위 → e^{at}=t 와 a e^{at}=1 연립 → t=1/a, e=1/a → a=1/e"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$\dfrac{1}{e}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/164-332.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "바꿀 수 있는 수가 거의 없다. 밑을 e 에서 다른 수로 옮기면 a 가 로그로 지저분해지므로 f(x)=e^{ax} 꼴을 유지하는 것이 좋다. 제약: a>0 단서가 있어야 접점이 제1사분면에 놓이고 답이 하나다. a 가 1/e 보다 크면 두 그래프가 만나지 않고 작으면 두 점에서 만난다는 구조를 그대로 둘 것."
    creative: "(1) 두 그래프가 서로 다른 두 점에서 만날 a 의 범위(같은 대칭 논증 + 개수 판정 · ★5 후보) (2) f(x)=a^x 로 바꾸기(밑을 미지수로 · 같은 골조 ★4) (3) 접점의 좌표를 묻기(★4) (4) 'y=x 위에서 접한다' 를 단서로 미리 주면 대칭 통찰이 사라져 ★3 으로 내려간다."
```

## 표본 판정 요약 (34문)

- ★ 분포: ★1 2 · ★2 17 · ★3 11 · ★4 4 · ★5 0
- 통찰형 21 · 절차형 13 · premium 0
- 통찰 유형 분포(연 26개 라벨): I-EQV 10 · I-BW 9 · I-RT 3 · I-SYM 2 · I-CON 1 · I-XU 1
- type_hint 상위(골조별로 묶은 수): 「곡선 밖의 점에서 그은 접선(개수 포함)」 9 · 「두 곡선이 접할 조건·공통접선」 5 · 「음함수 곡선의 접선」 5 · 「기울기가 주어진 접선」 5 · 「접점이 주어진 접선·법선」 5 · 「매개변수 곡선의 접선」 4 · 기타(각·극한, 절편 함수) 1
- 구역별 ★ 중앙값: 필수·발전 예제 ★2 · STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4 — 벤더 신호와 판정이 대체로 일치한다.
- 그림: 0문(이 범위에는 그림이 딸린 문항이 없다)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CALC2-157-e2 · GN-CALC2-161-e6 | 통찰 0 · M_total 5 로 −1 후보이나 각각 「기울기가 주어진 접선」·「매개변수 곡선의 접선」 유형을 도입하는 필수 예제라 ★2 를 바닥으로 유지 | ★1 / ★2 |
| GN-CALC2-160-e5 | 필수 예제인데 딸린 확인체크 160-315·160-316(둘 다 ★3)보다 판정이 낮다. 예제는 조건 번역만, 확인체크는 삼각방정식·소거가 더해져 실제로 무겁다 | ★2 / ★3 |
| GN-CALC2-163-322 | STEP 1 · M_total 4 로 가장 가벼우나 「점과 직선 사이의 거리」가 다른 단원 도구라 I-XU 로 볼지(★2 유지) 표기 차용으로 볼지(→ 절차형 ★1) 갈린다 | ★1 / ★2 |
| GN-CALC2-163-324 | STEP 1 인데 M_total 8 · 통찰 d2 로 같은 구역 다른 문항보다 한 단 무겁다. 160-315 와 사실상 같은 문항 | ★2 / ★3 |
| GN-CALC2-164-328 | 통찰 2개로 +1 후보였으나 159-e4 와 완전히 같은 골조의 반복이라 STEP 2 출발 ★3 을 유지했다. 카탈로그에서 두 문항을 같은 유형으로 묶으면 ★도 같아야 한다 | ★3 / ★4 |
| GN-CALC2-164-329 | STEP 2 이고 절차형 · M_total 7 이라 실질은 161-318 급이다. 구역 신호만으로 ★3 을 유지했다 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: ⑴ 「곡선 밖의 점에서 그은 접선」과 ⑵ 「접선의 개수 조건」은 겉보기 골조(접점 매개화 + 통과 조건)가 같지만, ⑵ 는 통과 조건이 **t 에 대한 이차방정식으로 떨어지고 판별식으로 넘어간다**는 추가 층이 있어 base ★ 가 한 단 높다(★2 vs ★3). 반드시 분리할 것.
- **통합해도 될 유형**: 「접점이 주어진 접선」과 「접점에서의 법선」은 마지막에 기울기를 −1/m 으로 뒤집는 한 줄 차이뿐이므로 한 유형의 하위 변형으로 묶어도 된다. 「매개변수 곡선의 접선」과 「음함수 곡선의 접선」도 dy/dx 를 얻는 방법만 다르고 이후 절차가 동일해, 카탈로그에서는 '기울기를 얻는 경로' 축으로 묶고 base ★ 는 같게 두는 편이 일관된다.
- **★4 이상 슬롯 자격**: 이 단원에서 ★4 로 올라간 넷(164-327 각·극한, 164-330 기울기 최솟값, 164-331 대칭식·근과 계수, 164-332 역함수 대칭)은 모두 **접선을 구한 뒤에 다른 도구(극한·최대최소·근과 계수·대칭)를 한 겹 더 얹은** 구조다. 접선 계산 자체를 무겁게 해서 ★를 올린 문항은 이 범위에 없다 — 카탈로그 설계 시 이 기준을 유지할 것.
- **★5 부재**: 통찰 3개 이상 + SC/VF/SYM/XU 조합을 요구하는 ★5 슬롯은 이 단원에 없다. 164-332(SYM d3)와 164-331(SYM d2)이 가장 가깝고, 두 문항의 `variation_notes.creative` 에 적어 둔 확장(개수 판정 결합·매개변수화)이 ★5 후보다.
