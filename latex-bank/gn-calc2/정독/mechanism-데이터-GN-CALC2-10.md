---
name: mechanism-데이터-GN-CALC2-10
description: 개념원리 미적분Ⅱ 10 지수함수와 로그함수의 도함수(1/1 · 84~89쪽 · 24문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 미적분Ⅱ (학생용 PDF) · 전사본 latex-bank/gn-calc2
  section: 10 지수함수와 로그함수의 도함수
  unit_code: CALC2-10
  part: "1/1"
  extract_range: "84~89쪽 · 84-e9~89-184"
  total_problems: 24
  unit_total: 24
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X 3층). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·tag·level)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). depth_score 는 insights 의 effective_depth 합. insight_type 은 insights 가 비어 있으면 절차형, 하나라도 있으면 통찰형. anchor_status 는 null. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-calc2/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-calc2/items/<id>.tex
  image_source: latex-bank/gn-calc2/figures/ (이 범위에는 그림 문항 없음)
---

# 개념원리 미적분Ⅱ · 10 지수함수와 로그함수의 도함수 (1/1) 정독 데이터 (v1.0)

이 파일은 84~89쪽 24문항 전수를 다룬다. 구역은 「필수·발전 예제」(필수 예제 4 + 확인체크 8) · 「연습문제 STEP 1」 6 · 「연습문제 STEP 2」 4 · 「연습문제 실력 UP」 2 이고, 벤더 난이도 신호는 구역과 tag(필수 · 확인체크 · 교육청 기출) · level(STEP 1 · STEP 2 · 실력 UP)로 읽었다. ★ 출발점은 확인체크 ★1 · 필수 예제와 STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4 이며, 여기서 M_total 과 통찰로 ±1 조정했다.

이 단원은 합성함수의 미분법 이전 단계라서 $a^{mx+n}$ 은 지수법칙으로 $(a^m)^x\cdot a^n$ 꼴로, $\log_a (kx)^m$ 은 로그의 성질로 상수와 $\log_a x$ 로 분해한 뒤 미분한다. 이 분해는 본문 예제가 직접 가르치는 표준 절차이므로 통찰로 세지 않았고, 미분계수의 정의로 극한을 분해·보정하는 단계와 유한 극한 조건에서 분자를 0으로 역추적하는 단계만 통찰로 라벨링했다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-CALC2-84-e9
  page: 84
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    ⑴~⑷ 지수함수가 들어간 네 함수($y=e^x+7^x$ · $y=3^{2x-1}$ · $y=xe^x$ · $y=5^x(3x-1)$)를 미분.
  category: "지수함수 도함수 공식 → 지수법칙으로 밑 정리 → 곱의 미분법"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수의 도함수(공식·곱의 미분법)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (a^x)'=a^x ln a 와 곱의 미분법을 네 번 적용한다. 합성함수 미분 전 단계라 3^{2x-1} 은 9^x/3 로 밑을 정리해야 하지만, 이 예제가 직접 가르치는 표준 절차라 통찰로 세지 않았다.
    함정은 밑이 e 가 아닐 때 붙는 ln 계수(T-표기) 하나. 필수 예제 ★2 출발을 M_total 6·통찰 0 으로 그대로 유지.
  tier: star_2
  mechanism_primary: "지수법칙으로 a^{mx+n} 을 (a^m)^x·a^n 으로 정리 → (a^x)'=a^x ln a 와 곱의 미분법 적용"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $y''=e^x+7^x\ln 7$ ⑵ $y''=3^{2x-1}\ln 9$ ⑶ $y''=(x+1)e^x$ ⑷ $y''=5^x(3x\ln 5-\ln 5+3)$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/84-e9.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(e·7·3·5)과 지수 일차식의 계수(2x-1 → 3x+2), 곱해지는 다항식(3x-1 → x^2+1)을 바꿀 수 있다. 제약: 밑은 1이 아닌 양수, 지수 일차식의 계수는 정수여야 (a^m)^x·a^n 정리가 깔끔하고 답의 ln 값도 ln 8·ln 9 처럼 정리된다."
    creative: "(1) 밑을 1/3 처럼 1보다 작게 두어 ln 의 부호를 뒤집기(★2 유지) (2) 도함수 대신 f'(0) 한 값만 묻기(★1) (3) y=x^2·2^x 처럼 곱의 미분 뒤 공통인수로 묶어 인수분해를 요구하면 ★2~3."
```

```yaml
- id: GN-CALC2-84-165
  page: 84
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑷ 지수함수가 들어간 네 함수($y=2^{3x+1}$ · $y=e^x(6x^2-1)$ · $y=3^xe^{x+1}$ · $y=(x^3+3)(1/3)^x$)를 미분.
  category: "지수법칙으로 밑 정리 → 곱의 미분법 → 지수 공통인수로 묶기"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수의 도함수(공식·곱의 미분법)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    예제 84-e9 와 같은 골조의 유제. 2^{3x+1}=2·8^x, 3^x e^{x+1}=e·(3e)^x 처럼 밑을 먼저 합친 뒤 미분하면 한 줄이다.
    ⑷ 는 밑이 1/3 이라 ln(1/3)=-ln 3 부호(T-부호)가 유일한 함정. 확인체크 ★1 출발이지만 네 문항 모두 밑 정리와 곱의 미분법을 함께 요구해 M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "밑을 하나로 합쳐 (a^m)^x 꼴로 정리 → 곱의 미분법 → a^x 를 공통인수로 묶기"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $y''=2^{3x+1}\ln 8$ ⑵ $y''=e^x(6x^2+12x-1)$ ⑶ $y''=3^xe^{x+1}(\ln 3+1)$ ⑷ $y''=(3x^2-x^3\ln 3-3\ln 3)\left(\dfrac{1}{3}\right)^x$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/84-165.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(2·3·1/3)과 지수 계수(3x+1), 곱해지는 다항식 계수(6x^2-1 · x^3+3)를 바꿀 수 있다. 제약: 두 지수의 밑을 합칠 때 (3e)^x 처럼 하나의 밑으로 묶이는 조합을 유지하고, 1보다 작은 밑을 쓸 때는 ln 의 음부호가 답에 살아 있어야 한다."
    creative: "(1) 밑이 다른 두 지수의 곱(2^x·5^x)으로 바꿔 밑 합치기를 강조(★2 유지) (2) 몫 꼴 (x^2+1)/e^x 로 바꾸면 몫의 미분법이 필요해 ★2~3 (3) 네 문항 중 하나를 도함수가 0이 되는 x 를 묻는 문제로 바꾸면 인수분해가 붙어 ★2~3."
```

```yaml
- id: GN-CALC2-84-166
  page: 84
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $f(x)=(3x^2+2)e^x$ 의 $f'(0)$ 의 값.
  category: "곱의 미분법 → x=0 대입"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수의 도함수(공식·곱의 미분법)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    곱의 미분법 한 번으로 f'(x)=(3x^2+6x+2)e^x 를 얻고 x=0 을 대입하면 끝. 도구가 하나뿐이고 함정도 없다.
    통찰 0·M_total 3 → 확인체크 ★1 출발 유지. 이 범위에서 가장 가벼운 문항.
  tier: star_1
  mechanism_primary: "곱의 미분법으로 f'(x)=(3x^2+6x+2)e^x → x=0 대입"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/84-166.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "다항식 계수(3x^2+2)와 대입하는 x 값(0 → 1)을 바꿀 수 있다. 제약: x=0 이 아닌 값을 넣으면 답에 e 가 남으므로 정수 답을 원하면 x=0 을 유지한다."
    creative: "(1) 밑을 2^x 로 바꿔 ln 2 가 답에 남게 하기(★1~2) (2) f'(0) 대신 f'(x)=0 의 해를 묻기(인수분해 추가 → ★2) (3) 지수를 e^{-x} 로 바꾸면 부호 함정이 붙어 ★2."
```

```yaml
- id: GN-CALC2-85-e10
  page: 85
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    ⑴~⑷ 로그함수가 들어간 네 함수($y=\ln 7x$ · $y=x^2\ln x$ · $y=x\log x$ · $y=\log_3(3x)^2+1$)를 미분.
  category: "로그의 성질로 진수 분해 → 로그함수 도함수 공식 → 곱의 미분법"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그함수의 도함수(로그의 성질로 분해 후 미분)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ln 7x=ln 7+ln x, log_3(3x)^2=2+2log_3 x 처럼 상수와 log x 를 분리하면 합성함수 미분 없이 (log_a x)'=1/(x ln a) 만으로 끝난다.
    이 분해가 곧 이 예제가 가르치는 절차라 통찰 미계상. 함정은 진수 조건 x>0(T-범위). 필수 예제 ★2 출발 유지.
  tier: star_2
  mechanism_primary: "로그의 성질로 진수의 상수·지수를 분리 → (log_a x)'=1/(x ln a) 와 곱의 미분법 적용"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $y''=\dfrac{1}{x}$ ⑵ $y''=x(2\ln x+1)$ ⑶ $y''=\log x+\dfrac{1}{\ln 10}$ ⑷ $y''=\dfrac{2}{x\ln 3}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/85-e10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "진수의 상수배(7x · 3x)와 지수(제곱 → 세제곱), 로그의 밑(e·10·3), 곱해지는 다항식(x^2 · x)을 바꿀 수 있다. 제약: 진수는 양수여야 하고, 상수배는 미분하면 사라지므로 답이 상수배와 무관해진다는 점이 이 문항의 핵심이라 그대로 남긴다."
    creative: "(1) log_3(3x)^2 을 log_3(9x^2) 로 바꿔 같은 답이 나오는 것을 확인시키기(★2 유지) (2) x log x 대신 (log x)^2 로 바꾸면 같은 함수의 곱으로 보는 한 단계가 추가돼 ★2 (3) 진수를 x^2-1 처럼 일차식이 아닌 것으로 두면 이 단원 도구로는 풀 수 없어 단원 밖(합성함수 미분)으로 넘어간다."
```

```yaml
- id: GN-CALC2-85-167
  page: 85
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑷ 로그함수가 들어간 네 함수($y=e^x\ln x$ · $y=x\log_5 2x$ · $y=\ln(5x)^3$ · $y=(\log_2 x)^2$)를 미분.
  category: "로그의 성질로 분해 → 곱의 미분법 → 제곱은 같은 함수의 곱으로"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그함수의 도함수(로그의 성질로 분해 후 미분)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑶ 은 ln(5x)^3=3ln 5+3ln x 로 분해하면 도함수가 3/x 로 상수배와 무관해지고, ⑷ 는 (log_2 x)^2 을 log_2 x·log_2 x 로 보고 곱의 미분법을 쓴다.
    예제 85-e10 과 같은 골조·M_total 6 이라 확인체크 ★1 출발에서 +1 한 ★2. 진수 조건(T-범위)이 유일한 함정.
  tier: star_2
  mechanism_primary: "로그의 성질로 진수의 상수·지수를 분해 → 곱의 미분법(제곱은 같은 함수의 곱)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $y''=e^x\left(\ln x+\dfrac{1}{x}\right)$ ⑵ $y''=\log_5 2x+\dfrac{1}{\ln 5}$ ⑶ $y''=\dfrac{3}{x}$ ⑷ $y''=\dfrac{2\log_2 x}{x\ln 2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/85-167.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "로그의 밑(5·2·e), 진수의 상수배(2x·5x), 지수(3제곱), 곱해지는 함수(e^x·x)를 바꿀 수 있다. 제약: 밑과 진수 모두 양수·밑은 1이 아니어야 하고, 지수를 홀수로 두면 진수 조건이 x>0 하나로 유지된다."
    creative: "(1) ⑷ 를 (ln x)^3 으로 올리면 곱의 미분법 두 번 → ★2~3 (2) e^x ln x 를 e^x/ln x 로 바꾸면 몫의 미분법과 진수 조건 x≠1 이 붙어 ★3 (3) 네 함수 중 도함수가 가장 단순한 것을 고르게 하는 선택형으로 바꾸면 ★2 유지."
```

```yaml
- id: GN-CALC2-85-168
  page: 85
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $x>0$ 에서 $f(x)=x^3\ln x^2$ 의 $f'(e)$ 의 값.
  category: "ln x^2=2 ln x 분해 → 곱의 미분법 → x=e 대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그함수를 포함한 함수의 미분계수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ln x^2 을 2ln x 로 먼저 분해해야 이 단원 도구로 미분이 된다. f'(x)=6x^2 ln x+2x^2 에 x=e 를 넣으면 ln e=1 이 살아난다.
    확인체크 ★1 출발이지만 로그 분해·곱의 미분법·대입 세 도구를 쓰므로 ★2. x>0 조건(T-범위)이 함정.
  tier: star_2
  mechanism_primary: "ln x^2=2 ln x 분해 → 곱의 미분법으로 f'(x)=6x^2 ln x+2x^2 → x=e 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$8e^2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/85-168.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "다항식 차수(x^3), 진수의 지수(x^2), 대입값(e)을 바꿀 수 있다. 제약: 대입값을 e 의 거듭제곱으로 두어야 ln 이 정수로 떨어지고, x>0 조건을 유지해야 ln x^2=2 ln x 변형이 정당하다."
    creative: "(1) 대입값을 e^2 로 올려 ln 값이 2가 되게 하기(★2 유지) (2) f'(a)=0 인 a 를 묻게 바꾸면 ln x 방정식이 붙어 ★3 (3) x<0 도 포함하는 정의역으로 두면 ln x^2=2 ln|x| 절댓값 처리가 필요해 ★3."
```

```yaml
- id: GN-CALC2-86-e11
  page: 86
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    $f(x)=x\ln x+x^3$ 일 때 $\lim_{h\to 0}\dfrac{f(1+3h)-f(1+h)}{h}$ 의 값.
  category: "f(1) 삽입으로 미분계수 정의 두 개로 분해 → 3f'(1)-f'(1)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "분자에 f(1) 을 더하고 빼 두 개의 미분계수 정의로 분해하고 3h·h 배율을 보정"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "미분계수의 정의를 이용한 극한값(지수·로그함수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분자를 {f(1+3h)-f(1)}-{f(1+h)-f(1)} 로 쪼개 3f'(1)-f'(1)=2f'(1) 로 환원하는 것이 전부이고, 나머지는 f'(x)=ln x+1+3x^2 계산과 대입이다.
    조건을 미분계수 정의 꼴로 옮기는 동치 변환 1개(EQV d1). 배율 3h 를 빠뜨리는 것이 함정(T-표기). 필수 예제 ★2 유지.
  tier: star_2
  mechanism_primary: "f(1) 삽입 분해 → 3f'(1)-f'(1)=2f'(1) → f'(x)=ln x+1+3x^2 대입"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$8$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/86-e11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "증분 계수(3h 와 h), 기준점(x=1), 함수의 항(x ln x+x^3)을 바꿀 수 있다. 제약: 기준점은 ln 이 정수로 떨어지는 1 이나 e 의 거듭제곱, 두 증분 계수는 서로 달라야 하고 답은 (계수 차)×f'(기준점) 이 된다."
    creative: "(1) f(1+3h)-f(1-h) 처럼 부호를 엇갈리게 해 계수 합이 되게 하기(★2 유지) (2) 기준점을 e 로 옮겨 ln e 계산을 넣기(★2) (3) f 를 구체식 대신 f'(1)=k 만 주는 추상함수로 바꾸면 Mₐ 가 올라 ★3."
```

```yaml
- id: GN-CALC2-86-169
  page: 86
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $f(x)=3^x$ 일 때 $\lim_{h\to 0}\dfrac{f(h)-f(-2h)}{h}$ 의 값.
  category: "f(0) 삽입 분해 → f'(0)+2f'(0)=3f'(0)"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "분자에 f(0) 을 삽입해 두 미분계수 정의로 분해하고 -2h 배율의 부호를 보정"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "미분계수의 정의를 이용한 극한값(지수·로그함수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    예제 86-e11 과 같은 분해를 기준점 x=0 에서 쓴다. 두 번째 항의 증분이 -2h 라 부호까지 보정하면 f'(0)+2f'(0)=3f'(0)=3 ln 3.
    확인체크 ★1 출발이지만 미분계수 정의 분해 통찰 1개(EQV d1)가 그대로 필요해 +1 한 ★2. 부호 보정이 유일한 함정(T-부호).
  tier: star_2
  mechanism_primary: "f(0) 삽입 분해 → f'(0)+2f'(0)=3f'(0) → f'(x)=3^x ln 3 에 x=0 대입"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$3\ln 3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/86-169.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(3), 두 증분 계수(h 와 -2h)를 바꿀 수 있다. 제약: 기준점 0 을 유지해야 f'(0)=ln(밑) 으로 답이 깔끔하고, 증분 계수의 부호가 다르면 답은 (계수 차)가 아니라 계수의 합이 된다."
    creative: "(1) 밑을 e 로 두어 답이 계수만 남게 하기(★1~2) (2) f(2h)-f(-2h) 대칭 차분으로 바꾸기(★2 유지) (3) 밑을 미지수 a 로 두고 극한값을 주어 a 를 역으로 구하게 하면 I-BW 가 붙어 ★3."
```

```yaml
- id: GN-CALC2-86-170
  page: 86
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $f(x)=e^x\ln x+x^2$ 일 때 $\lim_{x\to 1}\dfrac{f(x^3)-f(1)}{x-1}$ 의 값.
  category: "분모를 x^3-1 로 맞춘 미분계수 정의 → (x^3-1)/(x-1) 보정 → 3f'(1)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "입력이 x^3 이므로 분모를 x^3-1 로 맞춘 미분계수 정의로 옮기고, 남은 (x^3-1)/(x-1)=x^2+x+1 을 따로 계산해 3배를 보정"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "미분계수의 정의를 이용한 극한값(합성 입력·분모 보정)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f(1+h) 꼴이 아니라 f(x^3) 이라 분모를 바로 쓸 수 없다. {f(x^3)-f(1)}/(x^3-1) × (x^3-1)/(x-1) 로 두 조각을 나눈 뒤 각각 f'(1) 과 3 으로 보내는 2단 변환이 필요하다.
    f'(x)=e^x ln x+e^x/x+2x 에서 f'(1)=e+2. 변환 통찰 1개(EQV d2)와 M_total 6 으로 ★3.
    [분류 이슈] 확인체크(★1 출발)인데 분모 보정 단계가 하나 더 붙어 ★3 판정 — 2단 상향이라 라벨을 맞추지 않고 기록만 함.
  tier: star_3
  mechanism_primary: "분모를 x^3-1 로 맞춰 f'(1) 분리 → (x^3-1)/(x-1)=x^2+x+1 → 3f'(1)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$3(e+2)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/86-170.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "입력의 지수(x^3), 기준점(x=1), 함수의 항(e^x ln x+x^2)을 바꿀 수 있다. 제약: 기준점은 입력 변환의 고정점(x^n 에서 x=1)이어야 분자·분모가 동시에 0이 되고, 지수 n 이 곧 보정 배수 n 이 된다."
    creative: "(1) 입력을 x^2 로 낮춰 보정 배수를 2로(★2~3) (2) 기준점을 x=e 로 옮기고 입력을 x^3/e^2 처럼 두면 고정점 확인이 한 단계 더 붙어 ★3~4 (3) f 를 추상함수로 두고 f'(1) 만 주면 Mₐ 상승·★3 유지."
```

```yaml
- id: GN-CALC2-87-e12
  page: 87
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    조각함수 $f(x)=x^2-bx+1\,(x>0)$, $ae^{-x}-1\,(x\le 0)$ 이 $x=0$ 에서 미분가능하도록 하는 상수 $a$, $b$.
  category: "x=0 연속 조건 → 좌우 미분계수 일치 → 연립"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수·로그 조각함수의 미분가능성(연속+좌우 미분계수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    미분가능 → 연속이므로 a-1=1 로 a 를 먼저 얻고, 좌우 미분계수 -ae^{-x} 와 2x-b 를 x=0 에서 맞춰 b 를 얻는다.
    e^{-x} 은 (1/e)^x 로 보아 미분해 -e^{-x} 가 되는 부호(T-부호)가 함정. 두 조건을 순서대로 쓰는 표준 절차라 통찰 없음. 필수 예제 ★2 유지.
  tier: star_2
  mechanism_primary: "x=0 에서 연속(좌우 극한 일치)으로 a → 좌우 미분계수 일치로 b"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$a=2$, $b=2$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/87-e12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "경계점(x=0), 다항식 쪽 계수(x^2-bx+1), 지수 쪽 상수항(-1)을 바꿀 수 있다. 제약: 경계점을 0 이 아닌 값으로 옮기면 e^{-x} 값이 남아 답이 e 꼴이 되므로 정수 답을 원하면 0 을 유지한다."
    creative: "(1) 지수 쪽을 a·2^{-x} 로 바꿔 ln 2 가 답에 남게 하기(★2~3) (2) 미분가능 대신 연속만 요구해 조건을 하나로 줄이기(★1~2) (3) a, b 를 각각 구하는 대신 a+b 나 ab 를 묻고 부호가 음수가 되도록 설계하면 검증 부담이 늘어 ★3."
```

```yaml
- id: GN-CALC2-87-171
  page: 87
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    조각함수 $f(x)=\ln bx\,(0<x\le 1)$, $ax^2+1\,(x>1)$ 이 $x=1$ 에서 미분가능하도록 하는 상수 $a$, $b$.
  category: "x=1 좌우 미분계수 일치로 a → 연속 조건과 로그 역변환으로 b"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수·로그 조각함수의 미분가능성(연속+좌우 미분계수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ln bx=ln b+ln x 이므로 좌미분계수는 1/x. x=1 에서 1=2a 로 a 를 먼저 얻고, 연속 조건 ln b=a+1 을 지수로 풀어 b=e^{3/2} 를 얻는다.
    로그 방정식을 지수로 되돌리는 마지막 한 단계가 추가될 뿐 골조는 예제 87-e12 와 같다. 진수 조건(T-범위) 함정. 확인체크 ★1 출발에서 M_total 7 로 +1 한 ★2.
  tier: star_2
  mechanism_primary: "ln bx=ln b+ln x 분해 → 좌우 미분계수 일치로 a → 연속 조건을 지수로 풀어 b"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$a=\dfrac{1}{2}$, $b=e^{\frac{3}{2}}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/87-171.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "경계점(x=1), 이차식의 상수항(+1), 로그의 밑(e → 2)을 바꿀 수 있다. 제약: 경계점은 로그 쪽 미분계수 1/x 가 간단해지는 값으로 두고, 밑을 바꾸면 a 가 1/(2 ln 밑) 꼴이 되어 계산이 지저분해진다."
    creative: "(1) 로그 쪽을 a ln x+b 로 두고 두 미지수를 모두 로그 쪽에 넣기(★2 유지) (2) 답을 ab 나 a+b 로 묻기(★2) (3) 미분가능한 구간을 열린구간 경계로 옮겨 정의역 조건 확인을 강제하면 ★3."
```

```yaml
- id: GN-CALC2-87-172
  page: 87
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    조각함수 $f(x)=x^2+a\,(x\ge 2)$, $be^{x-1}\,(x<2)$ 이 $x=2$ 에서 미분가능할 때 $a+b$.
  category: "x=2 미분계수 일치로 b → 연속 조건으로 a → a+b"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수·로그 조각함수의 미분가능성(연속+좌우 미분계수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    be^{x-1} 은 도함수도 be^{x-1} 이라 x=2 에서 미분계수 조건 be=4 가 곧 연속 조건의 우변과 같아져 a 가 0 으로 떨어진다.
    a=0 이라는 결과를 계산 실수로 오해하지 않는 것이 함정(T-표기). 골조는 87-e12 와 동일해 확인체크 ★1 출발에서 +1 한 ★2.
  tier: star_2
  mechanism_primary: "x=2 에서 4=be 로 b → 연속 조건 4+a=be 로 a=0 → a+b=4/e"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{4}{e}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/87-172.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "경계점(x=2), 이차식(x^2), 지수 쪽 평행이동(x-1)을 바꿀 수 있다. 제약: 지수 쪽이 be^{x-c} 이면 미분계수와 함숫값이 같아 a 가 (경계점^2 의 부호 반대 값)으로 결정되므로, a=0 을 피하려면 지수 쪽에 상수항을 더한다."
    creative: "(1) 지수 쪽을 be^{x-1}+c 로 바꿔 a 가 0 이 아니게 하기(★2 유지) (2) 밑을 2^{x-1} 로 바꿔 ln 2 를 남기기(★3) (3) a, b 의 부호 조건을 추가해 가능한 쌍을 검증하게 하면 I-VF 가 붙어 ★3~4."
```

### 연습문제 STEP 1

```yaml
- id: GN-CALC2-88-173
  page: 88
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $f(x)=(x^3-7x^2+13x-9)e^x$ 에서 $f'(a)=0$ 을 만족시키는 모든 실수 $a$ 의 값의 곱.
  category: "곱의 미분법 → e^x 로 묶기 → 삼차식 인수분해(또는 근과 계수)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수의 도함수(공식·곱의 미분법)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    곱의 미분법으로 f'(x)=(x^3-4x^2-x+4)e^x 를 얻고, e^x>0 이므로 삼차식의 근만 보면 된다. (x-4)(x-1)(x+1) 로 인수분해하거나 근과 계수의 관계로 곱을 바로 읽어도 된다.
    e^x 를 0 으로 놓지 않는 것이 유일한 함정(T-범위). 통찰 0·M_total 6 → STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: "곱의 미분법 → e^x 공통인수로 묶기 → 삼차식의 근의 곱(근과 계수)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/88-173.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼차식 계수(x^3-7x^2+13x-9)를 바꿀 수 있다. 제약: f'(x) 의 다항식 부분이 정수 근으로 인수분해되도록 설계해야 하고(원식 계수에서 도함수 계수가 f+f' 로 결정됨), 근의 곱만 묻는다면 인수분해 없이 상수항/최고차항으로 읽힌다는 점을 유지한다."
    creative: "(1) 근의 합이나 근의 개수를 묻기(★2 유지) (2) 지수를 e^{-x} 로 바꿔 도함수의 다항식 부분이 f-f' 가 되게 하기(★2) (3) f'(x)>0 인 구간을 묻는 문제로 바꾸면 부호 판정이 붙어 ★3."
```

```yaml
- id: GN-CALC2-88-174
  page: 88
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $f(x)=a^{x+1}$ 의 그래프 위의 점 $(-1,\,1)$ 에서의 접선의 기울기가 $3$ 일 때 양수 $a$.
  category: "접선의 기울기=미분계수 → f'(-1)=ln a=3 → a=e^3"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수의 접선의 기울기와 밑 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a^{x+1}=a·a^x 이므로 f'(x)=a^{x+1} ln a, x=-1 에서 f'(-1)=ln a. 기울기 3 을 대입해 로그방정식 ln a=3 을 지수로 되돌리면 끝.
    통찰 0·M_total 5 라 -1 후보지만 접선의 기하 조건을 미분계수로 옮기는 단계와 로그·지수 역변환 두 도구가 결합돼 STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: "접선의 기울기=f'(-1)=ln a → ln a=3 → a=e^3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$e^3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/88-174.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접점의 x좌표(-1), 지수의 평행이동(x+1), 기울기 값(3)을 바꿀 수 있다. 제약: 접점은 지수가 0 이 되는 점으로 두어야 a^{x+1}=1 이 되어 답이 e^{기울기} 로 깔끔하다."
    creative: "(1) 접선이 원점을 지나게 하여 접점까지 미지수로 두기(★3) (2) 기울기 대신 접선의 y절편을 주기(★2~3) (3) 두 곡선 y=a^x 와 y=log_a x 의 접선이 평행하다는 조건으로 바꾸면 대칭성(I-SYM)이 붙어 ★4."
```

```yaml
- id: GN-CALC2-88-175
  page: 88
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $f(x)=e^x$ 에서 $x$ 가 $0$ 에서 $1$ 까지 변할 때의 평균변화율과 $x=a$ 에서의 미분계수가 같을 때 상수 $a$.
  category: "평균변화율 e-1 계산 → e^a=e-1 → 로그로 a"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평균변화율과 미분계수가 같아지는 값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    평균변화율 (e-1)/(1-0)=e-1 과 f'(a)=e^a 를 같게 놓고 로그를 취하면 a=ln(e-1).
    평균변화율과 미분계수 두 정의를 이어 붙이는 것뿐이라 통찰 0. 답이 ln(e-1) 이라 e-1 을 e 로 잘못 약분하는 표기 함정(T-표기)이 있다. STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: "평균변화율=e-1 → f'(a)=e^a=e-1 → a=ln(e-1)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\ln(e-1)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/88-175.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간의 양 끝(0 에서 1)과 함수의 밑(e)을 바꿀 수 있다. 제약: 구간 끝을 정수로 두면 평균변화율이 e^n-e^m 꼴로 남고 답은 항상 로그 꼴이 되므로, 정수 답을 원한다면 함수를 바꿔야 한다."
    creative: "(1) 밑을 2^x 로 바꿔 답에 log_2 가 남게 하기(★2 유지) (2) 구간을 [0, t] 로 두고 a 를 t 의 식으로 표현하게 하면 Mₐ 상승 ★3 (3) 평균값 정리의 c 가 구간 중점보다 왼쪽임을 보이게 하면 ★4."
```

```yaml
- id: GN-CALC2-88-176
  page: 88
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $x>0$ 에서 $f(x)=x\ln x^2$ 의 $f'(e^3)$ 의 값.
  category: "ln x^2=2 ln x 분해 → 곱의 미분법 → x=e^3 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그함수를 포함한 함수의 미분계수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f(x)=2x ln x 로 고치면 f'(x)=2 ln x+2, x=e^3 에서 6+2=8.
    85-168 과 같은 골조의 더 짧은 판이다. M_total 4·통찰 0 으로 ★1 후보지만 로그 분해와 곱의 미분법 두 도구를 쓰므로 STEP 1 ★2 를 유지했고, 이 범위 STEP 1 중 가장 가볍다.
  tier: star_2
  mechanism_primary: "ln x^2=2 ln x 분해 → f'(x)=2 ln x+2 → x=e^3 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/88-176.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "진수의 지수(x^2)와 대입값(e^3)을 바꿀 수 있다. 제약: 대입값은 e 의 거듭제곱이어야 ln 이 정수로 떨어지고, x>0 조건이 있어야 ln x^2=2 ln x 변형이 정당하다."
    creative: "(1) 밑이 10 인 상용로그로 바꿔 1/ln 10 이 남게 하기(★2 유지) (2) f'(x)=0 인 x 를 묻기(★2) (3) f'(x)=k 를 만족하는 x 가 존재할 조건을 묻게 하면 I-BW 가 붙어 ★3."
```

```yaml
- id: GN-CALC2-88-177
  page: 88
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $f(x)=x\log_2 ax^3$ 에 대하여 $\lim_{x\to 1}\dfrac{f(x)-\log_2 a}{x-1}=2$ 일 때 양수 $a$.
  category: "log_2 a=f(1) 인식 → 극한=f'(1)=2 → 밑 변환으로 a"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "분자의 상수 log_2 a 가 f(1) 과 같음을 알아보고 극한 전체를 f'(1) 로 환원"
    - step: 3
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "log_2 a=2-3/ln 2 를 2^{1/ln 2}=e 를 이용해 밑 e 표현으로 옮겨 a 를 e 의 거듭제곱 꼴로"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "미분계수의 정의를 이용한 극한값(로그 밑 변환)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f(1)=log_2 a 임을 알아채야 극한이 미분계수 정의가 된다. f(x)=x(log_2 a+3 log_2 x) 로 분해해 f'(1)=log_2 a+3/ln 2=2 를 얻는다.
    마지막에 a=2^{2-3/ln 2} 를 4/e^3 로 옮기려면 2^{1/ln 2}=e 라는 밑 변환이 필요하다. 통찰 2개(EQV d1 + RT d2) → STEP 1 ★2 에서 +1 한 ★3.
  tier: star_3
  mechanism_primary: "상수=f(1) 인식으로 극한을 f'(1) 로 환원 → 로그 분해 미분 → 2^{1/ln 2}=e 밑 변환으로 a"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{4}{e^3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/88-177.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "로그의 밑(2), 진수의 지수(x^3), 극한값(2)을 바꿀 수 있다. 제약: 분자의 상수는 반드시 f(1) 과 같아야 미분계수 정의가 되고(진수가 ax^n 이면 f(1)=log_밑 a), 답이 깔끔하려면 극한값에서 n/ln(밑) 을 뺀 값이 정리돼야 한다."
    creative: "(1) 밑을 e 로 바꿔 밑 변환 단계를 없애면 ★2 로 내려간다 (2) 기준점을 x=2 로 옮겨 분자의 상수를 2log_2 8a 처럼 만들면 f(2) 확인이 한 단계 더 붙어 ★3~4 (3) 극한값을 주고 a 대신 밑을 구하게 하면 I-BW 가 추가돼 ★4."
```

```yaml
- id: GN-CALC2-88-178
  page: 88
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $f(x)=e^{x+2}\ln x$ 일 때 $\lim_{h\to 0}\dfrac{f(1+3h)-f(1-3h)}{h}$ 의 값.
  category: "f(1) 삽입 대칭 차분 분해 → 6f'(1)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "f(1) 을 더하고 빼 대칭 차분을 두 미분계수 정의로 분해하고 +3h·-3h 배율을 합쳐 6배 보정"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "미분계수의 정의를 이용한 극한값(지수·로그함수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    대칭 차분이라 두 조각의 배율이 더해져 6f'(1) 이 된다. f'(x)=e^{x+2} ln x+e^{x+2}/x 에서 ln 1=0 이라 f'(1)=e^3.
    분해 통찰 1개(EQV d1)·M_total 6 → STEP 1 ★2 유지. 두 번째 조각의 부호와 배율을 합치는 것이 함정(T-부호).
  tier: star_2
  mechanism_primary: "f(1) 삽입으로 대칭 차분 분해 → 3f'(1)+3f'(1)=6f'(1) → f'(1)=e^3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$6e^3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/88-178.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "증분 계수(±3h), 기준점(x=1), 지수의 평행이동(x+2)을 바꿀 수 있다. 제약: 기준점을 1 로 두어야 ln 1=0 으로 f'(1) 이 e^3 처럼 한 항만 남고, 대칭 차분이면 배율은 두 계수의 합이 된다."
    creative: "(1) 분모를 2h 로 바꿔 배율 계산을 한 번 더 하게 하기(★2 유지) (2) f(1+3h)-f(1+h) 비대칭으로 바꾸면 계수 차가 되어 ★2 (3) f 를 미분가능한 추상함수로 두고 f'(1) 만 주면 Mₐ 상승 ★3."
```

### 연습문제 STEP 2

```yaml
- id: GN-CALC2-89-179
  page: 89
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    $f(x)=e^{6x}$ 일 때 $\lim_{x\to 0}\dfrac{f'(x)-6}{x}$ 의 값.
  category: "f'(x)=6e^{6x} → 분자의 6=f'(0) 인식 → 도함수의 미분계수"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "분자의 상수 6 이 f'(0) 임을 알아보고 극한을 f' 의 x=0 에서의 미분계수(이계미분계수)로 환원"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "도함수의 미분계수(이계미분계수) 극한"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    e^{6x}=(e^6)^x 로 보아 f'(x)=6e^{6x} 를 얻는 것이 1단계, 그 다음 상수 6 이 f'(0) 임을 알아채 극한을 f' 에 대한 미분계수 정의로 다시 읽는 것이 핵심이다. 같은 미분을 한 번 더 해 36.
    미분계수 정의를 f 가 아니라 f' 에 적용하는 2단 구조(EQV d2). STEP 2 ★3 출발 유지.
  tier: star_3
  mechanism_primary: "f'(x)=6e^{6x} → 6=f'(0) 인식 → 극한=(f')'(0)=36"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$36$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/89-179.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수의 계수(6)와 기준점(x=0)을 바꿀 수 있다. 제약: 분자의 상수는 반드시 f'(기준점) 값과 같아야 하고(6=f'(0)), 기준점을 0 이 아닌 값으로 옮기면 답에 e 의 거듭제곱이 남는다."
    creative: "(1) 분자를 f(x)-1 로 낮춰 1계 미분계수만 묻기(★2) (2) 밑을 2^{6x} 로 바꿔 (ln 2)^2 이 남게 하기(★3) (3) f(x)=e^{ax} 로 두고 극한값을 주어 a 를 역으로 구하게 하면 I-BW·부호 검증이 붙어 ★4."
```

```yaml
- id: GN-CALC2-89-180
  page: 89
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    양의 실수에서 미분가능한 $f$ 와 $g(x)=f(x)\ln x^4$ 에서, $y=f(x)$ 위의 점 $(e,\,e)$ 에서의 접선과 $y=g(x)$ 위의 점 $(e,\,4e)$ 에서의 접선이 수직일 때 $f'(e)$.
  category: "ln x^4=4 ln x 분해·곱의 미분 → 수직 조건(기울기 곱 -1) → f'(e) 이차방정식"
  M: {s: 2, k: 2, a: 3, t: 1}
  M_total: 8
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 접선이 수직이라는 기하 조건을 기울기의 곱이 -1 이라는 대수 등식으로 옮김"
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "접점에서 얻은 f(e)=e 와 g'(e)=4f'(e)+4f(e)/e 를 결합해 미지수를 f'(e) 하나뿐인 이차방정식으로 통합"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "추상함수와 로그함수 곱의 도함수·접선의 수직 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    g(x)=4f(x)ln x 로 분해해 g'(e)=4f'(e)+4f(e)/e 를 얻고, 점 (e, e) 에서 f(e)=e 이므로 g'(e)=4f'(e)+4.
    수직 조건 f'(e)·g'(e)=-1 을 풀면 (2f'(e)+1)^2=0 완전제곱이라 답이 하나로 떨어진다. 통찰 2개지만 각각 d1·d2 이고 계산이 짧아 +1 하지 않고 STEP 2 ★3 유지.
    추상함수라 Mₐ=3. 점 (e, 4e) 는 g(e)=4f(e) 와 맞물려 f(e)=e 를 재확인해 주는 정보.
  tier: star_3
  mechanism_primary: "g=4f ln x 분해 미분 → f(e)=e 대입 → f'(e)g'(e)=-1 이차방정식 → f'(e)=-1/2"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/89-180.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "진수의 지수(x^4), 접점(e, e), g 의 접점 y좌표(4e)를 바꿀 수 있다. 제약: 접점의 x좌표는 e 로 두어야 ln 이 1 이 되고, 두 접점의 y좌표는 g(e)=(지수)·f(e) 와 반드시 일치해야 조건이 모순 없이 성립한다. 수직 조건이 완전제곱이 되도록 계수를 맞추면 답이 유일해진다."
    creative: "(1) 수직 대신 평행(기울기 같음) 조건으로 바꾸면 일차방정식이 되어 ★2~3 (2) g(x)=f(x)e^x 로 바꾸면 지수 쪽 곱의 미분이 되어 같은 ★3 (3) 완전제곱이 되지 않게 계수를 틀어 두 근 중 정의역·부호 조건에 맞는 것만 남기게 하면 I-VF 가 붙어 ★4."
```

```yaml
- id: GN-CALC2-89-181
  page: 89
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    $f(x)=x^2\ln x+ax$ 가 $\lim_{x\to 1}\dfrac{f(x)-2}{x^2-1}=b$ 를 만족시킬 때 상수 $a$, $b$ 에 대하여 $a+b$.
  category: "극한 존재 → 분자 0(f(1)=2) 역추적 → x^2-1 분해 → f'(1)/2"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "분모가 0 으로 가는데 극한이 존재하므로 분자도 0, 즉 f(1)=2 여야 한다는 역추적으로 a 를 먼저 결정"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x^2-1=(x-1)(x+1) 로 쪼개 미분계수 정의 꼴을 만들고 남은 1/(x+1) 을 1/2 로 보냄"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "미분계수의 정의를 이용한 극한값(극한 존재 조건)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f(1)=a=2 를 극한 존재 조건에서 먼저 뽑는 역추적이 1단계, 분모를 (x-1)(x+1) 로 갈라 f'(1)/2 로 보내는 것이 2단계다. f'(x)=2x ln x+x+a 에서 f'(1)=3 이므로 b=3/2.
    통찰 2개지만 둘 다 이 단원 연습문제에서 반복되는 표준 도구라 +1 하지 않고 STEP 2 ★3 유지. 분자를 0 으로 만드는 조건을 빠뜨리는 것이 함정(T-경계).
  tier: star_3
  mechanism_primary: "극한 존재 → f(1)=2 로 a=2 → 분모 (x-1)(x+1) 분해 → b=f'(1)/2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{7}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/89-181.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자의 상수(2), 분모(x^2-1), 함수의 항(x^2 ln x+ax)을 바꿀 수 있다. 제약: 기준점은 분모의 근이어야 하고(x^2-1 이면 x=1), 분자의 상수는 f(기준점) 과 같아지도록 a 가 유일하게 정해져야 한다. 분모를 x^3-1 로 바꾸면 보정 인수가 1/3 이 된다."
    creative: "(1) 분모를 x-1 로 낮춰 보정 인수를 없애면 ★2~3 (2) a 를 주고 극한값 b 만 묻기(역추적 제거 → ★2) (3) 분모를 (x-1)^2 로 두어 극한 존재를 위해 f'(1)=0 까지 요구하면 조건이 둘로 늘어 ★4."
```

```yaml
- id: GN-CALC2-89-182
  page: 89
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    조각함수 $f(x)=5+a\ln x\,(0<x\le 1)$, $bx+2\,(x>1)$ 가 $x=1$ 에서 미분가능하도록 하는 상수 $a$, $b$ 에 대하여 $a+b$.
  category: "x=1 연속 조건으로 b → 좌우 미분계수 일치로 a → a+b"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수·로그 조각함수의 미분가능성(연속+좌우 미분계수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    연속 조건 5=b+2 로 b=3, 좌미분계수 a/x 를 x=1 에서 우미분계수 b 와 맞추면 a=3.
    필수 예제 87-e12 와 같은 골조인데 수가 더 단순하고 통찰도 없다. STEP 2 ★3 출발에서 -1 한 ★2.
    [분류 이슈] 벤더는 STEP 2 지만 같은 골조가 필수 예제(★2) 구역에 이미 있어 1단 낮게 판정 — 라벨을 억지로 맞추지 않고 기록.
  tier: star_2
  mechanism_primary: "x=1 연속으로 b=3 → 좌우 미분계수 a/x=b 로 a=3 → a+b=6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/89-182.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "경계점(x=1), 상수항(5 와 2), 오른쪽 식의 차수(bx)를 바꿀 수 있다. 제약: 경계점은 ln 이 0 이 되는 x=1 로 두어야 연속 조건이 상수만으로 결정되고, 오른쪽을 이차식으로 바꾸면 미분계수 조건에 경계점이 곱해진다."
    creative: "(1) 오른쪽을 bx^2+2 로 올려 a 와 b 가 분수로 나오게 하기(★2~3) (2) 로그 쪽 밑을 2 로 바꿔 1/(x ln 2) 를 만들기(★3) (3) 미분가능하지 않게 하는 a, b 의 조건을 묻는 역문제로 바꾸면 I-BW 가 붙어 ★3~4."
```

### 연습문제 실력 UP

```yaml
- id: GN-CALC2-89-183
  page: 89
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 실력 UP"
  summary: |
    $1$ 보다 큰 두 상수 $a$, $b$ 에 대하여 $f(x)=a^x$, $g(x)=2\log_b x$ 가 $\lim_{x\to e}\dfrac{f(x)-g(x)}{x-e}=0$ 을 만족시킬 때 $a\times b$ 의 값. 5지선다.
  category: "극한 존재 → h(e)=0, 극한값 0 → h'(e)=0 → 두 식 결합으로 밑 결정"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "분모가 0 으로 가는데 극한이 유한하므로 분자도 0, 즉 a^e=2log_b e 를 역추적"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "극한값 0 을 h(x)=f(x)-g(x) 의 미분계수 h'(e)=0 으로 동치 변환"
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 식에 공통으로 나타나는 a^e 를 소거해 ln a=1/e 라는 단일 관계로 통합"
  insight_count: 3
  depth_score: 6.00
  type_id: null
  type_hint: "극한 조건(값=0)으로 두 지수·로그함수의 밑 결정"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    h=f-g 로 두면 조건은 h(e)=0 과 h'(e)=0 두 개다. h'(e)=a^e ln a-2/(e ln b)=0 에 h(e)=0 에서 얻은 2/ln b=a^e 를 넣으면 a^e(ln a-1/e)=0 → ln a=1/e.
    그러면 a^e=e 이므로 ln b=2/e 까지 이어져 ab=e^{3/e}. 조건 역추적·미분계수 환원·조건 통합 3단계(BW·EQV·CON 모두 d2)로 통찰 3개.
    실력 UP ★4 출발 유지(기출 태그 +0). ★5 는 SC/VF/SYM/XU 통찰이 없어 해당하지 않는다. a, b>1 이라는 범위 조건(T-범위)이 해의 유효성을 받쳐 준다.
  tier: star_4
  mechanism_primary: "h=f-g 로 h(e)=0·h'(e)=0 → a^e 소거 → ln a=1/e, ln b=2/e → ab=e^{3/e}"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '③'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/89-183.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준점(x=e), g 의 계수(2), 극한값(0)을 바꿀 수 있다. 제약: 기준점을 e 로 두어야 log_b e=1/ln b 로 정리되고, 극한값이 0 이 아니면 h'(e) 가 그 값과 같아져 a^e 소거가 되지 않으므로 답이 e 의 거듭제곱 꼴로 떨어지지 않는다."
    creative: "(1) 극한값을 0 이 아닌 상수로 두어 두 조건이 대칭으로 풀리지 않게 하면 ★4~5 (2) 두 곡선이 x=e 에서 접한다는 기하 표현으로 바꾸면 I-RT 가 추가돼 ★4 (3) a, b>1 조건을 빼고 가능한 쌍을 모두 찾아 유효성을 검증하게 하면 I-VF 가 붙어 ★5 후보."
```

```yaml
- id: GN-CALC2-89-184
  page: 89
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    조각함수 $f(x)=ae^{-x}\,(x\ge 1)$, $x^2+bx-1\,(x<1)$ 이 $x=1$ 에서 미분가능하도록 하는 상수 $a$, $b$ 에 대하여 $ab$.
  category: "x=1 연속·미분계수 두 식 → 부호 정리로 b=-1, a=-e"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수·로그 조각함수의 미분가능성(연속+좌우 미분계수)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    연속 조건 a/e=b, 미분계수 조건 -a/e=2+b 를 더하면 0=2+2b 로 b=-1, 이어서 a=-e.
    a, b 가 음수로 나오고 (e^{-x})'=-e^{-x} 부호까지 겹쳐 T-부호 함정이 두 겹이지만 골조는 87-e12 와 같은 표준 2조건 연립이고 통찰이 없다. 실력 UP ★4 출발에서 -1 한 ★3.
    [분류 이슈] 벤더는 실력 UP 이지만 절차형이라 1단 낮게 판정 — 기록만 함.
  tier: star_3
  mechanism_primary: "연속 a/e=b 와 미분계수 -a/e=2+b 를 더해 b=-1 → a=-e → ab=e"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$e$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/89-184.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "경계점(x=1), 이차식의 계수와 상수항(x^2+bx-1), 지수 쪽 부호(e^{-x})를 바꿀 수 있다. 제약: 두 조건을 더해 b 가 바로 나오는 구조는 지수 쪽 도함수가 원래 함수의 -1 배일 때 생기므로 e^{-x} 를 유지하고, 경계점을 옮기면 답에 e 의 거듭제곱이 남는다."
    creative: "(1) 지수 쪽을 ae^{x} 로 바꾸면 두 식을 더하는 대신 빼야 해 부호 함정이 옮겨 간다(★3 유지) (2) a>0 조건을 추가해 해가 없음을 보이게 하면 I-VF 가 붙어 ★4 (3) ab 대신 f 의 최솟값을 묻게 하면 증감 판정이 붙어 ★4."
```

## 표본 판정 요약 (24문)

- ★ 분포: ★1 1 · ★2 16 · ★3 6 · ★4 1 · ★5 0
- 통찰형 9 · 절차형 15 · premium 0
- 통찰 유형 분포: I-EQV 7 · I-RT 2 · I-BW 2 · I-CON 2 (라벨 단계 총 13개 · depth 3 없음)
- type_hint 상위 5: 「미분계수의 정의를 이용한 극한값」 7(86-e11 · 86-169 · 86-170 · 88-177 · 88-178 · 89-179 · 89-181) · 「지수·로그 조각함수의 미분가능성」 5 · 「지수함수의 도함수(공식·곱의 미분법)」 4 · 「로그함수의 도함수·미분계수」 4 · 「접선의 기울기·평균변화율」 3
- 그림: 0문 (이 범위에는 그림 문항이 없다)
- 대상층: 하위권 1 · 중하위권 13 · 중위권 8 · 중상위권 1 · 상위권 1

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CALC2-86-170 | 확인체크(★1 출발)인데 분모를 x^3-1 로 맞추는 보정 단계가 하나 더 붙어 ★3 판정 — 2단 상향이라 기록 | ★1 / ★3 |
| GN-CALC2-89-182 | 벤더 STEP 2(★3 출발)지만 같은 미분가능성 골조가 필수 예제(★2)에 이미 있고 통찰 0 → ★2 | ★2 / ★3 |
| GN-CALC2-89-184 | 벤더 실력 UP(★4 출발)이지만 절차형 2조건 연립이고 부호 함정만 추가 → ★3 | ★3 / ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위에서 가장 많이 반복된 골조는 **미분계수의 정의로 극한을 분해·보정하기**(7문)다. 다만 안에서 세 갈래로 갈리므로 카탈로그에서는 따로 세우는 것이 좋다: (가) f(c) 삽입 분해형(86-e11 · 86-169 · 88-178), (나) 입력이 x^n 이라 분모 보정이 필요한 형(86-170 · 89-181), (다) 분자의 상수가 f(c) 또는 f'(c) 임을 알아보는 형(88-177 · 89-179). (다)가 실제로 가장 잘 틀린다.
- **지수·로그 조각함수의 미분가능성**(5문)은 연속+좌우 미분계수 2조건 연립이라는 한 유형으로 통합해도 된다. 대신 난이도는 답의 부호(89-184)·로그 역변환(87-171)·상수가 0 이 되는 경우(87-172) 같은 마감 단계에서 갈리므로 base ★2 에 변형 축으로 관리한다.
- **지수함수 도함수 공식형**(4문)과 **로그함수 도함수 공식형**(4문)은 각각 한 유형으로 묶되, 「합성함수 미분 없이 지수법칙·로그 성질로 분해한다」는 이 단원 고유의 제약을 유형 설명에 반드시 남긴다. 11·12단원(합성함수·여러 가지 미분법)에서 같은 문항이 다른 골조로 풀리기 때문이다.
- **접선의 기울기·평균변화율**(88-174 · 88-175 · 89-180)은 문항 수가 적고 골조가 서로 달라(밑 결정 / 평균변화율 등식 / 접선 수직) 단독 유형으로 세우기보다 미적분Ⅱ 전체의 접선 유형 카탈로그가 생길 때 그쪽으로 붙이는 것이 낫다.
- 이 범위에는 I-SC·I-VF·I-SYM·I-XU 통찰이 하나도 없어 ★5 자격 문항이 없다. ★5 슬롯이 필요하면 89-183 계열(두 조건 결합)에 유효성 검증(I-VF)을 추가하는 변형이 가장 가깝다.
