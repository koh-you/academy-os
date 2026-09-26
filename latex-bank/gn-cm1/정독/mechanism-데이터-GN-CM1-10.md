---
name: mechanism-데이터-GN-CM1-10
description: 개념원리 공통수학1 10 복소수(1/1 · 80~81쪽 7문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학1 (22개정) · 전사본 latex-bank/gn-cm1
  section: 10 복소수
  unit_code: GN-CM1-10
  part: "1/1"
  extract_range: "80~81쪽 · 80-147~81-151"
  total_problems: 7
  unit_total: 7
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). insight_type 은 insights 가 비어 있으면 절차형, 하나라도 있으면 통찰형. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm1/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm1/items/<id>.tex
  image_source: latex-bank/gn-cm1/figures/ (crops.json) — 이 범위는 그림 문항 0
---

# 개념원리 공통수학1 · 10 복소수 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 공통수학1 **10 복소수** 80~81쪽의 7문항 전수를 다룬다. 구역은 「개념원리 익히기」 3문(80-147~80-149 · 통번호)과 「필수·발전 예제」 4문(필수 예제 81-e1·81-e2 + 그 뒤의 확인체크 81-150·81-151)이다. 단원 도입부라 일곱 문항 모두 정의 대조 — 실수부분·허수부분 읽기, 복소수의 상등, 켤레복소수, 실수/순허수/순허수가 아닌 허수의 분류 — 위에 서 있고, 계산 부담은 어느 문항도 한 줄을 넘지 않는다. 그림 문항은 없다.

벤더 난이도 신호는 개념원리 고등의 구역·태그다. 「개념원리 익히기」(통번호)와 tag 「확인체크」는 개념 확인이라 ★1 출발, 「필수」 예제는 ★2 출발이며, 여기서 M_total·통찰로 ±1 조정했다. 확인체크 2문은 앞 필수 예제의 적용이므로 M_total·통찰이 올라가면 +1 을 허용했다 — 81-150 은 통찰 1개(d2)·M_total 7 이라 ★2 로 올렸고, 81-151 은 통찰 0·M_total 4 라 ★1 그대로 뒀다. 반대로 81-e2 는 M_total 5·통찰 0 이라 −1 후보였지만 두 조건을 동시에 거르는 분류 문항이라 필수 예제 출발점 ★2 를 유지했다(모두 1단 이내 조정이라 분류 이슈 아님 · 애매한 판정은 파일 끝 표에 기록).

이 파일의 주 용도는 **숫자 변형·창의 변형의 원본**이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(유형·depth·근거) · `variation_notes`(바꿔도 되는 수와 제약 · 통찰 골조를 유지한 창의 변형)를 채웠다. 답은 전사·검수 단계에서 답지와 대조가 끝난 값을 그대로 옮겼다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-CM1-80-147
  page: 80
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑸ 주어진 복소수의 실수부분과 허수부분 구하기.
    일반 꼴·순허수·무리수인 실수·항의 순서가 뒤바뀐 꼴·분수 꼴이 하나씩 섞여 있다.
  category: "a+bi 꼴로 정리 → 실수부분 a · 허수부분 b(i 제외)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "복소수의 실수부분·허수부분 찾기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    각 수를 a+bi 로 맞춘 뒤 a, b 를 읽는 한 단계가 전부다.
    함정은 표기뿐이다(T-표기). ⑶은 근호가 있어도 허수부분 0 인 실수, ⑷는 i+4 처럼 항 순서가 뒤바뀐 꼴, ⑸는 분모 3 을 두 부분에 나눠 실수부분과 허수부분을 분리해야 한다. 허수부분에 i 를 붙이지 않는다는 약속만 지키면 변형 단계가 없다.
    개념원리 익히기 ★1 출발 · 통찰 0 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "각 수를 a+bi 꼴로 정리 → a = 실수부분, b = 허수부분(i 제외)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ 실수부분: $2$, 허수부분: $-3$ ⑵ 실수부분: $0$, 허수부분: $5$ ⑶ 실수부분: $\sqrt{3}-1$, 허수부분: $0$ ⑷ 실수부분: $4$, 허수부분: $1$ ⑸ 실수부분: $\dfrac{1}{3}$, 허수부분: $\dfrac{1}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/80-147.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 수의 계수와 근호·분모의 수를 바꿀 수 있음. 제약: 다섯 꼴(일반 a+bi · 순허수 · 무리수인 실수 · 항 순서 역전 · 분수)이 하나씩 남아야 표기 함정이 유지되고, 분수 꼴은 실수부분·허수부분이 모두 유리수로 떨어지게 분모를 잡는다."
    creative: "(1) 실수부분과 허수부분의 합·곱을 묻기(★1 유지) (2) 다섯 수 중 허수부분이 가장 큰 것을 고르게 하면 비교 단계가 붙어 ★2 (3) a+bi 의 a, b 를 문자로 두고 실수가 될 조건·순허수가 될 조건을 묻기(I-EQV d1 · ★2)."
```

```yaml
- id: GN-CM1-80-148
  page: 80
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑸ 복소수가 서로 같을 조건을 이용해 실수 x, y 의 값 구하기.
    우변이 순허수인 경우·실수인 경우, 좌변의 두 부분에 x, y 가 함께 걸려 연립이 되는 경우가 섞여 있다.
  category: "복소수의 상등 → 실수부분끼리·허수부분끼리 등식 → x, y"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "복소수가 서로 같을 조건으로 미지수 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    양변을 a+bi 꼴로 맞추고 실수부분·허수부분을 각각 같게 놓는 공식 대입이다. 조건 변환이 아니라 정해진 절차라 통찰로 세지 않는다.
    함정은 우변에 숨은 0 이다(T-표기). ⑵의 5i 는 실수부분 0, ⑷의 9 는 허수부분 0 으로 읽어야 한다. ⑸만 두 등식이 x, y 연립으로 묶여 단계가 하나 늘어난다.
    개념원리 익히기 ★1 출발 · 통찰 0 · M_total 5 로 −1 후보지만 하한이라 ★1.
  tier: star_1
  mechanism_primary: "양변을 a+bi 꼴로 맞춤 → 실수부분·허수부분 각각 등식 → (⑸는 일차 연립) x, y"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $x=2$, $y=-2$ ⑵ $x=0$, $y=2$ ⑶ $x=4$, $y=0$ ⑷ $x=4$, $y=3$ ⑸ $x=1$, $y=-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/80-148.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "좌·우변의 계수와 상수를 바꿀 수 있음. 제약: x, y 가 실수라는 단서를 반드시 남겨야 상등을 쓸 수 있고, 우변이 순허수인 소문항과 실수인 소문항을 각각 하나씩 남겨 '숨은 0' 함정을 유지한다. ⑸형 연립은 두 일차식의 해가 정수로 떨어지게 계수를 잡는다."
    creative: "(1) 우변을 0 으로 두고 x, y 를 구하게 하기(★1 유지) (2) '실수 x, y' 단서를 지우고 그래도 상등을 쓸 수 있는지 참·거짓으로 묻기(전제 복원 · I-EQV d2 · ★3) (3) x+yi 가 실수·순허수가 될 조건으로 바꾸면 등식 대신 ≠0 조건이 붙어 ★2."
```

```yaml
- id: GN-CM1-80-149
  page: 80
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑸ 주어진 복소수의 켤레복소수 구하기.
    일반 꼴·순허수·근호가 붙은 허수·무리수인 실수·항의 순서가 뒤바뀐 분수 꼴이 섞여 있다.
  category: "a+bi 꼴로 정리 → 허수부분의 부호만 반전"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "켤레복소수 구하기(실수·순허수 포함)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    정의 그대로 b 의 부호만 바꾸는 한 단계다.
    함정은 ⑷ 하나다(T-표기). 근호가 보이지만 허수부분이 0 인 실수라 켤레가 자기 자신이고, 근호를 i 로 착각하면 부호를 바꾸게 된다. ⑸는 항 순서를 a+bi 로 다시 세운 뒤 부호를 바꿔야 한다.
    개념원리 익히기 ★1 출발 · 통찰 0 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "a+bi 꼴로 정리 → b 의 부호만 반전(실수는 자기 자신)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $3+4i$ ⑵ $5i$ ⑶ $-3-\sqrt{2}\,i$ ⑷ $1+\sqrt{5}$ ⑸ $\dfrac{1}{2}-\dfrac{2}{3}i$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/80-149.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 수의 계수와 근호 안 수를 바꿀 수 있음. 제약: 켤레가 자기 자신인 실수 한 개와 부호만 뒤집히는 순허수 한 개는 반드시 남겨야 함정이 유지되고, 근호는 계수 자리(√2 i)와 실수 자리(1+√5)에 한 번씩 써 둘을 구분하게 한다."
    creative: "(1) z 와 그 켤레의 합·곱을 묻기(결과가 실수 · I-SYM d1 · ★2) (2) 켤레복소수가 자기 자신인 것을 모두 고르게 하면 실수 판정으로 바뀌어 ★2 (3) 켤레를 두 번 취하면 원래 수로 돌아옴을 묻기(★1) (4) a+bi 의 켤레가 주어졌을 때 원래 수를 역으로 묻기(I-BW d1 · ★2)."
```

### 필수·발전 예제

```yaml
- id: GN-CM1-81-e1
  page: 81
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    다섯 개의 서술(허수끼리의 대소 비교 · 실수도 복소수인지 · 제곱이 $-1$ 인 수 · 허수부분의 부호)
    중 옳은 것 하나 고르기. 5지선다.
  category: "선택지마다 복소수의 정의와 대조 → 옳은 것"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "복소수의 뜻 참·거짓 판정(대소 비교 불가 포함)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    판정의 축은 두 약속이다. 허수 사이에는 대소가 없다(①③ 거짓), 실수도 복소수다(② 참 — 근호 안이 제곱수라 실수).
    나머지 둘은 함정이다. ④는 $x^2=-1$ 의 해가 $\pm i$ 둘이라는 범위 함정(T-범위), ⑤는 허수부분이 부호를 포함한다는 부호 함정(T-부호)이다. 함정 카테고리가 셋(T-표기·T-범위·T-부호)이라 Mt 2.
    다섯 선택지를 정의와 차례로 대조할 뿐 조건을 변형하지 않으므로 절차형. 필수 예제 ★2 출발 · M_total 6 이라 −1 조건에 걸리지 않아 ★2 유지.
  tier: star_2
  mechanism_primary: "선택지마다 정의 대조(허수는 대소 비교 불가 · 실수 ⊂ 복소수 · x²=-1 의 해는 ±i · 허수부분은 부호 포함) → 옳은 것 하나"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/81-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "선택지의 계수(−5i · 6i · 3i · 3−i)와 근호 안 수를 바꿀 수 있음. 제약: 참인 선택지가 정확히 하나만 남아야 하고, 대소 비교 선택지는 두 수가 모두 허수여야 한다(실수끼리로 바꾸면 참이 되어 정답이 둘이 된다). 근호 선택지는 근호 안을 제곱수로 두어 '실수도 복소수'가 요지가 되게 한다."
    creative: "(1) '옳지 않은 것'으로 뒤집으면 81-150 골조 (2) 선택지에 문자 a, b 를 넣어 실수가 되는 조건을 판정하게 하면 'a, b 는 실수' 전제 복원이 필요해 I-EQV d2 · ★3 (3) ㄱㄴㄷ 보기로 바꿔 옳은 것을 모두 고르게 하면 판정 누락 위험이 커져 ★3."
```

```yaml
- id: GN-CM1-81-e2
  page: 81
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    다섯 수($-3$, $0$, $-5i$, $1-i$, $\sqrt{3}\,i$) 중 순허수가 아닌 허수 하나 고르기. 5지선다.
  category: "복소수의 분류 → 허수부분≠0 이고 실수부분≠0 인 것"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "복소수의 분류(순허수가 아닌 허수 고르기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분류표(복소수 = 실수 + 허수 · 허수 = 순허수 + 순허수가 아닌 허수)의 한 칸을 그대로 묻는다. 허수부분≠0 으로 ①②(실수와 0)를 거르고, 실수부분≠0 으로 ③⑤(순허수)를 걸러 ④만 남는다.
    [분류 이슈] 「순허수가 아닌 허수」를 두 조건의 결합(I-EQV d1)으로 볼 여지가 있으나, 바로 앞 본문이 분류표를 제시하므로 정의 대조 절차로 처리했다.
    통찰 0 · M_total 5 라 −1 후보지만 걸러내는 단계가 둘이고 0 을 허수로 오인하는 함정이 있어 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "각 수를 a+bi 로 보고 b≠0(허수) 와 a≠0(순허수 아님) 두 조건을 동시에 만족하는 것 고르기"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/81-e2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "다섯 수를 다른 실수·순허수·일반 허수로 바꿀 수 있음. 제약: 실수 한 개와 0 을 남겨 첫 번째 거름(b≠0)이 작동하게 하고, 순허수 두 개로 두 번째 거름(a≠0)을 만든 뒤 정답은 a≠0·b≠0 인 하나만 둔다."
    creative: "(1) '순허수인 것을 모두 고르시오'로 바꾸면 81-151 골조(★1) (2) a+bi 에 조건을 붙여 순허수가 되는 a, b 를 구하게 하면 a=0 ∧ b≠0 두 식을 세워야 해 I-EQV d2 · ★3 (3) 분류표 전체를 ㄱㄴㄷ 참·거짓으로 확장하면 ★2~3 (4) i 의 거듭제곱으로 위장한 실수를 선택지에 넣으면 표기 함정이 하나 늘어 ★2 유지·오답률 상승."
```

```yaml
- id: GN-CM1-81-150
  page: 81
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    다섯 개의 서술($i^2$ 의 부호 · 실수의 허수부분 · 순허수 판정 · 허수 분류 ·
    문자 계수 복소수 $a+(b-3)i$ 가 실수가 되는 조건) 중 옳지 않은 것 하나 고르기. 5지선다.
  category: "정의 대조로 ①~④ 참 확인 → ⑤는 a, b 가 실수라는 전제가 없어 반례 성립"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 3
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'b=3 이면 실수'라는 판정에는 a, b 가 실수라는 전제가 필요함을 인식해, 전제가 없는 ⑤에서 a 가 허수인 반례를 찾음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "복소수의 뜻·분류 참·거짓 판정(실수 전제 확인)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ①~④는 대조로 끝난다. $i^2=-1$ 은 실수라 대소 비교가 가능하고(① 참), 실수의 허수부분은 0, 순허수와 순허수가 아닌 허수의 정의도 그대로다.
    ⑤만 단계가 다르다. a, b 가 실수라는 단서가 없으므로 b=3 이어도 a 가 허수이면 결과가 실수가 아니다. 생략된 전제를 복원해야 참·거짓이 뒤집히는 EQV d2 이고, 문자 계수 때문에 Ma 2 · 전제 누락(T-범위)과 표기(T-표기) 두 함정으로 Mt 2.
    확인체크 ★1 출발이지만 앞 필수 예제 81-e1 의 적용이고 통찰 1개(d2)·M_total 7 이라 +1 해 ★2.
  tier: star_2
  mechanism_primary: "①~④를 정의 대조로 참 확인 → ⑤는 a, b 가 실수라는 전제가 없음을 보고 a 가 허수인 반례 → 옳지 않은 것"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/81-150.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "①의 거듭제곱 지수(i²·i⁴)와 ②의 실수, ③의 순허수 계수, ⑤의 상수 3 을 바꿀 수 있음. 제약: ⑤에 '실수 a, b' 단서를 넣지 않아야 거짓이 유지된다(넣으면 정답이 사라진다). ①은 좌변이 실수가 되는 짝수 지수여야 대소 비교가 성립한다."
    creative: "(1) ⑤에 '실수 a, b' 를 명시하면 참이 되므로 다른 선택지 하나를 거짓으로 바꿔야 함(통찰 사라짐 · ★2→★1~2) (2) ⑤만 떼어 '실수가 되도록 하는 b' 를 묻게 하면 절차형 ★1 (3) 전제 누락을 노린 서술을 두 개로 늘리면 EQV 2회 · ★3 (4) ①을 i³ 으로 바꾸면 허수끼리 대소 비교라 거짓이 되어 정답이 둘 — 함께 손봐야 함."
```

```yaml
- id: GN-CM1-81-151
  page: 81
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    다섯 수($-9i$, $2-i$, $i^2$, $\sqrt{2}\,i$, $\pi$) 중 순허수를 모두 고르기.
  category: '$i^2$ 를 $-1$ 로 정리 → 실수부분 0 · 허수부분≠0 인 것만 선택'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "순허수 판정(모두 고르기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    순허수 정의(실수부분 0, 허수부분≠0)를 다섯 수에 대조하는 한 단계다.
    함정은 $i^2$ 하나다(T-표기). i 를 달고 있어 허수처럼 보이지만 $-1$ 인 실수라 먼저 정리해야 한다. $2-i$ 는 실수부분이 남아 제외, $\pi$ 는 무리수여도 실수다.
    확인체크 ★1 출발 · 통찰 0 · M_total 4 → ★1 유지. 같은 분류를 묻는 필수 예제 81-e2(★2)보다 거르는 단계가 하나 적다(파일 끝 이슈 표 참조).
  tier: star_1
  mechanism_primary: "i^2 를 -1 로 정리 → a+bi 에서 a=0, b≠0 인 것만 고름"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-9i$, $\sqrt{2}\,i$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/81-151.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "다섯 수의 계수와 무리수를 바꿀 수 있음. 제약: i 의 거듭제곱으로 위장한 실수(i²·i⁴)를 하나 남기고, 실수(π 자리)와 순허수가 아닌 허수(2−i 자리)를 각각 하나씩 유지해야 세 갈래 분류가 모두 작동한다. 정답은 두 개로 둔다."
    creative: "(1) 위장 항을 i³ 으로 바꾸면 −i 라 순허수가 되어 함정의 방향이 뒤집힘(★2) (2) '실수를 모두 고르시오'로 바꾸면 같은 골조 ★1 (3) 문자 계수 a+bi 를 섞어 순허수가 될 a, b 조건을 함께 묻게 하면 I-EQV d1 · ★2 (4) 고른 수들의 곱·합을 이어서 묻게 하면 i² 정리가 한 번 더 들어가 ★2."
```

## 표본 판정 요약 (7문)

- ★ 분포: ★1 4(80-147 · 80-148 · 80-149 · 81-151) · ★2 3(81-e1 · 81-e2 · 81-150) · ★3 0 · ★4 0 · ★5 0
- 통찰형 1(81-150 · I-EQV d2) · 절차형 6 · premium 0
- 통찰 유형 분포: I-EQV 1 · 그 외 0. depth 3 도 SC/VF/SYM/XU 도 없어 ★4 이상 슬롯이 나올 수 없다(복소수 도입 단원이라 자연스러움)
- type_hint 상위: 「복소수의 분류·순허수 판정」 2(81-e2 · 81-151) · 「복소수의 뜻 참·거짓 판정」 2(81-e1 · 81-150) · 「실수부분·허수부분 찾기」 1 · 「복소수가 서로 같을 조건」 1 · 「켤레복소수 구하기」 1
- 대상층: 하위권 4 · 중하위권 2 · 중위권 1
- M_total 분포: 4 세 문 · 5 두 문 · 6 한 문 · 7 한 문. Mk 는 전 문항 1(계산 부담 없음), Ma 2 는 문자 계수가 있는 81-150 한 문뿐
- 그림: 0문 · 소문항 묶음 요약: 80-147(5) · 80-148(5) · 80-149(5)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CM1-81-e2 | 「순허수가 아닌 허수」를 두 조건(a≠0 ∧ b≠0)의 동치 변환(I-EQV d1)으로 볼지 분류표 한 칸의 대조로 볼지 애매. 후자로 처리해 절차형 ★2 | ★2 / ★3 |
| GN-CM1-81-151 | 확인체크 ★1 출발 규칙대로 ★1 로 뒀으나, 같은 분류를 묻는 필수 예제 81-e2 는 ★2 다. 구역 신호(확인체크 < 필수)와 실제 난이도 차(거름 단계 1 vs 2)가 같은 방향이라 그대로 뒀지만 두 문항을 한 유형으로 묶으면 base ★ 를 하나로 정해야 한다 | ★1 / ★2 |
| GN-CM1-81-150 | ⑤의 「생략된 전제(a, b 실수) 복원」을 I-EQV 로 잡았으나, 실제로는 「조건 밖 반례 탐색」에 가까워 통찰 10유형에 정확히 대응하는 코드가 없다(I-MI 로 볼 여지도 있음). 통찰 1개로만 세고 ★2 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위 7문은 네 골조로 갈린다: ⑴ 실수부분·허수부분 읽기(80-147) ⑵ 복소수가 서로 같을 조건(80-148) ⑶ 켤레복소수(80-149) ⑷ 복소수의 분류·참거짓 판정(81-e1 · 81-e2 · 81-150 · 81-151). ⑷가 4문으로 가장 두껍다.
- ⑷ 안에서도 두 층으로 나눠야 base ★ 가 갈린다: 「정의 대조만 하면 끝나는 층」(81-e1 · 81-e2 · 81-151)과 「생략된 전제를 복원해야 판정이 뒤집히는 층」(81-150). 후자가 이 단원의 유일한 통찰 슬롯이므로 카탈로그에서 별도 유형으로 세운다.
- 81-e2 와 81-151 은 묻는 칸만 다른 같은 유형(순허수 판정)이라 한 유형으로 통합하고 「하나 고르기 / 모두 고르기」 형식만 소유형으로 남긴다.
- 80-148(복소수의 상등)은 이후 복소수의 연산·이차방정식의 허근에서 되풀이되는 핵심 도구이므로 반드시 독립 유형으로 세운다. 80-147·80-149 는 정의 확인 유형이라 카탈로그에 넣되 base ★1 고정으로 둔다.
- 이 단원 전체에 반복되는 함정은 T-표기 하나다: 「i 가 보이면 허수」(i² · √5) 와 「허수부분에 i 를 붙이지 않는다」. 카탈로그의 trap 필드에 단원 공통 함정으로 기록해 두면 변형 출제에서 재사용할 수 있다.
