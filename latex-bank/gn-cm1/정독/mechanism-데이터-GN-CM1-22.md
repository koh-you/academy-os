---
name: mechanism-데이터-GN-CM1-22
description: 개념원리 공통수학1 22 일차부등식(1/1 · 189쪽 5문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학1(22개정) · 전사본 latex-bank/gn-cm1
  section: 22 일차부등식
  unit_code: "22"
  part: "1/1"
  extract_range: "189~189쪽 · 189-e1~189-404"
  total_problems: 5
  unit_total: 5
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm1/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm1/items/<id>.tex
  image_source: latex-bank/gn-cm1/figures/ (crops.json)
---

# 개념원리 공통수학1 · 22 일차부등식 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 공통수학1 189쪽 한 쪽에 들어 있는 22단원 일차부등식 전 5문항(필수 예제 2 · 확인체크 3)을 다룬다. 전사본의 group section 이 「필수·발전 예제」 하나뿐이라 절도 하나다. 개념원리 고등의 난이도 신호는 구역과 예제 태그다 — 「확인체크」는 개념 확인이라 ★1 출발, 「필수」 예제는 ★2 출발이며, 여기서 M_total 과 통찰로 ±1 조정했다. 이 단원은 부등식의 기본 성질(곱·나누는 수의 부호)과 문자계수 일차부등식(계수의 부호로 경우 나누기) 두 골조가 전부이고, 함정은 거의 모두 T-부호와 T-경계(계수가 0 이 되는 경우)에 몰려 있다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(통찰 유형·depth·근거) · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 창의 변형과 ★ 변동 지점)를 채웠다. 그림 문항은 없다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-CM1-189-e1
  page: 189
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    a, b, c 가 실수일 때 보기 ㄱ(0<a<b 이면 1/a>1/b) · ㄴ(a>b 이면 c-2a<c-2b) · ㄷ(ac>bc 이면 a/c<b/c) 중 옳은 것만 모두 고르기.
  category: "부등식의 기본 성질 → 보기별 참·거짓 판정(곱·나누는 수의 부호)"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부등식의 기본 성질(양변에 곱·나누는 수의 부호와 부등호 방향)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ㄱ 은 양변을 ab>0 으로 나누는 표준 변형, ㄴ 은 음수 -2 를 곱해 방향이 반전되는 성질 그대로다.
    ㄷ 만 c 의 부호가 주어지지 않아 c>0 이든 c<0 이든 a/c>b/c 가 되어 거짓이다.
    부호에 따른 분기는 이 단원의 표준 절차(T-부호)라 통찰로 세지 않았다.
    필수 예제 출발 ★2 · 통찰 0 이나 M_total 7 이라 감점 없이 ★2.
  tier: star_2
  mechanism_primary: "보기마다 양변에 곱·나누는 수의 부호 확인 → 부등호 방향 결정 → 참·거짓 판정"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "ㄱ, ㄴ"
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/189-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "ㄴ 의 계수 -2 와 상수 c, ㄱ 의 구간 조건 0<a<b 를 바꿀 수 있음. 제약: 참인 보기는 곱·나누는 수의 부호가 조건에서 확정돼야 하고, 거짓 보기는 부호가 미정인 문자로 나누는 형태를 유지해야 함(그래야 반례가 성립)."
    creative: "(1) 보기를 a<b<0 조건의 a^2 과 ab 비교로 바꾸기(골조·★2 유지) (2) 거짓 보기의 반례를 직접 제시하게 하면 ★2 (3) 조건을 a>b 만 주고 1/a 와 1/b 를 비교하게 하면 a·b 의 부호 경우가 독립 분기를 만들어 I-MI 발생 → ★3."
```

```yaml
- id: GN-CM1-189-e2
  page: 189
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    x 에 대한 부등식 4x+a ≥ a^2 x+2 의 해가 x ≤ -1 일 때 상수 a 의 값 구하기.
  category: "일차부등식 정리 → 해가 x ≤ -1 이 되는 계수 조건 역추적"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "해의 부등호가 뒤집혀 있다는 것에서 x 의 계수 4-a^2 이 음수여야 함을 먼저 확정하고, 경계값 -1 과 비교해 a 를 역추적"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "해가 주어진 문자계수 일차부등식에서 상수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (4-a^2)x ≥ 2-a 로 모으면 해가 x ≤ 꼴이므로 4-a^2<0 이 먼저 확정된다.
    경계값 비교 (2-a)/(4-a^2) = -1 은 약분하면 1/(2+a) = -1 한 줄이고 a 가 나온다.
    계수가 0 이 되는 a=±2 배제(T-경계)와 부등호 반전(T-부호)이 함정이다.
    필수 예제 출발 ★2 · 역추적 통찰 1개(BW d1) · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "이항해 (4-a^2)x ≥ 2-a → 해가 x ≤ 꼴이므로 계수 4-a^2<0 → 경계값 -1 대입 → a 결정"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-3$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/189-e2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "해의 경계값 -1, 상수항 2, x 의 계수 4 를 바꿀 수 있음. 제약: a 에 대한 식이 (2-a)(2+a) 처럼 약분돼 a 가 유리수로 떨어져야 하고, 구한 a 가 계수 부호 조건(4-a^2<0)을 실제로 만족해야 함(만족하지 않으면 해 없는 문제가 됨)."
    creative: "(1) 해를 x ≥ -1 로 바꿔 계수 부호 조건만 반대로(골조·★2 유지) (2) 해를 '모든 실수' 또는 '해가 없다'로 주면 계수가 0 인 경우까지 따져야 해 I-MI 추가 → ★3 (3) 계수를 a^2-3a 꼴로 주면 a 후보가 둘 나오고 부호 조건으로 하나가 기각돼 I-VF → ★3."
```

```yaml
- id: GN-CM1-189-402
  page: 189
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑵ 빈칸에 알맞은 부등호 써넣기 — ⑴ 0<a<b, 0<c<d 일 때 ac 와 bd, ⑵ a<b<0 일 때 a^2 과 b^2.
  category: "부등식의 기본 성질 → 양수끼리의 곱·음수의 제곱 대소 판정"
  M: {s: 1, k: 1, a: 2, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부등식의 기본 성질(대소 관계에서 부등호 써넣기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴ 은 양수를 곱하는 성질을 두 번 이어 ac<bc<bd 사슬로 결론.
    ⑵ 는 a<b<0 의 양변에 음수 a, b 를 각각 곱해 a^2>ab>b^2.
    조건의 양수·음수 제한을 빼면 성립하지 않는다는 점(T-범위·T-부호)이 유일한 함정.
    확인체크 구역 출발 ★1 · 통찰 없음이나 M_total 6 이라 감점 없이 ★1.
  tier: star_1
  mechanism_primary: "양수 곱은 ac<bc<bd 사슬로, 음수 제곱은 a<b<0 에 음수를 곱해 방향 반전 → a^2>b^2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $<$ ⑵ $>$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/189-402.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "비교 대상을 ac 와 bd 대신 a/d 와 b/c, a^2 과 ab 등으로 바꿀 수 있음. 제약: 조건의 부호 제한(모두 양수 / 모두 음수)이 결론을 유일하게 결정해야 함 — 부호가 섞이면 답이 미정이 되어 빈칸형으로 쓸 수 없음."
    creative: "(1) 부호 조건을 a<0<b 로 섞어 '결정할 수 없음'을 고르게 하면 I-MI → ★2 (2) 세 항 a<b<c 로 늘려 곱의 대소를 묻기(★2) (3) 부등호와 함께 성립 이유(곱한 수의 부호)를 쓰게 하면 서술형 ★2."
```

```yaml
- id: GN-CM1-189-403
  page: 189
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    x 에 대한 부등식 ax-10 ≥ 2x-5a 를 (상수 a 의 값에 따라) 풀기.
  category: "문자계수 일차부등식 → 계수 a-2 의 부호로 경우 나누어 해 서술"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "계수 a-2 가 양·음·0 인 세 경우가 각각 독립된 해(x≥-5 / x≤-5 / 모든 실수)를 만들어 전부 따져야 함"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "문자계수 일차부등식 풀기(계수의 부호로 경우 나누기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (a-2)x ≥ 10-5a 로 모으고 우변을 -5(a-2) 로 묶으면 양변에 같은 인수가 보여 경계가 -5 로 고정된다.
    a>2 면 그대로, a<2 면 부등호 반전, a=2 면 0·x ≥ 0 이라 모든 실수 — 세 경우가 모두 답에 들어간다.
    계수가 0 인 경우를 빠뜨리는 것(T-경계)과 반전(T-부호)이 함정.
    확인체크 출발 ★1 이지만 문자계수 3분기는 개념 확인을 넘고 M_total 7 이라 +1 하여 ★2(벤더와 1단 차이).
  tier: star_2
  mechanism_primary: "(a-2)x ≥ -5(a-2) 로 정리 → 계수 a-2 의 부호 세 경우 → 각 경우의 해 서술"
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '$\begin{cases} a>2\text{일 때, } x\ge -5 \\ a<2\text{일 때, } x\le -5 \\ a=2\text{일 때, 모든 실수} \end{cases}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/gn-cm1/items/189-403.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 2 와 상수 -10, -5a 를 바꿀 수 있음. 제약: 우변이 (a-k) 의 상수배로 묶여 경계값이 a 에 무관한 상수가 되어야 세 경우가 깔끔하게 서술됨. 묶이지 않게 바꾸면 경계값이 a 의 식이 되어 답 서술이 길어짐."
    creative: "(1) 계수를 a^2-4 로 바꾸면 0 이 되는 경우가 a=±2 둘이라 분기가 넷 → ★3 (2) '해가 x≥-5 가 되도록 하는 a 의 범위'로 뒤집으면 I-BW 골조 → ★2~3 (3) a=2 일 때를 '해가 없다'가 되도록 상수만 바꾸면 0·x ≥ 양수 경계 판단이 추가 → ★3."
```

```yaml
- id: GN-CM1-189-404
  page: 189
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    부등식 (a+b)x-2b ≤ 0 의 해가 x ≥ -2 일 때, 부등식 bx-4a ≥ 0 의 해 구하기.
  category: "해 조건에서 계수 부호·관계 역추적 → 다른 부등식의 해"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "해가 x ≥ -2 로 방향이 뒤집힌 데서 a+b<0 을 먼저 확정하고, 경계값 2b/(a+b) = -2 에서 a = -2b 라는 계수 관계를 역추적"
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "a = -2b 와 a+b<0 을 합쳐 -b<0 즉 b>0 이라는 부호를 끌어내야 두 번째 부등식의 부등호 방향이 결정됨"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "해가 주어진 부등식의 계수 관계로 다른 부등식 풀기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    (a+b)x ≤ 2b 의 해가 x ≥ 꼴이므로 a+b<0 이 먼저이고, 경계 비교로 a 와 b 의 관계가 나온다.
    여기서 멈추지 않고 그 관계를 a+b<0 에 되먹여 b 의 부호를 확정해야 bx ≥ 4a 의 방향이 정해진다 — 관계만 구하고 부호를 안 따지면 부등호가 뒤집힌 오답이 된다.
    역추적(BW d2) + 부호 확정을 위한 조건 결합(EQV d1) 2단계 · M_total 7 → ★3.
    [분류 이슈] 벤더 「확인체크」(★1 출발)와 2단 차이 — 라벨은 판정대로 ★3 으로 두고 기록만 함.
  tier: star_3
  mechanism_primary: "해가 x ≥ -2 → a+b<0 확정 → 경계 2b/(a+b) = -2 에서 a = -2b → b>0 확정 → bx ≥ 4a 를 b 로 나눠 해"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$x\ge -8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/189-404.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫 부등식의 해 경계 -2, 상수항 -2b, 두 번째 부등식의 계수 -4a 를 바꿀 수 있음. 제약: 경계값 비교에서 a 와 b 가 한쪽이 다른 쪽의 유리수배(a=kb)로 떨어져야 하고, 그 관계가 a+b<0 과 모순되지 않아 b 의 부호가 하나로 확정돼야 함."
    creative: "(1) 두 번째 부등식을 ax-b ≤ 0 처럼 계수 자리를 바꾸면 부호 판단 지점만 옮겨 ★3 유지 (2) 첫 부등식의 해를 x ≤ -2 로 주면 a+b>0 이 되어 방향 반전이 사라져 ★2 (3) 두 번째를 이차 (bx-4a)(x+1) ≥ 0 로 확장하면 단원을 넘어 I-XU → ★4."
```

## 표본 판정 요약 (5문)

- ★ 분포: ★1 1 · ★2 3 · ★3 1 · ★4 0 · ★5 0
- 통찰형 3(189-e2 · 189-403 · 189-404) · 절차형 2 · premium 0
- 통찰 유형 분포: I-BW 2 · I-MI 1 · I-EQV 1 (모두 depth 1~2, depth 3 없음)
- M_total: 7 이 4문 · 6 이 1문 (Mₖ 는 전 문항 1 — 이 단원은 계산량이 아니라 부호 판단이 변별 지점)
- 함정: 전 문항이 T-부호, 4문이 T-경계(계수가 0 이 되는 경우·등호 포함) 동반
- type_hint 상위: 「부등식의 기본 성질」계열 2 · 「문자계수 일차부등식 풀기」 1 · 「해가 주어진 부등식에서 미정계수 역추적」계열 2
- 대상층: 중하위권 3 · 중위권 2
- 그림: 없음(5문 모두 `figure: none`)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CM1-189-404 | 벤더 구역은 「확인체크」(★1 출발)인데 해 조건 역추적 + 계수 부호 확정 2단계라 판정은 ★3. 라벨을 ★3 으로 두고 2단 차이를 기록 | ★1 / ★3 |

참고(이슈까지는 아닌 1단 차이): GN-CM1-189-403 은 확인체크(★1 출발)이나 문자계수 3분기라 ★2 로 +1 조정했다.

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위의 type_hint 는 두 갈래뿐이다 — ① 부등식의 기본 성질·부등호 방향 판정(189-e1 · 189-402) ② 문자계수 일차부등식(189-e2 · 189-403 · 189-404).
- ①의 두 문항은 골조가 같다(곱·나누는 수의 부호 → 방향 결정). 카탈로그에서는 한 유형으로 **통합**하고 보기형/빈칸형은 출제 형식 차이로 두면 된다.
- ②는 안에서 다시 갈라진다. 「계수의 부호로 경우를 나누어 해를 서술」(189-403)과 「해가 주어져 미정계수를 역추적」(189-e2 · 189-404)은 사고 방향이 반대(정방향 분류 vs 역방향 추적)라 **따로 세워야** 한다. 특히 189-404 처럼 역추적한 계수 관계를 다시 부호 조건에 되먹이는 2단 골조는 base ★3 자리의 대표 유형 후보다.
- 이 단원 전체에서 Mₖ 가 1 로 고정되므로, 카탈로그의 base ★ 는 계산량이 아니라 「부호 판단이 몇 번 필요한가」로 잡는 것이 학생 체감과 맞는다.
