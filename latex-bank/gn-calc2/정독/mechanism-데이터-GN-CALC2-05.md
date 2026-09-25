---
name: mechanism-데이터-GN-CALC2-05
description: 개념원리 미적분Ⅱ 05 급수의 수렴과 발산(1/1 · 40~48쪽 34문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 미적분Ⅱ · 전사본 latex-bank/gn-calc2
  section: 05 급수의 수렴과 발산
  unit_code: CALC2-05
  part: "1/1"
  extract_range: "40~48쪽 · 40-66~48-94"
  total_problems: 34
  unit_total: 34
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). insight_type 은 insights 유무로만 갈랐고 anchor_status 는 null. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-calc2/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-calc2/items/<id>.tex
  image_source: latex-bank/gn-calc2/figures/ (crops.json · 이 범위에는 그림 문항 없음)
---

# 개념원리 미적분Ⅱ · 05 급수의 수렴과 발산 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 미적분Ⅱ 05단원 40~48쪽 34문항 전수를 다룬다. 구역은 「개념원리 익히기」 3문 · 「필수·발전 예제」(필수 예제 5 + 확인체크 10) 15문 · 「연습문제 STEP 1」 6문 · 「연습문제 STEP 2」 8문 · 「연습문제 실력 UP」 2문이다. 개념원리 고등의 난이도 신호는 구역과 태그에 실려 있어 개념원리 익히기는 ★1, 필수 예제·확인체크는 ★2, STEP 1은 ★2, STEP 2는 ★3, 실력 UP은 ★4를 출발점으로 삼고 M_total 과 통찰 수로 ±1 조정했다. 교육청 기출 태그(46-79 · 48-90)는 통찰이 추가로 붙지 않아 +0 으로 두었다.

단원 성격상 골조가 다섯 갈래로 모인다. ⑴ 부분분수·유리화로 이웃 항의 차를 만들어 접는 telescoping, ⑵ 로그 진수를 인수분해해 두 사슬로 접는 로그 급수, ⑶ 홀수·짝수 부분합을 나눠 조사하는 교대급수, ⑷ 급수가 수렴한다는 조건에서 일반항의 극한 정보를 꺼내 쓰는 역방향 사용, ⑸ 급수의 선형 성질로 세운 연립. 이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다. 그림 문항은 이 범위에 없다(전부 `figure: none`).

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-CALC2-40-66
  page: 40
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념 확인"
  summary: |
    ⑴~⑷ 네 급수의 수렴·발산을 조사하고 수렴하면 합을 구하기. ⑴ 일반항이 (n+2)/2 인 급수 ⑵ 1/√n − 1/√(n+1) 꼴 차의 급수 ⑶ 분모가 √(2n+2)+√(2n) 인 급수 ⑷ 제곱수의 급수.
  category: "부분합 S_n 을 만들어 극한으로 수렴·발산 판정"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "급수의 수렴·발산 판정과 합(부분합의 극한)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴⑷ 는 일반항이 0 으로 가지 않아 즉시 발산, ⑵ 는 이웃 항이 접혀 S_n = 1 − 1/√(n+1) → 1, ⑶ 은 분모를 유리화하면 차 꼴이 되지만 접고 난 부분합이 무한대로 간다. 도구는 부분합의 정의 하나뿐이고 착안 단계가 없어 절차형. 개념 확인 구역 출발점 ★1 을 M_total 6 으로도 올리지 않았다.
    [분류 이슈] ⑶ 의 유리화 + 접은 뒤 발산 판정은 실제 체감이 ★2 쪽이다(1단 차이, 라벨은 구역 신호대로 ★1 유지).
  tier: star_1
  mechanism_primary: '각 급수의 부분합 S_n 을 정의대로 만든다 → 접히는 항은 접고 유리화가 필요하면 유리화 → lim S_n 의 존재 여부로 수렴·발산 결정'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ 발산 ⑵ 수렴, $1$ ⑶ 발산 ⑷ 발산'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/40-66.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '⑵ 의 1/√n 을 1/n·1/∛n 으로, ⑶ 의 2n+2 를 3n+3 등으로 바꿀 수 있다. 제약: ⑵ 는 접은 뒤 남는 첫 항이 유한해야 하고, ⑶ 은 유리화 뒤 계수가 딱 떨어지게 두 근호 안의 차가 상수여야 한다. ⑴⑷ 는 일반항의 극한이 0 이 아니게만 유지한다.'
    creative: '(1) 네 소문항의 수렴·발산 배치를 바꿔 「수렴하는 것의 개수」를 묻기(★1 유지) (2) ⑶ 만 떼어 「일반항이 0 으로 가는데도 발산한다」를 설명하게 하면 I-VF 가 붙어 ★3 (3) ⑵⑶ 을 한 문제로 합쳐 어느 쪽이 수렴하는지 비교하게 하면 ★2.'
```

```yaml
- id: GN-CALC2-40-67
  page: 40
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념 확인"
  summary: |
    ⑴~⑷ 네 급수가 발산함을 보이기. 일반항이 각각 n/(2n+1), √(n²+2n)−n, log{3n²/(n²+2)}, 5ⁿ/(2ⁿ+3ⁿ) 인 급수.
  category: "일반항의 극한이 0 이 아니면 급수는 발산한다는 정리 적용"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "일반항의 극한으로 급수의 발산 보이기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    네 소문항 모두 앞 단원의 표준 극한 계산(최고차항 비교 · 유리화 · 로그의 연속성 · 지수 크기 비교) 한 줄이면 일반항의 극한이 나오고, 그 값이 0 이 아니라는 서술로 끝난다. 착안 단계가 없어 절차형이고 계산도 각각 한 줄이라 Mₖ 1. 개념 확인 구역 ★1 유지.
  tier: star_1
  mechanism_primary: '각 일반항의 극한을 구한다 → 극한이 0 이 아니(거나 무한대)임을 확인 → 급수는 발산'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '풀이 참조 (⑴ $\displaystyle\lim_{n\to\infty} a_n=\dfrac{1}{2}\ne 0$ ⑵ $\displaystyle\lim_{n\to\infty} a_n=1\ne 0$ ⑶ $\displaystyle\lim_{n\to\infty} a_n=\log 3\ne 0$ ⑷ $\displaystyle\lim_{n\to\infty} a_n=\infty$)'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/40-67.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '⑴ 의 계수(n/(3n+2) 등) · ⑵ 의 근호 안 일차항(√(n²+4n)−n) · ⑶ 의 상수배(log{5n²/(n²+1)}) · ⑷ 의 밑(7ⁿ/(3ⁿ+4ⁿ))을 바꿀 수 있다. 제약: 네 경우 모두 일반항의 극한이 0 이 아니어야 하고, ⑵ 는 유리화 뒤 극한이 유한하도록 근호 안이 이차식이어야 한다.'
    creative: '(1) 네 개 중 하나만 일반항이 0 으로 가게 바꿔 「이 정리로는 판정할 수 없는 것」을 고르게 하면 I-VF 가 붙어 ★3 (2) 발산 이유를 서술형으로 묻기(★1 유지) (3) 일반항의 극한이 0 인 발산 급수(조화급수 꼴)를 보기에 섞으면 ★3.'
```

```yaml
- id: GN-CALC2-40-68
  page: 40
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념 확인"
  summary: |
    두 수렴급수의 합이 −2, 5 로 주어졌을 때 ⑴ Σ(aₙ+3bₙ) ⑵ Σ(5aₙ−2bₙ) 의 값 구하기.
  category: "급수의 선형 성질(상수배·합)로 값 계산"
  M: {s: 1, k: 1, a: 2, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "급수의 성질(선형결합)로 합 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    두 급수가 모두 수렴하므로 Σ(kaₙ+lbₙ)=kΣaₙ+lΣbₙ 을 그대로 대입하면 한 줄에 끝난다. 통찰 0 · M_total 4 로 v3.8 의 −1 조건에 해당하지만 개념 확인 구역 출발점이 이미 ★1 이라 하한에서 멈춘다.
  tier: star_1
  mechanism_primary: '두 급수가 수렴함을 전제 확인 → 선형 성질로 분해 → 주어진 두 값 대입'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $13$ ⑵ $-20$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/40-68.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'Σaₙ · Σbₙ 의 값과 선형결합 계수(3, 5, −2)를 자유롭게 바꿀 수 있다. 제약: 계수는 정수로 두어 답이 정수가 되게 하고, 두 급수가 모두 수렴한다는 전제를 발문에 남긴다.'
    creative: '(1) 세 급수 Σaₙ, Σbₙ, Σcₙ 의 선형결합으로 늘리기(★1 유지) (2) 결합 결과 값을 주고 Σaₙ 을 되묻는 역방향으로 바꾸면 45-e5 골조가 되어 ★2 (3) 한 급수만 수렴한다고 두고 Σ(aₙ+bₙ) 의 수렴 여부를 묻기(★3 · I-VF).'
```

### 필수·발전 예제

```yaml
- id: GN-CALC2-41-e1
  page: 41
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    1/(2×5)+1/(5×8)+1/(8×11)+… 의 합 구하기(분모가 공차 3 인 이웃 두 수의 곱).
  category: "일반항 파악 → 부분분수 분해 → telescoping"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부분분수를 이용한 급수의 합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    2, 5, 8, 11 에서 일반항이 1/{(3n−1)(3n+2)} 임을 읽어 내고 1/3{1/(3n−1)−1/(3n+2)} 로 쪼개면 부분합이 1/3(1/2 − 1/(3n+2)) 로 접힌다. 부분분수는 개념원리가 본문에서 바로 가르치는 표준 도구라 통찰로 세지 않았다. 필수 예제 출발점 ★2 유지.
  mechanism_primary: '분모의 규칙에서 일반항 1/{(3n−1)(3n+2)} 를 세운다 → 계수 1/3 의 부분분수로 분해 → 부분합이 접혀 첫 항만 남음 → 극한'
  tier: star_2
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{6}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/41-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '분모 수열의 첫 값과 공차(2,5,8→1,5,9 처럼 공차 4)를 바꿀 수 있다. 제약: 부분분수 계수가 1/공차 이므로 답이 깔끔하려면 공차가 첫 항을 나누는 관계로 두고, 분자를 공차와 같게 하면 계수 1 로 더 쉬워진다(★1 쪽으로 이동).'
    creative: '(1) 유한합(제10항까지)으로 바꿔 극한 없이 묻기(★1) (2) 분모를 이웃 두 항이 아니라 한 칸 건너뛴 곱으로 두면 접힘이 두 겹이 되어 ★3 (3) 합의 값을 주고 공차를 역추적하게 하면 I-BW 가 붙어 ★3.'
```

```yaml
- id: GN-CALC2-41-69
  page: 41
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑶ 세 급수의 합 구하기. ⑴ 일반항 1/(n²+3n+2) ⑵ 분모가 (2n)²−1 인 급수 ⑶ 분모가 1부터 n까지의 합인 급수.
  category: "분모 인수분해 → 부분분수 → telescoping"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부분분수를 이용한 급수의 합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 (n+1)(n+2), ⑵ 는 (2n−1)(2n+1), ⑶ 은 n(n+1)/2 로 분모를 인수분해하면 셋 다 같은 부분분수 골조가 된다. 인수분해 → 분해 → 접기가 정해진 순서라 통찰 없음. 확인체크는 앞의 필수 예제와 같은 층이라 ★2.
  mechanism_primary: '분모를 이웃 두 인수의 곱으로 인수분해 → 부분분수 분해 → 부분합이 접힘 → 극한'
  tier: star_2
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{1}{2}$ ⑵ $\dfrac{1}{2}$ ⑶ $2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/41-69.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '⑴ 의 이차식 계수(n²+5n+6 등) · ⑵ 의 짝수 배수(3n 등) · ⑶ 의 합 공식을 등차수열의 합으로 일반화할 수 있다. 제약: 이차식이 이웃하는 두 일차식으로 인수분해돼야 하고, ⑶ 은 분모가 n(n+1)/2 꼴이라 분자 2 가 살아 남아 합이 2 가 되는 구조를 유지해야 한다.'
    creative: '(1) 세 소문항 중 하나만 분모가 인수분해되지 않게 바꿔 발산을 섞기(★3 · I-VF) (2) ⑶ 을 「1부터 n까지의 제곱의 합」으로 바꾸면 부분분수가 세 조각이 되어 ★3 (3) 합이 같은 두 급수를 제시하고 이유를 설명하게 하기(★3).'
```

```yaml
- id: GN-CALC2-41-70
  page: 41
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    첫째항 3, 공차 2 인 등차수열의 제n항까지의 합을 Sₙ 이라 할 때 Σ1/Sₙ 의 값 구하기.
  category: "등차수열의 합 공식 → 인수분해 → 부분분수 → telescoping"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등차수열의 합 Sₙ 과 부분분수 급수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    Sₙ = n(n+2) 로 정리되면 1/Sₙ 이 1/2{1/n − 1/(n+2)} 로 쪼개지고, 두 칸 건너 접히므로 앞의 두 항 1 + 1/2 가 남는다. 합 공식 적용과 부분분수가 모두 표준이라 절차형이지만 접힘이 두 칸이라 41-69 보다 한 겹 두껍다. 확인체크 ★2 유지.
  mechanism_primary: '등차수열의 합 공식으로 Sₙ=n(n+2) → 1/Sₙ 을 계수 1/2 의 부분분수로 분해 → 두 칸 건너 접혀 앞 두 항만 남음 → 극한'
  tier: star_2
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{3}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/41-70.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '첫째항과 공차를 바꿀 수 있다(첫째항 2·공차 2 면 Sₙ=n(n+1) 로 한 칸 접힘). 제약: Sₙ 이 두 일차식의 곱으로 인수분해돼야 하므로 첫째항 a 와 공차 d 는 2a/d 가 정수가 되게 고른다.'
    creative: '(1) 등차수열 대신 계차수열이 등차인 수열로 두면 Sₙ 이 삼차가 되어 ★4 (2) Σ1/Sₙ 의 값을 주고 공차를 역추적시키면 47-86 골조 ★3 (3) 1/Sₙ 대신 1/√Sₙ 로 바꿔 수렴·발산 판정만 묻기(★3).'
```

```yaml
- id: GN-CALC2-42-e2
  page: 42
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    n=2 부터의 급수 Σlog{(n²−1)/n²} 의 합 구하기.
  category: "로그 진수 인수분해 → 두 사슬로 분리 → telescoping"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '진수를 (n−1)(n+1)/n² 로 인수분해해 log{(n−1)/n} + log{(n+1)/n} 두 개의 어긋난 telescoping 사슬로 바꿔 놓음'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "로그를 포함한 급수의 합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    로그를 그대로 두면 접히지 않고, 진수를 인수분해해 두 사슬로 나누는 동치 변환이 풀이를 여는 한 수다. 두 사슬이 한 칸씩 어긋나 각각 첫 항·끝 항만 남고 극한에서 log(1/2) 로 정리된다. 변환 착안 1개(EQV d1) · M_total 5 · 필수 예제 출발점 → ★2.
  mechanism_primary: '진수 (n²−1)/n² 를 (n−1)(n+1)/n² 로 인수분해 → 로그의 합으로 분해해 두 사슬을 만든다 → 각 사슬이 접혀 남는 항만 계산 → 극한'
  tier: star_2
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-\log 2$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/42-e2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '로그의 밑(상용로그 → 밑 2·3)과 시작 항(n=2 → n=3)을 바꿀 수 있다. 제약: 진수가 반드시 이웃 인수의 곱/제곱 꼴로 인수분해돼 접혀야 하고, 시작 항을 바꾸면 남는 첫 항이 달라지므로 답도 함께 바뀐다.'
    creative: '(1) 진수를 (n+2)²/{n(n+4)} 처럼 네 칸 어긋나게 만들면 42-71⑵ 골조로 ★3 (2) 합의 값을 주고 밑을 역추적(★3 · I-BW) (3) 유한 부분합까지만 계산시키면 극한이 빠져 ★1.'
```

```yaml
- id: GN-CALC2-42-71
  page: 42
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴ n=2 부터의 Σlog₂{n²/(n²−1)} ⑵ log(1+4/(1×5))+log(1+4/(2×6))+log(1+4/(3×7))+… 두 급수의 합 구하기.
  category: "로그 진수 인수분해 → 어긋난 사슬 telescoping"
  M: {s: 3, k: 2, a: 1, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '⑵ 의 진수 1+4/{n(n+4)} 를 (n+2)²/{n(n+4)} 로 정리해 두 칸·네 칸 어긋난 두 사슬의 곱으로 바꿔야 접힘이 보임'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "로그를 포함한 급수의 합"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑴ 은 42-e2 의 역수 꼴이라 한 칸 어긋난 표준 접힘이지만, ⑵ 는 진수를 통분해 (n+2)²/{n(n+4)} 로 만든 뒤 분자·분모의 어긋남이 두 칸과 네 칸으로 다르다는 것을 보고 남는 항을 세야 한다. 접힘 구조를 스스로 설계하는 단계라 EQV depth 2. 확인체크 ★2 출발점에 통찰 depth 2 로 +1 → ★3.
  mechanism_primary: '진수를 인수분해·통분해 (n+2)²/{n(n+4)} 꼴로 정리 → 로그의 합으로 나눠 어긋난 사슬 두 개를 만든다 → 남는 항의 개수를 세어 부분합 → 극한'
  tier: star_3
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $1$ ⑵ $\log 6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/42-71.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '⑵ 의 분자 4 와 곱의 간격(1×5 → 1×4 면 3/{n(n+3)})을 바꿀 수 있다. 제약: 1 + k/{n(n+k)} 가 완전제곱/이웃 곱으로 정리되도록 분자와 간격을 맞춰야 하고, 남는 항이 유한 개여야 한다.'
    creative: '(1) 어긋남을 여섯 칸으로 늘려 남는 항을 더 세게 하면 ★4 (2) ⑴⑵ 의 합이 같아지도록 밑을 정하게 하는 역문제(★4 · I-BW) (3) 접히지 않는 진수를 하나 섞어 발산을 판정시키면 ★3 · I-VF.'
```

```yaml
- id: GN-CALC2-42-72
  page: 42
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    수열 {aₙ} 의 첫째항부터 제n항까지의 곱이 (3n−1)/(n+1) 일 때 급수 Σlog₃aₙ 의 합 구하기.
  category: "로그의 합 = 곱의 로그 → 곱의 극한"
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '부분합 Σlog₃aₖ 를 log₃(a₁a₂…aₙ) 로 바꿔 놓아 주어진 곱의 식을 그대로 쓸 수 있게 함'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "곱으로 주어진 수열의 로그 급수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    aₙ 을 직접 구하려 들면 (3n−1)(n)/{(n+1)(3n−4)} 같은 지저분한 식이 나오지만, 부분합을 곱의 로그로 옮기면 주어진 식이 통째로 들어간다. 합↔곱 표현 전환 1개(RT d1)로 계산 부담이 거의 사라져 Mₖ 1. 확인체크 ★2 유지.
  mechanism_primary: '부분합을 로그의 합으로 보고 곱의 로그 log₃(a₁…aₙ) 로 전환 → 주어진 곱 (3n−1)/(n+1) 대입 → 극한 3 → log₃3'
  tier: star_2
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/42-72.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '곱의 식 (3n−1)/(n+1) 의 계수와 로그의 밑을 바꿀 수 있다. 제약: 곱의 극한이 양수이고 그 값이 밑의 거듭제곱이어야 답이 정수로 떨어진다. 극한이 0 이나 무한대면 급수가 발산하므로 분자·분모의 차수를 같게 유지한다.'
    creative: '(1) 곱의 극한을 0 이 되게 해 발산을 판정시키면 ★3 · I-VF (2) 곱 대신 Σlog aₙ 값을 주고 곱의 극한을 되묻는 역방향(★3) (3) aₙ 의 일반항까지 요구하면 계산 마찰만 늘어 질 저하(권하지 않음).'
```

```yaml
- id: GN-CALC2-43-e3
  page: 43
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    ⑴ 1/2 − 2/3 + 2/3 − 3/4 + … 와 ⑵ 같은 항들을 두 개씩 괄호로 묶은 급수의 수렴·발산을 조사하고 수렴하면 합 구하기.
  category: "홀수·짝수 부분합을 나눠 조사 → 괄호 유무 비교"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '항을 그대로 더한 ⑴ 은 S(2n−1) 과 S(2n) 의 극한이 달라 발산, 괄호로 묶은 ⑵ 는 항이 바뀌어 수렴 — 같은 수들을 두 경우로 나눠 따져야 함'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "항의 부호가 교대로 바뀌는 급수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑴ 에서 홀수 번째 부분합은 1/2 에 머물지 않고 −(n+1)/(n+2) 가 남아 −1/2 로, 짝수 번째는 다른 값으로 가는지 둘 다 확인해야 발산을 말할 수 있다. ⑵ 는 괄호가 항의 정의를 바꿔 telescoping 이 되어 −1/2 로 수렴한다. 같은 숫자 나열이 괄호 하나로 결론이 갈리는 것이 이 유형의 함정(T-경계)이다. 필수 예제 ★2 + MI depth 2 → ★3.
  mechanism_primary: '급수의 항이 무엇인지부터 확정(괄호 유무) → 홀수·짝수 부분합을 따로 계산 → 두 극한이 같으면 수렴, 다르면 발산'
  tier: star_3
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ 발산 ⑵ 수렴, $-\dfrac{1}{2}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/43-e3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '기본 수열을 n/(n+1) 대신 1/n · √n/(√n+1) 등으로 바꿀 수 있다. 제약: ⑴ 이 발산하려면 기본 수열의 극한이 0 이 아니어야 하고, 극한을 0 으로 두면 ⑴⑵ 가 모두 수렴해 43-73 골조가 된다(★2 로 하락).'
    creative: '(1) 괄호를 세 항씩 묶어 결론이 또 달라지게 하면 ★4 (2) 발산하는 쪽만 주고 이유를 서술시키기(★3 유지) (3) 기본 수열을 미정으로 두고 수렴 조건을 묻는 47-89 꼴로 바꾸면 추상도가 올라 ★3~4.'
```

```yaml
- id: GN-CALC2-43-73
  page: 43
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴ 1 − 1/2 + 1/2 − 1/3 + … ⑵ (2−3/2)+(3/2−4/3)+(4/3−5/4)+… 의 수렴·발산을 조사하고 수렴하면 합 구하기.
  category: "홀수·짝수 부분합을 나눠 조사"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '⑴ 은 괄호가 없으므로 홀수·짝수 부분합을 각각 구해 두 극한이 같음을 확인해야 수렴이라고 말할 수 있음'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "항의 부호가 교대로 바뀌는 급수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 소문항 모두 기본 수열의 극한이 0 또는 1 로 가면서 접히므로 결론은 수렴이고, 43-e3 과 달리 괄호 유무가 결론을 바꾸지 않는다. 홀짝 분리 확인 1개(MI d1)만 남아 난도가 한 단 낮다. 확인체크 ★2.
  mechanism_primary: '괄호 유무에 따라 항을 확정 → 홀수·짝수 부분합을 각각 계산 → 두 극한이 일치하므로 수렴, 그 값이 합'
  tier: star_2
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ 수렴, $1$ ⑵ 수렴, $1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/43-73.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '⑴ 의 기본 수열 1/n 을 1/(2n−1) · 1/√n 으로, ⑵ 의 (n+1)/n 을 (n+2)/n 등으로 바꿀 수 있다. 제약: 수렴을 유지하려면 기본 수열이 유한한 극한을 가져야 하고, 극한이 0 이 아닌 값이면 합은 첫 항 − 극한이 된다.'
    creative: '(1) 한 소문항의 기본 수열만 극한이 0 이 아니게 바꿔 발산을 섞으면 ★3 (2) 합만 주고 기본 수열의 극한을 역추적(★3 · I-BW) (3) 항의 순서를 재배열했을 때의 결과를 묻는 확장은 교육과정 밖이라 권하지 않음.'
```

```yaml
- id: GN-CALC2-44-e4
  page: 44
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    급수 (a₁−3)+(a₂/2−3)+(a₃/3−3)+… 이 수렴할 때 lim (4n+aₙ)/(aₙ−n) 의 값 구하기.
  category: "급수 수렴 → 일반항 극한 0 → aₙ/n 의 극한 → 분수식 극한"
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '「수렴한다」는 조건을 일반항 aₙ/n − 3 → 0, 즉 aₙ/n → 3 이라는 극한 정보로 바꿔야 문제가 풀리기 시작함'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "급수와 수열의 극한값 사이의 관계"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    수렴한다는 말만 주고 aₙ 은 전혀 모르는 상태이므로, 일반항이 0 으로 간다는 필요조건을 역으로 써서 aₙ/n 의 극한을 확보하는 것이 핵심이다. 그다음 구하는 식의 분자·분모를 n 으로 나누면 aₙ/n 만 남아 (4+3)/(3−1) 로 정리된다. 필수 예제 ★2 에 M_total 7(추상도·단계 수) 로 +1 → ★3.
  mechanism_primary: '급수가 수렴 → 일반항 aₙ/n − 3 → 0 → aₙ/n → 3 → 구하는 분수식을 n 으로 나눠 aₙ/n 만 남김 → 대입'
  tier: star_3
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{7}{2}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/44-e4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '빼 주는 상수 3 과 구하는 식의 계수(4n+aₙ, aₙ−n)를 바꿀 수 있다. 제약: 분모의 극한이 0 이 되지 않도록 계수를 고르고(aₙ/n → c 일 때 분모가 c−1 ≠ 0), 답이 유리수로 떨어지게 정수 계수로 둔다.'
    creative: '(1) aₙ/n 대신 aₙ/n² 으로 두어 나누는 차수를 바꾸기(★3 유지) (2) 급수의 합까지 주고 Σ 와 lim 을 함께 쓰게 하면 44-76 골조로 ★3 (3) 수렴 조건을 만족하는 aₙ 의 예를 하나 들게 하면 I-VF 가 붙어 ★4.'
```

```yaml
- id: GN-CALC2-44-74
  page: 44
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    Σ(aₙ+5)=3, Σbₙ=−2 일 때 lim (12aₙ+bₙ²)/(3aₙ−2bₙ²) 의 값 구하기.
  category: "두 급수의 수렴 → 각 일반항의 극한 → 분수식 대입"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '급수의 합 3, −2 라는 값이 아니라 「수렴한다」는 사실에서 aₙ → −5, bₙ → 0 을 끌어내는 것이 쓰임새'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "급수와 수열의 극한값 사이의 관계"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    합의 값 3 과 −2 는 미끼이고, 필요한 것은 aₙ+5 → 0 과 bₙ → 0 뿐이다. 두 극한을 분수식에 넣으면 분모가 0 이 아니어서 그대로 값이 나온다. 극한 정보 추출 1개(EQV d1) · 계산 한 줄이라 확인체크 ★2 유지.
  mechanism_primary: '두 급수가 수렴 → 일반항 aₙ+5 → 0, bₙ → 0 → aₙ → −5, bₙ² → 0 → 분수식에 대입'
  tier: star_2
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/44-74.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '빼 주는 상수 5 와 분자·분모의 계수 12, 3, −2 를 바꿀 수 있다. 제약: aₙ 의 극한을 대입했을 때 분모가 0 이 되지 않아야 하고, bₙ² 항은 어차피 0 이 되므로 계수는 자유롭다.'
    creative: '(1) bₙ² 대신 nbₙ 처럼 0 으로 간다고 단정할 수 없는 항을 넣으면 판단 단계가 늘어 ★3 (2) 급수의 합 값을 실제로 써야 하는 식(Σ 가 들어간 식)으로 바꾸면 44-76 골조 ★3 (3) 분모가 0 이 되도록 계수를 배치해 극한이 존재하지 않음을 판정시키면 ★4.'
```

```yaml
- id: GN-CALC2-44-75
  page: 44
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    Σ{aₙ − 2n²/(n²+1)} = 1/2 일 때 lim aₙ 의 값 구하기.
  category: "급수 수렴 → 일반항 극한 0 → 빼 준 식의 극한과 합쳐 aₙ 의 극한"
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '수렴 조건에서 aₙ − 2n²/(n²+1) → 0 을 얻고, 빼 준 식의 극한 2 를 되더해 aₙ 의 극한을 복원'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "급수와 수열의 극한값 사이의 관계"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    합 1/2 은 쓰이지 않고 수렴한다는 사실만 쓰인다. 일반항의 극한 0 과 2n²/(n²+1) → 2 를 더해 aₙ → 2. 단계가 둘뿐이고 계산도 최고차항 비교 한 줄이라 확인체크 ★2 하한 쪽이다.
  mechanism_primary: '급수가 수렴 → 일반항 → 0 → aₙ = (일반항) + 2n²/(n²+1) 의 극한을 합쳐 aₙ → 2'
  tier: star_2
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/44-75.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '빼 주는 유리식의 계수·차수(2n²/(n²+1) → 3n/(n+2))와 급수의 합 값을 바꿀 수 있다. 제약: 빼 주는 식의 극한이 유한해야 aₙ 의 극한이 결정되고, 분자 차수를 분모보다 크게 하면 aₙ 이 발산해 문제가 성립하지 않는다.'
    creative: '(1) 빼는 식을 2ⁿ⁺¹/(2ⁿ+1) 처럼 지수로 바꾸면 48-90 골조 ★3 (2) lim aₙ 대신 lim naₙ 을 물으면 판단이 하나 늘어 ★3 (3) 합의 값 1/2 을 실제로 쓰는 항을 하나 더 얹으면 ★3.'
```

```yaml
- id: GN-CALC2-44-76
  page: 44
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    Sₙ 을 aₙ 의 제n항까지의 합이라 하고 Σaₙ=6 일 때 lim (2aₙ+3)/(5aₙ−Sₙ) 의 값 구하기.
  category: "급수의 합 = 부분합의 극한, 일반항의 극한 0 을 동시에 사용"
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '하나의 조건 Σaₙ=6 에서 Sₙ → 6 과 aₙ → 0 두 가지 극한 정보를 동시에 꺼내 분자·분모에 각각 씀'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "급수의 합과 부분합의 극한을 함께 쓰는 극한"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    같은 조건이 부분합 쪽으로는 6, 일반항 쪽으로는 0 이라는 서로 다른 정보를 준다는 것만 알면 (0+3)/(0−6) 로 끝난다. 혼동 지점은 aₙ 과 Sₙ 의 극한을 바꿔 쓰는 것뿐이라 확인체크 ★2.
  mechanism_primary: 'Σaₙ=6 → Sₙ → 6 이고 동시에 aₙ → 0 → 분자·분모에 각각 대입'
  tier: star_2
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/44-76.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '급수의 합 6 과 분자·분모의 계수 2, 3, 5 를 바꿀 수 있다. 제약: 분모의 극한 −(합) 이 0 이 되지 않아야 하므로 합은 0 이 아닌 값으로 두고, 분자에 상수항이 없으면 답이 0 이 되어 시시해진다.'
    creative: '(1) Sₙ 과 S₂ₙ 을 함께 넣어 두 부분합의 극한이 같음을 쓰게 하면 ★3 (2) 합을 미지수 k 로 두고 극한값이 주어질 때 k 를 역추적(★3 · I-BW) (3) aₙ 이 양수라는 조건을 더해 Sₙ 의 단조성까지 쓰게 하면 ★4.'
```

```yaml
- id: GN-CALC2-45-e5
  page: 45
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    Σbₙ=−3, Σ(3aₙ−2bₙ)=15 일 때 Σaₙ 의 값 구하기.
  category: "급수의 선형 성질 → 역산"
  M: {s: 1, k: 1, a: 2, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "급수의 성질(선형결합)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    Σ(3aₙ−2bₙ)=3Σaₙ−2Σbₙ 로 분해해 3Σaₙ = 15 + 2(−3) 을 푸는 역산 한 줄. 통찰 0 · M_total 4 라 v3.8 산식으로는 −1 이지만, 분해가 성립하려면 두 급수가 모두 수렴해야 한다는 전제 확인이 남아 있어 필수 예제 출발점 ★2 를 유지했다.
    [분류 이슈] 산식상 ★1 후보(통찰 0 · M_total 4), 라벨은 벤더 필수 예제 신호대로 ★2.
  mechanism_primary: '두 급수의 수렴 전제 확인 → Σ(3aₙ−2bₙ) 을 3Σaₙ−2Σbₙ 로 분해 → Σbₙ 대입 후 Σaₙ 에 대해 역산'
  tier: star_2
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$3$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/45-e5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '계수 3, −2 와 두 값 −3, 15 를 바꿀 수 있다. 제약: 구하는 급수의 계수로 나누어떨어지게 값을 맞추고, 두 급수가 모두 수렴한다는 문구를 지운 변형은 성립하지 않는다.'
    creative: '(1) 미지 급수를 둘로 늘려 연립으로 만들면 45-77·47-84 골조 ★2 (2) 로그를 씌워 48-92 꼴로 바꾸면 ★2 유지 (3) 한 급수의 수렴을 빼고 「수렴한다고 할 수 있는가」를 묻는 참·거짓으로 바꾸면 ★4 · I-VF.'
```

```yaml
- id: GN-CALC2-45-77
  page: 45
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 급수가 모두 수렴하고 Σ(aₙ−bₙ)=1, Σ(4aₙ+3bₙ)=11 일 때 Σ(aₙ+2bₙ) 의 값 구하기.
  category: "급수의 선형 성질 → 두 미지 합에 대한 연립"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "급수의 성질(연립)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    Σaₙ=A, Σbₙ=B 로 두면 A−B=1, 4A+3B=11 의 일차 연립이고 구하는 값은 A+2B 다. 치환 → 연립 → 대입이 정해진 순서라 통찰 없음. 확인체크 ★2.
  mechanism_primary: 'Σaₙ=A, Σbₙ=B 로 치환 → 두 조건을 A, B 의 일차 연립으로 → 풀어서 A+2B 에 대입'
  tier: star_2
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/45-77.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 조건식의 계수와 우변, 구하는 식의 계수를 모두 바꿀 수 있다. 제약: 계수행렬이 정칙이어야(두 식이 평행하지 않아야) 하고, 정수해가 나오도록 우변을 맞춘다.'
    creative: '(1) 구하는 식을 조건식의 정수 결합으로 만들 수 없게 두면 A, B 를 각각 구해야 해서 ★3 (2) 세 수열로 늘려 3원 연립(★3) (3) 두 조건 중 하나만 주고 「Σaₙ 을 결정할 수 있는가」를 묻는 판정형으로 바꾸면 ★4.'
```

```yaml
- id: GN-CALC2-45-78
  page: 45
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 수열의 제n항까지의 합이 각각 Sₙ=(4n²−1)/(n²+n−4), Tₙ=√(n²+6n)−n 일 때 Σ(2aₙ−bₙ) 의 값 구하기.
  category: "급수의 합 = 부분합의 극한 → 선형결합"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부분합 Sₙ 이 주어진 급수의 합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    급수의 합은 부분합의 극한이라는 정의를 그대로 쓰면 Σaₙ = lim Sₙ = 4, Σbₙ = lim Tₙ = 3(유리화)이고, 선형 성질로 2·4−3 이 답이다. 두 극한 계산이 모두 앞 단원의 표준 처리라 통찰 없음. 확인체크 ★2.
  mechanism_primary: 'Σaₙ=lim Sₙ, Σbₙ=lim Tₙ 로 정의 적용 → 최고차항 비교와 유리화로 두 극한 계산 → 선형 성질로 2Σaₙ−Σbₙ'
  tier: star_2
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/45-78.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'Sₙ 의 계수(4n²−1 → 6n²+n)와 Tₙ 의 근호 안 일차항 계수(6n → 8n)를 바꿀 수 있다. 제약: Sₙ 은 분자·분모 차수가 같아야 극한이 유한하고, Tₙ 은 유리화 뒤 극한이 일차항 계수의 절반이 되므로 짝수로 두면 정수 답이 나온다.'
    creative: '(1) Sₙ 의 분자 차수를 높여 발산시키고 수렴 여부부터 판정하게 하면 ★3 · I-VF (2) aₙ 의 일반항을 Sₙ−Sₙ₋₁ 로 구하게 덧붙이면 단계가 늘어 ★3 (3) Sₙ 에 미지 상수를 넣고 Σ(2aₙ−bₙ) 값으로 역추적하면 ★3 · I-BW.'
```

### 연습문제 STEP 1

```yaml
- id: GN-CALC2-46-79
  page: 46
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 STEP 1"
  summary: |
    첫째항 1, 공차 d(>0) 인 등차수열에 대하여 Σ{n/aₙ − (n+1)/aₙ₊₁} = 2/3 일 때 d 의 값 구하기. 5지선다.
  category: "이미 차 꼴인 급수의 telescoping → 극한 → 미지 공차 역추적"
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '접고 남는 1/a₁ − lim (n+1)/aₙ₊₁ 을 d 의 식 1 − 1/d 로 표현한 뒤 주어진 합과 같다고 놓아 d 를 역추적'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "telescoping 급수에서 미정계수 역추적"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    항이 이미 차 꼴이라 접는 것은 바로 되지만, 남는 lim (n+1)/aₙ₊₁ 이 등차수열의 일반항에서 1/d 로 간다는 계산을 거쳐야 d 에 대한 방정식이 선다. 기출 태그가 붙었으나 통찰은 역추적 1개(d1) 뿐이라 STEP 1 출발점 ★2 유지.
  mechanism_primary: '차 꼴이므로 부분합이 곧바로 접힘 → 남는 1/a₁ − lim (n+1)/aₙ₊₁ 을 d 로 표현 → 주어진 합과 등식 → d'
  tier: star_2
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '③'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/46-79.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '첫째항과 급수의 합 2/3 을 바꿀 수 있다. 제약: 합이 1 − (첫째항 역수 관련 항)/d 꼴이라 d 가 자연수로 떨어지게 합을 분수로 고르고, d>0 조건을 유지해 극한 1/d 가 유한하도록 한다.'
    creative: '(1) 공차 대신 첫째항을 미지수로 두기(★2 유지) (2) 등차수열을 등비수열로 바꾸면 남는 극한이 0 또는 발산으로 갈려 경우 나눔이 생겨 ★3 (3) d>0 조건을 지우면 d<0 일 때의 수렴 여부까지 따져야 해 ★4 · I-VF.'
```

```yaml
- id: GN-CALC2-46-80
  page: 46
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    이차방정식 x²−(n+1)x+n²+2n=0 의 두 근을 αₙ, βₙ 이라 할 때 Σ1/{(αₙ−1)(βₙ−1)} 의 값 구하기.
  category: "근과 계수의 관계로 곱을 n 의 식으로 → 부분분수 → telescoping"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '(αₙ−1)(βₙ−1) 을 αₙβₙ−(αₙ+βₙ)+1 로 펼쳐 근과 계수의 관계만으로 n(n+1) 을 얻음(근을 직접 구하지 않음)'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "근과 계수의 관계를 이용한 부분분수 급수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    근을 실제로 구하면 판별식이 음수여서 막히고, 곱을 전개해 두 대칭식으로 바꾸면 n(n+1) 이 깔끔하게 나온다. 그 뒤는 부분분수 표준 절차. 전개 착안 1개(EQV d1) · STEP 1 출발점 ★2.
  mechanism_primary: '(αₙ−1)(βₙ−1) 전개 → 근과 계수의 관계 대입해 n(n+1) → 부분분수 → 접힘 → 극한'
  tier: star_2
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/46-80.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '이차방정식의 계수(합 n+1 · 곱 n²+2n)를 바꿀 수 있고, 평행이동 값 1 을 2 로 바꿔 (αₙ−2)(βₙ−2) 로 둘 수도 있다. 제약: 전개 결과가 이웃 두 일차식의 곱으로 인수분해돼야 부분분수가 되므로 합·곱을 그에 맞춰 설계한다.'
    creative: '(1) Σ1/(αₙ²+βₙ²) 처럼 다른 대칭식으로 바꾸면 인수분해가 깨져 수렴 판정형이 되어 ★3 (2) 두 근이 실수일 조건을 함께 묻게 하면 ★3 · I-VF (3) 계수에 미지 상수를 넣고 급수의 합으로 역추적하면 ★3 · I-BW.'
```

```yaml
- id: GN-CALC2-46-81
  page: 46
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    aₙ=n²+2n 일 때 급수 Σlog₄(1+1/aₙ) 의 합 구하기.
  category: "로그 진수 정리·인수분해 → 두 사슬 telescoping"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '진수 1+1/(n²+2n) 을 (n+1)²/{n(n+2)} 로 정리해 log 의 합을 한 칸 어긋난 두 사슬로 만들어야 접힘'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "로그를 포함한 급수의 합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    42-e2 와 같은 골조의 역수 배치다. 통분해 (n+1)²/{n(n+2)} 를 만든 뒤 log{(n+1)/n} − log{(n+2)/(n+1)} 로 나누면 접혀 log₄2 만 남는다. 변환 1개(EQV d1) · 밑이 4 라 마지막에 1/2 로 정리. STEP 1 ★2.
  mechanism_primary: '진수를 통분·인수분해해 (n+1)²/{n(n+2)} → 로그를 두 사슬로 분해 → 접힘 → 남는 항 log₄2'
  tier: star_2
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/46-81.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '로그의 밑(4 → 2·8)과 aₙ 의 이차식(n²+4n 등)을 바꿀 수 있다. 제약: 1+1/aₙ 이 완전제곱/이웃 곱 꼴로 정리돼야 접히고, 남는 항이 밑의 거듭제곱이어야 답이 유리수로 떨어진다.'
    creative: '(1) aₙ 을 n²+4n 으로 두면 어긋남이 두 칸이 되어 ★3 (2) 합의 값을 주고 밑을 역추적(★3 · I-BW) (3) 시작 항을 n=2 로 옮겨 남는 항을 다시 세게 하기(★2 유지).'
```

```yaml
- id: GN-CALC2-46-82
  page: 46
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    −1 + 1/3 − 1/3 + 1/5 − 1/5 + 1/7 − 1/7 + … 이 수렴함을 보이기.
  category: "홀수·짝수 부분합을 나눠 극한이 일치함을 확인"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '항이 짝지어 상쇄되지만 괄호가 없으므로 S(2n−1) 과 S(2n) 을 따로 구해 두 극한이 같음을 보여야 수렴 결론이 성립'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "항의 부호가 교대로 바뀌는 급수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    홀수 번째 부분합은 −1 에 1/(2n+1) 이 붙었다 떨어지고 짝수 번째는 −1 그대로여서 둘 다 −1 로 간다. 결론 자체는 쉽지만 「짝지어 상쇄되니 수렴」이라고 쓰면 안 되고 두 부분합을 나눠 써야 한다는 점이 채점 포인트. STEP 1 ★2.
  mechanism_primary: '항을 그대로 두고 S(2n−1), S(2n) 을 각각 계산 → 두 극한이 모두 −1 → 수렴'
  tier: star_2
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '풀이 참조 ($\displaystyle\lim_{n\to\infty} S_{2n-1}=\displaystyle\lim_{n\to\infty} S_{2n}=-1$이므로 수렴)'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/46-82.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '기본 수열 1/(2n−1) 을 1/n · 1/√n 등으로, 첫 항 −1 의 크기를 바꿀 수 있다. 제약: 수렴하려면 기본 수열의 극한이 0 이어야 하고, 극한이 0 이 아닌 값이면 두 부분합의 극한이 갈려 발산 문제가 된다.'
    creative: '(1) 기본 수열을 극한 0 이 아닌 것으로 바꿔 발산을 보이게 하면 ★2 유지 (2) 수렴하도록 하는 수열을 보기에서 고르게 하면 47-89 꼴 ★3 (3) 두 항씩 괄호로 묶은 급수와 비교시키면 43-e3 꼴 ★3.'
```

```yaml
- id: GN-CALC2-46-83
  page: 46
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    ㄱ~ㄹ 네 급수 중 수렴하는 것을 모두 고르기. 일반항이 각각 (n−2)/(2n+3), n²/{n(n+3)}, 1/{√(n+1)+√(n−1)}, n/(n+1) − (n+1)/(n+2).
  category: "일반항의 극한으로 1차 선별 → 극한 0 인 것은 부분합으로 재검증"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: 'ㄷ 은 일반항이 0 으로 가 1차 선별을 통과하지만, 유리화해 부분합을 만들면 발산한다는 재검증에서 기각된다(검증을 건너뛰면 틀린 답에 도달)'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "급수의 수렴·발산 판정(보기 고르기)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ㄱ·ㄴ 은 일반항의 극한이 각각 1/2, 1 이라 즉시 발산으로 걸러지지만, 남은 ㄷ·ㄹ 은 둘 다 일반항이 0 으로 가므로 여기서 멈추면 ㄷ 을 수렴으로 잘못 고른다. ㄷ 을 유리화해 접은 부분합이 무한대로 감을 확인하는 사후 기각이 이 문항의 본질(I-VF d2). STEP 1 ★2 에 +1 → ★3.
  mechanism_primary: '네 보기의 일반항 극한으로 발산 후보를 먼저 거른다 → 극한이 0 인 것만 부분합을 실제로 만들어 재검증 → 접혀서 유한한 것만 수렴'
  tier: star_3
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: 'ㄹ'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/46-83.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '각 보기의 계수와 근호 안의 차(√(n+1)+√(n−1) → √(n+2)+√n)를 바꿀 수 있다. 제약: 함정 보기는 반드시 일반항의 극한이 0 이면서 급수는 발산하는 것으로 유지해야 하고, 정답 보기는 접혀서 유한한 극한을 가져야 한다.'
    creative: '(1) 함정 보기를 두 개로 늘려 오답률을 조절(★3 유지) (2) 수렴하는 것의 개수만 묻는 5지선다로 바꾸기(★3) (3) 각 보기의 합까지 구하게 하면 계산 마찰만 늘어 질이 떨어짐(권하지 않음).'
```

```yaml
- id: GN-CALC2-47-84
  page: 47
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    두 급수가 모두 수렴하고 Σ(2aₙ+bₙ)=8, Σ(3aₙ+2bₙ)=26 일 때 Σ(aₙ−bₙ) 의 값 구하기.
  category: "급수의 선형 성질 → 두 미지 합에 대한 연립"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "급수의 성질(연립)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    Σaₙ=A, Σbₙ=B 로 두고 2A+B=8, 3A+2B=26 을 풀면 A=−10, B=28 이고 A−B 를 계산한다. 45-77 과 같은 절차형 골조이며 계수가 커져 계산만 조금 무겁다. STEP 1 ★2.
  mechanism_primary: '두 급수의 합을 A, B 로 치환 → 일차 연립 → A−B 계산'
  tier: star_2
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-38$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/47-84.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 조건식의 계수와 우변을 바꿀 수 있다. 제약: 계수행렬의 행렬식이 0 이 아니어야 하고, 해가 정수가 되도록 우변을 맞춘다. 구하는 식의 계수는 자유.'
    creative: '(1) 구하는 식을 Σaₙ 하나로 바꾸면 조건 하나만 써도 되는 함정이 생겨 ★2 유지 (2) 조건을 세 개 주되 하나가 나머지의 결합이 되게 해 「필요 없는 조건 고르기」로 바꾸면 ★4 · I-SC (3) 로그를 씌우면 48-92 꼴.'
```

### 연습문제 STEP 2

```yaml
- id: GN-CALC2-47-85
  page: 47
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    a₁=1, a₂=2, aₙ₊₂=aₙ₊₁+aₙ 인 수열에 대하여 Σaₙ/(aₙ₊₁aₙ₊₂) 의 값 구하기.
  category: "점화식으로 분자를 차로 치환 → 부분분수 → telescoping"
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '분자 aₙ 을 점화식으로 aₙ₊₂−aₙ₊₁ 로 바꿔 쓰면 일반항이 1/aₙ₊₁ − 1/aₙ₊₂ 라는 차 꼴이 되어 접힌다'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "점화식 수열의 부분분수 급수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    일반항을 구하려 들면 피보나치 꼴이라 막히고, 점화식을 분자 쪽으로 대입해 차 꼴을 만드는 것이 유일한 길이다. 접은 뒤 남는 1/a₂ 와 aₙ → ∞ 에서 오는 0 을 쓰면 끝. 동치 변환 depth 2 · STEP 2 출발점 ★3 유지.
  mechanism_primary: 'aₙ=aₙ₊₂−aₙ₊₁ 로 치환 → 일반항이 1/aₙ₊₁ − 1/aₙ₊₂ → 접힘 → 1/a₂ − lim 1/aₙ₊₂'
  tier: star_3
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/47-85.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '첫 두 항 a₁, a₂ 를 바꿀 수 있고 점화식을 aₙ₊₂=aₙ₊₁+2aₙ 처럼 계수를 넣어도 된다. 제약: 계수를 넣으면 분자 치환이 (aₙ₊₂−aₙ₊₁)/k 가 되어 답에 1/k 가 붙고, 수열이 무한대로 발산해야 남는 극한이 0 이 된다.'
    creative: '(1) 구하는 급수를 Σaₙ₊₁/(aₙaₙ₊₂) 로 바꾸면 치환이 한 겹 더 필요해 ★4 (2) 첫 두 항을 미지수로 두고 합으로 역추적(★4 · I-BW) (3) 수열이 발산함을 따로 증명하게 하면 ★4 · I-VF.'
```

```yaml
- id: GN-CALC2-47-86
  page: 47
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    공차 d 인 등차수열에서 a₃=16 이고 Σd/(aₙaₙ₊₁)=1/10 일 때 a₁₀ 의 값 구하기.
  category: "부분분수 telescoping → 첫째항 역추적 → 공차 결정"
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: 'd/(aₙaₙ₊₁)=1/aₙ−1/aₙ₊₁ 로 접으면 합이 1/a₁ 이 되므로, 주어진 합에서 첫째항을 거꾸로 결정한 뒤 a₃ 조건으로 공차를 얻음'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "등차수열의 부분분수 급수에서 미정계수 역추적"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    분자가 마침 공차 d 라서 부분분수 계수가 1 이 되고 합이 1/a₁ 하나로 줄어든다는 것이 열쇠다. a₁=10, a₃=16 에서 d=3 을 얻어 a₁₀ 을 계산하는 두 단계가 더 붙는다. 역추적 1개(d1)에 단계 수·추상도로 M_total 7 · STEP 2 ★3 유지.
  mechanism_primary: '분자 d 를 이용해 1/aₙ−1/aₙ₊₁ 로 분해 → 접혀 합이 1/a₁ → a₁ 역산 → a₃ 조건으로 d → a₁₀'
  tier: star_3
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$37$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/47-86.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'a₃ 의 값과 급수의 합 1/10 을 바꿀 수 있고, 묻는 항을 a₁₅ 등으로 옮겨도 된다. 제약: 합이 1/a₁ 이므로 합은 첫째항의 역수여야 하고, a₁ 과 a₃ 의 차가 2 의 배수여야 공차가 정수로 떨어진다. d>0 이어야 남는 극한이 0 이 된다.'
    creative: '(1) 분자를 d 가 아닌 1 로 두면 계수 1/d 가 살아나 미지수가 하나 더 생겨 ★4 (2) 조건을 a₃ 대신 Σ 두 개로 주면 연립이 되어 ★4 (3) d 의 부호를 미정으로 두고 수렴 조건까지 따지게 하면 ★4 · I-VF.'
```

```yaml
- id: GN-CALC2-47-87
  page: 47
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    6/(2²×4²) + 8/(3²×5²) + 10/(4²×6²) + … 의 합 구하기(분모가 두 칸 떨어진 두 수의 제곱의 곱).
  category: "분자를 제곱의 차로 보고 두 칸 어긋난 부분분수 → telescoping"
  M: {s: 3, k: 2, a: 1, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '분자 2n+4 가 (n+3)²−(n+1)² 의 절반임을 알아보고 일반항을 1/2{1/(n+1)² − 1/(n+3)²} 로 바꾸는 것이 유일한 접힘 경로'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "제곱 차를 이용한 부분분수 급수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    분모가 제곱의 곱이라 보통의 부분분수로는 쪼개지지 않고, 분자가 두 제곱의 차와 비례한다는 것을 보아야 한다. 어긋남이 두 칸이라 남는 항이 1/2² 과 1/3² 두 개다. 구조 발견 depth 2 · STEP 2 ★3.
  mechanism_primary: '일반항을 (2n+4)/{(n+1)²(n+3)²} 로 세운다 → 분자가 (n+3)²−(n+1)² 의 절반임을 이용해 차 꼴로 분해 → 두 칸 건너 접힘 → 남는 두 항'
  tier: star_3
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{13}{72}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/47-87.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '분모의 간격(2 → 3)과 시작 값을 바꿀 수 있다. 제약: 분자는 반드시 두 제곱의 차에 비례해야 하므로 간격 k 이면 분자를 k(2n+k+2c) 꼴로 맞춰야 하고, 그러면 계수가 1/(2k) 로 바뀐다.'
    creative: '(1) 분모를 세제곱의 곱으로 올리면 분해가 어려워져 질만 떨어짐(권하지 않음) (2) 분자를 상수로 두면 접히지 않아 수렴 판정형 ★3 (3) 합의 값을 주고 분모의 간격을 역추적하면 ★4 · I-BW.'
```

```yaml
- id: GN-CALC2-47-88
  page: 47
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    직선 nx+(n+2)y=1 과 x축·y축으로 둘러싸인 도형의 넓이를 aₙ 이라 할 때 Σaₙ 의 값 구하기.
  category: "절편으로 넓이 수열 세우기 → 부분분수 → telescoping"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '도형(직각삼각형) 조건을 두 절편의 곱의 절반이라는 대수식 aₙ=1/{2n(n+2)} 로 옮겨야 급수 계산으로 넘어감'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "도형의 넓이 수열의 급수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    x절편 1/n, y절편 1/(n+2) 를 읽어 넓이를 세우는 기하→대수 전환이 앞에 한 겹 붙고, 그 뒤는 두 칸 어긋난 부분분수 표준 절차다. 절편이 양수라 절댓값 처리는 필요 없지만 넓이에서 1/2 을 빠뜨리는 함정이 있다(Mₜ 1).
    [분류 이슈] 전환 뒤 골조는 41-70 과 같은 ★2 급이다. STEP 2 구역 신호로 ★3 을 유지하되 기록해 둔다.
  mechanism_primary: '직선의 두 절편 1/n, 1/(n+2) → 직각삼각형 넓이 aₙ=1/{2n(n+2)} → 부분분수 → 두 칸 건너 접힘 → 극한'
  tier: star_3
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{3}{8}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/47-88.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '직선의 계수 n, n+2 와 우변 1 을 바꿀 수 있다. 제약: 두 절편이 모두 양수여야 넓이 공식을 그대로 쓸 수 있고, 분모가 이웃하거나 두 칸 떨어진 두 일차식의 곱이어야 접힌다.'
    creative: '(1) 직선 대신 원·포물선으로 둘러싸인 넓이로 바꾸면 적분이 들어가 단원을 넘어감(I-XU · ★4) (2) 두 직선 사이의 넓이로 두면 절편 계산이 한 겹 늘어 ★4 (3) 넓이의 합이 주어질 때 계수를 역추적(★4 · I-BW).'
```

```yaml
- id: GN-CALC2-47-89
  page: 47
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    급수 a₁−a₂+a₂−a₃+a₃−a₄+… 가 수렴하도록 하는 수열을 ㄱ~ㄷ 에서 모두 고르기. 일반항이 각각 1/n, log{n/(3n+2)}, 1/{√(n+1)+√n}.
  category: "홀·짝 부분합 구조 파악 → 수렴 조건을 lim aₙ=0 으로 환원 → 보기 검증"
  M: {s: 3, k: 2, a: 3, t: 0}
  M_total: 8
  insights:
    - step: 1
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '홀수 번째 부분합은 a₁ 로 일정하고 짝수 번째는 a₁−aₙ₊₁ 이 되는 두 갈래를 모두 따져야 수렴 조건이 lim aₙ=0 으로 좁혀짐'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "항의 부호가 교대로 바뀌는 급수의 수렴 조건(보기)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    수열이 구체적으로 주어지지 않은 채 부분합의 구조부터 세워야 하므로 추상도가 높다(Mₐ 3). 구조를 세우면 수렴 ⟺ lim aₙ=0 으로 단순해지고, ㄴ 은 극한이 −log3 이라 탈락한다. 홀짝 갈래 판단 depth 2 · STEP 2 ★3.
  mechanism_primary: '홀수·짝수 부분합을 일반적으로 표현 → 수렴 조건을 lim aₙ=0 으로 환원 → 세 보기의 극한을 계산해 선별'
  tier: star_3
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: 'ㄱ, ㄷ'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/47-89.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '세 보기의 수열을 바꿀 수 있다. 제약: 정답 보기는 극한이 0, 오답 보기는 극한이 0 이 아닌 유한값이나 발산이어야 한다. 로그 보기는 진수의 극한이 1 이 아니어야 탈락 보기가 된다.'
    creative: '(1) 괄호로 묶은 급수와 비교해 결론이 달라지는 보기를 넣으면 ★4 (2) 「수렴할 때 그 합」까지 묻게 하면 a₁ 을 답으로 써야 해 ★4 (3) 수열에 미지 상수를 넣어 수렴하게 하는 상수의 범위를 묻는 형태(★4 · I-BW).'
```

```yaml
- id: GN-CALC2-48-90
  page: 48
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 STEP 2"
  summary: |
    급수 Σ{aₙ − 2ⁿ⁺¹/(2ⁿ+1)} 이 수렴할 때 lim (2ⁿaₙ + 5×2ⁿ⁺¹)/(2ⁿ+3) 의 값 구하기. 5지선다.
  category: "급수 수렴 → 일반항 극한 0 → aₙ 의 극한 → 지수 분수식 극한"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '수렴 조건에서 aₙ − 2ⁿ⁺¹/(2ⁿ+1) → 0 을 얻고 빼 준 식의 극한 2 를 되더해 aₙ → 2 를 확보'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "급수와 수열의 극한값 사이의 관계"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    44-75 와 같은 골조에 지수 처리가 한 겹 얹혔다. aₙ → 2 를 얻은 뒤 구하는 식의 분자·분모를 2ⁿ 으로 나누면 3/2ⁿ → 0 이 되어 aₙ+10 만 남는다. 극한 정보 추출 1개(d1) · STEP 2 출발점 ★3.
  mechanism_primary: '급수가 수렴 → 일반항 → 0 → aₙ → 2 → 구하는 식을 2ⁿ 으로 나눠 정리 → 대입'
  tier: star_3
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '④'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/48-90.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '빼 주는 지수식의 밑(2 → 3)과 구하는 식의 계수 5 를 바꿀 수 있다. 제약: 밑이 1 보다 커야 2ⁿ⁺¹/(2ⁿ+1) 의 극한이 밑의 값으로 유한하고, 분모의 상수항은 어떤 값이든 0 으로 사라진다.'
    creative: '(1) 밑을 1/2 로 두면 극한이 0 이 되어 판단이 뒤집히는 함정형 ★4 (2) 선택지를 없애고 서술형으로 바꾸면 ★3 유지 (3) 급수의 합 값까지 주고 Σ 와 lim 을 함께 쓰게 하면 ★4.'
```

```yaml
- id: GN-CALC2-48-91
  page: 48
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    급수 Σ(an²+6)/(n²+2n) 이 수렴할 때(a 는 상수) 이 급수의 합 구하기.
  category: "수렴의 필요조건으로 상수 결정 → 부분분수 → telescoping"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '합을 구하기 전에 「수렴한다」는 결과 조건에서 일반항의 극한 a 가 0 이어야 함을 역추적해 상수 a 를 먼저 확정해야 함'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "급수가 수렴할 조건으로 상수 정하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    a 를 모른 채 합을 구하려 하면 진행이 안 되고, 일반항의 극한이 a 이므로 수렴하려면 a=0 이라는 역추적이 먼저다. a=0 이면 일반항이 6/{n(n+2)} 이 되어 두 칸 건너 접힌다. 역추적 depth 2 · 필요조건만으로는 수렴을 보장하지 못한다는 점이 함정(Mₜ 1). STEP 2 ★3.
  mechanism_primary: '수렴 → 일반항의 극한 0 → a=0 확정 → 6/{n(n+2)} 의 부분분수 → 접힘 → 극한'
  tier: star_3
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{9}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/48-91.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '분자의 상수 6 과 분모의 이차식(n²+2n → n²+4n)을 바꿀 수 있다. 제약: a=0 을 대입한 뒤 분모가 이웃하거나 몇 칸 떨어진 두 일차식의 곱으로 인수분해돼야 접히고, 분자 상수는 접힘 계수와 곱해져 답이 된다.'
    creative: '(1) 분자에 일차항까지 넣어 두 상수를 동시에 결정하게 하면 ★4 (2) 수렴하도록 하는 a 의 값만 묻고 합은 빼면 ★2 (3) a 의 값에 따른 수렴·발산을 모두 분류시키면 ★4 · I-MI.'
```

```yaml
- id: GN-CALC2-48-92
  page: 48
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    Σlog aₙ, Σlog bₙ 이 모두 수렴하고 Σlog(aₙbₙ)=7, Σlog(aₙ²/bₙ)=2 일 때 Σlog(aₙ/bₙ) 의 값 구하기.
  category: "로그 법칙으로 분해 → 두 미지 급수의 연립"
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그 급수의 성질(연립)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    Σlog aₙ=A, Σlog bₙ=B 로 두면 로그 법칙으로 A+B=7, 2A−B=2 가 되고 구하는 값은 A−B 다. 로그 분해도 연립도 표준 절차라 통찰 없음이고 M_total 5 여서 STEP 2 출발점에서 −1 했다.
    [분류 이슈] 벤더 STEP 2(★3 출발)와 1단 차이. 골조는 45-77·47-84 와 같은 연립이라 ★2 로 라벨.
  mechanism_primary: '로그 법칙으로 log(aₙbₙ)=log aₙ+log bₙ 등으로 분해 → A, B 치환 후 일차 연립 → A−B'
  tier: star_2
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/48-92.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 조건의 지수 배치(aₙ²/bₙ → aₙ³bₙ)와 우변 7, 2 를 바꿀 수 있다. 제약: 두 조건이 A, B 에 대해 독립이어야 하고, 해가 정수로 떨어지게 우변을 맞춘다.'
    creative: '(1) 구하는 값을 Σlog(aₙbₙ²) 처럼 바꾸기(★2 유지) (2) 한 급수의 수렴을 빼고 판정형으로 바꾸면 ★4 · I-VF (3) 로그 대신 지수로 옮겨 곱의 극한으로 묻는 42-72 꼴(★2).'
```

### 연습문제 실력 UP

```yaml
- id: GN-CALC2-48-93
  page: 48
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    원 x²+y²=n 에 접하고 기울기가 √3 인 두 직선의 x절편 중 양수인 것을 aₙ 이라 할 때 급수 Σ{√(n+1)−√n}/(aₙaₙ₊₁) 의 합 구하기.
  category: "접선 조건으로 aₙ 세우기 → 근호 차를 역수 차로 변형 → telescoping"
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '원과 직선의 거리 조건에서 y절편 ±2√n 을 얻고 x절편의 양수인 값 aₙ=2√n/√3 이라는 수열식으로 기하 조건을 옮김'
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '{√(n+1)−√n}/(√n√(n+1)) 이 1/√n − 1/√(n+1) 과 같음을 보아 접히는 차 꼴로 바꿈'
  insight_count: 2
  depth_score: 4.00
  type_id: null
  type_hint: "원의 접선에서 얻은 수열의 급수"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    앞쪽은 기하(점과 직선의 거리)로 aₙ 을 세우는 전환, 뒤쪽은 분자의 근호 차를 곱으로 나눠 역수의 차로 바꾸는 변형이라 성격이 다른 두 통찰이 겹친다. 양수인 x절편만 고르는 부호 처리도 함정(Mₜ 1). 실력 UP 출발점 ★4, ★5 는 통찰 3개 이상 조건을 채우지 못해 유지.
  mechanism_primary: '기울기 √3 인 접선의 거리 조건 → y절편 ±2√n → 양수 x절편 aₙ=2√n/√3 → 일반항을 (3/4){1/√n − 1/√(n+1)} 로 변형 → 접힘 → 극한'
  tier: star_4
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$\dfrac{3}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/48-93.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '원의 반지름 제곱 n 의 계수와 접선의 기울기(√3 → 1·√2)를 바꿀 수 있다. 제약: aₙ 이 √n 의 상수배가 되어야 분자의 근호 차와 맞물려 접히고, 기울기를 바꾸면 최종 계수만 달라진다. 양수 절편 조건을 지우면 답이 두 개가 된다.'
    creative: '(1) x절편 대신 두 접선 사이의 거리·삼각형 넓이로 aₙ 을 정의하기(★4 유지) (2) 원을 포물선으로 바꾸면 접선 조건이 판별식으로 가 단계가 늘어 ★5 후보 (3) 분자를 √(n+2)−√n 으로 두면 어긋남이 두 칸이 되어 ★4~5.'
```

```yaml
- id: GN-CALC2-48-94
  page: 48
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    두 수열에 대한 세 명제 ㄱ~ㄷ 의 참·거짓 가리기. ㄱ Σaₙbₙ 수렴이면 aₙ 또는 bₙ 의 극한이 0 이다, ㄴ Σaₙ 과 Σ(aₙ−bₙ) 이 수렴하면 Σbₙ 도 수렴한다, ㄷ Σ(aₙ+bₙ) 과 Σ(aₙ−bₙ) 이 수렴하면 Σaₙ 도 수렴한다.
  category: "급수의 선형 성질로 참 증명 + 반례 구성으로 거짓 판정"
  M: {s: 3, k: 1, a: 3, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: 'ㄱ 을 깨려면 곱은 수렴하면서 두 수열의 극한은 어느 쪽도 0 이 아닌(진동하며 상쇄되는) 수열을 결론에서 거슬러 설계해야 함'
    - step: 2
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: 'ㄴ·ㄷ 은 주어진 두 수렴 급수를 빼거나 더해 구하는 급수를 그 선형결합으로 묶어 내면 수렴이 따라옴'
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "급수의 수렴 성질 참·거짓(보기)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    ㄴ·ㄷ 은 수렴하는 두 급수의 차·합이 다시 수렴한다는 성질을 방향만 바꿔 쓰면 끝나지만, ㄱ 은 「곱이 수렴한다」가 각 수열의 극한을 전혀 통제하지 못한다는 것을 반례로 보여야 한다. 반례 설계가 학생에게 가장 먼 단계라 BW depth 2. 실력 UP ★4, 통찰 2개로 ★5 조건(3개 이상)에는 못 미침.
  mechanism_primary: '참 후보는 급수의 선형 성질로 구하는 급수를 주어진 두 급수의 결합으로 표현 → 수렴 결론 / 거짓 후보는 곱만 수렴하고 각 수열은 극한이 0 이 아닌 반례 구성'
  tier: star_4
  insight_type: 통찰형
  target_cohort: 상위권
  answer: 'ㄴ, ㄷ'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/48-94.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '명제의 결합 계수(aₙ−bₙ → 2aₙ+3bₙ 등)를 바꿀 수 있다. 제약: 참인 명제는 구하는 급수가 주어진 두 급수의 일차결합으로 표현 가능해야 하고(계수행렬이 정칙), 거짓 명제는 반례가 존재하도록 결합이 불가능하게 둔다.'
    creative: '(1) 「Σaₙ 과 Σbₙ 이 모두 발산하면 Σ(aₙ+bₙ) 도 발산한다」 같은 발산 쪽 명제를 넣으면 반례가 더 쉬워 ★3 (2) 참인 명제의 증명을 서술형으로 요구하면 ★4 유지 (3) 일반항의 극한과 급수의 수렴을 섞은 명제를 추가해 I-VF 를 붙이면 ★5 후보.'
```

## 표본 판정 요약 (34문)

- ★ 분포: ★1 3 · ★2 18 · ★3 11 · ★4 2 · ★5 0
- 통찰형 23 · 절차형 11 · premium 0
- 통찰 유형 분포: I-EQV 11 · I-MI 4 · I-BW 4 · I-RT 3 · I-VF 1 · I-CON 1 (총 라벨 24개 · 2개 붙은 문항은 48-93 · 48-94)
- type_hint 상위: 「부분분수·telescoping 급수의 합」 계열 9(41-e1 · 41-69 · 41-70 · 46-80 · 47-85 · 47-86 · 47-87 · 47-88 · 48-93) · 「급수와 수열의 극한값 사이의 관계」 4(44-e4 · 44-74 · 44-75 · 48-90) · 「로그를 포함한 급수의 합」 4(42-e2 · 42-71 · 42-72 · 46-81) · 「항의 부호가 교대로 바뀌는 급수」 4(43-e3 · 43-73 · 46-82 · 47-89) · 「급수의 성질(선형결합·연립)」 5(40-68 · 45-e5 · 45-77 · 47-84 · 48-92)
- 그림: 0문(이 범위 전 문항 `figure: none`)
- 대상층: 하위권 3 · 중하위권 8 · 중위권 16 · 중상위권 5 · 상위권 2

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CALC2-40-66 | 개념 확인 구역이라 ★1 로 두었으나 ⑶ 은 유리화 뒤 접고도 발산을 판정해야 해 체감은 ★2 | ★1 / ★2 |
| GN-CALC2-45-e5 | 벤더 「필수」(★2 출발)이나 통찰 0 · M_total 4 로 v3.8 산식은 −1(★1). 라벨은 ★2 유지 | ★1 / ★2 |
| GN-CALC2-47-88 | STEP 2(★3)로 두었으나 기하→대수 전환 뒤 골조는 41-70 과 같은 ★2 급 | ★2 / ★3 |
| GN-CALC2-48-92 | STEP 2(★3 출발)이나 통찰 0 · M_total 5 로 −1 해 ★2 라벨. 45-77 · 47-84 와 동일 골조 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: ⑴ 「부분분수 telescoping」은 접힘의 어긋남 칸 수로 갈라야 한다 — 한 칸(41-e1 · 41-69), 두 칸(41-70 · 47-87 · 47-88 · 48-91), 점화식·근호 등 일반항을 먼저 만들어야 하는 것(46-80 · 47-85 · 48-93). 같은 이름으로 묶으면 base ★ 가 ★2~★4 로 벌어진다. ⑵ 「급수와 수열의 극한값 사이의 관계」는 빼 준 식이 유리식(44-75)이냐 지수식(48-90)이냐보다, 합의 값을 쓰는지(44-76) 수렴 사실만 쓰는지(44-e4 · 44-74)로 나누는 편이 실제 난도와 맞다.
- **통합해도 될 유형**: 「급수의 성질」 계열 5문(40-68 · 45-e5 · 45-77 · 47-84 · 48-92)은 미지 급수 1개짜리와 연립 2개짜리 둘로만 나누면 충분하고, 로그를 씌운 48-92 는 별도 유형이 아니라 연립의 표기 변형이다.
- **교대급수(43-e3 · 43-73 · 46-82 · 47-89)**: 괄호 유무가 결론을 바꾸는지가 유일한 변별축이다. 카탈로그에서는 「괄호 없는 교대급수의 홀·짝 부분합」 하나로 두고 괄호 비교가 있는 문항만 base ★ 를 한 단 올리는 방식이 맞다.
- **미배치**: 46-83 · 48-94 는 판정·참거짓형이라 위 계산 유형과 성격이 달라 「급수의 수렴 판정·명제」 유형을 따로 세워야 한다(I-VF · I-BW 가 붙는 자리).
