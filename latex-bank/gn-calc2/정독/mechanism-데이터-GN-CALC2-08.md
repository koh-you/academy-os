---
name: mechanism-데이터-GN-CALC2-08
description: 개념원리 미적분Ⅱ 08 지수함수와 로그함수의 극한(1/1 · 68~70쪽 68-129~70-134 · 8문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 미적분Ⅱ (22개정 · 학생용) · 전사본 latex-bank/gn-calc2
  section: 08 지수함수와 로그함수의 극한
  unit_code: CALC2-08
  part: "1/1"
  extract_range: "68~70쪽 · 68-129~70-134"
  total_problems: 8
  unit_total: 8
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). depth_score 는 insights 의 effective_depth 평균(통찰 없으면 0.00). insight_type 은 insights 가 비어 있으면 절차형, 하나라도 있으면 통찰형. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-calc2/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-calc2/items/<id>.tex
  image_source: latex-bank/gn-calc2/figures/ (crops.json)
---

# 개념원리 미적분Ⅱ · 08 지수함수와 로그함수의 극한 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 미적분Ⅱ 08단원 「지수함수와 로그함수의 극한」 전체(68~70쪽 · 68-129~70-134 · 8문항)를 다룬다. 구역은 둘뿐이다. **개념원리 익히기** 2문(68-129 · 68-130 · 개념 직후 확인 드릴)과 **필수·발전 예제** 6문(69-e1 · 70-e2 두 개의 tag 「필수」 예제와 그 뒤에 붙는 tag 「확인체크」 유제 네 문)이다. 단원 전체에 연습문제 STEP 구역이 없어 범위가 짧고 난이도 폭도 좁다. 개념원리 고등은 구역이 곧 난이도 층이어서 개념원리 익히기 ★1 · 필수 예제 ★2 를 출발점으로 삼고 M_total·통찰로 ±1 을 조정했다. 「확인체크」는 벤더 신호만 보면 ★1 출발이지만 실제로는 바로 앞 필수 예제의 유제여서 대응 예제와 같은 출발점(★2)을 썼다(이 결정은 분류 이슈 표에 한 줄로 남겼다). 그림 문항은 없다.

단원의 도구는 넷이다. ① **밑과 1 의 대소**로 $x\to\infty$·$x\to-\infty$ 에서 지수함수가 $0$ 으로 가는지 $\infty$ 로 가는지 판정, ② **진수의 접근 방향**($x\to0+$ 인가 $x\to\infty$ 인가)과 밑의 대소로 로그함수의 $\pm\infty$ 판정, ③ $\frac{\infty}{\infty}$·$\infty-\infty$ 꼴의 지수식에서 **밑이 가장 큰 항으로 나누거나 묶어내기**($0<r<1$ 이면 $r^x\to0$), ④ 로그의 차를 **진수의 몫 $\log_a\frac{A}{B}$ 로 합쳐서** 부정형을 진수의 유리식 극한으로 옮기기. ①②가 개념원리 익히기 2문이고 ③④가 예제·유제 6문이다. 그래서 이 범위의 통찰 라벨은 I-EQV 하나에 집중되며(③④의 「합치거나 묶어내지 않으면 부정형이 풀리지 않는다」는 동치 변환), 극한값이 주어지고 상수를 역산하는 69-132·70-134 는 표준 미정계수 절차로 보아 절차형으로 뒀다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 / 골조를 유지한 설정 변형과 ★ 가 변하는 지점)를 채웠다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-CALC2-68-129
  page: 68
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑹ $\lim_{x\to0}3^x$ · $\lim_{x\to2}\left(\frac{1}{2}\right)^x$ · $\lim_{x\to\infty}\frac{1}{5^x}$ · $\lim_{x\to\infty}\left(\frac{5}{4}\right)^x$ · $\lim_{x\to-\infty}\left(\frac{4}{3}\right)^x$ · $\lim_{x\to-\infty}\left(\frac{2}{5}\right)^x$ 를 각각 조사하는 기본 지수함수 극한.
  category: '지수함수의 연속성 → 유한점은 대입 · $x\to\pm\infty$ 는 밑과 $1$ 의 대소로 결정'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '지수함수의 극한 — 밑의 대소와 $x\to\pm\infty$ 방향'
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴⑵ 는 지수함수가 모든 실수에서 연속이므로 그대로 대입한다. ⑶~⑹ 은 밑이 $1$ 보다 큰지 작은지와 $x$ 가 어느 무한대로 가는지 두 정보만 맞추면 $0$ 과 $\infty$ 가 결정된다.
    $\frac{1}{5^x}=\left(\frac{1}{5}\right)^x$ 로 고치는 것과, $x\to-\infty$ 에서 결론이 뒤집히는 것(T-부호)이 유일한 걸림돌이다.
    개념원리 익히기 ★1 출발 · 통찰 0 · M_total 4 → ★1 유지. 그래프 개형만 떠올리면 끝나는 정의 직후 드릴이다.
  tier: star_1
  mechanism_primary: '유한점은 연속성으로 대입 → $x\to\pm\infty$ 는 밑을 $1$ 과 비교해 $0$ 또는 $\infty$'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $1$ ⑵ $\dfrac{1}{4}$ ⑶ $0$ ⑷ $\infty$ ⑸ $0$ ⑹ $\infty$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/68-129.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑($2$·$3$·$\frac{2}{3}$·$\frac{7}{4}$ 등)과 유한점($x\to-1$·$x\to3$)을 자유롭게 바꿀 수 있다. 제약: 밑은 $1$ 이 아닌 양수여야 하고, 유한점 대입 결과가 정수나 간단한 분수로 떨어지게 지수를 잡는다. 밑이 $1$ 보다 큰지 작은지를 바꾸면 ⑶~⑹ 의 답이 $0$ 과 $\infty$ 로 통째로 뒤집히므로 답을 함께 고친다.'
    creative: '(1) $\frac{1}{5^x}$ 처럼 역수 꼴로 위장해 밑을 다시 읽게 하기(★1 유지) (2) $\lim_{x\to\infty}\left(\frac{a-1}{2}\right)^x$ 가 $0$ 이 되도록 하는 $a$ 의 범위를 묻는 역방향(★2 · I-BW) (3) $2^x$ 와 $3^{-x}$ 의 합·차를 함께 주어 한 식 안에서 두 방향을 모두 판정하게 하기(★2).'
```

```yaml
- id: GN-CALC2-68-130
  page: 68
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑹ $\lim_{x\to1}\log_3x$ · $\lim_{x\to3}\log_{\frac{1}{3}}x$ · $\lim_{x\to0+}\log_5x$ · $\lim_{x\to0+}\log_{\frac{1}{10}}x$ · $\lim_{x\to\infty}\log_{12}x$ · $\lim_{x\to\infty}\log_{\frac{1}{4}}x$ 를 각각 조사하는 기본 로그함수 극한.
  category: '로그함수의 연속성 → 유한점은 대입 · $x\to0+$ 와 $x\to\infty$ 는 밑과 $1$ 의 대소로 $\pm\infty$ 결정'
  M: {s: 1, k: 1, a: 1, t: 2}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '로그함수의 극한 — 밑의 대소와 진수의 접근 방향($x\to0+$ · $x\to\infty$)'
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴⑵ 는 정의역 안의 점이므로 대입한다($\log_{\frac{1}{3}}3=-1$ 에서 밑이 역수일 때 부호가 뒤집히는 것만 주의).
    ⑶~⑹ 은 진수가 양수여야 하므로 $0$ 에는 오른쪽에서만 접근한다는 것(T-범위)과, 밑이 $1$ 보다 작으면 $\pm\infty$ 가 통째로 뒤집힌다는 것(T-부호) 두 가지만 맞추면 된다.
    개념원리 익히기 ★1 출발 · 통찰 0 · M_total 5 → ★1 유지. 68-129 의 지수 버전과 한 쌍으로 배치된 드릴이다.
  tier: star_1
  mechanism_primary: '유한점은 연속성으로 대입 → $x\to0+$·$x\to\infty$ 는 밑을 $1$ 과 비교해 $+\infty$ 또는 $-\infty$'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $0$ ⑵ $-1$ ⑶ $-\infty$ ⑷ $\infty$ ⑸ $\infty$ ⑹ $-\infty$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/68-130.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑($2$·$7$·$\frac{1}{2}$·$\frac{1}{5}$)과 유한점의 진수를 바꿀 수 있다. 제약: 밑은 $1$ 이 아닌 양수, 진수는 양수여야 하고, 유한점은 진수가 밑의 정수 거듭제곱일 때 답이 정수로 떨어진다. $x\to0-$ 는 정의되지 않으므로 만들지 않는다.'
    creative: '(1) $\lim_{x\to2-}\log_3(2-x)$ 처럼 진수 안을 일차식으로 바꿔 어느 쪽에서 접근해야 하는지부터 판단하게 하기(★2 · T-범위 강화) (2) $\log_a x$ 의 $x\to\infty$ 극한이 $-\infty$ 가 되도록 하는 $a$ 의 범위를 묻기(★2 · I-BW) (3) $\lim_{x\to0+}\log_5x$ 와 $\lim_{x\to\infty}\log_5\frac{1}{x}$ 를 나란히 두어 같은 극한임을 설명하게 하기(★2 · I-EQV).'
```

### 필수·발전 예제

```yaml
- id: GN-CALC2-69-e1
  page: 69
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑶ $\lim_{x\to\infty}\frac{3^x}{5^x+3^x}$ · $\lim_{x\to\infty}(3^x-2^x)^{\frac{1}{x}}$ · $\lim_{x\to-\infty}\frac{2^x-2^{-x}}{2^x+2^{-x}}$ 의 극한값 구하기.
  category: '밑이 가장 큰 항으로 나누거나 묶어내기 → $0<r<1$ 인 $r^x\to0$ 대입'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$(3^x-2^x)^{\frac{1}{x}}$ 을 $3\left\{1-\left(\frac{2}{3}\right)^x\right\}^{\frac{1}{x}}$ 로 묶어 밑 $3$ 을 지수 밖으로 빼내는 동치 변환 — 묶어내지 않으면 $\infty^0$ 부정형에서 진행이 막힌다'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '지수함수의 극한 — 우세한 밑으로 나누기·묶어내기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 분모·분자를 $5^x$ 로 나누면 $\left(\frac{3}{5}\right)^x\to0$ 으로 정리된다. ⑵ 는 괄호 안에서 $3^x$ 를 묶어내 밑을 지수 밖으로 빼는 것이 핵심 단계다.
    ⑶ 은 $x\to-\infty$ 라서 우세한 항이 $2^x$ 가 아니라 $2^{-x}$ 로 뒤바뀐다(T-부호·T-범위). 방향을 보지 않고 ⑴ 처럼 처리하면 부호가 반대로 나온다.
    필수 예제 ★2 출발 · 통찰 1개(EQV d2) · M_total 7 → ★2 유지.
    [분류 이슈] ⑵ 만 떼어 내면 묶어내기를 모르는 학생은 손을 못 대므로 교사 체감은 ★3 에 가깝다(1단 차이).
  tier: star_2
  mechanism_primary: '밑이 가장 큰 항으로 나누거나 밖으로 묶기 → $0<r<1$ 인 $r^x\to0$ 대입 · $x\to-\infty$ 에서는 우세항이 뒤바뀜'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $0$ ⑵ $3$ ⑶ $-1$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/69-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑의 쌍($2$·$3$·$5$·$7$)과 계수를 바꿀 수 있다. 제약: 두 밑이 서로 달라야 우세항이 정해지고, 나눈 뒤 남는 비 $\frac{작은 밑}{큰 밑}$ 이 $1$ 보다 작아야 $0$ 으로 수렴한다. ⑵ 에서 묶어낸 밑이 그대로 답이 되므로 답은 항상 큰 쪽 밑이다.'
    creative: '(1) ⑴ 의 분자·분모 계수를 붙여 $\frac{a\cdot3^x+5^x}{5^x+3^x}$ 로 만들어 답이 계수비가 되게 하기(★2 유지) (2) ⑶ 의 극한 방향을 $x\to\infty$ 와 $x\to-\infty$ 둘 다 묻고 답이 다른 이유를 쓰게 하기(★3 · I-MI 추가) (3) $(3^x+2^x)^{\frac{1}{x}}$ 처럼 부호를 바꿔 같은 답이 나오는지 비교하게 하기(★2~3) (4) 밑을 $a$ 로 두고 극한값이 $a$ 가 되는 조건을 묻는 역방향(★3 · I-BW).'
```

```yaml
- id: GN-CALC2-69-131
  page: 69
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크(유제)"
  summary: |
    ⑴~⑷ $\lim_{x\to\infty}\frac{2^x}{2^x-2^{-x}}$ · $\lim_{x\to\infty}(5^x-3^{x+1})^{\frac{1}{x}}$ · $\lim_{x\to\infty}(2^{2x+1}-3^x)$ · $\lim_{x\to-\infty}\frac{5^x+5^{-x}}{5^x-5^{-x}}$ 를 조사하기.
  category: '밑이 가장 큰 항으로 나누거나 묶어내기 → $r^x\to0$ 대입 · 발산 여부 판정'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$2^{2x+1}=2\cdot4^x$ · $3^{x+1}=3\cdot3^x$ 로 고쳐 밑을 통일한 뒤 우세항을 밖으로 묶어내는 동치 변환 — 묶기 전에는 $\infty-\infty$·$\infty^0$ 부정형이다'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '지수함수의 극한 — 우세한 밑으로 나누기·묶어내기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    69-e1 의 유제로 골조가 같다. ⑶ 만 새로운데, $2^{2x+1}$ 을 $2\cdot4^x$ 로 읽어 밑 $4$ 와 $3$ 을 비교해야 $4^x$ 로 묶어낼 수 있다(지수의 $2x+1$ 을 그대로 두면 비교가 안 된다 · T-표기).
    ⑷ 는 $x\to-\infty$ 라 우세항이 $5^{-x}$ 로 뒤집힌다.
    tag 「확인체크」의 벤더 신호만 보면 ★1 출발이지만 직전 필수 예제의 유제라 대응 예제와 같은 ★2 를 출발점으로 썼다. 통찰 1개(EQV d2) · M_total 7 → ★2 유지.
    [분류 이슈] 확인체크 4문(69-131 · 69-132 · 70-133 · 70-134)의 출발점 결정은 파일 끝 표에 한 줄로 모았다.
  tier: star_2
  mechanism_primary: '지수를 $2^{2x+1}=2\cdot4^x$ 꼴로 고쳐 밑을 통일 → 우세한 밑으로 나누거나 묶기 → $r^x\to0$ 대입'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $1$ ⑵ $5$ ⑶ $\infty$ ⑷ $-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/69-131.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑의 쌍과 지수의 일차식 계수($2x+1$·$3x-2$·$x+1$)를 바꿀 수 있다. 제약: 지수를 정리한 뒤 실제 밑($2^{2}=4$ 처럼)이 상대 밑보다 커야 ⑶ 이 $\infty$ 로 발산하고, 작으면 답이 $-\infty$ 로 뒤집히므로 답을 함께 고친다. ⑵ 는 묶어낸 큰 쪽 밑이 그대로 답이다.'
    creative: '(1) ⑶ 의 두 밑을 뒤집어($3^{2x}-2^{3x}$) 어느 쪽이 이기는지 먼저 판정하게 하기(★3 · 밑 통일이 핵심 단계가 됨) (2) ⑴⑷ 를 합쳐 $x\to\infty$ 와 $x\to-\infty$ 를 한 문항에서 묻기(★3 · I-MI) (3) $(5^x-3^{x+1})^{\frac{1}{x}}$ 의 값이 $3$ 이 되도록 밑을 바꾸라고 요구하는 역방향(★3 · I-BW).'
```

```yaml
- id: GN-CALC2-69-132
  page: 69
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크(유제)"
  summary: |
    $\lim_{x\to\infty}\frac{a\times3^{x+1}+1}{3^{x-1}-2}=27$ 일 때 상수 $a$ 의 값 구하기.
  category: '$3^{x\pm1}$ 을 $3^x$ 의 상수배로 고치기 → $3^x$ 로 약분 → 계수비 방정식'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '지수함수 극한값이 주어질 때 상수 결정 — 우세항 계수비 비교'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $3^{x+1}=3\cdot3^x$ · $3^{x-1}=\frac{1}{3}\cdot3^x$ 로 고친 뒤 분모·분자를 $3^x$ 로 나누면 상수항 $1$ 과 $-2$ 는 $0$ 으로 사라지고 계수비만 남아 $a$ 에 대한 일차방정식이 된다.
    지수의 $\pm1$ 을 상수배로 빼내지 않고 그대로 약분하는 것이 유일한 함정(T-표기)이다. 극한값이 주어지고 상수를 역산하지만 표준 미정계수 절차라 I-BW 로 세지 않았다.
    확인체크지만 직전 예제의 유제라 ★2 출발 · 통찰 0 · M_total 7(>5) → 감산 없이 ★2 유지.
  tier: star_2
  mechanism_primary: '$3^{x+1}=3\cdot3^x$·$3^{x-1}=\frac{1}{3}3^x$ 로 고침 → $3^x$ 로 약분 → 계수비 $9a=27$ → $a$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/69-132.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑($2$·$5$), 지수의 평행이동($x+2$·$x-3$), 상수항($1$·$-2$), 우변 극한값을 바꿀 수 있다. 제약: 분모·분자의 밑이 같아야 계수비가 남고, 우변 값이 계수비 $\frac{(밑)^{p}a}{(밑)^{q}}$ 로 나누어떨어져야 $a$ 가 정수로 떨어진다. 상수항은 $3^x$ 로 나누면 사라지므로 답에 영향을 주지 않는다 — 답을 바꾸려면 계수 쪽을 건드린다.'
    creative: '(1) 분모·분자의 밑을 다르게 주어 ($\frac{a\cdot3^x+2^x}{3^x-1}$) 작은 밑 항이 사라지는지 먼저 판정하게 하기(★2~3) (2) 극한값이 존재하도록 하는 $a$ 의 조건을 묻기(★3 · I-BW·I-MI — $a=0$ 분기가 생김) (3) $x\to-\infty$ 로 바꾸면 우세항이 상수항 쪽으로 뒤집혀 답이 완전히 달라진다(★3 · 방향 판정이 핵심 단계가 됨) (4) 두 상수 $a$·$b$ 를 두고 극한 두 개를 연립하기(★3).'
```

```yaml
- id: GN-CALC2-70-e2
  page: 70
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑶ $\lim_{x\to\infty}\{\log(x+1)-\log x\}$ · $\lim_{x\to1+}\{\log_2(x^2-1)-\log_2(x-1)\}$ · $\lim_{x\to5}(\log_5|x^2-25|-\log_5|x^3-125|)$ 의 극한값 구하기.
  category: '로그의 차를 진수의 몫으로 합치기 → 인수분해·약분 → 진수의 극한에 로그 적용'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$\log_aA-\log_aB=\log_a\frac{A}{B}$ 로 두 로그를 한 덩어리로 합치는 동치 변환 — 합치기 전에는 $\infty-\infty$·$(-\infty)-(-\infty)$ 부정형이라 각 항의 극한을 따로 구하는 접근이 막힌다'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '로그함수의 극한 — 로그의 차를 진수의 몫으로 합치기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    세 소문항 모두 각 항이 $\pm\infty$ 로 발산하므로 먼저 하나의 로그로 합쳐야 한다. 합친 뒤에는 진수가 유리식이 되어 약분·대입으로 끝난다.
    ⑵ 는 $\frac{x^2-1}{x-1}=x+1$ 로 약분되어 $x\to1+$ 의 한쪽 극한 조건이 사실상 진수 양수 확보용이다(T-범위·T-경계). ⑶ 은 절댓값 덕분에 $x\to5$ 양쪽에서 $|x-5|$ 가 그대로 약분돼 좌우극한이 같아진다(T-부호).
    필수 예제 ★2 출발 · 통찰 1개(EQV d2) · M_total 7 → ★2 유지.
    [분류 이슈] ⑶ 은 절댓값 처리와 세제곱 차 인수분해가 겹쳐 체감은 ★3 에 가깝다(1단 차이).
  tier: star_2
  mechanism_primary: '$\log_aA-\log_aB=\log_a\frac{A}{B}$ 로 합치기 → 진수를 인수분해·약분 → 진수의 극한값에 $\log_a$ 적용'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $0$ ⑵ $1$ ⑶ $\log_5\dfrac{2}{15}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/70-e2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑($2$·$3$·$10$·$\frac{1}{2}$), 진수의 인수($x^2-a^2$·$x^3-a^3$), 접근점을 바꿀 수 있다. 제약: 두 진수가 같은 인수를 공유해야 약분 뒤 극한이 유한하고, 접근점에서 남은 진수가 양수여야 한다. 밑이 $1$ 보다 작으면 답의 부호가 뒤집힌다. ⑶ 처럼 양쪽 접근이면 절댓값이 반드시 있어야 좌우극한이 일치한다.'
    creative: '(1) 차 대신 합 $\log_2A+\log_2B$ 로 두어 $0\cdot\infty$ 꼴을 만들기(★2~3) (2) 진수를 $x^4-16$ 과 $x^2-4$ 로 바꿔 약분 뒤에도 인수가 남게 하기(★2 유지) (3) 절댓값을 빼고 $x\to5+$ 만 묻는 것과 양쪽을 묻는 것을 비교하게 하기(★3 · I-MI — 좌극한 정의 여부 분기) (4) 밑을 $a$ 로 두고 극한값이 $-1$ 이 되는 $a$ 를 찾게 하기(★3 · I-BW).'
```

```yaml
- id: GN-CALC2-70-133
  page: 70
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크(유제)"
  summary: |
    ⑴~⑷ $\lim_{x\to\infty}\{\log_{\frac{1}{2}}(2x+1)-\log_{\frac{1}{2}}x\}$ · $\lim_{x\to\infty}\{\log_3(9x^2-1)-\log_3(x^2+1)\}$ · $\lim_{x\to\infty}\{\log_27^x-\log_2(7^x+2)\}$ · $\lim_{x\to2}(\log_3|x^2-4|-\log_3|x^3-8|)$ 의 극한값 구하기.
  category: '로그의 차를 진수의 몫으로 합치기 → 진수의 유리식·지수식 극한 → 로그 적용'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '발산하는 두 로그를 $\log_a\frac{A}{B}$ 한 덩어리로 합쳐 부정형을 진수의 몫의 극한으로 바꾸는 동치 변환'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '로그함수의 극한 — 로그의 차를 진수의 몫으로 합치기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    70-e2 의 유제로 골조가 같고, 합친 뒤 진수의 극한을 구하는 방식만 소문항마다 다르다. ⑴⑵ 는 유리식의 최고차항 비, ⑶ 은 지수식에서 $7^x$ 로 약분, ⑷ 는 인수분해 후 $|x-2|$ 약분이다.
    ⑴ 은 밑이 $\frac{1}{2}$ 이라 진수 극한 $2$ 가 $-1$ 로 뒤집히는 것(T-부호)이, ⑷ 는 절댓값이 있어 양쪽 접근이 가능한 것(T-범위)이 채점 포인트다.
    확인체크지만 직전 예제의 유제라 ★2 출발 · 통찰 1개(EQV d2) · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: '$\log_aA-\log_aB=\log_a\frac{A}{B}$ 로 합치기 → 진수의 극한(최고차항 비·우세 지수항·인수 약분) → $\log_a$ 적용'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $-1$ ⑵ $2$ ⑶ $0$ ⑷ $-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/70-133.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑($\frac{1}{2}$·$3$·$2$)과 진수의 계수·차수($2x+1$·$9x^2-1$·$7^x+2$)를 바꿀 수 있다. 제약: 합친 진수의 극한이 밑의 정수 거듭제곱이어야 답이 정수로 떨어진다(⑵ 의 $9=3^2$). 분모·분자의 차수를 다르게 하면 진수 극한이 $0$ 이나 $\infty$ 가 되어 답이 발산하므로 차수를 맞춘다.'
    creative: '(1) ⑶ 의 밑 $7$ 을 $\frac{1}{7}$ 로 바꿔 우세항이 상수 $2$ 쪽으로 넘어가게 하기(★3 · 방향 판정 추가) (2) ⑵ 의 진수 차수를 어긋나게 해 극한이 $\infty$ 임을 설명하게 하기(★2~3) (3) ⑴ 의 밑을 $a$ 로 두고 극한값이 $1$ 이 되는 $a$ 를 찾게 하기(★3 · I-BW) (4) 세 항의 로그 합·차를 섞어 진수를 한 번에 정리하게 하기(★3).'
```

```yaml
- id: GN-CALC2-70-134
  page: 70
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크(유제)"
  summary: |
    $\lim_{x\to\infty}\{\log_2(ax+1)-\log_2(3x-1)\}=2$ 를 만족시키는 상수 $a$ 의 값 구하기.
  category: '로그의 차를 진수의 몫으로 합치기 → 진수 극한 $\frac{a}{3}$ → $\log_2\frac{a}{3}=2$ 를 풀기'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '로그함수 극한값이 주어질 때 상수 결정 — 진수 몫의 극한 역산'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 로그를 $\log_2\frac{ax+1}{3x-1}$ 로 합치면 진수의 극한은 최고차항 비 $\frac{a}{3}$ 이므로, 주어진 값 $2$ 를 $\log_22^2$ 로 되돌려 진수 조건 하나로 바꾸면 $a$ 가 나온다.
    합치지 않고 각 항의 극한을 따로 보려 하면 $\infty-\infty$ 에 걸린다. 로그가 정의되려면 $a>0$ 이어야 하지만 답이 자연히 양수라 기각 단계가 생기지 않아 I-VF 는 붙이지 않았고, 상수 역산도 표준 미정계수 절차라 통찰 0 으로 뒀다.
    확인체크지만 직전 예제의 유제라 ★2 출발 · 통찰 0 · M_total 6(>5) → 감산 없이 ★2 유지.
  tier: star_2
  mechanism_primary: '$\log_2\frac{ax+1}{3x-1}$ 로 합치기 → 진수 극한 $\frac{a}{3}$ → $\frac{a}{3}=2^2$ → $a$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$12$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/70-134.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑($2$·$3$·$\frac{1}{2}$), 분모의 계수($3x-1$ 의 $3$), 우변 극한값($2$·$-1$·$0$)을 바꿀 수 있다. 제약: 진수 극한 $\frac{a}{(분모 계수)}$ 가 밑의 정수 거듭제곱이 되도록 우변을 잡아야 $a$ 가 정수로 떨어지고, $a>0$ 이어야 로그가 정의된다. 진수 안의 상수항은 극한에 영향을 주지 않으므로 답과 무관하다.'
    creative: '(1) 밑을 $\frac{1}{2}$ 로 바꿔 우변 부호가 뒤집히게 하기(★2 유지 · T-부호) (2) 분모·분자의 차수를 다르게 해 극한값이 존재하도록 하는 조건 자체를 묻기(★3 · I-BW·I-MI) (3) 극한값이 유한하도록 하는 $a$ 의 범위를 묻고 $a\le0$ 을 기각하게 하기(★3 · I-VF) (4) 69-132 와 묶어 지수·로그 두 형태에서 같은 계수비 논리를 쓰게 하기(★3).'
```

## 표본 판정 요약 (8문)

- ★ 분포: ★1 2 · ★2 6 · ★3 0 · ★4 0 · ★5 0. 단원에 연습문제 STEP·실력 UP 구역이 없어 ★3 이상이 하나도 나오지 않는 짧은 도입 단원이다.
- 통찰형 4(69-e1 · 69-131 · 70-e2 · 70-133) · 절차형 4(68-129 · 68-130 · 69-132 · 70-134) · premium 0.
- 통찰 유형 분포(단계 기준 총 4개): I-EQV 4(모두 depth 2 · effective_depth 2) · 나머지 유형 0. 부정형($\frac{\infty}{\infty}$ · $\infty-\infty$ · $\infty^0$)을 「우세항으로 묶어내기」나 「로그를 하나로 합치기」로 바꾸는 동치 변환 하나가 이 단원의 유일한 통찰축이다.
- type_hint 상위 5: 「지수함수의 극한 — 우세한 밑으로 나누기·묶어내기」 2(69-e1 · 69-131) · 「로그함수의 극한 — 로그의 차를 진수의 몫으로 합치기」 2(70-e2 · 70-133) · 「지수함수의 극한 — 밑의 대소와 $x\to\pm\infty$ 방향」 1(68-129) · 「로그함수의 극한 — 밑의 대소와 진수의 접근 방향」 1(68-130) · 「지수함수 극한값이 주어질 때 상수 결정」 1(69-132). 나머지는 「로그함수 극한값이 주어질 때 상수 결정」 1(70-134).
- M_total 분포: 4(1문 · 68-129) · 5(1문 · 68-130) · 6(1문 · 70-134) · 7(5문). 함정은 T-부호(밑이 $1$ 보다 작을 때 $\pm\infty$ 뒤집힘 · $x\to-\infty$ 에서 우세항 뒤바뀜)와 T-범위(로그 진수 양수 · $x\to0+$ 한쪽 접근)가 대부분이고, T-표기($3^{x+1}$·$2^{2x+1}$ 을 상수배로 빼내기)가 69-131 · 69-132 에서 실제 채점에 관여한다.
- 그림: 0문. 선택형 0문 · 전부 단답·서술 지시형이며 소문항 묶음이 6문(68-129 · 68-130 · 69-e1 · 69-131 · 70-e2 · 70-133), 단문항이 2문(69-132 · 70-134)이다.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CALC2-69-131 외 「확인체크」 3문 | tag 「확인체크」의 벤더 신호만 보면 ★1 출발이지만 예제 구역의 확인체크는 직전 필수 예제의 유제라 대응 예제와 같은 ★2 를 출발점으로 썼다(69-131 · 69-132 · 70-133 · 70-134). gn-alg 08 에서 쓴 관례를 그대로 따랐다 | ★1 / ★2 |
| GN-CALC2-69-e1 | ⑵ $(3^x-2^x)^{\frac{1}{x}}$ 는 밑을 지수 밖으로 묶어내는 착안을 모르면 손을 못 대는 소문항이라 교사 체감은 ★3 에 가깝다. 필수 예제 출발점·통찰 1개라 산식상 ★2 로 뒀다(1단 차이) | ★2 / ★3 |
| GN-CALC2-70-e2 | ⑶ 은 절댓값 처리(좌우극한 일치)와 세제곱 차 인수분해가 겹쳐 체감 ★3. ⑴⑵ 가 ★2 수준이라 블록 전체는 ★2 로 뒀다 | ★2 / ★3 |
| GN-CALC2-69-132 · GN-CALC2-70-134 | 극한값이 먼저 주어지고 상수를 역산하는 구조를 I-BW 로 셀지 표준 미정계수 절차로 볼지 경계. 이 파일은 「주어진 극한값을 계수비 방정식으로 옮기는 것은 표준 절차」로 통일해 통찰 0(절차형)으로 뒀다. 반대로 세면 이 범위 상수 결정 문항 2문이 모두 통찰형 ★3 후보가 된다 | ★2 (통찰형/절차형 경계) |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **반복된 type_hint 는 두 축**이다. ① 지수·로그함수 자체의 극한(밑과 $1$ 의 대소 · 접근 방향) ② 부정형 정리(지수는 우세항으로 나누기·묶어내기, 로그는 차를 몫으로 합치기). 8문항이 전부 이 둘 안에 들어오고, ②에서 상수 역산 2문이 파생된다.
- **통합해도 될 것**: 68-129(지수)와 68-130(로그)은 「기본 함수의 극한 — 밑의 대소와 접근 방향」 한 유형의 두 얼굴로 묶어도 된다. 판정 도구가 같고 학생이 하는 일도 같다. 69-e1 과 69-131, 70-e2 와 70-133 도 각각 예제·유제 쌍이라 한 유형의 난이도 계단으로 충분하다.
- **따로 세워야 할 것**: ① **지수 부정형 정리**(69-e1 · 69-131) — $x\to-\infty$ 에서 우세항이 뒤바뀌는 판정과 $(\ )^{\frac{1}{x}}$ 묶어내기가 로그 쪽과 도구가 완전히 다르므로 별도 유형으로 두고 base ★ 는 2~3 이 적당하다. ② **로그 부정형 정리**(70-e2 · 70-133) — 합치기 자체는 쉬우나 합친 뒤 진수가 유리식·지수식·절댓값 인수분해로 갈라져 하위 계단이 셋이다. base ★ 2, 절댓값·좌우극한 버전만 3.
- **상수 결정**(69-132 · 70-134)은 위 두 축의 역방향 활용이라 별도 유형으로 세우되, 지수형과 로그형을 한 유형의 두 변형으로 묶는 편이 낫다. 「진수(또는 분수식)의 극한을 먼저 구한 뒤 주어진 값과 맞춘다」는 골조가 동일하다. base ★ 2.
- 이 단원은 **다음 단원(무리수 $e$ · 자연로그 극한)의 도입부**라, 카탈로그를 만들 때 여기 유형들을 독립 단원으로 세우기보다 $e$ 단원과 한 묶음으로 두고 이 8문항을 그 앞 계단(base ★ 1~2)으로 배치하는 편이 실제 출제 선택에 유리하다.
