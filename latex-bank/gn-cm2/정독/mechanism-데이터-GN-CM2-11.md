---
name: mechanism-데이터-GN-CM2-11
description: 개념원리 공통수학2 11 평행이동(1/1 · 99~104쪽 27문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학2 (22개정) · 전사본 latex-bank/gn-cm2
  section: 11 평행이동
  unit_code: CM2-11
  part: "1/1"
  extract_range: "99~104쪽 · 99-229~104-252"
  total_problems: 27
  unit_total: 27
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). insight_type 은 insights 가 비면 절차형, 하나라도 있으면 통찰형. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm2/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm2/items/<id>.tex
  image_source: latex-bank/gn-cm2/figures/ (crops.json)
---

# 개념원리 공통수학2 · 11 평행이동 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 공통수학2 99~104쪽, 단원 11 「평행이동」 27문항 전수를 다룬다. 구역은 전사본 group 순서대로 「개념원리 익히기」 4문 · 「필수·발전 예제」 11문(필수 예제 3 · 확인체크 8) · 「연습문제 STEP 1」 5문 · 「연습문제 STEP 2」 6문 · 「연습문제 실력 UP」 1문이다. 이 단원에는 발전 예제와 특강이 없다.

벤더 난이도 신호는 구역과 태그다. 「개념원리 익히기」(통번호)는 개념 확인 → ★1 출발, 「필수 예제」(쪽-eN · tag 필수) → ★2 출발, 예제 뒤에 붙는 확인체크는 앞선 예제의 출발점을 그대로 따랐다(이 범위는 전부 필수 예제 뒤라 ★2 출발). 연습문제는 STEP 1 → ★2 · STEP 2 → ★3 · 실력 UP → ★4 출발이며 「교육청 기출」 태그(104-250 한 문항)는 통찰 유무로 +0~1 을 판단했다. 출발점에서 M_total·통찰로 ±1 조정했고 라벨을 억지로 맞추지 않았다.

이 단원의 도구는 극단적으로 좁다. 「점은 이동량을 더한다 · 도형은 x 대신 x-a, y 대신 y-b 를 넣는다」 두 줄이 전부이고, 나머지는 앞 단원(05 직선의 위치 관계 · 07~08 원의 방정식)에서 가져온다. 그래서 변별은 ⑴ 이동량을 어디서 읽어 오는가(대응하는 두 점 · 두 포물선의 꼭짓점 · 두 원의 중심 · f(x-4,y+1)=0 같은 표기), ⑵ 이동한 도형에 어떤 외부 조건을 거는가(직선 위의 점 · 접함 · 두 점에서 만남 · 두 축에 접함 · 내접원)에서 생긴다.

통찰 판정에서 I-XU 는 **앞 단원의 핵심 정리가 실제로 필요할 때만** 인정했다. 원의 일반형에서 중심·반지름을 읽는 정도(100-235 · 102-240 · 103-245)는 표기 해독이라 절차로 두었고, 점과 직선 사이의 거리 공식·평행선 거리·내접원 반지름처럼 별도 단원의 정리가 빠지면 풀이가 끊기는 경우(104-247 · 104-248 · 104-251 · 104-252)에만 I-XU 를 셌다. 이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-CM2-99-229
  page: 99
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑶ 주어진 점을 x축 방향으로 -3, y축 방향으로 4 만큼 평행이동한 점의 좌표 구하기.
    ⑴ (7,2) ⑵ (-6,5) ⑶ (-2,-4).
  category: "점의 평행이동 → 좌표별 덧셈"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "점의 평행이동 — 좌표에 이동량 더하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (x, y) → (x-3, y+4) 를 세 번 적용하는 한 줄짜리 확인 문항. 단원 정의를 그대로 쓰는 첫 문항이라
    분기도 함정도 없다. 개념 확인 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "점의 평행이동 정의 → 각 좌표에 -3, +4 더하기 → 상"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $(4,\,6)$ ⑵ $(-9,\,9)$ ⑶ $(-5,\,0)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/99-229.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이동량 (-3, 4) 와 세 점의 좌표를 자유롭게 바꿀 수 있음. 제약: 점의 평행이동은 제약이 사실상 없으나, 세 소문항의 부호 조합(양양·음양·음음)을 유지해야 부호 연습이라는 원래 의도가 남는다."
    creative: "(1) 이동 후 좌표를 주고 이동 전 점을 묻기(역상 · ★1 유지) (2) 이동 후 점이 특정 사분면에 오도록 이동량의 범위를 묻기(I-MI d1 · ★2) (3) 두 점을 이동해 두 점 사이 거리가 변하지 않음을 확인시키기(★2)."
```

```yaml
- id: GN-CM2-99-230
  page: 99
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑶ 평행이동 (x, y) → (x-5, y+3) 에 의하여 주어진 점이 옮겨지는 점의 좌표 구하기.
    ⑴ (1,3) ⑵ (4,-6) ⑶ (-2,5).
  category: "평행이동 기호 해독 → 좌표별 덧셈"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행이동 기호 (x,y) → (x+a, y+b) 로 점 옮기기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    99-229 와 같은 골조인데 이동량을 말 대신 기호로 준다. 기호를 읽는 순간 -5, +3 이 그대로 이동량이므로
    추가 단계가 없다. 개념 확인 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "기호에서 이동량 (-5, +3) 읽기 → 좌표별 덧셈 → 상"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $(-4,\,6)$ ⑵ $(-1,\,-3)$ ⑶ $(-7,\,8)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/99-230.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기호 안의 -5, +3 과 세 점을 바꿀 수 있음. 제약: 점의 평행이동에서는 기호의 부호가 곧 이동량이므로(도형과 반대) 이 문항으로 부호 규칙을 잘못 일반화하지 않게 뒤의 99-232 와 짝으로 유지한다."
    creative: "(1) 이동 후 점을 주고 기호 안의 미지수를 묻기(★2 · 100-e1 골조) (2) 두 번 연속 평행이동을 합성하게 하기(★2) (3) 기호를 (x,y) → (x+a, y+b) 로 두고 한 점의 대응으로 a, b 를 정한 뒤 다른 점에 적용(★2)."
```

```yaml
- id: GN-CM2-99-231
  page: 99
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑶ 주어진 방정식이 나타내는 도형을 x축 방향으로 2, y축 방향으로 -3 만큼 평행이동한 도형의 방정식 구하기.
    ⑴ 직선 3x-2y+5=0 ⑵ 포물선 y=x^2+4 ⑶ 원 (x-3)^2+(y+4)^2=1.
  category: "도형의 평행이동 → x 대신 x-2, y 대신 y+3 대입 후 정리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "도형의 평행이동 — 방정식에 x-a, y-b 대입"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    점과 달리 방정식에는 이동량의 부호를 반대로 넣는다는 규칙 하나가 전부다. ⑵ 는 전개 정리가,
    ⑶ 은 괄호 안 부호 처리가 한 번씩 붙는다. 개념 확인 구역·통찰 없음이나 대입 후 정리 단계가 있어 M_total 6 → ★1 유지.
  tier: star_1
  mechanism_primary: "도형의 평행이동 규칙 → x 자리에 x-2, y 자리에 y+3 대입 → 전개 정리"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $3x-2y-7=0$ ⑵ $y=x^2-4x+5$ ⑶ $(x-5)^2+(y+7)^2=1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/99-231.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이동량 (2, -3) 과 세 도형의 계수를 바꿀 수 있음. 제약: ⑵ 를 전개형으로 답하게 하려면 이동량이 정수여야 계수가 정수로 떨어지고, ⑶ 은 표준형 그대로 두어야 중심 이동이 눈에 보인다."
    creative: "(1) 이동 후 방정식을 주고 이동 전 도형을 묻기(역방향 · ★2) (2) 이동 후 직선이 원점을 지나도록 이동량을 정하게 하기(I-BW d1 · ★2) (3) 포물선을 꼭짓점 형태로 주고 꼭짓점만 옮겨 쓰게 하기(★1 유지 · 102-e3 골조의 축소판)."
```

```yaml
- id: GN-CM2-99-232
  page: 99
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑶ 평행이동 (x, y) → (x-2, y+5) 에 의하여 주어진 방정식이 나타내는 도형이 옮겨지는 도형의 방정식 구하기.
    ⑴ 직선 2x-y-3=0 ⑵ 포물선 y=-x^2+2x ⑶ 원 (x+3)^2+(y-2)^2=5.
  category: "평행이동 기호 해독 → 방정식에 x+2, y-5 대입 후 정리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행이동 기호로 도형의 방정식 옮기기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    99-230 의 기호와 99-231 의 대입 규칙을 합친 문항. 기호의 -2, +5 를 도형에는 +2, -5 로 뒤집어 넣어야 해
    이 구역에서 부호 실수가 가장 잘 나오는 자리다. 개념 확인 구역·통찰 없음·M_total 6 → ★1.
  tier: star_1
  mechanism_primary: "기호에서 이동량 (-2, +5) 읽기 → 방정식에 x+2, y-5 대입 → 전개 정리"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $2x-y+6=0$ ⑵ $y=-x^2-2x+5$ ⑶ $(x+5)^2+(y-7)^2=5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/99-232.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기호 안의 -2, +5 와 세 도형의 계수를 바꿀 수 있음. 제약: ⑵ 의 이차항 계수가 음수인 것을 유지해야 전개할 때 부호 처리가 한 겹 더 남고, ⑶ 의 반지름 제곱은 그대로 두어야 중심만 움직였음이 드러난다."
    creative: "(1) 같은 기호로 점과 도형을 한 문항에서 함께 옮기게 해 부호 규칙 차이를 대조시키기(★2) (2) 이동 후 원이 x축에 접하도록 기호 안의 값을 정하게 하기(I-EQV d1 · ★3) (3) 이동 전후 두 직선 사이의 거리를 묻기(I-XU d1 · ★3 · 104-248 골조)."
```

### 필수·발전 예제

```yaml
- id: GN-CM2-100-e1
  page: 100
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ 평행이동 (x, y) → (x+1, y-b) 로 점 (-2,3) 이 (a,2) 로 옮겨질 때 a-b 의 값.
    ⑵ 점 (5,-1) 을 (3,4) 로 옮기는 평행이동으로 점 (1,-3) 이 옮겨지는 점의 좌표.
  category: "점의 대응 → 좌표별 등식으로 이동량·미정계수 결정 → 다른 점에 적용"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "점의 평행이동에서 이동량·미정계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 소문항 모두 「대응하는 좌표끼리 같다」 한 줄로 끝난다. ⑴ 은 기호 안의 미지수를, ⑵ 는 이동량 자체를
    역산할 뿐 도구가 늘지 않는다. 필수 예제 구역·통찰 없음·M_total 6 → 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "대응하는 두 점의 좌표 비교 → 이동량(또는 미정계수) 확정 → 요구한 값 계산"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $-2$ ⑵ $(-1,\,2)$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/100-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 기호 안 +1 과 두 점, ⑵ 의 세 점을 바꿀 수 있음. 제약: ⑴ 은 x 성분이 상수로 주어져 a 가 바로 나오고 y 성분에서 b 가 나오는 구조라, 두 미지수를 같은 성분에 몰면 결정되지 않는다."
    creative: "(1) 이동량을 기호 (x,y) → (x+a, y+b) 로 두고 대응 한 쌍으로 a, b 를 정한 뒤 세 번째 점에 적용(★2 · 103-241 골조) (2) 이동 후 점이 특정 직선 위에 오도록 조건을 추가(★2 · 100-233) (3) 두 쌍의 대응을 주되 한 쌍에 미지수를 넣어 연립이 되게 하기(★3)."
```

```yaml
- id: GN-CM2-100-233
  page: 100
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    평행이동 (x, y) → (x-3, y+2) 로 점 (a,-1) 이 직선 y=2x-3 위의 점으로 옮겨질 때 a 의 값.
  category: "점을 이동한 좌표를 직선 방정식에 대입 → a 에 대한 일차방정식"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행이동한 점이 직선 위에 있을 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    이동한 점 (a-3, 1) 을 직선에 대입하면 끝난다. M_total 5 라 v3.8 의 -1 후보에 걸리지만, 평행이동과
    「직선 위의 점」 두 조건을 한 식으로 잇는 첫 문항이라 필수 예제 뒤 확인체크의 출발점 ★2 를 유지했다.
  tier: star_2
  mechanism_primary: "점 이동 → (a-3, 1) 을 y=2x-3 에 대입 → a"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/100-233.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이동량 (-3, +2) 와 직선의 기울기·절편을 바꿀 수 있음. 제약: 이동 후 y 좌표가 상수로 고정되는 구조(미지수가 x 성분에만 있음)를 유지해야 일차방정식 한 줄로 끝난다."
    creative: "(1) 직선 대신 원 위의 점으로 바꾸면 이차방정식이 되어 근이 둘 생기고 기각이 필요(I-VF d1 · ★3) (2) 미지수를 y 성분에 두기(★2 유지) (3) 이동량을 미지수로 두고 점과 직선을 고정해 이동량의 관계식을 묻기(I-BW d1 · ★3)."
```

```yaml
- id: GN-CM2-100-234
  page: 100
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    점 (2,-4) 를 점 (1,-3) 으로 옮기는 평행이동에 의하여 점 (-3,6) 이 옮겨지는 점의 좌표.
  category: "대응하는 두 점에서 이동량 읽기 → 다른 점에 적용"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 점의 대응에서 이동량 읽어 다른 점 옮기기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    이동량 (-1, +1) 을 빼기 한 번으로 읽고 다시 더하는 두 단계. 100-e1 ⑵ 와 골조가 완전히 같고
    미지수도 없다. 확인체크 출발 ★2 이지만 통찰 없음·M_total 4 로 v3.8 의 -1 이 그대로 적용돼 ★1.
  tier: star_1
  mechanism_primary: "이동량 = 도착 좌표 - 출발 좌표 → 같은 이동량을 다른 점에 더하기"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$(-4,\,7)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/100-234.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 점의 좌표를 자유롭게 바꿀 수 있음. 제약 없음 — 이동량이 정수가 되게만 두면 된다."
    creative: "(1) 옮겨지는 점이 아니라 옮겨지기 전 점을 묻기(역상 · ★2 · 103-243 골조) (2) 대응 정보를 두 점에 나눠 주고 각각에 미지수를 넣기(★2 · 103-241) (3) 평행이동을 두 번 합성한 결과를 묻기(★2)."
```

```yaml
- id: GN-CM2-100-235
  page: 100
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    점 (m,n) 을 x축 방향으로 2, y축 방향으로 -3 만큼 평행이동했더니 원 x^2+y^2-6x+8y+19=0 의 중심과 일치했다.
    이때 mn 의 값.
  category: "원의 일반형에서 중심 읽기 → 이동량을 거꾸로 빼서 (m,n) 결정"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행이동한 점이 원의 중심과 일치할 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    완전제곱으로 중심 (3,-4) 를 읽은 뒤 m+2=3, n-3=-4 를 풀면 끝. 원의 일반형 해독이 한 겹 얹혔지만
    필요한 것은 중심 좌표뿐이라 앞 단원의 정리를 쓴다고 보기 어려워 I-XU 는 세지 않았다.
    확인체크 출발 ★2 · 통찰 없음 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "원 일반형 완전제곱 → 중심 (3,-4) → 이동량 (2,-3) 을 되돌려 (m,n) → mn"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/100-235.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "원의 일반형 계수(-6, 8, 19)와 이동량 (2,-3) 을 바꿀 수 있음. 제약: 중심 좌표가 정수가 되도록 x, y 의 일차항 계수는 짝수로 두고, 상수항은 반지름 제곱이 양수가 되게 잡는다(19 이면 반지름 제곱 6)."
    creative: "(1) 중심 대신 원이 지나는 특정 점과 일치시키기(★2 유지) (2) (m,n) 이 원 위의 점이 되게 하면 이차방정식과 기각이 생김(I-VF d1 · ★3) (3) 이동량을 미지수로 두고 mn 이 최대가 되게 하기(I-BW d2 · ★4)."
```

```yaml
- id: GN-CM2-101-e2
  page: 101
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    점 (-3,4) 를 점 (-1,1) 로 옮기는 평행이동으로 직선 3x-y+2=0 이 직선 ax-y+b=0 으로 옮겨질 때
    상수 a, b 에 대하여 a+b 의 값.
  category: "점의 대응에서 이동량 읽기 → 직선 방정식에 대입 → 계수 비교"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직선의 평행이동에서 미정계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    이동량 (2,-3) 을 읽고 x 자리에 x-2, y 자리에 y+3 을 넣어 정리한 뒤 계수를 맞추는 표준 3단계.
    기울기가 평행이동으로 변하지 않으므로 a 는 사실상 확인이고 b 만 계산이다.
    필수 예제 구역·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "점 대응 → 이동량 (2,-3) → 직선에 x-2, y+3 대입 → 계수 비교로 a, b"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-4$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/101-e2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "대응하는 두 점과 직선의 계수를 바꿀 수 있음. 제약: 목표 직선의 y 계수를 원래와 같게(-1) 고정해야 계수 비교가 한 번에 되고, 다르게 두면 비례상수를 먼저 잡아야 해 한 단계 늘어난다(101-237 이 그 변형)."
    creative: "(1) 이동량을 x축·y축 방향으로 말로 주기(★2 유지 · 101-236) (2) 목표 직선의 x 계수까지 미지수로 두어 비례상수를 잡게 하기(I-EQV d1 · ★3) (3) 이동 전후 두 직선 사이의 거리를 묻기(I-XU d1 · ★3 · 104-248)."
```

```yaml
- id: GN-CM2-101-236
  page: 101
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    직선 2x-3y+k=0 을 x축 방향으로 1, y축 방향으로 -2 만큼 평행이동한 직선이 점 (1,-4) 를 지날 때
    상수 k 의 값.
  category: "직선 평행이동 후 한 점 대입 → k 에 대한 일차방정식"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행이동한 직선이 한 점을 지날 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x 자리에 x-1, y 자리에 y+2 를 넣어 2x-3y+k-8=0 을 얻고 (1,-4) 를 대입하면 k 가 나온다.
    미지수가 상수항 하나라 계수 비교조차 필요 없다. 확인체크 출발 ★2 · 통찰 없음 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "직선에 x-1, y+2 대입 → 점 (1,-4) 대입 → k"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/101-236.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선의 계수 (2,-3), 이동량 (1,-2), 지나는 점을 바꿀 수 있음. 제약: 미지수 k 를 상수항에 두는 한 항상 일차로 풀리고, 계수 쪽에 두면 기울기가 평행이동으로 안 변한다는 성질 때문에 다른 유형이 된다."
    creative: "(1) 미지수를 x 계수에 두기(기울기 조건 문항으로 성격이 바뀜 · ★2) (2) 지나는 점 대신 원점을 지나게 하기(★2 유지) (3) 이동한 직선이 원에 접하게 하기(I-XU d1 · ★3 · 104-247 골조)."
```

```yaml
- id: GN-CM2-101-237
  page: 101
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    점 (1,2) 를 점 (-2,4) 로 옮기는 평행이동으로 직선 3x-4y+2=0 이 직선 3x+py+q=0 으로 옮겨질 때
    상수 p, q 에 대하여 p+q 의 값.
  category: "점의 대응에서 이동량 읽기 → 직선에 대입 → 계수 비교"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직선의 평행이동에서 미정계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    101-e2 와 같은 골조이고 목표 직선의 x 계수가 원래와 같은 3 이라 비례상수가 1 로 고정된다.
    이동량 (-3, 2) 를 도형에는 x+3, y-2 로 뒤집어 넣는 부호가 유일한 실수 지점이다.
    확인체크 출발 ★2 · 통찰 없음 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "점 대응 → 이동량 (-3,2) → 직선에 x+3, y-2 대입 → 계수 비교로 p, q"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$15$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/101-237.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "대응하는 두 점과 직선의 계수를 바꿀 수 있음. 제약: 목표 직선의 x 계수를 원래와 같게 유지해야 비례상수 없이 계수 비교가 되고, p 는 항상 원래 y 계수와 같아지므로 변별은 q 에서만 생긴다."
    creative: "(1) 목표 직선의 x 계수를 배수로 두어 비례상수를 먼저 잡게 하기(I-EQV d1 · ★3) (2) 이동량 대신 이동 전후 직선을 주고 이동량을 묻기(답이 무수히 많아짐 → 조건 추가 필요 · I-MI d2 · ★3 · 103-242 골조) (3) 옮겨진 직선이 원점을 지나게 하는 이동량을 묻기(★3)."
```

```yaml
- id: GN-CM2-101-238
  page: 101
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    직선 y=ax+b 를 x축 방향으로 -3, y축 방향으로 2 만큼 평행이동한 직선과 직선 y=2x+1 이
    y축에서 수직으로 만날 때 상수 a, b 에 대하여 b-a 의 값.
  category: "이동한 직선의 식 → 수직 조건과 y절편 일치 두 식으로 분해 → a, b"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「y축에서 수직으로 만난다」를 기울기 곱이 -1 과 y절편이 같다 두 조건으로 쪼갬"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "평행이동한 직선과 다른 직선의 수직·y절편 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    이동한 직선은 y=ax+3a+b+2. 「y축에서」와 「수직으로」를 각각 다른 식으로 옮기는 것이 이 문항의 전부이고,
    옮기고 나면 a 는 수직 조건에서, b 는 절편 등식에서 한 줄씩 나온다.
    확인체크 출발 ★2 · EQV d1 하나 · M_total 6 → +1 요건(통찰 2개 또는 depth 3) 미달로 ★2 유지.
  tier: star_2
  mechanism_primary: "이동한 직선의 식 → 수직 조건으로 a → y절편 일치로 b → b-a"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/101-238.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이동량 (-3, 2) 와 상대 직선 y=2x+1 의 기울기·절편을 바꿀 수 있음. 제약: 수직 조건에서 a 가 상대 기울기의 음의 역수로 나오므로 상대 기울기를 정수로 두어야 a 가 단순 분수이고, 이동량의 x 성분이 a 와 곱해져 b 에 들어가므로 정수로 둔다."
    creative: "(1) 「x축에서 만난다」로 바꾸면 절편 조건이 근 조건이 되어 한 단계 늘어남(★3) (2) 수직 대신 평행으로 바꾸면 a 가 바로 정해져 EQV 가 사라짐(★2 하한) (3) 만나는 점을 y축이 아닌 특정 점으로 지정하고 a, b 의 관계식을 묻기(I-CON d2 · ★3)."
```

```yaml
- id: GN-CM2-102-e3
  page: 102
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ 포물선 y=2x^2-4x+5 를 x축 방향으로 p, y축 방향으로 p+2 만큼 평행이동한 포물선의 꼭짓점이
    x축 위에 있을 때 p 의 값. ⑵ 평행이동 (x, y) → (x+3, y-4) 로 원 x^2+y^2+4x-2y+a=0 이
    원 (x-1)^2+(y+b)^2=3 으로 옮겨질 때 상수 a, b 의 값.
  category: "포물선은 꼭짓점, 원은 중심·반지름만 옮겨 비교"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "포물선·원의 평행이동 — 꼭짓점·중심 옮기기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    이 단원의 핵심 절약 규칙(포물선은 꼭짓점만, 원은 중심과 반지름만 움직이면 된다)을 보여 주는 대표 예제다.
    ⑴ 은 꼭짓점 (1,3) 을 옮긴 y좌표를 0 으로, ⑵ 는 중심을 옮겨 비교하고 반지름 제곱을 맞춘다.
    필수 예제 구역·통찰 없음·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "표준형·완전제곱으로 꼭짓점·중심 확보 → 이동량 더하기 → 목표 조건과 비교"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $p=-5$ ⑵ $a=2$, $b=3$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/102-e3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 포물선 계수와 y축 이동량 p+2 의 형태, ⑵ 의 원 계수와 이동량을 바꿀 수 있음. 제약: ⑴ 은 두 이동량이 같은 문자로 묶여 있어야 일차방정식 하나로 p 가 정해지고, ⑵ 는 반지름 제곱이 양수(5-a>0)가 되게 a 를 잡아야 한다."
    creative: "(1) ⑴ 의 꼭짓점을 y축 위 또는 직선 위에 오게 하기(★2 유지) (2) ⑴ 에서 꼭짓점이 제1사분면에 오는 p 의 범위를 묻기(I-MI d2 · ★3) (3) ⑵ 에서 옮긴 원이 x축에 접하게 해 a 를 정하기(I-EQV d1 · ★3 · 104-250 골조)."
```

```yaml
- id: GN-CM2-102-239
  page: 102
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    평행이동 (x, y) → (x-a, y+2b) 로 포물선 y=x^2-4x+3 이 포물선 y=x^2-3 으로 옮겨질 때 a+b 의 값.
  category: "두 포물선의 꼭짓점 비교 → 이동량 성분별 등식"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "포물선의 평행이동에서 이동량 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    꼭짓점 (2,-1) 과 (0,-3) 을 읽고 2-a=0, -1+2b=-3 을 각각 푸는 구조. 이차항 계수가 같은 두 포물선이므로
    꼭짓점만 비교하면 된다는 점이 유일한 판단이고 나머지는 대입이다.
    확인체크 출발 ★2 · 통찰 없음 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "두 포물선의 꼭짓점 → 성분별 이동량 등식 → a, b"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/102-239.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 포물선의 계수와 이동량 표기 (-a, +2b) 의 배수를 바꿀 수 있음. 제약: 두 포물선의 이차항 계수가 같아야 평행이동으로 겹칠 수 있고, 꼭짓점 좌표가 정수가 되게 일차항 계수를 짝수로 둔다."
    creative: "(1) 이차항 계수를 다르게 주고 평행이동으로 겹칠 수 없음을 판정하게 하기(I-EQV d2 · ★3) (2) 이동 후 꼭짓점이 원점에 오게 하는 이동량을 묻기(★2 유지) (3) 포물선 대신 세 점으로 주어진 이차함수를 옮기게 하기(★3)."
```

```yaml
- id: GN-CM2-102-240
  page: 102
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    원 x^2+y^2+6x+2y+8=0 을 x축 방향으로 a, y축 방향으로 b 만큼 평행이동하면
    원 x^2+y^2-4x-4y+6=0 과 일치할 때 ab 의 값.
  category: "두 원의 일반형을 표준형으로 → 중심 비교로 이동량"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "원의 평행이동에서 이동량 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 원을 완전제곱해 중심 (-3,-1) 과 (2,2) 를 읽으면 a=5, b=3. 반지름 제곱이 둘 다 2 로 같아야 일치가
    가능하다는 확인이 한 번 들어가지만 값이 주어져 있어 검증에 그친다.
    확인체크 출발 ★2 · 통찰 없음 · 완전제곱 두 번으로 M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "두 원 완전제곱 → 중심 좌표 차이 = 이동량 → ab"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$15$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/102-240.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 원의 일차항 계수와 상수항을 바꿀 수 있음. 제약: 두 원의 반지름 제곱이 반드시 같아야 하고(여기서는 둘 다 2), 중심이 정수 좌표가 되도록 일차항 계수는 짝수로 둔다."
    creative: "(1) 반지름이 다르게 만들어 평행이동으로 겹칠 수 없음을 판정하게 하기(I-EQV d2 · ★3) (2) 한 원의 상수항을 미지수로 두고 일치 조건에서 함께 구하게 하기(★3) (3) 같은 이동량으로 직선을 옮기게 이어 붙이기(★2 · 103-245 골조)."
```

### 연습문제 STEP 1

```yaml
- id: GN-CM2-103-241
  page: 103
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    두 점 A(2,a), B(b,3) 을 각각 A'(-1,5), B'(1,0) 으로 옮기는 평행이동에 의하여
    점 (a+b, a-b) 가 옮겨지는 점의 좌표.
  category: "두 대응쌍이 같은 이동량 → 성분별로 a, b 결정 → 새 점에 적용"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 점의 대응에서 이동량 읽어 다른 점 옮기기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    A 쌍의 x 성분에서 이동량 -3 이, B 쌍의 y 성분에서 -3 이 각각 바로 나오고 그 값을 반대쪽 성분에 넣으면
    b=4, a=8. 두 쌍을 연립할 필요 없이 성분이 서로 엇갈려 주어진 배치가 이 문항의 설계다.
    STEP 1 출발 ★2 · 통찰 없음 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "두 대응쌍의 이동량이 같다 → 성분별 등식으로 a, b → (a+b, a-b) 에 이동량 적용"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$(9,\,1)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/103-241.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 점의 알려진 좌표를 바꿀 수 있음. 제약: 미지수가 A 는 y 성분, B 는 x 성분에 있어야 이동량이 각각 한 번에 읽히고, 둘 다 같은 성분에 두면 이동량이 결정되지 않는다."
    creative: "(1) 미지수를 A 쪽에 둘 다 몰아 연립으로 풀게 하기(★3) (2) 마지막에 옮긴 점이 어떤 직선 위에 오도록 조건을 더하기(★3) (3) 세 번째 점의 상을 주고 이동량의 일관성을 검증하게 하기(I-VF d1 · ★3)."
```

```yaml
- id: GN-CM2-103-242
  page: 103
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    직선 2x-y+4=0 을 x축 방향으로 a, y축 방향으로 b 만큼 평행이동했더니 원래 직선과 일치했다(ab 는 0 이 아님).
    이때 a/b 의 값.
  category: "이동 후 식이 원래와 같을 조건 → 상수항 소거식 → 이동량 비"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「평행이동해도 자기 자신」을 상수항이 그대로 남는다는 등식 -2a+b=0 으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "평행이동해도 자기 자신과 일치하는 직선"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    대입해 2x-y-2a+b+4=0 을 얻은 뒤 원래 식과 같으려면 -2a+b=0. 기하로 보면 이동량이 직선의 방향과 나란하다는 뜻이라
    b/a 가 기울기 2 이고 구하는 값은 그 역수다. 대수와 기하 두 갈래가 있지만 어느 쪽이든 한 줄이라 I-SC 는 세지 않았다.
    STEP 1 출발 ★2 · EQV d1 하나 → ★2 유지.
  tier: star_2
  mechanism_primary: "x-a, y-b 대입 → 상수항 비교로 -2a+b=0 → 이동량의 비"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/103-242.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선의 계수 (2,-1) 과 상수항을 바꿀 수 있음. 제약: ab 가 0 이 아니라는 단서가 있어야 자명한 해가 빠지고, 기울기를 유리수로 두어야 답이 깔끔하다. 상수항은 답에 전혀 영향을 주지 않는다."
    creative: "(1) 원과 같은 도형으로 바꾸면 이동량이 0 뿐이라 명제형 판정 문항이 됨(★2) (2) 포물선을 자기 자신으로 옮기는 이동량이 없음을 설명하게 하기(I-EQV d2 · ★3) (3) 두 직선을 서로 바꾸는 이동량을 묻기(★3 · 답이 무수히 많아 조건 추가 필요)."
```

```yaml
- id: GN-CM2-103-243
  page: 103
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    직선 y=x/2-1 을 x축 방향으로 a, y축 방향으로 -3 만큼 평행이동했더니 직선 y=-x+5 와 y축에서 만났다.
    이 평행이동에 의하여 점 (-1,2) 로 옮겨지는 점의 좌표.
  category: "y축에서 만남 → y절편 일치로 a 결정 → 이동량을 거꾸로 적용해 원상"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「y축에서 만난다」를 두 직선의 y절편이 같다는 등식으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "평행이동한 직선의 y절편 조건과 역상 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    이동한 직선의 y절편 -a/2-4 를 5 와 같다고 두면 a=-18. 마지막에 묻는 것이 상이 아니라 원상이라
    이동량을 반대로 더해야 하는데, 이 방향 뒤집기는 교재가 직전에 다룬 관례라 통찰로 세지 않고 Mt(T-부호)로 처리했다.
    STEP 1 출발 ★2 · EQV d1 하나 → ★2 유지. [분류 이슈] 역상 단계를 I-BW d1 로 세면 통찰 2개가 되어 ★3 후보.
  tier: star_2
  mechanism_primary: "이동한 직선의 y절편 = 상대 직선의 y절편 → a → 점 (-1,2) 에서 이동량을 빼 원상"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$(17,\,5)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/103-243.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "원래 직선의 기울기·절편, y축 이동량 -3, 상대 직선, 마지막 점을 바꿀 수 있음. 제약: 기울기가 분수면 a 가 짝수 배로 나와야 정수가 되고, 상대 직선의 기울기는 답에 관여하지 않으므로 아무 값이나 가능하다."
    creative: "(1) 「x축에서 만났다」로 바꾸면 x절편 계산이 한 단계 늘어남(★3) (2) 마지막을 상으로 묻기(방향 함정 제거 · ★2 하한) (3) 두 직선이 만나는 점이 특정 사분면에 오도록 a 의 범위를 묻기(I-MI d2 · ★3)."
```

```yaml
- id: GN-CM2-103-244
  page: 103
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    도형 f(x,y)=0 을 도형 f(x-4, y+1)=0 으로 옮기는 평행이동에 의하여 포물선 y=x^2+2ax+a+3 이
    옮겨지는 포물선의 꼭짓점 좌표가 (3,b) 일 때 a+b 의 값(a 는 상수).
  category: "f(x-4,y+1)=0 표기를 이동량 (4,-1) 로 해독 → 꼭짓점 이동 → 좌표 비교"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "f(x-4, y+1)=0 이라는 일반 도형 표기를 이동량 (4,-1) 로 읽어 냄"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "f(x-a,y-b)=0 표기를 평행이동으로 읽고 꼭짓점 옮기기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    이 범위에서 이동량을 구체적인 수나 점의 대응이 아니라 일반 도형 기호로 주는 유일한 문항이다.
    표기를 (4,-1) 로 읽고 나면 꼭짓점 (-a, a+3-a^2) 을 옮겨 x좌표를 3 과 맞추는 표준 절차다.
    STEP 1 출발 ★2 · EQV d1 하나 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "표기에서 이동량 (4,-1) → 완전제곱으로 꼭짓점 → x좌표 비교로 a → b 계산"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/103-244.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "표기 안의 -4, +1 과 포물선의 계수, 목표 x좌표 3 을 바꿀 수 있음. 제약: 꼭짓점의 x좌표가 -a 로 a 에 대해 일차라야 한 번에 풀리고, 목표 좌표는 4-a 가 정수 해를 주도록 잡는다."
    creative: "(1) 목표를 꼭짓점의 y좌표로 주면 a 에 대한 이차방정식이 되어 근 두 개와 기각이 생김(I-VF d1 · ★3) (2) f(x,y)=0 대신 y=f(x) 표기로 바꿔 x축·y축 방향을 따로 읽게 하기(★2 유지) (3) 옮긴 포물선이 x축에 접하게 하기(I-EQV d2 · ★3)."
```

```yaml
- id: GN-CM2-103-245
  page: 103
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    원 x^2+(y-1)^2=9 를 원 (x-1)^2+y^2=9 로 옮기는 평행이동에 의하여 직선 x+2y-4=0 이
    직선 x+ay+b=0 으로 옮겨질 때 a+b 의 값(a, b 는 상수).
  category: "두 원의 중심 비교로 이동량 → 직선에 대입 → 계수 비교"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "원의 대응에서 이동량 읽어 직선 옮기기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 원이 모두 표준형이라 중심 (0,1), (1,0) 을 그대로 읽어 이동량 (1,-1) 을 얻고, 직선에 x-1, y+1 을 넣어
    정리하면 된다. 반지름이 같음을 확인하는 단계가 한 번 있지만 값이 주어져 있다.
    STEP 1 출발 ★2 · 통찰 없음 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "두 원의 중심 차이 = 이동량 (1,-1) → 직선에 x-1, y+1 대입 → 계수 비교"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/103-245.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 원의 중심과 공통 반지름, 직선의 계수를 바꿀 수 있음. 제약: 두 원의 반지름이 반드시 같아야 하고, 목표 직선의 x 계수를 1 로 고정해야 비례상수 없이 계수 비교가 된다. 평행이동은 기울기를 바꾸지 않으므로 a 는 항상 원래 y 계수와 같다."
    creative: "(1) 두 원을 일반형으로 주어 완전제곱을 한 겹 넣기(★2 유지 · 102-240 골조) (2) 목표 직선의 x 계수를 배수로 두어 비례상수를 잡게 하기(I-EQV d1 · ★3) (3) 옮긴 직선과 옮긴 원의 위치 관계를 묻기(I-XU d1 · ★3)."
```

### 연습문제 STEP 2

```yaml
- id: GN-CM2-103-246
  page: 103
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    원점 O 와 두 점 A(2,0), C(0,3) 에 대하여 선분 OA, OC 를 두 변으로 하는 직사각형 OABC 를 평행이동해
    직사각형 O'A'B'C' 으로 옮겼더니 B' 의 좌표가 (6,4) 였다. 이때 직선 A'C' 의 y절편.
  category: "그림에서 B 좌표 확정 → 이동량 역산 → A', C' 을 지나는 직선의 y절편"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "직사각형 배치를 좌표로 옮겨 그림에 표시되지 않은 B(2,3) 을 스스로 확정"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "평행이동한 직사각형의 꼭짓점 좌표와 직선의 절편"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    B 의 좌표가 문제에 없고 두 변이 좌표축 위에 있다는 배치에서 (2,3) 임을 먼저 세워야 이동량 (4,1) 이 나온다.
    그다음은 A'(6,1), C'(4,4) 를 지나는 직선을 세워 절편을 읽는 05단원 표준 절차다.
    STEP 2 출발 ★3 · RT d1 하나 · M_total 6 → ★3 유지.
  tier: star_3
  mechanism_primary: "배치에서 B(2,3) → B 와 B' 비교로 이동량 (4,1) → A', C' 이동 → 두 점을 지나는 직선의 y절편"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$10$'
  answer_source: "답지"
  figure: "crop:fig-103-246.png"
  latex: latex-bank/gn-cm2/items/103-246.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A, C 의 좌표(직사각형의 가로·세로)와 B' 의 좌표를 바꿀 수 있음. 제약: 그림 라벨(O, A, B, C 의 배치와 두 변이 좌표축 위에 있다는 조건)은 고정이고, y절편이 유리수로 떨어지려면 A' 과 C' 의 x좌표가 달라야 한다."
    creative: "(1) A'C' 대신 대각선 O'B' 의 방정식이나 두 대각선의 교점을 묻기(★3 유지) (2) 직사각형의 넓이가 보존됨을 이용해 다른 꼭짓점을 역추적하게 하기(I-BW d2 · ★3) (3) 옮긴 직사각형이 어떤 직선에 접하거나 원에 내접하도록 조건을 걸기(I-XU d2 · ★4)."
```

```yaml
- id: GN-CM2-104-247
  page: 104
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    직선 4x+3y-5=0 을 y축 방향으로 k 만큼 평행이동한 직선이 원 (x-1)^2+y^2=4 에 접할 때
    양수 k 의 값.
  category: "이동한 직선과 원의 중심 사이 거리 = 반지름 → 절댓값 방정식 → 양수 선택"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "접함 조건을 08단원의 점과 직선 사이의 거리 공식으로 옮겨야 k 에 대한 식이 생김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "평행이동한 직선이 원에 접할 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    평행이동 자체는 y 자리에 y-k 를 넣는 한 줄이고, 변별은 접함을 거리 공식으로 바꾸는 데서 생긴다.
    절댓값을 풀면 후보가 둘 나오지만 「양수 k」가 발문에 명시돼 기각이 자동이라 I-VF 는 세지 않았다.
    STEP 2 출발 ★3 · XU d1 · 부호와 범위 두 함정으로 M_total 8 → ★3 유지.
  tier: star_3
  mechanism_primary: "y 자리에 y-k 대입 → 중심과의 거리 = 반지름 → 절댓값 방정식 → 양수 k"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/104-247.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선의 계수는 (3,4,5) 피타고라스 쌍을 유지해야 분모가 정수이고, 원의 중심·반지름과 이동 방향(x축으로 바꿔도 됨)은 자유롭다. 제약: 절댓값 방정식의 두 해 중 하나만 양수가 되도록 반지름과 중심을 잡아야 「양수 k」 단서가 유효하다."
    creative: "(1) 양수 조건을 빼고 모든 k 의 합을 묻기(I-MI d2 · ★3) (2) 접함 대신 두 점에서 만날 범위를 묻기(★3 · 104-251 골조) (3) 이동 방향을 x축과 y축 둘 다 미지수로 두고 접할 조건의 자취를 묻기(I-EQV d2 · ★4)."
```

```yaml
- id: GN-CM2-104-248
  page: 104
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    포물선 y=x^2+8x+9 를 포물선 y=x^2 으로 옮기는 평행이동에 의하여 직선 l: 2x-3y-2=0 이 옮겨지는
    직선을 l' 이라 할 때 두 직선 l 과 l' 사이의 거리.
  category: "두 포물선의 꼭짓점으로 이동량 → 직선 옮기기 → 평행한 두 직선 사이의 거리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 3
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "평행이동한 직선은 원래와 평행하므로 05단원의 평행한 두 직선 사이의 거리 공식으로 넘어가야 함"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "평행이동한 직선과 원래 직선 사이의 거리"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    꼭짓점 (-4,-7) 을 원점으로 보내는 이동량 (4,7) 을 읽고 직선을 옮기면 2x-3y+11=0.
    마지막 단계에서 두 직선이 평행임을 알아채고 상수항 차이를 계수 제곱합의 제곱근으로 나누는 도구로 갈아타야 한다.
    STEP 2 출발 ★3 · XU d1 · M_total 6 → ★3 유지.
  tier: star_3
  mechanism_primary: "두 포물선의 꼭짓점 차이 = 이동량 (4,7) → 직선 옮기기 → 평행한 두 직선 사이의 거리"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\sqrt{13}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/104-248.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "포물선의 일차항·상수항(이동량을 결정)과 직선의 계수를 바꿀 수 있음. 제약: 꼭짓점이 정수 좌표가 되도록 일차항 계수를 짝수로 두고, 거리가 무리수로 남아도 되지만 계수 제곱합이 깔끔한 값(13, 25 등)이 되게 잡는 편이 좋다."
    creative: "(1) 두 직선 사이의 거리를 주고 이동량을 역으로 묻기(I-BW d2 · ★4) (2) 직선 대신 원을 옮겨 두 원의 중심 거리·공통현을 묻기(★3 · 104-249 골조) (3) 이동량 중 한 성분만 미지수로 두고 거리가 최소가 되게 하기(★4)."
```

```yaml
- id: GN-CM2-104-249
  page: 104
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    원 C1: x^2+y^2-6x+2y+2=0 을 x축 방향으로 -2, y축 방향으로 p 만큼 평행이동한 원을 C2 라 할 때
    두 원의 중심 사이 거리가 3 이면 C2 의 중심의 좌표(p 는 양수).
  category: "중심 읽기 → 이동량이 곧 중심 변위 → 거리 조건으로 p"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행이동한 원의 중심 사이 거리 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 중심 사이의 거리는 이동량 자체의 크기이므로 중심을 구하지 않고도 4+p^2=9 를 세울 수 있지만,
    답이 중심 좌표라 결국 완전제곱으로 (3,-1) 을 읽어야 한다. 도구가 하나뿐이라 절차형으로 두었다.
    STEP 2 출발 ★3 · 통찰 없음이나 무리수 처리와 양수 조건으로 M_total 8 → ★3 유지.
  tier: star_3
  mechanism_primary: "일반형 완전제곱으로 중심 (3,-1) → 이동량 크기 = 중심 거리 3 → p → C2 의 중심"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$(1,\,\sqrt{5}-1)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/104-249.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "원의 일반형 계수, x축 이동량 -2, 중심 거리 3 을 바꿀 수 있음. 제약: 중심 거리의 제곱에서 x 성분의 제곱을 뺀 값이 양수여야 p 가 존재하고, 피타고라스 쌍(3-4-5 등)으로 잡으면 답이 정수가 된다(지금은 일부러 무리수로 두었다)."
    creative: "(1) 두 원이 외접·내접하도록 조건을 바꾸면 반지름이 개입해 I-XU d1 이 붙음(★3) (2) 양수 조건을 빼고 가능한 p 의 곱을 묻기(I-MI d2 · ★3) (3) 이동량 두 성분을 모두 미지수로 두고 중심 거리가 일정한 자취를 묻기(I-RT d2 · ★4)."
```

```yaml
- id: GN-CM2-104-250
  page: 104
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제"
  summary: |
    두 양수 a, b 에 대하여 원 (x-a)^2+(y-b)^2=b^2 을 x축 방향으로 3, y축 방향으로 -8 만큼 평행이동한 원을 C 라 하자.
    C 가 x축과 y축에 동시에 접할 때 a+b 의 값. 5지선다.
  category: "이동한 원의 중심·반지름 → 두 축에 접함을 절댓값 등식 두 개로 → 부호 분기 기각"
  M: {s: 2, k: 2, a: 3, t: 2}
  M_total: 9
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「두 좌표축에 동시에 접한다」를 중심 좌표의 절댓값이 둘 다 반지름과 같다는 등식 두 개로 옮김"
    - step: 3
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "b-8 의 절댓값을 풀 때 나오는 두 갈래 중 하나가 모순이 되어 기각됨"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "평행이동한 원이 두 좌표축에 동시에 접할 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    반지름이 이동으로 변하지 않아 b 로 고정된 채 중심만 (a+3, b-8) 로 가는 구조가 핵심이다.
    y축 접함에서 a+3 의 절댓값이 b, x축 접함에서 b-8 의 절댓값이 b 이고 후자의 두 갈래 중 하나는 즉시 모순이다.
    STEP 2 출발 ★3 · 통찰 2개로 +1 후보이나 기각이 한 줄 모순이라 실제 저항이 낮아 ★3 유지.
    [분류 이슈] 통찰 2개 + 기출 태그 기준으로는 ★4 후보.
  tier: star_3
  mechanism_primary: "중심 (a+3, b-8)·반지름 b → 두 축 접함의 절댓값 등식 → 모순 갈래 기각 → a, b"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '①'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/104-250.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이동량 (3,-8) 과 원의 중심 문자 배치를 바꿀 수 있음. 제약: 반지름을 중심의 y좌표와 같은 문자 b 로 묶어 두어야 절댓값 등식이 b 에 대한 일차식으로 풀리고, y축 이동량의 절댓값은 반지름의 두 배가 되도록(여기서는 8 = 2 곱하기 4) 잡아야 답이 정수다."
    creative: "(1) 반지름을 독립 문자 r 로 풀면 미지수가 셋이 되어 조건 하나가 더 필요(★4) (2) 한 축에만 접하게 하면 등식이 하나라 분기가 사라짐(★2) (3) 이동 후 원이 제1사분면에 놓이면서 두 축에 접할 조건을 묻기(I-MI d2 추가 · ★4)."
```

```yaml
- id: GN-CM2-104-251
  page: 104
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    평행이동 (x, y) → (x+2, y-3) 으로 원 x^2+(y-1)^2=9 를 옮긴 원이 직선 3x-4y+k=0 과 서로 다른 두 점에서
    만나도록 하는 실수 k 의 범위가 m<k<n 일 때 n-m 의 값.
  category: "중심만 옮기기 → 중심과 직선 사이 거리 < 반지름 → 절댓값 부등식"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 점에서 만날 조건을 08단원의 중심과 직선 사이 거리가 반지름보다 작다는 부등식으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "평행이동한 원과 직선이 서로 다른 두 점에서 만날 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    중심 (0,1) 이 (2,-2) 로 가고 반지름은 3 그대로. 거리 부등식을 세우면 k+14 의 절댓값이 15 보다 작다는 형태가 되고
    구하는 n-m 은 반지름의 열 배(부등식 폭)라 양 끝값을 굳이 계산하지 않아도 되는 구조다.
    STEP 2 출발 ★3 · XU d1 · 부호와 경계 두 함정으로 M_total 8 → ★3 유지.
  tier: star_3
  mechanism_primary: "중심 이동 (2,-2)·반지름 3 → 중심과 직선 거리 < 3 → 절댓값 부등식 → 폭 n-m"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$30$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/104-251.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선의 계수는 (3,4,5) 쌍을 유지해야 분모가 정수이고, 원의 중심·반지름과 이동량은 자유롭다. 제약: 답 n-m 은 반지름 곱하기 2 곱하기 계수 제곱합의 제곱근이므로 반지름과 계수 쌍만 정하면 중심·이동량과 무관하게 결정된다."
    creative: "(1) 접할 조건으로 바꾸면 등식이 되어 k 가 두 값(★3 · 104-247 골조) (2) 만나지 않을 조건으로 바꾸면 범위가 바깥쪽 두 구간이 되어 I-MI d2 추가(★3) (3) 현의 길이를 지정해 k 를 구하게 하면 피타고라스가 한 겹 붙음(I-XU d2 · ★4)."
```

### 연습문제 실력 UP

```yaml
- id: GN-CM2-104-252
  page: 104
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    세 점 O(0,0), A(3,0), B(0,4) 를 꼭짓점으로 하는 삼각형 OAB 를 평행이동한 삼각형 O'A'B' 에서
    B' 의 좌표가 (6,2) 일 때 삼각형 O'A'B' 의 내접원의 방정식.
  category: "이동량 역산 → 직각삼각형의 내접원 반지름 → 직각 꼭짓점 기준으로 내심 좌표"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "평행이동이 모양을 보존하므로 3-4-5 직각삼각형의 내접원 반지름 공식(중학 도형·원의 접선)이 필요"
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "내심이 직각을 낀 두 변에서 각각 반지름만큼 떨어진 점이라는 사실로 좌표를 확정"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "평행이동한 직각삼각형의 내접원의 방정식"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    B 와 B' 에서 이동량 (6,-2) 를 읽으면 세 꼭짓점이 (6,-2), (9,-2), (6,2) 로 가고 직각은 O' 에 남는다.
    이후는 평행이동 단원의 도구가 전혀 쓰이지 않고 직각삼각형 내접원 반지름과 내심 위치로 넘어가는 구조라
    이 범위에서 유일하게 외부 단원 도구가 결정적이다. 실력 UP 출발 ★4 · XU d2 + EQV d1 → ★4 유지.
  tier: star_4
  mechanism_primary: "B 대응으로 이동량 (6,-2) → 세 꼭짓점 이동 → 3-4-5 직각삼각형 내접원 반지름 1 → 직각 꼭짓점에서 (1,1) 만큼 안쪽이 내심"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$(x-7)^2+(y+1)^2=1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/104-252.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A, B 의 좌표(직각을 낀 두 변의 길이)와 B' 의 좌표를 바꿀 수 있음. 제약: 두 변의 길이는 피타고라스 쌍(3-4-5, 6-8-10, 5-12-13)이어야 빗변과 내접원 반지름이 정수로 떨어지고, 직각이 원점에 오는 배치를 유지해야 내심이 꼭짓점에서 반지름만큼 이동한 점으로 한 줄에 나온다."
    creative: "(1) 내접원 대신 외접원의 방정식을 묻기(빗변의 중점이 중심 · I-EQV d1 · ★3) (2) 평행이동 대신 직각 꼭짓점의 상만 주고 나머지를 역추적하게 하기(I-BW d2 · ★4) (3) 내접원이 어떤 직선에 접하거나 다른 원과 만나도록 이어 붙이기(★5 후보 · XU 와 VF 가 함께 붙는 경우)."
```

## 표본 판정 요약 (27문)

- ★ 분포: ★1 5 · ★2 15 · ★3 6 · ★4 1 · ★5 0
- 통찰형 10 · 절차형 17 · premium 0
- 통찰 유형 분포: I-EQV 6(101-238 · 103-242 · 103-243 · 103-244 · 104-250 · 104-252) · I-XU 4(104-247 · 104-248 · 104-251 · 104-252) · I-RT 1(103-246) · I-VF 1(104-250). depth 2 는 104-250 의 EQV 와 104-252 의 XU 둘뿐이고 나머지는 모두 d1 이다.
- M_total 분포: 4 가 3문 · 5 가 1문 · 6 이 13문 · 7 이 4문 · 8 이 5문 · 9 가 1문. 평행이동 자체가 한 줄 대입이라 Ms 가 3 인 문항이 없고, 8 이상은 전부 외부 단원의 거리 공식·절댓값 처리가 붙은 STEP 2 문항이다.
- type_hint 상위 5: 「직선의 평행이동에서 미정계수 구하기」 2(101-e2 · 101-237) · 「두 점의 대응에서 이동량 읽어 다른 점 옮기기」 2(100-234 · 103-241) · 「도형의 평행이동 — 방정식에 x-a, y-b 대입」 1 · 「평행이동 기호로 도형의 방정식 옮기기」 1 · 「평행이동한 원이 두 좌표축에 동시에 접할 조건」 1. 나머지 21개는 모두 1회씩으로, 조건을 거는 대상(점·직선·포물선·원·직사각형·삼각형)과 조건의 종류(위에 있음·지남·수직·접함·만남·일치)를 한 칸씩 채운 배열이다.
- 그림 1문(103-246 · `crop:fig-103-246.png`) · 선택지 1문(104-250) · 기출 태그 1문(104-250 교육청) · vendor_level 은 연습문제 12문만 STEP 1/STEP 2/실력 UP 이고 나머지 15문은 "-".
- 답 대조: 전사본 answer 를 그대로 옮겼고, 골조를 잡는 과정에서 answer 와 어긋나는 조건은 발견되지 않았다.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CM2-103-243 | 마지막에 상이 아니라 원상을 묻는 방향 뒤집기를 I-BW d1 로 셀지 경계. 교재가 직전 구역에서 「점은 이동량을 더한다」를 반복 훈련시킨 뒤의 STEP 1 문항이라 표준 절차로 보고 Mt(T-부호)로 처리했다. 통찰로 세면 통찰 2개가 되어 +1 후보 | ★2 / ★3 |
| GN-CM2-104-250 | 통찰 2개(EQV d2 + VF d1) + 교육청 기출 태그로는 +1 이 적용돼 ★4 후보. 그러나 기각되는 갈래가 b-8=b 즉 0=8 한 줄 모순이라 실제 사고 저항이 낮아 ★3 으로 두었다 | ★3 / ★4 |
| GN-CM2-100-235 · 102-240 · 103-245 · 104-249 | 원의 방정식(07~08단원)을 쓰는 문항을 I-XU 로 셀지의 경계. 이 파일은 「중심·반지름을 읽기만 하면 되는 경우는 표기 해독이라 절차, 점과 직선 사이의 거리·평행선 거리·접선 조건처럼 앞 단원의 정리가 빠지면 풀이가 끊기는 경우만 XU」라는 기준을 적용했다. 기준을 느슨하게 잡으면 이 네 문항도 통찰형이 되고 ★ 는 그대로다 | ★2~★3 (변동 없음) |

벤더 신호와 2단 이상 어긋난 문항은 없다(최대 1단: 100-234 확인체크 ★2 출발 → ★1, 103-246 이하 STEP 2 는 출발점 유지).

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **상위 유형은 두 개면 충분하다.** 이 단원의 실제 골조는 「① 이동량을 확정한다」와 「② 이동한 도형에 조건을 건다」 둘뿐이다. ①의 하위 소스는 말로 주어진 이동량 · 기호 (x,y) → (x+a, y+b) · 대응하는 두 점 · 두 포물선의 꼭짓점 · 두 원의 중심 · f(x-a,y-b)=0 표기 · 도형의 한 꼭짓점(103-246 · 104-252) 일곱 가지이고, 여기서 난이도가 거의 오르지 않는다(전부 ★1~2).
- **통합 후보**: 99-229/99-230 과 99-231/99-232 는 각각 「말로 준 이동량」과 「기호로 준 이동량」의 차이뿐이므로 카탈로그에서는 「점의 평행이동」·「도형의 평행이동」 두 유형에 표기 변형을 소분류로 다는 편이 자연스럽다. base ★ 는 1. 101-e2 와 101-237 도 같은 유형 한 칸(base ★ 2)이고, 100-234 와 103-241 도 같은 칸이다.
- **따로 세울 유형**: 103-242 「평행이동해도 자기 자신과 일치하는 도형」은 이 단원에서만 나오는 고유 골조이고 직선에서만 성립한다는 점이 포인트라 독립 항목이 유용하다. base ★ 2.
- **따로 세울 유형**: 103-244 의 f(x-a, y-b)=0 표기 해독도 독립으로 둔다. 뒤의 대칭이동 단원에서 f(-x, y)=0 · f(y, x)=0 형태로 그대로 재등장하므로 카탈로그에서 대칭이동과 한 묶음으로 관리하는 편이 낫다. base ★ 2.
- **★ 3 이상은 전부 ②쪽이고 외부 단원 유형이다.** 104-247(접함) · 104-248(평행선 거리) · 104-251(두 점에서 만남)은 카탈로그상 「원과 직선의 위치 관계」 유형(08단원)의 변형으로 두고 평행이동은 조건을 한 겹 감싸는 장치로 기술하는 편이 실제 체감에 맞다. 평행이동 유형표에 중복 등재하면 같은 base ★ 가 두 곳에 생긴다.
- **12 대칭이동 정독 뒤 결정할 것**: 「이동한 도형에 조건 걸기」를 평행이동·대칭이동 공통 상위 유형으로 묶을지, 각 단원에 따로 둘지. 이 범위만 보면 평행이동 고유 난이도는 ★2 에서 멈추므로 공통 상위 유형 하나에 이동 종류를 소분류로 다는 쪽이 유력하다.
