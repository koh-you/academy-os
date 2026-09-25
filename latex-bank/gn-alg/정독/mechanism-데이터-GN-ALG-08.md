---
name: mechanism-데이터-GN-ALG-08
description: 개념원리 대수 08 지수함수의 활용 – 방정식(1/1 · 76~82쪽 76-167~82-191 · 31문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 대수 (22개정 · 학생용) · 전사본 latex-bank/gn-alg
  section: 08 지수함수의 활용 – 방정식
  unit_code: ALG-08
  part: "1/1"
  extract_range: "76~82쪽 · 76-167~82-191"
  total_problems: 31
  unit_total: 31
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). depth_score 는 insights 의 effective_depth 평균(통찰 없으면 0.00). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-alg/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-alg/items/<id>.tex
  image_source: latex-bank/gn-alg/figures/ (crops.json)
---

# 개념원리 대수 · 08 지수함수의 활용 – 방정식 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 대수 08단원 「지수함수의 활용 – 방정식」 전체(76~82쪽 · 76-167~82-191 · 31문항)를 다룬다. 구역은 다섯이다. **개념원리 익히기** 4문(76-167~76-170 · 개념 직후 확인 드릴), **필수·발전 예제** 14문(77-e13~80-e18 여섯 개의 tag 「필수」 예제와 그 뒤에 붙는 tag 「확인체크」 유제 여덟 문), **연습문제 STEP 1** 5문, **연습문제 STEP 2** 5문, **연습문제 실력 UP** 3문(하나는 tag 「수능 기출」)이다. 개념원리 고등은 구역이 곧 난이도 층이어서 개념원리 익히기 ★1 · 필수 예제 ★2 · STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4 를 출발점으로 삼고 M_total·통찰로 ±1 을 조정했다. 예제 구역의 「확인체크」는 벤더 신호만 보면 ★1 출발이지만 실제로는 바로 앞 필수 예제의 유제여서 대응 예제와 같은 출발점(★2)을 썼다(이 결정은 분류 이슈 표에 한 줄로 남겼다).

단원의 도구는 셋뿐이다. ① **밑을 같게 해서 지수를 비교**(지수가 일차식이면 일차방정식, 이차식이면 이차방정식), ② **$a^x=t\ (t>0)$ 치환**으로 $t$ 에 대한 이차방정식으로 옮기기, ③ **밑에 미지수**가 있을 때 「지수가 같다 / 밑이 1이다 / 지수가 0이다」로 경우를 나누기. 31문항의 골조가 전부 이 셋의 조합이라, 앞쪽 절반은 통찰 라벨이 붙지 않는 절차형이고 변별은 ②에서 파생되는 활용 — 두 근의 합·차·곱(근과 계수의 관계를 $t$ 쪽에서 읽고 $a^{\alpha+\beta}$ 로 되돌리는 동치 변환)과 근의 판별(「$x$ 의 서로 다른 두 실근」 ⇔ 「$t$ 의 서로 다른 두 **양**의 근」) — 에서 생긴다. 그래서 이 범위의 통찰 라벨은 I-EQV 와 I-CON 에 집중되고, I-MI(밑에 미지수)·I-VF(범위로 후보 기각)·I-SYM(대칭식 치환)·I-RT(그래프 조건의 대수화)가 소수로 붙는다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 / 골조를 유지한 설정 변형과 ★ 가 변하는 지점)를 채웠다. 그림 문항은 82-189 한 문항이다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-ALG-76-167
  page: 76
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑹ $2^x=8$ · $\left(\frac{1}{2}\right)^x=\frac{1}{16}$ · $3^x=\frac{1}{81}$ · $5^x=125$ · $\left(\frac{1}{3}\right)^x=\frac{1}{9}$ · $\left(\frac{1}{5}\right)^x=25$ 를 각각 푸는 기본 지수방정식.
  category: '밑을 같게 하기 → 지수 비교'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "기본 지수방정식 — 양변의 밑을 같게 하여 지수 비교"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    우변을 좌변 밑의 거듭제곱으로 고쳐 쓰면 바로 지수를 비교할 수 있다. 밑이 $\frac{1}{2}$ 처럼 분수일 때 $\left(\frac{1}{2}\right)^x=2^{-x}$ 로 부호가 한 번 뒤집히는 것(T-부호)이 유일한 걸림돌이다.
    개념원리 익히기 ★1 출발 · 통찰 0 · M_total 4 → ★1 유지. 정의 직후 드릴.
  tier: star_1
  mechanism_primary: '$a^x=b$ 에서 $b$ 를 $a$ 의 거듭제곱으로 고침 → 지수 비교 → $x$'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $x=3$ ⑵ $x=4$ ⑶ $x=-4$ ⑷ $x=3$ ⑸ $x=2$ ⑹ $x=-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/76-167.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑(2·3·5·7)과 우변의 거듭제곱 지수(±1~±4)를 자유롭게 바꿀 수 있다. 제약: 우변이 그 밑의 정수 거듭제곱이어야 답이 정수로 떨어진다. 분수 밑은 지수의 부호가 반대가 되므로 답의 부호를 함께 확인한다.'
    creative: '(1) 우변을 $\sqrt{a}$ 나 $\frac{1}{\sqrt[3]{a}}$ 로 두어 유리수 지수 답 만들기(★1 유지) (2) 밑을 $4$ · 우변을 $8$ 처럼 서로 다른 밑의 거듭제곱으로 주어 공통 밑 $2$ 로 통일하게 하기(★1~2 · 76-169 골조) (3) 해가 자연수가 되도록 하는 밑을 묻는 역방향(★2 · I-BW).'
```

```yaml
- id: GN-ALG-76-168
  page: 76
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ 양변의 밑이 이미 같은 지수방정식 $2^{2x}=2^{3-x}$ · $\left(\frac{1}{5}\right)^{-2x-3}=\left(\frac{1}{5}\right)^{4x+3}$ 와, 차가 $0$ 꼴로 주어진 $3^{2x-4}-3^{3x+1}=0$ · $\left(\frac{1}{81}\right)^{4x+4}-\left(\frac{1}{81}\right)^{x-1}=0$ 풀기.
  category: '밑이 같음 확인 → 지수끼리 일차방정식'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "밑이 같은 지수방정식 — 지수끼리 비교(차가 0인 꼴 포함)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    밑이 같으므로 지수를 그대로 맞추면 일차방정식 한 줄이다. ⑶⑷ 는 $A-B=0$ 을 $A=B$ 로 이항하는 한 단계가 앞에 붙을 뿐 골조는 같다.
    개념원리 익히기 ★1 출발 · 통찰 0 · M_total 4 → ★1 유지.
  tier: star_1
  mechanism_primary: '양변의 밑이 같음 확인(또는 이항해서 같게) → 지수끼리 등식 → 일차방정식'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $x=1$ ⑵ $x=-1$ ⑶ $x=-5$ ⑷ $x=-\dfrac{5}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/76-168.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '지수의 일차식 계수와 상수항을 바꾼다. 제약: 두 지수를 맞춘 일차방정식의 해가 정수나 간단한 분수가 되도록 계수를 고른다. 밑이 $1$ 이 되는 값은 쓰지 않는다.'
    creative: '(1) 지수 하나를 이차식으로 바꾸면 77-e13 골조(★2) (2) 밑을 $a$ 로 두고 $a>0,\ a\ne1$ 조건을 붙이면 Mₐ 상승(★2) (3) 해가 주어진 정수가 되게 하는 계수를 묻는 역방향(★2 · I-BW).'
```

```yaml
- id: GN-ALG-76-169
  page: 76
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑹ 양변의 밑이 다른 지수방정식($2^{2x-3}=128$ · $2^{-x+2}=16^{2x}$ · $25^{x+3}=\left(\frac{1}{125}\right)^{2x-1}$ · $\left(\frac{1}{9}\right)^{-x+2}=81\sqrt{3}$ · $\left(\frac{1}{2}\right)^{x+1}=(\sqrt{2})^{x-3}$ · $4^{x+2}-8^{x-7}=0$)을 공통 밑으로 통일해 풀기.
  category: '거듭제곱·거듭제곱근을 공통 밑으로 통일 → 지수 비교'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "밑이 다른 지수방정식 — 소수 밑으로 통일 후 지수 비교"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    $16=2^4$ · $125=5^3$ · $81\sqrt{3}=3^{\frac{9}{2}}$ · $\sqrt{2}=2^{\frac{1}{2}}$ 로 고쳐 밑을 맞추면 지수의 일차방정식이 된다. 분수 밑과 거듭제곱근이 겹쳐 지수 계산이 두세 단계 늘고 답이 분수로 나오지만 새 도구는 없다.
    개념원리 익히기 ★1 출발 · 통찰 0 · M_total 6(감점 조건 M_total ≤ 5 미해당) → ★1 유지. 계산량만 늘어난 드릴이라 ★ 를 올리지 않았다.
  tier: star_1
  mechanism_primary: '양변을 같은 소수 밑의 거듭제곱(유리수 지수 포함)으로 고침 → 지수 비교 → 일차방정식'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $x=5$ ⑵ $x=\dfrac{2}{9}$ ⑶ $x=-\dfrac{3}{8}$ ⑷ $x=\dfrac{17}{4}$ ⑸ $x=\dfrac{1}{3}$ ⑹ $x=25$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/76-169.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '공통 밑을 $2,3,5$ 중에서 고르고 양변의 거듭제곱 지수·일차식 계수를 바꾼다. 제약: 양변이 반드시 같은 소수의 거듭제곱이어야 하고, 거듭제곱근을 쓰면 유리수 지수가 되어 답이 분수가 된다는 점을 감안한다.'
    creative: '(1) 한쪽 밑을 $\sqrt[3]{a}$ 로 두어 유리수 지수 처리를 강제(★1~2) (2) 세 밑이 섞인 $2^x\times3^x$ 꼴은 밑 통일이 불가능하므로 피한다 (3) 답이 자연수가 되도록 하는 우변 상수를 묻는 역방향(★2 · I-BW).'
```

```yaml
- id: GN-ALG-76-170
  page: 76
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    $4^x-3\times2^x+2=0$ 을 $2^x=t\ (t>0)$ 로 치환해 푸는 과정의 빈칸 여섯 개 채우기.
  category: '$a^x=t$ 치환 → $t$ 의 이차방정식 → 되돌리기'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "$a^x$ 의 꼴이 반복되는 지수방정식 — 치환 과정 빈칸 채우기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    풀이의 뼈대가 이미 인쇄돼 있고 학생은 $4^x=(2^x)^2=t^2$ 과 되돌리기 단계만 확인한다. 치환·인수분해를 스스로 착안할 필요가 없어 통찰로 세지 않았다.
    개념원리 익히기 ★1 출발 · 통찰 0 · M_total 4 → ★1 유지. 이 단원 두 번째 도구(치환)의 도입 드릴.
  tier: star_1
  mechanism_primary: '$4^x=(2^x)^2$ 확인 → $t^2-3t+2=0$ → $t=1,2$ → $2^x=1,\ 2^x=2$ 로 되돌려 $x=0,1$'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$t^2$, $t$, $2$, $2$, $0$, $1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/76-170.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$t$ 의 이차방정식 계수를 바꾼다($t^2-5t+4$ · $t^2-6t+8$ 등). 제약: 두 근이 모두 양수이고 $2$ 의 거듭제곱이어야 $x$ 가 정수로 떨어진다. 한 근이 음수면 $t>0$ 기각 단계가 생겨 난이도가 달라진다.'
    creative: '(1) 빈칸을 없애고 그냥 풀게 하면 77-e14 골조(★2) (2) 두 근 중 하나를 음수로 만들어 $t>0$ 기각을 넣으면 I-VF 한 단계 추가(★2) (3) 밑을 $9^x,3^x$ 로 바꾸고 답을 두 근의 합으로 묻기(★2~3 · 79-e16 골조).'
```

### 필수·발전 예제

```yaml
- id: GN-ALG-77-e13
  page: 77
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑶ 지수에 이차식이 들어간 방정식 $2^{x^2-3}=4^x$ · $3^{2x^2-6x}=\left(\frac{1}{9}\right)^{x-8}$ · $\left(\frac{3}{4}\right)^{x^2+3x}=\left(\frac{4}{3}\right)^{2x+6}$ 풀기.
  category: '밑 통일(역수 밑 포함) → 지수 비교 → 이차방정식'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "밑을 같게 할 수 있는 지수방정식 — 지수 비교 후 이차방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    골조는 76-169 와 같고 지수가 이차식이라 마지막이 인수분해로 끝난다. ⑶ 의 $\frac{4}{3}=\left(\frac{3}{4}\right)^{-1}$ 처럼 역수 밑을 음의 지수로 바꾸는 처리(T-부호)가 이 문항의 실질 함정이다.
    필수 예제 ★2 출발 · 통찰 0 · M_total 6 → ★2 유지. 밑 통일이 곧 답으로 이어지는 표준 절차.
  tier: star_2
  mechanism_primary: '양변을 같은 밑으로(역수는 $-1$ 제곱으로) 고침 → 지수 비교 → 이차방정식 인수분해'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $x=-1$ 또는 $x=3$ ⑵ $x=-2$ 또는 $x=4$ ⑶ $x=-3$ 또는 $x=-2$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/77-e13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '지수의 이차식 계수와 우변 일차식을 바꾼다. 제약: 정리한 이차방정식이 인수분해되도록 판별식이 완전제곱이어야 하고, 밑은 $2,3$ 과 그 역수처럼 공통 밑이 잡히는 쌍으로 고른다.'
    creative: '(1) 우변을 $1$ 로 두어 지수를 $0$ 으로 놓게 하기(★1~2) (2) 이차방정식의 두 근의 합·곱을 묻기(★2 · 근과 계수) (3) 근이 중근이 되도록 하는 상수를 묻는 역방향(★3 · I-BW) (4) 밑을 $x$ 를 포함한 식으로 바꾸면 78-e15 골조로 이동(★3).'
```

```yaml
- id: GN-ALG-77-e14
  page: 77
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    $4\times2^{2x}-9\times2^{x+2}+32=0$ 풀기.
  category: '$2^x=t$ 치환 → 이차방정식 → 되돌리기'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "$a^x$ 의 꼴이 반복되는 지수방정식 — 치환형 이차"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $2^{2x}=t^2$ · $2^{x+2}=4t$ 로 지수법칙을 먼저 정리해야 계수가 맞는다($4t^2-36t+32=0$). 치환 자체는 76-170 에서 이미 제시된 표준 절차라 통찰로 세지 않았고, 걸림돌은 $2^{x+2}$ 를 $4\times2^x$ 로 분해하는 계수 처리다.
    필수 예제 ★2 출발 · 통찰 0 · M_total 6 → ★2 유지. 두 근이 모두 양수라 $t>0$ 기각도 없다.
  tier: star_2
  mechanism_primary: '$2^{x+2}=4\times2^x$ 로 분해 → $t=2^x$ 치환 → $t^2-9t+8=0$ → $t=1,8$ → $x=0,3$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$x=0$ 또는 $x=3$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/77-e14.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$t$ 이차식의 세 계수와 지수의 평행이동($2^{x+k}$)을 바꾼다. 제약: 두 근이 모두 양수이고 $2$ 의 거듭제곱이어야 $x$ 가 정수가 된다. 한 근이 음수면 $t>0$ 기각(I-VF)이 추가된다.'
    creative: '(1) 한 근을 음수로 만들어 기각 단계 넣기(★2, 77-172⑶ 골조) (2) 답을 두 근의 합으로 묻기(★2~3 · 79-e16) (3) 상수항을 $k$ 로 두고 서로 다른 두 실근 조건을 묻기(★3 · 79-e17) (4) 밑을 $9^x,3^x$ 나 $\frac{1}{4^x},\frac{1}{2^x}$ 로 바꾸기(★2 · 81-180).'
```

```yaml
- id: GN-ALG-77-171
  page: 77
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크(유제)"
  summary: |
    ⑴~⑷ 지수가 이차식인 방정식 $9^{x^2+3x}=3^{x^2+4x+3}$ · $(2\sqrt{2})^{2x^2+12}=2^{15x}$ · $\frac{3^{x^2+1}}{3^{x-1}}=81$ · $\left(\frac{2}{3}\right)^{x^2}=\left(\frac{3}{2}\right)^{2-3x}$ 풀기.
  category: '밑 통일(유리수 지수·역수 포함) → 지수 비교 → 이차방정식'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "밑을 같게 할 수 있는 지수방정식 — 지수 비교 후 이차방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    77-e13 의 유제로 골조가 같다. ⑵ 의 $2\sqrt{2}=2^{\frac{3}{2}}$ 와 ⑶ 의 지수법칙 나눗셈($3^{x^2-x+2}=3^4$), ⑷ 의 역수 밑이 각각 한 단계씩 더 붙는다.
    확인체크지만 대응 필수 예제와 같은 ★2 출발 · 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: '거듭제곱근·역수·나눗셈을 지수법칙으로 정리해 밑 통일 → 지수 비교 → 이차방정식'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $x=-3$ 또는 $x=1$ ⑵ $x=2$ 또는 $x=3$ ⑶ $x=-1$ 또는 $x=2$ ⑷ $x=1$ 또는 $x=2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/77-171.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '이차식·일차식의 계수를 바꾸되 정리 후 판별식이 완전제곱이 되게 한다. 거듭제곱근 밑($2\sqrt{2}=2^{\frac{3}{2}}$ · $3\sqrt{3}=3^{\frac{3}{2}}$)을 쓰면 지수에 분모 $2$ 가 생기므로 우변 지수를 짝수로 맞춘다.'
    creative: '(1) 분수식 형태($\frac{a^{f(x)}}{a^{g(x)}}=a^k$)로만 네 문항을 묶기(★2) (2) 근의 제곱합을 묻기(★2 · 81-179 골조) (3) 두 근이 모두 정수가 되게 하는 상수를 묻는 역방향(★3 · I-BW).'
```

```yaml
- id: GN-ALG-77-172
  page: 77
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크(유제)"
  summary: |
    ⑴~⑷ 치환형 지수방정식 $9^x-6\times3^x-27=0$ · $4^{x+1}-5\times2^{x+2}+16=0$ · $3^x-9\times3^{-x}=8$ · $\left(\frac{1}{9}\right)^x+\left(\frac{1}{3}\right)^x=12$ 풀기.
  category: '$a^x=t\ (t>0)$ 치환 → 이차방정식 → 양수 근만 되돌리기'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "$a^x$ 의 꼴이 반복되는 지수방정식 — 치환형 이차(음수 근 기각 포함)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    77-e14 의 유제. ⑶ 은 $3^{-x}=\frac{1}{t}$ 라 양변에 $t$ 를 곱해야 이차식이 되고, ⑴⑶⑷ 는 근 하나가 음수여서 $t>0$ 으로 버린다. 다만 치환할 때 명시한 $t>0$ 을 그대로 적용하는 표준 확인이라 I-VF 로 세지 않았다(경계 판단은 분류 이슈에 기록).
    확인체크 · 대응 필수 예제와 같은 ★2 출발 · 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: '$a^x=t\ (t>0)$ 치환(필요하면 양변에 $t$ 곱하기) → 이차방정식 → 양수 근만 $a^x=t$ 로 되돌리기'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $x=2$ ⑵ $x=0$ 또는 $x=2$ ⑶ $x=2$ ⑷ $x=-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/77-172.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '이차식 계수를 바꾸되 남는 양수 근이 밑의 정수 거듭제곱이어야 한다. $3^x-9\times3^{-x}=8$ 형은 상수항이 음수라 두 근의 곱이 음수 → 항상 한 근만 살아남는다는 성질을 유지한다.'
    creative: '(1) 역수항 형태($a^x+ka^{-x}=m$)만 모으기(★2) (2) 두 근의 합·곱을 묻기(★2~3) (3) $9^x+9^{-x}$ 처럼 대칭식으로 확장하면 82-190 골조(★4 · I-SYM) (4) 상수항을 문자로 두고 근의 개수 조건을 묻기(★3 · 79-e17).'
```

```yaml
- id: GN-ALG-78-e15
  page: 78
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴⑵ 밑에 미지수가 있는 방정식 $(x+2)^x=3^x\ (x>-2)$ 와 $(x-3)^{x+2}=(x-3)^{x^2-4}\ (x>3)$ 풀기.
  category: '밑에 미지수 → 「지수가 같다 / 밑이 1이다 / 지수가 0이다」 경우 분기 → 범위로 기각'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '한 등식이 「밑이 같다」와 「지수가 0(또는 밑이 1)」 두 경우를 동시에 품고 있음을 알아채고 모두 나눠 따짐'
    - step: 2
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '각 경우에서 나온 후보를 조건 $x>-2$ · $x>3$ 에 되돌려 대입해 일부를 기각'
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "밑에 미지수가 포함된 지수방정식 — 밑이 같은 경우·지수가 0인 경우 분기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑴ 은 지수가 같으니 밑이 같거나($x+2=3$) 지수가 $0$($x=0$)인 두 갈래, ⑵ 는 밑이 같으니 지수가 같거나($x+2=x^2-4$) 밑이 $1$($x=4$)인 두 갈래다. 분기 자체를 떠올리지 못하면 한 답만 쓰게 되고, ⑵ 에서는 지수를 맞춰 얻은 후보가 모두 $x>3$ 을 어겨 기각된다.
    필수 예제 ★2 출발 · 통찰 2개(MI d2 · VF d1) → +1 → ★3. 이 단원에서 처음으로 경우 분기가 등장하는 자리.
  tier: star_3
  mechanism_primary: '지수가 같음 → 밑이 같거나 지수가 $0$ / 밑이 같음 → 지수가 같거나 밑이 $1$ 로 분기 → 각 후보를 주어진 범위로 검증'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ $x=0$ 또는 $x=1$ ⑵ $x=4$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/78-e15.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑의 일차식($x+2$ · $x-3$)과 지수의 식을 바꾼다. 제약: 밑이 양수가 되는 범위 조건을 함께 제시해야 하고, 지수를 맞춰 얻은 이차방정식의 근 중 일부가 그 범위를 벗어나야 이 유형의 검증 단계가 살아난다.'
    creative: '(1) 범위 조건을 빼고 「밑이 될 수 있는 조건까지 스스로 세우기」로 바꾸면 ★4 (2) 근의 개수·합을 묻기(★3 · 78-174) (3) 양변 밑이 모두 미지수인 $(2x-1)^{f}=(3x-5)^{f}$ 형(★3 · 78-173⑵) (4) 지수를 $0$ 으로 만드는 값이 범위 밖이 되게 설계하면 기각 단계가 사라져 ★2 로 내려간다.'
```

```yaml
- id: GN-ALG-78-173
  page: 78
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크(유제)"
  summary: |
    ⑴~⑷ 밑에 미지수가 있는 방정식 $(x+7)^{x-1}=4^{x-1}$ · $(2x-1)^{x-3}=(3x-5)^{x-3}$ · $x^{3x+1}=x^{2x+3}$ · $(x-1)^{x^2}=(x-1)^{2x+3}$ 을 각각 주어진 범위에서 풀기.
  category: '밑에 미지수 → 밑 일치·지수 $0$·밑이 $1$ 분기 → 범위로 기각'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '네 문항 모두 「지수가 같은 꼴」 또는 「밑이 같은 꼴」이 두 갈래의 해를 품고 있음을 인식하고 분기'
    - step: 2
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '얻은 후보를 $x>-7$ · $x>\frac{5}{3}$ · $x>0$ · $x>1$ 에 대입해 범위를 벗어난 근을 기각'
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "밑에 미지수가 포함된 지수방정식 — 네 가지 꼴(밑 일치·지수 0·밑 1) 분기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    78-e15 의 유제로 네 유형을 한 번에 훑는다. ⑵ 는 양변 밑이 모두 미지수라 「두 밑이 같다」와 「지수가 $0$」 두 갈래, ⑶⑷ 는 「지수가 같다」와 「밑이 $1$」 두 갈래다. ⑷ 에서 지수를 맞춰 얻은 $x=-1$ 이 $x>1$ 에 걸려 버려진다.
    확인체크 · 대응 예제와 같은 ★2 출발 · 통찰 2개 → +1 → ★3.
  tier: star_3
  mechanism_primary: '식의 꼴(지수 일치형/밑 일치형) 판별 → 두 갈래로 분기 → 각 후보를 범위 조건으로 검증'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ $x=-3$ 또는 $x=1$ ⑵ $x=3$ 또는 $x=4$ ⑶ $x=1$ 또는 $x=2$ ⑷ $x=2$ 또는 $x=3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/78-173.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑의 일차식과 지수의 일차·이차식 계수를 바꾼다. 제약: 밑이 $1$ 이 되는 값과 지수가 $0$ 이 되는 값이 주어진 범위 안에 있어야 답이 두 개가 되고, 밑이 $0$ 이나 음수가 되는 값은 범위로 잘라 둔다.'
    creative: '(1) 네 꼴 중 하나만 골라 단일 문항화(★2~3) (2) 모든 근의 합·곱을 묻기(★3 · 78-174) (3) 범위 조건을 $x$ 가 자연수로 바꾸면 정수해 필터가 추가돼 ★3~4 (4) 밑이 $1$ 인 경우를 빠뜨리면 틀리도록 설계된 보기 문항(★3 · I-VF 강조).'
```

```yaml
- id: GN-ALG-78-174
  page: 78
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크(유제)"
  summary: |
    $x^{x^2}=x^{2x+8}\ (x>0)$ 의 모든 근의 합 구하기.
  category: '밑에 미지수 → 지수 일치·밑 $1$ 분기 → 범위 기각 후 근의 합'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '밑이 같은 등식이 「지수가 같다」와 「밑이 $1$」 두 경우를 품고 있어 두 갈래를 모두 세어야 근의 합이 맞음'
    - step: 2
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '지수를 맞춰 얻은 두 근 중 $x>0$ 을 어기는 쪽을 기각하고 남은 근만 합에 넣음'
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "밑에 미지수가 포함된 지수방정식 — 근의 합"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    지수를 맞추면 $x^2-2x-8=0$ 에서 두 근이 나오지만 음수 근은 $x>0$ 에 걸리고, 여기에 밑이 $1$ 인 $x=1$ 이 더해져야 합이 맞는다. 「근의 합」을 묻기 때문에 한 갈래만 빠져도 바로 오답이 되는, 분기·기각이 채점에 직결되는 형태다.
    확인체크 ★2 출발 · 통찰 2개(MI d2 · VF d2) → +1 → ★3.
  tier: star_3
  mechanism_primary: '지수 일치 → 이차방정식 근 중 $x>0$ 인 것 + 밑이 $1$ 인 근 → 살아남은 근을 모두 더함'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/78-174.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '지수의 이차식·일차식 계수를 바꾼다. 제약: 이차방정식의 두 근 중 정확히 하나가 $x>0$ 을 어기도록 상수항의 부호를 잡아야 「기각」 단계가 살아 있고, 답이 정수로 떨어지게 근을 정수로 만든다.'
    creative: '(1) 근의 곱·개수로 바꾸기(★3 유지) (2) 범위를 $x>1$ 로 좁혀 밑이 $1$ 인 근까지 기각시키면 함정이 하나 늘어 ★3~4 (3) 밑을 $x-k$ 로 두고 $k$ 를 미지수로 하면 Mₐ 상승 ★4 (4) 모든 근이 정수가 되게 하는 상수를 묻는 역방향(★4 · I-BW).'
```

```yaml
- id: GN-ALG-79-e16
  page: 79
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    $9^x-3^{x+1}+1=0$ 의 두 근을 $\alpha$, $\beta$ 라 할 때 $\alpha+\beta$ 의 값.
  category: '치환 → $t$ 이차방정식의 근과 계수 → $3^{\alpha+\beta}$ 로 되돌리기'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$\alpha,\beta$ 를 직접 구하지 않고 $t$ 의 두 근의 곱 $3^{\alpha}\times3^{\beta}=3^{\alpha+\beta}$ 로 조건을 동치 변환'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "$a^x$ 꼴 치환 방정식의 활용 — 두 근의 합(근과 계수의 관계)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $t=3^x$ 로 놓으면 $t^2-3t+1=0$ 이고 두 근이 무리수라 $x$ 를 직접 구할 수 없다. $t$ 의 두 근이 $3^{\alpha}$, $3^{\beta}$ 이므로 곱 $=1$ 에서 $3^{\alpha+\beta}=1$, 즉 $\alpha+\beta=0$ 으로 넘어가는 한 단계가 이 문항의 전부다.
    필수 예제 ★2 출발 · 통찰 1개(EQV d2 · 「2개 이상 또는 depth 3」 미해당) → ★2 유지. 다만 이 환원을 모르면 손을 못 대는 자리라 실제 체감은 ★3 에 가깝다.
  tier: star_2
  mechanism_primary: '$t=3^x$ 치환 → 두 근의 곱 $=1$ → $3^{\alpha+\beta}=1$ → $\alpha+\beta=0$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$0$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/79-e16.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$t$ 이차방정식의 계수를 바꾼다. 제약: 두 근이 모두 양수여야($D>0$ · 합 $>0$ · 곱 $>0$) 두 실근이 생기고, 곱이 밑의 정수 거듭제곱일 때 $\alpha+\beta$ 가 정수로 떨어진다. 근 자체는 무리수여도 된다 — 오히려 직접 풀이를 막아 준다.'
    creative: '(1) 곱을 $27$ 로 두어 $\alpha+\beta=3$ 만들기(★2) (2) $\alpha+\beta$ 가 주어지고 계수를 묻는 역방향(★3 · 79-175⑵ · 82-186) (3) 두 근의 차를 묻기(★3 · 82-187 — 곱만으로는 안 되고 합까지 써야 한다) (4) $3^{\alpha}+3^{\beta}$ 나 $9^{-\alpha}+9^{-\beta}$ 를 묻기(★2~3 · 81-180).'
```

```yaml
- id: GN-ALG-79-e17
  page: 79
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    $4^x-3\times2^{x+2}+k=0$ 이 서로 다른 두 실근을 갖도록 하는 실수 $k$ 의 값의 범위.
  category: '치환 → 「$t$ 의 서로 다른 두 양의 근」으로 동치 변환 → 판별식·합·곱 조건 결합'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '「$x$ 의 서로 다른 두 실근」을 「$t=2^x>0$ 의 서로 다른 두 양의 근」으로 옮김($x \leftrightarrow t$ 가 일대일이라는 점이 근거)'
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$D>0$ · 두 근의 합 $>0$ · 두 근의 곱 $>0$ 세 조건을 한꺼번에 세워 $k$ 의 범위로 결합'
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "$a^x$ 꼴 치환 방정식의 활용 — 근의 판별(두 양의 근 조건)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $t^2-12t+k=0$ 에서 그냥 $D>0$ 만 쓰면 $k<36$ 이 되어 틀린다. $t>0$ 이라는 치환의 제약 때문에 두 근이 모두 양수여야 하고, 그 조건이 곱 $k>0$ 을 더해 $0<k<36$ 을 만든다. 합 $=12>0$ 은 자동 충족이라 실제로 쓰이는 조건은 둘이다.
    필수 예제 ★2 출발 · 통찰 2개(EQV d2 · CON d2) → +1 → ★3. 이 단원 변별 문항의 원형.
  tier: star_3
  mechanism_primary: '$t=2^x>0$ 치환 → 두 양의 근 조건($D>0$ · 합 $>0$ · 곱 $>0$) → $k$ 의 범위'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$0<k<36$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/79-e17.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '일차항 계수($-12$)와 밑을 바꾼다. 제약: 합이 양수로 고정되면 조건이 $D>0$ 과 곱 $>0$ 둘로 줄고, 합에도 $k$ 가 들어가면 조건이 셋으로 늘어 난이도가 한 단계 올라간다. 판별식 경계값이 정수로 떨어지게 계수를 짝수로 잡는다.'
    creative: '(1) 「서로 다른 두 양의 근」 대신 「한 근만 양수」·「오직 하나의 실근」으로 바꾸면 82-188 · 82-191 골조(★3~4) (2) 정수 $k$ 의 개수를 묻기(★3 · 81-182) (3) $k$ 를 $-2k$ 처럼 계수에 넣어 부호 함정 추가(★3) (4) 두 근의 곱이 $1$ 로 고정되는 형($9^x-k\cdot3^x+1=0$)으로 바꾸면 케이스 기각이 생겨 ★4.'
```

```yaml
- id: GN-ALG-79-175
  page: 79
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크(유제)"
  summary: |
    ⑴ $4^x-5\times2^x+2=0$ 의 두 근 $\alpha$, $\beta$ 에 대해 $\alpha+\beta$ ⑵ $2^{2x+1}-2^x+k=0$ 의 두 근의 합이 $-5$ 일 때 상수 $k$.
  category: '치환 → 두 근의 곱 $=a^{\alpha+\beta}$ → ⑵ 는 역방향으로 $k$ 결정'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$t$ 의 두 근의 곱이 $2^{\alpha}\times2^{\beta}=2^{\alpha+\beta}$ 임을 이용해 근을 구하지 않고 합을 읽음'
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '⑵ 에서 결과(합 $=-5$)로부터 두 근의 곱 $2^{-5}$ → 계수 비교로 $k$ 를 역추적'
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "$a^x$ 꼴 치환 방정식의 활용 — 두 근의 합과 계수 역추적"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑴ 은 79-e16 과 같은 골조($t^2-5t+2=0$ 의 곱 $2$ → $\alpha+\beta=1$). ⑵ 는 방향이 반대로, $2^{2x+1}=2t^2$ 로 정리해 얻은 $2t^2-t+k=0$ 의 두 근의 곱 $\frac{k}{2}$ 가 $2^{-5}$ 여야 한다는 데서 $k$ 를 거꾸로 잡는다.
    확인체크 ★2 출발 · 통찰 2개(EQV d2 · BW d2) → +1 → ★3. ⑵ 의 $2^{2x+1}$ 계수 $2$ 를 흘리면 답이 두 배 어긋난다.
  tier: star_3
  mechanism_primary: '$t=2^x$ 치환 → 두 근의 곱 $=2^{\alpha+\beta}$ → ⑴ 은 값 읽기 · ⑵ 는 곱을 $2^{-5}$ 로 놓고 $k$ 역산'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $1$ ⑵ $\dfrac{1}{16}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/79-175.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 근의 합 목표값과 이차항 계수를 바꾼다. 제약: 역산한 $k$ 에 대해 두 근이 실제로 양수 두 개여야 하므로 $D>0$ 과 합 $>0$ 을 확인한 뒤 수를 고른다. $2^{2x+1}$ 처럼 계수가 딸린 항을 유지하면 계수 처리 함정이 남는다.'
    creative: '(1) 합 대신 곱 $\alpha\beta$ 를 묻기(★3~4 · 82-186 — 근을 실제로 복원해야 한다) (2) 차를 $2$ 로 주기(★3 · 82-187) (3) 두 근의 합이 정수가 되게 하는 $k$ 의 개수를 묻기(★4) (4) 밑을 $3$ 으로 바꾸고 $9^x$ 항 계수를 $\frac{1}{3}$ 로 두어 분수 계수 처리 추가(★3).'
```

```yaml
- id: GN-ALG-79-176
  page: 79
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크(유제)"
  summary: |
    $3^x+(k+1)\times3^{-x}-3=0$ 이 서로 다른 두 실근을 갖도록 하는 실수 $k$ 의 값의 범위.
  category: '양변에 $t$ 곱해 이차화 → 두 양의 근 조건 → $k$ 범위'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$3^{-x}=\frac{1}{t}$ 이므로 양변에 $t$ 를 곱해 $t^2-3t+(k+1)=0$ 으로 바꾸고, 실근 조건을 $t>0$ 인 두 근 조건으로 옮김'
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$D>0$ 과 두 근의 곱 $k+1>0$ 을 결합해 $-1<k<\frac{5}{4}$ 로 좁힘'
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "$a^x$ 꼴 치환 방정식의 활용 — 역수항이 있는 근의 판별"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    79-e17 의 유제인데 $3^{-x}$ 가 있어 양변에 $t$ 를 곱하는 단계가 앞에 하나 더 붙는다($t>0$ 이라 이 곱하기가 동치 변환임도 함께 보장된다). 이후는 $D>0$ 에서 $k<\frac{5}{4}$, 곱 $k+1>0$ 에서 $k>-1$.
    확인체크 ★2 출발 · 통찰 2개(EQV d2 · CON d2) → +1 → ★3. 곱 조건을 빼면 $k=-2$ 같은 값이 딸려 들어온다.
  tier: star_3
  mechanism_primary: '양변에 $t=3^x>0$ 곱하기 → $t^2-3t+(k+1)=0$ → $D>0$ 과 곱 $>0$ → $k$ 범위'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-1<k<\dfrac{5}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/79-176.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '일차항 계수와 $k$ 가 붙은 위치를 바꾼다. 제약: $D>0$ 의 경계가 분수로 떨어져도 되지만 곱 조건의 경계는 정수로 두는 편이 답 표기가 깔끔하다. 합에 $k$ 를 넣으면 조건이 셋으로 늘어난다.'
    creative: '(1) 「한 개의 실근만」으로 바꾸면 중근 + 한 근만 양수 두 경우를 따져야 해 ★4(82-188 골조) (2) 정수 $k$ 의 개수 묻기(★3 · 81-182) (3) $k$ 대신 밑을 미지수로 두기(★4) (4) 근의 부호까지 지정(「두 근이 모두 음수」)하면 $t$ 의 두 근이 $0<t<1$ 조건이 되어 ★4.'
```

```yaml
- id: GN-ALG-80-e18
  page: 80
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    세균 $1$ 마리가 $x$ 시간 후 $a^x$ 마리로 증식할 때, $10$ 마리를 배양해 $3$ 시간 후 $80$ 마리가 되었다면 $2560$ 마리가 되는 것은 몇 시간 후인지 고르기. 5지선다.
  category: '실생활 조건 → 지수식 세우기 → $a$ 결정 → 지수방정식'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수방정식의 실생활 활용 — 증식·감소 모형에서 시간 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    처음 개체 수가 $1$ 이 아니라 $10$ 이므로 $10a^x$ 로 세우는 것이 첫 관문이고, 나머지는 $10a^3=80 \Rightarrow a=2$, $10\times2^x=2560 \Rightarrow 2^x=256$ 두 번의 대입이다. 모형이 발문에 그대로 주어져 학생이 세울 것이 없어 통찰로 세지 않았다.
    필수 예제 ★2 출발 · 통찰 0 · M_total 5(감점 후보지만 두 번의 방정식 풀이가 연속이라) → ★2 유지.
  tier: star_2
  mechanism_primary: '$10a^x$ 로 모형화 → $10a^3=80$ 에서 $a=2$ → $10\times2^x=2560$ → $x=8$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '③'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/80-e18.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '초기 개체 수·경과 시간·목표 배수를 바꾼다. 제약: 중간에 구하는 밑 $a$ 가 정수(또는 간단한 유리수)가 되도록 「$n$ 시간 후 $m$ 배」에서 $m$ 이 $a$ 의 완전 거듭제곱이어야 하고, 목표값도 같은 밑의 거듭제곱이어야 한다.'
    creative: '(1) 감소 모형(반감기·필터·감가상각)으로 뒤집기(★1~2 · 80-177) (2) 밑을 구하지 못하게 $10^{ax}$ 꼴로 주고 지수 비례만으로 풀게 하기(★2 · 81-183 · I-EQV) (3) 관계식에 상수 $k$ 를 넣어 $k$ 를 묻기(★2 · 80-178) (4) 두 개체군이 같아지는 시각을 묻기(★3 · 두 지수식 연립).'
```

```yaml
- id: GN-ALG-80-177
  page: 80
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크(유제)"
  summary: |
    필터를 $1$ 개 통과할 때마다 불순물이 반으로 줄 때, $x$ 개를 통과해 처음의 $12.5\%$ 가 되었다면 $x$ 의 값.
  category: '반감 모형 → $\left(\frac{1}{2}\right)^x=0.125$ → 지수 비교'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수방정식의 실생활 활용 — 반감 모형"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    $12.5\%=\frac{1}{8}=\left(\frac{1}{2}\right)^3$ 으로 고치면 끝난다. 백분율을 분수로 옮기는 한 단계 외에 아무 처리가 없다.
    확인체크 ★2 출발이나 통찰 0 · M_total 4(≤5) → −1 → ★1. 이 범위 실생활 문항 중 가장 가볍다.
  tier: star_1
  mechanism_primary: '$\left(\frac{1}{2}\right)^x=12.5\%=\frac{1}{8}$ → 밑 통일 → $x=3$'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/80-177.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '감소 비율($\frac{1}{2}$ · $\frac{1}{3}$ · $\frac{2}{3}$)과 목표 백분율을 바꾼다. 제약: 목표 백분율이 그 비율의 정수 거듭제곱($6.25\%$ · $25\%$ 등)이어야 답이 정수가 된다.'
    creative: '(1) 목표를 $\frac{1}{16}$ 처럼 분수로 직접 주기(★1) (2) 필터 하나가 $30\%$ 를 제거하게 해 밑을 $0.7$ 로 만들면 정수해가 없어 부적절 (3) 몇 개를 통과해야 $1\%$ 이하가 되는지 부등식으로 묻기(★2~3 · 다음 단원) (4) 두 필터 종류를 섞어 $x+y$ 조건으로 연립화(★3).'
```

```yaml
- id: GN-ALG-80-178
  page: 80
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크(유제)"
  summary: |
    $T=T_1\times\left(\frac{4}{5}\right)^{\frac{2}{5}kt}$ 관계식에서 $1$ 월 $1200$ 톤, $7$ 월 $960$ 톤일 때 상수 $k$.
  category: '관계식 대입 → 밑 통일 → 지수 비교로 $k$'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수방정식의 실생활 활용 — 주어진 관계식에서 상수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $\frac{960}{1200}=\frac{4}{5}$ 이므로 지수 $\frac{2}{5}kt$ 가 $1$ 이면 된다. 실질 함정은 $1$ 월에서 $7$ 월까지가 $t=6$ 이라는 시간 환산(T-단위) 하나이고, 나머지는 분수 계수 정리다.
    확인체크 ★2 출발 · 통찰 0 · M_total 7 → ★2 유지. 관계식이 통째로 주어져 모형화 부담이 없다.
  tier: star_2
  mechanism_primary: '$T/T_1=\frac{4}{5}$ 계산 → 지수 $\frac{2}{5}k\times6=1$ → $k=\frac{5}{12}$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{5}{12}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/80-178.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '기준량·비교량과 지수의 분수 계수($\frac{2}{5}$), 경과 개월 수를 바꾼다. 제약: 두 값의 비가 밑의 정수(또는 간단한 유리수) 거듭제곱이어야 지수를 바로 읽을 수 있고, 그렇지 않으면 로그가 필요해 단원을 벗어난다.'
    creative: '(1) 비가 $\left(\frac{4}{5}\right)^2$ 이 되게 해 지수를 $2$ 로 만들기(★2) (2) $k$ 를 주고 몇 개월 후인지 묻는 방향 전환(★2) (3) 두 도시의 관계식을 주고 양이 같아지는 시점을 묻기(★3 · 지수방정식 연립) (4) 월 단위·연 단위를 섞어 단위 함정을 키우기(★3).'
```

### 연습문제 STEP 1

```yaml
- id: GN-ALG-81-179
  page: 81
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $\left(\frac{5}{7}\right)^{x^3+6}=\left(\frac{7}{5}\right)^{-2x^2-5x}$ 의 세 실근 $\alpha$, $\beta$, $\gamma$ 에 대해 $\alpha^2+\beta^2+\gamma^2$.
  category: '역수 밑 정리 → 지수 비교 → 삼차방정식 → 근의 제곱합'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "밑을 같게 할 수 있는 지수방정식 — 삼차방정식의 근의 제곱합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $\left(\frac{7}{5}\right)^{-2x^2-5x}=\left(\frac{5}{7}\right)^{2x^2+5x}$ 로 밑을 맞추면 $x^3+6=2x^2+5x$, 즉 $x^3-2x^2-5x+6=0$ 이고 $(x-1)(x-3)(x+2)=0$ 으로 근이 바로 나온다. 근과 계수의 관계를 써도 되고 직접 제곱해 더해도 되는 표준 절차라 통찰로 세지 않았다.
    STEP 1 ★2 출발 · 통찰 0 · M_total 6 → ★2 유지. 역수 밑의 음의 지수 처리(T-부호)가 유일한 함정.
  tier: star_2
  mechanism_primary: '역수 밑을 음의 지수로 고쳐 밑 통일 → 지수 비교 → 삼차방정식 인수분해 → 제곱합'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$14$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/81-179.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '삼차식의 계수를 바꾼다. 제약: 정리한 삼차방정식이 유리근 정리로 인수분해돼야 하고(상수항의 약수에 근이 있어야 함), 세 근이 정수여야 제곱합이 깔끔하다. 밑은 서로 역수인 유리수 쌍으로 둔다.'
    creative: '(1) 근의 합·곱이나 $\frac{1}{\alpha}+\frac{1}{\beta}+\frac{1}{\gamma}$ 를 묻기(★2~3 · 근과 계수를 강제) (2) 삼차식을 인수분해되지 않게 만들고 근과 계수만으로 제곱합을 구하게 하면 ★3(I-EQV) (3) 세 근 중 하나만 정수가 되도록 해 조건을 붙이기(★3).'
```

```yaml
- id: GN-ALG-81-180
  page: 81
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $\frac{1}{4^x}-3\times\frac{1}{2^{x-2}}+32=0$ 의 두 실근 $\alpha$, $\beta$ 에 대해 $4^{-\alpha}+4^{-\beta}$.
  category: '$2^{-x}=t$ 치환 → 이차방정식 → 구하는 식을 두 근의 제곱합으로 환원'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$4^{-\alpha}+4^{-\beta}=(2^{-\alpha})^2+(2^{-\beta})^2$ 이므로 구하는 값이 곧 $t$ 두 근의 제곱합임을 알아챔'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "$a^x$ 꼴 치환 방정식의 활용 — 구하는 식을 치환값의 식으로 환원"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $t=2^{-x}$ 로 놓으면 $\frac{1}{2^{x-2}}=4t$ 이므로 $t^2-12t+32=0$, 두 근은 $4$ 와 $8$ 이다. 여기서 답을 $x$ 로 되돌리지 않고 $(2^{-\alpha})^2+(2^{-\beta})^2$ 로 읽는 것이 핵심이며, 두 근이 정수라 근과 계수의 관계 없이도 바로 더할 수 있다.
    STEP 1 ★2 출발 · 통찰 1개(EQV d2) → ★2 유지. 음의 지수 치환($2^{-x}$)을 잡지 못하면 식이 정리되지 않는다.
  tier: star_2
  mechanism_primary: '$t=2^{-x}$ 치환 → $t^2-12t+32=0$ → 두 근 $4,8$ → $4^{-\alpha}+4^{-\beta}=t_1^2+t_2^2$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$80$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/81-180.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$t$ 이차방정식의 계수를 바꾼다. 제약: 두 근이 모두 양수여야 하고, 묻는 식이 제곱합이면 두 근이 정수일 때 답이 깔끔하다. 지수의 평행이동($2^{x-2}$)의 상수를 바꾸면 계수가 그만큼 변한다.'
    creative: '(1) 묻는 식을 $2^{-\alpha}+2^{-\beta}$ 나 $8^{-\alpha}+8^{-\beta}$ 로 바꾸기(★2~3 · 세제곱합이면 근과 계수 필요) (2) 두 근을 무리수로 만들어 근과 계수의 관계를 강제하면 ★3 (3) $\alpha+\beta$ 를 묻기(★2 · 79-e16) (4) 상수항을 문자로 두고 실근 조건을 묻기(★3).'
```

```yaml
- id: GN-ALG-81-181
  page: 81
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $a^{2x}-a^x=2$ 의 해가 $\frac{1}{7}$ 일 때 상수 $a$ 의 값. 조건 $a>0$, $a\ne1$.
  category: '해를 대입 → $t=a^{\frac{1}{7}}$ 이차방정식 → 양수 근에서 $a$ 역산'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '해가 먼저 주어진 꼴이라 $x=\frac{1}{7}$ 을 대입해 얻은 $a^{\frac{1}{7}}$ 값에서 밑 $a$ 를 $7$ 제곱으로 역추적'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "지수방정식의 밑 역산 — 해가 주어졌을 때 상수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $t=a^{\frac{1}{7}}$ 로 놓으면 $t^2-t-2=0$ 에서 $t=2$($t=-1$ 은 $t>0$ 으로 기각), 곧 $a^{\frac{1}{7}}=2$ 이므로 양변을 $7$ 제곱한다. 치환 대상이 $a^x$ 가 아니라 $a^{\frac{1}{7}}$ 이라는 점만 잡으면 계산은 두 줄이다.
    STEP 1 ★2 출발 · 통찰 1개(BW d2) → ★2 유지. $t>0$ 기각은 치환의 표준 확인이라 따로 세지 않았다.
  tier: star_2
  mechanism_primary: '$x=\frac{1}{7}$ 대입 → $t=a^{\frac{1}{7}}$ 의 이차방정식 → $t=2$ → $a=2^7$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$128$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/81-181.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '주어진 해($\frac{1}{7}$ → $\frac{1}{3}$ · $\frac{1}{5}$)와 이차식의 계수를 바꾼다. 제약: 살아남는 양수 근이 작은 정수여야 $a$ 가 다루기 쉬운 값($2^k$ · $3^k$)이 되고, 다른 근은 음수로 만들어 기각 단계를 유지한다.'
    creative: '(1) 해를 음수로 주어 $a$ 가 분수가 되게 하기(★2) (2) $a$ 대신 방정식의 계수를 묻기(★2) (3) 해가 두 개 주어지고 두 미지 계수를 연립으로 구하기(★3 · I-CON) (4) 「해가 하나뿐일 조건」으로 바꾸면 ★3~4.'
```

```yaml
- id: GN-ALG-81-182
  page: 81
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $9^x=2\times3^{x+1}-2k$ 가 서로 다른 두 실근을 갖도록 하는 정수 $k$ 의 개수.
  category: '치환 → 두 양의 근 조건 → $k$ 범위 → 정수 개수 세기'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '「$x$ 의 서로 다른 두 실근」을 「$t=3^x>0$ 의 서로 다른 두 양의 근」으로 옮김'
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$D>0$ 과 두 근의 곱 $2k>0$ 을 결합해 $0<k<\frac{9}{2}$ 를 얻고 그 안의 정수를 셈'
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "$a^x$ 꼴 치환 방정식의 활용 — 근의 판별 후 정수 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    이항하면 $t^2-6t+2k=0$ 이고 79-e17 과 같은 골조다. $D/4=9-2k>0$ 에서 $k<\frac{9}{2}$, 곱 $2k>0$ 에서 $k>0$, 합 $6>0$ 은 자동이다. 마지막에 범위를 정수로 세는 한 단계가 더 붙어 경계가 부등호인지 등호인지가 개수에 직결된다(T-경계).
    STEP 1 ★2 출발 · 통찰 2개(EQV d2 · CON d2) → +1 → ★3.
  tier: star_3
  mechanism_primary: '$t=3^x>0$ 치환·이항 → $D>0$ 과 곱 $>0$ → $0<k<\frac{9}{2}$ → 정수 $4$ 개'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/81-182.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$3^{x+1}$ 의 계수와 $k$ 에 붙은 배수를 바꾼다. 제약: 판별식 경계가 정수가 아니면(여기서는 $\frac{9}{2}$) 경계 포함 여부 실수를 줄일 수 있고, 경계를 정수로 두면 「$D>0$ 이라 그 값은 제외」라는 T-경계 함정이 세진다.'
    creative: '(1) 자연수 $k$ · 음이 아닌 정수 $k$ 로 조건을 바꿔 경계 판단을 강화(★3) (2) 「두 근이 모두 음수」로 바꾸면 $0<t<1$ 조건이 되어 ★4 (3) 실근을 갖지 않을 조건으로 뒤집기(★3) (4) 근의 곱이 주어진 값이 되게 하는 $k$ 를 묻기(★3 · 79-175).'
```

```yaml
- id: GN-ALG-81-183
  page: 81
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    미생물이 $x$ 시간 후 $10^{ax}$ 배로 증식할 때 $10$ 시간 후 $16$ 배였다면 $64$ 배가 되는 것은 $n$ 시간 후인지 구하기.
  category: '두 지수식의 비례 관계 → $a$ 를 구하지 않고 지수만 대응'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$10^{10a}=16$ 에서 $a$ 를 직접 구할 수 없으므로 $64=16^{\frac{3}{2}}=(10^{10a})^{\frac{3}{2}}=10^{15a}$ 로 두 식을 같은 밑의 거듭제곱 관계로 연결'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "지수방정식의 실생활 활용 — 밑을 구하지 않고 지수 비례로 처리"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $10^{10a}=16$ 에서 $a$ 를 구하려면 로그가 필요한데 이 단원에는 아직 없다. $64=16^{\frac{3}{2}}$ 을 보고 지수를 $\frac{3}{2}$ 배 하면 $n=15$ 가 나온다는 비례 관계가 이 문항의 전부다.
    STEP 1 ★2 출발 · 통찰 1개(EQV d2) → ★2 유지. $a$ 를 구하려 들면 막히도록 설계된 자리라 체감 난도는 ★ 라벨보다 조금 높다.
  tier: star_2
  mechanism_primary: '$10^{10a}=16$ · $10^{an}=64=16^{\frac{3}{2}}$ → 지수 비교 $an=\frac{3}{2}\times10a$ → $n=15$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$15$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/81-183.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '기준 시간과 두 배수($16 \to 64$)를 바꾼다. 제약: 두 배수가 같은 수의 거듭제곱이어야 하고($16=2^4$, $64=2^6$ → 비 $\frac{3}{2}$) 그 비가 유리수라야 $n$ 이 깔끔하다. 배수를 $10$ 이나 $5$ 로 두면 로그가 필요해 단원을 벗어난다.'
    creative: '(1) $n$ 을 주고 배수를 묻는 방향 전환(★2) (2) 두 미생물의 증식률을 주고 같아지는 시각을 묻기(★3 · 연립) (3) 배수를 $2$ 의 거듭제곱이 아닌 수로 두어 「구할 수 없음」을 판단하게 하기(★3~4) (4) 반감 모형으로 뒤집기(★2).'
```

### 연습문제 STEP 2

```yaml
- id: GN-ALG-81-184
  page: 81
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    연립방정식 $3^{x+1}+3^y=18$, $3^{x+y-1}=9$ 의 해 $x=\alpha$, $y=\beta$ 에 대해 $\alpha^2+\beta^2$.
  category: '두 지수식을 $u,v$ 로 치환 → 합·곱 연립 → 되돌리기'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$u=3^x$, $v=3^y$ 로 두면 두 번째 식이 $uv=27$ 이 되어 지수 연립이 대수 연립으로 바뀜'
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$3u+v=18$ 과 $uv=27$ 두 조건을 한 변수의 이차방정식으로 결합'
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "지수 연립방정식 — 두 지수식을 문자로 치환해 합·곱 연립"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 번째 식에서 밑이 같으므로 $x+y-1=2$, 즉 $uv=3^{x+y}=27$ 이다. 첫 식은 $3u+v=18$ 이므로 대입하면 $u^2-6u+9=0$ 의 중근 $u=3$, $v=9$ 가 나오고 $x=1$, $y=2$ 로 되돌린다. 치환 대상이 미지수 두 개라는 점과 $3^{x+1}=3u$ 계수 분해가 걸림돌이다.
    STEP 2 ★3 출발 · 통찰 2개(EQV d2 · CON d2) → ★3 유지(+1 후보지만 계산이 짧고 중근이라 실제 분기가 없다).
  tier: star_3
  mechanism_primary: '$u=3^x$, $v=3^y$ 치환 → $3u+v=18$, $uv=27$ → $u=3$, $v=9$ → $x=1$, $y=2$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/81-184.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '합 쪽의 계수와 곱의 값을 바꾼다. 제약: $u,v$ 가 모두 양수이고 밑의 정수 거듭제곱이어야 $x,y$ 가 정수가 된다. 중근이 아니라 서로 다른 두 쌍이 나오게 하면 해가 두 쌍이 되어 난이도가 한 단계 오른다.'
    creative: '(1) 해가 두 쌍 나오게 해 $\alpha+\beta$ 의 최댓값을 묻기(★4 · I-MI) (2) 밑이 다른 두 지수($2^x$, $3^y$)를 섞기(★3~4) (3) 한 식을 $9^x+3^y$ 처럼 제곱 항으로 두기(★4) (4) $x-y$ 나 $xy$ 를 묻기(★3 유지).'
```

```yaml
- id: GN-ALG-81-185
  page: 81
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $y=3^x$ 와 $y=-\left(\frac{1}{3}\right)^x+k$ 의 두 교점 $\mathrm{A}$, $\mathrm{B}$ 의 중점이 $\left(0,\frac{5}{3}\right)$ 일 때 상수 $k$.
  category: '교점 조건 → $3^x+3^{-x}=k$ → 중점 $x$ 좌표 $0$ 의 대칭 이용'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '두 그래프가 만난다는 기하 조건을 $3^x=-3^{-x}+k$, 곧 $3^x+3^{-x}=k$ 라는 방정식으로 옮김'
    - step: 2
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '중점의 $x$ 좌표가 $0$ 이므로 두 교점의 $x$ 좌표가 $p$, $-p$ 로 부호 대칭임을 이용해 $y$ 좌표의 합이 $3^p+3^{-p}=k$ 와 같아짐을 봄'
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "지수함수 그래프의 교점 — 중점 조건과 대칭성"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 교점의 $x$ 좌표를 $p$, $-p$ 로 놓으면 $y$ 좌표가 $3^p$, $3^{-p}$ 이고 중점의 $y$ 좌표가 $\frac{5}{3}$ 이므로 합이 $\frac{10}{3}$ 이다. 그런데 교점 조건 자체가 $3^x+3^{-x}=k$ 이므로 그 합이 곧 $k$ 다. 교점을 실제로 구하지 않고 대칭으로 끝낸다.
    STEP 2 ★3 출발 · 통찰 2개(EQV d2 · SYM d2) → ★3 유지. 방정식을 세운 뒤 근과 계수로 가도 되지만 대칭 경로가 두 줄로 짧다.
  tier: star_3
  mechanism_primary: '교점 조건 $3^x+3^{-x}=k$ → 중점 $x=0$ 에서 두 근이 $p,-p$ → $y$ 좌표 합 $=3^p+3^{-p}=k=\frac{10}{3}$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{10}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/81-185.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '중점의 $y$ 좌표와 밑($3$ → $2$ · $4$)을 바꾼다. 제약: 중점의 $x$ 좌표를 $0$ 으로 두어야 대칭이 살아나고, $y$ 좌표는 $\frac{k}{2}$ 가 되므로 $k$ 가 그 두 배로 정해진다. 중점 $x$ 좌표를 $0$ 이 아닌 값으로 바꾸면 대칭이 깨져 근과 계수의 관계로 풀어야 한다.'
    creative: '(1) 중점 $x$ 좌표를 $1$ 로 두어 대칭을 깨면 치환·근과 계수 경로만 남아 ★4 (2) 선분 $\mathrm{AB}$ 의 길이를 주기(★4 · 82-189 골조) (3) 교점이 한 개일 조건을 묻기(★3~4 · 판별식) (4) 두 지수함수를 모두 증가함수로 두면 교점 대칭이 사라져 ★4.'
```

```yaml
- id: GN-ALG-82-186
  page: 82
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $\frac{1}{3}\times2^{2x+1}-11\times2^x+k=0$ 의 두 근의 합이 $3$ 일 때 두 근의 곱.
  category: '근의 합 → $t$ 두 근의 곱 $=2^3$ → $k$ 결정 → 두 근 복원 후 곱'
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '두 근의 합 $\alpha+\beta=3$ 을 $t$ 의 두 근의 곱 $2^{\alpha}\times2^{\beta}=2^3=8$ 로 옮겨 $k$ 를 정함'
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '두 근의 곱 $\alpha\beta$ 는 근과 계수로 바로 나오지 않으므로 $t$ 의 두 근 $16$, $\frac{1}{2}$ 을 실제로 복원해 $\alpha=4$, $\beta=-1$ 을 되돌림'
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "$a^x$ 꼴 치환 방정식의 활용 — 두 근의 합 조건에서 두 근의 곱"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $\frac{2}{3}t^2-11t+k=0$ 에서 두 근의 곱이 $\frac{3k}{2}$, 합이 $\frac{33}{2}$ 다. 곱이 $2^3=8$ 이어야 하므로 $k$ 가 정해지고, 여기서 멈추면 안 된다 — $\alpha\beta$ 는 지수 쪽의 곱이라 $t$ 의 두 근을 실제로 구해 $2^4$ 과 $2^{-1}$ 로 읽어야 나온다.
    STEP 2 ★3 출발 · 통찰 2개(EQV d2 · BW d2) → ★3 유지. 「합은 곱으로, 곱은 근을 직접 구해서」라는 비대칭이 이 문항의 함정이다.
  tier: star_3
  mechanism_primary: '$t=2^x$ 치환 → 곱 $=2^{\alpha+\beta}=8$ 로 $k$ 결정 → $t$ 두 근 $16,\frac{1}{2}$ → $\alpha=4,\beta=-1$ → $\alpha\beta$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/82-186.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '이차항 계수($\frac{2}{3}$)와 일차항 계수, 합의 목표값을 바꾼다. 제약: 복원되는 두 근이 모두 $2$ 의 정수 거듭제곱이어야 $\alpha,\beta$ 가 정수가 되므로, 합·곱을 먼저 정해 놓고 계수를 역으로 만드는 편이 안전하다.'
    creative: '(1) 곱 대신 $|\alpha-\beta|$ 나 $\alpha^2+\beta^2$ 를 묻기(★3~4) (2) $k$ 자체를 묻기(★3 · 79-175⑵) (3) 두 근의 차를 주고 $k$ 를 묻는 82-187 형으로 뒤집기(★3) (4) 세 근이 나오도록 삼차형으로 확장(★4).'
```

```yaml
- id: GN-ALG-82-187
  page: 82
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $4^x-5\times2^{x+1}+k=0$ 의 두 근의 차가 $2$ 일 때 상수 $k$.
  category: '근의 차 → $t$ 두 근의 비 $=2^2$ → 합 조건과 결합 → 곱으로 $k$'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '두 근의 차 $\alpha-\beta=2$ 를 $t$ 의 두 근의 비 $\frac{2^{\alpha}}{2^{\beta}}=4$ 로 옮김(차 → 비)'
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '비 $=4$ 와 근과 계수의 합 $=10$ 을 결합해 두 근을 $2$ 와 $8$ 로 확정하고 곱에서 $k$ 를 읽음'
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "$a^x$ 꼴 치환 방정식의 활용 — 두 근의 차(비 조건)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    합은 곱으로 옮겨졌지만 차는 비로 옮겨진다는 점이 핵심이다. $t^2-10t+k=0$ 의 두 근을 $t_2$, $4t_2$ 로 놓으면 합이 $5t_2=10$ 이라 $t_2=2$, $t_1=8$ 이고 $k$ 는 곱이다. 차를 그대로 빼려 들면 무리식이 되어 막힌다.
    STEP 2 ★3 출발 · 통찰 2개(EQV d2 · CON d2) → ★3 유지.
  tier: star_3
  mechanism_primary: '$t=2^x$ 치환 → 차 $2$ → 두 근의 비 $4$ → 합 $=10$ 과 연립해 $t=2,8$ → $k=t_1t_2$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$16$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/82-187.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '일차항 계수(합)와 차의 값을 바꾼다. 제약: 비가 $2^{(\text{차})}$ 이므로 합을 $(1+\text{비})$ 의 배수로 잡아야 두 근이 정수가 되고, 그래야 $k$ 가 정수로 떨어진다.'
    creative: '(1) $k$ 를 주고 차를 묻는 방향 전환(★3) (2) 차 대신 $\frac{\alpha}{\beta}$ 나 $2^{\alpha}-2^{\beta}$ 를 주기(★3~4) (3) 두 근의 합과 차를 동시에 주고 계수 둘을 구하기(★4 · I-CON) (4) 밑을 $3$ 으로 바꾸고 차를 $1$ 로 두어 비를 $3$ 으로(★3).'
```

```yaml
- id: GN-ALG-82-188
  page: 82
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $9^x-k\times3^{x-1}+1=0$ 이 오직 하나의 실근 $\alpha$ 를 가질 때 $k+\alpha$.
  category: '치환 → 두 근의 곱 $=1$ 이므로 중근 경우만 남김 → $k$ 와 $\alpha$'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '「$x$ 의 실근이 하나뿐」을 「$t=3^x>0$ 인 근이 하나뿐」으로 옮김'
    - step: 2
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '「중근」과 「한 근만 양수」 두 경우를 따지되, 두 근의 곱이 $1>0$ 이라 부호가 같아 뒤쪽 경우가 불가능함을 확인해 기각'
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "$a^x$ 꼴 치환 방정식의 활용 — 실근이 하나뿐일 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $t^2-\frac{k}{3}t+1=0$ 에서 곱이 $1$ 로 고정된다는 것이 이 문항의 장치다. 곱이 양수라 두 근의 부호가 같으므로 「한 근만 양수」 경우가 원천 봉쇄되고, 남는 것은 중근뿐이다($D=0$ → $k=6$, 그때 $t=1$ 이므로 $\alpha=0$). 이 기각을 건너뛰면 답이 여러 개로 보인다.
    STEP 2 ★3 출발 · 통찰 2개(EQV d2 · VF d2) → ★3 유지. 79-e17 의 「두 근」 조건을 「한 근」으로 뒤집은 대칭 문항.
  tier: star_3
  mechanism_primary: '$t=3^x$ 치환 → 곱 $=1>0$ 이라 두 근 동부호 → 중근만 가능 → $D=0$ 에서 $k=6$, $t=1$ 에서 $\alpha=0$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/82-188.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$3^{x-1}$ 의 평행이동과 상수항을 바꾼다. 제약: 상수항을 양수로 두어야 「곱이 양수 → 동부호」 논리가 유지된다. 상수항을 음수로 바꾸면 곱이 음수가 되어 항상 한 근만 양수가 되므로(82-191 골조) 문제의 성격 자체가 달라진다.'
    creative: '(1) 상수항을 음수로 바꿔 「항상 실근이 하나」임을 보이게 하기(★4 · 82-191) (2) $k$ 의 범위를 묻기(★3) (3) $\alpha$ 가 자연수가 되게 하는 $k$ 를 묻기(★4 · I-VF 강화) (4) 「서로 다른 두 실근」과 「하나뿐」을 한 문항에서 모두 묻는 보기형(★4).'
```

### 연습문제 실력 UP

```yaml
- id: GN-ALG-82-189
  page: 82
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: ["수능 기출"]
  category_type: "연습문제"
  summary: |
    직선 $y=2x+k$ 가 $y=\left(\frac{2}{3}\right)^{x+3}+1$, $y=\left(\frac{2}{3}\right)^{x+1}+\frac{8}{3}$ 과 만나는 점을 각각 $\mathrm{P}$, $\mathrm{Q}$ 라 할 때 $\overline{\mathrm{PQ}}=\sqrt{5}$ 이면 상수 $k$. 5지선다.
  category: '선분 길이 → 두 점의 $x$ 좌표 차 $1$ → 두 지수식의 배수 관계로 연립'
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '기울기 $2$ 인 직선 위의 두 점이므로 $\overline{\mathrm{PQ}}=\sqrt{5}$ 라는 기하 조건을 「$x$ 좌표 차가 $1$」이라는 대수 조건으로 전환'
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$x$ 좌표가 $1$ 차이일 때 $\left(\frac{2}{3}\right)^{x+3}$ 과 $\left(\frac{2}{3}\right)^{x+2}$ 가 $\frac{2}{3}$ 배 관계임을 써서 두 점의 식을 $2x+k$ 하나로 묶어 소거'
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "지수함수 그래프와 직선의 교점 — 선분 길이 조건에서 상수 구하기"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    두 점이 같은 직선(기울기 $2$) 위에 있으므로 $\overline{\mathrm{PQ}}=\sqrt{5}$ 는 $|\Delta x|=1$ 과 같다. $\mathrm{Q}$ 의 $x$ 좌표를 $\mathrm{P}$ 보다 $1$ 크게 잡으면 $\mathrm{Q}$ 쪽 지수가 $\mathrm{P}$ 쪽보다 정확히 한 칸 작아져 두 식이 $\frac{2}{3}$ 배로 연결되고, $2x+k$ 를 한 문자로 두면 일차방정식 한 줄로 값이 나온다. 두 그래프를 각각 그려 교점을 구하려 들면 풀리지 않는다.
    실력 UP ★4 출발 · 수능 기출(+0~1) · 통찰 2개(RT d2 · CON d2) → ★4 유지. 그림은 두 곡선과 직선의 위치를 확인시켜 줄 뿐 골조에 새 정보를 주지 않는다.
  tier: star_4
  mechanism_primary: '$\overline{\mathrm{PQ}}=\sqrt{5}$ · 기울기 $2$ → $x$ 좌표 차 $1$ → 두 곡선 식을 $\frac{2}{3}$ 배 관계로 연결 → $2x+k$ 를 한 문자로 소거 → $k$'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '④'
  answer_source: "답지"
  figure: 'crop:fig-82-189.png'
  latex: latex-bank/gn-alg/items/82-189.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑($\frac{2}{3}$), 두 곡선의 평행이동량, 직선의 기울기를 바꾼다. 제약: 선분 길이가 $\sqrt{1+m^2}\times|\Delta x|$ 이므로 기울기 $m$ 과 길이를 맞춰 $|\Delta x|$ 가 정수가 되게 해야 하고, 두 곡선의 가로 이동 차이가 $|\Delta x|$ 와 맞물려 지수가 같은 항으로 정리돼야 소거가 된다.'
    creative: '(1) 길이 대신 중점 좌표를 주기(★3~4 · 81-185) (2) 두 곡선을 평행이동 관계로 명시해 이동벡터를 묻기(★4) (3) $\overline{\mathrm{PQ}}$ 의 최솟값을 묻기(★5 후보 · 최적화 추가) (4) 직선을 수평선으로 바꾸면 $\Delta x$ 가 바로 보여 ★3 으로 내려간다.'
```

```yaml
- id: GN-ALG-82-190
  page: 82
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $3(9^x+9^{-x})-(3^x+3^{-x})-24=0$ 풀기.
  category: '대칭식 $t=3^x+3^{-x}$ 치환 → $9^x+9^{-x}=t^2-2$ → 범위로 기각 → 되돌리기'
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$3^x$ 과 $3^{-x}$ 의 대칭 구조를 보고 $t=3^x+3^{-x}$ 하나로 묶어 $9^x+9^{-x}=t^2-2$ 로 차수를 낮춤'
    - step: 2
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '$3t^2-t-30=0$ 의 두 근 중 $t=-3$ 은 $t=3^x+3^{-x}\ge2$ 를 어기므로 기각'
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "대칭식 치환 지수방정식 — $a^x+a^{-x}$ 를 한 문자로"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    $3^x=u$ 로 그냥 치환하면 사차식이 되어 막힌다. $9^x+9^{-x}=(3^x+3^{-x})^2-2$ 라는 대칭식 관계를 봐야 이차식으로 내려오고, 얻은 $t=\frac{10}{3}$ 에서 다시 $3u^2-10u+3=0$ 을 풀어 $u=3,\frac{1}{3}$ 으로 되돌린다. 치환이 두 겹이라 되돌리기를 한 번 더 해야 한다.
    실력 UP ★4 출발 · 통찰 2개(SYM d2 · VF d1) → ★4 유지. 통찰 3개·★5 게이트(저노출 유형 + 참신도)는 충족하지 못한다.
  tier: star_4
  mechanism_primary: '$t=3^x+3^{-x}\ (t\ge2)$ 치환 → $3(t^2-2)-t-24=0$ → $t=\frac{10}{3}$ → $3^x+3^{-x}=\frac{10}{3}$ → $x=\pm1$'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$x=-1$ 또는 $x=1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/82-190.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$t$ 이차식의 계수와 상수항을 바꾼다. 제약: 살아남는 근이 $t\ge2$ 여야 하고, 그 $t$ 에 대한 $u$ 이차방정식의 두 근이 서로 역수인 밑의 거듭제곱($3,\frac{1}{3}$)이어야 $x$ 가 정수로 떨어진다. 버리는 근은 $t<2$ 로 두어 기각 단계를 유지한다.'
    creative: '(1) $a^x-a^{-x}$ 대칭차식으로 바꾸면 $\ge$ 제약이 사라져 기각 단계가 없어진다(★3) (2) $t$ 의 최솟값을 묻는 최대·최소 문항으로 전환(★4 · 다음 단원) (3) 근의 합·곱을 묻기(★4 · 대칭이라 합은 $0$) (4) 상수항을 문자로 두고 실근 개수를 묻기(★5 후보 · $t\ge2$ 경계 분석 추가).'
```

```yaml
- id: GN-ALG-82-191
  page: 82
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $4^x+a\times2^x-4a=0$ 의 실근이 $\alpha$ 뿐이고 $1<\alpha<2$ 일 때 양수 $a$ 의 값의 범위.
  category: '치환 → 곱이 음수라 양근 유일 → 근의 위치 $2<t<4$ → 이차함수 부호 조건'
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$t^2+at-4a=0$ 의 두 근의 곱이 $-4a<0$ 이므로 근의 부호가 서로 달라 양근이 반드시 하나뿐임을 확인(음근은 $x$ 의 해가 되지 못해 기각)'
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$1<\alpha<2$ 를 $t=2^{\alpha}$ 에 대한 $2<t<4$ 로 옮김'
    - step: 3
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '「근이 구간 $(2,4)$ 안에 있다」를 이차함수 그래프의 부호 조건 $f(2)<0$, $f(4)>0$ 으로 전환'
  insight_count: 3
  depth_score: 2.00
  type_id: null
  type_hint: "$a^x$ 꼴 치환 방정식의 활용 — 실근의 위치 조건(구간 내 근)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    세 단계가 모두 다른 도구다. 곱이 음수라는 것에서 양근 유일이 자동으로 따라오고(이 확인을 안 하면 판별식·합 조건을 헛되이 세운다), 지수의 범위를 치환값의 범위로 옮긴 뒤, 근의 위치를 $f(2)<0$·$f(4)>0$ 이라는 그래프 부호로 바꾼다. $f(4)=16$ 으로 항상 양수라 실제 조건은 $f(2)<0$ 하나만 남는다.
    실력 UP ★4 출발 · 통찰 3개(VF d2 · EQV d2 · RT d2) → +1 후보이나 v3.8 ★5 게이트의 참신도(novelty_score 0)를 충족하지 못해 ★4 로 둔다. 이 범위에서 가장 무거운 문항(M_total 9).
  tier: star_4
  mechanism_primary: '$t=2^x$ 치환 → 곱 $-4a<0$ 이라 양근 하나뿐 → $1<\alpha<2 \Rightarrow 2<t<4$ → $f(2)<0$, $f(4)>0$ → $a>2$'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$a>2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/82-191.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '상수항의 계수($-4a$)와 근이 놓일 구간($1<\alpha<2$)을 바꾼다. 제약: 상수항이 음수여야 「양근 유일」이 유지되고, 구간 끝값에서 $f$ 의 부호가 서로 달라야 답이 부등식 하나로 정리된다. 한쪽 부호가 항상 성립하도록 설계하면(여기서는 $f(4)=16$) 계산이 가벼워진다.'
    creative: '(1) 상수항을 양수로 바꿔 두 양근·중근 분기를 살리면 ★5 후보(I-MI 추가) (2) 구간을 $\alpha>2$ 처럼 한쪽만 주기(★4) (3) 정수 $a$ 의 최솟값을 묻기(★4 · T-경계 강화) (4) $a$ 의 부호 조건을 빼고 모든 실수 $a$ 로 열면 경우가 늘어 ★5.'
```

## 표본 판정 요약 (31문)

- ★ 분포: ★1 5 · ★2 11 · ★3 12 · ★4 3 · ★5 0 — 구역별로는 개념원리 익히기 4문이 전부 ★1, 필수·발전 예제 14문이 ★1~3, STEP 1 이 ★2~3, STEP 2 가 전부 ★3, 실력 UP 3문이 ★4다.
- 통찰형 19 · 절차형 12 · premium 0. 절차형은 「밑 통일 → 지수 비교」와 「치환 → 이차방정식」 두 골조에 전부 들어가고(76-167~77-172 · 80-e18 · 80-177 · 80-178 · 81-179), 통찰은 78-e15 이후 활용 구간에서 시작된다.
- 통찰 유형 분포(단계 기준 총 35개): I-EQV 13 · I-CON 6 · I-VF 6 · I-MI 3 · I-BW 3 · I-RT 2 · I-SYM 2 · I-PD 0 · I-SC 0 · I-XU 0. depth 는 대부분 2이고 depth 3 은 없다.
- type_hint 상위 5: 「밑을 같게 할 수 있는 지수방정식(지수 비교)」 6(76-167 · 76-168 · 76-169 · 77-e13 · 77-171 · 81-179) · 「근의 판별·실근 개수 조건」 5(79-e17 · 79-176 · 81-182 · 82-188 · 82-191) · 「$a^x$ 꼴 치환(기본)」 4(76-170 · 77-e14 · 77-172 · 81-180) · 「두 근의 합·차·곱 활용」 4(79-e16 · 79-175 · 82-186 · 82-187) · 「실생활 활용」 4(80-e18 · 80-177 · 80-178 · 81-183). 나머지는 밑에 미지수 3 · 그래프 교점 2 · 연립 1 · 밑 역산 1 · 대칭식 치환 1.
- M_total 분포: 4 (4문) · 5 (1문) · 6 (8문) · 7 (6문) · 8 (11문) · 9 (1문 · 82-191). 함정은 T-부호(역수 밑·음의 지수)와 T-범위($t>0$)가 압도적이고, T-경계는 정수 개수·구간 근을 묻는 81-182 · 82-191 에서 실제로 채점에 관여한다.
- 그림: 1문(82-189 `crop:fig-82-189.png`) · 선택형 2문(80-e18 · 82-189) · 나머지는 단답·서술 지시형.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-ALG-77-171 외 「확인체크」 8문 | tag 「확인체크」의 벤더 신호만 보면 ★1 출발이지만 예제 구역의 확인체크는 직전 필수 예제의 유제라 대응 예제와 같은 ★2 를 출발점으로 썼다(77-171 · 77-172 · 78-173 · 78-174 · 79-175 · 79-176 · 80-177 · 80-178). 80-177 만 M_total 4 로 −1 되어 ★1 | ★1 / ★2 |
| GN-ALG-77-172 | 치환 후 $t>0$ 으로 음수 근을 버리는 단계를 I-VF 통찰로 셀지 치환의 표준 확인으로 볼지 경계. 이 파일은 「치환할 때 이미 명시한 제약을 그대로 적용하는 경우는 통찰로 세지 않는다」로 통일했고, 그래서 절차형 ★2 로 뒀다. 반대로 세면 이 범위 치환 문항 다수가 통찰형으로 바뀐다 | ★2 (통찰형/절차형 경계) |
| GN-ALG-79-e16 | 통찰 1개(EQV d2)라 산식상 ★2 유지지만, $\alpha+\beta$ 를 $t$ 두 근의 곱으로 옮기는 환원을 모르면 손을 못 대는 문항이라 교사 체감은 ★3 에 가깝다(1단 차이) | ★2 / ★3 |
| GN-ALG-81-183 | 위와 같은 구조. 밑 $a$ 를 구할 수 없다는 것을 깨닫고 지수 비례로 넘어가는 단계가 실질 장벽인데 STEP 1·통찰 1개라 ★2 로 뒀다 | ★2 / ★3 |
| GN-ALG-82-191 | 통찰 3개(VF·EQV·RT)로 ★5 의 「저노출 유형 포함」 요건은 충족하지만 참신도(novelty_score 0 · 시판 다수 노출)로 v3.8 ★5 게이트를 통과하지 못해 ★4 로 둠 | ★4 / ★5 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **반복된 type_hint 는 세 축**이다. ① 밑을 같게 해서 지수 비교(지수가 일차식/이차식/삼차식) ② $a^x=t$ 치환 후 이차방정식 ③ 밑에 미지수가 있을 때의 경우 분기. 31문항의 골조가 모두 이 셋 안에 들어온다.
- **통합해도 될 것**: 76-167(우변을 거듭제곱으로) · 76-168(밑이 이미 같음) · 76-169(밑 통일) · 77-e13 · 77-171(지수가 이차식)은 「밑 통일 후 지수 비교」 한 유형의 난이도 계단으로 묶어도 된다. 76-170 · 77-e14 · 77-172 · 81-180 도 「$a^x$ 치환 기본」 하나로 충분하다.
- **따로 세워야 할 것**: ① **근의 판별**(79-e17 · 79-176 · 81-182 · 82-188 · 82-191) — 「$t>0$ 인 두 근」 조건이 핵심이고, 「두 실근」·「하나뿐」·「구간 내 근」이 각각 다른 조건 조합을 만들므로 base ★ 를 3~4 로 따로 잡아야 한다. ② **두 근의 합·차·곱**(79-e16 · 79-175 · 82-186 · 82-187) — 합은 곱으로, 차는 비로 옮겨지고, 곱은 근을 복원해야 나온다는 비대칭이 유형의 본질이다. ③ **밑에 미지수**(78-e15 · 78-173 · 78-174) — 분기 + 범위 기각이라 위 두 축과 도구가 다르다. ④ **대칭식 치환**(82-190) — $a^x+a^{-x}$ 를 한 문자로 묶는 것은 이 범위에서 유일하며 다음 단원(부등식·최대최소)과 함께 묶는 편이 낫다.
- **실생활 활용**(80-e18 · 80-177 · 80-178 · 81-183)은 골조가 「밑 통일」과 같지만 모형을 세우는 진입 단계가 따로 있어 별도 유형으로 두되 base ★ 는 2 가 적당하다. 다만 81-183 처럼 밑을 구할 수 없게 설계한 것은 로그 단원 이전에만 성립하는 장치라 카탈로그에 단원 의존성을 명시해야 한다.
- **그래프 교점**(81-185 · 82-189)은 이 단원이 아니라 지수함수 그래프 단원과 공유되는 유형이다. 방정식 단원 카탈로그에서는 「교점 조건 → 지수방정식」으로 연결만 걸고, base ★ 는 그래프 단원 쪽에서 3~4 로 잡는 것이 맞다.
