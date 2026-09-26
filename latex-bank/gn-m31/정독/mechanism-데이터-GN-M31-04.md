---
name: mechanism-데이터-GN-M31-04
description: 개념원리 중학 3-1 04 제곱근의 곱셈과 나눗셈(1/1 · 39~45쪽 · 33문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · base_star null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 중학 3-1 · 전사본 latex-bank/gn-m31
  section: 04 제곱근의 곱셈과 나눗셈
  unit_code: GN-M31-04
  part: "1/1"
  extract_range: "39~45쪽 · 39-01~45-06"
  total_problems: 33
  unit_total: 33
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-m31/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-m31/items/<id>.tex
  image_source: latex-bank/gn-m31/figures/ (crops.json)
---

# 개념원리 중학 3-1 · 04 제곱근의 곱셈과 나눗셈 (1/1) 정독 데이터 (v1.0)

이 파일은 39~45쪽의 네 구역 33문항 전수를 다룬다. 개념원리 중학은 RPM 과 달리 문항별 난이도 표기(하·중·상)나 태그가 없고 **구역 자체가 난이도 층**이다 — 「개념원리 확인하기」(39쪽 · 개념 직후 드릴)와 「계산력 강화하기」(44쪽 · 반복 드릴)가 ★1 층, 「핵심문제 익히기」(40~43쪽 · 핵심문제 hN + 짝 확인문제 cN)가 ★2 층, 「이런 문제가 시험에 나온다」(45쪽)가 ★2~3 층이다. 그래서 `vendor_level` 은 전부 `-`, `vendor_tags` 는 전부 `[]` 이고, ★ 출발점은 구역에서, ±1 조정은 M_total·통찰에서 나온다.

단원 자체가 제곱근의 곱셈·나눗셈·근호 안팎 이동·분모의 유리화라는 **계산 도구 네 개의 숙달 단원**이라 절대다수가 절차형이다. 통찰 라벨이 붙은 6문항도 모두 depth 1 보조 통찰(문자 치환을 위한 동치 변환 I-EQV, 도형 조건을 제곱근 식으로 옮기는 I-RT)이며, 이 단원에 ★4·★5 급 슬롯은 없다.

이 파일의 주 용도는 **숫자 변형·창의 변형의 원본**이다. 그래서 모든 블록에 `mechanism_primary`(골조 한 줄) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 · 골조 유지 변형과 ★ 변동 지점)를 채웠다.

## 문항 데이터

### 개념원리 확인하기

```yaml
- id: GN-M31-39-01
  page: 39
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인하기"
  summary: |
    ⑴~⑷ √3√7 · √2√5√7 · -√(10/9)×√(9/5) · 3√2×5√3 을 계산.
  category: "제곱근의 곱셈 → 계수끼리·근호 안끼리 곱하기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "제곱근의 곱셈 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    √a√b=√(ab) 적용 한 단계. ⑶만 근호 안 분수를 약분해 √2 로 줄이는 마찰이 있고 부호는 그대로 따라온다.
    확인하기 구역 ★1 출발 · 통찰 0 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "계수끼리·근호 안끼리 곱 → 근호 안 약분 → a√b 정리"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\sqrt{21}$ ⑵ $\sqrt{70}$ ⑶ $-\sqrt{2}$ ⑷ $15\sqrt{6}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/39-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안 수를 다른 소수(5·11·13)로, 계수를 다른 자연수로 교체 가능. 제약: 답이 a√b 꼴로 끝나도록 근호 안 곱에 제곱인수를 하나만 두고, 분수형은 서로 약분되어 근호가 남게 맞춘다."
    creative: "(1) 인수를 셋으로 늘린 연속 곱(★1 유지) (2) 곱이 유리수가 되도록 짝을 맞추면 제곱인수 발견이 필요해 ★2 (3) 한 인수를 빈칸으로 두고 결과를 주면 역산이 되어 ★2."
```

```yaml
- id: GN-M31-39-02
  page: 39
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인하기"
  summary: |
    ⑴~⑷ √30/√6 · 2√42÷√7 · 24√10÷6√2 · (√15/√2)÷(√5/√2) 를 계산.
  category: "제곱근의 나눗셈 → 계수끼리·근호 안끼리 나누기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "제곱근의 나눗셈 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    √a÷√b=√(a/b) 와 계수 분리 나눗셈 한 단계. ⑷는 분수÷분수를 역수 곱으로 바꾸면 √2 가 약분돼 한 줄로 끝난다.
    확인하기 구역 ★1 출발 · 통찰 0 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "계수끼리·근호 안끼리 나눔 → 근호 안 약분 → a√b 정리"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\sqrt{5}$ ⑵ $2\sqrt{6}$ ⑶ $4\sqrt{5}$ ⑷ $\sqrt{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/39-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안을 배수 관계(30/6 · 42/7)로 유지하면서 수를 키우거나, 계수 비(24/6)를 다른 정수비로 교체 가능. 제약: 근호 안 나눗셈이 자연수나 기약분수로 떨어져야 하고 계수 비도 유리수로 정리돼야 한다."
    creative: "(1) 분수 꼴 나눗셈을 늘려 역수 변환을 두 번 시키기(★1~2) (2) 결과를 자연수로 만들어 제곱수 인식을 요구(★2) (3) 나누는 수를 빈칸으로 두면 역산 ★2."
```

```yaml
- id: GN-M31-39-03
  page: 39
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인하기"
  summary: |
    ⑴~⑹ √28 · √45 · √54 · -√98 · √(7/36) · -√0.11 을 a√b 꼴(a 유리수 · b 최소 자연수)로 나타내기.
  category: "근호 안의 제곱인 인수를 밖으로 꺼내기"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "근호 안의 수를 밖으로 꺼내기(a√b 꼴)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    소인수분해 → 제곱인수 분리 한 단계지만 ⑸는 분모의 제곱수(36), ⑹은 소수를 분수(11/100)로 고치는 준비 단계가 하나 더 붙는다.
    함정은 T-표기(소수 → 분수) 하나. 확인하기 구역 ★1 출발 · 통찰 0 · M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "근호 안 소인수분해(소수는 분수로) → 제곱인수를 밖으로 → a√b"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $2\sqrt{7}$ ⑵ $3\sqrt{5}$ ⑶ $3\sqrt{6}$ ⑷ $-7\sqrt{2}$ ⑸ $\dfrac{\sqrt{7}}{6}$ ⑹ $-\dfrac{\sqrt{11}}{10}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/39-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안을 (제곱수)×(제곱인수 없는 수) 꼴 다른 값(50·75·108·200)으로, 분수형은 분모를 다른 제곱수(4·25·49)로 교체. 소수형은 소수점 자리를 짝수로 두어 분모가 100·10000 이 되게 한다."
    creative: "(1) 꺼낸 뒤의 a 값만 묻기(★1 유지) (2) 제곱인수가 둘인 수(√720)로 만들어 분해를 두 번 시키기(★2) (3) a√b 로 나타냈을 때 a+b 의 값을 묻는 꼴로 바꾸면 ★2."
```

```yaml
- id: GN-M31-39-04
  page: 39
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인하기"
  summary: |
    ⑴~⑷ 3√7 · -4√3 · 2√(2/3) · √2/5 를 √a 또는 -√a 꼴로 나타내기.
  category: "근호 밖의 수를 안으로 넣기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "근호 밖의 수를 안으로 넣기(√a 꼴)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    a√b=√(a²b) 적용 한 단계. 음수는 부호를 근호 밖에 남겨야 하고(⑵), 분모의 수는 제곱해서 근호 안 분모로 들어간다(⑷).
    함정은 T-부호(음수를 근호 안으로 넣지 않기) 하나. 확인하기 구역 ★1 출발 · 통찰 0 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "근호 밖 양수를 제곱해 근호 안으로 → 부호는 밖에 유지 → √a"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\sqrt{63}$ ⑵ $-\sqrt{48}$ ⑶ $\sqrt{\dfrac{8}{3}}$ ⑷ $\sqrt{\dfrac{2}{25}}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/39-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수와 근호 안 수를 자유롭게 바꿀 수 있다. 제약: 음수 항을 최소 하나 남겨 부호 함정을 유지하고, 분수형은 분모가 그대로 제곱되어 들어가게 정수로 둔다."
    creative: "(1) 근호 안으로 넣어 두 수의 대소를 비교하게 하기(★2 · 이 단원의 대표 응용) (2) 넣은 결과가 같은 두 식을 찾게 하는 판별형(★2) (3) 계수를 문자로 두면 Mₐ 상승 ★2."
```

```yaml
- id: GN-M31-39-05
  page: 39
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인하기"
  summary: |
    ⑴~⑷ 2/√3 · √5/√2 · -5/√15 · 9/(2√6) 의 분모를 유리화.
  category: "분모의 유리화 → 분모의 근호를 분자·분모에 곱하기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "분모의 유리화"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    분모의 √b 를 분자·분모에 곱하는 한 단계. ⑶은 유리화 뒤 5√15/15 를 약분해야 끝나고, ⑷는 근호 밖 계수 2 는 두고 √6 만 곱한다.
    함정은 T-표기(유리화 뒤 약분 누락) 하나. 확인하기 구역 ★1 출발 · 통찰 0 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "분모의 근호만 분자·분모에 곱함 → 분모를 유리수로 → 약분"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\dfrac{2\sqrt{3}}{3}$ ⑵ $\dfrac{\sqrt{10}}{2}$ ⑶ $-\dfrac{\sqrt{15}}{3}$ ⑷ $\dfrac{3\sqrt{6}}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/39-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자·분모의 수를 바꿀 수 있다. 제약: 최소 하나는 유리화 뒤 약분이 남게(분자가 분모의 근호 안 수의 배수) 하고, 계수 있는 분모(2√6)를 하나 유지한다."
    creative: "(1) 분모를 √8 처럼 먼저 2√2 로 줄여야 하는 꼴로(★2) (2) 유리화 결과를 a√b 꼴로 보고 a 를 묻기(★2) (3) 분모에 문자를 넣으면 Mₐ 상승 ★2."
```

### 핵심문제 익히기

```yaml
- id: GN-M31-40-h1
  page: 40
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    ⑴ 4√7×5√5 ⑵ (-3√2)×2√3×(-√(5/3)) 을 계산.
  category: "제곱근의 곱셈 → 부호·계수·근호 안 분리 처리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "제곱근의 곱셈"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑵가 대표 형태다. 음수 두 개의 부호를 먼저 정하고, 계수 6 과 근호 안 2·3·(5/3) 을 따로 모아 3 을 약분하면 6√10.
    함정은 T-부호. 핵심문제 구역 ★2 출발 · 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "부호 결정 → 계수 곱 · 근호 안 곱 → 근호 안 약분 → a√b"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $20\sqrt{35}$ ⑵ $6\sqrt{10}$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/40-h1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수와 근호 안 수를 바꾸되 음수 인수의 개수(짝·홀)를 함께 설계한다. 제약: 근호 안 분수의 분모가 다른 인수와 약분되어 최종 근호 안이 제곱인수 없는 자연수가 되게 한다."
    creative: "(1) 음수 인수를 셋으로 만들어 부호 판단을 강화(★2 유지) (2) 곱이 유리수가 되도록 설계해 제곱인수 인식을 요구(★2) (3) 한 인수를 미지수로 두고 결과를 주면 역산 ★2~3."
```

```yaml
- id: GN-M31-40-c1
  page: 40
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    제곱근의 곱셈 계산 다섯 개 중 옳지 않은 것 고르기(5지선다).
  category: "제곱근의 곱셈 → 선택지 전수 계산 → 불일치 하나 찾기"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "제곱근의 곱셈의 참·거짓 판별"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    도구는 40-h1 과 같고, 선택지 다섯 개를 각각 정리해 비교하는 노동이 더해진 형태다. ④는 근호 안 약분 뒤 계수 처리에서 갈린다.
    통찰 없이 반복 계산이므로 핵심문제 구역 ★2 출발 유지 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "각 선택지를 a√b 꼴로 정리 → 우변과 대조 → 어긋나는 하나"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/40-c1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 선택지의 수를 독립적으로 바꿀 수 있다. 제약: 틀린 선택지는 계수 배수나 근호 안 약분 한 군데만 어긋나게 해 '계산 실수처럼 보이는 오답'을 유지하고, 정답 선택지가 두 개 이상 나오지 않게 검산한다."
    creative: "(1) '옳은 것을 모두 고르시오' 보기형으로 전환(★2 유지) (2) 틀린 곳을 바르게 고치는 서술형(★2~3) (3) 곱셈과 나눗셈을 섞으면 도구가 둘이 되어 ★2 상단."
```

```yaml
- id: GN-M31-40-h2
  page: 40
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    ⑴ 10√21÷5√7 ⑵ (-√30)÷(√5/3)÷√(6/5) 를 계산.
  category: "제곱근의 나눗셈 → 역수 곱으로 바꿔 연속 처리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "제곱근의 나눗셈"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑵가 대표 형태다. 나눗셈 둘을 모두 역수 곱으로 바꾼 뒤 계수(3)와 근호 안(30·1/5·5/6)을 따로 모으면 한 줄로 정리된다.
    함정은 T-부호. 핵심문제 구역 ★2 출발 · 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "÷를 역수 곱으로 → 계수·근호 안 분리 → 근호 안 약분 → a√b"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $2\sqrt{3}$ ⑵ $-3\sqrt{5}$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/40-h2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안 수와 분수 계수를 바꾸되 나눗셈 횟수(2회)는 유지한다. 제약: 역수 곱으로 바꾼 뒤 근호 안이 기약분수 없이 정리되도록 인수를 짝지어 둔다."
    creative: "(1) 나눗셈을 3회로 늘리기(★2 유지) (2) 결과가 유리수가 되게 설계(★2) (3) 나누는 수 하나를 미지수로 두고 결과를 주면 역산 ★2~3."
```

```yaml
- id: GN-M31-40-c2
  page: 40
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    제곱근의 나눗셈 보기 ㄱ·ㄴ·ㄷ 중 옳은 것 모두 고르기.
  category: "제곱근의 나눗셈 → 보기별 계산 → 참인 것 수집"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "제곱근의 나눗셈의 참·거짓 판별(보기형)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ㄷ은 음수를 두 번 나누므로 부호가 양으로 돌아오고, 분수의 역수 변환이 두 번 필요해 가장 무겁다. ㄴ은 분수÷분수라 역수 곱으로 바꾸는 것이 관건.
    도구는 40-h2 와 같고 판별 노동만 추가. 핵심문제 구역 ★2 출발 · 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "각 보기를 역수 곱으로 정리 → a√b 대조 → 참인 보기 수집"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "ㄱ, ㄷ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/40-c2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "보기별 수를 독립적으로 교체. 제약: 참·거짓 조합을 미리 정하고(여기서는 ㄱㄷ 참) 틀린 보기는 계수나 부호 한 군데만 어긋나게 둔다."
    creative: "(1) 보기를 5개로 늘려 5지선다로 전환(★2 유지) (2) 곱셈·나눗셈 혼합 보기를 섞으면 ★2 상단 (3) 틀린 보기의 옳은 값을 쓰게 하는 서술형 ★3."
```

```yaml
- id: GN-M31-41-h3
  page: 41
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    √75=5√3 · -√90=-3√10 · √0.02=√2/5 등 근호 안팎 이동 다섯 개 중 옳지 않은 것 고르기.
  category: "근호 안팎 이동(a√b ↔ √a) → 선택지 대조"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "근호가 있는 식의 변형"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    각 선택지는 꺼내기 또는 넣기 한 단계. 갈리는 곳은 ③의 소수로, 0.02=2/100 으로 고치면 √2/10 이 되어 제시된 √2/5 와 어긋난다.
    함정은 T-표기(소수의 분모를 10 으로 잘못 봄). 핵심문제 구역 ★2 출발 · 통찰 0 · M_total 5 → ★2 유지(−1 조정은 드릴 구역에만 적용).
  tier: star_2
  mechanism_primary: "각 선택지를 같은 꼴(a√b)로 맞춤 → 소수는 분수로 고쳐 비교 → 어긋나는 하나"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/41-h3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "제곱인수를 가진 수(75·90·192)와 소수(0.02·0.18)를 교체 가능. 제약: 소수는 소수점 자리를 짝수로 두어 분모가 100·10000 이 되게 하고, 오답 선택지는 분모의 제곱근을 10 대신 5 로 쓰는 식의 전형적 실수 하나만 심는다."
    creative: "(1) 옳은 것 모두 고르기(★2 유지) (2) 다섯 수를 크기 순으로 나열하게 하면 근호 안으로 넣기 통합이 필요해 ★3 (3) 틀린 곳을 고치는 서술형 ★3."
```

```yaml
- id: GN-M31-41-c3
  page: 41
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    √72=a√2, √3/3=√b 일 때 유리수 a, b 에 대하여 ab 의 값.
  category: "근호 안팎 이동 → 계수 비교로 a·b 결정 → 곱"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "a√b 꼴 변형으로 미지의 유리수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    앞은 꺼내기(√72=6√2)로 a, 뒤는 넣기(√3/3=√(3/9))로 b 를 얻는 좌우 방향이 다른 한 쌍이다. 곱은 마지막 한 줄.
    미지수 표기로 Mₐ 2. 핵심문제 구역 ★2 출발 · 통찰 0(표준 미정계수 대입은 통찰 불인정) · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "√72 를 꺼내 a · √3/3 을 넣어 b → ab 계산"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/41-c3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "√72 를 다른 (제곱수)×2 꼴(√50·√98)로, √3/3 을 다른 √n/n 꼴로 교체. 제약: a 는 자연수, b 는 기약분수가 되게 하고 ab 가 정수로 떨어지도록 짝을 맞춘다."
    creative: "(1) ab 대신 a+b 나 a/b 를 묻기(★2 유지) (2) 세 식을 주고 a·b·c 를 모두 쓰게 하면 M 상승 ★2~3 (3) a, b 가 유리수라는 조건에서 가능한 값을 따지게 하면 I-MI 가 붙어 ★3."
```

```yaml
- id: GN-M31-41-h4
  page: 41
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    √1.2=1.095, √12=3.464 일 때 √1200 · √12000 · √0.12 · √0.012 의 값에 대한 보기 ㄱ~ㄹ 중 옳은 것 모두 고르기.
  category: "근호 안 100배·1/100배 → 근호 밖 10배·1/10배 대응"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "제곱근표에 없는 수의 제곱근의 값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    각 보기를 1.2 또는 12 에 10의 짝수 거듭제곱을 곱한 꼴로 고쳐(√1200=√(12×100)) 주어진 두 값 중 맞는 쪽을 고르고 소수점을 옮긴다.
    함정이 T-단위(소수점 자리)와 T-표기(1.2 와 12 중 선택) 둘이라 Mₜ 2. 핵심문제 구역 ★2 출발 · 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "근호 안을 1.2 또는 12 × 10^(짝수) 로 분해 → 근호 밖 10^(절반) 배 → 소수점 이동"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "ㄴ, ㄷ"
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/41-h4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준 두 값을 다른 쌍(√2.7·√27 · √3.5·√35)으로 바꾸고 보기의 10의 거듭제곱 지수를 조정. 제약: 기준 두 값은 반드시 근호 안 10배 관계여야 하고(√a 와 √(10a)), 보기의 근호 안은 두 기준 중 하나에 10의 짝수 제곱을 곱한 수여야 한다."
    creative: "(1) 옳지 않은 것 하나 고르기(★2 유지) (2) 제곱근표 일부를 주고 표에 없는 수를 계산하게 하면 표 읽기가 더해져 ★2 상단 (3) √0.0012 처럼 자릿수를 늘리면 실수율이 올라가되 도구는 같아 ★2."
```

```yaml
- id: GN-M31-41-c4
  page: 41
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    √6.23=2.496, √62.3=7.893 일 때 √623 · √6230 · √0.0623 등 다섯 값 중 옳지 않은 것 고르기.
  category: "근호 안 100배·1/100배 → 근호 밖 10배·1/10배 대응"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "제곱근표에 없는 수의 제곱근의 값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    41-h4 와 같은 골조의 5지선다판. 각 선택지의 근호 안을 6.23 또는 62.3 에 10의 짝수 거듭제곱을 곱한 꼴로 고친 뒤 소수점을 옮겨 대조한다.
    ⑤는 62300=6.23×10000 이므로 249.6 이어야 한다. Mₜ 2(T-단위·T-표기). 핵심문제 구역 ★2 출발 · 통찰 0 → ★2.
  tier: star_2
  mechanism_primary: "근호 안을 6.23 또는 62.3 × 10^(짝수) 로 분해 → 근호 밖 10^(절반) 배 → 선택지 대조"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/41-c4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준 소수쌍과 선택지의 자릿수를 교체. 제약: 기준 두 수는 10배 관계, 선택지 근호 안은 두 기준 중 하나에 10의 짝수 제곱을 곱한 값이어야 하며, 오답은 기준을 잘못 고른 경우(6.23 대신 62.3) 하나만 둔다."
    creative: "(1) 보기형(ㄱㄴㄷㄹ)으로 전환(★2 유지) (2) 값이 주어지지 않은 √6230000 을 추가로 구하게 하면 지수 확장 ★2 상단 (3) 제곱근표에서 두 값을 직접 찾게 하면 ★2."
```

```yaml
- id: GN-M31-42-h5
  page: 42
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    √3=a, √7=b 일 때 √252 를 a, b 로 나타내기(5지선다).
  category: "소인수분해 → √ 분해 → 주어진 문자로 치환"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "√3=a 를 3=a² 로 뒤집어, 분해에서 나온 유리수 인수 3 을 문자로 흡수"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "제곱근을 문자를 사용하여 나타내기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    252=2²·3²·7 로 분해하면 근호 밖으로 2·3 이 나오는데, 여기서 멈추면 3 을 a 로 옮기지 못한다. 3=(√3)²=a² 로 되돌리는 방향 전환이 이 문제의 갈림길이다.
    동치 변환 통찰 1개(EQV d1)이나 깊이가 얕고 M_total 6 → 핵심문제 구역 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "252 소인수분해 → 2·3·√7 → 3=a² 치환 → 2a²b"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "④"
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/42-h5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "대상 수를 주어진 두 소수의 거듭제곱 곱(2²·3²·7 → 2²·3·7² 등)으로 교체. 제약: 근호 안 수는 반드시 주어진 두 소수와 제곱수만으로 분해되어야 하고, 답 꼴에 a²·b² 중 하나는 남게 지수를 홀짝 섞는다."
    creative: "(1) √0.28 처럼 소수·분수로 주어 10의 거듭제곱 처리를 더하면 ★3 (2) a, b 로 나타낸 뒤 값을 대입해 근삿값을 구하게 하면 ★2 상단 (3) 세 문자(√2·√3·√5)로 늘리면 분해 부담이 커져 ★3."
```

```yaml
- id: GN-M31-42-c5
  page: 42
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    √5=a, √7=b 일 때 √315 를 a, b 로 나타내기(5지선다).
  category: "소인수분해 → √ 분해 → 주어진 문자로 치환"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "제곱근을 문자를 사용하여 나타내기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    315=3²·5·7 이라 근호 밖으로 3 이 나오고 남은 √5·√7 이 그대로 ab 가 된다. 42-h5 와 달리 유리수 인수를 문자로 되돌릴 필요가 없어 한 단계 가볍다.
    통찰 없음 · M_total 6 · 핵심문제 구역 ★2 출발 → ★2.
  tier: star_2
  mechanism_primary: "315 소인수분해 → 3√35 → √5·√7 을 ab 로 치환 → 3ab"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/42-c5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "제곱인수와 두 소수의 조합을 바꿔 다른 수(√175·√567)로 교체. 제약: 근호 안이 주어진 두 소수와 제곱수만으로 분해되어야 하고, 선택지에는 계수를 잘못 꺼낸 값(5ab)과 지수를 잘못 본 값(3a²b)을 오답으로 둔다."
    creative: "(1) 유리수 인수를 a² 로 흡수해야 하는 수로 바꾸면 42-h5 골조가 되어 EQV 통찰 추가(★2 상단) (2) 분수 꼴 √(315/4) 로 주면 분모 처리 추가 ★2 (3) a, b 로 나타낸 식이 같은 것을 짝짓는 형태 ★2."
```

```yaml
- id: GN-M31-42-h6
  page: 42
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    ⑴~⑷ √2/√7 · -4/(3√10) · 2√3/√5 · 2√5/√18 의 분모를 유리화.
  category: "분모 정리 → 분모의 근호를 분자·분모에 곱하기 → 약분"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "분모의 유리화"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑷가 갈림길이다. √18 을 3√2 로 먼저 줄이지 않으면 √90 이 나와 다시 분해해야 한다. ⑵는 계수 3 을 남기고 √10 만 곱한 뒤 분자 4√10/30 을 약분한다.
    함정은 T-표기(유리화 뒤 약분 누락). 핵심문제 구역 ★2 출발 · 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "분모의 근호를 먼저 a√b 로 정리 → 근호만 분자·분모에 곱 → 약분"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{\sqrt{14}}{7}$ ⑵ $-\dfrac{2\sqrt{10}}{15}$ ⑶ $\dfrac{2\sqrt{15}}{5}$ ⑷ $\dfrac{\sqrt{10}}{3}$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/42-h6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자·분모의 수를 교체하되 분모에 제곱인수를 가진 수(√18·√12·√50)를 최소 하나 유지한다. 제약: 유리화 뒤 분자·분모가 약분되는 조합을 한두 개 넣고, 음수 항도 하나 남긴다."
    creative: "(1) 유리화 결과를 a√b 꼴로 보고 a 를 묻기(★2 유지) (2) 분모가 2√3+… 같은 합 꼴이면 중3 범위를 넘어 부적합 (3) 유리화한 값의 근삿값까지 구하게 하면 제곱근표 유형과 결합해 ★3."
```

```yaml
- id: GN-M31-42-c6
  page: 42
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    분모를 유리화한 결과 다섯 개 중 옳은 것 모두 고르기(정답 2개).
  category: "유리화 → 선택지 전수 대조 → 참인 것 수집"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "분모의 유리화의 참·거짓 판별"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    다섯 선택지를 각각 유리화해 약분까지 끝낸 뒤 대조한다. ⑤는 분모 √8 을 2√2 로 줄이는 준비 단계가 있어야 맞는지 판정된다.
    도구는 42-h6 과 같고 판별 노동만 추가. 핵심문제 구역 ★2 출발 · 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "각 선택지 좌변을 유리화·약분 → 우변과 대조 → 참인 둘"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①, ⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/42-c6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "선택지의 분자·분모를 독립적으로 교체. 제약: 정답 개수(2개)를 먼저 고정하고, 오답은 약분을 한 번 빠뜨린 값이나 분모 전체를 곱한 값처럼 전형적 실수형으로 만든다."
    creative: "(1) 옳지 않은 것 하나 고르기로 바꾸기(★2 유지) (2) 유리화 결과가 같은 것끼리 짝짓기(★2 상단) (3) 틀린 선택지를 바르게 고치는 서술형 ★3."
```

```yaml
- id: GN-M31-43-h7
  page: 43
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    ⑴~⑷ √15×8√5÷2√3 · 4√5÷2√18×3√6 · √(3/4)×(√10/√2)÷(√5/3) · (3√3/√2)÷(-√6/√5)×(8/√45) 를 계산.
  category: "곱셈·나눗셈 혼합 → 역수 곱으로 통일 → 한 번에 정리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "제곱근의 곱셈과 나눗셈의 혼합 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    나눗셈을 모두 역수 곱으로 바꾼 뒤 계수끼리·근호 안끼리 한꺼번에 모으는 것이 이 유형의 골조다. 앞에서부터 차례로 계산하면 근호 안 수가 커져 분해가 늘어난다.
    ⑷는 음수 하나와 √45=3√5 정리가 겹쳐 가장 무겁다. 핵심문제 구역 ★2 출발 · 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "÷를 역수 곱으로 통일 → 계수·근호 안 각각 모아 약분 → a√b"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $20$ ⑵ $2\sqrt{15}$ ⑶ $\dfrac{3\sqrt{3}}{2}$ ⑷ $-4$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/43-h7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 항의 계수와 근호 안 수를 교체하되 연산 개수(×와 ÷ 각 1회 이상)를 유지한다. 제약: 최종 근호 안이 제곱인수 없는 수 또는 완전제곱(결과가 유리수)이 되게 인수를 맞추고, 음수 항은 하나만 둔다."
    creative: "(1) 결과가 유리수가 되도록 설계해 검산 감각을 요구(★2 유지) (2) 항을 넷으로 늘리면 M 상승 ★3 (3) 한 항을 미지수로 두고 결과를 주면 43-c7 골조가 되어 ★2 상단."
```

```yaml
- id: GN-M31-43-c7
  page: 43
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    2√2÷√6×√27=a, (4/√3)×(√15/√8)÷(√5/√6)=b√3 을 만족시키는 유리수 a, b 에 대하여 a+b 의 값.
  category: "혼합 계산 → 주어진 꼴과 계수 비교 → 합"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "혼합 계산으로 미지의 유리수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    혼합 계산 두 개를 각각 끝낸 뒤, 첫 식은 값 자체가 a, 둘째 식은 b√3 꼴과 계수를 비교해 b 를 읽는다. 도구는 43-h7 과 같고 미지수 비교 한 단계가 더해졌다.
    Mₐ 2(유리수 a·b). 핵심문제 구역 ★2 출발 · 통찰 0 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "각 식을 역수 곱으로 정리 → a 는 값 그대로 · b 는 √3 계수 비교 → a+b"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/43-c7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 식의 근호 안 수와 계수를 교체. 제약: 첫 식은 결과가 유리수, 둘째 식은 결과가 (유리수)×√3 처럼 지정한 근호 꼴로 떨어져야 하므로 근호 안 인수의 곱이 (제곱수)×3 이 되게 맞춘다."
    creative: "(1) a+b 대신 ab 나 a-b 를 묻기(★2 유지) (2) 둘째 식의 근호를 미지의 √k 로 두면 k 까지 찾아야 해 ★3 (3) 식 하나를 등식으로 두고 빠진 항을 구하게 하면 역산 ★3."
```

```yaml
- id: GN-M31-43-h8
  page: 43
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    밑면의 세로 √18 cm, 높이 √24 cm 인 직육면체의 부피가 144 cm³ 일 때 밑면의 가로의 길이.
  category: "부피 공식 → 가로 = 부피 ÷ (세로 × 높이) → 유리화"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "도형의 부피 조건을 제곱근 나눗셈 식으로 옮기고, 구한 수를 다시 길이(단위 포함)로 되돌림"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "제곱근의 곱셈과 나눗셈의 도형에의 활용"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (가로)×√18×√24=144 를 세우고 가로를 나눗셈으로 분리한 뒤, √18·√24=√432=12√3 을 정리해 144÷(12√3) 을 유리화한다.
    도형↔제곱근 식 전환 통찰 1개(RT d1)이나 공식 적용이 표준이라 깊이는 얕다. 핵심문제 구역 ★2 출발 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "부피=가로×세로×높이 → 가로=144÷(√18·√24) → √432=12√3 정리 → 유리화"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$4\sqrt{3}\,\mathrm{cm}$'
  answer_source: "본문 답"
  figure: "crop:fig-43-h8.png"
  latex: latex-bank/gn-m31/items/43-h8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세로·높이의 근호 안 수와 부피를 교체. 제약: 두 변의 곱 √(18×24) 가 a√b 로 정리되고 부피를 그 값으로 나눈 결과가 유리화 뒤 간단한 a√b 로 떨어져야 한다. 그림의 라벨(세로·높이 위치)은 발문과 일치시켜 고정한다."
    creative: "(1) 구하는 것을 겉넓이나 모서리 길이의 합으로 바꾸면 덧셈 단원과 결합해 ★3 (2) 부피를 미지수로 두고 가로를 주는 역방향(★2 유지) (3) 정육면체·각기둥으로 도형을 바꿔도 골조 동일(★2)."
```

```yaml
- id: GN-M31-43-c8
  page: 43
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    밑면의 반지름이 √27 cm 인 원뿔의 부피가 36√15 π cm³ 일 때 원뿔의 높이.
  category: "원뿔 부피 공식 → 높이 = 3V ÷ (π r²) → 정리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "원뿔 부피 조건을 제곱근 식으로 옮기고, r²=27 로 근호가 사라지는 구조를 이용해 높이를 분리"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "제곱근의 곱셈과 나눗셈의 도형에의 활용"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (1/3)π(√27)²h 에서 (√27)²=27 이 되어 근호가 사라지고 9πh=36√15π 한 줄로 줄어든다. 1/3 을 빠뜨리는 것이 주 실수 지점.
    도형↔제곱근 식 전환 통찰 1개(RT d1). 핵심문제 구역 ★2 출발 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "V=(1/3)πr²h → (√27)²=27 → 9πh=36√15π → h 분리"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$4\sqrt{15}\,\mathrm{cm}$'
  answer_source: "답지"
  figure: "crop:fig-43-c8.png"
  latex: latex-bank/gn-m31/items/43-c8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "반지름의 근호 안 수와 부피의 계수·근호를 교체. 제약: r² 은 정수가 되므로 (1/3)r² 이 정수로 떨어지게 근호 안을 3의 배수로 두고, 부피의 근호 부분이 답의 근호로 그대로 내려오게 맞춘다."
    creative: "(1) 높이를 주고 반지름을 묻게 하면 제곱근을 다시 씌워야 해 ★3 (2) 원기둥·구로 도형을 바꿔도 골조 동일(★2) (3) 부피가 같은 원뿔과 원기둥을 비교하게 하면 조건 통합이 생겨 ★3."
```

### 계산력 강화하기

```yaml
- id: GN-M31-44-01
  page: 44
  vendor_label: "계산력 강화하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "계산력 강화"
  summary: |
    ⑴~⑷ √5×√11 · 4√3×3√7 · √(3/7)×(-2√14) · (-5√6)×(-3√5)×√(7/15) 를 계산.
  category: "제곱근의 곱셈 → 부호·계수·근호 안 분리 처리"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "제곱근의 곱셈 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    드릴 구역의 곱셈 반복. ⑶·⑷는 근호 안 분수의 분모가 다른 인수와 약분되는지만 보면 되고, ⑷의 음수 둘은 양수로 돌아온다.
    계산력 강화 구역 ★1 출발 · 통찰 0 · M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "부호 결정 → 계수 곱 · 근호 안 곱 → 약분 → a√b"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\sqrt{55}$ ⑵ $12\sqrt{21}$ ⑶ $-2\sqrt{6}$ ⑷ $15\sqrt{14}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/44-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수와 근호 안 수를 자유롭게 교체. 제약: 분수형 인수의 분모가 다른 인수와 약분되어 최종 근호 안이 자연수가 되게 하고, 음수 인수 개수로 부호를 설계한다."
    creative: "(1) 인수 개수를 넷으로 늘린 드릴(★1 유지) (2) 결과가 유리수가 되는 짝을 섞기(★2) (3) 빈칸 채우기형으로 바꾸면 역산 ★2."
```

```yaml
- id: GN-M31-44-02
  page: 44
  vendor_label: "계산력 강화하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "계산력 강화"
  summary: |
    ⑴~⑷ √39÷√3 · 10√30÷5√10 · √28÷(-√7/2) · 15√6÷√(3/5)÷(-3√2/√7) 을 계산.
  category: "제곱근의 나눗셈 → 역수 곱으로 바꿔 연속 처리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "제곱근의 나눗셈 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴~⑶은 한 줄 나눗셈이지만 ⑷는 3중 나눗셈에 음수·분수 계수가 겹쳐 40-h2(★2)와 도구·부담이 같다.
    [분류 이슈] 드릴 구역 신호는 ★1, ⑷의 실제 부담은 ★2 급 — 구역 신호를 따라 ★1 로 두고 기록만 한다.
  tier: star_1
  mechanism_primary: "÷를 역수 곱으로 → 계수·근호 안 분리 → 약분 → a√b"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\sqrt{13}$ ⑵ $2\sqrt{3}$ ⑶ $-4$ ⑷ $-5\sqrt{35}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/44-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안을 배수 관계로 유지하며 수를 교체하고, 분수 나눗셈 항을 최소 하나 남긴다. 제약: 역수 곱 정리 뒤 근호 안이 제곱인수 없는 자연수 또는 완전제곱(결과 유리수)이 되게 맞춘다."
    creative: "(1) 나눗셈 횟수를 2회로 줄여 순수 드릴로(★1 유지) (2) 결과가 정수가 되도록 설계(★1~2) (3) 마지막 나누는 수를 미지수로 두면 역산 ★2."
```

```yaml
- id: GN-M31-44-03
  page: 44
  vendor_label: "계산력 강화하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "계산력 강화"
  summary: |
    ⑴~⑹ √44 · √125 · -√192 · √(5/64) · -√(21/48) · √0.18 을 a√b 꼴(a 유리수 · b 최소 자연수)로 나타내기.
  category: "근호 안 약분·분해 → 제곱인수를 밖으로"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "근호 안의 수를 밖으로 꺼내기(a√b 꼴)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑸가 갈림길이다. 21/48 을 7/16 으로 먼저 약분하지 않으면 분해가 엉킨다. ⑹은 0.18=18/100 으로 고친 뒤 3√2/10.
    함정은 T-표기(약분·소수 변환 누락). 계산력 강화 구역 ★1 출발 · 통찰 0 · M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "근호 안 약분(소수는 분수로) → 소인수분해 → 제곱인수를 밖으로"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $2\sqrt{11}$ ⑵ $5\sqrt{5}$ ⑶ $-8\sqrt{3}$ ⑷ $\dfrac{\sqrt{5}}{8}$ ⑸ $-\dfrac{\sqrt{7}}{4}$ ⑹ $\dfrac{3\sqrt{2}}{10}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/44-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안을 (제곱수)×(제곱인수 없는 수)로 교체하고 약분이 필요한 분수형을 하나 유지한다. 제약: 분수형은 약분 뒤 분모가 제곱수가 되게 하고, 소수형은 소수점 자리를 짝수로 둔다."
    creative: "(1) 꺼낸 뒤 a 와 b 의 합을 묻기(★2) (2) 여섯 수를 크기 순으로 나열하게 하면 비교가 더해져 ★2 (3) b 가 같은 것끼리 묶기(★2)."
```

```yaml
- id: GN-M31-44-04
  page: 44
  vendor_label: "계산력 강화하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "계산력 강화"
  summary: |
    ⑴~⑹ 2√13 · 5√6 · -6√3 · √3/5 · -2√5/3 · 3√(2/7) 을 √a 또는 -√a 꼴로 나타내기.
  category: "근호 밖의 수를 제곱해 안으로 넣기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "근호 밖의 수를 안으로 넣기(√a 꼴)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    a√b=√(a²b) 한 단계 드릴. 음수는 부호를 밖에 남기고(⑶·⑸), 분모의 수는 제곱해 근호 안 분모로 들어간다(⑷·⑸).
    함정은 T-부호. 계산력 강화 구역 ★1 출발 · 통찰 0 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "근호 밖 양수를 제곱해 안으로 → 부호는 밖에 유지 → √a"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\sqrt{52}$ ⑵ $\sqrt{150}$ ⑶ $-\sqrt{108}$ ⑷ $\sqrt{\dfrac{3}{25}}$ ⑸ $-\sqrt{\dfrac{20}{9}}$ ⑹ $\sqrt{\dfrac{18}{7}}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/44-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수와 근호 안 수를 자유롭게 교체하되 음수·분수 계수를 각각 최소 하나 유지한다. 제약: 분수 계수의 분모는 제곱되어 근호 안 분모가 되므로 정수로 둔다."
    creative: "(1) 넣은 결과로 두 수의 대소를 비교(★2) (2) 같은 수를 나타내는 것끼리 짝짓기(★2) (3) 계수를 문자로 두면 Mₐ 상승 ★2."
```

```yaml
- id: GN-M31-44-05
  page: 44
  vendor_label: "계산력 강화하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "계산력 강화"
  summary: |
    ⑴~⑷ 5/√7 · √11/√2 · 3/√20 · 6/(5√12) 의 분모를 유리화.
  category: "분모 정리 → 분모의 근호를 분자·분모에 곱하기 → 약분"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "분모의 유리화"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑶·⑷가 갈림길이다. √20=2√5, √12=2√3 으로 분모를 먼저 줄이지 않으면 유리화 뒤 약분이 복잡해진다.
    함정은 T-표기(분모 정리·약분 누락). 계산력 강화 구역 ★1 출발 · 통찰 0 · M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "분모를 a√b 로 정리 → 근호만 분자·분모에 곱 → 약분"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\dfrac{5\sqrt{7}}{7}$ ⑵ $\dfrac{\sqrt{22}}{2}$ ⑶ $\dfrac{3\sqrt{5}}{10}$ ⑷ $\dfrac{\sqrt{3}}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/44-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자·분모의 수를 교체하되 제곱인수를 가진 분모(√20·√12·√18)를 최소 하나 유지한다. 제약: 유리화 뒤 약분되는 조합을 하나 이상 넣어 마무리 습관을 점검한다."
    creative: "(1) 유리화 결과의 분자만 묻기(★1 유지) (2) 유리화한 값의 근삿값까지 구하게 하면 제곱근표 유형과 결합 ★3 (3) 분모가 계수와 근호의 곱인 꼴만 모은 드릴(★1)."
```

```yaml
- id: GN-M31-44-06
  page: 44
  vendor_label: "계산력 강화하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "계산력 강화"
  summary: |
    ⑴~⑶ √72÷√20×√10 · (4√3/√2)×(2√5/√6)÷(√30/√27) · (√15/√28)÷√(3/7)×(-3√8) 을 계산.
  category: "곱셈·나눗셈 혼합 → 역수 곱으로 통일 → 한 번에 정리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "제곱근의 곱셈과 나눗셈의 혼합 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    도구는 43-h7(★2)과 같은 혼합 계산이고 근호 안 수도 작지 않다. 다만 구역이 드릴이고 통찰이 없어 라벨은 구역 신호를 따른다.
    [분류 이슈] 43-h7 과 같은 골조인데 구역 때문에 ★1 — 1단 차이라 라벨은 ★1 유지, 기록만 한다.
  tier: star_1
  mechanism_primary: "÷를 역수 곱으로 통일 → 계수·근호 안 각각 모아 약분 → a√b"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $6$ ⑵ $6\sqrt{2}$ ⑶ $-3\sqrt{10}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/44-06.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 항의 근호 안 수를 교체하되 ×와 ÷가 각 1회 이상 남게 한다. 제약: 정리 후 근호 안이 제곱인수 없는 수이거나 완전제곱이 되게 인수를 맞추고, 음수 항은 하나만 둔다."
    creative: "(1) 결과가 모두 유리수가 되도록 설계한 드릴(★1 유지) (2) 항을 넷으로 늘리면 ★2 (3) 결과를 k√b 꼴로 두고 k 를 묻는 형태 ★2."
```

### 이런 문제가 시험에 나온다

```yaml
- id: GN-M31-45-01
  page: 45
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 나온다"
  summary: |
    제곱근의 곱셈·나눗셈 계산 다섯 개 중 옳은 것 모두 고르기(정답 2개).
  category: "곱셈·나눗셈 → 선택지 전수 계산 → 참인 것 수집"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "제곱근의 곱셈·나눗셈의 참·거짓 판별"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    곱셈과 나눗셈이 섞여 있어 선택지마다 도구를 바꿔 잡아야 한다. ⑤는 분수 나눗셈을 역수 곱으로 바꾼 뒤 근호 안을 모아야 판정된다.
    시험 구역 ★2~3 출발 중 통찰 0 · M_total 6 → 하단인 ★2.
  tier: star_2
  mechanism_primary: "각 선택지를 a√b 로 정리(÷는 역수 곱) → 우변 대조 → 참인 둘"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①, ④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/45-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "선택지별 수를 독립 교체. 제약: 정답 개수를 먼저 고정하고, 오답은 근호 안 약분을 한 번 빠뜨린 값이나 계수를 근호 안에 넣어버린 값처럼 전형적 실수형으로 만든다."
    creative: "(1) 옳지 않은 것 하나 고르기(★2 유지) (2) 계산 결과가 가장 큰 것을 고르게 하면 대소 비교가 더해져 ★3 (3) 보기형(ㄱㄴㄷㄹ)으로 전환(★2)."
```

```yaml
- id: GN-M31-45-02
  page: 45
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 나온다"
  summary: |
    √(100+k)=4√7 일 때 유리수 k 의 값.
  category: "우변을 √ 한 꼴로 되돌리기 → 근호 안끼리 비교"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "4√7 을 √112 로 되돌려 양변을 같은 꼴로 만든 뒤 근호 안끼리 등식으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "√(a)=b√c 조건에서 미지수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    좌변은 이미 √ 한 꼴이므로 우변을 근호 안으로 넣어 √112 로 맞추는 방향 전환이 핵심이고, 그 뒤는 100+k=112 한 줄이다.
    동치 변환 통찰 1개(EQV d1) · M_total 6 · 시험 구역 ★2~3 출발 하단 → ★2.
  tier: star_2
  mechanism_primary: "4√7=√112 로 변환 → 100+k=112 → k"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$12$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/45-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수항(100)과 우변의 a√b 를 교체. 제약: a²b 가 상수항보다 커야 k 가 양수로 떨어지고, k 를 자연수로 제한하려면 a²b−(상수) 가 자연수가 되게 맞춘다."
    creative: "(1) k 를 자연수로 제한하고 √(100+k) 가 자연수가 되는 k 를 모두 구하게 하면 I-MI 가 붙어 ★3 (2) 좌변을 √(k/3) 처럼 분수로 주면 처리 한 단계 추가(★2 상단) (3) 두 식을 주고 연립하면 ★3."
```

```yaml
- id: GN-M31-45-03
  page: 45
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 나온다"
  summary: |
    √0.5=a, √5=b 일 때 √50 · √0.005 · √500 · √0.05 · √0.00005 를 a, b 로 나타낸 다섯 식 중 옳지 않은 것 고르기.
  category: "근호 안을 0.5 또는 5 × 10의 짝수 거듭제곱으로 분해 → 문자로 치환"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "각 수를 0.5·5 중 어느 쪽에 10의 짝수 거듭제곱을 곱한 꼴인지로 동치 변환해야 문자 치환이 가능"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "제곱근을 문자를 사용하여 나타내기(10의 거듭제곱 이동)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    41-h4 의 소수점 이동에 문자 치환이 겹친 형태다. 0.5 와 5 는 10배 관계라 같은 수를 두 가지로 쓸 수 있어, 선택지가 요구하는 문자에 맞는 분해를 골라야 한다.
    함정이 T-단위(소수점 자리)·T-표기(a·b 선택) 둘이고 Mₐ 2 · M_total 7 · 통찰 1 → 시험 구역 ★2~3 출발 중 상단인 ★3.
  tier: star_3
  mechanism_primary: "근호 안을 0.5 또는 5 × 10^(짝수) 로 분해 → 근호 밖 10^(절반) → a·b 로 치환 → 선택지 대조"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/45-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준 두 수를 10배 관계인 다른 쌍(√0.3·√3 · √0.7·√7)으로 바꾸고 선택지의 자릿수를 조정. 제약: 선택지 근호 안은 두 기준 중 하나에 10의 짝수 제곱을 곱한 값이어야 하고, 오답은 기준을 잘못 고른 경우 하나만 둔다."
    creative: "(1) 옳은 것 모두 고르기로 바꾸기(★3 유지) (2) a, b 로 나타낼 수 없는 수(√0.05 와 √0.2 중 하나)를 섞으면 판별이 추가돼 ★3 상단 (3) 근삿값까지 계산하게 하면 제곱근표 유형과 결합 ★3."
```

```yaml
- id: GN-M31-45-04
  page: 45
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 나온다"
  summary: |
    2√5/√3=a√15, 20/√45=b√5 일 때 유리수 a, b 에 대하여 a+b 의 값.
  category: "유리화 → 지정된 a√b 꼴과 계수 비교 → 합"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "유리화 결과의 계수 비교로 유리수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 식 모두 유리화해 각각 √15·√5 의 계수를 읽는 구조다. 둘째 식은 √45 를 3√5 로 먼저 줄이면 유리화 없이도 계수가 보인다.
    Mₐ 2(유리수 a·b) · 통찰 0(표준 계수 비교) · M_total 7 → 시험 구역 ★2~3 출발 하단인 ★2.
  tier: star_2
  mechanism_primary: "각 식을 유리화·약분 → 지정된 근호의 계수 읽기 → a+b"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/45-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 식의 분자·분모를 교체. 제약: 유리화 결과의 근호가 우변에 지정된 근호와 같아야 하므로 분모·분자의 근호 안 곱이 (제곱수)×(지정 수)가 되게 맞추고, a·b 는 기약분수로 둔다."
    creative: "(1) a+b 대신 ab 나 a÷b 를 묻기(★2 유지) (2) 우변의 근호를 √k 로 두면 k 까지 찾아야 해 ★3 (3) 세 식으로 늘리면 M 상승 ★3."
```

```yaml
- id: GN-M31-45-05
  page: 45
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 나온다"
  summary: |
    (32/√8)÷(√7/√24)×(-√14/4)=k√6 을 만족시키는 유리수 k 의 값.
  category: "혼합 계산 → 지정된 k√6 꼴과 계수 비교"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "혼합 계산으로 미지의 유리수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    √8=2√2 로 분모를 줄이고 나눗셈을 역수 곱으로 바꾼 뒤 계수와 근호 안을 각각 모으면 -8√6 으로 정리된다. 음수 항이 하나라 부호는 음.
    도구는 43-h7 의 혼합 계산 하나뿐이고 계산량만 많다(v3.8: 계산 마찰은 ★ 상승 근거 아님). 시험 구역 ★2~3 출발 하단 ★2.
  tier: star_2
  mechanism_primary: "√8·√24 정리 → ÷를 역수 곱으로 → 계수·근호 안 모으기 → √6 계수 읽기"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/45-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 항의 계수·근호 안 수를 교체. 제약: 정리 후 근호 안이 우변에 지정된 6(또는 바꾼 값)만 남도록 인수의 곱이 (제곱수)×6 이 되게 하고, 음수 항 개수로 k 의 부호를 정한다."
    creative: "(1) 우변을 k√b 로 두고 k 와 b 를 모두 구하게 하면 ★3 (2) 가운데 항을 미지수로 두고 k 를 주면 역산 ★3 (3) 결과가 유리수가 되게 설계하면 ★2 하단."
```

```yaml
- id: GN-M31-45-06
  page: 45
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 나온다"
  summary: |
    밑변 √20 cm · 높이 √18 cm 인 삼각형과 세로 √15 cm 인 직사각형의 넓이가 같을 때 직사각형의 가로의 길이.
  category: "두 넓이를 같게 → 가로 = 삼각형 넓이 ÷ 세로 → 유리화"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 도형의 넓이가 같다는 기하 조건을 제곱근 등식으로 옮기고, 구한 수를 다시 길이로 되돌림"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "제곱근의 곱셈과 나눗셈의 도형에의 활용"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    삼각형 넓이 (1/2)√20·√18=3√10 을 먼저 정리하고, 이를 √15 로 나눈 뒤 근호 안을 약분하면 가로가 나온다. 1/2 누락이 주 실수 지점.
    기하 조건↔제곱근 식 전환 통찰 1개(RT d1) · M_total 6 · 시험 구역 하단 → ★2.
  tier: star_2
  mechanism_primary: "(1/2)√20·√18 = √15 × 가로 → 가로 = 3√10 ÷ √15 → 근호 안 약분"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\sqrt{6}\,\mathrm{cm}$'
  answer_source: "답지"
  figure: "crop:fig-45-06.png"
  latex: latex-bank/gn-m31/items/45-06.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼각형의 밑변·높이와 직사각형의 세로를 교체. 제약: (1/2)√(밑변×높이) 가 a√b 로 떨어지고 그것을 세로로 나눈 값이 유리화 뒤 간단한 a√b 가 되게 근호 안 인수를 맞춘다. 그림의 라벨 위치(밑변·높이·세로)는 발문과 일치시켜 고정한다."
    creative: "(1) 직사각형의 둘레를 묻게 하면 덧셈 단원과 결합해 ★3 (2) 두 도형을 사다리꼴·평행사변형으로 바꿔도 골조 동일(★2) (3) 넓이가 같다는 조건 대신 2배라고 주면 계수 한 단계 추가(★2 상단)."
```

## 표본 판정 요약 (33문)

- ★ 분포: ★1 11 · ★2 21 · ★3 1 · ★4 0 · ★5 0
- 구역별: 개념원리 확인하기 5문 전부 ★1 · 핵심문제 익히기 16문 전부 ★2 · 계산력 강화하기 6문 전부 ★1 · 이런 문제가 시험에 나온다 6문(★2 5 · ★3 1)
- 통찰 라벨이 붙은 문항 6(42-h5 · 43-h8 · 43-c8 · 45-02 · 45-03 · 45-06) — 모두 depth 1 보조 통찰이라 `insight_type` 은 전부 절차형, 통찰 주도 문항 0 · premium 0
- 통찰 유형 분포: I-EQV 3(문자 치환을 위한 동치 변환) · I-RT 3(도형 조건 ↔ 제곱근 식). SC/VF/SYM/XU 는 0 이므로 이 범위에 ★5 자격 슬롯은 없다.
- M_total 분포: 4 는 4문 · 5 는 5문 · 6 은 19문 · 7 은 5문. Mₐ 2 는 미지수·문자 치환 문항 7개뿐이고 나머지는 전부 구체 수치(Mₐ 1).
- 그림: 3문(`crop:fig-43-h8.png` · `crop:fig-43-c8.png` · `crop:fig-45-06.png`). 43-h8·43-c8 은 발문에 치수가 모두 적혀 있어 그림은 배치 확인용이고, 45-06 은 밑변 √20·높이 √18·세로 √15 가 그림에만 있어 변형 시 라벨 고정이 필요하다.
- 답 출처: 핵심문제(hN) 8문은 「본문 답」, 나머지 25문은 「답지」.

## 분류 이슈 목록

판정이 애매하거나 구역 신호와 실제 부담이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않고 구역 신호를 따랐다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-M31-44-02 | ⑷가 3중 나눗셈·음수·분수 계수로 40-h2(★2)와 같은 부담. 드릴 구역이라 ★1 로 둠 | ★1 / ★2 |
| GN-M31-44-06 | 43-h7(★2)과 같은 혼합 계산 골조인데 구역이 계산력 강화라 ★1 로 둠 | ★1 / ★2 |
| GN-M31-45-03 | 41-h4·41-c4(★2)와 같은 소수점 이동 유형이나 문자 치환이 겹쳐 ★3 으로 올림 | ★2 / ★3 |
| GN-M31-45-05 | 계산량은 이 범위 최대지만 도구는 혼합 계산 하나. v3.8 기준 계산 마찰은 ★ 상승 근거가 아니라 ★2 유지 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위에서 반복된 type_hint: 「제곱근의 곱셈 계산」 3 · 「제곱근의 나눗셈 계산」 3 · 「근호 안의 수를 밖으로 꺼내기(a√b 꼴)」 2 · 「근호 밖의 수를 안으로 넣기(√a 꼴)」 2 · 「분모의 유리화」 3 · 「제곱근의 곱셈과 나눗셈의 혼합 계산」 2 · 「제곱근표에 없는 수의 제곱근의 값 구하기」 2 · 「제곱근을 문자를 사용하여 나타내기」 2 · 「제곱근의 곱셈과 나눗셈의 도형에의 활용」 3 · 참·거짓 판별형 4(곱셈 1 · 나눗셈 1 · 유리화 1 · 혼합 1) · 미지의 유리수 구하기 3.
- 따로 세워야 할 유형: ① 「근호 안팎 이동」은 꺼내기와 넣기를 **방향별로 분리**해야 한다(41-c3 처럼 한 문항이 양방향을 동시에 요구하는 경우가 있어 합치면 변형 설계가 망가진다). ② 「제곱근표·소수점 이동」(41-h4·41-c4)과 「문자 치환」(42-h5·42-c5)은 45-03 에서 결합되므로 각각 독립 유형으로 두고 결합형을 별도 슬롯으로 둔다. ③ 「도형에의 활용」은 넓이형(45-06)과 부피형(43-h8·43-c8)이 단계 수가 달라 분리 후보.
- 통합해도 될 유형: 참·거짓 판별형 4개는 판별 대상만 다르고 골조가 「선택지 전수 정리 → 대조」로 동일하므로 하나의 유형에 대상 파라미터를 두는 편이 낫다. 「미지의 유리수 구하기」(41-c3·43-c7·45-04·45-05)도 「정리 후 계수 비교」 하나로 묶고 정리 도구(꺼내기·유리화·혼합 계산)를 변형 축으로 두면 된다.
- base_star 초안 제안: 곱셈·나눗셈·근호 안팎 이동·유리화 단일 드릴 = ★1, 혼합 계산·참거짓 판별·계수 비교·문자 치환·도형 활용 = ★2, 소수점 이동과 문자 치환이 결합된 형태 = ★3. 이 단원에는 ★4 이상 유형이 없다.
