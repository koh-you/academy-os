---
name: mechanism-데이터-GN-PROB-16
description: 개념원리 확률과 통계 16 정규분포(1/1 · 152~160쪽) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 확률과 통계 · 전사본 latex-bank/gn-prob
  section: 16 정규분포
  unit_code: GN-PROB-16
  part: "1/1"
  extract_range: "152~160쪽 · 152-330~160-357"
  total_problems: 33
  unit_total: 33
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·level·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-prob/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-prob/items/<id>.tex
  image_source: latex-bank/gn-prob/figures/ (crops.json · 이 범위 14문항에 figure 있음)
---

# 개념원리 확률과 통계 · 16 정규분포 (1/1) 정독 데이터 (v1.0)

이 파일은 152~160쪽 · 33문항(개념원리 익히기 4 · 필수 예제와 확인체크 17 · 연습문제 STEP 1 6 · STEP 2 5 · 실력 UP 1) 전수를 다룬다. 개념원리 고등은 구역·level·태그가 난이도 층이라 통번호 「개념원리 익히기」는 개념 확인(★1 출발), 「필수 예제」와 그 뒤를 따르는 「확인체크」는 ★2 출발, 「연습문제 STEP 1」 ★2 · 「STEP 2」 ★3 · 「실력 UP」 ★4 출발로 잡고 M_total·통찰로 ±1 조정했다. ±1 은 「통찰 0 이고 M_total ≤ 5 → −1 후보」, 「통찰 2개 이상 또는 depth 3 → +1 후보」만 적용했고, 후보였더라도 벤더 신호가 뚜렷하면 출발점을 유지한 뒤 근거를 rationale 에 남겼다.

단원 골조는 네 겹으로만 늘어난다. ⑴ 정규분포곡선의 대칭성·모양과 모수(m·σ)의 대응(152 · 153 구역), ⑵ 표준화 Z=(X−m)/σ 로 옮긴 뒤 표가 주는 P(0≤Z≤z) 꼴로 구간을 재조립해 확률을 읽는 단계(154 구역), ⑶ 같은 다리를 거꾸로 건너 확률에서 미지수 k·m 을 역조회하는 단계(155 구역), ⑷ 실생활 조건(인원·비율·시각·점수)을 확률변수의 부등식으로 옮긴 활용 단계(156 · 157 구역과 연습문제). 이 단원에서 반복되는 착안은 거의 전부 **조건을 표가 읽을 수 있는 꼴로 옮기는 동치 변환(I-EQV)** 이라, 통찰 라벨 24개 중 18개가 I-EQV 다. 그 판정 경계(어디까지가 표준 절차이고 어디부터가 착안인지)는 파일 끝 「분류 이슈 목록」과 「카탈로그 차원 메모」에 남겼다.

이 범위의 그림 14개 중 11개는 문항마다 옆에 붙는 표준정규분포표이고, 실제 자료를 담은 그림은 3개(`158-346` 두 곡선 · `159-352` 세 곡선 · `160-356` 세 과목 평균·표준편차 표)뿐이다. 표준정규분포표는 골조를 바꾸지 않으므로 변형 시에도 사용하는 z 값이 표에 있는지만 맞추면 된다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다. 이 단원의 숫자 변형 제약은 거의 하나로 모인다. **(경계값 − m)/σ 가 표에 실린 z 값(0.5·0.84·1·1.28·1.5·1.6·2·3 등)으로 떨어져야 한다**는 것이며, 인원·자루·캔처럼 개수를 묻는 문항은 그 위에 「확률 × 전체 수가 정수로 떨어질 것」이 더 붙는다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-PROB-152-330
  page: 152
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑵ 확률변수 X 의 평균과 분산이 주어졌을 때 X 가 따르는 정규분포를 N(m, σ²) 꼴로 나타내기.
  category: "E(X)=m · V(X)=σ² 대응 → N(m, σ²) 표기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평균·분산에서 정규분포 N(m, σ²) 표기하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    V(X) 가 σ² 이라는 표기 규약만 확인하면 9=3², 16=4² 로 끝난다. 기호 대응 한 단계·통찰 없음·M_total 4 → 개념원리 익히기 ★1 유지.
  tier: star_1
  mechanism_primary: "E(X)=m, V(X)=σ² → 분산을 제곱꼴로 고쳐 N(m, σ²) 로 표기"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\mathrm{N}(5,\,3^2)$ ⑵ $\mathrm{N}(12,\,4^2)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/152-330.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "평균은 아무 수나 되고 분산은 완전제곱수(4·25·36·49)로 고른다. 제약: 분산이 제곱수가 아니면 σ 가 무리수가 되어 표기 연습이라는 목적이 흐려진다. 표준편차를 주고 분산을 묻는 역방향도 같은 난이도."
    creative: "(1) E(X)·E(X²) 을 주고 V(X)=E(X²)−{E(X)}² 를 거치게 하면 ★2 (2) V(2X+1)=36 처럼 일차변환된 분산을 주면 V(aX+b)=a²V(X) 한 단계가 더 붙어 ★2 (3) N(m, σ²) 을 주고 E(3X−1)·V(3X−1) 을 묻는 역방향(★2)."
```

```yaml
- id: GN-PROB-152-331
  page: 152
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑵ 정규분포 N(m, σ²) 의 확률밀도함수 그래프에서 σ 가 커질 때 곡선의 높이, m 이 달라질 때 대칭축의 위치가 어떻게 되는지 괄호에서 고르기.
  category: "σ ↔ 곡선의 퍼짐·높이, m ↔ 대칭축 위치 대응 확인"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정규분포 곡선의 성질(m·σ 와 곡선 모양의 대응)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    넓이가 항상 1 이므로 σ 가 커지면 퍼지고 낮아진다, m 은 대칭축을 좌우로 옮긴다 — 두 성질을 그대로 읽는다. 모수가 문자라 Mₐ 2 지만 계산·분기가 없다. 개념원리 익히기 ★1 유지.
  tier: star_1
  mechanism_primary: "전체 넓이 1 고정 → σ 커짐이면 퍼지고 낮아짐 · m 변화면 대칭축 평행이동"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "⑴ 낮아진다 ⑵ 변한다"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/152-331.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "바꿀 수치가 없는 성질 확인형. 구체 수치판으로 만들려면 N(10, 2²) 과 N(10, 4²) 처럼 두 분포를 세워 높이·폭을 비교시킨다."
    creative: "(1) 괄호 고르기를 참·거짓 보기(ㄱㄴㄷ)로 바꾸면 ★2 (2) 두 곡선을 그림으로 주고 m·σ 대소를 묻는 형태(★2 · 158-346 과 같은 골조) (3) 「σ 가 커지면 P(m−σ≤X≤m+σ) 는 어떻게 되는가」로 물으면 표준화 불변성을 건드려 ★3."
```

```yaml
- id: GN-PROB-152-332
  page: 152
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ 표준정규분포를 따르는 Z 에 대해 표준정규분포표를 이용해 P(1≤Z≤2), P(Z≥2), P(Z≤0.5), P(−1≤Z≤1.5) 구하기.
  category: "표가 주는 P(0≤Z≤z) 꼴로 구간 분해 → 대칭성으로 음수쪽 옮기기 → 가감"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "표준정규분포표로 확률 구하기(구간 분해와 대칭성)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    표는 P(0≤Z≤z) 만 주므로 ⑴ 빼기, ⑵ 0.5 빼기, ⑶ 0.5 더하기, ⑷ 대칭으로 좌우를 더하기 — 네 가지 기본 조립을 한 번씩 연습시키는 배치다. 착안이 아니라 이 단원의 규약 학습이라 통찰로 세지 않았다. 개념원리 익히기 ★1 유지.
  tier: star_1
  mechanism_primary: "구간을 0 기준으로 쪼개고 음수 구간은 대칭으로 양수쪽에 옮김 → 표값 가감"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "⑴ $0.1359$ ⑵ $0.0228$ ⑶ $0.6915$ ⑷ $0.7745$"
  answer_source: "답지"
  figure: "crop:fig-152-332.png"
  latex: latex-bank/gn-prob/items/152-332.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "z 값은 옆에 붙은 표에 실린 값(0.5·1·1.5·2·2.5·3)만 쓴다. 제약: 표에 없는 z 를 쓰면 답이 나오지 않으므로 표 범위를 먼저 확인하고, 네 소문항이 네 가지 조립 유형(사이·오른꼬리·왼쪽 누적·좌우 걸침)을 하나씩 맡도록 배치를 유지한다."
    creative: "(1) P(|Z|≤1.5) 처럼 절댓값으로 주면 구간 변환 한 단계 추가(★2) (2) P(Z≥a)=0.0228 을 만족하는 a 를 묻는 역방향(★2) (3) P(−1≤Z≤1)·P(−2≤Z≤2) 를 계산해 σ 구간 규칙을 스스로 만들게 하면 ★2~3."
```

```yaml
- id: GN-PROB-152-333
  page: 152
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑵ N(8, 2²), N(20, 25) 를 따르는 X 를 표준정규분포를 따르는 Z 로 표준화하기.
  category: "Z=(X−m)/σ 대입 → 분산 25 는 σ=5 로 고쳐 쓰기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정규분포를 따르는 확률변수의 표준화 식 쓰기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    공식 한 줄 대입이고, ⑵ 에서 25 가 σ² 이라 σ=5 라는 것만 놓치지 않으면 된다(표기 함정 하나). 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "표준화 공식 Z=(X−m)/σ 에 m·σ 대입(분산꼴이면 먼저 제곱근)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $Z=\dfrac{X-8}{2}$ ⑵ $Z=\dfrac{X-20}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/152-333.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "m 은 자유, σ² 는 완전제곱수. 제약: 한 소문항은 σ² 를 제곱꼴(2²)로, 다른 하나는 수(25)로 주어 두 표기를 모두 다루게 하는 대비 구조를 유지한다."
    creative: "(1) 표준화식을 주고 원래의 정규분포를 되묻는 역방향(★1) (2) X=σZ+m 꼴로 되돌리는 변환을 묻기(★2) (3) 두 분포 X, Y 를 같은 Z 로 옮겨 원점수 비교로 잇기(★2~3 · 160-356 골조)."
```

### 필수·발전 예제

```yaml
- id: GN-PROB-153-e16
  page: 153
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    N(m, σ²) 를 따르는 X 가 ㈎ P(X≤6)=P(X≥16), ㈏ V(X/9)=1 을 만족시킬 때 m+σ 의 값.
  category: "대칭 조건 → m · 분산의 일차변환 성질 → σ · 합"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "양쪽 꼬리 확률이 같다는 조건을 「6 과 16 이 대칭축에 대해 대칭」으로 옮겨 m=(6+16)/2 로 읽음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "정규분포곡선의 대칭성으로 m 구하고 분산 성질로 σ 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ㈎ 는 확률을 계산하는 조건이 아니라 위치를 정하는 조건이라는 것을 읽어야 m=11 이 나온다(I-EQV d1). ㈏ 는 V(aX)=a²V(X) 표준 공식이라 통찰로 세지 않았다. 통찰 1개 d1 이라 +1 조건에 못 미쳐 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "P(X≤6)=P(X≥16) → m=11 → V(X/9)=σ²/81=1 → σ=9 → m+σ=20"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$20$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-prob/items/153-e16.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "대칭인 두 수(6, 16)는 합이 2m 이면 무엇이든 되고, ㈏ 의 계수 1/9 은 σ 가 정수로 떨어지도록 σ=(계수의 역수)가 되게 고른다. 제약: σ>0 조건이 있으므로 제곱근에서 양수만 남기고, m 과 σ 가 모두 정수여야 답이 깔끔하다."
    creative: "(1) ㈏ 를 V(2X+3)=324 처럼 b 가 붙은 일차변환으로 주면 b 가 분산에 영향 없다는 점검이 추가되어 ★2 유지~★3 (2) ㈎ 를 f(6)=f(16) (밀도함수 값 같음)으로 바꾸면 같은 대칭 착안을 다른 표현으로 요구(★2) (3) m+σ 대신 P(X≤2) 를 묻게 하면 표준화·표 조회가 붙어 ★3."
```

```yaml
- id: GN-PROB-153-334
  page: 153
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    N(20, 3²) 를 따르는 X 에 대해 P(X≤a)=P(X≥29) 일 때 상수 a 의 값.
  category: "대칭 조건 → a 와 29 가 m=20 에 대해 대칭 → a=2m−29"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 꼬리 확률이 같다는 조건을 대칭축까지의 거리가 같다는 조건으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "정규분포곡선의 대칭성으로 미지수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e16 ㈎ 를 단독으로 떼어낸 확인체크. m 이 수치로 주어져 (a+29)/2=20 한 줄이다. σ=3 은 쓰이지 않는 잉여 정보라는 점만 함정. 통찰 1개 d1 · M_total 4 지만 확인체크 ★2 출발 유지.
  tier: star_2
  mechanism_primary: "P(X≤a)=P(X≥29) → (a+29)/2=20 → a=11"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$11$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/153-334.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "m 과 한쪽 값을 자유롭게 잡되 2m−(주어진 값) 이 문제 상황에 맞는 수가 되게 한다. 제약: σ 는 답에 쓰이지 않으므로 아무 양수나 되지만, 잉여 정보로 남겨 두는 편이 원 문항의 함정을 살린다."
    creative: "(1) m 을 미지수로 두고 P(X≤6)=P(X≥16) 로 주면 e16 형(★2) (2) P(X≤a)=P(X≥29) 에 더해 P(X≥a)=0.9772 를 주면 σ 까지 구하게 되어 ★3 (3) 부등호를 어긋나게(P(X≤a)=P(X≤29)) 주어 a=29 만 답이 되는 판정형으로 바꾸면 ★2."
```

```yaml
- id: GN-PROB-153-335
  page: 153
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    N(m, σ²) 의 확률밀도함수 f(x) 에 대한 보기 ㄱ~ㄹ(대칭축에서의 확률 0.5 · 최댓값 위치 · σ 와 높이 · m 과 좌우 이동) 중 옳은 것 고르기.
  category: "곡선의 네 성질을 보기별로 대조 → 참·거짓 판정"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정규분포 곡선의 성질 참·거짓 판정(보기형)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    네 보기 모두 성질을 외웠는지 묻는 독립 판정이고, 틀린 것은 ㄷ 하나(σ 가 작아지면 높이는 오히려 높아진다)다. 보기별 판정은 표준 절차라 I-MI 로 세지 않았다. 판정 대상이 넷이라 Mₛ 2 · 모수 표현이라 Mₐ 2 → 확인체크 ★2 유지.
  tier: star_2
  mechanism_primary: "대칭축 x=m 에서 좌우 0.5 · f 의 최댓값 위치 · 넓이 1 고정에서 오는 σ↔높이 반비례 · m 은 평행이동 — 네 성질 대조"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "ㄱ, ㄴ, ㄹ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/153-335.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수치가 없는 성질형. 보기 수(4개)와 거짓 보기 수(1개)가 난이도를 정하므로, 거짓을 둘로 늘리면 체감이 올라간다."
    creative: "(1) ㄷ 을 「σ 가 작아지면 P(m−1≤X≤m+1) 은 커진다」로 바꾸면 성질 암기가 아니라 넓이 추론이 필요해 ★3 (2) 구체 분포 두 개의 그래프를 주고 같은 보기를 판정하게 하면 ★2 (3) 보기에 f(m−a)=f(m+a) 같은 대칭식을 넣으면 e16 골조와 이어져 ★2."
```

```yaml
- id: GN-PROB-153-336
  page: 153
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    N(32, 5²) 를 따르는 X 에 대해 P(k−3≤X≤k+1) 이 최대가 되도록 하는 상수 k.
  category: "길이 고정 구간의 확률 최대 조건 → 구간의 중점이 대칭축"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「확률이 최대」를 「길이 4 인 구간이 곡선의 가장 높은 부분을 덮는다 = 중점이 m」 으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "길이가 일정한 구간의 확률이 최대가 되는 상수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    구간의 길이가 k 에 무관하게 4 로 고정된다는 것을 먼저 보아야 「중점=m」 착안이 선다(I-EQV d1). 그 뒤 (k−3+k+1)/2=32 한 줄. 통찰 1개 d1 이라 확인체크 ★2 유지.
  tier: star_2
  mechanism_primary: "구간 길이 4 고정 → 확률 최대는 중점이 m 일 때 → k−1=32 → k=33"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$33$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/153-336.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "m 과 구간의 좌우 폭(−3, +1)을 바꿀 수 있다. 제약: 두 폭의 차가 짝수여야 k 가 정수로 떨어지고, 구간 길이는 k 에 무관하게 상수여야(양끝이 모두 k 의 일차식이고 계수가 같아야) 이 골조가 성립한다."
    creative: "(1) 구간을 P(k≤X≤2k) 처럼 길이가 k 에 따라 변하게 주면 최대 조건이 달라져 ★4 (2) 최대 대신 그때의 확률값까지 표로 구하게 하면 ★3 (3) 두 분포에서 같은 길이 구간의 확률을 비교시키면 σ 의 역할이 들어와 ★3."
```

```yaml
- id: GN-PROB-154-e17
  page: 154
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑵ N(40, 10²) 를 따르는 X 에 대해 표준정규분포표를 이용해 P(25≤X≤40), P(X≥60) 구하기.
  category: "표준화 → 표가 주는 P(0≤Z≤z) 꼴로 조립 → 표값 읽기"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "표준화하여 확률 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 대칭축까지의 구간이라 표값 그대로, ⑵ 는 오른꼬리라 0.5 에서 빼는 두 기본형을 한 문항에 담았다. 표준화 대입이 전부라 통찰 없음. M_total 5 로 −1 후보지만 이 단원의 표준 절차를 세우는 필수 예제라 ★2 유지.
  tier: star_2
  mechanism_primary: "Z=(X−40)/10 으로 경계 환산 → P(−1.5≤Z≤0)=P(0≤Z≤1.5) · P(Z≥2)=0.5−P(0≤Z≤2)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑴ $0.4332$ ⑵ $0.0228$"
  answer_source: "본문 풀이"
  figure: "crop:fig-154-e17.png"
  latex: latex-bank/gn-prob/items/154-e17.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "m·σ 와 경계값을 바꿀 수 있으나 (경계−m)/σ 가 옆 표에 있는 z 로 떨어져야 한다. 제약: σ 를 경계와의 차의 약수로 잡는 것이 가장 안전하고, 두 소문항이 「사이 구간」과 「꼬리」를 하나씩 맡는 대비를 유지한다."
    creative: "(1) P(25≤X≤60) 처럼 대칭축을 걸치는 구간으로 합치면 두 표값을 더해야 해 ★2 (2) P(X≥60)=k 의 k 를 주고 σ 를 묻는 역방향(★2~3) (3) 확률 대신 1000명 중 인원으로 물으면 활용형(★2)."
```

```yaml
- id: GN-PROB-154-337
  page: 154
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑵ N(60, 4²) 를 따르는 X 에 대해 표준정규분포표를 이용해 P(48≤X≤64), P(|X−64|≤4) 구하기.
  category: "표준화 → 절댓값 조건은 구간으로 풀어쓰기 → 표값 조립"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "표준화하여 확률 구하기(절댓값 구간 포함)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 대칭축을 걸치는 구간이라 두 표값을 더하고, ⑵ 는 |X−64|≤4 를 60≤X≤68 로 풀어쓰면 대칭축 한쪽의 구간이 된다. 절댓값 풀기는 표준 절차라 통찰로 세지 않았다(T-표기 하나). M_total 5 지만 확인체크 ★2 유지.
  tier: star_2
  mechanism_primary: "|X−64|≤4 → 60≤X≤68 로 변환 → Z=(X−60)/4 로 표준화 → 표값 가감"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑴ $0.84$ ⑵ $0.4772$"
  answer_source: "답지"
  figure: "crop:fig-154-337.png"
  latex: latex-bank/gn-prob/items/154-337.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "절댓값의 중심(64)과 반지름(4)은 (중심±반지름−m)/σ 가 표의 z 로 떨어지도록 함께 고른다. 제약: 중심을 m 과 일부러 다르게 두어야 ⑵ 가 단순 대칭 구간으로 무너지지 않는다."
    creative: "(1) |X−60|≤k 처럼 중심을 m 으로 두면 P=2P(0≤Z≤k/σ) 대칭형(★2) (2) P(|X−64|≤a)=0.6826 의 a 를 묻는 역방향(★3) (3) 절댓값을 ≥ 로 뒤집어 양쪽 꼬리 합으로 만들면 ★2~3."
```

```yaml
- id: GN-PROB-154-338
  page: 154
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    N(32, 5²) 를 따르는 X 에 대해 P(28≤X≤36)=0.5762 일 때 P(X≥28) 구하기.
  category: "주어진 대칭 구간 확률을 절반으로 쪼갬 → 0.5 를 더해 꼬리 포함 확률로"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "28 과 36 이 m=32 에 대해 대칭임을 보고 주어진 확률을 반으로 나눠 P(28≤X≤32) 로 씀 — 표를 쓰지 않고도 값이 나옴"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "대칭 구간의 주어진 확률로 다른 확률 구하기(표 없이)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    표가 주어지지 않은 대신 대칭 구간의 확률이 통째로 주어졌다는 점이 이 문항의 전부다. 28·36 의 대칭을 못 보면 손이 멈춘다(I-EQV d1). 그 뒤 0.5762/2+0.5 한 줄. 통찰 1개 d1 → 확인체크 ★2 유지.
  tier: star_2
  mechanism_primary: "28·36 이 m=32 에 대칭 → P(28≤X≤32)=0.5762/2 → P(X≥28)=그것+0.5"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$0.7881$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/154-338.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "m 과 대칭 폭을 바꾸고 주어진 확률은 2P(0≤Z≤폭/σ) 로 실제 표값에서 만든다. 제약: 두 경계가 m 에 대해 정확히 대칭이어야 반으로 쪼개는 골조가 성립하고, 답이 소수 넷째 자리로 떨어지게 표값을 쓴다."
    creative: "(1) 경계를 비대칭(28, 38)으로 주면 반으로 쪼갤 수 없어 표가 필요해지고 ★3 (2) P(X≥28) 대신 P(X≤36) 을 물어도 같은 ★2 (3) P(28≤X≤36)=a 로 문자화하면 Mₐ 가 올라 ★3."
```

```yaml
- id: GN-PROB-155-e18
  page: 155
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    N(50, 5²) 를 따르는 X 에 대해 표준정규분포표를 이용해 P(X≥k)=0.0013 을 만족시키는 상수 k 구하기.
  category: "꼬리 확률을 표 꼴로 변환 → z 역조회 → 표준화식을 k 에 대해 풀기"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "꼬리 확률 0.0013 을 표가 읽을 수 있는 P(0≤Z≤z)=0.4987 로 옮겨 z 를 거꾸로 찾음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "표준화하여 미지수의 값 구하기(확률 → 경계값 역조회)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    앞의 e17 과 다리는 같고 건너는 방향만 반대다. 표는 확률에서 z 를 찾아 주지 않으므로 0.5−0.0013 으로 표 꼴을 먼저 만드는 단계가 착안(I-EQV d1). 그 뒤 (k−50)/5=3 한 줄. 필수 예제 ★2 유지.
  tier: star_2
  mechanism_primary: "P(X≥k)=0.0013 → P(0≤Z≤z)=0.4987 → z=3 → k=50+3·5"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$65$'
  answer_source: "본문 풀이"
  figure: "crop:fig-155-e18.png"
  latex: latex-bank/gn-prob/items/155-e18.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주어지는 꼬리 확률은 0.5−(표값) 으로 만들어야 z 가 표에서 정확히 찾아진다(0.0228→2, 0.1587→1, 0.0013→3). 제약: k=m+zσ 가 문제 상황에 맞는 수가 되도록 m·σ 를 맞춘다."
    creative: "(1) P(X≤k)=0.0228 처럼 왼쪽 꼬리로 주면 z 가 음수가 되어 부호 점검이 붙고 ★2~3 (2) k 대신 σ 를 미지수로 두면 ★3 (3) P(k≤X≤60)=0.4772 처럼 양끝 중 하나만 미지수로 두면 구간 분해가 추가되어 ★3(155-339 골조)."
```

```yaml
- id: GN-PROB-155-339
  page: 155
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    N(16, 2²) 를 따르는 X 에 대해 표준정규분포표를 이용해 P(k≤X≤22)=0.9759 를 만족시키는 상수 k 구하기.
  category: "구간을 m 에서 둘로 쪼갬 → 오른쪽은 표로 계산 → 남은 확률로 왼쪽 z 역조회"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "주어진 구간을 m=16 에서 잘라 오른쪽 P(16≤X≤22) 를 표로 구한 뒤, 남은 확률을 왼쪽 구간의 표값으로 보고 z 를 역조회"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "구간 확률이 주어질 때 한쪽 끝의 미지수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    양끝 중 하나만 미지수라 구간을 대칭축에서 쪼개는 한 단계가 반드시 필요하다(I-EQV d1). 오른쪽 0.4987 을 빼고 남은 0.4772 에서 z=2 를 거꾸로 읽어 k=16−2·2. 통찰 1개 d1 → 확인체크 ★2 유지.
  tier: star_2
  mechanism_primary: "P(16≤X≤22)=0.4987 → 남은 0.4772 = P(0≤Z≤2) → (16−k)/2=2 → k=12"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$12$'
  answer_source: "답지"
  figure: "crop:fig-155-339.png"
  latex: latex-bank/gn-prob/items/155-339.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "알려진 끝(22)과 전체 확률은 두 표값의 합으로 만든다(0.4987+0.4772=0.9759 처럼). 제약: 주어진 전체 확률이 오른쪽 표값보다 커야 왼쪽 구간이 존재하고, 남은 값이 표에 실린 값과 정확히 일치해야 한다."
    creative: "(1) 미지수를 오른쪽 끝에 두면 같은 골조·대칭(★2) (2) 전체 확률을 0.4772 처럼 작게 주어 k 가 m 오른쪽에 오게 하면 부호 점검이 붙어 ★3 (3) 양끝을 k, k+8 로 모두 문자화하면 ★4."
```

```yaml
- id: GN-PROB-155-340
  page: 155
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    N(m, 10²) 를 따르는 X 에 대해 P(X≤45)=0.1587 일 때 상수 m 의 값(P(0≤Z≤1)=0.3413 이용).
  category: "왼쪽 꼬리 확률을 표 꼴로 변환 → 45 가 m 왼쪽임을 확정 → 표준화식을 m 에 대해 풀기"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "0.1587 < 0.5 에서 45 가 대칭축 왼쪽임을 읽고 P(0≤Z≤(m−45)/10)=0.3413 꼴로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "확률이 주어질 때 평균 m 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    미지수가 경계가 아니라 평균이라 표준화식의 분자가 m 을 품는다. 확률이 0.5 보다 작다는 것에서 45<m 을 확정하지 않으면 부호를 놓친다(I-EQV d1 · T-부호). 그 뒤 (m−45)/10=1. 통찰 1개 d1 → 확인체크 ★2 유지.
  tier: star_2
  mechanism_primary: "P(X≤45)=0.1587 → 0.5−P(0≤Z≤(m−45)/10)=0.1587 → z=1 → m=55"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$55$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/155-340.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "σ 와 경계값을 바꾸고 확률은 0.5−(표값) 으로 준다. 제약: 확률이 0.5 보다 작으면 경계가 m 왼쪽, 크면 오른쪽이라 부호가 뒤집히므로 의도한 쪽에 맞춰 값을 고른다. m=경계+zσ 가 정수로 떨어지게 σ 를 맞춘다."
    creative: "(1) σ 를 미지수로 두고 m 을 주면 같은 골조의 짝 문항(★2) (2) P(X≤45)=0.1587 과 P(X≥65)=0.1587 을 함께 주면 대칭으로 m 이 바로 나와 ★2 (3) m 이 자연수라는 조건과 부등식 두 개로 주면 ★3(160-355 골조)."
```

```yaml
- id: GN-PROB-156-e19
  page: 156
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑵ 학생 1000명의 키가 평균 164 cm, 표준편차 5 cm 인 정규분포를 따를 때 ⑴ 170 cm 이상인 학생의 비율(%), ⑵ 160 cm 이상 170 cm 이하인 학생 수.
  category: "실생활 조건 → 확률변수 구간 → 표준화·표 조회 → 비율(%)·인원 환산"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정규분포의 활용 — 확률 구하기(비율·인원 환산)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    확률을 구하는 부분은 e17 과 같고, 그 값을 100 을 곱해 %로, 1000 을 곱해 명수로 옮기는 환산이 더해진다. 환산은 곱셈 한 번이라 표현 전환(I-RT)으로 세지 않았다. 필수 예제 ★2 유지.
  tier: star_2
  mechanism_primary: "Z=(X−164)/5 → P(Z≥1.2)=0.5−표값 → ×100 으로 % · P(−0.8≤Z≤1.2)×1000 으로 명수"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $11.5\,\%$ ⑵ $673$명'
  answer_source: "본문 풀이"
  figure: "crop:fig-156-e19.png"
  latex: latex-bank/gn-prob/items/156-e19.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "전체 인원·평균·표준편차·경계값을 바꾸되 (경계−164)/5 가 표의 z 로 떨어져야 하고, 확률×전체 인원이 정수(또는 반올림이 자연스러운 값)로 나와야 한다. 제약: 전체 인원을 1000·500·400 처럼 둥근 수로 두면 환산이 깔끔하다."
    creative: "(1) 인원 대신 「몇 명 이상인가」의 최소 인원을 묻는 형태(★2) (2) 두 학교의 분포를 주고 같은 구간의 인원을 비교(★3) (3) 인원을 주고 경계 키를 되묻는 역방향(★2~3 · 157-e20 골조)."
```

```yaml
- id: GN-PROB-156-341
  page: 156
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    몸무게가 평균 53 kg, 표준편차 6 kg 인 정규분포를 따를 때 50 kg 이상 65 kg 이하인 학생의 비율(%).
  category: "실생활 구간 → 표준화 → 대칭축 걸친 구간이므로 두 표값 더하기 → %"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정규분포의 활용 — 구간 비율(%) 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    z=−0.5 와 z=2 로 대칭축을 걸치므로 두 표값을 더해 0.6687, %로 옮겨 66.87. 표준 절차뿐이고 통찰 없음. M_total 5 로 −1 후보지만 활용 맥락과 확인체크 신호로 ★2 유지.
  tier: star_2
  mechanism_primary: "Z=(X−53)/6 → P(−0.5≤Z≤2)=0.1915+0.4772 → ×100"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$66.87\,\%$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/156-341.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "평균·표준편차·두 경계를 바꾸되 두 z 가 함께 제시된 표값(0.5·2)과 맞아야 한다. 제약: 구간이 대칭축을 걸치도록 한쪽 경계를 m 보다 작게 두어야 「더하기」 골조가 유지된다."
    creative: "(1) 두 경계를 모두 m 오른쪽에 두면 「빼기」 골조로 바뀌어 같은 ★2 지만 오답 유발이 커진다 (2) 비율 대신 학생 수를 물으면 인원 환산 추가(★2) (3) 비율을 주고 한쪽 경계를 묻는 역방향(★3)."
```

```yaml
- id: GN-PROB-156-342
  page: 156
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    연필 400자루의 길이가 평균 154 mm, 표준편차 4 mm 인 정규분포를 따를 때 길이가 148 mm 이하인 연필의 자루 수.
  category: "왼쪽 꼬리 확률 → 0.5−표값 → 전체 개수와 곱해 개수 환산"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정규분포의 활용 — 꼬리 확률로 개수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    z=−1.5 의 왼쪽 꼬리이므로 대칭으로 0.5−0.43=0.07, 400 을 곱해 28자루. 표준 절차뿐. M_total 5 로 −1 후보지만 개수 환산이 붙는 활용형이라 확인체크 ★2 유지.
  tier: star_2
  mechanism_primary: "Z=(X−154)/4=−1.5 → P(X≤148)=0.5−0.43=0.07 → 400×0.07=28"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$28$자루'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/156-342.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "전체 개수·평균·표준편차·경계를 바꾸되 (경계−m)/σ 가 제시된 z 와 맞고 확률×전체가 정수로 떨어져야 한다. 제약: 꼬리 확률은 보통 0.07·0.0228 처럼 작아 전체 개수를 충분히 크게 잡아야 답이 1 이상의 자연수가 된다."
    creative: "(1) 「불량으로 폐기할 연필 수」처럼 맥락을 주면 같은 ★2 (2) 양쪽 꼬리(길이가 너무 짧거나 긴 것)를 물으면 대칭 합으로 ★2~3 (3) 폐기 수를 주고 규격 경계를 되묻는 역방향(★3)."
```

```yaml
- id: GN-PROB-156-343
  page: 156
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    등교 시간이 평균 40분, 표준편차 5분인 정규분포를 따를 때 오전 7시 52분에 출발해 8시 40분까지 가야 하는 학생이 지각할 확률.
  category: "시각 조건 → 허용 소요 시간 48분 → P(X>48) 오른꼬리"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 시각의 차 48분을 소요 시간의 상한으로 읽고 「지각」을 X>48 이라는 오른꼬리 사건으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "정규분포의 활용 — 시각 조건을 소요 시간 부등식으로 옮겨 확률 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    확률 계산 자체는 z=1.6 한 번이지만, 출발·도착 시각을 빼서 48분을 만들고 지각이 어느 쪽 꼬리인지 정하는 번역이 이 문항의 몫이다(I-EQV d1 · T-단위). 통찰 1개 d1 → 확인체크 ★2 유지.
  tier: star_2
  mechanism_primary: "8시 40분−7시 52분=48분 → 지각 ⇔ X>48 → Z=(48−40)/5=1.6 → 0.5−0.4452"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$0.0548$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/156-343.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "출발 시각·마감 시각·평균·표준편차를 바꾸되 (시각차−m)/σ 가 표에 있는 z 로 떨어져야 한다. 제약: 시각차가 평균보다 커야 지각 확률이 0.5 미만이 되어 상황이 자연스럽고, 분 단위로 떨어지게 시각을 잡는다."
    creative: "(1) 「지각하지 않을 확률」로 뒤집으면 여사건 한 단계(★2) (2) 지각 확률을 0.0228 이하로 만들려면 몇 시에 나서야 하는지 묻는 역방향(★3) (3) 등교와 하교 두 구간의 시간을 합쳐 물으면 단원을 넘는 결합이 되어 ★4."
```

```yaml
- id: GN-PROB-157-e20
  page: 157
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    2000명이 응시해 320명을 뽑는 입사 시험에서 점수가 평균 450점, 표준편차 75점인 정규분포를 따를 때 합격자의 최저 점수.
  category: "모집 인원 비율 → 오른꼬리 확률 → z 역조회 → 경계 점수"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "320/2000 이라는 인원 비율을 P(X≥k)=0.16 이라는 확률 조건으로 옮겨 표를 쓸 수 있는 꼴로 만듦"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "정규분포의 활용 — 상위 비율에서 합격 최저 점수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    인원 → 비율 → 확률 → z → 점수의 다리를 한 방향으로 건너는 문항이다. 첫 다리(인원 비율을 확률로)가 착안이고 나머지는 e18 과 같은 역조회(I-EQV d1). 통찰 1개 d1 이라 필수 예제 ★2 유지.
  tier: star_2
  mechanism_primary: "P(X≥k)=320/2000=0.16 → P(0≤Z≤z)=0.34 → z=1 → k=450+75"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$525$점'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-prob/items/157-e20.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모집 인원/응시 인원 비율이 0.5−(표값) 과 정확히 맞아야 z 가 표에서 읽힌다(0.16→1, 0.1→1.28, 0.2→0.84). 제약: k=m+zσ 가 점수로 자연스러운 정수가 되도록 σ 를 z 의 분모와 맞춘다."
    creative: "(1) 「최저 점수」 대신 「상위 몇 %인가」를 물으면 순방향이라 ★2 로 내려간다 (2) 불합격자 중 상위 몇 명의 점수처럼 구간 경계를 물으면 ★3 (3) 두 해 응시자 분포를 주고 합격선 변화를 비교하면 ★4."
```

```yaml
- id: GN-PROB-157-344
  page: 157
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    시험 성적이 평균 75점, 표준편차 9점인 정규분포를 따를 때 상위 10 %에 속하는 수험생의 최저 점수.
  category: "상위 비율 → P(X≥k)=0.1 → z=1.28 역조회 → 경계 점수"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "상위 10 % 라는 서술을 P(X≥k)=0.1, 즉 P(0≤Z≤z)=0.4 로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "정규분포의 활용 — 상위 비율에서 최저 점수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e20 에서 인원 환산 단계를 뺀 짝 문항으로, 비율이 %로 직접 주어져 다리가 하나 짧다. 나머지는 z=1.28 역조회와 k=75+1.28·9. 통찰 1개 d1 → 확인체크 ★2 유지.
  tier: star_2
  mechanism_primary: "P(X≥k)=0.1 → P(0≤Z≤z)=0.4 → z=1.28 → k=75+1.28·9"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$86.52$점'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/157-344.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상위 비율은 0.5−(표값) 으로 고른다(10 %→1.28, 16 %→1, 20 %→0.84, 2.28 %→2). 제약: 평균·표준편차를 정하면 k=m+zσ 가 소수 둘째 자리 이내로 떨어지게 σ 를 z 와 맞춘다."
    creative: "(1) 「하위 10 %의 최고 점수」로 바꾸면 부호 반전이 붙어 ★2~3 (2) 상위 10 %와 상위 30 %의 점수 차를 물으면 역조회 두 번으로 ★3 (3) 두 과목의 상위 10 % 경계를 비교시키면 ★3."
```

```yaml
- id: GN-PROB-157-345
  page: 157
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    학생 500명의 키가 평균 165 cm, 표준편차 10 cm 인 정규분포를 따를 때 키가 작은 쪽에서 100번째인 학생의 키.
  category: "순위 → 하위 비율 0.2 → 왼쪽 경계이므로 z 부호 음수 → 경계 키"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「작은 쪽에서 100번째」를 P(X≤k)=100/500=0.2 로 옮기고, 0.2<0.5 이므로 k 가 평균 왼쪽임을 확정"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "정규분포의 활용 — 하위 순위에서 경계값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e20·344 와 다리는 같지만 방향이 아래쪽이라 z 가 음수가 되는 지점에서 오답이 갈린다(T-부호·T-단위 둘로 Mₜ 2). 0.5−0.3=0.2 에서 z=−0.84, k=165−8.4. 통찰 1개 d1 이라 +1 조건에 못 미쳐 확인체크 ★2 유지.
  tier: star_2
  mechanism_primary: "P(X≤k)=100/500=0.2 → P(0≤Z≤0.84)=0.3 이므로 z=−0.84 → k=165−0.84·10"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$156.6\,\mathrm{cm}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/157-345.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "전체 인원과 순위의 비가 0.5−(표값) 으로 떨어져야 한다(100/500=0.2→0.84). 제약: 순위가 전체의 절반보다 작아야 왼쪽 경계가 되고, k=m−zσ 가 소수 한 자리로 떨어지게 σ 를 고른다."
    creative: "(1) 「큰 쪽에서 100번째」로 바꾸면 부호가 뒤집힌 같은 골조(★2) (2) 작은 쪽 100번째와 큰 쪽 100번째의 키 차를 물으면 대칭 활용으로 ★3 (3) 순위 대신 「키가 156.6 cm 인 학생은 몇 번째인가」로 되물으면 순방향 ★2."
```

### 연습문제 STEP 1

```yaml
- id: GN-PROB-158-346
  page: 158
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    그림의 두 정규분포곡선 y=f(x), y=g(x) 가 각각 X₁, X₂ 의 확률밀도함수일 때 평균 m₁, m₂ 와 표준편차 σ₁, σ₂ 의 대소 관계로 옳은 것 고르기(5지선다).
  category: "그림에서 대칭축 위치 → m 대소 · 곡선의 퍼짐(높이) → σ 대소"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 정규분포 곡선 그림에서 평균·표준편차 대소 비교"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    152-331 에서 익힌 두 성질(대칭축=m · 퍼짐과 높이는 σ 에 좌우)을 그림 하나에서 동시에 읽는 문항. 계산이 없고 통찰 0·M_total 5 라 −1 후보였으나, 두 모수를 한 그림에서 각각 분리해 읽어야 하므로 STEP 1 출발점 ★2 를 유지했다.
  tier: star_2
  mechanism_primary: "대칭축이 왼쪽/오른쪽인지로 m 대소 → 곡선이 뾰족한지 퍼졌는지로 σ 대소 → 두 결과를 짝지어 선택지 대응"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: "crop:fig-158-346.png"
  latex: latex-bank/gn-prob/items/158-346.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "그림 자체가 조건이므로 바꿀 수 있는 수가 없다. 그림을 재사용한다면 라벨(f, g)과 선택지 배열만 바꾼다. 제약: 그림의 대칭축 위치·곡선 폭이 답을 정하므로 수치를 새로 쓰려면 그림을 함께 바꿔야 한다."
    creative: "(1) 곡선 셋으로 늘리고 보기 ㄱㄴㄷ 판정형으로 만들면 ★3(159-352 골조) (2) 한 곡선의 N(m, σ²) 을 주고 다른 곡선의 모수 범위를 묻게 하면 ★3 (3) 두 곡선의 교점 개수로 σ 대소를 판정시키면 ★4."
```

```yaml
- id: GN-PROB-158-347
  page: 158
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    Z 가 표준정규분포를 따를 때 이차방정식 x²+Zx+1=0 이 서로 다른 두 실근을 가질 확률.
  category: "판별식 조건 → Z 의 범위 → 양쪽 꼬리 확률 합"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "이차방정식의 근의 판별(다른 단원 도구)을 확률변수의 사건으로 끌어와 D>0 을 Z 의 조건으로 세움"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "Z²>4 를 Z<−2 또는 Z>2 두 꼬리로 풀어 쓰고 대칭으로 한쪽 꼬리의 2배로 계산"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "확률변수를 계수로 갖는 이차방정식의 근의 조건과 확률"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    계수가 확률변수라는 설정을 읽어 내면 판별식이 그대로 사건의 정의가 된다(I-XU d1). 이어 Z²>4 를 두 꼬리로 나누는 단계에서 「제곱 부등식」의 부호·범위 함정이 둘 걸린다(I-EQV d1 · Mₜ 2). 통찰 2개로 +1 조건을 충족해 STEP 1 ★2 에서 ★3.
  tier: star_3
  mechanism_primary: "D=Z²−4>0 → |Z|>2 → P=2{0.5−P(0≤Z≤2)}=2(0.5−0.4772)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$0.0456$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/158-347.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수항을 바꾸면 판별식이 Z²>4c 가 되어 경계가 √c 배로 움직인다. 제약: 경계 |Z|>z 의 z 가 표에 실린 값이어야 하므로 상수항은 제곱수 꼴(1·2.25·4)로 고르고, 일차항 계수에 배수를 붙이면 경계가 분수가 되니 주의한다."
    creative: "(1) 「중근을 가질 확률」로 바꾸면 연속확률변수에서 0 이 되는 개념 점검형(★3) (2) 「두 실근이 모두 양수일 확률」로 바꾸면 근과 계수의 관계가 더 붙어 ★4 (3) x²+2Zx+Z+2=0 처럼 Z 가 두 곳에 나오면 판별식이 Z 의 이차부등식이 되어 ★4."
```

```yaml
- id: GN-PROB-158-348
  page: 158
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    X 가 N(42, 3²) 를 따르고 Y=2X+4 일 때 표준정규분포표를 이용해 P(Y≥100) 구하기.
  category: "일차변환의 평균·분산 → Y 의 정규분포 확정 → 표준화·표 조회"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "Y 의 사건을 X 의 사건(X≥48)으로 되돌리거나 Y~N(88, 6²) 로 바꿔 쓰는 변환 — 어느 쪽이든 표를 쓸 수 있는 꼴로 옮기는 단계"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "정규분포를 따르는 확률변수의 일차변환과 확률"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    E(2X+4)=88, V(2X+4)=4·9 에서 Y~N(88, 6²) 임을 세우는 것이 전부이고 그 뒤는 z=2 한 번이다. 표준편차에 |a| 가 곱해진다는 지점만 함정. 통찰 1개 d1 → STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: "Y=2X+4 → m=2·42+4=88, σ=2·3=6 → Z=(100−88)/6=2 → 0.5−0.4772"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$0.0228$'
  answer_source: "답지"
  figure: "crop:fig-158-348.png"
  latex: latex-bank/gn-prob/items/158-348.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차변환의 계수 a·b 와 경계값을 바꾸되 (경계−(am+b))/(|a|σ) 가 표의 z 로 떨어져야 한다. 제약: a 가 음수면 부등호가 뒤집히므로 의도한 꼬리 방향을 확인하고, a 를 σ 의 약수·배수로 잡아야 z 가 정수로 나온다."
    creative: "(1) a 를 음수(Y=−2X+4)로 주면 부등호 반전이 더해져 ★3 (2) P(Y≥100)=0.0228 을 주고 a 를 되묻는 역방향(★3) (3) Y=(X−42)/3 로 두어 표준화 자체가 일차변환임을 확인시키면 ★2."
```

```yaml
- id: GN-PROB-158-349
  page: 158
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: ["평가원 기출"]
  category_type: "연습문제 STEP 1"
  summary: |
    시험 점수가 평균 68점, 표준편차 10점인 정규분포를 따를 때 임의로 뽑은 한 명의 점수가 55점 이상 78점 이하일 확률(5지선다).
  category: "표준화 → 대칭축 걸친 구간 → 두 표값 더하기"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "표준화하여 구간 확률 구하기(대칭축을 걸친 구간)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    z=−1.3 과 z=1 로 대칭축을 걸치므로 표값 두 개를 더한다. 기출 태그가 붙었지만 통찰이 없어 +0 으로 두었다. 표준 절차뿐이고 M_total 5 지만 STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: "Z=(X−68)/10 → P(−1.3≤Z≤1)=P(0≤Z≤1.3)+P(0≤Z≤1)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: "crop:fig-158-349.png"
  latex: latex-bank/gn-prob/items/158-349.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "평균·표준편차·두 경계를 바꾸되 두 z 가 모두 옆 표에 있어야 하고, 오답 선택지는 두 표값을 빼거나 한쪽만 쓴 값으로 만들면 변별이 산다. 제약: 구간이 대칭축을 걸치게 두 경계를 m 양쪽에 둔다."
    creative: "(1) 「점수가 55점 이상일 확률」로 줄이면 ★1~2 (2) 응시자 수를 주고 인원을 묻게 하면 활용형 ★2 (3) 두 시험의 같은 구간 확률을 비교시키면 ★3."
```

```yaml
- id: GN-PROB-159-350
  page: 159
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    음료수 500캔의 용량이 평균 180 mL, 표준편차 4 mL 인 정규분포를 따를 때 용량이 186 mL 이상 188 mL 이하인 캔의 수.
  category: "표준화 → 같은 쪽 두 구간의 표값 빼기 → 전체 수와 곱해 개수"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정규분포의 활용 — 구간 확률로 개수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 경계가 모두 평균 오른쪽이라 표값을 더하지 않고 빼야 한다(0.4772−0.4332=0.044). 그 뒤 500 을 곱해 22캔. 통찰 없음·M_total 5 지만 「더하기/빼기」 분기가 오답을 가르는 STEP 1 표준형이라 ★2 유지.
  tier: star_2
  mechanism_primary: "Z=(X−180)/4 → P(1.5≤Z≤2)=0.4772−0.4332=0.044 → 500×0.044=22"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$22$캔'
  answer_source: "답지"
  figure: "crop:fig-159-350.png"
  latex: latex-bank/gn-prob/items/159-350.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 경계가 모두 평균의 같은 쪽에 오도록 잡고 (경계−m)/σ 가 표의 z 로 떨어지게 한다. 제약: 확률차×전체 개수가 정수로 떨어져야 하므로 전체 개수를 500·1000 처럼 둥글게 두고 확률차는 0.044·0.0215 처럼 표값 차로 만든다."
    creative: "(1) 한쪽 경계를 평균 왼쪽으로 옮기면 더하기 골조로 바뀌어 같은 ★2 (2) 「규격 미달·초과 캔 수」로 양쪽 꼬리를 물으면 ★3 (3) 개수를 주고 표준편차를 되묻는 역방향(★3)."
```

```yaml
- id: GN-PROB-159-351
  page: 159
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    4000명이 응시해 800명을 모집하는 입학 시험에서 성적이 평균 248점, 표준편차 50점인 정규분포를 따를 때 합격자의 최저 점수.
  category: "모집 비율 → 오른꼬리 확률 0.2 → z=0.84 역조회 → 경계 점수"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "800/4000 이라는 인원 비율을 P(X≥k)=0.2, 즉 P(0≤Z≤z)=0.3 으로 옮겨 표를 쓸 수 있게 함"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "정규분포의 활용 — 상위 비율에서 합격 최저 점수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    157-e20 과 수치만 다른 같은 골조다(비율 0.2 · z=0.84). k=248+0.84·50=290. 통찰 1개 d1 → STEP 1 ★2 유지. 연습문제 구역에 필수 예제와 동일 골조가 반복 배치된 사례.
  tier: star_2
  mechanism_primary: "P(X≥k)=800/4000=0.2 → P(0≤Z≤z)=0.3 → z=0.84 → k=248+0.84·50"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$290$점'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/159-351.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모집/응시 비율이 0.5−(표값) 과 맞아야 한다(0.2→0.84, 0.16→1, 0.1→1.28). 제약: σ 를 z 의 분모와 맞춰 k=m+zσ 가 정수 점수로 떨어지게 한다."
    creative: "(1) 「합격자 중 최저 점수와 최고 점수 차」처럼 두 경계를 묻는 형태(★3) (2) 예비 합격자 구간(상위 20~25 %)의 점수 범위를 묻기(★3) (3) 모집 인원을 미지수로 두고 합격선이 300점이 되게 하는 인원을 묻는 역방향(★3)."
```

### 연습문제 STEP 2

```yaml
- id: GN-PROB-159-352
  page: 159
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    학생 수가 같은 세 고등학교 A, B, C 의 성적 분포 곡선 그림을 보고 보기 ㄱ~ㄷ(우수한 학생 수 비교 · 평균 비교 · 성적이 고른 정도)의 참·거짓 판정.
  category: "그림에서 m·σ 읽기 → 각 보기를 넓이·대칭축·퍼짐의 언어로 옮겨 판정"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「성적이 우수한 학생이 더 많다」를 곡선 오른쪽 꼬리의 넓이×학생 수로 옮겨 평균이 아니라 분산이 답을 가른다는 것을 읽음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "여러 정규분포 곡선 그림의 해석(평균·표준편차와 인원 비교)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ㄴ 은 대칭축 비교로 바로 갈리지만 ㄱ 은 평균이 같거나 낮아도 퍼짐이 크면 상위 구간 인원이 많아질 수 있다는 점을 넓이로 옮겨야 한다(I-RT d1). ㄷ 은 「고르다=σ 가 작다」 번역. 함정이 둘(평균과 상위 인원 혼동 · 고르다의 의미)이라 Mₜ 2. STEP 2 ★3 유지.
  tier: star_3
  mechanism_primary: "그림에서 대칭축 위치로 m, 폭으로 σ 를 읽음 → ㄱ 은 오른쪽 꼬리 넓이, ㄴ 은 대칭축, ㄷ 은 폭으로 각각 판정"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "ㄱ, ㄷ"
  answer_source: "답지"
  figure: "crop:fig-159-352.png"
  latex: latex-bank/gn-prob/items/159-352.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "그림이 조건이므로 수치 변형은 그림 교체를 뜻한다. 그림을 그대로 쓴다면 보기 문장만 바꾼다. 제약: 세 곡선의 대칭축·폭 관계가 보기의 참·거짓을 결정하므로 보기를 바꿀 때 그림과 하나씩 대조해야 한다."
    creative: "(1) 학생 수를 서로 다르게 주면 넓이만으로 인원을 비교할 수 없어 ★4 (2) 「상위 10 % 커트라인이 가장 높은 학교」를 물으면 역조회가 붙어 ★4 (3) 곡선 대신 N(m, σ²) 세 쌍을 수치로 주면 그림 해석이 빠져 ★2."
```

```yaml
- id: GN-PROB-159-353
  page: 159
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    X 가 N(4, 2²) 를 따를 때 P(1≤X≤2), P(2≤X≤3), P(4≤X≤5), P(X≤2), P(X≥7) 중 확률이 가장 작은 것 고르기.
  category: "다섯 구간을 표준화 → 대칭축에서의 거리·구간 폭으로 대소 압축 → 꼬리 확률과 비교"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "대칭축 x=4 에서 멀어질수록 같은 폭 구간의 확률이 작아진다는 성질로 선택지를 압축해, 주어진 두 표값만으로 비교가 끝나게 함"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "여러 구간의 확률 대소 비교(대칭축까지의 거리와 구간 폭)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    표값이 z=1, 1.5 두 개만 주어져 선택지를 전부 계산할 수 없고, 대칭축에서의 거리로 후보를 줄여야 한다(I-SYM d1). ①②③ 은 폭이 같아 거리 비교로 갈리고, ④⑤ 는 꼬리끼리의 비교. 다섯 선택지를 각각 표준화하는 계산 부담(Mₖ 2)과 「구간이 좁다≠확률이 작다」 함정이 있어 STEP 2 ★3 유지.
  tier: star_3
  mechanism_primary: "각 구간을 Z 로 옮김 → 같은 폭이면 대칭축에서 먼 쪽이 작다 → 남은 후보는 표값으로 직접 비교 → 가장 먼 오른꼬리 P(Z≥1.5) 가 최소"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/159-353.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "m·σ 와 다섯 구간의 위치를 바꾸되 주어지는 표값 두세 개만으로 대소가 결정되게 배치한다. 제약: 답이 되는 구간은 대칭축에서 가장 멀고 폭이 넓지 않아야 하며, 구간 폭이 서로 다르면 거리 비교만으로는 결론이 나지 않으므로 같은 폭 묶음을 남겨 둔다."
    creative: "(1) 「가장 큰 것」으로 뒤집으면 대칭축에 가장 가까운 구간을 고르는 같은 ★3 (2) 선택지를 P(|X−4|≤a) 꼴로 통일하면 a 의 단조성만 보면 되어 ★2 (3) 두 분포의 구간을 섞어 놓으면 표준화 없이는 비교가 불가능해 ★4."
```

```yaml
- id: GN-PROB-160-354
  page: 160
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    X 가 N(5, 3²), Y 가 N(16, 4²) 를 따르고 P(X≥k)=P(Y≤−k) 일 때 상수 k 의 값.
  category: "두 확률을 각각 표준화 → 대칭으로 한쪽 부호를 뒤집어 z 끼리 등식 → k 의 일차방정식"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "서로 다른 두 분포의 확률을 비교할 수 없으므로 양변을 표준정규분포의 확률로 옮겨 같은 자에 올려놓음"
    - step: 2
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "P(Z≥a)=P(Z≤−a) 대칭을 써서 부등호 방향이 다른 두 확률을 하나의 등식 a=−b 로 묶음"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "두 정규분포의 확률이 같을 조건에서 미지수 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    표값이 하나도 주어지지 않았다는 것이 신호다. 확률의 값을 구하는 문항이 아니라 두 표준화 z 를 대칭으로 이어 붙이는 문항이며(I-EQV d1 · I-SYM d1), 그 뒤는 4(k−5)=3(k+16) 일차방정식 한 줄이다. 통찰 2개로 +1 후보였으나 각 depth 1 이고 마무리가 일차방정식이라 STEP 2 출발점 ★3 을 유지했다.
  tier: star_3
  mechanism_primary: "P(Z≥(k−5)/3)=P(Z≤(−k−16)/4) → 대칭으로 (k−5)/3=(k+16)/4 → k=68"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$68$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/160-354.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 분포의 m·σ 와 오른쪽 식의 −k 자리(−k, k+a 등)를 바꿀 수 있다. 제약: 정리하면 k 의 일차방정식이 되어야 하므로 양변 모두 k 의 일차식이어야 하고, 두 σ 의 최소공배수를 고려해 k 가 정수로 떨어지게 맞춘다. σ 가 같으면 식이 자명해지니 서로 다르게 둔다."
    creative: "(1) 오른쪽을 P(Y≥k) 로 바꾸면 대칭 단계가 빠져 ★2 (2) σ 하나를 미지수로 두고 k 를 주면 ★4 (3) P(X≥k)=P(Y≤−k) 에 더해 두 확률의 값까지 주면 표 역조회가 붙어 ★4."
```

```yaml
- id: GN-PROB-160-355
  page: 160
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 STEP 2"
  summary: |
    X 가 평균 m, 표준편차 4 인 정규분포를 따르고 확률밀도함수 f 가 f(8)>f(14), f(2)<f(16) 을 만족시킬 때(m 은 자연수) 표준정규분포표를 이용해 P(X≤6) 구하기(5지선다).
  category: "밀도함수 값 대소 → 대칭축까지의 거리 대소 → m 의 범위 → 자연수 조건으로 m 확정 → 표준화"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f 의 값 대소를 「대칭축 x=m 에 더 가까운 쪽이 크다」로 옮겨 |8−m|<|14−m|, |2−m|>|16−m| 이라는 부등식으로 바꿈"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "밀도함수 값의 대소 조건으로 평균 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f 의 값을 계산하려 들면 막히고, 곡선이 대칭축에서 멀어질수록 낮아진다는 성질로 옮겨야 풀린다(I-EQV d2 — 단순 대입이 아니라 곡선의 모양을 조건으로 번역). 두 부등식이 m<11, m>9 를 주고 자연수 조건이 m=10 을 확정한 뒤에야 표준화가 시작된다. 기출 태그·조건 번역 난도를 반영해 STEP 2 ★3 유지.
  tier: star_3
  mechanism_primary: "f(8)>f(14) → m<11 · f(2)<f(16) → m>9 → m=10 → Z=(6−10)/4=−1 → 0.5−0.3413"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "⑤"
  answer_source: "답지"
  figure: "crop:fig-160-355.png"
  latex: latex-bank/gn-prob/items/160-355.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 부등식의 네 수는 각각 중점이 m 의 상한·하한을 만들도록 고른다(8·14 → 11, 2·16 → 9). 제약: 두 중점 사이에 자연수가 정확히 하나만 들어가야 m 이 확정되고, 그 m 과 σ 로 (경계−m)/σ 가 표의 z 로 떨어져야 한다."
    creative: "(1) 자연수 조건을 정수·짝수로 바꾸면 후보가 늘어 검증이 필요해지고 ★4(I-VF) (2) 부등식을 하나만 주고 P(X≤6) 의 범위를 묻게 하면 ★4 (3) σ 를 미지수로 두고 f(8)=f(14) 처럼 등호로 주면 m 이 바로 나와 ★2."
```

```yaml
- id: GN-PROB-160-356
  page: 160
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    국어·영어·수학 성적이 각각 정규분포를 따르고 과목별 평균·표준편차와 학생 A 의 성적이 표로 주어질 때, A 가 반에서 상대적으로 가장 잘한 과목 고르기.
  category: "서로 다른 세 분포의 원점수 → 표준화 점수로 환산 → z 최대 과목"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "평균·표준편차가 다른 세 과목의 원점수를 그대로 비교할 수 없다는 것을 보고 공통 척도인 표준화 점수 z 로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "표준화 점수로 서로 다른 분포의 성적 비교하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    「상대적으로」라는 한 낱말이 표준화를 요구한다는 것만 읽으면 나머지는 (성적−평균)/표준편차 를 세 번 계산해 가장 큰 것을 고르는 일이다(I-RT d1). 원점수가 가장 높은 영어가 답이 아니라는 점이 유일한 함정. STEP 2 출발점 ★3 이지만 표 조회도 없고 계산이 나눗셈 세 번이라 ★2 로 한 단 내렸다(1단 차이라 분류 이슈로는 올리지 않음).
  tier: star_2
  mechanism_primary: "각 과목 z=(A의 성적−평균)/표준편차 계산 → 세 z 중 최대인 과목"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "국어"
  answer_source: "답지"
  figure: "crop:fig-160-356.png"
  latex: latex-bank/gn-prob/items/160-356.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "표의 평균·표준편차·개인 성적을 바꾸되 z 가 분수로 깔끔히 비교되게 (성적−평균)을 표준편차의 배수 근처로 잡는다. 제약: 원점수 순위와 z 순위가 어긋나야 문항의 의도가 살고, 두 과목의 z 가 너무 가까우면 분수 비교가 지저분해진다."
    creative: "(1) 표에 등수까지 넣고 z 와 등수의 관계를 묻게 하면 ★3 (2) 표준정규분포표를 함께 주고 각 과목의 상위 몇 %인지 묻게 하면 ★3 (3) 한 과목의 표준편차를 미지수로 두고 「세 과목 z 가 같아지는 값」을 묻는 역방향(★4)."
```

### 연습문제 실력 UP

```yaml
- id: GN-PROB-160-357
  page: 160
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: ["수능 기출"]
  category_type: "연습문제 실력 UP"
  summary: |
    N(m₁, σ₁²) 를 따르는 X 와 N(m₂, σ₂²) 를 따르는 Y 가 모든 실수 x 에 대해 P(X≤x)=P(X≥40−x), P(Y≤x)=P(X≤x+10) 을 만족시키고 P(15≤X≤20)+P(15≤Y≤20)=0.4772 일 때 m₁+σ₂ 의 값.
  category: "항등식 조건 → X 의 대칭축·Y 의 평행이동 → 두 구간 확률을 이웃 구간으로 붙여 하나의 표값으로"
  M: {s: 3, k: 2, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "모든 x 에 대한 항등식 P(X≤x)=P(X≥40−x) 를 「x 와 40−x 의 중점이 대칭축」으로 읽어 m₁=20 을 얻음"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "P(Y≤x)=P(X≤x+10) 을 「Y 의 분포는 X 를 왼쪽으로 10 만큼 평행이동한 것」으로 읽어 m₂=m₁−10, σ₂=σ₁ 을 얻음"
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "Y 구간을 X 구간으로 되돌리면 두 확률이 이웃 구간이 되어 합이 하나의 P(0≤Z≤10/σ₁) 로 합쳐짐 — 두 조건이 하나의 방정식으로 묶임"
  insight_count: 3
  depth_score: 2.00
  type_id: null
  type_hint: "두 정규분포의 대칭·평행이동 조건에서 m·σ 구하기(수능형)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    세 단계가 모두 「확률을 계산하라」가 아니라 「조건이 뜻하는 분포의 위치·모양을 읽어라」다. 특히 두 확률의 합이 따로 계산되는 두 값이 아니라 이어 붙는 하나의 구간이라는 것을 보지 못하면 σ 를 구하는 방정식이 서지 않는다(I-CON d2). 통찰 3개·M_total 10 이지만 SC/VF/SYM/XU 가 없어 ★5 조건에는 미달하므로 실력 UP 출발점 ★4 유지.
  tier: star_4
  mechanism_primary: "m₁=20 → Y 는 X 를 10 평행이동(σ₂=σ₁) → P(15≤X≤20)+P(25≤X≤30)=P(0≤Z≤10/σ₁)=0.4772 → σ₁=σ₂=5 → m₁+σ₂=25"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$25$'
  answer_source: "답지"
  figure: "crop:fig-160-357.png"
  latex: latex-bank/gn-prob/items/160-357.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "대칭 조건의 40(=2m₁), 평행이동량 10, 구간 15~20, 주어진 확률값을 함께 조정한다. 제약: 평행이동량이 구간의 폭과 맞아떨어져 두 구간이 정확히 이웃해야 합이 하나의 표값이 되고, 그 표값에 대응하는 z 가 표에 있어야 σ 가 정수로 떨어진다. 이 맞물림이 깨지면 골조 자체가 무너지므로 수치 변형은 네 값을 한꺼번에 맞춰야 한다."
    creative: "(1) 두 구간이 이웃하지 않고 겹치게 만들면 합이 하나로 묶이지 않아 표 조회가 두 번 필요해지고 ★4~5 (2) σ₂=2σ₁ 처럼 평행이동이 아닌 척도 변화를 주면 ★5(I-SYM 결합) (3) m₁+σ₂ 대신 P(Y≥m₁) 을 묻게 하면 마지막에 위치 재확인이 필요해 ★4."
```

## 표본 판정 요약 (33문)

- ★ 분포: ★1 4 · ★2 23 · ★3 5 · ★4 1 · ★5 0
- 통찰형 20 · 절차형 13 · premium 0
- 통찰 라벨 24개: I-EQV 18 · I-RT 2 · I-SYM 2 · I-XU 1 · I-CON 1 (depth 1 20개 · depth 2 4개 · depth 3 0 · 감쇠 대상 없음)
- type_hint 묶음: 「정규분포의 활용(비율·인원·시각·순위)」 9 · 「곡선의 성질·대칭성으로 미지수 구하기」 9 · 「표준화하여 확률 구하기」 5 · 「표기·일차변환·두 분포 비교」 5 · 「확률에서 미지수 역조회」 3 · 「다른 단원과의 결합형」 2
- 그림: 14문(표준정규분포표 11 · 실제 자료 그림 3 — `crop:fig-158-346.png` 두 곡선 · `crop:fig-159-352.png` 세 곡선 · `crop:fig-160-356.png` 세 과목 평균·표준편차 표)
- 벤더 신호: 개념원리 익히기 4 · 필수 5 · 확인체크 12 · STEP 1 6 · STEP 2 5 · 실력 UP 1 · 기출 태그 3(평가원 1 · 교육청 1 · 수능 1)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| (없음) | 이 범위에서 벤더 신호와 2단 이상 어긋난 문항은 없다 | — |

1단 차이로 조정했으나 이슈로 올리지 않고 rationale 에만 근거를 남긴 문항은 셋이다. `160-356` 은 STEP 2(★3 출발)이지만 표 조회 없이 나눗셈 세 번으로 끝나 ★2 로 내렸고, `158-347` 은 STEP 1(★2 출발)에서 통찰 2개로 ★3 으로 올렸으며, `154-e17` · `156-341` · `156-342` · `158-346` · `158-349` · `159-350` 은 통찰 0 · M_total 5 로 −1 후보였으나 각 구역의 표준 절차를 세우는 자리라 출발점을 유지했다.

판정 경계로 한 번 더 짚어 둘 지점은 **어디까지가 표준 절차이고 어디부터가 I-EQV 인가**이다. 이 파일에서는 ⑴ 표가 주는 P(0≤Z≤z) 꼴로 구간을 조립하는 것(152-332 · 154-e17 · 154-337 · 158-349 · 159-350)과 ⑵ 절댓값 구간 풀기, ⑶ 확률×전체 수로 인원 환산(156-e19)은 **단원의 규약 학습**으로 보아 통찰로 세지 않았고, ⑴ 조건이 위치를 정한다는 것을 읽어야 하는 경우(대칭·최대·자연수 확정)와 ⑵ 표가 읽을 수 없는 꼴을 읽을 수 있는 꼴로 뒤집는 경우(꼬리→표값·비율→확률·시각→소요시간)만 I-EQV 로 세었다. 카탈로그를 만들 때 이 경계가 달라지면 이 범위의 통찰형 20문 중 7~8문이 절차형으로 옮겨갈 수 있다.

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 단원의 실질 유형은 다섯이다. ① **곡선의 성질·대칭** — 모수와 곡선 모양의 대응, 대칭으로 미지수·최대 구간 찾기(★1~3 · 9문). ② **표준화하여 확률 구하기** — 구간을 표 꼴로 조립(★1~2 · 5문). ③ **확률에서 미지수 역조회** — ②의 역방향(★2~3 · 3문). ④ **정규분포의 활용** — 실생활 조건을 부등식으로 옮기고 비율·인원·경계값을 오가는 형(★2 · 9문). ⑤ **두 분포·변환을 잇는 형** — 일차변환, 서로 다른 두 분포의 확률 비교, 표준화 점수 비교(★2~4 · 5문).
- ②와 ③은 같은 다리를 방향만 바꿔 건너므로 **한 유형의 순방향·역방향 변형으로 통합**하고 base ★ 는 2 로 두는 것이 적절하다. ④도 골조는 ②·③ 과 같고 「실생활 번역 한 단계」가 더 붙을 뿐이라, 따로 세우기보다 ②③ 유형의 활용 변형(base ★ 2)으로 묶고 「비율·인원 환산」과 「순위·시각 번역」만 하위 태그로 구분하는 편이 카탈로그가 덜 부푼다.
- 반대로 ①과 ⑤는 **따로 세우는 것**을 권한다. ①은 표를 전혀 쓰지 않고 곡선의 모양만으로 결론이 나는 계열이라 ★1 슬롯을 공급할 수 있고, ⑤는 표준화를 「계산 도구」가 아니라 「서로 다른 분포를 잇는 공통 척도」로 쓰는 계열이라 ★3~4 변별 슬롯의 자리다.
- ★4 이상 슬롯을 만들려면 이 단원 안에서는 재료가 모자란다. `160-357` 처럼 **항등식으로 주어진 대칭·평행이동 조건**이나 `158-347` 처럼 **다른 단원(이차방정식·부등식)과의 결합**이 사실상 유일한 상승 경로이므로, 카탈로그에서 이 둘을 ★4 유형으로 명시해 두는 것이 좋다. ★5 는 SC/VF/SYM/XU 요구 때문에 이 단원 단독으로는 어렵고, 17 단원(통계적 추정)과 묶어 설계해야 한다.
