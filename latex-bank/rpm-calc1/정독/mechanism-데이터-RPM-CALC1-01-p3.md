---
name: mechanism-데이터-RPM-CALC1-01-p3
description: RPM 미적분Ⅰ 01 함수의 극한(3/3 · 유형 10~11 · 유형 UP 12~13 · 시험에 꼭 나오는 문제 · 서술형 주관식 · 실력 Up) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 미적분Ⅰ (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-calc1
  section: 01 함수의 극한
  unit_code: CALC1-01
  part: "3/3"
  extract_range: "16~21쪽 · 0074~0112"
  total_problems: 39
  unit_total: 112
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-calc1/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-calc1/items/<id>.tex
  image_source: latex-bank/rpm-calc1/figures/ (crops.json)
---

# RPM 미적분Ⅰ · 01 함수의 극한 (3/3) 정독 데이터 (v1.0)

이 파일은 RPM 미적분Ⅰ 01 함수의 극한 단원(전체 112문) 중 마지막 범위인 16~21쪽 0074~0112 의 39문을 다룬다. 구역은 유형 10 다항함수의 결정(4문) · 유형 11 함수의 극한의 대소 관계(4문) · 유형 UP 12 합성함수의 극한(2문) · 유형 UP 13 함수의 극한의 활용(3문) · 시험에 꼭 나오는 문제(19문) · 서술형 주관식(4문) · 실력 Up(3문)으로, 단원 안에서 유형 후반부와 종합·심화 층이다. RPM 은 구역이 곧 난이도 층이라 유형 구역은 대표문제(태그)·난이도(중하·중·상중)에 따라 ★1~3 출발, 유형 UP 은 ★3 출발, 시험에 꼭 나오는 문제는 level 이 없어 ★2 출발(중요·기출 태그는 +0), 서술형 주관식 ★3 출발, 실력 Up ★4 출발로 두고, 출발점에서 M_total·통찰로 ±1 조정했다(통찰 0·M_total ≤ 4~5 이고 교과서 확인 수준이면 −1 · 통찰 2개 이상 또는 depth 3 이면 +1 후보). 이 범위의 벤더 신호는 「대표문제」 4문 · 「중하」 1문 · 「중」 3문 · 「상중」 5문 · 「중요」 3문 · 「서술형」 1문 · 「교육청 기출」 2문 · 「평가원 기출」 1문이다.

M 축 관례(이 파일 기준): Mₐ 는 구체 수치·구체 그래프 1, 미지 상수(a·b·k)나 조건으로 결정되는 미지 함수 f 2, 일반 함수 명제(ㄱㄴㄷ 성질)·차수 매개변수 n 3 으로 매겼다. Mₜ 는 함정이 없으면 0, 한 카테고리면 1(T-경계: 상수 구간이면 극한이 아니라 함숫값 · T-부호: x→−∞ 의 √x²=−x · 부등식을 음수로 나눌 때 반전 등). 통찰은 「안쪽 함수의 접근값과 방향을 읽어 바깥 함수의 한쪽 극한으로 옮기는 단계」(합성함수·가우스 기호)를 I-EQV d1 로, 거리 공식·넓이 공식 대입 같은 표준 표현 전환은 통찰로 세지 않았다(활용 문항은 대부분 절차형). 「분모→0 이면 분자→0」·「f(x)/x 꼴로 나누기」·「∞−∞ 수렴 조건에서 최고차 상쇄」는 이 단원의 표준 절차로 보아 통찰에서 제외했다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 풀이 골조 `mechanism_primary`, 통찰 라벨 `insights[]`(절차형은 빈 배열), 바꿔도 되는 수와 제약 `variation_notes.numeric`, 골조를 유지한 채 설정을 바꾸는 `variation_notes.creative`(★ 가 변하는 지점 포함)를 채웠다. 그림 문항 11개(0082·0083·0084·0086·0088·0090·0092·0103·0104·0105·0112)는 크롭 이미지를 보고 판정했으며, 변형 시 그래프의 열린 점·닫힌 점과 구간 배치를 다시 그려야 한다는 제약을 numeric 에 적었다.

## 문항 데이터

### 유형 10 다항함수의 결정

```yaml
- id: RPM-CALC1-0074
  page: 16
  vendor_label: "유형 10 다항함수의 결정"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    다항함수 f 가 x→∞ 에서 f(x)/(2x²−1)→2, x→−1 에서 f(x)/(x+1)→−3 을 만족할 때 f(−2) 의 값.
  category: "x→∞ 조건으로 차수·최고차 계수 → x→a 조건으로 인수 → 계수 결정 → 대입"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "다항함수의 결정(x→∞ 차수 조건 + x→a 인수 조건)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    첫 조건에서 f 는 이차·최고차 계수 4, 둘째 조건에서 극한이 존재하므로 f(−1)=0 → f=(x+1)(4x+c), 극한값 −4+c=−3 에서 c=1. f(−2)=(−1)(−7)=7. 두 조건을 순서대로 쓰는 표준 절차라 통찰 없음·M_total 6 → 유형 대표문제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "x→∞ 극한 → 이차·최고차 계수 4 → x→−1 극한 존재 ⇒ f(−1)=0 → f=(x+1)(4x+c) → c=1 → f(−2)=7"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$7$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0074.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모 2x²−1 의 최고차 계수·x→∞ 극한값(최고차 계수 = 둘의 곱), x→a 의 a 와 극한값, 묻는 점 f(−2) 를 바꿀 수 있음. 제약: x→a 극한값이 f 의 나머지 일차 인수 (4x+c) 의 x=a 값과 같아야 하므로 정수 c 가 나오게 극한값을 고른다."
    creative: "(1) x→∞ 조건을 (f(x)−2x³)/x² 꼴로 바꿔 차수를 한 단계 숨기기(0076 골조 · ★2 유지) (2) x→a 조건을 두 개 주고 차수를 지정하지 않으면 최저 차수 논증이 붙어 ★3(0077) (3) 분모를 (x+1)² 로 두면 이중근·차수 상승으로 Mₛ 증가 ★3."
```

```yaml
- id: RPM-CALC1-0075
  page: 16
  vendor_label: "유형 10 다항함수의 결정"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    삼차함수 f 가 x→0 에서 f(x)/x→4, x→1 에서 f(x)/(x−1)→−2 를 만족할 때 x→2 에서 f(x)/(x−2) 의 극한값.
  category: "두 x→a 조건 → 두 인수 → 삼차 지정으로 남은 일차 인수 결정 → 새 극한 계산"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "다항함수의 결정(두 x→a 인수 조건 + 차수 지정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f(0)=0, f(1)=0 이므로 f=x(x−1)(ax+b). x→0 극한 −b=4, x→1 극한 a+b=−2 에서 b=−4, a=2 → f=2x(x−1)(x−2). 이때 f(2)=0 이 저절로 나와 x→2 극한은 2·2·1=4. 표준 절차·M_total 6 → 벤더 「중」 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "f(0)=f(1)=0 → f=x(x−1)(ax+b) → 두 극한값으로 a=2, b=−4 → f=2x(x−1)(x−2) → x→2 극한 = 2·2·1 = 4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$4$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0075.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 근의 위치(0, 1)와 두 극한값, 묻는 점(x→2)을 바꿀 수 있음. 제약: 묻는 점이 세 번째 근이 되도록(f(2)=0) 극한값을 맞추거나, 세 번째 근이 아닌 점을 묻는다면 극한이 발산하므로 발문을 f(2) 값으로 바꾼다."
    creative: "(1) 삼차 지정을 빼고 「차수가 가장 낮은 것」으로 바꾸면 최저 차수 논증 추가 ★3 (2) 세 번째 조건을 x→∞ 꼴(최고차 계수)로 주는 혼합형 ★2 (3) f(x)/x 대신 f(x)/x² 로 이중근을 요구하면 (x−1) 인수와 함께 차수가 넘쳐 조건 모순 여부를 따지는 ★3."
```

```yaml
- id: RPM-CALC1-0076
  page: 16
  vendor_label: "유형 10 다항함수의 결정"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    다항함수 f 가 ㈎ x→∞ 에서 (f(x)−2x³)/x²→2, ㈏ x→0 에서 f(x)/x→4 를 만족할 때 f(−1) 의 값.
  category: "f−2x³ 의 차수·최고차 계수 → f 의 형태 → x→0 조건으로 상수항·일차 계수 → 대입"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "다항함수의 결정(f(x)−kxⁿ 꼴의 x→∞ 조건 + x→0 조건)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ㈎ 에서 f−2x³ 은 최고차 2x² 인 이차식이므로 f=2x³+2x²+ax+b. ㈏ 에서 f(0)=0 → b=0, 극한값 a=4. f(−1)=−2+2−4=−4. 함정은 f 를 이차로 오독하는 차수 혼동 하나(T-단위). 통찰 없음·M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "㈎ f−2x³ 는 최고차 2x² 인 이차식 → f=2x³+2x²+ax+b → ㈏ f(0)=0, a=4 → f(−1)=−4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$-4$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0076.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "빼는 항 2x³ 의 계수·차수, 분모 x² 의 차수, 극한값 2·4, 묻는 점을 바꿀 수 있음. 제약: 분모 차수 = (f−kxⁿ) 의 차수가 되도록 두고, x→0 조건의 분모 차수만큼 낮은 차수 계수가 0 이 되게 한다."
    creative: "(1) ㈏ 를 f(x)/x² 로 바꿔 일차 계수까지 0 이 되게 하면 계수 하나가 줄어 ★2 유지 (2) ㈎ 의 분모를 x 로 낮춰 f−2x³ 가 일차식이 되게 하면 조건 충돌 검사가 필요해 ★3 (3) ㈎ 를 x→−∞ 로 주고 홀수 차수 부호를 얹으면 T-부호 추가 ★2~3."
```

```yaml
- id: RPM-CALC1-0077
  page: 16
  vendor_label: "유형 10 다항함수의 결정"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x→1 에서 f(x)/(x−1)→1, x→2 에서 f(x)/(x−2)→1 을 만족하는 다항함수 중 차수가 가장 낮은 g(x) 에 대하여 g(3) 의 값.
  category: "두 인수 조건 → 몫 h 의 두 값 → 상수 불가 논증 → 일차 h → 대입"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 3
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「차수가 가장 낮은」 조건에서 몫 h 의 차수를 역추적 — h(1)=−1, h(2)=1 이므로 상수 불가 → 일차가 최저"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "다항함수의 결정(조건을 만족하는 최저 차수 다항함수)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f(1)=f(2)=0 → f=(x−1)(x−2)h(x). 두 극한값에서 −h(1)=1, h(2)=1 → h(1)=−1, h(2)=1 로 상수 h 는 불가능하고 일차 h=2x−3 이 최저. g(3)=2·1·3=6. 최저 차수 논증(BW d1)이 한 단계 붙고 M_total 7 → 벤더 「상중」 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "f(1)=f(2)=0 → f=(x−1)(x−2)h(x) → 두 극한값 → h(1)=−1, h(2)=1 → 상수 불가 ⇒ 일차 h=2x−3 → g(3)=6"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$6$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0077.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 근 1, 2 와 두 극한값, 묻는 점 g(3) 을 바꿀 수 있음. 제약: 두 극한값을 같게 두면 h(1)=−h(2) 가 되어 여전히 일차가 필요하지만, h(1)=h(2) 가 되게 극한값을 고르면 상수 h 가 가능해져 골조가 무너진다(극한값 비가 −1 이 아니어야 상수 h 성립)."
    creative: "(1) 극한값을 h 가 상수가 되게 주고 「차수가 가장 낮은 것의 차수」를 묻기 → 상수 가능 판단이 핵심 ★3 (2) 조건 세 개(세 근)로 늘려 이차 h 결정 → 연립이 늘어 M 상승 ★3 (3) 「f(x) 의 최고차항 계수가 1 인 것 중 차수 최소」로 바꾸면 h 에 제약이 더해져 케이스 논증 ★4 후보."
```

### 유형 11 함수의 극한의 대소 관계

```yaml
- id: RPM-CALC1-0078
  page: 16
  vendor_label: "유형 11 함수의 극한의 대소 관계"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    모든 실수 x 에서 x²−x−1 < f(x) < x²−x+1 일 때 x→∞ 에서 f(x)/x² 의 극한값. 5지선다.
  category: "부등식을 x² 으로 나눔 → 양끝 극한 일치 → 샌드위치"
  M: {s: 1, k: 1, a: 2, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수의 극한의 대소 관계(다항식 부등식 · x→∞ · x² 으로 나누기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x→∞ 이므로 x²>0, 부등식을 x² 으로 나누면 양끝이 모두 1 로 수렴 → 1. 한 단계·통찰 없음·M_total 4 → 유형 대표문제 출발점 ★2 에서 −1. 교과서 01-6 확인 문제와 같은 수준이다.
    [분류 이슈] 유형 11 대표문제이나 판정은 ★1 — 대표문제 신호(★2)와 1단 차이. 기록만.
  tier: star_1
  mechanism_primary: "부등식을 x²(>0) 으로 나눔 → 양끝 극한 모두 1 → 샌드위치 → 1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0078.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "양끝 이차식의 계수(최고차 계수는 같아야 함)와 나누는 차수(x²)를 바꿀 수 있음. 제약: 양끝 극한이 일치해야 하고, x→∞ 이면 x²>0 이라 부등호가 유지된다."
    creative: "(1) x→−∞ 로 바꾸고 x 로 나누게 하면 부호 반전(T-부호) ★2 (2) 부등식을 제곱해 {f(x)}² 의 극한을 묻기(0080 골조 ★2) (3) 두 함수의 합·차 부등식으로 f/g 를 묻기(0081 골조 ★3)."
```

```yaml
- id: RPM-CALC1-0079
  page: 16
  vendor_label: "유형 11 함수의 극한의 대소 관계"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    모든 양의 실수 x 에서 (x+2)/(3x+1) < f(x) < (x²+5x+3)/(3x²+2x+1) 일 때 x→∞ 에서 f(x) 의 극한값.
  category: "양끝 유리함수의 x→∞ 극한 각각 계산 → 일치 → 샌드위치"
  M: {s: 1, k: 1, a: 2, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수의 극한의 대소 관계(양끝 유리함수 극한 일치 · x→∞)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    양끝 유리함수는 최고차 계수비로 각각 1/3 → f(x)→1/3. 나누는 조작조차 없이 양끝 극한만 계산하면 끝. 통찰 없음·M_total 4 → 벤더 「중하」 출발점(★1~2)에서 ★1.
  tier: star_1
  mechanism_primary: "양끝 유리함수 x→∞ 극한 각각 1/3 → 샌드위치 → 1/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0079.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "양끝 유리함수의 계수를 바꿀 수 있음. 제약: 두 극한값(최고차 계수비)이 같아야 하고, 실제로 왼쪽 < 오른쪽이 모든 양수 x 에서 성립하도록 계수를 고른다(교차 확인)."
    creative: "(1) 양끝을 무리함수 √(x²+ax)−x 꼴로 바꾸면 유리화가 붙어 ★2 (2) 한쪽 끝을 x→∞ 에서 발산하게 두면 샌드위치 불가 → 「극한값을 구할 수 없는 이유」 참·거짓 ★2 (3) 양끝 극한이 다르게 두고 「lim f 가 존재한다면 가능한 범위」를 묻기 ★2."
```

```yaml
- id: RPM-CALC1-0080
  page: 16
  vendor_label: "유형 11 함수의 극한의 대소 관계"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    모든 양의 실수 x 에서 3x+2 < f(x) < 3x+4 일 때 x→∞ 에서 {f(x)}²/(x²+1) 의 극한값.
  category: "양변 양수 확인 → 부등식 제곱 → (x²+1) 로 나눔 → 샌드위치"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수의 극한의 대소 관계(부등식 제곱 · {f(x)}² 의 극한)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x>0 에서 3x+2>0 이므로 제곱해도 부등호 유지: (3x+2)² < f² < (3x+4)². x²+1 로 나누면 양끝 모두 9 → 9. 제곱 전 양수 확인이 함정 하나(T-부호). 통찰 없음·M_total 6 → 「중」 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "x>0 에서 3x+2>0 → 부등식 제곱 → (x²+1) 로 나눔 → 양끝 극한 9 → 9"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$9$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0080.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차식 3x+2, 3x+4 의 계수(기울기 같아야 함)와 분모 x²+1 을 바꿀 수 있음. 제약: 양끝이 양수인 구간(양의 실수)을 유지해야 제곱이 가능하고, 답은 (기울기)² ÷ (분모 최고차 계수)."
    creative: "(1) 부등식 양끝이 음수가 되게(−3x−4 < f < −3x−2) 두면 제곱 시 부등호 반전 확인이 핵심 ★2~3 (2) {f(x)}² 대신 x·f(x) 나 f(x)·g(x) 곱으로 바꾸면 곱의 부등식 처리 ★2 (3) 부등식이 x 의 모든 실수에서 성립할 때 x→−∞ 극한을 묻기 → 부호 논증 ★3."
```

```yaml
- id: RPM-CALC1-0081
  page: 16
  vendor_label: "유형 11 함수의 극한의 대소 관계"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    모든 양의 실수 x 에서 ㈎ 3x²+4x+2 ≤ f+g ≤ 3x²+4x+4, ㈏ x²+2x ≤ f−g ≤ x²+2x+2 일 때 x→∞ 에서 f(x)/g(x) 의 극한값.
  category: "두 부등식을 x² 으로 정규화 → (f+g)/x², (f−g)/x² 의 극한 → f/x², g/x² 결합 → 비"
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights:
    - step: 2
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "f/g 를 직접 다룰 수 없으니 ㈎㈏ 를 각각 x² 으로 나눠 (f+g)/x²→3, (f−g)/x²→1 을 얻고 두 관계를 결합해 f/x²→2, g/x²→1 로 환원"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "함수의 극한의 대소 관계(합·차 부등식에서 두 함수의 비의 극한)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ㈎/x² → (f+g)/x²→3, ㈏/x² → (f−g)/x²→1. 더하고 빼서 f/x²→2, g/x²→1 → f/g→2. 두 독립 조건을 x² 정규화로 묶는 결합 통찰(CON d1) 한 단계, 계산은 가볍다. 「상중」 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "㈎/x² → (f+g)/x²→3 · ㈏/x² → (f−g)/x²→1 → f/x²→2, g/x²→1 → f/g→2"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$2$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0081.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "㈎㈏ 의 최고차 계수(3, 1)와 폭(+2, +2)을 바꿀 수 있음. 제약: (f+g)/x² 와 (f−g)/x² 의 극한값 p, q 에서 g/x²→(p−q)/2 ≠ 0 이어야 비가 정의되고, 답은 (p+q)/(p−q)."
    creative: "(1) ㈏ 를 f·g 의 부등식으로 바꾸면 곱→제곱근 환원으로 골조가 달라져 ★3~4 (2) 묻는 값을 (f−2g)/(f+g) 처럼 바꿔도 같은 골조 ★3 (3) ㈎ 만 주고 「f/g 의 극한이 존재할 때 최댓값」을 묻기 → 조건 부족 논증 ★4 후보."
```

### 유형 UP 12 합성함수의 극한

```yaml
- id: RPM-CALC1-0082
  page: 17
  vendor_label: "유형 UP 12 합성함수의 극한"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형 UP"
  summary: |
    그래프가 주어진 두 함수(f 는 x=1 에서 꼭짓점인 V자 · g 는 x>0 에서 1, x=0 에서 0, x<0 에서 −1 인 계단)에 대해 x→1− 에서 g(f(x)) 의 극한에서 x→0+ 에서 f(g(x)) 의 극한을 뺀 값. 5지선다.
  category: "안쪽 함수의 접근값·방향 판독 → 바깥 함수의 한쪽 극한 또는 함숫값 → 차"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x→1− 일 때 f(x)=1−x 가 0 에 위쪽에서 접근(0+)함을 읽어 g 의 우극한 g(0+)=1 로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "합성함수의 극한(그래프에서 g(f(x))·f(g(x)) 의 한쪽 극한)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    x→1− 이면 f(x)→0+ 이므로 g(f(x))→g(0+)=1. x→0+ 이면 g(x)=1 로 상수이므로 f(g(x))=f(1)=0 (극한이 아니라 함숫값 · T-경계). 1−0=1. 방향 추적 통찰(EQV d1) 한 단계와 상수 구간 함정. 유형 UP 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "x→1− ⇒ f(x)=1−x→0+ ⇒ g(0+)=1 · x→0+ ⇒ g(x)=1(상수) ⇒ f(1)=0 → 1−0=1"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지"
  figure: "crop:fig-0082.png"
  latex: latex-bank/rpm-calc1/items/0082.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "V자 꼭짓점 위치(1)와 g 의 계단값(1, 0, −1), 극한을 취하는 점·방향을 바꿀 수 있음. 제약: 그림 라벨(열린 점·닫힌 점)을 다시 그려야 하고, 안쪽 함수의 접근 방향이 바깥 함수의 불연속점(0)에 걸리도록 배치해야 골조가 유지된다."
    creative: "(1) x→1+ 로 바꾸면 f(x)→0+ 는 같지만 좌우를 모두 물어 「극한 존재 여부」로 바꾸면 ★3 유지 (2) g(f(x)) 의 양쪽 극한이 다르게 f 의 꼭짓점을 x 축 아래로 내리면(f(1)<0) 방향 판독이 두 갈래 ★3~4 (3) 세 함수 합성 f(g(h(x))) 로 늘리면 Mₛ 상승 ★4."
```

```yaml
- id: RPM-CALC1-0083
  page: 17
  vendor_label: "유형 UP 12 합성함수의 극한"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    그래프가 주어진 f(x<−1 에서 1 · f(−1)=−1 · −1<x<1 에서 −x · f(1)=1 · x>1 에서 −1)에 대해 보기 ㄱ x→1− 에서 f(f(x))=−1, ㄴ x→1+ 에서 f(f(x))=1, ㄷ x→−1+ 에서 f(f(x))=−1 의 참·거짓. 5지선다.
  category: "각 보기: 안쪽 f 의 접근값·방향(−1+ · 상수 −1 · 1−) → 바깥 f 의 한쪽 극한 또는 함숫값 → 참·거짓"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "ㄱ: x→1− 에서 f(x)=−x→−1+ 를 읽어 바깥 f 의 t→−1+ 극한(=1)으로, ㄷ: x→−1+ 에서 f(x)→1− 를 읽어 t→1− 극한(=−1)으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "합성함수의 극한(f(f(x)) 의 한쪽 극한 ㄱㄴㄷ 판별)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ㄱ: f(x)→−1+ 이고 (−1,1) 에서 f(t)=−t 이므로 극한 1 → 거짓. ㄴ: x→1+ 에서 f(x)=−1 상수 → f(−1)=−1 → 거짓. ㄷ: f(x)→1− → f(t)=−t→−1 → 참. 방향 추적 통찰(EQV d1) 하나에 상수 구간·열린/닫힌 점 함정 둘(T-경계·T-표기). 「상중」 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "각 보기: 안쪽 f(x) 의 접근값과 방향(−1+ · 상수 −1 · 1−) → 바깥 f 의 해당 한쪽 극한 또는 함숫값 → ㄷ 만 참"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: "crop:fig-0083.png"
  latex: latex-bank/rpm-calc1/items/0083.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "불연속점 위치(±1)와 각 점의 함숫값(닫힌 점), 중간 구간 기울기(−1)를 바꿀 수 있음. 제약: 그래프를 다시 그려야 하고, 보기 세 개가 「방향 추적」「상수 구간→함숫값」「반대 방향 추적」을 하나씩 검사하도록 설계해야 골조가 유지된다."
    creative: "(1) 함숫값 f(±1) 을 바꿔 ㄴ 의 답만 뒤집기 ★3 유지 (2) 「lim f(f(x)) 가 존재하는 x=a 의 개수」로 바꾸면 모든 불연속점을 좌우 검사 ★4 (3) f(f(x)) 대신 f(x)+f(−x) 등 대칭 결합을 넣으면 SYM 통찰이 붙어 ★4."
```

### 유형 UP 13 함수의 극한의 활용

```yaml
- id: RPM-CALC1-0084
  page: 17
  vendor_label: "유형 UP 13 함수의 극한의 활용"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형 UP"
  summary: |
    곡선 y=x² 위의 점 P(x, y)(x>0) 와 Q(1, 0), R(0, 4) 에 대해 삼각형 OPQ 의 넓이 A(x), 삼각형 OPR 의 넓이 B(x) 일 때 x→∞ 에서 A(x)/{x·B(x)} 의 극한값.
  category: "두 삼각형 넓이를 P 의 좌표로 표현 → 비 정리 → x→∞ 극한"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수의 극한의 활용(좌표평면 도형 넓이의 비 · x→∞)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    OQ=1 을 밑변으로 A(x)=½·1·x², OR=4 를 밑변으로 B(x)=½·4·x=2x. A/(xB)=(x²/2)/(2x²)=1/4 로 x 에 무관한 상수. 높이를 P 의 좌표(x² 과 x)에서 읽는 실수 하나(T-표기). 넓이 공식 대입은 표준이라 통찰 없음·M_total 5 → 유형 UP 출발점 ★3 에서 −1.
    [분류 이슈] 유형 UP 대표문제이나 절차형 M_total 5 → ★2. UP 신호(★3)와 1단 차이. 기록만.
  tier: star_2
  mechanism_primary: "A(x)=½·1·x² · B(x)=½·4·x → A/(xB)=(x²/2)/(2x²) → 1/4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{4}$'
  answer_source: "답지"
  figure: "crop:fig-0084.png"
  latex: latex-bank/rpm-calc1/items/0084.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "Q(1,0)·R(0,4) 의 좌표, 곡선 y=x² 의 계수, 분모의 x 차수를 바꿀 수 있음. 제약: A 는 x², B 는 x 에 비례하므로 분모에 x 를 곱해야 극한이 0·∞ 가 아닌 상수가 된다(차수 맞추기). 그림 라벨은 다시 그린다."
    creative: "(1) 곡선을 y=√x 로 바꾸면 차수 비가 달라져 분모 조정이 필요 ★2 (2) 삼각형 대신 P 와 두 점이 이루는 각·둘레의 극한을 물으면 거리 공식·유리화가 붙어 ★3 (3) x→0+ 로 바꾸면 0/0 꼴 처리 ★2."
```

```yaml
- id: RPM-CALC1-0085
  page: 17
  vendor_label: "유형 UP 13 함수의 극한의 활용"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    중심 (3, 1), 반지름 √10 인 원과 직선 y=3x+t 가 만나는 점의 개수를 f(t) 라 할 때 t→−18− 에서의 극한 − t→2− 에서의 극한 + f(2) 의 값. 5지선다.
  category: "원과 직선의 위치 관계(거리) → 접하는 t → f(t) 계단함수 → 한쪽 극한·함숫값"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "교점 개수 함수 f(t) 를 접하는 t=2, −18 을 경계로 2·1·0 값을 갖는 계단 그래프로 옮겨 한쪽 극한을 읽음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "함수의 극한의 활용(원과 직선의 교점 개수 함수 f(t) 의 한쪽 극한)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    중심과 직선 3x−y+t=0 의 거리 |8+t|/√10 = √10 에서 t=2, −18 이 접하는 경계. f(t)=2 (−18<t<2), 1 (t=2, −18), 0 (밖). t→−18− 극한 0, t→2− 극한 2, f(2)=1 → 0−2+1=−1. 개수 함수를 계단함수로 옮기는 RT d1 한 단계와 「접할 때 1개」 경계 함정. 「상중」 출발점 ★3 유지. 거리 공식은 도형의 방정식 도구지만 표준 대입이라 XU 로 세지 않음.
  tier: star_3
  mechanism_primary: "중심-직선 거리 |8+t|/√10 = √10 ⇒ t=2, −18 → f(t)=2(−18<t<2)·1(경계)·0(밖) → 0−2+1=−1"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0085.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "원의 중심·반지름과 직선의 기울기를 바꿀 수 있음. 제약: 접하는 두 t 값이 정수가 되도록 반지름² 이 (기울기²+1) 의 배수인 조합을 고르고, 극한을 취하는 점은 그 경계값에 맞춘다."
    creative: "(1) 직선 대신 원 x²+y²=t 와 고정 원의 교점 개수로 바꾸면 경계가 두 원의 내접·외접 두 곳 → 계단이 4단 ★3~4 (2) 「f(t) 의 극한이 존재하지 않는 t 의 개수」로 묻기 ★3 (3) 개수 함수 대신 「접점 사이 거리」 같은 연속량으로 바꾸면 통찰 골조가 사라져 ★2."
```

```yaml
- id: RPM-CALC1-0086
  page: 17
  vendor_label: "유형 UP 13 함수의 극한의 활용"
  vendor_level: "상중"
  vendor_tags: ["서술형"]
  category_type: "유형 UP"
  summary: |
    곡선 y=x² 위의 점 P(t, t²)(t>0) 와 OP=OQ 인 x 축 위의 점 Q(x 좌표 양수)에 대해 직선 PQ 의 y 절편 f(t) 가, P 가 원점에 가까워질 때(t→0+) 가까워지는 값.
  category: "OQ=OP 로 Q 좌표 → 직선 PQ 의 y 절편 식 → 0/0 꼴 유리화 → t→0+ 극한"
  M: {s: 3, k: 3, a: 1, t: 1}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수의 극한의 활용(움직이는 점이 만드는 직선의 y 절편의 극한 · 유리화)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    OQ=OP=t√(1+t²) 이므로 Q(t√(1+t²), 0). 직선 PQ 의 y 절편 f(t)=t²√(1+t²)/(√(1+t²)−1), 분모 유리화로 t² 이 약분되어 √(1+t²)(√(1+t²)+1) → t→0+ 에서 1·2=2. 거리·직선 식은 표준 대입이라 통찰 없음이지만 무리식 y 절편 정리와 유리화가 다단계(M_total 8). 「상중」·서술형 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "OQ=OP=t√(1+t²) → 직선 PQ 의 y 절편 f(t)=t²√(1+t²)/(√(1+t²)−1) → 유리화 → √(1+t²)(√(1+t²)+1) → t→0+ 에서 2"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$2$"
  answer_source: "답지"
  figure: "crop:fig-0086.png"
  latex: latex-bank/rpm-calc1/items/0086.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "곡선 y=x² 의 계수(y=ax²)와 Q 의 위치 조건(x 축 위·양수)을 바꿀 수 있음. 제약: OP² 가 t²(1+a²t²) 꼴이라 유리화 뒤 t² 이 약분되어야 극한이 유한하며, 답은 2/a 로 정리된다(a=1 이면 2). 그림은 다시 그린다."
    creative: "(1) Q 를 y 축 위로 두면 y 절편 대신 x 절편을 물어야 골조 유지 ★3 (2) 직선 PQ 대신 P 에서 OQ 에 내린 수선의 발이나 삼각형 OPQ 의 외심의 극한을 물으면 식 세우기 단계가 늘어 ★4 후보 (3) t→∞ 로 바꾸면 ∞−∞ 유리화로 골조 변경 ★3."
```

### 시험에 꼭 나오는 문제

```yaml
- id: RPM-CALC1-0087
  page: 18
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    f(x)=x²+2ax+1 (x≥−1), −x²+3x−a (x<−1) 에 대해 x→−1 에서 극한이 존재할 때 f(−2)+f(2) 의 값. 5지선다.
  category: "좌극한 = 우극한 → a 결정 → 각 구간 식으로 함숫값 계산"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "극한값이 존재할 조건(구간별 함수의 좌·우극한 일치로 상수 결정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    우극한 2−2a, 좌극한 −4−a 가 같아야 하므로 a=6. f(−2) 는 아래 식으로 −16, f(2) 는 위 식으로 29 → 13. 어느 식으로 대입하는지 경계 함정 하나. 통찰 없음·M_total 6 → 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "좌극한 −4−a = 우극한 2−2a → a=6 → f(−2)+f(2)=−16+29=13"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0087.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "경계점 −1, 두 이차식의 계수, 묻는 두 점을 바꿀 수 있음. 제약: 좌·우극한을 같게 하는 a 의 일차방정식이 정수해를 갖도록 계수를 고르고, 묻는 두 점은 경계 양쪽에 하나씩 둔다."
    creative: "(1) 상수를 a, b 두 개로 늘리고 경계점도 두 개로 → 연립 ★2~3 (2) 「극한이 존재하지 않도록 하는 a 의 조건」으로 뒤집기 ★2 (3) 한 구간을 |x−k| 절댓값식으로 바꿔 절댓값 처리 함정 추가 ★2."
```

```yaml
- id: RPM-CALC1-0088
  page: 18
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    x≥0 에서 그래프가 주어진 f(0≤x<1 에서 2 · f(1)=1 · (1,1)→(3,3) 선분 · f(3)=2 · x>3 에서 감소 곡선)에 대해 함숫값·좌극한·극한 존재 여부 보기 중 옳지 않은 것. 5지선다.
  category: "각 보기의 좌·우극한과 함숫값을 그래프에서 판독 → 거짓 보기 선택"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "그래프에서 극한값·함숫값 판독(옳지 않은 것 고르기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ①f(1)=1 ②x→1− 극한 2 ③x→2 극한 2=f(2) ④x→1 에서 좌 2·우 1 → 존재 안 함, 모두 참. ⑤x=3 에서 좌·우극한 모두 3 이라 극한은 존재(함숫값 2 와 무관) → 거짓. 함숫값≠극한값 구분 함정 하나. 판독 한 단계·M_total 4 → 출발점 ★2 에서 −1.
  tier: star_1
  mechanism_primary: "각 보기의 좌·우극한과 함숫값을 그래프에서 읽음 → x=3 에서 좌·우극한 모두 3(함숫값 2 와 무관) → ⑤ 거짓"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "⑤"
  answer_source: "답지"
  figure: "crop:fig-0088.png"
  latex: latex-bank/rpm-calc1/items/0088.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "불연속점 위치(1, 3)와 각 점의 함숫값·극한값 배치를 바꿀 수 있음. 제약: 그래프를 다시 그려야 하고, 「극한은 존재하지만 함숫값과 다른 점」 하나와 「좌·우극한이 다른 점」 하나를 반드시 포함해야 보기 골조가 유지된다."
    creative: "(1) 「lim f(x)=f(a) 인 a 의 개수」로 바꾸면 모든 점 검사 ★2 (2) 보기에 f(f(1)) 이나 lim f(f(x)) 를 섞으면 합성 판독 ★3 (3) 그래프 대신 구간별 식을 주면 계산형으로 골조 변경 ★1~2."
```

```yaml
- id: RPM-CALC1-0089
  page: 18
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    f(x)=|x−2| (x≥1), −x²+3 (x<1) 에 대해 x→1− 극한 + x→1+ 극한 + x→3 극한의 값.
  category: "각 극한을 해당 구간 식에 대입 → 합"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구간별 함수의 좌극한·우극한 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x→1−: −1+3=2, x→1+: |1−2|=1, x→3: |3−2|=1 → 합 4. 어느 식에 대입하는지 경계 함정 하나. 대입 한 단계·M_total 4 → 출발점 ★2 에서 −1.
  tier: star_1
  mechanism_primary: "x→1−: −x²+3→2 · x→1+: |x−2|→1 · x→3: 1 → 합 4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$4$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0089.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "경계점 1, 절댓값 안 상수 2, 이차식 계수, 세 번째 극한점을 바꿀 수 있음. 제약: 좌·우극한이 다르도록 경계에서 두 식의 값을 다르게 두고, 세 번째 점은 절댓값 꺾이는 점(2)이 아닌 곳 또는 일부러 꺾이는 점으로."
    creative: "(1) 세 번째 극한을 x→2 로 두면 |x−2| 가 꺾이는 점이지만 극한은 0 으로 존재 — 「존재 여부」 판단 ★1~2 (2) 좌·우극한 차가 상수 a 를 포함하게 두고 「극한이 존재하도록」 뒤집기(0087 골조 ★2) (3) 가우스 기호 [x] 를 섞으면 방향 판독 ★3."
```

```yaml
- id: RPM-CALC1-0090
  page: 18
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    그래프가 주어진 f(x=−2 에서 x 축에 접하는 극소 0 · x=0 에서 극대 1 · x=2 에서 x 축을 가로지름)에 대해 [f(x)] 의 한쪽 극한 보기 중 옳은 것. 5지선다.
  category: "각 보기에서 f(x) 가 정수에 어느 쪽에서 접근하는지 판독 → 가우스 기호 값 → 참·거짓"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x→2± 에서 f(x)→0∓, x→−2± 에서 f(x)→0+ (접함), x→0 에서 f(x)→1− 를 읽어 [f(x)] 의 값(−1·0·0·0)으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "가우스 기호를 포함한 함수의 극한(그래프에서 [f(x)] 의 한쪽 극한)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ① x→2+ 에서 f→0− → [f]=−1 (거짓) ② x→2− 에서 f→0+ → 0 (거짓) ③ x→−2− 에서 접하므로 f→0+ → 0 (거짓) ④ x→−2+ 에서 f→0+ → 0 (참) ⑤ x→0 에서 f→1− → 0 (거짓). 접근 방향을 정수 경계와 맞춰 읽는 통찰(EQV d1)에 0+/0− 경계·가우스 표기 함정 둘. 보기 다섯 개 전부 방향 판독이라 출발점 ★2 에서 +1.
  tier: star_3
  mechanism_primary: "각 보기에서 f(x) 가 정수(0 또는 1)에 어느 쪽에서 접근하는지(0+·0−·1−) 판독 → [f(x)] 의 한쪽 극한 → ④"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지"
  figure: "crop:fig-0090.png"
  latex: latex-bank/rpm-calc1/items/0090.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접점 −2·극대점 (0,1)·교점 2 의 위치와 극댓값을 바꿀 수 있음. 제약: 그래프를 다시 그려야 하고, 「접해서 한쪽 부호만 갖는 점」「가로질러 부호가 바뀌는 점」「정수 극값에 아래에서 접근하는 점」을 하나씩 포함해야 골조가 유지된다."
    creative: "(1) 극댓값을 정수가 아닌 값(1.5)으로 두면 x→0 보기가 방향 무관 → 함정 하나 감소 ★2~3 (2) [f(x)] 대신 f([x]) 를 물으면 안쪽 계단 → 함숫값 판독으로 골조 변경 ★3 (3) 「lim [f(x)] 가 존재하는 정수 a 의 개수」로 확장 ★4."
```

```yaml
- id: RPM-CALC1-0091
  page: 18
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    x→2 에서 f(x−2)/(x−2)→4 일 때 x→0 에서 (3f(x)−x)/(x²+2f(x)) 의 극한값. 5지선다.
  category: "x−2=t 치환으로 f(t)/t→4 → 분자·분모를 x 로 나눠 f(x)/x 꼴 → 대입"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "극한값을 이용한 함수의 극한값(f(x)/x 의 극한이 주어질 때 · 치환 포함)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x−2=t 로 두면 t→0 에서 f(t)/t→4. 구하는 식의 분자·분모를 x 로 나누면 (3·f(x)/x−1)/(x+2·f(x)/x) → (12−1)/(0+8)=11/8. 치환은 같은 대수 영역 안이고 「f(x)/x 꼴로 나누기」는 이 단원 표준 절차라 통찰 없음. f(x−2) 표기 함정 하나·M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "x−2=t 치환 → f(t)/t→4 → 분자·분모를 x 로 나눔 → (3·4−1)/(0+2·4)=11/8"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0091.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "치환 이동량(x−2), 주어진 극한값 4, 구하는 식의 계수(3, −1, 2)를 바꿀 수 있음. 제약: 분모에 x² 처럼 f(x)/x 보다 빨리 0 이 되는 항만 남기고, 결과가 선택지에 맞는 기약분수가 되게 한다."
    creative: "(1) 조건을 f(x)/x² → 4 로 주고 구하는 식도 x² 으로 나누게 하기 ★2 (2) 조건을 f(2x)/x 꼴로 주면 치환에 배율이 붙어 T-단위 추가 ★2~3 (3) 조건 두 개(f(x)/x→4, g(x)/x→−1)를 결합해 f/g 를 묻기 ★2."
```

```yaml
- id: RPM-CALC1-0092
  page: 18
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    그래프가 주어진 두 함수(f: x<1 에서 1, f(1)=−1, x>1 에서 x−2 · g: x<1 에서 −x, x≥1 에서 1)에 대해 x→0 에서 f(1+x)g(1−x) 의 극한값.
  category: "x→0± 에 따라 1+x, 1−x 의 접근 방향 판독 → 각 함수의 한쪽 극한 곱 → 좌·우 일치 확인"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x→0+ 이면 1+x→1+, 1−x→1− (방향 반전)으로, x→0− 이면 그 반대로 읽어 f·g 의 한쪽 극한으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "합성함수의 극한(그래프에서 f(1+x)g(1−x) 의 양쪽 극한)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    x→0+: f(1+)·g(1−)=(−1)·(−1)=1, x→0−: f(1−)·g(1+)=1·1=1 → 좌·우 일치 → 1. 1−x 의 방향 반전을 읽는 통찰(EQV d1)에 양쪽 확인·부호 함정 둘. 출발점 ★2 에서 +1.
  tier: star_3
  mechanism_primary: "x→0+: f(1+)·g(1−)=(−1)(−1)=1 · x→0−: f(1−)·g(1+)=1·1=1 → 좌·우 일치 → 1"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$1$"
  answer_source: "답지"
  figure: "crop:fig-0092.png"
  latex: latex-bank/rpm-calc1/items/0092.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "불연속점 1 과 각 함수의 좌·우극한값(f: 1/−1, g: −1/1)을 바꿀 수 있음. 제약: 그래프를 다시 그려야 하고, 좌·우 곱이 같도록(예: 두 함수의 좌·우극한 부호가 동시에 바뀜) 값을 맞춰야 극한이 존재한다 — 일부러 다르게 두면 「존재하지 않음」 발문으로."
    creative: "(1) f(1+x)+g(1−x) 합으로 바꾸면 좌·우가 달라져 존재 여부 판단 ★3 (2) f(1+x)g(1−x) 대신 f(1+x²) 처럼 항상 한쪽에서 접근하게 두면 방향 판독 하나 감소 ★2 (3) 세 함수 곱으로 확장 ★3~4."
```

```yaml
- id: RPM-CALC1-0093
  page: 19
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["교육청 기출"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    x→∞ 에서 2f(x)−3g(x)→1, g(x)→∞ 일 때 (4f+g)/(3f−g) 의 극한값. 5지선다.
  category: "2f−3g=h(→1) 로 두고 f 를 g, h 로 표현 → 대입 → g 로 나눔 → h/g→0"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "극한값을 이용한 함수의 극한값(lim(2f−3g) 수렴 · lim g=∞ 에서 비의 극한)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    2f−3g=h 로 두면 f=(3g+h)/2. 대입하면 (7g+2h)/((7g+3h)/2), g 로 나누고 h/g→0 → 2. 수렴하는 식을 새 함수로 두는 「극한값 이용」 표준 절차. 통찰 없음·M_total 6 → ★2 유지, 기출 태그는 통찰이 없어 +0.
  tier: star_2
  mechanism_primary: "2f−3g=h(→1) → f=(3g+h)/2 대입 → g 로 나눔 → h/g→0 → 2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0093.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "조건식 계수(2, −3), 극한값 1, 구하는 식 계수(4, 1, 3, −1)를 바꿀 수 있음. 제약: g 로 나눈 뒤 분모가 0 이 되지 않도록(3·(3/2)−1 ≠ 0) 계수를 고르고, 답은 결국 f/g→3/2 를 대입한 유리수."
    creative: "(1) g→∞ 대신 g→0 으로 주면 h 가 지배해 골조가 달라짐(f/g 발산 논의) ★3 (2) 조건을 f−g→1, f·g→? 처럼 곱으로 주면 결합 방식이 바뀜 ★3 (3) 두 조건을 부등식으로 주면 대소 관계와 결합 ★3."
```

```yaml
- id: RPM-CALC1-0094
  page: 19
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    함수의 극한 성질 참·거짓: ㄱ lim g, lim f/g 존재 ⇒ lim f 존재 · ㄴ lim f, lim f/g 존재 ⇒ lim g 존재 · ㄷ lim(f−g)=0 ⇒ lim f=lim g=k. 옳은 것만 고르기. 5지선다.
  category: "ㄱ: 곱의 극한으로 증명 → ㄴ·ㄷ: 반례 구성 → 선택"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "ㄴ·ㄷ 이 거짓이려면 어떤 함수가 필요한지 역추적해 반례를 구성 — ㄴ: f=|x|, g=부호함수(f/g=x 수렴·g 발산), ㄷ: f=g=1/x (차는 0·각각 발산)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "함수의 극한에 대한 성질 참·거짓 판별(반례 구성)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ㄱ: f=(f/g)·g 이므로 곱의 극한으로 존재 → 참. ㄴ: g 가 발산해도 f/g 가 수렴할 수 있음(f=|x|, g=x/|x| 에서 f/g=x) → 거짓. ㄷ: f=g=1/x 는 차가 0 이지만 각각 발산 → 거짓. 반례를 스스로 세우는 BW d1 한 단계에 일반 함수 명제(Mₐ 3). 출발점 ★2 에서 +1.
  tier: star_3
  mechanism_primary: "ㄱ: f=(f/g)·g 로 곱의 극한 → 참 · ㄴ: g 발산·f/g 수렴 반례(f=|x|, g=부호함수) · ㄷ: f=g=1/x 반례 → ①"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0094.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "숫자 변형 여지가 없음(명제형). 보기의 참·거짓 조합(참 1·거짓 2)과 순서만 바꿀 수 있음. 제약: 참인 명제는 극한의 성질(합·차·곱·몫)로 증명 가능해야 하고, 거짓 명제는 초등적 반례(부호함수·1/x·상수)가 존재해야 한다."
    creative: "(1) ㄷ 를 「lim f·g=0 ⇒ lim f=0 또는 lim g=0」 으로 바꾸면 반례가 f=x, g=1/x 로 달라짐 ★3 (2) 보기에 「lim f 존재·lim g 존재 안 함 ⇒ lim(f+g) 존재 안 함」 같은 참 명제(귀류)를 섞으면 증명형 ★3~4 (3) 함수를 수열 극한 명제로 바꾸면 단원 이동 ★3."
```

```yaml
- id: RPM-CALC1-0095
  page: 19
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    f(x)=x²−(k+1)x+k 가 x→1 에서 f(x)/(x−1)→5 를 만족할 때 상수 k 의 값.
  category: "f 를 (x−1)(x−k) 로 인수분해 → 약분 → 대입"
  M: {s: 1, k: 1, a: 2, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미정계수의 결정(0/0 꼴 · 인수분해로 약분)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f=(x−1)(x−k) 로 항상 f(1)=0 이므로 약분하면 극한값 1−k=5 → k=−4. 인수분해 한 단계·통찰 없음·M_total 4 → 출발점 ★2 에서 −1.
  tier: star_1
  mechanism_primary: "f=(x−1)(x−k) → 약분 → 1−k=5 → k=−4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$-4$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0095.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근 1 의 위치, 극한값 5, 이차식의 계수 형태를 바꿀 수 있음. 제약: 분모의 근이 f 의 근이 되도록 계수를 k 로 묶은 형태(합 k+1·곱 k)를 유지하면 인수분해가 바로 되고, 극한값은 정수 k 가 나오게 고른다."
    creative: "(1) k 를 계수에 숨기지 않고 f(x)=x²+ax+b 로 두면 「분모→0 ⇒ 분자→0」 논리가 필요해 ★2 (2) 극한값 대신 「극한이 존재하도록 하는 k」 를 물으면 항상 존재 → 함정형 ★2 (3) 분모를 (x−1)² 으로 두면 이중근 조건 ★2~3."
```

```yaml
- id: RPM-CALC1-0096
  page: 19
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    x→0 에서 (√(1+x)−√(1−x))/x 의 극한값.
  category: "분자 유리화 → 2x 약분 → 대입"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "0/0 꼴 극한(무리식 분자 유리화)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    분자 유리화로 2x/(x(√(1+x)+√(1−x))) → 2/2=1. 교과서 확인 수준의 한 단계·M_total 3 → 출발점 ★2 에서 −1.
  tier: star_1
  mechanism_primary: "분자 유리화 → 2x/(x(√(1+x)+√(1−x))) → 1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$1$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0096.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안 상수(1)와 x 의 계수(±1), 분모 x 의 계수를 바꿀 수 있음. 제약: 두 근호 안 상수가 같아야 x→0 에서 0/0 꼴이 되고, 답은 (두 계수 차)/(2√상수)."
    creative: "(1) 근호 안 상수를 다르게 두고 「극한이 존재하도록 상수 결정」으로 뒤집기(0101 골조 ★2) (2) 분모도 무리식 √(1+2x)−√(1−2x) 로 두면 이중 유리화 ★2 (3) 세제곱근 유리화로 바꾸면 곱셈 공식이 달라져 ★3."
```

```yaml
- id: RPM-CALC1-0097
  page: 19
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    보기 ㄱ x→∞ 에서 (3x+1)/(x²+2x−3)=3, ㄴ x→∞ 에서 2x²/(3x²−1)=2/3, ㄷ x→−∞ 에서 (√(x²+1)−x)/(2x)=−1 의 참·거짓. 옳은 것만 고르기. 5지선다.
  category: "ㄱ·ㄴ: 차수 비교 → ㄷ: x=−t 치환으로 √x² 부호 처리 → 선택"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∞/∞ 꼴 극한(차수 비교 참·거짓 · x→−∞ 부호 포함)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ㄱ: 분모 차수가 커서 0 → 거짓. ㄴ: 최고차 계수비 2/3 → 참. ㄷ: x=−t (t→∞) 로 두면 (√(t²+1)+t)/(−2t) → −1 → 참. x→−∞ 에서 √x²=−x 인 부호 함정 하나. 세 보기 계산·통찰 없음·M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "ㄱ: 분모 차수 큼 → 0 · ㄴ: 최고차 계수비 2/3 · ㄷ: x=−t 치환 → √(t²+1)=t 로 → −1 → ⑤"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0097.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 보기의 계수·차수와 ㄷ 의 근호 안 식을 바꿀 수 있음. 제약: ㄱ 은 분모 차수 > 분자 차수, ㄴ 은 같은 차수, ㄷ 은 x→−∞ 에서 √x²=−x 가 답을 바꾸도록(x→∞ 라면 0 이 되게) 설계한다."
    creative: "(1) ㄷ 를 x→∞ 로 바꾸면 √(x²+1)−x→0 이라 극한 0 → 정답 조합 변경 ★2 (2) 보기 하나를 ∞−∞ 꼴(√(x²+2x)−x)로 바꾸면 유리화 추가 ★2 (3) 세 보기 모두 x→−∞ 로 통일하면 부호 함정이 세 번 ★3."
```

```yaml
- id: RPM-CALC1-0098
  page: 19
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    x→∞ 에서 1/(√(x²+3x+4)−x) 의 극한값. 5지선다.
  category: "분모 유리화 → (√(x²+3x+4)+x)/(3x+4) → x 로 나눔"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∞−∞ 꼴 극한(분모의 무리식 유리화 후 ∞/∞)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분모 유리화로 (√(x²+3x+4)+x)/(3x+4), x 로 나누면 (1+1)/3=2/3. 유리화와 ∞/∞ 두 기법이 이어지는 유형 07 표준. 통찰 없음·M_total 4 로 −1 후보이나 두 기법 결합·「중요」 태그의 표준 유형이라 ★2 유지.
  tier: star_2
  mechanism_primary: "분모 유리화 → (√(x²+3x+4)+x)/(3x+4) → x 로 나눔 → 2/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0098.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안 일차항 계수(3)와 상수(4)를 바꿀 수 있음. 제약: 근호 안 최고차 계수가 1(빼는 x 와 일치)이어야 ∞−∞ 가 유한하고, 답은 2/(일차항 계수)."
    creative: "(1) 근호 안을 4x²+3x 로 두고 −2x 를 빼면 계수 맞추기 함정 ★2 (2) x→−∞ 로 바꾸면 √x²=−x 라 분모가 발산 → 극한 0, 「값이 존재하는지」 논의 ★3 (3) 분모를 √(x²+ax)−x 로 두고 극한값이 주어졌을 때 a 결정(미정계수형) ★2."
```

```yaml
- id: RPM-CALC1-0099
  page: 20
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    x→0 에서 (1/x)·(1/√(1−x) − 2/√(4−x)) 의 극한값. 5지선다.
  category: "괄호 안 통분 → 분자 무리식 유리화 → x 약분 → 대입"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∞×0 꼴 극한(통분 후 유리화)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    통분하면 분자 √(4−x)−2√(1−x), 유리화하면 (4−x)−4(1−x)=3x 로 x 가 약분되어 3/((√(4−x)+2√(1−x))·√(1−x)√(4−x)) → 3/(4·2)=3/8. 두 항을 따로 유리화해 1/2−1/8 로 가도 같다. 계산이 다단계(Mₖ 2)이지만 통찰 없음 → ★2 유지.
  tier: star_2
  mechanism_primary: "괄호 안 통분 → 분자 √(4−x)−2√(1−x) 유리화 → 3x 약분 → 3/8"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0099.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 근호 안 상수(1, 4)와 앞 계수(1, 2)를 바꿀 수 있음. 제약: x=0 에서 괄호 안이 0 이 되도록 계수/√상수 가 같아야(1/1 = 2/2) 0/0 꼴이 유지된다."
    creative: "(1) 두 항을 따로 나눠 각각 유리화하는 풀이와 통분 풀이를 비교시키면 SC 성격이 생기지만 효율 차이가 작아 ★2 유지 (2) 근호를 세제곱근으로 바꾸면 ★3 (3) 괄호 안을 세 항으로 늘리면 Mₖ 3 → 계산 마찰만 증가(질 저하 경고)."
```

```yaml
- id: RPM-CALC1-0100
  page: 20
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    x→1 에서 (x−1)/(x²+ax+b)→1/3 일 때 상수 a, b 에 대해 ab 의 값. 5지선다.
  category: "분자→0·극한값≠0 ⇒ 분모→0 → 분모 인수분해 → 나머지 근 결정 → ab"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미정계수의 결정(분자→0·극한값≠0 ⇒ 분모→0 · 분모 미정계수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    극한값이 0 이 아닌데 분자→0 이므로 분모도 0: 1+a+b=0. 분모=(x−1)(x−β) 로 두면 극한 1/(1−β)=1/3 → β=−2 → b=−2, a=1 → ab=−2. 「분모→0 ⇒ 분자→0」 의 역방향 논리가 표기·논리 함정 하나이지만 유형 09 의 표준 절차. 통찰 없음·M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "극한값 1/3≠0·분자→0 ⇒ 분모(1)=0 → 1+a+b=0 → 분모=(x−1)(x−β) → 1/(1−β)=1/3 → β=−2 → a=1, b=−2 → ab=−2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0100.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근 1 의 위치와 극한값 1/3 을 바꿀 수 있음. 제약: 극한값 1/(1−β) 에서 β 가 정수가 되도록 극한값의 역수를 정수 차이로 두고, 극한값은 0 이 아니어야 골조가 유지된다."
    creative: "(1) 극한값을 0 으로 주면 분모→0 이 강제되지 않아 「a, b 의 조건」이 부등식·범위로 바뀜 ★3 (2) 분모를 √(x+a)−b 무리식으로 바꾸면 유리화 결합(0101 골조 ★2) (3) 분자도 미정 (x²+cx+d)/(x²+ax+b) 로 두면 자유도가 남아 「ab 의 최솟값」 같은 최적화 ★3~4."
```

```yaml
- id: RPM-CALC1-0101
  page: 20
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    x→1 에서 (a√(x+1)−b)/(x−1)→√2 일 때 상수 a, b 에 대해 a²+b² 의 값.
  category: "분모→0 ⇒ 분자→0 → b=a√2 → 유리화 → a 결정 → a²+b²"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미정계수의 결정(무리식 분자의 0/0 꼴)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분자→0 에서 b=a√2. 분자 a(√(x+1)−√2) 를 유리화하면 a/(√(x+1)+√2) → a/(2√2)=√2 → a=4, b=4√2 → 16+32=48. 표준 두 단계에 무리수 계산(Mₖ 2). 통찰 없음·M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "분모→0 ⇒ 분자→0 → b=a√2 → 유리화 → a/(2√2)=√2 → a=4, b=4√2 → 48"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$48$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0101.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안 식(x+1), 극한점 1, 극한값 √2 를 바꿀 수 있음. 제약: 극한값이 a/(2√(근호값)) 이므로 a 가 유리수가 되도록 극한값에 같은 무리수를 넣고, a²+b² 가 정수가 되게(b=a√k) 설계한다."
    creative: "(1) 분모를 √(x+a)−b, 분자를 x−1 로 뒤집으면 0100+유리화 결합 ★2~3 (2) 극한값을 유리수로 주면 a 가 무리수가 되어 a²+b² 는 정수 → 계산 함정 ★2 (3) a, b 가 자연수라는 조건을 얹고 극한값을 범위로 주면 VF 성격 ★3."
```

```yaml
- id: RPM-CALC1-0102
  page: 20
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    모든 실수 x 에서 |f(x)−3x+1| ≤ (x−1)² 일 때 x→1 에서 f(x) 의 극한값.
  category: "절댓값 부등식을 양쪽 부등식으로 → 양끝 x→1 극한 일치 → 샌드위치"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수의 극한의 대소 관계(절댓값 부등식 · x→a 극한)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    |f−(3x−1)| ≤ (x−1)² 을 3x−1−(x−1)² ≤ f ≤ 3x−1+(x−1)² 로 풀면 양끝이 x→1 에서 2 → 2. 절댓값 부등식을 푸는 표기 함정 하나. lim|f−(3x−1)|=0 에서 바로 결론해도 된다. 통찰 없음·M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "|f−(3x−1)|≤(x−1)² → 3x−1−(x−1)²≤f≤3x−1+(x−1)² → 양끝 x→1 극한 2 → 2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$2$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0102.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "절댓값 안 일차식(3x−1)과 오른쪽 (x−1)² 의 중심점 1 을 바꿀 수 있음. 제약: 오른쪽 식이 극한점에서 0 이 되어야 하고, 답은 일차식의 극한점 값."
    creative: "(1) 오른쪽을 (x−1)² 대신 |x−1| 로 두어도 골조 동일 ★2 (2) 「x→1 에서 (f(x)−2)/(x−1) 의 극한」으로 바꾸면 (x−1) 로 나눌 때 부호 분리가 필요(0109 골조 ★3) (3) 조건을 |f(x)−3x+1| ≤ (x−1)²+a 로 두고 「극한이 존재하기 위한 a」 를 물으면 BW 통찰 ★3."
```

```yaml
- id: RPM-CALC1-0103
  page: 20
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    그래프가 주어진 두 함수(f: |x|>1 에서 x, −1<x<1 에서 −x, f(±1)=0 · g: x<−1 에서 −x, −1<x<1 에서 −1, x>1 에서 2−x, g(±1)=0)에 대해 x→1− 에서 f(g(x)) 의 극한 a 와 x→1+ 에서 g(f(x)) 의 극한 b 의 합.
  category: "안쪽 함수의 접근값·방향 판독 → 상수 구간이면 바깥 함숫값, 아니면 바깥 한쪽 극한 → 합"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x→1− 에서 g(x)=−1 상수임을 읽어 f(−1) 함숫값으로, x→1+ 에서 f(x)=x→1+ 를 읽어 g 의 우극한(2−x→1)으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "합성함수의 극한(그래프에서 f(g(x))·g(f(x)) 의 한쪽 극한)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    a: x→1− 에서 g(x)=−1 (상수) → f(−1)=0. b: x→1+ 에서 f(x)=x→1+ → g(1+)=2−1=1. a+b=1. 방향 추적 통찰(EQV d1)에 상수 구간·열린/닫힌 점 함정 둘. 그래프의 닫힌 점 f(−1)=0 을 놓치면 틀린다. 출발점 ★2 에서 +1.
  tier: star_3
  mechanism_primary: "x→1−: g(x)=−1(상수) ⇒ f(−1)=0 · x→1+: f(x)=x→1+ ⇒ g(1+)=1 → 0+1=1"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$1$"
  answer_source: "답지"
  figure: "crop:fig-0103.png"
  latex: latex-bank/rpm-calc1/items/0103.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "불연속점 ±1 의 함숫값(닫힌 점)과 각 구간의 직선 기울기를 바꿀 수 있음. 제약: 그래프를 다시 그려야 하고, 한쪽은 「안쪽이 상수 → 바깥 함숫값」, 다른 쪽은 「안쪽이 한쪽에서 접근 → 바깥 한쪽 극한」이 되도록 배치해야 골조가 유지된다."
    creative: "(1) f(g(x)) 의 x→1+ 도 물어 「극한 존재 여부」로 바꾸기 ★3 (2) g 의 오른쪽 가지 기울기(2−x)를 바꾸면 b 가 달라져 답이 바뀌므로 그림과 답을 함께 다시 만들기 ★3 (3) f(g(x)) 의 극한이 존재하지 않는 점의 개수로 확장 ★4."
```

```yaml
- id: RPM-CALC1-0104
  page: 20
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    y=√(2x) 위의 점 A(x, √(2x)) 에서 x 축에 내린 수선의 발 B 에 대해 f(x)=OA−OB 일 때 x→∞ 에서 f(x) 의 극한값.
  category: "OA·OB 를 x 의 식으로 → ∞−∞ 유리화 → 극한"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수의 극한의 활용(두 선분 길이의 차의 극한 · ∞−∞ 유리화)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    OA=√(x²+2x), OB=x 이므로 f=√(x²+2x)−x, 유리화하면 2x/(√(x²+2x)+x) → 1. 거리 공식 대입은 표준이라 통찰 없음·M_total 4 로 −1 후보이나 도형 해석과 ∞−∞ 유리화 두 기법이 결합된 유형 07·13 표준이라 ★2 유지.
  tier: star_2
  mechanism_primary: "OA=√(x²+2x), OB=x → f=√(x²+2x)−x → 유리화 → 2x/(√(x²+2x)+x) → 1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$1$"
  answer_source: "답지"
  figure: "crop:fig-0104.png"
  latex: latex-bank/rpm-calc1/items/0104.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "곡선 y=√(kx) 의 k 를 바꿀 수 있음(답은 k/2). 제약: 곡선이 y=√(ax²+bx) 꼴이면 OA 가 ∞−∞ 유리화가 되는 √(x²+·) 구조를 유지해야 하고, 그림 라벨은 다시 그린다."
    creative: "(1) OA−OB 대신 OA−AB 나 삼각형 OAB 둘레−2·OB 를 물으면 같은 유리화 골조 ★2 (2) 점 A 를 원 위로 옮기면 극한이 사라져 골조 변경 (3) x→0+ 로 바꾸면 0/0 유리화 ★2, 「x→0+ 에서 f(x)/x 의 극한」이면 √x 차수 논의 ★3."
```

```yaml
- id: RPM-CALC1-0105
  page: 20
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    직선 y=x 위의 점 P(a, a)(a>0) 를 지나 x 축·y 축에 평행한 두 직선이 y=x² 과 만나는 점을 각각 Q, R 라 할 때 a→1 에서 PR/PQ 의 극한값.
  category: "Q, R 좌표 → 두 거리의 절댓값식 → 인수분해로 0/0 약분 → 대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수의 극한의 활용(곡선 위 점 사이 거리의 비 · 0/0 꼴)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    Q(√a, a), R(a, a²) 이므로 PQ=|a−√a|=√a|1−√a|, PR=|a−a²|=a|1−√a|(1+√a). 비는 a(1+√a)/√a → 1·2/1=2. 절댓값을 a<1, a>1 로 나눠도 같은 식이라 부호 함정 하나. 좌표 읽기·인수분해 표준 절차, 통찰 없음·M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "Q(√a,a), R(a,a²) → PQ=|a−√a|, PR=|a−a²| → PR/PQ=a(1+√a)/√a → a→1 에서 2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$2$"
  answer_source: "답지"
  figure: "crop:fig-0105.png"
  latex: latex-bank/rpm-calc1/items/0105.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "곡선 y=x² 을 y=x³ 이나 y=√x 로, 극한점 a→1 을 두 곡선의 다른 교점으로 바꿀 수 있음. 제약: P 가 두 곡선의 교점으로 접근해야 0/0 꼴이 되고, PR/PQ 의 극한은 교점에서 곡선의 기울기와 연결된다(y=xⁿ 이면 n). 그림 라벨은 다시 그린다."
    creative: "(1) 비 대신 PQ·PR 의 곱이나 삼각형 PQR 넓이/(1−a)² 을 물으면 차수 맞추기 ★3 (2) 직선 y=x 대신 y=mx 로 두면 교점이 (m, m²) 으로 이동해 매개변수 ★3 (3) a→0+ 로 바꾸면 PR/PQ→0 이라 「a·PQ/PR」 처럼 재설계 필요 ★2."
```

### 서술형 주관식

```yaml
- id: RPM-CALC1-0106
  page: 21
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    f(x)=(x²−5x+1)/(2x²−7x+1), g(x)=√(9x²−x)−3x 에 대해 x→∞ 에서 f 의 극한과 g 의 극한의 합.
  category: "f: 최고차 계수비 → g: ∞−∞ 유리화 → 합"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "극한값 계산(∞/∞ 꼴 + ∞−∞ 꼴 · 서술형)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f→1/2. g 는 유리화로 −x/(√(9x²−x)+3x) → −1/6. 합 1/3. 두 표준 계산을 나란히 쓰는 서술형이라 과정 서술이 목적이지 난이도 신호는 아니다. 통찰 없음·M_total 4 → 서술형 출발점 ★3 에서 −1.
    [분류 이슈] 서술형 구역(★3 출발)이나 유형 06·07 기본 계산 두 개의 합 → ★2. 1단 차이. 기록만.
  tier: star_2
  mechanism_primary: "f: 최고차 계수비 1/2 · g: 유리화 → −x/(√(9x²−x)+3x) → −1/6 → 합 1/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0106.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f 의 계수(답은 최고차 계수비)와 g 의 근호 안 계수(9x²−x → 답 −(일차 계수)/(2·3))를 바꿀 수 있음. 제약: g 의 근호 안 최고차 계수가 빼는 항 계수의 제곱(9=3²)이어야 유한하고, 합이 깔끔한 분수가 되게 맞춘다."
    creative: "(1) g 를 x→−∞ 로 바꾸면 √x²=−x 라 발산 → 「극한이 존재하는 쪽만」 판단 ★3 (2) f·g 곱이나 f/g 로 바꾸면 결합 계산 ★2 (3) g 의 근호 안 최고차 계수를 빼는 항과 어긋나게 두고 「수렴하도록 하는 계수」로 뒤집기(0107 골조 ★3)."
```

```yaml
- id: RPM-CALC1-0107
  page: 21
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    x→∞ 에서 √(x²+x+1)−(ax−1)→b 일 때 상수 a, b 에 대해 a+b 의 값.
  category: "수렴 조건 → 최고차 상쇄로 a=1 → 유리화 → b → a+b"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미정계수의 결정(∞−∞ 꼴 극한값이 존재할 조건 · 서술형)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    √(x²+x+1)−ax 가 수렴하려면 a=1 (a<1 이면 +∞, a>1 이면 −∞ — 서술형에서 이 논증이 채점 요소·T-범위). 그러면 √(x²+x+1)−x+1 → 1/2+1=3/2=b. a+b=5/2. 최고차 상쇄 논리는 유형 09 표준 절차라 통찰 없음, M_total 7 → 서술형 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "수렴 ⇒ √(x²+x+1)−ax 의 최고차 상쇄 → a=1 → 유리화 → 1/2 → b=3/2 → a+b=5/2"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{5}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0107.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안 일차·상수항(x+1)과 빼는 상수(−1)를 바꿀 수 있음. 제약: 근호 안 최고차 계수 k² 에 대해 a=k 가 강제되고, b=(일차 계수)/(2k)+빼는 상수 로 정리되게 한다."
    creative: "(1) x→−∞ 로 바꾸면 a=−1 이 되어 부호 논증이 핵심 ★3 (2) ax−1 대신 ax²+bx 처럼 차수를 올려 「수렴 불가」 판단을 섞으면 ★3~4 (3) 근호를 두 개(√(x²+x)−√(x²−ax)) 로 두면 유리화 두 번 ★3."
```

```yaml
- id: RPM-CALC1-0108
  page: 21
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    다항함수 f 가 x→0+ 에서 (x·f(1/x)−1)/(3−x)→2, x→2 에서 f(x)/(x²−3x+2)→a 를 만족할 때 f(a) 의 값.
  category: "1/x=t 로 x→0+ 를 t→∞ 로 전환 → f(t)/t 극한으로 차수·계수 → x→2 조건으로 f(2)=0 → a → f(a)"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x→0+ 에서 x·f(1/x) 를 t=1/x 로 옮기면 t→∞ 에서 f(t)/t 가 되어 첫 조건이 「f 는 일차·최고차 계수 7」 로 해석됨"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "다항함수의 결정(x→0+ 의 x·f(1/x) 조건 · 1/x 치환 + x→a 인수 조건)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    첫 조건에서 분모→3 이므로 x·f(1/x)→7, t=1/x 로 f(t)/t→7 → f=7x+c. 둘째 조건은 분모가 x=2 에서 0 이므로 f(2)=0 → c=−14, f=7(x−2), 극한값 a=7/(2−1)=7 → f(7)=35. x→0+ 를 t→∞ 로 옮기는 해석(EQV d1) 한 단계와 「a 가 극한값 자체」인 표기 함정. 단계가 7개 이상(Mₛ 3)·M_total 8 → 서술형 출발점 ★3 유지(통찰 하나뿐이라 +1 은 아님).
  tier: star_3
  mechanism_primary: "t=1/x → x·f(1/x)=f(t)/t → lim f(t)/t=7 → f=7x+c → x→2 에서 분모 0 ⇒ f(2)=0 → f=7(x−2) → a=7 → f(7)=35"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$35$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0108.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫 조건의 분모(3−x)·극한값 2·빼는 상수 1, 둘째 조건의 분모 근(1, 2)을 바꿀 수 있음. 제약: (극한값×분모 상수+빼는 상수) 가 최고차 계수가 되고, 둘째 분모의 근 중 하나가 f 의 근이 되게 하며 a 가 f 의 정의역 안 정수가 되도록 맞춘다."
    creative: "(1) x²·f(1/x) 로 바꾸면 f 는 이차 → 계수가 하나 늘어 ★3 (2) 둘째 조건을 x→1 로 두면 분모 (x−1)(x−2) 의 다른 근 사용 → 같은 골조 ★3 (3) 첫 조건을 x→0− 로 주면 t→−∞ 라 홀수 차수 부호 논의 추가 ★4 후보."
```

```yaml
- id: RPM-CALC1-0109
  page: 21
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    모든 실수 x 에서 x²−1 ≤ f(x) ≤ 3x²−4x+1 일 때 x→1 에서 f(x)/(x−1) 의 극한값.
  category: "x>1 과 x<1 로 나눠 (x−1) 로 나눔(부호 반전) → 양끝 극한 일치 → 좌·우극한 일치"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수의 극한의 대소 관계(x→a 에서 (x−a) 로 나눈 극한 · 부호 분리 · 서술형)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    양끝이 모두 (x−1) 인수를 가지므로 x>1 에서 x+1 ≤ f/(x−1) ≤ 3x−1, x<1 에서 부등호가 반전되지만 양끝 극한은 모두 2 → 좌·우극한 2 → 2. 부호에 따른 반전 논증(T-부호)이 서술형 채점 요소. 케이스는 표준 부호 분기라 통찰 없음, M_total 6 → 서술형 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "x>1: 부등식을 x−1(>0) 로 나눔 → x+1 ≤ f/(x−1) ≤ 3x−1 → 2 · x<1: 부등호 반전해도 양끝 2 → 좌·우 일치 → 2"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$2$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0109.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "양끝 이차식의 계수를 바꿀 수 있음. 제약: 양끝 모두 x=1 에서 0 이 되고(인수 (x−1) 공유) (x−1) 로 나눈 뒤 극한이 같아야 하며, 왼쪽 ≤ 오른쪽이 모든 실수에서 성립하는지(차가 항상 ≥0) 확인한다."
    creative: "(1) 분모를 (x−1)² 으로 두면 양끝 극한이 달라져 「존재하지 않음」 논증 ★3 (2) 극한점을 양끝의 다른 공통근으로 옮기기 ★3 (3) 부등식을 |f(x)−(x²−1)| ≤ (x−1)² 절댓값형으로 주면 0102 골조와 결합 ★3."
```

### 실력 Up

```yaml
- id: RPM-CALC1-0110
  page: 21
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    가우스 기호 [x] 를 포함한 다섯 한쪽 극한(x/[x] · [x]/x · [x−2]/(x−2) · (x+1)/[x+1] · [x]²/[x²−1]) 중 극한값이 가장 큰 것. 5지선다.
  category: "각 보기에서 가우스 안 식의 접근값·방향 → 정수값 확정 → 극한 계산 → 비교"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "x→0± 에서 [x]=−1 또는 0, x−2→−2− 에서 [x−2]=−3, x²−1→−1+ (x²>0 이므로 위에서 접근) 에서 [x²−1]=−1 로 정수 경계 접근 방향을 읽음 — ⑤ 의 위쪽 접근이 비직관적"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "가우스 기호를 포함한 함수의 극한(한쪽 극한값 비교)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ① x→0− 에서 [x]=−1 → 0 ② [x]=0 → 0 ③ [x−2]=−3, 분모→−2 → 3/2 ④ [x+1]=1 → 1 ⑤ [x]²=1, x²−1→−1+ 이므로 [x²−1]=−1 → −1. 최대는 ③. 방향 판독 통찰(EQV d2 · ⑤ 가 핵심)에 경계·표기 함정 둘. 실력 Up 출발점 ★4 이나 통찰 하나·M_total 6·저노출 유형 없음 → ★3.
    [분류 이슈] 실력 Up(★4 출발) vs 판정 ★3 — 통찰 EQV d2 하나뿐이고 SC/VF/SYM/XU 부재. 1단 차이이나 애매해 기록.
  tier: star_3
  mechanism_primary: "각 보기: 가우스 안 식의 접근값·방향 → 정수값 확정 → 극한 계산(0·0·3/2·1·−1) → ③"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0110.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 보기의 평행이동량(x−2, x+1)과 ⑤ 의 안쪽 식(x²−1)을 바꿀 수 있음. 제약: 안쪽 식이 정수에 접근하되 방향이 부호를 결정하도록(x², −x² 등) 설계하고, 다섯 값이 서로 달라 최대가 유일해야 한다."
    creative: "(1) 「극한값이 존재하는 것의 개수」로 바꾸면 양쪽 극한 검사 ★3 (2) ⑤ 를 [x]/[x²+x] 처럼 분모도 가우스로 두면 0 나눗셈 회피 논의 ★4 (3) x→n (정수 일반) 으로 매개화하면 Mₐ 상승 ★4."
```

```yaml
- id: RPM-CALC1-0111
  page: 21
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: ["평가원 기출"]
  category_type: "실력 Up"
  summary: |
    x→∞ 에서 (f(x)−4x³+3x²)/(x^(n+1)+1)→6, x→0 에서 f(x)/xⁿ→4 인 자연수 n 이 존재하는 모든 다항함수 f 에 대해 f(1) 의 최댓값. 5지선다.
  category: "두 극한 조건 → f 의 최고차항·최저차항 구조 → n 에 따른 케이스 → 각 f(1) → 최댓값"
  M: {s: 3, k: 2, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x→∞ 조건을 「f−4x³+3x² 는 (n+1)차·최고차 계수 6」 으로, x→0 조건을 「f 의 최저차항은 4xⁿ」 으로 해석해 f 의 위·아래 구조를 동시에 고정"
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "n=1 (f 는 삼차·−4x³ 이 최고차와 겹침), n=2 (f 는 삼차·최고차 4+6=10), n≥3 (f=6x^(n+1)+4xⁿ) 이 서로 다른 f 형태를 주는 독립 케이스 — 모두 따져 f(1)=11, 14, 10"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "다항함수의 결정(차수 매개변수 n 의 존재 조건에 따른 케이스 분기 · 최댓값)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    n=1: f=4x³+3x²+bx+c, f/x→4 → f=4x³+3x²+4x, f(1)=11. n=2: f=10x³+(b−3)x²+cx+d, f/x²→4 → f=10x³+4x², f(1)=14. n≥3: f=6x^(n+1)+4xⁿ, f(1)=10. 최댓값 14. 조건 해석(EQV d1)과 n 케이스 분기(MI d2) 두 통찰·M_total 10. 실력 Up 출발점 ★4 유지(통찰 2개로 +1 후보이나 SC/VF/SYM/XU 가 없어 ★5 불가).
  tier: star_4
  mechanism_primary: "x→∞ 조건 → f−4x³+3x² 는 (n+1)차·최고차 6 · x→0 조건 → f 의 최저차항 4xⁿ → n=1,2,≥3 케이스별 f 결정 → f(1)=11,14,10 → 최댓값 14"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0111.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "빼는 다항식 −4x³+3x² 의 계수, 극한값 6·4, 분모 차수 n+1 을 바꿀 수 있음. 제약: 빼는 다항식의 차수(3)가 케이스 경계를 만들므로 n=1, 2 에서 최고차항이 겹치는 구조를 유지하고, 각 케이스의 f(1) 이 서로 달라 최댓값이 유일해야 한다."
    creative: "(1) 「f(1) 의 최솟값」이나 「가능한 f(1) 의 합」으로 바꾸면 케이스 전수 확인이 더 강제됨 ★4 (2) 빼는 다항식을 이차로 낮추면 케이스가 n=1, ≥2 로 줄어 ★3 (3) n 대신 f 의 차수를 묻거나 f(x)/xⁿ 조건을 x→0+ 한쪽으로 주면 골조 유지 ★4."
```

```yaml
- id: RPM-CALC1-0112
  page: 21
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: ["교육청 기출"]
  category_type: "실력 Up"
  summary: |
    O(0,0), A(0,2), B(−2,2), C(−2,0), P(t,0)(t>0) 에 대해 정사각형 OABC 와 직각삼각형 AOP 의 넓이를 동시에 이등분하는 직선 l 의 y 절편 f(t) 일 때 t→0+ 에서 f(t) 의 극한값. 5지선다.
  category: "정사각형 이등분 ⇒ 중심 통과 → 기울기 m 으로 l 설정 → 삼각형 이등분 조건 → m 의 이차방정식 → 유효근 선택 → f(t)=1+m → 극한"
  M: {s: 3, k: 3, a: 2, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "정사각형의 넓이를 이등분하는 직선은 대칭 중심 (−1, 1) 을 지난다 — 이 대칭성으로 l 의 자유도를 기울기 하나로 줄임"
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "삼각형 AOP 이등분 조건을 l 과 변 OA·AP 의 교점으로 잘린 작은 삼각형 넓이 = t/2 라는 m 의 방정식 (1−m)²=mt+2 로 옮김"
    - step: 3
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "이차방정식 m²−(2+t)m−1=0 의 두 근 중 l 이 변 OA 안쪽을 지나는 −1<m<1 조건으로 큰 근을 기각하고 작은 근만 채택"
  insight_count: 3
  depth_score: 1.33
  type_id: null
  type_hint: "함수의 극한의 활용(넓이 이등분 직선의 y 절편 f(t) 의 극한 · 정사각형 중심 · 이차방정식 근 선택)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    l: y=m(x+1)+1 (중심 통과). AP: y=2−(2/t)x 와의 교점 x 좌표 t(1−m)/(mt+2), 잘린 삼각형 넓이 ½(1−m)·t(1−m)/(mt+2)=t/2 → (1−m)²=mt+2 → m=[(2+t)−√((2+t)²+4)]/2 (−1<m<1 인 근). f(t)=1+m → t→0+ 에서 1+(2−2√2)/2=2−√2. 대칭 중심(SYM d2)·넓이 조건의 방정식화(RT d1)·근 기각(VF d1) 세 통찰에 M_total 10. 실력 Up 출발점 ★4 에서 통찰 3개·VF·SYM 으로 ★5 후보이나 시판에 흔한 기출(novelty 0)이라 ★4 유지.
    [분류 이슈] ★4 / ★5 후보 — 통찰 3(SYM·RT·VF)로 ★5 필요조건은 충족하나 novelty 0. 기록만.
  tier: star_4
  mechanism_primary: "정사각형 이등분 ⇒ l 이 중심(−1,1) 통과 → l: y=m(x+1)+1 → 삼각형 AOP 이등분 → (1−m)²=mt+2 → m=[(2+t)−√((2+t)²+4)]/2 (−1<m<1 인 근) → f(t)=1+m → t→0+: 2−√2"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: "②"
  answer_source: "답지"
  figure: "crop:fig-0112.png"
  latex: latex-bank/rpm-calc1/items/0112.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정사각형 한 변(2)과 A 의 높이를 바꿀 수 있음(A 는 정사각형 꼭짓점이어야 두 도형이 붙음). 제약: l 이 변 OA 와 AP 를 지나는 배치(−1<m<1)를 유지해야 이등분 식이 같고, 극한값은 이차방정식 근의 무리수 꼴이므로 선택지도 함께 재계산. 그림 라벨은 다시 그린다."
    creative: "(1) 정사각형을 직사각형으로 바꿔도 중심 통과 골조 유지 ★4 (2) 삼각형 대신 두 정사각형을 이등분하면 두 중심을 잇는 직선으로 통찰이 줄어 ★2~3 (3) t→∞ 의 극한을 물으면 l 이 x 축과 평행에 가까워지는 다른 근 거동 → 근 선택이 뒤집힐 수 있어 VF 강화 ★4~5 후보."
```

## 표본 판정 요약 (39문)

- ★ 분포: ★1 6 · ★2 17 · ★3 14 · ★4 2 · ★5 0
- 통찰형 13 · 절차형 26 · premium 0
- 통찰 유형: I-EQV 8(합성함수·가우스 방향 추적 6 · 조건 해석 2) · I-BW 2 · I-RT 2 · I-MI 1 · I-CON 1 · I-SYM 1 · I-VF 1
- type_hint 상위: 「다항함수의 결정」 6 · 「함수의 극한의 활용」 6 · 「함수의 극한의 대소 관계」 6 · 「합성함수의 극한」 4 · 「미정계수의 결정」 4 · 그 밖에 「가우스 기호를 포함한 함수의 극한」 2 · 「극한값을 이용한 함수의 극한값」 2 · 단독 7(극한값이 존재할 조건 · 그래프 판독 · 구간별 좌·우극한 · 성질 참·거짓 · 0/0 유리화 · ∞/∞ 참·거짓 · ∞×0 · ∞−∞ · 극한값 계산 서술형)
- 구역별 ★: 유형 10 (2·2·2·3) · 유형 11 (1·1·2·3) · 유형 UP 12 (3·3) · 유형 UP 13 (2·3·3) · 시험에 꼭 나오는 문제 ★1 4 / ★2 11 / ★3 4 · 서술형 주관식 (2·3·3·3) · 실력 Up (3·4·4)
- 그림: 11문(`crop:fig-0082.png` · `fig-0083` · `fig-0084` · `fig-0086` · `fig-0088` · `fig-0090` · `fig-0092` · `fig-0103` · `fig-0104` · `fig-0105` · `fig-0112`)
- 전사 답 확인 필요: 없음(39문 모두 골조 계산이 전사본 answer 와 일치)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다(모두 1단 차이 · 2단 이상 드리프트 없음).

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-CALC1-0078 | 유형 11 대표문제이나 x² 으로 나누는 한 단계뿐·M_total 4 → ★1. 교과서 01-6 확인 문제와 동일 수준 | ★1 / ★2 |
| RPM-CALC1-0084 | 유형 UP 13 대표문제이나 넓이 공식 대입·비 정리뿐(절차형 M_total 5) → ★2. UP 신호(★3)와 1단 차이 | ★2 / ★3 |
| RPM-CALC1-0106 | 서술형 구역(★3 출발)이나 유형 06·07 기본 계산 두 개의 합(M_total 4) → ★2. 서술형은 과정 서술 신호이지 난이도 신호가 아님 | ★2 / ★3 |
| RPM-CALC1-0110 | 실력 Up(★4 출발)이나 통찰 EQV d2 하나·M_total 6·SC/VF/SYM/XU 부재 → ★3 | ★3 / ★4 |
| RPM-CALC1-0112 | 통찰 3(SYM·RT·VF)로 ★5 필요조건 충족하나 시판에 흔한 교육청 기출(novelty 0) → ★4 유지 | ★4 / ★5 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 따로 세울 유형: 「합성함수의 극한(그래프)」(0082·0083·0092·0103 — 안쪽 함수의 접근 방향 판독이 공통 통찰이며 base ★3 후보) · 「가우스 기호를 포함한 극한」(0090·0110 — 같은 방향 판독 통찰이지만 정수 경계 처리가 별도 함정이라 합성함수와 분리) · 「다항함수의 결정」(0074~0077·0108·0111 — x→∞ 차수 조건 + x→a 인수 조건 골조. 최저 차수 논증(0077)·1/x 치환(0108)·차수 매개변수 케이스(0111)를 소분류 또는 ★ 상향 변형으로) · 「함수의 극한의 활용(도형)」(0084~0086·0104·0105·0112 — 대부분 절차형 ★2~3 이나 0085 의 개수 함수·0112 의 이등분 직선처럼 통찰형이 섞여 base ★ 를 하나로 두기 어려움. 「길이·넓이 식 세우기」 ★2 와 「개수 함수·조건 직선」 ★3~4 로 나누는 것을 권장).
- 통합해도 될 유형: 「0/0 유리화」(0096) · 「∞/∞ 차수 비교」(0097) · 「∞−∞ 유리화」(0098) · 「∞×0 통분」(0099) · 「극한값 계산 서술형」(0106)은 하나의 「극한값 계산」 대분류 아래 꼴별 소분류로 충분(모두 절차형 ★1~2). 「미정계수의 결정」(0095·0100·0101·0107)과 「다항함수의 결정」은 「분모→0 ⇒ 분자→0」 논리를 공유하지만 차수 결정 단계가 있는 쪽(다항함수)을 별도 유지하는 편이 base ★ 분리에 유리(미정계수 ★2 · 다항함수 ★2~3).
- 「함수의 극한의 대소 관계」(0078~0081·0102·0109)는 base ★1~2 이나 두 함수의 합·차 부등식(0081 · CON) 과 (x−a) 로 나누는 부호 분리(0109)는 ★3 변형 슬롯으로 표시해 둘 것.
- 「극한값을 이용한 함수의 극한값」(0091·0093)은 이 범위에서 절차형 ★2 로만 나타났고, 「함수의 극한에 대한 성질 참·거짓」(0094)은 반례 구성을 통찰(BW)로 볼지 카탈로그 설계 때 결정 필요(이 파일은 통찰로 세어 ★3).
