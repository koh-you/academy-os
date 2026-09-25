---
name: mechanism-데이터-GN-GEO-14
description: 개념원리 기하 14 공간좌표(1/1 · 116~117쪽 · 7문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 기하 (22개정) · 전사본 latex-bank/gn-geo
  section: 14 공간좌표
  unit_code: GEO-14
  part: "1/1"
  extract_range: "116~117쪽 · 116-219~117-223"
  total_problems: 7
  unit_total: 7
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-geo/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-geo/items/<id>.tex
  image_source: latex-bank/gn-geo/figures/ (crops.json)
---

# 개념원리 기하 · 14 공간좌표 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 기하 14단원 공간좌표 116~117쪽의 7문항 전수를 다룬다. 단원이 「개념원리 익히기」 3문(통번호 219~221)과 「필수·발전 예제」 4문(필수 예제 2 · 확인체크 2)으로만 이루어진 짧은 마무리 단원이라 연습문제 STEP 구역이 없고, 벤더 난이도 신호도 구역(익히기 / 필수 예제 / 확인체크) 하나뿐이다. 내용은 좌표공간의 점 읽기, 좌표축·좌표평면에 내린 수선의 발, 좌표축·좌표평면·원점에 대한 대칭이동 세 규칙이 전부이고, 난이도 차이는 「규칙 한 번」이냐 「두 번 합성 + 문자 대응」이냐에서만 생긴다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(통찰 유형·depth) · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 창의 변형)를 채웠다. 특히 이 단원은 성분 부호와 0 자리를 바꾸면 문제가 쉽게 자명해지거나 두 단계 중 하나가 무의미해지므로, 숫자 변형 제약을 블록마다 명시했다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-GEO-116-219
  page: 116
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ 좌표공간에 놓인 직육면체(⑷는 xy평면 위 직사각형) 그림에서 세 점 P, Q, R 의 좌표를 각각 읽기.
    축 방향 라벨과 모서리 길이(4·3·2 / 2·-1·3 / -2·3·5 / 2·-3)가 그림에 표시돼 있다.
  category: "그림의 축 라벨·모서리 길이 → 세 점의 좌표 읽기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "좌표공간에서 직육면체 그림으로 점의 좌표 읽기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    각 점이 어느 좌표평면·축 위에 있는지 보고 해당 성분을 0 으로 두면 끝나는 정의 확인.
    음의 축 방향(⑵의 -1, ⑶의 -2, ⑷의 -3)에서 부호만 놓치지 않으면 된다.
    익히기 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "그림의 축 방향과 모서리 길이 → 각 점이 놓인 평면·축의 성분을 0 으로 → (x, y, z)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\pt{P}(4,\,0,\,2)$, $\pt{Q}(4,\,3,\,0)$, $\pt{R}(0,\,3,\,2)$ ⑵ $\pt{P}(2,\,-1,\,3)$, $\pt{Q}(0,\,-1,\,3)$, $\pt{R}(2,\,-1,\,0)$ ⑶ $\pt{P}(0,\,0,\,5)$, $\pt{Q}(0,\,3,\,5)$, $\pt{R}(-2,\,3,\,0)$ ⑷ $\pt{P}(2,\,-3,\,0)$, $\pt{Q}(0,\,-3,\,0)$, $\pt{R}(2,\,0,\,0)$'
  answer_source: "답지"
  figure: "crop:fig-116-219.png"
  latex: latex-bank/gn-geo/items/116-219.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직육면체의 세 모서리 길이(4·3·2 등)와 축의 부호 방향을 바꿀 수 있다. 제약: 그림의 축 라벨·꼭짓점 위치와 좌표 부호가 반드시 일치해야 하고, P·Q·R 가 서로 다른 좌표평면·좌표축 위에 오도록 배치를 유지해야 0 이 들어가는 자리가 구분된다."
    creative: "(1) 좌표를 주고 그림에서 해당 꼭짓점을 찾게 하는 역방향(★1~2 · I-BW d1) (2) 한 꼭짓점 좌표만 주고 나머지를 직육면체 구조로 추론하게 하기(117-223 골조 ★2 · I-RT d1) (3) 세 점을 모두 내부 꼭짓점으로 옮겨 0 성분이 사라지면 읽기 난이도가 올라가 ★2."
```

```yaml
- id: GN-GEO-116-220
  page: 116
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑹ 점 P(2, -1, -4) 에서 x축 · y축 · z축 · xy평면 · yz평면 · zx평면에 내린 수선의 발의 좌표.
  category: "수선의 발 규칙 → 성분 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "좌표공간의 점에서 좌표축·좌표평면에 내린 수선의 발"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    축이면 그 축의 성분만 남기고 나머지 둘을 0, 평면이면 그 평면에 없는 한 성분만 0.
    규칙 두 줄을 여섯 번 적용하는 정의 확인이고 남는 성분의 음수 부호만 유지하면 된다.
    익히기 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "축이면 그 성분만 남기고 0 채우기 · 평면이면 빠진 한 성분만 0 → 여섯 좌표"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $(2,\,0,\,0)$ ⑵ $(0,\,-1,\,0)$ ⑶ $(0,\,0,\,-4)$ ⑷ $(2,\,-1,\,0)$ ⑸ $(0,\,-1,\,-4)$ ⑹ $(2,\,0,\,-4)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/116-220.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "점의 좌표 (2, -1, -4) 를 다른 정수 조합으로 바꿀 수 있다. 제약: 세 성분의 절댓값이 서로 다르고 부호가 섞여 있어야 여섯 결과가 모두 구분된다. 성분에 0 을 넣으면 축과 평면의 구분이 흐려지므로 피한다."
    creative: "(1) 수선의 발 좌표를 주고 원래 점 P 를 찾게 하기(★2 · I-BW d1) (2) 점과 각 축·평면 사이의 거리를 묻기(★2) (3) 여섯 수선의 발 중 일부의 좌표 합을 묻는 값 계산형(117-e1 골조 ★2) (4) 여섯 대상을 그대로 두고 점만 문자로 두면 Mₐ 가 올라 ★2."
```

```yaml
- id: GN-GEO-116-221
  page: 116
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑹ 점 P(4, 3, -2) 를 x축 · y축 · z축 · xy평면 · yz평면 · zx평면에 대하여 대칭이동한 점의 좌표.
  category: "대칭이동 부호 규칙 → 성분 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "좌표공간의 점의 좌표축·좌표평면에 대한 대칭이동"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    축 대칭은 그 축의 성분만 부호를 유지하고 나머지 둘을 반전, 평면 대칭은 그 평면에 없는 한 성분만 반전.
    수선의 발(220)과 짝을 이루는 규칙 확인이고 함정은 부호 하나뿐이다(T-부호).
    익히기 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "축 대칭은 그 성분만 부호 유지·나머지 반전 / 평면 대칭은 빠진 성분만 반전 → 여섯 좌표"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $(4,\,-3,\,2)$ ⑵ $(-4,\,3,\,2)$ ⑶ $(-4,\,-3,\,-2)$ ⑷ $(4,\,3,\,2)$ ⑸ $(-4,\,3,\,-2)$ ⑹ $(4,\,-3,\,-2)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/116-221.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "(4, 3, -2) 를 다른 정수 조합으로. 제약: 세 성분이 0 이 아니고 절댓값이 서로 달라야 여섯 대칭 결과가 모두 달라진다. 성분을 모두 양수로 하면 부호 함정이 사라져 난이도가 더 내려간다."
    creative: "(1) 대칭이동한 점을 주고 원래 점 또는 대칭 대상을 찾기(★2 · I-BW d1) (2) 대칭을 두 번 연속 적용(117-e2 · 117-222 골조 ★2) (3) 원점 대칭을 더해 일곱 가지로 확장(★1 유지) (4) 두 대칭의 합성이 어떤 단일 대칭과 같은지 묻기(★3 · I-SYM d2)."
```

### 필수·발전 예제

```yaml
- id: GN-GEO-117-e1
  page: 117
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    점 P(2, 3, 5) 에서 z축에 내린 수선의 발을 A(a, 0, b), xy평면에 내린 수선의 발을 B(2, c, d) 라 할 때 a+b+c+d 의 값.
  category: "두 수선의 발 → 문자 성분 대응 → 합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "좌표공간에서 수선의 발의 좌표"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    z축 수선의 발 (0, 0, 5) 와 xy평면 수선의 발 (2, 3, 0) 을 구한 뒤 문자 자리와 성분을 대응시켜 더한다.
    규칙은 220 과 같고 축·평면 두 종류를 한 문항에서 섞은 뒤 문자 대응 단계가 하나 더 붙는다.
    통찰 0·M_total 5 라 −1 후보이지만 필수 예제 구역이고 축·평면 규칙을 동시에 요구하므로 ★2 유지.
  tier: star_2
  mechanism_primary: "z축 수선의 발 (0,0,5) · xy평면 수선의 발 (2,3,0) → A·B 의 문자 자리 대응 → a+b+c+d"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$8$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/117-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "P 의 좌표 (2, 3, 5) 와 대상 조합(축 1개 + 좌표평면 1개)을 바꿀 수 있다. 제약: 문자로 두는 자리가 실제로 0 이 되는 자리만이면 합이 자명해지므로, 0 이 되는 자리와 값이 남는 자리를 섞어서 문자로 둔다. B 의 x성분처럼 이미 수치로 준 자리는 P 의 성분과 일치시켜야 모순이 없다."
    creative: "(1) 미지수를 P 쪽에 두고 두 수선의 발을 수치로 주어 역추적(★2 · I-BW d1) (2) a+b+c+d 대신 두 수선의 발 사이 거리를 묻기(★3) (3) 대상을 축·평면 셋 이상으로 늘리면 Mₛ 만 오르고 통찰은 그대로여서 ★2 유지(계산 마찰 경고) (4) 수선의 발을 대칭이동으로 바꾸면 117-e2 골조."
```

```yaml
- id: GN-GEO-117-e2
  page: 117
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    점 P(3, 2, -4) 를 x축에 대하여 대칭이동한 점을 Q, Q 를 zx평면에 대하여 대칭이동한 점을 R 라 할 때 R 의 좌표.
  category: "대칭이동 두 번 합성 → 최종 좌표"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "좌표공간에서 대칭이동한 점의 좌표"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x축 대칭으로 y·z 성분 부호를 뒤집어 Q 를 얻고, zx평면 대칭으로 y 성분만 다시 뒤집어 R 를 얻는다.
    규칙 자체는 221 과 같고 합성 순서를 지키며 부호를 두 번 관리하는 것이 유일한 함정이다(T-부호).
    통찰 0·M_total 5 라 −1 후보이지만 필수 예제 구역이고 합성 단계가 붙으므로 ★2 유지.
  tier: star_2
  mechanism_primary: "P → x축 대칭 (y·z 부호 반전) → Q → zx평면 대칭 (y 부호 반전) → R"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$(3,\,2,\,4)$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/117-e2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "P(3, 2, -4) 의 성분과 두 대칭 대상(x축 → zx평면)의 쌍을 바꿀 수 있다. 제약: 두 대칭의 합성이 항등이나 단일 대칭으로 축약되는 쌍은 피한다(예: x축 → yz평면은 원점 대칭과 같아지고, 같은 대상을 두 번 쓰면 항등이 된다). 성분에 0 이 있으면 부호 반전이 드러나지 않는다."
    creative: "(1) R 를 주고 P 를 역추적(★2~3 · I-BW d1) (2) 세 번 연속 대칭으로 늘려 합성이 어떤 단일 대칭과 같은지 묻기(★3 · I-SYM d2) (3) 합성 순서를 바꿔도 결과가 같은지 묻기(★3 · I-SYM d2) (4) 두 번째 단계를 수선의 발로 바꾸면 117-222 골조(★2 유지)."
```

```yaml
- id: GN-GEO-117-222
  page: 117
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    점 P(-1, 5, 6) 을 원점에 대하여 대칭이동한 점에서 yz평면에 내린 수선의 발의 좌표.
  category: "원점 대칭 → yz평면 수선의 발"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "대칭이동과 수선의 발의 합성"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    원점 대칭으로 세 성분을 모두 뒤집어 (1, -5, -6) 을 얻고, yz평면 수선의 발이므로 x 성분만 0 으로 바꾼다.
    두 규칙이 서로 다른 종류(대칭 · 수선의 발)라서 순서를 지켜야 하는 점만 220·221 보다 한 단계 위다.
    [분류 이슈] 확인체크 태그는 ★1 출발 신호지만 두 종류 규칙의 합성이라 ★2 로 둠(1단 차이 · 후보 ★1/★2).
  tier: star_2
  mechanism_primary: "P → 원점 대칭 (세 성분 부호 반전) → yz평면 수선의 발 (x 성분 0) → 좌표"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$(0,\,-5,\,-6)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/117-222.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "P(-1, 5, 6) 의 성분, 대칭 대상(원점), 수선을 내리는 평면(yz)을 바꿀 수 있다. 제약: 대칭 뒤 0 이 되는 성분과 수선의 발에서 0 이 되는 성분이 겹치면 두 단계 중 하나가 무의미해진다. 성분 부호를 섞어야 원점 대칭의 효과가 보인다."
    creative: "(1) 순서를 바꿔 수선의 발을 먼저 내린 뒤 대칭이동하고 결과를 비교하게 하기(★2~3 · I-SYM d1) (2) 최종 좌표를 주고 P 를 역추적(★2 · I-BW d1) (3) 대칭 대상을 좌표축으로 바꾸기(골조 유지 ★2) (4) 두 점의 결과 사이 거리를 묻기(★3)."
```

```yaml
- id: GN-GEO-117-223
  page: 117
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    좌표공간에 한 꼭짓점이 원점, 세 모서리가 각 축 위에 놓인 직육면체 그림에서 꼭짓점 B 의 좌표가 (a, 6, 4) 이고
    꼭짓점 A 와 y축에 대하여 대칭인 점의 좌표가 (-2, 0, b) 일 때 a-b 의 값.
  category: "그림에서 꼭짓점 좌표 확정 → y축 대칭 → 문자 대응"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "직육면체 그림의 꼭짓점 배치를 좌표 표현으로 옮겨, 주어진 B(a, 6, 4) 에서 A 가 zx평면 위(y=0)의 같은 x·z 성분을 가진 점 (a, 0, 4) 임을 읽어냄"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "직육면체 그림의 꼭짓점 좌표와 대칭이동"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    B 와 A 가 같은 윗면에서 y 성분만 다른 꼭짓점이라는 그림 구조를 읽어야 A(a, 0, 4) 가 확정된다.
    이후 y축 대칭 (-a, 0, -4) 를 (-2, 0, b) 와 성분별로 대응시키면 a, b 가 나오고 a-b 로 마무리한다.
    그림 해석이 없으면 A 를 쓸 수 없으므로 표현 전환 통찰 1개(I-RT d1)·M_total 6.
    [분류 이슈] 확인체크 태그는 ★1 출발 신호지만 그림 해석 + 대칭 + 문자 대응 3단이라 ★2 로 둠(후보 ★2/★3).
  tier: star_2
  mechanism_primary: "그림의 직육면체 구조 → B(a,6,4) 에서 A(a,0,4) 확정 → y축 대칭 (-a,0,-4) 와 (-2,0,b) 대응 → a-b"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$6$'
  answer_source: "답지"
  figure: "crop:fig-117-223.png"
  latex: latex-bank/gn-geo/items/117-223.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직육면체의 세 모서리 길이(그림의 6·4 와 문자 a)와 대칭 대상(y축)을 바꿀 수 있다. 제약: 그림의 꼭짓점 라벨 A~G 와 축 위치는 고정하고, 대칭 결과의 부호가 주어진 좌표 (-2, 0, b) 와 맞아떨어져 a 가 양수로 나오도록 값을 잡는다. 모서리 길이를 같게 하면(정육면체) 꼭짓점 구분이 흐려진다."
    creative: "(1) B 대신 다른 꼭짓점(C·F 등)의 좌표를 주기(같은 골조 ★2) (2) 두 꼭짓점의 대칭점을 각각 주고 모서리 길이나 부피를 묻기(조건 통합 ★3 · I-CON d1) (3) 대칭 대상을 좌표평면으로 바꾸면 부호가 한 성분만 바뀌어 그림 해석 비중이 줄고 ★2 아래로 내려간다 (4) 그림 없이 꼭짓점 관계를 말로만 주면 I-RT 가 사라지고 절차형 ★2."
```

## 표본 판정 요약 (7문)

- ★ 분포: ★1 3 · ★2 4 · ★3 0 · ★4 0 · ★5 0
- 통찰형 1 (117-223 · I-RT d1) · 절차형 6 · premium 0
- 구역 분포: 개념원리 익히기 3 · 필수 예제 2 · 확인체크 2 (연습문제 STEP 구역 없음)
- type_hint 상위: 「좌표공간의 점에서 좌표축·좌표평면에 내린 수선의 발」 2(116-220 · 117-e1) · 「좌표축·좌표평면에 대한 대칭이동」 2(116-221 · 117-e2) · 「대칭이동과 수선의 발의 합성」 1 · 「직육면체 그림의 꼭짓점 좌표와 대칭이동」 1 · 「직육면체 그림으로 점의 좌표 읽기」 1
- M_total 분포: 4 가 3문 · 5 가 3문 · 6 이 1문. 단원 전체가 규칙 한두 번 적용이라 Mₖ 는 전부 1, Mₜ 는 전부 1(T-부호 하나).
- 그림: 2문(`crop:fig-116-219.png` · `crop:fig-117-223.png`)
- 난이도 층은 「규칙 1회」(★1) vs 「규칙 2회 합성 또는 문자 대응」(★2) 두 층뿐이다. ★3 이상이 없는 것은 단원 자체가 좌표 읽기·수선의 발·대칭이동 정의로만 구성돼 있기 때문이며, 상위권용 슬롯을 만들려면 거리·내분·구의 방정식 등 인접 단원 도구를 결합해야 한다(I-XU 필요).

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-GEO-117-222 | 확인체크 태그는 ★1 출발 신호이나 대칭이동 + 수선의 발 두 종류 규칙의 합성이라 ★2 로 둠(1단 차이) | ★1 / ★2 |
| GN-GEO-117-223 | 확인체크 태그(★1 출발)와 그림 해석·대칭·문자 대응 3단(I-RT d1) 사이. 통찰을 인정하면 ★3 후보이나 표현 전환 깊이가 1 이라 ★2 로 둠 | ★2 / ★3 |

또한 117-e1 · 117-e2 는 통찰 0 · M_total 5 로 v3.8 Step 2 의 −1 후보(절차형·저노동)에 해당하지만, 필수 예제 구역 신호와 「규칙 2회」 골조를 존중해 ★2 를 유지했다. 이 단원에서 ★1 과 ★2 를 가르는 기준은 오직 규칙 적용 횟수(1회 vs 2회)다.

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위에서 반복된 type_hint 는 「수선의 발」 계열 2문(116-220 · 117-e1)과 「대칭이동」 계열 2문(116-221 · 117-e2)이다. 두 계열은 규칙의 형태(성분을 0 으로 vs 부호 반전)가 다르므로 **따로 세워야 한다**.
- 반면 117-222(대칭 → 수선의 발)와 117-e2(대칭 → 대칭)는 「규칙 2회 합성」이라는 같은 골조이므로 **「좌표공간 변환의 합성」 하나로 통합**해도 된다. 합성 대상의 종류는 변형 파라미터로 둔다.
- 116-219(그림에서 좌표 읽기)와 117-223(그림 + 대칭)은 그림 의존이라는 공통 축이 있지만, 219 는 정의 확인이고 223 은 미지 꼭짓점 추론이므로 같은 유형으로 묶지 말고 **base ★ 1 / 2 로 분리**한다.
- 이 단원만으로는 ★3 이상 유형을 세울 수 없다. 카탈로그에서는 공간좌표를 두 점 사이의 거리·내분점·구의 방정식 단원과 묶어 상위 유형(I-XU 결합)을 배치하는 것이 맞다.
