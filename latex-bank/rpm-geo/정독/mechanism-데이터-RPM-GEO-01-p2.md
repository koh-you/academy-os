---
name: mechanism-데이터-RPM-GEO-01-p2
description: RPM 기하 01 이차곡선(2/4 · 유형 01~07 · 포물선의 방정식·평행이동·정의의 활용·최단 거리·타원의 방정식) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 기하 (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-geo
  section: 01 이차곡선
  unit_code: GEO-01
  part: "2/4"
  extract_range: "10~14쪽 · 0037~0070"
  total_problems: 34
  unit_total: 150
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 이 파일의 조정 규칙 — 유형 구역 출발점은 대표문제·난이도 없음 ★2, 중하 ★1~2, 중 ★2, 상중 ★3이고, 통찰 0·M_total 4(전 축 최소)이면 −1, M_total 5 이상이면 출발점 유지, 통찰 2개 이상이면서 M_total 6 이상이거나 depth 3 통찰이 있으면 +1. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-geo/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-geo/items/<id>.tex
  image_source: latex-bank/rpm-geo/figures/ (crops.json)
---

# RPM 기하 · 01 이차곡선 (2/4) 정독 데이터 (v1.0)

이 파일은 RPM 기하 01 이차곡선의 두 번째 조각(10~14쪽 · 0037~0070 · 34문)을 다룬다. 구역은 「유형 01 포물선의 방정식」부터 「유형 07 타원의 방정식」까지 일곱 유형이며 모두 유형별 기본 문제 구역이다. 벤더 난이도 신호는 구역(유형 NN)·난이도 표시(중하·중·상중 — 이 범위엔 하·상 없음)·태그(대표문제 7 · 서술형 2)로 나타나고, 유형 03~06 은 포물선의 정의(초점거리 = 준선까지의 거리)를 서로 다른 각도(점 하나 · 여러 점의 합 · 초점현 · 최단 거리)에서 쓰는 문항이다. 그림 문항 10건(0053 · 0056 · 0057 · 0058 · 0059 · 0061 · 0063 · 0064 · 0065 · 0070)은 크롭 이미지를 보고 판정했다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 사슬) · `insights[]`(유형 코드·depth·근거) · `variation_notes`(numeric: 바꿔도 되는 수와 제약 / creative: 골조 유지 변형과 ★ 변동 지점)를 채웠다. 통찰 판정 기준: 점 하나의 초점거리를 준선 거리로 바꿔 좌표를 얻는 단계는 이 유형의 표준 절차로 보고, 여러 점의 초점거리 합을 각 점을 구하지 않고 x좌표 합으로 축약하는 단계(I-EQV), 거리 합의 최솟값을 준선 거리로 옮기거나 길이 비를 좌표 비로 옮기는 단계(I-RT), 이름 없는 점이 초점임을 알아채야 하는 경우(depth 2)만 통찰로 세었다. 표기 약속: `depth_score` 는 insights 의 effective_depth 합, `insight_type` 은 insights 가 비어 있으면 절차형·아니면 통찰형, `target_cohort` 는 스키마 §3.3 audience 알고리즘의 fit 가운데 ★ 주력대가 맞는 층(없으면 더 빡빡한 캡의 층). 답은 전사본 answer 를 그대로 옮겼고 34문 모두 다시 풀어 일치를 확인했다.

## 문항 데이터

### 유형 01 포물선의 방정식

```yaml
- id: RPM-GEO-0037
  page: 10
  vendor_label: "유형 01 포물선의 방정식"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    원 (x-4)^2+y^2=1 의 중심을 초점, 원점을 꼭짓점으로 하는 포물선이 점 (a, 8) 을 지날 때 a 의 값.
  category: "원의 중심 = 초점 → y²=4px 결정 → 점 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "포물선의 방정식 y²=4px — 초점·꼭짓점으로 결정"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    원의 중심 (4,0) 이 초점, 꼭짓점 원점이므로 p=4, y²=16x. (a,8) 대입 → 64=16a → a=4. 초점 읽기·식 세우기·대입 세 단계, 통찰 없음, M_total 4(전 축 최소) → 대표문제 출발점 ★2 에서 −1 → ★1.
  tier: star_1
  mechanism_primary: "원의 중심 (4,0)=초점 · 꼭짓점 원점 → y²=16x → (a,8) 대입 → a=4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0037.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "원의 중심 (p,0) 의 p(2·3·5·−3 등)와 지나는 점의 y좌표를 바꿀 수 있음. 제약: y²=4p·a 에서 a 가 정수(또는 간단한 유리수)가 되도록 y² 이 4p 의 배수, p<0 이면 왼쪽으로 열리는 포물선이라 a<0 이 됨을 답에서 확인."
    creative: "(1) 원 대신 준선 x=−p 를 주고 초점을 구하게(★1 유지) (2) 초점을 원 위의 점 중 하나로 두어 조건을 한 겹 더(★2) (3) 꼭짓점을 원점이 아닌 점으로 두어 평행이동 결합(★2 · 유형 02 골조) (4) 원과 포물선의 교점 개수 조건으로 바꾸면 판별식 결합 ★3."
```

```yaml
- id: RPM-GEO-0038
  page: 10
  vendor_label: "유형 01 포물선의 방정식"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    포물선 y^2=14x 의 초점과 준선 사이의 거리. 5지선다.
  category: "4p 읽기 → 초점·준선 → 거리 2p"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "포물선 y²=4px 의 초점·준선 읽기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    4p=14 → p=7/2, 초점 (7/2,0)·준선 x=−7/2 → 거리 2p=7. 정의 읽기 한 단계. 벤더 중하·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "y²=14x → p=7/2 → 초점 (7/2,0)·준선 x=−7/2 → 거리 2p=7"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0038.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "4p 의 값(6·10·−12 등)을 바꿀 수 있고 x²=4py 꼴로 바꿔도 됨. 제약: 거리는 2p 의 절댓값이라 부호에 관계없이 양수, 선택지에 p·2p·4p 를 섞어 혼동 유도(현 선택지 구조 유지)."
    creative: "(1) 꼭짓점과 초점 사이 거리 묻기(★1) (2) 초점과 준선 사이 거리가 k 인 포물선의 방정식을 역으로(★1~2) (3) 초점과 준선 사이 거리를 주고 포물선 위의 점 중 초점거리가 특정 값인 점의 좌표(★2 · 유형 04 골조)."
```

```yaml
- id: RPM-GEO-0039
  page: 10
  vendor_label: "유형 01 포물선의 방정식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    두 포물선 y^2=kx, x^2=-16y 의 초점 사이의 거리가 5 일 때 양수 k 의 값.
  category: "두 초점 좌표 → 거리 공식 → k"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 포물선의 초점 좌표 관계"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y²=kx 의 초점 (k/4,0), x²=−16y 의 초점 (0,−4). 거리 √((k/4)²+16)=5 → (k/4)²=9 → k/4=3(양수) → k=12. 초점 두 개 읽고 거리 공식 한 번, 부호 선택(T-부호) 하나. 통찰 없음·M_total 5 → 벤더 중 ★2 유지.
  tier: star_2
  mechanism_primary: "초점 (k/4,0)·(0,−4) → (k/4)²+16=25 → k/4=3 → k=12"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$12$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0039.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x²=−16y 의 4p(−8·−12·+20)와 거리(5·10·13)를 바꿀 수 있음. 제약: (k/4, p') 가 피타고라스 정수쌍(3-4-5 · 5-12-13 · 6-8-10)이 되도록 짝지어야 k 가 정수, 「양수 k」 조건을 빼면 ±두 개."
    creative: "(1) 두 초점을 잇는 선분의 중점 좌표 묻기(★2) (2) 두 초점과 원점이 이루는 삼각형 넓이 조건(★2) (3) 「양수」를 빼고 k 의 모든 값의 합(부호 두 경우 · ★2) (4) 두 포물선의 준선 교점을 묻기로 바꾸면 ★1~2."
```

```yaml
- id: RPM-GEO-0040
  page: 10
  vendor_label: "유형 01 포물선의 방정식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    초점 F(0,-2), 준선 y=2 인 포물선의 꼭짓점 A 와, F 를 지나는 x축 평행 직선이 포물선과 만나는 두 점 B, C 에 대해 삼각형 ABC 의 넓이. 5지선다.
  category: "초점·준선 → x²=−8y → y=−2 교점(통경) → 넓이"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "초점을 지나는 축 수직 현(통경)과 도형"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    꼭짓점은 초점·준선의 중점 A(0,0), p=−2 → x²=−8y. y=−2 대입 → x=±4 → B(−4,−2), C(4,−2). 밑변 8·높이 2 → 넓이 8. 식 세우기·교점·넓이 네 단계, 통찰 없음, M_total 5 → 벤더 중 ★2 유지.
  tier: star_2
  mechanism_primary: "초점 (0,−2)·준선 y=2 → 꼭짓점 원점 · x²=−8y → y=−2 → x=±4 → BC=8, 높이 2 → 넓이 8"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0040.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "p 의 값(−2 → −3·1·4)과 축 방향(x²=4py ↔ y²=4px)을 바꿀 수 있음. 제약: 통경 길이 4|p|, 넓이 = ½·4|p|·|p| = 2p² 이므로 선택지가 2p² 꼴 정수가 되게, 초점·준선을 원점 대칭이 아닌 위치로 두면 평행이동이 섞여 ★2 유지·M 상승."
    creative: "(1) 넓이 대신 삼각형 ABC 의 둘레(√ 포함 · ★2) (2) 넓이 k 를 주고 p 를 역으로(★2 · I-BW 없음, 대입) (3) 직선을 x축 평행이 아닌 초점 통과 일반 직선으로 바꾸면 초점현 골조(유형 05 · ★3) (4) 세 점 A, B, C 를 지나는 원의 반지름(외접원 · ★3)."
```

### 유형 02 포물선의 평행이동

```yaml
- id: RPM-GEO-0041
  page: 10
  vendor_label: "유형 02 포물선의 평행이동"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    포물선 (y-1)^2=-12(x+2) 의 초점 (a, b), 준선 x=c 일 때 a+b-c 의 값. 5지선다.
  category: "표준형 y²=−12x 의 초점·준선 → 평행이동 → 합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행이동한 포물선의 초점·준선"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y²=−12x(p=−3)의 초점 (−3,0)·준선 x=3 을 x축 −2, y축 1 만큼 옮기면 초점 (−5,1)·준선 x=1. a+b−c=−5+1−1=−5. 4p=−12 의 부호(T-부호)만 조심하면 되는 표준 절차. 통찰 없음·M_total 5 → 대표문제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "y²=−12x → 초점 (−3,0)·준선 x=3 → (−2,+1) 평행이동 → (−5,1)·x=1 → a+b−c=−5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0041.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "4p(−12 → 8·−4·16)와 이동량 (−2,1) 을 바꿀 수 있고 x²=4py 꼴로 바꿔도 됨. 제약: p 가 정수이도록 4p 는 4 의 배수, 선택지는 a+b−c 가 부호 실수(초점 x 를 +3 으로) 했을 때의 값을 오답으로 포함."
    creative: "(1) 초점·준선 대신 꼭짓점과 초점 사이 거리(★1) (2) 초점 좌표를 주고 이동 전 포물선의 4p 를 역으로(★2) (3) 두 포물선의 초점이 같도록 하는 이동량(★2) (4) 준선이 특정 직선과 일치·평행 조건으로 확장(★2~3)."
```

```yaml
- id: RPM-GEO-0042
  page: 10
  vendor_label: "유형 02 포물선의 평행이동"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x^2=4y 를 x축 m, y축 n 만큼 평행이동한 포물선의 초점이 (3, -2) 일 때 mn 의 값.
  category: "초점 (0,1) → (m, 1+n)=(3,−2) → mn"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행이동한 포물선의 초점·준선"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x²=4y 의 초점 (0,1) 이 (m, 1+n) 으로 옮겨져 (3,−2) → m=3, n=−3 → mn=−9. 초점 하나 옮기는 한 단계. 벤더 중하·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "x²=4y 초점 (0,1) → 이동 후 (m,1+n)=(3,−2) → m=3, n=−3 → mn=−9"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-9$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0042.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "4p(4 → 8·−4)와 이동 후 초점 좌표를 바꿀 수 있음. 제약: 이동 전 초점 (0,p) 를 빼서 m, n 이 정수가 되게, y²=4px 꼴이면 초점 (p,0) 을 옮김."
    creative: "(1) 초점 대신 준선 y=k 를 주고 n 만 결정(m 미정 · ★1) (2) 초점과 준선을 함께 주어 4p 와 이동량을 동시에 결정(★2) (3) 이동한 포물선이 특정 점을 지나는 조건을 추가해 m, n 연립(★2)."
```

```yaml
- id: RPM-GEO-0043
  page: 10
  vendor_label: "유형 02 포물선의 평행이동"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    포물선 y^2-8x+2y+17=0 의 꼭짓점 (2,-1)·초점 (-4,-1)·준선 x=0 진위를 ㄱㄴㄷ 보기로 고르기. 5지선다.
  category: "완전제곱 → (y+1)²=8(x−2) → 꼭짓점·초점·준선 판별"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "포물선의 일반형 → 표준형(완전제곱)과 요소 판별"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (y+1)²=8(x−2): 꼭짓점 (2,−1) ㄱ 참, p=2 → 초점 (4,−1) 이라 ㄴ 거짓(부호 함정), 준선 x=2−2=0 ㄷ 참 → ㄱ, ㄷ. 완전제곱 한 번과 요소 세 개 읽기. 통찰 없음·M_total 5 → 벤더 중 ★2 유지.
  tier: star_2
  mechanism_primary: "y²+2y+1=8x−16 → (y+1)²=8(x−2) → 꼭짓점 (2,−1)·초점 (4,−1)·준선 x=0 → ㄱ, ㄷ"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0043.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일반형의 계수(8·2·17)를 바꿀 수 있음. 제약: 완전제곱 뒤 (y−k)²=4p(x−h) 에서 4p 가 4 의 배수·h, k 정수, 보기 ㄴ 은 초점 x좌표 부호 반전 오답을 유지."
    creative: "(1) 보기를 「축의 방정식 y=−1」「x축과의 교점」으로 바꾸기(★2) (2) 일반형에 매개변수 a 를 넣고 초점이 특정 점이 되는 a(★2 · 0046 골조) (3) x²+…=0 꼴(축이 y축 평행)로 바꿔 x²=4py 형 판별(★2)."
```

```yaml
- id: RPM-GEO-0044
  page: 11
  vendor_label: "유형 02 포물선의 평행이동"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    포물선 y=x^2+2px+q 의 초점이 (1/2, 4) 일 때 상수 p, q 에 대하여 pq 의 값.
  category: "완전제곱 → (x+p)²=y−(q−p²) → 4p'=1 → 초점 대응"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차함수 꼴 포물선의 초점"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (x+p)²=y−(q−p²) 는 x²=4·(1/4)·y 를 옮긴 꼴이라 초점은 꼭짓점 (−p, q−p²) 의 1/4 위: (−p, q−p²+1/4)=(1/2, 4) → p=−1/2, q=4 → pq=−2. 문제의 p 와 포물선 상수 p 가 겹쳐(T-표기) 헷갈리기 쉽고 매개변수 둘(Mₐ 2)·완전제곱 처리(Mₖ 2)로 M_total 7 이지만 통찰은 없음 → 벤더 중 ★2 유지.
  tier: star_2
  mechanism_primary: "y=(x+p)²+q−p² → (x+p)²=4·¼·(y−q+p²) → 초점 (−p, q−p²+¼)=(½,4) → p=−½, q=4 → pq=−2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0044.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x² 의 계수(1 → 2·1/2·−1)와 초점 좌표를 바꿀 수 있음. 제약: y=ax²+… 이면 4p'=1/a 라 초점 높이 = 꼭짓점 + 1/(4a), 초점 좌표를 p, q 가 유리수가 되게 역산해서 정함."
    creative: "(1) 초점 대신 준선 y=k 를 주기(★2) (2) 「y=ax²+bx+c 의 초점이 원점」처럼 조건 셋으로 a, b, c 결정(★2~3) (3) 이차함수의 꼭짓점·초점·준선 사이 거리 관계를 묻기(1/(4a) 인지 · ★2) (4) 초점이 직선 y=x 위에 있는 조건으로 p, q 관계식(★3 · Mₐ 상승)."
```

```yaml
- id: RPM-GEO-0045
  page: 11
  vendor_label: "유형 02 포물선의 평행이동"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    포물선 (y-k)^2=2k(x+k-2) 의 초점이 y축 위에 있을 때 준선의 방정식. 서술형.
  category: "y²=2kx 의 초점 (k/2,0) 평행이동 → x좌표 0 → k → 준선"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행이동한 포물선의 초점·준선"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y²=2kx(4p=2k, p=k/2)를 x축 2−k, y축 k 만큼 옮긴 것이므로 초점 (k/2+2−k, k)=(2−k/2, k). y축 위 → 2−k/2=0 → k=4. 준선은 x=−k/2+2−k=−k → x=−4. 「y축 위」를 x좌표 0 으로 읽는 것은 직접 번역이라 통찰로 세지 않음. 매개변수 k 하나(Mₐ 2)·M_total 6 → 벤더 중 ★2 유지(서술형 태그 +0).
  tier: star_2
  mechanism_primary: "y²=2kx 초점 (k/2,0) → 이동 (2−k, k) → 초점 (2−k/2, k) → x좌표 0 → k=4 → 준선 x=−k=−4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$x=-4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0045.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "4p 의 계수(2k → 4k·k)와 이동량의 식(k−2 → k+1·2k)을 바꿀 수 있음. 제약: k≠0(퇴화 방지), 초점 x좌표 식이 k 의 일차식이 되어 유일해가 나오게, 준선이 정수 위치에 오도록 검산."
    creative: "(1) 「초점이 x축 위」로 바꿔 k 를 y좌표에서 결정(★2) (2) 초점이 직선 y=x 위 → k 이차식·두 경우(★3 · I-MI 후보) (3) 준선이 y축이 되는 k(★2) (4) 초점이 원 x²+y²=r² 위에 있도록 하는 k 의 값의 합(★3)."
```

```yaml
- id: RPM-GEO-0046
  page: 11
  vendor_label: "유형 02 포물선의 평행이동"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    두 포물선 y^2+4x-4y+4=0, x^2-2x-4y+a=0 의 초점이 원점에 대하여 대칭일 때 상수 a 의 값.
  category: "두 일반형 완전제곱 → 두 초점 → 원점 대칭 조건 → a"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "포물선의 일반형 → 표준형(완전제곱)과 요소 판별"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    첫째: (y−2)²=−4x → p=−1 → 초점 (−1,2). 둘째: (x−1)²=4(y−(a−1)/4) → 초점 (1, (a−1)/4+1)=(1,(a+3)/4). 원점 대칭이면 (1,(a+3)/4)=(1,−2) → a=−11. 완전제곱 두 번·매개변수 a·부호 함정으로 M_total 7 이지만 원점 대칭 → 좌표 부호 반전은 직접 번역. 통찰 없음 → 벤더 중 ★2 유지.
  tier: star_2
  mechanism_primary: "(y−2)²=−4x → 초점 (−1,2) · (x−1)²=4(y−(a−1)/4) → 초점 (1,(a+3)/4) → 원점 대칭 (a+3)/4=−2 → a=−11"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-11$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0046.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫 포물선의 계수(4·−4·4)와 둘째의 x 계수(−2 → −4·6)·y 계수(−4 → −8)를 바꿀 수 있음. 제약: 첫 초점의 x좌표와 둘째 초점의 x좌표가 부호만 반대가 되도록 둘째의 완전제곱 중심을 맞춰야 하고, a 가 정수가 되게 y 계수 4p 를 고름."
    creative: "(1) 「x축에 대하여 대칭」「직선 y=x 에 대하여 대칭」으로 대칭 종류 바꾸기(★2) (2) 두 초점 사이 거리 조건(√ 포함 · ★2~3) (3) 두 포물선의 준선이 서로 수직으로 만나는 점 묻기(★2) (4) 초점 조건 대신 두 꼭짓점을 지나는 직선의 기울기(★2)."
```

```yaml
- id: RPM-GEO-0047
  page: 11
  vendor_label: "유형 02 포물선의 평행이동"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    세 점 (1,-3), (-3,-3), (-1,-2) 를 지나고 축이 y축에 평행한 포물선의 초점의 좌표.
  category: "y좌표 같은 두 점 → 축 x=−1 → 셋째 점이 꼭짓점 → (x+1)²=4p(y+2) → p"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "y좌표가 같은 두 점 (1,−3), (−3,−3) 의 대칭축 x=−1 위에 셋째 점 (−1,−2) 가 있으므로 그 점이 꼭짓점 — 미정계수 셋 연립을 우회"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "세 점을 지나는 포물선 — 대칭축·꼭짓점 인지"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 점의 y좌표가 같으니 축은 x=−1, 셋째 점 (−1,−2) 가 축 위라 꼭짓점. (x+1)²=4p(y+2) 에 (1,−3) 대입 → 4=−4p → p=−1 → 초점 (−1,−2−1)=(−1,−3). y=ax²+bx+c 연립으로도 풀리지만 대칭 인지가 단계를 크게 줄임(SYM d1). 벤더 상중 ★3, 통찰 1·M_total 5 → 유지. 미정계수 연립 경로만 아는 학생에겐 계산형 ★2~3.
  tier: star_3
  mechanism_primary: "(1,−3),(−3,−3) 대칭 → 축 x=−1 → 꼭짓점 (−1,−2) → (x+1)²=4p(y+2) → (1,−3) 대입 p=−1 → 초점 (−1,−3)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$(-1,\,-3)$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0047.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "대칭쌍의 x좌표(1, −3 → 2, −4)·공통 y좌표·꼭짓점 높이를 바꿀 수 있음. 제약: 대칭쌍의 중점 x 가 셋째 점의 x 와 같아야 하고(꼭짓점 구조 유지), 대입 뒤 4p 가 정수가 되게 높이 차를 (반폭)² 의 약수로."
    creative: "(1) 셋째 점을 축 위가 아닌 점으로 두면 꼭짓점을 모르니 대칭축만 쓰고 4p·k 연립 → SYM 유지 ★3 (2) 축이 x축 평행으로 바꾸면 x좌표 같은 쌍 찾기(★3 동일 골조) (3) 세 점을 「x축과의 두 교점·y절편」으로 주면 근과 계수 관계 결합 ★3 (4) 세 점 모두 대칭 없이 일반 위치로 두면 통찰 없이 연립만 → ★2~3(질 저하)."
```


### 유형 03 포물선의 정의를 이용한 포물선의 방정식

```yaml
- id: RPM-GEO-0048
  page: 11
  vendor_label: "유형 03 포물선의 정의를 이용한 포물선의 방정식"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    초점 F(2,1), 준선 x=6 인 포물선이 점 (a, 3) 을 지날 때 a 의 값.
  category: "초점·준선 중점 = 꼭짓점 → (y−1)²=−8(x−4) → 점 대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "초점·준선이 주어진 포물선의 방정식(정의)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    꼭짓점은 (4,1), p=2−4=−2 → (y−1)²=−8(x−4). (a,3) 대입 → 4=−8(a−4) → a=7/2. 정의로 바로 √((a−2)²+4)=|a−6| 을 풀어도 같은 한 줄. 부호(p<0) 하나 조심. 통찰 없음·M_total 5 → 대표문제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "초점 (2,1)·준선 x=6 → 꼭짓점 (4,1), p=−2 → (y−1)²=−8(x−4) → (a,3) 대입 → a=7/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{7}{2}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0048.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초점 좌표·준선 위치(x=6 → x=−2·y=k 꼴)·지나는 점의 y좌표를 바꿀 수 있음. 제약: 초점과 준선 사이 거리 2|p| 가 짝수면 꼭짓점이 정수, 지나는 점의 (y−k)² 이 4p 의 배수여야 a 가 간단."
    creative: "(1) 준선을 y=k 로 바꿔 x²=4py 꼴(★2) (2) 초점과 준선을 주고 포물선이 x축과 만나는 두 점 사이 거리(★2 · 0051 골조) (3) 지나는 점 대신 「원점을 지난다」로 두고 준선 위치를 역으로(★2) (4) 초점만 주고 준선이 축에 평행하다는 조건으로 두 경우(★2~3 · 0050 골조)."
```

```yaml
- id: RPM-GEO-0049
  page: 11
  vendor_label: "유형 03 포물선의 정의를 이용한 포물선의 방정식"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    초점 F(2,3), 준선 y=-1 인 포물선의 방정식. 5지선다.
  category: "초점·준선 → 꼭짓점 (2,1), p=2 → (x−2)²=8(y−1)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "초점·준선이 주어진 포물선의 방정식(정의)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    준선이 y=−1 이니 축은 y축 평행, 꼭짓점 (2,1), p=3−1=2 → (x−2)²=8(y−1). 선택지 형식 판별이 전부. 벤더 중하·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "초점 (2,3)·준선 y=−1 → 꼭짓점 (2,1)·p=2 → (x−2)²=8(y−1)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0049.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초점 (2,3)·준선 y=−1 을 다른 정수 조합으로. 제약: 초점과 준선 사이 거리가 짝수여야 꼭짓점 정수, 선택지에 축 방향 오류((y−k)² 꼴)·부호 오류(−8)·이동 방향 오류((x+2)²)를 오답으로 유지."
    creative: "(1) 초점·준선 대신 꼭짓점·초점(★1) (2) 방정식을 주고 초점·준선을 거꾸로(★1 · 유형 02) (3) 초점이 y축 위·준선 y=k 로 매개변수화(★2)."
```

```yaml
- id: RPM-GEO-0050
  page: 11
  vendor_label: "유형 03 포물선의 정의를 이용한 포물선의 방정식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    초점 F(1,-1), 준선이 y축에 평행한 포물선이 점 (4, 3) 을 지날 때, 이 포물선의 방정식을 모두 구하기.
  category: "준선 x=c 로 두기 → PF=|4−c|=5 → c=−1, 9 두 경우 → 두 방정식"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "준선이 초점의 왼쪽(c=−1)·오른쪽(c=9) 어느 쪽에도 올 수 있어 |4−c|=5 의 두 해가 각각 다른 포물선 — 두 경우 모두 답"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "초점과 지나는 점으로 준선 결정(두 경우)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    준선을 x=c 로 두면 정의에서 PF=√(9+16)=5=|4−c| → c=−1 또는 9. c=−1: 꼭짓점 (0,−1), p=1 → (y+1)²=4x. c=9: 꼭짓점 (5,−1), p=−4 → (y+1)²=−16(x−5). 「모두 구하시오」가 두 경우를 예고하지만 준선이 양쪽에 올 수 있음을 스스로 세워야 해 MI d1 로 기록. 벤더 중 ★2, 통찰 1·M_total 5 → 유지.
    [분류 이슈] 절댓값 두 해가 기하적 두 경우(준선 좌·우)와 대응 — 스키마의 「단순 절댓값 분기 제외」와 경계.
  tier: star_2
  mechanism_primary: "준선 x=c → PF=5=|4−c| → c=−1 (p=1, 꼭짓점 (0,−1)) 또는 c=9 (p=−4, 꼭짓점 (5,−1)) → 두 방정식"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$(y+1)^2=4x$, $(y+1)^2=-16(x-5)$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0050.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초점과 지나는 점의 거리가 정수(5 → 10·13)가 되는 좌표 조합(3-4-5 · 6-8-10 · 5-12-13)으로 바꿀 수 있음. 제약: 두 c 값과 초점 x좌표의 차가 짝수여야 꼭짓점이 정수, 준선을 x축 평행으로 바꾸면 y=c 두 경우."
    creative: "(1) 「방정식의 개수」만 묻기(★2) (2) 두 포물선의 꼭짓점 사이 거리 묻기(★2) (3) 지나는 점을 초점과 같은 세로선 위에 두어 c 가 하나로 퇴화하는 함정(★2 · I-VF 후보) (4) 초점·지나는 점·준선 방향을 매개변수로 주어 두 포물선의 p 의 합(★3)."
```

```yaml
- id: RPM-GEO-0051
  page: 11
  vendor_label: "유형 03 포물선의 정의를 이용한 포물선의 방정식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    초점 F(3,0), 준선 x=5 인 포물선이 y축과 만나는 두 점 A, B 사이의 거리. 5지선다.
  category: "y축 위 점 (0,y) 의 정의식 √(9+y²)=5 → y=±4 → AB=8"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "초점·준선이 주어진 포물선의 방정식(정의)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y축 위 점 (0,y) 는 초점거리 √(9+y²), 준선까지 5 → y²=16 → y=±4 → AB=8. 방정식 y²=−4(x−4) 를 세워 x=0 을 넣어도 같음. 통찰 없음·M_total 5 → 벤더 중 ★2 유지.
  tier: star_2
  mechanism_primary: "초점 (3,0)·준선 x=5 → (0,y): √(9+y²)=5 → y=±4 → AB=8"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0051.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초점 (3,0)·준선 x=5 를 (초점 x, 준선 위치) 가 3-4-5 꼴 직각삼각형을 만드는 조합으로 바꿀 수 있음. 제약: 준선 x=d 에 대해 d²−f² 가 완전제곱이어야 y 정수, 준선이 초점보다 왼쪽이면 y축과 안 만날 수 있으니 d>f>0 또는 대칭 배치."
    creative: "(1) y축 대신 직선 x=k 와의 두 교점 거리(★2) (2) 세 점 A, B, F 의 삼각형 넓이(★2 · 0040 골조) (3) 거리 AB 를 주고 준선 위치를 역으로(★2) (4) 원점을 지나는 원이 두 교점을 지나도록 하는 원의 방정식으로 확장(★3)."
```

### 유형 04 포물선의 정의의 활용; 포물선 위의 점이 주어질 때

```yaml
- id: RPM-GEO-0052
  page: 12
  vendor_label: "유형 04 포물선의 정의의 활용; 포물선 위의 점이 주어질 때"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    포물선 y^2=4(x-1) 의 초점 F, PF=5 인 포물선 위의 점 P 에서 x축에 내린 수선의 발 H 에 대해 삼각형 PFH 의 넓이. 5지선다.
  category: "초점 (2,0)·준선 x=0 → PF=5 = x_P → y_P²=16 → 넓이"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "포물선 위의 점의 초점거리 = 준선 거리(정의)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y²=4x 를 x축 1 옮긴 것이라 초점 (2,0), 준선 x=0. PF=5 → P 의 준선 거리 x_P=5 → y_P²=16, |y_P|=4. H(5,0): FH=3, PH=4 → 넓이 6. 정의를 점 하나에 쓰는 유형 표준 절차. 통찰 없음·M_total 5 → 대표문제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "초점 (2,0)·준선 x=0 → PF=5=x_P → y_P=±4 → FH=3, PH=4 → 넓이 6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0052.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이동량(1 → 0·2)·4p(4 → 8)·PF 값(5 → 4·10)을 바꿀 수 있음. 제약: x_P = PF − p + h 가 정수·y_P² = 4p(x_P−h) 가 완전제곱이 되게 PF 를 고름(3-4-5 구조 유지), 준선이 y축이라는 깔끔함은 h=p 일 때만."
    creative: "(1) 삼각형 PFH 대신 삼각형 OPF 넓이(★2) (2) PF=k 인 점 P 가 두 개(±y)임을 써 두 점 사이 거리(★2) (3) PF 대신 「P 에서 준선까지 거리」를 주고 PF 를 묻기(정의 역방향 · ★1~2) (4) 초점거리와 x좌표를 매개변수 관계로 주어 자취 결합(★3)."
```

```yaml
- id: RPM-GEO-0053
  page: 12
  vendor_label: "유형 04 포물선의 정의의 활용; 포물선 위의 점이 주어질 때"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    그림: 초점 F·준선 l 인 포물선 위의 점 P 에서 준선에 내린 수선의 발 H. ∠FPH=40° 일 때 ∠PFH 의 크기.
  category: "PF=PH(정의) → 이등변삼각형 → 밑각 (180−40)/2"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "포물선 위의 점의 초점거리 = 준선 거리(정의)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    정의에서 PF=PH 이므로 삼각형 PFH 는 P 가 꼭지각인 이등변삼각형. ∠PFH=(180°−40°)/2=70°. 정의 인지 한 단계. 벤더 중하·통찰 없음·M_total 4 → ★1. 그림 fig-0053: 준선 l 왼쪽, H 에서 직각 표시, P 에서 40°.
  tier: star_1
  mechanism_primary: "PF=PH → △PFH 이등변 → ∠PFH=(180°−40°)/2=70°"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$70^\circ$'
  answer_source: "답지(쪽 렌더)"
  figure: crop:fig-0053.png
  latex: latex-bank/rpm-geo/items/0053.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "꼭지각 40° 를 다른 각(50°·64°)으로. 제약: 그림 라벨(F·H·P·l) 고정, (180−각)/2 가 정수가 되게 짝수 각."
    creative: "(1) ∠PFH 를 주고 ∠FPH 묻기(★1) (2) 축과 직선 PF 가 이루는 각과 결합해 ∠HPF 를 축 평행선의 엇각으로 구하기(★2) (3) PF 길이와 각을 주고 FH 길이(코사인·★2~3 · 단원 밖 도구) (4) 직선 PF 가 축과 이루는 각이 60° 인 점 P 의 초점거리(★2)."
```

```yaml
- id: RPM-GEO-0054
  page: 12
  vendor_label: "유형 04 포물선의 정의의 활용; 포물선 위의 점이 주어질 때"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    포물선 x^2=y 위의 점 P(a, b) 와 초점 사이의 거리가 3/4 일 때 4(a^2+b^2) 의 값. 서술형.
  category: "p=1/4 → PF=b+1/4=3/4 → b=1/2 → a²=b → 값"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "포물선 위의 점의 초점거리 = 준선 거리(정의)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x²=y 는 4p=1, p=1/4 → 초점 (0,1/4), 준선 y=−1/4. PF = 준선 거리 = b+1/4 = 3/4 → b=1/2, a²=b=1/2 → 4(a²+b²)=4(1/2+1/4)=3. 4p=1 을 놓치기 쉬운 분수 처리가 있을 뿐 표준 절차. 통찰 없음·M_total 5 → 벤더 중 ★2 유지(서술형 +0).
  tier: star_2
  mechanism_primary: "x²=y → p=¼ → PF=b+¼=¾ → b=½ → a²=½ → 4(a²+b²)=3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$3$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0054.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "4p(1 → 2·4·1/2)와 초점거리(3/4 → 5/4·2)를 바꿀 수 있음. 제약: b = PF − p 가 양수, 묻는 식의 계수(4)를 분모가 사라지게 맞춤."
    creative: "(1) a²+b² 대신 OP 의 길이(★2) (2) 초점거리가 최소인 점(꼭짓점)임을 묻기(★1) (3) 초점거리 = k·(꼭짓점까지 거리) 조건으로 P 결정(★3) (4) PF 를 주고 점 P 가 두 개일 때 두 점과 F 의 삼각형 넓이(★2)."
```

```yaml
- id: RPM-GEO-0055
  page: 12
  vendor_label: "유형 04 포물선의 정의의 활용; 포물선 위의 점이 주어질 때"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    포물선 y^2=8x 위의 세 점 A, B, C 로 만든 삼각형의 무게중심이 초점 F 와 일치할 때 AF+BF+CF 의 값.
  category: "각 초점거리 = x+2 → 합 = (x_A+x_B+x_C)+6 → 무게중심 x=2 → 12"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "세 점을 구하지 않고 초점거리 합을 x좌표 합 + 3p 로 바꾼 뒤, 무게중심 조건의 x 성분(합 = 6)만으로 결정"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "여러 점의 초점거리 합 → x좌표 합(정의)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    p=2, 준선 x=−2 이므로 AF+BF+CF=(x_A+2)+(x_B+2)+(x_C+2). 무게중심이 F(2,0) → x_A+x_B+x_C=6 → 합 12. 개별 점은 정해지지 않으며 x좌표 합만 필요하다는 축약(EQV d1)이 핵심. 벤더 중 ★2, 통찰 1·M_total 5 → 유지.
  tier: star_2
  mechanism_primary: "p=2 → 초점거리 = x+2 → 합 = Σx+6 → 무게중심 x = Σx/3 = 2 → 합 12"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$12$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0055.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "4p(8 → 4·12·16)를 바꾸면 답 = 3·(p+p) = 6p. 제약: 무게중심을 초점이 아닌 점 (h,k) 로 두면 합 = 3h+3p, 점 개수를 넷(사각형 대각선 교점 등)으로 늘리면 조건 형식 수정 필요."
    creative: "(1) 무게중심을 「(5,0)」처럼 초점이 아닌 점으로(★2 · 골조 같음) (2) AF+BF+CF 값을 주고 무게중심의 x좌표 역산(★2) (3) 세 점의 초점거리가 등차수열 조건과 결합(★3) (4) 「AF+BF+CF 의 최솟값」으로 바꾸면 무게중심 조건이 사라져 최솟값 구조(꼭짓점 근처)로 ★3."
```

```yaml
- id: RPM-GEO-0056
  page: 12
  vendor_label: "유형 04 포물선의 정의의 활용; 포물선 위의 점이 주어질 때"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    그림: 초점 F 인 포물선 y^2=4px 위의 점 A 에서 준선에 내린 수선의 발 B, 선분 BF 와 포물선의 교점 C. AB=BF, CF=2 일 때 양수 p 의 값.
  category: "AB=AF(정의)+AB=BF → 정삼각형 → 60° → CF=2 → BC=4 → BF=6 → 좌표식 → p"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "AB=BF 에 정의 AF=AB 를 합치면 △ABF 가 정삼각형 — 조건 하나를 60° 각 정보로 바꿈"
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "CF=2 를 C 의 준선 거리 2 로 옮기고 ∠CBH=60° 인 직각삼각형에서 BC=4 → BF=6 으로 길이 사슬 완성"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "정의로 정삼각형 인지 → 좌표 계산"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    AF=AB(정의)와 AB=BF 로 △ABF 정삼각형, ∠ABF=60°. C 는 BF 위의 포물선 점이라 준선 거리 = CF = 2, BC·cos60°=2 → BC=4, BF=6. 그러면 AB=6 → x_A=6−p, 그리고 BF²=(2p)²+y_A²=36 에 y_A²=4p(6−p) 대입 → 24p=36 → p=3/2. 통찰 2(EQV d2 + RT d1)·M_total 8 → 벤더 중 ★2 에서 +1 → ★3. 검산: p=3/2 일 때 C(1/2, √3), CF=2 일치.
    [분류 이슈] 벤더 「중」인데 통찰 2개·M_total 8 로 ★3 — 유형 04 안에서 가장 무거움.
  tier: star_3
  mechanism_primary: "AF=AB=BF → 정삼각형 60° → CF=2 = C 의 준선 거리 → BC=4, BF=6 → x_A=6−p, (2p)²+4p(6−p)=36 → p=3/2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{3}{2}$'
  answer_source: "답지"
  figure: crop:fig-0056.png
  latex: latex-bank/rpm-geo/items/0056.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "CF(2 → 1·3·4)를 바꾸면 BF=3·CF, 24p=(3CF)² 에서 p=3CF²/8. 제약: 그림 라벨(A·B·C·F) 고정, p>0, 정삼각형 구조(AB=BF)는 유지해야 60° 가 살아남."
    creative: "(1) p 를 주고 CF 를 묻기(역방향 · ★3 동일 골조) (2) AB=BF 대신 ∠ABF=60° 를 직접 주면 EQV 가 사라져 ★2~3 (3) 선분 AF 의 길이나 △ABF 넓이 묻기(★3) (4) AB=BF 를 「BF 가 준선과 이루는 각이 45°」로 바꾸면 이등변직각 구조로 새 계산(★3~4 · 통찰 유지)."
```

```yaml
- id: RPM-GEO-0057
  page: 12
  vendor_label: "유형 04 포물선의 정의의 활용; 포물선 위의 점이 주어질 때"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    그림: 초점 F 인 포물선 y^2=10x 위의 두 점 A, B 에 대해 AF+BF=9. A, B 를 중심으로 x축에 접하는 두 원의 넓이 S_1, S_2 의 합.
  category: "AF+BF → x_A+x_B=4 · 접하는 원 반지름 = |y| → π(y_A²+y_B²) = 10π(x_A+x_B)"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "AF+BF=9 를 각 점을 구하지 않고 (x_A+5/2)+(x_B+5/2)=9 → x_A+x_B=4 로 축약"
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x축에 접하는 원의 넓이 합을 π(y_A²+y_B²) 로 읽고 포물선 방정식으로 y²=10x 를 넣어 x좌표 합으로 전환"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "여러 점의 초점거리 합 → x좌표 합(정의)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    p=5/2 → AF+BF=x_A+x_B+5=9 → x_A+x_B=4. x축에 접하는 원의 반지름은 |y| 이므로 S₁+S₂=π(y_A²+y_B²)=10π(x_A+x_B)=40π. 초점거리 합의 축약(EQV d1)과 넓이 → y² → x 전환(RT d1) 두 착안이 사슬. 벤더 상중 ★3, 통찰 2 이지만 둘 다 d1·M_total 5 → +1 미적용, ★3 유지.
  tier: star_3
  mechanism_primary: "p=5/2 → x_A+x_B=9−5=4 → 반지름 |y| → S₁+S₂=π(y_A²+y_B²)=10π·4=40π"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$40\pi$'
  answer_source: "답지"
  figure: crop:fig-0057.png
  latex: latex-bank/rpm-geo/items/0057.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "4p(10 → 4·8·12)와 AF+BF(9 → 7·13)를 바꾸면 답 = 4p·π·(합 − 2p). 제약: 합 − 2p > 0, 그림 라벨(A·B·F·S₁·S₂) 고정, 두 점이 같은 쪽에 있어도 성립하므로 그림은 참고용."
    creative: "(1) 두 원의 넓이 합 대신 둘레 합(√ 이 남아 좌표 개별 필요 → 조건 추가 필요 · 골조 붕괴) (2) 「y축에 접하는 원」으로 바꾸면 반지름 = x 가 되어 넓이 합 = π(x_A²+x_B²) — 합만으로 안 되고 곱이 필요 → 초점현 근과 계수 결합 ★4 (3) AF+BF 대신 선분 AB 의 중점 x좌표 주기(★2) (4) 세 점·세 원으로 확장(★3 동일 골조)."
```

### 유형 05 포물선의 정의의 활용; 초점을 지나는 직선이 주어질 때

```yaml
- id: RPM-GEO-0058
  page: 12
  vendor_label: "유형 05 포물선의 정의의 활용; 초점을 지나는 직선이 주어질 때"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    그림: 포물선의 초점 F 를 지나는 직선이 포물선과 만나는 두 점 P, Q 에서 준선 l 에 내린 수선의 발 H, H'. PQ=9, HH'=8 일 때 사각형 HH'QP 의 둘레.
  category: "PH=PF, QH'=QF(정의) → PH+QH'=PQ=9 → 둘레 9+8+9"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 수선의 길이를 따로 구하지 않고 PH+QH'=PF+FQ=PQ 로 묶어 둘레를 2PQ+HH' 로 축약"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "초점현의 길이 = 준선 거리 합(정의)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    정의에서 PH=PF, QH'=QF 이고 F 가 PQ 위이므로 PH+QH'=PQ=9. 둘레 = PH+HH'+H'Q+QP = 9+8+9 = 26. 좌표 없이 정의 두 번과 덧셈뿐이라 M_total 4(전 축 최소)지만, 두 길이를 합으로만 처리하는 축약(EQV d1)이 이 유형의 골조. 대표문제 출발점 ★2 · 통찰 1 → −1 미적용, ★2. 그림 fig-0058: l 이 y축 왼쪽, P 위·Q 아래, HH' 와 PQ 에 8·9 표시.
    [분류 이슈] 정의 적용 한 줄에 가까워 절차형 ★1 로 볼 수도 있음 — 0057 의 「합 축약」 기준과 맞추어 EQV d1 로 기록.
  tier: star_2
  mechanism_primary: "PH=PF, QH'=QF → PH+QH'=PQ=9 → 둘레 = 9+8+9 = 26"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$26$'
  answer_source: "답지(쪽 렌더)"
  figure: crop:fig-0058.png
  latex: latex-bank/rpm-geo/items/0058.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "PQ(9 → 7·12)와 HH'(8 → 6·10)를 바꿀 수 있음. 제약: HH' ≤ PQ(HH' 는 두 평행변에 수직인 변이라 빗변 PQ 보다 짧음), 그림 라벨(P·Q·H·H'·F·l) 고정, 둘레 = 2PQ+HH'."
    creative: "(1) 둘레 대신 사각형 HH'QP 의 넓이 = ½(PH+QH')·HH' = ½·PQ·HH' 로 같은 축약(★2) (2) PH, QH' 를 직접 주고 PQ 를 묻기(정의 역방향 ★1) (3) PQ 와 PH 를 주고 QF 묻기(★1) (4) 좌표(y²=4px)를 얹어 x좌표 합으로 옮기면 0059 골조(★2)."
```

```yaml
- id: RPM-GEO-0059
  page: 13
  vendor_label: "유형 05 포물선의 정의의 활용; 초점을 지나는 직선이 주어질 때"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    그림: 포물선 y^2=8x 의 초점 F 를 지나는 직선이 포물선과 만나는 두 점 P, Q 의 x좌표가 α, β. α+β=6 일 때 선분 PQ 의 길이.
  category: "p=2 → PF=α+2, QF=β+2 → PQ=α+β+4"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "P, Q 를 구하지 않고 PQ=PF+FQ 를 준선 거리 (α+2)+(β+2) 로 바꿔 x좌표 합만으로 결정"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "초점현의 길이 = 준선 거리 합(정의)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y²=8x 는 p=2, 준선 x=−2. 초점을 지나므로 PQ=PF+FQ=(α+2)+(β+2)=α+β+4=10. 직선의 기울기나 두 점의 좌표는 필요 없다는 축약(EQV d1)이 골조이고 나머지는 한 줄. 벤더 중 ★2 · 통찰 1·M_total 4 → ★2 유지. 그림 fig-0059: Q 가 1사분면 위, P 가 4사분면, α·β 는 x축 위 표시.
  tier: star_2
  mechanism_primary: "p=2 → PQ=PF+FQ=(α+2)+(β+2) → 6+4=10"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$10$'
  answer_source: "답지(쪽 렌더)"
  figure: crop:fig-0059.png
  latex: latex-bank/rpm-geo/items/0059.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "4p(8 → 4·12)와 α+β(6 → 5·10)를 바꾸면 PQ=α+β+2p. 제약: 초점현의 최소 길이는 통경 4p 이므로 α+β ≥ 2p 여야 실제 직선이 존재, 그림 라벨(P·Q·F·α·β) 고정."
    creative: "(1) PQ 를 주고 α+β 를 묻기(역방향 ★2) (2) 직선의 기울기 m 을 주고 PQ 묻기 → 근과 계수 관계로 α+β 를 먼저 구해야 함(★3 · Mₖ 상승) (3) 「PQ 의 중점의 x좌표」로 바꾸면 0060 골조(★2~3) (4) αβ=p² 항등식을 덧붙여 PF·QF 나 1/PF+1/QF 를 묻기(★3~4 · 조화 성질)."
```

```yaml
- id: RPM-GEO-0060
  page: 13
  vendor_label: "유형 05 포물선의 정의의 활용; 초점을 지나는 직선이 주어질 때"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    직선 y=m(x-1) 과 포물선 y^2=4x 의 두 교점 P, Q 에 대해 PQ=10 일 때 선분 PQ 의 중점의 x좌표.
  category: "직선이 초점 (1,0) 통과 인지 → PQ=x_P+x_Q+2=10 → 중점 x=4"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "y=m(x−1) 이 기울기와 무관하게 점 (1,0) 을 지나고, 그 점이 y²=4x 의 초점임을 알아채 PQ 를 초점현으로 읽음 — 문제에 「초점」이 없음"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "PQ=PF+FQ=(x_P+1)+(x_Q+1) 로 바꿔 두 점을 구하지 않고 x좌표 합 8 → 중점 4"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "초점현의 길이 = 준선 거리 합(정의)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    y²=4x 의 초점은 (1,0) 이고 y=m(x−1) 은 m 에 관계없이 (1,0) 을 지나므로 PQ 는 초점현. PQ=(x_P+1)+(x_Q+1)=10 → x_P+x_Q=8 → 중점의 x좌표 4. 초점을 못 보면 m²x²−(2m²+4)x+m²=0 의 근과 계수로 PQ²=(1+m²)·16(1+m²)/m⁴ 를 세워 m²=2/3 을 거쳐야 하는 계산 경로가 있어 갈래 선택(SC)도 있으나 주 통찰은 숨은 초점 인지(RT d2)·합 축약(EQV d1). 통찰 2·M_total 6 → 벤더 중 ★2 에서 +1 → ★3.
    [분류 이슈] 벤더 「중」 ★2 vs 판정 ★3 — 초점 인지가 표준 훈련 항목이라 ★2 로 보는 시각도 있음.
  tier: star_3
  mechanism_primary: "y=m(x−1) ∋ (1,0)=초점 → PQ=x_P+x_Q+2=10 → x_P+x_Q=8 → 중점 x=4"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$4$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0060.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "4p(4 → 8·12)와 PQ(10 → 8·14)를 바꾸면 중점 x=(PQ−2p)/2. 제약: 직선은 반드시 y=m(x−p) 꼴로 초점을 지나야 하고 PQ ≥ 4p(통경)여야 함, m 은 답에 안 쓰이므로 「양수 m」 조건 불필요."
    creative: "(1) 직선을 y=mx−m 처럼 초점 통과가 덜 보이게 쓰기(RT 유지 ★3) (2) 중점 대신 m 의 값을 묻기 → 근과 계수 관계 필수(★3 · Mₖ 상승) (3) 「직선이 점 (1,0) 을 지난다」로 초점을 명시하면 RT 소멸 ★2 (4) 직선을 초점을 지나지 않는 y=m(x−2) 로 바꾸면 정의를 쓸 수 없어 계산만 남음(질 저하)."
```

```yaml
- id: RPM-GEO-0061
  page: 13
  vendor_label: "유형 05 포물선의 정의의 활용; 초점을 지나는 직선이 주어질 때"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    그림: 포물선 y^2=4px (p>0) 의 초점 F 를 지나는 x축 수직 직선이 포물선과 만나는 두 점 A, B 와 준선 위 수선의 발 A', B' 로 만든 사각형 A'B'BA 의 넓이가 32 일 때 삼각형 AOB 의 둘레.
  category: "A(p,2p), B(p,−2p) → 직사각형 2p×4p=32 → p=2 → OA=OB=2√5, AB=8"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "초점을 지나는 축 수직 현(통경)과 도형"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x=p 대입 → A(p,2p), B(p,−2p). 준선 x=−p 까지 가로 2p, 세로 4p → 넓이 8p²=32 → p=2. A(2,4), B(2,−4): OA=OB=√20=2√5, AB=8 → 둘레 8+4√5. 통경 4p 와 직사각형 넓이는 표준, 매개변수 p 하나로 Mₐ 2·M_total 6 이지만 통찰 없음 → 벤더 중 ★2 유지. 그림 fig-0061: l·m 이 세로선, A'A 와 B'B 가 가로, O 에서 A·B 로 선분.
  tier: star_2
  mechanism_primary: "x=p → A(p,2p), B(p,−2p) → 넓이 2p·4p=32 → p=2 → OA=OB=2√5, AB=8 → 둘레 8+4√5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$8+4\sqrt{5}$'
  answer_source: "답지(쪽 렌더)"
  figure: crop:fig-0061.png
  latex: latex-bank/rpm-geo/items/0061.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "넓이(32 → 8·72·128)를 바꾸면 p=√(넓이/8) 이므로 넓이는 8·(제곱수)로. 제약: 그림 라벨(A·B·A'·B'·F·O·l·m) 고정, OA=p√5 라 둘레는 항상 4p+2p√5 꼴."
    creative: "(1) 둘레 대신 삼각형 AOB 의 넓이(=½·4p·p=2p² · ★1~2) (2) 사각형 넓이 대신 둘레를 주기(★2) (3) 직선 m 을 초점 통과 기울기 있는 직선으로 바꾸면 사다리꼴·초점현 골조(★3) (4) 삼각형 AOB 의 외접원 반지름이나 ∠AOB 크기 묻기(★3)."
```

```yaml
- id: RPM-GEO-0062
  page: 13
  vendor_label: "유형 05 포물선의 정의의 활용; 초점을 지나는 직선이 주어질 때"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    포물선 x^2=6y 의 초점 F 를 지나고 기울기 m 인 직선이 포물선과 만나는 두 점 A, B 에 대해 AF:BF=2:3 일 때 양수 m 의 값. B 는 제1사분면.
  category: "AF=2k, BF=3k 를 준선 거리로 → 직각삼각형(빗변 5k·세로 k) → 기울기 1/(2√6)"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "AF:BF=2:3 을 준선 y=−3/2 까지의 거리 2k, 3k 로 바꿔 두 점의 y좌표 차가 k 임을 얻음"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "A 에서 BB' 에 내린 수선으로 빗변 AB=5k·세로 k 인 직각삼각형을 만들어 가로 2√6k → 기울기 = k/(2√6k) — 길이 비를 좌표 비(기울기)로 전환"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "초점현의 길이 비 → 기울기(직각삼각형)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    x²=6y 는 p=3/2, F(0,3/2), 준선 y=−3/2. AF=2k, BF=3k 로 두면 준선 거리도 2k, 3k 라 y_B−y_A=k, AB=5k. 직각삼각형에서 가로 √(25k²−k²)=2√6k → m=k/(2√6k)=√6/12 (B 가 1사분면이라 양수). 대안: 1/AF+1/BF=1/p 로 k=5/4 를 구해 좌표 (−√6,1), (3√6/2,9/4) 를 잡아도 되고, 대입 x²−6mx−9=0 의 근과 계수로 밀어붙이면 계산이 큼. 준선 거리 전환(EQV d1)·비 → 기울기 직각삼각형(RT d2) 두 통찰·M_total 7 → 벤더 상중 ★3 에서 +1 → ★4.
    [분류 이슈] 유형 구역 문항에 ★4 — 직각삼각형 기법이 익숙한 학생에겐 ★3. 라벨은 산식대로 ★4 로 두고 기록.
  tier: star_4
  mechanism_primary: "p=3/2 → AF=2k, BF=3k = 준선 거리 → Δy=k, AB=5k → Δx=2√6k → m=√6/12"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{\sqrt{6}}{12}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0062.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "비(2:3 → 1:2·1:3·3:5)를 바꾸면 빗변 (a+b)k·세로 (b−a)k 로 m=(b−a)/(2√(ab)). 4p(6 → 4·8)는 답에 영향 없음(비만 남음). 제약: a≠b(a=b 면 통경·m=0), 「B 가 1사분면」 같은 부호 조건으로 m 의 부호 확정."
    creative: "(1) 기울기 m 을 주고 AF:BF 를 묻기(역방향 · 동일 골조 ★3~4) (2) 「m 의 값」 대신 AB 의 길이 → 1/AF+1/BF=1/p 가 추가로 필요(★4) (3) y²=4px 로 축을 바꾸면 세로·가로가 뒤집힘(★4 동일) (4) 비를 「AF=2·BF」로 쓰고 A 의 좌표를 묻기(★3)."
```

### 유형 06 포물선의 정의의 활용; 최단 거리

```yaml
- id: RPM-GEO-0063
  page: 13
  vendor_label: "유형 06 포물선의 정의의 활용; 최단 거리"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    그림: 포물선 y^2=8x 위의 점 P 와 두 점 A(2,0), B(6,3) 에 대해 PA+PB 의 최솟값.
  category: "A=초점 인지 → PA=PH(준선 거리) → PH+PB ≥ B 에서 준선까지 6+2"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "이름 없는 점 A(2,0) 이 y²=8x 의 초점임을 알아채고 PA 를 준선 x=−2 까지의 거리 PH 로 바꿈"
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "PH+PB 의 최솟값을 B 에서 준선까지의 수직 거리로 옮김(B, P, H 일직선일 때)"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "두 정점과 포물선 위의 점의 거리 합 최솟값(준선 거리)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    p=2 이므로 A(2,0) 이 초점, 준선 x=−2. PA=PH 라 PA+PB=PH+PB ≥ (B 에서 준선까지)=6+2=8, 등호는 P 가 y=3 인 점 (9/8,3). B 가 포물선 안쪽(9<48)이라 성립. 숨은 초점 인지(RT d2)와 거리 합 → 준선 수직 거리(RT d1) 두 통찰이 있으나 M_total 4 → +1 없이 대표문제 출발점 ★2. 그림 fig-0063: P 에서 A 로 선분, P–B 선분, A(2,0)·B(6,3) 표시.
  tier: star_2
  mechanism_primary: "A(2,0)=초점 → PA=PH → PH+PB ≥ x_B+2 = 8"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$8$'
  answer_source: "답지(쪽 렌더)"
  figure: crop:fig-0063.png
  latex: latex-bank/rpm-geo/items/0063.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "4p(8 → 4·12)에 맞춰 A 를 (p,0) 으로 두고 B 의 좌표를 바꾸면 답 = x_B+p. 제약: B 는 포물선 안쪽(y_B² < 4p·x_B)이어야 함 — 바깥이면 최솟값이 선분 AB 길이로 바뀜, 그림 라벨(A·B·P) 고정."
    creative: "(1) 최솟값일 때의 P 의 좌표 묻기(★2 · 0064 골조) (2) A 를 초점이 아닌 점으로 두면 정의를 못 써 골조 붕괴(질 저하) (3) B 를 포물선 바깥에 두어 「최솟값 = AB」 판단을 요구(★3 · I-VF 후보) (4) PA+PB 대신 PA+PB+PF 처럼 세 항으로 확장(★3)."
```

```yaml
- id: RPM-GEO-0064
  page: 13
  vendor_label: "유형 06 포물선의 정의의 활용; 최단 거리"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    그림: 포물선 x^2=4y 의 초점 F, 포물선 위의 점 P(a, b) 와 점 A(3,5) 에 대해 AP+PF 가 최소일 때 a+b 의 값.
  category: "PF=b+1(준선 거리) → AP+PH 최소 = A 에서 준선까지 수직 → a=3, b=9/4"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "AP+PF=AP+PH 의 최솟값을 A 에서 준선 y=−1 까지의 수직선으로 옮겨 P 의 x좌표가 A 와 같음(a=3)을 얻음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 정점과 포물선 위의 점의 거리 합 최솟값(준선 거리)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    p=1, F(0,1), 준선 y=−1. PF=PH(=b+1) 이므로 AP+PF=AP+PH ≥ 5+1=6, 등호는 A, P, H 가 한 세로선 위 → a=3, b=9/4 → a+b=21/4. A 가 포물선 안쪽(9<20)이라 성립. 초점이 이름으로 주어져 인지 부담은 없고 최솟값 → 준선 수직(RT d1) 하나. 벤더 중 ★2 · 통찰 1·M_total 5 → 유지. 그림 fig-0064: 위로 열린 포물선, F 가 y축 위, A(3,5) 에서 P 로 선분.
  tier: star_2
  mechanism_primary: "p=1 → PF=b+1=PH → AP+PH 최소 ⇔ a=3 → b=9/4 → a+b=21/4"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{21}{4}$'
  answer_source: "답지(쪽 렌더)"
  figure: crop:fig-0064.png
  latex: latex-bank/rpm-geo/items/0064.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "4p(4 → 8·2)와 A 의 좌표를 바꾸면 a=x_A, b=x_A²/(4p). 제약: A 가 포물선 안쪽(x_A² < 4p·y_A), b 가 간단한 분수가 되게 x_A² 을 4p 의 배수·약수로."
    creative: "(1) 최솟값 자체(y_A+p)를 묻기(★2 · 0063 골조) (2) 초점을 이름 없이 좌표 (0,1) 로 주면 RT d2 로 ★2~3 (3) A 를 바깥에 두어 최솟값이 AF 로 바뀌는 경우 판별(★3 · I-VF 후보) (4) 「AP+PF 가 최소인 P 에서의 접선 기울기」로 접선 단원 결합(★3 · XU 후보)."
```

```yaml
- id: RPM-GEO-0065
  page: 13
  vendor_label: "유형 06 포물선의 정의의 활용; 최단 거리"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    그림: 두 점 A(5,3), B(3/4,0) 과 포물선 y^2=3x 위의 점 P 로 만든 삼각형 APB 의 둘레가 최소일 때 삼각형 APB 의 넓이. 5지선다.
  category: "B=초점 인지 → 둘레 최소 ⇔ AP+PB 최소 → PB=PH → P(3,3) → 넓이 ½·2·3"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "y²=3x 는 p=3/4 이므로 이름 없는 B(3/4,0) 이 초점 — PB 를 준선 x=−3/4 까지의 거리로 바꿀 수 있음을 알아챔"
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "AB 가 고정이라 둘레 최소 ⇔ AP+PH 최소 ⇔ A, P, H 가 한 가로선 → P 는 y=3 인 점 (3,3)"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "두 정점과 포물선 위의 점의 거리 합 최솟값(준선 거리)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    4p=3 → 초점 (3/4,0)=B, 준선 x=−3/4. 둘레 = AB+AP+PB 에서 AB 는 상수, AP+PB=AP+PH ≥ 5+3/4 이고 등호는 P 가 y=3 인 점 → x=9/3=3, P(3,3). 삼각형 APB: AP=2(가로), B 까지 높이 3 → 넓이 3. 초점 숨김(RT d2)·둘레 → 거리 합 → 준선 수직(RT d1) 두 통찰, M_total 5 → +1 조건(M≥6·d3) 미충족, 벤더 상중 ★3 유지. 그림 fig-0065: 삼각형 APB 음영, B(3/4,0) 이 x축 위 초점 자리.
  tier: star_3
  mechanism_primary: "p=3/4 → B=초점 → 둘레 최소 ⇔ AP+PH 최소 → P(3,3) → 넓이 ½·AP·|y_A−y_B| = ½·2·3 = 3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지(쪽 렌더)"
  figure: crop:fig-0065.png
  latex: latex-bank/rpm-geo/items/0065.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "4p(3 → 4·8)에 맞춰 B=(p,0) 으로 두고 A 의 좌표를 바꿀 수 있음. 제약: A 는 포물선 안쪽(y_A² < 4p·x_A), P 의 x좌표 y_A²/(4p) 가 간단한 수, 넓이 = ½·(x_A−y_A²/4p)·y_A 가 선택지에 맞는 정수."
    creative: "(1) 넓이 대신 둘레의 최솟값(AB 길이 √ 포함 · ★3) (2) B 를 초점이 아닌 x축 위 점으로 두면 골조 붕괴 — 대신 A 를 초점 자리로 옮겨 대칭 배치(★3 동일) (3) 「둘레 최소일 때 P 의 좌표」만 묻기(★2~3) (4) 삼각형 대신 사각형(두 고정점 + 포물선 위 두 점)으로 확장(★4)."
```

### 유형 07 타원의 방정식

```yaml
- id: RPM-GEO-0066
  page: 14
  vendor_label: "유형 07 타원의 방정식"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    타원 x^2/9+y^2=1 과 두 초점을 공유하고 장축의 길이가 10 인 타원의 방정식.
  category: "c²=9−1=8 → a=5 → b²=25−8=17"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "타원의 방정식 — 초점·꼭짓점·축 길이로 결정"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    주어진 타원의 c²=9−1=8(초점 (±2√2,0)). 장축 10 → a=5, b²=a²−c²=17 → x²/25+y²/17=1. c² 읽기·a·b² 세 단계, 통찰 없음, M_total 4(전 축 최소) → 대표문제 출발점 ★2 에서 −1 → ★1.
  tier: star_1
  mechanism_primary: "x²/9+y²=1 → c²=8 → 장축 10 → a=5 → b²=17 → x²/25+y²/17=1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{x^2}{25}+\dfrac{y^2}{17}=1$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0066.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "원래 타원의 a², b²(9, 1 → 16, 7 · 25, 9)와 새 장축 길이(10 → 12·14)를 바꿀 수 있음. 제약: 새 a² > c² 여야 하고, 초점이 y축 위인 타원(a² 이 y² 아래)으로 바꾸면 축 방향 함정 하나 추가."
    creative: "(1) 장축 대신 단축의 길이를 주기(b 결정 → a²=b²+c² · ★1) (2) 초점 공유 + 특정 점 통과 조건으로 바꾸면 연립(★2 · 0069 골조) (3) 초점 공유 타원 두 개의 교점 개수·좌표(★3) (4) 「두 초점을 공유하는 쌍곡선」으로 바꾸면 단원 뒤쪽 결합(★2)."
```

```yaml
- id: RPM-GEO-0067
  page: 14
  vendor_label: "유형 07 타원의 방정식"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    네 꼭짓점이 (±6,0), (0,±3) 인 타원의 두 초점 F, F' 사이의 거리. 5지선다.
  category: "a=6, b=3 → c²=27 → FF'=2c=6√3"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "타원의 방정식 — 초점·꼭짓점·축 길이로 결정"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    장축 끝 (±6,0), 단축 끝 (0,±3) → a=6, b=3, c²=36−9=27 → c=3√3 → FF'=6√3. 꼭짓점 읽기·c·두 배 세 단계. 벤더 중하·통찰 없음·M_total 4 → ★1. 선택지에 c(3√3) 를 오답으로 둔 것이 유일한 함정.
  tier: star_1
  mechanism_primary: "꼭짓점 (±6,0),(0,±3) → a=6, b=3 → c=√27=3√3 → FF'=6√3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "⑤"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0067.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a, b(6, 3 → 5, 3 · 5, 4 · 10, 6)를 바꾸면 FF'=2√(a²−b²). 제약: a>b 이면 초점이 x축, a<b 이면 y축(어느 좌표가 큰지로 축 결정), 선택지에 c 와 2c 를 나란히 두는 구조 유지."
    creative: "(1) 초점 사이 거리를 주고 단축 길이를 역으로(★1) (2) 네 꼭짓점 대신 「타원 x²/36+y²/9=1」로 주고 초점 좌표(★1) (3) 초점과 단축 끝점을 잇는 삼각형의 넓이·둘레(★2 · 0070 골조) (4) 네 꼭짓점을 잇는 마름모 넓이와 초점 거리 관계(★2)."
```

```yaml
- id: RPM-GEO-0068
  page: 14
  vendor_label: "유형 07 타원의 방정식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    타원 x^2/a^2+y^2/b^2=1 의 두 초점이 (±4,0) 이고 장축과 단축의 길이의 차가 4 일 때 양수 a, b 에 대하여 ab 의 값.
  category: "a²−b²=16, 2a−2b=4 → (a−b)(a+b)=16 → a+b=8 → a=5, b=3"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "타원의 방정식 — 초점·꼭짓점·축 길이로 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    초점 (±4,0) → a²−b²=16, 축 길이 차 → a−b=2. a²−b²=(a−b)(a+b) 로 a+b=8 → a=5, b=3 → ab=15. 합·차 인수분해는 일반 학생이 무리 없이 쓰는 표준 대수(Mₖ 1), 미지수 두 개(Mₐ 2)·M_total 6, 통찰 없음 → 벤더 중 ★2 유지. 초점이 x축 위라 a>b 인 것을 「장축−단축」 부호로 확인하는 정도가 함정.
  tier: star_2
  mechanism_primary: "c=4 → a²−b²=16 · 2a−2b=4 → a−b=2 → a+b=8 → a=5, b=3 → ab=15"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$15$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0068.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "c(4 → 3·5·12)와 축 길이 차(4 → 2·6·14)를 바꿀 수 있음. 제약: a−b=차/2 가 c² 의 약수이고 a+b=c²/(a−b) 와 홀짝이 같아야 a, b 정수(예: c=5, 차=2 → a−b=1, a+b=25 → a=13, b=12)."
    creative: "(1) 「장축·단축 길이의 합」으로 바꾸면 a+b 가 주어져 a−b 결정(★2 동일) (2) 초점을 y축 위로 바꿔 b>a 부호 함정(★2) (3) 「장축 길이 : 단축 길이 = 5:3」 비로 주기(★2) (4) 장축·단축 차 대신 「초점과 단축 끝점의 거리」= a 를 주면 한 줄(★1)."
```

```yaml
- id: RPM-GEO-0069
  page: 14
  vendor_label: "유형 07 타원의 방정식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    원점 중심·한 초점이 F(0, 2√7) 인 타원이 점 P(-3√2, 4√2) 를 지날 때, 다른 초점 F' 에 대하여 PF+PF' 의 값.
  category: "초점이 y축 → x²/b²+y²/a²=1, a²−b²=28 → P 대입 → a²=64 → 2a=16"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "타원의 정의(PF+PF'=2a)와 지나는 점"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    초점이 y축 위이므로 x²/(a²−28)+y²/a²=1 에 P 를 넣으면 18/(a²−28)+32/a²=1 → a⁴−78a²+896=0 → (a²−64)(a²−14)=0 → a²=64(>28) → PF+PF'=2a=16. F'(0,−2√7) 로 두 거리를 직접 구해도 √(78∓16√14)=8∓√14 로 합 16. 어느 길이든 사차식이나 이중근호 정리가 있어 Mₖ 2, 장축이 y축이라는 축 판별(T-표기)까지 M_total 6 이나 통찰 없음 → 벤더 중 ★2 유지.
  tier: star_2
  mechanism_primary: "c²=28(y축) → 18/(a²−28)+32/a²=1 → a²=64 → PF+PF'=2a=16"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$16$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0069.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초점 (0,c)와 지나는 점을 바꿀 수 있음. 제약: 먼저 a², b² 를 정해 타원 위의 점(x², y² 가 유리수)을 역산하는 것이 안전 — 사차식이 (a²−p)(a²−q) 로 인수분해되고 큰 근만 c² 보다 크게."
    creative: "(1) PF+PF' 대신 타원의 방정식 자체를 묻기(★2) (2) 초점을 x축 위로 두면 축 판별 함정 제거(★2) (3) 「PF−PF'」 또는 PF·PF' 를 묻기 → 개별 거리 필요 · 이중근호 정리 필수(★3) (4) 지나는 점 대신 「단축 끝점과 초점 거리」 조건(★1~2)."
```

```yaml
- id: RPM-GEO-0070
  page: 14
  vendor_label: "유형 07 타원의 방정식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    그림: 중심이 원점, x축 위 두 초점 F, F' 인 타원과 y축의 교점 P 에 대해 삼각형 PF'F 가 한 변 8 인 정삼각형일 때, 타원 x^2/a^2+y^2/b^2=1 의 a^2+b^2 의 값.
  category: "FF'=8 → c=4 · PF+PF'=16 → a=8 → b²=48 → 합 112"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "타원의 방정식 — 초점·꼭짓점·축 길이로 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    정삼각형 한 변 8 → FF'=8 → c=4, PF=PF'=8 → 2a=16 → a=8(단축 끝점에서 초점까지가 a 임을 써도 같음). b²=64−16=48(정삼각형 높이 4√3=b 로도 확인) → a²+b²=112. 정의 또는 a²=b²+c² 표준 적용, 통찰 없음, M_total 5 → 벤더 중 ★2 유지. 그림 fig-0070: 가로로 긴 타원, P 가 y축 위 꼭짓점, F'·F 가 x축 위.
  tier: star_2
  mechanism_primary: "정삼각형 변 8 → c=4 · PF+PF'=16 → a=8 → b²=a²−c²=48 → a²+b²=112"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$112$'
  answer_source: "답지"
  figure: crop:fig-0070.png
  latex: latex-bank/rpm-geo/items/0070.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정삼각형의 변(8 → 4·6·10)을 바꾸면 a=변, c=변/2, b²=¾·변² → a²+b²=7/4·변². 제약: b² 이 정수가 되게 변은 짝수, 그림 라벨(P·F·F'·O) 고정."
    creative: "(1) 정삼각형 대신 「∠F'PF=90°」(직각이등변 → a=√2·c · ★2) 또는 「∠F'PF=120°」(★2) (2) 정삼각형 넓이를 주고 a²+b² 묻기(★2) (3) 삼각형 PF'F 의 외접원·내접원 반지름과 결합(★3) (4) 초점을 y축 위로 옮겨 세로로 긴 타원(축 판별 · ★2)."
```

## 표본 판정 요약 (34문)

- ★ 분포: ★1 7 · ★2 21 · ★3 5 · ★4 1 · ★5 0
- 통찰형 12 · 절차형 22 · premium 0
- 통찰 라벨(18개): I-RT 9 · I-EQV 7 · I-SYM 1 · I-MI 1. depth 2 는 숨은 초점 인지(0060 0063 0065)·정삼각형 인지(0056)·비 → 기울기 직각삼각형(0062) 다섯 곳.
- type_hint 상위: 「타원의 방정식 — 초점·꼭짓점·축 길이로 결정」 4 · 「평행이동한 포물선의 초점·준선」 3 · 「초점·준선이 주어진 포물선의 방정식(정의)」 3 · 「포물선 위의 점의 초점거리 = 준선 거리(정의)」 3 · 「초점현의 길이 = 준선 거리 합(정의)」 3 · 「두 정점과 포물선 위의 점의 거리 합 최솟값(준선 거리)」 3
- 벤더 신호 대비: 출발점 유지 29(중하 5건 0038 0042 0049 0053 0067 은 범위 ★1~2 의 아래 ★1) · −1 조정 2(0037 0066 — 대표문제인데 M_total 4) · +1 조정 3(0056 0060 중→★3 · 0062 상중→★4)
- 그림: 10문(`crop:fig-0053.png` · `fig-0056` · `fig-0057` · `fig-0058` · `fig-0059` · `fig-0061` · `fig-0063` · `fig-0064` · `fig-0065` · `fig-0070`)
- 답: 34문 모두 다시 풀어 전사본 answer 와 일치. 「전사 답 확인 필요」 0건.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-GEO-0050 | 준선이 초점 좌·우 두 경우 — 절댓값 두 해가 기하적 두 경우와 대응, 스키마의 「단순 절댓값 분기 제외」와 경계. MI d1 로 기록 | ★2 |
| RPM-GEO-0056 | 벤더 「중」인데 통찰 2(EQV d2 + RT d1)·M_total 8 → ★3. 유형 04 안에서 가장 무거움 | ★3 / ★2 |
| RPM-GEO-0058 | 정의 적용 한 줄 — 0057 과 같은 「합 축약」 EQV d1 로 세어 ★2. 절차형 ★1 로 볼 수도 | ★2 / ★1 |
| RPM-GEO-0060 | 숨은 초점 인지(RT d2)+합 축약(EQV d1)·M_total 6 → ★3, 벤더 「중」 ★2. 근과 계수 계산 경로가 있어 SC 로 볼 여지 | ★3 / ★2 |
| RPM-GEO-0062 | 유형 구역 문항에 ★4 — 통찰 2(EQV d1 + RT d2)·M_total 7 산식 결과. 직각삼각형 기법 숙련자에겐 ★3 | ★4 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 반복된 type_hint: 「평행이동한 포물선의 초점·준선」(0041 0042 0045) · 「포물선의 일반형 → 표준형(완전제곱)과 요소 판별」(0043 0046) · 「초점·준선이 주어진 포물선의 방정식(정의)」(0048 0049 0051) · 「포물선 위의 점의 초점거리 = 준선 거리(정의)」(0052 0053 0054) · 「여러 점의 초점거리 합 → x좌표 합(정의)」(0055 0057) · 「초점현의 길이 = 준선 거리 합(정의)」(0058 0059 0060) · 「두 정점과 포물선 위의 점의 거리 합 최솟값(준선 거리)」(0063 0064 0065) · 「타원의 방정식 — 초점·꼭짓점·축 길이로 결정」(0066 0067 0068 0070) · 「초점을 지나는 축 수직 현(통경)과 도형」(0040 0061).
- 따로 세울 유형: (a) 「초점현의 길이 비 → 기울기(직각삼각형)」(0062) — 초점현 길이 합과 골조가 다름(비 → 직각삼각형 → 기울기), 이 범위 유일한 ★4 슬롯 후보. (b) 「초점과 지나는 점으로 준선 결정(두 경우)」(0050) — 정의로 방정식 세우기의 MI 변형, 별도 유형이면 ★2 통찰 슬롯. (c) 「세 점을 지나는 포물선 — 대칭축·꼭짓점 인지」(0047) — 평행이동 유형과 분리(SYM). (d) 「정의로 정삼각형 인지 → 좌표 계산」(0056) — 60° 구조 문항군의 씨앗.
- 통합해도 될 유형: 「여러 점의 초점거리 합 → x좌표 합」(유형 04 0055 0057)과 「초점현의 길이 = 준선 거리 합」(유형 05 0058 0059 0060)은 같은 공리(초점거리 합 = x좌표 합 + np) — 카탈로그에서는 「초점거리 합의 축약」 한 유형 아래 「무게중심·초점현·중점」 변형으로 두는 것이 자연스러움. 「초점을 지나는 축 수직 현(통경)과 도형」은 유형 01·05 에 흩어져 있으나 하나로. 「포물선 y²=4px 의 초점·준선 읽기」(0038)·「두 포물선의 초점 좌표 관계」(0039)는 「포물선의 방정식 y²=4px — 초점·꼭짓점으로 결정」(0037)에 흡수 가능. 「이차함수 꼴 포물선의 초점」(0044)은 「일반형 → 표준형」(0043 0046)의 하위 변형. 타원 쪽은 「타원의 정의(PF+PF'=2a)와 지나는 점」(0069)을 「타원의 방정식 결정」의 하위 변형으로 둘 수 있음.
- 숨은 초점 인지(0060 0063 0065)는 유형이 아니라 depth 2 통찰 modifier 로 카탈로그에 기록하는 것이 나음 — 어떤 유형에나 얹어 ★ 한 단을 올릴 수 있음.
