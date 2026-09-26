---
name: mechanism-데이터-RPM-GEO-06-p1
description: RPM 기하 06 벡터의 성분과 내적(1/4 · 교과서 06-1~06-5) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 기하 (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-geo
  section: 06 벡터의 성분과 내적
  unit_code: GEO-06
  part: "1/4"
  extract_range: "85~87쪽 · 0532~0567"
  total_problems: 36
  unit_total: 143
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-geo/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-geo/items/<id>.tex
  image_source: latex-bank/rpm-geo/figures/ (crops.json)
---

# RPM 기하 · 06 벡터의 성분과 내적 (1/4) 정독 데이터 (v1.0)

이 파일은 RPM 기하 06 벡터의 성분과 내적 단원의 첫 범위(85~87쪽 · 0532~0567 · 36문항)를 다룬다. 전부 「교과서」 구역이다 — 교과서 06-1 위치벡터(5문 · 위치벡터 분해 · 내분점·중점 · 무게중심 증명) · 06-2 평면벡터의 성분(13문 · 단위벡터↔성분 · 크기 · 서로 같을 조건 · 성분 연산 · 평행 조건 · 두 점을 잇는 벡터) · 06-3 공간벡터의 성분(11문 · 06-2 와 같은 골조를 세 성분으로) · 06-4 벡터의 내적(5문 · 크기·사잇각 정의 · 성분 계산) · 06-5 두 벡터가 이루는 각(2문 · cosθ). RPM 의 벤더 난이도 신호는 구역이 곧 층이다 — 교과서(★1 출발) / 유형(대표문제 · 난이도 하~상) / 유형 UP / 시험에 꼭 나오는 문제 / 서술형 / 실력 Up. 이 범위는 level·tag 가 전혀 없는 교과서 구역이라 36문 모두 ★1 출발이고, 단계별 라벨링에서 통찰이 잡힌 문항이 없어 ★ 조정도 0건이다(M_total 은 4 가 31문 · 5 가 4문 · 6 이 1문). 그림 문항은 없다(figure 전부 none). 전사 답 36건은 모두 재계산과 일치했다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 절차형 ★1 문항에도 `mechanism_primary`(풀이 골조 사슬) · `insights[]`(절차형은 빈 배열) · `variation_notes.numeric`(바꿔도 되는 수와 제약) · `variation_notes.creative`(골조를 유지한 변형과 ★ 가 변하는 지점)를 모두 채웠다. 이 구역의 숫자 변형 제약은 크기가 정수나 간단한 근호로 떨어질 것(피타고라스 수·√(정수)), 내적·cosθ 가 간단한 유리수·근호로 정리될 것, 평행 조건에서 이차방정식의 두 근 중 하나를 배제하는 조건(k≠1 류)을 발문에 명시할 것이다. ★ 가 오르는 지점은 성분을 매개변수로 감추기(Mₐ 2) · 결과(크기·내적·각)를 주고 미지수를 역으로 묻기(I-BW) · 평행·수직·같은 크기 조건을 결합하기(I-CON) · 위치벡터 항등식의 역방향 증명으로 표시했다.

## 문항 데이터

### 교과서 06-1 위치벡터

```yaml
- id: RPM-GEO-0532
  page: 85
  vendor_label: "교과서 06-1 위치벡터"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    세 점 A, B, C 의 위치벡터가 a, b, c 일 때 ⑴ CA ⑵ AB+AC ⑶ 2AB-BC 를 a, b, c 로 나타내기.
  category: "위치벡터 정의(PQ = q-p) → 대입 → 동류항 정리"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "위치벡터 — 두 점을 잇는 벡터를 위치벡터로 나타내기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    PQ = (Q 의 위치벡터) - (P 의 위치벡터) 를 세 번 적용하고 동류항을 모으면 끝. ⑴ a-c ⑵ (b-a)+(c-a) = -2a+b+c ⑶ 2(b-a)-(c-b) = -2a+3b-c. 함정은 끝점-시작점 순서 하나(T-부호). 소문항 셋이라 단계 수만 조금 늘어 M_total 5. 교과서 구역·통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "PQ = q - p 정의 → 각 벡터 대입 → 동류항 정리 → a, b, c 의 일차결합"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '(1) $\vec{a}-\vec{c}$ (2) $-2\vec{a}+\vec{b}+\vec{c}$ (3) $-2\vec{a}+3\vec{b}-\vec{c}$'
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-geo/items/0532.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "소문항의 계수(2AB-BC → 3AB+2CA, AB-2BC+CA)와 점 이름의 순서(CA → AC, BC → CB)를 바꿈. 제약: 결과 계수가 정수이고 세 소문항이 서로 다른 골조(단일 벡터 · 합 · 계수 곱의 차)를 유지하도록 함."
    creative: "(1) 네 점 A, B, C, D 로 늘려 AB+CD, AC-BD 같은 네 위치벡터 결합(★1) (2) 결과 벡터를 주고 'xAB+yBC 로 나타낼 때 x, y' 를 묻는 역방향(★2 · 계수 비교) (3) 결합 결과가 영벡터가 되는 조건에서 점의 위치 관계(중점·평행사변형)를 읽게 하기(★2 · I-RT d1)."
```

```yaml
- id: RPM-GEO-0533
  page: 85
  vendor_label: "교과서 06-1 위치벡터"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    두 점 A, B 의 위치벡터가 a, b 일 때, 선분 AB 를 3:2 로 내분하는 점 P 의 위치벡터 p 를 a, b 로 나타내기.
  category: "내분점 공식 p = (n a + m b)/(m+n) → m=3, n=2 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "내분점·중점의 위치벡터"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    m:n 내분점 공식에 m=3, n=2 를 넣으면 (2a+3b)/5 한 줄. 함정은 분자에서 a 에 n, b 에 m 이 붙는 순서 하나(T-표기). 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "3:2 내분 → p = (2a+3b)/5"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{2}{5}\vec{a}+\dfrac{3}{5}\vec{b}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0533.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "내분비(3:2 → 1:2, 2:5, 4:1)를 바꿈. 제약: 비를 서로소 자연수로 두고 분모 m+n 이 답에 그대로 남게 함(약분되면 순서 함정이 흐려짐). 0534 처럼 비가 뒤바뀐 짝을 함께 두면 순서 검산이 됨."
    creative: "(1) 외분점(3:2 외분 → p = -2a+3b)으로 바꿔 부호 함정 추가(★1~2) (2) p 를 주고 내분비 m:n 을 역으로 묻기(★2) (3) OP = (1-t)a + t b 의 t 를 매개변수로 두고 P 가 선분 AB 위에 있을 조건 0≤t≤1 을 읽게 하기(★2 · Mₐ 2)."
```

```yaml
- id: RPM-GEO-0534
  page: 85
  vendor_label: "교과서 06-1 위치벡터"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    두 점 A, B 의 위치벡터가 a, b 일 때, 선분 AB 를 2:3 으로 내분하는 점 Q 의 위치벡터 q 를 a, b 로 나타내기.
  category: "내분점 공식 q = (n a + m b)/(m+n) → m=2, n=3 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "내분점·중점의 위치벡터"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    m:n 내분점 공식에 m=2, n=3 을 넣으면 (3a+2b)/5 한 줄. 0533 과 비가 뒤바뀐 짝이라 두 답의 계수가 서로 바뀌는지가 순서 검산(T-표기). 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "2:3 내분 → q = (3a+2b)/5"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{3}{5}\vec{a}+\dfrac{2}{5}\vec{b}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0534.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "내분비(2:3 → 1:3, 3:4, 1:4)를 바꿈. 제약: 0533 과 같은 두 수의 순서만 바꾼 짝으로 두면 '계수가 뒤집힌다' 는 학습 효과가 유지됨. 분모가 약분되지 않게 함."
    creative: "(1) 0533 의 P 와 이 Q 에 대해 PQ 를 a, b 로 나타내기(두 내분점의 차 → (b-a)/5 · ★1~2) (2) P, Q 가 AB 를 삼등분함을 보이기(★2) (3) 내분비를 t:(1-t) 로 두고 Q 의 자취가 선분임을 설명하게 하기(★2 · Mₐ 2)."
```

```yaml
- id: RPM-GEO-0535
  page: 85
  vendor_label: "교과서 06-1 위치벡터"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    두 점 A, B 의 위치벡터가 a, b 일 때, 선분 AB 의 중점 M 의 위치벡터 m 을 a, b 로 나타내기.
  category: "중점 = 1:1 내분 → m = (a+b)/2"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "내분점·중점의 위치벡터"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    중점은 1:1 내분점이므로 (a+b)/2 한 줄. 좌표의 중점 공식과 같은 꼴이라 함정이 거의 없다(T-표기 0~1). 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "중점 = 1:1 내분 → m = (a+b)/2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{\vec{a}+\vec{b}}{2}$'
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-geo/items/0535.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "바꿀 수가 없는 공식 문항. 대신 대상을 바꿈: 세 점 A, B, C 로 삼각형 세 변의 중점 위치벡터, 또는 중점 M 과 원점이 아닌 기준점 O' 을 쓰는 설정. 제약: 기준점을 바꿔도 결과가 (a+b)/2 꼴로 같음을 유지."
    creative: "(1) 중점 M 의 위치벡터 m 이 주어졌을 때 b 를 a, m 으로 나타내기(b = 2m-a · 역방향 ★1~2) (2) 평행사변형 ABCD 의 대각선 중점이 일치함을 위치벡터로 보이기(★2) (3) AB 의 중점과 CD 의 중점을 잇는 벡터가 (AC+BD)/2 임을 보이기(★2 · I-CON d1 후보)."
```

```yaml
- id: RPM-GEO-0536
  page: 85
  vendor_label: "교과서 06-1 위치벡터"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    삼각형 ABC 의 무게중심 G 에 대해 네 점의 위치벡터가 a, b, c, g 일 때 ⑴ g 를 a, b, c 로 나타내기 ⑵ GA+GB+GC = 0 임을 보이기.
  category: "무게중심 = 중선의 2:1 내분 → g = (a+b+c)/3 → GA = a-g 대입 → 합 = (a+b+c)-3g = 0"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각형의 무게중심의 위치벡터"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴ 변 BC 의 중점 M 의 (b+c)/2 를 AM 의 2:1 내분점 공식에 넣으면 (a+b+c)/3. ⑵ GA = a-g, GB = b-g, GC = c-g 를 더하면 (a+b+c)-3g = 0. 증명이지만 교과서 정리의 표준 유도를 그대로 따라가면 되고 ⑴ 이 ⑵ 의 도구를 마련해 준다. 일반 삼각형의 기호 증명이라 Mₐ 2 · M_total 6 이나 통찰 없음·교과서 구역 → ★1(서술형 구역이면 ★2 출발).
  tier: star_1
  mechanism_primary: "BC 중점 (b+c)/2 → AM 의 2:1 내분 → g = (a+b+c)/3 → GA+GB+GC = (a+b+c)-3g = 0"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '풀이 참조 ((1) $\vec{g}=\dfrac{\vec{a}+\vec{b}+\vec{c}}{3}$)'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0536.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "바꿀 수가 없는 항등식 문항. 대신 ⑵ 의 대상을 바꿈: 임의의 점 P 에 대해 PA+PB+PC = 3PG 임을 보이기, 또는 GA+GB = -GC 꼴. 제약: 무게중심 정의(중선의 2:1 내분)를 결과로 쓰지 않고 유도하게 할지 발문에 명시."
    creative: "(1) 'PA+PB+PC = 0 이면 P 는 무게중심' 역방향 증명(★2 · I-BW d1) (2) 사각형 ABCD 에서 네 변의 중점을 이은 사각형의 두 대각선 중점이 일치함을 보이기(★2 · 중점 위치벡터 결합) (3) 외심 O 를 원점으로 두고 OH = OA+OB+OC 인 점 H 가 수심임을 내적으로 보이기(★3~4 · I-XU 수직 조건 결합)."
```

### 교과서 06-2 평면벡터의 성분

```yaml
- id: RPM-GEO-0537
  page: 85
  vendor_label: "교과서 06-2 평면벡터의 성분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    e1=(1,0), e2=(0,1) 일 때 a = 2e1-3e2 를 성분으로 나타내기.
  category: "단위벡터 일차결합 → 계수 읽기 → (2, -3)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평면벡터의 성분 표시 — 단위벡터와 성분의 상호 변환"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    e1, e2 의 계수가 곧 x성분·y성분이므로 (2, -3) 한 줄. 함정은 -3 의 부호 하나(T-부호). 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "a = 2e1 - 3e2 → 계수 (2, -3)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$(2,\,-3)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0537.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수(2, -3 → -5, 7 · 1/2, 4)를 바꿈. 제약: 정수·간단한 분수만. 한 계수가 0 이면 항이 사라지는 꼴(0551 골조)이 되므로 별도 문항으로 취급."
    creative: "(1) 항 순서를 바꿔 -3e2+2e1 로 주기(★1) (2) 2e1-3e2 = (x, y) 일 때 x+y 또는 크기(★1) (3) 단위벡터를 (1,0),(0,1) 이 아닌 u=(1,1), v=(1,-1) 로 두고 2u-3v 의 성분 → 일차결합 계수 비교로 확장(★2 · I-RT d1)."
```

```yaml
- id: RPM-GEO-0538
  page: 85
  vendor_label: "교과서 06-2 평면벡터의 성분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    e1=(1,0), e2=(0,1) 일 때 b = -e1-5e2 를 성분으로 나타내기.
  category: "단위벡터 일차결합 → 계수 읽기 → (-1, -5)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평면벡터의 성분 표시 — 단위벡터와 성분의 상호 변환"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    -e1 의 계수 -1 을 읽는 것이 전부. (-1, -5) 한 줄. 함정은 생략된 계수 1 과 두 음의 부호(T-표기·T-부호 → 1개로 셈). 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "b = -e1 - 5e2 → 계수 (-1, -5)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$(-1,\,-5)$'
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-geo/items/0538.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수(-1, -5 → 1, -1 · -1, 0 · 3, -1)를 바꿈. 제약: 계수 ±1 이 적어도 하나 들어가 '생략된 1' 읽기가 유지되게 함."
    creative: "(1) e1-e2 처럼 두 계수가 모두 ±1 인 꼴(★1) (2) -e1-5e2 의 크기 √26 까지 묻기(★1) (3) -e1-5e2 와 평행한 단위벡터를 성분으로(★2 · 크기로 나누기)."
```

```yaml
- id: RPM-GEO-0539
  page: 85
  vendor_label: "교과서 06-2 평면벡터의 성분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    e1=(1,0), e2=(0,1) 일 때 a = (3, -2) 를 e1, e2 로 나타내기.
  category: "성분 → 단위벡터 일차결합 3e1-2e2"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평면벡터의 성분 표시 — 단위벡터와 성분의 상호 변환"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (a1, a2) = a1 e1 + a2 e2 의 역방향 한 줄. 3e1-2e2. 함정은 -2 의 부호(T-부호). 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "(3, -2) → 3e1 - 2e2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$3\vec{e_1}-2\vec{e_2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0539.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "성분(3, -2 → -7, 1 · 0, 6 · 2, 2)을 바꿈. 제약: 성분 0 이 있으면 그 항을 생략하는 꼴(0553 골조)이 되니 의도할 때만 씀."
    creative: "(1) (3, -2) 를 e1, e2 로 나타낸 뒤 e1 계수와 e2 계수의 곱(★1) (2) a=(3,-2) 를 두 벡터 u=(1,1), v=(1,-1) 의 일차결합으로 나타내기(★2 · 연립 계수 비교) (3) 성분이 삼각함수(cosθ, sinθ)인 단위벡터의 일차결합(★2 · I-XU 후보)."
```

```yaml
- id: RPM-GEO-0540
  page: 85
  vendor_label: "교과서 06-2 평면벡터의 성분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    e1=(1,0), e2=(0,1) 일 때 b = (-4, 9) 를 e1, e2 로 나타내기.
  category: "성분 → 단위벡터 일차결합 -4e1+9e2"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평면벡터의 성분 표시 — 단위벡터와 성분의 상호 변환"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    성분을 그대로 계수로 옮겨 -4e1+9e2 한 줄. 함정은 첫 항의 음의 부호(T-부호). 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "(-4, 9) → -4e1 + 9e2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-4\vec{e_1}+9\vec{e_2}$'
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-geo/items/0540.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "성분(-4, 9 → -1, -1 · 5, -12 · 1/2, 3)을 바꿈. 제약: 0539 와 부호 배치가 다르게(음·양) 두어 짝을 이루게 함."
    creative: "(1) (-4, 9) 와 (3, -2) 의 합·차를 e1, e2 로(★1) (2) b = -4e1+9e2 와 크기가 같고 방향이 반대인 벡터(★1) (3) e1, e2 대신 e1'=(1,0), e2'=(1,1) 같은 기저로 나타내기(★2 · I-RT d1)."
```

```yaml
- id: RPM-GEO-0541
  page: 85
  vendor_label: "교과서 06-2 평면벡터의 성분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    a = (-2, 3) 의 크기.
  category: "|a| = √(a1²+a2²) → √13"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평면벡터의 크기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    √((-2)²+3²) = √13 한 줄. 함정은 (-2)² 의 부호(T-부호). 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "(-2, 3) → √(4+9) = √13"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\sqrt{13}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0541.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "성분(-2, 3 → 1, -4 · -3, -3 · 6, 8)을 바꿈. 제약: 제곱합이 완전제곱수면 정수 답(0542 골조), 아니면 근호가 간단히 정리되는 수(√18 = 3√2)로."
    creative: "(1) |a| = √13 이 되는 정수 성분 (x, y) 의 개수(★2 · 경우 나열) (2) (k, 3) 의 크기가 5 일 때 k (★1~2 · 역방향 · 두 근) (3) a=(-2,3) 와 같은 방향의 단위벡터 a/|a| (★1~2)."
```

```yaml
- id: RPM-GEO-0542
  page: 85
  vendor_label: "교과서 06-2 평면벡터의 성분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    b = (5, -12) 의 크기.
  category: "|b| = √(b1²+b2²) → √169 = 13"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평면벡터의 크기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    √(25+144) = √169 = 13 한 줄. 피타고라스 수 (5, 12, 13) 이라 정수로 떨어진다. 함정은 (-12)² 의 부호(T-부호). 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "(5, -12) → √(25+144) = 13"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$13$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0542.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "피타고라스 수 쌍(5,-12 → -3,4 · 8,-15 · -7,24 · 6,-8)으로 바꿈. 제약: 정수 답을 유지하려면 제곱합이 완전제곱수여야 함. 0541(근호 답)과 짝으로 둠."
    creative: "(1) |b| = 13 인 정수 성분 벡터 (x, y) 의 개수(★2 · 피타고라스 수 나열·부호 4배) (2) (5, k) 의 크기가 13 일 때 양수 k (★1~2 · 역방향) (3) 크기 13 의 벡터와 크기 1 의 단위벡터 b/13 을 성분으로(★1)."
```

```yaml
- id: RPM-GEO-0543
  page: 85
  vendor_label: "교과서 06-2 평면벡터의 성분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    a = (3, m-1), b = (n-2, -4) 에 대해 a = b 일 때 m, n 의 값.
  category: "서로 같은 벡터 → 성분끼리 같다 → 3 = n-2, m-1 = -4"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 평면벡터가 서로 같을 조건 — 성분 비교"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x성분 3 = n-2 에서 n=5, y성분 m-1 = -4 에서 m=-3. 일차방정식 둘을 따로 푸는 두 단계. 함정은 m-1 = -4 의 이항 부호(T-부호). 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "a = b → 3 = n-2, m-1 = -4 → n=5, m=-3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$m=-3$, $n=5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0543.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수(3, -1, -2, -4)와 미지수의 자리(m 을 x성분에, n 을 y성분에)를 바꿈. 제약: 각 성분이 미지수 하나짜리 일차식이라 정수해가 나오게 함. 계수를 2m+1 처럼 두면 0544 골조."
    creative: "(1) 두 성분에 m, n 이 섞이게(a=(m+n, 3), b=(5, m-n)) 주어 연립으로 만들기(★2) (2) a = -b 또는 2a = b 로 조건을 바꿔 계수 처리 추가(★1~2) (3) a=(m, m²), b=(2, 4k) 처럼 이차식을 넣어 두 근 중 조건에 맞는 것 고르기(★2 · I-VF d1 후보)."
```

```yaml
- id: RPM-GEO-0544
  page: 85
  vendor_label: "교과서 06-2 평면벡터의 성분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    a = (2m+1, 3), b = (5, n+1) 에 대해 a = b 일 때 m, n 의 값.
  category: "서로 같은 벡터 → 성분끼리 같다 → 2m+1 = 5, 3 = n+1"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 평면벡터가 서로 같을 조건 — 성분 비교"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    2m+1 = 5 에서 m=2, n+1 = 3 에서 n=2. 일차방정식 둘을 따로 푸는 두 단계이고 계수 2 가 붙은 것만 0543 과 다르다(T-부호 0~1). 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "a = b → 2m+1 = 5, 3 = n+1 → m=2, n=2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$m=2$, $n=2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0544.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수(1, 3, 5, 1)와 계수(2m → 3m, -2m)를 바꿈. 제약: 정수해. 두 답이 같은 값(m=n=2)인 것은 우연이니 변형 때는 다르게 두어 검산 혼동을 줄임."
    creative: "(1) m, n 의 값으로 m+n 이나 mn 을 묻기(★1) (2) a = b 대신 a-b = (0, 0) 으로 주어 성분 연산을 거치게 하기(★1) (3) a = b 를 만족하는 (m, n) 에 대해 벡터 a 의 크기까지(★1~2)."
```

```yaml
- id: RPM-GEO-0545
  page: 85
  vendor_label: "교과서 06-2 평면벡터의 성분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    a = (-2, 3), b = (4, 2) 일 때 ⑴ a+b ⑵ -2a-b 를 성분으로 나타내기.
  category: "성분별 실수배·합 → ⑴ (2, 5) ⑵ (4, -6)-(4, 2) = (0, -8)"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평면벡터의 성분에 의한 연산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴ 성분별 합 (2, 5). ⑵ -2a = (4, -6) 을 먼저 만들고 b 를 빼면 (0, -8). 실수배 뒤 뺄셈에서 부호가 두 번 바뀌는 곳이 함정(T-부호). 소문항 둘이라 M_total 5. 교과서 구역·통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "실수배 → 성분별 합·차 → ⑴ (2, 5) ⑵ (0, -8)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '(1) $(2,\,5)$ (2) $(0,\,-8)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0545.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "성분(-2,3 · 4,2)과 계수(-2a-b → 3a-2b, -a+4b)를 바꿈. 제약: 결과 성분이 정수. ⑵ 처럼 한 성분이 0 이 되도록 맞추면 '0 성분' 표기 확인이 됨."
    creative: "(1) 결과 벡터 (0, -8) 을 주고 xa+yb 로 나타낼 때 x, y (★2 · 연립 계수 비교) (2) -2a-b 의 크기 또는 e1, e2 표현까지 묻기(★1) (3) a, b 와 c=(k, 1) 에 대해 2a-b+c 가 x축에 평행할 조건(★2 · 0546 골조 결합)."
```

```yaml
- id: RPM-GEO-0546
  page: 85
  vendor_label: "교과서 06-2 평면벡터의 성분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    a = (3, -2), b = (-12, k) 가 서로 평행하도록 하는 k 의 값.
  category: "평행 → b = t a → -12 = 3t → t=-4 → k = -2t = 8"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 평면벡터가 서로 평행할 조건"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    b = t a 로 두면 x성분에서 t=-4, y성분에서 k = -2·(-4) = 8. 성분비 3:(-2) = -12:k 로 풀어도 한 줄. 함정은 t 가 음수라 k 의 부호가 다시 양이 되는 것(T-부호). 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "b = t a → t=-4 → k = 8"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0546.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a 의 성분(3,-2 → 2,5 · -1,4)과 b 의 주어진 성분(-12 → 6, -9, 1/2)을 바꿈. 제약: 비례상수 t 가 정수·간단한 분수이고 음수 t 를 하나 섞어 부호 함정을 유지."
    creative: "(1) k 를 두 성분에 모두 넣어 (k, k+1) ∥ (2, 3) 처럼 일차방정식으로(★1~2) (2) 평행 대신 '방향이 반대이고 크기가 2배' 로 주어 t=-2 를 직접 정하게 하기(★1~2) (3) a+kb 가 c 와 평행할 조건(★2 · 성분 연산 뒤 평행 조건 · 유형 구역 골조)."
```

```yaml
- id: RPM-GEO-0547
  page: 85
  vendor_label: "교과서 06-2 평면벡터의 성분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    a = (1, k+2), b = (k, 3) 이 서로 평행하도록 하는 k 의 값 (단, k≠1).
  category: "평행 → 성분비 1·3 = k(k+2) → k²+2k-3 = 0 → k=-3, 1 → k≠1 로 배제 → -3"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 평면벡터가 서로 평행할 조건"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    b = t a 에서 k = t, 3 = t(k+2) → k(k+2) = 3 → (k+3)(k-1) = 0. 두 근 중 발문의 k≠1 로 1 을 버리면 -3. 배제 조건이 발문에 명시돼 있어 사후 검증(I-VF)이 아니라 표준 절차(T-범위 1). 이차방정식 한 번이 얹혀 M_total 5 이나 교과서 구역·통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "b = t a → k=t, 3=t(k+2) → k²+2k-3=0 → k=-3 (k=1 배제)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0547.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수(k+2 → k-1, k+4 · 3 → 8, -4)를 바꿈. 제약: k(k+c) = d 가 정수근 둘을 갖도록 하고 배제할 근을 발문에 명시(k≠…). 두 근이 모두 유효하면 '모든 k 의 값의 합' 으로 발문을 바꿔야 함."
    creative: "(1) k≠1 조건을 빼고 '모든 k 의 값의 합·곱' 을 묻기(★1~2 · 근과 계수) (2) 'a, b 가 평행하고 방향이 반대' 로 주어 t<0 인 근만 고르게 하기(★2 · I-VF d1 · 기각 조건을 학생이 세움) (3) a=(1, k+2), b=(k, 3) 이 평행할 때 |a+b| 의 값(★2)."
```

```yaml
- id: RPM-GEO-0548
  page: 85
  vendor_label: "교과서 06-2 평면벡터의 성분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    두 점 A(3, -1), B(2, 1) 에 대해 AB 를 성분으로 나타내고 그 크기를 구하기.
  category: "AB = (끝점) - (시작점) = (-1, 2) → 크기 √5"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 점을 잇는 평면벡터의 성분과 크기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    AB = (2-3, 1-(-1)) = (-1, 2), |AB| = √(1+4) = √5. 두 단계. 함정은 끝점-시작점 순서와 1-(-1) 의 부호(T-부호 1). 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "AB = B - A = (-1, 2) → |AB| = √5"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\overrightarrow{\pt{AB}}=(-1,\,2)$, $|\overrightarrow{\pt{AB}}|=\sqrt{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0548.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 점의 좌표(A(3,-1), B(2,1) → A(-1,4), B(2,0))를 바꿈. 제약: 성분 차가 정수이고 크기가 정수 또는 간단한 근호. 음수 좌표를 하나 넣어 뺄셈 부호 함정을 유지."
    creative: "(1) AB 와 BA 를 함께 묻거나 |AB| = |BA| 임을 확인(★1) (2) A 와 AB=(-1,2) 를 주고 B 의 좌표를 묻는 역방향(★1) (3) A(3,-1), B(2,1), C(x,y) 에 대해 AC = 2AB 인 C 또는 |AB| = |AC| 인 x축 위의 C (★2 · 역방향 + 크기 조건)."
```

```yaml
- id: RPM-GEO-0549
  page: 85
  vendor_label: "교과서 06-2 평면벡터의 성분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    두 점 A(-3, 4), B(-6, 8) 에 대해 AB 를 성분으로 나타내고 그 크기를 구하기.
  category: "AB = B - A = (-3, 4) → 크기 5"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 점을 잇는 평면벡터의 성분과 크기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    AB = (-6-(-3), 8-4) = (-3, 4), |AB| = √(9+16) = 5. 피타고라스 수 (3, 4, 5). 함정은 -6-(-3) 의 이중 부호(T-부호 1). 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "AB = B - A = (-3, 4) → |AB| = 5"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\overrightarrow{\pt{AB}}=(-3,\,4)$, $|\overrightarrow{\pt{AB}}|=5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0549.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 점의 좌표를 바꾸되 차가 피타고라스 수(3,4 · 5,12 · 8,15)가 되도록. 제약: 정수 크기를 유지하려면 성분 차의 제곱합이 완전제곱수. A 의 좌표와 AB 의 성분이 우연히 같은(-3, 4) 것은 피하는 편이 검산에 좋음."
    creative: "(1) AB 와 같은 방향의 단위벡터 (-3/5, 4/5)(★1~2) (2) A, B 와 원점 O 에 대해 OA+OB, |OA-OB| 로 바꿔 두 점 벡터와 위치벡터를 연결(★1~2) (3) 점 P 가 |PA| = |PB| 를 만족하는 x축 위 점(★2 · I-RT d1 · 수직이등분선)."
```

### 교과서 06-3 공간벡터의 성분

```yaml
- id: RPM-GEO-0550
  page: 87
  vendor_label: "교과서 06-3 공간벡터의 성분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    e1=(1,0,0), e2=(0,1,0), e3=(0,0,1) 일 때 a = -e1+3e2-2e3 을 성분으로 나타내기.
  category: "단위벡터 일차결합 → 계수 읽기 → (-1, 3, -2)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "공간벡터의 성분 표시 — 단위벡터와 성분의 상호 변환"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    e1, e2, e3 의 계수 -1, 3, -2 가 곧 세 성분. 한 줄. 함정은 -e1 의 생략된 계수 1 과 두 음의 부호(T-부호·T-표기 → 1개로 셈). 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "a = -e1 + 3e2 - 2e3 → 계수 (-1, 3, -2)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$(-1,\,3,\,-2)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0550.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수(-1, 3, -2 → 2, -1, 5 · 4, -4, 1)를 바꿈. 제약: 정수·간단한 분수. 계수 0 이 있으면 항이 빠지는 0551 골조로 별도 취급."
    creative: "(1) 항 순서를 3e2-2e3-e1 처럼 섞어 주기(★1) (2) 성분과 함께 크기 √14 까지(★1) (3) 세 단위벡터 대신 u=(1,1,0), v=(0,1,1), w=(1,0,1) 의 일차결합으로 주고 성분을 구하기(★2 · I-RT d1)."
```

```yaml
- id: RPM-GEO-0551
  page: 87
  vendor_label: "교과서 06-3 공간벡터의 성분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    e1=(1,0,0), e2=(0,1,0), e3=(0,0,1) 일 때 b = 5e1+4e3 을 성분으로 나타내기.
  category: "단위벡터 일차결합 → 빠진 e2 항은 0 → (5, 0, 4)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "공간벡터의 성분 표시 — 단위벡터와 성분의 상호 변환"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    e2 항이 없으므로 y성분은 0 → (5, 0, 4). 한 줄. 함정은 빠진 항을 0 으로 채우지 않고 (5, 4) 두 성분으로 쓰는 것(T-표기). 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "b = 5e1 + 0·e2 + 4e3 → (5, 0, 4)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$(5,\,0,\,4)$'
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-geo/items/0551.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "빠지는 항의 위치(e2 → e1 또는 e3)와 계수(5, 4 → -3, 7)를 바꿈. 제약: 정확히 한 항을 빼서 '0 성분 채우기' 골조를 유지. 두 항을 빼면 좌표축 위의 벡터(★1 그대로)."
    creative: "(1) 5e1+4e3 이 xz평면 위의 벡터임을 말하게 하고 크기 √41 (★1) (2) 성분 (5, 0, 4) 를 보고 어느 좌표평면에 평행한지 고르는 보기 문항(★1~2) (3) 5e1+4e3 과 e2 의 내적이 0 → 수직임을 06-4 와 연결(★1~2 · 단원 내 결합)."
```

```yaml
- id: RPM-GEO-0552
  page: 87
  vendor_label: "교과서 06-3 공간벡터의 성분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    e1=(1,0,0), e2=(0,1,0), e3=(0,0,1) 일 때 a = (2, 1, -8) 을 e1, e2, e3 으로 나타내기.
  category: "성분 → 단위벡터 일차결합 2e1+e2-8e3"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "공간벡터의 성분 표시 — 단위벡터와 성분의 상호 변환"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (a1, a2, a3) = a1 e1 + a2 e2 + a3 e3 의 역방향 한 줄. 2e1+e2-8e3. 함정은 계수 1 을 1e2 로 쓰지 않는 표기와 -8 의 부호(T-표기·T-부호 → 1개). 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "(2, 1, -8) → 2e1 + e2 - 8e3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$2\vec{e_1}+\vec{e_2}-8\vec{e_3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0552.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "성분(2, 1, -8 → -3, 1, 6 · 1, -1, 1)을 바꿈. 제약: 성분 ±1 을 하나 두어 계수 1 생략 표기가 유지되게 함. 성분 0 이 있으면 0553 골조."
    creative: "(1) 2e1+e2-8e3 의 크기 √69 나 e3 계수의 부호를 함께 묻기(★1) (2) a=(2,1,-8) 을 u=(1,1,0), v=(0,1,1), w=(1,0,1) 의 일차결합으로 나타내기(★2 · 3원 연립) (3) 두 벡터의 단위벡터 표현을 더해 성분 연산과 연결(★1)."
```

```yaml
- id: RPM-GEO-0553
  page: 87
  vendor_label: "교과서 06-3 공간벡터의 성분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    e1=(1,0,0), e2=(0,1,0), e3=(0,0,1) 일 때 b = (1, -3, 0) 을 e1, e2, e3 으로 나타내기.
  category: "성분 → 단위벡터 일차결합 → 0 성분의 항 생략 → e1-3e2"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "공간벡터의 성분 표시 — 단위벡터와 성분의 상호 변환"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    1·e1 + (-3)e2 + 0·e3 에서 0 인 항을 빼면 e1-3e2 한 줄. 함정은 0·e3 을 남기거나 e1 의 계수 1 을 쓰는 표기(T-표기). 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "(1, -3, 0) → e1 - 3e2 + 0·e3 → e1 - 3e2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\vec{e_1}-3\vec{e_2}$'
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-geo/items/0553.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "0 성분의 위치(z → x 또는 y)와 나머지 성분(1, -3 → -2, 5)을 바꿈. 제약: 정확히 한 성분을 0 으로 두어 '항 생략' 골조를 유지. 0551 과 역방향 짝."
    creative: "(1) (1, -3, 0) 이 xy평면 위의 벡터임을 말하게 하고 그 크기 √10 (★1) (2) 두 성분이 0 인 벡터 (0, 0, -4) = -4e3 처럼 좌표축 위 벡터(★1) (3) e1-3e2 와 e3 의 내적이 0 → 수직임을 06-4 와 연결(★1~2)."
```

```yaml
- id: RPM-GEO-0554
  page: 87
  vendor_label: "교과서 06-3 공간벡터의 성분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    a = (2, -1, 2) 의 크기.
  category: "|a| = √(a1²+a2²+a3²) → √9 = 3"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "공간벡터의 크기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    √(4+1+4) = 3 한 줄. 세 성분 제곱합이 완전제곱수라 정수. 함정은 (-1)² 의 부호(T-부호). 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "(2, -1, 2) → √(4+1+4) = 3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0554.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "성분을 제곱합이 완전제곱수인 세 정수(2,-1,2 → 1,2,2 · 3,4,0 · 2,3,6 · 1,4,8)로 바꿈. 제약: 정수 답 유지. 0555(근호 답)와 짝."
    creative: "(1) (2, -1, k) 의 크기가 3 일 때 k 의 값(★1~2 · 역방향 · 두 근) (2) a 와 같은 방향의 단위벡터 (2/3, -1/3, 2/3) (★1) (3) 크기가 3 인 정수 성분 공간벡터의 개수(★2 · 경우 나열·부호·순서)."
```

```yaml
- id: RPM-GEO-0555
  page: 87
  vendor_label: "교과서 06-3 공간벡터의 성분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    b = (3, -5, -1) 의 크기.
  category: "|b| = √(b1²+b2²+b3²) → √35"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "공간벡터의 크기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    √(9+25+1) = √35 한 줄. 근호가 정리되지 않는 값. 함정은 두 음수 성분의 제곱 부호(T-부호). 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "(3, -5, -1) → √(9+25+1) = √35"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\sqrt{35}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0555.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "성분(3, -5, -1 → -2, 3, 4 · 1, 1, -4)을 바꿈. 제약: 제곱합이 완전제곱수가 아니게 두어 근호 답을 유지하되, 제곱수 인수(√18 = 3√2)를 넣어 근호 정리를 얹을 수도 있음."
    creative: "(1) |b| = √35 와 (3, -5, -1) 의 e1·e2·e3 표현을 함께(★1) (2) (3, -5, k) 의 크기가 √35 일 때 k (★1 · 역방향) (3) |a| = |b| 가 되도록 하는 a=(k, 1, 3) 의 k (★1~2)."
```

```yaml
- id: RPM-GEO-0556
  page: 87
  vendor_label: "교과서 06-3 공간벡터의 성분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    a = (-7, 4, 3r), b = (p-2, 3q-2, -12) 에 대해 a = b 일 때 p, q, r 의 값.
  category: "서로 같은 벡터 → 성분끼리 같다 → -7 = p-2, 4 = 3q-2, 3r = -12"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 공간벡터가 서로 같을 조건 — 성분 비교"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    세 성분을 각각 비교해 p=-5, q=2, r=-4. 미지수가 하나씩 분리된 일차방정식 셋이라 세 단계지만 각각 한 줄. 함정은 -7 = p-2 의 이항 부호(T-부호). 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "a = b → -7 = p-2, 4 = 3q-2, 3r = -12 → p=-5, q=2, r=-4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$p=-5$, $q=2$, $r=-4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0556.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수(-7, 4, -12 · -2, -2)와 계수(3q, 3r → 2q, -r)를 바꿈. 제약: 각 성분이 미지수 하나짜리 일차식이고 정수해. 미지수 자리를 a, b 양쪽에 섞어 두면 0557 골조."
    creative: "(1) p+q+r 또는 pqr 을 묻기(★1) (2) 2a = b 나 a = -b 로 조건을 바꿔 실수배 처리 추가(★1~2) (3) 두 성분에 미지수가 섞인 (p+q, q+r, r+p) = (1, 5, 6) 꼴로 3원 연립(★2)."
```

```yaml
- id: RPM-GEO-0557
  page: 87
  vendor_label: "교과서 06-3 공간벡터의 성분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    a = (-p, 3, r-1), b = (2, -q+1, 2r+3) 에 대해 a = b 일 때 p, q, r 의 값.
  category: "서로 같은 벡터 → 성분끼리 같다 → -p = 2, 3 = -q+1, r-1 = 2r+3"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 공간벡터가 서로 같을 조건 — 성분 비교"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    -p = 2 → p=-2, 3 = -q+1 → q=-2, r-1 = 2r+3 → r=-4. z성분은 r 이 양변에 있어 이항 한 번 더. 세 답이 모두 음수라 부호 실수가 잦은 곳(T-부호 1). 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "a = b → -p = 2, 3 = -q+1, r-1 = 2r+3 → p=-2, q=-2, r=-4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$p=-2$, $q=-2$, $r=-4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0557.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수(2, 1, -1, 3)와 부호(-p, -q → p, q)·계수(2r → 3r)를 바꿈. 제약: 정수해. 미지수가 양변에 있는 성분(r-1 = 2r+3)을 하나 두어 이항 골조를 유지."
    creative: "(1) p, q, r 로 |a| 를 묻기(★1) (2) 조건을 a+b = 0 이나 a-2b = 0 으로 바꿔 성분 연산을 거치게 하기(★1~2) (3) a = b 인 (p, q, r) 에 대해 a 가 e1-e2 와 평행할 추가 조건(★2 · 조건 결합)."
```

```yaml
- id: RPM-GEO-0558
  page: 87
  vendor_label: "교과서 06-3 공간벡터의 성분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    a = (-1, 4, 2), b = (0, 3, -5) 일 때 ⑴ 2a+b ⑵ 3a+2b 를 성분으로 나타내기.
  category: "성분별 실수배·합 → ⑴ (-2, 8, 4)+(0, 3, -5) ⑵ (-3, 12, 6)+(0, 6, -10)"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "공간벡터의 성분에 의한 연산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴ 2a = (-2, 8, 4) 에 b 를 더해 (-2, 11, -1). ⑵ 3a = (-3, 12, 6), 2b = (0, 6, -10) 을 더해 (-3, 18, -4). 세 성분·두 소문항이라 산술량이 조금 늘어 M_total 5. 함정은 4+(-5), 6+(-10) 의 부호(T-부호). 교과서 구역·통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "실수배 → 성분별 합 → ⑴ (-2, 11, -1) ⑵ (-3, 18, -4)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '(1) $(-2,\,11,\,-1)$ (2) $(-3,\,18,\,-4)$'
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-geo/items/0558.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "성분(-1,4,2 · 0,3,-5)과 계수(2a+b, 3a+2b → a-2b, -a+3b)를 바꿈. 제약: 결과 성분 정수. 뺄셈 소문항을 하나 넣으면 0545 ⑵ 처럼 부호 함정이 두 겹이 됨."
    creative: "(1) 2a+b 의 크기 √126 = 3√14 까지(★1) (2) 결과 벡터를 주고 xa+yb 의 x, y 를 묻기(★2 · 3식 2미지수 · 세 번째 식으로 검산) (3) 2a+b 와 c=(k, 1, 2) 가 평행하도록 하는 k 가 존재하는지 판단(★2 · 성분비 일치 여부)."
```

```yaml
- id: RPM-GEO-0559
  page: 87
  vendor_label: "교과서 06-3 공간벡터의 성분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    두 점 A(1, 2, 3), B(-2, 0, 5) 에 대해 AB 를 성분으로 나타내고 그 크기를 구하기.
  category: "AB = B - A = (-3, -2, 2) → 크기 √17"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 점을 잇는 공간벡터의 성분과 크기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    AB = (-2-1, 0-2, 5-3) = (-3, -2, 2), |AB| = √(9+4+4) = √17. 두 단계. 함정은 끝점-시작점 순서(T-부호). 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "AB = B - A = (-3, -2, 2) → |AB| = √17"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\overrightarrow{\pt{AB}}=(-3,\,-2,\,2)$, $|\overrightarrow{\pt{AB}}|=\sqrt{17}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0559.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 점의 좌표(A(1,2,3), B(-2,0,5) → A(2,-1,0), B(0,1,-3))를 바꿈. 제약: 성분 차가 정수이고 크기가 간단한 근호 또는 정수(0560 골조). 좌표 0 을 하나 넣어 0-2 같은 뺄셈을 유지."
    creative: "(1) A 와 AB 를 주고 B 를 묻는 역방향(★1) (2) A, B 와 원점에 대해 OA+OB 와 |AB| 를 함께 묻기(★1) (3) 세 점 A, B, C 에 대해 AB = CD 인 D 의 좌표(평행사변형 · ★2)."
```

```yaml
- id: RPM-GEO-0560
  page: 87
  vendor_label: "교과서 06-3 공간벡터의 성분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    두 점 A(-2, 1, -1), B(1, 5, 4) 에 대해 AB 를 성분으로 나타내고 그 크기를 구하기.
  category: "AB = B - A = (3, 4, 5) → 크기 √50 = 5√2"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 점을 잇는 공간벡터의 성분과 크기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    AB = (1-(-2), 5-1, 4-(-1)) = (3, 4, 5), |AB| = √50 = 5√2. 두 단계에 근호 정리 한 번. 함정은 1-(-2), 4-(-1) 의 이중 부호와 √50 을 정리하지 않는 것(T-부호 1). 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "AB = B - A = (3, 4, 5) → √50 = 5√2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\overrightarrow{\pt{AB}}=(3,\,4,\,5)$, $|\overrightarrow{\pt{AB}}|=5\sqrt{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0560.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 점의 좌표를 바꾸되 성분 차의 제곱합이 제곱수 인수를 갖도록(√50, √18, √75 → 5√2, 3√2, 5√3). 제약: 근호 정리 골조 유지. 음수 좌표를 A 쪽에 두어 이중 부호를 유지."
    creative: "(1) AB 와 같은 방향의 단위벡터 (3, 4, 5)/(5√2) 를 유리화해서(★1~2) (2) |AB| = |AC| 인 z축 위의 점 C (★2 · 역방향 · 이차방정식) (3) A, B 를 지나는 직선 위에서 AP = 2AB 인 P 의 좌표(★1~2 · 직선의 벡터방정식 예비)."
```

### 교과서 06-4 벡터의 내적

```yaml
- id: RPM-GEO-0561
  page: 87
  vendor_label: "교과서 06-4 벡터의 내적"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    |a|=3, |b|=4 인 두 벡터가 이루는 각이 ⑴ 45° ⑵ 120° 일 때 a·b.
  category: "내적 정의 a·b = |a||b|cosθ → ⑴ 12·(√2/2) ⑵ 12·(-1/2)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "벡터의 내적 — 크기와 사잇각으로 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    정의식에 대입하는 한 줄씩. ⑴ 12·(√2/2) = 6√2 ⑵ 12·(-1/2) = -6. 함정은 cos 120° = -1/2 의 부호(T-부호). 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "a·b = |a||b|cosθ → ⑴ 6√2 ⑵ -6"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '(1) $6\sqrt{2}$ (2) $-6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0561.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "크기(3, 4 → 2, 5 · √2, 3)와 각(45°, 120° → 30°, 60°, 135°, 150°)을 바꿈. 제약: cos 값이 특수각으로 떨어지고 둔각을 하나 섞어 음의 내적을 유지. 크기에 근호를 넣으면 근호 곱 정리가 얹힘."
    creative: "(1) a·b = -6, |a|=3, |b|=4 를 주고 θ 를 묻는 역방향(★1~2) (2) 정삼각형·정사각형의 변·대각선 벡터 내적(★2 · I-RT d1 · 도형에서 각 읽기) (3) |a|=3, |b|=4, θ=120° 에서 |a+b| 를 묻기(★2 · |a+b|² = |a|²+2a·b+|b|² 전개 · 유형 구역 골조)."
```

```yaml
- id: RPM-GEO-0562
  page: 87
  vendor_label: "교과서 06-4 벡터의 내적"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    a = (1, 3), b = (-3, 2) 의 내적.
  category: "성분 내적 a1b1+a2b2 → -3+6 = 3"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "벡터의 내적 — 성분으로 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    1·(-3)+3·2 = 3 한 줄. 함정은 성분 곱의 합을 벡터 (−3, 6) 으로 남겨 두거나 첫 항 부호를 놓치는 것(T-부호·T-표기 → 1개). 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "(1, 3)·(-3, 2) = -3+6 = 3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0562.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "성분(1,3 · -3,2 → 2,-1 · 4,5)을 바꿈. 제약: 정수 내적. 부호가 다른 두 항이 더해지도록(음+양) 두어 부호 함정 유지. 결과 0 이면 0565 골조(수직)."
    creative: "(1) a·b 와 |a||b| 를 함께 구해 06-5 의 cosθ 로 잇기(★1) (2) (1, 3)·(k, 2) = 3 이 되는 k (★1 · 역방향) (3) (a+b)·(a-b) = |a|²-|b|² 를 성분으로 확인(★2 · 내적의 연산 법칙 예비)."
```

```yaml
- id: RPM-GEO-0563
  page: 87
  vendor_label: "교과서 06-4 벡터의 내적"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    a = (2, -1), b = (-2, 4) 의 내적.
  category: "성분 내적 a1b1+a2b2 → -4-4 = -8"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "벡터의 내적 — 성분으로 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    2·(-2)+(-1)·4 = -8 한 줄. 두 항이 모두 음수라 부호가 함정(T-부호). 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "(2, -1)·(-2, 4) = -4-4 = -8"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0563.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "성분(2,-1 · -2,4 → 3,-2 · -1,5)을 바꿈. 제약: 정수 내적. 두 항이 모두 음이 되는 배치를 유지하면 음의 내적(둔각) 사례가 됨."
    creative: "(1) 내적이 음수임을 근거로 두 벡터가 이루는 각이 둔각임을 말하게 하기(★1~2 · I-RT d1 · 부호→각) (2) (2, -1)·(k, 4) < 0 이 되는 정수 k 의 범위(★2 · 부등식) (3) |a|, |b|, a·b 로 cosθ 까지(★1 · 0566 골조)."
```

```yaml
- id: RPM-GEO-0564
  page: 87
  vendor_label: "교과서 06-4 벡터의 내적"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    a = (1, -3, 2), b = (3, 2, 1) 의 내적.
  category: "성분 내적 a1b1+a2b2+a3b3 → 3-6+2 = -1"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "벡터의 내적 — 성분으로 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    1·3+(-3)·2+2·1 = -1 한 줄. 세 항의 부호가 섞여 있어 합산 부호가 함정(T-부호). 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "(1, -3, 2)·(3, 2, 1) = 3-6+2 = -1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0564.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "성분(1,-3,2 · 3,2,1 → 2,1,-2 · -1,4,3)을 바꿈. 제약: 정수 내적. 양·음 항이 섞이도록 배치. 결과 0 이면 0565 골조."
    creative: "(1) (1, -3, k)·(3, 2, 1) = -1 이 되는 k (★1 · 역방향) (2) 세 성분 내적으로 cosθ 까지(★1 · 0567 골조) (3) 좌표공간의 정육면체 모서리·대각선 벡터 내적(★2 · I-RT d1 · 좌표 부여)."
```

```yaml
- id: RPM-GEO-0565
  page: 87
  vendor_label: "교과서 06-4 벡터의 내적"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    a = (2, 2, -1), b = (4, -2, 4) 의 내적.
  category: "성분 내적 a1b1+a2b2+a3b3 → 8-4-4 = 0"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "벡터의 내적 — 성분으로 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    2·4+2·(-2)+(-1)·4 = 0 한 줄. 답이 0 이라 두 벡터가 수직임을 덤으로 읽을 수 있다. 함정은 두 음수 항의 부호(T-부호). 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "(2, 2, -1)·(4, -2, 4) = 8-4-4 = 0"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0565.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "내적이 0 이 되는 정수 성분 쌍(2,2,-1 · 4,-2,4 → 1,2,2 · 2,1,-2 / 3,0,4 · 4,0,-3)으로 바꿈. 제약: 수직(내적 0) 사례로 유지하려면 성분 곱의 합이 0 이어야 함. 일반 값이면 0564 골조."
    creative: "(1) a·b = 0 에서 두 벡터가 수직임을 말하게 하기(★1) (2) (2, 2, -1)·(4, k, 4) = 0 이 되는 k (★1 · 역방향 · 수직 조건) (3) a, b 에 모두 수직인 벡터 (x, y, z) 를 한 성분을 정해 구하기(★2~3 · 연립 · I-CON d1 후보)."
```

### 교과서 06-5 두 벡터가 이루는 각

```yaml
- id: RPM-GEO-0566
  page: 87
  vendor_label: "교과서 06-5 두 벡터가 이루는 각"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    a = (1, 2), b = (5, 0) 이 이루는 각의 크기가 θ 일 때 cosθ 의 값.
  category: "cosθ = a·b/(|a||b|) → 5/(√5·5) → 유리화 √5/5"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 벡터가 이루는 각 — 성분으로 cosθ 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    a·b = 5, |a| = √5, |b| = 5 → cosθ = 5/(5√5) = 1/√5 = √5/5. 내적·크기·비 세 단계에 유리화 한 번. 함정은 유리화를 빼먹거나 |b| = 5 를 √5 로 혼동하는 것(T-표기 1). 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "a·b = 5, |a| = √5, |b| = 5 → cosθ = 1/√5 → √5/5"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{\sqrt{5}}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0566.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "성분(1,2 · 5,0 → 3,1 · 2,4 → cos = 10/(√10·√20) = √2/2)을 바꿈. 제약: cosθ 가 간단한 근호 분수 또는 특수각 값(1/2, √2/2, √3/2)으로 정리되게 하고, b 를 축 위 벡터로 두면 |b| 가 정수라 유리화 골조가 살아남."
    creative: "(1) cosθ 대신 θ 자체(특수각이 되는 성분 선택 · ★1~2) (2) (1, 2) 와 (k, 0) 이 이루는 각이 45° 가 되는 k 는 없음을 확인하거나 (1,2)·(k,1) 로 45° 조건에서 k 를 구하기(★2 · I-BW d1 · 제곱 뒤 근 검증 I-VF d1) (3) a 와 x축이 이루는 각으로 바꿔 직선의 기울기·tan 과 연결(★2 · I-XU 후보)."
```

```yaml
- id: RPM-GEO-0567
  page: 87
  vendor_label: "교과서 06-5 두 벡터가 이루는 각"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    a = (2, -1, 2), b = (1, -1, -1) 이 이루는 각의 크기가 θ 일 때 cosθ 의 값.
  category: "cosθ = a·b/(|a||b|) → 1/(3·√3) → 유리화 √3/9"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 벡터가 이루는 각 — 성분으로 cosθ 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    a·b = 2+1-2 = 1, |a| = 3, |b| = √3 → cosθ = 1/(3√3) = √3/9. 내적의 세 항 부호와 유리화(분모 3√3 → 9)가 함정(T-부호 1). 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "a·b = 1, |a| = 3, |b| = √3 → cosθ = 1/(3√3) → √3/9"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{\sqrt{3}}{9}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0567.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "성분(2,-1,2 · 1,-1,-1 → 1,2,2 · 2,-2,1 → cos = 0 / 1,1,0 · 1,0,1 → cos = 1/2)을 바꿈. 제약: |a| 가 정수(피타고라스 4수 1,2,2,3 · 2,3,6,7)이고 cosθ 가 간단한 근호 분수. 유리화 골조를 유지하려면 |b| 에 근호를 남김."
    creative: "(1) cosθ 가 특수각 값이 되게 성분을 골라 θ 를 묻기(★1~2) (2) (2, -1, 2) 와 (1, k, -1) 이 이루는 각이 60° 인 k (★2 · I-BW d1 · 이차방정식 · 근 검증 I-VF d1) (3) 정육면체의 한 꼭짓점에서 나가는 모서리·면대각선·공간대각선 벡터 사이의 각(★2 · I-RT d1 · 좌표 부여)."
```

## 표본 판정 요약 (36문)

- ★ 분포: ★1 36 · ★2 0 · ★3 0 · ★4 0 · ★5 0
- 통찰형 0 · 절차형 36 · premium 0
- M_total 분포: 4 → 31문 · 5 → 4문(0532·0545·0547·0558 — 소문항 묶음 또는 이차방정식 한 번) · 6 → 1문(0536 — 무게중심 항등식 증명 · Mₐ 2). Mₐ 는 0536 만 2, 나머지 1(구체 수치·기호 대입). Mₜ 는 전부 1(부호·순서·표기 함정 0~1개).
- type_hint 상위: 「평면벡터의 성분 표시 — 단위벡터와 성분의 상호 변환」 4 · 「공간벡터의 성분 표시 — 단위벡터와 성분의 상호 변환」 4 · 「벡터의 내적 — 성분으로 계산」 4 · 「내분점·중점의 위치벡터」 3 · 2건씩: 「평면벡터의 크기」 「두 평면벡터가 서로 같을 조건 — 성분 비교」 「두 평면벡터가 서로 평행할 조건」 「두 점을 잇는 평면벡터의 성분과 크기」 「공간벡터의 크기」 「두 공간벡터가 서로 같을 조건 — 성분 비교」 「두 점을 잇는 공간벡터의 성분과 크기」 「두 벡터가 이루는 각 — 성분으로 cosθ 계산」 · 1건씩: 「위치벡터 — 두 점을 잇는 벡터를 위치벡터로 나타내기」 「삼각형의 무게중심의 위치벡터」 「평면벡터의 성분에 의한 연산」 「공간벡터의 성분에 의한 연산」 「벡터의 내적 — 크기와 사잇각으로 계산」
- 벤더 신호 대비: 전부 「교과서」 구역(level·tag 없음) → ★1 출발, ★ 조정 0건. 전사 답은 36문 모두 재계산과 일치.
- 그림: 0문(figure 전부 none)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| (없음) | 이 범위는 교과서 기본 문제만 있어 벤더 신호(★1)와 M·I 판정이 전부 일치. 분류 이슈 0건. 0536(증명 · M_total 6)과 0547(이차방정식 · 배제 조건 명시)은 ★1/★2 경계에 가깝지만 교과서 구역 출발점과 통찰 0 이 일치해 ★1 로 두었다. | - |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위는 평면벡터(06-2)와 공간벡터(06-3)가 **같은 여섯 골조를 성분 수만 바꿔** 반복한다: ① 단위벡터↔성분 상호 변환, ② 크기, ③ 서로 같을 조건(성분 비교), ④ 성분에 의한 연산, ⑤ 두 점을 잇는 벡터의 성분과 크기, ⑥ (평면만) 평행 조건. 앞에 06-1 위치벡터(분해 · 내분점·중점 · 무게중심), 뒤에 06-4 내적(정의식 · 성분 계산)과 06-5 cosθ 가 붙는다.
- 통합해도 될 유형: ①~⑤ 는 평면/공간을 하나의 유형 안에 「2성분 / 3성분」 하위 변형으로 두면 된다(골조·함정이 동일 · 공간은 성분 하나가 늘어 Mₖ 만 미세 상승). 내적 성분 계산(0562~0565)도 평면·공간을 나눌 이유가 없다. ①의 두 방향(단위벡터→성분 / 성분→단위벡터)은 한 유형의 왕복 소문항으로 흡수 가능하고, 「0 성분 채우기 / 0 항 생략」(0551·0553)은 그 유형 안의 함정 변형이다. 내분점·중점(0533~0535)은 「내분점의 위치벡터」 하나로 묶고 중점은 1:1 특수 사례로 둔다.
- 따로 세울 유형: 「두 벡터가 서로 평행할 조건」(0546·0547 — 성분비 → 일차·이차방정식 · 배제 조건 · 유형 구역에서 a+kb ∥ c 로 확장되는 뿌리), 「두 벡터가 이루는 각(cosθ)」(0566·0567 — 내적·크기·유리화가 결합된 첫 다단계 골조 · 유형 구역에서 각이 주어진 역방향(I-BW)과 수직 조건으로 갈라짐), 「무게중심·위치벡터 항등식」(0536 — 유일한 증명 골조 · 서술형 구역의 뿌리), 「내적 정의(크기·사잇각)」(0561 — 성분 내적과 별개로 |a+b|² 전개 유형의 뿌리).
- 이 범위(교과서 구역)에는 ★2 이상·통찰형이 없으므로 카탈로그의 base ★ 은 후속 유형 구역(06-p2 이후 「유형 NN」)에서 정해야 한다. 이 파일의 ★1 판정은 교과서 기본 문제라는 벤더 신호와 M_total 4~6·통찰 0 이 일치한 결과다. 변형 때 ★ 가 오르는 공통 지점은 (a) 결과(크기·내적·각)를 주고 미지수를 역으로 묻기, (b) 평행·수직·같은 크기 조건 결합, (c) 성분을 매개변수로 감추기, (d) 도형(정삼각형·정육면체)에 좌표를 부여해 벡터로 옮기기(I-RT)다.
