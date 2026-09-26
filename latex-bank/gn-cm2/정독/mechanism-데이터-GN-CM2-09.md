---
name: mechanism-데이터-GN-CM2-09
description: 개념원리 공통수학2 09 원의 접선의 방정식(1/1 · 89-e15~91-217) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학2 (22개정) · 전사본 latex-bank/gn-cm2
  section: 09 원의 접선의 방정식
  unit_code: CM2-09
  part: "1/1"
  extract_range: "89~91쪽 · 89-e15~91-217"
  total_problems: 15
  unit_total: 15
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm2/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm2/items/<id>.tex
  image_source: latex-bank/gn-cm2/figures/ (crops.json)
---

# 개념원리 공통수학2 · 09 원의 접선의 방정식 (1/1) 정독 데이터 (v1.0)

이 파일은 09단원 15문 전수(89~91쪽 · 89-e15~91-217)를 다룬다. 단원 자체가 짧아 한 파일에 전부 들어간다. 구역은 넷이다. 「필수·발전 예제」 9문(필수 예제 2 · 발전 예제 1 · 각 예제에 딸린 확인체크 6), 「연습문제 STEP 1」 2문, 「연습문제 STEP 2」 3문, 「연습문제 실력 UP」 1문.

단원의 도구는 사실상 세 개뿐이다. ⑴ 기울기 m 이 주어진 원 x^2+y^2=r^2 의 접선 y=mx±r√(m^2+1), ⑵ 원 위의 점 (x1,y1) 에서의 접선 x1·x+y1·y=r^2, ⑶ 원 밖의 점에서 그은 접선(기울기를 미지수로 두고 중심과 직선 사이의 거리 = 반지름). 15문의 골조는 이 셋 중 하나를 고르고, 그 앞뒤에 다른 조건(평행·수직·각·절편·넓이 최대·두 접선 수직·접선 길이)을 한두 겹 붙인 형태다. 그래서 변형할 때 「어느 도구를 쓰는가」는 거의 고정이고, 변형의 자유도는 붙는 조건 쪽에 있다.

개념원리 고등의 벤더 난이도 신호는 구역과 예제 태그다. 「필수」 ★2 · 「발전」 ★3 출발이고, 예제에 딸린 「확인체크」는 원칙상 ★1 출발이지만 이 단원에서는 짝 예제의 골조를 그대로 한 번 더 쓰는 구조라 **짝 예제 −1** 을 실질 출발점으로 삼았다(그래서 발전 예제 90-e17 의 확인체크 90-210·90-211 은 ★1 이 아니라 ★2 출발). 연습문제는 STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4 출발이다. 벤더 신호와 2단 이상 어긋난 한 문항(90-211)은 라벨을 억지로 맞추지 않고 파일 끝 분류 이슈 표에 기록했다.

이 파일의 주 용도는 숫자 변형·창의 변형의 **원본**이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(통찰 유형·depth) · `variation_notes`(바꿔도 되는 수와 제약 / 골조를 유지한 설정 변형과 ★ 변동 지점)를 채웠다. 이 단원은 접선 공식이 r√(m^2+1) · x1·x+y1·y=r^2 처럼 r 와 접점 좌표에 강하게 묶여 있어 수를 바꿀 때 제약이 많다 — 무리수가 정리되는 r 인지, 접점이 원 위에 실제로 있는지를 numeric 메모에 매번 적었다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-CM2-89-e15
  page: 89
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    원 x^2+y^2=4 에 접하고 직선 2x-y+3=0 과 평행한 직선의 방정식을 모두 구하기.
  category: "평행 조건으로 기울기 확정 → 기울기 주어진 접선 공식"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "기울기가 주어진 원의 접선의 방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    평행 → 기울기 2, 그다음 y=mx±r√(m^2+1) 에 m=2, r=2 를 넣으면 끝나는
    공식 1회 대입 문항이다. 통찰 0 · M_total 4 라 v3.8 의 절차형 −1 후보이지만,
    이 단원 접선 공식을 처음 세우는 필수 예제이고 ± 두 답을 모두 써야 하는
    자리라 벤더 신호 ★2 를 유지했다. 함정은 r 이 아니라 r^2=4 라는 것 하나.
  tier: star_2
  mechanism_primary: "평행 → m=2 → y=mx±r√(m^2+1) 에 m=2, r=2 대입 → y=2x±2√5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$y=2x\pm 2\sqrt{5}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/89-e15.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "r^2(4 → 9, 5, 20)과 평행 직선의 기울기(2 → -1, 3, 1/2)를 바꿀 수 있다. 제약: 답이 r√(m^2+1) 이라 r^2·(m^2+1) 이 제곱수일 때만 유리수 답이 나온다(예: r=3, m=4/3 → ±5). 무리수 답을 허용하면 √ 안이 정리되는 값(m^2+1 이 2, 5, 10)을 고른다. 평행 직선의 상수항 3 은 답에 전혀 쓰이지 않으므로 아무 값이나 가능."
    creative: "(1) 평행 대신 수직을 주면 기울기 역수·부호 한 단계가 늘 뿐 ★2 유지(89-206 이 실제 그 변형). (2) 두 접선의 y절편 차나 x절편 곱을 묻는 마무리를 붙이면 ★2 유지(91-212·89-207). (3) 원을 중심이 원점이 아닌 (x-a)^2+(y-b)^2=r^2 로 바꾸면 공식이 막혀 거리 조건으로 가야 하므로 ★3."
```

```yaml
- id: GN-CM2-89-e16
  page: 89
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    원 x^2+y^2=5 위의 점 (2,1) 에서의 접선이 ax+y+b=0 일 때 상수 a, b 에 대한 a+b 의 값.
  category: "원 위의 점에서의 접선 공식 → 주어진 꼴로 정리 → 계수 비교"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "원 위의 점에서의 접선의 방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x1·x+y1·y=r^2 에 (2,1), r^2=5 를 넣어 2x+y=5, 이를 2x+y-5=0 으로 옮겨
    ax+y+b=0 과 비교하면 a=2, b=-5 다. 공식 1회 + 계수 비교 1회로 끝나고
    계수 비교는 표준 절차라 통찰로 세지 않았다. 미지의 상수 a, b 가 등장해
    Mₐ=2. 필수 예제 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "x1·x+y1·y=r^2 에 (2,1)·r^2=5 대입 → 2x+y-5=0 → ax+y+b=0 과 계수 비교 → a+b"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-3$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/89-e16.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접점과 r^2 을 함께 바꾼다. 제약: 접점이 반드시 원 위에 있어야 하므로 (x1,y1) 을 먼저 정하고 r^2=x1^2+y1^2 을 역산한다(예: (3,-1) → r^2=10, (1,2) → r^2=5). y 의 계수를 1 로 고정한 ax+y+b=0 꼴을 유지하려면 접점의 y좌표가 0 이 아니어야 한다."
    creative: "(1) 묻는 대상을 ab, a-b, 접선의 x절편으로 바꾸기(★2 유지). (2) 접선의 꼴을 x+cy+d=0 으로 주면 나누는 방향이 바뀔 뿐 같은 ★2. (3) 접점을 직접 주지 않고 원과 직선의 교점으로 주면 연립 한 겹이 늘어 ★2 상단(89-209). (4) 접선이 다른 원에도 접하도록 조건을 이으면 ★2~3(91-213)."
```

```yaml
- id: GN-CM2-89-206
  page: 89
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    원 x^2+y^2=9 에 접하고 직선 y=-3x+5 와 수직인 직선의 방정식을 모두 구하기.
  category: "수직 조건으로 기울기 확정 → 기울기 주어진 접선 공식"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "기울기가 주어진 원의 접선의 방정식(수직 조건)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    짝 예제 89-e15 의 평행을 수직으로 바꾼 확인체크다. m=1/3, r=3 을 공식에 넣으면
    3√(1/9+1)=√10 이 바로 나온다. 통찰 0 · M_total 4 라 확인체크 출발점에서
    −1 이 붙지만 하한 clamp 로 ★1. 함정은 수직 기울기의 부호(-3 의 역수는 +1/3)뿐.
  tier: star_1
  mechanism_primary: "수직 → m=1/3 → y=mx±r√(m^2+1) 에 m=1/3, r=3 대입 → y=x/3±√10"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y=\dfrac{1}{3}x+\sqrt{10}$, $y=\dfrac{1}{3}x-\sqrt{10}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/89-206.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주어진 직선의 기울기(-3 → -2, -1/2, 4)와 r^2(9 → 4, 5, 25)을 바꾼다. 제약: 수직 기울기가 분수가 되므로 r√(m^2+1) 이 지저분해지기 쉽다. r 을 기울기의 분모의 배수로 잡으면(m=1/3 에 r=3) √ 안이 정리된다."
    creative: "(1) 수직 대신 x축의 양의 방향과 이루는 각을 주면 tan 한 단계가 늘 뿐 ★1~2(89-207). (2) 두 접선 사이의 거리를 묻는 마무리를 붙이면 ★2. (3) 원을 중심이 원점이 아닌 원으로 바꾸면 공식이 막혀 거리 조건 ★3."
```

```yaml
- id: GN-CM2-89-207
  page: 89
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    원 x^2+y^2=3 에 접하고 x축의 양의 방향과 이루는 각의 크기가 45도인 두 직선의 x절편의 곱.
  category: "각 → 기울기 tan45 → 접선 공식 → 두 x절편의 곱"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "기울기가 주어진 원의 접선 — 각·절편 조건"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    각 45도 → m=1 은 기울기의 정의 그대로라 표현 전환으로 세지 않았다. y=x±√6 에서
    x절편은 ∓√6 이고 곱은 -6 이다. 부호가 반대인 두 절편이라 곱이 음수로 나오는 것이
    유일한 함정. 공식 대입 뒤 절편 두 개와 곱까지 4단계라 Mₛ=2 이지만 통찰 0 이라
    확인체크 ★1 유지.
  mechanism_primary: "tan45=1 → y=x±r√2 → 각 x절편 구해 곱 → -(r√2)^2/1 = -6"
  tier: star_1
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/89-207.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각(45도 → 60도, 135도)과 r^2(3 → 2, 5, 12)을 바꾼다. 제약: 각은 tan 값이 정리되는 45·60·120·135도만 쓴다. 60도로 바꾸면 m=√3 이라 r√(m^2+1)=2r 이 되어 오히려 답이 깔끔해진다. x절편의 곱은 -r^2(m^2+1)/m^2 이므로 답을 정수로 만들려면 이 값이 정수가 되게 r^2 을 고른다."
    creative: "(1) 묻는 대상을 두 x절편의 합(=0)·두 직선 사이의 거리·두 절편이 만드는 삼각형의 넓이로 바꾸기(★1~2). (2) 각을 미지수로 두고 x절편의 곱이 주어진 값이 되도록 각을 역으로 묻기 → 역방향 I-BW 가 생겨 ★3. (3) x절편 대신 두 접선과 x축이 만드는 삼각형의 넓이를 묻기(★2)."
```

```yaml
- id: GN-CM2-89-208
  page: 89
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    원 x^2+y^2=10 위의 점 (-1,-3) 에서의 접선이 x축, y축과 만나는 점을 A, B 라 할 때
    원점 O 를 포함한 삼각형 OAB 의 넓이.
  category: "원 위의 점에서의 접선 → x·y절편 → 직각삼각형 넓이"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "원 위의 점에서의 접선과 좌표축이 만드는 삼각형의 넓이"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    접선 -x-3y=10 → x+3y+10=0 에서 절편 -10 과 -10/3 을 읽고, 두 축이 직교하므로
    넓이는 절댓값의 곱의 절반이다. 접점 좌표가 둘 다 음수라 절편도 음수가 되는데
    넓이는 양수라는 것이 유일한 함정. 절차 4단계 · 통찰 0 → 확인체크 ★1 유지.
  tier: star_1
  mechanism_primary: "x1·x+y1·y=r^2 → 접선 x+3y+10=0 → x절편·y절편 → 넓이 = |x절편|·|y절편|/2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{50}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/89-208.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접점 (-1,-3) 을 다른 격자점으로 바꾸고 r^2=x1^2+y1^2 을 역산한다((2,-1)→r^2=5, (1,3)→10, (-2,3)→13). 제약: 접점의 두 좌표가 모두 0 이 아니어야 절편이 둘 다 생긴다. 넓이는 r^4/(2|x1·y1|) 이므로 이 값이 정수가 되게 하려면 |x1·y1| 이 r^4 의 약수여야 한다((1,3),r^2=10 → 100/6 처럼 분수가 남는다 — 분수 답을 허용할지 먼저 정한다)."
    creative: "(1) 넓이 대신 선분 AB 의 길이나 원점에서 AB 에 내린 수선의 길이(=r)를 묻기 — 후자는 수선의 길이가 항상 r 임을 알아채면 즉답이라 I-SYM 이 생겨 ★2~3. (2) 넓이를 주고 접점을 역으로 찾게 하면 I-BW 가 생겨 ★3. (3) 접점을 제1사분면 위의 점이라고만 하고 넓이 최소를 묻기 → 산술기하 결합 ★4."
```

```yaml
- id: GN-CM2-89-209
  page: 89
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    원 x^2+y^2=25 와 직선 y=x-1 의 교점 중 제1사분면 위에 있는 점에서의 접선의 방정식.
  category: "원과 직선 연립 → 제1사분면 근 선택 → 원 위의 점에서의 접선"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "원과 직선의 교점에서의 접선의 방정식"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    연립해 x^2-x-12=0 → x=4, -3 을 얻고 제1사분면 조건으로 (4,3) 만 남긴 뒤 접선
    공식에 넣는다. 두 도구가 이어붙지만 둘 다 이 단원 계열이라 단원 경계를 넘지 않아
    통찰로 세지 않았다. 함정은 T-범위 하나 — 근 두 개 중 하나를 사분면 조건으로
    기각하는 자리. 통찰 0 · M_total 5 → 확인체크 ★1 유지.
  tier: star_1
  mechanism_primary: "원·직선 연립 → 이차방정식의 두 근 → 제1사분면 근 (4,3) 선택 → x1·x+y1·y=r^2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$4x+3y=25$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/89-209.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "r^2(25)과 직선(y=x-1)을 바꾼다. 제약: 교점이 격자점이어야 접선이 깔끔하므로 먼저 원 위의 격자점 두 개를 고르고 그 두 점을 지나는 직선을 역산한다(r^2=25 의 격자점 (3,4),(4,3),(0,5),(-3,4),(5,0) 조합). 사분면 조건이 실제로 하나만 남기도록 두 교점이 서로 다른 사분면에 있게 한다."
    creative: "(1) 사분면 조건 대신 x좌표가 더 큰 점·y좌표가 음수인 점으로 선택 기준만 바꾸기(★1 유지). (2) 두 교점 각각에서의 접선을 모두 구해 두 접선의 교점을 묻기 → 단계가 배로 늘고 연립이 한 겹 더 붙어 ★3. (3) 직선을 y=x+k 로 두고 교점에서의 접선이 특정 점을 지나도록 k 를 역으로 묻기 → I-BW ★3~4."
```

```yaml
- id: GN-CM2-90-e17
  page: 90
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["발전"]
  category_type: "발전 예제"
  summary: |
    점 (-2,4) 에서 원 x^2+y^2=4 에 그은 접선의 방정식을 구하기.
  category: "원 밖의 점에서 그은 접선 — 기울기 미지수 + 중심·직선 거리 = 반지름, 기울기 없는 접선 별도 처리"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 4
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "원 밖의 점에서 그은 접선은 두 개인데 m 에 대한 식이 일차가 되어 한 개만 나옴 → 기울기가 존재하지 않는 접선 x=-2 를 따로 따져야 함"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "원 밖의 점에서 원에 그은 접선의 방정식"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    y-4=m(x+2) 로 두고 |2m+4|/√(m^2+1)=2 를 제곱하면 m^2 항이 소거돼 16m=-12,
    m=-3/4 하나만 나온다. 이 단원 최대의 함정이 여기다 — 접선은 두 개인데 한 개만
    나왔으므로 기울기가 없는 접선 x=-2 를 별도로 확인해야 한다(I-MI d2). 이 점이
    x=-2 라는 수직 접선 위에 놓이게 문항이 설계돼 있다. 발전 예제 ★3 유지.
  tier: star_3
  mechanism_primary: "y-4=m(x+2) → 중심-직선 거리 = r → m^2 소거 → m=-3/4 하나 → 기울기 없는 접선 x=-2 추가"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$x=-2$, $3x+4y-10=0$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/90-e17.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "외부점과 r^2 을 바꾼다. 제약 — 수직 접선 함정을 살리려면 외부점의 x좌표의 절댓값이 정확히 r 이어야 한다((−2,4)·r=2, (3,5)·r=3, (−4,1)·r=4). 함정을 빼고 두 기울기가 모두 나오게 하려면 |x좌표|≠r 로 두고, 그때는 두 기울기가 유리수가 되도록 외부점을 잡는다(90-210 의 (3,-1)·r^2=5)."
    creative: "(1) 접선의 방정식 대신 두 접선이 이루는 각이나 접선의 길이를 묻기(★3~4 · 91-217). (2) 외부점을 y축 위 (0,a) 로 두고 두 접선이 수직이 되게 하면 기하 갈래가 열려 ★3(91-216). (3) 원을 중심이 원점이 아닌 원으로 바꾸면 공식이 막히고 거리 계산만 무거워진다 — 통찰은 그대로라 ★3 유지(90-211). (4) 접점 좌표를 함께 묻으면 단계가 한 겹 늘어 ★4."
```

```yaml
- id: GN-CM2-90-210
  page: 90
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    점 (3,-1) 에서 원 x^2+y^2=5 에 그은 접선의 방정식을 구하기.
  category: "원 밖의 점에서 그은 접선 — 기울기 미지수 + 거리 조건 → m 이차방정식"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "원 밖의 점에서 원에 그은 접선의 방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    짝 예제 90-e17 과 같은 골조지만 |3|≠√5 라 m 에 대한 식이 제대로 이차가 되고
    2m^2+3m-2=0 에서 m=1/2, -2 두 개가 모두 나온다. 수직 접선 함정이 없어 통찰 0
    이고 순수 대수 처리(제곱·전개·인수분해)만 남는다. 발전 예제 확인체크라 짝 예제
    −1 인 ★2 를 출발점으로 삼았고 통찰 0 이라 그대로 ★2.
  tier: star_2
  mechanism_primary: "y+1=m(x-3) → |−3m−1|/√(m^2+1)=√5 → 2m^2+3m-2=0 → m=1/2, -2 → 두 접선"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$x-2y-5=0$, $2x+y-5=0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/90-210.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "외부점과 r^2 을 바꾼다. 제약: |외부점의 x좌표|≠r 이어야 m 이 이차방정식이 되고, 두 근이 유리수가 되려면 판별식이 제곱수여야 한다((3,-1)·r^2=5 → (2m-1)(m+2), (5,0)·r^2=5 처럼 대칭 배치도 좋다). 외부점은 반드시 원 밖에 있어야 한다(x0^2+y0^2>r^2)."
    creative: "(1) 접선 대신 두 접점을 지나는 직선(접현)을 묻기 → 접점 공식 착안으로 I-RT ★4. (2) 두 접선의 기울기의 합·곱만 묻기 → 근과 계수의 관계로 단축되는 I-XU 가 생겨 ★3(90-211). (3) 외부점을 원 위나 원 안에 두어 접선이 하나·없음이 되게 하는 판정 문항으로 바꾸기(★2)."
```

```yaml
- id: GN-CM2-90-211
  page: 90
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    점 (2,-1) 에서 원 (x+1)^2+(y-2)^2=3 에 그은 두 접선의 기울기의 합.
  category: "중심이 원점이 아닌 원 + 외부점 → 거리 조건 → m 이차방정식 → 근과 계수의 관계"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 3
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 접선의 기울기를 m 에 대한 이차방정식 m^2+3m+1=0 의 두 근으로 보고 근과 계수의 관계로 합을 바로 얻음 — 두 근이 무리수라 직접 구하면 현저히 느림"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "원 밖의 점에서 그은 두 접선의 기울기의 합(근과 계수)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    중심이 (-1,2) 라 접선 공식이 막히고 중심-직선 거리로만 간다. |−3m−3|/√(m^2+1)=√3
    을 정리하면 m^2+3m+1=0 이고 판별식 5 라 두 근이 무리수다 — 각각 구하면 지저분하고
    합만 필요하므로 근과 계수의 관계로 −3 이 즉시 나온다(I-XU d2 · 공통수학1 도구 결합).
    [분류 이슈] 벤더는 확인체크(★1 출발)지만 판정은 ★3 으로 2단 어긋남 — 라벨 유지·기록.
  tier: star_3
  mechanism_primary: "y+1=m(x-2) → 중심 (-1,2) 와의 거리 = √3 → m^2+3m+1=0 → 근과 계수로 두 근의 합 = -3"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/90-211.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "중심·외부점·r^2 을 바꾼다. 제약: 외부점이 원 밖이어야 하고(중심거리>r), m 이차방정식의 이차항 계수가 0 이 되지 않도록 (외부점의 x좌표 − 중심의 x좌표)의 절댓값 ≠ r 이어야 한다. 두 근을 무리수로 남겨 근과 계수의 필요성을 살리려면 판별식이 제곱수가 아니게 고른다(여기서는 5)."
    creative: "(1) 합 대신 곱(=1)·제곱의 합(=7)을 묻기 → 같은 골조 ★3. (2) 두 접선이 수직이 되도록 외부점을 역으로 묻기 → 곱 = -1 조건이 붙어 I-BW 추가 ★4(91-216 과 같은 계열). (3) 원을 원점 중심으로 되돌리면 공식 갈래가 열려 I-SC 가 생기지만 계산은 가벼워져 ★2~3. (4) 두 접선이 이루는 각의 탄젠트를 묻기 → 근과 계수 + 탄젠트 덧셈정리로 ★4."
```

### 연습문제 STEP 1

```yaml
- id: GN-CM2-91-212
  page: 91
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    원 x^2+y^2=10 에 접하고 직선 y=3x+2 와 평행한 두 직선이 y축과 만나는 점을 A, B 라 할 때
    선분 AB 의 길이.
  category: "평행 조건으로 기울기 확정 → 접선 공식 → 두 y절편의 차"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "기울기가 주어진 원의 접선 — 두 접선의 y절편 사이 거리"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    89-e15 와 같은 골조에 마무리 한 단계만 붙었다. m=3, r=√10 을 넣으면 y절편이 ±10 이고
    AB = 2r√(m^2+1) = 20 이다. 두 접선이 y축 대칭 위치라 길이는 절편의 차가 아니라 합의
    꼴로 나오는 것이 유일한 주의점. 통찰 0 · M_total 4 라 −1 후보지만 STEP 1 신호와
    e15 와의 일관성을 보아 ★2 유지.
  tier: star_2
  mechanism_primary: "평행 → m=3 → y=3x±r√(m^2+1) → y절편 ±10 → AB = 2r√(m^2+1) = 20"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$20$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/91-212.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "m(3)과 r^2(10)을 바꾼다. 제약: AB = 2r√(m^2+1) 이 정수가 되려면 r^2(m^2+1) 이 제곱수여야 한다(r^2=10·m=3 → 100, r^2=5·m=2 → 25, r^2=2·m=1 → 4). 평행 직선의 상수항 2 는 답에 쓰이지 않는다."
    creative: "(1) y축 대신 x축과 만나는 점으로 바꾸면 AB = 2r√(m^2+1)/|m| 이라 제약이 달라질 뿐 ★2 유지. (2) AB 의 길이를 주고 r 이나 m 을 역으로 묻기 → I-BW 가 생겨 ★3. (3) 두 접선과 y축이 만드는 도형 대신 두 접점을 이은 선분의 길이(=2r)를 묻기 → 대칭 착안으로 ★2~3."
```

```yaml
- id: GN-CM2-91-213
  page: 91
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    원 x^2+y^2=2 위의 점 (1,-1) 에서의 접선이 원 x^2+y^2-6x+2y+k=0 에 접할 때
    상수 k 의 값(k<10).
  category: "원 위의 점에서의 접선 → 일반형을 표준형으로 → 중심·직선 거리 = 반지름 → k"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "원 위의 점에서의 접선이 다른 원에 접할 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    앞 원의 접선 x-y-2=0 을 먼저 구하고, 뒤 원을 (x-3)^2+(y+1)^2=10-k 로 고쳐
    중심 (3,-1) 과의 거리 √2 를 반지름과 같게 두면 10-k=2 다. 두 도구 모두 이 단원
    계열의 표준 절차라 통찰로 세지 않았다. k<10 단서는 반지름의 제곱이 양수여야
    한다는 T-범위 장치. STEP 1 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "x1·x+y1·y=r^2 → x-y-2=0 → 뒤 원을 표준형 (x-3)^2+(y+1)^2=10-k → 중심거리 = 반지름 → k=8"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/91-213.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "앞 원의 접점(1,-1)과 r^2(2), 뒤 원의 중심 (3,-1) 을 바꾼다. 제약: 접점은 앞 원 위에 있어야 하고(r^2=x1^2+y1^2), 뒤 원은 반지름의 제곱 10-k>0 이 성립해야 하므로 k 의 범위 단서를 함께 고쳐야 한다. 중심에서 접선까지의 거리가 무리수면 제곱 과정에서 k 가 정수로 떨어지도록 거리의 제곱을 정수로 맞춘다."
    creative: "(1) 접한다 대신 서로 다른 두 점에서 만난다·만나지 않는다로 바꿔 k 의 범위를 묻기 → 부등식 처리로 ★2~3. (2) k 단서를 빼면 10-k>0 을 스스로 챙겨야 해 T-범위 함정이 살아나고 ★3. (3) 뒤 원을 고정하고 앞 원 위의 접점을 미지수로 두어 접하게 하는 접점을 묻기 → I-BW ★4."
```

### 연습문제 STEP 2

```yaml
- id: GN-CM2-91-214
  page: 91
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    원 x^2+y^2=25 위의 두 점 A(-4,3), B(0,-5) 와 원 위의 점 C 에 대하여 삼각형 ABC 의
    넓이가 최대일 때 점 C 에서의 접선의 방정식.
  category: "밑변 AB 고정 → 높이 최대인 원 위의 점 → 중심을 지나 AB 에 수직인 직선과 원의 교점 → 접선"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "삼각형의 넓이 최대를 밑변 AB 가 고정이라는 점에서 점 C 와 직선 AB 사이의 거리 최대로 동치 변환"
    - step: 3
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "거리 최대인 원 위의 점을 대수 최적화가 아니라 중심을 지나 AB 에 수직인 직선과 원의 교점으로 기하 전환"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "원 위의 점에서 삼각형의 넓이가 최대일 때의 접선"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    AB 의 기울기 -2 를 구한 뒤 넓이 최대 ⇔ 높이 최대로 옮기고(I-EQV d2), 그 C 를
    중심을 지나 AB 에 수직인 직선 y=x/2 와 원의 교점으로 잡는다(I-RT d2). 교점이
    두 개 나오는데 AB 에서 먼 쪽만 답이라 사분면이 아니라 거리로 골라야 하는 것이
    함정(T-범위·T-부호). 통찰 2개지만 둘 다 표준 최대 논법이라 +1 을 주지 않고
    STEP 2 출발 ★3 유지.
  tier: star_3
  mechanism_primary: "AB 기울기 -2 → 넓이 최대 = 높이 최대 → 중심 지나 AB 에 수직인 직선과 원의 교점 중 먼 쪽 C → x1·x+y1·y=25"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$y=-2x+5\sqrt{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/91-214.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "r^2(25)과 A, B 를 바꾼다. 제약: A, B 는 원 위의 격자점이어야 하고(r=5 의 격자점 (±3,±4),(±4,±3),(0,±5),(±5,0)), C 는 격자점이 아닌 무리수 좌표가 되는 것이 정상이다 — 접선 계수를 정리하려면 중심을 지나는 수직선의 기울기가 단순한 분수가 되게 A, B 를 고른다. AB 가 지름이 되면 넓이 최대가 대칭인 두 점에서 동시에 일어나 답이 둘이 되므로 피한다."
    creative: "(1) 넓이의 최댓값 자체를 묻기(★3 유지). (2) 넓이가 최소인 C(=AB 호 위 가까운 쪽)를 묻되 C 가 A, B 와 겹치지 않는 조건을 넣으면 기각 단계가 생겨 I-VF 로 ★4. (3) C 를 원 위가 아니라 주어진 직선 위로 옮기면 거리 최대가 사라지고 최소만 남아 ★3. (4) 접선 대신 C 에서 AB 에 내린 수선의 발을 묻기 → 단계가 늘고 ★4."
```

```yaml
- id: GN-CM2-91-215
  page: 91
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 STEP 2"
  summary: |
    원 C: x^2+y^2=4 와 A(-2,0). 원 위 제1사분면의 점 P 에서의 접선이 x축과 만나는 점 B,
    P 에서 x축에 내린 수선의 발 H 라 할 때 2AH = HB 이면 삼각형 PAB 의 넓이는? 5지선다.
  category: "접점을 (a,b) 로 두고 접선의 x절편·수선의 발로 길이 조건을 대수식화 → a 결정 → 넓이"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "그림의 길이 조건 2AH=HB 를 접점 좌표 a 의 식으로 번역 — AH=a+2, HB=(4-a^2)/a 는 접선의 x절편이 4/a 라는 사실에서 나옴"
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "a^2+b^2=4 와 길이 조건을 결합해 b 를 소거하고 a 에 대한 이차방정식 3a^2+4a-4=0 하나로 통합"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "접선의 x절편과 수선의 발 — 길이 조건으로 접점 결정"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    P(a,b) 로 두면 접선 ax+by=4 의 x절편이 4/a 이고 H 는 (a,0) 이므로 AH·HB 가 모두
    a 만의 식이 된다(I-RT d2). 여기에 a^2+b^2=4 를 묶으면 3a^2+4a-4=0 한 개로 줄고
    (I-CON d2) 제1사분면 조건이 a=-2 를 기각한다. 넓이는 밑변 AB=8, 높이 b 로 즉시.
    STEP 2 출발 ★3 에 통찰 2개·교육청 기출·M_total 8 을 더해 ★4.
  tier: star_4
  mechanism_primary: "P(a,b) → 접선 ax+by=4 의 x절편 4/a → AH=a+2, HB=(4-a^2)/a → 2AH=HB → 3a^2+4a-4=0 → a=2/3 → 넓이 = AB·b/2"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '④'
  answer_source: "답지"
  figure: "crop:fig-91-215.png"
  latex: latex-bank/gn-cm2/items/91-215.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "r^2(4)과 길이 비(2AH=HB)를 바꾼다. 제약: 조건식이 (k+1)a^2+(k·r)a-r^2=0 꼴의 이차방정식이 되므로 비 k 를 바꾸면 a 가 유리수로 떨어지는지 먼저 확인해야 한다(r=2·k=2 → a=2/3). A 는 원과 x축의 교점 (-r,0) 에 고정돼 있어 자유롭게 옮길 수 없고, 옮기면 AH 식이 바뀐다. 그림 라벨 P·B·H 의 위치 관계(H 가 A 와 B 사이)는 고정."
    creative: "(1) 넓이 대신 접선의 기울기·선분 PB 의 길이·삼각형 PHB 의 넓이를 묻기(★3~4). (2) 조건을 AH=HB 로 단순화하면 a 가 바로 나와 ★3. (3) P 를 제1사분면이 아니라 원 위의 임의의 점으로 열면 기각 단계가 실질화돼 I-VF 가 추가되고 ★4~5. (4) 넓이를 주고 길이 비를 역으로 묻기 → I-BW ★4."
```

```yaml
- id: GN-CM2-91-216
  page: 91
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    점 A(0,a) 에서 원 x^2+(y-3)^2=8 에 그은 두 접선이 서로 수직일 때 양수 a 의 값.
  category: "두 접선이 수직 ⇔ 중심과 외부점 사이의 거리 = √2 r → 거리식 → a"
  M: {s: 1, k: 1, a: 2, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 접선이 수직이라는 조건을 중심·두 접점·외부점이 정사각형을 이룬다는 사실로 옮겨 중심과 A 사이의 거리 = √2 r 이라는 한 줄짜리 동치 조건으로 변환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "원 밖의 점에서 그은 두 접선이 수직일 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    기울기 두 개를 미지수로 두고 m1·m2=-1 을 근과 계수의 관계로 처리하는 대수 갈래도
    가능하지만, 수직 → 정사각형 → 중심거리 √2 r 로 옮기면 |a-3|=4 한 줄이다(I-EQV d2).
    절댓값에서 a=7, -1 두 값이 나오고 양수 단서가 하나를 기각한다(T-부호·T-범위).
    통찰 1 · depth 2 라 +1 조건에 못 미쳐 STEP 2 출발 ★3 유지.
  tier: star_3
  mechanism_primary: "두 접선 수직 → 중심-외부점 거리 = √2 r = 4 → |a-3|=4 → a=7(양수 조건으로 -1 기각)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/91-216.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "중심 (0,3)·r^2(8)·외부점이 놓인 축을 바꾼다. 제약: √2 r 이 유리수가 되려면 r^2 이 2 의 배수이면서 2r^2 이 제곱수여야 한다(r^2=8 → √2r=4, r^2=2 → 2, r^2=18 → 6). 외부점을 y축 위에 두면 거리식이 |a - 중심의 y좌표| 로 단순해지고, 축에서 떼면 이차방정식이 된다."
    creative: "(1) 수직 대신 두 접선이 이루는 각이 60도가 되게 하면 거리 = 2r 로 바뀌고 ★3 유지. (2) a 를 주고 두 접선이 수직인지 판정하게 하면 ★2 로 내려간다. (3) 외부점을 직선 y=x 위의 점으로 열면 미지수가 둘이 되고 ★4. (4) 수직인 두 접선의 교점이 그리는 자취(중심이 같고 반지름이 √2 r 인 원)를 묻기 → I-PD 가 생겨 ★4~5."
```

### 연습문제 실력 UP

```yaml
- id: GN-CM2-91-217
  page: 91
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    점 P(-2√3, 2) 에서 원 x^2+y^2=4 에 그은 두 접선의 접점을 A, B 라 할 때
    삼각형 ABP 의 넓이.
  category: "접선의 길이 + 중심·외부점·접점의 직각삼각형 → 끼인각 → 삼각형의 넓이"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "OP 가 대칭축이라 PA=PB 이고 각 OPA = 각 OPB 임을 써서 접점 A, B 의 좌표를 구하지 않고 이등변삼각형의 두 변과 끼인각만으로 넓이에 직행"
    - step: 3
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "sin(각 OPA) = r/OP = 1/2 로 끼인각을 30도·60도로 읽어 좌표 계산을 삼각비 계산으로 전환"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "두 접점과 외부점이 이루는 삼각형의 넓이(접선의 길이)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    OP=4, r=2 이므로 접선의 길이 PA=PB=2√3 이고 sin(각 OPA)=2/4 에서 각 APB=60도다.
    두 변이 같고 끼인각이 60도이니 삼각형 ABP 는 정삼각형이고 넓이가 한 줄로 나온다.
    접점 좌표를 직접 구하는 갈래는 훨씬 길다 — OP 대칭축 착안(I-SYM d2)과 삼각비
    전환(I-RT d2)이 핵심. 실력 UP 출발 ★4 유지(통찰 2개라 ★5 조건인 3개에는 못 미침).
  tier: star_4
  mechanism_primary: "OP=4, r=2 → 접선의 길이 2√3 → sin 각OPA = 1/2 → 각APB = 60도 → 정삼각형 넓이"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$3\sqrt{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/91-217.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "P 와 r^2 을 바꾼다. 제약: 각이 깔끔하려면 r/OP 가 1/2·√2/2·√3/2 가 되게 잡아야 한다(OP=2r → 60도 정삼각형, OP=√2 r → 90도 직각이등변). OP 는 좌표에서 나오므로 P 의 두 좌표의 제곱의 합이 (2r)^2 같은 값이 되도록 무리수 좌표를 허용해야 한다((-2√3,2) → OP=4). 일반식 넓이 = r(OP^2-r^2)^(3/2)/OP^2 를 써서 정수·간단한 무리수가 되는 조합을 고른다."
    creative: "(1) 넓이 대신 선분 AB 의 길이나 사각형 OAPB 의 넓이를 묻기(★3~4). (2) 두 접점을 지나는 직선(접현) x0·x+y0·y=r^2 의 방정식을 묻기 → I-RT 가 더 강해져 ★4. (3) P 를 원 밖의 임의의 점으로 두고 삼각형 ABP 의 넓이가 최대가 되는 OP 를 묻기 → 최적화가 붙어 ★5 후보(SYM+BW 조합). (4) 각 APB 가 90도가 되게 P 의 자취를 묻기 → 91-216 과 합쳐지는 ★4."
```

## 표본 판정 요약 (15문)

- ★ 분포: ★1 4 · ★2 5 · ★3 4 · ★4 2 · ★5 0
- 통찰형 6(90-e17 · 90-211 · 91-214 · 91-215 · 91-216 · 91-217) · 절차형 9 · premium 0
- 통찰 유형 분포: I-MI 1 · I-XU 1 · I-EQV 2 · I-RT 3 · I-CON 1 · I-SYM 1 (총 9개 라벨 · 모두 depth 2)
- type_hint 상위 5: 「원 밖의 점에서 원에 그은 접선」 5(e17·210·211·216·217) · 「기울기가 주어진 원의 접선」 4(e15·206·207·212) · 「원 위의 점에서의 접선」 4(e16·208·209·213) · 「넓이 최대일 때의 접선」 1(214) · 「접선의 절편·수선의 발 길이 조건」 1(215)
- 대상층: 하위권 4 · 중하위권 5 · 중위권 2 · 중상위권 3 · 상위권 1
- 그림: 1문(`crop:fig-91-215.png`) · 선택지 있는 문항 1문(91-215) · 소문항 묶음 0

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CM2-90-211 | 벤더는 확인체크(★1 출발)지만 중심이 원점이 아니라 공식이 막히고 두 근이 무리수라 근과 계수의 관계(I-XU d2)가 필수 — 판정 ★3 으로 2단 어긋남 | ★3 / ★1 |

참고(2단 미만이라 표에 넣지 않은 자리): 89-e15·91-212 는 통찰 0 · M_total 4 라 v3.8 절차형 −1 후보이지만 필수 예제·STEP 1 신호와 91-212 와의 일관성을 보아 ★2 로 유지했다. 90-210 은 확인체크(★1 출발)지만 짝 예제 90-e17(발전)의 골조를 그대로 쓰므로 짝 예제 −1 인 ★2 로 두었다. 91-215 는 STEP 2(★3 출발)에 통찰 2개·교육청 기출을 더해 ★4 로 1단 올렸다.

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형 세 개**가 이 단원의 뼈대다. ⑴ 기울기가 주어진 접선(공식 y=mx±r√(m^2+1)) ⑵ 원 위의 점에서의 접선(공식 x1·x+y1·y=r^2) ⑶ 원 밖의 점에서 그은 접선(거리 조건). 15문 중 13문이 이 셋 중 하나이고 셋은 사용하는 공식이 완전히 달라 통합하면 안 된다.
- **⑴·⑵ 안의 갈래는 통합해도 된다.** 평행·수직·각(e15·206·207·212)은 기울기를 확정하는 앞 단계만 다르고 골조가 같다. 절편·넓이·다른 원과의 접촉(208·209·213)도 ⑵ 뒤에 붙는 마무리가 다를 뿐이다. 카탈로그에서는 base ★ 를 같게 두고 마무리 단계 수로 ±1 하는 편이 낫다.
- **⑶ 안에는 하위 유형을 둘 두는 것이 좋다.** 「기울기 없는 접선을 놓치는 배치」(e17 · 외부점의 |x좌표|=r)와 「두 기울기가 모두 나오는 배치」(210)는 학생 체감이 크게 다르고 전자는 I-MI 가 필수다. 이 구분이 카탈로그에 없으면 같은 type_id 안에서 ★2 와 ★3 이 섞인다.
- **근과 계수의 관계로 두 접선의 기울기의 합·곱을 묻는 자리**(211)는 ⑶ 의 변형이 아니라 별도 유형으로 세울 만하다. 공통수학1 도구를 끌어오는 I-XU 가 붙고 중심이 원점이 아닌 원과 자주 묶인다.
- **기하 성질 유형**(216 의 수직 두 접선 → 중심거리 √2 r, 217 의 접선의 길이·끼인각)은 접선의 방정식을 실제로 쓰지 않고 끝난다. 「접선의 방정식」 카탈로그가 아니라 「원과 접선의 기하」 쪽에 묶는 편이 맞다.
- 이 단원에서 ★5 슬롯은 나오지 않았다. 저노출 유형(SC·VF·SYM·XU)이 붙은 문항이 211(XU)·217(SYM) 둘뿐이고 둘 다 통찰 1~2개라 ★5 게이트를 통과하지 못한다. 변형으로 ★5 를 만들려면 217 계열에 최적화나 자취를 얹는 방향이 가장 가깝다.
