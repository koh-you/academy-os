---
name: mechanism-데이터-GN-CM1-11
description: 개념원리 공통수학1 11 복소수의 연산(1/1 · 84~94쪽 40문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학1 · 전사본 latex-bank/gn-cm1
  section: 11 복소수의 연산
  unit_code: GN-CM1-11
  part: "1/1"
  extract_range: "84~94쪽 · 84-152~94-184"
  total_problems: 40
  unit_total: 40
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm1/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm1/items/<id>.tex
  image_source: latex-bank/gn-cm1/figures/ (이 범위에는 그림 문항 없음)
---

# 개념원리 공통수학1 · 11 복소수의 연산 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 공통수학1 84~94쪽, 단원 11 「복소수의 연산」의 40문항 전수를 다룬다. 구역은 「개념원리 익히기」 3문(84-152~84-154) · 「필수·발전 예제」 17문(필수 예제 6 + 확인체크 11) · 「특강」 2문(91-e1 · 91-166) · 「연습문제 STEP 1」 6문 · 「STEP 2」 6문 · 「실력 UP」 6문이다. 그림 문항은 없다.

★ 출발점은 구역 신호다 — 「개념원리 익히기」 ★1 · 「필수·발전 예제」(필수 예제와 그 직후 확인체크) ★2 · 「특강」 ★3 · STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4. 조정은 지시서 규칙 그대로 **통찰 0 이고 M_total ≤ 5 면 −1, 통찰 2개 이상이거나 depth 3 이면 +1** 만 적용했고, 예외를 둔 문항은 rationale 에 근거를 남겼다. ★5 는 통찰 3개 이상 + SC/VF/SYM/XU 를 요구하므로 이 범위에서는 나오지 않았다(94-184 만 형식 요건에 근접 — 분류 이슈 참고). 교육청 기출 태그(92-167 · 93-178 · 94-184)는 통찰 유무로만 판단해 +0 으로 두었다.

이 단원의 통찰은 세 축으로 반복된다. ⑴ **조건의 동치 변환**(실수·순허수·서로 같을 조건 · z²이 실수/음의 실수 · zz̄=0 ⟺ z=0), ⑵ **켤레쌍의 대칭**(α+β 와 그 켤레를 묶어 zz̄ 꼴 실수화 · 기본대칭식 환원), ⑶ **차수 낮추기**(주어진 복소수에서 이차식을 유도해 고차식을 나눔). 변형 설계에서 이 세 축이 그대로 재료가 된다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(유형 코드·depth·근거) · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 설정 변형과 ★ 변동 지점)를 채웠다. 공통수학1은 유형 카탈로그가 없으므로 `type_id`·`base_star` 는 null 이고 `type_hint` 에 유형명을 제안했으며 `effective_star` 는 잠정적으로 `star` 와 같다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-CM1-84-152
  page: 84
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ 두 복소수의 덧셈·뺄셈 네 개를 계산하기.
  category: '복소수의 덧셈·뺄셈 → 실수부·허수부끼리 묶어 계수 계산'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "복소수의 덧셈·뺄셈"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    i 를 문자처럼 보고 실수부·허수부끼리 더하면 끝난다. 뺄셈에서 괄호 앞 음수를 분배하는 부호 처리(T-부호)가 유일한 함정이다.
    통찰 없음·M_total 4 · 개념원리 익히기 구역 출발점 → ★1.
  tier: star_1
  mechanism_primary: '실수부·허수부 분리 → 계수끼리 덧셈·뺄셈(뺄셈은 부호 분배) → a+bi 꼴'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $1-i$ ⑵ $7-10i$ ⑶ $2+8i$ ⑷ $-14-i$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/84-152.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '네 소문항의 실수부·허수부 계수를 정수 범위에서 자유롭게 바꿀 수 있다. 제약: 적어도 한 문항은 뺄셈이라 부호 분배가 나오게 하고, 결과가 실수뿐 또는 순허수뿐이 되는 조합은 뒤의 실수·순허수 조건 유형과 겹치므로 피한다.'
    creative: '(1) 계산 결과를 주고 빠진 한 복소수를 되묻기(I-BW · ★2) (2) 세 복소수의 덧셈·뺄셈을 한 식으로 묶기(★1 유지) (3) 결과가 실수가 되도록 하는 미지수를 넣으면 86-156 골조가 되어 ★2.'
```

```yaml
- id: GN-CM1-84-153
  page: 84
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ 두 복소수의 곱 네 개를 계산하기(합차꼴 하나, 완전제곱 하나 포함).
  category: '복소수의 곱셈 → 다항식처럼 전개 → i²=-1 대입 후 정리'
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "복소수의 곱셈(전개 후 i²=-1 대입)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    i 를 문자로 보고 곱셈 공식으로 전개한 뒤 i²=-1 만 갈아 끼우면 된다. ⑶ 은 합차꼴이라 실수, ⑷ 는 완전제곱이라 교차항이 남는다.
    i² 를 +1 로 두는 부호 실수(T-부호)가 함정. 통찰 없음·M_total 5 · 익히기 구역 → ★1(하한).
  tier: star_1
  mechanism_primary: '곱셈 공식으로 전개 → i²=-1 대입 → 실수부·허수부 정리'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $5+i$ ⑵ $8+27i$ ⑶ $7$ ⑷ $-3+4i$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/84-153.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '네 소문항의 계수를 바꿀 수 있다. 제약: ⑶ 자리에는 켤레끼리의 곱(a+bi)(a-bi) 를 두어 답이 실수 a²+b² 가 되게 하고, ⑷ 자리에는 (a+bi)² 를 두어 교차항 2abi 가 살아 있게 한다. 무리수 계수를 쓸 때는 √3·i 표기가 √(3i) 로 읽히지 않게 둔다.'
    creative: '(1) (1+i)² = 2i 를 이용해 (1+i)^8 같은 거듭제곱으로 확장(I-PD · ★2~3) (2) 곱이 실수가 되도록 하는 계수를 되묻기(I-BW · ★2) (3) 세 복소수의 곱으로 늘리면 계산량만 늘고 ★ 는 그대로 — 질 저하이므로 권하지 않는다.'
```

```yaml
- id: GN-CM1-84-154
  page: 84
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ 복소수의 나눗셈 네 개를 a+bi 꼴로 나타내기(a, b 는 실수).
  category: '복소수의 나눗셈 → 분모의 켤레를 분자·분모에 곱해 실수화 → 실수부·허수부 분리'
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "분모의 실수화(켤레복소수 곱하기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    분모의 켤레를 위아래에 곱하면 분모가 a²+b² 인 실수가 되고, 남은 분자를 전개해 실수부·허수부로 나누면 끝난다.
    켤레를 만들 때 허수부 부호를 반대로 두는 것(T-부호)과 분모 계산에서 -b² 로 잘못 쓰는 것이 함정이다.
    통찰 없음·M_total 5 · 익히기 구역 → ★1(하한).
  tier: star_1
  mechanism_primary: '분모의 켤레를 위아래에 곱하기 → 분모 a²+b² 로 실수화 → 분자 전개 후 실수부·허수부 분리'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\dfrac{2}{13}-\dfrac{3}{13}i$ ⑵ $\dfrac{4}{41}+\dfrac{5}{41}i$ ⑶ $\dfrac{1}{5}+\dfrac{3}{5}i$ ⑷ $\dfrac{32}{17}+\dfrac{8}{17}i$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/84-154.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '분모의 a, b 와 분자를 바꿀 수 있다. 제약: 분모가 a²+b² 로 작은 정수(5·10·13·17·25)가 되게 잡아야 답이 지저분해지지 않고, 분모가 순허수(bi)인 경우를 하나 넣으면 1/i = -i 를 쓰는 별도 갈래가 생긴다.'
    creative: '(1) 답의 실수부와 허수부의 합·곱을 묻기(92-167 골조 · ★2) (2) 답이 실수 또는 순허수가 되도록 분자의 미지수를 정하게 하기(I-BW · ★2~3) (3) 1/(1+i) + 1/(1-i) 처럼 켤레 두 개의 합으로 두면 결과가 실수임을 대칭으로 읽을 수 있어 I-SYM · ★2.'
```

### 필수·발전 예제

```yaml
- id: GN-CM1-85-e3
  page: 85
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑷ 켤레·완전제곱·분수가 섞인 복소수 사칙연산 네 개를 계산하기.
  category: '복소수의 사칙연산 종합 → 켤레 치환·전개·분모 실수화 → a+bi 꼴 정리'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "복소수의 사칙연산(켤레·거듭제곱·분모 실수화 혼합)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    앞의 세 익히기 문항(덧셈·곱셈·나눗셈)을 한 문항 안에서 섞은 종합 연습이다. 켤레 기호를 먼저 풀고, 전개하고, 분수는 분모를 실수화한 뒤 마지막에 실수부·허수부를 합친다.
    ⑷ 처럼 곱셈 결과와 분수 결과를 다시 빼는 단계가 있어 M_total 6. 새 도구는 없고 순서 관리가 부담이라 통찰 0.
    필수 예제 구역 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: '켤레 기호 풀기 → 전개·분모 실수화로 각 항을 a+bi 로 → 마지막에 실수부·허수부끼리 결합'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $3-6i$ ⑵ $0$ ⑶ $\dfrac{11}{10}-\dfrac{3}{10}i$ ⑷ $-1-33i$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/85-e3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '각 소문항의 계수를 바꿀 수 있다. 제약: ⑵ 자리는 (a+bi)²+(a-bi)² 꼴을 유지해 허수부가 상쇄되도록(답이 실수) 두고, 분수 항의 분모는 켤레 곱이 작은 정수가 되게 잡는다. 네 소문항 중 켤레 기호가 들어간 것이 최소 하나는 남아야 이 유형의 색이 유지된다.'
    creative: '(1) 네 소문항 중 결과가 실수인 것을 고르게 하기(I-EQV · ★2) (2) 계산 결과가 0 이 되도록 하는 계수를 되묻기(I-BW · ★3) (3) 켤레 기호를 식 전체에 씌워 conj(z₁z₂)=conj(z₁)conj(z₂) 를 쓰게 하면 특강 골조로 이동 ★3.'
```

```yaml
- id: GN-CM1-85-155
  page: 85
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑷ 켤레·완전제곱·분수가 섞인 복소수 사칙연산 네 개를 계산하기(85-e3 확인체크).
  category: '복소수의 사칙연산 종합 → 켤레 치환·전개·분모 실수화 → a+bi 꼴 정리'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "복소수의 사칙연산(켤레·거듭제곱·분모 실수화 혼합)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    85-e3 과 같은 골조이고 소문항 구성도 같다. ⑶ 에서 (1-i)²=-2i 를 먼저 쓰면 분수 계산이 한 번으로 줄어드는 정도가 차이다.
    통찰 0·M_total 6. 필수 예제 직후 확인체크이므로 예제와 같은 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: '켤레 기호 풀기 → (1±i)² 같은 짧은 거듭제곱 먼저 정리 → 분모 실수화 → 실수부·허수부 결합'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $13+7i$ ⑵ $4-6i$ ⑶ $\dfrac{5}{2}+\dfrac{5}{2}i$ ⑷ $-7+5i$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/85-155.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '85-e3 과 같은 제약을 따른다. 추가로 ⑶ 자리는 분자에 (1-i)² 처럼 미리 정리되는 덩어리를 남겨 두어 계산 순서 선택의 여지를 만든다.'
    creative: '(1) 네 소문항의 답의 합을 묻기(★2 유지, 검산 부담만 증가 — 질 저하 주의) (2) 한 소문항의 답을 비워 두고 조건을 맞추는 계수를 찾게 하기(I-BW · ★3) (3) i 의 거듭제곱 주기를 섞으면 I-PD 가 붙어 ★3.'
```

```yaml
- id: GN-CM1-86-e4
  page: 86
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ 복소수 (1+i)x²-2x-3-i 가 실수일 때 실수 x 의 값 모두, ⑵ (1+i)x²+(i-5)x+6-6i 가 순허수일 때 실수 x 의 값.
  category: '실수·순허수가 될 조건 → 실수부·허수부 분리 → 허수부=0 또는 (실수부=0 이고 허수부≠0)'
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "순허수 조건에서 실수부=0 의 두 근 중 허수부까지 0 이 되는 근을 사후에 기각해야 함"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "복소수가 실수·순허수가 되는 조건(실수부·허수부 분리)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x 가 실수라는 전제 아래 식을 (실수부)+(허수부)i 로 정리하는 것이 공통 1단계다. 실수 조건은 허수부=0 하나지만, 순허수 조건은 실수부=0 과 허수부≠0 두 개라 근 하나가 기각된다.
    이 기각 단계는 검산이 아니라 없으면 틀린 답에 도달하므로 I-VF d1 로 센다. 필수 예제 출발점 ★2 이고 통찰 1개라 +1 조건(2개 이상) 미충족 → ★2.
    [분류 이슈] 정의에 명시된 조건을 그대로 적용하는 것이라 절차형으로 볼 여지도 있다.
  tier: star_2
  mechanism_primary: '실수 전제로 (실수부)+(허수부)i 정리 → 실수는 허수부=0 · 순허수는 실수부=0 이고 허수부≠0 → 이차방정식 풀고 기각'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $x=-1$ 또는 $x=1$ ⑵ $x=3$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/86-e4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 식의 계수를 바꿀 수 있다. 제약: ⑴ 의 허수부는 실근을 갖는 이차식(판별식 ≥ 0)이어야 하고, ⑵ 는 실수부의 두 근 중 정확히 하나만 허수부를 0 으로 만들도록 실수부·허수부 이차식이 근 하나를 공유하게 잡는다(공유근이 없으면 I-VF 가 사라져 ★1~2 로 내려간다).'
    creative: '(1) 순허수 조건을 만족시키는 x 의 개수를 묻기(★2 유지) (2) 실수부·허수부 모두 0 이 되는 x 를 따로 묻어 z=0 경계를 드러내기(T-경계 강화 · ★3) (3) 조건을 z² 이 실수/음의 실수로 바꾸면 86-158 · 94-179 골조가 되어 ★3~4.'
```

```yaml
- id: GN-CM1-86-156
  page: 86
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    복소수 (1+i)x²+3xi-4+2i 가 실수가 되도록 하는 모든 실수 x 의 값의 합.
  category: '실수가 될 조건 → 허수부=0 인 이차방정식 → 근의 합'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "복소수가 실수가 되는 조건과 근의 합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    허수부 x²+3x+2 를 0 으로 놓는 것이 전부이고, 값의 합만 물었으므로 근과 계수의 관계로 한 줄에 끝난다. 실수부는 아무 제약도 주지 않는다는 점(T-범위)이 유일한 확인 지점이다.
    통찰 0·M_total 6 이라 −1 조건(M_total ≤ 5)에는 걸리지 않는다. 필수 예제 구역 확인체크 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: '허수부만 추출 → 허수부=0 인 이차방정식 → 근과 계수의 관계로 합'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/86-156.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '허수부 이차식의 계수를 바꿀 수 있다. 제약: 판별식 > 0 이라야 실근이 둘 생겨 합을 묻는 것이 의미가 있고, 실수부가 허수부와 같은 근을 갖지 않게 두어야 실수 조건만으로 답이 정해진다.'
    creative: '(1) 값의 합 대신 곱을 묻기(★2 유지) (2) 순허수 조건으로 바꾸면 실수부=0 · 허수부≠0 이 붙어 I-VF · ★2~3 (3) x 를 계수 자리에 넣어 z² 이 실수가 되는 조건으로 바꾸면 94-179 골조 ★4.'
```

```yaml
- id: GN-CM1-86-157
  page: 86
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    실수 k 에 대하여 z=2(k+1)-k(1-i)² 이 순허수일 때 z 구하기.
  category: '순허수가 될 조건 → (1-i)²=-2i 정리 → 실수부=0 이고 허수부≠0 → z 값'
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "순허수가 되는 조건에서 복소수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (1-i)²=-2i 를 먼저 정리해야 z 가 (2k+2)+2ki 꼴로 보인다. 그 뒤는 실수부=0 으로 k 를 정하고 허수부≠0 을 확인한 뒤 z 를 쓰는 표준 순서다.
    확인 단계에서 기각되는 근이 없어 I-VF 판별(일부 기각)을 충족하지 않으므로 통찰 0. 함정은 (1-i)² 의 부호와 허수부≠0 확인(T-부호·T-범위) 둘.
    확인체크 출발점 ★2 유지 — k 를 구하고 끝내지 않고 z 를 되물은 점만 한 단계 더 있다.
  tier: star_2
  mechanism_primary: '(1-i)²=-2i 정리 → z=(2k+2)+2ki → 실수부=0 으로 k 결정 → 허수부≠0 확인 후 z 계산'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-2i$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/86-157.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '2(k+1) 의 계수와 (1-i)² 자리의 괄호식을 바꿀 수 있다. 제약: 전개 후 실수부가 k 에 대한 일차식이라야 k 가 하나로 정해지고, 그 k 에서 허수부가 0 이 되지 않아야 한다(0 이 되면 답이 없는 문항이 된다).'
    creative: '(1) 실수가 될 조건으로 바꿔 k 를 묻기(★2 유지) (2) (1-i)² 대신 (1+i)⁴ 처럼 거듭제곱 주기를 쓰게 하면 I-PD · ★3 (3) z 가 순허수일 때 z² 또는 1/z 를 되묻으면 한 단계 늘어 ★3.'
```

```yaml
- id: GN-CM1-86-158
  page: 86
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    z=(1+i)a²-(1+3i)a+2(i-1) 에 대하여 z² 이 음의 실수가 되도록 하는 실수 a 의 값.
  category: 'z² 이 음의 실수 ⟺ z 가 순허수 → 실수부=0 이고 허수부≠0 → 후보 기각'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "z² 이 음의 실수라는 조건을 z 가 순허수라는 동치 조건으로 옮겨야 실수부·허수부 도구를 쓸 수 있음"
    - step: 3
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "실수부=0 의 두 근 중 허수부까지 0 이 되는 a=2 를 사후 기각"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "z² 이 음의 실수가 될 조건(순허수 조건으로 동치 변환)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    핵심은 첫 줄이다 — z² 이 음의 실수라는 말을 z 가 순허수로 바꾸지 못하면 z² 을 직접 전개하는 무거운 길로 빠진다. 옮기고 나면 86-e4 ⑵ 와 같은 골조다.
    실수부 a²-a-2=0 의 두 근 중 허수부를 0 으로 만드는 쪽이 기각되어 I-VF 가 한 번 더 붙는다. 통찰 2개(EQV d2 · VF d1) → 확인체크 출발점 ★2 에서 +1 → ★3.
    [분류 이슈] 구역 신호(확인체크 ★2)와 판정 ★3 이 어긋난다 — 같은 골조가 실력 UP 의 94-179 로 다시 나온다.
  tier: star_3
  mechanism_primary: 'z² 이 음의 실수 ⟺ z 순허수 → z 를 (실수부)+(허수부)i 로 정리 → 실수부=0 의 근 중 허수부=0 인 것 기각'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/86-158.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'a² · a · 상수 자리의 계수를 바꿀 수 있다. 제약: 실수부와 허수부가 만드는 두 이차식이 근을 정확히 하나 공유해야 기각이 한 번 일어나 답이 하나로 남는다. 공유근이 없으면 답이 둘이 되어 I-VF 가 I-MI 로 바뀌고 ★ 가 내려간다.'
    creative: '(1) z² 이 양의 실수로 바꾸면 z 가 0 이 아닌 실수가 되어 조건이 뒤집힌다(★3 유지) (2) z² 이 실수(부호 무관)로 바꾸면 두 경우가 모두 살아 I-MI 가 되고 값의 곱을 묻는 94-179 가 된다 (3) z² 대신 1/z 가 순허수인 조건으로 바꾸면 분모 실수화가 앞에 붙어 ★4.'
```

```yaml
- id: GN-CM1-87-e5
  page: 87
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ (1+i)x+(1-i)y-2-4i=0, ⑵ x/(1+i)+y/(1-i)=1-3i 를 만족시키는 실수 x, y 구하기.
  category: '복소수가 서로 같을 조건 → x, y 실수 전제로 실수부·허수부 각각 비교 → 연립일차방정식'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "복소수가 서로 같을 조건(실수부·허수부 계수 비교)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x, y 가 실수라는 전제가 있어야 계수 비교가 성립한다는 것이 이 유형의 전부다. ⑴ 은 바로 묶어서 비교하고, ⑵ 는 분모를 먼저 실수화해 좌변을 a+bi 꼴로 만든 뒤 비교한다.
    새 도구 없이 앞 단원의 연립일차방정식으로 이어지므로 통찰 0. 실수 전제를 빠뜨리면 비교가 무너지는 점(T-범위)이 함정.
    필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: '좌변을 (실수부)+(허수부)i 로 정리(분수는 실수화 먼저) → 양변 실수부·허수부 비교 → x, y 연립'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $x=3$, $y=-1$ ⑵ $x=4$, $y=-2$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/87-e5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '우변 상수와 x, y 에 곱해진 복소수를 바꿀 수 있다. 제약: 비교로 얻는 두 일차방정식의 계수행렬이 정칙이어야(두 복소수 계수가 실수배 관계가 아니어야) x, y 가 하나로 정해진다. ⑵ 는 분모를 켤레쌍(1±i, 2±i)으로 두어 실수화가 한 번에 끝나게 한다.'
    creative: '(1) 해가 존재하지 않도록 계수를 잡아 조건을 되묻기(I-BW · ★3) (2) 좌변에 켤레 기호를 씌워 87-159 ⑶ 골조로 만들기(★2~3) (3) x, y 에 정수·자연수 제한을 붙이면 사후 기각이 생겨 I-VF · ★3.'
```

```yaml
- id: GN-CM1-87-159
  page: 87
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑶ 곱·분수·켤레가 섞인 등식을 만족시키는 실수 x, y 구하기.
  category: '복소수가 서로 같을 조건 → 전개·실수화·켤레 풀기로 a+bi 꼴 정리 → 계수 비교'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "복소수가 서로 같을 조건(전개·실수화·켤레 처리 후 계수 비교)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    87-e5 와 같은 골조에 전처리가 하나씩 더 붙은 세 소문항이다 — ⑴ 은 전개, ⑵ 는 양변 실수화, ⑶ 은 좌변 켤레 벗기기.
    ⑶ 에서 켤레를 벗기는 방법이 두 가지(양변에 켤레를 취하거나 좌변을 전개한 뒤 부호를 뒤집기)지만 어느 쪽이든 비슷한 길이라 전략 분기(I-SC)로는 세지 않았다. 통찰 0·M_total 7.
    확인체크 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: '전개·분모 실수화·켤레 벗기기로 양변을 a+bi 꼴로 → 실수부·허수부 비교 → 연립'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $x=7$, $y=11$ ⑵ $x=21$, $y=15$ ⑶ $x=\dfrac{6}{7}$, $y=-\dfrac{5}{7}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/87-159.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '세 소문항의 계수를 바꿀 수 있다. 제약: ⑵ 처럼 분모가 켤레쌍이면 통분 대신 각각 실수화하는 편이 빠르도록 분모의 켤레 곱을 작은 정수로 잡고, ⑶ 은 계수 비교 결과가 분수해가 되어도 무방하나 분모는 한 자리 소수로 둔다.'
    creative: '(1) 켤레 기호를 양변에 씌워 conj(z)=conj(w) ⟺ z=w 를 쓰게 하기(I-EQV · ★3) (2) x, y 대신 복소수 z 를 미지수로 두면 89-e8 골조 ★2~3 (3) 세 식을 동시에 만족시키는 x, y 가 없음을 보이게 하면 I-VF · ★4.'
```

```yaml
- id: GN-CM1-88-e6
  page: 88
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ z=(1+3i)/(1-i) 일 때 z³+2z²+6z+1, ⑵ x=1+3i, y=1-3i 일 때 x³-x²y-xy²+y³ 의 값.
  category: '복소수가 주어질 때 식의 값 → 이차식 유도 후 차수 낮추기 · 켤레쌍은 합·곱으로 환원'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "z 를 직접 거듭제곱하지 않고 z+1=2i 꼴로 옮겨 z²+2z+5=0 을 만든 뒤 고차식을 나눠 차수를 낮춤"
    - step: 2
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x, y 가 켤레쌍이므로 식을 (x-y)²(x+y) 로 인수분해해 합(실수)·차(순허수)만으로 계산"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "복소수가 주어질 때 식의 값(이차식 유도 후 차수 낮추기 · 켤레쌍 대칭식)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 소문항이 이 단원의 대표 도구 두 개를 하나씩 담고 있다. ⑴ 은 z 를 실수화한 뒤 곧바로 세제곱하지 않고 z 를 근으로 갖는 이차식을 만들어 나누는 길, ⑵ 는 켤레쌍의 합과 차만으로 정리되도록 인수분해하는 길이다.
    둘 다 착안이 없으면 계산량이 몇 배가 되므로 통찰로 센다(EQV d2 · SYM d1). 통찰 2개 → 필수 예제 출발점 ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: '주어진 z 를 이항·제곱해 이차식 유도 → 고차식을 그 이차식으로 나눠 나머지만 계산 / 켤레쌍은 (x-y)²(x+y) 로 묶어 합·곱 대입'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ $2i$ ⑵ $-72$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/88-e6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'z 의 값과 고차식의 계수를 바꿀 수 있다. 제약: z 를 이항했을 때 (z-p)²=-q 꼴이 되어 계수가 정수인 이차식이 나와야 하고(분수 z 는 실수화 후 실수부가 유리수여야 한다), 고차식은 그 이차식으로 나눈 나머지가 간단해지도록 계수를 맞춘다. ⑵ 는 x, y 를 반드시 켤레쌍으로 유지한다.'
    creative: '(1) 이차식을 직접 제시하고(z²+2z+5=0) 고차식 값을 묻기 — 착안이 사라져 ★2 (2) 고차식의 차수를 4~5 로 올리면 나눗셈이 길어질 뿐 ★ 는 그대로(계산 마찰 · 질 저하 주의) (3) x³-x²y-xy²+y³ 의 값이 실수가 되는 이유를 묻게 하면 I-SYM d2 로 올라 ★4.'
```

```yaml
- id: GN-CM1-88-160
  page: 88
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    z=(3+√7 i)/2 일 때 z³-2z²+z-2 의 값.
  category: '무리 허수가 주어진 식의 값 → 2z-3=√7 i 이항·제곱 → 이차식으로 차수 낮추기'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "분모·무리수 때문에 직접 거듭제곱이 막히므로 2z-3=√7 i 로 이항·제곱해 z²-3z+4=0 을 유도"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "복소수가 주어질 때 식의 값(이차식 유도 후 차수 낮추기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    √7 과 분모 2 때문에 직접 세제곱하는 길이 사실상 막혀 있어 이차식 유도가 유일한 길이다. 유도한 뒤에는 삼차식을 나눠 나머지만 계산하면 된다.
    통찰 1개(EQV d2)라 +1 조건(2개 이상 또는 depth 3)을 충족하지 못해 확인체크 출발점 ★2 유지. 체감 난도는 ★3 에 가깝다는 점만 남긴다.
  tier: star_2
  mechanism_primary: '2z-3=√7 i 로 이항 → 제곱해 z²-3z+4=0 → 삼차식을 나눠 나머지 계산'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/88-160.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '분자의 실수부·무리 허수부와 분모, 그리고 삼차식의 계수를 바꿀 수 있다. 제약: 이항·제곱했을 때 정수 계수 이차식이 나오도록 실수부는 분모의 배수로, 허수부의 제곱은 정수로 둔다(√7 → √3·√5·√11). 나머지가 상수가 되게 계수를 맞추면 답이 깔끔하다.'
    creative: '(1) 삼차식 대신 1/z + z 처럼 분수식을 묻기(분모 처리 한 단계 추가 · ★3) (2) z 를 근으로 갖는 실계수 이차방정식을 되묻기(I-BW · ★2) (3) 사차 이상으로 올리고 z³=k 같은 주기가 생기게 하면 I-PD 가 붙어 ★3~4(93-175 골조).'
```

```yaml
- id: GN-CM1-88-161
  page: 88
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    z=1-i 일 때 z⁴-2z³+3z²-2z+1 의 값.
  category: '복소수가 주어진 사차식의 값 → z-1=-i 로 이차식 유도 또는 직접 거듭제곱 → 차수 낮추기'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "z-1=-i 로 이항·제곱해 z²-2z+2=0 을 만들면 사차식이 한 번의 나눗셈으로 정리됨"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "복소수가 주어질 때 식의 값(이차식 유도 후 차수 낮추기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    88-160 과 같은 골조지만 z=1-i 는 z²=-2i 로 거듭제곱이 쉬워 직접 대입해도 끝까지 간다. 즉 이차식 유도가 유일한 길이 아니라 단축 수단이라 통찰 depth 를 1 로 낮췄다.
    통찰 1개·M_total 7 → 확인체크 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: 'z-1=-i 이항·제곱으로 z²-2z+2=0 → 사차식을 나눠 나머지 계산(또는 z²=-2i 로 직접 대입)'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/88-161.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'z 의 실수부·허수부와 사차식의 계수를 바꿀 수 있다. 제약: z=a±bi 에서 유도되는 이차식이 정수 계수라야 하고, 사차식이 그 이차식의 배수에 상수만 더한 꼴이면 답이 한 줄로 나온다(지금 식이 그 구조다). 계수를 무작위로 바꾸면 나머지가 일차식이 되어 마지막에 z 를 다시 대입해야 한다.'
    creative: '(1) 사차식을 (z²-2z+2) 로 나눈 몫까지 묻기(★3) (2) z=1-i 와 그 켤레를 동시에 주고 대칭식으로 묶게 하기(I-SYM · ★3) (3) 지수를 8~12 로 올려 (1-i)²=-2i 의 주기를 쓰게 하면 I-PD · ★3.'
```

```yaml
- id: GN-CM1-88-162
  page: 88
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    x=(1+√3 i)/2, y=(1-√3 i)/2 일 때 y/x + x/y 의 값.
  category: '켤레쌍의 분수 대칭식 → 통분해 (x²+y²)/(xy) → 합·곱 대입'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x, y 가 켤레쌍이라 각각을 계산하지 않고 합 x+y 와 곱 xy 라는 실수 두 개로 환원"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "켤레쌍의 대칭식 값(기본대칭식 환원)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y/x+x/y 를 통분하면 대칭식 (x²+y²)/(xy) 이고, x+y 와 xy 가 모두 실수이므로 복소수 나눗셈을 한 번도 하지 않고 끝난다.
    켤레쌍임을 읽는 것이 통찰이지만 이 단원에서 이미 반복된 도구라 depth 1. 통찰 1개 → 확인체크 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: '통분해 (x²+y²)/(xy) → x²+y²=(x+y)²-2xy → 켤레쌍의 합·곱 대입'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/88-162.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '켤레쌍의 실수부·허수부를 바꿀 수 있다. 제약: 반드시 켤레쌍을 유지해야 합·곱이 실수가 되고, 곱 xy=(a²+b²) 가 답의 분모가 되므로 작은 정수로 잡는다. 지금처럼 x+y=1, xy=1 이면 x³=−1 같은 추가 구조까지 생긴다.'
    creative: '(1) x/y − y/x 로 바꾸면 답이 순허수가 되어 부호 함정이 커진다(★3) (2) x³+y³ 이나 x⁵+y⁵ 로 올려 대칭식 전개를 쓰게 하기(★3) (3) x+y 와 xy 만 주고 x, y 를 숨기면 추상도가 올라 ★3(92-171 계열).'
```

```yaml
- id: GN-CM1-89-e7
  page: 89
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    α=-3+i, β=1-3i 일 때 켤레가 섞인 네 항의 식 αᾱ+ᾱβ+αβ̄+ββ̄ 의 값.
  category: '켤레를 포함한 대칭식 → (α+β)와 그 켤레의 곱으로 묶기 → zz̄ 는 실수'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "네 항을 (α+β)(ᾱ+β̄) 로 묶고 ᾱ+β̄=conj(α+β) 임을 써서 zz̄ 꼴 실수로 환원"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "켤레복소수를 포함한 대칭식의 값(zz̄ 꼴로 묶기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    네 항을 그대로 대입하면 복소수 곱을 네 번 해야 하지만, ᾱ(α+β)+β̄(α+β)=(α+β)(ᾱ+β̄) 로 묶고 켤레의 분배 성질을 쓰면 (α+β) 의 실수부·허수부 제곱합 한 번으로 끝난다.
    묶는 착안이 이 유형의 전부라 I-SYM d2. 통찰 1개라 +1 조건 미충족 → 필수 예제 출발점 ★2 유지.
    [분류 이슈] 묶기를 못 보면 계산량이 네 배가 되어 체감은 ★3 쪽이다.
  tier: star_2
  mechanism_primary: '네 항을 (α+β)(ᾱ+β̄) 로 인수분해 → ᾱ+β̄=conj(α+β) → (α+β) 의 실수부²+허수부²'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$8$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/89-e7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'α, β 의 실수부·허수부를 바꿀 수 있다. 제약: 답이 (α+β) 의 제곱합이므로 α+β 의 성분을 작은 정수로 맞춰 두면 답이 깔끔하다. 네 항의 부호 조합을 바꾸려면 89-163 처럼 (α−β)(ᾱ−β̄) 가 되도록 가운데 두 항을 음수로 둔다.'
    creative: '(1) α, β 를 숨기고 α+β 만 주면 추상도가 올라 92-171 골조(★2) (2) 네 항 중 하나의 부호를 바꿔 묶이지 않게 하면 착안이 사라지고 계산만 남는다(★2, 질 저하) (3) αᾱ=ββ̄ 같은 조건을 얹으면 94-182 골조로 ★4.'
```

```yaml
- id: GN-CM1-89-e8
  page: 89
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    (1+2i)z̄+3iz=-2+6i 를 만족시키는 복소수 z 구하기.
  category: '켤레가 섞인 등식 → z=a+bi 로 놓고 전개 → 실수부·허수부 계수 비교 연립'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "z=a+bi 로 놓고 계수 비교해 복소수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    z 와 z̄ 가 함께 들어 있어 z 를 한 덩어리로 다룰 수 없으므로 z=a+bi(a, b 실수)로 놓는 것이 정해진 출발이다. 전개 후 실수부·허수부를 비교하면 a, b 에 대한 연립일차방정식이 된다.
    유형이 정해 준 대로 따라가는 절차라 통찰 0. 전개할 때 i² 부호와 켤레의 허수부 부호(T-부호)가 함정.
    필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: 'z=a+bi 로 치환 → 좌변 전개해 (실수부)+(허수부)i → 우변과 계수 비교 → a, b 연립'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$z=2+4i$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/89-e8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'z̄ 와 z 에 곱해진 복소수 계수와 우변을 바꿀 수 있다. 제약: 계수 비교로 얻는 두 일차방정식이 서로 독립이어야 z 가 하나로 정해진다(두 계수의 합이 0 이 되는 조합은 해가 없거나 무수히 많아진다). 답의 a, b 는 정수로 떨어지게 우변을 역산해 잡는다.'
    creative: '(1) z 대신 z+z̄ 나 zz̄ 만 되물으면 연립을 끝까지 풀지 않아도 되어 ★2(89-165 골조) (2) 등식을 두 개 주고 연립시키면 계산량만 늘어난다(질 저하) (3) 우변을 실수로 두고 z 가 순허수가 되는 계수를 찾게 하면 I-BW · ★3.'
```

```yaml
- id: GN-CM1-89-163
  page: 89
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    α-β=4+√5 i 일 때 αᾱ-αβ̄-ᾱβ+ββ̄ 의 값(α, β 는 주어지지 않음).
  category: '켤레를 포함한 대칭식 → (α-β)(ᾱ-β̄) 로 묶기 → 차의 제곱합'
  M: {s: 1, k: 1, a: 3, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "네 항을 (α-β)(ᾱ-β̄)=(α-β)conj(α-β) 로 묶어 주어진 차 하나만으로 답을 냄"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "켤레복소수를 포함한 대칭식의 값(zz̄ 꼴로 묶기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    α, β 가 개별로 주어지지 않아 묶기 말고는 길이 없다는 점이 89-e7 보다 오히려 친절하다. 묶고 나면 4²+(√5)² 한 줄.
    예제 직후 확인체크라 착안이 이미 노출돼 depth 1. 통찰 1개·M_total 6 → 확인체크 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: '네 항을 (α-β)(ᾱ-β̄) 로 인수분해 → conj(α-β) 로 바꿔 zz̄ → 실수부²+허수부²'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$21$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/89-163.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'α-β 의 실수부·허수부를 바꿀 수 있다. 제약: 답이 실수부²+허수부² 이므로 무리수 허수부(√5)를 쓰면 제곱이 정수로 떨어진다. 가운데 두 항의 부호를 +로 바꾸면 89-e7 의 합 꼴이 되므로 부호와 주어진 조건(차/합)을 반드시 짝맞춘다.'
    creative: '(1) 답을 주고 α-β 의 허수부를 되묻기(I-BW · ★3) (2) α+β 와 α-β 를 함께 주고 αᾱ+ββ̄ 를 묻으면 두 식을 더해야 해 I-CON · ★3 (3) αᾱ=ββ̄ 조건을 얹으면 94-182 계열 ★4.'
```

```yaml
- id: GN-CM1-89-164
  page: 89
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    z+z̄=6, zz̄=25 를 만족시키는 복소수 z 를 모두 구하기.
  category: 'z+z̄ 와 zz̄ 조건 → z=a+bi 치환 → 2a=6, a²+b²=25 연립'
  M: {s: 1, k: 1, a: 2, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "z+z̄ · zz̄ 조건에서 복소수 z 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    z=a+bi 로 놓으면 z+z̄=2a, zz̄=a²+b² 라는 공식 두 줄로 a, b 가 정해진다. 유형이 지정한 치환을 그대로 쓰므로 통찰 0.
    함정은 b²=16 에서 b=±4 두 값을 모두 답해야 한다는 것(T-부호)과 모두 구하라는 발문(T-경계) 둘이라 Mₜ=2.
    확인체크 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: 'z=a+bi 치환 → z+z̄=2a 로 a 결정 → zz̄=a²+b² 로 b=±값 → 두 복소수 모두 제시'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$3+4i$, $3-4i$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/89-164.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'z+z̄ 와 zz̄ 의 값을 바꿀 수 있다. 제약: (합/2)² < 곱 이라야 b² > 0 이 되어 허수해가 나오고, 피타고라스 수(3·4·5 / 5·12·13 / 8·15·17)를 쓰면 b 가 정수로 떨어진다. 합의 절반의 제곱이 곱과 같으면 실수해 하나가 되어 유형이 무너진다.'
    creative: '(1) 조건을 z-z̄ 와 zz̄ 로 바꾸면 92-172 가 된다(★2) (2) z 가 실수가 되도록 zz̄ 의 값을 되묻기(I-BW · T-경계 · ★3) (3) z+z̄, zz̄ 를 근과 계수의 관계로 읽어 z 를 근으로 갖는 실계수 이차방정식을 묻게 하면 다음 단원과 이어져 I-XU · ★3.'
```

```yaml
- id: GN-CM1-89-165
  page: 89
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    iz+(1-i)z̄=2i 가 성립할 때 z+z̄ 의 값.
  category: '켤레가 섞인 등식 → z=a+bi 치환·계수 비교 → 구하는 값은 2a'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "z=a+bi 로 놓고 계수 비교해 켤레식의 값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    89-e8 과 같은 치환·계수 비교 골조이고, 마지막에 z 자체가 아니라 z+z̄=2a 만 물으므로 b 를 구한 뒤에도 a 만 쓰면 된다.
    묻는 값이 실수부뿐임을 미리 알아채면 연립 한 줄을 아낄 수 있으나 전체 길이가 짧아 전략 분기로는 세지 않았다. 통찰 0·M_total 7.
    확인체크 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: 'z=a+bi 치환 → 좌변 전개 후 실수부·허수부 비교 → a, b 연립 → z+z̄=2a'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/89-165.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'z, z̄ 의 계수와 우변을 바꿀 수 있다. 제약: 계수 비교로 얻는 두 일차방정식이 독립이어야 하고, 우변을 순허수로 두면 실수부 방정식이 한쪽으로 단순해져 난도가 내려간다. a 가 정수가 되도록 우변을 역산해 잡는다.'
    creative: '(1) z+z̄ 대신 zz̄ 를 물으면 b 까지 필요해 한 단계 늘어난다(★2~3) (2) 계수를 문자로 두고 z 가 실수가 되는 조건을 묻기(I-BW · ★3) (3) 같은 등식에서 z 를 직접 구하게 하면 89-e8 과 완전히 겹치므로 변형 시 둘 중 하나만 쓴다.'
```

### 특강

```yaml
- id: GN-CM1-91-e1
  page: 91
  vendor_label: "특강"
  vendor_level: "-"
  vendor_tags: ["특강"]
  category_type: "특강 예제"
  summary: |
    복소수 z 에 대하여 보기 ㄱ~ㄹ(z-z̄ · iz̄ · (z+i)(z̄-i) · z/(1+i)+z̄/(1-i)) 중 항상 실수인 것을 모두 고르기.
  category: '켤레복소수의 성질 → 실수 ⟺ w=w̄ 또는 w+w̄ 꼴 → 보기별 판정'
  M: {s: 2, k: 2, a: 3, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "항상 실수라는 조건을 w=w̄(또는 서로 켤레인 두 항의 합) 로 옮겨야 z 를 a+bi 로 풀어쓰지 않고 판정 가능"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "켤레복소수의 성질 활용(항상 실수·순허수인 식 판정)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    z=a+bi 로 풀어써도 풀리지만 보기가 네 개라 매번 전개하면 길어진다. 실수 판정을 w=w̄ 로 옮기면 ㄱ 은 순허수, ㄴ 은 일반적으로 허수, ㄷ 은 zz̄+1+i(z̄-z), ㄹ 은 서로 켤레인 두 항의 합임이 한 줄씩 보인다.
    동치 변환 착안 하나가 네 보기에 공통으로 걸리므로 I-EQV d2 한 개로 센다. 특강 구역 출발점 ★3 이고 통찰 1개라 조정 없음 → ★3.
  tier: star_3
  mechanism_primary: '실수 ⟺ w=w̄ 로 동치 변환 → 각 보기의 켤레를 취해 자기 자신과 비교(또는 서로 켤레인 두 항의 합인지 확인)'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: 'ㄷ, ㄹ'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/91-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '보기의 상수 i 자리와 분모 1±i 를 다른 켤레쌍으로 바꿀 수 있다. 제약: 네 보기 중 참이 둘 정도 남도록 구성하고, 참인 보기 하나는 zz̄ 꼴, 하나는 서로 켤레인 두 항의 합으로 두어 두 판정 도구가 모두 쓰이게 한다. 분모를 켤레쌍으로 두지 않으면 ㄹ 이 실수가 아니게 되어 유형이 무너진다.'
    creative: '(1) 항상 순허수인 것을 고르게 하면 w+w̄=0 판정으로 바뀐다(★3 유지) (2) z 에 zz̄=1 같은 조건을 얹으면 보기별 계산이 갈라져 I-MI · ★4 (3) 보기를 두 개로 줄이고 이유를 서술하게 하면 서술형 ★3.'
```

```yaml
- id: GN-CM1-91-166
  page: 91
  vendor_label: "특강"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    z=a+bi(a, b 는 0 이 아닌 실수)에서 z²-z 가 실수일 때 보기 ㄱ~ㄷ(켤레도 실수 · z+z̄=1 · zz̄>1/4)의 참거짓. 5지선다.
  category: 'z²-z 가 실수 조건 → 허수부 b(2a-1)=0 과 b≠0 → a=1/2 고정 후 보기 판정'
  M: {s: 2, k: 2, a: 3, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "z²-z 가 실수라는 조건을 허수부 b(2a-1)=0 으로 옮기고 b≠0 을 써서 a=1/2 를 고정"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "실수 조건에서 얻은 관계로 켤레식 보기 판정하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    조건을 허수부=0 으로 옮기면 b(2a-1)=0 이고 b≠0 이 주어져 있으므로 a=1/2 하나가 나온다. 그 뒤 ㄱ 은 실수의 켤레, ㄴ 은 z+z̄=2a=1, ㄷ 은 zz̄=1/4+b² 이고 b≠0 이라 등호가 빠진다.
    ㄷ 의 엄격 부등호(T-경계)와 b≠0 전제(T-범위)가 함정이라 Mₜ=2, M_total 9.
    통찰 1개·depth 2 라 +1 조건(2개 이상 또는 depth 3)을 충족하지 못하고, ★4 는 §2.13 저노출 유형(SC/VF/SYM/XU/RT/PD/BW)을 요구하는데 여기에는 EQV 뿐이다 → 특강 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: 'z²-z 의 허수부=0 → b(2a-1)=0 에 b≠0 적용 → a=1/2 → z+z̄=1 · zz̄=1/4+b²>1/4 로 보기 판정'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑤'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/91-166.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'z²-z 의 계수(z²-kz)를 바꾸면 a=k/2 로 옮겨 가고 ㄴ·ㄷ 의 값도 따라 바뀐다. 제약: 조건식은 허수부가 b×(a 의 일차식) 으로 인수분해되어야 b≠0 이 살아 있고, ㄷ 의 하한은 a² 이므로 a 가 유리수가 되게 k 를 정수로 둔다.'
    creative: '(1) b≠0 조건을 빼면 b=0 갈래가 생겨 I-MI 가 붙고 보기 판정이 갈린다(★4) (2) z³-z 가 실수로 바꾸면 허수부가 이차식이 되어 a 후보가 둘 생기고 I-MI·I-VF 로 ★4 (3) zz̄ 의 최솟값 존재 여부를 묻게 하면 부등식 단원과 결합해 I-XU · ★4.'
```

### 연습문제 STEP 1

```yaml
- id: GN-CM1-92-167
  page: 92
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 STEP 1"
  summary: |
    복소수 (a+3i)/(2-i) 의 실수부분과 허수부분의 합이 3 일 때 실수 a 의 값. 5지선다.
  category: '분모 실수화 → 실수부·허수부 분리 → 합에 대한 일차방정식'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "분모 실수화 후 실수부·허수부에 대한 조건 풀기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분모의 켤레를 곱해 분모를 5 로 만들고 분자를 전개하면 실수부 (2a-3)/5, 허수부 (a+6)/5 가 보인다. 두 값을 더해 3 과 같다고 놓으면 a 에 대한 일차방정식 하나다.
    기출 태그가 붙어 있으나 통찰이 없어 +0. 통찰 0·M_total 7 이라 −1 조건에도 걸리지 않는다 → STEP 1 출발점 ★2 유지.
    허수부분은 i 를 뺀 계수라는 정의(T-표기)가 유일한 함정이다.
  tier: star_2
  mechanism_primary: '분모의 켤레 곱해 실수화 → 실수부·허수부 계수 추출 → 두 계수의 합=3 으로 a 결정'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '④'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/92-167.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '분자의 허수부, 분모의 복소수, 합의 목표값을 바꿀 수 있다. 제약: 분모의 켤레 곱(a²+b²)이 작은 정수라야 하고, a 에 대한 방정식이 일차로 남으려면 a 는 분자의 실수부 자리에만 둔다. 선택지가 정수로 떨어지도록 목표값을 역산한다.'
    creative: '(1) 합 대신 실수부분과 허수부분이 같다는 조건으로 바꾸기(★2 유지) (2) 결과가 실수·순허수가 되는 a 를 묻기(86-e4 골조 · ★2) (3) a 를 분모로 옮겨 (3+i)/(a-i) 꼴로 두면 미지수가 분모에 들어가 93-174 처럼 한 단계 늘어난다(★3).'
```

```yaml
- id: GN-CM1-92-168
  page: 92
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    z=i(x-2i)² 이 실수가 되도록 하는 양수 x 를 a, 그때의 z 를 b 라 할 때 b-a 의 값.
  category: '전개해 실수부·허수부 분리 → 실수 조건으로 x 후보 → 양수 조건으로 기각 후 z 계산'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 3
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "실수 조건이 주는 x=±2 두 후보 중 양수라는 사후 조건으로 한쪽을 기각"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "복소수가 실수가 되는 조건(전개 후 허수부=0 · 부호 제한)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (x-2i)² 을 전개하고 i 를 곱하면 실수부와 허수부가 뒤바뀌어 z=4x+(x²-4)i 가 된다. 실수 조건은 x²=4 이고 양수 조건이 x=-2 를 기각한다.
    i 를 곱하면 실수부·허수부가 교환된다는 점을 놓치면 조건을 반대로 세운다(T-표기·T-부호). 기각이 한 번 있어 I-VF d1.
    통찰 1개라 조정 없음 → STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: '(x-2i)² 전개 후 i 곱하기 → z=4x+(x²-4)i → 허수부=0 으로 x=±2 → 양수 조건으로 기각 → b-a'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/92-168.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '괄호 안 허수부 계수와 바깥에 곱하는 i 의 계수를 바꿀 수 있다. 제약: 허수부가 x²-c 꼴이라 양수·음수 두 후보가 생겨야 기각 단계가 살고, 그때의 z 값이 정수로 떨어지도록 계수를 맞춘다. 양수 조건을 빼면 답이 둘이 되어 발문을 모두 구하시오로 바꿔야 한다.'
    creative: '(1) 순허수가 되는 조건으로 바꾸면 실수부=0 이 되어 x 가 하나만 남는다(★2) (2) i 대신 (1+i) 를 곱하면 실수부·허수부가 섞여 이차방정식이 되고 ★3 (3) z 의 최댓값을 묻게 하면 범위 조건이 붙어 ★3.'
```

```yaml
- id: GN-CM1-92-169
  page: 92
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    (2+i)·conj(x-yi)=5(1-i) 를 만족시키는 실수 x, y 에 대하여 x+y 의 값. 5지선다.
  category: '켤레 벗기기(x, y 실수) → 전개 후 계수 비교 → 연립일차방정식'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "복소수가 서로 같을 조건(켤레 처리 후 계수 비교)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x, y 가 실수이므로 conj(x-yi)=x+yi 로 바로 바뀐다. 전개하면 (2x-y)+(x+2y)i 이고 우변과 비교해 연립하면 끝이다.
    켤레가 허수부의 부호만 뒤집는다는 정의를 그대로 쓰는 절차라 통찰 0. 켤레를 x, y 전체의 부호로 잘못 적용하는 것(T-부호)이 함정.
    STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: 'conj(x-yi)=x+yi 로 켤레 벗기기 → 좌변 전개 → 실수부·허수부 비교 → x, y 연립 후 합'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '①'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/92-169.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '곱하는 복소수와 우변을 바꿀 수 있다. 제약: 계수행렬이 정칙이라야 x, y 가 하나로 정해지고, 선택지가 정수가 되도록 우변을 역산한다. 켤레 기호를 x+yi 쪽에 씌우면 부호만 바뀌므로 난도는 같다.'
    creative: '(1) x, y 대신 x², y² 를 묻거나 xy 를 물으면 연립 후 한 단계 추가(★2) (2) 켤레 기호를 양변에 씌워 conj 성질을 쓰게 하기(★3) (3) 우변을 실수로 두고 x, y 사이의 관계식을 묻기(I-BW · ★3).'
```

```yaml
- id: GN-CM1-92-170
  page: 92
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    x=7/(2-√3 i), y=7/(2+√3 i) 일 때 x²/y + y²/x 의 값.
  category: '켤레쌍 분수 → 합 x+y 와 곱 xy 를 먼저 구하기 → (x³+y³)/(xy) 대칭식 전개'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "x, y 가 켤레쌍이므로 각각을 실수화하지 않고 합·곱(모두 실수)만 구해 대칭식으로 계산"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "켤레쌍의 대칭식 값(기본대칭식 환원)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x, y 를 각각 a+bi 로 바꾸고 세제곱하는 길은 사실상 막혀 있다. 분수 상태에서 x+y 와 xy 를 먼저 구하면 둘 다 정수이고, x²/y+y²/x=(x³+y³)/(xy) 를 합·곱으로 전개하면 한 줄이다.
    통찰 1개(SYM d2)라 +1 조건 미충족 → STEP 1 출발점 ★2 유지. 88-162 의 확장판이다.
  tier: star_2
  mechanism_primary: '통분해 (x³+y³)/(xy) → x³+y³=(x+y)³-3xy(x+y) → 켤레쌍의 합·곱 대입'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-\dfrac{20}{7}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/92-170.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '분자의 상수와 분모 켤레쌍의 성분을 바꿀 수 있다. 제약: 분모의 켤레 곱(4+3=7)이 분자와 같거나 약분되도록 잡아야 x+y, xy 가 정수로 떨어진다. 분모가 켤레쌍이 아니면 합·곱이 복소수가 되어 골조가 사라진다.'
    creative: '(1) x²/y+y²/x 대신 x⁴+y⁴ 로 바꾸면 대칭식 전개가 한 단계 늘어난다(★3) (2) x+y 와 xy 만 주고 x, y 를 숨기면 추상도가 올라 ★3 (3) x, y 를 근으로 갖는 실계수 이차방정식을 먼저 세우게 하면 I-XU · ★3.'
```

```yaml
- id: GN-CM1-92-171
  page: 92
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    α+β=2-i 일 때 αᾱ+ᾱβ+αβ̄+ββ̄ 의 값(α, β 는 주어지지 않음).
  category: '켤레를 포함한 대칭식 → (α+β)(ᾱ+β̄) 로 묶기 → 합의 제곱합'
  M: {s: 1, k: 1, a: 3, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "네 항을 (α+β)conj(α+β) 로 묶어 주어진 합 하나만으로 답을 냄"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "켤레복소수를 포함한 대칭식의 값(zz̄ 꼴로 묶기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    89-e7·89-163 과 같은 골조이며 α, β 가 개별로 주어지지 않아 묶기가 유일한 길이다. 묶은 뒤 2²+(-1)² 한 줄.
    예제·확인체크에서 이미 두 번 노출된 도구라 depth 1. 통찰 1개·M_total 6 → STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: '네 항을 (α+β)(ᾱ+β̄) 로 인수분해 → conj(α+β) 로 바꿔 zz̄ → 실수부²+허수부²'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/92-171.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'α+β 의 실수부·허수부를 바꿀 수 있다. 제약: 답이 제곱합이므로 성분을 한 자리 정수로 두면 답이 깔끔하다. 네 항의 부호 조합을 바꾸려면 주어지는 조건도 합에서 차로 함께 바꿔야 한다(89-163 참고).'
    creative: '(1) 답을 주고 α+β 의 허수부를 되묻기(I-BW · ★3) (2) αβ 조건을 함께 주고 αᾱ+ββ̄ 를 묻게 하면 두 조건을 결합해야 해 ★4(94-182 골조) (3) α, β 가 실계수 이차방정식의 두 근이라는 설정을 얹으면 I-XU · ★3.'
```

```yaml
- id: GN-CM1-92-172
  page: 92
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    z-z̄=2i, zz̄=17 일 때 복소수 z 를 모두 구하기.
  category: 'z-z̄ 와 zz̄ 조건 → z=a+bi 치환 → 2bi=2i, a²+b²=17 연립'
  M: {s: 1, k: 1, a: 2, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "z-z̄ · zz̄ 조건에서 복소수 z 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    z=a+bi 로 놓으면 z-z̄=2bi 라는 공식에서 b=1 이 바로 나오고, zz̄=a²+b² 에서 a=±4 가 남는다. 89-164 의 합 조건을 차 조건으로 바꾼 쌍둥이 문항이다.
    허수부 조건이 2bi=2i 라 i 를 지우고 비교해야 한다는 점(T-표기)과 a 의 부호 둘(T-부호)이 함정이라 Mₜ=2.
    통찰 0·M_total 6 → STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: 'z=a+bi 치환 → z-z̄=2bi 로 b 결정 → zz̄=a²+b² 로 a=±값 → 두 복소수 모두 제시'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4+i$, $-4+i$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/92-172.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'z-z̄ 의 값과 zz̄ 의 값을 바꿀 수 있다. 제약: (차의 허수부/2)² < zz̄ 라야 a² > 0 이 되어 답이 둘 나오고, 피타고라스 수를 쓰면 a 가 정수로 떨어진다. 차 조건의 우변은 반드시 순허수여야 한다(실수면 모순).'
    creative: '(1) z+z̄ 조건과 섞어 세 조건을 주면 과잉 조건 검증이 생겨 I-VF · ★3 (2) z 의 실수부가 양수라는 조건을 얹으면 기각이 생겨 ★3 (3) z-z̄ 가 순허수임을 먼저 증명하게 하면 특강 골조와 결합해 ★3.'
```

### 연습문제 STEP 2

```yaml
- id: GN-CM1-93-173
  page: 93
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    복소수 z-3i 의 켤레복소수가 5+i 일 때 zz̄ 의 값.
  category: '켤레 되돌리기 → z-3i=5-i → z 확정 → zz̄=실수부²+허수부²'
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "켤레 조건에서 복소수를 복원해 zz̄ 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    켤레의 켤레는 자기 자신이므로 z-3i=5-i 로 되돌리고 z=5+2i 를 얻은 뒤 zz̄=25+4 로 끝난다. 두 단계뿐이고 새 도구가 없다.
    켤레를 되돌릴 때 -3i 까지 부호를 바꾸는 실수(T-부호)가 유일한 함정이다.
    통찰 0·M_total 5 라 −1 조정이 걸려 STEP 2 출발점 ★3 에서 ★2 로 내렸다.
    [분류 이슈] 벤더 구역 신호(STEP 2 ★3)와 1단 어긋난다 — 라벨은 맞추지 않고 기록만 한다.
  tier: star_2
  mechanism_primary: '양변에 켤레 취해 z-3i=5-i → z=5+2i → zz̄=실수부²+허수부²'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$29$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/93-173.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '빼는 순허수(3i)와 주어진 켤레(5+i)를 바꿀 수 있다. 제약: 복원된 z 의 성분이 정수라야 zz̄ 가 깔끔하고, 켤레를 씌운 대상에 순허수 항이 남아 있어야 부호 함정이 살아난다.'
    creative: '(1) 켤레를 씌운 대상을 (2+i)z 처럼 곱으로 두면 나눗셈이 추가돼 ★3 (2) zz̄ 대신 z+z̄ 나 z² 을 묻기(★2 유지) (3) 조건을 conj(z)-3i=5+i 로 살짝 바꿔 어느 쪽에 켤레가 걸렸는지 구분하게 하면 T-표기 함정이 강해져 ★3.'
```

```yaml
- id: GN-CM1-93-174
  page: 93
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    (1+i)/(1-i) + (2-i)/(x+yi) = 1-i 를 만족시키는 실수 x, y 에 대하여 x-y 의 값.
  category: '앞 분수 먼저 정리 → 미지 분모를 덩어리로 이항 → 역수 계산 후 계수 비교'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "미지수가 분모에 있으므로 (2-i)/(x+yi) 를 통째로 이항한 뒤 역수를 취해 x+yi 를 직접 계산"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "미지수가 분모에 있는 복소수 등식 풀기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    (1+i)/(1-i)=i 를 먼저 정리하는 것이 1단계다. 남은 분수를 통째로 이항하면 (2-i)/(x+yi)=1-2i 가 되고, 여기서 분모를 곱해 정리하거나 역수를 취하면 x+yi 가 바로 나온다.
    미지수를 분모에 둔 채 계수 비교를 시도하면 막히므로 덩어리 이항이 실질적 착안(EQV d1)이다. 통찰 1개라 조정 없음 → STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: '(1+i)/(1-i)=i 정리 → 남은 분수를 이항 → 분모를 곱하거나 역수로 x+yi 계산 → 실수부·허수부 읽기'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{1}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/93-174.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '앞 분수의 켤레쌍, 분자 (2-i), 우변을 바꿀 수 있다. 제약: 앞 분수는 (1±i)/(1∓i) 처럼 결과가 ±i 로 딱 떨어지게 두어야 이항이 깔끔하고, 이항 후 우변이 0 이 되지 않아야 역수가 정의된다. x, y 가 분수로 나와도 무방하나 분모는 한 자리로 둔다.'
    creative: '(1) x, y 대신 x+yi 자체를 묻기(★2~3) (2) 분모를 x+yi 와 그 켤레 두 개로 두면 연립이 되어 ★4 (3) 해가 존재하지 않는 우변을 찾게 하면 I-BW·I-VF 로 ★4.'
```

```yaml
- id: GN-CM1-93-175
  page: 93
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    x=(-1+√3 i)/2 일 때 x⁴+7x³-x-3 의 값.
  category: '2x+1=√3 i 이항·제곱 → x²+x+1=0 → x³=1 주기로 고차항 축약'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "2x+1=√3 i 로 이항·제곱해 x²+x+1=0 을 유도해야 고차식을 다룰 수 있음"
    - step: 2
      type: I-PD
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x²+x+1=0 에서 x³=1 을 읽어 x⁴=x, x³=1 로 즉시 축약(나눗셈으로도 가능한 선택적 지름길)"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "1의 세제곱근 꼴 복소수가 주어진 고차식의 값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    분모 2 와 √3 때문에 직접 거듭제곱이 막히므로 이차식 유도가 먼저다. 유도된 x²+x+1=0 은 곱셈 공식으로 x³=1 을 주고, 그러면 x⁴+7x³ 이 x+7 로 접힌다.
    두 번째 통찰(x³=1)은 사차식을 이차식으로 나누는 표준 경로로도 대체되는 선택적 지름길이라 effective_depth 를 1 로 두고 +1 조정을 적용하지 않았다 → STEP 2 출발점 ★3 유지.
    [분류 이슈] 통찰 2개 규칙만 보면 ★4 후보다.
  tier: star_3
  mechanism_primary: '2x+1=√3 i 이항·제곱 → x²+x+1=0 → x³=1 로 x⁴=x 축약 → 남은 일차식 정리'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/93-175.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '고차식의 차수와 계수를 바꿀 수 있다. 제약: x 는 x²+x+1=0 (또는 x²-x+1=0) 을 만족하는 꼴로 유지해야 x³=1 또는 x³=-1 주기가 살아난다. 지수는 3 의 배수 주변(3·4·6·7)으로 두면 축약이 극적이고, 상수항을 조절해 답을 정수로 맞춘다.'
    creative: '(1) x^100 같은 큰 지수를 넣어 주기 사용을 강제하면 I-PD d2 로 ★4 (2) 1+x+x²+…+x^n 의 합을 묻게 하면 등비 구조가 붙어 ★4 (3) x 를 근으로 갖는 실계수 이차방정식을 먼저 구하게 하면 I-BW · ★3.'
```

```yaml
- id: GN-CM1-93-176
  page: 93
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    z+w=3+6i, z̄-w̄=1-4i 일 때 zw̄=p+qi(p, q 실수)의 p+q 의 값.
  category: '켤레 조건을 켤레의 분배로 되돌리기 → z-w 확보 → 연립으로 z, w → 곱'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "z̄-w̄=conj(z-w) 임을 써서 켤레 조건을 z-w 조건으로 되돌려 연립 가능한 꼴로 만듦"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "켤레의 분배 성질로 연립해 두 복소수 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 조건이 z 와 z̄ 로 섞여 있어 그대로는 연립되지 않는다. 켤레의 분배 성질로 z̄-w̄ 를 conj(z-w) 로 읽고 양변에 켤레를 취하면 z-w 가 나와 합·차 연립이 된다.
    그 뒤 z, w 를 구해 zw̄ 를 계산하는 부분은 표준 계산이다. 통찰 1개라 조정 없음 → STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: 'z̄-w̄=conj(z-w) → 켤레 취해 z-w 확보 → 합·차 연립으로 z, w → zw̄ 계산 후 p+q'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$10$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/93-176.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 조건의 우변을 바꿀 수 있다. 제약: 합과 차를 더하고 빼서 z, w 가 정수 성분으로 떨어지도록 두 우변의 성분 합·차가 모두 짝수이게 잡는다. 두 번째 조건은 반드시 켤레 쪽에 걸어 두어야 이 유형의 착안이 남는다.'
    creative: '(1) zw̄ 대신 zz̄+ww̄ 를 물으면 묶기 골조(89-e7)와 결합돼 ★3 (2) 조건을 z̄+w 처럼 한쪽만 켤레로 섞으면 계수 비교로 내려가 ★3 (3) z, w 를 구하지 않고 zw̄+z̄w 가 실수임을 보이게 하면 I-SYM · ★4.'
```

```yaml
- id: GN-CM1-93-177
  page: 93
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    z=(1+i)x+(1-i)y-3+5i 에 대하여 zz̄=0 일 때 실수 x, y 의 x²+y² 의 값.
  category: 'zz̄=0 ⟺ z=0 동치 변환 → 실수부·허수부 모두 0 → 연립 후 제곱합'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "zz̄=a²+b²=0 이고 a, b 가 실수라는 점에서 z=0 즉 실수부=허수부=0 으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "zz̄=0 조건에서 실수 미지수 구하기(z=0 동치)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    zz̄ 를 전개해 제곱합을 만들려 들면 사차식이 되어 막힌다. zz̄=0 을 z=0 으로 옮기는 한 줄이 이 문항의 전부이고, 그 뒤는 실수부·허수부 각각 0 이라는 연립일차방정식이다.
    실수 범위라야 제곱합이 0 에서 각 항이 0 으로 내려온다는 점(T-범위)과 zz̄ 를 z² 로 오인하는 표기(T-표기)가 함정이라 Mₜ=2.
    통찰 1개·depth 2 라 +1 조건 미충족 → STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: 'zz̄=0 ⟺ z=0 → z 를 (x+y-3)+(x-y+5)i 로 정리 → 두 계수 모두 0 연립 → x²+y²'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$17$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/93-177.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'x, y 에 곱해진 복소수와 상수항을 바꿀 수 있다. 제약: 두 복소수 계수가 실수배 관계가 아니어야 연립이 하나의 해를 갖고, 상수항을 조절해 x, y 가 정수로 떨어지게 한다. 제곱합을 묻는 발문 덕에 부호 실수가 가려지므로 x+y 나 xy 를 묻는 쪽이 변별에는 낫다.'
    creative: '(1) zz̄=0 대신 z+z̄=0(순허수 또는 0) 으로 바꾸면 조건이 하나만 남아 ★2~3 (2) zz̄ 의 최솟값을 묻게 하면 제곱합 최소로 이차함수 단원과 결합해 I-XU · ★4 (3) z 가 실수가 되는 x, y 의 관계를 묻기(I-BW · ★3).'
```

```yaml
- id: GN-CM1-93-178
  page: 93
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 STEP 2"
  summary: |
    실수 a 에 대하여 z=a+2i 가 z̄=z²/(4i) 를 만족시킬 때 a² 의 값.
  category: '분모 4i 를 양변에 곱해 정리 → 켤레·제곱 전개 → 계수 비교로 a² 확정'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "분모에 i 가 있는 등식을 양변에 4i 를 곱해 다항 등식으로 바꾼 뒤 계수 비교가 가능한 꼴로 정리"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "켤레와 제곱이 섞인 등식에서 실수 미지수 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    z̄ 와 z² 이 같은 등식에 있으므로 z 를 덩어리로 다루지 못한다. 양변에 4i 를 곱해 분모를 없애고 좌우를 전개하면 허수부의 a 항이 서로 상쇄되고 실수부 비교만 남는다.
    교육청 기출이지만 통찰이 동치 변환 한 번뿐이라 태그 가산 +0. 통찰 1개·depth 1 → STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: '양변에 4i 곱해 분모 제거 → 좌변 4i·z̄, 우변 z² 전개 → 실수부·허수부 비교 → a² 확정'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$12$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/93-178.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'z 의 허수부(2)와 분모의 순허수 계수(4i)를 바꿀 수 있다. 제약: 전개했을 때 허수부에서 a 의 일차항이 상쇄되어 실수부 비교만으로 a² 가 정해지도록 두 상수를 짝지어야 한다(상쇄가 깨지면 a 에 대한 연립이 모순이 되어 해가 없다). 답을 a² 로 물으므로 a 는 무리수여도 된다.'
    creative: '(1) 분모를 4i 대신 실수 4 로 바꾸면 허수부 상쇄가 사라져 해가 없거나 단순해진다 — 반드시 확인 후 사용 (2) a 의 값 자체를 물으면 ± 두 답이 되어 T-부호 함정이 커진다(★3) (3) z̄=z²/(ki) 를 만족시키는 k 가 존재할 조건을 묻기(I-BW · ★4).'
```

### 연습문제 실력 UP

```yaml
- id: GN-CM1-94-179
  page: 94
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    z=a(2+i)-1+2i 에 대하여 z² 이 실수가 되도록 하는 모든 실수 a 의 값의 곱.
  category: 'z² 이 실수 ⟺ z 가 실수 또는 순허수 → 두 경우의 a 를 모두 구해 곱하기'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "z² 이 실수라는 조건을 z 가 실수이거나 순허수라는 동치 조건으로 옮김"
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "실수인 경우와 순허수인 경우가 모두 답에 기여하므로 두 갈래를 다 구해 곱해야 함"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "z² 이 실수가 될 조건(실수 또는 순허수 두 경우)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    z=(2a-1)+(a+2)i 로 정리한 뒤, z² 이 실수라는 조건을 실수부·허수부의 곱이 0 이라는 형태로 옮기면 두 갈래(허수부=0 또는 실수부=0)가 모두 살아난다. 값의 곱을 물었으므로 둘 다 필요하다.
    86-158 은 음의 실수라 한 갈래가 기각되지만 여기서는 기각이 없고 둘 다 답이라 I-VF 가 아니라 I-MI 다.
    통찰 2개로 +1 후보이나 ★5 는 §2.13 에 따라 SC/VF/SYM/XU 통찰을 요구하므로 올리지 않고 실력 UP 출발점 ★4 유지.
  tier: star_4
  mechanism_primary: 'z 를 (2a-1)+(a+2)i 로 정리 → z² 실수 ⟺ 실수부·허수부 중 하나가 0 → 두 a 값의 곱'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/94-179.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'a 에 곱해진 복소수와 상수항을 바꿀 수 있다. 제약: 실수부·허수부가 모두 a 의 일차식이라야 갈래마다 a 가 하나씩 나오고 곱이 정해진다. 두 일차식이 같은 근을 가지면 z=0 이 되어 갈래가 겹치므로 서로 다른 근을 갖게 잡는다.'
    creative: '(1) 음의 실수로 바꾸면 한 갈래가 기각돼 I-VF 가 되고 86-158 이 된다(★3) (2) 값의 합 대신 최댓값을 물으면 비교 단계가 붙어 ★4 유지 (3) z³ 이 실수가 되는 조건으로 올리면 세제곱근 구조가 들어와 ★5 재료가 된다(I-PD 추가 필요).'
```

```yaml
- id: GN-CM1-94-180
  page: 94
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    z=a(3-i)-b(1+i) 에 대하여 z²=-16 일 때 a²+b² 의 값(a, b 는 실수).
  category: 'z²=-16 → z=±4i 역추적 → 실수부=0·허수부=±4 연립 → 제곱합'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "z² 의 값이 먼저 주어졌으므로 z 가 순허수 ±4i 여야 함을 역추적해 z 의 성분 조건을 세움"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "z² 의 값이 주어질 때 원래 복소수 역추적하기"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    z 를 전개해 제곱하는 정공법도 있지만 사차 연립이 되어 무겁다. z²=-16 에서 z=±4i 를 먼저 읽으면 실수부=0, 허수부=±4 라는 일차 연립 둘로 끝난다.
    부호 두 갈래가 나오지만 a²+b² 는 두 경우 모두 같아 최종 답이 하나다(T-부호). 통찰 1개라 조정 없음 → 실력 UP 출발점 ★4 유지.
  tier: star_4
  mechanism_primary: 'z²=-16 → z=±4i 역추적 → z=(3a-b)+(-a-b)i 의 실수부=0·허수부=±4 연립 → a²+b²'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$10$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/94-180.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'a, b 에 곱해진 복소수와 z² 의 값을 바꿀 수 있다. 제약: z² 이 음의 실수라야 z 가 순허수로 역추적되고, 그 절댓값이 완전제곱수라야 허수부가 정수로 떨어진다. z² 을 양의 실수로 두면 z 가 실수가 되어 조건이 뒤집히므로 발문도 함께 바꿔야 한다.'
    creative: '(1) z²=16 으로 바꾸면 z 가 실수가 되어 갈래가 달라진다(★3~4) (2) z²=8i 처럼 순허수로 두면 z 를 직접 제곱해 연립해야 해 I-BW 가 깊어지고 ★5 후보 (3) a, b 를 자연수로 제한하면 사후 기각이 생겨 I-VF 추가 ★5.'
```

```yaml
- id: GN-CM1-94-181
  page: 94
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    x²=-3+2i 일 때 x⁴+x³+8x²+6x+13/x 의 값.
  category: 'x² 만 주어진 고차·분수식 → 분수항을 13x/x² 로 올려 차수 통일 → x 의 일차항 계수 상쇄'
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "x 자체는 구할 수 없고 x² 만 주어졌으므로 13/x 를 13x/x² 로 바꿔 모든 항을 x² 과 x 의 조합으로 통일"
    - step: 3
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x 의 일차항 계수를 한데 모으면 0 이 되어 x 를 구하지 않고 상수항만으로 답이 나옴을 확인"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "x² 만 주어진 고차·분수식의 값(차수 통일 후 일차항 상쇄)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    x 가 아니라 x² 이 주어졌다는 것이 이 문항의 성격을 정한다. x⁴ 과 8x² 은 바로 계산되고, x³ 과 6x 는 x 의 일차항으로 남으며, 13/x 는 분모·분자에 x 를 곱해 13x/x² 로 올려야 같은 형태가 된다.
    세 x 항의 계수를 합치면 0 이 되어 x 를 끝내 구하지 않고 답이 나온다 — 이 상쇄를 예상하지 못하면 x 를 구하려다 막힌다.
    통찰 2개로 +1 후보이나 ★5 는 통찰 3개 이상 + SC/VF/SYM/XU 를 요구하므로 실력 UP 출발점 ★4 유지.
  tier: star_4
  mechanism_primary: '13/x=13x/x² 로 차수 통일 → x⁴=(x²)², 8x², 상수는 직접 계산 → 남은 x 항 계수 합이 0 임을 확인'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$-19+4i$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/94-181.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'x² 의 값과 각 항의 계수를 바꿀 수 있다. 제약: x 의 일차항 계수의 합이 반드시 0 이 되도록 x³ 계수·x 계수·분수항 계수를 맞춰야 한다(13 은 x² 의 켤레 곱 9+4 에서 온 값이다). 분수항 계수를 x² 의 절댓값 제곱으로 잡으면 실수 계수로 떨어진다.'
    creative: '(1) 일차항이 상쇄되지 않게 두고 x 를 실제로 구하게 하면 이차방정식 풀이가 추가돼 ★5 후보이나 계산 마찰이 커져 권하지 않는다 (2) x³ 의 값을 따로 묻기(★3) (3) x²=-3+2i 를 만족시키는 x 를 모두 구하게 하면 제곱근 추출이 되어 I-BW·I-VF 로 ★5.'
```

```yaml
- id: GN-CM1-94-182
  page: 94
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    αᾱ=ββ̄=2, α+β=2i 일 때 αβ 의 값(α, β 는 주어지지 않음).
  category: '켤레 크기 조건 두 개와 합 조건 → β 소거로 α-ᾱ 확보 → 성분 확정 후 곱'
  M: {s: 3, k: 2, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "β=2i-α 로 소거하고 ββ̄ 조건에 넣어 α-ᾱ(즉 허수부) 값을 먼저 뽑아냄"
    - step: 3
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "α, β 가 허수부를 공유하고 실수부의 부호만 반대인 쌍이라 실수부 부호 두 경우가 같은 αβ 를 줌"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "켤레 크기와 합이 주어진 두 복소수의 곱 구하기"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    α, β 를 각각 a+bi, c+di 로 두고 네 미지수를 연립하는 정공법은 길다. β 를 2i-α 로 소거해 ββ̄=2 에 넣으면 α 의 허수부가 먼저 정해지고, 남은 αᾱ=2 가 실수부를 ± 두 값으로 준다.
    두 경우에서 α 와 β 가 서로 자리를 바꿀 뿐이라 αβ 는 한 값이다 — 이 대칭을 보면 경우를 따로 계산하지 않아도 된다.
    통찰 2개로 +1 후보이나 ★5 요건(통찰 3개 이상 + SC/VF/SYM/XU)을 충족하지 않아 실력 UP 출발점 ★4 유지.
  tier: star_4
  mechanism_primary: 'β=2i-α 소거 → ββ̄=2 에 대입해 α 의 허수부 확정 → αᾱ=2 로 실수부 ± 확정 → αβ 계산(두 경우 동일)'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/94-182.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'αᾱ=ββ̄ 의 공통값과 α+β 의 값을 바꿀 수 있다. 제약: 두 복소수의 크기가 같아야 대칭 구조가 유지되고, 합의 제곱합이 공통값의 4배를 넘지 않아야 실수부가 실수로 남는다. 공통값과 합을 작은 정수로 잡아야 성분이 유리수로 떨어진다.'
    creative: '(1) αβ 대신 α-β 나 α³+β³ 를 묻기(★4 유지) (2) αᾱ≠ββ̄ 로 두면 대칭이 깨져 연립이 길어진다(계산 마찰 · 권하지 않음) (3) α, β 를 실계수 이차방정식의 두 근으로 두고 방정식을 복원하게 하면 I-XU 가 붙어 ★5 재료.'
```

```yaml
- id: GN-CM1-94-183
  page: 94
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    (z+2z̄)/(zz̄)=3+2i 가 성립할 때 복소수 z 구하기.
  category: '분모 zz̄ 가 실수임을 이용 → z=a+bi 치환 후 계수 비교 → z=0 기각'
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "분모 zz̄=a²+b² 가 실수이므로 분자 z+2z̄=3a-bi 와 우변을 실수부·허수부로 직접 비교할 수 있음"
    - step: 4
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "연립에서 나온 a=0 은 z=0 이 되어 분모를 0 으로 만들므로 사후 기각"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "분모에 zz̄ 가 있는 등식에서 복소수 구하기"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    분모가 실수라는 점을 먼저 읽어야 양변 비교가 가능해진다. z=a+bi 로 두면 분자는 3a-bi 이고 분모는 a²+b² 라 두 개의 유리식 방정식이 나오며, 이를 연립하면 b=-2a 와 a=5a² 가 된다.
    a=0 은 형식상 해지만 z=0 이면 분모가 0 이라 정의되지 않으므로 반드시 기각해야 한다(T-범위) — 기각을 빠뜨리면 z=0 을 답으로 쓴다.
    통찰 2개로 +1 후보이나 ★5 는 통찰 3개 이상을 요구하므로 실력 UP 출발점 ★4 유지.
  tier: star_4
  mechanism_primary: 'z=a+bi 치환 → 분자 3a-bi · 분모 a²+b²(실수) → 실수부·허수부 비교로 b=-2a, a=5a² → a=0 기각'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$\dfrac{1}{5}-\dfrac{2}{5}i$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/94-183.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '분자의 계수(z+2z̄ 의 1 과 2)와 우변을 바꿀 수 있다. 제약: 분자가 (p+q)a+(p-q)bi 꼴이 되므로 p≠q 라야 허수부가 살아 있고, 우변의 실수부·허수부가 모두 0 이 아니어야 a, b 가 하나로 정해진다. 답의 분모가 한 자리가 되도록 우변을 역산한다.'
    creative: '(1) 분모를 z 나 z̄ 로 두면 분모가 복소수라 실수화가 먼저 필요해 ★4~5 (2) z 대신 zz̄ 의 값을 묻기(★3~4) (3) 조건을 만족시키는 z 가 존재할 우변의 범위를 묻게 하면 I-BW·I-VF 가 겹쳐 ★5.'
```

```yaml
- id: GN-CM1-94-184
  page: 94
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 실력 UP"
  summary: |
    자연수 a, b, c, d 에 대하여 z₁=a+bi, z₂=c+di 이고 z₁conj(z₁)=10 일 때 보기 ㄱ~ㄷ(a²+b²=10 · 합 조건에서 c+d=5 · 제곱합 41 에서 z₂conj(z₂) 의 최댓값 17)의 참거짓. 5지선다.
  category: '자연수 제약 아래 제곱합 분해 → 보기별 후보 나열 → 조건 위배 기각 후 최댓값'
  M: {s: 3, k: 2, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "a²+b²=10 을 만족시키는 자연수 쌍이 두 가지라 이후 보기 판정이 두 갈래로 갈림"
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "ㄴ 에서 합 조건이라는 결과로부터 a 와 c 의 값을 역추적하고 자연수 제약으로 한 조합만 남김"
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "ㄷ 에서 (a+c)²+(b+d)²=41 의 자연수 해를 갈래마다 훑고 조건에 맞지 않는 후보를 기각한 뒤 남은 것 중 최댓값 선택"
  insight_count: 3
  depth_score: 2.00
  type_id: null
  type_hint: "자연수 성분 복소수의 zz̄ 조건과 보기 판정(제곱합 분해·기각)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    zz̄ 를 제곱합으로 읽는 것은 쉽지만, 자연수라는 제약이 붙으면서 후보 나열과 기각이 풀이의 본체가 된다. ㄱ 은 정의, ㄴ 은 합 조건에서 자연수 조건으로 한 조합만 남기는 역추적, ㄷ 은 두 갈래 각각에서 41 의 분해를 훑고 남은 값 중 최댓값을 고르는 검증이다.
    통찰 3개(MI·BW·VF)에 VF 가 포함돼 §2.13 의 ★5 저노출 유형 요건은 형식상 충족하지만, novelty_score 0(§2.14 — 자연수 제곱합 분해는 시판에 흔한 조합)이라 ★5 로 올리지 않고 실력 UP 출발점 ★4 를 유지했다.
    [분류 이슈] ★4/★5 경계 문항이다.
  tier: star_4
  mechanism_primary: 'zz̄=제곱합으로 읽기 → a²+b²=10 의 자연수 쌍 두 가지 분기 → 보기별로 후보 나열·자연수 조건 기각 → 최댓값 선택'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '⑤'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/94-184.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'z₁conj(z₁) 의 값(10)과 ㄷ 의 제곱합(41)을 바꿀 수 있다. 제약: 두 값 모두 두 자연수의 제곱합으로 분해되는 수(5·10·13·17·25·41·50)여야 하고, 분해 가짓수가 2~3 가지라야 나열이 감당되면서 기각이 살아난다. 자연수 조건을 정수로 바꾸면 0 과 음수가 들어와 가짓수가 폭증하므로 발문을 함께 손봐야 한다.'
    creative: '(1) ㄷ 에서 최댓값 대신 가능한 모든 값을 묻기(★4 유지) (2) z₁, z₂ 의 곱의 크기 조건을 얹으면 곱셈 구조가 추가돼 ★5 후보 (3) 자연수 대신 서로 다른 소수 성분으로 제한하면 정수론 색이 강해져 교육과정 밖으로 벗어나므로 피한다.'
```

## 표본 판정 요약 (40문)

- ★ 분포: ★1 3 · ★2 22 · ★3 9 · ★4 6 · ★5 0
- 통찰형 24 · 절차형 16 · premium 0
- 통찰 유형 분포(총 31건): I-EQV 14 · I-SYM 6 · I-VF 5 · I-MI 2 · I-BW 2 · I-PD 1 · I-CON 1. I-XU·I-SC 는 0 건 — 이 단원은 복소수 내부에서 닫혀 있고 해법 갈래가 하나로 수렴해 ★5 재료가 나오지 않는다.
- M_total 분포: 4 → 1문 · 5 → 3문 · 6 → 6문 · 7 → 16문 · 8 → 6문 · 9 → 7문 · 10 → 1문 (평균 7.2)
- type_hint 상위 5: 「복소수가 실수·순허수(또는 z² 이 실수)가 되는 조건」 6(86-e4 · 86-156 · 86-157 · 86-158 · 92-168 · 94-179) · 「켤레복소수를 포함한 대칭식의 값(zz̄ 꼴로 묶기)」 3(89-e7 · 89-163 · 92-171) · 「복소수가 주어질 때 식의 값(이차식 유도 후 차수 낮추기)」 3(88-e6 · 88-160 · 88-161) · 「복소수가 서로 같을 조건(계수 비교)」 3(87-e5 · 87-159 · 92-169) · 「z=a+bi 치환 후 켤레 등식 풀기」 3(89-e8 · 89-165 · 94-183)
- 구역별 ★ 중앙값: 개념원리 익히기 ★1 · 필수·발전 예제 ★2 · 특강 ★3 · STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4 — 벤더 신호와 판정이 구역 단위에서는 일치한다.
- 대상층: 하위권 3 · 중하위권 13 · 중위권 10 · 중상위권 10 · 상위권 4
- 그림: 0문 (이 범위에는 figure 가 있는 문항이 없다)

## 분류 이슈 목록

판정이 애매하거나 벤더 신호와 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CM1-86-e4 | 순허수 조건에서 근 하나를 기각하는 단계를 I-VF 로 셀지, 정의에 명시된 조건의 단순 적용(절차형)으로 볼지 경계. 없으면 틀린 답에 도달한다는 판별 기준을 근거로 통찰 인정 쪽을 채택 | ★2 |
| GN-CM1-86-158 | 구역 신호는 확인체크(★2)인데 통찰 2개(EQV d2 + VF d1)로 판정은 ★3. 같은 골조가 실력 UP 94-179 로 다시 나와 구역 간 난도 신호가 일관되지 않음 | ★2 / ★3 |
| GN-CM1-89-e7 | 네 항 묶기를 못 보면 계산량이 네 배가 되어 체감은 ★3 이나, 통찰 1개라 +1 조건 미충족으로 ★2 유지 | ★2 / ★3 |
| GN-CM1-88-160 | 무리 허수라 차수 낮추기가 사실상 유일한 길이어서 체감 ★3. 통찰 1개·depth 2 로 +1 조건 미충족이라 ★2 유지(88-161 과 같은 라벨이지만 88-161 은 직접 거듭제곱 대안이 있다) | ★2 / ★3 |
| GN-CM1-91-166 | 통찰 1개 d2·M_total 9 로 +1 후보였으나 ★4 는 §2.13 저노출 유형(SC/VF/SYM/XU/RT/PD/BW)을 요구하고 여기에는 EQV 뿐이라 ★3 유지 | ★3 / ★4 |
| GN-CM1-93-173 | 벤더 STEP 2(★3 신호)이나 통찰 0·M_total 5 로 −1 조정이 걸려 ★2. 같은 STEP 2 의 다른 다섯 문항과 한 단 차이 | ★2 / ★3 |
| GN-CM1-93-175 | x³=1 주기(I-PD)를 통찰로 온전히 인정하면 통찰 2개 → ★4. 이차식 나눗셈으로도 풀리는 선택적 지름길이라 effective_depth 1 로 낮추고 ★3 유지 | ★3 / ★4 |
| GN-CM1-94-184 | 통찰 3개 + I-VF 로 §2.13 의 ★5 저노출 요건은 형식상 충족하나 novelty_score 0(§2.14 · 자연수 제곱합 분해는 흔한 조합)이라 ★4 유지 | ★4 / ★5 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형 1 — 실수·순허수 조건**: 86-e4 · 86-156 · 86-157 · 92-168 은 「허수부=0」 또는 「실수부=0 이고 허수부≠0」 하나로 묶이는 단일 유형이다. base ★ 후보 2. 86-158 · 94-179 의 「z² 이 (음의) 실수」는 앞에 동치 변환이 한 겹 더 있고 기각/다중 경우가 갈리므로 **하위 유형이 아니라 별도 유형**으로 세우는 편이 낫다(base ★ 후보 3~4). 지금은 확인체크와 실력 UP 에 흩어져 있어 벤더 라벨만으로는 같은 난도로 보이지 않는다.
- **따로 세워야 할 유형 2 — 켤레 대칭식 묶기**: 89-e7 · 89-163 · 92-171 은 「αᾱ±αβ̄±ᾱβ+ββ̄ 를 (α±β)conj(α±β) 로 묶기」 한 유형이고 난도 차이가 거의 없다. base ★ 후보 2. 88-162 · 92-170 의 「켤레쌍 기본대칭식 환원」은 묶는 대상이 켤레 대칭식이 아니라 분수 대칭식이므로 **통합하지 말고 인접 유형**으로 둔다(base ★ 후보 2~3).
- **통합해도 되는 유형 — 차수 낮추기**: 88-e6⑴ · 88-160 · 88-161 · 93-175 · 94-181 은 모두 「주어진 복소수에서 실계수 이차식을 유도해 고차식을 축약」이다. 차이는 직접 거듭제곱 대안의 유무(88-161)와 x³=±1 주기의 등장(93-175)과 분수항 포함(94-181)뿐이라, 단일 유형 + 난이도 변수(주기 · 분수항 · 무리 허수)로 두는 편이 낫다. base ★ 후보 2, 주기나 분수항이 붙으면 3~4.
- **통합해도 되는 유형 — 치환 후 계수 비교**: 87-e5 · 87-159 · 89-e8 · 89-165 · 92-169 · 93-174 · 94-183 은 모두 「미지수를 실수로 두고(또는 z=a+bi 로 놓고) 실수부·허수부를 비교해 연립」이다. 미지수가 분모에 있는 경우(93-174 · 94-183)만 이항·실수화가 한 겹 더 붙으므로 난이도 변수로 처리한다. base ★ 후보 2, 분모 미지수면 3~4.
- **카탈로그에 넣을지 판단 필요**: 84-152 · 84-153 · 84-154 · 85-e3 · 85-155 는 순수 사칙연산 숙달 문항이라 출제 슬롯보다 개념 확인 성격이 강하다. 단일 유형(base ★ 1~2)으로 세우되 변별 슬롯에서는 제외하는 편이 낫다.
- 이 단원 범위에는 I-XU·I-SC 통찰이 한 건도 없어 ★5 슬롯을 만들 재료가 부족하다. 실제로 ★4 여섯 문항은 모두 실력 UP 구역이고 통찰 조합이 EQV+MI / BW / EQV+CON / EQV+SYM / EQV+VF / MI+BW+VF 로 흔한 편이다. ★5 를 만들려면 `variation_notes.creative` 에 적어 둔 방향 — z³ 이 실수가 될 조건(I-PD 추가) · x²=w 의 제곱근 추출(I-BW+I-VF) · 두 복소수를 실계수 이차방정식의 두 근으로 묶기(I-XU) — 중 하나를 써야 한다.
