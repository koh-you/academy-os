---
name: mechanism-데이터-GN-CM2-32
description: 개념원리 공통수학2 32 무리식(1/1 · 277-647~278-652) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학2 (22개정) · 전사본 latex-bank/gn-cm2
  section: 32 무리식
  unit_code: CM2-32
  part: "1/1"
  extract_range: "277~278쪽 · 277-647~278-652"
  total_problems: 7
  unit_total: 7
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm2/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm2/items/<id>.tex
  image_source: latex-bank/gn-cm2/figures/ (crops.json)
---

# 개념원리 공통수학2 · 32 무리식 (1/1) 정독 데이터 (v1.0)

이 파일은 32단원 7문 전수(277~278쪽 · 277-647~278-652)를 다룬다. 구역은 두 개다 — 「개념원리 익히기」 통번호 3문(277-647~649)과 「필수·발전 예제」 4문(필수 예제 1 · 그 아래 확인체크 3). 연습문제·특강 구역은 이 단원에 없고, 그림 문항과 선택지 문항도 없다. 단원 전체가 **무리식 두 도구**로 이루어져 있다 — ⑴ 무리식이 실수가 되는 조건(근호 안 ≥ 0 · 분모의 근호 > 0) ⑵ 켤레를 이용한 분모 유리화와 그 응용(수 대입 · 대칭식 환원 · 망원합).

벤더 난이도 신호와 이 파일의 출발점 규약: 「개념원리 익히기」 통번호 ★1 · 「필수」 예제 ★2 · tag 「확인체크」는 구역 신호를 우선해 바로 위 예제와 같은 출발점 ★2 로 두었다(예제의 유제 배치이므로 통번호 익히기의 ★1과 구분한다). 출발점에서 M_total·통찰로 ±1 조정했다. 이 단원에서 매 문항 반복되는 **켤레 곱하기 유리화** 자체는 이 단원의 학습 도구이므로 통찰로 세지 않고 Mₛ·Mₖ 에 반영했다. 대신 유리화를 **어디에 쓰는지**가 갈리는 지점 — 수를 대입하기 전에 문자 상태에서 정리해 이중근호를 피하는 동치 변환(I-EQV), 켤레쌍 $x,y$ 의 개별 제곱근 대신 $x+y$·$xy$ 대칭식으로 환원(I-SYM), 일반항을 차 꼴로 바꿔 연쇄 소거를 발견(I-PD) — 을 통찰로 셌다. 결과적으로 익히기 3문과 확인체크 1문은 절차형, 예제·확인체크 3문은 통찰형으로 갈렸다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-CM2-277-647
  page: 277
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ 네 무리식($2x+\sqrt{x+1}$ · $\sqrt{x-1}-\sqrt{2x-4}$ · $\sqrt{x+3}+\dfrac{1}{\sqrt{2-x}}$ · $\dfrac{\sqrt{2x-1}}{\sqrt{4-x}}$)의 값이 실수가 되도록 하는 실수 $x$ 의 값의 범위.
  category: "근호 안 ≥ 0 · 분모 쪽 근호는 > 0 → 연립 → 공통 범위"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "무리식이 실수가 되는 조건(정의역)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    근호마다 (안 ≥ 0) 을 세우고, 분모에 놓인 근호만 등호를 빼(안 > 0) 교집합을 잡는 한 겹 절차.
    ⑶⑷ 의 분모 쪽 등호 제외(T-경계)와 근호가 둘 이상일 때 조건 누락(T-범위)이 함정 두 갈래라 Mₜ=2.
    통찰 없음 · M_total 6 이라 −1 조건에도 걸리지 않으므로 익히기 구역 출발점 ★1 유지.
  tier: star_1
  mechanism_primary: "각 근호에 (안 ≥ 0), 분모 근호에는 (안 > 0) → 연립 → 공통 범위"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $x\ge -1$ ⑵ $x\ge 2$ ⑶ $-3\le x<2$ ⑷ $\dfrac{1}{2}\le x<4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/277-647.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '근호 안 일차식의 계수·상수($x+1$ → $3x+2$, $2-x$ → $5-2x$)를 자유롭게 바꿀 수 있음. 제약: ⑵처럼 근호가 둘이면 두 조건의 교집합이 공집합이 되지 않게 방향을 맞추고, ⑶⑷처럼 분모에 근호를 둘 때는 그 근호만 등호가 빠져 답이 반닫힌 구간이 되도록 유지한다. 계수 부호를 뒤집으면 부등호 방향도 함께 뒤집힌다.'
    creative: '(1) 근호 안을 이차식($\sqrt{x^2-4}$)으로 바꾸면 이차부등식 풀이가 붙어 ★2 (2) 분모를 $\sqrt{x+3}-2$ 처럼 근호끼리의 차로 두면 안 ≥ 0 과 분모 ≠ 0 이 따로 필요해 T-경계가 늘고 ★2 (3) 범위를 주고 그 범위가 나오도록 하는 미지의 상수를 거꾸로 묻는 역문제로 바꾸면 I-BW 가 붙어 ★3.'
```

```yaml
- id: GN-CM2-277-648
  page: 277
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑶ 세 식($\dfrac{x}{\sqrt{x+4}-2}$ · $\dfrac{6}{\sqrt{x+3}-\sqrt{x-3}}$ · $\dfrac{\sqrt{x-2}-1}{\sqrt{x-2}+1}$)의 분모를 유리화.
  category: "분모의 켤레를 분자·분모에 곱하기 → 합차 공식으로 분모 정리 → 약분"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "분모의 유리화(켤레 곱하기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    세 소문항 모두 분모의 켤레를 곱해 $(\sqrt{A})^2-(\sqrt{B})^2$ 로 분모를 유리수화하는 같은 절차.
    ⑴ 은 분모가 $x$ 로 정리되어 분자의 $x$ 와 약분되는 것, ⑶ 은 분모가 같은 꼴이라 분자가 완전제곱으로 전개되는 것만 챙기면 된다.
    문자식 변형이라 Mₐ=2, 계산량은 일반 학생 수준이라 Mₖ=1. 통찰 없음 · 익히기 구역 ★1.
  tier: star_1
  mechanism_primary: '분모의 켤레 곱하기 → 분모 $(\sqrt{A})^2-(\sqrt{B})^2$ 로 유리수화 → 약분·정리'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\sqrt{x+4}+2$ ⑵ $\sqrt{x+3}+\sqrt{x-3}$ ⑶ $\dfrac{x-1-2\sqrt{x-2}}{x-3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/277-648.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '근호 안 일차식과 바깥 상수($x+4$·$2$, $x\pm 3$·$6$, $x-2$·$1$)를 바꿀 수 있음. 제약: ⑴은 유리화 후 분모가 분자와 약분되도록 (상수)²가 근호 안 상수항과 일치해야 하고, ⑵는 두 근호 안의 차가 분자 상수의 약수여야 답이 근호 두 개의 합으로 깔끔히 떨어진다.'
    creative: '(1) 분모를 세 항($\sqrt{a}+\sqrt{b}+\sqrt{c}$)으로 늘려 두 번 유리화하게 하면 ★3 (2) 유리화한 결과만 주고 원래 식을 되묻는 역문제로 바꾸면 I-BW ★2 (3) 유리화 후 식에 특정 수를 대입해 값을 구하게 하면 278-e1 골조와 합쳐져 ★2.'
```

```yaml
- id: GN-CM2-277-649
  page: 277
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴⑵ 두 무리분수식의 차·합($\dfrac{1}{\sqrt{x}+\sqrt{y}}-\dfrac{1}{\sqrt{x}-\sqrt{y}}$ · $\dfrac{2x}{2-\sqrt{x+1}}+\dfrac{2x}{2+\sqrt{x+1}}$)을 계산.
  category: "켤레끼리의 합·차 → 한 번에 통분하면 분모가 유리수화 → 분자 정리"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "켤레 분모를 가진 두 분수의 합·차 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    두 분모가 서로 켤레라 통분하는 순간 분모가 $x-y$·$4-(x+1)$ 로 유리수화되고 분자는 근호 항만 남는 구조.
    각 항을 따로 유리화해 더해도 같은 결과라 갈래 선택이라 부를 만한 부담은 없다(I-SC 불인정).
    통찰 없음 · M_total 6 · 익히기 구역 출발점 ★1 유지.
  tier: star_1
  mechanism_primary: "켤레 분모끼리 통분 → 분모 유리수화 → 분자에 남은 근호 항 정리"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{-2\sqrt{y}}{x-y}$ ⑵ $\dfrac{8x}{3-x}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/277-649.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '분자 상수와 근호 안 식($2x$·$x+1$, 상수 $2$)을 바꿀 수 있고 합↔차를 뒤집을 수 있음. 제약: 두 분모가 정확히 켤레여야 통분 뒤 분모가 유리수로 떨어지고, 합으로 두면 분자의 근호가 소거되어 유리식이, 차로 두면 근호가 남는다 — 답의 꼴이 달라지므로 의도한 쪽을 고른다.'
    creative: '(1) 두 항을 더한 결과를 주고 근호 안 식을 되묻는 역문제(I-BW ★2) (2) 세 항 $\dfrac{1}{\sqrt{x}+\sqrt{y}}+\dfrac{1}{\sqrt{y}+\sqrt{z}}+\cdots$ 로 늘려 소거 구조를 보게 하면 278-652 의 망원합 골조로 넘어가 ★3 (3) $x,y$ 에 구체적인 무리수를 대입해 값을 묻게 하면 ★2.'
```

### 필수·발전 예제

```yaml
- id: GN-CM2-278-e1
  page: 278
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    $x=\sqrt{3}$ 일 때 $\dfrac{\sqrt{x+1}-\sqrt{x-1}}{\sqrt{x+1}+\sqrt{x-1}}$ 의 값.
  category: '대입 전에 분모 유리화 → $x-\sqrt{x^2-1}$ 로 정리 → 수 대입'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '$\sqrt{3}$ 을 먼저 대입하면 $\sqrt{\sqrt{3}+1}$ 같은 이중근호가 되어 막히므로, 문자 상태에서 분모를 유리화해 $x-\sqrt{x^2-1}$ 이라는 계산 가능한 동치 꼴로 먼저 바꾼다'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "무리식의 계산 — 켤레 유리화로 정리한 뒤 수 대입"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분자·분모에 $\sqrt{x+1}-\sqrt{x-1}$ 을 곱하면 분자는 완전제곱 전개로 $2x-2\sqrt{x^2-1}$, 분모는 $2$ 가 되어 식이 $x-\sqrt{x^2-1}$ 한 줄로 줄어든다.
    핵심은 계산이 아니라 **대입 순서** — 수를 먼저 넣으면 이중근호로 막히는 것을 알고 문자 상태에서 동치 변환하는 판단이라 I-EQV d1 하나를 셌다.
    필수 예제 출발점 ★2 · 통찰 1개(+1 조건 미달) · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: '분모의 켤레 곱하기 → $x-\sqrt{x^2-1}$ 로 정리 → $x=\sqrt{3}$ 대입'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\sqrt{3}-\sqrt{2}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/278-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '대입값 $x=\sqrt{3}$ 과 근호 안 상수 $1$ 을 바꿀 수 있음($x=\sqrt{5}$, $\sqrt{x+2}$ 등). 제약: 정리된 꼴이 $x-\sqrt{x^2-c^2}$ 이므로 $x^2-c^2$ 이 다시 완전제곱이거나 깔끔한 무리수가 되도록 대입값을 고르고, $x\ge c$ 를 만족해야 원식이 실수다.'
    creative: '(1) 분자·분모의 부호를 바꿔 $\dfrac{\sqrt{x+1}+\sqrt{x-1}}{\sqrt{x+1}-\sqrt{x-1}}$ 로 두면 답이 $x+\sqrt{x^2-1}$ 로 바뀔 뿐 골조 동일(★2) (2) 원식의 값을 주고 $x$ 를 되묻는 역문제로 두면 I-BW 가 추가되어 ★3 (3) 대입값을 $x=\dfrac{1}{\sqrt{3}}$ 처럼 $x<1$ 인 수로 두면 정의역 위배 판정까지 필요해 I-VF 가 붙고 ★3.'
```

```yaml
- id: GN-CM2-278-650
  page: 278
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴⑵ 켤레 분모를 가진 두 분수의 합·차($\dfrac{1}{x+\sqrt{x^2-1}}+\dfrac{1}{x-\sqrt{x^2-1}}$ · $\dfrac{x}{\sqrt{x}+\sqrt{x-1}}-\dfrac{x}{\sqrt{x}-\sqrt{x-1}}$)를 계산.
  category: "켤레끼리 통분 → 분모가 상수 1 → 분자만 정리"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "켤레 분모를 가진 두 분수의 합·차 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    277-649 와 같은 골조인데 두 소문항 모두 통분 후 분모가 $x^2-(x^2-1)=1$, $x-(x-1)=1$ 로 **정확히 1** 이 되도록 설계돼 분자만 남는다.
    ⑵ 에서 차의 순서를 뒤집으면 부호가 반대로 나오는 것(T-부호)이 유일한 함정.
    통찰 없음 · M_total 6 → 확인체크 출발점 ★2 유지(익히기 통번호가 아니라 예제 유제라 ★1로 내리지 않음).
  tier: star_2
  mechanism_primary: "켤레 분모끼리 통분 → 분모 1 → 분자의 근호 항만 정리"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $2x$ ⑵ $-2x\sqrt{x-1}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/278-650.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '근호 안 식($x^2-1$ → $x^2-4$, $x-1$ → $x-3$)과 분자($1$·$x$)를 바꿀 수 있음. 제약: 분모가 1 로 떨어지는 맛을 살리려면 두 근호 안의 차가 1 이어야 한다(그렇지 않으면 분모가 상수 $c$ 로 남아 답에 분수가 생긴다). 정의역 $x\ge 1$ 류를 만족하도록 상수를 고른다.'
    creative: '(1) 합↔차를 서로 바꾸면 ⑴은 근호가 남고 ⑵는 소거되어 답 꼴이 뒤집힘(★2 유지) (2) 결과 $2x$ 를 주고 원래 식을 복원하게 하는 역문제(I-BW ★3) (3) $x+\sqrt{x^2-1}=t$ 로 두고 $t+\dfrac{1}{t}$ 를 묻는 치환형으로 바꾸면 상반식 골조가 붙어 ★3.'
```

```yaml
- id: GN-CM2-278-651
  page: 278
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $x=\dfrac{1}{\sqrt{2}-1}$, $y=\dfrac{1}{\sqrt{2}+1}$ 일 때 $\dfrac{\sqrt{x}+\sqrt{y}}{\sqrt{x}-\sqrt{y}}$ 의 값.
  category: '$x,y$ 유리화 → 분모 유리화로 $x+y$·$xy$·$x-y$ 대칭식만 남기기 → 대입'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$x=\sqrt{2}+1$, $y=\sqrt{2}-1$ 이 켤레쌍이라 $\sqrt{x}$·$\sqrt{y}$ 를 각각 구하려 하면 이중근호가 된다 — 분모를 유리화해 $\dfrac{x+y+2\sqrt{xy}}{x-y}$ 로 만들면 대칭식 $x+y=2\sqrt{2}$·$xy=1$·$x-y=2$ 만으로 끝난다'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "켤레쌍으로 주어진 두 수의 제곱근 식 — 대칭식 환원"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    먼저 $x,y$ 를 유리화해 $\sqrt{2}+1$, $\sqrt{2}-1$ 을 얻는 것까지는 절차지만, 그다음 $\sqrt{\sqrt{2}+1}$ 로 들어가면 풀리지 않는다.
    분모를 유리화해 분자를 $(\sqrt{x}+\sqrt{y})^2=x+y+2\sqrt{xy}$ 로 바꾸면 켤레쌍의 합·곱만 필요해지고, $xy=1$ 이라 근호가 통째로 사라진다 — 켤레 대칭성 활용이라 I-SYM d2.
    [분류 이슈] 확인체크 출발점은 ★2 이고 통찰 1개는 형식상 +1 조건(2개 이상 또는 depth 3) 미달이지만, 이중근호 회피 판단이 없으면 풀이가 끊기는 진입 저항이 있어 라벨을 ★3 으로 두고 기록한다.
  tier: star_3
  mechanism_primary: '$x,y$ 유리화 → 분모 유리화로 $\dfrac{x+y+2\sqrt{xy}}{x-y}$ → 대칭식 $x+y$·$xy$·$x-y$ 대입'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\sqrt{2}+1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/278-651.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '켤레쌍의 밑 무리수를 바꿀 수 있음($\sqrt{3}\pm 1$, $\sqrt{5}\pm 2$ 등). 제약: $xy$ 가 완전제곱(가급적 1)이어야 $2\sqrt{xy}$ 의 근호가 사라지고, $x>y>0$ 이어야 $\sqrt{x}-\sqrt{y}$ 가 0 이 아닌 양수로 정의된다. $x+y$·$x-y$ 가 모두 깔끔해지도록 쌍을 고른다.'
    creative: '(1) 묻는 식을 $\dfrac{\sqrt{x}-\sqrt{y}}{\sqrt{x}+\sqrt{y}}$ 로 뒤집으면 답만 역수가 되고 골조 동일(★3) (2) $\sqrt{x}+\sqrt{y}$ 자체의 값을 묻게 하면 제곱 후 양수 판정이 붙어 I-VF 추가 ★3~4 (3) $xy\ne 1$ 인 켤레쌍으로 두면 근호가 남아 대칭식 환원의 맛이 사라지고 계산 마찰만 늘어 ★ 는 그대로인데 질이 떨어짐(피할 것) (4) $x+y$·$xy$ 만 조건으로 주고 $x,y$ 를 숨기면 추상도가 올라 ★4.'
```

```yaml
- id: GN-CM2-278-652
  page: 278
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $f(x)=\dfrac{1}{\sqrt{x}+\sqrt{x+1}}$ 일 때 $f(1)+f(2)+f(3)+\cdots+f(99)$ 의 값.
  category: '일반항 유리화로 $f(x)=\sqrt{x+1}-\sqrt{x}$ → 연쇄 소거 → 양 끝만 남김'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '99개를 각각 계산할 수 없으므로 일반항을 유리화해 $f(x)=\sqrt{x+1}-\sqrt{x}$ 라는 차 꼴 동치식으로 먼저 바꾼다'
    - step: 2
      type: I-PD
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '차 꼴을 $x=1$ 부터 $99$ 까지 더하면 이웃한 $\sqrt{2},\sqrt{3},\dots,\sqrt{99}$ 가 모두 상쇄되고 $\sqrt{100}-\sqrt{1}$ 만 남는 망원 구조를 스스로 발견해야 한다'
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "무리식 유리화를 이용한 망원합(연쇄 소거)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    유리화 자체는 이 단원 도구지만, 그 결과가 **차 꼴**이라는 점과 그 차를 99개 더하면 중간 항이 전부 지워진다는 점을 연결해야 풀린다.
    유리화로의 동치 변환(I-EQV d1)과 소거 패턴 발견(I-PD d2) 두 단계를 셌고, 항이 99개라 나열로는 도달할 수 없어 패턴 발견이 필수다.
    확인체크 출발점 ★2 + 통찰 2개(+1 조건 충족) → ★3.
  tier: star_3
  mechanism_primary: '$f(x)$ 유리화 → $\sqrt{x+1}-\sqrt{x}$ → 1부터 99까지 연쇄 소거 → $\sqrt{100}-\sqrt{1}$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$9$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/278-652.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '합의 끝항 $99$ 를 바꿀 수 있음. 제약: 답이 정수로 떨어지려면 마지막 $\sqrt{n+1}$ 이 유리수여야 하므로 끝항을 $n+1$ 이 완전제곱수가 되는 값($3,8,15,24,35,48,63,80,99,120$)에서 고른다. 시작항을 $1$ 이 아닌 값으로 옮기면 시작 쪽 $\sqrt{a}$ 도 완전제곱이어야 한다.'
    creative: '(1) 근호 안을 $\sqrt{2x-1}+\sqrt{2x+1}$ 처럼 등차로 바꾸면 소거 후 계수 $\dfrac{1}{2}$ 가 붙어 한 단계 늘고 ★3 유지 (2) 합의 값을 주고 끝항 $n$ 을 되묻는 역문제로 두면 I-BW 추가 ★4 (3) $f(1)+f(3)+f(5)+\cdots$ 처럼 건너뛰어 더하면 소거가 일어나지 않아 골조가 무너짐(피할 것) (4) $f$ 를 명시하지 않고 $\sum$ 의 일반항만 주면 추상도가 올라 ★4.'
```

## 표본 판정 요약 (7문)

- ★ 분포: ★1 3 · ★2 2 · ★3 2 · ★4 0 · ★5 0
- 통찰형 3(278-e1 · 278-651 · 278-652) · 절차형 4 · premium 0
- 통찰 유형 분포: I-EQV 2 · I-SYM 1 · I-PD 1 (총 4개 라벨 · depth 3 없음)
- type_hint 상위: 「켤레 분모를 가진 두 분수의 합·차 계산」 2(277-649 · 278-650) · 「무리식이 실수가 되는 조건(정의역)」 1 · 「분모의 유리화(켤레 곱하기)」 1 · 「무리식의 계산 — 켤레 유리화로 정리한 뒤 수 대입」 1 · 「켤레쌍으로 주어진 두 수의 제곱근 식 — 대칭식 환원」 1 (+ 「망원합」 1)
- M_total: 7문 전부 6(단원이 짧고 도구가 하나라 노동량 분산이 없음 — 변별은 전적으로 통찰 유무에서 나옴)
- 그림: 0문 · 선택지 문항: 0문 · 소문항 묶음 문항: 4문(277-647 ⑴~⑷ · 277-648 ⑴~⑶ · 277-649 ⑴⑵ · 278-650 ⑴⑵)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CM2-278-651 | 확인체크 출발점 ★2 · 통찰 1개(d2)로 형식상 +1 조건(2개 이상 또는 depth 3) 미달이지만, 이중근호 회피·대칭식 환원 판단이 없으면 풀이가 끊기는 진입 저항이 있어 ★3 으로 라벨링 | ★2 / ★3 |
| GN-CM2-277-649 · GN-CM2-278-650 | 두 문항의 mechanism 이 사실상 동일(켤레 분모 통분 → 분모 유리수화)인데 구역 신호만으로 ★1 / ★2 로 갈렸다. 650 쪽은 분모가 정확히 1 이 되도록 설계돼 오히려 더 쉬울 수도 있음 — 카탈로그 확정 시 한 유형으로 묶고 ★ 를 맞출지 결정 필요 | 둘 다 ★2 후보 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 단원의 실질 유형은 **둘**이다 — ⑴ 「무리식이 실수가 되는 조건(정의역)」(277-647 단독) ⑵ 「켤레를 이용한 분모 유리화」(나머지 6문). 카탈로그에서는 ⑴을 독립 base ★1 유형으로 세우고, ⑵는 **단일 유형이 아니라 용도별 하위 유형 4개**로 쪼개야 학생 체감과 맞는다: ⓐ 순수 유리화(277-648 · base ★1) ⓑ 켤레 분모 두 분수의 합·차(277-649 · 278-650 · base ★2 — 위 이슈대로 하나로 통합 권장) ⓒ 유리화 후 수 대입(278-e1 · 278-651 · base ★2, 켤레쌍 대칭식이 붙으면 ★3) ⓓ 유리화로 만든 차 꼴의 망원합(278-652 · base ★3).
- ⓓ 는 이 단원 도구를 쓰지만 실제 변별 축은 **패턴 발견**이라 무리식 카탈로그가 아니라 수열/합 쪽 유형과 교차 등재하는 편이 맞다. 단독 유형으로 세울 경우 base ★3 · 저노출 유형(I-PD) 슬롯으로 표시할 것.
- 「이중근호를 피하려고 문자 상태에서 먼저 정리한다」(278-e1 · 278-651 공통)는 이 단원에서 반복되는 **학습 자산화 후보 통찰**이다. 카탈로그를 만들 때 이 단원의 decayed_types 에 I-EQV 를 넣을지 검토할 것 — 넣으면 278-e1 의 통찰 라벨이 사실상 무력화되어 절차형 ★2 로 내려간다.
