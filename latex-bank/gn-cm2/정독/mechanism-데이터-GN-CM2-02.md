---
name: mechanism-데이터-GN-CM2-02
description: 개념원리 공통수학2 02 선분의 내분점(1/1 · 21~26쪽 21문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학2 (22개정 · 학생용) · 전사본 latex-bank/gn-cm2
  section: 02 선분의 내분점
  unit_code: CM2-02
  part: "1/1"
  extract_range: "21~26쪽 · 21-26~26-40"
  total_problems: 21
  unit_total: 21
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·예제 태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 감쇠 유형 목록이 없는 과목이라 effective_depth = depth, depth_score = Σ effective_depth. ±1 규칙은 이 파일 전체에 동일하게 적용함 — +1 은 통찰 2개 이상이거나 depth 3 이거나 통찰 1개 이상이면서 M_total ≥ 8 또는 단원 밖 도구(I-XU)를 끌어와야 할 때, −1 은 통찰 0 이면서 M_total ≤ 5 일 때(★1 이 하한). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm2/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm2/items/<id>.tex
  image_source: latex-bank/gn-cm2/figures/ (crops.json)
---

# 개념원리 공통수학2 · 02 선분의 내분점 (1/1) 정독 데이터 (v1.0)

21~26쪽 21문항 전수(`21-26`~`26-40`). 구역은 두 개다 — 「개념원리 익히기」 3문(통번호 · 개념 직후 확인)과 「필수·발전 예제」 18문. 뒤 구역은 상자 발문(`쪽-eN` · tag 「필수」 또는 「발전」)과 그 예제를 그대로 따라가는 「확인체크」 번호 문항이 번갈아 실린다. 전사본에는 예제의 풀이·KEY Point 가 없고 상자 발문만 있다.

벤더 난이도 신호와 ★ 출발점: 「개념원리 익히기」 → ★1, 「필수」 예제와 그 뒤의 확인체크 → ★2, 「발전」 예제와 그 뒤의 확인체크 → ★3. 확인체크는 바로 앞 예제의 골조를 반복하는 자리이므로 예제와 같은 출발점을 쓴다. 출발점에서 M_total·통찰로 ±1 을 조정하며, 적용 규칙은 frontmatter 의 `judgment_protocol` 에 적은 것을 이 파일 전체에 동일하게 쓴다.

이 단원의 도구는 사실상 하나다 — 내분점 공식 $\left(\dfrac{mx_2+nx_1}{m+n},\ \dfrac{my_2+ny_1}{m+n}\right)$. 변별은 「비를 어디서 읽어내느냐」에서만 생긴다(등분점에서 읽기 → 길이 등식에서 읽기 → 연장선 방향에서 읽기 → 각의 이등분선 정리에서 읽기). 이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`·`insights[]`·`variation_notes` 를 채웠다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-CM2-21-26
  page: 21
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    수직선 위 두 점 A, B 사이를 6등분하는 점 C~G 가 주어질 때 ⑴~⑵ 점 D, G 가 각각 선분 AB 를 몇 대 몇으로 내분하는지 ⑶ 2:1 로 내분하는 점 ⑷ 중점을 그림에서 찾기.
  category: '등분점 → 내분비 읽기 → 약분'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '수직선 위 등분점에서 내분비 읽기'
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    6등분점의 번호 k 를 k:(6-k) 로 옮겨 약분하는 한 단계뿐이다. D 는 2:4=1:2, G 는 5:1, 2:1 은 4:2 이므로 F, 중점은 3:3 이므로 E. 개념원리 익히기 구역·통찰 없음·M_total 4 → ★1(하한).
  tier: star_1
  mechanism_primary: '등분점 번호 k → 내분비 k:(6-k) → 약분해서 점 이름·비 답하기'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $1$, $2$ ⑵ $5$, $1$ ⑶ $\pt{F}$ ⑷ $\pt{E}$'
  answer_source: "답지"
  figure: "crop:fig-21-26.png"
  latex: latex-bank/gn-cm2/items/21-26.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '등분 수를 6 대신 4·5·8·10 으로, 묻는 점을 다른 등분점으로 바꿀 수 있다. 제약 — 그림의 점 이름(C·D·E·F·G)과 등분 수가 반드시 일치해야 하고, 중점을 묻는 소문항은 등분 수가 짝수일 때만 등분점 위에 놓인다.'
    creative: '(1) 비를 주고 점을 찾게 하는 방향과 점을 주고 비를 찾게 하는 방향을 섞기(★1 유지) (2) 좌표를 붙여 A(1)·B(13) 식으로 주고 점의 좌표까지 묻기(★1~2) (3) 외분점을 같은 그림에 얹어 연장선 위의 점을 함께 묻기(★2~3 · I-EQV 추가).'
```

```yaml
- id: GN-CM2-21-27
  page: 21
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    수직선 위 두 점 A(2), B(6) 에 대하여 ⑴ 선분 AB 를 3:1 로 내분하는 점 ⑵ 1:2 로 내분하는 점 ⑶ 중점의 좌표.
  category: '수직선 내분점 공식 대입'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '수직선 위 선분의 내분점·중점 좌표'
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (mb+na)/(m+n) 에 수치를 한 번씩 넣는 공식 확인 문항. 분모가 4·3·2 로 바뀔 뿐 골조가 같다. 통찰 없음·M_total 4 → ★1(하한).
  tier: star_1
  mechanism_primary: 'm:n 확인 → (mb+na)/(m+n) 대입 → 좌표'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $(5)$ ⑵ $\left(\dfrac{10}{3}\right)$ ⑶ $(4)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/21-27.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 좌표 (2, 6) 과 비 3:1·1:2 를 자유롭게 바꿀 수 있다. 제약 — 소문항 하나 정도만 분수 좌표가 되게 해 답의 형태를 섞고, a<b 를 유지하면 그림 없이도 위치 감각이 맞는다.'
    creative: '(1) 내분점의 좌표를 주고 비를 되묻기(★2 · 역산) (2) 음수 좌표를 넣어 부호 실수를 유도(★1~2 · T-부호) (3) 같은 두 점에서 외분점까지 묻기(★2).'
```

```yaml
- id: GN-CM2-21-28
  page: 21
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    좌표평면 위 두 점 A(-1, 6), B(3, 2) 에 대하여 ⑴ 선분 AB 를 1:3 으로 내분하는 점 ⑵ 선분 BA 를 1:3 으로 내분하는 점 ⑶ 중점의 좌표.
  category: '좌표평면 내분점 공식 대입 → 기준점 순서 구분'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '좌표평면 선분의 내분점·중점 좌표 (AB 와 BA 구분)'
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x·y 각각에 공식을 넣는 확인 문항. ⑵ 는 AB 가 아니라 BA 이므로 기준점이 B 로 바뀌는 표기 함정 하나가 핵심이고(같은 1:3 인데 답이 다름), 나머지는 대입뿐이다. 통찰 없음·M_total 4 → ★1(하한).
  tier: star_1
  mechanism_primary: '기준점(앞 글자) 확인 → x·y 에 각각 내분점 공식 대입'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $(0,\,5)$ ⑵ $(2,\,3)$ ⑶ $(1,\,4)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/21-28.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 점의 좌표와 비 1:3 을 바꿀 수 있다. 제약 — AB 와 BA 의 답이 확실히 달라지도록 비는 m≠n 으로 두고, 좌표차가 (m+n) 의 배수면 정수 답이 나온다.'
    creative: '(1) ⑵ 를 지우고 AB 를 3:1 로 내분하는 점을 묻는 형태로 바꿔 같은 함정을 다른 얼굴로 내기(★1 유지) (2) 세 소문항의 답을 꼭짓점으로 하는 삼각형의 무게중심을 추가로 묻기(★2) (3) 내분점이 축 위에 오도록 비를 미지수로 두기(★3 · I-EQV).'
```

### 필수·발전 예제

```yaml
- id: GN-CM2-22-e7
  page: 22
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    세 점 A(3, 1), B(-2, -4), C(8, 6) 에서 선분 AB 를 2:3 으로 내분하는 점 P, 선분 BC 를 3:2 로 내분하는 점 Q 를 잡을 때 선분 PQ 의 길이.
  category: '내분점 두 번 → 두 점 사이의 거리'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '내분점 두 개를 구한 뒤 두 점 사이의 거리'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    P·Q 를 각각 공식으로 구하고 01단원의 거리 공식을 한 번 쓰는 직선 조립. 착안 지점이 없고 비의 순서만 지키면 되며, 단계가 셋이라 M_total 6. 필수 예제 출발 ★2 유지.
  tier: star_2
  mechanism_primary: 'P = AB 의 2:3 내분점 → Q = BC 의 3:2 내분점 → 거리 공식'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$3\sqrt{2}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/22-e7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '세 점의 좌표와 두 비를 바꿀 수 있다. 제약 — 두 내분점이 모두 정수 좌표가 되도록 좌표차를 (m+n) 의 배수로 맞추고, PQ 의 성분차가 피타고라스 쌍이거나 같은 값이면 답이 정수 또는 k√2 로 정리된다.'
    creative: '(1) PQ 의 길이 대신 중점·무게중심을 묻기(★2 유지) (2) 삼각형 ABC 의 세 변에 각각 내분점을 잡아 둘레를 묻기(★3 · Mₛ 상승) (3) 한 비를 미지수 k 로 두고 PQ 의 길이가 최소가 되는 k 를 묻기(★4 · I-BW).'
```

```yaml
- id: GN-CM2-22-29
  page: 22
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    세 점 A(-1, 4), B(5, -2), C(1, 6) 에서 선분 AB 를 2:1 로 내분하는 점 P, 선분 BC 를 1:3 으로 내분하는 점 Q 를 잡을 때 선분 PQ 의 중점의 좌표.
  category: '내분점 두 번 → 중점'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '내분점 두 개를 구한 뒤 그 중점'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    앞 필수 예제(22-e7)와 같은 골조이고 마지막 도구만 거리 → 중점으로 바뀐다. 통찰 없음·M_total 6 → 필수 계열 출발 ★2 유지.
  tier: star_2
  mechanism_primary: 'P = AB 의 2:1 내분점 → Q = BC 의 1:3 내분점 → 중점 공식'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\left(\dfrac{7}{2},\,0\right)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/22-29.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '세 점과 두 비를 바꿀 수 있다. 제약 — 두 내분점이 정수 좌표면 중점은 반정수까지만 나오므로 답 형태가 지저분해지지 않는다.'
    creative: '(1) 중점 대신 PQ 를 다시 어떤 비로 내분한 점을 묻기(★2~3 · 내분 3회) (2) PQ 의 중점이 원점이 되도록 C 를 정하기(★3 · I-BW) (3) 세 내분점이 한 직선 위에 있음을 보이게 하기(★4 · I-RT).'
```

```yaml
- id: GN-CM2-22-30
  page: 22
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 점 A(-1, -2), B(x, y) 에 대하여 선분 AB 위의 점 P(5, -5) 가 $\seg{AP}=3\seg{PB}$ 를 만족시킬 때 xy 의 값.
  category: '길이 등식 → 내분비 3:1 → 끝점 역산'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "선분 AB 위의 점이라는 위치 조건과 길이 등식 AP=3PB 를 합쳐 P 가 AB 를 3:1 로 내분한다는 비 조건으로 바꿈"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '선분 길이 등식을 내분비로 바꿔 끝점 역산'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    길이 등식을 비로 옮기는 한 단계가 전부의 착안이고, 그 뒤는 내분점 공식을 x·y 각각에 대해 B 에 대한 일차식으로 풀면 된다. 끝점이 미지수라 Mₐ 2. 필수 계열 출발 ★2, 통찰 1개·depth 1·M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: 'AP=3PB → P 는 AB 의 3:1 내분점 → 내분점 공식을 B 에 대해 역산 → xy'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-42$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/22-30.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'A 와 P 의 좌표, 배수 3 을 바꿀 수 있다. 제약 — P 가 반드시 A 와 B 사이에 오도록(내분) 배수는 양수여야 하고, (m+n)·P 좌표에서 A 좌표를 뺀 값이 m 으로 나누어떨어져야 B 가 정수 좌표가 된다.'
    creative: '(1) 묻는 값을 x+y·B 의 좌표 자체로 바꾸기(★2 유지) (2) AP=3PB 대신 AP:AB=3:4 로 주어 비 읽기를 한 겹 더 두기(★2~3) (3) P 를 선분 위가 아니라 연장선 위로 옮겨 방향 분기를 만들기(★3~4 · I-MI 추가).'
```

```yaml
- id: GN-CM2-22-31
  page: 22
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 점 A(1, -5), B(6, a) 에 대하여 선분 AB 를 2:b 로 내분하는 점의 좌표가 (3, -1) 일 때, 선분 AB 를 b:1 로 내분하는 점의 좌표.
  category: '내분점 좌표 → 미지수 b·a 역산 → 다른 비로 재계산'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '내분비와 끝점의 미지수를 역산한 뒤 다른 비의 내분점 구하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x 좌표 식에는 b 만 들어 있어 b 가 먼저 떨어지고, 그 b 를 y 좌표 식에 넣으면 a 가 나온다. 그 뒤 같은 공식을 b:1 로 한 번 더 쓰는 2단 구성이지만 각 단계는 일차식 정리뿐이다. 통찰 없음·M_total 7 → 필수 계열 출발 ★2 유지.
  tier: star_2
  mechanism_primary: 'x 좌표 식으로 b 결정 → y 좌표 식으로 a 결정 → b:1 내분점 공식 재적용'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\left(\dfrac{19}{4},\,\dfrac{5}{2}\right)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/22-31.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'A·B 의 알려진 좌표와 주어진 내분점, 앞쪽 비 2 를 바꿀 수 있다. 제약 — x 좌표만으로 b 가 양수 정수로 떨어지도록 값을 맞춰야 하고(그래야 y 식이 일차로 남는다), 마지막 b:1 내분점은 분모가 b+1 이라 분수 답을 허용해야 한다.'
    creative: '(1) 마지막에 묻는 것을 중점·외분점으로 바꾸기(★2 유지) (2) 주어진 내분점의 한 좌표만 주고 나머지를 미지수로 두어 연립을 강제(★3 · Mₐ 상승) (3) b 가 두 값 가능하도록 이차가 되게 조건을 바꾸고 b>0 으로 거르기(★3 · I-VF).'
```

```yaml
- id: GN-CM2-23-e8
  page: 23
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    두 점 A(-4, 2), B(5, -6) 에 대하여 선분 AB 를 $t:(1-t)$ 로 내분하는 점이 제3사분면 위에 있도록 하는 실수 t 의 값의 범위.
  category: '매개변수 내분점 → 사분면 조건을 연립부등식으로 → 공통범위'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "제3사분면 위에 있다는 위치 조건을 x<0 이고 y<0 이라는 연립부등식으로 바꿈"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: 't:(1-t) 내분점의 사분면 조건에서 t 의 범위'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    비의 합이 1 이라 분모가 사라져 내분점이 t 의 일차식 (9t-4, 2-8t) 로 깔끔히 나오는 것이 이 유형의 설계다. 사분면 → 부등식 변환 뒤 공통범위를 잡고, 내분점이 존재하려면 0<t<1 이어야 한다는 범위 함정과 부호 함정이 함께 있어 Mₜ 2. 필수 출발 ★2 + 통찰 1개·M_total 8 → ★3.
  tier: star_3
  mechanism_primary: '내분점을 t 의 일차식으로 → 제3사분면 → x<0 · y<0 연립 → 공통범위'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{1}{4}<t<\dfrac{4}{9}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/23-e8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 점의 좌표와 목표 사분면(1·2·3·4)을 바꿀 수 있다. 제약 — 비를 t:(1-t) 로 두는 형태는 유지해야 분모가 1 로 사라지고, 두 부등식의 해가 반드시 겹쳐야 하며 그 교집합이 0<t<1 안에 들어가야 답이 존재한다.'
    creative: '(1) 사분면 대신 어떤 직선의 위쪽·원 내부 조건으로 바꾸기(★3 유지~★4) (2) 범위 대신 t 가 정수·유리수인 개수를 묻기(★3 · I-VF) (3) 비를 t:(2-t) 처럼 합이 상수인 다른 형태로 바꿔 분모가 남게 하기(★4 · Mₖ 상승).'
```

```yaml
- id: GN-CM2-23-e9
  page: 23
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    두 점 A(2, 3), B(-3, 5) 에 대하여 선분 AB 를 $k:2$ 로 내분하는 점이 직선 $y=x+6$ 위에 있을 때 양수 k 의 값.
  category: '매개변수 내분점 → 직선 방정식에 대입 → k 의 방정식'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '내분점이 직선 위에 있을 조건에서 비의 값'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    내분점을 k 의 유리식으로 쓰고 직선 방정식에 그대로 대입하는 표준 절차다. 분모 k+2 가 양변에 같이 걸려 한 번에 지워지므로 k 의 일차방정식으로 끝난다. 착안 지점 없음·M_total 7 → 필수 출발 ★2 유지.
  tier: star_2
  mechanism_primary: '내분점을 k 의 유리식으로 → y=x+6 에 대입 → 분모 소거 → 일차방정식'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$5$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/23-e9.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 점의 좌표, 고정된 비 2, 직선의 기울기·절편을 바꿀 수 있다. 제약 — 분모 소거 후 k 의 계수가 0 이 되지 않아야 하고(그렇지 않으면 해가 없거나 항등식), k 가 양수로 떨어져야 한다.'
    creative: '(1) 직선 대신 x축·y축 위 조건으로 바꾸기(★2 유지, 더 쉬움) (2) 내분점이 원 위에 있게 해 k 의 이차방정식으로(★3~4 · I-VF 로 양수 거르기) (3) k 를 주고 직선의 미지 계수를 묻는 역방향(★3 · I-BW).'
```

```yaml
- id: GN-CM2-23-32
  page: 23
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 점 A(-2, 4), B(1, -1) 에 대하여 선분 AB 를 $(1-t):t$ 로 내분하는 점이 제1사분면 위에 있도록 하는 t 의 범위가 $\alpha<t<\beta$ 일 때 $\dfrac{1}{\alpha}+\dfrac{1}{\beta}$ 의 값.
  category: '매개변수 내분점 → 사분면 조건 연립 → 양 끝값으로 식 계산'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "제1사분면 위에 있다는 위치 조건을 x>0 이고 y>0 이라는 연립부등식으로 바꿈"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '(1-t):t 내분점의 사분면 조건에서 t 의 범위'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    23-e8 과 같은 골조인데 비의 앞뒤가 뒤집혀 있어 어느 점에 (1-t) 가 붙는지부터 정확히 읽어야 한다(표기 함정). 내분점이 (1-3t, 5t-1) 로 나오고 두 부등식의 공통범위가 그대로 α<t<β 가 되며 마지막에 역수 합을 한 번 계산한다. 필수 계열 출발 ★2 + 통찰 1개·M_total 8 → ★3.
  tier: star_3
  mechanism_primary: '내분점을 t 의 일차식으로 → 제1사분면 → x>0 · y>0 연립 → 양 끝값 α·β → 역수 합'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/23-32.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 점의 좌표와 목표 사분면, 마지막에 묻는 대칭식(α+β·αβ·1/α+1/β)을 바꿀 수 있다. 제약 — 비의 합이 1 인 형태를 유지해야 분모가 사라지고, α·β 가 단위분수여야 역수 합이 정수로 떨어진다.'
    creative: '(1) 마지막을 β-α 나 구간의 길이로 바꾸기(★3 유지) (2) 사분면 대신 두 좌표의 부호가 같을 조건으로 주어 두 경우를 모두 따지게 하기(★4 · I-MI) (3) t 의 범위를 먼저 주고 내분점이 지나는 자취를 묻기(★4 · I-RT).'
```

```yaml
- id: GN-CM2-23-33
  page: 23
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 점 A(-3, 0), B(0, 12) 에 대하여 선분 AB 를 $1:k$ 로 내분하는 점이 직선 $y=-x+2$ 위에 있을 때 양수 k 의 값.
  category: '매개변수 내분점 → 직선 방정식에 대입 → k 의 방정식'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '내분점이 직선 위에 있을 조건에서 비의 값'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    23-e9 와 같은 골조이고 미지수가 비의 뒤쪽에 붙은 형태다. 두 점이 각각 축 위에 있어 내분점의 성분이 -3k/(1+k), 12/(1+k) 로 단순해지고 분모를 지우면 k 의 일차방정식. 통찰 없음·M_total 7 → 필수 계열 출발 ★2 유지.
  tier: star_2
  mechanism_primary: '내분점을 k 의 유리식으로 → y=-x+2 에 대입 → 분모 소거 → 일차방정식'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/23-33.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 점의 좌표(축 위에 두면 계산이 가벼워진다)와 직선의 기울기·절편을 바꿀 수 있다. 제약 — 분모 소거 뒤 k 의 계수가 살아 있어야 하고 해가 양수여야 한다.'
    creative: '(1) 비를 1:k 대신 k:1 로 바꿔 어느 쪽에 가중치가 붙는지 다시 읽게 하기(★2 유지) (2) 내분점이 직선 위이면서 제2사분면일 조건까지 걸어 범위와 값을 함께 묻기(★3 · I-EQV 추가) (3) 직선을 두 점을 지나는 다른 직선으로 바꿔 k 가 무수히 많은 경우를 만들고 그 이유를 묻기(★4 · I-BW).'
```

```yaml
- id: GN-CM2-24-e10
  page: 24
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["발전"]
  category_type: "발전 예제"
  summary: |
    두 점 A(2, 3), B(-1, 6) 을 이은 선분 AB 의 연장선 위의 점 C 에 대하여 $\seg{AB}=3\seg{BC}$ 일 때 점 C 의 좌표.
  category: '연장선 위의 점 → 길이 등식으로 방향 판정 → B 가 AC 의 내분점'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "AB=3BC 에서 BC<AB 이므로 C 가 B 쪽 연장선 위임을 정하고, AC=AB+BC=4BC 로 묶어 B 가 선분 AC 를 3:1 로 내분한다는 조건으로 바꿈"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '선분의 연장선 위의 점 (길이 등식을 내분 관계로 전환)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    교과 범위에 외분점이 없으므로 연장선 문제를 내분으로 되돌리는 것이 이 유형의 전부다. 길이 비교로 C 의 방향을 먼저 정하고(A 쪽이면 BC>AB 가 되어 모순) B 를 AC 의 내분점으로 보면 4B=A+3C 한 줄로 끝난다. 방향과 비 순서라는 함정 둘로 Mₜ 2. 발전 예제 출발 ★3, 통찰 1개·M_total 7 → ★3 유지.
  tier: star_3
  mechanism_primary: '길이 비교로 C 의 방향 판정 → B 를 AC 의 3:1 내분점으로 → 내분점 공식을 C 에 대해 역산'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$(-2,\,7)$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/24-e10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 점의 좌표와 배수 3 을 바꿀 수 있다. 제약 — 배수를 1 보다 크게 두어야 C 의 방향이 한쪽으로 확정되고(=기각할 경우가 생기지 않고), 4B-A 꼴이 3 으로 나누어떨어져야 C 가 정수 좌표가 된다.'
    creative: '(1) 묻는 것을 C 의 좌표 대신 AC 의 길이·삼각형 넓이로 바꾸기(★3 유지) (2) 배수를 1 보다 작게 해 두 방향이 모두 가능하게 만들기(★4 · I-MI 추가) (3) C 를 주고 B 를 되묻는 역방향(★4 · I-BW, 24-36 이 이 형태).'
```

```yaml
- id: GN-CM2-24-34
  page: 24
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 점 A(-2, -1), B(3, 1) 을 이은 선분 AB 의 연장선 위의 점 C(a, b) 에 대하여 $3\seg{AB}=2\seg{BC}$ 일 때 ab 의 값 (a>0).
  category: '연장선 위의 점 → 두 방향 분기 → a>0 으로 기각 → 내분 관계로 역산'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "BC=1.5AB 를 AC=AB+BC 로 묶어 B 가 선분 AC 를 2:3 으로 내분한다는 조건으로 바꿈"
    - step: 2
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "C 가 A 쪽 연장선 위여도 BC=AB+AC=1.5AB 가 성립하므로 후보가 둘이고, 그중 a<0 인 쪽을 단서 a>0 으로 기각"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: '선분의 연장선 위의 점 (길이 등식을 내분 관계로 전환)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    24-e10 과 같은 골조이나 배수가 1 보다 작은 쪽(AB:BC=2:3)이라 A 쪽 연장선도 길이 등식을 만족해 후보가 둘 생기고, 단서 a>0 이 그중 하나를 거른다. 이 점 때문에 통찰이 두 개지만 확인체크는 앞 발전 예제의 반복 자리이므로 라벨은 ★3 으로 둔다. [분류 이슈] 통찰 2개 규칙만 보면 ★4 후보 — 연장선을 양쪽으로 볼지 B 쪽만 볼지의 정책에 따라 달라짐.
  tier: star_3
  mechanism_primary: 'AB:BC=2:3 → B 를 AC 의 2:3 내분점으로 → C 후보 두 개 → a>0 으로 기각 → ab'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$42$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/24-34.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 점의 좌표와 비 3:2 를 바꿀 수 있다. 제약 — 5B-3A 가 2 로 나누어떨어지지 않으면 답이 분수가 되므로 좌표차를 짝수로 두고, 거르는 단서(a>0 · b<0 등)는 두 후보의 부호가 실제로 갈리는 성분에 걸어야 한다.'
    creative: '(1) 단서를 지우고 가능한 C 를 모두 구하게 하기(★4 · I-MI) (2) 묻는 값을 a+b·선분 AC 의 길이로 바꾸기(★3 유지) (3) C 를 고정하고 B 를 묻는 역방향으로 돌리기(★4 · I-BW).'
```

```yaml
- id: GN-CM2-24-35
  page: 24
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 점 A(-1, -2), B(3, 6) 을 이은 선분 AB 의 연장선 위의 점 C 에 대하여 $2\seg{AC}=3\seg{BC}$ 일 때 점 C 의 좌표.
  category: '두 길이가 모두 C 를 포함 → 방향 판정 → B 가 AC 의 내분점'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "AC:BC=3:2 에서 AC>BC 이므로 C 는 B 쪽 연장선 위이고 AC=AB+BC 로 두면 AB:BC=1:2, 즉 B 가 선분 AC 를 1:2 로 내분함"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '선분의 연장선 위의 점 (길이 등식을 내분 관계로 전환)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    앞의 두 문항과 달리 등식의 양쪽 길이가 모두 C 를 포함해 비를 바로 읽을 수 없고, AC=AB+BC 로 풀어 AB 를 끼워 넣어야 B 가 AC 의 내분점이라는 관계가 나온다. A 쪽 연장선으로 두면 AB 가 음수가 되어 모순이므로 방향은 하나뿐이다. 발전 계열 출발 ★3, 통찰 1개·M_total 7 → ★3 유지.
  tier: star_3
  mechanism_primary: 'AC:BC=3:2 → AC=AB+BC 로 AB:BC=1:2 → B 를 AC 의 1:2 내분점으로 → C 역산'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$(11,\,22)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/24-35.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 점의 좌표와 비 2:3 을 바꿀 수 있다. 제약 — AC>BC 가 되도록 계수를 잡아야 방향이 하나로 확정되고, 3B-2A 가 정수 좌표가 되도록 좌표를 정수로 둔다.'
    creative: '(1) AC<BC 가 되게 뒤집어 C 가 A 쪽으로 가게 하기(★3 유지 · 방향 감각 점검) (2) 세 점이 한 직선 위에 있다는 사실만 주고 C 를 지나는 직선의 방정식을 묻기(★4 · I-RT) (3) 2AC=3BC 를 좌표 거리식으로 직접 세워 이차방정식으로 풀게 유도하고 두 근 중 하나를 기각시키기(★4 · I-VF).'
```

```yaml
- id: GN-CM2-24-36
  page: 24
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 점 A(-3, -2), B 와 선분 AB 의 연장선 위의 점 C(18, 7) 에 대하여 $2\seg{AB}=\seg{BC}$ 를 만족시키는 점 B 의 좌표를 모두 구하기.
  category: '중간 점이 미지 → 연장선 두 방향 모두 유효 → 내분점·중점으로 각각 역산'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "끝점 C 와 길이 조건만 주어진 상태에서 선분의 중간 점 B 를 역추적해야 하므로 B 를 A·C 의 내분점으로 표현하는 방향을 먼저 세움"
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "C 가 B 쪽 연장선에 있으면 AC=3AB 로 B 는 AC 의 1:2 내분점, C 가 A 쪽 연장선에 있으면 AC=AB 로 A 가 BC 의 중점 — 두 경우가 모두 조건을 만족해 답이 둘"
  insight_count: 2
  depth_score: 4.00
  type_id: null
  type_hint: '연장선 위의 점에서 끝점 역산 (두 방향 모두)'
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    이 범위에서 유일하게 방향 분기 두 개가 모두 살아남는 문항이고(답이 두 점), 미지의 점이 선분 안쪽 B 라 역추적이 필요하다. 한 경우는 내분점 공식, 다른 경우는 A 가 중점이라는 전혀 다른 관계식으로 풀려 갈래마다 도구가 바뀐다. 발전 계열 출발 ★3 + 통찰 2개 → ★4. [분류 이슈] 연장선을 양쪽으로 해석해야 답이 둘이 되는데 벤더 라벨은 앞 예제와 같은 확인체크 자리다.
  tier: star_4
  mechanism_primary: 'C 의 위치를 두 경우로 분기 → (i) B 는 AC 의 1:2 내분점 (ii) A 는 BC 의 중점 → 각각 B 역산'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$(4,\,1)$, $(-24,\,-11)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/24-36.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'A·C 의 좌표와 배수 2 를 바꿀 수 있다. 제약 — 두 경우의 답이 모두 정수 좌표가 되려면 C-A 의 성분이 3 의 배수여야 하고(첫 경우), 배수를 1 로 두면 두 경우가 겹쳐 답이 하나로 줄어든다.'
    creative: '(1) 한 방향만 답이 되도록 사분면·부호 단서를 붙여 기각 구조로 바꾸기(★3~4 · I-VF) (2) 두 B 사이의 거리를 묻기(★4 유지 · Mₛ +1) (3) 배수를 미지수 k 로 두고 B 가 두 개 존재할 k 의 조건을 묻기(★5 후보 · I-BW+I-MI).'
```

```yaml
- id: GN-CM2-25-e11
  page: 25
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    평행사변형 ABCD 의 세 꼭짓점이 A(0, 6), B(6, -2), C(7, 5) 일 때 꼭짓점 D 의 좌표.
  category: '평행사변형 → 두 대각선의 중점이 일치 → D 역산'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "평행사변형이라는 도형 조건을 두 대각선 AC, BD 의 중점이 같다는 좌표 등식으로 바꿈"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '평행사변형의 네 번째 꼭짓점 (대각선 중점 일치)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    풀이 자체는 중점 등식 한 줄이고 계산도 D=A+C-B 로 끝난다. 변별은 꼭짓점 이름 순서 ABCD 에서 대각선이 AC 와 BD 라는 것을 읽는 데 있다(순서를 잘못 잡으면 다른 점이 나온다). 필수 출발 ★2, 통찰 1개·depth 1·M_total 4 → ★2 유지(통찰이 있어 -1 규칙은 적용하지 않음).
  tier: star_2
  mechanism_primary: '대각선 AC 와 BD 의 중점이 같다 → D = A + C - B'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$(1,\,13)$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/25-e11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '세 꼭짓점의 좌표를 자유롭게 바꿀 수 있다. 제약 — 세 점이 한 직선 위에 있으면 평행사변형이 되지 않으므로 피하고, D=A+C-B 이므로 정수 좌표는 자동으로 보존된다.'
    creative: '(1) 빠진 꼭짓점을 B 나 C 로 바꿔 순서 읽기를 다시 시키기(★2 유지) (2) 네 번째 점이 될 수 있는 점을 모두 구하게 하기(어느 변이 대각선인지 세 경우 · ★4 · I-MI) (3) 평행사변형의 넓이나 두 대각선의 길이까지 묻기(★3 · Mₛ 상승).'
```

```yaml
- id: GN-CM2-25-37
  page: 25
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    네 점 A(-1, 0), B(a, 1), C(0, 3), D(-3, b) 에 대하여 사각형 ABCD 가 평행사변형일 때 ab 의 값.
  category: '평행사변형 → 대각선 중점 일치 → 미지수 두 개 결정'
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "평행사변형 조건을 대각선 AC, BD 의 중점이 같다는 좌표 등식으로 바꿔 x·y 성분별 일차식 두 개를 얻음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '평행사변형 조건에서 미지수 결정 (대각선 중점 일치)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    25-e11 의 같은 등식을 미지수 두 개에 대해 성분별로 나눠 푸는 형태다. x 성분 식에서 a, y 성분 식에서 b 가 각각 따로 떨어져 연립이랄 것도 없다. 통찰 1개·M_total 5 → 필수 계열 출발 ★2 유지. [분류 이슈] 평행사변형 성질 적용을 통찰(I-EQV)로 셀지 표준 절차로 셀지에 따라 insight_type 이 갈림 — ★ 는 어느 쪽이든 ★2.
  tier: star_2
  mechanism_primary: '대각선 AC 와 BD 의 중점 일치 → x 성분으로 a, y 성분으로 b → ab'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/25-37.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '네 점의 알려진 좌표와 미지수의 자리(어느 점의 어느 성분을 미지수로 둘지)를 바꿀 수 있다. 제약 — 미지수 두 개가 서로 다른 성분에 흩어져 있어야 각각 독립으로 풀리고, 같은 성분에 몰면 부정이 된다.'
    creative: '(1) 미지수를 한 점에 몰아 두 성분을 동시에 묻기(★2 유지) (2) 평행사변형 대신 사다리꼴·마름모 조건으로 바꾸기(★3 · 조건 하나 추가) (3) 네 점의 순서를 밝히지 않고 평행사변형이 되게 하는 경우를 모두 찾게 하기(★4 · I-MI).'
```

```yaml
- id: GN-CM2-25-38
  page: 25
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    네 점 A(2, 1), B(b, 5), C(a, 7), D(-2, 3) 을 꼭짓점으로 하는 사각형 ABCD 가 마름모일 때 a+b 의 값 (a<0).
  category: '마름모 = 평행사변형 + 이웃 변 길이 같음 → 중점 일치와 거리 등식 결합 → 두 해 중 기각'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "마름모를 평행사변형 조건(대각선 중점 일치)과 이웃 변 길이 조건(AB=AD) 두 개로 쪼개 a, b 사이의 일차 관계와 거리 등식을 하나로 묶음"
    - step: 2
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "거리 등식이 이차라 b 가 두 값 나오고 그에 따른 a 두 개 중 단서 a<0 을 만족하지 않는 쪽을 기각"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: '마름모 조건 (대각선 중점 일치 + 이웃 변 길이)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    중점 일치만 쓰면 미지수 두 개에 식이 하나뿐(y 성분은 항등식이 되어 정보가 없다)이라 반드시 변 길이 조건을 더 얹어야 한다는 점이 이 문항의 관문이다. 결합 후 이차식이 나와 후보가 둘 생기고 a<0 으로 하나를 거른다. 필수 계열 출발 ★2 + 통찰 2개 → ★3.
  tier: star_3
  mechanism_primary: '대각선 중점 일치로 b=a+4 → AB=AD 거리 등식 → 이차 → a<0 으로 기각 → a+b'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/25-38.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '네 점의 알려진 좌표와 미지수 자리를 바꿀 수 있다. 제약 — 중점 일치에서 한 성분이 항등식이 되도록(정보가 하나만 나오도록) y 좌표를 맞춰야 거리 조건이 필요해지고, 거리 등식의 판별식이 완전제곱이어야 답이 정수로 떨어진다.'
    creative: '(1) 마름모 대신 직사각형으로 바꿔 대각선 길이 같음 조건을 쓰게 하기(★3 유지 · I-CON) (2) 단서 a<0 을 빼고 가능한 사각형을 모두 구하게 하기(★4 · I-MI) (3) 마름모의 넓이(대각선 곱의 절반)까지 이어 묻기(★4 · Mₛ 상승).'
```

```yaml
- id: GN-CM2-26-e12
  page: 26
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    세 점 A(1, 5), B(-4, -7), C(5, 2) 를 꼭짓점으로 하는 삼각형 ABC 에서 각 A 의 이등분선이 변 BC 와 만나는 점 D 의 좌표.
  category: '각의 이등분선 정리 → 두 변의 길이 비 → BC 의 내분점'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "중학 평면도형의 각의 이등분선 정리(BD:DC = AB:AC)를 끌어와야 좌표 내분점 공식으로 넘어갈 수 있음 — 두 단원의 도구가 모두 필요"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '삼각형 내각의 이등분선과 내분점'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    좌표만 보고는 D 를 잡을 방법이 없고, 각의 이등분선 정리로 비를 만들어야 비로소 내분점 공식이 쓰인다. 거리 공식으로 AB=13, AC=5 를 구해 13:5 로 BC 를 내분하는 2단 구성. 필수 출발 ★2 + 단원 밖 도구(I-XU) → ★3. [분류 이슈] 중학 도형 정리를 단원 밖 도구로 인정할지에 따라 ★2 도 가능.
  tier: star_3
  mechanism_primary: '거리 공식으로 AB·AC → 각의 이등분선 정리로 BD:DC=AB:AC → BC 의 내분점 공식'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\left(\dfrac{5}{2},\,-\dfrac{1}{2}\right)$'
  answer_source: "본문 풀이"
  figure: "crop:fig-26-e12.png"
  latex: latex-bank/gn-cm2/items/26-e12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '세 꼭짓점의 좌표를 바꿀 수 있다. 제약 — AB, AC 가 모두 무리수가 되지 않도록 A 에서의 두 변 성분을 피타고라스 쌍(3·4·5, 5·12·13, 8·15·17)으로 잡아야 비가 정수로 떨어지고 D 의 좌표가 정리된다.'
    creative: '(1) 외각의 이등분선으로 바꿔 연장선 위의 점을 묻기(★4 · I-XU+I-EQV) (2) D 의 좌표 대신 BD 의 길이나 삼각형 ABD 의 넓이를 묻기(★3 유지) (3) 이등분선이 지나는 직선의 방정식까지 잇기(★4 · 26-40 형태).'
```

```yaml
- id: GN-CM2-26-39
  page: 26
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    세 점 A(4, 9), B(0, 1), C(6, 5) 를 꼭짓점으로 하는 삼각형 ABC 에서 각 A 의 이등분선이 변 BC 와 만나는 점 D 의 좌표가 (a, b) 일 때 a+b 의 값.
  category: '각의 이등분선 정리 → 두 변의 길이 비 → BC 의 내분점'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "각의 이등분선 정리로 BD:DC = AB:AC 를 세워야 좌표 계산으로 넘어갈 수 있음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '삼각형 내각의 이등분선과 내분점'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    26-e12 와 같은 골조. AB, AC 가 각각 4√5, 2√5 로 나와 무리수 그대로 두지 말고 2:1 로 약분해야 내분 계산이 깔끔해진다는 점만 다르다. 필수 계열 출발 ★2 + 단원 밖 도구(I-XU) → ★3.
  tier: star_3
  mechanism_primary: '거리 공식으로 AB·AC → 비를 약분해 2:1 → BC 의 내분점 → a+b'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{23}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/26-39.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '세 꼭짓점의 좌표를 바꿀 수 있다. 제약 — 두 변의 길이가 같은 무리수 배수(k√n 꼴)가 되게 두면 약분으로 정수비가 나와 답이 정리되고, 비의 합이 BC 성분차를 나누면 정수 좌표가 된다.'
    creative: '(1) 묻는 값을 ab·BD:DC 로 바꾸기(★3 유지) (2) D 를 주고 C 를 되묻는 역방향(★4 · I-BW) (3) 각 A 의 이등분선과 각 B 의 이등분선의 교점(내심)을 묻기(★5 후보 · I-XU 두 번).'
```

```yaml
- id: GN-CM2-26-40
  page: 26
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 점 A(-3, 0), B(3, 4) 를 이은 선분 AB 위의 점 P 가 $\angle\pt{AOP}=\angle\pt{BOP}$ 를 만족시킬 때 직선 OP 의 방정식 (O 는 원점).
  category: '각 조건 → 삼각형 OAB 의 내각 이등분선 → OA:OB 내분점 → 직선의 방정식'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "각 AOP 와 각 BOP 가 같다는 조건을 원점 O 를 꼭짓점으로 하는 삼각형 OAB 에서 OP 가 각 O 의 이등분선이라는 도형 조건으로 바꿈"
    - step: 2
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "각의 이등분선 정리로 AP:PB = OA:OB 를 얻어야 좌표 내분점으로 넘어갈 수 있음 — 도형 정리와 좌표 도구가 모두 필요"
  insight_count: 2
  depth_score: 4.00
  type_id: null
  type_hint: '원점에서의 각 이등분 조건 → 내분점 → 직선의 방정식'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    삼각형이 발문에 그려져 있지 않고 각의 등식만 주어져, 원점을 꼭짓점으로 하는 삼각형을 스스로 세우는 단계가 앞에 하나 더 붙는다. 그 뒤는 OA=3, OB=5 로 P 가 AB 의 3:5 내분점, 마지막에 원점을 지나는 직선이라 기울기만 구하면 된다. 필수 계열 출발 ★2 + 통찰 2개 → ★3.
  tier: star_3
  mechanism_primary: '각 등식 → OP 는 삼각형 OAB 의 각 O 이등분선 → AP:PB=OA:OB=3:5 → P 좌표 → y=(기울기)x'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$y=-2x$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/26-40.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 점 A·B 의 좌표를 바꿀 수 있다. 제약 — OA, OB 가 정수가 되도록 두 점을 원점 기준 피타고라스 쌍 위에 두어야 비가 깔끔하고, 마지막 기울기가 정수·간단한 분수로 떨어지려면 P 의 두 좌표가 같은 분모를 갖게 좌표를 조정한다.'
    creative: '(1) 꼭짓점을 원점이 아닌 제3의 점으로 옮기기(★4 · 거리 계산 부담 상승) (2) 직선 OP 대신 P 의 좌표나 삼각형 OAP 의 넓이를 묻기(★3 유지) (3) 각 조건을 외각 이등분으로 바꿔 P 가 연장선 위에 오게 하기(★4~5 · I-XU+I-EQV).'
```

## 표본 판정 요약 (21문)

- ★ 분포: ★1 3 · ★2 8 · ★3 9 · ★4 1 · ★5 0
- 통찰형 13 · 절차형 8 · premium 0 · novelty_score 는 전부 0(카탈로그 미정)
- 통찰 유형 분포(총 17개 라벨): I-EQV 9 · I-XU 3 · I-VF 2 · I-BW 1 · I-MI 1 · I-CON 1. depth 3 은 없음
- M_total 분포: 4 가 4문 · 5 가 1문 · 6 이 5문 · 7 이 6문 · 8 이 5문
- type_hint 상위 5: 「선분의 연장선 위의 점(길이 등식을 내분 관계로 전환)」 3 · 「삼각형 내각의 이등분선과 내분점」 2 · 「평행사변형·마름모의 대각선 중점 일치」 3(평행사변형 2 · 마름모 1) · 「내분점이 직선 위에 있을 조건에서 비의 값」 2 · 「사분면 조건에서 매개변수 t 의 범위」 2
- 대상층: 하위권 3 · 중하위권 5 · 중위권 5 · 중상위권 8
- 그림: 2문(`crop:fig-21-26.png` · `crop:fig-26-e12.png`). 두 그림 모두 발문에 구조가 그대로 서술되어 있어 골조·답에 영향을 주지 않는다
- 답 확인 필요로 표시한 문항: 없음(골조를 잡는 동안 전사본 answer 와 모순되는 조건은 나오지 않았다)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CM2-24-34 | 「선분 AB 의 연장선」을 양쪽으로 보면 후보가 둘이고 단서 a>0 이 하나를 기각한다(I-VF). 통찰 2개 규칙으로는 ★4 후보지만 앞 발전 예제를 그대로 반복하는 확인체크 자리라 ★3 으로 둠 | ★3 / ★4 |
| GN-CM2-24-36 | 답이 두 점이라 연장선을 양쪽으로 해석하는 것이 확정적이며 갈래마다 도구가 달라진다(내분점 vs 중점). 벤더 자리는 확인체크인데 판정은 ★4 | ★4 / ★3 |
| GN-CM2-25-37 | 평행사변형 성질(대각선 중점 일치) 적용을 통찰(I-EQV)로 셀지 표준 절차로 셀지에 따라 insight_type 이 통찰형/절차형으로 갈림. ★ 는 어느 쪽이든 ★2 | ★2 |
| GN-CM2-26-e12 | 중학 평면도형의 각의 이등분선 정리를 단원 밖 도구(I-XU)로 인정해 +1 했다. 고등 교육과정 안의 기지 정리로 보면 ★2 유지. 26-39·26-40 도 같은 정책을 따름 | ★3 / ★2 |

## 카탈로그 차원 메모

나중에 공통수학2 유형 카탈로그를 만들 때 참고할 것.

- **따로 세워야 할 유형**: ① 「선분의 연장선 위의 점」(24-e10·34·35·36 · 4문) — 교과에 외분점이 없어 길이 등식을 내분 관계로 되돌리는 전환이 필수이고, 연장선의 방향 해석(한쪽/양쪽)이 답의 개수를 바꾸므로 base ★ 3 으로 독립 유형이 맞다. 방향 분기가 살아 있는 24-36 형태는 base ★ 4 의 하위 유형으로 분리해도 좋다. ② 「각의 이등분선과 내분점」(26-e12·39·40 · 3문) — 좌표 도구만으로는 진입이 불가능하고 도형 정리를 끌어와야 하는 유일한 묶음이라 base ★ 3.
- **통합해도 될 유형**: ① 「내분점이 직선 위에 있을 조건」(23-e9·33)과 「내분점의 사분면 조건」(23-e8·32)은 둘 다 「매개변수를 품은 내분점 → 위치 조건을 식·부등식으로」 한 골조이므로 상위 유형 하나 아래 등식형/부등식형 두 변종으로 두면 충분하다(부등식형이 base ★ 한 단 위). ② 「수직선·좌표평면의 내분점·중점 기본 계산」(21-26·27·28)은 세 문항이 같은 공식 확인이라 base ★ 1 의 한 유형으로 묶인다. ③ 「내분점 두 개를 잡고 거리·중점」(22-e7·29)도 마지막 도구만 다를 뿐이라 한 유형의 두 변종.
- **반복된 type_hint**: 연장선 위의 점 4 · 각의 이등분선 3 · 평행사변형과 마름모 3 · 기본 계산 3 · 직선 위 조건 2 · 사분면 조건 2 · 내분점 두 개 조합 2 · 미지수 역산 후 재적용 2(22-30·22-31).
- **★ 천장**: 이 단원은 도구가 내분점 공식 하나뿐이라 ★5 가 나오지 않는다(★5 는 I-SC/I-VF/I-SYM/I-XU 중 하나 + 통찰 3개 필요). ★5 슬롯이 필요하면 내분점을 좌표 도형의 다른 단원(직선의 방정식·원의 방정식)과 묶는 변형(variation_notes.creative 의 3번 항목들)에서 만들어야 한다.
