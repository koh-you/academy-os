---
name: mechanism-데이터-RPM-GEO-01-p3
description: RPM 기하 01 이차곡선(3/4 · 유형 08~15 · 타원의 평행이동~쌍곡선의 정의) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 기하 (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-geo
  section: 01 이차곡선
  unit_code: GEO-01
  part: "3/4"
  extract_range: "14~19쪽 · 0071~0105"
  total_problems: 35
  unit_total: 150
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-geo/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-geo/items/<id>.tex
  image_source: latex-bank/rpm-geo/figures/ (crops.json)
---

# RPM 기하 · 01 이차곡선 (3/4) 정독 데이터 (v1.0)

이 파일은 RPM 기하 01 이차곡선의 세 번째 범위(14~19쪽 · 0071~0105 · 35문항)를 다룬다. 구역은 「유형 08 타원의 평행이동」부터 「유형 15 쌍곡선의 정의를 이용한 쌍곡선의 방정식」까지 여덟 유형이며 전부 「유형」 구역이라 벤더 신호는 난이도 표시(중하·중·상중)와 태그(대표문제·서술형)뿐이다. ★ 출발점은 유형 구역 규칙(level 없음·중 → ★2, 중하 → ★1~2, 상중 → ★3)을 쓰고, 통찰 0·M_total ≤ 4 → −1, 통찰 2개 이상 또는 depth 3 → +1 로 조정했다(M_total 5 는 출발점 유지). insight_type 은 견본을 따라 통찰이 없거나 d1 하나뿐이면 절차형, depth 2 이상 또는 통찰 2개 이상이면 통찰형으로 적었다. 그림은 4문(0080·0082·0083·0086)이며 크롭을 직접 보고 판정했다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 사슬) · `insights[]` · `variation_notes`(numeric: 바꿔도 되는 수와 제약 / creative: 골조 유지 변형과 ★ 변동 지점)를 채웠다. 답은 전사본 answer 를 그대로 옮겼고 35문 전부 다시 풀어 일치를 확인했다.

## 문항 데이터

### 유형 08 타원의 평행이동

```yaml
- id: RPM-GEO-0071
  page: 14
  vendor_label: "유형 08 타원의 평행이동"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    타원 (x-p)^2/a^2 + (y-q)^2/5 = 1 의 두 초점이 F(5,1), F'(1,1) 일 때 a+p+q 의 값. (a>0)
  category: "두 초점의 중점 → 중심 (p,q) · c=2 → a^2 = 5 + c^2 → 합"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "타원의 평행이동 · 초점 조건으로 미정계수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 초점의 중점 (3,1) 이 중심이므로 p=3, q=1. 초점이 가로로 놓였으니 장축이 x축 방향이라 a^2>5 이고 c=2 → a^2=5+4=9, a=3. 합 7. 세 단계 절차·통찰 없음·M_total 5 → 유형 대표 출발점 ★2 유지. 함정은 어느 분모가 큰지(장축 방향) 판독 하나.
  tier: star_2
  mechanism_primary: "초점 중점 → 중심 (p,q)=(3,1) → 초점 가로 배치 → a^2 = 5 + c^2 = 9 → a=3 → 합 7"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0071.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초점 좌표(중점이 정수가 되게)와 고정 분모 5 를 바꿀 수 있음. 제약: 초점이 가로면 미지 분모 a^2 = 고정 분모 + c^2 이 완전제곱수가 되도록(a 정수), 초점을 세로로 두면 미지 분모가 작은 쪽이 되어 a^2 = 고정 분모 − c^2 > 0 조건 필요. a>0 조건 유지."
    creative: "(1) 초점 대신 장축 양 끝점을 주기(★2 유지) (2) 초점을 세로로 배치해 a^2 < 5 가 되게 하면 장축 방향 판독이 핵심 함정(★2, T-표기 추가) (3) 초점 하나와 장축 길이만 주고 중심을 역추적하게 하면 I-BW d1 → ★3 후보."
```

```yaml
- id: RPM-GEO-0072
  page: 14
  vendor_label: "유형 08 타원의 평행이동"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    타원 5x^2-10x+4y^2+16y+1=0 을 x축 방향으로 m, y축 방향으로 n 만큼 평행이동하면 5x^2+4y^2+k=0 과 일치할 때 m+n+k 의 값.
  category: "일반형 완전제곱 → 5(x-1)^2+4(y+2)^2=20 → 중심을 원점으로 옮기는 (m,n) · k=-20"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "타원의 일반형 → 표준형 · 평행이동량 읽기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x, y 각각 완전제곱해 5(x-1)^2+4(y+2)^2=20. 중심 (1,-2) 를 원점으로 보내는 이동이 m=-1, n=2 이고 5x^2+4y^2=20 → k=-20. 합 -19. 완전제곱 두 번과 이동 방향 부호가 전부·통찰 없음·M_total 4 → 중하 출발점에서 −1, ★1. 함정은 m 의 부호(중심 1 → 원점이므로 −1).
  tier: star_1
  mechanism_primary: "일반형 완전제곱 → 5(x-1)^2+4(y+2)^2=20 → 중심 (1,-2) 를 원점으로 (m,n)=(-1,2) → k=-20 → -19"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-19$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0072.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 5·4 와 일차항 계수(중심 좌표)·상수항을 바꿀 수 있음. 제약: 완전제곱 뒤 우변이 양수여야 타원이 되고, 일차항 계수 = 2·계수·중심 으로 중심을 정수로. 목표식 5x^2+4y^2+k=0 은 k<0."
    creative: "(1) 반대로 원점 중심 타원을 이동해 일반형을 만들게 하기(★1) (2) 이동 후의 타원이 지나는 점을 조건으로 주어 k 를 역산(★2) (3) 이동 전·후 초점 좌표를 주고 (m,n) 을 찾게 하면 초점 계산이 추가돼 ★2."
```

```yaml
- id: RPM-GEO-0073
  page: 15
  vendor_label: "유형 08 타원의 평행이동"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    타원 x^2+2y^2-4√2x+8y+8=0 의 두 초점 사이의 거리.
  category: "일반형 완전제곱 → (x-2√2)^2/8 + (y+2)^2/4 = 1 → c^2=8-4 → 2c"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "타원의 일반형 → 표준형 · 초점 사이 거리"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (x-2√2)^2+2(y+2)^2=8 → 분모 8, 4. c^2=4, 두 초점 사이 거리 2c=4. 중심은 답에 영향 없음(초점 거리는 평행이동 불변). 통찰 없음·M_total 4 → 중하 출발점에서 −1, ★1. 함정은 「거리 = 2c」(c 로 답하는 실수).
  tier: star_1
  mechanism_primary: "완전제곱 → 표준형 분모 8, 4 → c^2 = 8-4 = 4 → 거리 2c = 4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$4$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0073.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항 계수(중심)·상수항·y^2 계수를 바꿀 수 있음. 제약: 완전제곱 뒤 우변 양수, 두 분모 차가 완전제곱수면 답이 정수. 중심에 무리수(2√2)를 넣는 것은 계산 소음이므로 정수 변형이 기본."
    creative: "(1) 두 초점의 좌표를 직접 묻기(중심 좌표까지 필요 · ★1~2) (2) 「초점 사이 거리는 평행이동에 불변」을 이용해 표준형 없이 답하게 하는 보기 문항(★2, I-EQV d1) (3) 초점 거리를 주고 상수항을 역산(★2)."
```

```yaml
- id: RPM-GEO-0074
  page: 15
  vendor_label: "유형 08 타원의 평행이동"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    타원 (x+2)^2/20 + (y-3)^2/11 = 1 의 두 초점 F, F' 과 원점 O 로 만든 삼각형 OFF' 의 넓이. 5지선다.
  category: "c^2=20-11 → 초점 (-2±3, 3) → 밑변 FF'=6 · 높이 3 → 넓이 9"
  M: {s: 1, k: 1, a: 1, t: 2}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행이동한 타원의 초점 · 원점과 이루는 삼각형 넓이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    c=3, 초점 (1,3), (-5,3). 두 초점이 직선 y=3 위에 있으니 원점에서의 높이는 3, 밑변 6 → 넓이 9. 절차 세 단계·통찰 없음. 함정은 중심 (-2,3) 의 부호와 장축 방향(20>11) 두 가지 → M_t 2, M_total 5 → 중 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "c^2 = 20-11 = 9 → 초점 (-2±3, 3) → 밑변 6 · 높이 3 → 넓이 9"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0074.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "중심 (-2,3) 과 분모 20·11 을 바꿀 수 있음. 제약: 분모 차가 완전제곱수(c 정수)여야 하고, 넓이 = c·|중심의 y좌표|(가로 장축)이므로 y좌표가 0 이면 퇴화. 세로 장축이면 높이는 |중심의 x좌표|."
    creative: "(1) 원점 대신 타원의 꼭짓점을 세 번째 점으로(★2) (2) 넓이를 주고 중심의 y좌표를 역산(★2, I-BW d1) (3) 쌍곡선으로 바꾸면 c^2=a^2+b^2 로 골조 동일(0102 참조 · ★2)."
```

```yaml
- id: RPM-GEO-0075
  page: 15
  vendor_label: "유형 08 타원의 평행이동"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    타원 (x-k)^2/4 + (y+2)^2/9 = 1 의 초점 중 y좌표가 양수인 점과 직선 2x-y+√5=0 사이의 거리가 √5 일 때 양수 k 의 값. 5지선다.
  category: "세로 장축 c=√5 → 초점 (k, -2+√5) → 점·직선 거리 |2k+2|/√5 = √5 → k=3/2"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행이동한 타원의 초점과 직선 사이 거리 → 미정계수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    9>4 이므로 장축 세로, c=√5. 초점 (k, -2±√5) 중 y>0 은 -2+√5. 거리 |2k-(-2+√5)+√5|/√5 = |2k+2|/√5 = √5 → |2k+2|=5 → k=3/2(양수). √5 가 상쇄되게 설계된 문제. 절차형이지만 단계 5·부호 함정(절댓값 해 둘 중 양수·초점 y좌표 부호) → M_total 7, 중 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "세로 장축 c=√5 → 초점 (k, -2+√5) → 거리식에서 √5 상쇄 → |2k+2| = 5 → k = 3/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0075.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모 4·9, 중심 y좌표 -2, 직선의 상수항을 바꿀 수 있음. 제약: 직선의 상수항이 초점 y좌표의 근호 항을 상쇄하도록 맞춰야 답이 유리수. |2k+2|=5 의 두 해 중 하나만 양수가 되게 유지."
    creative: "(1) 초점 대신 꼭짓점과 직선 사이 거리(★1~2) (2) 「두 초점에서 직선까지의 거리의 합」을 묻기(초점이 직선 같은 쪽/반대쪽 분기 · I-MI d1 → ★3) (3) 직선이 타원에 접한다는 조건으로 바꾸면 판별식 → 다른 유형."
```

```yaml
- id: RPM-GEO-0076
  page: 15
  vendor_label: "유형 08 타원의 평행이동"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    타원 x^2+2y^2-4x-20y+44=0 이 y축과 만나는 두 점 A, B 와 타원의 중심 C 로 만든 삼각형 ABC 의 넓이. 서술형.
  category: "완전제곱 → (x-2)^2/10 + (y-5)^2/5 = 1 · C(2,5) → x=0 대입 y=5±√3 → 밑변 2√3 · 높이 2"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "타원의 일반형 → 축과의 교점 · 중심과 이루는 삼각형 넓이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    표준형 (x-2)^2/10+(y-5)^2/5=1, 중심 (2,5). x=0 대입 (y-5)^2=3 → AB=2√3 이 y축 위에 놓이고 높이는 중심의 x좌표 2 → 넓이 2√3. 완전제곱·대입·넓이 네 단계, 통찰 없음, M_total 5 → 중·서술형 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "완전제곱 → 중심 (2,5) → x=0 대입 (y-5)^2=3 → AB=2√3 · 높이 2 → 2√3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2\sqrt{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0076.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "중심 (2,5) 와 분모 10·5 를 바꿀 수 있음. 제약: x=0 대입 후 (y-5)^2 > 0 이어야 y축과 두 점에서 만남(중심 x좌표^2 < 가로 분모), 넓이 = |중심 x| · √(세로분모·(1 − 중심x^2/가로분모))."
    creative: "(1) x축과의 교점으로 바꾸기(★2) (2) 「y축과 만나지 않도록 하는 상수항의 범위」로 바꾸면 I-BW d1 → ★2~3 (3) 두 교점과 한 초점으로 삼각형을 만들면 초점 계산 추가 → ★2."
```

### 유형 09 타원의 정의를 이용한 타원의 방정식

```yaml
- id: RPM-GEO-0077
  page: 15
  vendor_label: "유형 09 타원의 정의를 이용한 타원의 방정식"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    두 초점이 F(-1,5), F'(-1,-1) 이고 장축의 길이가 2√13 인 타원의 단축의 길이.
  category: "초점 세로 배치 c=3 → a^2=13 → b^2=a^2-c^2=4 → 2b"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 초점·장축 길이 → 타원의 방정식(단축)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    FF'=6 이므로 c=3, 장축 2a=2√13 → a^2=13, b^2=13-9=4 → 단축 2b=4. 중심 (-1,2) 는 답에 필요 없음. 공식 사슬 두 단계·통찰 없음·M_total 4 → 유형 대표 출발점 ★2 에서 −1, ★1.
  tier: star_1
  mechanism_primary: "c = FF'/2 = 3 → a^2 = 13 → b^2 = a^2 − c^2 = 4 → 2b = 4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0077.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초점 좌표(같은 x 또는 같은 y)와 장축 길이를 바꿀 수 있음. 제약: a^2 > c^2, a^2−c^2 이 완전제곱수면 답이 정수. 장축 길이에 무리수(2√13)를 두는 것은 a^2 를 정수로 만들기 위한 장치."
    creative: "(1) 타원의 방정식 자체를 쓰게 하기(중심까지 필요 · ★1~2) (2) 단축 길이와 초점을 주고 장축을 묻기(★1) (3) 초점 둘과 지나는 점을 주면 정의로 2a 를 구해야 함(0079 골조 · ★2)."
```

```yaml
- id: RPM-GEO-0078
  page: 15
  vendor_label: "유형 09 타원의 정의를 이용한 타원의 방정식"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    두 점 A(0,0), B(4,0) 에 대하여 PA+PB=8 을 만족시키는 점 P 의 자취(타원)의 장축 길이와 단축 길이의 곱. 5지선다.
  category: "정의 → 초점 A, B · 2a=8 · c=2 → b^2=12 → 8·4√3"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "PA+PB=k 자취 → 타원(정의)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    거리 합이 일정하므로 A, B 를 초점으로 하는 타원. 2a=8, c=2, b^2=16-4=12, 단축 4√3. 곱 32√3. 초점이 원점에 있지 않지만 축 길이는 중심과 무관. 정의 인식 + 공식 두 단계·통찰 없음·M_total 4 → 중하 출발점에서 −1, ★1.
  tier: star_1
  mechanism_primary: "PA+PB=8 → 초점 A, B 인 타원 · 2a=8 · c=2 → b^2=12 → 8·4√3 = 32√3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "③"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0078.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "B 의 좌표(2c)와 합 8(2a)을 바꿀 수 있음. 제약: 2a > AB 여야 타원, a^2−c^2 이 완전제곱수면 단축이 정수, 아니면 근호 형 보기."
    creative: "(1) 자취의 방정식을 쓰게 하기(중심 (2,0) 이동 필요 · ★2) (2) PA+PB=8 을 만족하는 점 중 y축 위의 점을 묻기(★2) (3) 합 대신 |PA−PB| 로 바꾸면 쌍곡선(0088 골조)."
```

```yaml
- id: RPM-GEO-0079
  page: 15
  vendor_label: "유형 09 타원의 정의를 이용한 타원의 방정식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    두 점 F(4,0), F'(-2,0) 을 초점으로 하고 점 A(5,0) 을 지나는 타원이 y축과 만나는 두 점의 y좌표의 곱. 5지선다.
  category: "중심 (1,0) · c=3 → A 가 장축 끝 → a=4 · b^2=7 → x=0 대입 → 두 근의 곱 -105/16"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 초점·지나는 점 → 타원의 방정식 → 축과의 교점"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    중심 (1,0), c=3. A(5,0) 은 장축 위의 점이라 AF+AF'=1+7=8=2a(또는 a=5-1=4). b^2=16-9=7 → (x-1)^2/16+y^2/7=1. x=0: y^2=7·15/16=105/16, 두 y좌표는 ±√105/4 → 곱 -105/16. 분수 계산이 있어 M_k 2, 통찰 없음 → 중 출발점 ★2 유지. 함정은 곱의 부호.
  tier: star_2
  mechanism_primary: "중심 (1,0) · c=3 → 2a = AF+AF' = 8 → b^2=7 → x=0 대입 y^2=105/16 → 곱 -105/16"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0079.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초점 좌표(중심이 정수)와 지나는 점(장축 위)을 바꿀 수 있음. 제약: 지나는 점이 장축 위면 a 가 바로 나오고, 일반 위치면 거리 합 계산이 무리수가 되기 쉬움. 중심 x좌표^2 < a^2 이어야 y축과 두 점에서 만남."
    creative: "(1) 지나는 점을 장축 밖 일반 위치로 두면 정의로 두 거리를 계산해야 해 M_k 상승(★2~3) (2) 두 교점 사이 거리(현의 길이)를 묻기(★2) (3) 교점의 y좌표 곱이 주어지고 초점을 역산하면 I-BW d1 → ★3."
```

### 유형 10 타원의 정의의 활용; 장축의 길이

```yaml
- id: RPM-GEO-0080
  page: 16
  vendor_label: "유형 10 타원의 정의의 활용; 장축의 길이"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    두 초점 F(3,0), F'(-3,0) 인 타원과 F 를 지나는 직선이 만나는 두 점 A, B 에 대하여 삼각형 AF'B 의 둘레가 20 일 때 타원의 단축의 길이. 그림.
  category: "둘레 = (AF+AF')+(BF+BF') = 4a → a=5 · c=3 → b=4 → 2b"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "둘레 AF'+AB+BF' 를 AB=AF+BF 로 쪼개 (AF+AF')+(BF+BF') = 4a 로 재조립"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "초점을 지나는 현 · 삼각형 둘레 = 4a(타원의 정의 활용)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    A, B 가 타원 위이므로 AF+AF'=BF+BF'=2a. 둘레 AF'+AB+BF' 에서 AB=AF+BF 로 쪼개면 4a=20, a=5. c=3 → b=4 → 단축 8. 둘레를 두 초점거리 합으로 재조립하는 것이 이 유형의 핵심 통찰(EQV d1)이고 나머지는 한 줄. M_total 4 이지만 통찰이 있어 유형 대표 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "F 를 지나는 현 → 둘레 = (AF+AF')+(BF+BF') = 4a = 20 → a=5 · c=3 → b=4 → 단축 8"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$8$'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0080.png"
  latex: latex-bank/rpm-geo/items/0080.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초점 좌표(c)와 둘레(4a)를 바꿀 수 있음. 제약: 둘레는 4 의 배수(a 정수), a > c, a^2−c^2 완전제곱수면 단축 정수. 직선의 기울기는 답과 무관하므로 그림만 바꿔도 됨."
    creative: "(1) 둘레 대신 AF'+BF' 만 주고 AB 를 묻기(2a 관계 두 번 · ★2) (2) 타원 대신 쌍곡선의 한 초점을 지나는 현으로 바꾸면 |PF−PF'|=2a 부호 처리로 I-MI d1 추가 → ★3 (3) 두 삼각형 둘레의 차로 현의 길이를 비교하게 하면 ★3."
```

```yaml
- id: RPM-GEO-0081
  page: 16
  vendor_label: "유형 10 타원의 정의의 활용; 장축의 길이"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    점 (0,1) 을 지나는 직선이 타원 x^2/8 + y^2/9 = 1 과 만나는 두 점 A, B 와 점 C(0,-1) 로 만든 삼각형 ABC 의 둘레.
  category: "c^2=9-8=1 → (0,±1) 이 초점 → 둘레 = 4a = 12"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "(0,1) 과 C(0,-1) 이 c=1 인 두 초점임을 확인하고 둘레를 4a 로 환원"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "숨은 초점 인식 · 초점현 삼각형 둘레 = 4a"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    장축이 세로(9>8)이고 c^2=1 이므로 (0,1), (0,-1) 이 두 초점. 그러면 0080 과 같은 골조로 둘레 = 4a = 12. 문제는 「초점」이라는 말을 숨겼고 이를 알아채는 것이 유일한 관문(EQV d1). 이후 계산 없음. 통찰이 있어 −1 없이 중하 출발점 ★2.
  tier: star_2
  mechanism_primary: "세로 장축 · c^2=9-8=1 → (0,±1) 이 초점 → 둘레 = 4a = 12"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$12$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0081.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "타원 분모(세로 장축, 차가 완전제곱수)와 그에 맞는 초점 (0,±c) 를 바꿀 수 있음. 제약: 지나는 점과 C 가 반드시 두 초점이어야 하며 직선 기울기는 무관. 답 = 4a."
    creative: "(1) 장축을 가로로 두고 초점을 (±c,0) 으로(★2) (2) 둘레를 주고 타원의 분모를 역산(★2, I-BW d1) (3) 지나는 점을 초점이 아닌 점으로 바꾼 보기를 섞어 「정의가 통하는 경우」를 고르게 하면 I-VF d1 → ★3."
```

```yaml
- id: RPM-GEO-0082
  page: 16
  vendor_label: "유형 10 타원의 정의의 활용; 장축의 길이"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    타원 x^2/25 + y^2/9 = 1 의 두 초점 F, F' 과 타원 위의 두 점 P, Q 에 대하여 사각형 PF'QF 가 직사각형일 때 그 넓이. 그림.
  category: "직사각형 → ∠F'PF=90° → PF^2+PF'^2=FF'^2=64 · PF+PF'=10 → PF·PF'=18"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "직사각형 조건을 ∠F'PF=90°·대각선 FF'=2c 로 옮겨 PF^2+PF'^2=4c^2 를 얻고 PF+PF'=2a 와 묶어 곱(= 넓이)을 계산"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "초점 삼각형이 직각 · 정의의 합과 피타고라스 → 넓이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a=5, c=4. 직사각형이므로 ∠F'PF 가 직각이고 대각선 FF'=8 → PF^2+PF'^2=64. 정의로 PF+PF'=10. (합)^2−(제곱합) = 2·곱 → PF·PF'=18 이 곧 직사각형 넓이(= 2b^2). 「직사각형」을 직각 + 대각선 = 초점거리로 읽고 넓이가 PF·PF' 임을 알아채는 것이 한 덩어리 통찰(EQV d2). M_total 5·통찰 1개 → 중 출발점 ★2 유지, insight_type 통찰형.
  tier: star_2
  mechanism_primary: "직사각형 → ∠F'PF=90° · FF'=8 → PF^2+PF'^2=64 · PF+PF'=10 → PF·PF' = (100−64)/2 = 18"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$18$'
  answer_source: "답지"
  figure: "crop:fig-0082.png"
  latex: latex-bank/rpm-geo/items/0082.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "타원 분모 25·9 를 바꿀 수 있음. 제약: 넓이는 항상 (4a^2−4c^2)/2 = 2b^2 이므로 b^2 을 정하면 답이 정해짐. 직각이 되는 P 가 존재하려면 c ≥ b(지름 FF' 인 원이 타원과 만남)."
    creative: "(1) 넓이가 항상 2b^2 임을 이용해 「직사각형 넓이가 18 인 타원의 b^2」 역문제(I-BW d1 · ★2~3) (2) ∠F'PF=90° 인 점 P 가 존재할 조건(c ≥ b)을 묻기(I-EQV d2 + 경계 → ★3~4) (3) 직각 대신 ∠F'PF=60° 로 바꾸면 코사인법칙으로 골조 확장(★3)."
```

```yaml
- id: RPM-GEO-0083
  page: 16
  vendor_label: "유형 10 타원의 정의의 활용; 장축의 길이"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    타원 x^2/36 + y^2/11 = 1 위의 여섯 점 P1~P6 과 두 점 A(-5,0), B(5,0) 에 대하여 AP1+…+AP6 = 32 일 때 BP1+…+BP6 의 값. 그림.
  category: "c^2=36-11=25 → A, B 가 초점 → 각 APi+BPi=12 → 6·12−32"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "c=5 를 계산해 A, B 가 숨은 초점임을 알아채고 여섯 점의 합을 6·(APi+BPi)=6·2a 로 재조립"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "숨은 초점 인식 · 여러 점의 초점거리 합(정의의 합 반복)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    c=5 이므로 A, B 가 초점이라는 것을 문제가 숨겼다. 알아채면 각 점에서 APi+BPi=2a=12, 여섯 점 합 72, 답 72−32=40. 계산은 한 줄이고 M_total 4 로 낮지만, 숨은 초점을 스스로 확인하고 여섯 개 합을 정의의 합으로 재조립하는 통찰(EQV d2)이 진입 장벽 전부. 상중 출발점 ★3 유지.
    [분류 이슈] M_total 4·통찰 1개(d2)라 M·I 만 보면 ★2 후보 — 벤더 상중 따라 ★3 로 두고 기록.
  tier: star_3
  mechanism_primary: "c^2=36−11=25 → A, B 가 초점 → Σ(APi+BPi) = 6·2a = 72 → ΣBPi = 72−32 = 40"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$40$'
  answer_source: "답지"
  figure: "crop:fig-0083.png"
  latex: latex-bank/rpm-geo/items/0083.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모(36·11 → c 정수가 되도록 차가 완전제곱수), 점의 개수 n, 합 값을 바꿀 수 있음. 제약: 답 = n·2a − 주어진 합 > 0 이고 주어진 합은 n·(a−c) 이상 n·(a+c) 이하여야 실현 가능. A, B 는 반드시 초점."
    creative: "(1) A, B 중 하나만 초점이고 다른 하나는 중심으로 두면 정의가 안 통함 → 함정형(★3, I-VF) (2) 「AP_i 의 합이 최대가 되는 배치」로 바꾸면 각 점 a+c 상한 → I-EQV + 경계 ★3 (3) 쌍곡선 위의 점들로 바꾸면 |APi−BPi|=2a 에 부호 분기(I-MI) → ★4 후보."
```

### 유형 11 타원의 정의의 활용; 최대, 최소

```yaml
- id: RPM-GEO-0084
  page: 16
  vendor_label: "유형 11 타원의 정의의 활용; 최대, 최소"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    타원 x^2/16 + y^2/9 = 1 의 두 초점 F, F' 과 타원 위의 점 P 에 대하여 PF×PF' 의 최댓값. 5지선다.
  category: "PF+PF'=2a=8 고정 → 산술·기하평균 → 곱 ≤ 16 (PF=PF'=4)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "PF+PF'=2a 고정을 읽고 곱의 최대를 산술·기하평균 등호 조건(PF=PF')으로 환원"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "초점거리 합 고정 → 곱의 최대(산술·기하평균)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    정의로 PF+PF'=8 이 상수이므로 PF·PF' ≤ (8/2)^2=16, 등호는 PF=PF'=4 인 단축 끝점에서 성립(존재 확인). 「합이 고정된 두 양의 곱」으로 읽어 부등식으로 넘기는 것이 유형의 핵심(EQV d1). M_total 4 이나 통찰 있어 유형 대표 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "PF+PF' = 2a = 8 → PF·PF' ≤ (8/2)^2 = 16 → 등호 PF=PF'(단축 끝) → 16"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0084.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모 16·9(a)를 바꿀 수 있음. 제약: 답은 항상 a^2 이므로 a^2 이 보기와 겹치지 않게; 등호점(단축 끝)이 타원 위에 항상 존재하므로 달성됨. b 값은 답에 무관(함정 보기로 b^2, c^2 사용)."
    creative: "(1) 최솟값을 묻기(장축 끝에서 (a−c)(a+c) = b^2 → 범위 분석 · I-EQV d2 → ★3) (2) PF^2+PF'^2 의 최솟값(0087 골조 · ★2) (3) 1/PF + 1/PF' 의 최솟값으로 바꾸면 조화·산술평균 → ★3."
```

```yaml
- id: RPM-GEO-0085
  page: 16
  vendor_label: "유형 11 타원의 정의의 활용; 최대, 최소"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    타원 2x^2+y^2=10 위의 제1사분면 점 P(a,b) 에 대하여 ab 의 최댓값.
  category: "2a^2+b^2=10 → 산술·기하평균 2a^2+b^2 ≥ 2√2·ab → ab ≤ 5√2/2"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "타원 위의 점 조건 2a^2+b^2=10 을 두 양수 항의 합으로 보고 산술·기하평균으로 ab 를 묶음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "타원 위의 점의 좌표 곱 최대(산술·기하평균)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    타원 식을 양수 두 항의 합 2a^2+b^2=10 으로 보고 산술·기하평균을 쓰면 10 ≥ 2√(2a^2b^2) = 2√2·ab → ab ≤ 5/√2 = 5√2/2, 등호 2a^2=b^2=5. 타원 위의 점이라는 기하 조건을 부등식으로 옮기는 표현 전환(RT d1)이 골조. M_total 4 이나 통찰 있어 중하 출발점 ★2.
  tier: star_2
  mechanism_primary: "P(a,b) 가 타원 위 → 2a^2+b^2=10 → 산술·기하평균 10 ≥ 2√2·ab → ab ≤ 5√2/2"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{5\sqrt{2}}{2}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0085.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 2·1 과 우변 10 을 바꿀 수 있음. 제약: 답 = 우변/(2√(계수곱)) 이므로 계수곱이 완전제곱수면 답이 유리수(예 4x^2+y^2=8 → ab ≤ 2). 제1사분면 조건(a,b>0) 유지."
    creative: "(1) a+b 의 최댓값으로 바꾸면 코시·슈바르츠 또는 매개변수(cosθ, sinθ) → ★3 (2) 최댓값을 주고 우변을 역산(★2) (3) 등호가 성립하는 점 P 의 좌표를 묻기(★2)."
```

```yaml
- id: RPM-GEO-0086
  page: 16
  vendor_label: "유형 11 타원의 정의의 활용; 최대, 최소"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    타원 x^2/25 + y^2/16 = 1 에 내접하고 각 변이 축에 평행한 직사각형 ABCD 의 넓이의 최댓값. 그림.
  category: "꼭짓점 (x,y) 대칭 → 넓이 4xy → x^2/25+y^2/16=1 ≥ 2·(x/5)(y/4) → xy ≤ 10 → 40"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "직사각형 넓이를 제1사분면 꼭짓점의 4xy 로 옮기고 타원 식 두 항의 산술·기하평균으로 최대를 얻음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "타원에 내접하는 직사각형 넓이의 최대(산술·기하평균)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    축 대칭이므로 제1사분면 꼭짓점 (x,y) 로 넓이 4xy. 타원 식을 (x/5)^2+(y/4)^2=1 로 보고 산술·기하평균 → xy/10 ≤ 1/2 → xy ≤ 10, 넓이 최대 40. 도형의 넓이를 한 꼭짓점 좌표의 곱으로 옮기고 부등식으로 처리(RT d1). 함정은 4xy(배수). 중 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "넓이 = 4xy · (x/5)^2+(y/4)^2=1 → 산술·기하평균 xy ≤ 10 → 최대 40 (= 2ab)"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$40$'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0086.png"
  latex: latex-bank/rpm-geo/items/0086.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모 25·16(a, b)을 바꿀 수 있음. 제약: 답은 항상 2ab 이므로 a, b 를 정수로 두면 정수 답. 변이 축에 평행 조건 유지."
    creative: "(1) 직사각형 둘레의 최댓값으로 바꾸면 x/5 + y/4 형 → 코시·슈바르츠 또는 매개변수 → ★3 (2) 내접 직사각형이 정사각형일 때의 넓이(★2) (3) 최대 넓이의 직사각형 대각선 길이를 묻기(★2)."
```

```yaml
- id: RPM-GEO-0087
  page: 16
  vendor_label: "유형 11 타원의 정의의 활용; 최대, 최소"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    타원 3x^2+2y^2=6 의 두 초점 F, F' 과 타원 위의 점 P 에 대하여 FP^2+F'P^2 의 최솟값.
  category: "표준형 x^2/2 + y^2/3 = 1 · 2a=2√3 → 제곱합 = (합)^2 − 2·곱 = 12 − 2FP·F'P → 곱 최대 3 → 6"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "FP^2+F'P^2 = (FP+F'P)^2 − 2FP·F'P 로 바꿔 「제곱합의 최소」를 「곱의 최대(산술·기하평균)」로 뒤집어 정의와 연결"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "초점거리 제곱합의 최소(정의의 합 + 곱의 최대)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x^2/2+y^2/3=1, 세로 장축 a=√3, c=1. FP+F'P=2√3. FP^2+F'P^2 = (2√3)^2 − 2FP·F'P = 12 − 2FP·F'P 이므로 최소는 곱이 최대(산술·기하평균 ≤ 3)일 때 12−6=6. 「제곱합의 최소」를 「곱의 최대」로 뒤집어 정의로 연결하는 것이 한 덩어리 통찰(EQV d2). 좌표로 2(x^2+y^2)+2 ≥ 2b^2+2 로 풀어도 6. M_total 5 → 중 출발점 ★2 유지, 통찰형.
  tier: star_2
  mechanism_primary: "세로 장축 a=√3 · c=1 → FP+F'P=2√3 → 제곱합 = 12 − 2FP·F'P → 곱 ≤ 3 → 최소 6 (= 2a^2)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$6$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0087.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 3·2 와 우변 6 을 바꿀 수 있음. 제약: 답 = 4a^2 − 2a^2 = 2a^2(등호 PF=PF')이므로 a^2 이 정수면 답 정수; 좌표 풀이 2b^2+2c^2 = 2a^2 으로 동일. 장축 방향(어느 계수가 작은지) 표기 함정 유지."
    creative: "(1) 최댓값으로 바꾸면 장축 끝에서 (a−c)^2+(a+c)^2 = 2a^2+2c^2 → 범위 분석 ★3 (2) FP·F'P 의 최솟값(b^2 · 0084 변형) ★2~3 (3) 좌표 풀이의 x^2+y^2 최소가 b^2 임을 이용하는 「원점에서 타원 위의 점까지 거리」로 재구성 → 다른 유형."
```

### 유형 12 쌍곡선의 방정식

```yaml
- id: RPM-GEO-0088
  page: 17
  vendor_label: "유형 12 쌍곡선의 방정식"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    두 점 A(5,0), B(-5,0) 에 대하여 |PA−PB|=8 을 만족시키는 점 P 의 자취가 x^2/a^2 − y^2/b^2 = 1 일 때 a^2−b^2 의 값.
  category: "정의 → 초점 A, B · c=5 · 2a=8 → b^2=c^2−a^2=9 → 16−9"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "|PA−PB|=k 자취 → 쌍곡선(정의)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    거리 차가 일정하므로 A, B 를 초점으로 하는 쌍곡선. c=5, a=4, b^2=25−16=9, a^2−b^2=7. 공식 사슬 두 단계·통찰 없음·M_total 4 → 유형 대표 출발점 ★2 에서 −1, ★1. 함정은 쌍곡선 c^2=a^2+b^2(타원과 반대).
  tier: star_1
  mechanism_primary: "|PA−PB|=8 → 초점 (±5,0) 쌍곡선 · a=4 → b^2 = 25−16 = 9 → a^2−b^2 = 7"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$7$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0088.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초점 좌표 c 와 거리 차 2a 를 바꿀 수 있음. 제약: 0 < 2a < 2c(=AB), c^2−a^2 이 완전제곱수면 b 정수. 묻는 식(a^2−b^2, ab, a+b)은 자유."
    creative: "(1) 초점을 y축 위로 두면 −1 형 방정식 판독 추가(★1~2) (2) 절댓값을 빼고 PA−PB=8 로 두면 한쪽 가지만 → 자취를 정확히 말하게(★2, I-EQV d1) (3) 합 조건(타원 0078)과 짝지어 두 자취의 교점을 묻기(★3)."
```

```yaml
- id: RPM-GEO-0089
  page: 17
  vendor_label: "유형 12 쌍곡선의 방정식"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    두 초점이 F, F' 인 쌍곡선 x^2/24 − y^2/k^2 = −1 위의 점 A 에 대하여 AF−AF'=10 일 때 선분 FF' 의 길이.
  category: "−1 형 → 주축 세로 · 2a=10 → k^2=25 → c^2=25+24 → 2c=14"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "쌍곡선의 정의(거리 차 = 주축 길이) → 초점 사이 거리"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    우변이 −1 이므로 y^2/k^2 − x^2/24 = 1, 주축 세로, 주축 길이 2|k|. AF−AF'=10 은 정의로 2a=10 → k^2=25. c^2=k^2+24=49 → FF'=2c=14. 절차 세 단계·통찰 없음, k 매개변수와 −1 형 표기 함정으로 M_total 5 → 중하 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "−1 형 → 주축 세로 · 거리 차 10 = 2a → k^2=25 → c^2 = 25+24 = 49 → FF' = 14"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$14$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0089.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모 24 와 거리 차 10 을 바꿀 수 있음. 제약: k^2 = (차/2)^2, c^2 = k^2 + 분모가 완전제곱수면 답 정수. −1 형을 유지할지(+1 형이면 a^2=24 쪽이 주축) 결정."
    creative: "(1) AF−AF' 대신 AF+AF' 를 주면 정의가 아니라 좌표 계산이 필요해 유형 이탈(★3) (2) FF' 를 주고 k 를 묻기(0098 골조 · ★2) (3) 초점 좌표를 직접 쓰게 하기(★2)."
```

```yaml
- id: RPM-GEO-0090
  page: 17
  vendor_label: "유형 12 쌍곡선의 방정식"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    포물선 y^2=8x 의 초점과 쌍곡선 x^2/a^2 − y^2/b^2 = 1 의 한 초점이 일치할 때 a^2+b^2 의 값.
  category: "포물선 초점 (2,0) → 쌍곡선 c=2 → a^2+b^2 = c^2 = 4"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차곡선 초점 공유 → c^2 = a^2 + b^2"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    y^2=4·2x 이므로 초점 (2,0). 쌍곡선의 초점 (±c,0) 이 이것과 일치하면 c=2, a^2+b^2=c^2=4. 두 단계·통찰 없음·M_total 4 → 중하 출발점 −1, ★1. 같은 단원 안의 두 곡선이라 XU 아님.
  tier: star_1
  mechanism_primary: "y^2=8x 초점 (2,0) → 쌍곡선 c=2 → a^2+b^2 = 4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0090.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "포물선 계수 8(=4p)을 바꾸면 답 = p^2. 제약: 포물선 초점이 x축 위(y^2=4px 형)여야 가로 쌍곡선과 맞음; x^2=4py 로 바꾸면 −1 형 쌍곡선."
    creative: "(1) 타원과 쌍곡선이 초점을 공유하고 점근선 조건까지 주면 0092 골조(★2) (2) 포물선의 준선이 쌍곡선의 꼭짓점을 지난다는 조건으로 a 결정(★2) (3) a, b 가 자연수인 경우의 수를 묻기(★2, I-VF d1)."
```

```yaml
- id: RPM-GEO-0091
  page: 17
  vendor_label: "유형 12 쌍곡선의 방정식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    두 초점 (4,0), (−4,0) 이고 점 (6,−2√2) 를 지나는 쌍곡선의 방정식.
  category: "c=4 → 지나는 점의 두 초점거리 2√3, 6√3 → 차 4√3 = 2a → a^2=12 · b^2=4"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 초점·지나는 점 → 쌍곡선의 방정식(정의 이용)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    c=4. 점 (6,−2√2) 에서 두 초점까지 거리 √(4+8)=2√3, √(100+8)=6√3, 차 4√3=2a → a^2=12, b^2=16−12=4 → x^2/12 − y^2/4 = 1. 대입 풀이(36/a^2 − 8/(16−a^2)=1 → a^4−60a^2+576=0 → a^2=12 또는 48, a^2<16 으로 12)도 가능하나 사차식과 범위 기각이 붙는다. 정의 풀이는 표준 절차로 보아 통찰 없음, 무리수 계산으로 M_k 2 → 중 출발점 ★2 유지.
    [분류 이슈] 정의 풀이 vs 대입 풀이의 갈래를 I-SC d1 로 볼지 애매 — 두 풀이 모두 답지 표준 범위라 절차형으로 기록.
  tier: star_2
  mechanism_primary: "c=4 → 점에서 두 초점까지 거리 2√3, 6√3 → 차 = 2a = 4√3 → a^2=12, b^2=4 → x^2/12 − y^2/4 = 1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{x^2}{12}-\dfrac{y^2}{4}=1$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0091.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초점 c 와 지나는 점을 바꿀 수 있음. 제약: 두 초점거리가 √(정수) 로 깔끔히 떨어지고 차의 절반의 제곱 a^2 < c^2 이어야 함. 점을 꼭짓점이나 점근선 근처에 두지 않기."
    creative: "(1) 초점 대신 점근선 기울기를 주면 대입 풀이만 가능 → 0093 골조(★2) (2) 지나는 점을 매개변수 (t, 2) 로 두고 a 가 정수가 되는 t 를 묻기(I-VF d1 → ★3) (3) 사차식 풀이에서 a^2=48 을 기각하는 이유를 묻는 서술형(★3, I-VF)."
```

### 유형 13 쌍곡선의 점근선

```yaml
- id: RPM-GEO-0092
  page: 17
  vendor_label: "유형 13 쌍곡선의 점근선"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    타원 x^2/36 + y^2/16 = 1 과 두 초점 F, F' 을 공유하고 점근선이 y=±2x 인 쌍곡선 위의 점 P 에 대하여 |PF−PF'| 의 값.
  category: "타원 c^2=20 → 쌍곡선 b/a=2 → a^2+4a^2=20 → a=2 → 2a=4"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "타원과 초점 공유 + 점근선 → 쌍곡선의 주축 길이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    타원 c^2=36−16=20. 쌍곡선도 c^2=20, 점근선 기울기 b/a=2 → b^2=4a^2 → 5a^2=20 → a=2. 정의로 |PF−PF'|=2a=4. 타원 c^2=a^2−b^2 과 쌍곡선 c^2=a^2+b^2 이 함께 나와 표기 함정 하나. 네 단계 절차·통찰 없음·M_total 5 → 유형 대표 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "타원 c^2=20 → 쌍곡선 c 공유 · b=2a → 5a^2=20 → a=2 → |PF−PF'| = 4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0092.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "타원 분모(차 = c^2)와 점근선 기울기 m 을 바꿀 수 있음. 제약: a^2 = c^2/(1+m^2) 이 완전제곱수여야 a 정수(예 c^2=20, m=2 → 4). 답 = 2a."
    creative: "(1) 쌍곡선의 방정식을 쓰게 하기(★2) (2) 타원과 쌍곡선의 교점 좌표를 묻기(연립 · ★3) (3) 점근선 대신 「타원의 단축 끝을 지난다」로 바꾸면 대입 연립 → ★2~3."
```

```yaml
- id: RPM-GEO-0093
  page: 17
  vendor_label: "유형 13 쌍곡선의 점근선"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    점 (6,4) 를 지나는 쌍곡선 x^2/a^2 − y^2/b^2 = 1 의 두 점근선이 서로 수직일 때 a^2+b^2 의 값. 5지선다.
  category: "점근선 수직 → b=a(직각쌍곡선) → 36/a^2 − 16/a^2 = 1 → a^2=20 → 40"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "점근선이 수직인 쌍곡선(직각쌍곡선) → 미정계수"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    점근선 y=±(b/a)x 가 수직이면 기울기 곱 −1 → b^2=a^2. 점 대입 20/a^2=1 → a^2=20, a^2+b^2=40. 조건 번역 한 줄 + 대입 한 줄, 통찰 없음, M_total 4 → 중 출발점 ★2 에서 −1, ★1. 함정은 답이 a^2(20) 이 아니라 2a^2 인 것.
  tier: star_1
  mechanism_primary: "점근선 수직 → b^2=a^2 → (6,4) 대입 20/a^2=1 → a^2=20 → a^2+b^2=40"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "⑤"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0093.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지나는 점 (p,q) 를 바꾸면 a^2 = p^2−q^2 (p^2>q^2 필요). 제약: 답 2(p^2−q^2) 가 보기 간격과 맞게; 점근선 수직 조건 유지."
    creative: "(1) 점근선이 이루는 각을 60° 로 바꾸면 b/a=√3 또는 1/√3 두 경우 → I-MI d1 ★2~3 (2) 직각쌍곡선의 초점 사이 거리를 묻기(c^2=2a^2 · ★2) (3) 「점근선이 수직이고 초점이 (±2√10, 0)」으로 바꾸면 c 에서 a 결정 ★1."
```

```yaml
- id: RPM-GEO-0094
  page: 17
  vendor_label: "유형 13 쌍곡선의 점근선"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    쌍곡선 x^2/6 − y^2/2 = −1 의 두 점근선이 이루는 예각의 크기.
  category: "−1 형 → 점근선 y=±(√2/√6)x = ±x/√3 → 각 ±30° → 예각 60°"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "쌍곡선의 점근선이 이루는 각"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    우변 −1 이어도 점근선은 y=±(b/a)x 로 같다(b^2=2, a^2=6) → 기울기 ±1/√3 = ±tan30°. 두 직선이 x축과 ±30° 이므로 예각 60°. 기울기 → 각 번역 한 줄, 통찰 없음, M_total 4 → 중 출발점 −1, ★1. 함정은 −1 형에서 a, b 를 뒤바꾸는 것이지만 뒤바꿔도 기울기가 역수(√3)가 되어 예각은 60° 로 같아 오답이 걸러지지 않는 설계.
  tier: star_1
  mechanism_primary: "점근선 기울기 ±√(2/6) = ±1/√3 → tan30° → 두 직선 사이 예각 60°"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$60^\circ$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0094.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모 6·2 의 비를 바꿀 수 있음. 제약: b/a = tanθ 가 특수각(1/√3, 1, √3)이어야 각이 깔끔; 비 3:1 → 60°, 1:1 → 90°, 1:3 → 60°(대칭이라 같은 답)."
    creative: "(1) 예각을 주고 분모 비를 역산하면 b/a = tanθ 또는 tan(90°−θ) 두 경우 → I-MI d1 ★2 (2) 점근선과 x축이 이루는 각으로 바꾸면 30° 와 150° 두 값 처리(★2) (3) 두 점근선과 직선 x=√6 이 만드는 삼각형 넓이(★2)."
```

```yaml
- id: RPM-GEO-0095
  page: 17
  vendor_label: "유형 13 쌍곡선의 점근선"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    쌍곡선 x^2/9 − y^2/16 = 1 의 한 초점을 중심으로 하고 점근선에 접하는 원의 둘레의 길이. 서술형.
  category: "c=5 · 점근선 4x−3y=0 → 초점 (5,0) 과 점근선 거리 20/5=4=b → 반지름 4 → 2π·4"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "쌍곡선의 초점과 점근선 사이 거리(= b) → 접하는 원"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a=3, b=4, c=5, 초점 (5,0). 점근선 y=±(4/3)x 즉 4x−3y=0 과의 거리 |20|/5=4 → 반지름 4, 둘레 8π. 「접한다 → 반지름 = 점·직선 거리」 번역과 점·직선 거리 공식이 골조. 초점–점근선 거리가 항상 b 라는 사실을 알면 즉답. 네 단계 절차·통찰 없음·M_total 5 → 중·서술형 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "초점 (5,0) · 점근선 4x−3y=0 → 거리 4 (= b) → 반지름 4 → 둘레 8π"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$8\pi$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0095.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모 9·16 을 바꿀 수 있음. 제약: 답 = 2πb 이므로 b 만 정하면 됨; c 가 정수(피타고라스 수)면 계산이 깔끔. 원의 넓이(πb^2)로 바꿔도 동일 골조."
    creative: "(1) 「초점–점근선 거리가 b 임」을 일반 a, b 로 증명하는 서술형(Mₐ 3 · ★3) (2) 원이 다른 쪽 점근선과 만나서 생기는 현의 길이를 묻기(★3) (3) 평행이동한 쌍곡선으로 바꾸면 0101 골조(★2)."
```

### 유형 14 쌍곡선의 평행이동

```yaml
- id: RPM-GEO-0096
  page: 18
  vendor_label: "유형 14 쌍곡선의 평행이동"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    쌍곡선 (x−2)^2/4 − (y−1)^2/9 = −1 에 대하여 초점의 위치·중심·주축 길이·점근선 방정식 보기 ㄱ~ㄹ 의 참거짓. 5지선다.
  category: "−1 형 → 주축 세로 · 중심 (2,1) · 주축 2·3=6 · c^2=13 초점 x=2 위 · 점근선 y−1=±(3/2)(x−2)"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행이동한 쌍곡선(−1 형)의 요소 판독(중심·주축·초점·점근선)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    우변 −1 이므로 주축이 y축 방향, 중심 (2,1). 주축 길이는 y 쪽 분모 9 의 2·3=6(ㄷ 거짓), 초점은 (2, 1±√13) 으로 직선 x=2 위이지 y축 위가 아님(ㄱ 거짓), 점근선 y−1=±(3/2)(x−2) 를 정리하면 y=(3/2)x−2, y=−(3/2)x+4(ㄹ 참). ㄴ 참. 네 요소를 각각 판독하는 절차, 통찰 없음, −1 형·평행이동 부호 함정 둘 → M_total 6, 유형 대표 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "−1 형 판독 → 중심 (2,1) · 주축 세로 길이 6 · 초점 (2, 1±√13) · 점근선 y−1=±(3/2)(x−2) → ㄴ, ㄹ"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0096.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "중심 (2,1) 과 분모 4·9 를 바꿀 수 있음. 제약: 보기 ㄱ 이 「초점이 y축 위」로 거짓이 되려면 중심 x좌표 ≠ 0; 점근선 절편이 정수가 되게 분모 비를 정수/반정수로."
    creative: "(1) +1 형으로 바꿔 주축 방향 판단을 뒤집기(★2) (2) 보기 하나를 「초점 사이 거리」나 「꼭짓점 좌표」로 교체(★2) (3) 일반형(전개식)으로 주고 같은 보기를 묻기 → 완전제곱 추가 ★2~3."
```

```yaml
- id: RPM-GEO-0097
  page: 18
  vendor_label: "유형 14 쌍곡선의 평행이동"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    쌍곡선 2x^2−5y^2+12x+10y+3=0 이 x^2/a^2 − y^2/b^2 = 1 을 x축 방향으로 m, y축 방향으로 n 만큼 평행이동한 것일 때 a^2+b^2+m+n 의 값.
  category: "완전제곱 → 2(x+3)^2 − 5(y−1)^2 = 10 → (x+3)^2/5 − (y−1)^2/2 = 1 → 5+2−3+1"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "쌍곡선의 일반형 → 표준형 · 평행이동량 읽기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x, y 각각 완전제곱해 2(x+3)^2−5(y−1)^2=10, 양변 10 으로 나눠 분모 5, 2. 중심 (−3,1) 이 (m,n). 합 5+2−3+1=5. 완전제곱과 이동 부호가 전부, 통찰 없음, M_total 4 → 중하 출발점 −1, ★1.
  tier: star_1
  mechanism_primary: "완전제곱 → 2(x+3)^2 − 5(y−1)^2 = 10 → a^2=5, b^2=2, (m,n)=(−3,1) → 5"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$5$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0097.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 2·5, 일차항 계수(중심), 상수항을 바꿀 수 있음. 제약: 완전제곱 뒤 우변 부호가 양수면 +1 형(가로), 음수면 −1 형으로 a^2, b^2 배치가 바뀜; 일차항 계수 = 2·계수·중심 으로 중심을 정수로."
    creative: "(1) 우변이 음수가 되게 상수항을 바꿔 −1 형 판독을 추가(★2) (2) 이동 후 쌍곡선의 초점 좌표를 묻기(c^2 계산 추가 · ★2) (3) 상수항을 k 로 두고 「쌍곡선이 되기 위한 k 의 조건」(퇴화값 제외) → I-EQV d1 ★2."
```

```yaml
- id: RPM-GEO-0098
  page: 18
  vendor_label: "유형 14 쌍곡선의 평행이동"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    쌍곡선 (x+2)^2/5 − (y+1)^2/k^2 = −1 의 두 초점 사이의 거리가 2√14 일 때 모든 실수 k 의 값의 곱.
  category: "−1 형 → c^2 = 5 + k^2 = 14 → k^2 = 9 → k = ±3 → 곱 −9"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행이동한 쌍곡선의 초점 사이 거리 → 미정계수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    우변 −1 이라도 c^2 = 5 + k^2. 2c = 2√14 → c^2=14 → k^2=9 → k=±3, 곱 −9. 평행이동은 초점 거리에 영향 없음. 절차 세 단계·통찰 없음, k 매개변수·「모든 실수 k 의 곱」(±3 둘 다) 부호 함정 → M_total 5, 중하 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "−1 형 · c^2 = 5 + k^2 = 14 → k^2 = 9 → k = ±3 → 곱 −9"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-9$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0098.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "고정 분모 5 와 초점 거리 2√14 를 바꿀 수 있음. 제약: c^2 − 고정 분모 = k^2 이 완전제곱수여야 k 정수; 「곱」을 물으면 답은 항상 −k^2, 「합」은 0 이라 무의미하므로 곱·제곱합으로."
    creative: "(1) 주축 길이를 주고 k 를 묻기(k^2 직접 · ★1) (2) 초점 좌표 하나 (−2, −1+√14) 를 주고 k 역산(★2) (3) 「두 초점 사이 거리가 8 이하가 되는 정수 k 의 개수」로 바꾸면 범위 + 정수 세기 → I-VF d1 ★2~3."
```

```yaml
- id: RPM-GEO-0099
  page: 18
  vendor_label: "유형 14 쌍곡선의 평행이동"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    쌍곡선 x^2 − y^2 + 2y + a = 0 의 주축이 x축에 평행하도록 하는 실수 a 의 값의 범위. 5지선다.
  category: "완전제곱 → x^2 − (y−1)^2 = −(a+1) → 우변 > 0 ⇔ x 항이 양 → a < −1"
  M: {s: 1, k: 1, a: 2, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「주축이 x축에 평행」을 표준형 우변 −(a+1) 의 부호 조건으로 번역"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "쌍곡선의 주축 방향 결정 조건(우변 부호) → 매개변수 범위"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y 완전제곱 후 x^2 − (y−1)^2 = −(a+1). 주축이 x축 평행이려면 표준형 x^2/p − (y−1)^2/p = 1 에서 p = −(a+1) > 0 → a < −1. 「주축이 x축에 평행」을 우변 부호 조건으로 번역하는 것이 관문(EQV d1), 경계 a=−1 은 두 직선으로 퇴화(제외). 부호·경계 함정 둘, a 매개변수 → M_total 6, 중 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "완전제곱 → x^2 − (y−1)^2 = −(a+1) → 주축 x축 평행 ⇔ −(a+1) > 0 → a < −1"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0099.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "y 일차항 계수(중심)와 x^2, y^2 계수 비를 바꿀 수 있음. 제약: 경계값에서 퇴화(두 직선)하므로 부등호는 항상 엄격; 계수 비를 1:1 이 아니게 하면 답 형태는 같고 계산만 늘어남."
    creative: "(1) 「주축이 y축에 평행」으로 뒤집기(★2) (2) 「쌍곡선이 되지 않는 a」(퇴화 a=−1) 를 묻기 → 경계 통찰 ★2 (3) 주축 길이가 4 가 되도록 하는 a 두 값(가로·세로 두 경우)을 묻기 → I-MI d1 ★3."
```

```yaml
- id: RPM-GEO-0100
  page: 18
  vendor_label: "유형 14 쌍곡선의 평행이동"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    쌍곡선 x^2/4 − y^2/16 = 1 을 x축 방향으로 −1, y축 방향으로 2 만큼 평행이동한 쌍곡선의 두 점근선과 y축으로 둘러싸인 도형의 넓이. 서술형.
  category: "이동 후 점근선 y−2=±2(x+1) → y=2x+4, y=−2x → y절편 4, 0 · 교점(중심) (−1,2) → 넓이 ½·4·1"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행이동한 쌍곡선의 점근선이 만드는 삼각형 넓이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    점근선은 중심 (−1,2) 를 지나고 기울기 ±2 → y=2x+4, y=−2x. y축과의 교점 (0,4), (0,0) 이 밑변 4, 중심까지 높이 1 → 넓이 2. 이동·점근선·절편·넓이 네 단계, 통찰 없음, M_total 5 → 중·서술형 출발점 ★2 유지. 함정은 이동 방향 부호(x 쪽 −1).
  tier: star_2
  mechanism_primary: "중심 (−1,2) · 기울기 ±2 → 점근선 y=2x+4, y=−2x → y절편 4, 0 → 넓이 ½·4·1 = 2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0100.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이동량 (−1,2) 와 분모 비(기울기 b/a)를 바꿀 수 있음. 제약: 넓이 = (b/a)·(중심 x좌표)^2 이므로 중심 x ≠ 0; x축으로 둘러싸인 넓이는 (a/b)·(중심 y좌표)^2."
    creative: "(1) x축과 둘러싸인 넓이로 바꾸기(★2) (2) 넓이를 주고 이동량을 역산(★2, I-BW d1) (3) 두 점근선과 직선 x=k 가 만드는 삼각형 넓이가 8 이 되는 k 를 묻기(★2~3)."
```

```yaml
- id: RPM-GEO-0101
  page: 18
  vendor_label: "유형 14 쌍곡선의 평행이동"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    쌍곡선 x^2 − 9y^2 + 2x − 8 = 0 의 한 초점과 점근선 사이의 거리.
  category: "완전제곱 → (x+1)^2/9 − y^2 = 1 · c=√10 → 초점 (−1+√10, 0) · 점근선 x−3y+1=0 → 거리 √10/√10 = 1 (= b)"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행이동한 쌍곡선의 초점과 점근선 사이 거리(= b)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (x+1)^2 − 9y^2 = 9 → 분모 9, 1, 중심 (−1,0), c=√10. 초점 (−1+√10, 0), 점근선 y=±(1/3)(x+1) 즉 x−3y+1=0. 거리 |−1+√10+1|/√10 = 1 = b. 「초점–점근선 거리 = b」 를 알면 완전제곱 뒤 즉답이고, 모르면 점·직선 거리 공식으로 네 단계. 통찰 없음·M_total 5 → 중 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "완전제곱 → (x+1)^2/9 − y^2 = 1 → c=√10 → 초점·점근선 거리 = b = 1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0101.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 9(b^2 비), 일차항(중심), 상수항을 바꿀 수 있음. 제약: 답은 항상 b 이므로 완전제곱 뒤 y^2 쪽 분모가 완전제곱수면 정수; c 가 무리수여도 거리 계산에서 상쇄됨."
    creative: "(1) 「거리 = b 임을 이용하지 않고」 좌표 계산을 요구하는 서술형(★2) (2) 초점을 중심으로 점근선에 접하는 원의 방정식(0095 + 이동 · ★2) (3) 거리를 주고 상수항 역산(★2, I-BW d1)."
```

```yaml
- id: RPM-GEO-0102
  page: 18
  vendor_label: "유형 14 쌍곡선의 평행이동"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    쌍곡선 2x^2 − y^2 + 4x + 8y − 8 = 0 의 두 초점 F, F' 과 원점 O 로 만든 삼각형 OFF' 의 넓이. 5지선다.
  category: "완전제곱 → (x+1)^2/3 − (y−4)^2/6 = −1 · 주축 세로 · c=3 → 초점 (−1, 4±3) → 밑변 6 · 높이 1"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "일반형 쌍곡선의 초점 · 원점과 이루는 삼각형 넓이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    2(x+1)^2 − (y−4)^2 = −6 → (x+1)^2/3 − (y−4)^2/6 = −1, 주축 세로, 중심 (−1,4), c^2=3+6=9. 초점 (−1,7), (−1,1) 이 직선 x=−1 위 → 밑변 6, 원점까지 높이 1 → 넓이 3. 완전제곱·−1 형 판독·초점·넓이 네 단계, 통찰 없음, 우변 부호·이동 부호 함정 둘 → M_total 6, 중 출발점 ★2 유지. 0074(타원) 와 같은 골조.
  tier: star_2
  mechanism_primary: "완전제곱 → −1 형 · 중심 (−1,4) · c=3 → 초점 (−1,7), (−1,1) → 밑변 6 · 높이 1 → 3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0102.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 2·1, 일차항(중심), 상수항을 바꿀 수 있음. 제약: 완전제곱 뒤 우변 부호로 주축 방향이 정해지고 c^2 = 두 분모 합이 완전제곱수여야 정수; 넓이 = c·|중심의 (주축과 수직인) 좌표|, 그 좌표가 0 이면 퇴화."
    creative: "(1) 원점 대신 한 꼭짓점을 세 번째 점으로(★2) (2) 넓이를 주고 상수항 역산(★2, I-BW d1) (3) 타원 0074 와 짝지어 「같은 초점을 갖는 타원」의 방정식까지 묻기(★3)."
```

### 유형 15 쌍곡선의 정의를 이용한 쌍곡선의 방정식

```yaml
- id: RPM-GEO-0103
  page: 19
  vendor_label: "유형 15 쌍곡선의 정의를 이용한 쌍곡선의 방정식"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    두 초점 F(4,2), F'(−6,2) 에서의 거리의 차가 8 인 쌍곡선의 방정식.
  category: "중심 (−1,2) · c=5 · 2a=8 → b^2=25−16=9 → (x+1)^2/16 − (y−2)^2/9 = 1"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 초점·거리 차 → 평행이동한 쌍곡선의 방정식"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    초점 중점 (−1,2) 가 중심, c=5, 초점이 가로 배치이므로 x 쪽이 주축. 2a=8 → a^2=16, b^2=9. 방정식 (x+1)^2/16 − (y−2)^2/9 = 1. 공식 사슬 세 단계·통찰 없음·M_total 4 → 유형 대표 출발점 ★2 에서 −1, ★1. 함정은 (x+1) 부호.
  tier: star_1
  mechanism_primary: "초점 중점 (−1,2) · c=5 · a=4 → b^2 = 9 → (x+1)^2/16 − (y−2)^2/9 = 1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{(x+1)^2}{16}-\dfrac{(y-2)^2}{9}=1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0103.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초점 좌표(같은 y, 중점 정수)와 거리 차 2a 를 바꿀 수 있음. 제약: 2a < 2c, c^2−a^2 완전제곱수면 b 정수. 세로 배치로 바꾸면 −1 형 답."
    creative: "(1) 초점을 세로로 두고 5지선다 보기에 ±1 형·부호 함정을 넣기(0104 골조 · ★2) (2) 초점 하나와 중심, 거리 차를 주기(★1~2) (3) 쌍곡선이 지나는 점을 추가로 주고 거리 차를 묻기(정의 역이용 · ★2)."
```

```yaml
- id: RPM-GEO-0104
  page: 19
  vendor_label: "유형 15 쌍곡선의 정의를 이용한 쌍곡선의 방정식"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    두 점 F(−1,7), F'(−1,−5) 에 대하여 |PF−PF'|=10 을 만족시키는 점 P 의 자취의 방정식. 5지선다.
  category: "중심 (−1,1) · c=6 · 세로 주축 2a=10 → b^2=36−25=11 → (x+1)^2/11 − (y−1)^2/25 = −1"
  M: {s: 1, k: 1, a: 1, t: 2}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "|PF−PF'|=k 자취 → 평행이동한 쌍곡선(−1 형)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    초점이 세로 배치이므로 주축 세로, 중심 (−1,1), c=6, a=5, b^2=11. (y−1)^2/25 − (x+1)^2/11 = 1 을 보기 형태 (x+1)^2/11 − (y−1)^2/25 = −1 로 맞춘다. 보기가 ±1 형·(x±1)·분모 배치로 갈라져 있어 표기·부호 함정 둘 → M_total 5, 중하 출발점 ★2 유지. 통찰 없음.
  tier: star_2
  mechanism_primary: "초점 세로 배치 · 중심 (−1,1) · c=6 · a=5 → b^2=11 → (x+1)^2/11 − (y−1)^2/25 = −1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0104.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초점 좌표(같은 x, 중점 정수)와 거리 차를 바꿀 수 있음. 제약: 2a < 2c, b^2 = c^2−a^2 > 0(정수가 아니어도 됨); 보기의 오답은 부호 반전·±1 형·분모 교환으로 구성."
    creative: "(1) 합 조건 PF+PF'=k 로 바꾸면 타원(0078 골조 · ★1~2) (2) 절댓값 없이 PF−PF'=10 으로 두고 「위쪽 가지」임을 답하게(I-EQV d1 · ★2) (3) 자취가 x축과 만나는 두 점 사이의 거리를 묻기(0105 골조 · ★2)."
```

```yaml
- id: RPM-GEO-0105
  page: 19
  vendor_label: "유형 15 쌍곡선의 정의를 이용한 쌍곡선의 방정식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    초점 (2,0), (10,0) 이고 주축의 길이가 4 인 쌍곡선이 y축과 만나는 두 점 A, B 사이의 거리. 5지선다.
  category: "중심 (6,0) · c=4 · a=2 → b^2=12 → (x−6)^2/4 − y^2/12 = 1 → x=0 대입 y^2=96 → 2·4√6"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "초점·주축 → 평행이동한 쌍곡선 → 축과의 교점 거리"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    중심 (6,0), c=4, a=2, b^2=16−4=12 → (x−6)^2/4 − y^2/12 = 1. x=0 대입 9 − y^2/12 = 1 → y^2=96 → y=±4√6, AB=8√6. 다섯 단계 절차·통찰 없음, 이동 부호와 「거리 = 2|y|」 함정 → M_total 6, 중 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "중심 (6,0) · c=4 · a=2 → b^2=12 → x=0 대입 y^2=96 → AB = 2·4√6 = 8√6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0105.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초점 좌표(중심 h)와 주축 길이 2a 를 바꿀 수 있음. 제약: y축과 만나려면 |h| > a, y^2 = b^2(h^2/a^2 − 1) 이 깔끔한 근호가 되도록 선택."
    creative: "(1) 「y축과 만나지 않도록 하는 주축 길이의 범위」로 바꾸면 I-BW d1 + 경계 → ★2~3 (2) 교점과 한 초점으로 삼각형 넓이(★2) (3) 교점의 y좌표를 주고 주축 길이 역산(★2)."
```

## 표본 판정 요약 (35문)

- ★ 분포: ★1 10 · ★2 24 · ★3 1 · ★4 0 · ★5 0
- 통찰 보유(insights ≥ 1) 9 · 그중 insight_type 통찰형(depth 2) 3(0082·0083·0087) · 절차형 32 · premium 0
- 통찰 유형: I-EQV 7(0080·0081·0082·0083·0084·0087·0099) · I-RT 2(0085·0086) · SC/VF/SYM/XU 0
- type_hint 상위: 「정의로 방정식 세우기(초점·2a → b^2)」 10(0077~0079 · 0088~0091 · 0103~0105) · 「쌍곡선의 평행이동(일반형·−1 형 판독)」 7(0096~0102) · 「타원의 평행이동(일반형·초점)」 6(0071~0076) · 「초점현 삼각형 둘레 = 4a·숨은 초점」 4(0080~0083) · 「최대·최소(산술·기하평균)」 4(0084~0087) · 「점근선(기울기·각·거리)」 4(0092~0095)
- 그림: 4문(`crop:fig-0080.png` · `crop:fig-0082.png` · `crop:fig-0083.png` · `crop:fig-0086.png`)
- 벤더 라벨 대비: 2단 이상 어긋난 문항 없음. 1단 하향(★2 출발 → ★1) 10문은 모두 통찰 0·M_total 4 의 공식 사슬 문항(0072·0073·0077·0078·0088·0090·0093·0094·0097·0103).
- 전사 답 확인: 35문 전부 다시 풀어 전사본 answer 와 일치. 「전사 답 확인 필요」 없음.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-GEO-0083 | 벤더 「상중」이나 M_total 4·통찰 1개(EQV d2). 숨은 초점 인식이 진입 장벽 전부라 ★3 라벨 유지, M·I 만 보면 ★2 | ★2 / ★3 |
| RPM-GEO-0091 | 정의 풀이(두 초점거리 차) vs 대입 풀이(사차식 + a^2<16 기각) 갈래를 I-SC d1 로 볼지 애매. 두 풀이 모두 답지 표준 범위라 절차형 ★2 로 기록 | ★2 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 반복 골조 「일반형 → 완전제곱 표준형 → 요소(중심·초점·점근선) 판독」이 타원(0072·0073·0076)과 쌍곡선(0097·0101·0102) 6문 — 곡선 종류와 무관하게 base ★1~2 의 한 유형으로 통합 가능(하위 변형: +1/−1 형 판독, 초점 사이 거리, 축과의 교점).
- 「두 초점(원점 O)과 이루는 삼각형 넓이」 0074(타원)·0102(쌍곡선) 는 같은 골조(c · 중심의 수직 좌표) — 타원/쌍곡선 공통 유형 하나로.
- 「정의로 방정식 세우기」(c, 2a → b^2) 는 타원 0077~0079 · 쌍곡선 0088~0091 · 0103~0105 로 10문 반복. 곡선별로 유형을 두되 골조가 동일하므로 base ★1(중심 원점·공식 사슬)과 base ★2(평행이동·지나는 점·축 교점 추가) 두 층으로 나누면 충분.
- 따로 세워야 할 유형(통찰이 골조인 것): 「초점현 삼각형 둘레 = 4a」(0080·0081, EQV d1, base ★2) · 「숨은 초점 인식」(0081·0083 — 진입 저항형, base ★2~3) · 「초점 삼각형 직각 → 넓이 2b^2」(0082, EQV d2, base ★2~3) · 「초점거리 합 고정 → 곱/제곱합 최대·최소」(0084·0087, base ★2) · 「타원 위 점의 좌표 곱·내접 직사각형 최대(산술·기하평균)」(0085·0086, RT d1, base ★2) · 「초점–점근선 거리 = b」(0095·0101, base ★2) · 「주축 방향 결정 조건(우변 부호)」(0099, EQV d1, base ★2).
- 통합해도 될 유형: 0093(점근선 수직 = 직각쌍곡선)·0094(점근선이 이루는 각)·0092(타원과 초점 공유 + 점근선 기울기)는 「점근선 기울기 ±b/a 의 조건 번역」 한 유형(base ★1~2)으로 묶어도 됨.
- 이 범위에는 ★4 이상 후보가 없고 SC/VF/SYM/XU 통찰이 전무하다. 창의 변형으로 ★3~4 를 만들려면 variation_notes.creative 의 I-MI(부호 분기: 0080·0083·0093 변형)·I-VF(후보 기각: 0091·0098 변형)·I-BW(역산: 0074·0100·0105 변형) 지점을 쓴다.
