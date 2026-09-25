---
name: mechanism-데이터-GN-CALC1-25
description: 개념원리 미적분Ⅰ 25 속도와 거리(1/1 · 223~227쪽 · 18문) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 미적분Ⅰ (22개정) · 전사본 latex-bank/gn-calc1
  section: 25 속도와 거리
  unit_code: CALC1-25
  part: "1/1"
  extract_range: "223~227쪽 · 223-e11~227-476"
  total_problems: 18
  unit_total: 18
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-calc1/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-calc1/items/<id>.tex
  image_source: latex-bank/gn-calc1/figures/ (crops.json)
---

# 개념원리 미적분Ⅰ · 25 속도와 거리 (1/1) 정독 데이터 (v1.0)

223~227쪽 18문 전수. 구역은 「필수·발전 예제」 7문(필수 예제 3 + 그 아래 확인체크 유제 4) · 「연습문제 STEP 1」 5문 · 「연습문제 STEP 2」 4문 · 「연습문제 실력 UP」 2문이다. 벤더 난이도 신호는 구역과 태그로 읽는다 — 필수 예제 ★2 · STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4 를 출발점으로 두고, 이 단원의 확인체크는 「개념원리 익히기」의 통번호가 아니라 **필수 예제 바로 아래 유제**이므로 예제와 같은 층(★2)에서 출발시켰다. 출발점에서는 통찰이 없고 M_total ≤ 5 일 때만 −1 했다.

단원 성격상 골조가 세 갈래로 반복된다 — ⑴ 속도식을 적분해 위치·위치의 변화량·움직인 거리를 구분하는 계열, ⑵ 위로 쏘아 올린 물체의 높이·최고점·움직인 거리 계열, ⑶ 속도 그래프의 부호 있는 넓이를 위치로, 넓이의 절댓값 합을 거리로 옮기는 계열. 그래프 계열에는 I-RT(기하 ↔ 대수 전환)를 depth 1 로 일관되게 붙였고, 「원점 복귀 시각」·「거리 조건으로 상수 결정」처럼 결과 조건에서 원인을 역추적하는 문항에만 I-BW 를 추가했다. 이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-CALC1-223-e11
  page: 223
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    좌표 $1$ 에서 출발한 점 P 의 속도가 $v(t)=6t^2-18t+12$ 일 때 ⑴ $t=2$ 에서의 위치 ⑵ $t=1$ 에서 $t=3$ 까지 위치의 변화량 ⑶ 같은 구간에서 움직인 거리.
  category: "속도 적분 → 위치·위치의 변화량·움직인 거리 3종 구분"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수직선 위를 움직이는 점의 위치와 움직인 거리"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    위치(초기 위치 + 적분) · 위치의 변화량(적분) · 움직인 거리(절댓값 적분) 세 개념을 한 문항에서 갈라 놓는 이 단원의 대표 골조.
    거리는 v 의 부호가 바뀌는 t=1, 2 에서 구간을 쪼개 |적분| 을 더해야 한다(T-부호).
    통찰 없이 표준 절차이고 M_total 6 → 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: 'v(t)=6(t-1)(t-2) 부호 분기 → 위치는 초기 위치 + 정적분, 거리는 구간별 정적분의 절댓값 합'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑴ $5$ ⑵ $4$ ⑶ $6$"
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/223-e11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "v(t)=a(t-p)(t-q) 의 근 p, q 와 초기 위치를 바꿀 수 있음. 제약: 적분 구간 안에 부호 변화가 최소 한 번 들어가야 ⑵와 ⑶ 의 답이 갈리고, 선행 계수를 6 처럼 두면 적분값이 정수로 떨어짐."
    creative: "(1) 초기 위치를 미지수로 두고 t=2 에서의 위치를 주어 역으로 구하게(★3 · I-BW) (2) '운동 방향을 바꾸는 시각' 을 먼저 묻고 그 시각까지의 거리로(★2 유지) (3) 구간을 넓혀 부호 변화 두 번을 모두 쓰게 하면 구간 분할이 3개 → ★3."
```

```yaml
- id: GN-CALC1-223-462
  page: 223
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    원점에서 출발한 점 P 의 속도가 $v(t)=-t^2-t+6$ 일 때 ⑴ 운동 방향을 바꿀 때의 위치 ⑵ $t=0$ 에서 $t=3$ 까지 위치의 변화량 ⑶ 같은 구간에서 움직인 거리.
  category: "v 의 부호 변화 시각 → 위치·변화량·거리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수직선 위를 움직이는 점의 위치와 움직인 거리"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    필수 예제 223-e11 의 유제. 같은 골조에 '운동 방향을 바꿀 때의 위치' 를 넣어 v=0 인 시각을 먼저 찾게 한다.
    답이 분수라 계산 부담은 조금 크지만 도구는 그대로이고 통찰은 없다. M_total 6 → ★2.
  tier: star_2
  mechanism_primary: 'v(t)=-(t+3)(t-2) → 방향 전환 t=2 → 위치는 0~2 적분, 거리는 0~2 적분과 2~3 적분의 절댓값 합'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{22}{3}$ ⑵ $\dfrac{9}{2}$ ⑶ $\dfrac{61}{6}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/223-462.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차 계수의 부호와 상수항(6)을 바꿔 양의 근을 정수로 유지. 제약: 양의 근이 적분 구간 안에 있어야 ⑴이 성립하고, 답을 정수로 만들려면 근을 3 의 배수 쪽으로 잡거나 선행 계수를 조정해야 함(현재는 분수 답)."
    creative: "(1) 속도를 -(t+3)(t-2) 대신 양수에서 시작해 두 번 부호가 바뀌게(★3) (2) ⑶ 의 거리를 주고 적분 구간의 끝을 묻기(★3 · I-BW) (3) 두 점의 속도를 주고 사이 거리를 묻는 비교형(★3)."
```

```yaml
- id: GN-CALC1-223-463
  page: 223
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $24\,\mathrm{m/s}$ 로 달리던 열차가 제동 후 $t$ 초일 때의 속도가 $v(t)=24-2t$ 일 때, 제동 후 정지할 때까지 달린 거리.
  category: "정지 시각(v=0) → 그때까지의 정적분"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직선 운동의 제동 거리(정지할 때까지 움직인 거리)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    v(t)=0 에서 t=12 를 얻고 0~12 을 적분하면 끝. 속도가 구간 내내 양수라 거리와 변위가 같아 부호 분기조차 없다.
    통찰 0 · M_total 4 → 확인체크 출발점 ★2 에서 −1.
    [분류 이슈] 필수 예제 아래 유제라는 위치 신호(★2)와 실제 노동량(★1)이 1단 어긋남 — 라벨은 ★1 로 두고 기록만 함.
  tier: star_1
  mechanism_primary: 'v(t)=24-2t=0 에서 정지 시각 t=12 → 0~12 정적분 → 144'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$144\,\mathrm{m}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/223-463.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초속도와 감속률(24 와 2)을 바꿀 수 있음. 제약: 정지 시각 = 초속도/감속률 이 정수가 되게 두면 거리가 깔끔하고, 거리는 초속도의 제곱에 비례하므로 값이 커지지 않게 조절."
    creative: "(1) 거리를 주고 감속률을 묻기(★2 · I-BW) (2) 제동 거리 안에 장애물을 두고 충돌 여부를 판정(★2 · I-VF) (3) 속도를 이차식으로 바꿔 정지 시각을 인수분해로 찾게(★2)."
```

```yaml
- id: GN-CALC1-224-e12
  page: 224
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    지상 $35\,\mathrm{m}$ 에서 위로 쏘아 올린 물체의 속도가 $v(t)=30-10t\ (0\le t\le 7)$ 일 때 ⑴ $5$ 초 후의 높이 ⑵ 최고 높이 ⑶ $5$ 초 동안 움직인 거리.
  category: "높이 = 초기 높이 + 적분 · 최고점은 v=0 · 거리는 상승분 + 하강분"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "위로 던진 물체의 위치와 움직인 거리"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑶ 이 함정의 핵심 — 5초 후 높이(60)와 초기 높이(35)의 차 25 가 아니라, 최고점 t=3 에서 구간을 쪼개 상승 45 와 하강 20 을 더한 65 다(T-부호·T-경계).
    도구는 적분 한 가지뿐이라 통찰은 없고 M_total 7 → 필수 예제 ★2 유지.
  tier: star_2
  mechanism_primary: '높이는 35 + 0~t 적분 → 최고점은 v=0 인 t=3 → 거리는 0~3 적분과 3~5 적분의 절댓값 합'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $60\,\mathrm{m}$ ⑵ $80\,\mathrm{m}$ ⑶ $65\,\mathrm{m}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/224-e12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초기 높이 35, 초속도 30, 중력 계수 10 을 바꿀 수 있음. 제약: 최고점 시각 = 초속도/10 이 정수여야 ⑵·⑶ 이 깔끔하고, ⑶ 의 관측 시각은 최고점 이후여야 변위와 거리가 갈린다. 상한 t≤7 은 물체가 지면에 닿는 시각 이하로 유지."
    creative: "(1) ⑶ 을 '지면에 닿을 때까지 움직인 거리' 로 바꾸면 도달 시각을 먼저 풀어야 함(★3 — 227-473 이 그 형태) (2) 두 물체를 시차를 두고 쏘아 만나는 시각을 묻기(★4 · I-CON) (3) 높이를 주고 초속도를 역으로 구하게(★3 · I-BW)."
```

```yaml
- id: GN-CALC1-224-464
  page: 224
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    지상에서 위로 던진 공의 속도가 $v(t)=-10t+60\ (0\le t\le 12)$ 일 때 ⑴ 최고 높이 ⑵ $8$ 초 동안 움직인 거리 ⑶ 땅에 떨어질 때의 속도.
  category: "최고점(v=0) · 상승+하강 거리 · 높이 0 인 시각의 속도"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "위로 던진 물체의 위치와 움직인 거리"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    224-e12 의 유제. ⑶ 에서 높이 식을 0 으로 놓아 t=12 를 얻고 그 값을 v 에 다시 넣는 왕복이 한 단계 더 붙지만, 조건이 직접 주어진 표준 절차라 통찰로 세지 않는다.
    ⑵ 는 최고점 t=6 에서 쪼개는 T-부호 함정. M_total 7 → ★2.
  tier: star_2
  mechanism_primary: '최고점은 v=0 인 t=6 → 거리는 0~6 적분과 6~8 적분의 절댓값 합 → 높이 식이 0 인 t=12 를 v 에 대입'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $180\,\mathrm{m}$ ⑵ $200\,\mathrm{m}$ ⑶ $-60\,\mathrm{m/s}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/224-464.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초속도 60 과 중력 계수 10 을 바꿀 수 있음. 제약: 지상 출발이므로 낙하 시각이 초속도/5 로 정해지고 ⑵ 의 관측 시각은 최고점과 낙하 시각 사이여야 함. 낙하 속도는 항상 초속도의 부호 반대값이라는 대칭이 ⑶ 의 점검 수단."
    creative: "(1) ⑶ 의 대칭(던진 속도 = 떨어지는 속도의 절댓값)을 근거까지 설명하게(★3 · I-SYM) (2) 지상이 아닌 건물 위에서 던져 대칭을 깨기(★3) (3) 최고 높이를 주고 초속도를 묻기(★3 · I-BW)."
```

```yaml
- id: GN-CALC1-225-e13
  page: 225
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    원점에서 출발한 점 P 의 $0\le t\le 6$ 에서의 속도 그래프(꺾은선)가 주어질 때 ⑴ $t=6$ 에서의 위치 ⑵ 두 번째로 운동 방향을 바꿀 때까지 움직인 거리.
  category: "속도 그래프의 부호 있는 넓이 → 위치 · 절댓값 넓이 합 → 거리"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "속도 그래프의 부호 있는 넓이를 위치로, 넓이의 절댓값 합을 움직인 거리로 전환(기하 ↔ 적분)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "속도 그래프에서의 위치와 움직인 거리"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    그래프는 t=0 에서 2, t=2 에서 0 을 지나 t=3~4 에서 -1, t=5 에서 0 을 지나 t=6 에서 1 인 꺾은선이다. 위치는 삼각형·직사각형 넓이를 부호대로 더해 1/2.
    ⑵ 의 '두 번째' 방향 전환은 t=5 이므로 0~5 구간 넓이의 절댓값 합 4(T-경계 — t=6 까지가 아니다).
    그래프 → 적분 전환 통찰 1개(RT d1) · M_total 6 → 필수 예제 ★2 유지.
  tier: star_2
  mechanism_primary: '꺾은선을 삼각형·직사각형으로 분할해 부호 있는 넓이 합 → 위치, v 의 부호 변화 시각(t=2, 5)에서 끊어 절댓값 넓이 합 → 거리'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $\dfrac{1}{2}$ ⑵ $4$'
  answer_source: "본문 풀이"
  figure: "crop:fig-225-e13.png"
  latex: latex-bank/gn-calc1/items/225-e13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "꺾은점의 세로값(2, -1, 1)과 가로 위치(2, 3, 4, 5, 6)를 바꿀 수 있음. 제약: 넓이가 삼각형·사다리꼴로 떨어지게 격자점에 꺾은점을 두고, 부호 변화가 두 번 이상 있어야 '두 번째 방향 전환' 이 성립한다. 그림 라벨과 답이 함께 움직이므로 그림 재생성 필수."
    creative: "(1) ⑴ 을 '위치가 최소가 되는 시각' 으로 바꾸기(★3 · I-BW) (2) 그래프의 한 꺾은점 값을 문자로 두고 t=6 위치를 주어 역산(★3 — 227-474 형태) (3) 마지막 구간을 곡선으로 바꿔 넓이를 적분으로 계산하게(★3)."
```

```yaml
- id: GN-CALC1-225-465
  page: 225
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    원점에서 출발한 점 P 의 $0\le t\le 5$ 에서의 속도 그래프(꺾은선)가 주어질 때 ⑴ $t=5$ 에서의 위치 ⑵ 운동 방향을 바꿀 때까지 움직인 거리 ⑶ $t=0$ 에서 $t=5$ 까지 움직인 거리.
  category: "속도 그래프의 넓이 → 위치 · 방향 전환 전후 거리"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "그래프의 부호 있는 넓이를 위치로, 부호 변화 시각에서 끊은 절댓값 넓이 합을 거리로 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "속도 그래프에서의 위치와 움직인 거리"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    그래프는 t=1 에서 2 까지 올라가 t=2 까지 유지되고 t=4 에서 0 을 지나 t=5 에서 -1 이 되는 꺾은선.
    ⑵ 와 ⑶ 을 나란히 물어 '변위와 거리가 갈리는 지점은 v 의 부호가 바뀌는 t=4' 라는 것을 직접 드러낸다(⑴ 9/2 와 ⑶ 11/2 의 차이가 하강분의 두 배).
    RT d1 하나 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: '삼각형·직사각형·사다리꼴 넓이 합 → t=5 위치, 부호 변화 시각 t=4 에서 끊어 앞뒤 넓이의 절댓값 합 → 거리'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $\dfrac{9}{2}$ ⑵ $5$ ⑶ $\dfrac{11}{2}$'
  answer_source: "답지"
  figure: "crop:fig-225-465.png"
  latex: latex-bank/gn-calc1/items/225-465.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "최고 속도 2, 평탄 구간 [1,2], 영점 4, 끝값 -1 을 바꿀 수 있음. 제약: 영점이 구간 안에 있어야 ⑵·⑶ 이 갈리고, 꺾은점을 격자점에 두면 넓이가 정수·반정수로 떨어진다."
    creative: "(1) ⑶ 의 거리를 주고 끝값(-1)을 역산(★3 · I-BW) (2) 그래프를 t 축 아래에서 시작하게 만들어 첫 방향 전환이 나중에 오게(★3) (3) 같은 그래프로 '위치의 최댓값' 을 묻기(★3)."
```

### 연습문제 STEP 1

```yaml
- id: GN-CALC1-226-466
  page: 226
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    원점에서 출발한 점 P 의 속도가 $v(t)=6t-3t^2$ 일 때, $t=3$ 에서의 위치를 $a$, $t=0$ 에서 $t=3$ 까지 움직인 거리를 $b$ 라 할 때 $a+b$.
  category: "같은 구간의 변위(a)와 거리(b)를 한 문항에서 대비"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수직선 위를 움직이는 점의 위치와 움직인 거리"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    v(t)=3t(2-t) 이므로 t=2 에서 부호가 바뀐다. 변위는 양·음 넓이가 상쇄돼 a=0 이고 거리는 두 넓이의 절댓값 합 b=8 — 변위와 거리의 차이를 a+b 라는 한 값으로 묻는 구성.
    도구는 예제와 같고 통찰은 없다. M_total 6 → STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: 'v(t)=3t(2-t) → 0~3 적분으로 a, t=2 에서 끊은 0~2 와 2~3 적분의 절댓값 합으로 b → a+b'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$8$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/226-466.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "v 의 두 근(0 과 2)과 선행 계수 3, 관측 시각 3 을 바꿀 수 있음. 제약: 관측 시각이 두 번째 근보다 커야 상쇄가 생기고, a=0 이 되게 하려면 관측 시각을 넓이가 정확히 상쇄되는 값으로 잡아야 한다(현재 설정의 묘미)."
    creative: "(1) a=0 이 되는 시각 자체를 묻기(★2 · I-BW — 226-471 형태) (2) b 를 주고 관측 시각을 역산(★3 — 227-472 형태) (3) a 와 b 의 비를 묻기(★3)."
```

```yaml
- id: GN-CALC1-226-467
  page: 226
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    원점을 동시에 출발한 두 점 P, Q 의 속도가 각각 $v_1(t)=3t^2-8t+4$, $v_2(t)=12-8t$ 일 때 두 점이 다시 만나는 시각.
  category: "만난다 → 위치가 같다 → 속도 차의 적분이 0"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'다시 만난다' 를 '두 위치 함수가 같다' 로 옮겨 속도 차의 정적분이 0 인 시각을 찾는 조건으로 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 점이 다시 만나는 시각(위치 함수의 일치)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    출발점이 같으므로 만나는 조건은 두 속도 차의 0~t 적분이 0, 즉 t(t^2-8)=0 → t=2√2.
    '만난다'를 위치 등식으로 옮기는 동치 변환이 유일한 사고 지점이고(EQV d1) 나머지는 삼차식 인수분해.
    t=0 은 출발 시각이므로 버려야 하는 것이 T-범위 함정. M_total 6 → STEP 1 ★2 유지.
  insight_type: 통찰형
  tier: star_2
  mechanism_primary: '두 위치가 같다 → 속도 차 v1-v2 의 0~t 적분 = 0 → t(t^2-8)=0 → 출발 시각 t=0 을 버리고 t=2√2'
  target_cohort: 중위권
  answer: '$2\sqrt{2}$초'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/226-467.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "v1 의 계수(3, -8, 4)와 v2 의 계수(12, -8)를 바꿀 수 있음. 제약: 속도 차의 적분이 t·(이차식) 으로 인수분해돼야 하고, 이차식의 양근이 하나만 나와야 답이 유일하다. 두 속도의 일차항을 같게 두면 t^2 항이 사라져 식이 깔끔해진다(현재 -8 이 그 역할)."
    creative: "(1) 출발 위치를 다르게 주어 상수항이 살아 있게(★3 · I-CON) (2) '두 점 사이의 거리가 최대' 인 시각을 묻기(★3 · I-BW) (3) 두 점이 만나는 위치까지 묻기(★3)."
```

```yaml
- id: GN-CALC1-226-468
  page: 226
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: ["평가원 기출"]
  category_type: "연습문제"
  summary: |
    속도가 $v(t)=3t^2-4t+k$ ($k$ 는 상수)인 점 P 의 $t=0$ 에서의 위치가 $0$, $t=1$ 에서의 위치가 $-3$ 일 때 $t=1$ 에서 $t=3$ 까지 위치의 변화량.
  category: "위치 조건으로 미정계수 결정 → 다른 구간의 변화량"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "속도에 미정계수가 있는 직선 운동(위치 조건으로 상수 결정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    0~1 적분이 k-1 = -3 에서 k=-2, 이어서 1~3 적분으로 6. 묻는 것이 '위치의 변화량' 이라 부호 분기가 필요 없어 거리 함정이 없다.
    미정계수 대입은 스키마상 표준 절차이므로 통찰로 세지 않았다. 매개변수 k 로 Mₐ=2, M_total 7.
    기출 태그는 +0~1 이지만 통찰이 없어 +0 → STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: '0~1 적분 = k-1 = -3 → k=-2 → 1~3 적분 = 6'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$6$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/226-468.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "v 의 이차·일차 계수(3, -4)와 주어진 위치값(-3), 묻는 구간(1~3)을 바꿀 수 있음. 제약: 0~1 적분이 k 의 일차식이어야 k 가 한 번에 결정되고, 묻는 구간의 적분이 정수로 떨어지도록 계수를 정수로 유지."
    creative: "(1) 묻는 것을 '위치의 변화량' 대신 '움직인 거리' 로 바꾸면 v 의 부호 분기가 살아나 ★3 (2) k 의 범위 조건(운동 방향을 두 번 바꾼다 등)을 주고 k 를 묻기(★4 · I-BW+I-MI) (3) t=1 위치 대신 최솟값 위치를 주기(★3)."
```

```yaml
- id: GN-CALC1-226-469
  page: 226
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    지면에서 출발한 열기구의 속도가 $0\le t\le 20$ 에서 $t$, $20\le t\le 40$ 에서 $60-2t$ 인 조각 함수일 때, 출발 $35$ 분 후의 지면으로부터의 높이.
  category: "조각 함수 구간 분할 적분 → 높이"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구간별로 다른 속도(조각 함수)의 위치·높이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    0~20 넓이 200 에 20~35 의 부호 있는 넓이 75 를 더해 275. 두 번째 구간의 속도가 t=30 에서 0 을 지나 음수가 되므로 열기구는 올라갔다 내려온다(T-부호).
    묻는 것이 거리가 아니라 높이라서 정적분이 부호를 알아서 처리해 주는 것이 이 문항의 요령. 통찰은 없고 M_total 7 → ★2.
  tier: star_2
  mechanism_primary: '조각 함수를 구간별로 적분 → 0~20 넓이 200 + 20~30 넓이 100 + 30~35 넓이 -25 → 275'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$275\,\mathrm{m}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/226-469.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이음점 20, 두 번째 구간 식의 계수(60, -2), 관측 시각 35 를 바꿀 수 있음. 제약: 이음점에서 두 식의 값이 같아야 연속(현재 20 = 60-40)이고, 관측 시각을 속도의 영점(30)보다 뒤에 두어야 하강 구간이 살아난다."
    creative: "(1) '35분 동안 움직인 거리' 로 바꾸면 t=30 에서 쪼개야 해서 ★3 (2) 최고 높이와 그 시각을 묻기(★3) (3) 지면으로 돌아오는 시각을 묻기(★4 · I-BW — 이음점 넘는 방정식)."
```

```yaml
- id: GN-CALC1-226-470
  page: 226
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    원점에서 출발한 점 P 의 속도 그래프(꺾은선)가 주어질 때, 출발 후 처음으로 다시 원점에 돌아올 때까지 걸리는 시간.
  category: "그래프의 양의 넓이 = 음의 넓이가 되는 시각"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "속도 그래프의 부호 있는 넓이를 위치로 전환"
    - step: 2
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'원점으로 돌아온다' 는 결과 조건에서 양의 넓이와 음의 넓이가 상쇄되는 시각을 역추적"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "속도 그래프에서 원점으로 돌아오는 시각"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    그래프는 t=1 에서 1 로 올라갔다 t=2 에서 0 을 지나 t=3 에서 -2 까지 내려가고 t=4 에서 다시 0 을 지난다.
    0~2 의 양의 넓이 1 과 2~3 의 음의 넓이 -1 이 상쇄되므로 t=3. 넓이 계산은 삼각형 두 개로 끝나 계산 부담이 없다.
    통찰 2개지만 둘 다 depth 1 이고 이 단원에서 반복 학습되는 표준 골조라 +1 하지 않고 STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: '그래프 넓이 = 위치 → 0~2 양의 넓이 1 과 2~3 음의 넓이 -1 이 같아지는 시각 → t=3'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$3$초"
  answer_source: "답지"
  figure: "crop:fig-226-470.png"
  latex: latex-bank/gn-calc1/items/226-470.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "꺾은점의 세로값(1, -2)과 가로 위치(1, 2, 3, 4)를 바꿀 수 있음. 제약: 상쇄가 일어나는 시각이 꺾은점과 일치해야 답이 정수로 떨어진다. 음의 넓이 쪽 기울기를 바꾸면 상쇄 시각이 무리수가 되므로 주의. 그림 라벨과 답이 연동."
    creative: "(1) 상쇄 시각을 꺾은점 사이에 두어 이차방정식을 풀게(★3) (2) '두 번째로 원점에 돌아오는 시각' 으로 확장(★3 · I-MI) (3) 넓이 조건을 문자로 주고 그래프의 미지수를 역산(★4 — 227-476 형태)."
```

### 연습문제 STEP 2

```yaml
- id: GN-CALC1-226-471
  page: 226
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    원점에서 출발한 점 P 의 속도가 $-9t+18$ 일 때, 원점으로 다시 돌아올 때까지 움직인 거리.
  category: "원점 복귀 시각 → 그때까지의 절댓값 적분"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'원점으로 돌아온다' 는 결과 조건에서 위치 함수가 0 이 되는 시각을 역추적해 적분 구간을 스스로 정함"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "원점으로 돌아올 때까지 움직인 거리"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    적분 구간이 문제에 없고 위치 식이 0 이 되는 t=4 를 스스로 만들어야 한다는 점이 226-466 과의 차이(I-BW d1).
    구간을 얻은 뒤에는 방향 전환 t=2 에서 쪼개 18 + 18 = 36, 또는 최대 위치의 두 배로 바로 끝난다.
    [분류 이슈] 노동량은 M_total 5 로 가벼워 ★2 쪽이지만 STEP 2 신호와 구간 자작 요구를 존중해 ★3 으로 둠(1단 차이).
  tier: star_3
  mechanism_primary: '위치 식 -4.5t^2+18t = 0 → 복귀 시각 t=4 → 방향 전환 t=2 앞뒤 넓이 18 과 -18 의 절댓값 합 36'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$36$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/gn-calc1/items/226-471.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차식의 기울기와 절편(-9, 18)을 바꿀 수 있음. 제약: 복귀 시각은 절편/기울기의 두 배이므로 정수로 떨어지게 두 값을 잡고, 거리는 최대 위치의 두 배라는 대칭이 항상 성립한다."
    creative: "(1) 속도를 이차식으로 바꿔 복귀 시각이 삼차방정식에서 나오게(★4) (2) 움직인 거리를 주고 절편을 역산(★4 · I-BW d2) (3) '원점으로 돌아올 때의 속도' 를 묻기(★2 — 대칭 활용)."
```

```yaml
- id: GN-CALC1-227-472
  page: 227
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    원점에서 출발한 점 P 의 속도가 $v(t)=6t^2-12t$ 이고 $t=0$ 에서 $t=a$ 까지 움직인 거리가 $48$ 일 때 $v(a)$.
  category: "움직인 거리 조건 → 구간 끝 a 역추적 → 속도값"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "거리 48 이라는 결과에서 a 를 역추적 — 거리를 a 의 삼차식으로 세운 뒤 방정식을 풀어야 함"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "움직인 거리 조건으로 구간 끝 시각 역추적"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    v(t)=6t(t-2) 이므로 거리는 t=2 에서 쪼개야 하고, a≤2 면 거리가 최대 8 뿐이라 48 이 될 수 없다는 범위 점검이 먼저다(T-범위).
    a>2 에서 거리 = 8 + (x(a)-x(2)) 를 a 의 삼차식으로 세워 풀면 a=4, 이어서 v(4).
    거리 조건에서 구간 끝을 역추적하는 깊이 2 통찰 1개 · M_total 8 → STEP 2 ★3 유지.
  tier: star_3
  mechanism_primary: 'v=6t(t-2) 부호 분기 → a>2 확인 → 거리 = 8 + (x(a)-x(2)) 를 a 의 삼차식으로 세워 a=4 → v(4)'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$48$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/227-472.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "선행 계수 6 과 두 번째 근 2, 거리 조건 48 을 바꿀 수 있음. 제약: 거리 방정식이 유리근을 갖도록 조건값을 정해야 한다(현재 a^3-3a^2-16=0 이 a=4 를 갖는 조합). 조건 거리는 t=2 까지의 거리(8)보다 충분히 커야 a>2 가 강제된다."
    creative: "(1) 거리 대신 '위치의 변화량' 을 주면 부호 분기가 사라져 ★2 (2) 조건을 '거리가 변위의 k 배' 로 바꾸기(★4 · I-EQV) (3) a 를 두 개 허용하는 값으로 두고 모든 a 를 구하게(★4 · I-MI)."
```

```yaml
- id: GN-CALC1-227-473
  page: 227
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    지상 $20\,\mathrm{m}$ 에서 위로 쏘아 올린 물체의 속도가 $v(t)=15-10t\ (0\le t\le 4)$ 일 때, 지면에 도달할 때까지 움직인 거리.
  category: "높이 식 → 최고점에서 분할 → 상승 거리 + 하강 거리"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "위로 쏘아 올린 물체가 지면에 도달할 때까지 움직인 거리"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    높이 20+15t-5t^2 의 최고점은 t=3/2 에서 125/4. 움직인 거리는 상승분 45/4 와 하강분 125/4 의 합 85/2 로, 변위(-20)와 완전히 다르다(T-부호).
    도달 시각은 발문의 범위 0≤t≤4 가 알려 주므로 역추적 부담이 줄어 통찰로 세지 않았다.
    절차형이지만 분할이 두 겹이고 분수 계산이 무거워 M_total 7 → STEP 2 ★3 유지.
  tier: star_3
  mechanism_primary: '높이 = 20 + 0~t 적분 → 최고점 t=3/2 에서 125/4 → 상승 45/4 + 하강 125/4 = 85/2'
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{85}{2}\,\mathrm{m}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/227-473.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초기 높이 20, 초속도 15, 중력 계수 10 을 바꿀 수 있음. 제약: 초속도/10 이 최고점 시각이라 15 처럼 홀수를 쓰면 분수 답이 되고 30 처럼 쓰면 정수 답이 된다. 발문의 상한은 높이가 0 이 되는 시각과 일치시켜야 한다(현재 t=4)."
    creative: "(1) 상한을 주지 않고 도달 시각까지 구하게 하면 ★3 상단~★4 (2) '지면 도달 속도' 를 함께 묻기(★3) (3) 최고 높이를 주고 초속도를 역산(★4 · I-BW)."
```

```yaml
- id: GN-CALC1-227-474
  page: 227
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    원점에서 출발한 점 P 의 $0\le t\le 6$ 속도 그래프(세로 라벨 $a$, $2a$, $-a$)가 주어지고 $t=3$ 에서의 위치가 $\dfrac{7}{2}$ 일 때, $t=0$ 에서 $t=6$ 까지 움직인 거리.
  category: "그래프 넓이를 문자로 세워 a 결정 → 절댓값 넓이 합"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "그래프의 부호 있는 넓이를 위치로, 절댓값 넓이 합을 거리로 전환"
    - step: 2
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "t=3 에서의 위치 7/2 라는 결과 조건에서 그래프의 세로 축척 a 를 역추적"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "속도 그래프에 미지수가 있는 위치·움직인 거리"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    0~3 넓이는 삼각형 a/2 와 사다리꼴 3a 의 합 7a/2 이고 이것이 7/2 이므로 a=1 — 그림의 세로 라벨이 미지수라는 점이 225-e13 계열과의 결정적 차이.
    a 를 얻은 뒤 3~4 의 양의 넓이 1 과 4~6 의 음의 넓이 -1 을 절댓값으로 더해 11/2.
    통찰 2개(RT d1 · BW d1) · M_total 7 → STEP 2 ★3 유지.
  tier: star_3
  mechanism_primary: '0~3 넓이 = 7a/2 = 7/2 → a=1 → 3~4 넓이 1 과 4~6 넓이 -1 을 절댓값으로 더해 7/2+1+1 = 11/2'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{11}{2}$'
  answer_source: "답지"
  figure: "crop:fig-227-474.png"
  latex: latex-bank/gn-calc1/items/227-474.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세로 라벨 비(a, 2a, -a)와 꺾은점 가로 위치(1, 3, 4, 6), 주어진 위치값(7/2)을 바꿀 수 있음. 제약: 주어진 위치가 a 의 일차식이어야 a 가 한 번에 결정되고, 조건을 주는 시각(3)은 v 의 영점(4) 앞에 두어야 부호 분기가 뒤로 남는다. 그림 라벨과 답이 연동."
    creative: "(1) 조건을 't=6 에서의 위치' 로 옮기면 상쇄 때문에 a 결정이 한 단계 더 필요해 ★4 (2) 거리를 주고 a 를 묻기(★4) (3) 영점 t=4 를 문자로 두고 두 미지수를 연립(★4 · I-CON)."
```

### 연습문제 실력 UP

```yaml
- id: GN-CALC1-227-475
  page: 227
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제"
  summary: |
    속도가 $v(t)=3(t-2)(t-a)$ ($a>2$), $t=0$ 에서의 위치가 $0$ 인 점 P 에 대해 $t>0$ 에서 위치가 $0$ 이 되는 순간이 한 번뿐일 때 $v(8)$. 5지선다.
  category: "위치가 0 이 되는 횟수 조건 → 극솟값 0 → 상수 결정"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "v 의 부호(0~2 양 · 2~a 음 · a 이후 양)를 위치 x 의 증가–감소–증가 개형으로 전환"
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'위치가 0 이 되는 순간이 한 번뿐' 이라는 결과에서 극솟값 x(a)=0 이어야 함을 역추적"
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "x(a)>0 (t>0 에서 0 이 없음) · x(a)<0 (두 번) · x(a)=0 세 경우 중 앞의 둘을 조건 위배로 기각"
  insight_count: 3
  depth_score: 1.67
  type_id: null
  type_hint: "위치가 0 이 되는 횟수 조건으로 속도 식의 상수 결정"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    x(0)=0 이므로 t>0 에서 x 는 t=2 까지 증가해 양수, t=a 까지 감소, 이후 증가한다. 따라서 '0 이 되는 순간이 정확히 한 번' 은 극솟값 x(a)=0 과 동치 — 나머지 두 경우는 각각 '0 번' 과 '두 번' 이라 기각된다.
    x(a) 를 a 로 정리하면 a^2(3-a/2)=0 에서 a=6, v(8)=3·6·2=36.
    증감 개형 전환(RT d1) · 횟수 조건 역추적(BW d2) · 경우 기각(VF d2) 3개 · M_total 9 → 실력 UP ★4.
    [분류 이슈] 통찰 3개이고 I-VF 를 포함해 산식상 ★5 자격 조건은 충족하지만, 교육청 4점 표준 난도라 ★4 로 둠(★4/★5 후보).
  tier: star_4
  mechanism_primary: 'v 의 부호 → x 는 t=2 극대·t=a 극소 → 0 이 한 번뿐 = 극솟값 x(a)=0 → a^2(3-a/2)=0 에서 a=6 → v(8)=36'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/227-475.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "선행 계수 3, 첫 근 2, 묻는 시각 8 을 바꿀 수 있음. 제약: x(a)=0 이 a 에 대해 깔끔한 근을 갖도록 첫 근과 선행 계수를 맞춰야 한다(현재 첫 근 2 · 계수 3 에서 a=6 = 첫 근의 3배). 묻는 시각은 a 보다 커야 선택지가 양수로 벌어진다."
    creative: "(1) '0 이 되는 순간이 두 번' 으로 바꾸면 부등식 범위 문제가 되어 ★4~5 · I-MI (2) x(0) 을 0 이 아닌 값으로 주면 기각 구조가 바뀜(★5 후보) (3) '운동 방향을 두 번 바꾼다' 는 조건을 함께 걸어 a 의 범위를 좁히기(★4)."
```

```yaml
- id: GN-CALC1-227-476
  page: 227
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    원점에서 출발한 점 P 의 속도 그래프(영점 $a$, $b$ 와 극소 시각 $c$)가 주어지고, 처음 운동 방향을 바꿀 때의 위치가 $-10$, $t=c$ 에서의 위치가 $-8$, $0$ 에서 $b$ 까지의 적분과 $b$ 에서 $c$ 까지의 적분이 같을 때, $t=a$ 에서 $t=b$ 까지 움직인 거리.
  category: "구간 넓이를 미지수로 두고 세 조건을 연립 → 한 구간의 넓이"
  M: {s: 3, k: 1, a: 3, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "그래프의 구간별 부호 있는 넓이를 위치로, a~b 에서 v>0 이므로 그 넓이를 그대로 움직인 거리로 전환"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "세 조건(첫 방향 전환 위치 -10 · t=c 위치 -8 · 두 적분이 같음)을 구간 넓이 세 개의 연립식으로 통합해 원하는 넓이만 뽑아냄"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "속도 그래프의 넓이 조건 통합(위치·움직인 거리)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    구간 넓이를 S1(0~a) · S2(a~b) · S3(b~c) 로 두면 S1=-10, S1+S2+S3=-8, S1+S2=S3. 앞의 둘에서 2·S3=-8 → S3=-4, 이어서 S2=6.
    그래프의 모양을 몰라도 조건만으로 답이 나온다는 것이 이 문항의 급소이고, 개별 넓이를 계산하려 들면 풀리지 않는다.
    a~b 에서 v>0 이라 거리 = S2 그대로. 넓이 자체가 미지수라 Mₐ=3 · M_total 9 · 통찰 2개(RT d1 · CON d2) → 실력 UP ★4.
  tier: star_4
  mechanism_primary: '구간 넓이를 S1, S2, S3 로 두고 S1=-10 · S1+S2+S3=-8 · S1+S2=S3 연립 → S3=-4 → S2=6 → a~b 거리 = 6'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: "$6$"
  answer_source: "답지"
  figure: "crop:fig-227-476.png"
  latex: latex-bank/gn-calc1/items/227-476.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주어진 두 위치값(-10, -8)을 바꿀 수 있음. 제약: t=c 위치가 짝수여야 S3 가 정수로 떨어지고(2·S3 = x(c)), S2 = x(c)/2 - x(a) 가 양수여야 a~b 에서 v>0 이라는 그래프 부호와 모순되지 않는다. 그림의 영점 라벨 a, b, c 는 고정."
    creative: "(1) 묻는 것을 't=c 까지 움직인 거리' 로 바꾸면 S1, S2, S3 를 모두 써야 해서 ★4 상단 (2) 두 적분이 같다는 조건 대신 'x(b)=0' 을 주면 연립 구조가 바뀜(★4) (3) b~c 넓이와 a~b 넓이의 비를 조건으로 주기(★5 후보 · I-CON d3)."
```

## 표본 판정 요약 (18문)

- ★ 분포: ★1 1 · ★2 11 · ★3 4 · ★4 2 · ★5 0
- 통찰형 9 · 절차형 9 · premium 0
- 통찰 유형 분포(연 12개 라벨): I-RT 6 · I-BW 5 · I-EQV 1 · I-CON 1 · I-VF 1 (depth 3 없음 · depth 2 는 4개)
- type_hint 상위 5: 「수직선 위를 움직이는 점의 위치와 움직인 거리」 3 · 「속도 그래프에서의 위치와 움직인 거리」 2 · 「위로 던진 물체의 위치와 움직인 거리」 2 · 「원점으로 돌아올 때까지 움직인 거리 / 원점으로 돌아오는 시각」 2 · 나머지 9종 각 1
- 대상층: 하위권 1 · 중하위권 7 · 중위권 8 · 중상위권 1 · 상위권 1
- 그림: 5문(`crop:fig-225-e13.png` · `crop:fig-225-465.png` · `crop:fig-226-470.png` · `crop:fig-227-474.png` · `crop:fig-227-476.png`)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CALC1-223-463 | 필수 예제 아래 유제(확인체크)라는 위치 신호는 ★2 이나 통찰 0 · M_total 4 로 단원에서 가장 가벼움. 라벨은 ★1 | ★1 / ★2 |
| GN-CALC1-226-471 | STEP 2 신호는 ★3 이나 노동량 M_total 5 · 통찰 1개(d1)로 STEP 1 문항들과 같은 수준. 라벨은 ★3 유지 | ★2 / ★3 |
| GN-CALC1-227-475 | 통찰 3개 + I-VF 포함으로 v3.8 ★5 자격 조건은 충족하나 교육청 4점 표준 난도. 라벨은 ★4 | ★4 / ★5 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형** — ⑴ 「속도식 → 위치·변화량·거리」(223-e11 · 223-462 · 226-466)와 ⑵ 「속도 그래프 → 위치·거리」(225-e13 · 225-465 · 226-470 · 227-474 · 227-476)는 도구가 같아도 학생 체감이 다르다. 그래프 계열은 적분 계산 대신 도형 넓이 분할이 주 작업이고 I-RT 가 항상 붙으므로 별도 유형이 맞다.
- **통합해도 될 유형** — 「위로 던진 물체」(224-e12 · 224-464 · 227-473)는 ⑴ 계열의 물리 맥락 변형일 뿐이라 base ★ 를 공유하는 하위 유형으로 묶어도 된다. 「제동 거리」(223-463)도 같은 가지의 최하단.
- **★4 이상 변별 슬롯 후보** — 「결과 조건 역추적」(226-471 · 227-472 · 227-474)과 「횟수·넓이 조건 통합」(227-475 · 227-476). 이 단원에서 ★4 를 만드는 것은 계산량이 아니라 *적분 구간이나 그래프의 미지수를 학생이 스스로 만들게 하는가* 이므로, 카탈로그의 base ★ 도 이 축으로 갈라야 한다.
- **이 범위에 없는 유형** — 속도–시간 그래프에서 가속도를 함께 묻는 문항, 두 물체의 거리 최댓값, 정적분으로 정의된 함수와의 결합이 없다. 카탈로그에서는 인접 단원(정적분의 활용·넓이)에서 채워야 한다.
