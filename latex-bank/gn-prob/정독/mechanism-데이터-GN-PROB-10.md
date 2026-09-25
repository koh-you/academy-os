---
name: mechanism-데이터-GN-PROB-10
description: 개념원리 확률과 통계 10 사건의 독립과 종속(1/1 · 99~105쪽 · 23문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 확률과 통계 (22개정) · 전사본 latex-bank/gn-prob
  section: 10 사건의 독립과 종속
  unit_code: "10"
  part: "1/1"
  extract_range: "99~105쪽 · 99-216~105-235"
  total_problems: 23
  unit_total: 23
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-prob/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-prob/items/<id>.tex
  image_source: latex-bank/gn-prob/figures/ (crops.json)
---

# 개념원리 확률과 통계 · 10 사건의 독립과 종속 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 확률과 통계 10단원 「사건의 독립과 종속」 99~105쪽의 23문항 전수를 다룬다. 구역은 특강 1 · 개념원리 익히기 4 · 필수·발전 예제(예제 3 + 확인체크 유제 6) 9 · 연습문제 STEP 1 5 · STEP 2 3 · 실력 UP 1 이다. 개념원리 고등의 난이도 신호는 구역과 태그에 있다 — 통번호 + 「확인체크」는 개념 확인(★1 출발), 상자 「필수」 예제는 ★2, 연습문제는 STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4 출발이며, 특강 구역은 교육과정 심화라 ★2~3 에서 시작한다. 여기서 M_total 과 통찰 유무로 ±1 조정했다.

이 단원의 도구는 사실상 세 개뿐이다 — 독립의 정의 `P(A∩B)=P(A)P(B)`(=조건부확률 불변), 여사건·드모르간, 덧셈정리. 그래서 문항 간 차이는 「주어진 조건을 이 셋 중 어느 표현으로 옮기는가」에서 생기고, 통찰 라벨도 I-EQV(조건의 동치 변환)와 I-RT(표현 전환)에 몰린다. 이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다.

## 문항 데이터

### 특강

```yaml
- id: GN-PROB-99-216
  page: 99
  vendor_label: "특강"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "특강"
  summary: |
    0<P(A)<1, 0<P(B)<1 인 두 사건 A, B 가 독립이면 Aᶜ 와 Bᶜ 도 독립임을 보이는 증명의 빈칸 ㈎㈏㈐ 를 채우는 문항.
  category: "독립의 정의 → 드모르간·덧셈정리 → 인수분해로 P(Aᶜ)P(Bᶜ)"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "P(Aᶜ∩Bᶜ) 를 여사건·드모르간으로 1-P(A∪B) 로 옮겨야 덧셈정리를 쓸 수 있음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "독립사건의 여사건도 독립임의 증명"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    골조는 드모르간 → 덧셈정리 전개 → 1-P(A)-P(B)+P(A)P(B) 를 (1-P(A))(1-P(B)) 로 인수분해. 표현 전환 통찰 1개(RT d1)이지만 빈칸 세 칸이 이미 골조를 노출해 사고 부담이 낮다. 특강 구역 ★2~3 출발에서 하한인 ★2.
    [분류 이슈] 특강 구역 신호는 ★3 까지 열려 있으나 빈칸 증명이라 실제 사고량은 ★2 수준 — 라벨은 ★2, 기록만.
  tier: star_2
  mechanism_primary: "독립 정의 P(A∩B)=P(A)P(B) → 드모르간 P(Aᶜ∩Bᶜ)=1-P(A∪B) → 덧셈정리 전개 → (1-P(A))(1-P(B)) 인수분해"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '㈎ $\mathrm{P}(A)\mathrm{P}(B)$ ㈏ $\mathrm{P}(A\cup B)$ ㈐ $\mathrm{P}(B)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/99-216.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수치가 없는 증명형이라 바꿀 수는 없다. 대신 빈칸 위치(㈎㈏㈐)를 옮겨 노출 정도를 조절한다. 제약: 0<P(A)<1, 0<P(B)<1 을 빼면 Aᶜ, Bᶜ 독립 주장의 전제가 무너진다."
    creative: "(1) 같은 틀로 A 와 Bᶜ 가 독립임을 증명하게 하기(★2 유지) (2) 빈칸을 없애고 증명 전체를 쓰게 하면 RT d2 로 올라가 ★3 (3) 역으로 'Aᶜ 와 Bᶜ 가 독립이면 A 와 B 도 독립인가'를 묻기(동치 방향 확인 · ★3)."
```

### 개념원리 익히기

```yaml
- id: GN-PROB-100-217
  page: 100
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑵ A, B 가 독립이고 P(A)=1/3, P(B)=1/4 일 때 P(B|A) 와 P(A|B).
  category: "독립 → 조건부확률이 원래 확률과 같음"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "독립사건의 조건부확률"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    독립의 동치 서술 P(B|A)=P(B) 를 그대로 읽는 한 단계. 계산이 없다. 익히기 구역 ★1 출발 · 통찰 0 · M_total 3 → ★1.
  tier: star_1
  mechanism_primary: "독립 ⇒ P(B|A)=P(B), P(A|B)=P(A) 로 값 그대로 읽기"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\dfrac{1}{4}$ ⑵ $\dfrac{1}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/100-217.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "P(A), P(B) 를 임의의 0과 1 사이 유리수로. 제약: 두 값 모두 0 초과 1 미만이어야 조건부확률이 정의된다."
    creative: "(1) P(Bᶜ|A) 를 묻기(여사건 한 단계 추가 · ★1 유지) (2) P(A|B) 를 주고 P(A) 를 역으로 묻기(★2) (3) 값을 주고 독립 여부까지 판정하게 하면 218 유형과 합쳐져 ★2."
```

```yaml
- id: GN-PROB-100-218
  page: 100
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑵ P(A), P(B), P(A∩B) 가 주어진 두 경우에 대해 A 와 B 가 독립인지 종속인지 판정.
  category: "P(A)P(B) 와 P(A∩B) 비교 → 독립·종속"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "독립·종속의 판정(곱 조건 대조)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    곱 한 번 하고 주어진 P(A∩B) 와 같은지 보는 것이 전부. 판정 기준을 외우고 있는지만 묻는다. 익히기 ★1 출발 · 통찰 0 · M_total 3 → ★1.
  tier: star_1
  mechanism_primary: "P(A)P(B) 계산 → P(A∩B) 와 일치하면 독립, 아니면 종속"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "⑴ 독립 ⑵ 종속"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/100-218.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 값의 조합을 바꾼다. 제약: P(A∩B) ≤ min(P(A), P(B)) 이고 P(A)+P(B)-P(A∩B) ≤ 1 이어야 실제로 존재하는 사건 쌍이 된다."
    creative: "(1) 독립이 되도록 P(A∩B) 를 정하게 하기(★2) (2) 배반인지도 함께 묻기(배반·독립 혼동 함정 추가 · ★2) (3) 표본공간을 구체적 시행으로 주고 세 확률을 학생이 직접 구하게 하면 101-e6 골조 · ★2."
```

```yaml
- id: GN-PROB-100-219
  page: 100
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ A, B 가 독립이고 P(A)=3/5, P(B)=1/6 일 때 P(Bᶜ|A), P(Aᶜ|Bᶜ), P(A∩B), P(A∩Bᶜ).
  category: "독립 → 여사건도 독립 → 조건부확률·곱사건 값 읽기"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "독립사건과 여사건의 확률"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    네 소문항 모두 '독립이면 여사건끼리도 독립'이라는 특강 결론을 한 번씩 적용한다. 조건부확률을 원래 확률로 바꾸는 순간 계산은 곱 한 번. 익히기 ★1 출발 유지(통찰 0 · M_total 5 이나 하한).
  tier: star_1
  mechanism_primary: "독립 ⇒ Bᶜ, Aᶜ 와도 독립 → 조건부확률을 각 사건의 확률로 치환 → 곱"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\dfrac{5}{6}$ ⑵ $\dfrac{2}{5}$ ⑶ $\dfrac{1}{10}$ ⑷ $\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/100-219.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "P(A), P(B) 를 다른 유리수로. 제약: 두 값 모두 0 초과 1 미만이고, 답이 기약분수로 떨어지게 분모를 서로소로 잡는다."
    creative: "(1) P(Aᶜ∩Bᶜ) 를 추가해 드모르간까지 확인(★2) (2) P(A∪B) 를 묻기(덧셈정리 결합 · ★2) (3) 네 값 중 하나를 미지수로 두고 나머지에서 역산(★2 · 102-e7 골조)."
```

```yaml
- id: GN-PROB-100-220
  page: 100
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    10점 과녁을 맞힐 확률이 각각 0.6, 0.8 인 두 양궁 선수가 한 발씩 쏠 때 둘 다 10점을 맞힐 확률.
  category: "독립인 두 사건의 곱사건 확률"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "독립인 두 사건이 동시에 일어날 확률(실생활)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    서로 다른 사람의 시행이므로 독립으로 보고 0.6×0.8 한 줄. 익히기 ★1 출발 · 통찰 0 · M_total 3 → ★1.
  tier: star_1
  mechanism_primary: "두 선수의 명중은 독립 → P(A∩B)=0.6×0.8"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$0.48$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/100-220.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 명중 확률을 다른 소수·분수로. 제약: 곱이 두 자리 소수로 떨어지면 답 표기가 깔끔하다."
    creative: "(1) '적어도 한 명이 맞힐 확률'로 바꾸면 여사건 한 단계 추가(★2) (2) 선수를 셋으로 늘리기(★2) (3) 한 명의 확률을 미지수로 두고 곱사건 확률을 주면 역산 · 103-226 골조(★2)."
```

### 필수·발전 예제

```yaml
- id: GN-PROB-101-e6
  page: 101
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    주사위 한 개를 던질 때 A=홀수의 눈, B=4 이상의 눈, C=3의 배수의 눈. 보기 ㄱ(A와 B) ㄴ(A와 C) ㄷ(B와 C) 중 서로 독립인 것만 고르기.
  category: "각 사건·교집합의 확률 → 곱 조건 세 쌍 대조"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "사건의 독립과 종속의 판정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    표본공간이 6개뿐이라 각 사건의 원소를 적고 교집합 원소를 세면 끝. 다만 세 쌍을 모두 따져야 하고 원소를 하나 빠뜨리면 판정이 뒤집힌다(T-범위). 필수 예제 ★2 출발 · 통찰 0 · M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "각 사건의 원소 나열 → P(A), P(B), P(C) 와 교집합 확률 → P(X∩Y)=P(X)P(Y) 를 세 쌍에 대조"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "ㄴ, ㄷ"
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-prob/items/101-e6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 사건의 정의를 다른 조건(짝수, 5 이하, 소수 등)으로 바꾼다. 제약: 독립인 쌍과 종속인 쌍이 섞이도록 원소 수를 조절해야 보기 문항으로 의미가 있다(6의 약수 구조를 이용하면 독립 쌍이 잘 나온다)."
    creative: "(1) 주사위 두 개로 표본공간을 36개로 키우기(Mₖ 상승 · ★2~3) (2) 세 사건이 쌍마다 독립이지만 셋이 동시에는 독립이 아닌 예를 묻기(★4 · I-MI) (3) 독립이 되도록 사건 C 를 학생이 만들게 하기(★3 · I-BW)."
```

```yaml
- id: GN-PROB-101-221
  page: 101
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    동전을 세 번 던질 때 A=첫 번째 앞면, B=두 번째 앞면, C=앞면이 연속하여 두 번만 나오는 사건. 보기 ㄱ(A와 B) ㄴ(A와 C) ㄷ(B와 C) 중 서로 독립인 것만 고르기.
  category: "표본공간 8개 나열 → C 의 조건 해석 → 곱 조건 세 쌍 대조"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'앞면이 연속하여 두 번만'을 HHT, THH 두 개로 옮기는 해석 — 세 번 모두 앞면인 경우를 넣으면 판정이 통째로 뒤집힘"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "사건의 독립과 종속의 판정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    골조 자체는 e6 와 같은 세 쌍 대조지만, 사건 C 가 '연속하여 두 번만'이라 HHH 를 배제해야 한다는 조건 해석이 승부처다(EQV d2 · T-경계). 해석만 맞으면 나머지는 8개 표본공간 세기. 확인체크 유제 ★2 출발 유지.
  tier: star_2
  mechanism_primary: "표본공간 8개 나열 → C={HHT, THH} 로 확정 → 세 쌍에 대해 P(X∩Y)=P(X)P(Y) 대조"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "ㄱ, ㄴ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/101-221.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "던지는 횟수를 4번으로 늘려 표본공간 16개로. 제약: 횟수를 늘리면 '연속 두 번만' 사건의 원소 수가 급증해 손계산 한계를 넘는다 — 3~4회가 상한."
    creative: "(1) C 를 '앞면이 두 번 나오는 사건'(연속 조건 제거)으로 바꾸면 해석 통찰이 사라져 ★1~2 (2) '연속하여 두 번 이상'으로 바꾸면 경계 해석이 다시 살아남(★2) (3) 세 쌍이 모두 독립이 되도록 C 를 설계하게 하면 ★3~4."
```

```yaml
- id: GN-PROB-102-e7
  page: 102
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    A, B 가 독립이고 P(A)=1/3, P(A∪B)=5/6 일 때 P(B).
  category: "덧셈정리에 독립 조건 대입 → P(B) 에 대한 일차방정식"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "독립사건의 확률의 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    P(A∪B)=P(A)+P(B)-P(A)P(B) 로 놓고 P(B) 를 미지수로 푸는 표준 절차. 독립을 곱으로 바꾸는 단계가 정형화돼 있어 통찰로 세지 않는다. 필수 예제 ★2 출발 유지.
  tier: star_2
  mechanism_primary: "덧셈정리 P(A∪B)=P(A)+P(B)-P(A∩B) → 독립이므로 P(A∩B)=P(A)P(B) → P(B) 일차방정식"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{3}{4}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-prob/items/102-e7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "P(A) 와 P(A∪B) 를 바꾼다. 제약: P(A) < P(A∪B) 이고 풀어 나온 P(B)=(P(A∪B)-P(A))/(1-P(A)) 가 0과 1 사이 기약분수가 되어야 한다."
    creative: "(1) 주어진 값을 P(Aᶜ), P(Aᶜ∩Bᶜ) 로 바꾸면 여사건 한 겹 추가(★2 · 102-223 골조) (2) P(A∪B) 대신 P(A|B) 를 주면 독립 판정 후 곧바로 값(★1~2) (3) P(A) 와 P(B) 를 모두 미지수로 두고 합과 곱을 주면 이차방정식(★3)."
```

```yaml
- id: GN-PROB-102-222
  page: 102
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    A, B 가 독립이고 P(A∩B)=2/15, P(Bᶜ)=3P(B) 일 때 P(A).
  category: "여사건 관계식 → P(B) → 곱 조건으로 P(A)"
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "독립사건의 확률의 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    P(Bᶜ)=1-P(B) 를 대입해 P(B)=1/4 를 얻고, P(A)=P(A∩B)/P(B) 로 끝. 두 단계뿐이라 M_total 5 지만 확인체크 유제의 출발점 ★2 를 유지했다(하한 근처).
  tier: star_2
  mechanism_primary: "1-P(B)=3P(B) → P(B)=1/4 → 독립이므로 P(A)=P(A∩B)/P(B)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{8}{15}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/102-222.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "배수 관계(3배)와 P(A∩B) 값을 바꾼다. 제약: P(B)=1/(k+1) 이 되므로 P(A)=P(A∩B)(k+1) 이 1 이하가 되도록 P(A∩B) 를 작게 잡아야 한다."
    creative: "(1) 관계식을 P(Aᶜ)=2P(A) 로 옮겨 A 쪽에서 출발하게 하기(★2 유지) (2) P(A∩B) 대신 P(A∪B) 를 주면 덧셈정리가 끼어 ★2~3 (3) 'P(Bᶜ)=3P(B)' 를 'B 가 일어나지 않을 확률이 일어날 확률의 3배'라는 문장으로 바꾸면 해석 단계 추가(★2)."
```

```yaml
- id: GN-PROB-102-223
  page: 102
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    A, B 가 독립이고 P(A)=3/10, P(Aᶜ∩Bᶜ)=2/5 일 때 P(B).
  category: "여사건도 독립 → P(Aᶜ)P(Bᶜ) 로 분해 → P(B)"
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "독립사건의 확률의 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    A, B 독립이면 Aᶜ, Bᶜ 도 독립(99-216 의 결론)이라는 성질을 그대로 쓰면 P(Aᶜ)P(Bᶜ)=2/5 한 줄에서 P(Bᶜ) 가 나온다. 이 단원에서 이미 증명한 도구를 재사용하는 표준 절차라 통찰로 세지 않았다. 확인체크 유제 ★2.
  tier: star_2
  mechanism_primary: "독립 ⇒ Aᶜ, Bᶜ 독립 → P(Aᶜ)P(Bᶜ)=2/5 → P(Bᶜ)=4/7 → P(B)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{3}{7}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/102-223.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "P(A) 와 P(Aᶜ∩Bᶜ) 를 바꾼다. 제약: P(Bᶜ)=P(Aᶜ∩Bᶜ)/(1-P(A)) 가 0과 1 사이여야 하므로 P(Aᶜ∩Bᶜ) < 1-P(A) 를 지켜야 한다."
    creative: "(1) P(Aᶜ∩Bᶜ) 대신 P(A∪B) 를 주면 드모르간 한 단계가 앞에 붙는다(★2 · 여사건 전환 통찰 d1) (2) P(A∩Bᶜ) 를 주면 부호 배치가 바뀌어 같은 ★2 (3) P(B) 를 미지수로 두고 최댓값을 묻는 형태로 바꾸면 105-235 골조(★4)."
```

```yaml
- id: GN-PROB-102-224
  page: 102
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    A 와 B 는 배반, A 와 C 는 독립이고 P(A∪B)=2/3, P(A∩C)=1/4, P(C)=1/2 일 때 P(B).
  category: "독립 조건으로 P(A) → 배반 조건의 덧셈정리로 P(B)"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "배반사건과 독립사건이 섞인 확률 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 관계가 서로 다른 사건 쌍에 붙어 있어, 독립 쪽(A와 C)에서 P(A)=1/2 를 먼저 얻고 배반 쪽(A와 B)의 P(A∪B)=P(A)+P(B) 로 넘어가는 순서만 잡으면 된다. 각 단계는 표준이라 통찰 0.
    [분류 이슈] 세 사건·두 관계라 체감은 ★3 쪽이지만 단계별 도구가 모두 공식 1회 적용이라 ★2 로 둠 — 기록만.
  tier: star_2
  mechanism_primary: "A와 C 독립 → P(A)=P(A∩C)/P(C)=1/2 → A와 B 배반 → P(B)=P(A∪B)-P(A)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{6}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/102-224.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "P(A∩C), P(C), P(A∪B) 를 바꾼다. 제약: P(A)=P(A∩C)/P(C) 가 1 이하이고 P(A∪B) > P(A) 여야 P(B) 가 양수로 나온다."
    creative: "(1) 묻는 대상을 P(C∪A) 나 P(B∪C) 로 바꾸기(★2~3) (2) 'A와 B 배반'을 'A와 B 독립'으로 바꾸면 덧셈정리에 곱이 들어가 ★3 (3) 배반과 독립 중 어느 쪽인지를 학생이 판정하게 하면 104-228 골조(★3)."
```

```yaml
- id: GN-PROB-103-e8
  page: 103
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑶ 합격 확률이 각각 3/4, 1/3 이고 두 합격 사건이 독립일 때 둘 다 합격 · 한 명만(지우 합격·서준 불합격) · 적어도 한 명 합격할 확률.
  category: "독립 곱 → 여사건 곱 → 여사건으로 '적어도'"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "독립사건의 확률"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 곱, ⑵ 한쪽을 여사건으로 바꿔 곱, ⑶ '적어도' → 둘 다 불합격의 여사건. 교과에서 공식처럼 다루는 세 패턴을 한 문항에 모은 대표 예제라 통찰로 세지 않았다. 필수 예제 ★2.
  tier: star_2
  mechanism_primary: "독립 ⇒ P(A∩B)=P(A)P(B) → P(A∩Bᶜ)=P(A)P(Bᶜ) → P(A∪B)=1-P(Aᶜ)P(Bᶜ)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{1}{4}$ ⑵ $\dfrac{1}{2}$ ⑶ $\dfrac{5}{6}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-prob/items/103-e8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 합격 확률을 다른 분수로. 제약: 분모를 서로소로 잡아야 세 소문항의 답이 모두 기약분수로 떨어지고, ⑶ 은 1-(1-p)(1-q) 가 1 미만이어야 한다."
    creative: "(1) '한 명만 합격'(어느 쪽인지 지정하지 않음)으로 바꾸면 두 경우 합(★2 · 103-225 골조) (2) 세 사람으로 늘리면 여사건 계산이 필수가 되어 ★3 (3) ⑶ 의 값을 주고 서준이의 합격 확률을 역산시키면 104-231 골조(★2~3)."
```

```yaml
- id: GN-PROB-103-225
  page: 103
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑵ 완주 확률이 각각 1/5, 1/4 인 두 참가자에 대해 한 명만 완주할 확률과 적어도 한 명이 완주할 확률.
  category: "배반인 두 경우의 합 → 여사건으로 '적어도'"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "독립사건의 확률"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 'A만 완주'와 'B만 완주'가 배반이므로 두 곱의 합, ⑵ 는 둘 다 완주 못 할 확률의 여사건. '한 명만'과 '적어도 한 명'을 구분하지 못하면 통째로 틀린다(T-범위). 확인체크 유제 ★2.
  tier: star_2
  mechanism_primary: "P(A∩Bᶜ)+P(Aᶜ∩B) 로 '한 명만' → 1-P(Aᶜ)P(Bᶜ) 로 '적어도 한 명'"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{7}{20}$ ⑵ $\dfrac{2}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/103-225.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 완주 확률을 바꾼다. 제약: p(1-q)+q(1-p) 와 1-(1-p)(1-q) 가 모두 기약분수로 떨어지도록 분모를 잡는다."
    creative: "(1) '두 명 모두 완주하지 못할 확률'을 추가(★2 유지) (2) ⑵ 의 값을 주고 한쪽 확률을 역산(★2~3) (3) 참가자를 셋으로 늘려 '적어도 한 명'을 묻기(여사건 필수 · ★3)."
```

```yaml
- id: GN-PROB-103-226
  page: 103
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    승부차기 성공 확률이 각각 2/3, p 인 두 선수에 대해 'A만 성공'할 확률이 4/15 일 때 p.
  category: "'A만' → P(A)P(Bᶜ) → p 에 대한 일차방정식"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "독립사건의 확률에서 미지 확률 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    'A만 성공' = A 성공 ∩ B 실패 로 옮기면 (2/3)(1-p)=4/15 일차방정식 한 줄. 결과에서 미지수를 찾는 형태지만 식이 하나뿐인 단순 미정계수 대입이라 I-BW 로 세지 않았다. 확인체크 유제 ★2.
  tier: star_2
  mechanism_primary: "'A만 성공'=P(A)P(Bᶜ) → (2/3)(1-p)=4/15 → p"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{3}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/103-226.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A 의 성공 확률과 'A만 성공' 확률을 바꾼다. 제약: 나온 p 가 0과 1 사이여야 하므로 주어진 확률은 P(A) 보다 작아야 한다."
    creative: "(1) 조건을 '둘 중 한 명만 성공할 확률'로 바꾸면 두 항의 합이 되어 이차식(★3) (2) '적어도 한 명 성공'을 주면 104-231 골조(★2) (3) p 의 범위를 묻는 부등식 형태로 바꾸면 ★3."
```

### 연습문제 STEP 1

```yaml
- id: GN-PROB-104-227
  page: 104
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    1~10 이 적힌 카드에서 한 장을 뽑을 때 A=짝수, B=소수, C=10의 약수. 보기 ㄱ(A와 B는 배반) ㄴ(A와 C는 독립) ㄷ(B와 C는 종속) 중 옳은 것 고르기.
  category: "원소 나열 → 배반(교집합 공집합)과 독립(곱 조건)을 구분해 판정"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "사건의 독립과 종속의 판정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    세 사건의 원소를 적고 ㄱ은 교집합이 공집합인지, ㄴㄷ은 곱 조건이 성립하는지를 각각 다른 기준으로 본다. 1 이 소수가 아니고 10의 약수에는 들어간다는 지점이 유일한 함정(T-범위). STEP 1 ★2 출발 · 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "A, B, C 의 원소 나열 → ㄱ은 A∩B=∅ 여부 → ㄴㄷ은 P(X∩Y)=P(X)P(Y) 대조"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "ㄴ, ㄷ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/104-227.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "카드 범위를 1~12, 1~20 으로 바꾸거나 C 를 다른 수의 약수로. 제약: 독립 판정이 성립하려면 |A∩C|/10 = (|A|/10)(|C|/10) 처럼 원소 수가 딱 맞아떨어져야 하므로 범위를 바꾸면 사건 정의를 다시 맞춰야 한다."
    creative: "(1) 보기를 '독립인 쌍의 개수'로 바꾸기(★2 유지) (2) 배반이면서 독립일 수 없음을 근거로 묻기(★3 · 105-232 골조) (3) C 를 학생이 독립이 되도록 정하게 하면 역방향 설계(★3~4)."
```

```yaml
- id: GN-PROB-104-228
  page: 104
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    0<P(A)<1, 0<P(B)<1 인 두 사건이 P(A)=P(A|B) 를 만족할 때 5지선다 중 옳지 않은 것 고르기(선택지는 독립의 여러 동치 표현과 배반 표현).
  category: "P(A)=P(A|B) → 독립 → 각 선택지를 독립의 동치식으로 검증"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "P(A)=P(A|B) 를 P(A∩B)=P(A)P(B) 로 옮긴 뒤, 여사건·덧셈정리 표현까지 같은 조건의 다른 얼굴임을 알아봐야 선택지를 하나씩 판정할 수 있음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "독립의 동치 조건 참·거짓 판정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    구체 수치가 없고 일반 사건에 대한 명제 다섯 개를 모두 독립의 동치 표현으로 환원해야 한다(Mₐ 3). 오답 선택지는 배반일 때만 성립하는 덧셈식이어서 배반·독립 혼동을 정확히 갈라야 한다. EQV d2 · M_total 7 → STEP 1 출발점 ★2 에서 +1.
    [분류 이슈] 벤더 라벨은 STEP 1(★2)이나 추상도·판정 수 때문에 ★3 으로 올림 — 1단 차이, 기록만.
  tier: star_3
  mechanism_primary: "P(A)=P(A|B) ⇒ 독립 → 각 선택지를 P(A∩B)=P(A)P(B) 및 여사건 독립으로 환원 → 배반 전용식인 ③ 이 거짓"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/104-228.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수치가 없는 명제형. 굳이 수를 넣으려면 P(A), P(B) 에 구체값을 주고 각 선택지의 좌·우변을 계산해 비교하는 형태로 바꿀 수 있다(★2 로 하락)."
    creative: "(1) '옳은 것'을 묻는 방향으로 뒤집기(★3 유지) (2) 선택지를 ㄱㄴㄷ 보기로 줄이고 반례를 요구하면 ★3~4 (3) 전제를 'A와 B는 배반'으로 바꿔 독립 전용식이 거짓이 되게 설계(★3)."
```

```yaml
- id: GN-PROB-104-229
  page: 104
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: ["수능 기출"]
  category_type: "연습문제 STEP 1"
  summary: |
    P(A|B)=P(A)=1/2, P(A∩B)=1/5 일 때 P(A∪B) 의 값(5지선다).
  category: "P(A|B)=P(A) → 독립 → P(B) → 덧셈정리"
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "P(A|B)=P(A) 라는 진술이 곧 독립 조건임을 읽어내야 P(A∩B)=P(A)P(B) 로 P(B) 를 구할 수 있음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "독립사건의 확률의 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    독립임을 알아차리면 P(B)=2/5 가 바로 나오고 덧셈정리로 마무리. 기출이지만 조건 해석 한 번(EQV d1) 외에는 계산이 두 줄이라 +0. STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: "P(A|B)=P(A) ⇒ 독립 → P(B)=P(A∩B)/P(A) → P(A∪B)=P(A)+P(B)-P(A∩B)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/104-229.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "P(A) 와 P(A∩B) 를 바꾼다. 제약: P(B)=P(A∩B)/P(A) 가 1 이하여야 하고 P(A∪B) 가 선택지로 쓸 만한 기약분수여야 한다."
    creative: "(1) P(A∪B) 를 주고 P(A∩B) 를 묻는 역방향(★2) (2) 조건을 P(A|B)=P(A|Bᶜ) 로 바꾸면 동치 변환이 한 겹 깊어져 ★3 (3) P(Aᶜ∩Bᶜ) 를 묻는 마무리로 바꾸기(드모르간 추가 · ★2)."
```

```yaml
- id: GN-PROB-104-230
  page: 104
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    A, B 가 독립이고 P(A)=3/4, P(B)=5/6 일 때 P((A-B)∪(B-A)).
  category: "대칭차집합 → 배반인 두 사건의 합으로 분해 → 독립 곱"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "집합 표현 (A-B)∪(B-A) 를 서로 배반인 A∩Bᶜ 와 Aᶜ∩B 의 합으로 옮겨야 독립 곱을 쓸 수 있음(또는 P(A∪B)-P(A∩B) 로 환원)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "대칭차집합의 확률(독립)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    차집합 기호를 여사건 곱으로 옮기는 표현 전환이 승부처이고, 옮기고 나면 3/4·1/6 + 1/4·5/6 두 항뿐이다. 두 사건이 배반임을 놓치면 중복을 빼려 들다 틀린다.
    [분류 이슈] RT d2 · M_total 7 로 ★3 후보였으나 전환 뒤 계산이 두 줄이라 STEP 1 출발점 ★2 를 유지 — 기록만.
  tier: star_2
  mechanism_primary: "(A-B)∪(B-A) = (A∩Bᶜ)∪(Aᶜ∩B) 이고 두 사건은 배반 → P(A)P(Bᶜ)+P(Aᶜ)P(B)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{1}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/104-230.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "P(A), P(B) 를 다른 유리수로. 제약: 답이 p+q-2pq 형태이므로 두 분모의 곱이 깔끔한 값(4·6, 3·5 등)이어야 기약분수로 떨어진다."
    creative: "(1) 묻는 대상을 P(A-B) 하나로 줄이면 ★1~2 (2) 대칭차집합의 확률값을 주고 P(B) 를 역산시키면 이차방정식(★3) (3) 독립 조건을 빼고 P(A∩B) 를 직접 주면 표현 전환만 남아 ★2."
```

```yaml
- id: GN-PROB-104-231
  page: 104
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    A 가 표적을 맞힐 확률이 2/3 이고 A, B 중 적어도 한 명이 맞힐 확률이 3/4 일 때 두 사람 모두 맞힐 확률.
  category: "'적어도' → 여사건 곱으로 P(B) 역산 → 독립 곱"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'적어도 한 명이 맞힌다'를 '둘 다 빗맞힌다'의 여사건으로 옮겨야 미지의 P(B) 가 식에 들어온다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "여사건을 이용한 독립사건의 확률"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    1-P(Aᶜ)P(Bᶜ)=3/4 에서 P(Bᶜ) 를 얻고 다시 P(A)P(B) 로 돌아오는 두 번 왕복이 골조다. 여사건 전환이 없으면 미지수가 식에 들어오지 않는다(EQV d1). 계산은 분수 두 번이라 STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: "1-P(Aᶜ)P(Bᶜ)=3/4 → P(Bᶜ) → P(B) → P(A∩B)=P(A)P(B)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{1}{6}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/104-231.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "P(A) 와 '적어도 한 명' 확률을 바꾼다. 제약: 1-P(적어도) 가 P(Aᶜ) 로 나누어떨어져 0과 1 사이의 P(Bᶜ) 를 주어야 한다. 또 P(적어도) 는 P(A) 이상이어야 모순이 없다."
    creative: "(1) '둘 중 한 명만 맞힐 확률'을 주면 이차방정식이 되어 ★3 (2) 묻는 것을 P(B) 로 바꾸면 한 단계 짧아져 ★2 하한 (3) 사격 선수를 셋으로 늘리고 '적어도 한 명'을 주면 세제곱 방정식(★3~4)."
```

### 연습문제 STEP 2

```yaml
- id: GN-PROB-105-232
  page: 105
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    0<P(A)<1, 0<P(B)<1 인 두 사건에 대해 보기 ㄱ(배반이면 독립) ㄴ(배반이면 P(A)+P(B)≤1) ㄷ(독립이면 P(Aᶜ)+P(A|Bᶜ)=1) 중 옳은 것 고르기.
  category: "배반·독립의 정의 대조 → 반례와 여사건 독립으로 참·거짓 판정"
  M: {s: 2, k: 1, a: 3, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "ㄱ: 배반을 P(A∩B)=0 으로 옮기면 0<P(A)P(B) 와 모순 — 배반과 독립이 양립할 수 없음을 확률식 차원에서 보여야 함"
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "ㄷ: A 와 Bᶜ 도 독립이므로 P(A|Bᶜ)=P(A) 로 치환하면 P(Aᶜ)+P(A)=1"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "독립·배반의 성질 참·거짓 판정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    수치 없이 일반 사건의 성질을 다루고(Mₐ 3), 0<P(A)<1 이라는 전제가 ㄱ의 판정을 좌우한다(T-범위·T-표기 두 함정). 배반↛독립 모순과 여사건 독립 치환, 두 단계에서 동치 변환이 필요하다. STEP 2 ★3 출발 유지(통찰 2개지만 둘 다 EQV 계열이라 ★4 저노출 유형 게이트를 못 넘는다).
  tier: star_3
  mechanism_primary: "배반 ⇒ P(A∩B)=0 이고 독립 ⇒ P(A∩B)=P(A)P(B)>0 → ㄱ 거짓 → ㄴ은 P(A∪B)≤1 → ㄷ은 A와 Bᶜ 독립으로 치환"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "ㄴ, ㄷ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/105-232.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수치가 없는 명제형. 0<P(A)<1 전제만이 조절 가능한 '수'이며, 이를 0≤P(A)≤1 로 풀면 ㄱ이 참이 되는 경우(P(A)=0)가 생겨 답이 바뀐다."
    creative: "(1) ㄷ을 P(Aᶜ)+P(A|B)=1 로 바꿔도 참이 되게 설계(★3 유지) (2) '독립이면 배반이 아니다'의 증명을 서술형으로 요구(★3~4) (3) 세 사건으로 늘려 쌍별 독립과 전체 독립을 구분시키면 ★4~5(I-MI 추가)."
```

```yaml
- id: GN-PROB-105-233
  page: 105
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    관람객 투표와 심사 위원 점수표(A·B·C 등급별 점수)가 주어지고 두 항목의 등급 확률이 각각 1/2, 1/3, 1/6 이며 두 항목이 독립일 때 두 점수의 합이 70점일 확률.
  category: "합 70 이 되는 등급 쌍 분해 → 각 쌍의 독립 곱 → 배반 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'합이 70점'이라는 한 조건이 표에서 서로 다른 등급 쌍 세 가지를 동시에 포함 — 세 경우를 빠짐없이 찾아야 하고 하나라도 빠지면 답이 달라짐"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "표가 주어진 독립사건의 확률(경우 분해)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    표에서 두 항목의 점수 조합을 읽어 합이 70 이 되는 등급 쌍(관람객 A·심사 C, B·B, C·A)을 모두 찾는 것이 본체다. 각 쌍은 독립이라 곱, 쌍끼리는 배반이라 합. 경우 누락이 유일하고 치명적인 실수 지점(MI d2). STEP 2 ★3 유지.
  tier: star_3
  mechanism_primary: "표에서 합 70 인 등급 쌍 3가지 열거 → 각 쌍 P(관람객 등급)×P(심사 등급) → 배반이므로 세 값을 더함"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{5}{18}$'
  answer_source: "답지"
  figure: "crop:fig-105-233.png"
  latex: latex-bank/gn-prob/items/105-233.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "목표 합(70)을 60·80 으로 바꾸거나 등급 확률 1/2, 1/3, 1/6 을 다른 합이 1인 조로 바꾼다. 제약: 표의 점수 값(40/30/20, 50/40/30)은 그림에 고정돼 있으므로 바꾸면 크롭을 다시 만들어야 하고, 목표 합은 해당하는 쌍이 2~3개 나오는 값이어야 한다."
    creative: "(1) '합이 70점 이상일 확률'로 바꾸면 경우가 늘어 ★3 유지~상승 (2) 두 항목의 등급 확률을 서로 다르게 주면 곱 계산이 늘어 ★3 (3) 합의 확률분포 표를 만들게 하면 확률변수 단원과 연결되어 ★4(I-XU)."
```

```yaml
- id: GN-PROB-105-234
  page: 105
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    스위치 a, b, c, d 로 이루어진 회로(a 와 'b·c 직렬'이 병렬, 그 뒤 d 가 직렬)에서 각 스위치가 닫힐 확률이 1/2 이고 독립일 때 P에서 Q로 전류가 흐를 확률.
  category: "회로 연결 구조 → 사건의 합·곱 → 덧셈정리와 독립 곱"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "그림의 직렬·병렬 배선을 사건 연산으로 옮기는 전환 — 직렬은 교집합, 병렬은 합집합이고 전체는 (a∪(b∩c))∩d"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "회로의 스위치와 독립사건의 확률"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    그림을 사건 식으로 옮기고 나면 병렬부에 덧셈정리(중복 한 번 빼기), 직렬부에 곱을 쓰는 두 단계뿐이다. 병렬부에서 중복을 빼지 않거나 d 를 빠뜨리는 것이 전형적 실수. 표현 전환 RT d2 · STEP 2 ★3 유지.
  tier: star_3
  mechanism_primary: "전류가 흐름 = (a∪(b∩c))∩d → P(a∪(b∩c))=P(a)+P(b)P(c)-P(a)P(b)P(c) → ×P(d)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{5}{16}$'
  answer_source: "답지"
  figure: "crop:fig-105-234.png"
  latex: latex-bank/gn-prob/items/105-234.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 스위치가 닫힐 확률 1/2 를 p(또는 스위치마다 다른 값)로 바꾼다. 제약: 회로 배선 자체는 그림에 고정돼 있으므로 라벨 a, b, c, d 의 위치와 직렬·병렬 구조는 바꿀 수 없다 — 구조를 바꾸려면 크롭을 새로 만들어야 한다."
    creative: "(1) 확률을 문자 p 로 두고 전류가 흐를 확률이 1/2 가 되는 p 를 묻기(★4 · I-BW) (2) '전류가 흐르지 않을 확률'로 뒤집어 여사건 전략을 유도(★3) (3) 스위치를 하나 더 넣어 병렬 갈래를 세 개로 늘리면 여사건 풀이가 훨씬 빨라져 I-SC 가 생김(★4)."
```

### 연습문제 실력 UP

```yaml
- id: GN-PROB-105-235
  page: 105
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    A, B 가 독립이고 P(A∩B)=1/16 일 때 P(Aᶜ∩Bᶜ) 의 최댓값.
  category: "여사건 독립 → 1-(P(A)+P(B))+P(A)P(B) → 곱이 일정할 때 합의 최솟값"
  M: {s: 2, k: 2, a: 3, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "P(Aᶜ∩Bᶜ) 를 (1-P(A))(1-P(B)) 로 옮기고 전개하면 P(A)+P(B) 하나만 미지량으로 남는 구조가 드러남"
    - step: 2
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "곱 P(A)P(B)=1/16 이 고정된 상태에서 합 P(A)+P(B) 의 최솟값을 산술·기하평균(절대부등식)으로 구하는 단원 밖 도구 결합"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "독립사건 확률의 최대·최소(산술·기하평균)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    두 확률이 모두 미지수인 채로 식을 정리해야 하고(Mₐ 3), 목표식이 -(P(A)+P(B)) 꼴로 남는 순간 '곱 일정, 합 최소' 구조를 알아봐야 한다. 확률 단원 안의 도구만으로는 끝나지 않고 절대부등식을 끌어오는 결합이 핵심(XU d2). 등호 조건 P(A)=P(B)=1/4 이 0과 1 사이인지도 확인해야 한다. 실력 UP ★4 출발 유지.
  tier: star_4
  mechanism_primary: "P(Aᶜ∩Bᶜ)=(1-P(A))(1-P(B))=1-(P(A)+P(B))+1/16 → 산술·기하평균으로 P(A)+P(B) 최솟값 1/2 → 최댓값 9/16"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$\dfrac{9}{16}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/105-235.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "P(A∩B) 를 다른 값 k 로 바꾼다. 제약: 등호 조건에서 P(A)=P(B)=√k 이므로 k 는 0<k<1 인 완전제곱 유리수(1/4, 1/9, 1/16, 4/25)여야 답이 유리수로 떨어진다."
    creative: "(1) P(A∪B) 의 최솟값을 묻기(같은 골조 · ★4) (2) P(A∩B) 대신 P(A)+P(B) 를 고정하고 P(A∩B) 의 최댓값을 묻기(★4) (3) 독립 조건을 빼고 P(A), P(B) 만 주면 최대·최소가 포함·배반 경계에서 결정되어 골조가 바뀜(★3~4 · I-MI)."
```

## 표본 판정 요약 (23문)

- ★ 분포: ★1 4 · ★2 14 · ★3 4 · ★4 1 · ★5 0
- 통찰형 10 · 절차형 13 · premium 0
- 통찰 유형 분포(라벨 12개): I-EQV 7(101-221 · 104-228 · 104-229 · 104-231 · 105-232 ×2 · 105-235) · I-RT 3(99-216 · 104-230 · 105-234) · I-MI 1(105-233) · I-XU 1(105-235). depth 3 은 없고 depth 2 가 7개.
- type_hint 상위: 「독립사건의 확률의 계산」 4 · 「사건의 독립과 종속의 판정」 3 · 「독립사건의 확률」 2 · 나머지 14개는 각 1
- 그림: 2문(`crop:fig-105-233.png` · `crop:fig-105-234.png`)
- 대상층: 하위권 4 · 중하위권 9 · 중위권 6 · 중상위권 3 · 상위권 1

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-PROB-99-216 | 특강 구역 신호는 ★2~3 이지만 빈칸 세 칸이 골조를 노출해 실제 사고량은 ★2 수준 | ★2 / ★3 |
| GN-PROB-102-224 | 세 사건·두 관계(배반+독립)라 체감은 ★3 이나 단계별 도구가 모두 공식 1회 적용 | ★2 / ★3 |
| GN-PROB-104-228 | 벤더는 STEP 1(★2)이나 일반 사건 추상(Mₐ 3)·동치 5개 판정으로 ★3 라벨 | ★2 / ★3 |
| GN-PROB-104-230 | RT d2 · M_total 7 로 ★3 후보였으나 표현 전환 뒤 계산이 두 줄이라 ★2 유지 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: 「독립·배반의 성질 참·거짓 판정」(104-228 · 105-232) — 수치 계산형과 달리 일반 사건의 동치 명제를 다루고 Mₐ 가 3 으로 뛴다. 「대칭차집합의 확률」(104-230)도 표현 전환이 본체라 계산형과 분리할 값어치가 있다. 「독립사건 확률의 최대·최소」(105-235)는 절대부등식 결합이라 별도 ★4 유형.
- **통합해도 될 유형**: 「독립사건의 확률의 계산」(102-e7 · 102-222 · 102-223 · 104-229)은 주어진 조건이 P(A∪B) · P(Bᶜ) 배수 관계 · P(Aᶜ∩Bᶜ) · P(A|B) 로 다를 뿐 골조가 모두 '조건을 곱 조건으로 옮겨 미지 확률 하나를 푼다'라 한 유형으로 묶고 조건 형태를 변형 축으로 두면 된다. 「사건의 독립과 종속의 판정」(101-e6 · 101-221 · 104-227)도 표본공간만 주사위·동전·카드로 다를 뿐 동일 골조다.
- **경계**: 「독립사건의 확률」(103-e8 · 103-225)과 「여사건을 이용한 독립사건의 확률」(104-231)은 '적어도/한 명만'을 정방향으로 계산하느냐 역산하느냐로 갈린다. 역산 쪽이 한 단계 깊으므로 카탈로그에서는 base ★ 를 1 차이로 두는 편이 낫다.
