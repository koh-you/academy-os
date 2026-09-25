---
name: mechanism-데이터-GN-CM2-07-p3
description: 개념원리 공통수학2 07 원의 방정식(3/3 · 75-167~78-183) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학2 (22개정) · 전사본 latex-bank/gn-cm2
  section: 07 원의 방정식
  unit_code: CM2-07
  part: "3/3"
  extract_range: "75~78쪽 · 75-167~78-183"
  total_problems: 18
  unit_total: 45
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm2/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm2/items/<id>.tex
  image_source: latex-bank/gn-cm2/figures/ (crops.json)
---

# 개념원리 공통수학2 · 07 원의 방정식 (3/3) 정독 데이터 (v1.0)

이 파일은 07단원 45문 중 마지막 18문(75~78쪽 · 75-167~78-183)을 다룬다. 구역은 넷이다. 「필수·발전 예제」 끝자락 6문(원 위의 점까지의 거리의 최대·최소, 그리고 아폴로니우스 원을 비롯한 「점이 나타내는 도형의 방정식」), 「연습문제 STEP 1」 6문, 「연습문제 STEP 2」 4문, 「연습문제 실력 UP」 2문이다. 단원 전체를 되짚는 마무리 구간이라 원의 결정 조건(세 점·지름 양 끝·접선 조건), 일반형과 표준형의 왕복, 자취, 거리의 최대·최소가 고르게 섞여 있다.

개념원리 고등의 벤더 난이도 신호는 구역과 예제 태그다. 이 범위의 출발점은 다음과 같이 잡았다.

- 「필수·발전 예제」 구역의 통번호 문항은 tag 가 「확인체크」이지만 직전 예제(여기서는 발전 예제 76-e10 계열)를 그대로 확인하는 자리이므로, 「개념원리 익히기」의 ★1 이 아니라 **예제 태그를 출발점**으로 삼았다(필수 ★2 · 발전 ★3). 골조가 예제보다 한 단계 단순하면 −1 했다.
- 「연습문제 STEP 1」 ★2 · 「STEP 2」 ★3 · 「실력 UP」 ★4 출발. 「교육청 기출」 태그는 통찰이 실제로 있을 때만 +1 을 고려했다.
- `\cond{}` 로 명시된 범위 단서(`a<5` 등)는 학생이 스스로 발견하는 조건이 아니므로 통찰(I-VF)로 세지 않고 함정 축 Mₜ(T-범위)로만 반영했다.
- v3.8 에서 계산 마찰은 ★ 상승 신호가 아니므로, 78-180 처럼 연립이 무거운 문항도 통찰 수를 기준으로 ★3 에 머물게 두었다.

이 파일의 주 용도는 숫자 변형·창의 변형의 **원본**이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(통찰 유형·depth) · `variation_notes`(바꿔도 되는 수와 제약 / 골조를 유지한 설정 변형과 ★ 변동 지점)를 채웠다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-CM2-75-167
  page: 75
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "필수·발전 예제"
  summary: |
    원점 O 와 원 x²+y²-2x-10y+10=0 위의 점 A 에 대하여 선분 OA 길이의
    최댓값 M, 최솟값 m 을 구해 M²+m² 의 값을 묻는다.
  category: "일반형 → 표준형(중심·반지름) → 중심거리 ± 반지름"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "원 위의 점과 정점 사이 거리의 최대·최소"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    완전제곱으로 중심 (1,5) · 반지름 4 를 얻고, 중심거리 √26 에 반지름을 더하고 빼면
    M, m 이 바로 나온다. 이 구역의 필수예제가 세운 공식을 그대로 쓰는 확인 문항이라
    통찰 0. M²+m²=2(d²+r²) 로 묶으면 제곱근이 사라지지만 직접 전개해도 한 줄이라
    대칭성 활용을 통찰로 세지 않았다. M_total 6 이라 절차형 감점도 붙지 않아 ★2.
  tier: star_2
  mechanism_primary: "일반형 완전제곱 → 중심 C·반지름 r → d(O,C)=√26 → M=d+r, m=d-r → M²+m²"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$84$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/75-167.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "원의 일반형 계수(x·y 항, 상수항)를 바꿔 중심·반지름을 조정할 수 있고, 정점을 원점이 아닌 다른 격자점으로 옮길 수도 있다. 제약: ① 완전제곱 후 r²>0 이어야 하고 ② 정점이 원 바깥에 있어야 m=d-r 이 성립하므로 d>r 을 반드시 확인하며 ③ M²+m²=2(d²+r²) 라 d² 와 r² 만 유리수면 답이 정수로 떨어진다 — d 자체는 무리수여도 좋다."
    creative: "(1) M²+m² 대신 M·m(=d²-r²) 이나 M-m(=2r) 을 물으면 골조는 같고 ★2 유지 (2) 정점을 원 내부에 두면 최솟값이 r-d 로 바뀌어 위치 판별이 강제되므로 I-MI d1 이 붙고 ★3 (3) 정점 대신 직선까지의 거리의 최대·최소로 바꾸면 점과 직선 사이의 거리 공식이 결합돼 ★3 (4) 정점 좌표에 문자를 넣고 M=3m 같은 조건을 주면 역추적이 생겨 I-BW d2 · ★4."
```

```yaml
- id: GN-CM2-75-168
  page: 75
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "필수·발전 예제"
  summary: |
    원 (x+5)²+(y-4)²=r² 밖의 점 P(-1,1) 과 원 위의 점 Q 에 대하여 선분 PQ
    길이의 최솟값이 3 일 때 양수 r 의 값을 묻는다.
  category: "중심거리 − 반지름 = 최솟값 → r 역산"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "원 위의 점과 정점 사이 거리의 최소에서 반지름 역산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    중심 (-5,4) 와 P 사이의 거리 5 를 구하고 5-r=3 을 풀면 끝이다. 「밖의 점」이
    발문에 명시돼 최솟값 공식의 갈래가 이미 정해져 있어 통찰이 생기지 않는다.
    통찰 0 · M_total 4 로 절차형 감점이 붙어 확인체크 출발점 ★2 에서 −1 한 ★1.
  tier: star_1
  mechanism_primary: "d(P,C)=5 계산 → 최솟값 d-r=3 → r=2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/75-168.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "중심과 P 의 좌표를 3·4·5 나 5·12·13 같은 피타고라스 쌍으로 잡아 d 가 정수가 되게 하고, 최솟값을 d 보다 작은 정수로 주면 r 이 양의 정수로 떨어진다. 제약: ① r>0 이어야 하므로 최솟값 < d ② 「밖의 점」을 유지하려면 d>r, 즉 주어진 최솟값이 양수여야 한다."
    creative: "(1) 최솟값 대신 최댓값(d+r)을 주면 같은 골조 ★1 (2) 「밖의 점」 단서를 빼고 최솟값만 주면 P 가 안인지 밖인지 두 경우를 따져야 해 I-MI d1 · ★2 (3) P 를 원 위의 점으로 두고 두 점 사이 거리의 최대를 물으면 지름 개념이 들어가 ★2 (4) 점 대신 또 하나의 원을 두고 최솟값이 3 이 되는 r 을 물으면 두 원의 위치 관계 분기가 생겨 ★3."
```

```yaml
- id: GN-CM2-76-e10
  page: 76
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["발전"]
  category_type: "필수·발전 예제"
  summary: |
    두 점 A(-1,-1), B(2,2) 에 대하여 AP:BP=2:1 인 점 P 가 나타내는 도형의
    넓이를 묻는다(아폴로니우스 원).
  category: "비 조건 → 제곱해 근호 제거 → 원의 방정식 → 넓이"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "거리의 비라는 기하 조건을 P(x,y) 의 좌표식 AP²=4BP² 로 옮겨 자취가 원임을 끌어냄"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 정점에서의 거리의 비가 일정한 점의 자취(아폴로니우스 원)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    P(x,y) 로 두고 AP:BP=2:1 을 AP²=4BP² 로 제곱해 옮기면 x²+y²-6x-6y+10=0,
    곧 중심 (3,3) · 반지름² 8 인 원이 된다. 기하적 비 조건을 대수식으로 옮기는
    표현 전환이 골조의 전부라 I-RT d1 한 개. 발전 예제 구역 출발점 ★3 을 유지했다.
    비가 1:1 이면 수직이등분선이 되는 예외를 학생이 인지해야 해 Mₜ 에 반영했다.
  tier: star_3
  mechanism_primary: "P(x,y) → AP²=4BP² → 전개·정리 → (x-3)²+(y-3)²=8 → 넓이 8π"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$8\pi$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/76-e10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 정점의 좌표와 비 m:n 을 바꿀 수 있다. 제약: ① m≠n 이어야 원이 된다(m=n 이면 수직이등분선) ② 정리하면 (m²-n²)(x²+y²) 꼴이 나오므로 m²-n² 로 나눈 뒤 중심 좌표와 반지름²이 유리수로 떨어지도록 정점을 잡는다 ③ 넓이를 물으려면 반지름²이 정수가 되는 조합(2:1 · 3:2 · 1:3)이 깔끔하다."
    creative: "(1) 넓이 대신 둘레나 중심의 좌표를 물으면 골조 유지 ★3 (2) 비를 1:1 로 두어 자취가 직선이 되게 하면 예외 인식이 핵심이 돼 I-EQV d2 · ★3 (3) 자취 원 위의 점으로 만드는 삼각형 PAB 의 넓이 최댓값까지 이으면 통찰 2개 · ★4 (4) 정점 하나를 (a,0) 처럼 문자로 두고 자취 원이 원점을 지날 a 를 물으면 역추적이 생겨 I-BW d2 · ★4."
```

```yaml
- id: GN-CM2-76-169
  page: 76
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "필수·발전 예제"
  summary: |
    두 점 A(0,-1), B(2,3) 에 대하여 AP²+BP²=30 을 만족시키는 점 P 가
    나타내는 도형의 넓이를 묻는다.
  category: "거리 제곱의 합 조건 → 좌표 대입 → 원의 방정식 → 넓이"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "거리 제곱의 합이라는 조건을 P(x,y) 좌표식으로 옮겨 자취가 원임을 끌어냄"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "거리 제곱의 합이 일정한 점의 자취"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    P(x,y) 를 대입해 두 제곱거리를 더하면 2x²+2y²-4x-4y+14=30, 정리하면
    중심 (1,1) · 반지름² 10 인 원이다. e10 과 같은 자취 골조이지만 비례식을
    제곱해 정리하는 단계가 없고 조건이 곧바로 제곱합이라 한 단계 짧다.
    발전 예제의 확인체크 출발점 ★3 에서 −1 한 ★2.
  tier: star_2
  mechanism_primary: "P(x,y) → AP²+BP²=30 대입 → 2로 나눠 정리 → (x-1)²+(y-1)²=10 → 넓이 10π"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$10\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/76-169.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 정점의 좌표와 우변 상수를 바꿀 수 있다. 제약: 자취 원의 중심은 항상 AB 의 중점이고 반지름²은 (상수)/2 − (AB²)/4 이므로, 원이 되려면 상수 > AB²/2 여야 하고 넓이를 정수 배 π 로 만들려면 상수와 AB² 를 같은 짝수 꼴로 맞춘다."
    creative: "(1) AP²-BP²=k 로 바꾸면 자취가 직선이 되어 원/직선 판별이 핵심인 ★3 (2) 우변을 문자 k 로 두고 자취가 원이 될 k 의 범위를 물으면 I-EQV d2 · ★3 (3) 정점을 셋으로 늘려 AP²+BP²+CP² 로 하면 무게중심이 중심이 되는 일반화라 ★4 (4) 자취 원이 x축에 접할 조건으로 정점 하나를 역산시키면 I-BW d2 · ★4."
```

```yaml
- id: GN-CM2-76-170
  page: 76
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "필수·발전 예제"
  summary: |
    두 점 A(2,0), B(10,0) 에 대하여 AP:BP=1:3 인 점 P 가 나타내는 도형의
    길이(둘레)를 묻는다.
  category: "비 조건 → 제곱해 근호 제거 → 원의 방정식 → 둘레"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "거리의 비 조건을 9AP²=BP² 로 옮겨 자취 원의 방정식을 끌어냄"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 정점에서의 거리의 비가 일정한 점의 자취(아폴로니우스 원)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e10 과 같은 아폴로니우스 골조인데 두 정점이 모두 x축 위에 있어 전개가 가볍고
    9AP²=BP² 정리 후 (x-1)²+y²=9 가 바로 나온다. 확인체크 자리이고 골조가
    예제보다 단순해 발전 출발점 ★3 에서 −1 한 ★2. 「넓이」가 아니라 「길이」를
    물어 둘레 2πr 로 답해야 하는 표기 함정이 하나 있어 Mₜ 에 반영했다.
  tier: star_2
  mechanism_primary: "P(x,y) → 9AP²=BP² → 정리 → (x-1)²+y²=9 → 둘레 2π·3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$6\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/76-170.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 정점을 x축 위 (a,0), (b,0) 로 두고 비 m:n 을 바꾼다. 제약: ① m≠n ② 내분점·외분점이 지름의 양 끝이 되므로 중심은 (nb+ma)/(n+m) 과 (nb-ma)/(n-m) 의 중점이고, 이 둘이 정수가 되도록 a, b 를 m±n 의 배수로 잡으면 반지름이 정수로 떨어져 둘레가 정수 배 π 가 된다."
    creative: "(1) 둘레 대신 넓이나 중심 좌표를 물으면 골조 유지 ★2 (2) 자취 원과 y축의 교점 개수·위치를 물으면 판별 단계가 붙어 ★3 (3) 정점을 x축에서 떼어 일반 위치로 두면 전개가 무거워지지만 통찰은 그대로라 ★3 을 넘기지 않는다 (4) 비를 문자 k:1 로 두고 자취 원이 원점을 지날 k 를 물으면 I-BW d2 · ★4."
```

```yaml
- id: GN-CM2-76-171
  page: 76
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "필수·발전 예제"
  summary: |
    두 점 A(-2,0), B(3,0) 으로부터의 거리의 비가 3:2 인 점 P 에 대하여
    삼각형 PAB 의 넓이의 최댓값을 묻는다.
  category: "아폴로니우스 원 → 밑변 AB 고정 → 높이 최대 = 반지름"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "거리의 비 조건을 4AP²=9BP² 로 옮겨 P 의 자취가 원 (x-7)²+y²=36 임을 끌어냄"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "삼각형 넓이 최대 조건을 「밑변 AB 는 고정이므로 높이 |y| 가 최대」 즉 자취 원의 반지름으로 동치 변환"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "아폴로니우스 원 위의 점으로 만드는 삼각형의 넓이 최대"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    자취를 구하는 데서 끝나지 않고 그 원을 다시 넓이 최적화의 무대로 쓰는 2단 구조다.
    AB=5 가 고정 밑변이므로 넓이는 |y| 에만 비례하고, 중심이 x축 위라 |y| 의 최댓값이
    곧 반지름 6 이다. 자취 전환(RT)과 넓이 최대의 동치 변환(EQV) 두 통찰이 겹쳐,
    76-169·76-170 과 달리 −1 없이 발전 예제 확인체크 출발점 ★3 을 그대로 유지했다.
  tier: star_3
  mechanism_primary: "4AP²=9BP² → (x-7)²+y²=36 → 밑변 AB=5 고정 · 높이 최대=반지름 6 → 넓이 15"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$15$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/76-171.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정점 좌표와 비 m:n 을 바꾼다. 제약: ① m≠n ② 두 정점이 x축 위에 있어야 「높이 최대 = 반지름」이 곧바로 성립한다 — 정점을 일반 위치로 옮기면 중심에서 직선 AB 까지의 거리를 따로 계산해야 한다 ③ 넓이가 정수가 되려면 AB 와 반지름 중 하나가 짝수여야 한다."
    creative: "(1) 넓이 최댓값 대신 최솟값(0 또는 원이 AB 와 만나는지 판정)을 물으면 경계 처리가 핵심이 돼 I-MI d1 추가 · ★3 (2) 두 정점을 x축에서 떼어 일반 위치로 두면 점과 직선 사이의 거리가 결합돼 I-XU d2 · ★4 (3) 넓이 대신 삼각형 PAB 의 둘레 최댓값을 물으면 최적화가 훨씬 무거워져 ★4~5 (4) 비를 문자로 두고 넓이 최댓값이 주어진 값이 되게 하는 비를 물으면 I-BW d2 · ★4."
```

### 연습문제 STEP 1

```yaml
- id: GN-CM2-77-172
  page: 77
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    중심이 (a,1) 이고 반지름의 길이가 5 인 원이 점 (0,-2) 를 지날 때
    양수 a 의 값을 묻는다.
  category: "중심·반지름 → 표준형에 점 대입 → a 결정"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "중심과 반지름이 주어진 원이 한 점을 지날 조건"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    표준형 (x-a)²+(y-1)²=25 에 (0,-2) 를 넣으면 a²+9=25, a²=16 이고 양수
    조건으로 a=4 를 고른다. 두 근 중 하나를 고르는 단계가 있지만 「양수 a」가
    발문에 명시돼 통찰이 아니라 부호 함정(Mₜ)이다. 통찰 0 · M_total 5 로
    절차형 감점이 걸려 STEP 1 출발점 ★2 에서 −1 한 ★1.
  tier: star_1
  mechanism_primary: "(x-a)²+(y-1)²=25 에 (0,-2) 대입 → a²=16 → 양수 조건 → a=4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/77-172.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "중심의 고정 성분·반지름·지나는 점을 바꾼다. 제약: 대입 후 a²=(정수 제곱) 이 되어야 a 가 정수로 떨어지므로 (반지름, 두 점의 y좌표 차) 를 3·4·5 나 6·8·10 같은 피타고라스 쌍으로 맞춘다."
    creative: "(1) 「양수 a」 단서를 빼고 모든 a 의 합을 물으면 두 근을 모두 살려야 해 골조 유지 ★1~2 (2) 미지수를 중심의 y좌표로 옮기면 동일 ★1 (3) 반지름을 미지로 두고 두 점을 주면 연립이 생겨 ★2 (4) 「원이 x축에 접한다」를 조건으로 더하면 접선 조건이 결합돼 I-EQV d1 · ★2."
```

```yaml
- id: GN-CM2-77-173
  page: 77
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    A(5,1), B(a,-3) 을 지름의 양 끝 점으로 하는 원의 반지름이 √5 일 때
    (단, a<5) 이 원의 방정식을 묻는다.
  category: "지름 길이 조건으로 a 결정 → 중점이 중심 → 표준형"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지름의 양 끝 점이 주어진 원의 방정식(한 끝점이 미지)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    AB=2√5 이므로 AB²=(5-a)²+16=20 에서 5-a=±2, 단서 a<5 로 a=3 을 고른다.
    중심은 중점 (4,-1), 반지름 √5. 「지름의 양 끝 → 중점이 중심」은 이 단원의
    표준 절차이고 a<5 도 발문에 주어진 필터라 통찰 0. M_total 6 으로 절차형
    감점이 없어 STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "AB²=20 → (5-a)²=4 → a<5 로 a=3 → 중점 (4,-1)·반지름 √5 → 표준형"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$(x-4)^2+(y+1)^2=5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/77-173.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 점의 좌표와 반지름을 바꾼다. 제약: ① (두 점의 y좌표 차)² < (2r)² 이어야 a 가 실수로 존재하고 ② 중점이 격자점이 되려면 두 x좌표의 합·두 y좌표의 합이 모두 짝수여야 하며 ③ 답을 표준형으로 깔끔히 쓰려면 반지름²을 정수로 잡는다."
    creative: "(1) a<5 단서를 빼고 가능한 원의 방정식을 모두 구하게 하면 두 해를 모두 살려야 해 I-MI d1 · ★2 (2) 반지름 대신 「원이 원점을 지난다」를 주면 조건 결합이 생겨 I-CON d1 · ★3 (3) 지름의 양 끝 대신 현의 양 끝과 중심의 x좌표를 주면 수직이등분선이 필요해 ★3 (4) 두 끝점을 모두 문자로 두고 중심이 직선 위에 있게 하면 ★4."
```

```yaml
- id: GN-CM2-77-174
  page: 77
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    두 원 (x-1)²+y²=4 와 x²+y²-6x-8y+10=0 의 넓이를 동시에 이등분하는
    직선의 y절편을 묻는다.
  category: "넓이 이등분 ⇔ 중심을 지남 → 두 중심을 지나는 직선 → y절편"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「원의 넓이를 이등분하는 직선」을 「그 원의 중심을 지나는 직선」으로 동치 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 원의 넓이를 동시에 이등분하는 직선"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    조건을 「두 중심 (1,0), (3,4) 를 모두 지나는 직선」으로 바꾸는 한 수가 전부다.
    그 뒤는 두 점을 지나는 직선 y=2x-2 를 구해 y절편 -2 를 읽으면 끝이라
    계산이 가볍다. 통찰 1개가 있어 절차형 감점(M_total 5)은 적용되지 않고
    STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "넓이 이등분 ⇔ 중심 통과 → 두 중심 (1,0),(3,4) → y=2x-2 → y절편 -2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/77-174.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 원의 중심을 바꾸면 되고, 한쪽은 표준형·다른 쪽은 일반형으로 제시해 완전제곱 단계를 유지한다. 제약: ① 두 중심의 x좌표가 달라야 기울기가 정의되고 ② y절편을 정수로 만들려면 (x좌표 차)가 (y좌표 차)를 나누도록 잡으며 ③ 일반형 쪽은 완전제곱 후 반지름²>0 이어야 한다."
    creative: "(1) y절편 대신 직선의 방정식이나 x절편을 물으면 골조 유지 ★2 (2) 한 원의 중심에 문자를 넣고 이등분 직선이 원점을 지나게 하면 I-BW d1 추가 · ★3 (3) 「한 원의 넓이는 이등분하고 다른 원과는 만나지 않는」 직선의 기울기 범위로 바꾸면 거리 조건이 결합돼 ★4 (4) 두 원의 공통현을 묻는 문제로 바꾸면 일반형 뺄셈 골조로 갈아타 ★3."
```

```yaml
- id: GN-CM2-77-175
  page: 77
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    x²+y²+4x-2y+2k-7=0 이 반지름의 길이가 √6 이하인 원을 나타내도록 하는
    실수 k 의 값의 범위를 묻는다.
  category: "완전제곱 → 반지름² = 12-2k → 0 < r² ≤ 6 연립"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「원을 나타낸다」와 「반지름이 √6 이하」를 각각 r²>0 과 r²≤6 이라는 두 부등식으로 동치 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "이차방정식이 원을 나타낼 조건과 반지름 범위"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    완전제곱하면 (x+2)²+(y-1)²=12-2k 이므로 r²=12-2k. 「원」이려면 12-2k>0(등호 불가),
    「반지름 √6 이하」면 12-2k≤6(등호 가능)이라 3≤k<6 이 된다. 두 부등식의 등호
    포함 여부가 엇갈리는 것이 이 문항의 핵심 함정이어서 Mₜ=2(T-경계·T-범위).
    통찰 1개 · STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "완전제곱 → r²=12-2k → r²>0 이고 r²≤6 → 3≤k<6"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$3\le k<6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/77-175.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x·y 항 계수와 상수항의 k 계수, 반지름 상한을 바꾼다. 제약: ① 완전제곱 뒤 r² 이 k 의 일차식이어야 답이 구간 하나로 나오고 ② k 의 계수 부호가 음수면 부등호 방향이 뒤집히므로 답 구간의 열림·닫힘이 바뀐다 ③ 경계 k 값이 정수로 떨어지도록 상수항을 맞춘다."
    creative: "(1) 상한 대신 「반지름이 √6 이상」이나 「넓이가 12π 이하」로 바꾸면 같은 골조 ★2 (2) 「원을 나타낸다」 조건을 빼면 r²≤0 을 놓치는 오답이 나오도록 설계해 경계 인식만 묻는 ★2 (3) k 의 계수를 이차로 만들어 r²=k²-4k+3 꼴이면 이차부등식이 결합돼 I-XU d2 · ★3 (4) 「이 원이 x축과 만난다」를 덧붙이면 중심-거리 비교가 더해져 조건 통합 I-CON d2 · ★4."
```

```yaml
- id: GN-CM2-77-176
  page: 77
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제"
  summary: |
    세 점 (0,0), (6,0), (-4,4) 를 지나는 원의 중심을 (p,q) 라 할 때
    p+q 의 값을 묻는다.
  category: "일반형 미정계수 세 개 → 세 점 대입 연립 → 중심 (-A/2, -B/2)"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "세 점을 지나는 원의 방정식(일반형 미정계수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x²+y²+Ax+By+C=0 에 세 점을 넣으면 원점에서 C=0 이 바로 나오고 나머지 두 식으로
    A=-6, B=-14 를 얻어 중심 (3,7). 「세 점을 지나는 원 → 일반형 미정계수」는 이
    단원이 명시적으로 가르치는 표준 절차라 통찰 0. 수직이등분선 교점으로도 풀리지만
    두 갈래의 효율 차가 크지 않아 I-SC 로 세지 않았다. M_total 7 로 감점 없이 ★2.
  tier: star_2
  mechanism_primary: "일반형에 세 점 대입 → C=0, A=-6, B=-14 → 중심 (3,7) → p+q=10"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$10$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/77-176.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 점을 바꾼다. 제약: ① 세 점이 한 직선 위에 있으면 원이 없으므로 기울기가 서로 달라야 하고 ② 한 점을 원점으로 두면 C=0 이 즉시 나와 연립이 2원으로 줄며 ③ 중심 좌표 (-A/2,-B/2) 가 격자점이 되려면 A, B 가 짝수여야 하므로 점의 좌표를 짝수 위주로 잡는다."
    creative: "(1) p+q 대신 반지름이나 원의 방정식을 물으면 골조 유지 ★2 (2) 세 점 중 하나를 문자로 두고 원의 중심이 x축 위에 있게 하면 역추적이 생겨 I-BW d2 · ★3 (3) 세 점을 세 직선의 교점으로 바꾸면 78-180 골조가 되어 계산이 무거운 ★3 (4) 「세 점을 지나는 원이 존재하지 않을 조건」으로 뒤집으면 공선 조건이 핵심이 돼 I-EQV d2 · ★3."
```

```yaml
- id: GN-CM2-77-177
  page: 77
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제"
  summary: |
    곡선 y=x²-x-1 위의 제2사분면 점을 중심으로 하고 x축과 y축에 동시에
    접하는 원이 x²+y²+ax+by+c=0 일 때 a+b+c 의 값을 묻는다.
  category: "두 축에 동시 접함 ⇔ 중심 (t,-t)·반지름 |t| → 곡선 조건 대입 → 일반형 전개"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「x축·y축에 동시에 접한다」를 「중심의 두 좌표의 절댓값이 같고 그 값이 반지름」으로 옮기고, 제2사분면이므로 중심을 (t,-t) (t<0) 한 문자로 압축"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "x축·y축에 동시에 접하는 원(중심이 곡선 위)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 축에 동시에 접한다는 조건을 중심 좌표 한 문자로 압축하는 것이 관건이고,
    제2사분면이라 중심이 (t,-t) (t<0) · 반지름 -t 로 부호가 한 번 뒤집힌다.
    곡선 조건 t²-t-1=-t 에서 t=±1 중 제2사분면 조건으로 t=-1 을 고르면
    (x+1)²+(y-1)²=1 → x²+y²+2x-2y+1=0. 부호·사분면 함정이 두 겹이고
    M_total 8 이라 STEP 1 출발점 ★2 에서 +1 한 ★3(기출 태그 +1 과도 일치).
  tier: star_3
  mechanism_primary: "두 축 접함 → 중심 (t,-t)·r=-t (t<0) → 곡선 대입 t²=1 → t=-1 → 일반형 전개 → a+b+c"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$1$'
  answer_source: "답지"
  figure: crop:fig-77-177.png
  latex: latex-bank/gn-cm2/items/77-177.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "중심이 놓이는 이차곡선의 계수와 사분면을 바꾼다. 제약: ① 제2사분면이면 중심 (t,-t) t<0, 제1사분면이면 (t,t) t>0 처럼 사분면마다 부호 규칙이 달라지므로 곡선식도 그에 맞게 교점이 생기게 잡고 ② 대입 후 t 의 이차방정식이 유리근을 갖도록 상수항을 맞추며 ③ 지정한 사분면 안의 근이 정확히 하나가 되게 한다."
    creative: "(1) a+b+c 대신 반지름이나 원의 넓이를 물으면 골조 유지 ★3 (2) 사분면 단서를 빼면 네 갈래를 모두 따져야 해 I-MI d2 추가 · ★4 (3) 곡선을 직선 y=2x+3 으로 바꾸면 계산이 한 단계 줄어 ★2 (4) 「x축에만 접하고 y축과 두 점에서 만난다」로 바꾸면 접선 조건과 거리 부등식이 결합돼 I-CON d2 · ★4."
```

### 연습문제 STEP 2

```yaml
- id: GN-CM2-78-178
  page: 78
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    두 점 (-2,3), (4,-5) 를 지름의 양 끝 점으로 하는 원이 x축과 만나는
    두 점 사이의 거리를 묻는다.
  category: "지름 양 끝 → 중심·반지름 → y=0 대입 → 두 근의 차"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "원이 좌표축에서 잘리는 현의 길이"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    중점 (1,-1) 이 중심, 두 점 사이 거리 10 의 절반인 5 가 반지름이다.
    (x-1)²+(y+1)²=25 에 y=0 을 넣으면 (x-1)²=24 에서 x=1±2√6, 두 점 사이
    거리 4√6. 「반지름²-중심의 y좌표²」의 제곱근을 두 배 하는 현의 길이 공식으로
    질러도 같은 값이라 별도 통찰로 세지 않았다. 통찰 0 이지만 M_total 6 이라
    절차형 감점 조건(≤5)에 걸리지 않아 STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "중점 (1,-1)·반지름 5 → (x-1)²+(y+1)²=25 → y=0 → x=1±2√6 → 거리 4√6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4\sqrt{6}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/78-178.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 끝점을 바꾼다. 제약: ① 중점이 격자점이 되도록 두 좌표의 합을 짝수로 잡고 ② 두 점 사이 거리가 짝수여야 반지름이 정수이며 ③ x축과 만나려면 |중심의 y좌표| < 반지름 이어야 하고 ④ 현의 길이를 정수로 떨어뜨리려면 (반지름²-중심 y좌표²) 를 완전제곱수로 맞춘다."
    creative: "(1) x축 대신 y축이나 직선 y=x 와의 현을 물으면 점과 직선 사이의 거리가 결합돼 ★3~4 (2) 「x축과 만나지 않을」 조건으로 끝점 하나를 역산시키면 I-BW d2 · ★4 (3) 두 끝점 중 하나를 문자로 두고 현의 길이를 지정하면 방정식이 한 겹 더 생겨 ★4 (4) 현의 길이 대신 잘린 두 점과 중심이 이루는 삼각형의 넓이를 물으면 ★3."
```

```yaml
- id: GN-CM2-78-179
  page: 78
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    원 x²+y²-4kx+2ky+10k-15=0 의 넓이가 최소가 될 때 이 원의 중심의
    좌표를 묻는다(k 는 상수).
  category: "완전제곱 → 반지름²을 k 의 이차식으로 → 최소 k → 중심"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「넓이가 최소」를 「반지름²=5k²-10k+15 가 최소」로 옮겨 이차함수 최솟값 문제로 동치 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "계수에 문자가 든 원의 반지름·넓이의 최대·최소"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    중심은 (2k,-k), 반지름²은 4k²+k²-10k+15=5(k-1)²+10 이므로 k=1 에서 최소이고
    그때 중심은 (2,-1) 이다. 넓이 최소를 반지름² 최소로 옮기는 동치 변환이 유일한
    통찰이고, 그다음 완전제곱은 표준 절차라 따로 세지 않았다. 최솟값 10 이 양수라
    원이 실제로 존재한다는 확인이 Mₜ. 통찰 1개 · STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "완전제곱 → 중심 (2k,-k)·r²=5(k-1)²+10 → k=1 에서 최소 → 중심 (2,-1)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$(2,\,-1)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/78-179.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x·y 항의 k 계수와 상수항의 k 계수를 바꾼다. 제약: ① r² 이 k 의 이차식이고 최고차 계수가 양수여야 최소가 존재하며 ② 꼭짓점의 k 가 정수로 떨어지도록 일차항 계수를 최고차 계수의 짝수 배로 잡고 ③ 최솟값 r²>0 이어야 모든 k 에서 원이 된다."
    creative: "(1) 중심 대신 넓이의 최솟값이나 그때의 반지름을 물으면 골조 유지 ★3 (2) 상수항을 조정해 r² 최솟값이 음수가 되게 하면 「원이 되는 k 의 범위」를 먼저 따져야 해 I-MI d2 · ★4 (3) 「k 가 변할 때 중심이 그리는 도형」을 물으면 자취(직선 y=-x/2)로 갈아타 I-RT d2 · ★4 (4) 반지름 최대를 물으려면 k 의 범위를 제한해야 하므로 구간 최대·최소가 결합돼 ★4."
```

```yaml
- id: GN-CM2-78-180
  page: 78
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    세 직선 5x+2y+8=0, 7x-3y-12=0, 3x+7y-30=0 으로 만들어지는 삼각형의
    외접원의 방정식을 묻는다.
  category: "세 직선의 교점 → 세 꼭짓점을 지나는 원(일반형 미정계수) → 표준형"
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「세 직선이 만드는 삼각형의 외접원」을 「세 직선의 교점 세 개를 지나는 원」으로 옮겨 77-176 의 세 점 골조로 환원"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "세 직선이 만드는 삼각형의 외접원"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    직선을 두 개씩 연립해 꼭짓점 (0,-4), (-4,6), (3,3) 을 얻고, 일반형에 세 점을
    넣어 A=4, B=-2, C=-24 → (x+2)²+(y-1)²=29 로 정리한다. 통찰은 「외접원 =
    세 꼭짓점을 지나는 원」 한 번뿐이고 나머지는 연립 3회 + 미정계수 3원 연립이라
    노동량이 크다. v3.8 에서 계산 마찰은 ★ 상승 신호가 아니므로 M_total 9 여도
    STEP 2 출발점 ★3 을 유지했다(오히려 마찰 경고 대상).
  tier: star_3
  mechanism_primary: "세 직선 두 개씩 연립 → 꼭짓점 3개 → 일반형 미정계수 연립 → (x+2)²+(y-1)²=29"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$(x+2)^2+(y-1)^2=29$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/78-180.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 직선의 계수를 바꾼다. 제약: ① 세 직선이 한 점에서 만나거나 두 직선이 평행하면 삼각형이 생기지 않으므로 기울기가 모두 달라야 하고 ② 교점이 모두 격자점이 되도록 연립의 판별식(계수 행렬식)이 교점 좌표를 정수로 만들게 잡으며 ③ 그래야 외접원의 중심·반지름²이 유리수로 떨어진다. 이 문항은 세 직선 중 두 쌍이 수직에 가깝지 않아 계산량이 큰 편이므로 직각을 끼워 넣으면 훨씬 가벼워진다."
    creative: "(1) 세 직선 중 두 개를 서로 수직으로 잡으면 빗변이 지름이라는 성질로 질러갈 수 있어 I-SC d2 가 생기고 ★4 (2) 외접원 대신 외심의 좌표만 물으면 수직이등분선 두 개로 끝나 ★3 (3) 삼각형의 넓이나 내심을 물으면 다른 단원 도구가 결합돼 I-XU d2 · ★4 (4) 직선 하나의 상수항을 문자로 두고 외접원이 원점을 지나게 하면 I-BW d2 · ★4."
```

```yaml
- id: GN-CM2-78-181
  page: 78
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    원 x²+y²=1 위의 점 P 와 원 x²+y²+6x+6y+10=0 위의 점 Q 에 대하여
    선분 PQ 길이의 최댓값을 묻는다.
  category: "두 원의 중심거리 + 두 반지름"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 원 위를 각각 움직이는 두 점 사이 거리의 최댓값을 「중심거리 + 반지름 + 반지름」으로 옮김 — 한 원 버전(75-167)을 두 원으로 확장하는 동치 변환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "두 원 위의 점 사이 거리의 최대·최소"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    중심 O(0,0)·반지름 1 과 중심 (-3,-3)·반지름 2√2 를 얻고 중심거리 3√2 를 구한 뒤
    3√2+1+2√2=1+5√2 로 답한다. 정점 대신 두 점이 모두 움직이므로 「최댓값은 두
    중심을 잇는 직선 위에서 바깥쪽 끝끼리」라는 확장을 학생이 스스로 해야 해
    I-EQV d2 로 보았다. 두 원이 서로 떨어져 있는지(3√2 > 1+2√2) 확인이 Mₜ.
    통찰 1개 · STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "두 원의 중심·반지름 → 중심거리 3√2 → 최댓값 = 중심거리 + r₁ + r₂"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$1+5\sqrt{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/78-181.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 원의 중심과 반지름을 바꾼다. 제약: ① 최댓값 공식은 두 원의 위치와 무관하게 항상 d+r₁+r₂ 지만, 최솟값까지 물으려면 두 원이 서로 밖에 있어야(d>r₁+r₂) d-r₁-r₂ 가 되므로 이 조건을 확인해야 하고 ② 중심거리가 √2·√5 배수로 깔끔히 떨어지도록 중심을 대각선 격자점에 두며 ③ 반지름을 같은 무리수 배수로 맞추면 답이 a+b√2 꼴로 정리된다."
    creative: "(1) 최솟값을 함께 물으면 두 원의 위치 관계 판정이 필수가 돼 I-MI d2 추가 · ★4 (2) 한 원의 중심에 문자를 넣고 최댓값이 주어진 값이 되게 하면 I-BW d2 · ★4 (3) 두 원이 만나도록 반지름을 키우면 최솟값이 0 이 되는 경계 판정이 핵심인 ★4 (4) 점 Q 를 직선 위의 점으로 바꾸면 점과 직선 사이의 거리가 결합돼 ★3."
```

### 연습문제 실력 UP

```yaml
- id: GN-CM2-78-182
  page: 78
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    원 (x-2)²+(y-1)²=25 위의 두 점 A(6,4), B(-1,5) 에 대하여 삼각형 PAB 가
    직각삼각형이 되는 원 위의 점 P 가 두 개일 때, 그 두 점을 이은 선분의
    중점 (a,b) 에 대하여 a+b 의 값을 묻는다.
  category: "직각의 위치 3경우 분기 → P 에서 직각인 경우 기각 → 두 점의 중점"
  M: {s: 3, k: 3, a: 1, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「직각삼각형」 조건이 직각의 꼭짓점이 P·A·B 중 어디냐에 따라 세 갈래로 갈리므로 세 경우를 모두 세워야 함"
    - step: 2
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "P 에서 직각인 경우는 AB 를 지름으로 하는 원과의 교점인데 그 교점이 A, B 자신뿐이라 삼각형이 만들어지지 않아 갈래 전체가 기각됨 — 발문의 「두 개」와 맞추려면 이 기각이 반드시 필요"
    - step: 3
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "A(또는 B)에서 직각인 조건을 「AB 에 수직이고 A 를 지나는 직선과 원의 나머지 교점」이라는 교점 계산으로 옮김"
  insight_count: 3
  depth_score: 1.67
  type_id: null
  type_hint: "원 위의 점으로 만드는 직각삼각형(직각 위치 분기와 기각)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    직각의 꼭짓점을 P·A·B 로 나누면, P 에서 직각인 갈래는 AB 를 지름으로 하는 원과
    주어진 원의 교점을 찾는 것인데 두 원이 모두 A, B 를 지나므로 교점이 A, B 뿐이라
    통째로 기각된다(실제로 중심 (2,1) 에서 CA·CB=0 이라 AB 지름 원이 중심을 지난다).
    남는 것은 A 에서 직각인 P(5,-3) 과 B 에서 직각인 P(-2,-2) 두 개뿐이고, 발문의
    「두 개」가 이 기각의 확인 신호다. 분기(MI)·기각(VF)·수직선 교점(RT) 세 통찰에
    M_total 9 로 실력 UP 출발점 ★4 유지.
    [분류 이슈] 통찰 3개 + I-VF 보유로 v3.8 ★5 자격 요건을 형식상 충족하지만
    novelty_score 0(통찰 조합이 시판에 흔함)이라 ★5 로 올리지 않고 ★4 에 두었다.
  tier: star_4
  mechanism_primary: "직각 위치 P/A/B 3분기 → P 갈래는 AB 지름 원의 교점이 A,B 뿐이라 기각 → A·B 갈래에서 수직선과 원의 교점 (5,-3),(-2,-2) → 중점 (3/2,-5/2)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/78-182.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "원의 중심·반지름과 원 위의 두 점 A, B 를 바꾼다. 제약: ① A, B 가 반드시 원 위에 있어야 하므로 반지름을 5·13 처럼 피타고라스 쌍이 많은 값으로 두고 격자점을 고른다 ② A 또는 B 에서 직각인 P 가 격자점이 되려면 AB 의 방향벡터에 수직인 직선이 원과 격자점에서 만나야 한다 ③ 「P 가 두 개」를 유지하려면 AB 가 지름이 아니어야 하고(지름이면 P 갈래가 무한히 생김) P 갈래가 A, B 로만 떨어지는 배치를 유지해야 한다 — 이 배치가 깨지면 답의 개수가 바뀐다."
    creative: "(1) AB 를 지름으로 바꾸면 P 갈래가 원 전체가 되어 「직각삼각형이 되지 않는 P」를 묻는 역문제로 뒤집을 수 있고 ★4 유지 (2) 직각 대신 「이등변삼각형」으로 바꾸면 분기가 늘어 I-MI d3 · ★5 후보 (3) 「삼각형 PAB 의 넓이가 최대」로 바꾸면 76-171 의 높이 최대 골조로 내려가 ★3 (4) 두 점 중 하나를 문자로 두고 조건을 만족하는 P 의 개수가 3 이 되게 하면 개수 경계 분석이 붙어 ★5."
```

```yaml
- id: GN-CM2-78-183
  page: 78
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    점 A(3,2) 와 원 (x-1)²+(y+2)²=8 위를 움직이는 점 P 에 대하여 선분 AP 의
    중점이 나타내는 도형의 넓이를 묻는다.
  category: "중점을 (x,y) 로 두고 P 좌표를 역표현 → 원의 방정식에 대입 → 자취"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "구하려는 중점을 (x,y) 로 먼저 두고 움직이는 점 P 를 (2x-3, 2y-2) 로 역표현한 뒤 원래 원의 방정식에 대입 — 자취를 얻기 위해 조건을 거꾸로 거슬러 올라감"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "원 위를 움직이는 점과 정점을 잇는 선분의 중점(내분점)의 자취"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    중점을 (x,y) 로 두면 P=(2x-3, 2y-2) 이고 이를 원에 넣으면 4(x-2)²+4y²=8,
    곧 (x-2)²+y²=2 라 넓이는 2π. 계산은 짧지만 「구하려는 점을 먼저 문자로 두고
    주어진 점을 역표현한다」는 방향 전환이 학생에게는 진입 저항이 커 I-BW d2 로
    보았다. 닮음(A 를 중심으로 하는 1/2 닮음)으로 보면 중심은 A 와 원 중심의
    중점 (2,0), 반지름은 절반 √2 로 한 줄에 끝나 검산 통로가 된다.
    M_total 6 으로 노동량은 가볍지만 통찰이 있어 실력 UP 출발점 ★4 를 유지했다.
  tier: star_4
  mechanism_primary: "중점 (x,y) → P=(2x-3,2y-2) → 원에 대입 → (x-2)²+y²=2 → 넓이 2π"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$2\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/78-183.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정점 A 의 좌표와 원의 중심·반지름²을 바꾼다. 제약: ① 자취 원의 중심은 A 와 원 중심의 중점이므로 두 좌표의 합이 짝수여야 격자점이 되고 ② 자취의 반지름²은 원래 반지름²의 1/4 이므로 넓이를 정수 배 π 로 만들려면 원래 반지름²을 4 의 배수로 잡는다 ③ A 가 원 위나 안에 있어도 자취는 그대로 원이라 위치 제약은 없다."
    creative: "(1) 중점 대신 1:2 내분점으로 바꾸면 축소 비가 1/3 이 되어 골조 유지 ★4 (2) 「자취 원이 x축에 접할」 A 의 좌표를 역산시키면 I-BW 가 두 겹이 돼 ★5 후보 (3) A 도 다른 원 위를 움직이게 하면 두 매개변수가 생겨 자취가 원환이 되므로 ★5 (4) 넓이 대신 자취 원과 원래 원의 위치 관계(만나는지)를 물으면 중심거리 비교가 붙어 ★4 (5) 중점 대신 무게중심으로 바꾸면 정점이 둘 필요해 설정이 한 단계 무거워지고 ★4."
```

## 표본 판정 요약 (18문)

- ★ 분포: ★1 2 · ★2 7 · ★3 7 · ★4 2 · ★5 0
- 통찰형 12 · 절차형 6 · premium 0
- 통찰 유형 분포: I-EQV 7 · I-RT 5 · I-BW 1 · I-MI 1 · I-VF 1 (총 15개 라벨). depth 2 는 5개(78-181 EQV · 78-182 MI·VF · 78-183 BW)이고 depth 3 은 없다.
- M_total 분포: 4 가 1문 · 5 가 2문 · 6 이 4문 · 7 이 7문 · 8 이 1문 · 9 가 2문. 가장 무거운 78-180(9)은 계산 마찰이 원인이라 v3.8 기준으로 ★ 를 올리지 않았다.
- type_hint 상위: 「거리의 최대·최소」 3(75-167 · 75-168 · 78-181) · 「자취(점이 나타내는 도형)」 5(76-e10 · 76-169 · 76-170 · 76-171 · 78-183) · 「세 점/세 직선으로 결정되는 원」 2(77-176 · 78-180) · 「원이 될 조건·반지름 범위」 2(77-175 · 78-179) · 「지름의 양 끝으로 결정되는 원」 2(77-173 · 78-178).
- 그림 1문(`crop:fig-77-177.png`) · 선택지 0문 · 기출 태그 2문(77-176 · 77-177 모두 교육청) · 소문항 묶음 0문.
- 벤더 신호 대비: 확인체크 5문(75-167·75-168 은 필수예제 확인이라 ★2 출발, 76-169·76-170·76-171 은 발전예제 확인이라 ★3 출발) 중 −1 이 3문(75-168 · 76-169 · 76-170)이고 나머지 2문은 출발점 유지. STEP 1 6문 중 −1 이 1문(77-172) · +1 이 1문(77-177), STEP 2 4문과 실력 UP 2문은 전부 출발점 유지. 2단 이상 어긋난 문항은 없다.
- 답 대조: 전사본 answer 를 그대로 옮겼고, 골조를 잡는 과정에서 answer 와 어긋나는 조건은 발견되지 않았다. 78-182 는 발문의 「두 개」가 P 갈래 기각과 일치해 골조가 답을 지지한다.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CM2-78-182 | 통찰 3개 + I-VF 보유로 v3.8 ★5 자격 요건(§2.13)을 형식상 충족하지만, 통찰 조합(직각 위치 3분기 + 퇴화 갈래 기각)이 시판에 흔해 novelty_score 0 이라 §2.14 에 걸린다. ★4 로 두고 기록 | ★4 / ★5 |
| GN-CM2-78-178 | 통찰 0 · 골조가 「중점·반지름 → y=0 대입」 두 수에 그치는데 M_total 6 이라 절차형 감점(≤5) 조건을 아슬하게 비껴갔다. 벤더 STEP 2 신호를 따라 ★3 에 두었으나 체감은 ★2 쪽 | ★2 / ★3 |
| GN-CM2-78-183 | 반대 방향의 경계. M_total 6 으로 노동량이 가벼워 ★3 체감이지만, 「구하려는 점을 먼저 문자로 두는」 역방향 진입 저항과 실력 UP 신호를 따라 ★4 유지 | ★3 / ★4 |
| GN-CM2-76-169 / 76-170 | 자취 조건을 좌표식으로 옮기는 단계를 I-RT 로 셀지(이 구역이 가르치는 표준 절차라 통찰이 아닐 수 있음)가 경계. 같은 골조의 발전 예제 76-e10 과 라벨을 맞추기 위해 셋 다 I-RT d1 으로 통일했다 | ★2 (절차형으로 봐도 ★2) |

벤더 신호와 2단 이상 어긋난 문항은 없다.

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **가장 크게 반복된 덩어리는 자취(5문)**다. 76-e10·76-170 은 거리의 비(아폴로니우스), 76-169 는 거리 제곱의 합, 76-171 은 자취 + 넓이 최대, 78-183 은 중점의 자취다. 겉보기 조건은 다르지만 전부 「움직이는 점을 (x,y) 로 두고 조건을 좌표식으로 옮겨 원을 얻는다」는 한 골조이므로, 카탈로그에서는 상위 유형 **「점이 나타내는 도형의 방정식」(base ★3)** 하나에 소분류 세 개(거리의 비 / 거리 제곱의 합 / 내분점·중점)를 다는 편이 자연스럽다.
- **따로 세울 유형 ①**: 78-183 의 「내분점·중점의 자취」는 조건이 *주어진 점*이 아니라 *구하려는 점*에서 출발하는 역방향이라 진입 저항이 다르다. 위 상위 유형의 소분류로 두되 base ★ 는 한 단계 높게(★4) 잡아야 실제 체감과 맞는다.
- **따로 세울 유형 ②**: 「거리의 최대·최소」(75-167 · 75-168 · 78-181)는 자취와 완전히 다른 골조(중심거리 ± 반지름)이고 한 원 버전 → 두 원 버전 → 원과 직선 버전으로 난이도가 단계적으로 올라가므로 독립 유형(base ★2, 두 원 버전은 ★3)으로 세운다.
- **통합 후보**: 77-176(세 점을 지나는 원)과 78-180(세 직선이 만드는 삼각형의 외접원)은 후자가 전자로 환원되는 관계이므로 한 유형 「세 점으로 결정되는 원」(base ★2)에 두고, 78-180 은 *교점 계산이 앞에 붙은 변형*으로 표시한다. 계산량 차이만으로 별도 유형을 세우면 v3.8 의 friction 경고 방향과 어긋난다.
- **경계 유형**: 77-175(원이 될 조건 + 반지름 범위)와 78-179(계수에 문자가 든 원의 넓이 최소)는 둘 다 「반지름²을 문자의 식으로 보고 부등식/최적화를 건다」는 같은 뿌리다. 카탈로그에서는 「반지름²을 매개변수의 함수로 보는 유형」(base ★3) 하나로 묶고, 부등식 갈래와 최대·최소 갈래를 소분류로 둔다.
- 07단원 앞 조각(07-p1 · 07-p2)의 「개념원리 익히기」·앞쪽 필수예제와 위 유형들의 base ★ 가 이어지는지는 그 두 파일이 완성된 뒤 함께 맞춘다. 특히 「x축·y축에 동시에 접하는 원」(77-177)은 앞 조각의 접선 조건 예제와 같은 유형일 가능성이 높아 중복 확인이 필요하다.
