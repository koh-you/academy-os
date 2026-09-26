---
name: mechanism-데이터-GN-PROB-20
description: 개념원리 확률과 통계 20 모비율과 표본비율(1/1 · 176~179쪽 15문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 확률과 통계 (22개정) · 전사본 latex-bank/gn-prob
  section: 20 모비율과 표본비율
  unit_code: GN-PROB-20
  part: "1/1"
  extract_range: "176~179쪽 · 176-e6~179-393"
  total_problems: 15
  unit_total: 15
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·level·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). depth_score 는 라벨링된 통찰의 effective_depth 평균이고 통찰이 없으면 0.00. insight_type 은 insights 가 비어 있으면 절차형, 하나라도 있으면 통찰형. anchor_status 는 null. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-prob/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-prob/items/<id>.tex
  image_source: latex-bank/gn-prob/figures/ (crops.json)
---

# 개념원리 확률과 통계 · 20 모비율과 표본비율 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 확률과 통계 176~179쪽, 단원 20 「모비율과 표본비율」의 15문항 전수를 다룬다. 구역은 필수·발전 예제 3문(필수 예제 1 + 딸림 확인체크 2), 연습문제 STEP 1 6문, 연습문제 STEP 2 5문, 연습문제 실력 UP 1문이다. 개념원리 고등의 난이도 신호는 구역과 태그에 들어 있다 — 확인체크는 개념 확인(★1 출발), 필수 예제는 ★2, STEP 1 은 ★2, STEP 2 는 ★3, 실력 UP 은 ★4 를 출발점으로 잡고 거기서 M_total 과 통찰 라벨로 ±1 조정했다. 「평가원 기출」 태그(3문)는 통찰 유무에 따라 +0~1 로만 반영했다.

단원 특성상 이 범위는 도구가 좁다 — 표본평균의 분포 $\mathrm{N}(m,\,\sigma^2/n)$ 과 표본비율의 분포 $\mathrm{N}(p,\,p(1-p)/n)$ 두 개뿐이고, 변별은 「주어진 조건을 이 두 분포 중 하나의 표준화 형태로 어떻게 옮기는가」에서 난다. 그래서 통찰 라벨도 I-EQV(조건의 동치 변환)와 I-BW(확률값에서 모수·표본 크기 역추적)에 몰려 있다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 / 통찰 골조를 유지한 창의 변형과 ★ 변동 지점)를 채웠다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-PROB-176-e6
  page: 176
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    차량의 40 %가 선루프를 설치한 도시에서 96대를 임의추출할 때, 48대 이상이 선루프 차량일 확률. 표준정규분포표 이용.
  category: '표본비율의 정규근사 → 개수 조건을 비율 조건으로 → 표준화'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '표본비율의 분포 — 개수 조건을 비율로 바꿔 정규근사'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $p=0.4$, $n=96$ 이므로 표본비율의 표준편차가 $0.05$. 「48대 이상」을 「비율 0.5 이상」으로 옮기는 한 단계가 이 예제의 요지이고 나머지는 표준화·표 조회다. 이 변환은 단원에서 정의로 가르치는 표준 절차라 통찰로 세지 않았다. 필수 예제 출발 ★2 를 유지(M_total 5 이지만 변환 단계가 있어 -1 을 적용하지 않음).
  tier: star_2
  mechanism_primary: '표본비율의 분포 N(0.4, 0.05^2) → 48대 이상을 비율 0.5 이상으로 → z=2 → 표 조회'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$0.0228$'
  answer_source: "본문 풀이"
  figure: "crop:fig-176-e6.png"
  latex: latex-bank/gn-prob/items/176-e6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '모비율 p(0.4 · 0.25 · 0.6)와 표본 크기 n(96 · 150 · 600), 기준 개수를 바꿀 수 있음. 제약: p(1-p)/n 이 깔끔한 제곱(0.05^2 꼴)이 되도록 n 을 고르고, 기준 개수를 n 으로 나눈 비율이 표에 있는 z 값(0.5 · 1 · 1.5 · 2)에 떨어져야 함. 기준 개수는 정수여야 함.'
    creative: '(1) 「이하」 확률이나 구간 확률로 바꾸기(★2 유지) (2) 확률값을 주고 기준 개수를 역으로 묻기(I-BW 추가 → ★3) (3) 모비율을 미지수로 두고 확률 조건에서 p 를 구하게 하면 Mₐ 상승 → ★3 (4) 같은 설정에서 표본 크기를 미지수로 두고 확률 부등식을 주면 179-391 골조 → ★4.'
```

```yaml
- id: GN-PROB-176-380
  page: 176
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    시장 점유율 25 %인 A 회사 TV를 1200대 중에서 센 표본비율 $\hat{p}$ 에 대하여 $\mathrm{E}(\hat{p})/\mathrm{V}(\hat{p})$ 의 값.
  category: '표본비율의 평균·분산 공식 대입 → 두 값의 비'
  M: {s: 1, k: 2, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '표본비율의 평균·분산 공식 대입'
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    평균은 $p$, 분산은 $p(1-p)/n$ 이라는 공식 두 개를 그대로 대입하고 나누면 끝. 식 변형 단계가 사실상 하나뿐이다. 소수 나눗셈이 조금 번거로워 Mₖ=2 로 뒀지만 통찰은 없다. 확인체크 구역 출발 ★1 유지.
  tier: star_1
  mechanism_primary: '표본비율의 평균 p 와 분산 p(1-p)/n 에 p=0.25, n=1200 대입 → 두 값의 비'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$1600$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/176-380.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '모비율 p 와 표본 크기 n 을 바꿀 수 있음. 제약: E/V = n/(1-p) 이므로 n 이 (1-p) 로 나누어떨어지게 잡아야 답이 정수. p=0.2, n=1600 이면 2000 처럼.'
    creative: '(1) V(p̂) 대신 표준편차를 묻기(★1 유지) (2) E와 V 를 주고 p·n 을 역으로 구하게 하면 연립 → I-BW ★2 (3) 표본평균 쪽 공식(E(X̄)=m, V(X̄)=σ^2/n)으로 같은 골조를 옮기면 177-382 계열 ★2.'
```

```yaml
- id: GN-PROB-176-381
  page: 176
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    고등학생의 20 %가 아르바이트를 하는 도시에서 100명을 임의추출할 때, 아르바이트하는 학생의 비율이 25 % 이하일 확률. $\mathrm{P}(0\le Z\le 1.25)=0.3944$ 주어짐.
  category: '표본비율의 표준편차 계산 → 표준화 → 주어진 확률값 이용'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '표본비율의 확률 — 표준화 후 표 조회'
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    $\sqrt{0.2\times0.8/100}=0.04$ 를 구해 $0.25$ 를 표준화하면 $z=1.25$, 「이하」이므로 $0.5+0.3944$. 조건이 이미 비율로 주어져 176-e6 의 개수→비율 변환 단계가 없다. 통찰 0 · M_total 5 이고 확인체크 구역이라 ★1.
  tier: star_1
  mechanism_primary: '표본비율의 표준편차 0.04 계산 → 0.25 를 표준화해 z=1.25 → 0.5+0.3944'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$0.8944$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/176-381.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '모비율 0.2 · 표본 크기 100 · 기준 비율 0.25 를 바꿀 수 있음. 제약: p(1-p)/n 이 깔끔한 제곱이 되어야 하고(0.2·0.8/100=0.04^2), 기준 비율과의 차를 표준편차로 나눈 값이 제시된 z 값과 맞아야 함. 조건으로 주는 P(0≤Z≤z) 값도 함께 바꿀 것.'
    creative: '(1) 「이상」으로 바꿔 여사건을 쓰게 하기(★1 유지) (2) 두 기준 사이 구간 확률로 바꾸면 표준화 2회 → ★2 (3) 확률값을 주고 표본 크기 n 을 역으로 묻기(I-BW) → ★3.'
```

### 연습문제 STEP 1

```yaml
- id: GN-PROB-177-382
  page: 177
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    1, 3, 5, 7, 9 가 적힌 카드 5장에서 2장을 복원추출할 때의 표본평균 $\overline{X}$ 에 대하여 $\mathrm{E}(\overline{X}^2)+\mathrm{V}(4\overline{X}+2)$ 의 값.
  category: '모평균·모분산 → 표본평균의 평균·분산 → 분산 정의식을 역으로 써서 제곱의 평균'
  M: {s: 3, k: 2, a: 1, t: 0}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '구할 수 없는 E(표본평균의 제곱)을 분산 정의식 V=E(제곱)-(평균)^2 을 뒤집어 V+(평균)^2 으로 옮김'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '표본평균의 평균·분산 — E(X̄^2) · V(aX̄+b) 계산'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    모평균 5·모분산 8 을 먼저 구하고 $n=2$ 로 표본평균의 평균 5·분산 4 를 얻는다. 핵심은 $\mathrm{E}(\overline{X}^2)$ 를 직접 계산하지 않고 분산 정의식을 뒤집어 쓰는 것(I-EQV d1). $\mathrm{V}(4\overline{X}+2)=16\mathrm{V}(\overline{X})$ 는 표준 성질. STEP 1 출발 ★2 를 M_total 6·통찰 1 로 유지.
  tier: star_2
  mechanism_primary: '모평균 5·모분산 8 → 표본평균의 평균 5·분산 4 → E(제곱)=분산+평균^2=29, V(4X+2)=16·4=64 → 합'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$93$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/177-382.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '카드 숫자 집합(등차 5개 → 2, 4, 6, 8, 10 등)과 표본 크기 n, 일차식 계수 a·b 를 바꿀 수 있음. 제약: 모분산이 n 으로 나누어떨어져야 답이 정수, 복원추출이어야 V(X̄)=σ^2/n 이 그대로 성립(비복원이면 공식이 달라짐).'
    creative: '(1) E(X̄^2) 대신 E((X̄-1)^2) 처럼 평행이동을 넣기(★2 유지) (2) 답을 주고 표본 크기 n 을 역으로 묻기 → 177-383 골조 (3) 카드 숫자에 미지수를 넣고 E·V 조건 두 개로 연립하면 I-CON 추가 → ★3.'
```

```yaml
- id: GN-PROB-177-383
  page: 177
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    1, 2, 2, 3, 3, 3 이 적힌 공 6개에서 $n$개를 복원추출할 때 표본평균의 분산이 $\dfrac{5}{36}$ 이 되는 $n$.
  category: '도수가 다른 모집단의 모평균·모분산 → 분산 공식에서 표본 크기 역산'
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: 'V(X̄)=σ^2/n 에서 표본 크기 n 구하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    도수가 다른 값들이라 확률분포를 먼저 세워 모평균 $\tfrac{7}{3}$, 모분산 $\tfrac{5}{9}$ 를 구하는 계산이 이 문제의 몸통이다. 뒤는 $\sigma^2/n=\tfrac{5}{36}$ 한 줄. 미지수가 n 하나뿐이라 역추적으로 볼 단계가 아니어서 절차형. STEP 1 출발 ★2 유지.
  tier: star_2
  mechanism_primary: '도수 → 확률분포표 → 모평균 7/3·모분산 5/9 → σ^2/n = 5/36 → n'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/177-383.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '공에 적힌 숫자와 도수(1개·2개·3개 배분), 주어진 V(X̄) 값을 바꿀 수 있음. 제약: 모분산이 유리수로 깔끔해야 하고 σ^2 을 주어진 분산으로 나눈 값이 자연수 n 이 되어야 함. 도수 합은 분모가 되므로 6·8·10 처럼 약분이 되는 수로.'
    creative: '(1) 분산 대신 표준편차를 주기(★2 유지) (2) 표본평균의 분산이 어떤 값 이하가 되는 n 의 최솟값으로 바꾸면 부등식 + 경계 판정 → ★3 (3) 모분산을 미지수로 두고 n 과 V(X̄) 를 주면 Mₐ 상승 ★2~3.'
```

```yaml
- id: GN-PROB-177-384
  page: 177
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $\mathrm{N}(170,\,12^2)$ 모집단에서 크기 16 인 표본을 뽑을 때 $\mathrm{P}(164\le\overline{X}\le 173)$. 표준정규분포표 이용.
  category: '표본평균의 분포 → 양 끝 표준화 → 표 조회'
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '정규모집단 표본평균의 구간 확률 — 표준화 후 표 조회'
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    $\sigma(\overline{X})=12/4=3$ 을 넣고 두 끝을 표준화하면 $-2$ 와 $1$, 표에서 바로 더한다. 조건 해석도 함정도 없는 공식 1회 적용. [분류 이슈] STEP 1 출발 ★2 이지만 통찰 0 · M_total 4 로 -1 이 걸려 ★1 로 내렸다(벤더 라벨과 1단 차이).
  tier: star_1
  mechanism_primary: '표본평균의 표준편차 3 → 164·173 을 표준화해 z=-2, 1 → 0.4772+0.3413'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$0.8185$'
  answer_source: "답지"
  figure: "crop:fig-177-384.png"
  latex: latex-bank/gn-prob/items/177-384.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '모평균 170 · 모표준편차 12 · 표본 크기 16 · 구간 끝 164, 173 을 바꿀 수 있음. 제약: 표본 크기는 제곱수로 잡아 σ/√n 이 유리수가 되게 하고, 구간 끝에서 표준화한 z 가 표에 실린 값(0.5 · 1 · 1.5 · 2 · 2.5)에 떨어져야 함.'
    creative: '(1) 한쪽 꼬리 확률로 줄이기(★1 유지) (2) 모평균을 미지수로 두고 확률값을 주면 177-385 골조 → ★2 (3) 표본평균이 아니라 표본 하나의 확률과 비교시키면 σ 와 σ/√n 을 구별하는 함정 추가 → ★2.'
```

```yaml
- id: GN-PROB-177-385
  page: 177
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: ["평가원 기출"]
  category_type: "연습문제"
  summary: |
    주당 근무 시간이 평균 $m$, 표준편차 5 인 정규분포를 따를 때, 36명의 표본평균이 38시간 이상일 확률이 $0.9332$ 이면 $m$ 의 값. 5지선다.
  category: '확률값 → 표에서 z 역읽기 → 부호 판정 → 모평균 역산'
  M: {s: 3, k: 1, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '확률 0.9332 가 0.5보다 크다는 것에서 표준화한 기준값이 음수임을 먼저 판정하고 z=-1.5 를 역으로 읽어 m 을 구함'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '표본평균의 확률이 주어질 때 모평균 구하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $\sigma(\overline{X})=5/6$ 은 바로 나오고, 실제 갈림은 $0.9332=0.5+0.4332$ 에서 $z$ 의 부호를 어느 쪽으로 잡느냐다(I-BW d1 · T-부호). 부호를 틀리면 선택지 ①로 빠진다. 통찰 1개 · M_total 7 이라 기출 태그의 +1 은 주지 않고 STEP 1 출발 ★2 유지.
  tier: star_2
  mechanism_primary: '표본평균의 표준편차 5/6 → 0.9332 에서 z=-1.5 역읽기 → (38-m)/(5/6)=-1.5 → m'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: "crop:fig-177-385.png"
  latex: latex-bank/gn-prob/items/177-385.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '모표준편차 5 · 표본 크기 36 · 기준 38 · 주어진 확률 0.9332 를 바꿀 수 있음. 제약: 표본 크기는 제곱수, σ/√n 에 표의 z 를 곱한 값이 선택지 간격(0.5)에 맞는 소수여야 함. 확률이 0.5보다 크면 m 이 기준보다 크고 작으면 반대 — 선택지 5개가 그 둘을 모두 포함하도록 배치.'
    creative: '(1) 모평균 대신 모표준편차를 묻기(★2 유지) (2) 확률을 0.5보다 작게 바꿔 부호 판정을 뒤집기(★2 유지, 함정만 이동) (3) 표본 크기를 미지수로 두고 확률 조건을 주면 √n 부등식 → ★3 (4) 두 집단의 m 을 비교하게 하면 179-393 골조 → ★4.'
```

```yaml
- id: GN-PROB-177-386
  page: 177
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    모비율 $0.4$ 인 모집단에서 크기 600 인 표본을 뽑을 때 표본비율 $\hat{p}$ 이 $0.38$ 이하일 확률. 표준정규분포표 이용.
  category: '표본비율의 표준편차 계산 → 표준화 → 한쪽 꼬리 확률'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '표본비율의 확률 — 표준화 후 표 조회'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $\sqrt{0.4\times0.6/600}=\sqrt{0.0004}=0.02$ 가 계산의 고비다(소수의 제곱근에서 자릿수를 틀리기 쉬움 · T-단위). 표준화하면 $z=-1$, 「이하」라 $0.5-0.3413$. 통찰 없는 절차형이지만 M_total 6 이라 -1 을 적용하지 않고 STEP 1 출발 ★2 유지.
  tier: star_2
  mechanism_primary: '표본비율의 표준편차 0.02 → 0.38 을 표준화해 z=-1 → 0.5-0.3413'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$0.1587$'
  answer_source: "답지"
  figure: "crop:fig-177-386.png"
  latex: latex-bank/gn-prob/items/177-386.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '모비율 0.4 · 표본 크기 600 · 기준 비율 0.38 을 바꿀 수 있음. 제약: p(1-p)/n 이 0.02^2 처럼 완전제곱 소수여야 하고(0.4·0.6/600, 0.25·0.75/300 등), 기준 비율과 p 의 차가 표준편차의 정수배 또는 0.5배여야 표에서 읽힘.'
    creative: '(1) 구간 확률로 바꾸면 표준화 2회 → ★2 (2) 비율 대신 개수로 물으면 개수→비율 변환 추가 → 178-387 골조 (3) 여사건 비율로 조건을 뒤집으면 179-392 골조 → ★3 (4) 확률을 주고 n 을 묻기 → ★3.'
```

```yaml
- id: GN-PROB-178-387
  page: 178
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    주민의 80 %가 지지하는 복지 정책에서 주민 100명을 임의추출할 때, 지지자가 72명 이상 84명 이하일 확률. $\mathrm{P}(0\le Z\le 1)=0.3413$, $\mathrm{P}(0\le Z\le 2)=0.4772$ 주어짐.
  category: '개수 구간을 비율 구간으로 → 표본비율의 표준편차 → 양 끝 표준화'
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '표본비율의 확률 — 개수 구간을 비율 구간으로'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $\sqrt{0.8\times0.2/100}=0.04$ 를 구한 뒤 72·84명을 비율 $0.72$·$0.84$ 로 옮기고 각각 표준화하면 $-2$, $1$. 개수↔비율 변환은 176-e6 와 같은 표준 절차라 통찰로 세지 않았고, 구간이라 표준화가 2회인 만큼 M_total 만 올렸다. STEP 1 출발 ★2 유지.
  tier: star_2
  mechanism_primary: '표본비율의 표준편차 0.04 → 72·84명을 비율 0.72·0.84 로 → z=-2, 1 → 0.4772+0.3413'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$0.8185$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/178-387.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '모비율 0.8 · 표본 크기 100 · 구간 끝 72, 84 를 바꿀 수 있음. 제약: 구간 끝이 정수 명수여야 하고 n 으로 나눈 비율이 표준편차의 정수배 차이가 되어야 함. 조건으로 주는 두 확률값도 그 z 에 맞춰 교체.'
    creative: '(1) 한쪽 꼬리만 묻기(★2 유지) (2) 확률을 주고 표본 크기나 모비율을 역으로 묻기(I-BW) → ★3 (3) 반대 의견 비율로 조건을 뒤집어 여사건을 강제하면 179-392 골조 → ★3 (4) 두 지역의 지지 비율을 비교하게 하면 I-CON 추가 → ★4.'
```

### 연습문제 STEP 2

```yaml
- id: GN-PROB-178-388
  page: 178
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    확률분포가 $X=-2,\,0,\,2$ 에 각각 $a,\,2a,\,a$ 인 모집단에서 크기 3 인 표본을 뽑을 때 $\mathrm{P}(\overline{X}=0)+\mathrm{P}(\overline{X}=2)$ 의 값. (표는 그림)
  category: '확률의 합 1 로 a 결정 → 표본평균 조건을 세 값의 합 조건으로 → 경우 나열'
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '연속형 정규근사가 통하지 않는 이산 모집단이므로 표본평균의 값 조건을 뽑은 세 수의 합 조건(합 0 · 합 6)으로 옮겨 세어야 함'
    - step: 3
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '합이 0 인 경우가 (0,0,0) 과 (-2,0,2) 의 순열 두 갈래로 갈리고 둘 다 세어야 답이 됨'
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: '이산 모집단에서 표본평균의 확률분포 직접 계산'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    합이 1 이라는 조건에서 $a=\tfrac14$. 이 단원의 다른 문항과 달리 정규분포를 쓸 수 없고 표본평균을 합으로 되돌려 직접 세야 한다(I-RT d2). 합 0 은 $(0,0,0)$ 과 $(-2,0,2)$ 의 순열 두 갈래, 합 6 은 $(2,2,2)$ 한 가지(I-MI d2). [분류 이슈] 통찰 2개라 +1 후보지만 표본 크기가 3 이라 나열이 금방 끝나 STEP 2 출발 ★3 을 유지했다.
  tier: star_3
  mechanism_primary: '확률 합 1 → a=1/4 → 표본평균 0·2 를 세 수의 합 0·6 으로 → 순열까지 세어 21/64'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{21}{64}$'
  answer_source: "답지"
  figure: "crop:fig-178-388.png"
  latex: latex-bank/gn-prob/items/178-388.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'X 의 값(-2, 0, 2 → -1, 0, 1 이나 0, 1, 2), 확률 비(a : 2a : a → a : 3a : 2a), 표본 크기 3 을 바꿀 수 있음. 제약: 확률 합이 1 이 되게 a 가 유리수로 떨어져야 하고, 표본 크기를 4 이상으로 올리면 경우 나열이 급격히 늘어 ★4 급이 됨(그림의 표 라벨 X · P(X=x) · 합계는 고정).'
    creative: '(1) P(X̄≥1) 처럼 부등식 조건으로 바꾸면 경우가 늘어 ★4 (2) 표본평균 대신 표본의 최댓값·중앙값 분포를 묻기(★4) (3) 확률 하나를 미지수로 두고 P(X̄=0) 값을 주어 역산시키면 I-BW 추가 ★4 (4) X 를 대칭 분포로 유지하면 E(X̄)=0 을 대칭성으로 즉시 말할 수 있어 I-SYM 을 끼울 수 있음.'
```

```yaml
- id: GN-PROB-178-389
  page: 178
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    무게가 $\mathrm{N}(60,\,10^2)$ 인 딸기 25개를 한 상자에 담고 상자 전체가 $1.4\,\mathrm{kg}$ 이하이면 미달로 판정할 때, 딸기 100만 개를 포장하면 미달 상자의 평균 개수. 표준정규분포표 이용.
  category: '상자 합 조건을 표본평균 조건으로 동치 변환 → 확률 → 상자 수 곱하기'
  M: {s: 4, k: 2, a: 1, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '「상자 전체 무게 1400 g 이하」를 「딸기 25개의 표본평균이 56 g 이하」로 바꿔야 표본평균의 분포를 쓸 수 있음'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '표본합 조건을 표본평균으로 바꾼 정규근사 · 기대 개수'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    문제에 표본평균이라는 말이 없고 상자 무게(합)만 주어지므로 $1.4\,\mathrm{kg}=1400\,\mathrm{g}$ 단위를 맞춘 뒤 25로 나눠 $\overline{X}\le 56$ 으로 옮기는 것이 관문이다(I-EQV d2 · T-단위). 이후 $\sigma(\overline{X})=2$, $z=-2$, 확률 $0.0228$. 마지막에 딸기 100만 개가 상자 4만 개라는 환산이 한 번 더 있다(T-단위). STEP 2 출발 ★3 유지.
  tier: star_3
  mechanism_primary: '상자 합 1400 g 이하 → 표본평균 56 g 이하 → 표본평균의 표준편차 2, z=-2 → 0.0228 × 상자 40000개'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$912$'
  answer_source: "답지"
  figure: "crop:fig-178-389.png"
  latex: latex-bank/gn-prob/items/178-389.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '모평균 60 · 모표준편차 10 · 한 상자 개수 25 · 미달 기준 1.4 kg · 전체 100만 개를 바꿀 수 있음. 제약: 한 상자 개수는 제곱수로 잡아 σ/√n 이 정수가 되게 하고, 기준 무게를 개수로 나눈 값이 표의 z 에 떨어져야 하며, 전체 개수는 상자 개수로 나누어떨어져야 함. 확률 × 상자 수가 정수가 되도록 자릿수를 맞출 것.'
    creative: '(1) 「초과로 판정될 상자 비율」처럼 여사건으로 묻기(★3 유지) (2) 미달 상자가 1000개 이하가 되도록 기준 무게를 정하게 하면 I-BW 추가 → ★4 (3) 상자 무게(포장재)를 더해 합의 정규분포를 직접 쓰게 하면 표본평균 대신 표본합 분포 → ★3~4 (4) 상자 개수를 미지수로 두면 Mₐ 상승 ★4.'
```

```yaml
- id: GN-PROB-178-390
  page: 178
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["평가원 기출"]
  category_type: "연습문제"
  summary: |
    정규분포를 따르는 신생아 몸무게 $X$ 가 $\mathrm{P}(X\ge 3.4)=\tfrac12$, $\mathrm{P}(X\le 3.9)+\mathrm{P}(Z\le -1)=1$ 을 만족할 때, 25명의 표본평균에 대한 $\mathrm{P}(\overline{X}\ge 3.55)$. 5지선다.
  category: '두 확률 조건에서 모평균·모표준편차 결정 → 표본평균의 분포 → 표준화'
  M: {s: 4, k: 1, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '확률이 1/2 이라는 것에서 모평균이 3.4 임을 역으로 읽음'
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '두 확률의 합이 1 이라는 조건을 P(X≤3.9)=P(Z≤1) 로 옮겨(여사건 항등식) 표준편차가 0.5 임을 끌어냄'
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: '확률 조건에서 모평균·모표준편차를 정한 뒤 표본평균의 확률'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    표본평균 계산 자체는 마지막 두 줄뿐이고, 무게는 앞의 조건 해석에 있다. 두 번째 조건은 $\mathrm{P}(X\le 3.9)=1-\mathrm{P}(Z\le -1)=\mathrm{P}(Z\le 1)$ 로 옮겨야 $(3.9-m)/\sigma=1$ 이 나온다(I-EQV d2). 이후 $\sigma(\overline{X})=0.1$, $z=1.5$. [분류 이슈] 통찰 2개로 +1 후보지만 각 단계가 정형화된 조건 해석이라 STEP 2 출발 ★3 을 유지했다.
  tier: star_3
  mechanism_primary: '확률 1/2 → 모평균 3.4 → 여사건 항등식으로 P(X≤3.9)=P(Z≤1) → 모표준편차 0.5 → 표본평균 표준편차 0.1, z=1.5'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: "crop:fig-178-390.png"
  latex: latex-bank/gn-prob/items/178-390.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '기준값 3.4 · 3.9 · 3.55 와 표본 크기 25 를 바꿀 수 있음. 제약: 두 기준의 차가 모표준편차의 정수배여야 σ 가 깔끔하고, 표본 크기는 제곱수, 마지막 기준과 평균의 차를 σ/√n 으로 나눈 값이 표의 z 에 떨어져야 함. 선택지는 한쪽 꼬리 확률 5개(0.0062~0.3413)로 구성.'
    creative: '(1) 두 번째 조건을 P(X≥3.9)=P(Z≥1) 처럼 바로 읽히게 바꾸면 I-EQV 가 사라져 ★2 (2) 모평균 조건을 P(X≤a)=P(X≥b) 형태의 대칭으로 주면 I-SYM 으로 교체 ★3 (3) 표본 크기를 미지수로 두고 확률 부등식을 주면 179-391 골조 → ★4 (4) 두 지역 신생아를 비교시키면 179-393 골조 → ★4.'
```

```yaml
- id: GN-PROB-179-391
  page: 179
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    수명이 $\mathrm{N}(1400,\,100^2)$ 인 전구에서 $n$개를 뽑을 때 $\mathrm{P}\!\left(\overline{X}\ge 1350+\dfrac{165}{\sqrt{n}}\right)\ge 0.9$ 를 만족하는 자연수 $n$ 의 최솟값. 표준정규분포표 이용.
  category: '기준값 안의 n 까지 포함해 표준화 → 확률 부등식을 n 의 부등식으로 → 자연수 최솟값'
  M: {s: 4, k: 3, a: 2, t: 2}
  M_total: 11
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '기준값에 n 이 들어 있어 표준화하면 z 경계 자체가 (165-50√n)/100 이라는 n 의 식이 된다는 것을 보고 정리해야 함'
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '확률이 0.9 이상이라는 조건을 표에서 z=1.28 로 역으로 읽고, 꼬리 방향 때문에 부등호가 뒤집혀 경계가 -1.28 이하가 되어야 함을 판정'
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: '표본평균 확률 부등식에서 표본 크기 n 의 최솟값'
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    이 범위에서 유일하게 표본 크기가 기준값과 표준편차 양쪽에 동시에 들어 있다. 표준화하면 경계가 $(165-50\sqrt{n})/100$ 이 되고(I-EQV d2), 확률 $\ge 0.9$ 를 표에서 $1.28$ 로 되읽으면서 부등호가 뒤집힌다(I-BW d2 · T-부호). 끝에 $\sqrt{n}\ge 5.86$ 에서 자연수 최솟값을 고르는 경계 처리(T-경계)까지 붙어 M_total 11. STEP 2 출발 ★3 에 통찰 2개로 +1 → ★4.
  tier: star_4
  mechanism_primary: '기준값 1350+165/√n 을 표준화 → 경계 (165-50√n)/100 ≤ -1.28 → √n ≥ 5.86 → 자연수 최솟값'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$35$'
  answer_source: "답지"
  figure: "crop:fig-179-391.png"
  latex: latex-bank/gn-prob/items/179-391.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '모평균 1400 · 모표준편차 100 · 기준 상수 1350 · 분자 165 · 확률 0.9 를 바꿀 수 있음. 제약: 표준화하면 (분자 - (모평균-기준상수)·√n)/모표준편차 꼴이라 계수들이 정수로 떨어지게 잡아야 하고, 확률은 표에 실린 z(1.28 · 1.64 · 1.96)에 대응해야 하며, √n 의 하한이 정수에 딱 떨어지지 않아야 「최솟값」 문제가 성립.'
    creative: '(1) 최솟값 대신 조건을 만족하는 n 의 범위를 묻기(★4 유지) (2) 분자의 n 항을 빼고 상수 기준만 주면 부등식이 √n 에 대해 단순해져 ★3 (3) 확률을 0.9 이하로 뒤집어 부등호 방향을 한 번 더 꼬면 T-부호 강화 ★4 (4) 모표준편차를 미지수로 두고 n 과 확률을 주면 Mₐ 상승 ★4.'
```

```yaml
- id: GN-PROB-179-392
  page: 179
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    전체 학생의 25 %가 스마트폰 중독 판정을 받은 학교에서 300명을 임의추출할 때, 중독 판정을 받지 않은 학생이 210명 이하일 확률. $\mathrm{P}(0\le Z\le 2)=0.4772$ 주어짐.
  category: '여사건 모비율로 바꿔 잡기 → 개수를 비율로 → 표준화'
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '주어진 25 % 를 그대로 쓰지 않고 묻는 대상인 「받지 않은」 쪽 모비율 0.75 로 바꿔 잡아야 표본비율의 분포가 맞음'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '여사건 모비율로 바꾼 표본비율의 확률'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    조건은 중독 비율 $0.25$ 로 주고 묻는 것은 중독이 아닌 학생 수라 모비율을 $0.75$ 로 갈아끼우는 것이 첫 단계다(I-EQV d1 · T-표기). 그 뒤 $\sqrt{0.75\times0.25/300}=0.025$, 210명을 비율 $0.7$ 로 옮겨 $z=-2$(T-단위). 두 함정 카테고리가 겹쳐 M_total 8. STEP 2 출발 ★3 유지.
  tier: star_3
  mechanism_primary: '여사건 모비율 0.75 로 바꿔 잡기 → 표본비율의 표준편차 0.025 → 210명을 비율 0.7 로 → z=-2 → 0.5-0.4772'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$0.0228$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/179-392.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '모비율 0.25 · 표본 크기 300 · 기준 210명을 바꿀 수 있음. 제약: 여사건 쪽 p(1-p)/n 이 완전제곱 소수가 되어야 하고(0.75·0.25/300=0.025^2), 기준 개수를 n 으로 나눈 비율과 여사건 모비율의 차가 그 표준편차의 정수배여야 함. 조건으로 주는 확률값도 그 z 에 맞출 것.'
    creative: '(1) 중독 판정을 받은 학생 수로 되돌리면 여사건 단계가 사라져 ★2 (2) 「받지 않은 학생이 210명 이상 225명 이하」처럼 구간으로 만들면 표준화 2회 → ★3 유지 (3) 확률을 주고 표본 크기를 역산시키면 I-BW 추가 ★4 (4) 두 학년의 비율을 비교시키면 I-CON 추가 ★4.'
```

### 연습문제 실력 UP

```yaml
- id: GN-PROB-179-393
  page: 179
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: ["평가원 기출"]
  category_type: "연습문제"
  summary: |
    평균이 각각 220, 240 이고 $Y$ 의 표준편차가 $X$ 의 $1.5$배인 두 정규분포에서, $n$명·$9n$명의 표본평균을 $\overline{X}$, $\overline{Y}$ 라 하자. $\mathrm{P}(\overline{X}\le 215)=0.1587$ 일 때 $\mathrm{P}(\overline{Y}\ge 235)$. 5지선다.
  category: '확률값에서 한쪽 표준오차 확정 → 표준편차 비와 표본 크기 비를 묶어 다른 쪽 표준오차 → 표준화'
  M: {s: 4, k: 2, a: 3, t: 1}
  M_total: 10
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '0.1587 에서 z=-1 을 역으로 읽어 σ 와 n 을 따로 구하지 않고 표준오차 σ/√n = 5 만 확정'
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '조건 ㈏ 의 1.5배와 표본 크기 9n 을 한꺼번에 묶어 1.5σ/√(9n) = 0.5·(σ/√n) 으로 B 지역 표준오차를 한 번에 결정'
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: '두 모집단의 표본평균 — 표준오차 관계로 확률 옮기기'
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    미지수가 $\sigma$ 와 $n$ 두 개인데 조건은 하나라서, 각각을 구하려 하면 막힌다. $\sigma/\sqrt{n}$ 을 한 덩어리로 보고 $=5$ 로 확정하는 것이 관문(I-BW d1). 이어서 표준편차 $1.5$배와 표본 크기 $9n$ 을 묶으면 $1.5/3=0.5$ 배라 B 지역 표준오차는 $2.5$ 로 한 번에 나온다(I-CON d2). 실력 UP 출발 ★4 를 통찰 2개로 유지 — ★5 는 SC·VF·SYM·XU 중 하나가 필요해 해당 없음.
  tier: star_4
  mechanism_primary: 'A 쪽 확률 0.1587 → 표준오차 σ/√n = 5 확정 → 1.5배와 9n 을 묶어 B 쪽 표준오차 2.5 → z=-2 → 0.9772'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "⑤"
  answer_source: "답지"
  figure: "crop:fig-179-393.png"
  latex: latex-bank/gn-prob/items/179-393.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 평균 220 · 240, 표준편차 배수 1.5, 표본 크기 배수 9, 기준값 215 · 235, 주어진 확률 0.1587 을 바꿀 수 있음. 제약: (표준편차 배수)/√(표본 크기 배수) 가 깔끔한 유리수여야 하고(1.5/3=0.5, 2/4=0.5, 3/3=1), 두 기준값과 평균의 차가 각 표준오차의 정수배여야 함. 선택지는 표의 한쪽 꼬리 확률로 구성.'
    creative: '(1) 배수 조건을 평균 쪽에 걸어 두 표본평균의 대소를 묻기(★4 유지) (2) P(Ȳ≥235)=P(X̄≤215) 가 되도록 표본 크기 배수를 역으로 정하게 하면 I-BW 강화 → ★4~5 (3) 두 표본평균의 차 X̄-Ȳ 의 분포까지 요구하면 단원 경계를 넘어 I-XU 추가 → ★5 후보 (4) 표준편차 배수를 미지수로 두고 두 확률을 주면 조건 통합이 한 겹 더 → ★5 후보.'
```

## 표본 판정 요약 (15문)

- ★ 분포: ★1 3 · ★2 6 · ★3 4 · ★4 2 · ★5 0
- 통찰형 8 · 절차형 7 · premium 0
- 통찰 라벨 12개: I-EQV 5 · I-BW 4 · I-RT 1 · I-MI 1 · I-CON 1 (depth 3 없음 · 감쇠 적용 대상 없음)
- type_hint 계열별: 「표본비율의 확률(표준화·표 조회)」 5(176-e6 · 176-381 · 177-386 · 178-387 · 179-392) · 「정규모집단 표본평균의 확률」 4(177-384 · 178-389 · 178-390 · 179-393) · 「표본 크기·모평균 역산」 3(177-383 · 177-385 · 179-391) · 「평균·분산 공식 대입」 2(176-380 · 177-382) · 「이산 모집단 표본평균의 확률분포 직접 계산」 1(178-388)
- 대상층: 하위권 3 · 중하위권 4 · 중위권 5 · 중상위권 3 · 상위권 0
- 그림: 9문(`crop:fig-176-e6.png` · `crop:fig-177-384.png` · `crop:fig-177-385.png` · `crop:fig-177-386.png` · `crop:fig-178-388.png` · `crop:fig-178-389.png` · `crop:fig-178-390.png` · `crop:fig-179-391.png` · `crop:fig-179-393.png`). 이 중 178-388 만 확률분포표이고 나머지 8장은 곁들인 표준정규분포표라 골조 판정에 영향이 없다.
- 전사 답 확인 필요 표시: 없음(골조를 잡는 과정에서 answer 와 모순되는 조건을 발견한 문항 없음).

## 분류 이슈 목록

판정이 애매하거나 벤더 신호와 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-PROB-177-384 | STEP 1 구역(★2 출발)이지만 통찰 0 · M_total 4 로 v3.8 의 -1 이 걸려 ★1 로 내림. 벤더 라벨과 1단 차이 | ★1 / ★2 |
| GN-PROB-178-388 | 통찰 2개(RT·MI)로 +1 후보지만 표본 크기 3 이라 경우 나열이 짧아 ★3 유지. 이 범위에서 유일하게 정규분포를 쓰지 않는 문항이라 계열도 혼자 떨어짐 | ★3 / ★4 |
| GN-PROB-178-390 | 통찰 2개(BW·EQV)로 +1 후보지만 두 조건 해석이 모두 정형화된 형태라 ★3 유지. 평가원 기출 +1 도 주지 않음 | ★3 / ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위에서 가장 많이 반복된 type_hint 는 「표본비율의 확률 — 표준화 후 표 조회」 5문이다. 다만 조건이 **비율로 바로 주어지는 것**(176-381 · 177-386)과 **개수로 주어져 비율로 옮겨야 하는 것**(176-e6 · 178-387 · 179-392)은 학생이 틀리는 지점이 다르므로 카탈로그에서는 별도 유형으로 세우는 편이 낫다. 여기서도 그 한 단계 차이로 ★1 과 ★2 가 갈렸다.
- 「표본 크기·모평균 역산」 3문은 겉보기엔 한 유형이지만 177-383(공식 한 줄 역산) · 177-385(확률→z 역읽기 + 부호) · 179-391(부등식 + 경계)로 난이도가 ★2·★2·★4 까지 벌어진다. 「공식 역산」과 「확률 부등식에서 n 범위」는 나눠야 한다.
- 「표본평균의 평균·분산 공식 대입」(176-380 · 177-382)은 표본비율판과 표본평균판이 같은 골조라 **하나의 유형으로 통합**해도 무방하다. 모집단이 표본비율이냐 표본평균이냐만 다르다.
- 178-388 은 이 단원에서 유일하게 정규근사를 쓰지 않는 이산 표본평균 분포 문항이다. 「표본평균의 분포」 단원보다 앞 단원(확률분포)에 붙는 유형일 수 있어 카탈로그 배치를 따로 결정해야 한다.
- 179-393 의 「두 모집단 표본평균을 표준오차 관계로 잇기」는 이 범위에서 한 문항뿐이지만 평가원 기출 단골 골조라 카탈로그에 독립 유형으로 세울 가치가 있다. ★5 로 올리려면 I-XU·I-SYM 쪽 조건(두 표본평균의 차의 분포 등)을 얹어야 한다.
