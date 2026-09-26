---
name: mechanism-데이터-GN-CM2-13
description: 개념원리 공통수학2 13 점과 직선에 대한 대칭이동(1/1 · 113-e8~118-289) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학2 (22개정) · 전사본 latex-bank/gn-cm2
  section: 13 점과 직선에 대한 대칭이동
  unit_code: CM2-13
  part: "1/1"
  extract_range: "113~118쪽 · 113-e8~118-289"
  total_problems: 23
  unit_total: 23
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm2/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm2/items/<id>.tex
  image_source: latex-bank/gn-cm2/figures/ (crops.json)
---

# 개념원리 공통수학2 · 13 점과 직선에 대한 대칭이동 (1/1) 정독 데이터 (v1.0)

이 파일은 13단원 23문 전수(113~118쪽 · 113-e8~118-289)를 다룬다. 구역은 「필수·발전 예제」 7문(필수 2 · 확인체크 5) · 「특강」 1문 · 「연습문제 STEP 1」 6문 · 「STEP 2」 6문 · 「실력 UP」 3문이다. 단원 전체가 **두 개의 대칭 규칙**(점 대칭 = 대칭의 중심이 중점 · 직선 대칭 = 수직 + 중점이 축 위)을 축으로 삼고, 거기서 ⑴ 점·원·포물선의 상 구하기 ⑵ 미지수 역산 ⑶ 평행이동과의 합성 추적 ⑷ 대칭점을 이용한 최단거리 ⑸ $f(x,\,y)=0$ 의 변수 치환을 도형 변환으로 읽기, 다섯 갈래로 뻗는 배열이다. 그림은 115-274 · 117-282 · 117-283 · 118-286 · 118-288 다섯 문항, 선택지형은 116-276 · 117-283 · 118-286 세 문항이다.

벤더 난이도 신호와 이 파일의 출발점 규약: 「필수」 예제 ★2 · 「특강」 ★3 · STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4. **tag 「확인체크」 문항은 구역 신호를 우선**해 「필수·발전 예제」 구역 안의 확인체크는 바로 위 예제와 같은 출발점(★2)으로 두었다. 출발점에서 M_total·통찰로 ±1 조정했다. 이 단원에서 반복되는 **「대칭 → 수직 + 중점」 두 조건 세우기는 단원이 직접 가르치는 표준 템플릿으로 보아 그 자체를 통찰로 세지 않았고**, 템플릿 밖에서 요구되는 것(꺾인 경로를 대칭으로 펴기 · 변수 치환을 도형 변환으로 번역 · 결과 도형에서 대칭축을 역추적)만 통찰로 라벨링했다. 절댓값·부호에서 갈라진 두 근 중 「양수·사분면」으로 하나를 버리는 단계도 단순 필터로 보아 Mₜ(T-부호·T-범위)에 반영했다. 이 규약을 23문 전체에 일관 적용했다.

이 파일의 주 용도는 숫자 변형·창의 변형의 **원본**이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(통찰 유형·depth) · `variation_notes`(바꿔도 되는 수와 제약 / 골조를 유지한 설정 변형과 ★ 변동 지점)를 채웠다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-CM2-113-e8
  page: 113
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ 점 $(2,-3)$ 을 점 $(-2,1)$ 에 대하여 대칭이동한 점의 좌표 ⑵ 원 $x^2+y^2-10x+24=0$ 을 점 $(3,4)$ 에 대하여 대칭이동한 원의 방정식.
  category: '점에 대한 대칭이동 — 중점 조건으로 상 구하기'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "점에 대한 대칭이동(점·원의 상)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    점대칭은 「대칭의 중심이 두 점의 중점」 한 조건에서 전부 나온다. ⑵는 원을 표준형 $(x-5)^2+y^2=1$ 로 고친 뒤
    중심만 옮기고 반지름은 그대로 둔다. 필수 예제 출발 ★2 · 통찰 0 · M_total 5 이지만, 소문항이 둘이고
    표준형 변환 단계가 붙어 절차형 하한 감점(−1)은 적용하지 않았다.
  tier: star_2
  mechanism_primary: '대칭의 중심 = 중점 → $(x,\,y) \mapsto (2a-x,\,2b-y)$ · 원은 중심만 옮기고 반지름 보존'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $(-6,\,5)$ ⑵ $(x-1)^2+(y-8)^2=1$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/113-e8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '대칭의 중심과 원래 점·원의 좌표를 자유롭게 바꿀 수 있다. 제약: ⑵의 원은 $x^2+y^2+Ax+By+C=0$ 에서 $A,\,B$ 를 짝수로 두어 완전제곱이 정수로 떨어지게 하고, 반지름의 제곱이 양수가 되도록 $C$ 를 맞춘다.'
    creative: '(1) 대칭이동한 점을 주고 대칭의 중심을 묻기(역방향 · ★2 유지) (2) 원 대신 포물선을 주면 꼭짓점 추적 한 단계가 붙어 113-270 골조(★2) (3) 대칭의 중심을 미지수로 두고 결과 도형에 조건(축에 접한다·원점을 지난다)을 걸면 ★3.'
```

```yaml
- id: GN-CM2-113-269
  page: 113
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    점 $(a,3)$ 을 점 $(4,5)$ 에 대하여 대칭이동한 점이 $(-2,b)$ 일 때 $ab$ 의 값.
  category: '점대칭의 중점 조건으로 미지수 두 개 역산'
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "점에 대한 대칭이동에서 미지수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $x$ 좌표와 $y$ 좌표의 중점 식이 서로 독립이라 $a$, $b$ 가 한 줄씩 풀린다. 계산은 가볍고 미지수가 둘이라 $M_a$ 만 2.
    예제 아래 확인체크 → 출발 ★2. 역산 한 단계가 있어 하한 감점은 보류했다.
  tier: star_2
  mechanism_primary: '중점 조건 두 개($x$ 좌표 · $y$ 좌표)로 $a$, $b$ 를 각각 역산 → 곱'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$70$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/113-269.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '대칭의 중심과 두 점의 알려진 좌표를 바꿀 수 있다. 제약: 중점 식이 정수로 떨어지도록 (알려진 좌표 + 미지 좌표)가 중심의 2배가 되게 맞추고, $ab$ 가 한 자리 곱이 되지 않도록 값을 벌려 둔다.'
    creative: '(1) $ab$ 대신 $a+b$ 나 $a-b$ 를 묻기(★2 유지) (2) 미지수를 대칭의 중심 쪽에 두면 113-e8 역방향(★2) (3) 두 점과 중심이 모두 미지수이고 다른 조건(직선 위에 있다)이 붙으면 ★3.'
```

```yaml
- id: GN-CM2-113-270
  page: 113
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    포물선 $y=-x^2+2x+5$ 를 점 $(a,b)$ 에 대하여 대칭이동한 포물선의 꼭짓점이 $(3,6)$ 일 때 $a+b$ 의 값.
  category: '포물선의 점대칭 → 꼭짓점만 추적해 대칭의 중심 역산'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "포물선의 점대칭(꼭짓점 추적)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    완전제곱으로 꼭짓점 $(1,6)$ 을 먼저 얻고, 점대칭이 꼭짓점을 꼭짓점으로 옮긴다는 단원 표준 사실을 써서
    $(2a-1,\ 2b-6)=(3,6)$ 으로 역산한다. 「도형 전체 대신 꼭짓점 하나만 옮긴다」는 이 단원이 직접 가르치는
    절차라 통찰로 세지 않았다. 확인체크 출발 ★2 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: '완전제곱 → 꼭짓점 $(1,\,6)$ → 점대칭은 꼭짓점을 꼭짓점으로 → $(2a-1,\,2b-6)=(3,\,6)$ 역산'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/113-270.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '이차항 계수와 꼭짓점 좌표를 바꿀 수 있다. 제약: $y=px^2+qx+r$ 에서 $q$ 를 $2p$ 의 배수로 두어 꼭짓점이 정수로 떨어지게 하고, 대칭의 중심 $(a,b)$ 도 반정수가 아닌 정수가 되도록 두 꼭짓점의 좌표 합을 짝수로 맞춘다.'
    creative: '(1) 대칭의 중심을 주고 결과 포물선의 방정식을 묻기(★2) (2) 꼭짓점 대신 「$y$ 절편이 같다」 같은 조건으로 바꾸면 식 전체를 옮겨야 해 ★3 (3) 결과 꼭짓점이 특정 사분면에 있을 정수 조건으로 바꾸면 117-284 골조(★3).'
```

```yaml
- id: GN-CM2-113-271
  page: 113
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    원 $(x-3)^2+(y+1)^2=4$ 를 점 $(1,2)$ 에 대하여 대칭이동한 원의 방정식.
  category: '원의 점대칭 — 중심만 옮기고 반지름 보존'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "원의 점대칭(중심 이동·반지름 보존)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    이미 표준형이라 중심 $(3,-1)$ 을 중점 조건으로 한 번 옮기면 끝난다. 반지름은 대칭이동으로 변하지 않는다.
    확인체크 출발 ★2 이지만 통찰 0 · M_total 4 · 실질 1단계 → 하한 감점 −1 을 적용해 ★1.
  tier: star_1
  mechanism_primary: '중심 $(3,\,-1) \mapsto (2\cdot1-3,\ 2\cdot2+1)=(-1,\,5)$ · 반지름 $2$ 그대로'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$(x+1)^2+(y-5)^2=4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/113-271.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '중심·반지름·대칭의 중심을 자유롭게. 제약: 반지름은 정수로 두고, 중심 좌표의 합이 짝수가 되게 해 상의 좌표가 정수로 떨어지게 한다.'
    creative: '(1) 원을 일반형으로 주면 표준형 변환 한 단계가 붙어 ★2(113-e8 ⑵) (2) 대칭이동한 원이 원점을 지나거나 축에 접하도록 대칭의 중심을 역산하면 ★3 (3) 점대칭 대신 직선 대칭으로 바꾸면 114-273 골조(★2).'
```

```yaml
- id: GN-CM2-114-e9
  page: 114
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ 점 $\mathrm{P}(1,4)$ 를 직선 $y=2x-3$ 에 대하여 대칭이동한 점의 좌표 ⑵ 직선 $y=2x-1$ 을 직선 $y=x+3$ 에 대하여 대칭이동한 직선의 방정식.
  category: '직선에 대한 대칭이동 — 수직 조건 + 중점이 축 위'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직선에 대한 대칭이동(점·직선의 상)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴은 「두 점을 이은 선분이 축과 수직」과 「중점이 축 위」 두 식을 연립하면 끝난다. ⑵는 상의 점 $(x,y)$ 의
    원래 점을 역대응으로 쓴 뒤 원래 직선의 식에 대입하는 표준 처리다. 이 두 조건 세우기는 단원이 직접
    가르치는 템플릿이라 통찰로 세지 않았다. 필수 예제 출발 ★2 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: '대칭 조건을 「기울기 곱 $=-1$」과 「중점이 축 위」 두 식으로 옮겨 연립 · 직선은 상의 점의 역대응을 원식에 대입'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $(5,\,2)$ ⑵ $x-2y+10=0$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/114-e9.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '점의 좌표와 두 직선의 기울기·절편을 바꿀 수 있다. 제약: 축의 기울기를 $m$ 이라 할 때 연립의 분모가 $m^2+1$ 이므로 $m=1,\,2,\,\tfrac12$ 처럼 작은 값을 써야 상의 좌표가 유리수로 깔끔하다. 축이 $y=x+k$ 꼴이면 좌표 교환으로 줄어 난도가 내려간다.'
    creative: '(1) 대칭이동한 점을 주고 축을 묻기(114-272 골조 · ★2) (2) 직선 대신 원을 대칭이동(114-273 · ★2) (3) 축을 미지수 $y=ax+b$ 로 두고 상의 도형을 지정하면 역추적이 붙어 ★3(117-285).'
```

```yaml
- id: GN-CM2-114-272
  page: 114
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 점 $\mathrm{P}(-3,4)$, $\mathrm{Q}(1,8)$ 이 직선 $y=ax+b$ 에 대하여 대칭일 때 $a+b$ 의 값.
  category: '두 점이 대칭인 직선 = 선분의 수직이등분선'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 점이 대칭인 직선 구하기(수직이등분선)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $\overline{\mathrm{PQ}}$ 의 기울기 $1$ 에서 $a=-1$, 중점 $(-1,6)$ 을 대입해 $b$ 를 얻는다. 템플릿의 두 조건을
    그대로 쓰되 방향만 반대(축을 구한다)라 통찰로 세지 않았다. 확인체크 출발 ★2 · 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: '$\overline{\mathrm{PQ}}$ 의 기울기 $\to$ 수직조건으로 $a$ · 중점이 축 위 $\to$ $b$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/114-272.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 점의 좌표를 바꿀 수 있다. 제약: 두 점의 기울기가 $\pm1,\,\pm2,\,\pm\tfrac12$ 처럼 역수가 깔끔한 값이어야 $a$ 가 정수·간단한 분수가 되고, 중점이 정수점이 되도록 좌표 합을 짝수로 맞춘다.'
    creative: '(1) 축을 주고 대칭인 점을 묻기(114-e9 ⑴ 방향 · ★2) (2) 두 점 대신 두 원의 중심을 주면 117-285(★3) (3) 「대칭인 두 점 사이의 거리」나 「축과 $x$ 축이 이루는 각」을 추가로 물으면 ★3.'
```

```yaml
- id: GN-CM2-114-273
  page: 114
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    원 $x^2+(y+1)^2=4$ 를 직선 $x-2y+3=0$ 에 대하여 대칭이동한 원의 방정식.
  category: '원의 직선대칭 — 중심의 대칭점 + 반지름 보존'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "원의 직선대칭(중심의 대칭점)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    원의 직선대칭은 중심 $(0,-1)$ 의 대칭점 하나만 구하면 된다. 수직·중점 두 식을 연립해 $(-2,3)$ 을 얻고
    반지름 $2$ 는 그대로 둔다. 연립 계산이 붙어 $M_k$ 2. 확인체크 출발 ★2 · 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: '중심만 직선대칭(수직 + 중점이 축 위 연립) → 반지름 보존해 표준형으로 쓰기'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$(x+2)^2+(y-3)^2=4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/114-273.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '중심·반지름과 축의 계수를 바꿀 수 있다. 제약: 축을 $ax+by+c=0$ 으로 둘 때 $a^2+b^2$ 이 $5,\,10$ 처럼 작아야 연립 결과가 정수로 떨어진다. 축이 원의 중심을 지나면 상이 자기 자신이 되므로 피한다.'
    creative: '(1) 축을 $y=x$ 나 $y=-x$ 로 바꾸면 좌표 교환으로 줄어 ★1~2 (2) 상의 원을 주고 축을 묻기(117-285 · ★3) (3) 대칭이동한 원이 $x$ 축과 만나 생기는 현의 길이를 추가로 물으면 118-287 골조(★3).'
```

### 특강

```yaml
- id: GN-CM2-115-274
  page: 115
  vendor_label: "특강"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $f(x,y)=0$ 이 그림의 삼각형(세 꼭짓점 $(0,0)$, $(0,2)$, $(1,0)$)일 때 ⑴ $f(-x+1,\,y+1)=0$ ⑵ $f(y+1,\,x-1)=0$ 이 나타내는 도형 그리기.
  category: '변수 치환을 대칭이동 + 평행이동의 합성으로 번역'
  M: {s: 2, k: 1, a: 3, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$f$ 의 인수 자리에 들어간 식($-x+1$, $y+1$, 그리고 두 인수의 교환)을 도형의 변환($y$ 축 대칭 · $y=x$ 대칭 · 평행이동)으로 번역해 꼭짓점 세 개의 상을 계산'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "$f(x,y)=0$ 의 변수 치환과 도형의 변환"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $f(\square,\,\triangle)=0$ 에서 $\square=-x+1$, $\triangle=y+1$ 로 두고 원래 점 $(X,Y)$ 와 새 점 $(x,y)$ 의 대응을
    거꾸로 읽어야 한다. ⑵는 두 인수가 바뀌어 $y=x$ 대칭이 섞인다. 함수 $f$ 가 추상이라 $M_a$ 3,
    「$-x+1$ 은 $x \to -x$ 뒤 $+1$ 인가」 순서 혼동(T-부호·T-표기)으로 $M_t$ 2. 특강 출발 ★3 · 통찰 1개 d2 → ★3 유지.
  tier: star_3
  mechanism_primary: '새 점 $(x,\,y)$ 에서 원래 점 $(X,\,Y)$ 를 역대응으로 읽기 → 대칭 + 평행이동 합성 → 꼭짓점 세 개의 상을 찍어 삼각형 그리기'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ 풀이 참조(세 점~$(0,\,-1)$, $(1,\,-1)$, $(1,\,1)$을 꼭짓점으로 하는 삼각형) ⑵ 풀이 참조(세 점~$(1,\,-1)$, $(1,\,0)$, $(3,\,-1)$을 꼭짓점으로 하는 삼각형)'
  answer_source: "답지(그래프)"
  figure: 'crop:fig-115-274.png'
  latex: latex-bank/gn-cm2/items/115-274.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '치환식의 평행이동량($+1$, $-1$)과 원래 도형의 꼭짓점 좌표를 바꿀 수 있다. 제약: 그림의 꼭짓점 좌표는 격자점으로 유지하고, 상의 꼭짓점도 격자점이 되도록 평행이동량을 정수로 둔다. 그림 라벨($O$, $1$, $2$)은 크롭 이미지와 일치해야 하므로 원래 도형을 바꾸면 그림도 다시 만들어야 한다.'
    creative: '(1) $f(-x,\,-y)=0$ 처럼 원점 대칭만 묻기(★2) (2) 도형을 그리는 대신 상의 도형의 넓이·둘레를 묻기(넓이는 대칭·평행이동으로 불변이라 ★2로 내려감) (3) 보기 5개 중 고르는 객관식으로 바꾸면 118-286(★3) (4) 치환을 $f(2x,\,y)=0$ 처럼 닮음으로 확장하면 교육과정 밖.'
```

### 연습문제 STEP 1

```yaml
- id: GN-CM2-116-275
  page: 116
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    점 $(-5,4)$ 의 $x$ 축 대칭점 $\mathrm{P}$ 와 $y$ 축 대칭점 $\mathrm{Q}$ 에 대하여 선분 $\mathrm{PQ}$ 의 길이.
  category: '축 대칭 두 번 + 두 점 사이의 거리'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "축에 대한 대칭이동과 두 점 사이의 거리"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $x$ 축 대칭은 $y$ 의 부호, $y$ 축 대칭은 $x$ 의 부호만 바꾼다. $\mathrm{P}(-5,-4)$, $\mathrm{Q}(5,4)$ 를 거리 공식에 넣으면 끝.
    통찰 0 · M_total 5 이지만 대칭 두 번 + 거리 공식의 3단계라 STEP 1 출발 ★2 를 유지했다(하한 감점 보류).
  tier: star_2
  mechanism_primary: '$x$ 축 대칭 $\to$ $y$ 부호 반전 · $y$ 축 대칭 $\to$ $x$ 부호 반전 → 거리 공식'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2\sqrt{41}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/116-275.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '원래 점의 좌표를 바꿀 수 있다. 제약: $\overline{\mathrm{PQ}}=2\sqrt{a^2+b^2}$ 이므로 $(a,b)$ 를 $(3,4)$, $(5,12)$ 처럼 피타고라스 쌍으로 두면 답이 정수가 되고, 아니면 무리수 꼴로 정리된다.'
    creative: '(1) 세 번째 점(원점 대칭점 $\mathrm{R}$)을 추가해 삼각형 $\mathrm{PQR}$ 의 넓이를 묻기(★2) (2) $x$ 축 대칭 대신 직선 $y=x$ 대칭으로 바꾸면 좌표 교환이 섞여 ★2 (3) 선분 $\mathrm{PQ}$ 의 중점·수직이등분선을 묻는 복합형 ★3.'
```

```yaml
- id: GN-CM2-116-276
  page: 116
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 STEP 1"
  summary: |
    $\mathrm{A}(-3,4)$ 의 직선 $y=x$ 대칭점을 $\mathrm{B}$, $\mathrm{B}$ 를 $(2,k)$ 만큼 평행이동한 점을 $\mathrm{C}$ 라 할 때 세 점이 한 직선 위에 있게 하는 $k$. 5지선다.
  category: '$y=x$ 대칭 + 평행이동 → 세 점이 한 직선 위일 조건(기울기 일치)'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "대칭이동·평행이동한 세 점이 한 직선 위에 있을 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $\mathrm{B}(4,-3)$, $\mathrm{C}(6,k-3)$ 을 구한 뒤 $\overline{\mathrm{AB}}$ 와 $\overline{\mathrm{BC}}$ 의 기울기를 같게 두면 한 줄로 $k$ 가 나온다.
    기출 태그가 있으나 통찰 없이 표준 절차뿐이라 가산하지 않았다. STEP 1 출발 ★2 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: '$y=x$ 대칭 $\to$ 좌표 교환 → 평행이동으로 $\mathrm{C}$ 의 좌표를 $k$ 로 표현 → 기울기 일치식'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/116-276.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$\mathrm{A}$ 의 좌표와 평행이동량을 바꿀 수 있다. 제약: $\overline{\mathrm{AB}}$ 의 기울기는 $y=x$ 대칭 때문에 항상 $-1$ 이므로, $x$ 방향 이동량과 $k$ 의 비가 $-1$ 이 되도록 선택지를 정수로 맞춘다.'
    creative: '(1) 평행이동량을 문자로, $k$ 대신 이동량을 묻기(★2 유지) (2) 「한 직선 위」 대신 「삼각형의 넓이가 $S$」로 바꾸면 절댓값 두 갈래가 생겨 ★3 (3) 대칭축을 $y=-x$ 나 $x$ 축으로 바꾸면 기울기 상수가 달라지는 같은 골조(★2).'
```

```yaml
- id: GN-CM2-116-277
  page: 116
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    직선 $l:x-3y-6=0$ 을 $x$ 축 방향으로 $-2$ 만큼 평행이동한 직선 $m$ 과 $l$ 의 $x$ 축 대칭 직선 $n$, 그리고 $y$ 축으로 둘러싸인 부분의 넓이.
  category: '평행이동·대칭이동한 두 직선과 $y$ 축이 만드는 삼각형의 넓이'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 3
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '두 직선과 $y$ 축으로 둘러싸인 영역을 「밑변 = 두 $y$ 절편의 차, 높이 = 교점의 $x$ 좌표」인 삼각형으로 읽어 넓이 계산으로 옮김(식 세 개 → 기하량)'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "평행·대칭이동한 직선으로 둘러싸인 도형의 넓이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $m:x-3y-4=0$, $n:x+3y-6=0$ 을 먼저 만들고 두 $y$ 절편과 교점을 구한다. 마지막에 영역을 삼각형으로
    읽는 전환이 한 번 필요하지만 그림이 표준형이라 depth 1. 통찰 1개 d1 이라 +1 조건(2개 이상 또는 d3)에
    못 미쳐 STEP 1 출발 ★2 유지. 분수 좌표 때문에 $M_k$ 2.
  tier: star_2
  mechanism_primary: '$x \to x+2$ 로 $m$ · $y \to -y$ 로 $n$ → 두 $y$ 절편과 교점 → 밑변 $\times$ 높이 $\div 2$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{25}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/116-277.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$l$ 의 계수와 평행이동량을 바꿀 수 있다. 제약: $m$ 과 $n$ 의 교점이 $y$ 축 오른쪽(높이 양수)에 있어야 삼각형이 생기고, 두 $y$ 절편이 서로 달라야 한다. 계수를 $1,\,3$ 처럼 두면 절편이 분수로 나오므로 답을 기약분수로 제시한다.'
    creative: '(1) 둘러싸인 영역을 $x$ 축 기준으로 바꾸기(★2 유지) (2) 평행이동량을 미지수로 두고 넓이를 주면 역산 + 절댓값 갈래가 생겨 ★3 (3) 직선 셋(원래 $l$ 까지)으로 둘러싸인 넓이로 확장하면 교점 세 개 계산으로 ★3.'
```

```yaml
- id: GN-CM2-116-278
  page: 116
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    점 $(6,-2)$ 를 $x$ 축 대칭 → $y=x$ 대칭 → $x$ 축 방향 $-3$ 평행이동한 점이 직선 $y=ax+4$ 위에 있을 때 상수 $a$.
  category: '대칭·평행이동의 합성 추적 → 직선 위의 점 조건'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "대칭이동·평행이동의 합성과 직선 위의 점"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $(6,-2) \to (6,2) \to (2,6) \to (-1,6)$ 으로 한 단계씩 따라간 뒤 직선 식에 대입하면 $a$ 가 한 줄로 나온다.
    변환 순서를 뒤집으면 답이 달라지는 함정(T-표기)이 있지만 발문이 순서를 명시해 $M_t$ 1.
    STEP 1 출발 ★2 · 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: '세 변환을 순서대로 좌표에 적용 → 최종 점을 $y=ax+4$ 에 대입해 $a$ 역산'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/116-278.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '출발점 좌표·평행이동량·직선의 절편을 바꿀 수 있다. 제약: 최종 점의 $x$ 좌표가 $0$ 이 되면 $a$ 가 결정되지 않으므로 피하고, $a$ 가 정수로 떨어지도록 (최종 $y$ 좌표 $-$ 절편)이 $x$ 좌표의 배수가 되게 맞춘다.'
    creative: '(1) 변환 순서를 바꿔 같은 세 변환으로 답이 달라짐을 보이기(★2, 순서 함정 강조) (2) 점 대신 직선·원을 넣어 합성 상을 구하기(★3) (3) 마지막 조건을 「제$2$사분면 위의 점」으로 바꾸면 부등식 갈래가 붙어 ★3.'
```

```yaml
- id: GN-CM2-116-279
  page: 116
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $\mathrm{A}(3,1)$, $\mathrm{B}(a,4)$ 와 $y$ 축 위를 움직이는 점 $\mathrm{P}$ 에 대하여 $\overline{\mathrm{AP}}+\overline{\mathrm{BP}}$ 의 최솟값이 $5$ 가 되는 양수 $a$.
  category: '대칭점으로 꺾인 경로를 직선화 → 최솟값 조건 역산'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$y$ 축 위의 점을 거치는 두 선분의 합을, $\mathrm{A}$ 의 $y$ 축 대칭점 $\mathrm{A}^{\prime}$ 을 잡아 $\overline{\mathrm{A}^{\prime}\mathrm{B}}$ 한 선분의 길이로 옮김(기하 최솟값 → 거리 공식)'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "대칭점을 이용한 최단거리(축 위의 점 경유)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $\mathrm{A}^{\prime}(-3,1)$ 을 잡으면 최솟값이 $\overline{\mathrm{A}^{\prime}\mathrm{B}}$ 이고, 거리 $=5$ 에서 $(a+3)^2=16$ 이 나온다.
    두 근 중 양수 조건으로 하나를 버리는 단계는 단순 필터로 보아 $M_t$ 에 넣었다. 경로를 펴는 착안 통찰
    1개(RT d2)뿐이라 +1 조건에 못 미쳐 STEP 1 출발 ★2 유지. [분류 이슈] 최단거리 골조라 ★3 후보.
  tier: star_2
  mechanism_primary: '$\mathrm{A}$ 를 $y$ 축 대칭한 $\mathrm{A}^{\prime}$ → 최솟값 $=\overline{\mathrm{A}^{\prime}\mathrm{B}}$ → 거리 공식 $=5$ 로 $a$ 역산(양수 선택)'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/116-279.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 점의 좌표와 최솟값을 바꿀 수 있다. 제약: 두 점이 $y$ 축의 같은 쪽에 있어야 대칭이 필요하고(반대쪽이면 그냥 선분), $(\Delta x)^2+(\Delta y)^2$ 가 제곱수가 되도록 최솟값을 $5,\,10,\,13$ 처럼 피타고라스 쌍에 맞춘다.'
    creative: '(1) $a$ 를 주고 최솟값을 묻는 정방향(★2, 더 쉬움) (2) 움직이는 점을 $x$ 축이나 직선 $y=x$ 위로 옮기면 대칭 계산이 무거워져 ★3 (3) 움직이는 점을 두 개(두 축 위)로 늘리면 대칭 두 번 → 117-282 골조(★3) (4) 한 점을 원 위의 점으로 바꾸면 117-283(★4).'
```

```yaml
- id: GN-CM2-116-280
  page: 116
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    점 $\mathrm{P}(-1,3)$ 을 직선 $y=2x+1$ 에 대하여 대칭이동한 점 $\mathrm{Q}(a,b)$ 에 대하여 $a+b$ 의 값.
  category: '직선대칭 템플릿(수직 + 중점) 연립'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직선에 대한 대칭이동(점의 상 구하기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    114-e9 ⑴과 같은 템플릿이다. 기울기 곱 $=-1$ 에서 $a+2b=5$, 중점이 축 위에서 $b=2a-3$ 을 얻어 연립한다.
    분수 답이라 $M_k$ 2. STEP 1 출발 ★2 · 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: '수직 조건 + 중점이 축 위 → 두 식 연립 → $a$, $b$ 를 구해 합'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{18}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/116-280.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '점의 좌표와 축의 기울기·절편을 바꿀 수 있다. 제약: 분모가 $m^2+1$ 이므로 $m=2$ 면 $5$, $m=3$ 이면 $10$ 이 분모가 된다. 정수 답을 원하면 축을 $y=x+k$ 꼴로 두어 좌표 교환으로 줄인다.'
    creative: '(1) $a+b$ 대신 $\overline{\mathrm{PQ}}$ 의 길이를 묻기(점과 직선 사이의 거리의 $2$ 배 · ★2) (2) 점 대신 원·직선을 대칭이동(114-273 · 118-289 · ★2~3) (3) 축을 미지수로 두고 $\mathrm{Q}$ 를 주면 114-272 역방향(★2).'
```

### 연습문제 STEP 2

```yaml
- id: GN-CM2-117-281
  page: 117
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    원 $(x-1)^2+(y-a)^2=4$ 를 $(3,-2)$ 만큼 평행이동한 뒤 직선 $y=x$ 에 대하여 대칭이동한 원이 $y$ 축에 접할 때 양수 $a$.
  category: '중심 추적(평행 → $y=x$ 교환) + 축에 접할 조건 역산'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행·대칭이동한 원이 축에 접할 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    중심 $(1,a)$ 를 평행이동해 $(4,a-2)$, $y=x$ 대칭으로 $(a-2,4)$ 까지 끌고 간 뒤 「$y$ 축에 접한다 $\Leftrightarrow$ 중심의
    $x$ 좌표의 절댓값 $=$ 반지름」을 쓴다. 접할 조건은 원 단원의 표준 사실이라 통찰로 세지 않았고,
    절댓값 두 갈래를 양수 조건으로 거르는 단계는 $M_t$(T-부호·T-범위)에 넣었다. STEP 2 출발 ★3 · M_total 8 → ★3 유지.
  tier: star_3
  mechanism_primary: '중심만 평행이동 → $y=x$ 대칭으로 좌표 교환 → $|$중심의 $x$ 좌표$|=2$ → 양수 $a$ 선택'
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/117-281.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '반지름·평행이동량·원래 중심을 바꿀 수 있다. 제약: 절댓값 두 갈래 중 하나만 양수 조건을 통과하도록 평행이동량과 반지름을 잡아야 답이 하나로 정해진다. 반지름은 정수로 두어 접선 조건이 정수식이 되게 한다.'
    creative: '(1) 접하는 축을 $x$ 축으로 바꾸면 교환 뒤 $y$ 좌표를 보게 되는 같은 골조(★3) (2) 「접한다」를 「$x$ 축과 만나는 현의 길이가 $2\sqrt{3}$」으로 바꾸면 118-287 골조(★3) (3) 대칭축을 $y=-x$ 나 일반 직선으로 바꾸면 중심 대칭 계산이 무거워져 ★4 (4) 평행이동량을 미지수로 두면 미지수 둘 연립 → ★4.'
```

```yaml
- id: GN-CM2-117-282
  page: 117
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    $\mathrm{A}(3,1)$ 과 직선 $y=x$ 위의 점 $\mathrm{P}$, $x$ 축 위의 점 $\mathrm{Q}$ 에 대하여 삼각형 $\mathrm{APQ}$ 의 둘레의 길이의 최솟값(세 점은 한 직선 위에 있지 않음).
  category: '두 번의 대칭으로 삼각형 둘레를 한 선분으로 펴기'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$\mathrm{A}$ 를 두 대칭축($y=x$ 와 $x$ 축)에 대하여 각각 대칭시켜 둘레 $\overline{\mathrm{AP}}+\overline{\mathrm{PQ}}+\overline{\mathrm{QA}}$ 를 두 대칭점 사이의 직선 거리로 옮김'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "대칭점을 이용한 최단거리(삼각형 둘레)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $\mathrm{A}^{\prime}(1,3)$($y=x$ 대칭)과 $\mathrm{A}^{\prime\prime}(3,-1)$($x$ 축 대칭)을 잡으면 둘레 $\ge \overline{\mathrm{A}^{\prime}\mathrm{A}^{\prime\prime}}$ 이고
    등호는 두 대칭점을 잇는 선분이 두 축과 만날 때다. 대칭을 두 방향으로 동시에 써야 경로가 펴지므로
    116-279 보다 한 단계 위. 통찰 1개 d2 · STEP 2 출발 ★3 → ★3 유지.
  tier: star_3
  mechanism_primary: '$\mathrm{A}$ 의 $y=x$ 대칭점과 $x$ 축 대칭점 → 둘레의 최솟값 $=$ 두 대칭점 사이의 거리'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$2\sqrt{5}$'
  answer_source: "답지"
  figure: 'crop:fig-117-282.png'
  latex: latex-bank/gn-cm2/items/117-282.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$\mathrm{A}$ 의 좌표를 바꿀 수 있다. 제약: $\mathrm{A}$ 가 두 축 사이의 영역(제$1$사분면의 $y<x$ 쪽)에 있어야 두 대칭점이 서로 반대편에 놓여 선분이 두 축을 실제로 지난다. 두 대칭점의 좌표차가 피타고라스 쌍이면 답이 정수가 된다.'
    creative: '(1) 대칭축을 $y=x$ 와 $y$ 축으로 바꾸기(★3 유지) (2) 둘레 대신 $\overline{\mathrm{AP}}+\overline{\mathrm{PQ}}$ 만 묻기(대칭 한 번 · ★2) (3) 움직이는 점이 원 위에 있으면 117-283 처럼 반지름 보정이 붙어 ★4 (4) 최솟값이 되는 $\mathrm{P}$, $\mathrm{Q}$ 의 좌표까지 묻기 → 직선과 축의 교점 계산이 붙어 ★4.'
```

```yaml
- id: GN-CM2-117-283
  page: 117
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 STEP 2"
  summary: |
    원 $(x-6)^2+(y+3)^2=4$ 위의 점 $\mathrm{P}$, $x$ 축 위의 점 $\mathrm{Q}$, $\mathrm{A}(0,-5)$ 에 대하여 $\overline{\mathrm{AQ}}+\overline{\mathrm{QP}}$ 의 최솟값. 5지선다.
  category: '대칭으로 경로 펴기 + 원 위의 점까지의 최소(중심거리 $-$ 반지름)'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$\mathrm{A}$ 의 $x$ 축 대칭점 $\mathrm{A}^{\prime}$ 을 잡아 $x$ 축에서 꺾인 경로 $\overline{\mathrm{AQ}}+\overline{\mathrm{QP}}$ 를 $\overline{\mathrm{A}^{\prime}\mathrm{P}}$ 한 선분으로 옮김'
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '원 위를 움직이는 $\mathrm{P}$ 까지의 최소 거리를 「중심까지의 거리 $-$ 반지름」으로 바꿔 씀'
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "대칭점을 이용한 최단거리(원 위의 점 포함)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    $\mathrm{A}^{\prime}(0,5)$ 로 경로를 편 뒤, 원 위의 점까지의 최소를 중심거리 $10$ 에서 반지름 $2$ 를 빼 $8$ 로 마무리한다.
    최소화가 두 겹(대칭 + 원)이라 통찰 2개(RT d2 · EQV d1) → STEP 2 출발 ★3 에서 +1. ★4 저노출 게이트는
    I-RT 로 충족한다. 계산 자체는 가벼워 M_total 6.
  tier: star_4
  mechanism_primary: '$\mathrm{A}$ 를 $x$ 축 대칭 → $\overline{\mathrm{A}^{\prime}\mathrm{P}}$ 최소 → (중심까지 거리) $-$ (반지름)'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "①"
  answer_source: "답지"
  figure: 'crop:fig-117-283.png'
  latex: latex-bank/gn-cm2/items/117-283.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$\mathrm{A}$ 의 좌표, 원의 중심·반지름을 바꿀 수 있다. 제약: 대칭점과 원의 중심 사이 거리가 $10,\,13,\,15$ 처럼 피타고라스 쌍이어야 답이 정수가 되고, 그 거리가 반지름보다 충분히 커야(원이 $x$ 축 아래에 통째로 있어야) 경로가 실제로 $x$ 축에서 꺾인다.'
    creative: '(1) 최솟값 대신 최댓값(중심거리 $+$ 반지름)을 묻기(★4 유지, T-부호 강조) (2) $\mathrm{Q}$ 를 직선 $y=x$ 위로 옮기면 대칭 계산이 무거워져 ★4 (3) 원을 빼고 정점 두 개로 하면 116-279(★2) (4) $x$ 축과 $y$ 축을 모두 거치게 하면 대칭 두 번 + 원 → ★5 후보.'
```

```yaml
- id: GN-CM2-117-284
  page: 117
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    포물선 $y=3x^2+12x+8$ 을 점 $(a,-a)$ 에 대하여 대칭이동한 포물선의 꼭짓점이 제$1$사분면에 있도록 하는 정수 $a$ 의 개수.
  category: '꼭짓점 추적 → 사분면 조건 부등식 → 정수 개수'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "포물선의 점대칭과 꼭짓점의 사분면 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    완전제곱으로 꼭짓점 $(-2,-4)$ 를 얻고 대칭의 중심이 $(a,-a)$ 이므로 상의 꼭짓점은 $(2a+2,\,-2a+4)$ 가 된다.
    제$1$사분면 조건은 두 좌표가 모두 양수인 연립부등식이고, 경계 제외(T-경계)와 정수 세기(T-범위)가 함정이다.
    부등식을 세우는 것까지 단원 표준 절차라 통찰 0. STEP 2 출발 ★3 · M_total 8 → ★3 유지.
  tier: star_3
  mechanism_primary: '꼭짓점 $(-2,\,-4)$ → 점대칭 상 $(2a+2,\,-2a+4)$ → 두 좌표 $>0$ 연립 → 범위 안 정수 개수'
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/117-284.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '포물선의 계수와 대칭 중심의 매개형($(a,-a)$, $(a,2a)$ 등)을 바꿀 수 있다. 제약: 꼭짓점이 정수점이 되도록 일차항 계수를 이차항 계수의 짝수배로 두고, 연립부등식의 해가 정수 $2$~$4$ 개만 들어가는 좁은 구간이 되게 계수를 맞춘다. 경계가 정수와 겹치면 개수가 흔들리므로 피한다.'
    creative: '(1) 사분면을 제$2$·제$4$ 로 바꾸기(부등호 방향만 달라짐 · ★3) (2) 정수 개수 대신 $a$ 의 범위를 묻기(★2~3) (3) 대칭 중심을 직선 $y=-x$ 위의 점으로 서술해 매개변수를 감추면 $M_a$ 상승 ★4 (4) 꼭짓점 대신 「포물선이 원점을 지난다」로 바꾸면 식 전체 대입 ★3.'
```

```yaml
- id: GN-CM2-117-285
  page: 117
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    원 $x^2+y^2-4x-8y=0$ 을 직선 $y=ax+b$ 에 대하여 대칭이동한 결과가 원 $x^2+y^2=c$ 일 때 $abc$ 의 값.
  category: '상의 원을 주고 대칭축을 역추적(두 중심의 수직이등분선)'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '「어떤 직선에 대하여 대칭이동했더니 이 원이 되었다」는 결과 조건에서 축이 두 중심을 잇는 선분의 수직이등분선이어야 함을 역추적'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "두 원이 대칭인 직선(수직이등분선) 역추적"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 원을 표준형으로 고쳐 중심 $(2,4)$ 와 $(0,0)$ 을 얻는다. 대칭이동은 반지름을 보존하므로 $c$ 는 곧바로 나오고,
    축은 두 중심을 잇는 선분의 수직이등분선이다. 「축을 모르는 채 결과만 주어졌다」는 역방향 착안이 핵심이라
    I-BW d2 를 세었다. STEP 2 출발 ★3 · 통찰 1개 → ★3 유지.
  tier: star_3
  mechanism_primary: '두 원을 표준형으로 → 반지름 보존으로 $c$ → 두 중심의 수직이등분선에서 $a$, $b$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-25$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/117-285.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '원래 원의 일차항 계수(중심)를 바꿀 수 있다. 제약: 두 중심의 기울기가 $\pm1,\,\pm2$ 처럼 역수가 깔끔해야 $a$ 가 간단한 분수로 나오고, 중점이 격자점·반정수 중 하나로 정리되도록 좌표를 맞춘다. 상의 원을 원점 중심으로 두면 계산이 가장 짧다.'
    creative: '(1) 상의 원을 원점이 아닌 다른 중심으로 두기(★3 유지, 계산만 증가) (2) 축을 주고 상의 원을 구하는 정방향은 114-273(★2) (3) 「$c$ 의 값」만 묻고 반지름 보존을 묻는 개념형으로 줄이면 ★2 (4) 원 대신 포물선을 대칭이동해 축을 역추적하면 꼭짓점 + 개형 보존까지 따져 ★4.'
```

```yaml
- id: GN-CM2-118-286
  page: 118
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    $f(x,y)=0$ 이 그림의 도형(중심 $(1,0)$, 반지름 $1$ 의 왼쪽 반원호와 선분 $x=1$)일 때 $f(y,\,x-1)=0$ 이 나타내는 도형을 보기 다섯 중 고르기.
  category: '두 인수 교환 + 평행이동을 $y=x$ 대칭 후 이동으로 번역'
  M: {s: 2, k: 1, a: 3, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$f$ 의 첫째 인수에 $y$, 둘째 인수에 $x-1$ 이 들어간 것을 「$y=x$ 에 대한 대칭 뒤 $x$ 축 방향으로 $1$ 만큼 평행이동」이라는 도형 변환으로 번역'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "$f(x,y)=0$ 의 변수 치환과 도형의 변환(보기 고르기)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    원래 점 $(X,Y)$ 와 새 점 $(x,y)$ 사이의 대응이 $X=y$, $Y=x-1$ 이므로 $(X,Y) \mapsto (Y+1,\,X)$, 곧 $y=x$ 대칭 뒤
    $x$ 방향 $+1$ 이다. 선분이 $x=1$ 에서 $y=1$ 로 눕고 반원호가 아래로 볼록해지는지로 보기를 가른다.
    변환의 순서와 부호가 함정(T-표기·T-부호)이라 $M_t$ 2, 함수 $f$ 추상으로 $M_a$ 3. STEP 2 출발 ★3 · 통찰 1개 d2 → ★3 유지.
  tier: star_3
  mechanism_primary: '$X=y$, $Y=x-1$ 역대응 → $y=x$ 대칭 후 $x$ 방향 $+1$ → 호의 볼록 방향과 선분의 위치로 보기 판별'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "④"
  answer_source: "답지"
  figure: 'crop:fig-118-286-4.png'
  latex: latex-bank/gn-cm2/items/118-286.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '평행이동량 $1$ 과 원래 도형의 반지름·중심을 바꿀 수 있다. 제약: 보기 다섯 개가 모두 이미지이므로 숫자를 바꾸면 그림 파일(fig-118-286 계열 여섯 장)을 다시 만들어야 한다. 격자 라벨이 $\pm1$ 뿐이라 좌표는 작은 정수로 유지한다.'
    creative: '(1) 보기 없이 직접 그리게 하면 115-274(★3) (2) $f(-y,\,x)=0$ 처럼 부호를 섞으면 회전처럼 보이는 합성이라 ★4 (3) 원래 도형을 비대칭 도형(직각삼각형)으로 바꾸면 오답 보기 설계가 쉬워지고 난도는 ★3 유지 (4) 「$f(x,y)=0$ 과 $f(y,x)=0$ 의 교점 개수」를 묻는 변형은 $y=x$ 위의 점 판정이 붙어 ★4.'
```

### 연습문제 실력 UP

```yaml
- id: GN-CM2-118-287
  page: 118
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    원 $x^2+y^2-2x-3=0$ 을 원점 대칭한 뒤 직선 $y=x$ 에 대하여 대칭이동한 원이 $x$ 축에 의해 잘린 현의 길이.
  category: '대칭이동 두 번의 중심 추적 + 현의 길이'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "대칭이동한 원이 축에서 잘리는 현의 길이"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    표준형 $(x-1)^2+y^2=4$ → 원점 대칭 $(-1,0)$ → $y=x$ 대칭 $(0,-1)$ 로 중심만 따라가고 반지름은 $2$ 로 고정된다.
    현은 $y=0$ 을 대입해 $x=\pm\sqrt{3}$ 으로 얻거나 (반지름, 중심거리)의 직각삼각형으로 얻는다.
    실력 UP 출발 ★4 이지만 통찰 0 · 표준 절차 3단이라 −1 해 ★3. [분류 이슈] 구역 신호와 1단 차이.
  tier: star_3
  mechanism_primary: '표준형 → 원점 대칭(부호 반전) → $y=x$ 대칭(좌표 교환) → $y=0$ 대입해 현의 길이'
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$2\sqrt{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/118-287.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '원의 일차항 계수와 상수항(중심·반지름)을 바꿀 수 있다. 제약: 최종 중심과 $x$ 축 사이 거리가 반지름보다 작아야 현이 생기고, (반지름$^2$ $-$ 중심거리$^2$)가 제곱수이거나 $3$ 처럼 간단한 무리수가 되도록 값을 맞춘다.'
    creative: '(1) 잘리는 축을 $y$ 축이나 직선 $y=x$ 로 바꾸기(★3 유지) (2) 현의 길이를 주고 원래 원의 상수항을 역산하면 ★4 (3) 대칭 두 번을 「원점 대칭 = $x$ 축 대칭 + $y$ 축 대칭」으로 쪼개 순서를 묻는 개념형 ★2 (4) 잘린 활꼴의 넓이까지 물으면 교육과정 밖.'
```

```yaml
- id: GN-CM2-118-288
  page: 118
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    가로 $5$, 세로 $6$ 인 직사각형 $\mathrm{ABCD}$ 에서 $\overline{\mathrm{BP}}=1$($\mathrm{P}$ 는 $\overline{\mathrm{BC}}$ 위), $\overline{\mathrm{DQ}}=1$($\mathrm{Q}$ 는 $\overline{\mathrm{AD}}$ 위)일 때, $\overline{\mathrm{AB}}$ 위의 $\mathrm{X}$ 와 $\overline{\mathrm{CD}}$ 위의 $\mathrm{Y}$ 에 대하여 $\overline{\mathrm{PX}}+\overline{\mathrm{XY}}+\overline{\mathrm{YQ}}$ 의 최솟값.
  category: '직사각형을 좌표화 → 두 변에 대한 대칭으로 꺾인 경로 직선화'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '길이만 주어진 직사각형 그림을 좌표평면에 얹어 두 변 $\overline{\mathrm{AB}}$, $\overline{\mathrm{CD}}$ 를 대칭축(두 세로선)으로 다루는 문제로 옮김'
    - step: 2
      type: I-SYM
      depth: 3
      effective_depth: 3
      signal_ref: []
      description: '$\mathrm{P}$ 를 $\overline{\mathrm{AB}}$ 에, $\mathrm{Q}$ 를 $\overline{\mathrm{CD}}$ 에 대칭시켜 두 번 꺾인 세 선분의 합을 두 대칭점 사이의 한 선분으로 펴는 대칭 활용'
  insight_count: 2
  depth_score: 5.00
  type_id: null
  type_hint: "대칭점을 이용한 최단거리(직사각형 두 변 경유)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    좌표를 $\mathrm{B}(0,0)$, $\mathrm{C}(5,0)$ 로 잡으면 $\mathrm{P}(1,0)$, $\mathrm{Q}(4,6)$ 이고, $\mathrm{P}$ 를 $x=0$ 에, $\mathrm{Q}$ 를 $x=5$ 에 대칭시켜
    $\mathrm{P}^{\prime}(-1,0)$, $\mathrm{Q}^{\prime}(6,6)$ 을 얻으면 최솟값이 두 점 사이의 거리다. 꺾인 곳이 두 군데라 대칭을 양쪽에
    동시에 걸어야 하고(SYM d3), 좌표 도입까지 학생 몫이다. 통찰 2개 · d3 포함 → 실력 UP 출발 ★4 유지.
  tier: star_4
  mechanism_primary: '직사각형 좌표화 → $\mathrm{P}$ 를 $\overline{\mathrm{AB}}$ 에, $\mathrm{Q}$ 를 $\overline{\mathrm{CD}}$ 에 대칭 → 최솟값 $=\overline{\mathrm{P}^{\prime}\mathrm{Q}^{\prime}}$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\sqrt{85}$'
  answer_source: "답지"
  figure: 'crop:fig-118-288.png'
  latex: latex-bank/gn-cm2/items/118-288.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '가로·세로와 $\overline{\mathrm{BP}}$, $\overline{\mathrm{DQ}}$ 를 바꿀 수 있다. 제약: 대칭 후 가로 거리는 (가로 $+$ $\overline{\mathrm{BP}}$ $+$ $\overline{\mathrm{DQ}}$)가 되므로 이것과 세로가 피타고라스 쌍($7,\,24$ / $8,\,15$)이면 답이 정수가 된다. 그림의 라벨($5$, $6$, $1$)은 크롭 이미지와 묶여 있어 수를 바꾸면 그림도 갱신해야 한다.'
    creative: '(1) 꺾이는 변을 한 곳으로 줄이면 116-279 골조(★2) (2) 경로가 네 변을 모두 거치게 하면 대칭 네 번 → ★5 후보(초저노출 SYM 유지) (3) 직사각형 대신 평행사변형·사다리꼴로 바꾸면 좌표화 부담이 커져 ★4~5 (4) 최솟값을 주고 $\overline{\mathrm{BP}}$ 를 역산하면 ★4.'
```

```yaml
- id: GN-CM2-118-289
  page: 118
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    직선 $3x+y-3=0$ 을 직선 $x-y-8=0$ 에 대하여 대칭이동한 직선 $l$ 과 점 $(1,2)$ 사이의 거리.
  category: '직선의 직선대칭(역대응 대입) + 점과 직선 사이의 거리'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직선에 대한 대칭이동(직선의 상)과 점과 직선 사이의 거리"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    대칭축이 $y=x-8$ 이라 $(x,y)$ 의 원래 점이 $(y+8,\,x-8)$ 로 깔끔하게 역대응된다. 이를 원래 직선 식에 대입해
    $l:x+3y+13=0$ 을 얻고 거리 공식으로 마무리한다. 축의 기울기가 $1$ 이라 일반 연립 없이 교환꼴로 줄어들어
    실력 UP 치고 가볍다. 통찰 0 · M_total 6 → 출발 ★4 에서 −1 해 ★3. [분류 이슈] 구역 신호와 1단 차이.
  tier: star_3
  mechanism_primary: '축 $y=x-8$ 의 역대응 $(x,\,y) \to (y+8,\,x-8)$ 을 원식에 대입 → $l$ → 점과 직선 사이의 거리'
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$2\sqrt{10}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/118-289.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '원래 직선의 계수와 축의 절편, 그리고 점의 좌표를 바꿀 수 있다. 제약: 축을 $y=x+k$ 꼴로 유지하면 역대응이 좌표 교환 + 평행이동으로 끝나 답이 깔끔하다. 거리의 분모가 $\sqrt{10}$ 이므로 분자가 $10$ 의 배수면 답이 $\sqrt{10}$ 의 정수배가 된다.'
    creative: '(1) 축을 기울기 $1$ 이 아닌 직선($y=2x+1$)으로 바꾸면 일반 연립이 필요해 ★4 (2) 거리 대신 두 직선의 교점이나 이루는 각을 묻기(★3) (3) 원래 직선을 원으로 바꾸면 114-273 + 거리 복합(★3) (4) 대칭이동한 직선이 특정 점을 지나도록 축의 절편을 역산하면 ★4.'
```

## 표본 판정 요약 (23문)

- ★ 분포: ★1 1 · ★2 12 · ★3 8 · ★4 2 · ★5 0
- 통찰형 8 · 절차형 15 · premium 0
- 통찰 유형 분포: I-RT 7(115-274 · 116-277 · 116-279 · 117-282 · 117-283 · 118-286 · 118-288) · I-EQV 1(117-283) · I-BW 1(117-285) · I-SYM 1(118-288) — 총 라벨 10개, depth 3 은 118-288 하나
- type_hint 상위: 「대칭점을 이용한 최단거리」 4(116-279 · 117-282 · 117-283 · 118-288) · 「직선에 대한 대칭이동(수직 + 중점 템플릿)」 3(114-e9 · 116-280 · 118-289) · 「점대칭 기본(점·원·미지수)」 3(113-e8 · 113-269 · 113-271) · 「$f(x,y)=0$ 의 변수 치환과 도형 변환」 2(115-274 · 118-286) · 「포물선의 점대칭(꼭짓점 추적)」 2(113-270 · 117-284) · 「수직이등분선 역추적」 2(114-272 · 117-285) · 「대칭·평행이동의 합성 추적」 2(116-276 · 116-278)
- 대상층: 하위권 1 · 중하위권 10 · 중위권 6 · 중상위권 6
- 그림: 5문(`crop:fig-115-274.png` · `crop:fig-117-282.png` · `crop:fig-117-283.png` · `crop:fig-118-286-4.png` · `crop:fig-118-288.png`) · 선택지형 3문(116-276 · 117-283 · 118-286)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CM2-116-279 | STEP 1(출발 ★2)이지만 대칭점으로 경로를 펴는 최단거리 골조 + M_total 7. 통찰이 1개 d2 뿐이라 +1 규칙에 못 미쳐 ★2 로 두었으나 학생 체감은 ★3 쪽 | ★2 / ★3 |
| GN-CM2-117-283 | STEP 2(출발 ★3)에 교육청 기출. 최소화가 두 겹(대칭 + 원)이라 +1 해 ★4 로 올림 — 계산량은 ★3 수준이라 라벨이 통찰 쪽에만 기대고 있음 | ★3 / ★4 |
| GN-CM2-118-287 | 실력 UP(출발 ★4)이나 대칭 두 번 + 현의 길이의 표준 절차뿐(통찰 0) → ★3 으로 내림 | ★3 / ★4 |
| GN-CM2-118-289 | 실력 UP(출발 ★4)이나 대칭축의 기울기가 $1$ 이라 좌표 교환으로 줄어듦(통찰 0) → ★3 으로 내림. 축이 일반 기울기였다면 ★4 유지 | ★3 / ★4 |
| GN-CM2-113-e8 · 113-269 | 통찰 0 · M_total 5 로 절차형 하한 감점(−1) 대상이지만, 소문항 둘·미지수 역산을 이유로 ★2 를 유지함(113-271 에는 감점을 적용해 ★1) — 같은 M_total 에 라벨이 갈리는 지점 | ★1 / ★2 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: ⑴ 「대칭점을 이용한 최단거리」는 이 단원 통찰형의 절반(4문)이고 난도가 ★2~4 로 넓게 퍼지므로, 경유하는 축의 개수(1개 / 2개)와 끝점이 정점인지 원 위의 점인지로 **최소 세 유형**(축 1개 · 축 2개 · 원 포함)으로 쪼개는 것이 맞다. ⑵ 「$f(x,y)=0$ 의 변수 치환 → 도형 변환」(115-274 · 118-286)은 함수 추상도($M_a$ 3)가 단원 내 유일하게 높아 독립 유형이 필요하다.
- **통합해도 될 유형**: ⑴ 점대칭 계열(113-e8 · 113-269 · 113-270 · 113-271 · 117-284)은 대상 도형(점·원·포물선)만 다르고 골조가 「중심 = 중점」 하나이므로 한 유형 + 도형별 변형으로 묶어도 된다. ⑵ 「직선대칭 템플릿」(114-e9 · 116-280 · 114-273 · 118-289)과 「수직이등분선 역추적」(114-272 · 117-285)은 같은 두 조건의 정방향·역방향이므로 한 유형의 두 방향으로 두는 편이 변형 설계에 유리하다.
- **★ 산식 재산정 시 주의**: 실력 UP 두 문항(118-287 · 118-289)이 절차형이라 구역 신호(★4)와 판정(★3)이 갈린다. 카탈로그 base_star 를 구역이 아니라 **골조 기준**으로 잡아야 이 단원의 ★4 가 118-288 · 117-283 같은 통찰형에만 남는다.
