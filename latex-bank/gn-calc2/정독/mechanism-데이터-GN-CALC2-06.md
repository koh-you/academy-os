---
name: mechanism-데이터-GN-CALC2-06
description: 개념원리 미적분Ⅱ 06 등비급수(1/1 · 51~54쪽 14문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 미적분Ⅱ (22개정) · 전사본 latex-bank/gn-calc2
  section: 06 등비급수
  unit_code: CALC2-06
  part: "1/1"
  extract_range: "51~54쪽 · 51-95~54-105"
  total_problems: 14
  unit_total: 14
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·예제 태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-calc2/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-calc2/items/<id>.tex
  image_source: latex-bank/gn-calc2/figures/ (crops.json · 이 범위에는 그림 문항 없음)
---

# 개념원리 미적분Ⅱ · 06 등비급수 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 미적분Ⅱ **06 등비급수** 단원 전체(51~54쪽 · 통번호 95~105 + 필수 예제 e6~e8 · 총 14문항)를 다룬다. 구역은 두 개다 — 개념 정의 직후의 「개념원리 익히기」(통번호만 붙고 태그 없음)와, 상자 발문만 전사된 「필수·발전 예제」(`쪽-eN` · tag 「필수」)와 그 뒤를 따르는 tag 「확인체크」 확인문제다. 개념원리 고등은 구역과 예제 태그가 난이도 층이므로 「개념원리 익히기」는 ★1, 「필수」 예제와 그 확인체크는 ★2 를 출발점으로 잡고 M_total·통찰로 ±1 조정했다. 이 단원에는 그림 문항이 없다.

단원 내용은 등비급수 `a + ar + ar² + ⋯` 의 수렴 조건(`a = 0` 또는 `|r| < 1`)과 합 `a/(1-r)` 하나로 수렴하며, 문항의 차이는 (ㄱ) 일반항을 등비 꼴로 **바꿔 쓰는 방식**(지수 정리 · 로그 · 삼각 · 유한 등비합 · 홀짝 분리), (ㄴ) 합이 주어졌을 때 `a`·`r` 을 **역으로 결정**하며 수렴 조건으로 근을 거르는 검증, (ㄷ) 공비가 `x` 의 식일 때 **수렴 조건을 부등식으로 옮기고 첫째항 0 인 경우를 따로 챙기는 것** 세 갈래다. 이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`·`insights[]`·`variation_notes` 를 채웠다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-CALC2-51-95
  page: 51
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑶ 항이 나열된 세 등비급수(공비 2/3 · 공비 -√2 · 공비 -1/√3)의 수렴·발산을 조사하고, 수렴하면 그 합을 구하기.
  category: "첫째항·공비 읽기 → |r|<1 판정 → a/(1-r)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비급수의 수렴·발산 판정과 합(항이 나열된 꼴)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    나열된 항에서 공비를 읽어 |r|<1 만 확인하면 끝나는 정의 확인 문항. ⑶ 은 합이 무리수라 유리화 한 줄이 더 붙지만 도구는 같다.
    통찰 없음·M_total 6 · 「개념원리 익히기」 구역 → 출발점 ★1 유지.
  tier: star_1
  mechanism_primary: "나열된 항에서 a·r 추출 → |r|<1 판정 → 합 a/(1-r) (무리수면 분모 유리화)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ 수렴, $3$ ⑵ 발산 ⑶ 수렴, $\dfrac{3(\sqrt{3}-1)}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/51-95.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫째항과 공비를 자유롭게. 제약 — 수렴 예는 |r|<1, 발산 예는 |r|≥1 이 되도록 섞고, 무리수 공비를 쓸 때는 합이 유리화로 정리되는 값(공비 ±1/√k)으로. 공비가 -1 인 예는 발산 판정용으로만."
    creative: "(1) 수렴·발산만 묻고 합은 빼기(★1 유지) (2) 소문항 하나를 순환소수 0.121212⋯ 의 분수 표현으로 바꾸면 표현 전환 1개 추가 ★2 (3) 공비를 문자로 주고 수렴 범위를 묻는 꼴로 바꾸면 51-98 유형이 되며 Mₐ 상승 ★2."
```

```yaml
- id: GN-CALC2-51-96
  page: 51
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ 시그마 꼴로 주어진 네 등비급수의 수렴·발산을 조사하고, 수렴하면 그 합을 구하기(⑷ 는 5^{n+1}/6^n 꼴).
  category: "일반항을 ar^{n-1} 꼴로 정리 → |r|<1 판정 → 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "시그마 꼴 등비급수의 수렴·발산과 합"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    51-95 와 같은 골조이고 표현만 시그마다. ⑷ 처럼 지수가 어긋난 일반항은 5×(5/6)^n 으로 정리해 첫째항을 다시 읽는 한 단계가 더 붙지만 지수법칙 수준이다.
    ⑵ 의 공비 -1 은 수렴 조건의 경계로 발산 판정만 하면 된다. 통찰 없음·M_total 6 → ★1.
  tier: star_1
  mechanism_primary: "일반항 지수 정리 → 첫째항·공비 재확인 → |r|<1 판정 → 합 a/(1-r)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ 발산 ⑵ 발산 ⑶ 수렴, $\dfrac{\sqrt{2}}{2}$ ⑷ 수렴, $25$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/51-96.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑷ 꼴에서 밑 쌍(5,6)과 지수 이동값(n+1, n-1, 2n)을 바꿀 수 있음. 제약 — 정리한 공비의 절댓값이 1 보다 작아야 수렴 예가 되고, 합이 정수·간단한 분수가 되도록 밑 차이를 1 이나 약수 관계로."
    creative: "(1) 지수를 2n, 2n-1 로 어긋나게 해 공비를 제곱 꼴로 만들기(★1~2) (2) (-a/b)^n 처럼 부호를 붙여 |r| 판정을 강제(★1 유지) (3) 수렴하는 것만 고르라는 보기형으로 바꾸면 판정 부담만 남아 ★2."
```

```yaml
- id: GN-CALC2-51-97
  page: 51
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ 두 등비수열이 섞인 급수의 합 구하기(차·곱·분수 꼴을 각각 두 등비급수로 분리).
  category: "일반항을 두 등비 꼴로 분리 → 각각의 합 → 합·차"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수렴하는 두 등비급수로 분리해 합 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    수렴하는 두 급수의 합·차는 각각의 합의 합·차라는 성질을 그대로 쓰는 문항. ⑵ 는 (-1/3)^n(3/2)^{2n} 을 지수법칙으로 (-3/4)^n 한 덩어리로 묶는 정리가 먼저다.
    분리 전에 두 급수가 각각 수렴함을 확인해야 한다는 점만 함정이고 새 도구는 없다. 통찰 없음·M_total 6 → ★1.
  tier: star_1
  mechanism_primary: "일반항을 등비 꼴 둘로 분리(또는 한 덩어리로 정리) → 각 급수 수렴 확인 → 합끼리 더하고 빼기"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\dfrac{4}{5}$ ⑵ $-\dfrac{3}{7}$ ⑶ $-\dfrac{5}{6}$ ⑷ $\dfrac{22}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/51-97.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 밑(1/2, 1/6 등)과 앞에 붙는 상수(4, 12)를 바꿀 수 있음. 제약 — 두 공비 모두 절댓값이 1 보다 작아야 분리가 정당하고, 두 합의 분모가 약분되어 답이 간단한 분수가 되도록."
    creative: "(1) 한 쪽 공비를 |r|≥1 로 만들어 「분리하면 안 되는」 반례를 고르게 하면 판정 통찰 1개 ★2 (2) 세 항으로 분리되는 일반항(2^n+3^n-1 꼴)으로 늘리면 계산만 늘어 ★1 유지 (3) 분리 후 두 합의 비나 차를 묻는 꼴로 바꾸면 ★2."
```

```yaml
- id: GN-CALC2-51-98
  page: 51
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑵ 공비가 x 의 일차식인 등비급수(공비 -3x · 공비 x/2)가 수렴하도록 하는 실수 x 의 값의 범위 구하기.
  category: "공비 읽기 → |r|<1 부등식 → x 범위"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비급수의 수렴 조건으로 미지수 범위 구하기(첫째항 상수)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    첫째항이 1 로 고정돼 있어 「a=0 또는 |r|<1」 중 뒤쪽만 보면 되는 가장 기본형. 공비를 읽고 절댓값 부등식을 푸는 두 단계뿐이다.
    통찰 없음·M_total 5 라 감산 후보지만 ★1 이 하한이라 「개념원리 익히기」 출발점 ★1 을 유지.
  tier: star_1
  mechanism_primary: "공비 r(x) 추출 → |r(x)|<1 → -1<r(x)<1 을 x 에 대해 풀기"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $-\dfrac{1}{3}<x<\dfrac{1}{3}$ ⑵ $-2<x<2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/51-98.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공비의 계수(-3, 1/2)와 평행이동 상수를 바꿀 수 있음. 제약 — 첫째항을 1 이 아닌 상수로 두면 여전히 a≠0 이라 조건이 하나로 유지되고, 답 구간의 끝값이 간단한 분수가 되도록 계수를 정할 것."
    creative: "(1) 공비를 x-2 처럼 평행이동시켜 중심이 0 이 아닌 구간으로(★1 유지) (2) 첫째항도 x 의 식으로 바꾸면 a=0 분기가 생겨 54-e8 꼴이 되며 ★2 (3) 수렴할 때의 합을 x 로 나타내라고 덧붙이면 Mₐ 상승 ★2."
```

### 필수·발전 예제

```yaml
- id: GN-CALC2-52-e6
  page: 52
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑶ 일반항이 등비 꼴이 아닌 급수의 합 구하기 — (1+2^n)/4^{n-1} · (2^n-1)(-1/3)^n · (1/2)^n sin(nπ/2).
  category: "일반항을 등비 꼴의 합·차로 전개 → 각 등비급수 합 → 더하기"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 3
      type: I-PD
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "⑶ 에서 sin(nπ/2) 가 1,0,-1,0 으로 주기 4 임을 발견해 짝수항을 지우고 남은 홀수항만으로 공비 -1/4 인 등비급수를 만든다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "등비급수의 합 — 일반항을 등비 꼴로 변형하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴⑵ 는 지수법칙과 전개로 두 등비급수의 합·차로 바꾸는 표준 변형이다. ⑶ 만 성격이 달라 삼각함수 값의 주기를 스스로 찾아 항을 걸러내야 등비 꼴이 드러난다(I-PD d2).
    「필수」 예제 출발점 ★2 · 통찰 1개(depth 2)·M_total 6 → +1 조건(통찰 2개 이상 또는 depth 3) 미달로 ★2 유지.
    [분류 이슈] ⑶ 단독이면 주기 발견이 핵심이라 ★3 급이나 예제 전체로는 ⑴⑵ 가 절차형이라 ★2 로 둔다.
  tier: star_2
  mechanism_primary: "일반항 전개·주기 관찰 → 등비 꼴 항만 남기기 → 각 등비급수의 합을 더하기"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ $\dfrac{16}{3}$ ⑵ $-\dfrac{3}{20}$ ⑶ $\dfrac{2}{5}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/52-e6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 밑 쌍(2,4)과 지수 이동(n-1), ⑵ 의 (2^n-1) 과 공비 -1/3, ⑶ 의 공비 1/2 를 바꿀 수 있음. 제약 — 전개한 뒤 나오는 각 공비의 절댓값이 모두 1 보다 작아야 하고(⑵ 에서 2×1/3 처럼 곱해진 공비가 1 을 넘지 않게), ⑶ 은 남는 항의 공비가 -r² 이므로 r 이 유리수면 답도 유리수."
    creative: "(1) sin 을 cos(nπ/2) 로 바꾸면 남는 항이 짝수항이 되어 첫째항이 달라짐(★2 유지) (2) sin(nπ/3) 처럼 주기 6 으로 늘리면 남는 항이 두 갈래가 되어 패턴 발견 부담이 커지고 ★3 (3) 일반항을 (2^n-1)(1/3)^n 처럼 부호 없이 두면 통찰이 사라져 ★1~2."
```

```yaml
- id: GN-CALC2-52-99
  page: 52
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑶ 로그·삼각·유한 등비합이 섞인 급수의 합 구하기 — log₂ 의 거듭제곱근 합 · (2/3)^n cos nπ · (1+3+⋯+3^n)/4^n.
  category: "로그·삼각·유한합을 등비 일반항으로 환산 → 분리 → 각 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "⑶ 에서 분자의 유한 등비수열 합을 (3^{n+1}-1)/2 닫힌 식으로 바꿔 급수를 두 개의 무한등비급수로 옮긴다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "등비급수의 합 — 일반항을 등비 꼴로 변형하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 로그를 계산하면 1, 1/2, 1/4 로 곧 등비가 되고 ⑵ 는 cos nπ=(-1)^n 치환이 전부라 표준 절차다.
    ⑶ 만 분자가 「유한」 등비수열의 합이라 닫힌 식으로 옮겨야 무한등비급수 둘로 분리되는 표현 전환이 들어간다(I-RT d1).
    52-e6 의 확인문제이므로 출발점 ★2 · 통찰 1개 depth 1 → ★2 유지.
  tier: star_2
  mechanism_primary: "로그값·cos nπ·유한 등비합을 등비 일반항으로 환산 → 두 등비급수로 분리 → 합"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $2$ ⑵ $-\dfrac{2}{5}$ ⑶ $\dfrac{13}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/52-99.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 밑 2 와 거듭제곱근 차수 열, ⑵ 의 공비 2/3, ⑶ 의 분자 공비 3·분모 밑 4 를 바꿀 수 있음. 제약 — ⑶ 은 분자 공비를 분모 밑보다 작게 잡아야 분리한 두 급수가 모두 수렴하고, ⑴ 은 로그값이 등비가 되도록 지수를 1/2 배씩."
    creative: "(1) ⑴ 을 log 의 합이 아니라 곱(∏)으로 바꾸면 지수 급수로 옮기는 전환이 한 겹 늘어 ★3 (2) ⑵ 의 cos nπ 를 cos(nπ/2) 로 바꾸면 주기 4 패턴 발견이 추가되어 ★3 (3) ⑶ 분자를 1+2+⋯+n 등차합으로 바꾸면 등비급수 도구를 벗어나 유형이 달라짐."
```

```yaml
- id: GN-CALC2-52-100
  page: 52
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    일반항이 aₙ=(7+(-1)^n)/2 인 수열에 대하여 a₁/5+a₂/5²+a₃/5³+⋯ 의 합 구하기.
  category: "홀·짝에 따른 aₙ 값 확인 → 두 등비급수로 분리 → 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-PD
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "(-1)^n 때문에 aₙ 이 3,4,3,4 로 주기 2 임을 보고 급수를 홀수항·짝수항 두 개의 공비 1/25 등비급수로 갈라낸다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "홀·짝으로 갈라지는 수열의 등비급수 합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    aₙ 이 등비수열이 아니므로 그대로는 공식을 못 쓴다. (-1)^n 의 주기 2 를 읽어 3/5+3/5³+⋯ 과 4/5²+4/5⁴+⋯ 로 나누면 둘 다 공비 1/25 인 등비급수가 된다(I-PD d2).
    갈라낸 뒤 각 급수의 첫째항을 다시 읽는 곳이 실수 지점이다. 예제 확인문제 출발점 ★2 · 통찰 1개 depth 2 → ★2 유지.
  tier: star_2
  mechanism_primary: "(-1)^n 주기 2 확인 → 홀수항·짝수항 두 등비급수(공비 1/25)로 분리 → 두 합을 더하기"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{19}{24}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/52-100.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "aₙ 의 두 값(3과 4)을 정하는 상수 7·2 와 분모 밑 5 를 바꿀 수 있음. 제약 — 분모 밑의 제곱이 공비가 되므로 밑은 2 이상 정수로 두고, 두 값이 서로 달라야 홀짝 분리가 의미를 가진다."
    creative: "(1) aₙ 을 주기 3 인 수열(예: n 을 3 으로 나눈 나머지로 정의)로 바꾸면 세 갈래 분리가 되어 ★3 (2) 분자 대신 분모를 홀짝으로 바꾸면 공비가 달라져 계산 부담만 증가(★2 유지) (3) 합을 주고 상수를 역으로 구하게 하면 역방향 사고가 추가되어 ★3."
```

```yaml
- id: GN-CALC2-53-e7
  page: 53
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ 공비가 x/3 인 등비급수의 합이 10 일 때 x 의 값 ⑵ 첫째항이 2 이고 Σaₙ=4 인 등비수열에 대하여 Σaₙ² 의 값.
  category: "합 공식에 대입해 r(또는 x) 결정 → 제곱수열의 공비 r² 로 다시 합"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "⑵ 에서 {aₙ} 이 공비 r 인 등비수열이면 {aₙ²} 도 첫째항 a²·공비 r² 인 등비수열이라는 동치 관계로 옮겨 다시 합 공식을 쓴다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "합이 주어진 등비급수에서 미지수·제곱급수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 소문항 모두 a/(1-r) 공식을 역으로 쓰는 문항이다. ⑴ 은 1/(1-x/3)=10 한 줄이고, 답이 수렴 범위 안인지 확인하는 마무리가 붙는다.
    ⑵ 에서 제곱수열도 등비이고 공비가 r² 라는 점을 알아채는 것이 유일한 전환이다(I-EQV d1).
    「필수」 예제 출발점 ★2 · 통찰 1개 depth 1 → ★2 유지.
  tier: star_2
  mechanism_primary: "a/(1-r)=S 에 대입해 r 결정 → {aₙ²} 은 첫째항 a²·공비 r² → a²/(1-r²)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $\dfrac{27}{10}$ ⑵ $\dfrac{16}{3}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/53-e7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 합 10 과 공비의 분모 3, ⑵ 의 첫째항 2 와 급수합 4 를 바꿀 수 있음. 제약 — ⑴ 은 구한 x 가 |x/3|<1 을 만족해야 하므로 합 S 를 1 보다 충분히 크게 잡고, ⑵ 는 a/S=1-r 이 0 과 1 사이여야 하므로 S>a>0."
    creative: "(1) Σaₙ² 대신 Σa_{2n-1} 이나 Σ(1/aₙ) 을 묻기(공비가 r², 1/r 로 바뀌며 1/r 쪽은 수렴 조건이 뒤집혀 ★3) (2) 합과 제곱합을 주고 첫째항을 역으로 구하게 하면 53-102 꼴 ★3 (3) 합이 두 값 중 하나가 되도록 조건을 느슨하게 하면 검증 분기가 생겨 ★3."
```

```yaml
- id: GN-CALC2-53-101
  page: 53
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    등비수열 {aₙ} 에서 a₂=-4/3 이고 Σaₙ=3 일 때 공비 구하기.
  category: "ar=a₂, a/(1-r)=3 연립 → r 이차방정식 → 수렴 조건으로 근 거르기"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "r 의 이차방정식에서 두 근 4/3 과 -1/3 이 나오지만 급수가 수렴한다는 전제 |r|<1 로 4/3 을 기각해야 답이 하나로 정해진다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "합이 주어진 등비급수에서 공비 구하기(수렴 조건으로 근 기각)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a=3(1-r) 을 a₂=ar 에 넣으면 r 의 이차방정식 하나로 정리되는 짧은 문항이다.
    다만 근이 둘 나오고 그중 하나가 |r|≥1 이라 수렴 전제로 기각하는 사후 검증이 필수다(I-VF d2). 이 단계를 빠뜨리면 틀린 답에 도달한다.
    확인문제 출발점 ★2 · 통찰 1개 depth 2 → ★2 유지.
    [분류 이슈] I-VF 는 저노출 유형이라 ★3 후보지만 계산량이 가볍고 이차방정식이 바로 인수분해되어 ★2 로 둔다.
  tier: star_2
  mechanism_primary: "a=S(1-r) 대입 → a₂=ar 에서 r 이차방정식 → |r|<1 로 근 하나 기각"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-\dfrac{1}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/53-101.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a₂ 의 값 -4/3 과 급수합 3 을 바꿀 수 있음. 제약 — 만들어지는 이차방정식 Sr²-Sr+a₂=0 의 판별식이 양수이고 두 근 중 정확히 하나만 |r|<1 이어야 기각 통찰이 살아난다. 근이 유리수가 되도록 S·a₂ 를 정수·간단 분수로."
    creative: "(1) a₂ 대신 a₃ 을 주면 r 의 삼차·이차 분기가 생겨 ★3 (2) 두 근이 모두 |r|<1 이 되게 만들면 답이 두 개가 되어 다중 해석형으로 성격이 바뀜(★3) (3) 공비 대신 첫째항이나 a₅ 를 묻는 꼴로 바꾸면 마무리 계산만 늘어 ★2 유지."
```

```yaml
- id: GN-CALC2-53-102
  page: 53
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    등비수열 {aₙ} 에서 Σaₙ=2, Σaₙ²=4/3 일 때 Σaₙ³ 의 값 구하기.
  category: "제곱·세제곱 수열의 공비 r²·r³ → 두 조건 결합해 a·r 결정 → 세제곱 급수합"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "{aₙ²}, {aₙ³} 이 각각 공비 r², r³ 인 등비수열이라는 동치 관계로 세 급수를 같은 a·r 로 표현한다"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 급수 조건을 나눠 a²/(1-r²) ÷ (a/(1-r))² 꼴로 결합하면 a 가 소거되고 (1-r)/(1+r) 만 남아 r 이 한 번에 결정된다"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "제곱·세제곱 급수 조건으로 등비수열 결정하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 조건을 따로 풀면 a, r 의 연립이 지저분해지지만 1-r²=(1-r)(1+r) 인수분해로 한쪽을 다른 쪽에 나누면 a 가 사라지고 r 만 남는다(I-CON d2).
    그 전에 제곱·세제곱 수열도 등비라는 인식이 선행한다(I-EQV d1).
    확인문제 출발점 ★2 이나 통찰 2개·M_total 8 → +1 조건을 만족해 ★3.
  tier: star_3
  mechanism_primary: "Σaₙ=a/(1-r), Σaₙ²=a²/(1-r²) 를 나눠 a 소거 → r 결정 → a 결정 → a³/(1-r³)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{8}{7}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/53-102.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 급수합 2 와 4/3 을 바꿀 수 있음. 제약 — 결합해서 나오는 (1-r)/(1+r) 값이 0 과 1 사이여야 |r|<1 인 해가 생기고, r 이 1/2, 1/3 같은 단위분수가 되도록 두 합의 비를 잡으면 세제곱 합도 간단한 분수가 된다."
    creative: "(1) Σaₙ³ 대신 Σ(-1)ⁿaₙ 이나 Σa_{2n} 을 묻기(공비 -r, r² 로 바뀌며 ★3 유지) (2) Σaₙ 과 Σaₙ³ 을 주고 Σaₙ² 을 물으면 1-r³ 의 인수분해가 필요해 ★4 (3) 첫째항이 양수라는 조건을 빼면 부호 분기가 생겨 검증형 통찰이 추가됨."
```

```yaml
- id: GN-CALC2-53-103
  page: 53
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    공비가 양수인 등비수열 {aₙ} 에서 a₂=4 이고 Σa_{n+1}a_{n+3}=8 일 때 Σaₙ 의 값 구하기.
  category: "곱 수열이 공비 r² 인 등비수열임을 확인 → a₂ 조건과 결합해 r 결정 → 원 급수합"
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "a_{n+1}a_{n+3} 을 a₁²r^{2n+2} 로 써서 이 곱 수열 자체가 첫째항 a₁²r⁴·공비 r² 인 등비수열임을 드러낸다"
    - step: 2
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "a₂=a₁r=4 를 곱 급수 조건에 넣어 a₁ 을 소거하고 r 만의 방정식 16r²/(1-r²)=8 로 통합한다"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "곱 수열의 등비급수 조건으로 공비·원 급수합 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    지표가 어긋난 곱 a_{n+1}a_{n+3} 을 지수로 펴 보면 공비 r² 인 등비수열이 되고, 첫째항은 a₁²r⁴ 이다. 첫째항을 어디서 읽는지가 첫 갈림길이다.
    a₂=4 로 a₁ 을 소거하면 r² 만의 일차식이 되어 공비가 정해지고, r>0 조건으로 부호를 확정한 뒤 원 급수합에서 무리수 유리화가 한 번 더 붙는다.
    통찰 2개·M_total 9 → 확인문제 출발점 ★2 에서 +1 하여 ★3.
  tier: star_3
  mechanism_primary: "a_{n+1}a_{n+3}=a₁²r⁴·(r²)^{n-1} → 합 조건으로 r² 결정 → r>0 확정 → Σaₙ=a₁/(1-r) 유리화"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$6(\sqrt{3}+1)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/53-103.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a₂ 의 값 4 와 곱 급수합 8, 곱의 지표 간격(n+1, n+3)을 바꿀 수 있음. 제약 — 곱 급수의 공비는 r² 이므로 |r|<1 이 자동으로 필요하고, r² 이 1/3 처럼 유리수가 되도록 두 값을 잡되 r 자체는 무리수가 되어 마지막 유리화가 살아나게 할 수 있다."
    creative: "(1) 지표 간격을 (n, n+1) 로 좁히면 공비가 여전히 r² 이지만 첫째항 계산이 쉬워져 ★2~3 (2) 공비 양수 조건을 빼면 r 의 부호 분기가 생겨 검증형 ★4 (3) Σaₙ 대신 Σa_{2n-1} 이나 Σ1/aₙ 을 묻게 하면 수렴 조건 재확인이 필요해 ★4."
```

```yaml
- id: GN-CALC2-54-e8
  page: 54
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑵ 등비급수가 수렴하도록 하는 실수 x 의 범위 구하기 — Σ(x/2+3)ⁿ 과 첫째항이 x 인 x+x(1-x)+x(1-x)²+⋯.
  category: "첫째항 0 인 경우와 |r|<1 인 경우를 모두 따져 합집합"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "⑵ 는 첫째항 x 가 0 일 때도 급수가 수렴하므로 「a=0」 과 「|r|<1」 두 경우를 모두 따져 합쳐야 하고, 그 결과 범위의 왼쪽 끝이 등호가 된다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "등비급수의 수렴 조건(첫째항이 변수인 경우 포함)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 첫째항이 공비와 같은 꼴이라 |x/2+3|<1 한 줄이면 끝난다.
    ⑵ 는 첫째항 x 가 변수라 x=0 이면 모든 항이 0 이 되어 수렴한다는 경우를 따로 챙겨야 하고(I-MI d2), 이것이 답의 등호 경계를 만든다. 이 단원 최대 함정이다.
    「필수」 예제 출발점 ★2 · 통찰 1개 depth 2 → ★2 유지.
    [분류 이슈] 첫째항 0 분기가 정답률을 가르는 자리라 ★3 후보지만 계산이 가볍고 예제 태그가 「필수」라 ★2 로 둔다.
  tier: star_2
  mechanism_primary: "첫째항 a(x)=0 인 x 확인 → |r(x)|<1 부등식 풀기 → 두 해집합의 합집합"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ $-8<x<-4$ ⑵ $0\le x<2$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/54-e8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 공비 x/2+3 의 계수·상수와 ⑵ 의 공비 1-x 를 바꿀 수 있음. 제약 — ⑵ 형은 첫째항의 영점이 |r|<1 구간의 끝에 놓일 때만 등호 경계가 생기므로 첫째항과 공비를 x=0 에서 맞물리게 설계. 답 구간의 끝값이 정수가 되도록 계수를 정할 것."
    creative: "(1) 첫째항의 영점을 |r|<1 구간 바깥에 두면 답이 「구간 또는 한 점」 꼴이 되어 54-104 ⑷ 와 같아짐(★3) (2) 공비를 이차식으로 바꾸면 부등식 풀이가 한 겹 늘어 ★3 (3) 수렴할 때의 합을 x 의 식으로 나타내라고 덧붙이면 Mₐ 상승 ★3."
```

```yaml
- id: GN-CALC2-54-104
  page: 54
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑷ 공비가 로그·삼각·이차식인 등비급수가 수렴하도록 하는 x 의 범위 구하기 — 공비 log_{1/2}x · 2cos x (0<x<π) · x²-x+1 · 첫째항 (x-4)(x-2) 인 Σ(x-4)(x-2)ⁿ.
  category: "|r(x)|<1 을 로그·삼각·이차 부등식으로 옮겨 풀고 첫째항 0 인 경우 추가"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "⑴⑵ 는 수렴 조건을 밑이 1 보다 작은 로그부등식(부등호 반전)과 0<x<π 안의 삼각부등식으로 옮겨야 풀리므로 지수로그·삼각함수 단원의 도구가 함께 필요하다"
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "⑷ 는 첫째항 (x-4)(x-2) 가 0 이 되는 x=4 도 수렴이므로 |x-2|<1 구간에 고립점을 더해야 하고, ⑶ 은 x²-x+1 이 항상 양수라 영점 경우가 없음을 확인해 배제한다"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "등비급수의 수렴 조건 — 로그·삼각·이차식 공비"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    골조는 54-e8 과 같지만 공비의 옷이 넷 다 달라 매번 다른 단원 도구로 부등식을 풀어야 한다. ⑴ 은 밑 1/2 때문에 부등호가 뒤집히고, ⑵ 는 cos 의 범위를 0<x<π 안에서 읽어야 한다(I-XU d2).
    ⑶ 은 첫째항이 0 이 될 수 없음을 확인해 경우를 배제하고, ⑷ 는 반대로 x=4 라는 고립점이 답에 붙는다(I-MI d2).
    통찰 2개·M_total 9 → 확인문제 출발점 ★2 에서 +1 하여 ★3.
  tier: star_3
  mechanism_primary: "각 소문항마다 첫째항 0 여부 확인 → |r(x)|<1 을 해당 단원 부등식으로 변환 → 정의역과 교집합"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ $\dfrac{1}{2}<x<2$ ⑵ $\dfrac{\pi}{3}<x<\dfrac{2}{3}\pi$ ⑶ $0<x<1$ ⑷ $1<x<3$ 또는 $x=4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/54-104.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 로그 밑 1/2, ⑵ 의 계수 2 와 주어진 x 구간, ⑶ 의 이차식 계수, ⑷ 의 첫째항 인수 (x-4) 와 공비 (x-2) 를 바꿀 수 있음. 제약 — ⑴ 은 밑이 1 보다 크면 부등호 반전 함정이 사라지고, ⑵ 는 계수가 1 이하면 조건이 항상 성립해 문제가 무너진다. ⑷ 는 첫째항의 영점이 |r|<1 구간 밖에 있어야 고립점이 답에 남는다."
    creative: "(1) ⑵ 의 구간을 0<x<2π 로 넓히면 해가 두 구간이 되어 다중 해석 부담 증가 ★4 (2) ⑶ 의 이차식을 x²-x-1 처럼 음수도 되는 식으로 바꾸면 절댓값 부등식이 두 갈래가 되어 ★4 (3) 네 소문항 중 수렴 범위가 가장 넓은 것을 고르라는 비교형으로 바꾸면 전략 선택이 추가되어 ★4."
```

```yaml
- id: GN-CALC2-54-105
  page: 54
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 등비급수 Σ(x/4)ⁿ 과 Σ(3/x)ⁿ 이 모두 수렴하도록 하는 실수 x 의 값의 범위 구하기.
  category: "각 급수의 |r|<1 부등식 → 두 범위의 교집합"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 등비급수가 모두 수렴할 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 공비가 각각 x/4 와 3/x 이므로 |x/4|<1 과 |3/x|<1 을 풀어 교집합만 잡으면 된다. 두 번째 조건을 |x|>3 으로 뒤집는 자리에서 부등호 방향이 흔들리기 쉽다.
    첫째항이 0 이 되는 경우는 x/4=0 이 이미 첫 구간 안이고 3/x 는 0 이 될 수 없어 새 분기가 생기지 않는다.
    단순 교집합은 스키마상 조건 통합으로 인정하지 않으므로 절차형. 확인문제 출발점 ★2 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "|x/4|<1 → -4<x<4 · |3/x|<1 → |x|>3 → 두 범위의 교집합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-4<x<-3$ 또는 $3<x<4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/54-105.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 상수 4 와 3 을 바꿀 수 있음. 제약 — 분수 공비 쪽 상수가 다른 쪽 상수보다 작아야 교집합이 빈집합이 되지 않고, 두 값이 정수면 답 구간의 끝도 정수가 된다."
    creative: "(1) 두 상수의 대소를 뒤집어 해가 없음을 답으로 만들면 검증형 통찰이 생겨 ★3 (2) 한쪽 급수의 첫째항을 x-a 로 바꾸면 영점 분기가 추가되어 ★3 (3) 두 급수의 합이 같아지는 x 를 묻는 꼴로 확장하면 수렴 범위 안에서 방정식을 푸는 단계가 붙어 ★4."
```

## 표본 판정 요약 (14문)

- ★ 분포: ★1 4 · ★2 7 · ★3 3 · ★4 0 · ★5 0
- 통찰형 9 · 절차형 5 · premium 0
- 통찰 유형 분포(연 11개): I-MI 2 · I-PD 2 · I-EQV 3 · I-CON 2 · I-RT 1 · I-VF 1 · I-XU 1
- type_hint 묶음: 「등비급수의 수렴 조건(x 범위)」 4(51-98 · 54-e8 · 54-104 · 54-105) · 「일반항을 등비 꼴로 변형해 합 구하기」 4(51-97 · 52-e6 · 52-99 · 52-100) · 「수렴·발산 판정과 합」 2(51-95 · 51-96) · 「합이 주어진 등비급수에서 미지수·공비」 2(53-e7 · 53-101) · 「제곱·곱 급수 조건으로 등비수열 결정」 2(53-102 · 53-103)
- 대상층: 하위권 3 · 중하위권 2 · 중위권 2 · 중상위권 7
- 그림: 0문(이 단원에는 그림 문항이 없다)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다. 이 범위에서 2단 이상 어긋난 문항은 없다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CALC2-52-e6 | ⑶ 의 sin(nπ/2) 주기 발견(I-PD d2)만 떼면 ★3 급이나 ⑴⑵ 가 절차형이라 예제 전체는 ★2 로 둠 | ★2 / ★3 |
| GN-CALC2-53-101 | 저노출 유형 I-VF(수렴 조건으로 근 기각)가 있어 ★3 후보지만 계산이 가볍고 인수분해가 즉시 되어 ★2 로 둠 | ★2 / ★3 |
| GN-CALC2-54-e8 | 「첫째항 0」 분기가 이 단원 정답률을 가르는 자리라 ★3 후보지만 벤더 태그 「필수」·계산량 최소라 ★2 로 둠 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형** — ① 「등비급수의 수렴 조건」은 *첫째항이 상수인 경우*(51-98)와 *첫째항이 변수라 a=0 분기가 생기는 경우*(54-e8 · 54-104 ⑷)를 반드시 다른 유형으로 분리해야 한다. 같은 이름으로 묶으면 base ★ 가 1 과 3 사이에서 흔들린다. ② 「합이 주어진 등비급수」도 *한 조건으로 r 이 바로 나오는 것*(53-e7 ⑴)과 *이차방정식 근을 수렴 조건으로 기각해야 하는 것*(53-101)을 나눈다 — 후자가 I-VF 슬롯의 표준 공급원이다.
- **통합해도 될 유형** — 51-95 와 51-96(나열 꼴 / 시그마 꼴)은 표기만 다르고 골조가 같아 한 유형이면 충분하다. 51-97 · 52-e6 · 52-99 · 52-100 도 「일반항을 등비 꼴로 바꿔 쓰기」 한 유형 아래 *지수 정리 · 로그/삼각 환산 · 주기 분리*를 변형 축으로 두면 된다(주기 분리만 depth 2 통찰이 붙음).
- **상위 슬롯 공급원** — 이 단원에서 ★4 이상을 만들려면 53-103 처럼 *지표가 어긋난 곱 수열을 등비로 다시 읽는* 골조나, 54-104 처럼 *다른 단원 부등식 + 첫째항 0 분기*가 겹치는 골조에서 조건 하나를 더 느슨하게 하는 방향이 현실적이다. 현재 범위에는 ★4·★5 가 없다.
