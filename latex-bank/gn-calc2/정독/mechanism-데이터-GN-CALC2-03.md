---
name: mechanism-데이터-GN-CALC2-03
description: 개념원리 미적분Ⅱ 03 수열의 극한의 대소 관계(1/1 · 24~27쪽) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 미적분Ⅱ · 전사본 latex-bank/gn-calc2
  section: 03 수열의 극한의 대소 관계
  unit_code: CALC2-03
  part: "1/1"
  extract_range: "24~27쪽 · 24-e9~27-39"
  total_problems: 20
  unit_total: 20
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·level·tag)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-calc2/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-calc2/items/<id>.tex
  image_source: latex-bank/gn-calc2/figures/ (crops.json)
---

# 개념원리 미적분Ⅱ · 03 수열의 극한의 대소 관계 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 미적분Ⅱ 03단원(24~27쪽 · 24-e9~27-39 · 20문항 전수)을 다룬다. 구역은 「필수·발전 예제」 3문(필수 예제 1 + 확인체크 2) · 「연습문제 STEP 1」 9문 · 「연습문제 STEP 2」 5문 · 「연습문제 실력 UP」 3문이다. 개념원리 고등의 난이도 신호는 구역과 level·tag 로 읽는다 — 확인체크는 개념 확인(★1 출발), 필수 예제와 STEP 1 은 ★2, STEP 2 는 ★3, 실력 UP 은 ★4 를 출발점으로 삼고 M_total·통찰 유무로 ±1 조정했다. 교육청 기출 tag 는 통찰이 실제로 늘어난 경우에만 가산했다.

이 단원은 제목과 달리 대소 관계(샌드위치 정리) 문항이 4문뿐이고, 나머지는 앞 단원의 극한의 성질·∞/∞·∞−∞ 꼴을 묶어 마무리하는 종합 연습문제다. 그래서 type_hint 가 넓게 퍼져 있다(파일 끝 「카탈로그 차원 메모」 참조).

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(유형 코드+depth+근거) · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 설정 변형과 ★ 변동 지점)를 채웠다. 이 범위에는 그림이 있는 문항이 없다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-CALC2-24-e9
  page: 24
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "예제"
  summary: |
    ⑴ 모든 자연수 n 에서 9n^2 < (n^2+1)a_n < (3n+2)^2 을 만족하는 수열의 극한.
    ⑵ sin(nθ)/(1+n^2) 의 극한 (θ 는 상수).
  category: "부등식을 목표 꼴로 정리 → 양 끝 극한 일치 → 샌드위치 정리"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "⑵ 는 sin(nθ) 자체의 극한이 없으므로 −1 ≤ sin(nθ) ≤ 1 이라는 유계 조건을 부등식으로 바꿔 샌드위치 틀에 넣어야 풀린다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "수열의 극한의 대소 관계(샌드위치 정리)로 극한 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 양변을 n^2+1 로 나누면 좌우가 모두 9 로 수렴하는 표준형. ⑵ 는 극한이 없는 삼각함수를 상수 부등식으로 가두는 착안이 핵심이다.
    필수 예제 구역 출발점 ★2 · 통찰 1개(EQV d1) · M_total 6 → ★2 유지. 이 단원의 대표 골조를 두 소문항으로 보여 주는 문항이라 변형의 기준 원본으로 쓴다.
  tier: star_2
  mechanism_primary: "부등식(또는 유계 조건)을 목표 꼴로 정리 → 좌·우 극한이 같음 확인 → 샌드위치 정리로 극한 확정"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $9$ ⑵ $0$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/24-e9.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 양 끝 계수(9n^2 · (3n+2)^2)와 곱해진 다항식(n^2+1)을 바꿀 수 있다. 제약: 좌·우를 같은 식으로 나눴을 때 두 극한이 반드시 같은 값이어야 하고(다르면 샌드위치 정리가 적용 불가), 최고차 계수 비가 정수나 간단한 분수로 떨어지게 둔다. ⑵ 는 분모 차수(1+n^2 → n^3, 2n^2+5)와 삼각함수 종류(sin↔cos)·각(nθ, 2nθ)을 바꿔도 골조가 같다."
    creative: "(1) 부등식을 a_n 이 아니라 n·a_n 이나 a_n/n 에 주고 목표식을 바꾸기(★2 유지) (2) 좌·우 극한이 서로 다르게 만들어 「이 정보만으로 극한을 정할 수 있는가」를 묻기(판단 추가 → ★3) (3) 유계 수열 b_n 을 문자로 주고 b_n·c_n 의 극한을 묻기(Mₐ 상승 · ★3) (4) 부등식을 곱 꼴 (a_n−p)(a_n−q) ≤ 0 으로 위장하면 동치 변환 한 단계가 더 붙는다(26-31 골조 · ★2~3)."
```

```yaml
- id: GN-CALC2-24-21
  page: 24
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    3n^2/(n+1) < a_n < (3n^2+2n)/(n+1) 을 만족하는 수열에서 (a_n+6n)/(n+5) 의 극한.
  category: "a_n 자체는 발산 → 목표식 전체를 부등식으로 가둠 → 샌드위치 정리"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "a_n 의 극한은 ∞ 라서 대입이 불가능하다는 것을 알아차리고, 부등식 각 변에 6n 을 더하고 n+5 로 나눠 목표식 전체를 가두는 형태로 조건을 옮긴다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "부등식으로 주어진 수열의 극한(샌드위치 정리)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a_n 의 극한을 먼저 구하려다 막히는 것이 이 문항의 함정이다. 양 끝을 목표 꼴로 옮기면 두 유리식이 모두 9 로 수렴한다(a_n/n → 3 을 쓰는 풀이도 같은 골조).
    확인체크 구역이지만 직전 예제의 그대로 적용이 아니라 변형 한 단계가 붙어 M_total 7 · 통찰 1개(EQV d2) → 확인체크 출발점 ★1 에서 +1 하여 ★2.
  tier: star_2
  mechanism_primary: "부등식 각 변에 6n 더하고 n+5 로 나눔 → 좌·우 유리식 극한이 모두 9 → 샌드위치 정리"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$9$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/24-21.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "좌·우 분자의 최고차 계수(3n^2)와 1차항(2n), 목표식의 6n·n+5 를 바꿀 수 있다. 제약: 좌·우를 목표 꼴로 옮긴 뒤 두 극한이 같아야 하므로 양 끝의 최고차 계수는 반드시 일치시키고, 차이는 한 차수 낮은 항에만 둔다."
    creative: "(1) 목표식을 a_n/n^2 이나 (a_n−3n)/n 처럼 차수를 달리 잡아 답이 달라지게 하기(★2) (2) 좌·우 최고차 계수를 다르게 주고 「극한이 존재하는가」를 묻기(판단 추가 → ★3) (3) a_n 이 아니라 부분합 S_n 에 부등식을 주고 a_n 의 극한을 묻기(수열 도구 결합 · ★3)."
```

```yaml
- id: GN-CALC2-24-22
  page: 24
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴ cos(2nθ)/n^2 의 극한. ⑵ (sin(nθ)−4n^2)/(2n^2+1) 의 극한 (θ 는 상수).
  category: "삼각함수 항은 유계 → n^2 로 나누면 0 → 나머지 유리식 극한"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수를 포함한 수열의 극한(유계 × 0)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    직전 예제 ⑵ 의 골조를 그대로 두 번 더 적용하는 문항. ⑵ 에서도 sin(nθ)/(2n^2+1) → 0 을 분리하면 남는 것은 −4n^2/(2n^2+1) 한 줄이다.
    확인체크 구역 출발점 ★1 · 통찰 없음 · M_total 5 → ★1. 유계 항을 분리하는 습관을 굳히는 반복 문항이라 변형에서는 절차형 드릴로 쓴다.
  tier: star_1
  mechanism_primary: "유계인 삼각함수 항을 분리 → 분모 차수로 0 처리 → 남은 유리식의 최고차 계수 비"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $0$ ⑵ $-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/24-22.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼각함수 종류(sin↔cos)·각의 계수(2nθ, 3nθ)·분모 차수와 계수(n^2, 2n^2+1)·분자 다항식 계수(−4n^2)를 바꿀 수 있다. 제약: 분모 차수가 분자 다항식 차수 이상이어야 극한이 유한하고, 삼각함수 항의 차수는 항상 분모보다 낮게 둔다."
    creative: "(1) 분자 다항식 차수를 분모보다 높게 만들어 발산 판정을 묻기(★2) (2) sin(nθ) 대신 (−1)^n 을 써서 같은 골조를 다른 유계 수열로 옮기기(★1 유지) (3) θ 에 조건을 붙여 sin(nθ) 가 특정 값만 갖게 하면 주기 관찰이 필요해진다(I-PD 추가 · ★3)."
```

### 연습문제 STEP 1

```yaml
- id: GN-CALC2-25-23
  page: 25
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    다섯 수열 중 발산하는 것 고르기. 5지선다.
  category: "각 선지의 수렴·발산 판정 → 진동하는 것 찾기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수열의 수렴·발산 판정"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ①②③ 은 0 또는 1 로 수렴, ④ 2+(−1)^n 만 두 값을 오가며 진동 발산, ⑤ 는 지수 2n+1 이 항상 홀수라 상수수열이다.
    선지 다섯을 모두 훑는 노동은 있으나 각 판정은 한 줄이고 통찰이 없다. STEP 1 출발점 ★2 에서 통찰 0 · M_total 4 → −1 하여 ★1. ⑤ 의 지수 함정은 Mₜ(T-표기) 로 처리했다.
  tier: star_1
  mechanism_primary: "선지별로 일반항의 꼴을 보고 수렴(0·상수)·진동을 판정 → 진동하는 것 선택"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '④'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/25-23.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 선지의 분모 계수(2n−1, n+1)·공비(1/2)·상수항(2)·지수식(2n+1)을 바꿀 수 있다. 제약: 발산하는 선지는 정확히 하나여야 하고, (−1) 의 지수는 홀짝이 실제로 갈리는지 매번 확인한다(2n+1 은 항상 홀수라 수렴)."
    creative: "(1) 「수렴하는 것은?」으로 뒤집어 오답 선지를 발산으로 채우기(★1 유지) (2) 공비를 |r| > 1 로 바꿔 발산 유형을 진동이 아닌 양의 무한대로 섞기(★2) (3) ㄱㄴㄷ 보기형으로 바꿔 두 개 이상 고르게 하면 판정 전수 부담이 커진다(★2)."
```

```yaml
- id: GN-CALC2-25-24
  page: 25
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    a_n = 2 + 12/n^2, b_n = 1 − 1/(n(n^2+1)) 일 때 (a_n^2 + b_n^2)/(2 a_n b_n) 의 극한.
  category: "각 수열의 극한 → 극한의 사칙 성질로 대입"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수렴하는 수열의 극한의 사칙 성질"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    a_n → 2, b_n → 1 을 각각 읽은 뒤 분모가 0 이 아님을 확인하고 그대로 대입하면 끝난다. 식이 길어 보일 뿐 변형 단계가 없다.
    STEP 1 출발점 ★2 에서 통찰 0 · M_total 4 → −1 하여 ★1. 극한의 사칙 성질이 곱·합·나눗셈에 모두 쓰인다는 것만 확인하는 문항이다.
  tier: star_1
  mechanism_primary: "a_n → 2, b_n → 1 확인 → 분모 2a_n b_n 의 극한이 0 이 아님 확인 → 사칙 성질로 대입"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{5}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/25-24.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a_n·b_n 의 극한값(2, 1)과 0 으로 가는 꼬리항(12/n^2, 1/(n(n^2+1)))의 계수·차수를 바꿀 수 있다. 제약: 분모의 극한이 0 이 되지 않게 두 극한값을 고르고, 최종 답이 간단한 분수로 떨어지도록 (α^2+β^2)/(2αβ) 를 미리 확인한다."
    creative: "(1) 목표식을 (a_n − b_n)/(a_n + b_n) 처럼 바꿔 같은 대입 골조 유지(★1) (2) b_n 의 극한을 1 이 아니라 a_n 과 같게 만들어 분모가 0 이 되게 하면 부정형 처리가 필요해진다(★3) (3) a_n 의 극한을 문자 α 로 주고 목표식의 값이 최소가 되는 α 를 묻기(산술·기하 평균 결합 · ★3)."
```

```yaml
- id: GN-CALC2-25-25
  page: 25
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    다섯 개의 극한 중 값이 나머지 넷과 다른 하나 고르기. 5지선다.
  category: "선지별 ∞/∞ 꼴·곱 꼴 극한 계산 → 값 비교"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∞/∞ 꼴 유리식 수열의 극한"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    네 개는 −3, ③ 만 3 이다. ①② 는 사칙 성질, ③④⑤ 는 최고차 계수 비로 각각 한 줄이지만 다섯 개를 모두 계산해야 해서 계산량이 쌓인다.
    통찰은 없고 반복 계산이므로 STEP 1 출발점 ★2 유지(M_total 6 으로 −1 조건에 걸리지 않음). ⑤ 처럼 전개 전 최고차 계수를 읽는 습관이 속도를 가른다.
  tier: star_2
  mechanism_primary: "선지별로 최고차 계수 비(또는 사칙 성질)로 극한 계산 → 다른 값 하나 선택"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '③'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/25-25.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공통 극한값(−3)과 각 선지의 계수·인수 배치를 바꿀 수 있다. 제약: 다른 하나는 반드시 한 개여야 하고, 나머지 넷은 서로 다른 형태(상수+0 꼴 · 곱 꼴 · 1차/1차 · 2차/2차 · 인수 곱 꼴)로 두어 계산 경로가 겹치지 않게 한다."
    creative: "(1) 정답 선지를 발산하는 식으로 바꿔 「극한값이 존재하지 않는 것」을 묻기(★2) (2) 선지에 무리식 ∞−∞ 꼴을 섞어 유리화 단계를 추가(★3) (3) 다섯 극한값의 합을 묻는 주관식으로 바꾸면 전수 계산이 강제된다(Mₖ 상승 · ★2)."
```

```yaml
- id: GN-CALC2-25-26
  page: 25
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    로그와 극한을 교환할 수 있다는 사실이 주어졌을 때 log₂(2n−1) + log₂(8n+1) − 2log₂(n+1) 의 극한.
  category: "로그의 성질로 한 개의 로그로 합침 → 진수의 극한 → 로그 값"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "세 항이 각각 ∞ 로 발산해 항별 극한이 ∞−∞ 부정형이므로, 로그의 합·차 성질로 하나의 로그로 묶어 진수의 극한 문제로 바꿔야 한다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "로그를 포함한 수열의 극한(∞−∞ 꼴)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    묶으면 진수가 (2n−1)(8n+1)/(n+1)^2 이고 최고차 계수 비가 16 이라 log₂16 이 답이다. 발문이 로그와 극한의 교환을 명시해 주어 통찰의 문턱을 낮춰 두었다.
    STEP 1 출발점 ★2 · 통찰 1개(EQV d1) · M_total 6 → ★2 유지. ∞−∞ 를 알아보는 것이 이 문항의 유일한 분기점이다.
  tier: star_2
  mechanism_primary: "로그 합·차를 하나의 로그로 묶음 → 진수의 ∞/∞ 극한이 16 → log₂16"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/25-26.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(2)·각 진수의 계수(2n−1, 8n+1, n+1)·마지막 항의 계수 2 를 바꿀 수 있다. 제약: 묶었을 때 분자·분모 차수가 같아야 유한 극한이 되고, 최고차 계수 비가 밑의 거듭제곱이 되도록 골라야 답이 정수로 떨어진다."
    creative: "(1) 밑을 1/2 처럼 1 보다 작게 두어 부호가 뒤집히게 하기(★2 · T-부호 추가) (2) 진수 차수를 다르게 만들어 −∞ 로 발산하는지 묻기(판단 추가 · ★3) (3) 로그 대신 지수 꼴 (2^{a_n}) 로 감싸 극한과 지수의 교환을 묻기(I-RT 추가 · ★3)."
```

```yaml
- id: GN-CALC2-25-27
  page: 25
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    첫째항 −2, 공차 3 인 등차수열의 첫째항부터 제n항까지의 합을 n^2 으로 나눈 값의 극한.
  category: "등차수열의 합 공식 → n 에 대한 2차식 → 최고차 계수 비"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등차수열의 합의 극한"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    합 공식으로 S_n 을 n 의 2차식으로 만든 뒤 n^2 으로 나누면 최고차 계수 d/2 = 3/2 가 남는다. 공식을 정확히 불러오는 것 외에 분기가 없다.
    STEP 1 출발점 ★2 유지. 통찰 0 이지만 M_total 5 이고 다른 단원의 공식(등차수열의 합)을 정확히 호출·전개해야 해서 −1 은 적용하지 않았다(−1 은 M_total 4 이하에만 적용).
  tier: star_2
  mechanism_primary: "S_n = n{2a₁+(n−1)d}/2 로 2차식 전개 → n^2 으로 나눔 → 최고차 계수 d/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{3}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/25-27.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫째항(−2)·공차(3)·분모 차수(n^2)를 바꿀 수 있다. 제약: 분모를 n^2 으로 두면 답은 항상 d/2 이므로 첫째항을 바꿔도 답이 변하지 않는다 — 첫째항이 답에 영향을 주게 하려면 분모를 n 이나 n^2+kn 꼴로 바꾸거나 S_n 대신 S_n − a_n 류를 써야 한다."
    creative: "(1) 등차 대신 등비수열의 합으로 바꿔 공비에 따른 수렴·발산을 묻기(★3) (2) 첫째항·공차를 미지수로 두고 극한값 조건에서 역추적(I-BW 추가 · ★3) (3) 분모를 a_n·n 으로 두어 합과 일반항을 함께 쓰게 하기(★3)."
```

```yaml
- id: GN-CALC2-25-28
  page: 25
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    a(n+1)^2/(bn^3+3n^2−1) 의 극한이 −2 일 때 상수 a, b 에 대한 b−a 의 값.
  category: "0 이 아닌 유한 극한 → 분자·분모 차수 일치 조건 → 계수 결정"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "극한값이 0 이 아닌 유한값이라는 결과 조건에서 먼저 분모의 차수를 분자와 같게 만드는 b = 0 을 역추적해야 계수 계산이 가능하다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "극한값이 주어질 때 미정계수 결정(∞/∞ 꼴)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    b ≠ 0 이면 분모가 3차라 극한이 0 이 되어 −2 와 모순이다. b = 0 을 먼저 확정하면 분자·분모가 모두 2차가 되어 a/3 = −2 에서 a 가 나온다.
    STEP 1 출발점 ★2 · 통찰 1개(BW d1 · 차수 역추적은 이 단원 표준이라 d1) · M_total 6 → ★2 유지. b = 0 경우를 빠뜨리는 것이 주된 실점 지점이라 Mₜ 에 T-범위 1개를 반영했다.
  tier: star_2
  mechanism_primary: "유한·0 아닌 극한 → 분자·분모 차수 일치 → b = 0 확정 → 최고차 계수 비 a/3 = −2 → a"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/25-28.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "극한값(−2)·분자 꼴(a(n+1)^2)·분모의 고정 항(3n^2−1)과 미지 계수가 붙은 항의 차수(bn^3)를 바꿀 수 있다. 제약: 미지 계수를 0 으로 몰아야만 차수가 맞아떨어지도록 배치하고, 남는 최고차 계수 비가 주어진 극한값과 같아지는 a 가 정수나 간단한 분수가 되게 한다."
    creative: "(1) 미지 계수를 분자 쪽 최고차항에 두어 반대로 역추적하게 하기(★2 유지) (2) 극한값을 0 으로 주어 「차수가 달라야 한다」는 반대 조건을 쓰게 하기(★2) (3) 무리식 ∞−∞ 꼴로 바꾸면 유리화가 한 단계 붙는다(27-35 골조 · ★3) (4) a, b 를 자연수로 제한하고 조건을 만족하는 순서쌍의 개수를 묻기(I-VF 추가 · ★4)."
```

```yaml
- id: GN-CALC2-26-29
  page: 26
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    이차방정식 x^2 − x + n − √(n^2+n) = 0 의 두 근을 α_n, β_n 이라 할 때 1/α_n + 1/β_n 의 극한.
  category: "근과 계수의 관계 → 1/α+1/β = (α+β)/(αβ) → 무리식 유리화 → 극한"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "근을 직접 구하지 않고 이차방정식의 근과 계수의 관계로 α+β, αβ 를 읽어 수열의 극한 문제로 옮긴다 — 방정식 도구를 빼면 풀이가 끊긴다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "이차방정식의 근과 계수의 관계를 이용한 수열의 극한"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    α+β = 1, αβ = n − √(n^2+n) 이므로 목표식은 1/(n − √(n^2+n)) 이고, 분모를 유리화하면 −n/(n+√(n^2+n)) → −1/2 에서 답이 나온다.
    [분류 이슈] 도구가 둘(근과 계수 + ∞−∞ 유리화)이고 M_total 7 로 STEP 1 중 상단이지만, 통찰 1개 d1 이라 규칙상 +1 조건(통찰 2개 이상 또는 depth 3)에 못 미쳐 ★2 로 두고 ★3 후보로 기록만 한다.
  tier: star_2
  mechanism_primary: "근과 계수의 관계로 α+β=1, αβ 를 읽음 → 1/α+1/β = (α+β)/(αβ) → 분모 유리화 → 극한"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/26-29.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항 계수(−x)와 상수항의 무리식(n − √(n^2+n))의 계수·근호 안 다항식을 바꿀 수 있다. 제약: 두 근이 실수일 필요는 없지만 근과 계수 관계가 쓰이려면 계수가 n 의 식이어야 하고, 유리화 뒤 분모의 최고차가 살아남아 유한 극한이 되도록 근호 안을 (an+b)^2 에 가까운 꼴로 둔다."
    creative: "(1) 목표식을 α_n^2 + β_n^2 이나 α_n/β_n + β_n/α_n 으로 바꾸기(같은 골조 · ★2~3) (2) 두 근의 차 |α_n − β_n| 의 극한을 묻기(판별식 도입 · ★3) (3) 상수항을 그대로 두고 일차항 계수를 n 의 식으로 바꿔 α+β 도 극한 대상이 되게 하기(★3)."
```

```yaml
- id: GN-CALC2-26-30
  page: 26
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    (−3a_n+1)/(5a_n−4) 의 극한이 −1 일 때 (a_n+1)/(a_n−1) 의 극한.
  category: "주어진 극한식을 a_n 에 대해 역으로 풀어 a_n 의 극한 확보 → 목표식에 대입"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "a_n 의 극한이 직접 주어지지 않으므로, 주어진 식을 b_n 으로 놓고 a_n 을 b_n 의 식으로 역으로 푼 뒤 b_n → −1 을 대입해 a_n 의 극한을 얻는다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "극한값이 주어진 식에서 원래 수열의 극한 역추적"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a_n 을 모른다고 막히는 것이 이 문항의 분기점이다. 역으로 풀면 a_n = (4b_n+1)/(5b_n+3) 이고 b_n → −1 에서 a_n → 3/2, 목표식에 넣으면 값이 나온다.
    STEP 1 출발점 ★2 · 통찰 1개(BW d2) · M_total 7 → ★2 유지. depth 3 도 통찰 2개도 아니라 +1 조건 미달이며, 역추적 골조 자체는 이 단원의 표준 훈련이다.
  tier: star_2
  mechanism_primary: "주어진 식을 b_n 으로 두고 a_n 을 b_n 으로 역산 → b_n → −1 대입 → a_n 의 극한 → 목표식 대입"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/26-30.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주어진 식의 네 계수(−3, 1, 5, −4)·주어진 극한값(−1)·목표식의 계수(1, 1, −1)를 바꿀 수 있다. 제약: 역산했을 때 a_n 의 극한이 목표식의 분모를 0 으로 만들지 않아야 하고, 주어진 극한값이 −3/5(수평점근선 값)와 달라야 a_n 이 유한값으로 정해진다."
    creative: "(1) 주어진 극한값을 −3/5 로 주어 a_n 이 발산하는 경우를 판단하게 하기(★3 · 27-39 골조와 연결) (2) 목표식을 a_n^2 꼴로 올려 부호 판정을 추가(★3) (3) 주어진 식과 목표식을 모두 문자 계수로 두고 관계식을 유도하게 하기(Mₐ 3 · ★4)."
```

```yaml
- id: GN-CALC2-26-31
  page: 26
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    모든 자연수 n 에서 (a_n − 2n^2 − n)(a_n − 2n^2 − 3n) ≤ 0 을 만족하는 수열에 대하여 n^2/a_n 의 극한.
  category: "곱이 0 이하 → 두 값 사이라는 부등식으로 동치 변환 → 샌드위치 정리"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 일차식의 곱이 0 이하라는 조건을 2n^2+n ≤ a_n ≤ 2n^2+3n 이라는 구간 조건으로 바꿔야 샌드위치 정리를 쓸 수 있다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "부등식으로 주어진 수열의 극한(샌드위치 정리)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    조건을 구간으로 옮기면 목표식 n^2/a_n 의 양 끝이 모두 1/2 로 수렴한다(역수를 취할 때 부등호 방향이 뒤집히는 것만 주의).
    STEP 1 출발점 ★2 · 통찰 1개(EQV d2) · M_total 6 → ★2 유지. 곱 꼴로 위장한 샌드위치 문항이라 24-e9 의 변형 원본으로 함께 묶어 쓴다.
  tier: star_2
  mechanism_primary: "곱 ≤ 0 을 2n^2+n ≤ a_n ≤ 2n^2+3n 으로 변환 → n^2/a_n 의 양 끝 극한이 모두 1/2 → 샌드위치 정리"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/26-31.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 인수의 주된 항(2n^2)과 차이를 만드는 항(n, 3n)·목표식의 분자(n^2)를 바꿀 수 있다. 제약: 두 인수의 최고차항이 같아야 양 끝 극한이 일치하고, a_n 이 양수로 유지되어야 역수를 취할 때 부등호 방향 처리가 한 번으로 끝난다."
    creative: "(1) 부등호를 ≥ 0 으로 뒤집어 a_n 이 구간 밖에 있게 만들고 극한이 정해지지 않음을 판단하게 하기(★3) (2) 목표식을 (a_n − 2n^2)/n 으로 바꿔 답이 구간으로만 나오는지 묻기(★3) (3) 인수를 세 개로 늘려 부호 분기를 만들면 I-MI 가 추가된다(★3~4)."
```

### 연습문제 STEP 2

```yaml
- id: GN-CALC2-26-32
  page: 26
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제"
  summary: |
    a_{n+1} − a_n = a_1 + 2 를 만족하는 수열에서 (2a_n + n)/(a_n − n + 1) 의 극한이 3 일 때 a_10 의 값 (a_1 > 0). 5지선다.
  category: "계차가 상수 → 등차수열 · 공차 = a_1+2 → 극한 조건으로 공차 결정 → 항 계산"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "a_{n+1} − a_n 이 n 에 무관한 상수라는 조건을 「공차가 a_1+2 인 등차수열」로 읽어야 a_n 을 n 의 일차식으로 쓸 수 있다"
    - step: 3
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "극한값 3 이라는 결과 조건에서 a_n/n → d 임을 이용해 공차 d 를 역추적하고, 거기서 다시 a_1 을 얻는다"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "등차수열 조건 + 극한값으로 항 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    a_n 을 n 의 일차식으로 쓰면 극한은 (2d+1)/(d−1) 이고 이것이 3 이라는 식에서 공차가 정해진다. 공차가 a_1 + 2 라는 자기참조 구조가 a_1 을 주고 a_10 이 나온다.
    STEP 2 출발점 ★3 유지. 통찰 2개지만 둘 다 이 단원에서 반복 훈련되는 d2 이고 계산이 가벼워 +1 은 적용하지 않았다. a_1 > 0 조건은 답 선택이 아니라 검산용이라 I-VF 로 세지 않았다.
  tier: star_3
  mechanism_primary: "계차 상수 → 등차수열(공차 a_1+2) → a_n/n → d → 극한식 (2d+1)/(d−1) = 3 으로 d 결정 → a_1 → a_10"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '④'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/26-32.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계차 조건의 상수항(+2)·극한식의 계수(2, 1, 1, −1, +1)·주어진 극한값(3)·묻는 항 번호(10)를 바꿀 수 있다. 제약: 극한식에서 얻는 d 가 분모를 0 으로 만들지 않아야 하고(d ≠ 1), a_1 = d − 2 가 양수 조건을 만족해야 하며, 선지 다섯 개가 연속 정수로 깔리도록 a_10 을 정수로 맞춘다."
    creative: "(1) 계차를 a_1 + 2 대신 a_2 − 1 처럼 다른 항으로 자기참조시키기(★3 유지) (2) 등차 대신 계차가 등차인 수열로 바꿔 a_n 이 2차식이 되게 하고 분모 차수를 맞추기(★4) (3) a_1 > 0 을 빼고 가능한 a_10 을 모두 구하게 하면 부호 분기 검증이 생긴다(I-VF 추가 · ★4)."
```

```yaml
- id: GN-CALC2-26-33
  page: 26
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    (1×2)/1^3, (1×2+2×3)/2^3, (1×2+2×3+3×4)/3^3, … 으로 나열된 수열의 극한.
  category: "나열에서 일반항 발견 → ∑ 공식으로 분자 정리 → 최고차 계수 비"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-PD
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "세 항만 나열된 상태에서 제n항이 ∑ k(k+1) / n^3 임을 스스로 읽어내야 한다 — 분자의 항 수와 분모의 밑이 함께 n 으로 움직인다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "∑ 공식으로 일반항을 정리한 수열의 극한"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    일반항을 잡으면 분자는 ∑k^2 + ∑k 로 3차식이 되고 분모 n^3 과 차수가 같아 최고차 계수 비만 남는다.
    STEP 2 출발점 ★3 유지 · 통찰 1개(PD d2) · M_total 6. 규칙 발견이 유일한 문턱이고 그 뒤는 공식 전개라 +1 은 하지 않았다.
  tier: star_3
  mechanism_primary: "제n항 = ∑ k(k+1) / n^3 로 일반항 확정 → ∑k^2+∑k 로 3차식 전개 → 최고차 계수 비 1/3"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{1}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/26-33.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자의 곱 꼴(k(k+1) → k(k+2), k(2k−1))과 분모의 차수(n^3)를 바꿀 수 있다. 제약: ∑ 를 전개한 분자의 차수가 분모와 같아야 유한 극한이 되고(분자 곱이 2차면 분모는 n^3), 최고차 계수 비가 간단한 분수로 떨어지게 계수를 고른다."
    creative: "(1) 분모를 n^4 나 n^2 으로 어긋나게 두어 0 또는 발산 판정을 묻기(★3) (2) 분자를 ∑ 1/(k(k+1)) 처럼 부분분수로 바꿔 망원합을 쓰게 하기(I-RT 추가 · ★4) (3) 나열을 네 항까지 주되 규칙을 살짝 틀어 놓고 일반항을 묻는 서술형으로(★4)."
```

```yaml
- id: GN-CALC2-26-34
  page: 26
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    √(9n^2+11n+3) 의 정수 부분을 a_n, 소수 부분을 b_n 이라 할 때 a_n/n 의 극한과 b_n 의 극한의 합.
  category: "제곱 비교로 정수 부분 확정 → 소수 부분은 무리식의 차 → 유리화 → 두 극한의 합"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "정수 부분을 구하려면 근호를 벗기는 대신 (3n+1)^2 < 9n^2+11n+3 < (3n+2)^2 이라는 제곱 부등식으로 조건을 옮겨 a_n = 3n+1 을 확정해야 한다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "무리수의 정수 부분·소수 부분과 극한"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    정수 부분을 3n+1 로 확정하면 a_n/n → 3 이고, 소수 부분은 √(9n^2+11n+3) − (3n+1) 을 유리화해 5/6 으로 간다.
    [분류 이슈] M_total 9 는 이 범위에서 실력 UP 문항들과 같은 수준이지만 통찰은 EQV 1개라 STEP 2 출발점 ★3 을 유지했다(★4 로 올리면 §2.13 저노출 유형 부재로 YELLOW). ★4 후보로 기록만 한다.
  tier: star_3
  mechanism_primary: "(3n+1)^2 < 근호 안 < (3n+2)^2 로 a_n = 3n+1 확정 → b_n = 근호 − (3n+1) 유리화 → 3 + 5/6"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{23}{6}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/26-34.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안 이차식의 계수(9, 11, 3)를 바꿀 수 있다. 제약: 최고차 계수는 완전제곱수여야 하고(그래야 정수 부분이 일차식), 모든 자연수 n 에서 (3n+k)^2 < 9n^2+11n+3 < (3n+k+1)^2 이 유지되도록 1차항 계수를 골라야 한다 — 경계에서 부등식이 깨지면 정수 부분이 n 에 따라 달라져 문항이 무너진다."
    creative: "(1) 소수 부분만 묻거나 a_n·b_n 의 극한을 묻기(같은 골조 · ★3) (2) 세제곱근으로 바꿔 세제곱 부등식으로 가두게 하기(★4) (3) 1차항 계수를 문자로 두고 lim b_n 이 주어질 때 그 값을 역추적(I-BW 추가 · ★4) (4) a_n 을 수열로 다시 써서 ∑ 1/a_n 의 극한을 묻기(★4)."
```

```yaml
- id: GN-CALC2-27-35
  page: 27
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    √(n(n+4)) − an + b 의 극한이 4 일 때 상수 a, b 에 대한 a+b 의 값.
  category: "유한 극한 조건으로 최고차 계수 a 결정 → 유리화 → 남은 상수로 b 결정"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "극한이 유한하다는 결과 조건에서 무리식의 최고차 거동 n 과 an 이 상쇄되어야 함을 먼저 읽어 a = 1 을 역추적해야 유리화 단계로 넘어갈 수 있다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "∞−∞ 꼴 무리식의 극한과 미정계수 결정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    a ≠ 1 이면 식이 ±∞ 로 발산하므로 a = 1 이 강제되고, 그 뒤 √(n^2+4n) − n 을 유리화하면 2 로 수렴해 b 가 정해진다.
    STEP 2 출발점 ★3 유지 · 통찰 1개(BW d2) · M_total 7. 25-28 의 차수 역추적을 무리식으로 옮긴 문항으로, 두 단계(계수 역추적 → 유리화)가 순서대로 맞물리는 것이 특징이다.
  tier: star_3
  mechanism_primary: "유한 극한 → 최고차 상쇄로 a = 1 → √(n^2+4n) − n 유리화 → 2 + b = 4 → b"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/27-35.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안 이차식(n(n+4))의 계수와 주어진 극한값(4)을 바꿀 수 있다. 제약: 근호 안 최고차 계수의 제곱근이 a 가 되므로 완전제곱수로 두고, 유리화 뒤 남는 상수(1차항 계수의 절반 나누기 a)와 b 의 합이 주어진 극한값과 맞아 a+b 가 정수로 떨어지게 한다."
    creative: "(1) a 를 음수로 만들어 상쇄가 일어나지 않게 하고 발산 판정을 묻기(★3) (2) 근호를 두 개 두어 √(n^2+pn) − √(n^2+qn) 꼴로 바꾸기(★3) (3) a, b 가 자연수라는 조건에서 가능한 극한값을 모두 구하게 하기(I-VF 추가 · ★4)."
```

```yaml
- id: GN-CALC2-27-36
  page: 27
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    두 수열의 극한에 관한 보기 ㄱ(∞−∞), ㄴ(∞×0), ㄷ(차가 0 이고 한쪽이 수렴) 중 옳은 것 모두 고르기.
  category: "부정형 두 개는 반례 설계로 기각 → 참인 명제는 극한의 성질을 쓸 수 있는 꼴로 분해해 증명"
  M: {s: 2, k: 1, a: 3, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "ㄱ·ㄴ 은 계산으로 보일 수 없고 결론을 깨는 반례 수열을 직접 설계해야 기각된다(∞−∞ 와 ∞×0 이 부정형임을 아는 것이 출발)"
    - step: 3
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "ㄷ 은 b_n 을 a_n − (a_n − b_n) 으로 분해해야 수렴하는 두 수열의 차로 바뀌어 극한의 성질을 적용할 수 있다"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "수열의 극한에 대한 명제의 참·거짓(보기형)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ㄱ 은 a_n = n, b_n = 2n 류, ㄴ 은 a_n = n, b_n = 1/n 류 반례로 무너지고, ㄷ 만 분해로 증명된다. 계산은 거의 없고 일반 수열을 다루는 추상도가 난이도의 전부라 Mₐ 3 을 주었다.
    STEP 2 출발점 ★3 유지. 통찰 2개지만 두 부정형 반례는 이 단원에서 반드시 다루는 표준 예시라 학습 자산으로 흡수된 것으로 보고 +1 을 적용하지 않았다.
  tier: star_3
  mechanism_primary: "ㄱ·ㄴ 은 부정형이므로 반례 수열 설계로 기각 → ㄷ 은 b_n = a_n − (a_n − b_n) 분해로 극한의 성질 적용"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: 'ㄷ'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/27-36.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이 문항에는 바꿀 수치가 없다 — 변형은 명제의 가정·결론 조합을 바꾸는 것으로만 한다(예: ㄴ 의 결론을 0 대신 ∞ 로, ㄷ 의 가정을 lim b_n = β 로). 제약: 참인 보기가 최소 하나는 있어야 하고, 부정형 보기는 반례가 교과 범위 안의 간단한 수열로 만들어져야 한다."
    creative: "(1) 참·거짓을 뒤집어 「옳지 않은 것」을 묻기(★3 유지) (2) 보기에 a_n b_n 이 수렴할 조건을 하나 넣어 참인 명제를 늘리기(★3) (3) 각 보기에 반례를 직접 제시하게 하는 서술형으로 바꾸면 설계 부담이 커진다(★4) (4) 수열 대신 함수의 극한으로 옮기면 같은 골조로 다른 단원 문항이 된다(I-XU · ★4)."
```

### 연습문제 실력 UP

```yaml
- id: GN-CALC2-27-37
  page: 27
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    1×(2n−1) + 2×(2n−3) + 3×(2n−5) + … + (n−1)×3 + n×1 을 n^3 으로 나눈 값의 극한.
  category: "두 인수가 서로 반대로 진행하는 합의 일반항 발견 → ∑ 전개 → 최고차 계수 비"
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-PD
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "앞 인수는 1, 2, 3, … 으로 커지고 뒤 인수는 2n−1, 2n−3, … 으로 줄어드는 나열에서 제k항이 k(2n−2k+1) 임을 스스로 잡아야 ∑ 로 넘어갈 수 있다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "∑ 공식으로 일반항을 정리한 수열의 극한"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    일반항을 잡으면 ∑(2nk − 2k^2 + k) 로 갈라져 n^3 항이 n^3 − 2n^3/3 만 남는다. n 이 합의 상한이면서 동시에 항 안의 계수로도 들어가 있어 ∑ 와 상수의 구분에서 실수가 나온다.
    실력 UP 출발점 ★4 유지 · 통찰 1개(PD d2) · M_total 9(Mₖ 3). §2.13 기준으로 ★4 에 저노출 유형 I-PD 가 있어 게이트를 통과한다.
  tier: star_4
  mechanism_primary: "제k항 = k(2n−2k+1) 발견 → ∑ 를 2n∑k − 2∑k^2 + ∑k 로 전개 → n^3 계수 1/3"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$\dfrac{1}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/27-37.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "뒤 인수의 시작값과 감소 폭(2n−1 에서 2 씩 감소), 분모 차수(n^3)를 바꿀 수 있다. 제약: 뒤 인수가 마지막 항에서 양수로 끝나도록(n×1) 시작값과 감소 폭을 맞추고, ∑ 전개 뒤 분자의 차수가 분모와 같아야 유한 극한이 된다."
    creative: "(1) 앞뒤 인수를 모두 증가시켜 ∑k(k+c) 꼴로 낮추기(★3 · 26-33 골조) (2) 곱 대신 나눗셈 꼴 ∑ k/(2n−2k+1) 로 바꾸면 구분구적 감각이 필요해진다(★5 후보) (3) 합의 항 수를 2n 으로 늘리고 분모를 그대로 두어 차수 감각을 묻기(★4) (4) 일반항을 제시하지 않고 합의 값을 n 의 식으로 먼저 구하게 하는 서술형(★4)."
```

```yaml
- id: GN-CALC2-27-38
  page: 27
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제"
  summary: |
    원점에서 출발해 홀수 번째는 x축으로 a, 짝수 번째는 y축으로 a+1 만큼 옮겨 가며 정해지는 점 A_n 에 대하여, 선분 A_1A_{2n} 의 길이를 n 으로 나눈 값의 극한이 √34/2 일 때 양수 a. 5지선다.
  category: "이동 규칙 → A_{2n} 의 좌표를 n 의 식으로 → 거리/n 의 극한 → a 에 대한 이차방정식"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "평행이동 규칙(기하)을 A_{2n} = (na, (n−1)(a+1)) 이라는 좌표식(대수)으로 옮겨야 거리와 극한을 계산할 수 있다"
    - step: 4
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "극한값 √34/2 라는 결과 조건에서 a^2 + (a+1)^2 = 17/2 를 세워 a 를 역추적한다"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "점의 이동 규칙과 선분 길이의 극한"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    A_{2n} 까지 이동이 2n−1 번이므로 x 이동이 n 번, y 이동이 n−1 번으로 개수가 하나 어긋나는 것이 핵심 함정이다(그래도 /n 극한에서는 계수만 남는다).
    실력 UP 출발점 ★4 유지 · 통찰 2개(RT d2 · BW d2) · M_total 9. ★5 로 올리려면 §2.13 상 SC·VF·SYM·XU 중 하나가 필요한데 없으므로 ★4 에서 멈춘다. a > 0 조건은 음근 기각용 부호 처리라 Mₜ 로 넣고 I-VF 로 세지 않았다.
  tier: star_4
  mechanism_primary: "이동 횟수 세기(x n번 · y n−1번) → A_{2n} = (na, (n−1)(a+1)) → 거리/n → √(a^2+(a+1)^2) = √34/2 → a"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '①'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/27-38.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이동량(a 와 a+1)의 관계·주어진 극한값(√34/2)·묻는 점의 번호(A_{2n})를 바꿀 수 있다. 제약: 극한식에서 나오는 이차방정식이 유리수 근을 가져야 하고(판별식이 완전제곱), 양수 근이 정확히 하나여야 하며, 선지 다섯 개가 같은 간격의 분수로 깔리게 답을 고른다."
    creative: "(1) A_{2n+1} 이나 A_n 일반으로 바꿔 홀짝 분기를 강제하기(I-MI 추가 · ★4~5) (2) 이동 방향을 x, y 대신 대각선으로 섞어 좌표 합산을 복잡하게 하기(★4) (3) 극한값 대신 A_1A_{2n} 이 처음으로 100 을 넘는 n 을 묻기(부등식 결합 · ★4) (4) a 의 부호 제한을 없애고 조건을 만족하는 a 를 모두 구하게 하면 기각 검증이 생긴다(I-VF · ★5 후보)."
```

```yaml
- id: GN-CALC2-27-39
  page: 27
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    a_n 이 ∞ 로 발산하고 a_n − 2b_n 이 −6 으로 수렴할 때 (a_n + 3b_n)/(2a_n − b_n) 의 극한.
  category: "수렴하는 조합식을 새 수열로 놓고 b_n 을 a_n 으로 표현 → a_n 으로 나눠 0 으로 보내기"
  M: {s: 2, k: 2, a: 3, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "b_n 자체는 수렴하지 않으므로 c_n = a_n − 2b_n 을 수렴하는 새 수열로 놓고 b_n = (a_n − c_n)/2 로 바꿔 써야 목표식을 a_n 하나로 정리할 수 있다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "발산·수렴 조건이 섞인 수열의 극한"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    치환하면 목표식이 (5a_n − 3c_n)/(3a_n + c_n) 이 되고, a_n 으로 나누면 c_n/a_n → 0(수렴/발산)이라 계수 비 5/3 만 남는다.
    [분류 이슈] 실력 UP 출발점 ★4 를 유지했으나 통찰이 EQV 한 개뿐이라 §2.13 의 「★4 슬롯에 저노출 유형(SC·VF·SYM·XU·RT·PD·BW) 부재」 YELLOW 에 해당한다. Mₐ 3(일반 수열 추상)과 수렴/발산 비의 감각을 근거로 ★4 를 두되 ★3 후보로 기록한다.
  tier: star_4
  mechanism_primary: "c_n = a_n − 2b_n 치환 → b_n = (a_n − c_n)/2 대입 → 분자·분모를 a_n 으로 나눔 → c_n/a_n → 0 → 5/3"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{5}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/27-39.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "조합 조건의 계수(a_n − 2b_n)·주어진 극한값(−6)·목표식의 네 계수(1, 3, 2, −1)를 바꿀 수 있다. 제약: 답은 극한값 −6 과 무관하게 계수 비로만 정해지므로(−6 은 함정 정보) 목표식 분모의 a_n 계수가 0 이 되지 않게 골라야 하고, 되게 만들면 발산·부정형 판정 문항으로 성격이 바뀐다."
    creative: "(1) 목표식 분모를 a_n 계수가 0 이 되도록 잡아 c_n 만 남게 하면 −6 이 실제로 쓰인다(★4~5) (2) a_n − 2b_n 대신 a_n b_n 이 수렴한다는 조건으로 바꾸기(★4) (3) 조건을 만족하는 예를 직접 구성해 보게 하는 서술형(★4) (4) 세 수열로 늘려 두 개의 수렴 조합식을 주기(I-CON 추가 · ★5 후보)."
```

## 표본 판정 요약 (20문)

- ★ 분포: ★1 3 · ★2 9 · ★3 5 · ★4 3 · ★5 0
- 통찰형 15 · 절차형 5 · premium 0
- 통찰 유형 분포(총 18개 라벨): I-EQV 8 · I-BW 6 · I-PD 2 · I-XU 1 · I-RT 1 · I-VF 0 · I-SC 0 · I-SYM 0 · I-MI 0 · I-CON 0
- 구역별 ★ 출발점 대비: 필수·발전 예제 3문(★2·★2·★1) · STEP 1 9문(★1 2 · ★2 7) · STEP 2 5문(전부 ★3) · 실력 UP 3문(전부 ★4)
- type_hint 상위: 「부등식으로 주어진 수열의 극한(샌드위치 정리)」 2(24-21 · 26-31, 24-e9 의 「대소 관계로 극한 구하기」까지 합치면 3) · 「∑ 공식으로 일반항을 정리한 수열의 극한」 2(26-33 · 27-37) · 나머지는 각 1
- 그림: 0문(이 범위에는 그림이 있는 문항이 없다)
- M_total 분포: 4 → 2문 · 5 → 2문 · 6 → 6문 · 7 → 5문 · 8 → 2문 · 9 → 3문

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다. 이 범위에서 벤더 신호와 2단 이상 어긋난 문항은 없다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CALC2-26-29 | STEP 1 이지만 도구가 둘(근과 계수 + ∞−∞ 유리화)이고 M_total 7 로 구역 상단. 통찰 1개 d1 이라 +1 규칙에 못 미쳐 ★2 유지 | ★2 / ★3 |
| GN-CALC2-26-34 | M_total 9 로 실력 UP 문항들과 같은 수준이나 통찰이 I-EQV 1개. ★4 로 올리면 §2.13 저노출 유형 부재 YELLOW 라 ★3 유지 | ★3 / ★4 |
| GN-CALC2-27-39 | 실력 UP ★4 를 유지했으나 통찰이 I-EQV 하나뿐이라 §2.13 「★4 슬롯 저노출 유형 부재」 YELLOW. Mₐ 3 을 근거로 ★4 | ★3 / ★4 |

## 카탈로그 차원 메모

나중에 미적분Ⅱ 유형 카탈로그를 만들 때 참고할 기록.

- **이 단원 고유 유형(따로 세워야 함)**: 「수열의 극한의 대소 관계(샌드위치 정리)」. 24-e9 · 24-21 · 26-31 세 문항이 같은 골조이고, 조건이 (가) 직접 부등식 (나) 곱 ≤ 0 위장 (다) 유계 함수(삼각함수) 세 갈래로 나뉜다. 카탈로그에서는 한 유형 + 세 변형 슬롯으로 두는 것이 맞다. base ★ 2 가 적정.
- **「유계 × 0」(24-22)은 별도 유형으로 분리 권장**: 샌드위치 정리를 쓰긴 하지만 실제 학생 행동은 「극한이 없는 항을 분모 차수로 눌러 0 으로 보낸다」는 절차형이라 base ★ 1.
- **통합해도 될 유형**: 26-33 과 27-37 의 「∑ 공식으로 일반항을 정리한 수열의 극한」은 같은 유형으로 묶고 난이도는 일반항 발견의 어려움(단조 증가 나열 vs 앞뒤가 반대로 진행하는 나열)으로 ★3/★4 슬롯을 나누면 된다.
- **미정계수 역추적 계열(25-28 · 27-35 · 26-30 · 26-32)**: 모두 I-BW 가 주 통찰이지만 대상이 다르다 — 차수(25-28) · 최고차 계수(27-35) · 수열 자체(26-30) · 수열의 공차(26-32). 카탈로그에서는 「극한값 조건에서 미정계수 결정」 하나로 묶되 역추적 대상별 슬롯을 두는 편이 변형 생성에 유리하다.
- **앞 단원 복습 성격 문항(25-23 · 25-24 · 25-25 · 25-27)**: 이 단원 제목과 무관한 수렴·발산 판정과 ∞/∞ 유리식이다. 카탈로그를 단원별로 만들면 02단원(수열의 극한) 쪽으로 보내야 하고, 03단원 슬롯 수를 셀 때 중복 계산하지 않도록 표시가 필요하다.
- **이 범위에 없어 카탈로그 설계 시 비어 보일 유형**: I-SC · I-VF · I-SYM 을 주 통찰로 하는 문항이 0 개다. 그래서 이 범위만으로는 ★5 슬롯이 만들어지지 않는다(★5 는 SC·VF·SYM·XU 중 하나가 필요). ★5 원본이 필요하면 27-37 · 27-38 · 27-39 의 creative 변형 중 I-VF·I-CON 이 붙는 갈래를 쓰는 것이 가장 가깝다.
