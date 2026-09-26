---
name: mechanism-데이터-GN-ALG-09
description: 개념원리 대수 09 지수함수의 활용 – 부등식(1/1 · 84~90쪽 84-192~90-214 · 28문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 대수 (22개정 · 학생용) · 전사본 latex-bank/gn-alg
  section: 09 지수함수의 활용 – 부등식
  unit_code: ALG-09
  part: "1/1"
  extract_range: "84~90쪽 · 84-192~90-214"
  total_problems: 28
  unit_total: 28
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-alg/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-alg/items/<id>.tex
  image_source: latex-bank/gn-alg/figures/ (crops.json)
---

# 개념원리 대수 · 09 지수함수의 활용 – 부등식 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 대수 09단원 「지수함수의 활용 – 부등식」 전체(84~90쪽 · 84-192~90-214 · 28문항)를 다룬다. 구역은 다섯이다. **개념원리 익히기** 4문항(84-192~84-195 · 개념 직후 드릴 · level·tag 없음), **필수·발전 예제** 13문항(85-e19 「밑을 같게 할 수 있는 지수부등식」 · 86-e20 「$a^{x}$의 꼴이 반복되는 지수부등식」 · 87-e21 「밑에 미지수가 포함된 부등식」 · 88-e22 「지수부등식이 항상 성립할 조건」 · 88-e23 「지수부등식의 실생활에의 활용」 tag 「필수」와, 각 예제 뒤에 붙는 tag 「확인체크」 문항), **연습문제 STEP 1** 5문항, **연습문제 STEP 2** 4문항, **연습문제 실력 UP** 2문항이다. 그림 문항은 없다.

★ 출발점은 구역 신호로 잡았다 — 개념원리 익히기 ★1 · 필수·발전 예제 구역(필수 예제와 그 미러 드릴인 확인체크) ★2 · STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4. 「확인체크」를 ★1 출발로 보는 일반 규칙 대신 이 단원에서는 **직전 필수 예제와 같은 골조·같은 자릿수의 미러 드릴**이라 ★2 출발로 두었고, 그 때문에 확인체크가 ★3 으로 올라간 문항은 파일 끝 표에 이슈로 모았다. 출발점에서 M_total·통찰로 ±1 만 조정했다.

단원의 골조는 다섯 갈래로 반복된다. ① 밑을 하나로 통일해 지수를 비교(밑이 $1$ 보다 작으면 부등호 반전) ② $a^{x}=t\ (t>0)$ 치환으로 이차부등식 처리 ③ 밑에 미지수가 있을 때 밑이 $1$ 보다 큰지 작은지로 경우 나누기 ④ 「모든 실수 $x$ 에 대하여 성립」을 치환한 $t$ 의 범위에서의 최솟값 조건으로 옮기기 ⑤ 실생활 증가·감소율 모델. 통찰 라벨이 붙은 13문항은 대부분 ③의 경우 분기(I-MI)와 케이스 기각(I-VF), ④의 정의역 동치 변환(I-EQV), 해가 주어진 문항의 역추적(I-BW)에서 나왔다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 / 골조를 유지한 설정 변형과 ★ 가 변하는 지점)를 채웠다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-ALG-84-192
  page: 84
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑹ 밑이 같은 지수부등식 6개를 푼다. 우변의 수를 좌변과 같은 밑의 거듭제곱으로 고쳐 지수를 비교하는 드릴이며, 밑이 $\dfrac{1}{2}$·$\dfrac{1}{3}$ 인 것이 섞여 있다.
  category: '밑 통일 → 지수 비교(밑이 $1$ 보다 작으면 부등호 반전)'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "밑이 같은 지수부등식 — 지수 비교와 부등호 방향"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    각 문항이 「우변을 같은 밑으로 고치기 → 지수 비교」 두 단계로 끝난다. 유일한 함정은 밑이 $1$ 보다 작을 때의 부등호 반전(T-부호)이라 $M_t=1$.
    개념원리 익히기 구역 ★1 출발 · 통찰 0 · M_total 4 → ★1 유지.
  tier: star_1
  mechanism_primary: '우변을 좌변과 같은 밑의 거듭제곱으로 고치기 → 밑 $>1$ 이면 부등호 유지, $0<$ 밑 $<1$ 이면 반전 → 지수 비교'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $x<2$ ⑵ $x<-3$ ⑶ $x\ge 6$ ⑷ $x\ge 3$ ⑸ $x\ge 4$ ⑹ $x<-6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/84-192.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑($2$·$3$·$5$·$\dfrac{1}{2}$·$\dfrac{1}{3}$)과 우변 수를 교체. 제약: 우변이 그 밑의 정수 거듭제곱이어야 답이 정수 경계로 떨어지고, 밑이 $1$ 보다 작은 항목을 최소 하나 남겨 부등호 반전을 확인시킨다.'
    creative: '(1) 부등식을 만족시키는 자연수 $x$ 의 개수를 묻기(★2) (2) 우변을 $\sqrt{2}$·$\sqrt[3]{3}$ 꼴로 바꿔 유리수 지수를 거치게 하기(★2) (3) 양변 밑을 다르게 주어 밑 통일 단계를 추가하면 85-e19 급 ★2.'
```

```yaml
- id: GN-ALG-84-193
  page: 84
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ 양변이 모두 지수 꼴인 부등식. ⑴⑵ 는 지수가 일차식이고, ⑶ $2^{2x}-2^{x+1}<0$ · ⑷ 는 두 지수항을 이항해 같은 밑끼리 비교하는 꼴이다.
  category: '이항해 같은 밑끼리 비교 → 지수 일차부등식'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수가 일차식인 지수부등식 — 이항 후 지수 비교"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑶⑷ 는 한 항을 옮기기만 하면 $2^{2x}<2^{x+1}$ 꼴이 되어 지수 비교로 끝난다. 치환이나 인수분해가 필요 없는 자리다.
    함정은 밑 $\dfrac{1}{5}$·$\dfrac{1}{25}$ 에서의 부등호 반전과 음수 지수 부호(T-부호). 구역 ★1 출발 · 통찰 0 · M_total 5 → ★1 유지(하한).
  tier: star_1
  mechanism_primary: '지수항을 한쪽으로 이항 → 밑을 같게 → 밑의 크기로 부등호 방향 결정 → 지수 일차부등식'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $x\le 2$ ⑵ $x>2$ ⑶ $x<1$ ⑷ $x\ge -1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/84-193.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '지수 일차식의 계수·상수($3x$ 와 $4+x$, $-5x+1$ 과 $-4x-1$)를 교체. 제약: 두 지수의 $x$ 계수가 달라야 해가 반직선으로 나오고, 밑이 $1$ 보다 작은 쪽은 이항 뒤에도 반전이 한 번만 일어나게 한다.'
    creative: '(1) ⑶ 을 $2^{2x}-3\times2^{x}<0$ 처럼 계수를 붙여 치환이 필요하게 하면 ★2 (2) 지수를 이차식으로 바꾸면 이차부등식이 붙어 ★2 (3) 해가 공집합이 되는 계수 조건을 묻게 하면 역추적이 생겨 ★3.'
```

```yaml
- id: GN-ALG-84-194
  page: 84
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ 한쪽이 수인 지수부등식. $2^{-x+1}<16$ · $3^{3x-1}\le 9$ 처럼 수를 거듭제곱으로 고친 뒤 지수를 비교하며, ⑶⑷ 는 밑이 $\dfrac{1}{5}$·$\dfrac{1}{3}$ 이다.
  category: '수를 거듭제곱으로 고치기 → 지수 일차부등식'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수부등식 — 양변의 밑을 같게 고쳐 풀기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    84-192 와 같은 골조에 지수만 일차식으로 바뀐 자리다. 지수 비교 뒤 일차부등식을 한 번 더 푸는 것이 전부.
    밑이 $1$ 보다 작을 때 반전과 $-x$ 계수의 부호가 겹치는 것이 유일한 실수 지점(T-부호). 구역 ★1 · 통찰 0 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: '우변 수를 같은 밑의 거듭제곱으로 → 부등호 방향 결정 → 지수 일차부등식을 풀기'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $x>-3$ ⑵ $x\le 1$ ⑶ $x<-1$ ⑷ $x\ge 5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/84-194.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '지수의 일차식($-x+1$·$3x-1$·$x+3$·$x-2$)과 우변 수($16$·$9$·$\dfrac{1}{25}$·$\dfrac{1}{27}$)를 교체. 제약: 우변이 밑의 정수 거듭제곱이어야 하고, $x$ 계수가 음수인 항목을 하나 남겨 두 번의 부호 판단을 확인시킨다.'
    creative: '(1) 해에 포함되는 정수의 최솟값·최댓값을 묻기(★2) (2) 우변을 $8^{x}$ 처럼 다른 밑의 지수로 바꾸면 밑 통일이 추가돼 ★2 (3) 두 부등식을 연립시키면 교집합 단계가 붙어 ★2.'
```

```yaml
- id: GN-ALG-84-195
  page: 84
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    $4^{x}-5\times 2^{x}+4<0$ 의 해를 구하는 과정의 빈칸 채우기. $2^{x}=t\ (t>0)$ 치환 → $t$ 의 이차부등식 → $t$ 의 범위 → 다시 $x$ 의 범위 순서가 제시돼 있다.
  category: '$2^{x}=t$ 치환 → 이차부등식 → $t$ 범위를 $x$ 범위로 되돌리기'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "$a^{x}=t$ 치환으로 푸는 지수부등식(이차부등식 꼴)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    치환·인수분해·되돌리기 골조가 빈칸으로 전부 제시돼 학생은 각 칸을 채우기만 한다. 스스로 치환을 착안하는 부담이 없어 통찰 0.
    함정은 $t>0$ 을 잊지 않는 것(T-범위)이지만 이 문항에서는 해 $1<t<4$ 가 이미 양수라 실제로 걸리지 않는다. 구역 ★1 · M_total 5 → ★1. [분류 이슈] 골조 자체는 86-e20 급 ★2 이나 유도된 빈칸 형식이라 ★1 로 둠.
  tier: star_1
  mechanism_primary: '$2^{x}=t\ (t>0)$ 치환 → $t^{2}-5t+4<0$ 인수분해 → $1<t<4$ → $2^{0}<2^{x}<2^{2}$ 로 되돌려 $0<x<2$'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$t^{2}$, $t$, $1$, $4$, $1$, $4$, $0$, $2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/84-195.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '이차부등식의 두 근이 같은 밑의 거듭제곱이 되도록 계수를 잡는다($4^{x}-10\times2^{x}+16<0$ → $2<t<8$). 제약: 두 근이 모두 양수여야 $t>0$ 과 충돌하지 않고, 근이 $2$ 의 정수 거듭제곱이라야 $x$ 범위가 정수로 떨어진다.'
    creative: '(1) 빈칸을 없애고 그대로 풀게 하면 ★2(86-e20 골조) (2) 근 하나가 음수가 되게 계수를 잡아 $t>0$ 으로 기각시키면 I-VF 가 붙어 ★3 (3) 해를 만족시키는 정수 $x$ 의 개수를 묻게 하면 ★2.'
```

### 필수·발전 예제

```yaml
- id: GN-ALG-85-e19
  page: 85
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑶ 밑을 같게 할 수 있는 지수부등식. $\left(\dfrac{1}{32}\right)^{2x-1}$·$0.2^{3x-5}$·$27^{-x^{2}+x}$ 처럼 분수·소수·거듭제곱으로 위장된 밑을 하나로 통일해 푼다.
  category: '분수·소수 밑을 한 밑으로 통일 → 지수 일차·이차부등식'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "밑을 같게 할 수 있는 지수부등식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $\dfrac{1}{32}=2^{-5}$·$0.2=\dfrac{1}{5}$·$27=3^{3}$ 로 고치는 변환이 먼저 오고, 그 다음은 지수 비교다. ⑶ 은 비교 결과가 이차부등식 $3x^{2}-2x-1>0$ 이 되어 인수분해가 한 번 더 붙는다.
    밑이 $1$ 보다 작은 쪽에서 부등호를 반전시키는 것이 유일한 함정(T-부호). 필수 예제 구역 ★2 출발 · 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: '분수·소수·거듭제곱 밑을 한 밑으로 통일 → 밑의 크기로 부등호 방향 결정 → 지수끼리의 일차(또는 이차)부등식'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $x<-2$ ⑵ $x\ge 1$ ⑶ $x<-\dfrac{1}{3}$ 또는 $x>1$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/85-e19.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '위장된 밑($\dfrac{1}{32}$·$0.2$·$27$)과 지수 일차식의 계수를 교체. 제약: 양변이 한 밑의 정수(또는 간단한 유리수) 거듭제곱이어야 하고, ⑶ 형은 비교 후 이차식이 인수분해되도록 계수를 잡는다.'
    creative: '(1) 소수 밑을 $0.04$·$0.008$ 로 바꿔 밑 통일 단계를 늘리기(★2 유지) (2) ⑶ 의 이차부등식 해에 포함되는 정수 개수를 묻기(★3) (3) 지수에 미지수 $k$ 를 넣고 해가 모든 실수가 되는 $k$ 를 묻게 하면 역추적이 생겨 ★3.'
```

```yaml
- id: GN-ALG-85-196
  page: 85
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑷ 밑 통일 지수부등식 드릴. $3\sqrt{3}$·$2\sqrt{2}$ 같은 근호 밑과 $\dfrac{5}{4}$ 대 $\dfrac{4}{5}$ 처럼 역수 관계인 밑이 섞여 있고, ⑷ 는 지수가 이차식이다.
  category: '근호·역수 밑을 한 밑으로 통일 → 지수 일차·이차부등식'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "밑을 같게 할 수 있는 지수부등식 — 근호·분수 밑 통일"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $3\sqrt{3}=3^{\frac{3}{2}}$·$2\sqrt{2}=2^{\frac{3}{2}}$ 로 고치면 지수에 분수가 들어와 계산 부담이 한 단 올라간다($M_k=2$). ⑵ 는 $\dfrac{4}{5}=\left(\dfrac{5}{4}\right)^{-1}$ 로 보는 것이 핵심 변환.
    ⑷ 는 비교 결과가 $x^{2}+x-12\le0$ 이 되어 인수분해가 붙는다. 필수 예제 85-e19 의 미러 드릴이라 ★2 출발 · 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: '근호·역수 밑을 지수 법칙으로 한 밑에 모으기 → 부등호 방향 결정 → 지수끼리의 부등식'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $x\ge -\dfrac{6}{11}$ ⑵ $x<2$ ⑶ $x\ge -\dfrac{5}{21}$ ⑷ $-4\le x\le 3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/85-196.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '근호 밑($3\sqrt{3}$·$2\sqrt{2}$ → $5\sqrt{5}$·$\sqrt[3]{4}$)과 지수 일차식 계수를 교체. 제약: 분수 지수끼리의 비교라 최종 해가 지저분해지기 쉬우므로 분모가 작은 값이 나오게 계수를 조정하고, ⑷ 형은 이차식이 인수분해되게 한다.'
    creative: '(1) ⑵ 처럼 역수 밑을 쓰되 양변 모두 근호로 감싸기(★2) (2) ⑷ 의 해 구간에 속하는 정수 개수를 묻기(★3) (3) 지수의 이차식을 $x^{2}+ax$ 로 두고 해가 길이 $7$ 인 구간이 되는 $a$ 를 묻게 하면 역추적이 붙어 ★3.'
```

```yaml
- id: GN-ALG-85-197
  page: 85
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    이중 부등식 $\left(\dfrac{1}{2}\right)^{4x-3}<\left(\dfrac{1}{2}\right)^{x^{2}}<\left(\dfrac{1}{2}\right)^{x-1}$ 을 푼다. 밑이 $\dfrac{1}{2}$ 로 통일돼 있어 지수의 이중 부등식으로 옮긴다.
  category: '이중 지수부등식 → 부등호 반전 → 두 이차부등식의 교집합'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이중 지수부등식 — 부등호 방향 반전과 연립 이차부등식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    밑이 $\dfrac{1}{2}$ 이므로 양쪽 부등호가 동시에 반전돼 $4x-3>x^{2}>x-1$ 이 된다. 이를 두 이차부등식으로 나눠 풀고 교집합을 잡는다.
    오른쪽 $x^{2}-x+1>0$ 은 판별식이 음수라 모든 실수에서 성립하므로 답을 왼쪽이 결정한다. 반전 두 번(T-부호)이 함정. 구역 ★2 · 통찰 0(교집합은 표준 절차) · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: '밑 $\dfrac{1}{2}$ 로 통일된 이중 부등식 → 부등호 두 번 반전 → 이차부등식 두 개를 각각 풀어 교집합'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$1<x<3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/85-197.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '양끝 지수의 일차식($4x-3$·$x-1$)과 가운데 이차식을 교체. 제약: 두 이차부등식 중 적어도 하나는 인수분해되어야 하고, 한쪽이 항상 성립하거나 교집합이 공집합이 되지 않도록 판별식을 미리 확인한다.'
    creative: '(1) 밑을 $2$ 로 바꿔 반전이 없는 판을 만들면 같은 골조 ★2 (2) 양끝이 모두 유효한 이차부등식이 되게 해 교집합이 두 구간으로 쪼개지면 ★3 (3) 정수해의 개수를 묻게 하면 사후 필터가 생겨 ★3.'
```

```yaml
- id: GN-ALG-86-e20
  page: 86
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    부등식 $2\times 4^{x}-5\times 2^{x}+2\ge 0$ 을 푼다. $4^{x}=(2^{x})^{2}$ 임을 이용해 $2^{x}=t$ 로 치환하는 표준 예제.
  category: '$2^{x}=t\ (t>0)$ 치환 → 이차부등식 → $t$ 범위를 $x$ 범위로 되돌리기'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "$a^{x}$ 꼴이 반복되는 지수부등식 — 치환 후 이차부등식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $2t^{2}-5t+2\ge0$ 을 인수분해하면 $t\le\dfrac{1}{2}$ 또는 $t\ge2$ 가 나오고, 두 구간을 각각 $2^{x}$ 로 되돌린다.
    해가 두 갈래로 갈리므로 되돌리기를 두 번 해야 하는 것이 이 자리의 부담이고, $t>0$ 확인이 함정(T-범위). 단순 치환은 통찰로 세지 않는다. 필수 예제 ★2 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: '$2^{x}=t\ (t>0)$ 치환 → $2t^{2}-5t+2\ge0$ 인수분해 → $t\le\dfrac{1}{2}$ 또는 $t\ge2$ → 각각 $x$ 로 환원'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$x\le -1$ 또는 $x\ge 1$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/86-e20.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '이차식의 계수를 교체하되 두 근이 모두 양수이고 같은 밑의 거듭제곱이 되게 한다($3\times9^{x}-10\times3^{x}+3\ge0$ → $t\le\dfrac{1}{3}$ 또는 $t\ge3$). 제약: 근이 $0$ 이하이면 $t>0$ 에서 잘려 답 구조가 달라진다.'
    creative: '(1) 부등호를 뒤집어 해가 한 구간이 되게 하기(★2) (2) 한 근을 음수로 만들어 $t>0$ 으로 기각시키면 I-VF 가 붙어 ★3 (3) 계수에 문자를 넣고 해가 $x\le-1$ 또는 $x\ge2$ 가 되는 상수를 묻게 하면 86-199 골조 ★3.'
```

```yaml
- id: GN-ALG-86-198
  page: 86
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑶ 치환형 지수부등식 드릴. $4^{x}-3\times2^{x+1}+8<0$ · $9^{x}+3^{x+1}\le 3^{x+2}+27$ · 밑이 $\dfrac{1}{3}$ 인 꼴을 각각 치환해 푼다.
  category: '지수항을 $t$ 로 치환 → 이차부등식 인수분해 → $x$ 로 환원'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "$a^{x}$ 치환으로 정리되는 지수부등식 — 인수분해 후 $t>0$ 확인"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    치환 전에 $2^{x+1}=2\times2^{x}$·$3^{x+2}=9\times3^{x}$·$\left(\dfrac{1}{3}\right)^{x-2}=9t$ 처럼 지수 법칙으로 계수를 분리하는 정리가 먼저 필요하다($M_k=2$).
    ⑵⑶ 은 인수분해 후 한 인수가 $t>0$ 에서 항상 양수라 부등식이 한 구간으로 줄어드는데, 이 확인이 함정(T-범위). 확인체크지만 86-e20 미러라 ★2 출발 · 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: '지수 법칙으로 $a^{x+k}=a^{k}a^{x}$ 분리 → $a^{x}=t\ (t>0)$ 치환 → 이차부등식 인수분해 → $t>0$ 확인 후 $x$ 환원'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $1<x<2$ ⑵ $x\le 2$ ⑶ $x<-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/86-198.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '상수항과 $a^{x+k}$ 의 자리 이동 폭($x+1$·$x+2$·$x-2$)을 교체. 제약: 치환 후 이차식이 인수분해되고 양의 근이 밑의 정수 거듭제곱이어야 하며, 음의 근은 $t>0$ 으로 잘려 나가도록 배치한다.'
    creative: '(1) 세 항 모두 지수로 두고 상수항을 없애기(★2) (2) 두 근이 모두 양수가 되게 해 해가 두 구간으로 갈리면 ★2~3 (3) 부등식과 방정식을 묶어 해집합의 교집합을 묻게 하면 89-205 골조 ★2.'
```

```yaml
- id: GN-ALG-86-199
  page: 86
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    부등식 $4^{x}+a\times 2^{x}+b>0$ 의 해가 $x<-1$ 또는 $x>2$ 일 때 상수 $a$, $b$ 의 값을 구한다. 해가 먼저 주어진 역추적형.
  category: '해집합을 $t=2^{x}$ 의 범위로 옮기기 → 이차부등식 역구성 → 근과 계수의 관계'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$x<-1$ 또는 $x>2$ 라는 해집합을 지수함수의 증가성을 이용해 $t<\\dfrac{1}{2}$ 또는 $t>4$ 로 동치 변환"
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "그 해집합을 갖는 이차부등식 $t^{2}+at+b>0$ 을 역으로 세워 두 근 $\\dfrac{1}{2}$, $4$ 에 근과 계수의 관계를 적용"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "해가 주어진 지수부등식에서 미정계수 구하기(치환 후 이차부등식 역구성)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    앞의 문항들과 방향이 반대다. 해를 구하는 것이 아니라 해를 보고 계수를 만든다. 먼저 $x$ 의 해집합을 $t=2^{x}$ 의 해집합으로 옮기는 동치 변환이 필요하고(지수함수가 증가라서 부등호가 그대로 옮겨진다), 그 다음 두 근을 가진 이차부등식을 역으로 세운다.
    확인체크 태그지만 통찰 2개(EQV·BW)가 붙어 구역 출발점 ★2 에서 +1 → ★3. [분류 이슈] 확인체크를 ★1 출발로 보는 일반 규칙과는 2단 차이.
  tier: star_3
  mechanism_primary: '$x$ 의 해집합 → $t=2^{x}$ 의 해집합($t<\dfrac{1}{2}$ 또는 $t>4$) → 두 근을 갖는 이차부등식 역구성 → 근과 계수의 관계로 $a$, $b$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$a=-\dfrac{9}{2}$, $b=2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/86-199.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '주어진 해의 경계($-1$ 과 $2$)와 밑을 교체. 제약: 경계를 $t$ 로 옮긴 값이 이차부등식의 두 근이 되므로 둘 다 양수여야 하고, $a$·$b$ 가 지나치게 지저분한 분수가 되지 않도록 경계 간격을 작게 잡는다.'
    creative: '(1) 해를 $-1<x<2$ 한 구간으로 주어 부등호를 뒤집기(★3 유지) (2) $a$ 만 주고 $b$ 의 범위를 묻게 하면 조건이 부등식이 되어 ★4 (3) $6^{x}$ 와 $6^{1-x}$ 처럼 역수항을 섞으면 90-210 골조 ★4.'
```

```yaml
- id: GN-ALG-87-e21
  page: 87
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    $x>0$ 일 때 부등식 $x^{3x+1}>x^{x+5}$ 을 푼다. 밑 자리에 미지수가 있어 밑이 $1$ 보다 큰지 작은지로 경우를 나눠야 하는 예제.
  category: '밑 $x$ 의 범위로 경우 나누기 → 각 경우에서 지수 비교 → 케이스 조건과 교집합'
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "밑 $x$ 가 $0<x<1$ · $x=1$ · $x>1$ 셋 중 어디냐에 따라 부등호 방향과 성립 여부가 달라져 세 경우를 모두 따져야 함"
    - step: 2
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "각 경우에서 얻은 지수 부등식의 해를 그 경우의 밑 조건과 교집합해 $x=1$ 처럼 성립하지 않는 경우를 기각"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "밑에 미지수가 있는 지수부등식 — 밑이 1보다 큰지 작은지로 경우 나누기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    지금까지는 밑이 상수라 부등호 방향이 고정이었는데 여기서는 밑이 미지수라 방향 자체가 경우에 따라 갈린다. $x>1$ 이면 그대로, $0<x<1$ 이면 반전, $x=1$ 은 양변이 같아 따로 확인해야 한다.
    각 경우의 결과를 그 경우의 범위와 교집합해야 하고, 밑이 $1$ 인 경우를 빠뜨리면 답의 경계가 틀린다(T-경계·T-범위로 $M_t=2$). 필수 예제 ★2 출발 + 통찰 2 → ★3.
  tier: star_3
  mechanism_primary: '$0<x<1$ · $x=1$ · $x>1$ 로 경우 나누기 → 각 경우 지수 비교(밑 $<1$ 이면 반전) → 각 해를 케이스 범위와 교집합해 합집합'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$0<x<1$ 또는 $x>2$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/87-e21.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 지수 일차식($3x+1$ 과 $x+5$)의 계수를 교체. 제약: 두 지수가 같아지는 $x$ 값이 $1$ 보다 커야 $x>1$ 쪽에서 의미 있는 경계가 생기고, $0<x<1$ 쪽 해가 구간 전체가 되거나 공집합이 되는지 미리 확인한다.'
    creative: '(1) 밑을 $x+1$·$x-2$ 처럼 일차식으로 바꿔 밑 조건 자체를 세우게 하기(★3 유지 · 87-200 ⑵ 골조) (2) 지수를 이차식으로 바꾸면 각 경우가 이차부등식이 되어 ★4 (3) 정수해의 개수·최솟값을 묻게 하면 사후 필터가 강해져 ★3~4(87-201·89-207 골조).'
```

```yaml
- id: GN-ALG-87-200
  page: 87
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴ $x>0$ 에서 $x^{x+1}\le x^{5}$ · ⑵ $x>-1$ 에서 $(x+1)^{-2x-3}<(x+1)^{5}$ 을 푼다. 밑이 미지수(또는 미지수 일차식)인 부등식 드릴.
  category: '밑의 범위로 경우 나누기 → 지수 비교 → 케이스 조건과 교집합'
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "밑이 $1$ 보다 큰 경우·같은 경우·작은 경우로 갈려 세 시나리오를 각각 풀어야 함(⑵ 는 밑이 $x+1$ 이라 경계가 $x=0$ 으로 옮겨짐)"
    - step: 2
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "밑이 $1$ 인 경우를 대입해 ⑴ 은 성립(해에 포함)·⑵ 는 불성립(기각)으로 갈라지는 것을 확인해야 답의 경계가 맞음"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "밑에 미지수가 있는 지수부등식 — 밑이 1보다 큰지 작은지로 경우 나누기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    87-e21 의 미러 드릴인데 두 소문항에서 밑 $=1$ 의 처리가 서로 반대로 갈린다. ⑴ 은 $x=1$ 에서 양변이 $1$ 로 같아 $\le$ 가 성립하므로 해에 포함되고, ⑵ 는 $<$ 라 불성립으로 기각된다.
    이 확인을 빠뜨리면 ⑴ 의 왼쪽 경계가 통째로 틀린다(T-경계). ⑵ 는 밑이 $x+1$ 이라 경계가 $x=0$ 으로 옮겨진 것도 함정. 확인체크지만 ★2 출발 + 통찰 2 → ★3. [분류 이슈] 태그 기준과 2단 차이.
  tier: star_3
  mechanism_primary: '밑을 기준으로 $($밑$>1)$ · $($밑$=1)$ · $(0<$밑$<1)$ 세 경우로 나누기 → 각 경우 지수 비교 → 케이스 범위와 교집합해 합치기'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ $1\le x\le 4$ ⑵ $x>0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/87-200.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '지수 일차식의 계수와 부등호의 등호 유무를 교체. 제약: 밑 $=1$ 인 점이 해에 들어가는지 여부가 등호에 따라 달라지므로 두 소문항이 서로 다른 결과를 내도록 배치하고, 밑이 일차식이면 정의 조건(밑 $>0$)을 발문에 명시한다.'
    creative: '(1) 밑을 $x-2$ 로 바꿔 정의 조건 $x>2$ 를 학생이 세우게 하기(★3) (2) 지수 쪽을 이차식으로 바꾸면 각 경우가 이차부등식이 되어 ★4 (3) 해에 포함되는 정수의 개수를 묻게 하면 89-207 골조 ★3.'
```

```yaml
- id: GN-ALG-87-201
  page: 87
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $x>0$ 일 때 부등식 $x^{2x-5}>x^{9}$ 을 만족시키는 정수 $x$ 의 최솟값을 구한다.
  category: '밑의 범위로 경우 나누기 → 지수 비교 → 각 구간에서 정수 후보를 걸러 최솟값'
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "밑 $x$ 가 $1$ 보다 큰 경우와 작은 경우로 부등호 방향이 갈려 두 해 구간을 모두 구해야 함"
    - step: 2
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "$0<x<1$ 쪽 구간에는 정수가 하나도 없음을 확인해 기각해야 최솟값이 나오고, $x=1$ 도 대입해 불성립으로 걸러야 함"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "밑에 미지수가 있는 지수부등식 — 정수해 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    87-e21 골조 위에 「정수 $x$ 의 최솟값」이라는 사후 필터가 얹혔다. 경우를 나눠 해 구간을 얻은 뒤 각 구간에서 정수를 세어야 하는데, $0<x<1$ 구간은 해가 나와도 정수가 없어 답에 기여하지 못한다.
    부등호가 $>$ 라 경계 정수가 포함되지 않는 점(T-경계)도 답을 한 칸 밀어낸다. 확인체크지만 ★2 출발 + 통찰 2 → ★3. [분류 이슈] 태그 기준과 2단 차이.
  tier: star_3
  mechanism_primary: '밑 $x$ 의 범위로 경우 나누기 → 각 경우 지수 비교로 해 구간 → 정수 후보를 걸러 최솟값'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/87-201.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 지수($2x-5$ 와 $9$)의 계수·상수를 교체. 제약: 두 지수가 같아지는 경계가 정수이면 부등호가 등호를 포함하는지에 따라 답이 한 칸 달라지므로 경계와 등호를 짝지어 결정한다.'
    creative: '(1) 최댓값을 묻도록 부등호를 뒤집기(★3) (2) 정수 $x$ 의 개수를 묻게 하면 두 구간을 모두 세야 해 ★3(89-207) (3) 지수에 문자 $k$ 를 넣고 정수해가 정확히 $n$ 개가 되는 $k$ 를 묻게 하면 ★4(89-209 골조).'
```

```yaml
- id: GN-ALG-88-e22
  page: 88
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    모든 실수 $x$ 에 대하여 $2^{2x}-3\times 2^{x+2}+2k>0$ 이 성립하도록 하는 실수 $k$ 의 값의 범위를 구한다.
  category: '치환 → 「모든 $t>0$ 에서 성립」으로 옮기기 → 꼭짓점(최솟값) 조건'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「모든 실수 $x$ 에서 성립」을 $t=2^{x}$ 의 치환 뒤 「모든 $t>0$ 에서 $f(t)>0$」으로 동치 변환하고, 축 $t=6$ 이 그 범위 안에 있음을 확인해 최솟값 조건을 세움"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "지수부등식이 항상 성립할 조건 — 치환 후 $t>0$ 에서의 최솟값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    치환하면 $f(t)=t^{2}-12t+2k$ 이고 조건은 「모든 실수 $t$」가 아니라 「모든 $t>0$」이다. 축이 $t=6$ 으로 범위 안이라 꼭짓점의 값이 최솟값이 되고 $2k>36$ 이 나온다.
    이 문항은 축이 범위 안이라 판별식 조건으로 풀어도 같은 답이 나오지만, 축 위치를 확인하지 않으면 88-202 ⑵ 같은 자리에서 그대로 틀린다. 필수 예제 ★2 출발 + 통찰 1 + M_total 8 → ★3. [분류 이슈] 판별식만 써도 답이 맞아 통찰 라벨 유지 여부는 카탈로그 설계 때 재검토.
  tier: star_3
  mechanism_primary: '$2^{x}=t\ (t>0)$ 치환 → $f(t)=t^{2}-12t+2k$ → 축 $t=6>0$ 확인 → 최솟값 $f(6)>0$ 으로 $k$ 범위'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$k>18$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/88-e22.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '일차항의 계수($-3\times2^{x+2}$)와 상수항의 문자 배치를 교체. 제약: 축의 위치 $t=\dfrac{-(\text{일차항 계수})}{2}$ 가 양수인지 음수인지에 따라 풀이 골조가 바뀌므로, 같은 유형을 유지하려면 축이 양수가 되게 계수 부호를 잡는다.'
    creative: '(1) 일차항 부호를 바꿔 축을 음수로 보내면 경계 $t\to0^{+}$ 처리가 필요해 ★3~4(88-202 ⑵) (2) 「모든 실수」를 「$x\ge0$ 인 실수」로 좁히면 $t\ge1$ 이 되어 ★3(90-212) (3) $k$ 에 이차식을 넣어 $k$ 에 대한 부등식이 한 번 더 생기게 하면 ★4.'
```

```yaml
- id: GN-ALG-88-e23
  page: 88
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    필름 $1$ 장을 통과할 때마다 전자파 세기가 $75\,\%$ 씩 감소할 때, 세기를 처음의 $\dfrac{1}{1024}$ 이하로 줄이는 데 필요한 최소 필름 수를 구한다.
  category: '감소율을 잔존 비율로 바꾸기 → 지수부등식 → 최소 자연수'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「$75\\,\\%$ 씩 감소」를 「남는 세기가 매번 $\\dfrac{1}{4}$ 배」라는 잔존 비율로 동치 변환해야 $\\left(\\dfrac{1}{4}\\right)^{n}$ 모델이 세워짐"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "지수부등식의 실생활 활용 — 일정 비율 감소와 최소 횟수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    수식을 세우고 나면 $\left(\dfrac{1}{4}\right)^{n}\le\dfrac{1}{1024}$ 로 밑 통일 한 번에 끝난다. 난점은 전부 모델링 쪽에 있다 — 감소율 $75\,\%$ 를 그대로 곱하거나 $\dfrac{3}{4}$ 로 착각하면 식부터 틀린다.
    「최소 몇 장」이라 부등식의 경계 자연수를 고르는 마무리(T-경계)가 붙는다. 필수 예제 ★2 출발 · 통찰 1 · M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: '감소율 $75\,\%$ → 잔존 비율 $\dfrac{1}{4}$ 배 → $\left(\dfrac{1}{4}\right)^{n}\le\dfrac{1}{1024}$ → 밑 통일해 $n$ 의 최소 자연수'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$5$장'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/88-e23.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '감소율($75\,\%$ → $50\,\%$·$80\,\%$)과 목표 비율($\dfrac{1}{1024}$ → $\dfrac{1}{243}$·$\dfrac{1}{10^{6}}$)을 교체. 제약: 잔존 비율과 목표 비율의 밑이 통일돼야 로그 없이 풀리므로 $\dfrac{1}{2}$·$\dfrac{1}{4}$·$\dfrac{1}{5}$ 계열로 짝을 맞춘다.'
    creative: '(1) 증가 상황(매년 $2$ 배)으로 뒤집어 목표 이상이 되는 최소 기간을 묻기(★2 · 90-214 골조) (2) 두 종류의 필름을 섞어 합으로 조건을 주면 치환이 붙어 ★3 (3) 감소율 자체를 미지수로 두고 조건을 만족시키는 최소 감소율을 묻게 하면 역추적이 생겨 ★4.'
```

```yaml
- id: GN-ALG-88-202
  page: 88
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴ $25^{x}-2\times 5^{x+1}+k-2\ge 0$ · ⑵ $\left(\dfrac{1}{3}\right)^{2x}+2\times\left(\dfrac{1}{3}\right)^{x-1}+k+1>0$ 이 모든 실수 $x$ 에서 성립하도록 하는 $k$ 의 범위를 구한다.
  category: '치환 → 「모든 $t>0$ 에서 성립」 → 축의 위치로 최솟값 자리 결정'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「모든 실수 $x$」를 치환 뒤 「모든 $t>0$」으로 옮기는 동치 변환(정의역이 실수 전체가 아니라 양수로 제한됨)"
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "축이 $t>0$ 안에 있는 경우(⑴ 축 $t=5$ → 꼭짓점이 최솟값)와 밖에 있는 경우(⑵ 축 $t=-3$ → $t>0$ 에서 증가하므로 경계 $t\\to0^{+}$ 의 값으로 판정)가 갈려 두 시나리오를 구분해야 함"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "지수부등식이 항상 성립할 조건 — 축의 위치에 따른 최솟값 판정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    88-e22 의 미러 드릴이지만 ⑵ 에서 축이 $t=-3$ 으로 범위 밖으로 나간다. 이때 $t>0$ 에서 함수가 증가하므로 꼭짓점이 아니라 경계 $t\to0^{+}$ 의 값 $k+1$ 로 판정해야 하고, 판별식으로 풀면 틀린다.
    ⑴ 과 ⑵ 가 서로 다른 시나리오를 요구하는 것이 이 문항의 핵심(T-범위·T-경계로 $M_t=2$). 확인체크지만 ★2 출발 + 통찰 2 → ★3. [분류 이슈] 태그 기준과 2단 차이.
  tier: star_3
  mechanism_primary: '$a^{x}=t\ (t>0)$ 치환 → 이차함수의 축이 $t>0$ 안인지 밖인지 판정 → 안이면 꼭짓점, 밖이면 경계 $t\to0^{+}$ 의 값으로 $k$ 범위'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ $k\ge 27$ ⑵ $k\ge -1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/88-202.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '일차항 계수의 부호와 크기를 교체해 축을 양수/음수로 배치. 제약: 축이 양수면 꼭짓점 조건, 음수면 경계 조건이라 답의 형태가 달라지므로 두 소문항이 서로 다른 경우를 담도록 짝을 맞추고, 등호 포함 여부는 경계가 개구간임을 반영해 결정한다.'
    creative: '(1) 축의 부호가 $k$ 에 따라 달라지게 계수에 $k$ 를 넣으면 경우 분기가 하나 더 생겨 ★4(90-213 골조) (2) 정의역을 $x\ge0$ 으로 좁혀 $t\ge1$ 로 만들기(★3 · 90-212) (3) 성립하지 않을 조건(여집합)을 묻게 하면 부정 서술이 추가돼 ★4.'
```

```yaml
- id: GN-ALG-88-203
  page: 88
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $A=A_{0}k^{t}$ 모델에서 $4000$ 만 원짜리 자동차의 $1$ 년 후 가격이 $2000$ 만 원일 때, 가격이 $250$ 만 원 이하가 되는 최소 연수 $m$ 을 구한다.
  category: '주어진 값으로 모델 상수 $k$ 결정 → 지수부등식 → 최소 자연수'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수부등식의 실생활 활용 — 관계식의 상수 결정 후 최소 기간"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    관계식이 발문에 그대로 주어져 있어 모델링 부담이 없다. $1$ 년 후 값을 대입해 $k=\dfrac{1}{2}$ 를 얻고, $4000\left(\dfrac{1}{2}\right)^{m}\le250$ 을 밑 통일로 푸는 두 단계다.
    문자 $A_{0}$·$k$·$t$ 가 섞여 있어 표현 추상도만 한 단 올라간다($M_a=2$). 확인체크 · 통찰 0 · M_total 6 → 구역 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: '$2000=4000k$ 로 $k=\dfrac{1}{2}$ → $4000\left(\dfrac{1}{2}\right)^{m}\le250$ → $\left(\dfrac{1}{2}\right)^{m}\le\left(\dfrac{1}{2}\right)^{4}$ → 최소 자연수 $m$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/88-203.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '초기 가격·$1$ 년 후 가격·목표 가격을 교체. 제약: 비율 $k$ 가 $\dfrac{1}{2}$·$\dfrac{1}{3}$ 처럼 간단해야 하고 목표 가격이 초기 가격의 그 거듭제곱 배여야 로그 없이 정수 답이 나온다.'
    creative: '(1) $2$ 년 후 값을 주어 $k^{2}$ 에서 $k$ 를 구하게 하면 제곱근 처리가 붙어 ★3 (2) 목표를 「처음의 $\dfrac{1}{10}$ 이하」로 두면 밑이 안 맞아 로그 단원으로 넘어감 (3) 두 자동차의 가격이 역전되는 시점을 묻게 하면 부등식이 두 지수의 비교가 되어 ★3.'
```

### 연습문제 STEP 1

```yaml
- id: GN-ALG-89-204
  page: 89
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    부등식 $4^{x^{2}}\le\left(\dfrac{1}{\sqrt{2}}\right)^{8x}$ 을 만족시키는 $x$ 의 최댓값 $M$ 과 최솟값 $m$ 에 대하여 $M+m$ 의 값을 구한다.
  category: '근호·분수 밑을 $2$ 로 통일 → 지수 이차부등식 → 해 구간의 양 끝'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "밑을 같게 할 수 있는 지수부등식 — 해 구간의 최대·최소"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $4^{x^{2}}=2^{2x^{2}}$ · $\left(\dfrac{1}{\sqrt{2}}\right)^{8x}=2^{-4x}$ 로 고치면 $2x^{2}\le-4x$ 가 되고, 해가 닫힌 구간이라 양 끝이 곧 $M$ 과 $m$ 이다.
    통찰 0 · M_total 5 로 하향 후보지만, 근호와 음수 지수를 동시에 정리해야 해서 개념원리 익히기 드릴보다 한 단 위다. STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: '양변을 밑 $2$ 로 통일 → $2x^{2}\le-4x$ → $-2\le x\le0$ → 구간의 양 끝을 더하기'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/89-204.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑($4$·$\dfrac{1}{\sqrt{2}}$)과 지수의 계수($8x$)를 교체. 제약: 통일 후 이차부등식이 인수분해되어 닫힌 구간 해가 나와야 하고(최댓값·최솟값이 존재해야 함), 두 끝이 정수가 되게 계수를 잡는다.'
    creative: '(1) $M-m$ 이나 $Mm$ 을 묻기(★2 유지) (2) 해 구간에 속하는 정수의 개수를 묻기(★2) (3) 지수에 문자를 넣어 구간의 길이가 주어진 값이 되는 상수를 묻게 하면 역추적이 생겨 ★3.'
```

```yaml
- id: GN-ALG-89-205
  page: 89
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    지수방정식의 해집합 $A=\{x\,|\,3^{2x+2}-82\times 3^{x}+9=0\}$ 과 지수부등식의 해집합 $B$ 에 대하여 $A\cap B$ 의 모든 원소의 합을 구한다.
  category: '두 집합을 각각 치환해 풀기 → 교집합 → 원소의 합'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수방정식·지수부등식의 해집합과 교집합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $A$ 는 $3^{x}=t$ 치환 후 $9t^{2}-82t+9=0$ 의 두 근에서 $x=-2,\ 2$ 를, $B$ 는 $\left(\dfrac{1}{2}\right)^{x}=s$ 치환 후 $s>2$ 에서 $x<-1$ 을 준다. 교집합은 원소가 하나뿐.
    치환을 두 번 하지만 각각은 표준 골조이고 교집합은 단순 비교라 통찰로 세지 않았다. STEP 1 ★2 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: '$A$: $3^{x}=t$ 치환 → 이차방정식 두 근 → $x$ 두 값 / $B$: $\left(\dfrac{1}{2}\right)^{x}=s$ 치환 → 이차부등식 → $x$ 범위 / 둘의 교집합 원소 합'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/89-205.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '방정식의 계수($82$)와 부등식의 우변($8$)을 교체. 제약: 방정식의 두 근이 모두 밑의 정수 거듭제곱이어야 $A$ 의 원소가 정수로 떨어지고, 교집합이 공집합이 되지 않도록 $B$ 의 경계를 $A$ 의 원소 사이에 둔다.'
    creative: '(1) $A\cup B$ 나 $A-B$ 를 묻기(★2) (2) $B$ 의 우변에 문자를 넣고 $A\cap B$ 의 원소가 하나가 되는 범위를 묻게 하면 역추적이 붙어 ★3 (3) 두 부등식의 교집합으로 바꾸면 89-206 골조 ★2.'
```

```yaml
- id: GN-ALG-89-206
  page: 89
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    이중 부등식 $48\le 3^{2x}+21\le 4\times 3^{x+1}-6$ 의 해를 구한다.
  category: '치환 → 이중 부등식을 둘로 분리 → 두 이차부등식의 교집합'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이중 지수부등식 — 치환 후 두 이차부등식의 교집합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $3^{x}=t$ 로 치환하면 왼쪽은 $t^{2}\ge27$, 오른쪽은 $t^{2}-12t+27\le0$ 이 된다. 왼쪽 경계가 $t\ge3\sqrt{3}=3^{\frac{3}{2}}$ 이라 되돌릴 때 유리수 지수가 나오는 것이 계산상 걸림돌.
    두 해를 $x$ 로 되돌려 교집합을 잡으면 끝난다. 분리·교집합은 표준 절차라 통찰 0. STEP 1 ★2 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: '$3^{x}=t\ (t>0)$ 치환 → 이중 부등식을 두 이차부등식으로 분리 → 각각의 $t$ 범위를 $x$ 로 환원 → 교집합'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{3}{2}\le x\le 2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/89-206.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '양끝 상수($48$·$-6$)와 가운데 계수를 교체. 제약: 오른쪽 이차부등식이 인수분해되고 두 근이 밑의 거듭제곱이어야 하며, 왼쪽에서 나오는 경계가 유리수 지수로 깔끔하게 떨어지도록 상수를 고른다.'
    creative: '(1) 왼쪽 경계도 정수 지수가 되게 해 답이 정수 구간이 되게 하기(★2) (2) 해에 속하는 정수의 개수를 묻기(★2) (3) 양끝 중 하나에 문자를 넣고 해가 한 점이 되는 값을 묻게 하면 ★4.'
```

```yaml
- id: GN-ALG-89-207
  page: 89
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $x>0$ 일 때 부등식 $x^{2x+5}\ge x^{3x-2}$ 을 만족시키는 정수 $x$ 의 개수를 구한다.
  category: '밑의 범위로 경우 나누기 → 지수 비교 → 각 구간의 정수를 세기'
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '밑 $x$ 가 $1$ 보다 큰 경우와 작은 경우로 부등호 방향이 갈려 두 시나리오의 해를 모두 구해야 함'
    - step: 2
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '$x=1$ 은 양변이 $1$ 로 같아 등호로 성립하므로 개수에 포함해야 하고, $0<x<1$ 쪽은 해가 없거나 정수가 없어 기각됨'
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "밑에 미지수가 있는 지수부등식 — 정수해의 개수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $x>1$ 에서는 $2x+5\ge3x-2$ 로 $1<x\le7$ 이 되어 정수 $2$ 부터 $7$ 까지 $6$ 개, 여기에 $x=1$ 을 더해야 답이 맞는다.
    등호가 있는 부등식이라 밑 $=1$ 이 해에 포함되는 것이 개수를 하나 가르는 지점(T-경계). STEP 1 ★2 출발 + 통찰 2 → ★3.
  tier: star_3
  mechanism_primary: '밑 $x$ 의 범위로 경우 나누기 → 각 경우 지수 비교 → $x=1$ 포함 여부 확인 → 정수 개수'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/89-207.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 지수 일차식($2x+5$·$3x-2$)의 계수를 교체. 제약: 두 지수가 같아지는 값이 자연수여야 개수가 깔끔하고, 등호 유무에 따라 $x=1$ 과 경계값의 포함 여부가 뒤집히므로 부등호를 함께 결정한다.'
    creative: '(1) 부등호를 $>$ 로 바꿔 $x=1$ 을 기각시키기(★3 유지 · 답만 하나 줄어듦) (2) 정수 대신 자연수의 합을 묻기(★3) (3) 지수에 문자 $k$ 를 넣고 정수해가 정확히 $n$ 개가 되는 $k$ 를 묻게 하면 ★4(89-209 골조).'
```

```yaml
- id: GN-ALG-89-208
  page: 89
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    모든 실수 $x$ 에 대하여 $\left(\dfrac{1}{5}\right)^{x^{2}+2x}\le 25^{x+k}$ 이 성립하도록 하는 실수 $k$ 의 최솟값을 구한다.
  category: '밑 통일 → 지수 이차부등식 → 항상 성립할 조건(판별식)'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "모든 실수에서 성립하는 지수부등식 — 지수 비교 후 판별식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    양변을 밑 $5$ 로 통일하면 지수 비교만으로 $x^{2}+4x+2k\ge0$ 이 되고, 치환이 필요 없어 「모든 실수에서 성립」이 그대로 판별식 조건으로 이어진다.
    88-e22 계열과 달리 $t>0$ 제한이 끼어들지 않아 통찰 라벨이 붙지 않는다. 밑이 $\dfrac{1}{5}$ 라 부등호가 한 번 반전되는 것이 함정. STEP 1 ★2 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: '양변을 밑 $5$ 로 통일 → 부등호 반전 후 지수 비교 → $x^{2}+4x+2k\ge0$ 이 항상 성립 → 판별식 $\le0$ 으로 $k$ 최솟값'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/89-208.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '지수의 이차식($x^{2}+2x$)과 우변 밑($25$)·일차식을 교체. 제약: 통일 후 남는 이차식의 판별식이 $k$ 에 대한 일차식이어야 최솟값이 한 값으로 떨어지고, 최고차항 계수가 양수가 되도록 부등호 방향을 확인한다.'
    creative: '(1) 부등호를 뒤집어 $k$ 의 최댓값을 묻기(★2) (2) 우변을 $25^{x}+k$ 처럼 더하기로 바꾸면 치환이 필요해 ★3(88-202 골조) (3) 「모든 실수」를 「$x\ge1$ 인 실수」로 좁히면 범위 제한 통찰이 붙어 ★3.'
```

### 연습문제 STEP 2

```yaml
- id: GN-ALG-89-209
  page: 89
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    부등식 $\left(\dfrac{1}{4}\right)^{x^{2}}>(\sqrt{2})^{kx}$ 을 만족시키는 정수 $x$ 의 개수가 $3$ 일 때, 자연수 $k$ 의 최댓값 $M$ 과 최솟값 $m$ 에 대하여 $M+m$ 의 값을 구한다.
  category: '밑 통일 → $x(4x+k)<0$ 꼴 해 구간 → 정수 개수 조건으로 $k$ 역추적'
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '「정수해가 $3$ 개」라는 결과 조건에서 해 구간의 왼쪽 끝 $-\dfrac{k}{4}$ 가 놓여야 할 위치를 역으로 추적해 $k$ 의 범위를 세움'
    - step: 2
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '경계 $k=12$ 와 $k=16$ 을 각각 대입해 구간이 열린 구간임을 반영한 포함·기각을 확인해야 $M$ 과 $m$ 이 정확해짐'
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "정수해의 개수 조건으로 미지수 범위 구하기(지수부등식)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    밑을 $2$ 로 통일하면 $-2x^{2}>\dfrac{k}{2}x$, 정리하면 $x(4x+k)<0$ 이라 $k>0$ 에서 해는 $-\dfrac{k}{4}<x<0$ 이다. 여기까지는 절차지만 그 다음이 역방향이다.
    이 열린 구간에 정수가 $-1,-2,-3$ 세 개만 들어가도록 $-\dfrac{k}{4}$ 의 위치를 잡아야 하고, 양 끝 $k=12$·$k=16$ 의 포함 여부를 따로 확인해야 자연수 $k$ 의 최댓값·최솟값이 정해진다. STEP 2 ★3 출발 + 통찰 2(BW·VF) → ★4.
  tier: star_4
  mechanism_primary: '밑 $2$ 로 통일 → $x(4x+k)<0$ → 해 구간 $-\dfrac{k}{4}<x<0$ → 정수 $3$ 개 조건으로 $12<k\le16$ → 경계 검증 후 $M+m$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$29$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/89-209.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '정수해의 개수($3$)와 밑($\dfrac{1}{4}$·$\sqrt{2}$)을 교체. 제약: 개수를 $n$ 으로 바꾸면 $k$ 의 범위 경계가 $4n$ 과 $4(n+1)$ 로 옮겨가고, 구간이 열린 구간이라 한쪽 끝만 등호를 갖는 비대칭 조건이 되므로 답을 정할 때 이 비대칭을 유지한다.'
    creative: '(1) $k$ 를 정수로 넓혀 음수 $k$ 까지 허용하면 해 구간이 양수 쪽으로 뒤집혀 경우 분기가 생겨 ★4~5 (2) 정수해의 합이 주어진 값이 되는 조건으로 바꾸기(★4) (3) 개수 조건을 부등식(「$3$ 개 이하」)으로 주면 범위가 구간이 되어 ★4.'
```

```yaml
- id: GN-ALG-90-210
  page: 90
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    부등식 $a\times 6^{x}+6^{1-x}-b\le 0$ 의 해가 $-1\le x\le 1$ 일 때, 상수 $a$, $b$ 에 대하여 $a+b$ 의 값을 구한다.
  category: '치환·양변에 $t$ 곱하기 → 해 구간을 $t$ 구간으로 → 근과 계수의 관계로 역산'
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$6^{1-x}=\dfrac{6}{t}$ 로 보고 $t>0$ 을 곱해 부등호 방향을 유지한 채 이차부등식 $at^{2}-bt+6\le0$ 으로 동치 변환'
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '해 $-1\le x\le1$ 을 $\dfrac{1}{6}\le t\le6$ 으로 옮긴 뒤, 그 두 값을 근으로 갖는 이차부등식을 역으로 세워 근과 계수의 관계로 $a$, $b$ 를 결정'
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "해가 주어진 지수부등식에서 미정계수 구하기 — 치환 후 근과 계수의 관계"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    86-199 와 같은 역추적 골조지만 두 가지가 더 얹혔다. $6^{1-x}$ 를 $\dfrac{6}{t}$ 로 바꾸면 분모가 생겨 $t>0$ 을 곱해 정리해야 하고(이때 부등호가 유지되는 근거가 $t>0$ 이다), 해가 닫힌 구간이라 이차항 계수 $a$ 의 부호까지 양수로 확정해야 한다.
    해 구간을 $t$ 구간으로 옮길 때 $6^{-1}=\dfrac{1}{6}$ 과 $6^{1}=6$ 이 그대로 두 근이 된다. STEP 2 ★3 출발 + 통찰 2(EQV·BW) + M_total 9 → ★4.
  tier: star_4
  mechanism_primary: '$6^{x}=t\ (t>0)$ 치환 → 양변에 $t$ 를 곱해 $at^{2}-bt+6\le0$ → 해 구간을 $\dfrac{1}{6}\le t\le6$ 으로 환원 → 근과 계수의 관계로 $a$, $b$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$43$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/90-210.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑($6$)과 해 구간의 양 끝($-1$·$1$)·상수항을 교체. 제약: 두 끝을 지수로 옮긴 값이 이차부등식의 두 근이므로 모두 양수여야 하고, 근의 곱이 상수항을 $a$ 로 나눈 값과 맞아떨어지도록 상수항을 고른다.'
    creative: '(1) 해를 $x\le-1$ 또는 $x\ge1$ 로 주어 이차항 계수를 음수로 만들기(★4 유지) (2) $a$ 만 주고 $b$ 의 범위를 묻게 하면 조건이 부등식이 되어 ★4~5 (3) 역수항을 없애고 $a\times4^{x}+b\times2^{x}$ 꼴로 두면 86-199 급 ★3 으로 내려감.'
```

```yaml
- id: GN-ALG-90-211
  page: 90
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    모든 실수 $x$ 에 대하여 $x^{2}-(2^{k+1}-4)x+2^{k}>0$ 이 성립하도록 하는 실수 $k$ 의 값의 범위를 구한다.
  category: '이차부등식이 항상 성립할 조건(판별식) → $2^{k}$ 에 대한 이차부등식 → 지수부등식'
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$x$ 에 대한 이차부등식의 항상 성립 조건(판별식 · 공통수학1)과 지수부등식(대수)을 겹쳐 써야 풀리는 2단 구조'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "이차부등식의 판별식 조건이 지수부등식으로 이어지는 문제"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    변수가 둘이라 층을 구분해야 한다. 부등식은 $x$ 에 대한 것이므로 먼저 판별식 $<0$ 을 세우고, 그 결과를 $2^{k}=t$ 로 보면 $t^{2}-5t+4<0$ 이 되어 $1<t<4$, 다시 지수부등식으로 $0<k<2$ 가 나온다.
    각 단계는 표준 도구지만 두 단원의 도구를 겹쳐 쓰는 것이 이 자리의 통찰(I-XU). 통찰이 하나라 +1 조건에 못 미쳐 STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: '$x$ 에 대한 판별식 $<0$ → $(2^{k+1}-4)^{2}-4\times2^{k}<0$ → $t=2^{k}$ 의 이차부등식 $t^{2}-5t+4<0$ → $1<2^{k}<4$ → $k$ 범위'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$0<k<2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/90-211.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '일차항의 $2^{k+1}-4$ 와 상수항 $2^{k}$ 의 계수를 교체. 제약: 판별식을 정리한 결과가 $t=2^{k}$ 의 인수분해되는 이차부등식이어야 하고, 두 근이 모두 양수라야 $2^{k}$ 로 되돌릴 수 있다(음수 근은 지수로 환원되지 않는다).'
    creative: '(1) 부등호를 $\ge$ 로 바꿔 판별식에 등호를 넣기(★3 유지) (2) 「모든 실수」를 「$x>0$ 인 모든 실수」로 좁히면 축과 경계 판정이 추가돼 ★4 (3) $x$ 의 이차식이 항상 음수일 조건으로 뒤집으면 최고차항 부호 조건이 추가돼 ★4.'
```

```yaml
- id: GN-ALG-90-212
  page: 90
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    $x\ge0$ 인 실수 $x$ 에 대하여 $4^{x+1}-2^{x+1}+k+1>0$ 이 항상 성립하도록 하는 정수 $k$ 의 최솟값을 구한다.
  category: '치환 시 정의역 $t\ge1$ 로 옮기기 → 축이 범위 밖 → 경계에서의 최솟값'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$x\ge0$ 이라는 제한을 $t=2^{x}$ 에서 $t>0$ 이 아니라 $t\ge1$ 로 옮기는 동치 변환이 핵심이며, 이를 $t>0$ 으로 두면 답이 달라짐'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "지수부등식이 항상 성립할 조건 — 정의역이 제한된 경우"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    치환하면 $f(t)=4t^{2}-2t+k+1$ 이고 축은 $t=\dfrac{1}{4}$ 로 범위 $t\ge1$ 의 왼쪽 밖이다. 따라서 꼭짓점이 아니라 경계 $t=1$ 에서 최솟값을 잡아 $k>-3$ 을 얻고, 정수 최솟값은 $-2$ 다.
    함정이 둘 겹친다 — 정의역을 $t\ge1$ 로 옮기지 않는 것(T-범위)과 부등호가 $>$ 라 $k=-3$ 을 기각해야 하는 것(T-경계). STEP 2 ★3 출발 · 통찰 1 → ★3 유지.
  tier: star_3
  mechanism_primary: '$x\ge0$ → $t=2^{x}\ge1$ → $f(t)=4t^{2}-2t+k+1$ 의 축 $t=\dfrac{1}{4}$ 가 범위 밖 → 경계 $f(1)>0$ → 정수 $k$ 의 최솟값'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/90-212.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '정의역의 경계($x\ge0$ → $x\ge1$·$x\le0$)와 일차항 계수를 교체. 제약: 축의 위치와 정의역 경계의 대소가 풀이 갈래를 결정하므로, 같은 유형을 유지하려면 축이 경계 밖에 오도록 계수를 잡는다. 축이 안으로 들어오면 꼭짓점 조건 문제로 바뀐다.'
    creative: '(1) 정의역을 $x\le0$ 으로 바꾸면 $0<t\le1$ 이 되어 경계가 반대쪽으로 옮겨짐(★3) (2) 축이 정의역 안에 오도록 계수를 키우면 꼭짓점 조건이 되어 ★3(88-e22) (3) 계수에 $k$ 를 넣어 축 위치가 $k$ 에 따라 갈리게 하면 경우 분기가 생겨 ★4(90-213).'
```

### 연습문제 실력 UP

```yaml
- id: GN-ALG-90-213
  page: 90
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    모든 실수 $x$ 에 대하여 $9^{x}-2k\times 3^{x}+16\ge 0$ 이 성립하도록 하는 실수 $k$ 의 값의 범위를 구한다.
  category: '치환 → 축의 위치가 $k$ 에 따라 갈림 → 두 경우의 조건을 합치기'
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '「모든 실수 $x$ 에서 성립」을 치환 뒤 「모든 $t>0$ 에서 $t^{2}-2kt+16\ge0$」으로 옮기는 동치 변환'
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '축이 $t=k$ 라 $k\le0$ 이면 범위 밖(경계 $t\to0^{+}$ 에서 상수항 $16>0$ 으로 항상 성립)·$k>0$ 이면 범위 안(꼭짓점 조건 $16-k^{2}\ge0$)으로 갈려 두 경우를 각각 따지고 합집합을 잡아야 함'
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "지수부등식이 항상 성립할 조건 — 축의 위치가 미지수에 따라 갈리는 경우"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    88-e22·88-202 와 같은 골조인데 축이 $t=k$ 라 미지수 자신이 축의 위치를 정한다. 그래서 「축이 $t>0$ 안인가 밖인가」가 고정되지 않고 $k$ 의 부호로 갈린다.
    $k\le0$ 인 경우는 조건 없이 전부 성립하고 $k>0$ 인 경우만 판별식 꼴 조건이 붙어, 두 결과를 합쳐야 $k\le4$ 라는 한 줄 답이 된다. 판별식만으로 풀면 $-4\le k\le4$ 로 답이 좁아진다. 실력 UP ★4 출발 · 통찰 2 → ★4 유지.
  tier: star_4
  mechanism_primary: '$3^{x}=t\ (t>0)$ 치환 → 축 $t=k$ 의 부호로 경우 나누기 → $k\le0$ 은 항상 성립 · $k>0$ 은 $16-k^{2}\ge0$ → 합쳐서 $k\le4$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$k\le 4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/90-213.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '상수항($16$)과 일차항의 계수($-2k$)를 교체. 제약: 상수항이 양수여야 $k\le0$ 쪽이 무조건 성립으로 정리되고, 꼭짓점 조건이 완전제곱 형태로 떨어지도록 상수항을 제곱수로 잡으면 경계가 정수가 된다.'
    creative: '(1) 부등호를 $>$ 로 바꿔 경계 $k=4$ 를 기각시키기(★4 유지) (2) 정의역을 $x\ge0$ 으로 좁히면 $t\ge1$ 과 축 위치가 겹쳐 경우가 셋으로 늘어 ★5 후보(I-MI+I-VF) (3) 조건을 만족시키는 정수 $k$ 의 개수를 묻게 하면 범위가 한쪽으로 열려 있어 문항이 성립하지 않으므로, 개수를 물으려면 $k$ 의 하한을 함께 주어야 한다.'
```

```yaml
- id: GN-ALG-90-214
  page: 90
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    미생물 A 는 $1$ 주마다 $2$ 배, B 는 $1$ 주마다 $4$ 배가 된다. 각각 $10$ 마리씩 동시에 배양했을 때 둘의 수의 합이 $2720$ 마리 이상이 되는 최소 주 수 $m$ 을 구한다.
  category: '두 증가 모델을 합으로 묶기 → $2^{m}=t$ 치환 → 이차부등식 → 최소 자연수'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수부등식의 실생활 활용 — 두 증가 모델의 합과 최소 기간"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    상황을 식으로 옮기면 $10\times2^{m}+10\times4^{m}\ge2720$ 이고, $4^{m}=(2^{m})^{2}$ 이므로 $t=2^{m}$ 치환 한 번에 이차부등식 $t^{2}+t-272\ge0$ 이 된다. 음수 근은 $t>0$ 에서 자동으로 걸러진다.
    모델링이 직접적이고(2배·4배가 그대로 주어짐) 치환도 이 단원의 표준이라 통찰 라벨을 붙이지 않았다. 벤더 실력 UP ★4 출발이지만 통찰 0 이고 골조가 88-e23·88-203 실생활 활용과 같아 −1 → ★3.
  tier: star_3
  mechanism_primary: '$10\times2^{m}+10\times4^{m}\ge2720$ → $t=2^{m}$ 치환 → $t^{2}+t-272\ge0$ → $t\ge16$ → 최소 자연수 $m$'
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/90-214.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '증가 배수($2$ 배·$4$ 배)와 초기 마릿수($10$)·목표 수($2720$)를 교체. 제약: 두 배수가 $a$ 와 $a^{2}$ 관계여야 한 번의 치환으로 이차부등식이 되고, 목표 수는 $t$ 의 양의 근이 $a$ 의 정수 거듭제곱이 되도록 역산해서 정한다.'
    creative: '(1) 배수를 $3$ 배·$9$ 배로 바꾸기(★3 유지) (2) 두 미생물의 수의 차 또는 비를 조건으로 주면 치환 후 구조가 달라져 ★3~4 (3) 초기 마릿수를 서로 다르게 주면 $t$ 의 이차부등식 계수가 갈라져 인수분해가 어려워지므로 근이 깔끔한 조합만 쓴다.'
```

## 표본 판정 요약 (28문)

- ★ 분포: ★1 4 · ★2 11 · ★3 10 · ★4 3 · ★5 0
- 통찰형 13 · 절차형 15 · premium 0
- 통찰 유형 분포: I-MI 5 · I-EQV 7 · I-VF 4 · I-BW 2 · I-XU 1 (총 19개 라벨 · 문항당 최대 2개)
- M_total: 최소 4(84-192·84-194) · 최대 9(89-209·90-210·90-213) · 중앙값 6
- type_hint 상위: 「밑을 같게 할 수 있는 지수부등식(밑 통일·지수 비교)」 7 · 「지수부등식이 항상 성립할 조건」 6 · 「$a^{x}$ 치환 후 이차부등식」 5 · 「밑에 미지수가 있는 지수부등식」 4 · 「지수부등식의 실생활 활용」 3 (나머지: 해가 주어진 역추적 2 · 정수해 개수 조건 1)
- 대상층: 하위권 4 · 중하위권 10 · 중위권 5 · 중상위권 9
- 그림: 없음(28문 모두 `figure: none`)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-ALG-84-195 | 골조(치환 → 이차부등식 → 환원)는 86-e20 급 ★2 이나 빈칸이 전부 유도돼 있어 ★1 로 둠 | ★1 / ★2 |
| GN-ALG-86-199 | 「확인체크」 태그를 ★1 출발로 보는 일반 규칙과 달리 필수 예제 미러로 보아 ★2 출발 + 역추적 통찰 2 → ★3(태그 기준과 2단 차) | ★2 / ★3 |
| GN-ALG-87-200 | 같은 사유. 확인체크지만 밑의 경우 분기 + 밑 $=1$ 기각 통찰 2 → ★3 | ★2 / ★3 |
| GN-ALG-87-201 | 같은 사유. 확인체크 + 정수 최솟값 사후 필터 → ★3 | ★2 / ★3 |
| GN-ALG-88-202 | 같은 사유. 확인체크지만 ⑵ 에서 축이 범위 밖으로 나가 경계 판정이 필요 → ★3 | ★2 / ★3 |
| GN-ALG-88-e22 | 축이 $t>0$ 안이라 판별식만 써도 답이 같아, 「$t>0$ 제한」 I-EQV 라벨이 실제로 변별에 쓰이는지 재검토 필요(88-202 ⑵ 와 짝으로 봐야 의미가 살아남) | ★2 / ★3 |
| GN-ALG-90-214 | 벤더 「실력 UP」이나 통찰 0 · M_total 6 이고 골조가 88-e23·88-203 실생활 활용과 같아 ★3 으로 한 단 하향 | ★3 / ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위에서 가장 많이 반복된 type_hint 는 「밑 통일 → 지수 비교」(7문)와 「항상 성립할 조건」(6문)이다. 앞의 것은 개념원리 익히기·필수 예제·STEP 1 에 걸쳐 난이도만 달라지므로 **하나의 유형으로 세우고 ★1~2 변형으로 두는 것**이 맞다(84-192·84-193·84-194·85-e19·85-196·85-197·89-204).
- 반대로 「항상 성립할 조건」은 겉보기 골조는 같지만 **세 갈래로 나눠야 한다**: ① 치환이 필요 없어 판별식으로 끝나는 것(89-208) ② 치환 후 축이 $t>0$ 안에 고정된 것(88-e22) ③ 축이 범위 밖이거나 미지수에 따라 갈리는 것(88-202 ⑵ · 90-212 · 90-213). ③ 이 실제 변별 자리이므로 카탈로그에서 별도 유형 + base ★4 로 세울 후보다.
- 「밑에 미지수가 있는 지수부등식」(87-e21·87-200·87-201·89-207)은 경우 분기(I-MI)가 항상 붙고 밑 $=1$ 의 포함·기각(I-VF)이 답을 가른다. 묻는 형태(해 자체 / 정수 최솟값 / 정수 개수)만 다르므로 **한 유형 + 질문 변형**으로 통합해도 된다.
- 「해가 주어진 역추적」(86-199 · 90-210)은 문항 수는 둘뿐이지만 I-BW 가 확실히 걸리고 ★3~4 를 가르는 자리라 카탈로그에 독립 유형으로 세울 가치가 있다. 90-210 의 역수항($a^{1-x}$) 유무가 ★ 를 한 단 가른다.
- 「실생활 활용」(88-e23 · 88-203 · 90-214)은 셋 다 최소 자연수 마무리가 같다. 난점은 모델 세우기(감소율 → 잔존율 / 상수 $k$ 결정 / 두 모델의 합)에만 있으므로 **한 유형 + 모델 종류 태그**로 두는 편이 낫다.
