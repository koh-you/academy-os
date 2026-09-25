---
name: mechanism-데이터-GN-ALG-12
description: 개념원리 대수 12 로그함수의 활용 – 방정식(1/1 · 112~118쪽 전수 29문) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 대수 (22개정 · 학생용) · 전사본 latex-bank/gn-alg
  section: 12 로그함수의 활용 – 방정식
  unit_code: GN-ALG-12
  part: "1/1"
  extract_range: "112~118쪽 · 112-270~118-292"
  total_problems: 29
  unit_total: 29
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·level·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). insight_type 은 insights 가 비면 절차형, 하나라도 있으면 통찰형. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-alg/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-alg/items/<id>.tex
  image_source: latex-bank/gn-alg/figures/ (이 범위에는 그림 문항 없음)
---

# 개념원리 대수 · 12 로그함수의 활용 – 방정식 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 대수 12단원 「로그함수의 활용 – 방정식」 112~118쪽의 29문항 전수를 다룬다. 구역은 개념원리 익히기 4문, 필수·발전 예제(필수 예제 6 + 딸린 확인체크 6) 12문, 연습문제 STEP 1 6문, STEP 2 4문, 실력 UP 3문이다. 개념원리 고등의 난이도 신호는 구역과 태그에 있다 — 개념원리 익히기는 개념 확인(★1 출발), 필수 예제와 그 바로 뒤의 확인체크는 같은 유형을 짝으로 묶은 표준 응용(★2 출발), 연습문제는 STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4 출발이다. 여기서 확인체크는 「개념원리 익히기」 구역이 아니라 필수 예제에 딸린 짝 문항이므로 개념 확인 ★1 이 아니라 짝이 되는 필수 예제와 같은 ★2 를 출발점으로 삼았다(분류 이슈 목록에 기록).

이 범위는 로그방정식 한 단원이라 도구가 좁다 — ⑴ 로그의 정의와 밑 통일, ⑵ $\log_a x = t$ 치환, ⑶ 양변에 로그 취하기(지수에 로그가 있는 꼴), ⑷ 근과 계수의 관계, ⑸ 진수·밑 조건에 의한 무연근 기각, 이 다섯이 거의 모든 문항의 골조다. 그래서 판정에서 통찰로 인정한 것도 이 좁은 목록 안에서 갈린다. 진수조건 확인은 언제나 필요하지만, **후보 근이 둘 이상 나오고 그중 일부가 실제로 기각되는 문항에서만** I-VF 로 카운트했다(모든 로그방정식이 자동으로 통찰형이 되지 않게 하는 기준). 이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다. 그림 문항은 없다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-ALG-112-270
  page: 112
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑶ $\log_2 x=3$, $\log_{1/3} x=-3$, $\log_5 x=0$ 을 각각 푸는 가장 기본적인 로그방정식.
  category: '로그의 정의 → $x=a^b$'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그의 정의를 이용한 기본 로그방정식"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    로그의 정의를 그대로 한 번 적용하는 한 단계. 진수가 x 자신이라 진수조건도 자동으로 걸러진다.
    개념원리 익히기 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: '$\log_a x=b$ → $x=a^b$'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $x=8$ ⑵ $x=27$ ⑶ $x=1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/112-270.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑(2, 1/3, 5)과 우변 값을 바꿀 수 있음. 제약: 밑은 $a>0$, $a\ne 1$ 이고 $a^b$ 가 정수 또는 간단한 분수가 되도록 지수를 고른다. 분수 밑에 음수 지수를 주면 답이 정수가 되어 계산 부담이 늘지 않는다.'
    creative: '(1) $\log_x 8=3$ 처럼 밑을 미지수로 돌리면 밑조건($>0$, $\ne 1$)이 붙어 ★2 (2) 세 해의 곱·합을 묻기(★1 유지) (3) 진수를 일차식으로 바꾸면 다음 문항(271) 유형으로 이동.'
```

```yaml
- id: GN-ALG-112-271
  page: 112
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑹ $\log_2 (3x-1)=3$ 처럼 진수가 일차식인 로그방정식 6개(밑이 $\frac{1}{3}$, $\frac{1}{2}$, $0.1$ 인 경우 포함).
  category: '로그의 정의 → 일차방정식 → 진수조건 확인'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그의 정의를 이용한 로그방정식(진수가 일차식)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    정의로 진수를 $a^b$ 와 놓고 일차방정식을 푸는 두 단계. 해가 음수여도 진수가 양수면 그대로 답이라
    부호로 거르지 않는 것만 주의. 개념 확인 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: '$\log_a f(x)=b$ → $f(x)=a^b$ → 일차방정식 → 진수 $f(x)>0$ 확인'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $x=3$ ⑵ $x=-3$ ⑶ $x=7$ ⑷ $x=\dfrac{2}{3}$ ⑸ $x=12$ ⑹ $x=-\dfrac{2}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/112-271.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '일차식의 계수·상수항과 밑·우변 지수를 바꿀 수 있음. 제약: $a^b$ 가 정수가 되게 하고 해가 정수나 분모 작은 분수로 떨어지게 계수를 맞춘다. 구한 $x$ 를 진수에 되대입해 $>0$ 인지 확인(여기서는 6개 모두 통과).'
    creative: '(1) 진수를 이차식으로 바꾸면 후보 근 2개 중 하나가 기각되어 I-VF ★2 (2) 밑을 $x-2$ 처럼 미지수로 두면 밑조건까지 붙어 ★2 (3) 6개 해의 합을 묻는 한 문항으로 묶으면 ★2.'
```

```yaml
- id: GN-ALG-112-272
  page: 112
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴⑵ 양변이 같은 밑의 로그인 방정식 $\log_a f(x)=\log_a g(x)$ 두 개.
  category: '밑이 같은 로그방정식 → 진수끼리 등식 → 진수조건 확인'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "밑이 같은 로그방정식 log_a f(x)=log_a g(x)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    로그함수가 일대일이므로 진수끼리 같다고 놓는 한 단계. 두 문항 모두 진수 두 개가 다 양수라
    기각이 없다. 개념 확인 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: '$\log_a f=\log_a g$ → $f=g$ → 일차방정식 → $f>0$, $g>0$ 확인'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $x=-1$ ⑵ $x=-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/112-272.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 진수 일차식의 계수를 바꿀 수 있음. 제약: 두 일차식의 $x$ 계수가 달라야 해가 하나로 정해지고, 해에서 두 진수가 모두 양수여야 한다(같은 값이 되므로 하나만 확인하면 충분).'
    creative: '(1) 한쪽 진수를 이차식으로 바꿔 근 2개 중 하나를 진수조건으로 기각(★2 · I-VF) (2) 두 밑을 $a$ 와 $\frac{1}{a}$ 로 다르게 주어 밑 변환을 먼저 시키기(★2) (3) 진수가 같고 밑이 다른 꼴로 뒤집으면 118-287 의 갈래 문제로 이동(★3).'
```

```yaml
- id: GN-ALG-112-273
  page: 112
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    방정식 $(\log x)^2-4\log x+3=0$ 의 해를 구하는 과정에서 빈칸(치환식·$t$ 의 값·$x$ 의 값)을 채우는 문항.
  category: '$\log x=t$ 치환 → 이차방정식 → $t$ 를 $x$ 로 되돌리기'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "log x 치환을 이용한 로그방정식(풀이 과정 빈칸 채우기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    치환의 골조가 발문에 이미 제시돼 있고 학생은 각 칸을 따라 채우기만 한다. 되돌릴 때
    $\log x=1 \Rightarrow x=10$ 을 정의로 읽는 것이 전부. 개념 확인 구역·통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: '$\log x=t$ → $t^2-4t+3=0$ → $t=1$ 또는 $3$ → $x=10$ 또는 $1000$'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$t^2$, $t$, $1$, $1$, $10$, $1000$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/112-273.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '이차식의 계수(−4, 3)를 바꿀 수 있음. 제약: $t$ 의 두 근이 정수여야 $x$ 가 $10$ 의 거듭제곱으로 깔끔하게 떨어진다. 밑을 $2$ 나 $3$ 으로 바꾸면 $x$ 는 그 밑의 거듭제곱이 된다.'
    creative: '(1) 빈칸을 없애고 그냥 풀게 하면 ★1~2 (2) 두 근의 곱을 묻도록 바꾸면 근과 계수의 관계 유형(★2 · I-XU) (3) $t$ 의 근이 무리수가 되게 계수를 잡으면 직접 풀이가 막혀 근과 계수의 관계가 필수가 된다(★2~3).'
```

### 필수·발전 예제

```yaml
- id: GN-ALG-113-e14
  page: 113
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑶ $\log_2 x+\log_2 (x-1)=\log_2 6$ 처럼 로그의 성질·밑 변환으로 양변을 같은 밑의 로그로 만든 뒤 푸는 방정식.
  category: '로그 성질·밑 통일 → 진수끼리 등식(이차) → 무연근 기각'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 3
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '세 소문항 모두 이차방정식에서 후보 근이 2개 나오고 그중 하나가 진수조건을 어겨 기각돼야 답이 하나로 정해짐'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "밑을 같게 할 수 있는 로그방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑵는 $\log_{1/2} x=-\log_2 x$ 로, ⑶은 $\log_4$ 를 $\log_2$ 로 바꿔 밑을 통일하는 것이 첫 단계이고,
    통일 뒤에는 진수끼리 이차방정식이다. 후보 근 중 진수조건 위배 근을 반드시 기각해야 해서 I-VF d1 하나.
    필수 예제 출발점 ★2 · 통찰 1개 → ★2 유지.
  tier: star_2
  mechanism_primary: '로그 성질·밑 변환으로 $\log_2$ 로 통일 → 진수끼리 이차방정식 → 진수조건으로 무연근 기각'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ $x=3$ ⑵ $x=1$ ⑶ $x=5$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/113-e14.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '우변 상수(6, 5)와 진수의 상수항을 바꿀 수 있음. 제약: 진수끼리 만든 이차방정식이 정수근을 갖도록 곱이 적당한 합성수가 되게 잡고, **두 근 중 하나만 진수조건을 어기도록** 설계해야 이 유형의 기각 단계가 살아 있다. ⑶처럼 밑이 $2$ 와 $4$ 인 조합은 $2^n$ 관계를 유지.'
    creative: '(1) 밑을 $3$ 과 $9$, $2$ 와 $8$ 로 바꿔도 골조 동일(★2) (2) 두 근이 모두 살아남게 만들면 I-VF 가 사라져 ★1~2 로 내려감 (3) 로그 항을 하나 더 붙여 삼차가 되게 하면 117-280 유형(★3) (4) 밑을 미지수로 두면 밑조건이 추가돼 ★3.'
```

```yaml
- id: GN-ALG-113-274
  page: 113
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑹ 진수가 이차식이거나($\log (x^2+3x)=1$), 밑이 미지수이거나($\log_{x-2} 4=2$), 밑이 서로 다른($\log_{1/4}$ 와 $\log_{1/2}$) 로그방정식 6개.
  category: '밑·진수 통일 → 이차방정식 → 진수·밑 조건으로 기각'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 3
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '⑵는 밑 조건($x-2>0$, $\ne 1$)으로 $x=0$ 을, ⑶⑸⑹은 진수조건으로 음의 근을 기각해야 답이 정해짐'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '밑·진수를 같게 만드는 로그방정식(밑 변환 · 밑조건 · 진수조건)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e14 의 짝 문항이지만 밑이 미지수인 ⑵와 밑이 $\sqrt{3}$ 인 ⑸가 섞여 조건 확인 항목이 진수와 밑 둘로 늘었다(Mₜ 2).
    각 소문항은 밑 통일 후 이차방정식 한 개라 단계 수 자체는 작다. 확인체크 출발점 ★2 · 통찰 1개 → ★2.
  tier: star_2
  mechanism_primary: '밑을 통일하고 로그 성질로 정리 → 진수끼리 이차방정식 → 진수$>0$·밑$>0,\ne 1$ 로 후보 기각'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ $x=-5$ 또는 $x=2$ ⑵ $x=4$ ⑶ $x=20$ ⑷ $x=0$ 또는 $x=1$ ⑸ $x=7$ ⑹ $x=2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/113-274.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '각 소문항의 상수항과 밑을 바꿀 수 있음. 제약: ⑴처럼 진수가 하나뿐이면 두 근이 다 살아남고(진수는 우변 값으로 고정), 진수가 둘 이상이면 보통 하나가 기각된다 — 이 차이를 의도한 대로 유지할 것. ⑵의 밑은 $x-2>0$, $x-2\ne 1$ 이라 $x=3$ 이 답이 되지 않게 우변을 고른다.'
    creative: '(1) ⑵를 $\log_{x-2}(x+4)=2$ 처럼 진수도 미지수로 만들면 조건이 겹쳐 ★3 (2) ⑸의 $\sqrt{3}$ 밑을 $\sqrt[3]{3}$ 로 바꾸면 계수만 달라지고 골조 유지 (3) 여섯 해의 합을 묻는 한 문항으로 묶으면 기각 판단이 답을 직접 바꿔 ★3.'
```

```yaml
- id: GN-ALG-114-e15
  page: 114
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ $(\log_5 x)^2-\log_5 x^3+2=0$ ⑵ $\log_3 x=\log_x 9-1$ 을 치환으로 푸는 방정식.
  category: '$\log_a x=t$ 치환 → 이차방정식 → $t$ 를 $x$ 로 되돌리기'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '$\log_a x$ 의 꼴이 반복되는 로그방정식(치환)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴은 $\log_5 x^3=3\log_5 x$ 로 정리하면 곧바로 $t$ 의 이차식, ⑵는 밑변환 공식으로 $\log_x 9=\frac{2}{\log_3 x}$ 를
    만들어 분모를 없애면 이차식이다. 둘 다 이 단원의 표준 절차 대입이라 통찰 카운트 없음(단순 치환은 I-RT 아님).
    필수 예제 출발점 ★2 · M_total 6 이라 −1 조건(통찰 0 이고 M_total ≤ 5)에 걸리지 않음 → ★2.
  tier: star_2
  mechanism_primary: '로그 성질·밑변환으로 $\log_a x$ 하나로 모은 뒤 $t$ 치환 → 이차방정식 → $x=a^t$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $x=5$ 또는 $x=25$ ⑵ $x=\dfrac{1}{9}$ 또는 $x=3$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/114-e15.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '진수의 거듭제곱 지수(3)와 상수항(2), 밑(5, 3, 9)을 바꿀 수 있음. 제약: $t$ 의 두 근이 정수가 되게 계수를 잡아야 $x$ 가 밑의 거듭제곱으로 떨어진다. ⑵에서 $\log_x 9$ 를 쓰려면 밑이 $x$ 이므로 $x>0$, $x\ne 1$ — 근에 $1$ 이 나오지 않게 상수항을 고를 것.'
    creative: '(1) $t$ 의 근을 분수로 만들면 $x$ 가 무리수가 돼 계산만 무거워짐(권장하지 않음 · 질 저하) (2) 두 근의 곱·합을 묻도록 바꾸면 근과 계수의 관계 유형(★2 · I-XU) (3) 밑이 셋 이상 섞이게 하면 114-275 ⑹ 처럼 삼차가 되어 ★3.'
```

```yaml
- id: GN-ALG-114-275
  page: 114
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑹ 밑이 여러 개($10$, $2$, $8$, $3$, $9$, $81$)인 로그를 하나로 통일한 뒤 치환해서 푸는 방정식(⑹은 삼차).
  category: '밑 통일 → $\log_a x=t$ 치환 → 이차·삼차방정식 → 되돌리기'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '밑이 다른 로그의 통일 후 $\log_a x$ 치환(이차·삼차)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑸ $\log_8 x=\frac{1}{3}\log_2 x$, ⑹ $\log_9 x=\frac{1}{2}\log_3 x$, $\log_{81} x=\frac{1}{4}\log_3 x$ 처럼 밑변환을 먼저 하면
    전부 한 문자 $t$ 의 다항방정식이 된다. ⑸에서 양변을 $t$ 로 나누면 $t=0$ (즉 $x=1$) 해를 잃는 것이 유일한 함정.
    표준 절차 대입뿐이라 통찰 카운트 없음. 확인체크 출발점 ★2 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: '밑변환으로 모든 로그를 $\log_a x$ 의 상수배로 → $t$ 치환 → 다항방정식(인수분해) → $x=a^t$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $x=\dfrac{1}{10}$ 또는 $x=1000$ ⑵ $x=\dfrac{1}{10}$ 또는 $x=100$ ⑶ $x=\dfrac{1}{100}$ 또는 $x=10$ ⑷ $x=\dfrac{1}{4}$ 또는 $x=4$ ⑸ $x=1$ 또는 $x=4$ ⑹ $x=1$ 또는 $x=\sqrt{3}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/gn-alg/items/114-275.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑 조합($2$·$8$, $3$·$9$·$81$)과 상수항을 바꿀 수 있음. 제약: 밑들이 같은 수의 거듭제곱이어야 한 문자로 통일된다. ⑹처럼 삼차로 갈 때는 $t(t-\frac{1}{2})^2$ 같이 인수분해가 되도록 계수를 맞추고, 중근이면 해의 개수가 줄어드는 것을 답에 반영할 것.'
    creative: '(1) ⑷의 $\log_2 2x\times\log_2\frac{x}{2}$ 꼴을 $\log_3 3x\times\log_3 9x$ 로 바꾸면 117-285(근과 계수) 유형 (2) ⑸를 그대로 두고 「모든 근의 합」을 물으면 $t=0$ 을 빠뜨린 학생이 틀려 I-VF 가 생김(★3) (3) 밑을 $2$ 와 $3$ 처럼 서로 거듭제곱 관계가 아닌 수로 섞으면 통일이 불가능해져 다른 골조가 필요(설계 주의).'
```

```yaml
- id: GN-ALG-115-e16
  page: 115
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ $x^{\log_2 x}=8x^2$ ⑵ $2^{\log_5 x}\times x^{\log_5 2}=6\times 2^{\log_5 x}-8$ 처럼 지수 자리에 로그가 있는 방정식.
  category: '양변에 로그 취하기 · $a^{\log c}=c^{\log a}$ → 치환 → 이차방정식'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '지수 자리의 로그는 그대로 다룰 수 없어 양변에 로그를 취해 지수를 끌어내리는 표현 전환이 필요'
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '⑵에서 $x^{\log_5 2}=2^{\log_5 x}$ 임을 알아채고 서로 다른 두 항을 같은 문자로 묶음'
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: '지수에 로그가 포함된 방정식(양변 로그 · $a^{\log c}=c^{\log a}$)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑴은 양변에 $\log_2$ 를 취하면 $t^2-2t-3=0$ 로 떨어진다. ⑵는 양변 로그로는 풀리지 않고
    $a^{\log_c b}=b^{\log_c a}$ 항등식을 먼저 써서 $2^{\log_5 x}=u$ 로 묶어야 $u^2-6u+8=0$ 이 된다 — 이 항등식이 진입 장벽이다.
    필수 예제 출발점 ★2 · 통찰 2개(RT d1 + EQV d2) → +1 → ★3.
  tier: star_3
  mechanism_primary: '양변에 로그 → 지수 내리기, $x^{\log_c a}=a^{\log_c x}$ 로 항 통일 → 치환 → 이차방정식 → 되돌리기'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $x=\dfrac{1}{2}$ 또는 $x=8$ ⑵ $x=5$ 또는 $x=25$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/115-e16.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '⑴의 우변 계수($8$)·지수($2$)와 로그의 밑을 바꿀 수 있음. 제약: 양변 로그 후 $t$ 의 두 근이 정수여야 $x$ 가 밑의 거듭제곱으로 떨어진다. ⑵의 $6$, $8$ 은 $u$ 의 두 근이 밑 $2$ 의 거듭제곱($2$, $4$)이 되게 잡아야 $\log_5 x$ 가 정수가 된다.'
    creative: '(1) 밑을 $10$ 으로 바꾸면 115-276⑴ 과 같은 골조(★3 유지) (2) ⑵의 $u$ 두 근 중 하나가 $2$ 의 거듭제곱이 아니게 하면 해가 무리수가 되어 계산만 무거워짐(질 저하) (3) 모든 근의 곱을 묻도록 바꾸면 근과 계수의 관계가 붙어 통찰 3개·★4 후보.'
```

```yaml
- id: GN-ALG-115-e17
  page: 115
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    방정식 $(\log_{1/3} x)^2+2\log_{1/3} x-6=0$ 의 두 실근을 $\alpha$, $\beta$ 라 할 때 $\alpha\beta$ 의 값.
  category: '치환 → 근과 계수의 관계(두 근의 합) → 로그의 합을 곱의 로그로 되돌리기'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 2
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '$t$ 의 두 근이 무리수라 직접 풀 수 없고, 이차방정식 근과 계수의 관계로 얻은 합 $-2$ 를 $\log_{1/3}(\alpha\beta)$ 로 읽어야 함'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '$\log_a x$ 치환과 근과 계수의 관계(두 근의 곱)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $t=\log_{1/3}x$ 로 두면 $t^2+2t-6=0$ 의 근은 무리수여서 $\alpha$, $\beta$ 를 각각 구하는 길이 막혀 있다.
    두 근의 합 $-2$ 를 $\log_{1/3}\alpha+\log_{1/3}\beta=\log_{1/3}(\alpha\beta)$ 로 되읽는 것이 이 유형의 전부다.
    필수 예제 출발점 ★2 · 통찰 1개 → ★2.
  tier: star_2
  mechanism_primary: '$\log_{1/3}x=t$ 치환 → $t_1+t_2=-2$ → $\log_{1/3}(\alpha\beta)=-2$ → $\alpha\beta=9$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$9$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/115-e17.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '일차항 계수($2$)와 상수항($-6$)을 바꿀 수 있음. 제약: 판별식 $>0$ 으로 실근 2개를 보장하고, **두 근이 유리수로 떨어지지 않게** 상수항을 잡아야 근과 계수의 관계를 쓰는 이 골조가 살아 있다. 밑이 $\frac{1}{3}$ 이라 답은 $(1/3)^{-(\text{합})}$ 이므로 합이 음의 정수일 때 답이 정수.'
    creative: '(1) $\alpha\beta$ 대신 $\frac{\alpha}{\beta}$ 나 $\alpha^2\beta$ 를 물으면 합뿐 아니라 곱·차까지 필요해 ★3 (2) 밑을 $3$ 으로 바꾸면 답이 $3^{-2}$ 로 뒤집힘(부호 함정 추가) (3) 계수를 미지수 $k$ 로 두고 $\alpha\beta$ 값을 조건으로 주면 117-284 처럼 역방향 문제(★2, I-BW 추가 시 ★3).'
```

```yaml
- id: GN-ALG-115-276
  page: 115
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴ $x^{\log x}=\dfrac{1000}{x^2}$ ⑵ $2^{\log x}+2^{2-\log x}=4$ ⑶ $x^{\log 3}\times 3^{\log x}-5(x^{\log 3}+3^{\log x})+9=0$ 지수에 로그가 있는 방정식 3개.
  category: '양변 로그 · $x^{\log a}=a^{\log x}$ → 치환 → 이차방정식'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '⑴은 양변에 상용로그를 취해 지수 위의 $\log x$ 를 끌어내려야 다항방정식이 됨'
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '⑶에서 $x^{\log 3}=3^{\log x}$ 임을 알아채면 두 항이 같은 문자가 되어 $u^2-10u+9=0$ 으로 접힘'
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: '지수에 로그가 포함된 방정식(양변 로그 · $x^{\log a}=a^{\log x}$)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    e16 의 짝 문항. ⑵는 $2^{\log x}=s$ 로 두면 $s+\frac{4}{s}=4$ 라 중근 $s=2$ 하나만 나오고,
    ⑶은 항등식으로 두 항을 묶지 못하면 손을 댈 수 없다. 확인체크 출발점 ★2 · 통찰 2개 → +1 → ★3.
  tier: star_3
  mechanism_primary: '양변 로그로 지수 내리기 또는 $x^{\log a}=a^{\log x}$ 로 항 통일 → 치환 → 이차방정식 → $x=10^t$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $x=\dfrac{1}{1000}$ 또는 $x=10$ ⑵ $x=10$ ⑶ $x=1$ 또는 $x=100$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/115-276.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '⑴의 $1000$ 과 지수 $2$, ⑶의 $5$·$9$ 를 바꿀 수 있음. 제약: 치환 후 이차방정식의 근이 $10$ 의 정수 거듭제곱(⑶은 $3^{\log x}$ 이 $3$ 의 정수 거듭제곱)이 되게 맞춰야 $\log x$ 가 정수로 떨어진다. ⑵처럼 중근이면 해가 하나뿐임을 답에 반영.'
    creative: '(1) ⑶의 $3$ 을 $5$ 로 바꾸면 117-283 과 같은 문항이 된다(소문항 하나로 떼면 ★2) (2) ⑵에서 상수를 $4$ 대신 $5$ 로 바꾸면 두 근이 생겨 해가 둘(★3 유지) (3) 모든 근의 곱을 묻도록 바꾸면 근과 계수의 관계가 추가돼 ★3~4.'
```

```yaml
- id: GN-ALG-115-277
  page: 115
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴ $(\log_2 x)^2-4\log_2 x+3=0$ ⑵ $\log_2 x-5\log_x 2-2=0$ 의 두 실근 $\alpha$, $\beta$ 에 대한 $\alpha\beta$ 의 값.
  category: '치환·밑변환 → 근과 계수의 관계(두 근의 합) → $\alpha\beta=a^{t_1+t_2}$'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 2
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '이차방정식 근과 계수의 관계로 $t$ 의 두 근의 합을 얻고 이를 $\log_2(\alpha\beta)$ 로 되읽음'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '$\log_a x$ 치환 + 근과 계수의 관계로 두 근의 곱'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e17 의 짝 문항. ⑵는 $\log_x 2=\frac{1}{\log_2 x}$ 로 바꿔 분모를 없애면 $t^2-2t-5=0$ 이고 근이 무리수라
    근과 계수의 관계가 필수다. ⑴은 근이 정수라 직접 풀어도 되지만 같은 골조로 처리.
    확인체크 출발점 ★2 · 통찰 1개 → ★2.
  tier: star_2
  mechanism_primary: '$\log_2 x=t$ 치환(⑵는 밑변환 후) → $t_1+t_2$ → $\alpha\beta=2^{t_1+t_2}$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ $16$ ⑵ $4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/115-277.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '⑴의 $-4$·$3$, ⑵의 $-5$·$-2$ 를 바꿀 수 있음. 제약: 판별식 $>0$ 으로 실근 2개를 보장하고, ⑵에서 $\log_x 2$ 를 쓰므로 $x>0$, $x\ne 1$ — 상수항이 $0$ 이면 $t=0$ 즉 $x=1$ 이 나와 정의가 깨진다. 답은 $2^{(\text{두 근의 합})}$ 이라 합이 정수면 답도 정수.'
    creative: '(1) $\alpha\beta$ 대신 $\log_2\alpha\times\log_2\beta$ 를 물으면 곱을 쓰는 형태(★2) (2) 밑을 $\frac{1}{2}$ 로 바꾸면 지수 부호가 뒤집혀 T-부호 함정 추가 (3) 한 근을 주고 나머지·상수를 묻게 하면 117-281 유형(★2).'
```

```yaml
- id: GN-ALG-116-e18
  page: 116
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    $x$ 에 대한 이차방정식 $x^2-(\log a)x-\log a+3=0$ 이 중근을 갖도록 하는 모든 실수 $a$ 의 값의 곱.
  category: '판별식 $D=0$ → $\log a$ 에 대한 이차방정식 → 근과 계수의 관계로 $a$ 들의 곱'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '중근 조건을 이차방정식 판별식 $D=0$ 으로 옮겨 $\log a$ 에 대한 또 하나의 이차방정식을 만듦(방정식 단원 도구 + 로그)'
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '모든 $a$ 의 곱을 $10^{t_1}\times 10^{t_2}=10^{t_1+t_2}$ 로 환원해 두 근을 따로 구하지 않고 합만으로 계산'
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "로그를 계수로 갖는 이차방정식의 중근 조건(판별식) 활용"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $t=\log a$ 로 보면 $D=t^2+4t-12=0$ 이라 이차방정식이 두 겹으로 쌓인 구조다. 답이 「모든 $a$ 의 곱」이라
    $t$ 의 두 근의 합만 있으면 되고 $10^{t_1+t_2}$ 로 한 줄에 끝난다. 두 통찰이 서로 다른 단계에 걸려 있다.
    필수 예제 출발점 ★2 · 통찰 2개 → +1 → ★3.
  tier: star_3
  mechanism_primary: '중근 → $D=0$ → $(\log a)^2+4\log a-12=0$ → 두 근의 합 $-4$ → 모든 $a$ 의 곱 $=10^{-4}$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{1}{10000}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/116-e18.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '일차항·상수항의 $\log a$ 계수를 바꿀 수 있음. 제약: $D=0$ 이 $t$ 에 대한 이차방정식이 되어야 하고 판별식이 양수여야 $a$ 가 두 개 나온다. 답이 $10^{(\text{두 근의 합})}$ 이므로 합이 정수가 되게 계수를 잡을 것. $a>0$ 은 $a=10^t$ 로 자동 충족.'
    creative: '(1) 중근 대신 「서로 다른 두 실근」이나 「실근을 갖지 않도록」으로 바꾸면 부등식이 되어 범위 문제(★3) (2) 모든 $a$ 의 합을 물으면 두 근을 각각 구해야 해서 계산만 늘어남(질 저하) (3) 이차항 계수에도 $\log a$ 를 넣으면 이차방정식 조건(계수 $\ne 0$)이 추가돼 116-278 유형(★3).'
```

```yaml
- id: GN-ALG-116-e19
  page: 116
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    냉각 관계식 $t=-15\log\dfrac{T-k}{T_0-k}$ 에서 $T_0=120$, $k=20$, $t=30$ 일 때 물체의 온도 $T$.
  category: '실생활 관계식에 값 대입 → 로그의 정의 → 일차방정식'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그방정식의 실생활 활용(주어진 관계식에 값 대입)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    관계식이 이미 주어져 있어 학생은 $T_0$, $k$, $t$ 를 넣고 $\log\frac{T-20}{100}=-2$ 를 정의로 푸는 것이 전부다.
    문맥을 식으로 옮기는 모델링 단계가 없어 통찰 카운트 없음. 필수 예제 출발점 ★2 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: '값 대입 → $\log\dfrac{T-20}{100}=-2$ → $\dfrac{T-20}{100}=10^{-2}$ → $T=21$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$21\,^\circ\mathrm{C}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/116-e19.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$T_0$, 실내 온도 $k$, 경과 시간 $t$ 와 계수 $-15$ 를 바꿀 수 있음. 제약: $\frac{t}{-15}$ 가 정수(또는 주어진 로그값으로 계산 가능한 수)여야 $\log$ 안의 값이 $10$ 의 거듭제곱으로 떨어진다. $T>k$ 라야 진수가 양수이고 물리적으로도 냉각이다.'
    creative: '(1) $T$ 를 주고 걸린 시간 $t$ 를 묻도록 뒤집으면 로그값 계산이 필요해 ★2 유지 (2) 두 시점의 온도를 주고 계수($-15$)나 실내 온도 $k$ 를 결정하게 하면 116-279 처럼 상수 결정 단계가 붙어 ★2~3 (3) $\log 2=0.3$ 같은 근삿값을 주고 $10$ 의 거듭제곱이 아닌 값을 쓰게 하면 118-292 유형(★3~4).'
```

```yaml
- id: GN-ALG-116-278
  page: 116
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    이차방정식 $(5\log_2 a-1)x^2+2(1+\log_2 a)x+1=0$ 이 중근을 갖도록 하는 모든 실수 $a$ 의 값의 곱.
  category: '이차항 계수 $\ne 0$ 확인 → $D/4=0$ → $\log_2 a$ 이차방정식 → 근과 계수의 관계'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '중근 조건을 판별식으로 옮겨 $\log_2 a$ 에 대한 이차방정식 $t^2-3t+2=0$ 을 만듦'
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '모든 $a$ 의 곱을 $2^{t_1+t_2}$ 로 환원해 두 근의 합만으로 계산'
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "로그를 계수로 갖는 이차방정식의 중근 조건(이차항 계수 조건 포함)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    e18 의 짝 문항이지만 이차항 계수에도 로그가 있어 「이차방정식이려면 $5\log_2 a-1\ne 0$」을 먼저 확인해야 한다(Mₜ 2).
    $D/4=(1+t)^2-(5t-1)=t^2-3t+2$ 로 정리되고 두 근 $1$, $2$ 는 이차항 조건을 통과한다.
    확인체크 출발점 ★2 · 통찰 2개·M_total 8 → +1 → ★3.
  tier: star_3
  mechanism_primary: '$5\log_2 a-1\ne 0$ 확인 → $D/4=0$ → $(\log_2 a)^2-3\log_2 a+2=0$ → 모든 $a$ 의 곱 $=2^{3}$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/116-278.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '이차항·일차항의 로그 계수($5$, $-1$, $2$, $1$)를 바꿀 수 있음. 제약: $D/4=0$ 이 $t$ 의 이차방정식이 되고 판별식이 양수여야 하며, **두 근 모두 이차항 계수를 $0$ 으로 만들지 않아야** 한다(하나가 걸리면 기각이 생겨 I-VF 가 추가되고 ★가 올라감). 답은 $2^{(\text{두 근의 합})}$.'
    creative: '(1) 계수를 조정해 한 근이 이차항 계수를 $0$ 으로 만들게 하면 기각 단계가 생겨 ★4 (2) 「중근」을 「서로 다른 두 실근」으로 바꾸면 $t$ 의 부등식(범위) 문제 ★3 (3) 밑을 $10$ 으로 바꾸면 e18 과 완전히 같은 골조.'
```

```yaml
- id: GN-ALG-116-279
  page: 116
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    연령 $a$ 와 길이 $l$ 의 관계식 $a=-2\log_k\left(1-\dfrac{l}{30}\right)-0.3$ 에서 $a=1.7$, $l=10$ 으로 상수 $k$ 를 먼저 정한 뒤 $a=3.7$ 일 때의 길이.
  category: '조건 대입으로 상수 $k$ 결정 → 같은 식에 재대입 → 로그의 정의'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그 관계식의 미지 상수 결정 후 재대입(실생활 활용)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    같은 관계식을 두 번 쓰는 2단 구조 — 첫 조건으로 $\log_k\frac{2}{3}=-1$ 에서 $k=\frac{3}{2}$ 를 얻고,
    그 $k$ 로 $\log_k\left(1-\frac{l}{30}\right)=-2$ 를 푼다. 미지 상수 결정은 이 단원의 표준 절차라 통찰 카운트 없음.
    확인체크 출발점 ★2 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: '$a=1.7$, $l=10$ 대입 → $\log_k\dfrac{2}{3}=-1$ → $k=\dfrac{3}{2}$ → $a=3.7$ 재대입 → $1-\dfrac{l}{30}=\left(\dfrac{3}{2}\right)^{-2}$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{50}{3}\,\mathrm{cm}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/116-279.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '기준 길이 $30$, 계수 $-2$, 상수 $-0.3$ 과 두 연령($1.7$, $3.7$)을 바꿀 수 있음. 제약: 두 연령의 차 때문에 $\log_k$ 값이 정수 차이가 나야 $k$ 의 거듭제곱으로 떨어진다. $1-\frac{l}{30}>0$ 즉 $l<30$ 이어야 진수가 양수 — 답이 기준 길이를 넘지 않게 할 것.'
    creative: '(1) $k$ 를 주고 길이만 묻게 하면 1단으로 줄어 ★1~2 (2) 길이를 주고 연령을 묻도록 뒤집으면 로그값 계산이 필요(★2) (3) $k$ 가 정수가 아니게 잡고 $\log$ 근삿값을 제공하면 118-292 처럼 값 맞추기 통찰이 추가돼 ★3.'
```


### 연습문제 STEP 1

```yaml
- id: GN-ALG-117-280
  page: 117
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    방정식 $\log x+\log (4-x)^2=\log (14-3x)$ 를 만족시키는 모든 실수 $x$ 의 값의 합.
  category: '로그 성질로 삼차방정식화 → 근의 합 → 진수조건으로 근 유효성 확인'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '진수끼리 놓으면 삼차방정식이 되고, 근이 무리수를 포함하므로 삼차방정식 근과 계수의 관계(또는 인수분해 후 합)로 합을 구함'
    - step: 3
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '세 근이 모두 $x>0$, $x\ne 4$, $x<\frac{14}{3}$ 을 만족하는지 확인해야 합을 그대로 쓸 수 있음(하나라도 걸리면 답이 달라짐)'
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "진수가 곱·제곱인 로그방정식(삼차) + 근의 합"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $x(4-x)^2=14-3x$ 를 정리하면 삼차방정식이고 $(x-2)(x^2-6x+7)=0$ 으로 갈라진다.
    무리근 두 개가 진수조건 범위 안에 있는지 확인하는 단계가 답을 좌우한다.
    STEP 1 출발점 ★2 · 통찰 2개(XU d1 + VF d1)·M_total 7 → +1 → ★3.
    [분류 이슈] 벤더 STEP 1(★2 신호)보다 한 단 높게 판정 — 삼차·무리근·조건 확인 부담 때문.
  tier: star_3
  mechanism_primary: '$\log$ 성질로 $x(4-x)^2=14-3x$ → 삼차방정식 → 세 근이 진수조건을 모두 만족 → 합 $=8$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/117-280.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '우변의 $14-3x$ 와 진수 안의 $4$ 를 바꿀 수 있음. 제약: 삼차방정식이 유리근 하나를 갖도록(인수정리로 떨어지도록) 상수를 잡고, 나머지 이차인수의 판별식 부호로 실근 개수를 통제한다. 세 근이 모두 진수 범위 안이면 합은 삼차 계수 관계로 바로 나오고, 하나가 범위 밖이면 답이 달라지므로 의도를 명확히 할 것.'
    creative: '(1) 근 하나가 $x=4$(진수 $(4-x)^2=0$)가 되게 만들면 기각이 필수가 되어 I-VF 가 강해지고 ★4 (2) $(4-x)^2$ 을 $(4-x)$ 로 바꾸면 이차로 내려가 ★2 (3) 합 대신 곱을 물으면 삼차 근과 계수의 관계 다른 항을 쓰게 됨(★3 유지).'
```

```yaml
- id: GN-ALG-117-281
  page: 117
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    방정식 $(\log_2 x)^2-\log_2 x^4+k=0$ 의 한 근이 $2$ 일 때 다른 한 근($k$ 는 상수).
  category: '한 근 대입 → 상수 $k$ 결정 → 치환 이차방정식 다시 풀기'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '$\log_a x$ 치환 방정식에서 한 근이 주어졌을 때 다른 근'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $x=2$ 를 넣어 $1-4+k=0$ 에서 $k=3$ 을 얻고, $t^2-4t+3=0$ 의 남은 근 $t=3$ 에서 $x=8$.
    한 근 대입으로 미정계수를 정하는 표준 절차라 통찰 카운트 없음(근과 계수의 관계로 $t_1+t_2=4$ 를 써도 같은 한 줄).
    STEP 1 출발점 ★2 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: '$x=2$ 대입 → $k=3$ → $\log_2 x=t$ 치환 이차방정식 → 남은 근 $t=3$ → $x=8$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/117-281.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '주어진 근($2$)과 $\log_2 x^4$ 의 지수($4$)를 바꿀 수 있음. 제약: 주어진 근의 로그값이 정수라야 $k$ 가 정수로 나오고, $t$ 의 나머지 근도 정수라야 답이 밑의 거듭제곱으로 떨어진다. 두 근이 같아지는 $k$(중근)는 「다른 한 근」이라는 발문과 어긋나므로 피할 것.'
    creative: '(1) 다른 근 대신 $k$ 를 묻게 하면 한 단계로 줄어 ★1~2 (2) 두 근의 곱이 주어진 형태로 바꾸면 117-284 유형(I-XU ★2) (3) 근 하나를 무리수로 주면 근과 계수의 관계가 필수가 되어 ★3.'
```

```yaml
- id: GN-ALG-117-282
  page: 117
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    로그 연립방정식 $\log_2 x^2-2\log_2 y=3$, $\log_2 x^3+\log_2 y=\dfrac{1}{2}$ 의 해가 $x=\alpha$, $y=\beta$ 일 때 $\dfrac{\alpha^2}{\beta^2}$ 의 값.
  category: '$\log_2 x=X$, $\log_2 y=Y$ 치환 → 일차연립 → 구하는 값의 로그로 되읽기'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '구하는 $\log_2\dfrac{\alpha^2}{\beta^2}$ 가 첫 번째 식의 좌변 그 자체임을 알아채면 연립을 풀지 않고 $3$ 에서 바로 답'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "로그 연립방정식(치환 후 일차연립)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $\log_2 x^2-2\log_2 y$ 는 곧 $\log_2\frac{x^2}{y^2}$ 이므로 첫 식만으로 $\frac{\alpha^2}{\beta^2}=2^3=8$ 이 나온다.
    이 착안이 없어도 $X=\frac{1}{2}$, $Y=-1$ 을 구해 같은 답에 도달하므로 난이도를 끌어올리지는 않는다(깊이 2·통찰 1).
    STEP 1 출발점 ★2 · 통찰 1개 → ★2 유지.
  tier: star_2
  mechanism_primary: '$\log_2\dfrac{\alpha^2}{\beta^2}=\log_2 x^2-2\log_2 y=3$ → $\dfrac{\alpha^2}{\beta^2}=8$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/117-282.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 식의 우변($3$, $\frac{1}{2}$)과 $x$, $y$ 의 지수를 바꿀 수 있음. 제약: 연립의 계수행렬이 정칙이라야 해가 하나로 정해지고, 구하는 값이 두 식의 정수배 결합으로 표현되면 답이 $2$ 의 정수 거듭제곱이 된다. $x>0$, $y>0$ 은 $x=2^X$ 로 자동 충족.'
    creative: '(1) 묻는 값을 $\alpha\beta$ 나 $\alpha^3\beta$ 로 바꾸면 두 식을 조합해야 해서 착안이 한 단계 더 필요(★3) (2) 한 식을 $\log_2 x\times\log_2 y=c$ 같은 곱 형태로 두면 연립이 이차가 되어 ★3 (3) 밑이 다른 두 로그를 섞으면 밑 통일이 추가돼 ★3.'
```

```yaml
- id: GN-ALG-117-283
  page: 117
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    방정식 $5^{\log x}\times x^{\log 5}-6\times 5^{\log x}+5=0$ 의 모든 근의 합.
  category: '$x^{\log 5}=5^{\log x}$ 로 항 통일 → 치환 이차방정식 → 되돌려 합'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$x^{\log 5}=5^{\log x}$ 항등식을 알아채야 서로 달라 보이는 두 항이 같은 문자 $u$ 로 묶여 $u^2-6u+5=0$ 이 됨'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '$a^{\log b}=b^{\log a}$ 를 이용한 지수·로그 혼합 방정식'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    항등식을 쓰기 전에는 손댈 곳이 없고, 쓰고 나면 $u=1$, $5$ 에서 $\log x=0$, $1$ 즉 $x=1$, $10$ 으로 한 줄에 끝난다.
    진입 장벽은 뚜렷하지만 그 뒤가 짧아 M_total 5. STEP 1 출발점 ★2 · 통찰 1개(깊이 2) → ★2 유지.
  tier: star_2
  mechanism_primary: '$x^{\log 5}=5^{\log x}=u$ → $u^2-6u+5=0$ → $\log x=0$ 또는 $1$ → 근의 합 $1+10$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$11$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/117-283.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑 $5$ 와 이차식의 계수($-6$, $5$)를 바꿀 수 있음. 제약: $u$ 의 두 근이 그 밑의 정수 거듭제곱이라야 $\log x$ 가 정수로 떨어진다($u=1$ 은 항상 $\log x=0$). 근이 음수가 되면 $u=5^{\log x}>0$ 에 어긋나 기각이 생기므로 의도하지 않으면 피할 것.'
    creative: '(1) $u$ 의 한 근이 음수가 되게 계수를 잡으면 기각 단계가 생겨 I-VF 추가·★3 (2) 근의 합 대신 곱을 물으면 $\log$ 합으로 환원되어 I-XU 추가(★3) (3) 밑을 $3$ 으로 바꾸고 항을 하나 더 붙이면 115-276⑶ 과 같은 골조.'
```

```yaml
- id: GN-ALG-117-284
  page: 117
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    방정식 $(\log x)^2-k\log x-2=0$ 의 두 근의 곱이 $10$ 일 때 상수 $k$ 의 값.
  category: '두 근의 곱 조건 → $\log(\alpha\beta)$ → 근과 계수의 관계로 $k$ 결정'
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '$\alpha\beta=10$ 이라는 $x$ 쪽 조건을 $\log\alpha+\log\beta=1$ 즉 $t$ 의 두 근의 합으로 옮겨 근과 계수의 관계에 연결'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 근의 곱 조건으로 상수 결정(근과 계수의 관계)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $x$ 의 근의 곱과 $t=\log x$ 의 근의 합이 대응한다는 한 줄이 전부다 — $\log(\alpha\beta)=\log 10=1=k$.
    역방향이지만 대입 한 번이라 단계 수는 작다. STEP 1 출발점 ★2 · 통찰 1개 → ★2.
  tier: star_2
  mechanism_primary: '$\log(\alpha\beta)=t_1+t_2=k$ 이고 $\alpha\beta=10$ → $k=1$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/117-284.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 근의 곱($10$)과 상수항($-2$)을 바꿀 수 있음. 제약: 곱을 $10$ 의 거듭제곱으로 줘야 $k$ 가 정수로 떨어지고, 판별식 $k^2+8>0$ 은 자동이지만 상수항을 양수로 바꾸면 실근 조건을 따로 확인해야 한다.'
    creative: '(1) 곱 대신 「두 근의 비가 $100$」 같은 조건을 주면 합·차가 함께 필요해 ★3 (2) 밑을 $2$ 로 바꾸면 조건 값도 $2$ 의 거듭제곱이어야 함 (3) $k$ 대신 상수항을 미지수로 두면 곱이 아니라 근의 곱 관계를 써야 해 다른 골조(★2~3).'
```

```yaml
- id: GN-ALG-117-285
  page: 117
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    방정식 $\log_3 3x\times\log_3 9x-1=0$ 의 두 근 $\alpha$, $\beta$ 에 대한 $\alpha\beta$ 의 값.
  category: '$\log_3 x=t$ 로 전개 → 이차방정식 → 근과 계수의 관계로 $\alpha\beta$'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 2
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '$t^2+3t+1=0$ 의 근이 무리수라 직접 구할 수 없고, 두 근의 합 $-3$ 을 $\log_3(\alpha\beta)$ 로 되읽어야 함'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '$\log_3 3x\times\log_3 9x$ 꼴 전개 후 근과 계수의 관계'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $\log_3 3x=1+t$, $\log_3 9x=2+t$ 로 풀어 쓰면 $(1+t)(2+t)=1$ 즉 $t^2+3t+1=0$.
    근이 무리수여서 합만 쓰는 e17·277 과 같은 골조다. STEP 1 출발점 ★2 · 통찰 1개 → ★2.
  tier: star_2
  mechanism_primary: '$\log_3 x=t$ → $(1+t)(2+t)=1$ → $t_1+t_2=-3$ → $\alpha\beta=3^{-3}$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{1}{27}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/117-285.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 진수의 계수($3x$, $9x$)와 우변 상수($1$)를 바꿀 수 있음. 제약: 계수가 밑의 거듭제곱이라야 $1+t$, $2+t$ 처럼 깔끔하게 분리되고, 판별식 $>0$ 이라야 실근 2개. 답은 $3^{-(\text{일차항 계수})}$ 이므로 정수 답을 원하면 계수를 정수로 유지.'
    creative: '(1) $\alpha\beta$ 대신 $\alpha+\beta$ 를 물으면 근을 직접 구해야 해서 골조가 무너짐(권장하지 않음) (2) 세 로그의 곱으로 늘리면 삼차 근과 계수의 관계(★3) (3) 우변을 미지수 $k$ 로 두고 $\alpha\beta$ 값을 조건으로 주면 역방향(★3).'
```

### 연습문제 STEP 2

```yaml
- id: GN-ALG-117-286
  page: 117
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    방정식 $\log_3 \{\log_2 (\log_k x)\}=0$ 의 해가 $x=49$ 일 때 상수 $k$ 의 값.
  category: '바깥 로그부터 정의로 벗기기 → $x=k^2$ → 밑 조건으로 후보 기각'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 3
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '$k^2=49$ 에서 $k=\pm 7$ 두 후보가 나오고 밑 조건 $k>0$, $k\ne 1$ 로 $k=-7$ 을 기각해야 함'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "중첩 로그방정식(바깥부터 벗기기) + 밑 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $\log_3 A=0 \Rightarrow A=1$, $\log_2 B=1 \Rightarrow B=2$, $\log_k x=2 \Rightarrow x=k^2$ 로 세 겹을 차례로 벗기는 구조.
    각 단계는 정의 한 번이지만 로그가 세 겹이라 순서를 놓치기 쉽고 마지막에 밑 조건 기각이 있다.
    STEP 2 출발점 ★3 · 통찰 1개·M_total 6 → 조정 없이 ★3.
    [분류 이슈] 각 단계가 정의 한 번뿐이라 절차 난이도만 보면 ★2 후보 — 라벨은 벤더 신호대로 ★3 유지.
  tier: star_3
  mechanism_primary: '$\log_3\{\cdot\}=0$ → $\log_2(\log_k x)=1$ → $\log_k x=2$ → $k^2=49$ → 밑 조건으로 $k=7$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/117-286.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '세 밑($3$, $2$, $k$)과 주어진 해($49$)를 바꿀 수 있음. 제약: 안쪽으로 벗겨 나올 때마다 값이 양수여야 하고, 마지막 $x=k^n$ 에서 $x$ 가 완전제곱수(또는 $n$ 제곱수)라야 $k$ 가 정수. $n$ 이 짝수일 때만 $\pm$ 후보가 생겨 기각 단계가 살아난다.'
    creative: '(1) $x$ 를 묻고 $k$ 를 주면 기각이 사라져 ★2 (2) 가장 바깥 로그의 값을 $0$ 이 아닌 $1$ 로 두면 한 단계가 더 늘어남(★3) (3) 중간 로그의 밑을 미지수로 두면 조건이 두 겹이 되어 ★4.'
```

```yaml
- id: GN-ALG-118-287
  page: 118
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    방정식 $\log_{x+9} (x-1)=\log_{x^2-2x+5} (x-1)$ 의 모든 근의 합.
  category: '진수가 같고 밑이 다른 로그의 상등 → 진수 $=1$ 갈래 / 밑이 같은 갈래 → 조건으로 기각'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '같은 진수의 두 로그가 같을 조건이 「진수가 $1$ 이라 양변이 $0$」과 「두 밑이 같다」 두 갈래로 갈리고 둘 다 따져야 함'
    - step: 3
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '밑 갈래에서 나온 $x=-1$ 은 진수 $x-1>0$ 을 어겨 기각되고 $x=4$ 만 남음'
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "진수가 같고 밑이 다른 로그방정식(두 갈래 + 조건 기각)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    갈래 1은 $x-1=1$ 에서 $x=2$, 갈래 2는 $x+9=x^2-2x+5$ 에서 $x=4$ 또는 $-1$ 이고 $-1$ 은 진수조건 위배로 기각된다.
    갈래가 둘뿐이고 각각 한 줄이라 +1 을 적용하지 않았다. STEP 2 출발점 ★3 · 통찰 2개 → ★3 유지.
    [분류 이슈] 통찰 2개 규칙만 보면 ★4 후보 — 갈래 구조가 정형화돼 있어 ★3 으로 둠.
  tier: star_3
  mechanism_primary: '진수 $=1$ 갈래($x=2$) + 밑이 같은 갈래($x^2-3x-4=0$) → 진수·밑 조건으로 $x=-1$ 기각 → 합 $2+4$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/118-287.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 밑($x+9$, $x^2-2x+5$)의 계수와 진수($x-1$)를 바꿀 수 있음. 제약: 두 밑을 같게 놓은 이차방정식이 정수근을 갖게 하고, 밑은 항상 $>0$, $\ne 1$ 이어야 하며 진수 $=1$ 갈래의 해도 두 밑 조건을 통과해야 한다. 근 하나가 조건에 걸리도록 설계해야 기각 단계가 산다.'
    creative: '(1) 밑 하나를 상수로 두면 갈래가 하나로 줄어 ★2 (2) 진수도 서로 다르게 하면 갈래 구조가 깨져 다른 유형이 됨 (3) 「모든 근의 곱」이나 「근의 개수」를 물으면 기각 판단이 답에 직접 반영돼 ★4 후보.'
```

```yaml
- id: GN-ALG-118-288
  page: 118
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    방정식 $x^{\log_{0.1} x}=\dfrac{1}{1000x^2}$ 의 서로 다른 두 실근 $\alpha$, $\beta$ 에 대한 $\alpha\beta$ 의 값.
  category: '양변 상용로그 → $\log_{0.1}x=-\log x$ → 이차방정식 → 근과 계수의 관계'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '지수 자리의 로그를 끌어내리려 양변에 상용로그를 취하고 $\log_{0.1}x=-\log x$ 로 밑을 맞춤'
    - step: 3
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '두 근을 각각 구하지 않고 $t$ 의 두 근의 합 $2$ 에서 $\log(\alpha\beta)=2$ 로 바로 읽음'
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "지수에 로그가 있는 방정식 + 근과 계수의 관계(두 근의 곱)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    양변에 $\log$ 를 취하면 $(\log_{0.1}x)(\log x)=-3-2\log x$ 이고 $\log_{0.1}x=-\log x$ 를 넣으면 $t^2-2t-3=0$.
    e16 계열(양변 로그)과 e17 계열(근과 계수)이 겹친 합성 유형이다.
    STEP 2 출발점 ★3 · 통찰 2개(둘 다 이 단원 표준 도구) → ★3 유지.
  tier: star_3
  mechanism_primary: '양변 $\log$ → $-t^2=-3-2t$ → $t^2-2t-3=0$ → $t_1+t_2=2$ → $\alpha\beta=10^2$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$100$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/118-288.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '우변의 $1000$ 과 $x^2$ 의 지수, 밑 $0.1$ 을 바꿀 수 있음. 제약: 밑을 $0.1$ 로 두면 부호가 뒤집혀 $t^2$ 의 계수가 음수가 되므로 정리 후 이차방정식의 판별식이 양수인지 확인할 것. 답은 $10^{(\text{두 근의 합})}$ 이므로 합이 정수가 되게 계수를 잡는다.'
    creative: '(1) 밑을 $10$ 으로 바꾸면 부호 함정이 사라져 ★2~3 (2) $\alpha\beta$ 대신 $\alpha$, $\beta$ 를 각각 구하게 하면 근과 계수의 관계가 필요 없어져 통찰 1개 (3) 우변을 $x$ 의 다른 거듭제곱으로 두고 두 근의 비를 물으면 합·차가 모두 필요해 ★4.'
```

```yaml
- id: GN-ALG-118-289
  page: 118
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    $(\log x)^2-6\log x-2=0$ 의 두 근을 $\alpha$, $\beta$ 라 할 때, 두 근이 $\dfrac{1}{\alpha}$, $\dfrac{1}{\beta}$ 인 방정식 $(\log x)^2-p\log x+q=0$ 의 상수 $p$, $q$ 에 대한 $p-q$.
  category: '근의 역수 조건을 $t$ 세계의 부호 반전으로 옮기기 → 두 방정식의 근과 계수의 관계 비교'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '근이 $\frac{1}{\alpha}$, $\frac{1}{\beta}$ 라는 $x$ 쪽 조건을 $\log\frac{1}{\alpha}=-\log\alpha$ 로 옮겨 $t$ 의 근이 $-t_1$, $-t_2$ 임을 확인'
    - step: 2
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '두 방정식 모두 $t$ 에 대한 이차방정식으로 보고 근과 계수의 관계로 $p=-(t_1+t_2)$, $q=t_1t_2$ 를 읽음'
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "근의 역수를 근으로 갖는 로그방정식(근과 계수의 관계 비교)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $x$ 의 역수가 $t=\log x$ 에서는 부호 반전이라는 대응을 찾는 것이 핵심이고, 그 뒤는 $t_1+t_2=6$, $t_1t_2=-2$ 에서
    $p=-6$, $q=-2$ 로 바로 나온다. $\alpha$, $\beta$ 를 실제로 구하면 무리수라 길이 막힌다.
    STEP 2 출발점 ★3 · 통찰 2개 → ★3 유지.
  tier: star_3
  mechanism_primary: '$\log\dfrac{1}{\alpha}=-\log\alpha$ → 새 방정식의 $t$ 근은 $-t_1$, $-t_2$ → $p=-(t_1+t_2)=-6$, $q=t_1t_2=-2$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/118-289.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '첫 방정식의 계수($-6$, $-2$)를 바꿀 수 있음. 제약: 판별식 $>0$ 으로 실근 2개를 보장하고, **두 근이 무리수로 남게** 해야 근과 계수의 관계를 쓰는 골조가 유지된다. 답 $p-q$ 가 정수이려면 계수를 정수로 둘 것.'
    creative: '(1) 새 근을 $\alpha^2$, $\beta^2$ 로 바꾸면 $t$ 가 $2$배가 되어 $p=2(t_1+t_2)$ — 같은 골조 ★3 (2) 새 근을 $\alpha\beta$, $\frac{\alpha}{\beta}$ 로 두면 합·차가 모두 필요해 ★4 (3) $p$, $q$ 중 하나만 주고 나머지를 묻게 하면 단계가 줄어 ★2~3.'
```

### 연습문제 실력 UP

```yaml
- id: GN-ALG-118-290
  page: 118
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    방정식 $\log_2 (x+2)+\log_2 (4-x)=\log_2 a$ 를 만족시키는 실수 $x$ 가 존재하도록 하는 정수 $a$ 의 개수.
  category: '진수조건으로 정의역 확정 → 해 존재 조건을 이차함수의 치역으로 전환 → 정수 개수'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '「해가 존재한다」를 「$-2<x<4$ 에서 $(x+2)(4-x)=a$ 가 해를 갖는다」 즉 $a$ 가 그 함수의 치역에 든다로 동치 변환'
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '대수 조건을 $y=-(x-1)^2+9$ 그래프의 열린구간 위 치역 $(0,\,9]$ 로 옮겨 읽음'
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "로그방정식의 실근 존재 조건(진수조건 아래 이차함수의 치역)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    진수조건이 정의역 $-2<x<4$ 를 만들고, 그 열린구간에서 $(x+2)(4-x)$ 의 값은 $0$ 은 못 되고 최댓값 $9$ 는 되므로
    치역이 $(0,\,9]$ — 양 끝 포함 여부가 곧 답의 개수를 바꾼다. 정수 $a$ 는 $1$ 부터 $9$ 까지.
    실력 UP 출발점 ★4 · 통찰 2개(저노출 I-RT 포함) → ★4.
  tier: star_4
  mechanism_primary: '진수조건 $-2<x<4$ → $(x+2)(4-x)=a$ 의 치역 $(0,\,9]$ → 정수 $a=1,\dots,9$ → $9$ 개'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$9$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/118-290.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 진수($x+2$, $4-x$)의 상수를 바꿀 수 있음. 제약: 두 진수의 공통 정의역이 열린구간이라야 치역의 아래 끝이 열리고, 꼭짓점의 $y$ 값(최댓값)이 정수라야 개수가 깔끔하다. 최댓값이 정수가 아니면 정수 개수는 내림으로 바뀐다 — T-경계 관리가 핵심.'
    creative: '(1) 「서로 다른 두 실근을 갖도록」으로 바꾸면 치역이 아니라 $0<a<9$ 열린 범위가 되어 개수가 달라짐(★4 유지) (2) 한 진수를 이차식으로 두면 사차함수 치역이 되어 ★5 후보 (3) $a$ 를 자연수가 아닌 실수 범위로 물으면 답이 구간이 되어 ★3.'
```

```yaml
- id: GN-ALG-118-291
  page: 118
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    방정식 $\left(\dfrac{x}{4}\right)^{\log_5 4}-\left(\dfrac{x}{3}\right)^{\log_5 3}=0$ 의 해($x>0$).
  category: '양변에 $\log_5$ → $\log_5 x$ 에 대한 일차방정식 → 대칭 구조 약분'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '지수와 밑 양쪽에 미지수가 섞인 식이라 양변에 $\log_5$ 를 취해 $X=\log_5 x$ 에 대한 일차방정식으로 옮겨야 진행됨'
    - step: 2
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$a=\log_5 4$, $b=\log_5 3$ 으로 두면 $a(X-a)=b(X-b)$ 라는 대칭꼴이고 $(a-b)X=a^2-b^2$ 을 $a-b$ 로 약분해 $X=a+b$ 를 한 줄에 얻음'
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: '지수와 밑에 로그가 섞인 방정식(양변 로그 후 대칭 약분)'
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    두 항을 각각 $\log_5$ 로 옮기면 $\log_5 4\,(X-\log_5 4)=\log_5 3\,(X-\log_5 3)$ 이고, 좌우가 같은 모양이라
    차를 잡아 $a^2-b^2=(a+b)(a-b)$ 로 약분하면 $X=\log_5 4+\log_5 3=\log_5 12$. 약분을 보지 못하면 수치로는 못 푼다.
    실력 UP 출발점 ★4 · 통찰 2개(깊이 2·I-SYM 포함) → ★4. ★5 는 통찰 3개 이상이 필요해 해당 없음.
  tier: star_4
  mechanism_primary: '양변 $\log_5$ → $a(X-a)=b(X-b)$ → $(a-b)X=(a+b)(a-b)$ → $X=\log_5 12$ → $x=12$'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$x=12$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/118-291.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 수($4$, $3$)와 로그의 밑($5$)을 바꿀 수 있음. 제약: 두 수가 서로 달라야 $a-b\ne 0$ 으로 약분이 성립하고, 답은 항상 두 수의 곱($x=4\times 3$)이 된다 — 이 구조가 이 문항의 정체다. 밑 $5$ 는 계산에 쓰이지 않으므로 아무 값이나 가능.'
    creative: '(1) 세 항으로 늘리면 대칭 구조가 깨져 다른 도구가 필요(설계 주의) (2) 지수를 $\log_5 4$ 대신 $\log_4 5$ 로 바꾸면 약분이 되지 않아 골조가 무너짐 (3) 답을 「$x$ 의 각 자리 수의 합」처럼 한 겹 더 묻는 형태로 바꾸면 ★4 유지 (4) 두 수를 미지수 $m$, $n$ 으로 일반화하면 $\mathrm{M_a}$ 가 올라 ★5 후보.'
```

```yaml
- id: GN-ALG-118-292
  page: 118
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    정수 시설을 $1$번 가동할 때마다 불순물의 $x\,\%$ 가 제거되고 $10$번 가동 후 처음의 $10\,\%$ 가 될 때 $x$ 의 값($\log 80=1.9$).
  category: '남는 비율의 거듭제곱으로 모델링 → 상용로그 → 주어진 로그값으로 되맞추기'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '「$x\,\%$ 제거」를 「$1-\frac{x}{100}$ 배가 남는다」로 바꿔 $\left(1-\frac{x}{100}\right)^{10}=0.1$ 이라는 지수식으로 모델링'
    - step: 3
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$\log\left(1-\frac{x}{100}\right)=-0.1$ 을 주어진 $\log 80=1.9$ 에서 만든 $\log 0.8=-0.1$ 과 맞춰 $1-\frac{x}{100}=0.8$ 로 결정'
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "반복 감소 비율의 로그방정식(주어진 로그값 활용 실생활)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    제거율을 남는 비율로 뒤집어 거듭제곱 모델을 세우는 것이 첫 관문이고, 양변에 상용로그를 취하면 $\log$ 값이
    $-0.1$ 이라는 어정쩡한 수로 나온다. 주어진 $\log 80=1.9$ 에서 $\log 8=0.9$, $\log 0.8=-0.1$ 을 끌어내 맞추는 것이 두 번째 관문.
    실력 UP 출발점 ★4 · 통찰 2개(저노출 I-RT 포함) → ★4.
    [분류 이슈] 모델을 세우고 나면 계산이 짧아 ★3 후보이기도 함 — 라벨은 벤더 신호대로 ★4 유지.
  tier: star_4
  mechanism_primary: '$\left(1-\dfrac{x}{100}\right)^{10}=0.1$ → $\log\left(1-\dfrac{x}{100}\right)=-0.1=\log 0.8$ → $x=20$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$20$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/118-292.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '가동 횟수($10$), 남은 비율($10\,\%$), 제공되는 로그값($\log 80=1.9$)을 바꿀 수 있음. 제약: $\frac{\log(\text{남은 비율})}{\text{횟수}}$ 가 제공된 로그값으로 복원 가능한 수여야 한다($-0.1=\log 0.8$ 처럼). 제공 로그값과 답이 어긋나면 풀 수 없으므로 세 수를 함께 설계할 것. $0<x<100$.'
    creative: '(1) $x$ 를 주고 몇 번 가동해야 하는지 묻도록 뒤집으면 횟수가 미지수가 되어 ★4 유지 (2) 제거율이 회차마다 달라지면 골조가 무너짐(설계 주의) (3) 로그값 제공을 $\log 2=0.3$ 으로 바꾸면 $\log 0.8=3\log 2-1$ 을 조립해야 해 I-EQV 깊이가 올라감(★4~5).'
```

## 표본 판정 요약 (29문)

- ★ 분포: ★1 4 · ★2 13 · ★3 9 · ★4 3 · ★5 0
- 통찰형 20 · 절차형 9 · premium 0
- 통찰 유형 분포(연인원 32): I-XU 8 · I-EQV 9 · I-VF 6 · I-RT 6 · I-MI 1 · I-SYM 1 · I-BW 0 · I-PD 0 · I-CON 0 · I-SC 0
- type_hint 상위: 「로그의 정의·밑 통일 기본형」 5(270·271·272·e14·274) · 「근과 계수의 관계로 두 근의 곱·상수」 6(e17·277·284·285·288·289) · 「$\log_a x$ 치환 반복꼴」 4(273·e15·275·281) · 「지수에 로그가 포함된 방정식」 4(e16·276·283·291) · 「실생활 활용」 3(e19·279·292) · 「판별식·이차방정식 활용」 2(e18·278)
- 대상층: 하위권 4 · 중하위권 5 · 중위권 4 · 중상위권 15 · 상위권 1
- 그림: 없음(이 범위 29문 전부 `figure: none`)
- M_total 범위 4~8(평균 약 6.1) · depth_score 최대 2.00(282·283·291)

## 분류 이슈 목록

판정이 애매하거나 벤더 신호와 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-ALG-113-274 · GN-ALG-114-275 등 확인체크 6문 | 「확인체크」 태그는 개념 확인(★1) 신호로도 읽히지만, 이 단원에서는 필수 예제 바로 뒤에 붙은 짝 문항이라 출발점을 ★2 로 잡았다. 카탈로그 설계 때 확인체크의 기본 ★를 정할 것 | ★1 / ★2 |
| GN-ALG-117-280 | 벤더 STEP 1(★2 신호)이나 삼차방정식·무리근·세 근 조건 확인으로 ★3 판정(1단 위) | ★2 / ★3 |
| GN-ALG-117-286 | 벤더 STEP 2(★3)이나 각 단계가 로그의 정의 한 번씩이라 절차 난이도만 보면 ★2. 라벨은 ★3 유지 | ★2 / ★3 |
| GN-ALG-118-287 | 통찰 2개(MI d2 + VF d1) 규칙만 보면 +1 로 ★4 후보이나 두 갈래 구조가 정형화돼 있어 ★3 유지 | ★3 / ★4 |
| GN-ALG-118-292 | 실력 UP(★4)이나 모델을 세운 뒤 계산이 짧아 ★3 후보. 라벨은 벤더 신호대로 ★4 유지 | ★3 / ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: ⑴ 「근과 계수의 관계로 두 근의 곱」(e17·277·284·285·288·289 — 이 범위에서 가장 반복이 많고, $t$ 의 근이 무리수라 직접 풀이가 막히는 것이 유형의 정체다. base ★2~3) ⑵ 「지수에 로그가 포함된 방정식」(e16·276·283·291 — 양변 로그와 $a^{\log b}=b^{\log a}$ 항등식이 별개의 진입 장벽이라 두 하위 유형으로 나눌 수도 있음. base ★3) ⑶ 「로그를 계수로 갖는 이차방정식의 판별식 조건」(e18·278 — 이차항 계수 조건 유무로 ★가 한 단 갈림) ⑷ 「실근 존재 조건 → 치역」(290 단독이지만 로그부등식 단원과 묶이는 상위 유형) ⑸ 「진수가 같고 밑이 다른 로그의 상등」(287 — 갈래 구조가 고유).
- **통합해도 될 유형**: 「로그의 정의 기본형」(270·271·272)과 「밑이 같은 로그방정식」은 한 유형의 난이도 층으로 묶어도 된다. 「$\log_a x$ 치환」(273·e15·275·281)도 이차·삼차·상수 결정을 한 유형의 변형으로 두는 편이 슬롯 관리에 편하다.
- **감쇠 후보**: 이 단원에서 I-XU(근과 계수의 관계)와 I-VF(진수조건 기각)는 학습 자산화가 빠른 상위 2유형이므로, 카탈로그 적용 시 §2.9 감쇠 대상으로 두고 depth 3 자동 강등을 검토할 것. 이 파일에서는 두 유형을 이미 보수적으로 d1 로만 매겼다.
