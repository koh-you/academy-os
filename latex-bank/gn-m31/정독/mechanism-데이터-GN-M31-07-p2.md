---
name: mechanism-데이터-GN-M31-07-p2
description: 개념원리 중학 3-1 07 곱셈 공식의 응용(2/2 · 중단원 마무리하기 STEP 1~3 · 서술형 대비) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 중학 3-1 · 전사본 latex-bank/gn-m31
  section: 07 곱셈 공식의 응용
  unit_code: GN-M31-07
  part: "2/2"
  extract_range: "76~81쪽 · 76-01~81-u6"
  total_problems: 33
  unit_total: 51
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-m31/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-m31/items/<id>.tex
  image_source: latex-bank/gn-m31/figures/ (crops.json)
---

# 개념원리 중학 3-1 · 07 곱셈 공식의 응용 (2/2) 정독 데이터 (v1.0)

이 파일은 07단원 76~81쪽, 중단원 마무리하기 STEP 1 기본 문제(12) · STEP 2 발전 문제(10) · STEP 3 실력 UP(3) · 서술형 대비 문제(8) 합계 33문항을 다룬다. 단원 앞부분(개념원리 확인하기 · 계산력 강화하기 · 핵심문제 익히기 · 이런 문제가 시험에 나온다)은 1/2 파일 담당이다.

개념원리 중학은 RPM 과 달리 문항별 난이도 표시(하·중·상)가 없고 **구역 자체가 난이도 층**이다. 그래서 ★ 출발점은 STEP 1 → ★2, STEP 2 → ★3, STEP 3 실력 UP → ★4, 서술형 대비 → ★3 으로 잡고, 거기서 M_total 과 통찰로 ±1 조정했다. 태그는 「꼭나와」(빈출 표시 · ★ 가산 없음)만 쓰인다. 서술형 대비 문제 중 예제·유제 일부는 배점만 붙었을 뿐 골조가 STEP 1 수준이라 −1 해 ★2 로 두고 rationale 에 근거를 남겼다.

이 파일의 주 용도는 **숫자 변형·창의 변형의 원본**이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(통찰 유형·depth) · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 설정 변형)를 채웠다.

## 문항 데이터

### 중단원 마무리하기 STEP 1 기본 문제

```yaml
- id: GN-M31-76-01
  page: 76
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리"
  summary: |
    $(a+2b-1)(3a-b)$ 를 전개한 식에서 $ab$ 의 계수와 $b$ 의 계수의 합. 5지선다.
  category: "세 항 × 두 항 분배 → 필요한 두 항의 계수만 추출 → 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "다항식의 곱셈 — 특정 항의 계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    전개식 전체를 쓸 필요 없이 ab 항(-ab, +6ab)과 b 항(+b)만 골라 더하면 끝나는 절차형.
    통찰 없음·M_total 6 → STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "ab 항과 b 항만 골라 분배 → 두 계수를 더한다"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/76-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 항 식의 계수(2b → 3b, -1 → -4)와 뒤 식의 계수(3a-b → 2a-5b)를 바꿀 수 있음. 제약: 묻는 두 계수의 합이 선택지 다섯 개를 연속 정수로 깔 수 있게 한 자리로 떨어질 것."
    creative: "(1) 묻는 대상을 'a²의 계수와 상수항의 곱'으로 교체(★2 유지) (2) 세 항 × 세 항으로 늘리면 추출해야 할 조합이 늘어 Mk 상승 ★3 (3) 한 계수를 미지수 k로 두고 두 계수의 합이 주어진 값이 되는 k를 묻기 → 역추적(I-BW) ★3."
```

```yaml
- id: GN-M31-76-02
  page: 76
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "중단원 마무리"
  summary: |
    $\left(4x-\dfrac{1}{2}\right)^2=Ax^2+Bx+C$ 일 때 상수 $A$, $B$, $C$ 에 대한 $ABC$ 의 값.
  category: "완전제곱식 전개 → 계수 대응 → 세 상수의 곱"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "완전제곱식 전개와 계수 대응 — 미지의 상수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (a-b)² 공식 한 번으로 16x²-4x+1/4 를 얻고 A·B·C 를 대응시켜 곱하는 두 단계.
    분수 계수라 Mk 2·상수 대응으로 Ma 2 지만 통찰은 없음 → STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "(a-b)² 전개 → A, B, C 계수 대응 → 세 수의 곱"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$-16$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/76-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "4x 의 계수와 분수 상수(1/2 → 1/3, 2/3)를 바꿀 수 있음. 제약: ABC 가 정수로 떨어지려면 상수의 제곱 분모가 앞 계수 곱과 약분되어야 함(예: (6x-1/3)² → A·B·C = 36·(-4)·(1/9) = -16)."
    creative: "(1) A+B+C 나 A-B+C 로 묻기(★2 유지) (2) 좌변을 (ax+b)² 로 두고 A, C 를 준 뒤 B 를 묻기 → 역추적 ★3 (3) (4x-1/2)²-(4x+1/2)² 처럼 두 식의 차로 만들면 합차공식 착안이 붙어 ★3."
```

```yaml
- id: GN-M31-76-03
  page: 76
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리"
  summary: |
    $(-5a-b)^2$ 과 전개식이 같은 것 고르기. 5지선다.
  category: "제곱 안 부호 전체를 뒤집어도 값이 같음 → 같은 식 고르기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "완전제곱식 — 부호를 바꾼 식의 전개 비교"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (-X)² = X² 라는 정의 확인 한 단계. -(5a+b) 를 통째로 제곱한 것과 같으므로 (5a+b)².
    통찰 없음·M_total 4 → STEP 1 출발점 ★2 에서 −1 → ★1.
  tier: star_1
  mechanism_primary: "(-5a-b) = -(5a+b) → 제곱하면 부호가 사라진다"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/76-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 5·1 을 다른 조합(3a-2b, -7x-4y)으로 바꿔도 골조 동일. 제약: 오답지에 -(5a-b)² 처럼 밖에 음수가 붙은 형태를 반드시 남겨 T-부호 함정을 유지할 것."
    creative: "(1) '전개식이 같은 것을 모두 고르시오'로 복수 정답화(★2) (2) (-5a-b)²-(5a-b)² 값을 묻기 → 합차공식 ★2 (3) (-5a-b)² = (ma+nb)² 를 만족하는 m, n 을 모두 구하게 하면 분기가 생겨 I-MI ★3."
```

```yaml
- id: GN-M31-76-04
  page: 76
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리"
  summary: |
    $(6+x)(6-x)-(3x+1)(3x-1)$ 을 계산하기. 5지선다.
  category: "합차공식 두 번 → 빼기 분배 → 정리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "합차 공식을 이용한 식의 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 항 모두 합차 꼴이라 36-x² 와 9x²-1 로 바로 떨어지고, 뒤 괄호의 -1 분배만 조심하면 끝.
    통찰 없음·M_total 6 → STEP 1 출발점 ★2 유지. 선택지 ③이 6x 항을 남긴 함정.
  tier: star_2
  mechanism_primary: "각 항을 합차공식으로 전개 → 뒤 식 부호 반전해 더하기"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/76-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "6·3·1 을 다른 정수로 바꾸되 두 괄호 모두 (A+B)(A-B) 꼴을 유지. 제약: x² 계수와 상수항이 선택지에서 구분되도록 두 값이 서로 다른 부호·크기가 되게 잡을 것."
    creative: "(1) 뒤 항을 (3x+1)² 로 바꾸면 x 항이 살아나 계수 비교가 생김(★2) (2) 세 항의 합차 곱으로 늘리기(★3) (3) 결과의 상수항이 0 이 되도록 하는 계수를 묻기 → 역추적 ★3."
```

```yaml
- id: GN-M31-76-05
  page: 76
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리"
  summary: |
    $(x+a)(x-7)=x^2+bx-28$ 일 때 상수 $a$, $b$ 에 대한 $a+b$ 의 값.
  category: "(x+a)(x+b) 공식 전개 → 상수항으로 a 확정 → x 계수로 b 확정"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "(x+a)(x+b) 전개 — 미지의 상수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    상수항 -7a = -28 로 a 를 먼저 확정하고 그 값을 x 계수 a-7 에 넣어 b 를 얻는 순서 고정형.
    통찰 없음·M_total 6 → STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "상수항 대응으로 a → x 계수 대응으로 b → 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$1$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/76-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "-7 과 -28 을 (a, 상수항) 쌍이 정수로 맞아떨어지는 다른 조합(-5, -45 → a=9)으로. 제약: 상수항이 주어진 수의 배수여야 a 가 정수."
    creative: "(1) a 대신 b 를 주고 a 를 묻는 역방향(★2) (2) 상수항만 주고 가능한 (a, b) 정수쌍을 모두 구하게 하면 분기 발생 → I-MI ★3 (3) (x+a)(x+b) = x²+bx-28 처럼 문자를 겹쳐 쓰면 표기 함정이 생겨 ★3."
```

```yaml
- id: GN-M31-76-06
  page: 76
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "중단원 마무리"
  summary: |
    다섯 개의 전개식 중 옳은 것을 모두 고르기(정답 2개).
  category: "보기별로 곱셈 공식 적용 → 부호·계수 대조"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곱셈 공식 전개의 참·거짓 판별"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    다섯 보기를 각각 전개해 대조하는 검증형. 오답지는 (-x+2)² 의 x² 부호, (-x+1)(-x-1) 의 합차 부호,
    (x-5)(x+3) 의 x 계수 같은 표준 실수를 그대로 노림. 단계 수는 많지만 통찰 없음 → ★2 유지.
  tier: star_2
  mechanism_primary: "보기 다섯 개를 각각 곱셈 공식으로 전개해 부호·계수 대조"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②, ⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/76-06.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 보기의 계수를 바꾸되 '틀린 보기'의 오류 유형(x² 부호 / 합차 상수항 부호 / x 계수 / 중간항)을 하나씩 배치. 제약: 정답 개수를 문두에 명시하고 그 수만큼만 옳게 만들 것."
    creative: "(1) 틀린 보기를 골라 바르게 고치는 서술형(★3) (2) 옳은 것의 개수만 묻기(★2) (3) 보기를 무리수 전개로 바꾸면 계산 부담이 올라 ★3."
```

```yaml
- id: GN-M31-77-07
  page: 77
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리"
  summary: |
    다섯 개 전개식의 빈칸에 알맞은 수 중 나머지 넷과 다른 하나 고르기.
  category: "보기마다 공식 대응으로 빈칸 값 계산 → 다섯 값 비교"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곱셈 공식의 빈칸 채우기 — 다른 값 하나 찾기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ①은 2ab 항, ②는 중간항과 상수항이 동시에 맞는 값, ③은 합차공식의 상수항, ④⑤는 계수 대응으로
    빈칸을 각각 구한 뒤 비교한다. 다섯 번 반복이라 M_total 8 로 높지만 각 단계는 표준 절차·통찰 0 → ★2 유지.
  tier: star_2
  mechanism_primary: "보기별로 해당 곱셈 공식을 역으로 맞춰 빈칸 수를 구한 뒤 다섯 값 비교"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/77-07.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공통값 6 을 다른 수로 바꾸고 나머지 네 보기를 그 값에 맞춰 재설계. 제약: ②처럼 두 조건(중간항·상수항)이 동시에 맞아야 하는 보기는 부호까지 일치시킬 것."
    creative: "(1) '빈칸 수의 합'을 묻는 계산형(★2) (2) 빈칸을 두 개씩 두어 연립이 생기게 하면 ★3 (3) 다섯 보기를 모두 같은 값으로 만들고 어느 공식이 쓰였는지 짝짓게 하면 공식 선택 통찰이 붙어 ★3."
```

```yaml
- id: GN-M31-77-08
  page: 77
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "중단원 마무리"
  summary: |
    가로 $(5x-1)\,\mathrm{m}$, 세로 $(3x+2)\,\mathrm{m}$ 인 직사각형 화단에 폭 $1\,\mathrm{m}$ 인 가로·세로 길을 낼 때 길을 제외한 화단의 넓이.
  category: "길을 가장자리로 몰아 하나의 직사각형으로 환원 → 곱셈 공식 전개"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "가로·세로 길을 각각 한쪽 끝으로 밀어 붙여 남는 잔디를 (5x-2)×(3x+1) 직사각형 하나로 바꾸는 도형→대수 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "도형의 넓이와 곱셈 공식 — 폭이 일정한 길"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    길을 뺀 조각 넓이를 따로 더하는 대신 길을 밀어 붙이면 (5x-1-1)(3x+2-1) 한 번의 곱으로 끝난다.
    도형→대수 전환 통찰 1개(RT d1)·M_total 6 → STEP 1 출발점 ★2 유지. 단위 m² 표기도 답에 포함.
  tier: star_2
  mechanism_primary: "가로·세로에서 길 폭 1 씩 빼기 → (5x-2)(3x+1) 전개"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$(15x^2-x-2)\,\mathrm{m}^2$'
  answer_source: "답지"
  figure: 'crop:fig-77-08.png'
  latex: latex-bank/gn-m31/items/77-08.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "가로·세로 식과 길 폭을 바꿀 수 있음. 제약: 길을 뺀 뒤에도 각 변이 양수 계수 일차식이어야 하고, 폭이 2 이상이면 (5x-1-2) 처럼 상수항이 음수로 커지지 않게 계수를 키울 것. 그림 라벨 (5x-1)·(3x+2)·1 m 는 식과 동시에 갱신."
    creative: "(1) 세로 길을 하나 더 넣어 길이 두 줄이 되게 하기(같은 골조 ★2) (2) 길의 넓이를 묻기(전체-잔디, ★2) (3) 길이 대각선이거나 폭이 x 로 주어지면 밀어 붙이기가 안 되어 조각별 계산이 필요 → ★3 (4) 잔디 넓이가 주어진 값이 되는 x 를 묻기 → 역추적 ★3."
```

```yaml
- id: GN-M31-77-09
  page: 77
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리"
  summary: |
    $3.9\times4.1$ 을 계산할 때 가장 편리한 곱셈 공식 고르기. 5지선다.
  category: "두 수를 4-0.1, 4+0.1 로 보기 → 합차공식 선택"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곱셈 공식을 이용한 수의 계산 — 알맞은 공식 고르기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    두 수의 평균 4 에서 같은 크기만큼 떨어져 있음을 보면 (a+b)(a-b) 하나로 결정된다.
    계산을 끝까지 하지 않고 공식만 고르는 문항 · 통찰 없음·M_total 4 → ★2 에서 −1 → ★1.
  tier: star_1
  mechanism_primary: "3.9 = 4-0.1, 4.1 = 4+0.1 로 보기 → 합차 공식"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/77-09.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수를 바꿔 다른 공식이 답이 되게 할 수 있음(10.2² → (a+b)², 98×103 → (x+a)(x+b)). 제약: 기준수가 10 의 거듭제곱이나 한 자리 정수가 되도록 두 수를 잡을 것."
    creative: "(1) 공식을 고른 뒤 값까지 구하게 하기(★2) (2) 같은 수를 두 가지 공식으로 계산하고 더 빠른 쪽을 고르게 하면 전략 분기 I-SC ★3 (3) 여러 수를 공식별로 분류하는 짝짓기형(★2)."
```

```yaml
- id: GN-M31-77-10
  page: 77
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리"
  summary: |
    무리수 곱셈 다섯 개 중 옳지 않은 것 고르기. 5지선다.
  category: "보기별 무리수 전개 → 유리수부·무리수부 대조"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곱셈 공식을 이용한 무리수의 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ①②는 완전제곱, ③은 합차, ④⑤는 (x+a)(x+b)·(ax+b)(cx+d) 를 √ 에 적용해 유리수부와 √ 계수를 각각 맞춘다.
    ⑤만 √7 계수가 어긋난다. 다섯 번 전개로 노동량은 있으나 통찰 0 → ★2 유지.
  tier: star_2
  mechanism_primary: "보기마다 해당 곱셈 공식으로 전개 → 유리수부와 무리수부를 따로 대조"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/77-10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 보기의 √ 안 수와 계수를 바꾸되 틀린 보기 하나만 남길 것. 제약: 오답을 만들 때 유리수부는 맞히고 √ 계수만 틀리게 해야 '검산하면 보이는' 난도가 유지됨."
    creative: "(1) 옳은 것의 개수를 묻기(★2) (2) 틀린 보기를 바르게 고치는 서술형(★3) (3) 보기 값들의 대소를 비교하게 하면 어림·유리화가 붙어 ★3."
```

```yaml
- id: GN-M31-77-11
  page: 77
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리"
  summary: |
    $\dfrac{2\sqrt{2}-\sqrt{6}}{2\sqrt{2}+\sqrt{6}}$ 의 분모를 유리화하면 $a+b\sqrt{3}$ 일 때 유리수 $a$, $b$ 에 대한 $b-a$ 의 값. 5지선다.
  category: "분모의 켤레를 분자·분모에 곱하기 → 완전제곱·합차 전개 → 계수 대응"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "분모의 유리화 — 분모가 두 항인 경우"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    켤레 (2√2-√6) 를 곱하면 분모는 합차공식으로 8-6 = 2, 분자는 완전제곱으로 14-8√3 이 되어 7-4√3.
    √12 = 2√3 정리만 조심하면 되는 표준 절차 · 통찰 0·M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "분모의 켤레를 곱한다 → 분자는 (a-b)², 분모는 합차 → 약분 후 a, b 대응"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/77-11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "√2·√6 을 다른 쌍(√3·√15, √5·√10)으로 바꾸면 결과의 무리수부 종류가 달라짐. 제약: 두 근호의 곱이 완전제곱 인수를 가져야 정리 후 하나의 √ 만 남고, 분모가 0 이 되지 않게 계수를 잡을 것."
    creative: "(1) a+b 나 ab 를 묻기(★2) (2) 분자·분모를 서로 바꾼 식도 함께 주고 두 값의 합을 묻기 → 켤레 대칭 I-SYM ★3 (3) 유리화 결과가 정수가 되게 하는 계수를 묻기 → 역추적 ★3."
```

```yaml
- id: GN-M31-77-12
  page: 77
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "중단원 마무리"
  summary: |
    $a-b=3$, $a^2+b^2=15$ 일 때 $ab$ 의 값.
  category: "(a-b)² = a²+b²-2ab 변형 → ab 에 대해 풀기"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곱셈 공식의 변형 — a²+b² 와 ab 사이 관계"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a, b 를 각각 구하지 않고 (a-b)² 을 펼쳐 9 = 15-2ab 한 줄로 끝내는 교과서 표준 변형.
    중3 에서는 공식 자체가 학습 대상이라 통찰로 세지 않음 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "(a-b)² = a²+b²-2ab 에 두 조건 대입 → ab"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$3$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/77-12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "(a-b, a²+b²) 를 (5, 29) → ab=2 처럼 바꿀 수 있음. 제약: a²+b² ≥ (a-b)²/1 을 만족해 ab 가 실수로 나오고, 되도록 정수가 되게 두 수를 고를 것."
    creative: "(1) a+b 를 주고 ab 를 묻는 부호 대칭형(★2) (2) ab 와 a-b 를 주고 a²+b² 이나 a³-b³ 을 묻기(★2~3) (3) (a+b)² 값까지 묻게 하면 두 변형을 연결해야 해 ★3."
```

### 중단원 마무리하기 STEP 2 발전 문제

```yaml
- id: GN-M31-78-13
  page: 78
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리"
  summary: |
    한 변의 길이가 각각 $-a+4b$, $7a-3b$ 인 두 정사각형의 넓이의 합. 5지선다.
  category: "한 변 → 넓이는 제곱 → 완전제곱 두 번 전개 후 합"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "도형의 넓이와 곱셈 공식 — 정사각형 넓이의 합"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    (-a+4b)² 의 부호(정답지 오답 ①③은 -34ab)와 7a-3b 의 -42ab 를 모두 맞춰야 한다.
    T-부호와 '한 변을 그대로 더하는' T-표기 두 함정으로 Mt 2 · 통찰 0·M_total 7 → STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "두 변을 각각 제곱(완전제곱 공식) → 동류항끼리 더하기"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/78-13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 변의 계수를 바꾸되 ab 계수가 선택지에서 갈리도록 두 중간항의 부호를 같게(둘 다 음수) 유지. 제약: 변의 길이는 양수여야 하므로 계수 부호가 섞일 때 a, b 의 범위 언급은 생략된 관례를 따를 것."
    creative: "(1) 넓이의 차를 묻기 → 합차공식으로 (★3) (2) 둘레의 합을 함께 묻는 소문항(★2) (3) 두 정사각형을 이어 붙인 직사각형의 넓이로 바꾸면 곱 형태가 되어 ★3 (4) 넓이의 합이 주어진 값이 되게 하는 a:b 를 묻기 → 역추적 ★4."
```

```yaml
- id: GN-M31-78-14
  page: 78
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리"
  summary: |
    $(x+A)(x+B)=x^2+Cx+8$ ($A$, $B$, $C$ 는 정수)일 때 $C$ 의 값이 될 수 없는 것 고르기. 5지선다.
  category: "AB=8 인 정수쌍 전수 나열 → C = A+B 후보 집합 → 선택지 대조"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "AB=8 이 (1,8)(2,4)(-1,-8)(-2,-4) 네 가지(순서 포함 여덟 가지) 경우를 동시에 포함하므로 음수쌍까지 모두 따져야 C 후보 집합이 완성됨"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "(x+A)(x+B)=x²+Cx+d 에서 정수 조건으로 가능한 계수 찾기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    곱이 8 인 정수쌍을 음수쌍까지 빠짐없이 세워야 C ∈ {±6, ±9} 가 나오고 -3 이 불가능함을 알 수 있다.
    양수쌍만 보면 -6, -9 를 놓치는 T-부호·T-범위 함정 · 다중 해석 통찰 1개(MI d2) → STEP 2 ★3 유지.
  tier: star_3
  mechanism_primary: "상수항 8 의 정수 분해 전수 → 각 쌍의 합이 C → 선택지에 없는 값 찾기"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/78-14.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수항 8 을 12, 18 등 약수가 더 많은 수로 바꾸면 C 후보가 늘어 난도가 오르고, 소수(7)로 바꾸면 줄어든다. 제약: 선택지 다섯 중 정확히 하나만 후보 집합 밖에 있어야 하며 정수 조건을 반드시 명시할 것."
    creative: "(1) 'C 의 최댓값'을 묻기(★3) (2) 조건을 자연수로 좁혀 후보를 기각하게 하면 사후 검증 I-VF ★4 (3) 상수항을 미지수 d 로 두고 C=5 가 가능한 d 를 모두 구하기 → 역추적 ★4."
```

```yaml
- id: GN-M31-78-15
  page: 78
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "중단원 마무리"
  summary: |
    $(3x+2y)(-6x+ay)=-18x^2+Axy+By^2$ 이고 $A+B=3$ 일 때 상수 $a$ 의 값.
  category: "a 를 남긴 채 전개 → A, B 를 a 식으로 → A+B=3 일차방정식"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "(ax+b)(cx+d) 전개 — 계수 조건으로 미지의 상수 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    xy 계수 A = 3a-12, y² 계수 B = 2a 를 a 의 식으로 남겨 두고 A+B = 5a-12 = 3 을 푸는 구조.
    미지수를 계수 안에 남긴 채 전개해야 해 Ma 2 · 통찰 0·M_total 7 → STEP 2 ★3 유지.
  tier: star_3
  mechanism_primary: "a 를 남기고 전개 → A, B 를 a 로 표현 → A+B=3 풀기"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$3$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/78-15.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "3x+2y·-6x 의 계수와 A+B 값을 바꿀 수 있음. 제약: A+B 가 a 의 일차식이 되도록 a 는 한 괄호에만 넣고, 해가 정수가 되게 상수항을 맞출 것."
    creative: "(1) 조건을 A-B 나 AB 로 바꾸면 이차방정식이 되어 근이 둘 → I-MI ★4 (2) x² 계수 -18 을 조건으로 쓰고 다른 계수를 묻기(★3) (3) a 가 자연수라는 단서를 붙여 후보를 기각하게 하면 I-VF ★4."
```

```yaml
- id: GN-M31-78-16
  page: 78
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리"
  summary: |
    $(x+4y-1)^2$ 을 전개한 식에서 상수항을 제외한 모든 항의 계수의 합. 5지선다.
  category: "세 항의 완전제곱 전개 → 상수항만 빼고 계수 합"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-SC
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "여섯 항을 모두 전개해 더하는 갈래와 x=y=1 을 대입해 전체 합 16 에서 상수항 1 을 빼는 갈래 중 하나를 고르는 전략 분기"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "세 항의 완전제곱식 전개 — 계수의 합"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    (a+b+c)² 은 제곱 세 개와 교차항 세 개라 -2x·-8y 의 부호를 놓치기 쉽다(T-부호).
    '상수항 제외'라는 단서를 빼먹는 T-범위까지 Mt 2 · 대입 갈래 통찰 1개(SC d1) → STEP 2 ★3 유지.
  tier: star_3
  mechanism_primary: "세 항 완전제곱 전개 → 상수항 1 을 뺀 나머지 계수 합"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/78-16.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "4y 의 계수와 상수 -1 을 바꿀 수 있음. 제약: 대입 갈래가 통하려면 계수 합이 선택지에서 인접 정수로 갈리도록 잡고, 상수항이 0 이 되는 조합(예: (x+4y)²)은 문제의 단서를 무의미하게 만드니 피할 것."
    creative: "(1) 'xy 항과 y 항의 계수의 곱'처럼 일부 항만 묻기(★3) (2) 네 항 (x+2y+3z-1)² 로 늘리면 교차항이 여섯 개 → ★4 (3) 계수의 합이 주어진 값이 되게 하는 상수항을 묻기 → 역추적 ★4."
```

```yaml
- id: GN-M31-78-17
  page: 78
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리"
  summary: |
    $(x-2)(x+2)(x+5)(x+9)$ 를 전개하기.
  category: "짝을 골라 두 이차식으로 → 두 이차식의 곱 전개"
  M: {s: 3, k: 3, a: 1, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-SC
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "네 일차식을 어떤 둘씩 묶을지 선택 — (x-2)(x+2) 를 합차로 먼저 접어 x²-4 를 만드는 갈래가 가장 짧고, 순서대로 곱하는 갈래는 전개량이 크게 늘어남"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "네 일차식의 곱 — 짝을 지어 전개하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    합차가 되는 (x-2)(x+2) 를 먼저 묶어 x²-4 를 만들고, 남은 (x+5)(x+9) = x²+14x+45 와 곱하면
    사차식 전개가 한 번으로 줄어든다. 묶는 짝 선택이 핵심인 전략 분기(SC d2)·M_total 8 → STEP 2 ★3 유지.
  tier: star_3
  mechanism_primary: "합차가 되는 짝을 먼저 묶기 → (x²-4)(x²+14x+45) 전개"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$x^4+14x^3+41x^2-56x-180$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/78-17.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 상수를 바꾸되 '합이 같은 두 쌍'(예: -2·+9 와 +2·+5 는 아님) 또는 '합차 쌍'이 생기도록 설계. 제약: 짝짓기 이득이 사라지면 단순 계산 문제가 되므로 반드시 한 쌍은 합차 또는 공통부분을 만들 것."
    creative: "(1) 상수를 (x+1)(x+2)(x+3)(x+4) 처럼 등차로 두면 x²+5x 공통부분 치환이 되어 ★4 (2) 전개식의 x² 계수만 묻기(★3) (3) x=1 대입값(계수 총합)을 함께 묻는 소문항(★3)."
```

```yaml
- id: GN-M31-78-18
  page: 78
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "중단원 마무리"
  summary: |
    $(2+1)(2^2+1)(2^4+1)(2^8+1)(2^{16}+1)=2^{\blank}-1$ 의 빈칸에 알맞은 수.
  category: "(2-1) 을 곱해 합차공식 연쇄를 만들기 → 지수 규칙 발견"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: []
      description: "값이 1 인 (2-1) 을 앞에 곱해도 식이 변하지 않는다는 동치 변환 — 이 한 수가 없으면 합차공식을 쓸 자리가 생기지 않음"
    - step: 2
      type: I-PD
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "(2-1)(2+1)=2²-1, (2²-1)(2²+1)=2⁴-1 … 로 지수가 2배씩 접히는 규칙을 발견해 마지막이 2³²-1 임을 결론"
  insight_count: 2
  depth_score: 2.50
  type_id: null
  type_hint: "합차 공식의 연쇄 — (2+1)(2²+1)… 꼴의 곱"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    직접 곱하면 계산이 불가능하고, 1 = 2-1 을 끼워 넣는 착안 하나로 합차공식이 연쇄해 지수가 1→2→4→…→32 로 접힌다.
    끼워 넣기(EQV d3)와 접힘 규칙 발견(PD d2) 두 통찰 → STEP 2 출발점 ★3 에서 +1 → ★4.
  tier: star_4
  mechanism_primary: "(2-1) 을 곱해 (2²-1)(2²+1) → (2⁴-1)(2⁴+1) → … 연쇄 → 2³²-1"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$32$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/78-18.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 2 를 3, 5 로 바꾸면 (3-1)=2 로 나누는 보정이 필요해 한 단계 늘고, 항 수를 늘리면 지수만 커진다. 제약: 밑이 2 가 아니면 답이 (밑^32-1)/(밑-1) 꼴이 되므로 나눗셈 처리를 발문에 반영할 것."
    creative: "(1) 마지막 인수를 빼고 (2+1)…(2⁸+1) 로 줄이기(같은 골조 ★4) (2) (3+1)(3²+1)(3⁴+1) 처럼 밑을 바꿔 2 로 나누게 하면 보정 단계가 붙어 ★4 유지 (3) 식의 값을 직접 구하게 하면 거듭제곱 계산만 늘어 질이 떨어짐 — 빈칸형 유지 권장 (4) (x+1)(x²+1)(x⁴+1) 로 문자화하면 일반항 서술이 되어 ★4~5."
```

```yaml
- id: GN-M31-78-19
  page: 78
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리"
  summary: |
    $A=(3+\sqrt{3}\,)(a-2\sqrt{3}\,)$ 일 때 $A$ 가 유리수가 되도록 하는 유리수 $a$ 의 값.
  category: "전개해 유리수부와 √3 계수 분리 → 무리수부 계수를 0 으로"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'A 가 유리수'라는 결과 조건을 √3 의 계수 (a-6) = 0 이라는 계수 조건으로 역추적 — 값을 구하는 문제가 아니라 조건을 만드는 문제"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "곱셈 공식과 유리수가 될 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    전개하면 (3a-6) + (a-6)√3 이고, 유리수가 되려면 √3 이 사라져야 하므로 a-6=0.
    결과 조건 → 계수 조건의 역추적 통찰 1개(BW d2)·유리수 조건이라는 T-범위 함정 → STEP 2 ★3 유지.
  tier: star_3
  mechanism_primary: "전개해 (유리수부) + (√3 계수)√3 로 정리 → √3 계수 = 0"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$6$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/78-19.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "3+√3·-2√3 의 계수와 근호 안 수(√2, √5)를 바꿀 수 있음. 제약: a 가 유리수로 떨어지도록 무리수부 계수가 a 의 일차식이어야 하고, 같은 근호끼리만 묶이게 근호 안 수를 통일할 것."
    creative: "(1) 'A 가 정수'로 좁혀 추가 검증을 넣으면 I-VF ★4 (2) A 의 값까지 함께 구하게 하는 서술형(★3) (3) 두 무리수 √2, √3 이 섞이게 하면 계수 연립이 생겨 ★4 (4) a 가 무리수일 때로 열어 두면 해가 여러 개 → I-MI ★4."
```

```yaml
- id: GN-M31-79-20
  page: 79
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리"
  summary: |
    $x=4+\sqrt{10}$ 일 때 $x^2-8x+5$ 의 값. 5지선다.
  category: "x-4=√10 으로 옮겨 제곱 → x²-8x 를 수로 바꾸기 → 대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "x 를 그대로 대입하지 않고 x-4=√10 → x²-8x+16=10 이라는 동치 조건으로 바꿔 구하려는 식의 앞부분을 통째로 치환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "x = a+√b 일 때 식의 값 — 이차식으로 변형해 대입"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    직접 대입하면 (4+√10)² 전개와 8√10 소거를 손으로 처리해야 하지만, x-4=√10 을 제곱해 x²-8x=-6 을
    먼저 만들면 한 줄로 끝난다. 조건의 동치 변환 통찰 1개(EQV d2)·M_total 6 → STEP 2 ★3 유지.
  tier: star_3
  mechanism_primary: "x-4=√10 → 양변 제곱 → x²-8x=-6 → 구하는 식에 대입"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/79-20.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "4 와 √10, 그리고 마지막 상수 5 를 바꿀 수 있음. 제약: 구하는 식의 x² 계수와 x 계수가 (x-a)² 전개와 정확히 맞아떨어져야 치환이 성립(x²-2ax 꼴 유지)."
    creative: "(1) 구하는 식을 x²-8x+k 로 두고 값이 0 이 되는 k 를 묻기 → 역추적 ★3 (2) x³-8x²+5x 처럼 차수를 올리면 나눗셈 착안이 붙어 ★4 (3) x=(4+√10)/2 처럼 분수로 주면 분모 처리가 한 단계 늘어 ★3~4 (4) x 와 켤레 y=4-√10 을 함께 주고 대칭식으로 묻기 → I-SYM ★3."
```

```yaml
- id: GN-M31-79-21
  page: 79
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "중단원 마무리"
  summary: |
    $x=\dfrac{\sqrt{2}-1}{\sqrt{2}+1}$, $y=\dfrac{\sqrt{2}+1}{\sqrt{2}-1}$ 일 때 $\dfrac{y}{x}+\dfrac{x}{y}$ 의 값. 5지선다.
  category: "각각 유리화 → x+y, xy 로 환원 → 대칭식 변형으로 계산"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "x 와 y 가 서로 역수인 켤레쌍이라 xy=1, x+y=6 만 있으면 되고, 구하는 식을 ((x+y)²-2xy)/xy 로 묶어 개별 무리수 계산을 건너뜀"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "켤레 무리수의 유리화와 대칭식 — x/y + y/x"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    유리화하면 x=3-2√2, y=3+2√2 로 합 6·곱 1. 구하는 식을 (x²+y²)/xy 로 보고 대칭식 변형을 쓰면
    무리수를 다시 만지지 않아도 된다. 켤레 대칭 통찰 1개(SYM d2)·M_total 7 → STEP 2 ★3 유지.
  tier: star_3
  mechanism_primary: "유리화 → x+y=6, xy=1 → ((x+y)²-2xy)/xy"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/79-21.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "√2 를 √3, √5 로 바꾸면 x+y 가 4, 6, 8 … 로 달라진다. 제약: x, y 가 서로 역수(xy=1)가 되도록 분자·분모를 정확히 뒤집어 쓸 것 — 한쪽 부호만 바꾸면 xy=1 이 깨져 골조가 달라짐."
    creative: "(1) x²+y² 이나 x³+y³ 으로 바꾸기(★3) (2) x-y 를 묻게 하면 부호 판정이 붙어 ★3 (3) 분모를 √2+1 대신 2√2+1 로 바꾸면 xy≠1 이 되어 계산이 늘고 대칭 이득이 줄어 ★3 (4) x+1/x 형태로 다시 쓰게 하는 소문항을 넣으면 ★4."
```

```yaml
- id: GN-M31-79-22
  page: 79
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리"
  summary: |
    $x^2-3x+1=0$ 일 때 $x^2+\dfrac{1}{x^2}$ 의 값. 5지선다.
  category: "x 로 나눠 x+1/x=3 → 제곱해서 x²+1/x² 로"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "이차방정식을 근으로 풀지 않고 양변을 x 로 나눠 x+1/x=3 이라는 대칭 조건으로 바꾸는 동치 변환(x≠0 확인이 전제)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "x + 1/x 꼴 — x² + 1/x² 의 값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    근을 직접 구하면 무리수 계산이 되지만, x 로 나눠 x+1/x=3 을 만든 뒤 제곱해 -2 하면 7 로 끝난다.
    x≠0 (T-범위)와 제곱 시 +2 를 빼는 것(T-부호) 두 함정 · 동치 변환 통찰 1개(EQV d2) → STEP 2 ★3 유지.
  tier: star_3
  mechanism_primary: "양변을 x 로 나눠 x+1/x=3 → 제곱한 뒤 2 빼기"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/79-22.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항 계수 -3 을 -4, -5 로 바꾸면 답이 14, 23 으로 커진다. 제약: 상수항은 1 을 유지해야 x 로 나눴을 때 x+1/x 꼴이 나오며, 상수항을 -1 로 바꾸면 x-1/x 꼴이 되어 부호가 반대로 움직임."
    creative: "(1) x²-1/x² 이나 x+1/x 자체를 묻기(★2~3) (2) x³+1/x³ 으로 올리면 세제곱 공식이 하나 더 붙어 ★4 (3) x²-3x+1=0 대신 x²=3x-1 형태로 주고 반복 대입을 유도하면 골조가 달라짐(★3) (4) x-1/x 값을 함께 묻는 소문항으로 부호 분기를 만들면 I-MI ★4."
```

### 중단원 마무리하기 STEP 3 실력 UP

```yaml
- id: GN-M31-79-23
  page: 79
  vendor_label: "중단원 마무리하기 STEP 3 실력 UP"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리"
  summary: |
    $(x+2)(x-3)$ 에서 $2$ 를 $A$ 로 잘못 보고 전개한 결과가 $x^2-2x+B$, $(2x+1)(x-3)$ 에서 $2$ 를 $C$ 로 잘못 보고 전개한 결과가 $Cx^2+7x-3$ 일 때 $A+B+C$ 의 값.
  category: "잘못 본 식을 문자로 다시 전개 → 계수 대응으로 A, C 역추적 → B 계산"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "잘못 전개한 결과식이 주어지고 원래 자리의 상수를 되짚어야 함 — (x+A)(x-3) 의 x 계수 A-3=-2, (Cx+1)(x-3) 의 x 계수 1-3C=7 로 두 갈래를 각각 역추적"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "잘못 보고 전개한 식에서 상수 구하기"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    두 갈래 모두 '어느 자리의 2 를 바꿔 썼는가'를 먼저 정해야 식이 세워진다. 앞은 상수항 자리(A), 뒤는
    x² 계수 자리(C)라 대응하는 계수도 서로 다르다. 역추적 통찰(BW d2)·M_total 9 → STEP 3 출발점 ★4 유지.
  tier: star_4
  mechanism_primary: "(x+A)(x-3), (Cx+1)(x-3) 로 다시 세우기 → x 계수 대응으로 A, C → B=-3A → 합"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$-4$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/79-23.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "원식의 상수와 잘못 본 결과식의 계수를 바꿀 수 있음. 제약: A, C 가 정수로 떨어지려면 결과식의 x 계수가 (A-3) 또는 (1-3C) 값과 정확히 맞아야 하고, 두 갈래의 답 부호가 서로 달라야 합을 묻는 의미가 생김."
    creative: "(1) 바르게 전개한 식을 마지막에 구하게 하는 서술형(★4) (2) 잘못 본 자리를 알려 주지 않고 '어느 수를 잘못 보았는가'까지 묻게 하면 분기가 생겨 I-MI ★5 후보 (3) 세 번째 갈래를 추가하면 노동량만 늘어 질 저하 — 두 갈래 유지 권장 (4) 잘못 본 결과가 인수분해되는 조건을 붙이면 검증 단계 I-VF ★4."
```

```yaml
- id: GN-M31-79-24
  page: 79
  vendor_label: "중단원 마무리하기 STEP 3 실력 UP"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리"
  summary: |
    가로·세로가 $a$, $b$ $(a>b)$ 인 직사각형 $\mathrm{ABCD}$ 를 $\overline{\mathrm{AB}}$ 가 $\overline{\mathrm{AH}}$ 에, $\overline{\mathrm{HD}}$ 가 $\overline{\mathrm{HI}}$ 에, $\overline{\mathrm{GC}}$ 가 $\overline{\mathrm{GJ}}$ 에 겹치도록 접었을 때 $\square\mathrm{IEFJ}$ 의 넓이.
  category: "세 번의 45° 접기로 길이 대응 → IE, EF 를 a, b 로 → 곱해서 넓이"
  M: {s: 3, k: 3, a: 2, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-RT
      depth: 3
      effective_depth: 3
      signal_ref: []
      description: "'겹치도록 접는다'를 직각의 이등분(45°)과 대응변 길이가 같다는 대수 등식으로 옮김 — AH=AB=b, BE=b, HI=HD=a-b, DG=a-b, GJ=GC=CF=2b-a"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "세 접기에서 나온 길이들을 IE=2b-a, EF=2a-3b 두 변으로 통합해 직사각형 넓이 하나로 결합"
  insight_count: 2
  depth_score: 2.50
  type_id: null
  type_hint: "종이접기와 곱셈 공식 — 접은 도형의 넓이"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    각 접기는 직각을 이등분하므로 생기는 삼각형이 모두 직각이등변이고, 이 성질로 AH=b → HD=a-b → HI=a-b
    → DG=a-b → GC=CF=2b-a 가 연쇄로 정해진다. 마지막에 IE·EF 를 곱하면 (2b-a)(2a-3b).
    도형→대수 전환(RT d3)과 조건 통합(CON d2) 두 통찰 · M_total 10 → STEP 3 ★4 유지.
    ★5 는 SC/VF/SYM/XU 통찰이 없어 두지 않음.
  tier: star_4
  mechanism_primary: "접기 = 직각이등변 → AH=b, HI=DG=a-b, CF=GJ=2b-a → IE=2b-a, EF=2a-3b → 곱"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$-2a^2+7ab-6b^2$"
  answer_source: "답지"
  figure: 'crop:fig-79-24.png'
  latex: latex-bank/gn-m31/items/79-24.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a, b 를 구체 수치(a=7, b=4)로 주면 난도가 크게 내려가고(★2~3) 문자 그대로 두면 ★4. 제약: IE=2b-a>0, EF=2a-3b>0 이 동시에 성립해야 하므로 3b/2 < a < 2b 범위를 벗어나는 수치·비율은 쓸 수 없다. 그림의 점 이름 A~J 와 접는 변 대응은 식과 함께 갱신."
    creative: "(1) 접기를 두 번으로 줄이면 길이 연쇄가 짧아져 ★3 (2) 넓이 대신 □IEFJ 의 둘레를 묻기(★3) (3) □IEFJ 가 정사각형이 되는 a:b 를 묻기 → 역추적·검증 I-BW+I-VF ★5 후보 (4) 접힌 부분(색칠한 오각형)의 넓이를 묻게 하면 전체에서 빼는 갈래가 생겨 I-SC ★4."
```

```yaml
- id: GN-M31-79-25
  page: 79
  vendor_label: "중단원 마무리하기 STEP 3 실력 UP"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리"
  summary: |
    $(2\sqrt{2}+3)^{100}(2\sqrt{2}-3)^{102}=a+b\sqrt{2}$ 일 때 유리수 $a$, $b$ 에 대한 $a+b$ 의 값.
  category: "지수를 100+2 로 분해 → 켤레끼리 짝지어 합차공식 → 남은 제곱만 전개"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "지수 102 를 100+2 로 쪼개 (2√2+3)^100 (2√2-3)^100 · (2√2-3)² 로 다시 쓰는 동치 변환"
    - step: 2
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "켤레쌍의 곱 (2√2+3)(2√2-3) = 8-9 = -1 이라는 대칭성을 써서 100제곱 덩어리를 1 로 소거"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "켤레 무리수의 거듭제곱 곱 — 합차 공식으로 소거"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    지수를 맞춰 켤레끼리 묶으면 (-1)^100 = 1 이 되어 (2√2-3)² = 17-12√2 만 남는다.
    지수 분해(EQV d2)와 켤레 대칭(SYM d2) 두 통찰 → STEP 3 ★4 유지. ★5 는 통찰 3개 조건을 못 채워 두지 않음.
  tier: star_4
  mechanism_primary: "지수 100+2 분해 → 켤레 곱 (-1)^100=1 → (2√2-3)² 만 전개 → a+b"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$5$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/79-25.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 쌍(100, 102)과 켤레의 계수(2√2±3 → √5±2, 3√2±4)를 바꿀 수 있음. 제약: 두 지수의 차가 작을수록 남는 전개가 짧고, 켤레 곱이 ±1 이 되어야 거듭제곱이 깔끔히 사라짐(아니면 거듭제곱 값이 폭발)."
    creative: "(1) 지수 차를 3 으로 두면 세제곱 전개가 남아 ★4~5 (2) 켤레 곱을 -1 이 아닌 2 로 만들면 2^100 이 남아 지수법칙이 얹힌 I-XU ★5 후보 (3) a-b 나 ab 를 묻기(★4 유지) (4) 지수를 n 으로 일반화해 홀짝 분기를 묻게 하면 I-MI ★5."
```

### 서술형 대비 문제

```yaml
- id: GN-M31-80-e1
  page: 80
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 대비"
  summary: |
    $(ax-2)(3x+5)$ 를 전개한 식에서 $x^2$ 의 계수와 $x$ 의 계수가 같을 때 상수 $a$ 의 값. [6점]
  category: "a 를 남긴 채 전개 → 두 계수를 a 식으로 → 등식 풀기"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "(ax+b)(cx+d) 전개 — 계수 조건으로 미지의 상수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x² 계수 3a 와 x 계수 5a-6 을 같다고 놓으면 일차방정식 한 줄. 서술형 대비 구역의 시범 예제라
    배점(6점)은 붙었지만 골조는 STEP 1 의 계수 대응 수준 · 통찰 0·M_total 6 → ★3 에서 −1 → ★2.
  tier: star_2
  mechanism_primary: "전개 → 3a = 5a-6 → a"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$3$"
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/80-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "-2, 3x+5 의 계수를 바꿀 수 있음. 제약: 두 계수가 모두 a 의 일차식이 되도록 a 는 한 괄호에만 넣고, 일차항 계수 차가 0 이 되지 않게(해가 없어지지 않게) 잡을 것."
    creative: "(1) 조건을 'x 의 계수가 상수항의 k배'로 바꾸기(★2~3) (2) 두 미지수 a, b 를 넣고 조건 두 개로 연립(★3) (3) a 가 자연수라는 단서를 붙여 후보를 걸러 내게 하면 I-VF ★3."
```

```yaml
- id: GN-M31-80-e2
  page: 80
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 대비"
  summary: |
    $A=(\sqrt{10}+\sqrt{2}\,)^2$, $B=(2\sqrt{5}-1)(\sqrt{5}-2)$ 일 때 $A-B$ 의 값. [7점]
  category: "완전제곱·두 일차식 곱을 각각 전개 → 유리수부·무리수부끼리 빼기"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곱셈 공식을 이용한 무리수의 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    A = 12+4√5(√20=2√5 정리), B = 12-5√5 이고 유리수부가 서로 지워져 9√5 만 남는다.
    두 공식을 한 번씩 쓰는 절차형 · 통찰 0·M_total 6 → 서술형 출발점 ★3 에서 −1 → ★2.
  tier: star_2
  mechanism_primary: "A, B 를 각각 전개해 정리 → 유리수부·√5 계수끼리 빼기"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$9\sqrt{5}$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/80-e2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안 수를 바꾸되 A, B 의 무리수부가 같은 근호(√5)로 정리되게 맞출 것. 제약: √10·√2 처럼 곱이 완전제곱 인수를 갖는 쌍이어야 √20=2√5 로 합쳐지고, 유리수부가 상쇄되면 답이 간결해짐."
    creative: "(1) A+B 로 바꾸면 무리수부가 살아남아 계수가 달라짐(★2) (2) A÷B 로 두면 유리화가 붙어 ★3 (3) A-B 가 유리수가 되도록 B 의 계수를 정하게 하면 역추적 ★3."
```

```yaml
- id: GN-M31-80-u1
  page: 80
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 대비"
  summary: |
    $\left(3x-\dfrac{1}{2}a\right)\left(x+\dfrac{1}{4}\right)$ 를 전개한 식에서 $x$ 의 계수가 상수항의 $3$ 배일 때 상수 $a$ 의 값. [6점]
  category: "분수 계수로 전개 → x 계수와 상수항을 a 식으로 → 배수 조건 방정식"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "(ax+b)(cx+d) 전개 — 계수 조건으로 미지의 상수 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    x 계수 3/4 - a/2, 상수항 -a/8 을 얻고 3/4 - a/2 = -3a/8 을 푼다. 분수 계수와 음수 상수항이 겹쳐
    부호·통분 실수가 잦다. 통찰 0 이지만 M_total 7 로 80-e1 보다 한 단계 무거움 → 서술형 ★3 유지.
  tier: star_3
  mechanism_primary: "전개 → x 계수 = 3 × 상수항 → a 에 대한 일차방정식"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$6$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/80-u1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분수 계수 1/2, 1/4 와 배수 3 을 바꿀 수 있음. 제약: 통분 후 a 의 계수가 0 이 되지 않아야 해가 존재하고, a 가 정수로 떨어지도록 분모를 2 의 거듭제곱으로 유지하면 계산이 깔끔함."
    creative: "(1) 조건을 'x 의 계수와 상수항의 합이 0'으로 바꾸기(★3) (2) 분수를 정수로 바꾸면 80-e1 과 같은 ★2 (3) a 의 값을 구한 뒤 전개식 전체를 쓰게 하는 2단 서술형(★3) (4) 배수 관계를 미지수 k 로 두고 a 가 자연수가 되는 k 를 묻기 → I-VF ★4."
```

```yaml
- id: GN-M31-80-u2
  page: 80
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 대비"
  summary: |
    $A=(\sqrt{6}-\sqrt{3}\,)^2$, $B=(\sqrt{19}+2\sqrt{7}\,)(\sqrt{19}-2\sqrt{7}\,)$ 일 때 $A+B$ 의 값. [7점]
  category: "완전제곱·합차를 각각 전개 → 유리수부 상쇄 확인 → 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곱셈 공식을 이용한 무리수의 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    A = 9-2√18 = 9-6√2, B 는 합차라 19-28 = -9 로 무리수가 사라진다. 두 유리수부가 상쇄돼 -6√2 만 남는 구조.
    √18=3√2 정리만 조심하면 되는 절차형 · 통찰 0·M_total 6 → 서술형 ★3 에서 −1 → ★2.
  tier: star_2
  mechanism_primary: "A 는 완전제곱(√18 정리), B 는 합차 → 유리수부 상쇄 후 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-6\sqrt{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/80-u2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "√6·√3 과 √19·2√7 의 조합을 바꿀 수 있음. 제약: A 의 교차항이 √(정수) 로 정리되려면 두 근호의 곱이 완전제곱 인수를 가져야 하고, B 의 유리수부가 A 의 유리수부와 부호만 반대가 되게 맞추면 상쇄 구조가 유지됨."
    creative: "(1) A-B 로 바꾸면 유리수부가 18 로 살아남(★2) (2) B 를 (√19+2√7)² 로 바꾸면 무리수부 두 개가 서로 다른 근호로 남아 ★3 (3) A+B 가 유리수가 되게 하는 계수를 묻기 → 역추적 ★3."
```

```yaml
- id: GN-M31-81-u3
  page: 81
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 대비"
  summary: |
    $(5x+2)^2-(2x-3)(6x-7)$ 을 계산한 식에서 $x$ 의 계수와 상수항의 합. [8점 기준 6점]
  category: "완전제곱·두 일차식 곱 전개 → 빼기 분배 → 필요한 두 계수만 합"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곱셈 공식을 이용한 식의 계산 — 계수와 상수항"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    앞은 25x²+20x+4, 뒤는 12x²-32x+21 이고 통째로 빼면서 -(-32x) = +32x, -(+21) 부호를 모두 뒤집어야 한다.
    뺄셈 분배의 T-부호와 '계수만 묻는' T-범위 함정 둘 · 통찰 0·M_total 7 → 서술형 ★3 유지.
  tier: star_3
  mechanism_primary: "두 식을 전개 → 뒤 식 전체 부호 반전해 더하기 → x 계수와 상수항의 합"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$35$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/81-u3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "(5x+2)² 과 (2x-3)(6x-7) 의 계수를 바꿀 수 있음. 제약: 뒤 식 두 상수의 부호를 모두 음수로 유지해야 뺄셈 분배 함정이 살아 있고, x² 항이 상쇄되지 않게 계수를 잡을 것."
    creative: "(1) x² 계수까지 포함한 모든 계수의 합(= x=1 대입)으로 바꾸면 대입 갈래가 생겨 I-SC ★3 (2) 뒤 식을 (2x-3)² 로 바꾸면 완전제곱 두 개의 차 → 합차 착안 ★3 (3) 결과의 상수항이 0 이 되게 하는 계수를 묻기 → 역추적 ★4."
```

```yaml
- id: GN-M31-81-u4
  page: 81
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 대비"
  summary: |
    $(2x-y+3)(2x-y-3)$ 을 전개하면 $4x^2+Axy+By^2+C$ 일 때 상수 $A$, $B$, $C$ 에 대한 $A-B+C$ 의 값. [8점]
  category: "2x-y 를 한 덩어리로 묶기 → 합차공식 → 완전제곱 전개 → 계수 대응"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "공통부분 2x-y 를 한 문자로 보아 (M+3)(M-3) 합차 꼴로 바꾸는 동치 변환 — 여섯 항 분배 대신 두 단계로 줄임"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "공통부분을 묶어 합차 공식 적용하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    2x-y 를 덩어리로 보면 (2x-y)²-9 이고, 다시 완전제곱을 펴 4x²-4xy+y²-9 를 얻는다.
    공통부분 치환 통찰 1개(EQV d2)·A-B+C 에서 -B 부호까지 맞춰야 함 · M_total 7 → 서술형 ★3 유지.
  tier: star_3
  mechanism_primary: "공통부분 2x-y 묶기 → 합차공식 → (2x-y)² 전개 → A, B, C 대응"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$-14$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/81-u4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공통부분의 계수(2x-y → 3x+2y)와 ±3 을 바꿀 수 있음. 제약: 두 괄호에서 공통부분이 글자 하나까지 똑같아야 합차가 성립하고, 뒤 상수는 부호만 다른 같은 수여야 함."
    creative: "(1) (2x-y+3)(2x+y-3) 처럼 묶이는 덩어리를 바꾸면 -(y-3) 을 찾아내야 해 ★4 (2) A+B+C 로 바꾸면 부호 함정이 줄어 ★2~3 (3) 세 항 (2x-y+3)² 로 바꾸면 공통부분 이득이 사라지는 대신 교차항 세 개 → ★3 (4) 전개식이 특정 값이 되게 하는 상수를 묻기 → 역추적 ★4."
```

```yaml
- id: GN-M31-81-u5
  page: 81
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 대비"
  summary: |
    ⑴~⑵ $\dfrac{2\times3001^2-2997\times3003-11}{3000}$ 에서 $3000=x$ 로 두고 ⑴ 주어진 수를 $x$ 로 간단히 나타내기 ⑵ 그 식을 이용해 값을 계산하기. [총 7점]
  category: "각 수를 x±k 로 치환 → 완전제곱·합차로 전개 → 약분 → 대입"
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "3001=x+1, 2997=x-3, 3003=x+3 으로 옮겨 큰 수의 곱셈을 곱셈 공식이 통하는 다항식 계산으로 바꾸는 동치 변환(치환 지시는 발문에 있으나 어느 수를 어떤 꼴로 볼지는 학생이 결정)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "곱셈 공식을 이용한 수의 계산 — 치환해 간단히 하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    2(x+1)² - (x-3)(x+3) - 11 = x²+4x = x(x+4) 이므로 x 로 나누면 x+4, 곧 3004.
    치환과 약분이 맞물린 2단 소문항이고 계산량이 큰 편(M_total 9)·통찰 1개(EQV d2) → 서술형 ★3 유지.
  tier: star_3
  mechanism_primary: "3001=x+1, 2997=x-3, 3003=x+3 치환 → 전개·정리해 x(x+4) → x 로 약분 → 대입"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "⑴ $x+4$ ⑵ $3004$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/81-u5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준수 3000 과 각 수의 편차(±1, ±3), 마지막 상수 -11 을 바꿀 수 있음. 제약: 분자가 분모(=x)로 나누어떨어지도록 상수항이 정확히 0 이 되게 -11 자리를 맞출 것 — 이 조건이 깨지면 답이 분수가 되어 문항이 망가짐."
    creative: "(1) 치환 지시를 빼고 '곱셈 공식을 이용하여 계산하시오'로만 두면 치환 착안이 학생 몫이 되어 ★4 (2) 분모를 3001 로 바꾸면 약분 대상이 달라져 설계 난도가 오름(★4) (3) 분자만 x 의 식으로 정리하게 하는 1단 문항으로 줄이면 ★2~3 (4) 같은 골조로 제곱수의 차를 묻는 수 계산(1001²-999²)으로 바꾸면 ★2."
```

```yaml
- id: GN-M31-81-u6
  page: 81
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 대비"
  summary: |
    $x=\dfrac{2}{\sqrt{3}-\sqrt{2}}$, $y=\dfrac{2}{\sqrt{3}+\sqrt{2}}$ 일 때 $x^2+y^2-8xy$ 의 값. [8점]
  category: "각각 유리화 → x+y, xy 계산 → 대칭식 변형으로 한 번에"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "x, y 가 켤레쌍이라 합 4√3·곱 4 만 구하면 되고, 구하는 식을 (x+y)²-10xy 로 묶어 무리수 전개를 피함"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "켤레 무리수의 유리화와 곱셈 공식의 변형"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    유리화하면 x=2(√3+√2), y=2(√3-√2) 로 x+y=4√3, xy=4. x²+y²-8xy 를 (x+y)²-2xy-8xy = (x+y)²-10xy
    로 묶는 변형이 핵심이다(-2xy 와 -8xy 를 합치는 자리에서 실수가 잦음). 켤레 대칭 통찰 1개(SYM d2) → 서술형 ★3 유지.
  tier: star_3
  mechanism_primary: "유리화 → x+y=4√3, xy=4 → (x+y)²-10xy"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$8$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/81-u6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자 2 와 근호 쌍(√3, √2 → √5, √3)을 바꿀 수 있음. 제약: xy 가 정수로 떨어지려면 분자² / (앞수-뒷수) 가 정수여야 하고, 구하는 식의 xy 계수(-8)는 (x+y)²-k·xy 로 묶었을 때 답이 정수가 되게 고를 것."
    creative: "(1) x²+y²+2xy 로 바꾸면 (x+y)² 하나로 끝나 ★2 (2) x-y 가 섞인 식(x²-y²)으로 바꾸면 부호·순서 판정이 붙어 ★3 (3) 1/x + 1/y 를 함께 묻는 소문항을 두면 xy 활용이 한 번 더 필요해 ★3 (4) x, y 를 근으로 갖는 이차방정식을 세우게 하면 근과 계수의 관계로 넘어가 ★4."
```

## 표본 판정 요약 (33문)

- ★ 분포: ★1 2 · ★2 13 · ★3 14 · ★4 4 · ★5 0
- 통찰형 15 · 절차형 18 · premium 0
- 통찰 유형 분포: I-EQV 6 · I-SYM 3 · I-SC 3 · I-BW 2 · I-RT 2 · I-MI 1 · I-PD 1 · I-CON 1 (통찰 2개 문항: 78-18 · 79-24 · 79-25)
- 구역별 ★: STEP 1(12문) ★1 2 · ★2 10 / STEP 2(10문) ★3 9 · ★4 1 / STEP 3(3문) ★4 3 / 서술형(8문) ★2 3 · ★3 5
- type_hint 상위: 「(ax+b)(cx+d)·(x+a)(x+b) 전개로 미지의 상수 구하기」 4(76-05·78-15·80-e1·80-u1) · 「곱셈 공식을 이용한 무리수의 계산」 3(77-10·80-e2·80-u2) · 「유리화와 곱셈 공식의 변형(대칭식)」 3(77-11·79-21·81-u6) · 「도형의 넓이와 곱셈 공식」 3(77-08·78-13·79-24) · 「보기 전개의 참·거짓·빈칸 판별」 2(76-06·77-07)
- 대상층: 하위권 2 · 중하위권 13 · 중위권 11 · 중상위권 7
- 그림: 2문(`crop:fig-77-08.png` · `crop:fig-79-24.png`)
- ★4 4문은 모두 저노출 통찰(PD·BW·RT·SYM) 을 포함해 v3.8 §2.13 YELLOW 신호 없음. ★5 는 통찰 3개 + SC/VF/SYM/XU 조건을 채우는 문항이 없어 0.

## 분류 이슈 목록

판정이 애매하거나 벤더 구역 신호와 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-M31-77-07 | 빈칸 다섯 개를 각각 구해야 해 M_total 8 로 이 구역 최고치지만 각 단계가 표준 절차·통찰 0 → ★2 로 둠. 노동량 기준이면 ★3 | ★2 / ★3 |
| GN-M31-78-16 | 「계수의 합」을 x=y=1 대입으로 처리하는 갈래를 I-SC 로 셀지, 중3 표준 풀이(직접 전개)만 보고 절차형으로 둘지 경계 | ★3 |
| GN-M31-78-18 | 주 통찰을 (2-1) 끼워 넣기(I-EQV)로 볼지 연쇄 규칙 발견(I-PD)으로 볼지 갈림 — 두 단계로 나눠 둘 다 기록했고 그 결과 +1 로 ★4 | ★3 / ★4 |
| GN-M31-79-23 | STEP 3 실력 UP(★4 출발)이나 갈래마다 계수 대응 한 번씩이라 실제 사고량은 STEP 2 급. 벤더 신호를 존중해 ★4 유지 | ★3 / ★4 |
| GN-M31-80-e1 · 80-e2 · 80-u2 | 서술형 대비(★3 출발·6~7점)이나 골조가 STEP 1 수준의 단일 공식 적용이라 −1 해 ★2. 배점과 ★ 가 한 단 어긋남을 기록 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세울 유형**: ① 「계수 조건으로 미지의 상수 구하기」(76-05·78-15·80-e1·80-u1) — 이 범위에서 가장 많이 반복되며 조건이 '계수 대응 / 계수 배수 / 계수 합'으로 갈리므로 base ★2~3 의 한 유형으로 묶고 조건 종류를 변형 축으로 둘 것. ② 「켤레 무리수와 대칭식」(77-11·79-21·81-u6·79-25) — 유리화가 목적인 문항과 x+y·xy 환원이 목적인 문항은 골조가 다르므로 2개 유형으로 분리 권장. ③ 「도형의 넓이와 곱셈 공식」(77-08·78-13·79-24) — 길 밀어 붙이기 / 넓이의 합 / 접기는 난도 차가 ★2~4 로 커서 같은 유형으로 묶으면 base ★ 결정이 불가능.
- **통합해도 될 유형**: 「보기 전개의 참·거짓 판별」(76-06·77-10)과 「빈칸 채우기」(77-07)는 모두 '공식 역대응 검증'이라 한 유형(base ★2)으로 통합 가능. 「곱셈 공식의 변형」(77-12·79-20·79-22)도 조건이 a±b / x=a+√b / 이차방정식으로 다를 뿐 (합·곱) 환원이라는 골조가 같아 한 유형으로 묶고 조건 형태를 변형 축으로 두면 충분하다.
- **카탈로그 밖 취급 권장**: 78-18(합차 연쇄)·79-25(켤레 거듭제곱)은 이 단원에서 한 번씩만 나오는 저노출 골조라 별도 ★4 슬롯 유형으로 등록해 두면 변별 문항 자원으로 쓰기 좋다.
