---
name: mechanism-데이터-RPM-ALG-09-p1
description: RPM 대수 09 수열의 합(1/3 · 교과서 09-1~09-3 · 유형 01~02) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 대수 (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-alg
  section: 09 수열의 합
  unit_code: ALG-09
  part: "1/3"
  extract_range: "131~132쪽 · 0947~0979"
  total_problems: 33
  unit_total: 104
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-alg/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-alg/items/<id>.tex
  image_source: latex-bank/rpm-alg/figures/ (crops.json)
---

# RPM 대수 · 09 수열의 합 (1/3) 정독 데이터 (v1.0)

이 파일은 RPM 대수 09 수열의 합 단원(104문) 가운데 131~132쪽 0947~0979 의 33문항을 다룬다. 구성은 교과서 구역 셋(09-1 ∑의 뜻과 그 성질 10문 · 09-2 자연수의 거듭제곱의 합 8문 · 09-3 여러 가지 수열의 합 7문)과 유형 구역 둘(유형 01 합의 기호 ∑ 4문 · 유형 02 ∑의 성질 4문)이다. 벤더 난이도 신호는 RPM 방식 그대로 구역이 곧 층이며(교과서 → ★1 · 유형 → 난이도 표시대로), 이 범위의 유형 문항은 대표문제 2문(난이도 없음)과 「중」 6문이고 「서술형」 태그 1문(0979)이 있다. 그림 문항은 없다.

주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(통찰 코드·depth·근거) · `variation_notes`(바꿔도 되는 수와 제약 · 통찰 골조를 유지한 변형과 ★ 변동 지점)를 채웠다. 교과서 구역 25문은 전부 ∑의 뜻·거듭제곱 합 공식·부분분수/유리화 소거의 절차형 ★1 이고, 유형 구역 8문은 첨자 이동·조건 결합이 들어가는 ★2 로 판정했다. 통찰형은 첨자 이동 뒤 조건을 분해해 결합하는 0975 한 문항이다.

## 문항 데이터

### 교과서 09-1 $\sum$의 뜻과 그 성질

```yaml
- id: RPM-ALG-0947
  page: 131
  vendor_label: '교과서 09-1 $\sum$의 뜻과 그 성질'
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ∑_{k=1}^{6} 5k 를 기호 ∑ 를 쓰지 않은 합의 꼴로 나타내기.
  category: "∑의 뜻 → k=1~6 대입 → 항 나열"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∑를 합의 꼴로 나타내기(∑의 뜻)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    k 에 1~6 을 차례로 넣어 5, 10, …, 30 을 나열하는 정의 확인 한 단계. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "∑의 뜻 → k=1,…,6 대입 → 5+10+…+30"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$5+10+15+20+25+30$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0947.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수(5)·항 수(6)·일반항 꼴(3k+1, k², 2^k)을 바꿀 수 있음. 제약: 항 수는 4~7 정도로 나열 가능하게, 첫 항이 k=1 에서 바로 계산되는 꼴로."
    creative: "(1) 시작 첨자를 k=0 이나 k=3 으로 바꿔 항 수 세기 함정(★1 유지 · T-경계) (2) 첨자 문자를 i·j 로 바꾸고 상수항을 섞기(★1) (3) 나열된 합을 보고 거꾸로 ∑ 로 쓰게 하면 0951 골조로 이동(★1)."
```

```yaml
- id: RPM-ALG-0948
  page: 131
  vendor_label: '교과서 09-1 $\sum$의 뜻과 그 성질'
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ∑_{i=1}^{5} 2^i 를 기호 ∑ 를 쓰지 않은 합의 꼴로 나타내기.
  category: "∑의 뜻 → i=1~5 대입 → 거듭제곱 항 나열"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∑를 합의 꼴로 나타내기(∑의 뜻)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    i 에 1~5 를 넣어 2, 4, 8, 16, 32 를 나열. 첨자 문자가 i 인 것만 다를 뿐 0947 과 같은 정의 확인. 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "∑의 뜻 → i=1,…,5 대입 → 2+4+8+16+32"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$2+4+8+16+32$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0948.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(3, 1/2, −2)·지수 꼴(2^{i−1}, 2^{2i})·항 수를 바꿀 수 있음. 제약: 나열한 값이 커지지 않게 항 수 5 안팎."
    creative: "(1) 지수를 i−1 로 바꿔 첫 항이 1 이 되게(★1) (2) 밑을 음수로 해 부호 교대 나열(★1 · T-부호) (3) 나열을 보고 ∑ 로 되돌리면 0952 골조(★1)."
```

```yaml
- id: RPM-ALG-0949
  page: 131
  vendor_label: '교과서 09-1 $\sum$의 뜻과 그 성질'
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ∑_{k=1}^{n} k² 를 기호 ∑ 를 쓰지 않은 합의 꼴로 나타내기.
  category: "∑의 뜻 → k=1~n 대입 → 끝항 n² 까지 나열"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∑를 합의 꼴로 나타내기(∑의 뜻)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    상한이 n 이라 1²+2²+3²+…+n² 처럼 줄임표와 끝항으로 쓴다. 문자 n 이 들어가 Mₐ 2 이지만 정의 확인 한 단계. 통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "∑의 뜻 → k=1,…,n 대입 → 1²+2²+…+n²"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$1^2+2^2+3^2+\cdots+n^2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0949.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수(3)·상한(2n, n+1)·일반항(k(k+1))을 바꿀 수 있음. 제약: 끝항이 상한을 대입한 꼴로 한눈에 보이게."
    creative: "(1) 상한을 n−1 이나 하한을 2 로 바꿔 첫항·끝항 표현 함정(★1 · T-경계) (2) 상한을 2n 으로 두고 항 수를 함께 묻기(★1) (3) 나열식을 주고 ∑ 로 되돌리기(0951 골조 ★1)."
```

```yaml
- id: RPM-ALG-0950
  page: 131
  vendor_label: '교과서 09-1 $\sum$의 뜻과 그 성질'
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ∑_{j=2}^{n} 1/(j+1) 을 기호 ∑ 를 쓰지 않은 합의 꼴로 나타내기.
  category: "∑의 뜻 → 하한 2 부터 대입 → 1/3 부터 1/(n+1) 까지 나열"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∑를 합의 꼴로 나타내기(∑의 뜻)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    하한이 2 이므로 첫 항은 1/3, 끝항은 j=n 의 1/(n+1). 하한을 1 로 착각해 1/2 부터 쓰는 함정 하나(T-경계). 정의 확인 한 단계·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "∑의 뜻 → j=2,…,n 대입 → 1/3+1/4+…+1/(n+1)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{1}{3}+\dfrac{1}{4}+\dfrac{1}{5}+\cdots+\dfrac{1}{n+1}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0950.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "하한(0, 3)·분모 꼴(2j−1, j²)·상한(n+1)을 바꿀 수 있음. 제약: 하한이 1 이 아닌 값이어야 이 문항의 함정이 유지됨."
    creative: "(1) 하한을 문자 m 으로 두면 Mₐ 상승(★1~2) (2) 항 수(n−1)를 함께 묻기(★1) (3) ∑_{k=1}^{n−1} 1/(k+2) 와 같은 합인지 판단하는 ㄱㄴㄷ 로 첨자 이동을 확인(★2 · EQV d1)."
```

```yaml
- id: RPM-ALG-0951
  page: 131
  vendor_label: '교과서 09-1 $\sum$의 뜻과 그 성질'
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    1/2+1/4+1/6+…+1/(2n) 을 기호 ∑ 를 사용하여 나타내기.
  category: "일반항 1/(2k) 파악 → 항 수 n → ∑ 표기"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "합을 ∑로 나타내기(일반항·항 수 찾기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    분모가 2, 4, 6, …, 2n 이므로 k 번째 항 1/(2k), 끝항이 k=n 이라 항 수 n. 일반항과 항 수를 읽는 두 단계·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "일반항 1/(2k) → 끝항 1/(2n) 이므로 상한 n → ∑_{k=1}^{n} 1/(2k)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\displaystyle\sum_{k=1}^{n} \dfrac{1}{2k}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0951.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모 꼴(2k−1, 3k, k(k+1))·끝항을 바꿀 수 있음. 제약: 끝항을 1/20 같은 수치로 주면 항 수 계산 단계가 하나 늘어남(★1 유지)."
    creative: "(1) 같은 합의 다른 ∑ 표현(∑_{k=0}^{n−1} 1/(2k+2))을 고르는 보기 문제(★2 · EQV d1) (2) 부호가 교대하는 합을 (−1)^{k+1} 로 쓰게(★1~2 · T-부호) (3) ∑ 로 쓴 뒤 값까지 구하게 하면 09-2·09-3 골조와 결합(★2)."
```

```yaml
- id: RPM-ALG-0952
  page: 131
  vendor_label: '교과서 09-1 $\sum$의 뜻과 그 성질'
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    1+3+3²+…+3⁹ 을 기호 ∑ 를 사용하여 나타내기.
  category: "등비 일반항 3^{k−1} → 지수 0~9 로 항 수 10 → ∑ 표기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "합을 ∑로 나타내기(일반항·항 수 찾기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    첫 항 1=3⁰ 을 포함해 지수가 0~9 이므로 항 수는 10. 일반항을 3^{k−1} 로 쓰면 상한 10, 3^k 로 쓰면 k=0~9 — 항 수를 9 로 세는 함정 하나(T-경계). 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "일반항 3^{k−1} → 지수 0~9 이므로 항 수 10 → ∑_{k=1}^{10} 3^{k−1}"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\displaystyle\sum_{k=1}^{10} 3^{k-1}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0952.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(2, 1/2)·끝 지수(9 → 7, 12)·첫 항(3 부터 시작)을 바꿀 수 있음. 제약: 첫 항이 3⁰ 인지 3¹ 인지에 따라 항 수가 달라지므로 답 상한을 재확인."
    creative: "(1) ∑_{k=0}^{9} 3^k 와 같은 합임을 판단하는 보기(★2 · EQV d1 · 0973 골조) (2) 밑을 −3 으로 해 부호 교대(★1 · T-부호) (3) ∑ 로 쓴 뒤 등비수열의 합 공식으로 값까지(★2 · 08 단원 결합)."
```

```yaml
- id: RPM-ALG-0953
  page: 131
  vendor_label: '교과서 09-1 $\sum$의 뜻과 그 성질'
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    1+4+7+…+25 를 기호 ∑ 를 사용하여 나타내기.
  category: "등차 일반항 3k−2 → 3k−2=25 로 항 수 9 → ∑ 표기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "합을 ∑로 나타내기(일반항·항 수 찾기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    첫째항 1·공차 3 의 등차 일반항 3k−2 를 쓰고, 끝항 25=3k−2 에서 k=9 를 얻는 두 단계. 항 수를 (25−1)/3=8 로 세는 함정 하나(T-경계). 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "등차 일반항 3k−2 → 3k−2=25 로 항 수 9 → ∑_{k=1}^{9} (3k−2)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\displaystyle\sum_{k=1}^{9} (3k-2)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0953.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫째항·공차·끝항을 바꿀 수 있음. 제약: 끝항이 일반항에 대입해 정수 k 가 나오는 값이어야 함(예: 2+5+…+29 → 3k−1, k=10)."
    creative: "(1) 끝항을 문자로(3n−2 → 상한 n)(★1) (2) 공차가 음수인 감소 등차(★1 · T-부호) (3) ∑ 로 쓴 뒤 값까지 구하게 하면 0961 골조(★1~2)."
```

```yaml
- id: RPM-ALG-0954
  page: 131
  vendor_label: '교과서 09-1 $\sum$의 뜻과 그 성질'
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    6+6+6+6+6 을 기호 ∑ 를 사용하여 나타내기.
  category: "상수 수열 일반항 6 → 항 수 5 → ∑ 표기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "합을 ∑로 나타내기(일반항·항 수 찾기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    일반항이 k 를 포함하지 않는 상수 6 이고 항 수 5. 일반항에 k 가 없는 것을 낯설어하는 표기 함정 하나(T-표기). 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "상수 수열 일반항 6 → 항 수 5 → ∑_{k=1}^{5} 6"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\displaystyle\sum_{k=1}^{5} 6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0954.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수 값·항 수를 바꿀 수 있음. 제약: 상수를 문자 c, 항 수를 n 으로 두면 ∑_{k=1}^{n} c = cn 확인 문항이 됨(Mₐ 2)."
    creative: "(1) ∑_{k=1}^{n} c = cn 을 확인하고 0955 의 상수항 함정과 연결(★1) (2) 6 을 2·3, 6k⁰ 등으로 쓴 여러 ∑ 표현이 같은지 고르는 보기(★2 · EQV d1) (3) 상수와 등차항이 섞인 합(6+6+…, 그 뒤 7+8+…)을 두 ∑ 로 나누기(★2)."
```

```yaml
- id: RPM-ALG-0955
  page: 131
  vendor_label: '교과서 09-1 $\sum$의 뜻과 그 성질'
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ∑_{k=1}^{7} a_k=2, ∑_{k=1}^{7} b_k=3 일 때 ∑_{k=1}^{7} (5a_k−2) 의 값.
  category: "∑ 선형성으로 분리 → 상수항 합 2·7 → 대입"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∑의 성질(선형성·상수항의 합)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    5∑a_k − ∑2 = 5·2 − 2·7 = −4. 상수항의 합이 2 가 아니라 2·7=14 인 것이 유일한 함정(T-표기). 성질 적용 한 단계·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "∑ 선형성 → 5∑a_k − ∑2 → 5·2 − 2·7 = −4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$-4$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0955.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "∑a_k 값·계수·상수·항 수(7)를 바꿀 수 있음. 제약: 상수항 합이 항 수 배가 되는 함정이 살아 있도록 상수항을 남김."
    creative: "(1) 상수항 −2 를 −2k 로 바꿔 거듭제곱 합 공식과 결합(★1~2) (2) 결과값을 주고 계수를 역산(★2 · BW d1) (3) 항 수를 n 으로 두고 ∑(5a_k−2)=−4 에서 n 을 구하게(★2 · BW d1)."
```

```yaml
- id: RPM-ALG-0956
  page: 131
  vendor_label: '교과서 09-1 $\sum$의 뜻과 그 성질'
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ∑_{k=1}^{7} a_k=2, ∑_{k=1}^{7} b_k=3 일 때 ∑_{k=1}^{7} (2a_k+3b_k) 의 값.
  category: "∑ 선형성으로 분리 → 2∑a_k+3∑b_k → 대입"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∑의 성질(선형성·상수항의 합)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    2∑a_k + 3∑b_k = 4+9 = 13. 상수항이 없어 0955 보다 함정도 없는 선형성 확인. 통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "∑ 선형성 → 2∑a_k + 3∑b_k → 4+9 = 13"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$13$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0956.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수·∑a_k·∑b_k 값을 바꿀 수 있음. 제약: 없음(정수 결과면 충분)."
    creative: "(1) ∑(a_k+b_k)·∑(a_k−b_k) 값을 주고 ∑a_k 를 구하게 하면 연립 골조(0978 · ★2) (2) ∑a_kb_k 는 선형성으로 못 구함을 확인하는 개념 ㄱㄴㄷ(★2) (3) 상수항을 섞어 0955 함정과 결합(★1)."
```

### 교과서 09-2 자연수의 거듭제곱의 합

```yaml
- id: RPM-ALG-0957
  page: 131
  vendor_label: "교과서 09-2 자연수의 거듭제곱의 합"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ∑_{k=1}^{10} (4k+2) 의 값.
  category: "선형성 분리 → 4∑k + ∑2 → 공식 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "자연수의 거듭제곱의 합 공식 계산(∑k·∑k²·∑k³)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    4·(10·11/2) + 2·10 = 220+20 = 240. ∑k 공식 하나와 상수항 합(2·10)만 쓰는 공식 확인. 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "선형성으로 분리 → 4∑k + ∑2 → 4·55 + 20 = 240"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$240$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0957.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수·상수·항 수를 바꿀 수 있음. 제약: 상수항을 남겨 ∑c = cn 함정을 유지."
    creative: "(1) 상한을 n 으로 두면 2n²+4n 인수분해된 답(★1~2 · Mₐ 2) (2) 값 240 을 주고 n 을 역산하는 이차방정식(★2 · BW d1) (3) 등차수열의 합 공식으로 같은 값이 나옴을 비교하는 두 풀이 문항(★2)."
```

```yaml
- id: RPM-ALG-0958
  page: 131
  vendor_label: "교과서 09-2 자연수의 거듭제곱의 합"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ∑_{k=1}^{6} (2k²−3k+1) 의 값.
  category: "선형성 분리 → 2∑k² − 3∑k + ∑1 → 공식 대입"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "자연수의 거듭제곱의 합 공식 계산(∑k·∑k²·∑k³)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    2·91 − 3·21 + 6 = 182−63+6 = 125. ∑k²=6·7·13/6 공식과 ∑k, 상수항 6 을 합치는 산술이 조금 있어 Mₖ 2. 통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "선형성으로 분리 → 2∑k² − 3∑k + ∑1 → 182 − 63 + 6 = 125"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$125$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0958.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차식 계수·항 수(10 이하 권장)를 바꿀 수 있음. 제약: 부호가 섞인 계수를 하나 남겨 부호 실수 지점을 유지."
    creative: "(1) 일반항을 (2k−1)(k−1) 곱 꼴로 주면 전개 단계 추가(★1) (2) 상한 n 으로 일반화해 n 에 대한 식으로 답(★2 · Mₐ 2) (3) 값을 주고 항 수 n 역산(★2 · BW d1)."
```

```yaml
- id: RPM-ALG-0959
  page: 131
  vendor_label: "교과서 09-2 자연수의 거듭제곱의 합"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ∑_{k=1}^{8} k(k+1)(k−1) 의 값.
  category: "곱 전개 k³−k → ∑k³ − ∑k → 공식 대입"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "자연수의 거듭제곱의 합 공식 계산(∑k·∑k²·∑k³)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    k(k+1)(k−1)=k³−k 로 전개하면 (8·9/2)² − 36 = 1296−36 = 1260. 세제곱 합 공식 ∑k³=(∑k)² 을 쓰는 것이 핵심이며 전개는 합·차 곱셈공식 한 줄. 통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "k(k+1)(k−1)=k³−k 전개 → ∑k³ − ∑k → 1296 − 36 = 1260"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$1260$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0959.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "항 수(10 이하)·인수 조합(k(k+2), (k−1)(k+2))을 바꿀 수 있음. 제약: 전개 결과가 3차 이하이고 세제곱 합이 커지지 않게 항 수 제한."
    creative: "(1) 상한 n 으로 일반화해 인수분해된 답 n(n−1)(n+1)(n+2)/4 (★2 · Mₐ 2) (2) 연속 세 정수의 곱의 합을 (k−1)k(k+1) 꼴로 주고 첨자 이동으로 같은 값임을 확인(★2 · EQV d1) (3) 분수꼴 1/(k(k+1)) 과 대비해 전개형과 소거형을 고르게 하는 두 문항 세트(★1~2)."
```

```yaml
- id: RPM-ALG-0960
  page: 131
  vendor_label: "교과서 09-2 자연수의 거듭제곱의 합"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ∑_{k=1}^{5} (k−1)³ − ∑_{k=1}^{5} (k³−1) 의 값.
  category: "두 ∑ 를 하나로 묶어 전개 → 세제곱 소거 → −3∑k²+3∑k"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "자연수의 거듭제곱의 합 공식 계산(∑k·∑k²·∑k³)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    상한이 같으므로 (k−1)³−(k³−1) = −3k²+3k 로 묶으면 −3·55+3·15 = −120. 각각 계산(0+1+8+27+64=100, 225−5=220)해도 100−220 으로 같다. 갈래가 둘이지만 둘 다 짧아 SC 로 세지 않음. 전개·공식 4단계라 Mₛ 2·통찰 없음·M_total 6 → 교과서 ★1.
  tier: star_1
  mechanism_primary: "두 ∑ 를 하나로 묶어 (k−1)³−(k³−1) = −3k²+3k 전개 → −3∑k² + 3∑k → −165 + 45 = −120"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$-120$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0960.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "항 수·(k−1)³ 의 이동량(k+1, k−2)·빼는 식의 상수를 바꿀 수 있음. 제약: 두 ∑ 의 상한이 같아야 하나로 묶임. 다르면 첨자 맞추기 단계가 추가됨."
    creative: "(1) 상한을 n 으로 일반화해 −3∑k²+3∑k 를 인수분해한 답(★2) (2) (k+1)³−k³ 꼴로 바꿔 항이 서로 소거되는 것을 발견하게 하면 ∑k² 공식 유도 골조(★2 · PD d1) (3) 두 ∑ 의 상한을 5 와 6 으로 다르게 주어 묶기 전에 마지막 항을 떼어내게(★2 · T-경계)."
```

```yaml
- id: RPM-ALG-0961
  page: 131
  vendor_label: "교과서 09-2 자연수의 거듭제곱의 합"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    3+6+9+…+60 의 값.
  category: "일반항 3k·항 수 20 → 3∑k → 공식 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "합을 ∑로 바꿔 거듭제곱의 합 공식 적용"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ∑_{k=1}^{20} 3k = 3·210 = 630. 등차수열의 합 공식 20·(3+60)/2 로도 같지만 이 절에서는 ∑k 공식 연습. 항 수 20 을 세는 것 외 함정 없음. 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "일반항 3k·항 수 20 → 3∑k → 3·210 = 630"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$630$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0961.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공차·끝항을 바꿀 수 있음. 제약: 끝항이 공차의 배수여야 항 수가 정수로 떨어짐."
    creative: "(1) 3 의 배수 중 홀수 번째 항만 더하기(일반항 6k−3 · ★1~2) (2) 1·2+2·3+…처럼 일반항이 이차인 합으로 바꾸면 0964 골조(★1) (3) 합이 630 인 것을 주고 끝항을 역산(★2 · BW d1)."
```

```yaml
- id: RPM-ALG-0962
  page: 131
  vendor_label: "교과서 09-2 자연수의 거듭제곱의 합"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    5²+6²+7²+…+15² 의 값.
  category: "∑_{k=1}^{15} k² − ∑_{k=1}^{4} k² → 공식 대입"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "합을 ∑로 바꿔 거듭제곱의 합 공식 적용"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    1²~15² 의 합 1240 에서 1²~4² 의 합 30 을 빼면 1210. 첨자 이동으로 ∑_{k=1}^{11}(k+4)² 를 전개해도 되지만 빼기가 짧다. 뺄 범위를 1~5 로 잡는 함정 하나(T-경계). 통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "∑_{k=5}^{15} k² = ∑_{k=1}^{15} k² − ∑_{k=1}^{4} k² → 1240 − 30 = 1210"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$1210$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0962.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "시작 수·끝 수·지수(3)를 바꿀 수 있음. 제약: 시작 수가 1 이 아니어야 빼기 골조가 유지됨."
    creative: "(1) ∑_{k=m}^{n} k² 를 문자 m·n 으로 두어 n 과 m−1 로 빼는 식 세우기(★2 · Mₐ 2) (2) 홀수의 제곱만 더하기(일반항 (2k−1)² 전개 · ★1~2) (3) 값 1210 을 주고 끝 수를 역산(★2~3 · BW d1)."
```

```yaml
- id: RPM-ALG-0963
  page: 131
  vendor_label: "교과서 09-2 자연수의 거듭제곱의 합"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    2³+4³+6³+…+14³ 의 값.
  category: "일반항 (2k)³=8k³·항 수 7 → 8∑k³ → 공식 대입"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "합을 ∑로 바꿔 거듭제곱의 합 공식 적용"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    8·∑_{k=1}^{7} k³ = 8·(7·8/2)² = 8·784 = 6272. 짝수 세제곱을 (2k)³ 으로 묶어 8 을 밖으로 내는 것과 항 수 7 이 핵심. 통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "일반항 (2k)³ = 8k³·항 수 7 → 8∑k³ → 8·28² = 6272"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$6272$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0963.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "배수(3k)·항 수·지수(2)를 바꿀 수 있음. 제약: 세제곱 합이 커지므로 항 수 8 이하."
    creative: "(1) 홀수의 세제곱 합을 전체에서 짝수를 빼서 구하기(★2 · EQV d1) (2) 1³+2³+…+n³ = (1+2+…+n)² 관계를 확인하는 ㄱㄴㄷ(★2) (3) 상한을 2n 으로 두고 짝수항 합을 n 의 식으로(★2 · Mₐ 2)."
```

```yaml
- id: RPM-ALG-0964
  page: 131
  vendor_label: "교과서 09-2 자연수의 거듭제곱의 합"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    1×3+2×4+3×5+…+10×12 의 값.
  category: "k번째 항 k(k+2) → ∑k² + 2∑k → 공식 대입"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "합을 ∑로 바꿔 거듭제곱의 합 공식 적용"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    k 번째 항이 k(k+2) 이므로 ∑k² + 2∑k = 385 + 110 = 495. 두 수열의 곱을 일반항으로 읽고 전개하는 표준 절차. 통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "k번째 항 k(k+2) → ∑k² + 2∑k → 385 + 110 = 495"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$495$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0964.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 인수의 간격(k+3)·항 수·두 번째 인수의 공차(k(2k+1))를 바꿀 수 있음. 제약: 항 수 10 이하로 산술을 제한."
    creative: "(1) 상한 n 으로 일반화해 인수분해된 답 n(n+1)(2n+7)/6 (★2 · Mₐ 2) (2) 1×n+2×(n−1)+…+n×1 처럼 두 인수의 합이 일정한 곱(일반항 k(n+1−k) · ★2~3 · EQV d1 · Mₐ 3) (3) 값 495 를 주고 항 수 역산(★2 · BW d1)."
```

### 교과서 09-3 여러 가지 수열의 합

```yaml
- id: RPM-ALG-0965
  page: 131
  vendor_label: "교과서 09-3 여러 가지 수열의 합"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ∑_{k=1}^{20} 1/(k(k+1)) 의 값.
  category: "부분분수 1/k − 1/(k+1) → 소거 → 첫항 − 끝항"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "분수꼴 수열의 합(부분분수·소거)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    1/(k(k+1)) = 1/k − 1/(k+1) 로 나누면 중간항이 소거되어 1 − 1/21 = 20/21. 이 절의 표준 절차 그대로라 통찰로 세지 않음. M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "1/(k(k+1)) = 1/k − 1/(k+1) → 소거 → 1 − 1/21 = 20/21"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{20}{21}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0965.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "항 수·분모 간격(k(k+2) 는 계수 1/2 와 두 항씩 남음)을 바꿀 수 있음. 제약: 분자가 분모 인수의 차와 다르면 계수 조정이 필요함을 답에 반영."
    creative: "(1) 분모를 k(k+2) 로 바꿔 앞 두 항·뒤 두 항이 남는 소거(★2) (2) 값 20/21 을 주고 항 수 n 역산(★2 · BW d1) (3) 등차수열 a_n 의 ∑ 1/(a_k a_{k+1}) 로 일반항부터 구하게(★2~3 · 08 단원 결합)."
```

```yaml
- id: RPM-ALG-0966
  page: 131
  vendor_label: "교과서 09-3 여러 가지 수열의 합"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ∑_{k=1}^{9} 2/((2k+1)(2k+3)) 의 값.
  category: "부분분수 1/(2k+1) − 1/(2k+3) → 소거 → 1/3 − 1/21"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "분수꼴 수열의 합(부분분수·소거)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    분모 두 인수의 차가 2 이고 분자도 2 라 계수 없이 1/(2k+1) − 1/(2k+3) 로 나뉜다. 소거 후 1/3 − 1/21 = 6/21 = 2/7. 분자가 1 이면 1/2 배가 붙는 지점이 함정(T-단위). 통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "2/((2k+1)(2k+3)) = 1/(2k+1) − 1/(2k+3) → 소거 → 1/3 − 1/21 = 2/7"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{2}{7}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0966.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자(1 이면 계수 1/2)·항 수·분모의 등차(3k+1)(3k+4)를 바꿀 수 있음. 제약: 끝항 분모가 깔끔한 정수가 되도록 항 수 선택."
    creative: "(1) 분자를 1 로 바꿔 계수 1/2 함정(★1~2) (2) 값 2/7 을 주고 항 수 역산(★2 · BW d1) (3) 분모를 등차수열 a_k a_{k+1} 로 주고 일반항부터 구하는 두 단계(★2~3)."
```

```yaml
- id: RPM-ALG-0967
  page: 131
  vendor_label: "교과서 09-3 여러 가지 수열의 합"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ∑_{k=1}^{80} 1/(√(k+1)+√k) 의 값.
  category: "분모 유리화 → √(k+1) − √k → 소거 → √81 − 1"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "분모에 근호가 있는 수열의 합(유리화·소거)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    분모를 유리화하면 √(k+1) − √k 로 계수 없이 나뉘고 소거 뒤 √81 − √1 = 8. 상한 80 이 n+1=81 완전제곱이 되도록 짜인 표준 절차. 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "유리화 → √(k+1) − √k → 소거 → √81 − 1 = 8"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$8$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0967.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "항 수를 바꿀 수 있음. 제약: n+1 이 완전제곱수(24, 48, 99)여야 답이 정수."
    creative: "(1) 값 8 을 주고 항 수 n 을 역산(★2 · BW d1) (2) 분모를 √(k+2)+√k 로 바꿔 계수 1/2 와 두 항씩 남는 소거(★2) (3) 분모를 √k+√(k+1) 로 순서만 바꾸어 부호 처리(★1 · T-부호)."
```

```yaml
- id: RPM-ALG-0968
  page: 131
  vendor_label: "교과서 09-3 여러 가지 수열의 합"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ∑_{k=1}^{24} 1/(√(2k−1)+√(2k+1)) 의 값.
  category: "유리화 → (√(2k+1) − √(2k−1))/2 → 소거 → (√49 − 1)/2"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "분모에 근호가 있는 수열의 합(유리화·소거)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    유리화하면 분모가 (2k+1)−(2k−1)=2 라 (√(2k+1) − √(2k−1))/2 가 되고 소거 뒤 (√49 − √1)/2 = 3. 계수 1/2 를 빠뜨리는 지점이 함정(T-단위). 통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "유리화 → (√(2k+1) − √(2k−1))/2 → 소거 → (7 − 1)/2 = 3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$3$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0968.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "항 수·근호 안 등차(3k−1, 3k+2)를 바꿀 수 있음. 제약: 끝항의 2n+1 이 완전제곱수(n=4, 12, 24, 40)여야 답이 정수."
    creative: "(1) 값 3 을 주고 항 수 역산(√(2n+1)=7 → ★2 · BW d1) (2) 근호 안을 등차수열 a_k 로 일반화해 공차가 계수로 나오게(★3 · EQV d1) (3) 분자에 √(2k+1)−√(2k−1) 을 직접 주어 소거만 묻기(★1)."
```

```yaml
- id: RPM-ALG-0969
  page: 131
  vendor_label: "교과서 09-3 여러 가지 수열의 합"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ∑_{k=1}^{99} log(k/(k+1)) 의 값.
  category: "로그의 몫 성질 → log k − log(k+1) → 소거 → −log 100"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그가 포함된 수열의 합(로그 성질·소거)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    log(k/(k+1)) = log k − log(k+1) 로 차 꼴을 만들면 소거 뒤 log 1 − log 100 = −2. 곱으로 묶어 log(1/2·2/3·…·99/100) = log(1/100) 으로 해도 같다. 로그 단원 도구는 기본 성질 수준이라 XU 로 세지 않음. 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "log(k/(k+1)) = log k − log(k+1) → 소거 → −log 100 = −2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$-2$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0969.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "항 수·밑을 바꿀 수 있음. 제약: 끝항의 n+1 이 밑의 거듭제곱(10, 100, 1000 · 밑 2 면 2^m)이어야 답이 정수."
    creative: "(1) log((k+1)/k) 로 뒤집어 부호 반전(★1 · T-부호) (2) log_2 (1+1/k) 처럼 통분 뒤에야 몫 꼴이 보이게(★2 · EQV d1) (3) 값 −2 를 주고 항 수 역산(★2 · BW d1)."
```

```yaml
- id: RPM-ALG-0970
  page: 131
  vendor_label: "교과서 09-3 여러 가지 수열의 합"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    수열 1/(2·3), 1/(3·4), 1/(4·5), … 의 첫째항부터 제n항까지의 합.
  category: "일반항 1/((n+1)(n+2)) → 부분분수 → 소거 → n 의 식"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "분수꼴 수열의 합(부분분수·소거)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    k 번째 항 1/((k+1)(k+2)) = 1/(k+1) − 1/(k+2) 로 나누고 k=1~n 소거하면 1/2 − 1/(n+2) = n/(2(n+2)). 일반항 읽기·부분분수·소거·통분 4단계에 문자 n 이라 M_total 7 이지만 모두 표준 절차. 교과서 ★1 유지.
  tier: star_1
  mechanism_primary: "일반항 1/((k+1)(k+2)) → 1/(k+1) − 1/(k+2) → 소거 → 1/2 − 1/(n+2) = n/(2(n+2))"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{n}{2(n+2)}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0970.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "시작 분모(1·2, 3·4)·인수 간격(k(k+2) 면 계수 1/2)을 바꿀 수 있음. 제약: 일반항의 두 인수가 k 의 일차식이어야 부분분수가 한 줄."
    creative: "(1) 합이 5/12 인 n 을 역산(★2 · BW d1) (2) 일반항 대신 항의 나열을 주지 않고 분모 수열 2·3, 3·4, … 를 등차수열 a_k a_{k+1} 로 서술(★2) (3) 통분 전 꼴로 답을 주고 같은 식인지 판별하는 보기(★2)."
```

```yaml
- id: RPM-ALG-0971
  page: 131
  vendor_label: "교과서 09-3 여러 가지 수열의 합"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    수열 1/(√4+√5), 1/(√5+√6), 1/(√6+√7), … 의 첫째항부터 제n항까지의 합.
  category: "일반항 1/(√(n+3)+√(n+4)) → 유리화 → 소거 → √(n+4) − 2"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "분모에 근호가 있는 수열의 합(유리화·소거)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    k 번째 항 1/(√(k+3)+√(k+4)) 를 유리화하면 √(k+4) − √(k+3), k=1~n 소거하면 √(n+4) − √4 = √(n+4) − 2. 일반항 읽기·유리화·소거·√4=2 정리의 표준 절차이고 문자 n 으로 M_total 7. 교과서 ★1 유지.
  tier: star_1
  mechanism_primary: "일반항 1/(√(k+3)+√(k+4)) → 유리화 → √(k+4) − √(k+3) → 소거 → √(n+4) − 2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\sqrt{n+4}-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0971.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "시작 근호(√1+√2, √9+√10)를 바꿀 수 있음. 제약: 첫 항의 앞 근호가 완전제곱수여야 답의 상수가 정수."
    creative: "(1) 합이 3 이 되는 n 을 역산(√(n+4)=5 → ★2 · BW d1) (2) 근호 안 간격을 2 로(√(k+3)+√(k+5) → 계수 1/2 · 두 항씩 남음 · ★2) (3) 수열의 항을 주지 않고 일반항을 등차수열 a_k 로 서술해 유리화 계수를 공차로(★3 · EQV d1)."
```

### 유형 01 합의 기호 $\sum$

```yaml
- id: RPM-ALG-0972
  page: 132
  vendor_label: '유형 01 합의 기호 $\sum$'
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    ∑_{k=1}^{n} (a_{2k−1}+a_{2k}) = 5n² 일 때 ∑_{k=1}^{20} a_k 의 값.
  category: "구하는 합을 두 항씩 묶어 조건식 n=10 으로 읽기 → 대입"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "a_1+…+a_20 을 (a_1+a_2)+…+(a_19+a_20) 열 쌍으로 묶어 조건식의 n=10 과 같음을 읽음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "합의 기호 ∑(항을 짝지어 조건식으로 재해석)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    조건식은 홀수항·짝수항 한 쌍씩의 합을 n 쌍 더한 것이므로 a_1~a_20 의 합은 10 쌍, 즉 n=10 을 대입한 5·100 = 500. 조건식을 ∑ 뜻대로 펼쳐 목표 합과 같은 대상임을 읽는 EQV d1 하나. 유형 대표문제(난이도 없음) ★2 출발·통찰 1개 → ★2.
  tier: star_2
  mechanism_primary: "∑_{k=1}^{20} a_k = ∑_{k=1}^{10} (a_{2k−1}+a_{2k}) → n=10 대입 → 500"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$500$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0972.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "조건식 5n² 을 다른 다항식(n²+n, 3n²−n)으로, 항 수 20 을 다른 짝수로 바꿀 수 있음. 제약: 구하는 합의 항 수가 짝수여야 쌍이 딱 맞음."
    creative: "(1) 항 수를 21 로 해 마지막 항 a_21 을 따로 주고 더하게(★2~3 · T-경계) (2) 세 항씩 묶은 조건식으로 바꾸기(★2) (3) 조건식이 n 에 대한 식이므로 a_{2n−1}+a_{2n} = 10n−5 처럼 쌍의 값 자체를 역산하게(★3 · BW d1 · 08 단원 S_n−S_{n−1} 결합)."
```

```yaml
- id: RPM-ALG-0973
  page: 132
  vendor_label: '유형 01 합의 기호 $\sum$'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    나열된 합을 ∑ 로 옮긴 다섯 보기 중 옳지 않은 것 고르기(항 수·일반항·첨자 검증). 5지선다.
  category: "보기마다 일반항·끝항으로 상한 검산 → ⑤ 상한 오류"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "합을 ∑로 나타내기(항 수·일반항 검증)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ①~④는 끝항을 일반항에 넣었을 때 상한이 맞고, ⑤는 (k+2)²=121 에서 k=9 인데 상한이 10 이라 틀림. 보기 다섯 개를 각각 검산하는 반복 노동이라 Mₛ·Mₖ 2, 함정은 항 수(T-경계) 한 종류. 통찰 없음·유형 「중」 ★2 출발 → ★2.
  tier: star_2
  mechanism_primary: "각 보기의 끝항을 일반항에 대입해 상한 검산 → ⑤ (k+2)²=121 이면 k=9 → 상한 10 이 오류"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0973.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 보기의 끝항·상한·일반항 꼴(등차·등비·제곱·부호 교대)을 바꿀 수 있음. 제약: 오답 보기는 정확히 하나, 상한이 하나 어긋나는 방식으로."
    creative: "(1) 오답 보기를 첨자 이동한 동치 표현(∑_{k=0}^{8}(k+3)²)으로 바꿔 동치 판단을 시키기(★2~3 · EQV d1) (2) 옳은 것의 개수를 묻기(★2) (3) 같은 합의 ∑ 표현이 여러 개인 ㄱㄴㄷ 로 첨자 이동을 확인(★2 · EQV d1)."
```

```yaml
- id: RPM-ALG-0974
  page: 132
  vendor_label: '유형 01 합의 기호 $\sum$'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    a_1=5, a_2025=105 일 때 ∑_{k=1}^{2024} a_{k+1} − ∑_{n=2}^{2025} a_{n−1} 의 값.
  category: "두 합을 항으로 펼쳐 공통 부분 소거 → a_2025 − a_1"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "첨자가 다른 두 ∑ 를 a_2+…+a_2025 와 a_1+…+a_2024 로 읽어 공통 부분이 소거됨을 파악"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "∑의 첨자 이동·공통 부분 소거"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    첫 합은 a_2~a_2025, 둘째 합은 a_1~a_2024 이므로 차는 a_2025 − a_1 = 100. 첨자 문자와 범위가 달라 보이는 두 ∑ 를 같은 항의 나열로 읽는 EQV d1 하나 뒤 계산은 한 줄. 유형 「중」 ★2 출발·통찰 1개 → ★2.
  tier: star_2
  mechanism_primary: "두 합을 펼치면 a_2+…+a_2025 와 a_1+…+a_2024 → 공통 부분 소거 → a_2025 − a_1 = 100"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$100$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0974.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a_1·a_2025 값·항 수를 바꿀 수 있음. 제약: 두 ∑ 의 항 수가 같아야 한 항씩만 남음."
    creative: "(1) 두 ∑ 의 항 수를 하나 다르게 해 두 항이 남게(★2 · T-경계) (2) ∑_{k=1}^{n}(a_{k+1} − a_k) 로 묶어 망원 합으로 일반화(★2 · EQV d1) (3) 첨자 문자를 셋 이상 섞은 세 ∑ 의 조합(★2~3)."
```

```yaml
- id: RPM-ALG-0975
  page: 132
  vendor_label: '유형 01 합의 기호 $\sum$'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    ∑_{k=1}^{20} k·a_k = 200, ∑_{k=1}^{19} k·a_{k+1} = 100 일 때 ∑_{k=1}^{20} a_k 의 값.
  category: "둘째 합을 첨자 이동 → (j−1)a_j 분해 → 첫 조건과 목표 합으로 표현 → 방정식"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "∑_{k=1}^{19} k a_{k+1} 을 j=k+1 로 옮겨 ∑_{j=2}^{20} (j−1)a_j = ∑ j a_j − ∑ a_j 로 분해하면 첫 조건과 구하는 합의 차가 됨을 읽음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "∑의 첨자 이동·조건 결합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    둘째 합을 j=k+1 로 옮기면 ∑_{j=2}^{20}(j−1)a_j = (200 − a_1) − (S − a_1) = 200 − S 이므로 100 = 200 − S, S = 100. 첨자 이동만으로는 안 되고 (j−1)a_j 를 j a_j − a_j 로 갈라 두 조건을 잇는 재해석이 필요해 EQV d2. j=1 항이 양쪽에서 함께 빠져 a_1 이 상쇄되는 것도 확인해야 한다. 유형 「중」 ★2 출발·통찰 1개(d2) → ★2 유지. [분류 이슈] 유형 01 안에서 골조가 가장 무겁고(M_total 7·EQV d2) ★3 후보 — 라벨은 벤더 「중」 ★2 로 두고 기록.
  tier: star_2
  mechanism_primary: "∑_{k=1}^{19} k a_{k+1} = ∑_{j=2}^{20} (j−1)a_j = (∑ j a_j − a_1) − (∑ a_j − a_1) → 200 − S = 100 → S = 100"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$100$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0975.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "200·100 값·항 수 20 을 바꿀 수 있음. 제약: 둘째 합의 상한이 첫째보다 1 작아야 j=2~20 으로 맞아떨어짐."
    creative: "(1) 조건을 뒤집어 ∑a_k 와 ∑k a_k 를 주고 ∑k a_{k+1} 을 구하게(★2) (2) 계수를 (k+1)a_{k+1} 로 바꿔 분해가 필요 없게 하면 ★1~2 로 하락 (3) ∑(k+1)a_k 와 ∑k a_{k+1} 처럼 양쪽 다 이동시켜 a_1·a_20 이 남게 하면 항 값 조건이 추가돼 ★3 (EQV d2 + T-경계)."
```

### 유형 02 $\sum$의 성질

```yaml
- id: RPM-ALG-0976
  page: 132
  vendor_label: '유형 02 $\sum$의 성질'
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    ∑(a_k+b_k)² = 20, ∑(a_k−b_k)² = 8 일 때 ∑a_kb_k 의 값.
  category: "두 조건 전개 → 빼서 ∑4a_kb_k 만 남김 → 나누기"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "∑a_k²·∑b_k² 를 따로 구할 수 없으므로 두 조건을 전개해 빼면 교차항 4∑a_kb_k 만 남는다는 것을 읽음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "∑의 성질(곱셈공식 전개·조건 결합)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (a+b)²−(a−b)²=4ab 를 ∑ 안에서 쓰면 4∑a_kb_k = 20−8 = 12, 답 3. 두 조건을 각각 풀려 하지 않고 빼서 교차항만 남기는 EQV d1 하나. 유형 대표문제(난이도 없음) ★2 출발·통찰 1개 → ★2.
  tier: star_2
  mechanism_primary: "두 조건 전개 후 빼기 → ∑4a_kb_k = 12 → 3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$3$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0976.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "20·8 값을 바꿀 수 있음. 제약: 두 값의 차가 4 의 배수여야 답이 정수. 항 수 n 은 답에 안 쓰이므로 그대로 문자로 두어도 됨."
    creative: "(1) 두 조건을 더해 ∑(a_k²+b_k²) 를 묻기(★2) (2) ∑a_k², ∑b_k², ∑a_kb_k 중 둘을 주고 ∑(a_k+b_k)² 구하기(★2) (3) ∑(a_k+b_k)² 과 (∑a_k)(∑b_k) 를 혼동하는 개념 ㄱㄴㄷ(★2~3 · MI 아님·개념 확인)."
```

```yaml
- id: RPM-ALG-0977
  page: 132
  vendor_label: '유형 02 $\sum$의 성질'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    ∑_{k=1}^{9} a_k = −3, ∑_{k=1}^{9} a_k² = 12 일 때 ∑_{k=1}^{9} (2a_k−1)² 의 값. 5지선다.
  category: "제곱 전개 → 4∑a_k² − 4∑a_k + ∑1 → 대입"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∑의 성질(전개·상수항 n 배)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (2a_k−1)² = 4a_k² − 4a_k + 1 로 전개해 선형성으로 나누면 4·12 − 4·(−3) + 9 = 48+12+9 = 69, ⑤. 상수항 합이 1 이 아니라 항 수 9 인 것과 −4·(−3) 의 부호가 함정(T-표기·T-부호 두 종류지만 Mₜ 1 로 매김). 전개·분리·대입·정리 4단계라 Mₛ 2. 통찰 없음·유형 「중」 ★2 출발 → ★2.
  tier: star_2
  mechanism_primary: "(2a_k−1)² 전개 → 4∑a_k² − 4∑a_k + ∑1 → 48 + 12 + 9 = 69"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0977.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "∑a_k·∑a_k² 값·계수·항 수를 바꿀 수 있음. 제약: ∑a_k 를 음수로 두어 부호 함정을 유지하고, 선택지는 정수 등간격."
    creative: "(1) ∑a_k 와 ∑(a_k−1)² 을 주고 ∑a_k² 를 역산(★2 · BW d1) (2) ∑(a_k−p)² 이 최소가 되는 p 를 묻기(★3 · 이차함수 결합 XU d1) (3) 항 수를 n 문자로 두고 값 조건에서 n 을 구하게(★2~3 · BW d1)."
```

```yaml
- id: RPM-ALG-0978
  page: 132
  vendor_label: '유형 02 $\sum$의 성질'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    ∑_{k=1}^{20} (a_k+b_k) = 13, ∑_{k=1}^{20} (a_k−b_k) = −3 일 때 ∑_{k=1}^{20} (3a_k+b_k−1) 의 값.
  category: "두 조건 더하고 빼서 ∑a_k·∑b_k 분리 → 목표식 분리 대입"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∑의 성질(연립으로 ∑a_k·∑b_k 분리)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 조건을 선형성으로 풀면 ∑a_k + ∑b_k = 13, ∑a_k − ∑b_k = −3 이므로 ∑a_k = 5, ∑b_k = 8. 목표식은 3·5 + 8 − 20 = 3. ∑1 = 20 이 유일한 함정(T-표기). 연립·분리·대입 4단계라 Mₛ 2. 통찰 없음·유형 「중」 ★2 출발 → ★2.
  tier: star_2
  mechanism_primary: "두 조건 더하고 빼기 → ∑a_k = 5, ∑b_k = 8 → 3·5 + 8 − 20 = 3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$3$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0978.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "13·−3 값·목표식 계수·항 수를 바꿀 수 있음. 제약: 두 값의 합과 차가 짝수여야 ∑a_k·∑b_k 가 정수."
    creative: "(1) 조건을 ∑(2a_k+b_k), ∑(a_k+2b_k) 로 바꿔 연립 계수를 일반화(★2) (2) 항 수를 n 으로 두고 목표식 값 조건에서 n 역산(★2~3 · BW d1) (3) 조건 하나를 ∑(a_k+b_k)² 처럼 제곱으로 주면 분리가 안 됨을 판단하는 개념 문항(★2~3 · 0976 골조와 대비)."
```

```yaml
- id: RPM-ALG-0979
  page: 132
  vendor_label: '유형 02 $\sum$의 성질'
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    ∑_{j=1}^{n} a_j = n², ∑_{j=1}^{n} b_j = 6n 일 때 ∑_{j=21}^{30} (2a_j−3b_j) 의 값. 서술형.
  category: "부분 구간 합 = S_30 − S_20 → 선형성 분리 → 대입"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "j=21~30 의 합을 첫째항부터의 합 두 개의 차 ∑_{1}^{30} − ∑_{1}^{20} 으로 옮겨 조건식 n=30, 20 을 쓸 수 있게 함"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "부분 구간 합(S_30 − S_20)과 ∑의 성질"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ∑_{j=21}^{30} a_j = 900 − 400 = 500, ∑_{j=21}^{30} b_j = 180 − 120 = 60 이므로 2·500 − 3·60 = 820. 하한 21 을 첫째항부터의 합의 차로 바꾸는 EQV d1 하나 뒤 선형성 계산. 하한을 1 로 착각하거나 S_21 을 빼는 함정(T-경계). 서술형이지만 골조는 유형 「중」 ★2 → ★2.
  tier: star_2
  mechanism_primary: "∑_{j=21}^{30} = S_30 − S_20 → a: 900 − 400, b: 180 − 120 → 2·500 − 3·60 = 820"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$820$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0979.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "n²·6n 다항식·구간 21~30·목표식 계수를 바꿀 수 있음. 제약: 빼는 쪽 상한이 하한−1 이 되는 관계를 유지(21~30 → S_30 − S_20)."
    creative: "(1) 값 820 을 주고 구간의 끝을 역산하는 이차방정식(★2~3 · BW d1) (2) a_j 일반항(2j−1)까지 구하게 하는 서술형 확장(08 단원 S_n − S_{n−1} 결합 · ★2) (3) 구간을 홀수 번째 항만으로 바꿔 짝 묶기 골조(0972)와 결합(★3 · EQV d1 두 단계)."
```

## 표본 판정 요약 (33문)

- ★ 분포: ★1 25 · ★2 8 · ★3 0 · ★4 0 · ★5 0
- 통찰형 1(0975 · EQV d2) · 절차형 32 · premium 0. 통찰 라벨(d1)만 있는 절차형 4문(0972 · 0974 · 0976 · 0979).
- type_hint 상위: 「합을 ∑로 나타내기」 5(0951~0954 · 검증형 0973) · 「∑를 합의 꼴로 나타내기」 4 · 「자연수의 거듭제곱의 합 공식 계산」 4 · 「합을 ∑로 바꿔 거듭제곱의 합 공식 적용」 4 · 「분수꼴 수열의 합(부분분수·소거)」 3 · 「분모에 근호가 있는 수열의 합(유리화·소거)」 3 · 「∑의 성질」 계열 6(선형성 2 · 전개/연립/부분 구간 4)
- 그림: 0문
- 전사 답 확인: 33문 모두 풀이 결과가 전사본 answer 와 일치.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-ALG-0975 | 벤더 「중」 ★2 라벨이나 첨자 이동 뒤 (j−1)a_j 분해로 두 조건을 잇는 EQV d2·M_total 7 — 유형 01 안에서 가장 무거운 골조. 1단 차라 라벨은 ★2 로 두고 기록 | ★2 / ★3 |
| RPM-ALG-0969 | 로그 성질로 차 꼴을 만드는 소거 — 「여러 가지 수열의 합」 하위로 둘지 「로그 소거」 별도 유형으로 세울지 카탈로그 설계 때 결정. 로그 단원 결합은 기본 성질 수준이라 XU 불인정 | ★1 |
| RPM-ALG-0973 | 「합을 ∑로 나타내기」의 검증형(5지선다) 변종 — 유형 01 「합의 기호 ∑」 소속이지만 골조는 교과서 0951~0954 와 같은 계열. type_hint 를 교과서 계열과 통합할지 결정 필요 | ★2 |
| RPM-ALG-0960 | 두 ∑ 를 하나로 묶기 vs 각각 계산의 두 갈래 — 둘 다 짧아 I-SC 불인정으로 결정. 카탈로그에서 「∑ 묶기」를 별도 착안으로 볼지 기록 | ★1 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **∑의 뜻·표기 계열 9문**(0947~0954 · 0973): 「∑ ↔ 합의 나열」 한 유형으로 통합 가능(base ★1). 항 수·첨자 함정을 검증하는 5지선다(0973)는 같은 유형의 ★2 변형으로 두면 된다.
- **거듭제곱 합 공식 계열 8문**(0957~0964): 「자연수의 거듭제곱의 합」 한 유형(base ★1). ∑ 로 주어졌는지 나열로 주어졌는지로 나눌 필요는 없고, 일반항 읽기(0961~0964)를 하위 변형으로 둔다.
- **소거 계열 7문**(0965~0971): 「부분분수 소거」「유리화 소거」 두 유형으로 세우고(base ★1 · 계수 조정·간격 2 변형이 ★2), 로그 소거(0969)는 「소거의 다른 꼴」로 흡수하거나 별도 유형(이슈 표).
- **∑의 성질 6문**(0955 · 0956 · 0976~0979): 「선형성 대입」(base ★1)과 「전개·연립·부분 구간 합」(base ★2)으로 분리 권고. 0979 의 S_30 − S_20 골조는 08 단원 S_n 과 겹치므로 카탈로그에서 교차 참조.
- **첨자 이동 3문**(0972 · 0974 · 0975): RPM 명칭 「합의 기호 ∑」보다 「∑의 첨자 이동·항 재배열」이 골조에 맞다. 0972(짝 묶기)·0974(공통 부분 소거)가 base ★2, 0975(분해·조건 결합)가 그 유형의 ★3 상단.
