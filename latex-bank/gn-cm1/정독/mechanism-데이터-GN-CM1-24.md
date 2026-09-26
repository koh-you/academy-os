---
name: mechanism-데이터-GN-CM1-24
description: 개념원리 공통수학1 24 절댓값 기호를 포함한 일차부등식(1/1 · 201~203쪽 · 13문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학1 (22개정 · 학생용) · 전사본 latex-bank/gn-cm1
  section: 24 절댓값 기호를 포함한 일차부등식
  unit_code: "24"
  part: "1/1"
  extract_range: "201~203쪽 · 201-e10~203-439"
  total_problems: 13
  unit_total: 13
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm1/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm1/items/<id>.tex
  image_source: latex-bank/gn-cm1/figures/ (crops.json)
---

# 개념원리 공통수학1 · 24 절댓값 기호를 포함한 일차부등식 (1/1) 정독 데이터 (v1.0)

이 파일은 201~203쪽 13문항 전수를 다룬다. 구역은 「필수·발전 예제」(필수 예제 2 + 그 아래 확인체크 4) 6문, 「연습문제 STEP 1」 4문, 「연습문제 STEP 2」 2문, 「연습문제 실력 UP」 1문이고 이 단원에는 「개념원리 익히기」와 「특강」이 없다. 개념원리 고등의 난이도 신호는 구역과 태그에 있다 — 필수 예제 ★2 · 발전 예제 ★3, STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4 가 출발점이고, 확인체크는 통번호를 달고 있어도 바로 위 예제의 유사문제이므로 대응 예제의 ★(여기서는 모두 필수 예제 → ★2)를 출발점으로 삼았다. 교육청 기출 태그(203-433)는 통찰이 depth 1 하나뿐이라 +0 으로 두었다. 예제(id `쪽-eN`)는 상자 발문만 전사돼 있어 본문 풀이·KEY Point 없이 발문만으로 판정했다. 그림 문항은 없다.

단원의 골조는 두 갈래뿐이다 — (가) 절댓값이 하나일 때 성질 $|X|<a \Leftrightarrow -a<X<a$ 로 바로 푸는 길, (나) 절댓값이 둘 이상이거나 우변에 $x$ 가 있어 기준점으로 구간을 나눈 뒤 각 구간의 후보해를 구간 조건과 대조하는 길이다. 그래서 이 범위의 ★ 를 가르는 축은 계산량이 아니라 **구간 분할에서 기각(I-VF)이 일어나는지**, 그리고 **해집합이 거꾸로 주어져 상수를 역추적하는지(I-BW)·조건을 해 존재/부재로 옮기는지(I-EQV)** 다. 이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-CM1-201-e10
  page: 201
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑵ 절댓값 부등식 풀기 — ⑴ 절댓값이 한 개인 부등식 ⑵ 절댓값 값이 두 수 사이에 끼인 이중 부등식.
  category: '절댓값의 성질(|X|<a ⟺ -a<X<a)로 절댓값을 벗겨 x 의 범위 구하기'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "절댓값 기호를 포함한 일차부등식 — 절댓값의 성질로 풀기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 성질을 그대로 적용하면 한 줄이고, ⑵ 는 절댓값 값이 3 과 5 사이라는 조건을 x-1 의 부호에 따라 두 덩어리로 갈라 각각 이중 부등식으로 옮기는 한 단계가 더 붙는다.
    두 소문항 모두 기각 없이 결과가 그대로 답이 되므로 통찰 0 · 절차형. M_total 5 라 -1 후보이지만 ⑵ 의 두 갈래 때문에 개념 확인(★1) 아래로 내리지 않고 필수 예제 출발점 ★2 를 유지했다.
  tier: star_2
  mechanism_primary: '절댓값의 성질로 부등식을 벗기기 → (⑵는 안쪽 식의 부호별 두 갈래) → 각 갈래의 x 범위 합치기'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $-1<x<2$ ⑵ $-4<x<-2$ 또는 $4<x<6$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/201-e10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '안쪽 일차식의 계수·상수와 바깥 경계값은 자유롭게 바꿀 수 있다. 제약: ⑴ 은 우변이 양수여야 하고(0 이하면 해가 없거나 한 점), ⑵ 는 두 경계 3<5 의 대소가 유지돼야 하며 경계가 모두 양수여야 두 구간이 나온다. 답이 분수로 지저분해지지 않게 계수는 경계값의 약수로 잡는다.'
    creative: '(1) 부등호를 ≤ 로 바꿔 경계 포함 여부를 묻기(★2 유지 · T-경계 추가) (2) ⑵ 를 |x-1|>3 과 |x-1|<5 의 연립으로 제시해 교집합을 구하게 하기(같은 골조 ★2) (3) 우변을 음수로 두어 해가 없음을 판단시키기(★2 · 해 존재 조건은 203-435 계열) (4) 안쪽을 |2x-1| 처럼 계수가 있는 식으로 두고 정수해 개수를 묻게 하면 ★3.'
```

```yaml
- id: GN-CM1-201-429
  page: 201
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑵ 절댓값 부등식 풀기 — ⑴ 절댓값이 상수보다 큰 꼴 ⑵ 분수 계수 일차식의 절댓값이 두 수 사이에 끼인 이중 부등식.
  category: '절댓값의 성질(|X|>a ⟺ X<-a 또는 X>a)과 이중 부등식으로 벗기기'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "절댓값 기호를 포함한 일차부등식 — 절댓값의 성질로 풀기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e10 과 같은 도구이고 부등호 방향만 바깥쪽(또는)으로 바뀐다. ⑵ 는 계수가 -4/3 이라 양변에 3/4 을 곱하고 부등호 방향이 뒤집히는 처리가 붙어 Mₖ 가 1 올라간다.
    기각 없이 두 갈래가 모두 답에 남으므로 절차형. 필수 예제 아래 확인체크 → 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: '절댓값의 성질로 벗기기 → ⑵는 안쪽 식의 부호별 두 이중 부등식 → 음수 계수로 나눌 때 부등호 방향 반전 → x 범위'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $x<-\dfrac{3}{2}$ 또는 $x>\dfrac{5}{2}$ \quad ⑵ $\dfrac{9}{4}<x<3$ 또는 $\dfrac{9}{2}<x<\dfrac{21}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/201-429.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '⑵ 의 분수 계수 4/3 은 다른 분수로 바꿀 수 있지만 두 경계 1, 2 와 곱했을 때 답이 정리되는 값이어야 한다. 제약: 안쪽 식의 x 계수가 음수여야 부등호 반전 함정이 살아 있고, 두 경계는 0<1<2 처럼 모두 양수·대소가 유지돼야 네 개의 끝점이 나온다.'
    creative: '(1) ⑴ 과 ⑵ 를 연립해 공통 범위를 묻기(★2~3) (2) ⑵ 의 해에 속하는 정수의 개수를 묻기(★3 · 203-437 계열) (3) 경계 하나를 문자로 두고 해가 두 구간이 되도록 하는 조건을 묻기(I-BW 추가 ★3).'
```

```yaml
- id: GN-CM1-201-430
  page: 201
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    절댓값 부등식 |3x-a|<b 의 해가 주어진 구간과 같을 때(b>0) 두 실수의 곱 ab 구하기.
  category: '절댓값 부등식의 일반해를 a, b 로 표현 → 주어진 해와 끝점 비교 → 연립'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "해가 -2<x<4 라는 조건을 |3x-a|<b 의 일반해 (a-b)/3<x<(a+b)/3 의 두 끝점 등식으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "절댓값 부등식의 해가 주어질 때 미정계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    해를 먼저 문자로 풀어 두 끝점을 a, b 로 표현한 뒤 주어진 구간과 대조하는 역방향 골조다. 끝점을 맞추면 a-b, a+b 의 연립이라 계산은 가볍다.
    구간의 중심이 1, 반지름이 3 임을 보고 |x-1|<3 → |3x-3|<9 로 바로 읽는 지름길도 있지만 교재 골조는 계수 비교다. 조건을 등식으로 옮기는 동치 변환 1개(EQV d1) · 확인체크(필수 대응) → ★2.
  tier: star_2
  mechanism_primary: '|3x-a|<b → (a-b)/3<x<(a+b)/3 → 주어진 해의 두 끝점과 비교 → a, b 연립 → ab'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$27$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/201-430.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'x 의 계수 3 과 해 구간 -2<x<4 를 바꿀 수 있다. 제약: 구간의 중심에 x 계수를 곱한 값이 a, 반지름에 곱한 값이 b 가 되므로 a, b 가 정수로 떨어지려면 (중심·반지름)×계수가 정수여야 한다. b>0 조건은 유지해야 답이 하나로 결정된다.'
    creative: '(1) 부등호를 >로 바꿔 해가 두 반직선으로 주어지게 하기(같은 골조 ★2) (2) b>0 조건을 빼고 b 의 부호까지 따지게 하면 기각 단계가 생겨 ★3(I-VF) (3) a+b 대신 a, b 를 각각 묻거나 해의 정수 개수로 조건을 주면 203-433 계열로 이동(★2~3) (4) 좌변을 |3x-a|+c 꼴로 두면 조건이 한 겹 늘어 ★3.'
```

```yaml
- id: GN-CM1-202-e11
  page: 202
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑵ 구간을 나누어 푸는 절댓값 부등식 — ⑴ 우변에 x 가 있는 절댓값 한 개짜리 ⑵ 절댓값이 두 개인 합 꼴.
  category: '절댓값 안의 식이 0 이 되는 점으로 구간 분할 → 구간별 일차부등식 → 구간 조건과 대조'
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "구간별로 얻은 후보해를 그 구간의 범위와 대조해 일부를 기각(⑴ 의 x≥-2 쪽, ⑵ 의 가운데 구간은 부등식 자체가 거짓)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "절댓값 기호를 포함한 일차부등식 — 구간을 나누어 풀기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    우변에 x 가 있거나 절댓값이 두 개면 성질로 한 번에 벗길 수 없으므로 기준점(⑴ x=-2, ⑵ x=-1, 3)으로 구간을 나눈다. 구간이 둘·셋이라 Mₛ 3 · 함정은 T-부호(절댓값 벗길 때)와 T-범위(구간 조건 대조) 둘.
    ⑵ 의 가운데 구간에서는 절댓값 합이 상수가 되어 부등식이 거짓이 되는데, 이를 「해 없음」으로 버리지 못하면 답이 틀어진다(VF d1).
    M_total 8 로 무겁지만 쓰는 도구는 교과서 표준 구간 분할이고 통찰이 depth 1 하나라 필수 예제 출발점 ★2 를 유지했다.
  tier: star_2
  mechanism_primary: '기준점으로 구간 분할 → 구간마다 절댓값을 부호대로 벗겨 일차부등식 → 후보해를 구간 조건과 교집합 → 합집합'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ $x<-\dfrac{9}{4}$ ⑵ $x<-2$ 또는 $x>4$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/202-e11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '⑴ 은 우변 일차식의 계수·상수, ⑵ 는 두 기준점(-1, 3)과 우변 상수 6 을 바꿀 수 있다. 제약: ⑵ 에서 가운데 구간의 절댓값 합은 두 기준점 사이의 거리(=4)로 고정되므로, 우변 상수를 그 거리보다 크게 잡아야 가운데 구간이 해 없음으로 기각된다. 우변을 거리보다 작게 두면 모든 실수가 해가 되어 문제가 무너진다.'
    creative: '(1) ⑵ 의 우변을 두 기준점 거리와 같게 두어 「해가 없다/모든 실수」를 판단시키기(★3 · I-EQV) (2) 부등호를 <로 뒤집어 해가 유한 구간이 되게 하기(같은 골조 ★2) (3) 계수를 붙여 2|x+1|+|3-x| 꼴로 만들면 구간별 기울기가 달라져 202-432·203-439 계열(★3) (4) ⑴ 의 우변을 좌변과 같은 절댓값으로 바꾸면 양변 제곱 갈래가 생겨 I-SC 추가 ★3.'
```

```yaml
- id: GN-CM1-202-431
  page: 202
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑵ 구간을 나누어 푸는 절댓값 부등식 — ⑴ 절댓값에 계수가 붙고 우변에 x 가 있는 꼴 ⑵ 절댓값 두 개의 차와 우변 일차식 비교.
  category: '기준점으로 구간 분할 → 구간별 일차부등식 → 구간 조건과 대조해 일부 기각'
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "⑵ 의 x≥2 구간에서는 절댓값이 상수 3 으로 정리돼 우변과 모순이 되므로 그 구간을 통째로 기각해야 함"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "절댓값 기호가 둘인 일차부등식 — 구간을 나누어 풀기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e11 과 같은 골조의 확인체크다. ⑴ 은 기준점 x=2 로 두 구간, ⑵ 는 x=-1, 2 로 세 구간이며 ⑵ 의 양 끝 구간에서 절댓값 차가 상수(-3, 3)로 굳는 것이 포인트다.
    ⑴ 은 두 구간 모두 해가 남아 이어 붙이면 되지만, ⑵ 는 한 구간이 모순으로 기각된다(VF d1). 확인체크(필수 대응) → ★2.
  tier: star_2
  mechanism_primary: '기준점으로 구간 분할 → 부호대로 절댓값 제거 → 구간별 해와 구간 조건의 교집합 → 합집합'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ $-1<x<3$ ⑵ $x<\dfrac{2}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/202-431.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '⑴ 의 절댓값 계수 2 와 우변 -x+5, ⑵ 의 기준점 -1, 2 와 우변 -x+1 을 바꿀 수 있다. 제약: ⑴ 은 두 구간의 해가 이어져 하나의 구간이 되도록 우변 기울기(-1)의 절댓값이 좌변 계수보다 작아야 한다. ⑵ 는 두 절댓값의 계수가 같아야 양 끝 구간에서 x 가 소거돼 상수가 남는다.'
    creative: '(1) ⑵ 의 두 절댓값 계수를 다르게 하면 끝 구간에서도 x 가 살아남아 기각 없이 세 구간을 다 풀어야 함(★2~3) (2) 해를 구한 뒤 정수해 개수·최댓값을 묻기(★3 · 203-434 계열) (3) 우변 상수를 문자로 두고 해가 한 구간이 되도록 하는 범위를 묻기(I-BW 추가 ★3) (4) ⑴ 을 등식으로 바꾸면 절댓값 방정식(13단원)으로 이동.'
```

```yaml
- id: GN-CM1-202-432
  page: 202
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    절댓값 두 개의 가중합이 상수 이하라는 부등식의 해에서 x 의 최댓값 M, 최솟값 m 을 읽어 M-m 구하기.
  category: '기준점으로 구간 분할 → 구간별 해 → 합집합을 하나의 닫힌 구간으로 → 양 끝점의 차'
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "세 구간 중 가장 왼쪽 구간의 후보해가 구간 조건과 어긋나 통째로 기각되고, 남은 두 구간이 이어져 하나의 닫힌 구간이 됨"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "절댓값 부등식의 해의 최댓값·최솟값(구간 분할)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    기준점 x=-3, 1 로 세 구간을 나누고 계수가 다른 두 절댓값을 부호대로 벗긴다. 왼쪽 구간의 후보해는 구간 밖이라 기각되고(VF d1), 나머지 두 구간의 해가 맞닿아 닫힌 구간 하나가 된다.
    최댓값·최솟값은 그 구간의 양 끝점을 읽는 한 단계일 뿐이고 등호가 있어 끝점이 해에 포함된다(T-경계).
    431 과 같은 골조에 끝점 추출이 한 단계 더 붙은 정도라 확인체크 출발점 ★2 를 유지했다.
  tier: star_2
  mechanism_primary: '기준점 -3, 1 로 세 구간 분할 → 구간별 일차부등식 → 유효 구간만 합쳐 닫힌 구간 → M-m'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{4}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/202-432.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 절댓값의 계수(2, 1)·기준점(1, -3)·우변 상수 5 를 바꿀 수 있다. 제약: 우변 상수가 두 기준점에서의 함숫값 중 작은 값(여기서는 x=1 에서 4)보다 커야 해가 존재하고, 너무 크면 세 구간이 모두 살아나 기각 단계가 사라진다. 끝점이 분수로 나오므로 답이 지저분해지지 않게 계수를 고른다.'
    creative: '(1) 부등호를 ≥ 로 바꾸면 해가 바깥 두 반직선이 되어 최댓값·최솟값이 없어짐 — 그 사실을 묻는 문제로(★3) (2) 우변을 문자 k 로 두고 해가 존재할 조건을 묻기(203-439 와 동일 골조 ★4) (3) 해에 속하는 정수의 개수를 묻기(★3) (4) 절댓값을 세 개로 늘리면 구간 4개로 Mₛ 상승(★3).'
```

### 연습문제 STEP 1

```yaml
- id: GN-CM1-203-433
  page: 203
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 STEP 1"
  summary: |
    절댓값 부등식 |x-7|≤a+1 을 만족시키는 정수 x 의 개수가 9 가 되도록 하는 자연수 a 를 고르는 5지선다.
  category: '절댓값 부등식의 해를 중심 7 · 반지름 a+1 의 닫힌 구간으로 → 정수 개수 2(a+1)+1 → a 역추적'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "정수해 개수 9 라는 결과 조건에서 구간의 반지름(a+1)을 역추적 — 해를 먼저 구간으로 표현한 뒤 개수식을 세워야 진행됨"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "절댓값 부등식의 정수해 개수 조건으로 미정계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    해는 7 을 중심으로 좌우 대칭인 닫힌 구간이므로 정수 개수가 2(a+1)+1 로 바로 나온다. 중심 7 이 정수라 양 끝점이 모두 정수이고 등호가 포함돼 끝점을 세는지(T-경계)가 유일한 함정이다.
    개수 조건에서 거꾸로 a 를 찾는 역방향 1단계(BW d1). 교육청 기출 태그는 통찰이 depth 1 하나뿐이라 +0 으로 두고 STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: '|x-7|≤a+1 → 6-a≤x≤8+a → 정수 개수 2a+3=9 → a'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/203-433.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '중심 7, 우변 a+1, 개수 9 를 바꿀 수 있다. 제약: 중심이 정수이고 우변이 정수일 때만 개수가 홀수 2(a+1)+1 로 딱 떨어진다 — 중심을 반정수(예: 7.5)로 두면 개수가 짝수가 되어 선택지 설계가 달라진다. 개수는 홀수로, a 는 자연수 범위에서 답이 하나가 되도록 잡는다.'
    creative: '(1) 중심을 반정수로 두어 개수식이 달라지게 하기(★3) (2) 부등호를 < 로 바꿔 끝점이 빠지게 하기(T-경계 강화 ★2~3) (3) 「정수 x 의 개수가 9 이하」처럼 범위 조건으로 주면 a 가 구간으로 나와 ★3 (4) |x-7|≤a+1 을 |2x-7|≤a+1 로 바꾸면 끝점이 반정수가 되어 개수 세기가 까다로워짐(★3).'
```

```yaml
- id: GN-CM1-203-434
  page: 203
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    일차부등식과 절댓값 부등식으로 이루어진 연립부등식을 만족시키는 정수 x 의 최댓값 구하기.
  category: '두 부등식의 해를 각각 구하기 → 교집합 → 경계 미포함을 살펴 정수 최댓값'
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 2
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "절댓값 부등식이 만드는 두 갈래 중 오른쪽 갈래가 일차부등식의 해와 만나지 않아 통째로 기각되고 왼쪽 갈래만 남음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "절댓값 부등식을 포함한 연립일차부등식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    위 식은 x 의 상한을, 아래 절댓값 부등식은 바깥쪽 두 갈래를 준다. 두 갈래 중 하나는 상한과 겹치지 않아 버려지고(VF d1) 남은 갈래가 답을 결정한다.
    해가 열린 부등식이라 경계값 자체는 정수 최댓값이 될 수 없다(T-경계). 도구는 표준이고 통찰 1개 depth 1 → STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: '일차부등식 → x 상한 / |2x-3|>7 → 두 갈래 → 상한과 교집합에서 살아남는 갈래 → 경계 미포함 정수 최댓값'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/203-434.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '위 일차부등식의 계수와 절댓값 부등식의 중심·반지름을 바꿀 수 있다. 제약: 절댓값의 두 갈래 중 정확히 하나만 위 부등식의 해와 겹쳐야 기각 단계가 살아 있다. 남는 갈래의 경계가 정수가 되도록 두면 「경계 미포함」 함정이 작동한다.'
    creative: '(1) 두 갈래가 모두 살아남게 해 해가 두 구간이 되도록 하면 최댓값이 다른 쪽에서 나옴(★3) (2) 정수 최댓값 대신 정수해의 개수를 묻기(★2~3) (3) 위 식도 절댓값으로 바꿔 절댓값 두 개의 연립으로 만들기(★3) (4) 절댓값 부등식의 상수를 문자로 두고 정수해가 존재할 조건을 묻기(I-BW ★3~4).'
```

```yaml
- id: GN-CM1-203-435
  page: 203
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    절댓값 부등식 |x-2|≤(2/3)k-4 의 해가 존재하지 않도록 하는 자연수 k 의 개수 구하기.
  category: '해 부재 조건을 우변의 부호 조건으로 동치 변환 → 부등식 풀이 → 자연수 개수'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「해가 존재하지 않는다」를 「(절댓값의 최솟값 0) > 우변」 즉 우변이 음수라는 조건으로 옮김 — 우변이 0 이면 x=2 라는 해가 있으므로 등호가 갈림길"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "절댓값 부등식의 해가 존재하지 않을 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x 를 실제로 구할 필요가 없고 좌변의 최솟값이 0 이라는 사실만 쓰면 된다. 핵심은 우변이 0 일 때 해가 한 점 존재한다는 것 — 여기서 부등호를 ≤ 로 잘못 잡으면 개수가 하나 어긋난다(T-경계).
    조건을 해 부재로 옮기는 동치 변환 1개(EQV d1) · 계산은 일차부등식 한 줄 · STEP 1 → ★2.
  tier: star_2
  mechanism_primary: '해 없음 ⟺ 우변<0 → (2/3)k-4<0 → k 범위 → 자연수 개수'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/203-435.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '우변 일차식의 계수 2/3 과 상수 4, 좌변 중심 2 를 바꿀 수 있다(중심은 답에 영향이 없다 — 그것이 이 문항의 포인트). 제약: 우변이 0 이 되는 k 가 자연수가 되도록 두어야 경계 함정이 살아난다. 계수는 분수로 두어 k 의 상한이 정수로 떨어지게 한다.'
    creative: '(1) 부등호를 < 로 바꾸면 우변≤0 이 조건이 되어 개수가 하나 늘어남 — ★ 는 그대로지만 경계 판단이 뒤집히는 좋은 대조문항 (2) 「해가 오직 하나 존재」로 물으면 우변=0 한 점(★2) (3) 좌변을 |x-2|+|x+1| 로 바꾸면 최솟값이 0 이 아니라 두 점 사이 거리가 되어 203-439 계열(★4) (4) k 의 최솟값·최댓값을 묻는 형태로 변형(★2).'
```

```yaml
- id: GN-CM1-203-436
  page: 203
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    절댓값 부등식 |3-x|≥-2(x+5) 의 해가 x≥a 의 꼴일 때 상수 a 구하기.
  category: '기준점으로 구간 분할 → 구간별 일차부등식 → 합집합의 왼쪽 끝점 읽기'
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "절댓값 부등식의 해가 주어질 때 상수 구하기(구간 분할)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    우변에 x 가 있어 성질로 벗길 수 없으므로 기준점 x=3 으로 두 구간을 나눈다. 오른쪽 구간은 부등식이 구간 전체에서 성립하고 왼쪽 구간에서 하한이 생겨, 두 결과를 합치면 하나의 반직선이 된다.
    기각되는 구간이 없고 「해가 x≥a」는 끝점을 읽는 한 단계라 통찰 0 · 절차형. 함정은 절댓값 부호 처리와 구간 대조 둘. STEP 1 → ★2.
  tier: star_2
  mechanism_primary: 'x=3 기준 두 구간 분할 → 구간별 일차부등식 → 두 해의 합집합이 x≥(왼쪽 구간의 하한) → a'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-13$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/203-436.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '좌변 기준점 3 과 우변 -2(x+5) 의 계수·상수를 바꿀 수 있다. 제약: 우변 기울기의 절댓값이 1 보다 커야 왼쪽 구간에서 하한이 생기고, 오른쪽 구간에서는 부등식이 항상 성립해야 해가 하나의 반직선으로 정리된다. 하한이 정수로 떨어지도록 상수를 고른다.'
    creative: '(1) 우변 기울기를 양수로 바꾸면 해가 유한 구간이나 공집합이 되어 「x≥a」 꼴이 깨짐 — 해의 꼴 자체를 묻는 문제로(★3) (2) 부등호를 ≤ 로 뒤집어 해가 유계가 되게 하기(★2~3) (3) 좌변을 |3-x|+|x+1| 로 늘려 구간 셋으로(★3) (4) a 를 문자 조건으로 주고 역으로 우변 계수를 묻기(I-BW ★3).'
```

### 연습문제 STEP 2

```yaml
- id: GN-CM1-203-437
  page: 203
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    절댓값이 이중으로 씌워진 부등식 ||x+1|-5|<2 를 만족시키는 정수 x 의 개수 구하기.
  category: '바깥 절댓값을 이중 부등식으로 벗기기 → |x+1| 의 범위 → 안쪽 절댓값을 두 구간으로 → 정수 세기'
  M: {s: 3, k: 1, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "안쪽 |x+1| 을 하나의 덩어리로 보고 바깥 절댓값부터 벗겨 3<|x+1|<7 이라는 중간 조건으로 옮김 — 안쪽부터 구간을 나누면 경우가 폭증함"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "이중 절댓값 부등식의 정수해 개수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    바깥부터 벗기면 |x+1| 이 두 수 사이에 끼인 e10 ⑵ 꼴로 환원되고, 거기서 다시 x+1 의 부호에 따라 두 개의 열린 구간이 나온다. 이 순서를 잡는 것이 이 문항의 전부다(EQV d2).
    끝점이 모두 정수인데 부등호가 엄격이라 끝점을 빼고 세야 한다(T-경계). 안쪽부터 구간을 나누는 학생은 경우가 늘어 헤맨다.
    STEP 2 출발점 ★3 · 통찰 1개 depth 2 → ★3 유지.
  tier: star_3
  mechanism_primary: '||x+1|-5|<2 → 3<|x+1|<7 → 두 열린 구간 → 각 구간의 정수 개수 합'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/203-437.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '안쪽 평행이동 +1, 바깥 상수 5, 우변 2 를 바꿀 수 있다. 제약: 5>2 여야 |x+1| 의 하한이 양수가 되어 구간이 둘로 갈라진다(5≤2 면 한 덩어리). 두 구간은 x=-1 에 대해 대칭이므로 정수 개수는 항상 짝수다 — 답을 홀수로 만들려면 등호를 넣어 끝점을 포함시켜야 한다.'
    creative: '(1) 바깥 상수를 우변보다 작게 두어 구간이 하나로 합쳐지는 경우와 대조시키기(★3) (2) 부등호를 ≤ 로 바꿔 끝점 포함 여부로 개수가 4 늘어나는 것을 묻기(★3 · T-경계) (3) 정수 개수 대신 개수가 주어진 값이 되도록 상수를 역추적시키면 I-BW 추가 ★4 (4) 안쪽을 |2x+1| 로 두면 끝점이 반정수가 되어 세기가 까다로워짐(★3~4).'
```

```yaml
- id: GN-CM1-203-438
  page: 203
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    제곱근 꼴과 절댓값이 섞인 부등식의 해가 연립 일차부등식 5x+a<6x+4<x+b 의 해와 같을 때 a+b 구하기.
  category: '√(A²)=|A| 로 변환 → 구간 분할로 해 구간 결정 → 연립부등식의 해와 끝점 비교 → 상수 역추적'
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "√((1-x)²) 을 1-x 가 아니라 |1-x| 로 바꾸는 동치 변환 — 이것을 놓치면 절댓값 두 개짜리 구조 자체가 안 보임"
    - step: 3
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「두 부등식의 해가 같다」에서 a, b 를 역추적 — 연립부등식을 a-4<x<(b-4)/5 꼴로 정리한 뒤 앞서 구한 구간의 양 끝점과 맞춤"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "√(A²)=|A| 변환 + 두 부등식의 해가 같을 조건"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    세 덩어리가 겹친 문항이다 — (가) √((1-x)²)=|x-1| 변환, (나) 기준점 -1, 1 로 세 구간을 나눠 계수가 다른 두 절댓값 처리, (다) 두 번 쪼갠 연립부등식의 해와 끝점 대조.
    (다)는 6x+4 를 가운데 두고 왼쪽·오른쪽을 따로 풀어야 하고, 얻은 두 끝점을 앞 결과와 짝지어 a, b 를 각각 되찾는 역방향 단계다(BW d2).
    [분류 이슈] 벤더는 STEP 2(★3 출발)이나 통찰 2개 · M_total 9 · 저노출 유형(I-BW) 포함이라 ★4 로 판정 — 1단 차이라 라벨은 ★4 로 두고 기록만 함.
  tier: star_4
  mechanism_primary: '√((1-x)²)=|x-1| → 2|x-1|+3|x+1|<9 를 세 구간으로 풀어 해 구간 → 연립부등식 해 a-4<x<(b-4)/5 와 끝점 비교 → a+b'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$14$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/203-438.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 절댓값의 계수(2, 3)·기준점(1, -1)·우변 9, 그리고 연립부등식의 계수를 바꿀 수 있다. 제약: 우변은 두 기준점에서의 함숫값(x=1 에서 6, x=-1 에서 4) 중 큰 값보다 커야 해가 양쪽으로 퍼진 하나의 열린 구간이 되고, 그래야 「해가 같다」 비교가 성립한다. 연립부등식 쪽은 두 끝점이 a, b 에 대해 일차로 풀리도록 유지한다.'
    creative: '(1) √((1-x)²) 을 그냥 |x-1| 로 적어 주면 변환 통찰이 사라져 ★3 — ★ 변동 지점 (2) 부등호에 등호를 넣어 닫힌 구간으로 만들면 연립 쪽도 등호가 되어야 하므로 경계 일치 판단이 추가(★4) (3) 「해가 같다」 대신 「한쪽 해가 다른 쪽에 포함된다」로 바꾸면 부등식 조건이 되어 a, b 가 범위로 나옴(★4~5 · I-MI 추가) (4) 좌변을 절댓값 세 개로 늘리면 구간 4개로 Mₛ 상승(★4).'
```

### 연습문제 실력 UP

```yaml
- id: GN-CM1-203-439
  page: 203
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    절댓값 두 개의 가중합에 대한 부등식 2|x+1|+|x-1|≤k 가 해를 갖도록 하는 실수 k 의 값의 범위 구하기.
  category: '해 존재 조건을 좌변의 최솟값과 k 의 대소로 동치 변환 → 꺾인 일차함수의 최솟값 → k 범위'
  M: {s: 3, k: 1, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「부등식이 해를 갖는다」를 「k ≥ (좌변의 최솟값)」으로 옮김 — x 를 구하는 문제가 아니라 좌변의 최솟값을 구하는 문제로 성격이 바뀜"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "구간마다 기울기가 -3, -1, 3 으로 바뀌는 꺾인 일차함수로 보고 최솟값이 꺾이는 점(기울기 부호가 바뀌는 x=-1)에서 생김을 읽기 — 대수식을 그래프로 옮기는 전환"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "절댓값의 합의 최솟값과 부등식의 해 존재 조건"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    x 를 구하려 구간을 나누기 시작하면 k 가 섞여 케이스가 폭증한다. 조건을 「k 가 좌변의 최솟값 이상」으로 뒤집는 것이 첫 통찰이고(EQV d1), 그다음 좌변을 꺾인 일차함수로 보아 최솟값이 계수가 큰 절댓값의 기준점에서 나온다는 것을 읽어야 한다(RT d2).
    두 절댓값의 계수가 달라 최솟값이 두 기준점의 중점이 아니라 한쪽 끝에서 생기는 것이 이 문항의 함정이다(T-범위). 등호 포함 여부도 답의 경계를 가른다(T-경계).
    실력 UP 출발점 ★4 · 통찰 2개 · 저노출 유형(I-RT) 포함 → ★4 유지. ★5 는 통찰 3개 이상 + SC/VF/SYM/XU 요건 미달이라 두지 않았다.
  tier: star_4
  mechanism_primary: '해 존재 ⟺ k ≥ min(2|x+1|+|x-1|) → 꺾인 일차함수의 최솟값은 x=-1 에서 → k 범위'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$k\ge 2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/203-439.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 절댓값의 계수(2, 1)와 기준점(-1, 1)을 바꿀 수 있다. 제약: 계수가 서로 다를 때만 최솟값이 계수가 큰 쪽 기준점에서 생긴다 — 계수를 같게 하면 두 기준점 사이 구간 전체가 최솟값이 되어 성격이 달라진다. 최솟값은 (계수 작은 쪽)×(두 기준점 사이 거리)로 계산되므로 답이 정수로 떨어지게 거리를 잡는다.'
    creative: '(1) 두 계수를 같게 두면 최솟값이 구간 전체에서 유지돼 그래프 해석이 쉬워짐 → ★3 (★ 변동 지점) (2) 부등호를 뒤집어 「모든 실수 x 에 대해 성립할 조건」으로 물으면 최댓값이 없어 해가 없음을 판단해야 함(★4 · I-VF 추가) (3) 「해를 갖지 않을 조건」으로 바꾸면 203-435 와 대칭인 문항(★3~4) (4) 좌변에 절댓값을 하나 더 얹어 최솟값 위치를 계수 합으로 판단하게 하면 ★5 후보(I-SC 추가).'
```

## 표본 판정 요약 (13문)

- ★ 분포: ★1 0 · ★2 10 · ★3 1 · ★4 2 · ★5 0
- 통찰형 10 · 절차형 3 · premium 0
- 통찰 유형 분포: I-EQV 5 · I-VF 4 · I-BW 2 · I-RT 1 (depth 는 1~2 · depth 3 없음)
- type_hint 상위 5: 「절댓값 기호를 포함한 일차부등식 — 절댓값의 성질로 풀기」 2 · 「구간을 나누어 풀기(절댓값 둘 포함)」 2 · 「해가 주어질 때 미정계수·상수 구하기」 2 · 「해의 존재·부재 조건」 2 · 「정수해 개수」 2
- 그림: 0문 · 소문항(⑴⑵) 묶음 문항 4문(201-e10 · 201-429 · 202-e11 · 202-431)
- 이 단원의 ★ 를 가르는 축은 계산량이 아니라 **구간 분할에서 기각이 생기는지(I-VF)** 와 **조건이 거꾸로 주어져 상수를 역추적하거나(I-BW) 해 존재/부재로 옮겨야 하는지(I-EQV)** 다. 절댓값을 성질로 바로 벗기는 문항(201-e10 · 201-429)과 구간을 나눠도 모든 구간이 해에 기여하는 문항(203-436)은 절차형 ★2 에 머물고, 기각·역추적·최솟값 해석이 붙으면서 ★3 → ★4 로 올라간다.
- M_total 은 5~9 로 좁게 분포한다. 구간 분할 문항(202-e11 · 202-431 · 202-432)은 M_total 8 로 무겁지만 도구가 교과 표준이라 ★2 에 머물러, 이 단원에서는 **M_total 이 ★ 와 잘 상관되지 않는다** — 변형 슬롯을 고를 때 M_total 대신 insights 를 기준으로 삼아야 한다.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CM1-203-438 | 벤더는 STEP 2(★3 출발)이나 $\sqrt{A^2}=\|A\|$ 변환 + 세 구간 + 해집합 대조 역추적으로 통찰 2개·M_total 9 → ★4 로 라벨. 1단 차이 기록 | ★3 / ★4 |
| GN-CM1-202-e11 · GN-CM1-202-431 · GN-CM1-202-432 | 셋 다 M_total 8(구간 3개 + 기각)이라 학생 체감은 ★3 급이나, 쓰는 도구가 교과서 표준 구간 분할이고 통찰이 depth 1 하나뿐이라 벤더 출발점 ★2 를 유지함 | ★2 / ★3 |
| GN-CM1-203-433 | 교육청 기출 태그(+0~1)를 통찰 depth 1 하나만 보고 +0 으로 처리. 정수 개수 세기를 통찰로 한 번 더 세면 ★3 이 됨 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위의 13문은 **두 축의 조합**으로 거의 다 설명된다 — 축 A(절댓값을 어떻게 벗기는가: 성질로 직접 / 구간 분할 / 이중 절댓값 / √(A²) 변환), 축 B(무엇을 묻는가: 해 자체 / 정수해 개수·최댓값 / 미정계수 역추적 / 해의 존재·부재). 카탈로그는 축 A 를 유형으로, 축 B 를 하위 변형으로 세우는 편이 base ★ 가 깔끔하게 갈린다.
- **따로 세워야 할 유형**: ① 「절댓값의 성질로 푸는 일차부등식」(201-e10·429)과 「구간을 나누어 푸는 일차부등식」(202-e11·431)은 도구가 달라 base ★ 가 ★2 로 같아도 분리해야 한다 — 우변에 $x$ 가 있거나 절댓값이 둘 이상이면 후자. ② 「이중 절댓값」(203-437)은 벗기는 순서 자체가 통찰이라 별도 유형. ③ 「해의 존재·부재 조건」(203-435·439)은 x 를 구하지 않고 좌변의 최솟값만 보는 고유 골조라 분리하고, 좌변이 절댓값 1개(최솟값 0)인지 2개 이상(최솟값이 양수)인지로 하위 유형을 나누면 base ★ 가 ★2/★4 로 갈린다.
- **통합해도 될 유형**: ① 「해가 주어질 때 미정계수 구하기」(201-430)와 「해가 x≥a 꼴일 때 상수 구하기」(203-436)는 끝점 대조라는 골조가 같으므로 한 유형으로 두고, 구간 분할이 필요한지를 depth 로 구분하면 된다. ② 「정수해 개수」(203-433·437)와 「정수해의 최댓값」(203-434)은 해 구간을 구한 뒤 정수를 세는 마지막 단계만 다르므로 한 유형의 변형으로 묶어도 된다. ③ 202-432 의 「M-m」 과 203-434 의 「정수 최댓값」 은 모두 해 구간의 끝점 읽기라 별도 유형으로 세울 필요가 없다.
