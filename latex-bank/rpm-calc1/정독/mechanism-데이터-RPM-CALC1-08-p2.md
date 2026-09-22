---
name: mechanism-데이터-RPM-CALC1-08-p2
description: RPM 미적분Ⅰ 08 정적분(2/3 · 유형 04~12) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 미적분Ⅰ (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-calc1
  section: 08 정적분
  unit_code: CALC1-08
  part: "2/3"
  extract_range: "111~116쪽 · 0724~0759"
  total_problems: 36
  unit_total: 111
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). −1 조정은 통찰 0 이면서 유형의 핵심 기법 없이 한 단계 계산으로 끝나는 문항에만 적용. 유형 07(피적분함수가 보이는 우·기함수)의 홀수차 소거는 표준 절차로 보고 통찰로 세지 않았고, 유형 08(피적분함수 미지)의 곱의 홀짝 판정과 유형 11 의 (x-t)f(t) 분리는 통찰 1개(d1)로 셈. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-calc1/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-calc1/items/<id>.tex
  image_source: latex-bank/rpm-calc1/figures/ (crops.json)
---

# RPM 미적분Ⅰ · 08 정적분 (2/3) 정독 데이터 (v1.0)

이 파일은 RPM 미적분Ⅰ 08 정적분 단원의 두 번째 조각(111~116쪽 · 0724~0759 · 36문항)을 다룬다. 구역은 「유형 04 피적분함수가 같은 경우」부터 「유형 12 정적분으로 정의된 함수의 극한」까지 아홉 개이며, 모두 유형 구역이라 대표문제(난이도 표시 없음)·중하·중·상중 난이도와 「대표문제」「서술형」 태그가 벤더 신호다. 교과서·유형 UP·시험에 꼭 나오는 문제 구역은 이 조각에 없다.

주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 사슬) · `insights[]`(유형 코드·depth·근거) · `variation_notes`(바꿔도 되는 수와 제약 · 통찰 골조를 유지한 변형과 ★ 변동 지점)를 채웠다. 그림은 0729 한 문항(`crop:fig-0729.png`)뿐이다.

## 문항 데이터

### 유형 04 정적분의 계산: 피적분함수가 같은 경우

```yaml
- id: RPM-CALC1-0724
  page: 111
  vendor_label: "유형 04 정적분의 계산: 피적분함수가 같은 경우"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    피적분함수가 x^2/(x^2+1) 인 두 정적분(구간 [1,2] 와 [3,2])의 차에 1/(x^2+1) 의 [1,3] 정적분을 더한 값.
  category: "구간 뒤집기 → 구간 합치기 → 피적분함수 합쳐 상수 1 → 적분"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "피적분함수가 같은 정적분의 합·차(구간 합치기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    -∫_3^2 = +∫_2^3 로 뒤집어 [1,2]+[2,3]=[1,3] 으로 합친 뒤 x^2/(x^2+1)+1/(x^2+1)=1 이 되어 ∫_1^3 1 dx = 2. 피적분함수가 다항식이 아니라 따로는 적분할 수 없으므로 합치기가 강제되는 구조. 통찰 없음·M_total 5 이나 뒤집기·합치기·피적분함수 합치기 세 성질을 연달아 써야 해 대표문제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "-∫_3^2 → +∫_2^3 → 구간 합쳐 ∫_1^3 → 피적분함수 합 = 1 → 구간 길이 2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0724.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 끝점 1·2·3 을 임의의 a<b<c 사슬로, 피적분함수 짝을 x^3/(x^2+1) 과 x/(x^2+1)(합이 x) 처럼 바꿀 수 있음. 제약: 두 피적분함수의 합이 다항식이 되어야 하고 뒤집힌 구간이 정확히 한 개 있어야 함."
    creative: "(1) 적분변수를 x·y·t 로 섞어 더미 변수 인식을 추가(★2 유지) (2) 뒤집힌 구간에 계수 -2 를 붙여 합치기 전에 계수 정리(★2) (3) f+g 가 다항식이라는 조건만 주고 f·g 를 숨기면 I-EQV 가 생겨 ★3."
```

```yaml
- id: RPM-CALC1-0725
  page: 111
  vendor_label: "유형 04 정적분의 계산: 피적분함수가 같은 경우"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    같은 다항식 2x^3+6x^2-2 를 적분변수 x·y 로 달리 쓴 두 정적분([-1,1] 과 [1,2])의 합.
  category: "더미 변수 동일시 → 구간 합치기 [-1,2] → 다항식 적분"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "피적분함수가 같은 정적분의 합·차(구간 합치기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    적분변수 문자는 값에 무관하므로 ∫_{-1}^{2}(2x^3+6x^2-2)dx 한 개로 합쳐 [x^4/2+2x^3-2x] 를 계산하면 20-1/2 = 39/2. 더미 변수 인식 뒤에는 사차 원시함수 대입 계산뿐이라 중하 출발점에서 ★1.
  tier: star_1
  mechanism_primary: "y 를 x 로 동일시 → ∫_{-1}^{2} 로 합침 → 사차 원시함수 대입 → 39/2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{39}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0725.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "다항식 계수와 구간 끝점(-1·1·2)을 바꿀 수 있음. 제약: 두 구간이 맞닿아야 하고 합친 정적분 값이 간단한 유리수여야 함."
    creative: "(1) 세 조각·세 문자(x·y·t)로 늘리기(★1) (2) 중간 구간을 뒤집어 부호 처리 추가(★2) (3) 홀수차 항이 [-1,1] 에서 사라지도록 설계해 유형 07 과 결합(★2)."
```

```yaml
- id: RPM-CALC1-0726
  page: 111
  vendor_label: "유형 04 정적분의 계산: 피적분함수가 같은 경우"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=x^2-2x 에 대해 ∫_2^5 f - ∫_3^5 f + ∫_1^2 f 의 값.
  category: "구간 합치기·빼기 → ∫_1^3 → 적분"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "피적분함수가 같은 정적분의 합·차(구간 합치기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ∫_1^2+∫_2^5 = ∫_1^5 이고 여기서 ∫_3^5 를 빼면 ∫_1^3 f = [x^3/3-x^2]_1^3 = 0-(1/3-1) = 2/3. 구간을 수직선 위 선분처럼 더하고 빼는 표준 절차이며 세 항의 순서를 재배열하는 단계가 하나 더 있음. 중 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "∫_1^2+∫_2^5 = ∫_1^5 → -∫_3^5 → ∫_1^3 f → 2/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{2}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0726.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f 의 계수와 구간 끝점 1·2·3·5 변경. 제약: 합치고 빼고 남는 구간이 하나여야 하고, 남는 구간의 정적분 값이 간단해야 함."
    creative: "(1) 항 하나를 뒤집힌 구간으로 주기(★2) (2) 조건을 정적분 값으로만 주고 f 를 숨기면 0727 골조(★2) (3) 남는 구간이 두 개가 되게 해 f 의 넓이 해석까지 요구(★3·I-RT)."
```

```yaml
- id: RPM-CALC1-0727
  page: 111
  vendor_label: "유형 04 정적분의 계산: 피적분함수가 같은 경우"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    연속함수 f 의 세 정적분 값(∫_{-1}^{2}=2 · ∫_1^3=4 · ∫_1^2=8)에서 ∫_{-1}^{3} f 의 값.
  category: "구간 분해 → 미지 구간을 주어진 값의 차로 표현 → 합"
  M: {s: 1, k: 1, a: 3, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정적분 값이 주어진 구간 산술(함수식 없는 구간 합치기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ∫_{-1}^{3} = ∫_{-1}^{2} + ∫_2^3 이고 ∫_2^3 = ∫_1^3 - ∫_1^2 = 4-8 = -4 이므로 2+(-4) = -2. 함수식 없이 구간 산술만 하는 문제로 일반 함수 f 라 Mₐ 3 이지만 단계는 둘. 답이 음수라 ∫_2^3 이 음수여도 된다는 점만 주의. 중 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "∫_2^3 = ∫_1^3 - ∫_1^2 = -4 → ∫_{-1}^{3} = ∫_{-1}^{2} + ∫_2^3 = -2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0727.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 구간의 값과 끝점을 바꿀 수 있음. 제약: 세 조건이 목표 구간을 유일하게 결정해야 함(끝점 그래프가 연결). 값이 음수가 나오게 두어 T-부호를 유지할 수 있음."
    creative: "(1) 조건 넷 중 하나가 불필요하게 두어 고르게 하기(★2) (2) 목표를 ∫_3^{-1} 처럼 뒤집힌 구간으로(★2) (3) 조건 하나를 f 대신 2f+1 의 정적분으로 주어 선형성으로 되돌리게 하면 I-EQV(★3)."
```

### 유형 05 구간에 따라 다르게 정의된 함수의 정적분

```yaml
- id: RPM-CALC1-0728
  page: 112
  vendor_label: "유형 05 구간에 따라 다르게 정의된 함수의 정적분"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    x≥1 에서 (x-2)^2, x≤1 에서 x 인 조각 함수 f 의 ∫_0^2 f 의 값.
  category: "경계 x=1 에서 구간 분할 → 두 조각 적분 → 합"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구간별로 정의된 함수의 정적분(경계 분할)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ∫_0^1 x dx + ∫_1^2 (x-2)^2 dx = 1/2 + [(x-2)^3/3]_1^2 = 1/2 + 1/3 = 5/6. 경계에서 나눠 각 식으로 적분하는 유형의 핵심 절차 하나뿐. M_total 4 이나 조각 함수 분할이 유형의 골조라 −1 조정 없이 대표문제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "x=1 에서 분할 → ∫_0^1 x + ∫_1^2 (x-2)^2 → 1/2 + 1/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{5}{6}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0728.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "경계점·각 조각의 식·적분 구간 변경. 제약: 적분 구간이 경계점을 내부에 포함해야 분할이 의미 있고, (x-2)^2 처럼 원시함수를 바로 쓸 수 있는 형태가 계산을 가볍게 함."
    creative: "(1) 경계가 두 개인 세 조각 함수(★2) (2) 적분 구간이 경계를 포함하지 않게 해 T-범위 함정(★2) (3) 조각 함수를 그래프로만 주면 0729 골조로 I-RT 추가(★2)."
```

```yaml
- id: RPM-CALC1-0729
  page: 112
  vendor_label: "유형 05 구간에 따라 다르게 정의된 함수의 정적분"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    그래프로 주어진 f(x)(x≤0 에서 (-4,0)·(0,12) 를 잇는 직선, x≥0 에서 상수 12)에 대해 ∫_{-4}^{4} xf(x) dx 의 값.
  category: "그래프 → 조각 식 → 0 에서 분할 → xf(x) 두 조각 적분"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "그래프의 두 조각(기울기 3 직선·상수 12)을 식 3x+12 · 12 로 옮겨 xf(x) 를 조각별 다항식으로 만듦"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "그래프로 주어진 조각 함수의 정적분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    왼쪽 조각 f(x)=3x+12, 오른쪽 12 → ∫_{-4}^{0}(3x^2+12x)dx + ∫_0^4 12x dx = [x^3+6x^2]_{-4}^{0} + 96 = -32+96 = 64. 그래프를 식으로 옮기는 표현 전환 한 단계(RT d1) 뒤 조각 적분. 음수 하한 대입에서 부호 실수가 함정. 중 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "그래프 → f = 3x+12 (x≤0), 12 (x≥0) → ∫_{-4}^{0} x(3x+12) + ∫_0^4 12x → -32+96"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$64$'
  answer_source: "답지"
  figure: crop:fig-0729.png
  latex: latex-bank/rpm-calc1/items/0729.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x 절편 -4·y 절편 12·적분 구간 [-4,4] 변경. 제약: 직선이 원점을 지나지 않게 해야 xf(x) 가 두 항이 됨. 그림 라벨(-4, 12, O)을 식과 일치시켜 다시 그려야 함."
    creative: "(1) xf(x) 대신 f(x) 만 적분하면 넓이 계산으로 환원(★1) (2) 오른쪽 조각을 x축 아래로 내려 부호 함정(★2) (3) 적분값 대신 ∫_{-4}^{a} xf(x)=0 인 a 를 묻기(I-BW·★3)."
```

```yaml
- id: RPM-CALC1-0730
  page: 112
  vendor_label: "유형 05 구간에 따라 다르게 정의된 함수의 정적분"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x≥-1 에서 3x^2-7, x≤-1 에서 4x 인 f 에 대해 ∫_a^0 f = -22 를 만족시키는 상수 a(a<-1). 5지선다.
  category: "a<-1 → x=-1 에서 분할 → a 의 이차식 = -22 → a"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "조각 함수의 정적분 값으로 적분 한계 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ∫_a^{-1} 4x dx + ∫_{-1}^{0}(3x^2-7)dx = (2-2a^2) + (-6) = -4-2a^2 = -22 → a^2 = 9, a<-1 이므로 a=-3. 분할 위치는 a<-1 조건이 알려주고 나머지는 계산. 매개변수 a 로 Mₐ 2. 중 출발점 ★2.
  tier: star_2
  mechanism_primary: "x=-1 에서 분할 → (2-2a^2) + (-6) = -22 → a^2=9 → a=-3 (a<-1)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0730.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "조각 식·경계·적분값 변경. 제약: a 의 방정식이 정수해를 갖고 조건 a<-1 로 근이 하나만 남아야 함. 선택지는 답 근처 정수."
    creative: "(1) a<-1 조건을 빼고 a 의 모든 값을 묻게 하면 경계 안쪽 케이스가 추가돼 I-MI(★3) (2) 조각 경계 자체를 a 로 두면 Mₐ 상승(★3) (3) 그래프로만 주면 I-RT 추가(★2~3)."
```

### 유형 06 절댓값 기호를 포함한 함수의 정적분

```yaml
- id: RPM-CALC1-0731
  page: 112
  vendor_label: "유형 06 절댓값 기호를 포함한 함수의 정적분"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    ∫_0^2 |x^2-1| dx - 2∫_2^0 |1-x^2| dx 의 값.
  category: "|1-x^2|=|x^2-1|·구간 뒤집기 → 3∫_0^2|x^2-1| → x=1 에서 분할"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "절댓값 기호를 포함한 함수의 정적분(부호 구간 분할)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 번째 항은 -2∫_2^0 = +2∫_0^2 이고 |1-x^2|=|x^2-1| 이므로 전체가 3∫_0^2|x^2-1|dx. x=1 에서 부호가 바뀌어 ∫_0^1(1-x^2)+∫_1^2(x^2-1) = 2/3+4/3 = 2, 따라서 6. 뒤집기·절댓값 안 부호·분할이 겹쳐 함정 두 종류(T-부호·T-범위). 대표문제 출발점 ★2.
  tier: star_2
  mechanism_primary: "-2∫_2^0|1-x^2| = +2∫_0^2|x^2-1| → 3∫_0^2|x^2-1| → 1 에서 분할 → 3·2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0731.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 -2, 구간 [0,2], 절댓값 안의 이차식 변경. 제약: 부호가 바뀌는 점이 구간 내부에 하나만 있어야 하고 합친 계수가 정수여야 함."
    creative: "(1) 두 절댓값 안을 다른 식으로 두어 합치기가 안 되게 하면 각각 분할(★2·Mₖ↑) (2) 상한을 a 로 두고 값을 주면 0733 골조(★2~3) (3) 절댓값 안을 |x^2-1| 과 |x-1| 로 섞어 인수분해 관계로 묶게 하면 I-EQV(★3)."
```

```yaml
- id: RPM-CALC1-0732
  page: 112
  vendor_label: "유형 06 절댓값 기호를 포함한 함수의 정적분"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    ∫_{-2}^{0} |x^2-x-2| dx 의 값.
  category: "인수분해 (x-2)(x+1) → 부호표 → x=-1 에서 분할 → 두 적분"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "절댓값 기호를 포함한 함수의 정적분(부호 구간 분할)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x^2-x-2=(x-2)(x+1) 은 [-2,-1] 에서 양, [-1,0] 에서 음. F(x)=x^3/3-x^2/2-2x 로 F(-1)-F(-2) = 11/6, -(F(0)-F(-1)) = 7/6, 합 3. 절댓값 부호 판정과 음수 구간 대입(T-부호·T-범위)이 함정이고 계산량은 중간. 중 출발점 ★2.
  tier: star_2
  mechanism_primary: "(x-2)(x+1) 부호 → [-2,-1] 양·[-1,0] 음 → 11/6 + 7/6 = 3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0732.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차식의 두 근과 적분 구간 변경. 제약: 근 하나가 구간 내부에 있어야 분할이 생기고 두 조각 값이 유리수로 정리돼야 함."
    creative: "(1) 근 두 개가 모두 구간 안에 오게 해 세 조각(★2·Mₖ↑) (2) |x^2-x-2| 대신 x|x-2| 처럼 절댓값 밖 인수를 두면 0733 골조 (3) 정적분 값을 넓이로 해석해 그래프와 x축 사이 넓이를 묻기(★2·다음 단원 연결)."
```

```yaml
- id: RPM-CALC1-0733
  page: 112
  vendor_label: "유형 06 절댓값 기호를 포함한 함수의 정적분"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    ∫_0^a x|x-2| dx = 8 을 만족시키는 상수 a(a>2). 5지선다.
  category: "a>2 → x=2 에서 분할 → a 의 삼차방정식 → 인수정리"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "절댓값 함수의 정적분 값으로 적분 한계 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ∫_0^2 x(2-x) + ∫_2^a x(x-2) = 4/3 + (a^3/3 - a^2 + 4/3) = 8 → a^3-3a^2-16=0 → (a-4)(a^2+a+4)=0 → a=4. 분할 위치는 a>2 가 알려주고 삼차방정식은 인수정리로 풀리며 선택지 대입도 가능. 매개변수 a 로 Mₐ 2. 중 출발점 ★2.
  tier: star_2
  mechanism_primary: "x=2 에서 분할 → a^3/3 - a^2 + 8/3 = 8 → (a-4)(a^2+a+4)=0 → a=4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0733.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "절댓값 안의 근 2, 적분값 8, 밖의 인수 x 변경. 제약: a 의 삼차방정식이 정수근 하나와 허근 둘을 갖도록 설계(a>2 와 함께 유일성). 선택지는 정수."
    creative: "(1) a>2 조건을 빼면 0<a≤2 케이스가 생겨 I-MI·I-VF(★3) (2) 밖의 인수를 x-1 로 두어 부호 구간이 둘이 되게(★3·Mₖ↑) (3) 적분값을 넓이로 주고 그래프 조건으로 바꾸면 I-RT(★3)."
```

```yaml
- id: RPM-CALC1-0734
  page: 112
  vendor_label: "유형 06 절댓값 기호를 포함한 함수의 정적분"
  vendor_level: "상중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    절댓값 세 개의 합 f(x)=|x+2|+|x|+|x-2| 의 최솟값 a 를 구한 뒤 ∫_1^a f 의 값. 서술형.
  category: "절댓값 합의 최솟값(a=4) → [1,4] 를 x=2 에서 분할 → 조각 일차식 적분"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "절댓값 합의 최솟값(공통수학 절댓값 함수 · 꺾인 점 x=0 에서 4)을 먼저 구해야 적분 상한이 정해짐 — 앞 단원 도구가 빠지면 풀이가 끊김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "절댓값 함수의 최솟값과 결합한 정적분(두 단계 문제)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    꺾인 점 -2·0·2 중 가운데 x=0 에서 최솟값 4 → a=4. [1,4] 에서 |x+2|·|x| 는 늘 양이고 |x-2| 만 2 에서 바뀌므로 [1,2] 에서 x+4, [2,4] 에서 3x. 11/2 + 18 = 47/2. 최솟값 단계가 앞 단원(절댓값 함수) 도구를 요구해 XU d1, 이후 구간별 부호 처리(T-범위·T-경계)는 표준. 상중 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "min f = f(0) = 4 → a=4 → [1,2]: x+4 · [2,4]: 3x → 11/2 + 18 = 47/2"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{47}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0734.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "절댓값 중심 -2·0·2 를 대칭을 유지하며 바꾸거나 하한 1 을 바꿀 수 있음. 제약: 최솟값이 정수가 되고 [하한, a] 안에 꺾인 점이 하나만 들어와야 두 조각. a 가 하한보다 커야 함."
    creative: "(1) 절댓값 개수를 짝수(4개)로 두면 최솟값이 구간 전체에서 나와 I-MI 추가(★3~4) (2) a 를 최솟값이 아니라 f(x)=k 의 해로 정의하면 I-BW(★3) (3) 하한을 0 으로 바꾸면 꺾인 점 둘 포함 → 세 조각(★3·Mₖ↑)."
```

### 유형 07 우함수와 기함수의 정적분; 피적분함수가 주어진 경우

```yaml
- id: RPM-CALC1-0735
  page: 113
  vendor_label: "유형 07 우함수와 기함수의 정적분; 피적분함수가 주어진 경우"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    g(x)=5x^4-x^3+3x+1 에 대해 ∫_{-2}^{4} g + ∫_4^2 g 의 값. 5지선다.
  category: "구간 합쳐 대칭구간 [-2,2] → 홀수차 항 소거 → 2∫_0^2(5x^4+1)"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "대칭구간에서 다항함수의 정적분(홀수차 소거)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ∫_4^2 = -∫_2^4 이므로 합은 ∫_{-2}^{2} g. 대칭구간에서 -x^3·3x 는 0, 5x^4+1 은 2∫_0^2 → 2(32+2) = 68. 구간 합치기와 홀짝 소거가 이 유형의 표준 절차이며 두 성질을 이어 붙이는 구조. 대표문제 출발점 ★2.
  tier: star_2
  mechanism_primary: "∫_4^2 → -∫_2^4 → ∫_{-2}^{2} g → 홀수차 소거 → 2(32+2) = 68"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0735.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "다항식 계수와 구간 끝점(-2·4·2) 변경. 제약: 두 구간을 합치면 원점 대칭 구간이 되어야 하고 짝수차 항의 정적분이 정수(선택지 간격 2)."
    creative: "(1) 대칭구간을 바로 주고 홀짝 소거만(★1) (2) 세 구간을 합쳐야 대칭이 되게(★2) (3) 피적분함수를 f(x)+f(-x) 꼴로 감추면 I-SYM 등장(★3)."
```

```yaml
- id: RPM-CALC1-0736
  page: 113
  vendor_label: "유형 07 우함수와 기함수의 정적분; 피적분함수가 주어진 경우"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    ∫_{-a}^{a}(2x^3-3x+4)dx = 16 을 만족시키는 상수 a 의 값.
  category: "홀수차 소거 → 2∫_0^a 4 dx = 8a → a"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "대칭구간에서 다항함수의 정적분(홀수차 소거)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    대칭구간에서 2x^3-3x 는 사라지고 상수 4 만 남아 8a = 16, a=2. 소거 뒤 한 줄 계산으로 끝나 중하 출발점에서 ★1.
  tier: star_1
  mechanism_primary: "홀수차 소거 → 2∫_0^a 4 dx = 8a = 16 → a=2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0736.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수항과 적분값 변경(홀수차 계수는 답에 무관). 제약: a 가 양의 정수가 되도록(구간 [-a,a] 의미상 a>0 명시 권장)."
    creative: "(1) 상수항 대신 x^2 항을 두면 a 의 삼차방정식(★2) (2) 하한을 -2 로 고정하고 상한만 a 로 두면 대칭이 깨져 유형 04 골조(★2) (3) ∫_{-a}^{a} 값의 최솟값을 묻게 바꾸면 I-BW(★3)."
```

```yaml
- id: RPM-CALC1-0737
  page: 113
  vendor_label: "유형 07 우함수와 기함수의 정적분; 피적분함수가 주어진 경우"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    ∫_{-1}^{1}(1+2x+3x^2+…+100x^{99})dx 의 값.
  category: "홀수차 항 소거 → (2k+1)x^{2k} 항의 대칭구간 정적분이 각각 2 → 50항"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 2
      type: I-PD
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "(n+1)x^n 의 원시함수가 x^{n+1} 이라 짝수차 항 하나의 대칭구간 정적분이 모두 2 로 같음을 발견해 50항을 셈 (급수를 (x+x^2+…+x^{100})' 로 보는 I-RT 갈래도 있음)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "대칭구간에서 다항함수의 정적분(홀수차 소거)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    홀수차 항(2x·4x^3·…)은 대칭구간에서 0. 남는 (2k+1)x^{2k}(k=0~49)는 ∫_{-1}^{1} = [x^{2k+1}]_{-1}^{1} = 2 로 모두 같아 50·2 = 100. 항별 규칙 발견(PD d1)이 핵심이고 계산은 가벼움. 대안으로 피적분함수를 (x+x^2+…+x^{100})' 로 보면 F(1)-F(-1) = 100-0 한 줄. 중 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "홀수차 소거 → (2k+1)x^{2k} 각 항 정적분 2 → 50항 × 2 = 100"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$100$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0737.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "마지막 차수 99(항 수 100)를 바꿀 수 있음. 제약: 짝수차 항 수를 정확히 세야 하므로 마지막 차수의 홀짝을 분명히. 구간을 [-2,2] 로 바꾸면 항별 값이 2^{2k+1} 이 되어 등비 합(★3)."
    creative: "(1) 계수 패턴을 (n+1) 대신 n 으로 바꾸면 항별 값이 달라져 급수 합(★3·Mₖ↑) (2) 구간을 [0,1] 로 하면 소거 없이 F(1)=100 (★2·I-RT) (3) 피적분함수를 (1+x)^{100} 의 도함수 꼴로 꾸미면 I-RT d2(★3)."
```

```yaml
- id: RPM-CALC1-0738
  page: 113
  vendor_label: "유형 07 우함수와 기함수의 정적분; 피적분함수가 주어진 경우"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    일차함수 f(x)=ax+b 가 ∫_{-1}^{1} xf(x)dx = 1, ∫_{-1}^{1} x^2 f(x)dx = -1 을 만족시킬 때 ab 의 값.
  category: "xf=ax^2+bx · x^2 f=ax^3+bx^2 → 홀수차 소거 → a=3/2, b=-3/2"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "대칭구간 정적분 조건으로 미정계수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ∫_{-1}^{1}(ax^2+bx)dx = 2a/3 = 1 → a=3/2, ∫_{-1}^{1}(ax^3+bx^2)dx = 2b/3 = -1 → b=-3/2. 두 조건이 홀짝 덕에 각각 a·b 하나씩 결정해 연립 없이 끝. ab = -9/4. 매개변수 둘로 Mₐ 2. 중 출발점 ★2.
  tier: star_2
  mechanism_primary: "xf → 2a/3 = 1 · x^2 f → 2b/3 = -1 → ab = -9/4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-\dfrac{9}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0738.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 적분값(1·-1)과 구간 [-1,1] 변경. 제약: 대칭구간을 유지하면 각 조건이 a·b 를 분리하므로 값이 유리수이면 됨. 구간 [-2,2] 면 계수가 16/3·16/3."
    creative: "(1) f 를 이차함수로 두고 조건 셋(★2~3) (2) 구간을 [0,1] 로 하면 연립이 필요해 Mₖ↑(★2) (3) 조건 하나를 ∫_{-1}^{1} f(x)f(-x)dx 로 두면 I-SYM(★3)."
```

### 유형 08 우함수와 기함수의 정적분; 피적분함수가 주어지지 않은 경우

```yaml
- id: RPM-CALC1-0739
  page: 113
  vendor_label: "유형 08 우함수와 기함수의 정적분; 피적분함수가 주어지지 않은 경우"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    기함수 조건 f(-x)=-f(x) 와 ∫_0^2 xf(x)dx = 2 에서 ∫_{-2}^{2}(5x^2+2x+1)f(x)dx 의 값.
  category: "곱의 홀짝 판정 → 5x^2 f·f 는 기함수(0), 2xf 는 우함수 → 2·2∫_0^2 xf"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "f 가 기함수일 때 x^2 f·f 는 기, xf 는 우라는 곱의 홀짝을 판정해 세 항 중 하나만 살림"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "우·기함수 조건이 주어진 미지 함수의 대칭구간 정적분(곱의 홀짝)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    5x^2 f(x) 와 f(x) 는 기함수라 대칭구간에서 0, 2xf(x) 는 우함수라 2·∫_0^2 2xf = 4·2 = 8. 피적분함수가 보이지 않으므로 곱의 홀짝을 추론해야 함(SYM d1). 일반 함수 f 로 Mₐ 3. 대표문제 출발점 ★2, 통찰 1개·M_total 7 로 유지.
  tier: star_2
  mechanism_primary: "f 기함수 → x^2 f·f 기 (0), xf 우 → 2·∫_0^2 2xf = 4·2 = 8"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0739.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "다항식 계수(5·2·1)와 ∫_0^2 xf 의 값 변경. 제약: 살아남는 항이 주어진 정적분(xf)과 정확히 맞아야 하고 구간 상한이 조건의 상한과 같아야 함."
    creative: "(1) f 를 우함수로 바꾸면 살아남는 항이 둘이 되어 조건 둘 필요(★2~3) (2) 조건을 ∫_{-2}^{0} 로 주면 뒤집기·홀짝 두 번(★3) (3) f(x)-f(-x) 같은 조합을 주어 홀짝을 스스로 만들게 하면 I-SYM d2(★3)."
```

```yaml
- id: RPM-CALC1-0740
  page: 113
  vendor_label: "유형 08 우함수와 기함수의 정적분; 피적분함수가 주어지지 않은 경우"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    우함수 f 에 대해 ∫_0^2 f = 5, ∫_{-4}^{4} f = 14 일 때 ∫_2^4 f 의 값.
  category: "우함수 → ∫_{-4}^{4} = 2∫_0^4 = 14 → ∫_0^4 = 7 → 7-5"
  M: {s: 1, k: 1, a: 3, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "우함수의 대칭구간 정적분을 반으로 접어 ∫_0^4 = 7 을 얻고 구간 차로 ∫_2^4 를 분리"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "우·기함수 조건이 주어진 미지 함수의 대칭구간 정적분(곱의 홀짝)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    우함수이므로 ∫_{-4}^{4} f = 2∫_0^4 f = 14 → ∫_0^4 f = 7, ∫_2^4 f = 7-5 = 2. 대칭 접기 한 단계(SYM d1)와 구간 빼기. 중 출발점 ★2.
  tier: star_2
  mechanism_primary: "우함수 → ∫_0^4 f = 14/2 = 7 → ∫_2^4 = 7-5 = 2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0740.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 적분값과 구간 끝점(2·4) 변경. 제약: ∫_{-b}^{b} 값이 짝수이면 ∫_0^b 가 정수. 목표 구간이 [0,b] 안에 있어야 함."
    creative: "(1) 기함수로 바꾸고 ∫_{-4}^{2} 를 주면 대칭 부분 소거(★2~3) (2) 목표를 ∫_{-4}^{-2} 로 두어 접기 한 번 더(★2) (3) f(1+x)=f(1-x) 같은 평행이동 대칭이면 I-SYM d2(★3)."
```

```yaml
- id: RPM-CALC1-0741
  page: 113
  vendor_label: "유형 08 우함수와 기함수의 정적분; 피적분함수가 주어지지 않은 경우"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    기함수 f · 우함수 g 와 ∫_0^3 f = 3, ∫_0^3 g = 5 에서 ∫_{-3}^{3}{f+g+fg} 의 값.
  category: "항별 홀짝 → f·fg 기함수(0), g 우함수 → 2·5"
  M: {s: 1, k: 1, a: 3, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "기×우 = 기 를 판정해 fg 항을 지우고 g 항만 2∫_0^3 g 로 접음 (∫_0^3 f = 3 은 답에 쓰이지 않는 조건)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "우·기함수 조건이 주어진 미지 함수의 대칭구간 정적분(곱의 홀짝)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f 와 fg(기×우=기)는 대칭구간에서 0, g 만 2·5 = 10. 곱의 홀짝 판정 한 단계이며 ∫_0^3 f = 3 이 쓰이지 않는 조건이라는 점이 유일한 함정. 벤더 상중 출발점 ★3 이나 통찰 SYM d1 하나·M_total 6 으로 0739·0740 과 같은 무게. [분류 이슈] 벤더 상중 대비 M·I 는 ★2 수준 — 라벨 ★3 유지, 기록.
  tier: star_3
  mechanism_primary: "f 기·g 우 → fg 기 → ∫_{-3}^{3} = 0 + 2∫_0^3 g + 0 = 10"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$10$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0741.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 적분값과 구간 3 변경(∫_0^3 f 값은 답에 무관). 제약: 우함수 항의 정적분이 2 배 되어 정수."
    creative: "(1) f^2·g^2 항을 섞어 우함수가 더 생기게 하면 조건이 더 필요(★3) (2) fg 대신 (f+g)^2 을 적분하면 전개 뒤 홀짝(★3·Mₖ↑) (3) 기함수 조건을 f(x)+f(-x)=0 처럼 식으로만 주면 I-EQV 추가(★3)."
```

### 유형 09 적분 구간이 상수인 등식

```yaml
- id: RPM-CALC1-0742
  page: 114
  vendor_label: "유형 09 적분 구간이 상수인 등식"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    f(x)=3x^2+2x+∫_0^2 f(t)dt 를 만족시키는 f 에 대해 f(2) 의 값. 5지선다.
  category: "정적분 = 상수 k → f=3x^2+2x+k → k=∫_0^2 f → k=-12"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "적분 구간이 상수인 등식(정적분을 상수 k 로 치환)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ∫_0^2 f(t)dt = k 로 두면 f(x)=3x^2+2x+k 이고 k = ∫_0^2(3t^2+2t+k)dt = 12+2k → k=-12. f(2)=12+4-12 = 4. 상수 치환이 이 유형의 표준 절차이며 k 의 일차방정식 하나. 대표문제 출발점 ★2.
  tier: star_2
  mechanism_primary: "∫_0^2 f = k → f = 3x^2+2x+k → k = 12+2k → k=-12 → f(2)=4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0742.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "다항식과 구간 [0,2] 변경. 제약: k 의 일차방정식 계수 (구간 길이)-1 이 0 이 아니어야 하고 k 가 정수."
    creative: "(1) 정적분이 두 곳에 나오면 0746 골조(★3) (2) 적분 안에 tf'(t) 를 두면 0743 골조(★2) (3) k^2 항을 넣어 k 의 이차방정식이 되게 하면 0744 골조(★2~3)."
```

```yaml
- id: RPM-CALC1-0743
  page: 114
  vendor_label: "유형 09 적분 구간이 상수인 등식"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=4x+∫_0^3 tf'(t)dt 를 만족시키는 f 에 대해 f(-3) 의 값. 5지선다.
  category: "정적분 = 상수 k → f'(x)=4 → k=∫_0^3 4t dt = 18 → f(-3)"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "적분 구간이 상수인 등식(정적분을 상수 k 로 치환)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    정적분은 상수 k 이므로 f(x)=4x+k, f'(t)=4 → k=∫_0^3 4t dt = 18. f(-3) = -12+18 = 6. 적분 안에 f' 가 있어 미분 한 번이 끼는 것이 0742 와 다른 점(T-표기). 중하 출발점이나 f' 처리 단계가 하나 더 있어 ★2.
  tier: star_2
  mechanism_primary: "f = 4x+k → f' = 4 → k = ∫_0^3 4t dt = 18 → f(-3) = 6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0743.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기울기 4·구간 [0,3]·평가점 -3 변경. 제약: f 가 일차라 k 가 f' 에 무관하게 바로 계산됨. f 를 이차로 두면 k 방정식이 생김."
    creative: "(1) f 를 이차 ax^2+bx+k 로 두어 k 가 양변에 나오게(★2) (2) 적분 안에 f(t)+f'(t) 를 두면 두 상수 관계(★3) (3) f(-3) 대신 ∫_0^3 f 를 묻게 하면 한 단계 추가(★2)."
```

```yaml
- id: RPM-CALC1-0744
  page: 114
  vendor_label: "유형 09 적분 구간이 상수인 등식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=(75/7)x^2-6x·∫_1^2 f(t)dt+{∫_1^2 f(t)dt}^2 을 만족시키는 f 에 대해 ∫_1^2 f 의 값.
  category: "정적분 = 상수 k → k=∫_1^2 f → k 의 이차방정식 (k-5)^2=0"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "적분 구간이 상수인 등식(정적분을 상수 k 로 치환)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    k=∫_1^2 f(t)dt 로 두면 f=(75/7)x^2-6kx+k^2. k = (75/7)(7/3) - 6k(3/2) + k^2 = 25-9k+k^2 → k^2-10k+25=0 → (k-5)^2=0, k=5. 이차방정식이 중근으로 설계돼 답이 하나. 분수 75/7·7/3 처리와 이차방정식으로 Mₖ 2. 중 출발점 ★2.
  tier: star_2
  mechanism_primary: "∫_1^2 f = k → k = 25-9k+k^2 → (k-5)^2 = 0 → k=5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0744.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "75/7 은 ∫_1^2 x^2 dx = 7/3 과 곱해 25 가 되도록 맞춘 값이라 구간을 바꾸면 계수도 같이 바꿔야 함. 제약: k 의 이차방정식이 중근(또는 조건으로 하나만 남는 두 근)을 갖도록."
    creative: "(1) 두 근이 나오게 두고 f(0)>0 같은 조건으로 하나를 버리면 I-VF(★3) (2) k^2 대신 서로 다른 두 정적분의 곱으로 주면 0746 골조(★3) (3) k 의 방정식을 삼차로 만들면 Mₖ↑(★3)."
```

```yaml
- id: RPM-CALC1-0745
  page: 114
  vendor_label: "유형 09 적분 구간이 상수인 등식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=3x^2+(2x-1)∫_0^1 f(t)dt 를 만족시키는 f 에 대해 f(-2) 의 값.
  category: "(2x-1) 을 적분 밖 인수로 → f=3x^2+(2x-1)k → k=∫_0^1 f → k=1"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "적분 구간이 상수인 등식(정적분을 상수 k 로 치환)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    적분변수가 t 이므로 (2x-1) 은 적분 밖의 인수. k=∫_0^1 f(t)dt 로 두면 f=3x^2+(2x-1)k 이고 k=∫_0^1{3t^2+(2t-1)k}dt = 1+0·k = 1. f=3x^2+2x-1, f(-2)=7. ∫_0^1(2t-1)dt=0 이라 k 가 바로 나오고 x·t 구분(T-표기)이 유일한 함정. 중 출발점 ★2.
  tier: star_2
  mechanism_primary: "(2x-1)∫_0^1 f = (2x-1)k → k = 1 + 0·k = 1 → f = 3x^2+2x-1 → f(-2) = 7"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0745.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "3x^2·(2x-1)·구간 [0,1] 변경. 제약: (2x-1) 의 [0,1] 정적분이 0 이 아니면 k 의 방정식 계수가 바뀌지만 여전히 일차. 답이 정수."
    creative: "(1) 적분 밖 인수를 x^2 으로 두면 f 가 사차·k 방정식은 일차(★2) (2) 인수를 적분 안 (2t-1)f(t) 로 옮긴 문항과 나란히 두어 차이를 인식하게(★2) (3) 밖 인수와 안 인수를 섞어 상수 둘을 만들면 0746 골조(★3)."
```

```yaml
- id: RPM-CALC1-0746
  page: 114
  vendor_label: "유형 09 적분 구간이 상수인 등식"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=x^2-x∫_0^2 f(t)dt+2∫_0^1 f(t)dt 를 만족시키는 f 에 대해 f(1) 의 값.
  category: "두 정적분을 상수 A·B 로 → f=x^2-Ax+2B → 각 상수의 정적분 식 → 연립"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "구간이 다른 두 정적분을 별개 상수 A·B 로 두고, 각각을 f 로 되돌린 두 식을 연립해 한 번에 결정"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "적분 구간이 상수인 등식 — 정적분 상수가 둘인 연립"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    A=∫_0^2 f, B=∫_0^1 f 로 두면 f=x^2-Ax+2B. A = 8/3-2A+4B, B = 1/3-A/2+2B 를 연립해 A=4/3, B=1/3. f(1) = 1-4/3+2/3 = 1/3. 상수 둘을 동시에 세우고 묶는 것이 유형의 한 단계 위(CON d1)이고 분수 연립으로 Mₖ 2. 상중 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "A=∫_0^2 f · B=∫_0^1 f → f = x^2-Ax+2B → 연립 A=4/3, B=1/3 → f(1) = 1/3"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{1}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0746.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 구간과 계수 변경. 제약: 두 상수의 연립이 유일해를 갖고 값이 간단한 분수. 두 구간을 같게 하면 상수가 하나로 합쳐져 ★2 로 떨어짐."
    creative: "(1) 한 상수를 계수·다른 하나를 제곱으로 두면 이차 연립(★3~4) (2) f(0)=1 조건을 추가하고 상수 셋(★3) (3) 두 구간을 [0,1]·[1,2] 로 두어 합이 [0,2] 가 되게 하면 I-CON d2(★3)."
```

### 유형 10 적분 구간에 변수가 있는 등식

```yaml
- id: RPM-CALC1-0747
  page: 114
  vendor_label: "유형 10 적분 구간에 변수가 있는 등식"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    모든 실수 x 에 대해 ∫_3^x f(t)dt = x^2-ax-3 일 때 f(7) 의 값(a 는 상수). 5지선다.
  category: "x=3 대입 → a=2 · 양변 미분 → f(x)=2x-a → f(7)"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "적분 구간에 변수가 있는 등식(하한 대입·양변 미분)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    양변에 x=3 을 넣으면 0=9-3a-3 → a=2. 양변을 미분하면 f(x)=2x-a=2x-2 → f(7)=12. 「하한 대입·양변 미분」 두 조작이 이 유형의 표준 절차. 대표문제 출발점 ★2.
  tier: star_2
  mechanism_primary: "x=3 → 0 = 6-3a → a=2 · 미분 → f(x) = 2x-2 → f(7) = 12"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0747.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "하한 3·우변 다항식·평가점 7 변경. 제약: 우변이 x=하한 에서 0 이 되도록 a 로 맞출 수 있어야 함. 선택지 간격 2."
    creative: "(1) 우변을 삼차로 두고 f 의 극값을 묻기(★2~3) (2) 하한을 a 로 두면 0749 골조 (3) 좌변에 xf(x) 를 두면 0751 골조(★3)."
```

```yaml
- id: RPM-CALC1-0748
  page: 115
  vendor_label: "유형 10 적분 구간에 변수가 있는 등식"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=∫_1^x (2t-3)(t^2+1)dt 에 대해 f(1)+f'(1) 의 값.
  category: "f(1)=0(상한=하한) · f'(x)=피적분함수 → f'(1)=-2"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정적분으로 정의된 함수의 값과 도함수(f(a)=0 · f'(x)=피적분함수)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    상한=하한이면 f(1)=0, 양변 미분으로 f'(x)=(2x-3)(x^2+1) → f'(1)=(-1)(2)=-2. 합 -2. 정적분으로 정의된 함수의 두 기본 성질을 각각 한 번 쓰는 한 줄 문제. 중하 출발점 ★1.
  tier: star_1
  mechanism_primary: "f(1) = ∫_1^1 = 0 · f'(x) = (2x-3)(x^2+1) → f'(1) = -2 → 합 -2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0748.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "하한 1·피적분함수·평가점 변경. 제약: 평가점을 하한과 같게 두어야 f(1)=0 이 살아 있음(다르면 실제 적분이 필요해 Mₖ↑)."
    creative: "(1) 평가점을 하한과 다르게 해 f(2)+f'(2) 를 묻기(★2) (2) f'(x)=0 인 x 를 묻게 하면 극값 문제로 연결(★2) (3) 피적분함수를 전개하지 않고 곱셈 형태에서 f'(1) 의 부호만 판정하게(★1)."
```

```yaml
- id: RPM-CALC1-0749
  page: 115
  vendor_label: "유형 10 적분 구간에 변수가 있는 등식"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    모든 실수 x 에 대해 ∫_a^x f(t)dt = x^2-2x-8 일 때 a+f(a) 의 값(a>0). 서술형.
  category: "x=a 대입 → a^2-2a-8=0 → a=4 (a>0) · 미분 → f=2x-2 → f(4)=6"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "적분 구간에 변수가 있는 등식(하한 대입·양변 미분)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x=a 를 넣으면 a^2-2a-8=(a-4)(a+2)=0, a>0 이므로 a=4. 미분하면 f(x)=2x-2, f(4)=6, 합 10. a 의 이차방정식에서 조건으로 근 하나를 고르는 것(T-범위)이 0747 과 다른 점. 서술형 태그 +0. 중 출발점 ★2.
  tier: star_2
  mechanism_primary: "x=a → (a-4)(a+2)=0 → a=4 · 미분 → f = 2x-2 → 4+6 = 10"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$10$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0749.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 이차식(근 4·-2)과 조건 a>0 변경. 제약: 근 둘 중 조건으로 하나만 남아야 함. a+f(a) 가 정수."
    creative: "(1) a>0 조건을 빼고 가능한 모든 a+f(a) 를 구하게 하면 I-MI(★3) (2) 우변을 삼차로 두어 a 의 삼차방정식(★2·Mₖ↑) (3) a 대신 f(a)=0 인 점과의 관계를 묻기(★2)."
```

```yaml
- id: RPM-CALC1-0750
  page: 115
  vendor_label: "유형 10 적분 구간에 변수가 있는 등식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=∫_x^{x+2}(t^3-t)dt 이고 f(-1)=0 일 때 f(1) 의 값. 5지선다.
  category: "x=1 직접 대입 → ∫_1^3(t^3-t)dt → 16"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-SC
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "양변 미분으로 f'(x) 를 구하고 f(-1)=0 으로 되돌리는 길(출제 의도)과 x=1 을 바로 넣어 ∫_1^3 을 계산하는 길 중 후자가 한 줄로 끝남 — f(-1)=0 은 기함수라 저절로 성립하는 장식 조건"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "적분 한계 양쪽에 변수가 있는 함수의 값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f(1)=∫_1^3(t^3-t)dt = [t^4/4-t^2/2]_1^3 = (81/4-9/2)-(1/4-1/2) = 16. 양변 미분 뒤 f(-1)=0 으로 적분상수를 맞추는 길도 있으나 대입이 훨씬 빠르고, f(-1)=∫_{-1}^{1}(t^3-t)dt=0 은 기함수라 저절로 성립하는 조건. 갈래 선택(SC d1)이 있으나 계산은 사차 대입 하나. 중 출발점 ★2.
  tier: star_2
  mechanism_primary: "x=1 대입 → ∫_1^3 (t^3-t)dt → (81/4-9/2)-(1/4-1/2) = 16"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0750.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 길이 2·피적분함수·평가점 1 변경. 제약: 직접 대입 시 사차 원시함수 값이 정수가 되게. f(-1)=0 조건을 유지하려면 피적분함수가 기함수이고 대입 구간이 원점 대칭이어야 함."
    creative: "(1) f'(x) 나 f 의 극값을 묻게 하면 미분 갈래가 필수(★3) (2) 상한을 x^2 으로 바꿔도 대입만으로 끝(★2) (3) f(-1)=0 대신 f(0) 값을 주어 상수항 결정이 필요한 것처럼 꾸며도 대입이 답 — 장식 조건을 알아채는 I-SC 유지(★2)."
```

```yaml
- id: RPM-CALC1-0751
  page: 115
  vendor_label: "유형 10 적분 구간에 변수가 있는 등식"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    다항함수 f 가 모든 실수 x 에 대해 xf(x)=6x^4-4x^3+12x^2+∫_1^x f(t)dt 를 만족시킬 때 f(2) 의 값.
  category: "x=1 → f(1)=14 · 양변 미분(곱의 미분) → f 소거 → f'(x) → 적분해 C 결정"
  M: {s: 3, k: 2, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "미분하면 좌변 f(x)+xf'(x) 의 f(x) 가 우변의 f(x) 와 상쇄돼 f' 만 남으므로, 다시 적분하고 x=1 대입값 f(1)=14 로 적분상수를 복원해야 f 가 정해짐"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "xf(x) 와 정적분이 섞인 등식(곱의 미분 후 재적분·초기값 복원)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    x=1: f(1)=14. 미분: f+xf' = 24x^3-12x^2+24x+f → f'=24x^2-12x+24 → f=8x^3-6x^2+24x+C, f(1)=26+C=14 → C=-12. f(2)=64-24+48-12=76. 곱의 미분·상쇄·재적분·초기값 복원이 이어져 단계 7(Mₛ 3)이고 f 소거 뒤 초기값이 필요함을 읽는 것이 EQV d1. 상중 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "x=1 → f(1)=14 · 미분 → xf' = 24x^3-12x^2+24x → f' → f = 8x^3-6x^2+24x+C → C=-12 → f(2)=76"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$76$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0751.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 다항식과 하한 1 변경. 제약: 미분 뒤 xf'(x) 의 우변이 x 로 나누어떨어져야 함(우변 다항식에 상수항·일차항이 없게). f(1) 이 정수."
    creative: "(1) 좌변을 x^2 f(x) 로 두면 x^2 f' 이 남아 나눗셈 조건이 더 빡빡(★3) (2) f(2) 대신 ∫_1^2 f 를 묻기(★3) (3) f 의 차수를 먼저 추론해 미정계수로 두는 대안 길과 비교하게 하면 I-SC 추가(★3~4)."
```

### 유형 11 적분 구간과 피적분함수에 변수가 있는 등식

```yaml
- id: RPM-CALC1-0752
  page: 115
  vendor_label: "유형 11 적분 구간과 피적분함수에 변수가 있는 등식"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    모든 실수 x 에 대해 ∫_a^x (x-t)f(t)dt = x^3-2x^2-4x+8 일 때 f(2) 의 값(a 는 상수).
  category: "(x-t)f(t) → x∫f - ∫tf 로 분리 → 미분 → ∫_a^x f = 3x^2-4x-4 → 다시 미분 → f=6x-4"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "피적분함수 안의 x 를 x∫_a^x f(t)dt - ∫_a^x tf(t)dt 로 밖으로 꺼내야 미분이 가능해지고, 한 번 미분하면 xf(x) 항이 상쇄되어 ∫_a^x f 만 남음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "(x-t)f(t) 꼴 등식(x 분리 후 두 번 미분)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    좌변 = x∫_a^x f - ∫_a^x tf. 미분하면 ∫_a^x f + xf(x) - xf(x) = ∫_a^x f = 3x^2-4x-4, 다시 미분해 f(x)=6x-4 → f(2)=8. a 는 답에 필요 없음(x=a 대입 시 (a-2)^2(a+2)=0 로 a=±2). x 를 밖으로 꺼내는 분리가 유형의 골조(EQV d1). 대표문제 출발점 ★2, 통찰 1개·M_total 7 로 유지.
  tier: star_2
  mechanism_primary: "x∫f - ∫tf → 미분 → ∫_a^x f = 3x^2-4x-4 → 미분 → f = 6x-4 → f(2) = 8"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0752.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 삼차식과 평가점 변경. 제약: 우변은 두 번 미분되므로 어떤 삼차든 f 는 일차. a 를 함께 물으려면 우변이 x=a 에서 이중근을 가져야 함(우변이 (x-a)^2·(일차) 꼴)."
    creative: "(1) a 의 값을 함께 묻게 하면 원식과 한 번 미분한 식에 x=a 를 넣는 두 조건(★3·I-CON) (2) (x-t) 대신 (x-t)^2 을 두면 전개 항이 셋(★3·Mₖ↑) (3) 우변 계수를 미지수 a·b 로 두면 0755 골조."
```

```yaml
- id: RPM-CALC1-0753
  page: 115
  vendor_label: "유형 11 적분 구간과 피적분함수에 변수가 있는 등식"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    모든 실수 x 에 대해 ∫_0^x (x-t)f(t)dt = 2x^4-3x^2 일 때 ∫_0^2 f 의 값.
  category: "x 분리 → 한 번 미분 → ∫_0^x f = 8x^3-6x → x=2 대입"
  M: {s: 1, k: 1, a: 3, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "(x-t)f(t) 를 x∫f - ∫tf 로 분리해 미분하면 ∫_0^x f 가 바로 나오고, 묻는 값이 그 x=2 값이라 두 번째 미분이 필요 없음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "(x-t)f(t) 꼴 등식(x 분리 후 두 번 미분)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    미분 한 번으로 ∫_0^x f(t)dt = 8x^3-6x. x=2 를 넣으면 64-12 = 52. f 를 구하지 않아도 되는 점을 알아채면 한 줄(f=24x^2-6 을 구해 적분해도 같은 답). 분리(EQV d1) 뒤 계산은 가벼움. 중하 출발점이나 유형 11 의 분리 통찰이 있어 ★2.
  tier: star_2
  mechanism_primary: "x∫f - ∫tf → 미분 → ∫_0^x f = 8x^3-6x → x=2 → 52"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$52$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0753.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 다항식(사차·이차 항)과 상한 2 변경. 제약: 우변은 x=0 에서 0 이어야 하고 한 번 미분한 식의 값이 정수."
    creative: "(1) f(2) 를 묻게 하면 두 번 미분(★2) (2) ∫_1^2 f 를 묻게 하면 미분 뒤 두 값의 차(★2) (3) 하한을 a 로 두고 우변 상수항을 살리면 a 결정이 추가(★3)."
```

```yaml
- id: RPM-CALC1-0754
  page: 115
  vendor_label: "유형 11 적분 구간과 피적분함수에 변수가 있는 등식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    모든 실수 x 에 대해 ∫_0^x (x-t)f'(t)dt = (2/3)x^3 을 만족시키고 f(0)=2 일 때 f(1) 의 값.
  category: "x 분리 → 미분 → ∫_0^x f'(t)dt = 2x^2 → f(x)-f(0) = 2x^2 → f(1)"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "(x-t)f'(t) 를 분리해 한 번 미분하면 ∫_0^x f' = f(x)-f(0) 이 되어 f(0)=2 와 결합해 f 가 바로 나옴 — 두 번째 미분 대신 정적분의 기본정리를 씀"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "(x-t)f(t) 꼴 등식(x 분리 후 두 번 미분)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    좌변 = x∫_0^x f' - ∫_0^x tf'. 미분하면 ∫_0^x f'(t)dt = 2x^2, 즉 f(x)-f(0) = 2x^2 → f(x) = 2x^2+2 → f(1)=4. 피적분함수가 f' 라 미분 한 번 뒤 f 자체가 복원되는 구조(T-표기). 분리 EQV d1. 중 출발점 ★2.
  tier: star_2
  mechanism_primary: "x∫f' - ∫tf' → 미분 → ∫_0^x f' = 2x^2 → f(x) = 2x^2 + f(0) = 2x^2+2 → f(1)=4"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0754.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 계수 2/3·f(0) 값·평가점 변경. 제약: 우변 (2/3)x^3 은 미분 뒤 2x^2 이 되도록 계수를 맞춘 것 — 우변을 바꾸면 x=0 에서 0 이어야 하고 미분값이 깔끔해야 함."
    creative: "(1) f(0) 대신 f(1) 을 주고 f(0) 을 묻기(★2) (2) 두 번 미분해 f'(x)=4x 를 얻고 적분하는 길과 비교하게 하면 I-SC(★2~3) (3) 피적분함수를 (x-t)f''(t) 로 두고 f(0)·f'(0) 을 주면 두 단계 복원(★3)."
```

```yaml
- id: RPM-CALC1-0755
  page: 115
  vendor_label: "유형 11 적분 구간과 피적분함수에 변수가 있는 등식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    모든 실수 x 에 대해 ∫_2^x (x-t)f(t)dt = -2x^3+ax+b 일 때 상수 a, b 에 대해 f(a+b) 의 값.
  category: "x 분리 → 미분 → ∫_2^x f = -6x^2+a → x=2 로 a=24 · 원식 x=2 로 b=-32 → f=-12x → f(-8)"
  M: {s: 2, k: 1, a: 3, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "(x-t)f(t) 분리 뒤 한 번 미분한 식과 원식 각각에 x=2 를 넣어야 a·b 가 따로 결정됨 — 미분 전후 두 층에서 하한 대입"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "(x-t)f(t) 꼴 등식(x 분리 후 두 번 미분)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    미분: ∫_2^x f = -6x^2+a, x=2 → a=24. 원식 x=2 → 0 = -16+2a+b → b=-32. 다시 미분 f(x)=-12x, f(a+b)=f(-8)=96. 분리(EQV d1)에 두 층 대입이 더해져 M_total 8 이고 f(-8) 부호(T-부호)·두 번 대입(T-표기) 함정. 이 범위 유형 11 중 가장 무거우나 통찰은 하나. 중 출발점 ★2.
  tier: star_2
  mechanism_primary: "x∫f - ∫tf → 미분 → ∫_2^x f = -6x^2+a → x=2: a=24 · 원식 x=2: b=-32 → f=-12x → f(-8)=96"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$96$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0755.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "하한 2·삼차 계수 -2 변경. 제약: 우변에 x^2 항이 없어 a 가 미분식의 상수항으로 바로 나옴 — x^2 항을 넣으면 a 결정에 일차식이 추가. a+b 가 정수."
    creative: "(1) 우변을 -2x^3+ax^2+bx+c 로 늘려 조건 셋(★3) (2) f(a+b) 대신 ∫_a^b 꼴의 값을 묻기(★3) (3) 하한을 미지수 c 로 두고 a·b 를 주면 I-BW(★3)."
```

### 유형 12 정적분으로 정의된 함수의 극한; $\lim\limits_{x\to a}\frac{1}{x-a}\int_{a}^{x}f(t)\,dt$의 꼴

```yaml
- id: RPM-CALC1-0756
  page: 116
  vendor_label: '유형 12 정적분으로 정의된 함수의 극한; $\lim\limits_{x\to a}\frac{1}{x-a}\int_{a}^{x}f(t)\,dt$의 꼴'
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    f(x)=x^3-2x^2+3 에 대해 lim_{x→3} (1/(x-3))∫_x^3 f(t)dt 의 값.
  category: "∫_x^3 = -∫_3^x → 미분계수 정의 F'(3) → -f(3)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정적분으로 정의된 함수의 극한(미분계수 정의로 환원)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ∫_x^3 f = -∫_3^x f 이므로 F(x)=∫_3^x f 로 두면 식은 -(F(x)-F(3))/(x-3) → -F'(3) = -f(3) = -(27-18+3) = -12. 뒤집힌 구간의 부호(T-부호)만 조심하면 미분계수 정의 한 번. 대표문제 출발점 ★2(M_total 4 이나 극한을 미분계수로 읽는 유형 핵심 기법이 있어 −1 조정 없음).
  tier: star_2
  mechanism_primary: "∫_x^3 → -∫_3^x → -F'(3) = -f(3) → -12"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-12$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0756.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f 의 계수·극한점 3 변경. 제약: 상·하한 중 어느 쪽에 x 가 있는지에 따라 부호가 바뀜. f(3) 이 정수."
    creative: "(1) 구간을 ∫_3^x 로 바꾸면 부호 함정 제거(★1) (2) 분모를 x^2-9 로 두면 0758 골조(★2) (3) 상한을 x^2 처럼 합성으로 두면 0759 골조(★2~3)."
```

```yaml
- id: RPM-CALC1-0757
  page: 116
  vendor_label: '유형 12 정적분으로 정의된 함수의 극한; $\lim\limits_{x\to a}\frac{1}{x-a}\int_{a}^{x}f(t)\,dt$의 꼴'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=x^3+5x+a 에 대해 lim_{x→-1} (1/(x+1))∫_{-1}^{x} f(t)dt = 2 일 때 상수 a 의 값.
  category: "미분계수 정의 → F'(-1) = f(-1) = a-6 = 2 → a"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정적분으로 정의된 함수의 극한(미분계수 정의로 환원)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    F(x)=∫_{-1}^{x} f 로 두면 극한은 F'(-1)=f(-1) = -1-5+a = a-6 = 2 → a=8. 미분계수 정의 한 번과 일차방정식. 매개변수 a 로 Mₐ 2. 중 출발점 ★2.
  tier: star_2
  mechanism_primary: "lim = F'(-1) = f(-1) = a-6 = 2 → a=8"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0757.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f 의 계수·극한점 -1·극한값 2 변경. 제약: f(극한점) 이 a 의 일차식이 되도록(a 가 x 의 계수에 들어가도 일차). 답 정수."
    creative: "(1) a 를 x 의 계수에 두어 f(-1) 에 -a 가 들어가게(★2) (2) 극한값과 f(1) 값을 함께 주어 미지수 둘(★2) (3) 극한이 존재할 조건으로 바꾸면 분자가 0 이어야 한다는 역추론 → I-BW(★3)."
```

```yaml
- id: RPM-CALC1-0758
  page: 116
  vendor_label: '유형 12 정적분으로 정의된 함수의 극한; $\lim\limits_{x\to a}\frac{1}{x-a}\int_{a}^{x}f(t)\,dt$의 꼴'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=x^3-2x^2+6x 에 대해 lim_{x→2} (1/(x^2-4))∫_2^x f(t)dt 의 값. 5지선다.
  category: "x^2-4=(x-2)(x+2) 분리 → F'(2)·(1/4) → f(2)/4"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정적분으로 정의된 함수의 극한(미분계수 정의로 환원)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분모를 (x-2)(x+2) 로 나눠 [∫_2^x f/(x-2)]·[1/(x+2)] → f(2)·(1/4). f(2)=8-8+12=12 → 3. 분모 인수분해로 미분계수 정의 꼴을 만드는 한 단계(T-표기)가 0756 에 더해짐. 중 출발점 ★2.
  tier: star_2
  mechanism_primary: "1/(x^2-4) = 1/((x-2)(x+2)) → F'(2)·1/4 → 12/4 = 3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0758.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f 의 계수·극한점 2 변경. 제약: 분모가 (x-극한점)·(나머지) 로 인수분해되고 나머지 인수가 극한점에서 0 이 아니어야 함. f(2)/4 가 정수(선택지)."
    creative: "(1) 분모를 x^3-8 로 두면 인수 (x^2+2x+4)(★2) (2) 분모를 √x-√2 같은 무리식으로 두면 유리화 결합(★3·I-XU) (3) 분모를 (x-2)^2 으로 두면 극한 존재 조건 f(2)=0 이 필요 → I-BW(★3)."
```

```yaml
- id: RPM-CALC1-0759
  page: 116
  vendor_label: '유형 12 정적분으로 정의된 함수의 극한; $\lim\limits_{x\to a}\frac{1}{x-a}\int_{a}^{x}f(t)\,dt$의 꼴'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=x^3+2x^2-3x+1 에 대해 lim_{x→1} (1/(x-1))∫_1^{x^3} f(t)dt 의 값.
  category: "상한 x^3 → (F(x^3)-F(1))/(x^3-1) · (x^3-1)/(x-1) → f(1)·3"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "상한이 x^3 이라 (x^3-1)/(x-1) 을 곱하고 나눠 F(x^3) 의 x^3→1 미분계수 꼴로 바꾸고, (x^3-1)/(x-1) → 3 을 따로 계산해 곱함"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "정적분으로 정의된 함수의 극한(미분계수 정의로 환원)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    F(x)=∫_1^x f 로 두면 식은 (F(x^3)-F(1))/(x-1) = [(F(x^3)-F(1))/(x^3-1)]·[(x^3-1)/(x-1)] → F'(1)·3 = 3f(1) = 3(1+2-3+1) = 3. 합성된 상한을 미분계수 정의로 되돌리는 변형(EQV d1)이 핵심이고 계산은 한 줄. 중 출발점 ★2.
  tier: star_2
  mechanism_primary: "(F(x^3)-F(1))/(x-1) = [F(x^3)-F(1)]/(x^3-1) · (x^3-1)/(x-1) → f(1)·3 = 3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0759.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상한의 차수(x^2·x^3)·f 의 계수·극한점 1 변경. 제약: 상한 g(x) 가 극한점에서 하한과 같아야 하고(g(1)=1) 곱해지는 인수 (g(x)-1)/(x-1) 의 극한 g'(1) 이 정수. f(1) 은 여기서 1."
    creative: "(1) 하한도 x^2 으로 두어 두 번 분리(★3) (2) 분모를 x^2-1 로 두면 인수 분리와 합성이 동시에(★3) (3) f 를 미지 다항함수로 두고 극한값으로 f(1) 을 묻게 하면 I-BW(★3)."
```

## 표본 판정 요약 (36문)

- ★ 분포: ★1 3 · ★2 29 · ★3 4 · ★4 0 · ★5 0
- 통찰형 14 · 절차형 22 · premium 0
- 통찰 유형: I-EQV 7(유형 11 넷 · 0751 · 0759) · I-SYM 3(유형 08) · I-RT 1 · I-XU 1 · I-PD 1 · I-CON 1 · I-SC 1 — 모두 depth 1
- type_hint 상위: 「적분 구간이 상수인 등식(상수 k 치환)」 4 · 「(x-t)f(t) 꼴 등식(x 분리 후 두 번 미분)」 4 · 「정적분으로 정의된 함수의 극한(미분계수 정의)」 4 · 「피적분함수가 같은 정적분의 합·차(구간 합치기)」 3 · 「대칭구간에서 다항함수의 정적분(홀수차 소거)」 3 · 「우·기함수 조건 미지 함수의 대칭구간 정적분(곱의 홀짝)」 3
- 벤더 신호: 대표문제 9(전부 ★2) · 중하 5(★1 3 · ★2 2) · 중 18(전부 ★2) · 상중 4(전부 ★3) · 서술형 2(0734 ★3 · 0749 ★2)
- 그림: 1문(`crop:fig-0729.png`)
- 전사 답 확인: 36문 모두 직접 풀어 전사본 answer 와 일치

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-CALC1-0741 | 벤더 「상중」이나 통찰 SYM d1 하나·M_total 6 으로 같은 유형의 0739(대표)·0740(중)과 무게가 같음. 쓰이지 않는 조건(∫_0^3 f=3)이 유일한 함정. 라벨 ★3 유지, 기록 | ★2 / ★3 |
| RPM-CALC1-0750 | 출제 의도(양변 미분 → f(-1)=0 으로 상수 복원)와 최단 경로(x=1 직접 대입)가 다르고 f(-1)=0 은 기함수라 자동 성립하는 장식 조건. type_hint 를 「적분 한계 양쪽에 변수」로 두었으나 카탈로그에서 유형 10 의 하위로 둘지 별도 유형으로 둘지 결정 필요 | ★2 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 반복된 type_hint: 유형 09 「상수 k 치환」 4 · 유형 11 「(x-t)f(t) 분리」 4 · 유형 12 「미분계수 정의 환원」 4 · 유형 04 「구간 합치기」 3 · 유형 07 「홀수차 소거」 3 · 유형 08 「곱의 홀짝」 3. 이 여섯이 이 범위의 골조이며 base ★ 는 각각 2 로 두어도 됨.
- 따로 세울 유형: (1) 유형 09 의 「정적분 상수가 둘인 연립」(0746 · CON d1) 은 base ★3 로 분리 권장. (2) 유형 10 의 「xf(x) 곱의 미분 후 재적분·초기값 복원」(0751 · EQV d1 · M_total 9) 은 별도 유형(base ★3). (3) 유형 06 의 「절댓값 최솟값 + 정적분」(0734 · XU d1) 은 절댓값 정적분의 XU 변형으로 별도 항목.
- 통합해도 될 유형: (1) 유형 07·08 은 「대칭구간 홀짝 소거」 한 유형의 두 층(피적분함수 보임 → 절차형 · 안 보임 → SYM d1)으로 묶을 수 있음. (2) 유형 05 의 0730 과 유형 06 의 0733 은 「정적분 값으로 적분 한계 구하기」 공통 골조라 조각 함수/절댓값 함수와 무관하게 하나의 하위 유형으로 묶임. (3) 유형 12 의 분모 변형(0758 · x^2-4)과 상한 합성(0759 · x^3)은 「미분계수 정의 환원」의 하위 변형이면 충분. (4) 유형 10 의 0748(값·도함수)·0750(양쪽 변수)은 유형 12 와 함께 「정적분으로 정의된 함수」 상위 유형 아래 두는 것이 자연스러움.
- 통찰 depth 가 모두 1 이고 ★4 이상이 없음. 이 범위는 변형 원본으로 쓸 때 creative 항목의 (3) 갈래(I-MI·I-VF·I-BW 추가)로 ★3 을 만드는 용도가 주가 될 것.
