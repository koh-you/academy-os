---
name: mechanism-데이터-GN-PROB-12
description: 개념원리 확률과 통계 12 확률변수와 확률분포(1/1 · 116~120쪽 · 17문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · base_star null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 확률과 통계 (22개정) · 전사본 latex-bank/gn-prob
  section: 12 확률변수와 확률분포
  unit_code: GN-PROB-12
  part: "1/1"
  extract_range: "116~120쪽 · 116-251~120-264"
  total_problems: 17
  unit_total: 17
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 확률과 통계는 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·level·tag)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). insight_type 은 insights 유무로만 갈랐고(비면 절차형 · 하나라도 있으면 통찰형), anchor_status 는 전부 null. depth_score 는 insights 의 effective_depth 합. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-prob/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-prob/items/<id>.tex
  image_source: latex-bank/gn-prob/figures/ (crops.json)
---

# 개념원리 확률과 통계 · 12 확률변수와 확률분포 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 확률과 통계 12단원(116~120쪽 · 17문항 전수)을 정독해 만든 mechanism 데이터다. 단원 내용은 이산확률변수의 정의, 확률질량함수의 두 성질($0\le p_i\le 1$ · $\sum p_i=1$), 확률분포표 작성, $\mathrm{P}(a\le X\le b)$ 계산으로 구성되며 평균·표준편차는 다음 단원으로 넘어간다. 그래서 이 범위의 골조는 대부분 「총합이 1 → 미지수 결정 → 구간 확률 합산」 한 줄기이고, 변별은 미지수가 놓이는 자리(표 · 식 · 조각 정의 · 무리식)와 구간을 읽어내는 방식에서 생긴다.

벤더 난이도 신호는 구역·level·tag 세 가지다. 「개념원리 익히기」(통번호)는 개념 확인이라 ★1 출발, 「필수·발전 예제」 구역(필수 예제 `쪽-eN` 과 그 아래 붙는 확인체크 유제)은 ★2 출발, 연습문제는 STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4 출발로 잡았다. 확인체크 tag 는 「개념원리 익히기」 안에서는 ★1 신호지만 이 단원에서는 전부 필수 예제의 유제로 붙어 있어 예제와 같은 층(★2)에서 출발시켰다. 출발점에서 통찰 2개 이상·depth 3 이면 +1, 통찰 0 이고 한 줄 즉답이면 −1 을 후보로 두었다. 계산량만 무거운 문항(118-257 등)은 v3.8 §2.11 에 따라 ★을 올리지 않았다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(유형 코드 + depth + 근거) · `variation_notes`(바꿔도 되는 수와 제약 · 통찰 골조를 유지한 설정 변형과 ★ 변동 지점)를 채웠다. answer 는 전사본 값을 그대로 옮겼고(전사·검수 단계에서 답지와 대조 완료) 여기서 재검산하지 않았다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-PROB-116-251
  page: 116
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ ○× 퀴즈 20문제에서 맞힌 문항 수 · 어느 도시의 연평균 강수량 · 수목원 방문객 수 · 전구의 수명이 각각 이산확률변수인지 연속확률변수인지 판정.
  category: "확률변수가 갖는 값의 꼴 → 이산/연속 구별"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이산확률변수와 연속확률변수의 구별"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    X 가 가질 수 있는 값을 하나씩 셀 수 있으면 이산, 어떤 구간의 모든 실수면 연속이라는 정의 한 줄을 네 번 적용한다. 계산도 변형도 없고 통찰 0 · M_total 4. 개념원리 익히기 구역 ★1 출발 유지.
  tier: star_1
  mechanism_primary: "각 변량의 값이 셀 수 있는가 판정 → 개수·횟수는 이산 · 구간 전체를 갖는 양은 연속"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ 이산확률변수 ⑵ 연속확률변수 ⑶ 이산확률변수 ⑷ 연속확률변수'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/116-251.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "문항 수 20 은 판정에 영향이 없어 자유롭게 바꿀 수 있다. 제약: 셀 수 있는 값(개수·횟수·인원)과 구간 값(길이·무게·시간·수명)이 각각 둘씩 섞이도록 유지해야 보기 균형이 유지된다."
    creative: "(1) 보기를 모두 이산으로 두고 '연속확률변수가 아닌 것'을 고르게(★1 유지) (2) '반올림한 키'처럼 경계 사례를 넣으면 판정 근거 설명이 필요해 ★2 (3) 이산/연속 구별과 '확률분포를 표로 나타낼 수 있는가'를 함께 묻기(★2)."
```

```yaml
- id: GN-PROB-116-252
  page: 116
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑵ 주사위를 2번 던질 때 홀수의 눈이 나오는 횟수 X 에 대하여, X 가 가질 수 있는 값을 모두 구하고 X 의 확률분포를 표로 나타내기.
  category: "시행에서 확률변수 값 나열 → 각 값의 확률 → 확률분포표"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "확률변수가 가질 수 있는 값과 확률분포표 만들기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    한 번 던져 홀수가 나올 확률이 1/2 이므로 X=0,1,2 각각의 확률을 두 번의 시행 결과를 세어 구하면 된다. X=1 에서 순서 두 가지를 세는 것이 유일한 주의점이고 표준 절차라 통찰로 보지 않았다. 통찰 0 · M_total 5 · 익히기 구역 → ★1.
  tier: star_1
  mechanism_primary: "한 회 홀수 확률 1/2 → 횟수별 경우의 수(1,2,1) → 확률분포표"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $0$, $1$, $2$ ⑵ 풀이 참조 ($\mathrm{P}(X=0)=\dfrac{1}{4}$, $\mathrm{P}(X=1)=\dfrac{1}{2}$, $\mathrm{P}(X=2)=\dfrac{1}{4}$)'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/116-252.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "던지는 횟수 2 → 3, 주사위 → 동전, '홀수의 눈' → '3의 배수의 눈'(확률 1/3). 제약: 한 회 성공확률이 유리수로 깔끔해야 표의 분모가 정리되고, 횟수를 늘리면 표의 열이 그만큼 늘어난다."
    creative: "(1) X 를 '홀수 횟수 − 짝수 횟수'로 바꾸면 값이 −2,0,2 로 대칭(★2) (2) 확률분포표를 먼저 주고 어떤 시행인지 역추적하게 하면 I-BW ★3 (3) 표를 만든 뒤 P(X≥1) 까지 묻기(★1 유지)."
```

```yaml
- id: GN-PROB-116-253
  page: 116
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑶ X=1,2,3,4 의 확률이 $\dfrac{1}{5}$, $a$, $\dfrac{3}{10}$, $\dfrac{1}{10}$ 인 확률분포표에서 상수 $a$, $\mathrm{P}(X=2$ 또는 $X=4)$, $\mathrm{P}(X\le 3)$ 구하기.
  category: "확률의 총합 1 → 미지수 결정 → 구간·합사건 확률"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "확률분포표에서 미지수 결정과 구간 확률"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    총합 1 에서 a 를 구하고, ⑵는 배반사건의 확률의 합, ⑶은 X=1,2,3 세 칸의 합(또는 1−P(X=4))으로 끝난다. 표를 읽는 것 외에 변환이 없고 통찰 0. 익히기 구역 ★1 출발 유지이며 미지수가 들어가 Mₐ=2 인 만큼만 M_total 이 6.
  tier: star_1
  mechanism_primary: "표의 확률 총합 = 1 → a 결정 → 해당 칸의 확률을 더하기"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\dfrac{2}{5}$ ⑵ $\dfrac{1}{2}$ ⑶ $\dfrac{9}{10}$'
  answer_source: "답지"
  figure: 'crop:fig-116-253.png'
  latex: latex-bank/gn-prob/items/116-253.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "표의 확률값 1/5, 3/10, 1/10 과 X 값 1~4. 제약: 미지수를 뺀 나머지 합이 1 보다 작아야 a>0 이 나오고, 분모를 10 계열로 통일하면 통분 부담이 없다."
    creative: "(1) 묻는 구간을 P(X≥2)·여사건으로 바꾸기(★1 유지) (2) 미지수를 두 칸(a, 2a)에 두면 총합 조건 하나로 결정 ★2 (3) 미지수를 a² 로 두면 근 기각이 생겨 I-VF ★2."
```

### 필수·발전 예제

```yaml
- id: GN-PROB-117-e1
  page: 117
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    확률질량함수가 $\mathrm{P}(X=x)=\dfrac{x}{k}$ $(x=1,2,3,4,5)$ 일 때 상수 $k$ 의 값.
  category: "확률질량함수의 총합 1 → 등차 합으로 미지수 결정"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "확률질량함수의 성질 — 확률의 총합이 1로 미지수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x=1 부터 5 까지 더해 (1+2+3+4+5)/k=1 한 줄이면 끝난다. 통찰 0 · M_total 5 라 −1 후보이지만, 확률질량함수의 성질을 처음 쓰는 필수 예제 대표 문항이고 미지수가 든 식 표현(Mₐ=2)이라 ★2 출발을 유지했다. [분류 이슈] 한 줄 즉답이어서 ★1 로도 읽힌다.
  tier: star_2
  mechanism_primary: '$\sum_{x=1}^{5}\dfrac{x}{k}=1$ → 분자 합 15 → k=15'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$15$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-prob/items/117-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자 x 와 범위 x=1~5. 제약: 분자 수열의 합이 k 를 정수로 만들어야 하고, x=1~n 이면 k=n(n+1)/2 로 따라 움직인다."
    creative: "(1) 분자를 x² 로 바꾸면 제곱 합 공식이 필요해 ★2 유지~★3 (2) k 를 주고 P(X≥3)을 묻는 역방향(★2) (3) 분자를 ax+b 로 두면 미지수 두 개라 조건이 하나 더 필요해 ★3."
```

```yaml
- id: GN-PROB-117-254
  page: 117
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    X=0,1,2 의 확률이 $a^2$, $\dfrac{1}{3}$, $\dfrac{a}{3}$ 인 확률분포표에서 상수 $a$ 의 값.
  category: "확률의 총합 1 → 이차방정식 → 확률 조건으로 근 기각"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 3
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "이차방정식의 두 근 중 확률이 음수가 되는 쪽을 0≤p≤1 로 되돌려 확인해 기각"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "확률분포표에서 미지수 결정과 구간 확률"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    총합 1 을 3 배 해 정리하면 인수분해되는 이차방정식이 되고 근이 두 개 나온다. 여기서 한 근은 확률이 음수가 되어 기각해야 하므로 답 도달 뒤 원 조건 재대입이 필수다(I-VF d1). 계산 자체는 가벼워 ★2 출발 유지. [분류 이슈] 근 기각을 통찰로 볼지 T-범위 함정으로만 볼지 경계.
  tier: star_2
  mechanism_primary: "표의 확률 총합 = 1 → 이차방정식 → 두 근 중 0≤p≤1 을 만족하는 것만 채택"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{2}{3}$'
  answer_source: "답지"
  figure: 'crop:fig-117-254.png'
  latex: latex-bank/gn-prob/items/117-254.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "표의 a², 1/3, a/3 과 X 값 0,1,2. 제약: 총합 식이 인수분해되는 이차식이어야 하고, 두 근 중 정확히 하나만 0≤p≤1 을 만족해 기각이 실제로 일어나야 한다."
    creative: "(1) 미지수 배치를 a², 2a, 1/6 처럼 바꾸기(★2 유지) (2) 두 근이 모두 확률 조건을 만족하게 만들면 조건이 하나 더 필요해 ★3 (3) a 대신 P(X≥1)을 묻게 하면 기각 뒤 한 단계 추가(★2)."
```

```yaml
- id: GN-PROB-117-255
  page: 117
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    확률질량함수가 $\mathrm{P}(X=x)=\dfrac{k}{x(x+1)}$ $(x=1,2,3,\cdots,7)$ 일 때 상수 $k$ 의 값.
  category: "확률의 총합 1 → 부분분수 분해로 망원합 → 미지수 결정"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$\dfrac{1}{x(x+1)}$ 을 $\dfrac{1}{x}-\dfrac{1}{x+1}$ 로 바꿔 7항의 합을 첫 항과 끝 항만 남는 망원합으로 전환'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "확률질량함수의 성질 — 확률의 총합이 1로 미지수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    7 항을 통분해 더해도 되지만 부분분수로 분해하면 가운데가 모두 지워져 한 줄로 끝난다. 이 표현 전환이 이 문항의 유일한 착안(I-RT d2)이고, 그것 없이는 계산 마찰만 커진다. 통찰 1개·depth 2 라 +1 조건(2개 이상 또는 depth 3)에 못 미쳐 예제 구역 ★2 유지.
  tier: star_2
  mechanism_primary: '부분분수 분해 → 망원합으로 $\sum$ 정리 → $k\cdot(\text{망원합})=1$ 에서 k'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{8}{7}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/117-255.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "범위 x=1~7 과 분모 x(x+1). 제약: 부분분수로 망원이 되는 분모 꼴(x(x+1), x(x+2))을 유지해야 하고, 상한 n 을 바꾸면 k 가 (n+1)/n 으로 따라 움직인다."
    creative: "(1) 분모를 x(x+2)로 바꾸면 망원 항이 두 칸씩 남아 ★3 (2) k 를 주고 P(X≤3)을 묻기(★2 유지) (3) 상한을 문자 n 으로 두면 일반항 추론이 필요해 I-PD ★3."
```

```yaml
- id: GN-PROB-118-e2
  page: 118
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    X=0,1,2,3 의 확률이 $a$, $3a$, $3a$, $a$ 인 확률분포표에서 $\mathrm{P}(X\ge a)$ 구하기($a$ 는 상수).
  category: "총합 1 로 a 결정 → 구한 a 를 부등식 경계로 재해석 → 구간 확률"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '확률값으로 구한 $a$ 가 그대로 부등식의 경계가 되므로, X 가 정수값만 갖는 것을 이용해 $X\ge a$ 를 $X\ge 1$ 로 동치 변환'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '확률질량함수의 성질 — $\mathrm{P}(a\le X\le b)$'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    총합 8a=1 에서 a 를 구하는 것은 절차지만, 같은 문자 a 가 확률값이면서 동시에 부등식의 경계로 쓰이는 것이 이 문항의 함정이다. X 가 0,1,2,3 만 갖는다는 점을 써서 구간을 정수 경계로 옮기는 동치 변환이 핵심(I-EQV d2). 여사건 1−P(X=0)으로도 된다. 통찰 1개·depth 2 → 예제 ★2 유지.
  tier: star_2
  mechanism_primary: '표의 총합 = 1 → a 결정 → $X\ge a$ 를 정수 경계로 환산 → 해당 칸 확률 합(또는 여사건)'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{7}{8}$'
  answer_source: "본문 풀이"
  figure: 'crop:fig-118-e2.png'
  latex: latex-bank/gn-prob/items/118-e2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "표의 비 a : 3a : 3a : a 와 X 값 0~3. 제약: 계수 합이 a 를 단위분수로 만들어야 하고, 구한 a 가 X 의 값 사이에 놓여 P(X≥a) 가 실제로 한 칸에서 잘려야 함정이 살아난다."
    creative: "(1) 묻는 것을 P(X<a)·P(a≤X≤2)로 바꾸기(★2 유지) (2) 계수를 1:2:3:4 로 바꿔 a=1/10 으로 두면 여전히 X≥1(★2) (3) a 가 1 과 2 사이에 오도록 계수를 조정하면 재해석 단계가 한 번 더 필요해 ★3."
```

```yaml
- id: GN-PROB-118-256
  page: 118
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    X=-1,0,1 의 확률이 $a$, $\dfrac{1}{4}$, $b$ 인 확률분포표에서 $\mathrm{P}(-1\le X\le 0)=\dfrac{3}{4}$ 일 때 $a-b$ 의 값.
  category: "구간 확률 조건 + 총합 1 → 두 미지수 결정"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "확률분포표에서 미지수 결정과 구간 확률"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    주어진 구간 확률이 a+1/4 이므로 a 가 바로 나오고, 총합 1 에서 b 가 나온다. 연립이랄 것도 없는 두 줄이고 통찰 0 · M_total 5. 예제 유제 구역 ★2 출발을 유지했다(미지수 두 개라 Mₐ=2).
  tier: star_2
  mechanism_primary: '$\mathrm{P}(-1\le X\le 0)=a+\dfrac{1}{4}$ → a → 총합 1 → b → a−b'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{4}$'
  answer_source: "답지"
  figure: 'crop:fig-118-256.png'
  latex: latex-bank/gn-prob/items/118-256.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "가운데 확률 1/4 과 구간 확률 3/4, X 값 −1,0,1. 제약: 주어진 구간 확률이 이미 아는 칸의 값보다 커야 a>0 이고, 총합에서 b>0 이 나와야 한다."
    creative: "(1) a−b 대신 ab·a/b 를 묻기(★2 유지) (2) 조건을 P(X≥0)=… 로 바꾸면 결정 순서가 뒤집힘(★2) (3) X 값을 −2~2 로 늘리고 조건을 두 개 주면 연립이 생겨 ★3."
```

```yaml
- id: GN-PROB-118-257
  page: 118
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    확률질량함수가 $x=0,1$ 에서 $k-\dfrac{x}{3}$, $x=2,3,4$ 에서 $\dfrac{k}{6}x$ 로 조각 정의될 때 $\mathrm{P}(X\le 2)$ 구하기($k$ 는 상수).
  category: "조각 정의 확률질량함수 → 총합 1 로 k 결정 → 구간 확률"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '확률질량함수의 성질 — $\mathrm{P}(a\le X\le b)$'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 구간의 식을 각각 해당 x 에 대입해 5 개 확률을 모두 쓰고 더해 k 를 구한 뒤, x=0,1,2 세 개만 다시 더하면 된다. 어느 x 가 어느 식을 쓰는지 놓치는 것이 함정(T-범위·T-표기)이고 분수 계산량이 이 범위에서 가장 많지만, 착안이랄 것이 없어 통찰 0. v3.8 §2.11 에 따라 계산 마찰로 ★을 올리지 않고 ★2 유지. [분류 이슈] M_total 8 이라 체감은 ★3 쪽.
  tier: star_2
  mechanism_primary: "구간별 식에 x 대입 → 5 개 확률의 합 = 1 로 k 결정 → x=0,1,2 의 확률 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{5}{9}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/118-257.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "조각 식의 계수(k−x/3 · kx/6)와 구간 경계 x=1|2, 상한 x=4. 제약: 모든 x 에서 확률이 0 이상이어야 하고(특히 k−1/3>0), 총합 1 에서 k 가 유리수로 떨어져야 한다."
    creative: "(1) 묻는 구간을 P(X≥2)·P(1≤X≤3)으로 바꾸기(★2 유지) (2) 두 조각 식을 맞바꿔 큰 x 쪽이 감소하게 두면 음수 검사가 필수가 되어 I-VF ★3 (3) 구간 경계를 문자로 두면 경우 분기가 생겨 ★4."
```

```yaml
- id: GN-PROB-119-e3
  page: 119
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑵ 흰 공 4개와 검은 공 3개가 든 주머니에서 임의로 3개를 동시에 꺼낼 때 나오는 흰 공의 개수 X 의 확률질량함수를 구해 확률분포표로 나타내고, 흰 공이 2개 이상 나올 확률을 구하기.
  category: "색깔별 조합의 곱 / 전체 조합 → 확률질량함수 일반식 → 구간 확률"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '흰 공 x 개가 나오는 사건을 색깔별 조합의 곱을 전체 조합으로 나눈 비로 옮겨 x 에 대한 하나의 일반식으로 표현'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "이산확률변수의 확률 — 조합으로 확률분포 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x 를 하나씩 대입해 네 칸을 따로 세도 답은 나오지만, 흰 x 개·검은 3−x 개라는 짝을 보고 한 줄 일반식으로 옮기는 것이 이 예제가 가르치려는 착안이다(I-RT d2). ⑵는 표에서 x=2,3 을 더하면 되고 여사건으로도 된다. 통찰 1개·depth 2 라 예제 구역 ★2 유지.
  tier: star_2
  mechanism_primary: '흰 x 개·검은 3−x 개 선택 → $\dfrac{{}_4\mathrm{C}_x\times{}_3\mathrm{C}_{3-x}}{{}_7\mathrm{C}_3}$ → x=2,3 의 확률 합'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $\mathrm{P}(X=x)=\dfrac{{}_4\mathrm{C}_x\times{}_3\mathrm{C}_{3-x}}{{}_7\mathrm{C}_3}$ $(x=0,\,1,\,2,\,3)$, 표는 풀이 참조 ($\mathrm{P}(X=0)=\dfrac{1}{35}$, $\mathrm{P}(X=1)=\dfrac{12}{35}$, $\mathrm{P}(X=2)=\dfrac{18}{35}$, $\mathrm{P}(X=3)=\dfrac{4}{35}$) ⑵ $\dfrac{22}{35}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-prob/items/119-e3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "흰 4·검은 3·꺼내는 개수 3. 제약: 꺼내는 개수가 전체 이하여야 하고, X 의 범위가 max(0, r−검은 공 수)~min(r, 흰 공 수) 로 정해져 표의 열 수가 함께 바뀐다."
    creative: "(1) ⑵를 '흰 공이 1개 이하'로 바꾸면 여사건 선택 여지가 생김(★2 유지) (2) 공을 세 색으로 늘리면 두 변수 분포가 되어 ★4 (3) 꺼낸 공을 되돌려 넣는 복원추출로 바꾸면 이항분포 골조로 이동(★3)."
```

```yaml
- id: GN-PROB-119-258
  page: 119
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑵ 남학생 4명·여학생 3명인 동아리에서 청소 당번 2명을 임의로 뽑을 때 뽑힌 여학생 수 X 의 확률질량함수와 확률분포표를 구하고, 여학생이 1명 이하로 뽑힐 확률을 구하기.
  category: "성별 조합의 곱 / 전체 조합 → 확률질량함수 일반식 → 구간 확률"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '여학생 x 명·남학생 2−x 명 뽑는 사건을 조합의 비로 옮겨 x 의 일반식으로 표현'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "이산확률변수의 확률 — 조합으로 확률분포 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    앞 예제와 같은 골조를 사람 수와 뽑는 수만 바꿔 반복하는 유제라, 일반식 착안은 이미 제시된 틀을 따라가는 수준(I-RT d1)이다. 전체가 21 로 작아 계산 부담도 가볍다. ⑵는 x=0,1 의 합 또는 1−P(X=2). 예제 유제 구역 ★2 유지.
  tier: star_2
  mechanism_primary: '여 x 명·남 2−x 명 선택 → $\dfrac{{}_3\mathrm{C}_x\times{}_4\mathrm{C}_{2-x}}{{}_7\mathrm{C}_2}$ → x=0,1 의 확률 합'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $\mathrm{P}(X=x)=\dfrac{{}_3\mathrm{C}_x\times{}_4\mathrm{C}_{2-x}}{{}_7\mathrm{C}_2}$ $(x=0,\,1,\,2)$, 표는 풀이 참조 ($\mathrm{P}(X=0)=\dfrac{2}{7}$, $\mathrm{P}(X=1)=\dfrac{4}{7}$, $\mathrm{P}(X=2)=\dfrac{1}{7}$) ⑵ $\dfrac{6}{7}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/119-258.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "남 4·여 3·뽑는 수 2. 제약: 뽑는 수가 전체 이하이고 분모 조합값이 약분되는 수여야 표가 깔끔하다. 여학생 수보다 뽑는 수가 크면 X 의 상한이 여학생 수로 잘린다."
    creative: "(1) ⑵를 '여학생이 1명 이상'으로 바꾸면 여사건이 자연스러움(★2 유지) (2) 당번을 3명으로 늘리면 X=0~3 으로 표가 커짐(★2) (3) 남녀 수를 문자로 두고 일반식을 묻게 하면 ★4."
```

```yaml
- id: GN-PROB-119-259
  page: 119
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    1~5 가 하나씩 적힌 5장의 카드에서 임의로 2장을 동시에 뽑을 때 두 수의 차를 X 라 할 때 $\mathrm{P}(X=1$ 또는 $X=3)$ 구하기.
  category: "파생 변량(두 수의 차)의 경우의 수 세기 → 합사건 확률"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이산확률변수의 확률 — 경우의 수로 확률 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    전체 10 가지 중 차가 1 인 쌍과 차가 3 인 쌍을 직접 세어 더하면 끝난다. 차가 d 인 쌍이 5−d 개라는 규칙을 굳이 발견하지 않아도 풀려 통찰로 카운트하지 않았다. 두 사건이 배반임을 쓰는 것이 유일한 개념. 예제 유제 구역 ★2 유지.
  tier: star_2
  mechanism_primary: '전체 $_5\mathrm{C}_2=10$ → 차가 1 인 쌍 4개·차가 3 인 쌍 2개 → 배반사건 확률의 합'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{3}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/119-259.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "카드 장수 5(숫자 1~5)·뽑는 수 2·묻는 차 1 또는 3. 제약: 차가 d 인 쌍의 개수가 n−d 이므로 n 을 바꾸면 분포가 그대로 밀리고, 묻는 두 값은 서로 달라 배반이어야 한다."
    creative: "(1) 차 대신 합·곱을 X 로 두면 경우의 수 세기가 달라짐(★2) (2) '차가 2 이상'으로 묻기(★2 유지) (3) 3장을 뽑아 최댓값−최솟값을 X 로 두면 경우 분류가 늘어 ★3."
```

### 연습문제 STEP 1

```yaml
- id: GN-PROB-120-260
  page: 120
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    X 가 $-1$, $0$, $1$ 을 갖고 각 확률이 $3k^2$, $k$, $k^2+2k$ 일 때 상수 $k$ 의 값.
  category: "확률의 총합 1 → 이차방정식 → 확률 조건으로 근 기각"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 3
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '이차방정식의 두 근을 각각 세 확률에 되돌려 대입해 음수가 나오는 근을 기각'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "확률질량함수의 성질 — 확률의 총합이 1로 미지수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    세 확률을 더해 1 로 놓으면 인수분해되는 이차방정식이 되고 근이 두 개 나온다. 음수 근은 P(X=0)=k<0 이 되어 기각해야 하므로 사후 확인이 풀이의 마지막 단계다(I-VF d1). 117-254 와 같은 골조이고 계산은 가볍다. STEP 1 ★2 출발 유지.
  tier: star_2
  mechanism_primary: "세 확률의 합 = 1 → 이차방정식 → 두 근 중 모든 확률을 0 이상으로 만드는 것만 채택"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{1}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/120-260.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 확률식의 계수 3k², k, k²+2k. 제약: 총합 식이 인수분해되는 이차식이어야 하고, 두 근 중 하나만 모든 확률을 0 이상 1 이하로 만들어야 기각 단계가 살아난다."
    creative: "(1) 세 식의 자리만 바꾸기(★2 유지) (2) 두 근이 모두 확률 조건을 통과하게 만들면 조건이 하나 더 필요해 ★3 (3) k 대신 P(X≥0)을 묻게 해 한 단계 추가(★2)."
```

```yaml
- id: GN-PROB-120-261
  page: 120
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    각 면에 1, 2, 3, 4 가 적힌 정사면체를 두 번 던져 바닥 면 두 수의 합을 X 라 할 때 $\mathrm{P}(3\le X\le 5)$ 구하기.
  category: "두 수의 합의 경우의 수 → 구간 확률"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이산확률변수의 확률 — 경우의 수로 확률 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    전체 16 가지에서 합이 3, 4, 5 인 경우를 각각 세어 더하면 된다. 순서쌍을 세는 표준 절차뿐이라 통찰 0 이고, 합의 분포가 5 를 중심으로 대칭이라는 점을 몰라도 풀린다. STEP 1 ★2 출발 유지.
  tier: star_2
  mechanism_primary: "전체 4×4=16 → 합이 3·4·5 인 순서쌍 2+3+4 → 구간 확률"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{9}{16}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/120-261.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정사면체 숫자 1~4·던지는 횟수 2·구간 3≤X≤5. 제약: 합의 분포가 가운데를 축으로 대칭이므로 구간을 대칭 위치로 잡으면 여사건이 더 쉬워지고, 면 수를 늘리면 경우의 수만 커진다."
    creative: "(1) 여사건 P(X≤2)+P(X≥6)으로 묻기(★2 유지) (2) 합 대신 차·곱을 X 로 두면 분포가 비대칭이 되어 ★2~3 (3) 세 번 던지기로 늘리면 계산량만 커져 ★ 상승 신호가 아님(v3.8 질 저하 주의)."
```

### 연습문제 STEP 2

```yaml
- id: GN-PROB-120-262
  page: 120
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    확률질량함수가 $\mathrm{P}(X=x)=\dfrac{k}{\sqrt{x+1}+\sqrt{x}}$ $(x=1,2,3,\cdots,8)$ 일 때 $\mathrm{P}(X\ge 4)$ 구하기($k$ 는 상수).
  category: "분모 유리화 → 망원합으로 총합 1 에서 k → 같은 방식으로 구간 확률"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '분모의 제곱근 합을 유리화해 인접 제곱근의 차 꼴로 바꾸면 8항의 합이 양 끝만 남는 망원합이 됨'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "확률질량함수의 성질 — 확률의 총합이 1로 미지수 결정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    유리화라는 표현 전환 하나로 총합도 구간 확률도 양 끝 제곱근의 차만 남는다(I-RT d2). 유리화를 떠올리지 못하면 8개 무리식을 근사도 없이 더해야 해 사실상 막히므로 진입 저항이 실제로 있다. STEP 2 ★3 출발 유지. [분류 이슈] 유리화 착안을 I-RT 로 볼지 I-SC(직접 통분 vs 유리화 전략 분기)로 볼지 경계.
  tier: star_3
  mechanism_primary: '분모 유리화 → $k(\sqrt{x+1}-\sqrt{x})$ → 망원합 총합 1 로 k → $\mathrm{P}(X\ge 4)=k(\sqrt{9}-\sqrt{4})$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/120-262.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모 꼴 √(x+1)+√x 와 범위 x=1~8, 묻는 구간 X≥4. 제약: 유리화 뒤 인접 제곱근의 차가 되어야 망원이 성립하고, 상한이 (완전제곱수−1) 이어야 k 와 답이 유리수로 떨어진다."
    creative: "(1) 묻는 구간을 P(X≤3)·P(2≤X≤5)로 바꾸기(★3 유지) (2) 분모를 √(x+2)+√x 로 두면 망원이 두 칸씩 건너뛰어 남는 항이 늘어 ★4 (3) k 를 주고 상한 n 을 되묻는 역방향이면 I-BW 추가 ★4."
```

```yaml
- id: GN-PROB-120-263
  page: 120
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $\mathrm{P}(X=x)=p_x$ $(x=1,2,3,4)$ 이고 $p_2-p_1=p_3-p_2=p_4-p_3=\dfrac{1}{8}$ 일 때 $\mathrm{P}(X^2-6X+8<0)$ 구하기.
  category: "등차인 확률의 합 1 → 각 항 결정 · 이차부등식 조건을 X 값으로 환원"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$X^2-6X+8<0$ 을 $2<X<4$ 로 푼 뒤, X 가 1,2,3,4 만 갖는 이산확률변수임을 써서 사건을 X=3 하나로 동치 변환'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "확률질량함수의 성질 — 확률의 총합이 1로 미지수 결정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    묻는 사건이 X 에 관한 이차부등식으로 위장돼 있어, 부등식의 해 구간 안에 들어가는 X 의 값이 무엇인지로 먼저 옮겨야 한다(I-EQV d2). 확률 쪽은 공차가 주어진 등차 네 항의 합이 1 이라는 한 줄 조건이다. 경계를 열린 부등식으로 읽지 않으면 2 나 4 를 포함시키는 함정. STEP 2 ★3 출발 유지.
  tier: star_3
  mechanism_primary: '등차 네 항의 합 = 1 → $p_1$ → $X^2-6X+8<0$ 를 $2<X<4$ → 정수 X=3 → $p_3$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{5}{16}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/120-263.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공차 1/8·항 수 4·이차부등식 x²−6x+8<0. 제약: 등차 확률이 모두 0 이상이어야 해 공차에 상한이 있고, 부등식의 해 구간 안에 들어가는 정수 X 의 개수가 답이 몇 항의 합인지를 정한다."
    creative: "(1) 부등식을 x²−7x+12<0(해 3<x<4, 정수 없음)으로 바꾸면 확률 0 이라는 함정 ★3 (2) 해 구간에 정수 두 개가 들어가게 하면 두 항의 합(★3 유지) (3) 공차를 미지수로 두고 P(X=3) 값을 주면 역추적이 되어 ★4."
```

### 연습문제 실력 UP

```yaml
- id: GN-PROB-120-264
  page: 120
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제"
  summary: |
    1, 2, 3 중 하나가 적힌 공 7개에서 2개를 동시에 꺼내 두 수의 곱을 X 라 하자. $\mathrm{P}(X=4)=\dfrac{1}{21}$, $2\mathrm{P}(X=2)=3\mathrm{P}(X=6)$ 일 때 $\mathrm{P}(X\le 3)$ 의 값. 5지선다.
  category: "곱의 값에서 공 구성 역추적 → 두 조건 통합으로 개수 확정 → 구간 확률"
  M: {s: 3, k: 2, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '주어진 확률값에서 거꾸로, 곱이 4 가 되는 조합은 2 와 2 뿐이라는 점을 읽어 2 가 적힌 공의 개수를 먼저 확정'
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '두 번째 비례 조건과 공이 모두 7개라는 조건을 묶어 1·3 이 적힌 공의 개수를 한 번에 결정'
  insight_count: 2
  depth_score: 4.00
  type_id: null
  type_hint: "확률 조건으로 시행 구성 역추적"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    이 단원에서 유일하게 확률분포가 주어지지 않고 시행의 구성(각 숫자 공의 개수)이 미지인 문항이다. 곱이라는 파생 변량이 어떤 조합에서 나오는지 역으로 따져 개수를 확정하고(I-BW d2), 남은 조건과 총 개수를 묶어 나머지를 결정한다(I-CON d2). 마지막 P(X≤3)은 곱이 1·2·3 인 경우를 다시 조합으로 세는 절차. 실력 UP + 기출 + 통찰 2개로 +1 후보지만 ★5 게이트를 넘지 못해 ★4. [분류 이슈] ★5 후보였으나 SC/VF/SYM/XU 부재로 ★4 확정.
  tier: star_4
  mechanism_primary: '곱 4 → 2·2 뿐 → 2 가 적힌 공의 개수 → 비례 조건 + 총 7개 → 1·3 의 개수 → 곱이 3 이하인 조합의 확률 합'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '④'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/120-264.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공의 총 개수 7·적힌 수 1,2,3·조건값 1/21 과 2:3 비. 제약: 전체 조합수가 분모이고, 두 조건에서 각 숫자 공의 개수가 자연수로 유일하게 결정돼야 하며 2 가 적힌 공이 2개 이상이어야 곱 4 가 존재한다."
    creative: "(1) 묻는 것을 P(X≥4)·P(X=6)으로 바꾸기(★4 유지) (2) 숫자를 1,2,4 로 바꾸면 곱이 겹치지 않아 역추적이 쉬워져 ★3 (3) 개수 조건을 하나 줄여 후보가 여러 개 나오게 하면 조건 위배 기각이 생겨 I-VF 추가 ★5 후보."
```

## 표본 판정 요약 (17문)

- ★ 분포: ★1 3 · ★2 11 · ★3 2 · ★4 1 · ★5 0
- 통찰형 9 · 절차형 8 · premium 0
- 통찰 유형(라벨 10개): I-RT 4 · I-VF 2 · I-EQV 2 · I-BW 1 · I-CON 1 — SC·SYM·PD·XU·MI 는 이 범위에 없음
- type_hint 상위: 「확률질량함수의 성질 — 총합 1 로 미지수 결정」 5 · 「확률분포표에서 미지수 결정과 구간 확률」 3 · 「확률질량함수의 성질 — $\mathrm{P}(a\le X\le b)$」 2 · 「이산확률변수의 확률 — 조합으로 확률분포」 2 · 「이산확률변수의 확률 — 경우의 수로 확률」 2 (나머지 3 종 각 1)
- 그림: 4문(`crop:fig-116-253.png` · `crop:fig-117-254.png` · `crop:fig-118-e2.png` · `crop:fig-118-256.png`) — 모두 확률분포표 크롭이라 표 값 확인용
- M_total 분포: 4~5 가 6문 · 6~7 이 9문 · 8 이상이 2문(118-257 의 8, 120-264 의 10)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-PROB-117-e1 | 필수 예제 대표 문항이지만 총합 1 한 줄 즉답(통찰 0 · M_total 5) — 규칙상 −1 후보. 예제 층을 존중해 라벨 ★2 유지 | ★1 / ★2 |
| GN-PROB-117-254 | 이차방정식의 근 기각을 I-VF 통찰로 볼지 T-범위 함정(절차형)으로만 볼지 경계. 통찰형으로 기록(120-260 도 같은 골조) | ★2 |
| GN-PROB-118-257 | 조각 정의 확률질량함수로 M_total 8(이 범위 최대)이나 착안이 없음. v3.8 §2.11 에 따라 계산 마찰로 ★을 올리지 않음 | ★2 / ★3 |
| GN-PROB-120-262 | 유리화 망원합을 I-RT(표현 전환)로 볼지 I-SC(직접 통분 vs 유리화 전략 분기)로 볼지 경계. 같은 물음이 117-255 의 부분분수에도 해당 | ★3 |
| GN-PROB-120-264 | 실력 UP + 교육청 기출 + 통찰 2개로 +1 후보였으나 SC/VF/SYM/XU 가 없어 ★5 게이트 미충족 → ★4 확정 | ★4 / ★5 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위에서 압도적으로 반복된 골조는 **「확률의 총합 1 로 미지수 결정 → 구간 확률」** 하나(17문 중 10문)다. 카탈로그를 만들 때 이것을 하나의 큰 유형으로 두고, 미지수가 놓이는 자리에 따라 **표 제시형**(116-253 · 117-254 · 118-256)과 **식 제시형**(117-e1 · 117-255 · 118-257 · 120-260 · 120-262 · 120-263)으로 하위 분류하는 것이 실제 풀이 차이와 맞는다.
- 식 제시형 안에서 **합을 그대로 더하는 것(117-e1)** 과 **합을 망원합으로 접어야 하는 것(117-255 · 120-262)** 은 base ★ 가 1단 이상 벌어지므로 따로 세워야 한다. 부분분수와 유리화는 도구만 다르고 골조가 같아 한 유형으로 통합해도 된다.
- **근 기각형**(117-254 · 120-260)은 표/식 구분과 무관하게 「미지수가 이차식으로 들어가 확률 조건으로 근을 걸러내는 유형」으로 묶는 것이 낫다.
- **조합으로 확률분포를 만드는 유형**(119-e3 · 119-258)은 다음 단원의 이항분포·초기하 계열로 이어지는 뿌리이므로 이 단원이 아니라 확률분포 계열 상위에 두는 것을 검토한다.
- **경우의 수로 확률을 세는 유형**(119-259 · 120-261)은 파생 변량(합·차·곱)이 무엇이냐만 다르므로 하나로 통합하고, 120-264 처럼 **시행 구성 자체가 미지인 역추적형**만 별도 ★4 유형으로 세운다.
