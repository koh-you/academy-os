---
name: mechanism-데이터-GN-M31-03-p2
description: 개념원리 중학 3-1 03 무리수와 실수(2/2 · 30~35쪽 36문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 중학 3-1 · 전사본 latex-bank/gn-m31
  section: 03 무리수와 실수
  unit_code: GN-M31-03
  part: "2/2"
  extract_range: "30~35쪽 · 30-01~35-u6"
  total_problems: 36
  unit_total: 61
  judgment_protocol: "schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22)."
  variation_fields: "mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)"
  latex_source: "latex-bank/gn-m31/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-m31/items/<id>.tex"
  image_source: "latex-bank/gn-m31/figures/ (crops.json)"
---

# 개념원리 중학 3-1 · 03 무리수와 실수 (2/2) 정독 데이터 (v1.0)

이 파일은 30~35쪽 네 구역 36문항 전수를 담는다. 구역은 「중단원 마무리하기 STEP 1 기본 문제」 14문(30-01~31-14) · 「STEP 2 발전 문제」 11문(32-15~33-25) · 「STEP 3 실력 UP」 3문(33-26~33-28) · 「서술형 대비 문제」 8문(34-e1~35-u6)이다. 03 단원 앞부분(1/2)이 개념 확인·핵심문제였던 것과 달리 이 범위는 전부 **단원 마무리 층**이라 구역 자체가 ★ 출발점이 된다: STEP 1 ★2 · STEP 2 ★3 · STEP 3 ★4 · 서술형 ★3 에서 출발해 M_total·통찰로 ±1 조정했다. 개념원리 중학은 문항별 난이도 표기가 없고 태그는 「꼭나와」(빈출 표시 · +0) 7문뿐이다.

단원 성격상 골조가 크게 넷으로 갈린다: ① $\sqrt{A^2}$ 의 부호 판정(조건 범위 → 근호 벗기기) ② 근호 안을 제곱수로 만드는 자연수 조건 ③ 무리수의 대소 비교와 수직선·모눈 대응 ④ 실수의 분류·조밀성 판별. 이 중 ①②는 조건의 동치 변환(I-EQV)이 반복 도구이고, ③은 대수↔기하 표현 전환(I-RT)과 원의 대칭(I-SYM)이 붙는다. 통찰형은 11문이고 나머지 25문은 절차형이다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다. 이 단원의 숫자 변형에서 가장 자주 깨지는 제약은 **근호 안이 제곱수인가**와 **주어진 범위가 각 항의 부호를 하나로 확정하는가** 둘이므로 각 블록 `variation_notes.numeric` 에 그 제약을 명시했다.

## 문항 데이터

### 중단원 마무리하기 STEP 1 기본 문제

```yaml
- id: GN-M31-30-01
  page: 30
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "기본 문제"
  summary: |
    제곱근의 뜻·표기에 대한 다섯 진술 중 옳은 것 하나 고르기. 5지선다.
  category: "각 선택지의 표기 해석 → 제곱근 정의로 참·거짓 판정"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "제곱근의 뜻과 표기 구분(옳은 것 고르기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    다섯 선택지가 각각 다른 함정을 건다: 「a의 제곱근」 ± 와 「제곱근 a」 + 의 구분, 음수의 제곱근은 없음, 근호 안을 먼저 정리해야 함.
    판정 자체는 정의 한 줄씩이라 통찰 없음. 함정 카테고리 2개(T-표기·T-부호) · M_total 6 · STEP 1 ★2 출발 → ★2 유지.
  tier: star_2
  mechanism_primary: "각 선택지 근호 안 정리 → 제곱근 정의(부호·개수) 대조 → 참인 것 선택"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/30-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 선택지의 수(2·36·1/2·16·5)를 바꿀 수 있음. 제약: 참인 선택지가 정확히 하나여야 하고, 「제곱근 N」 꼴에는 N이 완전제곱수여야 근호 없이 답이 나온다. 음수의 제곱근 선택지는 부호를 유지해야 함정이 살아 있다."
    creative: "(1) 「옳지 않은 것」으로 뒤집기(★2 유지) (2) 옳은 것의 개수를 묻기(★2) (3) 문자 a에 대한 진술로 일반화하면 Mₐ 상승 ★3."
```

```yaml
- id: GN-M31-30-02
  page: 30
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "기본 문제"
  summary: |
    다섯 수 중 제곱근을 근호 없이 나타낼 수 있는 것 두 개 고르기(순환소수 포함).
  category: "각 수를 분수·정수로 정리 → 제곱수(유리수의 제곱) 여부 판정"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "순환소수 1.7̇ 을 분수 16/9 로 옮겨야 제곱수 판별이 가능해진다(소수 표현 → 분수 표현 전환)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "근호를 사용하지 않고 나타낼 수 있는 수 찾기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    121/25 = (11/5)² 는 바로 보이지만 1.7̇ 은 분수로 고쳐야 16/9 = (4/3)² 가 드러난다. 표현 전환 통찰 1개(RT d1).
    √225 = 15 처럼 근호 안을 먼저 정리해 놓고 그 수의 제곱근을 다시 묻는 중첩도 걸려 있다. M_total 6 · STEP 1 ★2 출발 → ★2 유지.
  tier: star_2
  mechanism_primary: "각 수를 분수·정수로 정리 → 분자·분모가 모두 제곱수인지 확인 → 두 개 선택"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "②, ⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/30-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "제곱수 분수(121/25 → 49/16, 9/64)와 순환소수(1.7̇ = 16/9 → 0.4̇ = 4/9, 2.7̇ = 25/9)를 바꿀 수 있음. 제약: 순환소수는 분수로 고쳤을 때 분자·분모가 모두 제곱수여야 하고, 오답 선택지는 제곱수가 아니어야 한다. 정답 개수(2개) 고정."
    creative: "(1) 근호 없이 나타낼 수 없는 것을 묻기(★2 유지) (2) 개수를 묻기(★2) (3) √(0.4̇) 처럼 근호 안에 순환소수를 넣으면 전환 단계가 하나 늘어 ★3."
```

```yaml
- id: GN-M31-30-03
  page: 30
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "기본 문제"
  summary: |
    √((-49)²) 의 음의 제곱근을 A, 제곱근 64 를 B 라 할 때 A + B 의 값.
  category: "근호 안 정리 → 음의 제곱근·제곱근 N 표기 구분 → 합"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "제곱근의 제곱근(중첩 표기)과 A·B로 두고 계산하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    √((-49)²) = 49 로 먼저 정리한 뒤 그 음의 제곱근 -7, 「제곱근 64」는 양수 8 이라는 표기 구분이 전부다.
    통찰 없음이지만 함정 2개(T-부호 음의 제곱근 · T-표기 「제곱근 N」)로 M_total 6 · 꼭나와 · STEP 1 ★2 출발 → ★2 유지.
  tier: star_2
  mechanism_primary: "√((-49)²) = 49 → 음의 제곱근 -7 = A · 제곱근 64 = 8 = B → A + B"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$1$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/30-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "(-49)² 의 49 와 64 를 다른 제곱수(81·100·144·225)로 바꿀 수 있음. 제약: 두 수 모두 완전제곱수여야 A·B가 정수로 떨어지고, 근호 안 제곱은 음수를 넣어야 T-부호 함정이 유지된다."
    creative: "(1) A - B · AB 로 묻는 식을 바꾸기(★2 유지 · 35-u3 골조) (2) 한쪽을 「양의 제곱근」으로 바꿔 부호 함정을 줄이면 ★1 (3) A·B를 문자 계수로 쓰고 A² + B² 를 묻는 식으로 확장하면 ★3."
```

```yaml
- id: GN-M31-30-04
  page: 30
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "기본 문제"
  summary: |
    √(4/9) × √81 + √((-2)²) ÷ √((2/5)²) 를 계산하기.
  category: "각 근호를 제곱수로 정리 → 곱셈·나눗셈 → 덧셈"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "제곱근의 값을 구하여 사칙계산하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    근호가 모두 벗겨지는 값(2/3 · 9 · 2 · 2/5)이라 순수 계산 문제다. 분수 나눗셈의 역수 처리가 Mₖ를 2로 올린다.
    통찰 없음 · M_total 6(≥6 이라 절차형 감점 규칙 비적용) · STEP 1 ★2 출발 → ★2 유지.
  tier: star_2
  mechanism_primary: "각 근호 벗기기 → (2/3)×9 + 2÷(2/5) → 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$11$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/30-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 근호 안의 수(4/9 · 81 · (-2)² · (2/5)²)를 모두 바꿀 수 있음. 제약: 넷 다 완전제곱(또는 제곱수 분수)이어야 근호가 벗겨지고, 나눗셈 쪽은 결과가 정수·간단한 분수로 떨어지도록 분모를 고른다."
    creative: "(1) 연산 순서를 섞어 괄호를 넣기(★2 유지) (2) 근호 하나를 제곱수가 아닌 수로 바꿔 답을 무리수로 만들면 ★3 (3) 결과를 두 식 A·B로 나누고 A+B를 묻는 구성(32-16 골조)으로 확장하면 ★3."
```

```yaml
- id: GN-M31-30-05
  page: 30
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "기본 문제"
  summary: |
    a > 0 일 때 -√((2a)²) = -2a 꼴 다섯 등식 중 옳지 않은 것 고르기.
  category: "a > 0 → 근호 벗긴 값의 부호 확정 → 앞의 마이너스 부호 반영"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "√(A²) 의 성질(a > 0 일 때 근호 벗기기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a > 0 이 한 번에 주어져 각 항의 부호가 바로 정해지므로 분기가 없다. 틀린 것은 근호 밖 마이너스를 빠뜨린 -√(9a²) = 3a 하나다.
    문자 계수라 Mₐ 2 · 함정 2개(T-부호·T-표기) · 통찰 없음 · M_total 7 · STEP 1 ★2 출발 → ★2 유지.
  tier: star_2
  mechanism_primary: "a > 0 → √((ka)²) = |k|a → 근호 밖 부호 곱해 각 등식 참·거짓 판정"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/30-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수(2 · -5 · -1 · 9 · -8)를 자유롭게 바꿀 수 있음. 제약: 틀린 선택지가 정확히 하나여야 하고, 9a² 처럼 근호 안이 제곱 꼴로 이미 전개된 항을 하나 남겨 두어야 「제곱을 먼저 본다」 함정이 산다."
    creative: "(1) 조건을 a < 0 으로 바꾸면 모든 선택지의 부호가 뒤집혀 난이도 유지(★2) (2) 조건 없이 「항상 옳은 것」을 묻기(★3 · I-MI d2 · a의 부호 분기) (3) 30-06처럼 범위 조건을 구간으로 주면 ★2~3."
```

```yaml
- id: GN-M31-30-06
  page: 30
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "기본 문제"
  summary: |
    -3 < a < 2 일 때 √((a-2)²) - √((a+3)²) 을 간단히 한 결과 고르기.
  category: "범위로 a-2 · a+3 의 부호 확정 → 근호 벗기기 → 동류항 정리"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "a의 범위가 주어진 √(A²) 꼴 식 간단히 하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    주어진 구간이 두 일차식의 부호를 각각 하나로 고정해 준다(a-2 < 0, a+3 > 0)는 것이 전부이고, 분기가 생기지 않아 표준 절차로 처리된다.
    함정 2개(T-부호·T-범위) · 문자식이라 Mₐ 2 · 통찰 없음 · M_total 7 · 꼭나와 · STEP 1 ★2 출발 → ★2 유지.
  tier: star_2
  mechanism_primary: "-3 < a < 2 → (2-a) - (a+3) → -2a-1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/30-06.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간의 두 끝(-3, 2)과 두 일차식의 상수항을 바꿀 수 있음. 제약: 구간 전체에서 각 일차식의 부호가 하나로 확정되도록 두 근(2 와 -3)이 구간의 양 끝과 일치해야 한다. 어긋나면 경우 분기가 생겨 유형이 바뀐다."
    creative: "(1) 부호를 일부러 확정 못 하게 구간을 넓히면 케이스 분기 → ★3(I-MI d2) (2) 항을 세 개로 늘리기(32-17 골조 · ★3) (3) 결과 식을 주고 a의 범위를 되묻는 역방향 → ★3(I-BW d2)."
```

```yaml
- id: GN-M31-30-07
  page: 30
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "기본 문제"
  summary: |
    √(18x/5) 가 자연수가 되도록 하는 가장 작은 자연수 x 구하기.
  category: "근호 안이 제곱수가 되는 조건 → 분모까지 없애는 최소 x"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「√ 가 자연수」를 「근호 안이 제곱수인 자연수」로 옮기고, 분모 5 까지 약분되도록 x 에 5 를 포함시켜야 한다는 조건으로 바꾼다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "√(ax) 가 자연수가 되는 가장 작은 자연수 x"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    18/5 = 2·3²/5 로 소인수분해하면 x 가 지워야 할 것이 분모 5 와 짝 없는 2 임이 드러난다. 정수 꼴 √(ax) 보다 분모 처리 한 단계가 더 붙는다.
    조건의 동치 변환 통찰 1개(EQV d1) · M_total 6 · STEP 1 ★2 출발 → ★2 유지.
  tier: star_2
  mechanism_primary: "18x/5 = 2·3²x/5 → 분모 5 와 홀수 지수 2 를 x 로 메움 → x = 10"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$10$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/30-07.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분수 계수(18/5)를 다른 꼴(12/7 · 50/3 · 45/2)로 바꿀 수 있음. 제약: 분자·분모를 소인수분해했을 때 홀수 지수인 소인수들의 곱이 최소 x 가 되므로, 답이 너무 커지지 않도록 소인수를 작게 유지한다. 분모가 이미 제곱수면 유형이 정수형으로 되돌아간다."
    creative: "(1) 「가장 작은」 대신 「두 번째로 작은」으로 바꾸기(★3 · 32-19 골조) (2) 분수를 √(200/x) 꼴로 뒤집어 x 가 분모에 오게 하면 약수 열거가 붙어 ★3(32-18) (3) x 의 값을 주고 식을 되묻는 역방향 ★2."
```

```yaml
- id: GN-M31-30-08
  page: 30
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "기본 문제"
  summary: |
    다섯 쌍의 대소 비교 중 부등호 방향이 나머지 넷과 다른 하나 고르기(음수·1보다 작은 수 포함).
  category: "각 쌍을 근호 꼴로 통일 → 근호 안 크기 비교 → 부호·1 미만 보정"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "제곱근의 대소 비교(음수·1보다 작은 수 포함)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    유리수를 근호 꼴로 바꿔(4 = √16, 0.1 = √0.01, 1/3 = √(1/9)) 근호 안끼리 비교하는 표준 절차 다섯 번이다.
    음수 쌍은 부등호가 뒤집히고 √0.1 vs 0.1 은 1보다 작은 수의 제곱근이 원래 수보다 크다는 점이 함정. 통찰 없음 · 함정 2개 · M_total 7 · STEP 1 ★2 출발 → ★2 유지.
  tier: star_2
  mechanism_primary: "각 쌍을 √ 꼴로 통일 → 근호 안 비교 → 음수면 부등호 반전 → 방향이 다른 쌍 선택"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/30-08.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 쌍의 수를 바꿀 수 있음. 제약: 방향이 다른 쌍이 정확히 하나여야 하고, 근호 안 값이 서로 충분히 떨어져 있어야 한다. 1 미만 쌍(√0.1 vs 0.1)과 음수 쌍은 유형의 핵심이므로 적어도 하나씩 남긴다."
    creative: "(1) 「방향이 같은 것을 모두 고르기」로 바꾸기(★2 유지) (2) 빈칸에 들어갈 부등호를 직접 쓰게 하는 서술형(★2) (3) 무리수 합·차 꼴 쌍(31-13)을 섞으면 공통항 소거 단계가 붙어 ★3."
```

```yaml
- id: GN-M31-31-09
  page: 31
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "기본 문제"
  summary: |
    실수 분류표에서 빈칸(유리수가 아닌 실수)에 해당하는 수 고르기.
  category: "분류표의 빈칸 = 무리수 → 각 수를 정리해 유리수 여부 판정"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "실수의 분류(무리수 찾기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    분류표에서 유리수 아래 칸이 모두 채워져 있으므로 빈칸이 무리수임은 즉시 보이고, √144 = 12 · √((-6)²) = 6 만 정리하면 끝난다.
    통찰 0 · M_total 4(≤ 5) → 절차형 감점 -1 적용 · STEP 1 ★2 출발 → ★1.
  tier: star_1
  mechanism_primary: "빈칸 = 무리수 → 각 선택지 근호 정리 → 근호가 벗겨지지 않는 것 선택"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/31-09.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "선택지의 수를 바꿀 수 있음. 제약: 무리수인 선택지가 정확히 하나여야 하고, √144 · √((-6)²) 처럼 근호가 벗겨져 유리수가 되는 함정 선택지를 최소 하나 남긴다. 순환소수 선택지도 유리수 쪽 함정으로 유용하다."
    creative: "(1) 빈칸 위치를 「정수가 아닌 유리수」로 옮기기(★1 유지) (2) 무리수인 것의 개수를 묻기(★2) (3) 「무리수는 순환하지 않는 무한소수」 같은 진술 판별로 바꾸면 개념 진위형 ★2(31-11 골조)."
```

```yaml
- id: GN-M31-31-10
  page: 31
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "기본 문제"
  summary: |
    한 눈금 1인 모눈종이의 수직선 위 두 정사각형 ABCD, EFGH 에서 AD = AP, EF = EQ 일 때 두 점 P, Q 의 좌표 구하기.
  category: "모눈 정사각형 넓이 → 한 변 길이(무리수) → 기준점에서 좌·우로 이동"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "모눈 위 기울어진 정사각형의 넓이를 세어 한 변 길이를 무리수로 얻고, 그 길이를 수직선 위 이동 거리로 옮긴다(기하 → 대수 전환)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "모눈종이 위 정사각형을 이용해 수직선에 무리수 나타내기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    기울어진 정사각형이라 변의 길이를 직접 셀 수 없고 넓이(5 · 2)를 세어 √5 · √2 로 바꿔야 한다는 것이 이 유형의 전부다.
    그 뒤는 기준점 좌표에 길이를 더하거나 빼는 방향 판단(P는 왼쪽, Q는 오른쪽)만 남는다. 표현 전환 통찰 1개(RT d2) · M_total 7 · STEP 1 ★2 출발 → ★2 유지.
  tier: star_2
  mechanism_primary: "정사각형 넓이 세기 → 한 변 = √넓이 → 기준점 좌표 ± 한 변"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\pt{P}(-1-\sqrt{5})$, $\pt{Q}(1+\sqrt{2})$'
  answer_source: "답지"
  figure: "crop:fig-31-10.png"
  latex: latex-bank/gn-m31/items/31-10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정사각형의 넓이(5 · 2)와 기준점 좌표(-1 · 1)를 바꿀 수 있음. 제약: 모눈 위에서 실제로 그릴 수 있는 기울어진 정사각형의 넓이는 두 정수의 제곱합(2·5·8·10·13·17)뿐이고, 그림 라벨(ABCD·EFGH·P·Q)과 이동 방향은 크롭 이미지에 고정돼 있으므로 좌표를 바꾸면 그림도 함께 바꿔야 한다."
    creative: "(1) P·Q 사이의 거리를 묻기(★3 · 계산 한 단계 추가) (2) 한 점의 좌표를 주고 정사각형의 넓이를 되묻는 역방향(★3 · I-BW d2) (3) 정사각형 대신 직각삼각형과 원으로 바꾸면 대칭 통찰이 붙어 ★3(33-23 골조)."
```

```yaml
- id: GN-M31-31-11
  page: 31
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "기본 문제"
  summary: |
    유리수·무리수와 수직선에 대한 다섯 진술 중 옳은 것 두 개 고르기.
  category: "각 진술을 실수의 분류·조밀성 성질과 대조 → 참인 것 선택"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「두 수 사이에 무수히 많은 유리수가 있다」·「무리수만으로는 수직선을 메울 수 없다」를 실수의 조밀성·완비성 진술로 옮겨 참·거짓을 가른다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "유리수·무리수와 수직선의 성질(옳은 것 고르기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    계산은 없고 개념 진술 다섯 개의 참·거짓 판정이다. 오답 셋이 각각 다른 오개념을 겨냥한다: √2 를 기약분수로 쓸 수 있다(무리수의 정의) · 무리수만으로 수직선을 메운다(유리수 누락) · 두 무리수 사이의 무리수가 하나뿐이다(조밀성).
    동치 변환 통찰 1개(EQV d1) · 추상 진술이라 Mₐ 2 · M_total 7 · STEP 1 ★2 출발 → ★2 유지.
  tier: star_2
  mechanism_primary: "각 진술을 유리수·무리수의 정의와 조밀성으로 판정 → 참인 두 개 선택"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "①, ⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/31-11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "진술 안의 수(√2 · √5 · √7 · -1 · √3)를 바꿀 수 있음. 제약: 정답이 정확히 두 개여야 하고, 조밀성 관련 진술(사이의 수가 무수히 많다)은 참·거짓 한 쌍을 함께 두어야 변별이 산다."
    creative: "(1) 「옳지 않은 것」으로 뒤집기(★2 유지) (2) 옳은 것의 개수를 묻기(★2) (3) 「√5 와 √7 사이의 무리수를 하나 구하시오」 같은 구성형으로 바꾸면 ★3(I-EQV d2)."
```

```yaml
- id: GN-M31-31-12
  page: 31
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "기본 문제"
  summary: |
    수직선 위 네 점 A~D 에 네 수 -√3, √2+1, -√8, 3-√2 를 대응시키고 네 수의 대소 비교하기.
  category: "각 무리수의 근삿값 → 수직선 위 순서 → 점에 대응 + 대소 나열"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "수직선 위 점의 위치(기하)와 수의 대소(대수)를 서로 옮겨, 근삿값 순서를 그대로 점의 순서로 읽는다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "무리수를 수직선 위에 대응시키고 대소 비교하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    √3 ≈ 1.7, √8 ≈ 2.8, √2 ≈ 1.4 정도의 어림만 있으면 네 수의 순서가 정해지고, 수직선의 왼쪽부터 차례로 대응시키면 된다.
    음수 두 개에서 근호 안이 클수록 작아지는 뒤집힘이 함정. 표현 전환 통찰 1개(RT d1) · M_total 6 · STEP 1 ★2 출발 → ★2 유지.
  tier: star_2
  mechanism_primary: "각 수 어림 → 작은 쪽부터 A·B·C·D 대응 → 부등호로 나열"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: 'A: $-\sqrt{8}$, B: $-\sqrt{3}$, C: $3-\sqrt{2}$, D: $\sqrt{2}+1$, $-\sqrt{8}<-\sqrt{3}<3-\sqrt{2}<\sqrt{2}+1$'
  answer_source: "답지"
  figure: "crop:fig-31-12.png"
  latex: latex-bank/gn-m31/items/31-12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 수를 바꿀 수 있음. 제약: 네 수의 근삿값이 서로 충분히 떨어져 그림의 네 점 위치와 일대일로 맞아야 하고(그림의 눈금 위치 고정), 음수 두 개와 합·차 꼴 두 개의 구성을 유지해야 함정이 산다."
    creative: "(1) 점 하나만 묻기(★2) (2) 「가장 큰 수와 가장 작은 수의 차」로 확장(★3) (3) 점 사이의 정수 개수를 묻는 꼴로 바꾸면 ★3(35-u6 골조)."
```

```yaml
- id: GN-M31-31-13
  page: 31
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "기본 문제"
  summary: |
    합·차 꼴 무리수 다섯 쌍의 대소 관계 중 옳지 않은 것 고르기.
  category: "양변의 공통부분 소거 → 남은 두 수를 근호 꼴로 비교"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 수의 대소 비교(공통부분 빼기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    다섯 쌍 모두 양변에서 같은 항을 지우면 √k 와 정수의 비교로 환원된다는 하나의 절차가 반복된다(예: 3 - √10 vs -√10 + √6 → 3 vs √6).
    지운 항이 음수일 때 부등호가 유지되는지 확인하는 것이 함정. 통찰 없음 · 함정 2개 · M_total 6 · 꼭나와 · STEP 1 ★2 출발 → ★2 유지.
  tier: star_2
  mechanism_primary: "양변 공통항 소거 → √k 와 정수 비교 → 부등호 방향 확인"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/31-13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 쌍의 근호 안 수와 정수를 바꿀 수 있음. 제약: 틀린 선택지가 정확히 하나여야 하고, 공통항 소거 후 남는 비교가 제곱수 경계에 너무 가깝지 않아야 한다(√17 vs 4 처럼 한 칸 차이는 의도적 함정으로만 사용)."
    creative: "(1) 「옳은 것」으로 뒤집기(★2 유지) (2) 부등호를 빈칸으로 두고 채우게 하기(★2) (3) 공통항이 바로 보이지 않게 양변을 흐트러뜨리면 변형 단계가 붙어 ★3."
```

```yaml
- id: GN-M31-31-14
  page: 31
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "기본 문제"
  summary: |
    제곱근표에서 √a = 2.452, √b = 2.496 일 때 √((a+b)/2) 의 값 구하기.
  category: "표를 역으로 읽어 a·b 복원 → 평균 계산 → 표를 다시 정방향으로 읽기"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "제곱근표를 값 → 수 방향으로 거꾸로 읽어 a, b 를 먼저 복원해야 평균을 구할 수 있다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "제곱근표에서 값 찾기(역으로 수 찾기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    표를 두 번, 서로 반대 방향으로 쓰는 것이 이 유형의 전부다: 먼저 2.452 · 2.496 이 놓인 칸에서 a, b 를 읽고, 평균을 낸 뒤 그 수를 다시 표에서 찾아 값을 읽는다.
    역방향 읽기 통찰 1개(BW d1) · M_total 6 · STEP 1 ★2 출발 → ★2 유지.
  tier: star_2
  mechanism_primary: "표 역참조로 a·b 복원 → (a+b)/2 → 표 정참조로 값 읽기"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$2.474$"
  answer_source: "답지"
  figure: "crop:fig-31-14.png"
  latex: latex-bank/gn-m31/items/31-14.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 값(2.452 · 2.496)을 표 안의 다른 칸으로 바꿀 수 있음. 제약: (a+b)/2 가 반드시 표에 실려 있는 수(소수 둘째 자리까지)여야 하므로 a, b 는 표의 같은 행 안에서 짝수 칸 간격으로 고르고, 그림의 표 범위를 벗어나면 안 된다."
    creative: "(1) √a + √b 나 √a × √b 를 묻기(★2 유지) (2) √(a+b) 처럼 평균이 아닌 합으로 바꾸면 표 밖으로 나가므로 불가 — 범위 제약 자체를 묻는 문항으로 바꿀 수 있음(★3) (3) 표에 없는 수를 √(100a) = 10√a 로 옮겨 읽게 하면 ★3(I-EQV d2)."
```

### 중단원 마무리하기 STEP 2 발전 문제

```yaml
- id: GN-M31-32-15
  page: 32
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "발전 문제"
  summary: |
    한 변이 각각 3 cm, 5 cm 인 두 정사각형의 넓이의 합과 같은 넓이의 정사각형을 만들 때 그 한 변의 길이.
  category: "두 넓이의 합 → 새 정사각형의 넓이 → 한 변 = √넓이"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정사각형의 넓이와 한 변의 길이(제곱근 활용)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    9 + 25 = 34 를 구한 뒤 한 변 = √34 로 끝난다. 넓이 → 한 변은 이 단원의 도입 예시이고 분기도 함정도 없다.
    통찰 0 · M_total 5(≤ 5) → 절차형 감점 -1 적용 · STEP 2 ★3 출발 → ★2.
  tier: star_2
  mechanism_primary: "3² + 5² = 34 → 한 변 = √34"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: "crop:fig-32-15.png"
  latex: latex-bank/gn-m31/items/32-15.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 변의 길이(3 · 5)를 바꿀 수 있음. 제약: 제곱합이 완전제곱수가 되면(3·4 → 25) 답이 근호 없이 떨어져 유형이 무너지므로 피타고라스 수 조합을 피한다. 선택지에는 6 · 7 처럼 √34 를 어림한 값 근처의 정수를 두어야 함정이 산다."
    creative: "(1) 넓이의 차로 바꾸기(★2 유지) (2) 정사각형 세 개로 늘리기(★2) (3) 새 정사각형의 한 변이 정수가 되도록 하는 조건을 되묻는 역방향(★3 · I-BW d2) (4) 둘레의 합과 넓이의 합을 섞으면 함정이 늘어 ★3."
```

```yaml
- id: GN-M31-32-16
  page: 32
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "발전 문제"
  summary: |
    A = √169 - (√0.5)² ÷ √((-1/50)²), B = -(-√6)² + √16 × √((-3)²) 일 때 A + B 의 값.
  category: "각 항의 근호·제곱 정리 → 부호 확정 → A·B 계산 후 합"
  M: {s: 2, k: 3, a: 1, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "제곱근을 포함한 식의 값(A·B로 두고 계산)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    (√0.5)² 는 0.5, √((-1/50)²) 는 1/50 로 형태가 서로 다른 세 가지 근호·제곱 조합을 각각 다른 규칙으로 처리해야 한다.
    -(-√6)² 의 이중 부호가 대표 함정. 통찰은 없고 계산량이 유형의 본질이라 Mₖ 3 · M_total 8 · STEP 2 ★3 출발 → ★3 유지(통찰 없이 계산 마찰로만 버티는 구성이라 변형 시 Mₖ를 더 올리지 않는다).
  tier: star_3
  mechanism_primary: "각 근호·제곱 정리 → A = 13 - 25, B = -6 + 12 → A + B"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$-6$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/32-16.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 항의 수(169 · 0.5 · 1/50 · 6 · 16 · 3)를 바꿀 수 있음. 제약: √169 · √16 은 완전제곱수여야 하고, (√0.5)² ÷ √((1/50)²) 는 결과가 정수로 떨어지도록 소수와 분수를 짝지어야 한다((√p)² ÷ (1/q) = pq)."
    creative: "(1) A - B · AB 로 묻는 식을 바꾸기(★3 유지) (2) 항 하나를 문자로 두고 A + B = 0 이 되는 값을 되묻는 역방향(★3~4 · I-BW d2) (3) 근호 안에 문자를 넣고 부호 조건을 붙이면 유형이 √(A²) 부호 판정 쪽으로 옮겨 감(★3)."
```

```yaml
- id: GN-M31-32-17
  page: 32
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "발전 문제"
  summary: |
    0 < a < 1 일 때 √((a - 1/a)²) - √((a + 1/a)²) + √((-2a)²) 을 간단히 하기.
  category: "0 < a < 1 → 1/a > 1 > a 로 각 항의 부호 확정 → 근호 벗기고 정리"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "0 < a < 1 을 「1/a > 1 > a 이므로 a - 1/a < 0」 으로 옮겨야 첫 항의 부호가 정해진다 — 범위가 역수의 크기를 통해 간접적으로 부호를 결정하는 구조"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "0 < a < 1 조건에서 √(A²) 꼴 식 간단히 하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    30-06 과 달리 부호를 정할 대상이 일차식이 아니라 a 와 1/a 의 차라서, 구간을 역수의 크기 관계로 한 번 옮겨야 한다.
    나머지 두 항(a + 1/a > 0, -2a < 0)은 바로 정해지고 세 항이 서로 상쇄돼 0 이 된다. 동치 변환 통찰 1개(EQV d2) · Mₐ 2 · 함정 2개 · M_total 8 · STEP 2 ★3 출발 → ★3 유지.
  tier: star_3
  mechanism_primary: "0 < a < 1 → (1/a - a) - (a + 1/a) + 2a → 0"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$0$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/32-17.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간(0 < a < 1)과 세 항의 계수를 바꿀 수 있음. 제약: 구간이 a 와 1/a 의 대소를 하나로 확정해야 하고(a > 1 로 바꾸면 첫 항 부호가 반대), 마지막 항의 계수를 바꾸면 결과가 0 으로 떨어지지 않으니 답의 모양을 다시 정해야 한다."
    creative: "(1) a > 1 로 조건을 뒤집기(★3 유지 · 부호만 반대) (2) 조건을 -1 < a < 0 으로 바꿔 절댓값 처리가 한 겹 더 붙게 하기(★4) (3) 결과가 0 임을 이용해 「식의 값이 0 이 되는 a 의 범위」를 되묻는 역방향(★4 · I-BW d2)."
```

```yaml
- id: GN-M31-32-18
  page: 32
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "발전 문제"
  summary: |
    √(200/x) 가 자연수가 되도록 하는 모든 자연수 x 의 값의 합 구하기.
  category: "200/x 가 제곱수인 약수 조건 → 가능한 몫 열거 → x 들의 합"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「√(200/x) 가 자연수」를 「x 는 200 의 약수이고 몫 200/x 가 제곱수」라는 두 겹 조건으로 옮긴다 — x 를 직접 찾지 않고 몫 쪽을 제곱수로 지정하는 것이 골조"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "√(N/x) 가 자연수가 되는 모든 자연수 x"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    x 를 하나씩 대입하면 끝이 없고, 200 = 2³·5² 에서 몫이 제곱수(1 · 4 · 25 · 100)가 되는 경우를 먼저 세우면 x 가 자동으로 나온다는 방향 전환이 핵심이다.
    「가장 작은」이 아니라 「모든 값의 합」이라 빠뜨림이 곧 오답. 동치 변환 통찰 1개(EQV d2) · 열거 단계로 Mₛ 3 · M_total 8 · STEP 2 ★3 출발 → ★3 유지.
  tier: star_3
  mechanism_primary: "200 = 2³·5² → 몫이 제곱수인 약수만 남김 → 해당 x 들의 합"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$260$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/32-18.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자 200 을 다른 수(72 · 180 · 288)로 바꿀 수 있음. 제약: 소인수분해했을 때 제곱수 몫이 두세 개는 나오도록 지수를 잡아야 「모든 값의 합」이 의미를 갖고, 지수가 너무 크면 열거가 길어져 계산 마찰만 는다."
    creative: "(1) 「값의 합」 대신 「개수」·「가장 큰 값」으로 바꾸기(★3 유지) (2) √(200x) 꼴로 뒤집으면 무한히 많아지므로 범위 제한을 붙여야 함(★4) (3) 조건을 √(N/x) 가 무리수가 되는 x 의 개수로 뒤집으면 여사건 전략이 붙어 ★4(33-28 골조)."
```

```yaml
- id: GN-M31-32-19
  page: 32
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "발전 문제"
  summary: |
    √(58 + a) = b 에서 b 가 자연수가 되는 두 번째로 작은 자연수 a 와 그때의 b 에 대하여 a - b 의 값.
  category: "58 + a 가 58 보다 큰 제곱수 → 작은 쪽부터 두 번째 제곱수 선택 → a, b 결정"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「b 가 자연수」를 「58 + a 가 58 보다 큰 제곱수」로 옮겨, a 를 찾는 문제를 제곱수를 순서대로 고르는 문제로 바꾼다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "√(N + a) 가 자연수가 되는 a 구하기(순서 지정)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    a 가 자연수라 58 + a > 58 이므로 후보 제곱수는 64, 81, 100, … 이고 「두 번째로 작은」이 81 을 지목한다.
    첫 번째(64)를 답으로 쓰는 것이 대표 오답이라 순서 지정이 함정의 본체. 동치 변환 통찰 1개(EQV d1) · 함정 2개(T-범위 자연수 · T-경계 순서) · M_total 8 · 꼭나와 · STEP 2 ★3 출발 → ★3 유지.
  tier: star_3
  mechanism_primary: "58 + a 가 제곱수 → 64, 81, … 중 두 번째 81 → a = 23, b = 9 → a - b"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/32-19.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "58 과 순서(두 번째)를 바꿀 수 있음. 제약: 58 이 제곱수 바로 아래에 오면 첫 번째 후보와의 간격이 좁아 함정이 약해지므로 제곱수 사이 중간쯤에 두고, a 가 자연수여야 하므로 58 + a > 58 조건에서 등호를 허용하지 않는다."
    creative: "(1) 「가장 작은」으로 되돌리면 ★2 (2) 세 번째·네 번째로 바꾸면 열거만 늘어 ★3 유지 (3) √(58 - a) 로 부호를 뒤집으면 a < 58 범위 조건이 추가돼 ★4 (4) a + b 나 ab 로 묻는 식을 바꾸면 ★3 유지."
```

```yaml
- id: GN-M31-32-20
  page: 32
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "발전 문제"
  summary: |
    √((√15 - 4)²) - √((4 - √15)²) 을 간단히 하기.
  category: "√15 와 4 의 대소 판정 → 두 항 모두 4 - √15 → 차가 0"
  M: {s: 1, k: 1, a: 1, t: 2}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "15 < 16 에서 √15 < 4 를 확정해 두 근호를 모두 4 - √15 로 벗겨야 한다 — 근호 안 부호 판정이 문제의 전부"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "무리수가 들어간 √(A²) 의 부호 판정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 근호 안이 서로 부호만 반대인 같은 식이라 √(A²) 의 성질상 둘 다 같은 양수 4 - √15 가 되고 차는 0 이다. 부호 판정 한 번 뒤에는 남는 단계가 없다.
    통찰 1개지만 depth 1 이고 Mₛ 1 · M_total 5 로 이 구역 최저 — STEP 2 ★3 출발에서 -1 하여 ★2.
  tier: star_2
  mechanism_primary: "√15 < 4 → (4 - √15) - (4 - √15) → 0"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$0$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/32-20.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "√15 와 4 를 다른 쌍(√7 과 3 · √26 과 5)으로 바꿀 수 있음. 제약: 근호 안 수가 정수의 제곱과 가까우면서 제곱수는 아니어야 하고(대소 판정이 한 줄), 두 항의 괄호 안이 서로 부호만 반대여야 상쇄 구조가 유지된다."
    creative: "(1) 두 항을 더하기(- 를 + 로)로 바꾸면 2(4 - √15) 가 나와 ★2 유지 (2) 한쪽 괄호의 수를 다르게 해 상쇄가 안 되게 하면 계산이 붙어 ★3 (3) 문자를 넣어 √((√a - b)²) 꼴로 일반화하고 a, b 의 대소로 경우를 나누면 ★4(I-MI d2)."
```

```yaml
- id: GN-M31-32-21
  page: 32
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "발전 문제"
  summary: |
    부등식 2 < √(x/5) < 5/2 를 만족시키는 자연수 x 의 개수.
  category: "각 변이 양수 → 제곱하여 부등식 변환 → x 의 범위 → 자연수 개수"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "세 변이 모두 양수임을 확인하고 제곱해 근호를 없앤 부등식으로 옮긴다(부등호 방향 유지 근거가 양수 조건)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "제곱근을 포함한 부등식을 만족시키는 자연수의 개수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    제곱해서 4 < x/5 < 25/4 로 옮기고 5 를 곱하면 x 의 범위가 나온다. 양 끝이 정수가 아니라 경계 포함 여부와 개수 세기에서 ±1 오류가 나기 쉽다.
    동치 변환 통찰 1개(EQV d1) · 함정 2개(T-경계 엄격 부등호 · T-범위 자연수) · M_total 7 · STEP 2 ★3 출발 → ★3 유지.
  tier: star_3
  mechanism_primary: "각 변 제곱 → 4 < x/5 < 25/4 → x 범위 → 자연수 개수 세기"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/32-21.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "양 끝 값(2 · 5/2)과 분모 5 를 바꿀 수 있음. 제약: 세 변이 모두 양수여야 제곱이 동치이고, 끝 값을 제곱했을 때 x 의 경계가 정수가 되면 엄격 부등호 함정이 사라지므로 한쪽은 분수로 두는 것이 좋다."
    creative: "(1) 개수 대신 최댓값·최솟값을 묻기(★3 유지) (2) 한쪽 부등호를 ≤ 로 바꿔 경계 포함을 비대칭으로 만들기(★3) (3) 35-u5처럼 음수 부등식으로 감싸 방향 반전을 한 겹 더 넣으면 ★3~4 (4) x 를 정수로 넓히면 아래쪽 경계 처리가 추가돼 ★3."
```

```yaml
- id: GN-M31-32-22
  page: 32
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "발전 문제"
  summary: |
    a 가 유리수일 때 항상 무리수인 것 두 개 고르기(a + 1, 3a, a - √5, √2 a, a + √7).
  category: "유리수 ± 무리수는 무리수 → 곱셈 꼴은 a = 0 반례 확인"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「항상」을 반례 존재 여부로 읽어, √2 a 에서 a = 0 인 경우와 a ≠ 0 인 경우를 나눠 따져야 한다 — 한 선택지가 두 경우로 갈린다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "유리수와 무리수의 합·곱이 항상 무리수인지 판별"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    합·차 꼴(a - √5, a + √7)은 무리수임이 곧바로 나오지만 곱셈 꼴 √2 a 는 a = 0 이라는 단 하나의 반례로 「항상」이 깨진다는 것이 이 문항의 변별점이다.
    a + 1 · 3a 는 유리수의 닫힘으로 즉시 탈락. 다중 해석 통찰 1개(MI d2) · 문자 일반화로 Mₐ 2 · M_total 7 · STEP 2 ★3 출발 → ★3 유지.
  tier: star_3
  mechanism_primary: "유리수 닫힘으로 ①② 탈락 → 합·차 꼴은 항상 무리수 → 곱 꼴은 a = 0 반례로 탈락"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "③, ⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/32-22.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "무리수(√5 · √2 · √7)와 유리수 계수(1 · 3)를 바꿀 수 있음. 제약: 정답이 정확히 두 개여야 하고, 곱셈 꼴 선택지(√k a)는 반드시 남겨야 a = 0 반례 함정이 산다. 무리수를 √4 처럼 제곱수로 바꾸면 선택지가 통째로 무너진다."
    creative: "(1) 「항상 유리수인 것」으로 뒤집기(★3 유지) (2) a 에 「0 이 아닌 유리수」 조건을 붙이면 반례가 사라져 ★2 (3) a, b 두 무리수의 합·곱으로 확장하면 경우가 늘어 ★4 (4) 반례를 직접 들어 설명하게 하는 서술형으로 바꾸면 ★3 유지."
```

```yaml
- id: GN-M31-33-23
  page: 33
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "발전 문제"
  summary: |
    모눈종이 위 직각삼각형 ABC 와 A 를 중심으로 AC 를 반지름으로 하는 원이 수직선과 만나는 두 점 P, Q 에서 Q 에 대응하는 수가 √13 - 3 일 때 P 에 대응하는 수 구하기.
  category: "Q 좌표에서 중심과 반지름 역산 → 중심 대칭으로 반대쪽 교점"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "원과 수직선의 두 교점이 중심에 대해 대칭임을 써서, Q = (중심) + (반지름) 에서 중심 -3 과 반지름 √13 을 읽어내고 P = (중심) - (반지름) 으로 한 번에 옮긴다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "수직선 위 원과 무리수(중심에 대해 대칭인 두 점)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    삼각형의 두 변에서 반지름 √13 을 구해도 되지만, 주어진 Q 값 자체가 중심과 반지름을 담고 있어 대칭만 쓰면 계산 없이 P 가 나온다.
    부호를 반대로 더해 -3 + √13 을 쓰는 것이 대표 오답. 대칭 통찰 1개(SYM d2) · M_total 6 · 꼭나와 · STEP 2 ★3 출발 → ★3 유지.
  tier: star_3
  mechanism_primary: "Q = -3 + √13 → 중심 -3 · 반지름 √13 → P = -3 - √13"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-3-\sqrt{13}$'
  answer_source: "답지"
  figure: "crop:fig-33-23.png"
  latex: latex-bank/gn-m31/items/33-23.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직각삼각형의 두 변(2 · 3 → 빗변 √13)과 중심 좌표(-3)를 바꿀 수 있음. 제약: 빗변의 제곱이 제곱수가 아니어야 무리수가 남고, 모눈에서 실제로 그릴 수 있도록 두 변이 정수여야 한다. 그림의 A·C 위치와 원의 크기는 크롭에 고정돼 있어 값을 바꾸면 그림도 바꿔야 한다."
    creative: "(1) P 를 주고 Q 를 묻기(대칭 방향만 반대 · ★3 유지) (2) PQ 의 길이를 묻기(★3 · 2×반지름) (3) Q 값을 주지 않고 삼각형에서 직접 반지름을 구하게 하면 피타고라스 단계가 붙어 ★3~4(I-XU) (4) 원을 두 개로 늘려 교점 네 개를 대소 비교하면 ★4."
```

```yaml
- id: GN-M31-33-24
  page: 33
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "발전 문제"
  summary: |
    반지름이 각각 3, √7 + 1, √23 - 2 인 세 원 P, Q, R 중 넓이가 가장 큰 원 구하기.
  category: "넓이 비교를 반지름 비교로 환원 → 세 수의 대소 비교"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "넓이 πr² 을 직접 계산하지 않고 반지름이 양수이므로 넓이 대소 = 반지름 대소로 바꾼다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "무리수의 대소 비교 활용(도형의 크기 비교)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    π 와 제곱을 붙들면 계산이 커지지만 반지름 비교로 환원하면 3 vs √7 + 1 → 2 vs √7, 3 vs √23 - 2 → 5 vs √23 두 번의 근호 비교로 끝난다.
    합·차 꼴이라 공통항을 옮겨 정수와 √k 를 맞대는 단계가 필요하다. 표현 전환 통찰 1개(RT d1) · M_total 6 · STEP 2 ★3 출발 → ★3 유지.
  tier: star_3
  mechanism_primary: "넓이 대소 = 반지름 대소 → 2 vs √7, 5 vs √23 비교 → Q"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$Q$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/33-24.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 반지름(3 · √7 + 1 · √23 - 2)을 바꿀 수 있음. 제약: 세 값이 서로 가깝되 근호 안 비교가 제곱수 경계를 넘지 않아야 하고(√7 vs 2 → 7 > 4), 반지름이 모두 양수여야 넓이 환원이 성립한다."
    creative: "(1) 가장 작은 원을 묻기(★3 유지) (2) 세 원의 넓이를 큰 것부터 나열하게 하기(★3) (3) 원 대신 정사각형·정삼각형을 섞으면 도형별 넓이 공식이 달라져 환원이 깨지고 ★4 (4) 둘레와 넓이를 동시에 비교시키면 ★3 유지."
```

```yaml
- id: GN-M31-33-25
  page: 33
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "발전 문제"
  summary: |
    √2 와 √15 사이에 있는 수가 아닌 것 고르기(2, √7, √2 + 3, √15 - 1, (√2 + √15)/2).
  category: "각 수를 √2·√15 와 양쪽으로 비교 → 구간 밖의 것 선택"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「사이에 있다」를 두 부등식 √2 < x < √15 로 옮기고, 각 수를 근호 꼴이나 어림값으로 바꿔 양쪽 경계와 비교한다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 무리수 사이에 있는 수 찾기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 경계를 모두 확인해야 하므로 비교가 선택지마다 두 번씩이고, 평균 (√2 + √15)/2 는 계산 없이 항상 두 수 사이라는 성질로 즉시 통과시킬 수 있다.
    √2 + 3 만 위쪽 경계를 넘는다. 동치 변환 통찰 1개(EQV d1) · M_total 6 · STEP 2 ★3 출발 → ★3 유지.
  tier: star_3
  mechanism_primary: "√2 ≈ 1.4, √15 ≈ 3.9 로 구간 확정 → 각 선택지 양쪽 비교 → 벗어나는 것 선택"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/33-25.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간의 두 끝(√2 · √15)과 선택지의 수를 바꿀 수 있음. 제약: 구간 밖 선택지가 정확히 하나여야 하고, 두 끝의 평균 꼴 선택지는 항상 구간 안이므로 정답 후보로 쓸 수 없다. 구간이 너무 넓으면 변별이 죽는다."
    creative: "(1) 「사이에 있는 것」을 모두 고르기(★3 유지) (2) 구간 안의 정수 개수를 묻기(★3 · 35-u6 골조) (3) 두 수 사이의 무리수를 직접 하나 만들게 하면 구성형 ★4 (4) 구간 끝을 문자로 두면 Mₐ 상승 ★4."
```

### 중단원 마무리하기 STEP 3 실력 UP

```yaml
- id: GN-M31-33-26
  page: 33
  vendor_label: "중단원 마무리하기 STEP 3 실력 UP"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 UP"
  summary: |
    정사각형 천 조각 A(넓이 15n), B(넓이 24 - n)와 직사각형 C 를 이어 붙여 직사각형 조각보를 만들 때, 각 변의 길이가 자연수이면 C 의 넓이는? (n 은 자연수)
  category: "두 넓이가 모두 제곱수 → n 하나로 통합 → 배치에서 C 의 두 변 표현"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「A 의 변이 자연수」와 「B 의 변이 자연수」와 「0 < 24 - n」 이라는 독립 조건 셋을 n 에 대한 하나의 조건으로 묶어 n = 15 를 확정한다"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "조각보 배치(그림)를 길이 관계로 옮겨, C 의 가로는 B 의 한 변, 세로는 A 의 한 변에서 B 의 한 변을 뺀 길이임을 읽는다"
  insight_count: 2
  depth_score: 4.00
  type_id: null
  type_hint: "넓이가 제곱수가 되는 조건(정사각형 조각 잇기)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    15n 이 제곱수이려면 n = 15k² 인데 24 - n 도 양의 제곱수여야 하므로 n < 24 에서 n = 15 만 남는다 — 두 제곱수 조건이 서로를 좁히는 구조가 이 문항의 본체다.
    그 뒤 A 의 변 15, B 의 변 3 을 그림 배치에 넣어 C 의 두 변을 표현해야 넓이가 나온다. 통찰 2개(CON d2 · RT d2) · M_total 9(이 범위 상위) · STEP 3 ★4 출발 → ★4 유지.
  tier: star_4
  mechanism_primary: "15n · 24 - n 이 모두 제곱수 → n = 15 → A 변 15, B 변 3 → C = 3 × (15 - 3)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$36$"
  answer_source: "답지"
  figure: "crop:fig-33-26.png"
  latex: latex-bank/gn-m31/items/33-26.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 15 와 상한 24 를 바꿀 수 있음. 제약: 15n 이 제곱수가 되는 n = 15k² 중 24 - n 도 양의 제곱수인 것이 정확히 하나여야 하고(둘 이상이면 답이 갈린다), A 의 변이 B 의 변보다 커야 그림 배치가 성립한다. 그림의 A·B·C 배치와 라벨은 크롭에 고정."
    creative: "(1) C 의 넓이 대신 조각보 전체의 넓이·둘레를 묻기(★4 유지) (2) n 의 값을 묻는 것으로 끝내면 배치 전환이 빠져 ★3 (3) B 를 직사각형으로 바꾸면 제곱수 조건이 하나 줄어 ★3 (4) 조건을 만족하는 n 이 여러 개가 되도록 상한을 키우고 「모든 경우」를 묻게 하면 열거가 붙어 ★4~5."
```

```yaml
- id: GN-M31-33-27
  page: 33
  vendor_label: "중단원 마무리하기 STEP 3 실력 UP"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 UP"
  summary: |
    자연수 x 에 대하여 √x 이하의 자연수의 개수를 N(x) 라 할 때 N(1) + N(2) + … + N(20) 의 값.
  category: "N(x) = k ⇔ k² ≤ x < (k+1)² → 구간마다 같은 값 → 개수 × 값의 합"
  M: {s: 3, k: 2, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「√x 이하의 자연수의 개수」를 「N(x) = k ⇔ k² ≤ x < (k+1)²」 라는 제곱수 구간 조건으로 옮긴다"
    - step: 2
      type: I-PD
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "N(x) 가 제곱수와 제곱수 사이에서 일정하고 구간의 길이가 1, 3, 5, 7 로 늘어난다는 규칙을 발견해 20 개를 하나씩 세지 않고 묶어 더한다"
  insight_count: 2
  depth_score: 4.00
  type_id: null
  type_hint: "새로 정의된 함수 N(x) = (√x 이하 자연수의 개수) 의 합"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    정의를 그대로 20 번 적용하면 풀리기는 하지만, N(x) 가 제곱수 경계에서만 바뀐다는 규칙을 잡아야 묶음으로 더할 수 있다.
    마지막 구간(16~20)이 (k+1)² 에 못 미쳐 잘린다는 점이 경계 함정. 새 기호 정의라 Mₐ 3 · 통찰 2개(EQV d2 · PD d2) · M_total 10(이 범위 최대) · STEP 3 ★4 출발 → ★4 유지.
  tier: star_4
  mechanism_primary: "N(x) = k ⇔ k² ≤ x < (k+1)² → 구간별 개수 × 값 → 잘린 마지막 구간 보정 후 합"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: "$54$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/33-27.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상한 20 을 바꿀 수 있음. 제약: 상한이 제곱수 직전(24)·제곱수(25)면 마지막 구간이 딱 떨어져 경계 함정이 사라지고, 상한이 너무 크면 구간 수만 늘어 계산 마찰이 된다. 하한 1 은 N(1) = 1 이 되도록 유지한다."
    creative: "(1) 정의를 「√x 미만」으로 바꾸면 제곱수에서 값이 달라져 경계 함정이 강해짐(★4~5 · I-VF) (2) 합 대신 N(x) = 3 인 x 의 개수를 묻는 역방향(★4 · I-BW d2) (3) 상한을 문자 n 으로 두고 합을 일반항으로 표현하게 하면 ★5 (4) N(x) 를 √x 이하 짝수의 개수로 바꾸면 규칙이 달라져 재발견이 필요 ★4."
```

```yaml
- id: GN-M31-33-28
  page: 33
  vendor_label: "중단원 마무리하기 STEP 3 실력 UP"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 UP"
  summary: |
    100 이하의 자연수 n 에 대하여 √(2n) 과 √(5n) 이 모두 무리수가 되도록 하는 n 의 개수.
  category: "무리수 조건을 여사건(유리수가 되는 n)으로 뒤집기 → 두 집합 세고 전체에서 빼기"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-SC
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「둘 다 무리수」를 직접 세는 갈래 대신 「하나라도 유리수」인 n 을 세어 전체 100 에서 빼는 여사건 갈래를 고른다"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「√(2n) 이 유리수」를 「2n 이 제곱수」 즉 「n = 2k²」 로 옮긴다(5n 도 같은 방식으로 n = 5k²)"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "√(an) 이 무리수가 되는 n 의 개수(여사건)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    무리수 조건을 그대로 세는 것은 불가능하고, 유리수가 되는 n 이 n = 2k² · n = 5k² 꼴뿐임을 알아내 100 이하에서 열거한 뒤 빼야 한다.
    두 집합이 겹치지 않는지 확인하는 단계가 마지막에 필요하다. 통찰 2개(SC d1 · EQV d2) · M_total 9 · STEP 3 ★4 출발 → ★4 유지.
    [분류 이슈] SC 가 포함돼 ★5 자격은 있으나 통찰 3개 기준에 미달하고 중3 단원 마무리 수준의 열거라 ★4 로 둠.
  tier: star_4
  mechanism_primary: "√(2n) 유리수 ⇔ n = 2k², √(5n) 유리수 ⇔ n = 5k² → 100 이하 각각 열거 → 100 - (7 + 4)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$89$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/33-28.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상한 100 과 두 계수(2 · 5)를 바꿀 수 있음. 제약: 두 계수는 서로 다른 소수여야 두 집합이 겹치지 않고(같은 소수면 중복 제거가 필요해 유형이 바뀐다), 상한이 작으면 열거가 몇 개 안 돼 변별이 죽는다."
    creative: "(1) 「적어도 하나가 유리수」로 뒤집으면 여사건 선택이 사라져 ★3 (2) 계수를 2 와 8 처럼 서로소가 아니게 바꾸면 중복 제거가 붙어 ★5(I-VF) (3) 조건을 √(2n) 은 유리수, √(5n) 은 무리수로 엇갈리게 하면 교집합·차집합 처리가 생겨 ★4~5 (4) 상한을 문자로 두면 ★5."
```

### 서술형 대비 문제

```yaml
- id: GN-M31-34-e1
  page: 34
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 예제"
  summary: |
    a < b, ab < 0 일 때 √((-a)²) + √(b²) - √((5a)²) + √((-2b)²) 을 간단히 하기. [7점]
  category: "두 조건을 합쳐 a < 0 < b 확정 → 각 항 부호대로 근호 벗기기 → 동류항 정리"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「ab < 0(부호가 다름)」과 「a < b(크기 순서)」를 합쳐 a < 0 < b 라는 하나의 부호 확정으로 옮긴다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "부호 조건이 주어진 √(A²) 꼴 식 간단히 하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    조건이 부호를 직접 주지 않고 곱의 부호와 대소 두 개로 나눠 주는 것이 30-05 · 30-06 과의 차이다 — 두 조건을 합쳐야 a < 0 < b 가 나온다.
    네 항의 계수 부호(-a · b · 5a · -2b)를 각각 처리해야 하고 배점 7점의 서술형이라 근거 서술까지 요구된다. 동치 변환 통찰 1개(EQV d1) · Mₐ 2 · 함정 2개 · M_total 7 · 서술형 ★3 출발 → ★3 유지.
  tier: star_3
  mechanism_primary: "ab < 0 & a < b → a < 0 < b → (-a) + b - (-5a) + 2b → 4a + 3b"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$4a+3b$"
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/34-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 항의 계수(-1 · 1 · 5 · -2)를 바꿀 수 있음. 제약: a < 0 < b 아래에서 각 근호 안의 부호가 하나로 확정돼야 하고(ka 꼴은 k 의 부호만 보면 됨), a + b 처럼 부호가 정해지지 않는 항을 넣으면 유형이 깨진다."
    creative: "(1) 조건을 a > b, ab < 0 으로 바꾸면 부호가 반대로 확정돼 ★3 유지 (2) 항에 a - b 나 a + b 를 섞으면 대소까지 써야 해서 ★4 (3) 결과 식을 주고 조건을 되묻는 역방향(★4 · I-BW d2) (4) 조건을 |a| > |b| 로 주면 절댓값 해석이 붙어 ★4."
```

```yaml
- id: GN-M31-34-u1
  page: 34
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 유제"
  summary: |
    a - b > 0, a/b < 0 일 때 √(16a²) - √((-b)²) + √((b - 4a)²) 을 간단히 하기. [7점]
  category: "두 조건으로 a > 0 > b 확정 → b - 4a 의 부호까지 판정 → 근호 벗기고 정리"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「a/b < 0」 을 부호가 다름으로, 「a - b > 0」 을 a > b 로 옮겨 합치면 a > 0 > b 가 나오고, 그래야 b - 4a < 0 까지 판정된다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "부호 조건이 주어진 √(A²) 꼴 식 간단히 하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    34-e1 과 같은 골조이되 조건이 분수 꼴(a/b < 0)로 위장돼 있고, 마지막 항이 단항식이 아니라 b - 4a 라 두 문자의 부호를 합쳐 한 번 더 판정해야 한다.
    정리하면 b 가 상쇄돼 8a 만 남는 것이 확인 포인트. 동치 변환 통찰 1개(EQV d1) · Mₐ 2 · 함정 2개 · M_total 7 · 서술형 ★3 출발 → ★3 유지.
  tier: star_3
  mechanism_primary: "a > 0 > b → 4a + b + (4a - b) → 8a"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$8a$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/34-u1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수(16 · 4)를 바꿀 수 있음. 제약: √(16a²) 처럼 근호 안 계수는 제곱수여야 벗겨지고, b - ka 꼴 항은 a > 0 > b 아래에서 부호가 항상 음수로 확정되도록 k > 0 이어야 한다. 상쇄가 일어나도록 계수를 맞추면 답이 단항식으로 깔끔해진다."
    creative: "(1) 조건을 b - a > 0, ab < 0 으로 바꾸기(★3 유지 · 부호 반대) (2) 마지막 항을 4a - b 로 바꿔 상쇄가 안 되게 하면 ★3 유지하되 답이 복잡 (3) a/b < 0 대신 a²b < 0 처럼 한 겹 더 감싸면 ★4 (4) 조건 하나를 빼고 경우를 나누게 하면 ★4(I-MI d2)."
```

```yaml
- id: GN-M31-34-e2
  page: 34
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 예제"
  summary: |
    한 변의 길이가 1 인 정사각형 ABCD 에서 CA = CP, BD = BQ 이고 점 Q 에 대응하는 수가 5 + √2 일 때 점 P 에 대응하는 수 구하기. [7점]
  category: "Q 값에서 기준점 B 역산 → 정사각형 한 변만큼 떨어진 C 의 좌표 → P = C - 대각선"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "구하려는 P 가 아니라 주어진 Q 에서 출발해 Q = B + √2 로 B 의 좌표를 역산하고, 거기서 한 변 1 만큼 옮겨 C 를 얻은 뒤에야 P 를 쓸 수 있다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "정사각형의 대각선을 이용해 수직선 위 무리수 나타내기(좌표 역산)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    대각선 길이 √2 자체는 바로 나오지만, 좌표가 하나도 주어지지 않고 Q 값만 주어져 기준점을 거꾸로 세워야 하는 것이 이 문항의 본체다.
    P 는 C 에서 왼쪽으로 √2 만큼이라 부호 방향이 Q 와 반대라는 점이 대표 오답 지점. 역방향 통찰 1개(BW d2) · 함정 2개(T-부호 방향 · T-표기) · M_total 6 · 서술형 ★3 출발 → ★3 유지.
  tier: star_3
  mechanism_primary: "Q = B + √2 = 5 + √2 → B = 5 → C = 6 → P = 6 - √2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$6-\sqrt{2}$'
  answer_source: "본문 답"
  figure: "crop:fig-34-e2.png"
  latex: latex-bank/gn-m31/items/34-e2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정사각형의 한 변(1)과 주어진 Q 값(5 + √2)을 바꿀 수 있음. 제약: 대각선은 (한 변)×√2 이므로 한 변을 k 로 바꾸면 √2 가 k√2 로 따라 바뀌어야 하고, 주어진 값의 무리수 부분이 대각선 길이와 일치해야 역산이 성립한다. 그림의 B·C 위치와 P·Q 방향은 크롭에 고정."
    creative: "(1) P 를 주고 Q 를 묻기(34-u2 골조 · ★3 유지) (2) PQ 의 길이를 묻기(★3) (3) 정사각형 대신 직사각형으로 바꾸면 대각선이 √(a²+b²) 가 되어 피타고라스가 붙고 ★4 (4) 좌표를 문자로 주면 Mₐ 상승 ★4."
```

```yaml
- id: GN-M31-34-u2
  page: 34
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 유제"
  summary: |
    한 변의 길이가 2 인 정사각형 ABCD 에서 CA = CP, BD = BQ 이고 점 P 에 대응하는 수가 1 - √8 일 때 점 Q 에 대응하는 수 구하기. [7점]
  category: "P 값에서 기준점 C 역산 → 한 변만큼 떨어진 B 의 좌표 → Q = B + 대각선"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "주어진 P = C - √8 에서 C 의 좌표를 역산한 뒤 한 변 2 만큼 왼쪽으로 옮겨 B 를 얻고, 그제야 Q = B + √8 을 쓸 수 있다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "정사각형의 대각선을 이용해 수직선 위 무리수 나타내기(좌표 역산)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    34-e2 와 같은 골조를 방향만 바꾼 유제다. 한 변이 2 라 대각선이 2√2 = √8 이고, 주어진 값의 무리수 부분이 그대로 대각선 길이라는 점을 확인해야 역산이 시작된다.
    P 쪽은 빼기, Q 쪽은 더하기라는 방향 구분이 함정. 역방향 통찰 1개(BW d2) · M_total 6 · 서술형 ★3 출발 → ★3 유지.
  tier: star_3
  mechanism_primary: "P = C - √8 = 1 - √8 → C = 1 → B = -1 → Q = -1 + √8"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-1+\sqrt{8}$'
  answer_source: "답지"
  figure: "crop:fig-34-u2.png"
  latex: latex-bank/gn-m31/items/34-u2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "한 변(2)과 주어진 P 값(1 - √8)을 바꿀 수 있음. 제약: 대각선 √8 은 한 변 2 에서 나온 값이므로 한 변을 바꾸면 무리수 부분도 함께 바뀌어야 하고, 답을 √8 로 둘지 2√2 로 둘지 표기를 전사본과 맞춰야 한다. 그림 배치는 크롭에 고정."
    creative: "(1) 두 점 사이의 거리를 묻기(★3 유지) (2) 정사각형을 두 개 이어 붙이면 기준점이 하나 더 생겨 ★4 (3) 주어진 값에 정수 부분을 문자로 두면 ★4 (4) 한 변의 길이 자체를 되묻는 역방향(★4 · I-BW d2)."
```

```yaml
- id: GN-M31-35-u3
  page: 35
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 유제"
  summary: |
    √256 의 음의 제곱근을 A, (-√(9/16))² 의 양의 제곱근을 B 라 할 때 AB 의 값. [6점]
  category: "근호·제곱 먼저 정리 → 각각의 지정된 제곱근 → 곱"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "제곱근의 제곱근(중첩 표기)과 A·B로 두고 계산하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    √256 = 16 → 음의 제곱근 -4, (-√(9/16))² = 9/16 → 양의 제곱근 3/4 로 30-03 과 완전히 같은 중첩 구조다.
    통찰 없음 · M_total 6 · 배점도 이 구역 최저(6점) — 서술형 ★3 출발에서 -1 하여 ★2(30-03 · 35-u4 와 같은 층에 둔다).
  tier: star_2
  mechanism_primary: "√256 = 16 → A = -4 · (-√(9/16))² = 9/16 → B = 3/4 → AB"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$-3$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/35-u3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "256 과 9/16 을 바꿀 수 있음. 제약: 바깥 근호를 벗긴 값이 다시 완전제곱수(또는 제곱수 분수)여야 A·B 가 유리수로 떨어진다(256 → 16 → 4 처럼 두 번 벗겨지는 수를 고른다). 부호 지정(음의·양의)은 각각 하나씩 남겨야 함정이 산다."
    creative: "(1) A + B · A - B 로 묻는 식 바꾸기(★2 유지) (2) 한쪽을 「제곱근 N」 표기로 바꿔 표기 함정을 추가(★2) (3) A, B 를 각각 구하는 과정을 배점으로 나눈 서술형 그대로 두되 근호를 세 겹으로 만들면 ★3."
```

```yaml
- id: GN-M31-35-u4
  page: 35
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 유제"
  summary: |
    √(28x) = y 에서 y 가 자연수가 되는 가장 작은 자연수 x 와 그때의 y 에 대하여 x + y 의 값. [6점]
  category: "28 = 2²·7 → 짝 없는 소인수 7 을 x 로 메움 → y 계산 후 합"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「y 가 자연수」를 「28x 가 제곱수」로 옮기고, 소인수분해에서 지수가 홀수인 소인수만 x 가 메우면 된다는 조건으로 바꾼다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "√(ax) 가 자연수가 되는 가장 작은 자연수 x"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    28 = 2²·7 에서 7 만 짝이 없으므로 x = 7 이고 y = 14 가 바로 따라온다. 30-07 과 달리 분모 처리가 없어 단계가 한 겹 적다.
    다만 x 만 구하고 끝내지 않고 y 까지 구해 합을 내야 한다. 동치 변환 통찰 1개(EQV d1) · M_total 6 · 서술형 ★3 출발에서 -1 하여 ★2(30-07 과 같은 층).
  tier: star_2
  mechanism_primary: "28 = 2²·7 → x = 7 → y = √196 = 14 → x + y"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$21$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/35-u4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "28 을 다른 수(12 · 45 · 72 · 200)로 바꿀 수 있음. 제약: 소인수분해에서 지수가 홀수인 소인수가 하나 정도여야 x 가 작게 떨어지고, x 와 y 가 모두 두 자리 이하가 되도록 크기를 맞춘다."
    creative: "(1) x - y 나 xy 로 묻는 식 바꾸기(★2 유지) (2) 「두 번째로 작은」으로 바꾸면 ★3(32-19 골조) (3) 28 을 분수로 바꾸면 분모 처리가 붙어 ★2~3(30-07) (4) x 의 값을 모두 구하게 하면 무한히 많아지므로 상한을 붙여야 함(★3)."
```

```yaml
- id: GN-M31-35-u5
  page: 35
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 유제"
  summary: |
    부등식 -6 < -√(4 - 3x) < -4 를 만족시키는 정수 x 중 가장 큰 수를 A, 가장 작은 수를 B 라 할 때 A - B 의 값. [7점]
  category: "각 변에 -1 곱해 방향 반전 → 제곱해 근호 제거 → x 범위 → 정수 양 끝"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "음수로 둘러싸인 부등식을 각 변에 -1 을 곱해 4 < √(4-3x) < 6 으로 뒤집은 뒤에야 제곱이 가능해진다 — 반전과 제곱의 순서가 핵심"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "제곱근을 포함한 부등식을 만족시키는 정수 구하기(음수 반전)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    32-21 과 달리 세 변이 모두 음수라 제곱을 바로 할 수 없고, -1 을 곱해 부등호를 두 번 뒤집은 뒤 제곱해야 한다.
    그다음 4 - 3x 의 범위에서 x 로 옮길 때 -3 으로 나누며 부등호가 한 번 더 뒤집히고, 양 끝이 정수가 아니라 정수 최대·최소를 따로 확인해야 한다. 동치 변환 통찰 1개(EQV d2) · Mₛ 3 · 함정 2개 · M_total 8 · 서술형 ★3 출발 → ★3 유지(이 구역 최난도).
  tier: star_3
  mechanism_primary: "-1 곱해 4 < √(4-3x) < 6 → 제곱 → 16 < 4-3x < 36 → x 범위 → 정수 최대 A · 최소 B → A - B"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$5$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/35-u5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "양 끝(-6 · -4)과 근호 안 일차식(4 - 3x)을 바꿀 수 있음. 제약: 세 변의 부호가 모두 같아야 반전이 한 번에 되고, 근호 안이 양수인 범위를 벗어나면 안 된다. x 의 계수가 음수여야 나눌 때 부등호가 한 번 더 뒤집히는 함정이 유지된다."
    creative: "(1) 정수 대신 자연수로 바꾸면 범위가 비고 유형이 깨지므로 계수 부호를 함께 조정해야 함(★3) (2) 개수를 묻기(★3 · 32-21 골조) (3) 한쪽 부등호를 ≤ 로 바꿔 경계 포함을 비대칭으로 만들기(★3) (4) 근호 안을 이차식으로 바꾸면 범위 조건이 늘어 ★4."
```

```yaml
- id: GN-M31-35-u6
  page: 35
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 유제"
  summary: |
    두 수 √10 - 5 와 8 - √10 사이에 있는 모든 정수의 합 구하기. [7점]
  category: "3 < √10 < 4 로 양 끝을 정수 사이에 가두기 → 사이 정수 열거 → 합"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「사이에 있는 정수」를 구하기 위해 √10 을 3 < √10 < 4 로 가두어 두 끝의 범위를 정수 사이에 놓는다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 무리수 사이의 정수의 개수·합"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    √10 을 가두면 왼쪽 끝은 -2 와 -1 사이, 오른쪽 끝은 4 와 5 사이에 놓이므로 사이의 정수는 -1 부터 4 까지다.
    양 끝이 무리수라 경계 정수가 포함되는지 각각 확인해야 하고(끝값 자체는 정수가 아니므로 모두 포함) 음수 정수까지 빠짐없이 세야 한다. 동치 변환 통찰 1개(EQV d1) · 함정 2개(T-경계 · T-부호) · M_total 7 · 서술형 ★3 출발 → ★3 유지.
  tier: star_3
  mechanism_primary: "3 < √10 < 4 → 양 끝 범위 확정 → 사이 정수 -1 ~ 4 → 합"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$9$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/35-u6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "√10 과 두 상수(-5 · 8)를 바꿀 수 있음. 제약: 근호 안은 제곱수가 아니어야 끝값이 정수가 되지 않아 경계 포함 판단이 단순해지고, 두 끝이 서로 다른 부호 구간에 걸쳐야 음수 정수를 세는 함정이 산다. 정수 개수가 너무 많으면 합 계산 마찰만 는다."
    creative: "(1) 합 대신 개수를 묻기(★3 유지) (2) 한쪽 끝을 제곱수 근호로 바꿔 끝값이 정수가 되게 하면 포함 여부 판정이 추가돼 ★3~4(I-VF) (3) 정수 대신 자연수로 좁히기(★3) (4) 두 끝을 문자로 두면 Mₐ 상승 ★4."
```

## 표본 판정 요약 (36문)

- ★ 분포: ★1 1 · ★2 17 · ★3 15 · ★4 3 · ★5 0
- 통찰형 25(통찰 라벨이 하나 이상인 문항) · 절차형 11(30-01 · 30-03 · 30-04 · 30-05 · 30-06 · 30-08 · 31-09 · 31-13 · 32-15 · 32-16 · 35-u3) · premium 0
- 그중 depth 2 이상의 통찰을 가진 것은 11문(31-10 RT · 32-17 EQV · 32-18 EQV · 32-22 MI · 33-23 SYM · 33-26 CON+RT · 33-27 EQV+PD · 33-28 SC+EQV · 34-e2 BW · 34-u2 BW · 35-u5 EQV)이고 나머지 14문은 depth 1 한 개짜리 얕은 통찰이다
- 통찰 유형 분포: I-EQV 14 · I-RT 5 · I-BW 3 · I-MI 1 · I-SYM 1 · I-CON 1 · I-PD 1 · I-SC 1 (XU · VF 0)
- M_total 분포: 4 → 1문 · 5 → 2문 · 6 → 14문 · 7 → 10문 · 8 → 6문 · 9 → 2문 · 10 → 1문(33-27 최대)
- type_hint 상위: 「√(A²) 꼴 식 간단히 하기(범위·부호 조건)」 5(30-05 · 30-06 · 32-17 · 34-e1 · 34-u1) · 「근호 안을 제곱수로 만드는 자연수 조건」 4(30-07 · 32-18 · 32-19 · 35-u4) · 「무리수의 대소 비교」 4(30-08 · 31-13 · 33-24 · 33-25) · 「수직선·모눈 위 무리수 나타내기」 4(31-10 · 31-12 · 34-e2 · 34-u2) · 「제곱근의 뜻·표기 구분과 A·B 계산」 4(30-01 · 30-03 · 30-04 · 35-u3)
- 그림: 8문(`crop:fig-31-10.png` · `crop:fig-31-12.png` · `crop:fig-31-14.png` · `crop:fig-32-15.png` · `crop:fig-33-23.png` · `crop:fig-33-26.png` · `crop:fig-34-e2.png` · `crop:fig-34-u2.png`)
- 이 범위의 공통 함정은 T-부호(근호 밖 마이너스 · 음수끼리 대소 반전 · 근호 안 식의 부호 확정)와 T-경계(제곱수 경계 · 엄격 부등호 · 「두 번째로 작은」 같은 순서 지정)다. 숫자 변형 시 **근호 안이 제곱수인가**와 **주어진 범위가 각 항의 부호를 하나로 확정하는가**가 거의 모든 블록의 제약이므로 `variation_notes.numeric` 을 먼저 확인한다.

## 분류 이슈 목록

판정이 애매하거나 벤더 구역 신호와 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-M31-33-28 | I-SC 가 포함돼 v3.8 §2.13 기준으로는 ★5 슬롯 자격이 있으나 통찰 3개에 미달하고 열거 규모가 중3 수준이라 ★4 로 둠. 카탈로그가 생기면 여사건 전략 유형의 base ★ 를 먼저 정해야 함 | ★4 / ★5 |
| GN-M31-32-16 | STEP 2(★3 출발)이나 통찰이 전혀 없고 Mₖ 3 의 계산 마찰만으로 버티는 구성 — v3.8 §2.11 의 「질 저하」 경고 방향에 걸림. 라벨은 ★3 으로 두되 변형 시 Mₖ 를 더 올리지 않음 | ★2 / ★3 |
| GN-M31-32-20 | STEP 2 구역이지만 Mₛ 1 · M_total 5 로 이 구역 최저이고 부호 판정 한 번이면 끝나 ★2 로 내림(구역 신호와 1단 차이) | ★2 / ★3 |
| GN-M31-35-u3 · GN-M31-35-u4 | 서술형 구역(★3 출발)이나 각각 30-03 · 30-07 과 골조가 같아 STEP 1 층과 동일하게 ★2 로 맞춤. 서술형 배점(6점)도 이 구역 최저 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **통합해도 되는 것**: ① 「√(A²) 꼴 식 간단히 하기」 5문(30-05 · 30-06 · 32-17 · 34-e1 · 34-u1)은 부호 조건이 직접 주어지는가(30-05) · 구간으로 주어지는가(30-06) · 두 조건을 합쳐야 하는가(34-e1 · 34-u1) · 역수 비교가 끼는가(32-17)의 차이일 뿐 골조가 같다 — 하나의 유형에 난이도 변형으로 묶는다. ② 「근호 안을 제곱수로 만드는 자연수 조건」 4문(30-07 · 32-18 · 32-19 · 35-u4)도 x 의 자리(분자·분모·덧셈항)와 요구 순서(가장 작은·두 번째·모든 값의 합)만 다르다. ③ 34-e2 · 34-u2 는 예제·유제 쌍이라 한 유형의 방향 변형이다.
- **따로 세워야 하는 것**: ① 「수직선·모눈 위 무리수 나타내기」 — 대수 계산이 아니라 기하 → 좌표 전환(I-RT/I-SYM/I-BW)이 본질이고 그림 의존이 커서 독립 유형이 맞다. 그중 33-23(원의 대칭)은 31-10(정사각형 넓이)과도 도구가 달라 하위 유형으로 나눌 여지가 있다. ② 「실수의 분류·조밀성 판별」(31-09 · 31-11 · 32-22) — 계산이 없고 개념 진술 판정이 본질. ③ 33-27 「새로 정의된 기호(N(x))의 합」 — 이 범위에서 유일하게 I-PD 가 필요한 유형이라 제곱근 유형들과 성격이 다르다.
- **카탈로그가 생기면 재산정할 것**: 이 파일의 `effective_star` 는 전부 `star` 와 같게 둔 잠정값이다. ★2 17문 · ★3 15문으로 가운데 두 층에 32문이 몰려 있는데(단원 마무리 구역 출발점 효과), base ★ 가 정해지면 M_total 6 층(14문)과 8 층(6문) 사이를 다시 벌려야 한다. 특히 ★3 15문 안에서 통찰 depth 2(32-17 · 32-22 · 33-23 · 34-e2 · 34-u2 · 35-u5)와 depth 1(32-19 · 32-21 · 33-24 · 33-25 · 34-e1 · 34-u1)의 층 분리가 필요하다.
