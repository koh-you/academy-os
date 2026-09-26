---
name: mechanism-데이터-GN-CM2-04-p2
description: 개념원리 공통수학2 04 직선의 방정식(2/3 · 필수·발전 예제 구역 37~42쪽) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학2 · 전사본 latex-bank/gn-cm2
  section: 04 직선의 방정식
  unit_code: GN-CM2-04
  part: "2/3"
  extract_range: "37~42쪽 · 37-e1~42-79"
  total_problems: 23
  unit_total: 46
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). insight_type 은 insights 가 비면 절차형·하나라도 있으면 통찰형. depth_score = Σ effective_depth. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm2/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm2/items/<id>.tex
  image_source: latex-bank/gn-cm2/figures/ (crops.json)
---

# 개념원리 공통수학2 · 04 직선의 방정식 (2/3) 정독 데이터 (v1.0)

이 파일은 04단원 「직선의 방정식」의 두 번째 묶음, 37~42쪽 **필수·발전 예제 구역 23문항 전수**를 다룬다. 이 구역은 상자 안 예제(id `쪽-eN` · tag 「필수」 7문 · 「발전」 1문)와 그 아래 딸린 유제(tag 「확인체크」 15문)가 번갈아 놓인 구조이며, 전사본에는 예제의 풀이·KEY Point 가 없고 발문만 들어 있다. 벤더 난이도 신호는 구역과 태그뿐이라 ★ 출발점은 「필수」 ★2 · 「발전」 ★3 으로 두되, 이 구역의 「확인체크」는 개념 확인용 익히기가 아니라 바로 위 예제의 유제이므로 **해당 예제와 같은 출발점**에서 M_total·통찰로 ±1 조정했다.

내용은 ⑴ 한 점·두 점·절편으로 직선 세우기(37~38쪽), ⑵ 도형의 넓이를 이등분하는 직선(39쪽), ⑶ 계수의 부호와 그래프 개형(40쪽), ⑷ 항상 지나는 점과 그 활용(41~42쪽)의 네 덩어리로 나뉘며, 뒤 두 덩어리에서 통찰형이 몰린다.

이 파일의 주 용도는 **숫자 변형·창의 변형의 원본**이다. 그래서 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 화살표 사슬) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 설정 변경과 ★ 변동 지점)를 채웠다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-CM2-37-e1
  page: 37
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    두 점 (-4, 2), (6, 8)을 이은 선분의 중점을 지나고 기울기가 -3 인 직선의 방정식.
  category: "중점 공식 → 점과 기울기로 직선식"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "한 점과 기울기가 주어진 직선의 방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    중점 (1, 5)를 구한 뒤 점기울기꼴에 한 번 대입하면 끝난다. 분기도 검증도 없는 두 공식 연결.
    필수 예제 출발 ★2, 통찰 0·M_total 4 라 -1 후보이나 중점 공식과 직선식 두 도구를 잇는 최소 결합이라 ★2 유지.
  tier: star_2
  mechanism_primary: '두 점 → 중점 (1, 5) → 점기울기꼴 y - 5 = -3(x - 1) → y = -3x + 8'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$y=-3x+8$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/37-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 점의 좌표와 기울기를 바꿀 수 있음. 제약: 두 점의 x 좌표끼리·y 좌표끼리 합이 짝수여야 중점이 격자점이 되어 답이 정수 계수로 떨어짐. 기울기를 분수로 두면 Mk 만 오르고 골조는 그대로.'
    creative: '(1) 중점 대신 1:2 내분점으로 바꾸기(★2 유지) (2) 기울기 대신 다른 직선과 평행 조건으로 주기(★2) (3) 중점을 지나고 그 선분과 수직인 직선(수직이등분선)으로 바꾸면 수직 조건 도구가 하나 늘어 ★3.'
```

```yaml
- id: GN-CM2-37-e2
  page: 37
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    A(7, -3), B(2, -8)을 이은 선분 AB 를 3:2 로 내분하는 점과 점 (5, 2)를 지나는 직선의 방정식.
  category: "내분점 공식 → 두 점을 지나는 직선"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 점을 지나는 직선의 방정식(내분점 결합)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    내분점 (4, -6)을 구하고 (5, 2)와의 기울기 8 로 직선식을 세우는 4단계. 도구는 내분점 공식과 두 점 직선 공식뿐.
    필수 예제 ★2 출발, 통찰 0 이지만 M_total 5 에 내분 순서 함정이 있어 ★2 유지.
  tier: star_2
  mechanism_primary: 'A, B 를 3:2 내분 → (4, -6) → (5, 2)와의 기울기 8 → y = 8x - 38'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$y=8x-38$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/37-e2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 점 좌표와 내분비 m:n, 지나는 점을 바꿀 수 있음. 제약: 내분점이 격자점이 되려면 (m+n)이 좌표 차를 나눠야 하고, 지나는 점과 내분점의 x 좌표가 달라야 기울기가 정의됨.'
    creative: '(1) 내분을 외분으로 바꾸기(부호 함정이 커져 ★3) (2) 내분점 대신 중점을 쓰고 대신 두 점 사이 거리 조건을 얹기(★3) (3) 내분비를 미지수 k:1 로 두고 직선이 특정 점을 지나도록 k 를 찾게 하면 역방향 사고가 생겨 ★3.'
```

```yaml
- id: GN-CM2-37-65
  page: 37
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    직선 √3 x + ay + b = 0 이 점 (2, -1)을 지나고 x축의 양의 방향과 이루는 각이 60도일 때 ab 의 값.
  category: "기울기 = tan(각) → 미정계수 결정"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "x축의 양의 방향과 이루는 각이 주어진 직선(기울기 = tan θ)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    tan 60도 = √3 로 기울기를 얻고, 일반형의 기울기 -√3/a 와 같다고 놓아 a = -1, 이어서 점을 대입해 b 를 얻는 4단계.
    각 → 기울기는 이 단원의 표준 공식 대입이라 통찰로 세지 않았다. 무리수 계산과 -A/B 부호 함정으로 M_total 7 → 확인체크 유제 출발에서 ★2.
  tier: star_2
  mechanism_primary: 'tan 60도 = √3 → 기울기 -√3/a = √3 → a = -1 → (2, -1) 대입 → b = -2√3 - 1 → ab'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2\sqrt{3}+1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/37-65.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '각을 30·45·120·135도로, 지나는 점과 x 계수를 바꿀 수 있음. 제약: 각이 90도면 기울기가 없어 골조가 깨지고, x 계수와 tan 값이 맞물려 a 가 유리수로 떨어져야 ab 가 정리됨.'
    creative: '(1) ab 대신 a + b 나 x절편을 묻기(★2 유지) (2) 각을 두 직선이 이루는 각으로 바꾸면 도구가 늘어 ★3 (3) 각 조건을 두고 b 의 값의 범위(직선이 제1사분면을 지나도록)로 바꾸면 부등식 판정이 붙어 ★3.'
```

```yaml
- id: GN-CM2-37-66
  page: 37
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    점 (-4, 3)을 지나고 기울기가 -1/2 인 직선과 x축, y축으로 둘러싸인 도형의 넓이.
  category: "직선식 → 두 절편 → 삼각형 넓이"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직선과 두 좌표축으로 둘러싸인 삼각형의 넓이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    점기울기꼴로 y = -x/2 + 1 을 얻고 x절편 2, y절편 1 을 읽어 넓이 1. 3단계·계산 가벼움.
    통찰 0·M_total 4 로 -1 후보이나 직선 세우기와 넓이 계산 두 단계가 이어지고 절편 부호를 절댓값으로 다뤄야 해 ★2 유지.
  tier: star_2
  mechanism_primary: '점과 기울기 → y = -x/2 + 1 → x절편 2, y절편 1 → 넓이 = (1/2)·2·1'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/37-66.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '지나는 점과 기울기를 바꿀 수 있음. 제약: 기울기 부호와 점의 위치에 따라 절편 부호가 바뀌므로 넓이는 절댓값으로 계산해야 하고, 절편이 모두 정수여야 넓이가 깔끔하게 떨어짐.'
    creative: '(1) 넓이를 주고 기울기를 역으로 찾게 하면 역방향 사고가 생겨 ★3 (2) 두 좌표축 대신 직선 y = 1 과 둘러싸인 넓이로 바꾸기(★3) (3) 같은 점을 지나면서 둘러싸인 넓이가 최소가 되는 직선을 묻기(★4 · 산술기하 결합).'
```

```yaml
- id: GN-CM2-37-67
  page: 37
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    A(2, 4), B(-3, -1), C(7, -6)을 꼭짓점으로 하는 삼각형 ABC 의 무게중심 G 와 점 C 를 지나는 직선의 방정식.
  category: "무게중심 공식 → 두 점을 지나는 직선"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각형의 무게중심과 한 꼭짓점을 지나는 직선"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    무게중심 G(2, -1)을 공식으로 구하고 C(7, -6)과의 기울기 -1 로 직선식을 세우는 2단계 순수 대입.
    통찰 0·M_total 4·계산 한 줄이라 확인체크 출발에서 -1 을 적용해 ★1. 이 구역에서 가장 가벼운 문항.
  tier: star_1
  mechanism_primary: '세 꼭짓점 → 무게중심 G(2, -1) → C 와의 기울기 -1 → y = -x + 1'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y=-x+1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/37-67.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '세 꼭짓점 좌표를 바꿀 수 있음. 제약: 좌표 합이 3 의 배수여야 무게중심이 격자점이 되고, G 와 C 의 x 좌표가 달라야 기울기가 존재함.'
    creative: '(1) G 와 C 대신 G 와 AB 의 중점을 지나는 직선으로 바꾸기(같은 중선이라 ★2) (2) 무게중심을 주고 한 꼭짓점을 찾게 하는 역방향(★2~3) (3) 무게중심을 지나면서 삼각형의 넓이를 이등분하는 직선으로 바꾸면 39쪽 유형과 합쳐져 ★3.'
```

```yaml
- id: GN-CM2-38-e3
  page: 38
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    x절편이 6, y절편이 -2 인 직선 위에 두 점 (a, -1), (4, b)가 있을 때 ab 의 값.
  category: "절편형 직선식 → 두 점 대입 → 곱"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "x절편과 y절편이 주어진 직선의 방정식(절편형)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    절편형 x/6 + y/(-2) = 1 을 y = x/3 - 2 로 정리한 뒤 두 점을 차례로 대입해 a = 3, b = -2/3 을 얻는 4단계.
    통찰 0 이나 미지수 두 개와 분수 계수 때문에 M_total 6 → 필수 예제 출발 ★2 유지.
  tier: star_2
  mechanism_primary: '두 절편 → 절편형 → y = x/3 - 2 → (a, -1), (4, b) 대입 → ab'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-2$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/38-e3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 절편과 두 점의 고정 좌표를 바꿀 수 있음. 제약: 절편이 모두 0 이 아니어야 절편형을 쓸 수 있고, x절편이 y절편을 적당히 나눠야 a, b 가 유리수로 깔끔히 떨어짐.'
    creative: '(1) ab 대신 a + b 나 두 점 사이 거리를 묻기(★2) (2) 절편 대신 두 점을 주고 절편의 곱을 묻는 역방향(★2) (3) 절편 하나를 미지수로 두고 직선이 특정 점을 지나도록 만들면 ★3.'
```

```yaml
- id: GN-CM2-38-e4
  page: 38
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    A(3, 2), B(1, -a), C(a, 5)가 한 직선 위에 있도록 하는 양수 a 의 값.
  category: "한 직선 위 조건 → 기울기 상등 → 이차방정식"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "세 점이 한 직선 위에 있을 조건(기울기 상등)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 기울기를 같다고 놓아 a^2 - a - 12 = 0 을 얻고 a = 4, -3 중 양수 조건으로 4 를 고른다.
    한 직선 위 → 기울기 상등은 이 단원의 표준 변환이고 근 선택도 문제에 명시된 조건이라 통찰로 세지 않음. M_total 6 → 필수 ★2.
  tier: star_2
  mechanism_primary: '기울기 AB = 기울기 AC → a^2 - a - 12 = 0 → a = 4 또는 -3 → 양수 조건으로 a = 4'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/38-e4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '세 점의 고정 좌표와 미지수 배치를 바꿀 수 있음. 제약: 정리된 이차방정식이 인수분해되도록 좌표를 잡아야 하고, 분모가 0 이 되는 a(두 점의 x 좌표가 같아지는 값)는 답에서 제외되어야 함.'
    creative: '(1) 양수 조건을 빼고 모든 a 의 합을 묻기(38-70 골조 · ★2) (2) 세 점이 삼각형을 이루지 않을 조건으로 표현 바꾸기(동치 변환이 얹혀 ★3) (3) 한 점을 (a, a^2) 같은 곡선 위 점으로 두면 차수가 올라 ★3.'
```

```yaml
- id: GN-CM2-38-68
  page: 38
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    직선 4x + 3y = 6 이 x축과 만나는 점 P, 직선 3x - 2y = 12 가 y축과 만나는 점 Q 에 대하여 직선 PQ 의 방정식.
  category: "두 직선의 절편 → 두 점을 지나는 직선"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 직선의 절편을 이은 직선의 방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y = 0, x = 0 을 각각 대입해 P(3/2, 0), Q(0, -6)을 얻고 두 점 직선으로 y = 4x - 6.
    통찰 0·M_total 5. 절편을 구하는 위치(x축은 y = 0)를 혼동하는 표기 함정만 있어 확인체크 ★2.
  tier: star_2
  mechanism_primary: 'y = 0 대입 → P(3/2, 0) · x = 0 대입 → Q(0, -6) → 두 점 직선 y = 4x - 6'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$y=4x-6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/38-68.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 직선의 계수를 바꿀 수 있음. 제약: 두 절편의 x 좌표가 서로 달라야 하고, 기울기가 정수로 떨어지려면 P 의 x 좌표가 Q 의 y 좌표를 적당히 나눠야 함.'
    creative: '(1) 삼각형 OPQ 의 넓이를 묻기(★2) (2) 두 직선의 교점과 원점을 지나는 직선으로 바꾸면 연립이 추가되어 ★2~3 (3) 한 직선의 계수를 미지수로 두고 PQ 가 특정 기울기를 갖도록 하면 역방향이 되어 ★3.'
```

```yaml
- id: GN-CM2-38-69
  page: 38
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    점 (6, -4)를 지나고 x절편이 y절편의 2배인 직선의 방정식(y절편은 0 이 아니다).
  category: "절편 비 조건 → 절편형 한 미지수 → 대입"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "절편의 비가 주어진 직선의 방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y절편을 b, x절편을 2b 로 두고 절편형에 (6, -4)를 대입하면 -1/b = 1 에서 b = -1.
    절편 비를 절편형 한 미지수로 흡수하는 것은 이 단원이 가르치는 표준 절차라 통찰로 세지 않았다. 미지수 설정과 단서(y절편 ≠ 0) 처리로 M_total 6 → ★2.
  tier: star_2
  mechanism_primary: 'y절편 b, x절편 2b → 절편형에 (6, -4) 대입 → b = -1 → y = -x/2 - 1'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$y=-\dfrac{1}{2}x-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/38-69.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '지나는 점과 절편의 비(2배·3배·-2배)를 바꿀 수 있음. 제약: y절편 0 을 배제하는 단서가 반드시 붙어야 절편형을 쓸 수 있고, 지나는 점의 좌표가 비와 맞물려 b 가 정수로 떨어져야 함.'
    creative: '(1) 절편의 합·곱을 조건으로 주면 이차방정식이 생겨 ★3 (2) 절편의 비 대신 두 절편이 만드는 삼각형의 넓이를 주면 ★3 (3) y절편 0 단서를 빼고 원점을 지나는 경우까지 따지게 하면 다중 해석이 생겨 ★3.'
```

```yaml
- id: GN-CM2-38-70
  page: 38
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    A(1, -1), B(2, k), C(-k, -10)이 한 직선 위에 있도록 하는 모든 k 의 값의 합.
  category: "기울기 상등 → 이차방정식 → 두 근의 합"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "세 점이 한 직선 위에 있을 조건 — 미지수가 두 점에 걸친 경우"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    기울기 AB = k + 1, 기울기 AC = 9/(k + 1) 이므로 (k + 1)^2 = 9, 두 근 2 와 -4 의 합 -2.
    미지수가 B 의 y 좌표와 C 의 x 좌표에 동시에 들어가 정리가 한 겹 더 필요하지만 변환 자체는 표준. 통찰 0·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: '기울기 AB = 기울기 AC → (k + 1)^2 = 9 → k = 2, -4 → 합 -2'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/38-70.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '고정 좌표 (1, -1)과 -10 을 바꿀 수 있음. 제약: 정리된 식이 완전제곱꼴이나 인수분해 가능한 이차식이 되어야 두 근이 정수로 나오고, k = -1(분모 0)이 해에 섞이지 않아야 함.'
    creative: '(1) 합 대신 곱이나 큰 근을 묻기(★2) (2) 세 점이 삼각형을 이루도록 하는 k 의 범위로 바꾸면 여집합 사고가 붙어 ★3 (3) 미지수를 두 개(k, m)로 늘리고 한 직선 조건과 다른 조건을 함께 주면 조건 통합이 생겨 ★4.'
```

```yaml
- id: GN-CM2-39-e5
  page: 39
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    A(-2, 4), B(-1, 2), C(3, 4)를 꼭짓점으로 하는 삼각형 ABC 에서 점 A 를 지나고 넓이를 이등분하는 직선의 방정식.
  category: "넓이 이등분 조건 → 중선 → 두 점 직선"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "꼭짓점을 지나 넓이를 이등분한다는 조건을 대변의 중점을 지난다(중선)는 조건으로 바꿔 읽음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "삼각형의 넓이를 이등분하는 직선(중선)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    넓이 이등분을 중선으로 바꿔 읽으면 BC 의 중점 (1, 3)과 A 를 잇는 두 점 직선 한 줄로 끝난다. 계산은 가볍고 전체가 이 한 번의 동치 변환에 걸려 있다.
    M_total 4 로 노동량은 최소지만 변환을 떠올리지 못하면 진입 자체가 막히는 구조라 필수 예제 ★2 출발에서 +1 → ★3.
  tier: star_3
  mechanism_primary: 'A 를 지나고 넓이 이등분 → A 에서 그은 중선 → BC 중점 (1, 3) → 두 점 직선'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$y=-\dfrac{1}{3}x+\dfrac{10}{3}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/39-e5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '세 꼭짓점 좌표를 바꿀 수 있음. 제약: 대변 두 끝점의 좌표 합이 짝수여야 중점이 격자점이 되고, 꼭짓점과 중점의 x 좌표가 달라야 기울기가 존재함.'
    creative: '(1) 지나는 꼭짓점을 B 나 C 로 바꾸기(★3 유지) (2) 꼭짓점이 아닌 주어진 점을 지나며 넓이를 이등분하게 하면 중선 착안이 통하지 않아 ★4 (3) 넓이를 1:2 로 나누는 직선으로 바꾸면 내분점 결합으로 ★4.'
```

```yaml
- id: GN-CM2-39-71
  page: 39
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    직선 y = ax 가 O(0, 0), A(4, 4), B(8, -6)을 꼭짓점으로 하는 삼각형 OAB 의 넓이를 이등분할 때 상수 a 의 값.
  category: "원점 통과 직선 → 꼭짓점에서 그은 중선 → 기울기"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "y = ax 가 꼭짓점 O 를 지난다는 점을 먼저 보고, 넓이 이등분을 대변 AB 의 중점 통과로 바꿔 읽음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "삼각형의 넓이를 이등분하는 직선(중선) — 기울기를 구하는 형태"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    y = ax 가 원점이자 꼭짓점인 O 를 지난다는 것을 알아채면 AB 의 중점 (6, -1)을 지나야 하므로 a = -1/6.
    39-e5 와 같은 골조이나 꼭짓점 통과를 스스로 확인하는 단계가 앞에 하나 더 붙는다. 통찰 1(d2)·M_total 5 → 유제 출발에서 ★3.
  tier: star_3
  mechanism_primary: 'y = ax 는 꼭짓점 O 통과 → 중선 → AB 중점 (6, -1) 대입 → a = -1/6'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-\dfrac{1}{6}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/39-71.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'A, B 의 좌표를 바꿀 수 있음. 제약: 한 꼭짓점은 반드시 원점이어야 y = ax 골조가 유지되고, AB 두 좌표의 합이 짝수여야 중점이 격자점이 됨.'
    creative: '(1) y = ax + 1 처럼 원점을 지나지 않는 직선으로 바꾸면 중선 착안이 깨져 ★4 (2) 직선이 넓이를 1:3 으로 나누게 하면 내분점이 들어와 ★4 (3) 삼각형을 사각형으로 바꾸고 원점을 대각선 교점으로 두면 대칭 활용으로 ★3.'
```

```yaml
- id: GN-CM2-39-72
  page: 39
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    좌표평면 위 마름모 ABCD 가 그림으로 주어질 때, 점 (-1, 1)을 지나고 마름모의 넓이를 이등분하는 직선의 방정식.
  category: "점대칭 도형 → 대각선 교점 통과 → 두 점 직선"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "마름모가 대각선 교점에 대한 점대칭 도형이므로 그 중심을 지나는 직선은 언제나 넓이를 이등분함을 활용"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "점대칭 도형(마름모·평행사변형)의 넓이를 이등분하는 직선"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    그림에서 A(1, 2), B(3, 1), C(5, 2), D(3, 3)을 읽어 대각선 교점 (3, 2)를 잡고, (-1, 1)과 이어 기울기 1/4.
    삼각형의 중선과 달리 점대칭 중심을 지나기만 하면 된다는 성질을 스스로 꺼내야 하고 좌표는 그림에서 읽어야 한다. 통찰 1(SYM d2)·M_total 5 → ★3.
  tier: star_3
  mechanism_primary: '그림에서 꼭짓점 좌표 → 대각선 교점 (3, 2) → (-1, 1)과 두 점 직선 → 기울기 1/4'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$y=\dfrac{1}{4}x+\dfrac{5}{4}$'
  answer_source: "답지"
  figure: 'crop:fig-39-72.png'
  latex: latex-bank/gn-cm2/items/39-72.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '지나는 점 (-1, 1)은 자유롭게 바꿀 수 있음. 제약: 마름모의 꼭짓점 좌표는 그림에 고정되어 있어 그림을 다시 그리지 않는 한 중심 (3, 2)는 못 바꾼다. 지나는 점이 중심과 x 좌표가 같으면 답이 x = 3 인 수직선이 되므로 피할 것.'
    creative: '(1) 마름모를 평행사변형·정육각형으로 바꾸기(같은 점대칭 골조 ★3) (2) 도형을 사다리꼴처럼 점대칭이 아닌 도형으로 바꾸면 중심 착안이 통하지 않아 ★4 (3) 넓이를 이등분하는 직선 중 기울기가 최대인 것을 묻기(★4).'
```

```yaml
- id: GN-CM2-39-73
  page: 39
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    직선 kx - 4y + 3 = 0 이 그림의 직사각형 ABCD 의 넓이를 이등분할 때 상수 k 의 값.
  category: "직사각형 중심 통과 → 대입 → 미정계수"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "직사각형의 대각선 교점(중심)을 지나야 넓이가 이등분된다는 점대칭 성질을 사용"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "점대칭 도형(직사각형)의 넓이를 이등분하는 직선 — 미정계수를 구하는 형태"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    그림에서 A(1, 4), B(1, 2), C(5, 2), D(5, 4)를 읽어 중심 (3, 3)을 잡고 직선식에 대입하면 3k - 9 = 0.
    39-72 와 같은 성질을 쓰지만 직사각형의 중심은 즉시 보이고 이후는 대입 한 줄이다. 통찰 1(SYM d1)·계산 최소라 ★2. [분류 이슈] 통찰형이지만 체감 난이도는 절차형 ★2 수준.
  tier: star_2
  mechanism_primary: '그림에서 직사각형 중심 (3, 3) → kx - 4y + 3 = 0 에 대입 → k = 3'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$3$'
  answer_source: "답지"
  figure: 'crop:fig-39-73.png'
  latex: latex-bank/gn-cm2/items/39-73.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '직선식의 상수항과 y 계수를 바꿀 수 있음. 제약: 직사각형 꼭짓점은 그림 고정이라 중심 (3, 3)은 불변이므로, 대입했을 때 k 가 정수로 떨어지도록 상수항을 고를 것. 상수항이 12 가 되면 k = 0 이 되어 수평선이 되므로 피할 것.'
    creative: '(1) 미지수를 y 계수 자리에 두기(★2 유지) (2) 직사각형 두 개를 겹쳐 놓고 두 넓이를 동시에 이등분하게 하면 두 중심을 잇는 직선이 되어 ★3 (3) 직선이 넓이를 1:3 으로 나누게 하면 중심 착안이 깨져 ★4.'
```

```yaml
- id: GN-CM2-40-e6
  page: 40
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ ac>0, bc>0 ⑵ ab<0, bc>0 ⑶ ac>0, b=0 의 세 경우에 대하여 직선 ax + by + c = 0 이 지나는 사분면을 모두 구하기.
  category: "계수 부호 → 기울기·y절편 부호 → 개형 → 사분면"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "계수 사이의 부호 관계라는 대수 정보를 y = -(a/b)x - c/b 의 기울기·절편 부호로 옮겨 그래프 개형으로 읽음"
    - step: 3
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "b = 0 인 ⑶ 은 y 에 대해 풀 수 없으므로 x = -c/a 인 수직선으로 따로 다뤄야 함"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "계수의 부호와 직선의 개형(지나는 사분면)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    일반형을 y = -(a/b)x - c/b 로 고쳐 기울기와 y절편의 부호를 정하고, 그 개형이 지나는 사분면을 센다. ⑶ 은 b = 0 이라 나누기가 막히므로 수직선으로 갈래를 바꿔야 한다.
    부호 → 개형 전환(RT d2)과 퇴화 케이스 분기(MI d1) 두 통찰·M_total 7 → 필수 예제 ★2 출발에서 +1 → ★3.
  tier: star_3
  mechanism_primary: '부호 조건 → 기울기 -a/b 와 y절편 -c/b 의 부호 → 개형 → 지나는 사분면. b = 0 이면 x = -c/a 수직선으로 분기'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ 제$2$, $3$, $4$사분면 ⑵ 제$1$, $3$, $4$사분면 ⑶ 제$2$, $3$사분면'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/40-e6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '바꿀 수 있는 것은 수가 아니라 부호 조합(ab, bc, ca 의 부호와 0 인 계수)뿐이다. 제약: 세 곱의 부호는 서로 독립이 아니므로(예: ab>0 이고 ac<0 이면 bc<0) 모순되는 조합을 주지 말 것. b=0 과 c=0 은 각각 수직선·원점 통과로 성격이 다름.'
    creative: '(1) 사분면 대신 개형 그림을 고르게 하기(40-75 골조 ★3) (2) 거꾸로 지나는 사분면을 주고 계수의 부호를 찾게 하는 역방향(★4 · BW) (3) 두 직선 ax+by+c=0 과 cx+ay+b=0 의 개형을 함께 묻기(★4).'
```

```yaml
- id: GN-CM2-40-74
  page: 40
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴ a=0, bc<0 ⑵ ab<0, bc<0 ⑶ c=0, ab<0 의 세 경우에 대하여 직선 ax + by + c = 0 이 지나는 사분면을 모두 구하기.
  category: "계수 부호 → 개형(수평선·일반·원점 통과) → 사분면"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "부호 조건을 기울기·y절편의 부호로 옮겨 그래프 개형으로 읽음"
    - step: 2
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "a = 0 은 수평선, c = 0 은 원점을 지나는 직선으로 일반 개형과 다른 갈래로 따로 판정해야 함"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "계수의 부호와 직선의 개형 — 퇴화 경우(수평선·원점 통과) 포함"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑴ 은 y = -c/b 인 수평선이고 bc<0 에서 절편이 양수, ⑶ 은 c = 0 이라 원점을 지나며 기울기만 양수로 정해진다. ⑵ 만 기울기·절편이 모두 양수인 일반 개형.
    40-e6 과 같은 골조에 퇴화 갈래가 두 개로 늘었다. 통찰 2·M_total 7 → 확인체크 유제 출발에서 ★3. 원점 통과 시 제1, 3사분면만 지난다는 경계 판정이 함정.
  tier: star_3
  mechanism_primary: '부호 조건 → 기울기·y절편 부호(또는 a=0 수평선 · c=0 원점 통과) → 개형 → 지나는 사분면'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ 제$1$, $2$사분면 ⑵ 제$1$, $2$, $3$사분면 ⑶ 제$1$, $3$사분면'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/40-74.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '부호 조합과 0 이 되는 계수를 바꿀 수 있음. 제약: 세 곱의 부호가 서로 모순되지 않아야 하고, 계수 두 개를 동시에 0 으로 두면 직선이 되지 않으므로 하나만 0 으로 둘 것.'
    creative: '(1) 지나지 않는 사분면을 묻기(여집합 사고 ★3) (2) 각 경우의 개형을 그림 선지로 고르게 하기(★3) (3) 조건을 부등식 하나만 주고 가능한 사분면 집합을 모두 나열하게 하면 다중 해석이 커져 ★4.'
```

```yaml
- id: GN-CM2-40-75
  page: 40
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ab>0, ac<0 일 때 직선 ax + by + c = 0 의 개형을 다섯 개의 그래프 그림 중에서 고르기(선지 ①~⑤가 모두 그림).
  category: "두 부호 조건 결합 → 기울기·절편 부호 → 개형 선택"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "주어진 두 조건 ab>0, ac<0 을 곱해 직접 주어지지 않은 bc<0 을 끌어냄"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "얻은 부호 정보를 기울기 -a/b 와 y절편 -c/b 의 부호로 옮겨 선지 그림과 대조"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "계수의 부호와 직선의 개형 — 그림 선지 고르기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ab>0 에서 기울기 -a/b 가 음수, 두 조건을 곱해 얻은 bc<0 에서 y절편 -c/b 가 양수이므로 개형이 하나로 정해진다.
    주어지지 않은 bc 의 부호를 조건끼리 결합해 만들어 내는 단계가 이 문항의 고비다. 통찰 2·M_total 6 → ★3. [분류 이슈] I-CON 은 CM1 에서 보수적으로 인정하는 유형이라 CM2 경계 정책 확인 필요.
  tier: star_3
  mechanism_primary: 'ab>0 → 기울기 음수 · ab>0 과 ac<0 을 곱해 bc<0 → y절편 양수 → 해당 개형 선택'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '③'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/40-75.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '조건을 이루는 곱의 쌍(ab, bc, ca)과 부등호 방향을 바꿀 수 있음. 제약: 두 조건만으로 기울기와 y절편의 부호가 모두 결정되어야 답이 하나로 정해진다. 같은 문자를 공유하는 두 곱(ab 와 ac 처럼)을 골라야 세 번째 부호가 유도됨.'
    creative: '(1) 개형을 주고 성립하는 부호 조건을 고르게 하는 역방향(★3~4) (2) ax+by+c=0 대신 bx+cy+a=0 의 개형을 묻기(부호 추적이 한 겹 늘어 ★4) (3) 선지 없이 지나는 사분면을 서술하게 하면 40-e6 골조로 돌아가 ★3.'
```

```yaml
- id: GN-CM2-41-e7
  page: 41
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    직선 (2-k)x + (3k-1)y - 5 = 0 이 실수 k 의 값에 관계없이 항상 지나는 점의 좌표.
  category: "k 에 대한 항등식 → 계수 = 0 연립 → 고정점"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "k 에 관계없이 성립한다는 조건을 k 에 대한 항등식으로 바꿔 읽고 k 로 묶어 정리"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "k 의 값에 관계없이 항상 지나는 점"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    k(-x + 3y) + (2x - y - 5) = 0 으로 묶고 k 에 대한 항등식이므로 두 괄호가 모두 0, 연립해서 (3, 1).
    변환을 떠올리지 못하면 k 에 값을 몇 개 대입해 보는 우회로밖에 없는 진입 저항형이라, 통찰 1(d2)이지만 필수 예제 ★2 출발에서 +1 → ★3. [분류 이슈] 통찰 1개·depth 2 로 산식상 +1 근거가 약함.
  tier: star_3
  mechanism_primary: 'k 로 묶어 항등식 → -x + 3y = 0, 2x - y - 5 = 0 → 연립 → (3, 1)'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$(3,\,1)$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/41-e7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'k 가 붙는 계수와 상수항을 바꿀 수 있음. 제약: k 로 묶은 두 식이 평행하지 않아야(계수비가 달라야) 고정점이 하나로 정해지고, 연립해가 격자점이 되도록 계수를 고를 것.'
    creative: '(1) 고정점을 지나는 다른 조건(예: 원점과의 거리)을 덧붙이기(★3) (2) k 를 포함한 직선이 특정 사분면을 지나도록 하는 k 의 범위로 확장하면 42쪽 골조가 되어 ★4 (3) 두 개의 매개변수 k, m 을 넣으면 항등식이 두 겹이 되어 ★4.'
```

```yaml
- id: GN-CM2-41-76
  page: 41
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    직선 (2k-1)x - (k-1)y - 3 = 0 이 실수 k 에 관계없이 항상 지나는 점 P 의 좌표.
  category: "k 에 대한 항등식 → 계수 = 0 연립 → 고정점"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "k 에 관계없이 성립 → k 에 대한 항등식으로 바꿔 k 로 묶음(바로 앞 예제에서 방법이 제시된 뒤라 depth 1)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "k 의 값에 관계없이 항상 지나는 점"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    k(2x - y) + (-x + y - 3) = 0 으로 묶어 2x - y = 0, -x + y - 3 = 0 을 연립하면 (3, 6).
    41-e7 의 유제로 골조가 완전히 같고 묶기·연립 모두 한 줄이다. 통찰 d1·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: 'k 로 묶어 항등식 → 2x - y = 0, -x + y - 3 = 0 → 연립 → P(3, 6)'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$(3,\,6)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/41-76.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'k 의 계수와 상수항을 바꿀 수 있음. 제약: 두 식의 계수비가 서로 달라야 고정점이 유일하고, 상수항을 바꿀 때 해가 정수로 떨어지는지 확인할 것.'
    creative: '(1) 고정점과 원점을 지나는 직선의 방정식을 이어서 묻기(★3) (2) 고정점이 제1사분면에 오도록 상수항을 정하게 하는 역방향(★3) (3) 매개변수를 분모에 넣어(1/k 꼴) k ≠ 0 조건을 끼우면 함정이 늘어 ★3.'
```

```yaml
- id: GN-CM2-41-77
  page: 41
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    직선 (k-2)x + (2k+1)y + 7 - k = 0 이 실수 k 에 관계없이 항상 지나는 점을 P 라 할 때 선분 OP 의 길이(O 는 원점).
  category: "항등식 → 고정점 → 두 점 사이 거리"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "k 에 관계없이 성립 → k 에 대한 항등식으로 바꿔 상수항까지 포함해 k 로 묶음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "항상 지나는 점과 거리 결합"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    상수항 7 - k 에도 k 가 숨어 있어 묶을 때 빠뜨리기 쉽다. k(x + 2y - 1) + (-2x + y + 7) = 0 을 연립하면 P(3, -1), 이어서 OP = √10.
    항등식 착안(d1)에 거리 공식이 한 단계 더 붙어 M_total 7 → ★3.
  tier: star_3
  mechanism_primary: 'k 로 묶어 항등식 → x + 2y - 1 = 0, -2x + y + 7 = 0 → P(3, -1) → OP = √10'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\sqrt{10}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/41-77.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'k 의 계수와 상수항을 바꿀 수 있음. 제약: 상수항에도 k 를 남겨 두는 구조를 유지해야 이 문항의 함정이 살아 있고, 고정점의 좌표가 정수여야 거리가 무리수꼴로 정리됨.'
    creative: '(1) OP 대신 P 와 다른 정점 사이의 거리·중점을 묻기(★3 유지) (2) 고정점에서 원점까지 거리가 최소가 되도록 계수를 정하게 하는 역방향(★4) (3) 두 개의 매개변수 직선이 각각의 고정점을 가질 때 두 고정점을 지나는 직선을 묻기(★4).'
```

```yaml
- id: GN-CM2-42-e8
  page: 42
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["발전"]
  category_type: "발전 예제"
  summary: |
    두 직선 x + y - 2 = 0, mx - y + m + 1 = 0 이 제1사분면에서 만나도록 하는 실수 m 의 값의 범위.
  category: "고정점 추출 → 고정점 둘레 회전 → 기울기 범위 부등식"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "둘째 직선을 m(x + 1) - y + 1 = 0 으로 묶어 m 에 관계없이 고정점 (-1, 1)을 지나는 직선다발로 바꿔 읽음"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "제1사분면에서 만난다는 조건을 고정점을 축으로 직선을 회전시켜 첫 직선의 제1사분면 부분(양 끝 (0,2), (2,0))을 쓸어야 한다는 그림으로 옮기고, 두 경계 기울기를 부등식으로 환원"
  insight_count: 2
  depth_score: 4.00
  type_id: null
  type_hint: "항상 지나는 점의 활용 — 두 직선의 교점이 특정 사분면에 있을 조건"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    둘째 직선이 m 에 관계없이 (-1, 1)을 지나는 직선다발임을 먼저 보고, 그 점을 축으로 돌릴 때 교점이 첫 직선의 제1사분면 부분 위에 놓이는 회전 구간을 찾는다. 경계 기울기는 (0, 2) 방향 1 과 (2, 0) 방향 -1/3.
    두 축 위의 점은 제1사분면에 속하지 않으므로 등호를 모두 빼야 한다. 통찰 2(EQV d2 + RT d2)·M_total 8·경계 함정 → 발전 예제 ★3 출발에서 +1 → ★4.
  tier: star_4
  mechanism_primary: '둘째 직선의 고정점 (-1, 1) → 첫 직선의 제1사분면 부분 양 끝 (0, 2), (2, 0)과 잇는 기울기 1, -1/3 → -1/3 < m < 1'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-\dfrac{1}{3}<m<1$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/42-e8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '첫 직선의 절편과 둘째 직선의 고정점 좌표(상수항 배치)를 바꿀 수 있음. 제약: 고정점이 첫 직선 위에 있으면 안 되고, 첫 직선이 해당 사분면을 실제로 지나야 한다. 경계 기울기가 유리수로 떨어지도록 절편을 정수로 둘 것. 축 위의 점 제외 때문에 등호는 항상 빠짐.'
    creative: '(1) 사분면을 제2·제4사분면으로 바꾸기(★4 유지 · 경계 기울기만 달라짐) (2) 교점이 선분 위에 있도록 바꾸면 42-79 골조로 내려와 ★3 (3) 둘째 직선을 고정점이 없는 일반형으로 바꾸면 교점을 직접 구해 부등식을 푸는 대수 풀이가 되어 통찰이 사라지고 ★3.'
```

```yaml
- id: GN-CM2-42-78
  page: 42
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 직선 x + y + 1 = 0, mx + y - m + 1 = 0 이 제3사분면에서 만나도록 하는 실수 m 의 값의 범위.
  category: "고정점 추출 → 회전 구간 → 기울기 부등식"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "둘째 직선을 m(x - 1) + y + 1 = 0 으로 묶어 고정점 (1, -1)을 지나는 직선다발로 바꿔 읽음"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "제3사분면에서 만난다는 조건을 고정점 둘레의 회전으로 옮겨 첫 직선의 제3사분면 부분 양 끝 (-1, 0), (0, -1)로 향하는 기울기 사이로 환원"
  insight_count: 2
  depth_score: 4.00
  type_id: null
  type_hint: "항상 지나는 점의 활용 — 두 직선의 교점이 특정 사분면에 있을 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    42-e8 과 같은 골조이나 고정점 (1, -1)이 제4사분면에 있어 회전 방향을 그림으로 확인해야 한다. 둘째 직선의 기울기는 -m 이므로 경계 기울기 -1/2, 0 을 m 으로 되돌리는 과정에서 부등호가 뒤집힌다.
    통찰 2 로 산식상 +1 후보지만 바로 앞 발전 예제의 유제이고 경계 좌표가 단순해 ★3 으로 둔다. [분류 이슈] 통찰 2개 기준으로는 ★4 후보.
  tier: star_3
  mechanism_primary: '둘째 직선의 고정점 (1, -1) → 첫 직선의 제3사분면 부분 양 끝 (-1, 0), (0, -1)로의 기울기 -1/2, 0 → 기울기 -m 이 그 사이 → 0 < m < 1/2'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$0<m<\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/42-78.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '첫 직선의 상수항과 둘째 직선의 고정점 배치를 바꿀 수 있음. 제약: 고정점이 첫 직선 위에 있으면 교점이 정해지지 않고, 기울기가 -m 처럼 부호가 뒤집힌 꼴이면 부등호 방향 전환을 반드시 검토할 것.'
    creative: '(1) 사분면을 바꾸기(★3 유지) (2) 둘째 직선의 기울기를 m 그대로 두어 부호 전환 함정을 없애면 ★3 에서 체감이 내려감 (3) 교점이 특정 사분면에 있으면서 원점과의 거리가 조건을 만족하도록 하면 ★4.'
```

```yaml
- id: GN-CM2-42-79
  page: 42
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    직선 y = mx + 2 가 A(5, 1), B(2, 3)을 이은 선분 AB 와 만나도록 하는 실수 m 의 값의 범위.
  category: "고정점 (0, 2) 회전 → 두 끝점 방향 기울기 → 경계 포함 부등식"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "선분과 만난다는 조건을 y절편 (0, 2)를 축으로 한 직선의 회전으로 옮겨, 두 끝점으로 향하는 기울기 사이라는 부등식으로 환원"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "직선이 선분과 만날 조건(고정점 회전)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    y = mx + 2 는 m 과 무관하게 (0, 2)를 지나므로 그 점을 축으로 돌려 선분 AB 를 쓸어야 한다. 경계는 A 방향 -1/5 와 B 방향 1/2.
    선분은 끝점을 포함하므로 등호가 살아 있다는 점이 함정. 통찰 1(RT d2)·M_total 6 → ★3.
  tier: star_3
  mechanism_primary: 'y = mx + 2 는 (0, 2) 고정 → A 방향 기울기 -1/5, B 방향 기울기 1/2 → -1/5 ≤ m ≤ 1/2'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-\dfrac{1}{5}\le m\le\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/42-79.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '고정점의 y절편과 두 끝점 좌표를 바꿀 수 있음. 제약: 고정점이 선분을 지나는 직선 위에 있거나 선분과 x 좌표가 겹치면 회전 구간이 끊긴다. 두 끝점 방향 기울기가 유리수가 되도록 좌표를 정수로 둘 것.'
    creative: '(1) 선분 대신 삼각형 내부를 지나도록 하기(★4) (2) 끝점을 제외한 선분으로 바꾸면 등호만 빠져 ★3 유지 (3) 고정점을 직선 밖의 매개변수 직선다발로 바꾸면 42-e8 골조가 되어 ★4.'
```

## 표본 판정 요약 (23문)

- ★ 분포: ★1 1 · ★2 11 · ★3 10 · ★4 1 · ★5 0
- 통찰형 13 · 절차형 10 · premium 0
- 통찰 유형 분포: I-EQV 7 · I-RT 5 · I-SYM 2 · I-MI 2 · I-CON 1 (총 17개 라벨)
- type_hint 상위 5: 「넓이를 이등분하는 직선(중선·점대칭 중심)」 4 · 「k 에 관계없이 항상 지나는 점(활용 포함)」 5 · 「계수의 부호와 직선의 개형」 3 · 「세 점이 한 직선 위에 있을 조건」 2 · 「한 점·두 점·절편으로 세우는 직선」 5
- 벤더 태그: 필수 7 · 발전 1 · 확인체크 15. 확인체크는 모두 바로 위 예제의 유제라 해당 예제의 출발점을 물려받아 판정했다.
- 그림: 2문(`crop:fig-39-72.png` · `crop:fig-39-73.png`). 40-75 는 선지 ①~⑤가 그래프 그림이지만 전사본에 figure 필드가 없어 `none` 으로 두었다(부호 판정만으로 개형이 정해져 크롭을 열지 않아도 골조가 잡힘).
- 덩어리별 성격: 37~38쪽은 공식 연결형(절차형 9/10), 39~42쪽은 조건을 다른 표현으로 바꿔 읽어야 진입이 되는 통찰형(13/13)으로 뚜렷하게 갈린다.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CM2-39-73 | 점대칭 성질을 쓰므로 insight_type 은 통찰형이지만, 중심이 즉시 보이고 이후는 대입 한 줄이라 체감은 절차형 ★2 | ★2 / ★3 |
| GN-CM2-40-75 | 두 조건을 곱해 bc<0 을 얻는 단계를 I-CON 으로 인정했으나, CON 은 CM1 에서 보수적 인정 유형 — CM2 경계 정책 확인 필요 | ★3 |
| GN-CM2-41-e7 | 통찰 1개·depth 2 로 v3.8 산식의 +1 근거가 약하지만, 항등식 착안이 없으면 진입 자체가 막히는 진입 저항형이라 ★3 으로 올림 | ★2 / ★3 |
| GN-CM2-42-78 | 통찰 2개(EQV d2 + RT d2) 기준으로는 ★4 후보이나 바로 앞 발전 예제의 유제이고 경계 좌표가 단순해 ★3 으로 둠 | ★3 / ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: ⑴ 「도형의 넓이를 이등분하는 직선」은 *삼각형(중선)* 과 *점대칭 도형(중심 통과)* 이 착안이 서로 달라 한 유형으로 묶으면 안 된다(39-e5·39-71 vs 39-72·39-73). ⑵ 「항상 지나는 점」은 *고정점을 구하는 것이 답인 문항*(41-e7·41-76·41-77)과 *고정점을 구한 뒤 회전 범위를 묻는 활용*(42-e8·42-78·42-79)이 base ★ 가 한 단계 이상 벌어지므로 별도 유형으로 두는 것이 맞다.
- **통합해도 될 유형**: 「한 점과 기울기」·「두 점」·「절편형」(37-e1·37-e2·38-e3·38-68·38-69)은 도구만 다를 뿐 골조가 전부 *점 정보 → 직선식 한 줄* 이라 「직선의 방정식 세우기」 한 유형 아래 하위 항목으로 두어도 된다. 「세 점이 한 직선 위에 있을 조건」(38-e4·38-70)도 미지수 배치만 다른 한 유형.
- **base ★ 제안**: 직선 세우기 ★2 · 한 직선 위 조건 ★2 · 넓이 이등분(삼각형) ★3 · 넓이 이등분(점대칭) ★2~3 · 계수 부호와 개형 ★3 · 항상 지나는 점 ★2~3 · 항상 지나는 점의 활용 ★4.
