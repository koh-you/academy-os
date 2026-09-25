---
name: mechanism-데이터-GN-GEO-15
description: 개념원리 기하 15 두 점 사이의 거리(1/1 · 119~124쪽 27문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 기하 (22개정) · 전사본 latex-bank/gn-geo
  section: 15 두 점 사이의 거리
  unit_code: GEO-15
  part: "1/1"
  extract_range: "119~124쪽 · 119-e3~124-246"
  total_problems: 27
  unit_total: 27
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-geo/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-geo/items/<id>.tex
  image_source: latex-bank/gn-geo/figures/ (crops.json)
---

# 개념원리 기하 · 15 두 점 사이의 거리 (1/1) 정독 데이터 (v1.0)

119~124쪽의 27문항 전수다. 구역은 「필수·발전 예제」 15문(필수 예제 4개와 각 예제에 딸린 확인체크 11문) · 「연습문제 STEP 1」 5문 · 「연습문제 STEP 2」 5문 · 「연습문제 실력 UP」 2문이다. 벤더 난이도 신호는 구역과 태그로 읽었다. 다만 이 범위의 확인체크는 「개념원리 익히기」의 개념 확인이 아니라 바로 앞 **필수 예제와 같은 골조의 짝문항**이므로 ★1 이 아니라 **★2 를 출발점**으로 삼고, 공식을 한 번 그대로 대입하는 수준이면 −1, 미지수가 들어간 방정식·연립·다중해가 붙으면 +1 로 조정했다(문항마다 rationale 에 근거를 남김).

단원의 도구는 네 개뿐이다 — (1) 공간의 거리 공식, (2) 좌표평면·좌표축에 대한 대칭점, (3) 좌표평면 위로의 정사영과 직선이 평면과 이루는 각, (4) 대칭점으로 꺾인 경로를 펴서 구하는 선분 길이의 합의 최솟값. 통찰은 대부분 「좌표(대수) ↔ 공간의 도형(기하)」 전환(I-RT)이고, 최솟값 문제에서 두 점이 평면의 같은 쪽인지 반대쪽인지 따지는 단계가 I-MI·I-VF 로 올라간다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다. 문항은 골조를 잡는 데 필요한 만큼만 풀었고 `answer` 는 전사본 값을 그대로 옮겼다(재검산하지 않음).

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-GEO-119-e3
  page: 119
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ P(2, 1, 3)의 xy평면 대칭점 Q와 z축 대칭점 R에 대하여 선분 QR의 길이.
    ⑵ A(3, -1, 1), B(4, 1, 0), C(1, 1, -3)을 꼭짓점으로 하는 삼각형 ABC의 넓이.
  category: "대칭점 좌표 → 거리 공식 → 세 변으로 도형 판정 후 넓이"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "세 변의 길이를 구한 뒤 피타고라스 역으로 직각삼각형임을 읽어 넓이 공식으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "공간의 대칭점과 두 점 사이의 거리·삼각형의 넓이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 대칭 규칙(xy평면은 z만 부호 반전 · z축은 x·y 부호 반전)을 정확히 쓰면 거리 공식 한 번이다.
    ⑵ 는 세 변을 모두 구한 뒤 AB²+BC²=AC² 로 직각을 읽는 단계가 골조의 중심이다.
    필수 예제 출발 ★2 · 통찰 1(RT d1) · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "대칭 규칙으로 Q·R 좌표 → 거리 공식 → ⑵ 세 변 길이 → 직각 판정 → 1/2×두 변"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $2\sqrt{14}$ ⑵ $3\sqrt{3}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/119-e3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "P의 좌표와 ⑵ 의 세 점을 바꿀 수 있다. 제약 — ⑴ 은 대칭 대상(평면 3종·축 3종)을 바꾸면 QR 이 달라지므로 어느 성분이 반전되는지 다시 쓸 것. ⑵ 는 세 변 중 하나가 직각을 이루도록 좌표를 잡아야 넓이가 무리식 한 줄로 끝난다."
    creative: "(1) ⑵ 를 정삼각형·이등변삼각형이 되는 좌표로 바꾸기(★2 유지) (2) 대칭점 Q·R 대신 「QR 의 길이가 최소가 되는 P」를 묻기(I-BW 추가 ★3) (3) 삼각형의 넓이 대신 외접원의 반지름·수선의 길이를 묻기(정사영·삼수선 결합 ★3)."
```

```yaml
- id: GN-GEO-119-224
  page: 119
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    A(-a, -1, 3), B(0, a, -3) 사이의 거리가 7일 때 양수 a 의 값.
  category: "거리 공식 → a 에 대한 이차방정식 → 양수 해 선택"
  M: {s: 1, k: 2, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 점 사이의 거리 조건으로 미지수 정하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    거리 공식에 미지수를 넣어 제곱하면 a²+a-6=0 이 되고 양수 조건(T-범위)으로 해를 하나 고른다.
    통찰 없는 표준 절차지만 매개변수 좌표·이차방정식이 있어 M_total 6 → 확인체크 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "거리 공식 제곱 → a 이차방정식 → 양수 해"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/119-224.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "거리 값(7)과 좌표에 들어가는 a 의 위치·상수를 바꿀 수 있다. 제약 — 전개한 이차방정식이 유리수 근을 갖도록 상수를 맞추고(판별식이 완전제곱), 양수 해가 정확히 하나만 남게 할 것."
    creative: "(1) 답을 「모든 a 의 합」으로 바꿔 두 근을 다 쓰게 하기(★2) (2) 거리 대신 「거리가 최소가 되는 a」를 묻기(이차함수 최솟값 ★2) (3) 세 번째 점을 넣어 AB=BC 조건으로 바꾸면 연립 ★3."
```

```yaml
- id: GN-GEO-119-225
  page: 119
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    A(0, 1, 2), B(2k, -1, 0), C(-1, 2, k+1)에 대하여 AB = 2AC 일 때 k 의 값.
  category: "길이 비 조건 → 양변 제곱 → k 일차방정식"
  M: {s: 1, k: 2, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 선분 길이의 비 조건으로 미지수 정하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    AB=2AC 를 AB²=4AC² 로 제곱해 옮기면 k² 항이 소거돼 일차방정식이 된다.
    표준 절차(통찰 없음)지만 두 점 모두에 k 가 들어가 계산이 중간 부담 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "AB²=4AC² → k² 소거 → k 일차방정식"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/119-225.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "비의 값(2배)과 세 점의 좌표를 바꿀 수 있다. 제약 — 제곱 후 k² 계수가 같아야 일차식으로 떨어진다. 계수가 남으면 이차가 되고 해가 둘이 되니 그때는 발문을 「모든 k」로 고칠 것."
    creative: "(1) 비를 √2 배처럼 무리수로 주기(★2) (2) k² 가 남도록 좌표를 설계해 두 해를 모두 구하게 하기(★3) (3) AB=2AC 대신 「A, B, C 가 한 직선 위」 조건으로 바꾸면 방향 비교 ★3."
```

```yaml
- id: GN-GEO-119-226
  page: 119
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    P(1, 1, 1)의 xy·yz·zx평면 대칭점 A, B, C 로 이루어진 삼각형 ABC 의 넓이.
  category: "세 평면 대칭점 → 세 변 길이 → 정삼각형 넓이 공식"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "세 변이 모두 2√2 임을 확인해 좌표 계산을 정삼각형 넓이 공식으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "좌표평면에 대한 대칭점으로 만든 삼각형의 넓이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    세 평면 대칭은 각각 한 성분만 부호를 바꾸므로 A, B, C 는 P 에서 한 좌표씩 반전된 점이다.
    세 변이 모두 같음을 확인하면 정삼각형 넓이 공식 한 줄. 통찰 1(RT d1) · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "성분 하나씩 반전 → 세 변 길이 2√2 → (√3/4)×변²"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2\sqrt{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/119-226.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "P 의 좌표를 바꿀 수 있다. 제약 — 세 성분의 절댓값이 모두 같아야 정삼각형이 되고, 다르면 세 변이 갈려 헤론·직각 판정으로 풀이가 길어진다(그때는 ★3)."
    creative: "(1) 대칭 대상 셋 중 하나를 좌표축 대칭으로 바꾸기(변 길이가 갈려 ★3) (2) 삼각형의 넓이 대신 사면체 OABC 의 부피를 묻기(★3) (3) P 를 미지수로 두고 넓이가 주어진 값이 되는 P 를 찾기(I-BW ★3)."
```

```yaml
- id: GN-GEO-120-e4
  page: 120
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ A(2, -1, 3), B(4, 5, 3)에서 같은 거리에 있는 x축 위의 점 P 의 좌표.
    ⑵ A(-1, -2, -1), B(-2, -3, 1)과 xy평면 위의 직선 y = x/3 위의 점 P 가 AP = BP 일 때 P 의 좌표.
  category: "축·직선 위의 점을 문자 하나로 표현 → AP²=BP² → 방정식"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「x축 위」·「직선 y=x/3 위」라는 위치 조건을 (a, 0, 0)·(3t, t, 0) 이라는 좌표 표현으로 동치 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 점에서 같은 거리에 있는 축·직선 위의 점"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    골조는 「위치 조건을 문자 하나짜리 좌표로 옮기고 AP²=BP² 를 세운다」 한 줄이다.
    ⑵ 는 직선 위의 점을 매개변수로 두는 단계가 추가돼 Mₐ 2. 필수 예제 출발 ★2 · 통찰 1 → ★2 유지.
  tier: star_2
  mechanism_primary: "P 를 (a,0,0)·(3t,t,0) 로 표현 → AP²=BP² → 일차방정식 → 좌표"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $(9,\,0,\,0)$ ⑵ $(-3,\,-1,\,0)$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/120-e4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 점의 좌표와 ⑵ 의 직선 기울기를 바꿀 수 있다. 제약 — AP²=BP² 에서 이차항이 소거돼 일차방정식이 되므로 답은 항상 하나다. 좌표를 정수로 떨어뜨리려면 기울기의 분모와 두 점의 차를 맞출 것."
    creative: "(1) 축을 y축·z축으로 바꾸기(★2 유지) (2) 세 점에서 같은 거리로 늘려 연립으로 만들기(★3) (3) 「같은 거리」 대신 AP=2BP 로 바꾸면 이차항이 살아나 두 해·구면 해석(★3~4)."
```

```yaml
- id: GN-GEO-120-227
  page: 120
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    A(3, -4, 1), B(-2, 5, 3)에서 같은 거리에 있는 z축 위의 점 P 의 좌표.
  category: "P(0, 0, c) → AP²=BP² → c 일차방정식"
  M: {s: 1, k: 2, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 점에서 같은 거리에 있는 좌표축 위의 점"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    앞 필수 예제 ⑴ 의 축만 바꾼 짝문항이다. z축 위 점을 (0, 0, c) 로 두고 제곱 거리를 비교하면 c 일차방정식.
    통찰 없음 · M_total 6 · 예제와 같은 골조 → 확인체크 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "P(0,0,c) → AP²=BP² → c"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$(0,\,0,\,3)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/120-227.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 점의 좌표를 바꿀 수 있다. 제약 — z성분의 계수 차가 0 이 되면 방정식이 모순·항등이 되므로 두 점의 z좌표가 서로 달라야 한다. 답이 정수로 떨어지게 제곱합 차를 짝수로 맞출 것."
    creative: "(1) 축 대신 좌표평면 위의 점으로 바꾸기(미지수 2개 → ★2) (2) 「같은 거리에 있는 점이 존재하지 않는 조건」을 묻기(I-BW ★3) (3) 거리의 최솟값을 함께 묻기(이차함수 ★3)."
```

```yaml
- id: GN-GEO-120-228
  page: 120
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    A(1, 2, 1), B(-1, 0, 1), O(0, 0, 0)에서 같은 거리인 yz평면 위의 점 P(a, b, c)에 대하여 a+b+c.
  category: "P(0, b, c) → 세 등거리 조건 → 연립 → 좌표합"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "세 점에서 같은 거리에 있는 좌표평면 위의 점"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    yz평면 위이므로 a=0 이고 PA²=PB² 에서 b, PO²=PB² 에서 c 가 각각 독립으로 떨어진다.
    연립이지만 두 식이 서로 분리돼 풀이가 짧다. 단순 연립은 통찰로 세지 않음(§2.2 I-CON 보수 정책) → ★2 유지.
  tier: star_2
  mechanism_primary: "P(0,b,c) → PA²=PB² 로 b → PO²=PB² 로 c → a+b+c"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/120-228.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 점의 좌표와 기준 평면(yz → zx, xy)을 바꿀 수 있다. 제약 — 세 점이 한 직선 위에 있으면 등거리 점이 없거나 무수히 많아진다. 두 식이 각각 한 문자만 남도록 좌표를 설계하면 난도가 유지된다."
    creative: "(1) 두 식이 얽히도록 좌표를 바꿔 진짜 연립으로 만들기(★3) (2) 「세 점을 지나는 구의 중심이 yz평면 위에 있다」로 표현을 바꾸기(I-RT ★3) (3) 등거리 점까지의 거리(외접원 반지름)를 추가로 묻기(★3)."
```

```yaml
- id: GN-GEO-120-229
  page: 120
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    A(1, 1, 2), B(2, -1, 3)과 zx평면 위의 점 C 에 대하여 삼각형 ABC 가 정삼각형일 때 C 의 좌표 전부.
  category: "C(x, 0, z) → CA=CB=AB 두 식 → 연립 이차 → 두 해"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「정삼각형」을 CA²=CB² 와 CA²=AB² 라는 두 등식으로 동치 변환(모양 조건 → 계산 가능한 식)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "좌표평면 위의 점으로 정삼각형 만들기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    CA²=CB² 로 x, z 의 일차관계를 얻고 CA²=AB²(=6) 에 대입하면 이차방정식이 돼 해가 둘 나온다.
    「모두 구하시오」이므로 두 해를 다 살려야 한다. 확인체크 출발 ★2 이나 모양 조건의 식 전환 + 연립 이차 + 다중해로 +1 → ★3.
    [분류 이슈] 벤더 태그는 확인체크(★2)인데 판정은 ★3 — 라벨은 ★3 으로 두고 기록.
  tier: star_3
  mechanism_primary: "C(x,0,z) → CA²=CB² 로 일차관계 → CA²=AB² 대입 → 이차 → 두 점"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$(0,\,0,\,4)$, $(3,\,0,\,1)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/120-229.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A, B 의 좌표와 기준 평면을 바꿀 수 있다. 제약 — AB 가 평면과 너무 기울면 근호가 지저분해지거나 실근이 사라진다. 두 해가 모두 정수 좌표로 나오려면 이차방정식의 판별식이 완전제곱이어야 한다."
    creative: "(1) 정삼각형 대신 직각이등변삼각형으로 바꾸기(★3 유지) (2) 「정삼각형이 되는 C 가 존재할 조건」을 묻기(I-BW ★4) (3) 두 해로 만든 두 삼각형의 넓이 합·거리를 추가로 묻기(★3)."
```

```yaml
- id: GN-GEO-121-e5
  page: 121
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    A(1, -1, 2), B(4, 3, 7)에 대하여 ⑴ 선분 AB 의 xy평면 위로의 정사영의 길이 ⑵ 직선 AB 와 xy평면이 이루는 각 θ 의 cos θ.
  category: "성분 차 → 평면 성분만 남긴 정사영 길이 → 정사영/원래 길이 = cos θ"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "선분·정사영·수직 성분이 이루는 직각삼각형으로 옮겨 각을 길이의 비로 읽음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "선분의 좌표평면 위로의 정사영과 이루는 각"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    xy평면 위로의 정사영은 z성분을 버린 길이, 원래 길이는 세 성분 전부이므로 cos θ 는 두 길이의 비다.
    이 단원의 정사영 도구를 세우는 예제. 필수 예제 출발 ★2 · 통찰 1(RT d1) · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "AB 성분 차 → z 버린 길이 = 정사영 → cos θ = 정사영/AB"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $5$ ⑵ $\dfrac{\sqrt{2}}{2}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/121-e5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 점의 좌표를 바꿀 수 있다. 제약 — 정사영 길이와 선분 길이가 모두 정수·간단한 무리수가 되도록 성분 차를 (3,4,5)·(1,2,2) 같은 조합으로 잡을 것. cos 값이 특수각(30°·45°·60°)이 되면 각의 크기까지 물을 수 있다."
    creative: "(1) 기준 평면을 yz·zx 로 바꾸기(★2 유지) (2) cos 대신 sin·tan 을 묻기(수직 성분을 봐야 해 ★2~3) (3) 정사영의 길이가 주어지고 좌표의 미지수를 찾게 하기(I-BW ★3)."
```

```yaml
- id: GN-GEO-121-230
  page: 121
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    A(3, 2, -1), B(5, -4, 2)에 대하여 선분 AB 의 xy·yz·zx평면 위로의 정사영의 길이 각각.
  category: "성분 차 → 평면마다 한 성분 버리기 → 길이 3회"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "선분의 좌표평면 위로의 정사영의 길이"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    성분 차 (2, -6, 3)을 구한 뒤 평면마다 해당하는 성분 하나를 버리고 길이를 세 번 계산하면 끝난다.
    같은 공식의 반복이고 판단 지점이 없다. 통찰 0 · M_total 5 → 확인체크 출발 ★2 에서 −1 → ★1.
  tier: star_1
  mechanism_primary: "성분 차 (2,-6,3) → 평면별로 한 성분 제거 → 길이"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$xy$평면: $2\sqrt{10}$, $yz$평면: $3\sqrt{5}$, $zx$평면: $\sqrt{13}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/121-230.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 점의 좌표만 바꾸면 된다. 제약 — 세 정사영 길이가 모두 다른 형태(정수 하나·무리수 둘)로 나오게 성분 차를 잡으면 답이 구분된다. 성분 하나가 0 이면 정사영이 선분 그대로가 되므로 의도한 게 아니면 피할 것."
    creative: "(1) 세 정사영 길이의 제곱의 합이 2AB² 임을 보이게 하기(I-SYM ★3) (2) 정사영이 가장 긴 평면을 고르게 하기(★2) (3) 좌표에 미지수를 넣고 두 정사영의 길이가 같아지는 값을 찾게 하기(★3)."
```

```yaml
- id: GN-GEO-121-231
  page: 121
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    A(6, -1, 2), B(3, 2, 5)에 대하여 직선 AB 와 yz평면이 이루는 각 θ 의 cos θ.
  category: "성분 차 → yz 정사영 길이 → cos θ = 정사영/AB"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직선과 좌표평면이 이루는 각의 삼각비"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x성분을 버린 길이(정사영)와 전체 길이를 각각 구해 비를 취하면 된다. 앞 예제의 공식 두 개를 이어 쓰는 수준.
    M_total 5 이지만 정사영과 cos 관계 두 단계를 결합해야 하므로 −1 은 적용하지 않고 확인체크 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "성분 차 (-3,3,3) → x 제거한 길이 = 정사영 → cos θ = 정사영/AB"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{\sqrt{6}}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/121-231.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 점의 좌표와 기준 평면을 바꿀 수 있다. 제약 — cos θ 가 유리화 가능한 값이 되도록 (정사영)²/(AB)² 가 간단한 분수가 되게 성분을 잡을 것(예 2/3, 1/2)."
    creative: "(1) sin θ·tan θ 로 바꾸기(수직 성분 필요 ★2) (2) 세 좌표평면과 이루는 각의 cos 제곱의 합을 묻기(I-SYM ★3) (3) 각이 특수각이 되도록 좌표에 미지수를 넣기(★3)."
```

```yaml
- id: GN-GEO-121-232
  page: 121
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    A(√2, 1, 3), B(0, 4, k)에 대하여 직선 AB 와 zx평면이 이루는 각이 60°일 때 k 의 값 전부.
  category: "미지수 포함 정사영 → cos 60° = 정사영/AB → 제곱 정리 → 두 해"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이루는 각 조건으로 미지수 정하기(정사영)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    zx평면 정사영은 y성분을 버린 길이이므로 양변에 k 가 들어간 무리방정식이 되고, 제곱해 정리하면 (k-3)²=1.
    절차 자체는 앞 문항과 같지만 미지수가 근호 안에 들어가고 두 해를 모두 살려야 한다. 확인체크 출발 ★2 에서 M_total 7·다중해로 +1 → ★3.
    [분류 이슈] 벤더 태그는 확인체크(★2)이나 실제 부담은 STEP 2 급.
  tier: star_3
  mechanism_primary: "정사영² : AB² = cos²60° → (k-3)²=1 → k=2, 4"
  insight_type: 절차형
  target_cohort: 중상위권
  answer: '$2$, $4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/121-232.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각(60°)과 좌표의 상수를 바꿀 수 있다. 제약 — cos²θ 가 유리수여야 제곱 후 정리가 깔끔하고(30°·45°·60°), (k-a)² 가 양수로 남아야 실근 둘이 나온다. 각을 45° 로 바꾸면 해가 없어질 수 있으니 상수를 다시 맞출 것."
    creative: "(1) 「k 의 값의 합」을 묻기(★2~3) (2) 각이 최대가 되는 k 를 묻기(이차비 최적화 ★4) (3) 조건을 sin 으로 주고 평면을 바꾸기(★3 유지)."
```

```yaml
- id: GN-GEO-122-e6
  page: 122
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ A(2, 4, 1), B(-2, -3, 2)와 xy평면 위의 점 P 에 대하여 AP + BP 의 최솟값.
    ⑵ A(-2, 3, 1), B(4, 1, 5)와 yz평면 위의 점 P 에 대하여 AP + BP 의 최솟값.
  category: "평면 기준 같은 쪽/반대 쪽 판정 → 같은 쪽이면 대칭점 → 직선 거리"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "꺾인 경로의 최솟값을 대칭점으로 펴서 두 점 사이의 직선 거리로 전환"
    - step: 2
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 점이 평면의 같은 쪽인지 반대 쪽인지에 따라 대칭이 필요한 경우와 AB 그대로인 경우로 갈림"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "좌표평면을 지나는 선분 길이의 합의 최솟값(대칭점)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑴ 은 z좌표가 둘 다 양수(같은 쪽)이므로 한 점을 xy평면에 대칭시켜 직선으로 펴야 한다.
    ⑵ 는 x좌표가 -2 와 4 로 반대 쪽이라 선분 AB 자체가 yz평면을 지나 최솟값이 곧 AB 다 — 이 판정이 이 유형의 핵심이다.
    필수 예제 출발 ★2 · 통찰 2(RT d2 + MI d1) → +1 → ★3.
  tier: star_3
  mechanism_primary: "부호로 같은 쪽/반대 쪽 판정 → 같은 쪽이면 대칭점 A' → 최솟값 = A'B(반대 쪽이면 AB)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ $\sqrt{74}$ ⑵ $2\sqrt{14}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/122-e6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 점의 좌표와 기준 평면을 바꿀 수 있다. 제약 — 대칭 성분의 부호가 같은지 다른지가 풀이 갈래를 결정하므로 의도한 갈래대로 부호를 설계할 것. 답이 간단한 무리수가 되게 대칭 후 성분 차를 정수로 맞춘다."
    creative: "(1) 두 점이 반대 쪽인 경우만 모아 함정으로 쓰기(★2) (2) 최솟값을 줄 때의 P 의 좌표까지 묻기(내분점 계산 추가 ★3) (3) 지나야 하는 평면을 둘로 늘리기(연속 대칭 ★4 · 124-246 참조)."
```

```yaml
- id: GN-GEO-122-233
  page: 122
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    A(2, 2, 4), B(5, 4, -3)과 zx평면 위의 점 P 에 대하여 AP + BP 의 최솟값.
  category: "y좌표 부호 확인(같은 쪽) → A 의 zx평면 대칭점 → 직선 거리"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "대칭점으로 꺾인 경로를 펴서 최솟값을 두 점 사이의 거리로 전환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "좌표평면을 지나는 선분 길이의 합의 최솟값(대칭점)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y좌표가 2, 4 로 같은 쪽이므로 A 를 zx평면에 대칭시킨 A'(2, -2, 4)와 B 사이의 거리가 최솟값이다.
    예제 ⑴ 과 완전히 같은 갈래만 쓰므로 통찰 1(RT d2)·M_total 5 → 확인체크 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "같은 쪽 확인 → A'(2,-2,4) → 최솟값 = A'B"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\sqrt{94}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/122-233.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 점의 좌표와 기준 평면을 바꿀 수 있다. 제약 — 대칭 성분의 부호가 같아야 대칭 갈래가 유지된다. 대칭 후 성분 차의 제곱합이 깔끔한 무리수가 되게 맞출 것."
    creative: "(1) 부호를 반대로 줘 대칭이 필요 없게 하기(함정 ★2) (2) AP+BP 가 아니라 |AP-BP| 의 최댓값을 묻기(★4) (3) P 를 평면이 아니라 좌표축 위로 제한하기(★3)."
```

```yaml
- id: GN-GEO-122-234
  page: 122
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    A(3, 0, 4), B(-3, 0, 2)와 x축 위의 점 P 에 대하여 AP + BP 의 최솟값.
  category: "두 점이 zx평면 위 → x축 대칭점 → 평면 문제로 환원"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 점이 모두 y=0 평면 위에 있음을 보고 x축에 대한 대칭으로 평면 위의 최단 경로 문제로 환원"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "좌표축을 지나는 선분 길이의 합의 최솟값(대칭점)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    대칭 대상이 평면이 아니라 축이지만 두 점의 y좌표가 0 이라 zx평면 안의 평면 문제가 된다.
    B 를 x축에 대칭시킨 점과 A 를 잇는 길이가 최솟값. 통찰 1(RT d2) · M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "y=0 확인 → B'(-3,0,-2) → 최솟값 = AB'"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$6\sqrt{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/122-234.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 점의 z좌표와 x좌표를 바꿀 수 있다. 제약 — y좌표를 0 이 아닌 값으로 바꾸면 축 대칭이 두 성분을 모두 뒤집어 평면 환원이 깨지므로 그때는 골조가 달라진다(★3)."
    creative: "(1) y좌표를 0 이 아닌 값으로 주어 진짜 공간 문제로 만들기(★3) (2) 최솟값을 줄 때의 P 의 좌표를 묻기(내분 ★3) (3) 축을 y축·z축으로 바꾸기(★2 유지)."
```

### 연습문제 STEP 1

```yaml
- id: GN-GEO-123-235
  page: 123
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    점 A 를 yz평면에 대칭이동한 점이 B, B 를 z축에 대칭이동한 점이 C 이고 C(3, -4, 6)일 때 A 의 좌표.
  category: "대칭 두 번을 역순으로 되돌리기 → A"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "결과 C 에서 대칭 연산을 역순으로 되돌려 원래 점 A 를 역추적"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "대칭이동을 거꾸로 따라가 원래 점 찾기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    대칭은 각각 자기 자신이 역연산이므로 C 에 z축 대칭(x·y 반전), 이어 yz평면 대칭(x 반전)을 적용하면 A 가 나온다.
    계산은 부호 반전뿐이지만 순서를 거꾸로 밟는 역방향 사고가 골조다. STEP 1 출발 ★2 · 통찰 1(BW d1) → ★2 유지.
  tier: star_2
  mechanism_primary: "C → z축 대칭 역적용 → B → yz평면 대칭 역적용 → A"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$(3,\,4,\,6)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/123-235.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "C 의 좌표를 바꿀 수 있다. 제약 — 세 성분의 절댓값이 서로 달라야 어느 성분이 반전됐는지 확인 가능하고, 0 이 섞이면 반전 여부를 구분할 수 없어 문제가 흐려진다."
    creative: "(1) 대칭 대상을 평면·축·원점 세 번으로 늘리기(★3) (2) A 를 주고 C 를 구하는 순방향으로 바꾸기(★1) (3) 「A 와 C 가 일치하게 되는 대칭 조합」을 묻기(I-SYM ★3)."
```

```yaml
- id: GN-GEO-123-236
  page: 123
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    한 모서리가 3, 2 인 두 정육면체를 꼭짓점 F 와 두 모서리가 겹치도록 놓았을 때 두 점 A, K 사이의 거리(그림).
  category: "그림의 배치에 좌표축 잡기 → A, K 좌표 → 거리 공식"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "그림의 입체 배치에 좌표축을 직접 세워 도형 문제를 좌표 계산으로 전환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "입체도형에 좌표를 잡아 두 꼭짓점 사이의 거리"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    E 를 원점, EF 방향을 한 축으로 잡으면 큰 정육면체의 A 와 작은 정육면체의 K 좌표가 바로 읽힌다.
    좌표가 잡히면 거리 공식 한 줄이므로 부담은 좌표 설정에 몰려 있다. STEP 1 출발 ★2 · 통찰 1(RT d2) → ★2 유지.
  tier: star_2
  mechanism_primary: "E 를 원점으로 좌표 설정 → A, K 좌표 읽기 → 거리 공식"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\sqrt{30}$'
  answer_source: "답지"
  figure: "crop:fig-123-236.png"
  latex: latex-bank/gn-geo/items/123-236.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 정육면체의 모서리 길이(3, 2)를 바꿀 수 있다. 제약 — 그림의 꼭짓점 라벨과 겹치는 모서리 배치는 고정이므로 길이만 바꾸고, 제곱합이 간단한 무리수가 되도록 정수로 유지할 것."
    creative: "(1) 다른 꼭짓점 쌍(예 D 와 M)의 거리를 묻기(★2) (2) 두 정육면체를 직육면체로 바꾸기(★3) (3) 선분 AK 와 밑면이 이루는 각·정사영 길이를 묻기(정사영 결합 ★3)."
```

```yaml
- id: GN-GEO-123-237
  page: 123
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    P(t, 1-t, 1+t), Q(2, -2+t, 6-t)일 때 선분 PQ 의 길이의 최솟값.
  category: "성분 차를 t 로 정리 → PQ² 이차함수 → 꼭짓점"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "매개변수로 나타낸 두 점 사이의 거리의 최솟값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    성분 차를 t 로 정리하면 PQ² 이 t 에 대한 이차식이 되고 완전제곱으로 최솟값을 읽는다.
    근호 안 이차식의 최솟값이 곧 거리의 최솟값이라는 것은 표준 절차로 보아 통찰로 세지 않았다. STEP 1 출발 ★2 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "성분 차 정리 → PQ² = 9t²-36t+38 → 꼭짓점 → 근호"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\sqrt{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/123-237.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 점의 성분에 들어가는 t 의 계수와 상수를 바꿀 수 있다. 제약 — t² 계수가 0 이 되면 최솟값이 사라지고, 최솟값이 완전제곱수가 되도록 상수항을 맞춰야 답이 깔끔하다."
    creative: "(1) 최솟값을 줄 때의 t 와 두 점의 좌표까지 묻기(★2) (2) 두 점이 각각 다른 매개변수 s, t 로 움직이게 하기(두 직선 사이 최단거리 ★4) (3) PQ 의 최솟값이 주어진 값이 되는 상수를 찾게 하기(I-BW ★3)."
```

```yaml
- id: GN-GEO-123-238
  page: 123
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    A(1, 4, 3), B(3, 1, 9)에 대하여 직선 AB 와 zx평면이 이루는 각 θ 의 sin θ.
  category: "AB 길이 → zx평면에 수직인 성분 → sin θ = 수직 성분/AB"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직선과 좌표평면이 이루는 각의 삼각비"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    AB 의 성분 차 (2, -3, 6)에서 길이 7 을 얻고, zx평면과 이루는 각의 sin 은 평면에 수직인 y성분과 AB 의 비다.
    정사영(cos)으로 먼저 간 뒤 sin 으로 바꿔도 같은 값. 통찰이랄 것 없는 공식 적용이나 어느 성분이 수직인지 고르는 판단이 있어 ★2 유지.
  tier: star_2
  mechanism_primary: "성분 차 (2,-3,6) → AB=7 → sin θ = |y성분|/AB"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{3}{7}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/123-238.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 점의 좌표와 기준 평면을 바꿀 수 있다. 제약 — AB 의 길이가 정수(피타고라스 세 수 3·4·5, 2·3·6·7 조합)가 되게 성분 차를 잡으면 삼각비가 유리수로 떨어진다."
    creative: "(1) cos·tan 으로 바꾸기(정사영 필요 ★2) (2) 각의 크기가 특수각이 되게 좌표에 미지수를 넣기(★3) (3) 세 좌표평면과 이루는 각의 sin 제곱의 합을 묻기(I-SYM ★3)."
```

```yaml
- id: GN-GEO-123-239
  page: 123
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    A(2, 3, 1), B(4, 1, a)와 yz평면 위의 점 P 에 대하여 AP + BP 의 최솟값이 2√14 일 때 양수 a.
  category: "같은 쪽 확인 → 대칭점 A' → A'B = 2√14 → a 이차방정식 → 양수 해"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "최솟값 조건을 대칭점 A' 와 B 사이의 직선 거리로 펴서 a 에 대한 방정식으로 전환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "선분 길이의 합의 최솟값 조건으로 미지수 정하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    x좌표가 2, 4 로 같은 쪽이므로 A 를 yz평면에 대칭시킨 A'(-2, 3, 1)과 B 를 잇는 길이가 최솟값이고 이것이 2√14.
    제곱하면 (a-1)²=16 이 되고 양수 조건으로 해 하나를 고른다. 최솟값 유형을 역방향으로 쓰는 셈.
    STEP 1 출발 ★2 이나 대칭 골조 + 역추적 + 부호 선택으로 +1 → ★3.
    [분류 이슈] 벤더 구역은 STEP 1(★2)인데 판정은 ★3 — 같은 골조의 순방향 문항(122-233)보다 한 단 위.
  tier: star_3
  mechanism_primary: "A'(-2,3,1) → A'B² = 56 → (a-1)²=16 → 양수 a"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/123-239.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "최솟값(2√14)과 두 점의 좌표를 바꿀 수 있다. 제약 — 주어진 최솟값의 제곱이 대칭 후 고정 성분의 제곱합보다 커야 실근이 생기고, 차가 완전제곱수여야 a 가 정수로 떨어진다. 양수 조건이 해 하나만 남기도록 설계할 것."
    creative: "(1) 「모든 a 의 합」으로 바꿔 두 해를 다 쓰게 하기(★3) (2) 최솟값 대신 최솟값을 줄 때의 P 좌표를 주기(★3) (3) 두 점이 반대 쪽이 되도록 좌표를 바꿔 대칭이 필요 없는 갈래를 섞기(I-MI 추가 ★4)."
```

### 연습문제 STEP 2

```yaml
- id: GN-GEO-123-240
  page: 123
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    각 모서리가 좌표축에 평행한 직육면체에서 D(3, 7, 6), F(5, 1, 4)일 때 선분 AG 의 길이(그림).
  category: "좌표 차 = 세 모서리 길이 → 공간대각선 길이"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "D, F 가 마주보는 꼭짓점임을 읽고 직육면체의 네 공간대각선 길이가 같다는 대칭성으로 AG 를 DF 로 바꿈"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "좌표축에 평행한 직육면체의 대각선 길이"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    모서리가 좌표축에 평행하므로 마주보는 두 꼭짓점의 좌표 차 (2, 6, 2)가 곧 세 모서리 길이다.
    AG 도 공간대각선이라 DF 와 길이가 같아 그대로 √(4+36+4). 각 꼭짓점 좌표를 모두 복원하는 갈래도 가능하지만 훨씬 길다.
    STEP 2 출발 ★3 · 통찰 1(SYM d2) → ★3 유지.
  tier: star_3
  mechanism_primary: "좌표 차 (2,6,2) = 세 모서리 → 공간대각선 → AG = DF"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$2\sqrt{11}$'
  answer_source: "답지"
  figure: "crop:fig-123-240.png"
  latex: latex-bank/gn-geo/items/123-240.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "D, F 의 좌표를 바꿀 수 있다. 제약 — 두 점은 반드시 마주보는 꼭짓점이어야 좌표 차가 세 모서리가 된다(그림의 라벨 배치는 고정). 세 차의 제곱합이 간단한 무리수가 되게 정수로 잡을 것."
    creative: "(1) 주어지는 두 점을 마주보지 않는 꼭짓점으로 바꾸기(좌표 복원이 필요해 ★4) (2) 직육면체의 겉넓이·부피를 묻기(★2) (3) 대각선 AG 와 밑면이 이루는 각을 묻기(정사영 결합 ★3)."
```

```yaml
- id: GN-GEO-124-241
  page: 124
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    P(2, 3, 1)에서 xy평면 위의 직선 y = x 에 내린 수선의 발을 Q 라 할 때 선분 PQ 의 길이.
  category: "P 의 평면 정사영 H → H 에서 직선까지 거리 → 삼수선으로 PQ"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "공간의 수선 길이를 평면 정사영 H 와 삼수선의 정리로 「평면 위 점과 직선 사이의 거리」 문제로 환원"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "공간의 점에서 좌표평면 위 직선에 내린 수선의 길이(삼수선)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    P 의 xy평면 정사영 H(2, 3, 0)에서 직선 y=x 까지의 거리를 구하고 PH 와 직각삼각형으로 합치면 PQ 가 나온다.
    Q 를 (t, t, 0) 으로 두고 PQ² 을 이차함수로 최소화하는 갈래도 같은 답을 주지만 계산이 길다.
    STEP 2 출발 ★3 · 통찰 1(RT d2) → ★3 유지.
  tier: star_3
  mechanism_primary: "H(2,3,0) → 점과 직선 사이 거리 → PQ² = PH² + HQ²"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{\sqrt{6}}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/124-241.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "P 의 좌표와 직선의 방정식(기울기·절편)을 바꿀 수 있다. 제약 — 점과 직선 사이의 거리 공식에서 분모가 √(a²+b²) 이므로 계수를 정수로 잡아야 유리화가 깔끔하고, 정사영 높이(z좌표)는 0 이 아니어야 공간 문제가 유지된다."
    creative: "(1) 직선을 yz평면 위의 직선으로 바꾸기(★3 유지) (2) 수선의 발 Q 의 좌표까지 묻기(★3) (3) 직선 위를 움직이는 점 Q 에 대한 PQ 의 최솟값 형태로 바꾸기(같은 답·표현만 전환 ★3)."
```

```yaml
- id: GN-GEO-124-242
  page: 124
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    xy평면 위의 P 와 yz평면 위의 Q 가 OP 는 x축 양의 방향과 30°, OQ 는 y축 양의 방향과 60° 를 이루고 OP = OQ = 6 일 때 두 점 사이의 거리(그림).
  category: "각 평면에서 삼각비로 좌표 결정 → 거리 공식"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "각과 길이로 주어진 위치 정보를 각 좌표평면 안의 삼각비로 좌표 성분으로 전환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "좌표평면 위의 각 조건으로 점의 좌표를 정하고 거리 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    P 는 xy평면 위이므로 z=0 이고 (6cos30°, 6sin30°, 0), Q 는 yz평면 위이므로 x=0 이고 (0, 6cos60°, 6sin60°).
    어느 축에서 각을 재는지에 따라 어느 성분에 cos 이 붙는지가 갈려서 그림 해석이 실질 관문이다.
    STEP 2 출발 ★3 · 통찰 1(RT d2) → ★3 유지.
  tier: star_3
  mechanism_primary: "P(6cos30°, 6sin30°, 0) · Q(0, 6cos60°, 6sin60°) → 거리 공식"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$3\sqrt{6}$'
  answer_source: "답지"
  figure: "crop:fig-124-242.png"
  latex: latex-bank/gn-geo/items/124-242.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 각(30°·60°)과 OP, OQ 의 길이를 바꿀 수 있다. 제약 — 특수각이어야 좌표가 무리수 한 겹으로 끝나고, 그림의 P·Q 위치(각을 재는 축과 성분 부호)는 고정이므로 각만 바꿀 것. 두 길이를 다르게 주면 답이 지저분해질 수 있다."
    creative: "(1) OP ≠ OQ 로 두고 각을 특수각으로 유지하기(★3) (2) 삼각형 OPQ 의 넓이·∠POQ 를 묻기(★4) (3) Q 를 zx평면 위로 옮겨 어느 성분이 0 인지 다시 판단하게 하기(★3 유지)."
```

```yaml
- id: GN-GEO-124-243
  page: 124
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    A(2, 1, 3), B(2, 4, 3), C(4, 4, 1)을 꼭짓점으로 하는 삼각형 ABC 와 xy평면이 이루는 각의 크기.
  category: "삼각형 넓이 · 정사영 삼각형 넓이 → cos θ = S'/S"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "평면이 이루는 각을 정사영 넓이 공식 S' = S cos θ 를 통해 두 삼각형의 넓이 비로 전환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "정사영 넓이로 삼각형과 좌표평면이 이루는 각"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    원래 삼각형은 B 에서 직각이므로 넓이가 바로 나오고, z좌표를 0 으로 떨군 정사영 삼각형의 넓이도 직각삼각형이라 즉시 계산된다.
    두 넓이의 비가 cos θ 라는 정사영 넓이 공식이 골조의 전부다. STEP 2 출발 ★3 · 통찰 1(RT d2) → ★3 유지.
  tier: star_3
  mechanism_primary: "S(삼각형 ABC) · S'(정사영) → cos θ = S'/S → θ"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$45^\circ$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/124-243.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 점의 좌표를 바꿀 수 있다. 제약 — 두 변이 수직이 되게 잡아야 넓이가 한 줄로 끝나고, 넓이 비가 특수각의 cos(1/2, √2/2, √3/2)이 되도록 z 방향 차를 맞출 것."
    creative: "(1) 기준 평면을 yz·zx 로 바꾸기(★3 유지) (2) 삼각형의 넓이만 묻기(★2) (3) 이루는 각이 주어지고 한 꼭짓점의 좌표를 찾게 하기(I-BW ★4)."
```

```yaml
- id: GN-GEO-124-244
  page: 124
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    A(1, 4, 0), B(4, 8, a)에 대하여 직선 AB 가 xy평면과 45° 를 이룰 때(a > 0) 선분 AB 의 zx평면 위로의 정사영의 길이.
  category: "xy 정사영 = 5 → tan45° = a/5 로 a → zx 정사영 길이"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이루는 각 조건으로 미지수 정하고 정사영 길이 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    xy평면 위로의 정사영 길이가 5 이고 높이가 a 이므로 45° 조건은 a = 5 를 준다. 그 뒤 zx평면 정사영은 y성분을 버린 길이.
    두 정사영을 연달아 쓰는 2단 구성이지만 각 단계는 공식 적용이라 통찰로 세지 않았다. STEP 2 출발 ★3 유지.
  tier: star_3
  mechanism_primary: "xy 정사영 5 · 높이 a → tan45° → a=5 → zx 정사영 = √(3²+a²)"
  insight_type: 절차형
  target_cohort: 중상위권
  answer: '$\sqrt{34}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/124-244.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 점의 x·y좌표와 각(45°)을 바꿀 수 있다. 제약 — xy 정사영 길이가 정수(3·4·5)가 되게 잡아야 tan 조건에서 a 가 정수로 떨어진다. 각을 30°·60° 로 바꾸면 a 가 무리수가 되니 마지막 정사영이 깔끔한지 확인할 것."
    creative: "(1) 묻는 정사영을 yz평면으로 바꾸기(★3 유지) (2) a 의 부호 조건을 빼고 두 값을 모두 구하게 하기(★3) (3) 45° 대신 세 정사영 길이의 관계를 조건으로 주기(I-CON ★4)."
```

### 연습문제 실력 UP

```yaml
- id: GN-GEO-124-245
  page: 124
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    xy평면 위의 점 A(4, -3, 0)을 중심으로 하는 반지름 3 인 원 C 와 B(0, 0, 4) 사이의 거리의 최솟값.
  category: "B 의 평면 정사영 H → 평면에서 H 와 원의 최단거리 → 삼수선으로 합성"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "공간의 최단거리를 B 의 정사영 H 를 축으로 「높이 BH」와 「평면 위 거리 HP」의 직각삼각형으로 분해"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「원 위의 점까지의 최단거리」를 중심까지의 거리에서 반지름을 뺀 값으로 동치 변환"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "공간의 점과 좌표평면 위 원 사이의 거리의 최솟값"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    B 의 xy평면 정사영은 원점이고 중심 A 까지의 거리가 5 이므로 평면 안에서 원까지 가장 가까운 거리는 5-3=2.
    높이 4 와 합쳐 √(2²+4²) 이 최솟값이다. 정사영 높이가 모든 점에서 같다는 점(그래서 평면 거리만 최소화하면 된다)이 판단의 핵심이고, 중심이 원 밖인지도 확인해야 한다.
    실력 UP 출발 ★4 · 통찰 2(RT d2 + EQV d1) → ★4 유지. 저노출 유형 RT 포함으로 §2.13 ★4 권고 충족.
  tier: star_4
  mechanism_primary: "H = B 의 xy정사영 → HA - r = 2 → 최솟값 = √(2² + 4²)"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$2\sqrt{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/124-245.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "중심 A 의 좌표, 반지름 3, B 의 높이 4 를 바꿀 수 있다. 제약 — 정사영 H 와 중심 A 사이의 거리가 반지름보다 커야 (거리 - 반지름) 구조가 유지되고, 작으면 최솟값이 높이만 남는 다른 골조가 된다. 두 값이 3·4·5 처럼 맞물리면 답이 간단해진다."
    creative: "(1) 최댓값(거리 + 반지름)을 함께 묻기(★4 유지) (2) H 가 원 안에 들어오는 좌표로 바꿔 갈래를 나누기(I-MI 추가 ★5 후보) (3) 원을 구로 바꾸기(★4) (4) 최솟값이 주어진 값이 되는 반지름을 찾게 하기(I-BW ★4)."
```

```yaml
- id: GN-GEO-124-246
  page: 124
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    A(1, 3, 2), B(2, 1, -1)과 yz평면 위의 점 P, xy평면 위의 점 Q 에 대하여 AP + PQ + QB 의 최솟값.
  category: "각 평면마다 대칭 필요 여부 판정 → A 만 대칭 → 직선 거리"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 번 꺾이는 경로를 대칭점으로 펴서 하나의 선분 길이로 전환"
    - step: 2
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "대칭을 몇 번 해야 하는지 점검 — B 는 이미 xy평면 반대 쪽이라 대칭시키면 안 되고, 펴진 선분이 두 평면을 P → Q 순서로 실제로 지나는지까지 확인해야 함"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "두 좌표평면을 거치는 경로의 최솟값(연속 대칭)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    A 의 x좌표는 양수이고 P 는 yz평면(x=0) 위이므로 A 를 대칭시킨 A'(-1, 3, 2)을 쓴다.
    반면 B 의 z좌표는 -1 로 이미 xy평면 아래에 있어 B 는 그대로 두어야 하고, 두 점을 모두 대칭시키면 선분이 두 평면을 지나지 않는 도달 불가능한 값이 나온다 — 이 기각 점검이 이 문항의 본질이다.
    실력 UP 출발 ★4 · 통찰 2(RT d2 + VF d2) → ★4. 통찰이 3개에 못 미쳐 ★5 로는 올리지 않았다.
    [분류 이슈] VF 가 있어 ★5 요건(저노출 유형) 중 하나는 충족하나 통찰 수가 2 라 ★4/★5 경계.
  tier: star_4
  mechanism_primary: "A' = A 의 yz평면 대칭 → B 는 이미 반대 쪽이라 그대로 → 최솟값 = A'B"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$\sqrt{22}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/124-246.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 점의 좌표를 바꿀 수 있다. 제약 — 각 평면에 대해 두 점이 같은 쪽인지 반대 쪽인지가 대칭 횟수를 결정하므로 부호 설계가 곧 난이도 설계다. 펴진 선분이 두 평면을 P → Q 순서로 지나는지(매개변수 t 의 대소)까지 확인해야 답이 유효하다."
    creative: "(1) 두 점을 모두 같은 쪽에 두어 대칭을 두 번 하게 하기(★4) (2) 거치는 평면을 셋으로 늘리기(★5 후보) (3) 최솟값을 줄 때의 P, Q 좌표까지 묻기(교점 계산 추가 ★5) (4) 평면 대신 좌표축을 거치게 하기(★4)."
```

## 표본 판정 요약 (27문)

- ★ 분포: ★1 1 · ★2 15 · ★3 9 · ★4 2 · ★5 0
- 통찰형 17 · 절차형 10 · premium 0
- 통찰 유형 분포: I-RT 13 · I-EQV 3 · I-BW 1 · I-MI 1 · I-SYM 1 · I-VF 1 (총 20라벨 / 17문)
- type_hint 상위: 「정사영·직선과 평면이 이루는 각」 7(121-e5·230·231·232 · 123-238 · 124-243·244) · 「선분 길이의 합의 최솟값(대칭점)」 5(122-e6·233·234 · 123-239 · 124-246) · 「대칭점·대칭이동으로 만든 도형」 3(119-e3·226 · 123-235) · 「두 점에서 같은 거리에 있는 점」 3(120-e4·227·228) · 「거리 조건으로 미지수 정하기」 2(119-224·225)
- 구역별 ★ 중앙값: 필수·발전 예제 ★2 · STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4 (벤더 신호와 대체로 일치)
- 그림: 3문(`crop:fig-123-236.png` · `crop:fig-123-240.png` · `crop:fig-124-242.png`)
- 답 출처: 본문 풀이 4(필수 예제) · 답지 23. 골조를 잡는 동안 전사 답과 모순되는 조건은 없었다.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-GEO-120-229 | 벤더 태그는 확인체크(예제 짝문항 ★2)이나 모양 조건의 식 전환 + 연립 이차 + 다중해로 실제 부담은 ★3 | ★2 / ★3 |
| GN-GEO-121-232 | 확인체크인데 미지수가 근호 안에 들어간 정사영 방정식 + 두 해 — STEP 2 급 | ★2 / ★3 |
| GN-GEO-123-239 | STEP 1 구역이나 대칭점 골조를 역방향으로 쓰고 양수 조건까지 붙어 순방향 짝문항(122-233 ★2)보다 한 단 위 | ★2 / ★3 |
| GN-GEO-124-246 | 저노출 유형 I-VF 를 포함해 ★5 의 유형 요건 하나는 충족하나 통찰 수가 2 라 ★4 로 둠 | ★4 / ★5 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: ① 「선분 길이의 합의 최솟값(대칭점)」 — 같은 쪽/반대 쪽 판정이 붙는 순간 통찰 구조가 달라지므로 *순방향(★2)* · *역방향 미지수(★3)* · *평면 2개 연속 대칭(★4)* 세 층으로 나눌 것. ② 「정사영」 계열 — *길이만 묻기(★1~2)* 와 *이루는 각의 삼각비(★2)* 와 *각 조건으로 미지수 역산(★3)* 은 base ★ 가 다르다. ③ 「정사영 넓이로 이면각」(124-243)은 길이 정사영과 다른 정리를 쓰므로 별도 유형.
- **통합해도 될 유형**: 「두 점에서 같은 거리에 있는 축·평면 위의 점」(120-e4·227·228)은 미지수 개수만 다른 한 유형. 「거리·길이 비 조건으로 미지수 정하기」(119-224·225)도 한 유형으로 묶고 방정식 차수로 층을 나누면 충분하다.
- **이 단원의 지배 통찰**: I-RT(좌표 ↔ 공간도형) 13건으로 압도적이다. 카탈로그에서 RT 를 기본값으로 두면 변별이 안 되므로, *대칭점으로 펴기* · *정사영 직각삼각형* · *좌표축 직접 설정* · *삼수선* 을 RT 하위 태그로 구분해 base ★ 를 달리 주는 편이 낫다.
