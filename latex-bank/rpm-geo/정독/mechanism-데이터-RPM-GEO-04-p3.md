---
name: mechanism-데이터-RPM-GEO-04-p3
description: RPM 기하 04 공간좌표(3/3 · 유형 13~14 · 유형 UP 15~16 · 시험에 꼭 나오는 문제 · 서술형 주관식 · 실력 Up) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 기하 (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-geo
  section: 04 공간좌표
  unit_code: GEO-04
  part: "3/3"
  extract_range: "65~69쪽 · 0414~0450"
  total_problems: 37
  unit_total: 105
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-geo/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-geo/items/<id>.tex
  image_source: latex-bank/rpm-geo/figures/ (crops.json)
---

# RPM 기하 · 04 공간좌표 (3/3) 정독 데이터 (v1.0)

이 파일은 RPM 기하 04 공간좌표의 마지막 범위(65~69쪽 · 0414~0450 · 37문항)를 다룬다. 구성은 「유형 13 구와 좌표축의 교점」 4문 · 「유형 14 구와 좌표평면의 교선」 4문 · 「유형 UP 15 구에 그은 접선의 길이」 3문 · 「유형 UP 16 구 밖의 점과 구 위의 점 사이의 거리」 4문 · 「시험에 꼭 나오는 문제」 15문(대칭점·직각삼각형·직선과 평면의 각·대칭 최단거리·내분점·평행사변형·무게중심·구의 반지름 최소·좌표평면에 접하는 구·중점 자취·교점·교선·접선·두 구 — 04 단원 전체 종합) · 「서술형 주관식」 4문 · 「실력 Up」 3문이다. RPM 의 벤더 난이도 신호는 구역이 곧 층이며(교과서 / 유형 / 유형 UP / 시험에 꼭 나오는 문제 / 서술형 / 실력 Up), 난이도 표시(level)는 유형 구역에만 있고(중하 1 · 중 7 · 상중 4), 태그는 대표문제 4 · 서술형 1 · 중요 3 · 평가원 기출 2, 그림은 4문(0429 · 0435 · 0448 · 0450)이다.

★ 출발점은 유형 구역은 level(중하 ★1~2 · 중 ★2 · 상중 ★3)을, level 이 없는 대표문제는 구역 기본(유형 ★2 · 유형 UP ★3)을 썼다. 통찰 0·M_total ≤ 5 이면 −1 후보를 적용하되 level 「중」이 명시된 M_total 5 는 ★2 를 유지했다. 시험에 꼭 나오는 문제(level 없음)는 ★2 출발로 두고 M_total 4·통찰 0 이면 ★1, 통찰 1개 이상에 M_total 6 이상이면 ★3 으로 조정했다. 서술형은 ★3 출발(통찰 0·M_total 5 는 ★2), 실력 Up 은 ★4 출발이다. 벤더 신호와 2단 이상 어긋난 문항은 없고, 1단 차의 경계 사례는 파일 끝 「분류 이슈 목록」에 기록만 했다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 사슬) · `insights[]`(절차형이면 빈 배열) · `variation_notes`(numeric: 바꿔도 되는 수와 제약 / creative: 골조를 유지한 설정 변경과 ★ 변동 지점)를 채웠다. 이 범위의 골조는 크게 「구의 중심·반지름 정리 → 좌표축/좌표평면 대입(r²−d²)」, 「구 밖의 점 → 중심 거리 ± 반지름」, 「공간도형에 좌표 도입 → 정사영·무게중심·거리」 세 갈래로 반복된다. insight_type 은 insights 가 비어 있지 않으면 통찰형으로 두었다.

## 문항 데이터

### 유형 13 구와 좌표축의 교점

```yaml
- id: RPM-GEO-0414
  page: 65
  vendor_label: "유형 13 구와 좌표축의 교점"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    일반형 구 x²+y²+z²-8x-6y-2z-9=0 이 x축과 만나는 두 점 A, B 사이의 거리. 5지선다.
  category: "x축 위의 점 ⇒ y=z=0 대입 → x 의 이차방정식 → 두 근의 차"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구와 좌표축의 교점 — 두 교점 사이의 거리"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    y=z=0 을 대입하면 x²-8x-9=0, 두 근 9, -1 의 차 10. 인수분해 한 줄로 끝나는 정의 확인 문항. 대체 풀이(중심 (4,3,1)·r²=35 에서 x축까지 거리 √10 → 반현 √25=5)도 같은 결과. 유형 대표문제 출발 ★2, 통찰 0·M_total 4 → −1 조정 ★1.
  tier: star_1
  mechanism_primary: "x축 ⇒ y=z=0 대입 → x²-8x-9=0 → 근 9, -1 → AB=10"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "③"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0414.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구의 1차항 계수와 상수, 축(x·y·z)을 바꿀 수 있음. 제약: 축 변수만 남긴 이차식이 서로 다른 두 실근(판별식 > 0)을 갖고 인수분해되거나 근의 차가 정수·간단한 근호가 되도록 상수 조정. 선택지 5개는 근의 차 근처 정수로."
    creative: "(1) 두 교점 사이 거리 대신 「두 교점의 x좌표의 곱·합」(근과 계수 관계 · ★1) (2) 표준형으로 주고 중심에서 축까지 거리 → 반현 길이(피타고라스)로 풀게 하면 RT d1 · ★2 (3) 교점이 한 점(접함)이 되는 상수 조건으로 바꾸면 판별식=0 · BW 성격 ★2."
```

```yaml
- id: RPM-GEO-0415
  page: 65
  vendor_label: "유형 13 구와 좌표축의 교점"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    구 (x-2)²+(y-6)²+(z-8)²=r² 이 z축과 만나는 두 점 사이의 거리가 14 일 때 양수 r. 5지선다.
  category: "z축 ⇒ x=y=0 대입 → (z-8)²=r²-40 → 두 근의 차 2√(r²-40)=14 → r² 역산"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구와 좌표축의 교점 — 두 교점 사이의 거리"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x=y=0 을 대입하면 (z-8)²=r²-40, 두 교점 z=8±√(r²-40) 의 거리 2√(r²-40)=14 에서 r²-40=49, r²=89. 0414 의 골조를 뒤집어 반지름을 역산하는 표준 절차. 매개변수 r 로 Mₐ 2, 통찰 없음. 「중하」 출발 ★1~2 에서 M_total 6 이라 ★2.
  tier: star_2
  mechanism_primary: "z축 ⇒ x=y=0 → (z-8)²=r²-40 → 2√(r²-40)=14 → r²=89"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0415.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "중심 좌표·교점 거리·축을 바꿀 수 있음. 제약: 중심에서 축까지 거리 제곱 d²(여기서는 4+36=40)과 (거리/2)² 의 합이 r² 이므로 r² 이 양수이고 선택지가 √(정수) 로 정리되도록 조정. 거리는 짝수로 두면 반현이 정수."
    creative: "(1) 두 교점의 좌표를 주고 중심의 한 좌표를 묻기(★2) (2) 두 축(x축·z축)과의 교점 거리 두 조건으로 중심 두 좌표 결정(★3 · CON 성격) (3) 「구가 z축과 만나지 않도록 하는 r 의 범위」로 바꾸면 부등식 · ★2."
```

```yaml
- id: RPM-GEO-0416
  page: 65
  vendor_label: "유형 13 구와 좌표축의 교점"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    두 점 A(2,-2,1), B(-4,2,3) 을 지름의 양 끝으로 하는 구와 x축이 만나는 두 점 사이의 거리. 주관식.
  category: "지름 양 끝 → 중심(중점)·반지름(AB/2) → 구의 방정식 → y=z=0 대입 → 두 근의 차"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구와 좌표축의 교점 — 두 교점 사이의 거리"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    중심 (-1,0,2), r²=AB²/4=56/4=14 로 구 (x+1)²+y²+(z-2)²=14 를 세운 뒤 y=z=0 → (x+1)²=10 → 두 근의 차 2√10. 「지름 → 구의 방정식」과 「축 교점」 두 표준 절차의 결합이라 Mₛ 2. 통찰 없음·M_total 5 로 −1 후보이나 level 「중」·두 절차 결합이라 ★2 유지.
  tier: star_2
  mechanism_primary: "지름 AB → 중심 (-1,0,2)·r²=14 → y=z=0 대입 → (x+1)²=10 → 2√10"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2\sqrt{10}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0416.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A, B 좌표와 축을 바꿀 수 있음. 제약: 중점이 정수이도록 좌표 합이 짝수, r² − (중심에서 축까지 거리²) > 0. 답이 2√(정수) 꼴로 정리되도록 조정."
    creative: "(1) 지름 대신 「중심과 한 점을 지나는 구」로 조건 변경(★2) (2) 중심의 x좌표를 0 으로 두어 두 교점이 원점 대칭이 되게 하고 「두 교점의 x좌표의 곱」을 묻기(근과 계수 · ★2) (3) 세 축과의 교점 거리 셋을 묻는 소문항 묶음(★2)."
```

```yaml
- id: RPM-GEO-0417
  page: 65
  vendor_label: "유형 13 구와 좌표축의 교점"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    구 x²+y²+z²+2x-2y+4z-24=0 의 중심 C 와 y축과의 두 교점 A, B 가 만드는 삼각형 ABC 의 넓이. 주관식.
  category: "중심 C(-1,1,-2) · y축 교점 y²-2y-24=0 → A, B → 밑변 AB=10 · 높이 = C 에서 y축까지 거리 √5 → 넓이"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 3
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "삼각형 ABC 의 높이를 「중심 C 에서 y축까지의 거리 √(x²+z²)」로 읽어 세 변 계산 없이 넓이를 구함"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "구와 좌표축의 교점 — 중심과 두 교점이 만드는 삼각형의 넓이"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    x=z=0 대입 → (y-6)(y+4)=0 → A(0,6,0), B(0,-4,0), AB=10. 밑변이 y축 위에 있으므로 높이는 C(-1,1,-2) 에서 y축까지 거리 √(1+4)=√5 → 넓이 5√5. 세 변을 구해 헤론이나 코사인법칙으로 가면 계산이 커지고, 축을 밑변으로 보는 전환(RT d1)이 관건. 「상중」 출발 ★3 · 통찰 1 → ★3 유지(M_total 5 라 가벼운 ★3).
  tier: star_3
  mechanism_primary: "y축 교점 A(0,6,0)·B(0,-4,0) → AB=10 → 높이 = C 에서 y축 거리 √5 → 넓이 5√5"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$5\sqrt{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0417.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구의 계수·축을 바꿀 수 있음. 제약: 축 변수 이차식이 인수분해되어 교점이 정수, 중심에서 축까지 거리 √(다른 두 좌표 제곱합)이 간단한 근호. 그림 없음이라 라벨 제약 없음."
    creative: "(1) 삼각형 ABC 가 직각삼각형(∠C=90°)이 되도록 하는 상수 조건(BW · ★3) (2) 넓이 대신 「∠ACB 의 cos 값」(코사인법칙 · ★3) (3) 두 축과의 교점 네 점이 만드는 사각형의 넓이(★3~4)."
```

### 유형 14 구와 좌표평면의 교선

```yaml
- id: RPM-GEO-0418
  page: 65
  vendor_label: "유형 14 구와 좌표평면의 교선"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    구 (x-3)²+(y+4)²+(z-2)²=49 가 xy평면과 만나서 생기는 도형(원)의 둘레의 길이. 5지선다.
  category: "xy평면 ⇒ z=0 대입 → (x-3)²+(y+4)²=45 → 반지름 3√5 → 둘레 2π·3√5"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구와 좌표평면의 교선 — 교선 원의 반지름(r²−d²)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    z=0 을 대입하면 (x-3)²+(y+4)²=49-4=45, 반지름 √45=3√5, 둘레 6√5π. 「반지름² − 평면까지 거리²」 한 줄. 유형 대표문제 출발 ★2, 통찰 0·M_total 4 → −1 조정 ★1.
  tier: star_1
  mechanism_primary: "z=0 대입 → 원 (x-3)²+(y+4)²=45 → r=3√5 → 둘레 6√5π"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0418.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "중심·반지름·좌표평면(xy·yz·zx)을 바꿀 수 있음. 제약: R² − (중심에서 평면까지 거리)² > 0 이고 √ 가 정리되도록(예: 45=9·5). 둘레 대신 넓이를 물으면 근호 없이 정수·π 로 떨어짐."
    creative: "(1) 넓이·둘레 대신 「교선 원이 지나는 축 위의 점」(★1) (2) 세 좌표평면과의 교선 넓이 대소 비교(★2) (3) 일반형으로 주고 완전제곱 정리를 먼저 시키면 계산만 늘고 ★1~2."
```

```yaml
- id: RPM-GEO-0419
  page: 65
  vendor_label: "유형 14 구와 좌표평면의 교선"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    구 x²+y²+z²-8x-6y-4z+k=0 이 yz평면과 만나서 생기는 도형의 넓이가 5π 일 때 상수 k. 주관식.
  category: "yz평면 ⇒ x=0 대입 → (y-3)²+(z-2)²=13-k → 넓이 π(13-k)=5π → k"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구와 좌표평면의 교선 — 교선 원의 반지름(r²−d²)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x=0 대입 후 y, z 에 대해 완전제곱하면 (y-3)²+(z-2)²=13-k, 넓이 π(13-k)=5π 에서 k=8. 구 전체를 표준형으로 고칠 필요 없이 x=0 을 먼저 넣으면 짧다. 매개변수 k 로 Mₐ 2, 통찰 없음. 「중」 출발 ★2 유지. 전사 답 8 재계산 일치.
  tier: star_2
  mechanism_primary: "x=0 대입 → (y-3)²+(z-2)²=13-k → π(13-k)=5π → k=8"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$8$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0419.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "1차항 계수·평면·넓이 값을 바꿀 수 있음. 제약: 교선 원의 반지름² = (평면 안 두 좌표 제곱합) − k > 0, 그리고 구 자체의 r² = (세 좌표 제곱합) − k > 0 도 만족(k 상한). 넓이는 π 의 정수배로."
    creative: "(1) 넓이 대신 「교선 원이 원점을 지날 때 k」(★2) (2) 두 좌표평면과의 교선 넓이 비를 주고 두 상수 결정(0447 골조 · ★3) (3) 「구가 yz평면과 만나도록 하는 k 의 범위」로 바꾸면 부등식 · T-경계 ★2."
```

```yaml
- id: RPM-GEO-0420
  page: 65
  vendor_label: "유형 14 구와 좌표평면의 교선"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    반지름 5 이고 zx평면과의 교선이 원 (x-2)²+(z-3)²=16 인 구 두 개의 중심 사이의 거리. 주관식.
  category: "교선 원의 중심 (2,·,3) = 구 중심의 정사영 → 중심 (2,b,3) → 25-b²=16 → b=±3 → 두 중심 거리 6"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구와 좌표평면의 교선 — 교선 원에서 구의 중심 역추적"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    구의 중심을 (2,b,3) 으로 두면 zx평면까지 거리 |b|, 교선 반지름 4 → 25-b²=16 → b=±3. 두 중심 (2,3,3), (2,-3,3) 의 거리 6. 「교선 → 구」 역방향이지만 관계식 R²=r²+d² 에 미지수 하나를 넣는 표준 미정계수라 통찰로 세지 않음(BW 판별 기준의 「단순 미지수 대입」). 「중」 출발 ★2, M_total 5 → 유지.
  tier: star_2
  mechanism_primary: "중심 (2,b,3) → R²=r²+b² ⇒ 25=16+b² → b=±3 → 두 중심 거리 6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$6$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0420.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "반지름 R·교선 반지름 r·교선 중심·평면을 바꿀 수 있음. 제약: R²−r² 이 완전제곱수(5²−4²=9)가 아니면 답이 2√(R²−r²) 로 근호. R > r 필수. 「두 개 존재」 문구는 ± 를 암시하므로 유지."
    creative: "(1) 두 구 중 한쪽만(중심의 y좌표가 양수) 지정해 구의 방정식을 쓰게 하기(★2) (2) 두 구가 동시에 다른 평면과 만나는 교선 넓이 비교(★3) (3) 교선 원 대신 「zx평면에 접한다」로 바꾸면 d=R · 0438 골조 ★2."
```

```yaml
- id: RPM-GEO-0421
  page: 65
  vendor_label: "유형 14 구와 좌표평면의 교선"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    구 x²+y²+z²+2x-4y-4z+4=0 과 xy평면의 교선 원을 밑면으로 하고 이 구에 내접하는 원기둥의 부피. 5지선다.
  category: "중심 (-1,2,2)·r²=5 → z=0 교선 반지름 1 → 내접 원기둥 높이 = 2×(중심~xy평면 거리)=4 → 부피 π·1²·4"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 3
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "구에 내접하는 원기둥을 중심을 지나는 단면(원에 내접한 직사각형)으로 옮겨 높이가 중심에서 밑면까지 거리의 2배임을 봄"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "구와 좌표평면의 교선 — 교선 원을 밑면으로 하는 내접 원기둥"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    중심 (-1,2,2), r²=1+4+4-4=5. z=0 대입 → (x+1)²+(y-2)²=1, 밑면 반지름 1. 윗면은 중심에 대해 밑면과 대칭인 평면 z=4 의 교선이므로 높이 4, 부피 4π. 높이를 「중심까지 거리의 2배」로 보는 단면 전환(RT d1)이 없으면 막힘. 「상중」 출발 ★3 · 통찰 1 → ★3 유지.
  tier: star_3
  mechanism_primary: "z=0 교선 반지름 1 → 높이 = 2·(중심 z좌표) = 4 → V=π·1·4=4π"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "①"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0421.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구의 계수를 바꿔 중심 (p,q,d)·반지름 R 조정. 제약: 밑면 반지름² = R²−d² > 0, 높이 2d, 부피 π(R²−d²)·2d 가 선택지와 맞게 정수·π 로. 좌표평면을 yz·zx 로 바꾸면 d 는 해당 축 좌표."
    creative: "(1) 원기둥 대신 「밑면이 교선 원인 내접 원뿔의 부피」(꼭짓점이 구 위 · 높이 R+d · ★3) (2) 원기둥 옆면 넓이(★3) (3) 반지름 R 을 매개변수로 두고 부피 최대인 R(미분 · 다른 단원 XU · ★4)."
```

### 유형 UP 15 구에 그은 접선의 길이

```yaml
- id: RPM-GEO-0422
  page: 66
  vendor_label: "유형 UP 15 구에 그은 접선의 길이"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형 UP"
  summary: |
    점 P(1,2,3) 에서 구 (x+3)²+(y+1)²+(z+2)²=10 에 그은 접선의 길이. 5지선다.
  category: "중심 C(-3,-1,-2) · PC²=50 → 접선 길이 √(PC²-r²)=√40"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구에 그은 접선의 길이 √(PC²−r²)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    접점 T 에 대해 삼각형 PTC 가 직각이므로 PT²=PC²-r²=50-10=40, PT=2√10. 공식 대입 두 단계. 유형 UP 대표문제 출발 ★3 이지만 통찰 0·M_total 5 → −1 조정 ★2(원의 접선 길이와 같은 골조를 공간에 옮긴 정도).
  tier: star_2
  mechanism_primary: "PC²=(1+3)²+(2+1)²+(3+2)²=50 → PT=√(50-10)=2√10"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0422.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "P·중심·r² 을 바꿀 수 있음. 제약: PC² > r²(P 가 구 밖), PC²−r² 이 선택지 꼴(2√10 등)로 정리. 선택지에 √(PC²)·√(r²) 같은 오답 후보 포함."
    creative: "(1) 접선 길이를 주고 r 또는 상수 역산(0423 골조 · ★2) (2) 접점의 자취 원의 넓이(0424 · ★3) (3) 두 점에서 그은 접선 길이가 같을 조건으로 점의 자취(평면)를 묻기(★3~4 · RT)."
```

```yaml
- id: RPM-GEO-0423
  page: 66
  vendor_label: "유형 UP 15 구에 그은 접선의 길이"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형 UP"
  summary: |
    점 A(3,2,3) 에서 구 x²+y²+z²-2x+4y+k=0 에 그은 접선의 길이가 √13 일 때 상수 k. 서술형 주관식.
  category: "중심 (1,-2,0)·r²=5-k → AC²=29 → 29-(5-k)=13 → k"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구에 그은 접선의 길이 √(PC²−r²)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    일반형을 정리하면 중심 (1,-2,0), r²=1+4-k=5-k. AC²=4+16+9=29 이므로 접선 길이² 29-(5-k)=24+k=13 → k=-11(r²=16>0 확인). 0422 골조에 매개변수 k 만 얹은 역산. 「중」 출발 ★2 · 통찰 0·M_total 6 → ★2 유지(유형 UP 구역이지만 level 「중」을 우선).
  tier: star_2
  mechanism_primary: "중심 (1,-2,0)·r²=5-k → AC²=29 → 24+k=13 → k=-11"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$-11$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0423.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A·1차항 계수·접선 길이를 바꿀 수 있음. 제약: 구해진 k 에 대해 r² = (중심 제곱합) − k > 0 (T-범위), 접선 길이² = AC² − r² 가 양수. 서술형이므로 중간 식이 자연스럽게 나오는 정수 조합."
    creative: "(1) A 를 축 위에서 움직이게 하고 「접선의 길이가 최소가 되는 A 의 위치」(★3) (2) k 의 범위(구가 존재하고 A 가 구 밖)로 바꾸면 부등식 두 개 · ★3 (3) 접선 길이 조건 두 점을 주고 상수 두 개 결정(연립 · ★3)."
```

```yaml
- id: RPM-GEO-0424
  page: 66
  vendor_label: "유형 UP 15 구에 그은 접선의 길이"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    점 P(-2,-1,1) 에서 구 (x+4)²+(y-1)²+(z+3)²=6 에 그은 접선들의 접점이 나타내는 도형(원)의 넓이. 5지선다.
  category: "PC=2√6 · 접선 길이 √(24-6)=3√2 → 접점 원의 반지름 = 직각삼각형 PTC 의 빗변에 내린 수선 = r·PT/PC → 넓이"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "접점의 자취를 「중심을 지나는 단면의 직각삼각형 PTC 에서 T 가 빗변 PC 에 내린 수선의 발을 중심으로 도는 원」으로 전환하고, 반지름을 직각삼각형 넓이 두 방법(½·r·PT = ½·PC·h)으로 읽음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "구에 그은 접선의 접점의 자취(원)의 넓이"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    C(-4,1,-3), PC²=4+4+16=24, PT²=24-6=18. 접점들은 PC 에 수직인 원 위에 있고 그 반지름 h 는 PT·CT=PC·h 에서 h=3√2·√6/(2√6)=3√2/2, 넓이 (9/2)π. 접점 자취를 단면 직각삼각형으로 옮기는 RT d2 가 핵심이며 근호 계산도 있음(Mₖ 2). 「상중」 출발 ★3 · 통찰 1(d2)·M_total 7 → ★3 유지(★4 후보로는 통찰 수 부족).
  tier: star_3
  mechanism_primary: "PC²=24·PT²=18 → 접점 원 반지름 h=r·PT/PC=3√2/2 → 넓이 πh²=9π/2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0424.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "P·중심·r² 을 바꿀 수 있음. 제약: PC² > r², 반지름 h² = r²(PC²−r²)/PC² 이 유리수(여기서 6·18/24=9/2)가 되도록 조합. 선택지는 h² 의 π 배 근처 분수."
    creative: "(1) 접점 원의 중심 좌표(P 에서 C 방향으로 PT²/PC 만큼 · ★3~4) (2) 접점 원과 P 가 만드는 원뿔의 부피(★4 · 높이 PT²/PC 계산 추가) (3) P 가 좌표축 위를 움직일 때 접점 원 넓이의 최대(★4 · BW)."
```

### 유형 UP 16 구 밖의 점과 구 위의 점 사이의 거리

```yaml
- id: RPM-GEO-0425
  page: 66
  vendor_label: "유형 UP 16 구 밖의 점과 구 위의 점 사이의 거리"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형 UP"
  summary: |
    점 A(1,0,2) 와 구 x²+y²+z²+2x+2y+4z+5=0 위를 움직이는 점 P 사이 거리의 최댓값 M, 최솟값 m 에 대한 Mm. 5지선다.
  category: "중심 C(-1,-1,-2)·r=1 → AC=√21 → M=AC+r, m=AC-r → Mm=AC²-r²"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구 밖의 점과 구 위의 점 사이의 거리의 최대·최소 (d±r)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    일반형 정리 → 중심 (-1,-1,-2), r²=1+1+4-5=1. AC²=4+1+16=21 로 A 는 구 밖. M=√21+1, m=√21-1, 곱 21-1=20. 「거리의 최대·최소 = 중심 거리 ± 반지름」 공식 적용이며 Mm 은 합차 공식으로 근호가 사라진다. 유형 UP 대표 출발 ★3, 통찰 0·M_total 5 → −1 조정 ★2.
  tier: star_2
  mechanism_primary: "중심 (-1,-1,-2)·r=1 → AC=√21 → (√21+1)(√21-1)=20"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0425.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A·구의 계수를 바꿀 수 있음. 제약: AC > r(A 가 구 밖 — 안이면 m=r−AC 로 부호가 뒤집힘 · T-부호), Mm=AC²−r² 은 정수로 떨어지므로 AC 가 근호여도 무방. r² > 0 확인."
    creative: "(1) A 를 구 안에 두어 m=r−AC 로 바꾸면 케이스 판단이 생겨 MI 성격 ★3 (2) M+m(=2AC) 또는 M−m(=2r) 을 물으면 ★1~2 (3) A 가 좌표축 위를 움직일 때 최솟값의 최소(★3 · 중심에서 축까지 거리)."
```

```yaml
- id: RPM-GEO-0426
  page: 66
  vendor_label: "유형 UP 16 구 밖의 점과 구 위의 점 사이의 거리"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    중심 C(-1, 2√2, 4) 이고 z축에 접하는 구 위의 점 P 와 원점 O 사이 거리의 최댓값. 5지선다.
  category: "z축에 접함 ⇒ r = 중심에서 z축까지 거리 √(1+8)=3 → OC=5 → 최댓값 OC+r"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구 밖의 점과 구 위의 점 사이의 거리의 최대·최소 (d±r)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    z축에 접하므로 반지름은 중심의 x, y 좌표로 √((-1)²+(2√2)²)=3. OC=√(1+8+16)=5 > 3 이므로 O 는 구 밖, 최댓값 5+3=8. 「축에 접하는 구의 반지름」과 「d+r」 두 표준 사실의 결합. 「중」 출발 ★2 · 통찰 0·M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "r = √(x_C²+y_C²) = 3 → OC = 5 → 최댓값 5+3 = 8"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0426.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "중심 좌표·접하는 축을 바꿀 수 있음. 제약: 축까지 거리(두 좌표 제곱합)와 OC 가 둘 다 정수가 되도록 피타고라스 조합(1+8=9, 9+16=25 처럼). 2√2 같은 무리수 좌표는 제곱합을 정수로 만드는 장치."
    creative: "(1) 「좌표평면에 접하는 구」로 바꾸면 r=|한 좌표| (★2) (2) 최댓값을 주고 중심의 미지 좌표 역산(★3 · BW) (3) 원점 대신 다른 축 위의 점을 움직이게 해 두 점 모두 움직이는 최소(★3)."
```

```yaml
- id: RPM-GEO-0427
  page: 66
  vendor_label: "유형 UP 16 구 밖의 점과 구 위의 점 사이의 거리"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    구 x²+y²+z²=1 위의 점 P 와 구 (x-2)²+(y-1)²+(z-2)²=1 위의 점 Q 에 대해 PQ 의 최댓값 M, 최솟값 m 의 곱 Mm. 주관식.
  category: "두 중심 거리 d=3 · 반지름 1, 1 → M=d+r₁+r₂=5, m=d-r₁-r₂=1 → Mm"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 구 위의 점 사이의 거리의 최대·최소 (d±r₁±r₂)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    중심 O 와 (2,1,2) 의 거리 √(4+1+4)=3 이 반지름 합 2 보다 크므로 두 구는 떨어져 있고, 최대 3+1+1=5, 최소 3-1-1=1, 곱 5. 두 구가 만나지 않음을 확인하는 T-범위 하나. 「중」 출발 ★2 · 통찰 0·M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "중심 거리 3 > 1+1 → M=3+2=5, m=3-2=1 → Mm=5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$5$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0427.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 중심·두 반지름을 바꿀 수 있음. 제약: 중심 거리 d > r₁+r₂(떨어진 두 구)여야 m=d−r₁−r₂ 가 성립 — d ≤ r₁+r₂ 이면 m=0 이 되어 골조가 깨짐. d 가 정수가 되는 좌표(4+1+4=9)."
    creative: "(1) 한 구가 다른 구 안에 있게 두면 m=r₁−d−r₂ 로 케이스가 바뀌어 MI d1 ★3 (2) 두 구가 접하도록 하는 반지름 조건(★2) (3) 한 구를 일반형으로 주어 정리를 추가(0443 골조 · ★2)."
```

```yaml
- id: RPM-GEO-0428
  page: 66
  vendor_label: "유형 UP 16 구 밖의 점과 구 위의 점 사이의 거리"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    구 x²+y²+z²+4x-8y+8z+32=0 위의 점 P(a,b,c) 에 대해 a²+b²+c² 의 최댓값. 주관식.
  category: "a²+b²+c² = OP² → 중심 (-2,4,-4)·r=2 → OC=6 → OP 최대 8 → 64"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "식 a²+b²+c² 을 「원점과 P 사이 거리의 제곱」으로 읽어 구 위의 점과 원점 사이 거리의 최대 문제로 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "구 밖의 점과 구 위의 점 사이의 거리의 최대·최소 (d±r)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    a²+b²+c²=OP² 로 보는 순간 0425 골조. 중심 (-2,4,-4), r²=4+16+16-32=4, OC=6 > 2 → OP 최대 6+2=8 → 64. 식을 거리로 옮기는 RT d1 이 전부이고 계산은 가벼워 실질은 ★2~3 경계. 「상중」 출발 ★3 · 통찰 1 → ★3 유지.
  tier: star_3
  mechanism_primary: "a²+b²+c²=OP² → OC=6·r=2 → OP_max=8 → 64"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$64$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0428.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구의 계수를 바꿀 수 있음. 제약: OC(중심 거리)와 r 이 정수가 되는 조합(4+16+16=36), 원점이 구 밖(OC > r)이어야 최솟값도 (OC−r)² 로 함께 물을 수 있음. 상수항은 r² > 0 유지."
    creative: "(1) (a-1)²+(b-2)²+c² 처럼 다른 점까지의 거리 제곱으로 바꾸면 기준점 인식 추가 ★3 (2) a²+b²+c² 의 최솟값과 최댓값의 합(★3) (3) a+b+c 의 최댓값으로 바꾸면 평면과 구의 접점(교육과정 밖 도구 · 주의)."
```

### 시험에 꼭 나오는 문제

```yaml
- id: RPM-GEO-0429
  page: 67
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    그림의 직육면체(한 꼭짓점이 원점, 모서리가 축에 평행)에서 A(0,-4,3), B(5,0,3) 일 때 꼭짓점 P 의 yz평면에 대한 대칭점 (a,b,c) 에 대해 a+b+c. 주관식.
  category: "그림에서 P 의 좌표 읽기 (5,-4,3) → yz평면 대칭 ⇒ x 부호 반전 → (-5,-4,3) → 합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "좌표평면·좌표축에 대한 대칭점"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    직육면체가 x∈[0,5], y∈[-4,0], z∈[0,3] 을 차지하므로 P 는 A 의 y좌표와 B 의 x좌표를 갖는 (5,-4,3). yz평면 대칭은 x 부호만 바꿔 (-5,-4,3), 합 -6. 그림에서 좌표를 조립하는 단계 하나와 대칭 규칙 하나. 시험 구역 출발 ★2 · 통찰 0·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "P=(x_B, y_A, z)=(5,-4,3) → yz평면 대칭 (-5,-4,3) → 합 -6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$-6$"
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0429.png"
  latex: latex-bank/rpm-geo/items/0429.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A·B 의 좌표(모서리 길이 5·4·3)와 대칭 대상(xy·zx평면·축·원점)을 바꿀 수 있음. 제약: 그림 라벨(A·B·P·O 위치)이 고정이라 A 는 x=0 면, B 는 y=0 면 위 꼭짓점이어야 함. 부호는 그림의 축 방향(y 음의 방향으로 뻗음)과 일치."
    creative: "(1) P 의 x축·원점 대칭점까지 세 가지를 묻는 소문항(★1~2) (2) 대칭점과 P 사이 거리(★2) (3) 직육면체의 나머지 꼭짓점 중 조건(예: zx평면 위)에 맞는 것 고르기(★2)."
```

```yaml
- id: RPM-GEO-0430
  page: 67
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    A(1,-4,4), B(4,-4,0) 과 x축 위의 점 C 로 만든 삼각형 ABC 가 AC 를 빗변으로 하는 직각삼각형일 때 C 의 좌표. 주관식.
  category: "C(c,0,0) → 빗변 AC ⇒ ∠B=90° ⇒ AB²+BC²=AC² → c 의 일차방정식"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "좌표축 위의 점과 직각삼각형 조건(피타고라스)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    AB²=25, BC²=(c-4)²+16, AC²=(c-1)²+32. 25+(c-4)²+16=(c-1)²+32 는 c² 이 소거되어 일차식 → c=4, C(4,0,0). 「빗변 AC → 직각은 B」를 읽는 것이 유일한 판단이고 나머지는 거리 공식. 시험 구역 출발 ★2 · 통찰 0·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "C(c,0,0) → AB²+BC²=AC² → 25+(c-4)²+16=(c-1)²+32 → c=4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$(4,\,0,\,0)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0430.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A·B 좌표와 축을 바꿀 수 있음. 제약: 피타고라스 식에서 c² 이 소거되어 일차식이 되므로 해는 항상 하나 — 답이 정수가 되도록 좌표 선택. 직각의 위치(빗변 지정)가 바뀌면 이차식이 되어 두 해 가능(T-범위)."
    creative: "(1) 「∠A=90°」처럼 빗변을 BC 로 바꾸면 c 의 이차방정식 → 두 해 · MI d1 ★3 (2) 빗변 지정 없이 「직각삼각형」이라고만 하면 세 케이스 분기 MI ★3~4 (3) 이등변삼각형(CA=CB) 조건으로 바꾸면 ★2."
```

```yaml
- id: RPM-GEO-0431
  page: 67
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    A(2,-1,2), B(4,3,7) 에 대해 직선 AB 와 xy평면이 이루는 각 θ 의 cos θ. 5지선다.
  category: "AB=√45 · xy평면 정사영 A'B'=√20 → cos θ = A'B'/AB = 2/3"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "직선과 평면이 이루는 각을 「선분과 그 정사영의 길이비 cos θ = A'B'/AB」로 전환(z좌표를 지운 두 점 사이 거리)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "직선과 좌표평면이 이루는 각 — 정사영 길이비"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    AB=√(4+16+25)=3√5, 정사영 A'(2,-1,0), B'(4,3,0) 의 거리 2√5 → cos θ=2/3. 또는 z좌표 차 5 를 높이로 하는 직각삼각형에서 바로. 각을 정사영 길이비로 옮기는 RT d1 이 관건이며 계산은 한 줄. 시험 구역 출발 ★2 · 통찰 1(d1)·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "AB=3√5 → z 지운 정사영 A'B'=2√5 → cos θ=2√5/3√5=2/3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0431.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A·B 좌표와 평면(xy·yz·zx)을 바꿀 수 있음. 제약: AB² 과 정사영 길이² 이 같은 근호 인수(45=9·5, 20=4·5)를 갖도록 해야 cos θ 가 유리수. 선택지에 sin θ(=z차/AB)를 오답으로 포함."
    creative: "(1) sin θ 또는 tan θ 를 묻기(★2) (2) B 의 한 좌표를 미지수로 두고 cos θ 값을 주어 역산(★3 · BW) (3) 직선과 좌표축이 이루는 각(정사영을 축 위로 · ★2~3)."
```

```yaml
- id: RPM-GEO-0432
  page: 67
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    A(2,3,1), B(4,1,5) 와 zx평면 위를 움직이는 점 P 에 대해 AP+PB 의 최솟값. 주관식.
  category: "A, B 가 zx평면의 같은 쪽(y>0) → B 의 zx평면 대칭점 B'(4,-1,5) → 최솟값 AB'"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "한 점을 평면에 대해 대칭이동해 꺾인 경로 AP+PB 를 직선 AB' 로 펴는 대칭 활용(같은 쪽 확인 후)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "대칭을 이용한 두 선분 길이의 합의 최솟값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 점의 y좌표가 모두 양수라 같은 쪽 → B 를 y 부호 반전한 B'(4,-1,5) 에 대해 AP+PB=AP+PB' ≥ AB'=√(4+16+16)=6. 대칭점으로 경로를 펴는 SYM d1 이 골조이며 평면좌표의 같은 문제를 공간으로 옮긴 표준형. 시험 구역 출발 ★2 · 「중요」 +0 · 통찰 1(d1)·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "같은 쪽 확인 → B'=(4,-1,5) → 최솟값 AB'=√36=6"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$6$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0432.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A·B 좌표와 평면을 바꿀 수 있음. 제약: 두 점이 평면의 같은 쪽(해당 좌표 부호 같음)이어야 대칭이 필요하고, 대칭 후 거리 제곱이 완전제곱(4+16+16=36)이면 답이 정수. 반대쪽이면 그냥 AB 라 골조 붕괴(T-부호)."
    creative: "(1) 최솟값을 주는 P 의 좌표까지 묻기(내분점 · ★3) (2) P 가 좌표축 위를 움직이게 하면 축 대칭 · ★2~3 (3) AP+PB 대신 |AP−PB| 의 최댓값(반대쪽 점의 대칭 · ★3)."
```

```yaml
- id: RPM-GEO-0433
  page: 67
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["평가원 기출"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    A(a,b,-5), B(-8,6,c) 에 대해 AB 의 중점이 zx평면 위, AB 를 1:2 로 내분하는 점이 y축 위일 때 a+b+c. 5지선다. 평가원 기출.
  category: "중점 zx평면 위 ⇒ y좌표 0 → b · 내분점 y축 위 ⇒ x=z=0 → a, c → 합"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "내분점·중점이 좌표평면·좌표축 위에 있을 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    중점 y좌표 (b+6)/2=0 → b=-6. 내분점 ((-8+2a)/3, ·, (c-10)/3) 의 x, z 가 0 → a=4, c=10. 합 8. 「평면 위 ⇒ 한 좌표 0」 「축 위 ⇒ 두 좌표 0」 의 표준 번역 두 개와 내분 공식. 기출이지만 통찰 없음·M_total 6 → 시험 구역 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "중점 y=0 → b=-6 · 1:2 내분점 x=z=0 → a=4, c=10 → 합 8"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0433.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "고정 좌표(-5, -8, 6)·내분비·평면과 축의 조합을 바꿀 수 있음. 제약: 내분점 좌표 (m·x₂+n·x₁)/(m+n)=0 에서 미지수가 정수로 풀리도록 계수 선택(2a=8 처럼). 「서로 다른 두 점」 조건 유지."
    creative: "(1) 외분점 조건으로 바꾸면 부호 처리 T-부호 ★2 (2) 조건을 「중점이 원점」 하나로 줄이면 ★1 (3) 내분점이 특정 구 위에 있도록 하는 비 m:n 을 묻기(★3)."
```

```yaml
- id: RPM-GEO-0434
  page: 67
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    A(1,a,1), B(4,-5,b), C(c,-6,5), D(0,1,2) 를 꼭짓점으로 하는 사각형 ABCD 가 평행사변형일 때 abc. 5지선다.
  category: "평행사변형 ⇒ 두 대각선 AC, BD 의 중점 일치 → 좌표별 세 일차식 → a, b, c"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행사변형의 꼭짓점 — 대각선 중점 일치"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (1+c)/2=(4+0)/2 → c=3, (a-6)/2=(-5+1)/2 → a=2, (1+5)/2=(b+2)/2 → b=4, abc=24. 「평행사변형 ⇔ 대각선 중점 일치」는 이 유형의 표준 번역이라 통찰로 세지 않음. 꼭짓점 순서 ABCD 를 지켜 대각선을 AC·BD 로 잡는 것이 유일한 함정. 시험 구역 출발 ★2 · 통찰 0·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "AC 중점 = BD 중점 → c=3, a=2, b=4 → abc=24"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0434.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "고정 좌표와 미지수 위치를 바꿀 수 있음. 제약: 미지수가 세 꼭짓점에 하나씩 서로 다른 좌표축에 놓여야 좌표별로 일차식 하나씩 독립으로 풀림(같은 축에 둘 있으면 부정). 꼭짓점 순서(ABCD)를 명시."
    creative: "(1) 네 점 중 세 점을 주고 「평행사변형이 되는 네 번째 점 D 의 좌표」로 바꾸면 세 가지 D 가 나와 MI d1 ★3 (2) 평행사변형에 더해 마름모 조건(AB=AD)을 추가하면 CON 성격 ★3 (3) 대각선 교점의 좌표를 묻기(★2)."
```

```yaml
- id: RPM-GEO-0435
  page: 67
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["평가원 기출"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    AB=3, AD=3, AE=6 인 직육면체 ABCD-EFGH(그림)에서 삼각형 BEG 의 무게중심 P 에 대해 선분 DP 의 길이. 5지선다. 평가원 기출.
  category: "직육면체에 좌표 도입(E 원점) → B, E, G 좌표 → 무게중심 P(2,1,2) → D(0,3,6) 과의 거리"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "좌표가 없는 직육면체에 한 꼭짓점을 원점, 세 모서리를 축으로 하는 좌표를 도입해 무게중심·거리 계산으로 바꿈"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "공간도형에 좌표 도입 — 직육면체·무게중심·거리"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    E(0,0,0), F(3,0,0), H(0,3,0), A(0,0,6) 으로 두면 B(3,0,6), G(3,3,0), D(0,3,6). P=((3+0+3)/3, (0+0+3)/3, (6+0+0)/3)=(2,1,2), DP=√(4+4+16)=2√6. 좌표를 붙이는 RT d1 뒤에는 공식 두 번. 좌표 없이 풀면 사면체 안 길이를 따져야 해 훨씬 길다. 시험 구역 출발 ★2 · 통찰 1(d1)·M_total 5 → ★2(기출 +1 후보이나 좌표 도입 뒤는 공식 두 번이라 유지).
  tier: star_2
  mechanism_primary: "좌표 도입 E=O → B(3,0,6), E, G(3,3,0) 무게중심 P(2,1,2) → DP=√24=2√6"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0435.png"
  latex: latex-bank/rpm-geo/items/0435.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 모서리 길이(3·3·6)와 삼각형·기준점 선택을 바꿀 수 있음. 제약: 무게중심 좌표가 정수가 되도록 각 축 좌표 합이 3 의 배수, DP² 이 선택지 꼴(2√6 등)로 정리. 그림 라벨(ABCD-EFGH 배치)은 고정."
    creative: "(1) 무게중심 대신 삼각형 BEG 의 외심으로 바꾸면 연립 계산 급증 ★4 (2) 점 D 에서 평면 BEG 까지의 거리(사면체 부피 두 방법 · ★4) (3) 정육면체(모서리 모두 같음)로 바꾸면 대칭 SYM 으로 즉시 ★2."
```

```yaml
- id: RPM-GEO-0436
  page: 68
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    삼각형 ABC 의 세 변 AB, BC, AC 의 중점이 P(-1,1,-2), Q(-6,1,-1), R(a,b,c) 이고 무게중심이 G(-1,0,0) 일 때 a+b+c. 주관식.
  category: "무게중심(ABC) = 무게중심(PQR) → R = 3G − P − Q → (4,-2,3) → 합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「ABC 의 무게중심」 조건을 「중점삼각형 PQR 의 무게중심과 같다」는 등가 조건으로 바꿔 A, B, C 를 구하지 않고 R 을 바로 얻음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각형의 무게중심과 세 변의 중점의 관계"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    세 변의 중점이 만드는 삼각형의 무게중심은 원래 삼각형의 무게중심과 같으므로 (P+Q+R)/3=G → R=3G−P−Q=(-3+1+6, 0-1-1, 0+2+1)=(4,-2,3), 합 5. A, B, C 를 미지수로 두고 A+B=2P 등을 연립해도 같은 식이 나오며 Mₛ 만 늘어난다. 등가 조건 전환(EQV d1) 하나. 시험 구역 출발 ★2 · 통찰 1(d1)·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "G(ABC)=G(PQR) → R=3G−P−Q=(4,-2,3) → a+b+c=5"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$5$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0436.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "P·Q·G 좌표를 자유롭게 바꿀 수 있음(R=3G−P−Q 는 항상 정수). 제약: 세 점 P, Q, R 이 한 직선 위에 있지 않도록(퇴화 삼각형 방지) 확인. 묻는 값(a+b+c·abc)은 선택."
    creative: "(1) R 대신 꼭짓점 A 의 좌표를 묻기(A=3G−2Q · ★2~3) (2) 중점 두 개와 꼭짓점 하나를 주고 무게중심(★2) (3) 무게중심이 특정 평면 위에 있을 조건으로 미지수 하나 결정(★2)."
```

```yaml
- id: RPM-GEO-0437
  page: 68
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    실수 k 에 대해 구 x²+y²+z²+4x+ky-2z+1-k=0 의 부피의 최솟값. 주관식.
  category: "완전제곱 → r² = k²/4 + k + 4 = (k/2+1)² + 3 → 최소 r²=3 (k=-2) → 부피 (4/3)π(√3)³"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「부피의 최솟값」을 「반지름 제곱 r²(k) 의 최솟값」으로 옮겨 k 의 이차식 최솟값 문제로 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "구의 방정식이 되기 위한 조건·반지름의 최솟값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    중심 (-2, -k/2, 1), r²=4+k²/4+1-(1-k)=k²/4+k+4=(k/2+1)²+3. k=-2 에서 r²=3 이 최소(항상 양수라 구 조건 자동), 부피 (4/3)π·3√3=4√3π. 매개변수가 든 완전제곱과 (√3)³ 정리로 계산 부담 Mₖ 2, 기하량 → 이차식 최솟값 전환 RT d1. 시험 구역 · 「중요」 · 통찰 1·M_total 8 → ★3.
  tier: star_3
  mechanism_primary: "r²(k)=(k/2+1)²+3 → 최소 3 at k=-2 → V=(4/3)π·3√3=4√3π"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$4\sqrt{3}\pi$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0437.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "k 가 붙는 항(ky·상수 −k)의 계수와 고정 계수를 바꿀 수 있음. 제약: r²(k) 가 k 의 이차식이고 최솟값이 양수(구가 항상 존재)여야 함. 최솟값 r² 이 3 처럼 정수면 부피에 근호가 남고, 완전제곱수면 유리수 π 배."
    creative: "(1) 「구가 존재하도록 하는 k 의 범위」로 바꾸면 이차부등식 ★2 (2) 부피 최소일 때 구와 xy평면의 교선 넓이(★3) (3) 겉넓이 최솟값(4πr² · ★2~3) 또는 k 가 두 항에 걸쳐 나타나는 형태로 완전제곱 두 번(★3~4)."
```

```yaml
- id: RPM-GEO-0438
  page: 68
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    구 x²+y²+z²-2x-6y-2az+b=0 이 점 (3,4,1) 을 지나고 xy평면에 접할 때 a+b. 5지선다.
  category: "중심 (1,3,a)·r²=10+a²−b → xy평면 접함 ⇒ r²=a² → b=10 → 점 대입 → a=3"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "좌표평면에 접하는 구의 방정식 — 조건 연립"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    xy평면에 접함 ⇒ 반지름 = |중심의 z좌표| ⇒ 10+a²−b=a² → b=10. 점 (3,4,1) 대입 9+16+1-6-24-2a+10=0 → a=3, 합 13. 접함 조건이 a² 을 소거해 두 조건이 일차로 풀리는 깔끔한 구조. 「좌표평면 접함 ⇒ r=|좌표|」는 유형 구역의 표준 번역이라 통찰 미인정. 시험 구역 출발 ★2 · 통찰 0·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "접함 ⇒ r²=a² → b=10 → (3,4,1) 대입 → a=3 → 13"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0438.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지나는 점·고정 계수·접하는 평면을 바꿀 수 있음. 제약: 접하는 평면에 대응하는 좌표(여기선 z ↔ a)가 미지수여야 r²=a² 소거 구조가 유지되고, 점 대입 후 일차식이 정수해. r=|a| > 0 이므로 a≠0 확인(T-부호)."
    creative: "(1) 두 좌표평면에 동시에 접하는 구(r=|y|=|z| → 부호 조합 MI ★3) (2) 접하는 조건 대신 「xy평면과의 교선 반지름이 r/2」(★3) (3) 지나는 점 두 개 + 접함으로 미지수 셋(★3)."
```

```yaml
- id: RPM-GEO-0439
  page: 68
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    A(-2,5,1) 과 구 (x-4)²+(y+3)²+(z+7)²=16 위의 점 B 에 대해 AB 의 중점이 그리는 구의 중심 (a,b,c)·반지름 r 에 대해 a+b+c-r. 5지선다.
  category: "중점 M(x,y,z) → B=2M−A → 구에 대입 → (2x-2)²+… =16 → (x-1)²+(y-1)²+(z+3)²=4"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "자취를 「움직이는 점 B 를 자취 점 M 으로 표현해 구의 방정식에 대입」하는 역대입으로 전환(또는 A 중심 1/2 닮음으로 중심·반지름을 바로 읽음)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "선분의 중점의 자취 — 구"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    M(x,y,z) 이면 B(2x+2, 2y-5, 2z-1). 구에 넣고 4 로 나누면 (x-1)²+(y-1)²+(z+3)²=4, 중심 (1,1,-3), r=2 → 1+1-3-2=-3. 기하로는 A 를 중심으로 하는 1/2 닮음이라 중심은 A 와 구 중심의 중점, 반지름은 절반 — 이렇게 보면 한 줄. 역대입 자취 RT d1 + 전개 정리(Mₖ 2). 시험 구역 · 통찰 1·M_total 7 → ★3.
  tier: star_3
  mechanism_primary: "M=(A+B)/2 → B=2M−A 대입 → 중심 (A+C)/2=(1,1,-3)·r=2 → -3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0439.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A·구의 중심·반지름을 바꿀 수 있음. 제약: 자취 중심 (A+C)/2 가 정수가 되도록 A 와 C 의 좌표 합이 짝수, 반지름 r/2 가 정수면 r 은 짝수. 묻는 조합(a+b+c−r)은 선택지 변별용."
    creative: "(1) 중점 대신 AB 를 1:2 로 내분하는 점의 자취(닮음비 2/3 · ★3) (2) A 도 다른 구 위를 움직이게 하면 두 구의 합 성격 · ★4 (3) 자취 구와 원래 구가 만나는지 판정(★3)."
```

```yaml
- id: RPM-GEO-0440
  page: 68
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    구 (x-1)²+(y+2)²+z²=9 가 z축과 만나는 두 점 A, B 사이의 거리. 5지선다.
  category: "z축 ⇒ x=y=0 대입 → 1+4+z²=9 → z=±2 → AB=4"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구와 좌표축의 교점 — 두 교점 사이의 거리"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x=y=0 → z²=4 → z=±2, 거리 4. 0414 와 같은 골조에서 표준형이라 더 짧다. 시험 구역 출발 ★2 · 통찰 0·M_total 4 → −1 조정 ★1.
  tier: star_1
  mechanism_primary: "x=y=0 → z²=9−5=4 → z=±2 → AB=4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0440.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "중심·반지름·축을 바꿀 수 있음. 제약: r² − (축까지 거리²) 가 완전제곱수(9−5=4)면 정수 답, 아니면 2√(·). 양수여야 두 점에서 만남."
    creative: "(1) 「z축에 접하도록 하는 r」(★1) (2) 세 축 교점 거리의 대소 비교(★2) (3) 두 교점과 구의 중심이 만드는 삼각형 넓이(0417 골조 · ★3)."
```

```yaml
- id: RPM-GEO-0441
  page: 68
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    구 (x-1)²+(y-2)²+(z+2)²=5 와 xy평면의 교선 원 위의 점 P 와 점 A(5,2,4) 사이 거리의 최댓값. 주관식.
  category: "교선 원: 중심 (1,2,0)·반지름 1 → A 의 xy평면 수선의 발 A'(5,2,0) → A'P 최대 4+1=5 → AP=√(5²+4²)"
  M: {s: 3, k: 1, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "공간의 점과 평면 위 원의 거리를 「수선의 발 A' 에서 원까지의 평면 내 최대(d+r)와 높이 AA' 의 피타고라스」로 분해 — AP²=A'P²+AA'² 이라 A'P 최대일 때 AP 도 최대임을 봄"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "교선 원 위의 점과 공간의 점 사이의 거리의 최댓값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    z=0 → (x-1)²+(y-2)²=1, 중심 (1,2,0), 반지름 1. A 를 xy평면에 내린 A'(5,2,0) 과 원 중심의 거리 4 이므로 평면 안 최대 A'P=5, AP=√(25+16)=√41. 구 밖 점과의 거리(0425)로 착각해 AC+r 로 가면 오답. 평면 분해 RT d2 가 핵심. 시험 구역 · 통찰 1(d2)·M_total 6 → ★3.
  tier: star_3
  mechanism_primary: "교선 원 (1,2,0)·r=1 → A'(5,2,0) → A'P_max=4+1=5 → AP=√(25+16)=√41"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\sqrt{41}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0441.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구·A 를 바꿀 수 있음. 제약: 교선 반지름² = R² − d² > 0, A' 와 교선 중심 사이 거리 D 가 정수, (D+r)² + h² 가 깔끔한 근호. A 가 원의 평면 밖(높이 h≠0)이어야 골조 유지."
    creative: "(1) 최솟값(|D−r| 과 h 의 피타고라스 · D<r 이면 케이스 · MI ★3) (2) 원 위의 두 점과 A 로 만든 삼각형 넓이 최대(★4) (3) 교선을 zx평면으로 바꿔 좌표 처리만 변경(★3)."
```

```yaml
- id: RPM-GEO-0442
  page: 68
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    점 A(1,2,-1) 에서 구 x²+y²+z²+6x+4y+k=0 에 그은 접선의 길이가 5 일 때 상수 k. 5지선다.
  category: "중심 (-3,-2,0)·r²=13−k → AC²=33 → 33−(13−k)=25 → k=5"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구에 그은 접선의 길이 √(PC²−r²)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    중심 (-3,-2,0), r²=9+4-k=13-k, AC²=16+16+1=33. 접선 길이² 33-13+k=25 → k=5(r²=8>0). 0423 과 같은 골조·같은 난이도. 시험 구역 출발 ★2 · 통찰 0·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "AC²=33 · r²=13−k → 20+k=25 → k=5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0442.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A·계수·접선 길이를 바꿀 수 있음. 제약: 구한 k 에서 r² > 0, 접선 길이² = AC² − r² > 0. 선택지 다섯 정수는 k 근처로."
    creative: "(1) 접선 길이 조건을 「A 가 구 위에 있다(접선 길이 0)」로 바꾸면 ★1 (2) 접선 길이의 범위 조건으로 k 의 범위(★2~3) (3) 접점 자취 원의 반지름까지 묻기(0424 · ★3)."
```

```yaml
- id: RPM-GEO-0443
  page: 68
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    구 x²+y²+z²=9 위의 점 P 와 구 x²+y²+z²-10x-8y-6z+49=0 위의 점 Q 사이 거리의 최솟값. 주관식.
  category: "두 번째 구 중심 (5,4,3)·r=1 → 중심 거리 5√2 > 3+1 → 최솟값 5√2−3−1"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 구 위의 점 사이의 거리의 최대·최소 (d±r₁±r₂)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    일반형 정리 → 중심 (5,4,3), r²=25+16+9-49=1. 중심 거리 √50=5√2≈7.07 이 반지름 합 4 보다 크므로 떨어진 두 구, 최솟값 5√2-4. 0427 과 같은 골조에 일반형 정리와 근호 답만 추가. 시험 구역 출발 ★2 · 통찰 0·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "중심 O, (5,4,3) · r 3, 1 → d=5√2 > 4 → m=5√2−4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$5\sqrt{2}-4$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0443.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 구의 중심·반지름을 바꿀 수 있음. 제약: 중심 거리 d > r₁+r₂ 유지(아니면 최솟값 0 또는 안쪽 케이스), r² = 중심 제곱합 − 상수 > 0. d 를 정수로 두면 답이 정수."
    creative: "(1) 최댓값 M 도 함께 물어 M+m=2d(★2) (2) 두 번째 구가 첫 구 안에 들어가도록 상수를 바꾸면 최솟값 = r₁−(d+r₂) 케이스 MI ★3 (3) 반지름을 매개변수로 두고 「두 구가 만나지 않을 조건」(★2)."
```

### 서술형 주관식

```yaml
- id: RPM-GEO-0444
  page: 69
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    세 점 A(-1,1,1), B(1,-4,2), C(-1,2,0) 에서 같은 거리에 있는 zx평면 위의 점 P 에 대해 OP 의 길이. 서술형.
  category: "P(x,0,z) → PA²=PC² 로 z · PA²=PB² 로 x → P(5,0,-1) → OP=√26"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "세 점에서 같은 거리에 있는 좌표평면 위의 점"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    P(x,0,z) 로 두고 PA²=PC² → 1+(z-1)²=4+z² → z=-1, PA²=PB² 에 z=-1 대입 → (x+1)²+5=(x-1)²+25 → x=5. OP=√(25+1)=√26. 두 등거리 조건이 각각 일차식으로 떨어지는 표준 절차이나 전개·정리가 서술형 분량(Mₖ 2). 서술형 구역 출발 ★3 · 통찰 0·M_total 7 → ★3 유지(절차형 ★3).
  tier: star_3
  mechanism_primary: "P(x,0,z) → PA²=PC² ⇒ z=-1 → PA²=PB² ⇒ x=5 → OP=√26"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\sqrt{26}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0444.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A·B·C 좌표와 평면을 바꿀 수 있음. 제약: 세 점이 한 직선 위에 있지 않고, 두 등거리 식에서 이차항이 소거되어 일차 연립이 정수해를 갖도록 좌표 선택. 세 점이 평면에 수직인 한 직선 위에 있으면 해가 무한(퇴화)."
    creative: "(1) 평면 제약을 「x축 위의 점」으로 바꾸면 미지수 하나·조건 둘이라 모순 여부 검토 · VF 성격 ★3 (2) 네 점에서 등거리인 점(구의 중심 · 미지수 셋 · ★3~4) (3) 등거리 대신 PA=PB 이고 PC 최소(★4)."
```

```yaml
- id: RPM-GEO-0445
  page: 69
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    점 (2,4,1) 에서 x축, y축, z축에 내린 수선의 발 A, B, C 에 대해 사각형 ABCD 가 평행사변형이 되는 점 D 의 좌표. 서술형.
  category: "수선의 발 A(2,0,0), B(0,4,0), C(0,0,1) → 평행사변형 ABCD ⇒ D=A+C−B=(2,-4,1)"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행사변형의 꼭짓점 — 대각선 중점 일치"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    축에 내린 수선의 발은 그 축 좌표만 남긴 점. 평행사변형 ABCD 는 대각선 AC·BD 의 중점이 같으므로 D=A+C−B=(2,-4,1). 두 표준 사실만 잇는 짧은 문항이라 서술형 구역 출발 ★3 에서 통찰 0·M_total 5 → −1 조정 ★2. 꼭짓점 순서(D 는 B 의 맞은편)가 유일한 함정.
  tier: star_2
  mechanism_primary: "A(2,0,0)·B(0,4,0)·C(0,0,1) → D=A+C−B=(2,-4,1)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$(2,\,-4,\,1)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0445.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "원래 점의 좌표(0 이 아닌 세 수)를 바꾸면 A·B·C 가 그대로 따라오고 D=(p,−q,r). 제약: 세 좌표가 모두 0 이 아니어야 A, B, C 가 서로 다름. 순서 ABCD 명시."
    creative: "(1) 수선의 발을 좌표평면에 내리게 바꾸면 A(2,4,0) 등 · ★2 (2) 「사각형 ABDC」처럼 순서를 바꿔 D 의 위치가 달라지게(★2 · T-표기) (3) 평행사변형 ABCD 의 넓이(세 변 길이와 코사인법칙 · ★4)."
```

```yaml
- id: RPM-GEO-0446
  page: 69
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "서술형"
  summary: |
    A(5,3,-2), B(-3,3,6), C(-15,3,18) 에 대해 AB 를 3:1 로 내분하는 점 P 와 BC 를 1:2 로 내분하는 점 Q 를 지름의 양 끝으로 하는 구의 방정식. 서술형.
  category: "내분점 P(-1,3,4), Q(-7,3,10) → 중심 = PQ 중점 (-4,3,7) · r²=(PQ/2)²=18 → 구"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "내분점을 지름의 양 끝으로 하는 구의 방정식"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    P=(A+3B)/4=(-1,3,4), Q=(2B+C)/3=(-7,3,10). 중점 (-4,3,7), PQ²=36+0+36=72 → r²=18. (x+4)²+(y-3)²+(z-7)²=18. 내분 공식 두 번과 지름 → 구 변환의 세 절차 연결. 세 점이 한 직선 위(y=3 · 방향 (-1,0,1))라 P, Q 도 같은 직선 위이지만 풀이에는 영향 없음. 서술형 · 「중요」 · 통찰 0·M_total 7 → ★3 유지.
  tier: star_3
  mechanism_primary: "P=(A+3B)/4 · Q=(2B+C)/3 → 중점 (-4,3,7) · r²=PQ²/4=18 → 구"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$(x+4)^2+(y-3)^2+(z-7)^2=18$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0446.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A·B·C 와 내분비를 바꿀 수 있음. 제약: 내분점이 정수(가중합이 분모의 배수)이고 PQ² 이 4 의 배수면 r² 정수. 세 점의 y좌표를 같게 두면 계산이 한 축 줄어 서술형 분량 유지."
    creative: "(1) 외분점을 섞어 부호 처리 추가(★3) (2) 이 구와 zx평면(y=0)의 교선 반지름(★3 · 0418 골조 결합) (3) 「구가 원점을 지나도록 하는 내분비」로 바꾸면 BW ★4."
```

```yaml
- id: RPM-GEO-0447
  page: 69
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    구 x²+y²+z²+8x-6y-2kz+9=0 이 xy평면·yz평면과 만나 생기는 두 원의 넓이의 비가 4:1 일 때 양수 k. 서술형.
  category: "중심 (-4,3,k)·r²=16+k² → xy평면 교선 r₁²=r²−k²=16 · yz평면 교선 r₂²=r²−16=k² → 16:k²=4:1 → k=2"
  M: {s: 3, k: 1, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구와 좌표평면의 교선 — 교선 원의 반지름(r²−d²)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    완전제곱 → 중심 (-4,3,k), r²=16+9+k²-9=16+k². xy평면(z=0) 교선 반지름² = r²−k² = 16, yz평면(x=0) 교선 반지름² = r²−16 = k². 넓이비 16:k²=4:1 → k²=4 → k=2(양수). 매개변수를 품은 교선 반지름 두 개를 비교하는 절차형 · Mₐ 2. 서술형 출발 ★3 · 통찰 0·M_total 7 → ★3 유지.
  tier: star_3
  mechanism_primary: "r²=16+k² → 교선 r₁²=16 (z=0), r₂²=k² (x=0) → 16/k²=4 → k=2"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$2$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0447.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "고정 계수(8, −6, 9)·비·평면 쌍을 바꿀 수 있음. 제약: 두 교선 반지름² 이 모두 양수, 비에서 k² 이 완전제곱수. 양수 조건이 없으면 k=±2 (T-부호). 상수항이 y 의 완전제곱을 정확히 상쇄(9)하는 설계가 계산을 줄임."
    creative: "(1) 세 좌표평면 교선 넓이의 합으로 바꾸기(★3) (2) 비 대신 「두 교선 원의 넓이 합이 최소인 k」(이차식 최소 · ★3~4) (3) 한 평면에는 접하고 다른 평면과의 교선 넓이 조건(★3 · 0438 결합)."
```

### 실력 Up

```yaml
- id: RPM-GEO-0448
  page: 69
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    한 모서리가 6 인 정사면체 OABC 의 면 OBC 가 xy평면 위에 있고 B 가 x축 위에 있을 때(그림), 꼭짓점 A(a,b,c)(a,b,c>0) 에 대해 a²−b²+c². 5지선다.
  category: "O 원점 · B(6,0,0) · C(3,3√3,0) → A 는 무게중심 (3,√3,0) 위 높이 2√6 → (3,√3,2√6) → 9−3+24"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "정사면체를 좌표로 옮기며 밑면 정삼각형의 세 번째 꼭짓점 C(3,3√3,0) 과 「꼭짓점 A 의 발 = 밑면 무게중심, 높이 = √(6²−(2√3)²)」 를 조립"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "공간도형에 좌표 도입 — 정사면체 꼭짓점의 좌표"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    그림대로 O 원점, B(6,0,0), C 는 xy평면 제1사분면에 (3,3√3,0). A 의 발은 정삼각형 OBC 의 무게중심 (3,√3,0), 높이는 6²−(외접원 반지름 2√3)²=24 → c=2√6. a²−b²+c²=9−3+24=30. 정사면체의 높이·무게중심 위치를 좌표로 조립하는 RT d2 가 핵심이고 근호 계산(Mₖ 2). 실력 Up 출발 ★4 · 통찰 1(d2)·M_total 7 → ★4 유지(★3 후보와의 경계 — 정사면체 높이를 외우고 있으면 짧음).
  tier: star_4
  mechanism_primary: "B(6,0,0)·C(3,3√3,0) → 무게중심 (3,√3,0) → 높이 2√6 → A(3,√3,2√6) → 30"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "④"
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0448.png"
  latex: latex-bank/rpm-geo/items/0448.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모서리 길이 6 을 바꾸면 A=(l/2, l/(2√3), l√(2/3)) 로 비례 — l 이 6 의 배수면 좌표가 깔끔. 묻는 식(a²−b²+c² 등)은 근호를 없애는 조합으로. 그림 라벨(O 원점 · B x축 · C 제1사분면 · A 위)은 고정, a,b,c>0 조건 유지."
    creative: "(1) 정사면체 대신 「정삼각뿔(밑면 정삼각형, 옆모서리 길이 다름)」으로 바꾸면 높이를 피타고라스로 다시 계산 ★4 (2) 모서리 OA 의 중점과 BC 의 중점 사이 거리(★4 · 좌표로 즉시) (3) B 를 축 밖에 두고 「면 OBC 가 xy평면 위」만 주면 회전 자유도가 생겨 부정 — 라벨 고정 필요(변형 금지 지점)."
```

```yaml
- id: RPM-GEO-0449
  page: 69
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    A(2,0,a), B(5,0,a), C(5,5,b), D(2,5,b) 를 꼭짓점으로 하는 사각형 ABCD 의 평면과 xy평면이 이루는 각 θ 에 대해 cos θ=5/8 일 때 b−a (b>a). 주관식.
  category: "ABCD 는 AB∥x축인 직사각형 → 정사영 넓이 15 · 원래 넓이 3·BC → cos θ=5/BC=5/8 → BC=8 → 25+(b−a)²=64"
  M: {s: 3, k: 1, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "평면과 xy평면의 이면각을 「정사영 넓이비 cos θ = S'/S」 또는 「x축에 수직인 단면에서 BC 와 그 정사영(길이 5)이 이루는 각」으로 전환해 BC=8 을 얻음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "평면과 좌표평면이 이루는 각 — 정사영 넓이비"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    AB, DC 는 x축에 평행(길이 3), BC=DA=√(25+(b−a)²) 로 직사각형. xy평면 정사영은 3×5 직사각형(넓이 15)이므로 cos θ=15/(3·BC)=5/BC=5/8 → BC=8 → (b−a)²=39 → b−a=√39. 이면각을 정사영 넓이비(또는 단면의 선분 길이비)로 옮기는 RT d2 가 핵심이며, AB 가 xy평면과 평행해 각이 BC 방향으로만 생긴다는 관찰이 전제. 공간도형(03)의 정사영을 좌표에 얹은 결합이라 XU 로 볼 수도 있으나 같은 대단원이라 RT 로 둠. 실력 Up 출발 ★4 · 통찰 1(d2)·M_total 7 → ★4 유지.
  tier: star_4
  mechanism_primary: "직사각형 ABCD 정사영 넓이 15 → cos θ=15/(3·BC)=5/8 → BC=8 → (b−a)²=39"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\sqrt{39}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0449.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x 좌표 쌍(2,5)·y 폭 5·cos θ 값을 바꿀 수 있음. 제약: cos θ = (y 폭)/BC 이므로 BC = 폭/cos θ 가 근호 없이 나오려면 cos θ 분모가 폭의 약수와 맞아야 하고, (b−a)² = BC² − 폭² > 0. b>a 조건으로 부호 고정(T-부호)."
    creative: "(1) cos θ 대신 정사영 넓이를 주고 b−a(★3) (2) 사각형이 직사각형이 아닌 일반 사다리꼴(x 좌표 네 개 다름)로 바꾸면 정사영 넓이 계산 추가 ★4 (3) a, b 를 주고 θ 의 sin·tan(★3 · 역방향)."
```

```yaml
- id: RPM-GEO-0450
  page: 69
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    점 P(0,0,16) 의 빛으로 구 x²+y²+(z−6)²=25 의 그림자가 xy평면에 생길 때(그림) 그림자의 넓이. 주관식.
  category: "z축 대칭 → 그림자는 원점 중심 원 → z축 포함 단면: P(0,16)·원 중심 (0,6)·r=5 → 접선의 반각 sin θ=5/10 → θ=30° → 그림자 반지름 16 tan 30°"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "빛·구·그림자(원뿔)를 z축을 포함하는 평면 단면(점·원·두 접선·밑변)으로 옮기고, 접선이 z축과 이루는 각을 PC=10·r=5 의 직각삼각형에서 30° 로 읽음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "구의 그림자(광원 → 접선 원뿔) — 단면 전환"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    광원과 구의 중심이 모두 z축 위라 그림자는 원점 중심의 원. z축 단면에서 P(0,16), C(0,6), r=5 → PC=10, 접선과 z축의 각 θ 는 sin θ=5/10 → 30°. 그림자 반지름 R=16 tan 30°=16/√3 → 넓이 (256/3)π. 공간 → 단면 전환(RT d2)이 전부이고 이후는 삼각비(또는 닮음비) 한 줄. 실력 Up 출발 ★4 · 통찰 1(d2)·M_total 7 → ★4 유지(30° 가 나오도록 설계돼 계산이 가벼워 ★3 경계).
  tier: star_4
  mechanism_primary: "z축 단면 → PC=10·r=5 → 접선각 30° → R=16/√3 → π·256/3"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{256}{3}\pi$'
  answer_source: "답지"
  figure: "crop:fig-0450.png"
  latex: latex-bank/rpm-geo/items/0450.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "P 의 높이 h·중심 높이 d·반지름 r 을 바꿀 수 있음. 제약: 광원이 구 밖(h−d > r), 구가 xy평면 위(d > r), 그림자 반지름 R = h·r/√((h−d)²−r²) 이므로 (h−d)²−r² 이 완전제곱수(또는 30°·45°·60° 각)가 되도록 조합. 그림 라벨(P·O 위치 · z축 위 배치)은 고정."
    creative: "(1) 광원을 z축 밖 (p,0,h) 로 옮기면 그림자가 타원 — 이차곡선 XU · ★5 (2) 그림자 넓이를 주고 광원 높이 역산(★4 · BW) (3) 구가 xy평면에 접하도록 d=r 로 두고 그림자와 접점의 관계(★4)."
```

## 표본 판정 요약 (37문)

- ★ 분포: ★1 3 · ★2 21 · ★3 10 · ★4 3 · ★5 0
- 통찰형 14 · 절차형 23 · premium 0 — 통찰 유형: I-RT 12(0417 d1 · 0421 d1 · 0424 d2 · 0428 d1 · 0431 d1 · 0435 d1 · 0437 d1 · 0439 d1 · 0441 d2 · 0448 d2 · 0449 d2 · 0450 d2) · I-SYM 1(0432 d1) · I-EQV 1(0436 d1). 통찰 2개 이상인 문항 없음 → ★5 후보 없음.
- M_total 분포: 4 → 3문(0414·0418·0440) · 5 → 16문 · 6 → 9문 · 7 → 8문(0424·0439·0444·0446·0447·0448·0449·0450) · 8 → 1문(0437). Mₐ 2 는 미지 상수(r·k·a·b·c)를 품은 10문, Mₜ 는 전부 1(구 밖/안·같은 쪽·양수 조건 등 함정 0~1개).
- type_hint 상위: 「구와 좌표축의 교점 — 두 교점 사이의 거리」 4(0414·0415·0416·0440) · 「구와 좌표평면의 교선 — 교선 원의 반지름(r²−d²)」 3(0418·0419·0447) · 「구에 그은 접선의 길이 √(PC²−r²)」 3(0422·0423·0442) · 「구 밖의 점과 구 위의 점 사이의 거리의 최대·최소 (d±r)」 3(0425·0426·0428) · 「두 구 위의 점 사이의 거리의 최대·최소 (d±r₁±r₂)」 2(0427·0443) · 「평행사변형의 꼭짓점 — 대각선 중점 일치」 2(0434·0445) · 「공간도형에 좌표 도입」 계열 2(0435 직육면체 · 0448 정사면체) · 나머지 18개 유형명은 1건씩.
- 벤더 신호 대비: 유형 구역(15문)은 level 대로 출발해 −1 조정 4건(0414·0418 대표문제 M_total 4 → ★1 · 0422·0425 유형 UP 대표문제 M_total 5 → ★2). 시험 구역(15문)은 ★2 출발에서 ★1 1건(0440) · ★3 4건(0437·0439·0441 통찰 1·M_total 6 이상 · 0428 은 유형 구역) 조정. 서술형은 ★3 유지 3건 · −1 1건(0445). 실력 Up 은 ★4 유지 3건. 2단 이상 어긋난 문항 0건. 전사 답은 37문 모두 재계산과 일치.
- 그림: 4문(`crop:fig-0429.png` 직육면체 · `crop:fig-0435.png` 직육면체 ABCD-EFGH · `crop:fig-0448.png` 정사면체 OABC · `crop:fig-0450.png` 광원·구·그림자). 그림이 좌표 배치(어느 꼭짓점이 어느 축 위인지)를 정하므로 numeric 변형에서 라벨 고정.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다. 이 범위에 2단 이상 어긋난 문항은 없고, 아래는 1단 차·경계 기록이다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-GEO-0414 | 유형 13 대표문제인데 통찰 0·M_total 4 → ★1. 대표문제 = 유형의 기본형이라 카탈로그 base ★ 는 ★1~2 사이에서 결정 필요 | ★1 / ★2 |
| RPM-GEO-0418 | 0414 와 같은 사유(유형 14 대표문제 · z=0 대입 한 줄 · M_total 4) | ★1 / ★2 |
| RPM-GEO-0422 | 유형 UP 15 대표문제인데 공식 대입 두 단계(통찰 0·M_total 5) → −1 조정 ★2. 「유형 UP」 구역 신호와 1단 차 | ★2 / ★3 |
| RPM-GEO-0425 | 유형 UP 16 대표문제 · 통찰 0·M_total 5 → ★2. 0422 와 같은 사유 | ★2 / ★3 |
| RPM-GEO-0428 | 「상중」 라벨 ★3 이지만 RT d1(식 → 원점 거리) 하나 뒤는 0425 골조(M_total 5) — ★2 경계 | ★3 / ★2 |
| RPM-GEO-0435 | 평가원 기출·좌표 도입 RT d1 로 +1 후보(★3)이나 M_total 5·이후 공식 두 번이라 ★2 유지 | ★2 / ★3 |
| RPM-GEO-0445 | 서술형 구역 출발 ★3 이지만 두 표준 사실만 잇는 M_total 5·통찰 0 → ★2 | ★2 / ★3 |
| RPM-GEO-0444 · 0446 · 0447 | 서술형 구역 ★3 을 유지했으나 통찰 0 인 절차형(M_total 7) — 카탈로그에서 절차형 ★3 을 인정할지(M_total 7 기준) 결정 필요 | ★3 / ★2 |
| RPM-GEO-0448 · 0450 | 실력 Up ★4 유지(RT d2 하나·M_total 7). 통찰 1개뿐이라 §2.5 ★4 권장(저노출 유형 RT 있음)은 통과하지만 ★3 경계 | ★4 / ★3 |
| RPM-GEO-0449 | 정사영 넓이비(03 공간도형 도구)를 좌표에 얹은 결합 — I-RT 로 두었으나 카탈로그가 03·04 를 별 단원으로 보면 I-XU 로 재라벨 | ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위의 골조는 세 갈래로 반복된다. ① 「구의 중심·반지름 정리 → 좌표축/좌표평면 대입 → r²−d²」(유형 13·14 · 0440·0441·0447 — 10문), ② 「구 밖의 점(또는 다른 구) → 중심 거리 ± 반지름」(유형 UP 15·16 · 0442·0443 — 9문 · 접선 길이 √(PC²−r²) 도 같은 직각삼각형 PTC 에서 나옴), ③ 「공간도형·조건 → 좌표 도입 → 정사영·무게중심·거리」(0429~0436 · 0448~0450 — 시험 구역 앞부분과 실력 Up).
- 따로 세울 유형: 「구와 좌표축의 교점 — 두 교점 사이의 거리」(★1~2 · 표준형/일반형/지름 조건/반지름 역산 4 변형이 이미 있음) · 「구와 좌표평면의 교선 — r²−d²」(★1~2 · 넓이·둘레·상수 역산·두 평면 비(0447)까지 하나로) · 「구에 그은 접선의 길이」(★2 · 접점 자취 원(0424)은 RT d2 가 붙는 별도 ★3 유형) · 「구 밖의 점과 구 위의 점 거리 최대·최소」(★2 · 두 구(0427·0443)와 좌표식 최댓값(0428)은 같은 유형의 하위 변형) · 「교선 원 위의 점과 공간의 점 거리」(0441 · 평면 분해 RT d2 · ★3 — 0425 와 혼동하기 쉬워 독립 유형으로) · 「공간도형에 좌표 도입」(0435 직육면체 ★2 · 0448 정사면체 ★4 — 도형 종류로 층을 나눔) · 「직선·평면과 좌표평면이 이루는 각 — 정사영」(0431 ★2 · 0449 ★4 · 03 단원과의 경계 결정 필요) · 「구의 그림자(접선 원뿔)」(0450 · ★4 · 실력 Up 전용).
- 통합해도 될 유형: 「좌표평면에 접하는 구」(0438)·「교선 원에서 중심 역추적」(0420)은 모두 「중심에서 평면까지 거리 d 와 r 의 관계」 한 유형의 하위 변형(d=r / d²=R²−r²). 「내분점·중점 조건」(0433)·「평행사변형 꼭짓점」(0434·0445)·「무게중심 관계」(0436)·「대칭점」(0429)은 04-p1(좌표·내분점 구역)의 유형과 겹칠 가능성이 크므로 그쪽 카탈로그에 흡수하고 여기서는 참조만. 「대칭을 이용한 최단거리」(0432)와 「직각삼각형 조건」(0430)도 04-p1 유형의 재출제.
- ★4 base 후보는 실력 Up 3문(0448·0449·0450)뿐이며 모두 RT d2 단일 통찰이라, 카탈로그에서 ★4 를 유지하려면 「공간 → 단면/정사영 전환」을 저노출 통찰로 인정할지 결정해야 한다. 서술형 절차형 ★3(0444·0446·0447)은 계산량(M_total 7) 기준 ★3 인정 여부와 함께 정리할 것.
