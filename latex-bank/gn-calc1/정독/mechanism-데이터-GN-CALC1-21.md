---
name: mechanism-데이터-GN-CALC1-21
description: 개념원리 미적분Ⅰ 21 여러 가지 정적분(1/1 · 186~190쪽 · 23문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 미적분Ⅰ (학생용 PDF) · 전사본 latex-bank/gn-calc1
  section: 21 여러 가지 정적분
  unit_code: CALC1-21
  part: "1/1"
  extract_range: "186~190쪽 · 186-e6~190-391"
  total_problems: 23
  unit_total: 23
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-calc1/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-calc1/items/<id>.tex
  image_source: latex-bank/gn-calc1/figures/ (이 범위에는 그림 문항 없음)
---

# 개념원리 미적분Ⅰ · 21 여러 가지 정적분 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 미적분Ⅰ 21단원 「여러 가지 정적분」 186~190쪽 23문항 전수를 다룬다. 구역은 필수·발전 예제 7문(필수 예제 2 · 발전 예제 1 · 확인체크 4), 연습문제 STEP 1 7문, 연습문제 STEP 2 5문, 연습문제 실력 UP 4문이다. 단원의 도구는 우함수·기함수의 정적분, 주기함수의 정적분, 절댓값·구간별 정의 함수의 정적분 세 가지이고 뒤로 갈수록 이 셋을 미분·이차방정식 도구와 섞는다.

벤더 난이도 신호는 구역과 태그다. 확인체크는 ★1 출발, 필수 예제는 ★2, 발전 예제는 ★3, 연습문제 STEP 1 은 ★2, STEP 2 는 ★3, 실력 UP 은 ★4 출발로 두고 M_total·통찰 수로 ±1 조정했다. 수능·평가원·교육청 기출 태그는 통찰이 있을 때만 +1 을 줬다.

통찰 인정선을 단원 안에서 일관되게 잡았다. 피적분함수가 직접 주어진 대칭구간 적분이나 주기 길이가 그대로 보이는 구간 분할은 이 단원이 가르치는 **표준 절차**로 보고 통찰로 세지 않았다. 반면 x·f(x) 처럼 **곱의 기우성을 학생이 스스로 판정**해야 하거나, 여러 정적분을 묶어 약분·구간 재배치를 해야 하거나, 조건에서 함수 자체를 복원해야 하는 단계만 통찰로 라벨링했다. ★5 는 없다 — 통찰 3개 이상 + SC/VF/SYM/XU 조건과 §2.14 참신도 게이트(novelty_score 0)를 동시에 만족하는 문항이 이 범위에 없다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다. 이 범위에는 그림 문항이 없다(전부 `figure: none`).

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-CALC1-186-e6
  page: 186
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    홀수차 항과 짝수차 항이 섞인 7차 다항함수의 −1부터 1까지의 정적분 값.
  category: "대칭구간 → 기함수 항 소거 → 우함수 항 2배"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "우함수·기함수의 정적분(피적분함수가 주어진 경우)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    구간이 [−1,1] 로 대칭이므로 홀수차 6개 항은 0, 남는 것은 3x²+2 뿐이고 2배 공식으로 한 줄에 끝난다.
    이 단원 공식의 첫 확인이라 통찰 0 · M_total 4. 필수 예제 출발점 ★2 에서 절차형·저노동으로 −1 하여 ★1.
    [분류 이슈] 벤더 신호(필수 예제 ★2)와 1단 어긋남 — 라벨은 ★1 로 두고 기록만 함.
  tier: star_1
  mechanism_primary: "대칭구간 [−1,1] → 홀수차 항 0 → 짝수차 항만 2∫₀¹ → 대입"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$6$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/186-e6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 항의 계수와 차수는 자유롭게 바꿔도 된다. 제약은 적분구간이 [−a,a] 로 대칭일 것, 짝수차 항의 적분값이 유리수로 정리될 것."
    creative: "(1) 정적분 값을 주고 짝수차 계수를 역산하게 하면 ★2 (2) 구간을 [0,1] 같은 비대칭으로 바꾸면 공식이 못 쓰여 단순 계산 ★1 (3) 피적분함수에 |x| 를 섞으면 우함수 판정이 한 단계 늘어 ★2."
```

```yaml
- id: GN-CALC1-186-e7
  page: 186
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    f 는 우함수, g 는 기함수이고 0부터 2까지의 적분값이 각각 3, 4 일 때 −2부터 2까지 f+g 의 정적분 값.
  category: "우함수 2배 · 기함수 0 을 추상 함수에 적용"
  M: {s: 1, k: 1, a: 3, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "우함수·기함수의 정적분(피적분함수가 주어지지 않은 경우)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f(x)=f(−x), g(−x)=−g(x) 가 그대로 우함수·기함수 정의로 주어져 공식을 곧장 대입하면 2·3+0 이다.
    판정할 것이 없고 계산도 한 줄이지만 함수가 추상이라 Mₐ 3 · M_total 6 이라 −1 조건에 걸리지 않는다.
    필수 예제 출발점 ★2 유지. g 의 적분값 4 는 쓰이지 않는 함정 수치다.
  tier: star_2
  mechanism_primary: "f 우함수 → 2∫₀² f · g 기함수 → 0 → 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$6$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/186-e7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 적분값(3, 4)과 구간 상한 2 는 자유. 제약은 g 의 값이 답에 기여하지 않는다는 구조를 유지할 것."
    creative: "(1) f+g 대신 f−3g 나 2f+g 로 바꿔도 골조 동일 ★2 (2) f 를 기함수, g 를 우함수로 뒤집어 어느 쪽이 살아남는지 판단하게 하면 ★2 (3) x·f(x) 처럼 곱의 기우성을 판정하게 하면 통찰 1개가 붙어 ★3."
```

```yaml
- id: GN-CALC1-186-372
  page: 186
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    4차 이하 다항함수의 −2부터 2까지의 정적분 값.
  category: "대칭구간 → 기함수 항 소거 → 우함수 항 2배"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "우함수·기함수의 정적분(피적분함수가 주어진 경우)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    e6 와 같은 골조인데 상한이 2 라 5x⁴·6x²·상수항 대입 계산만 조금 무겁다(Mₖ 2).
    통찰 0 · M_total 5 · 확인체크 출발점 ★1 유지. 상수항 −1 도 우함수라 빠뜨리면 안 되는 것이 유일한 함정.
  tier: star_1
  mechanism_primary: "대칭구간 [−2,2] → 홀수차 항 0 → 2∫₀²(5x⁴+6x²−1) → 대입"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$92$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/186-372.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수와 상한을 바꿀 수 있다(상한 1·3 이면 계산이 가벼워짐). 제약은 상수항을 남겨 우함수 항으로 세도록 할 것."
    creative: "(1) 상수항을 0 으로 두면 순수 거듭제곱 계산 ★1 (2) 정적분 값을 주고 한 계수를 미지수로 두면 ★2 (3) 홀수차 항만 남겨 답이 0 임을 판단하게 하면 개념 확인 ★1."
```

```yaml
- id: GN-CALC1-186-373
  page: 186
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    f 가 우함수이고 −3부터 3까지의 적분값이 8 일 때, 0부터 3까지의 f 의 적분과 −3부터 3까지의 x·f(x) 의 적분의 합.
  category: "우함수 반구간 환원 + 곱의 기우성 판정"
  M: {s: 1, k: 1, a: 3, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "우함수 f 에 x 를 곱하면 기함수가 됨을 스스로 판정해 두 번째 정적분을 0 으로 처리"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "우함수·기함수의 정적분(곱의 기우성 판정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    앞 항은 우함수 공식을 거꾸로 써서 8 의 절반인 4, 뒤 항은 x·f(x) 가 기함수임을 판정해야 0 이 된다.
    피적분함수가 주어지지 않은 곱의 기우성 판정이라 I-SYM d1 을 인정했다.
    확인체크 출발점 ★1 에 통찰 1개·Mₐ 3 → +1 하여 ★2.
  tier: star_2
  mechanism_primary: "우함수 → ∫₀³ f 는 절반 · x·f(x) 는 기함수 → 0 → 합"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/186-373.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주어진 적분값 8 과 구간 반지름 3 은 자유. 제약은 절반값이 정수가 되도록 짝수로 둘 것."
    creative: "(1) x·f(x) 를 x³f(x) 나 (x+1)f(x) 로 바꾸면 항별 판정이 늘어 ★2~3 (2) f 를 기함수로 바꾸면 앞 항이 0 이 되는 반대 구조 ★2 (3) f 가 우함수라는 조건을 그래프로만 주면 표현 전환이 붙어 ★3."
```

```yaml
- id: GN-CALC1-187-e8
  page: 187
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["발전"]
  category_type: "발전 예제"
  summary: |
    주기가 2 인 연속함수가 −1≤x≤1 에서 −x²+2 일 때 −1부터 5까지의 정적분 값.
  category: "주기 길이로 구간 3등분 → 기본주기 적분 → 우함수 2배"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "주기함수의 정적분(기본주기 식이 주어진 경우)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    구간 길이 6 이 주기 2 의 정확히 3배이므로 3∫₋₁¹(−x²+2)dx 로 환원되고, 기본주기 적분은 다시 우함수 2배로 처리한다.
    주기 환원과 우함수 공식을 한 문항에서 잇는 것이 골조지만 둘 다 이 단원의 공식이라 같은 단원 결합으로 보고 통찰 0.
    발전 예제 출발점 ★3 · M_total 6 이라 −1 조건 미충족 → ★3 유지.
    [분류 이슈] 절차형·M_total 6 만 보면 ★2 후보 — 벤더 발전 라벨을 존중해 ★3 으로 두고 기록만 함.
  tier: star_3
  mechanism_primary: "구간 길이 6 = 주기 2 × 3 → 3∫₋₁¹ → 우함수로 2∫₀¹ → 대입"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$10$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/187-e8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주기(2)·상한(5)·기본주기 식(−x²+2)을 바꿀 수 있다. 제약은 적분구간 길이가 주기의 정수배일 것, 기본주기 식이 양 끝에서 이어져 연속일 것."
    creative: "(1) 상한을 4.5 처럼 주기의 정수배가 아니게 두면 자투리 구간 처리가 붙어 ★4 (2) 기본주기 식을 기함수로 두면 한 주기 적분이 0 이 되는 구조 ★3 (3) 주기와 우함수 조건을 함께 주면 조건 통합 통찰이 붙어 ★3~4."
```

```yaml
- id: GN-CALC1-187-374
  page: 187
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    주기가 3 인 연속함수의 1부터 4까지의 적분값이 5 일 때 1부터 10까지의 정적분 값.
  category: "구간 길이를 주기의 정수배로 세기"
  M: {s: 1, k: 1, a: 3, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "주기함수의 정적분(한 주기 적분값이 주어진 경우)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    구간 길이 9 가 주기 3 의 3배라는 것만 세면 5×3 으로 끝난다. 판정도 계산도 한 단계.
    다만 f 가 완전 추상 함수(Mₐ 3)이고 주기 환원 개념 자체가 확인체크 중에서는 무거워 ★1 출발에서 +1 하여 ★2.
  tier: star_2
  mechanism_primary: "구간 길이 9 = 주기 3 × 3 → 한 주기 적분값 5 의 3배"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$15$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/187-374.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주기(3)·한 주기 적분값(5)·상한(10)을 바꿀 수 있다. 제약은 구간 길이가 주기의 정수배여야 답이 깔끔할 것."
    creative: "(1) 상한을 주기의 정수배가 아니게 바꾸고 자투리 구간 적분값을 따로 주면 ★3 (2) 시작점을 0 으로 옮겨 주기 이동이 필요하게 하면 ★3 (3) 적분값 대신 구간별 식을 주면 계산형 ★2."
```

```yaml
- id: GN-CALC1-187-375
  page: 187
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    주기가 4 이고 한 주기에서 x² 와 −2x+8 로 나뉘어 정의된 연속함수의 0부터 16까지의 정적분 값.
  category: "주기 4등분 → 한 주기를 두 조각으로 나눠 적분"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "주기함수의 정적분(구간별 정의 함수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    구간 길이 16 이 주기 4 의 4배이므로 한 주기 적분의 4배이고, 한 주기는 [0,2] 와 [2,4] 두 조각으로 나눠 각각 적분한다.
    주기 환원도 구간 분할도 그대로 보여 통찰 0. 조각이 둘이라 계산량만 늘어 ★1 출발에서 +1 하여 ★2.
  tier: star_2
  mechanism_primary: "0~16 = 주기 4 × 4 → 한 주기를 [0,2]·[2,4] 로 분할해 적분 → 4배"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{80}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/187-375.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 조각의 식과 주기(4)·상한(16)을 바꿀 수 있다. 제약은 x=2 와 x=0·4 에서 두 조각의 값이 같아 연속·주기가 모순되지 않을 것."
    creative: "(1) 조각을 세 개로 늘리면 계산만 늘어 ★2 유지 (2) 상한을 15 로 두어 마지막 자투리 구간을 따로 처리하게 하면 ★3 (3) 조각 식에 미지수를 넣고 한 주기 적분값을 주면 역산형 ★3."
```

### 연습문제 STEP 1

```yaml
- id: GN-CALC1-188-376
  page: 188
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    f(x)=ax³+bx+3 이 x→1 에서 f(x)/(x−1) 의 극한이 1 을 만족시킬 때 0부터 1까지의 f 의 정적분 값.
  category: "극한 조건 → f(1)=0 과 f′(1)=1 → 계수 결정 → 정적분"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "분모가 0 으로 가는데 극한이 존재한다는 사실에서 f(1)=0 을, 그 극한 자체가 미분계수 정의임에서 f′(1)=1 을 두 개의 식으로 꺼냄"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "극한·미분계수 조건으로 계수를 정한 뒤 정적분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    하나의 극한 조건에서 두 개의 방정식을 뽑아내는 것이 핵심이고, 그 뒤 a, b 연립과 정적분은 표준 계산이다.
    조건을 풀이 가능한 형태로 옮기는 동치 변환이라 I-EQV d1 하나. 정적분 단원 문제지만 실질은 미분 단원 복습.
    STEP 1 출발점 ★2 에 통찰 1개는 +1 조건(2개 이상 또는 depth 3) 미달 → ★2 유지.
  mechanism_primary: "극한 존재 → f(1)=0 · 미분계수 정의 → f′(1)=1 → a, b 결정 → ∫₀¹ f"
  tier: star_2
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/188-376.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수항 3, 극한값 1, 극한을 보는 점 x=1 을 바꿀 수 있다. 제약은 연립 결과 a, b 가 정수로 떨어지고 ∫₀¹ f 가 유리수로 정리될 것."
    creative: "(1) 극한값을 0 으로 두면 f′(1)=0 이 되어 극값 조건과 이어짐 ★2 (2) f 에 x² 항을 넣어 미지수를 셋으로 늘리고 조건을 하나 더 주면 ★3 (3) 결론을 ∫₀¹ f 대신 ∫₋₁¹ f 로 바꾸면 기우함수 판정이 붙어 ★3."
```

```yaml
- id: GN-CALC1-188-377
  page: 188
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: ["수능 기출"]
  category_type: "연습문제 STEP 1"
  summary: |
    삼차함수 f 가 항등식 xf(x)−f(x)=3x⁴−3x 를 만족시킬 때 −2부터 2까지의 f 의 정적분 값. 5지선다.
  category: "항등식 인수분해 → f 복원 → 대칭구간 기우성"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "좌변을 (x−1)f(x) 로 묶고 우변을 3x(x−1)(x²+x+1) 로 인수분해해 공통인수 x−1 을 약분, f 를 복원"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "항등식에서 다항함수를 복원한 뒤 대칭구간 정적분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    좌변 묶기와 우변 인수분해로 f(x)=3x(x²+x+1) 을 얻으면, 남은 [−2,2] 적분은 홀수차 소거·짝수차 2배의 표준 절차다.
    우변에 x−1 이 인수로 들어 있음을 알아채는 한 단계만 통찰(I-EQV d1)로 인정했다.
    STEP 1 출발점 ★2, 수능 기출 태그는 통찰이 1개뿐이라 +0 → ★2.
  tier: star_2
  mechanism_primary: "(x−1)f(x)=3x(x−1)(x²+x+1) → f(x)=3x³+3x²+3x → 대칭구간에서 3x² 항만 2배"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/188-377.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 계수 3 과 적분 상한 2 는 자유. 제약은 우변이 x−1 을 인수로 가져 f 가 다항식으로 떨어질 것, 최고차수가 좌변보다 1 큰 것을 유지할 것."
    creative: "(1) 좌변을 (x+2)f(x) 로 바꾸면 인수 찾기가 덜 뻔해져 ★3 (2) f 의 차수를 명시하지 않고 최고차항 계수를 묻게 하면 ★3 (3) 적분구간을 [0,2] 로 바꾸면 기우성 도구가 빠져 단순 계산 ★2."
```

```yaml
- id: GN-CALC1-188-378
  page: 188
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    f(x)=6x²+2ax 가 0부터 1까지의 정적분이 f(1) 과 같을 때 상수 a 의 값.
  category: "정적분 계산값과 함숫값을 같다고 놓고 a 를 연립"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정적분 값과 함숫값이 같을 조건으로 상수 정하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    좌변은 2+a, 우변은 6+2a 로 각각 한 줄에 나오고 방정식 하나를 풀면 끝난다.
    정적분을 계산해서 등식에 넣는 표준 절차이고 판정할 것이 없어 통찰 0. M_total 6 이라 −1 조건 미충족.
    STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "∫₀¹ f = 2+a · f(1)=6+2a → 등식 → a"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/188-378.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 6, 2 와 비교할 함숫값의 점(x=1)을 바꿀 수 있다. 제약은 a 의 일차항이 살아남아 해가 하나로 정해질 것."
    creative: "(1) f(1) 대신 f′(1) 과 비교하면 미분 단원이 섞여 ★2~3 (2) f 를 삼차로 올리고 미지수를 둘로 하면 조건이 하나 더 필요해 ★3 (3) 등식을 만족시키는 a 가 없도록 만들어 존재 조건을 묻게 하면 ★3."
```

```yaml
- id: GN-CALC1-188-379
  page: 188
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    적분변수가 y 인 정적분과 x 인 정적분 셋을 더하고 뺀 값. 두 번째는 1/(x−1), 세 번째는 위끝과 아래끝이 뒤집힌 x²+x+1 의 적분.
  category: "적분변수 통일 → 묶어서 약분 → 구간 이어 붙여 대칭구간 만들기"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "적분변수 기호만 다를 뿐 같은 구간임을 보고 앞 두 정적분을 (y³−1)/(y−1) 로 묶어 y²+y+1 로 약분"
    - step: 2
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "세 번째 적분의 위끝·아래끝을 바꿔 부호를 뒤집으면 [−1,0] 과 [0,1] 이 이어져 대칭구간 [−1,1] 이 되고 기함수 항이 소거됨"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "여러 정적분을 묶어 약분·구간 결합하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    세 정적분을 따로 계산하면 유리함수 적분이라 막히고, 묶어서 약분하고 구간을 이어 붙여야 다항함수 대칭구간 적분으로 바뀐다.
    적분변수 무관성과 위끝·아래끝 교환이라는 두 성질을 모두 써야 해 함정이 둘(T-표기·T-부호).
    통찰 2개 → STEP 1 출발점 ★2 에서 +1 하여 ★3.
  tier: star_3
  mechanism_primary: "적분변수 통일 → (y³−1)/(y−1)=y²+y+1 로 약분 → 구간 [−1,0]∪[0,1] 결합 → 2∫₀¹(x²+1)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{8}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/188-379.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자 차수(y³)와 구간을 바꿀 수 있다. 제약은 분자와 분모가 같은 인수를 공유해 약분 뒤 다항식이 될 것, 두 구간이 한 점에서 이어져 대칭구간을 이룰 것."
    creative: "(1) 분자를 y⁴−1 로 올리면 약분 결과가 삼차식이 되어 계산만 늘고 ★3 유지 (2) 세 번째 적분의 방향을 바로 놓아 구간이 이어지지 않게 하면 대칭 도구가 빠져 ★2 (3) 약분 결과를 우함수로 만들어 두면 기우성 판정이 핵심이 되어 ★3."
```

```yaml
- id: GN-CALC1-188-380
  page: 188
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    x≤1 에서 3x²−4x+a, x>1 에서 2x+3 인 함수가 모든 실수에서 연속일 때 −1부터 3까지의 정적분 값.
  category: "연속 조건으로 a 결정 → 경계에서 구간을 나눠 적분"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구간별 정의 함수의 연속 조건과 정적분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x=1 에서 좌극한과 우극한을 같다고 놓아 a 를 정하고, 적분구간을 [−1,1] 과 [1,3] 으로 나눠 각각 계산하면 끝난다.
    두 단계 모두 교과서 표준 절차라 통찰 0. 경계값 처리가 유일한 함정(T-경계).
    STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "x=1 연속 → a 결정 → ∫₋₁¹(삼차식 도함수 꼴) + ∫₁³(2x+3)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$28$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/188-380.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 조각의 계수와 적분구간 [−1,3] 을 바꿀 수 있다. 제약은 경계 x=1 이 적분구간 내부에 있어 분할이 실제로 필요할 것."
    creative: "(1) 연속 대신 미분가능 조건을 주면 미지수가 둘이 되어 ★3 (2) 경계를 적분구간 밖으로 옮기면 분할이 사라져 ★2 아래 (3) 조각을 |x−1| 로 바꿔 쓰면 절댓값 적분형이 되어 ★3."
```

```yaml
- id: GN-CALC1-188-381
  page: 188
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 STEP 1"
  summary: |
    −3부터 2까지의 2x³+6|x| 의 정적분에서 −3부터 −2까지의 2x³−6x 의 정적분을 뺀 값.
  category: "두 적분의 피적분함수 일치를 이용해 구간 축소 → 대칭구간 기우성"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "x<0 에서 |x|=−x 이므로 빼는 적분의 피적분함수가 앞 적분의 것과 [−3,−2] 에서 똑같음을 알아채 적분구간을 [−2,2] 로 줄임"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "절댓값 포함 정적분의 구간 축소와 대칭구간 처리"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 적분을 각각 계산하면 절댓값 분할이 두 번 생겨 번거롭고, 같은 피적분함수임을 알아채 구간을 [−2,2] 로 줄이는 것이 핵심이다.
    줄이고 나면 2x³ 는 기함수로 0, 6|x| 는 우함수로 2배라 한 줄에 끝난다.
    STEP 1 출발점 ★2 에 통찰 1개(d2)와 교육청 기출 태그 +1 하여 ★3.
  tier: star_3
  mechanism_primary: "x<0 에서 6|x|=−6x → 두 적분의 겹치는 구간 상쇄 → ∫₋₂²(2x³+6|x|) → 2∫₀² 6x"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$24$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/188-381.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 2, 6 과 구간 끝(−3, −2, 2)을 바꿀 수 있다. 제약은 빼는 구간이 음수쪽에만 있어 절댓값이 한 부호로 결정될 것, 남는 구간이 대칭이 될 것."
    creative: "(1) 빼는 적분의 구간을 [1,2] 처럼 양수쪽으로 옮기면 상쇄 구조가 달라져 ★3 유지 (2) 절댓값을 |x−1| 로 바꾸면 대칭성이 깨져 분할 계산 ★3 (3) 두 적분을 더하는 형태로 바꾸면 구간 확장이 필요해 ★3."
```

```yaml
- id: GN-CALC1-189-382
  page: 189
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    우함수인 다항함수 f 의 0부터 2까지의 적분값이 1/4 일 때 −2부터 2까지의 (3x³−2x+6)f(x) 의 정적분 값.
  category: "항별로 곱의 기우성 판정 → 우함수 항만 2배"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f 가 우함수일 때 x³f 와 xf 는 기함수, 상수항×f 는 우함수임을 항별로 판정해 세 항 중 둘을 0 으로 날림"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "우함수와의 곱에서 항별 기우성 판정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    피적분함수를 전개해 항별로 나누고 각 항의 기우성을 판정하는 것이 전부다. 살아남는 것은 6f(x) 뿐이라 12×(1/4) 로 끝난다.
    곱의 기우성을 학생이 판정해야 하므로 I-SYM d2 하나. 계산은 사실상 없다.
    STEP 1 출발점 ★2 에 통찰 1개는 +1 조건 미달 → ★2 유지.
  tier: star_2
  mechanism_primary: "전개 후 항별 기우성 판정 → 3x³f·(−2x)f 는 0 → 2·6·∫₀² f"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/189-382.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "괄호 안 다항식의 계수와 ∫₀² f 값(1/4)을 바꿀 수 있다. 제약은 짝수차 항을 적어도 하나 남길 것, 최종 값이 유리수로 정리될 것."
    creative: "(1) f 를 기함수로 바꾸면 살아남는 항이 홀수차 쪽으로 뒤집혀 ★2 (2) 괄호 안을 x² 짝수차 둘로 두면 ∫₀² x²f 값이 따로 필요해 조건이 늘어 ★3 (3) f 의 우함수 조건을 그래프로만 주면 표현 전환이 붙어 ★3."
```

### 연습문제 STEP 2

```yaml
- id: GN-CALC1-189-383
  page: 189
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    최고차항 계수가 1 인 삼차함수 f 가 1부터 2까지와 1부터 3까지의 f′ 의 정적분이 모두 0 일 때 f′(2) 의 값.
  category: "도함수 정적분 → 세 점 함숫값 일치 → 삼차함수 복원 → 미분"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "세 점에서 함숫값이 같고 최고차항 계수가 1 이라는 결과 조건에서 f(x)−f(1)=(x−1)(x−2)(x−3) 이라는 식 자체를 역으로 복원"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "정적분 조건에서 삼차함수를 복원해 미분계수 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ∫f′=f(b)−f(a) 는 표준 공식이라 절차로 보고, 거기서 나온 f(1)=f(2)=f(3) 으로 함수 모양을 되짚는 단계만 통찰(I-BW d2)로 잡았다.
    복원하고 나면 f′(2) 는 곱의 미분에서 한 항만 살아남아 −1 로 바로 나온다.
    STEP 2 출발점 ★3 에 통찰 1개는 +1 조건 미달 → ★3 유지.
  tier: star_3
  mechanism_primary: "∫f′=f(b)−f(a) → f(1)=f(2)=f(3) → f(x)−f(1)=(x−1)(x−2)(x−3) → f′(2)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/189-383.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 점(1, 2, 3)과 최고차항 계수를 바꿀 수 있다. 제약은 세 점이 서로 달라야 하고 묻는 점이 그 세 점 중 하나여야 곱의 미분이 한 항으로 줄 것."
    creative: "(1) f′(2) 대신 f(4)−f(0) 을 묻으면 복원식을 그대로 쓰는 ★3 (2) 사차함수와 네 점으로 올리면 ★4 (3) 두 조건 중 하나를 0 이 아닌 값으로 주면 복원이 막혀 미정계수 연립 ★4."
```

```yaml
- id: GN-CALC1-189-384
  page: 189
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    이차함수 f 가 f(0)=1 이고 −1부터 1까지, 0부터 1까지, −1부터 0까지의 세 정적분이 모두 같을 때 f(3) 의 값.
  category: "구간 가법성으로 반쪽 적분이 0 임을 끌어냄 → 계수 결정"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "전체 구간 적분이 두 반쪽의 합인데 셋이 모두 같다는 조건을 옮겨 두 반쪽 적분이 각각 0 이라는 훨씬 강한 등식으로 바꿈"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "정적분 조건으로 이차함수의 계수 정하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    세 적분을 그대로 계산해 연립하면 식이 지저분해지고, 가법성으로 두 반쪽이 각각 0 임을 먼저 끌어내야 a, b 가 한 줄씩 나온다.
    조건의 동치 변환 한 단계(I-EQV d2)가 전부이고 나머지는 계수 비교.
    STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "가법성 + 세 값 동일 → 반쪽 적분 둘 다 0 → b=0·a 결정 → f(3)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-26$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/189-384.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f(0) 값과 구간 끝(−1, 0, 1), 묻는 점 3 을 바꿀 수 있다. 제약은 구간이 0 을 내부에 포함해 두 반쪽으로 갈릴 것, 계수가 유리수로 떨어질 것."
    creative: "(1) 세 값이 모두 같다 대신 등차를 이루게 하면 반쪽 적분이 0 이 아니게 되어 ★4 (2) 이차를 삼차로 올리면 미지수가 셋이라 조건이 하나 더 필요해 ★4 (3) f(0)=1 을 f 가 우함수라는 조건으로 바꾸면 기우성 판정형 ★3."
```

```yaml
- id: GN-CALC1-189-385
  page: 189
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    일차함수 f 가 −1부터 1까지의 xf(x) 적분이 2, x²f(x) 적분이 −2 일 때 f(−2) 의 값.
  category: "곱을 전개해 대칭구간 기우성으로 두 미지수를 분리"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f=mx+n 을 대입해 전개하면 대칭구간에서 첫 식은 m 항만, 둘째 식은 n 항만 살아남아 연립 없이 하나씩 결정됨을 활용"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "x·f(x) 꼴 정적분 조건으로 일차함수 정하기(기우성 분리)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 조건을 그냥 계산해도 풀리지만, 대칭구간에서 홀수차 항이 사라진다는 것을 알면 두 식이 서로 섞이지 않고 m 과 n 이 따로 나온다.
    곱의 기우성을 학생이 판정해 계산을 단축하는 구조라 I-SYM d2.
    STEP 2 출발점 ★3 유지 — 통찰 1개로 +1 조건 미달.
  tier: star_3
  mechanism_primary: "f=mx+n 대입 → 대칭구간에서 기함수 항 소거 → 첫 식에서 m · 둘째 식에서 n → f(−2)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-9$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/189-385.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 적분값(2, −2)과 묻는 점(−2)을 바꿀 수 있다. 제약은 구간이 [−a,a] 로 대칭일 것, m 과 n 이 유리수로 떨어질 것."
    creative: "(1) 조건을 x³f(x)·x⁴f(x) 로 올려도 같은 분리 구조 ★3 (2) f 를 이차로 올리면 미지수가 셋이라 조건이 하나 더 필요해 ★4 (3) 구간을 [0,1] 로 바꾸면 분리가 깨져 연립 계산형 ★3."
```

```yaml
- id: GN-CALC1-189-386
  page: 189
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    0≤a≤1 일 때 0부터 1까지의 x|x−a| 의 정적분 값이 최소가 되도록 하는 상수 a 의 값.
  category: "절댓값 분할 적분 → a 의 함수로 정리 → 미분해 최솟값"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "정적분 값을 수가 아니라 매개변수 a 에 대한 함수 S(a) 로 보는 관점 전환 — 이 전환 없이는 최소를 논할 대상이 없음"
    - step: 3
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "적분으로 얻은 삼차식 S(a) 의 최솟값을 미분 단원 도구(도함수 부호·극값)로 찾고 0≤a≤1 안에 있는지 확인"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "절댓값 포함 정적분을 매개변수의 함수로 보고 최솟값 찾기"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    x=a 를 경계로 두 구간에 나눠 적분하면 S(a)=a³/3 − a/2 + 1/3 이 나오고, 여기서부터는 정적분이 아니라 삼차함수 최솟값 문제다.
    적분 단원과 미분 단원을 잇는 구조(I-XU)에 관점 전환(I-RT)이 앞서 붙어 통찰 2개.
    STEP 2 출발점 ★3 에 통찰 2개 → +1 하여 ★4. 절댓값 부호와 a 의 범위 확인이 함정 둘.
  tier: star_4
  mechanism_primary: "x=a 에서 분할 적분 → S(a)=a³/3 − a/2 + 1/3 → S′(a)=0 → 0≤a≤1 안의 a"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$\dfrac{\sqrt{2}}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/189-386.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "앞에 곱한 x 를 x² 나 상수로, 적분구간 [0,1] 을 [0,c] 로 바꿀 수 있다. 제약은 a 가 적분구간 내부에 있어 분할이 실제로 생길 것, S′(a)=0 의 해가 주어진 a 범위 안에 있을 것."
    creative: "(1) 최소 대신 최댓값을 물으면 끝점 비교가 필요해 검증이 붙고 ★4 유지 (2) |x−a| 를 |x²−a| 로 바꾸면 분할점이 √a 가 되어 ★5 급 (3) a 의 범위를 넓혀 극값이 구간 밖으로 나가는 경우를 섞으면 사후 검증형 ★4."
```

```yaml
- id: GN-CALC1-189-387
  page: 189
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    우함수이면서 주기가 4 인 연속함수의 0부터 2까지의 적분값이 16 일 때 −4부터 8까지의 정적분 값.
  category: "우함수로 한 주기 적분 확보 → 주기 개수 세기"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "대칭(우함수)과 주기라는 두 독립 조건을 결합해 한 주기 [−2,2] 의 적분값을 주어진 반쪽 값 16 의 2배로 단일화"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "우함수 조건과 주기 조건을 결합한 정적분"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    주어진 것은 반주기 [0,2] 의 값뿐이라 주기만으로는 못 세고, 우함수 조건으로 한 주기 [−2,2] 값 32 를 먼저 만들어야 한다.
    두 조건을 하나의 기준값으로 묶는 단계(I-CON d2) 뒤에는 구간 길이 12 를 주기 4 로 나눠 3배 하면 끝.
    STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "우함수 → ∫₋₂² = 2×16 = 32 → 구간 길이 12 = 주기 4 × 3 → 3배"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$96$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/189-387.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주기(4)·반주기 적분값(16)·적분구간 [−4,8] 을 바꿀 수 있다. 제약은 구간 길이가 주기의 정수배일 것, 주어진 적분구간이 반주기여서 우함수 조건이 실제로 필요할 것."
    creative: "(1) f 를 기함수로 바꾸면 한 주기 적분이 0 이 되어 답이 0 인 개념형 ★3 (2) 구간 길이를 주기의 정수배가 아니게 하면 자투리 처리가 붙어 ★4 (3) 주어진 값을 [1,3] 처럼 대칭도 반주기도 아닌 구간으로 주면 환산이 막혀 ★4."
```

### 연습문제 실력 UP

```yaml
- id: GN-CALC1-190-388
  page: 190
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: ["수능 기출"]
  category_type: "연습문제 실력 UP"
  summary: |
    미분가능한 f 가 ㈎ [0,1] 에서 f(x)=x, ㈏ x≥0 에서 f(x+1)−xf(x)=ax+b 를 만족시킬 때 60×(1부터 2까지의 f 의 정적분).
  category: "함수방정식에 알려진 구간을 대입해 다음 구간의 식 복원 → 경계 매끄러움으로 상수 결정"
  M: {s: 3, k: 2, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "조건 ㈏ 에 ㈎ 의 f(x)=x 를 넣어 f(x+1)=x²+ax+b 를 얻고, x+1 을 새 변수로 보는 평행이동으로 [1,2] 에서의 f 식을 복원"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "x=1 에서 두 구간의 함숫값과 미분계수가 각각 이어져야 한다는 두 조건을 결합해 a 와 b 를 한꺼번에 확정"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "함수방정식과 미분가능 조건으로 구간의 식을 복원한 뒤 정적분"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    적분은 마지막 한 줄이고, 난이도는 전부 앞에 있다 — 알려진 구간의 f 를 조건식에 밀어 넣어 다음 구간의 식을 만들고, 이어붙는 지점의 매끄러움으로 a, b 를 정하는 흐름이다.
    미분가능(값과 기울기 둘 다)을 써야 미지수 둘이 닫히므로 조건 통합을 통찰로 잡았다.
    실력 UP 출발점 ★4, 수능 기출·통찰 2개로 유지. ★5 는 SC/VF/SYM/XU 부재와 통찰 3개 미만으로 불가.
  tier: star_4
  mechanism_primary: "㈎ 를 ㈏ 에 대입 → f(x+1)=x²+ax+b → [1,2] 식 → x=1 연속·미분가능 → a=b=1 → ∫₁² f 의 60배"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$110$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/190-388.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "[0,1] 에서의 식(f(x)=x)과 곱해지는 인수(x), 마지막 배수 60 을 바꿀 수 있다. 제약은 x=1 에서 값과 기울기가 모두 이어지도록 a, b 가 유일하게 결정될 것, 적분 결과가 배수를 곱해 정수가 될 것."
    creative: "(1) 묻는 구간을 [2,3] 으로 한 칸 더 밀면 복원을 두 번 해야 해 ★5 급 (2) 미분가능을 연속으로만 약화하면 조건이 하나 모자라 성립 조건을 논하는 문제로 바뀜 ★4 (3) ㈎ 의 식을 x² 로 바꾸면 복원식이 사차가 되어 계산만 늘고 ★4 유지."
```

```yaml
- id: GN-CALC1-190-389
  page: 190
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    f(x)=x³+ax²+(2a−3)x+1 이 극값을 갖지 않을 때 1부터 2까지의 f(x)/x 의 정적분과 2부터 1까지의 1/x 의 정적분의 합.
  category: "극값 없음 조건 → 판별식으로 a 확정 → 두 적분을 묶어 약분"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "극값을 갖지 않을 조건을 f′ 이 부호를 바꾸지 않을 조건으로 역추적해 판별식 ≤ 0 을 세우면 (a−3)²≤0 이라 a 가 한 값으로 닫힘"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "위끝·아래끝이 뒤집힌 두 번째 적분을 부호를 바꿔 첫 적분에 합치면 (f(x)−1)/x 가 되어 분모 x 가 약분되고 다항함수 적분으로 바뀜"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "극값 조건으로 상수를 정한 뒤 두 정적분을 묶어 약분하기"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    두 개의 서로 다른 관문이다 — 앞쪽은 판별식이 등호만 성립해 a 가 유일해지는 구조, 뒤쪽은 f 의 상수항 1 이 두 번째 적분과 정확히 짝을 이뤄 약분되도록 설계된 구조다.
    분모에 x 가 있어 그대로는 손댈 수 없으므로 묶어서 약분하는 착안이 필수.
    실력 UP 출발점 ★4, 통찰 2개로 유지.
  tier: star_4
  mechanism_primary: "극값 없음 → f′ 판별식 ≤0 → a=3 → f(x)=(x+1)³ → 두 적분 합쳐 ∫₁²(x²+3x+3)"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$\dfrac{59}{6}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/190-389.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항 계수 2a−3 과 상수항 1, 적분구간 [1,2] 를 바꿀 수 있다. 제약은 판별식이 완전제곱이 되어 a 가 유일할 것, f 의 상수항이 두 번째 적분의 피적분함수와 정확히 상쇄될 것."
    creative: "(1) 판별식을 부등식으로 남겨 a 의 범위가 나오게 하면 적분값도 범위로 나와 ★5 급 (2) 상수항을 2 로 두면 약분이 안 돼 골조가 깨짐 — 변형 금지 지점 (3) 극값을 갖지 않음 대신 극값을 가질 조건으로 뒤집으면 범위형 ★4."
```

```yaml
- id: GN-CALC1-190-390
  page: 190
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    연속함수 f, g 가 ㈎ f≥g, ㈏ f+g=x²+2x−1, ㈐ fg=(x²−2)(2x+1) 을 만족시킬 때 0부터 4까지의 f 의 정적분 값.
  category: "합·곱을 근과 계수 관계로 보고 두 식을 찾음 → 대소로 구간 분할 적분"
  M: {s: 3, k: 2, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f 와 g 의 합·곱 조건을 두 함수를 근으로 갖는 t 에 대한 이차방정식으로 옮기면 우변이 그대로 인수분해되어 f, g 가 x²−2 와 2x+1 임이 드러남"
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f≥g 조건이 x 의 범위에 따라 어느 식이 큰지 갈리므로 x²−2 와 2x+1 의 대소를 풀어 적분구간 [0,4] 를 경계 x=3 에서 둘로 나눠 각각 다른 식을 적분"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "합과 곱이 주어진 두 함수를 근으로 보고 대소로 구간 분할"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    조건 ㈏ ㈐ 를 근과 계수의 관계로 읽어야 두 함수의 정체가 나오고, ㈎ 는 f 를 하나의 식으로 고정하는 게 아니라 구간마다 다른 식으로 만든다는 점이 진짜 관문이다.
    두 식의 대소가 바뀌는 경계가 적분구간 안(x=3)에 있어 분할이 실제로 필요하다.
    실력 UP 출발점 ★4, 통찰 2개로 유지. 두 식 중 어느 쪽이 f 인지 구간마다 뒤집히는 것이 최대 함정.
  tier: star_4
  mechanism_primary: "합·곱 → t²−(x²+2x−1)t+(x²−2)(2x+1)=0 → {f,g}={x²−2, 2x+1} → f 는 큰 쪽 → x=3 경계로 분할 적분"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$\dfrac{67}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/190-390.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 함수(x²−2, 2x+1)의 계수와 적분구간 [0,4] 를 바꿀 수 있다. 제약은 합·곱이 실제로 두 식의 합·곱과 일치할 것, 대소가 바뀌는 경계가 적분구간 내부에 있어 분할이 생길 것."
    creative: "(1) 대소 경계를 적분구간 밖으로 밀면 분할이 사라져 ★3 (2) f≥g 대신 f(0)>g(0) 만 주면 연속성으로 구간 전체를 결정해야 해 ★5 급 (3) 두 함수를 모두 이차로 두면 대소 경계가 둘이 되어 분할이 셋 ★4."
```

```yaml
- id: GN-CALC1-190-391
  page: 190
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: ["평가원 기출"]
  category_type: "연습문제 실력 UP"
  summary: |
    [0,1] 에서 f(0)=0, f(1)=1, 0부터 1까지의 적분이 1/6 인 연속함수 f 로 만든 주기 2 의 함수 g 에 대해 −3부터 2까지의 g 의 정적분 값. 5지선다.
  category: "평행이동 치환으로 한 주기 적분값 확보 → 주기로 구간 재배치"
  M: {s: 3, k: 2, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "(−1,0) 에서의 −f(x+1)+1 의 적분을 x+1 을 새 변수로 보는 평행이동으로 ∫₀¹ f 로 되돌려, f 의 정체를 모른 채 주어진 값 1/6 만으로 계산"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "한 주기 [−1,1] 의 적분값 1 을 얻은 뒤 주기 2 를 이용해 [−3,2] 를 온전한 주기 2개와 [1,2] 로 쪼개고, [1,2] 를 다시 [−1,0] 으로 옮겨 이미 구한 값을 재사용"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "주기함수로 확장된 함수의 정적분(평행이동 치환 + 구간 재배치)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    f 는 끝까지 모르는 채로 두고 ∫₀¹ f=1/6 이라는 값 하나만 재활용하는 구조다. −f(x+1)+1 은 f 의 그래프를 점대칭 이동한 것이라 [−1,0] 적분이 1−1/6 로 나온다.
    구간 길이 5 가 주기 2 의 정수배가 아니라 자투리 [1,2] 를 [−1,0] 으로 옮겨 붙이는 재배치가 마지막 관문. f(0)=0, f(1)=1 은 g 의 연속성 보장용이라 답에는 직접 쓰이지 않는다.
    실력 UP 출발점 ★4, 평가원 기출·통찰 2개로 유지.
    [분류 이슈] 점대칭 이동을 I-SYM 으로 따로 세면 통찰 3개가 되어 ★5 후보지만 §2.14 참신도 게이트(novelty_score 0)에 걸려 ★4 로 둔다.
  tier: star_4
  mechanism_primary: "∫₋₁⁰ g = 1 − ∫₀¹ f = 5/6 → 한 주기 적분 1 → [−3,2] = 주기 2개 + [1,2]→[−1,0] → 2+5/6"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/190-391.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "∫₀¹ f 값(1/6)과 적분구간 [−3,2] 를 바꿀 수 있다. 제약은 f(0)=0, f(1)=1 과 g 의 두 조각이 x=0·x=±1 에서 이어져 g 가 연속일 것, 선택지가 기약분수로 구분될 것."
    creative: "(1) 적분구간을 주기의 정수배로 맞추면 자투리 재배치가 사라져 ★3 (2) (−1,0) 조각을 f(−x) 로 바꾸면 우함수 구조가 되어 통찰이 SYM 쪽으로 옮겨감 ★4 (3) 주기를 3 으로 늘리고 조각을 셋으로 만들면 재배치가 두 번이라 ★5 급."
```

## 표본 판정 요약 (23문)

- ★ 분포: ★1 2 · ★2 9 · ★3 7 · ★4 5 · ★5 0
- 통찰형 15 · 절차형 8 · premium 0
- 통찰 유형 분포(총 20개 라벨): I-EQV 7 · I-SYM 5 · I-RT 3 · I-BW 2 · I-CON 2 · I-MI 1 · I-XU 1 (SC·VF·PD 없음)
- M_total 분포: 4 → 1문 · 5 → 1문 · 6 → 6문 · 7 → 10문 · 8 → 2문 · 10 → 3문
- type_hint 상위: 「우함수·기함수의 정적분(기우성 판정)」 6 · 「주기함수의 정적분」 5 · 「정적분 조건으로 다항함수 복원·계수 결정」 4 · 「여러 정적분을 묶어 약분·구간 재배치」 3 · 「구간별 정의·절댓값 함수의 정적분」 3
- 그림: 0문 (이 범위 전부 `figure: none`)
- 답 출처: 본문 풀이 3문(186-e6 · 186-e7 · 187-e8) · 답지 20문. 골조를 잡는 동안 전사 답과 모순되는 조건은 발견되지 않았다.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CALC1-186-e6 | 필수 예제(★2 출발)인데 통찰 0·M_total 4 로 −1 조건에 걸려 ★1 로 내림. 벤더 신호와 1단 어긋남 | ★1 / ★2 |
| GN-CALC1-187-e8 | 발전 예제(★3 출발)이나 주기 환원·우함수 2배 모두 단원 내 공식이라 통찰 0·M_total 6 — 절차형 기준으로는 ★2 후보 | ★2 / ★3 |
| GN-CALC1-190-391 | 점대칭 이동을 I-SYM 으로 따로 세면 통찰 3개 + SYM 이라 ★5 자격이 생기지만, §2.14 참신도 게이트(novelty_score 0)에 걸려 ★4 유지 | ★4 / ★5 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형** ① 「우함수·기함수의 정적분」은 *피적분함수가 주어진 경우*(★1, 절차)와 *곱의 기우성을 판정해야 하는 경우*(★2~3, I-SYM)를 반드시 분리해야 한다. 이 범위에서 두 갈래의 체감 난이도 차가 가장 크다. ② 「주기함수의 정적분」도 *구간 길이가 주기의 정수배*(★2)와 *자투리 구간이 남아 재배치가 필요*(★4)를 분리한다 — 187-374 와 190-391 이 같은 이름 아래 ★2 와 ★4 로 갈린다.
- **통합해도 될 유형** 188-379·188-381·190-389 는 이름은 달라도 골조가 같다(여러 정적분을 묶어 약분하거나 겹치는 구간을 상쇄한 뒤 대칭·다항 적분으로 환원). 「정적분의 결합·약분」 하나로 묶고 ★2~4 를 난이도 층으로 두는 편이 낫다. 189-383·189-384 도 「정적분 조건으로 다항함수 결정」 하나로 묶을 수 있다.
- **이 단원 고유 축** 미적분Ⅰ 21단원은 적분 자체보다 *적분 대상을 어떻게 줄이느냐*(대칭·주기·약분·구간 재배치)가 난이도를 결정한다. 카탈로그를 만들 때 base ★ 를 「환원 도구의 수」로 잡으면 이 범위의 ★1~★4 가 자연스럽게 정렬된다.
