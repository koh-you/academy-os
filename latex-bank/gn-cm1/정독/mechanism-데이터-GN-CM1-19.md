---
name: mechanism-데이터-GN-CM1-19
description: 개념원리 공통수학1 19 삼차방정식의 근과 계수의 관계(1/1 · 169~171쪽 · 13문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학1 (22개정) · 전사본 latex-bank/gn-cm1
  section: 19 삼차방정식의 근과 계수의 관계
  unit_code: CM1-19
  part: "1/1"
  extract_range: "169~171쪽 · 169-354~171-363"
  total_problems: 13
  unit_total: 13
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·예제 태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). insight_type 은 insights 가 비어 있으면 절차형, 하나라도 있으면 통찰형. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm1/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm1/items/<id>.tex
  image_source: latex-bank/gn-cm1/figures/ (crops.json)
---

# 개념원리 공통수학1 · 19 삼차방정식의 근과 계수의 관계 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 공통수학1 19단원 「삼차방정식의 근과 계수의 관계」 169~171쪽의 13문항 전수를 다룬다. 구역은 전사본 group 순서대로 「개념원리 익히기」(4문 · 근과 계수의 관계 공식과 켤레근 성질의 개념 확인) · 「필수·발전 예제」(9문 · `쪽-eN` 필수 예제 3개와 그 유제인 확인체크 6개가 번갈아 배치)다. 그림 문항은 없다.

벤더 난이도 신호는 구역과 예제 태그로 읽는다. 「개념원리 익히기」 통번호는 개념 확인이라 ★1 출발, 「필수」 태그 예제와 그 확인체크 유제는 ★2 출발로 두고 M_total·통찰로 ±1 조정했다. 이 단원에는 level 필드와 기출 태그가 없어 vendor_level 은 모두 `-` 이고 vendor_tags 는 `필수` 또는 `확인체크` 뿐이다. 단원 전체가 세 기본대칭식(합·쌍곱합·곱)과 켤레근 성질이라는 두 도구로 덮이며, 문항 사이의 차이는 그 도구를 정방향으로 쓰는가(대칭식 값), 역방향으로 쓰는가(미정계수·방정식 세우기), 근을 변환한 뒤 쓰는가에서 갈린다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 사슬) · `insights[]`(통찰 유형·depth) · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 창의 변형과 ★ 변동 지점)를 채웠다. 답은 전사·검수 단계에서 답지와 이미 대조된 값을 그대로 옮겼고, 정독에서 재검산하지 않았다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-CM1-169-354
  page: 169
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑸ $2x^3-x^2+4x+5=0$ 의 세 근 $\alpha$, $\beta$, $\gamma$ 에 대한 식의 값. 세 기본대칭식과 그 조합(쌍곱의 역수합 · $(1+\alpha)(1+\beta)(1+\gamma)$).
  category: "근과 계수의 관계 → 세 기본대칭식 → 조합식에 대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼차방정식의 근과 계수의 관계 — 세 근의 대칭식 값"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴~⑶은 계수에서 그대로 읽고, ⑷는 통분해 (α+β+γ)/αβγ, ⑸는 전개해 1+Σα+Σαβ+αβγ 로 묶으면 각각 한 줄이다.
    세 기본대칭식만 확보하면 모든 소문항이 대입이라 착안이 필요한 단계가 없다(대칭식을 기본대칭식으로 옮기는 것은 이 절의 표준 절차).
    개념원리 익히기 구역 ★1 출발 · 통찰 0 · M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "계수에서 Σα=1/2, Σαβ=2, αβγ=-5/2 → ⑷ Σα/αβγ · ⑸ 전개해 1+Σα+Σαβ+αβγ"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\dfrac{1}{2}$ ⑵ $2$ ⑶ $-\dfrac{5}{2}$ ⑷ $-\dfrac{1}{5}$ ⑸ $1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/169-354.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 계수를 자유롭게 바꿀 수 있다. 제약: 최고차계수로 나눈 세 기본대칭식이 간단한 유리수로 떨어지게 하고, ⑷는 분모가 αβγ 이므로 상수항이 0 이면 안 된다. ⑸의 값은 x=-1 을 대입한 f(-1) 을 최고차계수로 나눈 것과 같으므로 그 값이 깔끔해지도록 상수항을 고른다."
    creative: "(1) ⑸를 $(2+\\alpha)(2+\\beta)(2+\\gamma)$ 나 $(1-\\alpha)(1-\\beta)(1-\\gamma)$ 로 바꿔 f(±k) 환원을 유도하면 I-RT 한 단계 추가 ★2 (2) α²+β²+γ² 를 섞으면 곱셈공식 변형이 붙어 ★2 (3) 계수 하나를 미지수로 두고 ⑷의 값을 먼저 주어 역으로 구하게 하면 I-BW ★3."
```

```yaml
- id: GN-CM1-169-355
  page: 169
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑶ 주어진 세 수를 근으로 하고 $x^3$ 의 계수가 $1$ 인 삼차방정식 세우기. ⑵는 무리 켤레쌍 $1\pm\sqrt{3}$, ⑶은 허수 켤레쌍 $3\pm i$ 를 포함한다.
  category: "세 근 → 합·쌍곱합·곱 → x³-(합)x²+(쌍곱합)x-(곱)=0"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "세 수를 근으로 하는 삼차방정식 세우기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    세 근에서 합·쌍곱합·곱을 계산해 공식 틀에 넣는 역방향 대입 하나로 세 소문항이 모두 끝난다.
    ⑵⑶은 켤레쌍의 합·곱(2 와 -2 · 6 과 10)을 먼저 묶으면 계산이 짧아지지만 그대로 전개해도 풀려 통찰로 세지 않았다. 부호 자리(x² 항과 상수항의 마이너스)가 유일한 함정이다.
    개념원리 익히기 ★1 출발 · 통찰 0 · M_total 6 → ★1 유지.
  tier: star_1
  mechanism_primary: "세 근의 합·쌍곱합·곱 계산 → x³-(합)x²+(쌍곱합)x-(곱)=0 에 대입"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $x^3+5x^2-2x-24=0$ ⑵ $x^3-6x-4=0$ ⑶ $x^3-5x^2+4x+10=0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/169-355.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 근을 바꾼다. 제약: 무리수·허수 근은 반드시 켤레쌍으로 넣어야 계수가 유리수·실수로 떨어진다. 정수 근은 곱의 절댓값이 지나치게 커지지 않게 10 이내로 잡는다."
    creative: "(1) $x^3$ 의 계수를 2 로 지정하면 마지막에 전체에 2 를 곱하는 단계가 붙어 ★2 (2) 세 근 중 하나만 주고 「계수가 유리수」 조건으로 나머지를 찾게 하면 356·362 골조와 합쳐져 ★2~3 (3) 두 근의 합과 곱, 나머지 한 근을 주는 형태로 바꾸면 조건을 대칭식으로 옮기는 I-EQV 가 붙어 ★2."
```

```yaml
- id: GN-CM1-169-356
  page: 169
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    삼차방정식 $x^3-ax^2-9x+b=0$ 의 두 근이 $-2$, $2+\sqrt{5}$ 일 때 유리수 $a$, $b$ 의 값.
  category: "유리계수 → 켤레무리근 도입 → 근과 계수의 관계로 미정계수 결정"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "유리계수 삼차방정식의 켤레무리근과 미정계수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    계수가 유리수라는 단서에서 2-√5 도 근임을 끌어와 세 근을 확정한 뒤, 합=a 와 곱=-b 로 두 미지수를 바로 읽는다.
    쌍곱합이 -9 와 맞는지는 확인용일 뿐 기각되는 분기가 없어 I-VF 가 아니고, 켤레근 성질은 이 단원에서 배운 정리를 직접 적용하는 것이라 통찰로 세지 않았다.
    개념원리 익히기 ★1 출발이나 미정계수 두 개 + 켤레근 도입으로 M_total 7 → 익히기 상단으로 보아 ★2.
  tier: star_2
  mechanism_primary: "유리계수 → 셋째 근 2-√5 → 합 -2+4=a · 곱 -2·(-1)=-b"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$a=2$, $b=-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/169-356.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정수 근(-2)과 무리근의 p±√q 를 바꾼다. 제약: 켤레쌍의 합·곱이 유리수라야 계수가 유리수로 떨어지고, x 항 계수(-9)는 세 근에서 계산한 쌍곱합과 반드시 일치시켜 출제해야 한다(어긋나면 해가 없는 문제가 된다)."
    creative: "(1) x 항 계수까지 미지수로 두면 연립이 한 줄 늘지만 골조는 같아 ★2 (2) 「나머지 한 근을 구하시오」로 바꾸면 362 골조 ★2 (3) 「유리수」 조건을 실수로 완화하면 켤레근을 쓸 수 없어 조건이 부족해진다 — 변형 시 반드시 계수의 수 체계를 함께 지정."
```

```yaml
- id: GN-CM1-169-357
  page: 169
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    삼차방정식 $x^3+ax^2+bx-10=0$ 의 두 근이 $1$, $1-3i$ 일 때 실수 $a$, $b$ 의 값.
  category: "실계수 → 켤레허근 도입 → 근과 계수의 관계로 미정계수 결정"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "실계수 삼차방정식의 켤레허근과 미정계수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    실계수이므로 1+3i 도 근이다. 세 근 1, 1∓3i 의 합 3 이 -a, 쌍곱합 10+2 가 b 로 바로 읽힌다. 곱이 상수항과 맞는 것은 확인용이다.
    356 의 허수판으로 골조가 같고, 켤레근 성질의 직접 적용이라 통찰 0 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "실계수 → 셋째 근 1+3i → 합 3=-a · 쌍곱합 (1-3i)(1+3i)+1·2=b"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$a=-3$, $b=12$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/169-357.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "실근 1 과 허근 p±qi 를 바꾼다. 제약: 상수항은 세 근의 곱에 부호를 붙인 값이어야 하므로 (p²+q²)·(실근) 으로 미리 계산해 맞춘다. q≠0 이어야 켤레근 성질이 쓰인다."
    creative: "(1) a, b 대신 나머지 한 근과 a+b 를 묻는 형태로 바꾸면 e9·363 골조 ★2 (2) 실근을 미지수로 두고 a 만 주면 곱·합 연립이 필요해 ★3 (3) 「한 근이 1-3i 이고 다른 한 근이 실수일 때 가능한 상수항」 으로 열어 두면 I-MI 가 붙어 ★3."
```

### 필수·발전 예제

```yaml
- id: GN-CM1-170-e7
  page: 170
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    ⑴~⑶ $x^3-3x^2+5=0$ 의 세 근 $\alpha$, $\beta$, $\gamma$ 에 대하여 $\alpha^2+\beta^2+\gamma^2$, $\alpha^3+\beta^3+\gamma^3$, $(\alpha+\beta)(\beta+\gamma)(\gamma+\alpha)$ 의 값.
  category: "기본대칭식 → 곱셈공식 변형 · 합에서 근을 빼 f(3) 로 환원"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 3
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "α+β=3-γ 로 바꿔 (3-α)(3-β)(3-γ) 즉 f(3) 으로 환원 — 근의 식을 인수분해된 다항식의 함숫값으로 옮기는 표현 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "세 근의 대칭식 값 — 제곱합·세제곱합·(α+β)(β+γ)(γ+α)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴은 (Σα)²-2Σαβ, ⑵는 Σα³-3αβγ=(Σα)(Σα²-Σαβ) 로 곱셈공식 변형을 쓰는 표준 절차다.
    ⑶에서 α+β=3-γ 로 바꾸면 식이 (3-α)(3-β)(3-γ) 가 되어 f(3) 한 번으로 끝나는 것이 이 예제의 핵심 착안이다(항등식 (Σα)(Σαβ)-αβγ 로 가는 길도 있다).
    필수 예제 ★2 출발 · 통찰 1개(RT d1) · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "Σα=3, Σαβ=0, αβγ=-5 → ⑴⑵ 곱셈공식 변형 · ⑶ α+β=3-γ 로 f(3) 환원"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $9$ ⑵ $12$ ⑶ $5$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/170-e7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x² 계수와 상수항을 바꾼다(x 항 계수 0 은 ⑴을 가볍게 하려는 설정이라 0 이 아니게 하면 난도가 조금 오른다). 제약: ⑶은 f(Σα) 값이므로 Σα 를 정수로 유지해야 대입이 깔끔하고, ⑵는 (Σα)³-3ΣαΣαβ+3αβγ 로 정리되므로 세 기본대칭식이 모두 정수가 되게 고른다."
    creative: "(1) ⑶을 $(\\alpha+\\beta-1)(\\beta+\\gamma-1)(\\gamma+\\alpha-1)$ 로 바꾸면 f(2) 환원으로 같은 골조 ★2 (2) α⁴+β⁴+γ⁴ 를 물으면 각 근이 방정식을 만족한다는 α³=3α²-5 를 쓰게 되어 I-EQV 한 단계 추가 ★3 (3) 1/α²+1/β²+1/γ² 를 섞으면 역수 대칭식과 결합해 ★3."
```

```yaml
- id: GN-CM1-170-358
  page: 170
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑶ $x^3+2x^2+3x+4=0$ 의 세 근 $\alpha$, $\beta$, $\gamma$ 에 대하여 $\dfrac{1}{\alpha}+\dfrac{1}{\beta}+\dfrac{1}{\gamma}$, $(\alpha+\beta)(\beta+\gamma)(\gamma+\alpha)$, $\dfrac{\gamma}{\alpha\beta}+\dfrac{\alpha}{\beta\gamma}+\dfrac{\beta}{\gamma\alpha}$ 의 값.
  category: "기본대칭식 → 역수합·f(-2) 환원·제곱합을 곱으로 나누기"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "α+β=-2-γ 로 바꿔 (-2-α)(-2-β)(-2-γ) 즉 f(-2) 로 환원 — e7⑶ 과 같은 표현 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "세 근의 대칭식 값 — 역수합·(α+β)(β+γ)(γ+α)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    Σα=-2, Σαβ=3, αβγ=-4 를 먼저 읽는다. ⑴은 통분해 Σαβ/αβγ, ⑶은 분자를 α²+β²+γ² 로 묶어 αβγ 로 나누는 표준 변형이다.
    ⑵는 e7⑶ 과 같은 골조로 α+β=-2-γ 치환 뒤 f(-2) 로 환원된다(항등식 (Σα)(Σαβ)-αβγ 경로도 같은 값).
    확인체크 ★2 출발 · 통찰 1개(RT d1) · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "Σα=-2, Σαβ=3, αβγ=-4 → ⑴ Σαβ/αβγ · ⑵ f(-2) 환원 · ⑶ (Σα²)/αβγ"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $-\dfrac{3}{4}$ ⑵ $-2$ ⑶ $\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/170-358.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 계수를 바꾼다. 제약: ⑴⑶의 분모가 αβγ 이므로 상수항이 0 이면 안 되고, 세 기본대칭식이 정수라야 분수 답이 간단해진다. ⑵는 f(Σα) 이므로 Σα 를 정수로 유지한다."
    creative: "(1) ⑶을 $\\dfrac{\\alpha^2}{\\beta\\gamma}+\\dfrac{\\beta^2}{\\gamma\\alpha}+\\dfrac{\\gamma^2}{\\alpha\\beta}$ 로 바꾸면 분자가 세제곱합이 되어 곱셈공식 변형이 한 겹 늘어 ★3 (2) ⑵를 (α+β)(β+γ)(γ+α) 대신 (α+β-γ)(…) 꼴로 바꾸면 치환이 두 번 필요해 ★3 (3) 세 값을 주고 계수를 역으로 찾게 하면 I-BW ★3."
```

```yaml
- id: GN-CM1-170-359
  page: 170
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $x^3-x^2+3x-3=0$ 의 세 근 $\alpha$, $\beta$, $\gamma$ 에 대하여 $\dfrac{\beta+\gamma}{\alpha}+\dfrac{\gamma+\alpha}{\beta}+\dfrac{\alpha+\beta}{\gamma}$ 의 값.
  category: "분자를 합에서 자기 근을 뺀 꼴로 → 역수합 - 3 으로 환원"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "분자 β+γ 를 (α+β+γ)-α=1-α 로 바꿔 식 전체를 Σ(1/α)-3 으로 무너뜨리는 동치 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "세 근의 대칭식 값 — 합에서 근을 뺀 분자의 환원"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    각 분자를 1-α 꼴로 바꾸면 식이 (1/α+1/β+1/γ)-3 으로 정리되고, 그 뒤는 Σαβ/αβγ=3/3=1 한 줄이다.
    이 치환을 못 보면 통분 계산이 길어지므로 착안 1개(EQV d1)로 셌다. 계산량 자체는 가볍다.
    확인체크 ★2 출발 · 통찰 1개 · M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "β+γ=1-α 치환 → Σ(1/α)-3 → (Σαβ/αβγ)-3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/170-359.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 계수를 바꾼다. 제약: Σα 와 Σαβ/αβγ 가 모두 간단한 유리수여야 한다. 상수항이 0 이면 근 하나가 0 이 되어 분모가 사라지므로 금지."
    creative: "(1) 분자를 β+γ+1 처럼 상수를 더한 꼴로 두면 같은 골조에 한 단계만 추가 ★2 (2) $\\dfrac{(\\beta+\\gamma)(\\gamma+\\alpha)(\\alpha+\\beta)}{\\alpha\\beta\\gamma}$ 로 바꾸면 f(Σα) 환원과 결합해 ★3 (3) 값을 먼저 주고 계수 하나를 구하게 하면 I-BW ★3."
```

```yaml
- id: GN-CM1-170-360
  page: 170
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    삼차방정식 $x^3-12x^2+ax+b=0$ 의 세 근의 비가 $1:2:3$ 일 때 실수 $a$, $b$ 의 값.
  category: "비 조건을 k, 2k, 3k 로 → 합에서 k 결정 → 쌍곱합·곱으로 미정계수"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「세 근의 비가 1:2:3」 이라는 말 조건을 k, 2k, 3k 한 매개변수로 옮겨 근과 계수의 관계에 넣을 수 있는 형태로 바꿈"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "세 근의 비가 주어진 삼차방정식의 미정계수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    비 조건을 k, 2k, 3k 로 놓는 순간 합 6k=12 에서 k=2 가 정해지고 세 근 2, 4, 6 이 확정된다. 그 뒤 a=쌍곱합, b=-곱 은 대입이다.
    매개변수 도입이 유일한 착안(EQV d1)이고 나머지는 계산이라 확인체크 ★2 출발 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "근을 k, 2k, 3k 로 두고 6k=12 → k=2 → 근 2, 4, 6 → a=쌍곱합 · b=-곱"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$a=44$, $b=-48$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/170-360.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "비(1:2:3)와 x² 계수를 바꾼다. 제약: 비의 합이 x² 계수의 부호를 바꾼 값을 나누어떨어지게 해야 k 가 정수로 떨어진다(1:2:3 이면 6의 배수). 비에 음수를 섞으면 k 의 부호 판단이 추가된다."
    creative: "(1) 「세 근이 등차수열을 이룬다」 로 바꾸면 가운데 근이 합의 1/3 로 즉시 나와 ★2 (2) 「세 근이 연속한 정수」 로 바꾸면 매개변수 도입 없이도 풀려 ★1~2 (3) a 만 주고 비를 구하게 하면 역방향이라 I-BW 가 붙어 ★3."
```

```yaml
- id: GN-CM1-171-e8
  page: 171
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    $x^3-3x^2-2x-1=0$ 의 세 근 $\alpha$, $\beta$, $\gamma$ 에 대하여 $\alpha+1$, $\beta+1$, $\gamma+1$ 을 세 근으로 하고 $x^3$ 의 계수가 $1$ 인 삼차방정식 구하기.
  category: "근의 평행이동 → 새 세 대칭식 환산(또는 x 자리에 x-1 대입) → 방정식 세우기"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "근을 1 만큼 옮긴 방정식을 f(x-1)=0 으로 보는 표현 전환. 같은 착안의 대수판이 새 대칭식을 Σα+3, Σαβ+2Σα+3, αβγ+Σαβ+Σα+1 로 환산하는 길이다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "근을 평행이동한 삼차방정식 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    길이 둘이다. (가) x 자리에 x-1 을 넣어 f(x-1)=0 을 전개, (나) 새 세 대칭식을 원래 대칭식으로 환산해 공식 틀에 대입.
    어느 쪽이든 「근의 변환 = 식의 치환」 이라는 표현 전환이 출발점이라 RT d2 로 셌고, 전개·환산 어느 쪽도 계산이 가볍지 않다.
    필수 예제 ★2 출발 · depth 2 통찰 + 전개 부담 → ★3.
  tier: star_3
  mechanism_primary: "α+1 을 근으로 → f(x-1)=0 전개(또는 새 합 6·쌍곱합 7·곱 3 환산) → x³-6x²+7x-3=0"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$x^3-6x^2+7x-3=0$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/171-e8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "원 방정식의 네 계수와 평행이동 폭(+1 → +2, -3 등)을 바꾼다. 제약: 이동 폭이 커지면 전개 계수가 급히 커지므로 절댓값 3 이내로. 원 방정식의 세 기본대칭식이 정수면 새 계수도 정수로 떨어진다."
    creative: "(1) $2\\alpha$, $2\\beta$, $2\\gamma$ 를 근으로 하면 x/2 치환이라 같은 골조 ★3 (2) $\\alpha^2$ 를 근으로 하면 대칭식 환산이 훨씬 무거워지고 케이스 확인이 붙어 ★4 (3) 새 방정식의 계수를 주고 원 방정식을 찾게 하면 역방향이라 I-BW 추가 ★4."
```

```yaml
- id: GN-CM1-171-e9
  page: 171
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    삼차방정식 $x^3+ax^2-4x+b=0$ 의 한 근이 $1+i$ 일 때 실수 $a$, $b$ 에 대하여 $a+b$ 의 값.
  category: "실계수 → 켤레허근 → 쌍곱합에서 나머지 근 역산 → a, b"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "실계수 삼차방정식의 켤레허근 — 미정계수의 합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    실계수이므로 1-i 도 근이다. 나머지 한 근을 γ 로 두면 켤레쌍의 합 2·곱 2 를 써서 쌍곱합 2+2γ=-4 에서 γ=-3 이 바로 나오고, 합과 곱으로 a, b 를 읽는다.
    미지의 셋째 근을 두는 것은 미정계수 대입 수준이라 통찰로 세지 않았다(스키마 I-BW 판별에서 제외).
    필수 예제 ★2 출발 · 통찰 0 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "켤레근 1-i 도입 → 쌍곱합 2+2γ=-4 → γ=-3 → a=-(합) · b=-(곱) → a+b"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$7$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/171-e9.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "허근 p+qi 와 x 항 계수를 바꾼다. 제약: 쌍곱합 식 (p²+q²)+2pγ = (x 항 계수) 에서 γ 가 유리수로 떨어져야 하고, p≠0 이어야 γ 가 결정된다(p=0 이면 쌍곱합에서 γ 가 사라져 조건이 부족해진다)."
    creative: "(1) a+b 대신 나머지 두 근을 물으면 362·363 골조 ★2 (2) 한 근을 「순허수」 로만 주면 케이스 판단이 붙어 ★3 (3) 계수를 유리수로 제한하고 근을 $1+\\sqrt{2}$ 로 바꾸면 무리켤레 버전 ★2."
```

```yaml
- id: GN-CM1-171-361
  page: 171
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $x^3-3x^2-x+1=0$ 의 세 근 $\alpha$, $\beta$, $\gamma$ 에 대하여 $\dfrac{1}{\alpha}$, $\dfrac{1}{\beta}$, $\dfrac{1}{\gamma}$ 을 세 근으로 하고 $x^3$ 의 계수가 $1$ 인 삼차방정식 구하기.
  category: "역수근의 세 대칭식을 원래 대칭식의 비로 환산 → 방정식 세우기"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "역수근의 합·쌍곱합·곱을 Σαβ/αβγ, Σα/αβγ, 1/αβγ 로 옮기는 표현 전환. 결과가 원 방정식의 계수를 뒤집은 꼴이라는 구조를 보면 한 줄로 끝난다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "역수근을 갖는 삼차방정식 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    Σα=3, Σαβ=-1, αβγ=-1 에서 새 합=Σαβ/αβγ, 새 쌍곱합=Σα/αβγ, 새 곱=1/αβγ 를 환산해 공식 틀에 조립한다.
    세 대칭식을 모두 「원래 대칭식의 비」 로 옮겨야 해서 e8 과 같은 근 변환 골조이고, 답이 원 방정식의 계수를 뒤집은 꼴이라는 점을 알면 검산이 쉽다(RT d2).
    확인체크 ★2 출발 · depth 2 통찰 + 세 번의 환산 → ★3.
  tier: star_3
  mechanism_primary: "1/α 의 합·쌍곱합·곱을 Σαβ/αβγ, Σα/αβγ, 1/αβγ 로 환산 → 계수가 역순인 x³-x²-3x+1=0"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$x^3-x^2-3x+1=0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/171-361.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "원 방정식의 네 계수를 바꾼다. 제약: 상수항이 0 이면 역수근이 정의되지 않으므로 반드시 0 이 아니어야 하고, 새 방정식의 최고차계수를 1 로 맞추려면 각 대칭식을 αβγ 로 나눈 값이 정수가 되게(상수항 ±1 이 가장 깔끔) 고른다."
    creative: "(1) $-\\dfrac{1}{\\alpha}$ 를 근으로 하면 부호 처리가 한 겹 추가돼 ★3 (2) $\\dfrac{\\alpha}{\\beta\\gamma}$ 를 근으로 하면 αβγ 환산이 한 겹 더 필요해 ★4 (3) 「계수가 역순이 되는 이유를 설명하시오」 로 바꾸면 구조 설명 서술형 ★3."
```

```yaml
- id: GN-CM1-171-362
  page: 171
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    삼차방정식 $x^3+ax^2+bx+6=0$ 의 한 근이 $1+\sqrt{2}$ 일 때($a$, $b$ 는 유리수) 나머지 두 근의 합.
  category: "유리계수 → 켤레무리근 → 세 근의 곱에서 셋째 근 → 나머지 두 근의 합"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "유리계수 삼차방정식의 켤레무리근 — 나머지 두 근"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    유리계수라 1-√2 도 근이고, 세 근의 곱이 -6 이므로 켤레쌍의 곱 -1 로 나눠 셋째 근 6 을 얻는다.
    묻는 것이 「나머지 두 근」, 즉 주어진 근 하나를 뺀 1-√2 와 6 의 합이라 세 근의 합 -a 와 혼동하기 쉬운 표기 함정이 이 문항의 실제 변별점이다.
    통찰 0 · M_total 7 · 확인체크 ★2 출발 → ★2. [분류 이슈] 함정 때문에 체감은 ★3 쪽이나 벤더 신호를 따라 ★2 로 두고 기록만 한다.
  tier: star_2
  mechanism_primary: "켤레근 1-√2 → (1+√2)(1-√2)γ=-6 → γ=6 → 나머지 두 근 1-√2 와 6 의 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$7-\sqrt{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/171-362.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "무리근 p+√q 와 상수항을 바꾼다. 제약: 켤레쌍의 곱 p²-q 가 상수항의 부호를 바꾼 값을 나누어떨어지게 해야 셋째 근이 유리수로 떨어지고, p²-q=0 이 되면 안 된다."
    creative: "(1) 「세 근의 합」 으로 물으면 표기 함정이 사라져 ★1~2 (2) a, b 를 함께 구하게 하면 356 골조와 합쳐져 ★2 (3) 상수항 대신 x 항 계수를 주면 셋째 근을 이차식에서 역산해야 해 ★3."
```

```yaml
- id: GN-CM1-171-363
  page: 171
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    삼차방정식 $x^3+ax^2+bx-5=0$ 의 두 근이 $2-i$, $c$ 일 때 실수 $a$, $b$, $c$ 에 대하여 $a+b+c$ 의 값.
  category: "실계수 → 켤레허근 → 곱에서 c → 합·쌍곱합으로 a, b"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "실계수 삼차방정식의 켤레허근 — 나머지 근과 미정계수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    실계수이므로 2+i 도 근이다. 세 근의 곱 (2-i)(2+i)c=5c 가 5 와 같아 c=1, 그다음 합에서 a, 쌍곱합에서 b 를 차례로 읽으면 끝난다.
    362 의 허수판으로 골조가 같고 켤레쌍의 합 4·곱 5 만 확보하면 계산이 짧다. 통찰 0 · M_total 7 · 확인체크 ★2 출발 → ★2.
  tier: star_2
  mechanism_primary: "켤레근 2+i → 곱 5c=5 → c=1 → a=-(합) · b=쌍곱합 → a+b+c"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/171-363.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "허근 p±qi 와 상수항을 바꾼다. 제약: (p²+q²)c 가 상수항의 부호를 바꾼 값과 같아야 하므로 상수항을 p²+q² 의 배수로 잡아야 c 가 정수로 떨어진다."
    creative: "(1) c 를 주고 상수항을 미지로 두면 역방향이라 I-BW 한 단계 ★3 (2) a+b+c 대신 abc 를 물으면 계산만 늘고 골조는 같아 ★2 (3) 두 근을 $2-i$, $2+i$ 로 모두 주면 켤레근 성질이 필요 없어져 ★1~2."
```

## 표본 판정 요약 (13문)

- ★ 분포: ★1 2 · ★2 9 · ★3 2 · ★4 0 · ★5 0
- 통찰형 6(e7 · 358 · 359 · 360 · e8 · 361) · 절차형 7 · premium 0
- 통찰 유형 분포: I-RT 4(e7 · 358 · e8 · 361) · I-EQV 2(359 · 360) · depth 3 없음 · SC/VF/SYM/XU 없음 → ★5 자격 문항 없음
- type_hint 상위: 「세 근의 대칭식 값」 4(354 · e7 · 358 · 359) · 「켤레근과 미정계수 결정」 4(356 · 357 · e9 · 363) · 「근을 변환한 삼차방정식 세우기」 3(355 · e8 · 361) · 「세 근의 비 조건」 1(360) · 「켤레무리근 — 나머지 두 근」 1(362)
- M_total 분포: 5 → 2문 · 6 → 5문 · 7 → 6문 (Mₜ 은 전 문항 1 · Mₐ 는 미정계수 문항만 2)
- 그림: 0문 · 소문항(⑴~⑶ 이상)으로 묶인 문항: 4문(354 · 355 · e7 · 358)
- answer 는 전사본 값을 그대로 옮겼고 정독에서 재검산하지 않았다. 골조를 잡는 동안 답과 어긋나 보이는 문항은 없었다.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CM1-171-362 | 「나머지 두 근의 합」 표기 함정(세 근의 합 -a 와 혼동)이 실제 변별점이라 체감은 ★3 쪽이나, 통찰 0 · 확인체크 벤더 신호를 따라 ★2 로 둠 | ★2 / ★3 |
| GN-CM1-171-e8 | 벤더 예제 제목이 「세 수를 근으로 하는 삼차방정식」(355 와 같은 이름)이지만 실제 골조는 근의 평행이동 → 치환이다. type_hint 를 벤더 제목이 아니라 골조 이름으로 붙였고, ★도 출발점보다 1단 올림 | ★2 / ★3 |
| GN-CM1-169-356 · 169-357 | 구역은 「개념원리 익히기」(★1 출발)이나 미정계수 2개 + 켤레근 도입으로 M_total 7 이라 ★2 로 올림. 익히기 구역 안에서 354·355 와 한 단 차이가 생김 | ★1 / ★2 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위는 **정방향(대칭식 값) · 역방향(미정계수·방정식 세우기) · 근 변환** 세 갈래로 깨끗이 나뉜다. 카탈로그에도 이 세 유형을 따로 세우는 편이 낫다.
- 「세 근의 대칭식 값」(354 · e7 · 358 · 359)은 묻는 식만 다를 뿐 골조가 같아 한 유형으로 묶고, 안에서 base ★ 를 소문항 구성(단순 대입 ★1 / f(Σα) 환원·역수합 포함 ★2)으로 가르는 것이 실제 체감과 맞는다.
- 「켤레근 + 미정계수」(356 · 357 · e9 · 362 · 363)는 무리켤레·허수켤레가 계산만 다르고 골조가 동일하므로 한 유형으로 통합하되, 362 처럼 「나머지 두 근」 을 묻는 표기 함정 변형은 하위 슬롯으로 따로 표시해 둔다.
- 「근을 변환한 방정식 세우기」(e8 · 361)는 355(세 수를 근으로 하는 기본형)와 반드시 분리한다. 355 는 근이 수로 주어지고, e8·361 은 근이 다른 방정식의 근으로 주어져 대칭식 환산이나 치환이 필요하다 — base ★ 가 한 단 이상 차이 난다.
- 이 단원에는 SC/VF/SYM/XU 통찰이 하나도 없어 ★4~5 슬롯 자격 문항이 없다. 변형으로 ★4 를 만들려면 e8·361 계열에서 근을 $\alpha^2$ 나 $\alpha/\beta\gamma$ 로 바꿔 환산을 한 겹 더 쌓거나, 역방향(새 방정식 → 원 방정식)으로 뒤집어 I-BW 를 추가하는 길이 가장 자연스럽다.
