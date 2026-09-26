---
name: mechanism-데이터-GN-CM1-20
description: 개념원리 공통수학1 20 방정식 $x^3=1$의 허근(1/1 · 173~175쪽 17문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학1 (22개정) · 전사본 latex-bank/gn-cm1
  section: "20 방정식 $x^3=1$의 허근"
  unit_code: GN-CM1-20
  part: "1/1"
  extract_range: "173~175쪽 · 173-e10~175-379"
  total_problems: 17
  unit_total: 17
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). insight_type 은 insights 가 비어 있으면 절차형, 하나라도 있으면 통찰형. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm1/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm1/items/<id>.tex
  image_source: latex-bank/gn-cm1/figures/ (crops.json) — 이 범위는 그림 문항 0
---

# 개념원리 공통수학1 · 20 방정식 $x^3=1$의 허근 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 공통수학1 **20 방정식 $x^3=1$의 허근** 173~175쪽의 17문항 전수를 다룬다. 구역은 「필수·발전 예제」 4문(필수 예제 173-e10 + 그 뒤 확인체크 173-364~173-366), 「연습문제 STEP 1」 7문(174-367~174-373), 「연습문제 STEP 2」 5문(175-374~175-378), 「연습문제 실력 UP」 1문(175-379)이다. 연습문제는 단원 이름보다 넓어서, 허근 $\omega$ 의 거듭제곱·켤레 성질 문항(8문)과 삼차방정식의 근과 계수의 관계 문항(5문), 켤레근 정리 문항(3문)이 섞여 있다. 그림 문항은 없다.

이 단원의 표준 도구는 세 줄이다 — $\omega^3=1$, $\omega^2+\omega+1=0$, $\bar{\omega}=\omega^2$(즉 $\omega\bar{\omega}=1$, $\omega+\bar{\omega}=-1$). 본문에서 그대로 주는 사실이므로 **이 셋을 곧장 대입하고 지수를 3 으로 나눈 나머지로 줄이는 단계는 통찰로 세지 않고 절차로 처리**했다. 통찰로 센 것은 그 앞뒤에 한 단계가 더 붙을 때다 — 주어진 방정식이 $x^3=1$ 이 아니어서 인수분해로 관계식을 스스로 찾아야 하거나(174-373 · 175-377 · 175-378), 근과 계수의 관계를 인수분해 표현으로 옮겨야 하거나(174-367 · 175-375), 변환된 방정식에서 원 계수를 역추적해야 하거나(174-370), 지수의 주기로 경우를 나눠 개수를 세야 하는(175-379) 경우다.

벤더 난이도 신호는 구역·태그·level 이다. 「필수」 예제와 그 확인체크는 ★1~2 출발, 「연습문제 STEP 1」은 ★2, 「STEP 2」는 ★3, 「실력 UP」은 ★4 출발로 두고 M_total·통찰로 ±1 조정했다. 확인체크 3문(173-364~173-366)은 ★1 출발이지만 모두 M_total 6 에 통찰 1개라 ★2 로 올렸다. 반대로 통찰 2개가 나온 175-374·175-377 은 +1 후보였으나 각 단계가 이 단원의 표준 도구이고 계산이 한 줄이라 STEP 2 출발점 ★3 을 유지했다(판정이 갈린 문항은 파일 끝 표에 기록).

이 파일의 주 용도는 **숫자 변형·창의 변형의 원본**이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(유형·depth·근거) · `variation_notes`(바꿔도 되는 수와 제약 · 통찰 골조를 유지한 창의 변형)를 채웠다. 답은 전사·검수 단계에서 답지와 대조가 끝난 값을 그대로 옮겼다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-CM1-173-e10
  page: 173
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    x^3=1 의 한 허근 ω 에 대하여 ⑴ ω^40+ω^20+1 ⑵ 1+ω+ω^3+ω^5+ω^7+ω^9+ω^11
    ⑶ (3ω^2+2ω̄)/(ω^10+1) 의 값. ω̄ 는 ω 의 켤레복소수.
  category: "지수를 3 으로 나눈 나머지로 축약 → ω^2+ω+1=0 · ω̄=ω^2 대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "x^3=1 의 허근 ω 의 거듭제곱·켤레 성질"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    이 단원이 본문에서 주는 세 사실(ω^3=1 · ω^2+ω+1=0 · ω̄=ω^2)을 그대로 쓰는 대표 문항이다.
    ⑴은 40=3·13+1, 20=3·6+2 로 줄여 ω+ω^2+1=0, ⑵는 홀수 지수를 1·ω·ω^2 로 바꿔 묶으면 3+2(ω+ω^2), ⑶은 ω^10=ω 이므로 분모가 ω+1=-ω^2 이고 분자는 ω̄=ω^2 로 5ω^2 가 된다.
    세 소문항 모두 축약 → 대입 두 단계뿐이라 통찰 0. 필수 예제 ★2 출발 · M_total 6 이라 −1 조건(통찰 0 이고 M_total ≤ 5)에 걸리지 않아 ★2.
  tier: star_2
  mechanism_primary: "지수를 3 으로 나눈 나머지로 축약 → ω^2+ω+1=0 · ω̄=ω^2 대입 → 값"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $0$ ⑵ $1$ ⑶ $-5$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/173-e10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수(40·20·10)와 ⑵의 홀수 지수 목록, ⑶의 계수 3·2 를 바꿀 수 있음. 제약: 지수를 3 으로 나눈 나머지 조합이 답을 정하므로 나머지가 0·1·2 중 어느 것인지 의도대로 잡을 것. ⑶은 분모가 ω+1 또는 ω^2+1 이 되어 -ω^2 · -ω 로 약분돼야 답이 정수로 떨어진다."
    creative: "(1) x^3=-1 의 허근으로 바꾸면 관계식을 스스로 세우는 단계가 붙어 ★2 유지~+ (2) ω^n + ω^{2n} 의 값을 n 의 나머지로 경우를 나눠 묻기(I-MI d2 · ★3) (3) ω̄ 를 지우고 1/ω 로 주면 ωω̄=1 을 거치는 단계가 사라져 ★1 로 내려간다."
```

```yaml
- id: GN-CM1-173-364
  page: 173
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    x^3=-1 의 한 허근 ω 에 대하여 ⑴ (ω^100+ω^102)/ω^101 ⑵ ω(2ω-1)(2+ω^2)
    ⑶ ω^5-ω^4+ω^3-ω^2+ω 의 값.
  category: "x^3=-1 → ω^2-ω+1=0 유도 → 지수 축약·대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x^3=-1 을 (x+1)(x^2-x+1)=0 으로 인수분해해 허근이 만족하는 식이 ω^2+ω+1=0 이 아니라 ω^2-ω+1=0 임을 세우기"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "x^3=-1 의 허근 ω 의 거듭제곱 성질"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    앞 필수 예제의 부호를 뒤집은 확인체크다. 학생이 걸리는 지점은 ω^2+ω+1=0 을 반사적으로 쓰는 것이고, 실제로는 ω^3=-1 이므로 ω^2-ω+1=0 이다(T-부호).
    ⑴은 분자·분모를 ω^101 로 나눠 ω^{-1}+ω, ⑵는 ω^2=ω-1 을 두 번 넣어 정리, ⑶은 ω^3(ω^2-ω+1)=0 으로 앞 세 항을 통째로 지우는 것이 골조.
    관계식을 스스로 세우는 한 단계(EQV d1) · M_total 6 → 확인체크 ★1 출발에서 +1 해 ★2.
  tier: star_2
  mechanism_primary: "x^3=-1 → ω^2-ω+1=0 · ω^6=1 → 지수 축약 후 ω^2=ω-1 대입 → 값"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $1$ ⑵ $-3$ ⑶ $1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/173-364.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 100·102·101 과 ⑵의 계수 2·(-1)·2, ⑶의 항 개수를 바꿀 수 있음. 제약: ⑴은 분자 두 지수의 차가 2 이고 분모가 그 가운데여야 ω^{-1}+ω 로 묶인다. ⑶은 항 수가 홀수여서 ω^3(ω^2-ω+1) 꼴로 묶여야 한다."
    creative: "(1) x^3=1 로 되돌리면 관계식 유도 단계가 사라져 절차형 ★2 (2) ω^{100}+ω^{101}+ω^{102} 처럼 연속 세 지수의 합을 묻기(주기 착안 · ★2) (3) x^6=1 의 허근으로 주면 어떤 이차식의 근인지부터 갈라져 I-MI d2 · ★3."
```

```yaml
- id: GN-CM1-173-365
  page: 173
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    x^3-1=0 의 한 허근 ω 에 대하여 1/(ω-1) + 1/(ω̄-1) 의 값.
    ω̄ 는 ω 의 켤레복소수.
  category: "통분 → ω+ω̄ · ωω̄ 의 대칭식으로 정리 → 근과 계수 대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "ω 를 직접 구하지 않고 ω, ω̄ 를 x^2+x+1=0 의 두 근(켤레쌍)으로 보아 합 -1 · 곱 1 만으로 식을 정리"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "ω 와 ω̄ 의 합·곱(근과 계수)으로 식의 값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    통분하면 (ω+ω̄-2)/(ωω̄-(ω+ω̄)+1) 이고, 두 허근이 x^2+x+1=0 의 근이므로 합 -1 · 곱 1 을 그대로 넣으면 -3/3 로 끝난다.
    ω=(-1±√3 i)/2 를 직접 대입하는 길도 있지만 분모 유리화가 붙어 느리다 — 대칭식으로 보는 한 단계가 이 문항의 값이다(SYM d1).
    확인체크 ★1 출발 · 통찰 1 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "두 식을 통분 → ω+ω̄=-1, ωω̄=1 대입 → 값"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/173-365.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모의 상수 -1 을 다른 수 k 로 바꿔 1/(ω-k)+1/(ω̄-k) 로 둘 수 있음. 제약: 분모 ωω̄-k(ω+ω̄)+k^2 = 1+k+k^2 이 0 이 되지 않아야 하고(모든 실수 k 에서 성립) 답이 유리수로 떨어지게 k 는 정수로."
    creative: "(1) 합 대신 곱 1/{(ω-1)(ω̄-1)} 을 묻기(★2 유지) (2) 1/(ω-1)^2+1/(ω̄-1)^2 로 올리면 곱셈 공식 한 단계가 더 붙어 ★3 (3) x^3=-1 의 허근으로 바꾸면 합·곱 부호가 뒤집혀 T-부호 함정 추가(★2~3)."
```

```yaml
- id: GN-CM1-173-366
  page: 173
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    x^3+1=0 의 한 허근 ω 에 대하여 {(2ω+1)·conj(2ω+1)} / {(ω-1)·conj(ω-1)} 의 값.
    분자·분모가 모두 「식 × 그 켤레」 꼴이다.
  category: "켤레끼리 묶어 z·z̄ 꼴로 → ω+ω̄=1 · ωω̄=1 대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "conj(2ω+1)=2ω̄+1 로 풀어 분자·분모를 각각 ω, ω̄ 의 대칭식으로 만들고 x^2-x+1=0 의 합 1 · 곱 1 을 대입"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "켤레끼리 묶어 계산하는 허근 식의 값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    켤레의 성질(conj(az+b)=a z̄+b)로 분자를 (2ω+1)(2ω̄+1)=4ωω̄+2(ω+ω̄)+1, 분모를 (ω-1)(ω̄-1)=ωω̄-(ω+ω̄)+1 로 바꾸면 각각 대칭식만 남는다.
    x^3+1=0 이므로 허근은 x^2-x+1=0 의 근이고 합 1 · 곱 1 이다(앞 문항과 부호가 반대 — T-부호).
    켤레를 분배해 대칭식으로 만드는 착안 1개(SYM d2) · M_total 6 → 확인체크 ★1 출발에서 +1 해 ★2.
  tier: star_2
  mechanism_primary: "conj(2ω+1)=2ω̄+1 분배 → 분자·분모를 ω+ω̄, ωω̄ 의 식으로 → 대입"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/173-366.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "2ω+1 의 계수 2·1 과 ω-1 의 상수 -1 을 바꿀 수 있음. 제약: 분자 a^2·ωω̄+ab(ω+ω̄)+b^2 = a^2+ab+b^2, 분모도 같은 꼴이므로 분모가 0 이 되지 않는 계수를 고르고 답이 정수로 떨어지게 정수 계수를 쓴다."
    creative: "(1) |2ω+1|^2/|ω-1|^2 로 절댓값 기호를 써서 묻기(같은 골조 · ★2) (2) 분모를 (ω^2-1)(ω̄^2-1) 로 올리면 ω^2 축약이 한 단계 더 붙어 ★3 (3) 값이 자연수가 되도록 하는 계수를 역으로 찾게 하면 I-BW d2 · ★3."
```

### 연습문제 STEP 1

```yaml
- id: GN-CM1-174-367
  page: 174
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    삼차방정식 2x^3+3x^2-4x+4=0 의 세 근이 α, β, γ 일 때 (2-α)(2-β)(2-γ) 의 값.
  category: "f(x)=2(x-α)(x-β)(x-γ) 로 보고 x=2 대입 → f(2)/2"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "구하는 곱을 근과 계수의 관계로 전개하지 않고 좌변의 인수분해 표현 f(x)=2(x-α)(x-β)(x-γ) 로 옮겨 x=2 를 대입"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "삼차방정식의 근을 이용한 f(k) 꼴 값 구하기(인수분해 표현)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f(2)=2(2-α)(2-β)(2-γ) 이므로 구하는 값은 f(2)/2 한 줄이다. 최고차항의 계수 2 로 나누는 것을 빠뜨리는 것이 이 문항의 함정(T-표기).
    전개해서 8-4(α+β+γ)+2(αβ+βγ+γα)-αβγ 로 가는 길도 막히지는 않지만 대입 세 번이 더 붙는다.
    표현 전환 1개(RT d2) · M_total 6 → STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "좌변을 2(x-α)(x-β)(x-γ) 로 보기 → x=2 대입 → f(2) ÷ 최고차항 계수 2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$12$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/174-367.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 2·3·(-4)·4 와 대입값 2 를 바꿀 수 있음. 제약: 최고차항 계수가 1 이 아니어야 나눗셈 함정이 살아 있고, f(k) 가 그 계수로 나누어떨어져야 답이 정수다."
    creative: "(1) (α-2)(β-2)(γ-2) 처럼 부호를 뒤집어 (-1)^3 을 따지게 하기(★2, T-부호 추가) (2) (1-α)(1-β)(1-γ) 와 (2-α)(2-β)(2-γ) 의 비를 묻기(★3) (3) 계수에 미지수를 넣고 곱이 주어진 값이 되도록 하는 계수를 찾게 하면 I-BW d2 · ★3."
```

```yaml
- id: GN-CM1-174-368
  page: 174
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    삼차방정식 x^3+6x^2+ax+b=0 의 세 근이 연속하는 세 정수일 때 실수 a, b 에 대한 ab 의 값.
  category: "세 근을 n-1, n, n+1 로 두기 → 근의 합으로 n 결정 → a, b 계산"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「연속하는 세 정수」를 n-1, n, n+1 로 가운데 항 기준 대칭으로 놓아 근의 합이 3n 한 문자로 정리되게 만들기"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "세 근에 조건이 붙은 삼차방정식의 계수 결정(연속하는 세 정수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    n, n+1, n+2 로 두어도 풀리지만 n-1, n, n+1 로 두면 합이 3n 이라 근의 합 -6 에서 n 이 바로 나온다 — 조건을 어떻게 문자화하느냐가 계산량을 가른다(EQV d1).
    근이 -3, -2, -1 로 정해진 뒤 a 는 두 근씩 곱의 합, b 는 -(세 근의 곱)이다. b 의 부호를 놓치는 것이 함정(T-부호).
    STEP 1 ★2 출발 · 통찰 1 d1 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "세 근 = n-1, n, n+1 → 합 3n = -6 → n = -2 → a = 두 근씩 곱의 합, b = -(곱) → ab"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$66$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/174-368.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x^2 의 계수 6 을 바꿀 수 있음. 제약: 세 근의 합이 3 의 배수여야 가운데 근 n 이 정수로 떨어진다(계수를 3k 꼴로). 「연속하는 세 짝수·세 홀수」로 바꾸면 합이 3n 인 것은 같고 간격만 2 배가 된다."
    creative: "(1) 세 근을 공비가 있는 등비수열로 바꾸면 곱이 n^3 이 되어 다른 대칭 설정이 필요(★3) (2) a, b 를 주고 연속하는 세 정수인지 판정하게 하면 I-VF d2 · ★3 (3) 「연속하는 세 정수 중 하나가 0」 같은 조건을 얹어 경우를 나누게 하면 I-MI d2 · ★3."
```

```yaml
- id: GN-CM1-174-369
  page: 174
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    x^3+3x-2=0 의 세 근이 α, β, γ 일 때 α^2, β^2, γ^2 을 세 근으로 하고
    x^3 의 계수가 1 인 삼차방정식 구하기.
  category: "새 근의 기본대칭식을 원 근의 대칭식으로 변환 → x^3-(합)x^2+(곱의 합)x-(곱)=0"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "Σα^2=(Σα)^2-2Σαβ, Σα^2β^2=(Σαβ)^2-2αβγ·Σα 로 새 근의 세 기본대칭식을 원 근의 대칭식으로 갈아 끼우기"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "세 근을 변형한 새 삼차방정식 만들기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    원 방정식에 x^2 항이 없으므로 Σα=0 이고, 이것이 Σα^2β^2 의 마지막 항을 지워 계산이 짧아진다.
    세 근을 직접 구하려 들면 막히고, 새 세 근의 합·곱의 합·곱을 원 근의 대칭식으로 바꾸는 곱셈 공식 변환이 골조다(EQV d2).
    마지막에 x^3-(합)x^2+(곱의 합)x-(곱)=0 으로 조립할 때 부호를 번갈아 붙이는 것이 함정(T-부호).
    [분류 이슈] STEP 1 이지만 변환 단계가 셋이고 M_total 7 이라 ★3 에 가깝다 — 라벨은 벤더 신호대로 ★2 로 두고 기록만 한다.
  tier: star_2
  mechanism_primary: "근과 계수로 Σα, Σαβ, αβγ → 곱셈 공식으로 Σα^2, Σα^2β^2, (αβγ)^2 → 새 방정식 조립"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$x^3+6x^2+9x-4=0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/174-369.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "원 방정식의 계수 3·(-2)를 바꿀 수 있음. 제약: x^2 항이 없어야(Σα=0) Σα^2β^2 이 (Σαβ)^2 만으로 정리돼 답이 정수 계수로 떨어진다. x^2 항을 살리면 한 항이 더 붙는다."
    creative: "(1) 1/α, 1/β, 1/γ 를 근으로 하는 방정식(계수를 뒤집는 골조 · ★2) (2) α+β, β+γ, γ+α 를 근으로 하면 Σα=0 일 때 -γ, -α, -β 가 되는 대칭 착안이 생겨 I-SYM d2 · ★3 (3) α^3, β^3, γ^3 으로 올리면 원 방정식으로 차수를 내리는 단계가 붙어 ★3."
```

```yaml
- id: GN-CM1-174-370
  page: 174
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    f(x)=x^3+ax^2+bx+c 의 세 근이 α, β, γ 이고 2α, 2β, 2γ 를 세 근으로 하는
    x^3 의 계수가 1 인 삼차방정식이 x^3+6x^2-4x-16=0 일 때 abc 의 값.
  category: "2배 근 방정식의 계수 → 원 근의 대칭식 역산 → a, b, c"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "결과 쪽 방정식의 계수에서 2Σα=-6, 4Σαβ=-4, 8αβγ=16 을 읽어 원 방정식의 계수를 거꾸로 복원"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "세 근을 k 배 한 방정식에서 원 계수 역산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    앞 문항(174-369)의 방향을 뒤집은 문항이다. 주어진 것은 변형된 방정식이고 구하는 것은 원 계수라 역추적이 골조다(BW d2).
    2 배 근이므로 차수마다 2, 4, 8 이 붙는다 — 이 배수를 어느 항에 곱할지 헷갈리는 것이 함정(T-단위).
    Σα=-3, Σαβ=-1, αβγ=2 에서 a=3, b=-1, c=-2 로 부호를 바꿔 붙이면 끝난다.
    [분류 이슈] 변환 방향이 하나 더 꺾여 ★3 후보이나 계산은 세 줄이라 STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "x^3+6x^2-4x-16=0 의 근과 계수 → 2 배수를 벗겨 Σα, Σαβ, αβγ → a=-Σα, b=Σαβ, c=-αβγ → abc"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/174-370.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "배수 2 와 변형 방정식의 계수 6·(-4)·(-16)을 바꿀 수 있음. 제약: 배수 k 에 대해 계수가 각각 k, k^2, k^3 으로 나누어떨어져야 a, b, c 가 정수다. 변형 방정식을 먼저 정하고 나눠 떨어지게 계수를 고르는 편이 안전하다."
    creative: "(1) 근을 k 배 대신 1 만큼 평행이동(α+1 등)하면 f(x-1) 꼴이 되어 I-RT d2 · ★3 (2) 원 방정식을 주고 2 배 근 방정식을 만들게 하면 순방향이라 ★2 로 내려간다 (3) 배수 k 자체를 미지수로 두고 조건을 만족하는 k 를 찾게 하면 ★3~4."
```

```yaml
- id: GN-CM1-174-371
  page: 174
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    삼차방정식 x^3-(a+1)x^2+4x-a=0 의 한 근이 2/(1-i) 일 때 실수 a 의 값.
  category: "2/(1-i)=1+i 정리 → 실계수이므로 1-i 도 근 → 근과 계수로 a"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "계수가 실수이므로 허근 1+i 의 켤레 1-i 도 근이라는 켤레쌍 대칭을 써서 나머지 한 근을 문자로 두고 근과 계수의 관계로 넘어가기"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "실계수 방정식의 한 허근이 주어질 때 계수 결정(켤레근 정리)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    먼저 분모를 실수화해 2/(1-i)=1+i 로 정리하는 것이 1단계다(여기서 켤레 곱을 쓰는 것은 표준 절차).
    그 다음이 갈린다 — 켤레근 1-i 도 근이라 보고 세 근의 합·곱으로 가거나(SYM d2), x=1+i 를 그대로 대입해 실수부분·허수부분을 각각 0 으로 두거나(복소수의 상등). 어느 길이든 a 는 하나로 결정된다.
    STEP 1 ★2 출발 · 통찰 1 d2 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "2/(1-i)=1+i → 켤레근 1-i 도 근 → 나머지 근을 r 로 두고 합·곱 두 식 → a"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/174-371.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주어진 근을 2/(1-i) 대신 4/(1+i), (1+i)/(1-i) 등으로, x 항 계수 4 와 상수 -a 의 자리를 바꿀 수 있음. 제약: 정리된 근이 p+qi (q≠0) 여야 켤레근 정리가 작동하고, 미지수 a 가 두 식에서 같은 값으로 나와야 모순이 없다."
    creative: "(1) 미지수를 둘(a, b)로 늘려 연립하게 하면 ★3 (2) 나머지 한 근까지 구하라고 하면 검증 단계가 붙어 ★3 (3) 「실수 a 가 존재하도록」으로 물으면 역방향이 되어 I-BW d2 · ★3."
```

```yaml
- id: GN-CM1-174-372
  page: 174
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    x^3=1 의 한 허근 ω 에 대하여 ω^125/(ω^124+1) + ω^124/(ω^125+1) 의 값.
  category: "지수 축약(ω^125=ω^2 · ω^124=ω) → ω+1=-ω^2 · ω^2+1=-ω 로 약분"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "x^3=1 의 허근 ω 의 거듭제곱 축약·분모 약분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    125=3·41+2, 124=3·41+1 이므로 두 분수는 ω^2/(ω+1) 과 ω/(ω^2+1) 이 된다.
    ω^2+ω+1=0 에서 ω+1=-ω^2, ω^2+1=-ω 로 바꾸면 각 항이 그대로 -1 이다 — 분모를 ω 의 거듭제곱으로 바꾸는 이 치환은 이 단원 본문이 주는 표준 절차라 통찰로 세지 않았다.
    STEP 1 ★2 출발 · 통찰 0 이지만 M_total 6 이라 −1 조건(M_total ≤ 5)에 걸리지 않아 ★2.
  tier: star_2
  mechanism_primary: "지수를 3 으로 나눈 나머지로 축약 → ω+1=-ω^2, ω^2+1=-ω 대입 → 두 항 모두 -1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/174-372.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 125·124 를 바꿀 수 있음. 제약: 두 지수를 3 으로 나눈 나머지가 1 과 2 로 갈려야 분모가 ω+1 과 ω^2+1 로 나뉘어 두 항이 대칭으로 약분된다. 나머지가 0 이면 분모가 2 가 되어 답이 분수로 바뀐다."
    creative: "(1) 두 항 중 하나만 남기면 ★1~2 (2) 지수를 3n+1, 3n+2 처럼 문자로 주면 Mₐ 가 올라 ★3 (3) 분모가 2 가 되는 경우(지수가 3 의 배수)를 섞어 n 에 따라 경우를 나누게 하면 I-MI d2 · ★3."
```

```yaml
- id: GN-CM1-174-373
  page: 174
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    x^2-x+1=0 의 한 허근 ω 에 대하여 (-1-ω^1000)(1-ω^1001)(1+ω^1002) 의 값.
  category: "x^2-x+1=0 → ω^3=-1 · ω^6=1 → 지수 6 주기 축약 → 세 인수 정리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "x^2-x+1=0 의 양변에 x+1 을 곱해 ω^3=-1(따라서 ω^6=1)을 끌어내고 네 자리 지수를 6 주기로 축약"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "x^2-x+1=0 의 허근(ω^6=1) 의 거듭제곱 성질"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    이차식만 주어져 있어 ω^3=-1 을 스스로 만들어야 지수를 줄일 수 있다(EQV d2). 주기가 3 이 아니라 6 이라는 점이 핵심 함정(T-표기).
    1000, 1001, 1002 를 6 으로 나눈 나머지는 4, 5, 0 이므로 각각 -ω, -ω^2, 1 이 되고, 남은 식은 ω^2=ω-1 을 한 번 더 써서 정리된다.
    STEP 1 ★2 출발 · 통찰 1 d2 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "x^2-x+1=0 → ω^3=-1, ω^6=1 → 지수를 6 으로 나눈 나머지로 축약 → ω^2=ω-1 대입"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/174-373.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 지수 1000·1001·1002 와 각 인수의 부호를 바꿀 수 있음. 제약: 세 지수가 6 으로 나눈 나머지에서 서로 다른 칸에 떨어져야 인수가 같은 꼴로 겹치지 않고, 어느 인수도 0 이 되지 않아야 답이 살아난다."
    creative: "(1) x^2+x+1=0 으로 바꾸면 주기가 3 으로 줄어 ★2 아래로 (2) 세 인수의 곱 대신 합을 묻기(★2) (3) 지수를 6n+k 로 문자화해 k 에 따라 값을 표로 정리하게 하면 I-PD d2 · ★3."
```

### 연습문제 STEP 2

```yaml
- id: GN-CM1-175-374
  page: 175
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    삼차방정식 f(x)=0 의 세 근 α, β, γ 가 αβ+βγ+γα=3, α+β+γ+αβγ=1 을 만족시킬 때
    삼차방정식 f(x+1)=0 의 세 근의 곱.
  category: "f(x+1)=0 의 근은 α-1 → 곱을 전개 → (α+β+γ)+αβγ 를 통째로 대입"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f(x+1)=0 의 해는 f(x)=0 의 해에서 1 을 뺀 값이라는 평행이동 관계로 옮겨 새 세 근을 α-1, β-1, γ-1 로 읽기"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "(α-1)(β-1)(γ-1)=αβγ-(αβ+βγ+γα)+(α+β+γ)-1 로 전개하면 조건이 준 α+β+γ+αβγ 가 통째로 들어가므로 두 대칭식을 따로 구하지 않음"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "f(x+a)=0 의 근과 계수의 관계"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f 의 계수를 하나도 모르는 상태에서 출발하므로(Mₐ 3) 근을 구하려는 길은 막혀 있다.
    전개식이 αβγ+(α+β+γ) - (αβ+βγ+γα) - 1 꼴이고 조건이 그 두 덩어리를 각각 1 과 3 으로 주므로, 두 대칭식을 분리하려 하지 않고 합째로 넣는 것이 이 문항의 값이다.
    [분류 이슈] 통찰 2개라 +1 후보이나 계산이 한 줄이고 M_total 7 이라 STEP 2 출발점 ★3 을 유지했다(★3/★4).
  tier: star_3
  mechanism_primary: "f(x+1)=0 의 근 = α-1 → 곱을 전개 → αβγ+(α+β+γ)=1, αβ+βγ+γα=3 대입 → 1-3-1"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/175-374.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "조건값 3 과 1, 평행이동 폭 1 을 바꿀 수 있음. 제약: 평행이동 폭이 1 이어야 전개식의 계수가 모두 ±1 이 되어 두 조건이 합째로 들어간다. 폭을 k 로 바꾸면 αβ+βγ+γα 와 α+β+γ 가 각각 k, k^2 배가 되므로 두 대칭식을 분리해서 줘야 한다."
    creative: "(1) 세 근의 합을 묻기(조건 통합이 안 되고 값이 부족해져 조건을 하나 더 줘야 함 · ★3) (2) f(2x)=0 의 근의 곱으로 바꾸면 배수 골조가 되어 ★3 (3) 조건을 α+β+γ 와 αβγ 로 분리해 주면 통합 착안이 사라져 ★2."
```

```yaml
- id: GN-CM1-175-375
  page: 175
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    x^3 의 계수가 1 인 삼차식 f(x) 가 f(1)=f(3)=f(5)=-2 를 만족시킬 때
    방정식 f(x)=0 의 모든 근의 곱.
  category: "f(x)+2 를 (x-1)(x-3)(x-5) 로 복원 → 상수항 → 근의 곱"
  M: {s: 2, k: 2, a: 3, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 3
      effective_depth: 3
      signal_ref: []
      description: "「세 곳에서 함숫값이 같다」는 값 조건을 f(x)+2=0 의 세 근이 1, 3, 5 라는 인수분해 표현으로 옮겨 삼차식을 통째로 복원"
  insight_count: 1
  depth_score: 3.00
  type_id: null
  type_hint: "f(x)-k 의 인수분해로 삼차식 복원"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    미정계수 세 개를 잡고 연립하는 정공법은 식 세 개를 풀어야 하지만, f(x)+2 가 최고차항 계수 1 이고 1, 3, 5 를 근으로 가진다는 것을 보면 f(x)=(x-1)(x-3)(x-5)-2 로 한 줄에 복원된다(RT d3).
    복원한 뒤에는 근의 곱 = -(상수항)이고 상수항은 (-1)(-3)(-5)-2 다. -2 를 더하는 것을 잊거나 부호를 놓치는 것이 함정(T-부호).
    STEP 2 ★3 출발 · depth 3 통찰 → +1 해 ★4(저노출 유형 RT 포함).
  tier: star_4
  mechanism_primary: "f(x)+2=(x-1)(x-3)(x-5) → f(x)=(x-1)(x-3)(x-5)-2 → 근의 곱 = -(상수항)"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$17$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/175-375.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 점 1, 3, 5 와 공통 함숫값 -2 를 바꿀 수 있음. 제약: 세 점이 서로 달라야 하고 최고차항 계수가 1 이어야 f(x)-k 가 그대로 인수분해된다. 근의 곱이 정수가 되도록 세 점의 곱과 k 를 정수로 잡는다."
    creative: "(1) 근의 합이나 f(0) 을 묻기(같은 복원 골조 · ★3~4) (2) 공통값 대신 f(1)=f(3)=f(5) 만 주고 f(0)=1 을 더해 계수를 확정하게 하면 조건 통합이 붙어 ★4 (3) 사차식으로 올려 네 점에서 같은 값을 주면 같은 골조로 ★4 유지 (4) 세 점 중 하나를 바꿔 값이 다르게 하면 복원이 깨지고 미정계수 연립으로 돌아가 ★3 으로 내려간다."
```

```yaml
- id: GN-CM1-175-376
  page: 175
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    x^3=1 의 한 허근 ω 에 대하여 1+2ω+3ω^2+4ω^3+5ω^4+6ω^5+7ω^6 = aω+b 를 만족시키는
    실수 a, b 에 대한 a+b 의 값.
  category: "ω^3=1 로 지수 축약 → 같은 거듭제곱끼리 묶기 → ω^2=-1-ω 대입해 aω+b 꼴"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "ω 의 거듭제곱 합을 aω+b 꼴로 정리"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    지수를 1, ω, ω^2 세 칸으로 내린 뒤 계수를 칸별로 더하고(1+4+7 / 2+5 / 3+6), 마지막에 ω^2=-1-ω 를 넣어 aω+b 꼴로 맞춘다. 단계는 많지만 전부 이 단원의 표준 절차라 통찰로 세지 않았다.
    ω 가 허수이므로 a, b 가 실수라는 조건에서 계수 비교가 유일하게 결정된다는 점만 챙기면 된다(T-표기).
    [분류 이슈] STEP 2 이나 통찰 0 인 계산형 — M_total 7 이라 −1 조건에는 걸리지 않아 벤더 신호대로 ★3 을 유지하고 기록만 한다(★2/★3).
  tier: star_3
  mechanism_primary: "지수를 3 으로 나눈 나머지로 축약 → 1·ω·ω^2 칸별 계수 합 → ω^2=-1-ω 대입 → a, b 비교"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/175-376.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "항의 개수(7 항)와 계수열 1, 2, 3, … 을 바꿀 수 있음. 제약: 계수를 3 칸으로 나눠 더한 결과가 정수여야 하고, 항 수를 3 의 배수로 맞추면 세 칸의 항 수가 같아져 답이 단순해진다(여기서는 7 항이라 1 칸이 하나 더 많다)."
    creative: "(1) 계수를 등비수열로 바꾸면 합 공식이 붙어 ★3 유지 (2) 항 수를 n 으로 두고 a+b 를 n 의 식으로 묻기(I-PD d2 · ★4) (3) aω+b 대신 aω^2+bω+c 로 두고 실수 조건을 빼면 표현이 유일하지 않아 조건 검토가 필요해진다(I-VF d2 · ★4)."
```

```yaml
- id: GN-CM1-175-377
  page: 175
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    x^3+x^2-x+2=0 의 한 허근 ω 에 대하여 ω/ω̄ - ω^1001 을 간단히 하면? 5지선다.
    ω̄ 는 ω 의 켤레복소수.
  category: "삼차식 인수분해로 ω^2-ω+1=0 확보 → ωω̄=1 로 ω/ω̄=ω^2 → 지수 6 주기 축약"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "x^3+x^2-x+2=(x+2)(x^2-x+1) 로 인수분해해 허근이 만족하는 식이 x^2-x+1=0(따라서 ω^3=-1, ω^6=1)임을 확보"
    - step: 2
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "켤레쌍의 곱 ωω̄=1 을 써서 ω/ω̄ 을 ω^2/(ωω̄)=ω^2 으로 바꿔 켤레를 지우기"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "삼차식 인수분해로 허근의 관계식 찾기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    x^3=1 꼴이 아니므로 먼저 인수정리로 실근 -2 를 떼어내 허근이 x^2-x+1=0 의 근임을 밝혀야 한다 — 여기를 건너뛰고 ω^2+ω+1=0 을 쓰면 답이 어긋난다(T-부호).
    켤레를 지우는 두 번째 단계(ω/ω̄=ω^2)와 1001 을 6 으로 나눈 나머지 5 에서 ω^5=-ω^2 를 얻는 축약이 붙어 두 항이 같은 ω^2 으로 모인다.
    통찰 2개(EQV d2 · SYM d2)라 +1 후보이나 두 단계 모두 이 단원의 표준 도구이고 M_total 6 이라 STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "(x+2)(x^2-x+1)=0 → ω^2-ω+1=0, ωω̄=1 → ω/ω̄=ω^2, ω^1001=-ω^2 → 2ω^2"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑤'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/175-377.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "실근을 만드는 인수 (x+2) 와 지수 1001 을 바꿀 수 있음. 제약: 남는 이차식이 x^2-x+1 또는 x^2+x+1 처럼 허근을 갖고 곱이 1 이어야 ωω̄=1 이 살아난다. 지수는 6 으로 나눈 나머지가 두 항을 같은 꼴로 모으는 값을 고른다."
    creative: "(1) ω/ω̄ + ω^n 처럼 부호를 바꿔 두 항이 상쇄되게 하기(★3) (2) 실근까지 포함해 세 근의 거듭제곱 합을 묻기(경우가 갈려 I-MI d2 · ★4) (3) 인수분해를 주고 시작하면 첫 통찰이 사라져 ★2."
```

```yaml
- id: GN-CM1-175-378
  page: 175
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 STEP 2"
  summary: |
    복소수 z 가 z+z̄=-1, zz̄=1 일 때 z̄/z^5 + z̄^2/z^4 + z̄^3/z^3 + z̄^4/z^2 + z̄^5/z 의 값은? 5지선다.
    z̄ 는 z 의 켤레복소수.
  category: "합·곱 조건 → z^2+z+1=0 · z^3=1 → z̄=1/z 로 각 항이 z^{-6}=1"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "z+z̄=-1, zz̄=1 을 근과 계수의 관계로 읽어 z 가 t^2+t+1=0 의 근, 즉 z^3=1 인 허근임을 끌어내기"
    - step: 2
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "zz̄=1 에서 z̄=1/z 이므로 k 번째 항이 z^{-k}/z^{6-k}=z^{-6} 으로 k 와 무관하게 같아지는 구조를 보고 다섯 항을 한 번에 처리"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "z+z̄ · zz̄ 조건에서 z^3=1 을 끌어내 식의 값"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    조건이 ω 라는 말 없이 합·곱으로만 주어져 있어 먼저 z 가 x^3=1 의 허근임을 밝혀야 한다(EQV d2).
    다섯 항을 하나씩 계산해도 되지만, z̄=1/z 로 바꾸면 각 항의 분자·분모 지수 합이 항상 6 이라 모든 항이 z^{-6}=1 이 된다 — 항 수만 세면 끝나는 대칭 구조가 이 기출의 핵심이다(SYM d2).
    STEP 2 ★3 출발 · 통찰 2개 · 기출 태그(+0~1) → ★4(저노출 유형 SYM 포함).
  tier: star_4
  mechanism_primary: "z+z̄=-1, zz̄=1 → z^2+z+1=0, z^3=1 → z̄=1/z → 각 항 = z^{-6} = 1 → 항 수 5"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '④'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/175-378.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "항 수 5 와 지수 배열(분자 k · 분모 6-k)을 바꿀 수 있음. 제약: 각 항의 분자·분모 지수 합이 3 의 배수로 고정돼야 모든 항이 1 로 같아진다. 합을 3 의 배수가 아닌 값으로 바꾸면 항마다 z 나 z^2 가 남아 답이 복소수가 된다."
    creative: "(1) 지수 합을 3 의 배수가 아니게 틀어 항마다 다른 값이 나오게 하면 경우 정리가 붙어 ★4 유지 (2) z+z̄=1, zz̄=1(즉 z^3=-1)로 바꾸면 주기가 6 이 되어 ★4 (3) 항 수를 n 으로 두고 합을 n 의 식으로 묻기(I-PD d2 · ★4~5) (4) z^3=1 임을 문제에서 알려주면 첫 통찰이 사라져 ★3."
```

### 연습문제 실력 UP

```yaml
- id: GN-CM1-175-379
  page: 175
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    x^3=1 의 한 허근 ω 와 자연수 n 에 대하여 f(n)=ω^{2n}/(ω^n+1) 일 때
    f(1)+f(2)+f(3)+…+f(20) 의 값.
  category: "n 을 3 으로 나눈 나머지로 f(n) 분기 → 각 경우 값 → 1~20 에서 개수 세기"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-PD
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f(n) 이 n 자체가 아니라 n 을 3 으로 나눈 나머지에만 의존해 3 주기로 같은 값이 반복된다는 것을 발견"
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "나머지 1·2 일 때는 분모가 -ω^2·-ω 로 약분돼 -1, 나머지 0 일 때는 분모가 2 가 되어 값이 달라지는 세 경우를 모두 따지고 1~20 에서 각 경우의 개수를 세기"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "ω^n 의 3 주기 분기와 합(f(1)+…+f(n))"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    한 항씩 계산하면 20 번이지만 f(n) 이 3 주기라는 것을 보면 세 값만 구하면 된다(PD d2).
    나머지 0 인 경우만 분모가 ω^n+1=2 로 약분되지 않아 값이 다른 것이 이 문항의 갈림목이고, 세 경우를 모두 따져야 답이 맞는다(MI d2).
    마지막은 1~20 에서 3 의 배수가 6 개, 나머지가 14 개라는 개수 세기다 — 끝 구간을 20 까지 끊는 지점에서 개수를 잘못 세기 쉽다(T-경계).
    실력 UP ★4 출발 · 통찰 2개 d2 · M_total 7 → ★4 유지(★5 는 통찰 3개 이상 요건 미달).
  tier: star_4
  mechanism_primary: "n mod 3 로 f(n) 세 경우 → 나머지 1·2 는 -1, 나머지 0 은 1/2 → 1~20 에서 개수(14, 6) 곱해 합"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$-11$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/175-379.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "합의 끝 항 20 과 f(n) 의 지수 2n·n 을 바꿀 수 있음. 제약: 끝 항을 3 의 배수(21·30)로 맞추면 세 경우의 개수가 딱 떨어지고, 20 처럼 어긋나게 두면 경계 함정이 살아난다. 분모는 ω^n+1 이 나머지 0 일 때 2 가 되므로 답이 분수로 떨어지지 않게 3 의 배수 개수를 짝수로."
    creative: "(1) f(n) 의 분모를 ω^n-1 로 바꾸면 나머지 0 에서 분모가 0 이 되어 정의역 검토가 강제된다(I-VF d2 · ★4~5) (2) 합이 특정 값이 되는 최소 자연수 N 을 묻기(I-BW d2 · ★4) (3) f(1)f(2)…f(20) 처럼 곱으로 바꾸면 주기 골조는 같고 계산이 거듭제곱으로 바뀐다(★4) (4) x^3=-1 의 허근으로 두면 주기가 6 으로 늘어 경우가 여섯으로 갈린다(★5 후보)."
```

## 표본 판정 요약 (17문)

- ★ 분포: ★1 0 · ★2 11 · ★3 3 · ★4 3 · ★5 0
- 통찰형 14 · 절차형 3(173-e10 · 174-372 · 175-376) · premium 0
- 통찰 유형 분포: I-EQV 7 · I-SYM 5 · I-RT 3 · I-BW 1 · I-PD 1 · I-MI 1 (총 18 라벨 / 통찰형 14문)
- depth 3 은 175-375 하나뿐이고 나머지는 d1 3 · d2 14
- 구역별 ★: 필수·발전 예제 4문 모두 ★2 · STEP 1 7문 모두 ★2 · STEP 2 ★3 3 + ★4 2 · 실력 UP ★4 1
- type_hint 상위 5: 「x^3=1(또는 x^3=-1) 의 허근 ω 의 거듭제곱·켤레 성질」 6(173-e10 · 173-364 · 174-372 · 174-373 · 175-376 · 175-377) · 「삼차방정식의 근과 계수의 관계 응용」 4(174-367 · 174-369 · 174-370 · 175-374) · 「켤레쌍(ω, ω̄)의 합·곱으로 식의 값」 3(173-365 · 173-366 · 175-378) · 「세 근 조건으로 계수 결정」 2(174-368 · 174-371) · 「인수분해 표현으로 삼차식 복원」 1(175-375)
- 그림: 0문(이 범위는 figure 전부 none)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CM1-174-369 | STEP 1(★2 출발)이나 대칭식 변환이 세 단계이고 M_total 7 · 통찰 d2 → ★3 에 가까움. 라벨은 벤더 신호대로 ★2 | ★2 / ★3 |
| GN-CM1-174-370 | 변환 방향이 한 번 더 꺾인 역산(BW d2)이라 ★3 후보이나 계산이 세 줄이라 STEP 1 출발점 유지 | ★2 / ★3 |
| GN-CM1-175-374 | 통찰 2개로 +1 후보였으나 계산이 한 줄이라 STEP 2 출발점 ★3 유지 | ★3 / ★4 |
| GN-CM1-175-376 | STEP 2 인데 통찰 0 인 계산형. −1 조건(통찰 0 이고 M_total ≤ 5)에는 걸리지 않아 ★3 유지 | ★2 / ★3 |
| GN-CM1-175-377 | 통찰 2개(EQV·SYM)로 +1 후보였으나 두 단계 모두 단원 표준 도구라 ★3 유지 | ★3 / ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위에서 압도적으로 반복된 골조는 **「ω 의 관계식 확보 → 지수를 주기로 축약 → 대입」** 이다(6문). 카탈로그에서는 관계식이 주어지는가(x^3=1 그대로)와 스스로 만들어야 하는가(x^3=-1 · x^2-x+1=0 · 삼차식 인수분해 · 합·곱 조건)를 **별개 유형으로 세우는 것이 실용적**이다 — 후자가 일관되게 한 단계 위(★2→★3~4)다.
- **주기 3 계열과 주기 6 계열**(174-373 · 175-377 · 175-378 의 x^3=-1 꼴)은 ω̄ 와 ωω̄ 의 부호만 다르고 골조가 같으므로 한 유형 아래 하위 분기로 통합해도 된다.
- **켤레쌍을 대칭식으로 처리하는 유형**(173-365 · 173-366 · 175-378)은 x^3=1 단원 밖(복소수 단원)에서도 그대로 쓰이므로 이 단원 전용으로 묶지 말고 「켤레복소수의 합·곱 활용」이라는 상위 유형으로 두고 참조하는 편이 낫다.
- **삼차방정식의 근과 계수의 관계**(174-367~174-370 · 175-374 · 175-375)는 이 단원 이름과 어긋나지만 연습문제에 5~6문이 들어온다. 카탈로그에서는 앞 단원(삼차·사차방정식)에 두고, 이 단원 슬롯에서는 참조만 하는 구성이 맞다. 그 안에서도 ① f(k) 꼴 값(인수분해 표현) ② 근을 변형한 새 방정식 ③ 변형 방정식에서 원 계수 역산 ④ f(x)-k 복원 은 골조가 서로 달라 따로 세워야 한다.
