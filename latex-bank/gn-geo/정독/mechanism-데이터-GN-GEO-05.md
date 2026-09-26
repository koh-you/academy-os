---
name: mechanism-데이터-GN-GEO-05
description: 개념원리 기하 05 포물선의 접선의 방정식(1/1 · 53~58쪽 26문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 기하 · 전사본 latex-bank/gn-geo
  section: 05 포물선의 접선의 방정식
  unit_code: GEO-05
  part: "1/1"
  extract_range: "53~58쪽 · 53-91~58-113"
  total_problems: 26
  unit_total: 26
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·level·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-geo/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-geo/items/<id>.tex
  image_source: latex-bank/gn-geo/figures/ (crops.json)
---

# 개념원리 기하 · 05 포물선의 접선의 방정식 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 기하 05단원 53~58쪽 전체 26문항을 다룬다. 구역은 「개념원리 익히기」 3문 · 「필수·발전 예제」 11문(필수 예제 3 + 확인체크 8) · 「연습문제 STEP 1」 5문 · 「연습문제 STEP 2」 5문 · 「연습문제 실력 UP」 2문이다.

벤더 난이도 신호는 구역과 level·tag 로 읽었다. 「개념원리 익히기」는 개념 확인(★1 출발), 「필수 예제」와 그에 딸린 「확인체크」는 ★2, 「STEP 1」 ★2 · 「STEP 2」 ★3 · 「실력 UP」 ★4 를 출발점으로 두고 M_total·통찰로 ±1 조정했다. 「교육청 기출」·「평가원 기출」 태그는 통찰 유무로 +0~1 을 판단했다. 필수 예제(`쪽-eN`)는 상자 발문만 전사돼 있어 본문 풀이·KEY Point 없이 발문만으로 골조를 잡았다.

이 단원의 도구는 셋뿐이다. ⑴ 기울기 m 이 주어진 접선(`y^2=4px → y=mx+p/m`, `x^2=4py → y=mx-pm^2`), ⑵ 곡선 위의 점에서의 접선(`y_1y=2p(x+x_1)`, `x_1x=2p(y+y_1)`), ⑶ 곡선 밖의 점에서 그은 접선(m 에 대한 이차방정식). 26문 중 24문이 이 셋 중 하나의 변주이고, 난이도 차이는 접선을 구한 뒤에 무엇을 시키느냐(절편·거리·넓이·무게중심·정수 개수)에서 나온다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(골조 한 줄) · `insights[]` · `variation_notes`(numeric/creative)를 채웠다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-GEO-53-91
  page: 53
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리"
  summary: |
    ⑴~⑵ 포물선 $y^2=12x$, $y^2=-2x$ 에 접하고 기울기가 각각 $2$, $\dfrac{1}{5}$ 인 직선의 방정식.
  category: "기울기가 주어진 접선 공식 y=mx+p/m 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "기울기가 주어진 포물선의 접선의 방정식(y=mx+p/m)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    표준형에서 p 를 읽고 공식에 m 을 넣는 한 단계. ⑵ 는 4p=-2 라 p 가 음수여서 절편 부호만 주의하면 된다(T-부호).
    개념원리 익히기 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "y^2=4px 에서 p 읽기 → y=mx+p/m 에 m 대입 → 접선"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $y=2x+\dfrac{3}{2}$ ⑵ $y=\dfrac{1}{5}x-\dfrac{5}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/53-91.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "4p 값(12, -2)과 기울기 m 을 바꿀 수 있다. 제약: p/m 이 분수로 지저분해지지 않게 m 이 p 의 약수이거나 단위분수일 것, m≠0(m=0 은 접선 공식이 무너짐)."
    creative: "(1) x^2=4py 형으로 바꿔 y=mx-pm^2 을 쓰게 하면 같은 ★1 (2) 기울기 대신 「직선 ax+by+c=0 과 평행」으로 주면 ★2(54-e1 골조) (3) 접선의 y절편·x절편을 묻게 바꾸면 ★1 유지."
```

```yaml
- id: GN-GEO-53-92
  page: 53
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리"
  summary: |
    ⑴~⑷ 포물선 $y^2=-8x$, $y^2=3x$, $x^2=12y$, $x^2=-6y$ 위의 주어진 점에서의 접선의 방정식.
  category: "곡선 위의 점에서의 접선 공식(y_1y=2p(x+x_1) · x_1x=2p(y+y_1)) 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "포물선 위의 점에서의 접선의 방정식(접점 공식)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    y^2 형과 x^2 형에서 공식의 좌우가 바뀌는 것만 구분하면 대입 한 줄이다. 4p 가 음수인 ⑴⑷ 에서 2p 부호를 놓치는 것이 유일한 함정(T-부호).
    개념원리 익히기·통찰 없음·M_total 4 → ★1. 네 소문항이 두 공식의 각 부호 경우를 한 번씩 훑는 배치다.
  tier: star_1
  mechanism_primary: "표준형 판별(y^2 형 / x^2 형) → 2p 계산 → 접점 좌표를 공식에 대입 → y=mx+n 정리"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $y=x-2$ ⑵ $y=-\dfrac{1}{2}x-\dfrac{3}{2}$ ⑶ $y=-x-3$ ⑷ $y=-x+\dfrac{3}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/53-92.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "4p 와 접점을 바꾼다. 제약: 접점이 반드시 곡선 위에 있어야 하므로 먼저 매개변수 t 로 (pt^2, 2pt) 를 잡고 t 를 정수·간단한 분수로 고른 뒤 좌표를 역산할 것."
    creative: "(1) 접점의 한 좌표만 주고 나머지를 곡선 조건으로 구하게 하면 ★2(55-e2 골조) (2) 접선의 기울기만 묻기(★1) (3) 접선이 지나는 다른 점을 묻게 붙이면 ★2."
```

```yaml
- id: GN-GEO-53-93
  page: 53
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리"
  summary: |
    점 $(1,\,0)$ 에서 포물선 $y^2=-x$ 에 그은 접선의 방정식을 구하는 과정의 빈칸 6개 채우기(접점 $(x_1,\,y_1)$ 설정 → 접선 공식 → 지나는 점 대입 → 곡선 위 조건과 연립).
  category: "곡선 밖의 점 → 접점 매개변수 도입 → 두 조건 연립(과정 빈칸형)"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "포물선 밖의 점에서 그은 접선의 방정식(접점 매개변수 연립)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    접점을 미지수로 두는 것이 이 유형의 핵심 착안인데, 문제가 그 골조를 빈칸 유도로 미리 깔아 준다. 학생은 각 칸의 계산만 채우면 된다.
    접점 좌표가 매개변수라 M_a 2 로 올라가 M_total 6 이지만, 스캐폴딩 때문에 진입 저항이 없어 통찰 0. 개념원리 익히기 출발점 ★1 유지.
  mechanism_primary: "접점 (x_1,y_1) 설정 → y_1y=-½(x+x_1) → (1,0) 대입으로 x_1=-1 → y_1^2=-x_1 연립 → 접선 둘"
  tier: star_1
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-\dfrac{1}{2}(x+x_1)$, $-1$, $-1$, $-1$, $1$, $-\dfrac{1}{2}x+\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/53-93.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "4p 와 외부점을 바꾼다. 제약: 외부점을 x축 위에 두면 접점의 x좌표가 부호만 뒤집힌 값으로 나와 y_1 이 ±로 예쁘게 갈린다. y_1^2=-x_1 이 유리수 해를 갖도록 외부점의 x좌표를 고를 것."
    creative: "(1) 빈칸을 없애고 그냥 「접선의 방정식을 모두 구하시오」로 바꾸면 통찰 1개 추가·★2 (2) 접점 대신 기울기 m 을 미지수로 두는 풀이로 유도하면 56-e3 골조(★2) (3) 두 접선이 이루는 각·기울기 곱을 묻게 확장하면 ★3."
```

### 필수·발전 예제

```yaml
- id: GN-GEO-54-e1
  page: 54
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    포물선 $y^2=16x$ 에 접하고 직선 $3x-y+2=0$ 과 평행한 직선이 점 $(a,\,1)$ 을 지날 때 $a$ 의 값.
  category: "평행 조건 → 기울기 확정 → 접선 공식 → 지나는 점 대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "기울기가 주어진 포물선의 접선의 방정식(y=mx+p/m)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    평행 → m=3 을 읽고 y=mx+p/m 에 넣은 뒤 (a,1) 을 대입하는 4단계. 기울기를 직접 주지 않고 직선의 방정식으로 한 겹 감싼 것이 「개념원리 익히기」와의 차이다.
    통찰 없음·M_total 5 라 산식상 −1 후보지만, 이 유형의 대표 발문(필수 예제)이라 구역 신호대로 ★2 로 둔다. [분류 이슈] ★1/★2 경계.
  tier: star_2
  mechanism_primary: "평행 → m=3 → y=3x+p/m=3x+4/3 → (a,1) 대입 → a"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-\dfrac{1}{9}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/54-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "4p(16)·평행 직선의 기울기(3)·지나는 점의 y좌표(1)를 바꾼다. 제약: p/m 과 최종 a 가 함께 지저분해지지 않도록 m 을 p 의 약수 근처에서 고르고, 점의 y좌표는 접선 위가 아닌 값으로 둘 것."
    creative: "(1) 평행 대신 수직으로 바꾸면 기울기 역수·부호 한 겹 추가(54-94 · ★2) (2) 「x축의 양의 방향과 이루는 각」으로 주면 54-95 (3) 점을 주는 대신 접선의 x절편·y절편·좌표축과 만드는 삼각형 넓이를 묻게 바꾸면 54-96(★2)."
```

```yaml
- id: GN-GEO-54-94
  page: 54
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    포물선 $y^2=-8x$ 에 접하고 직선 $2x+y+3=0$ 에 수직인 직선이 점 $(-2,\,k)$ 를 지날 때 $k$ 의 값.
  category: "수직 조건 → 기울기 역수·부호 → 접선 공식 → 점 대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "기울기가 주어진 포물선의 접선의 방정식(y=mx+p/m)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    주어진 직선의 기울기 -2 의 수직 기울기 1/2, p=-2 이므로 p/m=-4. 부호가 두 번 뒤집히는 자리(수직·p 음수)가 유일한 함정이다.
    필수 예제 e1 의 확인체크라 같은 층 ★2. 통찰 없음.
  tier: star_2
  mechanism_primary: "수직 → m=1/2 → y=½x+p/m=½x-4 → (-2,k) 대입 → k"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/54-94.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "4p(-8)·수직 대상 직선의 기울기(-2)·점의 x좌표(-2)를 바꾼다. 제약: 수직 기울기 m=-1/(기울기)가 단위분수가 되도록 대상 기울기를 정수로 두면 p/m 이 정수로 떨어진다."
    creative: "(1) k 를 주고 4p 를 묻는 역방향으로 바꾸면 I-BW 1개 추가·★3 (2) 수직인 두 접선을 동시에 요구하면 58-111 골조(★3) (3) 「점 (-2,k)가 접점이다」로 바꾸면 접점 공식 유형으로 이동(★2)."
```

```yaml
- id: GN-GEO-54-95
  page: 54
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    포물선 $y^2=\dfrac{1}{3}x$ 에 접하고 $x$축의 양의 방향과 $45^\circ$ 를 이루는 직선이 $ax+by+1=0$ 일 때 $a-b$ 의 값.
  category: "각 → 기울기 → 접선 공식 → 상수항 1 로 정규화하여 계수 비교"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "기울기가 주어진 포물선의 접선의 방정식(y=mx+p/m)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    tan45°=1 로 기울기를 읽고 4p=1/3 에서 p=1/12, 접선은 y=x+1/12. 여기서 끝내지 않고 상수항이 1 이 되도록 양변에 12 를 곱해 계수를 비교하는 정규화 한 단계가 더 있다(T-표기).
    계산이 분수라 M_k 2. 확인체크 ★2 유지.
  tier: star_2
  mechanism_primary: "45° → m=1 → y=x+1/12 → 12x-12y+1=0 으로 정규화 → a-b"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$24$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/54-95.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "4p(1/3)와 각(45°)을 바꾼다. 제약: 각은 tan 값이 유리수·간단한 무리수인 30·45·60·135 만 쓰고, ax+by+1=0 꼴로 정규화했을 때 a,b 가 정수가 되도록 p/m 을 단위분수로 맞출 것."
    creative: "(1) 답을 a+b·ab 로 바꾸면 ★2 유지 (2) 각을 135°로 주면 부호 함정이 하나 늘어 ★2 상단 (3) ax+by+1=0 대신 「원점과 접선 사이의 거리」를 묻게 하면 점과 직선 거리 공식이 붙어 ★2~3(55-98 골조)."
```

```yaml
- id: GN-GEO-54-96
  page: 54
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    포물선 $y^2=-6x$ 에 접하고 직선 $y=-x+2$ 와 평행한 직선이 좌표축과 만나는 점을 $\pt{A}$, $\pt{B}$ 라 할 때 삼각형 $\pt{OAB}$ 의 넓이.
  category: "접선 → 두 절편 → 직각삼각형 넓이"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "기울기가 주어진 포물선의 접선의 방정식(y=mx+p/m)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    m=-1, p=-3/2 이므로 접선은 y=-x+3/2. 원점과 두 절편이 만드는 직각삼각형이라 넓이는 |x절편·y절편|/2 한 줄.
    접선을 구한 뒤 기하량으로 넘어가는 첫 배치이지만 전환이 자명해 통찰로 세지 않았다. 확인체크 ★2.
  tier: star_2
  mechanism_primary: "평행 → m=-1 → y=-x+3/2 → 두 절편 3/2, 3/2 → 넓이 = ½·|절편 곱|"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{9}{8}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/54-96.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "4p(-6)와 평행 직선의 기울기(-1)를 바꾼다. 제약: 삼각형이 만들어지려면 m≠0 이고 접선이 원점을 지나지 않아야 한다(p/m≠0 은 자동). 두 절편이 분수여도 넓이가 기약분수로 떨어지게 p 와 m 을 고를 것."
    creative: "(1) 넓이를 주고 p 를 묻는 역방향으로 바꾸면 I-BW 1개·★3(57-107 골조와 같은 계열) (2) 좌표축 대신 준선·y축으로 둘러싸인 도형을 묻기(★3) (3) 접선과 x축·포물선으로 둘러싸인 영역이면 적분이 필요해 단원 밖으로 나간다 — 피할 것."
```

```yaml
- id: GN-GEO-55-e2
  page: 55
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    포물선 $y^2=-x$ 위의 점 $(-4,\,a)$ ($a>0$) 에서의 접선의 방정식.
  category: "곡선 위 조건으로 접점 완성 → 접점 공식 대입"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "포물선 위의 점에서의 접선의 방정식(접점 공식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    접점의 y좌표가 미지수라 먼저 a^2=4 로 a=±2 를 얻고 a>0 으로 하나를 고른 뒤 y_1y=2p(x+x_1) 에 넣는다.
    「접점을 완성한 뒤 공식」이라는 두 단계 구조가 이 유형의 대표 발문이다. 부호 조건은 단순 T-부호라 통찰로 세지 않음. 필수 예제 ★2.
  tier: star_2
  mechanism_primary: "곡선 위 조건 a^2=4 → a>0 으로 a=2 → 2y=-½(x+4) → y=-¼x+1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$y=-\dfrac{1}{4}x+1$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/55-e2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "4p(-1)와 접점의 x좌표(-4)를 바꾼다. 제약: 접점의 x좌표를 넣었을 때 y^2 이 완전제곱수가 되어야 a 가 유리수로 떨어진다. p 가 음수면 x좌표도 음수여야 곡선 위 점이 존재한다(T-범위)."
    creative: "(1) a>0 조건을 빼고 「접선을 모두 구하시오」로 하면 대칭 두 개·★2 (2) 미지수를 4p 쪽에 두면 55-97(★2) (3) 접선과 초점·준선의 관계를 덧붙이면 55-98·55-99(★2 상단)."
```

```yaml
- id: GN-GEO-55-97
  page: 55
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    상수 $k$ 에 대하여 포물선 $x^2=ky$ 위의 점 $(6,\,3)$ 에서의 접선의 방정식.
  category: "곡선 위 조건으로 k 결정 → x^2 형 접점 공식 대입"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "포물선 위의 점에서의 접선의 방정식(접점 공식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    55-e2 와 거울상. 미지수가 접점이 아니라 곡선의 계수 k 에 있어 36=3k 로 k=12 를 먼저 확정한 뒤 x_1x=2p(y+y_1) 에 넣는다.
    곡선의 계수가 매개변수라 M_a 2. 확인체크 ★2.
  tier: star_2
  mechanism_primary: "점을 곡선에 대입 → k=12 → x^2=12y, 2p=6 → 6x=6(y+3) → y=x-3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$y=x-3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/55-97.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "점 (6,3)을 바꾼다. 제약: k=x^2/y 가 정수(가능하면 4의 배수)가 되도록 점을 고르고, y≠0 이어야 한다(원점은 k 를 결정하지 못한다 — T-범위)."
    creative: "(1) 접선의 기울기를 주고 k 를 묻는 역방향이면 I-BW·★3 (2) y^2=kx 형으로 바꿔 부호를 섞기(★2) (3) 「이 접선이 원 C 와 만나도록」을 붙이면 58-110 골조(★3)."
```

```yaml
- id: GN-GEO-55-98
  page: 55
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    포물선 $y^2=6x$ 위의 점 $\left(\dfrac{1}{2},\,\sqrt{3}\right)$ 에서의 접선과 이 포물선의 초점 사이의 거리.
  category: "접점 공식 → 일반형 정리 → 초점 좌표 → 점과 직선 사이의 거리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "포물선 위의 점에서의 접선의 방정식(접점 공식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    접선을 구한 뒤 ax+by+c=0 으로 정리하고 초점 (3/2,0) 을 거리 공식에 넣는 3단 조립. 무리수 계수라 분모 유리화까지 가야 해서 M_k 2.
    도구는 모두 표준이고 조립 순서도 발문에 드러나 통찰 없음. 확인체크 ★2.
  tier: star_2
  mechanism_primary: "2p=3 → √3y=3(x+½) → 일반형 → 초점 (3/2,0) 대입 → 점과 직선 거리"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\sqrt{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/55-98.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "4p(6)와 접점을 바꾼다. 제약: 접점은 매개변수 (pt^2, 2pt) 로 잡아 곡선 위임을 보장하고, 거리 계산의 분모 √(a^2+b^2) 가 정리되도록 t 를 무리수 한 겹까지만 둘 것."
    creative: "(1) 초점 대신 원점·준선 위의 점과의 거리로 바꾸면 ★2 유지 (2) 거리를 주고 접점을 묻는 역방향이면 I-BW·★3 (3) 「접선과 준선의 교점」을 묻게 하면 57-105 골조(★2)."
```

```yaml
- id: GN-GEO-55-99
  page: 55
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    포물선 $y^2=-4x$ 위의 점 $(-2,\,2\sqrt{2})$ 에서의 접선과 수직이고 이 포물선의 초점을 지나는 직선의 $y$절편.
  category: "접점 공식 → 기울기 → 수직 기울기 → 초점 지나는 직선 → y절편"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "포물선 위의 점에서의 접선의 방정식(접점 공식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    접선의 기울기 -1/√2 → 수직 기울기 √2, 초점 (-1,0) 을 지나므로 y=√2(x+1), y절편 √2.
    무리수 기울기의 역수·부호 처리가 유일한 마찰이다(T-부호·T-표기). 도구 세 개의 직렬 조립, 통찰 없음. 확인체크 ★2.
  tier: star_2
  mechanism_primary: "접선 기울기 = 2p/y_1 → 수직 기울기 √2 → 초점 (-1,0) 통과 → y절편"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\sqrt{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/55-99.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "4p(-4)와 접점을 바꾼다. 제약: 접점 y좌표가 2p 의 약수 관계일 때 기울기가 예쁘고, y절편이 무리수 한 겹으로 끝나도록 초점의 x좌표를 정수로 둘 것."
    creative: "(1) 수직 대신 평행으로 바꾸면 계산이 한 겹 줄어 ★2 하단 (2) 「이 직선이 포물선과 만나는 다른 점」을 묻게 하면 연립이 붙어 ★3 (3) 접선과 수직인 직선이 준선과 만나는 점까지 확장하면 ★3."
```

```yaml
- id: GN-GEO-56-e3
  page: 56
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    점 $(-1,\,1)$ 에서 포물선 $y^2=8x$ 에 그은 두 접선의 기울기의 곱.
  category: "곡선 밖의 점 → m 에 대한 이차방정식 → 근과 계수의 관계"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 접선의 기울기를 m 에 대한 이차방정식 m^2+m-2=0 의 두 근으로 동치 변환해, 근을 구하지 않고 근과 계수의 관계로 곱을 읽음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "포물선 밖의 점에서 그은 접선의 방정식(기울기 이차방정식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y=mx+p/m 에 (-1,1) 을 넣고 양변에 m 을 곱하면 m 의 이차방정식이 나온다. 여기서 두 근을 따로 구하지 않고 곱만 읽는 것이 이 유형의 표준 착안(I-EQV d1).
    「기울기의 곱」을 묻는 발문 자체가 근과 계수의 관계를 유도하는 신호다. 필수 예제 ★2, 통찰 1개 d1 이라 ±1 조정 없음.
  tier: star_2
  mechanism_primary: "y=mx+2/m 에 (-1,1) 대입 → m^2+m-2=0 → 근과 계수의 관계로 기울기의 곱"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-2$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/56-e3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "4p(8)와 외부점 (-1,1)을 바꾼다. 제약: 외부점이 포물선 바깥이어야 두 접선이 생기므로 y_0^2 > 4p x_0 을 확인할 것. m 의 이차방정식 계수가 정수가 되도록 외부점을 정수점으로 둘 것."
    creative: "(1) 기울기의 합·제곱의 합을 묻기(★2 유지) (2) 두 접선이 수직이라는 조건을 주고 외부점을 묻게 하면 58-111(★3) (3) 두 접점을 구해 삼각형의 무게중심·넓이로 확장하면 57-106·58-113 계열(★2~4)."
```

```yaml
- id: GN-GEO-56-100
  page: 56
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    점 $(0,\,2)$ 에서 포물선 $x^2=-2y$ 에 그은 접선의 방정식을 모두 구하기.
  category: "x^2 형 곡선 밖의 점 → y=mx-pm^2 대입 → m 이차방정식"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "포물선 밖의 점에서 그은 접선의 방정식(기울기 이차방정식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x^2=4py 형이라 y=mx-pm^2 을 쓴다. 외부점이 y축 위라 m 의 일차항이 사라져 m^2=4 로 바로 갈리고 두 접선이 y축 대칭으로 나온다.
    이차방정식이 완전제곱꼴로 무너져 근과 계수의 관계를 쓸 일이 없어 절차형. 확인체크 ★2.
  tier: star_2
  mechanism_primary: "p=-½ → y=mx+½m^2 → (0,2) 대입 → m^2=4 → m=±2 → 접선 둘"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$y=\pm 2x+2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/56-100.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "4p(-2)와 외부점의 y좌표(2)를 바꾼다. 제약: 외부점을 y축 위에 두면 m^2 = (상수) 꼴이 되므로 그 상수가 완전제곱이어야 m 이 유리수. 점이 곡선의 오목한 쪽 바깥에 있어야 접선이 둘이다(T-범위)."
    creative: "(1) 외부점을 y축에서 떼면 m 의 일차항이 살아나 56-101 골조(★2) (2) 두 접선이 이루는 각을 묻기(★3) (3) 두 접선과 준선으로 둘러싸인 삼각형의 넓이로 확장하면 ★3~4."
```

```yaml
- id: GN-GEO-56-101
  page: 56
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    점 $(2,\,1)$ 에서 포물선 $y^2=-4x$ 에 그은 접선 중 기울기가 양수인 것이 점 $(4,\,k)$ 를 지날 때 $k$ 의 값.
  category: "m 이차방정식 → 두 근 중 부호 조건으로 선택 → 점 대입"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "포물선 밖의 점에서 그은 접선의 방정식(기울기 이차방정식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    p=-1 이므로 y=mx-1/m, (2,1) 대입 후 정리하면 2m^2-m-1=0. 두 근 중 양수 하나만 골라 접선을 확정하고 (4,k) 를 넣는다.
    근을 실제로 구해야 하므로 56-e3 와 달리 근과 계수의 관계가 쓰이지 않는다 — 절차형. 부호 조건은 단순 선택(T-부호). 확인체크 ★2.
  tier: star_2
  mechanism_primary: "y=mx-1/m 에 (2,1) 대입 → 2m^2-m-1=0 → 양수 근 m=1 → y=x-1 → (4,k)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/56-101.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "4p(-4)·외부점 (2,1)·마지막 점의 x좌표(4)를 바꾼다. 제약: m 의 이차방정식이 유리근을 갖도록 판별식이 완전제곱이어야 하고, 두 근의 부호가 갈려야 「기울기가 양수인 것」이 한 개로 결정된다."
    creative: "(1) 「기울기가 음수인 것」으로 바꾸면 같은 ★2 (2) 두 접선의 교점·접점을 모두 쓰게 하면 ★3 (3) 지나는 점 대신 두 접선 사이의 각·접점 사이의 거리를 물으면 ★3."
```

### 연습문제 STEP 1

```yaml
- id: GN-GEO-57-102
  page: 57
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    직선 $y=2x$ 를 $x$축의 방향으로 $k$ 만큼 평행이동하면 포물선 $x+2y^2=0$ 에 접한다. $k$ 의 값.
  category: "표준형 정리 → 기울기 2 접선 → 평행이동한 직선과 계수 비교"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "기울기가 주어진 포물선의 접선의 방정식(y=mx+p/m)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x+2y^2=0 을 y^2=-x/2 로 정리해 p=-1/8 을 읽는 것이 첫 관문(T-표기). 평행이동한 직선 y=2(x-k) 와 접선 y=2x+p/m 을 y절편끼리 맞추면 끝.
    평행이동은 기울기를 바꾸지 않는다는 점만 쓰면 되므로 통찰 없음. STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: "y^2=-x/2 로 정리 → m=2 접선 y=2x-1/16 → y=2(x-k) 와 y절편 비교 → k"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{32}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/57-102.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "포물선의 계수(2)·직선의 기울기(2)·이동 방향을 바꾼다. 제약: 표준형으로 고쳤을 때 4p 가 간단한 분수여야 하고, p/m 이 유한소수로 떨어져 k 가 기약분수로 끝나게 할 것."
    creative: "(1) y축 방향 평행이동으로 바꾸면 절편만 비교해 ★2 하단 (2) 접하지 않고 「서로 다른 두 점에서 만나도록」으로 바꾸면 판별식 범위 문제·★3 (3) 평행이동량 대신 포물선의 계수를 묻는 역방향이면 I-BW·★3."
```

```yaml
- id: GN-GEO-57-103
  page: 57
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    포물선 $y^2=12x$ 위의 두 점 $(a,\,b)$, $(3,\,-6)$ 에서의 접선이 수직일 때 $ab$ 의 값.
  category: "접점에서의 접선 기울기 = 2p/y_1 → 수직 조건 → 접점 좌표 역산"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "포물선 위의 점에서의 접선의 방정식(접점 공식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (3,-6) 의 접선 기울기 -1 을 구하고, 수직이므로 다른 접선의 기울기는 1. 접점에서의 기울기가 2p/y_1=6/b 이므로 b=6, 곡선 위 조건으로 a=3.
    「기울기 → 접점」 역방향이 한 번 들어가지만 공식 한 줄이라 통찰로 세지 않았다. STEP 1 ★2.
  tier: star_2
  mechanism_primary: "(3,-6) 접선 기울기 -1 → 수직 기울기 1 = 6/b → b=6 → 곡선 위 조건으로 a=3 → ab"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$18$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/57-103.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "4p(12)와 주어진 접점(3,-6)을 바꾼다. 제약: 주어진 접점의 기울기 2p/y_1 이 유리수여야 하고, 수직 기울기로 역산한 b=2p/m 을 곡선에 넣은 a=b^2/(4p) 도 유리수가 되게 할 것."
    creative: "(1) 수직 대신 「두 접선이 이루는 각이 45°」로 바꾸면 tan 덧셈정리가 붙어 ★3 (2) 두 접선의 교점을 묻게 하면 「수직인 두 접선의 교점은 준선 위」로 연결돼 ★3(58-111) (3) 두 접점과 원점이 만드는 삼각형 넓이로 확장하면 ★3."
```

```yaml
- id: GN-GEO-57-104
  page: 57
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    포물선 $y^2=4x$ 위의 점 $\pt{P}(a,\,b)$ 에서의 접선이 $x$축과 만나는 점을 $\pt{Q}$ 라 할 때 $\seg{PQ}=4\sqrt{3}$ 이면 $a^2+b^2$ 의 값.
  category: "접선의 x절편 = -a → 거리 조건을 a 의 이차방정식으로 → 정의역으로 근 선택"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "포물선 위의 점에서의 접선의 방정식(접점 공식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    접선 by=2(x+a) 에 y=0 을 넣으면 Q(-a,0), 즉 x절편은 접점 x좌표의 부호 반대다. PQ^2=4a^2+b^2 에 곡선 조건 b^2=4a 를 넣으면 a 의 이차방정식.
    음의 근은 포물선의 정의역 a≥0 으로 버린다(T-범위·T-부호). 계산량은 STEP 2 급이나 도구는 전부 표준이고 통찰 0 → 구역 신호대로 ★2. [분류 이슈] ★2/★3 경계.
  tier: star_2
  mechanism_primary: "접선의 x절편 -a → PQ^2=4a^2+b^2 → b^2=4a 대입 → a^2+a-12=0 → a≥0 로 a=3 → a^2+b^2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$21$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/57-104.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "4p(4)와 PQ 의 길이(4√3)를 바꾼다. 제약: PQ^2 = 4a^2+4pa 가 a 의 유리근을 갖도록 길이의 제곱을 정수로 두고, 양의 근이 하나만 나오게 할 것."
    creative: "(1) Q 를 y축과의 교점으로 바꾸면 절편이 접점의 y좌표 절반이라 계산이 줄어 ★2 (2) 삼각형 PQF(F는 초점)의 넓이를 묻게 하면 ★3 (3) PQ 의 최솟값을 묻는 최적화로 바꾸면 I-RT 1개 추가·★3."
```

```yaml
- id: GN-GEO-57-105
  page: 57
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제"
  summary: |
    양수 $p$ 에 대하여 포물선 $y^2=4px$ 위의 점 $\left(\dfrac{1}{p},\,2\right)$ 에서의 접선이 준선과 만나는 점의 $y$좌표가 $-\dfrac{5}{4}$ 일 때 $p$ 의 값. 5지선다.
  category: "매개변수 접점의 접선 → 준선 x=-p 대입 → p 의 이차방정식"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "포물선 위의 점에서의 접선의 방정식(접점 공식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    접점 (1/p, 2) 는 p 와 무관하게 항상 곡선 위에 있고, 접선은 2y=2p(x+1/p) 즉 y=px+1 로 깔끔히 정리된다. 준선 x=-p 를 넣어 1-p^2=-5/4.
    p 가 접점·준선 양쪽에 들어가 M_a 2 이지만 도구는 공식 두 개뿐이라 통찰 0 → 기출 태그 보너스 +0. STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: "접선 y=px+1 → 준선 x=-p 대입 → 1-p^2=-5/4 → p>0 으로 p=3/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/57-105.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접점의 y좌표(2)와 준선 위 교점의 y좌표(-5/4)를 바꾼다. 제약: 접점은 반드시 (y_0^2/(4p), y_0) 꼴로 두어 p 와 무관하게 곡선 위에 있게 하고, 최종 p^2 이 양의 유리수 제곱으로 떨어지게 할 것."
    creative: "(1) 준선 대신 y축·초점을 지나는 세로선과의 교점으로 바꾸면 ★2 (2) 접선이 준선과 만나는 점과 초점을 이은 선분의 성질(접선은 이 선분을 수직이등분)로 확장하면 I-SYM·★4 (3) p 를 주고 교점을 묻는 순방향이면 ★1~2."
```

```yaml
- id: GN-GEO-57-106
  page: 57
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    점 $\pt{P}(-2,\,0)$ 에서 포물선 $y^2=12x$ 에 그은 두 접선의 접점을 $\pt{A}$, $\pt{B}$ 라 할 때 삼각형 $\pt{PAB}$ 의 무게중심의 좌표.
  category: "외부점에서 그은 두 접선 → 접점 좌표 → 무게중심"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "외부점이 x축(포물선의 축) 위에 있어 두 접점이 축에 대칭임을 보고, 무게중심의 y좌표를 계산 없이 0 으로 확정하고 x좌표만 구함"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "포물선 밖의 점에서 그은 접선의 방정식(기울기 이차방정식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    0=-2m+3/m 에서 m^2=3/2, 접점은 (p/m^2, 2p/m) 이므로 두 접점의 x좌표가 모두 2 로 같고 y좌표는 부호만 반대다.
    대칭을 먼저 보면 무게중심 y좌표는 0, x좌표는 (-2+2+2)/3 한 줄로 끝난다(I-SYM d1). 통찰 1개·d1 이라 ±1 조정 없이 STEP 1 ★2. [분류 이슈] 계산량은 ★3 급.
  tier: star_2
  mechanism_primary: "y=mx+3/m 에 (-2,0) 대입 → m^2=3/2 → 접점 (3/m^2, 6/m)=(2, ±2√6) → 대칭으로 무게중심"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\left(\dfrac{2}{3},\,0\right)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/57-106.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "4p(12)와 외부점의 x좌표(-2)를 바꾼다. 제약: 외부점을 x축 위 (-c,0) (c>0) 에 두면 접점의 x좌표가 항상 c 로 나와 무게중심 x좌표가 c/3 으로 떨어진다. 이 구조를 유지하려면 외부점을 축 위에 둘 것."
    creative: "(1) 외부점을 축에서 떼면 대칭이 깨져 두 접점을 모두 계산해야 하므로 ★3 (2) 무게중심 대신 삼각형 PAB 의 넓이를 물으면 ★3 (3) 삼각형이 정삼각형이 되도록 외부점을 정하라고 하면 58-113(★4)."
```

### 연습문제 STEP 2

```yaml
- id: GN-GEO-57-107
  page: 57
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    포물선 $y^2=4px$ ($p<0$) 에 접하고 기울기가 $-1$ 인 직선 $l_1$, 그 접점을 지나고 $l_1$ 에 수직인 직선 $l_2$, 두 직선과 $y$축으로 둘러싸인 삼각형의 넓이가 $2$ 일 때 상수 $p$ 의 값.
  category: "매개변수 접선·접점 → 두 y절편과 접점 → 넓이 방정식 → p"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 3
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "삼각형을 y축을 밑변으로 보아 밑변 = 두 y절편의 차, 높이 = 접점의 x좌표로 옮겨 넓이를 p 만의 식 p^2 으로 바꿈"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "기울기가 주어진 포물선의 접선의 방정식(y=mx+p/m)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    l_1: y=-x-p, 접점은 (p, -2p), l_2: y=x-3p. 두 직선의 y절편이 -p, -3p 이고 교점이 접점이므로 밑변 |2p|·높이 |p| 로 넓이 = p^2 = 2.
    좌표 대신 「밑변을 y축에 놓는다」로 보는 전환이 계산을 한 줄로 줄인다(I-RT d1). p<0 이라 부호·절댓값 처리가 두 겹(T-부호·T-범위). STEP 2 ★3 유지.
  tier: star_3
  mechanism_primary: "m=-1 접선 y=-x-p → 접점 (p,-2p) → l_2: y=x-3p → y절편 차 |2p|·높이 |p| → p^2=2, p<0"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-\sqrt{2}$'
  answer_source: "답지"
  figure: "crop:fig-57-107.png"
  latex: latex-bank/gn-geo/items/57-107.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기울기(-1)와 넓이(2)를 바꿀 수 있다. 제약: 그림 라벨 l_1·l_2 와 p<0 조건은 고정. 기울기를 ±1 이 아닌 m 으로 두면 넓이가 p^2 의 유리수배가 되므로 그 배수까지 고려해 넓이 값을 완전제곱 꼴로 고를 것."
    creative: "(1) p 를 주고 넓이를 묻는 순방향이면 ★2 (2) y축 대신 준선으로 둘러싸인 도형을 묻게 하면 ★3 상단 (3) l_2 를 접점이 아니라 초점을 지나는 수선으로 바꾸면 초점 성질이 얽혀 ★4."
```

```yaml
- id: GN-GEO-58-108
  page: 58
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    포물선 $y^2=-8x$ 위의 점과 직선 $2x+y-6=0$ 사이의 거리의 최솟값.
  category: "거리 최소 → 주어진 직선과 평행한 접선 → 두 평행선 사이의 거리"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "곡선 위 점의 거리 최솟값 문제를 「직선과 평행한 접선의 접점에서 최소」라는 기하 명제로 옮겨, 이차함수 최소 대신 접선 공식 한 줄로 해결"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "기울기가 주어진 포물선의 접선의 방정식(y=mx+p/m)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    점을 매개변수로 두고 거리 함수를 최소화해도 풀리지만, 평행한 접선으로 옮기면 접선 2x+y-1=0 과 원 직선 사이의 거리 한 줄이다(I-RT d2).
    이 전환을 못 보면 무리식·이차함수 최소로 돌아가 길어진다. M_total 5 로 낮지만 통찰 d2 가 있어 −1 조정 없음. STEP 2 ★3.
  tier: star_3
  mechanism_primary: "최소 거리 → 기울기 -2 인 접선 y=-2x+1 → 두 평행선 2x+y-6=0, 2x+y-1=0 사이의 거리"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\sqrt{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/58-108.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "4p(-8)와 직선의 계수(2, 1, -6)를 바꾼다. 제약: 직선이 포물선과 만나지 않아야 최솟값이 0 이 아니다(판별식으로 확인). 접선의 상수항 p/m 이 정수가 되도록 m 을 p 의 약수로 둘 것."
    creative: "(1) 「거리가 최소인 점의 좌표」를 묻게 하면 접점까지 구해야 해 ★3 유지 (2) 직선을 포물선과 만나게 바꾸면 최솟값 0 인 함정 문제·★3 (3) 거리의 최솟값을 주고 직선의 상수항을 묻는 역방향이면 I-BW 추가·★4."
```

```yaml
- id: GN-GEO-58-109
  page: 58
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    두 포물선 $2y^2=x$, $x^2=32y$ 가 기울기 $-\dfrac{1}{4}$ 인 직선 $l$ 에 동시에 접할 때 두 접점 $\pt{A}$, $\pt{B}$ 를 잇는 선분의 중점의 좌표.
  category: "두 표준형 각각에 기울기 접선 공식 → 접점 좌표 두 개 → 중점"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 포물선의 공통접선과 접점(기울기 접선 공식 두 형)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    2y^2=x 는 y^2=x/2 (p=1/8), x^2=32y 는 p=8. 같은 기울기의 접선을 각각 구하면 두 식이 같은 직선으로 맞아떨어지고, 접점은 y^2 형 (p/m^2, 2p/m), x^2 형 (2pm, pm^2) 로 읽는다.
    도구는 익힌 공식 두 개뿐이지만 두 표준형을 오가며 접점 공식의 방향을 바꿔야 해 표기 함정이 겹친다(T-표기·T-부호). 통찰 0·M_total 7 → STEP 2 ★3 유지.
  tier: star_3
  mechanism_primary: "두 곡선 표준형 정리 → m=-1/4 접선 각각 → 같은 직선 확인 → 접점 (2,-1), (-4,½) → 중점"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\left(-1,\,-\dfrac{1}{4}\right)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/58-109.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 포물선의 계수(2, 32)와 기울기(-1/4)를 바꾼다. 제약: 두 접선이 실제로 같은 직선이어야 하므로 p_1/m = -p_2 m^2 을 먼저 만족시키도록 계수를 역설계할 것. 접점 좌표가 정수·간단한 분수로 떨어지게 m 을 단위분수로."
    creative: "(1) 기울기를 주지 않고 「공통접선을 구하시오」로 하면 m 방정식을 풀어야 해 ★4 (2) 중점 대신 선분 AB 의 길이·기울기를 묻기(★3) (3) 한 곡선을 원으로 바꾸면 원과 포물선의 공통접선·★4."
```

```yaml
- id: GN-GEO-58-110
  page: 58
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["평가원 기출"]
  category_type: "연습문제"
  summary: |
    중심 $(1,\,0)$, 반지름 $6$ 인 원 $C$ 와 포물선 $y^2=4x$ 위의 점 $(n^2,\,2n)$ 에서의 접선이 만나도록 하는 자연수 $n$ 의 개수. 5지선다.
  category: "매개변수 접점의 접선 → 원과 만날 조건(중심까지 거리 ≤ 반지름) → 자연수 개수"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「접선이 원과 만난다」를 「중심과 직선 사이의 거리 ≤ 6」으로 동치 변환. 거리식 (1+n^2)/√(1+n^2) 이 √(1+n^2) 로 약분돼 부등식이 n^2 ≤ 35 로 단순화"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "포물선 위의 점에서의 접선의 방정식(접점 공식)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    접점이 매개변수 (n^2, 2n) 로 주어져 접선은 x-ny+n^2=0. 만날 조건을 거리 부등식으로 옮기면 약분이 일어나 n^2 ≤ 35, 자연수는 1~5 로 5개.
    경계 포함(접하는 경우도 만남)과 자연수 범위가 함정이다(T-경계·T-범위). 기출 태그 +0~1 중, 통찰이 표준 I-EQV d1 한 개라 +0 으로 두고 STEP 2 ★3. [분류 이슈] ★4 후보.
  tier: star_3
  mechanism_primary: "접선 x-ny+n^2=0 → |1+n^2|/√(1+n^2)=√(1+n^2) ≤ 6 → n^2 ≤ 35 → 자연수 1~5"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/58-110.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "원의 중심(1,0)·반지름(6)과 4p(4)를 바꾼다. 제약: 중심을 포물선의 초점 (p,0) 에 두어야 거리식이 √(1+n^2) 로 약분된다 — 이 약분이 문제의 골조이므로 중심의 x좌표는 p 로 고정할 것. 반지름^2-1 이 정수여야 개수가 깔끔하다."
    creative: "(1) 「만나지 않도록」으로 뒤집으면 부등식 방향만 바뀌어 ★3 유지 (2) 접선이 원에 접하도록 하는 n 을 묻게 하면 등식·★3 (3) 접점을 (n^2,2n) 가 아닌 일반 매개변수로 두고 n 의 범위를 실수로 확장하면 ★4."
```

```yaml
- id: GN-GEO-58-111
  page: 58
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    점 $(a,\,5)$ 에서 포물선 $y^2=-8x$ 에 그은 두 접선이 수직일 때 $a$ 의 값.
  category: "외부점 → m 이차방정식 → 두 근의 곱 = -1 → a"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「두 접선이 수직」을 m 이차방정식 am^2-5m+p=0 의 두 근의 곱이 -1 이라는 조건으로 동치 변환해, 접선을 구하지 않고 근과 계수의 관계만으로 a 를 결정"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "포물선 밖의 점에서 그은 접선의 방정식(기울기 이차방정식)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    y=mx+p/m 에 (a,5) 를 넣고 m 을 곱하면 am^2-5m+p=0. 곱 p/a=-1 에서 a=-p=2, 즉 교점이 준선 위라는 사실과 일치한다.
    m 을 실제로 구하지 않는 것이 핵심(I-EQV d1). a 가 이차항 계수에 들어가 a≠0 확인도 필요하다(T-범위). STEP 2 ★3.
  tier: star_3
  mechanism_primary: "(a,5) 대입 → am^2-5m+p=0 → 근의 곱 p/a=-1 → a=-p=2 (준선 위)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/58-111.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "4p(-8)와 외부점의 y좌표(5)를 바꾼다. 제약: 답 a=-p 은 y좌표와 무관하지만, 두 접선이 실제로 존재하도록 판별식 25-4ap>0 을 만족해야 한다. y좌표는 이 부등식을 깨지 않는 범위에서만 바꿀 것."
    creative: "(1) 「두 접선이 이루는 각이 60°」로 바꾸면 tan 덧셈정리·근과 계수 결합·★4 (2) 수직인 두 접선의 자취가 준선임을 증명하게 하면 I-BW 추가·★4 (3) 교점의 y좌표까지 미지수로 두면 자취 문제로 확장·★4."
```

### 연습문제 실력 UP

```yaml
- id: GN-GEO-58-112
  page: 58
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    포물선 $y^2=16x$ 의 초점 $\pt{F}$ 를 지나고 기울기가 양수인 직선이 포물선과 만나는 두 점을 $\pt{A}$, $\pt{B}$ 라 하고 $\seg{AF}:\seg{BF}=3:2$ 일 때, 점 $\pt{A}$ 에서의 접선의 $x$절편.
  category: "포물선의 정의로 초점거리 → 초점현 관계 → 접점 x좌표 → 접선의 x절편"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "포물선의 정의로 초점거리 AF 를 준선까지의 거리, 즉 접점의 x좌표 + 4 로 옮겨 길이 비 조건을 좌표 조건으로 바꿈"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "초점을 지나는 현의 두 교점은 x좌표의 곱이 p^2=16 이라는 관계와 비 3:2 를 결합해 A 의 x좌표를 연립 없이 결정"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "초점현의 길이 비와 접선(포물선의 정의 + 접점 공식)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    직선의 방정식을 세워 연립하면 길어진다. 정의로 AF=x_A+4, BF=x_B+4 로 옮기고 초점현의 x_A·x_B=p^2=16 을 쓰면 두 식 연립으로 x_A=6.
    마지막은 접선의 x절편이 접점 x좌표의 부호 반대라는 성질 한 줄. 실력 UP ★4 출발, 통찰 2개(d2·d2)로 +1 후보지만 ★5 게이트(통찰 3개 이상)를 못 채워 ★4.
  tier: star_4
  mechanism_primary: "AF=x_A+4, BF=x_B+4 → x_Ax_B=16 과 3:2 결합 → x_A=6 → 접선의 x절편 = -x_A"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$-6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/58-112.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "4p(16)와 길이 비(3:2)를 바꾼다. 제약: x_Ax_B=p^2 과 (x_A+p)/(x_B+p)=비 를 연립했을 때 x_A 가 유리수로 떨어져야 한다. 비를 1:1 로 두면 통경(latus rectum)이 되어 문제가 무너지므로 피할 것."
    creative: "(1) x절편 대신 접선의 기울기·삼각형 AFB 의 넓이를 묻기(★4) (2) 두 점에서의 접선의 교점이 준선 위임을 쓰게 하면 I-SYM 추가·★5 후보 (3) 비 대신 AF+BF(초점현의 길이)를 주면 ★3~4."
```

```yaml
- id: GN-GEO-58-113
  page: 58
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    점 $\pt{A}(-4,\,0)$ 에서 포물선 $y^2=4px$ ($p>0$) 에 그은 두 접선의 접점을 $\pt{P}$, $\pt{Q}$ 라 할 때 삼각형 $\pt{PAQ}$ 가 정삼각형이다. 초점 $\pt{F}$ 에 대하여 삼각형 $\pt{PAF}$ 의 넓이.
  category: "축 위 외부점의 두 접점 대칭 → 정삼각형 조건으로 p 결정 → 삼각형 넓이"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "외부점을 지나는 접선 조건 4m^2=p 를 접점 좌표 (p/m^2, 2p/m)=(4, 4√p) 로 옮겨, 접점의 x좌표가 외부점 x좌표의 부호 반대인 4 로 고정됨을 확인"
    - step: 2
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "외부점이 축 위에 있어 P, Q 가 x축 대칭 → PQ 는 세로 선분, 삼각형의 높이는 A 와 접점의 x좌표 차 8 로 고정"
    - step: 3
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "정삼각형 조건을 「높이 = (√3/2)×밑변」 한 식으로 동치 변환해 p 를 결정(변의 길이를 직접 비교하지 않음)"
  insight_count: 3
  depth_score: 1.67
  type_id: null
  type_hint: "포물선 밖의 점에서 그은 접선의 방정식(기울기 이차방정식)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    접점이 (4, ±4√p) 로 잡히면 PQ=8√p, 높이는 8 로 고정되므로 정삼각형 조건이 8=(√3/2)·8√p 한 줄이 되어 p=4/3.
    이후 A(-4,0)·F(p,0) 을 밑변으로 보면 넓이는 ½·AF·|y_P|. 대칭을 먼저 보지 않으면 변의 길이 두 개를 무리식으로 비교하게 된다.
    통찰 3개에 I-SYM 이 있어 ★5 후보지만 골조가 「축 위 외부점 + 정삼각형」 표준 조합이고 novelty 0 이라 ★4 로 둔다. [분류 이슈] ★4/★5.
  tier: star_4
  mechanism_primary: "접점 (4, ±4√p) → PQ=8√p, 높이 8 → 정삼각형 8=(√3/2)·8√p → p=4/3 → 넓이=½·AF·|y_P|"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$\dfrac{64\sqrt{3}}{9}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/58-113.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "외부점의 x좌표(-4)를 바꾼다. 제약: 외부점은 반드시 x축(포물선의 축) 위에 두어야 대칭 골조가 유지된다. 외부점 (-c,0) 이면 접점 x좌표는 c, 높이는 2c 이고 p=c^2/3·(4/c^2)… 형태로 p 가 c 의 유리수배가 되므로 c 를 3의 배수 근처에서 골라 넓이가 유리화된 꼴로 떨어지게 할 것."
    creative: "(1) 정삼각형 대신 「직각삼각형」으로 바꾸면 두 접선이 수직인 경우, 즉 외부점이 준선 위 → p 가 바로 결정돼 ★3 (2) 삼각형 PAQ 의 넓이·둘레를 묻기(★4) (3) 초점 대신 준선 위의 점으로 삼각형을 만들면 ★4 (4) p 를 주고 삼각형의 모양을 판정하게 하면 ★3."
```

## 표본 판정 요약 (26문)

- ★ 분포: ★1 3 · ★2 16 · ★3 5 · ★4 2 · ★5 0
- 통찰형 8 · 절차형 18 · premium 0
- 통찰 유형 분포: I-EQV 4 · I-RT 3 · I-SYM 2 · I-CON 1 (총 10회, 8문항)
- type_hint 상위: 「포물선 위의 점에서의 접선(접점 공식)」 9 · 「기울기가 주어진 접선(y=mx+p/m)」 8 · 「포물선 밖의 점에서 그은 접선(기울기 이차방정식)」 7 · 「두 포물선의 공통접선과 접점」 1 · 「초점현의 길이 비와 접선」 1
- 구역별 ★ 중앙값: 개념원리 익히기 ★1 · 필수 예제/확인체크 ★2 · STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4 (벤더 신호와 라벨이 전 구역에서 일치, 2단 이상 어긋난 문항 없음)
- 그림: 1문(`crop:fig-57-107.png`)
- 소문항 묶음: 2문(53-91 ⑴⑵ · 53-92 ⑴~⑷), 5지선다 2문(57-105 · 58-110)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-GEO-54-e1 | 필수 예제라 ★2 출발이지만 통찰 0·M_total 5 로 산식상 −1 후보. 유형 대표 발문이라 ★2 유지 | ★1 / ★2 |
| GN-GEO-57-104 | 계산량(M_total 8)·정의역 함정은 STEP 2 급이나 도구는 전부 표준·통찰 0. 구역 신호대로 ★2 | ★2 / ★3 |
| GN-GEO-57-106 | I-SYM 통찰 1개 + M_total 7 로 체감은 ★3 이나 통찰 1개·d1 이라 +1 트리거 미달. STEP 1 ★2 유지 | ★2 / ★3 |
| GN-GEO-58-110 | 평가원 기출 +0~1 중, 통찰이 표준 I-EQV d1 하나뿐이라 +0 으로 두고 ★3 | ★3 / ★4 |
| GN-GEO-58-113 | 통찰 3개 + I-SYM 으로 ★5 게이트를 형식상 통과하나 골조가 표준 조합이고 novelty_score 0(§2.14 RED) → ★4 | ★4 / ★5 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 단원의 type_hint 는 사실상 세 갈래로 수렴한다 — ⑴ 기울기 주어진 접선 8문 · ⑵ 곡선 위의 점에서의 접선 9문 · ⑶ 곡선 밖의 점에서 그은 접선 7문. 카탈로그에서는 이 셋을 **각각 독립 유형**으로 세우는 것이 맞다(공식이 다르고 학생 오답 패턴도 다르다).
- ⑴ 안의 「평행/수직 조건으로 기울기를 주는 경우」와 「각으로 주는 경우」는 골조가 같으므로 **한 유형으로 통합**하고 base ★ 2 로 두면 된다(54-e1·54-94·54-95).
- ⑵ 안에서 「접점이 미지수」(55-e2·55-97)와 「접선을 구한 뒤 초점·준선과 엮는」(55-98·55-99·57-105) 계열은 base ★ 가 갈릴 수 있어 **하위 유형 분리**를 검토할 것.
- ⑶ 안에서 「두 접선의 기울기 곱·합을 근과 계수로 읽는」 계열(56-e3·58-111)은 I-EQV 가 고정으로 붙으므로 base ★ 3 짜리 별도 유형 후보다.
- 이 범위에만 한 번씩 나온 「두 포물선의 공통접선」(58-109)과 「초점현의 길이 비 + 접선」(58-112)은 05단원 단독으로는 표본이 부족하다. 타원·쌍곡선 접선 단원의 같은 골조 문항과 묶어 **이차곡선 공통 유형**으로 세울 것.
