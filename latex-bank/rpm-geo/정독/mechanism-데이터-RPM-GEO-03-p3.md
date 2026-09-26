---
name: mechanism-데이터-RPM-GEO-03-p3
description: RPM 기하 03 공간도형(3/3 · 유형 09~12 정사영 · 유형 UP 13~14 · 시험에 꼭 나오는 문제 · 서술형 · 실력 Up) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 기하 (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-geo
  section: 03 공간도형
  unit_code: GEO-03
  part: "3/3"
  extract_range: "50~55쪽 · 0308~0345"
  total_problems: 38
  unit_total: 100
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-geo/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-geo/items/<id>.tex
  image_source: latex-bank/rpm-geo/figures/ (crops.json)
---

# RPM 기하 · 03 공간도형 (3/3) 정독 데이터 (v1.0)

이 파일은 RPM 기하 03 공간도형의 마지막 범위(50~55쪽 · 0308~0345 · 38문항)를 다룬다. 앞쪽 12문은 정사영 유형 구역(유형 09 정사영의 길이 · 유형 10 정사영의 넓이(각이 주어진 경우) · 유형 11 정사영의 넓이로 각 구하기 · 유형 12 정사영의 넓이(각이 주어지지 않은 경우)), 이어서 유형 UP 13 수선의 길이 · 유형 UP 14 정사영의 실생활 활용 6문, 그리고 중단원 종합인 「시험에 꼭 나오는 문제」 13문 · 「서술형 주관식」 4문 · 「실력 Up」 3문이다. RPM 의 벤더 난이도 신호는 구역이 곧 층(교과서 / 유형 / 유형 UP / 시험에 꼭 나오는 문제 / 서술형 / 실력 Up)이고, 유형 구역 안에서는 첫 문항이 「대표문제」(level 없음), 나머지에 「중」「상중」 난이도가 붙는다. 종합 구역에는 level 이 없고 「중요」「서술형」「수능 기출」 태그만 있다. 이 범위는 0328(명제 참·거짓)을 빼면 전부 그림 문항이다.

★ 판정은 구역·level 출발점(유형 대표문제·level 없음 ★2, 중 ★2, 상중 ★3, 유형 UP ★3, 시험에 꼭 나오는 문제 ★2~3, 서술형 ★3, 실력 Up ★4)에서 M_total·통찰로 ±1 조정했다. 유형 구역에서는 통찰 0·M_total 4 인 공식 한 줄 문항(0308·0311·0312)만 −1 하고 M_total 5 이상은 출발점을 유지했다. 유형 UP 에 level 「중」이 붙은 문항은 level 을 출발점으로 삼되(0321 ★2) 통찰이 있으면 구역 출발점 ★3 을 지켰다(0324). 종합 구역(시험에 꼭 나오는 문제)은 절차형·M_total 6 이하를 ★2, 통찰형을 ★3 으로 나눴다. 서술형 구역은 ★3 출발이지만 통찰 0·M_total 5 의 표준 삼수선·정사영 사슬 세 문항(0339~0341)은 −1 하여 ★2 로 두고 분류 이슈 표에 기록했다. 실력 Up 세 문항은 통찰 1~2개로 ★4 를 유지했고, 통찰 2개인 0343·0345 의 +1 후보는 ★5 조건(통찰 3개 + SC/VF/SYM/XU)을 못 채워 올리지 않았다. M 축은 Mₛ 1 = 실질 단계 1~2, 2 = 3~5, 3 = 6 이상으로 읽었고 Mₜ 는 전부 1(함정 0~1개)이다. 이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 사슬) · `insights[]`(절차형이면 빈 배열) · `variation_notes`(numeric: 바꿔도 되는 수와 제약 / creative: 골조를 유지한 설정 변경과 ★ 변동 지점)를 채웠다. 정사영 문항의 골조는 「정사영 도형 찾기(꼭짓점의 정사영 → 도형) → 원래 넓이·정사영 넓이 → S' = S cos θ」 하나로 수렴하며, 종합 구역은 01·02 범위(위치 관계 · 삼수선 · 이면각)와 정사영을 섞는다.

## 문항 데이터

### 유형 09 정사영의 길이

```yaml
- id: RPM-GEO-0308
  page: 50
  vendor_label: "유형 09 정사영의 길이"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    직선 l 위의 두 점 A, B 의 평면 α 위로의 정사영 A', B' 에 대해 AB=2, A'B'=√3 일 때 직선 l 과 평면 α 가 이루는 각의 크기.
  category: "정사영의 길이 공식 → cos θ → 특수각"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정사영의 길이 — 선분과 평면이 이루는 각(A'B' = AB cos θ)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    A'B' = AB cos θ 에 대입하면 cos θ = √3/2 → θ = 30°. 공식 한 번·특수각 읽기 한 단계. 유형 대표문제(level 없음) 출발점 ★2 에서 통찰 0·M_total 4 로 −1 → ★1.
  tier: star_1
  mechanism_primary: "AB=2, A'B'=√3 → cos θ = A'B'/AB = √3/2 → θ = 30°"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$30^\circ$'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0308.png"
  latex: latex-bank/rpm-geo/items/0308.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AB 와 A'B' 의 쌍을 특수각 비(2:√2 → 45°, 2:1 → 60°, 4:2√3 → 30°)로 바꿀 수 있음. 제약: A'B'/AB 가 특수각의 cos 이어야 하고 A'B' < AB."
    creative: "(1) 각을 주고 정사영의 길이를 묻기(역방향 · ★1) (2) 한 점이 평면 위에 있는 설정(A = A')으로 직각삼각형을 직접 그리게 하기(★1) (3) 선분이 두 평면과 이루는 각을 각각 주고 두 정사영 길이의 비를 묻기(★2)."
```

```yaml
- id: RPM-GEO-0309
  page: 50
  vendor_label: "유형 09 정사영의 길이"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    밑면 반지름 √3 인 원기둥을 밑면과 30° 를 이루는 평면으로 자를 때 생기는 타원의 장축의 길이.
  category: "단면 타원의 정사영 = 밑면 원 → 장축 = 지름 / cos θ"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정사영의 길이 — 원기둥 단면 타원의 장축(지름 / cos θ)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    단면 타원을 밑면에 정사영하면 밑면 원이 되고, 단축은 지름 2√3 그대로, 장축은 지름을 cos 30° 로 나눈 2√3 ÷ (√3/2) = 4. 정사영 관계를 거꾸로(정사영 → 원래 길이) 쓰는 한 단계와 장축·단축 구분이 있어 M_total 5 · 통찰 0 → level 중 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "타원의 밑면 정사영 = 반지름 √3 인 원 → 장축의 정사영 = 지름 2√3 → 장축 = 2√3 / cos 30° = 4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$4$"
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0309.png"
  latex: latex-bank/rpm-geo/items/0309.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "반지름(1·2·3√3 등)과 각(30°·45°·60°). 제약: 장축 = 2r/cos θ 가 깔끔해지도록 r 에 cos θ 의 분모(√3·√2)를 넣음. 단축은 항상 2r."
    creative: "(1) 장축·단축 길이를 주고 자른 각을 묻기(역방향 · ★1~2) (2) 장축과 단축의 차 또는 비로 각 묻기(★2) (3) 각기둥(정사각기둥)으로 바꿔 단면 마름모의 대각선 묻기(★2). 원뿔 단면으로 바꾸면 정사영이 원이 아니어서 골조가 깨짐 — 기둥 범위에서만 유지."
```

```yaml
- id: RPM-GEO-0310
  page: 50
  vendor_label: "유형 09 정사영의 길이"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    한 모서리 2 인 정사면체 ABCD 에서 M, N 이 각각 AD, BC 의 중점일 때 선분 MN 의 평면 BCD 위로의 정사영의 길이. 5지선다.
  category: "꼭짓점의 정사영(무게중심) → 중점의 정사영 → 중선 위 길이"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "공간 선분 MN 의 정사영을 밑면 BCD 의 중선 DN 위 길이로 환원 — A 의 정사영 = 무게중심 G, M(AD 중점)의 정사영 = GD 의 중점, N 은 고정"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "정사영의 길이 — 정사면체 속 선분의 밑면 정사영(꼭짓점 → 무게중심)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    A 의 정사영은 밑면의 무게중심 G, M 의 정사영 M' 은 GD 의 중점, N 은 그대로. N·G·D 가 한 중선(길이 √3) 위에 있고 NG = √3/3, GD = 2√3/3 이므로 NM' = NG + GD/2 = 2√3/3. 정사영이 중점을 중점으로 보낸다는 인식과 중선 위 길이로의 환원이 통찰 1개(RT d1) · M_total 5 → 상중 출발점 ★3 유지. MN 과 평면이 이루는 각으로 돌아가면 MN = √2 계산이 추가돼 더 길다.
  tier: star_3
  mechanism_primary: "A → G(무게중심), M → GD 의 중점 M', N 고정 → N·G·D 한 직선 → NM' = NG + GD/2 = √3/3 + √3/3 = 2√3/3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "⑤"
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0310.png"
  latex: latex-bank/rpm-geo/items/0310.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모서리 길이(3·6 등 → 답은 길이에 비례). M 을 AD 의 1:2 내분점으로 바꾸면 M' 이 GD 의 같은 비 내분점이 되어 같은 골조. 제약: M 은 밑면 밖 모서리(AB·AC·AD)의 점, N 은 밑면 모서리의 점인 조합을 유지해야 중선 위 환원이 성립."
    creative: "(1) 정사영 길이 대신 MN 과 평면 BCD 가 이루는 각의 cos 을 묻기(MN = √2 추가 · ★3) (2) 정육면체의 대각선 위 중점으로 옮기면 좌표로 바로 풀려 ★2 (3) 정사영을 평면 ABC 위로 바꾸면 D 의 정사영을 찾아야 해 대칭 인식이 필요 → ★3~4."
```

### 유형 10 정사영의 넓이; 각의 크기가 주어진 경우

```yaml
- id: RPM-GEO-0311
  page: 50
  vendor_label: "유형 10 정사영의 넓이; 각의 크기가 주어진 경우"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    한 변 2 인 정삼각형이 밑면인 삼각기둥을 밑면과 30° 를 이루는 평면으로 자른 단면 △AB'C 의 넓이.
  category: "단면의 정사영 = 밑면 → S = S' / cos θ"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정사영의 넓이 — 각이 주어진 기둥 단면의 넓이(S = S' / cos θ)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    △AB'C 의 밑면(평면 ABC) 위로의 정사영이 △ABC(넓이 √3)이므로 S cos 30° = √3 → S = 2. 공식 한 번. 유형 대표문제 출발점 ★2 에서 통찰 0·M_total 4 로 −1 → ★1.
  tier: star_1
  mechanism_primary: "△AB'C 의 정사영 = △ABC(√3) → S cos 30° = √3 → S = 2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$2$"
  answer_source: "답지"
  figure: "crop:fig-0311.png"
  latex: latex-bank/rpm-geo/items/0311.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정삼각형 변의 길이(2·4)와 각(30°·45°·60°). 제약: 답 = (√3/4)a² / cos θ 가 정리되는 조합 · 기둥 높이가 단면을 담을 만큼 충분."
    creative: "(1) 단면 넓이를 주고 각을 묻기(유형 11 골조 · ★1) (2) 밑면을 정사각형·직사각형 기둥으로 바꾸기(★1) (3) 단면이 두 옆면과 밑면을 모두 지나는 사각형이 되도록 자르면 정사영이 사다리꼴 → 넓이 계산 추가 ★2."
```

```yaml
- id: RPM-GEO-0312
  page: 50
  vendor_label: "유형 10 정사영의 넓이; 각의 크기가 주어진 경우"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    밑면 반지름 3√2 인 원기둥을 밑면과 60° 를 이루는 평면으로 자를 때 생기는 단면(타원)의 넓이. 5지선다.
  category: "단면의 정사영 = 밑면 원 → S = πr² / cos θ"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정사영의 넓이 — 각이 주어진 원기둥 단면(타원)의 넓이"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    단면의 밑면 정사영이 밑면 원(넓이 18π)이므로 S = 18π / cos 60° = 36π. 공식 한 줄. level 중 출발점 ★2 이나 통찰 0·M_total 4 로 −1 → ★1(1단 차이라 이슈 아님).
  tier: star_1
  mechanism_primary: "정사영 = 밑면 원 18π → S = 18π / cos 60° = 36π"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "③"
  answer_source: "답지"
  figure: "crop:fig-0312.png"
  latex: latex-bank/rpm-geo/items/0312.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "반지름(3·2√3·6)과 각. 제약: πr²/cos θ 가 선택지 꼴(k√mπ)로 정리 — 45° 면 √2 배, 30° 면 2/√3 배."
    creative: "(1) 단면 넓이를 주고 반지름 묻기(★1) (2) 두 평면으로 잘라 두 단면 넓이의 비 묻기(★2) (3) 0309 와 결합해 장축·단축을 먼저 구하고 πab 로 검산하게 하기(★2 · 표현 두 갈래)."
```

```yaml
- id: RPM-GEO-0313
  page: 50
  vendor_label: "유형 10 정사영의 넓이; 각의 크기가 주어진 경우"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    반지름 8 인 반구를 밑면 지름의 한 끝 A 를 지나고 밑면과 45° 를 이루는 평면으로 자른 단면의, 밑면 위로의 정사영의 넓이.
  category: "구의 단면 원 반지름 → 원 넓이 → 정사영 S cos θ"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정사영의 넓이 — 구(반구)의 단면 원의 정사영"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    구의 중심 O 에서 평면까지 거리 = 8 sin 45° = 4√2 → 단면은 반지름 √(64−32) = 4√2 인 원(넓이 32π). 단면 원이 A 에서 밑면에 접하며 전부 반구 안에 있으므로 온전한 원이고, 정사영 넓이 = 32π cos 45° = 16√2π. 구의 단면 반지름 계산과 정사영 공식 두 단계 · 통찰 0 · M_total 6 → level 중 출발점 ★2 유지. 함정: 단면을 반원으로 오해(T-범위).
  tier: star_2
  mechanism_primary: "O 에서 평면까지 거리 8 sin 45° = 4√2 → 단면 원 반지름 4√2 → 32π → × cos 45° = 16√2π"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$16\sqrt{2}\pi$'
  answer_source: "답지"
  figure: "crop:fig-0313.png"
  latex: latex-bank/rpm-geo/items/0313.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "반지름 R(4·6·10)과 각 θ(30°·45°·60°). 제약: 평면이 지름 끝 A 를 지나면 단면 원은 항상 A 에서 밑면에 접해 온전한 원(반지름 R cos θ)이 되고 정사영 넓이 = πR² cos³θ — 이 값이 정리되는 조합."
    creative: "(1) 평면이 A 가 아니라 O 를 지나면 단면이 반원(반지름 R)이 되어 정사영 = (πR²/2) cos θ — 함정 방향이 바뀜(★2) (2) 평면이 밑면과 만나는 직선이 지름 끝이 아닌 내부 현이면 단면 원의 일부가 잘려 넓이 계산이 부채꼴+삼각형 → ★3~4 (3) 정사영 넓이를 주고 각을 묻기(★2)."
```

### 유형 11 정사영의 넓이를 이용하여 각의 크기 구하기

```yaml
- id: RPM-GEO-0314
  page: 51
  vendor_label: "유형 11 정사영의 넓이를 이용하여 각의 크기 구하기"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    정육면체에서 평면 DEB 와 평면 EFGH 가 이루는 각 θ 의 cos θ. 5지선다.
  category: "정사영 삼각형 찾기 → 넓이 비 = cos θ"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정사영의 넓이로 이면각 구하기 — 정육면체의 정삼각형 단면"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    △DEB 의 평면 EFGH 위로의 정사영은 △HEF(넓이 a²/2). △DEB 는 한 변 √2a 인 정삼각형(넓이 √3a²/2)이므로 cos θ = (a²/2)/(√3a²/2) = √3/3. 정사영 삼각형 찾기·정삼각형 넓이 두 단계 · 통찰 0 · M_total 5 → 대표문제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "△DEB 정사영 = △HEF → cos θ = S(HEF)/S(DEB) = (1/2)/(√3/2) = √3/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: "crop:fig-0314.png"
  latex: latex-bank/rpm-geo/items/0314.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모서리 길이는 답에 무관(비율). 삼각형을 정육면체의 다른 정삼각형 단면(△ACF · △BDG)으로 바꿔도 cos θ = √3/3 으로 같음 — 답을 바꾸려면 직육면체(a, b, c)로."
    creative: "(1) 직육면체로 바꾸면 △DEB 넓이를 코사인법칙·헤론으로 구해야 해 ★3 (2) 평면 DEB 와 평면 ABCD 가 이루는 각(정사영 △ABD)으로 바꾸기(같은 골조 ★2) (3) 이면각을 교선 EB 의 수선으로 직접 잡는 풀이와 정사영 풀이를 비교시키기(★2 · 전략 두 갈래)."
```

```yaml
- id: RPM-GEO-0315
  page: 51
  vendor_label: "유형 11 정사영의 넓이를 이용하여 각의 크기 구하기"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    한 변 1 인 정사각형이 밑면이고 옆모서리 길이가 모두 같은 사각뿔에서 △ABC 의 넓이가 2 일 때 평면 ABC 와 밑면 BCDE 가 이루는 각의 cos θ.
  category: "꼭짓점의 정사영 = 밑면 중심 → 정사영 삼각형 넓이 → cos θ"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정사영의 넓이로 이면각 구하기 — 정사각뿔 옆면과 밑면"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    옆모서리가 같으므로 꼭짓점 A 의 정사영은 밑면의 중심 O 이고, △ABC 의 정사영은 △OBC(넓이 1/4). cos θ = (1/4)/2 = 1/8. 정사영 삼각형 찾기·넓이 비 두 단계 · 통찰 0 · M_total 5 → level 중 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "A 의 정사영 = 밑면 중심 O → △ABC 정사영 = △OBC = 1/4 → cos θ = (1/4)/2 = 1/8"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{8}$'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0315.png"
  latex: latex-bank/rpm-geo/items/0315.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑면 한 변(1·2·4)과 △ABC 의 넓이. 제약: △ABC 넓이 > 밑면 넓이/4 이어야 cos θ < 1(옆면의 높이가 밑면 변의 절반보다 큼)."
    creative: "(1) 옆모서리 길이를 주고 △ABC 넓이를 먼저 구하게 하기(피타고라스 추가 · ★2) (2) 정삼각뿔로 바꾸면 정사영이 무게중심 삼각형(넓이 1/3) — 같은 골조 ★2 (3) 옆모서리 길이가 다른 사각뿔이면 A 의 정사영이 중심이 아니어서 수선의 발부터 찾아야 함 → ★3~4."
```

```yaml
- id: RPM-GEO-0316
  page: 51
  vendor_label: "유형 11 정사영의 넓이를 이용하여 각의 크기 구하기"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    직사각형 ABCD 를 대각선 BD 로 접어 A 의 평면 BCD 위로의 정사영 A' 이 변 CD 위에 오게 했더니 CA':A'D = 16:9. 평면 ABD 와 평면 BCD 가 이루는 각의 cos θ.
  category: "접기 → 정사영 삼각형 → 넓이 비를 밑변 비로 환원"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "길이 없이 비만 주어진 CA':A'D = 16:9 를 넓이 비(= cos θ)로 옮김 — △ABD 와 △A'BD 가 높이 BC 를 공유하므로 넓이 비 = 밑변 비 A'D/CD"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "정사영의 넓이로 이면각 구하기 — 접은 도형(정사영이 변 위에 오는 경우)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    △ABD 의 평면 BCD 위로의 정사영은 △A'BD. S(ABD) = 직사각형의 절반 = CD·BC/2, S(A'BD) = A'D·BC/2 이므로 cos θ = A'D/CD = 9/25. 구체 길이 없이 비만으로 답이 정해지는 동치 변환 1개(EQV d1) · Mₐ 2 · M_total 6 → 상중 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "△ABD 정사영 = △A'BD → S(ABD) = CD·BC/2, S(A'BD) = A'D·BC/2 → cos θ = A'D/CD = 9/25"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{9}{25}$'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0316.png"
  latex: latex-bank/rpm-geo/items/0316.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "비 16:9 를 다른 비(3:1 → 1/4, 7:3 → 3/10)로. 제약: A' 이 변 CD 위(끝점 제외)에 있어야 하므로 두 수 모두 양수 · cos θ = A'D/(CA'+A'D). 실제 직사각형은 AD:AB = 3:5 처럼 (A'D/CD) = (AD/AB)² 을 만족해야 그림이 성립."
    creative: "(1) 변의 길이(AB=5, AD=3)를 주고 A' 의 위치를 먼저 찾게 하면 A' 이 A 에서 BD 에 내린 수선 위에 있다는 삼수선 인식이 필요 → ★3~4 (2) cos θ 를 주고 CA':A'D 를 묻는 역방향(★3) (3) 접은 뒤 A 와 평면 BCD 사이의 거리를 묻기(높이 계산 추가 ★3)."
```

### 유형 12 정사영의 넓이; 각의 크기가 주어지지 않은 경우

```yaml
- id: RPM-GEO-0317
  page: 51
  vendor_label: "유형 12 정사영의 넓이; 각의 크기가 주어지지 않은 경우"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    한 모서리 10 인 정육면체에서 M, N 이 각각 AE, DH 의 중점일 때 사각형 BFGC 의 평면 MFGN 위로의 정사영의 넓이.
  category: "이면각을 한 면 위 평면각으로 잡기 → cos θ → S cos θ"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정사영의 넓이 — 이면각의 cos 을 직접 구해 S cos θ(정육면체 속 두 평면)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 평면의 교선이 FG 이고 BF ⊥ FG, MF ⊥ FG 이므로 이면각 θ = ∠BFM. 면 AEFB 에서 BF = 10, FM = BM = 5√5 → cos θ = 1/√5(코사인법칙 또는 F 에서 본 직각삼각형). 정사영 넓이 = 100 × 1/√5 = 20√5. 이면각을 한 면 위의 평면각으로 잡는 표준 절차 · 통찰 0 · M_total 6 → 대표문제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "교선 FG ⊥ BF, FG ⊥ MF → θ = ∠BFM → cos θ = 1/√5 (BF=10, FM=BM=5√5) → 100 cos θ = 20√5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$20\sqrt{5}$'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0317.png"
  latex: latex-bank/rpm-geo/items/0317.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모서리 길이 a(2·4·6 → 넓이는 a² 비례)와 M, N 의 위치(EM = m). 제약: M, N 이 AE, DH 위 같은 높이여야 MFGN 이 평면 · cos θ = m/√(a²+m²) 가 정리되는 (a, m) 조합(중점이면 1/√5)."
    creative: "(1) 반대로 사각형 MFGN(넓이 50√5)의 평면 BFGC 위로의 정사영을 묻기 — 정사영이 BFGC 의 아래 절반 직사각형(50)이 되어 그림 판단 필요 ★2~3 (2) 정사영 넓이를 주고 M 의 위치를 묻는 역방향(★3) (3) 평면 MFGN 과 밑면 EFGH 가 이루는 각으로 바꾸면 tan 이 바로 보여 ★1~2."
```

```yaml
- id: RPM-GEO-0318
  page: 51
  vendor_label: "유형 12 정사영의 넓이; 각의 크기가 주어지지 않은 경우"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    반지름 6 cm, 높이 16 cm 인 원기둥 물통에 물을 가득 채운 뒤 절반만 남도록 기울였을 때 수면의 넓이. 5지선다.
  category: "절반 조건 → 수면이 중심을 지남 → 직각삼각형에서 cos θ → 밑면 넓이 / cos θ"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「물의 양이 절반」을 「수면이 원기둥의 중심을 지나 한쪽 밑면 지름의 끝과 반대쪽 밑면 지름의 끝을 잇는 단면」으로 옮김 — 그래야 각을 잴 직각삼각형(12, 16, 20)이 생김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "정사영의 넓이 — 각이 주어지지 않은 원기둥 단면(기울인 물통의 수면)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    절반이 남으려면 수면이 원기둥의 중심을 지나야 하고, 그러면 수면 타원의 장축은 양 밑면의 지름 끝을 잇는 √(16²+12²) = 20. 수면과 밑면이 이루는 각은 cos θ = 12/20 = 3/5 이고 수면의 밑면 정사영이 밑면 원(36π)이므로 넓이 = 36π ÷ (3/5) = 60π. 절반 조건을 단면 위치로 바꾸는 동치 변환 1개(EQV d1) · M_total 5 → level 중 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "물 절반 → 수면이 중심을 지남 → 장축 = √(16²+12²) = 20 → cos θ = 12/20 = 3/5 → 36π ÷ (3/5) = 60π"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0318.png"
  latex: latex-bank/rpm-geo/items/0318.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "반지름 r 과 높이 h(6·16 → 12-16-20, 5·24 → 10-24-26 등). 제약: √(h²+(2r)²) 가 정수(피타고라스 세 쌍의 배수)가 되어야 cos θ 가 유리수 · 선택지 단위 cm² 유지."
    creative: "(1) 수면 넓이를 주고 물통 높이를 묻는 역방향(★2~3) (2) 원기둥 대신 정사각기둥(수면이 직사각형)이면 정사영 없이 피타고라스만으로 풀려 ★1~2 (3) 물의 양을 절반이 아닌 값으로 바꾸면 수면이 중심을 지나지 않아 잘린 타원(적분 필요) — 절반 조건이 골조의 핵심이므로 유지."
```

```yaml
- id: RPM-GEO-0319
  page: 51
  vendor_label: "유형 12 정사영의 넓이; 각의 크기가 주어지지 않은 경우"
  vendor_level: "상중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    한 모서리 6 인 정사면체 ABCD 에서 △BCD 의 무게중심을 G 라 할 때 △GBC 의 평면 ABC 위로의 정사영의 넓이.
  category: "무게중심 삼각형 넓이 → 정사면체 이면각 cos → S cos θ"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정사영의 넓이 — 정사면체 두 면의 이면각(cos = 1/3)과 무게중심 삼각형"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    △GBC 는 평면 BCD 위에 있고 넓이는 △BCD 의 1/3 = 3√3. 평면 BCD 와 평면 ABC 가 이루는 각은 BC 의 중점 M 에 대해 ∠AMD 이고 AM = DM = 3√3, AD = 6 → cos θ = (27+27−36)/54 = 1/3. 정사영 넓이 = 3√3 × 1/3 = √3. 무게중심 넓이 비와 정사면체 이면각 계산(코사인법칙) 두 단계 · 통찰 0 · M_total 6 → 상중 출발점 ★3 유지. 서술형은 이면각 근거를 쓰게 하는 취지.
  tier: star_3
  mechanism_primary: "△GBC = △BCD/3 = 3√3 → 이면각(BC 중점 M · ∠AMD) cos θ = 1/3 → 3√3 × 1/3 = √3"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\sqrt{3}$'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0319.png"
  latex: latex-bank/rpm-geo/items/0319.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모서리 길이 a(3·4·12 → 답 = (√3/4)a² × 1/3 × 1/3 = √3a²/36). 제약: 답이 k√3 꼴로 정리되도록 a 를 6 의 배수 또는 짝수로."
    creative: "(1) △GBC 대신 △GBD·△GCD 로 바꿔도 답 동일(대칭) — 대신 G 를 내분점으로 옮겨 넓이 비를 바꾸기(★3) (2) 정사면체의 이면각 cos = 1/3 을 먼저 증명하게 하는 소문항 추가(서술형 ★3) (3) 정사영을 평면 ABD 위로 바꾸면 이면각은 같고 정사영 도형만 달라져 같은 골조(★3)."
```

### 유형 UP 13 수선의 길이

```yaml
- id: RPM-GEO-0320
  page: 52
  vendor_label: "유형 UP 13 수선의 길이"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형 UP"
  summary: |
    한 모서리 4 인 정육면체에서 P, Q 가 각각 BD, AG 위에 있고 PQ 가 BD, AG 에 모두 수직일 때 선분 PQ 의 길이. 5지선다.
  category: "BD ⊥ 평면 ACGE → P 는 BD∩AC → 평면 ACGE 안에서 점-직선 거리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "꼬인 두 직선의 공통수선 문제를 BD ⊥ 평면 ACGE(BD ⊥ AC, BD ⊥ CG)로 평면 ACGE 위의 점 O(=BD∩AC)에서 직선 AG 까지의 거리로 환원 — P 가 O 로 고정된다는 판단이 핵심"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "수선의 길이 — 꼬인 위치의 두 직선 사이 공통수선(정육면체 면대각선과 공간대각선)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    BD ⊥ AC, BD ⊥ CG 이므로 BD ⊥ 평면 ACGE. PQ ⊥ BD 이고 Q 가 이 평면 위(AG)에 있으므로 P 는 BD 와 평면의 교점 O(윗면 중심)이고 PQ 는 직사각형 ACGE 안에서 O 에서 AG 까지의 거리. C 에서 AG 까지의 거리 = AC·CG/AG = 4√2·4/(4√3) = 4√6/3 의 절반 = 2√6/3. 공간 조건을 한 평면 위 거리로 바꾸는 통찰(RT d2) · M_total 6 → 유형 UP 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "BD ⊥ AC, BD ⊥ CG → BD ⊥ 평면 ACGE → P = O(BD∩AC) → PQ = d(O, AG) = d(C, AG)/2 = (4√2·4/4√3)/2 = 2√6/3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지"
  figure: "crop:fig-0320.png"
  latex: latex-bank/rpm-geo/items/0320.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모서리 길이 a(답 = a√6/6 에 비례 · a=6 이면 √6). 제약: 정육면체를 직육면체로 바꾸면 BD ⊥ AC 가 깨져 골조 붕괴 — 정육면체 또는 정사각기둥(밑면 정사각형 · 높이 h)까지만 허용(BD ⊥ 평면 ACGE 유지)."
    creative: "(1) 정사각기둥(밑면 한 변 a · 높이 h)으로 바꿔 PQ 를 a, h 로 나타내기(Mₐ 2 · ★3~4) (2) 두 직선을 AG 와 BD 대신 AG 와 EH 처럼 한 직선이 모서리이면 수직 평면이 면이 되어 ★2 (3) PQ 대신 두 직선 사이의 거리를 「최솟값」으로 묻고 P, Q 위치까지 요구(★4)."
```

```yaml
- id: RPM-GEO-0321
  page: 52
  vendor_label: "유형 UP 13 수선의 길이"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    한 모서리 1 인 정사면체 ABCD 에서 AB 의 중점 E 에서 평면 BCD 에 내린 수선의 발이 F 일 때 선분 EF 의 길이.
  category: "정사면체 높이 → 중점 닮음비 1/2"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수선의 길이 — 정사면체의 높이와 모서리 중점(닮음비)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    A 에서 밑면 BCD 까지의 높이는 √(1 − (√3/3)²) = √6/3. E 가 AB 의 중점이고 B 가 밑면 위에 있으므로 EF 는 그 절반(△BEF ∼ △BAO · 비 1:2) = √6/6. 높이 계산·닮음 두 단계 · 통찰 0 · M_total 5 → 유형 UP 이지만 level 중이고 표준 절차라 ★2.
  tier: star_2
  mechanism_primary: "정사면체 높이 h = √(1 − (√3/3)²) = √6/3 → E 는 AB 의 중점 · B 는 밑면 위 → EF = h/2 = √6/6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{\sqrt{6}}{6}$'
  answer_source: "답지"
  figure: "crop:fig-0321.png"
  latex: latex-bank/rpm-geo/items/0321.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모서리 길이 a(EF = √6a/6)와 E 의 위치(AB 를 1:2 로 내분 → EF = 2h/3 등). 제약: E 가 밑면 밖 모서리(AB·AC·AD) 위에 있어야 닮음비가 바로 보임."
    creative: "(1) E 를 모서리 위가 아니라 면 ABC 의 무게중심으로 옮기면 EF = h/3(★2) (2) EF 대신 F 의 위치(밑면 위 어느 점인지)를 묻기 — 무게중심 O 와 B 의 중점임을 밝혀야 ★3 (3) 정육면체 속 정사면체(모서리 = 면대각선)로 바꿔 좌표로 풀게 하기(★2)."
```

```yaml
- id: RPM-GEO-0322
  page: 52
  vendor_label: "유형 UP 13 수선의 길이"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    OA=OC=2, OB=4 이고 OA, OB, OC 가 서로 수직인 사면체에서 O 에서 평면 ABC 에 내린 수선의 발 H 에 대해 선분 OH 의 길이.
  category: "부피 등식(또는 삼수선) → 수선의 길이"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "수선의 길이를 「사면체의 부피를 두 방향으로 재기」(1/3·S(OAB)·OC = 1/3·S(ABC)·OH)로 옮김 — 또는 OA=OC 대칭으로 AC 의 중점 M 을 잡아 평면 OBM ⊥ AC 를 만들어 △OBM 안의 수선으로 환원"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "수선의 길이 — 세 모서리가 서로 수직인 사면체의 높이(부피 등식·삼수선)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    부피 = (1/3)·(1/2·2·4)·2 = 8/3. △ABC 는 AB = BC = 2√5, AC = 2√2 인 이등변삼각형이라 넓이 6 → OH = 3V/S = 4/3. 다른 길: AC 의 중점 M 에 대해 OM ⊥ AC, BM ⊥ AC → 평면 OBM ⊥ 평면 ABC → OH 는 △OBM(OM = √2, OB = 4, BM = 3√2)의 높이 = 4/3. 어느 길이든 수선을 직접 잡지 않고 다른 표현으로 옮기는 통찰 1개(RT d1) · M_total 6 → 상중 출발점 ★3 유지. 1/OH² = 1/OA² + 1/OB² + 1/OC² 공식을 아는 학생은 한 줄.
  tier: star_3
  mechanism_primary: "V = (1/3)·(1/2·2·4)·2 = 8/3 → S(ABC) = 6 (이등변 2√5, 2√5, 2√2) → OH = 3V/S = 4/3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{4}{3}$'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0322.png"
  latex: latex-bank/rpm-geo/items/0322.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 모서리 (2, 4, 2) 를 (a, b, c) 로. 제약: 1/h² = 1/a² + 1/b² + 1/c² 이 유리수 제곱(예: (3, 4, 12) → h = 12/13, (2, 3, 6) → 6/7)이 되도록 · OA = OC 대칭을 깨면 삼수선 길이 닫히고 부피 길만 남음(헤론 필요 → k 상승)."
    creative: "(1) OH 대신 H 의 위치(△ABC 의 수심임)를 묻기 — 삼수선 정리 두 번 · ★4 (2) 세 면의 넓이를 주고 △ABC 넓이를 묻기(S² = S₁² + S₂² + S₃² · ★3~4) (3) OA, OB, OC 가 서로 수직인 조건을 정육면체 한 꼭짓점의 세 이웃으로 그리면 좌표 풀이가 열려 ★2~3."
```

### 유형 UP 14 정사영의 넓이의 실생활에서의 활용

```yaml
- id: RPM-GEO-0323
  page: 52
  vendor_label: "유형 UP 14 정사영의 넓이의 실생활에서의 활용"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형 UP"
  summary: |
    반지름 5 m 인 구 모양 애드벌룬에 태양 광선이 지면과 30° 를 이루며 비출 때 지면에 생기는 그림자의 넓이. 5지선다.
  category: "그림자 → 광선에 수직인 대원의 정사영(역) → πr² / sin θ"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "구의 그림자를 「광선에 수직인 대원(넓이 25π)의 지면 정사영이 그림자」가 아니라 「그림자를 광선 방향으로 정사영하면 대원」으로 읽음 — 대원의 평면과 지면이 이루는 각 = 90° − 30° = 60° 이므로 그림자 = 25π / cos 60°"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "정사영의 실생활 활용 — 구의 그림자 넓이(광선과 지면의 각)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    광선에 수직인 대원(반지름 5 · 넓이 25π)의 평면은 지면과 60° 를 이루고, 그림자를 그 평면에 정사영하면 대원이 되므로 그림자 = 25π / cos 60° = 50π. 실생활 상황을 정사영 모델로 옮기는 단계(RT d1)와 여각 처리(30° → 60°)가 핵심 · M_total 5 → 유형 UP 대표문제 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "광선에 수직인 대원 25π · 대원 평면과 지면의 각 = 90° − 30° = 60° → 그림자 = 25π / cos 60° = 50π"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0323.png"
  latex: latex-bank/rpm-geo/items/0323.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "반지름 r(3·6·10)과 광선 각 θ(30°·45°·60°). 제약: 그림자 = πr²/sin θ 가 선택지 꼴(kπ 또는 k√mπ)로 정리 · 여각 실수(cos 30° 로 나눔 → 오답 50√3π/3)를 선택지에 함정으로 둘 수 있음."
    creative: "(1) 그림자 넓이를 주고 반지름 또는 각을 묻기(0325 골조 · ★3) (2) 구 대신 원판(원 모양 판을 지면과 각 α 로 세움)으로 바꾸면 정사영 공식 직접 적용 → ★2 (3) 광선 각을 두 번(오전·오후) 주고 그림자 넓이의 비를 묻기(★3)."
```

```yaml
- id: RPM-GEO-0324
  page: 52
  vendor_label: "유형 UP 14 정사영의 넓이의 실생활에서의 활용"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    밑면 반지름 3, 높이 4 인 원뿔이 한 모선을 평면 α 에 붙이고 누워 있을 때, α 에 수직인 광선에 의해 원뿔의 밑면이 α 에 만드는 그림자의 넓이. 5지선다.
  category: "누운 원뿔 → 밑면과 α 의 각 = 반꼭지각의 여각 → πr² cos"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "밑면 원의 그림자(수직 광선 → 정사영)에서 밑면과 α 가 이루는 각을 직접 재지 않고, 「모선이 α 에 포함 → 축과 α 의 각 = 반꼭지각 φ → 밑면 ⊥ 축이므로 밑면과 α 의 각 = 90° − φ」 로 축-모선 삼각형(3, 4, 5)에 옮김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "정사영의 실생활 활용 — 옆으로 누운 원뿔 밑면의 그림자(수직 광선)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    광선이 α 에 수직이므로 그림자는 밑면 원의 정사영. 모선이 α 에 포함되므로 축과 α 가 이루는 각은 반꼭지각 φ(sin φ = 3/5)이고, 밑면은 축에 수직이므로 밑면과 α 의 각은 90° − φ. 넓이 = 9π cos(90° − φ) = 9π sin φ = 27π/5. 각을 여각으로 옮겨 3-4-5 삼각형에서 읽는 통찰(RT d2) · M_total 5 → level 중이지만 유형 UP 구역 출발점 ★3 유지(각 식별이 0323 보다 어려움).
  tier: star_3
  mechanism_primary: "모선 ⊂ α → 축과 α 의 각 = 반꼭지각 φ (sin φ = 3/5) → 밑면과 α 의 각 = 90° − φ → 9π cos(90° − φ) = 9π · 3/5 = 27π/5"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "⑤"
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0324.png"
  latex: latex-bank/rpm-geo/items/0324.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "반지름 r 과 높이 h(3·4 → 5, 5·12 → 13, 6·8 → 10). 제약: 모선 √(r²+h²) 이 정수여야 sin φ = r/모선 이 유리수 · 답 = πr³/모선."
    creative: "(1) 광선을 α 에 수직이 아니라 각 β 로 비추면 그림자 = 정사영 ÷ … 이 아니라 별도 모델 필요 — 수직 광선 유지가 골조 (2) 원뿔 대신 원기둥을 옆으로 눕히면 밑면과 α 가 수직이라 그림자가 선분 → 함정형 ★2 (3) 원뿔의 옆면까지 포함한 전체 그림자(삼각형 + 반타원)를 묻기(★4)."
```

```yaml
- id: RPM-GEO-0325
  page: 52
  vendor_label: "유형 UP 14 정사영의 넓이의 실생활에서의 활용"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    햇빛이 지면과 45° 를 이루며 지면 위의 구 모양 공을 비출 때 그림자의 넓이가 81√2π cm² 이면 공의 겉넓이.
  category: "그림자 = πr² / sin θ → r → 겉넓이 4πr²"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "구의 그림자를 광선에 수직인 대원의 정사영 관계로 옮김(그림자 × cos 45° = πr²) — 0323 과 같은 모델을 역방향으로 사용"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "정사영의 실생활 활용 — 구의 그림자 넓이(광선과 지면의 각)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    광선에 수직인 대원의 평면과 지면이 이루는 각이 45° 이므로 πr² = 81√2π × cos 45° = 81π → r = 9, 겉넓이 = 4π·81 = 324π. 0323 의 모델(RT d1)을 그림자 → 반지름 방향으로 되돌리고 겉넓이 공식을 붙인 것 · M_total 5 → 상중 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "그림자 = πr² / sin 45° = √2πr² = 81√2π → r = 9 → 겉넓이 4πr² = 324π"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$324\pi\,\mathrm{cm}^2$'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0325.png"
  latex: latex-bank/rpm-geo/items/0325.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "그림자 넓이와 각(30° → 2πr², 60° → 2√3πr²/3). 제약: 그림자 × sin θ = πr² 에서 r 이 정수가 되도록 그림자에 1/sin θ 의 무리수 인수(√2, 2/√3)를 미리 넣음 · 단위 cm² 유지."
    creative: "(1) 겉넓이 대신 부피(4πr³/3)를 묻기(★3) (2) 그림자 넓이와 반지름을 주고 광선의 각을 묻기(★3) (3) 공이 지면에서 떠 있어도 그림자 넓이가 같음을 묻는 ㄱㄴㄷ 보기(★3 · I-MI 근처)."
```

### 시험에 꼭 나오는 문제

```yaml
- id: RPM-GEO-0326
  page: 53
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    사각뿔 A-BCDE 의 네 꼭짓점 B, C, D, E 와 두 직선 AC, AE 로 만들 수 있는 서로 다른 평면의 개수.
  category: "평면의 결정 조건 → 경우 나열(세 점 · 직선+점 · 두 직선) → 중복 제거"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평면의 결정 조건 — 점·직선으로 만들 수 있는 서로 다른 평면의 개수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    네 점 B, C, D, E 는 한 평면(밑면) 1개. 두 직선 AC, AE 는 A 에서 만나므로 평면 ACE 1개. 직선 AC 와 점 B, D → 평면 ABC, ACD(E 는 ACE 와 중복), 직선 AE 와 점 B, D → 평면 ABE, ADE(C 는 중복). 합계 6. 결정 조건별 나열과 중복 제거의 표준 절차 · 통찰 0 · M_total 5 → 종합 구역 출발점 ★2. 함정은 ACE 를 두 번 세거나 밑면을 여러 번 세는 것.
  tier: star_2
  mechanism_primary: "밑면 BCDE 1 + 평면 ACE(두 직선) 1 + AC+B, AC+D, AE+B, AE+D 4 → 6 (AC+E, AE+C 는 ACE 와 중복)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$6$"
  answer_source: "답지"
  figure: "crop:fig-0326.png"
  latex: latex-bank/rpm-geo/items/0326.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선을 AC, AE 대신 AB, AD(→ 같은 구조 · 답 6) 또는 AC, AD(이웃 옆모서리 → 평면 ACD 가 밑면과 다르므로 답이 달라짐 · 검산 필요)로. 제약: 주어진 점들이 모두 한 평면 위에 있다는 조건(밑면)을 유지해야 중복 구조가 같음."
    creative: "(1) 점 A 까지 포함해 「다섯 점으로 만들 수 있는 평면의 개수」로 바꾸면 밑면 1 + 옆면 4 + 대각 평면 2 = 7(★2) (2) 삼각기둥·정육면체의 꼭짓점으로 바꾸면 평행한 면·대각 평면 종류가 늘어 ★3 (3) 「직선 AC 를 포함하는 평면의 개수」처럼 한 직선 기준으로 좁히면 ★1."
```

```yaml
- id: RPM-GEO-0327
  page: 53
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    정팔면체에서 직선 AB 와 꼬인 위치에 있는 모서리의 개수 a, 평면 CFD 와 평행한 모서리의 개수 b 에 대해 a+b.
  category: "정팔면체 위치 관계 — 마주 보는 모서리 평행 · 마주 보는 면 평행"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정팔면체에서 꼬인 위치·평면과 평행한 모서리의 개수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    AB 와 만나지 않는 모서리는 FC, FD, FE, CD, DE 의 5개인데 마주 보는 모서리 FD 는 AB 와 평행하므로 꼬인 위치는 4개(a=4). 평면 CFD 와 마주 보는 면 ABE 가 평행하므로 그 세 모서리 AB, AE, BE 가 평행(b=3). a+b=7. 정팔면체의 평행 관계(마주 보는 모서리·면)를 아는 표준 절차 · 통찰 0 · M_total 5 → ★2. 함정: FD 를 꼬인 위치로 세어 a=5.
  tier: star_2
  mechanism_primary: "AB 와 안 만나는 모서리 5 − 평행한 FD 1 = 4 · 평면 CFD 의 마주 보는 면 ABE 의 모서리 3 → 7"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$7$"
  answer_source: "답지"
  figure: "crop:fig-0327.png"
  latex: latex-bank/rpm-geo/items/0327.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준 직선(AB → AC 등 · 대칭이라 답 동일)과 기준 평면(CFD → 다른 면 · 마주 보는 면이 있으면 b=3 동일). 답을 바꾸려면 기준 평면을 면이 아닌 대각 평면(BCDE 정사각형 → 평행한 모서리 0)으로. 제약: 정팔면체의 대칭을 깨지 않는 한 a=4 고정."
    creative: "(1) 정육면체·정사면체·삼각기둥으로 바꿔 같은 두 질문(꼬인 위치 개수 · 평면과 평행한 모서리 개수)을 묻기(★2) (2) 「직선 AB 와 평행한 모서리」「수직인 모서리」까지 세 값의 합으로 확장(★2~3) (3) 정팔면체를 정육면체 각 면의 중심을 이어 만든 것으로 주고 위치 관계를 정육면체로 옮겨 판단하게 하기(★3 · I-RT)."
```

```yaml
- id: RPM-GEO-0328
  page: 53
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    서로 다른 두 직선 l, m 과 세 평면 α, β, γ 에 대해 l ∥ α, α ⊥ β 일 때 옳은 것 고르기 — ㄱ. l ∥ β ㄴ. m ⊥ β 이면 m ⊥ l ㄷ. γ ⊥ l 이면 γ ⊥ α. 5지선다.
  category: "위치 관계 명제 → 반례(정육면체 모델) · 증명(평행 직선 옮기기)"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "l ∥ α 와 α ⊥ β 가 허용하는 배치를 모두 따져야 함 — l 이 교선과 평행한 경우와 교선에 수직인 경우(ㄴ 의 반례) · l 이 β 위에 있거나 β 를 뚫는 경우(ㄱ 의 반례)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "직선과 평면의 위치 관계 — 명제의 참·거짓(ㄱㄴㄷ · 반례는 정육면체로)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ㄱ: l 이 β 위에 있거나 β 와 만날 수 있어 거짓. ㄴ: m ⊥ β 이면 m ∥ α(또는 m ⊂ α)인데 l 이 α 와 평행한 방향 중 교선에 수직인 방향이면 m ∥ l 이 되어 거짓. ㄷ: l 과 평행한 α 위의 직선 l' 에 대해 γ ⊥ l' 이므로 γ ⊥ α, 참. 답 ③. 조건이 허용하는 여러 배치를 다 따져 반례를 찾는 통찰(MI d1)과 추상 표현(Mₐ 3) · M_total 7 → 종합 구역에서 ★3.
  tier: star_3
  mechanism_primary: "ㄱ 반례(l ⊂ β) · ㄴ 반례(l 이 교선에 수직 → m ∥ l) · ㄷ 증명(l ∥ l' ⊂ α, γ ⊥ l' → γ ⊥ α) → ③"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0328.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수치 없음. 보기의 참·거짓 조합을 바꾸려면 전제(l ∥ α, α ⊥ β)를 l ⊥ α, α ∥ β 등으로 교체하고 각 보기를 재검증. 제약: 정답이 한 개의 보기 조합으로 정해지도록 세 보기 중 참이 정확히 1~2개."
    creative: "(1) 전제를 l ⊥ α, α ⊥ β 로 바꾸면 「l ∥ β 또는 l ⊂ β」가 참이 되어 ㄱ 의 진위가 뒤집힘(★3) (2) 반례를 정육면체의 모서리·면으로 지목하게 하는 서술형(★3) (3) 보기 5개로 늘려 「옳은 것의 개수」를 묻기(★3~4 · MI 부담 증가)."
```

```yaml
- id: RPM-GEO-0329
  page: 53
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    정육면체 ABCD-EFGH 에서 두 모서리·대각선의 수직 관계(AD ⊥ CG, AF ⊥ BG, BE ⊥ FG, BE ⊥ DG, BE ⊥ AG) 중 옳지 않은 것. 5지선다.
  category: "꼬인 위치의 두 직선의 각 → 평행이동해 한 점에서 만나게 하기"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정육면체에서 두 직선의 수직 판정(꼬인 위치의 각 · 평행이동)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ①·③ 은 모서리와 수직인 면 위의 직선이라 수직. ④ BE ⊥ DG: DG ∥ AF 이고 AF ⊥ BE(정사각형 대각선)이므로 수직. ⑤ BE ⊥ AG: AG ⊥ 평면 BDE(AG 는 BE, BD 에 각각 수직)이므로 수직. ② AF ⊥ BG: AF ∥ DG 로 옮기면 △BDG 가 정삼각형이라 각이 60° → 거짓. 답 ②. 보기마다 평행이동 한 번씩 · 통찰 0 · M_total 5 → ★2. 함정: 그림에서 직각처럼 보이는 ②.
  tier: star_2
  mechanism_primary: "각 보기를 평행이동으로 한 점에서 만나는 두 직선으로 → ② 는 AF ∥ DG, △BDG 정삼각형 → 60° → 옳지 않음"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: "crop:fig-0329.png"
  latex: latex-bank/rpm-geo/items/0329.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수치 없음. 보기의 직선 쌍을 다른 면대각선·공간대각선 조합(AC 와 BH · AH 와 BG 등)으로 교체. 제약: 옳지 않은 보기가 정확히 하나 · 면대각선 두 개가 이루는 각은 0°·60°·90° 중 하나임을 표로 검산."
    creative: "(1) 「옳은 것의 개수」로 바꾸면 다섯 보기를 다 판정해야 해 ★2~3 (2) 두 직선이 이루는 각의 크기(60°)를 직접 묻기(0330 골조 · ★2) (3) 직육면체(a, b, c)로 바꾸면 대각선 사이 수직 조건이 길이에 의존해 ★3."
```

```yaml
- id: RPM-GEO-0330
  page: 53
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    EF = FG = 4, CG = 6 인 직육면체에서 BD 의 중점 M 에 대해 직선 ME 와 직선 DH 가 이루는 각 θ 의 cos θ.
  category: "DH ∥ MM'(M 의 밑면 정사영) → 직각삼각형 EMM' 에서 cos"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "꼬인 위치의 두 직선이 이루는 각 — 직육면체에서 평행이동(cos θ)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    M 의 밑면 EFGH 위로의 정사영 M' 은 밑면 정사각형의 중심이고 MM' ∥ DH 이므로 θ = ∠EMM'. EM' = 2√2, MM' = 6 → ME = √(8+36) = 2√11 → cos θ = MM'/ME = 6/(2√11) = 3√11/11. 평행이동·피타고라스 두 단계 · 통찰 0 · M_total 5 → ★2. 「중요」 태그는 빈출 표시.
  tier: star_2
  mechanism_primary: "DH ∥ MM'(M' = 밑면 중심) → θ = ∠EMM' → EM' = 2√2, MM' = 6 → ME = 2√11 → cos θ = 6/2√11 = 3√11/11"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{3\sqrt{11}}{11}$'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0330.png"
  latex: latex-bank/rpm-geo/items/0330.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑면 한 변 a 와 높이 h(4·6 → 2√11, 2·3 → √11, 6·4 → √34). 제약: EM'² + h² = a²/2 + h² 의 제곱근이 선택지 꼴로 정리 · 답은 h/√(a²/2 + h²)."
    creative: "(1) 두 직선을 ME 와 CG(같은 방향)로 바꿔도 동일 — 대신 ME 와 FH(밑면 대각선)로 바꾸면 EM' 위에 FH 가 있어 각이 바로 보여 ★1~2 (2) cos θ 를 주고 높이를 묻는 역방향(★2) (3) M 을 BD 의 내분점으로 옮기면 M' 이 중심이 아니어서 EM' 계산이 추가 → ★3."
```

```yaml
- id: RPM-GEO-0331
  page: 53
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    서로 수직인 두 평면 α, β 위의 두 직선 l, m 이 교선 XY 위의 점 P 에서 만나고 교선과 각각 45°, 30° 를 이룰 때 l, m 이 이루는 각 θ 의 cos θ.
  category: "l 위의 점 → 교선에 수선 → 삼수선으로 m 위 수선 → 직각삼각형 PAB"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 직선의 각을 잴 삼각형이 그림에 없으므로 l 위의 점 A 를 잡아 교선에 내린 수선 AA'(α ⊥ β 이므로 AA' ⊥ β)와 A' 에서 m 에 내린 수선 A'B 로 삼수선 정리(AB ⊥ m)를 써서 직각삼각형 PAB 를 만든다 — 결과적으로 cos θ = cos 45° · cos 30°"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "수직인 두 평면 위의 두 직선이 이루는 각 — 삼수선으로 직각삼각형 만들기(cos θ = cos φ₁ cos φ₂)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    l 위에 PA = 2 인 점 A 를 잡고 교선에 내린 수선의 발 A' 에 대해 PA' = √2, AA' = √2. α ⊥ β 이므로 AA' ⊥ β 이고 A' 에서 m 에 내린 수선의 발 B 에 대해 삼수선 정리로 AB ⊥ m. PB = PA' cos 30° = √6/2 → cos θ = PB/PA = √6/4. 보조선 세 개로 직각삼각형을 구성하는 통찰(RT d2) · M_total 6 → ★3.
  tier: star_3
  mechanism_primary: "A ∈ l (PA = 2) → A' (교선 위 수선의 발 · PA' = √2, AA' ⊥ β) → B (A' 에서 m 에 수선 · PB = √2 cos 30° = √6/2) → 삼수선 AB ⊥ m → cos θ = PB/PA = √6/4"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{\sqrt{6}}{4}$'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0331.png"
  latex: latex-bank/rpm-geo/items/0331.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 각(45°, 30°)을 다른 특수각 쌍(60°·45° → √2/4, 60°·30° → √3/4)으로. 제약: 두 직선이 교선의 같은 쪽 방향으로 뻗어야 cos θ = cos φ₁ cos φ₂ 가 양수 · 두 각의 합이 90° 를 넘으면 그림 라벨 재배치."
    creative: "(1) 두 평면이 수직이 아니라 60° 를 이루면 AA' 이 β 에 수직이 아니어서 삼수선이 깨짐 → 좌표·벡터로 풀어야 ★4 (2) cos θ 를 주고 한 각을 묻는 역방향(★3) (3) 두 직선이 교선과 이루는 각이 같을 때(45°·45°) θ = 60° 임을 정육면체로 확인하게 하기(★2~3)."
```

```yaml
- id: RPM-GEO-0332
  page: 53
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    AB = 1, AC = 2, ∠BAC = 90° 인 직각삼각형을 밑면으로 하는 삼각기둥에서 A 에서 EF 에 내린 수선의 발 H 에 대해 AH = 3√5/5 일 때 선분 AD(높이)의 길이. 5지선다.
  category: "삼수선(AD ⊥ 밑면, AH ⊥ EF → DH ⊥ EF) → DH → 피타고라스"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼수선의 정리 — 기둥 높이·수선의 길이 사이의 피타고라스"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    AD ⊥ 평면 DEF, AH ⊥ EF 이므로 삼수선 정리로 DH ⊥ EF. △DEF(1, 2, √5)에서 DH = DE·DF/EF = 2/√5 = 2√5/5. AD = √(AH² − DH²) = √(9/5 − 4/5) = 1. 삼수선 표준 절차와 √5 분수 계산 · 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "삼수선: AD ⊥ 밑면, AH ⊥ EF → DH ⊥ EF → DH = 1·2/√5 = 2√5/5 → AD = √(AH² − DH²) = √(9/5 − 4/5) = 1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0332.png"
  latex: latex-bank/rpm-geo/items/0332.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑면 직각변(1, 2 → DH = 2/√5 · 3, 4 → DH = 12/5)과 AH. 제약: AH² − DH² 이 완전제곱(또는 선택지 꼴)이 되도록 AH 를 역산해 제시 · 3-4-5 밑면이면 무리수 없이 정리."
    creative: "(1) AD 를 주고 AH 를 묻는 정방향(★2) (2) AH 대신 A 와 직선 EF 사이의 거리로 표현을 바꾸기(같은 골조 ★2) (3) 수선의 발 H 가 EF 를 어떤 비로 나누는지 묻기(DH 의 위치 · ★3)."
```

```yaml
- id: RPM-GEO-0333
  page: 54
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["수능 기출"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    한 모서리 4 인 정육면체 ABCD-EFGH 에서 AD 의 중점 M 에 대해 △MEG 의 넓이. 5지선다.
  category: "M 의 밑면 정사영 → EG 까지 거리 → 삼수선으로 높이 → 넓이"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정육면체 속 삼각형의 넓이 — 삼수선으로 높이 구하기(수능 기출)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    M 의 밑면 EFGH 위로의 정사영 M' 은 EH 의 중점. M' 에서 EG 까지의 거리는 √2(밑면 정사각형에서 대각선까지) → 삼수선으로 M 에서 EG 에 내린 수선의 길이 = √(2 + 16) = 3√2. 넓이 = (1/2)·4√2·3√2 = 12. 세 변(2√5, 6, 4√2)으로 코사인법칙을 써도 됨. 표준 절차 · 통찰 0 · M_total 6 → ★2(기출이지만 통찰 없음 → +0).
  tier: star_2
  mechanism_primary: "M → M'(EH 중점) → d(M', EG) = √2 → 삼수선으로 높이 √(2 + 4²) = 3√2 → S = (1/2)·4√2·3√2 = 12"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0333.png"
  latex: latex-bank/rpm-geo/items/0333.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모서리 길이 a(넓이 = 3a²/4 · a=4 → 12, a=2 → 3)와 M 의 위치(AD 의 1:3 내분점 → M' 에서 EG 까지 거리 변화). 제약: 높이² = d² + a² 이 완전제곱이 아니어도 넓이는 정리됨 — 선택지 간격 1/2 유지."
    creative: "(1) △MEG 와 밑면 EFGH 가 이루는 각의 cos(정사영 △M'EG = 4 → 4/12 = 1/3)을 묻기(★2~3) (2) M 을 모서리 위가 아니라 면 ABCD 의 중심으로 옮기면 정사영이 EG 위에 떨어져 삼각형이 퇴화 — 함정형 ★2 (3) 넓이를 주고 M 의 위치(내분비)를 묻는 역방향(★3)."
```

```yaml
- id: RPM-GEO-0334
  page: 54
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    평면 α 위의 선분 AB(A 는 교선 l 위 · AB = 4√6 · l 과 30°)와 B 에서 평면 β 에 내린 수선의 발 C(BC = 4)에 대해 두 평면 α, β 가 이루는 각의 cos θ.
  category: "B 에서 교선에 수선 → 삼수선으로 이면각의 평면각 → cos"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 평면이 이루는 각 — 삼수선으로 이면각의 평면각 만들기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    B 에서 교선 l 에 내린 수선의 발 D 에 대해 BD = AB sin 30° = 2√6. BC ⊥ β, BD ⊥ l 이므로 삼수선으로 CD ⊥ l, 따라서 ∠BDC = θ. sin θ = BC/BD = 4/(2√6) = √6/3 → cos θ = √3/3(또는 CD = √(24−16) = 2√2 → cos θ = CD/BD). 이면각 표준 절차 · 통찰 0 · M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "D = B 의 l 위 수선의 발 → BD = 4√6 sin 30° = 2√6 → 삼수선 CD ⊥ l → θ = ∠BDC → CD = √(24 − 16) = 2√2 → cos θ = CD/BD = √3/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{\sqrt{3}}{3}$'
  answer_source: "답지"
  figure: "crop:fig-0334.png"
  latex: latex-bank/rpm-geo/items/0334.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AB 와 각(30°·45°·60°), BC. 제약: BD = AB sin φ > BC 이어야 하고 BD² − BC² 이 정리되는 수(4√6·1/2 = 2√6, BC = 4 → CD = 2√2)."
    creative: "(1) cos θ 와 AB 를 주고 BC(점과 평면 사이 거리)를 묻는 역방향(★2) (2) AC 의 길이를 묻기(AC² = AB² − BC²)로 바꾸면 삼수선 없이 풀려 ★1~2 (3) A 가 교선 위에 있지 않은 설정으로 바꾸면 BD 계산에 추가 정보 필요 → ★3."
```

```yaml
- id: RPM-GEO-0335
  page: 54
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    밑면이 직각이등변삼각형인 삼각기둥에서 ∠BDE = 60° 일 때 직선 BD 와 평면 BEFC 가 이루는 각 θ 의 sin θ. 5지선다.
  category: "D 의 정사영 = F → θ = ∠DBF → BD 를 ∠BDE 로 → sin"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "길이 없이 각 60° 만 주어진 조건을 DF = EF = 1 로 두고 BE ⊥ 평면 DEF 로 △BED 가 E 에서 직각인 삼각형임을 봐서 BD = DE / cos 60° = 2√2 로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "직선과 평면이 이루는 각 — 정사영의 발 찾기(삼각기둥 · 길이 없이 각만 주어짐)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    DF ⊥ EF, DF ⊥ CF 이므로 DF ⊥ 평면 BEFC, D 의 정사영은 F 이고 θ = ∠DBF. DF = EF = 1 로 두면 DE = √2, BE ⊥ DE 이므로 △BED 에서 BD = DE / cos 60° = 2√2. sin θ = DF/BD = 1/(2√2) = √2/4. 정사영의 발 찾기는 표준이나 길이를 스스로 두고(Mₐ 2) 각 조건을 직각삼각형으로 옮기는 동치 변환 1개(EQV d1) · M_total 6 → ★3.
  tier: star_3
  mechanism_primary: "DF ⊥ 평면 BEFC → θ = ∠DBF → DF = 1, DE = √2, BE ⊥ DE → BD = DE/cos 60° = 2√2 → sin θ = DF/BD = √2/4"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "①"
  answer_source: "답지"
  figure: "crop:fig-0335.png"
  latex: latex-bank/rpm-geo/items/0335.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 ∠BDE(60° → 45° 면 BD = 2, sin θ = 1/2). 제약: 밑면이 직각이등변이어야 DE = √2·DF 가 자동 — 직각변 비를 1:2 로 바꾸면 DE = √5·DF 로 같은 골조 · 각은 특수각."
    creative: "(1) sin θ 대신 BD 와 평면 DEF(밑면)가 이루는 각을 묻기(BE 가 수선 · 각 30° 바로 · ★1~2) (2) 기둥 높이 BE 를 구체 수치로 주고 DF 를 묻기(역방향 ★3) (3) 평면 BEFC 대신 평면 ACFD(옆면)로 바꾸면 정사영의 발이 모서리 위 점이 아니어서 ★3~4."
```

```yaml
- id: RPM-GEO-0336
  page: 54
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    평행한 두 밑면이 합동인 타원이고 모선과 밑면이 이루는 각이 60° 인 입체(비스듬한 기둥)에서 밑면 타원의 넓이가 6√3π 일 때 내접하는 구의 반지름.
  category: "모선에 수직인 단면 = 원(내접구의 대원) → 타원과 원의 정사영 관계 → r"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "비스듬한 기둥을 「모선에 수직인 단면이 반지름 r 인 원이고 그 r 이 내접구의 반지름」인 원기둥으로 보고, 밑면 타원을 그 원과 정사영 관계(두 평면의 각 = 90° − 60° = 30°)로 옮김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "정사영의 넓이 — 비스듬한 기둥의 타원 밑면과 모선에 수직인 원 단면(내접구)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    내접구는 옆면에 접하므로 모선에 수직인 단면 원의 반지름이 구의 반지름 r. 그 단면 평면과 밑면이 이루는 각은 모선과 밑면의 각의 여각 30° 이고 밑면 타원의 정사영이 단면 원이므로 πr² = 6√3π cos 30° = 9π → r = 3. 입체를 원기둥의 기울어진 절단으로 다시 보는 통찰(RT d2) · M_total 5 → ★3.
  tier: star_3
  mechanism_primary: "내접구 반지름 = 모선에 수직인 단면 원의 반지름 r → 단면 평면과 밑면의 각 = 90° − 60° = 30° → πr² = 6√3π · cos 30° = 9π → r = 3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$3$"
  answer_source: "답지"
  figure: "crop:fig-0336.png"
  latex: latex-bank/rpm-geo/items/0336.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "타원 넓이와 모선 각(60° → cos 30° · 45° → cos 45°). 제약: 타원 넓이 × cos(여각) = πr² 에서 r 이 정수가 되도록 타원 넓이에 무리수 인수(√3, √2)를 미리 넣음 · 기둥 높이가 2r 이상이라는 암묵 조건."
    creative: "(1) 반지름을 주고 타원 넓이를 묻는 정방향(★2) (2) 타원의 장축·단축을 묻기(단축 = 2r, 장축 = 2r / sin 60°)로 바꾸면 0309 골조와 결합 ★3 (3) 구가 두 밑면에도 접한다는 조건을 추가해 기둥의 높이·부피까지 묻기(★4)."
```

```yaml
- id: RPM-GEO-0337
  page: 54
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    한 모서리 4 인 정육면체에서 여섯 모서리 AD, AE, EF, FG, CG, CD 의 중점 I, J, K, L, M, N 이 이루는 평면(정육각형 단면)과 평면 EFGH 가 이루는 각의 cos θ. 5지선다.
  category: "정육각형 단면 ⊥ 대각선 BH → 법선 각 · 또는 정사영 넓이 비 12/12√3"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "중점 여섯 개가 만드는 정육각형 단면이 정육면체의 대각선 BH 에 수직임(대칭)을 써서 두 평면의 각을 두 법선 BH, BF 가 이루는 각 ∠HBF 로 환원 — cos θ = BF/BH = 4/4√3. 정사영 넓이 비(정사영 12 / 정육각형 12√3)로도 같은 답"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "정육면체의 정육각형 단면과 밑면이 이루는 각(대각선에 수직 · 정사영 넓이)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    단면은 한 변이 2√2 인 정육각형(넓이 12√3)이고 밑면 위로의 정사영은 정사각형에서 두 귀퉁이 삼각형(넓이 2 씩)을 뺀 12 → cos θ = 12/(12√3) = √3/3. 정육각형이 대각선 BH 에 수직임을 알면 법선 각으로 cos θ = BF/BH = √3/3 한 줄. 대칭 인식 또는 정사영 도형 판단이 필요한 통찰 1개(SYM d1) · M_total 6 → ★3.
  tier: star_3
  mechanism_primary: "정육각형 단면 ⊥ BH → θ = ∠(BH, BF) → cos θ = BF/BH = 4/(4√3) = √3/3 (검산: 정사영 12 / 정육각형 12√3)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "③"
  answer_source: "답지"
  figure: "crop:fig-0337.png"
  latex: latex-bank/rpm-geo/items/0337.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모서리 길이는 답에 무관(cos θ = √3/3 고정). 답을 바꾸려면 단면을 중점이 아닌 내분점(1:3)으로 옮겨 육각형이 정육각형이 아니게 하거나 직육면체로 — 그러면 법선 풀이가 닫히고 정사영 넓이 풀이만 남음."
    creative: "(1) 정육각형의 넓이(12√3)나 정사영의 넓이(12)를 각각 묻기(★2) (2) 단면과 평면 AEHD(옆면)가 이루는 각으로 바꿔도 대칭으로 같은 답 — 「세 면과 이루는 각이 모두 같음」을 보이게 하기(★3 · SYM) (3) 단면 대신 삼각형 단면 △BDE(한 변 4√2 정삼각형)와 밑면의 각(cos = 1/√3)을 비교하는 소문항(★3 · 0314 골조)."
```

```yaml
- id: RPM-GEO-0338
  page: 54
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    한 모서리 10 인 정사면체 ABCD 에서 AC 를 2:3 으로 내분하는 점 F 에 대해 △FBD 의 평면 BCD 위로의 정사영의 넓이.
  category: "내분점의 정사영(A → 무게중심 G) → 정사영 삼각형 넓이를 GBD·CBD 의 가중 평균으로"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "평면 FBD 와 BCD 의 이면각을 구하지 않고 F 의 정사영 F'(A → G 무게중심, C → C 이므로 GC 의 2:3 내분점)으로 정사영 삼각형 F'BD 를 직접 그려, 넓이를 △GBD(25√3/3)와 △CBD(25√3)의 3:2 가중 평균으로 계산"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "정사영의 넓이 — 정사면체 내분점의 정사영(꼭짓점 → 무게중심)과 삼각형 넓이 비"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    A 의 정사영은 무게중심 G, C 는 그대로이므로 F 의 정사영 F' 은 GC 를 2:3 으로 내분. F' 이 선분 GC 위를 움직일 때 △F'BD 의 넓이는 위치에 대해 일차이므로 (3/5)·△GBD + (2/5)·△CBD = 5√3 + 10√3 = 15√3. 이면각 대신 정사영 도형을 직접 구성하는 통찰(RT d2)과 넓이 보간 · M_total 6 → ★3. 「중요」 태그.
  tier: star_3
  mechanism_primary: "A → G, C → C → F' = GC 의 2:3 내분점 → △F'BD = (3/5)·(25√3/3) + (2/5)·25√3 = 5√3 + 10√3 = 15√3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$15\sqrt{3}$'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0338.png"
  latex: latex-bank/rpm-geo/items/0338.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모서리 길이 a(넓이는 a² 비례)와 내분비 m:n(AF:FC). 제약: 답 = (√3/4)a² · (n + m/3)/(m+n)... 일반식 △F'BD = (√3/4)a² · [n/(m+n) + (1/3)·m/(m+n)] 이 k√3 꼴로 정리되도록 a 를 (m+n) 의 배수로."
    creative: "(1) F 가 AC 의 중점이면 (1/2)(1 + 1/3) = 2/3 배 → 같은 골조 ★2~3 (2) △FBD 의 실제 넓이와 정사영 넓이로 평면 FBD 와 BCD 의 이면각 cos 을 묻기(넓이 계산 추가 · ★4) (3) 정사영을 평면 ABD 위로 바꾸면 C 의 정사영(무게중심)과 A 고정 — 대칭으로 같은 값임을 확인시키기(★3 · SYM)."
```

### 서술형 주관식

```yaml
- id: RPM-GEO-0339
  page: 55
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    평면 α 밖의 점 P 의 수선의 발 O, O 에서 α 위의 직선 AB 에 내린 수선의 발 Q 에 대해 OP = 8, AQ = 4√6, AP = 14 일 때 선분 OQ 의 길이.
  category: "삼수선(PQ ⊥ AB) → 직각삼각형 APQ → 직각삼각형 POQ"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼수선의 정리 — 수선의 발과 피타고라스 사슬(점·평면·직선)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    PO ⊥ α, OQ ⊥ AB 이므로 삼수선 정리로 PQ ⊥ AB. △APQ 에서 PQ = √(196 − 96) = 10, △POQ 에서 OQ = √(100 − 64) = 6. 삼수선 한 번과 피타고라스 두 번의 표준 사슬 · 통찰 0 · M_total 5. 서술형 구역 출발점 ★3 이지만 0332·0334 와 같은 골조이므로 −1 하여 ★2 [분류 이슈] 서술형 출발점 ★3 vs 표준 절차 ★2 — 라벨은 ★2.
  tier: star_2
  mechanism_primary: "삼수선: PO ⊥ α, OQ ⊥ AB → PQ ⊥ AB → PQ = √(14² − (4√6)²) = 10 → OQ = √(10² − 8²) = 6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$6$"
  answer_source: "답지"
  figure: "crop:fig-0339.png"
  latex: latex-bank/rpm-geo/items/0339.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "OP, AQ, AP 세 수. 제약: AP² − AQ² 과 그 결과 − OP² 이 모두 완전제곱(예: OP 6, AQ 5, AP √(25+100) → 정수 조합을 역산해 제시) · AQ < AP, OP < PQ."
    creative: "(1) OQ 를 주고 AP 를 묻는 정방향(★2) (2) 조건을 「P 와 직선 AB 사이의 거리」 「O 와 직선 AB 사이의 거리」 표현으로 바꿔 삼수선 구조를 스스로 그리게 하기(★2~3) (3) Q 가 선분 AB 의 내부 점인지 판정까지 요구(AQ 와 AB 길이 추가 · ★3)."
```

```yaml
- id: RPM-GEO-0340
  page: 55
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "서술형"
  summary: |
    AD = 15, AE = 16, CD = 20 인 직육면체에서 △DEG 의 넓이.
  category: "D 의 밑면 정사영 H → H 에서 EG 까지 거리 → 삼수선으로 높이 → 넓이"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직육면체 속 삼각형의 넓이 — 삼수선으로 높이 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    D 의 밑면 정사영은 H. 밑면 직각삼각형 HEG(15, 20, 25)에서 H 에서 EG 까지의 거리 HI = 15·20/25 = 12, 삼수선으로 DI ⊥ EG 이고 DI = √(12² + 16²) = 20. 넓이 = (1/2)·25·20 = 250. 0333 과 같은 골조에 3-4-5 배수만 얹은 표준 절차 · 통찰 0 · M_total 5. 서술형 출발점 ★3 에서 −1 하여 ★2 [분류 이슈] 서술형 출발점 ★3 vs 표준 절차 ★2 — 라벨은 ★2.
  tier: star_2
  mechanism_primary: "D → H → HI = HE·HG/EG = 15·20/25 = 12 → 삼수선 DI ⊥ EG, DI = √(12² + 16²) = 20 → S = (1/2)·25·20 = 250"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$250$"
  answer_source: "답지"
  figure: "crop:fig-0340.png"
  latex: latex-bank/rpm-geo/items/0340.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 모서리(15, 20, 16). 제약: 밑면 두 변이 피타고라스 쌍(3-4-5 배수)이면 HI 가 정수, 여기에 HI-높이-DI 가 다시 피타고라스 쌍(12-16-20)이 되도록 높이를 고름 — 두 겹 피타고라스가 골조."
    creative: "(1) △DEG 와 밑면 EFGH 가 이루는 각의 cos(정사영 △HEG = 150 → 150/250 = 3/5)을 묻기(★2~3) (2) 넓이를 주고 높이 AE 를 묻는 역방향(★3) (3) E 에서 평면 DEG… 대신 H 에서 평면 DEG 까지의 거리(부피 등식 · 0322 골조)를 묻기(★3)."
```

```yaml
- id: RPM-GEO-0341
  page: 55
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    AD = AE = 1, CD = 2 인 직육면체의 대각선 DF 가 세 평면 ABCD, AEFB, AEHD 와 이루는 각 α, β, γ 에 대해 cos²α + cos²β + cos²γ 의 값.
  category: "대각선의 세 면 위 정사영 → 세 cos → 제곱합(=2 항등)"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직선과 평면이 이루는 각 — 직육면체 대각선과 세 면(정사영 = 면대각선 · cos² 합 = 2)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    DF = √6. DF 의 세 면 위 정사영은 각각 면대각선 DB(√5), AF(√5), DE(√2)이므로 cos²α = 5/6, cos²β = 5/6, cos²γ = 2/6 → 합 2. 같은 절차 세 번 · 통찰 0 · M_total 5. 서술형 출발점 ★3 에서 −1 하여 ★2 [분류 이슈] 서술형 출발점 ★3 vs 표준 절차 ★2 — 라벨은 ★2. 합이 치수와 무관하게 항상 2 임(sin² 합 = 1)은 변형 소재.
  tier: star_2
  mechanism_primary: "DF = √6 → 정사영 DB = √5 (면 ABCD), AF = √5 (면 AEFB), DE = √2 (면 AEHD) → cos² 합 = (5 + 5 + 2)/6 = 2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$2$"
  answer_source: "답지"
  figure: "crop:fig-0341.png"
  latex: latex-bank/rpm-geo/items/0341.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 모서리(1, 1, 2)를 임의의 (a, b, c)로 바꿔도 답은 항상 2 — 답을 바꾸려면 cos² 합 대신 cos α · cos β 처럼 곱이나 특정 각 하나를 묻기. 제약: 세 면이 한 꼭짓점을 공유하는 세 면이어야 항등식이 성립."
    creative: "(1) 「합이 치수에 관계없이 일정함을 보이시오」 서술형(★3 · 항등식 발견 PD 근처) (2) 정사영 길이 세 개의 제곱합(= 2·DF²)을 묻기(★2) (3) 대각선이 세 면과 이루는 각이 모두 같은 직육면체는 정육면체뿐임을 묻기(★3)."
```

```yaml
- id: RPM-GEO-0342
  page: 55
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    이면각이 30° 인 두 평면 α, β(교선 AB)에서 α 위의 점 P 와 교선 위의 점 Q 에 대해 PQ = 4, ∠PQB = 60° 일 때 선분 PQ 의 평면 β 위로의 정사영의 길이.
  category: "P 에서 교선에 수선 → 교선 방향 성분 보존 · 수직 성분 × cos 30° → 피타고라스"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "PQ 가 교선과 비스듬하므로 정사영 길이를 PQ cos 30° 로 두면 틀림 — P 에서 교선에 내린 수선의 발 H 로 PQ 를 교선 방향 QH(보존)와 수직 방향 PH(× cos 30°)로 분해해 정사영 P'Q 를 직각삼각형 QHP' 로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "정사영의 길이 — 교선과 비스듬한 선분의 다른 평면 위 정사영(성분 분해)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    P 에서 교선 AB 에 내린 수선의 발 H: QH = 4 cos 60° = 2, PH = 4 sin 60° = 2√3. P 의 β 위 정사영 P' 에 대해 삼수선으로 P'H ⊥ AB 이고 ∠PHP' = 30° 이므로 P'H = 2√3 cos 30° = 3. P'Q = √(2² + 3²) = √13. 정사영 길이를 성분 분해로 옮기는 통찰(RT d1) · M_total 5 → 서술형 출발점 ★3 유지. 함정: PQ cos 30° = 2√3 로 답하는 오류.
  tier: star_3
  mechanism_primary: "H = P 의 교선 위 수선의 발 → QH = 4 cos 60° = 2, PH = 4 sin 60° = 2√3 → P'H = PH cos 30° = 3 → P'Q = √(2² + 3²) = √13"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\sqrt{13}$'
  answer_source: "답지"
  figure: "crop:fig-0342.png"
  latex: latex-bank/rpm-geo/items/0342.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "PQ, ∠PQB(60° → 45° · 30°), 이면각(30° → 60° · 45°). 제약: QH² + (PH cos θ)² 이 정리되도록 PQ 에 2 의 배수·특수각 조합 · ∠PQB = 90° 이면 QH = 0 이 되어 PQ cos θ 로 퇴화(함정형 대비)."
    creative: "(1) 정사영 길이와 PQ 를 주고 이면각을 묻는 역방향(★3) (2) PQ 와 평면 β 가 이루는 각의 sin(= PP'/PQ = PH sin 30°/PQ)을 묻기(★3) (3) P 의 정사영 P' 과 A, B 로 삼각형을 만들어 넓이 묻기(정사영 넓이 = 원래 × cos 30° · ★3)."
```

### 실력 Up

```yaml
- id: RPM-GEO-0343
  page: 55
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    평면 α 밖의 점 A 에 대해 AP = 4, AQ = 5, ∠APQ = 90° 인 직각삼각형 APQ 가 되도록 α 위에 P, Q 를 잡을 때 선분 PQ 가 그리는 도형의 넓이. (A 와 α 사이 거리는 4 미만)
  category: "수선의 발 O → 삼수선으로 PQ 가 원(반지름 OP)의 접선 → 두 동심원 사이 고리 → π·PQ²"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "A 의 수선의 발 O 를 잡으면 P 는 원(중심 O · 반지름 OP = √(16 − h²)) 위에 있고, AO ⊥ α · AP ⊥ PQ 이므로 삼수선으로 OP ⊥ PQ — 즉 PQ 는 그 원의 접선이고 Q 는 원(반지름 OQ = √(25 − h²)) 위. 공간 조건이 평면 α 위 「접선이 쓸고 지나는 영역」으로 바뀜"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "고리의 넓이 π(OQ² − OP²) 를 OQ² − OP² = PQ² = 9 로 옮겨 A 의 높이 h 를 모른 채 답을 확정 — 「거리 < 4」 조건은 원이 존재하기 위한 범위일 뿐"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "삼수선의 정리와 궤적 — 접선 조건으로 선분이 쓸고 지나는 고리(annulus) 넓이"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    A 의 수선의 발을 O 라 하면 P, Q 는 각각 반지름 OP, OQ 인 동심원 위에 있고 삼수선으로 OP ⊥ PQ 이므로 PQ 는 작은 원의 접선. 접선이 한 바퀴 돌며 쓸고 지나는 영역은 두 원 사이 고리이고 넓이 = π(OQ² − OP²) = π·PQ² = π(25 − 16) = 9π. 궤적으로의 전환(RT d2)과 높이 무관성(EQV d1) 두 통찰 · Mₐ 2 · M_total 6 → 실력 Up 출발점 ★4 유지(통찰 2개로 +1 후보이나 ★5 조건 미달).
  tier: star_4
  mechanism_primary: "O = A 의 수선의 발 → 삼수선(AO ⊥ α, AP ⊥ PQ) → OP ⊥ PQ → PQ 는 원(O, OP) 의 접선, Q 는 원(O, OQ) 위 → 고리 넓이 π(OQ² − OP²) = π·PQ² = 9π"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$9\pi$'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0343.png"
  latex: latex-bank/rpm-geo/items/0343.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AP, AQ (4, 5 → PQ 3 · 5, 13 → PQ 12 · 6, 10 → PQ 8). 제약: AQ > AP 이고 답 = π(AQ² − AP²) 가 정수 배 π 가 되도록 · 「A 와 α 의 거리 < AP」 조건을 함께 조정."
    creative: "(1) A 와 α 의 거리 h 를 구체로 주고 두 원의 반지름까지 묻기(★3 · EQV 통찰이 사라짐) (2) ∠APQ = 90° 대신 ∠AQP = 90° 로 바꾸면 접점이 Q 가 되어 고리 구조는 같으나 안팎 원이 바뀜(★4) (3) 선분 PQ 의 중점이 그리는 도형(원 · 반지름 √(OP² + 9/4))을 묻기(★4~5 · 궤적 추가)."
```

```yaml
- id: RPM-GEO-0344
  page: 55
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    반지름 4 인 반구가 평면 α 와 한 점에서 만나고 밑면이 α 와 60° 를 이루도록 놓여 있을 때 반구의 α 위로의 정사영의 넓이.
  category: "반구의 정사영 = 구 정사영(원)의 절반 + 밑면 원 정사영(타원)의 절반"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "입체(반구)의 정사영을 두 평면 도형의 정사영으로 분해 — 곡면 쪽은 구의 윤곽 원(반지름 4)의 절반, 밑면 쪽은 밑면 원의 정사영 타원(16π cos 60° = 8π)의 절반이며 둘이 공통 지름을 경계로 붙음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "정사영의 넓이 — 기울어진 반구의 정사영(반원 + 반타원 분해)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    반구를 α 에 정사영하면 구의 윤곽 원(넓이 16π)의 절반 8π 와, 밑면 원(16π)이 60° 기울어 생기는 타원(16π cos 60° = 8π)의 절반 4π 가 밑면 지름의 정사영을 공유하며 붙는다. 합 12π. 정사영 도형을 분해·구성하는 통찰(RT d2) 하나가 전부이고 M_total 5 이므로 M·I 만으로는 ★3 후보이나 실력 Up 구역 출발점 ★4 유지 [분류 이슈] ★3/★4.
  tier: star_4
  mechanism_primary: "반구 정사영 = 구 윤곽 원의 절반 (16π/2 = 8π) + 밑면 원 정사영 타원의 절반 (16π cos 60° / 2 = 4π) → 12π"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$12\pi$'
  answer_source: "답지"
  figure: "crop:fig-0344.png"
  latex: latex-bank/rpm-geo/items/0344.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "반지름 r 과 각 θ(60° → 답 πr²(1 + cos θ)/2 = 12π · 45° 면 8π(1 + √2/2)). 제약: 답 = (πr²/2)(1 + cos θ) 가 정리되는 조합 · θ 가 90° 면 반원(8π), 0° 면 원(16π)이 되는 극단 검산."
    creative: "(1) 반구 대신 반원판(밑면 없는 곡면)이나 원기둥 절반으로 바꿔 분해 구조를 다르게(★4) (2) 정사영 넓이를 주고 각을 묻는 역방향(★4) (3) 반구를 밑면이 α 와 평행하게 놓았을 때와의 넓이 비 묻기(★3)."
```

```yaml
- id: RPM-GEO-0345
  page: 55
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    차광막이 지면과 15°, 태양 광선이 지면과 30° 를 이룰 때 차광막의 그림자 넓이가 20 이면 차광막의 넓이.
  category: "광선에 수직인 평면을 매개 → 차광막·그림자의 정사영이 같음 → S cos 45° = 20 cos 60°"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "평행 광선의 그림자를 「광선에 수직인 평면 γ 위로의 정사영이 차광막과 그림자에서 같다」는 등식으로 옮김 — S · cos(차광막과 γ 의 각) = 20 · cos(지면과 γ 의 각)"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "그림의 두 각 방향을 읽어 차광막과 광선의 각 = 30° + 15° = 45°(차가 아니라 합), 지면과 광선의 각 = 30° 로 두 여각(45°, 60°)을 확정"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "정사영의 실생활 활용 — 기울어진 판의 그림자(광선에 수직인 평면을 매개로 두 정사영 등식)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    광선에 수직인 평면 γ 를 두면 차광막과 그림자는 γ 위로 같은 정사영을 가진다. 차광막과 광선의 각은 45°(30° + 15°)이므로 차광막과 γ 의 각은 45°, 지면과 γ 의 각은 60°. S cos 45° = 20 cos 60° → S = 10/(√2/2) = 10√2. 매개 평면 모델(RT d2)과 각 합성(EQV d1) 두 통찰 · M_total 5 → 실력 Up 출발점 ★4 유지(+1 후보이나 ★5 조건 미달). 함정: 30° − 15° 로 두면 S = 10(√6 + √2).
  tier: star_4
  mechanism_primary: "광선 ⊥ 평면 γ → S · cos(90° − 45°) = 20 · cos(90° − 30°) → S · √2/2 = 10 → S = 10√2"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$10\sqrt{2}$'
  answer_source: "답지"
  figure: "crop:fig-0345.png"
  latex: latex-bank/rpm-geo/items/0345.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 각(15°, 30°)과 그림자 넓이. 제약: 차광막-광선 각과 지면-광선 각이 모두 특수각이 되는 쌍(15°+30° = 45° · 30°+30° = 60° · 15°+45° = 60°)만 가능 · 답 = 그림자 × sin(지면-광선 각)/sin(차광막-광선 각)."
    creative: "(1) 차광막을 광선 쪽으로 기울여 각이 30° − 15° = 15° 가 되게 하면 sin 15° 가 나와 범위 밖 — 합이 특수각이 되는 배치 유지가 핵심 (2) 차광막 넓이를 주고 그림자를 묻는 정방향(★3) (3) 차광막이 지면과 평행할 때(그림자 = 차광막)와 수직일 때(그림자 = S·cos 30°/sin 30°)를 비교하는 소문항(★3~4)."
```

## 표본 판정 요약 (38문)

- ★ 분포: ★1 3 · ★2 17 · ★3 15 · ★4 3 · ★5 0
- 통찰형 18 · 절차형 20 · premium 0
- 통찰 유형 분포(20개): I-RT 13 · I-EQV 5 · I-MI 1 · I-SYM 1. depth 2 는 0320·0324·0331·0336·0338·0343·0344·0345 의 RT 8개, 나머지는 depth 1. 통찰 2개 문항은 실력 Up 의 0343·0345 뿐.
- M_total 분포: 4 → 3문(0308·0311·0312) · 5 → 21문 · 6 → 13문 · 7 → 1문(0328 · Mₐ 3). Mₐ 2 는 0316·0335·0343(길이 없이 비·각만 주어짐), Mₖ 2 는 0313·0317·0319·0320·0322·0331·0332·0333·0337·0338.
- type_hint 상위: 「정사영의 넓이 — …」 9(0311·0312·0313·0317·0318·0319·0336·0338·0344) · 「정사영의 길이 — …」 4(0308·0309·0310·0342) · 「정사영의 실생활 활용 — …」 4(0323·0324·0325·0345 · 그 중 「구의 그림자」 2) · 「삼수선의 정리 — …」+「… 삼수선으로 높이 구하기」 4(0332·0339 / 0333·0340) · 「정사영의 넓이로 이면각 구하기 — …」 3(0314·0315·0316) · 「수선의 길이 — …」 3(0320·0321·0322) · 1건씩: 꼬인 위치 두 직선의 각(0330) · 정육면체 두 직선 수직 판정(0329) · 정팔면체 위치 관계(0327) · 평면의 결정 조건(0326) · 위치 관계 명제(0328) · 수직인 두 평면 위 두 직선의 각(0331) · 두 평면이 이루는 각—삼수선(0334) · 직선과 평면이 이루는 각(0335·0341 각 다른 접미) · 정육각형 단면의 각(0337) · 삼수선과 궤적(0343)
- 벤더 신호 대비: 유형 구역 −1 3건(0308·0311·0312 · 통찰 0·M_total 4) · 유형 UP 에서 level 중을 출발점으로 삼은 1건(0321 ★2) · 서술형 −1 3건(0339·0340·0341) · 실력 Up +1 보류 2건(0343·0345 · ★5 조건 미달). 2단 이상 어긋난 문항은 없음. 전사 답은 38문 모두 재계산과 일치.
- 그림: 37문(0328 만 none). 0328 이 이 범위의 유일한 비그림 문항.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-GEO-0324 | 유형 UP 구역이지만 level 「중」. 각 식별(밑면과 α 의 각 = 반꼭지각의 여각)이 대표문제 0323 보다 어렵고 RT d2 라 ★3 으로 두었으나, level 대로면 ★2 | ★2 / ★3 |
| RPM-GEO-0328 | 명제 참·거짓 문항의 통찰을 I-MI d1 로 잡고 Mₐ 3 을 부여해 ★3·중상위권이 됨. 명제 문항의 통찰 인정 기준(반례 탐색을 MI 로 볼지 절차로 볼지)은 카탈로그에서 단원 공통으로 정해야 함 | ★2 / ★3 |
| RPM-GEO-0337 | 정육각형 단면 문항의 주 통찰을 SYM(대각선에 수직)으로 잡아 대상층이 중상위권이 됨. 정사영 넓이 비(RT) 풀이를 주 골조로 보면 중위권 ★3. 유형 카탈로그에서 어느 풀이를 표준으로 둘지 결정 필요 | ★3 |
| RPM-GEO-0339 | 서술형 구역(★3 출발)이나 삼수선+피타고라스 표준 사슬(0332·0334 와 같은 골조 · 통찰 0 · M_total 5)이라 −1 하여 ★2 | ★2 / ★3 |
| RPM-GEO-0340 | 서술형 구역(★3 출발)이나 0333(수능 기출 · ★2)과 같은 골조에 3-4-5 배수만 얹은 표준 절차 → ★2 | ★2 / ★3 |
| RPM-GEO-0341 | 서술형 구역(★3 출발)이나 「직선과 평면이 이루는 각」 표준 절차 세 번 반복(통찰 0 · M_total 5) → ★2. 합이 항상 2 인 항등식은 발견을 요구하지 않음 | ★2 / ★3 |
| RPM-GEO-0344 | 실력 Up 출발점 ★4 를 유지했으나 통찰 1개(RT d2)·M_total 5 로 M·I 만 보면 ★3. 정사영 도형 분해(반원 + 반타원)의 시각화 난도를 얼마나 인정할지에 따라 갈림 | ★3 / ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위의 정사영 문항은 골조가 하나로 수렴한다: 「정사영 도형 찾기(꼭짓점의 정사영: 정사면체 꼭짓점 → 무게중심, 정사각뿔 꼭짓점 → 밑면 중심, 직육면체 꼭짓점 → 바로 아래 꼭짓점) → 원래 넓이·정사영 넓이 → S' = S cos θ」. RPM 이 유형 10·11·12 로 나눈 기준(각이 주어짐 / 각을 구함 / 각이 안 주어짐)은 같은 공식의 어느 변수를 미지수로 두느냐의 차이라 카탈로그에서는 「정사영의 넓이(S' = S cos θ)」 한 유형 아래 「S 구하기 / θ 구하기 / θ 를 먼저 구하기」 하위 변형으로 통합해도 된다. base ★ 는 ★2(정사영 도형이 그림에 보이는 경우) · ★3(정사영 도형을 스스로 구성해야 하는 경우: 0310·0316·0338·0344).
- 따로 세울 유형: ① 「정사영의 길이」(0308·0309·0342 · ★1~3 · 교선과 비스듬한 선분의 성분 분해(0342)가 핵심 변별점), ② 「구·반구·원기둥의 단면과 정사영」(0309·0312·0313·0318·0336 · 단면 원 반지름·타원 장축 계산과 결합 · ★2~3), ③ 「정사영의 실생활 활용」(0323·0324·0325·0345 · 광선에 수직인 평면을 매개로 두 정사영을 잇는 모델 · base ★3, 판의 각 합성이 들어가면 ★4), ④ 「수선의 길이」(0320·0321·0322 · 공통수선·부피 등식·삼수선 세 골조가 달라 하위 유형 분리 필요 · ★2~3), ⑤ 「삼수선의 정리 사슬」(0332·0333·0334·0339·0340 · ★2 · 종합·서술형 구역에서 반복되는 기본 골조), ⑥ 「삼수선과 궤적」(0343 · ★4 · 이 범위에서 유일하게 접선·고리 궤적으로 확장 — 카탈로그의 ★4 슬롯 후보).
- 통합해도 될 유형: 0329·0330(꼬인 위치 두 직선의 각·수직 판정)과 0326·0327·0328(위치 관계·평면 결정·명제)은 01·02 범위(위치 관계 구역)의 유형에 흡수. 0314·0315·0337(정육면체·정사각뿔·정육각형 단면의 이면각)은 「정사영 넓이로 이면각」 하위 변형으로 묶되, 0337 은 「대각선에 수직인 단면(SYM)」 풀이가 있어 별도 태그.
- ★4 이상 후보는 실력 Up 3문(0343·0344·0345)뿐이며 모두 RT d2 가 주 통찰이다. 카탈로그의 ★4 슬롯에는 「궤적(0343)」「입체 정사영 분해(0344)」「그림자 매개 평면(0345)」 세 골조를 저노출 유형으로 등록할 만하다. ★5 는 이 범위에 없다(SC/VF/SYM/XU 를 주 통찰로 쓰는 문항이 0337 의 SYM 하나뿐).
