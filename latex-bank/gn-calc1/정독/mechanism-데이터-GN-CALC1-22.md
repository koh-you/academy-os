---
name: mechanism-데이터-GN-CALC1-22
description: 개념원리 미적분Ⅰ 22 정적분으로 정의된 함수(1/1 · 192~201쪽 36문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 미적분Ⅰ · 전사본 latex-bank/gn-calc1
  section: 22 정적분으로 정의된 함수
  unit_code: CALC1-22
  part: "1/1"
  extract_range: "192~201쪽 · 192-392~201-421"
  total_problems: 36
  unit_total: 36
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·level·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). depth_score 는 insights[] 의 effective_depth 평균(소수 2자리 · 통찰 0 이면 0.00). insight_type 은 insights 유무로만 정함(비면 절차형 · 하나라도 있으면 통찰형). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-calc1/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-calc1/items/<id>.tex
  image_source: latex-bank/gn-calc1/figures/ (crops.json)
---

# 개념원리 미적분Ⅰ · 22 정적분으로 정의된 함수 (1/1) 정독 데이터 (v1.0)

이 파일은 192~201쪽 36문항 전수를 다룬다. 구역은 다섯이다 — 「개념원리 익히기」 3문(192쪽 통번호 392~394), 「필수·발전 예제」 17문(193~198쪽 · 필수 예제 6 + 확인체크 11), 「연습문제 STEP 1」 7문, 「STEP 2」 6문, 「실력 UP」 3문. 그림은 두 문항(196-401 · 201-417)에만 있고 둘 다 **이차함수 그래프에서 식을 복원**하는 데 쓰인다.

단원의 도구는 사실상 하나다 — **적분 구간의 끝이 변수면 미분해서 피적분함수를 꺼내고, 적분 구간이 상수면 그 정적분은 미지수 하나짜리 상수다.** 36문항은 이 두 줄을 어떤 형태로 위장하느냐로 층이 갈린다.

1. **상수 치환**(e9 · 395 · 406 · 413 · 414): `∫₀¹f(t)dt = k` 로 두고 원식에 되먹여 `k` 에 대한 방정식을 만든다. 적분 안에 `x` 가 섞여 있으면(`(x-t)f(t)`) `x` 를 적분 밖으로 먼저 빼내야 치환이 성립한다 — 이 분리가 이 단원의 첫 통찰(I-EQV)이다.
2. **양변 미분**(e10 · 396 · 397 · 407 · 415): `xf(x) = … + ∫₃ˣf(t)dt` 처럼 좌변에 곱이 있으면 미분할 때 `f(x)` 가 양변에서 소거되고 `f′` 에 대한 식만 남는다. 상수는 적분항이 0 이 되는 `x=a` 를 대입해 정한다.
3. **(x-t) 꼴 두 번 미분**(e11 · 398 · 399 · 410): `∫ₐˣ(x-t)f(t)dt` 를 `x∫ₐˣf - ∫ₐˣtf` 로 쪼갠 뒤 미분하면 `xf(x)` 가 상쇄돼 `∫ₐˣf(t)dt` 가 나오고, 한 번 더 미분해야 `f(x)` 가 나온다. 이 범위에서 가장 잘 막히는 지점이고 ★3 이 여기서 나온다.
4. **부호 번역**(e12 · 400 · 401 · e13 · 402 · 403 · 409 · 411 · 416 · 417 · 420): `F′=f` 이므로 극값·최대최소·증가 조건은 전부 `f` 의 부호 문제로 바뀐다. 양끝이 모두 변수인 `∫ₓ^{x+1}` 은 미분이 `f(x+1)-f(x)` 라 한 단계가 더 붙는다.
5. **극한 → 미분계수**(394 · e14 · 404 · 405 · 412 · 418 · 421): `1/(x-a)∫ₐˣ` 는 `f(a)`. 구간 방향이 뒤집히거나(`∫ₓ²`) 폭이 `2h`·`[a-h, a+h]` 로 바뀌거나 분모가 `x²-9` 이면 그 보정이 통찰이 된다.

벤더 난이도 신호: 「개념원리 익히기」 통번호 ★1 출발, 「필수 예제」(tag `필수`)와 그 아래 `확인체크` ★2 출발, level `STEP 1` ★2 · `STEP 2` ★3 · `실력 UP` ★4 출발. `평가원 기출`·`교육청 기출` 태그는 통찰 유무로 +0~1. 이 범위는 `발전` 예제와 `특강` 구역이 없어 층이 비교적 평탄하다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다. 이 단원의 숫자 변형은 특히 잘 깨진다 — 상수 치환식 `k = …` 가 유리해로 떨어져야 하고(406 은 완전제곱이라 근이 하나), 적분항이 사라지는 대입점의 값이 답과 모순되지 않아야 하며(396 은 `a<0` 이 없으면 답이 둘), 그림 문항은 `x` 절편 라벨이 식 복원의 유일한 근거라 고정해야 한다. `variation_notes.numeric` 에 그 제약을 같이 적었다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-CALC1-192-392
  page: 192
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ 정적분으로 정의된 함수의 미분값 구하기. ⑴⑵ 는 아래끝이 상수·위끝이 $x$ 인 꼴, ⑶⑷ 는 아래끝 $x$·위끝 $x+1$(또는 $x+2$)로 양끝이 모두 변수인 꼴.
  category: "정적분 미분 공식 → 양끝이 변수면 F(x+k)-F(x) 로 처리"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∫_a^x f(t)dt 꼴의 미분 (양끝이 x 인 경우 포함)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴⑵ 는 공식 그대로 피적분함수에 $x$ 를 대입해 끝. ⑶⑷ 는 아래끝도 변수라 공식을 그대로 쓰면 틀린다 — $F(x+1)-F(x)$ 로 보고 미분해 $f(x+1)-f(x)$ 를 써야 한다(T-표기 함정 1개).
    익히기 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "d/dx ∫_a^x f = f(x) · 양끝 변수면 F(x+k)-F(x) → f(x+k)-f(x)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $x^2+2$ ⑵ $5x^3-3x^2$ ⑶ $-1$ ⑷ $4x$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/192-392.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "피적분함수의 다항계수는 자유. 아래끝 상수(0·2)는 ⑴⑵ 에서 답에 영향이 없으므로 아무 값이나 가능. ⑶⑷ 의 구간 폭(1·2)은 바꿔도 되지만 $f(x+k)-f(x)$ 가 상수(⑶)로 떨어지려면 피적분함수가 일차여야 한다."
    creative: "(1) $\\int_{x^2}^{x}$ 처럼 끝을 합성으로 주면 연쇄법칙이 붙어 ★2 (2) 미분 결과를 주고 피적분함수를 되묻기(역방향 ★2) (3) 구간 폭을 문자 $h$ 로 두고 $h\\to0$ 극한과 연결하면 394 와 합쳐져 ★2."
```

```yaml
- id: GN-CALC1-192-393
  page: 192
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ 모든 실수 $x$ 에서 $\int_{a}^{x}f(t)\,dt$ 가 주어진 다항식과 같을 때 $f(x)$ 구하기.
  category: "양변 미분 → f(x)=g'(x)"
  M: {s: 1, k: 1, a: 2, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∫_a^x f(t)dt = g(x) 에서 f(x) 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    네 문항 모두 양변을 $x$ 로 미분하면 끝난다. 아래끝 상수가 답에 영향을 주지 않는다는 점(대입해 보면 우변이 0 이 되는 정합성 확인용일 뿐)을 알면 한 줄.
    익히기 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "∫_a^x f = g(x) → 양변 미분 → f(x)=g'(x)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $f(x)=4x-5$ ⑵ $f(x)=-2x+3$ ⑶ $f(x)=9x^2-6$ ⑷ $f(x)=2x-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/192-393.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 다항식의 계수는 자유. 단 아래끝 $a$ 를 대입했을 때 우변이 0 이 되어야 등식이 실제로 성립한다(⑴ 은 $x=1$ 에서 $2-5+3=0$ · ⑷ 는 $x=3$ 에서 0) — 계수를 바꾸면 아래끝도 함께 맞춰야 한다."
    creative: "(1) 우변에 미지상수를 넣고 $a$ 대입 조건으로 상수를 정하게 하면 ★2(396 골조) (2) 우변을 인수분해형으로 주기(⑷ 처럼) (3) 좌변을 $\\int_{a}^{x}(x-t)f(t)dt$ 로 바꾸면 두 번 미분이 필요해 ★2~3(e11 골조)."
```

```yaml
- id: GN-CALC1-192-394
  page: 192
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴ $\lim_{x\to1}\frac{1}{x-1}\int_{1}^{x}(3t+6)\,dt$ ⑵ $\lim_{h\to0}\frac{1}{h}\int_{0}^{h}(2x^2-3)\,dx$ 의 극한값.
  category: "정적분 함수의 미분계수 정의 → f(a)"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정적분으로 정의된 함수의 극한 (미분계수 정의)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    $F(x)=\int_{a}^{x}f$ 로 두면 두 식 모두 $\lim (F(x)-F(a))/(x-a)=F'(a)=f(a)$ 의 표준 꼴 그대로다. 보정할 것이 없어 피적분함수에 $a$ 를 대입하면 끝.
    익히기 구역·통찰 없음·M_total 3 → ★1.
  tier: star_1
  mechanism_primary: "1/(x-a)·∫_a^x f → F'(a) → f(a) 대입"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $9$ ⑵ $-3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/192-394.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "피적분함수와 기준점 $a$ 는 자유(답 = $f(a)$). 제약: 분모가 정확히 $x-a$ · $h$ 여야 보정이 없다."
    creative: "(1) 구간을 $[a, a+2h]$ 나 $[a-h, a+h]$ 로 바꾸면 배율 보정이 붙어 ★2(e14·404 골조) (2) 위끝을 $x^2$ 로 두면 분모 맞추기가 필요해 ★3(404⑴) (3) 극한값을 주고 피적분함수의 상수를 되묻기(★2 · 405 골조)."
```

### 필수·발전 예제

```yaml
- id: GN-CALC1-193-e9
  page: 193
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ $f(x)=x^3-3x^2+4\int_{0}^{1}f(t)\,dt$ ⑵ $f(x)=x^2+\int_{0}^{2}(x-t)f(t)\,dt$ 를 만족시키는 $f(x)$ 구하기.
  category: "적분 구간이 상수 → 정적분을 미지수로 치환 → 되먹여 방정식"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "⑵ 의 적분 안 $(x-t)$ 에서 $x$ 는 적분변수가 아니므로 $x\\int_{0}^{2}f - \\int_{0}^{2}tf$ 로 분리해야 상수 치환이 성립"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "적분 구간이 상수인 경우 — 정적분을 상수로 치환"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 $\int_{0}^{1}f=k$ 한 개로 끝나지만 ⑵ 는 적분 안에 $x$ 가 섞여 있어 그대로는 치환이 안 된다. $x$ 를 적분 밖으로 빼내면 미지수가 $\int f$ · $\int tf$ 두 개인 연립이 된다.
    필수 예제 출발 ★2 · 통찰 1개(EQV d1) · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "∫상수구간 f = k 치환 → (x-t) 는 x 분리 후 두 상수로 → 원식에 되먹여 연립"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $f(x)=x^3-3x^2+1$ ⑵ $f(x)=x^2-\dfrac{4}{3}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/193-e9.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "앞항 다항식과 적분 앞 계수는 자유. 제약: 치환 후 나오는 $k$ 의 일차방정식이 $(1-c)k = \\cdots$ 꼴이라 적분 앞 계수가 1 이 되면 해가 없거나 무수히 많아진다(⑴ 에서 $4\\int_{0}^{1}t^0$ 류 계수를 1 로 만들지 말 것). ⑵ 는 두 미지수 연립의 판별식이 0 이 되지 않게."
    creative: "(1) 적분 구간을 $[0,a]$ 로 두고 $a$ 를 되묻기(★3) (2) $f(x)$ 대신 $f'(x)$ 를 적분 안에 넣기(★3) (3) $(x-t)^2 f(t)$ 로 차수를 올리면 미지수가 셋이 돼 ★3~4."
```

```yaml
- id: GN-CALC1-193-395
  page: 193
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑶ 적분 구간이 상수인 정적분이 섞인 등식에서 $f(x)$ 구하기. ⑴ $\int_{0}^{1}tf(t)dt$ ⑵ $\int_{0}^{2}(3x+1)f(t)dt$ ⑶ $\int_{0}^{1}(2x-t)f(t)dt$.
  category: "적분 구간이 상수 → 미지수 치환 → 되먹여 연립"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "⑵⑶ 은 적분 안의 $x$ 를 상수로 보고 밖으로 빼내야 ⑴ 과 같은 치환 골조로 환원됨"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "적분 구간이 상수인 경우 — 정적분을 상수로 치환"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e9 의 확인 문항이라 골조가 같다. ⑴ 은 $\int_{0}^{1}tf(t)dt=k$ 하나, ⑵ 는 $(3x+1)$ 이 통째로 밖으로 나와 미지수 하나, ⑶ 은 $2x\int f - \int tf$ 로 미지수 둘.
    필수 예제 아래 확인체크 출발 ★2 · 통찰 1개(EQV d1) → ★2.
  tier: star_2
  mechanism_primary: "적분 밖으로 x 분리 → ∫f=p, ∫tf=q 치환 → 되먹여 p·q 연립"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $f(x)=-2x^2+3x+1$ ⑵ $f(x)=x^2-\dfrac{8}{7}x-\dfrac{8}{21}$ ⑶ $f(x)=3x^2+\dfrac{9}{4}x-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/193-395.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "앞 다항식과 가중치($t$ · $3x+1$ · $2x-t$)의 계수는 자유이나 되먹인 뒤 미지수 연립의 계수행렬이 정칙이어야 한다(⑵ 의 $-8/7$ · ⑶ 의 $9/4$ 처럼 답이 분수가 되는 것은 정상). 적분 구간을 넓히면 분모가 급격히 커진다."
    creative: "(1) 가중치를 $t^2$ 로 올려 미지수를 셋으로(★3) (2) 구하는 대상을 $f(x)$ 가 아니라 $\\int_{0}^{1}f(t)dt$ 자체로 바꾸면 치환 한 번에 끝나 ★1~2 (3) $f$ 를 이차로 가정하지 않고 다항함수라고만 주면 차수 결정이 먼저라 ★3."
```

```yaml
- id: GN-CALC1-194-e10
  page: 194
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ $\int_{1}^{x}f(t)dt=x^4+x^3-2ax$ 일 때 $f(1)$ ⑵ $xf(x)=\frac{2}{3}x^3+\int_{3}^{x}f(t)dt$ 일 때 $f(2)$.
  category: "양변 미분 + 적분항이 0 이 되는 점 대입으로 상수 결정"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "적분 구간에 변수가 있는 경우 — 양변 미분·대입"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 $x=1$ 대입으로 좌변이 0 이 되어 $a$ 가 정해지고, 미분해 $f$ 를 얻는다. ⑵ 는 좌변이 곱이라 미분하면 $f(x)+xf'(x)$ 가 나오고 우변의 $f(x)$ 와 소거되어 $f'$ 식만 남는다. 둘 다 이 구역이 가르치는 표준 두 수(미분·대입)를 순서대로 쓰는 것이라 통찰로 세지 않았다.
    필수 예제 출발 ★2 · 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "양변 미분(좌변 곱은 곱의 미분) → f 소거 → f' 적분 → 적분항 0 되는 점 대입으로 상수"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $5$ ⑵ $1$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/194-e10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 우변 다항식 계수는 자유이되 $x=1$ 대입식이 $a$ 에 대한 일차식으로 풀려야 한다. ⑵ 는 $xf(x)$ 의 좌변 인자와 우변 최고차를 맞춰야 $f'$ 가 다항식으로 떨어진다(여기선 $f'=2x$). 아래끝 3 을 바꾸면 적분상수가 함께 바뀐다."
    creative: "(1) 좌변을 $x^2f(x)$ 로 올리기(397 골조 · ★2) (2) 묻는 값을 $f(1)$ 이 아니라 $f$ 의 최솟값으로(407 골조 · ★2) (3) 상수 $a$ 에 $a>0$ 같은 조건을 붙여 이차방정식 근을 고르게 하면 T-범위 함정이 생겨 ★2~3."
```

```yaml
- id: GN-CALC1-194-396
  page: 194
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $\int_{a}^{x}f(t)dt=x^2-3x-10$ ($a<0$)일 때 $f(a)$ 의 값.
  category: "x=a 대입 → a 결정(조건으로 근 선별) → 미분한 f 에 대입"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "적분 구간에 변수가 있는 경우 — 양변 미분·대입"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $x=a$ 를 넣으면 좌변이 0 이므로 $a$ 는 $x^2-3x-10=0$ 의 근이고, 두 근 중 $a<0$ 인 것만 남는다(T-범위 함정 1개 — 조건을 빠뜨리면 답이 둘이 된다). 미분한 $f(x)=2x-3$ 에 그 $a$ 를 넣는다.
    확인체크 출발 ★2 · 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "x=a 대입 → a 는 우변의 근 → a<0 으로 선별 → f=g' 에 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/194-396.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 이차식은 근이 서로 다른 두 정수이고 부호가 갈려야 한다($x^2-3x-10=(x-5)(x+2)$). 계수를 바꿀 때 두 근이 같은 부호가 되면 $a<0$ 조건이 무의미해지거나 해가 없어진다."
    creative: "(1) 조건을 $a>0$ 으로 뒤집어 같은 식에서 다른 답을 만들기(★2) (2) 우변을 삼차로 올려 근이 셋이 되게 하면 선별이 늘어 ★3 (3) 묻는 값을 $f(a)$ 가 아니라 $\\int_{a}^{0}f$ 로 바꾸면 한 단계 더 ★2~3."
```

```yaml
- id: GN-CALC1-194-397
  page: 194
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    다항함수 $f$ 가 $x^2f(x)=\frac{2}{3}x^6-\frac{1}{2}x^4+2\int_{1}^{x}tf(t)\,dt$ 를 만족시킬 때 $f(-1)$ 의 값.
  category: "양변 미분 → f 항 소거 → f' 적분 → x=1 대입으로 상수"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "적분 구간에 변수가 있는 경우 — 양변 미분·대입"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e10⑵ 와 같은 골조를 차수만 올린 것이다. 미분하면 좌변 $2xf(x)+x^2f'(x)$ 와 우변 $2xf(x)$ 가 소거되어 $x^2f'(x)=4x^5-2x^3$, 곧 $f'(x)=4x^3-2x$. 적분상수는 원식에 $x=1$ 을 넣어 얻는다.
    확인체크 출발 ★2 · 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "양변 미분 → 2xf(x) 소거 → f'(x)=4x^3-2x → 적분 후 x=1 대입으로 상수"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{6}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/194-397.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "적분 안의 가중치 $t$ 와 좌변 $x^2$ 가 짝을 이뤄야(가중치 = 좌변 인자의 도함수와 맞물려야) $f$ 항이 정확히 소거된다 — 이 짝을 깨면 문제가 풀리지 않는다. 우변 계수 $2/3$ · $1/2$ 는 $x^2$ 로 나눠떨어지게만 두면 자유."
    creative: "(1) 묻는 값을 $f(1)$ 로 바꾸면 대입 한 번에 끝나 ★1~2 (2) $f$ 가 우함수로 나오는 구조를 이용해 $f(-1)=f(1)$ 대칭을 묻기(I-SYM 유도 · ★3) (3) 좌변을 $x^3f(x)$ 로 올리고 가중치를 $t^2$ 로 맞추면 같은 골조 ★2."
```

```yaml
- id: GN-CALC1-195-e11
  page: 195
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    $\int_{-1}^{x}(x-t)f(t)\,dt=x^3+ax^2+5x+2$ 일 때 $f(-1)$ 의 값($a$ 는 상수).
  category: "(x-t) 분리 → 한 번 미분하면 ∫f · 두 번 미분하면 f"
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$\\int_{-1}^{x}(x-t)f\\,dt$ 를 $x\\int_{-1}^{x}f - \\int_{-1}^{x}tf$ 로 쪼개면 미분 시 $xf(x)$ 가 상쇄돼 $\\int_{-1}^{x}f(t)dt$ 만 남는 구조를 먼저 봐야 함"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "적분 구간과 피적분함수에 변수가 있는 경우 — (x-t) 분리 후 두 번 미분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    적분 안에 $x$ 와 $t$ 가 함께 있어 바로 미분할 수 없다. 분리 후 첫 미분에서 $xf(x)$ 가 상쇄되는 것이 이 유형의 전부이고, 그 결과식에 $x=-1$ 을 넣어 $a$ 를 얻은 뒤 한 번 더 미분해 $f$ 를 구한다.
    필수 예제 출발 ★2 · 통찰 1개(EQV d2) · M_total 7 → 산식상 +1 조건(통찰 2개 또는 d3)에 못 미쳐 ★2 유지.
  tier: star_2
  mechanism_primary: "x∫f - ∫tf 로 분리 → 1차 미분 ∫_{-1}^x f = 3x²+2ax+5 → x=-1 로 a → 2차 미분 f(x)=6x+2a"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/195-e11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 다항식의 상수항은 아무 값이나 가능(1차 미분식에만 조건이 걸린다). 제약: 1차 미분식에 아래끝을 대입한 값이 0 이어야 하고, 그 식이 미지상수에 대해 일차로 풀려야 한다. 아래끝을 바꾸면 $a$ 도 함께 바뀐다."
    creative: "(1) 미지상수를 둘로 늘려 원식 대입 조건까지 쓰게 하기(399 골조 · ★3) (2) 피적분함수를 $f'(t)$ 로 바꾸면 결과가 $f(x)-f(a)$ 가 돼 ★3(410 골조) (3) $(x-t)^2$ 으로 올리면 세 번 미분이라 ★4."
```

```yaml
- id: GN-CALC1-195-398
  page: 195
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $\int_{1}^{x}(x-t)f(t)\,dt=x^4-3x^2+2x$ 일 때 $f(0)$ 의 값.
  category: "(x-t) 분리 → 두 번 미분 → f(x)"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$(x-t)$ 를 분리해 $x\\int f - \\int tf$ 로 본 뒤 두 번 미분해야 $f$ 가 드러남"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "적분 구간과 피적분함수에 변수가 있는 경우 — (x-t) 분리 후 두 번 미분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e11 과 같은 골조인데 미지상수가 없어 두 번 미분하면 바로 $f(x)$ 가 나온다. 첫 미분 결과에 $x=1$ 을 넣으면 0 이 되는 것은 정합성 확인일 뿐 답에 쓰이지 않는다.
    확인체크 출발 ★2 · 통찰 1개(EQV d2) · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "(x-t) 분리 → 1차 미분 ∫_1^x f = 4x³-6x+2 → 2차 미분 f(x)=12x²-6 → x=0"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/195-398.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 계수는 자유이되 1차 미분식에 아래끝 1 을 대입한 값이 0 이어야 등식이 성립한다($4-6+2=0$). 계수를 바꾸면 아래끝을 그에 맞게 옮겨야 한다."
    creative: "(1) 묻는 점을 $f(1)$ 로 바꾸면 계산이 더 가볍다(★2) (2) 우변에 미지상수를 넣어 대입 조건을 쓰게 하기(★3) (3) $f$ 대신 $f'$ 를 넣고 $f(1)$ 을 함께 주면 $f(x)$ 를 복원하는 ★3."
```

```yaml
- id: GN-CALC1-195-399
  page: 195
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $\int_{1}^{x}(x-t)f(t)\,dt=x^3+ax^2+bx$ 일 때 상수 $a$, $b$ 에 대하여 $f(ab)$ 의 값.
  category: "(x-t) 분리 → 두 번 미분 → 원식·미분식 두 대입으로 a·b 연립"
  M: {s: 3, k: 2, a: 3, t: 0}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$(x-t)$ 분리 후 첫 미분에서 $xf(x)$ 가 상쇄돼 $\\int_{1}^{x}f$ 가 남고, 원식과 그 식 각각에 $x=1$ 을 넣어야 미지상수 둘이 잡힘"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "적분 구간과 피적분함수에 변수가 있는 경우 — (x-t) 분리 후 두 번 미분"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    e11·398 과 골조는 같지만 미지상수가 둘이라 조건을 두 개 만들어야 한다 — 원식의 $x=1$ 과 1차 미분식의 $x=1$. 그다음 두 번째 미분으로 $f(x)=6x+2a$ 를 얻고, 답을 내려면 $ab$ 를 먼저 계산해 대입까지 해야 해서 단계가 한 겹 더 붙는다.
    확인체크 출발 ★2 · 통찰 1개(EQV d2) · M_total 8 · 조건 두 개 연립 → +1 해서 ★3.
  tier: star_3
  mechanism_primary: "(x-t) 분리 → 원식·1차 미분식에 x=1 대입 → a·b 연립 → 2차 미분 f(x)=6x+2a → f(ab)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-16$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/195-399.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변의 최고차 계수와 아래끝을 바꿀 수 있으나 두 대입식이 $a$, $b$ 에 대한 독립 일차연립이어야 하고, $ab$ 가 정수로 떨어져야 답이 깔끔하다(여기선 $a=-2$, $b=1$)."
    creative: "(1) 묻는 값을 $a+b$ 로 바꾸면 마지막 대입이 빠져 ★2 (2) 우변 상수항까지 미지수로 만들면 조건이 셋이라 ★3~4 (3) $f(ab)$ 대신 $\\int_{0}^{1}f(t)dt$ 를 물으면 적분 한 번이 더 붙어 ★3."
```

```yaml
- id: GN-CALC1-196-e12
  page: 196
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    $f(x)=\int_{x}^{x+1}(t^3-t)\,dt$ 의 극댓값 $M$, 극솟값 $m$ 에 대하여 $M-m$ 의 값.
  category: "양끝 변수 적분 미분 → f'(x)=g(x+1)-g(x) → 부호로 극값"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정적분으로 정의된 함수의 극대·극소"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    392⑶⑷ 에서 이미 준 도구를 그대로 쓴다 — 미분하면 $((x+1)^3-(x+1))-(x^3-x)=3x^2+3x=3x(x+1)$ 이라 극대 $x=-1$, 극소 $x=0$ 이 바로 나온다. 남은 일은 두 정적분 값을 계산해 빼는 것뿐.
    필수 예제 출발 ★2 · 통찰 0 · M_total 5(−1 후보이나 극값 계산 두 번이 붙어 적용하지 않음) → ★2.
  tier: star_2
  mechanism_primary: "f'(x)=g(x+1)-g(x)=3x(x+1) → 극대 x=-1·극소 x=0 → 두 정적분 차 M-m"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{2}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/196-e12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "피적분함수는 $g(x+1)-g(x)$ 가 이차식이 되도록 삼차여야 극대·극소가 둘 다 생긴다. 구간 폭 1 을 바꾸면 극점 위치가 옮겨간다. $t^3-t$ 를 $t^3-kt$ 로 두면 극점이 $x$ 축 대칭으로 벌어진다."
    creative: "(1) $M-m$ 대신 극대가 되는 $x$ 를 묻기(★2) (2) 피적분함수를 사차로 올려 $f'$ 를 삼차로 만들면 극값이 둘 이상이라 ★3 (3) 구간을 $[x-1, x]$ 로 바꾸고 그래프로 주면 417 골조 ★3."
```

```yaml
- id: GN-CALC1-196-400
  page: 196
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $f(x)=\int_{-3}^{x}(t^2+t+k)\,dt$ 가 $x=-3$ 에서 극댓값을 가질 때 $f(x)$ 의 극솟값($k$ 는 상수).
  category: "F'=f 이므로 극점 조건 → k 결정 → 다른 근에서 정적분 계산"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정적분으로 정의된 함수의 극대·극소"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $f'(x)=x^2+x+k$ 이고 $x=-3$ 이 극점이므로 $f'(-3)=0$ 에서 $k$ 가 정해진다(미정계수 대입 — 표준 절차라 통찰로 세지 않음). 인수분해하면 다른 근이 극소점이고, 거기까지의 정적분을 계산하면 끝.
    확인체크 출발 ★2 · 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "f'(-3)=0 → k=-6 → f'=(x+3)(x-2) → 극소 x=2 → f(2)=∫_{-3}^{2}f'"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-\dfrac{125}{6}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/196-400.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "아래끝과 $f'$ 의 일차항 계수를 바꿀 수 있으나 아래끝이 $f'$ 의 근이 되도록 $k$ 가 결정되므로 두 근이 서로 달라야 극대·극소가 모두 생긴다. 두 근의 간격이 커지면 정적분 값의 분모가 커진다(여기선 $6$)."
    creative: "(1) 극솟값 대신 극댓값(=0)을 물으면 계산이 사라져 ★1 (2) 조건을 '극값을 갖지 않는다'로 바꾸면 판별식 문제라 ★3 (3) 아래끝을 $0$ 으로 두고 극소점과 극솟값을 동시에 주면 미지수 둘 연립 ★3(416 골조)."
```

```yaml
- id: GN-CALC1-196-401
  page: 196
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    최댓값이 $1$ 인 이차함수 $y=f(x)$ 의 그래프(위로 볼록 · $x$ 절편 $0$ 과 $2$)가 주어질 때 $F(x)=\int_{1}^{x}f(t)\,dt$ 의 극댓값.
  category: "그래프 → 이차식 복원 → F'=f 부호로 극대점 → 정적분 계산"
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "그림의 두 $x$ 절편과 '최댓값 1' 이라는 말을 $f(x)=a x(x-2)$ 의 꼭짓점 조건으로 옮겨 $a$ 를 복원"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "그래프로 주어진 f 로 정의된 정적분 함수의 극값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    그림에서 얻는 것은 절편 $0$, $2$ 와 위로 볼록뿐이고, 최고차항 계수는 '최댓값 1' 로만 복원된다 — 이 복원이 이 문항의 진입 저항이다. 그다음은 $F'=f$ 의 부호가 $+\to-$ 로 바뀌는 $x=2$ 가 극대라는 표준 판정과 정적분 한 번.
    확인체크 출발 ★2 · 통찰 1개(RT d1) · 식 복원 단계가 더 붙어 M_total 7 → +1 해서 ★3.
  tier: star_3
  mechanism_primary: "그래프 → f(x)=-x(x-2) 복원 → F'=f 부호 전환점 x=2 가 극대 → F(2)=∫_1^2 f"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{2}{3}$'
  answer_source: "답지"
  figure: 'crop:fig-196-401.png'
  latex: latex-bank/gn-calc1/items/196-401.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "그림의 절편 라벨($0$, $2$)과 최댓값 $1$ 은 식 복원의 유일한 근거라 셋 중 어느 것을 바꾸든 그림도 함께 바꿔야 한다. 적분 아래끝 1 은 극댓값을 바꾸지만 극대점 위치는 바꾸지 않는다."
    creative: "(1) 아래끝을 $0$ 으로 옮겨 극댓값을 다시 묻기(★2~3) (2) 극솟값을 함께 묻게 하면 구간 밖 부호까지 봐야 해 ★3 (3) 최댓값 대신 $\\int_{0}^{2}f(t)dt$ 값을 주면 복원 경로가 적분이 돼 ★3 (4) 절편을 지우고 꼭짓점만 표시하면 복원이 어려워져 ★4."
```

```yaml
- id: GN-CALC1-197-e13
  page: 197
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    구간 $[0,\,2]$ 에서 $f(x)=\int_{0}^{x}(-t^2-t+2)\,dt$ 의 최댓값과 최솟값.
  category: "f'=피적분함수 부호 → 증감표 → 극값·끝점 비교"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정적분으로 정의된 함수의 최대·최소"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $f'(x)=-(x+2)(x-1)$ 이므로 구간 안에서 $x=1$ 하나만 부호가 바뀌고 거기가 최대. 최솟값은 극값이 아니라 끝점 두 곳($x=0$, $x=2$)을 비교해야 나온다(T-경계 함정 1개 — 끝점 비교를 빼면 틀린다).
    필수 예제 출발 ★2 · 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "f'=-(x+2)(x-1) → 구간 안 극대 x=1 → 끝점 f(0)·f(2) 와 비교"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '최댓값: $\dfrac{7}{6}$, 최솟값: $-\dfrac{2}{3}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/197-e13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "피적분함수의 근 중 하나만 구간 안에 들어와야 증감표가 한 번 꺾인다. 구간 오른쪽 끝을 키우면 최솟값이 계속 내려가고, 근 밖으로 나가지 않으면 최솟값이 $x=0$ 쪽으로 옮겨간다 — 끝점 값의 대소가 바뀌는 지점을 확인할 것."
    creative: "(1) 구간을 $[0,1]$ 로 줄여 최솟값이 끝점이 되게(★1~2) (2) 피적분함수에 미지상수를 넣고 최댓값을 지정해 상수를 되묻기(★3) (3) 구간을 $[x, x+1]$ 꼴로 바꾸면 403 골조 ★2~3."
```

```yaml
- id: GN-CALC1-197-402
  page: 197
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $0\le x\le 3$ 에서 $f(x)=\int_{0}^{x}(t-1)(t-5)\,dt$ 의 최댓값.
  category: "f'=(x-1)(x-5) 부호 → 구간 안 극대 → 끝점과 비교"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정적분으로 정의된 함수의 최대·최소"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    피적분함수가 이미 인수분해돼 있어 부호가 바로 읽힌다 — 구간 $[0,3]$ 안에서는 $x=1$ 에서만 $+\to-$ 로 바뀌므로 거기가 최대이고, 왼쪽 끝 $f(0)=0$ 과 비교하면 끝(T-경계 1개).
    확인체크 출발 ★2 · 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "f'=(x-1)(x-5) → 구간 안 극대 x=1 → f(1)=∫_0^1 계산"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{7}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/197-402.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 근 중 작은 쪽만 구간 안에 있어야 최대가 극값으로 잡힌다 — 구간 오른쪽 끝을 5 이상으로 키우면 최댓값이 오른쪽 끝으로 옮겨간다. 근을 바꿀 때 정적분 값이 분모 3 으로 정리되는지 확인."
    creative: "(1) 같은 식에서 최솟값을 묻기(끝점 $x=3$ · ★2) (2) 구간을 $[0,\\,a]$ 로 두고 최댓값이 $f(a)$ 가 되는 $a$ 범위를 묻기(★3) (3) 피적분함수를 $|(t-1)(t-5)|$ 로 바꾸면 절댓값 분할이 붙어 ★3."
```

```yaml
- id: GN-CALC1-197-403
  page: 197
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $-2\le x\le 1$ 에서 $f(x)=\int_{x}^{x+1}(2t^2+2t)\,dt$ 의 최댓값 $M$, 최솟값 $m$ 에 대하여 $M-m$.
  category: "양끝 변수 적분 미분 → f'(x)=g(x+1)-g(x) → 구간 최대·최소"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정적분으로 정의된 함수의 최대·최소"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e12 와 같은 도구($f'=g(x+1)-g(x)$)인데 여기선 $4(x+1)$ 이라 일차 — 최솟값은 $x=-1$, 최댓값은 끝점 둘 중 큰 쪽이다. 정적분을 세 번 계산해야 하는 계산 부담은 있지만 판단 단계는 짧다(T-경계 1개).
    확인체크 출발 ★2 · 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "f'(x)=g(x+1)-g(x)=4(x+1) → 최소 x=-1 · 최대는 끝점 비교 → M-m"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/197-403.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "피적분함수가 이차여야 $f'$ 가 일차가 되어 최소점이 하나로 떨어진다. 구간 $[-2,1]$ 을 옮기면 최댓값을 주는 끝점이 바뀌므로 양 끝점 값을 모두 계산해 비교해야 한다. 계수 $2$ 를 키우면 $M-m$ 이 비례해 커진다."
    creative: "(1) $M$ 과 $m$ 을 각각 묻기(★2) (2) 구간 폭을 $k$ 로 두고 최솟값이 구간 안에 있을 $k$ 조건을 묻기(★3) (3) 피적분함수를 삼차로 올리면 $f'$ 가 이차라 극대·극소가 둘 생겨 ★3(e12 골조)."
```

```yaml
- id: GN-CALC1-198-e14
  page: 198
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ $f(x)=2x^3-4x^2+3x+1$ 일 때 $\lim_{x\to2}\frac{1}{x-2}\int_{x}^{2}f(t)\,dt$ ⑵ $\lim_{h\to0}\frac{1}{h}\int_{1}^{1+2h}(x^2+x+1)\,dx$.
  category: "구간 방향·폭 보정 → 미분계수 정의 → f(a) 또는 k·f(a)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "⑴ 은 적분 구간이 뒤집혀 있어 부호를 바꿔야 하고 ⑵ 는 폭이 $2h$ 라 $\\frac{2}{2h}$ 로 맞춰야 미분계수 정의가 됨 — 분모와 구간 폭을 일치시키는 변형"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "정적분으로 정의된 함수의 극한"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    394 가 준 도구를 그대로 쓸 수 없는 두 경우를 모은 문항이다. ⑴ 은 $\int_{x}^{2}=-\int_{2}^{x}$ 로 방향을 뒤집어야 부호가 맞고(T-부호 1개), ⑵ 는 분모 $h$ 와 구간 폭 $2h$ 가 달라 2 를 밖으로 빼야 한다.
    필수 예제 출발 ★2 · 통찰 1개(EQV d1) · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "구간 방향·폭을 분모에 맞춰 보정 → F'(a)=f(a) → ⑴ -f(2) ⑵ 2f(1)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $-7$ ⑵ $6$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/198-e14.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "피적분함수와 기준점은 자유(답은 $\\pm k f(a)$ 꼴). 폭 배수 $2$ 를 바꾸면 답이 그 배수만큼 변한다. 답이 정수로 떨어지게 하려면 $f(a)$ 가 배수로 나눠지는 값이어야 한다."
    creative: "(1) 위끝을 $x^2$ 처럼 합성으로 주면 분모 맞추기가 한 겹 늘어 ★3(404⑴) (2) 구간을 $[a-h,\\,a+h]$ 로 대칭화(★2~3 · 404⑵) (3) 극한값을 주고 피적분함수의 상수를 되묻기(★2 · 405)."
```

```yaml
- id: GN-CALC1-198-404
  page: 198
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴ $\lim_{x\to1}\frac{1}{x-1}\int_{1}^{x^2}(2t^2+3t-1)\,dt$ ⑵ $\lim_{h\to0}\frac{1}{h}\int_{2-h}^{2+h}(3x^2-x+1)\,dx$ 의 극한값.
  category: "합성 위끝·대칭 구간을 미분계수 정의 꼴로 재배치"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "⑴ 에서 분모를 $x^2-1$ 로 만들고 남는 $\\frac{x^2-1}{x-1}\\to2$ 를 따로 떼어내는 재배치. ⑵ 는 구간을 $a$ 기준 좌우로 쪼개 $2f(a)$ 로 읽는 재배치"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "정적분으로 정의된 함수의 극한"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑴ 은 위끝이 $x^2$ 인데 분모는 $x-1$ 이라 정의 꼴이 곧바로 서지 않는다 — 분모를 $x^2-1$ 로 바꾸고 나머지를 극한 $2$ 로 떼어내야 한다. ⑵ 는 적분 구간이 $a$ 를 가운데 두고 대칭이라 폭이 $2h$ 이고, 그 몫이 $2f(2)$ 가 된다.
    확인체크 출발 ★2 · 통찰 1개(EQV d2) · 보정이 e14 보다 한 겹 깊음 → +1 해서 ★3.
  tier: star_3
  mechanism_primary: "⑴ 분모를 x²-1 로 맞추고 (x²-1)/(x-1)→2 분리 → 2f(1) · ⑵ 대칭구간 폭 2h → 2f(2)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $8$ ⑵ $22$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/198-404.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 위끝을 $x^n$ 으로 바꾸면 배수가 $n$ 이 된다(아래끝은 $x\\to1$ 에서 위끝과 같은 1 이어야 함). ⑵ 는 기준점과 피적분함수가 자유. 답이 정수가 되게 하려면 $f(a)$ 에 배수를 곱한 값이 정수여야 한다."
    creative: "(1) ⑴ 의 아래끝도 $x$ 로 두면 $f$ 두 개의 차가 나와 ★3~4 (2) 구간을 $[a-h,\\,a+2h]$ 로 비대칭화하면 $3f(a)$ 라 같은 ★3 (3) 극한값을 주고 계수를 되묻는 역방향(★3)."
```

```yaml
- id: GN-CALC1-198-405
  page: 198
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $\lim_{h\to0}\frac{1}{h}\int_{-1}^{-1+h}(ax-x^2)\,dx=-3$ 을 만족시키는 상수 $a$ 의 값.
  category: "극한 → f(-1) → 주어진 값과 등식 → a"
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정적분으로 정의된 함수의 극한"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    구간이 $[-1,\,-1+h]$ 로 표준 꼴이라 보정할 것이 없다 — 극한값은 그대로 $f(-1)=-a-1$ 이고, 이를 $-3$ 과 놓으면 일차방정식 한 줄.
    확인체크 출발 ★2 · 통찰 0 · M_total 5(−1 후보이나 역방향 한 단계가 있어 적용하지 않음) → ★2.
  tier: star_2
  mechanism_primary: "1/h·∫_{-1}^{-1+h} → f(-1)=-a-1 → -a-1=-3 → a"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/198-405.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준점·극한값·피적분함수 계수 모두 자유이되 $f(a)=0$ 에서 미지상수가 사라지지 않아야 한다(기준점이 0 이면 $a$ 가 소거돼 문제가 성립하지 않음)."
    creative: "(1) 구간 폭을 $2h$ 로 바꾸면 보정이 붙어 ★2~3 (2) 미지상수를 둘로 늘리고 조건을 두 개 주면 연립 ★3 (3) 극한 조건에서 $f$ 의 최솟값 같은 파생값을 묻기(★3)."
```

### 연습문제 STEP 1

```yaml
- id: GN-CALC1-199-406
  page: 199
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $f(x)=\frac{12}{7}x^2-2x\int_{1}^{2}f(t)\,dt+\left\{\int_{1}^{2}f(t)\,dt\right\}^2$ 일 때 $f(7)$ 의 값.
  category: "정적분을 상수 k 로 치환 → 되먹여 k 이차방정식 → f 확정"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "적분 구간이 상수인 경우 — 정적분을 상수로 치환"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    같은 정적분이 일차항과 제곱으로 두 번 나올 뿐 미지수는 하나다. $\int_{1}^{2}f=k$ 로 놓고 되먹이면 $k$ 의 이차방정식이 나오는데 완전제곱이라 근이 하나로 떨어진다(근이 둘이면 케이스 분기가 생겼을 자리).
    STEP 1 출발 ★2 · 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "∫_1^2 f = k 치환 → k = 4-3k+k² → (k-2)²=0 → f(x)=(12/7)x²-4x+4 → f(7)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$60$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/199-406.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "$12/7$ 은 $\\int_{1}^{2}t^2dt=7/3$ 을 상쇄해 $k$ 방정식을 완전제곱으로 만들려고 고른 값이다 — 계수를 바꾸면 근이 둘이 되거나 무리수가 되니 판별식을 먼저 확인할 것. 묻는 점 $x=7$ 은 분모 7 을 없애는 역할."
    creative: "(1) 판별식이 양수가 되게 계수를 틀어 근 둘 중 하나를 조건으로 기각시키면 I-VF 가 생겨 ★3~4 (2) 적분 구간을 $[0,\\,a]$ 로 두고 $a$ 를 되묻기(★3) (3) $f(7)$ 대신 $\\int_{1}^{2}f(t)dt$ 를 물으면 치환 한 번에 끝나 ★1~2."
```

```yaml
- id: GN-CALC1-199-407
  page: 199
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $\int_{2}^{x}f(t)\,dt=x^3-3ax^2+5ax-a^2$ ($a>0$)일 때 $f(x)$ 의 최솟값.
  category: "x=2 대입으로 a 결정(조건 선별) → 미분한 f 의 이차 최솟값"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "적분 구간에 변수가 있는 경우 — 양변 미분·대입"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $x=2$ 를 넣으면 좌변이 0 이므로 $a$ 의 이차방정식이 나오고 두 근 중 $a>0$ 인 것만 남는다(T-범위 1개). 미분하면 $f$ 는 이차함수라 완전제곱으로 최솟값을 읽으면 끝.
    STEP 1 출발 ★2 · 통찰 0 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "x=2 대입 → a²+2a-8=0 → a>0 으로 a=2 → f(x)=3x²-12x+10 → 꼭짓점 값"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/199-407.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 계수는 자유이되 아래끝 대입식이 $a$ 에 대한 이차식으로 인수분해되고 두 근의 부호가 갈려야 $a>0$ 조건이 작동한다. 최솟값이 정수가 되려면 $f$ 의 꼭짓점이 유리점이어야 한다."
    creative: "(1) 조건을 $a<0$ 으로 뒤집기(★2) (2) 최솟값 대신 구간 $[0,3]$ 에서의 최댓값을 묻기(★2~3) (3) 최솟값을 주고 $a$ 를 되묻는 역방향(★3)."
```

```yaml
- id: GN-CALC1-199-408
  page: 199
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $\int_{0}^{x}f(t)\,dt=2x^3-x^2-4x\int_{0}^{1}f(t)\,dt$ 일 때 $f(-1)$ 의 값.
  category: "∫₀¹f=k 치환 → 양변에 x=1 대입하면 좌변이 곧 k → 미분"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "우변의 상수 $\\int_{0}^{1}f$ 와 좌변에 $x=1$ 을 넣은 값이 같은 수라는 것을 알아채야 $k$ 방정식이 만들어짐"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "상수 치환과 양변 대입을 함께 쓰는 등식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    치환만으로는 식이 닫히지 않는다 — 좌변이 $\int_{0}^{x}f$ 이므로 $x=1$ 을 대입하면 그 값이 바로 미지수 $k$ 이고, 그때 비로소 $k=2-1-4k$ 라는 방정식이 생긴다. 이 연결이 이 문항의 전부이고 나머지는 미분 한 번.
    STEP 1 출발 ★2 · 통찰 1개(EQV d1) · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "∫_0^1 f = k 치환 → 양변 x=1 대입 → k=1-4k → k=1/5 → 미분 f(x)=6x²-2x-4k → f(-1)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{36}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/199-408.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "적분 상수구간의 위끝(여기선 1)은 좌변에 대입할 점과 반드시 같아야 이 골조가 성립한다. 우변 계수는 자유이되 $k$ 의 일차방정식 계수가 0 이 되지 않아야 한다($-4$ 대신 $-1$ 을 쓰면 좌변과 상쇄돼 해가 없다)."
    creative: "(1) 적분 상수구간을 $[0,2]$ 로 바꾸고 좌변에 $x=2$ 를 대입하게 하기(★2) (2) 가중치를 $tf(t)$ 로 바꾸면 미분한 $f$ 를 되먹여야 해 ★3(414 골조) (3) 묻는 값을 $\\int_{0}^{2}f$ 로 바꾸면 한 단계 더 ★3."
```

```yaml
- id: GN-CALC1-199-409
  page: 199
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: ["평가원 기출"]
  category_type: "연습문제 STEP 1"
  summary: |
    $f(x)=-x^2-4x+a$ 에 대하여 $g(x)=\int_{0}^{x}f(t)\,dt$ 가 닫힌구간 $[0,\,1]$ 에서 증가하도록 하는 실수 $a$ 의 최솟값.
  category: "g 증가 ⟺ g'=f≥0 on 구간 ⟺ 구간 최솟값 ≥ 0"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'$g$ 가 구간에서 증가' 를 '$f\\ge0$ 이 구간 전체에서 성립' 으로, 다시 '구간 안 $f$ 의 최솟값 $\\ge0$' 으로 두 번 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "정적분으로 정의된 함수의 증가·감소 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $g'=f$ 라는 한 줄을 거친 뒤가 본론이다 — 구간 전체에서 $f\ge0$ 이려면 $f$ 의 그 구간 최솟값이 0 이상이어야 하고, $f$ 는 위로 볼록에 축이 $x=-2$ 라 $[0,1]$ 에서 감소하므로 최솟값은 오른쪽 끝 $f(1)=a-5$ 다(T-경계 1개 — 꼭짓점이 구간 밖임을 확인해야 함).
    STEP 1 출발 ★2 · 평가원 기출 · 통찰 1개(EQV d1) · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "g'=f≥0 on [0,1] → f 는 [0,1]에서 감소 → f(1)=a-5≥0 → a 최솟값 5"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/199-409.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "$f$ 의 축($x=-2$)이 구간 밖에 있어 최솟값이 끝점으로 확정되는 것이 이 배치의 핵심이다 — 일차항 계수를 바꿔 축을 $[0,1]$ 안으로 옮기면 최솟값이 꼭짓점이 되어 조건식이 달라진다. 구간을 넓히면 최솟값 위치가 옮겨간다."
    creative: "(1) 축이 구간 안에 오도록 계수를 바꿔 꼭짓점 조건을 쓰게 하기(★3) (2) '감소' 로 뒤집어 $a$ 의 최댓값을 묻기(★2) (3) $g$ 가 극값을 갖지 않을 조건으로 바꾸면 판별식 문제라 ★3 (4) 구간을 열린구간으로 주면 경계 처리가 쟁점이 돼 ★3."
```

```yaml
- id: GN-CALC1-199-410
  page: 199
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    다항함수 $f$ 가 $\int_{1}^{x}(x-t)f'(t)\,dt=2x^4+x^3-11x+8$ 과 $f(1)=2$ 를 만족시킬 때 $f(x)$ 구하기.
  category: "(x-t) 분리 → 미분 → ∫f' = f(x)-f(1) 로 읽기"
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$(x-t)$ 분리 후 한 번 미분하면 $\\int_{1}^{x}f'(t)dt$ 가 나오는데, 이를 미적분의 기본정리로 $f(x)-f(1)$ 로 읽어야 $f$ 가 바로 복원됨"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "적분 구간과 피적분함수에 변수가 있는 경우 — (x-t) 분리 후 두 번 미분"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    e11 계열과 골조는 같지만 피적분함수가 $f'$ 이라 한 번만 미분해도 답이 나온다 — 대신 $\int_{1}^{x}f'=f(x)-f(1)$ 이라는 두 번째 전환을 봐야 하고, $f(1)=2$ 가 그 자리에서 쓰인다. 두 번 미분해 $f'$ 를 구한 뒤 적분해도 되지만 그 경로는 적분상수를 또 정해야 한다.
    STEP 1 출발 ★2 · 통찰 1개(EQV d2) · 전환이 두 겹 · M_total 7 → +1 해서 ★3.
  tier: star_3
  mechanism_primary: "(x-t) 분리 → 미분 → ∫_1^x f' = 8x³+3x²-11 → f(x)-f(1) 로 읽고 f(1)=2 대입"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$f(x)=8x^3+3x^2-9$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/199-410.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 계수는 자유이되 미분한 식에 아래끝 1 을 대입한 값이 0 이어야 한다($8+3-11=0$) — 계수를 바꾸면 상수항도 함께 맞춰야 등식이 성립한다. $f(1)$ 값은 상수항만 평행이동시키므로 자유."
    creative: "(1) 피적분함수를 $f''$ 로 올리면 초기조건이 둘 필요해 ★4 (2) $f(1)$ 대신 $\\int_{0}^{1}f$ 를 주면 한 단계 더 ★3~4 (3) 묻는 대상을 $f(2)$ 한 값으로 줄이면 ★2~3."
```

```yaml
- id: GN-CALC1-199-411
  page: 199
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $f(x)=\int_{-3}^{x}(3t^2-6t-9)\,dt$ 의 극댓값과 극솟값.
  category: "f'=피적분함수 → 인수분해로 극점 → 각 점에서 정적분 계산"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정적분으로 정의된 함수의 극대·극소"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $f'(x)=3(x-3)(x+1)$ 이라 극대 $x=-1$, 극소 $x=3$ 이 바로 나오고 남은 일은 정적분 두 번. 아래끝이 $-3$ 이라 두 값 모두 같은 원시함수 $x^3-3x^2-9x$ 의 차로 정리된다.
    STEP 1 출발 ★2 · 통찰 0 · M_total 5(−1 후보이나 정적분 두 번이 붙어 적용하지 않음) → ★2.
  tier: star_2
  mechanism_primary: "f'=3(x-3)(x+1) → 극대 x=-1·극소 x=3 → F(x)=x³-3x²-9x 의 차로 계산"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '극댓값: $32$, 극솟값: $0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/199-411.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "피적분함수는 서로 다른 두 실근을 가진 이차식이어야 극대·극소가 둘 다 생긴다. 아래끝 $-3$ 은 원시함수의 값이 정수로 떨어지게 고른 값(여기선 극솟값이 정확히 0) — 바꾸면 두 극값이 같은 상수만큼 평행이동한다."
    creative: "(1) 극댓값과 극솟값의 차를 묻기(아래끝이 사라져 ★2) (2) 피적분함수에 미지상수를 넣고 극솟값을 지정해 되묻기(★3 · 416 골조) (3) 아래끝도 변수로 두어 $\\int_{x}^{x+2}$ 꼴로 바꾸면 ★3."
```

```yaml
- id: GN-CALC1-200-412
  page: 200
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $\lim_{x\to0}\frac{1}{x}\int_{-2-x}^{-2+x}|t^2-9|\,dt$ 의 값.
  category: "적분 구간 위치로 절댓값 벗기기 → 대칭 구간 폭 2x → 2f(-2)"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "$x\\to0$ 이면 적분 구간이 $-2$ 근방이라 $|t|<3$, 곧 $|t^2-9|=9-t^2$ 로 절댓값을 벗길 수 있음을 구간 위치로 판단"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "절댓값 피적분함수의 정적분 극한"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    절댓값을 구간 분할로 처리하려 들면 막히고, $x\to0$ 이므로 적분 구간이 $-3<t<3$ 안에 통째로 들어간다는 점을 봐야 $9-t^2$ 로 한 번에 벗겨진다(T-부호·T-범위 2개). 그 뒤는 $[-2-x,\,-2+x]$ 가 $-2$ 대칭이라 폭이 $2x$ 이므로 $2f(-2)$.
    STEP 1 출발 ★2 · 통찰 1개(EQV d1) · 절댓값 판단이 걸림돌 · M_total 6 → +1 해서 ★3.
  tier: star_3
  mechanism_primary: "x→0 이면 구간이 (-3,3) 안 → |t²-9|=9-t² → 대칭구간 폭 2x → 2(9-4)=10"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$10$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/200-412.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준점이 절댓값의 부호 전환점($\\pm3$)에서 떨어져 있어야 이 골조가 성립한다 — 기준점을 $-3$ 이나 $3$ 으로 옮기면 좌우 극한을 따로 봐야 해 문제의 성격이 바뀐다. 피적분함수의 근과 기준점 간격은 자유."
    creative: "(1) 기준점을 부호 전환점 위($t=3$)로 옮겨 좌우 분할을 강제하면 ★4 (2) 구간을 $[-2-x,\\,-2+2x]$ 로 비대칭화하면 배수가 3 이 돼 같은 ★3 (3) 절댓값을 $|t-1||t+3|$ 꼴로 바꾸면 부호 판단이 두 겹 ★3~4."
```

### 연습문제 STEP 2

```yaml
- id: GN-CALC1-200-413
  page: 200
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    $f$ 의 한 부정적분 $g$ 가 ㈎ $f(x)=2x+\int_{0}^{2}f(t)\,dt$ ㈏ $g(0)-\int_{0}^{2}g(t)\,dt=\frac13$ 을 만족시킬 때 $g(1)$ 의 값.
  category: "㈎ 상수 치환으로 f 확정 → g 를 적분상수 C 포함해 적분 → ㈏ 로 C 결정"
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "적분 구간이 상수인 경우 — 정적분을 상수로 치환"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 조건이 순서대로 두 상수를 정한다 — ㈎ 의 $\int_{0}^{2}f=k$ 를 되먹여 $f(x)=2x-4$ 를 얻고, $g=x^2-4x+C$ 로 두면 ㈏ 는 $C$ 에 대한 일차식이 된다. 미지수가 둘이라 단계는 길지만 각 단계는 이 단원의 표준 절차다.
    STEP 2 출발 ★3 · 통찰 0 · M_total 7 → ★3 유지.
  tier: star_3
  mechanism_primary: "∫_0^2 f = k → f(x)=2x-4 → g(x)=x²-4x+C → g(0)-∫_0^2 g = 1/3 로 C → g(1)"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/200-413.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "㈎ 의 일차항 계수와 적분 구간은 자유이되 되먹인 $k$ 방정식의 계수가 0 이 되지 않아야 한다. ㈏ 의 값 $1/3$ 은 $\\int_{0}^{2}t^2dt=8/3$ 에서 나온 분모를 없애려고 고른 값이라 구간을 바꾸면 함께 조정해야 한다."
    creative: "(1) ㈏ 를 $g(2)-g(0)$ 처럼 $C$ 가 소거되는 조건으로 바꾸면 문제가 성립하지 않는다 — 조건이 $C$ 를 실제로 잡는지 확인하는 변형 (2) $g(1)$ 대신 $g$ 의 최솟값을 묻기(★3) (3) $f$ 를 이차로 올리면 상수 치환이 두 개라 ★4."
```

```yaml
- id: GN-CALC1-200-414
  page: 200
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    $\int_{0}^{x}f(t)\,dt=\frac83x^3-3x^2+4x\int_{0}^{2}tf(t)\,dt$ 일 때 $f(2)$ 의 값.
  category: "가중 정적분을 상수로 치환 → 미분해 얻은 f 를 되먹여 상수 확정"
  M: {s: 3, k: 3, a: 2, t: 0}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "상수 치환과 양변 대입을 함께 쓰는 등식"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    408 과 달리 상수가 $\int_{0}^{2}tf(t)dt$ 라 좌변 대입으로는 잡히지 않는다 — 먼저 미분해 $f(x)=8x^2-6x+4k$ 를 얻고, 그 $f$ 를 가중 적분에 다시 넣어 $k$ 방정식을 만들어야 한다. 되먹이는 적분 계산이 무거운 것이 이 문항의 부담(Mₖ 3).
    STEP 2 출발 ★3 · 통찰 0 · M_total 8 → ★3.
  tier: star_3
  mechanism_primary: "∫_0^2 tf = k 치환 → 미분 f(x)=8x²-6x+4k → k=∫_0^2 t f(t)dt 되먹여 k=-16/7 → f(2)"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{76}{7}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/200-414.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "가중치 $t$ 와 적분 구간 $[0,2]$ 가 되먹인 $k$ 방정식의 계수를 정한다 — 구간을 키우면 $k$ 의 계수가 1 에 가까워져 해가 발산하니 $1-\\int_{0}^{b}4t\\,dt \\ne 0$ 을 확인할 것. 우변 계수 $8/3$ · $3$ 은 자유."
    creative: "(1) 가중치를 $t^2$ 로 올리기(같은 골조 ★3) (2) 상수를 $\\int_{0}^{2}f$ 로 낮추면 좌변 대입으로 잡혀 ★2(408 골조) (3) 묻는 값을 $f$ 의 최솟값으로 바꾸면 한 단계 더 ★3."
```

```yaml
- id: GN-CALC1-200-415
  page: 200
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["평가원 기출"]
  category_type: "연습문제 STEP 2"
  summary: |
    다항함수 $f$ 가 $xf(x)=2x^3+ax^2+3a+\int_{1}^{x}f(t)\,dt$ 를 만족시키고 $f(1)=\int_{0}^{1}f(t)\,dt$ 일 때 $a+f(3)$ 의 값. 5지선다.
  category: "양변 미분 → f' → 적분해 f 복원(상수 둘) → 두 대입 조건 통합해 a 결정"
  M: {s: 3, k: 2, a: 3, t: 0}
  M_total: 8
  insights:
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "미분식에서 얻은 $f(x)=3x^2+2ax+C$, 원식에 $x=1$ 을 넣은 $f(1)=4a+2$, 그리고 $f(1)=\\int_{0}^{1}f$ 세 조건을 $a$ 하나에 대한 식으로 묶어야 답이 나옴"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "적분 구간에 변수가 있는 경우 — 양변 미분·대입"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    미분하면 $f$ 가 소거돼 $f'(x)=6x+2a$ 가 나오지만 적분상수 $C$ 가 남고, 원식의 $x=1$ 대입이 $C$ 를 $a$ 로 표현해 준다. 남은 조건 $f(1)=\int_{0}^{1}f$ 를 써야 비로소 $a$ 가 하나로 떨어진다 — 세 식을 어느 순서로 묶느냐가 이 문항의 전부다.
    [분류 이슈] STEP 2 ★3 출발 · 평가원 기출 · M_total 8 로 ★4 후보이나 §2.13 저노출 통찰(SC/VF/SYM/XU/RT/PD/BW)이 없어 ★3 으로 둔다.
  tier: star_3
  mechanism_primary: "양변 미분 → f'(x)=6x+2a → f=3x²+2ax+C → 원식 x=1 로 C=2a-1 → f(1)=∫_0^1 f 로 a=-2 → a+f(3)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '④'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/200-415.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변의 $3a$ 상수항은 $x=1$ 대입식에서만 작동하므로 계수를 바꾸면 $a$ 값이 곧바로 바뀐다. 마지막 조건식이 $a$ 에 대한 일차식으로 풀려야 하니 $\\int_{0}^{1}f$ 의 $a$ 계수와 $f(1)$ 의 $a$ 계수가 달라야 한다. 5지선다 답이 정수가 되도록 $a$ 는 정수로."
    creative: "(1) 두 번째 조건을 $f(0)=0$ 처럼 단순 대입으로 바꾸면 ★2~3 (2) 좌변을 $x^2f(x)$ 로 올리면 가중치 맞춤이 필요해 ★3~4 (3) 조건 ㈏ 를 $\\int_{0}^{1}f=0$ 으로 주면 통합 단계가 사라져 ★2."
```

```yaml
- id: GN-CALC1-200-416
  page: 200
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    $f(x)=\int_{0}^{x}(t^2+at+b)\,dt$ 가 $x=3$ 에서 극솟값 $0$ 을 가질 때 $f(x)$ 의 극댓값($a$, $b$ 는 상수).
  category: "f'(3)=0 과 f(3)=0 두 조건 연립 → a·b → 다른 극점에서 정적분"
  M: {s: 3, k: 3, a: 2, t: 0}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정적분으로 정의된 함수의 극대·극소"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    '극솟값 0' 은 두 조건이다 — 극점이라는 $f'(3)=0$ 과 값이 0 이라는 $f(3)=0$. 뒤엣것이 정적분이라 계산을 해야 식이 나오고, 둘을 연립하면 $a=-4$, $b=3$. 그 뒤 $f'=(x-1)(x-3)$ 에서 극대점 $x=1$ 을 찾아 정적분 한 번.
    STEP 2 출발 ★3 · 통찰 0(미정계수 연립은 표준 절차) · M_total 8 → ★3.
  tier: star_3
  mechanism_primary: "f'(3)=0 · f(3)=0 연립 → a=-4·b=3 → f'=(x-1)(x-3) → 극대 x=1 → f(1)=∫_0^1 f'"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{4}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/200-416.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "극소점 $x=3$ 과 아래끝 $0$ 을 바꿀 수 있으나 연립 결과 $f'$ 가 서로 다른 두 실근을 가져야 극대가 존재한다. 극솟값을 0 이 아닌 값으로 두면 두 번째 식의 상수항만 바뀌고 골조는 같다."
    creative: "(1) 극댓값을 주고 극솟값을 되묻기(대칭 변형 ★3) (2) 극댓값과 극솟값의 차를 물으면 아래끝이 소거돼 ★3 (3) '극값을 갖도록 하는 $a$ 의 범위' 로 바꾸면 판별식 문제라 ★3~4."
```

```yaml
- id: GN-CALC1-201-417
  page: 201
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    이차함수 $y=f(x)$ 의 그래프(아래로 볼록 · $x$ 절편 $-1$ 과 $3$)가 주어질 때 $g(x)=\int_{x-1}^{x}f(t)\,dt$ 가 최솟값을 갖는 $x=\alpha$ 의 값.
  category: "그래프 → 이차식 복원 → g'(x)=f(x)-f(x-1) → 일차식의 근"
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "그림의 두 $x$ 절편을 $f(x)=a(x+1)(x-3)$ ($a>0$) 로 옮김 — 최고차 계수는 미지로 남겨도 됨"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "양끝이 모두 변수이므로 $g'(x)=f(x)-f(x-1)$ 로 바꿔야 최소 조건을 다룰 수 있음"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "그래프로 주어진 f 로 정의된 정적분 함수의 최대·최소"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 전환이 겹친 문항이다 — 그림을 식으로, 양끝 변수 적분을 $f(x)-f(x-1)$ 로. 그런데 그 차를 정리하면 $a(2x-3)$ 이라 최고차 계수 $a$ 가 부호로만 남아 소거되고, 최솟값을 주는 점은 $x=3/2$ 로 바로 떨어진다. 그래서 통찰은 둘이지만 계산 부담이 없다.
    [분류 이슈] STEP 2 ★3 출발 · 통찰 2개라 산식상 +1(★4) 후보이나 $a$ 가 소거돼 실제 작업량이 ★3 수준이라 라벨은 ★3 으로 둔다.
  tier: star_3
  mechanism_primary: "그림 → f(x)=a(x+1)(x-3) → g'(x)=f(x)-f(x-1)=a(2x-3) → 부호 전환점 α=3/2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{3}{2}$'
  answer_source: "답지"
  figure: 'crop:fig-201-417.png'
  latex: latex-bank/gn-calc1/items/201-417.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "그림의 두 절편($-1$, $3$)이 식 복원의 유일한 근거라 바꾸면 그림도 함께 바꿔야 한다. 구간 폭 1 을 $k$ 로 바꾸면 $\\alpha$ 가 두 절편의 중점에서 $k/2$ 만큼 옮겨간다 — 답은 항상 '중점 + 폭의 절반' 이므로 이 관계를 깨는 변형은 없다."
    creative: "(1) 최솟값 자체를 물으면 최고차 계수를 알아야 해 조건이 하나 더 필요하고 ★4 (2) 위로 볼록 그래프로 바꿔 최댓값을 묻기(★3) (3) 구간을 $[x,\\,x+2]$ 로 넓히기(★3) (4) 절편 대신 꼭짓점만 표시하면 복원이 어려워 ★4."
```

```yaml
- id: GN-CALC1-201-418
  page: 201
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    $\int_{0}^{x}f(t)\,dt=\frac13x^3+kx$ 이고 $f(1)=4$ 일 때 $\lim_{x\to-3}\frac{1}{x^2-9}\int_{-3}^{x}t^2f(t)\,dt$ 의 값($k$ 는 상수).
  category: "미분·대입으로 f 확정 → 분모 x²-9 를 (x+3)(x-3) 으로 쪼개 미분계수 정의"
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "분모가 $x-(-3)$ 이 아니라 $x^2-9$ 라 $(x+3)(x-3)$ 으로 쪼개 $\\frac{1}{x+3}$ 만 정의 꼴에 쓰고 남은 $\\frac{1}{x-3}\\to-\\frac16$ 을 따로 떼어냄"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "정적분으로 정의된 함수의 극한"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    앞부분은 표준이다 — 미분해 $f(x)=x^2+k$, $f(1)=4$ 로 $k=3$. 본론은 분모가 $x^2-9$ 라는 것이고, 이를 $(x+3)(x-3)$ 으로 쪼개면 앞쪽만 미분계수 정의가 되고 뒤쪽은 상수 극한으로 떨어진다. 피적분함수가 $t^2f(t)$ 라 대입값도 $9f(-3)$ 로 한 겹 있다.
    STEP 2 출발 ★3 · 통찰 1개(EQV d1) · M_total 7 → ★3.
  tier: star_3
  mechanism_primary: "미분·f(1)=4 로 f(x)=x²+3 → 분모 (x+3)(x-3) 분리 → (-3)²f(-3)/(-6)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-18$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/201-418.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "극한의 기준점은 분모 인수 중 하나와 적분 아래끝이 동시에 맞아야 한다($-3$) — 어긋나면 극한이 0 또는 발산한다. 가중치 $t^2$ 와 $f$ 의 계수는 자유이되 답이 정수가 되도록 $(-3)^2f(-3)$ 이 6 의 배수면 좋다."
    creative: "(1) 분모를 $x^3+27$ 로 올리면 인수분해가 한 겹 더 ★3~4 (2) 가중치를 없애면 보정만 남아 ★2~3 (3) 극한값을 주고 $k$ 를 되묻는 역방향(★3~4)."
```

### 연습문제 실력 UP

```yaml
- id: GN-CALC1-201-419
  page: 201
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: ["평가원 기출"]
  category_type: "연습문제 실력 UP"
  summary: |
    $F$, $G$ 가 각각 $f$, $g$ 의 한 부정적분일 때 ㈎ $\int_{1}^{x}f(t)\,dt=xf(x)-2x^2-1$ ㈏ $f(x)G(x)+F(x)g(x)=8x^3+3x^2+1$ 을 만족시킨다. $\int_{1}^{3}g(x)\,dx$ 의 값.
  category: "㈎ 미분으로 f 복원 → ㈏ 를 (FG)' 로 읽기 → FG 다항식 나눗셈으로 G 확정"
  M: {s: 3, k: 3, a: 3, t: 0}
  M_total: 9
  insights:
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "㈏ 의 좌변을 항별로 보지 않고 곱의 미분 역방향, 곧 $\\{F(x)G(x)\\}'$ 로 읽어 $FG$ 를 적분으로 복원"
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "㈎ 를 미분하면 $f(x)$ 가 양변에서 소거돼 $xf'(x)=4x$ 가 되고, 원식의 $x=1$ 대입으로 적분상수가 잡힘"
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$G$ 가 다항함수여야 한다는 요구가 $F$ 의 적분상수까지 묶어 결정한다 — $FG$ 가 $F$ 로 나누어떨어지는 조건으로 두 상수를 동시에 확정"
  insight_count: 3
  depth_score: 1.67
  type_id: null
  type_hint: "곱의 미분 역방향 — F(x)G(x) 복원"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    ㈎ 에서 $f(x)=4x-1$ 까지는 e10 계열 표준이다. 문제의 무게는 ㈏ 에 있다 — 좌변이 곱의 미분 꼴임을 알아보면 $F(x)G(x)=2x^4+x^3+x+C$ 가 되고, 여기서 $\int_{1}^{3}g=G(3)-G(1)$ 을 얻으려면 $G$ 를 실제로 복원해야 한다. $G$ 가 다항함수라는 조건이 $F=2x^2-x+C_1$ 의 상수까지 한 번에 잡아 준다.
    [분류 이슈] 실력 UP ★4 출발 · 통찰 3개라 ★5 후보이나 §2.13 이 요구하는 초저노출 유형(SC/VF/SYM/XU)이 없어 ★4 로 둔다.
  tier: star_4
  mechanism_primary: "㈎ 미분 → f(x)=4x-1 → ㈏ 는 (FG)' → FG=2x⁴+x³+x+C → G 가 다항식일 조건으로 상수 확정 → G(3)-G(1)"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$10$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/201-419.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "㈏ 우변은 $F$ 로 나누어떨어져야 $G$ 가 다항식이 된다 — 계수를 아무렇게나 바꾸면 문제가 성립하지 않으므로 $F$ 와 $G$ 를 먼저 정하고 $(FG)'$ 를 계산해 우변을 만드는 역순 설계가 안전하다. ㈎ 의 $-2x^2-1$ 은 $f$ 의 기울기와 $f(1)$ 을 정한다."
    creative: "(1) 묻는 값을 $\\int_{1}^{3}f(x)g(x)dx$ 처럼 바꾸면 복원 대상이 달라져 ★4 (2) ㈏ 를 $f G - F g$ 로 바꾸면 곱의 미분이 안 통해 다른 전략이 필요하고 ★5 후보 (3) $F(1)$ 같은 초기조건을 직접 주면 나눗셈 단계가 사라져 ★3."
```

```yaml
- id: GN-CALC1-201-420
  page: 201
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    $f(x)=-x^3+\frac32x^2+6x-k$ 에 대하여 $G(x)=\int_{1}^{x}f(t)\,dt$ 가 극솟값을 갖도록 하는 정수 $k$ 의 최댓값 $M$, 최솟값 $m$ 에 대하여 $\frac{M}{m}$ 의 값.
  category: "G 극소 ⟺ f 가 음→양 부호 변화 ⟺ f 의 극솟값<0 이고 극댓값>0"
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'$G$ 가 극솟값을 갖는다' 를 '$G'=f$ 가 어딘가에서 음에서 양으로 부호를 바꾼다' 로 옮김 — 최고차가 음인 삼차라 이 방향 전환은 증가구간에서만 가능"
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "그 부호 전환이 일어날 조건을 $f$ 의 극솟값 $<0$ 이고 극댓값 $>0$ 이라는 $k$ 부등식 두 개로 역추적"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "정적분으로 정의된 함수가 극값을 가질 조건 (상수 범위)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    $G'=f$ 까지는 한 줄이지만 그 뒤가 두 겹이다 — 삼차 $f$ 의 최고차가 음수라 $f$ 는 감소·증가·감소 꼴이고, 음에서 양으로 넘어가려면 증가구간 안에서 $x$ 축을 지나야 한다. 곧 $f$ 의 극솟값이 음, 극댓값이 양이라는 두 부등식이 되고 $k$ 가 $-7/2<k<10$. 정수 개수가 아니라 양 끝 정수를 묻는 형태라 경계 처리가 답을 가른다(T-경계 1개).
    실력 UP 출발 ★4 · 통찰 2개(EQV d2 · BW d2) · M_total 9 → ★5 후보이나 §2.13 초저노출 유형이 없어 ★4.
  tier: star_4
  mechanism_primary: "G'=f 의 부호가 음→양 ⟺ f의 극솟값<0 이고 극댓값>0 → -7/2<k<10 → 정수 M=9·m=-3"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$-3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/201-420.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "$-x^3+\\frac32x^2+6x$ 의 계수는 $f'$ 가 $-3(x-2)(x+1)$ 로 인수분해되게 고른 값이다 — 계수를 바꾸면 극점이 무리수가 되어 부등식 양 끝이 지저분해진다. $k$ 는 평행이동만 하므로 범위의 폭($10+7/2$)은 계수가 정한다. 답이 정수가 되려면 $M$ 이 $m$ 의 배수여야 한다."
    creative: "(1) 정수 $k$ 의 개수를 묻기(경계 포함 여부가 쟁점 ★4) (2) '극댓값과 극솟값을 모두 갖는다' 로 바꾸면 부호 전환이 두 번 필요해 ★4~5 (3) '극값을 갖지 않는다' 로 뒤집으면 여집합이라 ★3~4 (4) 최고차를 양수로 바꾸면 극소 조건의 방향이 반대가 된다."
```

```yaml
- id: GN-CALC1-201-421
  page: 201
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 실력 UP"
  summary: |
    다항함수 $f$ 가 $\lim_{x\to2}\frac{1}{x-2}\int_{1}^{x}(x-t)f(t)\,dt=3$ 을 만족시킬 때 $\int_{1}^{2}(4x+1)f(x)\,dx$ 의 값. 5지선다.
  category: "극한 조건 → 분자 h(2)=0 과 h'(2)=3 두 값 → ∫f · ∫tf 로 목표 적분 조립"
  M: {s: 3, k: 2, a: 3, t: 0}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "분모가 0 으로 가므로 분자 $h(x)=\\int_{1}^{x}(x-t)f\\,dt$ 도 $h(2)=0$ 이어야 하고 극한값은 $h'(2)$ — 하나의 극한 조건에서 두 개의 정적분 값이 나옴"
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$\\int_{1}^{2}f=3$ 과 $\\int_{1}^{2}tf=6$ 두 값을 묻는 적분 $\\int_{1}^{2}(4x+1)f$ 의 선형결합으로 묶음"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "(x-t) 꼴 정적분의 극한 조건에서 적분값 추출"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    $f$ 를 구하려 들면 정보가 모자라 막힌다 — $f$ 는 끝까지 모르는 채로 두고 필요한 정적분 값 두 개만 뽑아야 한다. 분모가 0 이므로 분자도 0, 곧 $\int_{1}^{2}(2-t)f(t)dt=0$ 이 첫 번째 값이고, 극한값 자체가 $h'(2)=\int_{1}^{2}f=3$ 이 두 번째다. 목표 적분은 이 둘의 선형결합.
    실력 UP 출발 ★4 · 통찰 2개(EQV d2 · CON d2) · M_total 8 → ★4 유지(★5 요건인 SC/VF/SYM/XU 없음).
  tier: star_4
  mechanism_primary: "h(2)=0 → ∫_1^2 tf=2∫_1^2 f · h'(2)=∫_1^2 f=3 → ∫_1^2(4x+1)f = 4·6+3"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '⑤'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/201-421.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "극한값 3 과 적분 구간 $[1,2]$, 가중치 $4x+1$ 의 계수는 자유이되 목표 적분이 $\\int f$ 와 $\\int tf$ 의 선형결합으로만 표현돼야 한다(가중치가 이차 이상이면 새 미지수가 생겨 풀리지 않는다). 5지선다 답이 정수가 되도록 계수를 고를 것."
    creative: "(1) 가중치를 $x^2$ 로 올려 일부러 풀리지 않게 만든 뒤 조건을 하나 더 주기(★5 후보) (2) 극한의 기준점을 아래끝 1 로 옮기면 $h(1)=0$ 이 자동이라 조건이 하나 줄어 ★3 (3) $f$ 가 일차함수라고 알려 주면 직접 복원이 가능해 ★3."
```

## 표본 판정 요약 (36문)

- ★ 분포: ★1 3 · ★2 19 · ★3 11 · ★4 3 · ★5 0
- 통찰형 18 · 절차형 18 · premium 0
- 통찰 유형 분포(연 23회): I-EQV 16 · I-RT 3 · I-CON 3 · I-BW 1 · (SC/VF/SYM/XU/PD/MI 0) — 단원 전체가 「조건을 미분 가능한 꼴로 옮기기」 하나에 걸려 있다.
- depth 분포: d1 11 · d2 12 · d3 0. 최대 depth_score 2.00(e11 · 398 · 399 · 404 · 410 · 415 · 420 · 421).
- type_hint 상위 5: 「적분 구간에 변수가 있는 경우 — 양변 미분·대입」 5 · 「적분 구간이 상수인 경우 — 정적분을 상수로 치환」 4 · 「적분 구간과 피적분함수에 변수가 있는 경우 — (x-t) 분리 후 두 번 미분」 4 · 「정적분으로 정의된 함수의 극대·극소」 4 · 「정적분으로 정의된 함수의 극한」 4
- 대상층: 하위권 3 · 중하위권 12 · 중위권 17 · 중상위권 1 · 상위권 3
- 그림: 2문(`crop:fig-196-401.png` · `crop:fig-201-417.png`) — 둘 다 이차함수 그래프에서 $x$ 절편으로 식을 복원하는 데 쓰인다.
- 선택형은 2문(415 · 421)뿐이고 나머지는 모두 값·함수를 직접 쓰는 형태다.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CALC1-196-e12 | 필수 예제 ★2 출발인데 통찰 0 · M_total 5 → 산식상 −1(★1) 후보. 극값 계산 두 번이 붙어 ★2 로 둠 | ★1 / ★2 |
| GN-CALC1-198-405 | 확인체크 ★2 출발, 통찰 0 · M_total 5 → −1 후보. 역방향 한 단계가 있어 ★2 유지 | ★1 / ★2 |
| GN-CALC1-200-415 | 평가원 기출 · STEP 2 · M_total 8 · 조건 셋 통합으로 ★4 후보이나 §2.13 저노출 통찰(SC/VF/SYM/XU/RT/PD/BW) 부재 → ★3 | ★3 / ★4 |
| GN-CALC1-201-417 | 통찰 2개(RT+EQV)라 산식상 +1(★4) 후보이나 최고차 계수가 소거돼 실제 작업량이 ★3 수준 | ★3 / ★4 |
| GN-CALC1-201-419 | 실력 UP · 통찰 3개(RT d2 · EQV · CON d2) → ★5 후보이나 초저노출 유형(SC/VF/SYM/XU) 없음 → ★4 | ★4 / ★5 |
| GN-CALC1-201-420 | 통찰 2개 모두 d2 · M_total 9 → ★5 후보이나 같은 이유로 ★4. 정수 $k$ 의 경계 처리(T-경계)가 실제 변별점 | ★4 / ★5 |
| GN-CALC1-194-e10 · 397 · 415 | 「양변 미분 시 $f$ 가 소거된다」를 통찰(I-EQV)로 셀지 이 단원의 표준 절차로 볼지 경계. 이 파일은 **표준(절차형)** 으로 통일했고, 415 만 조건 통합(I-CON) 때문에 통찰형이 되었다 | — |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: ⑴ 「적분 구간이 상수 — 정적분 치환」(e9 · 395 · 406 · 413), ⑵ 「적분 구간에 변수 — 양변 미분·대입」(e10 · 396 · 397 · 407 · 415), ⑶ 「$(x-t)$ 분리 후 두 번 미분」(e11 · 398 · 399 · 410), ⑷ 「$F'=f$ 부호로 극대·극소」(e12 · 400 · 411 · 416), ⑸ 「$F'=f$ 부호로 최대·최소」(e13 · 402 · 403), ⑹ 「정적분의 극한 = 미분계수 정의」(394 · e14 · 404 · 405 · 418). 이 여섯이 이 단원의 실제 골격이다.
- **통합해도 될 유형**: 「상수 치환과 양변 대입을 함께 쓰는 등식」(408 · 414)은 ⑴ 의 변형으로 흡수 가능하다. 「그래프로 주어진 $f$」(401 · 417)도 ⑷·⑸ 의 그림 변형으로 두되, 식 복원 단계가 별도 통찰(I-RT)이라는 표시는 남길 것.
- **base ★ 제안**: ⑴⑵ base 2 · ⑶ base 2(미지상수 둘이면 3) · ⑷⑸ base 2(조건 역추적이면 3) · ⑹ base 2(구간 보정이 있으면 3). 실력 UP 3문(419 · 420 · 421)은 기존 여섯 유형 어디에도 깔끔히 들어가지 않아 「부정적분 곱의 미분 복원」 · 「극값 존재 조건으로 상수 범위」 · 「극한 조건에서 적분값 추출」 세 개를 base 4 로 신설하는 편이 낫다.
- **감쇠 후보**: 이 단원에서 I-EQV 는 18회로 사실상 단원의 기본기라 카탈로그 작성 시 §2.9 학습 자산화 상위 유형으로 두고 d3 을 d2 로 강등하는 것이 맞다.
