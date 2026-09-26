---
name: mechanism-데이터-RPM-GEO-04-p1
description: RPM 기하 04 공간좌표(1/3 · 교과서 04-1~04-4 + 유형 01~04) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 기하 (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-geo
  section: 04 공간좌표
  unit_code: GEO-04
  part: "1/3"
  extract_range: "57~60쪽 · 0346~0380"
  total_problems: 35
  unit_total: 105
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-geo/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-geo/items/<id>.tex
  image_source: latex-bank/rpm-geo/figures/ (crops.json)
---

# RPM 기하 · 04 공간좌표 (1/3) 정독 데이터 (v1.0)

이 파일은 RPM 기하 04 공간좌표의 첫 범위(57~60쪽 · 0346~0380 · 35문항)를 다룬다. 앞 16문(0346~0361)은 「교과서」 구역(04-1 공간좌표 · 04-2 두 점 사이의 거리 · 04-3 선분의 내분점 · 04-4 구의 방정식)의 기본 문제로 난이도 표시가 없고, 뒤 19문(0362~0380)은 「유형 01 좌표공간에서의 점의 좌표 · 유형 02 두 점 사이의 거리 · 유형 03 두 점으로부터 같은 거리에 있는 점 · 유형 04 좌표평면 위로의 정사영」의 유형별 기본 문제로 난이도(중하·중·상중)와 태그(대표문제 4 · 서술형 1)가 붙어 있다. RPM 의 벤더 난이도 신호는 구역이 곧 층(교과서 / 유형 / 유형 UP / 시험에 꼭 나오는 문제 / 서술형 / 실력 Up · 난이도 하~상 · 대표문제·중요·기출 태그)이며, 교과서 구역은 ★1, 유형 구역은 난이도대로(없으면 ★2) 출발해 M_total·통찰로 ±1 조정했다. 그림은 2문(0346 · 0365, 직육면체 크롭)이다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 사슬) · `insights[]`(절차형이면 빈 배열) · `variation_notes`(numeric: 바꿔도 되는 수와 제약 / creative: 골조를 유지한 설정 변경과 ★ 변동 지점)를 채웠다. 이 범위의 골조는 「좌표 규칙(수선의 발·대칭) → 거리 공식 → 거리 조건으로 미지 좌표·도형 판정 → 등거리 점 매개화 → 정사영 길이비·넓이비」로 이어지며, 통찰형은 점–직선 거리를 삼수선으로 옮기는 0371 과 좌표를 직각삼각형 구조로 읽는 0380 두 문항뿐이다.

## 문항 데이터

### 교과서 04-1 공간좌표

```yaml
- id: RPM-GEO-0346
  page: 57
  vendor_label: "교과서 04-1 공간좌표"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    원점이 한 꼭짓점이고 세 모서리가 x축(2)·y축(4)·z축(1) 위에 놓인 직육면체 그림에서 세 꼭짓점 A, B, C 의 좌표.
  category: "그림의 축 눈금 → 꼭짓점의 세 성분 읽기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직육면체 꼭짓점의 좌표 읽기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    그림에서 x 방향 2, y 방향 4, z 방향 1 을 읽고 각 꼭짓점이 어느 눈금을 갖는지 대응시키면 끝.
    A 는 x축 위 점 (2,0,0) 바로 위의 윗면 꼭짓점 (2,0,1), B 는 윗면 앞쪽 (2,4,1), C 는 그 아래 (2,4,0).
    좌표 정의 확인 한 단계·통찰 없음·M_total 4 → 교과서 구역 ★1.
  tier: star_1
  mechanism_primary: "그림의 축 눈금 (2, 4, 1) → 꼭짓점마다 x·y·z 성분 대응 → A(2,0,1)·B(2,4,1)·C(2,4,0)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\pt{A}(2,\,0,\,1)$, $\pt{B}(2,\,4,\,1)$, $\pt{C}(2,\,4,\,0)$'
  answer_source: "답지(해설 크롭)"
  figure: "crop:fig-0346.png"
  latex: latex-bank/rpm-geo/items/0346.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 모서리 길이 (2,4,1) 을 다른 자연수로, 묻는 꼭짓점 셋을 바꿈. 제약: 한 꼭짓점이 원점·세 모서리가 좌표축 위(그림 라벨 O·축 이름 고정)여야 좌표가 눈금만으로 읽힘."
    creative: "(1) 원점이 꼭짓점이 아닌 직육면체(한 꼭짓점과 모서리 길이 제시)로 나머지 꼭짓점 구하기(★1) (2) 읽은 좌표로 대각선 길이·두 꼭짓점 거리를 이어 묻기(★1~2 · 04-2 결합) (3) 그림 없이 「꼭짓점 (2,4,1) 인 직육면체」를 말로만 주고 특정 꼭짓점을 상상하게 하기(★2 · 공간 상상 부담)."
```

```yaml
- id: RPM-GEO-0347
  page: 57
  vendor_label: "교과서 04-1 공간좌표"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    점 P(-2,3,1) 에서 ⑴ x축 ⑵ z축 ⑶ xy평면 ⑷ yz평면에 내린 수선의 발의 좌표.
  category: "축·평면에 내린 수선의 발 → 해당 성분만 남기고 0"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "좌표축·좌표평면에 내린 수선의 발"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    축에 내린 수선의 발은 그 축 성분만 남기고 나머지를 0 으로, 평면에 내린 수선의 발은 그 평면에 없는 성분 하나만 0 으로.
    ⑴(-2,0,0) ⑵(0,0,1) ⑶(-2,3,0) ⑷(0,3,1). 네 소문항 모두 정의 대입 한 줄.
    통찰 없음·M_total 4 → 교과서 구역 ★1.
  tier: star_1
  mechanism_primary: "축 → 그 축 성분만 유지·나머지 0 / 평면 → 빠진 성분만 0 → ⑴(-2,0,0) ⑵(0,0,1) ⑶(-2,3,0) ⑷(0,3,1)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '(1) $(-2,\,0,\,0)$ \quad (2) $(0,\,0,\,1)$ \quad (3) $(-2,\,3,\,0)$ \quad (4) $(0,\,3,\,1)$'
  answer_source: "답지(해설 크롭)"
  figure: none
  latex: latex-bank/rpm-geo/items/0347.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "P 의 세 좌표(0 이 아닌 정수·부호 섞기)와 묻는 축·평면 조합(x/y/z축 · xy/yz/zx평면 중 넷). 제약: 세 좌표의 절댓값이 서로 달라야 어느 성분이 남았는지 답에서 구별됨."
    creative: "(1) 수선의 발까지의 거리(=버린 성분의 제곱합의 제곱근)를 묻기(★1 · 04-2 결합) (2) 두 수선의 발 사이의 거리(★1~2) (3) 「xy평면에 내린 수선의 발이 (a,b,0)·x축에 내린 수선의 발이 (3,0,0)」처럼 역으로 P 결정(★2 · I-BW 초기)."
```

```yaml
- id: RPM-GEO-0348
  page: 57
  vendor_label: "교과서 04-1 공간좌표"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    점 P(3,-2,4) 를 ⑴ x축 ⑵ y축 ⑶ zx평면 ⑷ 원점에 대하여 대칭이동한 점의 좌표.
  category: "축·평면·원점 대칭 → 성분 부호 반전 규칙"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "좌표축·좌표평면·원점에 대한 대칭점"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    축 대칭은 그 축 성분만 두고 나머지 둘 반전, 평면 대칭은 평면에 없는 성분 하나만 반전, 원점 대칭은 셋 다 반전.
    ⑴(3,2,-4) ⑵(-3,-2,-4) ⑶(3,2,4) ⑷(-3,2,-4). 부호 규칙 암기 확인(T-부호 하나).
    통찰 없음·M_total 4 → 교과서 구역 ★1.
  tier: star_1
  mechanism_primary: "축 대칭 → 그 축 성분 유지·나머지 반전 / 평면 대칭 → 빠진 성분만 반전 / 원점 → 전부 반전 → ⑴(3,2,-4) ⑵(-3,-2,-4) ⑶(3,2,4) ⑷(-3,2,-4)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '(1) $(3,\,2,\,-4)$ \quad (2) $(-3,\,-2,\,-4)$ \quad (3) $(3,\,2,\,4)$ \quad (4) $(-3,\,2,\,-4)$'
  answer_source: "답지(해설 크롭)"
  figure: none
  latex: latex-bank/rpm-geo/items/0348.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "P 의 좌표(0 아닌 정수, 부호 섞기)와 대칭 대상 조합. 제약: 세 좌표 절댓값을 서로 다르게 두어 어느 성분이 반전됐는지 답이 드러나게."
    creative: "(1) 두 대칭을 연달아 적용한 합성점(0362·0364 골조 · ★1~2) (2) 대칭점 좌표의 합·곱 단답(0363 · ★1) (3) 두 대칭점 사이의 거리(0366 · ★1~2) (4) 「P 와 대칭인 점이 (a,b,c) 일 때 대칭 대상이 무엇인지」 역추적(★2 · I-BW)."
```

### 교과서 04-2 두 점 사이의 거리

```yaml
- id: RPM-GEO-0349
  page: 57
  vendor_label: "교과서 04-2 두 점 사이의 거리"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    두 점 O(0,0,0), A(2,-4,4) 사이의 거리.
  category: "두 점 사이의 거리 공식 → 제곱합의 제곱근"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 점 사이의 거리(공식 적용)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    한 점이 원점이라 좌표 제곱합 4+16+16=36 의 제곱근 6.
    공식 대입 한 줄·통찰 없음·M_total 4 → 교과서 구역 ★1.
  tier: star_1
  mechanism_primary: "√(2²+(-4)²+4²)=√36 → 6"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0349.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A 의 세 좌표를 제곱합이 완전제곱수인 정수 조합(1,2,2 / 2,3,6 / 3,4,12 / 1,4,8)으로. 제약: 답을 정수로 두거나, 근호를 남길 때는 제곱인수 정리가 되게."
    creative: "(1) 원점 대신 일반 두 점(0350 · ★1) (2) 거리 값을 주고 미지 좌표 하나 결정(0367 · ★1~2) (3) 원점에서 같은 거리에 있는 점의 조건(구 위의 점 · 04-4 연결 · ★1~2)."
```

```yaml
- id: RPM-GEO-0350
  page: 57
  vendor_label: "교과서 04-2 두 점 사이의 거리"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    두 점 A(-2,3,3), B(1,-3,1) 사이의 거리.
  category: "성분 차 → 제곱합의 제곱근"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 점 사이의 거리(공식 적용)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    성분 차 (3,-6,-2) → 9+36+4=49 → 7.
    공식 한 줄·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "성분 차 (3,-6,-2) → √(9+36+4)=√49 → 7"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0350.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "성분 차를 (2,3,6)·(1,4,8)·(4,4,7) 같은 피타고라스 네 쌍으로 잡고 A 를 아무 정수점으로 두면 B 가 정해짐. 제약: 답 정수 유지."
    creative: "(1) 답을 근호로 남기는 조합(0351 · ★1) (2) 세 점 중 두 거리를 비교해 삼각형 모양(이등변·직각) 판정(★2 · 0369 골조) (3) 한 좌표를 미지수로 두고 거리로 결정(0367 · ★1~2)."
```

```yaml
- id: RPM-GEO-0351
  page: 57
  vendor_label: "교과서 04-2 두 점 사이의 거리"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    두 점 A(1,-2,3), B(3,2,6) 사이의 거리.
  category: "성분 차 → 제곱합의 제곱근(근호 답)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 점 사이의 거리(공식 적용)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    성분 차 (2,4,3) → 4+16+9=29 → √29. 정수로 떨어지지 않는 경우의 공식 대입.
    통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "성분 차 (2,4,3) → √(4+16+9) → √29"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\sqrt{29}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0351.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "성분 차 세 정수. 제약: 제곱합이 제곱인수를 가지면(예: 12=4·3) 근호 정리까지 요구해 Mₖ 한 단계 추가."
    creative: "(1) 답을 정수로(0350 · ★1) (2) 근호 정리형(√12=2√3)(★1) (3) 거리의 제곱을 묻는 단답으로 근호 없이(★1)."
```

```yaml
- id: RPM-GEO-0352
  page: 57
  vendor_label: "교과서 04-2 두 점 사이의 거리"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    A(-1,3,-4) 와 z축 대칭인 점 B, xy평면 대칭인 점 C 에 대하여 ⑴ B 의 좌표 ⑵ C 의 좌표 ⑶ 선분 BC 의 길이.
  category: "대칭점 두 개 → 두 점 사이의 거리"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "대칭점 사이의 거리"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    z축 대칭은 z 만 유지 → B(1,-3,-4), xy평면 대칭은 z 만 반전 → C(-1,3,4).
    차 (-2,6,8) 의 제곱합 104 → 2√26. 대칭 규칙 두 번 + 거리 한 번.
    통찰 없음·M_total 5 → 교과서 구역 ★1.
  tier: star_1
  mechanism_primary: "z축 대칭 → B(1,-3,-4) · xy평면 대칭 → C(-1,3,4) → 차 (-2,6,8) → √104=2√26"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '(1) $(1,\,-3,\,-4)$ \quad (2) $(-1,\,3,\,4)$ \quad (3) $2\sqrt{26}$'
  answer_source: "답지(해설 크롭)"
  figure: none
  latex: latex-bank/rpm-geo/items/0352.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A 의 좌표(0 아닌 정수)와 대칭 대상 두 개(축 하나·평면 하나가 기본). 제약: 두 대칭점의 성분 차는 A 성분의 0 또는 ±2배이므로 √ 안이 4의 배수 → 2√k 꼴로 정리되게."
    creative: "(1) 소문항 없이 BC 만 묻는 5지선다(0366 · ★1) (2) 세 대칭점으로 삼각형을 만들어 둘레·모양 판정(★2) (3) BC 의 중점이 어디에 놓이는지 관찰하게 해 대칭 합성의 성질로 유도(★2 · I-SYM 초기)."
```

### 교과서 04-3 선분의 내분점

```yaml
- id: RPM-GEO-0353
  page: 57
  vendor_label: "교과서 04-3 선분의 내분점"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    A(-1,1,2), B(5,4,5) 에 대하여 ⑴ 선분 AB 를 2:1 로 내분하는 점 ⑵ 1:2 로 내분하는 점 ⑶ 중점의 좌표.
  category: "내분점 공식 성분별 적용"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "선분의 내분점·중점의 좌표"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (mB+nA)/(m+n) 을 성분마다 적용. 2:1 → (9,9,12)/3=(3,3,4), 1:2 → (3,6,9)/3=(1,2,3), 중점 → (2,5/2,7/2).
    m:n 순서만 조심(T-표기). 통찰 없음·M_total 5 → 교과서 구역 ★1.
  tier: star_1
  mechanism_primary: "내분점 (mB+nA)/(m+n) 성분별 → ⑴(3,3,4) ⑵(1,2,3) ⑶ 중점 (2,5/2,7/2)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '(1) $(3,\,3,\,4)$ \quad (2) $(1,\,2,\,3)$ \quad (3) $\left(2,\,\dfrac{5}{2},\,\dfrac{7}{2}\right)$'
  answer_source: "답지(해설 크롭)"
  figure: none
  latex: latex-bank/rpm-geo/items/0353.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A·B 좌표와 비 m:n. 제약: 성분 차가 (m+n) 의 배수이면 정수 답, 아니면 분수 답 — 어느 쪽인지 의도해서 고름(중점은 차가 짝수여야 정수)."
    creative: "(1) 내분점 좌표를 주고 B 나 비 m:n 을 역산(★2 · I-BW 초기) (2) 내분점이 좌표평면 위(z=0)에 놓이는 비 구하기(★2) (3) 삼등분점 두 개로 확장(★1)."
```

```yaml
- id: RPM-GEO-0354
  page: 57
  vendor_label: "교과서 04-3 선분의 내분점"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    A(1,2,3), B(2,1,-2), C(6,3,2) 를 꼭짓점으로 하는 삼각형 ABC 의 무게중심의 좌표.
  category: "세 꼭짓점 좌표의 성분별 평균"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각형의 무게중심의 좌표"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    성분별 합 (9,6,3) 을 3 으로 나눠 (3,2,1).
    공식 한 줄·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "성분별 (1+2+6, 2+1+3, 3-2+2)/3 → (3,2,1)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$(3,\,2,\,1)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0354.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 꼭짓점 좌표. 제약: 성분별 합이 3 의 배수여야 정수 답."
    creative: "(1) 무게중심과 두 꼭짓점을 주고 나머지 꼭짓점 역산(★1~2) (2) 무게중심이 특정 축 위에 오도록 미지 좌표 결정(★2) (3) 중선의 길이(꼭짓점–대변 중점 거리)로 확장(★2 · 04-2 결합)."
```

### 교과서 04-4 구의 방정식

```yaml
- id: RPM-GEO-0355
  page: 57
  vendor_label: "교과서 04-4 구의 방정식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    (x-1)²+(y+1)²+(z-2)²=9 가 나타내는 구의 중심의 좌표와 반지름의 길이.
  category: "표준형 → 중심·반지름 읽기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구의 방정식(표준형) → 중심·반지름"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    표준형 (x-a)²+(y-b)²+(z-c)²=r² 에 맞춰 중심 (1,-1,2), 반지름 √9=3.
    (y+1) 의 부호 반전만 주의(T-부호). 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "(x-a)²+(y-b)²+(z-c)²=r² 대응 → 중심 (1,-1,2) · r=√9=3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '중심의 좌표: $(1,\,-1,\,2)$, 반지름의 길이: $3$'
  answer_source: "답지(해설 크롭)"
  figure: none
  latex: latex-bank/rpm-geo/items/0355.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "중심 세 좌표(부호 섞기)와 우변(완전제곱수 또는 근호 정리형). 제약: 우변 양수."
    creative: "(1) 우변이 근호 정리형(0356 · ★1) (2) 전개된 일반형으로 주기(0360·0361 · ★1) (3) 구가 어느 좌표평면과 만나는지·접하는지 판정(중심 성분과 r 비교 · ★2)."
```

```yaml
- id: RPM-GEO-0356
  page: 57
  vendor_label: "교과서 04-4 구의 방정식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    (x+3)²+(y-2)²+(z+4)²=12 가 나타내는 구의 중심의 좌표와 반지름의 길이.
  category: "표준형 → 중심·반지름 읽기(근호 정리)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구의 방정식(표준형) → 중심·반지름"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    중심 (-3,2,-4), 반지름 √12=2√3. 0355 와 같은 대응에 근호 정리 한 줄 추가.
    통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "표준형 대응 → 중심 (-3,2,-4) · r=√12=2√3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '중심의 좌표: $(-3,\,2,\,-4)$, 반지름의 길이: $2\sqrt{3}$'
  answer_source: "답지(해설 크롭)"
  figure: none
  latex: latex-bank/rpm-geo/items/0356.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "중심 좌표와 우변(8·18·20·27 처럼 제곱인수 있는 수). 제약: 우변 양수, 근호 정리 가능."
    creative: "(1) 우변을 완전제곱수로(0355 · ★1) (2) 「반지름이 정수가 되도록 하는 우변 k」 역산(★1) (3) 구 위의 점 하나를 주고 우변 결정(0358 골조 · ★1)."
```

```yaml
- id: RPM-GEO-0357
  page: 57
  vendor_label: "교과서 04-4 구의 방정식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    중심이 (2,-3,4) 이고 반지름의 길이가 5 인 구의 방정식.
  category: "중심·반지름 → 표준형 쓰기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "중심·반지름 → 구의 방정식"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    표준형에 대입 (x-2)²+(y+3)²+(z-4)²=25. 부호 반전만 주의.
    통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "중심 (2,-3,4)·r=5 → (x-2)²+(y+3)²+(z-4)²=25"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$(x-2)^2+(y+3)^2+(z-4)^2=25$'
  answer_source: "답지(해설 크롭)"
  figure: none
  latex: latex-bank/rpm-geo/items/0357.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "중심 좌표(부호 섞기)와 반지름(정수 또는 근호). 제약: 우변은 r²."
    creative: "(1) 전개한 일반형으로 답하게(★1) (2) 반지름 대신 지나는 점을 주기(0358 · ★1) (3) 지름의 양 끝점을 주기(중점·거리 결합 · ★2)."
```

```yaml
- id: RPM-GEO-0358
  page: 57
  vendor_label: "교과서 04-4 구의 방정식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    중심이 원점이고 점 (1,2,0) 을 지나는 구의 방정식.
  category: "지나는 점 → 반지름 제곱 → 방정식"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "중심·반지름 → 구의 방정식"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    r²=1+4+0=5 → x²+y²+z²=5. 거리 제곱 한 줄.
    통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "r²=1²+2²+0²=5 → x²+y²+z²=5"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$x^2+y^2+z^2=5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0358.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지나는 점의 좌표(정수). 제약: 중심이 원점이므로 r² 은 좌표 제곱합."
    creative: "(1) 중심을 원점이 아닌 점으로(중심–점 거리 · ★1) (2) 두 점을 지나고 중심이 축 위인 구(미지수 하나 · ★2 · 0374 골조 결합) (3) 원점 중심 구가 어떤 점을 포함·통과하는지 판정(★1)."
```

```yaml
- id: RPM-GEO-0359
  page: 57
  vendor_label: "교과서 04-4 구의 방정식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    중심이 (-2,1,4) 이고 ⑴ xy평면 ⑵ zx평면 ⑶ x축 ⑷ y축에 접하는 구의 방정식.
  category: "접하는 대상까지의 거리 = 반지름"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "좌표평면·좌표축에 접하는 구의 방정식"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    좌표평면에 접하면 반지름은 그 평면에 없는 성분의 절댓값(xy: |4|, zx: |1|), 좌표축에 접하면 나머지 두 성분의
    제곱합의 제곱근(x축: √(1+16)=√17, y축: √(4+16)=√20). r² 은 16·1·17·20.
    축 접선의 반지름을 평면 접선처럼 성분 하나로 쓰는 실수가 함정(T-표기). 통찰 없음·M_total 5 → 교과서 구역 ★1.
  tier: star_1
  mechanism_primary: "평면 접 → r=|빠진 성분| (xy: 4 · zx: 1) / 축 접 → r=√(나머지 두 성분 제곱합) (x축: √17 · y축: √20) → 표준형에 r² 대입"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '(1) $(x+2)^2+(y-1)^2+(z-4)^2=16$ \quad (2) $(x+2)^2+(y-1)^2+(z-4)^2=1$ \quad (3) $(x+2)^2+(y-1)^2+(z-4)^2=17$ \quad (4) $(x+2)^2+(y-1)^2+(z-4)^2=20$'
  answer_source: "답지(해설 크롭)"
  figure: none
  latex: latex-bank/rpm-geo/items/0359.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "중심 좌표(세 성분 절댓값 서로 다르게·0 금지)와 접하는 대상 조합. 제약: 축 접선의 r² 은 두 성분 제곱합이라 정수 우변 유지."
    creative: "(1) 두 좌표평면에 동시에 접하는 구(중심 성분 절댓값 같음 조건 · ★2 · I-EQV) (2) 세 좌표평면에 모두 접하고 한 점을 지나는 구(★3 · 중심 (r,r,r) 매개변수) (3) 접점의 좌표를 묻기(★1~2)."
```

```yaml
- id: RPM-GEO-0360
  page: 57
  vendor_label: "교과서 04-4 구의 방정식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    x²+y²+z²-6y=0 이 나타내는 구의 중심의 좌표와 반지름의 길이.
  category: "일반형 → 완전제곱 → 중심·반지름"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구의 방정식(일반형) → 중심·반지름"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    y 항만 완전제곱 x²+(y-3)²+z²=9 → 중심 (0,3,0), r=3. 한 변수만 정리.
    통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "x²+(y-3)²+z²=9 → 중심 (0,3,0) · r=3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '중심의 좌표: $(0,\,3,\,0)$, 반지름의 길이: $3$'
  answer_source: "답지(해설 크롭)"
  figure: none
  latex: latex-bank/rpm-geo/items/0360.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "1차항 계수(짝수면 정수 중심)와 상수항. 제약: 완전제곱 뒤 우변 양수."
    creative: "(1) 세 변수 모두 1차항이 있는 일반형(0361 · ★1) (2) 상수항에 미지수 k 를 두고 「구가 되기 위한 k 의 범위」(★2 · I-EQV) (3) 원점을 지나는 구의 조건으로 계수 역산(★1~2)."
```

```yaml
- id: RPM-GEO-0361
  page: 57
  vendor_label: "교과서 04-4 구의 방정식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    x²+y²+z²-4x+2y+6z=0 이 나타내는 구의 중심의 좌표와 반지름의 길이.
  category: "일반형 → 세 변수 완전제곱 → 중심·반지름"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구의 방정식(일반형) → 중심·반지름"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    세 변수 각각 완전제곱 → (x-2)²+(y+1)²+(z+3)²=4+1+9=14 → 중심 (2,-1,-3), r=√14.
    같은 절차 세 번 반복·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "(x-2)²+(y+1)²+(z+3)²=14 → 중심 (2,-1,-3) · r=√14"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '중심의 좌표: $(2,\,-1,\,-3)$, 반지름의 길이: $\sqrt{14}$'
  answer_source: "답지(해설 크롭)"
  figure: none
  latex: latex-bank/rpm-geo/items/0361.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 1차항 계수(짝수)와 상수항 d. 제약: a²+b²+c²-d>0 이어야 구."
    creative: "(1) 상수항 k 를 미지수로 두고 반지름이 주어질 때 k 결정(★1~2) (2) 「구가 xy평면과 만나는 원의 반지름」으로 확장(z=0 대입 · ★2 · 후속 유형) (3) 중심이 특정 평면 위에 있도록 계수 조건(★2)."
```

### 유형 01 좌표공간에서의 점의 좌표

```yaml
- id: RPM-GEO-0362
  page: 58
  vendor_label: "유형 01 좌표공간에서의 점의 좌표"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    A(2,-1,3) 과 x축 대칭인 점 B, B 에서 yz평면에 내린 수선의 발 C(a,b,c) 일 때 a+b+c.
  category: "x축 대칭 → yz평면 수선의 발 → 좌표 합"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "대칭·수선의 발 합성으로 점의 좌표"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x축 대칭은 x 유지·y,z 반전 → B(2,1,-3). yz평면에 내린 수선의 발은 x 만 0 → C(0,1,-3). 합 -2.
    규칙 두 번 적용으로 교과서 04-1 의 0347·0348 을 이은 것과 같다. 통찰 없음·M_total 4.
    유형 구역 무난이도 출발점 ★2 에서 통찰 0·M_total≤5 → −1 → ★1.
  tier: star_1
  mechanism_primary: "x축 대칭 → B(2,1,-3) → yz평면 수선의 발 → C(0,1,-3) → a+b+c=-2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0362.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A 의 좌표(0 아닌 정수)와 대칭 대상·수선 대상의 조합(축 하나 → 평면 하나가 기본). 제약: 수선의 발은 성분 하나가 0 이 되므로 곱을 물으면 0 — 합이나 부호 섞은 합으로."
    creative: "(1) 순서를 바꿔 수선의 발 → 대칭(★1) (2) 두 변환의 합성이 어떤 단일 변환(대칭)과 같은지 묻기(★2 · I-EQV) (3) 합성점 C 가 주어졌을 때 A 를 역추적(★2 · I-BW)."
```

```yaml
- id: RPM-GEO-0363
  page: 58
  vendor_label: "유형 01 좌표공간에서의 점의 좌표"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    A(-2,3,1) 과 zx평면 대칭인 점의 좌표가 (a,b,c) 일 때 abc.
  category: "zx평면 대칭 → y 반전 → 좌표 곱"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "좌표축·좌표평면·원점에 대한 대칭점"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    zx평면 대칭은 y 만 반전 → (-2,-3,1) → 곱 6. 규칙 한 번(T-부호 하나).
    통찰 없음·M_total 4 → 중하 범위(★1~2)의 아래쪽 ★1.
  tier: star_1
  mechanism_primary: "zx평면 대칭 → y 반전 → (-2,-3,1) → abc=6"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0363.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A 의 좌표(0 아닌 정수)와 대칭 대상. 제약: 곱을 물으면 부호 결과가 대칭 대상에 따라 달라지므로 답 부호 확인."
    creative: "(1) 축 대칭·원점 대칭으로 바꾸기(★1) (2) 대칭점의 좌표 조건(a+b, bc 등) 두 개로 A 결정(★2) (3) 대칭점과 원래 점에서 같은 거리에 있는 좌표축 위의 점(0374 골조 결합 · ★2)."
```

```yaml
- id: RPM-GEO-0364
  page: 58
  vendor_label: "유형 01 좌표공간에서의 점의 좌표"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    A(2,3,5) 와 원점 대칭인 점 B, B 와 y축 대칭인 점 C(a,b,c) 일 때 a-b+c.
  category: "원점 대칭 → y축 대칭 → 부호 섞은 합"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "대칭·수선의 발 합성으로 점의 좌표"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    원점 대칭 → B(-2,-3,-5), y축 대칭은 y 유지·x,z 반전 → C(2,-3,5). a-b+c=2+3+5=10.
    합성하면 zx평면 대칭과 같다는 관찰은 선택 사항. 규칙 두 번·통찰 없음·M_total 4 → 중하 범위의 ★1.
  tier: star_1
  mechanism_primary: "원점 대칭 → B(-2,-3,-5) → y축 대칭 → C(2,-3,5) → a-b+c=10"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$10$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0364.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A 의 좌표와 두 대칭의 조합. 제약: 합성 결과가 항등이 되는 조합(같은 대칭 두 번)은 피함."
    creative: "(1) 「두 대칭의 합성 = 어느 평면 대칭인가」를 고르는 보기 문제(★2 · I-EQV d1) (2) 세 대칭을 연달아(★1~2) (3) C 를 주고 A 역추적(★2 · I-BW)."
```

```yaml
- id: RPM-GEO-0365
  page: 58
  vendor_label: "유형 01 좌표공간에서의 점의 좌표"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    원점이 꼭짓점인 직육면체 그림에서 꼭짓점 B 가 (a,2,1), 꼭짓점 F 와 z축 대칭인 점이 (-4,b,0) 일 때 a-b.
  category: "그림에서 F 의 좌표 세우기 → z축 대칭 → 성분 대응"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직육면체 꼭짓점과 대칭점(그림 읽기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    B(a,2,1) 에서 모서리 길이 a·2·1 을 읽고, B 바로 아래 바닥 꼭짓점 F=(a,2,0). z축 대칭은 z 유지·x,y 반전
    → (-a,-2,0) 이 (-4,b,0) 이므로 a=4, b=-2, a-b=6. 그림에서 F 의 좌표를 스스로 세우는 단계가 실질.
    통찰 없음·M_total 5 → −1 후보이나 그림 읽기 부담을 인정해 벤더 중 출발점 ★2 유지.
    [분류 이슈] M_total 5·통찰 0 으로 −1 후보(★1)이나 그림에서 미표시 꼭짓점 좌표를 세우는 단계 때문에 ★2 로 둠.
  tier: star_2
  mechanism_primary: "B(a,2,1) → 모서리 a·2·1 → F(a,2,0) → z축 대칭 (-a,-2,0)=(-4,b,0) → a=4·b=-2 → 6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$6$'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0365.png"
  latex: latex-bank/rpm-geo/items/0365.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "B 의 알려진 두 성분(2,1)과 대칭점의 알려진 성분(-4)·대칭 대상(축·평면). 제약: 그림 라벨(A~G·O 위치) 고정, a 는 양수(길이)."
    creative: "(1) 대칭 대상을 평면(xy·yz)으로 바꿔 어느 성분이 남는지 다르게(★2) (2) 두 꼭짓점의 거리(대각선)를 조건으로 주어 a 결정(★2 · 04-2 결합) (3) 원점이 꼭짓점이 아닌 직육면체로 옮겨 모든 꼭짓점을 미지수 하나로 표현(★3 · Mₐ 상승)."
```

### 유형 02 두 점 사이의 거리

```yaml
- id: RPM-GEO-0366
  page: 58
  vendor_label: "유형 02 두 점 사이의 거리"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    A(3,2,1) 과 zx평면 대칭인 점 P, y축 대칭인 점 Q 일 때 선분 PQ 의 길이. 5지선다.
  category: "대칭점 두 개 → 거리"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "대칭점 사이의 거리"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    P(3,-2,1), Q(-3,2,-1) → 차 (6,-4,2) → √(36+16+4)=√56=2√14 → ③.
    교과서 0352 와 같은 골조의 5지선다. 통찰 없음·M_total 4.
    유형 02 대표문제(무난이도 ★2 출발)이나 통찰 0·M_total≤5 → −1 → ★1.
  tier: star_1
  mechanism_primary: "zx평면 대칭 P(3,-2,1) · y축 대칭 Q(-3,2,-1) → 차 (6,-4,2) → √56=2√14 → ③"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "③"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0366.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A 의 좌표(0 아닌 정수)와 두 대칭 대상. 제약: 차의 각 성분이 A 성분의 0 또는 ±2배이므로 √ 안은 4의 배수 — 선택지를 2√k 꼴로 정리."
    creative: "(1) P·Q 와 A 로 만든 삼각형의 모양·넓이(★2 · 0370 골조) (2) PQ 의 중점이 어떤 점인지로 대칭 합성 성질 유도(★2) (3) PQ=k 를 주고 A 의 한 좌표 역산(★2)."
```

```yaml
- id: RPM-GEO-0367
  page: 58
  vendor_label: "유형 02 두 점 사이의 거리"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    A(2,-3,1), B(a,2,-1) 에 대하여 AB=3√5 일 때 양수 a 의 값.
  category: "거리 조건 → (a-2)² 방정식 → 양수 선택"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "거리 조건으로 미지 좌표 결정"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    AB²=(a-2)²+25+4=45 → (a-2)²=16 → a=6 또는 -2 → 양수 6. 이차식이지만 완전제곱 꼴이라 한 줄(T-범위: 양수 조건).
    통찰 없음·M_total 4 → 중하 범위(★1~2)의 아래쪽 ★1.
  tier: star_1
  mechanism_primary: "AB²=(a-2)²+29=45 → (a-2)²=16 → a=6 (양수)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$6$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0367.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "고정 성분 차의 제곱합과 거리 제곱의 차가 완전제곱수(9·16·25)가 되게. 제약: 두 해 중 하나만 양수(또는 「a>k」 조건)로 거르게 두거나, 둘 다 양수면 「모든 a 의 합」으로."
    creative: "(1) 두 좌표를 미지수로 두고 조건 두 개(거리 + 축 위·평면 위)(★2) (2) AB 가 최소가 되는 a(0373 골조 · ★2) (3) 「두 해의 합」을 물어 근과 계수 관계 결합(★2)."
```

```yaml
- id: RPM-GEO-0368
  page: 58
  vendor_label: "유형 02 두 점 사이의 거리"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    A(a,5,0), B(-4,a,1), C(-3,2,a) 에 대하여 AC=BC 일 때 a 의 값. 5지선다.
  category: "두 거리 제곱 전개 → 이차항 소거 → 일차방정식"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "거리 조건으로 미지 좌표 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    AC²=(a+3)²+9+a²=2a²+6a+18, BC²=1+(a-2)²+(a-1)²=2a²-6a+6. 이차항이 같아 12a=-12 → a=-1 → ②.
    a 가 세 점에 흩어져 전개가 두 줄(Mₖ 2). 통찰 없음·M_total 5 → 중하 범위의 위쪽 ★2.
  tier: star_2
  mechanism_primary: "AC²=2a²+6a+18 · BC²=2a²-6a+6 → 이차항 소거 → 12a=-12 → a=-1 → ②"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0368.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 점에 a 가 들어가는 위치와 상수. 제약: 양변 이차항 계수가 같아야 일차로 떨어짐(a 가 양쪽 거리에 같은 개수로 들어가게), 답 정수."
    creative: "(1) 이차항이 남게 두어 두 해(★2~3) (2) AB=AC 와 AB=BC 를 동시에(이등변 → 정삼각형 · ★3 · 0377 골조) (3) 「AC=BC 인 a 가 존재하지 않는 조건」을 역으로(★3 · I-BW)."
```

```yaml
- id: RPM-GEO-0369
  page: 58
  vendor_label: "유형 02 두 점 사이의 거리"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    A(2,1,-2), B(a,-1,0), C(1,-2,-1) 을 꼭짓점으로 하는 삼각형 ABC 가 ∠A=90° 인 직각삼각형일 때 a 의 값.
  category: "∠A=90° → AB²+AC²=BC² → 일차방정식"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "세 점이 이루는 직각삼각형(피타고라스)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ∠A 가 직각이므로 빗변은 BC(T-표기). AB²=(a-2)²+8, AC²=11, BC²=(a-1)²+2.
    (a-2)²+19=(a-1)²+2 → -4a+23=-2a+3 → a=10. 세 거리 제곱·피타고라스 배치·일차 풀이.
    M_total 6·통찰 없음 → 벤더 중 ★2.
  tier: star_2
  mechanism_primary: "∠A=90° → AB²+AC²=BC² → (a-2)²+8+11=(a-1)²+2 → -2a=-20 → a=10"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$10$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0369.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 점 좌표와 a 의 위치. 제약: a 가 B 에만 있으면 AB²·BC² 모두 a 의 이차식이지만 이차항이 소거돼 일차 — 답 정수 유지."
    creative: "(1) 직각의 위치를 주지 않고 「직각삼각형이 되는 모든 a」(세 경우 · ★3 · I-MI) (2) 이등변직각삼각형 조건 추가(★3) (3) 넓이까지 이어 묻기(0372 결합 · ★2~3)."
```

```yaml
- id: RPM-GEO-0370
  page: 59
  vendor_label: "유형 02 두 점 사이의 거리"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    A(1,2,3) 과 xy평면 대칭인 점 P, yz평면 대칭인 점 Q 에 대하여 ∠PQA=θ 일 때 cosθ 의 값. 서술형.
  category: "대칭점 두 개 → 세 변 → ∠Q 의 코사인"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "대칭점으로 만든 삼각형의 각(코사인)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    P(1,2,-3), Q(-1,2,3). QP=√(4+0+36)=2√10, QA=2, PA=6. 코사인법칙 cosθ=(40+4-36)/(2·2√10·2)=1/√10=√10/10.
    AP 는 z 방향·AQ 는 x 방향이라 ∠A=90° 임을 보면 cosθ=QA/QP 한 줄이지만, 코사인법칙 표준 경로도 짧아 통찰로 세지 않음.
    M_total 6·통찰 없음·서술형 태그 → 벤더 중 ★2.
  tier: star_2
  mechanism_primary: "P(1,2,-3)·Q(-1,2,3) → QP=2√10·QA=2·PA=6 → ∠A=90°(또는 코사인법칙) → cosθ=QA/QP=√10/10"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{\sqrt{10}}{10}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0370.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A 의 좌표(0 아닌 정수)와 두 좌표평면. 제약: 두 평면 대칭점이면 AP·AQ 가 서로 다른 축 방향이라 항상 직각 — QP²=(2x)²+(2z)² 꼴이라 근호가 정리되게 A 의 성분 선택."
    creative: "(1) 축 대칭과 평면 대칭을 섞어 직각이 깨지게 하면 코사인법칙이 필수(★2~3) (2) 삼각형 PQA 의 넓이(★2 · 0372) (3) 「∠A=90° 임을 보이고 cosθ 를 구하라」로 대칭 구조 관찰을 명시(★2 · I-SYM d1 유도)."
```

```yaml
- id: RPM-GEO-0371
  page: 59
  vendor_label: "유형 02 두 점 사이의 거리"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    A(2,3,1) 에서 yz평면 위의 직선 y=z 에 내린 수선의 발을 P 라 할 때 선분 AP 의 길이.
  category: "yz평면 정사영 → 평면 안 점–직선 거리 → 삼수선 합성"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "공간의 수선의 발을 yz평면 정사영 A'(0,3,1) 과 평면 안의 점–직선 거리로 옮기고 삼수선의 정리로 합성(또는 P(0,t,t) 매개화 → AP² 최소)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "점에서 좌표평면 위의 직선까지의 거리(정사영·삼수선)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    직선이 yz평면 안에 있으므로 A 를 yz평면에 정사영한 A'(0,3,1) 을 잡으면 삼수선의 정리로 AP²=AA'²+A'P².
    A' 에서 y=z 까지의 거리는 |3-1|/√2=√2 → AP²=4+2 → √6. P(0,t,t) 로 두고 AP²=4+(3-t)²+(1-t)² 의 최소(t=2)로도 같은 답.
    「수선의 발」을 평면 문제 + 삼수선(또는 이차식 최소)으로 옮기는 표현 전환 1개(RT d1)·M_total 5 → 벤더 중 ★2 유지.
    [분류 이슈] 정사영+삼수선을 공간도형 표준 절차로 보면 절차형 ★2 — 별점은 같고 통찰 인정 여부만 애매.
  tier: star_2
  mechanism_primary: "A → yz평면 정사영 A'(0,3,1) → A' 에서 y=z 까지 √2 → 삼수선 AP²=AA'²+A'P²=4+2 → √6"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\sqrt{6}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0371.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A 의 좌표와 직선(y=z · y=-z · y=kz · 다른 좌표평면 위의 직선). 제약: 평면 안 거리 |y-z|/√2 가 정리되게, 정사영 거리는 빠진 성분의 절댓값."
    creative: "(1) 수선의 발 P 의 좌표를 묻기(★2) (2) 직선을 좌표평면 밖(예: 점 (1,1,1) 을 지나는 축 평행선)으로 옮기면 정사영이 축 위로 가 삼수선 한 단계 더(★3) (3) P(0,t,t) 최소화 경로를 명시해 이차함수 최소와 결합(★2)."
```

```yaml
- id: RPM-GEO-0372
  page: 59
  vendor_label: "유형 02 두 점 사이의 거리"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    원점 O 와 A(4,3,0), B(2,3,6) 을 꼭짓점으로 하는 삼각형 OAB 의 넓이. 5지선다.
  category: "세 변 → 코사인 → 사인 → 넓이"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "세 점이 이루는 삼각형의 넓이(세 변 → 코사인 → 사인)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    OA=5, OB=7, AB=√40=2√10. cos∠O=(25+49-40)/70=17/35, sin∠O=√(1-289/1225)=6√26/35,
    S=½·5·7·6√26/35=3√26 → ⑤. 절차는 표준이나 분수·근호 정리가 이어져 Mₖ 2.
    통찰 없음·M_total 6 → 벤더 중 ★2.
  tier: star_2
  mechanism_primary: "OA=5·OB=7·AB=2√10 → cos O=17/35 → sin O=6√26/35 → S=½·5·7·sin O=3√26 → ⑤"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0372.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 점 좌표. 제약: 두 변 길이가 정수(피타고라스 세 쌍 성분)가 되게 잡고, 1-cos² 이 제곱인수를 가져 근호가 정리되게(계산량이 Mₖ 를 좌우)."
    creative: "(1) 직각삼각형이 되게 좌표를 잡아 ½·밑·높이로(★1~2) (2) 넓이 대신 「O 에서 AB 에 내린 수선의 길이」(넓이 → 높이 · ★3) (3) 한 꼭짓점을 미지수로 두고 넓이 조건으로 결정(★3 · Mₐ 상승)."
```

```yaml
- id: RPM-GEO-0373
  page: 59
  vendor_label: "유형 02 두 점 사이의 거리"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    A(a,b,1), B(-1,2,a) 사이의 거리의 최솟값. 5지선다.
  category: "거리 제곱을 a·b 의 제곱합으로 정리 → 최솟값"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 점 사이 거리의 최솟값(제곱합 최소)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    AB²=(a+1)²+(b-2)²+(1-a)²=2a²+2+(b-2)². a=0, b=2 에서 최소 2 → √2 → ②.
    전개·정리는 한 줄이지만 두 변수를 각각 독립으로 최소로 잡는 매개변수 표현(Mₐ 2).
    통찰 없음·M_total 5 → 벤더 중 ★2 유지.
  tier: star_2
  mechanism_primary: "AB²=(a+1)²+(b-2)²+(1-a)²=2a²+(b-2)²+2 ≥ 2 (a=0·b=2) → √2 → ②"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0373.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 점에서 a·b 가 들어가는 위치와 상수. 제약: a 가 두 성분에 대칭으로 들어가면 일차항이 소거돼 최소가 a=0 에서 — 일차항을 남기려면 완전제곱 정리가 필요(Mₖ 상승)."
    creative: "(1) 최솟값을 줄 때의 a, b 를 묻기(★2) (2) 한 변수만 남기고 「AB 가 최소일 때의 점 B 의 좌표」(★2) (3) a+b=k 제약을 추가해 조건부 최소(★3 · I-CON 초기)."
```

### 유형 03 두 점으로부터 같은 거리에 있는 점

```yaml
- id: RPM-GEO-0374
  page: 59
  vendor_label: "유형 03 두 점으로부터 같은 거리에 있는 점"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    A(4,2,1), B(-3,3,3) 에서 같은 거리에 있는 y축 위의 점의 y좌표. 5지선다.
  category: "y축 위 점 (0,y,0) 설정 → PA²=PB² → 일차방정식"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
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
    P(0,y,0). PA²=16+(y-2)²+1, PB²=9+(y-3)²+9. 이차항 소거 → 21-4y=27-6y → y=3 → ②.
    축 위 점의 매개화가 이 유형의 핵심 설정이고 전개 두 줄(Mₖ 2).
    통찰 없음·M_total 5 → 유형 03 대표문제(무난이도) 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "P(0,y,0) → PA²=PB² → 17+(y-2)²=18+(y-3)² → 2y=6 → y=3 → ②"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0374.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 점 좌표와 축(x/y/z). 제약: 양변 이차항 계수가 1 로 같아 항상 일차 — 답이 정수가 되게 상수 조정, 선택지는 등차로."
    creative: "(1) 점 P 까지의 거리를 묻기(0375 · ★2) (2) 축 대신 좌표평면 위(미지수 둘·점 셋 · 0376 · ★2) (3) 「같은 거리」를 「거리 비 1:2」로(아폴로니우스 → 구 · ★3 · 후속 유형)."
```

```yaml
- id: RPM-GEO-0375
  page: 59
  vendor_label: "유형 03 두 점으로부터 같은 거리에 있는 점"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    A(-2,2,0), B(1,-4,3) 에서 같은 거리에 있는 x축 위의 점 P 에 대하여 선분 AP 의 길이. 5지선다.
  category: "x축 위 점 설정 → PA²=PB² → P → AP"
  M: {s: 2, k: 2, a: 1, t: 1}
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
    P(x,0,0). (x+2)²+4=(x-1)²+25 → 6x=18 → x=3 → P(3,0,0). AP=√(25+4)=√29 → ③.
    0374 골조에 거리 한 단계 추가(M_total 6). 통찰 없음 → 중하이지만 두 단계라 범위의 위쪽 ★2.
  tier: star_2
  mechanism_primary: "P(x,0,0) → (x+2)²+4=(x-1)²+25 → x=3 → AP=√(5²+2²)=√29 → ③"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0375.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 점과 축. 제약: 일차 해가 정수, AP² 이 선택지와 겹치지 않는 값(제곱인수 정리 여부를 의도)."
    creative: "(1) AP 대신 PB 나 삼각형 PAB 의 넓이(★3) (2) P 를 축이 아닌 「직선 y=z 위」처럼 매개변수 하나인 직선 위로(0371 결합 · ★3) (3) 같은 거리 조건을 만족하는 x축 위의 점이 없을 조건(★3 · I-BW)."
```

```yaml
- id: RPM-GEO-0376
  page: 59
  vendor_label: "유형 03 두 점으로부터 같은 거리에 있는 점"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    A(1,-1,1), B(1,2,-2), C(2,-1,0) 에서 같은 거리에 있는 xy평면 위의 점 P(a,b,c) 에 대하여 a²+b²+c².
  category: "c=0 설정 → 두 등거리 식 → 변수 분리 → P"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
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
    xy평면 위이므로 c=0(T-표기). PA²=PB² 에서 (b+1)²+1=(b-2)²+4 → b=1, PA²=PC² 에서 (a-1)²+1=(a-2)² → a=1
    → P(1,1,0), 제곱합 2. 어느 두 쌍을 고르면 변수가 하나씩 떨어지는지 보는 정도이고 통찰은 아님.
    M_total 6·통찰 없음 → 벤더 중 ★2.
  tier: star_2
  mechanism_primary: "c=0 → PA²=PB² → b=1 · PA²=PC² → a=1 → P(1,1,0) → a²+b²+c²=2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0376.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 점 좌표와 평면. 제약: 두 등식이 각각 한 변수만 남게 하려면 두 점씩 x(또는 y) 좌표를 같게 두는 것이 편함 — 그렇지 않으면 2×2 연립(Mₖ 3)."
    creative: "(1) 좌표평면 대신 좌표축 위(미지수 하나·조건 둘 → 과잉 조건 검증 · ★3 · I-VF) (2) 세 점 좌표를 서로 다르게 두어 2×2 연립(★3) (3) 네 점에서 같은 거리(공간 · 미지수 셋 · 구의 중심 · ★3 · 후속 유형)."
```

```yaml
- id: RPM-GEO-0377
  page: 59
  vendor_label: "유형 03 두 점으로부터 같은 거리에 있는 점"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    A(0,2,1), B(2,1,0) 과 zx평면 위의 점 C 에 대하여 삼각형 ABC 가 정삼각형일 때 C 의 좌표를 모두.
  category: "C(x,0,z) → CA=CB 로 일차 관계 → CA=AB 로 이차 → 두 해"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정삼각형이 되는 좌표평면 위의 점(연립)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    C(x,0,z), AB²=6. CA²=CB² 에서 x²+4+(z-1)²=(x-2)²+1+z² → z=2x. CA²=6 에 대입 x²+(2x-1)²=2 → 5x²-4x-1=0
    → x=1, -1/5 → C(1,0,2), (-1/5,0,-2/5). 조건 셋(정삼각형 = 등식 둘 + 평면)을 연립해 두 해를 모두 내는 7~8단계·분수 해.
    통찰은 없지만 M_total 7 로 이 유형에서 가장 무거워 벤더 중 출발점 ★2 에서 +1 → ★3.
    [분류 이슈] 절차형 M_total 7 을 +1 로 볼지(★3)·벤더대로 ★2 로 둘지 애매 — ★3 기록.
  tier: star_3
  mechanism_primary: "C(x,0,z) → CA²=CB² → z=2x → CA²=AB²=6 → 5x²-4x-1=0 → x=1·-1/5 → (1,0,2)·(-1/5,0,-2/5)"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\left(-\dfrac{1}{5},\,0,\,-\dfrac{2}{5}\right)$, $(1,\,0,\,2)$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0377.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A·B 좌표와 평면. 제약: 이차식이 유리근을 갖도록(판별식 완전제곱) — 원하면 두 해 모두 정수가 되게 A·B 를 고름, 정삼각형은 항상 두 해(평면 위 AB 수직이등분선의 양쪽)."
    creative: "(1) 「이등변삼각형(CA=CB)」만으로 자취(평면 위 직선)를 묻기(★2) (2) 정삼각형 대신 직각이등변(★3) (3) C 를 좌표축 위로 제한하면 조건 과잉 → 해 존재 여부 검증(★3~4 · I-VF)."
```

### 유형 04 좌표평면 위로의 정사영

```yaml
- id: RPM-GEO-0378
  page: 60
  vendor_label: "유형 04 좌표평면 위로의 정사영"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    A(-2,7,3), B(1,2,-1) 에 대하여 직선 AB 와 zx평면이 이루는 각 θ 의 cosθ. 5지선다.
  category: "zx평면 정사영(y=0) → A'B'/AB"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직선과 좌표평면이 이루는 각(정사영 길이비)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    zx평면에 정사영하면 y 성분만 0: A'(-2,0,3), B'(1,0,-1). A'B'=√(9+16)=5, AB=√(9+25+16)=5√2.
    cosθ=A'B'/AB=√2/2 → ④. 「직선과 평면의 각 = 정사영과의 각」이 이 유형의 표준 도구라 통찰로 세지 않음.
    정사영·두 길이·비 → M_total 5·통찰 없음 → 유형 04 대표문제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "zx평면 정사영(y=0) → A'(-2,0,3)·B'(1,0,-1) → A'B'=5·AB=5√2 → cosθ=A'B'/AB=√2/2 → ④"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0378.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 점 좌표와 평면. 제약: 정사영 길이(두 성분 제곱합)와 전체 길이(세 성분 제곱합)의 비가 특수각 코사인(1/2·√2/2·√3/2)이 되게 — 예: 세 제곱합을 정사영 제곱합의 2배로."
    creative: "(1) sinθ=|빠진 성분 차|/AB 로 묻기(★2) (2) 각을 주고 미지 좌표 결정(0379 · ★2) (3) 세 좌표평면과 이루는 각의 코사인 제곱합이 2 임을 관찰(★3 · I-PD)."
```

```yaml
- id: RPM-GEO-0379
  page: 60
  vendor_label: "유형 04 좌표평면 위로의 정사영"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    A(3,3,√11), B(a,7,2√11) 에 대하여 직선 AB 와 yz평면이 이루는 각이 60° 일 때 양수 a 의 값. 5지선다.
  category: "yz평면 정사영 길이 → cos60° 로 AB → 거리식에서 a"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직선과 좌표평면이 이루는 각(정사영 길이비)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    yz평면 정사영은 x=0: A'B'=√(16+11)=3√3. cos60°=A'B'/AB → AB=6√3 → (a-3)²+16+11=108 → (a-3)²=81 → a=12 (양수) → ⑤.
    tan60°=|a-3|/A'B' 로 가면 한 줄 짧다. 근호 계산과 양수 선택(T-범위).
    M_total 6·통찰 없음 → 벤더 중 ★2.
  tier: star_2
  mechanism_primary: "yz평면 정사영(x=0) → A'B'=√27=3√3 → AB=A'B'/cos60°=6√3 → (a-3)²=108-27=81 → a=12 → ⑤"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0379.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각(30°·45°·60°)과 고정 성분. 제약: tanθ·A'B' 가 정수(또는 정리된 근호)가 되게 A'B'² 을 3의 배수(60°)·완전제곱(45°) 등으로 맞춤, 양수 조건으로 한 해 선택."
    creative: "(1) 정사영 길이를 주고 각 구하기(★2) (2) 두 좌표평면과 이루는 각을 동시에 주어 두 미지수(★3 · I-CON 초기) (3) 「각이 60° 이상이 되는 a 의 범위」(★3 · 부등식 전환 I-RT)."
```

```yaml
- id: RPM-GEO-0380
  page: 60
  vendor_label: "유형 04 좌표평면 위로의 정사영"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    A(1,2,3), B(4,4,1), C(4,2,3) 을 꼭짓점으로 하는 삼각형 ABC 와 xy평면이 이루는 각의 크기.
  category: "삼각형 넓이 S → xy평면 정사영 넓이 S' → cosθ=S'/S"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "좌표 차 (3,0,0)·(0,-2,2) 에서 AC ⟂ BC·AC ∥ xy평면인 직각삼각형 구조를 읽어 S·S' 를 한 줄로(또는 이면각 = BC 와 B'C' 가 이루는 각 45°)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각형과 좌표평면이 이루는 각(정사영 넓이비)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    좌표 차 AC=(3,0,0)·BC=(0,-2,2) 를 읽으면 AC ⟂ BC 인 직각삼각형(AC=3, BC=2√2) → S=3√2.
    xy평면 정사영 A'(1,2)·B'(4,4)·C'(4,2) 도 C' 에서 직각 → S'=½·3·2=3. cosθ=S'/S=1/√2 → 45°.
    직각 구조를 못 보면 헤론·코사인법칙으로도 되지만 계산이 늘어남 — 좌표를 도형 구조로 옮기는 RT d1 하나.
    상중 출발 ★3·통찰 1(d1)·M_total 6 → ★3 유지.
    [분류 이슈] 정사영 넓이비 자체는 유형 표준 도구라 통찰로 세지 않았고, 직각 구조 읽기를 RT d1 로 인정할지 절차형(헤론 경로)으로 볼지 애매 — 별점은 ★3 동일.
  tier: star_3
  mechanism_primary: "AC=(3,0,0)·BC=(0,-2,2) → ∠C=90° → S=½·3·2√2=3√2 → xy평면 정사영 S'=½·3·2=3 → cosθ=S'/S=1/√2 → 45°"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$45^\circ$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0380.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 꼭짓점 좌표. 제약: 정사영 넓이비가 특수각 코사인이 되게 — 한 변을 평면에 평행(같은 z)하게 두고 다른 변의 기울기로 각을 조절하면 설계 쉬움, 세 점이 xy평면에 수직인 평면 위에 오면(S'=0) 각 90° 예외."
    creative: "(1) 좌표평면 대신 「평면 z=x 와 이루는 각」처럼 정사영이 바로 안 되는 평면(★4 · 법선 필요) (2) 각을 주고 한 꼭짓점의 z 좌표 결정(★3 · I-BW) (3) 직각 구조를 없애 헤론이 필수가 되게 하면 Mₖ 3(★3 · 계산 마찰 — 질 저하 주의)."
```

## 표본 판정 요약 (35문)

- ★ 분포: ★1 21 · ★2 12 · ★3 2 · ★4 0 · ★5 0
- 통찰형 2(0371 RT d1 · 0380 RT d1) · 절차형 33 · premium 0
- 구역별: 교과서 16문 전부 ★1 · 유형 01 ★1 3 + ★2 1 · 유형 02 ★1 2 + ★2 6 · 유형 03 ★2 3 + ★3 1 · 유형 04 ★2 2 + ★3 1
- type_hint 상위: 「두 점 사이의 거리(공식 적용)」 3 · 「좌표축·좌표평면·원점에 대한 대칭점」 2 · 「대칭·수선의 발 합성으로 점의 좌표」 2 · 「대칭점 사이의 거리」 2 · 「구의 방정식(표준형) → 중심·반지름」 2 · 「중심·반지름 → 구의 방정식」 2 · 「구의 방정식(일반형) → 중심·반지름」 2 · 「거리 조건으로 미지 좌표 결정」 2 · 「두 점에서 같은 거리에 있는 좌표축 위의 점」 2 · 「직선과 좌표평면이 이루는 각(정사영 길이비)」 2
- 그림: 2문(`crop:fig-0346.png` · `crop:fig-0365.png`)
- 벤더 신호와 2단 이상 어긋난 문항 없음. 유형 대표문제 4문 중 0362·0366 은 M_total 4 로 −1 → ★1, 0374·0378 은 M_total 5 로 ★2 유지.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-GEO-0365 | M_total 5·통찰 0 으로 −1 후보(★1)이나 그림에서 미표시 꼭짓점 F 의 좌표를 세우는 단계를 인정해 벤더 중 ★2 유지 | ★2 / ★1 |
| RPM-GEO-0371 | 정사영 + 삼수선(또는 P(0,t,t) 최소화)을 RT d1 통찰로 인정 — 공간도형 표준 절차로 보면 절차형. 별점은 ★2 동일, 통찰형 여부만 애매 | ★2 |
| RPM-GEO-0377 | 벤더 중이나 절차형 M_total 7(연립 이차·두 해·분수 해)로 +1 → ★3. 절차형 M_total 만으로 +1 하는 것이 맞는지 카탈로그 설계 때 결정 | ★3 / ★2 |
| RPM-GEO-0380 | 정사영 넓이비는 유형 표준 도구라 제외하고 직각 구조 읽기만 RT d1 로 인정 — 헤론 경로로 보면 절차형. 별점은 상중 ★3 동일 | ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **통합해도 될 유형**: 「좌표축·좌표평면에 내린 수선의 발」·「좌표축·좌표평면·원점에 대한 대칭점」·「대칭·수선의 발 합성으로 점의 좌표」는 모두 「성분 유지/반전/0」 규칙 하나이므로 카탈로그에서는 「점의 좌표 규칙(수선의 발·대칭·합성)」 하나(base ★1)로 두고 합성 횟수만 변형 축으로 쓰면 됨. 「구의 방정식(표준형)」·「(일반형)」·「중심·반지름 → 방정식」도 「구의 방정식 표준형↔일반형」 하나(base ★1)로 충분하고, 「접하는 구」(0359)만 축 접선의 반지름 계산 때문에 따로 세우는 것이 좋다.
- **따로 세워야 할 유형**: (1) 「거리 조건으로 미지 좌표 결정」(0367·0368 · base ★1~2)과 (2) 「세 점이 이루는 삼각형 판정·넓이」(0369 직각 · 0372 넓이 · base ★2)는 골조가 다르므로 분리. (3) 「두 점 사이 거리의 최솟값」(0373)은 이차식 최소 골조라 별도(base ★2). (4) 「등거리 점」은 축 위(미지수 1)·평면 위(미지수 2)·정삼각형 조건(연립 이차)으로 base ★ 가 2 → 2 → 3 으로 오르므로 한 유형 안의 난이도 축으로 두되 0377 형(연립 이차·두 해)은 ★3 소유형으로 표시. (5) 「점에서 좌표평면 위의 직선까지의 거리」(0371)는 이 범위에서 유일하게 공간도형(삼수선)과 결합하는 골조라 독립 유형으로(base ★2~3). (6) 정사영은 「직선–평면 각(길이비)」과 「삼각형–평면 각(넓이비)」 두 유형으로 분리(base ★2 / ★3) — 뒤쪽은 넓이 계산 부담이 별점을 좌우.
- **벤더 대표문제와 base ★**: 유형 01·02 대표문제(0362·0366)는 M_total 4 절차형이라 ★1 로 판정했다. 카탈로그에서 이 두 유형의 base ★ 를 1 로 둘지, 「유형 구역이므로 ★2」로 둘지 결정이 필요하다(교과서 04-1·04-2 문항과 골조가 같음).
