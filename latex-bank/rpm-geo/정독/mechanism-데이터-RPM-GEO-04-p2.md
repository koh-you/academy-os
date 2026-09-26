---
name: mechanism-데이터-RPM-GEO-04-p2
description: RPM 기하 04 공간좌표(2/3 · 유형 05~12) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 기하 (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-geo
  section: 04 공간좌표
  unit_code: GEO-04
  part: "2/3"
  extract_range: "60~64쪽 · 0381~0413"
  total_problems: 33
  unit_total: 105
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-geo/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-geo/items/<id>.tex
  image_source: latex-bank/rpm-geo/figures/ (crops.json)
---

# RPM 기하 · 04 공간좌표 (2/3) 정독 데이터 (v1.0)

이 파일은 RPM 기하 04 공간좌표의 둘째 범위(60~64쪽 · 0381~0413 · 33문항)를 다룬다. 전부 「유형」 구역이며 유형 05 선분의 길이의 합의 최솟값(4) · 유형 06 선분의 내분점(4) · 유형 07 내분점이 좌표평면 또는 좌표축 위에 있을 때(4) · 유형 08 선분의 내분점의 활용(3) · 유형 09 삼각형의 무게중심(4) · 유형 10 구의 방정식(7) · 유형 11 좌표평면 또는 좌표축에 접하는 구의 방정식(4) · 유형 12 자취의 방정식(3)의 여덟 구역이다. RPM 의 벤더 난이도 신호는 구역이 곧 층(교과서 / 유형 / 유형 UP / 시험에 꼭 나오는 문제 / 서술형 / 실력 Up · 난이도 하~상 · 대표문제·중요·기출 태그)이며, 이 범위는 각 유형의 첫 문항 8개가 「대표문제」(난이도 표시 없음 · ★2 출발), 나머지는 중하 5 · 중 18 · 상중 2 로 표시되어 있고 서술형 태그 4(0383·0391·0395·0409), 그림 1(0397)이다.

판정 규칙은 벤더 출발점(대표문제·중하·중 ★2 · 상중 ★3)에서 통찰 0 이고 M_total ≤ 4 이면 −1, 통찰 2개 이상 또는 depth 3 이면 +1 후보로 두되 계산량만으로는 올리지 않았다. insights 는 그 유형의 표준 기법이라도 「그 착안이 없으면 풀이가 시작되지 않는」 한 단계를 d1 로 세었고(대칭점 잡기 · 평행사변형 → 중점 일치 · 접함 → 좌표 절댓값 · 자취 역대입), 공식 대입 연쇄(내분점 · 무게중심 · 표준형 변환 · 네 점 연립)는 절차형으로 두었다. insight_type 은 insights 가 비어 있지 않으면 통찰형, depth_score 는 effective_depth 평균이다. 결과 ★1 8 · ★2 23 · ★3 2 · 통찰형 17 이며, 벤더 신호와 2단 이상 어긋난 문항은 없고 경계 판정 5문을 [분류 이슈] 로 기록했다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 사슬) · `insights[]`(절차형이면 빈 배열) · `variation_notes`(numeric: 바꿔도 되는 수와 제약 / creative: 골조를 유지한 설정 변경과 ★ 변동 지점)를 채웠다. 22개정 교육과정에서 외분점은 다루지 않으므로 변형 메모의 외분 언급은 참고용으로만 적었다.

## 문항 데이터

### 유형 05 선분의 길이의 합의 최솟값

```yaml
- id: RPM-GEO-0381
  page: 60
  vendor_label: "유형 05 선분의 길이의 합의 최솟값"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    두 점 A(1,4,3), B(2,2,3) 과 xy평면 위를 움직이는 점 P 에 대하여 AP+PB 의 최솟값. 단답.
  category: "같은 쪽 확인 → 한 점을 xy평면 대칭 → 대칭점과의 거리"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 2
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "B 의 xy평면 대칭점 B'(2,2,-3) 을 잡아 AP+PB = AP+PB' ≥ AB' 로 꺾인 경로를 직선화"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "대칭이동으로 선분 길이 합의 최솟값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    A, B 모두 z>0 으로 xy평면의 같은 쪽 → B 를 대칭이동해 AB' = √(1+4+36) = √41. 유형의 표준 기법이지만 「대칭점을 잡아야 직선 거리로 바뀐다」는 착안이 풀이의 전부라 SYM d1 로 기록. 유형 대표문제·통찰 1·M_total 4 → ★2 유지.
  tier: star_2
  mechanism_primary: "A·B 같은 쪽 → B 의 xy평면 대칭점 B'(2,2,-3) → AP+PB ≥ AB' = √41"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\sqrt{41}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0381.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 점의 좌표와 평면(xy·yz·zx)을 바꿀 수 있음. 제약: 두 점이 평면의 같은 쪽(해당 좌표 부호 같음)이어야 대칭이 필요하고, 다른 쪽이면 그냥 AB 가 답이 되어 유형이 무너짐. 대칭점과의 거리 제곱이 완전제곱이 아니어도 되지만 근호 하나로 정리되게 좌표를 고른다."
    creative: "(1) 두 점을 평면의 반대쪽에 두고 「최솟값이 AB 인 이유」를 묻기(★1) (2) P 를 좌표축 위로 옮기면 축 둘레 회전 대칭이 필요(0382 골조·★2~3) (3) 최솟값이 되는 P 의 좌표까지 묻기 → 내분점(교점) 계산이 붙어 유형 07 과 결합(★3)."
```

```yaml
- id: RPM-GEO-0382
  page: 60
  vendor_label: "유형 05 선분의 길이의 합의 최솟값"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    두 점 A(-2,0,1), B(2,0,3) 과 x축 위를 움직이는 점 P 에 대하여 AP+PB 의 최솟값. 5지선다.
  category: "두 점이 zx평면 위 확인 → x축 대칭 → 대칭점과의 거리"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 2
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "A·B 가 모두 zx평면(y=0) 위에 있으므로 평면 문제로 보고 A 를 x축 대칭한 A'(-2,0,-1) 과 B 의 거리로 바꿈"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "대칭이동으로 선분 길이 합의 최솟값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 점 모두 y=0 이라 zx평면 안의 2차원 문제 — x축 대칭점 A'(-2,0,-1) 을 잡으면 A'B = √(16+16) = 4√2. 축 대칭은 두 좌표 부호 반전인데 y=0 이라 z 만 바뀜(T-부호). 벤더 중·통찰 1·M_total 4 → ★2.
  tier: star_2
  mechanism_primary: "A·B ∈ zx평면 → A 의 x축 대칭점 A'(-2,0,-1) → A'B = 4√2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0382.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "좌표(y=0 유지)와 축(x·y·z)을 바꿀 수 있음. 제약: 두 점이 축을 포함하는 한 평면 위에 있고 그 평면 안에서 축의 같은 쪽이어야 단순 대칭으로 끝남. 선택지가 k√2·k√3 꼴로 구분되게 좌표를 고른다."
    creative: "(1) 두 점이 축을 포함하는 같은 평면 위에 있지 않게 하면 한 점을 축 둘레로 회전시켜(축까지의 거리 보존) 같은 평면으로 옮겨야 함 → ★3 (2) 최솟값을 주고 좌표 미지수를 역산(0383 골조·★2) (3) 「x축 위의 점」을 「직선 y=z=1 위의 점」으로 바꾸면 평행이동 후 같은 골조(★3)."
```

```yaml
- id: RPM-GEO-0383
  page: 60
  vendor_label: "유형 05 선분의 길이의 합의 최솟값"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    두 점 A(2,3,1), B(4,1,a) 와 yz평면 위를 움직이는 점 P 에 대하여 AP+PB 의 최솟값이 2√14 일 때 양수 a 의 값. 서술형.
  category: "같은 쪽 확인 → yz평면 대칭 → 대칭점 거리 = 2√14 → a 의 이차식 → 양수 선택"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "A 의 yz평면 대칭점 A'(-2,3,1) 을 잡아 최솟값 = A'B 로 옮긴 뒤 a 의 식으로 세움"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "대칭이동으로 선분 길이 합의 최솟값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 점 모두 x>0 → A 의 yz평면 대칭점 A'(-2,3,1) 과 B 의 거리 √(36+4+(a-1)²) = √56 → (a-1)² = 16 → a = 5 (음수 -3 기각). 최솟값을 주고 좌표를 역산하지만 미정계수 풀이라 BW 로 세지 않음. 벤더 중·서술형·통찰 1·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "A·B 같은 쪽 → A 의 yz평면 대칭점 A'(-2,3,1) → A'B² = 40+(a-1)² = 56 → a = 5"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$5$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0383.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "최솟값(√k 꼴)과 좌표를 바꿀 수 있음. 제약: (a-c)² = 완전제곱수가 되게 최솟값을 맞추고 양수 조건으로 한 근만 남게 함. 미지수를 대칭되는 좌표(x)에 두면 대칭점 계산과 얽혀 함정이 늘어남(T-부호)."
    creative: "(1) 미지수를 두 점 모두에 두고 조건 하나를 더 주기(★3) (2) 「최솟값을 갖게 하는 P 의 좌표」를 답으로 → 유형 07 내분점 결합(★3) (3) a 의 부호 조건을 빼면 두 근 모두 답이 되어 「모든 a 의 값의 합」형(★2)."
```

```yaml
- id: RPM-GEO-0384
  page: 60
  vendor_label: "유형 05 선분의 길이의 합의 최솟값"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    두 점 A(1,2,3), B(2,1,-2) 와 zx평면 위를 움직이는 점 P 에 대하여 삼각형 ABP 의 둘레의 길이의 최솟값. 단답.
  category: "둘레 = AB(고정) + (AP+PB) → 같은 쪽 확인 → zx평면 대칭 → 대칭점 거리"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "둘레 최소를 「AB 는 고정이므로 AP+PB 최소」로 환원"
    - step: 3
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "B 의 zx평면 대칭점 B'(2,-1,-2) 로 AP+PB ≥ AB'"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "대칭이동으로 선분 길이 합의 최솟값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    AB = √27 = 3√3 은 상수, AP+PB 만 변함 → y>0 같은 쪽이므로 B 의 zx평면 대칭점 B'(2,-1,-2) 로 AB' = √35. 둘레 분해(EQV d1)와 대칭(SYM d1) 두 단계지만 둘 다 한 줄 착안이라 +1 보류. [분류 이슈] 통찰 2개(d1·d1)·M_total 5 → ★2/★3 경계, 벤더 중에 맞춰 ★2.
  tier: star_2
  mechanism_primary: "둘레 = AB + (AP+PB) → AB = 3√3 고정 → B 의 zx평면 대칭점 B' → AB' = √35 → 3√3+√35"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$3\sqrt{3}+\sqrt{35}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0384.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "좌표·평면 변경 가능. 제약: 두 점이 평면 같은 쪽, 답이 두 근호의 합으로 남아도 됨(전사 답 형태). AB² 과 AB'² 이 서로 다른 무리수가 되게 두면 합쳐지지 않는 점을 학생이 받아들이도록."
    creative: "(1) 사각형 ABQP(P·Q 가 서로 다른 두 평면 위)의 둘레로 확장 → 대칭 두 번(★3) (2) 둘레 대신 「AP+PB 가 최소일 때 삼각형의 넓이」로 바꾸면 P 좌표(교점)까지 필요 → 내분점 결합(★3) (3) 고정변 AB 를 빼고 「AP+PB+PC」로 세 점을 주면 대칭으로 풀리지 않아 유형이 바뀜(주의)."
```

### 유형 06 선분의 내분점

```yaml
- id: RPM-GEO-0385
  page: 61
  vendor_label: "유형 06 선분의 내분점"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    세 점 A(-2,5,2), B(4,2,-1), C(-6,-8,9) 에서 AB 를 1:2 로 내분하는 점 P, BC 를 3:2 로 내분하는 점 Q 에 대하여 PQ 의 중점의 좌표. 단답.
  category: "내분점 공식 두 번 → 중점 공식"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "내분점·중점 좌표 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    P = (2A+B)/3 = (0,4,1), Q = (2B+3C)/5 = (-2,-4,5), 중점 (-1,0,3). 공식 세 번의 연쇄로 통찰 없음. 유형 대표문제·통찰 0·M_total 5(계산 연쇄로 Mₖ 2) → −1 보류, ★2.
  tier: star_2
  mechanism_primary: "P = (2A+B)/3 = (0,4,1) → Q = (2B+3C)/5 = (-2,-4,5) → 중점 (-1,0,3)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$(-1,\,0,\,3)$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0385.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "좌표와 비를 바꿀 수 있음. 제약: 내분점 좌표가 정수가 되도록 (n·A+m·B) 의 각 성분이 m+n 의 배수여야 함. 비의 순서(m:n → 가중치 n:m)가 T-표기 함정."
    creative: "(1) P·Q 좌표 대신 「PQ 의 길이」나 「PQ 의 중점이 특정 좌표평면 위」 조건으로 좌표 미지수 역산(★2~3) (2) 세 점을 삼각형 꼭짓점으로 두고 무게중심과 연결(유형 09·★2) (3) 내분 비를 문자로 두고 「PQ 의 중점이 원점」 조건(★3)."
```

```yaml
- id: RPM-GEO-0386
  page: 61
  vendor_label: "유형 06 선분의 내분점"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    세 점 A(4,3,-2), B(0,-1,10), C(-5,3,1) 에서 AB 를 3:1 로 내분하는 점 D, CD 를 2:1 로 내분하는 점 E(a,b,c) 에 대하여 a+b+c. 단답.
  category: "내분점 공식 → 그 점을 끝점으로 다시 내분점 공식 → 좌표 합"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "내분점·중점 좌표 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    D = (A+3B)/4 = (1,0,7), E = (C+2D)/3 = (-1,1,5) → 5. 0385 와 같은 연쇄 계산(두 번째 내분의 끝점이 첫 번째 결과). 벤더 중·통찰 0·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "D = (A+3B)/4 = (1,0,7) → E = (C+2D)/3 = (-1,1,5) → a+b+c = 5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0386.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "좌표와 비 변경 가능. 제약: D·E 가 정수 좌표(성분 합이 4·3 의 배수). 첫 내분 결과가 둘째 내분에 들어가므로 D 의 정수 조건을 먼저 맞춘다."
    creative: "(1) E 좌표를 주고 C 를 역산(★2) (2) 「E 가 xy평면 위」 조건으로 비를 미지수로(유형 07·★2) (3) D·E 의 비를 문자로 두고 E 가 삼각형 ABC 의 무게중심이 되는 조건(★3·I-EQV)."
```

```yaml
- id: RPM-GEO-0387
  page: 61
  vendor_label: "유형 06 선분의 내분점"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    두 점 A(a,b,c), B(-7,0,5) 에 대하여 AB 의 중점 M, AB 를 1:3 으로 내분하는 점 P 의 좌표가 (-1,3,-1) 일 때 선분 MP 의 길이. 단답.
  category: "내분점 좌표에서 A 역산 → 중점 → 거리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "내분점·중점 좌표 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (3A+B)/4 = P 에서 A(1,4,-3), M(-3,2,1), MP = √(4+1+4) = 3. P 가 A 에서 1/4, M 이 1/2 지점이므로 MP = AB/4 = 12/4 로도 됨(사슬 단축이지만 A 는 어차피 필요해 통찰로 세지 않음). 벤더 중·통찰 0·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "P = (3A+B)/4 → A(1,4,-3) → M(-3,2,1) → MP = 3 (= AB/4)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0387.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "B·P 좌표와 비를 바꿀 수 있음. 제약: A 가 정수가 되려면 (4P−B)/3 의 성분이 정수. MP 가 정수·간단한 근호가 되게 AB² 을 완전제곱수의 배로."
    creative: "(1) 「MP 의 길이는 AB 의 몇 배인가」를 먼저 물어 비례 관계 착안 유도(I-EQV d1·★2) (2) 「AB 를 1:3 과 3:1 로 내분하는 두 점 사이 거리」(★2) (3) A 를 구하지 않고도 답할 수 있게 AB 의 길이만 주면 통찰형 ★2~3."
```

```yaml
- id: RPM-GEO-0388
  page: 61
  vendor_label: "유형 06 선분의 내분점"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    세 점 A(2,5,7), B(2,6,3), C(-3,1,-2) 와 BC 위의 점 D 에 대하여 2△ABD = 3△ADC 일 때 AD 의 길이. 단답.
  category: "넓이 비 → 밑변 비(높이 공통) BD:DC = 3:2 → 내분점 → 거리"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 삼각형이 꼭짓점 A 에서의 높이를 공유하므로 넓이 비 = 밑변 비, 2:3 이 BD:DC = 3:2 로 뒤집혀 내분 비가 됨"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "넓이비 → 내분비로 내분점 결정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    △ABD:△ADC = 3:2 = BD:DC (높이 공통) → D = (2B+3C)/5 = (-1,3,0), AD = √(9+4+49) = √62. 넓이 조건을 내분 비로 옮기는 해석(EQV d2)이 골조이고 비의 역전이 함정. 벤더 상중·통찰 1(d2)·M_total 5 → ★3. [분류 이슈] 유형 06(내분점) 구역이지만 골조는 「넓이비 → 내분비」로 유형 08 활용에 가까움 — type_hint 를 따로 둠.
  tier: star_3
  mechanism_primary: "2△ABD = 3△ADC → BD:DC = 3:2 → D = (2B+3C)/5 = (-1,3,0) → AD = √62"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\sqrt{62}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0388.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "좌표와 넓이 비(2:3 → 3:4 등)를 바꿀 수 있음. 제약: 내분점이 정수 좌표가 되게 (nB+mC) 성분이 m+n 의 배수, AD² 은 완전제곱이 아닌 정수여도 됨(전사 답 √62). 비의 계수 위치를 바꾸면 역전 함정이 달라짐."
    creative: "(1) 넓이 비 대신 「AD 가 ∠BAC 의 이등분선」(각의 이등분선 정리로 BD:DC = AB:AC) → 평면기하 결합 I-XU·★3~4 (2) 넓이 비 조건 두 개로 D·E 두 점을 잡고 DE 의 길이(★3) (3) 「D 가 BC 를 몇 대 몇으로 내분하는지」만 묻는 축소형(★2)."
```

### 유형 07 내분점이 좌표평면 또는 좌표축 위에 있을 때

```yaml
- id: RPM-GEO-0389
  page: 61
  vendor_label: "유형 07 내분점이 좌표평면 또는 좌표축 위에 있을 때"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    두 점 A(3,a,4), B(-3,2,1) 에 대하여 AB 를 3:2 로 내분하는 점이 zx평면 위에 있을 때 a 의 값. 단답.
  category: "zx평면 위 ⇒ y좌표 0 → 내분점 y 성분 식 → a"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "내분점이 좌표평면·좌표축 위(좌표 0 조건)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (2a+3·2)/5 = 0 → a = -3. zx평면은 y=0 이라는 표기 확인 한 단계(T-표기)뿐. 유형 대표문제이지만 통찰 0·M_total 4 → −1 → ★1.
  tier: star_1
  mechanism_primary: "zx평면 위 → y = (2a+6)/5 = 0 → a = -3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-3$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0389.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "좌표·비·평면을 바꿀 수 있음. 제약: 미지수가 평면에서 0 이 되는 좌표에 있어야 하고 정수 해가 나오도록 계수를 맞춤(2a+6 = 0)."
    creative: "(1) 미지수를 다른 좌표에도 두고 「좌표축 위」(두 좌표 0) 조건으로 두 식(0391 골조·★2) (2) 비를 미지수로 바꾸기(0390 골조·★1) (3) 「내분점이 평면 위 + 내분점과 원점 사이 거리」 두 조건으로 미지수 2개(★2~3)."
```

```yaml
- id: RPM-GEO-0390
  page: 61
  vendor_label: "유형 07 내분점이 좌표평면 또는 좌표축 위에 있을 때"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    두 점 A(1,3,2), B(3,-2,-4) 를 이은 선분 AB 가 xy평면에 의하여 1:m 으로 내분될 때 m 의 값. 단답.
  category: "xy평면 위 ⇒ z좌표 0 → 내분점 z 성분 식(m 문자) → m"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "내분점이 좌표평면·좌표축 위(좌표 0 조건)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (2m−4)/(1+m) = 0 → m = 2. 비를 문자로 두는 것 외에 0389 와 같다(|z_A|:|z_B| = 2:4 로 바로 읽어도 됨). 벤더 중하·통찰 0·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "xy평면 위 → z = (2m−4)/(m+1) = 0 → m = 2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$2$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0390.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "좌표와 비의 형태(1:m·m:1·m:n)를 바꿀 수 있음. 제약: 두 점이 평면의 반대쪽(z 부호 반대)이어야 내분점이 존재, m 이 양의 정수·기약분수가 되게 z 좌표 비를 맞춤(|z_A|:|z_B| = 1:m)."
    creative: "(1) 「내분」을 말하지 않고 「AB 가 xy평면과 만나는 점 P 에 대해 AP:PB」로 바꾸면 내분 여부 판단이 붙음(0392 골조·★2) (2) 평면을 「x+y+z=0」 같은 일반 평면으로 바꾸면 조건식이 세 좌표의 합(★2~3) (3) 두 좌표평면에 의해 잘리는 두 비를 동시에 물어 연립(★3)."
```

```yaml
- id: RPM-GEO-0391
  page: 61
  vendor_label: "유형 07 내분점이 좌표평면 또는 좌표축 위에 있을 때"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    두 점 A(-7,4,-5), B(a,b,c) 에 대하여 AB 를 7:4 로 내분하는 점이 yz평면 위에 있고 AB 의 중점이 x축 위에 있을 때 a+b+c. 서술형.
  category: "yz평면 ⇒ x=0 식 → x축 ⇒ y=z=0 두 식 → a, b, c"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "내분점이 좌표평면·좌표축 위(좌표 0 조건)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    내분점 x 성분 (4·(-7)+7a)/11 = 0 → a = 4, 중점 (4+b)/2 = 0, (-5+c)/2 = 0 → b = -4, c = 5 → 5. 두 조건이 서로 다른 좌표를 결정해 독립 1차식 셋. 벤더 중·서술형·통찰 0·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "yz평면 위 → x: (−28+7a)/11 = 0 → a = 4 · x축 위 → 중점 y, z = 0 → b = −4, c = 5 → 합 5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$5$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0391.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "좌표·비를 바꿀 수 있음. 제약: 세 좌표가 서로 다른 조건에서 결정되도록(yz평면 → x, x축 → y·z) 조건을 배치하고 정수 해(7a = 28)가 되게 함."
    creative: "(1) 두 조건이 같은 좌표를 건드리게 하면 연립이 필요(★2) (2) 「내분점이 좌표축 위」로 바꾸면 두 좌표가 동시에 0(★2) (3) 조건 하나를 「중점이 구 x²+y²+z² = r² 위」로 바꾸면 유형 10 과 결합(★3)."
```

```yaml
- id: RPM-GEO-0392
  page: 61
  vendor_label: "유형 07 내분점이 좌표평면 또는 좌표축 위에 있을 때"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    두 점 A(2,-1,3), B(-5,6,-4) 에 대하여 선분 AB 가 xy평면과 만나는 점 P 에 대하여 AP:BP = m:n (서로소 자연수) 일 때 m−n. 5지선다.
  category: "z 부호 반대 → P 는 m:n 내분점 → z=0 식 → m:n = 3:4 → m−n"
  M: {s: 1, k: 1, a: 2, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "내분점이 좌표평면·좌표축 위(좌표 0 조건)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    z_A = 3 > 0, z_B = -4 < 0 이라 P 는 내분점, z 성분 (3n−4m)/(m+n) = 0 → m:n = 3:4 → −1. 내분 여부 판단(T-부호)과 m:n 순서(T-표기)가 함정이고 |z_A|:|z_B| 로 바로 읽어도 됨. 벤더 중·통찰 0·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "A·B 가 xy평면 반대쪽 → P = m:n 내분점 → z = (3n−4m)/(m+n) = 0 → m:n = 3:4 → m−n = −1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0392.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "좌표(z 부호 반대 유지)를 바꿀 수 있음. 제약: |z_A|:|z_B| 가 기약비가 되어 m, n 이 서로소가 되게 하고 m−n 이 선택지에서 하나만 맞게 함."
    creative: "(1) AP:BP 를 「P 가 AB 를 m:n 으로 내분」으로 명시하면 부호 판단이 빠져 ★1 (2) 평면을 두 개(xy·yz)로 두고 두 교점 사이 거리(★3) (3) 「AP:BP = |z_A|:|z_B| 인 이유」를 닮음으로 설명하게 하는 서술형(I-RT d1·★2)."
```

### 유형 08 선분의 내분점의 활용

```yaml
- id: RPM-GEO-0393
  page: 62
  vendor_label: "유형 08 선분의 내분점의 활용"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    평행사변형 ABCD 에서 A(4,-7,-2), B(2,1,0), C(0,1,0) 일 때 선분 BD 의 길이. 5지선다.
  category: "평행사변형 ⇒ 두 대각선의 중점 일치 → D = A+C−B → 거리"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "평행사변형 조건을 「AC 의 중점 = BD 의 중점」으로 옮겨 D 를 결정"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "평행사변형의 대각선 중점 일치"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    AC 의 중점 (2,-3,-1) 이 BD 의 중점 → D = (2,-7,-2), BD = √(0+64+4) = 2√17. 평행사변형을 중점 일치로 바꾸는 착안(유형 표준·EQV d1)이 골조. 유형 대표문제·통찰 1·M_total 4 → ★2.
  tier: star_2
  mechanism_primary: "평행사변형 → 중점(AC) = 중점(BD) → D = A + C − B = (2,−7,−2) → BD = 2√17"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "①"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0393.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 꼭짓점 좌표를 바꿀 수 있음. 제약: 꼭짓점 순서 ABCD 를 지켜 대각선이 AC·BD 가 되게 하고 BD² 이 선택지 오답과 구별되는 값(4·17)이 되게."
    creative: "(1) 꼭짓점 순서를 「A, B, D, C」처럼 바꿔 어느 쌍이 대각선인지 판단시키기(T-표기·★2) (2) 세 점만 주고 「평행사변형이 되는 네 번째 점이 세 개」임을 묻기 → I-MI(★3) (3) 마름모·직사각형 조건을 추가해 미지수 역산(0395 골조·★2~3)."
```

```yaml
- id: RPM-GEO-0394
  page: 62
  vendor_label: "유형 08 선분의 내분점의 활용"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    평행사변형 ABCD 에서 A(3,-1,4), D(-2,4,3) 이고 두 대각선의 교점이 M(0,1,4) 일 때 선분 AB 의 길이. 5지선다.
  category: "대각선 교점 = 각 대각선의 중점 → B = 2M−D → AB"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "대각선의 교점이 BD 의 중점이므로 B = 2M − D 로 바로 결정(C 는 불필요)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "평행사변형의 대각선 중점 일치"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    B = 2M − D = (2,-2,5), AB = √(1+1+1) = √3. C 를 구할 필요가 없다는 판단까지 포함해 한 단계. 벤더 중·통찰 1·M_total 4 → ★2.
  tier: star_2
  mechanism_primary: "교점 M = 중점(BD) → B = 2M − D = (2,−2,5) → AB = √3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0394.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A·D·M 좌표 변경 가능. 제약: B 가 정수 좌표(2M−D), AB² 이 선택지 값과 하나만 일치. C 도 함께 물으면 계산이 두 배."
    creative: "(1) AB 대신 「평행사변형의 둘레」(AB·AD 둘 다 필요·★2) (2) M 대신 「AC 의 중점이 xy평면 위」 조건으로 미지수 좌표 역산(유형 07 결합·★2~3) (3) 네 꼭짓점 중 두 개를 미지수로 두고 마름모 조건(★3)."
```

```yaml
- id: RPM-GEO-0395
  page: 62
  vendor_label: "유형 08 선분의 내분점의 활용"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    네 점 A(a,-5,-3), B(b,-1,2), C(-1,6,2), D(2,2,-3) 으로 사각형 ABCD 가 마름모일 때 a+b 의 값 (a<2). 서술형.
  category: "마름모 ⇒ 평행사변형(중점 일치) + 이웃 변 길이 같음 → 1차식·2차식 연립 → a<2 로 선별"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "마름모를 「AC·BD 의 중점 일치」와 「AB = BC」 두 식으로 분해(변 하나만 같아서는 부족하다는 판단 포함)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "마름모 조건(중점 일치 + 변 길이)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    중점 일치에서 a = b+3, AB² = BC² 에서 (a−b)²+41 = (b+1)²+49 → (b+1)² = 1 → b = 0, −2 → a = 3, 1 → a<2 로 (1,−2) → −1. 마름모 조건 분해(EQV d2)가 골조이고 a<2 선별은 문제가 준 필터(T-범위)라 VF 로 세지 않음. 벤더 중·통찰 1(d2)·M_total 8 → ★2 유지(계산량은 ★ 상승 신호가 아님). [분류 이슈] 서술형·M_total 8·d2 → ★3 후보.
  tier: star_2
  mechanism_primary: "마름모 → 중점(AC) = 중점(BD): a = b+3 · AB² = BC²: (b+1)² = 1 → (a,b) = (1,−2) (a<2) → a+b = −1"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0395.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "좌표와 필터 조건(a<2)을 바꿀 수 있음. 제약: 중점 일치가 1차식 하나(다른 두 좌표는 이미 일치)로 남고, 변 길이 식이 (b+k)² = 정수 꼴로 두 정수 근을 내며 필터로 하나만 남아야 함."
    creative: "(1) 필터 없이 「모든 a 의 값의 합」으로 바꾸면 두 근 모두 사용(★2) (2) 마름모 → 정사각형(대각선 길이도 같음)으로 조건 하나 더(★3) (3) 「마름모가 되기 위한 필요충분 조건」을 좌표로 서술하게 하는 서술형(★3)."
```

### 유형 09 삼각형의 무게중심

```yaml
- id: RPM-GEO-0396
  page: 62
  vendor_label: "유형 09 삼각형의 무게중심"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    세 점 A(a,2,3), B(0,b,1), C(4,3,c) 를 꼭짓점으로 하는 삼각형 ABC 의 무게중심이 (1,3,5) 일 때 a+b+c. 5지선다.
  category: "무게중심 공식 → 성분별 1차식 세 개 → 합"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각형의 무게중심 좌표"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (a+4)/3 = 1, (5+b)/3 = 3, (4+c)/3 = 5 → a = −1, b = 4, c = 11 → 14. 공식 대입뿐. 유형 대표문제·통찰 0·M_total 4 → −1 → ★1.
  tier: star_1
  mechanism_primary: "G = (A+B+C)/3 → a = −1, b = 4, c = 11 → a+b+c = 14"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "④"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0396.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "좌표·무게중심 변경 가능. 제약: 각 성분 합이 3 의 배수(정수 해). 미지수 셋을 서로 다른 성분에 두어야 식이 분리됨."
    creative: "(1) 미지수 둘을 같은 성분에 두고 조건 하나 더(예: AB 의 길이) → 연립(★2) (2) 무게중심 좌표 대신 「무게중심이 x축 위」로 두 성분 0 (유형 07 결합·★2) (3) 두 꼭짓점과 무게중심에서 나머지 꼭짓점 역산(0399 골조·★2)."
```

```yaml
- id: RPM-GEO-0397
  page: 62
  vendor_label: "유형 09 삼각형의 무게중심"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    직육면체(그림 · OA=2, AB=3, OD=6 · O 가 원점, A 가 x축, C 가 y축, D 가 z축 위)에서 삼각형 OEG 의 무게중심의 좌표. 단답.
  category: "그림에서 꼭짓점 좌표 읽기 → 무게중심 공식"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각형의 무게중심 좌표"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    O(0,0,0), E(2,0,6), G(0,3,6) → 무게중심 (2/3, 1, 4). 그림의 축 방향(x 가 앞쪽)에 맞춰 E·G 좌표를 읽는 것이 전부(T-표기). 벤더 중하·통찰 0·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "그림 → O(0,0,0)·E(2,0,6)·G(0,3,6) → 무게중심 (2/3, 1, 4)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\left(\dfrac{2}{3},\,1,\,4\right)$'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0397.png"
  latex: latex-bank/rpm-geo/items/0397.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모서리 길이 세 개를 바꿀 수 있음(그림 라벨 OA·AB·OD 와 꼭짓점 이름 고정). 제약: 무게중심 성분이 분수여도 되지만 라벨 위치가 바뀌면 그림을 다시 그려야 함. 삼각형을 다른 세 꼭짓점(예: AFG)으로 바꿔도 같은 골조."
    creative: "(1) 「삼각형 OEG 의 무게중심과 F 사이의 거리」(★1~2) (2) 정육면체로 두고 꼭짓점 8개 중 세 점을 골라 만든 삼각형의 무게중심이 특정 좌표평면 위에 오는 경우의 수(★3·I-MI) (3) 무게중심 대신 「대각선 OF 를 1:2 로 내분하는 점」 등 내분점 결합(★1~2)."
```

```yaml
- id: RPM-GEO-0398
  page: 62
  vendor_label: "유형 09 삼각형의 무게중심"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    점 P(3,6,9) 의 xy평면·yz평면·zx평면에 대한 대칭점을 각각 A, B, C 라 할 때 삼각형 ABC 의 무게중심 G 에 대하여 PG 의 길이. 단답.
  category: "대칭점 세 개(부호 반전) → 무게중심 → 거리"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각형의 무게중심 좌표"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    A(3,6,−9), B(−3,6,9), C(3,−6,9) → G(1,2,3) → PG = √(4+16+36) = 2√14. 어느 좌표의 부호를 바꾸는지(T-부호)만 조심하면 공식 연쇄. G = P/3 이라 PG = (2/3)·OP 로도 되지만 필수는 아님. 벤더 중·통찰 0·M_total 4 → −1 → ★1.
  tier: star_1
  mechanism_primary: "대칭점 A(3,6,−9)·B(−3,6,9)·C(3,−6,9) → G = (1,2,3) → PG = 2√14"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$2\sqrt{14}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0398.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "P 의 좌표를 바꿀 수 있음. 제약: 각 성분이 3 의 배수면 G 가 정수(G = P/3), PG² = (4/9)·OP² 이 정수가 되게 OP² 을 9 의 배수로."
    creative: "(1) 대칭 대상을 좌표축(두 좌표 반전)이나 원점으로 바꾸기(★1~2) (2) 「G = P/3 임을 보이고 PG:OP 를 구하라」로 바꾸면 규칙 발견(I-PD d1·★2) (3) 삼각형 ABC 의 세 변의 길이를 이용한 넓이로 확장하면 계산 부담↑(★2~3)."
```

```yaml
- id: RPM-GEO-0399
  page: 62
  vendor_label: "유형 09 삼각형의 무게중심"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    삼각형 ABC 에서 AB 의 중점이 M(4,5,6), 무게중심이 G(3,1,2) 일 때 C(a,b,c) 에 대하여 abc 의 값. 단답.
  category: "A+B = 2M, A+B+C = 3G → C = 3G − 2M → 곱"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "A·B 를 따로 구할 수 없으므로 합 A+B = 2M 만 써서 무게중심 식에 대입(또는 G 가 중선 MC 를 2:1 로 내분)해 C 를 한 번에 결정"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각형의 무게중심 좌표"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    C = 3G − 2M = (1,−7,−6) → abc = 42. A·B 를 개별로 구할 수 없고 합만 쓰면 된다는 관계 파악(EQV d1)이 골조. 벤더 중·통찰 1·M_total 4 → ★2.
  tier: star_2
  mechanism_primary: "A+B = 2M · A+B+C = 3G → C = 3G − 2M = (1,−7,−6) → abc = 42"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$42$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0399.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "M·G 좌표 변경 가능. 제약: C = 3G − 2M 은 항상 정수 · abc 가 0 이 되지 않게 함. 중점 대신 「AB 를 1:2 로 내분하는 점」을 주면 관계식이 달라짐(주의)."
    creative: "(1) 「G 가 중선 MC 를 어떤 비로 내분하는가」를 먼저 묻는 두 단계 서술형(★2) (2) 세 변의 중점 두 개와 G 로 꼭짓점 역산(★2~3) (3) G 와 두 꼭짓점, 그리고 「C 가 xy평면 위」 조건으로 미지수 역산(유형 07 결합·★2)."
```

### 유형 10 구의 방정식

```yaml
- id: RPM-GEO-0400
  page: 63
  vendor_label: "유형 10 구의 방정식"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    두 점 A(-2,1,3), B(4,1,-3) 을 지름의 양 끝 점으로 하는 구의 방정식. 5지선다.
  category: "중심 = 중점 → 반지름 = 중심~끝점 거리 → 표준형"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구의 방정식(중심·반지름·지름)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    중심 (1,1,0), r² = 9+0+9 = 18 → (x−1)²+(y−1)²+z² = 18. 공식 두 개. 유형 대표문제·통찰 0·M_total 4 → −1 → ★1.
  tier: star_1
  mechanism_primary: "중심 = 중점(AB) = (1,1,0) → r² = CA² = 18 → 표준형"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "③"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0400.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 끝점 변경. 제약: 중점이 정수, r² = AB²/4 이 선택지 오답(14·16)과 구분되게."
    creative: "(1) 지름의 한 끝과 중심으로 다른 끝 역산(0405 골조·★2) (2) 「두 점을 지나는 구 중 반지름이 최소인 것」으로 바꾸면 지름이 최소인 이유 착안(I-EQV d1·★2) (3) 구의 방정식 대신 「구가 xy평면과 만나는 원의 넓이」(★2·단면)."
```

```yaml
- id: RPM-GEO-0401
  page: 63
  vendor_label: "유형 10 구의 방정식"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    구 x²+y²+z²−4x+6y+2z = 11 의 중심 (a,b,c) 와 반지름 r 에 대하여 a+b+c−r 의 값. 단답.
  category: "일반형 → 완전제곱 → 중심·반지름 → 계산"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구의 방정식(중심·반지름·지름)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (x−2)²+(y+3)²+(z+1)² = 25 → 중심 (2,−3,−1), r = 5 → −7. 완전제곱 정리 한 번(중심 부호가 T-부호). 벤더 중하·통찰 0·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "일반형 → (x−2)²+(y+3)²+(z+1)² = 25 → a+b+c−r = −7"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0401.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 변경. 제약: 우변 + 세 제곱 보정의 합이 완전제곱수가 되어 r 정수. 일차항 계수가 홀수면 중심이 분수(난이도 조절)."
    creative: "(1) 우변을 문자 k 로 두고 「구가 되기 위한 k 의 범위」(r² > 0 · I-EQV d1 · ★2) (2) 중심이 특정 좌표평면 위에 있도록 계수 미지수 역산(★2) (3) 「반지름이 5 인 구가 되도록 상수항 결정」(★1~2)."
```

```yaml
- id: RPM-GEO-0402
  page: 63
  vendor_label: "유형 10 구의 방정식"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    구 (x+6)²+(y−2)²+(z−5)² = 16 과 중심이 같고 점 (−4,1,3) 을 지나는 구의 반지름의 길이. 5지선다.
  category: "중심 읽기 → 중심~점 거리 = 반지름"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구의 방정식(중심·반지름·지름)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    중심 (−6,2,5) 에서 (−4,1,3) 까지 √(4+1+4) = 3. 주어진 반지름 4 는 답과 무관한 정보. 벤더 중하·통찰 0·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "중심 (−6,2,5) → 거리 √(4+1+4) = 3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0402.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "중심·점 변경. 제약: 거리 제곱이 완전제곱 또는 선택지 근호 꼴. 원래 구의 반지름은 답과 무관하게 둠."
    creative: "(1) 「점이 구의 내부/외부」 판단 뒤 그 점을 지나는 동심구(★1~2) (2) 「점에서 구 위의 점까지 거리의 최솟값」 → 중심 거리 − r (I-EQV d1 · ★2) (3) 두 동심구 사이 영역의 부피(★2)."
```

```yaml
- id: RPM-GEO-0403
  page: 63
  vendor_label: "유형 10 구의 방정식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    네 점 (0,0,0), (1,0,1), (0,1,1), (−1,0,1) 을 지나는 구의 중심의 좌표. 단답.
  category: "일반형 4 미지수 → 네 점 대입 → 연립 → 중심"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "네 점을 지나는 구(일반형 연립)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    D = 0, 2+A+C = 0, 2+B+C = 0, 2−A+C = 0 → A = B = 0, C = −2 → 중심 (0,0,1). 대입·연립의 절차. (1,0,1)·(−1,0,1) 대칭에서 x = 0 을 먼저 읽으면 빨라지지만 필수는 아님. 벤더 중·통찰 0·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "x²+y²+z²+Ax+By+Cz+D = 0 → 네 점 대입 → A = B = 0, C = −2, D = 0 → 중심 (0,0,1)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$(0,\,0,\,1)$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0403.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 점 변경. 제약: 네 점이 한 평면 위에 있지 않아야 구가 유일, 연립 해가 정수·간단한 분수. 원점을 포함하면 D = 0 으로 미지수가 하나 줄어 난이도 조절."
    creative: "(1) 세 점이 z = 1 평면 위 원 위에 대칭으로 놓여 중심이 z축 위임을 먼저 읽는 풀이 유도(I-SYM d1 · ★2~3) (2) 네 점 중 하나를 미지수로 두고 「구의 반지름이 √2」 조건으로 역산(★3) (3) 「원점을 지나는 구가 xy평면과 만나는 원의 반지름」 등 단면 결합(★2~3)."
```

```yaml
- id: RPM-GEO-0404
  page: 63
  vendor_label: "유형 10 구의 방정식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    점 (1,a,6) 이 네 점 (0,0,0), (−2,0,0), (0,4,0), (0,−1,1) 을 지나는 구 위에 있을 때 모든 a 의 값의 합. 5지선다.
  category: "일반형 → 네 점 대입 → 구 결정 → (1,a,6) 대입 → a 의 이차식 → 근의 합"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "네 점을 지나는 구(일반형 연립)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    D = 0, A = 2, B = −4, C = −6 → x²+y²+z²+2x−4y−6z = 0 → 1+a²+36+2−4a−36 = 0 → a²−4a+3 = 0 → 합 4(근과 계수). 축 위 점 세 개라 계수가 한 개씩 결정되는 편한 배치. 벤더 중·통찰 0·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "네 점 대입 → A = 2, B = −4, C = −6, D = 0 → (1,a,6) 대입 → a²−4a+3 = 0 → 근의 합 4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0404.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 점(축 위 점 유지)과 대입점 변경. 제약: 축 위 점을 쓰면 계수가 즉시 결정, 대입점의 이차식이 실근 두 개(판별식 > 0)·근의 합이 선택지 정수."
    creative: "(1) 「모든 a 의 값의 합」 대신 「a 의 최댓값」(근 구하기 · ★2) (2) 대입점을 (1,a,a) 처럼 두 좌표에 두면 이차식 계수가 바뀜(★2) (3) 네 점 중 하나를 (0,−1,k) 로 두고 「구가 점 (1,1,6) 을 지날 때 k」(★3)."
```

```yaml
- id: RPM-GEO-0405
  page: 63
  vendor_label: "유형 10 구의 방정식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    구 x²+y²+z²−2x−2y−2z = 11 위의 점 A(2,−1,4) 와 구의 중심을 지나는 직선이 구와 만나는 다른 한 점 B(a,b,c) 에 대하여 a+b+c. 5지선다.
  category: "중심 읽기 → 중심 지나는 직선의 두 교점 = 지름 양 끝 → 중심이 AB 의 중점 → B"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "중심을 지나는 직선과 구의 두 교점은 지름의 양 끝이므로 중심 = 중점(AB) 로 옮겨 B = 2·중심 − A"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "구의 방정식(중심·반지름·지름)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    중심 (1,1,1) → B = 2·중심 − A = (0,3,−2) → 1. 「직선과 구의 교점」을 방정식으로 풀지 않고 지름 관계로 옮기는 착안(EQV d1)이 전부. 벤더 중·통찰 1·M_total 4 → ★2.
  tier: star_2
  mechanism_primary: "중심 (1,1,1) → B = 2·중심 − A = (0,3,−2) → a+b+c = 1"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0405.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구·점 A 변경. 제약: A 가 실제로 구 위에 있어야 함(대입 확인), B 가 정수 좌표."
    creative: "(1) A 를 구 위가 아닌 점으로 두고 「직선 AC 가 구와 만나는 두 점 사이 거리」(지름 · ★1) (2) 「A 에서 가장 먼 구 위의 점」으로 물으면 같은 답에 최대 거리 착안(I-EQV d1 · ★2) (3) 「A 와 구 위의 점 사이 거리의 최댓값·최솟값」 — 중심 거리 ± r(★2)."
```

```yaml
- id: RPM-GEO-0406
  page: 63
  vendor_label: "유형 10 구의 방정식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    두 점 A(4,−6,10), B(−2,0,−2) 에 대하여 AB 를 5:1 로 내분하는 점 P 와 AB 의 중점 M 을 지름의 양 끝 점으로 하는 구의 방정식. 단답.
  category: "내분점 → 중점 → 중심(PM 의 중점) → 반지름 → 표준형"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구의 방정식(중심·반지름·지름)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    P = (A+5B)/6 = (−1,−1,0), M = (1,−3,4) → 중심 (0,−2,2), r² = 1+1+4 = 6. 유형 06 계산 + 0400 골조의 연쇄. 벤더 중·통찰 0·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "P = (A+5B)/6 = (−1,−1,0) · M = (1,−3,4) → 중심 (0,−2,2) · r² = 6 → x²+(y+2)²+(z−2)² = 6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$x^2+(y+2)^2+(z-2)^2=6$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0406.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A·B·비 변경. 제약: P·M 이 정수(성분 합이 6 의 배수), r² 정수. PM = AB·|1/2 − 5/6| = AB/3 이라 r = AB/6."
    creative: "(1) 「구의 반지름이 AB 의 몇 배인지」로 비례 착안(I-EQV d1 · ★2) (2) 구가 원점을 지나도록 비를 미지수로(★3) (3) 지름 대신 「P·M 을 지나고 중심이 xy평면 위인 구」 → 미지수 중심 연립(★3)."
```

### 유형 11 좌표평면 또는 좌표축에 접하는 구의 방정식

```yaml
- id: RPM-GEO-0407
  page: 64
  vendor_label: "유형 11 좌표평면 또는 좌표축에 접하는 구의 방정식"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    구 x²+y²+z²−2ax+4y−4bz+20 = 0 이 xy평면과 yz평면에 동시에 접할 때 양수 a, b 에 대하여 ab 의 값. 5지선다.
  category: "표준형 변환 → 평면 접함 ⇒ 반지름 = 중심의 해당 좌표 절댓값 → 연립 → ab"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "xy평면 접함 → r = |2b|, yz평면 접함 → r = |a| 로 옮겨 a = 2b 와 r² 식을 연립"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "좌표평면·좌표축에 접하는 구"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    중심 (a,−2,2b), r² = a²+4b²−16 → r = 2b = a → 4b²+4b²−16 = 4b² → b = 2, a = 4 → 8. 접함 조건을 좌표 절댓값으로 바꾸는 착안(EQV d1)이 유형의 골조. 유형 대표문제·통찰 1·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "중심 (a,−2,2b) · r² = a²+4b²−16 → r = a = 2b → 4b² = 16 → (a,b) = (4,2) → ab = 8"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0407.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수와 상수항 변경. 제약: r² = a²+4b²−상수 가 양수, 두 접함 조건이 서로 다른 좌표를 잡도록 평면 쌍을 고르고 양수 조건으로 부호를 고정."
    creative: "(1) 세 평면 모두에 접하도록 하면 a = 2b = |−2| 로 즉시 결정(★1~2) (2) 양수 조건을 빼면 부호 조합(I-MI · ★3) (3) 「접하는 두 평면」을 「x축과 y축」으로 바꾸면 축까지의 거리(0408 골조 · ★3)."
```

```yaml
- id: RPM-GEO-0408
  page: 64
  vendor_label: "유형 11 좌표평면 또는 좌표축에 접하는 구의 방정식"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    중심이 (3,−2,a) 이고 x축에 접하는 구의 반지름이 2√10 일 때 양수 a 의 값. 단답.
  category: "x축 접함 ⇒ 반지름 = 중심에서 x축까지 거리 √(y²+z²) → a 의 이차식 → 양수"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "축에 접함 → 반지름 = 중심의 나머지 두 좌표 제곱합의 제곱근(x축이면 √(y²+z²))"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "좌표평면·좌표축에 접하는 구"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    √(4+a²) = 2√10 → a² = 36 → a = 6. 축 접함을 「나머지 두 좌표」로 옮기는 착안이 전부(평면 접함보다 한 단계 깊음). 벤더 중하·통찰 1·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "x축 접함 → r² = (−2)² + a² = 40 → a = 6"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$6$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0408.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "중심 좌표·반지름 변경. 제약: r² − (다른 좌표)² 이 완전제곱수, 양수 조건으로 한 근."
    creative: "(1) 「x축과 y축에 동시에 접」하면 두 식 연립(0410 골조 · ★3) (2) 반지름 대신 「구가 원점을 지남」 조건(★2) (3) 「x축과 만나는 두 점 사이 거리가 4」로 바꾸면 접함 → 할선(피타고라스 · ★3)."
```

```yaml
- id: RPM-GEO-0409
  page: 64
  vendor_label: "유형 11 좌표평면 또는 좌표축에 접하는 구의 방정식"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    점 (2,−5,1) 을 지나고 세 좌표평면에 동시에 접하는 두 구의 반지름의 길이의 합. 서술형.
  category: "세 평면 접함 ⇒ 중심 (±r,±r,±r) → 점의 팔분공간으로 부호 결정 (r,−r,r) → 거리 식 → r 의 이차식 → 근의 합"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "세 평면 접함 → 중심 좌표의 절댓값이 모두 r, 지나는 점의 부호로 (r,−r,r) 한 가지로 좁힌 뒤 거리 식을 세움"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "좌표평면·좌표축에 접하는 구"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (2−r)²+(−5+r)²+(1−r)² = r² → r²−8r+15 = 0 → r = 3, 5 → 합 8(근과 계수). 중심 형태와 부호 결정(EQV d2)이 골조이며 「2개 존재」가 주어져 판별은 불필요. 벤더 중·서술형·통찰 1(d2)·M_total 7 → ★2. [분류 이슈] d2·서술형·M_total 7 → ★3 후보.
  tier: star_2
  mechanism_primary: "중심 (r,−r,r) → (2−r)²+(r−5)²+(1−r)² = r² → r²−8r+15 = 0 → 근의 합 8"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$8$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0409.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지나는 점 변경. 제약: 점의 세 좌표가 모두 0 이 아니어야 팔분공간이 정해지고, r 의 이차식이 두 양의 실근(판별식 > 0 · 근의 합·곱 > 0)을 갖게 함."
    creative: "(1) 「두 구의 중심 사이 거리」로 바꾸면 √3·(r₂−r₁)(★2) (2) 좌표에 0 이 있는 점을 주면 부호가 정해지지 않아 경우 분기(I-MI · ★3) (3) 세 평면 대신 「두 평면 + 반지름」(★2)."
```

```yaml
- id: RPM-GEO-0410
  page: 64
  vendor_label: "유형 11 좌표평면 또는 좌표축에 접하는 구의 방정식"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    반지름이 6√2 이고 세 좌표축에 동시에 접하며 중심의 세 좌표가 모두 양수인 구의 일반형 x²+y²+z²+Ax+By+Cz+D = 0 에 대하여 A+B−C+D 의 값. 단답.
  category: "축 접함 ⇒ 세 거리 식 → 대칭 연립 → 중심 (6,6,6) → 표준형 → 일반형 전개 → 계수 조합"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "세 축 접함을 b²+c² = c²+a² = a²+b² = 72 로 옮기고 양수 조건으로 a = b = c = 6"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "좌표평면·좌표축에 접하는 구"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    세 식에서 a² = b² = c² = 36 → (6,6,6), r² = 72 → x²+y²+z²−12x−12y−12z+36 = 0 → A+B−C+D = −12−12+12+36 = 24. 축 접함 → 두 좌표 거리 식(EQV d2)과 일반형 계수 부호 읽기(T-표기)·양수 조건(T-부호). 벤더 상중·통찰 1(d2)·M_total 8 → ★3.
  tier: star_3
  mechanism_primary: "b²+c² = c²+a² = a²+b² = 72 → a = b = c = 6 → (x−6)²+(y−6)²+(z−6)² = 72 → A+B−C+D = 24"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$24$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0410.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "반지름 변경. 제약: r² = 2k² 이어야 중심 (k,k,k) 이 정수, 양수 조건 유지, 계수 조합식(A+B−C+D)의 부호 배치로 함정 조절."
    creative: "(1) 양수 조건을 빼면 부호 조합 8 가지 중 조건(예: 특정 점 지남)으로 고르기(I-MI · ★3~4) (2) 「세 축에 접하는 구가 원점을 지날 수 있는가」 판단(★2) (3) 두 축에만 접하고 한 좌표평면에 접하는 혼합 조건(★3)."
```

### 유형 12 자취의 방정식

```yaml
- id: RPM-GEO-0411
  page: 64
  vendor_label: "유형 12 자취의 방정식"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    두 점 A(−3,0,0), B(3,0,0) 으로부터 거리의 비가 2:1 인 점 P 의 자취(구)의 중심 (a,b,c) 와 반지름 r 에 대하여 a+b+c+r. 5지선다.
  category: "P(x,y,z) 로 두고 PA² = 4PB² → 전개·정리 → 표준형 → 중심·반지름"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "거리의 비 조건을 좌표 식 PA² = 4PB² 으로 옮겨 구의 방정식으로 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "거리의 비 자취(아폴로니우스 구)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (x+3)²+y²+z² = 4[(x−3)²+y²+z²] → x²−10x+9+y²+z² = 0 → (x−5)²+y²+z² = 16 → 5+0+0+4 = 9. 자취 조건을 좌표 식으로 옮기는 표준 착안(RT d1). AB 의 2:1 내분점 (1,0,0)·외분점 (9,0,0) 이 지름의 양 끝이라는 아폴로니우스 골조로 전개 없이도 되나 22개정에서 외분은 다루지 않아 참고용. 유형 대표문제·통찰 1·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "PA² = 4PB² → x²+y²+z²−10x+9 = 0 → (x−5)²+y²+z² = 16 → a+b+c+r = 9"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0411.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 점(축 위 대칭 배치 유지)과 비(m:n ≠ 1:1) 변경. 제약: 비가 1:1 이면 평면이 되어 유형이 바뀜, 전개 후 중심·반지름이 정수가 되게 좌표를 고름(중심 x = (m²·x_B − n²·x_A)/(m²−n²) 꼴)."
    creative: "(1) 두 점을 축 밖에 두면 전개가 무거워짐(★2 · Mₖ ↑) (2) 「자취 위의 점 P 에 대하여 OP 의 최댓값」으로 이어 구 위의 점과의 거리(★3) (3) 「비가 1:1 이면 어떤 도형인가」 대조 서술(I-EQV d1 · ★2)."
```

```yaml
- id: RPM-GEO-0412
  page: 64
  vendor_label: "유형 12 자취의 방정식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    점 A(0,0,6) 과 구 x²+y²+z² = 4 위의 점 B 에 대하여 AB 의 중점이 나타내는 도형의 방정식. 5지선다.
  category: "B(a,b,c)·중점 P(x,y,z) → a,b,c 를 x,y,z 로 역표현 → B 의 조건식에 대입 → 정리"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "종속점 자취: 동점 B 를 구하는 점 P 의 좌표로 역표현(B = 2P − A)해 B 의 구 방정식에 대입"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "종속점의 자취(역대입)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    B = (2x, 2y, 2z−6) → 4x²+4y²+(2z−6)² = 4 → x²+y²+(z−3)² = 1. 역대입(RT d1)이 골조. A 를 중심으로 하는 1/2 닮음으로 「중심 = 중점(A, O) = (0,0,3), 반지름 1」을 바로 읽는 길도 있음. 벤더 중·통찰 1·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "P = 중점(A,B) → B = (2x, 2y, 2z−6) → 4x²+4y²+(2z−6)² = 4 → x²+y²+(z−3)² = 1"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0412.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A 의 좌표·구의 반지름 변경. 제약: 결과 구의 중심 = 중점(A, 원래 중심), 반지름 = 원래의 1/2. 선택지가 중심 부호·반지름 제곱으로 구별되게."
    creative: "(1) 중점 → 1:2 내분점으로 바꾸면 닮음비 1/3(0413 골조 · ★2) (2) 「닮음으로 답을 설명하라」 서술형(I-SC d1 · ★2) (3) A 도 다른 구 위를 움직이게 하면 자취가 구가 아닌 영역이 되어 단원 밖(제외)."
```

```yaml
- id: RPM-GEO-0413
  page: 64
  vendor_label: "유형 12 자취의 방정식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    점 A(−6,3,0) 과 구 x²+y²+z²−4x−2z+4 = 0 위의 점 B 에 대하여 AB 를 1:2 로 내분하는 점이 나타내는 도형의 부피. 5지선다.
  category: "구 표준형 → B = 3P − 2A 로 역표현 → 대입 → 반지름 1/3 → 부피"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "내분점 P 로 B 를 역표현(B = 3P − 2A)해 구 방정식에 대입"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "종속점의 자취(역대입)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (x−2)²+y²+(z−1)² = 1 (r = 1) → B = (3x+12, 3y−6, 3z) 대입 → 9[(x+10/3)²+(y−2)²+(z−1/3)²] = 1 → r' = 1/3 → V = (4/3)π/27 = 4π/81. 부피만 묻으므로 반지름만 필요하고 A 중심 1/3 닮음이면 한 줄. 벤더 중·통찰 1·M_total 7 → ★2. [분류 이슈] 닮음(I-SC) 으로 보면 ★1~2, 역대입 전개면 계산 부담 ★2~3 — 풀이 경로에 따라 체감 차이 큼.
  tier: star_2
  mechanism_primary: "r = 1 → P = (2A+B)/3 → B = 3P − 2A → 대입 → r' = 1/3 → V = (4/3)π(1/3)³ = 4π/81"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0413.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A·구·비 변경. 제약: 결과 반지름 = r·n/(m+n)(내분 m:n 에서 B 쪽 가중치) 이 되도록 하고 부피가 선택지 분수 π 꼴로 정리. 중심 좌표는 답에 불필요하므로 분수여도 됨."
    creative: "(1) 부피 대신 「자취의 중심 좌표」를 물으면 분수 좌표 계산이 붙음(★2) (2) A 를 구 위의 점으로 두면 자취가 A 를 지나는 구(★2) (3) 「AB 를 m:n 으로 내분하는 점의 자취 부피가 원래의 1/27 일 때 m:n」 역산(I-BW d1 · ★3)."
```

## 표본 판정 요약 (33문)

- ★ 분포: ★1 8 · ★2 23 · ★3 2 · ★4 0 · ★5 0
- 통찰형 17 · 절차형 16 · premium 0
- 통찰 유형: I-EQV 11 · I-SYM 4 · I-RT 3 (라벨 18개 / 17문 · depth 2 는 0388·0395·0409·0410 네 문항, 나머지 d1)
- type_hint 상위: 「구의 방정식(중심·반지름·지름)」 5 · 「대칭이동으로 선분 길이 합의 최솟값」 4 · 「내분점이 좌표평면·좌표축 위(좌표 0 조건)」 4 · 「삼각형의 무게중심 좌표」 4 · 「좌표평면·좌표축에 접하는 구」 4 · 이어서 「내분점·중점 좌표 계산」 3 · 「평행사변형의 대각선 중점 일치」 2 · 「네 점을 지나는 구(일반형 연립)」 2 · 「종속점의 자취(역대입)」 2 · 「넓이비 → 내분비로 내분점 결정」 1 · 「마름모 조건(중점 일치 + 변 길이)」 1 · 「거리의 비 자취(아폴로니우스 구)」 1
- 벤더 신호 대비: 대표문제 8 중 ★1 판정 3(0389·0396·0400 — 공식 한 번) · 중 18 중 ★1 1(0398) · 중하 5 중 ★2 1(0408 — 축 접함 착안) · 상중 2 는 모두 ★3. 2단 이상 어긋난 문항 없음
- 그림: 1문(`crop:fig-0397.png`) · 서술형 태그 4문(0383·0391·0395·0409) 모두 ★2

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 경계에 걸려 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-GEO-0384 | 통찰 2개(EQV d1 둘레 분해 + SYM d1 대칭)지만 둘 다 한 줄 착안·M_total 5 → +1 보류. 벤더 중에 맞춰 ★2 | ★2 / ★3 |
| RPM-GEO-0388 | 유형 06(내분점) 구역이나 골조는 「넓이비 → 내분비」로 유형 08 활용에 가까움. 카탈로그에서 어느 유형에 둘지 결정 필요 | ★3 |
| RPM-GEO-0395 | 서술형·M_total 8(Mₜ 2)·EQV d2 인데 벤더 중 → ★2 유지. 계산량은 ★ 상승 신호가 아니라는 v3.8 원칙으로 두었으나 체감은 ★3 가능 | ★2 / ★3 |
| RPM-GEO-0409 | 서술형·M_total 7·EQV d2(부호 결정) → ★2 유지. 0395 와 같은 경계 | ★2 / ★3 |
| RPM-GEO-0413 | 닮음(I-SC 갈래)으로 보면 한 줄(★1~2), 역대입 전개면 계산 부담(★2~3). 풀이 경로에 따라 체감 차이가 커서 카탈로그에서 「종속점 자취」의 base ★ 를 정할 때 닮음 풀이 허용 여부를 먼저 정해야 함 | ★2 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 반복된 type_hint: 「구의 방정식(중심·반지름·지름)」 5 · 「대칭이동으로 선분 길이 합의 최솟값」 4 · 「내분점이 좌표평면·좌표축 위」 4 · 「삼각형의 무게중심 좌표」 4 · 「좌표평면·좌표축에 접하는 구」 4.
- 따로 세워야 할 유형: (1) 「좌표평면에 접하는 구」(r = 좌표 절댓값 · d1)와 「좌표축에 접하는 구」(r = 나머지 두 좌표 거리 · d1~d2)는 착안 깊이가 달라 base ★ 를 분리하는 것이 맞음(0407 vs 0408·0410). (2) 「거리의 비 자취(아폴로니우스 구)」와 「종속점의 자취(역대입)」는 골조(직접 식 세우기 vs 역표현 대입)가 달라 분리. (3) 「넓이비 → 내분비」(0388)는 유형 06 안에 있지만 평면기하 해석이 붙어 「내분점의 활용」 쪽 상위 유형으로 두는 편이 정확.
- 통합해도 될 유형: 「내분점·중점 좌표 계산」(0385~0387)과 「내분점이 좌표평면·좌표축 위」(0389~0392)는 모두 내분점 공식 + 1차식이라 base ★ 가 같고(★1~2), 조건 위치(좌표 0)만 다르므로 한 유형의 하위 변형으로 묶어도 됨. 「삼각형의 무게중심 좌표」 4문(직접 계산 · 그림 읽기 · 대칭점 · 중점+무게중심 역산)도 한 유형 안의 변형으로 충분. 「지름의 양 끝 구」(0400·0406)와 「중심을 지나는 직선의 교점」(0405)은 같은 「지름 관계」 골조.
- 이 범위에 없는 것: 유형 UP · 시험에 꼭 나오는 문제 · 기출 태그 · ★4 이상. 04 공간좌표는 통찰이 있어도 대부분 d1 이라 ★4·5 슬롯은 3/3 범위(유형 UP·실력 Up)에서 나올 가능성이 큼.
