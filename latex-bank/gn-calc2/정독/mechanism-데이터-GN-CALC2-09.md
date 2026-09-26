---
name: mechanism-데이터-GN-CALC2-09
description: 개념원리 미적분Ⅱ 09 무리수 $e$와 자연로그(1/1 · 73~82쪽 · 36문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 미적분Ⅱ (22개정 · 학생용) · 전사본 latex-bank/gn-calc2
  section: 09 무리수 $e$와 자연로그
  unit_code: CALC2-09
  part: "1/1"
  extract_range: "73~82쪽 · 73-135~82-164"
  total_problems: 36
  unit_total: 36
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-calc2/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-calc2/items/<id>.tex
  image_source: latex-bank/gn-calc2/figures/ (crops.json)
---

# 개념원리 미적분Ⅱ · 09 무리수 $e$와 자연로그 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 미적분Ⅱ 09단원 「무리수 $e$와 자연로그」 전체(73~82쪽 · 73-135~82-164 · 36문항)를 다룬다. 구역은 **개념원리 익히기** 3문 · **필수·발전 예제** 18문 · **연습문제 STEP 1** 5문 · **연습문제 STEP 2** 7문 · **연습문제 실력 UP** 3문이다. 개념원리 고등의 난이도 신호는 구역이 곧 층이어서 익히기 ★1 · 필수 예제 ★2 · 발전 예제 ★3 · STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4 를 출발점으로 삼고, 여기에 M_total·통찰로 ±1 을 조정했다. tag 「확인체크」 문항은 전사본 구역이 「필수·발전 예제」이고 본문에서 바로 앞 예제의 유제로 놓인 자리이므로 **해당 예제와 같은 출발점**(필수 유제 ★2 · 발전 유제 ★3)을 썼다.

단원 내용상 도구는 넷뿐이다. ⑴ $\lim(1+\square)^{1/\square}=e$ 에서 밑의 $\square$ 와 지수의 $1/\square$ 를 짝 맞추는 것, ⑵ $\dfrac{\ln(1+x)}{x}\to1$, $\dfrac{e^x-1}{x}\to1$ 의 기본 극한에 계수를 맞추는 것, ⑶ 밑이 $e$ 가 아니면 $\log_a$·$a^x$ 를 $\ln$ 으로 환원해 $\ln a$ 를 끌어내는 것, ⑷ $x\to a$ 를 $t\to0$ 으로 옮기는 치환이다. 이 넷은 본문이 직접 가르치는 표준 절차라 통찰 라벨을 붙이지 않았다. 그래서 통찰 라벨이 붙는 25문은 거의 전부 **기본 극한꼴이 식에 없어서 학생이 만들어 내야 하는 자리**다 — $a^x-b^x$ 나 $x+e^{x+1}$ 처럼 $(\square-1)$ 두 덩어리로 쪼개기, $\ln(x+b)-\ln x=\ln\!\left(1+\frac bx\right)$ 처럼 로그 차를 정의꼴로 묶기(I-EQV), 연속 조건에서 $f(a)$ 를 극한으로 바꾸기(I-EQV d2), 도형의 선분·넓이를 좌표식으로 옮기기(I-RT)가 그것이다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 / 골조를 유지한 설정 변형과 ★ 가 변하는 지점)를 채웠다. 그림 문항은 도형 활용 4문(79-e8 · 79-149 · 82-161 · 82-164)이다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-CALC2-73-135
  page: 73
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ $\lim_{x\to0}(1+2x)^{\frac{1}{x}}$, $\lim_{x\to0}(1+3x)^{\frac{1}{6x}}$, $\lim_{x\to\infty}\left(1+\frac{1}{3x}\right)^{x}$, $\lim_{x\to\infty}\left(1+\frac{1}{4x}\right)^{8x}$ 의 극한값 구하기.
  category: '밑의 □ 와 지수의 1/□ 짝 맞추기 → 남는 지수가 e 의 거듭제곱'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '무리수 e 의 정의를 이용한 극한(밑·지수 짝 맞추기)'
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    네 소문항 모두 $(1+\square)^{1/\square}$ 의 $\square$ 를 확정하고 남은 지수를 e 의 지수로 읽으면 한 줄이다. 정의 확인용 자리.
    통찰 0 · M_total 4 · 익히기 구역 → ★1.
  tier: star_1
  mechanism_primary: '□ 를 확정(2x · 3x · 1/(3x) · 1/(4x)) → (1+□)^{1/□} 로 묶기 → 남은 지수 k → e^k'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $e^2$ ⑵ $e^{\frac{1}{2}}$ ⑶ $e^{\frac{1}{3}}$ ⑷ $e^2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/73-135.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑의 계수(2x → 5x)와 지수의 계수(1/(6x) → 1/(4x))를 독립으로 바꿀 수 있다. 제약: 두 계수의 비가 답의 지수이므로 유리수로 떨어지게 두고, x→∞ 형은 밑이 1+(상수/x) 꼴을 유지해야 한다.'
    creative: '(1) 답을 주고 계수를 되찾게 하기(★2 · 미정계수) (2) 밑을 $1-2x$ 로 바꿔 부호 처리를 넣기(★1 유지) (3) $\left(\frac{x+1}{x}\right)^x$ 처럼 분수꼴로 위장하면 정의꼴 복원 한 단계가 늘어 ★2.'
```

```yaml
- id: GN-CALC2-73-136
  page: 73
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ $\ln e^3=x$, $\ln\frac{1}{\sqrt{e}}=x$, $\ln x=-2$, $e^x=5$ 를 만족시키는 $x$ 값 구하기.
  category: '자연로그와 지수의 상호 변환 → 지수법칙으로 정리'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '자연로그의 정의와 지수·로그 상호 변환'
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    $\ln e^k=k$ 와 $\ln x=k \iff x=e^k$ 두 정의만 쓴다. ⑵ 에서 $\frac{1}{\sqrt e}=e^{-\frac12}$ 로 고치는 지수법칙이 유일한 마찰.
    통찰 0 · M_total 4 · 익히기 구역 → ★1.
  tier: star_1
  mechanism_primary: '진수를 e 의 거듭제곱으로 고침 → ln e^k = k · ln x = k ⇔ x = e^k 적용'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $3$ ⑵ $-\dfrac{1}{2}$ ⑶ $\dfrac{1}{e^2}$ ⑷ $\ln 5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/73-136.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '지수를 다른 유리수($e^4$, $\sqrt[3]{e^2}$, $\frac{1}{e^5}$)로, 우변 상수를 다른 정수로 바꿀 수 있다. 제약: 진수가 e 의 유리수 거듭제곱으로 정리되어야 답이 유리수로 떨어진다.'
    creative: '(1) $\ln x+\ln(x-1)=0$ 처럼 로그 방정식으로 확장(진수 조건 검증 필요 → ★2 · I-VF) (2) $e^{2x}-3e^x+2=0$ 치환형(★2) (3) $\ln$ 과 $\log$ 를 섞어 밑 변환을 요구(★2).'
```

```yaml
- id: GN-CALC2-73-137
  page: 73
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ $\lim_{x\to0}\frac{\ln(1-2x)}{x}$, $\frac{e^{5x}-1}{x}$, $\frac{\log(1+x)}{4x}$, $\frac{2^x-1}{2x}$ 의 극한값 구하기.
  category: '기본 극한 네 꼴에 계수 맞추기 → 밑이 e 가 아니면 ln 으로 환원'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '지수·로그 함수의 기본 극한 공식(계수 맞추기)'
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    네 기본 극한 $\frac{\ln(1+x)}{x}$, $\frac{e^x-1}{x}$, $\frac{\log_a(1+x)}{x}$, $\frac{a^x-1}{x}$ 를 한 번씩 확인시키는 자리. 분자·분모의 계수를 맞춰 주면 끝난다.
    통찰 0 · M_total 4 · 익히기 구역 → ★1.
  tier: star_1
  mechanism_primary: '분자의 □ 를 분모에 만들어 주고 남은 계수를 앞으로 빼기 → 밑이 e 가 아니면 1/ln a 계수'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $-2$ ⑵ $5$ ⑶ $\dfrac{1}{4\ln 10}$ ⑷ $\dfrac{\ln 2}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/73-137.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '분자 계수(−2 → 3), 지수 계수(5x → 7x), 분모 계수(4x → 3x), 밑(2·3·10)을 자유롭게 바꾼다. 제약: 분자의 계수와 분모의 계수 비가 답이므로 두 계수를 동시에 바꾸면 답이 달라지는 것을 확인할 것.'
    creative: '(1) 분자·분모를 모두 기본꼴로 두고 비를 묻기($\frac{\ln(1+2x)}{e^{3x}-1}$ → ★2) (2) 극한값을 주고 계수를 되찾게 하기(★2) (3) $\frac{a^x-b^x}{x}$ 로 바꾸면 쪼개기 통찰이 필요해 ★2 · I-EQV.'
```

### 필수·발전 예제

```yaml
- id: GN-CALC2-74-e3
  page: 74
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑷ $\lim_{x\to0}(1-3x)^{\frac{1}{2x}}$, $\lim_{x\to\infty}\left(1+\frac{4}{x}\right)^{3x}$, $\lim_{x\to-\infty}\left(1-\frac{1}{x}\right)^{2x}$, $\lim_{x\to1}x^{\frac{1}{1-x}}$ 의 극한값 구하기.
  category: '음수·무한대·x→1 치환을 거쳐 e 의 정의꼴 복원'
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '무리수 e 의 정의를 이용한 극한(치환으로 정의꼴 만들기)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    네 소문항이 정의꼴을 가리는 네 가지 방식(밑의 음수 계수 · $x\to\infty$ · $x\to-\infty$ · 밑이 x 자신)을 한 번씩 보여 준다. ⑷ 는 $x=1+t$ 치환으로 $(1+t)^{-\frac1t}$ 가 되어 $e^{-1}$.
    치환은 본문이 직접 가르치는 표준 절차라 통찰 라벨을 붙이지 않았다. 통찰 0 · M_total 6 · 필수 예제 → ★2.
  tier: star_2
  mechanism_primary: '치환으로 밑을 1+□ 로 만들기 → 지수를 (1/□)×k 로 분해 → e^k'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $e^{-\frac{3}{2}}$ ⑵ $e^{12}$ ⑶ $\dfrac{1}{e^2}$ ⑷ $\dfrac{1}{e}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/74-e3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑의 계수(−3x · 4/x · −1/x)와 지수의 계수(1/(2x) · 3x · 2x)를 바꾼다. 제약: $x\to-\infty$ 형은 밑이 충분히 큰 |x| 에서 양수여야 하고, ⑷ 형은 극한점과 지수의 분모가 같은 인수($1-x$)를 공유해야 한다.'
    creative: '(1) ⑷ 를 $x\to a$ 일반형 $x^{\frac{1}{a-x}}$ 로 두어 $a$ 로 답을 표현하게 하기(Mₐ 상승 ★3) (2) 극한값을 $e^8$ 로 주고 계수를 찾게 하면 74-139 형(★2) (3) 밑을 $\frac{x-a}{x+a}$ 처럼 분수로 위장하면 두 정의꼴로 분리해야 해 ★3~4(82-162).'
```

```yaml
- id: GN-CALC2-74-138
  page: 74
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑷ $\lim_{x\to0}\left(1+\frac{x}{2}\right)^{-\frac{3}{x}}$, $\lim_{x\to\infty}\left(\frac{x+1}{x}\right)^{\frac{x}{3}}$, $\lim_{x\to-\infty}\left(1-\frac{1}{2x}\right)^{x}$, $\lim_{x\to1}x^{\frac{2}{3x-3}}$ 의 극한값 구하기.
  category: '분수꼴 밑 복원·치환 → e 의 정의꼴'
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '무리수 e 의 정의를 이용한 극한(치환으로 정의꼴 만들기)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    74-e3 의 유제. ⑵ 는 $\frac{x+1}{x}=1+\frac1x$ 로 고치는 한 단계가 추가되고, ⑷ 는 $3x-3=3(x-1)$ 을 먼저 묶어야 $x=1+t$ 치환이 보인다.
    통찰 0 · M_total 6 · 필수 유제 출발점 → ★2.
  tier: star_2
  mechanism_primary: '밑을 1+□ 로 복원 → 지수를 (1/□)×k 로 분해 → e^k'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $e^{-\frac{3}{2}}$ ⑵ $e^{\frac{1}{3}}$ ⑶ $e^{-\frac{1}{2}}$ ⑷ $e^{\frac{2}{3}}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/74-138.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑의 계수($\frac x2$ · $-\frac{1}{2x}$)와 지수 계수($-\frac3x$ · $\frac x3$ · $\frac{2}{3x-3}$)를 바꾼다. 제약: ⑵ 형은 분자−분모가 상수여야 $1+\frac cx$ 로 복원된다.'
    creative: '(1) ⑵ 를 $\left(\frac{x+2}{x-1}\right)^{x}$ 로 두면 두 정의꼴 분리가 필요해 ★3 (2) 네 극한값 중 $e$ 인 것을 고르게 하면 80-150 형 보기 문항(★2) (3) 답을 주고 지수 계수를 미지수로 두면 미정계수형(★2).'
```

```yaml
- id: GN-CALC2-74-139
  page: 74
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $\lim_{x\to-\infty}\left(1+\frac{a}{x}\right)^{\frac{x}{2}}=e^8$ 일 때 상수 $a$ 구하기.
  category: '정의꼴로 정리해 지수 비교 → a 방정식'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: 'e 의 정의를 이용한 극한에서 미정계수 결정'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    좌변을 $\left(1+\frac ax\right)^{\frac xa\cdot\frac a2}$ 로 쪼개면 $e^{\frac a2}$ 이고 지수만 비교하면 된다. $x\to-\infty$ 여도 $\frac ax\to0$ 이라 정의가 그대로 쓰인다는 확인이 요점.
    미정계수를 지수 비교로 찾는 것은 표준 절차라 통찰 라벨 없음. 통찰 0 · M_total 6(Mₐ=2 · 상수 a) → 필수 유제 출발점 ★2.
  tier: star_2
  mechanism_primary: '지수를 (x/a)·(a/2) 로 분해 → 좌변 = e^{a/2} → 지수 비교 a/2 = 8'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$16$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/74-139.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '우변 지수(8 → 3·−2)와 좌변 지수 계수($\frac x2$ → $2x$)를 바꾼다. 제약: 답 $a$ 가 정수로 떨어지려면 우변 지수와 좌변 지수 계수의 곱이 정수여야 한다.'
    creative: '(1) 미지수를 지수 쪽에 두고($\left(1+\frac2x\right)^{ax}=e^6$) 같은 골조 유지(★2) (2) 우변을 $e$ 로 두고 밑·지수에 모두 $a$ 를 넣으면 이차방정식이 되어 ★3 (3) 극한값이 존재할 $a$ 의 범위를 묻는 형태로 바꾸면 I-BW 가 붙어 ★3.'
```

```yaml
- id: GN-CALC2-75-e4
  page: 75
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑷ $\lim_{x\to0}\frac{\ln\left(1+\frac{x}{2}\right)}{x}$, $\frac{\ln(1+2x)}{e^{3x}-1}$, $\lim_{x\to-1}\frac{\ln(x+2)}{x+1}$, $\lim_{x\to1}\frac{e^{x-1}-1}{x-1}$ 의 극한값 구하기.
  category: '기본 극한 두 꼴에 계수 맞추기 → x→a 는 치환으로 t→0'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '밑이 e 인 지수·로그 함수의 극한(기본 극한 적용)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑵ 는 분자·분모를 각각 x 로 나눠 두 기본꼴의 비로 만들고, ⑶⑷ 는 $x+1=t$, $x-1=t$ 치환으로 $t\to0$ 기본꼴이 된다.
    통찰 0 · M_total 5 라 −1 후보지만 네 소문항이 계수 맞추기·비·두 방향 치환을 모두 요구해 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: '분자·분모를 각각 x(또는 치환한 t)로 나눠 기본꼴의 비로 → 남은 계수 비'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{1}{2}$ ⑵ $\dfrac{2}{3}$ ⑶ $1$ ⑷ $1$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/75-e4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '로그 안 계수($\frac x2$ · $2x$)와 지수 계수($3x$), 극한점($x\to-1$ · $x\to1$)을 바꾼다. 제약: 치환형은 로그 진수가 극한점에서 1, 지수가 극한점에서 0 이 되도록 상수를 맞춰야 0/0 꼴이 된다.'
    creative: '(1) 분모를 $\ln(1+3x)$ 로 두어 로그끼리의 비로 바꾸기(★2 유지) (2) 분자를 $\ln(1+2x)(1+3x)$ 로 두면 곱→합 분리 통찰이 필요해 ★2 · I-EQV(80-152) (3) 분자에 미지수를 넣어 극한값을 주면 미정계수형 ★2(77-e6).'
```

```yaml
- id: GN-CALC2-75-140
  page: 75
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑹ $\frac{\ln(1+2x)}{6x}$, $\frac{e^{4x}-1}{2x}$, $\frac{\ln(1+x)}{\ln(1+3x)}$, $\frac{1-e^x}{\ln(x+1)}$, $\frac{e^{1-x}-e}{2x}$, $\frac{e^x-e^{-2x}}{x}$ 의 $x\to0$ 극한값 구하기.
  category: '기본 극한 계수 맞추기 + 공통인수 분리·두 덩어리 쪼개기'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "⑸ 는 $e^{1-x}-e=e(e^{-x}-1)$ 로 공통인수를 빼고, ⑹ 은 $e^x-e^{-2x}=(e^x-1)-(e^{-2x}-1)$ 로 쪼개야 기본꼴이 생긴다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '밑이 e 인 지수·로그 극한(쪼개기·공통인수 분리)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴~⑷ 는 계수 맞추기와 두 기본꼴의 비로 끝나는 표준 절차다. 변별은 ⑸⑹ 으로, 식에 $(\square-1)$ 꼴이 없으므로 학생이 공통인수를 빼거나 $-1+1$ 을 넣어 두 덩어리로 만들어야 한다.
    통찰 1개(EQV d1) · M_total 6 · 필수 유제 출발점 → ★2.
  tier: star_2
  mechanism_primary: '분자를 (e^{□}-1) 덩어리로 쪼개거나 공통인수를 빼기 → 각 덩어리에 계수 맞추기 → 합·차'
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{1}{3}$ ⑵ $2$ ⑶ $\dfrac{1}{3}$ ⑷ $-1$ ⑸ $-\dfrac{e}{2}$ ⑹ $3$'
  answer_source: "답지(쪽 렌더 · ⑹은 답 크롭에서 잘림)"
  figure: none
  latex: latex-bank/gn-calc2/items/75-140.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '각 소문항의 계수(2x/6x · 4x/2x · 3x)와 ⑹ 의 두 지수($x$, $-2x$)를 바꾼다. 제약: ⑹ 형은 두 지수의 계수 차가 답이므로 부호를 반대로 두면 답이 합이 된다는 점을 확인할 것.'
    creative: '(1) ⑹ 을 $\frac{a^x-b^x}{x}$ 로 바꿔 $\ln\frac ab$ 를 답으로(★2 · 76-e5 ⑵) (2) ⑸ 의 상수 $e$ 를 미지수로 두고 극한값을 주면 미정계수형(★2) (3) 분모를 $x^2$ 로 두어 극한이 발산함을 판정하게 하면 I-VF 가 붙어 ★3.'
```

```yaml
- id: GN-CALC2-75-141
  page: 75
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴ $\lim_{x\to2}\frac{\ln(3-x)}{e^{2-x}-1}$ ⑵ $\lim_{x\to-1}\frac{x+e^{x+1}}{x+1}$ 의 극한값 구하기.
  category: '치환으로 t→0 → 분자를 두 덩어리로 쪼개기'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "⑵ 의 분자 $x+e^{x+1}$ 에는 기본꼴이 없어 $(x+1)+(e^{x+1}-1)$ 로 쪼개야 1+1 이 나온다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '치환이 필요한 지수·로그 극한(x→a 꼴)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 $2-x=t$ 치환 한 번으로 $\frac{\ln(1+t)}{e^{t}-1}$ 가 되어 1. ⑵ 는 치환만으로는 분자가 기본꼴이 아니어서 $-1+1$ 을 넣어 두 덩어리로 가르는 착안이 필요하다.
    통찰 1개(EQV d1) · M_total 5 · 필수 유제 출발점 → ★2.
  tier: star_2
  mechanism_primary: 'x−a = t 치환 → 분자를 (t) + (e^{t}−1) 로 쪼개기 → 각 기본꼴의 합'
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '⑴ $1$ ⑵ $2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/75-141.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '극한점(2 · −1)과 로그·지수 안 계수를 바꾼다. 제약: 극한점에서 분자·분모가 모두 0 이 되도록 상수항을 맞춰야 하고, ⑵ 형은 분자의 일차항 계수가 답의 한 항으로 그대로 남는다.'
    creative: '(1) ⑵ 의 분자를 $x^2-1+e^{x+1}-1$ 처럼 세 덩어리로 늘리기(★3) (2) 분모를 $x^2-1$ 로 바꾸면 인수분해가 하나 더 필요해 ★2(76-143 ⑵) (3) 분자에 미지수를 넣어 극한값을 주면 82-163 형 미정계수 ★3~4.'
```

```yaml
- id: GN-CALC2-76-e5
  page: 76
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑷ $\frac{7x}{\log_2(1+x)}$, $\frac{3^x-2^x}{x}$, $\lim_{x\to1}\frac{\log_3 x}{1-x}$, $\lim_{x\to2}\frac{10^{x-2}-1}{x-2}$ 의 극한값 구하기.
  category: '밑이 e 가 아닌 로그·지수를 ln 으로 환원 → 기본 극한'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "⑵ 의 $3^x-2^x$ 는 $(3^x-1)-(2^x-1)$ 로 쪼개야 $\\ln3-\\ln2$ 가 나온다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '밑이 e 가 아닌 지수·로그 함수의 극한(ln 으로 환원)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $\log_a(1+x)/x\to\frac{1}{\ln a}$, $(a^x-1)/x\to\ln a$ 두 공식을 네 상황에서 확인한다. ⑶ 은 $x=1+t$ 치환과 분모 부호(−t)가 함께 걸린다.
    ⑵ 의 쪼개기만 통찰 라벨(EQV d1). 통찰 1개 · M_total 6 · 필수 예제 → ★2.
  tier: star_2
  mechanism_primary: 'log_a·a^x 를 ln 으로 환원 → 차는 (a^x−1)−(b^x−1) 로 쪼개기 → 기본 극한'
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '⑴ $7\ln 2$ ⑵ $\ln\dfrac{3}{2}$ ⑶ $-\dfrac{1}{\ln 3}$ ⑷ $\ln 10$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/76-e5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑(2·3·10)과 계수(7x)를 바꾼다. 제약: 답이 $\ln$ 값으로만 표현되므로 밑이 1 이 아닌 양수면 자유롭고, ⑵ 형은 두 밑의 비가 답이 되도록 두 지수의 계수를 같게 유지해야 한다.'
    creative: '(1) ⑵ 의 두 지수 계수를 다르게($\frac{9^x-2^{3x}}{x}$) 두면 지수법칙 정리가 추가돼 ★3 (2) 답을 $\ln c$ 로 두고 $c$ 를 찾게 하면 81-159 ㈏ 형(★3) (3) 밑을 미지수로 두고 극한값을 주면 미정계수형 ★2(80-154).'
```

```yaml
- id: GN-CALC2-76-142
  page: 76
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑷ $\frac{\log_3(1+3x)}{x}$, $\frac{2x}{\log_2(1-6x)}$, $\frac{x}{5^x-1}$, $\frac{6^x-2^x}{x}$ 의 $x\to0$ 극한값 구하기.
  category: 'ln 환원 + 계수 맞추기 → 차는 두 덩어리로 쪼개기'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 4
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "⑷ 의 $6^x-2^x$ 를 $(6^x-1)-(2^x-1)$ 로 쪼개 $\\ln6-\\ln2=\\ln3$"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '밑이 e 가 아닌 지수·로그 극한의 기본 공식'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    76-e5 의 유제. ⑵ 는 분모가 로그이고 진수 계수가 음수라 부호가 답에 남는다. ⑶ 은 기본꼴의 역수.
    통찰 1개(⑷ 쪼개기 · EQV d1) · M_total 5 이지만 통찰이 있어 −1 조건에 걸리지 않음 → 필수 유제 출발점 ★2.
  tier: star_2
  mechanism_primary: 'log_a·a^x 를 ln 으로 → 계수 맞추기 → 지수 차는 (□−1) 두 덩어리로 쪼개기'
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{3}{\ln 3}$ ⑵ $-\dfrac{\ln 2}{3}$ ⑶ $\dfrac{1}{\ln 5}$ ⑷ $\ln 3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/76-142.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑(3·2·5·6)과 진수·지수 계수(3x · −6x)를 바꾼다. 제약: ⑷ 는 두 밑의 비가 정수로 떨어지면 답이 깔끔하고($6/2=3$), 음수 계수를 쓰면 답의 부호가 뒤집힌다.'
    creative: '(1) ⑷ 를 세 항 $\frac{6^x-3^x-2^x+1}{x}$ 로 늘려 인수분해 $\frac{(3^x-1)(2^x-1)}{x}$ 를 보게 하면 ★3 (2) 분모를 $x^2$ 로 두고 극한 존재 여부를 묻기(★3 · I-VF) (3) 답을 $\ln k$ 로 주고 밑을 되찾게 하기(★2).'
```

```yaml
- id: GN-CALC2-76-143
  page: 76
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴ $\lim_{x\to3}\frac{\log(x-2)}{x-3}$ ⑵ $\lim_{x\to-1}\frac{2^{x+1}-1}{x^2-1}$ 의 극한값 구하기.
  category: '치환 + 분모 인수분해로 기본꼴 인수 분리'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "⑵ 의 분모를 $(x+1)(x-1)$ 로 갈라 $(x+1)$ 만 기본꼴에 붙이고 나머지 $\\frac{1}{x-1}$ 을 분리"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '치환·인수분해가 필요한 지수·로그 극한'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 $x-3=t$ 치환으로 $\frac{\log(1+t)}{t}$. ⑵ 는 분모가 이차라 그대로는 기본꼴이 없고, $(x+1)$ 인수만 떼어 붙인 뒤 남은 $\frac{1}{x-1}$ 을 $x\to-1$ 에서 $-\frac12$ 로 따로 처리해야 한다.
    통찰 1개(EQV d1) · M_total 5 · 필수 유제 출발점 → ★2.
  tier: star_2
  mechanism_primary: '분모 인수분해 → (x+1) 만 기본꼴과 짝짓기 → 남은 인수는 대입'
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{1}{\ln 10}$ ⑵ $-\dfrac{\ln 2}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/76-143.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑(10·2)과 극한점(3·−1), 분모 이차식의 다른 인수($x-1$ → $x-2$)를 바꾼다. 제약: 분모 이차식이 극한점에서 0 이 되는 인수를 정확히 하나 가져야 하고, 남은 인수는 극한점에서 0 이 아니어야 한다.'
    creative: '(1) 분모를 $x^3+1$ 로 올리면 인수분해 단계가 늘어 ★3 (2) 분자·분모를 모두 이차로 두어 두 인수가 상쇄되게 하기(★3) (3) 분자의 밑을 미지수로 두고 극한값을 주면 미정계수형(★3).'
```

```yaml
- id: GN-CALC2-77-e6
  page: 77
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ $\lim_{x\to0}\frac{a^x+b}{\ln(x+1)}=\ln7$ ($a>0$) ⑵ $\lim_{x\to0}\frac{e^{3x}-1}{ax+b}=\frac12$ 를 만족시키는 상수 $a$, $b$ 구하기.
  category: '분모(분자)→0 이므로 분자(분모)→0 → 상수 결정 → 기본 극한으로 나머지 상수'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '지수·로그 함수의 극한에서 미정계수의 결정'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 분모→0 이고 극한이 존재하므로 분자→0, 즉 $1+b=0$. 그다음 $\frac{a^x-1}{x}\cdot\frac{x}{\ln(1+x)}\to\ln a=\ln7$. ⑵ 는 분자→0 이고 극한이 0 이 아니므로 분모→0, 즉 $b=0$, 이어 $\frac3a=\frac12$.
    「극한이 존재하고 분모→0 이면 분자→0」은 본문이 그대로 가르치는 표준 절차라 통찰 라벨을 붙이지 않았다. 통찰 0 · M_total 6(Mₐ=2) · 필수 예제 → ★2.
  tier: star_2
  mechanism_primary: '0/0 꼴 강제(분모→0 ⇒ 분자→0)로 한 상수 결정 → 남은 식을 기본 극한으로 정리해 나머지 상수'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $a=7$, $b=-1$ ⑵ $a=6$, $b=0$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/77-e6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '극한값($\ln7$ · $\frac12$)과 지수 계수($3x$)를 바꾼다. 제약: ⑴ 은 $a>0$ 조건이 있어야 $\ln a$ 가 정의되고, ⑵ 는 극한값이 0 이 아니어야 분모→0 을 강제할 수 있다.'
    creative: '(1) 분모를 $\ln(x+a)$ 로 두어 상수가 로그 안으로 들어가게 하기(★2 · 77-144 ⑴) (2) 극한점을 $x\to2$ 로 옮기고 분모를 $x^2-4$ 로 두면 치환+인수분해가 추가돼 ★2 (3) 조건 두 개를 ㈎㈏ 로 연결해 세 상수를 찾게 하면 ★3(81-159).'
```

```yaml
- id: GN-CALC2-77-144
  page: 77
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴ $\lim_{x\to0}\frac{\ln(a+6x)}{x}=b$ ⑵ $\lim_{x\to2}\frac{e^{x-2}-a}{x^2-4}=b$ 를 만족시키는 상수 $a$, $b$ 구하기.
  category: '분자→0 강제로 a 결정 → 기본 극한·인수분해로 b'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '지수·로그 함수의 극한에서 미정계수의 결정'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 $\ln a=0$ 즉 $a=1$ 이어야 하고 그러면 $\frac{\ln(1+6x)}{x}\to6$. ⑵ 는 $e^0-a=0$ 에서 $a=1$, 분모를 $(x-2)(x+2)$ 로 갈라 $1\cdot\frac14$.
    같은 표준 절차의 유제라 통찰 라벨 없음. 통찰 0 · M_total 6 · 필수 유제 출발점 → ★2.
  tier: star_2
  mechanism_primary: '분모→0 ⇒ 분자→0 으로 a 결정 → 인수분해·치환으로 기본꼴 만들어 b'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $a=1$, $b=6$ ⑵ $a=1$, $b=\dfrac{1}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/77-144.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '로그 안 계수(6x)와 극한점(2), 분모 이차식을 바꾼다. 제약: ⑴ 에서 상수 $a$ 는 반드시 1 이어야 하므로(다른 값이면 발산) 변형은 계수 쪽에서만 가능하다.'
    creative: '(1) $b$ 의 값을 주고 $a$ 와 계수를 동시에 찾게 하기(★3) (2) 분모를 $\sqrt{x}-\sqrt2$ 로 두어 유리화를 추가(★3) (3) 극한이 존재할 $a$ 의 조건 자체를 묻는 서술형으로 바꾸면 I-BW 가 붙어 ★3.'
```

```yaml
- id: GN-CALC2-77-145
  page: 77
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $\lim_{x\to\infty}ax\{\ln(x+b)-\ln x\}=5$ 를 만족시키는 상수 $a$, $b$ 에 대하여 $ab$ 구하기.
  category: '로그 차를 ln(1+b/x) 로 묶기 → ∞·0 꼴을 기본 극한으로'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 로그의 차를 $\\ln\\left(1+\\frac bx\\right)$ 한 덩어리로 묶어야 $x\\ln(1+\\frac bx)\\to b$ 가 보인다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '∞·0 꼴 로그 극한을 정의꼴로 환원해 미정계수 결정'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $\ln(x+b)-\ln x=\ln\left(1+\frac bx\right)$ 로 묶으면 $ax\ln\left(1+\frac bx\right)\to ab$ 이고, 묻는 것이 $ab$ 자체라 $a$, $b$ 를 따로 구할 필요가 없다.
    통찰 1개(EQV d1) · M_total 6 · 필수 유제 출발점 → ★2. 묻는 값이 곱이어서 미정계수가 하나로 합쳐지는 설계가 이 문항의 요점.
  tier: star_2
  mechanism_primary: '로그 차 → ln(1+b/x) 묶기 → x·ln(1+b/x) → b → ab = 5'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/77-145.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '극한값(5)과 $x$ 앞 계수($ax$ → $ax^2$ 는 발산하므로 불가)를 바꾼다. 제약: 괄호 안이 $\ln\frac{x+b}{x}$ 로 묶여 $1+\frac bx$ 가 되어야 하므로 두 로그의 진수 차는 상수여야 한다.'
    creative: '(1) $\ln(x+b)-\ln(x-b)$ 로 두면 두 정의꼴로 분리해 $2ab$ 가 되어 ★3(81-157) (2) $a$, $b$ 를 각각 묻도록 조건을 하나 더 주기(★3) (3) $x$ 대신 $x^2$ 를 곱하고 극한이 존재할 조건을 묻기(★4 · I-BW).'
```

```yaml
- id: GN-CALC2-78-e7
  page: 78
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    $f(x)=\frac{\ln(3x+a)}{x}\ (x\ne0)$, $f(0)=b$ 가 $x=0$ 에서 연속일 때 $ab$ 구하기.
  category: '연속 ⇒ 극한 존재 → 분자→0 으로 a → 기본 극한으로 b'
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '지수·로그 함수의 연속 조건에서 미정계수 결정'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $x=0$ 에서 연속 ⇒ $\lim_{x\to0}f(x)=b$ 가 존재 ⇒ 분모→0 이므로 분자→0, 즉 $\ln a=0$, $a=1$. 그러면 $\frac{\ln(1+3x)}{x}\to3=b$.
    연속 조건을 극한 존재로 바꾸는 것은 앞 단원에서 확립된 표준 절차라 통찰 라벨을 붙이지 않았다. 통찰 0 · M_total 7(Mₐ=2 · Mₜ=2: 정의역 $3x+a>0$ 과 $x\ne0$ 경계) · 필수 예제 → ★2.
  tier: star_2
  mechanism_primary: '연속 ⇒ lim f = f(0) → 분자→0 으로 a=1 → ln(1+3x)/x → 3 = b → ab'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$3$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/78-e7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '로그 안 계수($3x$)와 분모($x$ → $2x$)를 바꾼다. 제약: $a$ 는 항상 1 로 고정되고 $b$ 는 두 계수의 비가 되므로, 답 $ab$ 를 바꾸려면 계수를 조정한다.'
    creative: '(1) 로그를 지수로 바꿔 $\frac{e^{3x}+a}{5x}$ 형으로(★2 · 78-146 ⑴) (2) 연속인 구간 전체를 묻거나 불연속점을 찾게 하면 I-MI 가 붙어 ★3 (3) 분모를 $x+1$ 로 두고 $x=-1$ 에서의 연속을 묻는 82-163 형으로 올리면 ★4.'
```

```yaml
- id: GN-CALC2-78-146
  page: 78
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴ $f(x)=\frac{e^{3x}+a}{5x}$ ⑵ $f(x)=\frac{\ln(x+a)}{3^x-1}$ ($x\ne0$, $f(0)=b$)가 $x=0$ 에서 연속일 때 상수 $a$, $b$ 구하기.
  category: '연속 ⇒ 분자→0 으로 a → 기본 극한의 비로 b'
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '지수·로그 함수의 연속 조건에서 미정계수 결정'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 $1+a=0$ 에서 $a=-1$, $\frac{e^{3x}-1}{5x}\to\frac35=b$. ⑵ 는 $\ln a=0$ 에서 $a=1$, $\frac{\ln(1+x)}{3^x-1}$ 을 $x$ 로 나눠 $\frac{1}{\ln3}=b$.
    78-e7 의 유제로 같은 표준 절차. 통찰 0 · M_total 7 · 필수 유제 출발점 → ★2.
  tier: star_2
  mechanism_primary: '연속 ⇒ 분자→0 으로 a 결정 → 분자·분모를 각각 x 로 나눠 두 기본꼴의 비 = b'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $a=-1$, $b=\dfrac{3}{5}$ ⑵ $a=1$, $b=\dfrac{1}{\ln 3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/78-146.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '지수·로그 계수(3x · 5x)와 밑(3)을 바꾼다. 제약: ⑵ 처럼 분모가 $a^x-1$ 이면 $b$ 에 $\frac{1}{\ln a}$ 가 남으므로 밑을 e 로 두면 답이 유리수가 된다.'
    creative: '(1) $a$ 를 주고 연속이 되는 $b$ 만 묻기(★1~2) (2) 분자를 $e^{x+a}+x^3$ 처럼 두 덩어리로 만들면 쪼개기 통찰이 붙어 ★4(82-163) (3) $x=0$ 이 아닌 점에서의 연속을 묻고 치환을 강제(★3).'
```

```yaml
- id: GN-CALC2-78-147
  page: 78
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $x>-\frac17$ 에서 연속인 $f(x)$ 가 $f(x)\ln(1+7x)=x$ 를 만족시킬 때 $f(0)$ 구하기.
  category: '연속성으로 f(0)=lim f(x) 로 옮기기 → 기본 극한의 역수'
  M: {s: 2, k: 1, a: 3, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$x=0$ 을 대입하면 $0=0$ 이라 아무것도 안 나오므로, 연속이라는 조건을 $f(0)=\\lim_{x\\to0}\\frac{x}{\\ln(1+7x)}$ 로 바꿔 쓰는 것이 유일한 진입로"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '관계식으로만 주어진 연속함수의 함숫값(극한으로 환원)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    주어진 등식에 $x=0$ 을 넣으면 $f(0)\cdot0=0$ 으로 정보가 없다. 연속이므로 $f(0)=\lim_{x\to0}f(x)$ 이고, $x\ne0$ 에서 $f(x)=\frac{x}{\ln(1+7x)}$ 이므로 기본 극한의 역수 $\frac17$.
    통찰 1개지만 d2 이고 M_total 8(Mₐ=3 · 일반 함수 $f$)이라 필수 유제 출발점 ★2 를 유지했다. [분류 이슈] 같은 골조의 81-160 은 STEP 2 구역이라 ★3 이 되어 구역 차이만으로 ★ 가 갈린다.
  tier: star_2
  mechanism_primary: '직접 대입 불가 확인 → 연속성으로 f(0)=lim f(x) → f(x)=x/ln(1+7x) 의 극한 = 1/7'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{1}{7}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/78-147.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '로그 안 계수(7x)와 정의역 경계($x>-\frac17$)를 함께 바꾼다. 제약: 정의역 경계는 진수 $1+kx>0$ 에서 나오므로 계수와 연동해서 고쳐야 한다.'
    creative: '(1) 우변을 $x^2$ 로 두면 $f(0)=0$ 이 되어 답의 성격이 바뀜(★2) (2) 좌변을 $(\ln x-1)f(x)$ 로 두고 $f(e)$ 를 묻는 81-160 형(★3) (3) $f(0)$ 이 아니라 $f$ 의 연속성이 보장되는 구간을 묻기(★3 · I-BW).'
```

```yaml
- id: GN-CALC2-79-e8
  page: 79
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["발전"]
  category_type: "발전 예제"
  summary: |
    직선 $x=t\ (t>0)$ 가 두 곡선 $y=3^x$, $y=4^x$ 과 만나는 점을 $\mathrm{Q}$, $\mathrm{R}$, $x$ 축과 만나는 점을 $\mathrm{P}$ 라 할 때 $\lim_{t\to0+}\frac{\overline{\mathrm{QR}}}{\overline{\mathrm{OP}}}$ 구하기.
  category: '선분 길이를 함숫값 차로 옮기기 → 지수 차 쪼개기 → 기본 극한'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "세로 선분 $\\overline{\\mathrm{QR}}$ 를 두 함숫값의 차 $4^t-3^t$ 로, $\\overline{\\mathrm{OP}}$ 를 $t$ 로 옮기는 도형→대수 전환"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "$\\frac{4^t-3^t}{t}$ 를 $\\frac{4^t-1}{t}-\\frac{3^t-1}{t}$ 로 쪼개 $\\ln4-\\ln3$"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: '지수·로그 극한의 도형 활용(선분 길이를 함숫값 차로)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    그림이 두 교점의 $y$ 좌표를 그대로 보여 주므로 $\overline{\mathrm{QR}}=4^t-3^t$, $\overline{\mathrm{OP}}=t$ 를 읽는 데 막힘이 없고, 이후는 76-e5 ⑵ 와 같은 쪼개기다.
    통찰 2개로 +1 후보지만 둘 다 depth 1 이고 계산이 두 줄이라 발전 예제 출발점 ★3 을 유지했다.
  tier: star_3
  mechanism_primary: 'QR = 4^t − 3^t · OP = t → (4^t−1)/t − (3^t−1)/t → ln4 − ln3'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\ln\dfrac{4}{3}$'
  answer_source: "본문 풀이"
  figure: 'crop:fig-79-e8.png'
  latex: latex-bank/gn-calc2/items/79-e8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 밑(3·4)을 다른 양수로 바꾼다. 제약: 답이 $\ln\frac{큰밑}{작은밑}$ 이므로 두 밑의 비가 깔끔한 쌍(2·8, 5·10)을 고르고, 그림의 상하 배치(위가 큰 밑)는 고정해야 라벨이 맞는다.'
    creative: '(1) 한 곡선을 $y=\log_3 x$ 로 바꿔 가로 선분 길이를 묻기(★3 · I-RT d2) (2) 분모를 $\overline{\mathrm{OP}}$ 대신 삼각형 넓이로 두면 차수 조정이 붙어 ★4 (3) $t\to\infty$ 로 바꾸면 지수 대소 비교 문제가 되어 골조가 달라짐(★3).'
```

```yaml
- id: GN-CALC2-79-148
  page: 79
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    곡선 $y=e^{2x}$ 위의 두 점 $\mathrm{A}(0,1)$, $\mathrm{P}(t,e^{2t})$ 과 $x$ 축 위의 점 $\mathrm{Q}(f(t),0)$ 에 대하여 $\overline{\mathrm{AQ}}=\overline{\mathrm{PQ}}$ 일 때 $\lim_{t\to0}f(t)$ 구하기.
  category: '거리 조건을 좌표식으로 → f(t) 를 명시적으로 풀기 → 기본 극한으로 쪼개기'
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$\\overline{\\mathrm{AQ}}=\\overline{\\mathrm{PQ}}$ 를 거리 제곱의 등식으로 옮겨 $f(t)$ 에 대한 일차식으로 푸는 도형→대수 전환"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "$f(t)=\\frac{t^2+e^{4t}-1}{2t}$ 를 $\\frac{t}{2}+\\frac{e^{4t}-1}{2t}$ 로 갈라 기본 극한 적용"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: '지수·로그 극한의 도형 활용(거리 조건에서 얻은 함수의 극한)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 점에서 같은 거리에 있는 $x$ 축 위의 점이므로 $\overline{\mathrm{AQ}}^2=\overline{\mathrm{PQ}}^2$ 을 쓰면 $f(t)$ 의 제곱항이 상쇄되어 일차식이 남는다. 그 뒤가 쪼개기.
    통찰 2개(RT d2 · EQV d1) · M_total 8 이지만 대수 처리는 표준이라 발전 유제 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: 'AQ² = PQ² → f(t) 제곱항 상쇄 → f(t) = (t² + e^{4t} − 1)/(2t) → t/2 + (e^{4t}−1)/(2t) → 2'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/79-148.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '곡선의 지수 계수($e^{2x}$ → $e^{3x}$)와 A 의 좌표를 바꾼다. 제약: A 가 곡선 위의 점($x=0$)이어야 $\overline{\mathrm{AQ}}^2$ 의 상수항이 1 로 맞아 제곱항이 깨끗이 상쇄된다.'
    creative: '(1) Q 를 $y$ 축 위의 점으로 옮기면 식의 대칭이 달라져 ★3 유지 (2) $\overline{\mathrm{AQ}}=2\overline{\mathrm{PQ}}$ 로 바꾸면 제곱항이 남아 이차식 풀이가 추가돼 ★4 (3) $f(t)$ 의 극한이 아니라 $\lim\frac{f(t)-2}{t}$ 를 물으면 한 차수 더 들어가 ★4.'
```

```yaml
- id: GN-CALC2-79-149
  page: 79
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    곡선 $y=2\ln x$ 위의 점 $\mathrm{P}(t,2\ln t)$ 와 $\mathrm{A}(1,0)$, $\mathrm{B}(e,0)$ 에 대하여 삼각형 $\mathrm{PAB}$ 의 넓이를 $S(t)$ 라 할 때 $\lim_{t\to1+}\frac{S(t)}{t-1}$ 구하기.
  category: '넓이를 밑변 AB·높이 2ln t 로 대수화 → ln t/(t−1) 기본 극한'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "삼각형의 밑변을 $x$ 축 위의 $\\overline{\\mathrm{AB}}=e-1$ 로, 높이를 $\\mathrm{P}$ 의 $y$ 좌표 $2\\ln t$ 로 읽는 도형→대수 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '지수·로그 극한의 도형 활용(넓이 함수의 극한)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $S(t)=\frac12(e-1)\cdot2\ln t=(e-1)\ln t$ 로 정리되면 남는 것은 $\frac{\ln t}{t-1}$ 뿐이고, $t=1+h$ 치환으로 1 이 된다.
    통찰 1개(RT d1) · M_total 6 · 발전 유제 출발점 → ★3. 밑변이 $x$ 축 위에 고정돼 있어 높이 읽기가 쉬운 것이 난도를 낮춘다.
  tier: star_3
  mechanism_primary: 'S(t) = ½·(e−1)·2ln t = (e−1)ln t → ln t/(t−1) → 1 → e−1'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$e-1$'
  answer_source: "답지"
  figure: 'crop:fig-79-149.png'
  latex: latex-bank/gn-calc2/items/79-149.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '곡선의 계수($2\ln x$ → $3\ln x$)와 B 의 $x$ 좌표($e$ → $e^2$)를 바꾼다. 제약: A 는 곡선과 $x$ 축의 교점 $(1,0)$ 이어야 $t\to1+$ 에서 $0/0$ 꼴이 되고, 그림의 P 위치(제1사분면)는 고정.'
    creative: '(1) 분모를 $\sqrt{t-1}$ 로 두면 극한이 0 이 되어 차수 감각을 묻는 문제(★3) (2) 삼각형 대신 사다리꼴·두 삼각형의 비로 바꾸면 82-161 형(★3) (3) 곡선을 $y=e^x-1$ 로 바꾸고 $t\to0+$ 로 두면 지수형 같은 골조(★3).'
```

### 연습문제 STEP 1

```yaml
- id: GN-CALC2-80-150
  page: 80
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    극한값이 $e$ 인 것만을 보기 ㄱ~ㄹ($\lim_{x\to0}(1-x)^{-\frac1x}$, $\lim_{x\to-\infty}\left(\frac{x-1}{x}\right)^{x}$, $\lim_{x\to2}\left(\frac x2\right)^{\frac{1}{x-2}}$, $\lim_{x\to-1}(x+2)^{\frac{1}{x+1}}$)에서 모두 고르기.
  category: '네 보기를 각각 e^k 로 환산 → 지수 k 가 1 인 것 고르기'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "네 보기가 서로 다른 방식으로 정의꼴을 가리고 있어(부호·무한대 방향·밑이 분수·밑이 $x+2$) 각각을 $e^k$ 로 환산하는 공통 기준을 세워야 비교가 된다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: 'e 의 정의꼴 판별(보기형)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ㄱ 은 $(1-x)^{-\frac1x}=e$, ㄴ 은 $\left(1-\frac1x\right)^{x}=e^{-1}$, ㄷ 은 $x=2+h$ 치환으로 $e^{\frac12}$, ㄹ 은 $x+1=h$ 치환으로 $e$. 네 개를 같은 꼴로 환산해야 골라낼 수 있다.
    통찰 1개(EQV d1) · M_total 7(Mₜ=2: 지수의 부호와 $x\to-\infty$) · STEP 1 출발점 → ★2.
  tier: star_2
  mechanism_primary: '각 보기를 (1+□)^{1/□} 꼴로 환산 → 남은 지수 k 비교 → k=1 인 것'
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: "ㄱ, ㄹ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/80-150.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '각 보기의 계수를 조정해 정답 보기 집합을 바꾼다. 제약: 네 보기 중 최소 하나는 $e$ 여야 하고, 나머지는 $e^k\ (k\ne1)$ 로 확실히 갈라져야 애매함이 없다.'
    creative: '(1) 기준을 $e^2$ 로 바꿔 지수 계산을 한 단계 더 요구(★2) (2) 극한이 존재하지 않는 보기를 하나 섞으면 I-VF 가 붙어 ★3 (3) 보기별 극한값을 크기순으로 나열하게 하면 80-151 형 대소 비교(★2~3).'
```

```yaml
- id: GN-CALC2-80-151
  page: 80
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $A=\lim_{x\to\infty}\left\{\frac{3^{x+1}}{3^x-3}+\log_{\frac12}\left(1+\frac{1}{x^2}\right)\right\}$, $B=\lim_{x\to0}\frac{1}{x}\{\ln(3+x)-\ln3\}$, $C=\lim_{x\to0}\frac{\ln(1+2x)}{\ln(1+4x)}$ 의 대소 비교.
  category: '세 극한을 각각 계산(지수 최고차·로그 차 묶기·로그 비) → 대소 비교'
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "$B$ 의 $\\ln(3+x)-\\ln3$ 을 $\\ln\\left(1+\\frac x3\\right)$ 한 덩어리로 묶어야 기본 극한이 보인다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '여러 지수·로그 극한값의 대소 비교'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $A$ 는 분자·분모를 $3^x$ 로 나눠 3 이고 로그항은 0 으로 사라진다. $B$ 는 로그 차 묶기로 $\frac13$, $C$ 는 두 기본꼴의 비로 $\frac12$.
    세 극한이 서로 다른 도구를 쓰지만 모두 이 단원 기본 공식이라 +1 하지 않았다. 통찰 1개(EQV d1) · M_total 7 · STEP 1 출발점 → ★2.
  tier: star_2
  mechanism_primary: 'A: 3^x 로 나누기 + 로그항 소멸 → 3 · B: ln 차 묶기 → 1/3 · C: 계수 비 → 1/2'
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '$B<C<A$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/80-151.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$A$ 의 밑(3)과 $B$ 의 상수(3), $C$ 의 두 계수(2·4)를 바꾼다. 제약: 세 값이 서로 달라야 대소가 확정되고, $A$ 의 로그항은 $x\to\infty$ 에서 0 으로 사라지도록 진수를 $1+\frac{1}{x^2}$ 꼴로 유지해야 한다.'
    creative: '(1) 값이 아니라 $A-B$, $\frac CA$ 처럼 결합을 묻기(★2) (2) 세 극한 중 하나를 발산형으로 두고 비교 가능성을 따지게 하면 ★3 · I-VF (3) 미지수를 넣어 $B<C<A$ 가 되는 조건을 묻는 역방향(★4 · I-BW).'
```

```yaml
- id: GN-CALC2-80-152
  page: 80
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $\lim_{x\to0}\frac{\ln(1+2x)(1+3x)}{e^{2x}-1}$ 의 값 구하기.
  category: '로그의 곱을 합으로 분리 → 각 기본꼴의 계수 합 / 분모 계수'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "진수가 곱이므로 $\\ln(1+2x)+\\ln(1+3x)$ 로 갈라야 각각 기본 극한이 되고, 전개해서 $\\ln(1+5x+6x^2)$ 로 두면 진행이 막힌다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '로그의 성질로 분리한 뒤 기본 극한 적용'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분리 후 분자·분모를 $x$ 로 나누면 $\frac{2+3}{2}$. 곱을 합으로 가르는 한 줄이 이 문항의 전부이고, 전개 쪽으로 가면 계산이 막히므로 방향 선택이 요점이다.
    통찰 1개(EQV d1) · M_total 5 이지만 통찰이 있어 −1 조건 해당 없음 → STEP 1 출발점 ★2.
  tier: star_2
  mechanism_primary: 'ln{(1+2x)(1+3x)} = ln(1+2x) + ln(1+3x) → (2+3)/2'
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '$\dfrac{5}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/80-152.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '진수의 두 계수(2·3)와 분모 지수 계수(2)를 바꾼다. 제약: 진수가 $x\to0$ 에서 1 이 되도록 각 인수를 $1+kx$ 꼴로 유지해야 하고, 답은 (계수 합)/(분모 계수) 이다.'
    creative: '(1) 진수를 세 인수의 곱으로 늘리기(★2 유지 · 계산량만 증가) (2) 진수를 몫 $\frac{1+2x}{1-3x}$ 로 두면 차로 갈라져 부호 처리가 추가돼 ★2~3 (3) 분모를 $\ln(1+ax)$ 로 두고 극한값을 주어 $a$ 를 찾게 하면 미정계수형 ★2.'
```

```yaml
- id: GN-CALC2-80-153
  page: 80
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $f(x)=3^x-1$ 의 역함수를 $g(x)$ 라 할 때 $\lim_{x\to0}\frac{\ln3\times g(x)}{x}$ 의 값 구하기.
  category: '역함수를 로그식으로 명시 → ln3 을 밑 변환에 흡수 → 기본 극한'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "역함수를 기호로 두지 않고 $g(x)=\\log_3(x+1)$ 로 명시 전환하면 $\\ln3\\times\\log_3(x+1)=\\ln(x+1)$ 로 계수가 흡수된다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '역함수와 지수·로그 극한의 결합'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $y=3^x-1$ 을 $x$ 에 대해 풀면 $g(x)=\log_3(x+1)$. 문제에 붙어 있는 $\ln3$ 은 밑 변환 $\log_3(x+1)=\frac{\ln(x+1)}{\ln3}$ 의 분모를 지우려고 놓인 장치이므로 식이 $\frac{\ln(1+x)}{x}$ 로 떨어진다.
    통찰 1개(RT d2) · M_total 6 · STEP 1 출발점 → ★2.
  tier: star_2
  mechanism_primary: 'g(x) = log_3(x+1) → ln3·g(x) = ln(x+1) → ln(1+x)/x → 1'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/80-153.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑(3)과 상수항(−1)을 바꾼다. 제약: 앞에 곱해진 상수가 $\ln(밑)$ 과 같아야 답이 1 로 떨어지고, 상수항은 $f(0)=0$ 이 되도록 맞춰야 $x\to0$ 에서 $g(x)\to0$ 이다.'
    creative: '(1) 앞의 $\ln3$ 을 빼고 답에 $\frac{1}{\ln3}$ 이 남게 하기(★2 유지) (2) $\lim\frac{g(x)}{f(x)}$ 를 묻기(★3) (3) $f$ 를 $f(x)=e^{2x}-1$ 로 두고 역함수를 직접 구하지 않은 채 그래프 대칭으로 처리하게 하면 I-SYM 이 붙어 ★3~4.'
```

```yaml
- id: GN-CALC2-80-154
  page: 80
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $\lim_{x\to0}\frac{3^x+x\ln a-1}{2x}=1$ 일 때 양수 $a$ 의 값 구하기.
  category: '분자를 (3^x−1) 과 x ln a 로 쪼개기 → 로그 방정식'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "분자를 $(3^x-1)+x\\ln a$ 로 갈라 앞 덩어리만 기본 극한에 넣고 뒤는 $x$ 와 약분한다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '지수 극한의 미정계수 결정(로그 방정식으로 환원)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분자가 $x\to0$ 에서 자동으로 0 이 되므로 0/0 강제 단계는 없고, 쪼개면 $\frac{\ln3}{2}+\frac{\ln a}{2}=1$, 즉 $\ln3a=2$ 로 정리된다.
    통찰 1개(EQV d1) · M_total 6 · STEP 1 출발점 → ★2. 답이 $e$ 를 포함한 꼴로 나오는 것이 이 단원다운 마무리.
  tier: star_2
  mechanism_primary: '분자 쪼개기 → (ln3 + ln a)/2 = 1 → ln 3a = 2 → 3a = e²'
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '$\dfrac{e^2}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/80-154.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑(3)·분모 계수(2)·극한값(1)을 바꾼다. 제약: 답이 $\frac{e^{k}}{밑}$ 꼴이므로 (극한값)×(분모 계수)가 정수면 깔끔하고, $a>0$ 조건은 유지해야 $\ln a$ 가 정의된다.'
    creative: '(1) $x\ln a$ 를 $a^x-1$ 로 바꾸면 두 지수의 합 꼴이 되어 ★2~3 (2) 극한값을 미지수로 두고 $a$ 의 범위를 묻기(★3 · I-BW) (3) 조건을 두 개 주어 $a$, $b$ 를 동시에 찾게 하면 81-159 형(★3).'
```

### 연습문제 STEP 2

```yaml
- id: GN-CALC2-81-155
  page: 81
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    $f(x)=\frac{a\times3^{x+1}+b\times2^x}{3^x-2^{x-1}}$ 에 대하여 $\lim_{x\to\infty}f(x)=12$, $\lim_{x\to0}f(x)=8$ 일 때 $a+b$ 구하기.
  category: '3^x 로 나눠 (2/3)^x→0 처리 → a 결정 → x=0 대입으로 b'
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$x\\to\\infty$ 에서는 밑이 큰 $3^x$ 로 분자·분모를 나눠 $\\left(\\frac23\\right)^x\\to0$ 을 쓰는 동치 변환이 필요하다 — 밑의 대소를 먼저 판단해야 한다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '지수함수 분수식의 극한(x→∞·x→0)과 미정계수'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $x\to\infty$ 에서는 $3^x$ 로 나눠 $3a=12$, $x\to0$ 에서는 단순 대입으로 $\frac{3a+b}{1/2}=8$. 두 극한이 서로 다른 처리(나누기 vs 대입)를 요구하는 것이 변별점이다.
    통찰 1개(EQV d2) · M_total 8 · STEP 2 출발점 → ★3.
  tier: star_3
  mechanism_primary: 'x→∞: 3^x 로 나누기 → 3a = 12 → a=4 · x→0: 대입 → 2(3a+b) = 8 → b=−8'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/81-155.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 밑(3·2)과 두 극한값(12·8)을 바꾼다. 제약: 분모에서 밑이 큰 쪽의 계수가 0 이 아니어야 $x\to\infty$ 극한이 유한하고, $x=0$ 에서 분모가 0 이 되지 않아야 한다.'
    creative: '(1) $x\to-\infty$ 조건을 추가하면 밑의 대소가 뒤집혀 I-MI 가 붙어 ★4 (2) $a$, $b$ 를 각각 묻는 대신 $f$ 의 점근선을 묻기(★3 · I-RT) (3) 분모를 $3^x-2^x$ 로 단순화하고 조건을 하나만 주면 ★2.'
```

```yaml
- id: GN-CALC2-81-156
  page: 81
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    $\lim_{n\to\infty}\left\{\frac12\left(1+\frac1n\right)\left(1+\frac{1}{n+1}\right)\cdots\left(1+\frac{1}{2n}\right)\right\}^{n}$ 의 값 구하기.
  category: '각 인수를 (k+1)/k 로 보고 망원곱 축약 → e 의 정의꼴'
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-PD
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$1+\\frac1k=\\frac{k+1}{k}$ 로 보면 $k=n$ 부터 $2n$ 까지의 곱이 이웃끼리 지워지는 망원곱이어서 $\\frac{2n+1}{n}$ 하나로 축약된다는 규칙 발견"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "축약 결과에 $\\frac12$ 을 곱하면 $1+\\frac{1}{2n}$ 이므로 $n$ 제곱이 $e$ 의 정의꼴이 된다"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: '망원곱으로 축약한 뒤 e 의 정의를 쓰는 극한'
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    괄호 안을 그대로 전개하려 하면 손을 댈 수 없고, 각 인수를 분수 $\frac{k+1}{k}$ 로 바꿔야 비로소 이웃 소거가 보인다. 축약 뒤 $\frac12\cdot\frac{2n+1}{n}=1+\frac{1}{2n}$ 이 되어 지수 $n$ 과 짝이 맞는다.
    통찰 2개(PD d2 · EQV d1) · M_total 8 → STEP 2 출발점에서 +1 하여 ★4. §2.13 저노출 유형(I-PD) 보유로 ★4 게이트 통과.
  tier: star_4
  mechanism_primary: '1+1/k = (k+1)/k → 망원곱 → (2n+1)/n → ½ 곱해 1+1/(2n) → n 제곱 → e^{1/2}'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$e^{\frac{1}{2}}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/81-156.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '곱의 끝 항($2n$ → $3n$)과 앞의 상수($\frac12$ → $\frac13$)를 연동해 바꾼다. 제약: 망원곱 결과가 $\frac{끝+1}{n}$ 이므로 앞 상수는 그 역수에 맞춰야 $1+\frac{c}{n}$ 꼴이 되고, 그래야 극한이 $e$ 의 거듭제곱으로 떨어진다.'
    creative: '(1) 지수를 $n$ 대신 $2n$ 으로 두면 답의 지수만 배가 되는 같은 골조(★4) (2) 곱을 $\left(1-\frac1k\right)$ 로 바꾸면 소거 방향이 반대가 되어 부호 함정 추가(★4) (3) 앞의 상수를 미지수로 두고 극한값을 $e$ 로 주면 역추적이 붙어 ★4~5 후보(I-BW 추가).'
```

```yaml
- id: GN-CALC2-81-157
  page: 81
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    $\lim_{x\to\infty}x\ln\frac{x+1}{x-1}$ 의 값 구하기.
  category: '로그의 몫을 두 정의꼴로 분리 → 1 − (−1)'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "$\\ln\\frac{x+1}{x-1}=\\ln\\left(1+\\frac1x\\right)-\\ln\\left(1-\\frac1x\\right)$ 로 갈라야 $x$ 를 각각에 곱해 두 기본 극한이 된다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '∞·0 꼴 로그 극한의 두 정의꼴 분리'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    분자·분모를 $x$ 로 나눠 진수를 $\frac{1+\frac1x}{1-\frac1x}$ 로 만든 뒤 로그를 차로 가르면 $1-(-1)=2$.
    [분류 이슈] 통찰 1개 d1 · M_total 5 로 실제 풀이는 두 줄이라 체감은 ★2 이지만, STEP 2 구역 출발점을 억지로 내리지 않고 ★3 으로 두었다.
  tier: star_3
  mechanism_primary: '진수를 (1+1/x)/(1−1/x) 로 → 로그 차로 분리 → x·ln(1±1/x) → 1 − (−1) = 2'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/81-157.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '진수의 상수(±1)를 $\frac{x+a}{x-b}$ 로 일반화하면 답이 $a+b$ 가 된다. 제약: 분자·분모의 최고차 계수가 같아야 진수가 1 로 수렴해 $\infty\cdot0$ 꼴이 되고, 다르면 발산한다.'
    creative: '(1) 앞의 $x$ 를 $x^2$ 로 두고 발산함을 판정하게 하기(★3 · I-VF) (2) 극한값을 주고 상수를 찾게 하면 77-145 형 미정계수(★3) (3) 지수꼴 $\left(\frac{x+1}{x-1}\right)^{x}$ 로 바꾸면 82-162 형(★4).'
```

```yaml
- id: GN-CALC2-81-158
  page: 81
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    연속함수 $f(x)$ 에 대하여 $\lim_{x\to0}\frac{f(x)}{\ln(1-3x)}=12$ 일 때 $\lim_{x\to0}\frac{e^{2x}-1}{f(x)}$ 의 값 구하기.
  category: '조건을 f(x)/x 의 극한으로 환산 → 구하는 식을 두 비의 곱으로 분해'
  M: {s: 3, k: 1, a: 3, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$f$ 의 식을 알 수 없으므로 주어진 조건을 $\\frac{f(x)}{x}=\\frac{f(x)}{\\ln(1-3x)}\\cdot\\frac{\\ln(1-3x)}{x}$ 로 기준을 $x$ 로 통일해 $-36$ 을 얻는 것이 유일한 연결 고리"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '미지 함수의 극한 조건 이식(기준 x 통일)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $f$ 를 구하려 들면 안 되고, 두 식을 잇는 공통 기준 $\frac{f(x)}{x}$ 를 만들어야 한다. 조건에서 $\frac{f(x)}{x}\to12\times(-3)=-36$, 구하는 식은 $\frac{e^{2x}-1}{x}\cdot\frac{x}{f(x)}\to2\times\left(-\frac{1}{36}\right)$.
    통찰 1개지만 d2 이고 Mₐ=3(일반 함수 $f$) · M_total 8 → STEP 2 출발점 ★3.
  tier: star_3
  mechanism_primary: 'f(x)/x = [f(x)/ln(1−3x)]·[ln(1−3x)/x] → −36 → (e^{2x}−1)/x · x/f(x) → 2·(−1/36)'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-\dfrac{1}{18}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/81-158.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '조건의 값(12)과 두 계수(−3x · 2x)를 바꾼다. 제약: 답은 (구하는 쪽 계수)/{(조건값)×(조건 쪽 계수)} 이므로 분모가 0 이 되지 않도록 계수의 부호·크기만 맞추면 된다.'
    creative: '(1) 조건과 결론의 분자·분모를 뒤집어 역수 관계를 묻기(★3 유지) (2) 조건을 두 개 주고 $f$ 의 다른 극한을 묻기(★4 · I-CON) (3) $f$ 의 연속성을 이용해 $f(0)$ 의 값까지 묻게 하면 78-147 의 골조가 결합되어 ★4.'
```

```yaml
- id: GN-CALC2-81-159
  page: 81
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    ㈎ $\lim_{x\to1}\frac{ax+b}{e^{x-1}-1}=3$, ㈏ $\lim_{x\to0}\frac{(a^2+b^2)^x-(a-b)^x}{x}=\ln c$ 를 만족시키는 상수 $a$, $b$, $c$ 에 대하여 $abc$ 구하기.
  category: '㈎ 분자→0 으로 b=−a → a 결정 → ㈏ 지수 차 쪼개기로 c'
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "㈏ 의 $A^x-B^x$ 를 $(A^x-1)-(B^x-1)$ 로 쪼개 $\\ln A-\\ln B=\\ln\\frac AB$ 로 정리해야 $c$ 가 나온다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '두 극한 조건을 연결한 미정계수 결정'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ㈎ 에서 분모→0 이므로 분자→0, 즉 $a+b=0$. 그러면 $\frac{a(x-1)}{e^{x-1}-1}\to a=3$, $b=-3$. ㈏ 는 밑이 $a^2+b^2$ 와 $a-b$ 로 확정된 뒤 쪼개기로 $\ln\frac{18}{6}=\ln3$.
    ㈎ 의 0/0 강제는 표준 절차라 라벨하지 않고 ㈏ 의 쪼개기만 통찰(EQV d1). 조건이 둘이고 미지수가 셋이라 M_total 8 · STEP 2 출발점 → ★3.
  tier: star_3
  mechanism_primary: '㈎ 분자→0 ⇒ b=−a → a=3, b=−3 → ㈏ 지수 차 쪼개기 → ln(18/6)=ln3 ⇒ c=3 → abc'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-27$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/81-159.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '㈎ 의 극한값(3)과 극한점(1), ㈏ 에서 두 밑을 만드는 식($a^2+b^2$ · $a-b$)을 바꾼다. 제약: 두 밑이 모두 양수여야 하고 $a-b\ne1$ 이어야 ㈏ 가 자명해지지 않는다.'
    creative: '(1) ㈏ 의 답을 $\ln c$ 대신 구체적 수로 주고 $c$ 를 역추적하게 하기(★3) (2) ㈎ 를 연속 조건으로 바꾸면 78-e7 골조와 결합(★3) (3) 조건을 하나 더 늘려 세 미지수를 연립으로 묶으면 I-CON 이 붙어 ★4.'
```

```yaml
- id: GN-CALC2-81-160
  page: 81
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    양의 실수 전체에서 연속인 $f(x)$ 가 $(\ln x-1)f(x)=x^2-e^2$ 를 만족시킬 때 $f(e)$ 구하기.
  category: '연속성으로 f(e)=lim f(x) → ln x−1 = ln(x/e) 묶기 → x=e(1+t) 치환'
  M: {s: 3, k: 2, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$x=e$ 를 대입하면 $0=0$ 이라 정보가 없으므로 연속을 $f(e)=\\lim_{x\\to e}\\frac{x^2-e^2}{\\ln x-1}$ 로 바꿔 써야 한다"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "$\\ln x-1=\\ln\\frac xe$ 로 묶고 $x=e(1+t)$ 로 두면 분모가 $\\ln(1+t)$ 기본꼴이 된다"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: '관계식으로만 주어진 연속함수의 함숫값(극한으로 환원)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    78-147 과 같은 골조지만 분모의 $\ln x-1$ 을 $\ln\frac xe$ 로 묶는 단계와 $x=e(1+t)$ 치환이 더 붙는다. 분자는 $(x-e)(x+e)$ 로 갈라 $x-e=et$ 와 짝지으면 $\frac{et\cdot2e}{t}=2e^2$.
    [분류 이슈] 통찰 2개로 +1 후보지만 둘 다 I-EQV(이 단원 표준 도구)여서 §2.13 저노출 유형이 없어 ★4 로 올리지 않고 STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: '연속 ⇒ f(e)=lim → ln x−1 = ln(x/e) → x=e(1+t) 치환 → (et)(2e)/ln(1+t) → 2e²'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2e^2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/81-160.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '우변의 차수($x^2-e^2$ → $x^3-e^3$)와 좌변의 상수(1 → 2, 즉 기준점 $e^2$)를 바꾼다. 제약: 좌변이 0 이 되는 점과 우변이 0 이 되는 점이 같아야 $f$ 가 그 점에서 연속으로 정의되고, 그 점이 곧 묻는 값의 위치다.'
    creative: '(1) 좌변을 $(e^x-e)f(x)$ 로 두고 $f(1)$ 을 묻기(★3 · 지수형 같은 골조) (2) $f(e)$ 가 아니라 $f$ 의 식 전체를 구하고 다른 점의 값을 묻기(★3) (3) 우변을 $x^2-e^2$ 대신 $\sin$ 류 다른 단원 함수로 두면 I-XU 가 붙어 ★4.'
```

```yaml
- id: GN-CALC2-82-161
  page: 82
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    곡선 $y=\ln x$ 위의 점 $\mathrm{P}$ 와 $\mathrm{A}(1,4)$, $\mathrm{B}(1,0)$, $\mathrm{C}(e,0)$ 에 대하여 삼각형 $\mathrm{PAB}$, $\mathrm{PBC}$ 의 넓이를 $S_1$, $S_2$ 라 할 때 $\mathrm{P}\to\mathrm{B}$ 에서 $\frac{S_2}{S_1}$ 의 극한값 구하기.
  category: '두 삼각형의 밑변을 AB·BC 로 잡아 좌표식화 → 비에서 공통 인수 소거 → 기본 극한'
  M: {s: 3, k: 1, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$S_1$ 은 세로변 $\\overline{\\mathrm{AB}}=4$ 를 밑변으로 잡아 높이가 $p-1$, $S_2$ 는 가로변 $\\overline{\\mathrm{BC}}=e-1$ 을 밑변으로 잡아 높이가 $\\ln p$ — 두 삼각형에서 밑변을 다르게 골라야 식이 단순해진다"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "$\\frac{S_2}{S_1}=\\frac{(e-1)\\ln p}{4(p-1)}$ 에서 남는 $\\frac{\\ln p}{p-1}$ 을 $p=1+h$ 치환으로 1 로 보낸다"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: '지수·로그 극한의 도형 활용(두 넓이의 비)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $\mathrm{B}(1,0)$ 이 곡선 $y=\ln x$ 위의 점이므로 $\mathrm{P}\to\mathrm{B}$ 는 $p\to1+$ 이다. 밑변을 각각 $\overline{\mathrm{AB}}$, $\overline{\mathrm{BC}}$ 로 잡는 선택이 핵심이고, 비를 만들면 $\frac12$ 과 높이의 공통 구조가 정리된다.
    [분류 이슈] 통찰 2개로 +1 후보지만 비에서 공통 인수가 소거돼 실제 계산은 기본 극한 한 줄이라 STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: 'S₁ = ½·4·(p−1) · S₂ = ½·(e−1)·ln p → S₂/S₁ = (e−1)ln p / {4(p−1)} → (e−1)/4'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{e-1}{4}$'
  answer_source: "답지"
  figure: 'crop:fig-82-161.png'
  latex: latex-bank/gn-calc2/items/82-161.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'A 의 $y$ 좌표(4)와 C 의 $x$ 좌표($e$)를 바꾼다. 제약: B 는 곡선과 $x$ 축의 교점 $(1,0)$ 으로 고정해야 $\mathrm{P}\to\mathrm{B}$ 가 $0/0$ 꼴을 만들고, 그림의 사분면 조건(P 는 제1사분면)도 함께 고정된다.'
    creative: '(1) 곡선을 $y=e^x-1$ 로 바꾸고 원점 근방으로 옮기기(★3 유지) (2) $S_1+S_2$ 나 $S_1S_2$ 의 극한을 묻게 하면 차수 맞추기가 추가돼 ★4 (3) P 가 B 가 아니라 C 쪽으로 가게 하면 극한이 상수비가 되어 난도가 내려감(★2).'
```

### 연습문제 실력 UP

```yaml
- id: GN-CALC2-82-162
  page: 82
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    $\lim_{x\to-\infty}\left(\frac{x-a}{x+a}\right)^{-x}=e$ 를 만족시키는 상수 $a$ 구하기.
  category: '분수 밑을 두 정의꼴의 몫으로 분리 → 지수 비교'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$\\left(\\frac{x-a}{x+a}\\right)^{-x}=\\frac{\\left(1-\\frac ax\\right)^{-x}}{\\left(1+\\frac ax\\right)^{-x}}$ 로 갈라 각각을 $e^{a}$, $e^{-a}$ 로 보내야 한다 — 밑을 통째로 두면 정의꼴이 보이지 않는다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '분수꼴 밑의 e 정의 극한에서 미정계수 결정'
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    분자·분모를 $x$ 로 나눠 $1\mp\frac ax$ 두 개로 가른 뒤 각각 지수 $-x$ 를 $\mp\frac xa\cdot(\mp a)$ 로 분해하면 $\frac{e^{a}}{e^{-a}}=e^{2a}$. 지수 비교로 $2a=1$.
    [분류 이슈] 통찰 1개(EQV d2) · 도구는 하나뿐이라 체감은 ★3 이지만, 실력 UP 구역 출발점 ★4 에 −1 조건(통찰 0 · M_total ≤ 5)이 해당하지 않아 ★4 로 두었다.
  tier: star_4
  mechanism_primary: '밑을 (1−a/x)/(1+a/x) 로 분리 → 각각 e^{a}, e^{−a} → e^{2a} = e → a = ½'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/82-162.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '우변($e$ → $e^3$)과 지수($-x$ → $2x$)를 바꾼다. 제약: 분자·분모의 상수가 $\mp a$ 로 부호만 다를 때 답이 $\frac{지수}{2}$ 꼴로 깔끔하고, 상수를 $a$, $b$ 로 따로 두면 $a+b$ 가 결정될 뿐 개별값은 정해지지 않는다.'
    creative: '(1) 분자·분모의 상수를 $a$, $b$ 로 따로 두고 $a+b$ 를 묻기(★4 유지 · 77-145 식 설계) (2) $x\to+\infty$ 로 바꾸면 같은 답이 나오는지 확인하게 해 I-VF 추가(★4) (3) 밑을 $\frac{x^2-a}{x^2+a}$ 로 올리면 차수 조정이 필요해 ★4~5 후보.'
```

```yaml
- id: GN-CALC2-82-163
  page: 82
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    $f(x)=\frac{e^{x+a}+x^3}{x+1}\ (x\ne-1)$, $f(-1)=b$ 가 $x=-1$ 에서 연속일 때 $a-b$ 구하기.
  category: '연속 ⇒ 분자→0 으로 a → 분자를 지수 덩어리와 삼차 인수분해로 쪼개기'
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$a=1$ 을 넣은 분자 $e^{x+1}+x^3$ 에는 기본꼴이 없으므로 $(e^{x+1}-1)+(x^3+1)$ 로 쪼개고 뒤쪽은 $(x+1)(x^2-x+1)$ 로 인수분해해야 $x+1$ 이 약분된다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '지수·로그 함수의 연속 조건에서 미정계수 결정'
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    연속 ⇒ 분자→0 이므로 $e^{a-1}-1=0$, $a=1$. 그다음 분자를 $-1+1$ 을 넣어 두 덩어리로 가르면 $\frac{e^{x+1}-1}{x+1}\to1$ 과 $x^2-x+1\to3$ 의 합으로 $b=4$.
    쪼개기가 지수 기본꼴과 삼차 인수분해 두 가지를 동시에 요구해 78-146 보다 한 층 위다. 통찰 1개(EQV d2) · M_total 9 · 실력 UP 출발점 → ★4.
  tier: star_4
  mechanism_primary: '분자→0 ⇒ a=1 → (e^{x+1}−1)+(x³+1) 로 쪼개기 → 1 + 3 = b = 4 → a−b'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/82-163.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '연속점($x=-1$)과 분자의 다항식($x^3$ → $x^5$)을 바꾼다. 제약: 다항식은 연속점에서 지수항의 값과 합이 0 이 되어야 하고, $x+1$ 을 인수로 가져야 약분된다(홀수 차수여야 $x^n+1$ 이 $x+1$ 로 나뉜다).'
    creative: '(1) 분자를 $e^{x+a}+bx$ 로 두고 $a$, $b$ 를 동시에 찾게 하기(★4) (2) 연속이 되도록 하는 $a$ 가 여러 개인 설정으로 바꾸면 I-MI 가 붙어 ★4~5 (3) 좌·우 극한이 다른 조각함수로 만들어 연속 조건을 두 개로 늘리면 ★4.'
```

```yaml
- id: GN-CALC2-82-164
  page: 82
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: ["평가원 기출"]
  category_type: "연습문제 실력 UP"
  summary: |
    곡선 $y=e^{x^2}-1\ (x\ge0)$ 이 두 직선 $y=t$, $y=5t$ 와 만나는 점을 $\mathrm{A}$, $\mathrm{B}$, $\mathrm{B}$ 에서 $x$ 축에 내린 수선의 발을 $\mathrm{C}$ 라 할 때 삼각형 $\mathrm{ABC}$ 의 넓이 $S(t)$ 에 대하여 $\lim_{t\to0+}\frac{S(t)}{t\sqrt t}$ 의 값. 5지선다.
  category: '교점의 x 좌표를 역함수 √(ln(1+y)) 로 표현 → 넓이 → √t 로 차수 맞추기'
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "가로 방향 길이를 구해야 하므로 곡선을 $x=\\sqrt{\\ln(1+y)}$ 로 뒤집어 두 교점의 $x$ 좌표를 $\\sqrt{\\ln(1+t)}$, $\\sqrt{\\ln(1+5t)}$ 로 표현하는 전환"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$\\frac{S(t)}{t\\sqrt t}$ 에서 $\\sqrt t$ 를 근호 안으로 넣어 $\\sqrt{\\frac{\\ln(1+kt)}{t}}\\to\\sqrt k$ 로 만드는 차수 맞추기 — 근호 밖에서 기본 극한을 쓰려 하면 진행이 막힌다"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: '지수·로그 극한의 도형 활용(넓이 함수의 극한)'
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    $\mathrm{BC}$ 가 세로변이므로 밑변 $5t$, 높이는 두 교점의 $x$ 좌표 차 $\sqrt{\ln(1+5t)}-\sqrt{\ln(1+t)}$. 이를 $t\sqrt t$ 로 나누면 $\frac52\left(\sqrt{\frac{\ln(1+5t)}{t}}-\sqrt{\frac{\ln(1+t)}{t}}\right)\to\frac52(\sqrt5-1)$.
    통찰 2개(RT d2 · EQV d2) · M_total 9 · 실력 UP + 평가원 기출 → ★4. ★5 는 SC/VF/SYM/XU 통찰이 없고 novelty_score 0 이라 §2.13·§2.14 게이트에서 막힌다.
  tier: star_4
  mechanism_primary: 'x = √(ln(1+y)) → S(t) = ½·5t·{√(ln(1+5t)) − √(ln(1+t))} → √t 를 근호 안으로 → (5/2)(√5−1)'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: "②"
  answer_source: "답지"
  figure: 'crop:fig-82-164.png'
  latex: latex-bank/gn-calc2/items/82-164.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 직선의 높이 비($t$ : $5t$)와 곡선의 지수($x^2$)를 바꾼다. 제약: 답이 $\frac k2(\sqrt k-1)$ 꼴이므로 비 $k$ 는 근호가 살아 있는 값이 좋고, 분모의 차수 $t\sqrt t$ 는 곡선의 지수 $x^2$ 와 연동(지수가 $x^3$ 이면 분모는 $t\sqrt[3]t$)해야 극한이 0 도 $\infty$ 도 아니다.'
    creative: '(1) 수선의 발을 A 쪽에서 내리게 하면 밑변이 $t$ 로 바뀌어 계수만 달라짐(★4 유지) (2) 삼각형 대신 두 교점과 원점이 이루는 넓이를 묻기(★4) (3) 분모를 $t^2$ 로 두고 극한이 발산함을 판정하게 하면 I-VF 가 붙어 ★5 후보.'
```

## 표본 판정 요약 (36문)

- ★ 분포: ★1 3 · ★2 20 · ★3 9 · ★4 4 · ★5 0
- 통찰형 25 · 절차형 11 · premium 0
- 통찰 유형 분포(라벨 31개): I-EQV 24 · I-RT 6 · I-PD 1. 나머지 7유형(XU·BW·MI·SYM·CON·SC·VF)은 이 범위에 0 이다.
- type_hint 상위 5(골조 계열로 묶음): 「기본 극한 공식 적용(계수 맞추기·쪼개기)」 8문(73-137 · 75-e4 · 75-140 · 75-141 · 76-e5 · 76-142 · 76-143 · 80-152) · 「미정계수 결정」 8문(74-139 · 77-e6 · 77-144 · 77-145 · 80-154 · 81-155 · 81-159 · 82-162) · 「도형 활용」 5문(79-e8 · 79-148 · 79-149 · 82-161 · 82-164) · 「e 의 정의꼴 복원」 4문(73-135 · 74-e3 · 74-138 · 80-150) · 「연속 조건·관계식에서 함숫값」 5문(78-e7 · 78-146 · 78-147 · 81-160 · 82-163)
- 그림: 4문(`crop:fig-79-e8.png` · `crop:fig-79-149.png` · `crop:fig-82-161.png` · `crop:fig-82-164.png`). 나머지 32문은 `none`. 네 문항 모두 발문에 좌표·점 이름이 다 적혀 있어 그림은 배치 확인용이다.
- 대상층: 하위권 3 · 중하위권 17 · 중위권 12 · 중상위권 3 · 상위권 1

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CALC2-78-147 | 연속성으로 $f(0)$ 을 극한으로 바꾸는 통찰(EQV d2)·M_total 8 인데 필수 유제 구역이라 ★2. 같은 골조의 81-160 은 STEP 2 구역이어서 ★3 — 구역 차이만으로 ★ 가 갈린 사례 | ★2 / ★3 |
| GN-CALC2-81-157 | STEP 2 출발점 ★3 을 유지했으나 통찰 1개 d1 · M_total 5 로 실제 풀이는 두 줄. 체감은 ★2 | ★2 / ★3 |
| GN-CALC2-81-160 | 통찰 2개로 v3.8 +1 후보지만 둘 다 I-EQV 라 §2.13 저노출 유형(SC·VF·SYM·XU·RT·PD·BW)이 없어 ★4 를 보류하고 ★3 유지 | ★3 / ★4 |
| GN-CALC2-82-161 | 통찰 2개(RT d2 · EQV d1)로 +1 후보지만 두 넓이의 비에서 공통 인수가 소거돼 실제 계산이 한 줄이라 ★3 유지 | ★3 / ★4 |
| GN-CALC2-82-162 | 실력 UP 구역 출발점 ★4 를 유지했으나 도구가 「분수 밑 분리」 하나뿐이라 체감은 ★3. −1 조건(통찰 0 · M_total ≤ 5)에 걸리지 않아 내리지 않았다 | ★3 / ★4 |
| GN-CALC2-82-164 | 실력 UP + 평가원 기출로 +1 하면 ★5 후보지만 SC/VF/SYM/XU 부재(§2.13)·novelty_score 0(§2.14)에서 막혀 ★4 | ★4 / ★5 |

### 카탈로그 차원 메모

나중에 미적분Ⅱ 유형 카탈로그를 만들 때 참고할 사항이다.

- **따로 세워야 할 유형**: 「$e$ 의 정의를 이용한 극한」(73-135 · 74-e3 · 74-138 · 80-150 · 82-162)과 「기본 극한 $\frac{\ln(1+x)}{x}$·$\frac{e^x-1}{x}$ 적용」(73-137 · 75-e4 · 75-140 …)은 겉보기에 같은 단원 공식이지만 base ★ 가 다르다. 앞은 밑·지수 짝 맞추기 하나로 끝나는 ★1~2, 뒤는 쪼개기·인수분해가 붙어 ★2~3 까지 벌어진다.
- **따로 세워야 할 유형**: 「미정계수 결정」을 하나로 묶으면 안 된다. ⑴ 0/0 강제로 상수를 정하는 절차형(77-e6 · 77-144 · 78-e7 · 78-146 · ★2)과 ⑵ 쪼개기·분리가 함께 필요한 통찰형(80-154 · 81-159 · 82-163 · ★3~4)은 base ★ 가 두 단계 차이난다.
- **통합해도 될 유형**: 「연속 조건에서 함숫값」(78-e7 · 78-146 · 82-163)과 「관계식으로만 주어진 연속함수의 함숫값」(78-147 · 81-160)은 골조가 모두 「연속 ⇒ 극한 존재 ⇒ 0/0 꼴 정리」 하나다. 후자를 전자의 상위 변형(식이 $f$ 에 대해 풀려 있지 않은 경우)으로 두면 된다.
- **통합해도 될 유형**: 「도형 활용」 5문(79-e8 · 79-148 · 79-149 · 82-161 · 82-164)은 문맥만 다르고 골조는 ⑴ 선분·넓이를 좌표식으로 옮기기(I-RT) ⑵ 남은 식에 기본 극한 적용, 둘뿐이다. 넓이형·선분형으로 나누지 말고 「$t\to0$ 에서 도형량의 차수 맞추기」 하나로 세우고 역함수 표현이 필요한 82-164 를 상위 변형으로 둔다.
- **경계 결정이 필요한 항목**: 「$a^x-b^x$ 쪼개기」는 76-e5 ⑵(필수 예제 ★2)부터 81-159 ㈏(STEP 2 ★3)까지 같은 한 줄이 구역에 따라 ★ 가 갈린다. 카탈로그에서는 쪼개기 자체를 base ★2 로 두고, 앞에 0/0 강제나 인수분해가 몇 겹 붙느냐로 +1 하는 규칙을 명시하는 것이 맞다.
- **★5 슬롯 부재**: 이 범위에는 ★5 가 없고, 통찰 유형도 EQV·RT·PD 셋뿐이다. 이 단원 소재만으로 ★5 를 만들려면 82-164 처럼 차수를 맞춰야 하는 도형 극한에 「극한이 존재할 조건」이나 「후보 기각」을 덧붙여 I-VF 를 강제하거나, 81-156 의 망원곱(I-PD)에 미정계수 역추적(I-BW)을 결합해 통찰 3개를 만들어야 한다.
