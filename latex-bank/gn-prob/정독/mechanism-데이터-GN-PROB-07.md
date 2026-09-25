---
name: mechanism-데이터-GN-PROB-07
description: 개념원리 확률과 통계 07 확률의 뜻(1/1 · 37문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 확률과 통계 · 전사본 latex-bank/gn-prob
  section: 07 확률의 뜻
  unit_code: GN-PROB-07
  part: "1/1"
  extract_range: "64~73쪽 · 64-e2~73-153"
  total_problems: 37
  unit_total: 37
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). insight_type 은 insights 유무로만 정함(빈 배열 → 절차형). anchor_status 는 null. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-prob/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-prob/items/<id>.tex
  image_source: latex-bank/gn-prob/figures/ (crops.json)
---

# 개념원리 확률과 통계 · 07 확률의 뜻 (1/1) 정독 데이터 (v1.0)

64~73쪽 37문항 전수. 구역은 「필수·발전 예제」 22문(필수 예제 6 + 그 아래 확인체크 16) · 「특강」 1문 · 「연습문제 STEP 1」 6문 · 「연습문제 STEP 2」 5문 · 「연습문제 실력 UP」 3문이다. 개념원리 고등의 난이도 신호는 구역과 태그에 실려 있다 — 필수 예제(tag 「필수」)는 ★2 출발, 그 아래 확인체크는 **직전 예제의 유제**라 예제 ★를 출발점으로 삼고(GN-ALG-01 과 같은 방침) M_total·통찰로 ±1 한다. 특강은 교육과정 심화라 ★2~3, STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4 출발이며 평가원·수능 기출 태그는 +0~1 이다.

내용 축은 수학적 확률의 경우의 수 도구별 배열이다: 주사위·부분집합(64쪽) → 순열(65쪽) → 중복순열·함수(66쪽) → 같은 것이 있는 순열(67쪽) → 조합(68쪽) → 통계적 확률(69쪽) → 기하적 확률(특강 70쪽). 연습문제는 이 도구들을 섞고 STEP 2 부터 조건 동치 변환·대칭성이 들어간다.

이 파일의 주 용도는 **숫자 변형·창의 변형의 원본**이므로 모든 블록에 `mechanism_primary`(조건→변환→답 사슬) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 · 골조 유지 변형과 ★ 변동 지점)를 채웠다. 답은 전사·검수 단계에서 답지와 대조가 끝난 값을 그대로 옮겼다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-PROB-64-e2
  page: 64
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    서로 다른 두 주사위를 던질 때 ⑴ 두 눈의 수가 같을 ⑵ 두 눈의 수의 차가 4 이상일 ⑶ 두 눈의 수의 곱이 어떤 자연수의 제곱일 확률.
  category: "표본공간 36가지 → 조건을 만족하는 순서쌍 세기 → 확률"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수학적 확률의 정의(주사위 두 개의 순서쌍 세기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    소문항 셋 모두 분모 36 고정이고 분자만 조건별로 세면 된다. ⑶ 의 「곱이 제곱수」도 1·4·9·16·25·36 을 주는 순서쌍을 나열하는 열거라 통찰로 보지 않았다.
    필수 예제 ★2 출발 · 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "표본공간 36 → 조건별 순서쌍 열거(같음 6 · 차 4 이상 6 · 곱이 제곱수 8) → 확률"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{1}{6}$ ⑵ $\dfrac{1}{6}$ ⑶ $\dfrac{2}{9}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-prob/items/64-e2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "차의 기준(4 이상 → 3 이상·5 이상)과 곱의 조건(제곱수 → 3의 배수·완전세제곱수)을 바꿀 수 있음. 제약: 주사위 눈이 1~6 이라 분모 36 은 고정이고, 분자가 36의 약수가 되어야 답이 간단한 기약분수로 떨어짐."
    creative: "(1) 두 눈의 합·차를 동시에 제한(★2 유지) (2) 주사위를 세 개로 늘리면 분모 216 · 분기 세기 필요 → ★3 (3) 눈의 수를 a, b 로 두고 이차방정식·부등식 조건을 붙이면 I-EQV 가 붙어 ★2~3."
```

```yaml
- id: GN-PROB-64-123
  page: 64
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    원소 6개인 집합의 부분집합 중 하나를 택할 때 원소 b 는 포함하고 원소 f 는 포함하지 않을 확률.
  category: "부분집합의 개수 공식 → 두 원소의 포함·제외 고정 → 확률"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부분집합의 개수를 이용하는 확률"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    전체 2^6 · 조건부 2^4 로 두 번 같은 공식을 쓰면 끝난다. 포함·제외를 정한 원소 둘을 빼고 나머지 4개만 자유롭다는 관찰이 전부다.
    예제 ★2 출발 · 통찰 0 · M_total 4 → −1 하여 ★1.
  tier: star_1
  mechanism_primary: "전체 부분집합 2^6 → b 포함·f 제외로 나머지 4원소만 자유 2^4 → 1/4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{1}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/64-123.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "원소 개수(6 → 5·7)와 고정하는 원소 수(2개 → 1개·3개)를 바꿀 수 있음. 제약: 답은 항상 1/2^(고정 원소 수)라 원소 개수를 바꿔도 값이 안 변한다는 점을 알고 출제해야 함."
    creative: "(1) 「진부분집합 중에서」로 바꾸면 분모가 2^6−1 이라 약분이 안 됨 → 계산 마찰만 늘어 ★1 유지(질 저하 주의) (2) 「원소의 개수가 3인 부분집합 중에서」로 바꾸면 조합 확률이 되어 ★2 (3) b 를 포함하거나 f 를 포함하지 않을(합사건) 확률로 바꾸면 여사건·포함배제가 들어가 ★2."
```

```yaml
- id: GN-PROB-64-124
  page: 64
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 주사위의 눈의 수 a, b 에 대하여 이차방정식 x^2+2ax+b=0 이 중근을 가질 확률.
  category: "판별식 = 0 → b = a^2 → 주사위 눈의 범위 안 순서쌍 세기"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차방정식의 근의 조건(판별식)과 확률"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    중근 ↔ D/4 = a^2 − b = 0 은 교과 표준 대응이라 통찰로 세지 않았다. 실제 난점은 b = a^2 가 1~6 안에 있어야 한다는 범위 제한(T-범위)뿐이다.
    예제 ★2 출발 · 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "중근 → D/4 = a^2 − b = 0 → b = a^2 → 1 ≤ a^2 ≤ 6 인 순서쌍 2개 / 36"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{18}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/64-124.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항 계수(2a → a·4a)와 상수항 자리(b → 2b)를 바꿀 수 있음. 제약: 판별식이 주사위 눈 범위에서 정수해를 몇 개 주는지가 답을 정하므로, 바꾼 뒤 만족하는 순서쌍 수를 반드시 다시 세야 하고 분모 36 과 약분되는 값이 보기 좋음."
    creative: "(1) 「서로 다른 두 실근」·「허근」으로 바꾸면 부등식 범위 세기가 되어 ★2~3 (2) 두 근이 모두 정수일 조건으로 바꾸면 I-BW 가 붙어 ★3 (3) a, b 를 -3 ≤ a ≤ 2 같은 연속 구간 실수로 바꾸면 70-139 형태의 기하적 확률 ★3."
```

```yaml
- id: GN-PROB-65-e3
  page: 65
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ 6명을 일렬로 앉힐 때 특정 3명이 서로 이웃할 확률 ⑵ 남학생 2명·여학생 3명을 일렬로 세울 때 양 끝에 남학생을 세울 확률.
  category: "전체 순열 → 묶음 순열 / 자리 고정 순열 → 확률"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "순열을 이용하는 확률(이웃 묶음·자리 고정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 3명 한 덩어리 → 4!×3!, ⑵ 는 양 끝 2!×가운데 3! 로 둘 다 표준 1단계 도구다.
    필수 예제 ★2 출발 · 통찰 0 · M_total 5 → −1 후보이나 서로 다른 두 골조(묶음·자리 고정)를 한 문항에 담은 대표 예제라 ★2 유지.
  tier: star_2
  mechanism_primary: "⑴ 묶음 4!×3! / 6! ⑵ 양 끝 2!×가운데 3! / 5!"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{1}{5}$ ⑵ $\dfrac{1}{10}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-prob/items/65-e3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "인원 수(6 → 5·7)와 묶는 인원(3 → 2·4), 남녀 구성(2·3 → 3·3)을 바꿀 수 있음. 제약: 묶음 순열은 (n−k+1)!×k!/n! 이라 값이 금방 작아지고, 양 끝 조건은 남학생 수가 2 미만이면 성립하지 않음."
    creative: "(1) 「이웃하지 않을」로 뒤집으면 여사건 또는 끼워넣기(65-127 골조) ★2 (2) 원순열로 바꾸면 분모가 (n−1)! 이 되어 ★2~3 (3) 「A 와 B 사이에 정확히 한 명」처럼 간격 조건을 주면 65-126 의 위치쌍 세기 I-RT 가 붙어 ★2."
```

```yaml
- id: GN-PROB-65-125
  page: 65
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    세 쌍의 부부가 한 줄로 설 때 부부끼리 서로 이웃하여 설 확률.
  category: "전체 6! → 부부 3덩어리 3!×2^3 → 확률"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "순열을 이용하는 확률(여러 쌍의 이웃 묶음)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    65-e3 ⑴ 의 묶음 순열을 덩어리 3개로 되풀이한 유제다. 덩어리 배열 3! 과 각 덩어리 내부 2! 을 곱하는 것이 전부.
    예제 ★2 출발 · 통찰 0 · M_total 5 → −1 하여 ★1.
  tier: star_1
  mechanism_primary: "부부 3덩어리 배열 3! × 각 덩어리 내부 2^3 / 6!"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{1}{15}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/65-125.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "쌍의 수(3 → 2·4)를 바꿀 수 있음. 제약: 확률이 k!·2^k/(2k)! 라 쌍이 늘면 값이 급격히 작아져 4쌍이면 1/105 로 감각이 떨어짐."
    creative: "(1) 「적어도 한 쌍이 이웃」으로 바꾸면 포함배제가 필요해 ★3 (2) 원탁에 앉히면 원순열 ★2 (3) 「부부끼리 마주 보게」(원탁 6인) 로 바꾸면 배치 대칭 I-SYM 이 붙어 ★3."
```

```yaml
- id: GN-PROB-65-126
  page: 65
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    computer 의 8개 문자를 일렬로 나열할 때 c 와 t 사이에 문자가 2개 있을 확률.
  category: "간격 조건 → 두 문자의 위치쌍 세기 → 나머지 6! 배열"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「사이에 2개」라는 배열 조건을 자리 번호 차가 3인 위치쌍의 개수 세기로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 문자의 간격 조건 순열 확률(위치쌍 세기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    문자를 늘어놓는 문제를 「자리 번호 차가 3인 (i, i+3) 쌍이 몇 개인가」로 바꾸는 표현 전환이 핵심이고, 그 뒤는 c·t 순서 2!, 나머지 6! 곱하기다.
    예제 ★2 출발 · I-RT d1 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "자리 차 3인 위치쌍 5개 → c·t 순서 2! → 나머지 6! / 8!"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{5}{28}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/65-126.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "문자 수(8)와 사이 개수(2 → 1·3)를 바꿀 수 있음. 제약: 위치쌍 수는 n−(간격) 개라 간격을 키우면 급격히 줄고, computer 는 8글자가 모두 달라 같은 것이 있는 순열로 넘어가지 않음(중복 문자가 있는 단어로 바꾸면 분모·분자 양쪽을 다시 계산해야 함)."
    creative: "(1) 「사이에 2개 이상」으로 바꾸면 간격별 합산이 필요해 I-MI 추가 ★3 (2) 「c 가 t 보다 앞」 조건을 겹치면 순서 2! 가 1 이 되어 ★2 유지 (3) 중복 문자가 있는 단어(예: success)로 바꾸면 같은 것이 있는 순열과 결합해 ★3."
```

```yaml
- id: GN-PROB-65-127
  page: 65
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    promise 의 7개 문자를 일렬로 나열할 때 모음끼리 이웃하지 않을 확률.
  category: "자음 먼저 배열 → 자음 사이·양 끝 자리에 모음 끼워넣기 → 확률"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이웃하지 않는 순열을 이용하는 확률(끼워넣기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    「이웃하지 않는다」를 여사건이 아니라 자음 4! 배열 뒤 빈 자리 5곳 중 3곳에 모음을 넣는 표준 절차로 처리한다. 교과서가 이 절차를 그대로 제시하므로 통찰로 세지 않았다.
    예제 ★2 출발 · 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "자음 4! → 자음 사이·양 끝 5자리 중 3자리에 모음 배열 5P3 / 7!"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{2}{7}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/65-127.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "단어의 자음·모음 개수(4·3 → 5·3, 4·2)를 바꿀 수 있음. 제약: 모음 수가 자음 수 + 1 을 넘으면 끼워넣을 자리가 모자라 확률이 0 이 되므로 (자음 수 + 1) ≥ (모음 수) 를 지켜야 함."
    creative: "(1) 「모음끼리 이웃」(67-e5 골조)으로 뒤집으면 묶음 순열 ★2 (2) 같은 문자가 있는 단어로 바꾸면 분모·끼워넣기 양쪽에서 중복을 나눠야 해 ★3 (3) 「어느 두 모음도 이웃하지 않고 양 끝은 자음」처럼 조건을 겹치면 자리 제한이 늘어 ★3."
```

```yaml
- id: GN-PROB-66-e4
  page: 66
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    1~5 의 다섯 숫자에서 중복을 허용해 4개를 뽑아 만든 네 자리 자연수 중 하나를 택할 때 짝수일 확률.
  category: "중복순열 전체 5^4 → 일의 자리만 짝수로 제한 → 확률"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "중복순열을 이용하는 확률(자리 조건)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    짝수 판정이 일의 자리 하나에만 걸리므로 나머지 세 자리는 자유(5^3)다. 조건이 한 자리에 국소화된다는 점만 보면 끝.
    필수 예제 ★2 출발 · 통찰 0 · M_total 5 → −1 후보이나 중복순열 도입 대표 예제라 ★2 유지.
  tier: star_2
  mechanism_primary: "전체 5^4 → 일의 자리 2·4 두 가지 × 나머지 5^3 → 2/5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{2}{5}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-prob/items/66-e4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "쓸 수 있는 숫자 집합(1~5 → 1~6)과 자릿수(4 → 3·5)를 바꿀 수 있음. 제약: 0 이 포함되면 최고 자리 제한(66-130 의 T-범위)이 새로 생기므로 0 을 넣을지 말지를 먼저 정해야 하고, 답은 (짝수 개수)/(전체 숫자 개수) 로 자릿수와 무관함."
    creative: "(1) 「5의 배수일」·「3의 배수일」로 바꾸면 뒤쪽은 자리별 합 조건이 되어 72-149 의 I-EQV ★3 (2) 「각 자리 숫자가 모두 다를」로 바꾸면 순열 ★2 (3) 0 을 포함시키면 최고 자리 함정이 붙어 ★2."
```

```yaml
- id: GN-PROB-66-128
  page: 66
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    세 사람이 다섯 종류의 과자 중에서 임의로 하나씩 택할 때 세 사람이 서로 다른 종류를 택할 확률.
  category: "중복순열 5^3 → 서로 다른 선택은 순열 5P3 → 확률"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "중복순열·순열을 이용하는 확률(서로 다른 선택)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    분모는 중복순열, 분자는 순열. 공식 두 개를 한 번씩 쓰고 끝나는 66-e4 의 유제다.
    예제 ★2 출발 · 통찰 0 · M_total 4 → −1 하여 ★1.
  tier: star_1
  mechanism_primary: "전체 5^3 → 서로 다른 선택 5P3 → 12/25"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{12}{25}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/66-128.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "사람 수(3)와 과자 종류 수(5 → 4·6)를 바꿀 수 있음. 제약: 사람 수 ≤ 종류 수 여야 답이 0 이 아니고, nPr/n^r 이 기약분수로 떨어지는 조합을 고르는 편이 좋음."
    creative: "(1) 「적어도 두 사람이 같은 종류」로 뒤집으면 여사건 ★2 (2) 「세 사람이 모두 같은 종류」로 바꾸면 분자가 5 인 ★1 (3) 각 과자의 재고를 유한(예: 각 2개)으로 제한하면 조합·분배 문제가 되어 ★3."
```

```yaml
- id: GN-PROB-66-129
  page: 66
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    원소 3개인 집합 X 에서 원소 3개인 집합 Y 로의 함수 f 를 만들 때 f 가 일대일대응일 확률.
  category: "함수의 개수 3^3 → 일대일대응의 개수 3! → 확률"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수의 개수를 이용하는 확률(일대일대응)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    「X 에서 Y 로의 함수의 개수 = 중복순열」·「일대일대응의 개수 = 순열」 두 공식을 그대로 대입한다. 함수라는 표현 때문에 Mₐ 만 2 로 올렸다.
    예제 ★2 출발 · 통찰 0 · M_total 5 → −1 하여 ★1.
  tier: star_1
  mechanism_primary: "전체 함수 3^3 → 일대일대응 3! → 2/9"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{2}{9}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/66-129.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정의역·공역의 원소 개수(3·3 → 3·4, 2·4)를 바꿀 수 있음. 제약: 일대일대응은 두 집합의 원소 개수가 같을 때만 존재하므로, 개수를 다르게 하려면 「일대일함수」로 조건을 바꿔야 함."
    creative: "(1) 「일대일함수」·「치역이 Y 와 같을(전사)」로 바꾸면 전사 함수 개수 세기가 들어가 ★3 (2) f(1) < f(2) < f(3) 같은 단조 조건으로 바꾸면 조합·중복조합 I-RT 가 붙어 72-150 형태 ★3 (3) f(f(1)) = 1 같은 합성 조건이면 ★3~4."
```

```yaml
- id: GN-PROB-66-130
  page: 66
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    0, 1, 2, 3 에서 중복을 허용해 3개를 뽑아 만든 세 자리 자연수 중 하나를 택할 때 십의 자리 숫자가 0 일 확률.
  category: "최고 자리 0 제외 → 전체 3×4×4 → 십의 자리 고정 3×1×4 → 확률"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "0 을 포함한 중복순열의 확률(최고 자리 제한)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    골조 자체는 66-e4 와 같지만 「세 자리 자연수」 때문에 백의 자리에 0 이 올 수 없다는 T-범위 함정이 분모·분자 양쪽에 동시에 걸린다. 한쪽에만 적용하면 틀린다.
    예제 ★2 출발 · 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "전체 3×4×4 → 십의 자리 0 고정 3×1×4 → 1/4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/66-130.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "숫자 집합(0~3 → 0~4)과 자릿수(3 → 4)를 바꿀 수 있음. 제약: 0 을 포함한 집합이어야 함정이 살아 있고, 답은 1/(숫자 개수) 로 자릿수와 무관하므로 값을 바꾸려면 조건 자리를 최고 자리로 옮겨야 함."
    creative: "(1) 「백의 자리가 1 일」로 옮기면 함정이 분자 쪽으로 이동해 ★2 유지 (2) 「0 을 포함할」로 바꾸면 여사건이 필요해 ★2~3 (3) 「짝수일」과 겹치면 일의 자리 0 이 두 조건에 동시에 걸려 분기가 생기고 ★3."
```

```yaml
- id: GN-PROB-67-e5
  page: 67
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    A, V, O, C, A, D, O 의 7개 문자를 일렬로 나열할 때 모음끼리 이웃할 확률.
  category: "같은 것이 있는 순열 → 모음 4개 묶음 → 묶음 배열 × 묶음 내부 중복 처리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "같은 것이 있는 순열을 이용하는 확률(이웃 묶음)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    A 두 개·O 두 개의 중복 나누기를 전체(7!/2!2!)와 묶음 내부(4!/2!2!) 양쪽에 각각 적용해야 한다. 도구는 묶음 순열 하나지만 중복 처리를 두 번 하는 것이 이 유형의 표준 난점이다.
    필수 예제 ★2 출발 · 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "모음 4개 묶음 → 묶음 포함 4요소 배열 4! × 내부 4!/2!2! / (7!/2!2!)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{4}{35}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-prob/items/67-e5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "문자 구성(A2·O2 → A3·O2 등 중복 개수)과 묶는 대상(모음 → 자음)을 바꿀 수 있음. 제약: 중복 나누기가 전체와 묶음 내부 양쪽에 일관되게 들어가야 하고, 묶는 쪽의 개수가 많을수록 확률이 작아져 분모가 커짐."
    creative: "(1) 「모음끼리 이웃하지 않을」로 뒤집으면 끼워넣기 + 중복 처리라 ★3 (2) 「양 끝이 모두 모음일」로 바꾸면 자리 고정 ★2 (3) 「같은 문자끼리 이웃할」로 바꾸면 묶음이 둘(AA·OO)이 되어 ★2~3."
```

```yaml
- id: GN-PROB-67-131
  page: 67
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    P, E, P, P, E, R 의 6개 문자를 일렬로 나열할 때 맨 앞에 E 가 올 확률.
  category: "같은 것이 있는 순열 전체 → 맨 앞 E 고정 후 나머지 5개 나열 → 확률"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "같은 것이 있는 순열을 이용하는 확률(자리 고정)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    맨 앞 자리를 E 로 못 박고 남은 P 3개·E 1개·R 1개를 나열하면 된다. 67-e5 의 중복 처리를 한 번만 쓰는 유제다.
    예제 ★2 출발 · 통찰 0 · M_total 5 → −1 하여 ★1.
  tier: star_1
  mechanism_primary: "전체 6!/3!2! → 맨 앞 E 고정 5!/3! → 1/3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{1}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/67-131.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "문자 구성(P3·E2·R1 → P2·E3·R1)과 고정 문자(E → P)를 바꿀 수 있음. 제약: 답이 (그 문자의 개수)/(전체 문자 수) 로 떨어진다는 성질이 있어 구성만 바꾸면 값이 바로 정해짐."
    creative: "(1) 「맨 앞과 맨 뒤가 모두 P 일」로 바꾸면 자리 두 곳 고정 ★2 (2) 「E 끼리 이웃할」이면 묶음 + 중복 처리 ★2 (3) 「P 가 E 보다 앞에 하나도 없을」 같은 순서 조건이면 자리 선택 조합 I-RT 가 붙어 ★3."
```

```yaml
- id: GN-PROB-67-132
  page: 67
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    1, 1, 2, 3, 4, 4, 4, 5 의 8개 숫자를 일렬로 나열할 때 짝수는 짝수끼리, 홀수는 홀수끼리 이웃할 확률.
  category: "짝·홀 두 덩어리로 분류 → 덩어리 배열 2! × 각 덩어리 내부 중복 순열"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "같은 것이 있는 순열을 이용하는 확률(두 묶음 동시 이웃)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    짝수 2·4·4·4 와 홀수 1·1·3·5 를 각각 한 덩어리로 보고 덩어리 배열 2!, 내부 4!/3! 과 4!/2! 을 곱한다. 중복 나누기가 전체·짝수 덩어리·홀수 덩어리 세 곳에 걸려 단계가 늘어난다.
    예제 ★2 출발 · 통찰 0 · M_total 7 → ★2 유지(통찰이 없어 +1 조건 미충족).
  tier: star_2
  mechanism_primary: "짝·홀 두 덩어리 배열 2! × 짝수 내부 4!/3! × 홀수 내부 4!/2! / (8!/2!3!)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{35}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/67-132.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "숫자 구성(1이 2개·4가 3개 → 다른 중복 분포)과 분류 기준(짝·홀 → 3의 배수 여부)을 바꿀 수 있음. 제약: 두 덩어리의 원소 수 합이 전체와 같아야 하고, 중복 나누기를 전체·각 덩어리 세 곳에 빠짐없이 적용해야 함."
    creative: "(1) 「짝수끼리만 이웃」(홀수는 자유)으로 바꾸면 덩어리 하나 + 끼워넣기 ★2~3 (2) 세 종류(3의 배수·나머지 1·나머지 2)로 분류하면 덩어리 3! 로 ★3 (3) 「짝수끼리 이웃하지 않을」이면 끼워넣기 + 중복 처리 ★3."
```

```yaml
- id: GN-PROB-67-133
  page: 67
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    X = {1, 2, 3} 에서 X 로의 함수 f 중 f(1)+f(2)+f(3) = 8 을 만족시킬 확률.
  category: "함수 → 순서쌍 (f(1), f(2), f(3)) → 합이 8 인 순서쌍 세기"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "함수 f 를 1~3 의 값을 갖는 순서쌍으로 바꿔 읽고, 합 조건을 순서쌍 세기로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "함수의 개수를 이용하는 확률(함숫값의 합 조건)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    함수라는 옷을 벗겨 순서쌍으로 보는 전환이 관문이고, 그 뒤엔 최댓값 9 에서 1 모자란 합 8 을 주는 값 조합이 하나뿐(3, 3, 2 의 자리 바꿈)이라는 관찰로 끝난다.
    예제 ★2 출발 · I-RT d1 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "전체 함수 3^3 → 합 8 인 순서쌍은 3·3·2 의 자리 바꿈 3가지 → 1/9"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{1}{9}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/67-133.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "목표 합(8 → 7·6)과 집합 크기(3 → 4)를 바꿀 수 있음. 제약: 합이 최댓값에 가까울수록 경우가 적어 열거로 끝나지만 가운데 값(예: 6)으로 내리면 경우가 급증해 중복조합·분할 계산이 필요함."
    creative: "(1) 합 대신 f(1)×f(2)×f(3) 조건으로 바꾸면 약수 분해가 들어가 ★3(72-148 골조) (2) 「합이 8 이상」으로 바꾸면 여러 합을 더해야 해 I-MI ★3 (3) 공역을 {1, …, 5} 로 넓히면 중복조합 세기가 되어 ★3."
```

```yaml
- id: GN-PROB-68-e6
  page: 68
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    흰 공 3개·검은 공 2개·빨간 공 5개에서 4개를 동시에 꺼낼 때 ⑴ 4개 모두 빨간 공 ⑵ 흰 2개와 검은 2개 ⑶ 흰 공이 2개 나올 확률.
  category: "전체 조합 C(10,4) → 색별 조합의 곱 → 확률"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "조합을 이용하는 확률(색깔 공 동시에 꺼내기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑶ 이 이 예제의 핵심 — 「흰 공이 2개」는 나머지 2개가 흰색이 아니기만 하면 되므로 검은·빨간 7개에서 2개를 고르는 C(7,2) 로 묶어야 한다. ⑵ 처럼 색을 모두 지정한 경우와 구별하는 것이 함정이다.
    필수 예제 ★2 출발 · 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "전체 C(10,4) → ⑴ C(5,4) ⑵ C(3,2)C(2,2) ⑶ C(3,2)C(7,2) → 각 확률"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{1}{42}$ ⑵ $\dfrac{1}{70}$ ⑶ $\dfrac{3}{10}$'
  answer_source: "본문 풀이"
  figure: "crop:fig-68-e6.png"
  latex: latex-bank/gn-prob/items/68-e6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "색별 개수(3·2·5)와 꺼내는 개수(4 → 3·5)를 바꿀 수 있음. 제약: 각 색의 개수가 요구 개수 이상이어야 조합이 0 이 아니고, 그림 라벨(흰·검·빨)과 개수가 일치해야 하므로 크롭도 함께 교체해야 함."
    creative: "(1) 「적어도 한 개는 흰 공」으로 바꾸면 여사건 ★2 (2) 「세 가지 색이 모두 나올」이면 색 분배 분기가 생겨 I-MI ★3 (3) 68-136 처럼 확률을 주고 흰 공 개수를 되묻는 역방향으로 바꾸면 I-BW ★2~3."
```

```yaml
- id: GN-PROB-68-134
  page: 68
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    당첨 제비 7개가 포함된 16개의 제비에서 3개를 동시에 뽑을 때 당첨 제비가 1개 나올 확률.
  category: "전체 C(16,3) → 당첨 1개 · 비당첨 2개의 조합 곱 → 확률"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "조합을 이용하는 확률(당첨 제비 개수 지정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    「당첨이 1개」는 나머지 2개가 비당첨이라는 뜻이므로 C(7,1)×C(9,2) 로 두 묶음을 동시에 지정해야 한다. 68-e6 ⑶ 과 같은 골조이며 수가 커 계산 부담만 조금 더 있다.
    예제 ★2 출발 · 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "전체 C(16,3) → 당첨 C(7,1) × 비당첨 C(9,2) → 9/20"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{9}{20}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/68-134.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "전체 제비 수(16)·당첨 수(7)·뽑는 수(3)를 바꿀 수 있음. 제약: 비당첨 수 = 전체 − 당첨 이 요구 개수 이상이어야 하고, C(n,3) 이 분모라 수를 키우면 약분이 지저분해지므로 답이 기약분수로 떨어지는 조합을 고를 것."
    creative: "(1) 「적어도 1개 당첨」으로 바꾸면 여사건 ★2 (2) 「당첨이 2개 이상」이면 두 경우 합산 I-MI ★3 (3) 한 개씩 비복원으로 세 번 뽑는 시행으로 서술을 바꾸면 순서가 생겨 순열 대 조합의 선택 I-SC ★3."
```

```yaml
- id: GN-PROB-68-135
  page: 68
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    6명 중에서 3명의 대표를 뽑을 때 특정한 한 명은 포함되고 다른 한 명은 포함되지 않을 확률.
  category: "전체 C(6,3) → 한 명 확정·한 명 제외 후 나머지 4명에서 2명 → 확률"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "조합을 이용하는 확률(특정 원소의 포함·제외)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    A 를 미리 넣고 C 를 빼면 남은 4명에서 2명을 고르는 문제로 줄어든다. 64-123 의 부분집합 판과 같은 발상을 조합으로 옮긴 유제다.
    예제 ★2 출발 · 통찰 0 · M_total 5 → −1 하여 ★1.
  tier: star_1
  mechanism_primary: "전체 C(6,3) → A 확정·C 제외 후 남은 4명에서 2명 C(4,2) → 3/10"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{3}{10}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/68-135.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "전체 인원(6 → 7·8)과 뽑는 인원(3 → 4)을 바꿀 수 있음. 제약: 포함·제외를 지정한 두 명을 제외한 인원이 남은 선발 인원 이상이어야 함."
    creative: "(1) 「A 와 B 가 함께 뽑힐」이면 조건이 하나로 줄어 ★1 (2) 「A 또는 C 중 한 명만 뽑힐」이면 두 경우 합산 ★2 (3) 대표·부대표처럼 순서를 주면 순열이 되어 ★2."
```

```yaml
- id: GN-PROB-68-136
  page: 68
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    흰 공과 검은 공을 합해 6개인 주머니에서 2개를 동시에 꺼낼 때 둘 다 흰 공일 확률이 2/5 일 때 흰 공의 개수.
  category: "흰 공 수를 미지수로 → 조합 확률 방정식 → 정수해"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "확률값이 먼저 주어지고 그것을 만족시키는 흰 공 개수를 역추적해야 함(C(n,2)/C(6,2) = 2/5 의 자연수 해)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "조합을 이용한 확률의 역문제(개수 결정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    68-e6 의 골조를 뒤집어 확률에서 개수를 되묻는다. C(n,2)/C(6,2) = 2/5 를 n(n−1) = 12 로 정리한 뒤 0 ≤ n ≤ 6 인 자연수 해만 취한다.
    예제 ★2 출발 · I-BW d1 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "흰 공 n 개 → C(n,2)/C(6,2) = 2/5 → n(n−1) = 12 → n = 4"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/68-136.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "전체 공의 수(6)와 주어진 확률(2/5)을 바꿀 수 있음. 제약: n(n−1) = (확률)×(전체 조합수)×2 가 연속한 두 정수의 곱이 되어야 자연수 해가 나오므로, 확률을 먼저 정하지 말고 n 을 정한 뒤 확률을 역산해서 출제할 것. 음수 근은 버린다."
    creative: "(1) 꺼내는 개수를 3개로 늘리면 n(n−1)(n−2) 삼차가 되어 ★3 (2) 「둘 다 같은 색일 확률」로 바꾸면 두 항의 합이라 이차방정식 + 검증이 붙어 ★3(I-VF 후보) (3) 흰·검 공의 비를 미지수로 주면 Mₐ 가 올라 ★3."
```

```yaml
- id: GN-PROB-69-e7
  page: 69
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    흰 공과 검은 공을 합해 10개인 주머니에서 2개를 꺼내 확인하고 다시 넣는 시행을 반복했더니 3번에 1번 꼴로 둘 다 흰 공이었을 때 흰 공의 개수.
  category: "상대도수 → 통계적 확률 ≈ 수학적 확률 → 조합 방정식의 자연수 해"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "실험에서 얻은 상대도수 1/3 을 수학적 확률과 같다고 놓고 흰 공 개수를 역추적"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "통계적 확률을 이용한 미지수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    「3번에 1번 꼴」을 확률 1/3 으로 읽는 것이 이 단원의 새 개념이고, 그 뒤는 68-136 과 같은 조합 역문제다. C(x,2)/C(10,2) = 1/3 에서 x(x−1) = 30.
    필수 예제 ★2 출발 · I-BW d1 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "상대도수 1/3 = C(x,2)/C(10,2) → x(x−1) = 30 → x = 6"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$6$개'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-prob/items/69-e7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "전체 공 수(10)와 상대도수(3번에 1번 → 5번에 1번)를 바꿀 수 있음. 제약: x(x−1) 이 연속 두 정수의 곱으로 떨어져야 하므로 흰 공 개수를 먼저 정하고 상대도수를 역산할 것."
    creative: "(1) 한 개만 꺼내는 시행으로 바꾸면 일차식이 되어 69-137 수준 ★1 (2) 「적어도 하나가 흰 공」의 상대도수로 주면 여사건 + 역추적으로 ★3 (3) 시행 횟수와 관찰 횟수를 구체 수치로 주고 상대도수를 학생이 직접 계산하게 하면 ★2 유지."
```

```yaml
- id: GN-PROB-69-137
  page: 69
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    당첨 제비 n 개를 포함한 15개의 제비에서 한 개를 꺼내 확인하고 다시 넣는 시행을 반복했더니 5번에 1번 꼴로 당첨이었을 때 n 의 값.
  category: "상대도수 → n/15 = 1/5 → n"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "통계적 확률을 이용한 미지수 결정(단일 시행)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    69-e7 의 유제이지만 한 개만 꺼내므로 조합이 필요 없고 n/15 = 1/5 라는 일차 비례식 한 줄로 끝난다.
    예제 ★2 출발 · 통찰 0 · M_total 5 → −1 하여 ★1.
  tier: star_1
  mechanism_primary: "상대도수 1/5 = n/15 → n = 3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/69-137.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "전체 제비 수(15)와 상대도수(1/5 → 1/3)를 바꿀 수 있음. 제약: n 이 자연수가 되도록 전체 수가 분모의 배수여야 함."
    creative: "(1) 두 개를 동시에 꺼내는 시행이면 69-e7 골조 ★2 (2) 「당첨이 아닐 확률」로 물으면 여사건 한 단계 추가 ★1 (3) 시행 횟수와 당첨 횟수를 실제 수치로 주어 상대도수를 계산시키면 ★1 유지."
```

```yaml
- id: GN-PROB-69-138
  page: 69
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    스마트폰 사용 시간의 도수분포표에서 임의로 한 학생을 택할 때 사용 시간이 3시간 미만일 확률.
  category: "도수분포표 → 해당 계급의 도수 합 / 전체 도수 → 확률"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "통계적 확률(도수분포표의 상대도수)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    표에서 3시간 미만 계급의 도수를 더해 전체 도수로 나누면 끝난다. 계급의 경계(3시간 미만 vs 이하)만 정확히 읽으면 된다.
    예제 ★2 출발 · 통찰 0 · M_total 4 → −1 하여 ★1.
  tier: star_1
  mechanism_primary: "3시간 미만 계급의 도수 합 / 전체 도수 → 상대도수를 확률로"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{21}{25}$'
  answer_source: "답지"
  figure: "crop:fig-69-138.png"
  latex: latex-bank/gn-prob/items/69-138.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "표의 계급별 도수와 묻는 계급 경계(3시간 미만 → 2시간 미만·4시간 이상)를 바꿀 수 있음. 제약: 표는 그림(crop)이라 수치를 바꾸면 크롭을 새로 만들어야 하고, 도수 합이 전체와 일치해야 하며 답이 기약분수로 떨어지도록 전체 도수를 잡을 것."
    creative: "(1) 「2시간 이상 4시간 미만」처럼 양쪽 경계를 주면 T-경계 함정이 늘어 ★2 (2) 표의 한 칸을 미지수로 비워 두고 확률을 주면 I-BW 역문제 ★2 (3) 상대도수만 주고 전체 학생 수를 묻는 형태로 뒤집으면 ★2."
```

### 특강

```yaml
- id: GN-PROB-70-139
  page: 70
  vendor_label: "특강"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "특강"
  summary: |
    -3 ≤ a ≤ 2 인 실수 a 에 대하여 이차방정식 x^2 − 4ax + 5a = 0 이 실근을 가질 확률.
  category: "판별식 ≥ 0 → a 에 대한 부등식 → 구간 길이의 비"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "경우의 수가 유한하지 않은 연속 구간이므로 확률을 「만족하는 a 의 구간 길이 ÷ 전체 구간 길이」라는 기하적 측도로 옮겨야 함"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "기하적 확률(길이의 비)과 판별식 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    a 가 연속 실수라 「경우의 수를 센다」가 통하지 않는다. D/4 = 4a^2 − 5a ≥ 0 → a(4a−5) ≥ 0 으로 a ≤ 0 또는 a ≥ 5/4 를 얻고, 이를 주어진 구간 [-3, 2] 와 교집합한 길이를 전체 길이 5 로 나눈다. 이차부등식의 부호(T-부호)와 구간 경계(T-범위) 둘 다 걸린다.
    특강 구역 ★2~3 출발 · I-RT d2 · M_total 9 → ★3.
  tier: star_3
  mechanism_primary: "D/4 = 4a^2 − 5a ≥ 0 → a ≤ 0 또는 a ≥ 5/4 → 구간 [-3, 2] 와의 교집합 길이 / 전체 길이 5"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{3}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/70-139.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간([-3, 2])과 방정식의 계수(-4a, 5a)를 바꿀 수 있음. 제약: 판별식 부등식의 두 경계값이 모두 주어진 구간 안에 있어야 길이 비가 흥미롭고, 경계값이 분수(5/4)라도 전체 길이와 나눠 기약분수가 되도록 구간을 잡을 것. 구간 길이가 0 이 되는 퇴화는 피한다."
    creative: "(1) 「허근을 가질」로 뒤집으면 여사건 ★3 유지 (2) 두 근이 모두 양수일 조건으로 바꾸면 판별식 + 근과 계수의 관계 세 조건을 모두 만족하는 구간이라 I-CON 이 붙어 ★4 (3) a, b 두 실수를 정사각형 영역에서 택하는 넓이 비로 올리면 2차원 기하적 확률 ★4."
```

### 연습문제 STEP 1

```yaml
- id: GN-PROB-71-140
  page: 71
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    서로 다른 세 주사위의 눈의 수 a, b, c 에 대하여 a > b 이고 a > c 일 확률.
  category: "a 값으로 분기 → 각 경우 b, c 는 a 미만 → 합산"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "a 가 b, c 보다 크다는 조건을 a = 1, 2, …, 6 여섯 경우로 나눠 각각 (a−1)^2 을 세고 모두 더해야 함"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "주사위 눈의 대소 조건 확률(기준값 분기·합산)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    b, c 가 서로 독립적으로 a 보다 작기만 하면 되므로 a 를 고정하는 순간 (a−1)^2 로 떨어진다. 분기를 떠올리지 못하면 216가지를 헤매게 되는 전형적인 STEP 1 문항이다.
    STEP 1 ★2 출발 · I-MI d1 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "a 고정 → b, c 각각 a−1 가지 → Σ(a−1)^2 = 55 / 216"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{55}{216}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/71-140.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주사위 개수(3)와 눈의 수 범위(1~6)를 바꿀 수 있음. 제약: 분모가 6^n 이라 약분이 잘 안 되므로 답이 지저분해지는 것을 감수하거나 주사위 눈 수를 4 등으로 줄일 것. 조건을 a ≥ b 로 바꾸면 합이 Σa^2 으로 바뀌므로 다시 세야 함."
    creative: "(1) 「a 가 b, c 보다 크거나 같을」로 바꾸면 등호 처리로 T-경계가 추가되어 ★3 (2) 「a > b > c」로 완전 순서를 요구하면 조합 C(6,3) 로 환원되는 I-RT ★3 (3) 「세 눈의 최댓값이 4 일」로 바꾸면 최댓값 분포 계산으로 ★3."
```

```yaml
- id: GN-PROB-71-141
  page: 71
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    1~7 중 서로 다른 4개의 숫자로 만든 네 자리 자연수가 4600 보다 클 확률.
  category: "천의 자리로 분기 → 5 이상 / 4 일 때 백의 자리 조건 → 합산"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「4600 보다 크다」를 천의 자리가 5 이상인 경우와 천의 자리가 4 이고 백의 자리가 6 이상인 경우로 나눠 각각 세야 함"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "자리 조건 순열 확률(기준 수보다 큰 수 세기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    큰 자리부터 내려오며 분기하는 표준 절차지만, 천의 자리가 4 인 경계 구간에서 백의 자리만 보면 되고 십·일의 자리는 자유라는 점을 놓치기 쉽다. 숫자가 1~7 이라 0 함정은 없다.
    STEP 1 ★2 출발 · I-MI d1 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "전체 7P4 → 천의 자리 5·6·7 은 3×6P3, 천의 자리 4 는 백의 자리 6·7 로 2×5P2 → 합 / 840"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{10}{21}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/71-141.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준 수(4600)와 숫자 집합(1~7)·자릿수(4)를 바꿀 수 있음. 제약: 기준 수의 각 자리가 숫자 집합 안에 있어야 분기가 깔끔하고, 기준 수에 0 이 들어가면(4600 의 십·일의 자리처럼) 그 아래 자리는 자유가 되어 분기가 두 단계로 끝남. 집합에 0 을 넣으면 최고 자리 제한이 추가됨."
    creative: "(1) 「4600 보다 작을」로 뒤집으면 여사건 ★2 (2) 기준 수를 4635 처럼 모든 자리가 살아 있게 하면 분기가 네 단계로 늘어 ★3 (3) 중복을 허용하면 중복순열 + 분기라 ★3."
```

```yaml
- id: GN-PROB-71-142
  page: 71
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    격자 도로망에서 A 지점에서 C 지점까지 최단 거리로 갈 때 중간의 B 지점을 지날 확률.
  category: "최단 경로 수 = 같은 것이 있는 순열 → A→B→C / A→C → 확률"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "도로망 위의 최단 경로를 오른쪽·위쪽 이동 기호의 배열(같은 것이 있는 순열)로 옮겨 세는 기하 → 조합 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "최단 거리 경로의 수를 이용하는 확률"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    그림은 가로 6칸·세로 5칸 격자이고 B 는 A 에서 오른쪽 2칸·위 3칸 지점이다. A→B 와 B→C 를 따로 세어 곱한 뒤 A→C 전체로 나눈다. 경로를 문자 배열로 바꾸는 전환이 관문.
    STEP 1 ★2 출발 · I-RT d1 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "A→B 5!/2!3! × B→C 6!/4!2! / A→C 11!/6!5! → 25/77"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{25}{77}$'
  answer_source: "답지"
  figure: "crop:fig-71-142.png"
  latex: latex-bank/gn-prob/items/71-142.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "격자 크기(가로 6·세로 5)와 B 의 위치를 바꿀 수 있음. 제약: 그림(crop)이 격자 크기와 B 위치를 고정하므로 수치를 바꾸면 크롭을 새로 그려야 하고, B 는 반드시 A 와 C 사이의 최단 경로 위에 있어야 함(아니면 확률 0)."
    creative: "(1) B 를 지나지 않을 확률로 뒤집으면 여사건 ★2 (2) 일부 도로를 끊어 두면 통행 불가 구간 보정이 필요해 ★3 (3) 지나야 할 지점을 둘(B, D)로 늘리면 구간 곱이 셋으로 늘어 ★3."
```

```yaml
- id: GN-PROB-71-143
  page: 71
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    평행한 두 직선 위에 각각 3개, 5개의 점이 있을 때 8개의 점 중 3개를 택해 삼각형이 만들어질 확률.
  category: "삼각형 ⟺ 세 점이 한 직선 위에 있지 않음 → 여사건"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「삼각형이 만들어진다」를 「세 점이 한 직선 위에 있지 않다」로 바꿔 읽고 같은 직선에서 3점을 고르는 경우를 빼는 조건 동치 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "조합을 이용하는 확률(삼각형의 개수·여사건)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    전체 C(8,3) 에서 한 직선 위의 3점(C(3,3) 과 C(5,3))을 빼는 것이 골조다. 삼각형이 안 되는 경우가 두 직선 각각에 있다는 점만 빠뜨리지 않으면 된다.
    STEP 1 ★2 출발 · I-EQV d1 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "전체 C(8,3) − 일직선 C(3,3) − C(5,3) → 45/56"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{45}{56}$'
  answer_source: "답지"
  figure: "crop:fig-71-143.png"
  latex: latex-bank/gn-prob/items/71-143.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 직선 위의 점 개수(3·5 → 4·5, 3·6)를 바꿀 수 있음. 제약: 그림이 점 개수를 고정하므로 크롭도 함께 바꿔야 하고, 한쪽 점이 2개 이하면 그 직선에서는 일직선 3점이 나오지 않아 빼는 항이 하나로 줄어듦."
    creative: "(1) 「사각형이 만들어질」(4점 선택)로 바꾸면 각 직선에서 2점씩 고르는 곱으로 ★3 (2) 직선을 셋으로 늘리면 빼는 항이 셋 ★2~3 (3) 「직각삼각형이 될」처럼 도형 조건을 붙이면 기하 성질 판정이 들어가 73-153 형태 ★3."
```

```yaml
- id: GN-PROB-71-144
  page: 71
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    방정식 x+y+z = 7 의 음이 아닌 정수해 중 하나를 택할 때 x 의 값이 3 일 확률.
  category: "중복조합으로 전체 해의 개수 → x = 3 대입 후 y+z = 4 의 해의 개수 → 확률"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "중복조합(방정식의 음이 아닌 정수해)을 이용하는 확률"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분모·분자 모두 H 공식을 한 번씩 쓴다. x = 3 을 대입하면 미지수가 둘인 같은 꼴 방정식으로 줄어든다는 점만 보면 되므로 표현 전환이라 볼 만한 단계가 없다.
    STEP 1 ★2 출발 · 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "전체 H(3,7) = C(9,2) → x = 3 이면 y+z = 4 로 H(2,4) = 5 → 5/36"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{5}{36}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/71-144.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변(7)·미지수 개수(3)·지정값(x = 3)을 바꿀 수 있음. 제약: 지정값이 우변보다 크면 해가 없어 확률 0 이고, 「양의 정수해」로 바꾸면 각 변수에서 1 씩 빼는 치환이 먼저 필요함."
    creative: "(1) 「x 가 3 이상일」로 바꾸면 치환 후 H 한 번이라 I-EQV 가 붙어 ★3 (2) 「x < y < z」 조건이면 순서 제약 환원 ★3 (3) 각 변수에 상한(예: x ≤ 4)을 주면 포함배제가 필요해 ★4."
```

```yaml
- id: GN-PROB-71-145
  page: 71
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    표본공간 S 와 공사건에 대하여 두 사건 A, B 의 확률에 관한 보기 ㄱ~ㄹ 중 옳은 것 고르기.
  category: "확률의 기본 성질 네 가지 판정 → 반례로 거짓 보기 기각"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "확률의 기본 성질(참·거짓 판정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ㄱ·ㄴ·ㄷ 은 확률의 정의와 P(S) = 1, P(공사건) = 0, 여사건의 합이 전체라는 기본 성질을 그대로 확인하면 되고, ㄹ 만 A = B = S 같은 반례로 무너진다. 임의의 사건을 다루므로 Mₐ 는 3.
    STEP 1 ★2 출발 · 통찰 0(반례 하나로 끝나 단계 라벨링 대상 아님) · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "확률의 기본 성질로 ㄱ·ㄴ·ㄷ 확인 → ㄹ 은 A = B = S 반례로 기각"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "ㄱ, ㄴ, ㄷ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/71-145.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "바꿀 수치가 없는 명제 판정형. 보기의 개수(4개)와 참·거짓 비율만 조정 가능하며, 정답이 특정 보기 조합(ㄱ, ㄴ, ㄷ)으로 치우치지 않게 섞을 것."
    creative: "(1) 여사건·합사건 공식을 섞은 보기(P(A∪B) = P(A)+P(B) 등)를 넣으면 배반 조건 논의가 필요해 ★3 (2) 각 보기에 반례를 직접 쓰게 하는 서술형으로 바꾸면 I-VF 가 붙어 ★3 (3) 확률의 덧셈정리까지 포함하면 다음 단원과 결합해 I-XU ★3~4."
```

### 연습문제 STEP 2

```yaml
- id: GN-PROB-72-146
  page: 72
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    108 의 모든 양의 약수가 하나씩 적힌 카드에서 한 장을 꺼낼 때 그 수가 60 의 양의 약수일 확률.
  category: "약수의 개수 → 두 수의 공약수 = 최대공약수의 약수 → 확률"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「108 의 약수이면서 60 의 약수」를 「최대공약수 12 의 약수」로 바꿔 읽어 나열 없이 개수를 셈"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "약수의 개수를 이용하는 확률(공약수 = 최대공약수의 약수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    소인수분해로 108 의 약수 개수를 세고, 조건을 gcd(108, 60) = 12 의 약수로 환원하면 분자도 개수 공식 한 번으로 끝난다. 환원을 못 해도 12개를 나열하면 풀려서 진입 저항이 낮다.
    STEP 2 ★3 출발이나 통찰 1 · M_total 5 로 노동량이 작아 −1 하여 ★2. 벤더 신호와 1단 차이.
  tier: star_2
  mechanism_primary: "108 = 2^2·3^3 → 약수 12개 → 공약수는 gcd 12 = 2^2·3 의 약수 6개 → 1/2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/72-146.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 수(108, 60)를 바꿀 수 있음. 제약: 약수의 개수가 너무 많으면 나열이 불가능해 gcd 착안이 강제되고(좋은 방향), 답이 기약분수로 떨어지려면 (gcd 의 약수 개수)/(첫 수의 약수 개수) 가 간단해지도록 지수를 조정할 것."
    creative: "(1) 「60 의 약수가 아닐」로 뒤집으면 여사건 ★2 (2) 「짝수일」·「3의 배수일」 같은 조건을 겹치면 약수 개수 공식을 두 번 써야 해 ★3 (3) 「108 의 약수 중 두 장을 뽑아 곱이 제곱수일」로 확장하면 지수의 홀짝 분석이 들어가 ★4."
```

```yaml
- id: GN-PROB-72-147
  page: 72
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    나이가 서로 다른 네 사람을 일렬로 세울 때 앞에서 두 번째 사람이 이웃한 두 사람보다 나이가 적을 확률.
  category: "앞의 세 자리만 보는 상대 순서 → 최소가 가운데 올 확률"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "네 번째 자리는 조건과 무관하므로 앞 세 자리에 오는 세 사람의 상대 순서만 남고, 그 셋 중 최소가 가운데 올 확률은 대칭성으로 1/3 임을 바로 읽음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "순열의 대소 조건 확률(상대 순서·대칭성)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    조건이 1·2·3번째 자리에만 걸리고 4번째는 자유라는 관찰이 먼저다. 그러면 누가 앞 세 자리에 오든 세 사람의 상대 순서 6가지 중 「가운데가 최소」인 2가지라 1/3. 24가지를 직접 세도 풀리지만 대칭 관찰이 이 문항의 값이다.
    STEP 2 ★3 출발 · I-SYM d2 · M_total 6 → ★3 유지.
  tier: star_3
  mechanism_primary: "조건은 앞 세 자리에만 걸림 → 세 사람의 상대 순서 3! 중 가운데가 최소인 2가지 → 1/3"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{1}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/72-147.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "사람 수(4 → 5·6)와 조건이 걸리는 자리(두 번째)를 바꿀 수 있음. 제약: 조건 자리가 양 끝이면 이웃이 하나뿐이라 확률이 1/2 로 바뀌고, 사람 수를 늘려도 조건이 세 자리에만 걸리면 답은 1/3 로 변하지 않으므로 값을 바꾸려면 조건 자리 수를 늘려야 함."
    creative: "(1) 「가장 나이가 많을」로 바꿔도 대칭이라 1/3 유지(★3) (2) 「두 번째와 네 번째가 모두 이웃보다 적을」로 조건을 둘 주면 분기·중복 제거가 필요해 ★4 (3) 원탁 배치로 바꾸면 이웃 관계가 순환해 ★4."
```

```yaml
- id: GN-PROB-72-148
  page: 72
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["평가원 기출"]
  category_type: "연습문제"
  summary: |
    X = {1, 2, 3, 4} 에서 Y = {1, …, 7} 로의 일대일함수 중 f(2) = 2 이고 네 함숫값의 곱이 4의 배수일 확률. 5지선다.
  category: "f(2) = 2 고정 → 나머지 세 값의 곱이 짝수 → 여사건(모두 홀수)"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f(2) = 2 가 이미 인수 2 를 주므로 「곱이 4의 배수」를 「나머지 세 함숫값의 곱이 짝수」로 바꿔 읽음"
    - step: 2
      type: I-SC
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "짝수가 포함된 경우를 직접 세는 갈래 대신 「세 값이 모두 홀수」인 여사건을 빼는 갈래를 선택"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "일대일함수의 개수와 배수 조건 확률(여사건)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    조건 ㈎ 가 분모까지 좁혀 준다는 점(f(2) = 2 고정 후 남은 6개에서 3개를 배열)과, 남은 값 중 4 든 6 이든 짝수 하나만 있으면 2×짝수로 4의 배수가 된다는 동치 변환이 핵심이다. 그 뒤 여사건으로 홀수 4개에서 3개를 배열한 경우를 뺀다.
    STEP 2 ★3 + 평가원 기출 출발 · 통찰 2개(EQV d2 · SC d1)로 +1 후보이나 두 단계 모두 표준 도구라 ★3 유지.
  tier: star_3
  mechanism_primary: "f(2) = 2 고정 → 남은 6개에서 3개 배열 6P3 → 여사건은 홀수 4개에서 3개 4P3 → (120 − 24)/840"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/72-148.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공역 크기(7)·정의역 크기(4)·고정값(f(2) = 2)·배수 조건(4의 배수)을 바꿀 수 있음. 제약: 고정값이 짝수여야 「나머지 곱이 짝수」라는 간단한 동치가 성립하고, 고정값을 홀수로 두면 4의 배수 조건이 「짝수 2개 또는 4 하나」로 갈라져 난이도가 확 오름. 공역의 짝수·홀수 개수가 여사건 계산을 정하므로 함께 확인할 것."
    creative: "(1) 고정값을 f(2) = 1 처럼 홀수로 바꾸면 분기가 늘어 ★4 (2) 「8의 배수」로 올리면 인수 2 의 개수를 세야 해 ★4 (3) 일대일함수 조건을 떼면 중복순열이 되어 여사건 계산이 단순해져 ★2~3."
```

```yaml
- id: GN-PROB-72-149
  page: 72
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    1, 2, 3 에서 중복을 허용해 3개를 뽑아 만든 세 자리 자연수 중 하나를 택할 때 3의 배수일 확률.
  category: "3의 배수 판정 → 각 자리 숫자의 합이 3의 배수 → 합 조건을 만족하는 조합 세기"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「3의 배수」를 「각 자리 숫자의 합이 3의 배수」로 바꿔 27개를 일일이 나눠 보지 않고 합으로 분류"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "중복순열과 배수 판정 조건을 이용하는 확률"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    합이 3의 배수인 숫자 조합은 세 수가 모두 같은 경우와 1·2·3 이 하나씩인 경우뿐이고, 뒤쪽은 자리 바꿈 3! 을 곱해야 한다. 같은 수 반복과 서로 다른 수 배열을 구별해 세는 것이 실수 지점.
    STEP 2 ★3 출발 · I-EQV d1 · M_total 6 → ★3 유지.
  tier: star_3
  mechanism_primary: "전체 3^3 → 합이 3의 배수: (1,1,1)·(2,2,2)·(3,3,3) 과 1·2·3 의 배열 3! → 9/27"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{1}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/72-149.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "숫자 집합(1, 2, 3)과 자릿수(3)·배수(3)를 바꿀 수 있음. 제약: 1~3 은 3 으로 나눈 나머지가 1, 2, 0 으로 고르게 퍼져 답이 정확히 1/3 이 되는 특수 구조라, 집합을 바꾸면 나머지 분포를 다시 확인해야 함. 0 을 넣으면 최고 자리 제한이 추가됨."
    creative: "(1) 「4의 배수일」로 바꾸면 끝 두 자리만 보면 되어 골조가 달라짐(★3) (2) 자릿수를 4 로 늘리면 합 조건 분류가 늘어 ★4 (3) 「3의 배수가 아닐」로 뒤집으면 여사건 ★3 유지."
```

```yaml
- id: GN-PROB-72-150
  page: 72
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    A = {1, 2, 3} 에서 B = {1, …, 5} 로의 함수 f 중 x1 < x2 이면 f(x1) ≤ f(x2) 를 만족시킬 확률.
  category: "증가하지 않는 순서 조건 → 중복조합 → 전체 함수 개수로 나누기"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f(1) ≤ f(2) ≤ f(3) 을 만족하는 함수의 개수를 「5개에서 중복을 허용해 3개를 택하는 조합」으로 옮김(순서가 이미 정해져 배열을 세지 않음)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "단조증가 함수의 개수(중복조합)를 이용하는 확률"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    조건이 「값을 고르면 배열은 자동으로 하나」라는 뜻임을 알아야 중복조합 H(5,3) 이 나온다. 이 전환을 못 하면 125가지를 헤매게 되므로 진입 저항이 분명하다. 분모는 그냥 5^3.
    STEP 2 ★3 출발 · I-RT d2 · M_total 7 → ★3 유지.
  tier: star_3
  mechanism_primary: "전체 함수 5^3 → 단조 조건은 값 3개를 중복 허용해 뽑는 H(5,3) = C(7,3) → 35/125"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{7}{25}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/72-150.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정의역 크기(3)·공역 크기(5)를 바꿀 수 있음. 제약: 답이 C(n+r−1, r)/n^r 이라 공역이 커질수록 값이 작아지고, 등호 없는 f(x1) < f(x2) 로 바꾸면 중복조합이 조합 C(5,3) 으로 바뀌므로 경계(≤ vs <)를 반드시 명시할 것."
    creative: "(1) 등호를 빼 순증가로 바꾸면 조합이 되어 ★3 유지(값만 변함) (2) f(1) ≤ f(2) ≤ f(3) 이면서 f(2) = 3 처럼 값 하나를 고정하면 구간이 둘로 갈려 ★4 (3) 공역을 정의역과 같게 두고 f(f(x)) 조건을 붙이면 ★4~5."
```

### 연습문제 실력 UP

```yaml
- id: GN-PROB-73-151
  page: 73
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: ["수능 기출"]
  category_type: "연습문제"
  summary: |
    앞면 2개·뒷면 3개로 놓인 동전 5개에 대해 주사위 눈 k 가 5 이하면 k번째 동전을, 6 이면 모두를 뒤집는 시행을 3번 반복했을 때 모두 앞면이 될 확률이 q/p 일 때 p+q.
  category: "각 동전이 뒤집힌 횟수의 홀짝 → 시행 순서 무관 → 가능한 눈의 조합 분기"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "동전의 최종 상태는 각 동전이 뒤집힌 횟수의 홀짝으로만 정해지고 시행 순서와 무관하다는 동치 변환"
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "6 이 나오지 않는 경우(뒷면 3개를 각각 한 번씩)와 6 이 한 번 나오는 경우(전체 반전 후 앞면이던 2개를 되돌림) 두 갈래를 모두 세야 함"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "반복 시행과 상태 반전(동전 뒤집기) 확률"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    뒤집기는 순서를 바꿔도 결과가 같으므로 「3번의 눈이 어떤 집합인가」만 보면 된다. 6 이 없으면 3·4·5 를 한 번씩, 6 이 한 번이면 1·2·6 을 한 번씩이어야 모두 앞면이 되고, 6 이 두 번·세 번인 경우는 살아남지 못한다. 각 경우 눈의 배열 3! 을 세어 더한다.
    실력 UP ★4 + 수능 기출 출발 · 통찰 2개(EQV d2 · MI d2) → ★4. ★5 는 통찰 3개 이상 + SC/VF/SYM/XU 가 필요해 미충족.
  tier: star_4
  mechanism_primary: "뒤집힌 횟수의 홀짝만 중요 → 눈의 집합이 {3,4,5} 또는 {1,2,6} → 각 3! 가지 → 12/216 = 1/18 → p+q"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$19$'
  answer_source: "답지"
  figure: "crop:fig-73-151.png"
  latex: latex-bank/gn-prob/items/73-151.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "동전 개수(5)·초기 앞면 자리(1·2번째)·시행 횟수(3)를 바꿀 수 있음. 제약: 시행 횟수가 뒤집어야 할 동전 수와 맞아떨어져야 경우가 남고(3번에 뒷면 3개), 횟수를 4번으로 늘리면 「같은 동전을 두 번 뒤집어 상쇄」하는 경우까지 더해져 분기가 급증함. 그림은 초기 배치를 고정하므로 함께 교체할 것."
    creative: "(1) 시행을 4번으로 늘리면 상쇄 경우가 추가되어 I-VF 가 붙고 ★5 후보 (2) k = 6 규칙을 「k번째와 그 다음 동전을 뒤집는다」로 바꾸면 인접 반전 패턴이 되어 ★4~5 (3) 「모두 뒷면이 될 확률」로 목표를 바꾸면 홀짝 조건이 반대가 되어 같은 골조 ★4."
```

```yaml
- id: GN-PROB-73-152
  page: 73
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    2, 2, 4, 4, 6, 6 이 적힌 공 6개를 비복원으로 모두 꺼내 앞의 세 개로 세 자리 수 p, 뒤의 세 개로 q 를 만들 때 p > q 일 확률.
  category: "p > q 와 p < q 의 대칭 → p = q 인 경우만 따로 세고 나머지를 반으로"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "앞 세 자리와 뒤 세 자리를 통째로 맞바꾸면 p 와 q 가 뒤바뀌므로 p > q 인 경우와 p < q 인 경우의 수가 같음"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "p = q 조건을 자리별 일치(a1 = a4, a2 = a5, a3 = a6)로 바꿔 읽어 2·4·6 을 세 자리에 배정하는 경우로 환원"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "대칭성을 이용한 대소 비교 확률(같은 것이 있는 순열)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    p > q 를 직접 세려 들면 자리별 분기가 감당이 안 된다. 전체 배열에서 p = q 인 경우를 빼고 반으로 나누는 대칭 논법이 유일한 실용 경로다. 같은 수가 두 개씩이라 전체 배열은 6!/(2!)^3 로 세야 하고, p = q 는 같은 수끼리 앞뒤로 갈라 놓는 배정 3! 뿐이다.
    실력 UP ★4 출발 · 통찰 2개(SYM d2 · EQV d2) → ★4. ★5 는 통찰 3개 이상이 필요해 미충족.
  tier: star_4
  mechanism_primary: "전체 6!/(2!)^3 = 90 → p = q 인 경우 3! = 6 → (90 − 6)/2 = 42 → 7/15"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$\dfrac{7}{15}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/73-152.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "적힌 수(2, 4, 6)와 각 수의 개수(2개씩)를 바꿀 수 있음. 제약: 같은 수가 정확히 두 개씩이어야 p = q 가 자리별 일치로 깔끔하게 환원되고, 서로 다른 6개 수로 바꾸면 p = q 가 불가능해져 답이 정확히 1/2 이 되어 문제가 싱거워짐."
    creative: "(1) 수를 모두 다르게 하면 대칭만으로 1/2 이 되어 ★3 으로 내려감 (2) 「p 가 q 의 배수일」로 바꾸면 대칭이 깨져 전수 분석이 필요해 ★5 (3) 세 자리씩이 아니라 두 자리·네 자리로 쪼개면 자리값 가중이 달라져 대칭 논법이 그대로 쓰이는 ★4 변형."
```

```yaml
- id: GN-PROB-73-153
  page: 73
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    원 위에 같은 간격으로 놓인 8개의 점 중 3개를 꼭짓점으로 하는 삼각형이 직각삼각형일 확률.
  category: "원주각 → 직각 ⟺ 한 변이 지름 → 지름 개수 × 나머지 점"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「직각삼각형이 된다」는 기하 조건을 「빗변이 지름이다」로 옮겨 지름 4개와 나머지 점 6개를 곱하는 개수 세기로 전환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "원 위의 점으로 만드는 도형의 확률(반원에 대한 원주각)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    반원에 대한 원주각이 직각이라는 성질 하나로 문제가 개수 세기로 무너진다. 8개 점이 등간격이라 지름은 마주 보는 쌍 4개, 나머지 6개 점이 직각의 꼭짓점이 되므로 24가지.
    실력 UP ★4 출발이나 착안 한 번 뒤 계산이 두 줄이고 M_total 5 로 가벼워 −1 하여 ★3. 벤더 신호와 1단 차이.
  tier: star_3
  mechanism_primary: "직각 ⟺ 빗변이 지름 → 지름 4개 × 나머지 점 6개 = 24 / C(8,3) = 56"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{3}{7}$'
  answer_source: "답지"
  figure: "crop:fig-73-153.png"
  latex: latex-bank/gn-prob/items/73-153.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "점의 개수(8 → 10·12)를 바꿀 수 있음. 제약: 점의 개수가 짝수여야 지름이 생기고(홀수면 직각삼각형이 0개), 지름 개수는 n/2 · 나머지 점은 n−2 개라 공식이 그대로 확장됨. 그림이 점 개수를 고정하므로 크롭도 교체할 것."
    creative: "(1) 「둔각삼각형이 될」로 바꾸면 호의 길이 분석이 필요해 ★4 (2) 「정삼각형·이등변삼각형이 될」로 바꾸면 간격 분할 분기와 중복 보정이 들어가 I-SC ★4 (3) 점의 개수를 n 으로 일반화해 확률을 n 의 식으로 나타내게 하면 Mₐ 가 올라 ★4."
```

## 표본 판정 요약 (37문)

- ★ 분포: ★1 8 · ★2 21 · ★3 6 · ★4 2 · ★5 0
- 통찰형 17 · 절차형 20 · premium 0
- 통찰 라벨 20개: I-RT 6 · I-EQV 6 · I-MI 3 · I-BW 2 · I-SYM 2 · I-SC 1. depth 1 이 11개, depth 2 가 9개이며 VF·XU·PD·CON 은 0 — ★5 자격(통찰 3개 이상 + SC/VF/SYM/XU) 문항이 이 범위에 없다는 뜻이다.
- M_total 분포: 4 → 3문 · 5 → 9문 · 6 → 14문 · 7 → 7문 · 8 → 1문 · 9 → 3문 (최대 9, 함정은 T-범위·T-경계·T-부호 위주)
- type_hint 상위: 「조합을 이용하는 확률」 4(68-e6·68-134·68-135·71-143) · 「중복순열을 이용하는 확률」 3(66-e4·66-128·66-130) · 「같은 것이 있는 순열을 이용하는 확률」 3(67-e5·67-131·67-132) · 「함수의 개수를 이용하는 확률」 3(66-129·67-133·72-150) · 「순열을 이용하는 확률(이웃·자리)」 3(65-e3·65-125·65-127)
- 대상층: 하위권 8 · 중하위권 12 · 중위권 11 · 중상위권 5 · 상위권 1
- 그림: 6문(`crop:fig-68-e6.png` · `crop:fig-69-138.png` · `crop:fig-71-142.png` · `crop:fig-71-143.png` · `crop:fig-73-151.png` · `crop:fig-73-153.png`)
- 구조 특징: 필수 예제 6개가 각각 경우의 수 도구(주사위·순열·중복순열·같은 것이 있는 순열·조합·통계적 확률)를 하나씩 맡고 그 아래 확인체크 2~3개가 같은 골조를 되풀이한다(64-e2↔64-123·64-124 / 65-e3↔65-125~127 / 66-e4↔66-128~130 / 67-e5↔67-131~133 / 68-e6↔68-134~136 / 69-e7↔69-137·138). 변형 제작 시 예제와 그 유제들을 한 세트로 다루면 된다. 연습문제부터는 도구가 섞이고 STEP 2·실력 UP 에서 동치 변환(72-146·72-149)·대칭(72-147·73-152)·상태 분석(73-151)이 들어간다.

## 분류 이슈 목록

판정이 애매하거나 벤더 신호와 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-PROB-64-e2 · 65-e3 · 66-e4 | 「필수」 예제 ★2 출발이나 통찰 0 · M_total 5~6 이라 v3.8 의 −1 조건에 걸린다. 도구를 처음 도입하는 대표 예제라 ★2 를 유지했으나 학생 체감은 ★1 일 수 있음 | ★1 / ★2 |
| GN-PROB-72-146 | 벤더 STEP 2(★3)와 라벨 ★2 가 1단 차이. gcd 착안 없이 약수 12개를 나열해도 풀려 노동량이 STEP 2 평균보다 작음 | ★2 (신호 ★3) |
| GN-PROB-73-153 | 벤더 실력 UP(★4)과 라벨 ★3 이 1단 차이. 반원의 원주각 한 번을 떠올리면 계산이 두 줄이라 실력 UP 평균보다 가벼움 | ★3 (신호 ★4) |
| GN-PROB-72-148 | 통찰 2개(EQV d2 + SC d1)로 v3.8 산식상 +1(★4) 후보이나 두 단계 모두 표준 도구(여사건·짝수 판정)라 ★3 유지. 평가원 기출 태그의 +0~1 도 0 으로 둠 | ★3 / ★4 |
| GN-PROB-71-145 | 보기 참·거짓 판정형을 I-MI 로 셀지 절차형으로 볼지 경계. ㄹ 의 반례 하나로 끝나 단계 라벨링 대상이 아니라고 보아 절차형으로 두었으나, 통찰형으로 세면 통찰형 수가 18 로 늘어남 | ★2 (통찰형/절차형 경계) |
| GN-PROB-67-132 | M_total 7 로 이 구역 확인체크 중 가장 무겁지만 통찰이 없어 +1 조건(통찰 2개 이상 또는 depth 3)에 못 미쳐 ★2. 중복 나누기를 세 곳에 적용해야 해 오답률은 ★3 급일 수 있음 | ★2 / ★3 |

### 카탈로그 차원 메모

나중에 확률과 통계 유형 카탈로그를 만들 때 참고할 것.

- **따로 세워야 할 유형**: ① 「기하적 확률(길이·넓이의 비)」(70-139) — 경우의 수 세기와 측도가 근본적으로 다르므로 독립 유형. ② 「통계적 확률(상대도수)로 미지수 결정」(69-e7·69-137) — 수학적 확률 역문제(68-136)와 골조는 같지만 개념 진입점이 달라 분리하는 편이 학습 자산화에 유리. ③ 「반복 시행과 상태 반전」(73-151) — 이 단원의 다른 어떤 유형과도 겹치지 않는 수능형 구조. ④ 「대칭성을 이용한 대소 비교」(72-147·73-152) — depth 2 의 I-SYM 을 쓰는 유일한 축이라 ★3~4 변별 슬롯 후보.
- **통합해도 될 유형**: ① 「중복순열을 이용하는 확률」과 「함수의 개수를 이용하는 확률」(66-e4·66-128~130 ↔ 66-129·67-133) — 분모가 n^r 로 같고 조건만 옷을 갈아입는 구조라 하나의 base 유형 + 서술 변형으로 묶을 수 있음. ② 「순열을 이용하는 확률」의 이웃·자리 고정·간격(65-e3·65-125~127) — 모두 「자리 제약이 있는 순열 / 전체 순열」 한 골조. ③ 「조합을 이용하는 확률」의 색깔 공·제비·대표 선출(68-e6·68-134·68-135) — 소재만 다른 동일 유형.
- **base ★ 제안**: 위 통합 유형들은 base ★2, 「기하적 확률」·「단조 함수 개수(중복조합)」·「대칭 대소 비교」는 base ★3, 「반복 시행과 상태 반전」은 base ★4 가 이 범위 실측과 맞는다.
