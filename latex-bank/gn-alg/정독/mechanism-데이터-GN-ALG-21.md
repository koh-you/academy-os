---
name: mechanism-데이터-GN-ALG-21
description: 개념원리 대수 21 사인법칙(1/1 · 12문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 대수 (22개정) · 전사본 latex-bank/gn-alg
  section: 21 사인법칙
  unit_code: GN-ALG-21
  part: "1/1"
  extract_range: "198~200쪽 · 198-e1~200-466"
  total_problems: 12
  unit_total: 12
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(필수 예제 ★2 · 그 옆의 확인체크 유제 ★2)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). depth_score 는 insights 의 effective_depth 합. insight_type 은 insights 가 비면 절차형, 하나라도 있으면 통찰형. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-alg/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-alg/items/<id>.tex
  image_source: latex-bank/gn-alg/figures/
---

# 개념원리 대수 · 21 사인법칙 (1/1) 정독 데이터 (v1.0)

198~200쪽 12문항 전수. 전사본의 구역은 「필수·발전 예제」 하나뿐이고, 그 안이 필수 예제 5문(e1~e5)과 각 예제에 붙은 확인체크 유제 7문으로 되어 있다. 개념원리 고등의 난이도 신호는 구역과 예제 태그이므로 필수 예제와 그 확인체크 유제를 모두 ★2 출발로 잡고 M_total 과 통찰 라벨로 ±1 만 조정했다. 이 단원에는 STEP 1·STEP 2·실력 UP 연습문제가 없어 ★4 이상이 나올 구역 신호 자체가 없다.

이 단원은 (가) 사인법칙으로 남은 변·각을 직접 구하는 층, (나) $\dfrac{a}{\sin A}=2R$ 로 외접원의 반지름·넓이·둘레로 넘어가는 층, (다) 각의 비·변의 합의 비를 $\sin$ 의 비로 옮기는 변형 층, (라) $\sin$ 을 변으로 통일해 삼각형의 모양을 판정하는 층의 네 겹이다. 판정에서는 (라) 의 「각의 식 → 변의 식」 전환과 (나) 의 실생활 상황 → 외접원 모델링만 통찰(I-RT)로 세고, $\sin A:\sin B:\sin C=a:b:c$ 같은 이 단원의 표준 변형 자체는 통찰로 세지 않았다. 대변·대각 대응 착각(T-표기), 반지름·지름·둘레 혼동(T-단위), 두 변과 한 대각이 주어질 때의 둔각 여지(T-범위)는 Mₜ 로 흡수했다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-ALG-198-e1
  page: 198
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: '필수 예제'
  summary: |
    삼각형 ABC 에서 ⑴ $a=10$, $A=45^\circ$, $C=60^\circ$ 일 때 $c$ 의 값 ⑵ $b=1$, $c=\sqrt{3}$, $B=30^\circ$ 일 때 $A$ 의 크기.
  category: '사인법칙 → 대변·대각 대응 → 남은 변·각'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 2
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '$\sin C=\dfrac{\sqrt{3}}{2}$ 에서 $C$ 가 $60^\circ$ 와 $120^\circ$ 두 경우이고 $B=30^\circ$ 라 둘 다 삼각형을 이루므로 모두 따져야 함'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '사인법칙으로 남은 변·각 구하기(둔각 경우 포함)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 $\dfrac{a}{\sin A}=\dfrac{c}{\sin C}$ 한 줄이다. ⑵ 는 $\sin C$ 를 먼저 구하는데 그 값이 1 보다 작아 예각·둔각 두 경우가 모두 살아남는다.
    두 경우를 모두 남겨야 답이 완성되므로 I-MI d1 이고 T-범위 함정이 붙는다. 필수 예제 출발 ★2 · 통찰 1 · M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: '⑴ $\dfrac{a}{\sin A}=\dfrac{c}{\sin C}$ → $c$ ⑵ $\sin C=\dfrac{c\sin B}{b}$ → $C$ 두 경우 → $A=180^\circ-B-C$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ $5\sqrt{6}$ ⑵ $A=90^\circ$ 또는 $A=30^\circ$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/198-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '⑴ 은 특수각 짝($30^\circ$, $45^\circ$, $60^\circ$, $120^\circ$)과 한 변의 길이를 바꿀 수 있다. 제약: 주어진 두 각의 합이 $180^\circ$ 미만이어야 한다. ⑵ 는 $b$, $c$, $B$ 를 바꾸되 $\dfrac{c\sin B}{b}<1$ 이어야 두 경우가 살아남고, $b\ge c$ 로 두면 둔각 경우가 사라져 답이 하나가 된다.'
    creative: '(1) ⑵ 에서 $b$ 를 크게 잡아 해가 하나만 남게 하면 I-MI 가 사라져 ★1~2 (2) 두 경우 각각의 남은 변이나 넓이까지 구하게 하면 분기가 끝까지 유지돼 ★3 (3) 외접원의 반지름을 매개로 끼워 두 단계로 만들면 ★3.'
```

```yaml
- id: GN-ALG-198-460
  page: 198
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: '확인체크 유제'
  summary: |
    삼각형 ABC 에서 $c=20$, $A=45^\circ$, $B=105^\circ$ 일 때 $a$ 의 값.
  category: '세 번째 각 → 사인법칙 한 번 → 변'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '사인법칙으로 한 변의 길이 구하기'
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    $C=30^\circ$ 를 먼저 구하고 $\dfrac{a}{\sin A}=\dfrac{c}{\sin C}$ 에 한 번 넣으면 끝난다. 둔각 여지도 없고 값이 모두 특수각이다.
    확인체크 유제 출발 ★2 이지만 통찰 0 · M_total 4 라 −1 하여 ★1.
  tier: star_1
  mechanism_primary: '$C=180^\circ-A-B$ → $a=\dfrac{c\sin A}{\sin C}$'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$20\sqrt{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/198-460.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$c$ 의 값과 주어진 두 각을 바꿀 수 있다. 제약: 두 각의 합이 $180^\circ$ 미만이고 세 각이 모두 특수각이어야 답이 근호 한 개로 정리된다.'
    creative: '(1) 구하는 대상을 $b$ 나 삼각형의 넓이로 바꾸기(★2) (2) 외접원의 반지름을 묻기(★2) (3) 두 각 대신 두 변과 한 각을 주면 둔각 분기가 생겨 ★2~3.'
```

```yaml
- id: GN-ALG-198-461
  page: 198
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: '확인체크 유제'
  summary: |
    삼각형 ABC 에서 $a=15$, $c=30$, $A=30^\circ$ 일 때 ⑴ $B$ 의 크기 ⑵ $b$ 의 값.
  category: '사인법칙 → $\sin C$ → $C$ → $B$ → $b$'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '사인법칙으로 각을 구한 뒤 남은 변 구하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $\sin C=\dfrac{c\sin A}{a}=1$ 이라 $C=90^\circ$ 가 유일하게 정해지고 둔각 분기가 생기지 않는다. 이어 $B=60^\circ$, $b=\dfrac{a\sin B}{\sin A}$ 로 끝난다.
    사인값이 정확히 1 인 경계라 경우 나눔이 없어 통찰 0. 확인체크 출발 ★2 · M_total 5 · 두 소문항 연쇄 → ★2 유지.
  tier: star_2
  mechanism_primary: '$\sin C=\dfrac{c\sin A}{a}=1$ → $C=90^\circ$ → $B=60^\circ$ → $b=\dfrac{a\sin B}{\sin A}$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $60^\circ$ ⑵ $15\sqrt{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/198-461.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$a$, $c$, $A$ 를 바꿀 수 있다. 제약: $\dfrac{c\sin A}{a}\le 1$ 이어야 삼각형이 존재하고, 값이 정확히 1 이면 지금처럼 해가 하나, 1 보다 작으면 둔각 경우가 추가로 생겨 답이 둘이 된다.'
    creative: '(1) $c$ 를 줄여 $\sin C<1$ 로 만들면 I-MI d1 이 생겨 ★3 (2) 외접원의 반지름을 함께 묻기(★2) (3) $B$ 대신 삼각형의 넓이를 묻기(★2).'
```

```yaml
- id: GN-ALG-198-462
  page: 198
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: '확인체크 유제'
  summary: |
    삼각형 ABC 에서 $a=6$, $b=4$, $A=60^\circ$ 일 때 $\cos^2 B$ 의 값.
  category: '사인법칙 → $\sin B$ → 피타고라스 항등식 → $\cos^2 B$'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '사인법칙으로 $\sin B$ 를 구한 뒤 항등식으로 $\cos^2 B$'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $\sin B=\dfrac{b\sin A}{a}$ 한 줄, $\cos^2 B=1-\sin^2 B$ 한 줄. 두 줄이지만 사인법칙과 삼각함수 항등식 두 도구를 이어 붙인다.
    묻는 것이 $\cos B$ 가 아니라 제곱이라 부호 판정 없이 답이 하나로 확정되는 설계여서 분기가 없다. 확인체크 출발 ★2 · 통찰 0 → ★2 유지.
  tier: star_2
  mechanism_primary: '$\sin B=\dfrac{b\sin A}{a}$ → $\cos^2 B=1-\sin^2 B$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{2}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/198-462.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$a$, $b$, $A$ 를 바꿀 수 있다. 제약: $a>b$ 여야 $B$ 가 예각으로 결정되는 구조가 유지되고, $\dfrac{b\sin A}{a}$ 의 제곱이 유리수여야 $\cos^2 B$ 가 분수로 떨어진다.'
    creative: '(1) $\cos^2 B$ 대신 $\cos B$ 를 물으면 둔각 배제 논증이 필요해 T-부호가 늘고 ★3 (2) $\tan B$ 를 묻기(★3) (3) $\sin(B+C)$ 처럼 각의 합으로 바꾸면 삼각함수 단원과 결합돼 ★3.'
```

```yaml
- id: GN-ALG-199-e2
  page: 199
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: '필수 예제'
  summary: |
    $\overline{BC}=2\sqrt{2}$, $B=60^\circ$, $C=75^\circ$ 인 삼각형 ABC 의 외접원의 반지름 $R$.
  category: '세 번째 각 → $\dfrac{a}{\sin A}=2R$ → $R$'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '사인법칙과 외접원의 반지름($\dfrac{a}{\sin A}=2R$)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    주어진 변이 $\overline{BC}$ 이므로 그 대각이 $A$ 임을 짚고 $A=45^\circ$ 를 구한 뒤 $\dfrac{a}{\sin A}=2R$ 한 번이면 된다.
    대변·대각 대응(T-표기)만 넘으면 한 줄이지만 외접원과 사인법칙을 잇는 이 단원의 두 번째 개념이라 필수 예제 출발 ★2 를 유지했다.
  tier: star_2
  mechanism_primary: '$A=180^\circ-B-C$ → $2R=\dfrac{\overline{BC}}{\sin A}$ → $R$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "본문 풀이"
  figure: crop:fig-199-e2.png
  latex: latex-bank/gn-alg/items/199-e2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$\overline{BC}$ 의 길이와 두 각을 바꿀 수 있다. 제약: 남은 각 $A$ 가 특수각이어야 $R$ 가 근호 없이 떨어지고, 두 각의 합이 $180^\circ$ 미만이어야 한다. 그림의 꼭짓점 라벨과 각의 위치는 고정한다.'
    creative: '(1) $R$ 대신 외접원의 넓이나 둘레를 묻기(★2) (2) $R$ 를 주고 변을 되묻는 역방향으로 바꾸면 I-BW d1 이 생겨 ★3 (3) 외접원의 반지름을 거쳐 다른 변까지 구하게 하면 단계가 늘어 ★3.'
```

```yaml
- id: GN-ALG-199-e3
  page: 199
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: '필수 예제'
  summary: |
    삼각형 ABC 에서 $(a+b):(b+c):(c+a)=6:7:9$ 일 때 $\sin A:\sin B:\sin C$.
  category: '합의 비 → 세 변의 비 → 사인법칙의 변형'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '세 합을 비례상수 $k$ 로 놓고 모두 더해 $a+b+c$ 를 만든 뒤 각 합을 빼서 변을 하나씩 분리하는 동치 변환'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '사인법칙의 변형 — 변의 비와 $\sin$ 의 비'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    변끼리의 합만 주어져 변을 바로 읽을 수 없다. 세 식을 모두 더해 $2(a+b+c)$ 를 만들고 각 합을 빼야 세 변의 비가 나온다.
    마지막의 $\sin A:\sin B:\sin C=a:b:c$ 는 이 단원의 표준 변형이라 통찰로 세지 않았다. 필수 예제 출발 ★2 · 통찰 1 d2 → ★2 유지.
    [분류 이슈] 모두 더해 반으로 줄이는 착안은 발전 예제급이라 ★3 후보이기도 하다.
  tier: star_2
  mechanism_primary: '$a+b=6k$ 등을 모두 더해 $a+b+c=11k$ → 각 변 → $\sin$ 의 비 $=$ 변의 비'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$4:2:5$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/199-e3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '비 $6:7:9$ 를 다른 세 수로 바꿀 수 있다. 제약: 세 수의 합이 짝수여야 $a+b+c$ 가 정수비로 떨어지고, 빼서 얻은 세 값이 모두 양수이며 삼각부등식을 만족해야 한다.'
    creative: '(1) $\sin$ 의 비 대신 최대각의 크기나 삼각형의 모양을 묻게 하면 코사인법칙과 결합돼 ★3 (2) 변의 합의 비 대신 $\sin$ 끼리의 합의 비를 주면 변환이 한 겹 늘어 ★3 (3) 세 변의 비에서 외접원의 반지름과 넓이까지 묻기(★3).'
```

```yaml
- id: GN-ALG-199-463
  page: 199
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: '확인체크 유제'
  summary: |
    $\overline{AC}=3\sqrt{3}$, $A=75^\circ$, $C=45^\circ$ 인 삼각형 ABC 의 외접원의 넓이.
  category: '세 번째 각 → $2R$ → 원의 넓이'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '외접원의 반지름에서 넓이로(사인법칙 $2R$)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $\overline{AC}$ 의 대각이 $B=60^\circ$ 임을 먼저 잡고 $2R=\dfrac{\overline{AC}}{\sin B}$ 로 $R$ 를 구한 뒤 $\pi R^2$ 로 넘어간다.
    대변·대각 대응에 반지름 → 넓이 한 단계가 더 붙어 199-e2 보다 한 걸음 길다. 확인체크 출발 ★2 · 통찰 0 · M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: '$B=180^\circ-A-C$ → $2R=\dfrac{\overline{AC}}{\sin B}$ → $\pi R^2$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$9\pi$'
  answer_source: "답지"
  figure: crop:fig-199-463.png
  latex: latex-bank/gn-alg/items/199-463.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$\overline{AC}$ 의 길이와 두 각을 바꿀 수 있다. 제약: 남은 각이 특수각이고 $\dfrac{\overline{AC}}{\sin B}$ 가 짝수로 떨어져야 $R$ 가 정수이고 넓이가 $\pi$ 의 정수배가 된다.'
    creative: '(1) 넓이 대신 둘레나 호의 길이를 묻기(★2) (2) 외접원의 넓이를 주고 변을 되묻는 역방향(★3 · I-BW d1) (3) 삼각형의 넓이까지 함께 묻게 하면 도구가 하나 늘어 ★3.'
```

```yaml
- id: GN-ALG-199-464
  page: 199
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: '확인체크 유제'
  summary: |
    삼각형 ABC 에서 $A:B:C=3:2:1$ 일 때 $a:b:c$.
  category: '각의 비 → 세 각 → $\sin$ 의 비 → 변의 비'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '각의 비가 주어질 때 변의 비(사인법칙의 변형)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    내각의 합 $180^\circ$ 로 세 각을 먼저 확정하고 $a:b:c=\sin A:\sin B:\sin C$ 로 옮긴다.
    각의 비를 그대로 변의 비 $3:2:1$ 이라고 답하는 것이 이 유형의 대표 오답(T-표기)이라 길이는 짧아도 채점 포인트가 분명하다. 확인체크 출발 ★2 유지.
  tier: star_2
  mechanism_primary: '$A:B:C=3:2:1$ → $90^\circ$, $60^\circ$, $30^\circ$ → $a:b:c=\sin A:\sin B:\sin C$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2:\sqrt{3}:1$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/gn-alg/items/199-464.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '각의 비를 $2:1:1$, $4:1:1$, $1:1:1$ 처럼 바꿀 수 있다. 제약: 세 항의 합으로 $180^\circ$ 를 나눈 값의 정수배가 모두 특수각이어야 $\sin$ 값이 근호 한 개로 정리된다.'
    creative: '(1) 변의 비 대신 최대변과 최소변의 비만 묻기(★1~2) (2) 각의 비와 한 변의 길이를 함께 주고 외접원의 반지름을 묻기(★2) (3) 변의 비를 주고 각의 비를 되묻는 역방향은 코사인법칙이 필요해 ★3.'
```

```yaml
- id: GN-ALG-200-e4
  page: 200
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: '필수 예제'
  summary: |
    삼각형 ABC 에서 $a\sin A=b\sin B+c\sin C$ 가 성립할 때 삼각형 ABC 가 어떤 삼각형인지 판정.
  category: '$\sin$ 을 변으로 통일 → 변만의 식 → 모양 판정'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$\sin A=\dfrac{a}{2R}$ 로 각의 식을 변만의 식으로 옮겨야 비교가 가능해지는 표현 전환'
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '$a^2=b^2+c^2$ 을 피타고라스 정리의 역으로 되읽어 직각인 각이 $A$ 임을 지정'
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: '사인법칙을 이용한 삼각형의 모양 결정'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    변과 $\sin$ 이 섞인 식이라 그대로는 비교가 되지 않는다. $\sin A=\dfrac{a}{2R}$ 를 넣어 $2R$ 를 약분하면 변만의 식이 남는다.
    거기서 멈추지 않고 어느 각이 직각인지(대변이 $a$ 이므로 $A$)까지 말해야 답이 완성된다. 통찰 2 · depth 합 3 · M_total 6 → 필수 예제 출발 ★2 에서 +1 하여 ★3.
  tier: star_3
  mechanism_primary: '$\sin A=\dfrac{a}{2R}$ 대입 → $a^2=b^2+c^2$ → $A=90^\circ$ 인 직각삼각형'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$A=90^\circ$인 직각삼각형'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/200-e4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '항의 짜임을 $a\sin A=b\sin B$ 나 $2a\sin A=b\sin B+c\sin C$ 처럼 바꿀 수 있다. 제약: 변으로 통일한 뒤 남는 식이 $a=b$ 나 피타고라스 꼴처럼 이름 있는 모양으로 정리돼야 한다.'
    creative: '(1) $\sin^2 A=\sin^2 B+\sin^2 C$ 꼴로 바꿔도 같은 골조라 ★3 (2) 코사인법칙이 필요한 식($a\cos A=b\cos B$)으로 바꾸면 경우가 둘로 갈려 I-MI 가 더해지고 ★4 (3) 모양 대신 특정 각의 크기나 변의 비를 묻기(★3).'
```

```yaml
- id: GN-ALG-200-e5
  page: 200
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: '필수 예제'
  summary: |
    원 모양 호수의 둘레 위 세 지점 A, B, C 에 대해 $\overline{AB}=50\,\mathrm{m}$, $\angle CAB=45^\circ$, $\angle ABC=105^\circ$ 일 때 호수의 지름.
  category: '실생활 원 → 세 점의 외접원 → $\dfrac{c}{\sin C}=2R$'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '호수의 지름이라는 상황을 세 지점을 지나는 외접원의 지름 $2R$ 로 옮겨 사인법칙을 쓸 수 있게 만드는 모델링'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '사인법칙의 실생활 활용 — 외접원의 지름'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    세 지점이 호수의 둘레 위에 있으므로 호수의 원이 곧 삼각형 ABC 의 외접원이라는 해석이 첫 관문이다. 그 뒤 $C=30^\circ$ 와 $2R=\dfrac{\overline{AB}}{\sin C}$ 한 줄이다.
    구하는 것이 반지름이 아니라 지름이라 $2R$ 를 그대로 답해야 하는 T-단위 주의가 있다. 필수 예제 출발 ★2 · 통찰 1 d1 → ★2 유지.
  tier: star_2
  mechanism_primary: '호수 = 삼각형 ABC 의 외접원 → $C=30^\circ$ → 지름 $=\dfrac{\overline{AB}}{\sin C}$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$100\,\mathrm{m}$'
  answer_source: "본문 풀이"
  figure: crop:fig-200-e5.png
  latex: latex-bank/gn-alg/items/200-e5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$\overline{AB}$ 의 길이와 측정한 두 각을 바꿀 수 있다. 제약: 남은 각이 특수각이어야 하고 두 각의 합이 $180^\circ$ 미만이어야 한다. 그림의 지점 라벨 A, B, C 와 각의 위치는 고정한다.'
    creative: '(1) 지름 대신 호수의 둘레나 넓이를 묻기(★2) (2) 지름을 주고 두 지점 사이의 거리를 되묻는 역방향(★3 · I-BW d1) (3) 세 지점 중 하나를 원 밖(호수 옆 지점)에 두면 외접원 해석이 깨져 코사인법칙이 필요해지고 ★4.'
```

```yaml
- id: GN-ALG-200-465
  page: 200
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: '확인체크 유제'
  summary: |
    삼각형 ABC 에서 $a\sin^2 A=b\sin^2 B$ 가 성립할 때 삼각형 ABC 가 어떤 삼각형인지 판정.
  category: '$\sin$ 을 변으로 통일 → $a^3=b^3$ → 모양 판정'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$\sin A=\dfrac{a}{2R}$ 로 각의 식을 변만의 식으로 옮겨 세제곱끼리의 등식을 얻는 표현 전환'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '사인법칙을 이용한 삼각형의 모양 결정(이등변)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $\sin$ 이 제곱으로 붙어 있어도 골조는 200-e4 와 같다. $\sin A=\dfrac{a}{2R}$ 를 넣고 $4R^2$ 을 약분하면 $a^3=b^3$ 이 남고, 변은 양수라 실수 해가 하나뿐이다.
    200-e4 와 달리 결론을 다시 해석하는 단계가 없어 통찰 1개. 확인체크 출발 ★2 · M_total 6 → ★2 유지.
    [분류 이슈] 같은 모양 결정 골조인데 200-e4 는 ★3, 이 문항은 ★2 로 갈린다.
  tier: star_2
  mechanism_primary: '$\sin A=\dfrac{a}{2R}$ 대입 → $a^3=b^3$ → $a=b$ 인 이등변삼각형'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$a=b$인 이등변삼각형'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/gn-alg/items/200-465.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$\sin$ 의 지수를 바꿔 $a\sin A=b\sin B$ 나 $a\sin^3 A=b\sin^3 B$ 로 할 수 있다. 제약: 변으로 통일한 뒤 좌우가 같은 차수의 거듭제곱이어야 하고, 변이 양수라 실수 해가 하나로 확정되어야 한다.'
    creative: '(1) 우변에 $c$ 항을 더해 피타고라스 꼴로 만들면 200-e4 와 같은 ★3 (2) $a\sin^2 A=b\sin^2 C$ 처럼 첨자를 어긋나게 하면 변의 관계가 비대칭이 되어 ★3 (3) 모양 대신 $\dfrac{a}{b}$ 의 값을 묻기(★2).'
```

```yaml
- id: GN-ALG-200-466
  page: 200
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: '확인체크 유제'
  summary: |
    원 모양 거울의 가장자리 위 세 지점 A, B, C 에 대해 $\overline{AC}=40\,\mathrm{cm}$, $\angle ABC=45^\circ$, $\angle BCA=60^\circ$ 일 때 거울의 둘레의 길이.
  category: '실생활 원 → 외접원 → $2R$ → 원의 둘레'
  M: {s: 1, k: 1, a: 1, t: 2}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '거울의 가장자리를 세 지점의 외접원으로 보고 둘레를 $2\pi R$ 로 옮기는 모델링'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '사인법칙의 실생활 활용 — 외접원의 둘레'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $\overline{AC}$ 의 대각이 $\angle ABC$ 임을 골라 $2R=\dfrac{\overline{AC}}{\sin B}$ 를 구하고 둘레 $\pi\times 2R$ 로 넘어간다.
    주어진 $\angle BCA=60^\circ$ 는 풀이에 쓰이지 않는 잉여 조건이어서, 어느 각이 대각인지 고르는 T-표기와 반지름·지름·둘레를 혼동하는 T-단위가 함께 걸린다. 확인체크 출발 ★2 · 통찰 1 → ★2 유지.
  tier: star_2
  mechanism_primary: '거울 = 삼각형 ABC 의 외접원 → $2R=\dfrac{\overline{AC}}{\sin B}$ → 둘레 $=2\pi R$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$40\sqrt{2}\pi\,\mathrm{cm}$'
  answer_source: "답지"
  figure: crop:fig-200-466.png
  latex: latex-bank/gn-alg/items/200-466.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$\overline{AC}$ 의 길이와 $\angle ABC$ 를 바꿀 수 있다. 제약: $\angle ABC$ 가 특수각이어야 $2R$ 가 근호 한 개로 정리되고, 잉여 조건 $\angle BCA$ 는 두 각의 합이 $180^\circ$ 미만이기만 하면 어떤 값이어도 된다. 그림의 지점 라벨은 고정한다.'
    creative: '(1) 둘레 대신 거울의 넓이나 지름을 묻기(★2) (2) 잉여 조건을 빼고 $\angle BCA$ 와 $\angle CAB$ 만 주면 대각을 먼저 계산해야 해 한 단계 늘고 ★2~3 (3) 거울의 둘레를 주고 $\overline{AC}$ 를 되묻는 역방향(★3 · I-BW d1).'
```

## 표본 판정 요약 (12문)

- ★ 분포: ★1 1 · ★2 10 · ★3 1 · ★4 0 · ★5 0 (연습문제 STEP·실력 UP 구역이 없는 단원이라 ★4 이상 구역 신호가 아예 없다)
- 통찰형 6 · 절차형 6 · premium 0
- 통찰 라벨 7개: I-RT 4 (200-e4 · 200-e5 · 200-465 · 200-466) · I-EQV 2 (199-e3 · 200-e4) · I-MI 1 (198-e1)
- type_hint 묶음: 「사인법칙으로 남은 변·각 구하기」 4 (198-e1 · 198-460 · 198-461 · 198-462) · 「외접원의 반지름·넓이」 2 (199-e2 · 199-463) · 「모양 결정」 2 (200-e4 · 200-465) · 「실생활 활용(외접원의 지름·둘레)」 2 (200-e5 · 200-466) · 「비의 변형」 2 (199-e3 · 199-464)
- 대상층: 하위권 1 · 중하위권 5 · 중위권 5 · 중상위권 1
- 그림: 4문 (`crop:fig-199-e2.png` · `crop:fig-199-463.png` · `crop:fig-200-e5.png` · `crop:fig-200-466.png`)
- M_total 분포: 4 → 5문 · 5 → 4문 · 6 → 3문 (최대 6 · Mₜ 2 는 200-466 하나)

## 분류 이슈 목록

판정이 애매하거나 벤더 신호와 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-ALG-199-e3 | 세 합을 모두 더해 각 변을 분리하는 착안이 발전 예제급. 필수 태그 출발 ★2 를 유지했으나 통찰 depth 를 3 으로 보면 ★3 | ★2 / ★3 |
| GN-ALG-200-e4 · GN-ALG-200-465 | 같은 「모양 결정」 골조인데 결론 재해석 단계(어느 각이 직각인지) 유무로 ★3 / ★2 로 갈렸다. 카탈로그가 생기면 한 유형의 base ★ 로 묶일 수 있음 | ★2 / ★3 |
| GN-ALG-198-460 | 확인체크 유제라 구역 출발은 ★2 이지만 통찰 0 · M_total 4 로 −1 하여 이 범위에서 혼자 ★1 이 되었다 | ★1 / ★2 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위에서 가장 많이 반복된 골조는 「사인법칙으로 남은 변·각 구하기」(4문)로, 단원의 기본 유형이 된다.
- 따로 세울 유형: **두 변과 한 대각(SSA)** 이 주어진 경우. 198-e1 ⑵ 는 $\sin C<1$ 이라 두 해, 198-461 은 $\sin C=1$ 이라 한 해라서 같은 발문 모양에서 분기 수가 달라진다. 둔각 여지의 유무가 ★ 를 1 단 바꾸므로 기본 유형과 분리하는 편이 낫다.
- 통합해도 될 유형: 「외접원의 반지름·넓이」(199-e2 · 199-463)와 「실생활 활용」(200-e5 · 200-466)은 골조가 모두 $\dfrac{a}{\sin A}=2R$ 하나다. 한 유형으로 묶고 묻는 대상(반지름 · 지름 · 넓이 · 둘레)과 실생활 포장 여부를 변형축으로 두는 것이 낫다. 다만 실생활 포장은 I-RT d1 을 하나 얹으므로 변형 메모에 남긴다.
- 「모양 결정」(200-e4 · 200-465)은 사인법칙 전용으로 세우되 코사인법칙 단원의 모양 결정과 상위 유형을 공유하도록 설계한다. 판별 축은 「변으로 통일한 뒤 남는 식이 무엇인가(피타고라스 꼴 · 같은 차수 등식 · 비대칭 식)」다.
- 「각의 비 → 변의 비」(199-464)와 「변의 합의 비 → $\sin$ 의 비」(199-e3)는 같은 변형 유형 아래 난이도 두 단계로 둘 수 있다.
