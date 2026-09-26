---
name: mechanism-데이터-GN-PROB-13
description: 개념원리 확률과 통계 13 이산확률변수의 기댓값과 표준편차(1/1 · 124~132쪽 35문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 확률과 통계 · 전사본 latex-bank/gn-prob
  section: 13 이산확률변수의 기댓값과 표준편차
  unit_code: "13"
  part: "1/1"
  extract_range: "124~132쪽 · 124-265~132-293"
  total_problems: 35
  unit_total: 35
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-prob/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-prob/items/<id>.tex
  image_source: latex-bank/gn-prob/figures/ (crops.json)
---

# 개념원리 확률과 통계 · 13 이산확률변수의 기댓값과 표준편차 (1/1) 정독 데이터 (v1.0)

이 파일은 124~132쪽 35문항 전수를 다룬다. 구역은 「개념원리 익히기」 4문 · 「필수·발전 예제」 20문(필수/발전 예제 6문 + 각 예제에 딸린 확인체크 14문) · 「연습문제 STEP 1」 6문 · 「연습문제 STEP 2」 4문 · 「연습문제 실력 UP」 1문이다. 개념원리 고등의 난이도 신호는 구역과 예제 태그다 — 익히기(개념 확인) → ★1 출발, 필수 예제·확인체크 → ★2 출발, 발전 예제 → ★3 출발, STEP 1 → ★2, STEP 2 → ★3, 실력 UP → ★4 출발이며 여기서 M_total·통찰로 ±1 조정했다.

단원 내용은 이산확률변수의 평균 E(X)=Σxp, 분산 V(X)=E(X²)−{E(X)}², 표준편차 σ(X)=√V(X), 그리고 일차변환 E(aX+b)=aE(X)+b · V(aX+b)=a²V(X) · σ(aX+b)=|a|σ(X) 다섯 공식이 전부이며, 문항의 차이는 「확률분포가 표로 주어지는가 / 시행에서 직접 만들어야 하는가」와 「미지수를 어떤 조건으로 결정하는가」에서 나온다. 그래서 이 범위는 절차형이 많고(35문 중 28문) 통찰형은 조건을 압축·역추적하는 STEP 2·실력 UP 쪽에 몰려 있다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 · 통찰 골조를 유지한 변형)를 채웠다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-PROB-124-265
  page: 124
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    표로 주어진 확률변수 $X$의 확률분포에서 ⑴~⑶ $\mathrm{E}(X)$, $\mathrm{V}(X)$, $\sigma(X)$를 차례로 구하기.
  category: "확률분포표 → 평균 → 분산·표준편차"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "확률분포표가 주어진 이산확률변수의 평균·분산·표준편차"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    정의 세 개를 순서대로 적용하는 개념 확인. 미지수도 조건도 없고 표를 읽어 Σxp, Σx²p 만 계산하면 끝난다.
    익히기 구역 출발 ★1 · 통찰 0 · M_total 4 → ★1 유지.
  tier: star_1
  mechanism_primary: "표에서 Σxp → E(X) → Σx²p 로 E(X²) → V(X)=E(X²)−E(X)² → σ(X)=√V(X)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $4$ ⑵ $11$ ⑶ $\sqrt{11}$'
  answer_source: "답지"
  figure: "crop:fig-124-265.png"
  latex: latex-bank/gn-prob/items/124-265.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "표의 X 값과 각 확률을 바꿀 수 있음. 제약: 확률의 합이 1이고 모두 0 이상, V(X)가 정리되는 값이 되도록 X는 정수로 두고 확률은 분모가 같은 분수로."
    creative: "(1) 세 값 중 σ(X)만 묻기(★1 유지) (2) 확률 한 칸을 문자로 두어 합=1 조건을 추가(★2) (3) E(X), V(X)를 주고 표의 X 값을 되묻는 역방향(★2 · I-BW)."
```

```yaml
- id: GN-PROB-124-266
  page: 124
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    동전 $2$개를 동시에 던져 나오는 앞면의 개수를 $X$라 할 때 ⑴ 확률분포표를 완성하고 ⑵ $\mathrm{E}(X)$, $\mathrm{V}(X)$, $\sigma(X)$ 구하기.
  category: "시행 → 확률분포표 작성 → 평균·분산·표준편차"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "시행에서 확률분포표를 만들고 평균·분산·표준편차 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    표본공간 네 가지를 세어 1/4, 1/2, 1/4 를 채운 뒤 정의대로 계산한다. 분포 만들기와 계산이 모두 한 줄씩.
    익히기 구역 ★1 · 통찰 0 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "표본공간 4가지 → P(X=0,1,2)=1/4,1/2,1/4 → E(X)=1 → E(X²)−1 로 V(X) → σ(X)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ 풀이 참조 ($\mathrm{P}(X=0)=\dfrac{1}{4}$, $\mathrm{P}(X=1)=\dfrac{1}{2}$, $\mathrm{P}(X=2)=\dfrac{1}{4}$) ⑵ $\mathrm{E}(X)=1$, $\mathrm{V}(X)=\dfrac{1}{2}$, $\sigma(X)=\dfrac{\sqrt{2}}{2}$'
  answer_source: "답지"
  figure: "crop:fig-124-266.png"
  latex: latex-bank/gn-prob/items/124-266.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "동전 개수를 3개·4개로 늘릴 수 있음. 제약: 분포가 이항계수 nCk/2^n 이므로 개수를 늘리면 Mk 가 올라가고 σ가 무리수로 지저분해짐 — 3개까지가 적당."
    creative: "(1) 주사위 한 개의 눈이 3의 배수인 횟수로 바꾸기(★1 유지) (2) 앞면의 개수 대신 앞면과 뒷면 개수의 차로 두면 X가 음수를 포함해 ★2 (3) 동전 2개를 두 번 던진 총 앞면 수로 확장(★2)."
```

```yaml
- id: GN-PROB-124-267
  page: 124
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    $\mathrm{E}(X)=3$, $\mathrm{V}(X)=4$일 때 ⑴ $Y=2X-1$ ⑵ $Y=-3X+2$의 평균·분산·표준편차 구하기.
  category: "일차변환 공식 E(aX+b)=aE(X)+b · V(aX+b)=a²V(X) 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "aX+b 꼴 확률변수의 평균·분산·표준편차 — E(X), V(X)가 주어진 경우"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    공식 세 개에 a, b를 대입하는 한 줄 문항. ⑵에서 a가 음수라 분산은 a²로 양수, 표준편차는 |a|배라는 부호 함정(T-부호) 하나만 있다.
    익히기 구역 ★1 · 통찰 0 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "E(Y)=aE(X)+b → V(Y)=a²V(X) → σ(Y)=|a|σ(X)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\mathrm{E}(Y)=5$, $\mathrm{V}(Y)=16$, $\sigma(Y)=4$ ⑵ $\mathrm{E}(Y)=-7$, $\mathrm{V}(Y)=36$, $\sigma(Y)=6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/124-267.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "E(X), V(X)와 a, b를 자유롭게 바꿀 수 있음. 제약: V(X)를 제곱수로 두어야 σ가 정수로 떨어지고, a<0 문항을 한 개는 남겨 부호 함정을 유지."
    creative: "(1) Y=(X−3)/2 처럼 분수 계수로 바꾸기(★1~2) (2) E(Y), σ(Y)를 주고 a, b를 되묻는 역방향(★2 · I-BW) (3) V(X)를 직접 주지 않고 σ(X)만 주기(★2)."
```

```yaml
- id: GN-PROB-124-268
  page: 124
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    표로 주어진 확률분포에서 ⑴ $X$의 평균·분산·표준편차 ⑵ $Y=4X-3$의 평균·분산·표준편차 구하기.
  category: "확률분포표 → X의 평균·분산 → 일차변환 공식"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "확률분포표가 주어진 X와 aX+b의 평균·분산·표준편차"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴에서 구한 값을 ⑵의 공식에 그대로 넣는 2단 구성. 평균이 음수·분산이 분수라 계산이 조금 무겁지만(M_total 6) 판단할 것은 없다.
    익히기 구역 ★1 · 통찰 0 → ★1 유지.
  tier: star_1
  mechanism_primary: "표에서 E(X), V(X), σ(X) → E(4X−3)=4E(X)−3 → V=16V(X) → σ=4σ(X)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ 평균: $-\dfrac{1}{2}$, 분산: $\dfrac{1}{2}$, 표준편차: $\dfrac{\sqrt{2}}{2}$ ⑵ 평균: $-5$, 분산: $8$, 표준편차: $2\sqrt{2}$'
  answer_source: "답지"
  figure: "crop:fig-124-268.png"
  latex: latex-bank/gn-prob/items/124-268.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "표의 X 값·확률과 변환 계수 4, −3 을 바꿀 수 있음. 제약: ⑴의 V(X)가 분수면 ⑵에서 a²배가 정수로 떨어지도록 a를 분모의 배수로."
    creative: "(1) ⑵를 Y=−4X+3 으로 바꿔 부호 함정 강화(★1 유지) (2) ⑵의 결과만 주고 a를 되묻기(★2 · I-BW) (3) 표에 문자를 넣어 합=1 조건 추가(★2)."
```

### 필수·발전 예제

```yaml
- id: GN-PROB-125-e4
  page: 125
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    상수 $a$가 들어 있는 확률분포표가 주어질 때 $X$의 평균·분산·표준편차 구하기.
  category: "확률의 총합=1 → 미지수 결정 → 평균·분산·표준편차"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이산확률변수의 평균·분산·표준편차 — 확률분포가 주어진 경우"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    이 단원의 표준 골조. 표에 문자가 있으면 먼저 확률의 총합이 1임을 써서 문자를 없애고, 그 다음에야 정의를 적용한다는 순서가 핵심이다.
    미지수 결정은 표준 절차라 통찰로 세지 않음. 필수 예제 ★2 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "Σp=1 로 a 결정 → E(X)=Σxp → V(X)=E(X²)−E(X)² → σ(X)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '평균: $1$, 분산: $3$, 표준편차: $\sqrt{3}$'
  answer_source: "본문 풀이"
  figure: "crop:fig-125-e4.png"
  latex: latex-bank/gn-prob/items/125-e4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "문자 a가 들어간 칸의 위치와 나머지 확률을 바꿀 수 있음. 제약: 합=1에서 나온 a가 0 이상이어야 하고, 분산이 제곱수가 되면 σ가 정수라 난도가 내려감."
    creative: "(1) 문자를 두 칸에 넣고 평균 조건을 하나 더 주기(★2, 연립) (2) a를 확률이 아니라 X 값에 넣기(★2~3 · 미지수가 E에 선형으로 들어감) (3) V(X) 값을 주고 a를 되묻기(★3 · I-BW)."
```

```yaml
- id: GN-PROB-125-269
  page: 125
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    확률질량함수가 $\mathrm{P}(X=x)=\dfrac{6-x}{a}$ $(x=-1,\,1,\,3,\,5)$로 주어질 때 $X$의 분산 구하기.
  category: "확률질량함수 → 총합=1 로 a 결정 → 분포표 → 분산"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "확률질량함수가 주어진 이산확률변수의 분산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    질량함수 꼴이라 네 값을 대입해 분포표로 옮기는 단계가 하나 더 붙는다. 이후는 합=1 → a, E(X), E(X²) 순의 표준 골조.
    확인체크 ★2 · 통찰 없음 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "x=−1,1,3,5 대입해 분포표 → Σp=1 로 a=16 → E(X) → E(X²) → V(X)=E(X²)−E(X)²"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{55}{16}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/125-269.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자 6−x 의 상수와 x의 값 집합을 바꿀 수 있음. 제약: 모든 x에서 분자가 양수여야 하고, 합이 a가 되므로 a가 정수로 떨어지게 x 집합을 고르기."
    creative: "(1) 분자를 x+2 처럼 증가형으로 바꾸기(★2 유지) (2) 질량함수를 kx² 처럼 이차식으로(★2 · 129-279 와 같은 골조) (3) 분산 대신 E(3X−1)을 묻기(★2 · 일차변환 결합)."
```

```yaml
- id: GN-PROB-125-270
  page: 125
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    확률분포표의 $X$ 값이 $-k,\,0,\,k$이고 확률이 $\dfrac{1}{4},\,\dfrac{1}{4},\,p$일 때, 평균이 $\dfrac{1}{2}$이면 $X$의 표준편차 구하기.
  category: "총합=1 로 p → 평균 조건으로 k → 분산·표준편차"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미지수가 둘인 확률분포표 — 총합과 평균 조건으로 결정 후 표준편차"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    미지수가 확률 p와 X 값 k 두 개라 조건도 둘(합=1, E(X)=1/2)이다. 어느 조건이 어느 미지수를 주는지만 맞추면 되고, 두 식이 연립되지 않고 차례로 풀린다.
    확인체크 ★2 · 통찰 없음 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "Σp=1 로 p=1/2 → E(X)=k/4=1/2 로 k=2 → E(X²)=3 → V=3−1/4 → σ"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{\sqrt{11}}{2}$'
  answer_source: "답지"
  figure: "crop:fig-125-270.png"
  latex: latex-bank/gn-prob/items/125-270.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "앞 두 확률(1/4, 1/4)과 주어진 평균값을 바꿀 수 있음. 제약: p=1−(앞 확률 합) ≥ 0, 평균 조건에서 나온 k가 양수여야 표의 −k<0<k 배치가 유지됨."
    creative: "(1) X 값을 −k, k, 2k 로 비대칭하게 두기(★2~3) (2) 평균 대신 분산 값을 주고 k를 되묻기(★3 · I-BW · 이차식) (3) 세 확률을 모두 문자로 두고 대칭 조건을 추가(★3 · I-SYM)."
```

```yaml
- id: GN-PROB-126-e5
  page: 126
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    흰 공 $2$개와 검은 공 $4$개에서 $2$개를 동시에 꺼낼 때 흰 공의 개수를 $X$라 하고 ⑴ 확률분포표 ⑵ $\mathrm{E}(X)$, $\mathrm{V}(X)$, $\sigma(X)$ 구하기.
  category: "조합으로 확률분포 작성 → 평균·분산·표준편차"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이산확률변수의 평균·분산·표준편차 — 확률분포가 주어지지 않은 경우"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분포가 주어지지 않은 유형의 원형. X가 가질 수 있는 값(0,1,2)을 먼저 정하고 각 확률을 조합으로 계산해 표를 만든 뒤 정의를 적용한다.
    조합 확률 계산은 앞 단원의 표준 도구라 통찰로 세지 않음. 필수 예제 ★2 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "X=0,1,2 각각 C로 확률 계산 → 분포표 → E(X)=2/3 → E(X²)−E(X)² → σ(X)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ 풀이 참조 ($\mathrm{P}(X=0)=\dfrac{2}{5}$, $\mathrm{P}(X=1)=\dfrac{8}{15}$, $\mathrm{P}(X=2)=\dfrac{1}{15}$) ⑵ $\mathrm{E}(X)=\dfrac{2}{3}$, $\mathrm{V}(X)=\dfrac{16}{45}$, $\sigma(X)=\dfrac{4\sqrt{5}}{15}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-prob/items/126-e5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공의 색깔별 개수와 꺼내는 개수를 바꿀 수 있음. 제약: 꺼내는 개수 ≤ 전체, X의 최댓값은 min(흰 공 수, 꺼내는 수)이므로 값의 개수가 3개를 넘으면 Mk 가 급히 올라감."
    creative: "(1) 검은 공의 개수를 묻게 바꾸면 X가 2−(원래 X)라 일차변환 관계가 드러남(★2 · I-RT 후보) (2) 3개를 꺼내 X가 0~2인 초기하로(★2~3) (3) 복원추출로 바꾸면 이항분포 골조(★3 · 다음 단원 연결)."
```

```yaml
- id: GN-PROB-126-271
  page: 126
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    동전 한 개를 세 번 던져 앞면이 나오는 횟수를 $X$라 할 때 $X$의 평균과 표준편차 구하기.
  category: "반복 시행 → 확률분포 작성 → 평균·표준편차"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "반복 시행에서 확률분포를 만들고 평균·표준편차 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    표본공간 8가지에서 1/8, 3/8, 3/8, 1/8 을 얻어 정의대로 계산한다. 분포를 스스로 만들어야 하므로 익히기 문항보다 한 단계 무겁다.
    확인체크 ★2 · 통찰 없음 · M_total 5(−1 후보)지만 분포 작성 단계가 있어 ★2 유지.
  tier: star_2
  mechanism_primary: "P(X=k)=3Ck/8 로 분포표 → E(X)=3/2 → E(X²)=3 → V=3/4 → σ=√3/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '평균: $\dfrac{3}{2}$, 표준편차: $\dfrac{\sqrt{3}}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/126-271.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "던지는 횟수를 2~4회로 바꿀 수 있음. 제약: 4회를 넘으면 분포표가 길어져 계산만 무거워짐(질 저하). 주사위로 바꾸면 확률이 1/2 대신 1/6, 5/6 이 되어 Mk 상승."
    creative: "(1) 앞면 횟수 대신 앞면과 뒷면 횟수의 차로(★2) (2) 세 번 중 앞면이 처음 나오는 순서를 X로(★3 · 분포 작성이 비자명) (3) σ(2X+1)을 묻기(★2 · 일차변환 결합)."
```

```yaml
- id: GN-PROB-126-272
  page: 126
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    불량품 $3$개가 섞인 제품 $10$개에서 $2$개를 동시에 뽑을 때 불량품의 개수 $X$의 평균과 표준편차 구하기.
  category: "조합으로 확률분포 작성 → 평균·표준편차"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이산확률변수의 평균·분산·표준편차 — 확률분포가 주어지지 않은 경우"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    126-e5 와 같은 초기하 골조이고 숫자만 커졌다. 분모 C(10,2)=45 로 통일해 세 확률을 구하면 이후는 정의 계산.
    표준편차가 무리수라 마지막 정리(2√21/15)에서 계산 실수가 나오기 쉽다(T-표기). 확인체크 ★2 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "X=0,1,2 확률을 C로 계산(분모 45) → E(X)=3/5 → E(X²) → V=28/75 → σ"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '평균: $\dfrac{3}{5}$, 표준편차: $\dfrac{2\sqrt{21}}{15}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/126-272.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "전체 개수·불량품 수·뽑는 개수를 바꿀 수 있음. 제약: 분산이 지나치게 지저분해지지 않도록 전체를 10 이하로 유지하고, 뽑는 개수는 불량품 수 이하로 두어 X의 값이 3개를 넘지 않게."
    creative: "(1) 불량품이 아닌 정상품 개수를 묻게 바꾸기(★2 · 일차변환) (2) 2개를 차례로 비복원 추출해 순서를 따지게(★2~3) (3) 불량품이 1개 이상일 확률과 묶어 물어 여사건을 쓰게(★3 · I-SC)."
```

```yaml
- id: GN-PROB-126-273
  page: 126
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $1$~$5$이 적힌 $5$장의 카드에서 $3$장을 동시에 뽑을 때 홀수 카드의 개수 $X$의 표준편차 구하기.
  category: "조합으로 확률분포 작성 → 분산 → 표준편차"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이산확률변수의 평균·분산·표준편차 — 확률분포가 주어지지 않은 경우"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    홀수 3장·짝수 2장이므로 3장을 뽑으면 X는 1,2,3 만 가능하다. X=0 이 불가능하다는 범위 판단(T-범위)이 유일한 함정이고 나머지는 초기하 계산.
    확인체크 ★2 · 통찰 없음 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "X는 1,2,3 만 가능 → 각 확률을 C로(분모 10) → E(X)=9/5 → V=9/25 → σ=3/5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{3}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/126-273.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "카드 장수와 뽑는 장수를 바꿀 수 있음. 제약: X의 최솟값이 max(0, 뽑는 수 − 짝수 카드 수)로 정해지므로 범위 함정을 살리려면 뽑는 수 > 짝수 카드 수로 유지."
    creative: "(1) 3의 배수가 적힌 카드 개수로 바꾸기(★2) (2) 뽑은 카드에 적힌 수의 합을 X로(★3 · 131-288 골조) (3) X=1일 확률을 함께 물어 범위 판단을 명시적으로(★2)."
```

```yaml
- id: GN-PROB-127-e6
  page: 127
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["발전"]
  category_type: "발전 예제"
  summary: |
    동전을 두 번 던져 앞면마다 $100$원, 뒷면마다 $20$원을 받을 때 한 번의 게임에서 받는 상금의 기댓값 구하기.
  category: "상금을 확률변수로 정의 → 확률분포 → 기댓값"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "상금의 기댓값 — 시행 결과에 금액을 대응시키는 경우"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    기댓값 개념의 도입 문항. 앞면 개수 X에 상금 100X+20(2−X)=80X+40 을 대응시키거나, 세 경우(200/120/40원)의 확률을 바로 곱해 더하면 끝난다.
    뒷면에도 상금이 있다는 조건을 놓치는 함정(T-범위) 하나뿐이고 계산은 한 줄. 벤더 「발전」 출발 ★3 이나 통찰 0·M_total 5 → −1 하여 ★2. [분류 이슈] 벤더 발전 라벨과 1단 차이 — 기록만.
  tier: star_2
  mechanism_primary: "앞면 개수 X의 분포(1/4,1/2,1/4) → 상금 80X+40 → E=80·1+40=120원"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$120$원'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-prob/items/127-e6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상금 100원·20원과 던지는 횟수를 바꿀 수 있음. 제약: 상금이 앞면 수의 일차식이 되도록 '앞면마다/뒷면마다' 구조를 유지하면 E가 한 줄로 나옴."
    creative: "(1) 참가비를 두고 순이익의 기댓값을 묻기(★3 · 부호 판단) (2) 앞면이 두 번 연속일 때만 보너스를 주면 상금이 X의 일차식이 아니게 되어 ★3 (3) 기댓값이 주어진 값이 되도록 상금을 정하게 하면 ★3 · I-BW."
```

```yaml
- id: GN-PROB-127-274
  page: 127
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    노란 공 $3$개·파란 공 $2$개에서 $2$개를 꺼내 노란 공 $1$개당 $250$원, 파란 공 $1$개당 $500$원을 받을 때 상금의 기댓값 구하기.
  category: "조합으로 확률분포 → 상금 대응 → 기댓값"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "상금의 기댓값 — 꺼낸 개수에 금액을 대응시키는 경우"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    파란 공 개수 X(0,1,2)의 확률을 조합으로 구하고 상금 500+250X 를 대응시킨다. 두 색 모두 상금이 있어 총액이 X의 일차식이 되는 구조.
    확인체크 ★2 · 통찰 없음 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "파란 공 개수 X의 분포를 C로 → 상금 250(2−X)+500X=500+250X → E=500+250·E(X)=700원"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$700$원'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/127-274.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공의 개수와 두 금액을 바꿀 수 있음. 제약: 총액이 X의 일차식이 되려면 색마다 '1개당' 금액 구조를 유지해야 하고, 금액 차가 클수록 분산형 확장에 유리."
    creative: "(1) 상금의 분산까지 묻기(★3 · V(aX+b)) (2) 같은 색 2개일 때만 보너스를 주면 일차식이 깨져 ★3 (3) 기댓값이 특정 금액이 되도록 파란 공 금액을 정하게 하기(★3 · I-BW)."
```

```yaml
- id: GN-PROB-127-275
  page: 127
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    주사위를 한 번 던져 홀수면 그 수의 $200$배, 짝수면 그 수의 $100$배를 받을 때 상금의 기댓값 구하기.
  category: "경우별 상금 나열 → 각 1/6 → 기댓값"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "상금의 기댓값 — 홀짝에 따라 규칙이 갈리는 경우"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    상금이 눈의 수의 일차식이 아니라 홀짝으로 규칙이 갈리므로 여섯 경우를 모두 적어야 한다(200,200,600,400,1000,600).
    분기가 있지만 각 경우가 독립 시나리오를 만들지는 않아 통찰로 세지 않음. 확인체크 ★2 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "눈 1~6 각각의 상금을 나열 → 각 확률 1/6 → 합 3000/6=500원"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$500$원'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/127-275.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "배수 200·100과 홀짝 기준을 바꿀 수 있음(3의 배수 여부 등). 제약: 여섯 경우의 합이 6의 배수가 되게 두면 기댓값이 정수."
    creative: "(1) 3의 배수면 500배, 아니면 100배로 기준을 바꾸기(★2 유지) (2) 상금의 표준편차까지 묻기(★3 · 계산량 증가) (3) 주사위를 두 번 던져 눈의 합으로 규칙을 정하면 분포 작성이 추가돼 ★3."
```

```yaml
- id: GN-PROB-128-e7
  page: 128
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    평균 $0$·분산 $1$인 $X$에 대하여 $Y=aX+b$의 평균이 $5$, 분산이 $100$일 때 ($a>0$) $a-b$의 값 구하기.
  category: "일차변환 공식 역방향 → a, b 결정"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "aX+b 꼴 확률변수의 평균·분산 — E(X), V(X)가 주어진 경우"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    E(X)=0, V(X)=1 이라 E(Y)=b, V(Y)=a² 로 곧장 b=5, a=±10 이 나오고 a>0 조건으로 a=10 을 택한다.
    미정계수 대입 수준이라 역방향 통찰로 세지 않음. 필수 예제 ★2 · a>0 조건(T-부호) 하나 → ★2.
  tier: star_2
  mechanism_primary: "E(Y)=aE(X)+b=b=5 → V(Y)=a²V(X)=a²=100 → a>0 으로 a=10 → a−b=5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$5$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-prob/items/128-e7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "E(Y), V(Y) 값과 부호 조건을 바꿀 수 있음. 제약: V(Y)/V(X)가 제곱수여야 a가 유리수로 떨어지고, a<0 으로 두면 a−b 의 부호 함정이 강해짐."
    creative: "(1) E(X), V(X)를 0, 1 이 아닌 값으로 두면 연립이 필요해 ★2~3 (2) a+b 대신 ab를 묻기(★2) (3) Y의 표준편차만 주고 a를 묻되 절댓값 처리를 요구(★3 · T-부호)."
```

```yaml
- id: GN-PROB-128-276
  page: 128
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $\mathrm{E}(-2X+3)=1$, $\sigma(X)=2$일 때 $\mathrm{E}(X^2)$ 구하기.
  category: "일차변환으로 E(X) → V(X)=E(X²)−E(X)² 를 역으로 사용"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "분산 공식을 E(X²)=V(X)+{E(X)}² 로 뒤집어 쓰는 동치 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "E(X²)를 분산 공식으로 되돌려 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    E(−2X+3)=−2E(X)+3=1 에서 E(X)=1, σ(X)=2 에서 V(X)=4. 여기서 학생이 분산 정의를 그대로 쓰지 않고 E(X²)=V(X)+{E(X)}² 로 뒤집어야 한다는 점이 이 문항의 전부다.
    통찰 1개(EQV d1) · 확인체크 ★2 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "E(−2X+3)=1 로 E(X)=1 → σ(X)=2 로 V(X)=4 → E(X²)=V(X)+E(X)²=5"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/128-276.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차변환 계수와 σ(X) 값을 바꿀 수 있음. 제약: E(X)가 정수로 떨어지도록 주어진 값을 계수의 배수로 맞추고, σ를 주면 제곱해야 V가 된다는 단계를 유지."
    creative: "(1) V(X) 대신 V(3X−1)을 주기(★2 유지) (2) E(X²)와 E(X)를 주고 σ(aX+b)를 묻는 역방향(★2) (3) E((X−k)²) 꼴로 바꾸면 전개 단계가 하나 더 붙어 ★2~3(131-285 골조)."
```

```yaml
- id: GN-PROB-128-277
  page: 128
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $\mathrm{E}(X)=5$, $\mathrm{E}(X^2)=125$이고 $Y=aX+b$에 대하여 $\mathrm{E}(Y)=42$, $\mathrm{V}(Y)=16$일 때 ($a>0$) 상수 $b$의 값 구하기.
  category: "E(X²)로 V(X) → V(Y)=a²V(X)로 a → E(Y)로 b"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "aX+b 꼴 확률변수의 평균·분산 — E(X), V(X)가 주어진 경우"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    V(X)=125−25=100 을 먼저 만들고 V(Y)=a²·100=16 에서 a>0 으로 a=2/5, 다시 E(Y)=5a+b=42 에서 b=40. 순서가 분산 먼저·평균 나중으로 고정된다는 점만 알면 일직선.
    확인체크 ★2 · 통찰 없음 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "V(X)=E(X²)−E(X)²=100 → a²·100=16, a>0 으로 a=2/5 → 5a+b=42 → b=40"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$40$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/128-277.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "E(X), E(X²), E(Y), V(Y)를 바꿀 수 있음. 제약: V(Y)/V(X)가 제곱수여야 a가 유리수, E(X²)>E(X)² 여야 분산이 양수."
    creative: "(1) a<0 으로 바꾸고 a+b를 묻기(★2~3 · 132-292 골조) (2) b를 먼저 주고 a를 묻기(★2) (3) σ(Y)를 주면 제곱 단계가 하나 더 붙어 ★2."
```

```yaml
- id: GN-PROB-128-278
  page: 128
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    소매 가격 $Y=\dfrac{5}{4}X+300$이고 도매 가격 $X$의 평균이 $4320$, 표준편차가 $100$일 때 $Y$의 평균과 표준편차 구하기.
  category: "실생활 일차관계 → E(aX+b), σ(aX+b) 공식 대입"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "aX+b 꼴 확률변수의 평균·표준편차 — 실생활 일차관계"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    변환식이 문제에 그대로 주어져 있어 공식 두 개에 대입만 하면 된다. 표준편차는 상수항 300 에 영향받지 않고 5/4 배만 된다는 점(T-표기)이 유일한 확인 지점.
    확인체크 출발 ★2 이나 통찰 0·M_total 5 → −1 하여 ★1. 숫자가 커 계산만 무겁다.
  tier: star_1
  mechanism_primary: "E(Y)=(5/4)·4320+300=5700 → σ(Y)=(5/4)·100=125"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '평균: $5700$, 표준편차: $125$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/128-278.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 5/4·상수 300·평균 4320·표준편차 100 을 바꿀 수 있음. 제약: 평균이 계수의 분모로 나누어떨어져야 정수로 떨어짐."
    creative: "(1) 분산을 묻게 바꿔 a²배를 확인시키기(★1~2) (2) Y의 평균·표준편차를 주고 관계식의 계수를 되묻기(★2 · I-BW) (3) 환율·수수료처럼 변환을 두 번 거치게 하면 합성 일차변환으로 ★2."
```

```yaml
- id: GN-PROB-129-e8
  page: 129
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    상수 $a$가 들어 있는 확률분포표가 주어질 때 $Y=4X-5$의 평균·분산·표준편차 구하기.
  category: "총합=1 로 a → X의 평균·분산 → 일차변환 공식"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "aX+b 꼴 확률변수의 평균·분산·표준편차 — 확률분포가 주어진 경우"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    125-e4 골조에 일차변환 한 겹을 더한 필수 예제. Y를 새 확률변수로 보고 분포표를 다시 만드는 대신 X의 평균·분산을 구해 공식에 넣는 것이 정답 경로다.
    필수 예제 ★2 · 통찰 없음 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "Σp=1 로 a 결정 → E(X), V(X) → E(Y)=4E(X)−5 → V(Y)=16V(X) → σ(Y)=4σ(X)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '평균: $-3$, 분산: $20$, 표준편차: $2\sqrt{5}$'
  answer_source: "본문 풀이"
  figure: "crop:fig-129-e8.png"
  latex: latex-bank/gn-prob/items/129-e8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "표의 값·확률과 변환 계수 4, −5 를 바꿀 수 있음. 제약: 합=1 에서 나온 a가 0 이상이어야 하고, V(X)가 분수면 a²배가 정수가 되도록 계수를 분모의 배수로."
    creative: "(1) Y=−4X+5 로 두어 σ의 절댓값 처리를 요구(★2 유지) (2) E(Y), V(Y)를 주고 표의 문자를 되묻기(★3 · I-BW) (3) Y를 직접 분포표로 만들어 비교하게 하면 두 경로 비교라 ★3 · I-SC."
```

```yaml
- id: GN-PROB-129-279
  page: 129
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    확률질량함수가 $\mathrm{P}(X=x)=kx^2$ $(x=1,\,2,\,3,\,4)$일 때 $\mathrm{E}(-9X-2)$ 구하기.
  category: "총합=1 로 k → E(X) → 일차변환 공식"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "확률질량함수가 주어진 확률변수의 aX+b 평균"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    k(1+4+9+16)=1 에서 k=1/30, E(X)=Σx·kx²=k·100=10/3. 분산이 아니라 평균만 필요하므로 E(−9X−2)=−9E(X)−2 한 줄로 끝난다.
    확인체크 ★2 · 통찰 없음 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "Σkx²=1 로 k=1/30 → E(X)=Σx·kx²=10/3 → E(−9X−2)=−9·(10/3)−2=−32"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-32$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/129-279.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "질량함수의 꼴(kx, kx², k/x)과 x의 범위, 변환 계수를 바꿀 수 있음. 제약: Σ가 간단한 정수여야 k가 깔끔하고, 계수 −9 처럼 분모를 상쇄하는 값을 고르면 답이 정수."
    creative: "(1) V(−9X−2)를 묻기(★2~3 · E(X²)=Σx²·kx² 단계 추가) (2) x 범위를 1~n 으로 일반화하면 Σ 공식이 필요해 ★3 · I-PD (3) k를 주고 x 범위를 되묻기(★3 · I-BW)."
```

```yaml
- id: GN-PROB-129-280
  page: 129
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    상수 $a$가 들어 있는 확률분포표가 주어질 때 $Y=2X+1$의 평균·분산·표준편차 구하기.
  category: "총합=1 로 a → X의 평균·분산 → 일차변환 공식"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "aX+b 꼴 확률변수의 평균·분산·표준편차 — 확률분포가 주어진 경우"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    129-e8 과 같은 골조의 확인체크. 표의 문자를 합=1 로 없애고 X의 평균·분산을 구한 뒤 a=2, b=1 을 공식에 대입한다.
    확인체크 ★2 · 통찰 없음 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "Σp=1 로 a 결정 → E(X), V(X) → E(Y)=2E(X)+1 → V(Y)=4V(X) → σ(Y)=2σ(X)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '평균: $\dfrac{1}{2}$, 분산: $\dfrac{11}{4}$, 표준편차: $\dfrac{\sqrt{11}}{2}$'
  answer_source: "답지"
  figure: "crop:fig-129-280.png"
  latex: latex-bank/gn-prob/items/129-280.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "표의 값·확률과 변환 계수 2, 1 을 바꿀 수 있음. 제약: 합=1 에서 나온 확률이 모두 0 이상, V(X)가 분수일 때 a²배가 정리되도록 계수를 고르기."
    creative: "(1) Y=2X+1 과 Z=−2X+1 의 분산을 비교하게 하기(★2 · 부호 무관 확인) (2) σ(Y) 값을 주고 표의 문자를 되묻기(★3 · I-BW) (3) X와 Y의 분포표를 모두 그리게 해 대응을 보이기(★2)."
```

```yaml
- id: GN-PROB-130-e9
  page: 130
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    합격품 $2$개가 포함된 제품 $4$개에서 $2$개를 동시에 뽑을 때 합격품의 개수 $X$에 대하여 $\mathrm{E}(3X+2)$, $\mathrm{V}(-3X+2)$ 구하기.
  category: "조합으로 확률분포 작성 → 평균·분산 → 일차변환 공식"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "aX+b 꼴 확률변수의 평균·분산 — 확률분포가 주어지지 않은 경우"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분포를 직접 만들어야 하는 유형과 일차변환을 합친 필수 예제. V(−3X+2)에서 계수가 음수여도 분산은 9배라는 점(T-부호)이 확인 지점이다.
    필수 예제 ★2 · 통찰 없음 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "X=0,1,2 확률을 C로(분모 6) → E(X)=1, V(X)=1/3 → E(3X+2)=5, V(−3X+2)=9V(X)=3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\mathrm{E}(3X+2)=5$, $\mathrm{V}(-3X+2)=3$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-prob/items/130-e9.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "제품 수·합격품 수·뽑는 개수와 변환 계수를 바꿀 수 있음. 제약: V(X)가 분수이므로 a²V(X)가 정수가 되도록 a를 분모의 약수 배수로 고르면 답이 깔끔."
    creative: "(1) 불합격품 개수를 Y로 두고 X+Y=2 관계를 쓰게 하기(★2 · I-RT) (2) σ(−3X+2)를 묻기(★2) (3) 뽑는 개수를 3으로 늘려 값이 네 개가 되게(★3 · 계산량 증가)."
```

```yaml
- id: GN-PROB-130-281
  page: 130
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    흰 공 $4$개·검은 공 $3$개에서 $3$개를 동시에 꺼낼 때 검은 공의 개수 $X$에 대하여 $\mathrm{E}(7X-2)$ 구하기.
  category: "조합으로 확률분포 작성 → 평균 → 일차변환"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "aX+b 꼴 확률변수의 평균 — 확률분포가 주어지지 않은 경우"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    X=0,1,2,3 네 값의 확률을 C(7,3)=35 로 통일해 구한 뒤 E(X)=9/7 을 얻고 E(7X−2)=7E(X)−2=7. 분산이 필요 없어 E(X)까지만 가면 된다.
    확인체크 ★2 · 통찰 없음 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "X=0~3 확률을 C로(분모 35) → E(X)=9/7 → E(7X−2)=7·(9/7)−2=7"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/130-281.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공의 개수와 꺼내는 개수, 변환 계수를 바꿀 수 있음. 제약: E(X)의 분모와 계수 7이 약분되게 두면 답이 정수. 꺼내는 개수가 검은 공 수보다 크면 X의 최솟값이 0이 아니게 되니 주의."
    creative: "(1) V(7X−2)를 묻기(★2~3 · E(X²) 추가) (2) 흰 공 개수 Y=3−X 로 바꿔 물어 일차관계를 드러내기(★2 · I-RT) (3) 검은 공이 1개 이상일 조건을 붙이면 조건부확률 결합으로 ★3 · I-XU."
```

```yaml
- id: GN-PROB-130-282
  page: 130
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    주사위를 던져 나온 눈의 수의 양의 약수의 개수를 $X$라 할 때 $\sigma(-6X+5)$ 구하기.
  category: "약수의 개수로 확률변수 정의 → 분포 작성 → 표준편차 → 일차변환"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "aX+b 꼴 확률변수의 표준편차 — 확률분포가 주어지지 않은 경우"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    1~6 의 약수의 개수를 1,2,2,3,2,4 로 먼저 바꾸는 단계가 있어 분포 작성이 한 겹 더 두껍다(X=2 의 확률이 3/6). 이후는 V(X)=8/9, σ(−6X+5)=6σ(X).
    계수가 음수여도 표준편차는 |a|배(T-부호). 확인체크 ★2 · 통찰 없음 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "눈 1~6 → 약수 개수 1,2,2,3,2,4 → X 분포(1:1/6, 2:1/2, 3:1/6, 4:1/6) → V(X)=8/9 → σ(−6X+5)=6σ(X)=4√2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4\sqrt{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/130-282.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "대응 규칙(약수의 개수 → 소인수의 개수, 6과의 최대공약수 등)과 변환 계수를 바꿀 수 있음. 제약: σ(X)가 무리수면 계수를 분모의 배수로 두어야 답이 정리됨."
    creative: "(1) 눈의 수와 6의 최대공약수를 X로(★2 유지) (2) 주사위 두 개의 눈의 곱의 약수의 개수로(★4 · 분포 작성이 크게 무거워짐) (3) V(−6X+5)=k 가 되도록 계수를 정하게 하기(★3 · I-BW)."
```

### 연습문제 STEP 1

```yaml
- id: GN-PROB-131-283
  page: 131
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    상수 $a$, $b$가 들어 있는 확률분포표에서 $X$의 평균이 $3$일 때 $X$의 표준편차 구하기.
  category: "총합=1 과 평균 조건 연립 → a, b → 분산·표준편차"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미지수가 둘인 확률분포표 — 총합과 평균 조건으로 결정 후 표준편차"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    미지수가 둘이므로 이번에는 합=1 과 E(X)=3 두 식을 실제로 연립해야 한다(125-270 은 차례로 풀렸다). 이후는 E(X²)−9 로 분산.
    STEP 1 출발 ★2 · 통찰 없음 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "Σp=1 과 Σxp=3 을 a, b 에 대해 연립 → 분포 확정 → V(X)=E(X²)−9 → σ(X)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{\sqrt{30}}{5}$'
  answer_source: "답지"
  figure: "crop:fig-131-283.png"
  latex: latex-bank/gn-prob/items/131-283.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "표의 X 값과 주어진 평균을 바꿀 수 있음. 제약: 연립의 해 a, b가 모두 0 이상 1 이하여야 하고, 평균값을 X 값들의 범위 안에서 골라야 해가 존재."
    creative: "(1) 평균 대신 P(X≥k) 조건을 주기(★2~3) (2) 분산 값을 주고 평균을 되묻기(★3 · 이차식·I-BW) (3) 미지수를 셋으로 늘리고 조건을 하나 더 주기(★3)."
```

```yaml
- id: GN-PROB-131-284
  page: 131
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    빨간 구슬 $3$개·파란 구슬 $2$개에서 $2$개를 동시에 꺼낼 때 파란 구슬의 개수 $X$의 분산 구하기.
  category: "조합으로 확률분포 작성 → 분산"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이산확률변수의 분산 — 확률분포가 주어지지 않은 경우"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    126-e5·126-272 와 같은 초기하 골조. 분모 C(5,2)=10 으로 세 확률을 구하고 E(X)=4/5, E(X²)=1 에서 V=9/25.
    STEP 1 ★2 · 통찰 없음 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "X=0,1,2 확률을 C로(분모 10) → E(X)=4/5 → E(X²)=1 → V(X)=1−16/25=9/25"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{9}{25}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/131-284.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구슬 개수와 꺼내는 개수를 바꿀 수 있음. 제약: V가 지나치게 지저분해지지 않도록 전체를 7개 이하로 두고, 답을 제곱수/제곱수 꼴로 만들려면 분모를 10, 25 처럼 고르기."
    creative: "(1) 빨간 구슬 개수로 바꿔 물어 X와의 일차관계를 확인(★2) (2) σ(5X−1)을 묻기(★2) (3) 두 번 비복원으로 꺼내되 순서를 따지게 하기(★3)."
```

```yaml
- id: GN-PROB-131-285
  page: 131
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $\mathrm{E}(X)=2$, $\mathrm{V}(X)=7$일 때 $\mathrm{E}((X-3)^2)$ 구하기.
  category: "제곱 전개 → E의 선형성 → E(X²)=V+E² 대입"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "E((X−3)²)를 E(X²)−6E(X)+9 로 전개하고 E(X²)=V(X)+{E(X)}² 로 되돌려 쓰는 동치 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "E((X−k)²) 꼴의 값 — 분산 공식 되돌려 쓰기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (X−3)²를 새 확률변수로 보고 분포를 만들 수는 없으니, 전개해서 기댓값의 선형성으로 쪼갠 뒤 E(X²)=V+E²=11 을 넣는 것이 유일한 경로다.
    E((X−3)²)를 V(X−3)=7 로 착각하는 함정(평균이 3이 아니므로 다름)이 이 문항의 핵심. 통찰 1개(EQV d1) · STEP 1 ★2 → ★2.
  tier: star_2
  mechanism_primary: "E((X−3)²)=E(X²)−6E(X)+9 → E(X²)=V+E²=11 → 11−12+9=8"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/131-285.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "E(X), V(X)와 빼는 상수 3을 바꿀 수 있음. 제약: 상수를 E(X)와 다르게 두어야 V와 구별되는 함정이 살아 있고, 상수를 E(X)와 같게 두면 답이 곧 V라 ★1로 내려감."
    creative: "(1) E((2X−1)²)처럼 계수를 붙이기(★2~3) (2) E((X−k)²)가 최소가 되는 k를 묻기(★3 · I-BW · 답은 k=E(X)) (3) E((X−3)²)를 주고 V(X)를 되묻는 역방향(★2)."
```

```yaml
- id: GN-PROB-131-286
  page: 131
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    원점수 $X$의 평균이 $m$, 표준편차가 $\sigma$일 때 표준 점수 $T=10\times\dfrac{X-m}{\sigma}+50$의 평균과 표준편차 구하기.
  category: "추상 매개변수 일차식 정리 → E(aX+b), σ(aX+b)"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "T를 (10/σ)X + (50−10m/σ) 꼴의 aX+b 로 정리해 공식을 쓸 수 있는 형태로 바꿈"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "표준 점수(표준화) 확률변수의 평균·표준편차"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    수치가 하나도 없고 m, σ 가 문자라 T를 먼저 aX+b 꼴로 정리해야 공식이 보인다(Mₐ 3). 정리하고 나면 a=10/σ, b=50−10m/σ 를 대입해 평균 50·표준편차 10 이 문자와 무관하게 나온다.
    표준화의 의미를 확인시키는 문항. 통찰 1개(EQV d1) · STEP 1 ★2 → ★2.
  tier: star_2
  mechanism_primary: "T=(10/σ)X+(50−10m/σ) → E(T)=(10/σ)m+50−10m/σ=50 → σ(T)=(10/σ)·σ=10"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '평균: $50$, 표준편차: $10$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/131-286.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "표준 점수의 기준값 50·배수 10 을 바꿀 수 있음(T 점수 대신 Z 점수면 0과 1). 제약: 형태가 a(X−m)/σ+b 를 유지해야 답이 b와 a로 고정됨."
    creative: "(1) m, σ 에 구체 수치를 주고 특정 원점수의 표준 점수를 묻기(★2 · Mₐ 하락) (2) 두 과목의 표준 점수를 비교하게 하기(★3) (3) T의 분산이 100임을 이용해 역으로 σ를 구하게 하기(★3 · I-BW)."
```

```yaml
- id: GN-PROB-131-287
  page: 131
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제"
  summary: |
    확률분포표가 $X=-3,\,0,\,a$에 확률 $\dfrac{1}{2},\,\dfrac{1}{4},\,\dfrac{1}{4}$로 주어지고 $\mathrm{E}(X)=-1$일 때 $\mathrm{V}(aX)$의 값. 5지선다.
  category: "평균 조건으로 a → V(X) → V(aX)=a²V(X)"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "aX+b 꼴 확률변수의 분산 — 확률분포가 주어진 경우"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    확률은 모두 주어져 있으므로 합=1 은 쓸 일이 없고 E(X)=−1 이 곧바로 a=2 를 준다. 이 문항의 함정은 문자 a가 표의 X 값이면서 동시에 V(aX)의 배율로 다시 쓰인다는 점(T-표기)이다.
    교육청 기출이지만 통찰 없이 계산만으로 끝나 +0. STEP 1 ★2 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "E(X)=−3/2+a/4=−1 로 a=2 → V(X)=E(X²)−1=9/2 → V(aX)=a²V(X)=4·(9/2)=18"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: "crop:fig-131-287.png"
  latex: latex-bank/gn-prob/items/131-287.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "표의 값 −3, 0 과 확률, 주어진 평균을 바꿀 수 있음. 제약: E 조건에서 나온 a가 양의 정수여야 V(aX)가 선택지로 쓸 만한 값이 되고, a가 음수여도 분산은 a²라 답은 같음."
    creative: "(1) V(aX+a)를 묻어 상수항이 분산과 무관함을 확인(★2 유지) (2) σ(aX)를 물으면 |a| 처리가 필요해 ★2~3 (3) V(aX)=18 이 되도록 표의 확률을 정하게 하는 역방향(★3 · I-BW)."
```

```yaml
- id: GN-PROB-131-288
  page: 131
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $1$이 적힌 카드 $1$장, $2$가 적힌 카드 $2$장, $3$이 적힌 카드 $3$장에서 $2$장을 뽑을 때 두 수의 합 $X$에 대하여 $\sigma(-9X+5)$ 구하기.
  category: "같은 수 카드 중복 → 합의 확률분포 작성 → 표준편차 → 일차변환"
  M: {s: 3, k: 3, a: 1, t: 1}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "aX+b 꼴 확률변수의 표준편차 — 두 장의 수의 합이 확률변수인 경우"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    같은 수가 적힌 카드가 여러 장이라 X=4 가 (1,3)과 (2,2) 두 가지에서 나오는 등, 합이 같은 조합을 모아 분모 C(6,2)=15 로 세어야 한다. 분포만 정확히 만들면 나머지는 표준 계산.
    분기가 독립 시나리오를 만들지 않아 통찰로 세지 않았다. STEP 1 ★2 이나 M_total 8 로 이 구역에서 가장 무겁다. [분류 이슈] 노동량만 보면 ★3 후보.
  tier: star_2
  mechanism_primary: "X=3,4,5,6 의 경우의 수 2,4,6,3(분모 15) → E(X)=14/3, E(X²)=68/3 → V=8/9 → σ(−9X+5)=9σ(X)=6√2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$6\sqrt{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/131-288.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "카드에 적힌 수와 장수 구성(1장·2장·3장)을 바꿀 수 있음. 제약: 장수가 늘면 X의 값이 많아져 계산만 무거워지므로 전체 6~7장 유지. 계수 −9 는 σ(X)의 분모 3을 상쇄하려고 고른 값."
    creative: "(1) 두 수의 곱을 X로(★3 · 값이 흩어져 분포가 길어짐) (2) 두 수의 차의 절댓값으로(★3 · 0이 생김) (3) 3장을 뽑아 합으로 확장(★4 · 실력 UP 수준)."
```

### 연습문제 STEP 2

```yaml
- id: GN-PROB-132-289
  page: 132
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    확률분포표가 $X=1,\,2,\,3$에 확률 $b,\,\dfrac{1}{4},\,a$로 주어질 때 $X$의 분산이 최대가 되도록 하는 상수 $a$의 값 구하기.
  category: "총합=1 로 b 소거 → V를 a의 이차식으로 → 꼭짓점"
  M: {s: 3, k: 3, a: 2, t: 2}
  M_total: 10
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "확률분포의 분산을 미지수 a에 대한 이차함수로 바꿔 보는 표현 전환"
    - step: 3
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'분산이 최대가 되도록 하는 a'라는 결과 조건에서 꼭짓점을 역추적하고 0 ≤ a ≤ 3/4 범위 안인지 확인"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "확률분포의 분산이 최대가 되는 미지수 값 — 이차함수 최댓값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    합=1 로 b=3/4−a 를 넣으면 E(X)=5/4+2a, E(X²)=7/4+8a 가 되어 V(a)가 a의 이차식이 된다. 여기서부터는 공통수학1의 이차함수 최댓값 문제로 바뀐다.
    확률이므로 0 ≤ a ≤ 3/4 라는 정의역 제약(T-범위)을 함께 봐야 하고, 꼭짓점이 그 안에 있어 a=3/8.
    [분류 이슈] 통찰 2개라 +1 후보이나 이차함수 최댓값은 이전 학년의 표준 도구라 STEP 2 출발 ★3 을 유지했다.
  tier: star_3
  mechanism_primary: "Σp=1 로 b=3/4−a → E(X), E(X²)를 a로 → V(a)=7/4+8a−(5/4+2a)² 의 꼭짓점 → a=3/8"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{3}{8}$'
  answer_source: "답지"
  figure: "crop:fig-132-289.png"
  latex: latex-bank/gn-prob/items/132-289.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "고정된 확률 1/4 과 X 값 1,2,3 을 바꿀 수 있음. 제약: 꼭짓점의 a가 0 ≤ a ≤ (1−고정확률) 안에 들어와야 최댓값이 꼭짓점에서 나온다. 벗어나면 끝점 판단이 추가돼 ★4."
    creative: "(1) 분산이 최소가 되는 a를 묻기(★3 유지) (2) 고정 확률을 없애고 미지수를 둘로 두면 제약조건 최적화라 ★4 (3) 평균이 최대가 되게 하면 일차식이라 끝점에서 결정돼 ★3 · T-범위 강조."
```

```yaml
- id: GN-PROB-132-290
  page: 132
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["평가원 기출"]
  category_type: "연습문제"
  summary: |
    $X$가 $0$부터 $4$까지의 정수이고 $\mathrm{P}(X=k)=\mathrm{P}(X=k+2)$ $(k=0,1,2)$이며 $\mathrm{E}(X^2)=\dfrac{35}{6}$일 때 $\mathrm{P}(X=0)$의 값. 5지선다.
  category: "반복 등식으로 확률을 두 덩어리로 압축 → 총합·E(X²) 연립"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "k=0,1,2 세 등식을 P(X=0)=P(X=2)=P(X=4)=p, P(X=1)=P(X=3)=q 라는 두 미지수 구조로 통합"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "확률 사이의 관계식이 주어진 이산확률변수 — 미지수 압축 후 연립"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    다섯 개의 확률을 그대로 두면 미지수가 다섯이지만, 주어진 등식을 한 번에 읽어 짝수 자리끼리·홀수 자리끼리 같다는 두 덩어리로 묶으면 미지수가 둘로 줄어든다. 이 압축이 문항의 전부다.
    이후는 3p+2q=1 과 E(X²)=20p+10q=35/6 을 연립. 통찰 1개(CON d2) · STEP 2 ★3 · 평가원 기출이나 압축 후가 단순해 +0 → ★3.
  tier: star_3
  mechanism_primary: "관계식 → p=P(0)=P(2)=P(4), q=P(1)=P(3) → 3p+2q=1 · 20p+10q=35/6 연립 → p=1/6"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/132-290.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "X의 범위(0~4)와 주어진 E(X²) 값을 바꿀 수 있음. 제약: 연립의 해 p, q가 모두 0 이상이어야 하고, 범위를 0~5 로 늘리면 덩어리가 달라져 압축 구조가 바뀜."
    creative: "(1) 조건을 P(X=k)=2P(X=k+1) 처럼 등비로 바꾸기(★3~4 · I-PD) (2) E(X²) 대신 V(X)를 주기(★3 유지) (3) P(X=0)이 아니라 E(X)를 묻기(★3 · 대칭성으로 E(X)=2 가 바로 보임 · I-SYM)."
```

```yaml
- id: GN-PROB-132-291
  page: 132
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    상자 A($10000$원권 $3$장·$5000$원권 $2$장)와 상자 B($10000$원권 $4$장·$5000$원권 $1$장) 중 임의로 한 상자를 골라 상품권 $2$장을 꺼낼 때 총액의 기댓값 구하기.
  category: "상자 선택 확률 통합 → 각 상자의 기댓값 → 가중평균"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "상자를 고르는 시행과 상품권을 꺼내는 시행을 하나의 기댓값(각 상자 1/2 가중)으로 결합"
    - step: 2
      type: I-SC
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "총액의 확률분포를 전부 나열하는 갈래와, 한 장당 기댓값을 구해 2배 하는 갈래 중 뒤쪽을 고르면 계산이 크게 줄어듦"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "두 단계 시행(상자 선택 후 추출)에서 금액의 기댓값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    상자마다 총액의 분포를 만들어 더해도 풀리지만, 기댓값의 선형성을 쓰면 상자 A는 한 장당 8000원이므로 2장에 16000원, 상자 B는 9000원이므로 18000원, 두 상자를 1/2씩 섞어 17000원으로 끝난다.
    어느 갈래를 고르는지에 따라 계산량이 몇 배 차이 난다(I-SC). 통찰 2개지만 각 계산이 가벼워 STEP 2 ★3 유지.
  tier: star_3
  mechanism_primary: "상자 A·B 각각 한 장당 기댓값 → 2배 → 상자 선택 확률 1/2씩 가중평균 → 17000원"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$17000$원'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/132-291.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 상자의 구성과 금액, 꺼내는 장수를 바꿀 수 있음. 제약: 두 상자의 장수를 같게 두면 한 장당 기댓값 비교가 깔끔하고, 다르게 두면 가중치가 1/2 이어도 계산이 길어짐."
    creative: "(1) 상자를 고를 확률을 1/3, 2/3 으로 비대칭하게(★3 유지 · 가중치 강조) (2) 총액의 분산까지 묻기(★4 · 분포를 실제로 만들어야 함) (3) 꺼낸 상품권이 모두 1만 원권일 때 상자 A였을 확률을 묻기(★4 · 조건부확률 I-XU)."
```

```yaml
- id: GN-PROB-132-292
  page: 132
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    확률분포표가 $X=0,\,2,\,4,\,6$에 확률 $\dfrac{1}{8},\,\dfrac{3}{8},\,\dfrac{3}{8},\,\dfrac{1}{8}$로 주어지고 $Y=aX+b$의 평균이 $6$, 분산이 $3$일 때 ($a<0$) $a+b$의 값 구하기.
  category: "표에서 E(X), V(X) → V(Y)=a²V(X)로 a → E(Y)로 b"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "aX+b 꼴 확률변수의 평균·분산에서 계수 a, b 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    표가 0,2,4,6 에 1/8,3/8,3/8,1/8 로 좌우 대칭이라 E(X)=3 이 바로 보이고 V(X)=3. 그 다음 a²·3=3 에서 a=±1, a<0 조건으로 a=−1 을 택하고 E(Y)=−3+b=6 에서 b=9.
    a=±1 에서 부호 조건으로 하나를 버리는 단계(T-부호)가 있지만 미정계수 역추적 수준이라 통찰로 세지 않았다. STEP 2 ★3 · M_total 7 → ★3.
  tier: star_3
  mechanism_primary: "표에서 E(X)=3, V(X)=3 → a²V(X)=3 과 a<0 으로 a=−1 → aE(X)+b=6 으로 b=9 → a+b=8"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$8$'
  answer_source: "답지"
  figure: "crop:fig-132-292.png"
  latex: latex-bank/gn-prob/items/132-292.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "표의 값·확률과 E(Y), V(Y)를 바꿀 수 있음. 제약: V(Y)/V(X)가 제곱수여야 a가 유리수로 떨어지고, 부호 조건을 빼면 답이 두 개가 되므로 a<0 은 유지."
    creative: "(1) 대칭 배치를 깨서 E(X)를 직접 계산하게 하기(★3 유지 · I-SYM 제거) (2) a<0 조건을 빼고 가능한 a+b 를 모두 구하게 하면 ★4 · I-VF (3) σ(Y)를 주고 a를 묻되 절댓값 처리를 요구(★3)."
```

### 연습문제 실력 UP

```yaml
- id: GN-PROB-132-293
  page: 132
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    남학생 $2$명·여학생 $3$명을 일렬로 세우고 앞에서부터 $1$~$5$번을 붙일 때, 여학생 중 맨 앞에 있는 학생의 번호를 $X$라 하고 $\mathrm{V}(10X)$ 구하기.
  category: "배열 조건을 앞자리 성별 조건으로 전환 → X의 분포 → 분산 → 일차변환"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'여학생 중 맨 앞의 번호가 k' 를 '앞의 k−1 명이 모두 남학생이고 k번째가 여학생' 이라는 셀 수 있는 조건으로 바꿈"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "줄 세우기(순열) 상황을 X=1,2,3 의 확률분포표로 옮겨 기댓값·분산 계산으로 전환"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "배열에서 정의된 확률변수의 분산 — 앞자리 조건으로 확률 계산"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    남학생이 2명뿐이므로 X는 1, 2, 3 만 가능하다는 범위 판단(T-범위)이 먼저 필요하고, 각 확률은 앞자리부터 성별을 고정해 3/5, 3/10, 1/10 으로 나온다.
    조건을 셀 수 있는 형태로 바꾸는 단계(EQV)와 배열을 분포표로 옮기는 단계(RT) 둘 다 필요해 이 범위에서 가장 무겁다. 실력 UP ★4 유지.
  tier: star_4
  mechanism_primary: "X=k ⟺ 앞 k−1명 남학생·k번째 여학생 → P=3/5, 3/10, 1/10 → E(X)=3/2, V(X)=9/20 → V(10X)=100V(X)=45"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$45$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/132-293.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "남·여 학생 수와 변환 계수 10 을 바꿀 수 있음. 제약: X의 최댓값은 (남학생 수)+1 이므로 남학생이 늘면 값이 많아져 계산이 급격히 무거워진다. 계수는 V(X)의 분모 20 을 상쇄하도록 고르면 답이 정수."
    creative: "(1) 남학생 중 맨 앞 번호로 바꾸기(★4 유지 · 값이 1~4) (2) 여학생끼리 이웃하지 않는 배열로 제한하면 표본공간이 바뀌어 ★5 후보 (3) 맨 앞 여학생과 맨 뒤 여학생 번호의 차를 X로(★5 · I-SC·I-VF 결합)."
```

## 표본 판정 요약 (35문)

- ★ 분포: ★1 5 · ★2 25 · ★3 4 · ★4 1 · ★5 0
- 통찰형 7 · 절차형 28 · premium 0
- 통찰 유형 분포: I-EQV 4(128-276 · 131-285 · 131-286 · 132-293) · I-CON 2(132-290 · 132-291) · I-RT 2(132-289 · 132-293) · I-BW 1(132-289) · I-SC 1(132-291). 절차형이 압도적인 것은 이 단원의 도구가 E(X)=Σxp · V(X)=E(X²)−E(X)² · 일차변환 세 공식으로 고정돼 있기 때문이다.
- M_total 분포: 4~5 가 9문 · 6~7 이 21문 · 8 이상이 5문(131-288 · 132-290 · 132-293 · 132-289 · 130-282 순으로 무겁다).
- type_hint 상위: 「aX+b 꼴의 평균·분산·표준편차(E(X)·V(X)가 주어진 경우)」 6 · 「확률분포가 주어지지 않은 경우의 평균·분산·표준편차」 6 · 「확률분포표가 주어진 경우」 5 · 「aX+b — 확률분포가 주어진 경우」 4 · 「상금의 기댓값」 3
- 그림: 11문(모두 확률분포표 크롭) — `crop:fig-124-265.png` · `crop:fig-124-266.png` · `crop:fig-124-268.png` · `crop:fig-125-e4.png` · `crop:fig-125-270.png` · `crop:fig-129-e8.png` · `crop:fig-129-280.png` · `crop:fig-131-283.png` · `crop:fig-131-287.png` · `crop:fig-132-289.png` · `crop:fig-132-292.png` (131-287 은 전사본에서 figure 필드 대신 발문 안 includegraphics 로 들어가 있다)
- 대상층: 하위권 5 · 중하위권 22 · 중위권 5 · 중상위권 3 · 상위권 0

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-PROB-127-e6 | 벤더 「발전」 예제(★3 출발)이나 통찰 0·M_total 5·계산 한 줄 → ★2 로 내림. 기댓값 개념의 도입 자리라 벤더가 구역상 발전에 배치한 것으로 보임 | ★2 / ★3 |
| GN-PROB-131-288 | STEP 1 이지만 같은 수 카드 중복 때문에 분포 작성이 무거워 M_total 8(구역 최대). 통찰은 없어 ★2 라벨 유지 | ★2 / ★3 |
| GN-PROB-132-289 | 통찰 2개(RT+BW)라 +1 후보이나 이차함수 최댓값이 이전 학년 표준 도구라 STEP 2 출발 ★3 유지 | ★3 / ★4 |

## 카탈로그 차원 메모

나중에 확률과 통계 유형 카탈로그를 만들 때 참고할 것.

- **따로 세워야 할 유형**: ① 「확률분포가 주어진 경우」와 ② 「확률분포를 직접 만들어야 하는 경우」는 base ★ 가 다르다(②는 조합 계산이 추가돼 한 단계 무겁다). 개념원리도 예제 제목에서 이 둘을 갈라 놓았고, 이 범위 35문 중 21문이 이 두 유형의 변주다.
- **통합해도 될 유형**: 「aX+b 의 평균·분산·표준편차」를 「E(X)·V(X)가 주어진 경우 / 확률분포가 주어진 경우 / 주어지지 않은 경우」 셋으로 나눈 것은 앞의 ①②와 중복이다. 카탈로그에서는 「기본 유형(①②) × 일차변환 결합 여부」의 2축으로 두는 편이 낫다.
- **독립 유형으로 세울 것**: 「상금·금액의 기댓값」(127-e6 · 127-274 · 127-275 · 132-291) — 확률변수를 학생이 정의해야 하고, 금액이 X의 일차식이 되는지 아닌지로 난도가 갈린다. 132-291 처럼 시행이 2단계면 base ★ 3.
- **★4 이상 슬롯 후보**: 이 범위에서 ★4 이상은 132-293(배열에서 정의된 확률변수) 하나뿐이다. ★4·★5 변별 슬롯은 「분산의 최대·최소」(132-289) · 「확률 사이의 관계식」(132-290) · 「배열·추출에서 확률변수 정의」(132-293) 세 갈래에서 나오므로, 카탈로그에서 이 셋을 별도 유형으로 세워야 ★4 슬롯을 만들 수 있다.
- **감쇠 주의**: E(X²)=V(X)+{E(X)}² 되돌려 쓰기(128-276 · 131-285)는 이 단원에서 반복 노출되는 I-EQV 라, 학습 자산화 상위 유형으로 잡아 depth 3 을 주지 않는 것이 맞다.
