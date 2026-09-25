---
name: mechanism-데이터-RPM-PROB-04-p2
description: RPM 확률과 통계 04 확률분포 (1)(2/3 · 유형 03~10) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: RPM 확률과 통계 (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-prob
  section: 04 확률분포 (1)
  unit_code: PROB-04
  part: "2/3"
  extract_range: "59~63쪽 · 0343~0371"
  total_problems: 29
  unit_total: 93
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 확률과 통계는 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-prob/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-prob/items/<id>.tex
  image_source: latex-bank/rpm-prob/figures/ (crops.json)
---

# RPM 확률과 통계 · 04 확률분포 (1) (2/3) 정독 데이터 (v1.0)

이 파일은 RPM 확률과 통계 04단원 「확률분포 (1)」의 2/3 구간(59~63쪽 · 0343~0371 · 29문항)을 다룬다. 구역은 전부 「유형 NN …」 형태로, 유형 03 이산확률변수의 확률부터 유형 10 이항분포에서의 평균·분산·표준편차까지 8개 유형이 연속으로 이어진다. RPM 의 벤더 난이도 신호는 (1) 구역 이름(교과서 / 유형 / 유형 UP / 시험에 꼭 나오는 문제 / 서술형 / 실력 Up), (2) 문항별 난이도 표시 `level`(하·중하·중·상중·상), (3) 태그(대표문제·중요·서술형·기출) 세 가지다. 이 구간은 모두 유형 구역이므로 level 없는 대표문제는 ★2 에서 출발하고, 중하 → ★1~2, 중 → ★2, 상중 → ★3 을 출발점으로 삼아 M_total 과 통찰로 ±1 조정했다.

이 자산의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(유형 코드 + depth + 근거) · `variation_notes`(바꿔도 되는 수와 제약 · 통찰 골조를 유지한 창의 변형)를 채웠다. 이 구간의 골조는 크게 네 갈래다 — (가) 초기하형 뽑기에서 확률분포표를 직접 만들어 E·V·σ 로 가는 길, (나) 표나 확률질량함수에 있는 상수를 확률의 합 1 로 결정한 뒤 E·V 로 가는 길, (다) E(aX+b)=aE(X)+b · V(aX+b)=a²V(X) 변환 공식을 정·역방향으로 쓰는 길, (라) 이항분포 B(n,p) 의 확률·평균 np·분산 npq 를 쓰는 길. 숫자 변형은 대부분 (가)의 공 개수·(나)의 표 값·(다)의 계수·(라)의 n,p 를 바꾸는 것으로 충분하며, 창의 변형에서 ★ 가 올라가는 지점은 거의 항상 「값을 주고 답을 구하기」를 「답을 주고 조건을 역추적하기」로 뒤집는 순간이다.

## 문항 데이터

### 유형 03 이산확률변수의 확률

```yaml
- id: RPM-PROB-0343
  page: 59
  vendor_label: "유형 03 이산확률변수의 확률"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    남자 4명, 여자 5명 중 3명의 대표를 뽑을 때 남자 대표의 수 X 에 대하여 P(X>=2).
  category: "초기하형 뽑기 → X=2, X=3 확률의 합"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "조합으로 정해지는 이산확률변수의 확률 (P(X>=k) 꼴)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    X 가 가질 수 있는 값 0~3 중 2, 3 두 경우만 조합으로 세어 더하면 끝. 여사건을 쓸 필요도 없고 조건 해석 단계가 없다.
    유형 구역 대표문제(★2 출발)이나 통찰 0 · M_total 5 → −1 적용해 ★1.
  tier: star_1
  mechanism_primary: "9C3 분모 → 남자 2명·3명 경우를 각각 조합으로 세기 → 두 확률의 합"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{17}{42}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0343.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "남·여 인원(4,5)과 뽑는 수 3, 그리고 부등식 기준값 2 를 바꿀 수 있음. 제약: 남자 수가 뽑는 수보다 작으면 X 의 최댓값이 줄어 경우가 사라지고, 분모 조합이 커지면 약분이 안 돼 답이 지저분해짐(전체 조합이 50~200 정도가 적당)."
    creative: "(1) P(X<=1) 로 바꿔 여사건 착안을 요구(★1 유지) (2) '적어도 한 명은 여자' 같은 말로 바꿔 조건→X 범위 번역을 넣기(I-EQV d1 · ★2) (3) 확률값을 주고 남자 인원을 역추적하게 하면 I-BW 가 생겨 ★3."
```

```yaml
- id: RPM-PROB-0344
  page: 59
  vendor_label: "유형 03 이산확률변수의 확률"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    주사위를 2번 던져 나온 두 눈의 수의 합을 X 라 할 때 P(3<=X<=5). 5지선다.
  category: "표본공간 36 → 합이 3,4,5 인 경우의 수 세기"
  M: {s: 1, k: 2, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 주사위 눈의 합이 정하는 이산확률변수의 확률"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    합이 3,4,5 인 순서쌍을 2+3+4 로 세고 36 으로 나누면 끝. 분포표를 만들 필요도 없다.
    벤더 「중」(★2 출발)이나 통찰 0 · M_total 4 → −1 적용해 ★1. 1단 차이라 이슈로 올리지는 않았다.
  tier: star_1
  mechanism_primary: "합 3,4,5 각각의 순서쌍 개수 2,3,4 → 9/36 로 약분"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0344.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 [3,5] 를 다른 구간([9,11] 등 대칭 위치)으로 바꾸거나 던지는 횟수를 2회로 고정한 채 '두 눈의 차'·'큰 눈'으로 바꿀 수 있음. 제약: 선택지가 1/6, 1/4, 1/3 처럼 약분되는 값이 되도록 경우의 수를 6·9·12 등으로 맞출 것."
    creative: "(1) 합 대신 두 눈의 차를 X 로(분포가 비대칭이 되어 세기 부담만 증가 · ★1~2) (2) '합이 4의 배수' 처럼 조건을 말로 주어 X 값 집합을 먼저 번역하게 하면 I-EQV d1 · ★2 (3) 주사위 3개로 늘리면 경우 수 세기가 무거워질 뿐 통찰은 그대로여서 ★ 가 오르지 않음(질 저하 방향 · 피할 것)."
```

```yaml
- id: RPM-PROB-0345
  page: 59
  vendor_label: "유형 03 이산확률변수의 확률"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    당첨 3개를 포함한 제비 7개에서 3개를 뽑을 때 당첨 제비 수 X 에 대하여 P(X^2-4X+3<=0).
  category: "이차부등식 → X 의 값 범위 → 여사건 확률"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "X^2-4X+3<=0 을 1<=X<=3 으로 풀고 X 의 실제 가능 범위 0~3 과 겹쳐 '1 이상'으로 정리"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "확률변수에 대한 부등식 조건의 확률 (조건 → X 범위 변환)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    조건이 확률변수에 대한 이차부등식으로 위장돼 있어 먼저 1<=X<=3 으로 옮겨야 한다. X 의 최댓값이 3 이므로 결국 여사건 1-P(X=0) 한 줄.
    부등식→범위 변환 통찰 1개(EQV d1) · M_total 6 → 벤더 「중」 출발점 ★2 유지. T-범위 함정(X 가 실제로 가질 수 있는 값과의 교집합) 1개.
  mechanism_primary: "이차부등식 → 1<=X<=3 → X 의 범위가 0~3 이므로 1-P(X=0) 로 환원"
  tier: star_2
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{31}{35}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0345.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "제비 수(7)·당첨 수(3)·뽑는 수(3)와 이차부등식의 두 근을 바꿀 수 있음. 제약: 부등식의 해 구간이 X 의 가능 범위를 완전히 덮거나 완전히 벗어나면 문제가 무의미해지므로 한쪽 끝만 걸치게 잡을 것(여사건이 1항으로 끝나는 구조 유지)."
    creative: "(1) 부등식을 X^2-3X>0 처럼 해가 양끝으로 갈라지는 꼴로 바꾸면 경우가 둘로 나뉘어 I-MI d1 추가 · ★3 (2) 조건을 'X 가 이차방정식의 근' 으로 바꾸기(EQV 유지 ★2) (3) 확률값을 주고 당첨 제비 개수를 되묻으면 I-BW 로 ★3."
```

```yaml
- id: RPM-PROB-0346
  page: 59
  vendor_label: "유형 03 이산확률변수의 확률"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    흰 공 6개·검은 공 4개에서 4개를 꺼낼 때 검은 공의 개수 X 에 대하여 P(X>=a)=5/42 를 만족시키는 자연수 a.
  category: "꼬리확률 P(X>=a) 를 a=1~4 로 훑어 주어진 값과 맞추기"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "확률값 5/42 가 먼저 주어지고 그에 맞는 경계 a 를 역추적 — 꼬리확률이 a 에 따라 어떻게 줄어드는지 보고 후보를 좁혀야 함"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "꼬리확률 P(X>=a) 가 주어졌을 때 경계 a 역추적"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    분포표를 만든 뒤 위에서부터 누적해 5/42=25/210 이 되는 지점을 찾는 역방향 문제. 미정계수 대입이 아니라 후보 a 를 훑어 맞추는 구조라 I-BW 로 인정했다.
    a 가 자연수이고 X 의 범위가 0~4 라는 T-범위 함정 1개. 통찰 depth 2 · M_total 8 → 벤더 「상중」 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "10C4 분모로 X=0~4 분포표 → 위에서부터 누적 → 25/210 이 되는 경계 a"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$3$'
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-prob/items/0346.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공 개수(6,4)·꺼내는 수 4·목표 확률 5/42 를 바꿀 수 있음. 제약: 목표 확률이 반드시 어떤 누적합과 정확히 일치해야 하고(분모를 10C4=210 의 약수로 약분되는 값으로), 답 a 가 유일하도록 인접 누적합과 겹치지 않게 할 것."
    creative: "(1) P(X<=a) 꼴로 뒤집기(★3 유지) (2) 목표 확률을 부등식 P(X>=a)<=1/8 로 주면 후보 중 일부를 기각해야 해 I-VF 추가 · ★4 (3) 확률값 대신 a 를 주고 확률을 묻는 정방향으로 되돌리면 통찰이 사라져 ★2."
```

### 유형 04 이산확률변수의 평균, 분산, 표준편차; 확률분포가 주어진 경우

```yaml
- id: RPM-PROB-0347
  page: 59
  vendor_label: "유형 04 이산확률변수의 평균, 분산, 표준편차; 확률분포가 주어진 경우"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    X 가 -1, 0, 1, 2 를 갖고 확률이 1/4, 1/3, a, 1/6 인 표가 주어질 때 V(X). (a 는 상수)
  category: "확률의 합 1 → a → E(X) → E(X^2) → V"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "확률분포표의 미지 확률 결정 후 분산 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    확률의 총합이 1 이라는 정의로 a 를 정하고 V(X)=E(X^2)-{E(X)}^2 공식에 넣는 유형의 기본 골조 그대로. 분기도 함정도 없다.
    유형 대표문제(★2 출발)이나 통찰 0 · M_total 5 → −1 적용해 ★1. 분수 계산량만 조금 있다.
  tier: star_1
  mechanism_primary: "1/4+1/3+a+1/6=1 로 a → E(X) → E(X^2) → V=E(X^2)-{E(X)}^2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{19}{18}$'
  answer_source: "답지"
  figure: "crop:fig-0347.png"
  latex: latex-bank/rpm-prob/items/0347.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "X 값(-1,0,1,2)과 확률 1/4,1/3,1/6 을 바꿀 수 있음. 제약: 나머지 확률 a 가 0 이상이어야 하고, 분모의 최소공배수가 12~24 정도여야 E(X^2) 계산이 분수로 정리됨. 그림(표)의 라벨은 값과 함께 고쳐야 함."
    creative: "(1) V(X) 대신 σ(X) 를 물어 제곱근 정리를 추가(★1 유지) (2) a 를 미지수로 두고 V(X) 값을 준 뒤 a 를 역추적하면 I-BW · ★3 (3) 표의 한 칸 확률을 2a, a^2 꼴로 주면 이차방정식과 확률 조건 기각이 붙어 ★2~3."
```

```yaml
- id: RPM-PROB-0348
  page: 59
  vendor_label: "유형 04 이산확률변수의 평균, 분산, 표준편차; 확률분포가 주어진 경우"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    확률질량함수가 P(X=x)=k(x-1) (x=2,3,4,5) 일 때 σ(X). 5지선다. (k 는 상수)
  category: "확률의 합 1 → k → E(X) → E(X^2) → V → σ"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "확률질량함수 식이 주어진 이산확률변수의 표준편차"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    표 대신 식으로 분포가 주어졌을 뿐 골조는 0347 과 같다. x=2~5 를 대입해 표를 만들고 합 1 로 k 를 정한 뒤 E·E(X^2)·V·σ 네 단계.
    상수 k 가 있어 Mₐ=2, 단계가 네 개라 M_total 6 → 벤더 「중하」의 위쪽인 ★2.
  tier: star_2
  mechanism_primary: "x=2~5 대입 → k(1+2+3+4)=1 로 k=1/10 → E, E(X^2) → V → σ"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-prob/items/0348.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정의역 x=2~5 와 식 k(x-1) 의 형태(k(x-1), kx, k/x 등)를 바꿀 수 있음. 제약: 확률의 합이 간단한 정수 배수(10k=1 처럼)로 떨어져야 하고, V 가 완전제곱이 되어야 σ 가 유리수로 나옴 — 선택지가 무리수면 √2/3 처럼 정리되는 값으로 맞출 것."
    creative: "(1) σ 대신 V(2X-1) 을 물어 변환 공식을 얹기(★2 유지) (2) 식을 P(X=x)=k·2^x 처럼 등비로 주면 합 계산에 등비수열이 들어가 I-XU · ★3 (3) k 를 주고 정의역의 끝값을 역추적하면 I-BW · ★3."
```

```yaml
- id: RPM-PROB-0349
  page: 59
  vendor_label: "유형 04 이산확률변수의 평균, 분산, 표준편차; 확률분포가 주어진 경우"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    X 가 -2, -1, 0, 1 을 갖는 확률분포표에서 -2 와 -1 칸이 찢어져 보이지 않고 나머지가 1/4, 1/2 일 때, E(X)=1/6 을 이용해 P(X=-1).
  category: "미지 확률 2개 → 합 1 과 평균 조건으로 연립"
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "확률분포표의 빈칸 두 개를 합 1 과 평균으로 연립해 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    보이지 않는 두 칸을 미지수로 두면 조건이 정확히 둘(확률의 합 1, E(X)=1/6)이라 연립일차방정식 한 번으로 끝난다. 미정계수 대입은 표준 절차라 I-BW 로 세지 않았다.
    단계 수가 늘어(미지수 설정·연립·해석) M_total 7 → 벤더 「중」 출발점 ★2 유지. 서술형 태그는 +0.
  tier: star_2
  mechanism_primary: "찢어진 두 칸을 p, q 로 → p+q=1/4 와 -2p-q+1/2=1/6 연립 → q"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{6}$'
  answer_source: "답지"
  figure: "crop:fig-0349.png"
  latex: latex-bank/rpm-prob/items/0349.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "X 값(-2,-1,0,1)·보이는 확률(1/4,1/2)·평균값 1/6 을 바꿀 수 있음. 제약: 연립의 해 p, q 가 모두 0 이상이어야 하고(확률 조건), 분모가 12 이하로 정리되도록 평균값을 고를 것. 표 그림의 찢어진 칸 위치는 고정."
    creative: "(1) 조건을 E(X) 대신 V(X) 로 주면 이차 연립이 되어 근 하나가 확률 조건으로 기각 → I-VF · ★3 (2) 빈칸을 세 개로 늘리고 조건도 세 개 주기(계산만 무거워져 ★ 변동 없음 · 피할 것) (3) 평균을 주고 X 의 한 값 자체를 역추적하면 I-BW · ★3."
```

### 유형 05 이산확률변수의 평균, 분산, 표준편차; 확률분포가 주어지지 않은 경우

```yaml
- id: RPM-PROB-0350
  page: 60
  vendor_label: "유형 05 이산확률변수의 평균, 분산, 표준편차; 확률분포가 주어지지 않은 경우"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    불량품 4개가 섞인 제품 10개에서 3개를 뽑을 때 불량품의 개수 X 에 대하여 V(X).
  category: "분포표를 직접 작성 → E(X) → E(X^2) → V"
  M: {s: 3, k: 2, a: 1, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "뽑기 상황에서 분포표를 만들어 분산 구하기 (초기하형)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    확률분포가 주어지지 않아 X=0,1,2,3 네 칸의 확률을 조합으로 직접 만들어야 하는 것이 이 유형의 유일한 추가 부담이고, 그 뒤는 0347 과 같은 공식 적용.
    통찰 없음 · 표 작성 때문에 Mₛ=3 · M_total 6 → 유형 대표문제 출발점 ★2 유지. 계산만 무거운 쪽이라 Mₖ 는 2 로 낮춰 잡았다.
  tier: star_2
  mechanism_primary: "10C3 분모로 X=0~3 확률표 작성 → E(X) → E(X^2) → V"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{14}{25}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0350.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "전체 10개·불량 4개·뽑는 수 3 을 바꿀 수 있음. 제약: 뽑는 수가 불량 개수보다 크면 X 의 상한이 불량 개수로 잘리니 분포표 칸 수를 먼저 확인할 것. 분모 조합은 120 이하가 손계산에 적당."
    creative: "(1) V 대신 σ 나 E(3X+1) 을 묻기(★2 유지) (2) 뽑기를 복원추출로 바꾸면 B(3,2/5) 가 되어 np·npq 로 한 줄에 끝나 ★1 로 내려감(유형 10 과 대비용으로 좋은 쌍) (3) V(X) 값을 주고 불량품 개수를 역추적하면 I-BW · ★3~4."
```

```yaml
- id: RPM-PROB-0351
  page: 60
  vendor_label: "유형 05 이산확률변수의 평균, 분산, 표준편차; 확률분포가 주어지지 않은 경우"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    빨간 구슬 3개·파란 구슬 4개에서 2개를 꺼낼 때 빨간 구슬의 개수 X 에 대하여 E(X).
  category: "분포표 작성 → E(X) 한 번"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "뽑기 상황에서 분포표를 만들어 평균 구하기 (초기하형)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    칸이 세 개(X=0,1,2)뿐이고 분산까지 가지 않아 0350 보다 한 단계 짧다. 분포표 작성 → 평균 한 줄.
    벤더 「중」(★2 출발)이나 통찰 0 · M_total 5 → −1 적용해 ★1.
  tier: star_1
  mechanism_primary: "7C2 분모로 X=0,1,2 확률 → E(X)=Σ x·P(X=x)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{6}{7}$'
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-prob/items/0351.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구슬 수(3,4)와 꺼내는 수 2 를 바꿀 수 있음. 제약: 꺼내는 수를 3 이상으로 올리면 칸이 늘어 계산만 무거워짐. 분모가 21, 15, 10 처럼 작아야 약분된 기약분수가 나옴."
    creative: "(1) E(X) 대신 V(X) 까지 요구하면 0350 과 같은 ★2 (2) '빨간 구슬이 파란 구슬보다 많을 확률' 로 바꾸면 조건→사건 번역이 생겨 I-EQV · ★2 (3) E(X)=6/7 을 주고 빨간 구슬 개수를 역추적 → I-BW · ★3."
```

```yaml
- id: RPM-PROB-0352
  page: 60
  vendor_label: "유형 05 이산확률변수의 평균, 분산, 표준편차; 확률분포가 주어지지 않은 경우"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    1, 2, 3, 4 가 적힌 4장의 카드에서 2장을 뽑아 두 수 중 큰 수를 X 라 할 때 σ(X). 5지선다.
  category: "'큰 수가 k' → 나머지 한 장을 k 미만에서 고르기 → 분포표 → σ"
  M: {s: 3, k: 2, a: 1, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'두 수 중 큰 수가 k' 라는 조건을 '나머지 한 장이 k 보다 작은 k-1 가지' 라는 개수 세기로 옮겨야 분포표가 만들어짐"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "뽑은 수의 최댓값을 확률변수로 하는 분포의 평균·표준편차"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    최댓값이 확률변수라 P(X=k)=(k-1)/6 을 세우는 첫 단계가 핵심이고, 그 뒤 E·E(X^2)·V·σ 는 기계적이다.
    최댓값 조건을 개수 세기로 옮기는 전환 통찰 1개(RT d1) · M_total 6 → 벤더 「중」 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "P(X=k)=(k-1)/6 (k=2,3,4) 분포표 → E, E(X^2) → V → σ"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "①"
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-prob/items/0352.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "카드 장수(4)와 뽑는 장수(2)를 바꿀 수 있음. 제약: 5장·2장이면 P(X=k)=(k-1)/10 로 여전히 깔끔하지만 3장 뽑기로 가면 조합이 C(k-1,2) 가 되어 난이도 층이 달라짐. σ 가 √5/3 처럼 정리되는지 확인할 것."
    creative: "(1) 큰 수 대신 작은 수를 X 로(대칭 구조 · ★2 유지) (2) 두 수의 차를 X 로 바꾸면 경우 세기가 두 갈래로 늘어 I-MI · ★3 (3) 3장 뽑기의 최댓값으로 확장하면 조합 카운트가 일반화되어 I-PD · ★3~4."
```

### 유형 06 확률변수 $aX+b$의 평균, 분산, 표준편차; 평균, 분산이 주어진 경우

```yaml
- id: RPM-PROB-0353
  page: 60
  vendor_label: "유형 06 확률변수 $aX+b$의 평균, 분산, 표준편차; 평균, 분산이 주어진 경우"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    E(X)=5, V(X)=4 이고 Y=aX+10 의 평균이 20, 분산이 b 일 때 ab.
  category: "E(aX+b)=aE(X)+b 로 a → V(aX+b)=a^2V(X) 로 b"
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "일차변환 확률변수의 평균·분산 공식으로 미정계수 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    변환 공식 두 개를 각각 한 번씩 쓰면 a=2, b=16 이 바로 나온다. 순서 의존도 없고 함정도 없다.
    유형 대표문제(★2 출발)이나 통찰 0 · M_total 5 → −1 적용해 ★1. 미정계수가 둘이라 Mₐ=2.
  tier: star_1
  mechanism_primary: "5a+10=20 → a → b=a^2·4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$32$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0353.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "E(X)=5, V(X)=4, 상수항 10, E(Y)=20 을 바꿀 수 있음. 제약: a 가 정수로 떨어지도록 (E(Y)-상수항) 이 E(X) 의 배수여야 하고, V(X) 를 완전제곱으로 두면 σ 문항으로도 재활용 가능."
    creative: "(1) b 를 σ(Y) 로 물어 제곱근 단계를 추가(★1 유지) (2) a 의 부호를 미정으로 두고 Y=aX+10 의 분산만 주면 a=±k 두 경우가 생겨 I-MI · ★2~3 (3) X 의 평균·분산 대신 Y 의 평균·분산을 주고 X 쪽을 역추적하면 ★2."
```

```yaml
- id: RPM-PROB-0354
  page: 60
  vendor_label: "유형 06 확률변수 $aX+b$의 평균, 분산, 표준편차; 평균, 분산이 주어진 경우"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    E(3X+1)=16, σ(-3X+2)=6 일 때 E(X)+V(X). 5지선다.
  category: "평균·표준편차 변환 공식을 역으로 풀어 E(X), V(X)"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "변환식의 평균·표준편차가 주어졌을 때 원래 평균·분산 복원"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    두 식을 각각 E(X), σ(X) 에 대해 풀면 끝. 다만 σ(aX+b)=|a|σ(X) 에서 계수가 음수(-3)라 절댓값을 놓치면 부호를 틀리는 T-부호 함정이 하나 있다.
    벤더 「중하」 · 통찰 0 · M_total 5 → ★1. 함정 때문에 중하위권 체감은 ★2 에 가깝다.
  tier: star_1
  mechanism_primary: "3E(X)+1=16 → E(X) · |-3|σ(X)=6 → σ(X) → V(X)=σ^2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0354.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 3, -3 과 상수항 1, 2, 결과값 16, 6 을 바꿀 수 있음. 제약: E(X) 가 정수로 떨어지도록 (결과값-상수항)이 계수의 배수여야 하고, σ(X) 도 정수라야 V 가 깔끔함. 두 번째 식의 계수는 반드시 음수로 두어 절댓값 함정을 유지할 것."
    creative: "(1) σ 대신 V(-3X+2) 를 주면 제곱이라 부호 함정이 사라져 ★1 그대로지만 쉬워짐 (2) E(X^2) 를 묻게 바꾸면 V+E^2 전환이 추가되어 I-EQV · ★2 (3) 계수 자체를 미지수로 두면 연립이 되어 ★3."
```

```yaml
- id: RPM-PROB-0355
  page: 60
  vendor_label: "유형 06 확률변수 $aX+b$의 평균, 분산, 표준편차; 평균, 분산이 주어진 경우"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    E(X)=120, V(X)=48 일 때 Y=(X-100)/4 에 대하여 E(Y)=a, E(Y^2)=b 이고 a+b.
  category: "일차변환으로 E(Y), V(Y) → E(Y^2)=V(Y)+{E(Y)}^2"
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "E(Y^2) 은 변환 공식으로 직접 나오지 않으므로 분산 정의를 뒤집어 V(Y)+{E(Y)}^2 로 옮겨야 함"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "일차변환 후 E(Y^2) 을 분산 정의로 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    Y=(X-100)/4 를 (1/4)X-25 로 보면 E(Y), V(Y) 는 공식으로 바로 나오지만 E(Y^2) 은 V=E(Y^2)-{E(Y)}^2 을 거꾸로 쓸 줄 알아야 한다. 이 전환이 이 문항의 유일한 관문.
    통찰 1개(EQV d1) · M_total 7 → 벤더 「중」 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "Y=(1/4)X-25 → E(Y), V(Y)=V(X)/16 → E(Y^2)=V(Y)+{E(Y)}^2"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$33$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0355.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "E(X)=120, V(X)=48, 변환식의 100 과 4 를 바꿀 수 있음. 제약: V(X) 가 나눈 수의 제곱으로 나누어떨어져야 V(Y) 가 정수가 되고, E(Y) 도 정수라야 E(Y^2) 이 깔끔함."
    creative: "(1) E(Y^2) 대신 σ(Y) 를 물으면 전환 통찰이 사라져 ★1 (2) E(Y)=0, V(Y)=1 이 되도록 변환을 잡게 하면 표준화 문항(0356)과 같은 골조로 올라가 ★3 (3) E(Y^2) 값을 주고 V(X) 를 역추적하면 I-BW 추가 · ★3."
```

```yaml
- id: RPM-PROB-0356
  page: 60
  vendor_label: "유형 06 확률변수 $aX+b$의 평균, 분산, 표준편차; 평균, 분산이 주어진 경우"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    원점수 X 의 평균 m, 표준편차 σ 에 대하여 표준점수가 T=a(X-m)/σ+b (a>0) 일 때, T 의 평균이 65, 표준편차가 15 이면 b-a.
  category: "표준화 변수의 평균 0·표준편차 1 → E(T)=b, σ(T)=a"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "(X-m)/σ 가 평균 0·표준편차 1 인 변수임을 먼저 읽어내야 T 의 평균·표준편차가 곧 b, a 라는 결론이 나옴"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "표준화 변수 (X-m)/σ 를 이용한 표준점수의 평균·표준편차"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    m, σ 가 일반 문자라 수치 대입이 불가능하고, (X-m)/σ 의 평균이 0·표준편차가 1 이라는 성질을 스스로 꺼내야 E(T)=b, σ(T)=|a|=a 가 보인다. 계산량은 거의 없고 통찰 하나에 난이도가 몰려 있다.
    추상도 최고(Mₐ=3) · a>0 조건의 T-부호 함정 1개 · 통찰 depth 2 → 벤더 「상중」 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "(X-m)/σ 의 평균 0·표준편차 1 → E(T)=b=65, σ(T)=a=15 → b-a"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$50$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0356.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "T 의 평균 65·표준편차 15 를 바꿀 수 있음(실제 수능 표준점수 100/20 등). 제약: a>0 을 유지해야 절댓값 분기가 생기지 않고, 묻는 값(b-a)을 a+b·ab 등으로 바꿔도 골조는 그대로."
    creative: "(1) 특정 원점수의 표준점수를 추가로 묻기(대입 한 줄 추가 · ★3 유지) (2) a>0 조건을 빼면 σ(T)=|a| 에서 두 경우가 갈려 I-MI 추가 · ★4 (3) 두 과목의 표준점수를 비교하게 하면 표준화의 의미 해석이 들어가 I-RT 추가 · ★4."
```

### 유형 07 확률변수 $aX+b$의 평균, 분산, 표준편차 ; 확률분포가 주어진 경우

```yaml
- id: RPM-PROB-0357
  page: 61
  vendor_label: "유형 07 확률변수 $aX+b$의 평균, 분산, 표준편차 ; 확률분포가 주어진 경우"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    확률질량함수가 P(X=x)=(x+k)/16 (x=-2, 0, 2, 4) 일 때 V(4X+3). 5지선다. (k 는 상수)
  category: "확률의 합 1 → k → V(X) → V(4X+3)=16V(X)"
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "확률질량함수로 주어진 분포에서 일차변환의 분산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    유형 04 의 골조(합 1 로 상수 결정 → E → E(X^2) → V)에 V(aX+b)=a^2V(X) 한 단계를 얹은 형태. 분기도 함정도 없지만 네 칸 분수 계산이 이어져 단계 수가 많다.
    통찰 0 이나 M_total 7 이라 −1 을 적용하지 않고 유형 대표문제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "Σ(x+k)/16=1 로 k → E(X), E(X^2) → V(X) → 16·V(X)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "해설(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-prob/items/0357.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정의역 (-2,0,2,4)·분모 16·변환 계수 4 와 상수항 3 을 바꿀 수 있음. 제약: 각 (x+k)/16 이 0 이상이어야 하므로 k 가 정의역 최솟값의 절댓값 이상이어야 하고, 분모가 Σ(x+k) 와 일치해야 확률의 합이 1 이 됨."
    creative: "(1) V 대신 σ(4X+3) 이나 E(4X+3) 을 묻기(★2 유지) (2) 변환 계수를 음수로 바꿔 σ 를 물으면 절댓값 함정 추가 · ★2 (3) V(4X+3)=55 를 주고 k 를 역추적하면 I-BW · ★3."
```

```yaml
- id: RPM-PROB-0358
  page: 61
  vendor_label: "유형 07 확률변수 $aX+b$의 평균, 분산, 표준편차 ; 확률분포가 주어진 경우"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    X 가 200, 300, 500 을 갖고 확률이 1/2, a, 4a^2 인 표가 주어질 때 E(aX-5). (a 는 상수)
  category: "확률의 합 1 → a 의 이차방정식 → 양수 근 채택 → E(aX-5)=aE(X)-5"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "확률의 합이 1 이라는 조건이 a 에 대한 이차방정식이 되고, 확률은 음이 될 수 없다는 제약으로 근 하나를 버려야 함"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "표의 상수가 이차식으로 주어진 분포의 일차변환 평균"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    표의 확률이 a 와 4a^2 로 주어져 합 1 조건이 이차방정식이 되고 음수 근은 확률 조건으로 버린다(T-범위 함정 1개). 결정된 a 가 그대로 변환 계수로 다시 쓰이는 점이 이 문항의 맛.
    통찰 1개(EQV d1) · M_total 8 → 벤더 「중」 출발점 ★2 유지. 서술형 태그는 +0.
  tier: star_2
  mechanism_primary: "1/2+a+4a^2=1 → a=1/4 (음수 근 기각) → E(X) → E(aX-5)=aE(X)-5"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$70$'
  answer_source: "해설(쪽 렌더)"
  figure: "crop:fig-0358.png"
  latex: latex-bank/rpm-prob/items/0358.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "X 값(200,300,500)·고정 확률 1/2·계수 4 와 변환식의 -5 를 바꿀 수 있음. 제약: 이차방정식의 양수 근이 유리수로 떨어져야 하고(판별식이 완전제곱), 그 근으로 계산한 세 확률이 모두 0 이상 1 이하라야 함. 표 그림의 라벨도 함께 수정."
    creative: "(1) E 대신 V(aX-5) 를 물으면 a^2V(X) 가 되어 계산은 늘지만 ★2 유지 (2) 확률을 a, 2a, a^2 처럼 세 칸 모두 문자로 두면 기각할 근이 늘어 I-VF · ★3 (3) E(aX-5)=70 을 주고 표의 한 값을 역추적하면 I-BW · ★3."
```

```yaml
- id: RPM-PROB-0359
  page: 61
  vendor_label: "유형 07 확률변수 $aX+b$의 평균, 분산, 표준편차 ; 확률분포가 주어진 경우"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    X 가 0, 1, 2, 3 을 갖고 확률이 1/8, 1/4, 1/8, 1/2 인 표에서 Y=aX+b 의 평균이 14, 분산이 20 일 때 ab. (a>0)
  category: "표에서 E(X), V(X) → a^2V(X)=20, aE(X)+b=14 로 a, b"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "변환 확률변수의 평균·분산이 주어졌을 때 계수 a, b 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    표에서 E(X)=2, V(X)=5/4 를 먼저 구한 뒤 분산 쪽으로 a 를 정하고(a>0 조건으로 음수 근 버림) 평균 쪽으로 b 를 정하는 순서가 고정돼 있다. 미정계수 대입이라 I-BW 로 세지 않았다.
    a>0 의 T-부호 함정 1개 · 통찰 0 이나 M_total 8 → −1 없이 벤더 「중」 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "표 → E(X), V(X) → a^2V(X)=20 으로 a (a>0) → aE(X)+b=14 로 b → ab"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$24$'
  answer_source: "답지"
  figure: "crop:fig-0359.png"
  latex: latex-bank/rpm-prob/items/0359.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "표의 확률(1/8,1/4,1/8,1/2)과 E(Y)=14, V(Y)=20 을 바꿀 수 있음. 제약: V(Y)/V(X) 가 완전제곱이라야 a 가 유리수로 떨어지고, 그 a 로 b 도 정수가 되도록 E(Y) 를 고를 것. 표 그림 라벨 동기화 필요."
    creative: "(1) a>0 조건을 빼면 a=±4 두 경우가 살아나 I-MI 추가 · ★3 (2) σ(Y) 를 주면 절댓값 함정이 강화되어 ★2~3 (3) 표의 한 칸을 미지수로 두고 E(Y), V(Y) 를 함께 주면 조건이 셋이 되어 I-CON · ★3~4."
```

### 유형 08 확률변수 $aX+b$의 평균, 분산, 표준편차 ; 확률분포가 주어지지 않은 경우

```yaml
- id: RPM-PROB-0360
  page: 61
  vendor_label: "유형 08 확률변수 $aX+b$의 평균, 분산, 표준편차 ; 확률분포가 주어지지 않은 경우"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    흰 바둑돌 2개·검은 바둑돌 4개에서 2개를 꺼낼 때 흰 바둑돌의 개수 X 에 대하여 V(4-3X). 5지선다.
  category: "분포표 직접 작성 → V(X) → V(4-3X)=9V(X)"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "뽑기 분포표를 만들어 일차변환의 분산 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    유형 05(분포표 작성)와 유형 06(변환 공식)을 이어 붙인 형태. X=0,1,2 확률표 → E, E(X^2) → V → 9V 순서가 고정이다.
    계수가 -3 이라 (-3)^2=9 를 쓰는 T-부호 함정 1개. 통찰 0 이나 M_total 7 → −1 없이 유형 대표문제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "6C2 분모로 X=0,1,2 확률표 → V(X) → V(4-3X)=(-3)^2 V(X)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "해설(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-prob/items/0360.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "바둑돌 수(2,4)·꺼내는 수 2·변환식 4-3X 의 계수를 바꿀 수 있음. 제약: 흰 돌이 2개뿐이라 X 의 상한이 2 로 잘리는 구조를 유지하려면 흰 돌 수 ≤ 꺼내는 수. 분모 조합은 15, 21 정도가 적당."
    creative: "(1) V 대신 σ(4-3X) 를 물어 절댓값을 쓰게 하기(★2 유지) (2) 복원추출로 바꾸면 B(2,1/3) 이 되어 npq 한 줄 → ★1 (3) V(4-3X) 값을 주고 검은 돌 개수를 역추적하면 I-BW · ★3~4."
```

```yaml
- id: RPM-PROB-0361
  page: 61
  vendor_label: "유형 08 확률변수 $aX+b$의 평균, 분산, 표준편차 ; 확률분포가 주어지지 않은 경우"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    마름모의 네 꼭짓점에 1, 3, 5, 7 이 적혀 있고 네 변과 두 대각선 중 한 선분을 택할 때 양 끝 수 중 큰 수를 X 라 할 때 9X+2 의 평균.
  category: "선분 6개 열거 → 큰 수의 분포표 → E(X) → 9E(X)+2"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "그림의 변·대각선 배치를 '양 끝 수의 쌍 6개' 목록으로 옮겨야 확률분포가 만들어짐 — 대각선 두 개를 빠뜨리면 표본공간 자체가 달라짐"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "도형의 선분 선택으로 정해지는 확률변수의 일차변환 평균"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    표본공간이 '변 4개 + 대각선 2개 = 6개' 라는 것을 그림에서 읽어내는 것이 첫 관문이고, 각 선분의 큰 수를 적어 분포표를 만들면 나머지는 E(9X+2)=9E(X)+2 한 줄.
    기하→분포 전환 통찰 1개(RT d1) · 대각선 누락 T-범위 함정 1개 · M_total 7 → 벤더 「중」 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "선분 6개의 큰 수를 나열 → X 의 분포표 → E(X) → 9E(X)+2"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$53$'
  answer_source: "해설(쪽 렌더)"
  figure: "crop:fig-0361.png"
  latex: latex-bank/rpm-prob/items/0361.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "꼭짓점의 수 1,3,5,7 과 변환식 9X+2 의 계수를 바꿀 수 있음. 제약: 꼭짓점 배치(그림 라벨)는 고정이므로 대각선이 잇는 쌍이 바뀌지 않도록 수만 교체할 것. E(X) 의 분모가 6 이므로 계수를 6의 배수(9 는 3의 배수로 약분됨)로 두어야 답이 정수."
    creative: "(1) 큰 수 대신 두 수의 합·차를 X 로(분포가 달라질 뿐 ★2 유지) (2) 정오각형·정육각형으로 바꾸면 변과 대각선의 개수를 조합으로 세야 해 I-RT 가 깊어져 ★3 (3) 분산까지 묻고 a^2 변환을 얹으면 ★2~3."
```

```yaml
- id: RPM-PROB-0362
  page: 61
  vendor_label: "유형 08 확률변수 $aX+b$의 평균, 분산, 표준편차 ; 확률분포가 주어지지 않은 경우"
  vendor_level: "상중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    1, 2, 3, 3, a 가 적힌 5장의 카드에서 한 장을 뽑아 적힌 수를 X 라 할 때, E(5X-6)=8 이면 σ(5X-6).
  category: "변환 평균으로 a 결정 → 중복값 반영한 분포표 → V(X) → 5σ(X)"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미지수가 포함된 카드 집합의 평균 조건으로 상수 결정 후 표준편차"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    E(5X-6)=5E(X)-6 으로 a 를 먼저 정하고, 그 다음 3 이 두 장이라 P(X=3)=2/5 인 분포표를 다시 만들어 V(X) → σ(5X-6)=5σ(X) 로 간다. 중복 카드의 확률을 1/5 로 잘못 두는 T-표기 함정이 이 문항의 실제 실점 지점.
    통찰로 셀 만한 전환은 없고(미정계수 대입) 단계와 함정으로 무거워진 형태 · M_total 8 → 벤더 「상중」 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "5E(X)-6=8 → a → 중복 3 을 반영한 분포표 → V(X) → σ(5X-6)=5σ(X)"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$2\sqrt{11}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0362.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "카드에 적힌 수(1,2,3,3)·변환식 5X-6·조건값 8 을 바꿀 수 있음. 제약: a 가 자연수로 떨어지도록 조건값을 고르고, 중복되는 값이 반드시 하나는 남아 있어야 함정이 유지됨. σ 가 무리수여도 2√11 처럼 정리되는지 확인."
    creative: "(1) a 가 기존 값과 같아 중복이 늘어나는 경우를 만들면 분포표가 또 달라져 I-VF · ★4 (2) σ 대신 V 를 물으면 제곱근이 빠져 ★2~3 (3) a 의 값을 주고 E 를 묻는 정방향으로 되돌리면 ★2."
```

### 유형 09 이항분포에서의 확률

```yaml
- id: RPM-PROB-0363
  page: 62
  vendor_label: "유형 09 이항분포에서의 확률"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    불량률 10 % 인 기계에서 제품 5개를 택할 때 불량품의 개수 X 에 대하여 P(X>=1). 5지선다(식 형태).
  category: "B(5, 1/10) → 여사건 1-P(X=0)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이항분포에서 '적어도 1개' 확률 (여사건)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    X 가 B(5,1/10) 을 따른다는 것을 읽고 '적어도 하나' 를 여사건으로 바꾸면 1-(9/10)^5 로 끝. 선택지가 식 그대로라 수치 계산도 없다.
    '적어도' 를 여사건으로 바꾸는 T-범위 함정 1개는 있으나 통찰로 셀 정도는 아님 · 통찰 0 · M_total 4 → 유형 대표문제 출발점 ★2 에서 −1 하여 ★1.
  tier: star_1
  mechanism_primary: "X~B(5,1/10) → P(X>=1)=1-P(X=0)=1-(9/10)^5"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0363.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "불량률 10 %·개수 5 를 바꿀 수 있음. 제약: 선택지를 식으로 둘 때는 (1-p)^n 형태가 그대로 보이도록 n 을 5~6 으로 유지하고, 수치 답을 원하면 p 를 1/2·1/3 처럼 거듭제곱이 정리되는 값으로."
    creative: "(1) 'P(X>=2)' 로 올리면 여사건 항이 둘이 되어 0365 골조 · ★2 (2) 확률값을 주고 n 을 역추적하면 I-BW · ★3 (3) '적어도 하나가 불량일 확률이 1/2 이상이 되는 최소 n' 으로 바꾸면 부등식과 로그가 붙어 I-XU · ★4."
```

```yaml
- id: RPM-PROB-0364
  page: 62
  vendor_label: "유형 09 이항분포에서의 확률"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    B(n, 1/3) 을 따르는 X 에 대하여 P(X=n-1)=16 P(X=n) 일 때 n.
  category: "이항 확률질량함수 두 값의 비 → n 에 대한 일차방정식"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "P(X=n-1) 과 P(X=n) 을 각각 전개하지 않고 비로 묶어 조합수와 거듭제곱을 약분해야 n 이 드러남"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "이항분포 확률의 비 조건에서 n 또는 p 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    양끝 항이라 nC(n-1)=n, nCn=1 로 정리되고 (2/3)/(1/3) 배가 남아 2n=16 한 줄이 된다. 두 확률을 따로 계산하려 들면 막히는 구조.
    비로 약분하는 전환 통찰 1개(EQV d1) · 문자 n 이 지수에 있어 Mₐ=2 · M_total 6 → 벤더 「중하」의 위쪽 ★2.
  tier: star_2
  mechanism_primary: "P(X=n-1)/P(X=n) 을 조합수·거듭제곱 비로 약분 → 2n=16 → n"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0364.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "확률 1/3 과 배수 16 을 바꿀 수 있음. 제약: 비를 정리했을 때 n 이 자연수로 떨어지도록 배수를 p/(1-p) 비의 정수배로 잡을 것. 양끝 항(n-1, n)을 쓰면 조합수가 n 과 1 로 단순해지므로 이 위치를 유지하는 것이 깔끔."
    creative: "(1) P(X=1)=16P(X=0) 처럼 아래쪽 양끝으로 옮기기(★2 유지) (2) 중간 항 P(X=k+1)=cP(X=k) 로 바꾸면 조합수 비가 (n-k)/(k+1) 이 되어 계산이 한 겹 깊어짐 · ★3 (3) n 을 주고 p 를 역추적하면 이차방정식과 근 기각이 붙어 I-VF · ★3."
```

```yaml
- id: RPM-PROB-0365
  page: 62
  vendor_label: "유형 09 이항분포에서의 확률"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    5발 중 4발을 명중시키는 선수가 4발을 쏠 때 2발 이상 명중시킬 확률.
  category: "B(4, 4/5) → 여사건 1-P(X=0)-P(X=1)"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'2발 이상' 을 직접 세면 세 항, 여사건으로 옮기면 두 항이라 계산이 절반 — 어느 쪽이 짧은지 보고 뒤집어야 함"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "이항분포에서 'k 개 이상' 확률 (여사건 활용)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    p=4/5, n=4 를 읽어내는 것은 즉시지만 X>=2 를 그대로 세면 항이 셋이라 여사건(0발·1발)으로 뒤집는 판단이 필요하다. 그 뒤는 625 분모의 분수 정리.
    여사건 전환 통찰 1개(EQV d1) · M_total 5 → 벤더 「중」 출발점 ★2 유지(통찰이 있어 −1 미적용).
  tier: star_2
  mechanism_primary: "X~B(4,4/5) → 1-P(X=0)-P(X=1) → 608/625"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{608}{625}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0365.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "명중률 4/5·발수 4·기준 '2발 이상' 을 바꿀 수 있음. 제약: 분모가 p 의 분모의 n 제곱(5^4=625)이므로 n 을 5 이상으로 올리면 손계산이 급격히 무거워짐. 기준을 올릴수록 여사건 항이 늘어나 유리하지 않음."
    creative: "(1) '3발 이상' 으로 올리면 직접 세기가 더 짧아져 여사건 판단이 뒤집힘 — 전략 선택이 생겨 I-SC · ★3 (2) 두 선수의 명중 확률을 비교하게 하면 조건부·독립 결합으로 I-XU · ★4 (3) 확률값을 주고 명중률을 역추적하면 고차방정식이 되어 부적절."
```

```yaml
- id: RPM-PROB-0366
  page: 62
  vendor_label: "유형 09 이항분포에서의 확률"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    비즈니스석 18석인 비행기를 20명이 예약했고 예약 취소율이 10 % 일 때 실제로 좌석이 부족할 확률. (취소는 독립 · 0.9^19=0.135, 0.9^20=0.122 로 계산)
  category: "'좌석 부족' → 취소 인원 0명 또는 1명 → B(20, 1/10) 의 두 항"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'좌석이 부족하다' 를 '탑승자가 19명 이상' → '취소자가 1명 이하' 로 두 번 뒤집어야 이항분포 항이 정해짐"
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "예약자 20명의 독립적인 취소를 20회 독립시행으로 보고 취소 인원을 B(20, 1/10) 으로 모델링"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "초과예약(오버부킹) 상황의 이항분포 확률 모델링"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    수치 계산은 제시된 근삿값 두 개로 거의 끝나고, 난이도가 전적으로 '좌석 부족' 이라는 말을 취소 인원의 부등식으로 옮기는 데 몰려 있다. 18석·20명에서 부족 조건이 취소 0명 또는 1명이라는 경계를 틀리면 답이 통째로 달라진다(T-경계 함정).
    무엇을 확률변수로 둘지 정하는 모델링 통찰(RT d1) + 사건 번역 통찰(EQV d2) 2개 → 벤더 「상중」 출발점 ★3 에서 +1 하여 ★4. 저노출 유형(RT) 포함이라 §2.13 ★4 게이트 통과.
  tier: star_4
  mechanism_primary: "좌석 부족 ⟺ 탑승 19명 이상 ⟺ 취소 1명 이하 → P(Y<=1), Y~B(20,1/10) → 0.9^20+20·0.1·0.9^19"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$0.392$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0366.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "좌석 수 18·예약자 20·취소율 10 % 와 제시 근삿값을 바꿀 수 있음. 제약: (예약자 - 좌석) 이 1~2 여야 항이 두세 개로 끝나고, 0.9^n 류 근삿값을 반드시 함께 제시해야 손계산이 가능함. 근삿값 자릿수는 답의 반올림과 맞출 것."
    creative: "(1) 좌석을 19석으로 줄이면 부족 조건이 '취소 0명' 하나로 단순해져 ★2~3 (2) '좌석이 남을 확률' 로 뒤집으면 여사건 판단이 추가되지만 골조 동일 · ★4 유지 (3) 부족 확률이 0.1 이하가 되는 최대 예약자 수를 묻게 하면 역추적이 붙어 I-BW 추가 · ★5 후보(단 SC/VF/SYM/XU 중 하나가 더 필요)."
```

### 유형 10 이항분포에서의 평균, 분산, 표준편차 ; 이항분포가 주어진 경우

```yaml
- id: RPM-PROB-0367
  page: 62
  vendor_label: "유형 10 이항분포에서의 평균, 분산, 표준편차 ; 이항분포가 주어진 경우"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    B(20, p) 를 따르는 X 에 대하여 E(X)=10 일 때 E(X^2). 5지선다.
  category: "np=10 → p → V=npq → E(X^2)=V+{E(X)}^2"
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights:
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "E(X^2) 은 이항분포 공식에 직접 없으므로 분산 정의를 뒤집어 V(X)+{E(X)}^2 로 옮겨야 함"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "이항분포의 평균·분산으로 E(X^2) 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    20p=10 에서 p=1/2, V=20·(1/2)·(1/2)=5 까지는 공식 두 개. 마지막에 E(X^2)=V+{E(X)}^2 로 옮기는 한 걸음이 이 문항의 관문이다(0355 와 같은 전환).
    통찰 1개(EQV d1) · M_total 5 → 통찰이 있어 −1 미적용, 유형 대표문제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "np=10 → p=1/2 → V=npq=5 → E(X^2)=V+{E(X)}^2"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0367.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "n=20 과 E(X)=10 을 바꿀 수 있음. 제약: p=E(X)/n 이 1 이하의 간단한 분수라야 하고, npq 가 정수로 떨어지면 선택지가 깔끔해짐(n 을 4의 배수로 두면 p=1/2, 1/4 에서 모두 정수)."
    creative: "(1) E(X^2) 대신 E((X-1)^2) 나 V(2X+1) 로 바꿔 전개 한 겹 추가(★2 유지) (2) E(X^2) 값을 주고 n 을 역추적하면 이차방정식과 근 기각으로 I-VF · ★3 (3) p 를 미지로 두고 E(X)·V(X) 를 동시에 주면 조건 통합 · ★3."
```

```yaml
- id: RPM-PROB-0368
  page: 62
  vendor_label: "유형 10 이항분포에서의 평균, 분산, 표준편차 ; 이항분포가 주어진 경우"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    확률질량함수가 P(X=x)=36Cx (2/3)^x (1/3)^(36-x) (x=0, 1, …, 36) 일 때 E(X)+V(X).
  category: "확률질량함수 모양에서 B(36, 2/3) 읽기 → np, npq"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "확률질량함수 형태에서 이항분포를 식별해 평균·분산 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    식이 이미 이항분포의 표준형이라 n=36, p=2/3 을 눈으로 읽고 np=24, npq=8 을 더하면 끝. 유형 10 의 가장 기본형.
    통찰 0 · M_total 4 → 벤더 「중하」의 아래쪽 ★1.
  tier: star_1
  mechanism_primary: "식에서 n=36, p=2/3 식별 → np + npq"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$32$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0368.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "n=36 과 p=2/3 을 바꿀 수 있음. 제약: np 와 npq 가 모두 정수로 떨어지게 n 을 p 의 분모의 제곱(9의 배수 등)으로 둘 것. 지수 부분(x 와 n-x)의 대응이 흐트러지지 않도록 전사 표기를 함께 고칠 것."
    creative: "(1) σ(X) 나 E(3X-1) 을 묻기(★1~2) (2) 지수를 바꿔 (1/3)^x (2/3)^(36-x) 로 주면 p 를 반대로 읽는 함정이 생겨 ★2 (3) E(X)+V(X)=32 를 주고 n 을 역추적하면 연립이 되어 ★3."
```

```yaml
- id: RPM-PROB-0369
  page: 62
  vendor_label: "유형 10 이항분포에서의 평균, 분산, 표준편차 ; 이항분포가 주어진 경우"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    X 가 B(4, p) 를 따르고 P(X=4)=256/625 일 때 σ(X).
  category: "P(X=4)=p^4 → p → σ=√(npq)"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이항분포의 극단 확률로 p 를 구한 뒤 표준편차"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    X=4 가 최댓값이라 조합수가 1 이 되어 p^4=256/625 로 단순해지고, 네제곱근을 취해 p=4/5 를 얻은 뒤 √(npq) 를 계산한다. 극단 항을 고른 이유를 알면 한 줄.
    통찰로 셀 만한 전환은 없고(거듭제곱근 계산은 표준) M_total 6 → 벤더 「중」 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "P(X=4)=p^4=256/625 → p=4/5 → σ=√(4·(4/5)·(1/5))"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{4}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0369.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "n=4 와 P(X=4)=256/625 를 바꿀 수 있음. 제약: 주어진 확률이 반드시 완전 n 제곱수/완전 n 제곱수 꼴이라야 p 가 유리수로 떨어지고, npq 가 완전제곱이라야 σ 가 유리수. P(X=0)=q^n 으로 주는 변형도 같은 제약."
    creative: "(1) P(X=0) 으로 바꾸면 q 를 먼저 얻어 한 단계 추가(★2 유지) (2) P(X=3) 처럼 중간 항으로 주면 조합수가 붙어 고차방정식이 되므로 n 을 작게 유지할 것 · ★3 (3) σ 값을 주고 p 를 역추적하면 이차방정식의 두 근 중 하나를 기각해야 해 I-VF · ★3."
```

```yaml
- id: RPM-PROB-0370
  page: 62
  vendor_label: "유형 10 이항분포에서의 평균, 분산, 표준편차 ; 이항분포가 주어진 경우"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    B(72, 1/6) 을 따르는 X 의 평균과 분산을 두 근으로 하는 이차방정식이 x^2+ax+b=0 일 때 a+b.
  category: "np, npq → 근과 계수의 관계로 a, b"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "구한 두 수를 근으로 갖는 이차방정식으로 되돌리기 위해 방정식 단원의 근과 계수의 관계를 끌어와야 함"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "이항분포의 평균·분산을 근으로 하는 이차방정식 (근과 계수의 관계 결합)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    np=12, npq=10 까지는 유형 10 의 기본이고, 그 뒤 두 수의 합이 -a, 곱이 b 라는 방정식 단원 도구를 불러와야 한다. 합이 -a 라는 부호를 놓치는 T-부호 함정 1개.
    단원 결합 통찰 1개(XU d1) · M_total 6 → 벤더 「중」 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "np=12, npq=10 → 합 22=-a, 곱 120=b → a+b"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$98$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0370.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "n=72 와 p=1/6 을 바꿀 수 있음. 제약: np 와 npq 가 모두 정수라야 근과 계수가 정수로 떨어짐(n 을 p 분모의 제곱의 배수로). 두 근이 서로 다른 값이 되도록 q≠1-1/n 인 조합을 고를 것."
    creative: "(1) 이차방정식 대신 두 수를 근으로 하는 이차부등식의 해를 묻기(I-XU 유지 · ★3) (2) 평균과 표준편차를 근으로 두면 무리수 근이 되어 계산만 무거워짐(피할 것) (3) a+b 값을 주고 n 을 역추적하면 연립 + 정수 조건 기각으로 I-VF · ★3~4."
```

```yaml
- id: RPM-PROB-0371
  page: 63
  vendor_label: "유형 10 이항분포에서의 평균, 분산, 표준편차 ; 이항분포가 주어진 경우"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    B(n, p) 를 따르는 X 의 평균이 2, 분산이 3/2 일 때 P(X=3)/P(X=2).
  category: "np=2, npq=3/2 로 n, p 결정 → 두 확률의 비를 약분"
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 확률을 각각 계산하지 않고 비로 묶어 조합수 비 (nC3/nC2) 와 p/q 만 남기면 한 줄로 끝남"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "평균·분산으로 n, p 를 결정한 뒤 이항확률의 비 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    앞부분은 npq/np=q 로 q 를 먼저 얻는 표준 연립(n=8, p=1/4), 뒷부분은 P(X=3)/P(X=2) 를 전개하지 않고 비로 약분하는 정리다. 두 국면이 이어져 단계는 많지만 각각은 정형.
    비 약분 통찰 1개(EQV d1) · M_total 7 → 벤더 「중」 출발점 ★2 유지. 서술형 태그는 +0.
  tier: star_2
  mechanism_primary: "npq/np=q → p → n → P(X=3)/P(X=2)=(nC3/nC2)·(p/q)"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{2}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0371.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "평균 2·분산 3/2 를 바꿀 수 있음. 제약: q=분산/평균 이 0<q<1 이어야 하고 n=평균/p 가 자연수여야 함(평균 2·분산 3/2 → q=3/4, p=1/4, n=8 처럼 떨어지는 조합을 먼저 정하고 문제를 역으로 쓸 것)."
    creative: "(1) 묻는 비를 P(X=1)/P(X=0) 로 낮추면 조합수 비가 단순해져 ★2 유지 (2) 비의 값을 주고 평균·분산을 역추적하면 I-BW · ★3 (3) P(X=k) 가 최대가 되는 k 를 묻게 하면 비를 1 과 비교하는 부등식이 되어 I-PD · ★4."
```

## 표본 판정 요약 (29문)

- ★ 분포: ★1 8 · ★2 17 · ★3 3 · ★4 1 · ★5 0
- insight_type 통찰형 3(0346 · 0356 · 0366) · 절차형 26 · premium 0 — 통찰 라벨이 1개 이상 붙은 문항은 13(dokdu-check 의 「통찰형」 집계 기준)
- 통찰 라벨: I-EQV 8 · I-RT 3 · I-BW 1 · I-XU 1 (총 13개 단계 · insight_count 0 인 문항 16)
- 구역 분포: 유형 03 4 · 유형 04 3 · 유형 05 3 · 유형 06 4 · 유형 07 3 · 유형 08 3 · 유형 09 4 · 유형 10 5
- 벤더 신호: 대표문제 8 · 서술형 태그 4 · level 중하 4 · 중 12 · 상중 4 · 없음 8(대표문제)
- 그림: 5문(`crop:fig-0347.png` · `crop:fig-0349.png` · `crop:fig-0358.png` · `crop:fig-0359.png` · `crop:fig-0361.png`) — 앞 넷은 확률분포표, 마지막은 마름모 배치도
- 대상층: 하위권 8 · 중하위권 7 · 중위권 10 · 중상위권 3 · 상위권 1

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-PROB-0366 | 벤더 「상중」(★3 출발)이나 사건 번역·모델링 통찰 2개로 +1 하여 ★4. 이 구간에서 유일한 ★4 이며, 수치 계산이 근삿값 제시로 거의 제거된 대신 난이도가 전부 조건 해석에 몰려 있어 체감 편차가 큼 | ★3 / ★4 |
| RPM-PROB-0362 | 벤더 「상중」(★3)이나 통찰로 셀 전환이 없는 절차형. 중복 카드(3이 두 장) 함정과 단계 수만으로 ★3 을 유지했으므로, 카탈로그 정리 때 ★2 로 내려갈 여지 있음 | ★2 / ★3 |
| RPM-PROB-0354 | 벤더 「중하」·M_total 5·통찰 0 → ★1 로 내렸으나 σ(-3X+2) 에서 계수의 절댓값을 취하는 함정 때문에 실제 오답률은 ★2 급. 함정 1개를 ★ 에 반영할지 기준 필요 | ★1 / ★2 |
| RPM-PROB-0358 | 확률의 합 조건이 이차방정식이 되고 음수 근을 버리는 단계를 I-VF(사후 검증)로 볼지, 단순 T-범위 함정으로 볼지 경계. 여기서는 함정으로 처리해 ★2 유지 | ★2 / ★3 |

## 카탈로그 차원 메모

나중에 확률과 통계 유형 카탈로그를 만들 때 참고할 이 구간의 반복 골조다.

- **반복된 type_hint 상위**: (1) 「뽑기 상황에서 분포표를 만들어 E·V·σ」 — 0343 · 0350 · 0351 · 0352 · 0360 (2) 「표·확률질량함수의 상수를 합 1 로 결정 후 E·V」 — 0347 · 0348 · 0349 · 0357 · 0358 (3) 「일차변환 aX+b 의 평균·분산 공식」 — 0353 · 0354 · 0355 · 0357 · 0359 · 0360 · 0361 · 0362 (4) 「이항분포의 확률」 — 0363 · 0364 · 0365 · 0366 (5) 「이항분포의 np · npq」 — 0367 · 0368 · 0369 · 0370 · 0371.
- **따로 세워야 할 유형**: ① 「꼬리확률 P(X>=a) 역추적」(0346) — 정방향 확률 계산과 사고 방향이 반대다. ② 「표준화 변수 (X-m)/σ」(0356) — 평균 0·표준편차 1 이라는 성질 자체가 별도 유형이며 이후 정규분포 단원의 전제가 된다. ③ 「오버부킹형 이항분포 모델링」(0366) — 사건을 확률변수의 부등식으로 번역하는 것이 본체라 단순 이항확률 계산과 다른 층이다. ④ 「E(X^2)=V+{E(X)}^2 전환」(0355 · 0367) — 표·이항 어느 쪽에서 나오든 같은 관문이므로 독립 유형으로 두는 편이 변형 설계에 유리하다.
- **통합해도 될 유형**: 유형 04 와 유형 07 은 '표·확률질량함수 → E·V' 라는 같은 골조에 변환 공식 한 줄이 붙고 안 붙고의 차이뿐이라 하나의 유형 + 변환 옵션으로 묶을 수 있다. 같은 이유로 유형 05 와 유형 08(분포표를 직접 만드는 쪽)도 한 유형으로 통합 가능하다. 유형 06 은 분포 없이 공식만 쓰는 층이라 분리 유지가 맞다.
- **변형 설계 메모**: 이 구간에서 ★ 를 한 단계 올리는 가장 안전한 레버는 ① 정방향을 역방향으로 뒤집기(값을 주고 조건 역추적 → I-BW) ② 상수 조건을 이차식으로 만들어 근 하나를 기각시키기(I-VF) ③ 말로 된 사건을 확률변수의 부등식으로 번역시키기(I-EQV d2)다. 반대로 n·항 수를 키워 계산만 무겁게 하는 변형은 ★ 를 올리지 못하고 질만 떨어뜨린다(§2.11 YELLOW).
