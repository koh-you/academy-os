---
name: mechanism-데이터-RPM-ALG-01-p2
description: RPM 대수 01 지수(2/3 · 유형 02~10) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 대수 (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-alg
  section: 01 지수
  unit_code: ALG-01
  part: "2/3"
  extract_range: "8~12쪽 · 0036~0071"
  total_problems: 36
  unit_total: 109
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-alg/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-alg/items/<id>.tex
  image_source: latex-bank/rpm-alg/figures/ (crops.json)
---

# RPM 대수 · 01 지수 (2/3) 정독 데이터 (v1.0)

이 파일은 RPM 대수 01 지수 단원의 두 번째 조각 — 8~12쪽 「유형 02 거듭제곱근의 계산」부터 「유형 10 (a^x-a^{-x})/(a^x+a^{-x}) 꼴의 식의 값 구하기」까지 아홉 유형 × 4문 = 36문항을 다룬다. 그림 문항은 없다. RPM 의 벤더 신호는 구역(유형)이 곧 난이도 층이며, 유형 첫 문항은 「대표문제」 태그(난이도 표시 없음), 나머지는 하·중하·중·상중 난이도와 「서술형」 태그가 붙는다. 이 범위는 유형별 기본 문제라 ★1~3 에 몰려 있고, 유형 03 의 차의 부호 비교(0043)·「거듭제곱이 정수가 되는 조건」 세 문항(0051·0055·0059)·합차 공식 연쇄(0062)·x=p-q 관계식(0067)·역수 지수 조건 변환(0071)만 통찰형이다.

이 자산의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 화살표 사슬) · `insights[]`(유형 코드·depth·근거) · `variation_notes`(numeric: 바꿔도 되는 수와 제약 · creative: 통찰 골조를 유지한 변형과 ★ 변동 지점)를 채웠다. 유형 카탈로그가 없으므로 `type_id`·`base_star` 는 null 이고 `type_hint` 에 유형명을 제안했다.

## 문항 데이터

### 유형 02 거듭제곱근의 계산

```yaml
- id: RPM-ALG-0036
  page: 8
  vendor_label: "유형 02 거듭제곱근의 계산"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    거듭제곱근의 곱·나눗셈·중첩 근호 등식 5개(∛2×∛4, ∛(2∛64), ∛(-27)/∛8, (∛5×1/√5)^6, √(2∛4)÷∛(4√2)) 중 옳지 않은 것 고르기. 5지선다.
  category: "거듭제곱근 → 지수 변환 → 지수법칙으로 각 보기 검산"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "거듭제곱근의 계산(지수 변환·지수법칙)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    보기마다 밑을 2·3·5 로 통일해 지수로 옮기면 한두 줄. ④ 는 5^{2}·5^{-3}=5^{-1} 이라 5 가 아님. ⑤ 는 2^{5/6}÷2^{5/6}=1 로 가장 길다. 통찰 없음·M_total 6 → 유형 대표 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "각 보기의 거듭제곱근을 지수로 변환 → 지수법칙으로 정리 → 등식이 깨지는 보기 선택"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0036.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(2·3·5)과 근호 차수(2·3·4·6)를 바꿔 다섯 보기를 재구성. 제약: 옳지 않은 보기는 하나만, 음수 밑은 홀수 차수 근호에만(∛(-27) 류), 각 보기 값이 정수나 간단한 분수로 떨어지게."
    creative: "(1) 옳은 것의 개수 묻기(★2 유지) (2) 한 보기에 a>0 문자 밑을 섞어 일반화(Mₐ 상승 ★2~3) (3) 짝수 차수 근호에 음수 밑을 넣어 정의 여부를 따지는 보기 추가(I-MI d1 · ★3)."
```

```yaml
- id: RPM-ALG-0037
  page: 8
  vendor_label: "유형 02 거듭제곱근의 계산"
  vendor_level: "하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    a=√32÷∜4, b=∛√64 일 때 a/b 의 값.
  category: "거듭제곱근 → 2 의 거듭제곱 지수 → 나눗셈"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "거듭제곱근의 계산(지수 변환·지수법칙)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    a=2^{5/2}÷2^{1/2}=4, b=64^{1/6}=2 → a/b=2. 밑 2 통일 한 단계. 벤더 「하」·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "√32÷∜4=2^{5/2-1/2}=4 · ∛√64=2^{6/6}=2 → 4/2=2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0037.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 2 의 거듭제곱(32·4·64)을 3 의 거듭제곱(27·9·729)이나 다른 차수 조합(√·∛·∜·⁶√)으로 교체. 제약: 각 지수 계산이 정수로 떨어지고 a/b 가 정수(또는 간단한 분수)여야 함."
    creative: "(1) a·b 나 a^2/b 를 묻기(★1 유지) (2) a, b 를 서로 다른 밑(2 와 3)으로 주고 ab 의 값을 묻기(★1~2) (3) a/b=2^k 의 k 를 묻는 서술형으로(★2)."
```

```yaml
- id: RPM-ALG-0038
  page: 8
  vendor_label: "유형 02 거듭제곱근의 계산"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    a>0, b>0 일 때 ¹²√(2a^5b^4)×∜(2ab^2)÷⁶√(4a^3b) 를 간단히 한 꼴. 5지선다(근호 꼴 보기).
  category: "세 근호를 12제곱근 지수로 통일 → 밑별 지수 합차 → 근호로 되돌리기"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "거듭제곱근의 계산(지수 변환·지수법칙)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분모 12 로 통일하면 2 의 지수 (1+3-4)/12=0, a 는 (5+3-6)/12=1/6, b 는 (4+6-2)/12=2/3 → a^{1/6}b^{2/3}=⁶√(ab^4). 상수 2 가 사라지는 것과 마지막 근호 환원(T-표기)만 주의. 통찰 없음·M_total 6 → 벤더 「중」 ★2.
  tier: star_2
  mechanism_primary: "근호 세 개를 지수 분모 12 로 통일 → 밑별 지수 합차 → a^{1/6}b^{2/3} 를 ⁶√(ab^4) 로 환원"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0038.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 차수(12·4·6)와 a, b 의 지수(5,4 / 1,2 / 3,1)를 바꿈. 제약: 차수의 최소공배수가 12 이하, 상수 2 의 지수가 0 이 되게 맞추거나 상수가 남으면 보기에 반영, 최종 지수가 양수이고 약분 뒤 한 근호로 표현되게."
    creative: "(1) 결과를 a^p b^q 지수 꼴 보기로 바꾸기(★2) (2) 상수가 남아 2^{1/4} 같은 항이 생기게 하기(T-표기 ★2) (3) 식을 n제곱근 하나로 쓸 때 n 의 최솟값을 묻기(I-EQV d1 ★3)."
```

```yaml
- id: RPM-ALG-0039
  page: 8
  vendor_label: "유형 02 거듭제곱근의 계산"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    a>0 일 때 ∛(∜a/⁵√a)÷∜(∛a/⁵√a)×⁵√(∛a/∜a) 를 간단히 한 값.
  category: "각 항을 a 의 단일 지수로 → 지수 합차 → a^0"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "거듭제곱근의 계산(지수 변환·지수법칙)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    각 항의 지수는 (1/4-1/5)/3=1/60, (1/3-1/5)/4=1/30, (1/3-1/4)/5=1/60. 1/60-1/30+1/60=0 → a^0=1. 분수 지수 산술이 세 번 반복될 뿐 착안은 없음. 벤더 「중」·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "중첩 근호 세 항을 a^{1/60}, a^{1/30}, a^{1/60} 로 변환 → 지수 1/60-1/30+1/60=0 → 1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0039.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 차수 (3,4,5) 순환 구조를 (2,3,4) 등 다른 세 수로 교체. 제약: 지수 합이 0 이나 간단한 분수(a^{1/12} 등)로 떨어지게 설계하고, 답이 1 이 아니면 지수 꼴로 답을 명시."
    creative: "(1) 순환 구조는 두고 ÷·× 위치를 바꿔 지수 합이 0 이 아니게(★2) (2) 결과가 a^{1/n} 일 때 n 을 묻기(★2) (3) 세 항의 지수를 나열해 순환 대칭으로 합이 0 임을 계산 없이 보이게 하기(I-SYM d1 ★3)."
```

### 유형 03 거듭제곱근의 대소 비교

```yaml
- id: RPM-ALG-0040
  page: 9
  vendor_label: "유형 03 거듭제곱근의 대소 비교"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    A=√√5, B=∛2, C=√∛10 의 대소 관계. 5지선다.
  category: "지수 표현 → 차수의 최소공배수(12)제곱 → 정수 비교"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "거듭제곱근의 대소 비교(공통 거듭제곱)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    A=5^{1/4}, B=2^{1/3}, C=10^{1/6}. 12제곱하면 125, 16, 100 → B<C<A. 유형의 표준 기법(최소공배수 제곱) 한 번. 통찰 없음·M_total 5 → −1 후보이나 기법 선택이 필요한 대표문제라 ★2 유지.
  tier: star_2
  mechanism_primary: "세 수를 5^{1/4}, 2^{1/3}, 10^{1/6} 로 → 12제곱 125·16·100 → B<C<A"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0040.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(5·2·10)과 차수(4·3·6)를 바꿈. 제약: 차수의 최소공배수가 12 이하, 거듭제곱한 값이 서로 다르고 크기 순서가 밑의 크기 순서와 달라야(밑이 큰 쪽이 작아지는 경우 포함) 변별력 유지."
    creative: "(1) 네 수 비교로 확장(★2) (2) 분수 밑(1/6, 1/5)으로 바꿔 역순 함정 추가(0041 형 ★2) (3) 계수·차가 붙은 수(3∛5-√3 류)로 바꾸면 차의 부호 판정 통찰이 붙어 ★3(0043 형)."
```

```yaml
- id: RPM-ALG-0041
  page: 9
  vendor_label: "유형 03 거듭제곱근의 대소 비교"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    A=∛(1/6), B=√(1/5), C=∛√(1/17) 의 대소 관계. 5지선다.
  category: "지수 표현 → 6제곱 → 분수 비교(분모 클수록 작음)"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "거듭제곱근의 대소 비교(공통 거듭제곱)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    6제곱하면 A^6=1/36, B^6=1/125, C^6=1/17 → B<A<C. 0040 과 같은 골조에 분수 밑이 붙어 분모 비교 방향만 조심. 벤더 「중하」·통찰 없음·M_total 5 → −1 후보이나 분수 역순 함정이 있어 ★2.
  tier: star_2
  mechanism_primary: "세 수를 (1/6)^{1/3}, (1/5)^{1/2}, (1/17)^{1/6} 로 → 6제곱 1/36·1/125·1/17 → B<A<C"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0041.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모(6·5·17)와 차수(3·2·6)를 바꿈. 제약: 6제곱값의 분모가 서로 다르고, 분자가 1 이라 「분모 클수록 작다」 역순이 유지되게. 분자를 1 이 아닌 값으로 두면 통분이 생겨 Mₖ 상승."
    creative: "(1) 1 보다 작은 수와 큰 수를 섞어 1 을 기준으로 먼저 가르게 하기(I-EQV d1 후보 ★2~3) (2) 소수(0.2, 0.04)로 주어 분수 변환을 추가(★2) (3) 가장 작은 수의 역수를 묻기(★2)."
```

```yaml
- id: RPM-ALG-0042
  page: 9
  vendor_label: "유형 03 거듭제곱근의 대소 비교"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    √2, ∛3, ∜5, ∛√7 중 가장 큰 수 a 와 가장 작은 수 b 에 대해 a^{12}+b^{12} 의 값. 서술형.
  category: "12제곱으로 네 수 비교 → 최대·최소 선택 → 12제곱값 합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "거듭제곱근의 대소 비교(공통 거듭제곱)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    12제곱값 64, 81, 125, 49 → a=∜5, b=⁶√7. a^{12}+b^{12}=125+49=174. 발문이 12제곱을 그대로 묻고 있어 비교와 답 계산이 같은 단계. 벤더 「중」·서술형·통찰 없음 → ★2.
  tier: star_2
  mechanism_primary: "네 수 12제곱 64·81·125·49 → 최대 ∜5·최소 ⁶√7 → 125+49=174"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$174$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0042.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(2·3·5·7)과 차수(2·3·4·6)를 바꿈. 제약: 차수 최소공배수 n 이 12 이하, n제곱값이 모두 다르고 최대·최소가 밑 순서와 어긋나게. 묻는 지수는 최소공배수와 같게 두면 계산이 정리됨."
    creative: "(1) a^{12}-b^{12} 나 (ab)^{12} 로(★2) (2) 묻는 지수를 최소공배수의 배수가 아닌 값으로 두어 근호 답이 나오게(T-표기 ★2) (3) 「두 번째로 큰 수」를 묻거나 다섯 수로 확장(★2~3)."
```

```yaml
- id: RPM-ALG-0043
  page: 9
  vendor_label: "유형 03 거듭제곱근의 대소 비교"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    A=3∛5-√3, B=4∛5-2√3, C=5∛5-3√3 의 대소 관계. 5지선다.
  category: "두 수의 차 → 공통 차 ∛5-√3 의 부호 → 순서"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "세 수를 직접 근사하지 않고 B-A, C-B 가 모두 ∛5-√3 임을 보아 대소를 한 수의 부호로 환원"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "거듭제곱근의 대소 비교(차의 부호)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    B-A=C-B=∛5-√3. 6제곱 25<27 이므로 ∛5<√3, 즉 차가 음수 → C<B<A. 대소 비교를 차의 부호로 바꾸는 착안(EQV d1)과 부호 뒤집힘(T-부호)이 핵심. 벤더 「상중」·통찰 1 → ★3.
  tier: star_3
  mechanism_primary: "B-A=C-B=∛5-√3 → 6제곱 비교 25<27 로 음수 → C<B<A"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0043.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공통 차를 이루는 두 근호(∛5, √3)와 계수 등차(3,4,5 / 1,2,3)를 바꿈. 제약: 두 근호의 크기가 아주 가까워(공통 거듭제곱값 차가 작게) 근사로는 못 풀게 하고, 계수가 등차라 차가 일정하도록 유지."
    creative: "(1) 차의 부호가 양수가 되도록 근호를 바꿔 순서를 뒤집기(★3 유지) (2) 계수 등차를 깨서 B-A 와 C-B 가 다른 수가 되게 하면 비교 두 번(★3) (3) A, B, C 를 3x-y 꼴 문자식으로 주고 x, y 의 대소만 알려주는 추상화(Mₐ 상승 ★3~4)."
```

### 유형 04 지수가 정수인 식의 계산

```yaml
- id: RPM-ALG-0044
  page: 9
  vendor_label: "유형 04 지수가 정수인 식의 계산"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    (2^{-3}+4^{-1})/6 × 10/(3^4+27^2) 을 간단히 한 값. 5지선다(6^{-n}·12^{-n} 꼴 보기).
  category: "음의 지수를 분수로 → 통분·약분 → 6 의 거듭제곱으로 표기"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수가 정수인 식의 계산(음의 지수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    1/8+1/4=3/8, ÷6 → 1/16. 81+729=810, 10/810=1/81. 곱 1/1296=6^{-4}. 산술이 전부이며 마지막에 1296=6^4 임을 알아채는 표기 단계만 남는다. 통찰 없음·M_total 6 → 대표문제 ★2.
  tier: star_2
  mechanism_primary: "2^{-3}+4^{-1}=3/8 → ÷6 =1/16 · 10/(81+729)=1/81 → 1/1296=6^{-4}"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-alg/items/0044.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 인수의 밑(2·4 / 3·27)과 지수, 곱해지는 상수(6·10)를 바꿈. 제약: 결과가 단일 밑의 정수 지수(6^{-4}, 12^{-3} 등)로 떨어지도록 상수를 맞추고, 보기의 밑·지수를 서로 가깝게(6^{-4} vs 6^{-5}) 두어 표기 검산이 필요하게."
    creative: "(1) 결과를 a^{-n} 이 아니라 분수로 묻기(★1~2) (2) 3^4+27^2 를 3^4(1+3^2) 로 묶는 구조를 강조해 계산 없이 정리하게(I-EQV d1 ★2~3) (3) 두 항의 합이 아니라 차(2^{-3}-4^{-1})로 부호 함정(T-부호 ★2)."
```

```yaml
- id: RPM-ALG-0045
  page: 9
  vendor_label: "유형 04 지수가 정수인 식의 계산"
  vendor_level: "하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    a^{-8}×(a^{-3})^{-2}÷a^{-5}=a^k 일 때 정수 k (a≠0, a≠1).
  category: "지수법칙(곱·거듭제곱·나눗셈) → 지수 합"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수가 정수인 식의 계산(지수법칙)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    지수 -8+6-(-5)=3. 음의 지수 부호만 조심하면 한 줄. 벤더 「하」·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "(a^{-3})^{-2}=a^6 → 지수 -8+6+5=3 → k=3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0045.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 지수(-8, -3·-2, -5)를 바꿈. 제약: 정수 지수만 사용, 결과 k 가 0 이 아닌 정수(0 이면 a≠1 조건이 무의미), 나눗셈의 음의 지수를 최소 한 번 포함해 부호 함정 유지."
    creative: "(1) k 가 음수가 되게 설계(★1) (2) 두 문자 a, b 로 확장해 a^k b^m 의 k+m 을 묻기(★1~2) (3) 지수 자리에 문자 n 을 넣어 n 에 대한 일차식 답(Mₐ 상승 ★2)."
```

```yaml
- id: RPM-ALG-0046
  page: 9
  vendor_label: "유형 04 지수가 정수인 식의 계산"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    (3^{-3}÷27^{-2})^{-4}÷9^{-5} 를 간단히 한 꼴. 5지선다(3^{-n} 보기).
  category: "밑 3 통일 → 괄호 안 지수 차 → 거듭제곱·나눗셈 지수 정리"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수가 정수인 식의 계산(음의 지수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    27^{-2}=3^{-6}, 9^{-5}=3^{-10}. 괄호 안 3^{-3+6}=3^3, (3^3)^{-4}=3^{-12}, ÷3^{-10} → 3^{-2}. 음의 지수가 네 번 겹쳐 부호 실수(T-부호)가 잦다. 벤더 「중하」·통찰 없음·M_total 5 → ★2(−1 후보이나 부호 단계가 네 번이라 유지).
  tier: star_2
  mechanism_primary: "27→3^3, 9→3^2 로 밑 통일 → (3^{-3}÷3^{-6})^{-4}=3^{-12} → ÷3^{-10} → 3^{-2}"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0046.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 3 의 거듭제곱(27·9)을 2 의 거듭제곱(8·4·16)으로, 네 지수(-3,-2,-4,-5)를 바꿈. 제약: 정수 지수, 결과가 단일 밑의 정수 지수이고 보기 다섯 개가 3^{-2}~3^{-10} 처럼 같은 밑에 지수만 달라야 검산 부담 유지."
    creative: "(1) 결과 지수가 양수가 되게(★1~2) (2) 서로 다른 밑(2, 3)을 섞어 2^p 3^q 꼴로 답하게(★2) (3) 지수 자리에 n 을 넣고 결과가 3^{-2} 가 되는 n 을 묻기(I-BW 없이 일차방정식 ★2)."
```

```yaml
- id: RPM-ALG-0047
  page: 9
  vendor_label: "유형 04 지수가 정수인 식의 계산"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    √((2+2^3)/(5^{-1}+5^{-3})) × √((5+5^3)/(2^{-1}+2^{-3})) 의 값.
  category: "각 분수를 정리 → 두 근호를 하나로 → 완전제곱수"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수가 정수인 식의 계산(음의 지수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    2+2^3=10, 5^{-1}+5^{-3}=26/125 → 첫 분수 625/13. 5+5^3=130, 2^{-1}+2^{-3}=5/8 → 둘째 208. 곱 625·16=10000 → 100. 직접 계산으로 충분하고, 5^{-3}(5^2+1)·2(1+2^2) 로 묶으면 26 과 5 가 약분되는 구조가 보인다. 벤더 「중」·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "각 분수 정리 625/13 · 208 → 두 근호를 √(625·16) 하나로 → 100"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$100$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0047.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 밑(2, 5)과 지수 쌍(1,3 / -1,-3)을 바꿈. 제약: 밑 p, q 와 지수를 대칭으로 두면 (p+p^3)(q+q^3)/((q^{-1}+q^{-3})(p^{-1}+p^{-3}))=p^4 q^4 로 항상 완전제곱이 되므로 답이 (pq)^2 · 대칭을 깨면 근호가 남을 수 있어 확인 필요."
    creative: "(1) 근호를 없애고 분수식 값만 묻기(★2) (2) 밑을 문자 a, b 로 두고 (ab)^2 임을 보이게 하는 서술형(I-EQV d1 · Mₐ 상승 ★3) (3) 한쪽 분수만 주고 값이 정수가 되는 조건을 묻기(★3)."
```

### 유형 05 지수가 실수인 식의 계산

```yaml
- id: RPM-ALG-0048
  page: 10
  vendor_label: "유형 05 지수가 실수인 식의 계산"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    {(9/25)^{3/4}}^{2/3} × {(27/125)^{-1/6}}^4 의 값.
  category: "밑을 (3/5) 의 거듭제곱으로 → 지수 곱 → 지수 합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수가 유리수인 식의 계산(밑 통일)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (9/25)^{1/2}=(3/5), (27/125)^{-2/3}=(3/5)^{-2}. 곱 (3/5)^{-1}=5/3. 9/25 와 27/125 를 (3/5)^2, (3/5)^3 으로 읽는 것이 전부. 통찰 없음·M_total 5 → 대표문제 ★2 유지(−1 후보).
  tier: star_2
  mechanism_primary: "9/25=(3/5)^2, 27/125=(3/5)^3 → 지수 2·(3/4)(2/3)=1, 3·(-1/6)·4=-2 → (3/5)^{-1}=5/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{5}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0048.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 (3/5) 를 (2/3), (2/7) 등으로, 밑의 거듭제곱 차수(2, 3)와 분수 지수(3/4·2/3, -1/6·4)를 바꿈. 제약: 지수 곱이 정수(또는 1/2 처럼 근호가 안 남는 값)로 떨어지고 최종 지수가 -2~2 사이라 답이 간단한 분수."
    creative: "(1) 답을 (3/5)^k 의 k 로 묻기(★1~2) (2) 세 인수 곱으로 늘려 지수 합 계산 부담 증가(★2) (3) 밑을 a>0 문자로 두고 a^{k} 의 k 를 유리수로 묻기(★2)."
```

```yaml
- id: RPM-ALG-0049
  page: 10
  vendor_label: "유형 05 지수가 실수인 식의 계산"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    (a^{√2})^{4√2}÷a^{2√3}÷(a^5÷a^{2+√3})^2=a^k 일 때 실수 k (a>0, a≠1).
  category: "무리수 지수 곱·차 → 괄호 지수 정리 → 지수 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수가 실수인 식의 계산(무리수 지수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    √2·4√2=8, (a^5÷a^{2+√3})^2=a^{6-2√3}. 지수 8-2√3-(6-2√3)=2 → k=2. 무리수 지수가 서로 상쇄되도록 설계된 산술. 벤더 「중」·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "(a^{√2})^{4√2}=a^8 · (a^5÷a^{2+√3})^2=a^{6-2√3} → 8-2√3-6+2√3=2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0049.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "무리수 √2, √3 의 계수(4, 2)와 정수 지수(5, 2)를 바꿈. 제약: 무리수 항이 최종에 상쇄되어 k 가 정수(또는 유리수)가 되도록 √3 계수를 짝 맞추기, (a^{√2})^{4√2} 처럼 곱이 정수가 되는 쌍 유지."
    creative: "(1) 상쇄되지 않게 두어 k=p+q√3 꼴의 p+q 를 묻기(★2) (2) 나눗셈 순서를 바꿔 지수 부호 함정(T-부호 ★2) (3) 지수에 문자 x 를 넣어 k 가 x 의 일차식이 되게(Mₐ 상승 ★2~3)."
```

```yaml
- id: RPM-ALG-0050
  page: 10
  vendor_label: "유형 05 지수가 실수인 식의 계산"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    (a^{-1/3}b^{1/2})^{1/2}×(a^{4/3}b^{-3/4})^{-1} 을 간단히 한 꼴 (a>0, b>0). 5지선다(근호·분수 꼴 보기).
  category: "괄호 지수 분배 → 밑별 지수 합 → a^{-3/2}b 를 근호 꼴로 환원"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수가 유리수인 식의 계산(문자 지수 정리)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a 지수 -1/6-4/3=-3/2, b 지수 1/4+3/4=1 → a^{-3/2}b. 보기가 b√a/a^2 꼴이라 a^{-3/2}=√a/a^2 로 바꾸는 표기 단계(T-표기)가 마지막에 있다. 벤더 「중」·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "지수 분배 a^{-1/6}b^{1/4}·a^{-4/3}b^{3/4} → a^{-3/2}b → b√a/a^2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0050.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 분수 지수(-1/3, 1/2, 4/3, -3/4)와 바깥 지수(1/2, -1)를 바꿈. 제약: b 지수가 정수로 정리되고 a 지수가 -3/2, -5/2 처럼 반정수라 근호 한 개로 표현되게. 보기는 √a 와 ∛a 를 섞어 표기 검산이 필요하게."
    creative: "(1) 결과를 a^p b^q 지수 꼴로 묻기(T-표기 제거 ★2) (2) 결과에 a=4, b=8 을 대입한 값을 묻기(★2) (3) 나눗셈·거듭제곱 세 개로 늘리고 지수 합이 0 이 되는 문자를 하나 넣기(★2)."
```

```yaml
- id: RPM-ALG-0051
  page: 10
  vendor_label: "유형 05 지수가 실수인 식의 계산"
  vendor_level: "상중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    (1/2^{12})^{1/n} 이 정수가 되도록 하는 정수 n 의 개수. 서술형.
  category: "정수 조건 → 지수 -12/n 이 0 이상의 정수 → n 은 12 의 음의 약수"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "2^{-12/n} 이 정수가 되려면 지수 -12/n 이 음이 아닌 정수여야 함을 역추적 → n<0 이고 n 이 12 의 약수"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "거듭제곱이 정수가 되는 조건(지수의 정수 조건)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    2^{-12/n} 이 정수 ⇔ -12/n ∈ {0,1,2,…} ⇔ n 은 12 의 음의 약수 -1,-2,-3,-4,-6,-12 → 6개. 부호(T-부호)와 n≠0·정수 n(T-범위)이 함정. 양의 약수를 세도 개수가 6 으로 같아 오답이 드러나지 않는 점에 주의. 벤더 「상중」·통찰 1(BW d1)·M_total 6 → ★3.
  tier: star_3
  mechanism_primary: "(2^{-12})^{1/n}=2^{-12/n} → 정수 조건 ⇔ -12/n 이 0 이상 정수 → n∈{-1,-2,-3,-4,-6,-12} → 6"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0051.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 12 를 다른 합성수(8·18·24·30)로, 밑 2 를 3 이나 5 로. 제약: 개수 답은 약수의 개수이므로 부호를 무시해도 같은 값이 나온다 — 모든 n 의 합이나 최댓값을 물어야 n<0 판정이 답에 반영됨. n 을 자연수로 제한하면 답 0 (조건 재검토)."
    creative: "(1) 「모든 정수 n 의 값의 합」으로 바꾸어 부호 판정을 답에 반영(I-BW d1 유지 ★3) (2) (2^{12})^{1/n} 과 (2^{-12})^{1/n} 을 나란히 주고 개수 차이를 묻기(I-MI d1 추가 ★3~4) (3) 밑을 6 이나 12 처럼 합성수로 바꿔 소인수별 조건을 따지게(★4 후보)."
```

### 유형 06 거듭제곱근을 지수로 나타내기

```yaml
- id: RPM-ALG-0052
  page: 10
  vendor_label: "유형 06 거듭제곱근을 지수로 나타내기"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    √(∜(a^3))×√(a√(a√a)) 를 간단히 한 꼴 (a>0, a≠1). 5지선다(a^{p/8} 보기).
  category: "안쪽 근호부터 지수로 → 중첩 지수 곱 → 지수 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "거듭제곱근을 지수로 나타내기(중첩 근호)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    첫 항 a^{3/8}. 둘째 항은 안쪽부터 a^{1/2} → a^{3/2} → a^{3/4} → a^{7/4} → a^{7/8}. 합 10/8=5/4. 중첩 근호를 안에서 밖으로 푸는 절차만 필요. 통찰 없음·M_total 6 → 대표문제 ★2.
  tier: star_2
  mechanism_primary: "√∜a^3=a^{3/8} · √(a√(a√a))=a^{7/8} → a^{10/8}=a^{5/4}"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0052.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 차수(2·4 / 2·2·2)와 안쪽 지수(3, 1)를 바꿈. 제약: 중첩 깊이 3 이내, 분모가 8 이나 12 로 통일되어 보기 다섯 개가 같은 분모의 분수 지수로 나열되게, 최종 지수는 약분 뒤 기약분수."
    creative: "(1) 곱 대신 나눗셈으로 지수 차(★2) (2) 결과가 a^{p/q} 일 때 p+q 를 묻기(★2) (3) 중첩 n 단의 일반항 a^{(2^n-1)/2^n} 을 발견하게 하기(I-PD d2 ★3~4)."
```

```yaml
- id: RPM-ALG-0053
  page: 10
  vendor_label: "유형 06 거듭제곱근을 지수로 나타내기"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    √(2×∛(2×∜2))=2^{n/24} 일 때 자연수 n.
  category: "안쪽 ∜2 부터 지수로 → 2^{5/4} → 2^{5/12} → 2^{17/12} → 2^{17/24}"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "거듭제곱근을 지수로 나타내기(중첩 근호)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    2·2^{1/4}=2^{5/4}, 세제곱근 → 2^{5/12}, 2 곱해 2^{17/12}, 제곱근 → 2^{17/24}. n=17. 분모 24 가 발문에 주어져 검산이 쉽다. 벤더 「중」·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "안쪽부터 2^{1+1/4} → (·)^{1/3} → 2^{1+5/12} → (·)^{1/2} → 2^{17/24}"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$17$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0053.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 차수(2·3·4)와 안쪽 상수 2 의 지수(1,1,1)를 바꿈. 제약: 발문의 분모(24)는 차수 곱과 맞춰 n 이 자연수가 되게 하고, 밑은 모두 같은 소수(2 또는 3)로."
    creative: "(1) 밑 2 와 4, 8 을 섞어 먼저 밑 통일을 요구(★2) (2) 같은 구조를 두 개 주고 큰 쪽을 묻기(유형 03 결합 ★2~3) (3) 중첩 순서를 역으로(∜(2∛(2√2)))하여 지수가 달라짐을 비교하게(★2~3)."
```

```yaml
- id: RPM-ALG-0054
  page: 10
  vendor_label: "유형 06 거듭제곱근을 지수로 나타내기"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    a>0, a≠1 일 때 √(a^2×√(a×∛(a^4)))=∛(∜(a^n)/√(a^5)) 를 만족시키는 자연수 n.
  category: "양변을 각각 a 의 단일 지수로 → 지수 등식 → n 의 일차방정식"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "거듭제곱근을 지수로 나타내기(중첩 근호)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    좌변 a^{7/3}→a^{7/6}→a^{19/6}→a^{19/12}. 우변 a^{(n/4-5/2)/3}=a^{(n-10)/12}. 19=n-10 → n=29. 좌·우변 두 번의 중첩 정리와 일차방정식. 벤더 「중」·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "좌변 a^{19/12} · 우변 a^{(n-10)/12} → 19=n-10 → n=29"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$29$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0054.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "좌변 지수(2, 1, 4)와 우변 차수(3·4·2)·지수 5 를 바꿈. 제약: 양변 지수 분모가 같게(12) 설계하고 n 이 자연수로 떨어지게, a≠1 조건 유지(지수 비교가 성립하려면 밑이 1 이 아니어야 함)."
    creative: "(1) 우변에 n 대신 두 문자(m, n)를 두고 m+n 의 최솟값 묻기(정수 조건 I-BW d1 ★3) (2) 등식 대신 「좌변÷우변이 a^{1/12} 일 때」로 바꾸기(★2) (3) 밑이 1 일 때 등식이 항상 성립함을 근거로 a≠1 조건의 의미를 묻는 보기(I-MI d1 ★3)."
```

```yaml
- id: RPM-ALG-0055
  page: 10
  vendor_label: "유형 06 거듭제곱근을 지수로 나타내기"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    A=∛(4√4×4/∜4) 일 때 A^n 이 정수가 되도록 하는 자연수 n 의 최솟값.
  category: "A 를 2 의 단일 지수로 → A^n 정수 조건 → 지수가 정수인 최소 n"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "A^n=2^{3n/2} 이 정수가 되는 조건을 지수 3n/2 가 정수인 것으로 역추적 → n 은 짝수"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "거듭제곱이 정수가 되는 조건(지수의 정수 조건)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    4√4·4/∜4=4^{2+1/2-1/4}=4^{9/4}, 세제곱근 → 4^{3/4}=2^{3/2}. A^n=2^{3n/2} 정수 ⇔ n 짝수 → 최솟값 2. 0051 과 같은 정수 조건 골조이나 계산이 가볍다. 벤더 「상중」·통찰 1(BW d1) → ★3.
    [분류 이슈] 정리 뒤 남는 판단이 「3n/2 가 정수 ⇔ n 짝수」 하나라 ★2 후보. 라벨은 벤더 「상중」·BW d1 로 ★3 두고 기록.
  tier: star_3
  mechanism_primary: "4√4·4/∜4=4^{9/4} → A=4^{3/4}=2^{3/2} → 2^{3n/2} 정수 ⇔ n 짝수 → 2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0055.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 4 와 근호 차수(2·4·3)를 바꿔 A=2^{p/q} 의 분모 q 를 3, 4, 6 으로 조정(답 n=q). 제약: 4 를 2^2 로 바꾸는 단계가 살아 있도록 밑은 소수의 거듭제곱(4, 8, 9, 27)으로, p/q 는 기약분수라 답이 q 로 정확히 결정되게."
    creative: "(1) A^n 이 「유리수」·「정수」·「자연수」 중 무엇인지에 따라 답이 달라지는지 묻기(I-MI d1 ★3) (2) A=2^{3/2} 를 4^{3/4} 로도 볼 수 있음을 이용해 4^n 꼴로 표현되는 최소 n 을 묻기(★3) (3) A^n 이 정수이면서 100 이하인 n 의 개수(T-범위 추가 ★3)."
```

### 유형 07 지수를 변형하여 문자로 나타내기

```yaml
- id: RPM-ALG-0056
  page: 11
  vendor_label: "유형 07 지수를 변형하여 문자로 나타내기"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    5^8=a, 8^6=b 일 때 200^{10} 을 a, b 로 나타낸 꼴. 5지선다.
  category: "200 을 2^3·5^2 로 소인수분해 → 2^{30}·5^{20} → 각각 b, a 의 유리수 거듭제곱"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수를 변형하여 문자로 나타내기(밑 통일)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    200^{10}=2^{30}5^{20}. 5^{20}=(5^8)^{5/2}=a^{5/2}, 2^{30}=(2^{18})^{5/3}=b^{5/3}. 8^6=2^{18} 로 먼저 바꾸는 것과 지수 나눗셈(20/8, 30/18)이 전부. 통찰 없음·M_total 7 → 대표문제 ★2.
  tier: star_2
  mechanism_primary: "200^{10}=2^{30}5^{20} · b=2^{18} → 5^{20}=a^{20/8}, 2^{30}=b^{30/18} → a^{5/2}b^{5/3}"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0056.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a, b 의 밑·지수(5^8, 8^6)와 목표 수(200^{10})를 바꿈. 제약: 목표 수의 소인수가 a, b 의 소인수와 정확히 일치(두 소수)하고 지수 비가 간단한 유리수(5/2, 5/3 등)로 떨어지게. 8^6 처럼 밑이 소수의 거듭제곱인 항을 하나 두면 밑 통일 단계가 유지됨."
    creative: "(1) 소인수 세 개(2·3·5)와 문자 세 개로 확장(★2) (2) 역으로 a^{5/2}b^{5/3} 이 어떤 수의 거듭제곱인지 묻기(★2) (3) 200^{10}=a^p b^q 의 p+q 를 묻는 단답형(★2)."
```

```yaml
- id: RPM-ALG-0057
  page: 11
  vendor_label: "유형 07 지수를 변형하여 문자로 나타내기"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    a=25^2 일 때 125^3=a^k 를 만족시키는 유리수 k.
  category: "밑 5 통일 → 5^9=(5^4)^k → k=9/4"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수를 변형하여 문자로 나타내기(밑 통일)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a=5^4, 125^3=5^9 → k=9/4. 밑 통일 뒤 지수 나눗셈 한 번. 벤더 「중」·통찰 없음·M_total 5 → −1 후보이나 0056 골조의 축소판이라 ★2 로 두고 기록.
    [분류 이슈] 0045(하·★1)와 단계 수가 같아 ★1 후보. 라벨은 벤더 「중」 ★2.
  tier: star_2
  mechanism_primary: "25^2=5^4 · 125^3=5^9 → 5^9=(5^4)^k → k=9/4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{9}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0057.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 5 의 거듭제곱 쌍(25^2, 125^3)을 (8^2, 32^3), (27^2, 81^5) 등으로. 제약: 같은 소수의 거듭제곱이어야 하고 k 가 기약분수로 떨어지게. k 가 정수가 되면 ★1."
    creative: "(1) a=25^2, b=8^3 두 문자로 (10^6 을 a, b 로) 확장해 0056 형으로(★2) (2) 125^3=a^k 의 k 가 정수가 되도록 a 의 지수를 고르는 조건형(I-BW d1 ★3) (3) a^k 대신 √a 나 ∛a 의 거듭제곱으로 표현하게(T-표기 ★2)."
```

```yaml
- id: RPM-ALG-0058
  page: 11
  vendor_label: "유형 07 지수를 변형하여 문자로 나타내기"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    a=∛2, b=∜3 일 때 ¹²√(6^7) 을 a, b 로 나타낸 꼴. 5지선다.
  category: "6^7 소인수분해 → 2^{7/12}·3^{7/12} → 지수를 a, b 의 지수(1/3, 1/4)로 나눔"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수를 변형하여 문자로 나타내기(밑 통일)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ¹²√(6^7)=2^{7/12}3^{7/12}. 2^{7/12}=(2^{1/3})^{7/4}=a^{7/4}, 3^{7/12}=(3^{1/4})^{7/3}=b^{7/3}. 분수 지수 나눗셈(7/12÷1/3, 7/12÷1/4)이 핵심이고 보기가 7/4·7/3·5/2 로 촘촘해 검산 부담. 벤더 「중」·통찰 없음·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "6^{7/12}=2^{7/12}3^{7/12} → 2^{7/12}=a^{(7/12)/(1/3)}=a^{7/4}, 3^{7/12}=b^{7/3}"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0058.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a, b 의 근호 차수(3, 4)와 목표 ¹²√(6^7) 의 차수·지수를 바꿈. 제약: 목표 근호 차수는 두 차수의 최소공배수(12)로 두어야 지수 나눗셈이 깔끔하고, 6 처럼 두 소수의 곱을 밑으로 유지, 결과 지수는 기약분수."
    creative: "(1) 목표를 ⁶√(12^5) 처럼 밑에 제곱 인수가 있는 수로 바꿔 소인수분해 단계 강화(★2) (2) a, b 로 나타낸 식 a^p b^q 의 p·q 를 묻기(★2) (3) 역으로 a^{7/4}b^{7/3} 가 ¹²√N 일 때 N 을 묻기(★2)."
```

```yaml
- id: RPM-ALG-0059
  page: 11
  vendor_label: "유형 07 지수를 변형하여 문자로 나타내기"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    양수 a, b 가 a^4=2, b^{10}=8 일 때 (⁶√(a^2b^5))^k 이 자연수가 되도록 하는 자연수 k 의 최솟값.
  category: "a, b 를 2 의 지수로 → ⁶√(a^2b^5)=2^{1/3} → 자연수 조건 → k 는 3 의 배수"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "2^{k/3} 이 자연수가 되는 조건을 지수 k/3 이 정수인 것으로 역추적 → k 는 3 의 배수"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "거듭제곱이 자연수가 되는 조건(지수의 정수 조건)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    a=2^{1/4}, b=2^{3/10}. a^2b^5=2^{1/2+3/2}=2^2, 6제곱근 → 2^{1/3}. 2^{k/3} 자연수 ⇔ 3|k → 최솟값 3. 밑 통일(b^{10}=2^3 이라 b=2^{3/10})과 정수 조건 역추적(BW d1)이 결합. 벤더 「상중」·통찰 1·M_total 7 → ★3.
  tier: star_3
  mechanism_primary: "a=2^{1/4}, b=2^{3/10} → a^2b^5=2^2 → ⁶√=2^{1/3} → 2^{k/3} 자연수 ⇔ 3|k → 3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0059.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a^4=2, b^{10}=8 의 지수(4, 10, 3)와 근호 안 지수(2, 5)·차수 6 을 바꿈. 제약: a^2b^5 의 2 의 지수가 정수가 되게 맞추고(1/2+3/2=2), 최종 지수 p/q 가 기약분수라 답 k=q 로 결정. 자연수 조건이므로 지수는 양수여야 함."
    creative: "(1) 「자연수」를 「정수」로 바꾸고 k 의 범위를 정수로 넓혀 음수 k 도 따지게(I-MI d1 추가 ★3~4) (2) 자연수가 되는 100 이하 k 의 개수(T-범위 ★3) (3) a, b 조건을 a^4=2, b^{10}=27 처럼 서로 다른 소수로 주면 두 소인수의 지수 모두 정수여야 하는 조건 결합(I-CON d1 후보 ★4)."
```

### 유형 08 지수법칙과 곱셈 공식

```yaml
- id: RPM-ALG-0060
  page: 11
  vendor_label: "유형 08 지수법칙과 곱셈 공식"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    a>0, b>0 일 때 (a^{1/4}-b^{1/4})(a^{1/4}+b^{1/4})(a^{1/2}+b^{1/2}) 을 간단히 한 식.
  category: "합차 공식 두 번 → a-b"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수법칙과 곱셈 공식(전개·인수분해)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    앞 두 인수 → a^{1/2}-b^{1/2}, 셋째와 곱해 a-b. 합차 공식을 분수 지수에 적용하는 것이 전부. 통찰 없음·M_total 5 → 대표문제 ★2 유지(−1 후보).
  tier: star_2
  mechanism_primary: "(a^{1/4}-b^{1/4})(a^{1/4}+b^{1/4})=a^{1/2}-b^{1/2} → ×(a^{1/2}+b^{1/2}) → a-b"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$a-b$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0060.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 1/4·1/2 를 1/8·1/4·1/2(합차 세 번)나 1/3(세제곱 합·차 공식)으로. 제약: 인수의 지수가 배로 커지는 사슬이어야 하며, 답을 a-b 같은 정수 지수 식으로 떨어뜨리기."
    creative: "(1) a=16, b=1 을 대입한 값 묻기(★1~2) (2) 곱한 결과가 a-b 가 되도록 빠진 인수를 채우게 하기(I-BW d1 ★2~3) (3) 0062 처럼 분수 합의 연쇄로 바꾸면 합차 사슬 발견이 통찰이 됨(I-PD d1 ★2~3)."
```

```yaml
- id: RPM-ALG-0061
  page: 11
  vendor_label: "유형 08 지수법칙과 곱셈 공식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x=2 일 때 (x^{1/3}+x^{-2/3})^3+(x^{1/3}-x^{-2/3})^3 의 값.
  category: "(p+q)^3+(p-q)^3=2p^3+6pq^2 → 2x+6x^{-1} → 대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수법칙과 곱셈 공식(전개·인수분해)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    p=x^{1/3}, q=x^{-2/3} 로 두면 홀수 항이 소거되어 2p^3+6pq^2=2x+6x^{1/3-4/3}=2x+6/x. x=2 → 4+3=7. 세제곱 공식 전개와 지수 정리(pq^2=x^{-1})만 필요. 벤더 「중」·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "p=x^{1/3}, q=x^{-2/3} → (p+q)^3+(p-q)^3=2p^3+6pq^2=2x+6x^{-1} → 4+3=7"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0061.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x 의 값(2 → 3, 1/2)과 두 지수(1/3, -2/3)를 바꿈. 제약: p^3 과 pq^2 가 x 의 정수 지수가 되도록 지수 조합을 맞추기(1/3·3=1, 1/3-4/3=-1). x 를 분수로 두면 6/x 가 정수 유지되게."
    creative: "(1) 차 (p+q)^3-(p-q)^3 으로 바꿔 6p^2q+2q^3 의 정리(★2) (2) x 를 주지 않고 x^{1/3}+x^{-2/3}=k 만 주어 식의 값을 k 로(Mₐ 상승 ★3) (3) 소거 구조를 강조해 계산 없이 답하게 하는 보기형(I-SYM d1 ★3)."
```

```yaml
- id: RPM-ALG-0062
  page: 11
  vendor_label: "유형 08 지수법칙과 곱셈 공식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    1/(1-3^{1/8})+1/(1+3^{1/8})+2/(1+3^{1/4})+4/(1+3^{1/2}) 의 값. 5지선다.
  category: "앞 두 항 합 → 2/(1-3^{1/4}) → 다음 항과 합 → 4/(1-3^{1/2}) → 8/(1-3)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-PD
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "계수 1,1,2,4 와 지수 1/8,1/4,1/2 의 배열이 앞에서부터 합차 공식으로 연쇄 합산되는 구조임을 발견"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "합차 공식 연쇄 합(분모 유리화 사슬)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    1/(1-t)+1/(1+t)=2/(1-t^2) 를 t=3^{1/8} 부터 세 번 이어 붙이면 8/(1-3)=-4. 항을 한꺼번에 통분하면 실패하고, 앞에서부터 차례로 묶는 규칙을 찾아야 한다(PD d1). 벤더 「중」·통찰 1·M_total 6 → ★2.
    [분류 이슈] 유형 08(곱셈 공식)에 놓였지만 골조는 「합차 공식 연쇄(telescoping)」로 다른 세 문항과 다름. 카탈로그에서 별도 유형 후보.
  tier: star_2
  mechanism_primary: "1/(1-t)+1/(1+t)=2/(1-t^2) 연쇄 (t=3^{1/8}) → 2/(1-3^{1/4}) → 4/(1-3^{1/2}) → 8/(1-3)=-4"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0062.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 3 을 2·5 로, 시작 지수 1/8 을 1/16(항 5개)이나 1/4(항 3개)로. 제약: 계수는 1,1,2,4,… 로 2 배씩, 지수는 2 배씩 커져야 사슬이 이어지고, 마지막 분모 1-(밑) 이 0 이 아니어야 함. 답은 2^n/(1-밑)."
    creative: "(1) 첫 항만 1/(1-t) 로 두고 나머지 계수를 감춰 학생이 채우게(I-PD d2 ★3) (2) 합 대신 곱 (1+t)(1+t^2)(1+t^4)… 로 바꿔 (t^8-1)/(t-1) 사슬(같은 PD ★2~3) (3) 항 순서를 섞어 규칙 발견 부담 증가(★3)."
```

```yaml
- id: RPM-ALG-0063
  page: 11
  vendor_label: "유형 08 지수법칙과 곱셈 공식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    a>0, b>0 일 때 보기 ㄱ(합차 공식 → √a-√b) · ㄴ((A+1)(A-1) 꼴, A=a^{1/2}+a^{-1/2}) · ㄷ(세제곱 합 나눗셈의 중간항 부호) 중 옳은 것 고르기.
  category: "보기별 곱셈 공식 검산 → ㄷ 의 세제곱 합 인수분해 중간항 부호 확인"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수법칙과 곱셈 공식(전개·인수분해)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ㄱ 합차 → a^{1/2}-b^{1/2} 참. ㄴ A^2-1=a+2+a^{-1}-1 참. ㄷ a+b^{-1}=(a^{1/3})^3+(b^{-1/3})^3 을 세제곱 합으로 나누면 중간항이 -a^{1/3}b^{-1/3} 라 보기의 + 부호가 틀림(T-부호). 공식 세 개를 각각 확인하는 절차. 벤더 「중」·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "ㄱ 합차 공식 · ㄴ (A+1)(A-1)=A^2-1 · ㄷ x^3+y^3=(x+y)(x^2-xy+y^2) 의 중간항 부호 → ㄱ, ㄴ"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "ㄱ, ㄴ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0063.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 보기의 지수(1/4, 1/2, 1/3)와 부호를 바꿔 참·거짓 조합을 재배치. 제약: 거짓 보기는 부호나 계수 하나만 틀리게(ㄷ 의 중간항 부호처럼) 만들어 실제 전개가 필요하게, 정답 조합은 ㄱㄴ·ㄴㄷ 등 두 개 이상."
    creative: "(1) ㄷ 을 세제곱 차 a-b^{-1} 로 바꿔 부호가 맞게(전체 참 ★2) (2) 보기 하나에 a=b 일 때만 성립하는 식을 넣어 「항상」 성립 여부를 따지게(I-MI d1 ★3) (3) 5지선다로 조합 보기(ㄱ / ㄱ,ㄴ / …) 제공(★2)."
```

### 유형 09 지수법칙과 곱셈 공식을 이용하여 식의 값 구하기

```yaml
- id: RPM-ALG-0064
  page: 12
  vendor_label: "유형 09 지수법칙과 곱셈 공식을 이용하여 식의 값 구하기"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    a^{1/3}+a^{-1/3}=√5 일 때 a+a^{-1} 의 값 (a>0). 5지선다.
  category: "양변 세제곱 → a+a^{-1}+3(a^{1/3}+a^{-1/3}) → 대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "a^x±a^{-x} 꼴 식의 값(곱셈 공식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (p+q)^3=p^3+q^3+3pq(p+q), pq=1 → 5√5=a+a^{-1}+3√5 → 2√5. 이 유형의 표준 세제곱 공식 적용. 통찰 없음·M_total 6 → 대표문제 ★2.
  tier: star_2
  mechanism_primary: "(a^{1/3}+a^{-1/3})^3=a+a^{-1}+3(a^{1/3}+a^{-1/3}) → 5√5-3√5=2√5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0064.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주어진 값 √5 를 √6, 3, 2√2 등으로. 제약: k^3-3k 가 보기와 맞는 꼴(정수나 단일 근호)로 떨어지게. 지수 1/3 을 1/2 로 바꾸면 제곱 공식(0066 형)으로 강등."
    creative: "(1) 차 a^{1/3}-a^{-1/3}=k 로 주고 a-a^{-1} 을 묻기(부호 한 번 ★2) (2) a+a^{-1} 을 주고 a^{1/3}+a^{-1/3} 을 역으로 묻기(삼차방정식 인수분해 I-BW d1 ★3) (3) a^{1/3}+a^{-1/3}=k 만 주고 a^2+a^{-2} 까지 두 단계로(★2~3)."
```

```yaml
- id: RPM-ALG-0065
  page: 12
  vendor_label: "유형 09 지수법칙과 곱셈 공식을 이용하여 식의 값 구하기"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    5^x+5^{1-x}=8 일 때 25^x+25^{1-x} 의 값.
  category: "양변 제곱 → 25^x+25^{1-x}+2·5^x·5^{1-x} → 곱이 5 임을 반영"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "a^x±a^{-x} 꼴 식의 값(곱셈 공식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (5^x+5^{1-x})^2=25^x+25^{1-x}+2·5 → 64-10=54. 곱 5^x·5^{1-x}=5 (1 이 아님)가 유일한 함정. 벤더 「중하」·통찰 없음·M_total 5 → ★2(−1 후보이나 곱 5 함정으로 유지).
  tier: star_2
  mechanism_primary: "제곱 (5^x+5^{1-x})^2=64 → 25^x+25^{1-x}+2·5^{x+(1-x)} → 64-10=54"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$54$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0065.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 5, 합 8, 지수 1-x 의 상수 1 을 바꿈(5^x+5^{2-x}=k 면 곱이 25). 제약: 답 k^2-2·(밑)^{상수} 가 자연수, 합 k 는 최솟값 2√(밑^상수) 이상이어야 실제 x 가 존재."
    creative: "(1) 차 5^x-5^{1-x} 의 값을 묻기(제곱 뒤 부호 결정 I-MI d1 ★3) (2) 125^x+125^{1-x} 로 세제곱 공식(★2~3) (3) 곱이 1 이 아닌 구조를 문자 a^x+a^{2-x} 로 일반화(Mₐ 상승 ★3)."
```

```yaml
- id: RPM-ALG-0066
  page: 12
  vendor_label: "유형 09 지수법칙과 곱셈 공식을 이용하여 식의 값 구하기"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    x>0, √x+1/√x=3 일 때 (x^2+x^{-2}+7)/(x+x^{-1}+2) 의 값. 서술형.
  category: "제곱 → x+x^{-1}=7 → 다시 제곱 → x^2+x^{-2}=47 → 분수식 대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "a^x±a^{-x} 꼴 식의 값(곱셈 공식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (√x+1/√x)^2=x+x^{-1}+2 → 7. (x+x^{-1})^2 → x^2+x^{-2}=49-2=47. (47+7)/(7+2)=54/9=6. 제곱 공식을 두 단 올리는 표준 절차. 벤더 「중」·서술형·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "√x+1/√x=3 → 제곱 x+x^{-1}=7 → 제곱 x^2+x^{-2}=47 → (47+7)/(7+2)=6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0066.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주어진 합 3 을 4, √7 등으로, 분수식의 상수(7, 2)를 바꿈. 제약: 합 k≥2 여야 x>0 이 존재, x+x^{-1}=k^2-2, x^2+x^{-2}=(k^2-2)^2-2 가 정수가 되게, 분수식이 약분되어 정수 답이 되도록 상수를 맞추기."
    creative: "(1) √x-1/√x=k 로 주면 부호 정보 없이 x+x^{-1} 만 결정(★2) (2) 분수식을 (x^2+x^{-2})/(x+x^{-1}) 처럼 두어 x^{3/2}+x^{-3/2} 세제곱 공식으로 확장(★2~3) (3) √x+1/√x=3 에서 x 자체를 구해 대입하는 비효율 갈래를 유도하는 보기형(I-SC d1 ★3)."
```

```yaml
- id: RPM-ALG-0067
  page: 12
  vendor_label: "유형 09 지수법칙과 곱셈 공식을 이용하여 식의 값 구하기"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x=3^{1/3}-3^{-1/3} 일 때 3x^3+9x-10 의 값. 5지선다.
  category: "x=p-q (pq=1) → x^3=p^3-q^3-3x → x^3+3x=8/3 관계식 → 대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x 의 값을 직접 대입하지 않고 x=p-q 의 세제곱 공식에서 pq=1 을 써 x^3+3x=3-1/3 이라는 x 의 관계식으로 조건을 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "x=p-q 꼴 → x^3+3x 관계식(세제곱 공식 역이용)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    p=3^{1/3}, q=3^{-1/3}, pq=1. x^3=p^3-q^3-3pq(p-q)=3-1/3-3x → 3x^3+9x=8. 따라서 3x^3+9x-10=-2. 묻는 식이 관계식 3x^3+9x 를 그대로 담고 있어 관계식을 세우면 한 줄(EQV d1). 벤더 「중」·통찰 1·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "x=p-q, pq=1 → x^3=p^3-q^3-3x=8/3-3x → 3x^3+9x=8 → 8-10=-2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0067.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 3 을 2·5 로, 묻는 식의 계수(3, 9, -10)를 바꿈. 제약: pq=1 이 되도록 지수는 ±1/3 로 짝을 맞추고, 묻는 식은 관계식 x^3+3x=p^3-q^3 의 상수배 + 상수 꼴이어야 한 줄로 떨어짐(계수 비 1:3 유지). 합 x=p+q 로 바꾸면 x^3-3x 로 부호 반전."
    creative: "(1) x=3^{1/3}+3^{-1/3} 로 바꿔 x^3-3x 관계(부호 T ★2) (2) 묻는 식을 관계식의 배수가 아닌 x^3+x 로 두어 x 값 근사 없이는 못 풀게 만들면 다항식 나눗셈 필요(★3) (3) x=∛a-∛b 꼴로 일반화해 x^3+3∛(ab)·x=a-b 를 유도하는 서술형(I-EQV d2 ★3)."
```

### 유형 10 $\dfrac{a^x-a^{-x}}{a^x+a^{-x}}$의 꼴의 식의 값 구하기

```yaml
- id: RPM-ALG-0068
  page: 12
  vendor_label: '유형 10 $\dfrac{a^x-a^{-x}}{a^x+a^{-x}}$의 꼴의 식의 값 구하기'
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    a^{2x}=10 일 때 (a^x-a^{-x})/(a^x+a^{-x}) 의 값 (a>0).
  category: "분모·분자에 a^x 곱 → (a^{2x}-1)/(a^{2x}+1) → 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "(a^x-a^{-x})/(a^x+a^{-x}) 꼴 식의 값(분모·분자에 a^x 곱)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분모·분자에 a^x 를 곱하면 (a^{2x}-1)/(a^{2x}+1)=9/11. 이 유형의 표준 기법 한 번. 통찰 없음·M_total 4 → −1 후보이나 대표문제이고 기법(a^x 곱)을 알아야 시작되므로 ★2 로 두고 기록.
    [분류 이슈] 기법을 알면 한 줄(M_total 4)이라 ★1 후보. 라벨은 유형 대표 출발점 ★2.
  tier: star_2
  mechanism_primary: "분모·분자 ×a^x → (a^{2x}-1)/(a^{2x}+1) → (10-1)/(10+1)=9/11"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{9}{11}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0068.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a^{2x} 의 값(10 → 3, 1/4, 7)을 바꿈. 제약: a^{2x}>0 이면 어떤 양수든 가능, 답은 (v-1)/(v+1) 로 기약분수 정리. a^{2x}=1 이면 답 0 이라 피하기."
    creative: "(1) 분모·분자 부호를 바꿔 (a^x+a^{-x})/(a^x-a^{-x}) 로(a^{2x}≠1 조건 확인 T-범위 ★2) (2) a^{2x} 대신 a^x=√10 처럼 주어 제곱 한 단계 추가(★2) (3) 값이 9/11 이 되도록 하는 a^{2x} 를 역으로 묻기(0069 형 ★2)."
```

```yaml
- id: RPM-ALG-0069
  page: 12
  vendor_label: '유형 10 $\dfrac{a^x-a^{-x}}{a^x+a^{-x}}$의 꼴의 식의 값 구하기'
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    a>0, (a^x+a^{-x})/(a^x-a^{-x})=3 일 때 a^{2x} 의 값.
  category: "분모·분자에 a^x 곱 → (a^{2x}+1)/(a^{2x}-1)=3 → a^{2x} 의 일차방정식"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "(a^x-a^{-x})/(a^x+a^{-x}) 꼴 식의 값(분모·분자에 a^x 곱)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a^x 를 곱해 (a^{2x}+1)/(a^{2x}-1)=3 → a^{2x}+1=3a^{2x}-3 → a^{2x}=2. 0068 의 역방향이지만 t=a^{2x} 의 일차방정식이라 표준 절차. 벤더 「중하」·통찰 없음·M_total 5 → ★2(−1 후보이나 역산 단계가 있어 유지).
  tier: star_2
  mechanism_primary: "분모·분자 ×a^x → (a^{2x}+1)/(a^{2x}-1)=3 → 2a^{2x}=4 → 2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0069.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "비의 값 3 을 5, 2, 1/2 등으로. 제약: (v+1)/(v-1)=k 의 해 v=(k+1)/(k-1) 이 양수여야 하므로 k>1(또는 k<-1). k=1 은 해 없음. a^{2x} 가 정수·간단한 분수로 떨어지게."
    creative: "(1) a^{2x} 대신 a^{4x}+a^{-4x} 를 묻기(v+1/v 로 이어짐 ★2) (2) 비 대신 차 a^x-a^{-x}=k 를 주고 a^{2x} 를 묻기(이차방정식·양수 근 선택 I-VF d1 ★3) (3) 값이 존재하지 않는 k 의 범위를 묻기(I-EQV d1 ★3)."
```

```yaml
- id: RPM-ALG-0070
  page: 12
  vendor_label: '유형 10 $\dfrac{a^x-a^{-x}}{a^x+a^{-x}}$의 꼴의 식의 값 구하기'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    (3^x-3^{-x})/(3^x+3^{-x})=1/3 일 때 9^x-9^{-x} 의 값. 5지선다.
  category: "분모·분자에 3^x 곱 → (9^x-1)/(9^x+1)=1/3 → 9^x=2 → 2-1/2"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "(a^x-a^{-x})/(a^x+a^{-x}) 꼴 식의 값(분모·분자에 a^x 곱)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    3^x 를 곱해 (9^x-1)/(9^x+1)=1/3 → 3·9^x-3=9^x+1 → 9^x=2. 9^x-9^{-x}=2-1/2=3/2. 0069 골조에 9^{-x}=1/9^x 대입 한 단계가 붙음. 벤더 「중」·통찰 없음·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "분모·분자 ×3^x → (9^x-1)/(9^x+1)=1/3 → 9^x=2 → 2-1/2=3/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0070.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 3 과 비의 값 1/3 을 바꿈(2, 1/2 등). 제약: (v-1)/(v+1)=k 의 해 v=(1+k)/(1-k) 가 양수이려면 -1<k<1, 묻는 식 v-1/v 가 간단한 분수가 되도록 k 선택."
    creative: "(1) 9^x+9^{-x} 나 27^x-27^{-x}(세제곱 공식 결합)를 묻기(★2~3) (2) 밑을 3 이 아닌 9 로 주어 (3^x)^2 관계 정리 추가(★2) (3) 비의 값이 k 일 때 9^x-9^{-x} 를 k 로 나타내는 일반화(Mₐ 상승 ★3)."
```

```yaml
- id: RPM-ALG-0071
  page: 12
  vendor_label: '유형 10 $\dfrac{a^x-a^{-x}}{a^x+a^{-x}}$의 꼴의 식의 값 구하기'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    3^{1/x}=4 일 때 (8^x+8^{-x})/(2^x-2^{-x}) 의 값.
  category: "3^{1/x}=4 → 3=4^x=2^{2x} → 분모·분자에 2^x 곱 → (2^{4x}+2^{-2x})/(2^{2x}-1) 대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "역수 지수 조건 3^{1/x}=4 를 양변 x제곱해 4^x=3, 즉 2^{2x}=3 으로 옮겨 묻는 식의 밑 2 와 맞춤"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "(a^x-a^{-x})/(a^x+a^{-x}) 꼴 식의 값(분모·분자에 a^x 곱)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    3^{1/x}=4 ⇔ 4^x=3 ⇔ 2^{2x}=3 (EQV d1). 8^x=2^{3x} 이므로 분모·분자에 2^x 를 곱하면 (2^{4x}+2^{-2x})/(2^{2x}-1)=(9+1/3)/2=14/3. 조건 변환 뒤에는 유형 10 표준 기법. 벤더 「중」·통찰 1·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "3^{1/x}=4 → 2^{2x}=3 → 분모·분자 ×2^x → (2^{4x}+2^{-2x})/(2^{2x}-1)=(9+1/3)/2=14/3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{14}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0071.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "조건의 두 수(3, 4)와 묻는 식의 밑(8, 2)을 바꿈. 제약: 4=2^2 처럼 조건의 우변이 묻는 식 밑의 거듭제곱이어야 2^{2x}=3 으로 맞춰지고, 분모 2^{2x}-1≠0. 답은 (v^2+1/v)/(v-1) 꼴(v=2^{2x})로 기약분수."
    creative: "(1) 조건을 2^{2x}=3 으로 바로 주면 EQV 가 빠져 절차형 ★2 (2) 조건을 3^{1/x}=4 대신 3^{1/x}=2√2 처럼 무리수로 주어 지수 변환 한 단계 추가(★2~3) (3) 분모를 2^x+2^{-x} 로 바꿔 세제곱 합 인수분해로 약분되게 하면 전략 갈래(직접 곱 vs 인수분해)가 생김(I-SC d1 ★3)."
```

## 표본 판정 요약 (36문)

- ★ 분포: ★1 2 · ★2 30 · ★3 4 · ★4 0 · ★5 0
- 통찰형 7(0043 EQV · 0051 BW · 0055 BW · 0059 BW · 0062 PD · 0067 EQV · 0071 EQV) · 절차형 29 · premium 0
- type_hint 상위: 「거듭제곱근의 계산(지수 변환·지수법칙)」 4 · 「(a^x-a^{-x})/(a^x+a^{-x}) 꼴 식의 값」 4 · 「거듭제곱근의 대소 비교(공통 거듭제곱)」 3 · 「거듭제곱이 정수/자연수가 되는 조건」 3 · 「거듭제곱근을 지수로 나타내기(중첩 근호)」 3 · (그 밖에 「지수가 정수인 식의 계산(음의 지수)」 「지수를 변형하여 문자로 나타내기」 「지수법칙과 곱셈 공식」 「a^x±a^{-x} 꼴 식의 값」 각 3)
- 그림: 0문
- 벤더 난이도별: 대표문제(무표시) 9 → 모두 ★2 · 하 2 → ★1 · 중하 4 → ★2 · 중 17 → ★2 (0043 만 상중) · 상중 4 → ★3

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-ALG-0055 | 벤더 「상중」이나 정리 뒤 남는 판단이 「3n/2 정수 ⇔ n 짝수」 하나(M_total 6 · BW d1). 라벨 ★3 두고 ★2 후보 기록 | ★2 / ★3 |
| RPM-ALG-0057 | 벤더 「중」이나 0045(하·★1)와 단계 수가 같음(M_total 5 · 통찰 없음). 라벨 ★2 | ★1 / ★2 |
| RPM-ALG-0062 | 유형 08(곱셈 공식)에 놓였지만 골조는 합차 공식 연쇄(telescoping) — 카탈로그에서 별도 유형 후보 · type_hint 를 따로 둠 | ★2 |
| RPM-ALG-0068 | 유형 대표문제이나 기법(a^x 곱)을 알면 한 줄(M_total 4). 라벨 ★2 두고 ★1 후보 기록 | ★1 / ★2 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 반복된 type_hint: RPM 유형 02·04·05·06·07 은 모두 「거듭제곱근·유리수 지수를 한 밑의 지수로 통일해 지수법칙으로 정리」하는 같은 골조의 변주다. 카탈로그에서는 「지수 표현 통일·지수법칙 계산」 하나로 통합하고 하위 태그(근호 계산 / 음의 지수 / 유리수·무리수 지수 / 중첩 근호 / 문자로 나타내기)로 구분해도 충분하다. 통합하면 base ★2.
- 따로 세워야 할 유형: (1) 「거듭제곱이 정수·자연수가 되는 조건」(0051·0055·0059 — 유형 05·06·07 에 흩어져 있지만 골조는 「지수 p/q 의 정수 조건 → n 의 배수·약수」로 같음 · BW d1 · base ★3) (2) 「거듭제곱근의 대소 비교 — 차의 부호」(0043 · 공통 거듭제곱 비교와 골조가 다름 · base ★3) (3) 「합차 공식 연쇄 합」(0062 · PD d1 · base ★2~3) (4) 「x=p±q 꼴의 세제곱 관계식」(0067 · EQV d1 · base ★2~3).
- 통합해도 될 유형: 유형 08(곱셈 공식 전개)·09(곱셈 공식으로 식의 값)·10((a^x-a^{-x})/(a^x+a^{-x}) 꼴)은 「a^x±a^{-x} 꼴의 곱셈 공식」 한 유형의 세 단계(전개 → 대칭식 값 → 분수식 값)로 묶을 수 있다. 0071 처럼 조건 변환(EQV)이 붙는 문항은 같은 유형 안에서 ★+1 로 처리.
- 유형 03 대표(0040)·유형 10 대표(0068)처럼 대표문제가 M_total 4~5 인 경우가 많아, 카탈로그 base ★ 는 대표문항이 아니라 유형 안 「중」 문항을 기준으로 잡는 편이 라벨 드리프트를 줄인다.
