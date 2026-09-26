---
name: mechanism-데이터-GN-CALC2-07
description: 개념원리 미적분Ⅱ 07 등비급수의 활용(1/1 · 56~63쪽 28문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 미적분Ⅱ (22개정) · 전사본 latex-bank/gn-calc2
  section: 07 등비급수의 활용
  unit_code: CALC2-07
  part: "1/1"
  extract_range: "56~63쪽 · 56-e9~63-128"
  total_problems: 28
  unit_total: 28
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·예제 태그·연습문제 STEP)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-calc2/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-calc2/items/<id>.tex
  image_source: latex-bank/gn-calc2/figures/ (crops.json · 이 범위 그림 문항 9개)
---

# 개념원리 미적분Ⅱ · 07 등비급수의 활용 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 미적분Ⅱ **07 등비급수의 활용** 단원 전체(56~63쪽 · 필수 예제 e9~e13 + 통번호 106~128 · 총 28문항)를 다룬다. 구역은 네 개다 — 상자 발문만 전사된 「필수·발전 예제」(`쪽-eN` · tag 「필수」)와 그 뒤를 따르는 tag 「확인체크」 확인문제, 그리고 「연습문제 STEP 1」·「연습문제 STEP 2」·「연습문제 실력 UP」이다. 개념원리 고등은 구역과 예제 태그가 난이도 층이므로 「필수」 예제와 그 확인체크는 ★2, STEP 1 은 ★2, STEP 2 는 ★3, 실력 UP 은 ★4 를 출발점으로 잡고 M_total·통찰로 ±1 조정했다. 이 범위에는 그림 문항이 9개 있다.

단원 내용은 앞 단원의 등비급수 합 공식 `a/(1-r)` 하나를 **밖에서 끌어온 상황**에 붙이는 것이다. 문항의 차이는 (ㄱ) 순환소수의 자릿수·주기를 급수로 옮기는 갈래, (ㄴ) 반복 도형에서 **공비를 뽑아내는** 갈래(성분 분해 · 수선의 발 연쇄 · 닮음비의 제곱), (ㄷ) 실생활 반복 과정에서 **첫째항을 어디로 잡는가**의 갈래, (ㄹ) 연습문제의 대수 갈래(합이 주어졌을 때 `a`·`r` 역결정 · 제곱급수의 공비 `r²` · 수렴 조건 부등식 · 보기 판정)다. 판정 기준을 하나 고정했다 — **「반복 도형 → 공비 발견 → 등비급수」라는 흐름 자체는 이 단원의 표준 절차로 보고 통찰로 세지 않고**, 공비를 얻기까지 성분 분해·삼각비 연쇄·닮음비 제곱 같은 별도 착안이 필요할 때만 I-RT 로 센다. 이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`·`insights[]`·`variation_notes` 를 채웠다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-CALC2-56-e9
  page: 56
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑵ 두 순환소수(0.51 순환 · 0.6 뒤 28 순환)를 등비급수를 이용해 분수로 나타내기.
  category: "순환마디 읽기 → 첫째항·공비 등비급수 → a/(1-r)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "순환소수를 등비급수로 분수화"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    순환마디 길이가 공비의 지수를 정한다 — ⑴ 은 51/100 · 공비 1/100, ⑵ 는 비순환 자리 0.6 을 떼고 28/1000 · 공비 1/100 로 놓는다.
    이 단원이 가르치는 표준 절차 그대로라 통찰로 세지 않는다. 필수 예제 출발점 ★2 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "순환마디 → 첫째항·공비 결정 → a/(1-r) → 비순환 부분을 따로 더하기"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{17}{33}$ ⑵ $\dfrac{311}{495}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/56-e9.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "순환마디의 자릿수(1~3)와 비순환 자리의 개수를 바꿀 수 있음. 제약 — 공비는 항상 1/10^(순환마디 길이)이고, 첫째항은 순환마디가 처음 등장하는 자리에 맞춰야 한다. 답이 기약분수로 떨어지는지 확인."
    creative: "(1) 분수를 주고 순환마디를 묻는 역방향(★2) (2) 두 순환소수의 합·차를 분수로(★2, 계산만 증가) (3) 2진법·5진법 순환소수로 옮기면 공비가 1/2^k 가 되어 표현 전환이 생기고 ★3 (4) 순환마디가 미지수인 형태(0.a b 순환 = 분수)로 주면 역결정이 되어 ★3."
```

```yaml
- id: GN-CALC2-56-106
  page: 56
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑶ 세 순환소수(0.14 순환 · 1.2 뒤 3 순환 · 1.3 뒤 21 순환)를 등비급수를 이용해 분수로 나타내기.
  category: "순환마디 읽기 → 첫째항·공비 등비급수 → a/(1-r)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "순환소수를 등비급수로 분수화"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e9 와 같은 절차를 세 번 반복한다. ⑵⑶ 은 정수부와 비순환 자리를 먼저 떼고 남은 순환 부분만 급수로 놓는 곳이 실수 지점이다.
    통찰 없음 · M_total 6 → 확인체크 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "정수부·비순환 자리 분리 → 순환 부분을 등비급수로 → a/(1-r) → 다시 더하기"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{14}{99}$ ⑵ $\dfrac{37}{30}$ ⑶ $\dfrac{218}{165}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/56-106.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정수부·비순환 자리·순환마디를 각각 바꿀 수 있음. 제약 — 세 소문항이 (순환만) → (비순환 1자리) → (비순환 1자리 + 2자리 순환)처럼 난이도 계단을 이루게 배치."
    creative: "(1) 세 값을 크기 비교하게 하면 분수화 뒤 한 단계 추가(★2) (2) 순환소수끼리의 곱을 묻기(★3, 계산 부담) (3) 순환마디 길이가 서로 다른 두 수의 합이 유한소수가 되는 조건(★3, I-BW)."
```

```yaml
- id: GN-CALC2-56-107
  page: 56
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    각 항이 실수이고 첫째항이 0.4 순환, 제4항이 0.05 순환인 등비급수의 합.
  category: "순환소수 → 분수 → 제4항으로 r³ → 실근 r → a/(1-r)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "순환소수로 주어진 첫째항·특정 항에서 등비급수의 합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 순환소수를 먼저 분수 4/9 · 1/18 로 바꾼 뒤 a r³ = 제4항 에서 r³ 을 얻고, 「각 항이 실수」 단서로 실근 하나만 취한다.
    순환소수 변환과 등비수열 일반항을 이어 붙인 표준 결합이라 통찰로 세지 않는다. 확인체크 출발점 ★2 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "두 순환소수를 분수로 → a r³ = 제4항 으로 r³ → 실근 r → a/(1-r)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{8}{9}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/56-107.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫째항의 순환소수와 몇 번째 항을 줄지(제3·제4·제5항)를 바꿀 수 있음. 제약 — r 이 유리수로 떨어지려면 (제n항)/(첫째항)이 완전 (n-1)제곱이어야 하고, 수렴하도록 |r|<1 이어야 한다."
    creative: "(1) 제4항 대신 처음 두 항의 합을 주면 이차방정식이 되어 근 거르기가 생기고 ★3 (2) 「각 항이 실수」를 빼고 공비가 음수일 경우까지 따지게 하면 I-MI 추가 ★3 (3) 합을 주고 제4항을 묻는 역방향(★3, I-BW)."
```

```yaml
- id: GN-CALC2-56-108
  page: 56
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    4/33 을 소수로 나타낼 때 소수점 아래 n째 자리의 숫자를 aₙ 이라 할 때, 급수 Σ aₙ/3ⁿ 의 합.
  category: "소수 전개 → 자릿수의 주기 2 발견 → 홀·짝 두 등비급수로 분해 → 합"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-PD
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "4/33 = 0.1212… 로 펼쳐 aₙ 이 1, 2 를 주기 2 로 반복함을 발견하고 홀수항·짝수항 두 등비급수(공비 1/9)로 가르기"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "순환소수의 자릿수 수열로 만든 급수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    aₙ 자체는 등비수열이 아니므로 공식을 바로 못 쓴다. 분수를 소수로 펼쳐 주기 2 를 읽고 1/3+2/3²+1/3³+⋯ 을 홀·짝으로 가르면 둘 다 공비 1/9 인 등비급수가 된다(I-PD d2).
    가른 뒤 각 급수의 첫째항(1/3 과 2/9)을 다시 읽는 곳이 실수 지점이다. 확인체크 출발점 ★2 지만 주기 발견 + 분해 두 겹이 얹혀 +1 → ★3.
  tier: star_3
  mechanism_primary: "4/33 을 소수 전개 → 자릿수 주기 2 → 홀·짝 두 등비급수(공비 1/9)로 분리 → 두 합을 더하기"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{5}{8}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/56-108.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분수(4/33 → 5/33 · 7/99 등)와 급수의 밑(3ⁿ → 2ⁿ · 5ⁿ)을 바꿀 수 있음. 제약 — 순환마디 길이가 분리할 갈래 수를 정하므로 분모는 99·999 꼴 약수로 두고, 밑의 (마디 길이)제곱이 공비가 되어 |공비|<1 이어야 한다."
    creative: "(1) 순환마디를 3자리로 하면 세 갈래 분리 ★4 (2) aₙ 을 「n째 자리까지의 숫자의 합」으로 바꾸면 계단형 수열이 되어 ★4 (3) 급수의 밑을 미지수 x 로 두고 합이 주어진 값이 되게 하는 x(역방향 + 수렴 조건) ★4."
```

```yaml
- id: GN-CALC2-57-e10
  page: 57
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    길이가 1, 1/2, 1/4, … 로 줄며 30°·60° 각 조건으로 지그재그로 꺾이는 점열 Pₙ 이 한없이 가까워지는 점의 좌표 (x, y) 에서 x+y 의 값.
  category: "선분열의 방향 읽기 → x·y 성분별 등비급수 → 극한점 좌표"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "꺾인 선분열을 좌표 성분으로 번역해 방향이 30°·150° 로 번갈아 나옴을 읽고, x 성분·y 성분을 각각 홀수항·짝수항의 등비급수(공비 1/4)로 분해"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "등비급수의 활용 — 꺾인 점열의 극한점 좌표"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    극한점은 선분 벡터를 전부 더한 곳이다. 각 조건에서 선분의 방향이 30°, 150° 두 가지로 번갈아 나온다는 것을 먼저 읽어야 성분이 정리된다(I-RT d2).
    그다음은 홀수번째 선분과 짝수번째 선분이 각각 공비 1/4 인 등비급수라는 표준 계산이다. 필수 예제 출발점 ★2 · 성분 분해 통찰 d2 → +1 → ★3.
  tier: star_3
  mechanism_primary: "각 조건 → 선분 방향 30°·150° 교대 → x·y 성분을 홀·짝 등비급수(공비 1/4)로 합산 → 극한점 → x+y"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{\sqrt{3}}{3}+1$'
  answer_source: "본문 풀이"
  figure: crop:fig-57-e10.png
  latex: latex-bank/gn-calc2/items/57-e10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫 선분의 길이·길이비(1/2 → 1/3)와 시작각(30° → 45°·60°)을 바꿀 수 있음. 제약 — 길이비는 |r|<1, 꺾이는 각은 방향이 유한개로 순환하도록 60°의 약수 배로 두고, 그림 라벨(O·A·P₁·P₂·P₃)과 표시된 각은 고정."
    creative: "(1) 극한점까지의 거리나 선분열 전체 길이를 묻기(★2, 방향 불필요) (2) 꺾는 각을 90° 로 바꾸면 네 방향 순환이라 쉬워져 ★2 (3) 극한점이 특정 직선 위에 오도록 하는 길이비를 묻는 역방향 ★4 (4) 꺾는 각이 매번 반으로 줄면 등비가 깨져 이 단원 밖으로 나간다."
```

```yaml
- id: GN-CALC2-57-109
  page: 57
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    길이가 직전의 1/2 씩 줄며 매번 직각으로 꺾이는 점열 Pₙ 이 한없이 가까워지는 점의 좌표.
  category: "직각 꺾임 → 네 방향 순환 → x·y 성분별 등비급수 → 극한점"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "직각으로 꺾이므로 선분 방향이 네 방향을 순환함을 읽고, x 성분·y 성분을 각각 공비 -1/4 인 등비급수로 번역"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "등비급수의 활용 — 꺾인 점열의 극한점 좌표"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e10 과 같은 골조인데 꺾는 각이 90° 라 성분이 x → y → -x → -y 로 깔끔하게 순환한다. 한 방향씩 모으면 공비가 -1/4 인 등비급수 둘이다(I-RT d1).
    부호 교대를 빠뜨리는 것이 실수 지점이다. 확인체크 출발점 ★2 · 통찰 1개 depth 1 → ★2 유지.
  tier: star_2
  mechanism_primary: "직각 꺾임 → 방향 4개 순환 → x 성분·y 성분 각각 공비 -1/4 등비급수 → 극한점 좌표"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\left(\dfrac{4}{5},\,\dfrac{2}{5}\right)$'
  answer_source: "답지"
  figure: crop:fig-57-109.png
  latex: latex-bank/gn-calc2/items/57-109.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫 선분 길이와 길이비(1/2 → 1/3·2/3)를 바꿀 수 있음. 제약 — 길이비 r 에 대해 성분 급수의 공비가 -r² 이므로 |r|<1 이면 항상 수렴하고, 답이 유리수 좌표로 떨어지려면 r 은 유리수. 그림의 직각 표시와 O 는 고정."
    creative: "(1) 극한점과 원점 사이의 거리를 묻기(★2) (2) 꺾는 방향을 시계·반시계 교대로 섞으면 방향 순환이 깨져 ★4 (3) 극한점의 x좌표와 y좌표의 비가 주어진 값이 되게 하는 길이비 ★3 (4) 3차원으로 올려 세 축 순환(★4)."
```

```yaml
- id: GN-CALC2-58-e11
  page: 58
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ∠XOY=30°, OP=2 인 각의 두 변에 번갈아 수선의 발을 한없이 내릴 때, 수선 길이의 합 PP₁+P₁P₂+P₂P₃+⋯.
  category: "직각삼각형 연쇄 → 공비 cos30° 추출 → a/(1-r)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "수선의 발 연쇄를 닮은 직각삼각형의 사슬로 보고 빗변이 매번 cos30° 배가 됨을 읽어 수선 길이를 공비 cos30° 인 등비수열로 번역"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "등비급수의 활용 — 수선의 발 연쇄에서 길이의 합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    한 단계마다 수선 길이는 (직전 빗변)×sin30°, 새 빗변은 (직전 빗변)×cos30° 다. 빗변이 공비 cos30° 로 줄므로 수선 길이도 같은 공비의 등비수열이 된다(I-RT d1).
    첫째항이 PP₁ = 2 sin30° = 1 임을 놓치지 않는 것이 실수 지점이고, 마지막에 유리화가 필요하다. 필수 예제 출발점 ★2 · 통찰 1개 depth 1 → ★2 유지.
  tier: star_2
  mechanism_primary: "직각삼각형 사슬 → 빗변·수선 모두 공비 cos30° → 첫째항 2sin30° → a/(1-cos30°)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2(2+\sqrt{3})$'
  answer_source: "본문 풀이"
  figure: crop:fig-58-e11.png
  latex: latex-bank/gn-calc2/items/58-e11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각(30° → 45°·60°)과 OP 의 길이를 바꿀 수 있음. 제약 — 공비가 cos(각)이므로 각이 0°보다 크고 90°보다 작아야 수렴하고, 45°·60° 는 답이 유리화로 정리된다. 그림의 수선 표시와 P₁·P₂·P₃ 라벨은 고정."
    creative: "(1) 수선 길이 대신 밑변 OP₁+P₁P₂… 나 직각삼각형 넓이의 합을 묻기(넓이는 공비가 cos²로 바뀜 ★3) (2) 합이 주어진 값이 되게 하는 각을 묻는 역방향 ★4 (3) 두 변의 각이 서로 다른 일반 각이면 공비가 두 개 섞여 ★4."
```

```yaml
- id: GN-CALC2-58-110
  page: 58
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    둘레가 4 인 삼각형에서 각 변의 중점을 이어 만든 삼각형을 한없이 반복할 때, 모든 삼각형의 둘레의 길이의 합.
  category: "중점연결 → 둘레가 1/2 배 → a/(1-r)"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비급수의 활용 — 반복 도형의 둘레의 합"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    중점연결정리로 새 삼각형의 각 변이 절반이므로 둘레도 절반이다. 공비 1/2 · 첫째항 4 를 공식에 넣는 한 줄 계산.
    확인체크 출발점 ★2 지만 통찰 없음 · M_total 3 → -1 → ★1. 이 범위에서 가장 가벼운 문항이다.
  tier: star_1
  mechanism_primary: "중점연결정리 → 둘레 공비 1/2 → 4/(1-1/2)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$8$'
  answer_source: "답지"
  figure: crop:fig-58-110.png
  latex: latex-bank/gn-calc2/items/58-110.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫 삼각형의 둘레(4 → 6·12)만 바꾸면 됨. 제약 — 중점 삼각형이면 공비는 항상 1/2 로 고정이라 숫자 변형의 자유도가 낮다. 그림의 A₁·A₂·A₃ 라벨 고정."
    creative: "(1) 둘레 대신 넓이의 합을 묻기(공비 1/4, ★2) (2) 각 변의 삼등분점을 이으면 공비가 1/3 이 아니라 닮음비 계산이 필요해 ★3 (3) 정삼각형에서 가운데 삼각형을 빼는 시에르핀스키형으로 바꿔 색칠 넓이의 합(공비 3/4) ★3."
```

```yaml
- id: GN-CALC2-59-e12
  page: 59
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    반지름 1 인 원에 내접하는 정삼각형 → 그 내접원에 내접하는 정삼각형 → … 을 한없이 반복할 때, 정삼각형 Aₙ 의 넓이 aₙ 에 대한 Σ aₙ.
  category: "정삼각형의 외접원·내접원 반지름비 2:1 → 닮음비 1/2 → 넓이 공비 1/4 → a/(1-r)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비급수의 활용 — 반복 도형의 넓이의 합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    정삼각형의 내접원 반지름은 외접원 반지름의 1/2 이므로 다음 정삼각형은 닮음비 1/2, 넓이비 1/4 이다. 첫 정삼각형의 넓이만 구하면 나머지는 공식 한 줄.
    반지름비와 넓이비 제곱은 기하 표준 공식이라 통찰로 세지 않는다. 필수 예제 출발점 ★2 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "외접원 반지름 1 → 정삼각형 넓이 → 내접원 반지름 1/2 → 넓이 공비 1/4 → a/(1-1/4)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\sqrt{3}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/59-e12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫 원의 반지름(1 → 2·3)만 바꾸면 되고 넓이는 반지름의 제곱에 비례해 답도 제곱배가 됨. 제약 — 정삼각형이면 반지름비 2:1 이 고정이므로 공비 1/4 는 변하지 않는다."
    creative: "(1) 정삼각형 대신 정사각형·정육각형으로 바꾸면 반지름비가 각각 1/√2·√3/2 로 바뀌어 공비 계산이 한 단계 늘고 ★3 (2) 정삼각형 넓이 대신 내접원 넓이의 합(★2) (3) 넓이의 합이 주어진 값이 되게 하는 처음 반지름 역방향(★3) (4) 정n각형 일반으로 두면 Mₐ 상승 ★4."
```

```yaml
- id: GN-CALC2-59-111
  page: 59
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    xₙ = (2/3)^(n-1) 일 때 y=x² 의 그래프에서 가로 (xₙ-xₙ₊₁) · 세로 f(xₙ) 인 직사각형의 넓이 Aₙ 에 대한 Σ Aₙ.
  category: "직사각형 넓이를 xₙ 의 세제곱으로 정리 → 공비 (2/3)³ → a/(1-r)"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "그래프 위 직사각형의 넓이를 (xₙ-xₙ₊₁)·xₙ² = (1/3)xₙ³ 로 대수화해 공비가 (2/3)³ = 8/27 인 등비수열임을 읽기"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "등비급수의 활용 — 그래프 위 직사각형 넓이의 합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    가로가 xₙ-xₙ₊₁ = (1/3)xₙ 이므로 넓이는 (1/3)xₙ³ 이고, xₙ 이 공비 2/3 이면 세제곱은 공비 8/27 이다(I-RT d1).
    세로가 f(xₙ₊₁) 이 아니라 f(xₙ) 임을 읽는 곳, 그리고 공비를 세제곱하는 곳이 실수 지점이다. 확인체크 출발점 ★2 · 통찰 1개 depth 1 → ★2 유지.
  tier: star_2
  mechanism_primary: "Aₙ = (xₙ-xₙ₊₁)·xₙ² = (1/3)xₙ³ → 공비 8/27 등비급수 → a/(1-8/27)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{9}{19}$'
  answer_source: "답지"
  figure: crop:fig-59-111.png
  latex: latex-bank/gn-calc2/items/59-111.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "xₙ 의 공비(2/3 → 1/2·3/4)와 함수의 차수(x² → x³)를 바꿀 수 있음. 제약 — 넓이의 공비는 (xₙ 공비)^(차수+1) 이므로 |공비|<1 이면 항상 수렴하고, 답이 기약분수로 떨어지는 조합을 고른다. 그림의 직사각형 배치와 xₙ 라벨 고정."
    creative: "(1) 세로를 f(xₙ₊₁) 로 바꾸면 아래합이 되어 공비가 달라짐(★2) (2) 위합과 아래합의 차를 묻기(★3) (3) 넓이의 합이 정적분값에 가까워지는지 비교하게 하면 단원 경계를 넘어 ★4 (4) 합이 주어진 값이 되게 하는 xₙ 의 공비를 묻는 역방향 ★3."
```

```yaml
- id: GN-CALC2-59-112
  page: 59
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    반지름 1 인 원 → 내접 정사각형 → 그 내접원 → … 을 한없이 반복할 때, (원 Cₙ 의 넓이) - (정사각형 Mₙ 의 넓이) 를 Sₙ 이라 할 때의 Σ Sₙ.
  category: "원-정사각형 교대 내접 → 반지름의 제곱이 1/2 배 → Sₙ 자체가 공비 1/2 → a/(1-r)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비급수의 활용 — 반복 도형의 넓이의 차의 합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    반지름 r 인 원에 내접하는 정사각형의 한 변은 √2 r, 그 내접원의 반지름은 r/√2 다. 반지름의 제곱이 매번 1/2 배이므로 원 넓이·정사각형 넓이·둘의 차가 모두 공비 1/2 이다.
    두 급수를 따로 구해 빼도 되고 Sₙ 을 한 덩어리로 봐도 된다 — 어느 쪽이든 표준 절차라 통찰로 세지 않는다. 확인체크 출발점 ★2 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "내접 정사각형 한 변 √2r → 다음 반지름 r/√2 → 반지름 제곱 공비 1/2 → Sₙ 첫째항 (π-2) → a/(1-1/2)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2(\pi-2)$'
  answer_source: "답지"
  figure: crop:fig-59-112.png
  latex: latex-bank/gn-calc2/items/59-112.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫 원의 반지름만 바꾸면 답이 제곱배가 됨. 제약 — 원과 정사각형의 교대 내접이면 공비 1/2 이 고정. 그림의 C₁·M₁·C₂ 라벨 고정."
    creative: "(1) 정사각형 대신 정삼각형·정육각형이면 공비가 1/4·3/4 로 바뀌어 ★3 (2) 원과 정사각형 사이 활꼴 넓이만 색칠해 합을 묻기(같은 공비 ★2) (3) 원에 외접하는 정사각형으로 바꾸면 도형이 커져 발산 여부를 따지게 되고 ★3."
```

```yaml
- id: GN-CALC2-60-e13
  page: 60
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    생산량의 75%가 수거되고 그중 80%가 재활용되는 과정을 10톤에서 반복할 때, 재활용되어 생산되는 알루미늄 캔의 총 무게.
  category: "두 비율의 곱으로 공비 → 첫째항을 재활용 1회분으로 → a/(1-r)"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비급수의 활용 — 실생활 반복 과정의 총량"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    한 번 돌 때마다 0.75 × 0.8 = 0.6 배가 되므로 공비는 0.6 이다. 묻는 것이 「재활용되어 생산되는」 총량이므로 첫째항은 처음 10톤이 아니라 6톤이다.
    M_total 5 로 가볍지만 첫째항을 어디서 잡느냐가 이 유형의 유일한 함정이라 -1 하지 않는다. 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "0.75×0.8 = 0.6 공비 → 첫째항 10×0.6 → a/(1-0.6)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$15$톤'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/60-e13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 비율(75%·80%)과 처음 생산량(10톤)을 바꿀 수 있음. 제약 — 두 비율의 곱이 1 보다 작아야 수렴하고, 답이 유한소수·분수로 떨어지도록 곱이 0.5·0.6·0.75 꼴이 되게 고른다."
    creative: "(1) 처음 10톤을 포함한 총 생산량을 묻기(첫째항이 10 으로 바뀜 ★2) (2) 재활용 단계가 세 비율의 곱이면 계산만 증가(★2) (3) 총량이 주어진 값 이하가 되게 하는 수거율을 묻는 역방향(★3, I-BW) (4) 매 회차 비율이 달라지면 등비가 깨져 단원 밖."
```

```yaml
- id: GN-CALC2-60-113
  page: 60
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    추가 30 cm 움직인 뒤 방향을 바꿔 앞 거리의 5/6 씩 움직이는 과정을 한없이 반복할 때, 추가 멈출 때까지 움직인 거리.
  category: "이동 거리 공비 5/6 → a/(1-r)"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비급수의 활용 — 실생활 반복 과정의 총 거리"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    30 → 25 에서 공비 5/6 을 확인하고 공식에 넣는 한 줄 계산이다. 방향이 바뀌어도 「움직인 거리」이므로 부호를 따로 챙길 필요가 없다.
    확인체크 출발점 ★2 지만 통찰 없음 · M_total 3 → -1 → ★1.
  tier: star_1
  mechanism_primary: "공비 5/6 · 첫째항 30 → 30/(1-5/6)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$180\,\mathrm{cm}$'
  answer_source: "답지"
  figure: crop:fig-60-113.png
  latex: latex-bank/gn-calc2/items/60-113.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫 거리(30)와 감쇠비(5/6)를 바꿀 수 있음. 제약 — 비는 1 보다 작아야 하고, 첫 거리가 분모 (1-비)로 나누어떨어지면 답이 정수. 그림의 추와 A 위치 고정."
    creative: "(1) 「움직인 거리」 대신 「처음 위치에서의 변위」를 묻으면 부호 교대가 생겨 공비가 -5/6 이 되고 ★3 (2) 왕복 횟수 n 회까지의 거리(부분합)로 바꾸면 급수가 아니라 등비수열 합 (3) 총 거리가 주어진 값이 되게 하는 감쇠비 역방향(★3)."
```

```yaml
- id: GN-CALC2-60-114
  page: 60
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    브레이크를 밟자마자 속력이 30% 감소하고 이후 매초 30%씩 감소할 때, 시속 108 km 로 달리던 자동차가 완전히 멈출 때까지 이동한 거리(m).
  category: "단위 환산 → 첫 1초 이동거리를 첫째항으로 → 공비 0.7 → a/(1-r)"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비급수의 활용 — 실생활 반복 과정의 총 거리"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    시속 108 km 를 초속 30 m 로 바꾸고(T-단위), 「밟자마자 30% 감소」이므로 첫 1초 동안의 이동거리는 30 이 아니라 21 이다(T-경계).
    그다음은 공비 0.7 인 등비급수 한 줄이다. 함정 두 개가 얹혀 M_total 7 이지만 통찰은 없다. 확인체크 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "108 km/h → 30 m/s → 밟은 직후 21 m/s → 첫째항 21 · 공비 0.7 → 21/(1-0.7)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$70\,\mathrm{m}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/60-114.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "처음 속력(108 km/h)과 감소율(30%)을 바꿀 수 있음. 제약 — km/h 값이 3.6 으로 나누어떨어져야 초속이 정수가 되고, 감소율은 0 초과 1 미만이며 (처음 속력)×(1-감소율)/감소율 이 정수가 되게 고른다."
    creative: "(1) 「밟자마자 감소」 문구를 빼면 첫째항이 30 이 되어 함정이 사라지고 ★1 (2) 멈출 때까지 걸리는 시간이 유한한지 묻는 개념 질문으로 바꾸면 ★3 (3) 감속 장치의 감소율이 주어진 제동거리를 만족하도록 하는 역방향(★3) (4) 매초가 아니라 매 0.5초면 단위 환산이 한 겹 늘어 ★3."
```

### 연습문제 STEP 1

```yaml
- id: GN-CALC2-61-115
  page: 61
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    급수 Σ(n=0 부터) (3^(n+1) - 15)(1/6)^n 의 합.
  category: "일반항 전개 → 공비 1/2·1/6 인 두 등비급수로 분리 → 각각 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비급수의 분리와 합 (n=0 시작)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    3^(n+1)(1/6)^n = 3·(1/2)^n 으로 정리하면 공비 1/2 인 급수와 공비 1/6 인 급수의 차가 된다.
    합의 시작이 n=1 이 아니라 n=0 이라 두 급수의 첫째항이 3 과 -15 인 것이 유일한 함정이다(T-경계). 통찰 없음 · STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "지수 정리로 3(1/2)^n - 15(1/6)^n → 공비 1/2·1/6 두 등비급수 → n=0 첫째항으로 a/(1-r) 두 번"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-12$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/61-115.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 3 과 6, 상수 15 를 바꿀 수 있음. 제약 — (앞 밑)/(뒤 밑) 의 절댓값이 1 보다 작아야 첫 급수가 수렴하고, 두 합의 차가 정수로 떨어지는 조합을 고른다."
    creative: "(1) 시작을 n=1 로 바꾸면 함정이 사라져 ★1~2 (2) 상수 15 를 미지수로 두고 합이 0 이 되게 하는 값을 묻는 역방향(★3, I-BW) (3) 세 항의 조합으로 늘리면 계산만 증가(★2) (4) 앞 밑을 미지수 x 로 두면 수렴 조건이 붙어 ★3."
```

```yaml
- id: GN-CALC2-61-116
  page: 61
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    4ⁿ+1 의 일의 자리의 숫자를 aₙ 이라 할 때 Σ aₙ/10ⁿ 의 값.
  category: "4ⁿ 의 일의 자리 주기 2 발견 → aₙ 이 두 값 교대 → 홀·짝 등비급수로 분해"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-PD
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "4ⁿ 의 일의 자리가 4, 6 을 주기 2 로 반복함을 발견해 aₙ 이 5, 7 교대임을 얻고 홀수항·짝수항 두 등비급수(공비 1/100)로 가르기"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "자릿수·주기 수열로 만든 급수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    거듭제곱의 일의 자리는 주기로 돈다 — 4ⁿ 은 4, 6 이 번갈아 나오므로 aₙ 은 5, 7 의 교대 수열이다(I-PD d2).
    aₙ 이 등비수열이 아니므로 공식을 바로 못 쓰고, 홀·짝으로 갈라 각각 공비 1/100 인 등비급수로 만든 뒤 더한다. STEP 1 출발점 ★2 · 주기 발견 + 분해 → +1 → ★3.
  tier: star_3
  mechanism_primary: "4ⁿ 일의 자리 주기 2 → aₙ = 5, 7 교대 → 홀·짝 두 등비급수(공비 1/100) → 합"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{19}{33}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/61-116.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(4 → 2·3·7·8)과 더하는 상수(1), 급수의 밑(10ⁿ)을 바꿀 수 있음. 제약 — 밑에 따라 일의 자리 주기가 1·2·4 로 달라지므로 주기 길이만큼 갈래가 늘고, 갈래마다 공비가 (1/10)^(주기)가 된다."
    creative: "(1) 밑을 3 이나 7 로 하면 주기 4 라 네 갈래 분리 ★4 (2) 일의 자리 대신 십의 자리로 바꾸면 주기 찾기가 훨씬 무거워져 ★4 (3) aₙ 을 「4ⁿ 을 7 로 나눈 나머지」로 바꾸면 같은 골조에 수 감각이 추가되어 ★3 (4) 급수의 밑을 미지수로 두고 합 조건을 주면 역방향 ★4."
```

```yaml
- id: GN-CALC2-61-117
  page: 61
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    첫째항이 1 인 두 등비수열에 대해 Σaₙ=2, Σbₙ=3 일 때 Σ(aₙ+bₙ)² 의 값.
  category: "합 조건에서 두 공비 역결정 → 전개 후 공비 r², rs, s² 인 세 등비급수"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "합이 주어진 두 등비급수의 곱·제곱 급수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    첫째항이 1 이므로 1/(1-r)=2, 1/(1-s)=3 에서 공비가 바로 나온다. (aₙ+bₙ)² 을 전개하면 공비가 각각 r², rs, s² 인 세 등비급수다.
    제곱하면 공비도 제곱, 곱하면 공비도 곱이라는 성질을 그대로 쓰는 표준 절차라 통찰로 세지 않는다. STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "1/(1-r)=2, 1/(1-s)=3 → r=1/2, s=2/3 → 전개해 공비 r²·rs·s² 세 등비급수 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{92}{15}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/61-117.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 합(2 와 3)을 바꿀 수 있음. 제약 — 합 S 에 대해 공비는 1-1/S 이므로 S 는 1/2 보다 커야 |r|<1 이고, r²·rs·s² 이 모두 1 보다 작아 세 급수가 수렴해야 한다."
    creative: "(1) Σ(aₙ-bₙ)² 로 바꾸면 부호만 달라짐(★2) (2) Σaₙbₙ 만 묻기(★2, 한 줄) (3) 첫째항을 1 이 아닌 미지수로 두면 연립이 되어 ★3 (4) Σ(aₙ+bₙ)² 값을 주고 두 합을 역으로 구하게 하면 대칭식 연립이 되어 ★4."
```

```yaml
- id: GN-CALC2-61-118
  page: 61
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    등비수열에서 전체 합이 8, 홀수번째 항만의 합이 6 일 때 제곱들의 급수 a₁²+a₂²+a₃²+⋯ 의 합.
  category: "홀수항 급수를 공비 r² 로 동치 변환 → 두 합의 비로 r → 제곱급수"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "홀수번째 항만 모은 급수를 첫째항 a₁ · 공비 r² 인 등비급수로 동치 변환하고, 전체 합과의 비 (1-r²)/(1-r) = 1+r 로 r 을 한 번에 얻기"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "합이 주어진 등비급수의 홀수항·제곱급수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    a₁·r 을 각각 구하려 연립하면 무거워진다. 두 합을 나누면 (1-r²)/(1-r) = 1+r = 8/6 로 r 이 한 줄에 나온다(I-EQV d2).
    그다음 제곱급수는 첫째항 a₁², 공비 r² 이라는 표준 계산이다. STEP 1 출발점 ★2 · 동치 변환 depth 2 → +1 → ★3.
  tier: star_3
  mechanism_primary: "홀수항 급수 = a₁/(1-r²) → 전체 합과 나눠 1+r → r 과 a₁ → a₁²/(1-r²)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$32$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/61-118.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 합(8 과 6)을 바꿀 수 있음. 제약 — 비가 1+r 이므로 (전체 합)/(홀수항 합)은 1 보다 크고 2 보다 작아야 하며(즉 0<r<1), 제곱급수가 유리수로 떨어지게 r 을 유리수로 고른다."
    creative: "(1) 홀수항 합 대신 짝수항 합을 주면 비가 r(1+r)/1 꼴로 한 단계 늘어 ★3 (2) 제곱급수 대신 Σaₙaₙ₊₁ 을 묻기(★3) (3) 공비가 음수가 되게 두 합을 잡으면 부호 함정이 추가되어 ★4 (4) 제곱급수의 합을 주고 전체 합을 역으로 구하게 하면 ★4."
```

```yaml
- id: GN-CALC2-61-119
  page: 61
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    Σ xⁿ(x-2)^(n-1) = 1/4 를 만족시키는 실수 x 의 값.
  category: "첫째항 x · 공비 x(x-2) 식별 → 합 방정식 → 이차방정식 → 수렴 조건으로 근 거르기"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "지수가 n 과 n-1 로 어긋난 일반항을 첫째항 x · 공비 x(x-2) 인 등비급수로 다시 읽기"
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "이차방정식의 두 근 중 공비의 절댓값이 1 이상이 되어 애초에 급수가 수렴하지 않는 근을 사후 검증으로 기각"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "공비가 미지수인 등비급수의 합 조건에서 x 결정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    지수가 n 과 n-1 로 어긋나 있어 첫째항을 x, 공비를 x(x-2) 로 읽는 것이 첫 관문이다(I-EQV d1).
    합 방정식에서 이차방정식의 두 근이 나오지만 수렴 조건 |x(x-2)|<1 을 통과하는 근만 답이다 — 검증을 건너뛰면 틀린 답에 도달한다(I-VF d2). STEP 1 출발점 ★2 · 통찰 2개 → +1 → ★3.
  tier: star_3
  mechanism_primary: "첫째항 x·공비 x(x-2) → x/(1-x(x-2)) = 1/4 → 이차방정식 → |공비|<1 로 근 기각"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-1+\sqrt{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/61-119.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "합 1/4 과 괄호 안의 상수 2 를 바꿀 수 있음. 제약 — 이차방정식이 실근을 갖도록 판별식을 확인하고, 두 근 중 하나만 수렴 조건을 통과해야 검증 단계가 살아 있다. 두 근 모두 통과하면 답이 둘이 된다."
    creative: "(1) 지수를 n, n 으로 맞추면 첫 관문이 사라져 ★2 (2) 합을 미지수 k 로 두고 해가 존재할 k 의 범위를 묻는 역방향 ★4 (3) 두 근이 모두 수렴 조건을 만족하는 상수를 고르면 답이 둘이 되어 I-MI 로 성격이 바뀜(★3) (4) 공비를 로그 식으로 바꾸면 ★4."
```

```yaml
- id: GN-CALC2-61-120
  page: 61
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    등비수열에 대한 보기 ㄱ~ㄷ(Σaₙ 수렴 → Σa₂ₙ 수렴 · Σaₙ 발산 → Σa₂ₙ 발산 · Σaₙ 수렴 → Σ(aₙ+1/2) 수렴) 중 옳은 것 모두 고르기.
  category: "보기마다 공비를 r² 로 다시 읽기 → 첫째항 0·|r|≥1 경우 분기 → 일반항 판정법"
  M: {s: 2, k: 1, a: 3, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "수렴·발산 조건이 첫째항 0 인 경우와 |r|<1 인 경우로 갈리므로 세 보기마다 두 경우를 모두 따져 참·거짓을 판정"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "등비급수의 수렴·발산 판정 (보기형)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    짝수번째 항만 모은 급수의 공비가 r² 이라는 점을 두 방향(수렴 → 수렴 · 발산 → 발산)으로 모두 적용해야 한다. 등비급수는 「첫째항 0 또는 |r|<1」이라 경우를 갈라 따지는 것이 판정의 핵심이다(I-MI d2).
    ㄷ 은 일반항이 1/2 로 가므로 0 으로 수렴하지 않아 발산 — 급수의 기본 성질로 끊는다. 구체적 수가 없고 일반 등비수열을 다루므로 Mₐ 3. STEP 1 출발점 ★2 · 경우 분기 depth 2 → +1 → ★3.
  tier: star_3
  mechanism_primary: "Σa₂ₙ 의 공비 = r² 확인 → 수렴·발산 조건을 첫째항 0 과 |r| 기준으로 분기 → ㄷ 은 일반항 판정으로 발산"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: 'ㄱ, ㄴ'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/61-120.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "보기의 첨자(a₂ₙ → a₃ₙ · a₂ₙ₋₁)와 ㄷ 에 더하는 상수(1/2)를 바꿀 수 있음. 제약 — 첨자를 kn 으로 하면 공비가 r^k 이므로 판정 결과(수렴 → 수렴, 발산 → 발산)는 그대로 유지된다. 상수는 0 이 아니어야 ㄷ 이 거짓이 된다."
    creative: "(1) 등비수열 조건을 빼고 일반 수열로 하면 ㄴ 이 거짓이 되어 난도가 크게 오름 ★4 (2) Σaₙ 과 Σ|aₙ| 의 관계를 보기로 넣으면 절대수렴 개념이 들어와 ★4 (3) 반례를 직접 제시하게 하는 서술형으로 바꾸면 ★4 (4) 보기를 두 개로 줄이면 ★2."
```

### 연습문제 STEP 2

```yaml
- id: GN-CALC2-62-121
  page: 62
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    부분합이 2ⁿSₙ = 3ⁿ - 2ⁿ 을 만족할 때 급수 Σ 1/a₂ₙ₋₁ 의 합.
  category: "Sₙ 정리 → aₙ = Sₙ - Sₙ₋₁ (n=1 별도) → 홀수항 역수의 공비 r⁻²"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "2ⁿSₙ 조건을 Sₙ = (3/2)ⁿ - 1 로 정리한 뒤 aₙ = Sₙ - Sₙ₋₁ 로 환원하고 n=1 이 같은 식을 따르는지 따로 확인"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "부분합 Sₙ 이 주어진 수열의 홀수항 급수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    조건이 aₙ 이 아니라 Sₙ 에 주어져 있으므로 먼저 Sₙ 을 깨끗한 꼴로 만들고 aₙ = Sₙ - Sₙ₋₁ 로 내려온다. n=1 을 따로 확인하는 곳이 이 유형의 고정 함정이다(I-EQV d2).
    aₙ 이 공비 3/2 인 등비수열이 되면 1/a₂ₙ₋₁ 은 공비 (2/3)² 인 등비수열이다. STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "Sₙ = (3/2)ⁿ - 1 → aₙ = Sₙ - Sₙ₋₁ (n=1 확인) → 1/a₂ₙ₋₁ 공비 4/9 → a/(1-r)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{18}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/62-121.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "조건식의 두 밑(3 과 2)을 바꿀 수 있음. 제약 — aₙ 의 공비가 (앞 밑)/(뒤 밑)이므로 역수 급수가 수렴하려면 앞 밑이 뒤 밑보다 커야 하고, n=1 이 일반식과 맞는지 매번 확인해야 한다."
    creative: "(1) 홀수항 대신 짝수항 1/a₂ₙ 로 바꾸면 첫째항만 달라짐(★3) (2) n=1 이 일반식과 어긋나게 상수를 고르면 검증이 살아나 ★4 (3) Σ1/aₙ 전체로 바꾸면 한 단계 줄어 ★2 (4) 조건을 Sₙ 대신 S₂ₙ 으로 주면 ★4."
```

```yaml
- id: GN-CALC2-62-122
  page: 62
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["평가원 기출"]
  category_type: "연습문제"
  summary: |
    공차가 양수인 등차수열과 등비수열이 a₁=b₁=1, a₂b₂=1 이고 Σ(1/(aₙaₙ₊₁) + bₙ) = 2 일 때 Σbₙ 의 값. 5지선다.
  category: "부분분수 망원급수 + 등비급수를 공차 d 하나의 방정식으로 통합"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "한 급수 안에 부분분수 분해로 망원 소거되는 등차 계열 항과 등비급수 항이 섞여 있어 두 도구를 각각 적용한 뒤 합쳐야 함"
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "a₂b₂=1 에서 얻은 공비 r = 1/(1+d) 와 급수 합 조건을 d 하나에 대한 방정식으로 통합"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "등차·등비 혼합 급수 (부분분수 망원 + 등비급수)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    1/(aₙaₙ₊₁) 은 공차로 나눈 부분분수로 갈라 망원 소거되고 남는 것은 1/(d·a₁) 뿐이다. bₙ 쪽은 등비급수 공식이다 — 성격이 다른 두 급수가 한 Σ 안에 있다(I-XU d2).
    a₂b₂=1 이 r 을 d 로 묶어 주므로 조건 두 개가 d 에 대한 방정식 하나로 합쳐진다(I-CON d2). STEP 2 출발점 ★3 · 통찰 2개 → +1 → ★4. 평가원 기출 태그도 같은 방향이다.
  tier: star_4
  mechanism_primary: "1/(aₙaₙ₊₁) 부분분수 → 망원 합 1/d · a₂b₂=1 에서 r=1/(1+d) → Σbₙ=(1+d)/d → 합 조건으로 d 결정 → Σbₙ"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '⑤'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/62-122.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫째항(1)과 급수의 합(2)을 바꿀 수 있음. 제약 — 공차가 양수여야 망원급수가 수렴하고, r = 1/(1+d) 이 |r|<1 을 만족하며 d 가 유리수로 떨어지는 합을 고른다. 선택지가 기약분수로 정리돼야 한다."
    creative: "(1) Σbₙ 대신 공차 d 를 묻기(★4 유지) (2) 두 조건 중 a₂b₂=1 을 빼고 b₂ 값을 직접 주면 통합 단계가 사라져 ★3 (3) 1/(aₙaₙ₊₂) 로 바꾸면 망원 잔여항이 두 개가 되어 ★4 (4) 공차가 음수일 수도 있게 두면 수렴 조건 검증이 추가되어 ★5 후보."
```

```yaml
- id: GN-CALC2-62-123
  page: 62
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    두 등비급수 Σ(x/3)ⁿ(x-2)ⁿ 과 Σ(log₃(x/3))ⁿ 이 모두 수렴하도록 하는 실수 x 의 값의 범위.
  category: "각 급수의 공비 식별 → |r|<1 부등식(이차·로그)으로 동치 변환 → 공통 범위"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「수렴한다」를 각각 |x(x-2)/3|<1 인 이차부등식과 |log₃(x/3)|<1 인 로그부등식으로 옮겨 x 의 범위로 바꾸기"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "두 등비급수가 모두 수렴할 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    수렴 조건을 부등식으로 옮기는 것이 전부다 — 첫 급수는 |x²-2x|<3, 둘째는 |log₃(x/3)|<1(진수 조건 x>0 포함)로 바뀐다(I-EQV d2).
    이차부등식 쪽은 한쪽이 항상 성립해 범위가 -1<x<3, 로그 쪽은 1<x<9 이고 공통부분을 취한다(단순 교집합이라 통찰로 세지 않음). STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "공비 x(x-2)/3 와 log₃(x/3) 식별 → |r|<1 을 이차·로그 부등식으로 → 두 범위의 공통부분"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$1<x<3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/62-123.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모 3, 괄호 안 상수 2, 로그의 밑을 바꿀 수 있음. 제약 — 이차부등식이 실수 범위를 만들도록 판별식을 확인하고, 두 범위의 공통부분이 공집합이 되지 않게 상수를 고른다."
    creative: "(1) 「모두 수렴」을 「적어도 하나 수렴」으로 바꾸면 합집합 + 경우 분기가 되어 ★4 (2) 첫째항이 0 이 되는 x 도 수렴으로 인정할지 따지게 하면 I-VF 가 붙어 ★4 (3) 범위 안의 정수 x 의 개수를 묻기(★3) (4) 로그 대신 삼각함수 공비로 바꾸면 주기 범위가 생겨 ★4."
```

```yaml
- id: GN-CALC2-62-124
  page: 62
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    Σrⁿ 이 수렴할 때 항상 수렴하는 급수를 보기 ㄱ~ㅂ(공비 r · r 과 r² 의 차 · 1/r · r/2-1 · r³ · rⁿ 과 (-r)ⁿ 의 평균) 중 모두 고르기.
  category: "보기마다 공비를 다시 식별 → -1<r<1 전체에서 성립하는지 판정 → 반례로 기각"
  M: {s: 3, k: 2, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "여섯 보기마다 공비가 r, r², 1/r, r/2-1, r³ 등으로 달라지므로 각각 다시 식별해 수렴 범위를 따로 판정"
    - step: 2
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "ㄷ·ㄹ 처럼 r 의 일부 값에서만 수렴하는 보기를 -1<r<1 전체에서 성립해야 한다는 조건으로 되돌려 반례로 기각"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "등비급수의 수렴·발산 판정 (보기형)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    보기 여섯 개가 각각 다른 공비를 숨기고 있어 하나씩 다시 읽어야 한다(I-MI d2). ㅂ 은 홀수항이 소거되어 공비 r² 인 급수로 바뀌는 것이 핵심이다.
    「항상 수렴」이므로 r 의 일부 값에서만 수렴하는 것은 기각해야 한다 — ㄹ 의 공비 r/2-1 은 r 이 -1 에 가까울 때 절댓값이 1 을 넘는다(I-VF d2). 보기 수가 많아 Mₛ 3 · 일반 r 이라 Mₐ 3. STEP 2 출발점 ★3 · 통찰 2개 → +1 → ★4.
  tier: star_4
  mechanism_primary: "보기별 공비 재식별 → -1<r<1 전체에서 |공비|<1 인지 판정 → 반례 있는 보기 기각"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: 'ㄱ, ㄴ, ㅁ, ㅂ'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/62-124.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "보기의 계수(3 · 1/2 · 지수 3)를 바꿀 수 있음. 제약 — ㄹ 형태는 (계수)·r + 상수 의 치역이 (-1, 1) 안에 완전히 들어가는지로 참·거짓이 갈리므로 계수와 상수를 함께 조정해야 의도한 답이 나온다."
    creative: "(1) 보기를 3개로 줄이면 ★3 (2) 「항상 수렴」을 「수렴할 수도 있다」로 바꾸면 판정 방향이 뒤집혀 반례 대신 예시를 찾게 되고 ★4 (3) r 의 범위를 0<r<1 로 좁히면 ㄹ 이 참이 되어 답이 바뀜(★3) (4) 각 보기의 합까지 구하게 하면 계산만 증가."
```

```yaml
- id: GN-CALC2-62-125
  page: 62
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    원점을 지나며 차례로 30°씩 이루는 직선들에 대해 A(1,0) 에서 이웃한 직선으로 수선의 발을 한없이 내릴 때, AA₁+A₁A₂+A₂A₃+⋯ 의 값.
  category: "수선의 발 연쇄 → 원점까지의 거리가 공비 cos30° → 수선 길이도 같은 공비"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "이웃한 직선으로 내린 수선의 연쇄를 닮은 직각삼각형 사슬로 보고 원점까지의 거리가 매번 cos30° 배가 됨을 읽어 수선 길이를 공비 cos30° 인 등비수열로 번역"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "등비급수의 활용 — 수선의 발 연쇄에서 길이의 합"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    직선들이 30°씩 벌어져 있으므로 각 단계는 직각삼각형 하나다 — 수선 길이는 (원점까지의 거리)×sin30°, 새 거리는 ×cos30° 다(I-RT d1).
    첫째항 sin30° = 1/2, 공비 cos30° 을 넣고 유리화한다. [분류 이슈] 골조는 58-e11(필수 예제 ★2)과 같은데 벤더 구역이 STEP 2 라 한 단 높다 — 벤더 배치를 존중해 ★3 으로 두고 기록만 한다.
  tier: star_3
  mechanism_primary: "이웃 직선까지의 수선 → 직각삼각형 사슬 → 첫째항 sin30° · 공비 cos30° → a/(1-cos30°)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2+\sqrt{3}$'
  answer_source: "답지"
  figure: crop:fig-62-125.png
  latex: latex-bank/gn-calc2/items/62-125.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선 사이의 각(30° → 45°·60°)과 OA 의 길이를 바꿀 수 있음. 제약 — 공비가 cos(각)이라 각이 0°보다 크고 90°보다 작아야 수렴하며, 각이 커질수록 합이 작아진다. 그림의 직선 배치와 A·A₁·A₂ 라벨 고정."
    creative: "(1) 수선의 발들이 한없이 가까워지는 점(원점)까지의 거리 대신 삼각형 넓이의 합을 묻기(공비 cos²) ★3 (2) 이웃 직선이 아니라 한 칸 건너 직선에 내리면 공비가 cos60° 로 바뀜(★3) (3) 합이 주어진 값이 되게 하는 각 역방향 ★4 (4) A 를 직선 위가 아닌 임의의 점으로 두면 첫 단계만 달라짐(★3)."
```

### 연습문제 실력 UP

```yaml
- id: GN-CALC2-63-126
  page: 63
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    첫째항이 1 인 두 등비급수가 수렴하고 Σ(aₙ+bₙ)=8/3, Σaₙbₙ=4/5 일 때 Σ(aₙ²+bₙ²) 의 값.
  category: "두 공비의 합·곱 대칭식으로 조건 통합 → 합이 0 인 대칭 이용 → 제곱급수"
  M: {s: 3, k: 3, a: 3, t: 1}
  M_total: 10
  insights:
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "Σ(aₙ+bₙ) 과 Σaₙbₙ 두 조건을 각각 통분·정리해 두 공비의 합 p+q 와 곱 pq 에 대한 대칭식 연립으로 통합"
    - step: 3
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "p+q=0 이라는 대칭이 나오면 p²=q² 이므로 두 제곱급수의 공비가 같아져 개별 공비를 구하지 않고 바로 합을 계산"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "두 등비급수의 합·곱 조건에서 제곱급수 (공비의 대칭식)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    공비를 p, q 로 두면 세 조건이 모두 p+q, pq 의 식이다 — Σaₙbₙ 의 공비가 pq 임을 먼저 읽어야 pq 가 바로 나온다(I-CON d2).
    남은 식을 정리하면 p+q=0 이라는 대칭이 나오고, 그 순간 p²=q²=1/4 이므로 제곱급수 두 개가 같은 값이 된다(I-SYM d2). 개별 공비를 구하려 들면 훨씬 무거워진다. 실력 UP 출발점 ★4 유지.
  tier: star_4
  mechanism_primary: "공비 p·q → Σaₙbₙ=1/(1-pq) 로 pq → Σ(aₙ+bₙ) 통분해 p+q=0 → 제곱급수 공비 p²=q² → 합"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$\dfrac{8}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/63-126.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 합(8/3 과 4/5)을 바꿀 수 있음. 제약 — pq 와 p+q 가 유리수로 떨어지고 |p|<1, |q|<1 을 만족해야 하며, pq 가 1 보다 작아야 곱 급수도 수렴한다. p+q=0 인 대칭을 유지하려면 두 값을 함께 조정해야 한다."
    creative: "(1) Σ(aₙ+bₙ) 대신 Σ(aₙ-bₙ) 을 주면 부호만 달라짐(★4) (2) 첫째항을 1 이 아닌 서로 다른 값으로 두면 대칭이 깨져 연립이 무거워지고 ★5 후보 (3) p+q=0 이 되지 않게 값을 잡으면 이차방정식을 풀어야 해 I-SYM 이 사라지고 ★4 유지·체감 상승 (4) Σaₙ³ 까지 묻기(★4)."
```

```yaml
- id: GN-CALC2-63-127
  page: 63
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    순환소수 수열 a₁=0.1 순환, a₂=0.10 순환, a₃=0.100 순환, … 에 대하여 Σ(1/aₙ₊₁ - 1/aₙ) 의 값.
  category: "순환소수의 일반항 발견 → 1/aₙ 정리 → 망원급수로 극한과 첫항의 차"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-PD
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "순환마디가 한 자리씩 길어지는 규칙에서 aₙ = 10^(n-1)/(10ⁿ-1) 이라는 일반항을 발견"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "1/aₙ = 10 - (1/10)^(n-1) 로 정리하면 주어진 급수가 망원급수임이 드러나 부분합이 1/aₙ₊₁ - 1/a₁ 로 남고 극한을 취하면 끝남"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "순환소수 수열로 만든 망원급수"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    첫 관문은 나열된 순환소수에서 순환마디 길이가 n 이라는 규칙을 읽어 일반항을 세우는 것이다(I-PD d2).
    1/aₙ 을 정리하면 10 에서 등비수열을 뺀 꼴이라 급수가 망원으로 접히고, 각 항을 등비급수로 따로 더해도 같은 값이 된다(I-EQV d2). 실력 UP 출발점 ★4 유지.
  tier: star_4
  mechanism_primary: "aₙ = 10^(n-1)/(10ⁿ-1) → 1/aₙ = 10 - (1/10)^(n-1) → 망원 부분합 → 극한 10 에서 1/a₁ 빼기"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/63-127.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "순환마디를 이루는 숫자(1 → 2·3)와 진법(10)을 바꿀 수 있음. 제약 — aₙ 의 분모가 (밑)ⁿ-1 꼴이 되도록 순환마디가 한 자리씩만 늘어나야 하고, 1/aₙ 이 상수에서 등비수열을 뺀 꼴로 정리돼야 망원이 살아난다."
    creative: "(1) Σ(1/aₙ₊₁ - 1/aₙ) 대신 Σ(aₙ₊₁ - aₙ) 을 묻으면 망원은 되지만 극한 계산이 달라짐(★3) (2) 순환마디가 두 자리씩 늘어나면 일반항 발견이 무거워져 ★5 후보 (3) Σ1/aₙ 자체를 묻으면 등비급수 + 상수항이라 발산 판정이 되고 ★4 (4) 부분합 Sₙ 의 일반식을 구하게 하는 서술형(★4)."
```

```yaml
- id: GN-CALC2-63-128
  page: 63
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: ["수능 기출"]
  category_type: "연습문제"
  summary: |
    반지름 1 · 중심각 π/2 인 부채꼴 안에 세로:가로 = 3:4 인 직사각형 OC₁P₁D₁ 을 잡고 P₁A₁ 을 빗변으로 하는 직각이등변삼각형을 색칠한 뒤, 반지름 OQ₁ 인 부채꼴로 같은 과정을 반복할 때 색칠된 넓이 Sₙ 의 극한. 5지선다.
  category: "직사각형 비로 P₁ 위치 결정 → 빗변으로 색칠 넓이 → 다음 반지름비의 제곱이 공비"
  M: {s: 3, k: 3, a: 2, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "OC₁:OD₁=3:4 와 OP₁=1 을 좌표·피타고라스로 번역해 P₁ 의 위치와 선분 P₁A₁ 의 길이를 확정"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "P₁Q₁=A₁Q₁ 과 ∠P₁Q₁A₁=π/2 두 조건을 「P₁A₁ 을 빗변으로 하는 직각이등변삼각형」 하나로 통합해 넓이를 빗변의 제곱으로 바로 쓰고, 다음 부채꼴 반지름 OQ₁ 로 닮음비를 확정"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "등비급수의 활용 — 반복 도형의 색칠 넓이의 합"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    도형 급수의 표준 골조(첫 넓이 + 닮음비의 제곱 = 공비)지만, 첫 넓이까지 가는 길이 길다 — 3:4 비와 반지름 1 로 P₁ 을 잡고, 두 조건을 직각이등변삼각형으로 묶어 넓이를 빗변의 제곱으로 쓴다(I-RT d2 · I-CON d2).
    다음 단계 부채꼴의 반지름이 OQ₁ 이므로 넓이 공비는 OQ₁ 의 제곱이다. 수능 기출이지만 도형 급수는 표준 노출 유형이라 실력 UP 출발점 ★4 유지(★5 로 올리지 않음).
  tier: star_4
  mechanism_primary: "3:4 직사각형 → P₁ 위치·P₁A₁ 길이 → 직각이등변삼각형 넓이(빗변²/4) → 닮음비 OQ₁ 의 제곱이 공비 → a/(1-r)"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '②'
  answer_source: "답지"
  figure: crop:fig-63-128.png
  latex: latex-bank/gn-calc2/items/63-128.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직사각형의 변 비(3:4 → 1:1·5:12)와 처음 반지름(1)을 바꿀 수 있음. 제약 — 비는 피타고라스 수 쌍으로 두어야 P₁ 좌표와 선분 길이가 유리수로 떨어지고, 닮음비 OQ₁ 이 1 보다 작아야 수렴한다. 중심각 π/2 와 그림 라벨(O·A₁·B₁·P₁·Q₁)은 고정."
    creative: "(1) 색칠 도형을 직각이등변삼각형 대신 정삼각형으로 바꾸면 넓이 계수만 달라짐(★4) (2) 색칠 부분을 부채꼴에서 삼각형을 뺀 영역으로 하면 첫 넓이가 무거워져 ★5 후보 (3) 다음 부채꼴 반지름을 OP₁ 이 아닌 다른 선분으로 잡아 공비를 새로 구하게 하면 ★5 후보 (4) Sₙ 의 일반항을 묻는 서술형(★4)."
```

## 표본 판정 요약 (28문)

- ★ 분포: ★1 2 · ★2 12 · ★3 9 · ★4 5 · ★5 0
- 통찰형 17 · 절차형 11 · premium 0
- 통찰 라벨 23개 — I-RT 6 · I-EQV 5 · I-PD 3 · I-CON 3 · I-MI 2 · I-VF 2 · I-XU 1 · I-SYM 1
- 대상층: 하위권 2 · 중하위권 9 · 중위권 7 · 중상위권 5 · 상위권 5
- type_hint 상위: 「순환소수·자릿수 수열 계열」 6(56-e9 · 56-106 · 56-107 · 56-108 · 61-116 · 63-127) · 「반복 도형의 길이·넓이」 5(58-110 · 59-e12 · 59-111 · 59-112 · 63-128) · 「실생활 반복 과정의 총량·총 거리」 3(60-e13 · 60-113 · 60-114) · 「합이 주어진 등비급수의 곱·제곱 급수」 3(61-117 · 61-118 · 63-126) · 「수선의 발 연쇄에서 길이의 합」 2(58-e11 · 62-125) · 「꺾인 점열의 극한점 좌표」 2(57-e10 · 57-109) · 「수렴·발산 판정 보기형」 2(61-120 · 62-124) · 「수렴 조건으로 미지수 결정」 2(61-119 · 62-123)
- 그림: 9문(`crop:fig-57-e10.png` · `crop:fig-57-109.png` · `crop:fig-58-e11.png` · `crop:fig-58-110.png` · `crop:fig-59-111.png` · `crop:fig-59-112.png` · `crop:fig-60-113.png` · `crop:fig-62-125.png` · `crop:fig-63-128.png`)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CALC2-56-108 | 벤더는 확인체크(★2 출발)지만 주기 발견 + 홀·짝 분해가 얹혀 판정은 ★3. 같은 골조의 61-116 은 STEP 1 에 배치돼 있어 벤더 층이 갈린다 | ★2 / ★3 |
| GN-CALC2-58-110 | 확인체크(★2 출발)인데 통찰 0 · M_total 3 으로 이 범위에서 가장 가볍다 → ★1 로 내림. 미적분Ⅱ 단원에 ★1 라벨이 생기는 것이 어색하면 ★2 로 되돌릴 것 | ★1 / ★2 |
| GN-CALC2-60-113 | 위와 같은 사유(공비 확인 후 공식 한 줄) → ★1. 60-114 는 같은 실생활 유형이지만 단위 환산·첫째항 함정으로 ★2 라 층이 갈린다 | ★1 / ★2 |
| GN-CALC2-62-125 | 골조가 58-e11(필수 예제 ★2)과 사실상 같은데 벤더 구역이 STEP 2 라 ★3. 벤더 배치를 존중해 ★3 으로 뒀으나 체감 난도는 ★2 | ★2 / ★3 |
| GN-CALC2-63-128 | 수능 기출 도형 급수. 통찰을 세 단계(좌표 번역 · 조건 통합 · 닮음비 확정)로 쪼개면 I-CON 포함 3개가 되어 ★5 요건에 닿지만, 도형 급수는 표준 노출 유형이라 통찰 2개 · ★4 로 둠 | ★4 / ★5 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위에서 반복된 type_hint 는 (ㄱ) 순환소수·자릿수 수열 계열, (ㄴ) 반복 도형의 길이·넓이, (ㄷ) 실생활 반복 과정, (ㄹ) 합이 주어진 등비급수의 곱·제곱, (ㅁ) 수렴 조건·보기 판정 다섯 갈래다.
- **따로 세워야 할 유형**: 「꺾인 점열의 극한점 좌표」(성분 분해가 필요해 다른 도형 급수와 골조가 다름) · 「수선의 발 연쇄에서 길이의 합」(공비가 삼각비로 나옴) · 「부분합 Sₙ 이 주어진 수열의 부분 급수」(aₙ = Sₙ - Sₙ₋₁ 과 n=1 검증이 고정 함정) · 「등차·등비 혼합 급수」(부분분수 망원 + 등비, 62-122 처럼 단원 경계를 넘음).
- **통합해도 될 유형**: 「반복 도형의 둘레·넓이·넓이의 차」는 모두 닮음비 k 에 대해 공비가 k 또는 k² 인 한 유형으로 묶을 수 있다(58-110 · 59-e12 · 59-112 · 63-128). 「순환소수를 분수화」와 「순환소수로 주어진 항에서 급수의 합」도 첫 단계가 같아 한 유형의 난이도 두 층으로 둘 수 있다(56-e9 · 56-106 · 56-107).
- **06 단원과의 경계**: 06 은 공비를 읽어 합·수렴을 판정하는 단원, 07 은 공비를 바깥 상황에서 만들어 내는 단원이다. 61-115 · 61-117 · 61-118 · 61-120 · 62-123 · 62-124 는 골조상 06 쪽에 가까운 대수 문항이므로 카탈로그에서는 06 유형으로 묶고 07 에서는 재사용 표시만 하는 편이 낫다.
