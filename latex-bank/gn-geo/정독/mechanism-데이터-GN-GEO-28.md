---
name: mechanism-데이터-GN-GEO-28
description: 개념원리 기하 28 평면의 방정식(1/1 · 230~235쪽 23문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 기하 (22개정 · 학생용 PDF) · 전사본 latex-bank/gn-geo
  section: 28 평면의 방정식
  unit_code: GEO-28
  part: "1/1"
  extract_range: "230~235쪽 · 230-e8~235-499"
  total_problems: 23
  unit_total: 23
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-geo/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-geo/items/<id>.tex
  image_source: latex-bank/gn-geo/figures/ (crops.json · 이 범위는 그림 문항 0)
---

# 개념원리 기하 · 28 평면의 방정식 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 기하 28단원 「평면의 방정식」 230~235쪽 전 23문항을 다룬다. 구역은 「필수·발전 예제」(필수예제 5개 + 각 예제 뒤의 확인체크 8개) 13문 · 「연습문제 STEP 1」 5문 · 「연습문제 STEP 2」 3문 · 「연습문제 실력 UP」 2문이다. 개념원리 고등의 난이도 신호는 구역과 태그에 들어 있다 — 필수 예제(`쪽-eN` · tag 「필수」)는 ★2 출발, 그 뒤에 붙은 확인체크는 예제의 수치 변형이라 ★1 출발, 연습문제는 STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4 출발이며 여기서 M_total·통찰로 ±1 조정했다. 필수 예제는 상자 발문만 전사돼 있어(풀이·KEY Point 없음) 골조는 발문과 답에서 역산했다.

단원 전체가 하나의 도구 사슬 위에 서 있다 — **법선벡터 n 을 어디서 얻는가**(수직인 직선의 방향벡터 · 평행한 평면 · 세 점 · 두 평면의 교선 · 수선의 발)와, 얻은 n 으로 무엇을 하는가(평면식 세우기 · 직선의 매개변수 대입으로 교점 구하기)이다. 그래서 대부분의 블록이 절차형이고, 통찰은 조건을 거꾸로 읽어야 하는 문항(수선의 발 → 평면 복원 · 대칭 → 수직이등분면 · 내적 → 정사영 · 최단거리 → 대칭점)에만 붙었다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 설정 변경과 ★ 변동 지점)를 채웠다. 이 범위는 그림 문항이 없어 모든 블록의 `figure` 가 `none` 이다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-GEO-230-e8
  page: 230
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    ⑴~⑵ 법선벡터가 곧바로 정해지는 평면의 방정식 — ⑴ 점 (1,2,3)을 지나고 직선 $\dfrac{x-1}{2}=\dfrac{y-2}{4}=-z-1$ 에 수직인 평면, ⑵ 점 (2,3,-1)을 지나고 평면 $3x-2y-z=7$ 에 평행한 평면.
  category: "수직인 직선의 방향벡터·평행한 평면의 법선벡터 → 법선벡터 확정 → 점을 지나는 평면식"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "법선벡터가 주어진 평면의 방정식(수직인 직선·평행한 평면)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 소문항 모두 n 을 읽어 $n\cdot(X-P)=0$ 을 전개하는 한 단계. ⑴ 의 $-z-1$ 은 $\dfrac{z+1}{-1}$ 이라 방향벡터 z 성분이 -1 (T-표기 함정 1개).
    필수 예제 ★2 출발 · 통찰 0 · M_total 4 이지만 표기 함정과 소문항 2개가 있어 -1 하지 않고 ★2 유지.
  tier: star_2
  mechanism_primary: "수직인 직선의 방향벡터(또는 평행한 평면의 법선벡터) → n → n·(X-P)=0"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $2x+4y-z-7=0$ ⑵ $3x-2y-z-1=0$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/230-e8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지나는 점의 좌표와 직선·평면의 계수를 바꿀 수 있음. 제약: ⑴ 은 직선 표기를 $-z-1$·$\\dfrac{1-z}{2}$ 처럼 z 성분 부호가 숨는 꼴로 유지해야 함정이 살고, ⑵ 는 상수항만 달라지므로 답이 정수 계수로 정리되게 점을 고름."
    creative: "(1) 평면을 절편 조건(예: x절편이 3)으로 주고 법선벡터는 그대로 — ★2 유지 (2) '두 직선에 동시에 수직'으로 바꾸면 외적·연립이 들어가 ★3 (3) 수직 대신 '직선을 포함하는 평면'으로 바꾸면 방향벡터가 법선이 아니게 되어 조건 통합이 필요, ★3."
```

```yaml
- id: GN-GEO-230-482
  page: 230
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 점 A(1,2,-1), B(3,-1,0)을 지나는 직선과 수직이고 점 (1,-1,2)를 지나는 평면의 방정식.
  category: "두 점으로 방향벡터 → 법선벡터 → 점을 지나는 평면식"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "법선벡터가 주어진 평면의 방정식(수직인 직선)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    $\overrightarrow{AB}=(2,-3,1)$ 을 법선벡터로 써서 $2(x-1)-3(y+1)+(z-2)=0$ 한 줄. 예제 ⑴ 의 수치 변형이고 함정도 없다.
    확인체크 ★1 출발 · 통찰 0 · M_total 3 → ★1 유지.
  tier: star_1
  mechanism_primary: "AB 벡터를 법선벡터로 → n·(X-P)=0"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$2x-3y+z-7=0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/230-482.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A·B·통과점 세 좌표 모두 교체 가능. 제약: AB 성분이 작은 정수가 되게 하고, 통과점이 직선 AB 위에 있지 않게 고름(위에 있으면 평면은 여전히 유일하지만 학생이 혼동)."
    creative: "(1) 통과점을 '선분 AB 의 중점'으로 바꾸면 수직이등분면이 되어 중점 계산이 한 단계 추가, ★2 (2) '점 (1,-1,2)를 지난다' 대신 '원점을 지난다'로 하면 상수항 0, ★1 유지 (3) 평면 위의 한 점을 미지수로 두고 좌표를 묻는 꼴로 바꾸면 ★2."
```

```yaml
- id: GN-GEO-230-483
  page: 230
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    점 (3,1,-2)를 지나고 평면 $2x+3y-z=4$ 에 평행한 평면이 점 (1,a,-3)을 지날 때 $a$ 의 값.
  category: "평행 → 법선벡터 공유 → 상수항 결정 → 미지수 대입"
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행한 평면의 방정식과 미지수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    평행이므로 $2x+3y-z=k$ 로 두고 (3,1,-2) 대입해 $k=11$, 다시 (1,a,-3) 대입해 $a$ 를 푼다.
    확인체크 ★1 출발이지만 평면 확정 뒤 미지수 결정이 한 층 더 있고 Mₐ=2(매개변수) · M_total 5 → +1 하여 ★2.
  tier: star_2
  mechanism_primary: "평행 평면은 좌변 공유 → 통과점으로 상수항 k 결정 → 둘째 점 대입해 a"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/230-483.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준 평면의 계수와 두 점의 좌표 교체 가능. 제약: 미지수 자리의 계수(여기서는 y 계수 3)가 답을 정수로 만들도록 나머지 좌표를 맞춰야 함."
    creative: "(1) 미지수를 두 개로 늘려 '$a+b$ 의 값'으로 묻기(관계식 하나만 나오게) — ★2 (2) 평행 대신 '수직'으로 바꾸면 법선벡터 내적 조건이 되어 ★3 (3) 두 평면 사이의 거리를 추가로 묻기 — 점과 평면 사이의 거리 단원과 결합, ★3."
```

```yaml
- id: GN-GEO-231-e9
  page: 231
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    세 점 A(0,0,2), B(0,-14,0), C(4,-2,0)을 지나는 평면의 방정식.
  category: "세 점 대입 → 계수 연립 → 평면식"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "세 점을 지나는 평면의 방정식(계수 연립·절편형)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $ax+by+cz+d=0$ 에 세 점을 대입해 비례만 남기고 정리하는 표준 절차(축 위의 두 점 덕분에 절편형으로도 바로 잡힘).
    필수 예제 ★2 출발 · 통찰 0 이지만 3원 연립 계산이 있어 -1 하지 않고 ★2 유지.
  tier: star_2
  mechanism_primary: "세 점을 ax+by+cz+d=0 에 대입 → 계수비 연립 → 정수배로 정리"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$3x-y+7z-14=0$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/231-e9.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 점의 좌표 교체 가능. 제약: 세 점이 일직선 위에 있으면 안 되고, 계수가 정수로 떨어지도록 두 점을 좌표축 위에 두면 절편형이 쓰인다(현재 문항의 설계 의도)."
    creative: "(1) 세 점을 모두 좌표축 위에 두고 절편형 $\\dfrac{x}{a}+\\dfrac{y}{b}+\\dfrac{z}{c}=1$ 을 유도하게 하면 ★2 유지 (2) 두 벡터의 외적으로 법선벡터를 구하게 유도하면 도구가 바뀌며 ★2~3 (3) 세 점이 정하는 삼각형의 넓이나 원점에서의 거리를 덧붙이면 ★3."
```

```yaml
- id: GN-GEO-231-484
  page: 231
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    세 점 A(3,-1,0), B(2,1,-1), C(-2,0,1)을 지나는 평면이 점 $(p,1,0)$ 을 지날 때 $p$ 의 값.
  category: "세 점으로 평면 결정 → 네 번째 점 대입 → 미지수"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "세 점을 지나는 평면과 미지수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    예제 e9 와 같은 연립으로 평면을 만든 뒤 $(p,1,0)$ 을 대입해 $p$ 를 푸는 두 층 구조. 좌표에 0 이 적어 연립 계산이 e9 보다 무겁다.
    확인체크 ★1 출발 · M_total 6 · 미지수 결정 한 층 → +1 하여 ★2.
  tier: star_2
  mechanism_primary: "세 점 대입 연립 → 평면식 → (p,1,0) 대입해 p"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/231-484.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 점과 네 번째 점의 좌표 교체 가능. 제약: 세 점이 일직선이 아니어야 하고, 네 번째 점의 미지수 좌표에 곱해지는 계수가 0 이 되면 안 된다(그러면 p 가 결정되지 않음)."
    creative: "(1) 미지수를 z 좌표로 옮겨 $(0,1,q)$ 로 묻기 — ★2 유지 (2) '네 점이 한 평면 위에 있다'로 발문을 바꾸면 공면 조건 해석(I-EQV)이 생겨 ★2 통찰형(234-491 과 같은 골조) (3) 평면이 좌표축과 만나는 점을 추가로 묻기 — ★3."
```

```yaml
- id: GN-GEO-231-485
  page: 231
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    세 점 A(0,1,2), B(1,0,1), C(1,1,0)을 지나는 평면에 수직이고 점 A 를 지나는 직선의 방정식.
  category: "세 점으로 평면의 법선벡터 → 그 벡터를 방향벡터로 → 직선식"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평면에 수직인 직선의 방정식(법선벡터 = 방향벡터)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    세 점으로 법선벡터 $(2,1,1)$ 을 얻고, 평면⊥직선이면 법선벡터가 곧 방향벡터라는 단원 정리를 그대로 적용한다(같은 단원 두 도구 결합이라 통찰 카운트 제외).
    성분 1 인 좌표에서 분모를 생략해 $y-1=z-2$ 로 쓰는 표기 함정 1개. 확인체크 ★1 출발 · M_total 6 · 도구 두 개 → +1 하여 ★2.
  tier: star_2
  mechanism_primary: "세 점 → 평면의 법선벡터 n → n 을 방향벡터로 하여 A 를 지나는 직선"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{x}{2}=y-1=z-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/231-485.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 점 좌표와 지나는 점을 교체 가능. 제약: 법선벡터 성분에 0 이 생기면 직선 표기가 $x=1$ 꼴로 깨지므로 세 성분 모두 0 이 아니게 고른다."
    creative: "(1) 지나는 점을 평면 밖의 점으로 바꾸면 수선의 발 유형(233-e12)으로 이어져 ★2~3 (2) 직선 대신 '평면에 수직이고 원점을 지나는 직선과 평면의 교점'을 묻기 — 교점 계산이 붙어 ★3 (3) 세 점 대신 '두 평면의 교선에 수직'으로 바꾸면 232-487 골조, ★2~3."
```

```yaml
- id: GN-GEO-232-e10
  page: 232
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    두 평면 $3x+y-z-3=0$, $2x+2y-z-1=0$ 의 교선의 방정식.
  category: "두 평면 연립 → 한 변수를 매개변수로 → 직선의 대칭식"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 평면의 교선의 방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $x=t$ 로 두고 두 식을 연립해 $y=t-2$, $z=4t-5$ 를 얻은 뒤 $t$ 를 소거해 대칭식으로 정리하는 표준 절차.
    분모로 나눌 때 $\dfrac{z+5}{4}$ 처럼 계수가 분모로 가는 표기 함정 1개. 필수 예제 ★2 출발 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "두 평면 연립에서 한 변수를 매개변수 t 로 → 나머지 두 좌표를 t 로 → t 소거해 대칭식"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$x=y+2=\dfrac{z+5}{4}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/232-e10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 평면의 계수·상수항 교체 가능. 제약: 두 법선벡터가 평행하면 교선이 없으므로 비례하지 않게 하고, 매개변수를 소거했을 때 분모가 작은 정수가 되도록 계수를 고른다."
    creative: "(1) 교선이 지나는 점 하나와 방향벡터(두 법선의 외적)를 따로 묻는 2소문항으로 분해 — ★2 유지 (2) 교선이 특정 좌표평면과 만나는 점을 묻기(234-492 골조) — ★2 (3) 교선을 포함하고 어떤 점을 지나는 평면을 묻기(평면 다발) — ★4."
```

```yaml
- id: GN-GEO-232-486
  page: 232
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 평면 $3x+2y-4z-1=0$, $x+y-z-5=0$ 의 교선의 방정식.
  category: "두 평면 연립 → 매개변수 소거 → 직선의 대칭식"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 평면의 교선의 방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e10 과 같은 골조이나 $z=t$ 로 두면 $x=2t-9$, $y=14-t$ 로 부호가 섞여 정리 부담이 크다.
    답 표기 $14-y$ 처럼 계수 -1 이 앞으로 나오는 꼴을 읽어야 하는 표기 함정 1개. 확인체크 ★1 출발 · M_total 6 → +1 하여 ★2.
  tier: star_2
  mechanism_primary: "두 평면 연립 → z=t 매개변수화 → t 소거해 대칭식"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{x+9}{2}=14-y=z$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/232-486.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 평면의 계수 교체 가능. 제약: 법선벡터가 비례하지 않아야 하고, 어느 변수를 매개변수로 잡아도 나머지가 정수 계수로 풀리도록 한 식의 계수를 1 로 둔다."
    creative: "(1) 교선 위의 점 중 특정 좌표가 0 인 점을 묻기 — ★2 유지 (2) 교선과 주어진 직선이 평행·수직인지 판정하게 하면 방향벡터 비교가 붙어 ★3 (3) 교선과 원점 사이의 거리 최솟값 — 수선의 발 결합, ★4."
```

```yaml
- id: GN-GEO-232-487
  page: 232
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 평면 $x+2y-3z=0$, $x-2z+1=0$ 의 교선에 수직이고 점 P(3,-1,0)을 지나는 평면의 방정식.
  category: "두 평면의 교선의 방향벡터 → 그것을 법선벡터로 → 점을 지나는 평면식"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "교선에 수직인 평면의 방정식(교선의 방향벡터 = 법선벡터)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    교선의 방향벡터 $(4,1,2)$ 를 연립(또는 두 법선의 외적)으로 얻고 그것을 새 평면의 법선벡터로 쓴다. 벡터의 역할이 방향→법선으로 한 번 뒤집히는 자리가 실질 난관이나 같은 단원 두 도구 결합이라 통찰 카운트 제외.
    [분류 이슈] 확인체크 ★1 출발에서 +1 로 ★2 를 주었지만 도구 사슬이 3단(연립→방향벡터→법선벡터)이라 체감은 ★3 에 가깝다.
  tier: star_2
  mechanism_primary: "두 평면 연립으로 교선의 방향벡터 d → d 를 법선벡터로 → d·(X-P)=0"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4x+y+2z-11=0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/232-487.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 평면의 계수와 점 P 교체 가능. 제약: 둘째 평면처럼 한 변수가 빠진 식을 하나 두면 연립이 가벼워진다. 방향벡터 성분이 작은 정수가 되게 계수를 고른다."
    creative: "(1) '교선을 포함하는 평면'으로 바꾸면 방향벡터가 법선이 아니라 법선과 수직이어야 해 조건이 하나 더 필요, ★3 (2) 교선과 새 평면의 교점 좌표까지 묻기 — ★3 (3) 교선에 수직이고 원점을 지나는 평면과 두 평면이 이루는 입체 관계를 묻기 — ★4."
```

```yaml
- id: GN-GEO-233-e11
  page: 233
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    평면 $3x-5y+4z-11=0$ 과 직선 $x-1=\dfrac{y+1}{2}=\dfrac{z-2}{3}$ 의 교점의 좌표.
  category: "직선을 매개변수로 → 평면식에 대입 → 매개변수 결정 → 좌표 복원"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직선과 평면의 교점"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    직선의 대칭식을 $=t$ 로 놓아 $(t+1,\,2t-1,\,3t+2)$ 로 바꾼 뒤 평면식에 대입해 $t$ 를 구하고 되돌린다. 이 단원의 가장 기본이 되는 매개변수 대입 골조.
    필수 예제 ★2 출발 · 통찰 0 · M_total 5 이지만 이후 문항 다수가 이 골조를 재사용하는 기준 문항이라 ★2 유지.
  tier: star_2
  mechanism_primary: "직선 대칭식 = t 로 매개변수화 → 평면식 대입 → t → 교점 좌표"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$(0,\,-3,\,-1)$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/233-e11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선의 통과점·방향벡터와 평면의 계수 교체 가능. 제약: 방향벡터와 법선벡터의 내적이 0 이면 교점이 없거나 무수히 많으므로 0 이 아니어야 하고, t 가 정수로 떨어지게 상수항을 맞춘다."
    creative: "(1) 교점과 원점 사이의 거리까지 묻기(234-493 골조) — ★2 (2) 직선의 방향벡터에 미지수를 넣고 '교점이 존재하지 않을 조건'을 묻기 — 역방향 사고가 생겨 ★3 (3) 평면과 직선이 이루는 각을 묻기 — 다음 단원 결합, ★3."
```

```yaml
- id: GN-GEO-233-e12
  page: 233
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    ⑴~⑵ 점 A(5,1,4)에서 평면 $3x+2y-z+1=0$ 에 내린 수선의 발 H 에 대하여 ⑴ 직선 AH 의 방정식, ⑵ 점 H 의 좌표.
  category: "평면의 법선벡터 = 수선의 방향벡터 → 직선 AH → 평면과의 교점 H"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평면에 내린 수선의 발"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 법선벡터 $(3,2,-1)$ 을 방향벡터로 쓰는 한 줄, ⑵ 는 e11 의 매개변수 대입. 수선의 발 = 법선 직선과 평면의 교점이라는 이 단원의 표준 2단 절차.
    z 성분이 -1 이라 답이 $4-z$ 로 적히는 표기 함정 1개. 필수 예제 ★2 출발 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "법선벡터를 방향벡터로 한 직선 AH → 평면식에 매개변수 대입 → H"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{x-5}{3}=\dfrac{y-1}{2}=4-z$ ⑵ $(2,\,-1,\,5)$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/233-e12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "점 A 와 평면 계수 교체 가능. 제약: 법선벡터 성분이 모두 0 이 아니어야 ⑴ 의 대칭식이 깨지지 않고, 매개변수가 정수로 떨어지게 A 와 상수항을 맞춘다."
    creative: "(1) 선분 AH 의 길이(=점과 평면 사이의 거리)를 추가로 묻기 — ★2~3 (2) A 의 평면에 대한 대칭점을 묻기 — H 를 중점으로 보는 한 단계가 늘어 ★3 (3) H 를 주고 평면을 복원하게 하면 역방향(235-495 골조) ★3."
```

```yaml
- id: GN-GEO-233-488
  page: 233
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    직선 $\dfrac{x+1}{2}=\dfrac{y+2}{3}=\dfrac{1-z}{2}$ 와 평면 $3x-y+4z+2=0$ 의 교점의 좌표.
  category: "직선 매개변수화(부호 주의) → 평면 대입 → 교점"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직선과 평면의 교점"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e11 과 같은 골조이나 $\dfrac{1-z}{2}$ 때문에 $z=1-2t$ 로 z 성분 부호가 뒤집힌다(T-부호 함정 1개) — 여기를 놓치면 교점이 통째로 달라진다.
    확인체크 ★1 출발 · M_total 6 · 부호 함정 → +1 하여 ★2.
  tier: star_2
  mechanism_primary: "대칭식 = t (1-z 는 z=1-2t) → 평면식 대입 → t → 교점"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$(1,\,1,\,-1)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/233-488.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선의 통과점·방향벡터와 평면의 계수 교체 가능. 제약: $\\dfrac{1-z}{2}$ 같은 반전 표기를 유지해야 이 문항의 변별점이 살고, 방향벡터와 법선벡터의 내적이 0 이 아니어야 한다."
    creative: "(1) 교점이 특정 좌표평면 위에 있을 조건으로 평면의 상수항을 미지수로 두기 — 역방향 ★3 (2) 직선 위의 점 중 평면까지의 거리가 주어진 값인 점을 묻기 — ★3 (3) 두 직선과 한 평면의 교점 두 개 사이의 거리 — ★3."
```

```yaml
- id: GN-GEO-233-489
  page: 233
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    점 A(1,2,3)에서 평면 $2x-y+3z+5=0$ 에 내린 수선의 발 H 의 좌표.
  category: "법선벡터를 방향벡터로 한 직선 → 평면 대입 → 수선의 발"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평면에 내린 수선의 발"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e12 ⑵ 의 수치 변형. $(1+2t,\,2-t,\,3+3t)$ 를 평면식에 넣어 $t=-1$ 을 얻는 두 단계로 끝난다.
    확인체크 ★1 출발 · M_total 5 · 도구 두 개(법선→직선, 직선→교점) → +1 하여 ★2.
  tier: star_2
  mechanism_primary: "A 에서 법선 방향 직선 → 평면식 대입 → t → H"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$(-1,\,3,\,0)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/233-489.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "점 A 와 평면 계수 교체 가능. 제약: 매개변수가 정수로 떨어지도록 $|n|^2$ 이 대입값을 나누게 맞춘다(현재는 $14t+14=0$)."
    creative: "(1) 수선의 발 좌표의 곱·합을 묻는 꼴로 포장(234-494 골조) — ★2 유지 (2) 점과 평면 사이의 거리 공식과 대조시키기 — ★2 (3) 평면에 대한 대칭점과 원점 사이의 거리 — ★3."
```

### 연습문제 STEP 1

```yaml
- id: GN-GEO-234-490
  page: 234
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    두 점 A(2,3,-2), B(-1,0,1)에 대하여 선분 AB 를 $1:2$ 로 내분하는 점 C 를 지나고 직선 AB 에 수직인 평면의 방정식.
  category: "내분점 공식 → 통과점 C → AB 를 법선벡터로 → 평면식"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "내분점을 지나고 직선에 수직인 평면의 방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    공간좌표의 내분점 공식으로 C(1,2,-1)을 구하고, $\overrightarrow{AB}$ 에 비례하는 $(1,1,-1)$ 을 법선벡터로 써서 평면식을 세운다. 두 도구 모두 대입 수준이라 통찰은 없다.
    내분비 $1:2$ 의 순서를 뒤집는 함정 1개. STEP 1 ★2 출발 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "AB 를 1:2 내분 → C → AB 벡터를 법선벡터로 → n·(X-C)=0"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$x+y-z-4=0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/234-490.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A·B 좌표와 내분비 교체 가능. 제약: 내분비를 $m:n$ 으로 바꿀 때 C 의 좌표가 정수가 되도록 $m+n$ 이 성분 차를 나누게 하고, AB 성분은 공약수로 약분해 법선벡터를 작게 유지한다."
    creative: "(1) 내분을 '중점'으로 바꾸면 선분 AB 의 수직이등분면이 되어 ★2 유지 (2) 외분점으로 바꾸면 부호 함정이 하나 늘어 ★2~3 (3) '평면이 원점을 지나도록 하는 내분비'를 묻는 역방향으로 바꾸면 ★3."
```

```yaml
- id: GN-GEO-234-491
  page: 234
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    네 점 A(1,-1,1), B(-1,2,1), C(4,-1,2), D(3,-4,k)가 한 평면 위에 있을 때 $k$ 의 값.
  category: "공면 조건 → 세 점이 정하는 평면 → 네 번째 점 대입"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'네 점이 한 평면 위' 를 '세 점 A·B·C 가 정하는 평면 위에 D 가 있다' 로 옮겨야 계산이 시작됨"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "네 점이 한 평면 위에 있을 조건(공면)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    공면 조건을 그대로는 쓸 수 없고 '세 점으로 평면을 만들고 나머지 한 점을 대입' 하는 동치로 옮겨야 한다(I-EQV d1). 그 뒤는 231-484 와 같은 연립.
    STEP 1 ★2 출발 · 통찰 1개(depth 1) · M_total 6 → 가산 없이 ★2.
  tier: star_2
  mechanism_primary: "A·B·C 로 평면 결정 → D 대입 → k"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/234-491.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 점의 좌표 교체 가능. 제약: 미지수를 뺀 세 점이 일직선이 아니어야 하고, D 의 미지수 좌표에 곱해지는 법선벡터 성분이 0 이 아니어야 k 가 결정된다."
    creative: "(1) 미지수를 x 좌표로 옮기기 — ★2 유지 (2) '네 점이 한 평면 위에 있지 않을 $k$ 의 범위' 로 바꾸면 부정 조건 해석이 붙어 ★3 (3) 세 벡터의 일차독립·평행육면체 부피 0 으로 접근하게 유도하면 도구가 바뀌며 ★3~4."
```

```yaml
- id: GN-GEO-234-492
  page: 234
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    두 평면 $x+y+z=3$, $2x+3y-z=5$ 의 교선이 $xy$ 평면·$yz$ 평면과 만나는 점을 각각 P, Q 라 할 때 선분 PQ 의 길이.
  category: "좌표평면 조건을 z=0·x=0 으로 → 두 평면 연립 → 두 점 사이의 거리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 평면의 교선이 좌표평면과 만나는 점과 거리"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    교선의 방정식을 따로 구하지 않고 $z=0$, $x=0$ 을 두 평면식에 바로 넣어 P(4,-1,0), Q(0,2,1)을 얻으면 끝난다. 좌표평면 ↔ 좌표 0 은 표준 동치라 통찰로 세지 않았다.
    $xy$ 평면을 $z=0$ 으로 옮기는 표기 함정 1개. STEP 1 ★2 출발 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "z=0·x=0 을 두 평면식에 대입해 P·Q → 두 점 사이의 거리"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\sqrt{26}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/234-492.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 평면의 계수·상수항 교체 가능. 제약: 교선이 두 좌표평면과 실제로 만나야 하므로 방향벡터의 해당 성분이 0 이면 안 되고, 두 점 좌표가 정수가 되게 연립을 설계한다."
    creative: "(1) 세 좌표평면과의 교점 세 개로 삼각형 넓이를 묻기 — ★3 (2) 교선의 방정식을 먼저 구하게 하면 232-e10 결합 ★2~3 (3) 'PQ 의 중점이 어떤 평면 위에 있을 조건' 으로 미지수를 넣으면 ★3."
```

```yaml
- id: GN-GEO-234-493
  page: 234
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    평면 $3x+y-2z+3=0$ 과 직선 $\dfrac{x-1}{2}=y+2=\dfrac{z-1}{3}$ 의 교점 A 와 원점 사이의 거리.
  category: "직선 매개변수화 → 평면 대입 → 교점 → 원점과의 거리"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직선과 평면의 교점과 원점 사이의 거리"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    233-e11 골조에 거리 계산 한 줄을 덧붙인 문항. $(2t+1,\,t-2,\,3t+1)$ 을 대입하면 $t+2=0$ 으로 바로 정리된다.
    STEP 1 ★2 출발 · 통찰 0 · M_total 5 이지만 도구가 둘(교점·거리)이라 -1 하지 않고 ★2 유지.
  tier: star_2
  mechanism_primary: "직선 = t 매개변수화 → 평면 대입 → A → |OA|"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$5\sqrt{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/234-493.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선의 통과점·방향벡터와 평면 계수 교체 가능. 제약: t 가 정수로 떨어지고 교점 좌표의 제곱합이 깔끔한 무리수가 되도록 고른다(현재 $\\sqrt{50}$)."
    creative: "(1) 원점 대신 주어진 점 B 와의 거리로 바꾸기 — ★2 유지 (2) 직선 위를 움직이는 점과 원점 사이의 최단거리로 바꾸면 수선의 발이 필요해 ★3 (3) 교점이 구 위에 있을 조건으로 미지수를 넣으면 ★3~4."
```

```yaml
- id: GN-GEO-234-494
  page: 234
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    점 A(6,-2,4)에서 평면 $\alpha\colon x-y+2z+2=0$ 에 내린 수선의 발의 좌표를 $(a,b,c)$ 라 할 때 $abc$ 의 값.
  category: "법선 방향 직선 → 평면 대입 → 수선의 발 → 좌표의 곱"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평면에 내린 수선의 발"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    233-e12 ⑵ 와 같은 절차. $(6+t,\,-2-t,\,4+2t)$ 를 대입해 $6t+18=0$ 에서 $t=-3$, 수선의 발 (3,1,-2)를 얻고 곱만 내면 된다.
    STEP 1 ★2 출발 · 통찰 0 · M_total 5 이지만 필수 예제의 직접 재현이라 -1 없이 ★2 유지.
  tier: star_2
  mechanism_primary: "법선 방향 직선 매개변수화 → 평면 대입 → 수선의 발 → abc"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/234-494.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "점 A 와 평면 계수 교체 가능. 제약: 매개변수가 정수로 떨어지게 $|n|^2$ 이 대입값을 나누어야 하고, 좌표의 곱을 묻으므로 성분에 0 이 생기지 않게 한다."
    creative: "(1) $a+b+c$ 나 $a^2+b^2+c^2$ 로 묻는 값만 바꾸기 — ★2 유지 (2) 수선의 발 대신 평면에 대한 대칭점의 좌표를 묻기 — 중점 관계 한 단계 추가, ★3 (3) 선분 AH 의 길이를 점과 평면 사이의 거리 공식과 대조시키기 — ★2~3."
```

### 연습문제 STEP 2

```yaml
- id: GN-GEO-235-495
  page: 235
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    점 A(1,3,-4)에서 평면 $\alpha$ 에 내린 수선의 발이 H(-2,1,2)이다. 점 $(4,k,2)$ 가 평면 $\alpha$ 위에 있을 때 $k$ 의 값.
  category: "수선의 발 조건을 거꾸로 → AH 가 법선벡터·H 가 통과점 → 평면 복원 → 미지수"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "평면이 주어지지 않은 상태에서 '수선의 발이 H' 라는 결과 조건으로부터 법선벡터 AH 와 통과점 H 를 역추적"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "수선의 발이 주어질 때 평면 복원과 미지수 결정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    앞 문항들과 방향이 반대다 — 평면에서 H 를 구하는 것이 아니라 A 와 H 로 평면을 만든다(I-BW d1). $\overrightarrow{AH}=(-3,-2,6)$ 을 법선벡터로, H 를 통과점으로 쓰면 평면이 확정되고 $(4,k,2)$ 대입으로 끝난다.
    STEP 2 ★3 출발 · 통찰 1개 · M_total 6 → 가감 없이 ★3.
  tier: star_3
  mechanism_primary: "AH 를 법선벡터, H 를 통과점으로 평면 복원 → (4,k,2) 대입 → k"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/235-495.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A·H 와 마지막 점의 좌표 교체 가능. 제약: AH 성분이 작은 정수가 되게 하고, 미지수에 곱해지는 법선벡터 성분이 0 이 아니어야 하며, 마지막 점이 H 와 다른 점이어야 한다."
    creative: "(1) 평면 $\\alpha$ 의 방정식 자체를 묻기 — ★2~3 (2) A 의 평면에 대한 대칭점을 묻기(H 가 중점) — ★3 (3) H 를 주지 않고 '평면 위의 두 점' 을 주어 법선벡터를 연립으로 찾게 하면 ★3~4."
```

```yaml
- id: GN-GEO-235-496
  page: 235
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    두 구 $(x-1)^2+(y-2)^2+(z-3)^2=1$, $(x-7)^2+(y+1)^2+z^2=4$ 의 중심이 평면 $ax+by+cz=6$ 에 대하여 대칭일 때 $a-b-c$ 의 값.
  category: "두 중심의 대칭 → 수직이등분면 → 법선벡터·중점 → 우변 6 고정으로 배율 결정"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'두 점이 평면에 대하여 대칭' 을 '평면이 두 점을 잇는 선분의 수직이등분면' 으로 읽어 법선벡터와 통과점을 한 번에 확보"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "평면식의 우변이 6 으로 고정돼 있어 법선벡터의 배율까지 결정해야 a·b·c 가 유일해짐"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "두 점이 평면에 대하여 대칭일 조건(수직이등분면)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    구는 포장일 뿐 중심 (1,2,3)·(7,-1,0)만 쓰며 반지름 1·4 는 쓰이지 않는 미끼다(T-범위 함정 1개). 대칭 → 수직이등분면으로 옮기면 법선 $(2,-1,-1)$ 과 중점 $(4,\tfrac12,\tfrac32)$ 이 동시에 나온다.
    우변이 6 으로 고정이라 상수배를 임의로 두면 안 된다는 점이 두 번째 통찰. STEP 2 ★3 출발 · 통찰 2개 → +1 하여 ★4(저노출 유형 I-SYM 보유).
  tier: star_4
  mechanism_primary: "대칭 ⟺ 수직이등분면 → 중심 차를 법선벡터, 중점을 통과점 → 우변 6 에 맞춰 배율 고정 → a-b-c"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/235-496.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 중심의 좌표와 우변 상수 교체 가능. 제약: 중점을 법선벡터에 내적한 값이 우변 상수의 배수가 되어야 $a,b,c$ 가 유리수로 떨어지고, 반지름은 답에 쓰이지 않으므로 아무 값이나 둘 수 있다(미끼 유지)."
    creative: "(1) 우변을 1 로 바꿔 배율 결정을 더 드러나게 하기 — ★4 유지 (2) 두 구가 평면에 접한다는 조건으로 바꾸면 점과 평면 사이의 거리 = 반지름이 되어 반지름이 살아나고 ★4~5 (3) 한 구의 중심을 미지수로 두고 대칭이 되게 하는 좌표를 묻는 역방향 — ★4."
```

```yaml
- id: GN-GEO-235-497
  page: 235
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    점 A(3,2,1)을 지나고 직선 $l\colon \dfrac{x-3}{3}=\dfrac{2-y}{2}=z-1$ 에 수직인 평면을 $\alpha$ 라 할 때, $\alpha$ 와 직선 $m\colon \dfrac{x-6}{5}=y=z-2$ 의 교점 B 에 대하여 선분 AB 의 길이.
  category: "l 의 방향벡터를 법선으로 평면 α → m 을 매개변수로 대입해 B → |AB|"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직선에 수직인 평면과 다른 직선의 교점·거리"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    이 단원의 세 도구(수직인 직선 → 법선벡터, 직선과 평면의 교점, 두 점 사이의 거리)를 한 줄로 이어 붙인 문항이라 각 단계는 표준이지만 사슬이 길다.
    $\dfrac{2-y}{2}$ 에서 방향벡터 y 성분이 $-2$ 인 것을 놓치면 평면이 통째로 틀린다(T-부호 함정 1개). STEP 2 ★3 출발 · 통찰 0 · M_total 6 → ★3 유지.
  tier: star_3
  mechanism_primary: "l 의 방향벡터 (3,-2,1) 을 법선으로 A 를 지나는 평면 → m 매개변수 대입 → B → |AB|"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\sqrt{13}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/235-497.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 직선의 통과점·방향벡터와 A 의 좌표 교체 가능. 제약: m 의 방향벡터와 l 의 방향벡터의 내적이 0 이면 교점이 없으므로 0 이 아니어야 하고, 매개변수가 정수로 떨어지게 상수를 맞춘다."
    creative: "(1) A 가 l 위의 점이 되게 하면 평면이 l 의 수직 단면이 되어 그림이 단순해지고 ★2~3 (2) B 대신 '평면 α 와 m 이 이루는 각' 을 묻기 — 다음 단원 결합 ★4 (3) A 에서 직선 m 까지의 최단거리로 바꾸면 수선의 발이 필요해 ★4."
```

### 연습문제 실력 UP

```yaml
- id: GN-GEO-235-498
  page: 235
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    점 A(1,2,0)에서 평면 $\sqrt{3}y-z=0$ 에 내린 수선의 발을 B 라 할 때 $\overrightarrow{OA}\cdot\overrightarrow{OB}$ 의 값(O 는 원점).
  category: "원점이 평면 위 → 내적을 정사영으로 → OA·OB = |OB|² (또는 수선의 발 직접 계산)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-SC
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "수선의 발 B 를 매개변수로 직접 구해 내적하는 갈래와, O 가 평면 위임을 보고 정사영 성질로 바로 가는 갈래 중 선택"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$\\overrightarrow{OA}\\cdot\\overrightarrow{OB}$ 를 'OA 의 평면 위 정사영이 OB' 로 읽어 $|OB|^2$ 로 전환(AB ⊥ OB 이므로)"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "평면에 내린 수선의 발과 내적(정사영)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    평면이 원점을 지나므로 OB 가 평면 위 벡터이고 AB 가 평면에 수직이라 $\overrightarrow{OA}\cdot\overrightarrow{OB}=|\overrightarrow{OB}|^2$ 로 끊긴다. 몰라도 $B(1,\tfrac12,\tfrac{\sqrt3}{2})$ 를 직접 구해 내적하면 되지만 무리수 계산이 늘어난다.
    [분류 이슈] 실력 UP ★4 출발 · 통찰 2개(SC d1·RT d2) → ★4 로 두었으나, 정사영을 못 봐도 직접 계산으로 도달하므로 체감은 ★3 에 가깝다.
  tier: star_4
  mechanism_primary: "O 가 평면 위 → OB 는 OA 의 평면 정사영 → OA·OB = |OB|² (또는 법선 매개변수로 B 직접 계산)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/235-498.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A 의 좌표와 평면의 계수 교체 가능. 제약: 평면의 상수항이 0 이어야(원점을 지나야) 정사영 골조가 유지되고, $\\sqrt{3}$ 처럼 $|n|$ 이 정리되는 계수를 써야 답이 깔끔하다."
    creative: "(1) $\\overrightarrow{OA}\\cdot\\overrightarrow{OB}$ 대신 $|\\overrightarrow{AB}|$ 나 삼각형 OAB 의 넓이를 묻기 — ★3~4 (2) 평면을 원점을 지나지 않게 바꾸면 정사영 성질이 깨져 직접 계산만 남고 ★3 (3) A 를 평면 위를 움직이는 점으로 바꿔 내적의 최댓값을 묻기 — ★5 후보."
```

```yaml
- id: GN-GEO-235-499
  page: 235
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    평면 $\alpha\colon x+2y-2z=0$ 에 대하여 같은 쪽에 있는 두 점 A(2,1,-1), B(1,2,-2)와 평면 위를 움직이는 점 P 에 대하여 $\overline{AP}+\overline{BP}$ 의 최솟값.
  category: "평면에 대한 대칭점 → 꺾은선을 직선으로 펴기 → 선분 A'B 의 길이"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "A 의 평면에 대한 대칭점 A' 를 잡으면 $\\overline{AP}=\\overline{A'P}$ 이므로 꺾은선 최솟값이 선분 A'B 로 환원됨"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "평면에 대한 대칭점을 이용한 AP+BP 의 최솟값"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    두 점이 평면의 같은 쪽이라는 단서가 대칭점 전략을 가리킨다(I-SYM d2). A 를 법선 방향으로 반사해 $A'$ 를 얻으면 $\overline{AP}+\overline{BP}\ge\overline{A'B}$ 로 끝난다.
    같은 쪽/반대쪽 판정과 대칭점 계산의 부호가 함정 1개. 실력 UP ★4 출발 · 통찰 1개(depth 2) → ★4 유지(통찰 3개 미만이라 ★5 로 올리지 않음).
  tier: star_4
  mechanism_primary: "A 의 평면 대칭점 A' → AP+BP = A'P+BP ≥ A'B → |A'B|"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$3\sqrt{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/235-499.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A·B 의 좌표와 평면의 계수 교체 가능. 제약: 두 점을 평면식에 넣은 값의 부호가 같아야(같은 쪽) 골조가 유지되고, $|n|^2=9$ 처럼 대칭점 좌표가 유리수로 떨어지는 법선벡터를 쓴다."
    creative: "(1) 두 점을 평면의 반대쪽에 두면 대칭이 필요 없어져 곧바로 $\\overline{AB}$, ★2 로 급락 — 이 문항의 ★ 를 결정하는 지점 (2) $\\overline{AP}+\\overline{BP}$ 가 최소가 되는 P 의 좌표까지 묻기 — 교점 계산이 붙어 ★5 후보 (3) 평면 대신 구면 위를 움직이게 하면 다른 단원, ★5."
```

## 표본 판정 요약 (23문)

- ★ 분포: ★1 1 · ★2 17 · ★3 2 · ★4 3 · ★5 0
- 통찰형 5(234-491 · 235-495 · 235-496 · 235-498 · 235-499) · 절차형 18 · premium 0
- 통찰 유형 분포: I-EQV 2 · I-SYM 2 · I-BW 1 · I-RT 1 · I-SC 1 (총 7라벨 / 5문항)
- type_hint 상위 5: 「평면에 내린 수선의 발」 4(233-e12 · 233-489 · 234-494 · 235-498) · 「두 평면의 교선」 4(232-e10 · 232-486 · 232-487 · 234-492) · 「법선벡터가 주어진 평면의 방정식」 3(230-e8 · 230-482 · 230-483) · 「직선과 평면의 교점」 3(233-e11 · 233-488 · 234-493) · 「세 점이 정하는 평면」 3(231-e9 · 231-484 · 231-485). 나머지 6문(234-490 · 234-491 · 235-495 · 235-496 · 235-497 · 235-499)은 이 범위에서 한 번씩만 나온 유형이다.
- 그림: 0문(이 범위 전 문항 `figure: none`)
- M_total 분포: 3 → 1문 · 4 → 1문 · 5 → 6문 · 6 → 14문 · 7 → 1문 (평균 5.6)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-GEO-232-487 | 확인체크(★1 출발)인데 도구 사슬이 3단(두 평면 연립 → 교선의 방향벡터 → 새 평면의 법선벡터)이라 체감은 ★3. 규칙상 ±1 조정 범위를 지켜 ★2 로 둠 | ★2 / ★3 |
| GN-GEO-235-498 | 실력 UP(★4 출발) · 정사영 통찰(I-RT d2)이 있으나 통찰 없이 수선의 발을 직접 구해도 풀리므로 통찰이 선택적. 라벨은 ★4 유지 | ★3 / ★4 |

카탈로그 차원 메모(나중에 기하 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: ① 「직선과 평면의 교점」(매개변수 대입)과 ② 「평면에 내린 수선의 발」은 계산 골조가 같지만(직선 → 평면 대입 → t) 법선벡터를 학생이 스스로 만드는지 여부가 달라 별도 유형이 맞다. ③ 「수선의 발·대칭점이 주어질 때 평면을 복원하는 역방향」(235-495)은 앞의 둘과 사고 방향이 반대라 반드시 독립 유형으로 둘 것. ④ 「평면에 대한 대칭점을 이용한 최단거리」(235-499)는 이 단원의 유일한 ★4~5 변별 유형.
- **통합해도 될 유형**: 「수직인 직선이 주어진 평면」과 「평행한 평면」(230-e8·230-482·230-483)은 법선벡터를 어디서 읽어 오느냐만 다르므로 base ★ 2 의 한 유형 아래 변형으로 묶어도 된다. 「두 평면의 교선의 방정식」(232-e10·232-486)과 「교선이 좌표평면과 만나는 점」(234-492)도 매개변수 소거라는 같은 골조의 포장 차이다.
- **base ★ 제안**: 법선벡터 직결형 2 · 세 점 평면 2 · 교선 2 · 교점/수선의 발 2 · 공면 조건 2 · 평면 복원(역방향) 3 · 대칭·수직이등분면 4 · 정사영 내적 4 · 대칭점 최단거리 4.
