---
name: mechanism-데이터-GN-ALG-24
description: 개념원리 대수 24 등차수열(1/1 · 222~226쪽) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 대수 (22개정 · 학생용 PDF) · 전사본 latex-bank/gn-alg
  section: 24 등차수열
  unit_code: ALG-24
  part: "1/1"
  extract_range: "222~226쪽 · 222-511~226-524"
  total_problems: 22
  unit_total: 22
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·예제 태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 이 범위 조정 기준은 「통찰 depth 1 하나면 출발점 유지 · depth 2 이상이거나 통찰 2개 이상이면 +1」. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-alg/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-alg/items/<id>.tex
  image_source: latex-bank/gn-alg/figures/ (이 범위에는 그림 문항 없음)
---

# 개념원리 대수 · 24 등차수열 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 대수 24단원 등차수열 222~226쪽 22문항 전수를 담는다. 구역은 두 개다. 「개념원리 익히기」(222쪽 511~515 · 통번호 · 태그 없음)는 수열의 뜻·일반항·등차수열의 정의·등차중항을 바로 확인하는 개념 확인 문항이라 ★1 출발이고, 「필수·발전 예제」(223~226쪽)는 상자 발문만 전사된 필수 예제(`쪽-eN` · tag 「필수」)와 그 예제 바로 뒤의 확인체크 문항(통번호 · tag 「확인체크」)이 번갈아 놓인 구조라 둘 다 ★2 출발로 잡았다. 이 범위에는 STEP 1·STEP 2·실력 UP 연습문제 구역과 기출 태그, 그림 문항이 없다.

단원 도구는 좁다. `a_n = a + (n-1)d` 한 줄과 등차중항 `2b = a + c`, 그리고 「처음으로 음수/양수가 되는 항」의 부등식 + 자연수 최소 조건이 전부다. 그래서 대부분이 절차형이고, 통찰은 뒤쪽 226쪽 등차중항 응용(다항식 나머지정리·삼차방정식 근과 계수의 관계와 결합)과 세 수 대칭 배치에서만 나온다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 · 통찰 골조를 유지한 변형과 ★ 변동 지점)를 채웠다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-ALG-222-511
  page: 222
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ 일반항이 주어진 네 수열(3n · 2^n+1 · 1/(2n-1) · cos(nπ/2))의 첫째항부터 제4항까지 차례로 나열하기.
  category: "일반항에 n=1,2,3,4 대입 → 항 나열"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수열의 일반항에 n 을 대입해 항 나열하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    수열이 「자연수 n 에 값을 대응시킨 것」이라는 정의를 그대로 확인한다. ⑷만 cos 의 특수각 값을 기억해야 해 T-표기 함정이 하나 붙지만 단계는 대입 하나다. 익히기 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "일반항 식에 n=1~4 대입 → 네 값 나열"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $3$, $6$, $9$, $12$ ⑵ $3$, $5$, $9$, $17$ ⑶ $1$, $\dfrac{1}{3}$, $\dfrac{1}{5}$, $\dfrac{1}{7}$ ⑷ $0$, $-1$, $0$, $1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/222-511.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 소문항의 일반항 계수를 바꿀 수 있다(3n → 4n-1 · 2^n+1 → 3^n-2 · 1/(2n-1) → 1/(3n+1)). 제약: 분모가 0 이 되는 n 이 1~4 에 없어야 하고, 삼각 소문항은 주기가 4 이하라 특수각 값만 나오게 유지한다."
    creative: "(1) 제5항까지로 늘리기(★1 유지) (2) 나열된 네 항을 주고 일반항을 되묻기(역방향 · 512 와 같은 골조 ★1) (3) 두 수열의 대응하는 항끼리 더한 수열을 묻기(Mₛ 상승 ★2)."
```

```yaml
- id: GN-ALG-222-512
  page: 222
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑶ 나열된 수열(1, 1/2, 1/3, … · 1×3, 3×5, 5×7, … · log 3, log 9, log 27, …)의 일반항 a_n 을 추측하기.
  category: "항의 규칙 파악 → n 의 식으로 일반화"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "나열된 수열에서 일반항 추측하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    각 항을 n 번째 홀수 2n-1 이나 3의 거듭제곱으로 다시 쓰면 일반항이 바로 보인다. 구체 수열 → n 의 식이라 Mₐ 는 2. [분류 이슈] ⑵·⑶은 규칙 발견 요소가 있어 I-PD 후보지만, 익히기 구역의 기본 확인이고 규칙이 한눈에 드러나 「단순 등차·등비 나열은 PD 아님」 기준으로 미인정 — 절차형으로 둔다. 통찰 0·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "각 항을 n 로 표현(1/n · (2n-1)(2n+1) · 3^n) → 일반항"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $a_n=\dfrac{1}{n}$ ⑵ $a_n=(2n-1)(2n+1)$ ⑶ $a_n=\log 3^n$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/222-512.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑵의 홀수 쌍을 짝수 쌍(2×4, 4×6, …)이나 간격 4 인 쌍으로, ⑶의 밑을 2·5 로 바꿀 수 있다. 제약: 앞의 네 항만으로 규칙이 유일하게 결정돼야 하고(두 가지 일반항이 가능한 나열 금지) 로그 소문항은 지수법칙으로 정리되는 형태를 유지한다."
    creative: "(1) 분모가 계차수열인 나열로 바꾸면 규칙 발견이 한 겹 늘어 ★2(I-PD d1) (2) 부호가 번갈아 바뀌는 (-1)^n 항을 섞으면 ★2 (3) 추측한 일반항으로 제10항을 묻는 두 단계 문항(★2)."
```

```yaml
- id: GN-ALG-222-513
  page: 222
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑵ 등차수열의 빈칸 두 곳에 알맞은 수 써넣기(⑴ □, 15, □, 27, 33 ⑵ 3/4, 1/4, □, -3/4, □).
  category: "이웃한 두 항의 차 → 공차 결정 → 빈칸 채우기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등차수열의 공차 파악과 빠진 항 채우기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    빈칸이 아닌 이웃 두 항(27·33 과 3/4·1/4)에서 공차를 먼저 읽고 앞뒤로 더하고 빼면 끝난다. 등차수열의 정의 확인 한 단계. 익히기 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "값이 이웃한 두 항의 차로 공차 d → 앞뒤 항에 ±d"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $9$, $21$ ⑵ $-\dfrac{1}{4}$, $-\dfrac{5}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/222-513.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴의 공차 6 과 보이는 항 27·33, ⑵의 공차 -1/2 을 바꿀 수 있다. 제약: 공차를 읽을 수 있는 이웃 두 항이 반드시 남아 있어야 하고, 분수 소문항은 분모가 통일돼 답이 간단한 기약분수가 되게 한다."
    creative: "(1) 이웃하지 않은 두 항만 주어 공차를 나눗셈으로 구하게 하면 ★2 (2) 빈칸을 첫째항 앞쪽에 두어 음수 항이 나오게 하면 T-부호 추가(★1~2) (3) 공차를 문자 d 로 두고 빈칸의 합을 묻는 형태(Mₐ 상승 ★2)."
```

```yaml
- id: GN-ALG-222-514
  page: 222
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ 첫째항·공차가 주어지거나 항이 나열된 등차수열의 일반항 a_n 구하기.
  category: "첫째항 a·공차 d 확인 → a_n=a+(n-1)d 정리"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등차수열의 일반항 a+(n-1)d 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴⑵는 a·d 가 그대로 주어지고 ⑶⑷는 나열에서 읽기만 하면 된다. 공식 대입 뒤 n 에 대해 정리하는 한 단계. ⑷의 분수 공차 -1/3 이 계산을 약간 늘리지만 일반 학생 부담은 아니라 Mₖ=1. 익히기 구역·통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "a 와 d 확인 → a_n=a+(n-1)d → n 의 일차식으로 정리"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $a_n=3n-1$ ⑵ $a_n=-2n+12$ ⑶ $a_n=5n-4$ ⑷ $a_n=-\dfrac{1}{3}n+\dfrac{10}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/222-514.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 소문항의 첫째항·공차를 자유롭게 바꿀 수 있다(양수·음수·분수 한 개씩 유지). 제약: 나열형 소문항은 네 항만으로 공차가 일정함이 확인돼야 하고, 분수 공차는 일반항 계수가 기약분수로 떨어지게 한다."
    creative: "(1) 일반항을 구한 뒤 제20항까지 묻는 두 단계(★2) (2) 공차만 주고 특정 항의 값을 추가로 주어 첫째항을 역산하게 하면 e1 골조(★2) (3) 일반항이 n 의 일차식이라는 점을 이용해 그래프 위 점으로 해석하면 I-RT d1(★3)."
```

```yaml
- id: GN-ALG-222-515
  page: 222
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    세 수 1, x, 7 이 이 순서대로 등차수열을 이룰 때 x 의 값.
  category: "등차중항 2x=1+7 → x"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등차중항의 정의(2b=a+c)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    등차중항 정의를 그대로 쓰면 2x=8 한 줄. 미지수가 하나 있어 Mₐ=2 지만 단계·계산 모두 최소다. 익히기 구역·통찰 없음 → ★1. 이후 226쪽 등차중항 응용(e7·523·524)의 출발 문항.
  tier: star_1
  mechanism_primary: "가운데 항은 양 끝 항의 등차중항 → 2x=1+7 → x=4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/222-515.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "양 끝 두 수 1·7 을 바꿀 수 있다(합이 짝수면 정수 답). 제약: 세 수의 순서가 고정이라 중항은 반드시 가운데 자리이고, 합이 홀수면 분수 답이 되므로 대상층에 맞춰 선택한다."
    creative: "(1) 미지수를 양 끝에 두어 x, 4, 7 처럼 묻기(★1 유지) (2) 세 수를 x, x+2, 3x 처럼 문자식으로 주면 일차방정식 한 겹 추가(★2) (3) 가운데 항을 이차식으로 만들면 e7 골조로 ★2."
```

### 필수·발전 예제

```yaml
- id: GN-ALG-223-e1
  page: 223
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    첫째항이 -11 이고 제4항이 -2 인 등차수열의 일반항 a_n.
  category: "a_4=a_1+3d → 공차 → 일반항"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등차수열의 일반항"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    첫째항이 주어져 있어 제4항 조건에서 공차만 뽑으면 된다(3d=9). 일반항 공식 대입까지 두 단계. 필수 예제 구역 출발 ★2, 통찰 없음이지만 M_total 6 이라 -1 조정은 하지 않는다.
  tier: star_2
  mechanism_primary: "a_4=-11+3d=-2 → d=3 → a_n=-11+(n-1)·3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$a_n=3n-14$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/223-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫째항 -11 과 제4항 -2(즉 공차 3)를 바꿀 수 있다. 제약: 주어진 항 번호와 첫째항의 차가 공차를 정수로 나누어떨어지게 해야 일반항 계수가 정수로 남는다."
    creative: "(1) 주어지는 항을 제4항 대신 제7항·제10항으로 바꾸기(★2 유지) (2) 첫째항 대신 두 항을 주면 e2 골조(연립 ★2) (3) 일반항을 구한 뒤 특정 값이 되는 항 번호를 묻는 두 단계(517·518 골조 ★2)."
```

```yaml
- id: GN-ALG-223-e2
  page: 223
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    제31항이 85, 제45항이 127 인 등차수열의 제100항.
  category: "두 항 조건 → a·d 연립 → 제100항 대입"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "항이 주어진 등차수열(두 항으로 a·d 결정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a_31·a_45 를 a+(n-1)d 로 쓰면 미지수 두 개 연립이고, 두 식을 빼면 14d=42 로 공차가 먼저 나온다. 항 번호가 커서 계수 계산이 있어 Mₖ=2. 필수 예제 ★2 출발 유지.
  tier: star_2
  mechanism_primary: "a+30d=85, a+44d=127 → 변끼리 빼서 d → a → a_100"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$292$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/223-e2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 항 번호(31·45)와 값(85·127), 묻는 항 번호(100)를 바꿀 수 있다. 제약: 두 값의 차가 항 번호 차로 나누어떨어져야 공차가 정수이고, 첫째항도 정수로 떨어지게 조합한다."
    creative: "(1) 제100항 대신 「400 은 제몇 항인가」로 방향을 뒤집기(518 골조 ★2) (2) 두 항의 합 조건으로 바꾸면 519 골조(★2) (3) 항 번호를 문자 m, n 으로 두고 a_m, a_n 로 일반화하면 Mₐ 상승 ★3."
```

```yaml
- id: GN-ALG-223-516
  page: 223
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑵ 두 항의 값(a_1 과 a_3 · a_1 과 a_5)이 주어진 등차수열의 일반항 a_n.
  category: "첫째항과 한 항 → 공차 → 일반항"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등차수열의 일반항"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e1 과 같은 골조를 두 번 반복한다. 첫째항이 있으니 2d, 4d 에서 공차를 뽑고 공식에 넣으면 끝. ⑵는 공차가 음수라 T-부호 주의만 있다. 필수 예제 뒤 확인체크 → ★2 출발 유지.
  tier: star_2
  mechanism_primary: "a_3=a_1+2d(또는 a_5=a_1+4d) → d → a_n=a_1+(n-1)d"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $a_n=5n-3$ ⑵ $a_n=-2n+5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/223-516.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 소문항의 첫째항과 지정 항의 값·번호를 바꿀 수 있다. 제약: (지정 항 값 - 첫째항)이 항 번호 차로 나누어떨어져야 공차가 정수다."
    creative: "(1) 첫째항 대신 제2항을 주면 연립으로 바뀌어 e2 골조(★2) (2) a_3 의 값 대신 a_3=2a_1 같은 관계식을 주면 e3 골조(I-EQV ★2) (3) 두 소문항의 일반항을 더한 수열의 공차를 묻기(★2~3)."
```

```yaml
- id: GN-ALG-223-517
  page: 223
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    공차가 -7, 제3항이 12 인 등차수열에서 a_k=-23 을 만족시키는 k.
  category: "공차와 한 항 → 일반항 → 특정 값이 되는 항 번호"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "특정 값이 되는 항의 번호 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    공차가 주어져 있어 a_3 에서 첫째항을 역산하고 일반항을 세운 뒤 a_k=-23 을 k 에 대한 일차방정식으로 푼다. 항 번호를 되묻지만 미정계수 대입 수준이라 I-BW 는 인정하지 않는다. 음수 공차 계산이 있어 Mₖ=2. ★2 유지.
  tier: star_2
  mechanism_primary: "a_3=a_1-14=12 → a_1 → a_n=a_1-7(n-1) → a_k=-23 풀어 k"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/223-517.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공차 -7, 제3항 12, 목표값 -23 을 바꿀 수 있다. 제약: 목표값이 수열의 항으로 실제 등장해야 하고(차가 공차의 배수) k 가 자연수로 떨어져야 한다."
    creative: "(1) 목표값을 수열에 없는 값으로 두고 「그런 k 가 존재하지 않음을 보이라」로 바꾸면 I-VF d2(★3) (2) a_k<-23 인 최소 k 를 묻는 부등식형(e4·520 골조 ★2) (3) 공차를 문자로 두고 k 가 자연수가 되는 공차를 묻기(I-BW ★3)."
```

```yaml
- id: GN-ALG-223-518
  page: 223
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    제2항이 3, 제7항이 13 인 등차수열에서 199 는 제몇 항인지.
  category: "두 항 → a·d → a_n=199 인 n"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "특정 값이 되는 항의 번호 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e2 의 연립으로 a·d 를 얻고(5d=10) 일반항 2n-1 을 199 와 같다고 놓아 항 번호를 구한다. 수가 깔끔해 계산 부담은 낮다. 답을 「제100항」 형태로 써야 하는 표기 함정만 있다. ★2 유지.
  tier: star_2
  mechanism_primary: "a_2·a_7 연립 → a_n=2n-1 → 2n-1=199 → n"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '제$100$항'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/223-518.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 항 번호·값과 목표값 199 를 바꿀 수 있다. 제약: 목표값이 일반항의 값으로 실제 나타나야 하고(2n-1 꼴이면 홀수만) 항 번호가 자연수여야 한다."
    creative: "(1) 목표값을 짝수로 주어 「그런 항이 없다」를 답하게 하면 I-VF d2(★3) (2) 199 보다 큰 첫 항을 묻는 부등식형(e5 골조 ★2) (3) 두 등차수열에 공통으로 나타나는 항을 묻기(I-CON ★4)."
```

```yaml
- id: GN-ALG-224-e3
  page: 224
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    등차수열에서 a_5=4a_3, a_2+a_4=6 일 때 a_7 의 값.
  category: "항 사이 관계 → 등차중항으로 축약 → a·d → a_7"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "a_2+a_4 를 2a_3 으로 바꿔 두 번째 조건을 a_3 하나의 값으로 축약"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "항 사이의 관계가 주어진 등차수열"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a_2+a_4=2a_3 을 보면 a_3=3 이 즉시 나오고 첫 조건에서 a_5=12 가 따라와 공차가 정해진다. 등차중항 동치 변환을 못 봐도 a·d 연립으로 풀리지만 단계가 눈에 띄게 길어진다. 통찰 I-EQV d1 하나 → 필수 예제 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "a_2+a_4=2a_3 → a_3 → a_5=4a_3 로 d → a_7=a_5+2d"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$21$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/224-e3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "배수 관계(a_5=4a_3)의 계수와 합 조건의 값(6), 묻는 항 번호(7)를 바꿀 수 있다. 제약: 두 조건이 독립이어야 하고(서로 상수배 금지) 공차가 분수가 되더라도 최종 항이 정리되는 조합을 고른다."
    creative: "(1) 합 조건을 a_1+a_5=k 처럼 다른 대칭 쌍으로 바꾸기(같은 골조 ★2) (2) 세 항의 곱을 조건으로 주면 이차방정식이 생겨 I-MI 분기(★3) (3) 배수 관계 대신 a_5 가 a_3 과 a_7 의 등차중항임을 이용하게 설계하면 I-SYM d2(★3)."
```

```yaml
- id: GN-ALG-224-e4
  page: 224
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑵ 등차수열 100, 97, 94, … 가 제몇 항에서 처음으로 음수가 되는지, -52, -46, -40, … 이 제몇 항에서 처음으로 양수가 되는지.
  category: "일반항 → 부등식 → 만족하는 최소 자연수 n"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "처음으로 양 또는 음이 되는 항 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    일반항을 세워 a_n<0(또는 >0)을 풀면 n 의 범위가 분수 경계로 나오고, 그 범위의 최소 자연수를 답해야 한다. T-경계(부등호와 자연수 최소)와 T-부호(공차 부호에 따른 부등호 방향)가 함께 걸려 Mₜ=2. 표준 유형이라 통찰은 없고 필수 예제 ★2 유지.
  tier: star_2
  mechanism_primary: "a_n 을 n 의 일차식으로 → a_n<0(>0) 부등식 → 최소 자연수 n"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ 제$35$항 ⑵ 제$10$항'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/224-e4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫째항과 공차(100·-3 / -52·6)를 바꿀 수 있다. 제약: 부등식의 경계가 정수와 딱 겹치지 않게 해야 「처음으로」의 답이 흔들리지 않는다(경계가 정수면 등호 처리로 논란)."
    creative: "(1) 기준을 0 대신 100·-50 같은 값으로 바꾸기(e5·521 골조 ★2) (2) 공차를 문자로 두고 제10항에서 처음 음수가 되게 하는 공차 범위를 묻기(I-BW d2 ★3) (3) 두 수열의 대소가 뒤바뀌는 첫 항을 묻기(I-CON ★3)."
```

```yaml
- id: GN-ALG-224-519
  page: 224
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    등차수열에서 a_6+a_15=61, a_8+a_16=70 일 때 a_31 의 값.
  category: "두 합 조건 → a·d 연립 → a_31"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "항이 주어진 등차수열(합 조건으로 a·d 결정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 조건을 a·d 로 펼치면 2a+19d=61, 2a+22d=70 이고 빼면 공차가 바로 나온다. 합 꼴이라 계수가 커져 Mₖ=2 지만 골조는 e2 의 연립과 같다. 통찰 없음·★2 유지.
  tier: star_2
  mechanism_primary: "두 합 조건을 2a+kd 꼴로 전개 → 변끼리 빼서 d → a → a_31"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$92$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/224-519.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 개의 항 번호(6·15·8·16)와 두 합의 값, 묻는 항 번호를 바꿀 수 있다. 제약: 두 조건의 항 번호 합이 서로 달라야 연립이 풀리고(같으면 같은 식) 공차·첫째항이 정수로 떨어지게 값을 고른다."
    creative: "(1) 항 번호 합을 같게 맞춰 두 조건이 모순·중복되게 만들고 판단을 묻기(I-VF ★3) (2) 합 대신 차를 조건으로 주면 공차만 결정되는 불완전 조건(★3) (3) a_6+a_15 처럼 번호 합이 21 인 쌍은 모두 같은 값임을 이용하게 설계하면 I-SYM d2(★3)."
```

```yaml
- id: GN-ALG-224-520
  page: 224
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    a_7=65, a_10=53 인 등차수열이 제몇 항에서 처음으로 음수가 되는지.
  category: "두 항 → a·d → a_n<0 부등식 → 최소 자연수"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "처음으로 음이 되는 항 구하기(두 항 조건 결합)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e2 형 연립으로 공차(3d=-12)와 첫째항을 먼저 얻고, e4 형 부등식으로 넘어가는 두 유형의 결합이다. 단계는 늘지만 각 단계가 표준이라 통찰은 없다. 경계·부호 함정으로 Mₜ=2, M_total 8 → 확인체크 ★2 유지.
  tier: star_2
  mechanism_primary: "a_7·a_10 으로 d 와 a → a_n<0 부등식 → 최소 자연수 n"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '제$24$항'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/224-520.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 항 번호(7·10)와 값(65·53)을 바꿀 수 있다. 제약: 공차가 음수여야 「처음으로 음수」가 존재하고, 값의 차가 번호 차로 나누어떨어져야 하며 부등식 경계가 정수와 겹치지 않아야 한다."
    creative: "(1) 기준을 0 대신 특정 값으로 바꾸기(521 골조 ★2) (2) 「처음으로 음수가 되는 항의 값」까지 묻는 두 단계(★3) (3) 양수인 항의 개수를 묻기(경계 해석 한 겹 추가 ★3)."
```

```yaml
- id: GN-ALG-225-e5
  page: 225
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    등차수열 1, 5, 9, 13, … 이 제몇 항에서 처음으로 100 보다 커지는지.
  category: "일반항 → a_n>100 부등식 → 최소 자연수"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "조건을 만족시키는 등차수열의 항 구하기(처음으로 k 보다 커지는 항)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    나열에서 a=1, d=4 를 읽어 a_n=4n-3 을 세우고 4n-3>100 의 최소 자연수를 답한다. e4 와 같은 골조이고 기준만 0 에서 100 으로 옮겼다. 경계·최소 자연수 함정으로 Mₜ=2, 계산은 가벼워 Mₖ=1. 필수 예제 ★2 유지.
  tier: star_2
  mechanism_primary: "a_n=4n-3 → 4n-3>100 → 최소 자연수 n"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '제$26$항'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/225-e5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫째항 1·공차 4·기준값 100 을 바꿀 수 있다. 제약: 경계 n 이 정수와 겹치지 않게 기준값을 고르고(겹치면 「보다 큰」과 「이상」의 답이 갈림) 공차가 양수여야 한다."
    creative: "(1) 기준을 「처음으로 세 자리 수가 되는 항」처럼 말로 주면 조건 해석 한 겹 추가(I-EQV d1 ★3) (2) 100 보다 작은 항의 개수를 묻기(★2~3) (3) 공차를 문자로 두고 제26항에서 처음 100 을 넘게 하는 공차 범위를 묻기(I-BW d2 ★3)."
```

```yaml
- id: GN-ALG-225-e6
  page: 225
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    18 과 9 사이에 두 수를 넣어 만든 수열 18, x, y, 9 가 등차수열을 이룰 때 x, y 의 값.
  category: "넣은 수 2개 → 전체 4항 → 공차 → x, y"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 수 사이에 수를 넣어서 만든 등차수열"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    항이 4개로 명시돼 있어 9=18+3d 에서 공차가 바로 나오고 x, y 는 차례로 더하면 된다. 「사이에 넣는다 → 항 수」 환산이 눈에 보이는 형태라 통찰로는 세지 않았다(수를 n 개로 일반화한 522 와 대비). 필수 예제 ★2 유지.
  tier: star_2
  mechanism_primary: "첫항 18·끝항 9·항 수 4 → 3d=-9 → d=-3 → x=15, y=12"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$x=15$, $y=12$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/225-e6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "양 끝 두 수(18·9)와 넣는 수의 개수를 바꿀 수 있다. 제약: (끝항 - 첫항)이 (넣는 개수+1)로 나누어떨어져야 공차가 정수이고, 양 끝 순서가 바뀌면 공차 부호가 뒤집힌다."
    creative: "(1) 넣는 수의 개수를 n 으로 일반화하면 522 골조(I-EQV ★2) (2) 넣은 수들의 합을 묻기(합 공식 연결 ★3) (3) 양 끝 수를 문자로 두고 x, y 를 그 문자로 표현하게 하면 Mₐ 상승 ★3."
```

```yaml
- id: GN-ALG-225-521
  page: 225
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    첫째항이 2 이고 a_5-a_3=-4 인 등차수열이 제몇 항에서 처음으로 -50 보다 작아지는지.
  category: "항의 차 → 공차 → 일반항 → 부등식 최소 자연수"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "처음으로 k 보다 작아지는 항 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a_5-a_3 이 공차의 2배라는 표준 사실로 d 를 얻고(2d=-4) 일반항을 세워 a_n<-50 의 최소 자연수를 구한다. e4·520 과 같은 부등식 골조이며 조건이 「항의 차」로 포장됐을 뿐이다. 경계·부호 함정으로 Mₜ=2. 확인체크 ★2 유지.
  tier: star_2
  mechanism_primary: "a_5-a_3=2d=-4 → d=-2 → a_n=4-2n → a_n<-50 최소 자연수"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '제$28$항'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/225-521.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫째항 2, 항의 차 조건(-4), 기준값 -50 을 바꿀 수 있다. 제약: 공차가 음수여야 기준 아래로 내려가고, 차 조건의 항 번호 간격이 공차를 정수로 주어야 하며 부등식 경계가 정수와 겹치지 않게 한다."
    creative: "(1) 차 조건을 a_7-a_2 처럼 간격이 5 인 쌍으로 바꾸기(★2 유지) (2) 「처음으로 -50 보다 작아지는 항의 값」까지 묻기(★3) (3) -50 이상인 항의 개수를 묻기(경계 해석 추가 ★3)."
```

```yaml
- id: GN-ALG-225-522
  page: 225
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    -8 과 30 사이에 n 개의 수를 넣어 만든 수열 -8, x_1, …, x_n, 30 이 공차 2 인 등차수열일 때 n 의 값.
  category: "넣은 수 n 개 → 전체 항 수 n+2 → 끝항 식 → n"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「사이에 n 개를 넣는다」를 「전체 항 수 n+2 · 공차를 n+1 번 더한다」로 옮겨 30=-8+(n+1)·2 를 세움"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 수 사이에 수를 넣어서 만든 등차수열(개수 n 이 미지수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e6 과 달리 넣는 개수가 미지수라, 항 번호를 n 으로 환산하는 단계가 풀이의 관문이다. 환산만 되면 일차방정식 한 줄. [분류 이슈] 이 환산을 표준 절차로 볼지 동치 변환(I-EQV)으로 볼지 경계이며, 여기서는 학생 오답이 항 수 세기에서 집중된다는 점을 근거로 d1 로 인정했다. 통찰 depth 1 하나 → 확인체크 ★2 유지.
  tier: star_2
  mechanism_primary: "끝항 30 은 제(n+2)항 → 30=-8+(n+1)·2 → n"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$18$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/225-522.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "양 끝 두 수(-8·30)와 공차 2 를 바꿀 수 있다. 제약: (끝항 - 첫항)이 공차로 나누어떨어져야 하고 몫에서 1 을 뺀 값이 자연수여야 한다(공차 부호와 양 끝 대소가 일치해야 함)."
    creative: "(1) 공차 대신 넣은 수의 개수를 주고 공차를 묻기(e6 골조 ★2) (2) 넣은 수 중 정수인 것의 개수를 묻기(I-VF d2 ★3) (3) 양 끝 수를 문자로 두고 n 이 자연수가 되는 조건을 묻기(I-BW d2 ★4 후보)."
```

```yaml
- id: GN-ALG-226-e7
  page: 226
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    세 수 x, x^2-1, 2x+3 이 이 순서대로 등차수열을 이루도록 하는 모든 실수 x 의 값의 합.
  category: "등차중항 → 이차방정식 → 모든 근의 합"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「세 수가 이 순서로 등차」를 2(x^2-1)=x+(2x+3) 인 이차방정식 조건으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "등차중항(문자식 세 수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    가운데 항이 등차중항이라는 조건을 식으로 옮기면 2x^2-3x-5=0 이 나오고, 「모든 x 의 값의 합」이므로 근을 직접 구하지 않고 근과 계수의 관계로 끝낼 수 있다. [분류 이슈] 등차중항 적용은 공식 대입에 가까워 I-EQV 인정이 경계이지만, 문자식이라 학생이 직접 조건을 방정식으로 세워야 하므로 d1 로 인정했다. 근을 구해도 풀리므로 +1 은 하지 않고 필수 예제 ★2 유지.
  tier: star_2
  mechanism_primary: "2(x^2-1)=x+(2x+3) → 2x^2-3x-5=0 → 근의 합 3/2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{3}{2}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/226-e7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 문자식의 계수(x · x^2-1 · 2x+3)를 바꿀 수 있다. 제약: 정리된 이차방정식이 서로 다른 두 실근을 갖도록 판별식을 양수로 유지하고(중근이면 「모든 값의 합」이 달라짐) 근의 합이 간단한 유리수가 되게 한다."
    creative: "(1) 합 대신 「가장 큰 x」나 「모든 x 의 곱」을 묻기(★2 유지) (2) 가운데 항을 이차식으로 두어 양 끝이 문자가 되게 바꾸기(★2) (3) 세 수가 등차가 되도록 하는 정수 x 만 고르게 하면 I-VF d2(★3) (4) 이차식을 삼차식으로 올리면 524 와 같은 근과 계수 결합(I-XU ★3)."
```

```yaml
- id: GN-ALG-226-e8
  page: 226
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    등차수열을 이루는 세 수의 합이 15 이고 제곱의 합이 83 일 때 이 세 수.
  category: "세 수를 a-d, a, a+d 로 대칭 배치 → 합·제곱합 연립"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "세 수를 a-d, a, a+d 로 가운데 항 대칭 배치해 합 조건에서 d 가 소거되도록 만듦"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "등차수열을 이루는 세 수(대칭 배치)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    a, a+d, a+2d 로 두면 두 조건 모두 d 가 살아남아 연립이 무거워진다. a-d, a, a+d 로 두는 순간 합에서 3a=15 로 가운데 항이 바로 나오고 제곱합에서 d^2 만 남는다. 대칭 배치로 단계가 확실히 줄어드는 I-SYM d2 → 필수 예제 ★2 출발에서 +1 하여 ★3. d 의 부호가 갈려도 같은 세 수를 주는 점이 답 정리의 포인트다.
  tier: star_3
  mechanism_primary: "세 수를 a-d, a, a+d → 3a=15 로 a → 3a^2+2d^2=83 로 d^2 → 세 수"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$3$, $5$, $7$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/226-e8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "합 15 와 제곱합 83 을 바꿀 수 있다. 제약: 합이 3의 배수여야 가운데 항이 정수이고, 제곱합에서 얻는 d^2 이 양의 완전제곱수여야 세 수가 정수로 떨어진다(제곱합이 너무 작으면 d^2<0 으로 해가 없음)."
    creative: "(1) 제곱합 대신 곱을 조건으로 주면 삼차식이 생겨 Mₖ 상승(★3~4) (2) 네 수의 합·제곱합으로 늘리면 a-3d, a-d, a+d, a+3d 배치로 같은 대칭 골조(★4) (3) 세 수가 등비수열도 이루게 조건을 추가하면 I-CON d2(★4) (4) 제곱합 값을 해가 없는 값으로 두고 존재 여부를 묻기(I-VF ★4)."
```

```yaml
- id: GN-ALG-226-523
  page: 226
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    다항식 f(x)=x^2+ax+2 를 x+1, x-1, x-2 로 나눈 나머지가 이 순서대로 등차수열을 이룰 때 상수 a.
  category: "나머지정리로 세 나머지 → 등차중항 → a"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "나머지 조건을 나머지정리로 f(-1), f(1), f(2) 값으로 바꾼 뒤 등차중항 조건과 결합"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "등차중항과 나머지정리의 결합"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    나머지를 직접 나눗셈으로 구하려 들면 길어지고, 나머지정리로 세 함숫값을 잡는 도구를 가져와야 풀이가 열린다. 그 뒤 등차중항 2(가운데)=(양 끝 합)으로 a 에 대한 일차방정식이 남는다. 다항식 단원 도구가 빠지면 풀이가 끊기는 I-XU d2 → 확인체크 ★2 출발에서 +1 하여 ★3.
  tier: star_3
  mechanism_primary: "나머지 = f(-1), f(1), f(2) → 2f(1)=f(-1)+f(2) → a"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/226-523.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f(x)의 상수항 2 와 세 일차식의 근(-1, 1, 2)을 바꿀 수 있다. 제약: a 의 이차항이 상쇄되어 일차방정식으로 남도록 세 근을 고르고(세 함숫값의 등차중항 식에서 a^2 이 생기지 않게) a 가 유일하게 정해지게 한다."
    creative: "(1) f(x)를 삼차식으로 올리면 계산이 한 겹 늘어 ★3 유지~★4 (2) 나머지의 순서를 바꿔 어느 순서에서 등차가 되는지 묻기(I-MI d2 ★4) (3) a 를 주고 등차가 되는 나눗셈 일차식을 찾게 하면 I-BW d2(★4) (4) 나머지 세 개가 등비수열을 이루게 바꾸면 이차방정식으로 분기(★3~4)."
```

```yaml
- id: GN-ALG-226-524
  page: 226
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    삼차방정식 x^3-3x^2-6x+k=0 의 세 근이 등차수열을 이룰 때 상수 k.
  category: "세 근을 a-d, a, a+d 로 배치 → 근과 계수의 관계 → k"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "세 근을 a-d, a, a+d 로 대칭 배치해 근의 합에서 d 를 소거"
    - step: 2
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "삼차방정식 근과 계수의 관계로 근의 합 = 3 을 읽어 가운데 근을 확정하고 대입으로 k 결정"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "등차수열을 이루는 삼차방정식의 세 근"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    근을 구할 수 없는 상태에서 「세 근이 등차」를 쓰려면 대칭 배치가 먼저이고, 그래야 근의 합 3 에서 가운데 근이 1 로 확정된다. 그 근을 방정식에 대입하면 k 가 나온다. 대칭 배치(I-SYM d2)와 방정식 단원 결합(I-XU d2) 두 통찰 → 확인체크 ★2 출발에서 +1 하여 ★3. 가운데 근이 실제 근임을 쓰는 논리가 풀이의 핵심이다.
  tier: star_3
  mechanism_primary: "세 근 a-d, a, a+d → 근의 합 3a=3 → a=1 이 근 → 대입해 k"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/226-524.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차항·일차항 계수(-3·-6)를 바꿀 수 있다. 제약: 근의 합이 3으로 나누어떨어져야 가운데 근이 간단하고, 결정된 k 에서 나머지 두 근이 실수로 남도록(판별식 양수) 계수를 고른다."
    creative: "(1) 세 근이 등비수열을 이루게 바꾸면 곱 조건을 쓰는 대칭 배치(I-SYM+I-XU ★4) (2) 세 근이 등차이면서 모두 정수일 조건을 묻기(I-VF d2 ★4) (3) k 를 주고 세 근이 등차인지 판정하게 하면 역방향(I-BW ★3) (4) 사차방정식 네 근이 등차인 경우로 확장하면 a±d, a±3d 배치로 ★4~5."
```

## 표본 판정 요약 (22문)

- ★ 분포: ★1 5 · ★2 14 · ★3 3 · ★4 0 · ★5 0
- 통찰형 6(224-e3 · 225-522 · 226-e7 · 226-e8 · 226-523 · 226-524) · 절차형 16 · premium 0
- 통찰 유형 분포: I-EQV 3 · I-SYM 2 · I-XU 2 (총 7개 라벨 · 224-e3·225-522·226-e7 은 depth 1, 나머지는 depth 2)
- type_hint 상위: 「처음으로 양·음 또는 기준값을 넘는 항 구하기」 4(224-e4 · 224-520 · 225-e5 · 225-521) · 「등차수열의 일반항」 3(222-514 · 223-e1 · 223-516) · 「특정 값이 되는 항의 번호」 2(223-517 · 223-518) · 「항이 주어진 등차수열(연립)」 2(223-e2 · 224-519) · 「등차중항」 2(222-515 · 226-e7) · 「두 수 사이에 수를 넣어 만든 등차수열」 2(225-e6 · 225-522)
- 구역별: 개념원리 익히기 5문 전부 ★1 · 필수 예제 8문(★2 6 · ★3 2) · 확인체크 9문(★2 8 · ★3 1)
- 그림: 0문(이 범위에는 그림 문항 없음) · 선택지 문항 0문(전부 단답·서술 지시형)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다. 이 범위에는 벤더 신호와 2단 이상 어긋난 문항이 없어, 아래 세 건은 모두 통찰 인정 경계에 관한 기록이다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-ALG-222-512 | 「일반항 추측」에 I-PD 를 인정할지 경계. 규칙이 한눈에 보이고 익히기 구역이라 미인정(절차형)으로 둠 | ★1 / ★2 |
| GN-ALG-225-522 | 「사이에 n 개를 넣는다 → 항 수 n+2」 환산을 표준 절차로 볼지 I-EQV 로 볼지 경계. d1 로 인정했으나 ★ 는 올리지 않음 | ★2 / ★3 |
| GN-ALG-226-e7 | 등차중항 적용은 공식 대입에 가까워 I-EQV 인정이 경계. 문자식이라 학생이 직접 방정식을 세운다는 점으로 d1 인정 | ★2 / ★3 |

## 카탈로그 차원 메모

나중에 대수 유형 카탈로그를 만들 때 이 범위에서 확인된 것.

- **따로 세워야 할 유형**: ① 「처음으로 양·음이 되는 항」(224-e4 · 224-520)과 ② 「처음으로 기준값을 넘거나 밑도는 항」(225-e5 · 225-521)은 같은 부등식 골조이므로 **하나의 유형(기준값이 0 인 경우를 특수 사례로)으로 통합**해도 된다. 이 범위 4문항 중 어느 것도 다른 도구를 쓰지 않는다.
- **통합해도 될 유형**: 「등차수열의 일반항」(222-514 · 223-e1 · 223-516)과 「항이 주어진 등차수열」(223-e2 · 224-519)은 주어진 조건이 (첫째항+한 항)인지 (두 항)인지의 차이뿐이라 base ★ 가 같다. 한 유형의 난이도 두 단계로 두는 편이 낫다.
- **따로 세워야 할 유형**: 「두 수 사이에 수를 넣어 만든 등차수열」은 넣는 개수가 상수인 경우(225-e6)와 미지수 n 인 경우(225-522)의 체감이 갈린다. 후자가 항 수 환산 때문에 오답이 몰리므로 base ★ 를 따로 잡는다.
- **등차중항 계열의 층**: 222-515(수치) → 226-e7(문자식·이차방정식) → 226-523(나머지정리 결합) → 226-524(삼차방정식 근과 계수)로 도구가 한 겹씩 얹히는 명확한 사다리가 있다. 카탈로그에서는 「등차중항 기본」과 「등차중항 + 타 단원 결합(I-XU)」 두 유형으로 나누고 후자의 base ★ 를 3 으로 잡는 것이 이 범위 실측과 맞는다.
- **대칭 배치(a-d, a, a+d)** 는 226-e8 과 226-524 두 곳에서 핵심 도구로 쓰였다. 등차수열 단원에서 ★3 이상을 만드는 거의 유일한 통찰 축이므로 카탈로그에 독립 유형(「등차수열을 이루는 세 수·세 근」)으로 등재할 값이 있다.
- 이 단원에는 STEP 1·STEP 2·실력 UP 구역과 기출 태그가 전사 범위에 없어 ★4~5 표본이 나오지 않았다. 카탈로그의 상위 ★ 자리는 등차수열의 합(다음 단원)과 결합되는 문항에서 채워야 한다.
