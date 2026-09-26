---
name: mechanism-데이터-RPM-PROB-02-p3
description: RPM 확률과 통계 02 확률의 뜻과 활용(3/3 · 유형 13 ~ 실력 Up) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: RPM 확률과 통계 (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-prob
  section: 02 확률의 뜻과 활용
  unit_code: PROB-02
  part: "3/3"
  extract_range: "34~38쪽 · 0197~0234"
  total_problems: 38
  unit_total: 99
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-prob/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-prob/items/<id>.tex
  image_source: latex-bank/rpm-prob/figures/ (crops.json)
---

# RPM 확률과 통계 · 02 확률의 뜻과 활용 (3/3) 정독 데이터 (v1.0)

이 파일은 RPM 확률과 통계 2단원의 마지막 3분의 1(34~38쪽 · 전사본 0197~0234 · 38문항)을 다룬다. 구역은 「유형 13 여사건의 확률」 4문 · 「유형 UP 14 기하적 확률」 3문 · 「시험에 꼭 나오는 문제」 24문 · 「서술형 주관식」 4문 · 「실력 Up」 3문으로, 앞 두 파트와 달리 교과서 구역이 없고 중단원 종합·심화가 대부분이다.

벤더 난이도 신호는 구역(유형 / 유형 UP / 시험에 꼭 나오는 문제 / 서술형 주관식 / 실력 Up) · 난이도 표시(하~상) · 태그(대표문제 · 중요 · 평가원/수능 기출)의 세 가지다. 이 범위에서는 level 표시가 붙은 문항이 5개뿐(0198~0200 중 · 0202 중 · 0203 상중)이어서 대부분 구역 신호를 출발점으로 삼고 M_total·통찰로 ±1 조정했다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 풀이 골조 한 줄(`mechanism_primary`) · 통찰 라벨(`insights[]`) · 변형 여지와 제약(`variation_notes`)을 채웠다. 답(`answer`)은 전사·검수 단계에서 답지 대조를 마친 값을 그대로 옮긴 것이며, 여기서 재검산하지 않았다.

## 문항 데이터

### 유형 13 여사건의 확률; `이상', `이하', `아닌'의 조건

```yaml
- id: RPM-PROB-0197
  page: 34
  vendor_label: "유형 13 여사건의 확률; `이상', `이하', `아닌'의 조건"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    검은 구슬 5개·흰 구슬 4개에서 4개를 동시에 꺼낼 때 검은 구슬이 2개 이하로 나올 확률.
  category: "여사건 전환 → 검은 3·4개 경우 수 → 1에서 빼기"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "여사건의 확률 — '이하' 조건의 조합 추출"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    '2개 이하'를 0·1·2개로 직접 세면 세 항, 여사건(3·4개)은 두 항이라 여사건이 표준 경로다.
    유형 제목이 이미 여사건을 지시하므로 전환 자체는 통찰로 세지 않았다.
    유형 구역 대표문제·통찰 0·M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "검은 2개 이하 → 여사건(검은 3개·4개) → 1 − {C(5,3)C(4,1)+C(5,4)}/C(9,4)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{9}{14}$'
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-prob/items/0197.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구슬 개수 (5,4)·꺼내는 개수 4·기준 '2개 이하'를 바꿀 수 있다. 제약: 여사건 항 수가 직접 세는 항 수보다 적어야 여사건이 유리하고, 꺼내는 개수는 각 색의 개수를 넘지 않아야 하며 답이 기약분수로 떨어지게 둘 것."
    creative: "(1) '흰 구슬이 적어도 2개'로 뒤집어 같은 골조 유지(★2) (2) 꺼내는 개수를 3·5로 바꿔 항 수만 조절(★2) (3) 색을 3종으로 늘려 '검은 2개 이하'가 여러 색 조합으로 갈리면 케이스 분기가 생겨 ★3."
```

```yaml
- id: RPM-PROB-0198
  page: 34
  vendor_label: "유형 13 여사건의 확률; `이상', `이하', `아닌'의 조건"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    할아버지와 할머니를 포함한 8명이 일렬로 설 때 두 사람이 서로 이웃하지 않을 확률.
  category: "여사건 전환 → 두 사람 묶음 순열 → 1에서 빼기"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "여사건의 확률 — 이웃하지 않을 확률"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    '이웃하지 않는다'의 여사건은 '이웃한다'이고, 묶음 순열 2×7! 은 유형 표준 도구다.
    분모 8! 과 약분하면 한 줄로 끝나 통찰은 없다. level 중·M_total 5 → ★2 유지(−1 후보였으나
    8명 팩토리얼 처리 부담으로 벤더 신호를 따랐다).
  tier: star_2
  mechanism_primary: "이웃하지 않음 → 여사건(두 사람 한 묶음) → 1 − 2×7!/8!"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{3}{4}$'
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-prob/items/0198.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "총 인원 8을 6·7·10 등으로 바꿀 수 있다(확률은 1 − 2/n 꼴). 제약: 이웃 대상은 2명으로 고정해야 묶음 순열 한 번으로 끝난다."
    creative: "(1) 이웃해야 하는 사람을 3명으로 늘리면 묶음 내부 3! 이 붙어 ★2 유지·계산만 증가 (2) '할아버지와 할머니 사이에 적어도 2명'으로 바꾸면 여사건 항이 늘어 ★3 (3) 원형 배열로 바꾸면 분모가 (n−1)! 이 되어 표현 전환 통찰이 생기며 ★3."
```

```yaml
- id: RPM-PROB-0199
  page: 34
  vendor_label: "유형 13 여사건의 확률; `이상', `이하', `아닌'의 조건"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    O, X로 답하는 5문제에 임의로 답할 때 2문제 이상 맞힐 확률. 5지선다.
  category: "여사건 전환 → 0문제·1문제 맞히는 경우 → 1에서 빼기"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "여사건의 확률 — '적어도 n개 맞히기'"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    '2문제 이상'은 네 항, 여사건 '0문제 또는 1문제'는 두 항이라 여사건이 표준.
    전체 경우의 수는 중복순열 2^5 = 32 로 고정. 통찰 없음·M_total 5 → level 중을 따라 ★2.
  tier: star_2
  mechanism_primary: "2문제 이상 → 여사건(0·1문제) → 1 − (1 + C(5,1))/2^5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-prob/items/0199.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "문항 수 5와 기준 '2문제 이상'을 바꿀 수 있다. 제약: 분모 2^n 에 대해 여사건 항 수가 (기준−1)개여야 하고, 선택지가 기약분수로 갈라지게 둘 것."
    creative: "(1) '3문제 이상'으로 올리면 여사건 항이 3개가 되어 계산만 증가(★2) (2) 선택지가 4개인 문제로 바꾸면 분모가 4^n 이 되어 중복순열 인식이 필요(★2) (3) '연속한 두 문제를 맞힐 확률'로 바꾸면 배치 조건이 붙어 ★3."
```

```yaml
- id: RPM-PROB-0200
  page: 34
  vendor_label: "유형 13 여사건의 확률; `이상', `이하', `아닌'의 조건"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    1~6 중 서로 다른 세 수로 만든 세 자리 자연수가 550 이하일 확률.
  category: "여사건 전환 → 550 초과를 자리별 두 갈래로 → 1에서 빼기"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'550 이하'를 여사건 '550 초과'로 옮기고, 서로 다른 수라 55◯ 가 불가능함을 이용해 백의 자리 6 · 56◯ 두 갈래로만 좁힘"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "여사건의 확률 — 자릿수 크기 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    550 이하를 직접 세면 백의 자리 1~4 와 5◯◯ 를 따로 세야 하지만, 여사건은 백의 자리 6 과 56◯ 뿐이다.
    서로 다른 세 수라는 제약이 55◯ 를 지워 주는 것이 경계 처리의 핵심(T-경계·T-범위).
    통찰 1개 depth 1 · level 중 → ★2 유지.
  tier: star_2
  mechanism_primary: "550 이하 → 여사건 550 초과 = (백의 자리 6) ∪ (56◯) → 1 − (5×4 + 4)/6P3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{4}{5}$'
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-prob/items/0200.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준값 550 과 숫자 집합 1~6 을 바꿀 수 있다. 제약: 기준값의 십의 자리 숫자가 백의 자리 숫자와 같으면(예: 550, 440) '서로 다른 수' 조건이 한 갈래를 지워 주므로 이 골조가 유지된다. 기준을 530 처럼 두면 갈래가 늘어난다."
    creative: "(1) '550 이상'으로 뒤집어 직접 세기가 유리하게 만들면 전략 선택이 생겨 ★3 (2) 숫자에 0 을 넣으면 최고 자리 제약이 추가되어 ★3 (3) '홀수이면서 550 이하'처럼 두 조건을 겹치면 덧셈정리까지 필요해 ★3."
```

### 유형 UP 14 기하적 확률

```yaml
- id: RPM-PROB-0201
  page: 34
  vendor_label: "유형 UP 14 기하적 확률"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형 UP"
  summary: |
    한 변의 길이가 4인 정사각형 ABCD 내부에 임의로 잡은 점 P에 대하여 삼각형 PBC가 예각삼각형이 될 확률.
  category: "각 조건 → BC를 지름으로 하는 원의 외부 → 넓이비"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'∠BPC 가 예각'이라는 각 조건을 'P 가 BC 를 지름으로 하는 반원의 바깥'이라는 영역 조건으로 전환(원주각 → 영역)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "기하적 확률 — 넓이비(각 조건을 원의 내부·외부로)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    세 각 중 밑변 쪽 두 각은 P 가 정사각형 내부면 자동으로 예각이라 조건이 ∠BPC 하나로 줄고,
    그것이 BC 지름 반원의 외부라는 영역으로 바뀐다. 이 표현 전환이 풀이 전체를 결정한다(I-RT d2).
    유형 UP ★3 출발·통찰 1개 d2 → ★3 유지.
  mechanism_primary: "∠BPC < 90° → P 가 BC 지름 반원(반지름 2)의 바깥 → (정사각형 − 반원)/정사각형"
  tier: star_3
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$1-\dfrac{\pi}{8}$'
  answer_source: "해설"
  figure: "crop:fig-0201.png"
  latex: latex-bank/rpm-prob/items/0201.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정사각형 한 변 4 를 바꿀 수 있다(반원 반지름 = 한 변/2 이므로 확률은 항상 1 − π/8 로 한 변에 무관). 제약: 직사각형으로 바꾸면 반원이 도형을 벗어날 수 있으므로 세로 길이 ≥ 가로/2 를 지킬 것. 그림의 꼭짓점 라벨 ABCD 는 고정."
    creative: "(1) '둔각삼각형이 될 확률'로 뒤집으면 여사건 한 줄(★2) (2) 직사각형으로 바꿔 반원이 잘리게 하면 활꼴 넓이가 필요해 ★4 (3) '삼각형 PBC 의 넓이가 k 이하'로 바꾸면 조건이 평행선 띠가 되어 I-RT 유지·★3."
```

```yaml
- id: RPM-PROB-0202
  page: 34
  vendor_label: "유형 UP 14 기하적 확률"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    −3 ≤ a ≤ 4 인 실수 a에 대하여 이차방정식 x^2 + ax − 2a = 0 이 실근을 가질 확률. 5지선다.
  category: "판별식 부등식 → a의 구간 → 길이비"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "기하적 확률 — 길이비(판별식 조건)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    D ≥ 0 → a(a+8) ≥ 0 → a ≤ −8 또는 a ≥ 0 인데, 주어진 구간 [−3, 4] 와 겹치는 것은 a ≥ 0 뿐이다.
    판별식·부등식·길이비 모두 표준 절차여서 통찰은 세지 않았다.
    [분류 이슈] 유형 UP 구역(★3 출발)이나 level 중·통찰 0·2단계 → ★2 로 기록.
  tier: star_2
  mechanism_primary: "실근 조건 → 판별식 a^2 + 8a ≥ 0 → 구간 [−3,4] 안의 해 a ≥ 0 → 길이비 4/7"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0202.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 [−3,4] 와 이차식의 계수를 바꿀 수 있다. 제약: 판별식의 두 근 중 하나만 구간 안에 들어와야 길이비가 한 조각으로 떨어지고, 답이 기약분수가 되도록 구간 길이와 해 구간 길이를 맞출 것."
    creative: "(1) '서로 다른 두 실근'으로 바꾸면 경계 등호 처리(T-경계)가 추가되지만 길이비는 같아 ★2 (2) 판별식의 두 근이 모두 구간 안이면 해가 두 조각으로 갈려 ★3 (3) a, b 두 매개변수를 정사각형 영역에서 뽑으면 넓이비 + 곡선 아래 영역이 되어 ★4."
```

```yaml
- id: RPM-PROB-0203
  page: 34
  vendor_label: "유형 UP 14 기하적 확률"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    한 변의 길이가 2인 정사각형 ABCD 내부의 점 P가 PA, PB, PC, PD 가 모두 1 이상일 확률.
  category: "네 거리 조건 → 꼭짓점 중심 사분원 4개 제외 → 넓이비"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "네 개의 독립된 거리 조건을 '꼭짓점 중심 반지름 1 사분원 4개의 합집합 밖'이라는 하나의 영역으로 통합하고, 한 변이 2 라서 사분원끼리 겹치지 않음을 확인해 넓이를 단순 합(= 원 1개)으로 처리"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "기하적 확률 — 넓이비(여러 거리 조건의 통합)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    조건이 네 개지만 각각 사분원이고 네 사분원의 합이 정확히 원 하나라는 점이 골조의 전부다.
    한 변이 2, 반지름이 1 이라 인접 사분원이 접하기만 하고 겹치지 않는다는 확인이 필수(T-범위).
    유형 UP·level 상중 ★3 출발·통찰 1개 d2 → ★3.
  tier: star_3
  mechanism_primary: "네 거리 ≥ 1 → 꼭짓점 사분원 4개(합 = 반지름 1 원 1개) 제외 → (4 − π)/4"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$1-\dfrac{\pi}{4}$'
  answer_source: "답지"
  figure: "crop:fig-0203.png"
  latex: latex-bank/rpm-prob/items/0203.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "한 변 2 와 거리 기준 1 을 바꿀 수 있다. 제약: 기준 거리 r 가 한 변의 절반을 넘으면 사분원끼리 겹쳐 합집합 넓이가 단순 합이 아니게 되므로 2r ≤ 한 변을 지킬 것."
    creative: "(1) 조건을 'PA ≥ 1 인 것만'으로 줄이면 사분원 하나라 ★2 (2) 기준 거리를 한 변의 절반보다 크게 하면 겹침 보정(렌즈 넓이)이 필요해 ★4 (3) '두 꼭짓점까지 거리가 모두 1 이하'로 바꾸면 교집합 영역이 되어 I-CON 유지·★3."
```

### 시험에 꼭 나오는 문제

```yaml
- id: RPM-PROB-0204
  page: 35
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    두 주사위에서 A(두 눈이 같다), B(합이 10), C(차가 4)일 때 서로 배반사건인 것을 보기에서 모두 고르기.
  category: "각 사건의 원소 나열 → 교집합이 공집합인지 판정"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "배반사건의 판정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    A ∩ B 는 (5,5) 가 있어 배반이 아니고, A ∩ C 는 눈이 같으면 차가 0 이라 공집합,
    B ∩ C 는 합 10·차 4 를 동시에 만족하는 눈이 주사위 범위를 벗어나 공집합이다.
    배반 = 교집합 공집합이라는 정의 확인 한 단계라 통찰 없음. 종합 구역 기본 문항 → ★2.
  tier: star_2
  mechanism_primary: "세 사건의 순서쌍을 나열 → 두 사건씩 교집합 확인 → 공집합인 쌍만 배반"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "ㄴ, ㄷ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0204.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "합·차의 기준값(10, 4)을 바꿀 수 있다. 제약: 배반 여부가 갈리도록 기준값을 잡아야 하고(합 기준이 짝수면 A 와 겹칠 수 있음), 주사위 눈 범위 1~6 밖의 조합이 자동으로 공집합이 되는 점을 이용할 것."
    creative: "(1) 사건을 4개로 늘려 배반 쌍을 모두 고르게 하면 케이스가 늘어 ★2 유지 (2) '세 사건이 서로 배반'인지 묻게 바꾸면 쌍마다 확인이 필요해 ★3 (3) 배반인 조건을 만족시키는 기준값을 역으로 구하게 하면 I-BW 가 생겨 ★3."
```

```yaml
- id: RPM-PROB-0205
  page: 35
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    주사위를 세 번 던져 나온 눈을 차례로 a, b, c라 할 때 a×b×c = 4 일 확률. 5지선다.
  category: "곱이 4가 되는 순서쌍 분해 → 순열 수 → 전체 6^3 으로 나누기"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곱 조건을 만족시키는 주사위 눈의 확률"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    4 를 세 개의 주사위 눈의 곱으로 쓰는 방법은 1·1·4 와 1·2·2 두 가지이고 각각 순열이 3가지다.
    분해를 빠뜨리지 않는 것이 유일한 관건이라 통찰로는 세지 않았다(T-범위).
    종합 구역·통찰 0·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "곱 4 의 분해 {1,1,4}, {1,2,2} → 각 3가지 순열 → 6/6^3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0205.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "곱의 값 4 를 6·8·12 등으로 바꿀 수 있다. 제약: 각 인수가 1~6 안에 들어가야 하고, 분해 가짓수가 2~3개여야 나열로 끝난다. 12 처럼 분해가 많아지면 누락 위험이 커진다."
    creative: "(1) '합이 6'으로 바꾸면 중복조합·순열 세기로 골조가 바뀌며 ★2 (2) '곱이 4의 배수'로 바꾸면 여사건(홀수 인수)이 유리해져 I-EQV 가 생기고 ★3 (3) 주사위를 네 번 던지면 분해 케이스가 늘어 ★3."
```

```yaml
- id: RPM-PROB-0206
  page: 35
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    세 사람이 가위바위보를 한 번 할 때 한 명만 이길 확률.
  category: "이기는 사람 선택 → 이기는 손 선택 → 전체 3^3 으로 나누기"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "가위바위보의 확률"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    한 명만 이기는 경우는 '이기는 사람 3가지 × 그 사람이 내는 손 3가지'로 9가지이고 나머지 두 사람의 손은 자동 결정된다.
    승패 구조를 경우의 수로 바꾸는 표준 절차라 통찰 없음. 종합 구역 기본 문항 → ★2.
  tier: star_2
  mechanism_primary: "이기는 사람 3 × 이기는 손 3 (나머지 두 명은 자동) → 9/3^3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0206.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "사람 수 3 을 4·5 로 바꿀 수 있다. 제약: 인원이 늘면 '한 명만 이길' 확률은 n×3/3^n 이 되고, '두 명이 이길' 경우까지 물으면 조합 C(n,2) 가 붙는다."
    creative: "(1) '비길 확률'로 바꾸면 여사건 또는 모두 같은 손·모두 다른 손 분기가 생겨 ★3 (2) '두 번 해서 한 번만 이길 확률'로 바꾸면 독립시행 구조가 되어 ★3 (3) 사람 수를 4명으로 올리고 '두 명이 이길 확률'을 물으면 조합이 붙어 ★2 유지."
```

```yaml
- id: RPM-PROB-0207
  page: 35
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    5명이 월~금 하루씩 청소 당번을 임의로 맡을 때 A, B가 연속한 날을 맡을 확률.
  category: "이웃 묶음 순열 → 전체 5! 로 나누기"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "순열을 이용한 확률 — 이웃(연속) 조건"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    '연속한 날'은 요일 순서에서 이웃이라는 뜻이므로 A, B 를 한 묶음으로 보는 2×4!/5! 한 줄이다.
    [분류 이슈] 종합 구역(★2~3 출발)이나 통찰 0·M_total 4 로 −1 조정하여 ★1 로 기록.
  tier: star_1
  mechanism_primary: "A, B 연속 → 두 사람 한 묶음 → 2×4!/5!"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{2}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0207.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "인원·날짜 수 5 를 6·7 로 바꿀 수 있다(확률 2/n). 제약: 사람 수와 날짜 수가 같아야 전체가 n! 로 떨어진다."
    creative: "(1) '연속하지 않을 확률'로 뒤집으면 여사건 한 줄(★1~2) (2) 'A가 B보다 먼저'를 추가하면 묶음 내부 순서가 고정되어 ★2 (3) 'A, B, C 가 연속'으로 늘리면 묶음 내부 3! 이 붙어 ★2."
```

```yaml
- id: RPM-PROB-0208
  page: 35
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "종합"
  summary: |
    0~5 에서 서로 다른 세 숫자로 만든 세 자리 자연수 중 하나를 택할 때 그 수가 짝수일 확률.
  category: "0 제약 → 일의 자리 0 / 2·4 분기 → 각각 백의 자리 0 제외"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'짝수'라는 한 조건이 일의 자리가 0 인 경우와 2·4 인 경우로 갈리고, 백의 자리에 0 을 쓸 수 없다는 제약 때문에 두 경우의 세는 방식이 서로 달라짐"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "순열을 이용한 확률 — 0을 포함한 자연수 만들기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    분모(세 자리 자연수 전체)에도 최고 자리 0 제외가 걸려 분모·분자 양쪽에서 같은 함정을 처리해야 한다.
    일의 자리 0 이면 나머지는 자유, 2·4 면 백의 자리에서 0 을 한 번 더 빼야 한다는 분기가 핵심(I-MI d2).
    종합 구역·중요 태그·통찰 1개 d2·M_total 8 → ★3.
  tier: star_3
  mechanism_primary: "짝수 → 일의 자리 0 (5×4) ∪ 일의 자리 2·4 (2×4×4) → 분모도 0 제외한 5×5×4"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{13}{25}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0208.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "숫자 집합 {0,…,5} 의 크기와 자릿수 3 을 바꿀 수 있다. 제약: 0 은 반드시 포함해야 이 골조가 살고, 짝수 후보(0 과 나머지 짝수)의 개수가 분기 수를 정한다."
    creative: "(1) '5의 배수'로 바꾸면 일의 자리 0·5 분기로 같은 골조 유지(★3) (2) '3의 배수'로 바꾸면 자릿수 합 조건이라 조합 선택으로 골조가 바뀌며 ★4 (3) 중복을 허용하면 분기는 같지만 각 항이 곱셈으로 단순해져 ★2."
```

```yaml
- id: RPM-PROB-0209
  page: 35
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    문자 카드 6장과 숫자 카드 3장, 모두 9장을 일렬로 나열할 때 A 카드의 양옆에 숫자 카드가 놓일 확률.
  category: "숫자 2장 선택·배치 → [숫자 A 숫자] 블록 → 블록 포함 7개 나열"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "순열을 이용한 확률 — 양옆 조건(블록 묶기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    A 의 양옆을 채우는 숫자 두 장을 3P2 로 고르고 세 장을 한 블록으로 묶으면 나머지와 함께 7개 나열이 된다.
    블록으로 묶는 순간 'A 가 양 끝에 오면 양옆이 없다'는 예외가 자동 배제되는 것이 편의점.
    블록 묶기는 유형 표준이라 통찰로 세지 않았다. 종합 구역·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "A 양옆 = 숫자 → 3P2 × [블록 포함 7개 나열] 7! → 6×7!/9!"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{12}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0209.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "문자 6장·숫자 3장을 바꿀 수 있다. 제약: 숫자 카드가 2장 이상이어야 양옆을 채울 수 있고, 전체 장수가 늘어나면 분모 n! 과 7! 의 약분 구조만 달라진다."
    creative: "(1) 'A 의 한쪽에만 숫자'로 바꾸면 양 끝 예외를 직접 따져야 해 I-MI 가 생기고 ★3 (2) '숫자 카드 3장이 모두 이웃'으로 바꾸면 블록 하나로 단순해져 ★2 (3) '문자와 숫자가 교대로'는 배치 틀이 고정되어 ★3."
```

```yaml
- id: RPM-PROB-0210
  page: 35
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    키가 서로 다른 네 사람이 일렬로 설 때 왼쪽에서 세 번째 사람이 자신과 이웃한 두 사람보다 키가 작을 확률. 5지선다.
  category: "관련된 세 자리만 보기 → 가운데가 최소일 확률 → 대칭으로 1/3"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "2·3·4번째 자리에 앉는 세 사람 중 누가 가장 작은지는 대칭이므로, 첫 번째 자리와 무관하게 세 자리 중 가운데가 최소일 확률이 곧 1/3 임을 이용"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "순열을 이용한 확률 — 대소 관계 배치"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    직접 세면 4! = 24 중 8가지이지만, 관련된 세 자리만 떼어 내면 세 사람 중 가운데가 최소인 경우가
    셋 중 하나라는 대칭 논증으로 한 줄에 끝난다(I-SYM d2).
    도구는 가볍고 결론이 빨라 종합 구역 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "세 번째가 이웃 둘보다 작다 → 2·3·4번째 세 사람 중 가운데가 최소 → 1/3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0210.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "총 인원 4 와 기준 자리(세 번째)를 바꿀 수 있다. 제약: 기준 자리가 양 끝이면 이웃이 하나뿐이라 확률이 1/2 로 바뀐다. 관련된 자리 수만 확률을 결정하고 나머지 인원 수는 영향이 없다."
    creative: "(1) '이웃한 두 사람보다 크다'로 뒤집어도 대칭으로 1/3(★2) (2) '세 번째가 전체에서 가장 작다'로 바꾸면 1/n 이 되어 ★1~2 (3) '어느 한 사람이 양옆보다 크다'를 모든 내부 자리에 대해 묻게 하면 포함배제가 필요해 ★4."
```

```yaml
- id: RPM-PROB-0211
  page: 35
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    전학생 A, B, C를 1~6반에 각각 임의로 배정할 때 A와 B가 같은 반이 될 확률. 5지선다.
  category: "중복순열 6^3 → A와 같은 반인 B 한 가지 → C는 무관"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "중복순열을 이용한 확률 — 같은 곳에 배정"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    A 의 반이 무엇이든 B 가 같은 반일 확률은 1/6 이고 C 는 조건과 무관하다.
    분모를 6^3 으로 세워도 6×1×6 으로 약분되어 한 줄이다.
    [분류 이슈] 종합 구역(★2~3 출발)이나 통찰 0·M_total 4 → ★1 로 기록.
  tier: star_1
  mechanism_primary: "A와 B가 같은 반 → 6×1×6 / 6^3 (C는 무관) → 1/6"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0211.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "반 수 6 과 학생 수 3 을 바꿀 수 있다(확률 1/반 수). 제약: 조건에 등장하지 않는 학생 수는 답에 영향이 없으므로 분모·분자에서 같이 약분되게 둘 것."
    creative: "(1) '세 명이 모두 같은 반'으로 바꾸면 1/36 로 지수만 변하고 ★1~2 (2) '적어도 두 명이 같은 반'으로 바꾸면 여사건이 필요해 ★2~3 (3) '각 반에 최대 한 명'처럼 배정 제약을 걸면 순열로 바뀌어 ★2."
```

```yaml
- id: RPM-PROB-0212
  page: 36
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    X = {a, b, c} 에서 Y = {1,…,6} 으로의 함수 f 중 하나를 택할 때 ㈎ f(b)가 홀수 ㈏ f(a) ≤ f(b) ≤ f(c) 를 만족시킬 확률.
  category: "f(b) 값으로 분기 → 각 분기에서 f(a)·f(c) 개수의 곱 → 전체 6^3 으로 나누기"
  M: {s: 3, k: 2, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f(b) = 1, 3, 5 각각이 f(a)·f(c) 의 가짓수를 다르게 만들어 세 개의 독립 시나리오로 갈림"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f(a) ≤ f(b) 라는 부등식 조건을 'f(b) 이하인 Y 의 원소 개수'로, f(b) ≤ f(c) 를 'f(b) 이상인 원소 개수'로 옮겨 곱으로 셈"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "함수의 개수를 이용한 확률 — 대소 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    조건 ㈏ 를 순서쌍 나열로 풀면 양이 많지만, f(b) 를 먼저 고정하면 f(a)·f(c) 가 독립이 되어 곱으로 끝난다.
    등호가 허용되므로 f(b) 자신을 포함해 세는 경계 처리가 필요하다(T-경계).
    통찰 2개(MI·EQV d2)·M_total 9 → 종합 구역 출발점에서 +1 하여 ★3.
  tier: star_3
  mechanism_primary: "f(b) = 1·3·5 로 분기 → 각각 (f(b) 이하 개수)×(f(b) 이상 개수) 합 → /6^3"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{7}{54}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0212.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "Y 의 크기 6 과 ㈎ 의 조건(홀수/짝수/3의 배수)을 바꿀 수 있다. 제약: 분기 수 = ㈎ 를 만족하는 Y 원소 수이므로 3~4개를 넘지 않게 두어야 손으로 셀 수 있고, 등호 포함 여부를 바꾸면 각 항의 개수가 하나씩 달라진다."
    creative: "(1) 부등식을 f(a) < f(b) < f(c) 로 바꾸면 서로 다른 세 수 선택 C(6,3) 으로 골조가 단순해져 ★2 (2) ㈎ 를 빼면 f(a) ≤ f(b) ≤ f(c) 인 중복조합 H(6,3) 한 줄이라 ★2 (3) X 의 원소를 4개로 늘리면 분기와 곱이 모두 늘어 ★4."
```

```yaml
- id: RPM-PROB-0213
  page: 36
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "종합"
  summary: |
    문자 b, a, n, a, n, a 6개를 일렬로 나열할 때 양 끝에 n이 올 확률. 5지선다.
  category: "같은 것이 있는 순열 → 양 끝 n 고정 후 가운데 4개 나열"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "같은 것이 있는 순열을 이용한 확률 — 양 끝 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분모는 6!/(3!2!), 분자는 n 두 개를 양 끝에 놓고 남은 b, a, a, a 를 4!/3! 로 세면 된다.
    n 이 서로 구별되지 않으므로 양 끝 배치에 2! 를 곱하지 않는 것이 함정(T-표기).
    같은 것이 있는 순열 표준 절차라 통찰 없음 → ★2.
  tier: star_2
  mechanism_primary: "양 끝 n 고정 → 가운데 b,a,a,a 의 4!/3! → {4!/3!}/{6!/(3!2!)}"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-prob/items/0213.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "문자 구성(a 3개·n 2개·b 1개)을 바꿀 수 있다. 제약: 양 끝에 놓을 문자의 개수가 2개 이상이어야 하고, 남은 문자로 만드는 순열이 기약분수로 떨어지게 둘 것."
    creative: "(1) '양 끝에 같은 문자'로 일반화하면 a·n 두 경우로 갈려 I-MI 가 생기고 ★3 (2) 'a 끼리 이웃하지 않을 확률'로 바꾸면 사이 끼우기 골조라 ★3 (3) 양 끝 조건을 '모음이 올 확률'로 바꾸면 문자 분류가 추가되어 ★2."
```

```yaml
- id: RPM-PROB-0214
  page: 36
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    1~6 이 적힌 6장의 카드에서 3장을 동시에 뽑을 때 세 수의 곱이 홀수일 확률.
  category: "곱이 홀수 ⟺ 세 수 모두 홀수 → 홀수 3장에서 3장 택하기"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'곱이 홀수'를 '짝수가 한 개도 없다 = 세 수가 모두 홀수'로 옮겨 조합 한 번으로 환원"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "조합을 이용한 확률 — 곱의 홀짝"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    1~6 에 홀수가 정확히 3개뿐이라 조건을 만족하는 경우가 C(3,3) = 1 로 유일해진다.
    동치 변환 한 번(d1) 뒤에는 계산이 없어 절차형으로 분류. M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "곱이 홀수 → 세 수 모두 홀수 → C(3,3)/C(6,3)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{20}$'
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-prob/items/0214.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "카드 범위 1~6 과 뽑는 장수 3 을 바꿀 수 있다. 제약: 홀수 개수가 뽑는 장수보다 많아야 답이 1 보다 큰 조합이 되고(1~10 에서 3장이면 C(5,3)), 너무 크면 난도가 아니라 계산만 늘어난다."
    creative: "(1) '곱이 짝수'로 뒤집으면 여사건이라 ★2 유지 (2) '합이 홀수'로 바꾸면 홀수 개수의 홀짝 분기가 생겨 I-MI 로 ★3 (3) '곱이 4의 배수'로 바꾸면 2의 지수를 따져야 해 ★4."
```

```yaml
- id: RPM-PROB-0215
  page: 36
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    일렬로 앉아 있던 5명의 자리를 임의로 다시 배정할 때 처음과 같은 자리를 받은 학생이 정확히 2명일 확률. 5지선다.
  category: "고정될 2명 선택 → 나머지 3명은 모두 제자리가 아님(완전교란) → 전체 5! 로 나누기"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'같은 자리인 학생이 2명'을 '2명을 고르고 남은 3명은 모두 다른 자리'로 옮겨, 남은 3명에 완전교란(2가지)을 적용"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "완전교란(제자리가 아닌 배정)의 확률"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    C(5,2) 로 고정될 두 명을 고르는 데서 멈추면 남은 3명 중 또 제자리가 생겨 '정확히 2명'을 어긴다.
    '정확히'와 '적어도'의 구별이 이 문항의 경계 함정이고(T-경계), 3명 완전교란이 2가지라는 것이 결정타다.
    통찰 1개 d2·M_total 8 → 종합 구역에서 +1 하여 ★3.
  tier: star_3
  mechanism_primary: "정확히 2명 고정 → C(5,2) × (남은 3명 완전교란 2가지) → 20/5!"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "①"
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-prob/items/0215.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "인원 5 와 고정 인원 2 를 바꿀 수 있다. 제약: 남는 인원의 완전교란 수가 손으로 셀 수 있어야 한다(3명 2가지·4명 9가지). 남는 인원이 1명이면 완전교란이 0 이라 확률이 0 이 되는 점에 주의."
    creative: "(1) '아무도 제자리가 아닐 확률'로 바꾸면 5명 완전교란 44가지라 ★4 (2) '적어도 2명이 제자리'로 바꾸면 포함배제가 필요해 ★4 (3) 고정 인원을 3명으로 늘리면 남은 2명 교란이 1가지라 ★2 로 내려간다."
```

```yaml
- id: RPM-PROB-0216
  page: 36
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    남자 4명·여자 2명을 2명씩 3개 팀으로 나눌 때 남자 1명과 여자 1명으로 이루어진 팀이 만들어질 확률.
  category: "여사건(여자 2명이 같은 팀) → 남자 4명을 2팀으로 → 1에서 빼기"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'남녀 혼성 팀이 있다'를 '여자 2명이 같은 팀이 아니다'로 옮기면 여사건이 단 한 가지 형태(여자끼리 한 팀 + 남자 4명 2팀)로 줄어듦"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "묶음(조 나누기)을 이용한 확률"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    여자가 2명뿐이라 '혼성 팀이 있다'와 '여자 둘이 갈라진다'가 같은 말이 되는 것이 골조의 전부다.
    분모는 6명을 2명씩 3조로 나누는 6!/(2!^3 3!) 이고, 같은 크기 조의 3! 로 나누는 처리가 함정.
    통찰 1개 d2·M_total 7 → ★3.
  tier: star_3
  mechanism_primary: "혼성 팀 존재 → 여사건(여자 둘이 한 팀) → 1 − {남자 4명을 2팀으로}/{6명을 2명씩 3팀으로}"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{4}{5}$'
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-prob/items/0216.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "남자 4·여자 2 와 팀 크기 2 를 바꿀 수 있다. 제약: 여자가 2명일 때만 여사건이 한 가지로 줄어든다. 여자가 3명 이상이면 여사건이 여러 형태로 갈려 골조가 달라진다."
    creative: "(1) '모든 팀이 혼성'으로 바꾸면 남녀 수가 같아야 하고 대응 세기로 ★3 (2) 여자를 3명으로 늘리면 여사건 분기가 생겨 ★4 (3) 팀을 3명씩 2팀으로 바꾸면 조 나누기 분모만 달라져 ★3 유지."
```

```yaml
- id: RPM-PROB-0217
  page: 36
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["평가원 기출"]
  category_type: "종합"
  summary: |
    흰 공과 검은 공 합쳐 40개인 주머니에서 2개를 꺼낼 때 흰 2개·흰1검1·검 2개 확률을 각각 p, q, r라 하자. p = q 일 때 60r의 값.
  category: "공 개수를 미지수로 → p = q 를 조합 등식으로 → 개수 확정 후 r 계산"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "확률 등식 p = q 의 공통 분모 C(40,2) 를 지워 조합 등식으로 바꾸면 흰 공 수와 검은 공 수 사이의 일차 관계 하나만 남음"
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "주어진 확률 관계에서 거꾸로 각 색의 공 개수를 확정한 뒤에야 r 를 계산할 수 있음"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "확률의 등식에서 미지의 개수 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    p, q, r 를 모두 C(40,2) 를 분모로 쓰면 p = q 는 조합 수의 등식이 되고, 합이 40 이라는 조건과 연립해
    흰·검은 공 개수가 하나로 정해진다. p > 0 조건이 흰 공이 2개 이상임을 보장한다.
    통찰 2개(EQV·BW d2)·M_total 8 → ★3.
  tier: star_3
  mechanism_primary: "p = q → C(w,2) = w×b → w − 1 = 2b, w + b = 40 → 개수 확정 → 60r"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0217.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "총 개수 40 과 요구하는 배수 60 을 바꿀 수 있다. 제약: w − 1 = 2b 와 w + b = 총수 가 자연수 해를 갖도록 총수를 3의 배수 + 1 꼴로 두어야 하고, 마지막 배수는 r 의 분모를 지워 정수가 되게 고를 것."
    creative: "(1) 조건을 q = r 로 바꾸면 같은 골조에 관계식만 달라져 ★3 (2) p, q, r 가 이 순서로 등차를 이루게 하면 이차 관계가 생겨 ★4 (3) 색을 3종으로 늘리면 미지수 2개 연립이라 ★4."
```

```yaml
- id: RPM-PROB-0218
  page: 36
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    a + b + c + d = 8 을 만족시키는 음이 아닌 정수 순서쌍 중 하나를 택할 때 a < b, a < c, a < d 일 확률.
  category: "전체는 중복조합 → a 값으로 분기 → 각 분기에서 b, c, d 를 다시 중복조합"
  M: {s: 3, k: 3, a: 2, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "a 를 고정한 뒤 b, c, d ≥ a + 1 로 바꾸고 각각 a + 1 을 미리 떼어 내면 남은 합에 대한 중복조합 문제로 환원"
    - step: 2
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "a = 0, 1, 2, … 로 분기한 뒤 a ≥ 2 인 분기는 b + c + d 의 최소 합이 8 을 넘어 조건 위배로 기각되어야 함"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "중복조합을 이용한 확률 — 부등식 조건"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    분모는 H(4,8) = C(11,3) 로 표준이지만, 분자는 a 가 나머지 셋보다 작다는 비대칭 조건이라 대칭 논증이 통하지 않는다.
    a 를 고정하고 나머지에 하한을 떼어 내는 환원(EQV d2)과, a 가 커지면 남는 합이 부족해 분기가 죽는 검증(VF d2)이 둘 다 필수다.
    통찰 2개·M_total 10 → 종합 구역 출발점에서 +1 이상, 상위권 변별 → ★4.
  tier: star_4
  mechanism_primary: "전체 H(4,8) → a = 0, 1 분기(각각 b,c,d ≥ a+1 하한 제거 후 중복조합) → a ≥ 2 기각 → 합/전체"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$\dfrac{8}{55}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-prob/items/0218.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "합 8 과 변수 개수 4 를 바꿀 수 있다. 제약: 합이 커지면 a 의 분기가 늘어 계산만 무거워지므로 분기가 2~3개로 끝나는 합(변수 개수 × 2 안팎)을 고를 것. 음이 아닌 정수 조건을 자연수로 바꾸면 하한 처리가 한 겹 더 붙는다."
    creative: "(1) 조건을 a ≤ b, a ≤ c, a ≤ d 로 완화하면 등호 때문에 분기가 늘어 ★4 유지 (2) a < b < c < d 로 바꾸면 서로 다른 수 선택이라 조합 한 번으로 ★3 (3) 'a 가 최댓값'으로 바꾸면 같은 골조의 거울 문제라 ★4."
```

```yaml
- id: RPM-PROB-0219
  page: 36
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    표본공간 S의 두 사건 A, B에 대한 보기 ㄱ~ㄷ(포함 관계와 확률의 대소·덧셈정리·합사건이 S일 때 여사건인지) 중 옳은 것 고르기. 5지선다.
  category: "확률의 기본 성질 확인 → 마지막 보기는 반례 구성"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "P(A ∪ B) = 1 을 'A 의 여사건이 B 에 포함된다'로 옮기면 여사건이 되려면 배반 조건이 더 필요함이 드러나고, 겹치는 두 사건으로 반례를 만들 수 있음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "확률의 기본 성질 참·거짓 판정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ㄱ(단조성)과 ㄴ(덧셈정리에서 교집합만큼 작아짐)은 성질 확인이고, ㄷ만 반례가 필요하다.
    A ∪ B = S 여도 A ∩ B 가 비어 있지 않으면 여사건이 아니라는 점이 유일한 판단 지점이다.
    추상도는 높지만(Mₐ 3) 도구는 기본 성질뿐이라 ★2.
  tier: star_2
  mechanism_primary: "ㄱ·ㄴ 은 단조성·덧셈정리로 참 → ㄷ 은 A ∪ B = S 이면서 A ∩ B ≠ ∅ 인 반례로 거짓"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0219.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이 문항에는 바꿀 수치가 없다. 보기 개수(3개)와 정오 조합만 조절할 수 있으며, 참인 보기와 거짓인 보기가 섞이도록 유지할 것."
    creative: "(1) 보기를 '배반이면 P(A ∪ B) = P(A) + P(B)' 같은 조건부 명제로 바꾸면 ★2 유지 (2) 반례를 직접 제시하라고 하면 서술형이 되어 ★3 (3) 세 사건으로 확장해 포함배제를 묻게 하면 ★4."
```

```yaml
- id: RPM-PROB-0220
  page: 37
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["평가원 기출"]
  category_type: "종합"
  summary: |
    배반인 두 사건 A, B에 대하여 P(A의 여사건)과 P(A ∪ B) 가 주어졌을 때 P(B의 여사건)의 값. 5지선다.
  category: "여사건으로 P(A) → 배반의 덧셈정리로 P(B) → 다시 여사건"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "배반사건과 여사건의 확률 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    여사건 → 배반 덧셈정리 → 여사건으로 이어지는 세 번의 표준 변환이고 분수 계산만 남는다.
    배반이라 P(A ∪ B) = P(A) + P(B) 를 그대로 쓸 수 있는 점이 전부라 통찰 없음.
    통찰 0·M_total 5 이나 변환이 세 번 연쇄되어 ★2 유지.
  tier: star_2
  mechanism_primary: "P(A) = 1 − P(A의 여사건) → 배반이므로 P(B) = P(A ∪ B) − P(A) → P(B의 여사건) = 1 − P(B)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0220.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주어진 두 확률 값을 바꿀 수 있다. 제약: P(A) ≤ P(A ∪ B) ≤ 1 을 지켜야 하고, 배반 조건 아래 P(B) = P(A ∪ B) − P(A) 가 0 과 1 사이의 기약분수가 되게 둘 것."
    creative: "(1) 배반 조건을 빼고 P(A ∩ B) 를 주면 일반 덧셈정리라 ★2 유지 (2) P(B의 여사건) 대신 P(A ∩ B의 여사건) 을 물으면 집합 분해가 필요해 ★3 (3) 배반 여부를 판정까지 시키면 ★3."
```

```yaml
- id: RPM-PROB-0221
  page: 37
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    두 사건 A, B에 대하여 P(A ∩ B의 여사건) 과 P(B의 여사건) 이 주어졌을 때 P(A ∪ B).
  category: "합사건을 배반인 두 조각으로 분해 → 여사건으로 P(B) → 더하기"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "A ∪ B 를 (A ∩ B의 여사건) 과 B 의 배반 합으로 분해하면 주어진 두 값만으로 바로 더해짐"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "확률의 덧셈정리 — 차집합 분해"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    P(A) 나 P(A ∩ B) 를 따로 구하려 하면 정보가 모자라지만, 벤 다이어그램에서 A ∪ B 를
    'B 밖의 A 부분'과 'B'로 쪼개면 주어진 두 값이 그대로 들어맞는다.
    분해 착안이 유일한 관건(EQV d2)이고 계산은 한 줄 → ★2.
  tier: star_2
  mechanism_primary: "A ∪ B = (A ∩ B의 여사건) ∪ B (배반) → P(A ∪ B) = P(A ∩ B의 여사건) + {1 − P(B의 여사건)}"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{5}{6}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0221.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주어진 두 확률을 바꿀 수 있다. 제약: P(A ∩ B의 여사건) ≤ P(B의 여사건) 이어야 하고, 합이 1 을 넘지 않게 둘 것."
    creative: "(1) 대신 P(A ∩ B) 를 묻게 하면 P(A) 가 필요해져 조건을 하나 더 줘야 하고 ★2 (2) 조건을 P(A ∪ B) 와 P(B) 로 주고 P(A ∩ B의 여사건) 을 되묻는 역방향이면 I-BW 로 ★3 (3) 세 사건으로 확장하면 ★4."
```

```yaml
- id: RPM-PROB-0222
  page: 37
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    P(A), P(B) 가 주어졌을 때 P(A ∩ B) 의 최댓값 M과 최솟값 m에 대하여 Mm의 값.
  category: "교집합의 상한은 포함 관계, 하한은 합사건이 1을 넘지 못함 → 두 경계의 곱"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "값을 직접 구하는 대신 P(A ∩ B) 가 가질 수 있는 범위를 먼저 결정해야 하며, 하한은 P(A ∪ B) ≤ 1 이라는 제약에서 역산됨"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "P(A ∩ B)의 최댓값·최솟값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    최댓값은 A ⊂ B 일 때 작은 쪽 확률, 최솟값은 A ∪ B 가 전체가 될 때 P(A) + P(B) − 1 이다.
    두 경계 모두 '가능한 배치'를 상상해야 나오고 경계값 처리가 함정(T-경계·T-범위).
    통찰 1개 d2·M_total 9 → ★3.
  tier: star_3
  mechanism_primary: "M = min{P(A), P(B)} (포함 관계) · m = P(A) + P(B) − 1 (P(A ∪ B) = 1) → Mm"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{13}{50}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0222.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "P(A), P(B) 를 바꿀 수 있다. 제약: 두 확률의 합이 1 을 넘어야 최솟값이 0 이 아닌 값으로 나와 문제가 성립한다. 합이 1 이하이면 m = 0 이 되어 Mm = 0 으로 싱거워진다."
    creative: "(1) P(A ∪ B) 의 최댓값·최솟값을 묻는 거울 문제(★3) (2) 세 사건으로 확장하면 경계 조건이 늘어 ★4 (3) 최솟값이 되는 조건(배치)을 서술하게 하면 서술형 ★4."
```

```yaml
- id: RPM-PROB-0223
  page: 37
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    1~5 에서 중복을 허용해 2개를 뽑아 만든 두 자리 자연수 중 하나를 택할 때 그 수가 홀수이거나 3의 배수일 확률.
  category: "홀수 개수 · 3의 배수 개수 · 둘 다인 개수 → 덧셈정리"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "확률의 덧셈정리 — '또는' 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    전체는 중복순열 5^2 = 25, 홀수는 일의 자리 조건으로 바로 세지고, 3의 배수는 자릿수 합으로 나열해야 한다.
    두 사건이 배반이 아니므로 교집합을 빼는 덧셈정리 표준 적용이고 통찰은 없다.
    계산량은 있으나 도구가 하나뿐 → ★2.
  tier: star_2
  mechanism_primary: "P(홀수) + P(3의 배수) − P(홀수이면서 3의 배수) (분모 5^2)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{19}{25}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0223.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "숫자 집합 1~5 와 자릿수 2 를 바꿀 수 있다. 제약: 3의 배수를 손으로 나열할 수 있는 크기(전체 25~36개)를 넘지 말 것. 중복 허용 여부를 바꾸면 분모가 순열로 바뀐다."
    creative: "(1) '홀수이고 3의 배수'로 바꾸면 교집합만 세면 되어 ★2 (2) '홀수도 3의 배수도 아닐 확률'로 바꾸면 여사건이 겹쳐 ★3 (3) 세 조건('4의 배수'까지)으로 늘리면 포함배제 3항이라 ★4."
```

```yaml
- id: RPM-PROB-0224
  page: 37
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "종합"
  summary: |
    5명을 일렬로 세울 때 B와 D 사이에 적어도 한 명을 세울 확률.
  category: "여사건(B와 D가 이웃) → 묶음 순열 → 1에서 빼기"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "여사건의 확률 — '사이에 적어도 한 명'"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    '사이에 적어도 한 명'의 여사건이 '두 사람이 이웃'임을 알면 2×4!/5! 한 줄이다.
    사이 인원을 1명·2명·3명으로 나눠 직접 세는 갈래도 있지만 여사건이 압도적으로 짧다.
    표준 여사건 골조라 통찰 없음 → ★2.
  tier: star_2
  mechanism_primary: "사이에 적어도 한 명 → 여사건(B, D 이웃) → 1 − 2×4!/5!"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{3}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0224.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "인원 5 를 6·7 로 바꿀 수 있다(확률 1 − 2/n). 제약: 조건 대상은 두 사람으로 고정해야 묶음 순열 한 번으로 끝난다."
    creative: "(1) '사이에 정확히 두 명'으로 바꾸면 위치 배치를 직접 세야 해 ★3 (2) '사이에 적어도 두 명'으로 올리면 여사건 항이 2개가 되어 ★3 (3) 원형으로 바꾸면 분모가 (n−1)! 로 바뀌어 ★3."
```

```yaml
- id: RPM-PROB-0225
  page: 37
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    초코 케이크 3조각과 딸기 케이크 n조각에서 3조각을 고를 때 초코가 2조각 이하일 확률이 주어진 값일 때 n의 값.
  category: "여사건(초코 3조각) → 확률 방정식 → 조합 수에서 n 역산"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "확률 값이 결과로 주어지고 개수 n 을 역추적해야 하며, 여사건으로 바꾸면 미지수가 분모의 조합 수 하나에만 남아 방정식이 단순해짐"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "확률이 주어질 때 미지수 구하기(여사건)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    '초코 2조각 이하'를 그대로 두면 세 항에 n 이 흩어지지만, 여사건 '초코 3조각'은 C(3,3) = 1 이라
    미지수가 분모 C(n+3, 3) 하나에만 남는다. 거기서 n 을 자연수 해로 되짚는 역방향 구조(I-BW d2).
    통찰 1개 d2·M_total 7 → ★3.
  tier: star_3
  mechanism_primary: "초코 2조각 이하 → 여사건 확률 = 1/C(n+3,3) → C(n+3,3) = 35 → n"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0225.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초코 3조각·고르는 3조각·주어진 확률을 바꿀 수 있다. 제약: 여사건 확률이 1/C(n+3,3) 꼴로 떨어지려면 초코 개수와 고르는 개수가 같아야 하고, 주어진 확률의 분모가 실제 조합 수(C(7,3) = 35 처럼)와 일치해 n 이 자연수로 나와야 한다."
    creative: "(1) 초코를 4조각으로 늘리고 4조각을 고르게 하면 같은 골조로 수만 커져 ★3 (2) '초코가 1조각 이하'로 바꾸면 여사건이 두 항이라 이차방정식이 되어 ★4 (3) 확률 대신 기댓값을 주면 단원을 넘어 ★4."
```

```yaml
- id: RPM-PROB-0226
  page: 37
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    반원 위에 있는 10개의 점(지름 위 5개·호 위 5개) 중 3개를 택할 때 세 점이 삼각형을 이룰 확률. 5지선다.
  category: "삼각형 ⟺ 세 점이 일직선이 아님 → 여사건은 지름 위 5점에서 3점"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'삼각형이 만들어진다'를 '세 점이 한 직선 위에 있지 않다'로 옮기면, 그림에서 일직선인 점은 지름 위 5개뿐이므로 여사건이 조합 한 개로 줄어듦"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "조합을 이용한 확률 — 삼각형의 개수(공선점 제외)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    그림에서 지름 위에 5개(양 끝 포함), 호 위에 5개가 놓여 있고 호 위의 점끼리는 일직선이 될 수 없다.
    따라서 여사건은 지름 위 5점에서 3점을 택하는 경우 하나뿐이다(T-범위: 지름 양 끝 점을 지름 쪽으로 세는 것).
    동치 변환 1개 d2 이나 도구는 조합 한 번 → ★2.
  tier: star_2
  mechanism_primary: "삼각형 → 여사건(지름 위 5점 중 3점) → 1 − C(5,3)/C(10,3)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지"
  figure: "crop:fig-0226.png"
  latex: latex-bank/rpm-prob/items/0226.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지름 위 점의 개수와 호 위 점의 개수를 바꿀 수 있다(그림 라벨은 그에 맞게 다시 그려야 함). 제약: 공선인 점은 지름 위 점들뿐이어야 하고, 지름 위 점이 3개 이상이어야 여사건이 0 이 아니다."
    creative: "(1) '직각삼각형이 될 확률'로 바꾸면 지름에 대한 원주각 성질이 필요해 ★4 (2) '둔각삼각형'을 물으면 위치 판정이 들어가 ★4 (3) 점을 두 직선 위에 나눠 배치하면 공선 여사건이 두 항이 되어 ★3."
```

```yaml
- id: RPM-PROB-0227
  page: 37
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["수능 기출"]
  category_type: "종합"
  summary: |
    1~6 이 적힌 6장의 카드를 일렬로 나열할 때 양 끝 카드에 적힌 두 수의 합이 10 이하일 확률. 5지선다.
  category: "여사건(양 끝 합이 11) → 양 끝이 5와 6 인 배열 → 1에서 빼기"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "양 끝 두 수의 최대 합이 11 이므로 '10 이하'의 여사건이 '합이 11', 즉 양 끝이 5와 6 인 경우 하나로만 정해짐"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "여사건의 확률 — 양 끝 두 수의 합 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    합이 10 이하인 경우를 직접 세면 양 끝 조합이 많지만, 가능한 최대 합이 11 이라 여사건은 {5, 6} 뿐이다.
    이 상한 인식만 하면 2×4!/6! 한 줄이라 계산 부담이 없다.
    통찰 1개 d1·M_total 5 → 수능 기출이지만 3점급 → ★2.
  tier: star_2
  mechanism_primary: "양 끝 합 10 이하 → 여사건(양 끝 {5,6}) → 1 − 2×4!/6!"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: "crop:fig-0227.png"
  latex: latex-bank/rpm-prob/items/0227.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "카드 수 6 과 기준 합 10 을 바꿀 수 있다. 제약: 기준을 최대 합보다 1 작게 두어야 여사건이 한 가지로 떨어진다. 기준을 더 낮추면 여사건이 여러 조합으로 갈려 골조가 달라진다."
    creative: "(1) 기준을 9 이하로 낮추면 여사건이 {5,6}, {4,6} 두 조합이라 ★3 (2) '양 끝 두 수의 곱이 짝수'로 바꾸면 홀짝 여사건이라 ★2 (3) '이웃한 두 수의 합' 조건으로 바꾸면 배치 전체를 봐야 해 ★4."
```

### 서술형 주관식

```yaml
- id: RPM-PROB-0228
  page: 38
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    7개의 문자 A~G를 일렬로 나열할 때 A, B, C가 이 순서대로 나열될 확률.
  category: "A, B, C가 놓이는 3! 가지 순서가 모두 같은 확률 → 1/3!"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "A, B, C 가 차지하는 세 자리를 고정해 놓고 보면 그 안의 3! 가지 순서가 모두 같은 확률이므로, 지정된 순서 하나가 될 확률이 1/3!"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "순열에서 특정 문자들의 순서가 정해진 확률"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    7!/(3! 를 나눈 값) 으로 직접 세도 되지만, 대칭 논증이면 나머지 문자 수와 무관하게 1/3! 로 끝난다.
    [분류 이슈] 서술형 구역(★3 출발)이나 M_total 4·결론 한 줄 → ★2 로 기록.
  tier: star_2
  mechanism_primary: "A, B, C 세 자리 안의 3! 순서가 등확률 → 1/3!"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{1}{6}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0228.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "전체 문자 수 7 과 순서를 고정할 문자 수 3 을 바꿀 수 있다(확률 1/k!). 제약: 전체 문자 수는 답에 영향이 없으므로 순서를 고정할 문자 수만이 실질 변수다."
    creative: "(1) 'A가 B보다 앞'만 요구하면 1/2 로 ★1~2 (2) 'A, B, C 가 이 순서이면서 이웃'으로 바꾸면 묶음 순열이 더해져 ★3 (3) 같은 문자가 섞여 있으면 대칭 논증이 깨져 직접 세야 하므로 ★4."
```

```yaml
- id: RPM-PROB-0229
  page: 38
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    X = {1,2,3,4} 에서 Y = {5,…,10} 으로의 함수 f 중 f(1) ≤ f(2) < f(3) = f(4) 를 만족시킬 확률.
  category: "f(3) = f(4) 로 값 3개로 축소 → f(1) ≤ f(2) < f(3) 개수 세기 → 전체 6^4 로 나누기"
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f(3) = f(4) 라는 등호 조건이 미지의 함숫값을 4개에서 3개로 줄여, 남은 부등식 f(1) ≤ f(2) < f(3) 만 세면 되는 문제로 바뀜"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "등호와 진부등호가 섞인 조건을 'Y 에서 값을 뽑는 개수 세기'로 옮겨, f(3) 을 고정할 때마다 f(1) ≤ f(2) 인 쌍의 수를 누적합으로 계산"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "함수의 개수를 이용한 확률 — 등호·부등호 혼합 조건"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    분모는 6^4 로 쉽지만, 분자는 ≤ 와 < 가 섞여 있어 중복조합 공식 한 방으로 끝나지 않는다.
    f(3) 값을 고정하고 그보다 작은 값들에서 f(1) ≤ f(2) 쌍을 세어 누적하는 이중 구조가 핵심이다.
    통찰 2개(EQV·RT d2)·M_total 11 → 서술형 ★3 출발에서 +1 하여 ★4.
  tier: star_4
  mechanism_primary: "f(3) = f(4) = k 고정 → f(1) ≤ f(2) < k 인 쌍의 수를 k 마다 세어 합 → /6^4"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$\dfrac{35}{1296}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0229.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "Y 의 크기 6 과 X 의 크기 4 를 바꿀 수 있다. 제약: 분모가 |Y|^|X| 이고 분자는 |Y| 에 대한 누적합이므로, |Y| 가 커지면 누적합 항이 그만큼 늘어난다. 등호·진부등호의 배치를 바꾸면 항마다 개수가 하나씩 어긋난다."
    creative: "(1) 조건을 f(1) ≤ f(2) ≤ f(3) ≤ f(4) 로 통일하면 중복조합 H(6,4) 한 줄이라 ★3 (2) f(1) < f(2) < f(3) < f(4) 면 C(6,4) 로 ★2 (3) f(3) = f(4) 대신 'f 가 일대일이 아니다'로 바꾸면 여사건이 필요해 ★4 유지."
```

```yaml
- id: RPM-PROB-0230
  page: 38
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    대만 4종·태국 5종·베트남 7종의 여행 상품 중 세 고객이 서로 다른 상품을 하나씩 택할 때 적어도 한 명은 다른 나라 상품을 택할 확률.
  category: "여사건(세 명 모두 같은 나라) → 나라별 순열 합 → 1에서 빼기"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'적어도 한 명은 다른 나라'를 '세 명이 모두 같은 나라는 아니다'로 옮기면 여사건이 나라 3개의 합으로 간단해짐"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "여사건의 확률 — '적어도 한 명은 다른'"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    고객이 구별되고 상품도 서로 달라야 하므로 전체는 16×15×14 의 순열이고, 여사건도 나라별 순열이다.
    조합으로 세면 분모·분자 모두 틀리므로 '서로 다른 상품을 하나씩'을 순열로 읽는 것이 함정(T-표기).
    통찰 1개 d2·M_total 8·서술형 ★3 출발 → ★3.
  tier: star_3
  mechanism_primary: "적어도 한 명 다른 나라 → 여사건(셋 다 같은 나라) → 1 − (4P3 + 5P3 + 7P3)/16P3"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{73}{80}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0230.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 나라의 상품 수 (4, 5, 7) 과 고객 수 3 을 바꿀 수 있다. 제약: 각 나라의 상품 수가 고객 수 이상이어야 그 나라 단독 경우가 0 이 되지 않고, 총합이 기약분수로 떨어지게 고를 것."
    creative: "(1) '세 명이 모두 같은 나라'를 직접 물으면 여사건이 사라져 ★2 (2) '서로 다른 상품' 조건을 빼면 중복순열이 되어 ★2 (3) '정확히 두 명만 같은 나라'로 바꾸면 분기와 검증이 붙어 ★4."
```

```yaml
- id: RPM-PROB-0231
  page: 38
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    세 주사위 A, B, C의 눈을 a, b, c라 할 때 (a−b)(b−c)(c−a) = 0 일 확률.
  category: "곱이 0 ⟺ 적어도 두 수가 같다 → 여사건은 셋 다 다름"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "대수식 (a−b)(b−c)(c−a) = 0 을 '세 수 중 적어도 두 개가 같다'는 사건으로 읽고, 다시 여사건 '셋이 모두 다르다'로 옮김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "여사건의 확률 — 곱이 0인 조건(적어도 둘이 같다)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    식의 형태만 보면 계산 문제 같지만, 세 인수 중 하나라도 0 이면 된다는 해석으로 옮기는 순간
    '적어도 두 개가 같다'는 전형적인 여사건 문제가 된다. 여사건은 6×5×4 한 줄이다.
    대수식을 사건으로 번역하는 동치 변환(EQV d2)·서술형 ★3 출발 → ★3.
  tier: star_3
  mechanism_primary: "곱 = 0 → 적어도 두 수가 같음 → 여사건(셋 다 다름) → 1 − 6×5×4/6^3"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{4}{9}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0231.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주사위 면 수 6 과 주사위 개수 3 을 바꿀 수 있다(확률 1 − nPk/n^k). 제약: 주사위 개수가 면 수를 넘으면 여사건이 0 이 되어 확률이 1 이 된다."
    creative: "(1) '(a−b)(b−c)(c−a) ≠ 0' 으로 뒤집으면 여사건 없이 한 줄이라 ★2 (2) 주사위를 4개로 늘리면 같은 골조에 수만 커져 ★3 유지 (3) '정확히 두 개만 같을 확률'로 바꾸면 분기·중복 보정이 생겨 ★4."
```

### 실력 Up

```yaml
- id: RPM-PROB-0232
  page: 38
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    X = {a, b, c, d} 의 공집합이 아닌 부분집합 15개 중 서로 다른 두 집합을 택해 각각 A, B라 할 때 A ⊂ B 이고 B ≠ X 일 확률.
  category: "순서쌍 15×14 → B의 크기로 분기 → A는 B의 공집합 아닌 진부분집합"
  M: {s: 3, k: 2, a: 3, t: 3}
  M_total: 11
  insights:
    - step: 1
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "B 의 원소 개수(1, 2, 3)마다 A 로 쓸 수 있는 부분집합 수가 달라져 서로 독립된 세 시나리오로 갈림"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "A ⊂ B, A ≠ ∅, A ≠ B 를 합쳐 'B 의 공집합이 아닌 진부분집합 개수 = 2^|B| − 2' 라는 한 식으로 옮김"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "부분집합의 포함 관계를 이용한 확률"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    함정이 세 겹이다 — 공집합 제외(15개), 서로 다른 두 집합이므로 A ≠ B, 그리고 B ≠ X.
    또 'A, B 라 한다'가 순서를 정하므로 분모는 C(15,2) 가 아니라 15×14 의 순서쌍이다(T-표기).
    B 크기별 분기(MI d2)와 2^|B| − 2 로의 통합(EQV d2)·M_total 11 → 실력 Up ★4.
  tier: star_4
  mechanism_primary: "분모 15×14 → |B| = 1,2,3 분기(B ≠ X) → 각 B 마다 A 는 2^|B| − 2 개 → 합/분모"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$\dfrac{6}{35}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0232.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "X 의 원소 개수 4 를 3·5 로 바꿀 수 있다(부분집합 수 2^n − 1). 제약: n 이 5 이상이면 분기가 4개로 늘어 손 계산이 무거워진다. '공집합 제외'와 'B ≠ X' 중 하나만 걸면 항이 하나씩 달라진다."
    creative: "(1) B ≠ X 조건을 빼면 |B| = 4 분기가 하나 더 붙어 ★4 유지 (2) 'A ⊂ B 또는 B ⊂ A' 로 바꾸면 무순 쌍으로 환원되어 대칭 논증이 생기고 ★4 (3) 'A ∩ B = ∅' 로 바꾸면 각 원소를 세 곳에 배정하는 골조라 ★4."
```

```yaml
- id: RPM-PROB-0233
  page: 38
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: ["평가원 기출"]
  category_type: "실력 Up"
  summary: |
    흰 공 1·2·3·4 와 검은 공 4·5·6·7 에서 2개를 꺼내 다른 색이면 12점, 같은 색이면 두 수의 곱을 점수로 얻는 시행에서 점수가 24 이하의 짝수일 확률을 기약분수로 나타낼 때 분모와 분자의 합.
  category: "색이 다른 경우는 전부 성립 → 같은 색 12쌍만 곱을 24 이하·짝수로 검증"
  M: {s: 3, k: 3, a: 1, t: 3}
  M_total: 10
  insights:
    - step: 1
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'다른 색'과 '같은 색'이 점수 규칙 자체를 다르게 만들어, 두 경우가 완전히 다른 판정 절차를 갖는 독립 시나리오로 갈림"
    - step: 2
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "같은 색 12쌍의 곱을 하나씩 '24 이하'와 '짝수' 두 필터에 통과시켜 일부(흰 1×3, 검은 4×7 이후 등)를 기각해야 답에 도달"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "시행의 점수 규칙과 확률(색 분기 + 조건 필터)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    다른 색이면 무조건 12점이라 조건을 자동 통과하므로 16가지가 통째로 분자에 들어간다.
    남은 것은 같은 색 12쌍뿐이고, 여기서만 곱의 짝·홀과 24 이하 경계를 하나씩 따져 기각해야 한다(T-경계·T-범위).
    숫자 4 가 흰 공과 검은 공에 모두 있는 것도 혼동 지점이다. 통찰 2개·M_total 10 → 실력 Up ★4.
  tier: star_4
  mechanism_primary: "다른 색 16쌍(12점) 전부 성립 + 같은 색 12쌍 중 곱이 24 이하 짝수인 것만 → 합/C(8,2) → p + q"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$51$'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0233.png"
  latex: latex-bank/rpm-prob/items/0233.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공에 적힌 수(흰 1~4·검은 4~7)·다른 색일 때의 점수 12·기준 '24 이하'를 바꿀 수 있다. 제약: 다른 색 점수는 기준을 만족하는 짝수로 두어야 16쌍이 통째로 들어가는 구조가 유지되고, 기준값은 같은 색 쌍의 곱들 사이를 갈라 일부가 기각되도록 고를 것."
    creative: "(1) 다른 색 점수를 홀수(예: 13)로 바꾸면 16쌍이 통째로 빠져 같은 색만 남고 ★3 (2) '점수가 24 이하'만 묻고 짝수 조건을 빼면 필터가 하나 줄어 ★3 (3) 공을 3개 꺼내는 시행으로 바꾸면 색 분기가 4가지가 되어 ★5 급."
```

```yaml
- id: RPM-PROB-0234
  page: 38
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    1~6 이 적힌 6장의 카드를 일렬로 나열할 때 ㈎ 3의 양옆에는 각각 3보다 큰 수 ㈏ 4의 양옆에는 각각 4보다 작은 수가 오도록 놓일 확률.
  category: "3·4는 양 끝에 올 수 없음 → 3과 4의 이웃 여부로 분기 → 각 분기의 이웃 후보 배치"
  M: {s: 3, k: 3, a: 1, t: 3}
  M_total: 10
  insights:
    - step: 1
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'양옆에 각각'이라는 표현이 3과 4가 양 끝 자리에 올 수 없음을 뜻하므로, 끝자리 배치 분기를 먼저 기각해야 함"
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "3과 4가 서로 이웃인 경우와 떨어져 있는 경우가 사용할 수 있는 이웃 후보(3의 이웃은 4·5·6, 4의 이웃은 1·2·3)를 다르게 만들어 독립 분기가 됨"
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 조건을 '3은 {4,5,6} 에, 4는 {1,2,3} 에 둘러싸인다'는 하나의 배치 제약으로 묶어야 남은 카드의 자유도가 계산됨"
  insight_count: 3
  depth_score: 2.00
  type_id: null
  type_hint: "순열을 이용한 확률 — 양옆 대소 조건(복합)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    두 조건이 서로 다른 카드에 걸려 있고, 3의 이웃 후보와 4의 이웃 후보가 3·4 자신을 통해 겹친다.
    끝자리 기각(VF d2) → 3·4 이웃 여부 분기(MI d2) → 남은 카드 자유도 계산 순서가 골조다.
    [분류 이슈] 통찰 3개 + I-VF 보유로 ★5 자격 조건은 만족하나, 참신도 0(시판 빈출 조합)이라 v3.8 §2.14 게이트에 걸려 ★4 로 둔다.
  tier: star_4
  mechanism_primary: "3·4 는 끝자리 불가 → 3과 4 이웃 여부로 분기 → 각 분기에서 3의 이웃 ⊂ {4,5,6}, 4의 이웃 ⊂ {1,2,3} 배치 → 합/6!"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$\dfrac{7}{90}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-prob/items/0234.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "카드 수 6 과 기준 숫자 3·4 를 바꿀 수 있다. 제약: 두 기준 숫자는 서로 이웃한 값이어야 이웃 후보 집합이 서로를 포함하는 지금의 구조가 유지된다. 기준을 2·5 로 떨어뜨리면 후보 집합이 분리되어 분기가 단순해진다."
    creative: "(1) 조건 ㈏ 를 빼면 3의 양옆만 보면 되어 ★3 (2) '3의 양옆 중 적어도 하나가 3보다 크다'로 완화하면 여사건이 필요해 ★4 유지 (3) 원형 배열로 바꾸면 끝자리 기각이 사라져 분기가 하나 줄고 ★3."
```

## 표본 판정 요약 (38문)

- ★ 분포: ★1 2 · ★2 20 · ★3 11 · ★4 5 · ★5 0
- 통찰형 21 · 절차형 17 · premium 0 (insights 가 비어 있지 않은 블록은 24개, 그중 depth 1 단일 통찰 3개는 절차형으로 분류)
- 통찰 유형 분포: I-EQV 12 · I-MI 5 · I-VF 3 · I-BW 3 · I-SYM 2 · I-RT 2 · I-CON 2
- type_hint 상위: 「여사건의 확률」계열 9 · 「순열을 이용한 확률」계열 6 · 「확률의 기본 성질·덧셈정리」계열 5 · 「기하적 확률」 3 · 「조합을 이용한 확률」 3 · 「함수의 개수를 이용한 확률」 2
- 그림: 4문(`crop:fig-0201.png` · `crop:fig-0203.png` · `crop:fig-0226.png` · `crop:fig-0227.png`) + 실력 Up 1문(`crop:fig-0233.png`) — 골조에 그림이 필요한 것은 0226(지름 위 5점·호 위 5점 배치)뿐이고 나머지는 발문에 구조가 이미 서술되어 있다.
- 구역별 ★ 평균: 유형 13 ★2.0 · 유형 UP 14 ★2.7 · 시험에 꼭 나오는 문제 ★2.3 · 서술형 주관식 ★3.0 · 실력 Up ★4.0

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-PROB-0202 | 유형 UP 구역(★3 출발)이나 level 중·통찰 0·판별식과 길이비 2단계뿐 → ★2 | ★2 / ★3 |
| RPM-PROB-0207 | 종합 구역(★2~3 출발)이나 이웃 묶음 순열 한 줄·M_total 4 → −1 하여 ★1 | ★1 / ★2 |
| RPM-PROB-0211 | 종합 구역(★2~3 출발)이나 조건과 무관한 학생이 약분되어 한 줄·M_total 4 → ★1 | ★1 / ★2 |
| RPM-PROB-0228 | 서술형 주관식(★3 출발)이나 대칭 논증 한 줄·M_total 4 → ★2. 직접 세기로 풀면 체감 ★3 | ★2 / ★3 |
| RPM-PROB-0231 | 서술형 ★3 출발을 유지했으나 식을 사건으로 읽은 뒤에는 여사건 한 줄이라 체감 ★2 | ★2 / ★3 |
| RPM-PROB-0234 | 통찰 3개 + I-VF 보유로 v3.8 §2.13 ★5 자격은 만족하나 참신도 0(§2.14 게이트) → ★4 유지 | ★4 / ★5 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: 「기하적 확률(길이비)」와 「기하적 확률(넓이비)」는 도구가 달라 분리(0202 vs 0201·0203). 「완전교란」(0215)은 여사건·순열 어느 쪽에도 붙지 않는 독립 유형. 「확률의 등식에서 미지의 개수 구하기」(0217·0225)는 역방향 구조가 공통이라 별도 유형으로 세울 만하다.
- **통합해도 될 유형**: 여사건 계열 9문(0197~0200·0224·0227·0230·0231)은 표현만 다를 뿐 「여사건으로 항 수를 줄인다」는 한 유형의 변주다. 카탈로그에서는 base ★ 2 의 단일 유형 + '여사건 항이 1개인가 2개 이상인가'를 난이도 축으로 두는 편이 낫다.
- **base ★ 후보**: 여사건 단일 항 ★2 · 순열/조합 기본 확률 ★2 · 기하적 확률 ★3 · 함수의 개수를 이용한 확률 ★3(등호·부등호 혼합이면 ★4) · 부분집합 포함 관계 ★4 · 점수 규칙 + 조건 필터 ★4.
