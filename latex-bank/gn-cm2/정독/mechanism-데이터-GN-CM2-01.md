---
name: mechanism-데이터-GN-CM2-01
description: 개념원리 공통수학2 01 두 점 사이의 거리(1/1 · 11~17쪽 · 31문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학2 (22개정) · 전사본 latex-bank/gn-cm2
  section: 01 두 점 사이의 거리
  unit_code: CM2-01
  part: "1/1"
  extract_range: "11~17쪽 · 11-e1~17-25"
  total_problems: 31
  unit_total: 31
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm2/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm2/items/<id>.tex
  image_source: latex-bank/gn-cm2/figures/ (crops.json)
---

# 개념원리 공통수학2 · 01 두 점 사이의 거리 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 공통수학2 11~17쪽, 단원 01 「두 점 사이의 거리」 31문항 전수를 다룬다. 구역은 네 개다. 「필수·발전 예제」(20문 — `쪽-eN` 필수 예제 6문과 그 뒤에 붙는 `확인체크` 연습 14문), 「연습문제 STEP 1」(4문), 「연습문제 STEP 2」(5문), 「연습문제 실력 UP」(2문). 벤더 난이도 신호는 구역과 태그다: 필수 예제 ★2 · STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4 를 출발점으로 삼았다. 다만 이 책의 `확인체크` 는 독립된 「개념원리 익히기」 코너가 아니라 **직전 필수 예제의 부속 연습**이라, 기본 출발점을 예제와 같은 ★2 로 두고 단계가 눈에 띄게 줄면 ★1, 조건이 한 겹 더 붙거나 통찰이 생기면 ★3 으로 조정했다. 이 단원은 도구가 「거리 공식 한 개 + 이차식 최솟값」으로 좁아 난이도 폭이 실제로 좁고, 그래서 ★2 가 과반이다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(통찰 유형·depth·근거) · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 창의 변형과 ★ 변동 지점)를 채웠다. `answer` 는 전사본 값을 그대로 옮겼고(전사·검수 단계에서 답지와 대조 완료) 정독 단계에서 재검산하지 않았다. 유형 카탈로그가 없는 과목이라 `type_id` · `base_star` 는 null 이고 `effective_star` 는 잠정적으로 `star` 와 같다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-CM2-11-e1
  page: 11
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    ⑴ 두 점 A(3,a), B(-1,2) 사이의 거리가 2√5 일 때 a 의 값 모두.
    ⑵ 세 점 A(3,-2), B(2,a), C(6,1) 에서 AB=BC 일 때 a.
  category: "거리 공식 → 양변 제곱 → a 방정식"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 점 사이의 거리 — 미지수 좌표 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 소문항 모두 거리 공식을 세우고 제곱해 a 를 구하는 표준 절차. ⑴은 제곱항이 남아 이차방정식이 되므로 근을 둘 다 써야 하고(T-범위), ⑵는 a^2 이 상쇄돼 일차식이 된다. 통찰 0·M_total 5 로 −1 후보이지만 소문항 두 개의 노동량과 필수 예제 대표 유형이라는 점을 반영해 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "거리 공식 → 양변 제곱 → a 방정식 → 근 전부"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $a=0$ 또는 $a=4$ ⑵ $a=2$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/11-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 점의 좌표와 주어진 거리를 바꿀 수 있다. 제약: ⑴은 (거리)^2 − (고정 좌표차)^2 가 완전제곱이라야 a 가 유리수 두 개로 떨어지고, ⑵는 AB=BC 에서 a^2 이 상쇄되도록 B 의 미지수를 한 좌표에만 둔다."
    creative: "(1) ⑵를 AB=BC=CA 로 바꿔 정삼각형 조건으로(해가 없거나 무리수 → ★3) (2) ⑴에서 a 두 값의 합·곱을 묻기(근과 계수 → ★2 유지) (3) 거리를 부등식으로 주고 정수 a 를 세면 조건 필터가 붙어 ★3."
```

```yaml
- id: GN-CM2-11-1
  page: 11
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 점 A(a,3), B(1,2-a) 사이의 거리가 2√3 일 때 양수 a.
  category: "거리 공식 → 제곱 → a^2 만 남음 → 양수 선택"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 점 사이의 거리 — 미지수 좌표 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (a-1)^2+(a+1)^2 로 일차항이 상쇄돼 2a^2+2=12 한 줄로 끝난다. 마지막에 양수 조건으로 한쪽 근만 취하는 필터(T-범위)만 있고 단계는 두어 개. 확인체크 출발 ★2 에서 통찰 0·M_total 4 로 −1 → ★1.
  tier: star_1
  mechanism_primary: "거리 공식 → 제곱해 2a^2+2=12 → 양수 근만"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\sqrt{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/11-1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "거리 2√3 과 두 점의 상수부를 바꿀 수 있다. 제약: 일차항이 상쇄되도록 두 좌표의 a 계수를 +1/−1 로 유지하고, 남는 a^2 값이 양수라야 해가 존재한다."
    creative: "(1) 양수 조건을 빼고 a 의 값 모두를 묻기(★1 유지) (2) 거리의 최솟값을 묻는 형태로 바꾸면 이차식 최솟값 통찰이 생겨 ★2 (3) a 를 정수로 제한하고 거리 조건을 부등식으로 주면 ★2~3."
```

```yaml
- id: GN-CM2-11-2
  page: 11
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    세 점 A(4,-5), B(10,1), C(a,4) 에서 AB=2BC 일 때 a 의 값 모두.
  category: "AB 계산 → BC=AB/2 → 제곱 방정식 → 근 둘"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 점 사이의 거리 — 선분 길이의 비 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    AB 를 먼저 수로 확정한 뒤 AB=2BC 를 제곱해 4BC^2=AB^2 로 옮기는 두 단계. 비 조건을 제곱 관계로 바꿀 때 계수 4 를 빠뜨리는 것이 표준 함정이고(T-단위) a 의 값이 둘이라 모두 써야 한다. 통찰 없음·M_total 6 → 확인체크 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "AB 수치화 → AB^2=4BC^2 → (a-10)^2 방정식 → 근 둘"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$7$, $13$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/11-2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A, B 좌표와 비의 값 2 를 바꿀 수 있다. 제약: AB^2 이 비의 제곱으로 나누어떨어져 (a-·)^2 이 완전제곱이 되어야 a 가 정수 두 개로 떨어진다."
    creative: "(1) 비를 AB:BC=3:2 처럼 바꾸기(★2 유지) (2) C 를 x 축 위의 점으로 두고 두 좌표를 모두 미지수로(★2) (3) AB=2BC 를 만족하는 C 가 존재하지 않는 비의 범위를 묻기(★3 · 판별식 조건)."
```

```yaml
- id: GN-CM2-11-3
  page: 11
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 점 A(-1,a), B(a,5) 에 대하여 선분 AB 의 길이가 최소가 되도록 하는 a.
  category: "길이 최소 ↔ 길이의 제곱 최소 → 이차식 완전제곱"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "근호 안이 최소일 때 길이도 최소라는 동치로 옮겨 AB^2 의 이차식을 다룸"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "선분의 길이의 최솟값(거리의 제곱 이차식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    길이를 그대로 두면 근호가 걸려 최솟값을 다룰 수 없고, AB^2=2a^2-8a+26 의 이차식 최소로 옮겨야 풀린다. 이 동치 변환(I-EQV d1)이 이 단원 최솟값 유형의 공통 진입 열쇠. 계산은 완전제곱 한 줄이라 M_total 4 지만 통찰 1개로 확인체크 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "AB^2 을 a 의 이차식으로 → 완전제곱 → 꼭짓점의 a"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/11-3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 점의 상수 좌표를 바꿀 수 있다. 제약: a 의 계수가 두 좌표에서 같은 부호·크기여야 a^2 계수가 2 로 남고, 꼭짓점의 a 가 정수가 되도록 일차항 계수를 4의 배수로 맞춘다."
    creative: "(1) 최솟값 자체(길이 또는 길이의 제곱)를 묻기(★2 유지) (2) 길이가 최소일 때의 두 점의 좌표를 함께 묻기(★2) (3) a 를 정수로 제한하고 길이가 k 이하인 a 를 모두 세면 부등식·정수 필터가 붙어 ★3."
```

```yaml
- id: GN-CM2-12-e2
  page: 12
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    두 점 A(-1,2), B(4,5) 에서 같은 거리에 있는 x 축 위의 점 P 와 y 축 위의 점 Q 의 좌표.
  category: "축 위의 점을 한 문자로 → 등거리 조건 제곱 → 일차방정식"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "같은 거리에 있는 점 — 좌표축 위의 점"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x 축 위의 점은 (x,0), y 축 위의 점은 (0,y) 로 놓는 표준 설정을 두 번 반복한다. PA^2=PB^2 로 제곱해 이차항을 상쇄시키면 일차방정식 한 줄. 나머지 좌표를 0 으로 두는 것을 잊는 것이 유일한 함정(T-표기). 통찰 없음·M_total 6 → 필수 예제 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "P(x,0)·Q(0,y) 설정 → PA^2=PB^2 → 일차방정식"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\pt{P}\left(\dfrac{18}{5},\,0\right)$, $\pt{Q}(0,\,6)$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/12-e2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A, B 의 좌표를 바꿀 수 있다. 제약: x 좌표가 같으면 x 축 위의 등거리 점이 존재하지 않고 y 좌표가 같으면 y 축에서 같은 일이 생기므로 두 좌표 모두 달라야 한다. 답을 정수로 만들려면 좌표 제곱합의 차가 x 좌표차의 2배로 나누어떨어져야 한다."
    creative: "(1) P, Q 를 구해 선분 PQ 의 길이를 묻기(단계 하나 추가 ★2) (2) 축 대신 직선 y=x 위의 점으로(★2) (3) 두 점에서 같은 거리에 있는 점 전체가 수직이등분선임을 설명하게 하면 ★3."
```

```yaml
- id: GN-CM2-12-e3
  page: 12
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    두 점 A(5,-2), B(-7,2) 에서 같은 거리에 있는 직선 y=2x+7 위의 점 P 의 좌표.
  category: "직선 위의 점을 (t, 2t+7) 로 → 등거리 조건 제곱 → t"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "같은 거리에 있는 점 — 직선 위의 점"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    직선 위의 점을 한 문자로 매개화하는 것이 핵심 절차이고 나머지는 12-e2 와 같다. 제곱하면 t^2 항이 상쇄돼 일차방정식이 된다. 축 대신 일반 직선이라 대입이 한 겹 늘 뿐 통찰은 없음 → 필수 예제 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "P(t,2t+7) 매개화 → PA^2=PB^2 → t 일차방정식 → 좌표 복원"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$(4,\,15)$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/12-e3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A, B 좌표와 직선의 기울기·절편을 바꿀 수 있다. 제약: 직선이 AB 의 수직이등분선과 평행하면 해가 없거나 무수히 많으므로 기울기가 AB 수직이등분선의 기울기와 달라야 한다."
    creative: "(1) 구한 P 에서 A 까지의 거리를 마저 묻기(★2, 16-17 형태) (2) 직선을 x=k 나 y=k 로 바꿔 계산을 줄이기(★1~2) (3) 세 점에서 같은 거리에 있는 점으로 확장하면 연립이 되어 외심 유형 ★3."
```

```yaml
- id: GN-CM2-12-4
  page: 12
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 점 A(1,4), B(-2,3) 에서 같은 거리에 있는 x 축 위의 점 P, y 축 위의 점 Q 에 대하여 선분 PQ 의 길이.
  category: "P·Q 각각 등거리 조건 → 좌표 확정 → 거리 공식 한 번 더"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "같은 거리에 있는 점 — 좌표축 위의 점"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    12-e2 와 같은 골조에 거리 공식 한 번이 덧붙은 3단 구성. P 의 x 좌표가 분수라 마지막 근호 정리에서 분모를 유지해야 하는 계산 함정(T-단위)이 있다. 통찰 없음·M_total 6 → 확인체크 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "P(x,0)·Q(0,y) 등거리로 확정 → PQ 거리 공식"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{2\sqrt{10}}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/12-4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A, B 좌표를 바꿀 수 있다. 제약: 답을 깔끔한 근호로 만들려면 P 와 Q 의 좌표가 같은 분모를 갖도록 두 점의 좌표차를 작게 잡는다. 두 점의 x 좌표·y 좌표가 각각 달라야 P, Q 가 존재."
    creative: "(1) 삼각형 OPQ 의 넓이를 묻기(직각삼각형이라 ★2) (2) PQ 의 중점이나 PQ 를 지름으로 하는 원의 넓이로 확장(★3) (3) P, Q 대신 직선 y=x 위의 점과 x 축 위의 점으로(★2~3)."
```

```yaml
- id: GN-CM2-12-5
  page: 12
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 점 A(2,3), B(6,-1) 에서 같은 거리에 있는 직선 y=-x+2 위의 점 P(a,b) 에 대하여 a-b 의 값.
  category: "P(a, -a+2) 매개화 → 등거리 제곱 → a, b 확정 → a-b"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "같은 거리에 있는 점 — 직선 위의 점"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    12-e3 의 확인체크판. 답이 좌표가 아니라 a-b 라는 조합값이라 좌표를 구한 뒤 한 단계를 더 밟는다. 기울기 -1 직선이라 전개에서 부호 실수가 잦은 것이 함정(T-부호). 통찰 없음·M_total 6 → 확인체크 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "P(a,-a+2) → PA^2=PB^2 → a 확정 → b=-a+2 → a-b"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/12-5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A, B 좌표와 직선의 절편을 바꿀 수 있다. 제약: 직선의 기울기가 AB 수직이등분선의 기울기와 달라야 유일한 P 가 나오고, a 가 정수로 떨어지도록 상수항을 맞춘다."
    creative: "(1) a+b 나 ab 를 묻기(★2 유지) (2) P 가 제1사분면에 있을 조건을 덧붙이면 범위 판정이 생겨 ★3 (3) 등거리 대신 PA=2PB 로 바꾸면 이차방정식이 되어 근이 둘 → ★3."
```

```yaml
- id: GN-CM2-12-6
  page: 12
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    세 점 A(2,1), B(2,7), C(4,3) 을 꼭짓점으로 하는 삼각형 ABC 의 외심의 좌표.
  category: "외심 정의 → 세 꼭짓점에서 등거리 → 연립일차방정식"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "외심이라는 기하 용어를 PA=PB=PC 라는 거리 조건으로 옮겨야 좌표 계산이 시작됨"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각형의 외심의 좌표"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    외심을 P(x,y) 로 두고 PA^2=PB^2, PA^2=PC^2 두 식을 세우면 제곱항이 상쇄돼 일차 연립이 된다. 용어를 거리 조건으로 바꾸는 진입 통찰(I-EQV d1)이 하나 있고 이후는 순수 절차. 확인체크 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "P(x,y) → PA^2=PB^2=PC^2 → 일차 연립 → 외심"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$(1,\,4)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/12-6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 점의 좌표를 바꿀 수 있다. 제약: 세 점이 일직선 위에 있으면 외심이 없으므로 피해야 하고, AB 가 수직선이면 한 식이 y 만 남아 계산이 짧아진다. 외심 좌표를 정수로 만들려면 좌표 제곱합의 차를 좌표차의 2배로 나누어떨어지게 잡는다."
    creative: "(1) 외접원의 반지름이나 넓이까지 묻기(17-21 형태 ★3) (2) 무게중심·외심을 함께 묻기(★3) (3) 외심이 변 위에 있게 하는 조건(직각삼각형)을 묻는 역방향 문제(★3 · I-BW)."
```

```yaml
- id: GN-CM2-13-e4
  page: 13
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    세 점 A(9,7), B(2,3), C(8,-1) 을 꼭짓점으로 하는 삼각형 ABC 는 어떤 삼각형인지 말하기.
  category: "세 변의 제곱 계산 → 같은 길이·피타고라스 관계 점검 → 모양 판정"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "세 변의 길이와 삼각형의 모양"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    세 변의 제곱을 모두 구해 둘이 같은지(이등변), 두 개의 합이 나머지와 같은지(직각)를 차례로 점검하는 정해진 절차. 길이 비교만 하고 피타고라스 관계 점검을 빠뜨리면 답이 불완전해지는 것이 함정(T-범위). 통찰로 셀 만한 착안은 없어 절차형 ★2(필수 예제 출발 유지).
    [분류 이슈] 「어떤 삼각형인가」라는 열린 물음을 후보를 모두 따지는 I-MI 로 볼 여지가 있으나, 점검 항목이 교과서에 고정돼 있어 절차로 처리했다.
  tier: star_2
  mechanism_primary: "AB^2·BC^2·CA^2 계산 → 같은 값·합 관계 점검 → 모양 결론"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\seg{AB}=\seg{CA}$인 이등변삼각형'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/13-e4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 점의 좌표를 바꿔 이등변·직각·직각이등변·정삼각형 중 어느 하나가 되게 할 수 있다. 제약: 제곱값이 정수로 떨어지도록 좌표차를 정수로 잡고, 이등변으로 만들 때는 두 변의 제곱만 같고 세 번째는 달라야 한다."
    creative: "(1) 직각이등변삼각형이 되도록 좌표를 설계(점검 항목이 둘이라 ★3) (2) 한 좌표를 미지수로 두고 이등변이 되는 값을 모두 구하기(★3 · 경우 분기) (3) 모양 판정 뒤 넓이까지 묻기(13-9 결합 ★3)."
```

```yaml
- id: GN-CM2-13-7
  page: 13
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴ A(1,0), B(2,-2), C(5,2) ⑵ A(-√3,1), B(0,-2), C(√3,1) 을 꼭짓점으로 하는 삼각형의 모양 판정.
  category: "세 변의 제곱 계산 → 같은 길이·피타고라스 관계 점검 → 모양 판정"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "세 변의 길이와 삼각형의 모양"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    13-e4 와 같은 골조를 두 번 반복한다. ⑵는 좌표에 무리수가 들어 있어 제곱에서 (√3)^2=3 처리를 정확히 해야 세 변이 모두 같음이 보인다(T-단위). 통찰 없음·M_total 6 → 확인체크 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "세 변의 제곱 → 같은 값 / 합 관계 점검 → 직각·정삼각형 결론"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\angle\pt{A}=90^\circ$인 직각삼각형 ⑵ 정삼각형'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/13-7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑵의 정삼각형은 한 변 2√3 인 표준 배치이므로 √3 대신 √k 로 바꿀 때 세 변의 제곱이 모두 같아지도록 높이와 밑변 비를 √3:1 로 유지해야 한다. ⑴은 직각을 만드는 두 변의 제곱합 관계를 유지한 채 평행이동·대칭이동 가능."
    creative: "(1) 어느 꼭짓점이 직각인지까지 묻기(★2 유지) (2) 좌표 하나를 미지수로 두고 정삼각형이 되는 값을 구하기(17-22 형태 ★3) (3) 네 점을 주고 사각형의 모양을 판정하게 하면 변·대각선을 모두 재야 해 ★3."
```

```yaml
- id: GN-CM2-13-8
  page: 13
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    세 점 A(-1,1), B(3,4), C(a,5) 로 이루어진 삼각형이 ∠C=90° 인 직각삼각형일 때 a.
  category: "직각 조건 → 피타고라스 역 CA^2+CB^2=AB^2 → a 방정식"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "∠C=90° 라는 각 조건을 직각을 낀 두 변의 제곱합 관계로 옮겨야 좌표식이 세워짐"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "직각삼각형이 되는 조건(피타고라스 정리의 역)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    직각인 꼭짓점이 C 로 지정돼 있으므로 CA^2+CB^2=AB^2 한 식이면 된다. 각 조건을 길이 관계로 바꾸는 통찰(I-EQV d1) 하나, 이후는 전개와 정리. 결과가 중근이라 값이 하나뿐인 점을 확인해야 한다(T-범위). 확인체크 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "CA^2+CB^2=AB^2 → a 이차방정식 → 중근"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/13-8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A, B 좌표와 C 의 고정 좌표를 바꿀 수 있다. 제약: 이차방정식의 판별식이 0 이상이라야 하고, 중근이 아니라 서로 다른 두 근이 되게 하려면 C 의 고정 좌표를 AB 에서 더 떨어뜨린다."
    creative: "(1) 직각인 꼭짓점을 지정하지 않고 「직각삼각형일 때 a 의 값 모두」로 바꾸면 세 경우를 따져야 해 ★3(I-MI) (2) ∠C 가 둔각일 조건으로 바꾸면 부등식 ★3 (3) 직각이등변이 되는 a 를 묻기(★3)."
```

```yaml
- id: GN-CM2-13-9
  page: 13
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    세 점 A(0,1), B(1,-2), C(3,2) 를 꼭짓점으로 하는 삼각형 ABC 의 넓이.
  category: "세 변의 제곱 → 직각 발견 → 직각을 낀 두 변으로 넓이"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "밑변·높이를 직접 구할 수단이 없는 상태에서 세 변의 제곱 관계로 직각을 찾아내 넓이 계산 가능한 형태로 바꿈"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "세 점으로 이루어진 삼각형의 넓이"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    이 단원의 도구는 거리뿐이라 높이를 직접 구할 방법이 없다. AB^2+CA^2=BC^2 을 확인해 ∠A 가 직각임을 찾아야 비로소 (1/2)·AB·CA 로 넓이가 나온다. 「넓이를 물었는데 먼저 모양을 판정한다」는 진입이 d2 통찰이라 확인체크 출발 ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: "세 변의 제곱 → 피타고라스 관계로 직각 확인 → (1/2)×두 변"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/13-9.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 점을 바꿀 수 있으나 이 단원 도구만으로 풀리려면 직각삼각형이어야 한다. 제약: 직각을 낀 두 변의 제곱이 정수라야 넓이가 유리수로 떨어지고, 두 변의 길이를 √a·√b 로 두면 넓이는 √(ab)/2."
    creative: "(1) 이등변삼각형으로 만들어 높이를 피타고라스로 구하게 하면 단계가 하나 늘어 ★3 유지 (2) 넓이가 주어지고 한 좌표를 구하는 역방향(★4 · I-BW) (3) 직각삼각형의 외접원 넓이로 이어 붙이기(★3)."
```

```yaml
- id: GN-CM2-14-e5
  page: 14
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    두 점 A(-1,0), B(4,6) 과 y 축 위의 점 P 에 대하여 AP^2+BP^2 의 최솟값과 그때의 P 의 좌표.
  category: "P(0,t) 설정 → 제곱합을 t 의 이차식으로 → 꼭짓점"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "거리의 제곱의 합의 최솟값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    이미 제곱의 합으로 주어져 근호를 없애는 착안이 필요 없고, P 를 한 문자로 놓아 이차식의 꼭짓점을 찾는 정해진 절차. 최솟값과 그때의 P 를 둘 다 답해야 하는 점만 놓치기 쉽다(T-표기). 통찰 없음·M_total 6 → 필수 예제 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "P(0,t) → AP^2+BP^2 을 t 이차식으로 → 완전제곱 → 최솟값과 t"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '최솟값: $35$, $\pt{P}(0,\,3)$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/14-e5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A, B 의 좌표를 바꿀 수 있다. 제약: 이차항 계수가 2 로 고정되므로 꼭짓점의 t 는 두 점의 해당 좌표의 평균이다. 답을 정수로 하려면 두 점의 y 좌표 합을 짝수로 잡는다."
    creative: "(1) 최솟값만 묻고 P 는 생략(★2 유지) (2) 축 대신 직선 y=x 나 일반 직선 위의 점으로(14-11·16-18 형태 ★2) (3) 점을 셋으로 늘리기(14-12 ★2~3) (4) AP^2+BP^2 이 아니라 AP+BP 의 최소로 바꾸면 대칭이동 착안이 필요해 ★4."
```

```yaml
- id: GN-CM2-14-10
  page: 14
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 점 A(-4,3), B(2,-3) 과 x 축 위의 점 P 에 대하여 AP^2+BP^2 의 최솟값과 그때의 P 의 좌표.
  category: "P(t,0) 설정 → 제곱합을 t 의 이차식으로 → 꼭짓점"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "거리의 제곱의 합의 최솟값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    14-e5 에서 축만 y 에서 x 로 바뀐 동형 연습. 이차식으로 정리한 뒤 완전제곱 한 번이면 끝난다. 통찰 없음·M_total 6 → 확인체크 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "P(t,0) → AP^2+BP^2 을 t 이차식으로 → 완전제곱 → 최솟값과 t"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '최솟값: $36$, $\pt{P}(-1,\,0)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/14-10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A, B 좌표를 바꿀 수 있다. 제약: 최소가 되는 t 는 두 점의 x 좌표의 평균이므로 합을 짝수로 잡아야 정수 답이 되고, 최솟값은 (y 좌표 제곱합)+(x 좌표차의 제곱)/2 형태로 정리된다."
    creative: "(1) 최솟값이 주어지고 B 의 좌표를 구하는 역방향(★3 · I-BW) (2) x 축 대신 x=k 직선으로 바꾸면 최솟값이 t 와 무관해져 성격이 달라짐(★2) (3) AP^2-BP^2 의 값이 일정한 P 를 묻기(★3)."
```

```yaml
- id: GN-CM2-14-11
  page: 14
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 점 A(-3,2), B(4,5) 와 직선 y=x 위의 점 P 에 대하여 AP^2+BP^2 이 최소가 되게 하는 P 의 좌표.
  category: "P(t,t) 매개화 → 제곱합 이차식 → 꼭짓점 → 좌표 복원"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "거리의 제곱의 합의 최솟값 — 직선 위의 점"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    직선 위의 점이라 좌표 두 개가 모두 t 로 움직여 이차항 계수가 4 가 되는 점만 다르고 골조는 14-e5 와 같다. 묻는 것이 최솟값이 아니라 그때의 P 라 마지막에 좌표로 되돌려야 한다(T-표기). 통찰 없음 → 확인체크 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "P(t,t) → AP^2+BP^2 을 t 이차식으로 → 꼭짓점 t → P(t,t)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$(2,\,2)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/14-11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A, B 좌표와 직선 y=x 의 기울기를 바꿀 수 있다. 제약: 기울기를 m 으로 바꾸면 이차항 계수가 2(1+m^2) 이 되므로 꼭짓점이 정수가 되도록 두 점 좌표를 맞춰야 한다."
    creative: "(1) 최솟값을 함께 묻기(★2 유지) (2) 직선을 y=-x+2 로 바꾸고 점을 셋으로(14-12 ★3) (3) P 가 선분 위에만 있도록 범위를 제한하면 꼭짓점이 구간 밖일 때를 따져야 해 ★3."
```

```yaml
- id: GN-CM2-14-12
  page: 14
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    세 점 A(1,-4), B(3,2), C(-1,-1) 과 직선 y=-x+2 위의 점 P 에 대하여 AP^2+BP^2+CP^2 의 최솟값.
  category: "P(t,-t+2) 매개화 → 세 제곱합 전개 → 이차식 최솟값"
  M: {s: 2, k: 3, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "거리의 제곱의 합의 최솟값 — 세 점"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    골조는 14-e5 와 같고 항이 셋으로 늘어 전개량만 커진다. 기울기 -1 직선이라 부호 처리가 잦아 Mₖ 3. 계산 마찰로 인한 상승은 ★ 에 반영하지 않는다는 v3.8 §2.11 에 따라 확인체크 출발 ★2 유지.
    [분류 이슈] 학생 체감은 ★3 에 가깝지만 통찰이 0 이고 상승 요인이 전개량뿐이라 라벨은 ★2 로 두고 기록만 한다.
  tier: star_2
  mechanism_primary: "P(t,-t+2) → 세 제곱합을 t 이차식으로 → 완전제곱 → 최솟값"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$32$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/14-12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 점의 좌표와 직선을 바꿀 수 있다. 제약: 이차항 계수가 6 이 되므로 꼭짓점이 정수가 되려면 일차항 계수가 6 의 배수여야 하고, 세 점의 좌표합을 3 의 배수로 잡으면 맞추기 쉽다."
    creative: "(1) 최솟값이 될 때의 P 를 함께 묻고 그 P 가 세 점의 무게중심과 어떤 관계인지 설명하게 하면 ★4(I-PD) (2) 직선 제한을 없애면 답이 무게중심이 되어 ★3 (3) 세 점 중 하나를 미지수 좌표로 두기(★3)."
```

```yaml
- id: GN-CM2-15-e6
  page: 15
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    삼각형 ABC 에서 변 BC 의 중점을 M 이라 할 때 AB^2+AC^2=2(AM^2+BM^2) 이 성립함을 좌표평면을 이용해 증명(중선정리).
  category: "좌표 설정(BC 를 x 축, M 을 원점) → 양변을 문자식으로 → 일치 확인"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "순수 기하 명제를 좌표평면으로 옮기고, 일반성을 잃지 않으면서 식이 가장 짧아지는 좌표(BC 를 x 축·중점을 원점)를 스스로 선택"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "좌표를 이용한 도형의 성질의 증명(중선정리)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    계산 자체는 제곱 전개 몇 줄이지만, 어디에 좌표축을 놓느냐가 성패를 가른다. 중점을 원점으로 두면 B(-c,0), C(c,0) 의 대칭 덕에 교차항이 지워지고 양변이 2(a^2+b^2+c^2) 로 바로 만난다. 표현 전환 통찰(I-RT d2)과 문자 좌표(Mₐ 2)·일반성 유지 함정(T-범위)으로 필수 예제 출발 ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: "BC 를 x 축·M 을 원점으로 → A(a,b), B(-c,0), C(c,0) → 양변 전개 → 일치"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '풀이 참조 (직선~$\pt{BC}$를 $x$축, 점~$\pt{M}$을 원점으로 놓고 $\pt{A}(a,\,b)$, $\pt{B}(-c,\,0)$, $\pt{C}(c,\,0)$이라 하면 $\seg{AB}^2+\seg{AC}^2=2(\seg{AM}^2+\seg{BM}^2)=2(a^2+b^2+c^2)$)'
  answer_source: "본문 풀이"
  figure: "crop:fig-15-e6.png"
  latex: latex-bank/gn-cm2/items/15-e6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "증명 문항이라 바꿀 수치는 없고 좌표 설정의 문자만 교체 가능(B(-c,0)·C(c,0) 의 대칭은 유지해야 교차항이 지워진다). 그림의 꼭짓점 라벨 A·B·C·M 은 발문·그림과 함께 고정."
    creative: "(1) 중점 대신 내분점으로 일반화(15-13 ★3) (2) 좌표 설정을 문항이 제시하고 빈칸만 채우게 하면 ★2(17-23 형태) (3) 중선정리를 쓰는 수치 문제(AB, AC, BC 가 주어지고 AM 을 구하기)로 바꾸면 ★2 (4) 세 중선의 제곱합으로 확장하면 ★4."
```

```yaml
- id: GN-CM2-15-13
  page: 15
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    삼각형 ABC 의 변 BC 위의 점 D 가 BD=2CD 일 때 AB^2+2AC^2=3(AD^2+2CD^2) 이 성립함을 좌표평면을 이용해 증명.
  category: "좌표 설정(BC 를 x 축, D 를 원점) → 비 2:1 을 좌표로 → 양변 전개"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "기하 명제를 좌표로 옮기면서 BD=2CD 라는 비를 B(-2c,0), C(c,0) 이라는 좌표 선택 자체에 흡수시킴"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "좌표를 이용한 도형의 성질의 증명(중점의 내분점 일반화)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    15-e6 의 중점을 2:1 내분점으로 바꾼 일반화. 비를 방정식으로 따로 세우지 않고 좌표에 미리 심어 두는 것이 요령이고, 이때 D 가 원점이라 AD^2=a^2+b^2 로 단순해진다. 좌표 선택 통찰(I-RT d2)과 문자 좌표로 확인체크 출발 ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: "BC 를 x 축·D 를 원점으로 → B(-2c,0), C(c,0), A(a,b) → 양변 전개 → 3(a^2+b^2+2c^2)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '풀이 참조 (직선~$\pt{BC}$를 $x$축, 점~$\pt{D}$를 원점으로 놓고 $\pt{A}(a,\,b)$, $\pt{B}(-2c,\,0)$, $\pt{C}(c,\,0)$이라 하면 $\seg{AB}^2+2\seg{AC}^2=3(\seg{AD}^2+2\seg{CD}^2)=3(a^2+b^2+2c^2)$)'
  answer_source: "계산(답지 「풀이 3쪽」)"
  figure: "crop:fig-15-13.png"
  latex: latex-bank/gn-cm2/items/15-13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "비 BD=2CD 의 2 를 m:n 으로 바꿀 수 있다. 제약: 좌표를 B(-mc,0), C(nc,0) 로 두면 항등식의 계수가 비에 맞춰 함께 바뀌므로 증명할 등식의 계수도 같이 고쳐야 한다. 그림 라벨 A·B·C·D 는 고정."
    creative: "(1) 비를 3:1 로 바꾼 등식을 학생이 직접 세워 증명하게 하면 ★4 (2) 일반 m:n 으로 스튜어트 정리 꼴을 유도하게 하면 ★4~5(I-PD) (3) 등식의 한 항을 빈칸으로 비워 두고 채우게 하면 ★2."
```

```yaml
- id: GN-CM2-15-14
  page: 15
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    직사각형 ABCD 와 한 평면 위의 점 P 에 대하여 PA^2+PC^2=PB^2+PD^2 이 성립함을 좌표평면을 이용해 증명.
  category: "좌표 설정(B 를 원점·변을 축으로) → P(x,y) 일반화 → 양변 전개"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "직사각형의 두 변을 축으로 삼아 네 꼭짓점을 (0,0),(a,0),(a,b),(0,b) 로 만들고 P 는 평면 위 임의의 점 (x,y) 로 두는 좌표 전환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "좌표를 이용한 도형의 성질의 증명(직사각형과 임의의 점)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    직사각형이라는 조건을 「두 변을 축으로 잡을 수 있다」로 쓰는 것이 핵심이고, P 를 직사각형 안팎 구분 없이 (x,y) 로 두어야 「한 평면 위」라는 조건을 온전히 만족한다(T-범위). 전개하면 양변 모두 x^2+y^2 항과 a, b 항이 같게 남는다. I-RT d2 로 확인체크 출발 ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: "B 원점·변을 축으로 → A(0,b), C(a,0), D(a,b), P(x,y) → 양변 전개 → 일치"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '풀이 참조 ($\pt{B}$를 원점, 직선~$\pt{BC}$를 $x$축으로 놓고 $\pt{A}(0,\,b)$, $\pt{C}(a,\,0)$, $\pt{D}(a,\,b)$, $\pt{P}(x,\,y)$라 하면 $\seg{PA}^2+\seg{PC}^2=x^2+(y-b)^2+(x-a)^2+y^2=\seg{PB}^2+\seg{PD}^2$)'
  answer_source: "계산(답지 「풀이 4쪽」)"
  figure: "crop:fig-15-14.png"
  latex: latex-bank/gn-cm2/items/15-14.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "증명이라 수치는 없고 변의 길이를 나타내는 문자 a, b 만 교체 가능. 제약: 직사각형이어야 성립하므로 꼭짓점 좌표에서 직각을 깨면 등식이 무너진다. 그림 라벨 A·B·C·D·P 고정."
    creative: "(1) P 를 직사각형 내부로 제한해도 결론이 같음을 확인하게 하기(★3 유지) (2) 직사각형을 평행사변형으로 바꾸면 등식이 성립하지 않음을 반례로 보이기(★4 · I-VF) (3) 수치 직사각형과 P 를 주고 PD 의 길이를 구하게 하는 적용 문제(★2)."
```

### 연습문제 STEP 1

```yaml
- id: GN-CM2-16-15
  page: 16
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    두 점 A(a,4), B(2,a) 사이의 거리가 2 이하가 되게 하는 모든 정수 a 의 값의 합.
  category: "거리 조건을 제곱해 이차부등식 → 범위 → 정수 골라 합"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "거리가 2 이하라는 조건을 양변 제곱해 a 에 대한 이차부등식으로 옮김(양변이 음이 아니라 제곱해도 동치)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 점 사이의 거리 부등식과 정수 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    등식이 아니라 부등식이라 제곱의 동치성을 한 번 짚어야 하고(I-EQV d1), 2≤a≤4 를 얻은 뒤 경계 포함 여부(T-경계)와 정수만 고르는 필터(T-범위)까지 챙겨야 합이 맞는다. 계산은 이차부등식 한 줄. STEP 1 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "AB^2≤4 → a^2-6a+8≤0 → 2≤a≤4 → 정수 2,3,4 의 합"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$9$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/16-15.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준 거리 2 와 두 점의 상수 좌표를 바꿀 수 있다. 제약: 이차부등식의 판별식이 양수라야 구간이 생기고, 구간 양 끝이 정수가 되도록 상수항을 맞추면 정수 개수가 깔끔해진다."
    creative: "(1) 정수 a 의 개수를 묻기(★2 유지) (2) 거리가 2 이상인 범위로 뒤집으면 여집합 구간이 되어 정수가 무한해지므로 조건을 추가해야 함(★3) (3) a 를 실수로 두고 거리의 최솟값을 묻기(★2 · 11-3 형태)."
```

```yaml
- id: GN-CM2-16-16
  page: 16
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제"
  summary: |
    두 점 A(2t,-3), B(-1,2t) 에 대하여 선분 AB 의 길이를 l 이라 할 때 실수 t 에 대한 l^2 의 최솟값.
  category: "l^2 을 t 의 이차식으로 → 완전제곱 → 최솟값"
  M: {s: 1, k: 2, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "매개변수로 움직이는 두 점 사이의 거리의 최솟값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    묻는 것이 l 이 아니라 l^2 이라 근호를 없애는 착안조차 문항이 대신해 준다. l^2=8t^2+16t+10 으로 정리해 완전제곱하면 끝. 두 점이 매개변수 t 로 주어져 Mₐ 2 이지만 단계는 짧다. 기출 태그는 통찰이 없어 +0. STEP 1 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "l^2=(2t+1)^2+(2t+3)^2 → t 이차식 완전제곱 → 최솟값"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/16-16.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 점의 t 계수와 상수를 바꿀 수 있다. 제약: 두 좌표의 t 계수가 같은 부호·크기면 이차항 계수가 8 로 남아 꼭짓점이 정수가 되고, 반대 부호로 두면 일차항이 상쇄돼 최솟값이 상수항으로 바로 나온다."
    creative: "(1) l 의 최솟값(근호 포함)을 묻기(★2 유지) (2) l^2 이 주어진 값 이하가 되는 t 의 범위를 묻기(16-15 결합 ★3) (3) 두 점이 서로 다른 속도로 움직이게 해 시간 해석을 붙이면 17-25 형태 ★4."
```

```yaml
- id: GN-CM2-16-17
  page: 16
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    두 점 A(3,-2), B(2,-1) 에서 같은 거리에 있는 점 P 가 직선 y=2x-1 위에 있을 때 두 점 A, P 사이의 거리.
  category: "P(t,2t-1) 매개화 → PA^2=PB^2 → P 확정 → AP 거리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "같은 거리에 있는 점 — 직선 위의 점"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    12-e3 의 골조에 거리 계산 한 단계가 붙은 3단 구성. 등거리 식을 세우면 t^2 이 상쇄돼 일차방정식이 되고, 구한 P 가 직선 위에 있는지 좌표를 되돌려 확인해야 한다(T-표기). 통찰 없음·M_total 6 → STEP 1 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "P(t,2t-1) → PA^2=PB^2 → t → P → AP 거리 공식"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\sqrt{61}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/16-17.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A, B 좌표와 직선의 기울기·절편을 바꿀 수 있다. 제약: 직선이 AB 의 수직이등분선과 평행하지 않아야 P 가 유일하고, AP^2 이 정수라야 답이 근호 하나로 떨어진다."
    creative: "(1) 삼각형 ABP 의 넓이를 묻기(★3) (2) P 가 원점에서 가장 가까운 등거리 점이 되게 하는 직선을 찾게 하면 ★4(I-BW) (3) 등거리 조건을 PA=2PB 로 바꾸면 근이 둘 → ★3."
```

```yaml
- id: GN-CM2-16-18
  page: 16
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    두 점 A(-2,0), B(2,0) 과 직선 y=x+3 위의 점 P 에 대하여 AP^2+BP^2 의 최솟값.
  category: "P(t,t+3) 매개화 → 제곱합 이차식 → 최솟값"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "거리의 제곱의 합의 최솟값 — 직선 위의 점"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    14-11 과 같은 골조이고 A, B 가 x 축 위에 원점 대칭으로 놓여 있어 전개에서 일차항 일부가 상쇄된다. 꼭짓점의 t 가 분수라 최솟값 계산에서 분수 처리만 조심하면 된다(T-단위). 통찰 없음 → STEP 1 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "P(t,t+3) → AP^2+BP^2=4t^2+12t+26 → 완전제곱 → 최솟값"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$17$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/16-18.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A, B 의 대칭 좌표 ±2 와 직선의 기울기·절편을 바꿀 수 있다. 제약: A, B 를 원점 대칭으로 두면 합이 2t^2+2·(상수) 꼴로 정리돼 꼭짓점이 간단해지고, 절편을 짝수로 두면 최솟값이 정수가 된다."
    creative: "(1) 최솟값일 때의 P 좌표를 함께 묻기(★2 유지) (2) AP^2+BP^2 이 주어진 값이 되는 P 를 모두 구하기(★3 · 근 둘) (3) AP+BP 의 최솟값으로 바꾸면 대칭이동이 필요해 ★4."
```

### 연습문제 STEP 2

```yaml
- id: GN-CM2-16-19
  page: 16
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    집에서 서쪽 3 km·북쪽 2 km 지점에 마트, 집에서 남동쪽(북쪽 기준 시계 방향 135°) 4√2 km 지점에 영화관이 있을 때 마트와 영화관 사이의 직선 거리.
  category: "집을 원점으로 좌표 설정 → 방위·거리 → 좌표 → 거리 공식"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "방위와 거리로만 서술된 상황을 원점·동서남북 축을 스스로 잡아 좌표로 옮기고, 남동쪽 4√2 를 (4,-4) 로 분해"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "실생활 방위·거리 조건의 좌표 설정과 두 점 사이의 거리"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    거리 공식 자체는 마지막 한 줄이고, 어려움은 전부 좌표를 세우는 데 있다. 서·북은 부호로 바로 읽히지만 남동쪽 4√2 는 45° 분해로 x, y 성분이 각각 4 임을 봐야 한다(T-단위: 방향각과 km 혼동). 상황→좌표 전환(I-RT d2) 하나로 STEP 2 출발 ★3 유지.
  tier: star_3
  mechanism_primary: "집 원점 → 마트(-3,2), 영화관(4,-4) → 거리 공식 → √85"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\sqrt{85}\,\mathrm{km}$'
  answer_source: "답지"
  figure: "crop:fig-16-19.png"
  latex: latex-bank/gn-cm2/items/16-19.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "서·북 거리 3, 2 와 남동쪽 거리 4√2 를 바꿀 수 있다. 제약: 대각 방향 거리는 √2 의 배수라야 성분이 정수로 분해되고(k√2 → (k,-k)), 최종 거리의 제곱이 정수라야 답이 근호 하나로 떨어진다. 그림의 집·마트·영화관 배치와 방위 표시는 고정."
    creative: "(1) 세 번째 지점을 추가해 세 지점이 이루는 삼각형의 모양을 묻기(★3) (2) 마트와 영화관의 중간 지점이 집에서 얼마나 떨어져 있는지 묻기(★3) (3) 방위를 북동 60° 처럼 45°의 배수가 아닌 각으로 주면 삼각비가 필요해 단원을 벗어남(출제 금지) (4) 두 사람이 각 지점에서 동시에 출발하는 설정으로 바꾸면 17-25 형태 ★4."
```

```yaml
- id: GN-CM2-16-20
  page: 16
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    세 점 A(a,1), B(0,6), C(12,-3) 의 삼각형에서 ∠A 의 이등분선이 변 BC 와 만나는 점 D 의 좌표가 (8,0) 일 때 모든 a 의 값의 합.
  category: "각의 이등분선 → BD:DC=AB:AC → 거리 제곱식 → 이차방정식 → 근의 합"
  M: {s: 2, k: 3, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "각의 이등분선이라는 조건을 BD:DC=AB:AC 라는 길이의 비로 바꾸어야 좌표 계산이 가능해짐"
    - step: 3
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "a 를 일일이 구하지 않고 이차방정식 근과 계수의 관계로 「모든 값의 합」을 바로 읽음"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "각의 이등분선과 변의 길이의 비(좌표)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    D 가 주어져 BD, DC 를 먼저 수로 구하면 비가 2:1 이므로 AB=2AC, 즉 AB^2=4AC^2 이라는 a 의 이차방정식이 나온다. 중학 기하 정리를 끌어오는 동치 변환(I-EQV d2)과 근의 합을 근과 계수로 처리하는 결합(I-XU d1) 두 개. 통찰 2개로 STEP 2 출발 ★3 에서 +1 → ★4(저노출 유형 XU 보유).
    [분류 이슈] 근과 계수의 관계를 단원 경계 결합(I-XU)으로 인정할지, 표준 절차로 볼지 갈린다. 후자로 보면 통찰 1개·★3.
  tier: star_4
  mechanism_primary: "BD:DC 계산 → AB=2AC → AB^2=4AC^2 → a 이차방정식 → 근의 합"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$32$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/16-20.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "B, C 와 D 의 좌표를 바꿀 수 있다. 제약: D 는 반드시 선분 BC 위에 있어야 하고 BD:DC 가 간단한 정수비라야 계수가 깔끔하다. a 의 이차방정식이 서로 다른 두 실근을 갖도록 판별식을 양수로 유지해야 「모든 값의 합」이 의미를 갖는다."
    creative: "(1) 모든 a 의 곱이나 두 a 의 차를 묻기(★4 유지) (2) 이등분선 조건 대신 삼각형 ABD 와 ADC 의 넓이비를 주면 같은 비가 나오는 다른 통로(★4 · I-SC) (3) D 를 미지수로 두고 이등분선의 발을 구하게 하면 ★5 급 (4) ∠A 의 외각 이등분선으로 바꾸면 외분 비라 부호 처리가 추가돼 ★5."
```

```yaml
- id: GN-CM2-17-21
  page: 17
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    세 점 A(-2,1), B(1,4), C(3,-2) 를 꼭짓점으로 하는 삼각형 ABC 의 외접원의 넓이.
  category: "외심 P 를 등거리로 연립 → 반지름의 제곱 → 넓이"
  M: {s: 2, k: 3, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "외접원의 넓이를 「중심에서 세 꼭짓점까지 같은 거리」라는 조건으로 바꿔 반지름의 제곱을 구하는 문제로 환원"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각형의 외심과 외접원의 넓이"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    12-6 의 외심 구하기에 「반지름의 제곱만 있으면 넓이는 πr^2」라는 한 단계가 붙는다. 외심 좌표가 분수라 연립과 반지름 제곱 계산에서 분수 처리가 무겁고(Mₖ 3), 마지막에 r 을 구하지 말고 r^2 만 쓰면 근호를 피할 수 있다는 요령이 있다. STEP 2 출발 ★3 유지.
  tier: star_3
  mechanism_primary: "P(x,y) 등거리 연립 → 외심 → r^2=PA^2 → 넓이 πr^2"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{85}{8}\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/17-21.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 점의 좌표를 바꿀 수 있다. 제약: 일직선 위에 놓이면 외접원이 없고, 좌표를 잘 고르면 외심이 정수가 되어 난이도가 크게 떨어진다. 분수 외심을 유지하려면 좌표 제곱합의 차가 좌표차의 2배로 나누어떨어지지 않게 둔다."
    creative: "(1) 외접원의 둘레나 반지름을 묻기(★3 유지) (2) 직각삼각형이 되는 세 점으로 바꾸면 빗변의 중점이 외심이라는 착안으로 ★4(I-SC — 연립 대신 성질 이용) (3) 외접원이 원점을 지나게 하는 좌표를 찾는 역방향(★4)."
```

```yaml
- id: GN-CM2-17-22
  page: 17
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    세 점 A(-1,2), B(1,-2), C(a,b) 로 이루어진 삼각형이 정삼각형일 때 ab 의 값.
  category: "CA=CB 로 a, b 관계 → CA^2=AB^2 → b 확정 → ab"
  M: {s: 2, k: 3, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "정삼각형 조건을 CA=CB(→ a 와 b 의 일차 관계)와 CA=AB(→ 크기 결정) 두 식으로 나누어 미지수 둘을 순차로 없앰"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "정삼각형이 되는 꼭짓점의 좌표"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    미지수가 둘이라 조건을 한꺼번에 쓰면 막힌다. 먼저 CA^2=CB^2 에서 이차항이 상쇄돼 a=2b 라는 일차 관계를 얻고, 그다음 CA^2=AB^2=20 에 대입해 b^2=3 을 얻는 순서가 핵심. C 가 AB 의 양쪽에 하나씩 둘 나오지만 ab=2b^2 이라 두 경우 모두 같은 값(T-부호). STEP 2 출발 ★3 유지.
  tier: star_3
  mechanism_primary: "CA^2=CB^2 → a=2b → CA^2=AB^2 → b^2=3 → ab=2b^2"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/17-22.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A, B 의 좌표를 바꿀 수 있다. 제약: AB 를 원점 대칭으로 두면 CA=CB 에서 깔끔한 일차 관계가 나오고, AB^2 이 4의 배수라야 b^2 이 정수로 떨어진다. 정삼각형의 세 번째 꼭짓점은 항상 무리수 좌표가 되므로 묻는 값은 ab, a^2+b^2 처럼 두 해에서 같아지는 대칭식으로 두어야 답이 하나."
    creative: "(1) a+b 를 묻기(두 해에서 부호가 갈려 답이 둘 → ★4 · I-MI) (2) C 의 좌표를 모두 구하게 하기(★4) (3) 정삼각형 대신 직각이등변삼각형 조건으로(★3) (4) 삼각형의 넓이를 묻기(★4)."
```

```yaml
- id: GN-CM2-17-23
  page: 17
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    평행사변형 ABCD 에서 AC^2+BD^2=2(AB^2+BC^2) 임을 좌표로 증명하는 과정의 빈칸 ㈎, ㈏, ㈐ 채우기.
  category: "제시된 좌표 설정 따라가기 → D 좌표 → 양변 전개"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "좌표를 이용한 도형의 성질의 증명(평행사변형) — 빈칸 완성"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    15-e6 계열과 같은 증명이지만 좌표축 선택이 문항에 이미 주어져 있어 가장 어려운 단계가 제거돼 있다. 남는 일은 평행사변형에서 D 의 x 좌표가 a+c 임을 읽고(T-표기) 제곱을 전개하는 것뿐. 좌표 전환 통찰이 학생 몫이 아니므로 절차형으로 보고 STEP 2 출발 ★3 에서 −1 → ★2.
    [분류 이슈] 같은 명제를 스스로 증명하게 하면 ★3(15-e6 수준)이므로, 빈칸형이라는 형식이 ★ 를 한 단 낮추는 사례로 기록한다.
  tier: star_2
  mechanism_primary: "주어진 좌표 설정 → D(a+c, b) → AC^2+BD^2 전개 → AB^2+BC^2 과 비교"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '㈎ $a+c$ ㈏ $2a^2+2b^2+2c^2$ ㈐ $a^2+b^2+c^2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/17-23.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "증명 빈칸이라 수치는 없고 좌표 문자 a, b, c 만 교체 가능. 제약: B 를 원점, BC 를 x 축에 두는 설정을 바꾸면 D 의 좌표와 두 빈칸의 식이 모두 달라지므로 그림·본문과 함께 고쳐야 한다. 그림 라벨 A·B·C·D 고정."
    creative: "(1) 빈칸을 없애고 전체를 증명하게 하면 ★3 (2) 평행사변형을 마름모로 특수화해 대각선 수직 조건까지 유도(★4) (3) 빈칸에 틀린 식을 넣어 두고 잘못된 곳을 찾게 하는 오류 찾기형(★3 · I-VF)."
```

### 연습문제 실력 UP

```yaml
- id: GN-CM2-17-24
  page: 17
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    실수 x, y 에 대하여 √((x-5)^2+(y+2)^2) + √((x+3)^2+(y-4)^2) 의 최솟값.
  category: "두 근호를 거리로 해석 → 점 P 에서 두 점까지의 거리의 합 → 선분 위일 때 최소"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 3
      effective_depth: 3
      signal_ref: []
      description: "대수식으로만 보이는 두 근호를 좌표평면 위 점 P(x,y) 에서 A(5,-2), B(-3,4) 까지의 거리로 읽어내는 표현 전환"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "PA+PB 의 최소는 P 가 선분 AB 위에 있을 때이며 그 값이 AB 라는 동치(삼각부등식)로 최솟값을 확정"
  insight_count: 2
  depth_score: 2.50
  type_id: null
  type_hint: "근호 두 개의 합의 최솟값 — 거리의 합으로 해석"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    식을 대수적으로 다루려 하면 미지수 두 개의 무리식이라 손도 못 댄다. 두 근호를 각각 거리로 읽는 순간(I-RT d3) 문제가 「두 점까지의 거리의 합의 최소」로 바뀌고, 삼각부등식으로 답이 AB 임을 확정한다(I-EQV d2). 계산은 마지막 거리 한 줄이라 M_total 5 지만 진입 저항이 이 단원 최고. 실력 UP 출발 ★4 유지(저노출 유형 RT 보유).
  tier: star_4
  mechanism_primary: "두 근호 → PA+PB 로 해석 → P 가 선분 AB 위일 때 최소 → AB=10"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$10$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/17-24.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 점 (5,-2), (-3,4) 를 바꿀 수 있다. 제약: 두 점의 좌표차가 피타고라스 수 조합(6,8 / 5,12 / 9,12)이라야 답이 정수로 떨어진다. 근호 안의 부호를 (x-p)^2 꼴로 유지해야 점의 좌표를 바로 읽을 수 있다."
    creative: "(1) x, y 에 제약(예: y=0 또는 x+y=1)을 걸면 P 가 직선 위로 묶여 대칭이동이 필요해 ★5 (2) 두 근호의 차의 최댓값으로 바꾸면 역시 삼각부등식이지만 방향이 달라 ★5 (3) 최솟값일 때의 (x,y) 를 함께 묻기(★4 유지) (4) 근호 세 개의 합으로 늘리면 페르마 점 문제가 되어 교육과정 밖."
```

```yaml
- id: GN-CM2-17-25
  page: 17
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    수직으로 만나는 두 도로에서 O 의 북쪽 10 km 지점의 A 는 남쪽으로 시속 3 km, 서쪽 5 km 지점의 B 는 동쪽으로 시속 4 km 로 동시에 출발할 때 A 와 B 사이의 거리의 최솟값.
  category: "O 를 원점으로 → t 시간 후 좌표를 t 식으로 → 거리의 제곱 이차식 최소"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "속력과 방향으로 서술된 운동 상황을 O 를 원점으로 한 좌표 A(0,10-3t), B(-5+4t,0) 으로 옮김"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "거리의 최소를 거리의 제곱(이차식)의 최소로 바꿔 근호를 없애고 꼭짓점을 찾음"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "시간에 따라 움직이는 두 점 사이의 거리의 최솟값"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    두 사람이 서로 다른 축 위를 반대 방향으로 움직이므로 좌표를 t 의 일차식으로 세우는 것이 첫 관문이고(I-RT d2), 이어서 거리 대신 거리의 제곱을 다뤄야 이차식 최솟값으로 넘어간다(I-EQV d1). 출발 위치와 속력의 부호를 잘못 잡으면 t 계수가 뒤집히는 함정(T-부호). 통찰 2개로 실력 UP 출발 ★4 유지.
  tier: star_4
  mechanism_primary: "O 원점 → A(0,10-3t), B(-5+4t,0) → AB^2=25t^2-100t+125 → 꼭짓점 t=2 → 5"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$5\,\mathrm{km}$'
  answer_source: "답지"
  figure: "crop:fig-17-25.png"
  latex: latex-bank/gn-cm2/items/17-25.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "출발 거리 10, 5 와 속력 3, 4 를 바꿀 수 있다. 제약: 최소가 되는 t 가 양수라야 실제 상황에서 의미가 있고(t≥0), 거리의 제곱의 최솟값이 완전제곱수라야 답이 정수 km 로 떨어진다. 속력 3, 4 는 이차항 계수 25 를 만들어 답을 정수로 만드는 조합."
    creative: "(1) 두 사람이 가장 가까워지는 시각을 묻기(★4 유지) (2) 한 사람의 출발을 t=1 시간 늦추면 정의역 제한이 생겨 ★5 (3) B 가 O 를 지나 계속 동쪽으로 갈 때 거리가 다시 멀어지는 구간을 묻기(★4) (4) 거리가 처음으로 k km 가 되는 시각을 묻으면 이차방정식의 근 판정이 붙어 ★4."
```

## 표본 판정 요약 (31문)

- ★ 분포: ★1 1 · ★2 20 · ★3 7 · ★4 3 · ★5 0
- 통찰형 14 · 절차형 17 · premium 0
- 통찰 유형 분포: I-EQV 9(d1 6 · d2 3) · I-RT 6(d1 0 · d2 5 · d3 1) · I-XU 1. I-SC·I-VF·I-SYM·I-PD·I-MI·I-BW 는 이 범위에 없음 — ★5 가 0 인 이유(§2.13 저노출 유형 부재).
- type_hint 상위 5: 「같은 거리에 있는 점(좌표축·직선 위)」 5 · 「거리의 제곱의 합의 최솟값」 5 · 「좌표를 이용한 도형의 성질의 증명」 4 · 「두 점 사이의 거리 — 미지수 좌표」 3 · 「거리(제곱)의 최솟값 — 이차식」 3
- 구역별 ★ 중앙값: 필수·발전 예제 ★2 · STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4 — 벤더 신호와 대체로 일치
- 그림: 5문(`crop:fig-15-e6.png` · `crop:fig-15-13.png` · `crop:fig-15-14.png` · `crop:fig-16-19.png` · `crop:fig-17-25.png`). 17-23 은 발문 안에 증명 그림이 포함돼 있으나 전사본에 `figure` 필드가 없어 none 으로 둔다.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CM2-13-e4 | 「어떤 삼각형인가」라는 열린 물음을 후보를 모두 따지는 I-MI 로 볼 여지가 있으나 점검 항목이 교과서에 고정돼 있어 절차형으로 처리 | ★2 / ★3 |
| GN-CM2-14-12 | 학생 체감은 ★3 이나 상승 요인이 전개량(Mₖ 3)뿐이고 통찰 0 — 계산 마찰은 ★ 에 반영하지 않는다는 v3.8 §2.11 에 따라 ★2 유지 | ★2 / ★3 |
| GN-CM2-16-20 | 「모든 a 의 합」을 근과 계수의 관계로 읽는 단계를 I-XU 로 인정할지 표준 절차로 볼지 갈림. 후자면 통찰 1개·★3 | ★3 / ★4 |
| GN-CM2-17-23 | 증명의 좌표 설정이 문항에 제시된 빈칸형이라 가장 어려운 단계가 제거됨. 같은 명제를 스스로 증명하는 15-e6 은 ★3 인데 이 문항은 ★2 — 형식이 ★ 를 한 단 낮추는 사례 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: ① 「같은 거리에 있는 점」은 *좌표축 위*(12-e2·12-4)와 *직선 위*(12-e3·12-5·16-17)를 나눠야 한다 — 후자는 매개화 단계가 하나 더 있고 답이 조합값(a-b)이나 추가 거리로 이어지는 변형이 붙는다. ② 「좌표를 이용한 도형의 성질의 증명」(15-e6·15-13·15-14·17-23)은 *좌표 설정을 학생이 하는가*로 ★ 가 한 단 갈리므로 스스로 설정형/빈칸형을 구분해 둘 것. ③ 17-24 의 「근호 합을 거리로 해석」은 이 단원 유일한 d3 통찰이라 별도 최상위 유형으로 세울 가치가 있다.
- **통합해도 될 유형**: ① 「거리의 제곱의 합의 최솟값」은 축 위(14-e5·14-10)·직선 위(14-11·16-18)·세 점(14-12)이 모두 같은 골조(한 문자 매개화 → 이차식 꼭짓점)라 한 유형의 난이도 단계로 묶는 것이 낫다. ② 11-3·16-16·17-25 의 「거리(제곱)의 최솟값」도 같은 이차식 최소 골조이며 상황 서술의 두께만 다르다. ③ 12-6 과 17-21 은 외심 구하기 하나로 묶고 「외접원의 넓이까지」를 한 단계 위로 둔다.
- **이 범위에 없어 보충이 필요한 통찰**: I-SC·I-VF·I-SYM·I-PD. 이 단원만으로는 ★5 슬롯을 만들 수 없으므로(§2.13) 변형 출제 때 대칭이동을 쓰는 최단 경로(AP+BP 최소)나 케이스 기각형(17-22 의 a+b 형태)을 의도적으로 설계해야 한다.
