---
name: mechanism-데이터-RPM-GEO-07-p2
description: RPM 기하 07 도형의 방정식(2/4 · 유형 01~08) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 기하 (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-geo
  section: 07 도형의 방정식
  unit_code: GEO-07
  part: "2/4"
  extract_range: "106~109쪽 · 0708~0738"
  total_problems: 31
  unit_total: 132
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-geo/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-geo/items/<id>.tex
  image_source: latex-bank/rpm-geo/figures/ (crops.json)
---

# RPM 기하 · 07 도형의 방정식 (2/4) 정독 데이터 (v1.0)

이 파일은 RPM 기하 07 도형의 방정식 단원의 두 번째 범위(106~109쪽 · 0708~0738 · 31문항)를 다룬다. 전부 「유형」 구역이다 — 유형 01 방향벡터가 주어진 직선의 방정식 (1)(3문 · 평면) · 유형 02 같은 제목 (2)(4문 · 공간) · 유형 03 두 점을 지나는 직선의 방정식(4문) · 유형 04 직선 위의 점(4문 · 두 직선의 교점·구와의 교점·만날 조건) · 유형 05 두 직선이 이루는 각의 크기(4문) · 유형 06 두 직선의 평행과 수직(4문) · 유형 07 점과 직선 사이의 거리(4문 · 수선의 발) · 유형 08 법선벡터가 주어진 평면의 방정식(4문). RPM 의 벤더 난이도 신호는 구역이 곧 층이다 — 교과서(★1 출발) / 유형(대표문제 · 난이도 하~상) / 유형 UP / 시험에 꼭 나오는 문제 / 서술형 / 실력 Up. 이 범위의 신호는 대표문제 8(level 없음 · 각 유형의 첫 문항) · 중하 4 · 중 16 · 상중 3(0726·0730·0734) · 서술형 태그 2(0721·0729)이다. 유형 구역이라 ★2 출발이 기본이고, 단계별 라벨링에서 통찰이 잡힌 문항은 3(0726 RT d1 · 0730 EQV d1 · 0734 RT d1)이며 나머지 28문은 공식 대입·매개변수 연립·내적 0 의 표준 절차다. M_total 4 이고 통찰이 없는 10문은 ★1 이다 — 중하 4문(0712·0716·0728·0736)은 출발점 ★1 그대로, 대표·중 6문(0708·0709·0711·0714·0727·0735)은 출발점 ★2 에서 −1. M_total 5 이상의 절차형 18문은 출발점 ★2 를 유지했고(M_total 8 인 0724 도 통찰이 없어 +1 하지 않음), 상중 셋 중 0730(EQV d1 · M_total 6)·0734(RT d1 · M_total 7)는 ★3 을 유지, 0726 만 노동·통찰이 모두 가벼워(M_total 5 · RT d1) ★2 로 낮추고 [분류 이슈] 로 기록했다. 최종 분포는 ★1 10 · ★2 19 · ★3 2. 그림 문항은 1(0717 · `crop:fig-0717.png` · 직육면체 좌표 읽기). 전사 답 31건은 모두 재계산과 일치했다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 절차형 ★1 문항에도 `mechanism_primary`(풀이 골조 사슬) · `insights[]`(절차형은 빈 배열 · 비어 있지 않으면 insight_type 통찰형) · `variation_notes.numeric`(바꿔도 되는 수와 제약) · `variation_notes.creative`(골조를 유지한 변형과 ★ 가 변하는 지점)를 모두 채웠다. 이 범위의 숫자 변형 제약은 대체로 세 가지다 — 대칭형 직선은 방향벡터 성분이 0 이 아니어야 하고 성분이 0 이면 `y=k` 꼴 표기가 따로 필요하다는 것, 교점·수선의 발·좌표평면 교점은 매개변수 t 가 정수로 떨어지도록 답(교점·H)을 먼저 정하고 직선·점을 역설계한다는 것, 각·거리는 |d| 나 |AH| 가 정수 또는 간단한 근호가 되게 피타고라스 삼중쌍(1,2,2)·(2,3,6)·(3,4,5) 류를 쓴다는 것이다. 부호 꼴 `(3-x)/2`·`1-z`·`-y-1` 과 비표준 계수 꼴 `(2y-1)/4` 는 이 범위의 대표 함정(T-부호·T-표기)이라 변형 시 유지 여부를 명시하도록 적었다. ★ 가 오르는 지점은 방향벡터·법선벡터를 미지수 벡터로 두고 동차 연립으로 정하기(0730 골조) · 기하 조건(정삼각형·정사영·회전체)을 점-직선 거리로 재해석하기(0734 골조) · 두 갈래 해법(현의 길이 공식 vs 대입 · 평면 교점 vs 내적 0)을 선택하게 하기(SC d1) · 자명근 배제가 답을 바꾸도록 설계하기(VF d1)로 표시했다.

## 문항 데이터

### 유형 01 방향벡터가 주어진 직선의 방정식 (1)

```yaml
- id: RPM-GEO-0708
  page: 106
  vendor_label: "유형 01 방향벡터가 주어진 직선의 방정식 (1)"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    점 (3,-4) 를 지나고 직선 (x-3)/2 = -(y+1)/3 에 평행한 직선이 점 (k,-1) 을 지날 때 k 의 값.
  category: "주어진 직선의 방향벡터 읽기 → 한 점·방향벡터 직선 → 점 대입 → k"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "방향벡터가 주어진 평면 직선의 방정식 (한 점 + 평행 직선)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    -(y+1)/3 을 (y+1)/(-3) 으로 읽어 방향벡터 (2,-3). 점 (3,-4) 를 지나는 직선 (x-3)/2=(y+4)/(-3) 에 (k,-1) 을 넣으면 (k-3)/2=-1 → k=1. 부호 읽기 한 번 외에는 공식 대입 두 줄. 통찰 없음·M_total 4 → 유형 대표 출발점 ★2 에서 −1, ★1.
  tier: star_1
  mechanism_primary: "-(y+1)/3 → 방향벡터 (2,-3) → (x-3)/2=(y+4)/(-3) → (k,-1) 대입 → k=1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$1$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0708.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지나는 점·방향벡터 성분·대입점의 고정 좌표(y=-1)를 자유롭게. 제약: 방향벡터 성분이 0 이 아니어야 대칭형이 성립하고, 대입점의 주어진 좌표에서 공통값이 정수로 떨어져 k 가 정수가 되게 할 것. 음의 계수(-(y+1)/3 꼴)는 부호 함정이므로 유지 여부를 명시."
    creative: "(1) 대입점의 두 좌표를 모두 미지수로 두고 조건 하나(예: 원점과의 거리)를 추가하면 연립 ★2 (2) 평행 대신 '수직인 직선' 으로 바꾸면 방향벡터 (3,2) 변환이 한 단계 더(★1~2) (3) 직선을 y=mx+n 꼴로 주고 방향벡터를 (1,m) 으로 읽게 하면 표현 전환(RT d1 · ★2)."
```

```yaml
- id: RPM-GEO-0709
  page: 106
  vendor_label: "유형 01 방향벡터가 주어진 직선의 방정식 (1)"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    두 점 A(-3,2), B(-4,6) 을 지나는 직선에 평행하고 점 (3,0) 을 지나는 직선이 y=mx+n 일 때 상수 m, n 에 대하여 m+n.
  category: "AB 벡터 → 기울기 → 점-기울기 직선 → m+n"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "방향벡터가 주어진 평면 직선의 방정식 (한 점 + 평행 직선)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    AB=(-1,4) 가 방향벡터이므로 기울기 4/(-1)=-4, y=-4(x-3)=-4x+12 → m+n=8. 벡터 성분비를 기울기로 옮기는 한 줄이 전부이고 계산은 암산 수준. 통찰 없음·M_total 4 → 중 출발점 ★2 에서 −1, ★1.
  tier: star_1
  mechanism_primary: "AB=(-1,4) → 기울기 -4 → y=-4(x-3) → m=-4, n=12 → m+n=8"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$8$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0709.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 점 A, B 와 지나는 점을 자유롭게. 제약: AB 의 x 성분이 0 이 아니어야 y=mx+n 꼴이 존재하고, 기울기·절편이 정수(또는 간단한 유리수)가 되게 두 점의 차를 잡을 것."
    creative: "(1) 직선이 x축·y축과 만나는 점으로 만드는 삼각형의 넓이를 묻기(★2) (2) A, B 를 벡터 a, b 로 주고 'b-a 에 평행' 으로 바꾸면 0710 골조 (3) 'AB 에 수직' 으로 바꾸면 법선벡터·기울기 -1/m 전환이 한 단계 더(★2)."
```

```yaml
- id: RPM-GEO-0710
  page: 106
  vendor_label: "유형 01 방향벡터가 주어진 직선의 방정식 (1)"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    두 벡터 a=(3,1), b=(5,8) 에 대하여 b-a 와 평행하고 점 (5,1) 을 지나는 직선이 7x+my+n=0 일 때 m-n. 5지선다.
  category: "b-a 성분 → 대칭형 직선 → 일반형 7x+my+n=0 으로 정리 → m-n"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "방향벡터가 주어진 평면 직선의 방정식 (한 점 + 평행 직선)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    b-a=(2,7) 이 방향벡터. (x-5)/2=(y-1)/7 을 정리하면 7x-2y-33=0 → m=-2, n=-33, m-n=31. 벡터 뺄셈·대칭형·일반형 정리·부호 계산의 네 단계이며 m-n 에서 -(-33) 부호가 함정. 통찰 없음·M_total 5 → 중 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "b-a=(2,7) → (x-5)/2=(y-1)/7 → 7x-2y-33=0 → m=-2, n=-33 → m-n=31"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0710.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a, b 성분과 지나는 점을 바꾸되 일반형의 x 계수를 문제에 고정(7x+…)했으므로 b-a 의 y 성분이 그 계수와 같아지게(또는 약분 뒤 같아지게) 설계. 제약: m, n 정수 · 선택지 5개가 서로 다른 정수 · m-n 의 부호 실수 값을 오답으로 포함."
    creative: "(1) 'b-a 에 수직' 으로 바꾸면 법선벡터 → 일반형이 바로 나오는 다른 골조(★2) (2) 일반형 대신 x 절편·y 절편의 합을 묻기(★2) (3) a, b 대신 세 점의 위치벡터 조건(예: 무게중심)으로 방향벡터를 만들면 벡터 연산 한 단계 추가 ★2."
```

### 유형 02 방향벡터가 주어진 직선의 방정식 (2)

```yaml
- id: RPM-GEO-0711
  page: 106
  vendor_label: "유형 02 방향벡터가 주어진 직선의 방정식 (2)"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    점 (2,-1,0) 을 지나고 직선 x=y+1=(1-z)/2 에 평행한 직선이 점 (a,3,b) 를 지날 때 a+b.
  category: "주어진 직선의 방향벡터 (1,1,-2) → 한 점·방향벡터 직선 → y=3 으로 공통값 결정 → a, b"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "방향벡터가 주어진 공간 직선의 방정식 (한 점 + 평행 직선)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (1-z)/2 를 (z-1)/(-2) 로 읽어 방향벡터 (1,1,-2). x-2=y+1=z/(-2) 에 y=3 을 넣으면 공통값 4 → a=6, b=-8, a+b=-2. 부호 읽기 한 번과 대입 두 줄. 통찰 없음·M_total 4 → 유형 대표 출발점 ★2 에서 −1, ★1.
  tier: star_1
  mechanism_primary: "(1-z)/2 → 방향벡터 (1,1,-2) → x-2=y+1=z/(-2) → y=3 에서 공통값 4 → a=6, b=-8 → a+b=-2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-2$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0711.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지나는 점·방향벡터·대입점의 고정 좌표(y=3)를 바꾸되 방향벡터 성분은 모두 0 이 아니게(대칭형 유지). 제약: 고정 좌표에서 공통값이 정수가 되어 a, b 가 정수로 떨어질 것. (1-z)/2 같은 음의 계수 꼴은 부호 함정으로 유지 여부 명시."
    creative: "(1) 대입점을 좌표평면 위의 점(예: xy평면)으로 두면 0714 골조(★1) (2) 방향벡터의 한 성분을 0 으로 만들어 y=k 꼴이 섞이게 하면 표기 함정(★2) (3) 평행 조건 대신 '직선 위의 두 점을 지난다' 로 바꾸면 0715 골조."
```

```yaml
- id: RPM-GEO-0712
  page: 106
  vendor_label: "유형 02 방향벡터가 주어진 직선의 방정식 (2)"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    점 P(1,-2,6) 을 z축에 대하여 대칭이동한 점 Q 를 지나고 직선 (x-2)/2=(1-y)/3=(z+1)/6 에 평행한 직선의 방정식.
  category: "z축 대칭 → Q(-1,2,6) → 방향벡터 (2,-3,6) → 대칭형 직선"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "방향벡터가 주어진 공간 직선의 방정식 (한 점 + 평행 직선)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    z축 대칭은 x, y 부호만 바뀌므로 Q(-1,2,6). (1-y)/3 을 (y-1)/(-3) 으로 읽어 방향벡터 (2,-3,6), 답 (x+1)/2=(y-2)/(-3)=(z-6)/6. 대칭이동 한 줄 + 부호 읽기 한 줄 + 공식 대입. 통찰 없음·M_total 4 → 중하 출발점 ★1.
  tier: star_1
  mechanism_primary: "z축 대칭 (x,y,z)→(-x,-y,z) → Q(-1,2,6) → 방향벡터 (2,-3,6) → (x+1)/2=(2-y)/3=(z-6)/6"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{x+1}{2}=\dfrac{2-y}{3}=\dfrac{z-6}{6}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0712.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "P 의 좌표·대칭 대상(x축·y축·원점·좌표평면)·방향벡터를 바꿀 수 있음. 제약: 대칭 규칙이 부호만 바꾸는 표준 대칭이어야 하고, 방향벡터 성분은 0 이 아니게. 답이 직선의 방정식이므로 (y-2)/(-3) 과 (2-y)/3 두 표현을 채점 기준에 명시."
    creative: "(1) 대칭 대상을 평면 x=1 같은 비표준 평면으로 바꾸면 대칭점 계산이 한 단계 더(★2) (2) '직선 자체를 z축 대칭이동한 직선' 을 묻게 하면 방향벡터도 함께 바뀌는 표현 전환(RT d1 · ★2) (3) Q 대신 P 와 Q 의 중점을 지나게 하면 중점 계산 추가(★1~2)."
```

```yaml
- id: RPM-GEO-0713
  page: 106
  vendor_label: "유형 02 방향벡터가 주어진 직선의 방정식 (2)"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    점 (-3,a,b) 를 지나고 직선 (3-x)/2=(2y-1)/4=-z 에 평행한 직선이 점 (5,2,-1) 을 지날 때 a+b. 5지선다.
  category: "비표준 꼴 정규화 ((2y-1)/4 → (y-1/2)/2) → 방향벡터 (2,-2,1) → x=5 로 공통값 → a, b"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "방향벡터가 주어진 공간 직선의 방정식 (한 점 + 평행 직선)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (3-x)/2=(x-3)/(-2), (2y-1)/4=(y-1/2)/2, -z=z/(-1) 로 고쳐야 방향벡터 (-2,2,-1)∥(2,-2,1) 이 나온다. (x+3)/2=(y-a)/(-2)=z-b 에 (5,2,-1) 을 넣으면 공통값 4 → a=10, b=-5, a+b=5. y 항의 계수 2 를 그대로 방향벡터로 쓰면 (2,4,1) 이 되어 오답. 정규화·방향벡터·직선·대입의 네 단계, 부호와 표기 두 함정. 통찰 없음·M_total 6 → 중 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "(2y-1)/4=(y-1/2)/2, (3-x)/2, -z 정규화 → 방향벡터 (2,-2,1) → (x+3)/2=(y-a)/(-2)=z-b → (5,2,-1) 대입 공통값 4 → a=10, b=-5 → 5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0713.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정규화 함정의 계수(2y-1 의 2, 분모 4)와 지나는 점·대입점을 바꿀 수 있음. 제약: 정규화 뒤 방향벡터가 정수비가 되고 공통값이 정수여서 a, b 가 정수로 떨어질 것. 선택지는 함정 경로(계수 2 를 그대로 쓴 경우)의 오답을 포함하도록 설계."
    creative: "(1) 함정을 z 항으로 옮겨 (3z+2)/6 같은 꼴로 바꾸면 같은 골조(★2) (2) 대입점 대신 'yz평면과 만나는 점이 (0,p,q)' 로 주면 0714 골조와 결합(★2) (3) 두 직선이 평행한지 판정하는 ㄱㄴㄷ 보기로 바꾸면 정규화만 남아 ★2."
```

```yaml
- id: RPM-GEO-0714
  page: 106
  vendor_label: "유형 02 방향벡터가 주어진 직선의 방정식 (2)"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    점 (2,0,-1) 을 지나고 방향벡터가 u=(1,2,4) 인 직선이 yz평면과 만나는 점의 좌표.
  category: "매개변수 표현 → yz평면 x=0 → t=-2 → 점"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "공간 직선과 좌표평면의 교점 (매개변수 t 대입)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    직선을 (2+t, 2t, -1+4t) 로 두고 yz평면 조건 x=0 에서 t=-2 → (0,-4,-9). yz평면이 x=0 이라는 표기 한 줄과 대입뿐이다. 통찰 없음·M_total 4 → 중 출발점 ★2 에서 −1, ★1.
  tier: star_1
  mechanism_primary: "(x,y,z)=(2+t, 2t, -1+4t) → yz평면 x=0 → t=-2 → (0,-4,-9)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$(0,\,-4,\,-9)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0714.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지나는 점·방향벡터·만나는 좌표평면(xy·yz·zx)을 바꿀 수 있음. 제약: 해당 좌표평면에 대응하는 방향벡터 성분이 0 이 아니어야 만나고, t 가 정수가 되게 점의 그 좌표를 방향 성분의 배수로."
    creative: "(1) 세 좌표평면과 만나는 세 점을 모두 구해 삼각형의 넓이를 묻기(★2~3) (2) 방향벡터의 x 성분을 0 으로 두고 'yz평면과 만나지 않음' 을 확인시키는 판정형(★2) (3) 만나는 점과 원점 사이 거리의 최솟값처럼 t 의 이차함수 최소로 바꾸면 이차함수 결합(★2)."
```

### 유형 03 두 점을 지나는 직선의 방정식

```yaml
- id: RPM-GEO-0715
  page: 107
  vendor_label: "유형 03 두 점을 지나는 직선의 방정식"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    두 점 A(1,-2,3), B(2,-1,0) 을 지나는 직선이 zx평면과 만나는 점 (a,b,c) 에 대하여 a+b+c.
  category: "AB 벡터 → 매개변수 직선 → zx평면 y=0 → t=2 → 점 → 합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "공간 직선과 좌표평면의 교점 (매개변수 t 대입)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    AB=(1,1,-3) 을 방향벡터로 (1+t, -2+t, 3-3t). zx평면 y=0 에서 t=2 → (3,0,-3), 합 0. 방향벡터 계산이 한 단계 더 붙은 0714 골조(zx평면=y=0 표기). 통찰 없음·M_total 5 → 유형 대표 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "AB=(1,1,-3) → (1+t, -2+t, 3-3t) → zx평면 y=0 → t=2 → (3,0,-3) → 합 0"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0715.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A, B 좌표와 만나는 좌표평면을 바꿀 수 있음. 제약: 해당 평면에 대응하는 성분 차(A, B 의 y 차)가 0 이 아니고, t 가 정수가 되게 A 의 y 좌표가 그 차의 배수. 합이 0 처럼 특별한 값이 되게 하려면 좌표를 맞춰 역설계."
    creative: "(1) 세 좌표평면과의 교점 P, Q, R 을 모두 구해 선분비(AP:PB 등)를 묻기(★2) (2) 교점이 원점과 이루는 거리, 또는 xy평면·zx평면 교점 사이의 거리(★2) (3) '한 점과 zx평면 위의 점 (a,0,c) 를 지나며 어떤 직선에 평행' 처럼 역으로 두면 BW d1 ★2~3."
```

```yaml
- id: RPM-GEO-0716
  page: 107
  vendor_label: "유형 03 두 점을 지나는 직선의 방정식"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    두 점 A(2,2,1), B(3,2,-2) 를 지나는 직선의 방정식이 x-2=(z-m)/n, y=k 일 때 상수 m, n, k 에 대하여 mnk.
  category: "AB=(1,0,-3) → y 성분 0 → x-2=(z-1)/(-3), y=2 → m, n, k 읽기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 점을 지나는 공간 직선의 방정식 (성분 0 · y=k 꼴)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    AB=(1,0,-3) 의 y 성분이 0 이므로 y=2 가 따로 떨어지고 x-2=(z-1)/(-3). m=1, n=-3, k=2 → mnk=-6. 성분 0 표기만 알면 대입 한 줄. 통찰 없음·M_total 4 → 중하 출발점 ★1.
  tier: star_1
  mechanism_primary: "AB=(1,0,-3) → 성분 0 은 y=2 로 분리 → x-2=(z-1)/(-3) → m=1, n=-3, k=2 → mnk=-6"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0716.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A, B 좌표를 바꾸되 한 성분 차가 0 이 되게 유지(어느 성분을 0 으로 할지 선택 가능). 제약: 문제에 x 항 계수 1 로 고정된 꼴(x-2=…)이라 AB 의 x 성분이 1(또는 약분 뒤 1)이어야 하고 m, n, k 정수."
    creative: "(1) 두 성분이 0 인 경우(x=a, y=b 꼴 · 좌표축 평행)로 바꾸면 표기 극단형(★1) (2) 방향벡터 대신 '직선이 xy평면에 평행' 조건을 주어 성분 0 을 추론하게 하면 EQV d1 ★2 (3) A, B 가 직육면체 꼭짓점이면 0717 골조."
```

```yaml
- id: RPM-GEO-0717
  page: 107
  vendor_label: "유형 03 두 점을 지나는 직선의 방정식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    그림의 직육면체(원점 O, E(4,0,0), G(0,6,0), D(0,0,5) 가 축 위)에서 두 점 D, F 를 지나는 직선의 방정식.
  category: "그림에서 D(0,0,5), F(4,6,0) 읽기 → DF=(4,6,-5) → 대칭형 직선"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 점을 지나는 공간 직선의 방정식 (그림에서 좌표 읽기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    그림의 눈금 4, 6, 5 로 D=(0,0,5), F=(4,6,0) 을 읽고 DF=(4,6,-5) → x/4=y/6=(z-5)/(-5). 좌표 읽기 두 번·방향벡터·공식의 네 단계이고 F 의 z=0, D 의 x=y=0 을 놓치면 끝. 통찰 없음·M_total 5 → 중 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "그림 → D(0,0,5), F(4,6,0) → DF=(4,6,-5) → x/4=y/6=(5-z)/5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{x}{4}=\dfrac{y}{6}=\dfrac{5-z}{5}$'
  answer_source: "답지"
  figure: crop:fig-0717.png
  latex: latex-bank/rpm-geo/items/0717.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모서리 길이 4, 6, 5 와 두 꼭짓점의 선택(D-F 대신 A-G, C-E 등 대각선)을 바꿀 수 있음. 제약: 그림 라벨 O·A~G 의 위치와 축 방향은 고정(그림 재사용) · 성분 0 이 생기는 쌍(모서리·면 대각선)을 고르면 y=k 꼴 표기가 필요하므로 명시."
    creative: "(1) 직선 DF 가 xy평면과 만나는 점(=F)·yz평면과 만나는 점을 묻기(★2) (2) 두 대각선 DF 와 AG 가 이루는 각의 코사인(0723 골조 결합 ★2~3) (3) 직육면체를 좌표 없이 주고 '한 꼭짓점을 원점, 세 모서리를 축' 으로 두게 하면 좌표 설정 자체가 RT d1 ★3."
```

```yaml
- id: RPM-GEO-0718
  page: 107
  vendor_label: "유형 03 두 점을 지나는 직선의 방정식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    세 점 A(3,2,1), B(-1,1,2), C(a,b-1,3) 이 한 직선 위에 있을 때 a+b. 5지선다.
  category: "AB, AC 벡터 → AC=kAB (z 성분으로 k=2) → a, b → a+b"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "세 점이 한 직선 위에 있을 조건 (방향벡터 평행)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    AB=(-4,-1,1), AC=(a-3, b-3, 2). 한 직선 위 ⇔ AC=kAB 이고 z 성분에서 k=2 → a-3=-8, b-3=-2 → a=-5, b=1, a+b=-4. C 의 y 좌표가 b-1 이라 AC 의 y 성분을 b-2 로 잘못 두기 쉬운 것이 유일한 함정. 두 벡터·비례·대입의 표준 절차, 통찰 없음·M_total 5 → 중 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "AB=(-4,-1,1), AC=(a-3,b-3,2) → AC=2AB → a=-5, b=1 → a+b=-4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0718.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A, B 좌표와 C 의 알려진 좌표(z=3)를 바꿀 수 있음. 제약: 알려진 좌표에서 비례상수 k 가 정수(또는 간단한 유리수)가 되게 하고, 미지 좌표를 b-1 처럼 옮긴 꼴로 둘지 명시 · a, b 정수 · 선택지 5개 서로 다른 정수."
    creative: "(1) 'C 가 선분 AB 를 m:n 으로 나눈다' 로 바꾸면 내분점 공식과 결합(★2) (2) 세 점 대신 '점 C 가 직선 AB 위에 있고 원점과의 거리가 최소' 로 두면 수선의 발 골조(0732)로 전환 ★2~3 (3) 네 점 A, B, C, D 가 한 평면 위에 있을 조건으로 확장하면 평면 방정식 결합 ★3."
```

### 유형 04 직선 위의 점

```yaml
- id: RPM-GEO-0719
  page: 107
  vendor_label: "유형 04 직선 위의 점"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    두 직선 (x+3)/2=(3-y)/2=z, (x-3)/2=y=1-z 의 교점의 좌표.
  category: "두 직선을 매개변수 t, s 로 → x, y 연립 → t, s → z 로 확인 → 교점"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 직선의 교점 (매개변수 연립)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (-3+2t, 3-2t, t) 와 (3+2s, s, 1-s) 를 놓고 x, y 에서 t-s=3, 3-2t=s → t=2, s=-1. z 에서 2=1-(-1)=2 로 세 번째 식이 맞는지 확인하고 교점 (1,-1,2). (3-y)/2, 1-z 의 부호 읽기와 2×2 연립·확인의 표준 절차. 통찰 없음·M_total 6 → 유형 대표 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "(-3+2t, 3-2t, t), (3+2s, s, 1-s) → x, y 연립 t=2, s=-1 → z 확인 → (1,-1,2)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$(1,\,-1,\,2)$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0719.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "교점 P 를 먼저 정하고 두 방향벡터를 골라 각 직선의 지나는 점을 P±(방향벡터 정수배)로 역설계. 제약: 두 방향벡터가 평행하지 않을 것 · 연립에 쓰는 두 좌표에서 t, s 가 정수로 떨어질 것 · 부호 꼴((3-y)/2, 1-z)의 유지 여부 명시."
    creative: "(1) 교점을 지나고 두 직선에 모두 수직인 직선까지 묻기(0730 골조 결합 ★3) (2) 두 직선이 만나지 않도록(꼬인 위치) 한 좌표를 바꾸고 '만나는지 판정' 을 묻는 ㄱㄴㄷ(★2 · 세 번째 식 검증이 답을 가르므로 VF d1 후보) (3) 교점과 원점, 두 직선 위 다른 두 점으로 삼각형 넓이 ★3."
```

```yaml
- id: RPM-GEO-0720
  page: 107
  vendor_label: "유형 04 직선 위의 점"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    직선 (x-1)/2=y=(z+1)/2 와 구 x²+y²+z²=38 의 두 교점 A, B 에 대하여 선분 AB 의 길이. 5지선다.
  category: "매개변수 (1+2t, t, -1+2t) → 구에 대입 → 9t²+2=38 → t=±2 → A, B → |AB|"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직선과 구의 교점 (매개변수 대입 · 현의 길이)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (1+2t, t, -1+2t) 를 구에 넣으면 일차항이 상쇄되어 9t²+2=38, t=±2. A(5,2,3), B(-3,-2,-5) → |AB|=√(64+16+64)=12. 또는 |AB|=|t₁-t₂|·|u|=4·3=12 로 좌표 없이 끝난다(중심과 직선 사이 거리 √2 → 현 2√(38-2)=12 도 가능). 대입·이차식·거리의 표준 절차, 통찰 없음·M_total 6 → 중 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "(1+2t, t, -1+2t) → 구 대입 9t²+2=38 → t=±2 → |AB|=|t₁-t₂|·|u|=4·3=12"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0720.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선의 지나는 점·방향벡터·구의 반지름을 바꿀 수 있음. 제약: 대입 뒤 t 의 이차식이 정수근(또는 |t₁-t₂| 가 간단한 값)을 갖도록 반지름 제곱을 역설계하고, 지나는 점이 중심에서 직선에 내린 수선의 발이면 일차항이 상쇄되어 계산이 가벼워짐 — 그 여부를 명시. 선택지는 |t₁-t₂| 에 |u| 를 곱하지 않은 오답(4)을 포함."
    creative: "(1) 구의 중심을 원점이 아닌 점으로 두고 반지름을 r 로 주어 'AB=12 가 되게 하는 r' 을 묻기(BW d1 ★3) (2) 현의 길이 공식(중심-직선 거리)과 대입 중 하나를 고르게 하는 설계 — 지나는 점을 수선의 발에서 떨어뜨리면 대입 갈래가 무거워져 SC d1 ★3 (3) 두 교점을 지름의 양 끝으로 하는 구의 방정식을 묻기(★2)."
```

```yaml
- id: RPM-GEO-0721
  page: 107
  vendor_label: "유형 04 직선 위의 점"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    두 직선 (1-x)/5=y=(z-5)/2, x+3=(y-3)/2=(2-z)/5 의 교점과 점 (2,3,-1) 을 지나는 직선의 방정식.
  category: "교점 연립 (t=1, s=-1) → P(-4,1,7) → P 와 (2,3,-1) 의 차 (6,2,-8)∥(3,1,-4) → 직선"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 직선의 교점 (매개변수 연립) → 두 점을 지나는 직선"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (1-5t, t, 5+2t) 와 (-3+s, 3+2s, 2-5s) 를 x, y 로 연립하면 t=1, s=-1 이고 z 도 7 로 일치 → P(-4,1,7). P 에서 (2,3,-1) 로의 벡터 (6,2,-8) 을 (3,1,-4) 로 약분해 (x+4)/3=y-1=(z-7)/(-4). 0719 의 교점 골조에 두 점 직선 한 단계가 붙어 M_total 7 이지만 모두 표준 절차라 통찰 없음 → 중·서술형 출발점 ★2 유지.
    [분류 이슈] 벤더 유형명은 「직선 위의 점」이나 실제 골조는 「두 직선의 교점 + 두 점을 지나는 직선」(유형 03·04 결합) — 카탈로그에서 유형명을 골조 기준으로 세울지 결정.
  tier: star_2
  mechanism_primary: "(1-5t, t, 5+2t)=(-3+s, 3+2s, 2-5s) → t=1, s=-1 → P(-4,1,7) → 방향 (3,1,-4) → (x+4)/3=y-1=(7-z)/4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{x+4}{3}=y-1=\dfrac{7-z}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0721.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "교점 P 와 세 번째 점 Q 를 먼저 정하고, 두 직선을 P 를 지나도록 역설계(지나는 점 = P - 방향벡터×정수). 제약: 두 방향벡터 비평행 · t, s 정수 · PQ 가 약분되어 정수 방향벡터가 되게 · 부호 꼴((1-x)/5, (2-z)/5)의 유지 여부 명시. 답이 직선의 방정식이므로 (z-7)/(-4) 와 (7-z)/4 두 표현을 채점 기준에 명시."
    creative: "(1) 세 번째 점 대신 '교점을 지나고 두 직선에 모두 수직' 으로 바꾸면 0730 골조 결합(EQV d1 ★3) (2) 교점을 지나고 xy평면에 평행하며 어느 직선과 수직인 직선처럼 조건 두 개로 방향벡터를 결정(★3) (3) 서술형 채점 항목(교점 · 방향벡터 · 방정식)을 그대로 두고 두 직선을 y=k 꼴이 섞인 직선으로 바꾸면 표기 함정 ★2."
```

```yaml
- id: RPM-GEO-0722
  page: 107
  vendor_label: "유형 04 직선 위의 점"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    두 직선 x-2=(y+1)/2=(3-z)/4, (x+1)/2=3-y=(z-5)/k 가 한 점에서 만나도록 하는 상수 k. 5지선다.
  category: "매개변수 → x, y 연립으로 t=1, s=2 → z 좌표 일치 조건 3-4t=5+ks → k"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 직선이 한 점에서 만날 조건 (매개변수 연립 → 미정계수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (2+t, -1+2t, 3-4t) 와 (-1+2s, 3-s, 5+ks) 에서 k 가 없는 x, y 두 식으로 t=1, s=2 를 먼저 얻고, z 식 3-4=5+2k 에서 k=-3. 미지수가 없는 두 좌표로 t, s 를 정한 뒤 남은 좌표로 k 를 맞추는 순서가 골조이며 이는 교점 연립의 표준 변형. 통찰 없음·M_total 6 → 중 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "(2+t, -1+2t, 3-4t)=(-1+2s, 3-s, 5+ks) → x, y 에서 t=1, s=2 → z: -1=5+2k → k=-3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0722.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "교점 P 를 먼저 정해 두 직선을 역설계하고 k 가 들어갈 성분을 고름. 제약: k 가 없는 두 좌표의 연립이 유일해(비평행)를 가질 것 · t, s 정수 · k 가 정수가 되게 P 의 해당 좌표를 맞출 것 · 부호 꼴((3-z)/4, 3-y) 유지 여부 명시. 선택지는 3-y 를 y-3 으로 읽은 경로의 값을 포함."
    creative: "(1) k 를 지나는 점 쪽에 두어(예: (x+1)/2=3-y=(z-k)/2) 같은 골조(★2) (2) '두 직선이 만나지 않도록 하는 k 의 조건' 으로 뒤집어 평행(성분비)까지 따지게 하면 MI d1 ★3 (3) 만나는 점과 원점의 거리, 또는 두 직선이 이루는 각까지 이어 붙이면 0723 결합 ★3."
```

### 유형 05 두 직선이 이루는 각의 크기

```yaml
- id: RPM-GEO-0723
  page: 108
  vendor_label: "유형 05 두 직선이 이루는 각의 크기"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    두 직선 l: (x-1)/a=y+3, m: x+1=(y-2)/√3 이 이루는 각이 30° 일 때 상수 a (a≠0). 5지선다.
  category: "방향벡터 (a,1), (1,√3) → |a+√3|/(2√(a²+1))=cos30° → 양변 제곱 → a(a-√3)=0 → a=√3"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 직선이 이루는 각 (방향벡터 내적 · cos 공식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    u=(a,1), v=(1,√3), |v|=2. cos30°=|a+√3|/(2√(a²+1))=√3/2 → (a+√3)²=3(a²+1) → 2a²-2√3a=0 → a=0 또는 √3, 조건으로 a=√3. 절댓값을 붙이는 것과 제곱 정리가 전부이고 a=0 배제는 문제가 명시(a=0 도 실제로 30° 를 만족한다). 통찰 없음·M_total 6 → 유형 대표 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "u=(a,1), v=(1,√3) → |a+√3|/(2√(a²+1))=√3/2 → 2a²-2√3a=0 → a=√3 (a≠0)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0723.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각(30°·45°·60°)과 고정 직선의 방향벡터를 바꿀 수 있음. 제약: 제곱 뒤 a 의 이차식이 인수분해되어 근이 선택지 꼴(근호 하나)로 떨어질 것 · a=0 같은 자명근이 생기면 배제 조건을 발문에 넣을지 명시. 선택지는 절댓값을 빠뜨린 경로의 값을 오답으로."
    creative: "(1) a≠0 을 빼면 a=0 도 30° 를 만족해 답이 둘 — '모든 a 의 값의 합' 으로 바꾸면 0724 골조(★2) (2) 공간 직선으로 올리면 0724 골조(★2) (3) 평면 직선이므로 기울기 공식 tanθ=|(m₁-m₂)/(1+m₁m₂)| 갈래와 방향벡터 갈래 중 선택하게 하면 SC d1 ★3."
```

```yaml
- id: RPM-GEO-0724
  page: 108
  vendor_label: "유형 05 두 직선이 이루는 각의 크기"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    두 직선 x-2=(y+3)/k=z+3, x/k=y=3-z 가 이루는 각이 60° 가 되도록 하는 모든 실수 k 의 값의 합 (k≠0).
  category: "방향벡터 (1,k,1), (k,1,-1) → |2k-1|/(k²+2)=1/2 → 절댓값 분기 두 이차식 → k=2, -4 (0 배제) → 합"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 직선이 이루는 각 (방향벡터 내적 · cos 공식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    u=(1,k,1), v=(k,1,-1) 은 크기가 둘 다 √(k²+2) 라 cos60°=|2k-1|/(k²+2)=1/2, 즉 2|2k-1|=k²+2. 2k-1≥0 이면 (k-2)²=0 → k=2, 2k-1<0 이면 k²+4k=0 → k=-4 (k=0 은 조건으로 배제). 합 2+(-4)=-2. 절댓값 분기(T-부호)와 중근·k=0 배제(T-경계)로 M_total 8 이지만 분기는 표준 절댓값 처리라 통찰로 세지 않음 → 중 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "u=(1,k,1), v=(k,1,-1) → |2k-1|/(k²+2)=1/2 → (k-2)²=0 또는 k(k+4)=0 → k=2, -4 → 합 -2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0724.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "k 의 위치(두 직선의 어느 성분)와 각(60°·45°)을 바꿀 수 있음. 제약: 두 방향벡터의 크기가 같아지도록(k²+2 공유) 성분을 배치하면 분모가 정리되어 이차식 두 개로 끝남 — 크기가 다르면 사차식이 되어 M_k 3 · 근이 정수(중근 허용)가 되게 상수항 역설계 · k=0 배제 조건을 유지할지 명시."
    creative: "(1) '모든 k 의 값의 곱' 으로 바꾸면 중근 2 를 한 번만 세는지(2·(-4)=-8) 가 갈려 T-경계 함정 ★2 (2) '각이 60° 이하가 되는 k 의 범위' 로 바꾸면 부등식 분기 MI d1 ★3 (3) 각 대신 '두 직선이 수직' 으로 바꾸면 2k-1=0 한 줄 ★1 (0728 골조)."
```

```yaml
- id: RPM-GEO-0725
  page: 108
  vendor_label: "유형 05 두 직선이 이루는 각의 크기"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    두 직선 l₁: (x+1)/4=(y-1)/3, l₂: 2-x=(y+1)/3 이 이루는 각 θ 에 대하여 sinθ. 5지선다.
  category: "방향벡터 (4,3), (-1,3) → cosθ=|-4+9|/(5√10)=1/√10 → sinθ=3/√10"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 직선이 이루는 각 (방향벡터 내적 · cos 공식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    2-x=(x-2)/(-1) 로 읽어 v=(-1,3). cosθ=|(4,3)·(-1,3)|/(5·√10)=5/(5√10)=1/√10, sinθ=√(1-1/10)=3√10/10. 부호 읽기 한 번 + 내적 + sin 변환 세 줄(2-x 를 x-2 로 읽으면 cosθ>1 이 되어 스스로 걸러진다). 통찰 없음·M_total 5 → 중 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "u=(4,3), v=(-1,3) → cosθ=5/(5√10)=1/√10 → sinθ=3/√10=3√10/10"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0725.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 방향벡터를 바꾸되 |u|·|v| 와 내적이 정리되어 cosθ 가 1/√n 꼴이 되게. 제약: sinθ 가 근호 하나로 정리될 것 · 2-x 부호 꼴 유지 여부 명시. 선택지는 cosθ 자체(√10/10)를 오답으로 포함."
    creative: "(1) sinθ 대신 tanθ 나 두 직선과 원점으로 만든 삼각형 넓이(sin 활용)를 묻기 ★2 (2) 공간 직선 셋이 이루는 각의 sin 합 처럼 확장 ★2~3 (3) 기울기 공식 tanθ=|(m₁-m₂)/(1+m₁m₂)| 갈래와 방향벡터 갈래 중 선택하게 하면 SC d1 ★3."
```

```yaml
- id: RPM-GEO-0726
  page: 108
  vendor_label: "유형 05 두 직선이 이루는 각의 크기"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    직선 (x-2)/2=-y-1=(z-5)/2 가 x축, y축, z축과 이루는 각 α, β, γ 에 대하여 cosα+cosβ+cosγ.
  category: "-y-1=(y+1)/(-1) → 방향벡터 (2,-1,2), |u|=3 → 각 축의 방향벡터 e₁,e₂,e₃ 과 내적 → |성분|/3 → 합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "좌표축을 방향벡터 (1,0,0), (0,1,0), (0,0,1) 인 직선으로 옮겨 각 축과의 각을 |성분|/|u| 로 읽음(방향코사인)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "직선이 좌표축과 이루는 각 (방향코사인)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    u=(2,-1,2), |u|=3. x축의 방향벡터 (1,0,0) 과의 각은 cosα=|2|/3, 같은 식으로 cosβ=|-1|/3, cosγ=|2|/3 → 합 5/3. 두 직선이 이루는 각은 예각으로 잡으므로 절댓값이 필수이고(빠뜨리면 1), 좌표축을 벡터로 옮기는 한 단계가 통찰(RT d1)이나 그 뒤는 성분 읽기뿐.
    [분류 이슈] 벤더 「상중」이나 M_total 5 · 통찰 RT d1 하나로 가벼움 → ★2 로 낮춤. 후보 ★2/★3.
  tier: star_2
  mechanism_primary: "u=(2,-1,2), |u|=3 → cosα, cosβ, cosγ = |2|/3, |-1|/3, |2|/3 → 합 5/3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{5}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0726.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "방향벡터를 (1,2,2)·(2,3,6)·(3,4,12) 같은 피타고라스 삼중쌍(크기가 정수)으로 바꾸고 음수 성분의 위치·개수를 조절. 제약: |u| 정수 · 음수 성분이 하나 이상 있어야 절댓값 함정이 살아 있음 · -y-1 같은 부호 꼴 유지 여부 명시."
    creative: "(1) cos²α+cos²β+cos²γ=1 을 유도·이용하게 하면(성분 제곱합/|u|²) 항등식 발견 PD d1 ★3 (2) '직선이 세 좌표평면과 이루는 각' 으로 바꾸면 법선벡터와의 각의 여각 전환이 한 단계 더(RT d1 유지 · ★3) (3) 두 각 α, β 를 주고 γ 를 구하게 하면(cos² 합=1) BW d1 ★3."
```

### 유형 06 두 직선의 평행과 수직

```yaml
- id: RPM-GEO-0727
  page: 108
  vendor_label: "유형 06 두 직선의 평행과 수직"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    두 직선 l₁: (x-1)/a=(y+5)/(-b)=(z+2)/4, l₂: (x+4)/3=(y+1)/2=(z-1)/2 가 평행할 때 상수 a, b 에 대하여 a+b.
  category: "방향벡터 (a,-b,4)∥(3,2,2) → 비 4/2=2 → a=6, -b=4 → a+b=2"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 직선의 평행 조건 (방향벡터 성분비)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (a,-b,4)=k(3,2,2) 에서 z 성분으로 k=2 → a=6, -b=4 → b=-4, a+b=2. 성분비 한 줄이고 -b 의 부호만 조심. 통찰 없음·M_total 4 → 유형 대표 출발점 ★2 에서 −1, ★1.
  tier: star_1
  mechanism_primary: "(a,-b,4)=2(3,2,2) → a=6, b=-4 → a+b=2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0727.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "l₂ 의 방향벡터와 비례상수(z 성분 4 ↔ 2)를 바꾸고 미지수 위치(분모 -b 처럼 부호 붙은 꼴)를 조절. 제약: 비례상수가 정수 · a, b 정수 · -b 같은 부호 꼴을 유지할지 명시."
    creative: "(1) 평행 대신 수직(내적 0)으로 바꾸면 미지수 하나만 정해져 'a+b 의 최솟값' 같은 추가 조건이 필요 ★2 (2) 두 직선이 평행하면서 한 점을 공유하는지(일치 여부) 판정까지 묻기 ★2 (3) 세 직선 조합으로 0729 골조."
```

```yaml
- id: RPM-GEO-0728
  page: 108
  vendor_label: "유형 06 두 직선의 평행과 수직"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    두 점 (4,6), (7,-3) 을 지나는 직선과 직선 x+1=y/(2k-1) 이 수직일 때 상수 k.
  category: "방향벡터 (3,-9)∥(1,-3) 과 (1,2k-1) 내적 0 → 1-3(2k-1)=0 → k=2/3"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 직선의 수직 조건 (방향벡터 내적 0)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    두 점의 차 (3,-9) 를 (1,-3) 으로 약분하고 (1,2k-1) 과의 내적 1-3(2k-1)=0 → 6k=4, k=2/3. 방향벡터 하나 만들고 내적 0 한 줄. 통찰 없음·M_total 4 → 중하 출발점 ★1.
  tier: star_1
  mechanism_primary: "(7,-3)-(4,6)=(3,-9)∥(1,-3) → (1,-3)·(1,2k-1)=0 → k=2/3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{2}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0728.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 점과 분모의 일차식(2k-1)을 바꿀 수 있음. 제약: 두 점의 차가 약분되어 작은 정수 방향벡터가 될 것 · k 가 정수 또는 간단한 분수 · 분모가 0 이 되는 k(=1/2)는 답이 아니어야 함."
    creative: "(1) 수직 대신 '이루는 각이 45°' 로 바꾸면 0723 골조 ★2 (2) 두 점을 지나는 직선에 수직이고 그 중점을 지나는 직선(수직이등분선)의 방정식을 묻기 ★2 (3) 공간 직선으로 올려 세 직선 조건 0729 골조."
```

```yaml
- id: RPM-GEO-0729
  page: 108
  vendor_label: "유형 06 두 직선의 평행과 수직"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    세 직선 l₁: (x-1)/2=(y+2)/3=z+3, l₂: (x-4)/6=(4-y)/p=(2-z)/q, l₃: x/r=y-3=(z+1)/3 에 대하여 l₁∥l₂, l₁⊥l₃ 일 때 p+q+r.
  category: "l₂ 방향 (6,-p,-q)=3(2,3,1) → p=-9, q=-3 · l₃ 방향 (r,1,3)·(2,3,1)=0 → r=-3 → 합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 직선의 평행·수직 조건 (성분비 · 내적 0)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (4-y)/p=(y-4)/(-p), (2-z)/q=(z-2)/(-q) 로 고쳐 l₂ 의 방향벡터 (6,-p,-q). l₁ 의 (2,3,1) 과 평행이므로 비례상수 3 → -p=9, -q=3. l₃ 의 (r,1,3) 은 내적 2r+3+3=0 → r=-3. p+q+r=-15. 부호 꼴 두 개를 그대로 (6,p,q) 로 두면 부호가 통째로 뒤집히는 것이 함정. 성분비·내적 0 의 표준 절차, 통찰 없음·M_total 5 → 중·서술형 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "(6,-p,-q)=3(2,3,1) → p=-9, q=-3 · (r,1,3)·(2,3,1)=0 → r=-3 → p+q+r=-15"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-15$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0729.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "l₁ 의 방향벡터·비례상수·부호 꼴의 위치를 바꿀 수 있음. 제약: 비례상수 정수 · r 이 정수가 되게 l₃ 의 나머지 성분 내적을 l₁ 성분의 배수로 · (4-y)/p 꼴을 몇 개 유지할지 명시(부호 함정의 개수)."
    creative: "(1) l₁⊥l₃ 대신 'l₃ 이 l₁, l₂ 와 각각 이루는 각이 같다' 처럼 바꾸면 각 공식 결합 ★3 (2) 세 직선이 한 점을 지나는 조건까지 붙이면 교점 연립(0719) 결합 ★3 (3) 서술형 채점 항목을 유지하고 직선 하나를 y=k 꼴(성분 0)로 바꾸면 표기 함정 ★2."
```

```yaml
- id: RPM-GEO-0730
  page: 108
  vendor_label: "유형 06 두 직선의 평행과 수직"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    두 직선 l₁: (x-1)/2=(y-1)/3=(z+1)/4, l₂: x+1=(y-2)/2=(z-1)/3 에 모두 수직이고 원점을 지나는 직선의 방정식.
  category: "방향벡터를 (a,b,c) 로 두고 (2,3,4)·u=0, (1,2,3)·u=0 → 동차 연립 → u∥(1,-2,1) → 원점 지나는 직선"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'두 직선에 모두 수직' 을 미지 방향벡터 (a,b,c) 에 대한 내적 0 두 식(동차 연립 · 비율만 결정)으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 직선에 동시에 수직인 직선 (미지 방향벡터 · 내적 0 연립)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    구하는 직선의 방향벡터를 (a,b,c) 로 두면 2a+3b+4c=0, a+2b+3c=0. 두 식을 빼면 b=-2c, a=c → (1,-2,1). 원점을 지나므로 x=y/(-2)=z, 즉 x=-y/2=z. 조건을 미지 벡터의 동차 연립으로 옮기고 해가 비율로만 정해짐을 이해하는 단계가 통찰(EQV d1)이며, 연립 자체는 두 줄. 통찰 1·M_total 6 → 상중 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "u=(a,b,c), 2a+3b+4c=0, a+2b+3c=0 → b=-2c, a=c → u=(1,-2,1) → x=-y/2=z"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$x=-\dfrac{y}{2}=z$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0730.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 방향벡터를 바꾸되 동차 연립의 해가 정수 비(예: (1,-2,1))가 되게 역설계(원하는 u 를 먼저 정하고 u 에 수직인 두 벡터를 고름). 제약: 두 방향벡터 비평행 · 지나는 점(원점)을 바꾸면 답 표기가 바뀜 · 답 -y/2 표기(y/(-2))를 채점 기준에 명시."
    creative: "(1) '두 직선에 모두 수직이고 l₁ 과 만나는 직선' 으로 바꾸면 교점 매개변수까지 정해야 해 CON d1 추가 ★4 (2) 두 직선에 모두 평행한 평면(법선 = 공통 수직 벡터)의 방정식으로 바꾸면 같은 동차 연립 골조 ★3 (3) 방향벡터를 (1,b,c) 로 놓게 유도하면(성분 하나 고정) EQV 가 사라져 ★2."
```

### 유형 07 점과 직선 사이의 거리

```yaml
- id: RPM-GEO-0731
  page: 109
  vendor_label: "유형 07 점과 직선 사이의 거리"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    점 A(5,3,1) 과 직선 (x+1)/2=(y-2)/3=-z 사이의 거리.
  category: "수선의 발 H(-1+2t, 2+3t, -t) → AH·u=0 → t=1 → H(1,5,-1) → |AH|=2√6"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "점과 직선 사이의 거리 (수선의 발 H · AH⊥u)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    -z=z/(-1) 로 u=(2,3,-1). H=(-1+2t, 2+3t, -t) 로 두고 AH=(-6+2t, -1+3t, -1-t) 와 u 의 내적 14t-14=0 → t=1, H(1,5,-1), AH=(-4,2,-2), |AH|=√24=2√6. 수선의 발 → 내적 0 → 거리의 교과서 절차 그대로이고 계산이 세 줄. 통찰 없음·M_total 7 → 유형 대표 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "H=(-1+2t, 2+3t, -t) → AH·(2,3,-1)=0 → t=1 → AH=(-4,2,-2) → |AH|=2√6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2\sqrt{6}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0731.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "H 와 방향벡터 u 를 먼저 정하고 A=H+(u 에 수직인 벡터), 직선의 지나는 점 = H-u·정수 로 역설계. 제약: t 정수 · |AH| 가 간단한 근호 · -z 같은 부호 꼴 유지 여부 명시."
    creative: "(1) 거리 대신 '직선 위의 점 P 에 대하여 |AP| 의 최솟값' 으로 발문을 바꾸면 최소 = 수선의 발 해석이 한 단계(EQV d1 ★2~3) (2) 두 점 A, B 와 직선 사이 거리가 같을 조건으로 미지수를 두면 BW d1 ★3 (3) 거리 공식 √(|AP|²-(AP·u/|u|)²) 갈래와 수선의 발 갈래 중 선택 → SC d1 ★3."
```

```yaml
- id: RPM-GEO-0732
  page: 109
  vendor_label: "유형 07 점과 직선 사이의 거리"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    점 A(3,-3,5) 에서 직선 x-4=(y+1)/3=1-z 에 내린 수선의 발의 좌표.
  category: "H(4+t, -1+3t, 1-t) → AH·(1,3,-1)=0 → 11t+11=0 → t=-1 → H(3,-4,2)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "점에서 직선에 내린 수선의 발 (AH⊥u)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    1-z=(z-1)/(-1) 로 u=(1,3,-1). H=(4+t, -1+3t, 1-t), AH=(1+t, 2+3t, -4-t) 와 u 의 내적 11t+11=0 → t=-1 → H(3,-4,2). 0731 에서 거리 계산을 뺀 골조. 통찰 없음·M_total 6 → 중 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "H=(4+t, -1+3t, 1-t) → AH·(1,3,-1)=0 → t=-1 → H(3,-4,2)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$(3,\,-4,\,2)$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0732.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "H 와 u 를 먼저 정하고 A=H+(u 에 수직인 정수 벡터), 지나는 점=H-u·정수 로 역설계. 제약: t 정수 · H 의 좌표 정수 · 1-z 부호 꼴 유지 여부 명시."
    creative: "(1) A 의 직선에 대한 대칭점(A'=2H-A)을 묻기 ★2 (2) 직선이 xy평면에 평행한 경우(u 의 z 성분 0)로 바꾸면 y=k 꼴 표기와 결합 ★2 (3) 수선의 발 H 가 선분 PQ 위(내분점)에 있는지 판정 → 매개변수 범위 검증 VF d1 ★3."
```

```yaml
- id: RPM-GEO-0733
  page: 109
  vendor_label: "유형 07 점과 직선 사이의 거리"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    점 A(5,-1,0) 에서 직선 (x+1)/2=y-4=(7-z)/3 에 내린 수선의 발을 H 라 할 때 AH 의 길이. 5지선다.
  category: "H(-1+2t, 4+t, 7-3t) → AH·(2,1,-3)=0 → 14t-28=0 → t=2 → H(3,6,1) → |AH|=3√6"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "점과 직선 사이의 거리 (수선의 발 H · AH⊥u)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (7-z)/3=(z-7)/(-3) 으로 u=(2,1,-3). H=(-1+2t, 4+t, 7-3t), AH=(-6+2t, 5+t, 7-3t) 와 u 의 내적 14t-28=0 → t=2, H(3,6,1), AH=(-2,7,1), |AH|=√54=3√6. 0731 과 같은 골조(부호 꼴만 z 쪽). 통찰 없음·M_total 7 → 중 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "H=(-1+2t, 4+t, 7-3t) → AH·(2,1,-3)=0 → t=2 → AH=(-2,7,1) → |AH|=3√6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0733.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "H, u 를 먼저 정해 A 와 지나는 점을 역설계. 제약: t 정수 · |AH|² 가 (제곱수)×(작은 수) 꼴로 근호가 정리될 것 · 선택지 5개가 서로 다른 근호 꼴 · 부호 꼴 (7-z)/3 유지 여부 명시."
    creative: "(1) |AH| 대신 삼각형 AHP(P 는 직선 위 다른 점)의 넓이 ★2 (2) 'A 에서 직선까지의 거리가 3√6 이 되도록 하는 A 의 z 좌표' 로 뒤집으면 BW d1 ★3 (3) 평행한 두 직선 사이의 거리로 바꾸면 한 직선 위 점 → 다른 직선까지 거리 전환 EQV d1 ★3."
```

```yaml
- id: RPM-GEO-0734
  page: 109
  vendor_label: "유형 07 점과 직선 사이의 거리"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    점 A(-2,0,2) 와 직선 l: x-3=y/2=(z+2)/(-4) 위의 두 점 B, C 에 대하여 삼각형 ABC 가 정삼각형일 때 둘레의 길이.
  category: "정삼각형의 높이 = A 와 l 사이 거리 h → 수선의 발 H(2,-2,2), h=2√5 → 변 2h/√3 → 둘레 2√3h=4√15"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'직선 위 두 점과 정삼각형' 을 'A 에서 l 까지의 거리가 정삼각형의 높이' 로 옮겨 둘레를 h 하나로 환산"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "점과 직선 사이의 거리의 활용 (정삼각형의 높이)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    B, C 가 l 위에 있으므로 A 에서 l 에 내린 수선의 발 H 는 BC 의 중점이고 AH 가 정삼각형의 높이. H=(3+t, 2t, -2-4t), AH·(1,2,-4)=0 → 21t+21=0 → t=-1, H(2,-2,2), h=|AH|=|(4,-2,0)|=2√5. 변 = 2h/√3, 둘레 = 6h/√3 = 2√3h = 4√15. 정삼각형 조건을 점-직선 거리로 바꾸는 단계가 통찰(RT d1)이고 나머지는 0731 골조. 통찰 1·M_total 7 → 상중 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "정삼각형 높이 = d(A, l) → H=(3+t, 2t, -2-4t), AH·u=0 → t=-1 → h=2√5 → 둘레 2√3h=4√15"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$4\sqrt{15}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0734.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "H, u 를 먼저 정해 A 와 지나는 점을 역설계하되 h 가 √(3×제곱수) 또는 √5 류가 되게 하여 둘레 2√3h 가 정리되게. 제약: t 정수 · AH⊥u · B, C 의 실제 좌표는 묻지 않으므로 h 만 예쁘면 됨(좌표까지 물으면 h/√3 배 이동으로 무리수 좌표)."
    creative: "(1) 정삼각형 대신 '∠BAC=90° 인 직각이등변삼각형' 으로 바꾸면 변 = √2h — 같은 RT 골조 ★3 (2) 정삼각형 ABC 의 넓이나 B, C 의 좌표를 묻게 하면 h/√3 만큼 u 방향 이동 계산이 추가되어 M_k 3 · ★3~4 (3) l 위의 점 B 에 대하여 |AB| 의 최솟값(=h)만 묻는 하위형 ★2 (EQV d1)."
```

### 유형 08 법선벡터가 주어진 평면의 방정식

```yaml
- id: RPM-GEO-0735
  page: 109
  vendor_label: "유형 08 법선벡터가 주어진 평면의 방정식"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    점 (2,1,4) 를 지나고 직선 (x-2)/3=(y+1)/4=(z-3)/2 에 수직인 평면이 점 (k,2,-1) 을 지날 때 k. 5지선다.
  category: "직선의 방향벡터 (3,4,2) = 평면의 법선벡터 → 3(x-2)+4(y-1)+2(z-4)=0 → (k,2,-1) 대입 → k=4"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "법선벡터가 주어진 평면의 방정식 (직선에 수직인 평면)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    직선에 수직인 평면의 법선벡터는 직선의 방향벡터 (3,4,2). 3(x-2)+4(y-1)+2(z-4)=0 → 3x+4y+2z-18=0 에 (k,2,-1) 을 넣으면 3k+8-2-18=0 → k=4. 법선 읽기와 대입 두 줄. 통찰 없음·M_total 4 → 유형 대표 출발점 ★2 에서 −1, ★1.
  tier: star_1
  mechanism_primary: "법선 n=(3,4,2) → 3x+4y+2z-18=0 → (k,2,-1) 대입 → k=4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0735.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지나는 점·방향벡터·대입점의 고정 좌표를 바꿀 수 있음. 제약: 상수항 정수 · k 정수 · 선택지 5개 서로 다른 정수(직선 위의 점 (2,-1,3) 을 평면이 지나는 점으로 착각한 경로의 값을 오답으로)."
    creative: "(1) '직선에 수직' 대신 '두 점을 지나는 직선에 수직' 으로 바꾸면 0736 골조 ★1 (2) 평면과 직선의 교점까지 묻기(매개변수 대입) ★2 (3) 평면이 x축·y축·z축과 만나는 세 점으로 만든 삼각형의 넓이나 사면체 부피 ★3."
```

```yaml
- id: RPM-GEO-0736
  page: 109
  vendor_label: "유형 08 법선벡터가 주어진 평면의 방정식"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    두 점 A(0,1,-1), B(2,-2,0) 을 지나는 직선에 수직이고 점 (1,-1,2) 를 지나는 평면의 방정식.
  category: "AB=(2,-3,1) = 법선벡터 → 2(x-1)-3(y+1)+(z-2)=0 → 2x-3y+z-7=0"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "법선벡터가 주어진 평면의 방정식 (직선에 수직인 평면)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    AB=(2,-3,1) 이 평면의 법선벡터. 2(x-1)-3(y+1)+(z-2)=0 을 정리하면 2x-3y+z-7=0. 벡터 뺄셈 한 번과 공식 대입. 통찰 없음·M_total 4 → 중하 출발점 ★1.
  tier: star_1
  mechanism_primary: "n=AB=(2,-3,1) → 2(x-1)-3(y+1)+(z-2)=0 → 2x-3y+z-7=0"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$2x-3y+z-7=0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0736.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A, B 와 지나는 점을 자유롭게. 제약: AB 성분이 작은 정수(약분 여부 명시) · 상수항 정수 · 답을 일반형 ax+by+cz+d=0 (a>0) 으로 통일한다는 채점 기준 명시."
    creative: "(1) 지나는 점을 선분 AB 의 중점으로 두면 수직이등분면 ★1~2 (2) 평면과 원점 사이의 거리(점-평면 거리 공식)까지 ★2 (3) 평면과 직선 AB 의 교점을 묻기 ★2."
```

```yaml
- id: RPM-GEO-0737
  page: 109
  vendor_label: "유형 08 법선벡터가 주어진 평면의 방정식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    두 점 (3,1,-2), (a,1,1) 을 지나는 평면이 평면 x+2y-z=3 과 평행할 때 a. 5지선다.
  category: "평행 평면은 법선 (1,2,-1) 공유 → x+2y-z=d 에 (3,1,-2) 대입 d=7 → (a,1,1) 대입 → a=6"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평면의 평행 조건 (법선벡터 공유 · 점 대입)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    평행한 평면은 법선벡터가 같으므로 x+2y-z=d. (3,1,-2) 에서 3+2+2=7 → d=7, (a,1,1) 에서 a+2-1=7 → a=6. 또는 두 점을 잇는 벡터 (a-3,0,3) 이 법선 (1,2,-1) 과 수직 → a-3-3=0 으로 한 줄. 두 갈래 모두 대입 두 줄이라 선택 부담 없음. 통찰 없음·M_total 5 → 중 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "법선 (1,2,-1) 공유 → x+2y-z=7 → (a,1,1) 대입 → a=6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0737.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준 평면의 법선과 상수, 두 점의 고정 좌표를 바꿀 수 있음. 제약: 두 점 모두 새 평면 위에 있어야 하므로 두 점의 차가 법선과 수직이 되게 역설계 · a 정수 · 선택지 5개 서로 다른 정수."
    creative: "(1) 두 평면 사이의 거리를 함께 묻기(점-평면 거리) ★2 (2) 세 점을 지나는 평면이 주어진 평면과 수직일 조건으로 바꾸면 법선을 미지수로 두는 동차 연립(0730 골조) ★3 (3) 두 점을 지나고 주어진 직선에 평행한 평면 → 법선이 두 벡터에 수직 EQV d1 ★3."
```

```yaml
- id: RPM-GEO-0738
  page: 109
  vendor_label: "유형 08 법선벡터가 주어진 평면의 방정식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    구 x²+y²+(z-3)²=2 위의 점 P(1,0,4) 에서 이 구에 접하는 평면이 z축과 만나는 점의 좌표.
  category: "중심 C(0,0,3) → 법선 CP=(1,0,1) → 접평면 (x-1)+(z-4)=0 → z축 (x=y=0) → z=5"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구의 접평면의 방정식 (반지름 벡터 = 법선벡터)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    접평면은 접점에서의 반지름에 수직이므로 법선 CP=(1,0,1). (x-1)+0·y+(z-4)=0 → x+z=5, z축 위에서는 x=y=0 이므로 (0,0,5). 접평면의 법선을 중심→접점 벡터로 잡는 교과서 정리와 대입 두 줄. 통찰 없음·M_total 5 → 중 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "C(0,0,3), n=CP=(1,0,1) → x+z-5=0 → z축 x=y=0 → (0,0,5)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$(0,\,0,\,5)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0738.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구의 중심·반지름과 접점 P 를 바꾸되 P 가 구 위에 있도록(반지름 제곱 = |CP|²) 역설계. 제약: CP 성분 정수 · 접평면이 해당 축과 만나려면 법선의 그 축 성분이 0 이 아닐 것 · 교점 좌표 정수."
    creative: "(1) 접평면이 세 좌표축과 만나는 점으로 만든 사면체의 부피 ★3 (2) '구 밖의 점 A 에서 그은 접평면이 접하는 점 P 의 자취(원)' 로 바꾸면 접점 조건 CP⊥AP 의 자취 해석 RT d1 ★4 (3) 접평면과 원점 사이의 거리(=|d|/|n|)로 바꾸면 점-평면 거리 결합 ★2."
```

## 표본 판정 요약 (31문)

- ★ 분포: ★1 10 · ★2 19 · ★3 2 · ★4 0 · ★5 0
- 통찰형 3 (0726 I-RT d1 · 0730 I-EQV d1 · 0734 I-RT d1) · 절차형 28 · premium 0
- M_total: 4 → 10문 · 5 → 9문 · 6 → 7문 · 7 → 4문(0721 · 0731 · 0733 · 0734) · 8 → 1문(0724 — 절댓값 분기·중근·k=0 배제가 겹친 절차형)
- 벤더 신호: 대표문제 8 · 중하 4 · 중 16 · 상중 3(0726 ★2 · 0730 ★3 · 0734 ★3) · 서술형 태그 2(0721 · 0729 모두 ★2)
- type_hint 상위: 「방향벡터가 주어진 직선의 방정식(평면 3 · 공간 3)」 6 · 「점과 직선 사이의 거리·수선의 발(정삼각형 활용 포함)」 4 · 「두 직선이 이루는 각(cos 공식)」 3 · 「두 직선의 교점·만날 조건(매개변수 연립)」 3 · 「두 직선의 평행·수직 조건」 3 · 그 외 2문 이하(직선과 좌표평면의 교점 2 · 직선에 수직인 평면 2 · 두 점 직선 y=k 꼴 1 · 그림 좌표 읽기 1 · 세 점이 한 직선 위 1 · 직선과 구의 교점 1 · 방향코사인 1 · 공통 수직 직선 1 · 평면의 평행 조건 1 · 구의 접평면 1)
- 그림: 1문(0717 · `crop:fig-0717.png`)
- 전사 답 확인: 31건 모두 재계산과 일치

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-GEO-0726 | 벤더 「상중」이나 M_total 5 · 통찰 RT d1(좌표축 → 방향벡터 · 방향코사인) 하나로 가벼움 → ★2. 상중 셋 중 유일하게 낮춘 문항이며 라벨을 ★3 으로 두지 않고 판정대로 기록 | ★2 / ★3 |
| RPM-GEO-0721 | 벤더 유형명 「직선 위의 점」이지만 실제 골조는 「두 직선의 교점 + 두 점을 지나는 직선」(유형 03·04 결합). 카탈로그에서 유형명을 골조 기준으로 세울지 결정 | ★2 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 반복된 type_hint: 「방향벡터가 주어진 직선의 방정식」 6(평면 3 · 공간 3) · 「점과 직선 사이의 거리·수선의 발」 4 · 「두 직선이 이루는 각」 3 · 「두 직선의 교점·만날 조건」 3 · 「두 직선의 평행·수직 조건」 3.
- 따로 세울 유형: (1) 「두 직선의 교점」(0719 · 0721 · 0722)은 벤더 유형명 「직선 위의 점」보다 골조가 뚜렷하므로 교점 좌표 / 교점을 지나는 직선 / 만날 조건(미정계수)의 세 하위형을 한 유형으로 묶되 유형명은 교점으로. 「직선과 구의 교점」(0720)은 같은 매개변수 대입이지만 이차식·현의 길이가 붙으므로 별도 유형(★2 base · 현의 길이 공식 갈래가 있어 SC 변형의 출발점). (2) 「점과 직선 사이의 거리」(0731~0733 · ★2 base)와 「거리의 활용」(0734 정삼각형 · ★3 base)은 base ★ 가 다르므로 분리. (3) 「두 직선에 동시에 수직인 직선」(0730)은 미지 방향벡터·동차 연립 골조라 「평행·수직 조건」(0727~0729 · ★1~2)과 별도 유형(★3 base). (4) 「방향코사인」(0726)은 「두 직선이 이루는 각」의 특수 사례이지만 좌표축 → 벡터 전환과 절댓값이 따로 있으니 하위 변형으로 표기하고 base ★ 는 2 로.
- 통합해도 될 유형: (1) 「방향벡터가 주어진 직선」 평면(유형 01)/공간(유형 02)은 차원만 다르고 골조가 같으므로 한 유형 안의 차원 분기. (2) 「직선과 좌표평면의 교점」(0714 · 0715)은 「두 점을 지나는 직선」의 후속 대입 한 줄이라 유형 02·03 안의 발문 분기로 둘 수 있음. 「세 점이 한 직선 위」(0718)도 방향벡터 평행 한 줄이라 「두 점을 지나는 직선」에 흡수 가능. (3) 「직선에 수직인 평면」(0735 · 0736)·「평면의 평행 조건」(0737)·「구의 접평면」(0738)은 모두 법선벡터를 어디서 읽느냐(직선의 방향벡터 · 평행 평면의 법선 · 반지름 벡터)만 다르고 산식이 같으므로 「법선벡터가 주어진 평면」 한 유형의 법선 출처 분기.
- base ★ 후보: 유형 01~08 의 기본형은 ★2(M_total 4 인 대표·중하 문항은 ★1)이고, 상중 3문 중 0730·0734 만 ★3 골조. ★4 이상은 이 범위에 없으며 ★4 변형은 variation_notes.creative 에 적은 CON 추가(0730) · 접점 자취(0738) · 좌표까지 묻는 정삼각형(0734)에서 출발.
