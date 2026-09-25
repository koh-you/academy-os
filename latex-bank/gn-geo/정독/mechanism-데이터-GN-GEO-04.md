---
name: mechanism-데이터-GN-GEO-04
description: 개념원리 기하 04 이차곡선(1/1 · 44~47쪽) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 기하 (22개정) · 전사본 latex-bank/gn-geo
  section: 04 이차곡선
  unit_code: GEO-04
  part: "1/1"
  extract_range: "44~47쪽 · 44-e16~47-90"
  total_problems: 18
  unit_total: 18
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-geo/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-geo/items/<id>.tex
  image_source: latex-bank/gn-geo/figures/ (crops.json)
---

# 개념원리 기하 · 04 이차곡선 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 기하 44~47쪽, 04단원 이차곡선의 마지막 구역(쌍곡선의 방정식 · 이차곡선 판별 · 단원 연습문제) 18문항 전수를 다룬다. 구역은 「필수·발전 예제」 4문(필수 예제 1 + 확인체크 3), 「연습문제 STEP 1」 5문, 「연습문제 STEP 2」 7문, 「연습문제 실력 UP」 2문이다. 개념원리 고등의 난이도 신호는 구역과 예제 태그에 있다 — 확인체크는 개념 확인(★1 출발), 필수 예제는 ★2, STEP 1 은 ★2, STEP 2 는 ★3, 실력 UP 은 ★4 를 출발점으로 삼고 M_total·통찰 수로 ±1 조정했다. 평가원·교육청 기출 태그는 통찰 유무로 +0~1 을 판단했다.

내용상으로는 18문 중 16문이 쌍곡선이다. 반복되는 골조는 (1) 이차방정식을 완전제곱해 표준형으로 옮겨 도형을 판별하기, (2) 이차항 계수의 부호 조건으로 곡선 종류가 되는 매개변수 범위 구하기, (3) 초점을 지나는 세로 현(통경 $2b^2/a$)과 점근선 기울기 $b/a$, (4) 쌍곡선 정의 $|\overline{PF}-\overline{PF'}|=2a$ 를 초점삼각형·다른 곡선의 정의와 묶어 쓰기 네 가지다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(통찰 유형·depth) · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 설정 변형)를 채웠다. 유형 카탈로그가 없는 과목이라 `type_id` · `base_star` 는 null 이고 `type_hint` 에 유형명을 제안했다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-GEO-44-e16
  page: 44
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    ⑴ 방정식 $4x^2-y^2-2y+3=0$ 이 나타내는 도형 말하기.
    ⑵ $3x^2-y^2-2x+5y-1-k(x^2-2y^2)=0$ 이 포물선이 되게 하는 모든 실수 $k$ 의 합.
  category: "완전제곱 정리 → 표준형 판별 / 이차항 계수 0 조건 → k 의 합"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'포물선이 된다'를 '두 이차항 계수 중 정확히 하나만 0, 그쪽 변수의 일차항은 살아 있다'로 옮김"
    - step: 3
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x² 계수 0 과 y² 계수 0 두 갈래가 모두 포물선을 주므로 둘 다 살려 합을 구함"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "이차방정식이 나타내는 도형의 판별(완전제곱 · 이차항 계수 조건)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑴ 은 $4x^2-(y+1)^2=-4$ 로 정리해 쌍곡선 판정 한 단계. ⑵ 가 본체로, k 로 묶은 뒤 이차항 계수 $(3-k)$, $(2k-1)$ 중 하나만 0 이어야 포물선이라는 동치 변환이 핵심이고 두 갈래가 모두 유효하다. 필수 예제(★2 출발)에 통찰 2개 → ★3.
  tier: star_3
  mechanism_primary: "k 로 정리 → 이차항 계수 (3-k)·(2k-1) 중 하나만 0 → k=3, k=1/2 두 값의 합"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ 쌍곡선 ⑵ $\dfrac{7}{2}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/44-e16.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 계수(4, -1, -2, 3)를 바꿔 타원·포물선·원이 되게 할 수 있음. ⑵ 는 두 이차항 계수의 k 일차식을 바꿔 근을 정수·유리수로 조절. 제약: 계수 0 이 되는 k 에서 그 변수의 일차항이 남아야 포물선이고, 두 계수가 동시에 0 이 되면 안 되며, 답이 두 k 의 합이므로 근이 유리수가 되게 둘 것."
    creative: "(1) '타원이 되는 k 의 범위'로 바꾸면 계수 부호 조건 → ★2~3 (2) '두 직선이 되는 k'로 바꾸면 우변 0 경계까지 따져야 해 ★4 (3) k 를 묶은 식을 주지 않고 도형 종류만 주고 계수를 역으로 찾게 하면 I-BW 추가 ★4."
```

```yaml
- id: GN-GEO-44-74
  page: 44
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    방정식 $y^2+12x+6y-3=0$ 이 나타내는 도형 말하기.
  category: "y 에 대해 완전제곱 → 표준형 → 도형 판별"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차방정식이 나타내는 도형의 판별 — 포물선"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    $y$ 만 제곱항이므로 $(y+3)^2=-12(x-1)$ 로 정리되면 끝. 한 단계·통찰 없음·M_total 4 → 확인체크 출발점 ★1 그대로.
  tier: star_1
  mechanism_primary: "y 완전제곱 → (y+3)²=-12(x-1) → 포물선"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "포물선"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/44-74.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항 계수 12·6 과 상수 -3 을 바꿔도 골조 동일. 제약: 제곱항이 하나만 남아야 포물선이고, x 의 일차항 계수가 0 이 되면 두 직선·한 직선·해 없음으로 성격이 바뀜."
    creative: "(1) 꼭짓점·초점·준선까지 묻기(★2) (2) 제곱항을 둘 다 남기고 계수 부호를 달리해 타원·쌍곡선 판별로 바꾸기(★1~2) (3) 상수를 미지수로 두고 '포물선이 되는 조건'을 묻으면 I-EQV 1개 ★2."
```

```yaml
- id: GN-GEO-44-75
  page: 44
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $(k+6)x^2+(k-3)y^2-2=0$ 이 쌍곡선이 되도록 하는 정수 $k$ 의 개수.
  category: "쌍곡선 ⟺ 두 이차항 계수의 부호가 반대 → k 범위 → 정수 세기"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'쌍곡선이 된다'를 '$(k+6)(k-3)<0$' 한 부등식으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "이차항 계수의 부호 조건으로 쌍곡선이 되는 매개변수 범위"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    계수를 각각 양·음으로 나눠 따지지 않고 곱 $<0$ 한 줄로 묶는 것이 요점. 범위 $-6<k<3$ 에서 정수 개수를 세므로 양 끝 제외(경계 함정)가 답을 가른다. 확인체크(★1 출발)이나 통찰 1개·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "(k+6)(k-3)<0 → -6<k<3 → 정수 -5 ~ 2 개수"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$8$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/44-75.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 계수의 k 일차식(+6, -3)과 상수항 -2 를 바꿔 범위 폭을 조절. 제약: 두 근이 정수여야 개수 세기가 깔끔하고, 경계 k 가 정수면 포함 여부 함정이 세짐. 상수항의 부호가 바뀌어도 쌍곡선 조건은 같으므로 답이 안 변함."
    creative: "(1) '타원이 되는 정수 k'로 바꾸면 두 계수 동부호 + 원 제외까지 붙어 ★3 (2) 계수를 이차식으로 주면 부등식이 사차가 되어 Mₖ 상승 ★3 (3) '쌍곡선이 되지 않는 정수 k 의 개수'로 뒤집으면 여집합·경계 처리로 I-VF 추가 ★3."
```

```yaml
- id: GN-GEO-44-76
  page: 44
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $2x^2+ky^2+k-5=0$ 이 타원이 되도록 하는 실수 $k$ 의 값의 범위.
  category: "표준형 두 분모 > 0 · 두 분모 서로 다름(원 제외) → k 범위"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'타원이 된다'를 '$\\dfrac{5-k}{2}>0$ 이고 $\\dfrac{5-k}{k}>0$ 이며 두 분모가 서로 다르다'로 옮김(원은 타원에서 제외)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "이차항 계수 조건으로 타원이 되는 매개변수 범위(원 제외)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $2x^2+ky^2=5-k$ 를 표준형으로 옮겨 두 분모가 모두 양수인 $0<k<5$ 를 얻은 뒤, $k=2$ 에서 두 분모가 같아져 원이 되는 것을 빼는 것이 이 문항의 전부다. 답이 두 구간으로 갈리는 이유가 바로 그 경계 함정. 확인체크 출발 ★1 에 통찰 1개(d2)·M_total 8 → ★2.
  tier: star_2
  mechanism_primary: "표준형 정리 → 두 분모 모두 양수 0<k<5 → 원이 되는 k=2 제외"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$0<k<2$ 또는 $2<k<5$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/44-76.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "$x^2$ 계수 2 와 상수항 $k-5$ 의 5 를 바꿔 구간 폭과 제외점을 이동(제외점은 $x^2$ 계수와 같은 k). 제약: 제외점이 구간 안에 들어와야 답이 두 구간이 되고, 상수항이 k 일차식이어야 분모가 k 에 의존함."
    creative: "(1) '원이 되는 k'만 묻기(★1) (2) '초점이 y축 위에 있는 타원이 되는 k'로 바꾸면 분모 대소 비교가 추가돼 ★3 (3) '타원 또는 쌍곡선이 되는 k'로 묶으면 케이스 분기 I-MI 추가 ★3."
```

### 연습문제 STEP 1

```yaml
- id: GN-GEO-45-77
  page: 45
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    쌍곡선 $\dfrac{x^2}{a^2}-\dfrac{y^2}{b^2}=1$ 의 두 초점 사이 거리가 주축 길이의 4배일 때 점근선의 방정식.
  category: "2c=4·2a → c=4a → c²=a²+b² → b/a"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "쌍곡선의 초점거리·주축 관계에서 점근선 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    주어진 비를 $c=4a$ 로 쓰고 $c^2=a^2+b^2$ 에 넣으면 $b^2=15a^2$, 점근선 기울기 $\pm b/a=\pm\sqrt{15}$. 표준 관계식 대입 두 줄이라 통찰 없음. STEP 1 출발 ★2 · M_total 6 이라 감점 조건(통찰 0 + M_total ≤ 5)에 걸리지 않아 ★2 유지.
  tier: star_2
  mechanism_primary: "c=4a → 16a²=a²+b² → b/a=√15 → y=±√15 x"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$y=\pm\sqrt{15}x$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/45-77.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "배수 4 를 2·3·5 로 바꾸면 $b/a=\\sqrt{k^2-1}$. 제약: 배수는 1보다 커야 하고, 점근선 기울기가 깔끔한 값이 되려면 $k^2-1$ 이 제곱수(k=1 불가)이거나 근호를 허용해야 함."
    creative: "(1) 점근선을 주고 초점거리와 주축의 비를 묻는 역방향(I-BW 1개 ★3) (2) 이심률 $e=c/a$ 로 조건을 주면 표현 전환 한 단계 추가 ★2~3 (3) 세로형 쌍곡선(우변 -1)으로 바꾸면 점근선 기울기가 $\\pm b/a$ 로 같은 점을 확인시키는 함정 ★2."
```

```yaml
- id: GN-GEO-45-78
  page: 45
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    초점을 공유하는 타원 $\dfrac{x^2}{a^2}+\dfrac{y^2}{c^2}=1$ 과 쌍곡선 $\dfrac{x^2}{b^2}-\dfrac{y^2}{c^2}=1$ 의 교점 P 에서 $\overline{PF}=4$, $\overline{PF'}=12$ 일 때 $c^2$.
  category: "타원 정의 합 · 쌍곡선 정의 차 → 초점 공유 등식 a²-c²=b²+c²"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "합 조건에서 얻은 $a^2$ 과 차 조건에서 얻은 $b^2$ 을 '초점을 공유한다'는 한 등식 $a^2-c^2=b^2+c^2$ 로 결합"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "초점을 공유하는 타원과 쌍곡선의 교점(정의의 합·차 결합)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    같은 점 P 에 두 정의를 동시에 적용해 $2a=16$, $2b=8$ 을 얻고, 초점 공유를 $a^2-c^2=b^2+c^2$ 한 식으로 묶으면 $c^2$ 이 바로 나온다. 두 곡선이 같은 문자 $c$ 를 분모에 쓰는 표기가 함정. 통찰 1개(d2)로 +1 조건(2개 이상 또는 depth 3)에 못 미쳐 STEP 1 출발점 ★2 유지. [분류 이슈] 두 정의를 한 점에 겹쳐 쓰는 골조는 실질 ★3 급.
  tier: star_2
  mechanism_primary: "PF+PF'=2a=16 · PF'-PF=2b=8 → a²-c²=b²+c² → c²=24"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$24$"
  answer_source: "답지"
  figure: "crop:fig-45-78.png"
  latex: latex-bank/gn-geo/items/45-78.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "$\\overline{PF}=4$, $\\overline{PF'}=12$ 를 다른 쌍으로. 제약: 합의 절반 a 와 차의 절반 b 가 $a>b$ 를 만족해야 초점 공유가 가능하고, $a^2-b^2$ 이 짝수여야 $c^2$ 이 정수. 그림의 F, F' 좌우 배치는 고정."
    creative: "(1) $c^2$ 대신 삼각형 $PFF'$ 의 넓이를 묻고 $\\angle FPF'$ 를 주면 코사인법칙이 붙어 ★3 (2) 두 곡선의 이심률의 곱·합을 묻기(★3) (3) 타원·쌍곡선 대신 포물선과 타원의 교점으로 바꾸면 정의가 달라져 골조 재설계 필요."
```

```yaml
- id: GN-GEO-45-79
  page: 45
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    쌍곡선 $4x^2-y^2-24x+4y+28=0$ 의 주축 길이·주축 방향·초점·점근선에 대한 보기 ㄱ~ㄹ 중 옳은 것 고르기.
  category: "완전제곱 → 평행이동된 표준형 → 주축·초점·점근선 네 항목 판정"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행이동된 쌍곡선의 주축·초점·점근선 판정(보기형)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $(x-3)^2-\dfrac{(y-2)^2}{4}=1$ 로 정리한 뒤 네 항목을 차례로 대조하는 확인 문제. 주축 길이를 $2a$ 대신 $a$ 로 읽는 표기 함정과 점근선에 중심 평행이동을 빠뜨리는 함정이 있으나, 각 항목이 표준 절차라 통찰로 카운트하지 않았다. STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: "완전제곱 → (x-3)²-(y-2)²/4=1 → a=1, b=2, c=√5 로 네 보기 대조"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "ㄴ, ㄷ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/45-79.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 4·-1 과 일차항 -24x·4y, 상수 28 을 바꿔 중심과 $a$, $b$ 를 이동. 제약: 정리 후 우변이 양수여야 가로형 쌍곡선이고, $a$, $b$ 가 정수여야 보기 판정이 명확. 보기 ㄱ~ㄹ 의 참·거짓 개수는 다시 맞춰야 함."
    creative: "(1) 우변 부호를 뒤집어 세로형으로 만들면 ㄴ·ㄹ 의 참거짓이 뒤집힘(★2) (2) 보기에 이심률·준선을 넣으면 항목당 계산이 늘어 ★3 (3) 방정식 대신 초점·점근선을 주고 방정식을 고르게 하면 I-BW ★3."
```

```yaml
- id: GN-GEO-45-80
  page: 45
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    쌍곡선 $3x^2-4y^2+16y-28=0$ 의 점근선과 $x$ 축으로 둘러싸인 부분의 넓이.
  category: "완전제곱 → 점근선 두 직선 → x축과의 삼각형 넓이"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 3
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "점근선 방정식(대수)을 x축과 만나는 두 점 + 중심을 꼭짓점으로 하는 삼각형(기하)으로 옮겨 넓이 계산"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "평행이동된 쌍곡선의 점근선이 만드는 도형의 넓이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $\dfrac{x^2}{4}-\dfrac{(y-2)^2}{3}=1$ 로 정리하면 중심 $(0,2)$, 점근선 $y=\pm\dfrac{\sqrt3}{2}x+2$. 두 점근선의 x절편과 중심이 이루는 이등변삼각형의 밑변·높이만 읽으면 끝. 표현 전환 1개(d1)·M_total 6 → STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: "표준형 → 점근선 y=±(√3/2)x+2 → 밑변 8/√3 · 높이 2 인 삼각형 넓이"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{8\sqrt{3}}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/45-80.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 3·-4 와 일차항 16y, 상수 -28 을 바꿔 $a$, $b$ 와 중심 y좌표를 이동. 제약: 중심이 x축 위에 있지 않아야 삼각형이 생기고(중심 y좌표 ≠ 0), 점근선 기울기가 0 이 아니어야 x절편이 존재."
    creative: "(1) 'x축' 대신 'y축으로 둘러싸인 부분'으로 바꾸면 기울기 역수를 써야 해 ★2~3 (2) 점근선과 두 꼭짓점에서의 접선으로 둘러싸인 넓이로 확장 ★4 (3) 넓이를 주고 계수를 역으로 구하게 하면 I-BW 추가 ★3."
```

```yaml
- id: GN-GEO-45-81
  page: 45
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $x^2-y^2+2y+k=0$ 이 $x$ 축에 평행한 주축을 갖는 쌍곡선이 되도록 하는 실수 $k$ 의 값의 범위.
  category: "완전제곱 → x²-(y-1)²=-(k+1) → 우변 부호가 주축 방향을 결정"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'주축이 x축에 평행'을 '정리식의 우변이 양수', 즉 $-(k+1)>0$ 으로 옮김(우변 0 이면 두 직선이라 제외)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "이차방정식이 지정된 주축 방향의 쌍곡선이 되는 매개변수 범위"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $x^2-(y-1)^2=-(k+1)$ 까지는 기계적이고, 주축 방향이 우변 부호로 결정된다는 것만 알면 부등식 하나. $k=-1$ 에서 두 직선이 되어 제외되는 경계와 부호 뒤집힘이 함정. 통찰 1개(d2) → STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: "x²-(y-1)²=-(k+1) → x² 쪽이 1이 되려면 -(k+1)>0 → k<-1"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$k<-1$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/45-81.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항 2y 와 $x^2$·$y^2$ 계수를 바꿔 중심과 부등식 경계를 이동. 제약: 두 제곱항의 계수가 반대 부호여야 쌍곡선 후보가 되고, 완전제곱 후 상수가 k 일차식으로 남아야 함."
    creative: "(1) 'y축에 평행한 주축'으로 바꾸면 부등호가 뒤집혀 $k>-1$ (★2) (2) '쌍곡선이 되는 k'로 넓히면 $k\\ne-1$ 로 경계만 남아 ★2 (3) '두 직선을 나타내는 k'를 묻고 그 직선의 교각까지 구하게 하면 ★3."
```

### 연습문제 STEP 2

```yaml
- id: GN-GEO-46-82
  page: 46
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    쌍곡선 $\dfrac{x^2}{16}-\dfrac{y^2}{9}=1$ 의 두 초점 F, F' 과 제1사분면 위의 점 P(a, b), 원점 대칭점 Q 로 만든 사각형 F'QFP 의 넓이가 60 일 때 $a^2+b^2$.
  category: "원점 대칭 → 평행사변형 넓이 = 2×삼각형 → b → 쌍곡선 식으로 a²"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "F·F' 와 P·Q 가 모두 원점 대칭이므로 사각형이 대각선이 원점에서 이등분되는 평행사변형임을 보고 넓이를 $2\\times\\triangle F'FP$ 로 환원"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "쌍곡선의 초점과 대칭인 두 점이 만드는 사각형의 넓이"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    대칭을 쓰면 넓이 $=2\cdot\dfrac12\cdot\overline{FF'}\cdot b=10b=60$ 에서 $b=6$ 이 한 줄에 나오고, 남은 일은 쌍곡선 식에 넣어 $a^2$ 을 구하는 것뿐이다. 대칭을 못 보면 네 꼭짓점 좌표로 신발끈을 써야 해 계산이 길어진다. STEP 2 ★3 출발 · 통찰 1개(d2) → ★3 유지.
  tier: star_3
  mechanism_primary: "F'QFP 는 원점 대칭 평행사변형 → 넓이 10b=60 → b=6 → a²=80 → a²+b²=116"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$116$"
  answer_source: "답지"
  figure: "crop:fig-46-82.png"
  latex: latex-bank/gn-geo/items/46-82.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모 16·9 와 넓이 60 을 바꿀 수 있음. 제약: 넓이/(2c) 로 나온 b 가 쌍곡선 위 점의 y좌표로 실현 가능해야 하고, $a^2$ 이 정수가 되려면 $b^2$ 을 분모 9 의 배수 쪽으로 잡는 편이 깔끔. 그림의 P 제1사분면·Q 제3사분면 배치는 고정."
    creative: "(1) 넓이 대신 $\\overline{PF}\\cdot\\overline{PF'}$ 를 묻기(정의+피타고라스 ★3) (2) 사각형이 마름모가 되는 조건을 묻기(★4) (3) P 를 지나는 접선까지 넣어 사다리꼴 넓이로 바꾸면 접선 공식이 추가돼 ★4."
```

```yaml
- id: GN-GEO-46-83
  page: 46
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["평가원 기출"]
  category_type: "연습문제 STEP 2"
  summary: |
    쌍곡선 $\dfrac{x^2}{a^2}-\dfrac{y^2}{b^2}=1$ 의 한 점근선이 $y=x$ 이고 초점 F(c, 0) 을 지나며 $y$ 축에 평행한 직선이 자르는 현 PQ 의 길이가 8 일 때 $a^2+b^2+c^2$. 5지선다.
  category: "점근선 → a=b · 통경 2b²/a=8 → a, b, c"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'초점을 지나는 세로 현의 길이 8'을 $x=c$ 를 대입해 얻는 $\\dfrac{2b^2}{a}=8$ 로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "쌍곡선의 통경(초점을 지나는 세로 현) 길이와 점근선 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    점근선 $y=x$ 에서 $b=a$ 를 얻고 통경 $2b^2/a=2a=8$ 로 $a=4$. 이후 $a^2=b^2=16$, $c^2=32$ 를 더하면 끝이다. 두 조건이 모두 표준 관계식이라 통찰은 통경 환산 1개(d1). STEP 2 ★3 출발 · 기출 태그 +0 → ★3.
  tier: star_3
  mechanism_primary: "점근선 y=x → b=a → 통경 2b²/a=2a=8 → a=4 → 16+16+32=64"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/46-83.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "점근선 기울기 1 과 현의 길이 8 을 바꿀 수 있음. 제약: 기울기를 $m=b/a$ 로 두면 $2am^2=\\overline{PQ}$ 이므로 $a$ 가 유리수가 되도록 $m$ 과 길이를 맞춰야 하고, 선택지가 모두 정수로 떨어지게 $a^2$, $b^2$ 을 정수로."
    creative: "(1) 통경 대신 '초점을 지나고 기울기 1 인 직선이 자르는 현'으로 바꾸면 이차방정식·근과 계수로 ★4 (2) 삼각형 $PQF'$ 의 넓이를 묻기(★3) (3) 점근선 조건을 이심률 $e=\\sqrt2$ 로 바꿔 표현만 전환(★3 유지)."
```

```yaml
- id: GN-GEO-46-84
  page: 46
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    초점이 $(\pm2, 0)$ 이고 두 점근선이 이루는 각이 $60^\circ$ 인 쌍곡선이 점 $(k, 2)$ 를 지날 때 양수 $k$. (기울기가 양수인 점근선의 기울기는 1보다 작다.)
  category: "점근선 사잇각 → 기울기 tan30° → a², b² → 점 대입"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'두 점근선이 이루는 각 60°'라는 기하 조건을 'x축과 이루는 각 30°', 즉 기울기 $b/a=\\tan30^\\circ$ 라는 대수 조건으로 옮김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "점근선이 이루는 각으로 쌍곡선의 방정식 결정하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 점근선이 x축에 대해 대칭이므로 사잇각의 절반이 기울기의 편각이고, 단서 「기울기 < 1」이 30°/60° 두 갈래 중 하나를 미리 잘라 준다. 이후 $c=2$ 와 $b/a=1/\sqrt3$ 로 $a^2=3$, $b^2=1$ 을 얻어 점을 대입. 표현 전환 1개(d2) → STEP 2 ★3 유지.
  tier: star_3
  mechanism_primary: "b/a=tan30° · c=2 → x²/3-y²=1 → (k,2) 대입 → k=√15"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\sqrt{15}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/46-84.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초점 $(\\pm2,0)$ 과 사잇각 60°, 지나는 점의 y좌표 2 를 바꿀 수 있음. 제약: 사잇각의 절반이 특수각이어야 $b/a$ 가 깔끔하고, 「기울기<1」 단서는 사잇각이 90°보다 작을 때만 의미가 있으며 90°면 직각쌍곡선으로 단서가 무의미해짐."
    creative: "(1) 단서를 빼면 30°·60° 두 경우를 모두 따져야 해 I-MI 추가 ★4 (2) 점근선 사잇각 대신 '한 점근선과 x축이 이루는 각'을 주면 전환이 사라져 ★2 (3) 초점을 y축 위로 옮기면 주축 방향 판단이 더해져 ★3~4."
```

```yaml
- id: GN-GEO-46-85
  page: 46
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 STEP 2"
  summary: |
    쌍곡선 $\dfrac{x^2}{12}-\dfrac{y^2}{4}=-1$ 위의 제1사분면 점 P 와 제3사분면 점 Q 가 $\overline{PF'}-\overline{QF'}=5$, $\overline{PF}=\dfrac23\overline{QF}$ 를 만족시킬 때 $\overline{PF}+\overline{QF}$. 5지선다.
  category: "우변 -1 → 세로형·2a=4 → 가지별 정의 부호 → 두 조건 연립"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "P 는 위쪽 가지, Q 는 아래쪽 가지이므로 정의식의 부호가 서로 반대($\\overline{PF'}-\\overline{PF}=4$, $\\overline{QF}-\\overline{QF'}=4$)임을 갈라 씀"
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 정의식으로 F' 거리를 소거해 주어진 두 조건을 $\\overline{PF}$, $\\overline{QF}$ 만의 연립식으로 통합"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "서로 다른 가지 위의 두 점에 쌍곡선의 정의를 적용해 초점거리 연립하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    우변이 $-1$ 이라 주축이 y축이고 $2a=4$ 임을 먼저 읽어야 한다. 그다음 P·Q 가 다른 가지에 있으므로 정의의 부호가 반대라는 점을 살려 $\overline{PF'}$, $\overline{QF'}$ 를 소거하면 남는 것은 일차 연립이다. 통찰 2개로 +1 후보지만 소거 후 계산이 두 줄이라 STEP 2 출발점 ★3 을 유지했다. [분류 이슈] 가지 판별을 놓치면 완전히 막히는 구조여서 ★4 주장도 가능.
  tier: star_3
  mechanism_primary: "세로형 2a=4 → PF'=PF+4 · QF'=QF-4 → PF-QF=-3 와 PF=(2/3)QF 연립 → 15"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "④"
  answer_source: "답지"
  figure: "crop:fig-46-85.png"
  latex: latex-bank/gn-geo/items/46-85.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모 12·4 와 조건의 5, 비 $2:3$ 을 바꿀 수 있음. 제약: 연립 결과가 양수여야 하고 $\\overline{PF}$, $\\overline{QF}$ 가 각 가지에서 가능한 최솟값($c-a$ 또는 $c+a$ 기준) 이상이어야 실제로 존재. 선택지가 분수를 포함하므로 비를 바꾸면 선택지도 재설계."
    creative: "(1) 두 점을 같은 가지에 두면 부호가 같아져 I-MI 가 사라지고 ★2~3 (2) $\\overline{PQ}$ 나 사각형 $PFQF'$ 의 넓이를 묻기(★4) (3) 조건 하나를 각도로 주면 코사인법칙이 붙어 ★4."
```

```yaml
- id: GN-GEO-47-86
  page: 47
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    쌍곡선 $\dfrac{x^2}{k}-\dfrac{y^2}{9}=-1$ 의 초점 F(0, c) 를 지나고 $x$ 축에 평행한 직선이 제1사분면에서 만나는 점 P 에 대하여 $\overline{PF}=9$ 일 때 상수 $k$.
  category: "세로형 표준형 → y=c 대입 → PF=b²/a=k/3 → k"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "$\\overline{PF}=9$ 를 통경의 절반 $\\dfrac{b^2}{a}=\\dfrac{k}{3}$ 로 옮겨 k 의 일차식으로 만듦"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "세로형 쌍곡선의 통경 절반으로 미정계수 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    우변 $-1$ 이므로 주축이 y축이고 $a=3$, $b^2=k$, $c^2=9+k$. $y=c$ 를 대입하면 $x=k/3$ 이 바로 나오므로 $k/3=9$. 46-83 과 같은 통경 골조를 세로형으로 옮긴 것이라 단계 수가 적다. 통찰 1개(d1)·M_total 6 → STEP 2 ★3 유지.
  tier: star_3
  mechanism_primary: "y²/9-x²/k=1 → y=c 대입 → x=k/3=PF=9 → k=27"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$27$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/47-86.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모 9 와 $\\overline{PF}=9$ 를 바꿀 수 있음. 제약: $k>0$ 이어야 쌍곡선이고, $\\overline{PF}=b^2/a=k/a$ 가 k 의 일차식이므로 k 가 $a$ 의 배수면 정수해. 제1사분면 지정은 x 부호를 고정하는 장치."
    creative: "(1) $\\overline{PF}$ 대신 통경 전체 $\\overline{PQ}$ 를 주면 계수만 2배(★3 유지) (2) 직선을 $x$ 축 평행이 아니라 점근선에 평행하게 하면 교점이 하나뿐이라 ★4 (3) k 를 주고 삼각형 $PFF'$ 의 넓이를 묻는 방향으로 뒤집기(★3)."
```

```yaml
- id: GN-GEO-47-87
  page: 47
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    쌍곡선 $\dfrac{x^2}{2}-\dfrac{y^2}{3}=1$ 의 두 초점 F, F' 에 대하여 선분 FF' 을 지름으로 하는 원과 쌍곡선의 제2사분면 교점 P 에 대하여 삼각형 $PF'F$ 의 넓이.
  category: "지름에 대한 원주각 90° → 피타고라스 + 정의의 차 → 두 변의 곱 → 넓이"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'FF' 을 지름으로 하는 원 위의 점'이라는 기하 조건을 $\\angle FPF'=90^\\circ$, 즉 $\\overline{PF}^2+\\overline{PF'}^2=4c^2$ 라는 식으로 옮김"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 변을 각각 구하지 않고 $(\\overline{PF'}-\\overline{PF})^2=4a^2$ 을 전개해 곱 $\\overline{PF}\\cdot\\overline{PF'}$ 만 뽑아 넓이로 직행"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "직각인 초점삼각형의 넓이(정의의 차 + 피타고라스)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $c^2=5$ 에서 $\overline{PF}^2+\overline{PF'}^2=20$, 정의에서 차가 $2\sqrt2$ 이므로 곱은 $\dfrac{20-8}{2}=6$, 넓이는 그 절반. 두 변의 길이를 실제로 구하려 들면 무리식 연립이 되므로 「곱만 필요하다」를 보는 것이 요점이다. 통찰 2개로 +1 후보지만 계산이 세 줄이라 STEP 2 ★3 유지. [분류 이슈] 초점삼각형 표준형이라 ★3 이 무난하나 ★4 주장도 가능.
  tier: star_3
  mechanism_primary: "∠FPF'=90° → PF²+PF'²=20 · (PF'-PF)²=8 → PF·PF'=6 → 넓이 3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$3$"
  answer_source: "답지"
  figure: "crop:fig-47-87.png"
  latex: latex-bank/gn-geo/items/47-87.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모 2·3 을 바꿔 $a^2$, $b^2$ 을 조절. 제약: 넓이는 곧 $b^2$ 이므로($\\dfrac{4c^2-4a^2}{4}=b^2$) 답이 깔끔하려면 $b^2$ 을 정수로. 원과 쌍곡선이 실제로 만나려면 $c\\ge a$ 는 항상 성립하므로 추가 제약은 없고, 제2사분면 지정은 교점 4개 중 하나를 고르는 장치."
    creative: "(1) 각을 $60^\\circ$ 로 바꾸면 코사인법칙이 되어 ★4 (2) 넓이 대신 내접원의 반지름이나 $\\overline{PF}$ 자체를 묻기(★4) (3) 쌍곡선을 타원으로 바꾸면 합·차만 뒤바뀐 쌍둥이 문항(★3)."
```

```yaml
- id: GN-GEO-47-88
  page: 47
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    점 F(-4, 0) 과 직선 $x=-1$ 에 이르는 거리의 비가 $2:1$ 인 점 P 의 자취의 방정식.
  category: "거리 조건을 좌표식으로 → 제곱해 정리 → 쌍곡선 방정식"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'초점까지의 거리 : 준선까지의 거리 = 2:1'이라는 기하 조건을 $\\sqrt{(x+4)^2+y^2}=2|x+1|$ 이라는 좌표식으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "초점·준선까지의 거리의 비(이심률)로 정의되는 자취"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    이심률 2 인 원뿔곡선의 정의를 그대로 좌표로 옮겨 양변을 제곱하면 $3x^2-y^2=12$. 절댓값을 제곱으로 없애는 처리와 일차항이 상쇄되는 것을 확인하는 정도가 계산 전부다. 표현 전환 1개(d1)·M_total 6 → STEP 2 ★3 유지.
  tier: star_3
  mechanism_primary: "√((x+4)²+y²)=2|x+1| → 제곱·정리 → 3x²-y²=12"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$3x^2-y^2=12$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/47-88.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초점 $(-4,0)$, 준선 $x=-1$, 비 $2:1$ 을 바꿀 수 있음. 제약: 비가 1보다 크면 쌍곡선, 1이면 포물선, 1보다 작으면 타원으로 답의 종류가 바뀌고, 일차항이 상쇄되어 중심이 원점에 오려면 초점·준선 위치가 $ae$, $a/e$ 관계를 만족해야 함."
    creative: "(1) 비를 $1:1$·$1:2$ 로 바꿔 포물선·타원 자취로(★2~3) (2) 준선을 $y=k$ 로 두면 주축 방향이 바뀜(★3) (3) 자취의 방정식을 주고 초점·준선을 역으로 찾게 하면 I-BW 추가 ★4."
```

### 연습문제 실력 UP

```yaml
- id: GN-GEO-47-89
  page: 47
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    초점이 $(\pm c, 0)$ 인 쌍곡선과 $y$ 축 위의 점 A 에 대하여 $\overline{AF}:\overline{OF}=5:3$ 이고 직선 AF 가 한 점근선과 평행하며 쌍곡선과 만나는 점 P 에서 $\overline{PF}=10$ 일 때 주축의 길이.
  category: "3:4:5 직각삼각형 → 점근선 기울기 → b/a·c/a → 초점삼각형에서 a 방정식"
  M: {s: 3, k: 3, a: 2, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$\\overline{AF}:\\overline{OF}=5:3$ 이라는 길이 비를 직각삼각형 AOF 의 3:4:5 로 읽어 직선 AF 의 기울기 $-\\dfrac43$ 이라는 대수량으로 옮김"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'AF 가 점근선과 평행'을 $\\dfrac{b}{a}=\\dfrac43$, 따라서 $c=\\dfrac{5a}{3}$ 로 옮겨 미지수를 a 하나로 줄임"
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "쌍곡선 정의 $\\overline{PF'}-\\overline{PF}=2a$ 와 삼각형 PFF' 의 코사인법칙($\\cos\\angle PFF'=\\dfrac35$)을 결합해 a 에 대한 한 방정식으로 통합"
  insight_count: 3
  depth_score: 2.00
  type_id: null
  type_hint: "점근선에 평행한 초점 직선과 쌍곡선의 교점(정의 + 초점삼각형)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    세 단계가 모두 다른 도구다 — 길이 비에서 기울기, 평행에서 $b/a$ 와 $c$, 그리고 정의와 코사인법칙의 결합. 점근선에 평행한 직선이 쌍곡선과 한 점에서만 만난다는 성질도 전제로 쓰인다. 미지수를 a 하나로 줄이지 못하면 식이 세 개로 벌어진다. 실력 UP 출발 ★4 · 통찰 3개 → ★4.
  tier: star_4
  mechanism_primary: "AO:OF:AF=4:3:5 → 기울기 4/3=b/a → c=5a/3 → 정의+코사인법칙으로 a 결정 → 2a"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{45}{2}$'
  answer_source: "답지"
  figure: "crop:fig-47-89.png"
  latex: latex-bank/gn-geo/items/47-89.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "비 $5:3$ 과 $\\overline{PF}=10$ 을 바꿀 수 있음. 제약: 비가 피타고라스 수여야 $\\cos\\angle PFF'$ 가 유리수로 떨어지고(3:4:5, 5:12:13), 그 비가 곧 $b:a$ 와 $c:a$ 를 정하므로 점근선 기울기도 함께 바뀐다. 그림의 A 가 y축 양의 부분·F 가 x축 양의 부분이라는 배치는 고정."
    creative: "(1) 주축 대신 삼각형 PFF' 의 넓이나 $\\overline{PF'}$ 를 묻기(★4 유지) (2) 직선을 점근선과 평행이 아니라 특정 기울기로 주면 교점이 둘이 되어 케이스 분기 I-MI 가 추가돼 ★5 후보 (3) 점근선 평행 대신 '준선을 지난다'로 바꾸면 이심률 정의가 들어와 골조가 달라짐."
```

```yaml
- id: GN-GEO-47-90
  page: 47
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: ["평가원 기출"]
  category_type: "연습문제 실력 UP"
  summary: |
    초점이 $(\pm4, 0)$ 인 쌍곡선 $C\colon\dfrac{x^2}{a^2}-\dfrac{y^2}{b^2}=1$ 과, F(4, 0) 을 초점·$y$ 축을 준선으로 하는 포물선의 제1사분면 교점 P 에서 $y$ 축에 내린 수선의 발 H 에 대하여 $\overline{PH}:\overline{HF}=3:2\sqrt2$ 일 때 $a^2\times b^2$.
  category: "포물선 정의 PH=PF → P 좌표 → 쌍곡선 대입 + a²+b²=16 연립"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'F 를 초점, y축을 준선으로 하는 포물선 위의 점'을 $\\overline{PH}=\\overline{PF}$ 로 옮겨 P 의 x좌표와 초점거리를 같은 문자로 묶음"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$\\overline{HF}=\\sqrt{16+y^2}$ 와 $\\overline{PF}=x$ 에서 얻은 $y^2=8x-16$ 을 넣어 주어진 길이 비를 x 에 대한 방정식으로 전환"
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "구한 P 를 쌍곡선 식에 대입한 관계와 초점 조건 $a^2+b^2=16$ 을 묶어 $a^2$, $b^2$ 을 동시에 결정"
  insight_count: 3
  depth_score: 2.00
  type_id: null
  type_hint: "포물선의 초점·준선 정의로 잡은 교점을 쌍곡선 조건과 연립하기"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    준선이 y축이라 $\overline{PH}$ 가 곧 P 의 x좌표이고 포물선 정의로 $\overline{PF}$ 와 같아지는 것이 출발점이다. 여기서 $y^2=8x-16$ 을 얻으면 $\overline{HF}=2\sqrt{2x}$ 가 되어 비 조건이 x 하나의 방정식으로 떨어진다. 마지막에 쌍곡선 대입식과 $a^2+b^2=16$ 을 연립해야 하고 $a>b>0$ 으로 해를 고른다. 실력 UP ★4 · 평가원 기출 · 통찰 3개 → ★4.
  tier: star_4
  mechanism_primary: "PH=PF=x → y²=8x-16 → PH:HF=3:2√2 로 x=9 → 쌍곡선 대입 + a²+b²=16 → a²b²=63"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$63$"
  answer_source: "답지"
  figure: "crop:fig-47-90.png"
  latex: latex-bank/gn-geo/items/47-90.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초점 x좌표 4 와 비 $3:2\\sqrt2$ 를 바꿀 수 있음. 제약: 준선이 y축이므로 포물선은 $y^2=4c(x-c)$ 꼴로 고정되고, 비에서 나온 x 가 $a^2+b^2=c^2$ 연립에서 양의 정수해 $a^2$, $b^2$ 을 주도록 맞춰야 한다($a>b>0$ 조건이 해를 하나로 고정). 그림의 P 제1사분면·H 가 y축 위라는 배치는 고정."
    creative: "(1) $a^2\\times b^2$ 대신 $\\overline{PF'}$ 나 삼각형 $PFF'$ 의 넓이를 묻기(★4 유지) (2) 준선을 $x=-1$ 처럼 옮기면 $\\overline{PH}$ 가 x좌표와 달라져 단계가 하나 늘고 ★5 후보 (3) 쌍곡선을 타원으로 바꾸면 $a^2-b^2=16$ 이 되어 부호만 다른 쌍둥이 문항(★4)."
```

## 표본 판정 요약 (18문)

- ★ 분포: ★1 1 · ★2 7 · ★3 8 · ★4 2 · ★5 0
- 통찰형 15 · 절차형 3(44-74 · 45-77 · 45-79) · premium 0
- 통찰 유형 분포: I-EQV 8 · I-RT 5 · I-CON 3 · I-MI 2 · I-SYM 1 (총 19 라벨 · SC/VF/XU 0 → ★5 자격 문항 없음)
- M_total 분포: 4~6 이 8문 · 7~8 이 8문 · 9~10 이 2문(47-89 · 47-90)
- type_hint 상위: 「이차항 계수 조건으로 곡선 종류가 되는 매개변수 범위」 3(44-75 · 44-76 · 45-81) · 「이차방정식이 나타내는 도형의 판별」 2(44-e16 · 44-74) · 「통경(초점을 지나는 세로 현)」 2(46-83 · 47-86) · 「정의(합·차)를 다른 조건과 결합」 3(45-78 · 46-85 · 47-90) · 「평행이동된 표준형의 요소 읽기」 2(45-79 · 45-80)
- 대상층: 하위권 1 · 중하위권 3 · 중위권 8 · 중상위권 6
- 그림: 6문(`crop:fig-45-78.png` · `crop:fig-46-82.png` · `crop:fig-46-85.png` · `crop:fig-47-87.png` · `crop:fig-47-89.png` · `crop:fig-47-90.png`) — 모두 발문에 배치가 서술돼 있어 골조·답에 영향 없음
- 범위 특성: 18문 중 16문이 쌍곡선. 반복 골조는 ① 완전제곱 → 표준형 판별, ② 이차항 계수 부호로 매개변수 범위, ③ 점근선 기울기 $b/a$ 와 통경 $2b^2/a$, ④ 정의 $|\overline{PF}-\overline{PF'}|=2a$ 를 초점삼각형·다른 곡선과 묶기 네 가지다.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-GEO-45-78 | 벤더 STEP 1(★2 출발)이고 통찰 1개(d2)라 규칙상 ★2 유지했으나, 한 점에 타원·쌍곡선 정의를 겹쳐 쓰고 초점 공유를 한 등식으로 묶는 골조는 실질 ★3 급 | ★2 / ★3 |
| GN-GEO-46-85 | 통찰 2개(I-MI d2 + I-CON d2)로 +1 후보였으나 소거 후 계산이 일차 연립 두 줄이라 ★3 유지. 가지 판별을 놓치면 완전히 막히는 구조여서 ★4 주장도 가능 | ★3 / ★4 |
| GN-GEO-47-87 | 통찰 2개(I-RT + I-EQV d2)로 +1 후보였으나 초점삼각형 표준형(넓이 $=b^2$)이라 ★3 유지 | ★3 / ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: ⑴ 「이차방정식이 나타내는 도형의 판별」(완전제곱 → 표준형 · 44-e16⑴ · 44-74 · 45-79 · 45-80)과 ⑵ 「이차항 계수 조건으로 곡선 종류가 되는 매개변수 범위」(44-e16⑵ · 44-75 · 44-76 · 45-81)는 겉보기 식이 같아도 학생이 하는 일이 다르다 — 앞은 정리 후 읽기, 뒤는 부등식·경계 제외(원 제외·두 직선 제외)가 본체다. base ★ 도 각각 1~2 와 2~3 으로 갈린다.
- **통합해도 될 유형**: 46-83 과 47-86 은 가로형/세로형만 다른 같은 통경 유형이므로 한 유형(「통경 $2b^2/a$ 로 미정계수 구하기」)으로 묶고 방향은 변형 축으로 둔다. 45-77 과 46-84 도 「점근선 기울기 $b/a$ 를 다른 조건(초점거리 비 · 사잇각)에서 역산」 하나로 묶을 수 있다.
- **상위 슬롯 재료**: 이 범위에서 ★4 는 47-89 · 47-90 둘뿐이고 둘 다 「쌍곡선 정의 + 다른 곡선/직선 조건의 결합(I-CON)」 골조다. ★5 자격에 필요한 I-SC · I-VF · I-SYM · I-XU 는 46-82(I-SYM d2) 하나뿐이므로, 카탈로그에 ★5 슬롯을 두려면 이 단원 밖(도형의 방정식·평면벡터)과 결합하는 I-XU 유형을 따로 설계해야 한다.
- **함정 카테고리**: 이 범위에서 반복된 것은 T-부호(우변 부호가 주축 방향을 결정 · 가지에 따른 정의 부호)와 T-경계(원 제외 $k\ne2$ · 두 직선 제외 $k\ne-1$ · 정수 개수 세기의 양 끝)다. 유형 카탈로그에 `traps_used` 기본값으로 이 둘을 달아 두면 변형 시 놓치지 않는다.
