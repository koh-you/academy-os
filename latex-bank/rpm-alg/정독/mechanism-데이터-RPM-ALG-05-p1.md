---
name: mechanism-데이터-RPM-ALG-05-p1
description: RPM 대수 05 삼각함수(1/3 · 교과서 05-1~05-5 + 유형 01~02) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 대수 (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-alg
  section: 05 삼각함수
  unit_code: ALG-05
  part: "1/3"
  extract_range: "65~66쪽 · 0457~0487"
  total_problems: 31
  unit_total: 96
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-alg/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-alg/items/<id>.tex
  image_source: latex-bank/rpm-alg/figures/ (crops.json)
---

# RPM 대수 · 05 삼각함수 (1/3) 정독 데이터 (v1.0)

이 파일은 RPM 대수 05 삼각함수 단원의 첫 범위(65~66쪽 · 0457~0487 · 31문)를 다룬다. 65쪽은 「교과서 05-1 일반각과 호도법」(16문 · 동경 그리기·360°×n+α° 표현·사분면 판정·육십분법↔호도법 변환·2nπ+θ 표현의 공통 발문 드릴 여섯 묶음) · 「교과서 05-2 부채꼴의 호의 길이와 넓이」(2문) · 「교과서 05-3 삼각함수의 정의」(2문) · 「교과서 05-4 삼각함수의 값의 부호」(3문) · 「교과서 05-5 삼각함수 사이의 관계」(2문)의 교과서 구역이고, 66쪽부터 「유형 01 일반각」(3문)·「유형 02 사분면의 각」(3문)의 유형 구역이 시작된다. RPM 의 벤더 난이도 신호는 구역(교과서/유형/유형 UP/시험에 꼭 나오는 문제/서술형/실력 Up)·난이도(하~상)·태그(대표문제·중요·기출)로 나타나는데, 교과서 구역 25문은 난이도·태그가 없어 출발점이 모두 ★1 이고, 유형 구역 6문은 대표문제 2문(level 없음 → ★2 출발)·중하 3문(★1~2 출발)·중 1문(★2 출발)이다. 통찰이 있는 문항은 유형 02 의 θ/2·θ/3 사분면 2문(EQV+MI)뿐이며 그 둘만 +1 조정으로 ★3 이 됐다.

주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다. 공통 발문은 각 블록 `summary` 에 요약해 넣었고, 발문 그룹이 바뀌는 지점에 굵은 안내 줄을 두었다. 그림 문항은 4문(0459·0460 동경 위치 그림, 0482 동경 위치 그림, 0487 선택지 영역 그림 5개)이며 크롭을 직접 보고 라벨(120°·−130°·30°·③의 세 영역)을 확인했다.

## 문항 데이터

### 교과서 05-1 일반각과 호도법

**공통 발문 (0457~0458)**: 다음 각을 나타내는 시초선 OX 와 동경 OP 의 위치를 그림으로 나타내시오.

```yaml
- id: RPM-ALG-0457
  page: 65
  vendor_label: "교과서 05-1 일반각과 호도법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    각 60° 를 나타내는 시초선 OX 와 동경 OP 의 위치를 그림으로 나타내기(공통 발문 · 양의 각).
  category: "일반각의 정의 → 양의 방향 회전 → 동경의 위치 그리기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "시초선과 동경 · 각의 양·음 방향 그리기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    시초선 OX 에서 양의 방향(시계 반대)으로 60° 돌린 동경을 그리는 정의 확인 한 단계. 교과서 구역·통찰 없음·M_total 4 → ★1. 답은 그림이라 「풀이 참조」로 전사됨.
  tier: star_1
  mechanism_primary: "각 60° → 양의 방향 회전 → 시초선 OX 기준 60° 위치에 동경 OP"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '풀이 참조 (시초선~$\pt{OX}$에서 양의 방향으로 $60^\circ$ 회전한 동경~$\pt{OP}$의 그림)'
  answer_source: "해설(그림 · 답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-alg/items/0457.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각을 0°~360° 안의 다른 양의 각(135°·300°)이나 360° 를 넘는 각(400°)으로. 제약: 그림으로 위치가 구별되는 각(축 위·사분면 안)을 고르고 축 위의 각은 별도 표시."
    creative: "(1) 음의 각·360° 초과 각을 섞어 같은 동경을 고르게 하기(★1) (2) 동경 위치 그림을 주고 각을 여러 개 답하게 하는 역방향(★1~2) (3) 호도법 각(4π/3)을 그리게 하면 변환이 한 단계 붙어 ★1 유지."
```

```yaml
- id: RPM-ALG-0458
  page: 65
  vendor_label: "교과서 05-1 일반각과 호도법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    각 −210° 를 나타내는 시초선 OX 와 동경 OP 의 위치를 그림으로 나타내기(공통 발문 · 음의 각).
  category: "일반각의 정의 → 음의 방향 회전 → 동경의 위치 그리기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "시초선과 동경 · 각의 양·음 방향 그리기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    음의 각은 시계 방향으로 210° 회전. 방향(T-부호)만 조심하면 정의 확인 한 단계. 교과서 구역·통찰 없음·M_total 4 → ★1. 그린 동경은 150° 의 동경과 같은 위치.
  tier: star_1
  mechanism_primary: "각 −210° → 음의 방향(시계) 210° 회전 → 150° 위치의 동경 OP"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '풀이 참조 (시초선~$\pt{OX}$에서 음의 방향으로 $210^\circ$ 회전한 동경~$\pt{OP}$의 그림)'
  answer_source: "해설(그림 · 답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-alg/items/0458.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "−360°~0° 안의 다른 음의 각(−120°·−300°)이나 −360° 를 넘는 각(−400°)으로. 제약: 양의 각과 위치가 같은 짝(−210°=150°)을 함께 두면 같은 동경 확인용으로 쓸 수 있음."
    creative: "(1) 양의 각 하나와 음의 각 하나를 주고 같은 동경인지 판정(★1) (2) 동경 그림을 주고 −360°<θ<0° 인 각을 답하게 하는 역방향(★1) (3) 음의 호도법 각(−7π/6)으로 바꾸면 변환 한 단계 추가(★1)."
```

**공통 발문 (0459~0460)**: 그림에서 시초선 OX 에 대하여 동경 OP 가 나타내는 일반각을 360°×n+α° 의 꼴로 나타내시오. (n 은 정수, 0°≤α°<360°)

```yaml
- id: RPM-ALG-0459
  page: 65
  vendor_label: "교과서 05-1 일반각과 호도법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    그림(시초선 OX 에서 양의 방향 120° 위치의 동경 OP)을 보고 동경 OP 가 나타내는 일반각을 360°×n+α° 꼴로 나타내기(공통 발문 · 0°≤α°<360°).
  category: "그림의 각 읽기 → 일반각 표현 360°×n+α°"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "일반각을 360°×n+α° 꼴로 나타내기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    그림의 120° 를 그대로 α 로 읽어 360°×n+120°. 정의 확인 한 단계. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "그림의 각 120° 읽기 → 360°×n+120°"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$360^\circ\times n+120^\circ$'
  answer_source: "해설(답 크롭 없음)"
  figure: "crop:fig-0459.png"
  latex: latex-bank/rpm-alg/items/0459.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "그림 라벨 각을 0°~360° 안의 다른 값(45°·210°)으로 바꾸고 답을 함께 갱신. 제약: 그림 라벨은 고정 자산이라 라벨을 바꾸면 크롭도 다시 만들어야 함."
    creative: "(1) 그림 라벨 없이 눈금(축·45° 보조선)만 주고 α 를 읽게(★1) (2) 같은 동경을 나타내는 각 중 −360°<θ<0° 범위의 것을 묻기(★1) (3) 2nπ+θ 꼴로 답하게 하면 호도법 변환 결합(★1~2)."
```

```yaml
- id: RPM-ALG-0460
  page: 65
  vendor_label: "교과서 05-1 일반각과 호도법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    그림(시초선 OX 에서 음의 방향 130° 위치의 동경 OP · 라벨 −130°)을 보고 동경 OP 가 나타내는 일반각을 360°×n+α° 꼴로 나타내기(공통 발문).
  category: "그림의 음의 각 읽기 → 양의 각으로 환산 → 360°×n+α°"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "일반각을 360°×n+α° 꼴로 나타내기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    그림의 −130° 는 시계 방향 회전이므로 α 로 쓰려면 360°−130°=230° 로 바꿔야 한다(T-부호 한 개). 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "그림의 각 −130° 읽기 → 360°−130°=230° → 360°×n+230°"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$360^\circ\times n+230^\circ$'
  answer_source: "해설(답 크롭 없음)"
  figure: "crop:fig-0460.png"
  latex: latex-bank/rpm-alg/items/0460.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "그림 라벨을 다른 음의 각(−60°·−250°)으로. 제약: 라벨을 바꾸면 크롭 재작성, 답 α=360°+라벨 이 0°~360° 안에 오게."
    creative: "(1) 라벨을 −130° 로 두고 −360°<θ<0° 꼴 답을 함께 묻기(★1) (2) 그림의 각이 −130° 와 −490° 둘 다 될 수 있음을 보기에서 고르게(같은 동경 ★1~2) (3) 2nπ+θ 로 답하게 해 변환 결합(★1)."
```

**공통 발문 (0461~0462)**: 다음 각의 동경이 나타내는 일반각을 360°×n+α° 의 꼴로 나타내시오. (n 은 정수, 0°≤α°<360°)

```yaml
- id: RPM-ALG-0461
  page: 65
  vendor_label: "교과서 05-1 일반각과 호도법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    각 500° 의 동경이 나타내는 일반각을 360°×n+α° 꼴로 나타내기(공통 발문).
  category: "360° 로 나눈 나머지 → 일반각 표현"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "일반각을 360°×n+α° 꼴로 나타내기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    500°=360°×1+140°. 나눗셈 한 번. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "500° = 360°×1+140° → 360°×n+140°"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$360^\circ\times n+140^\circ$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0461.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "360° 를 넘는 다른 양의 각(800°·1000°·1500°)으로. 제약: 360° 의 배수는 α=0° 가 되어 답의 형태(360°×n)가 달라짐."
    creative: "(1) 음의 각(0462 골조)과 짝지어 α 가 같은지 판정(★1) (2) α 가 나머지와 다른 각을 다섯 개 중 고르게(유형 01 골조 ★2) (3) 2nπ+θ 로 답하게 해 변환 결합(★1)."
```

```yaml
- id: RPM-ALG-0462
  page: 65
  vendor_label: "교과서 05-1 일반각과 호도법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    각 −650° 의 동경이 나타내는 일반각을 360°×n+α° 꼴로 나타내기(공통 발문 · 음의 각).
  category: "음의 각의 360° 환원(몫 음수) → 일반각 표현"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "일반각을 360°×n+α° 꼴로 나타내기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    −650°=360°×(−2)+70°. 몫을 −2 로 잡아 나머지를 0° 이상으로 맞추는 것(T-부호)이 유일한 함정. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "−650° = 360°×(−2)+70° → 360°×n+70°"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$360^\circ\times n+70^\circ$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0462.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "다른 음의 각(−400°·−1000°·−730°)으로. 제약: −360° 의 배수는 α=0°, 나머지를 음수로 두는 오답(−650°=360°×(−1)−290°)이 자연스럽게 나오는 각이 좋음."
    creative: "(1) 양의 각과 음의 각 두 개를 주고 같은 동경인지 판정(★1) (2) −650° 와 같은 동경을 나타내는 각 중 0°~360° 밖의 것을 여러 개 답하게(★1) (3) 호도법 음의 각(−13π/4)으로 2nπ+θ 표현(0471 골조 ★1)."
```

**공통 발문 (0463~0464)**: 다음 각은 제몇 사분면의 각인지 말하시오.

```yaml
- id: RPM-ALG-0463
  page: 65
  vendor_label: "교과서 05-1 일반각과 호도법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    각 550° 가 제몇 사분면의 각인지(공통 발문).
  category: "일반각 환원 → 사분면 판정"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "각의 사분면 판정(일반각 환원)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    550°=360°+190° 이고 180°<190°<270° 이므로 제3사분면. 환원·판정 두 단계. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "550° = 360°+190° → 180°<190°<270° → 제3사분면"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "제$3$사분면"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0463.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "360° 를 넘는 다른 각(700°·1000°·1234°)으로. 제약: 축 위의 각(90° 의 배수)은 사분면이 없으므로 제외."
    creative: "(1) 사분면이 다른 하나를 다섯 개 중 고르게(0486 골조 ★2) (2) 호도법 각(11π/4)으로 바꿔 변환 결합(★1) (3) 사분면 대신 sinθ·cosθ 의 부호를 묻게 해 05-4 골조와 연결(★1)."
```

```yaml
- id: RPM-ALG-0464
  page: 65
  vendor_label: "교과서 05-1 일반각과 호도법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    각 −380° 가 제몇 사분면의 각인지(공통 발문 · 음의 각).
  category: "음의 각 환원 → 사분면 판정"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "각의 사분면 판정(일반각 환원)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    −380°=360°×(−2)+340° → 270°<340°<360° → 제4사분면. 음의 각 환원(T-부호) 한 번에 판정 한 번. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "−380° = 360°×(−2)+340° → 270°<340°<360° → 제4사분면"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "제$4$사분면"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0464.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "다른 음의 각(−500°·−1000°·−200°)으로. 제약: −20° 처럼 작은 음의 각은 −360°+340° 환원 없이도 답이 보여 함정이 약해짐."
    creative: "(1) 음의 각을 −360°<θ<0° 인 각으로 먼저 바꾸는 중간 발문(★1) (2) 양의 각·음의 각 섞은 5지에서 사분면이 다른 하나(0486 골조 ★2) (3) −380° 의 동경과 x축 대칭인 동경의 사분면(대칭 유형 예고 ★2)."
```

**공통 발문 (0465~0468)**: 다음 각을 육십분법은 호도법으로, 호도법은 육십분법으로 나타내시오.

```yaml
- id: RPM-ALG-0465
  page: 65
  vendor_label: "교과서 05-1 일반각과 호도법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    각 240° 를 호도법으로 나타내기(공통 발문 · 육십분법 → 호도법).
  category: "육십분법 → 호도법 (×π/180)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "육십분법과 호도법의 변환"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    240°×(π/180)=4π/3. 곱셈·약분 한 번. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "240° × (π/180) → 4π/3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{4}{3}\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0465.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "30°·45° 의 배수(150°·225°·330°)로. 제약: 분모가 2·3·4·6 이 되는 각이 교과 범위, 그 밖의 각(100°)은 5π/9 처럼 낯선 분수가 됨."
    creative: "(1) 호도법 → 육십분법 역방향(0466 골조 ★1) (2) 부채꼴 호의 길이 계산의 첫 단계로 넣어 변환+공식 대입(★1~2) (3) 1 라디안의 정의(호의 길이=반지름)를 묻는 개념 확인(★1)."
```

```yaml
- id: RPM-ALG-0466
  page: 65
  vendor_label: "교과서 05-1 일반각과 호도법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    각 7π/4 를 육십분법으로 나타내기(공통 발문 · 호도법 → 육십분법).
  category: "호도법 → 육십분법 (×180°/π)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "육십분법과 호도법의 변환"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (7π/4)×(180°/π)=315°. 곱셈 한 번. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "7π/4 × (180°/π) → 315°"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$315^\circ$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0466.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "π 의 다른 유리수 배(5π/6·11π/6·3π/2·2π/5)로. 제약: 분모가 180 의 약수여야 정수 각이 나옴."
    creative: "(1) 육십분법 → 호도법 역방향(0465 골조 ★1) (2) 7π/4 의 동경이 속한 사분면까지 함께 묻기(변환+판정 ★1) (3) 반지름·호의 길이를 주고 중심각을 호도법과 육십분법으로 모두 답하게(★1~2)."
```

```yaml
- id: RPM-ALG-0467
  page: 65
  vendor_label: "교과서 05-1 일반각과 호도법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    각 −300° 를 호도법으로 나타내기(공통 발문 · 음의 각 · 육십분법 → 호도법).
  category: "음의 각의 육십분법 → 호도법 (부호 유지 · ×π/180)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "육십분법과 호도법의 변환"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    부호를 유지한 채 −300°×(π/180)=−5π/3. 60° 와 같은 동경이지만 발문은 변환이므로 π/3 로 바꾸면 안 된다(T-부호). 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "−300° × (π/180) → −5π/3 (부호 유지)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-\dfrac{5}{3}\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0467.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "다른 음의 각(−150°·−450°·−1080°)으로. 제약: 30°·45° 배수 유지, 답은 부호 있는 π 의 유리수 배."
    creative: "(1) −300° 와 같은 동경을 나타내는 0≤θ<2π 인 호도법 각을 묻기(변환+환원 ★1) (2) 음의 호도법 각을 육십분법으로(0468 골조 ★1) (3) 음의 각을 2nπ+θ 로 나타내기(0471 골조 ★1)."
```

```yaml
- id: RPM-ALG-0468
  page: 65
  vendor_label: "교과서 05-1 일반각과 호도법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    각 −2π/3 를 육십분법으로 나타내기(공통 발문 · 음의 각 · 호도법 → 육십분법).
  category: "음의 각의 호도법 → 육십분법 (부호 유지 · ×180°/π)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "육십분법과 호도법의 변환"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (−2π/3)×(180°/π)=−120°. 곱셈 한 번, 부호 유지(T-부호). 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "−2π/3 × (180°/π) → −120° (부호 유지)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-120^\circ$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0468.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "다른 음의 호도법 각(−5π/4·−7π/6·−3π)으로. 제약: 분모가 180 의 약수여야 정수 각."
    creative: "(1) −2π/3 의 동경이 속한 사분면까지 묻기(변환+판정 ★1) (2) 육십분법·호도법 각 네 개를 크기순 배열(변환 통일 ★2) (3) 삼각함수 값의 부호를 묻게 해 05-4 골조와 연결(★1)."
```

**공통 발문 (0469~0472)**: 다음 각의 동경이 나타내는 일반각을 2nπ+θ 의 꼴로 나타내시오. (n 은 정수, 0≤θ<2π)

```yaml
- id: RPM-ALG-0469
  page: 65
  vendor_label: "교과서 05-1 일반각과 호도법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    각 5π 의 동경이 나타내는 일반각을 2nπ+θ 꼴로 나타내기(공통 발문 · 0≤θ<2π).
  category: "2π 의 배수 분리 → 일반각 표현 2nπ+θ"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "일반각을 2nπ+θ 꼴로 나타내기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    5π=2π×2+π. θ=π 는 축 위의 각. 나눗셈 한 번. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "5π = 2π×2+π → 2nπ+π"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$2n\pi+\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0469.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "π 의 다른 정수배·유리수배(7π·9π/2·3π)로. 제약: 2π 의 배수는 θ=0 이 되어 답 형태(2nπ)가 달라짐."
    creative: "(1) 육십분법 각(900°)을 주고 2nπ+θ 로 답하게 해 변환 결합(★1) (2) θ 가 같은 각을 다섯 개 중 고르게(유형 01 골조 ★2) (3) 2nπ+θ 와 360°×n+α° 두 표기를 대응시키는 짝 맞추기(★1)."
```

```yaml
- id: RPM-ALG-0470
  page: 65
  vendor_label: "교과서 05-1 일반각과 호도법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    각 17π/6 의 동경이 나타내는 일반각을 2nπ+θ 꼴로 나타내기(공통 발문).
  category: "분수각에서 2π=12π/6 분리 → 일반각 표현"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "일반각을 2nπ+θ 꼴로 나타내기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    17π/6=12π/6+5π/6 → 2π×1+5π/6. 분수에서 2π 를 떼는 계산 한 번. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "17π/6 = 2π×1+5π/6 → 2nπ+5π/6"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$2n\pi+\dfrac{5}{6}\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0470.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모 3·4·6 의 다른 분수각(11π/4·23π/3·29π/6)으로. 제약: 분자가 2×분모 의 배수면 θ=0."
    creative: "(1) 17π/6 의 동경이 속한 사분면을 함께 묻기(★1) (2) sin(17π/6) 의 부호로 확장(05-4 골조 ★1) (3) 2nπ+θ 꼴이 같은 각끼리 묶기(유형 01 골조 ★2)."
```

```yaml
- id: RPM-ALG-0471
  page: 65
  vendor_label: "교과서 05-1 일반각과 호도법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    각 −16π/3 의 동경이 나타내는 일반각을 2nπ+θ 꼴로 나타내기(공통 발문 · 음의 각).
  category: "음의 분수각 환원(몫 음수) → 일반각 표현"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "일반각을 2nπ+θ 꼴로 나타내기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    −16π/3=−18π/3+2π/3 → 2π×(−3)+2π/3. 음의 각이라 몫을 −3 으로 잡아 θ 를 0 이상으로 맞추는 것(T-부호)이 함정. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "−16π/3 = 2π×(−3)+2π/3 → 2nπ+2π/3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$2n\pi+\dfrac{2}{3}\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0471.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "다른 음의 분수각(−7π/4·−13π/6·−10π/3)으로. 제약: 나머지를 음수로 두는 오답(2π×(−2)−4π/3)이 자연스럽게 나오는 각이 좋음."
    creative: "(1) −16π/3 와 같은 동경을 나타내는 각 중 −2π<θ<0 인 것을 묻기(★1) (2) 육십분법 음의 각(−960°)으로 주고 2nπ+θ 로 답하게(변환 결합 ★1) (3) 음의 각 다섯 개 중 θ 가 다른 하나(유형 01 골조 ★2)."
```

```yaml
- id: RPM-ALG-0472
  page: 65
  vendor_label: "교과서 05-1 일반각과 호도법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    각 −3π/4 의 동경이 나타내는 일반각을 2nπ+θ 꼴로 나타내기(공통 발문 · 음의 각).
  category: "음의 각에 2π 더하기 → 일반각 표현"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "일반각을 2nπ+θ 꼴로 나타내기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    −3π/4=2π×(−1)+5π/4. 2π 한 번 더하기(T-부호). 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "−3π/4 = 2π×(−1)+5π/4 → 2nπ+5π/4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$2n\pi+\dfrac{5}{4}\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0472.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "−2π<θ<0 인 다른 분수각(−π/6·−5π/3·−7π/4)으로. 제약: 분모 3·4·6 유지."
    creative: "(1) −3π/4 의 동경이 속한 사분면·삼각함수 값의 부호까지 묻기(★1) (2) −3π/4 와 5π/4 가 같은 동경임을 그림으로 확인(★1) (3) 음의 각 두 개의 동경이 x축 대칭인지 판정(대칭 유형 예고 ★2)."
```

### 교과서 05-2 부채꼴의 호의 길이와 넓이

```yaml
- id: RPM-ALG-0473
  page: 65
  vendor_label: "교과서 05-2 부채꼴의 호의 길이와 넓이"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    반지름 4, 중심각 π/4 인 부채꼴의 호의 길이 l 과 넓이 S.
  category: "l=rθ · S=½r²θ 공식 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부채꼴의 호의 길이와 넓이(공식 대입·역산)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    l=4·(π/4)=π, S=½·4²·(π/4)=2π. 공식 대입 두 줄. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "(r, θ)=(4, π/4) → l=rθ=π · S=½r²θ=2π"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$l=\pi$, $S=2\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0473.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "r 과 θ(π/6·2π/3·5π/4 등)를 바꿈. 제약: θ 는 라디안(육십분법이면 변환 선행), 답이 π 의 유리수 배로 정리되게."
    creative: "(1) 육십분법 중심각(60°)을 주어 변환을 앞세우기(★1) (2) l 과 S 를 주고 r·θ 를 역산(0474 골조 ★1) (3) 둘레가 일정한 부채꼴의 넓이 최대(이차함수 결합 · ★2~3 · XU 후보)."
```

```yaml
- id: RPM-ALG-0474
  page: 65
  vendor_label: "교과서 05-2 부채꼴의 호의 길이와 넓이"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    호의 길이 4, 넓이 6 인 부채꼴의 반지름 r 와 중심각 θ.
  category: "S=½rl → r · θ=l/r 역산"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부채꼴의 호의 길이와 넓이(공식 대입·역산)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    S=½rl 에 대입하면 6=½·r·4 → r=3, θ=l/r=4/3. 두 공식 연립을 S=½rl 한 줄로 줄이는 것이 골조이나 교과서 표준 공식이라 통찰로 세지 않음. 교과서 구역·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "S=½rl → r=3 → θ=l/r=4/3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$r=3$, $\theta=\dfrac{4}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0474.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "(l, S) 를 (6, 9)·(2π, 3π)·(5, 10) 등으로. 제약: r=2S/l 이 깔끔한 수가 되고 θ=l/r 이 2π 미만이 되게."
    creative: "(1) r 과 S 를 주고 θ·l 을 묻기(★1) (2) 둘레와 넓이를 주고 r·θ 를 연립(이차방정식 결합 ★2) (3) 호의 길이가 반지름과 같은 부채꼴의 중심각(1 라디안 정의 ★1)."
```

### 교과서 05-3 삼각함수의 정의

```yaml
- id: RPM-ALG-0475
  page: 65
  vendor_label: "교과서 05-3 삼각함수의 정의"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    원점 O 와 점 P(3, −1) 에 대하여 동경 OP 가 나타내는 각 θ 의 sinθ, cosθ, tanθ.
  category: "r=√(x²+y²) → 정의 대입 → 유리화"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수의 정의(동경 위의 점 → 삼각함수 값)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    r=√10. sinθ=−1/√10, cosθ=3/√10 을 유리화하고 tanθ=−1/3. 정의 대입에 부호(y<0)만 주의(T-부호). 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "P(3, −1) → r=√10 → (sin, cos, tan)=(y/r, x/r, y/x) → 유리화"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\sin\theta=-\dfrac{\sqrt{10}}{10}$, $\cos\theta=\dfrac{3\sqrt{10}}{10}$, $\tan\theta=-\dfrac{1}{3}$'
  answer_source: "해설(답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-alg/items/0475.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "P 를 다른 격자점((−4, 3)·(−2, −2√3)·(1, −2))으로. 제약: r 이 정수나 간단한 근호가 되게, x=0 이면 tan 이 정의되지 않음."
    creative: "(1) 직선 y=−x/3 (x>0) 위의 점으로 주어 점 하나를 골라야 하게(★1~2 · EQV 후보) (2) 세 값의 조합식(sinθcosθ·sinθ+tanθ)을 묻기(★1) (3) P 가 원 x²+y²=10 위에 있고 좌표 하나만 주면 다른 좌표를 먼저 구해야(★2)."
```

```yaml
- id: RPM-ALG-0476
  page: 65
  vendor_label: "교과서 05-3 삼각함수의 정의"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    θ=3π/4 일 때 sinθ, cosθ, tanθ 의 값.
  category: "특수각 위치 → 단위원 위의 점 → 정의 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수의 정의(특수각의 삼각함수 값)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    3π/4=135° 는 제2사분면. 단위원(r=1) 위의 점 (−√2/2, √2/2) 에서 sin=√2/2, cos=−√2/2, tan=−1. 부호(T-부호)만 주의. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "3π/4 → 제2사분면 · 기준각 π/4 → (cos, sin)=(−√2/2, √2/2) → tan=−1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\sin\theta=\dfrac{\sqrt{2}}{2}$, $\cos\theta=-\dfrac{\sqrt{2}}{2}$, $\tan\theta=-1$'
  answer_source: "해설(답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-alg/items/0476.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "θ 를 다른 특수각(5π/6·4π/3·7π/4·−π/6)으로. 제약: 30°·45°·60° 의 정수배, 축 위 각(π/2)이면 tan 이 정의되지 않음."
    creative: "(1) 2π 를 넘는 특수각(11π/3)으로 환원 단계 추가(★1) (2) 세 값의 합·곱을 묻기(★1) (3) sin·cos 값을 주고 θ 를 찾는 역방향(삼각방정식 골조 예고 ★2)."
```

### 교과서 05-4 삼각함수의 값의 부호

```yaml
- id: RPM-ALG-0477
  page: 65
  vendor_label: "교과서 05-4 삼각함수의 값의 부호"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    θ=14π/3 일 때 sinθ, cosθ, tanθ 의 값의 부호.
  category: "일반각 환원 → 사분면 → 부호표"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수의 값의 부호(사분면별)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    14π/3=4π+2π/3 → 제2사분면 → sin>0, cos<0, tan<0. 환원 한 번·부호표 한 번. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "14π/3 = 4π+2π/3 → 제2사분면 → (sin, cos, tan) 부호 (+, −, −)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\sin\theta>0$, $\cos\theta<0$, $\tan\theta<0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0477.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "θ 를 다른 큰 각·음의 각(−7π/4·23π/6·1000°)으로. 제약: 축 위의 각(nπ/2)은 값이 0 이 되어 부호 발문이 성립하지 않음."
    creative: "(1) sinθcosθ·cosθtanθ 같은 곱의 부호를 묻기(★1) (2) 부호 조건에서 사분면을 역추적(0478 골조 ★1) (3) √(sin²θ)=|sinθ| 등 절댓값 벗기기와 결합(★2 · T-부호)."
```

**공통 발문 (0478~0479)**: 다음을 만족시키는 각 θ 는 제몇 사분면의 각인지 말하시오.

```yaml
- id: RPM-ALG-0478
  page: 65
  vendor_label: "교과서 05-4 삼각함수의 값의 부호"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    sinθ<0, cosθ<0 을 만족시키는 θ 의 사분면(공통 발문).
  category: "부호 조건 두 개의 교집합 → 사분면"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수의 부호 → 사분면 판정"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    sin<0 은 제3·4사분면, cos<0 은 제2·3사분면, 교집합은 제3사분면. 부호표 대조 한 단계. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "sin<0 (Ⅲ, Ⅳ) ∩ cos<0 (Ⅱ, Ⅲ) → 제3사분면"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "제$3$사분면"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0478.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "부호 조합을 바꿈(sin>0·cos<0 → 제2, sin<0·cos>0 → 제4). 제약: 두 조건의 교집합이 정확히 한 사분면이 되게."
    creative: "(1) sinθcosθ<0 처럼 곱의 부호 조건으로 주면 두 사분면 답(★1~2 · MI 후보) (2) 부호 조건에서 √(sin²θ)+|cosθ| 를 간단히(★2 · T-부호) (3) sinθtanθ>0, cosθ<0 같은 조건 두 개를 결합(★2)."
```

```yaml
- id: RPM-ALG-0479
  page: 65
  vendor_label: "교과서 05-4 삼각함수의 값의 부호"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    sinθ>0, tanθ<0 을 만족시키는 θ 의 사분면(공통 발문).
  category: "부호 조건 두 개의 교집합 → 사분면"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수의 부호 → 사분면 판정"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    sin>0 은 제1·2사분면, tan<0 은 제2·4사분면, 교집합은 제2사분면. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "sin>0 (Ⅰ, Ⅱ) ∩ tan<0 (Ⅱ, Ⅳ) → 제2사분면"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "제$2$사분면"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0479.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "부호 조합을 바꿈(cos>0·tan<0 → 제4, sin<0·tan>0 → 제3). 제약: tan 의 부호는 sin·cos 부호의 곱이므로 모순 조합(sin>0·cos>0·tan<0)을 만들지 않기."
    creative: "(1) 조건을 sinθtanθ<0 하나로 압축해 두 사분면 답(★1~2) (2) 사분면 대신 θ/2 의 사분면까지 이어 묻기(유형 02 결합 ★3) (3) 조건을 만족시키는 θ 의 범위(0≤θ<2π)를 부등식으로 답하게(★2)."
```

### 교과서 05-5 삼각함수 사이의 관계

```yaml
- id: RPM-ALG-0480
  page: 65
  vendor_label: "교과서 05-5 삼각함수 사이의 관계"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    θ 가 제2사분면의 각이고 cosθ=−3/5 일 때 sinθ, tanθ 의 값.
  category: "sin²θ+cos²θ=1 → 부호 선택 → tan=sin/cos"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수 사이의 관계(한 값에서 나머지 값)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    sin²θ=1−9/25=16/25, 제2사분면이라 sinθ=4/5(양). tanθ=(4/5)/(−3/5)=−4/3. 부호 선택(T-부호)이 유일한 관문. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "cos=−3/5 → sin²=16/25 → 제2사분면 sin=4/5 → tan=sin/cos=−4/3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\sin\theta=\dfrac{4}{5}$, $\tan\theta=-\dfrac{4}{3}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-alg/items/0480.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "cos 값을 다른 피타고라스 쌍(−5/13·−8/17)이나 sin 값 제시로. 제약: 사분면과 주어진 값의 부호가 모순되지 않게(제2사분면이면 cos<0)."
    creative: "(1) tanθ 값과 사분면을 주고 sin·cos 를 묻기(★1~2) (2) 사분면 대신 '제2 또는 제3사분면' 식 부호 조건으로 주어 케이스 분기(★2 · MI 후보) (3) sinθ+cosθ 값을 물어 0481 골조와 연결(★1)."
```

```yaml
- id: RPM-ALG-0481
  page: 65
  vendor_label: "교과서 05-5 삼각함수 사이의 관계"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    sinθ+cosθ=1/3 일 때 sinθcosθ 의 값.
  category: "양변 제곱 → sin²θ+cos²θ=1 → sinθcosθ"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "sinθ±cosθ 와 sinθcosθ 의 관계(제곱 활용)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (sinθ+cosθ)²=1+2sinθcosθ=1/9 → sinθcosθ=−4/9. 제곱 한 번·정리 한 줄. 양변 제곱은 이 구역의 표준 절차라 통찰로 세지 않음. 교과서 구역·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "(sin+cos)² = 1+2·sincos → 1/9 → sincos=−4/9"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-\dfrac{4}{9}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0481.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "sin+cos 값을 절댓값 √2 이하의 다른 수(1/2·−1/5·√3/2)로. 제약: |sinθ+cosθ|≤√2 를 넘으면 θ 가 존재하지 않음."
    creative: "(1) sin−cos 값을 묻거나 sin³+cos³ 로 확장(★2) (2) sin+cos=k 에서 (sin−cos)² 을 구하고 부호를 사분면으로 결정(★2~3 · T-부호·VF 후보) (3) tanθ+1/tanθ 로 바꿔 묻기(★2 · EQV 후보)."
```

### 유형 01 일반각

```yaml
- id: RPM-ALG-0482
  page: 66
  vendor_label: "유형 01 일반각"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    그림(시초선 OX 기준 30° 위치의 동경 OP)에서 동경 OP 가 나타내는 각이 될 수 없는 것. 5지선다(390°·750°·−330°·−390°·−690°).
  category: "각 선택지 360°×n+α° 환원 → α 가 30° 가 아닌 것"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "같은 동경을 나타내는 각 고르기(일반각 360°×n+α°)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    다섯 각을 각각 360°×n+α° 로 환원하면 390°·750°·−330°·−690° 는 α=30°, −390°=360°×(−2)+330° 만 다르다 → ④. 환원 5회(Mₛ 2·Mₖ 2)에 음의 각 처리(T-부호). 통찰 없음. 유형 대표문제(level 없음) ★2 출발·M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "그림 각 30° → 각 선택지 360°×n+α° 환원 → α≠30° 인 −390°"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: "crop:fig-0482.png"
  latex: latex-bank/rpm-alg/items/0482.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "그림 라벨 각(30°)과 선택지의 n 을 바꿈. 제약: 오답 선택지 하나만 α 가 다르게, 음의 각을 최소 두 개 포함해 T-부호 유지, 그림 라벨을 바꾸면 크롭 재작성."
    creative: "(1) '될 수 있는 것' 을 고르게 반전(★2) (2) 그림 없이 α 값이 다른 하나 고르기(0483 골조 ★2) (3) 호도법 선택지(13π/6·−11π/6)로 바꿔 변환 결합(★2)."
```

```yaml
- id: RPM-ALG-0483
  page: 66
  vendor_label: "유형 01 일반각"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    −500°·−220°·580°·940°·1300° 를 360°×n+α° (0°≤α°<360°) 꼴로 나타낼 때 α 의 값이 나머지 넷과 다른 하나. 5지선다.
  category: "각 선택지 360° 환원 → α 비교 → 예외 하나"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "같은 동경을 나타내는 각 고르기(일반각 360°×n+α°)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    순서대로 α=220°, 140°, 220°, 220°, 220° → ②. 환원 5회 중 두 개가 음의 각(T-부호)이고 1300° 는 360°×3 을 빼야 해 계산량이 중간. 통찰 없음·M_total 6 → 중하(★1~2) 출발 범위 안에서 ★2.
  tier: star_2
  mechanism_primary: "각 선택지 360°×n+α° 환원 → α 비교 → 다른 하나 −220°(α=140°)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0483.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공통 α(220°)와 각 선택지의 n(−2~3)을 바꿈. 제약: 정답 하나만 α 가 다르게, 음의 각 두 개·1000° 이상 큰 각 하나를 유지."
    creative: "(1) 다섯 각 중 같은 동경끼리 짝짓기(★2) (2) 호도법 선택지(−25π/9 등)로 변환 결합(★2) (3) α 가 같은 각을 보기 ㄱ~ㅁ 에서 모두 고르기(0484 골조 ★2)."
```

```yaml
- id: RPM-ALG-0484
  page: 66
  vendor_label: "유형 01 일반각"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    보기 ㄱ~ㅁ(1680°·−240°·2040°·−1920°·720°) 중 240° 를 나타내는 동경과 일치하는 것을 있는 대로 고르기.
  category: "각 보기 −240° 가 360° 의 배수인지 판정"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "같은 동경을 나타내는 각 고르기(일반각 360°×n+α°)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    각 보기에서 240° 를 뺀 차가 360° 의 배수인지 본다: 1440°(ㄱ)·1800°(ㄷ)·−2160°(ㄹ)은 배수, −480°(ㄴ)·480°(ㅁ)은 아님 → ㄱ, ㄷ, ㄹ. 나눗셈 5회(Mₛ 2·Mₖ 2)·음의 각(T-부호). 통찰 없음·M_total 6 → 중하 출발 범위 안에서 ★2.
  tier: star_2
  mechanism_primary: "각 보기 − 240° → 360° 의 배수인지 판정 → ㄱ, ㄷ, ㄹ"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "ㄱ, ㄷ, ㄹ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0484.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준각(240°)과 보기 각의 배수 n 을 바꿈. 제약: 정답 개수 2~3개, 음의 각과 1000° 이상 큰 각을 하나씩 두어 계산 층 유지."
    creative: "(1) 두 각의 차가 360° 의 배수임을 판정 조건으로 명시해 풀게(★1~2) (2) 기준각을 호도법(4π/3)으로 주고 보기는 육십분법(변환 결합 ★2) (3) 두 동경이 x축·y축·원점 대칭이 되는 조건으로 확장(다음 유형 골조 ★3)."
```

### 유형 02 사분면의 각

```yaml
- id: RPM-ALG-0485
  page: 66
  vendor_label: "유형 02 사분면의 각"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    θ 가 제3사분면의 각일 때 θ/2 를 나타내는 동경이 존재하는 사분면을 모두 구하기.
  category: "사분면 → 일반각 부등식 → 2 로 나누기 → n 홀짝 분기"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'제3사분면의 각' 을 360°n+180°<θ<360°n+270° (n 정수) 로 옮겨야 나눗셈이 가능"
    - step: 3
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "180°n+90°<θ/2<180°n+135° 에서 n 짝수·홀수가 서로 다른 사분면을 만들고 둘 다 답"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "θ/n 의 동경이 존재하는 사분면"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    제3사분면 조건을 360°n+180°<θ<360°n+270° 로 옮긴 뒤(EQV) 2 로 나눠 180°n+90°<θ/2<180°n+135°. n=2k 면 제2사분면, n=2k+1 이면 제4사분면(MI · 두 경우 모두 답). 통찰 2개(d1)·M_total 7(매개변수 n·T-범위·T-경계) → 유형 대표문제 ★2 출발에 +1 → ★3.
    [분류 이슈] 두 통찰 모두 정형 template(사분면→부등식·홀짝 분기)이라 ★2 로 볼 여지 있음 — 라벨은 ★3, 후보 ★2 기록.
  tier: star_3
  mechanism_primary: "제3사분면 → 360°n+180°<θ<360°n+270° → ÷2 → n 홀짝 분기 → 제2·제4사분면"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "제$2$사분면, 제$4$사분면"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0485.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "θ 의 사분면(1~4)과 나누는 수(2·3)를 바꿈. 제약: 케이스 수 = 나누는 수(2 면 답 2개, 3 이면 3개), 경계선 제외 조건 유지."
    creative: "(1) 2θ 의 사분면(곱하기 → 케이스 없이 범위만 넓어짐 ★2) (2) θ/3 을 좌표평면 그림으로 고르게(0487 골조 ★3) (3) θ 와 θ/2 의 동경이 일치·대칭이 되는 조건(★3~4 · CON 후보) (4) sin(θ/2)·cos(θ/2) 의 부호를 묻게 해 부호 유형과 결합(★3)."
```

```yaml
- id: RPM-ALG-0486
  page: 66
  vendor_label: "유형 02 사분면의 각"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    610°·955°·1295°·−570°·−840° 중 동경이 존재하는 사분면이 나머지 넷과 다른 하나. 5지선다.
  category: "각 선택지 360° 환원 → 사분면 → 예외 하나"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "각의 사분면 판정(일반각 환원)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    250°·235°·215°·150°·240° 로 환원하면 −570° 만 제2사분면, 나머지는 제3사분면 → ④. 환원 5회·음의 각 2개(T-부호). 통찰 없음·M_total 6 → 중하 출발 범위 안에서 ★2.
    [분류 이슈] 유형 02 구역이지만 골조는 교과서 0463·0464(일반각 환원 → 사분면)와 같음 — 카탈로그에서 θ/n 유형(0485·0487)과 분리할지 결정.
  tier: star_2
  mechanism_primary: "각 선택지 360°×n+α° 환원 → α 의 사분면 → 다른 하나 −570°(제2사분면)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0486.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "선택지 각을 바꾸되 넷은 같은 사분면, 하나만 다르게. 제약: 축 위의 각(90° 의 배수)은 사분면이 없어 제외, 음의 각 두 개 유지."
    creative: "(1) 호도법 각(17π/4·−7π/3)으로 바꿔 변환 결합(★2) (2) 사분면이 같은 것끼리 짝짓기(★2) (3) 사분면 대신 sinθcosθ 의 부호가 다른 하나로 바꾸면 부호 유형과 결합(★2)."
```

```yaml
- id: RPM-ALG-0487
  page: 66
  vendor_label: "유형 02 사분면의 각"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    θ 가 제4사분면의 각일 때 θ/3 을 나타내는 동경이 속하는 모든 영역(경계선 제외)을 좌표평면에 나타낸 그림 고르기. 5지선다(영역 그림 ①~⑤).
  category: "사분면 → 일반각 부등식 → 3 으로 나누기 → n 을 3 으로 나눈 나머지 분기 → 영역 그림 대조"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'제4사분면의 각' 을 360°n+270°<θ<360°n+360° 로 옮겨야 3 으로 나눌 수 있음"
    - step: 3
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "120°n+90°<θ/3<120°n+120° 에서 n=3k·3k+1·3k+2 가 세 영역(90°~120° · 210°~240° · 330°~360°)을 만들고 셋 다 답"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "θ/n 의 동경이 존재하는 사분면"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    제4사분면 → 360°n+270°<θ<360°n+360° → 120°n+90°<θ/3<120°n+120°. n=3k·3k+1·3k+2 로 90°~120°, 210°~240°, 330°~360° 세 영역(MI) → 그림 ③(y축 왼쪽 30° 폭 · 제3사분면 x축 아래 30°~60° · x축 위쪽 30° 폭). 통찰 2개(d1)·M_total 8 → 중(★2) 출발 +1 → ★3.
    [분류 이슈] 0485 와 같은 골조에 케이스 하나 더·그림 대조가 붙은 문항 — ★2 후보 함께 기록.
  tier: star_3
  mechanism_primary: "제4사분면 → 360°n+270°<θ<360°n+360° → ÷3 → n=3k, 3k+1, 3k+2 → 세 영역 → 그림 ③"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "③"
  answer_source: "답지"
  figure: "crop:fig-0487.png"
  latex: latex-bank/rpm-alg/items/0487.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "θ 의 사분면과 나누는 수(2·3·4)를 바꿈. 제약: 선택지 그림 5개가 자산이라 수를 바꾸면 그림을 다시 그려야 함, 각 영역의 폭은 90°/나누는 수."
    creative: "(1) 그림 대신 '제몇 사분면' 을 답하게(0485 골조 ★3) (2) θ/3 의 영역 중 하나가 특정 사분면에 있을 때 θ 의 사분면을 역추적(★3~4 · BW 후보) (3) sin(θ/3) 의 부호로 가능한 것을 모두 고르기(★3)."
```

## 표본 판정 요약 (31문)

- ★ 분포: ★1 25 · ★2 4 · ★3 2 · ★4 0 · ★5 0
- 통찰형 2(0485·0487 · EQV+MI) · 절차형 29 · premium 0
- type_hint 상위: 「육십분법과 호도법의 변환」 4 · 「일반각을 360°×n+α° 꼴로 나타내기」 4 · 「일반각을 2nπ+θ 꼴로 나타내기」 4 · 「같은 동경을 나타내는 각 고르기」 3 · 「각의 사분면 판정(일반각 환원)」 3
- 구역별: 교과서 05-1 16문(전부 ★1) · 05-2 2문(★1) · 05-3 2문(★1) · 05-4 3문(★1) · 05-5 2문(★1) · 유형 01 3문(★2) · 유형 02 3문(★3·★2·★3)
- 그림: 4문(`crop:fig-0459.png` · `crop:fig-0460.png` · `crop:fig-0482.png` · `crop:fig-0487.png`)
- 답 대조: 31문 모두 재계산 결과가 전사 answer 와 일치(그림 문항 4문은 크롭 라벨로 확인). 「전사 답 확인 필요」 0건.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-ALG-0485 | 유형 02 대표문제(level 없음 → ★2 출발)에 EQV+MI 통찰 2개로 +1 적용해 ★3. 두 통찰 모두 정형 template(사분면→일반각 부등식·n 홀짝 분기)이라 ★2 로 볼 여지 | ★3 / ★2 |
| RPM-ALG-0487 | 0485 와 같은 골조에 케이스 하나 더(n mod 3)·그림 대조. 벤더 「중」(★2) 출발 +1 → ★3. 0485 와 같은 이유로 ★2 후보 | ★3 / ★2 |
| RPM-ALG-0486 | 유형 02 구역이지만 골조는 교과서 0463·0464(일반각 환원 → 사분면 판정)와 동일. type_hint 를 「각의 사분면 판정」으로 두었으며 카탈로그에서 θ/n 유형과 분리할지 결정 필요 | ★2 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 반복된 type_hint 12종 — 육십분법·호도법 변환 4 · 360°×n+α° 표현 4 · 2nπ+θ 표현 4 · 같은 동경 고르기(유형 01) 3 · 사분면 판정 3 · 동경 그리기 2 · 부채꼴 호·넓이 2 · 부호→사분면 2 · θ/n 사분면 2 · 삼각함수 정의(점) 1 · 정의(특수각) 1 · 부호 1 · 사이의 관계 1 · sin±cos 와 sincos 1.
- 따로 세워야 할 유형: 「θ/n 의 동경이 존재하는 사분면」(0485·0487) — 일반각 부등식(EQV)+n 의 나머지 분기(MI)가 골조인 이 단원 첫 통찰 유형이며 base ★ 는 2~3 사이에서 카탈로그가 정해야 함(2θ 확장·θ 와 θ/2 의 동경 관계·sin(θ/2) 부호 결합으로 ★3~4 까지 자람). 「같은 동경을 나타내는 각(일반각)」(0482~0484) — 5지 전수 환원이 골조인 절차형 ★2, 이후 「두 동경의 대칭·일치 조건」(x축·y축·원점·y=x 대칭)이 별도 유형으로 이어짐. 「부채꼴의 호의 길이와 넓이」 — 이 범위는 공식 대입 ★1 이지만 뒤 유형 구역의 둘레 고정 넓이 최대(이차함수 XU)·역산 문제에서 base ★ 를 정해야 함. 「sinθ±cosθ 와 sinθcosθ 의 관계」 — 이 범위 0481 은 ★1 이나 뒤 유형 구역에서 sin³±cos³·tan+1/tan·부호 결정(VF)으로 ★2~3 이 되는 독립 유형.
- 통합해도 될 유형: 교과서 05-1 의 「동경 그리기」「그림→360°×n+α°」「각→360°×n+α°」「2nπ+θ」는 「일반각의 표현(육십분법·호도법)」 하나로, 「육십분법·호도법 변환」은 그 하위 항목으로 통합 가능. 「각의 사분면 판정(일반각 환원)」(0463·0464·0486)은 「일반각의 표현」의 응용 항목으로 흡수하고 유형 02 의 θ/n 사분면과는 분리. 「삼각함수의 정의(점)」「정의(특수각)」「값의 부호」「부호→사분면」은 「삼각함수의 정의와 부호」 한 유형으로 묶되 부호 조건 두 개의 교집합(0478·0479)은 뒤 유형 구역의 「√(sin²θ) 절댓값 벗기기」와 함께 ★2 항목으로 둠. 「삼각함수 사이의 관계(한 값 → 나머지)」(0480)는 「sin±cos 관계」와 별개 유형으로 유지(부호 선택 T-부호가 특징).
- 이 범위 31문 중 29문이 절차형이라 변형 자산으로는 숫자 변형(각·점 좌표·부채꼴 수치 교체)이 주 용도이고, 창의 변형에서 ★ 가 오르는 지점은 (a) 단일 각 환원을 5지 전수 환원으로 바꿀 때(★1→★2 · 유형 01 골조), (b) 사분면 조건을 θ/n 에 적용해 n 의 나머지 분기가 생길 때(★2→★3 · EQV+MI), (c) 부호 조건을 곱(sinθcosθ<0)으로 압축해 두 사분면 답이 될 때(★1→★2 · MI 후보), (d) sin+cos=k 에서 sin−cos 의 부호를 사분면으로 결정할 때(★1→★2~3 · VF 후보), (e) 부채꼴 둘레 고정 넓이 최대(★1→★2~3 · XU)이다.
