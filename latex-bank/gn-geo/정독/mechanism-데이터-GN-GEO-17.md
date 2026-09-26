---
name: mechanism-데이터-GN-GEO-17
description: 개념원리 기하 17 구의 방정식(1/1 · 134~141쪽) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 기하 (22개정) · 전사본 latex-bank/gn-geo
  section: 17 구의 방정식
  unit_code: GEO-17
  part: "1/1"
  extract_range: "134~141쪽 · 134-262~141-290"
  total_problems: 34
  unit_total: 34
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). insight_type 은 insights 유무로 정함(비면 절차형 · 하나라도 있으면 통찰형). anchor_status 는 null. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-geo/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-geo/items/<id>.tex
  image_source: latex-bank/gn-geo/figures/ (crops.json)
---

# 개념원리 기하 · 17 구의 방정식 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 기하 17단원 「구의 방정식」 134~141쪽 34문항 전수를 다룬다. 구성은 「개념원리 익히기」 5문 · 「필수·발전 예제」 18문(필수 예제 5 + 짝 확인체크 13) · 「연습문제 STEP 1」 4문 · 「연습문제 STEP 2」 4문 · 「연습문제 실력 UP」 3문이다.

벤더 난이도 신호는 구역과 태그로 층을 이룬다. 「개념원리 익히기」(통번호 · 개념 확인)는 ★1 출발, 「필수」 태그 예제와 그 짝 「확인체크」는 ★2 출발, 「연습문제 STEP 1」 ★2 · 「STEP 2」 ★3 · 「실력 UP」 ★4 출발이며, 「교육청 기출」 태그는 통찰 유무로 +0~1 한다. 이 출발점에서 M_total·통찰 개수로 ±1 조정했고, 조정 근거는 각 블록 rationale 에 한두 줄로 적었다. 이 단원은 「중심과 반지름을 읽어 거리 관계로 환원한다」는 한 골조가 34문 전체를 관통하므로, 변별은 골조의 개수가 아니라 **거리 관계를 어느 단면·어느 투영으로 옮기느냐**(I-RT)와 **부호·경우가 갈리는가**(I-MI · I-EQV)에서 생긴다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 사슬) · `insights[]`(유형 코드 + depth + 근거) · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 설정 변형과 ★ 변동 지점)를 채웠다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-GEO-134-262
  page: 134
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑵ 표준형으로 주어진 구의 방정식에서 중심의 좌표와 반지름의 길이 읽기.
  category: "구의 방정식 표준형 → 중심·반지름 읽기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구의 방정식 표준형에서 중심·반지름 읽기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    표준형 각 괄호의 부호를 뒤집어 중심, 우변의 제곱근으로 반지름. 정의 확인 한 단계.
    ⑴ 은 $z^2$ 항이 $(z-0)^2$ 임을 읽는 것이 유일한 주의점. 통찰 없음·M_total 4 → 익히기 구역 출발 ★1 유지.
  tier: star_1
  mechanism_primary: "표준형 $(x-a)^2+(y-b)^2+(z-c)^2=r^2$ → 중심 $(a,b,c)$ · 반지름 $r$"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ 중심의 좌표: $(3,\,-2,\,0)$, 반지름의 길이: $3$ ⑵ 중심의 좌표: $(-2,\,-5,\,3)$, 반지름의 길이: $4$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/gn-geo/items/134-262.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "중심 좌표의 부호·크기와 우변을 자유롭게 바꿀 수 있음. 제약: 우변이 양수이고 제곱수(또는 반지름이 간단한 무리수)여야 답이 깔끔하다. 한 변수 항을 $z^2$ 처럼 빼 놓아 0 성분을 읽게 하는 구조는 유지."
    creative: "(1) 우변을 $r^2$ 이 아닌 $8$ 처럼 두어 $2\\sqrt{2}$ 를 읽게 하기(★1 유지) (2) 구의 겉넓이·부피를 묻기(★1) (3) 표준형이 아니라 $2x^2+2y^2+2z^2=\\cdots$ 처럼 최고차항 계수를 두면 정규화 단계가 늘어 ★2."
```

```yaml
- id: GN-GEO-134-263
  page: 134
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴ 중심과 반지름이 주어진 구 ⑵ 원점이 중심이고 한 점을 지나는 구의 방정식 세우기.
  category: "중심·반지름(또는 지나는 점) → 표준형 세우기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "중심·반지름(또는 지나는 점)으로 구의 방정식 세우기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    262 의 역방향. ⑵ 는 반지름을 원점과 지나는 점 사이 거리로 바꾸는 한 단계가 더 있지만 공식 대입.
    통찰 없음·M_total 4 → ★1.
  mechanism_primary: "중심·반지름 → 표준형 대입 / 지나는 점 → $r^2=$ 중심까지 거리의 제곱 → 표준형"
  tier: star_1
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $(x-2)^2+(y+1)^2+(z-5)^2=9$ ⑵ $x^2+y^2+z^2=25$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/134-263.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "중심 좌표와 반지름, ⑵ 의 지나는 점을 바꿀 수 있음. 제약: ⑵ 는 좌표의 제곱합이 제곱수가 되는 점(3,-4,0 · 1,2,2 · 2,-3,6 등)으로 두면 반지름이 정수."
    creative: "(1) 중심을 원점이 아닌 점으로 두고 지나는 점을 주기(★1~2 · e10 과 같은 골조) (2) 지름의 양 끝 점으로 주기(★2) (3) 반지름 대신 부피·겉넓이를 주면 역산 한 단계 추가(★2)."
```

```yaml
- id: GN-GEO-134-264
  page: 134
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑵ 일반형으로 주어진 방정식에서 중심의 좌표와 반지름의 길이 구하기.
  category: "일반형 → 완전제곱 → 중심·반지름"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구의 방정식 일반형 → 완전제곱 → 중심·반지름"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    세 변수 각각 완전제곱으로 묶고 상수를 우변으로 넘기는 표준 절차. ⑵ 는 $z$ 항이 없어 중심의 $z$ 성분이 0.
    계산량이 조금 있어 M_total 6 이지만 통찰 없음·익히기 구역 → ★1.
  tier: star_1
  mechanism_primary: "일반형 → $x,y,z$ 각각 완전제곱 → 우변 $r^2$ → 중심·반지름"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ 중심의 좌표: $(1,\,2,\,-3)$, 반지름의 길이: $2\sqrt{3}$ ⑵ 중심의 좌표: $(-3,\,2,\,0)$, 반지름의 길이: $2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/134-264.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항 계수(짝수로 유지)와 상수항을 바꿀 수 있음. 제약: 완전제곱 후 우변 $=$ (일차항 계수 반의 제곱합) $-$ 상수항 $>0$ 이어야 구가 되고, 제곱수면 반지름이 정수. 일차항 계수를 홀수로 두면 중심이 분수가 되어 익히기 난이도를 벗어난다."
    creative: "(1) 한 변수의 일차항을 빼 중심이 좌표평면 위에 오게 하기(⑵ 구조 · ★1) (2) 상수항을 문자 $k$ 로 두고 구가 될 조건을 묻기(271 골조 · ★2) (3) 완전제곱 후 우변이 0 또는 음수인 방정식을 섞어 「구를 나타내지 않는 것」을 고르게 하면 T-경계 함정 추가 ★2."
```

```yaml
- id: GN-GEO-134-265
  page: 134
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑶ 중심이 주어진 점이고 $xy$·$yz$·$zx$ 평면에 각각 접하는 구의 방정식 구하기.
  category: "좌표평면에 접함 → 반지름 = 중심의 해당 성분의 절댓값"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "좌표평면에 접하는 구의 방정식"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    중심에서 $xy$ 평면까지 거리는 $|z|$, $yz$ 평면은 $|x|$, $zx$ 평면은 $|y|$ 라는 대응만 정확하면 끝.
    평면 이름과 빠지는 성분을 맞바꾸는 T-표기 함정 1개. 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "좌표평면에 접함 → $r=$ 중심의 해당 성분 절댓값 → 표준형"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $(x-1)^2+(y+2)^2+(z-4)^2=16$ ⑵ $(x-1)^2+(y+2)^2+(z-4)^2=1$ ⑶ $(x-1)^2+(y+2)^2+(z-4)^2=4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/134-265.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "중심 좌표 세 성분을 바꿀 수 있음. 제약: 세 성분의 절댓값이 서로 달라야 ⑴⑵⑶ 의 답이 구별되고, 0 이 섞이면 그 평면에 대해서는 반지름 0 이라 문항이 성립하지 않는다."
    creative: "(1) 접하는 평면을 하나만 주고 중심의 한 성분을 미지수로 두면 역방향(★2 · 137-272 골조) (2) 세 평면에 동시에 접하는 구로 바꾸면 중심이 $(\\pm r,\\pm r,\\pm r)$ 부호 결정이 생겨 ★3(137-e12 ⑵) (3) 좌표축 접으로 바꾸면 거리 계산이 두 성분 제곱합이 되어 ★1~2(266)."
```

```yaml
- id: GN-GEO-134-266
  page: 134
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑶ 중심이 주어진 점이고 $x$·$y$·$z$ 축에 각각 접하는 구의 방정식 구하기.
  category: "좌표축에 접함 → 반지름² = 나머지 두 성분의 제곱합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "좌표축에 접하는 구의 방정식"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    265 의 축 버전. 점과 $x$ 축 사이 거리가 $\sqrt{y^2+z^2}$ 라는 것(축 위의 발은 $(x,0,0)$)만 세우면 세 소문항이 같은 틀.
    평면일 때 한 성분, 축일 때 두 성분이라는 대비가 이 문항의 학습 포인트. 통찰 없음·M_total 5 → 익히기 구역 ★1.
  tier: star_1
  mechanism_primary: "좌표축에 접함 → $r^2=$ 나머지 두 성분의 제곱합 → 표준형"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $(x+3)^2+(y-2)^2+(z-1)^2=5$ ⑵ $(x+3)^2+(y-2)^2+(z-1)^2=10$ ⑶ $(x+3)^2+(y-2)^2+(z-1)^2=13$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/134-266.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "중심 세 성분을 바꿀 수 있음. 제약: 두 성분 제곱합이 제곱수인 조합(3,4 / 6,8 / 5,12)을 쓰면 반지름이 정수, 아니면 우변만 정수로 남는다(이 문항은 후자)."
    creative: "(1) 265 와 묶어 「평면에도 축에도 접하는 구가 있는가」를 묻기(★3 · 조건 양립 검토) (2) 반지름을 주고 중심의 한 성분을 구하게 하면 역방향 ★2(137-272) (3) 세 축에 동시에 접하는 구로 바꾸면 세 식 연립·대칭 통합이 생겨 ★3(140-285)."
```

### 필수·발전 예제

```yaml
- id: GN-GEO-135-e10
  page: 135
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ 중심이 주어지고 한 점을 지나는 구 ⑵ 두 점을 지름의 양 끝 점으로 하는 구의 방정식 구하기.
  category: "지나는 점 → 반지름 / 지름의 양 끝 점 → 중점·반지름"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구의 방정식(지나는 점 · 지름의 양 끝 점)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 $r^2=$ 중심과 지나는 점 사이 거리의 제곱, ⑵ 는 중심 $=$ 두 점의 중점 · 반지름 $=$ 두 점 사이 거리의 반.
    두 표준 도구를 묶은 필수 예제. 지름 양 끝이면 중점이 중심이라는 것은 정의 수준이라 통찰로 세지 않음. M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "지나는 점 → $r^2=$ 거리² / 지름 양 끝 점 → 중점 $=$ 중심 · $r=$ 거리/2 → 표준형"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $(x-3)^2+(y+1)^2+(z-2)^2=14$ ⑵ $x^2+(y-2)^2+(z-2)^2=9$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/135-e10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 중심·지나는 점, ⑵ 의 두 끝점을 바꿀 수 있음. 제약: ⑵ 는 두 점의 각 성분 합이 짝수여야 중심이 정수점이고, 성분 차가 $(4,4,2)$ 처럼 제곱합이 제곱수인 조합이어야 반지름이 정수."
    creative: "(1) ⑵ 에서 한 끝점과 중심을 주고 다른 끝점을 묻기(역방향 ★2) (2) 지름의 양 끝 점 구를 좌표평면으로 자른 원을 묻는 합성(138-276 · ★2) (3) 지나는 점을 두 개 주고 중심이 특정 축 위에 있다는 조건을 더하면 연립이 생겨 ★3."
```

```yaml
- id: GN-GEO-135-267
  page: 135
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    주어진 구와 중심이 같고 한 점을 지나는 구의 방정식 구하기.
  category: "중심 읽기 → 지나는 점까지 거리² → 표준형"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "중심이 같고 한 점을 지나는 구의 방정식"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    주어진 구의 우변 12 는 쓰지 않고 좌변에서 중심만 읽은 뒤 새 반지름을 다시 계산하는 것이 전부.
    「중심이 같다」를 좌변 그대로 두고 우변만 바꾼다로 읽으면 한 줄. 통찰 없음·M_total 4 → 예제 출발 ★2 에서 −1 → ★1.
  tier: star_1
  mechanism_primary: "주어진 구의 좌변 유지 → 지나는 점 대입 → 우변 $=r^2$"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$(x-2)^2+(y+1)^2+(z-2)^2=9$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/135-267.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "원래 구의 중심과 지나는 점을 바꿀 수 있음. 제약: 새 반지름의 제곱이 제곱수이면 답이 깔끔하고, 원래 우변 12 는 미끼이므로 새 값과 달라야 한다."
    creative: "(1) 「중심이 같고 반지름이 2배인 구」로 바꾸기(★1) (2) 원래 구를 일반형으로 주면 완전제곱 한 단계 추가 ★2 (3) 「중심이 같고 $xy$ 평면에 접하는 구」로 바꾸면 137-e12 골조와 합쳐져 ★2."
```

```yaml
- id: GN-GEO-135-268
  page: 135
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 점을 지름의 양 끝 점으로 하는 구의 방정식 구하기.
  category: "지름 양 끝 점 → 중점·반지름 → 표준형"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지름의 양 끝 점으로 정해지는 구의 방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    중점으로 중심, 두 점 사이 거리의 반으로 반지름. $r^2$ 을 거리²/4 로 한 번에 처리하지 않고 거리부터 구하면 무리수가 끼어 실수하기 쉬운 지점.
    e10 ⑵ 와 같은 골조·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "중점 $=$ 중심 → $r^2=$ 두 점 사이 거리²/4 → 표준형"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$(x+1)^2+(y-2)^2+(z+2)^2=6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/135-268.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 끝점을 바꿀 수 있음. 제약: 각 성분의 합이 짝수여야 중심이 정수점. 성분 차의 제곱합이 4의 배수면 $r^2$ 이 정수(이 문항은 24/4=6)."
    creative: "(1) 구한 구가 어떤 좌표평면과 만나는지 이어 묻기(138-276 · ★2) (2) 지름의 양 끝 점 대신 지름 위의 한 점과 중심을 주기(★2) (3) 구한 구와 좌표축의 두 교점 사이 거리를 묻기(140-280 · ★2~3)."
```

```yaml
- id: GN-GEO-136-e11
  page: 136
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    네 점을 지나는 구의 방정식 구하기.
  category: "일반형으로 놓기 → 네 점 대입 → 연립"
  M: {s: 2, k: 3, a: 2, t: 1}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "네 점을 지나는 구의 방정식(일반형 연립)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    중심·반지름을 미지수로 두면 제곱이 남아 복잡하므로 일반형 $x^2+y^2+z^2+Ax+By+Cz+D=0$ 으로 놓는 것이 정석.
    원점을 지나 $D=0$ 이 즉시 나오고 나머지 세 점으로 $A,B,C$ 를 푼다. 일반형 선택은 이 단원의 표준 절차라 통찰로 세지 않음.
    계산량이 커 M_total 8 이지만 골조가 단선 → 필수 예제 ★2 유지.
  tier: star_2
  mechanism_primary: "일반형으로 놓기 → 네 점 대입 → $A,B,C,D$ 연립"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$x^2+y^2+z^2-2x+10z=0$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/136-e11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 점을 바꿀 수 있음. 제약: 네 점이 한 평면 위에 있으면 구가 정해지지 않는다. 원점을 포함시키면 $D=0$ 으로 연립이 3원으로 줄고, 좌표축 위의 점 $(a,0,0)$ 을 넣으면 한 미지수가 바로 나와 난이도가 내려간다."
    creative: "(1) 원점을 빼고 네 점 모두 일반 위치로 두면 4원 연립 → ★3 (2) 구한 구의 중심·반지름까지 이어 묻기(완전제곱 추가 ★2) (3) 「세 점을 지나고 중심이 어떤 평면 위」처럼 조건을 섞으면 I-CON 이 생겨 ★3."
```

```yaml
- id: GN-GEO-136-269
  page: 136
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    중심이 주어지고 한 점을 지나는 구를 일반형으로 나타냈을 때 계수들의 합 구하기.
  category: "표준형 세우기 → 전개해 일반형 → 계수 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구의 방정식 일반형의 계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    표준형을 먼저 세운 뒤 전개해 일반형 계수를 읽는 방향. $a,b,c$ 는 중심의 $-2$ 배, $d$ 는 중심 성분 제곱합 $-r^2$ 이라는 대응을 알면 전개 없이도 나온다.
    문자는 있으나 값이 수치로 결정되므로 Mₐ 1. 통찰 없음·M_total 6 → 예제 짝 ★2.
  tier: star_2
  mechanism_primary: "중심·지나는 점 → 표준형 → 전개 → $a+b+c+d$"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-9$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/136-269.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "중심과 지나는 점을 바꿀 수 있음. 제약: 성분 차의 제곱합이 정수면 $d$ 도 정수. 답이 한 값으로 떨어지도록 계수 합이 아닌 개별 계수를 묻는 형태도 가능."
    creative: "(1) 일반형을 주고 중심·반지름을 묻는 역방향(134-264 · ★1) (2) $a+b+c+d$ 대신 $abcd$ 나 $d$ 만 묻기(★2) (3) 중심 대신 「지름의 양 끝 점」을 주면 중점 단계가 추가되어 ★2 상단."
```

```yaml
- id: GN-GEO-136-270
  page: 136
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    네 점을 지나는 구의 방정식 구하기(원점과 $x$ 축 위의 점 포함).
  category: "일반형으로 놓기 → 네 점 대입 → 연립"
  M: {s: 2, k: 3, a: 2, t: 1}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "네 점을 지나는 구의 방정식(일반형 연립)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e11 과 같은 골조. 원점에서 $D=0$, $(4,0,0)$ 에서 $A$ 가 바로 나오고 남은 두 점으로 $B,C$ 를 푼다.
    좌표축 위의 점이 하나 더 있어 연립이 e11 보다 오히려 쉬움. 통찰 없음 → ★2.
  tier: star_2
  mechanism_primary: "일반형 → 원점으로 $D=0$ → 축 위 점으로 $A$ → 남은 두 점으로 $B,C$"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$x^2+y^2+z^2-4x+6y-z=0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/136-270.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "축 위의 점 $(4,0,0)$ 의 값과 나머지 두 점을 바꿀 수 있음. 제약: 네 점이 공면이면 안 되고, 계수가 분수로 나오지 않으려면 나머지 두 점의 좌표 제곱합이 적당히 맞아야 한다(이 문항은 $C$ 가 $-1$)."
    creative: "(1) 구한 구의 중심·반지름을 이어 묻기(★2) (2) 네 점 중 하나를 미지수로 두고 구가 특정 조건을 만족하게 하기(★3 · I-BW) (3) 「네 점을 지나는 구가 $xy$ 평면과 만나는 원의 넓이」로 합성하면 ★3."
```

```yaml
- id: GN-GEO-136-271
  page: 136
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    일반형 방정식이 구를 나타내도록 하는 상수 $k$ 의 값의 범위 구하기.
  category: "완전제곱 → 우변 $>0$ 동치 → $k$ 범위"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「구를 나타낸다」를 완전제곱 후 우변 $>0$ (반지름이 실수이고 0 이 아님)으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "일반형이 구를 나타낼 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    완전제곱하면 우변이 $k+14$. 구가 되려면 반지름의 제곱이 양수여야 하므로 $k>-14$.
    등호를 넣어 한 점(반지름 0)까지 허용하는 T-경계 함정이 핵심이고, 조건을 부등식으로 옮기는 동치 변환 통찰 1개.
    확인체크 ★2 출발 유지.
  tier: star_2
  mechanism_primary: "완전제곱 → 우변 $=k+14$ → 구 조건 $k+14>0$"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$k>-14$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/136-271.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항 계수(짝수)를 바꾸면 경계값이 바뀐다. 제약: $k$ 의 부호 배치($-k$ 인지 $+k$ 인지)에 따라 부등호 방향이 뒤집히므로 답과 함께 확인."
    creative: "(1) $k$ 를 상수항이 아니라 일차항 계수에 넣으면 이차부등식이 되어 ★3 (2) 「구를 나타내지 않도록」으로 뒤집기(★2) (3) 「반지름이 3 이하인 구」처럼 범위를 이중으로 주면 연립부등식 ★3 (4) 「한 점을 나타내도록」이면 등호 경계만 ★2."
```

```yaml
- id: GN-GEO-137-e12
  page: 137
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ 일반형 구가 $xy$ 평면에 접할 때 양수 $a$ 의 값 ⑵ 한 점을 지나고 세 좌표평면에 동시에 접하는 구의 방정식 모두 구하기.
  category: "접함 → 중심 성분 절댓값 $=r$ / 세 평면 동시 접 → 중심 $(t,t,t)$ → 점 대입 이차방정식"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「세 좌표평면에 동시에 접한다」를 중심의 세 성분의 절댓값이 모두 $r$ 과 같다로 옮기고, 지나는 점이 제1팔분공간에 있으므로 부호를 모두 양으로 확정"
    - step: 3
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "점 대입으로 나온 이차방정식의 두 근이 모두 조건을 만족하므로 구가 두 개 — 한 근만 고르지 않음"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "좌표평면에 접하는 구의 방정식(세 평면 동시 접 포함)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑴ 은 완전제곱 후 중심의 $z$ 성분 절댓값 $=r$ 한 줄. ⑵ 가 본체로, 중심을 $(t,t,t)$·반지름 $t$ 로 두는 환원과 두 해를 모두 답하는 다중 해석이 함께 요구된다.
    「모두 구하시오」 발문이 I-MI 신호. 부호 팔분공간 결정(T-부호)과 두 해 누락(T-범위) 함정 2개.
    필수 예제 ★2 출발 + 통찰 2개 → ★3.
  tier: star_3
  mechanism_primary: "세 평면 동시 접 → 중심 $(t,t,t)$·$r=t$ → 지나는 점 대입 → $t$ 이차방정식 두 근 → 구 2개"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $\sqrt{2}$ ⑵ $(x-3)^2+(y-3)^2+(z-3)^2=9$, $(x-7)^2+(y-7)^2+(z-7)^2=49$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/137-e12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑵ 의 지나는 점을 바꿀 수 있음. 제약: 점의 세 성분이 모두 같은 부호여야 중심 부호가 한 가지로 정해지고, 대입해 얻는 이차방정식의 판별식이 양수여야 구가 2개다. 성분 합·제곱합이 정수해를 주는 조합(1,5,4 / 2,4,6 등)이 좋다."
    creative: "(1) 점의 성분에 음수를 섞으면 중심이 $(-t,t,t)$ 꼴이 되어 부호 판단이 한 단계 더 어려워짐(137-273 · ★3) (2) 두 구의 반지름 합·곱만 묻기(근과 계수 · ★3) (3) 세 평면이 아니라 두 평면에 접하고 한 점을 지나게 하면 미지수가 늘어 ★4 (4) 접하는 평면 수를 하나로 줄이면 ★2."
```

```yaml
- id: GN-GEO-137-272
  page: 137
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    중심과 반지름이 주어진 구가 $z$ 축에 접할 때 양수 $k$ 의 값 구하기.
  category: "축에 접함 → 나머지 두 성분 제곱합 $=r^2$ → $k$"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "좌표축에 접하는 구의 방정식(미정 성분 역산)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $z$ 축까지 거리는 $\sqrt{x^2+y^2}$ 이므로 $16+k^2=25$. 양수 조건으로 $k=3$ 만 남는다.
    266 의 역방향이지만 제곱근 대신 제곱식으로 바로 세우면 한 줄. 양수 단서가 있어 부호 분기는 실질적으로 없음. 통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "$z$ 축 접 → $x^2+y^2=r^2$ → $16+k^2=25$ → $k=3$"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/137-272.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "중심의 고정 성분과 반지름을 바꿀 수 있음. 제약: 피타고라스 수 쌍(3,4,5 / 6,8,10 / 5,12,13)을 쓰면 $k$ 가 정수. 반지름 < 고정 성분이면 해가 없다."
    creative: "(1) 「양수」 단서를 빼면 $k=\\pm3$ 두 값(★2 · T-부호) (2) 접하는 대상을 $z$ 축에서 $xy$ 평면으로 바꾸면 ★1 (3) 축과 평면에 동시에 접하는 조건을 주면 연립이 생겨 ★3 (4) 반지름을 미지수로 돌리면 ★2."
```

```yaml
- id: GN-GEO-137-273
  page: 137
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    한 점을 지나고 세 좌표평면에 동시에 접하는 두 구의 반지름의 길이의 곱 구하기.
  category: "중심 부호 확정 → 점 대입 이차방정식 → 두 근의 곱"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "지나는 점의 성분 부호가 섞여 있으므로 중심을 $(-r,\\,r,\\,r)$ 로 확정 — 점이 놓인 팔분공간이 중심의 부호를 결정"
    - step: 3
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 반지름을 각각 구하지 않고 이차방정식 근과 계수의 관계로 곱만 읽음"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "세 좌표평면에 동시에 접하는 구(반지름의 곱)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    e12 ⑵ 의 변형인데 점의 $x$ 성분만 음수라 중심을 $(-r,r,r)$ 로 두어야 하는 것이 첫 갈림길이다.
    「두 구가 2개 있다」가 주어져 있어 근의 존재는 확인할 필요가 없고, 곱만 물으므로 근과 계수 관계로 끝낸다.
    통찰 2개 → 확인체크 ★2 출발 +1 → ★3.
  tier: star_3
  mechanism_primary: "점 부호 → 중심 $(-r,r,r)$ → 점 대입 이차방정식 → 근과 계수로 두 근의 곱"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$15$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/137-273.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지나는 점의 세 성분을 바꿀 수 있음. 제약: 부호 조합이 중심 꼴을 정하므로 일관되게 반영해야 하고, 이차방정식의 판별식이 양수라야 구가 2개다. 곱은 상수항/이차항 계수이므로 성분 제곱합이 3의 배수면 정수."
    creative: "(1) 곱 대신 합이나 두 반지름의 차를 묻기(합은 근과 계수, 차는 판별식 · ★3) (2) 구의 방정식을 모두 구하게 하면 근을 실제로 풀어야 해 계산량만 늘고 통찰은 같음(★3) (3) 접하는 평면을 두 개로 줄이고 반지름을 주면 ★2 (4) 세 좌표축 동시 접으로 바꾸면 140-285 골조."
```

```yaml
- id: GN-GEO-138-e13
  page: 138
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    일반형으로 주어진 구와 $xy$ 평면이 만나서 생기는 도형의 넓이 구하기.
  category: "완전제곱 → 중심·반지름 → 평면까지 거리 → 교선 원의 반지름"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "구와 평면의 교선을 「중심-평면 거리 $d$ · 구의 반지름 $r$ · 교선 반지름 $r'$ 의 직각삼각형」으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "구와 좌표평면의 교선(원의 반지름·넓이)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    완전제곱으로 중심·반지름을 얻고, $xy$ 평면까지 거리는 중심의 $z$ 성분 절댓값. $r'^2=r^2-d^2$ 로 교선 원의 넓이.
    $z=0$ 을 직접 대입해 원의 방정식을 얻는 길도 같은 값이라 전략 분기는 아님(I-SC 아님). 공간 절단을 평면 직각삼각형으로 옮기는 표현 전환 통찰 1개(d1).
    필수 예제 ★2 유지.
  tier: star_2
  mechanism_primary: "일반형 → 중심·$r$ → $d=|z_0|$ → $r'^2=r^2-d^2$ → 넓이 $\\pi r'^2$"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$9\pi$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/138-e13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항 계수와 상수항을 바꿀 수 있음. 제약: $r^2-d^2>0$ (평면이 구를 실제로 자름)이어야 하고, 피타고라스 수 조합이면 교선 반지름이 정수. $r^2=d^2$ 이면 접해서 도형이 한 점이 된다."
    creative: "(1) 자르는 평면을 $yz$·$zx$ 로 바꾸기(★2) (2) 넓이 대신 둘레를 묻기(138-275 · ★2) (3) 교선 원의 반지름을 주고 상수항을 역산(138-274 · ★2) (4) $z=k$ 같은 일반 평면으로 자르면 $k$ 범위 조건이 붙어 ★3."
```

```yaml
- id: GN-GEO-138-274
  page: 138
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    일반형 구와 $yz$ 평면이 만나서 생기는 원의 반지름이 주어졌을 때 상수 $k$ 의 값 구하기.
  category: "교선 반지름 조건 → $r^2=d^2+r'^2$ → $k$ 역산"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "교선 원의 반지름 조건을 중심-평면 거리와 구의 반지름의 직각삼각형 관계로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "구와 좌표평면의 교선 조건에서 미정계수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    완전제곱하면 중심 $(-1,2,-3)$·$r^2=14-k$, $yz$ 평면까지 거리는 $|{-1}|=1$. $r^2=1+9$ 에서 $k$.
    e13 의 역방향이지만 $r^2$ 을 $k$ 의 식으로 두는 표준 절차라 I-BW 로는 세지 않음. 통찰 1개·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "완전제곱 → $r^2=14-k$ · $d=1$ → $r^2=d^2+3^2$ → $k$"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/138-274.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항 계수와 주어진 교선 반지름을 바꿀 수 있음. 제약: 결과 $r^2>0$ 이어야 하고, $k$ 가 정수로 떨어지려면 일차항 계수가 짝수여야 한다."
    creative: "(1) 자르는 평면을 바꾸면 거리로 쓰는 성분이 달라짐(★2) (2) 교선 원의 넓이나 둘레로 조건을 주기(★2) (3) 「$k$ 의 최댓값」처럼 두 평면 조건을 동시에 주면 연립·범위가 생겨 ★3 (4) 교선이 한 점이 되도록(접함) 하면 T-경계 ★2."
```

```yaml
- id: GN-GEO-138-275
  page: 138
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    중심과 반지름이 주어진 구가 $zx$ 평면과 만나서 생기는 도형의 둘레의 길이 구하기.
  category: "$zx$ 평면까지 거리 $=|y_0|$ → 교선 반지름 → 둘레"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "구를 평면으로 자른 도형을 직각삼각형 $r^2=d^2+r'^2$ 로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "구와 좌표평면의 교선(원의 반지름·둘레)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    중심·반지름이 이미 주어져 완전제곱 단계가 없다. $zx$ 평면까지 거리는 $y$ 성분 $6$, $r'=\sqrt{100-36}=8$, 둘레 $16\pi$.
    평면 이름에서 빠지는 성분을 고르는 T-표기 함정 하나. 통찰 1개라 M_total 5 여도 −1 하지 않고 ★2.
  tier: star_2
  mechanism_primary: "$d=|y_0|=6$ → $r'=\\sqrt{r^2-d^2}=8$ → 둘레 $2\\pi r'$"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$16\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/138-275.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "중심 성분과 반지름을 바꿀 수 있음. 제약: (거리, 교선 반지름, 반지름)이 피타고라스 수(6,8,10 / 5,12,13 / 3,4,5)면 답이 정수. 거리 > 반지름이면 교선이 없다."
    creative: "(1) 둘레 대신 넓이를 묻기(★2) (2) 세 좌표평면 각각의 교선 넓이를 비교하게 하면 계산 3회 ★2~3 (3) 구를 일반형으로 주면 완전제곱 추가 ★2(138-e13) (4) 교선 원 위의 점과 어떤 점 사이 최단거리로 확장하면 ★4(141-289)."
```

```yaml
- id: GN-GEO-138-276
  page: 138
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 점을 지름의 양 끝 점으로 하는 구를 $xy$ 평면으로 자를 때 생기는 원의 넓이 구하기.
  category: "지름 양 끝 → 중심·반지름 → 평면 절단 → 교선 원의 넓이"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "구와 평면의 교선을 $r'^2=r^2-d^2$ 직각삼각형으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "지름의 양 끝 점 → 구 → 좌표평면 교선"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e10 ⑵ 와 e13 을 이어 붙인 합성 문항. 중점으로 중심 $(2,-3,1)$, $r^2=$ 거리²/4 $=36$, $d=|1|$, 교선 넓이 $\pi(36-1)$.
    $r$ 을 무리수로 꺼내지 않고 $r^2$ 만 들고 가는 것이 계산을 줄이는 지점. 통찰 1개·단계 3 → ★2.
  tier: star_2
  mechanism_primary: "중점 $=$ 중심 · $r^2=$ 거리²/4 → $d=|z_0|$ → 넓이 $\\pi(r^2-d^2)$"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$35\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/138-276.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 끝점을 바꿀 수 있음. 제약: 각 성분 합이 짝수여야 중심이 정수점, 성분 차의 제곱합이 4의 배수여야 $r^2$ 이 정수, 그리고 $r^2>d^2$ 이어야 교선이 생긴다."
    creative: "(1) 자르는 평면을 바꾸면 쓰는 성분만 달라짐(★2) (2) 넓이 대신 둘레·교선 원의 중심을 묻기(★2) (3) 「어느 좌표평면으로 자를 때 넓이가 최대인가」로 바꾸면 세 경우 비교가 생겨 ★3 (4) 구를 자르는 평면을 $z=k$ 로 두고 넓이의 최댓값을 묻기(★3)."
```

```yaml
- id: GN-GEO-139-e14
  page: 139
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ 구 밖의 점에서 구에 그은 접선의 길이 ⑵ 구 밖의 점과 구 위의 점을 이은 선분의 길이의 최댓값·최솟값 구하기.
  category: "접선 길이 $=\\sqrt{d^2-r^2}$ / 선분 길이 최대·최소 $=d\\pm r$"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "접선의 길이를 「중심-외부점 거리 $d$ · 반지름 $r$ · 접점에서의 직각」 삼각형으로 옮김"
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "구 위 점까지 거리의 최대·최소를 중심을 지나는 직선과 구의 두 교점으로 환원해 $d\\pm r$ 로 옮김"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "구 밖의 점에서 구에 그은 접선의 길이 · 구 위의 점까지 거리의 최대·최소"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 소문항 모두 「중심까지 거리 $d$ 를 먼저 구하고 $r$ 과 결합」이라는 한 골조다. ⑴ 은 $\sqrt{d^2-r^2}$, ⑵ 는 $d+r$ 과 $d-r$.
    통찰이 2개지만 둘 다 이 단원의 대표 공식 수준(depth 1)이라 +1 하지 않고 필수 예제 ★2 유지.
  tier: star_2
  mechanism_primary: "외부점 → 중심까지 거리 $d$ → 접선 $\\sqrt{d^2-r^2}$ · 선분 최대·최소 $d\\pm r$"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $\sqrt{33}$ ⑵ 최댓값: $\sqrt{14}+1$, 최솟값: $\sqrt{14}-1$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/139-e14.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "외부점과 구의 계수를 바꿀 수 있음. 제약: $d^2>r^2$ (점이 구 밖)이어야 접선이 존재한다. $d^2-r^2$ 이 제곱수면 ⑴ 의 답이 정수."
    creative: "(1) 접선의 길이를 주고 구의 상수항을 역산(139-278 · ★2) (2) 최대·최소의 곱을 묻기(139-279 · 곱이 $d^2-r^2$ 로 정리되어 ★2) (3) 점을 구 안에 두면 최대·최소가 $r\\pm d$ 로 바뀌어 T-범위 함정 ★3 (4) 구 위의 점 대신 교선 원 위의 점으로 바꾸면 ★4(141-289)."
```

```yaml
- id: GN-GEO-139-277
  page: 139
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    주어진 점에서 일반형 구에 그은 접선의 길이 구하기.
  category: "완전제곱 → 중심·$r$ → $\\sqrt{d^2-r^2}$"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "접선의 길이를 중심-외부점-접점 직각삼각형으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "구 밖의 점에서 그은 접선의 길이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $z$ 항이 없는 일반형이라 중심의 $z$ 성분이 0 이고, 외부점의 $z$ 좌표가 무리수 $-\sqrt{2}$ 라 $d^2$ 계산에서 제곱하면 정수로 정리된다.
    e14 ⑴ 과 같은 골조. 통찰 1개·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "완전제곱 → 중심·$r$ → $d^2$ → 접선 $\\sqrt{d^2-r^2}$"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\sqrt{11}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/139-277.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항 계수·상수항과 외부점을 바꿀 수 있음. 제약: 완전제곱 후 $r^2>0$, 외부점이 구 밖($d^2>r^2$)이어야 한다. 외부점 성분에 무리수를 두면 제곱에서 정리되는 구조를 유지할 수 있다."
    creative: "(1) 접선의 길이를 주고 점의 한 좌표를 역산(★2~3) (2) 「접선의 길이가 최소가 되는 구 위의 점」처럼 최적화를 붙이면 ★3 (3) 두 구에 각각 그은 접선의 길이가 같은 점의 자취를 묻기(★4 · 근축 개념) (4) 구를 표준형으로 주면 완전제곱이 빠져 ★1~2."
```

```yaml
- id: GN-GEO-139-278
  page: 139
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    한 점에서 일반형 구에 그은 접선의 길이가 주어졌을 때 상수 $k$ 의 값 구하기.
  category: "접선 길이 조건 → $d^2-r^2=25$ → $k$ 역산"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "접선 길이 조건을 $d^2-r^2$ 직각삼각형 관계로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "접선의 길이 조건에서 미정계수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    중심 $(-3,-2,0)$·$r^2=13-k$ 로 두고 $d^2=16+16+1=33$, $33-(13-k)=25$ 에서 $k$.
    $r^2$ 을 $k$ 의 일차식으로 들고 가는 표준 절차라 역추적 통찰로는 세지 않음. 통찰 1개·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "중심·$r^2=13-k$ → $d^2$ 계산 → $d^2-r^2=5^2$ → $k$"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/139-278.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항 계수·외부점·접선 길이를 바꿀 수 있음. 제약: 결과가 $r^2>0$ 이고 $d^2>r^2$ 를 만족해야 하며, 이 검증을 넣으면 $k$ 에 범위 조건이 붙는다."
    creative: "(1) $k$ 의 범위(구가 되고 점이 구 밖일 조건)까지 함께 묻기(★3 · I-VF) (2) 접선 길이 대신 구 위 점까지 최댓값을 주기(★2) (3) 외부점을 미지수로 두고 축 위에 있다는 조건을 주면 ★3 (4) 접선 길이가 같은 두 구를 주면 연립 ★3."
```

```yaml
- id: GN-GEO-139-279
  page: 139
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    한 점과 일반형 구 위의 점을 이은 선분의 길이의 최댓값과 최솟값의 곱 구하기.
  category: "최대·최소 $=d\\pm r$ → 곱 $=d^2-r^2$"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "구 위 점까지 거리의 최대·최소를 중심을 지나는 직선과의 두 교점으로 환원해 $d\\pm r$ 로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "구 위의 점까지 거리의 최대·최소(곱)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    완전제곱으로 중심 $(-2,-1,3)$·$r=4$, $d^2=19$. 곱을 물으므로 $(d+r)(d-r)=d^2-r^2$ 로 무리수를 꺼내지 않고 끝낸다.
    곱셈 공식으로 정리되는 구조가 계산을 줄이는 지점이지만 별도 통찰로는 세지 않음. 통찰 1개·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "완전제곱 → 중심·$r$ → $d^2$ → 곱 $=d^2-r^2$"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/139-279.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항 계수·상수항과 외부점을 바꿀 수 있음. 제약: $d>r$ (점이 구 밖)이라야 최솟값이 양수. $d^2-r^2$ 이 작은 정수가 되도록 맞추면 답이 깔끔하다."
    creative: "(1) 곱 대신 합을 묻기($2d$ · 무리수 답 ★2) (2) 점을 구 내부에 두면 최대·최소가 $r\\pm d$ 이고 곱이 $r^2-d^2$ 로 바뀜(T-범위 ★3) (3) 구 위의 점 대신 두 구 위의 두 점 사이 거리로 확장(140-283 · ★2) (4) 최솟값이 주어졌을 때 상수항을 역산하면 ★2."
```

### 연습문제 STEP 1

```yaml
- id: GN-GEO-140-280
  page: 140
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    두 점을 지름의 양 끝 점으로 하는 구와 $y$ 축의 두 교점 사이의 거리 구하기.
  category: "지름 양 끝 → 중심·$r^2$ → 축까지 거리 → 현의 길이"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "구와 $y$ 축의 두 교점을 「중심에서 축까지 거리 $d$ · 반지름 $r$ · 현의 반 $\\overline{PQ}/2$」 직각삼각형으로 옮김(또는 $x=z=0$ 대입)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "구와 좌표축의 두 교점 사이의 거리"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    중점으로 중심 $(2,6,8)$, $r^2=$ 두 점 사이 거리²/4 $=89$. $y$ 축까지 거리의 제곱은 $x^2+z^2=68$ 이므로 현의 반이 $\sqrt{21}$.
    $x=z=0$ 을 그대로 대입해도 같은 식이 나와 전략 분기는 아니다. 수가 커 계산 실수 여지가 있지만 골조는 단선.
    STEP 1 ★2 출발 유지.
  tier: star_2
  mechanism_primary: "중점 $=$ 중심 · $r^2=$ 거리²/4 → $y$ 축까지 거리² $=x_0^2+z_0^2$ → $\\overline{PQ}=2\\sqrt{r^2-d^2}$"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2\sqrt{21}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/140-280.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 끝점을 바꿀 수 있음. 제약: 각 성분 합이 짝수여야 중심이 정수점, 성분 차 제곱합이 4의 배수여야 $r^2$ 이 정수, 그리고 $r^2>x_0^2+z_0^2$ 이어야 축과 두 점에서 만난다."
    creative: "(1) 만나는 대상을 $x$ 축·$z$ 축으로 바꾸기(★2) (2) 축 대신 좌표평면으로 자르면 교선이 원이 되어 138-276 골조(★2) (3) 「구가 $y$ 축과 만나도록 하는 상수의 범위」로 뒤집으면 부등식 ★3 (4) 두 교점을 지름으로 하는 원의 넓이를 이어 묻기(★3)."
```

```yaml
- id: GN-GEO-140-281
  page: 140
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    일차항에 문자가 들어간 구의 부피가 최소가 되도록 하는 실수 $k$ 의 값 구하기.
  category: "부피 최소 ⟺ 반지름² 최소 → 이차식 완전제곱"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「부피가 최소」를 「반지름의 제곱이 최소」로 옮겨 $k$ 에 대한 이차식의 최솟값 문제로 환원"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "구의 반지름(부피)이 최소가 되는 미정계수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    완전제곱하면 $r^2=k^2-4k+29=(k-2)^2+25$ 이므로 $k=2$. 부피 공식을 실제로 쓰지 않고 $r^2$ 만 최소화하는 것이 요점.
    $r^2$ 이 항상 양수라 구가 되는 조건을 따로 확인할 필요가 없다. 통찰 1개(d1)·M_total 7 → STEP 1 ★2.
  tier: star_2
  mechanism_primary: "완전제곱 → $r^2=(k-2)^2+25$ → 부피 최소 ⟺ $r^2$ 최소 → $k=2$"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/140-281.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "$k$ 가 들어간 일차항 계수와 상수항의 $k$ 계수를 바꿀 수 있음. 제약: $r^2$ 이 $k$ 의 이차식이고 최고차항 계수가 양수라야 최소가 존재하며, 꼭짓점이 정수 $k$ 에 오도록 $k$ 의 일차 계수를 짝수로 둔다. 최솟값이 양수라야 늘 구가 된다."
    creative: "(1) 부피 대신 겉넓이·반지름의 최솟값 자체를 묻기(★2) (2) 최솟값이 주어졌을 때 상수를 역산(★2) (3) $k$ 가 두 군데 일차항에 들어가면 이차식이 복잡해져 ★3 (4) 「부피가 최소일 때 그 구가 $xy$ 평면과 만나는 원의 넓이」로 합성하면 ★3."
```

```yaml
- id: GN-GEO-140-282
  page: 140
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    구와 직선이 두 점에서 만나고 그 선분의 길이가 주어졌을 때 구의 중심과 직선 사이의 거리 구하기.
  category: "현의 길이 ↔ 중심-직선 거리(직각삼각형)"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "직선의 식이 없어도 「중심에서 현에 내린 수선이 현을 이등분한다」로 옮겨 $d^2=r^2-(\\overline{AB}/2)^2$ 한 식으로 환원"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "구와 직선의 현의 길이 ↔ 중심과 직선 사이의 거리"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    완전제곱으로 $r=4$, 현의 반이 3 이므로 $d=\sqrt{16-9}$. 직선 $l$ 의 방정식이 주어지지 않은 것이 오히려 단서로, 거리 관계만으로 닫힌다는 것을 알아채면 한 줄이다.
    통찰 1개·M_total 5 이지만 통찰이 있어 −1 하지 않고 STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: "완전제곱 → $r=4$ → 현의 수직이등분 → $d=\\sqrt{r^2-3^2}$"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\sqrt{7}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/140-282.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항 계수·상수항과 현의 길이를 바꿀 수 있음. 제약: 현의 길이 < $2r$ 이어야 하고, $(현의 반, d, r)$ 이 피타고라스 수면 답이 정수."
    creative: "(1) 거리를 주고 현의 길이를 묻는 역방향(★2) (2) 직선을 좌표축으로 지정하면 거리 계산이 붙어 ★2~3(140-280) (3) 「현의 길이가 최대·최소일 때」를 묻으면 $d$ 의 범위 논의가 생겨 ★3 (4) 평면으로 잘라 교선 원의 현으로 바꾸면 이중 직각삼각형 ★4."
```

```yaml
- id: GN-GEO-140-283
  page: 140
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    두 구 위를 각각 움직이는 두 점 사이의 거리의 최솟값 구하기.
  category: "두 구가 외부 → 최솟값 $=$ 중심거리 $-$ 두 반지름의 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 점이 동시에 움직이는 상황을 「두 중심을 잇는 직선 위에서 최단」으로 옮겨 최솟값 $=d-(r_1+r_2)$ 로 환원(두 구가 서로 밖에 있음을 먼저 확인해야 음수가 되지 않음)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "두 구 위의 점 사이 거리의 최대·최소"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    중심 사이 거리 $5\sqrt{2}$, 반지름이 $\sqrt{2}$ 와 $2\sqrt{2}$ 이므로 최솟값 $2\sqrt{2}$.
    139-e14 ⑵ 의 한쪽 점을 다시 구 위의 점으로 바꾼 확장이고, 두 변수를 동시에 움직이는 환원이라 depth 2.
    [분류 이슈] 통찰 depth 2 를 반영하면 ★3 후보지만 STEP 1 구역 신호와 표준 공식 수준이라 ★2 로 둔다.
  tier: star_2
  mechanism_primary: "두 중심 사이 거리 $d$ → $d>r_1+r_2$ 확인 → 최솟값 $=d-(r_1+r_2)$"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2\sqrt{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/140-283.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 중심과 두 반지름을 바꿀 수 있음. 제약: $d>r_1+r_2$ 라야 최솟값이 양수이고, $d$ 와 두 반지름이 같은 무리수 배수($\\sqrt{2}$ 계열)면 답이 깔끔하다. 두 구가 만나면 최솟값은 0 이 되어 문항이 무의미해진다."
    creative: "(1) 최댓값 $d+(r_1+r_2)$ 을 묻기(★2) (2) 한 구를 점으로 축소하면 139-279 골조(★2) (3) 두 구가 서로 포함 관계일 때로 바꾸면 최솟값이 $r_1-(d+r_2)$ 가 되어 T-범위 함정 ★3 (4) 최솟값이 주어졌을 때 한 구의 상수를 역산하면 ★3."
```

### 연습문제 STEP 2

```yaml
- id: GN-GEO-140-284
  page: 140
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    두 정점에 이르는 거리의 비가 $2:3$ 인 점이 나타내는 도형의 부피 구하기.
  category: "거리의 비 조건 → 좌표 방정식 → 구(아폴로니우스) → 부피"
  M: {s: 3, k: 3, a: 1, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「거리의 비가 일정한 점의 자취」라는 기하 조건을 $9\\,\\overline{PA}^2=4\\,\\overline{PB}^2$ 좌표식으로 옮기고, 정리한 결과가 구임을 읽어 냄"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "아폴로니우스 구(두 점에 이르는 거리의 비가 일정한 점의 자취)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $\overline{PA}:\overline{PB}=2:3$ 을 제곱 비로 옮겨야 무리식이 사라진다. 정리하면 $x^2+(y-6)^2+z^2=36$ 으로 반지름 6 의 구.
    평면의 아폴로니우스 원을 공간으로 확장한 것이며, 자취가 구라는 결론 자체가 학습 포인트다. 통찰 1개(d2)·M_total 8 → STEP 2 ★3.
  tier: star_3
  mechanism_primary: "$3\\overline{PA}=2\\overline{PB}$ → 제곱해 좌표식 → 정리하면 구 → $V=\\dfrac{4}{3}\\pi r^3$"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$288\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/140-284.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 정점의 위치와 비 $m:n$ 을 바꿀 수 있음. 제약: $m \\ne n$ 이라야 구가 되고($m=n$ 이면 수직이등분평면), 두 점을 한 좌표축 위에 두면 정리가 쉽다. 반지름이 정수로 떨어지도록 비와 두 점 사이 거리를 맞춘다."
    creative: "(1) 부피 대신 겉넓이·중심·반지름을 묻기(★3) (2) 두 정점을 축 위가 아닌 일반 위치로 두면 계산량만 늘고 골조는 같음(★3) (3) 이 구가 좌표평면과 만나는 원의 넓이를 이어 묻기(★4) (4) 비 대신 $\\overline{PA}^2+\\overline{PB}^2=k$ 를 주면 중점 중심의 구가 되어 ★3."
```

```yaml
- id: GN-GEO-140-285
  page: 140
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    반지름이 주어진 구가 세 좌표축에 동시에 접할 때 구의 중심과 원점 사이의 거리 구하기.
  category: "세 축 접 조건 세 식 → 변끼리 더해 제곱합 → 원점까지 거리"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "세 축에 대한 접 조건 세 식을 개별로 풀지 않고 변끼리 더해 $a^2+b^2+c^2$ 를 한 번에 얻음 — 묻는 값이 제곱합이라 중심 좌표는 필요 없음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "세 좌표축에 동시에 접하는 구(중심까지의 거리)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    중심 $(a,b,c)$ 에 대해 $b^2+c^2=c^2+a^2=a^2+b^2=16$ 세 식. 더하면 $2(a^2+b^2+c^2)=48$ 이라 $\overline{OC}=\sqrt{24}$.
    좌표를 하나씩 구해도 되지만 묻는 것이 제곱합이므로 조건 통합이 훨씬 짧다. 축 접 거리가 「나머지 두 성분」이라는 대응(134-266)이 전제.
    통찰 1개(I-CON d2)·M_total 8 → STEP 2 ★3.
  tier: star_3
  mechanism_primary: "세 축 접 → 세 제곱합 식 → 변끼리 더해 $a^2+b^2+c^2=24$ → $\\overline{OC}=2\\sqrt{6}$"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$2\sqrt{6}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/140-285.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "반지름을 바꿀 수 있음. 제약: $\\overline{OC}=r\\sqrt{3/2}$ 이므로 $r$ 이 $\\sqrt{2}$ 의 배수면 답이 간단해진다. 세 축 대칭 구조를 깨려면 접하는 축을 두 개로 줄여야 한다."
    creative: "(1) 구의 방정식을 모두 구하게 하면 부호 8가지 분기가 생겨 I-MI 추가 ★4 (2) 세 축 대신 세 좌표평면 동시 접으로 바꾸면 137-e12 골조(★3) (3) 두 축에만 접하고 한 점을 지나게 하면 연립이 늘어 ★4 (4) 원점까지 거리 대신 중심이 지나는 직선을 묻기(★3)."
```

```yaml
- id: GN-GEO-141-286
  page: 141
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    구와 $yz$ 평면의 교선을 밑면으로 하고 그 구에 내접하는 원기둥의 부피 구하기.
  category: "평면 교선 → 밑면 반지름 / 윗면 원도 구 위 → 높이 → 부피"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "입체 배치를 중심축($x$ 축 방향)을 품은 단면 직사각형으로 옮겨, 밑면·윗면 두 원을 각각 $r^2=d^2+r'^2$ 직각삼각형 두 개로 읽음"
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「구에 내접한다」를 「윗면 원의 둘레도 구 위에 있다 = 윗면까지 중심 거리도 같은 관계를 만족한다」로 옮겨 높이를 결정"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "구와 좌표평면의 교선을 밑면으로 하는 내접 원기둥의 부피"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    중심 $(2,1,2)$·$r=5$, $yz$ 평면까지 거리 2 이므로 밑면 반지름의 제곱은 21. 밑면이 고정이라 원기둥의 반지름은 더 이상 자유롭지 않고, 윗면 원도 반지름이 같아야 하므로 중심에서 윗면까지 거리도 2 — 높이는 4.
    밑면이 중심을 지나지 않는다는 것이 함정으로, 높이를 $2\times2$ 가 아니라 $2+2$ 로 잘못 읽기 쉽다.
    [분류 이슈] 통찰 2개(RT d2)로 보면 ★4 후보이나 STEP 2 신호와 도구가 모두 이 단원 표준이라 ★3 으로 둔다.
  tier: star_3
  mechanism_primary: "$d=2$ → 밑면 $r'^2=25-4=21$ → 윗면도 같은 거리 → 높이 $=2+2$ → $V=\\pi r'^2 h$"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$84\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/141-286.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "중심과 반지름을 바꿀 수 있음. 제약: $yz$ 평면까지 거리 $d<r$ 이어야 밑면이 생기고, 높이는 $2d$ 가 아니라 $x_0+d$ 꼴로 중심 위치에 따라 달라진다. $r^2-d^2$ 이 정수면 부피가 $\\pi$ 의 정수배."
    creative: "(1) 부피가 최대가 되는 내접 원기둥으로 바꾸면 밑면이 자유로워져 최적화가 붙고 ★4~5 (2) 원기둥 대신 내접 원뿔로 바꾸기(부피 공식만 교체 · ★3) (3) 겉넓이를 묻기(옆면 계산 추가 ★3) (4) 자르는 평면을 $x=k$ 로 두고 $k$ 를 미지수로 하면 ★4."
```

```yaml
- id: GN-GEO-141-287
  page: 141
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제"
  summary: |
    원점에서의 거리가 7 인 점을 중심으로 하는 반지름 8 인 구가 $xy$ 평면과 만나는 원의 넓이가 주어졌을 때, 이 구와 $z$ 축이 만나는 두 점 사이의 거리를 구하는 5지선다.
  category: "성분 제곱합 통합 → 평면 교선으로 $z_0^2$ → 축까지 거리² → 현의 길이"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$\\overline{OA}=7$ 과 평면 교선 조건을 합쳐 중심의 좌표를 구하지 않고 $z_0^2$ 와 $x_0^2+y_0^2$ 두 덩어리만 확정 — 묻는 값이 $z$ 축까지 거리의 제곱이라 개별 좌표가 필요 없음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "구와 좌표평면·좌표축의 교선(중심 좌표 제곱합 통합)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    교선 넓이 $25\pi$ 에서 교선 반지름 5, 따라서 $z_0^2=64-25=39$. $\overline{OA}=7$ 에서 제곱합이 49 이므로 $x_0^2+y_0^2=10$ 이 $z$ 축까지 거리의 제곱.
    현의 반이 $\sqrt{64-10}$ 이라 $\overline{BC}=6\sqrt{6}$. 중심을 좌표로 특정하려 들면 미지수 3개에 식 2개라 막히는 것이 갈림길.
    [분류 이슈] 교육청 기출 태그의 +1 을 적용하면 ★4 이지만 통찰 1개·도구가 표준이라 STEP 2 출발 ★3 을 유지한다.
  tier: star_3
  mechanism_primary: "교선 넓이 → $z_0^2=39$ → $\\overline{OA}^2=49$ 로 $x_0^2+y_0^2=10$ → $\\overline{BC}=2\\sqrt{64-10}$"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/141-287.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "$\\overline{OA}$, 구의 반지름, 교선 넓이를 바꿀 수 있음. 제약: 교선 반지름 < 구의 반지름, $z_0^2 \\le \\overline{OA}^2$ (남는 $x_0^2+y_0^2$ 가 음수가 되면 안 됨), 그리고 $x_0^2+y_0^2<r^2$ 이어야 $z$ 축과 두 점에서 만난다."
    creative: "(1) 묻는 대상을 $x$ 축·$y$ 축 현으로 바꾸면 $x_0^2$ 와 $y_0^2$ 를 따로 알아야 해 조건이 하나 더 필요(★4) (2) $\\overline{BC}$ 를 주고 교선 넓이를 역산(★3) (3) 두 좌표평면 교선 넓이를 동시에 주면 성분 두 덩어리가 결정되어 ★4 (4) 구가 $z$ 축에 접하도록 조건을 바꾸면 경계값 ★3."
```

### 연습문제 실력 UP

```yaml
- id: GN-GEO-141-288
  page: 141
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    두 구의 $xy$ 평면 위로의 정사영이 접할 때 상수 $k$ 의 값을 모두 구하기.
  category: "구의 정사영 = 중심 투영·같은 반지름의 원 → 두 원이 접할 조건(외접·내접)"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "구의 평면 위로의 정사영을 「중심의 투영점을 중심으로 하고 반지름이 같은 원」으로 옮김 — 3차원 문제를 $xy$ 평면의 두 원 문제로 환원"
    - step: 3
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「접한다」가 외접($d=r_1+r_2$)과 내접($d=|r_1-r_2|$) 두 경우를 모두 포함하므로 두 $k$ 를 모두 구해야 함"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "두 구의 좌표평면 위로의 정사영이 접할 조건"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    첫 구는 중심 $(1,-2,4)$·$r_1=2$, 둘째는 중심 $(-2,2,3)$·$r_2^2=17-k$. 정사영 두 원의 중심 사이 거리는 $z$ 성분을 버린 5.
    $2+r_2=5$ 와 $|r_2-2|=5$ 두 경우에서 $k=8$, $k=-32$. 「모두」 발문이 I-MI 신호이고, 정사영의 반지름이 구의 반지름과 같다(중심 거리만 줄어든다)는 환원이 핵심.
    실력 UP ★4 출발 · 통찰 2개(d2) → ★4 유지.
  tier: star_4
  mechanism_primary: "두 구 → 중심·반지름 → $xy$ 정사영 두 원(중심은 $z$ 버림 · 반지름 동일) → 외접·내접 두 조건 → $k$ 두 값"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$8$, $-32$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/141-288.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 구의 일차항 계수와 첫 구의 상수항을 바꿀 수 있음. 제약: $r_2^2=17-k>0$ 이어야 구이고, 내접 경우의 $r_2$ 가 중심 거리보다 커야 한다. 투영 중심 거리가 피타고라스 수(3,4,5)면 답이 정수."
    creative: "(1) 정사영이 만나지 않을 $k$ 의 범위로 바꾸면 부등식 ★4 (2) 정사영이 아니라 두 구가 접할 조건으로 바꾸면 $z$ 성분도 살아 계산만 늘고 골조는 같음(★3~4) (3) 투영 평면을 $yz$·$zx$ 로 바꾸기(★4) (4) 두 정사영이 접할 때 접점의 좌표를 묻기(★4~5)."
```

```yaml
- id: GN-GEO-141-289
  page: 141
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    구가 $xy$ 평면과 만나서 생기는 도형(원) 위의 점과 주어진 점 사이의 거리의 최솟값 구하기.
  category: "교선 원 확정 → 점을 평면에 투영 → 평면 최단 + 수직 성분 피타고라스"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "공간의 원 위 점까지의 거리를 「평면 안 거리」와 「평면에 수직인 높이」로 분해해 직각삼각형으로 옮김 — 구 위의 점이 아니라 교선 원 위의 점이라 $d\\pm r$ 공식을 그대로 쓸 수 없음"
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "평면 안 최단은 「투영점과 원의 중심을 잇는 선분이 원과 만나는 점」임을 써서 평면 거리 $=$ 중심까지 거리 $-$ 원의 반지름으로 확정"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "구와 좌표평면의 교선 위의 점까지 거리의 최솟값"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    중심 $(1,2,3)$·$r^2=13$ 이므로 $z=0$ 교선은 중심 $(1,2,0)$·반지름 2 인 원. $\pt{P}$ 의 투영 $(5,5,0)$ 에서 원 중심까지 5, 최단 평면거리 $5-2=3$, 높이 4 이므로 최솟값 5.
    구 위가 아니라 「교선 원 위」라는 점이 함정으로, $d-r$ 을 공간에서 바로 적용하면 틀린다. 높이가 원 위 어느 점에서든 일정하다는 점이 분해를 가능하게 한다.
    실력 UP ★4 출발 · 통찰 2개 → ★4 유지.
  tier: star_4
  mechanism_primary: "$z=0$ 교선 원(중심·반지름) → $\\pt{P}$ 를 $xy$ 평면에 투영 → 평면 최단 $=$ 중심거리 $-$ 반지름 → $\\sqrt{(평면최단)^2+z_P^2}$"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/141-289.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구의 중심·반지름과 점 $\\pt{P}$ 를 바꿀 수 있음. 제약: $r^2>z_0^2$ 이어야 교선이 생기고, 투영점이 원 밖에 있어야 평면 최단이 $($중심거리$-$반지름$)$ 이다. (평면최단, $z_P$, 답)이 피타고라스 수(3,4,5)면 정수."
    creative: "(1) 최댓값을 묻기(평면거리가 중심거리 $+$ 반지름 · ★4) (2) 투영점을 원 안에 두면 평면 최단이 $($반지름$-$중심거리$)$ 로 바뀌는 T-범위 함정 ★4 (3) 교선을 좌표평면이 아닌 $z=k$ 로 두면 $k$ 최적화가 붙어 ★5 (4) 구 위의 점으로 되돌리면 139-e14 ⑵ 골조 ★2."
```

```yaml
- id: GN-GEO-141-290
  page: 141
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $z$ 축 위의 점에서 나온 빛이 구에 가려 $xy$ 평면에 생기는 그림자의 넓이 구하기(그림 제시).
  category: "점광원 그림자 → 구에 외접하는 원뿔 → 축 단면 접선 직각삼각형 → 그림자 반지름"
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "광원과 구의 중심이 모두 $z$ 축 위에 있어 전체가 $z$ 축 대칭 — 3차원 원뿔을 축을 품은 평면 단면 하나로 줄여도 된다"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "그림자의 경계를 「광원에서 구에 그은 접선이 $xy$ 평면과 만나는 점」으로 옮기고, 접선 길이·반지름·광원-중심 거리의 직각삼각형으로 닮음비를 세움"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "점광원에 의한 구의 그림자 넓이(외접 원뿔)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    광원 $\pt{P}(0,0,10)$, 구의 중심 $(0,0,3)$·반지름 2 이므로 $\overline{PC}=7$, 접선 길이 $\sqrt{49-4}=3\sqrt{5}$.
    그림자는 $\pt{P}$ 를 꼭짓점으로 구에 외접하는 원뿔이 $xy$ 평면에서 잘린 원이고, 반각을 품은 직각삼각형의 닮음으로 반지름 $=10\tan\theta$.
    접선 길이를 먼저 구해 $\tan\theta=r/\sqrt{d^2-r^2}$ 로 쓰는 경로가 가장 짧다. 실력 UP ★4 출발 · 통찰 2개 → ★4.
    ★5 로 올리지 않은 이유는 통찰이 2개이고 도구가 접선 길이 + 닮음이라는 표준 조합이기 때문.
  tier: star_4
  mechanism_primary: "$\\overline{PC}=7$ → 접선 길이 $\\sqrt{d^2-r^2}$ → $\\tan\\theta=r/\\sqrt{d^2-r^2}$ → 그림자 반지름 $=z_P\\tan\\theta$ → 넓이"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{80}{9}\pi$'
  answer_source: "답지"
  figure: crop:fig-141-290.png
  latex: latex-bank/gn-geo/items/141-290.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "광원의 높이와 구의 중심 높이·반지름을 바꿀 수 있음. 제약: 광원이 구 밖에 있어야 하고($d>r$) 구가 평면에 닿지 않아야 하며, $d^2-r^2$ 이 제곱수면 접선 길이가 정수라 계산이 깔끔하다. 광원과 구의 중심을 모두 $z$ 축 위에 두어야 그림자가 원이 된다(대칭 유지)."
    creative: "(1) 그림자의 넓이를 주고 광원의 높이를 역산(★4) (2) 구를 축에서 벗어나게 옮기면 그림자가 타원이 되어 교육과정을 벗어남 — 대신 구를 $xy$ 평면에 접하게 두면 그림자가 구와 접점을 공유해 ★4 (3) 광원을 무한대(평행광)로 바꾸면 그림자가 반지름 $r$ 인 원이 되어 ★2 (4) 구가 두 개일 때 그림자의 합집합 넓이를 묻기(★5)."
```

## 표본 판정 요약 (34문)

- ★ 분포: ★1 6 · ★2 19 · ★3 6 · ★4 3 · ★5 0
- 통찰형 22 · 절차형 12 · premium 0
- 통찰 유형 분포(총 28개 라벨): I-RT 15 · I-EQV 7 · I-CON 2 · I-MI 2 · I-XU 1 · I-SYM 1. I-BW·I-PD·I-SC·I-VF 는 0 — 이 단원은 조건이 대부분 「거리로 옮기면 바로 닫히는」 형태라 역추적·전략 분기·사후 기각이 요구되는 문항이 없다.
- type_hint 계열별 개수: 접함(좌표평면·좌표축·세 평면·세 축) 6 · 일반형(완전제곱·연립·구가 될 조건) 6 · 구와 좌표평면/좌표축의 교선 6 · 구 밖의 점에서의 접선·거리 최대·최소 5 · 구의 방정식 세우기(표준형·지나는 점·지름 양 끝) 5 · 나머지 단발 6(아폴로니우스 구 · 현의 길이 ↔ 중심거리 · 부피 최소 · 내접 원기둥 · 정사영 접함 · 그림자 넓이)
- 대상층: 하위권 6 · 중하위권 6 · 중위권 16 · 중상위권 6
- 그림: 1문(`crop:fig-141-290.png`) — 나머지 33문은 발문만으로 배치가 확정된다
- 벤더 신호 대비 조정: −1 한 문항 1개(135-267) · +1 한 문항 2개(137-e12 · 137-273) · 나머지 31문은 구역 출발점 유지

## 분류 이슈 목록

판정이 애매해 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다(벤더 신호와 2단 이상 어긋난 문항은 없다).

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-GEO-140-283 | 통찰 depth 2(두 점이 동시에 움직이는 최단 환원)를 반영하면 ★3 후보지만 STEP 1 구역 신호와 표준 공식 수준이라 ★2 로 둠 | ★2 / ★3 |
| GN-GEO-141-286 | 통찰 2개(I-RT d2 + I-EQV d1)로 보면 ★4 후보이나 STEP 2 신호와 도구가 모두 단원 표준이라 ★3 | ★3 / ★4 |
| GN-GEO-141-287 | 「교육청 기출」 태그의 +0~1 을 적용하면 ★4 이지만 통찰 1개·표준 도구라 STEP 2 출발 ★3 유지 | ★3 / ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형** — ① 「구와 좌표평면의 교선」과 ② 「구와 좌표축의 현」은 쓰는 성분이 한 개 vs 두 개로 갈려 학생 오답 패턴이 다르므로 분리한다(이 범위 138-e13·274·275·276 vs 140-280·141-287). ③ 「좌표평면 접」과 ④ 「좌표축 접」도 같은 이유로 분리(134-265 vs 134-266·137-272). ⑤ 「세 좌표평면/세 좌표축 동시 접」은 부호 분기·조건 통합이 추가되므로 ③④ 와 별개 유형(137-e12⑵·137-273·140-285).
- **통합해도 될 유형** — 「중심·반지름으로 세우기」·「지나는 점으로 세우기」·「지름의 양 끝 점으로 세우기」는 모두 $r^2$ 을 거리로 환산하는 한 골조라 한 유형 아래 하위 패턴으로 둔다(134-262·263·135-e10·267·268). 「접선의 길이」와 「구 위 점까지 거리의 최대·최소」도 $d$ 와 $r$ 의 결합 방식만 다르므로 한 유형으로 묶고 소분류로 나눈다(139-e14·277·278·279·140-283).
- **단발 유형(카탈로그 등재 여부 검토)** — 아폴로니우스 구(140-284) · 부피 최소 미정계수(140-281) · 내접 원기둥(141-286) · 정사영 접함(141-288) · 점광원 그림자(141-290). 앞의 둘은 다른 단원에서도 반복되므로 공통 유형으로, 뒤의 셋은 이 단원 고유의 ★4 변별 슬롯으로 등재할 후보다.
