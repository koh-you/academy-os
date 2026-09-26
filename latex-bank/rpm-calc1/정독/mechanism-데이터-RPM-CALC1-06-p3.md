---
name: mechanism-데이터-RPM-CALC1-06-p3
description: RPM 미적분Ⅰ 06 도함수의 활용 (3)(3/3 · 유형 14 시각에 대한 넓이의 변화율 ~ 실력 Up) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 미적분Ⅰ (22개정) · 전사본 latex-bank/rpm-calc1
  section: 06 도함수의 활용 (3)
  unit_code: CALC1-06
  part: "3/3"
  extract_range: "88~93쪽 · 0571~0605"
  total_problems: 35
  unit_total: 93
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-calc1/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-calc1/items/<id>.tex
  image_source: latex-bank/rpm-calc1/figures/ (crops.json)
---

# RPM 미적분Ⅰ · 06 도함수의 활용 (3) (3/3) 정독 데이터 (v1.0)

이 파일은 RPM 미적분Ⅰ 06 도함수의 활용 (3) 단원(93문) 가운데 88~93쪽의 35문항(0571~0605)을 다룬다. 구역은 유형 14 시각에 대한 넓이의 변화율(3문) · 유형 15 시각에 대한 부피의 변화율(3문) · 유형 UP 16 위치의 그래프의 해석(2문) · 시험에 꼭 나오는 문제(20문) · 서술형 주관식(4문) · 실력 Up(3문) 순이다. 유형 구역의 첫 문항은 「대표문제」 태그(난이도 표시 없음 → ★2 출발), 나머지는 중·상중 표시(★2 · ★3 출발)를 가진다. 유형 UP 은 ★3, 시험에 꼭 나오는 문제는 난이도 표시가 없어 ★2 출발(d2 통찰 또는 통찰 2개 · M_total 8 이상이면 ★3), 서술형 주관식은 ★3, 실력 Up 은 ★4 출발로 두었다. 시험에 꼭 나오는 문제 20문은 이 단원 전체(방정식·부등식에의 활용 · 속도와 가속도 · 시각에 대한 변화율)를 되돌아보는 종합 구역이라 앞 범위(06-p1 · 06-p2)의 유형이 섞여 나온다. 그림 문항은 0575 · 0577 · 0578 · 0580 · 0581 · 0582 · 0594 · 0596 · 0598 아홉 문이며 모두 크롭 이미지로 확인했다.

주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 사슬) · `insights[]`(유형 코드 · depth · effective_depth · 근거) · `variation_notes`(numeric/creative)를 채웠다. `depth_score` 는 insights 의 effective_depth 평균(없으면 0.00)이고, `insight_type` 은 통찰이 없거나 d1 한 개뿐이면 절차형, d2 이상 또는 2개 이상이면 통찰형으로 적었다. Mₜ 는 함정 카테고리 0~1개면 1, 2~3개면 2 로 매겨 M_total 은 4 이상이다. 출발점 조정은 「통찰 0 · M_total 4」인 문항만 −1 하고, 서술형 주관식·실력 Up 처럼 구역 출발점이 실제 골조보다 높은 문항은 라벨을 억지로 맞추지 않고 실제 판정 ★ 를 적은 뒤 [분류 이슈] 로 남겼다. 상수분리·차함수 최솟값·닮음비 같은 이 단원의 표준 변환은 d1 통찰로만 적어 절차형에 두었고, 도함수·속도 그래프를 원함수·운동으로 읽는 표현 전환(RT)과 근의 배치·절댓값 방정식을 극값 부호로 옮기는 동치 변환(EQV)만 d2 로 매겼다.

## 문항 데이터

### 유형 14 시각에 대한 넓이의 변화율

```yaml
- id: RPM-CALC1-0571
  page: 88
  vendor_label: "유형 14 시각에 대한 넓이의 변화율"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    파문의 반지름이 매초 5 cm 씩 길어질 때, 2초 후 가장 바깥 파문의 넓이의 변화율 aπ 의 상수 a. 5지선다.
  category: "반지름 r=5t → 넓이 S(t) → 미분 → 시각 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "시각에 대한 넓이의 변화율(길이가 일차로 변하는 평면도형)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    $r=5t$ 이므로 $S=25\pi t^2$, $S'=50\pi t$, $t=2$ 에서 $100\pi$ → $a=100$ → ⑤. 넓이 식을 세우고 미분·대입하는 세 단계뿐. 대표문제이지만 통찰 없음·M_total 4 → 출발점 ★2 에서 −1 → ★1.
  tier: star_1
  mechanism_primary: "r=5t → S=πr²=25πt² → S'=50πt → t=2 대입 → 100π"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0571.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "반지름 속도(3·4·6 cm/s)와 시각(1~5초)을 바꿀 수 있음. 제약: 답이 π 의 정수배가 되도록 2×속도²×시각 이 정수이고 선택지 5개의 간격을 유지."
    creative: "(1) 초기 반지름 r₀>0 을 주어 r=r₀+5t 로(★1 유지) (2) 넓이의 변화율이 주어진 값이 되는 시각을 묻기(역산 ★2) (3) 둘레의 변화율과 넓이의 변화율의 비를 묻기(★2)."
```

```yaml
- id: RPM-CALC1-0572
  page: 88
  vendor_label: "유형 14 시각에 대한 넓이의 변화율"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    한 변이 4 인 정육각형의 각 변이 매초 2 씩 길어질 때, 넓이가 54√3 이 되는 순간의 넓이의 변화율.
  category: "변 x=4+2t → 정육각형 넓이 S(t) → 넓이 조건에서 시각 역산 → 미분·대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "시각에 대한 넓이의 변화율(길이가 일차로 변하는 평면도형)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    변 $x=4+2t$, 정육각형 넓이 $S=\dfrac{3\sqrt3}{2}x^2$. $S=54\sqrt3$ 에서 $x^2=36$, $x=6$ → $t=1$. $S'=3\sqrt3\,x\cdot 2=6\sqrt3\,x$, $x=6$ 대입 → $36\sqrt3$.
    정육각형 넓이 공식(정삼각형 6개)을 알아야 하고 넓이 값에서 시각을 역산하는 단계가 붙어 M_total 6. 통찰은 없고 표준 절차라 「중」 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "x=4+2t → S=(3√3/2)x² → S=54√3 ⇒ x=6, t=1 → S'=6√3·x → 36√3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$36\sqrt{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0572.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초기 변(2·3·5)·속도(1·3)·목표 넓이를 바꿀 수 있음. 제약: 목표 넓이가 (3√3/2)x² 꼴로 x 가 정수·양수가 되고 그때 t>0 이어야 함. 정삼각형(√3/4 x²)·정사각형(x²)으로 바꾸면 공식 부담(Mₖ)이 1 로 내려감."
    creative: "(1) 넓이 대신 「둘레가 36 이 되는 순간」으로 시각 조건을 바꾸기(★2 유지) (2) 변화율이 주어진 값이 되는 시각을 묻기(역산 ★2) (3) 넓이의 변화율이 둘레의 변화율의 k 배가 되는 순간 찾기(두 변화율 비교 ★3)."
```

```yaml
- id: RPM-CALC1-0573
  page: 88
  vendor_label: "유형 14 시각에 대한 넓이의 변화율"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    점 P 는 원점에서 x축 양의 방향으로 매초 3, 점 Q 는 P 보다 2초 늦게 원점에서 y축 양의 방향으로 매초 4 의 속력으로 움직일 때, P 출발 5초 후 삼각형 OPQ 의 넓이의 변화율.
  category: "두 동점 좌표(출발 시차 반영) → 삼각형 넓이 S(t) → 미분 → 대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "Q 의 출발 지연 2초를 OQ=4(t−2) 로 옮겨 넓이를 t 하나의 함수로 통합"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "시각에 대한 넓이의 변화율(두 동점이 만드는 삼각형)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $\overline{OP}=3t$, $\overline{OQ}=4(t-2)$ ($t\ge2$) → $S=\dfrac12\cdot3t\cdot4(t-2)=6t^2-12t$, $S'=12t-12$, $t=5$ → $48$.
    출발 시차를 $4(t-2)$ 로 옮기는 동치 변환(EQV d1)이 유일한 고비이고 나머지는 곱·미분. 「중」 출발점 ★2 유지, 절차형.
  tier: star_2
  mechanism_primary: "OP=3t, OQ=4(t−2) → S=6t(t−2) → S'=12t−12 → t=5 → 48"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$48$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0573.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 속력(2·5 등)·출발 시차(1·3초)·묻는 시각을 바꿀 수 있음. 제약: 묻는 시각이 시차보다 커야(Q 가 이미 출발) 하고 S'=12t−12 꼴 계수가 정수가 되게 속력 곱이 짝수."
    creative: "(1) Q 가 y축 음의 방향으로 움직이게 해도 넓이는 같음(★2 유지) (2) P 가 원점에서 출발하지 않고 (a,0) 에서 출발하면 S 가 이차식(★2) (3) 넓이가 특정 값이 되는 순간의 변화율(넓이 조건에서 t 역산 → 이차방정식 ★3)."
```

### 유형 15 시각에 대한 부피의 변화율

```yaml
- id: RPM-CALC1-0574
  page: 89
  vendor_label: "유형 15 시각에 대한 부피의 변화율"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    반지름 4 cm 인 구 모양 풍선의 반지름이 매초 1 cm 씩 늘 때, 6초 후 부피의 변화율.
  category: "반지름 r=4+t → 구 부피 V(t) → 미분 → 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "시각에 대한 부피의 변화율(길이가 일차로 변하는 입체)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    $r=4+t$, $V=\dfrac43\pi r^3$, $V'=4\pi r^2\cdot1$, $t=6$ 에서 $r=10$ → $400\pi$. 공식·미분·대입 세 단계. 대표문제이나 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "r=4+t → V=(4/3)πr³ → V'=4πr²·r' → r=10 → 400π"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$400\pi\,\mathrm{cm}^3/\mathrm{s}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0574.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초기 반지름(2·3·5)·증가 속도(0.5·2)·시각을 바꿀 수 있음. 제약: 대입 시각의 반지름이 정수가 되게 하고 단위(cm³/s)를 답에 유지."
    creative: "(1) 정육면체·원기둥(높이 고정)으로 도형 바꾸기(★1 유지) (2) 부피의 변화율이 주어진 값이 되는 시각을 묻기(★2) (3) 겉넓이의 변화율과 부피의 변화율의 비(★2)."
```

```yaml
- id: RPM-CALC1-0575
  page: 89
  vendor_label: "유형 15 시각에 대한 부피의 변화율"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    밑면 반지름 6, 높이 18 인 원뿔 그릇에 수면 높이가 매초 1 씩 오르도록 물을 넣을 때, 높이 5 가 되는 순간 물의 부피의 변화율. 그림(원뿔 단면 치수).
  category: "닮음비로 수면 반지름을 높이로 표현 → V(h) → 미분 → h=5 대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "그릇의 닮음비 6:18 로 수면 반지름을 h/3 으로 바꿔 부피를 h 하나의 함수로 만드는 기하→대수 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "시각에 대한 부피의 변화율(원뿔 그릇의 수면 · 닮음비)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    수면 반지름 $r=\dfrac h3$ → $V=\dfrac13\pi\left(\dfrac h3\right)^2h=\dfrac{\pi}{27}h^3$. $h=t$ 이므로 $V'=\dfrac{\pi}{9}h^2\cdot h'=\dfrac{\pi}{9}\cdot25$ → $\dfrac{25}{9}\pi$.
    닮음비 전환(RT d1) 뒤는 미분·대입. 「중」 출발점 ★2 유지, 절차형.
  tier: star_2
  mechanism_primary: "r:h=6:18 ⇒ r=h/3 → V=πh³/27 → V'=(π/9)h²·h' → h=5, h'=1 → 25π/9"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{25}{9}\pi$'
  answer_source: "답지"
  figure: "crop:fig-0575.png"
  latex: latex-bank/rpm-calc1/items/0575.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "그릇 치수(반지름:높이 = 1:2, 1:4)·수면 상승 속도·묻는 높이를 바꿀 수 있음. 제약: 닮음비가 간단한 정수비, 묻는 높이 < 그릇 높이, 그림 치수 라벨(6, 18)은 발문과 일치시켜 유지."
    creative: "(1) 원뿔을 거꾸로 세운(꼭짓점 위) 그릇으로 두면 수면 반지름이 (R−h/k) 꼴 → 전개 부담 ★3 (2) 부피의 변화율이 일정(매초 c)일 때 수면 높이의 변화율을 묻기(역방향 · 음함수적 관계 ★3) (3) 수면의 넓이 변화율을 묻기(★2)."
```

```yaml
- id: RPM-CALC1-0576
  page: 89
  vendor_label: "유형 15 시각에 대한 부피의 변화율"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    정육면체 측정기의 모서리가 낮 12시부터 매시간 5 mm 씩 늘어 오후 9시에 50 mm 가 될 때, 부피의 변화율이 13500 mm³/h 가 되는 시각. 5지선다(오후 4시~8시).
  category: "종점 조건에서 초기 길이 역산 → x(t)=5+5t → V'=15x² 조건 → x, t → 시각 환산"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「오후 9시에 50 mm」 결과 조건에서 12시의 초기 길이 5 mm 를 역추적해 x(t) 를 세움"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "시각에 대한 부피의 변화율(길이가 일차로 변하는 입체)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    12시부터 $t$ 시간 뒤 모서리 $x=x_0+5t$, $t=9$ 에서 $50$ → $x_0=5$. $V=x^3$, $V'=3x^2\cdot5=15x^2=13500$ → $x^2=900$, $x=30$ → $5+5t=30$, $t=5$ → 오후 5시 → ②.
    초기 길이가 0 이 아니라 종점에서 역산해야 하는 점(BW d1)과 변화율 조건에서 시각을 다시 역산·시각으로 환산하는 함정 두 개(Mₜ 2). 「상중」 출발점 ★3 유지하되 골조는 표준 절차라 절차형.
  tier: star_3
  mechanism_primary: "x(9)=50 ⇒ x₀=5 → x=5+5t → V'=15x²=13500 → x=30 → t=5 → 오후 5시"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0576.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "증가 속도(4·10 mm/h)·종점 시각과 길이·목표 변화율을 바꿀 수 있음. 제약: 초기 길이 x₀>0, 목표 변화율 = 3·속도·x² 에서 x 가 정수이고 그때의 t 가 종점 이전의 정시(선택지 범위 안)."
    creative: "(1) 초기 길이를 직접 주면 BW 가 사라져 ★2 (2) 「부피가 27000 이 되는 시각」과 「그때의 변화율」을 함께 묻기(★2) (3) 두 측정기(정육면체·구)의 부피 변화율이 같아지는 시각(두 식 비교 ★3~4)."
```

### 유형 UP 16 위치의 그래프의 해석

```yaml
- id: RPM-CALC1-0577
  page: 89
  vendor_label: "유형 UP 16 위치의 그래프의 해석"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형 UP"
  summary: |
    수직선 위 점 P 의 위치 x(t) 의 그래프(원점 출발, t=a 극대 · b 영점 · c 극소 · d 영점 · e 극대 · f 에서 t축에 접한 극소)가 주어질 때 보기 ㄱ~ㄹ(속력 최대 시각 · 운동 방향 변화 횟수 · t=c 의 속도 · 원점에서 가장 먼 시각) 중 옳은 것. 그림.
  category: "위치 그래프의 기울기 → 속도·속력·방향 → 보기 판단"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "위치 그래프의 접선 기울기를 속도로 읽어 극값점 = 속도 0 = 방향 전환, 속력 = |기울기| 로 옮김(ㄱ·ㄴ·ㄷ)"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「원점에서 가장 멀리」를 |x(t)| 의 최댓값으로 옮겨 t=e 의 극댓값이 t=a 의 극댓값보다 작음을 비교(ㄹ)"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "위치 그래프의 해석(기울기 = 속도 · 극값 = 방향 전환)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ㄱ: $t=a$ 는 극대점이라 속도 0, 속력은 최소 → 거짓. ㄴ: $0<t<f$ 에서 극값점 $a,c,e$ 세 곳에서 부호 변화 → 3번 → 참. ㄷ: $t=c$ 극소 → 속도 0 → 참. ㄹ: 그래프에서 $x(a)>x(e)$ 이므로 가장 먼 시각은 $t=e$ 가 아님 → 거짓. 답 ㄴ, ㄷ.
    위치 그래프를 속도 정보로 읽는 표현 전환(RT d2)이 골조이고, 「속력 최대」를 높이로 오독·「원점에서 가장 멀리」를 최댓값으로 오독하는 함정(Mₜ 2). 통찰 2개로 +1 후보이나 네 보기가 모두 같은 그래프 읽기 한 골조라 유형 UP 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "x(t) 그래프 → 기울기=속도(극값점: v=0, 방향 전환) · 속력=|기울기| · 원점 거리=|x| → ㄴ, ㄷ"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "ㄴ, ㄷ"
  answer_source: "답지"
  figure: "crop:fig-0577.png"
  latex: latex-bank/rpm-calc1/items/0577.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "보기의 시각 문자(a~f)와 구간 끝을 바꾸거나 보기 4개 중 2개를 교체할 수 있음. 제약: 그림 라벨(a~f)·극값 위치·f 에서 t축에 접하는 모양은 고정, 정답 보기 수를 2개로 유지."
    creative: "(1) 「t=f 에서 운동 방향이 바뀌는가」 보기를 넣어 접점 극소(부호 변화 있음)를 묻기(★3 유지) (2) 그래프를 속도 v(t) 로 바꾸고 같은 보기 구성(부호 = 방향, 넓이 언급 없이 ★3) (3) 위치·속도 그래프를 나란히 주고 대응을 묻기(RT 2회 ★4)."
```

```yaml
- id: RPM-CALC1-0578
  page: 89
  vendor_label: "유형 UP 16 위치의 그래프의 해석"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    두 점 P, Q 의 위치 그래프(P: t=a 극대 후 감소해 음이 됐다가 t=c 에서 0 을 지나 증가 · Q: t=b 극대 후 감소해 t=c 에서 0 · 두 곡선은 t=b 에서 교차)가 주어질 때 보기(t=a 속도 비교 · t=b 에서 만남 · t=c 에서 반대 방향) 중 옳은 것. 5지선다. 그림.
  category: "두 위치 그래프의 기울기·교점 → 속도 비교·만남·방향 → 보기 판단"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "속도 비교는 높이가 아니라 기울기 비교, 「만난다」는 교점(위치 같음), 방향은 기울기 부호로 옮기는 그래프 해석"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "위치 그래프의 해석(기울기 = 속도 · 극값 = 방향 전환)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ㄱ: $t=a$ 에서 P 는 극대라 속도 0, Q 는 아직 증가 중이라 속도 양수 → P 의 속도가 더 작다 → 거짓. ㄴ: $t=b$ 에서 두 그래프가 교차 → 위치 같음 → 만난다 → 참. ㄷ: $t=c$ 에서 P 는 증가(기울기 양), Q 는 감소(기울기 음) → 반대 방향 → 참. 답 ④ ㄴ, ㄷ.
    ㄱ에서 「P 가 더 높다」를 속도가 크다로 오독하는 함정과 ㄴ의 교점 해석이 핵심(RT d2). 「상중」 출발점 ★3 유지, 통찰형.
  tier: star_3
  mechanism_primary: "x_P, x_Q 그래프 → 속도=기울기(t=a: v_P=0<v_Q) · 만남=교점(t=b) · 방향=기울기 부호(t=c 반대) → ④"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지"
  figure: "crop:fig-0578.png"
  latex: latex-bank/rpm-calc1/items/0578.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "보기 문장의 시각(a·b·c)을 서로 바꾸거나 「두 점 사이 거리가 최대인 시각」 같은 보기를 추가할 수 있음. 제약: 그림 라벨 a<b<c·교점 위치·두 곡선의 극대 순서 고정, 정답이 선택지 중 하나가 되게 보기 조합 유지."
    creative: "(1) 「t=c 에서 두 점 사이의 거리가 0」·「0<t<c 에서 두 점이 두 번 만난다」 등 교점 개수 보기로 바꾸기(★3 유지) (2) 그래프를 두 점의 속도 그래프로 바꾸면 「만남」을 그래프로 판단할 수 없어 보기 설계가 달라짐(★3~4) (3) 두 점의 중점 M 의 속도 부호를 묻기(합의 기울기 ★4)."
```

### 시험에 꼭 나오는 문제

```yaml
- id: RPM-CALC1-0579
  page: 90
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    사차방정식 x⁴−4x³−2x²+12x−a=0 이 서로 다른 네 실근을 갖는 실수 a 의 범위.
  category: "상수분리 → 사차함수 극값 3개 → 극솟값 < a < 극댓값"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "방정식의 실근 개수를 y=f(x) 와 y=a 의 교점 개수로 옮기는 상수분리"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "방정식의 실근 개수(상수분리 → 극값 사이)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $f(x)=x^4-4x^3-2x^2+12x$ 로 두면 $f'(x)=4(x-3)(x-1)(x+1)$, $f(-1)=-9$, $f(1)=7$, $f(3)=-9$. 두 극솟값이 모두 $-9$ 이므로 네 실근 ⇔ $-9<a<7$.
    상수분리(RT d1) 뒤 극값 세 개 계산이 계산 부담(Mₖ 2). 두 극솟값이 같아 「큰 쪽 극솟값」 비교가 사라진 형태. 통찰 d1 하나·M_total 7 → ★2, 절차형.
  tier: star_2
  mechanism_primary: "f(x)=x⁴−4x³−2x²+12x 로 분리 → f'=4(x+1)(x−1)(x−3) → 극값 −9, 7, −9 → −9<a<7"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$-9<a<7$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0579.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수를 바꿔 극점이 정수(−1, 1, 3 처럼)인 사차식을 유지. 제약: f' 가 세 정수근으로 인수분해되고 두 극솟값이 다르면 「큰 극솟값 < a < 극댓값」으로 답 구조가 바뀜(그 경우 함정 하나 추가)."
    creative: "(1) 「서로 다른 두 실근」 조건으로 바꾸면 a<−9 또는 a>7 의 두 갈래(I-MI d1 ★2~3) (2) 「실근이 세 개」이면 a 가 극값과 같아지는 경우(★3) (3) 극솟값을 다르게 설계해 큰 극솟값을 골라야 하는 형태(Mₜ ↑ ★3)."
```

```yaml
- id: RPM-CALC1-0580
  page: 90
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    도함수 f'(x) 의 그래프(x=0, a 에서 t축에 접하며 부호 불변, x=b 에서 양→음, x=c 에서 음→양)가 주어질 때 방정식 f(x)=k 의 서로 다른 실근의 최대 개수. 5지선다.
  category: "f' 부호 변화 → f 의 증감·극값 개수 → 수평선과의 교점 최대"
  M: {s: 2, k: 1, a: 3, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "도함수 그래프를 원함수의 증감표로 옮기되 접하는 영점(0, a)은 부호가 바뀌지 않아 극값이 아님을 읽어 극대 1·극소 1 로 확정"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "도함수 그래프에서 원함수 개형 → 방정식 실근 개수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $f'$ 는 $x<b$ 에서 $\ge0$($0,a$ 에서 접할 뿐), $b<x<c$ 에서 음, $x>c$ 에서 양 → $f$ 는 $b$ 에서 극대, $c$ 에서 극소 하나씩. 따라서 $f(x)=k$ 의 실근은 $f(c)<k<f(b)$ 일 때 최대 3개 → ③.
    영점 네 개를 모두 극값으로 세면 5개(⑤)로 가는 함정이 이 문항의 전부이며, 접하는 영점을 부호 불변으로 읽는 RT d2. M_total 8·d2 → 시험 구역 출발점 ★2 에서 ★3, 통찰형.
  tier: star_3
  mechanism_primary: "f' 그래프 → 부호 변화는 b(+→−), c(−→+) 뿐 → 극대·극소 각 1 → f(x)=k 교점 최대 3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: "crop:fig-0580.png"
  latex: latex-bank/rpm-calc1/items/0580.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접하는 영점의 개수·위치(0, a)와 부호 변화 영점의 개수를 바꿔 극값 개수를 조절할 수 있음. 제약: 그림을 새로 그려야 하며 접점(부호 불변)과 교차점(부호 변화)을 시각적으로 구분되게 유지, 선택지는 1~5."
    creative: "(1) 「f(x)=k 가 서로 다른 세 실근을 갖는 k 의 범위를 f(b), f(c) 로 나타내기」(★3 유지) (2) 그래프 대신 f'(x)=x²(x−a)²(x−b)(x−c) 처럼 식으로 주고 짝수 차수 인수를 부호 불변으로 읽게 하기(★3~4) (3) 「f(x)=k 의 실근 개수가 홀수인 k 의 값」(극값에서 접하는 경우 ★4)."
```

```yaml
- id: RPM-CALC1-0581
  page: 90
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    사차함수 f 의 도함수 그래프(x=a 에서 t축에 접하며 양수 유지, x=b 극대, x=c 에서 양→음)가 주어질 때 보기(f(a)=0 이면 두 실근 · f(a)f(c)<0 이면 두 실근 · f(a)f(c)>0 이면 실근 없음) 중 항상 옳은 것. 그림.
  category: "f' 부호 → f 는 c 까지 증가·이후 감소(최댓값 f(c)) → 각 보기의 조건을 f(c) 부호로 환원"
  M: {s: 2, k: 1, a: 3, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "도함수 그래프에서 x=a 는 극값이 아니고 x=c 가 유일한 극대(최댓값)임을 읽어 f 의 개형을 「c 까지 증가, 이후 감소」로 고정"
    - step: 2
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "ㄷ의 f(a)f(c)>0 을 「둘 다 양」「둘 다 음」 두 경우로 나눠 둘 다 양이면 실근 2개라는 반례를 찾음"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "도함수 그래프에서 원함수 개형 → 방정식 실근 개수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $f'\ge0$ ($x<c$, $a$ 에서만 0), $f'<0$ ($x>c$) → $f$ 는 $c$ 에서 최댓값, $a<c$ 이므로 $f(a)<f(c)$. ㄱ: $f(a)=0$ 이면 $f(c)>0$ → 증가 구간·감소 구간에서 한 번씩 → 두 실근 → 참. ㄴ: $f(a)f(c)<0$ 이면 $f(a)<0<f(c)$ → 두 실근 → 참. ㄷ: 둘 다 양이면 $f(c)>0$ 이라 두 실근 → 거짓. 답 ㄱ, ㄴ.
    그래프 읽기(RT d2)에 ㄷ의 반례 분기(MI d1)가 붙어 통찰 2개·M_total 8 → 시험 구역 ★2 에서 ★3, 통찰형.
  tier: star_3
  mechanism_primary: "f' 그래프 → f 는 c 에서 유일 최대 · a 는 변곡 → f(c) 부호로 실근 수 결정 → ㄱ 참·ㄴ 참·ㄷ 반례(둘 다 양) → ㄱ, ㄴ"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "ㄱ, ㄴ"
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0581.png"
  latex: latex-bank/rpm-calc1/items/0581.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "보기의 조건(f(a)=0 · f(b)=0 · f(c)<0 등)을 바꿔 참·거짓 조합을 조절할 수 있음. 제약: 그림 라벨 a<b<c 와 「a 에서 접함, c 에서 교차」 개형 고정, 「항상 옳은 것」이므로 각 보기가 모든 사차함수에 대해 판단되게 설계."
    creative: "(1) f' 그래프를 x=a 에서 교차하도록 바꾸면 극값이 둘이 되어 보기 판단이 f(a), f(c) 두 극값으로 갈라짐(★3~4) (2) 「방정식 f(x)=f(a) 의 서로 다른 실근의 개수」를 묻기(접점 포함 세기 ★3) (3) f(b) 조건을 넣어 변곡점 성질을 묻는 보기는 교육과정 밖이므로 피하고, 대신 「f(a)<f(b)<f(c)」 크기 비교 보기(★3)."
```

```yaml
- id: RPM-CALC1-0582
  page: 90
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    사차함수 f 의 도함수 그래프(x=−1 에서 음→양, x=3 에서 양→음, x=5 에서 음→양)와 f(−1)=−2, f(5)=1, f(0)<−1 이 주어질 때 방정식 f(x)+x+1=0 의 근에 대한 옳은 설명(음근·양근의 개수). 5지선다. 그림.
  category: "f' 부호 → f 증감 → 곡선 f 와 직선 y=−x−1 의 교점을 구간별 단조성·주어진 세 값으로 세기"
  M: {s: 3, k: 1, a: 3, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f(x)+x+1=0 을 곡선 y=f(x) 와 직선 y=−x−1 의 교점(또는 h=f+x+1 의 부호 변화)으로 옮김"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "증감(−1 극소·3 극대·5 극소)과 f(−1)=−2<0, f(0)<−1, f(5)=1 을 구간별로 결합해 (−∞,−1)·(0,3) 에서 한 번씩만 만나고 x≥3 에서는 f≥1>−x−1 임을 확정"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "도함수 그래프에서 원함수 개형 → 방정식 실근 개수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $h(x)=f(x)+x+1$ 로 두면 $h(-1)=-2<0$, $h(0)=f(0)+1<0$, $h(5)=7>0$, $x\to-\infty$ 에서 $h\to+\infty$. $(-1,3)$ 에서 $f'>0$ 이라 $h$ 증가 → 근 하나(양수, $0$ 과 $3$ 사이). $x\ge3$ 에서 $f$ 는 $5$ 에서 최소 $1$ 이고 직선은 $-4$ 이하라 만나지 않음. $x<-1$ 에서 $h$ 는 $+\infty$ 에서 $-2$ 로 → 음근 하나. 따라서 음근 1·양근 1 → ③.
    직선과의 교점으로 옮기는 전환(RT d2)에 세 값·증감을 구간별로 결합하는 조건 통합(CON d2)이 붙어 M_total 9. 통찰 2개로 +1 후보(★4)이나 구간별 단조성 대조로 정리되어 ★3 으로 둠. [분류 이슈] 시험 구역 출발점 ★2~3 에 대해 후보 ★3/★4 — 카탈로그에서 「도함수 그래프 + 함숫값 조건」 유형을 별도로 세울지 결정 필요.
  tier: star_3
  mechanism_primary: "f' 그래프 → 증감(−1↓↑3↑↓5↓↑) → h=f+x+1 부호: h(−∞)>0, h(−1)=−2, h(0)<0, h(5)=7 → (−1,3) 증가·x≥3 은 f≥1 → 음근 1·양근 1 → ③"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "③"
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0582.png"
  latex: latex-bank/rpm-calc1/items/0582.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선(y=−x−1)의 기울기·절편과 세 함숫값을 함께 바꿀 수 있음. 제약: f(−1) < 직선값(−1 에서), f(5) > 직선값(5 에서), f(0) < 직선값(0 에서)의 부호 관계를 유지해야 답 구조(음근 1·양근 1)가 보존되고, 그림의 영점 라벨(−1, 3, 5)은 고정."
    creative: "(1) f(0)<−1 조건을 빼면 (−1,3) 의 근 부호가 미정이 되어 문제가 성립하지 않음 — 조건 하나의 역할을 묻는 변형(★3) (2) 직선 대신 y=k 수평선(f(x)=k)으로 바꾸면 표준 상수분리(★2~3) (3) 「f(x)+x+1=0 의 근 중 정수인 것의 개수」로 바꾸면 구간 폭까지 따져야 함(I-VF 추가 ★4)."
```

```yaml
- id: RPM-CALC1-0583
  page: 90
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    삼차방정식 2x³+3x²−12x+a=0 의 세 실근이 α<0<β<γ 를 만족시키는 모든 정수 a 의 합. 5지선다.
  category: "극값 부호(극대>0, 극소<0)와 f(0)>0 을 결합 → a 의 범위 → 정수 합"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「α<0<β<γ」 근의 부호 배치를 세 실근 조건(극댓값>0·극솟값<0)에 f(0)>0 을 더한 동치 조건으로 옮김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "삼차방정식 근의 부호 배치 조건(극값 부호 + f(0) 부호)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $f(x)=2x^3+3x^2-12x+a$, $f'=6(x+2)(x-1)$, $f(-2)=20+a$, $f(1)=a-7$. 세 실근: $a>-20$, $a<7$. 음근 하나·양근 둘이려면 감소 구간 $(-2,1)$ 의 근이 양수여야 하므로 $f(0)=a>0$. 따라서 $0<a<7$ → 정수 $1\sim6$ 의 합 $21$ → ④.
    $f(0)>0$ 을 빼먹으면 $-20<a<7$ 로 가는 함정(Mₜ 2)이 핵심이며 근의 배치를 극값·$f(0)$ 부호로 옮기는 EQV d2. 「중요」 태그·d2 → 시험 구역 ★2 에서 ★3, 통찰형.
  tier: star_3
  mechanism_primary: "f'=6(x+2)(x−1) → 극댓값 20+a>0, 극솟값 a−7<0 → 근 배치 ⇒ f(0)=a>0 → 0<a<7 → 1+…+6=21"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0583.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼차식의 계수를 바꿔 극점이 정수(−2, 1)이고 극댓값·극솟값이 a 의 일차식이 되게 유지. 제약: f(0)>0 이 실제로 극솟값 조건보다 강한 제약이 되도록(a 의 하한을 f(0) 이 결정) 설계해야 함정이 살아 있고 정수 합이 선택지 안."
    creative: "(1) 「α<β<0<γ」 배치로 바꾸면 f(0)<0 조건(★3 유지) (2) 「양의 실근이 하나뿐」으로 바꾸면 세 실근·한 실근 경우를 모두 따져야 함(I-MI d2 ★4) (3) 정수 a 의 「개수」 대신 「최댓값과 최솟값의 곱」 등으로 계산 마무리만 바꾸기(★3)."
```

```yaml
- id: RPM-CALC1-0584
  page: 90
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    방정식 2x³−3ax²+a=0 이 중근과 다른 한 실근을 갖도록 하는 양수 a. 5지선다.
  category: "극점 x=0, a → 중근 ⇔ 극값 하나가 0 → f(0)f(a)=0 → a"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「중근과 다른 한 실근」을 「극댓값 또는 극솟값이 0」으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼차방정식이 중근을 가질 조건(극값 = 0)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $f'=6x(x-a)$, $f(0)=a$, $f(a)=a-a^3=a(1-a^2)$. 중근 ⇔ $f(0)f(a)=0$ → $a=0$ 또는 $a=\pm1$, 양수이므로 $a=1$ → ①.
    조건을 극값 0 으로 옮기는 표준 동치(EQV d1)와 인수분해 한 줄. 시험 구역 출발점 ★2 유지, 절차형.
  tier: star_2
  mechanism_primary: "f'=6x(x−a) → f(0)=a, f(a)=a−a³ → 중근 ⇔ f(0)f(a)=0 → a>0 ⇒ a=1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0584.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수항을 a 의 다른 일차·이차식(2a, a²)으로 바꾸거나 최고차 계수를 바꿀 수 있음. 제약: 극점이 0 과 a 처럼 매개변수로 깔끔히 나오고 f(0)f(a)=0 의 양수해가 하나뿐이어야 5지선다가 성립."
    creative: "(1) 「서로 다른 세 실근」 조건으로 바꾸면 f(0)f(a)<0 부등식(★2) (2) 「중근이 양수」로 제한하면 어느 극값이 0 인지 판별 후 검증(I-VF d1 ★3) (3) a 의 부호 조건을 없애면 a<0 일 때 극점 순서가 바뀌는 분기(I-MI d1 ★3)."
```

```yaml
- id: RPM-CALC1-0585
  page: 91
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["평가원 기출"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    두 곡선 y=2x²−1, y=x³−x²+k 가 만나는 점의 개수가 2 가 되도록 하는 양수 k. 5지선다.
  category: "차함수 h(x)=x³−3x²+k+1 → 교점 2개 ⇔ 극값 하나가 0 → k"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "교점 2개를 차함수 방정식의 「중근 + 다른 한 실근」, 즉 극값 하나가 0 인 조건으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 곡선(곡선·직선)의 교점 개수 조건(차함수 극값)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $h(x)=x^3-3x^2+k+1$, $h'=3x(x-2)$, $h(0)=k+1$, $h(2)=k-3$. 교점 2개 ⇔ $(k+1)(k-3)=0$ → 양수 $k=3$ → ③.
    두 곡선 교점 → 차함수는 표준 절차, 개수 2 → 극값 0 이 EQV d1. 평가원 기출이지만 기본형이라 +0, ★2 절차형.
  tier: star_2
  mechanism_primary: "차 h=x³−3x²+k+1 → h'=3x(x−2) → h(0)h(2)=(k+1)(k−3)=0 → k>0 ⇒ 3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0585.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차곡선의 계수·삼차곡선의 상수항 위치를 바꿀 수 있음. 제약: 차함수의 극점이 정수(0, 2)이고 (k+1)(k−3)=0 처럼 양수해가 하나가 되게 설계, 선택지 1~5 안."
    creative: "(1) 「만나는 점이 3개인 k 의 범위」로 바꾸면 부등식(★2) (2) k 의 부호 조건을 빼면 답이 두 개 → 「모든 k 의 합」(★2) (3) 두 곡선이 「접한다」로 바꾸면 접점 조건 h=0, h'=0 연립(★3)."
```

```yaml
- id: RPM-CALC1-0586
  page: 91
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    모든 실수 x 에서 x⁴−8x+a ≥ 4x³−6x² 이 성립하도록 하는 실수 a 의 최솟값. 5지선다.
  category: "이항 → 사차함수 f 의 최솟값 ≥ 0 → f' 인수분해(실근 하나) → a"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「모든 실수에서 부등식」을 「이항한 사차함수의 최솟값 ≥ 0」으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "모든 실수에서 성립하는 부등식(차함수 최솟값 ≥ 0)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $f(x)=x^4-4x^3+6x^2-8x+a$, $f'=4(x-2)(x^2-x+1)$ 이고 이차 인수는 실근이 없어 $x=2$ 가 유일한 극소·최소. $f(2)=a-8\ge0$ → $a\ge8$ → 최솟값 $8$ → ⑤.
    삼차 도함수의 인수정리 인수분해와 이차 인수 판별식 확인이 계산 부담(Mₖ 2). 통찰은 표준 전환 d1 → ★2 절차형.
  tier: star_2
  mechanism_primary: "이항 f=x⁴−4x³+6x²−8x+a → f'=4(x−2)(x²−x+1) → 최소 f(2)=a−8≥0 → a≥8"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0586.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수를 바꿔 f' 가 (x−p)(실근 없는 이차) 로 인수분해되게 유지. 제약: 이차 인수의 판별식이 음수여야 극점이 하나이고, f(p) 가 a 의 일차식이라 최솟값이 정수."
    creative: "(1) 이차 인수가 실근을 갖도록 바꾸면 극솟값 두 개 중 작은 것을 골라야 함(Mₜ ↑ ★3) (2) 「x≥0 에서만 성립」으로 구간을 제한하면 경계값 f(0) 과 비교(★2~3) (3) 부등식 양변을 두 함수 f, g 로 주고 「f 의 그래프가 g 보다 항상 위」로 서술(0587 골조 ★2)."
```

```yaml
- id: RPM-CALC1-0587
  page: 91
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    f(x)=x⁴−4x, g(x)=−x²+2x−a 에 대해 y=f(x) 가 y=g(x) 보다 항상 위쪽에 있도록 하는 실수 a 의 범위.
  category: "그래프 상하 관계 → 차함수 h=f−g 의 최솟값 > 0 → h' 인수분해 → a"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「항상 위쪽」을 차함수 h(x)=f(x)−g(x) 의 최솟값 > 0(등호 제외)으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "모든 실수에서 성립하는 부등식(차함수 최솟값 ≥ 0)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $h(x)=x^4+x^2-6x+a$, $h'=4x^3+2x-6=2(x-1)(2x^2+2x+3)$, 이차 인수 실근 없음 → $x=1$ 에서 최소 $h(1)=a-4>0$ → $a>4$.
    「항상 위쪽」이라 등호를 빼는 경계 함정 하나와 삼차 도함수 인수분해(Mₖ 2). 표준 전환 d1 → 「중요」 태그 +0, ★2 절차형.
  tier: star_2
  mechanism_primary: "h=f−g=x⁴+x²−6x+a → h'=2(x−1)(2x²+2x+3) → 최소 h(1)=a−4>0 → a>4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$a>4$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0587.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "g 의 계수(−x²+2x 부분)와 f 의 일차항을 바꿔 h' 가 (x−1)(실근 없는 이차) 꼴을 유지. 제약: 이차 인수 판별식 음수, h(1) 이 a 의 일차식, 답은 열린 부등식(등호 제외)."
    creative: "(1) 「두 그래프가 만나지 않는」으로 서술하면 같은 답(★2) (2) 「만나는 점이 한 개」로 바꾸면 접하는 경우 a=4(★2) (3) g 를 직선으로 바꾸고 「직선이 곡선 아래에 있는 a 의 범위」 — 접선 판별과 겹쳐 두 갈래 풀이(I-SC d1 ★3)."
```

```yaml
- id: RPM-CALC1-0588
  page: 91
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    x ≥ 0 에서 부등식 2x³+k ≥ 3x² 이 성립하도록 하는 실수 k 의 범위.
  category: "이항 → f=2x³−3x²+k 의 x≥0 구간 최솟값 ≥ 0 → k"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「x≥0 에서 부등식」을 「그 구간의 최솟값 ≥ 0」으로 옮기고 구간 안의 극소 x=1 을 최소로 확인"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "주어진 구간에서 성립하는 부등식(구간 최솟값 ≥ 0)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $f(x)=2x^3-3x^2+k$, $f'=6x(x-1)$, $x\ge0$ 에서 $x=1$ 극소가 최소 → $f(1)=k-1\ge0$ → $k\ge1$.
    세 단계 계산이며 구간 제한(T-범위)만 함정. 통찰 d1 하나·M_total 5 → −1 조건(통찰 0)에 해당하지 않아 ★2 유지, 절차형.
  tier: star_2
  mechanism_primary: "f=2x³−3x²+k → f'=6x(x−1) → x≥0 최소 f(1)=k−1≥0 → k≥1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$k\ge 1$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0588.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼차식 계수·구간 시작점(x≥−1 등)을 바꿀 수 있음. 제약: 극소점이 구간 안에 있어야 최솟값이 극솟값이고, 구간 끝점의 값이 극솟값보다 크게 유지."
    creative: "(1) 구간을 x≥2 처럼 극소점 밖으로 옮기면 최솟값이 끝점 값이 되어 함정 전환(★2~3) (2) 「x>0 에서 성립」(열린 구간)으로 바꿔도 답이 같음을 확인하는 보기형(★2) (3) k 대신 계수 위치의 매개변수(2x³−ax²+1≥0)로 두면 극점이 a 에 의존(★3)."
```

```yaml
- id: RPM-CALC1-0589
  page: 91
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    위치 x=(1/4)t³−(3/2)t²−t+10 인 점 P 의 0≤t≤6 에서 속력의 최댓값.
  category: "속도 v(t)=x' → 이차함수의 구간 최대·최소 → |v| 최대"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "속력 최댓값을 |v| 의 최대, 즉 구간에서 v 의 최댓값과 최솟값의 절댓값 비교로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "속력의 최댓값(구간에서 |v| 최대)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $v=\dfrac34t^2-3t-1=\dfrac34(t-2)^2-4$. $0\le t\le6$ 에서 $v$ 의 최솟값 $-4$($t=2$), 최댓값 $8$($t=6$) → 속력 최댓값 $8$.
    속도 최댓값(8)과 속력 최댓값이 우연히 같지만 $|{-4}|$ 와 비교하는 절차가 함정(T-표기)이고 구간 끝점 확인(T-경계). 표준 전환 d1·M_total 6 → ★2 절차형.
  tier: star_2
  mechanism_primary: "v=(3/4)t²−3t−1 → 꼭짓점 t=2, v=−4 · 끝점 v(6)=8 → max|v|=8"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$8$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0589.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "위치 함수의 계수와 구간 끝(0≤t≤4 등)을 바꿀 수 있음. 제약: v 의 꼭짓점이 구간 안에 있고 |최솟값| 과 끝점 값이 다르게 설계하면 비교 함정이 살아남, 값은 정수."
    creative: "(1) 꼭짓점의 |v| 가 끝점보다 크도록 설계해 속력 최댓값이 v 의 최솟값에서 나오게(함정 전환 ★2~3) (2) 「가속도가 0 인 순간의 속력」으로 바꾸기(★1~2) (3) 「속력이 최대인 시각에서의 위치」까지 묻기(★2)."
```

```yaml
- id: RPM-CALC1-0590
  page: 91
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    두 점 P, Q 의 위치 x_P=2t³−2t²+3t, x_Q=−4t²−t 일 때 t=3 에서 선분 PQ 의 중점 M 의 속도. 5지선다.
  category: "중점 위치 = 평균 → 미분 → 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "속도·가속도 계산(위치 함수 미분)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    $x_M=\dfrac{x_P+x_Q}{2}=t^3-3t^2+t$, $v_M=3t^2-6t+1$, $t=3$ → $10$ → ①.
    중점 식 세우고 미분·대입 세 단계, 통찰 없음·M_total 4 → 시험 구역 ★2 에서 −1 → ★1.
  tier: star_1
  mechanism_primary: "x_M=(x_P+x_Q)/2=t³−3t²+t → v_M=3t²−6t+1 → t=3 → 10"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "①"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0590.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 위치 함수의 계수와 시각을 바꿀 수 있음. 제약: 합이 2 로 나누어떨어져 중점 식의 계수가 정수, 답이 선택지 범위(10~14)처럼 촘촘한 정수."
    creative: "(1) 「중점 M 의 가속도」(★1) (2) 「M 이 운동 방향을 바꾸는 시각」(★2) (3) 선분 PQ 의 길이 |x_P−x_Q| 의 변화율(절댓값 부호 판단 ★2~3)."
```

```yaml
- id: RPM-CALC1-0591
  page: 91
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    브레이크를 밟은 후 t초 동안 이동 거리 x=16t−2t² (m) 인 자동차가 정지할 때까지 걸린 시간.
  category: "v=x' → v=0 인 t"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정지할 때까지의 시간(v=0)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    $v=16-4t=0$ → $t=4$ → 4초. 미분 한 번·일차방정식. 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "x=16t−2t² → v=16−4t → v=0 → t=4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$4$초"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0591.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초기 속도(16)와 감속 계수(2)를 바꿀 수 있음. 제약: 정지 시각 = 초기속도/(2·계수) 가 정수, 단위(m·초) 유지."
    creative: "(1) 「정지할 때까지 이동한 거리」를 묻기(x(4) 대입 ★1) (2) 「브레이크를 밟은 뒤 k m 만에 정지하도록 하는 감속 계수」(역산 ★2) (3) 초기 속도 v₀ 를 문자로 주고 정지 거리를 v₀ 로 표현(Mₐ ↑ ★2)."
```

```yaml
- id: RPM-CALC1-0592
  page: 91
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    위치 x=t³+3t²−24t+k 인 점 P 가 원점에서 운동 방향을 바꿀 때 상수 k (k≠0).
  category: "v=0 이며 부호가 바뀌는 t → 그때 x=0 → k"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「원점에서 운동 방향을 바꿈」을 「v=0 이고 부호가 바뀌는 시각에 x=0」 두 조건의 동시 성립으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "운동 방향이 바뀌는 순간(v=0 · 부호 변화) 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $v=3t^2+6t-24=3(t+4)(t-2)$, $t>0$ 이므로 $t=2$ 에서 방향 전환. $x(2)=8+12-48+k=0$ → $k=28$.
    방향 전환 조건을 $v=0$·$x=0$ 으로 옮기는 표준 동치(EQV d1)와 $t=-4$ 를 버리는 범위 확인. ★2 절차형.
  tier: star_2
  mechanism_primary: "v=3(t+4)(t−2) → t=2 (t>0) → x(2)=−28+k=0 → k=28"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$28$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0592.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼차 위치 함수의 계수를 바꿔 v 가 (t+p)(t−q) 로 인수분해되게 유지. 제약: 양의 근이 하나뿐이어야 방향 전환 시각이 유일하고, k≠0 조건은 답이 0 이 되지 않게 계수를 고르면 자연히 만족."
    creative: "(1) 「방향을 바꾸는 순간의 위치가 원점」 대신 「그때 가속도」를 묻기(★1~2) (2) v 의 양의 근이 둘이 되게 설계하면 「처음으로」 조건 필요(★2) (3) 「원점을 지날 때 속도」(x=0 인 t 를 먼저 찾는 역방향 ★3)."
```

```yaml
- id: RPM-CALC1-0593
  page: 92
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    원점 출발 점 P 의 위치 x=(1/3)t³+pt²+qt 가 t=1 에서 처음 운동 방향을 바꾸고 그때 위치가 10/3 일 때, 두 번째로 방향을 바꾸는 순간의 가속도. (p, q 상수)
  category: "v(1)=0, x(1)=10/3 연립 → p, q → v 의 다른 근 → 가속도"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「t=1 에서 처음 방향 전환 · 그때 위치」를 v(1)=0, x(1)=10/3 두 식으로 옮겨 p, q 를 결정"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "운동 방향이 바뀌는 순간(v=0 · 부호 변화) 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $v=t^2+2pt+q$, $v(1)=1+2p+q=0$, $x(1)=\dfrac13+p+q=\dfrac{10}3$ → $p=-4$, $q=7$. $v=(t-1)(t-7)$ → 두 번째 전환 $t=7$, $a=2t-8$ → $6$.
    조건을 두 식으로 옮겨 연립하는 표준 절차(EQV d1)에 두 번째 근·가속도 계산. M_total 6 → ★2 절차형.
  tier: star_2
  mechanism_primary: "v(1)=0, x(1)=10/3 → p=−4, q=7 → v=(t−1)(t−7) → t=7 → a=2t−8=6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$6$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0593.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫 전환 시각(1)·그때 위치·삼차 계수(1/3)를 바꿀 수 있음. 제약: 연립해 p, q 가 정수가 되고 v 의 두 근이 서로 다른 양수여야 「두 번째」가 성립."
    creative: "(1) 두 번째 전환 시각을 주고 첫 전환 시각을 묻기(대칭 ★2) (2) 「두 전환 시각 사이에 움직인 거리」로 바꾸면 x 의 차(★2) (3) p, q 대신 「t=1 과 t=7 에서 방향 전환」을 주고 x(1) 을 묻기(★2)."
```

```yaml
- id: RPM-CALC1-0594
  page: 92
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    원점 출발 점 P 의 속도 v(t) 그래프(0→2(t=1)→0(t=2)→−2(t=3)→−2(t=4)→0(t=5)→2(t=6) 꺾은선)가 주어질 때 보기(t=2 위치가 원점 · t=1 과 t=3 의 방향 반대 · 방향 전환 2번) 중 옳은 것. 0≤t≤6. 그림.
  category: "속도 그래프의 부호 → 운동 방향·위치 부호 → 보기 판단"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "속도 그래프를 운동으로 읽음 — v>0 인 (0,2) 동안 양의 방향으로 움직였으므로 t=2 위치는 원점이 아니고, 방향 전환은 v 의 부호가 바뀌는 t=2, 5 뿐(v=−2 로 일정한 [3,4] 는 전환 아님)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "속도 그래프의 해석(부호 = 운동 방향)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ㄱ: $0<t<2$ 에서 $v>0$ 이라 원점에서 양의 방향으로 이동, $t=2$ 는 $v=0$ 일 뿐 위치는 원점이 아님 → 거짓. ㄴ: $v(1)>0$, $v(3)<0$ → 반대 → 참. ㄷ: 부호 변화 $t=2$, $t=5$ 두 번 → 참. 답 ㄴ, ㄷ.
    속도 그래프를 위치 그래프로 착각(ㄱ)·속도가 일정한 구간을 전환으로 착각하는 함정(Mₜ 2)과 그래프 해석 RT d2. 「중요」·d2 → 시험 구역 ★2 에서 ★3, 통찰형.
  tier: star_3
  mechanism_primary: "v(t) 그래프 → 부호: (0,2)+, (2,5)−, (5,6)+ → t=2 위치>0 · t=1, 3 반대 · 전환 2번 → ㄴ, ㄷ"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "ㄴ, ㄷ"
  answer_source: "답지"
  figure: "crop:fig-0594.png"
  latex: latex-bank/rpm-calc1/items/0594.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "보기에 쓰인 시각(1, 2, 3)을 다른 격자점으로 바꾸거나 보기를 「가속도가 0 인 구간」으로 교체할 수 있음. 제약: 그림의 꺾은선 격자(0~6, ±2) 라벨 고정, 정적분(적분 단원) 없이 판단 가능한 보기만 사용."
    creative: "(1) 「t=2 와 t=5 에서의 위치의 대소」 보기(v 의 부호로 이동 방향만 따지면 판단 가능 ★3) (2) 꺾은선 대신 곡선 v(t) 로 그리고 「가속도가 양인 구간」 보기(기울기 해석 ★3) (3) 위치 그래프로 바꿔 같은 보기(0577 골조 ★3)."
```

```yaml
- id: RPM-CALC1-0595
  page: 92
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    높이 35 m 에서 30 m/s 로 위로 던진 물체의 높이 h=35+30t−5t² 에 대해 보기(최고 높이 도달 시간 3초 · 최고 높이 65 m · 지면 도달 6초 · 가속도 일정) 중 옳은 것.
  category: "v=h' → v=0 시각·최고 높이·h=0 시각·가속도 각각 계산 → 보기 판단"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "위로 던진 물체의 운동(최고 높이 · 지면 도달)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $v=30-10t$. ㄱ: $v=0$ → $t=3$ → 참. ㄴ: $h(3)=80$ → 거짓. ㄷ: $h=0$ → $t^2-6t-7=0$ → $t=7$ → 거짓. ㄹ: $a=-10$ 일정 → 참. 답 ㄱ, ㄹ.
    네 보기를 각각 계산하는 절차형(Mₛ 2). 통찰 0·M_total 5 로 −1 후보이나 보기 4개의 개별 계산이 남아 ★2 유지.
  tier: star_2
  mechanism_primary: "v=30−10t → 최고: t=3, h=80 · 지면: 5t²−30t−35=0 → t=7 · a=−10 → ㄱ, ㄹ"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "ㄱ, ㄹ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0595.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초기 높이·초기 속도(20·40)를 바꿀 수 있음. 제약: 5t²−v₀t−h₀=0 이 정수근을 갖도록(예: h₀=35, v₀=30 → t=7) 설계하고 보기의 오답 수치를 그럴듯하게(65 처럼) 유지."
    creative: "(1) 「지면에 닿는 순간의 속력」 보기 추가(★2) (2) 초기 높이 0 으로 두고 「올라갈 때와 내려올 때 높이 k 를 지나는 시각의 합」(대칭 ★2~3) (3) 두 물체를 시차를 두고 던져 「같은 높이가 되는 시각」(★3)."
```

```yaml
- id: RPM-CALC1-0596
  page: 92
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    키 1.6 m 인 사람이 4 m 가로등 밑에서 출발해 매분 100 m 로 걸을 때, 그림자의 머리끝이 움직이는 속도. 5지선다. 그림(가로등·사람·그림자).
  category: "닮음비로 그림자 끝 위치를 사람 위치의 함수로 → 미분"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "가로등·사람·그림자 끝이 만드는 닮은 두 삼각형에서 그림자 끝 위치 y 와 사람 위치 x 의 관계 y=(5/3)x 를 끌어내는 기하→대수 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "그림자 끝의 속도(닮음비 → 위치 함수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    사람 위치 $x=100t$, 그림자 끝 $y$: $4:1.6=y:(y-x)$ → $2.4y=4x$ → $y=\dfrac53x=\dfrac{500}3t$ → $y'=\dfrac{500}3$ → ③.
    「그림자의 길이의 변화율」($y-x$, $\dfrac{200}3$ → ①)과 「머리끝의 속도」를 구분하는 함정 하나. 닮음 전환 d1·M_total 5 → ★2 절차형.
  tier: star_2
  mechanism_primary: "x=100t → 4:1.6 = y:(y−x) → y=(5/3)x=(500/3)t → y'=500/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: "crop:fig-0596.png"
  latex: latex-bank/rpm-calc1/items/0596.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "가로등 높이(3·5 m)·키(1.5·1.8 m)·속도를 바꿀 수 있음. 제약: 높이 비가 간단한 유리수(4:1.6=5:2)가 되게 하고 오답 선택지에 「그림자 길이의 변화율」 값을 넣어 함정 유지, 그림 라벨(4 m, 1.6 m) 발문과 일치."
    creative: "(1) 「그림자의 길이의 변화율」을 묻기(같은 골조 ★2) (2) 사람이 가로등을 향해 걸어올 때(방향 반대, 부호 ★2) (3) 사람이 등속이 아니라 x=t² 로 가속할 때 t=3 의 그림자 끝 속도(합성 ★3)."
```

```yaml
- id: RPM-CALC1-0597
  page: 92
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    한 변 2 cm 인 정삼각형의 각 변이 매초 2 cm 씩 늘 때 5초 후 넓이의 변화율.
  category: "변 x=2+2t → 정삼각형 넓이 S(t) → 미분 → 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "시각에 대한 넓이의 변화율(길이가 일차로 변하는 평면도형)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    $x=2+2t$, $S=\dfrac{\sqrt3}4x^2$, $S'=\dfrac{\sqrt3}2x\cdot2=\sqrt3\,x$, $t=5$ 에서 $x=12$ → $12\sqrt3$. 공식·미분·대입 세 단계, 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "x=2+2t → S=(√3/4)x² → S'=√3·x → x=12 → 12√3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$12\sqrt{3}\,\mathrm{cm}^2/\mathrm{s}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0597.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초기 변·증가 속도·시각을 바꿀 수 있음. 제약: 대입 시각의 변 길이가 정수, 답은 √3 의 정수배, 단위 cm²/s 유지."
    creative: "(1) 정사각형·정육각형으로 도형 바꾸기(★1) (2) 「넓이가 36√3 이 되는 순간의 변화율」(시각 역산 0572 골조 ★2) (3) 「둘레의 변화율 : 넓이의 변화율」 비(★2)."
```

```yaml
- id: RPM-CALC1-0598
  page: 92
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    밑면 반지름 4 cm, 높이 8 cm 원뿔 그릇에 수면 높이가 매초 0.5 cm 씩 오르도록 물을 넣을 때, 높이 4 cm 가 되는 순간 물의 부피의 변화율. 5지선다. 그림(원뿔 치수).
  category: "닮음비로 수면 반지름을 높이로 표현 → V(h) → 미분 → h=4, h'=0.5 대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "그릇의 닮음비 4:8 로 수면 반지름을 h/2 로 바꿔 부피를 h 하나의 함수로 만드는 기하→대수 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "시각에 대한 부피의 변화율(원뿔 그릇의 수면 · 닮음비)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    수면 반지름 $r=\dfrac h2$ → $V=\dfrac13\pi\left(\dfrac h2\right)^2h=\dfrac{\pi}{12}h^3$, $V'=\dfrac{\pi}4h^2\cdot h'=\dfrac{\pi}4\cdot16\cdot\dfrac12=2\pi$ → ①.
    0575 와 같은 골조에 상승 속도 $0.5$ 가 곱해지는 점만 다름. 닮음 전환 d1·M_total 5 → ★2 절차형.
  tier: star_2
  mechanism_primary: "r:h=4:8 ⇒ r=h/2 → V=πh³/12 → V'=(π/4)h²·h' → h=4, h'=0.5 → 2π"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: "crop:fig-0598.png"
  latex: latex-bank/rpm-calc1/items/0598.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "그릇 치수(반지름:높이 1:2 유지 또는 1:3)·상승 속도(0.5·1·2)·묻는 높이를 바꿀 수 있음. 제약: 답이 π 의 간단한 유리수배가 되어 선택지(2π~4π, 1/2 간격)에 들어가고, 그림 라벨(4 cm, 8 cm) 발문과 일치."
    creative: "(1) 부피의 변화율을 주고 수면 높이의 변화율을 묻기(역방향 ★3) (2) 원뿔을 뒤집은 그릇(꼭짓점 위)으로 바꿔 r=4−h/2 꼴(전개 부담 ★3) (3) 「수면의 넓이의 변화율」(★2)."
```

### 서술형 주관식

```yaml
- id: RPM-CALC1-0599
  page: 93
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    −4<k<0 일 때 방정식 x³−3x²−k=0 의 서로 다른 실근의 개수.
  category: "상수분리 x³−3x²=k → 극값(0, −4) 사이의 k → 교점 3"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "방정식의 실근 개수를 y=x³−3x² 와 y=k 의 교점 개수로 옮기는 상수분리"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "방정식의 실근 개수(상수분리 → 극값 사이)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $f(x)=x^3-3x^2$, $f'=3x(x-2)$, 극댓값 $f(0)=0$, 극솟값 $f(2)=-4$. $-4<k<0$ 은 두 극값 사이이므로 교점 3개 → 실근 3개.
    상수분리(RT d1) 뒤 극값 두 개와 범위 비교뿐인 기본 골조. [분류 이슈] 서술형 구역 ★3 출발이나 통찰 d1·M_total 6 의 기본형이라 ★2 로 둠(후보 ★2/★3) — 서술형 표시는 답안 형식 신호이지 골조 난이도 신호가 아님.
  tier: star_2
  mechanism_primary: "x³−3x²=k 로 분리 → f'=3x(x−2) → 극값 0, −4 → −4<k<0 은 극값 사이 → 3개"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$3$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0599.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼차식 계수와 k 의 범위를 바꿀 수 있음. 제약: k 의 범위가 극값 사이 열린 구간과 정확히 일치하거나 그 안에 들어가야 답이 하나(3)로 고정, 극값이 정수."
    creative: "(1) k 의 범위를 −4<k<2 처럼 극댓값을 넘게 잡아 「k 의 값에 따라 실근 개수를 나눠 답하라」(I-MI d1 ★3) (2) 「실근이 3개가 되는 정수 k 의 개수」(★2) (3) 「양의 실근의 개수」(f(0) 부호까지 ★3)."
```

```yaml
- id: RPM-CALC1-0600
  page: 93
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "서술형 주관식"
  summary: |
    곡선 y=x⁴−x 와 직선 y=3x+k 가 서로 다른 두 점에서 만나도록 하는 실수 k 의 범위.
  category: "교점 → x⁴−4x=k 상수분리 → 사차함수의 유일 극소 → k > 극솟값"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "곡선과 직선의 교점 개수를 x⁴−4x=k 의 실근 개수, 즉 y=x⁴−4x 와 수평선의 교점으로 옮기는 상수분리"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 곡선(곡선·직선)의 교점 개수 조건(차함수 극값)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $x^4-4x=k$, $f(x)=x^4-4x$, $f'=4(x-1)(x^2+x+1)$ → 극소 $f(1)=-3$ 하나뿐. 두 교점 ⇔ $k>-3$.
    상수분리(RT d1)와 사차식의 유일 극소 확인, 등호 제외(접할 때 1점) 함정 하나. [분류 이슈] 서술형 구역 ★3 출발이나 기본 골조·M_total 6 → ★2 로 둠(후보 ★2/★3).
  tier: star_2
  mechanism_primary: "x⁴−x=3x+k → x⁴−4x=k → f'=4(x−1)(x²+x+1) → 최소 f(1)=−3 → k>−3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$k>-3$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0600.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선의 기울기·사차식의 일차항을 바꿔 f' 가 (x−p)(실근 없는 이차) 로 인수분해되게 유지. 제약: 극소가 하나여야 「두 점」 조건이 k>극솟값 한 줄이 되고, 극솟값은 정수."
    creative: "(1) 「한 점에서만 만난다」로 바꾸면 접하는 k=−3(★2) (2) 사차식을 극값 세 개(x⁴−2x² 등)로 바꾸면 교점 2개 조건이 두 갈래(I-MI d1 ★3) (3) 직선의 기울기를 매개변수 m 으로 두고 「모든 m 에 대해 두 점에서 만나는 k」(Mₐ ↑ ★4)."
```

```yaml
- id: RPM-CALC1-0601
  page: 93
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    f(x)=2x³−3x², g(x)=x³−a 에 대해 1<x<3 에서 f(x) ≥ g(x) 가 성립하도록 하는 실수 a 의 최솟값.
  category: "차함수 h=f−g=x³−3x²+a → (1,3) 에서 최솟값(x=2) ≥ 0 → a"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「구간에서 f≥g」를 차함수 h 의 구간 최솟값 ≥ 0 으로 옮기고 극소 x=2 가 열린 구간 안에 있음을 확인"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "주어진 구간에서 성립하는 부등식(구간 최솟값 ≥ 0)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $h(x)=x^3-3x^2+a$, $h'=3x(x-2)$, $1<x<3$ 에서 $x=2$ 극소가 최소 → $h(2)=a-4\ge0$ → $a\ge4$ → 최솟값 $4$.
    0588 과 같은 골조에 두 함수의 차를 만드는 한 단계가 붙음(EQV d1). 열린 구간이지만 최솟값이 내부 극소라 등호 포함. [분류 이슈] 서술형 구역 ★3 출발이나 기본 골조·M_total 6 → ★2 로 둠(후보 ★2/★3).
  tier: star_2
  mechanism_primary: "h=f−g=x³−3x²+a → h'=3x(x−2) → (1,3) 최소 h(2)=a−4≥0 → a≥4 → 4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$4$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0601.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 함수의 계수와 구간(1<x<3 → 0<x<4 등)을 바꿀 수 있음. 제약: 차함수의 극소점이 구간 안에 있어야 최솟값이 극솟값이고, 구간 끝점 값이 극솟값보다 크게 유지, 답은 정수."
    creative: "(1) 구간을 극소점 밖(3<x<5)으로 옮겨 최솟값이 끝점 극한값이 되게 하면 열린 구간 함정(★3) (2) 「g(x) ≥ f(x)」 방향을 바꿔 최댓값 조건(★2) (3) a 를 g 가 아니라 f 의 계수에 넣어 극점이 a 에 의존하게(★3)."
```

```yaml
- id: RPM-CALC1-0602
  page: 93
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    두 점 P, Q 의 위치 x_P=t²−6t, x_Q=(1/2)t²+4t 일 때 두 점이 같은 방향으로 움직이는 시각 t 의 범위.
  category: "두 속도 → 같은 방향 ⇔ v_P·v_Q>0 → 부등식 → t≥0 범위"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「같은 방향으로 움직인다」를 두 속도의 곱이 양수(부호 같음, 0 제외)인 부등식으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 점이 같은 방향으로 움직일 조건(속도 곱 > 0)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $v_P=2t-6$, $v_Q=t+4$. $(2t-6)(t+4)>0$ → $t<-4$ 또는 $t>3$, $t\ge0$ 이므로 $t>3$.
    같은 방향 = 속도 곱 양수(EQV d1)에 $t<-4$ 를 버리는 범위 확인·등호 제외(정지 순간 제외) 함정 둘(Mₜ 2). [분류 이슈] 서술형 구역 ★3 출발이나 기본 골조·M_total 6 → ★2 로 둠(후보 ★2/★3).
  tier: star_2
  mechanism_primary: "v_P=2t−6, v_Q=t+4 → v_P·v_Q>0 → t<−4 또는 t>3 → t≥0 ⇒ t>3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$t>3$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0602.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 이차 위치 함수의 계수를 바꿀 수 있음. 제약: 두 속도가 일차식이라 곱의 부호가 두 근으로 갈리고, 한 근은 음수(버림)·한 근은 양수가 되게 설계하면 답이 한 구간."
    creative: "(1) 「서로 반대 방향으로 움직이는 시각」(곱 < 0 → 0≤t<3 · 경계 포함 여부 ★2) (2) 한 점의 위치를 삼차식으로 주어 속도가 이차식 → 부호 구간이 셋(★3) (3) 「두 점의 속도가 같아지는 순간의 두 점 사이 거리」(★2)."
```

### 실력 Up

```yaml
- id: RPM-CALC1-0603
  page: 93
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: ["교육청 기출"]
  category_type: "실력 Up"
  summary: |
    최고차항 계수 1 인 삼차함수 f 와 g(x)=f(x)+|f'(x)| 가 ㈎ f(0)=g(0)=0, ㈏ f(x)=0 이 양의 실근을 가짐, ㈐ |f(x)|=4 의 서로 다른 실근이 3개를 만족시킬 때 g(3). 5지선다.
  category: "㈎ → f(0)=f'(0)=0 → f=x²(x−a) · ㈏ a>0 · ㈐ |f|=4 의 근 개수 3 ⇔ 극솟값 = −4 → a=3 → g(3)"
  M: {s: 3, k: 2, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "g(0)=f(0)+|f'(0)|=0 과 f(0)=0 에서 |f'(0)|=0, 즉 x=0 이 f 의 중근임을 읽어 f(x)=x²(x−a) 로 꼴을 고정"
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "|f(x)|=4 를 f=4(극댓값 0 이라 항상 근 1개)와 f=−4 로 나누고, 합이 3 이 되려면 f=−4 가 정확히 2개, 즉 극솟값 −4a³/27 이 −4 와 같은 경계 케이스여야 함을 확정"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "절댓값 방정식의 실근 개수 조건으로 삼차함수 결정(기출)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    ㈎에서 $f(0)=0$, $|f'(0)|=0$ → $f(x)=x^2(x-a)$, ㈏에서 $a>0$. $f'=x(3x-2a)$, 극댓값 $f(0)=0$, 극솟값 $f\!\left(\dfrac{2a}3\right)=-\dfrac{4a^3}{27}$. $f=4$ 는 근 1개이므로 $f=-4$ 가 2개 → 극솟값 $=-4$ → $a=3$. $g(3)=f(3)+|f'(3)|=0+9=9$ → ①.
    조건 ㈎의 절댓값을 중근으로 옮기는 동치 변환(EQV d2)과 절댓값 방정식을 두 방정식의 근 개수 합으로 나눠 경계(접하는 경우)를 잡는 분기(MI d2), 일반 삼차함수 서술(Mₐ 3)·M_total 10. 실력 Up 출발 ★4 유지, 통찰 3개·SC/VF/SYM/XU 가 없어 ★5 아님.
  tier: star_4
  mechanism_primary: "㈎ ⇒ f(0)=f'(0)=0 ⇒ f=x²(x−a) → ㈏ a>0 → ㈐ |f|=4: f=4 근 1 + f=−4 근 2 ⇔ 극솟값 −4a³/27=−4 ⇒ a=3 → g(3)=0+|27−18|=9"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "①"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0603.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "㈐의 상수 4 와 g 의 대입점 3 을 바꿀 수 있음. 제약: 극솟값 −4a³/27 = −c 에서 a 가 유리수(c=4 → a=3, c=32 → a=6)가 되게 c 를 고르고, g(p) 의 값이 정수가 되게 p 를 고름(p=a 이면 f(p)=0 이라 |f'(a)|=a² 만 남음)."
    creative: "(1) ㈐를 「서로 다른 실근의 개수가 4」로 바꾸면 극솟값 < −4 → a 의 범위 → 「정수 a 의 최솟값」(부등식 ★4) (2) g=f+|f'| 대신 g=f−|f'| 로 두면 ㈎가 같은 정보를 주지만 g(3) 값이 달라짐(★4 유지) (3) ㈏를 「f(x)=0 이 음의 실근」으로 바꾸면 a<0 이 되어 극값의 위치·부호가 반전(I-VF 추가 ★4~5)."
```

```yaml
- id: RPM-CALC1-0604
  page: 93
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    곡선 y=x³−3x²−2 밖의 점 (0, a) 에서 이 곡선에 오직 한 개의 접선만 그을 수 있도록 하는 실수 a 의 범위.
  category: "접점 t 설정 → 접선에 (0,a) 대입 → a=h(t) 삼차 → 실근 1개 ⇔ a 가 극값 범위 밖"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「접선이 오직 하나」를 접점 t 에 대한 방정식 a=−2t³+3t²−2 의 실근이 하나라는 조건, 즉 수평선 y=a 가 삼차곡선과 한 점에서 만나는 조건으로 옮김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "곡선 밖의 점에서 그은 접선의 개수 조건(접점 방정식 실근 개수)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    접점 $(t,\,t^3-3t^2-2)$ 의 접선에 $(0,a)$ 를 대입하면 $a=-2t^3+3t^2-2=h(t)$. $h'=-6t(t-1)$, $h(0)=-2$(극소), $h(1)=-1$(극대). 실근 하나 ⇔ $a<-2$ 또는 $a>-1$. 곡선 밖 조건($a\ne-2$)은 자동 만족.
    접선 개수를 접점 방정식의 실근 개수로 옮기는 EQV d2 와 삼차 극값, 등호(접선 2개) 제외 함정. [분류 이슈] 실력 Up 구역 ★4 출발이나 04 단원 유형 UP 12(곡선 밖의 점에서 그은 접선의 개수)와 같은 골조·M_total 7 이라 ★3 으로 둠(후보 ★3/★4).
  tier: star_3
  mechanism_primary: "접점 t → 접선 y=(3t²−6t)(x−t)+t³−3t²−2 → (0,a) 대입 → a=−2t³+3t²−2 → 극값 −2, −1 → 실근 1 ⇔ a<−2 또는 a>−1"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$a<-2$ 또는 $a>-1$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0604.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼차곡선의 계수·상수항과 외부점의 x좌표(0 → 1)를 바꿀 수 있음. 제약: 외부점의 x좌표가 0 이면 a=h(t) 가 깔끔한 삼차식이 되고, 극점 t 가 정수·극값이 정수가 되게 계수를 고름, 외부점이 곡선 위에 오지 않도록 확인."
    creative: "(1) 「접선을 세 개 그을 수 있는 a 의 범위」(극값 사이 −2<a<−1 ★3) (2) 외부점 (k, a) 로 x좌표를 문자로 두면 a=h(t;k) 의 극값이 k 에 의존(Mₐ ↑ ★4) (3) 「접선이 두 개」 조건 → 극값과 같아지는 두 경우(I-MI d1 ★3)."
```

```yaml
- id: RPM-CALC1-0605
  page: 93
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    최고차항 계수 1 인 삼차함수 f 와 이차함수 g 의 그래프가 y축에서 만나고 x=2 인 점에서 공통인 접선을 가질 때, x ≥ a 에서 f(x) ≥ g(x)+3 이 성립하도록 하는 실수 a 의 최솟값.
  category: "차함수 h=f−g 에 세 조건 통합 → h=x(x−2)² → h≥3 의 해 → 최대 실근 x=3 이후 → a"
  M: {s: 2, k: 2, a: 3, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「y축에서 만남 · x=2 에서 공통접선」 세 조건(h(0)=0, h(2)=0, h'(2)=0)을 최고차항 계수 1 인 차함수 h 하나로 결합해 h=x(x−2)² 로 결정"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「x≥a 에서 h≥3 이 성립하는 a 의 최솟값」을 h 의 증감(극대 32/27<3, x≥2 증가)과 h(x)=3 의 실근 x=3 으로 옮겨 a≥3"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "공통접선 조건 → 차함수 중근 · 부등식 성립 구간"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    $h(x)=f(x)-g(x)$ 는 최고차항 계수 1 인 삼차식이고 $h(0)=0$, $h(2)=h'(2)=0$ → $h=x(x-2)^2=x^3-4x^2+4x$. $h'=(3x-2)(x-2)$, 극댓값 $h\!\left(\dfrac23\right)=\dfrac{32}{27}<3$ 이므로 $h\ge3$ 은 $x\ge2$ 증가 구간에서만 가능. $h(x)=3$ → $(x-3)(x^2-x+1)=0$ → $x=3$. 따라서 $a\ge3$ → 최솟값 $3$.
    공통접선을 차함수의 중근으로 통합하는 CON d2 와 부등식 성립 구간을 방정식의 최대 실근으로 옮기는 EQV d2, 인수정리 인수분해(Mₖ 2)·일반 함수 서술(Mₐ 3). 실력 Up 출발 ★4 유지(통찰 2개로 +1 후보이나 ★5 조건 미달).
  tier: star_4
  mechanism_primary: "h=f−g: h(0)=0, h(2)=h'(2)=0, 최고차 1 ⇒ h=x(x−2)² → 극대 32/27<3 → h=3 ⇔ x=3 (x≥2 증가) → a≥3 → 3"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$3$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0605.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공통접선의 x좌표(2 → 1, 3)와 부등식 상수(3)를 바꿀 수 있음. 제약: h=x(x−p)² 의 극댓값 4p³/27 이 상수 c 보다 작아야 답이 「최대 실근」 한 줄이고, h(x)=c 가 정수근을 갖도록(c=p(q−p)² 꼴) 설계."
    creative: "(1) 상수 c 를 극댓값보다 작게 잡으면 h≥c 의 해가 두 구간이 되어 「x≥a」 조건에서 큰 쪽 근만 답(I-VF d1 ★4) (2) 「y축에서 만남」을 「x=−1 에서 만남」으로 바꾸면 h=(x+1)(x−2)²(★4 유지) (3) f, g 의 최고차항 계수를 모두 미지수로 두고 조건을 하나 더 주기(Mₐ ↑ ★5 후보이나 저노출 통찰 없음)."
```

## 표본 판정 요약 (35문)

- ★ 분포: ★1 5 · ★2 19 · ★3 9 · ★4 2 · ★5 0
- 통찰형 10 · 절차형 25 · premium 0 (insights 가 비어 있지 않은 블록은 28 — d1 한 개짜리 표준 전환 18문은 절차형으로 둠)
- type_hint 상위: 「시각에 대한 넓이의 변화율(길이가 일차로 변하는 평면도형)」 3 · 「도함수 그래프에서 원함수 개형 → 방정식 실근 개수」 3 · 「시각에 대한 부피의 변화율(원뿔 그릇의 수면 · 닮음비)」 2 · 「시각에 대한 부피의 변화율(길이가 일차로 변하는 입체)」 2 · 「위치 그래프의 해석(기울기 = 속도 · 극값 = 방향 전환)」 2 · 이 밖에 「방정식의 실근 개수(상수분리)」 「두 곡선의 교점 개수 조건」 「모든 실수에서 성립하는 부등식」 「주어진 구간에서 성립하는 부등식」 「운동 방향이 바뀌는 순간 조건」 각 2
- 그림: 9문(`crop:fig-0575.png` · `crop:fig-0577.png` · `crop:fig-0578.png` · `crop:fig-0580.png` · `crop:fig-0581.png` · `crop:fig-0582.png` · `crop:fig-0594.png` · `crop:fig-0596.png` · `crop:fig-0598.png`)
- 구역별: 유형 14 (★1·★2·★2) · 유형 15 (★1·★2·★3) · 유형 UP 16 (★3·★3) · 시험에 꼭 나오는 문제 20문(★1 3 · ★2 11 · ★3 6) · 서술형 주관식 4문(모두 ★2) · 실력 Up 3문(★4·★3·★4)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-CALC1-0582 | 도함수 그래프 + 함숫값 세 개로 f(x)+x+1=0 의 근 부호를 세는 문항. 통찰 2개(RT d2·CON d2)·M_total 9 로 +1 후보이나 구간별 단조성 대조로 정리되어 ★3 유지. 시험 구역 출발점(★2~3)보다 체감이 높음 | ★3 / ★4 |
| RPM-CALC1-0599 | 서술형 구역 ★3 출발이나 상수분리 기본형(RT d1 · M_total 6). 서술형 표시는 답안 형식 신호 | ★2 / ★3 |
| RPM-CALC1-0600 | 서술형 구역 ★3 출발이나 곡선·직선 교점 → 상수분리 기본형(RT d1 · M_total 6) | ★2 / ★3 |
| RPM-CALC1-0601 | 서술형 구역 ★3 출발이나 구간 부등식 → 차함수 최솟값 기본형(EQV d1 · M_total 6) | ★2 / ★3 |
| RPM-CALC1-0602 | 서술형 구역 ★3 출발이나 속도 곱 부호 기본형(EQV d1 · M_total 6) | ★2 / ★3 |
| RPM-CALC1-0604 | 실력 Up 구역 ★4 출발이나 04 단원 유형 UP 12(곡선 밖의 점에서 그은 접선의 개수 조건)와 같은 골조(EQV d2 · M_total 7) → ★3. 단원 간 같은 유형을 카탈로그에서 한 항목으로 묶을지 결정 필요 | ★3 / ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **시각에 대한 변화율**은 「길이가 일차로 변하는 도형의 넓이/부피」(0571·0572·0574·0576·0597 · 원·정삼각형·정육각형·구·정육면체는 공식만 다르고 골조 동일 → 한 유형으로 통합, base ★1~2)와 「닮음비로 한 변수를 없애는 원뿔 수면」(0575·0598 → 별도 유형, base ★2), 「두 동점이 만드는 도형」(0573 → 출발 시차 변형 포함, base ★2), 「그림자 끝의 속도」(0596 → 닮음 골조는 원뿔과 같지만 함정(길이 vs 끝 위치)이 달라 별도 항목 권장)으로 나누는 것이 좋다.
- **그래프 해석**은 「위치 그래프」(0577·0578)와 「속도 그래프」(0594)를 따로 세워야 한다. 위치 그래프는 기울기 = 속도, 속도 그래프는 부호 = 방향으로 읽는 축이 달라 학생 오류 유형이 다르다. 「도함수 그래프 → 원함수 개형 → 실근 개수」(0580·0581·0582)는 06-p1 의 유형(도함수 그래프와 방정식)과 같은 항목으로 묶되, 0582 처럼 함숫값 조건이 결합된 형태는 base ★3 의 하위 변형으로 표시.
- **방정식·부등식 활용**의 표준 골조(상수분리 0579·0599 · 교점 개수 0585·0600 · 모든 실수 부등식 0586·0587 · 구간 부등식 0588·0601 · 중근 조건 0584)는 모두 base ★2 로 두고, 근의 부호 배치(0583)와 절댓값 방정식으로 함수 결정(0603)은 별도 항목(base ★3 · ★4).
- **곡선 밖의 점에서 그은 접선의 개수**(0604)는 04 단원 유형 UP 12 와 같은 항목으로 통합하고, **공통접선 → 차함수 중근**(0605)은 04 단원 「두 곡선에 동시에 접하는 직선」과 구분되는 별도 항목(부등식 구간과 결합)으로 세운다.
- **서술형 주관식** 구역(4문 모두 ★2 판정)은 이 범위에서 난이도 신호로 쓰이지 않았다. 카탈로그의 base ★ 는 구역이 아니라 골조로 정해야 한다.
