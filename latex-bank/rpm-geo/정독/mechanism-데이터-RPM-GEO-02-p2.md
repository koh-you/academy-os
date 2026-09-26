---
name: mechanism-데이터-RPM-GEO-02-p2
description: RPM 기하 02 이차곡선의 접선(2/3 · 유형 03~08) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 기하 (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-geo
  section: 02 이차곡선의 접선
  unit_code: GEO-02
  part: "2/3"
  extract_range: "29~32쪽 · 0182~0207"
  total_problems: 26
  unit_total: 95
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 절차형(통찰 0)은 M_total ≤ 4 에서 −1, M_total 5 는 출발점 ★2 유지·출발점 ★3 이면 −1. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-geo/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-geo/items/<id>.tex
  image_source: latex-bank/rpm-geo/figures/ (crops.json)
---

# RPM 기하 · 02 이차곡선의 접선 (2/3) 정독 데이터 (v1.0)

이 파일은 RPM 기하 02 이차곡선의 접선 단원의 두 번째 범위(29~32쪽 · 0182~0207 · 26문항)를 다룬다. 구역은 「유형 03 포물선 밖의 점에서 그은 접선의 방정식」부터 「유형 08 쌍곡선의 접선의 방정식; 기울기가 주어진 경우」까지 유형 구역 여섯 개뿐이며(교과서·유형 UP·시험에 꼭 나오는 문제 구역 없음), 벤더 신호는 구역 첫 문항의 「대표문제」 태그(level 없음 · 6문), 난이도 중하 3문·중 14문·상중 3문, 「서술형」 태그 2문(0196·0206)이다. 그림은 0198 한 문항. 이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다.

★ 적용 정책: 출발점은 대표문제·level 없음 ★2, 중하 ★1~2, 중 ★2, 상중 ★3. 절차형(통찰 0)은 M_total ≤ 4(공식 대입 한두 번)에서 −1 을 적용했고, M_total 5 는 출발점이 ★2 이면 유지, ★3 이면 −1(절차형 ★3 은 M_total 6 이상을 요구) 했다. 통찰 depth 2 이상이나 2개 이상은 +1 후보로 검토했으나 이 범위에서 적용한 문항은 없다. 이차곡선 접선의 세 공식(접점꼴·기울기꼴·외부점 대입)과 「수직인 두 접선의 교점은 준선 위」 성질은 해당 유형의 기본 지식으로 보아 통찰로 세지 않았다.

## 문항 데이터

### 유형 03 포물선 밖의 점에서 그은 접선의 방정식

```yaml
- id: RPM-GEO-0182
  page: 29
  vendor_label: "유형 03 포물선 밖의 점에서 그은 접선의 방정식"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    점 (-3, 0) 에서 포물선 y^2=12x 에 그은 접선 y=mx+n 의 m^2+n^2. 5지선다.
  category: "기울기꼴 접선 y=mx+p/m → 외부점 대입 → m^2 결정 → m^2+n^2"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "포물선 밖의 점에서 그은 접선의 방정식 (기울기꼴·점 대입)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    p=3 이므로 접선 y=mx+3/m 에 (-3,0) 을 넣으면 -3m+3/m=0 → m^2=1, n=3/m. 두 접선(m=±1) 모두 m^2+n^2=10 으로 같아 갈래 선택이 필요 없다. 공식 대입 세 단계·통찰 없음·M_total 4 → 유형 출발점 ★2 에서 −1 → ★1.
  tier: star_1
  mechanism_primary: "y^2=4px 의 기울기꼴 접선 y=mx+p/m → 외부점 (-3,0) 대입 → m^2=1 → m^2+n^2=1+9"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "③"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0182.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "4p(=12)와 축 위의 외부점 (-a,0) 을 바꿀 수 있음. 축 위의 점이면 m^2=p/a 로 두 접선이 x축 대칭이라 m^2+n^2 이 하나로 정해짐. 제약: 외부점은 포물선 바깥(y0^2>4p·x0)이어야 하고 p/a 를 완전제곱으로 잡아야 m 이 유리수·선택지가 정수."
    creative: "(1) 외부점을 축 밖 (a,b) 로 옮기면 두 접선의 m^2+n^2 이 달라져 '두 값의 합' 또는 '기울기가 양수인 접선' 지정이 필요(★2) (2) x^2=4py 형으로 바꿔 y=mx-pm^2 공식을 쓰게 하기(★1~2 · T-표기) (3) m, n 을 구한 뒤 두 접선과 축이 만드는 삼각형 넓이로 확장(0185 골조 · ★2)."
```

```yaml
- id: RPM-GEO-0183
  page: 29
  vendor_label: "유형 03 포물선 밖의 점에서 그은 접선의 방정식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    점 (1/2, -1/2) 에서 포물선 x^2/4=y (x^2=4y) 에 그은 두 접선의 기울기의 곱. 5지선다.
  category: "x^2=4py 기울기꼴 접선 y=mx-pm^2 → 외부점 대입 → m 의 이차방정식 → 근의 곱"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "포물선 밖의 점에서 그은 접선의 방정식 (기울기꼴·점 대입)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x^2=4y 이므로 p=1, 접선 y=mx-m^2. (1/2,-1/2) 대입 → 2m^2-m-1=0, 두 근의 곱 -1/2. 근을 따로 구하지 않고 근과 계수의 관계로 끝나는 표준 절차. x^2=4py 꼴 공식의 부호(T-표기)만 조심하면 되는 M_total 4 절차형 → 중 출발 ★2 에서 −1 → ★1.
  tier: star_1
  mechanism_primary: "x^2=4py 접선 y=mx-pm^2 → 외부점 대입 → 2m^2-m-1=0 → 근의 곱 -1/2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "④"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0183.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "4p 와 외부점 (x0,y0) 을 바꿀 수 있음. x^2=4py 에서 두 기울기의 곱은 y0/p, 합은 x0/p 로 바로 정해지므로 선택지를 그에 맞춤. 제약: 외부점은 포물선 바깥(x0^2>4p·y0)이어야 두 접선이 존재."
    creative: "(1) 곱 대신 합·제곱합을 묻기(★1) (2) 곱이 -1 이 되도록 외부점을 준선 위에 두면 유형 04(수직 접선)로 이어짐(★2) (3) 외부점을 문자 (a,b) 로 두고 곱이 상수로 주어질 때 외부점의 자취를 묻기(RT d1 · ★3)."
```

```yaml
- id: RPM-GEO-0184
  page: 29
  vendor_label: "유형 03 포물선 밖의 점에서 그은 접선의 방정식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    점 (-3, -1) 에서 포물선 y^2=x 에 그은 두 접선의 접점 P, Q 에 대해 선분 PQ 의 길이.
  category: "접점 (x1,y1) 설정 → 접점꼴 접선에 외부점 대입 → 포물선과 연립 → 두 접점 → 거리"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-SC
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "접점을 묻는 문제이므로 기울기꼴 대신 접점꼴 y1·y=(x+x1)/2 로 시작하면 외부점 대입 한 줄이 곧 접점의 조건(극선)이 됨 — 기울기꼴로 가면 m 두 개를 구한 뒤 접점을 다시 계산해야 함"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "포물선 밖의 점에서 그은 두 접선의 접점 (접점꼴·극선)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    접점 (x1,y1) 의 접선 y1·y=(x+x1)/2 가 (-3,-1) 을 지나면 x1=3-2y1. y1^2=x1 과 연립해 y1=1, -3 → P(1,1), Q(9,-3), PQ=√80=4√5. 기울기꼴(12m^2-4m-1=0)로 가면 접점을 다시 구해야 해서 갈래 선택이 시간을 가름(SC d1). 5단계 절차·통찰 1(d1) → 중 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "접점꼴 접선 y1·y=(x+x1)/2 에 외부점 대입 → x1=3-2y1 → y1^2=x1 연립 → 접점 2개 → 거리 4√5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4\sqrt{5}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0184.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "p(y^2=4px)와 외부점 (x0,y0) 을 바꿀 수 있음. 접점의 y좌표는 y1^2-2y0·y1+4p·x0=0 의 두 근이므로 이 이차식이 정수근을 갖게 잡으면 PQ 가 깔끔. 제약: y0^2>4p·x0(외부점) · 그림 없음."
    creative: "(1) 두 접점을 지나는 직선(극선)의 방정식을 묻기(★2) (2) 외부점과 두 접점이 이루는 삼각형 넓이(★2~3) (3) 외부점을 준선 위에 두면 PQ 가 초점을 지나는 성질 → 초점현 길이로 묻기(EQV d2 · ★3)."
```

```yaml
- id: RPM-GEO-0185
  page: 29
  vendor_label: "유형 03 포물선 밖의 점에서 그은 접선의 방정식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    점 P(-2, 0) 에서 포물선 y^2=2x 에 그은 두 접선이 y축과 만나는 점 A, B 에 대해 삼각형 PAB 의 넓이.
  category: "기울기꼴 접선 → 축 위 외부점 대입 → m=±1/2 → y절편 ±1 → 넓이"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "포물선 밖의 점에서 그은 접선의 방정식 (기울기꼴·점 대입)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    p=1/2, 접선 y=mx+1/(2m) 에 (-2,0) 대입 → m^2=1/4, y절편 1/(2m)=±1 → A(0,1), B(0,-1). 밑변 AB=2, 높이 2 → 넓이 2. 축 위의 점이라 두 접선이 x축 대칭이지만 이를 몰라도 절차로 끝남. 접선·대입·절편·넓이의 4단계 절차형 M_total 5 → 중 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "y=mx+p/m 에 (-2,0) 대입 → m=±1/2 → y절편 ±1 → 삼각형 PAB 넓이 = (1/2)·2·2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$2$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0185.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "p(4p=2)와 축 위 외부점 (-a,0) 을 바꿀 수 있음. 이때 m^2=p/a, y절편 = ±p/m = ±√(pa) 이므로 넓이 = a·√(pa). pa 를 완전제곱으로 잡으면 정수 답. 제약: a>0(외부점)."
    creative: "(1) A, B 대신 두 접점과 P 가 이루는 삼각형 넓이(★2) (2) 외부점을 축 밖으로 옮겨 대칭을 깨면 절편 두 개를 각각 구해야 함(★2~3) (3) 넓이가 주어졌을 때 p 를 역으로 묻기(BW d1 · ★2~3)."
```

### 유형 04 포물선의 두 접선이 서로 수직일 때

```yaml
- id: RPM-GEO-0186
  page: 30
  vendor_label: "유형 04 포물선의 두 접선이 서로 수직일 때"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    점 (a, 0) 에서 포물선 y^2=4x 에 그은 두 접선이 서로 수직일 때 a 의 값. 5지선다.
  category: "기울기꼴 접선에 (a,0) 대입 → am^2+1=0 → 근의 곱 1/a=-1 → a"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "포물선의 두 접선이 서로 수직 (교점은 준선 위)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    접선 y=mx+1/m 에 (a,0) 을 넣으면 am^2+1=0. 두 기울기의 곱 1/a 가 -1 → a=-1. '수직인 두 접선의 교점은 준선 x=-1 위' 성질을 알면 즉답이지만 이 유형의 기본 지식이라 통찰로 세지 않음. 문자 a 를 계수로 둔 채 근과 계수의 관계를 쓰는 절차형 M_total 5 → 유형 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "y=mx+1/m 에 (a,0) 대입 → am^2+1=0 → m1·m2=1/a=-1 → a=-1 (= 준선 x=-p)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0186.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "4p(=4)를 바꾸면 답은 준선 x=-p 로 바로 정해짐. 선택지는 -p 주변의 분수·정수. 제약: 점이 축 위에 있어야 am^2+1=0 처럼 곱이 한 줄로 나옴."
    creative: "(1) 점을 (a,b) 로 두고 b 를 함께 주면 b 가 소거됨을 확인하는 문제(★2) (2) '두 접선이 수직' 을 '두 접점을 잇는 현이 초점을 지남' 으로 바꿔 묻기(EQV d2 · ★3) (3) 수직인 두 접선과 접점 현으로 둘러싸인 삼각형 넓이(★3~4)."
```

```yaml
- id: RPM-GEO-0187
  page: 30
  vendor_label: "유형 04 포물선의 두 접선이 서로 수직일 때"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    점 (1, -√3) 에서 포물선 y^2=kx 에 그은 두 접선이 서로 수직일 때 이 포물선의 초점의 좌표 (k 는 상수).
  category: "수직 두 접선의 교점 = 준선 위 → k 결정 → 초점"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "포물선의 두 접선이 서로 수직 (교점은 준선 위)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y^2=kx 의 접선 y=mx+k/(4m) 에 (1,-√3) 대입 → 4m^2+4√3·m+k=0, 근의 곱 k/4=-1 → k=-4. 준선 x=-k/4 위에 점이 있다는 성질로도 k=-4. y^2=-4x 는 왼쪽으로 열리므로 초점 (-1,0). y좌표 -√3 은 소거되는 군더더기이고 k<0 에 따른 초점 방향(T-부호)이 함정. 문자 k 를 다루는 절차형 M_total 6 → 중 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "y=mx+k/(4m) 에 점 대입 → m 의 이차식 → 근의 곱 k/4=-1 → k=-4 → 초점 (k/4, 0)=(-1,0)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$(-1,\,0)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0187.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "점의 x좌표 x0 를 바꾸면 k=-4·x0(준선 x=-k/4=x0). y좌표는 아무 값이나 가능(소거됨). 제약: x0≠0 · 초점 (k/4, 0) 의 부호를 답에 맞게 확인."
    creative: "(1) 초점 대신 준선의 방정식이나 초점과 점 사이의 거리 묻기(★2) (2) 점을 문자 좌표 (a,b) 로 두고 b 와 무관함을 근거로 자취(준선)를 묻기(EQV d1 · ★2~3) (3) 두 접점과 초점으로 이루어진 삼각형 넓이로 확장(★3)."
```

```yaml
- id: RPM-GEO-0188
  page: 30
  vendor_label: "유형 04 포물선의 두 접선이 서로 수직일 때"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    직선 x+y=-5 위의 점 (p, q) 에서 포물선 y^2=12x 에 그은 두 접선이 서로 수직일 때 p-q. 5지선다.
  category: "수직 두 접선 → 교점이 준선 x=-3 위 → p=-3 → 직선에서 q → p-q"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "포물선의 두 접선이 서로 수직 (교점은 준선 위)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    접선 y=mx+3/m 에 (p,q) 대입 → pm^2-qm+3=0, 근의 곱 3/p=-1 → p=-3(준선 x=-3). 직선 x+y=-5 에서 q=-2, p-q=-1. q 는 곱 조건에서 사라지므로 두 미지수 중 p 만 수직 조건이 결정하고 나머지는 직선이 정한다. 5단계·문자 두 개 → M_total 6 절차형, 중 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "수직 조건 → 근의 곱 3/p=-1 → p=-3 → x+y=-5 → q=-2 → p-q=-1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0188.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "4p(=12)와 직선(x+y=c 또는 ax+by=c)을 바꿀 수 있음. p 는 항상 준선의 x좌표 -p 이고 q 는 직선이 결정. 제약: 직선이 준선과 한 점에서 만나야 하고(x=상수 꼴 아님) 답이 정수가 되게 c 를 잡음."
    creative: "(1) 직선 대신 원 위의 점으로 바꾸면 q 가 두 개 → 경우 나눔(MI d1 · ★2~3) (2) p, q 를 구한 뒤 두 접점을 잇는 현의 길이를 추가로 묻기(★3) (3) 준선 위 점에서 그은 두 접선이 항상 수직임을 보이는 서술형(★2)."
```

### 유형 05 타원의 접선의 방정식; 기울기가 주어진 경우

```yaml
- id: RPM-GEO-0189
  page: 30
  vendor_label: "유형 05 타원의 접선의 방정식; 기울기가 주어진 경우"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    타원 x^2/3+y^2/4=1 에 접하고 직선 2x+y-3=0 과 평행한 두 접선 사이의 거리.
  category: "기울기 -2 → y=mx±√(a^2m^2+b^2) → 두 평행선 → 거리"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "타원의 접선; 기울기가 주어진 경우 (y=mx±√(a^2m^2+b^2))"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    기울기 -2, a^2=3, b^2=4 → y=-2x±√(12+4)=-2x±4. 2x+y∓4=0 두 평행선 사이 거리 8/√5=8√5/5. 공식 대입 한 번과 평행선 거리 공식 한 번, 통찰 없음, M_total 4 → 유형 출발점 ★2 에서 −1 → ★1.
  tier: star_1
  mechanism_primary: "평행 → m=-2 → n=±√(a^2m^2+b^2)=±4 → 평행선 거리 |n1-n2|/√(m^2+1)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{8\sqrt{5}}{5}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0189.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a^2, b^2, 기울기 m 을 바꿀 수 있음. 거리 = 2√(a^2m^2+b^2)/√(m^2+1). a^2m^2+b^2 이 완전제곱이면 답이 유리화된 한 항. 제약: 평행 직선의 상수항(-3)은 답과 무관하므로 미끼로만 작동."
    creative: "(1) 두 접선과 주어진 직선 사이의 거리를 각각 묻기(★1) (2) 두 접점을 잇는 직선(타원의 지름)으로 확장(★2) (3) 두 접선 사이 거리가 주어졌을 때 b^2 을 역으로(BW d1 · ★2)."
```

```yaml
- id: RPM-GEO-0190
  page: 30
  vendor_label: "유형 05 타원의 접선의 방정식; 기울기가 주어진 경우"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    타원 2x^2+3y^2=1 에 접하고 x축 양의 방향과 30° 를 이루는 두 접선의 y절편의 곱. 5지선다.
  category: "표준형 a^2=1/2, b^2=1/3 → m=tan30° → y절편 ±√(a^2m^2+b^2) → 곱"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "타원의 접선; 기울기가 주어진 경우 (y=mx±√(a^2m^2+b^2))"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    표준형 x^2/(1/2)+y^2/(1/3)=1, m=1/√3 → n^2=a^2m^2+b^2=1/6+1/3=1/2, 두 y절편의 곱 -n^2=-1/2. a^2, b^2 이 분수라는 표기 함정만 있는 공식 대입, M_total 4 → 중하 출발점(★1~2)에서 ★1.
  tier: star_1
  mechanism_primary: "각도 → m=tan30° → n^2=a^2m^2+b^2 → y절편의 곱 = -n^2 = -1/2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "④"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0190.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "타원 계수(2, 3, 1)와 각(30°·45°·60°)을 바꿀 수 있음. 곱은 항상 -(a^2m^2+b^2). 제약: 일반형 → 표준형에서 a^2=1/2 처럼 역수가 되는 것을 답과 맞춤."
    creative: "(1) 곱 대신 두 접선 사이 거리(0189 골조 · ★1) (2) 각이 문자 θ 일 때 곱의 최솟값(삼각함수 결합 · XU d1 · ★3) (3) 접선의 x절편 곱으로 바꾸면 n^2/m^2 계산이 하나 늘어남(★1~2)."
```

```yaml
- id: RPM-GEO-0191
  page: 30
  vendor_label: "유형 05 타원의 접선의 방정식; 기울기가 주어진 경우"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    직선 y=4x-2 를 x축 방향으로 k 만큼 평행이동한 직선이 타원 2x^2+y^2=4 에 접할 때 양수 k.
  category: "평행이동 직선 y=4x-4k-2 → 접선 조건 n^2=a^2m^2+b^2 → k 두 개 → 양수 선택"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "타원의 접선; 기울기가 주어진 경우 (y=mx±√(a^2m^2+b^2))"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    이동한 직선 y=4(x-k)-2=4x-4k-2. 타원 x^2/2+y^2/4=1 에서 기울기 4 접선의 y절편은 ±√(32+4)=±6 → -4k-2=±6 → k=1 또는 -2, 양수 k=1. 평행이동 · 표준형 · 접선 조건 · 부호 선택(T-범위)의 4단계 절차, 통찰 없음 → M_total 5 로 중 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "x축 평행이동 → y=4x-(4k+2) → 접선 y절편 ±√(a^2m^2+b^2)=±6 → -4k-2=±6 → k>0 → k=1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$1$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0191.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선의 기울기·절편, 이동 방향(x축/y축), 타원 계수를 바꿀 수 있음. 제약: a^2m^2+b^2 이 완전제곱이어야 k 가 유리수 · 양수 해가 하나만 나오도록 절편 부호를 조정."
    creative: "(1) y축 방향 이동으로 바꾸면 절편만 바뀌어 한 줄(★1) (2) 두 이동량 k 의 합·곱을 묻기(★2) (3) 평행이동 대신 원점 대칭·x축 대칭 등 변환 뒤 접하게 하기(RT d1 · ★2~3)."
```

```yaml
- id: RPM-GEO-0192
  page: 30
  vendor_label: "유형 05 타원의 접선의 방정식; 기울기가 주어진 경우"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    타원 x^2/a^2+y^2/b^2=1 이 직선 x+3y-8=0 에 접하고 점 (4, 0) 을 지날 때 b/a (a, b 양수).
  category: "점 (4,0) → a^2=16 → 접선 조건 n^2=a^2m^2+b^2 → b^2 → b/a"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "타원이 주어진 직선에 접할 조건 (a^2, b^2 결정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (4,0) 이 타원 위 → a^2=16. 직선 y=-x/3+8/3 이 접하므로 (8/3)^2=16/9+b^2 → b^2=16/3, b/a=√3/3. 두 조건을 각각 a^2, b^2 에 대응시키는 표준 연립이라 통찰 없음. 문자 a, b 를 다루는 절차형 M_total 6 → 중 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "(4,0) 대입 → a^2=16 → 접선 조건 (8/3)^2=a^2·(1/9)+b^2 → b^2=16/3 → b/a=√3/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{\sqrt{3}}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0192.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지나는 점(꼭짓점 (a,0) 또는 (0,b))과 접하는 직선을 바꿀 수 있음. b^2=n^2-a^2m^2>0 이 되도록 직선의 절편을 충분히 크게. 제약: 지나는 점을 축 위에 두어야 a^2 이 한 줄로 정해짐."
    creative: "(1) 지나는 점을 축 밖의 점으로 옮기면 a^2, b^2 연립 2식(★3) (2) 초점 좌표를 주고 접선 조건과 결합(c^2=a^2-b^2 · ★3) (3) 접하는 직선을 두 개 주고 a^2, b^2 을 연립으로(CON d1 · ★3)."
```

### 유형 06 타원의 접선의 방정식; 접점의 좌표가 주어진 경우

```yaml
- id: RPM-GEO-0193
  page: 31
  vendor_label: "유형 06 타원의 접선의 방정식; 접점의 좌표가 주어진 경우"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    타원 x^2/12+y^2/6=1 위의 점 (2, -2) 에서의 접선이 점 (a, 4) 를 지날 때 a. 5지선다.
  category: "접점꼴 x1x/a^2+y1y/b^2=1 → 직선 → 점 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "타원 위의 점에서의 접선의 방정식 (접점꼴)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    접선 2x/12-2y/6=1 → x-2y=6. (a,4) 대입 → a=14. 공식 한 번·대입 한 번, 통찰 없음, M_total 4 → 유형 출발점 ★2 에서 −1 → ★1.
  tier: star_1
  mechanism_primary: "접점꼴 접선 x1x/a^2+y1y/b^2=1 → x-2y=6 → (a,4) 대입 → a=14"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0193.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "타원 a^2, b^2 과 접점(타원 위: x1^2/a^2+y1^2/b^2=1)을 바꾸고 지나는 점의 한 좌표를 묻기. 제약: 접점 좌표를 정수로 잡으려면 a^2, b^2 의 조합을 선택(예 12, 6 · (2,-2))."
    creative: "(1) 접선과 축의 교점·절편 묻기(0195 골조 · ★1) (2) 접선에 수직인 법선의 방정식(★1~2) (3) 접선이 지나는 점 (a,4) 가 주어졌을 때 접점을 역으로 찾기(BW d1 · ★2~3)."
```

```yaml
- id: RPM-GEO-0194
  page: 31
  vendor_label: "유형 06 타원의 접선의 방정식; 접점의 좌표가 주어진 경우"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    타원 x^2/4+y^2/8=1 위의 점 (-√2, 2) 에서의 접선에 수직이고 점 (√2, 1) 을 지나는 직선의 방정식.
  category: "접점꼴 접선 → 기울기 √2 → 수직 기울기 -√2/2 → 점-기울기 직선"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "타원 위의 점에서의 접선의 방정식 (접점꼴)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    접선 -√2·x/4+2y/8=1 → y=√2·x+4, 기울기 √2. 수직 기울기 -1/√2=-√2/2 로 (√2,1) 을 지나는 직선 y=-(√2/2)x+2. 공식 → 기울기 → 수직 직선 세 단계, 무리수 정리만 있는 절차형 M_total 4 → 중하 출발점(★1~2)에서 ★1.
  tier: star_1
  mechanism_primary: "접점꼴 접선 → 기울기 √2 → 수직 기울기 -√2/2 → (√2,1) 통과 직선 y=-(√2/2)x+2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y=-\dfrac{\sqrt{2}}{2}x+2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0194.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접점과 지나는 점을 바꿀 수 있음(접점은 타원 위). 접선 기울기 = -b^2x1/(a^2y1). 제약: 무리수 접점을 쓰면 답이 무리수 계수 · 정수 접점으로 바꾸면 ★ 그대로 계산만 가벼워짐."
    creative: "(1) 접선에 평행한 직선으로 바꾸기(★1) (2) 접선과 법선, x축이 이루는 삼각형 넓이(★2) (3) 법선이 지나는 점이 주어졌을 때 접점 역추적(BW d1 · ★3)."
```

```yaml
- id: RPM-GEO-0195
  page: 31
  vendor_label: "유형 06 타원의 접선의 방정식; 접점의 좌표가 주어진 경우"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    타원 x^2/16+y^2/12=1 위의 점 (2, 3) 에서의 접선이 x축, y축과 만나는 점 P, Q 에 대해 선분 PQ 의 길이.
  category: "접점꼴 접선 → 절편형 x/8+y/4=1 → P(8,0), Q(0,4) → 거리"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "타원 위의 점에서의 접선의 방정식 (접점꼴)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    접선 2x/16+3y/12=1 은 곧 절편형 x/8+y/4=1 → P(8,0), Q(0,4), PQ=√(64+16)=4√5. 접점꼴이 바로 절편형이라 계산이 두 줄. 통찰 없음·M_total 4 → 중 출발 ★2 에서 −1 → ★1.
  tier: star_1
  mechanism_primary: "접점꼴 접선 = 절편형 x/(a^2/x1)+y/(b^2/y1)=1 → 절편 8, 4 → PQ=√(8^2+4^2)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$4\sqrt{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0195.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a^2, b^2, 접점 (x1,y1) 을 바꾸면 절편은 a^2/x1, b^2/y1. 정수 절편이 되도록 x1 이 a^2 의, y1 이 b^2 의 약수. 제약: 접점이 타원 위."
    creative: "(1) 삼각형 OPQ 의 넓이(★1) (2) 접점을 일반점 (x1,y1) 으로 두고 넓이의 최솟값(0200 골조 · XU d2 · ★3) (3) PQ 의 중점의 자취(RT d1 · ★3)."
```

```yaml
- id: RPM-GEO-0196
  page: 31
  vendor_label: "유형 06 타원의 접선의 방정식; 접점의 좌표가 주어진 경우"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    타원 x^2+2y^2=16 위의 제1사분면 점 P(k, 2k) 에서의 접선의 x절편.
  category: "P 를 타원에 대입 → k 결정(k>0) → 접점꼴 접선 → x절편"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "타원 위의 점에서의 접선의 방정식 (접점꼴)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    k^2+8k^2=16 → k=4/3(제1사분면). 접선 (4/3)x+2·(8/3)y=16 → x+4y=12, x절편 12. 접점꼴 x1x+2y1y=16 의 x절편이 16/x1 임을 보면 두 줄. k 결정 → 접점 → 접선 → 절편의 4단계 서술형 절차, 통찰 없음 → M_total 5 로 중 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "P(k,2k) 대입 → 9k^2=16 → k=4/3 → 접선 x1x+2y1y=16 → x절편 16/x1=12"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$12$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0196.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "타원 계수(1, 2, 16)와 P 의 방향 (k, ck) 을 바꿀 수 있음. x절편 = 16/x1 이므로 x1 이 16 의 약수 꼴이면 정수. 제약: 제1사분면 조건이 k>0 을 결정(T-범위)."
    creative: "(1) y절편이나 두 절편으로 만든 삼각형 넓이(★2) (2) 직선 y=2x 와 타원의 두 교점에서의 접선의 교점(★2~3) (3) 접선의 x절편이 주어졌을 때 P 의 좌표를 역으로(BW d1 · ★2)."
```

```yaml
- id: RPM-GEO-0197
  page: 31
  vendor_label: "유형 06 타원의 접선의 방정식; 접점의 좌표가 주어진 경우"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    타원 x^2/a^2+y^2/6=1 위의 점 (b, -2) 에서의 접선의 기울기가 1 일 때 a^2+b^2 (a 는 상수).
  category: "접점꼴 접선의 기울기 3b/a^2=1 · 점이 타원 위 → 연립 → b, a^2"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "타원 위의 점에서의 접선의 방정식 (접점꼴)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    접선 bx/a^2-y/3=1 의 기울기 3b/a^2=1 → a^2=3b. (b,-2) 가 타원 위 → b^2/a^2=1/3 → b^2=b → b=1(b=0 은 a^2=0 이라 기각) → a^2=3, 합 4. 기울기 조건과 '타원 위' 조건을 문자 그대로 연립하는 절차. b=0 기각은 한 줄 필터(T-범위). M_total 6 절차형 → 중 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "접선 기울기 -b^2x1/(a^2y1)=1 → a^2=3b · 타원 위 조건 b^2/a^2=1/3 → b^2=b → b=1, a^2=3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$4$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0197.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "b^2(=6), 접점의 y좌표, 기울기 값을 바꿀 수 있음. 제약: 두 조건이 b 의 이차식으로 모여 b=0 이외의 근이 하나(양수·유리수)만 남도록 잡음."
    creative: "(1) 기울기 대신 접선이 특정 점을 지난다는 조건으로(★2) (2) a^2, b^2 을 모두 문자로 두고 접점 두 개의 조건을 주면 연립 2식(CON d1 · ★3) (3) 기울기가 1 인 접점이 원점 대칭으로 두 개임을 이용해 두 접점 사이 거리(SYM d1 · ★3)."
```

```yaml
- id: RPM-GEO-0198
  page: 31
  vendor_label: "유형 06 타원의 접선의 방정식; 접점의 좌표가 주어진 경우"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    타원 x^2/3+y^2/2=1 위의 제1사분면 점 P 에서 x축에 내린 수선의 발 H, P 에서의 접선이 x축과 만나는 점 T 에 대해 OH×OT 의 값. (그림)
  category: "일반점 P(x1,y1) → 접선 x1x/3+y1y/2=1 → T(3/x1, 0) → OH·OT=x1·3/x1=3"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "타원 위의 일반점에서의 접선 절편 (OH·OT=a^2 불변량)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    P(x1,y1) 로 두면 접선의 x절편이 3/x1, OH=x1 이므로 곱은 항상 a^2=3. P 의 위치와 무관한 불변량이지만, 일반점을 잡아 절편을 쓰는 것이 곧 풀이라 통찰로 세지 않음. 문자 좌표 처리(Mₐ 2)의 절차형 M_total 5 → 중 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "일반점 P(x1,y1) → 접선 x절편 a^2/x1 → OH·OT = x1·(a^2/x1) = a^2 = 3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$3$"
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0198.png"
  latex: latex-bank/rpm-geo/items/0198.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a^2(=3), b^2(=2) 을 바꾸면 답은 a^2. y축 수선·y절편으로 바꾸면 b^2. 제약: P 가 제1사분면(x1, y1>0)이어야 절편이 양수 · 그림 라벨 O, H, P, T 고정."
    creative: "(1) OH·OT 대신 HT 의 길이 또는 삼각형 PHT 의 넓이의 최댓값(XU d2 · ★3~4) (2) 쌍곡선 x^2/a^2-y^2/b^2=1 로 바꿔도 같은 불변량 a^2(★2) (3) 접선 대신 법선의 x절편과 OH 의 비(이심률의 제곱 · ★3)."
```

```yaml
- id: RPM-GEO-0199
  page: 31
  vendor_label: "유형 06 타원의 접선의 방정식; 접점의 좌표가 주어진 경우"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    포물선 x^2=2y 와 타원 x^2/10+y^2/a=1 이 만나는 점에서 두 곡선에 각각 그은 접선이 서로 수직일 때 상수 a. 5지선다.
  category: "교점 (x1,y1) 설정 → 두 접선 기울기 x1, -ax1/(10y1) → 곱 -1 → 교점 조건 x1^2=2y1 로 소거 → a"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 4
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "수직 조건 a·x1^2=10y1 에 교점 조건 x1^2=2y1 을 결합하면 교점 좌표가 통째로 소거되어 a=5 — 교점을 실제로 구하지 않는 것이 관건"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "두 이차곡선의 교점에서의 접선이 서로 수직 (직교 곡선)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    교점을 (x1,y1) 로 두면 포물선 접선 기울기 x1, 타원 접선 기울기 -ax1/(10y1). 곱이 -1 → ax1^2=10y1, 여기에 x1^2=2y1 을 넣으면 y1 이 약분되어 a=5. 교점을 a 가 든 채로 직접 구하려 들면 사차식에 막히므로, 교점 조건을 소거 도구로 쓰는 조건 통합(CON d2)이 풀이의 본체. 상중 출발 ★3, 통찰 1개(d2) → ★3 유지.
  tier: star_3
  mechanism_primary: "교점 (x1,y1) → 접선 기울기 x1 · -ax1/(10y1) → 곱 -1 → ax1^2=10y1 → x1^2=2y1 대입 → a=5"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "③"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0199.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "타원의 x^2 분모 A(=10) 를 바꾸면 a=A/2 로 정해지고 포물선 x^2=4py 의 p 는 답에 영향 없음(선택지 설계 시 주의). 제약: 정수 답이 되도록 A 짝수 · 교점은 항상 존재(y>0 근 하나)."
    creative: "(1) 포물선을 y^2=4px 로 눕혀도 같은 소거가 되어 a=2A (★3 유지) (2) 수직 대신 두 접선이 이루는 예각이 45° 로 바꾸면 tan 공식 결합(XU d1 · ★4) (3) 교점 두 개에서 각각 성립함을 y축 대칭으로 설명하는 서술형(SYM d1 · ★3)."
```

```yaml
- id: RPM-GEO-0200
  page: 31
  vendor_label: "유형 06 타원의 접선의 방정식; 접점의 좌표가 주어진 경우"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    타원 x^2/16+y^2/9=1 위의 점 P(x1, y1) (x1·y1≠0) 에서의 접선이 x축, y축과 만나는 점 A, B 에 대해 삼각형 OAB 의 넓이의 최솟값.
  category: "일반점 접선 절편 16/x1, 9/y1 → 넓이 72/|x1y1| → 타원 조건에 산술·기하평균 → |x1y1|≤6 → 최솟값 12"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 3
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "넓이 72/|x1y1| 의 최소 = |x1y1| 의 최대. 타원 조건 x1^2/16+y1^2/9=1 에 산술·기하평균 부등식(또는 x1=4cosθ, y1=3sinθ 매개화)을 적용해야 상한 6 이 나옴 — 이차곡선 밖의 도구 결합"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "타원 접선이 두 축과 만드는 삼각형 넓이의 최솟값 (산술·기하평균)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    접선 x1x/16+y1y/9=1 의 절편 16/x1, 9/y1 → S=72/|x1y1|. 1=x1^2/16+y1^2/9≥2|x1y1|/12 → |x1y1|≤6 (등호 x1^2=8, y1^2=9/2) → S 최솟값 12. 절편·넓이는 표준 절차이고 산술·기하평균(또는 삼각 매개화)으로 최댓값을 잡는 단계가 핵심(XU d2). 넓이식을 읽어 '|x1y1| 최대' 로 옮기는 것은 식에서 바로 보이므로 별도 통찰로 세지 않아 통찰 1개 → 상중 출발 ★3 유지(+1 후보 미적용). [분류 이슈] 전환 단계를 EQV d1 로 세면 통찰 2개 → ★4 후보.
  tier: star_3
  mechanism_primary: "접점꼴 절편 a^2/x1, b^2/y1 → S=a^2b^2/(2|x1y1|) → 타원 조건에 AM-GM → |x1y1|≤ab/2 → S_min=ab"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$12$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0200.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a^2, b^2 을 바꾸면 최솟값은 ab(=4·3=12). 제약: a, b 가 정수이면 답 정수 · x1y1≠0 조건은 절편 존재를 보장하므로 유지 · 등호 조건 x1^2=a^2/2 가 실제 타원 위 점인지 확인."
    creative: "(1) 넓이 대신 선분 AB 길이의 최솟값(코시–슈바르츠 → a+b=7 · XU d2 · ★4) (2) 쌍곡선의 접선이 두 점근선과 만드는 삼각형 넓이는 항상 ab 로 일정 → 불변량 문제(★3) (3) x1, y1 을 4cosθ, 3sinθ 로 매개화하게 강제한 삼각함수 결합형 서술형(XU d1 · ★3)."
```

### 유형 07 타원 밖의 점에서 그은 접선의 방정식

```yaml
- id: RPM-GEO-0201
  page: 32
  vendor_label: "유형 07 타원 밖의 점에서 그은 접선의 방정식"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    점 (-2, 0) 에서 타원 x^2+2y^2=2 에 그은 접선 중 기울기가 양수인 것이 점 (4, k) 를 지날 때 k. 5지선다.
  category: "기울기꼴 y=mx±√(a^2m^2+b^2) → 외부점 대입 → m^2=1/2 → m>0 선택 → 직선 → k"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "타원 밖의 점에서 그은 접선의 방정식 (기울기꼴·점 대입)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    표준형 x^2/2+y^2=1. y=mx±√(2m^2+1) 에 (-2,0) 대입 → 4m^2=2m^2+1 → m=√2/2(양수). 직선 y=(√2/2)(x+2) 에서 x=4 → k=3√2. 표준형·접선 조건·부호 선택·대입의 4단계 절차, 통찰 없음 → M_total 5 로 유형 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "y=mx±√(a^2m^2+b^2) 에 (-2,0) 대입 → m^2=1/2 → m>0 → y=(√2/2)(x+2) → k=3√2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0201.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "타원 계수와 축 위 외부점 (-c,0) 을 바꿀 수 있음. 축 위 점이면 c^2m^2=a^2m^2+b^2 → m^2=b^2/(c^2-a^2) 로 한 줄. 제약: c^2>a^2(외부점) · m 이 √ 꼴이면 k 도 같은 √ 의 배수라 선택지를 그 배수로."
    creative: "(1) 두 접선과 y축이 이루는 삼각형 넓이(0185 골조 · ★2) (2) 외부점을 축 밖으로 옮겨 이차식의 두 근 중 부호를 선택하게(★2~3) (3) 외부점을 준원 x^2+y^2=a^2+b^2 위에 두면 두 접선이 수직 → 유형 04 와 연결(EQV d1 · ★3)."
```

```yaml
- id: RPM-GEO-0202
  page: 32
  vendor_label: "유형 07 타원 밖의 점에서 그은 접선의 방정식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    점 (0, 4) 에서 타원 4x^2+3y^2=12 에 그은 두 접선의 접점 P, Q 와 초점 F(0, -c) (c>0) 에 대해 삼각형 PFQ 의 넓이. 5지선다.
  category: "표준형·초점 → 접점꼴 접선에 (0,4) 대입 → y1=1 → x1=±3/2 → 밑변 PQ·높이 → 넓이"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 2
      type: I-SC
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "접점을 묻으므로 접점꼴 x1x/3+y1y/4=1 에 (0,4) 를 넣어 y1=1(극선 y=1)을 얻는 갈래가 기울기꼴(m=±2 뒤 접점 재계산)보다 훨씬 짧음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "타원 밖의 점에서 그은 두 접선의 접점 (접점꼴·극선)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x^2/3+y^2/4=1 은 장축이 y축, c^2=4-3=1 → F(0,-1). 접점꼴 접선이 (0,4) 를 지나면 y1=1, 타원에서 x1=±3/2 → P, Q 는 y=1 위에서 y축 대칭. PQ=3, F 까지 높이 2 → 넓이 3. 접점꼴 선택(SC d1)이 시간을 줄이지만 기울기꼴로도 풀림. 장축 방향에 따른 c^2 계산(T-표기) 포함 5단계 절차·통찰 1(d1) → 중 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "초점 F(0,-1) → 접점꼴에 (0,4) 대입 → 극선 y=1 → 접점 (±3/2, 1) → 넓이 (1/2)·3·2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0202.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "타원 계수와 장축 위 외부점 (0,d) 를 바꿀 수 있음. 극선은 y=b^2/d 이고 접점 x좌표는 ±a√(1-b^2/d^2). 제약: d>b(외부점) · b^2/d 와 접점 좌표가 유리수가 되게 d 를 잡음."
    creative: "(1) F 대신 두 초점을 모두 써 사각형 P·F1·Q·F2 의 넓이(★2) (2) 외부점을 축 밖으로 옮기면 극선이 기울어져 대칭이 깨짐(★3) (3) 넓이가 주어졌을 때 외부점의 위치 d 를 역으로(BW d1 · ★3)."
```

```yaml
- id: RPM-GEO-0203
  page: 32
  vendor_label: "유형 07 타원 밖의 점에서 그은 접선의 방정식"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    점 (-8, 5) 에서 타원 x^2/4+y^2/5=1 에 그은 두 접선의 기울기 m1, m2 의 합.
  category: "기울기꼴 y=mx±√(4m^2+5) → 점 대입·제곱 → 3m^2+4m+1=0 → 근의 합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "타원 밖의 점에서 그은 접선의 방정식 (기울기꼴·점 대입)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y=mx±√(4m^2+5) 가 (-8,5) 를 지나면 (5+8m)^2=4m^2+5 → 60m^2+80m+20=0 → 3m^2+4m+1=0, 근의 합 -4/3. 제곱·정리와 근과 계수의 관계뿐인 절차형이라 상중 신호에 비해 노동·통찰이 모두 가볍다. M_total 5 절차형은 ★3 을 지탱하지 못하므로 상중 출발 ★3 에서 −1 → ★2. [분류 이슈] 벤더 상중 · 통찰 0 · M_total 5 → 절차형 ★2 (후보 ★2/★3).
  tier: star_2
  mechanism_primary: "(y0-mx0)^2=a^2m^2+b^2 → (x0^2-a^2)m^2-2x0y0·m+(y0^2-b^2)=0 → 근의 합 2x0y0/(x0^2-a^2)=-4/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-\dfrac{4}{3}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0203.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "외부점 (x0,y0) 과 a^2, b^2 을 바꿀 수 있음. 합 = 2x0y0/(x0^2-a^2), 곱 = (y0^2-b^2)/(x0^2-a^2). 제약: x0^2>a^2 이어야 m 의 이차식 · 외부점 조건 x0^2/a^2+y0^2/b^2>1."
    creative: "(1) 곱을 -1 로 만들면(x0^2+y0^2=a^2+b^2, 준원 위) 두 접선 수직 문제(EQV d1 · ★3) (2) 두 접선이 이루는 각의 tan 을 묻기(합·곱 결합 · ★3) (3) 합이 상수로 주어졌을 때 외부점의 자취(RT d1 · ★3~4)."
```

### 유형 08 쌍곡선의 접선의 방정식; 기울기가 주어진 경우

```yaml
- id: RPM-GEO-0204
  page: 32
  vendor_label: "유형 08 쌍곡선의 접선의 방정식; 기울기가 주어진 경우"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    직선 y=2x+3 이 쌍곡선 x^2/a-y^2/3=1 에 접할 때 두 초점 사이의 거리 (a 는 상수). 5지선다.
  category: "접선 조건 n^2=a^2m^2-b^2 → a 결정 → c^2=a^2+b^2 → 2c"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "쌍곡선의 접선; 기울기가 주어진 경우 (y=mx±√(a^2m^2-b^2))"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    9=4a-3 → a=3. c^2=3+3=6 → 두 초점 사이 거리 2√6. 분모 a 가 a^2 역할인 표기와 쌍곡선 접선 조건의 뺄셈 부호(T-표기)만 주의하면 공식 두 번. 통찰 없음·M_total 4 → 유형 출발점 ★2 에서 −1 → ★1.
  tier: star_1
  mechanism_primary: "접선 조건 3^2=a·2^2-3 → a=3 → c^2=a+3=6 → 2c=2√6"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "④"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0204.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선 y=mx+n 과 b^2(=3) 을 바꾸면 a=(n^2+b^2)/m^2. 제약: a>0 · a·m^2-b^2>0(접선 존재) · 2c=2√(a+b^2) 를 선택지에 맞게."
    creative: "(1) 초점 거리 대신 점근선의 방정식·이심률(★1) (2) 접하는 직선을 두 개 주고 a, b 를 연립(CON d1 · ★3) (3) 접점의 좌표까지 묻기(접점꼴 역산 · ★2)."
```

```yaml
- id: RPM-GEO-0205
  page: 32
  vendor_label: "유형 08 쌍곡선의 접선의 방정식; 기울기가 주어진 경우"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    쌍곡선 x^2/4-y^2=1 에 접하고 직선 y=x+1 에 수직인 두 접선의 x절편의 곱.
  category: "수직 → m=-1 → y=-x±√(4-1) → x절편 ±√3 → 곱"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "쌍곡선의 접선; 기울기가 주어진 경우 (y=mx±√(a^2m^2-b^2))"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    기울기 -1, y=-x±√(a^2m^2-b^2)=-x±√3. x절편은 ±√3, 곱 -3. 공식 한 번·절편 한 번, 통찰 없음, M_total 4 → 중하 출발점(★1~2)에서 ★1.
  tier: star_1
  mechanism_primary: "수직 조건 m=-1 → n=±√(a^2m^2-b^2)=±√3 → x절편 -n/m=±√3 → 곱 -3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$-3$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0205.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a^2, b^2 과 수직인 직선의 기울기를 바꿀 수 있음. x절편의 곱 = -(a^2m^2-b^2)/m^2. 제약: a^2m^2-b^2>0 (기울기 절댓값이 점근선 기울기 b/a 보다 커야 접선 존재)."
    creative: "(1) y절편의 곱이나 두 접선 사이 거리(0206 골조 · ★1) (2) 기울기를 점근선 기울기에 가깝게 두어 접선이 없는 경우를 판별하게(VF d1 · ★2) (3) 두 접선과 점근선으로 둘러싸인 도형 넓이(★3)."
```

```yaml
- id: RPM-GEO-0206
  page: 32
  vendor_label: "유형 08 쌍곡선의 접선의 방정식; 기울기가 주어진 경우"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    쌍곡선 11x^2-4y^2=44 에 접하고 기울기가 2 인 두 접선 사이의 거리.
  category: "표준형 x^2/4-y^2/11=1 → y=2x±√(16-11) → 평행선 거리"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "쌍곡선의 접선; 기울기가 주어진 경우 (y=mx±√(a^2m^2-b^2))"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    표준형 x^2/4-y^2/11=1, 기울기 2 접선 y=2x±√5. 2x-y±√5=0 사이 거리 2√5/√5=2. 표준형 변환·공식·거리 공식의 세 줄, 통찰 없음, M_total 4 → 중 출발 ★2 에서 −1 → ★1(서술형 태그는 절차를 쓰게 할 뿐 난이도에 더하지 않음).
  tier: star_1
  mechanism_primary: "일반형 → 표준형 → n=±√(a^2m^2-b^2)=±√5 → 평행선 거리 2|n|/√(m^2+1)=2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$2$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0206.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수(11, 4, 44)와 기울기를 바꿀 수 있음. 거리 = 2√(a^2m^2-b^2)/√(m^2+1) 이므로 a^2m^2-b^2 = k^2(m^2+1) 꼴로 잡으면 답이 정수. 제약: a^2m^2-b^2>0."
    creative: "(1) 두 접선의 접점 사이 거리(접점꼴 역산 · ★2) (2) 거리가 주어졌을 때 기울기 m 을 역으로(BW d1 · ★2) (3) 쌍곡선을 타원으로 바꾸면 0189 와 같은 골조(★1)."
```

```yaml
- id: RPM-GEO-0207
  page: 32
  vendor_label: "유형 08 쌍곡선의 접선의 방정식; 기울기가 주어진 경우"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    쌍곡선 5x^2-3y^2=-15 에 접하고 x축 양의 방향과 45° 를 이루는 접선 중 y절편이 양수인 것이 두 축과 이루는 삼각형의 넓이.
  category: "표준형 x^2/3-y^2/5=-1 → y=x±√(b^2-a^2m^2)=x±√2 → 양수 절편 선택 → 절편 삼각형 넓이"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "쌍곡선의 접선; 기울기가 주어진 경우 (y=mx±√(a^2m^2-b^2))"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x^2/3-y^2/5=-1 (위아래로 열린 쌍곡선), m=tan45°=1. 우변 -1 꼴의 접선 y=mx±√(b^2-a^2m^2)=x±√2 에서 y절편 양수인 y=x+√2 → 절편 (-√2,0), (0,√2) → 넓이 1. 우변 -1 형에서 근호 안 부호가 뒤집히는 T-표기와 각도→기울기, 절편 선택, 넓이의 4단계 절차, 통찰 없음 → M_total 5 로 중 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "우변 -1 표준형 → m=1 → n=±√(b^2-a^2m^2)=±√2 → n>0 → 넓이 (1/2)·n·(n/m)=1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$1$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0207.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수(5, 3, -15)와 각(45°→60° 등)을 바꿀 수 있음. 넓이 = n^2/(2|m|), n^2=b^2-a^2m^2. 제약: b^2-a^2m^2>0 (m 의 절댓값이 점근선 기울기 b/a 보다 작아야 위아래 쌍곡선에 접선 존재)."
    creative: "(1) y절편 음수인 접선까지 두 삼각형 넓이의 합(★2) (2) 우변 +1 쌍곡선으로 바꾸면 접선 존재 조건이 반대(|m|>b/a)가 되어 조건 판별이 추가(VF d1 · ★2~3) (3) 접선과 두 점근선으로 둘러싸인 삼각형 넓이 = ab 불변량(★3)."
```

## 표본 판정 요약 (26문)

- ★ 분포: ★1 10 · ★2 14 · ★3 2 · ★4 0 · ★5 0
- 통찰형 2(0199 CON d2 · 0200 XU d2) · 절차형 24 · premium 0. insights 가 비어 있지 않은 블록은 4(위 둘 + 0184·0202 의 SC d1 갈래 선택)
- 벤더 신호: 대표문제 6(0182·0186·0189·0193·0201·0204 · 모두 level 없음) · 중하 3 · 중 14 · 상중 3(0199·0200·0203) · 서술형 태그 2(0196·0206). 대표문제 6 중 4 가 공식 대입 한두 번의 ★1(0182·0189·0193·0204)
- type_hint 상위: 「타원 위의 점에서의 접선의 방정식 (접점꼴)」 5 · 「쌍곡선의 접선; 기울기가 주어진 경우」 4 · 「타원의 접선; 기울기가 주어진 경우」 3 · 「포물선의 두 접선이 서로 수직 (교점은 준선 위)」 3 · 「포물선 밖의 점에서 그은 접선의 방정식 (기울기꼴·점 대입)」 3 · 「타원 밖의 점에서 그은 접선의 방정식 (기울기꼴·점 대입)」 2 · 나머지 6 은 1 문씩(0184 포물선 접점·극선 · 0192 타원 결정 · 0198 불변량 · 0199 직교 곡선 · 0200 넓이 최솟값 · 0202 타원 접점·극선)
- 그림: 1문(`crop:fig-0198.png`)
- 전사 답 확인 필요: 없음(26문 모두 재계산이 전사 answer 와 일치)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-GEO-0203 | 벤더 「상중」이나 통찰 0·M_total 5 의 절차형(기울기꼴 대입 → 제곱 정리 → 근의 합). 절차형 ★3 은 M_total 6 이상이 필요하다고 보아 라벨 ★2 | ★2 / ★3 |
| RPM-GEO-0200 | 통찰을 XU d2 하나로 세어 ★3 유지. 「넓이 최소 ⟺ x1y1 최대」 전환을 EQV d1 로 따로 세면 통찰 2개 → +1 후보 ★4. 시판 빈출 문항이라 ★3 이 학생 체감에 가깝다고 판단 | ★3 / ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 반복 골조: 「접점꼴」·「기울기꼴」·「외부점 대입」 세 골조가 포물선·타원·쌍곡선에 걸쳐 같은 모양으로 반복된다(이 범위에서만 타원 접점꼴 5 · 기울기꼴 타원 3 + 쌍곡선 4 · 외부점 포물선 3 + 타원 2). 카탈로그는 「곡선 × 접선 골조」 격자로 두고 base ★ 는 곡선이 아니라 골조·부가 절차 수로 정하는 편이 맞다(공식 대입 한 번 ★1 · 절편·거리·평행이동·부호 선택이 붙으면 ★2).
- 따로 세울 유형: (1) 「포물선의 수직인 두 접선 → 교점은 준선 위」(0186~0188 · 성질 지식형 ★2) (2) 「외부점에서 그은 두 접선의 접점·극선」(0184 포물선 · 0202 타원 — 곡선을 가리지 않는 같은 골조, SC d1 갈래 선택 포함 ★2) (3) 「일반점 접선의 절편 불변량·절편 삼각형 넓이 최솟값」(0198 · 0200 — 불변량 ★2, AM-GM 결합 최솟값 ★3) (4) 「두 곡선의 교점에서 접선이 수직(직교)」(0199 · CON d2 ★3).
- 통합해도 될 유형: 0192(접선 조건으로 타원의 a^2, b^2 결정)는 「기울기가 주어진 경우」의 역문제이므로 같은 항목의 하위 변형으로 두면 된다. 0197(문자 a^2, b 를 연립)도 「접점꼴」의 문자 변형으로 흡수 가능.
- 벤더 상중 3문 중 0203 은 절차형이라 상중 신호가 통찰이 아니라 계산량(제곱 정리)에서 온 것으로 보인다. 카탈로그에서 「외부점 대입 뒤 근과 계수의 관계」를 ★2 로 잡고, 상중 라벨은 0199·0200 처럼 다른 단원 도구(AM-GM)나 조건 통합이 붙을 때만 ★3 으로 올리는 기준이 필요하다.
