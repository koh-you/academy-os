---
name: mechanism-데이터-RPM-GEO-05-p1
description: RPM 기하 05 벡터의 연산(1/2 · 교과서 05-1~05-4 + 유형 01~06) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 기하 (22개정) · 전사본 latex-bank/rpm-geo
  section: 05 벡터의 연산
  unit_code: GEO-05
  part: "1/2"
  extract_range: "73~77쪽 · 0451~0488"
  total_problems: 38
  unit_total: 81
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-geo/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-geo/items/<id>.tex
  image_source: latex-bank/rpm-geo/figures/ (crops.json)
---

# RPM 기하 · 05 벡터의 연산 (1/2) 정독 데이터 (v1.0)

이 파일은 RPM 기하 05 벡터의 연산 중 73~77쪽, 전사본 0451~0488 의 38문항을 다룬다. 구역은 교과서 05-1 벡터의 뜻 · 05-2 덧셈과 뺄셈 · 05-3 실수배 · 05-4 평행(13문)과 유형 01 벡터의 크기 · 02 서로 같은 벡터 · 03 덧셈과 뺄셈 · 04 실수배 · 05 평면도형 · 06 입체도형(25문)이다. 벤더 난이도 신호는 RPM 공통대로 구역이 곧 층이고(교과서 → ★1 출발 · 유형 → 대표문제/난이도 없음 ★2 · 중하 ★1~2 · 중 ★2 · 상중 ★3), 이 범위에는 난이도 표시 하·상, 유형 UP·시험에 꼭 나오는 문제·서술형 주관식·실력 Up 구역, 기출 태그가 없다. 태그는 대표문제 6 · 서술형 2 뿐이다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 사슬) · `insights[]`(유형 코드 + depth + 근거) · `variation_notes`(numeric: 바꿔도 되는 수와 제약 / creative: 통찰 골조를 유지한 변형과 ★ 변동 지점)를 채웠다. 판정 방침: (1) −1 후보(통찰 0 · M_total ≤ 5)는 정의·공식 한 줄로 끝나는 문항에만 적용하고 다단계 절차 문항은 출발점을 유지, (2) +1 은 통찰 2개 이상 또는 depth 2 이상 + M_total ≥ 7 일 때, (3) `insight_type` 은 통찰 2개 이상 또는 depth 2 이상일 때만 통찰형이고 d1 통찰 하나뿐이면 절차형(견본 0041 준거), (4) `depth_score` 는 effective_depth 의 평균(통찰 없으면 0.00), (5) `target_cohort` 는 ★1 하위권 · ★2 중하위권 · ★3 중위권(통찰 유형이 RT·EQV·BW 밖이면 중상위권).

## 문항 데이터

### 교과서 05-1 벡터의 뜻

```yaml
- id: RPM-GEO-0451
  page: 73
  vendor_label: "교과서 05-1 벡터의 뜻"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    AB=3, AD=4 인 직사각형 ABCD 에서 ⑴ 벡터 BC ⑵ 벡터 AC 의 크기.
  category: "벡터의 크기 = 유향선분의 길이 → 변·대각선 길이"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "벡터의 크기(도형의 변·대각선 길이)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    |BC| 는 직사각형의 변이라 AD=4, |AC| 는 대각선이라 √(3²+4²)=5. 정의 확인 한 단계씩. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "벡터의 크기 = 유향선분의 길이 → |BC| = AD = 4 · |AC| = √(3²+4²) = 5"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '(1) $4$ \quad (2) $5$'
  answer_source: "답지"
  figure: "crop:fig-0451.png"
  latex: latex-bank/rpm-geo/items/0451.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 변의 길이를 다른 피타고라스 쌍(5·12, 6·8, 8·15)으로. 제약: 대각선이 정수 또는 간단한 무리수(2·2 → 2√2)가 되게 하고 그림 라벨(AB 세로 · AD 가로)은 고정."
    creative: "(1) 정사각형·마름모의 대각선 벡터 크기(★1) (2) 직육면체 대각선으로 확장 → 세 변 제곱합(★1~2) (3) 정삼각형에서 중선 벡터의 크기 → √3 배 감각(★2)."
```

```yaml
- id: RPM-GEO-0452
  page: 73
  vendor_label: "교과서 05-1 벡터의 뜻"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    한 모서리 1 인 정육면체 ABCD-EFGH 에서 ⑴ AC 와 서로 같은 벡터 ⑵ CD 와 크기가 같고 방향이 반대인 벡터를 모두 찾기.
  category: "서로 같은 벡터·반대 벡터의 정의 → 평행이동으로 겹치는 변·대각선 나열"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "서로 같은 벡터·반대 벡터 찾기(정육면체)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    같은 벡터는 크기와 방향이 모두 같아야 하므로 AC 와 같은 것은 아랫면의 EG 하나. CD 의 반대 벡터는 DC 와, DC 에 평행하고 같은 길이인 모서리 AB, EF, HG. 정의 확인·나열. 교과서·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "같은 벡터 = 크기·방향 일치 → 평행이동으로 AC 에 겹치는 EG · CD 의 반대 = DC 방향 모서리 4개"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '(1) $\overrightarrow{\pt{EG}}$ \quad (2) $\overrightarrow{\pt{DC}}$, $\overrightarrow{\pt{AB}}$, $\overrightarrow{\pt{EF}}$, $\overrightarrow{\pt{HG}}$'
  answer_source: "해설"
  figure: "crop:fig-0452-2.png"
  latex: latex-bank/rpm-geo/items/0452.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모서리 길이는 답에 영향 없음. 기준 벡터를 다른 면대각선(BD → FH)·모서리(AE → BF, CG, DH)로 바꿀 수 있음. 제약: 정육면체 라벨 순서(윗면 ABCD · 아랫면 EFGH 대응) 고정."
    creative: "(1) 개수만 묻기(같은 벡터 개수 + 반대 벡터 개수 · ★1~2) (2) 정팔면체·정사각뿔로 바꾸면 평행 모서리 판정에 단면 인식이 필요 ★2(0469 형) (3) '크기가 같은 벡터' 로 조건을 느슨하게 해 방향 무시 개수 세기(★2 · 면대각선 12개 등)."
```

### 교과서 05-2 벡터의 덧셈과 뺄셈

```yaml
- id: RPM-GEO-0453
  page: 73
  vendor_label: "교과서 05-2 벡터의 덧셈과 뺄셈"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    격자 위에 주어진 두 벡터 a, b 에 대해 ⑴~⑶ a+b 를 그림으로 나타내기(작도).
  category: "벡터 덧셈의 작도(삼각형 법칙: b 의 시점을 a 의 종점으로 평행이동)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "벡터 덧셈의 작도"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    b 를 평행이동해 시점을 a 의 종점에 두고 a 의 시점에서 b 의 종점으로 화살표를 긋는다. 세 경우 모두 격자 칸 수만 세면 된다. 교과서·작도 확인 → ★1. 답은 「풀이 참조」(그림).
  tier: star_1
  mechanism_primary: "b 를 a 의 종점으로 평행이동 → a 시점 → b 종점 화살표 = a+b"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "풀이 참조"
  answer_source: "해설"
  figure: "crop:fig-0453.png"
  latex: latex-bank/rpm-geo/items/0453.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "격자 위 두 벡터의 성분(칸 수)을 자유롭게. 제약: 합이 격자점에 떨어지고 그림 칸 안에 들어오게 · 세 경우에 예각·둔각·반대 방향 배치를 하나씩 유지 · 변형 시 그림 원천을 새로 그려야 함."
    creative: "(1) 평행사변형 법칙으로 같은 답을 작도하게 하기(★1) (2) a+b+c 세 벡터 합 작도(★1) (3) 합의 크기를 격자로 계산하게 하면 성분 개념 선행(★2)."
```

```yaml
- id: RPM-GEO-0454
  page: 73
  vendor_label: "교과서 05-2 벡터의 덧셈과 뺄셈"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    격자 위에 주어진 두 벡터 a, b 에 대해 ⑴~⑶ a-b 를 그림으로 나타내기(작도).
  category: "벡터 뺄셈의 작도(시점을 맞춘 뒤 b 의 종점 → a 의 종점)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "벡터 뺄셈의 작도"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    두 벡터의 시점을 한 점에 맞춘 뒤 b 의 종점에서 a 의 종점으로 화살표(또는 -b 를 a 의 종점에 이어 붙임). 방향 하나만 주의(T-부호). 교과서·작도 → ★1. 답은 「풀이 참조」.
  tier: star_1
  mechanism_primary: "시점 일치 → b 종점 → a 종점 화살표 = a-b (= a+(-b))"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "풀이 참조"
  answer_source: "해설"
  figure: "crop:fig-0454.png"
  latex: latex-bank/rpm-geo/items/0454.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "성분 자유. 제약: 차가 격자점에 떨어지게 · 세 경우 중 하나는 평행(같은 방향) 배치를 넣어 -b 를 붙이는 감각 확인 · 그림 원천 필요."
    creative: "(1) a-b 와 b-a 를 함께 그려 부호·방향 비교(★1) (2) 2a-b 처럼 실수배 결합(★1~2) (3) |a-b| 의 최댓값·최솟값 조건 묻기로 확장(★2~3)."
```

```yaml
- id: RPM-GEO-0455
  page: 73
  vendor_label: "교과서 05-2 벡터의 덧셈과 뺄셈"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    (다음을 간단히 하시오) AB+CD+BC.
  category: "덧셈의 교환·결합 → 종점·시점 연결(AB+BC+CD = AD)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "벡터의 덧셈·뺄셈 간단히 하기(시점·종점 연결)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    순서를 바꿔 AB+BC+CD 로 만들면 종점과 시점이 이어져 AD. 한 단계. 교과서 → ★1.
  tier: star_1
  mechanism_primary: "교환법칙으로 AB+BC+CD 정렬 → 연쇄 소거 → AD"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\overrightarrow{\pt{AD}}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0455.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "점 이름·항 수(3~5개)·순서를 바꿔도 됨. 제약: 재배열하면 한 사슬로 이어지도록 구성."
    creative: "(1) 뺄셈 항 섞기(AB-CB+CD · ★1) (2) 닫힌 사슬로 만들어 영벡터(0456 형 ★1) (3) 조건식이 주어진 뒤 다른 식의 값을 묻는 0474 형으로 확장(★2~3)."
```

```yaml
- id: RPM-GEO-0456
  page: 73
  vendor_label: "교과서 05-2 벡터의 덧셈과 뺄셈"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    (다음을 간단히 하시오) AB+BC+DA+CD.
  category: "재배열 → 닫힌 사슬 AB+BC+CD+DA → 영벡터"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "벡터의 덧셈·뺄셈 간단히 하기(시점·종점 연결)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    AB+BC+CD+DA 로 정렬하면 시점 A 로 돌아오는 닫힌 사슬이라 영벡터. 한 단계. 교과서 → ★1.
  tier: star_1
  mechanism_primary: "AB+BC+CD+DA 로 정렬 → 닫힌 사슬 → 0"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\vec{0}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0456.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "점 개수(4~6)·항 순서 자유. 제약: 모든 점이 시점·종점에 한 번씩 나오게 하면 항상 0 · 한 점을 빼면 0455 형."
    creative: "(1) 뺄셈 항을 섞어 부호 뒤집기(AB-CB-DC+DA · ★1) (2) 다각형 변 벡터의 합이 0 임을 ㄱㄴㄷ 로(0473 형 ★1) (3) 정육각형 세 변 벡터 합 0(0483 ㄴ · SYM ★2)."
```

```yaml
- id: RPM-GEO-0457
  page: 73
  vendor_label: "교과서 05-2 벡터의 덧셈과 뺄셈"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    평행사변형 ABCD 의 두 대각선의 교점 O 에 대해 OA=a, OB=b 일 때 ⑴ BC ⑵ DC 를 a, b 로 나타내기.
  category: "대각선 교점 = 중점 → OC = -a, OD = -b → XY = OY - OX"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평면도형에서 벡터를 두 벡터로 나타내기(평행사변형)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    대각선의 교점이 중점이므로 OC=-a, OD=-b. BC=OC-OB=-a-b, DC=OC-OD=-a+b. 두 줄 계산. 교과서 → ★1.
  tier: star_1
  mechanism_primary: "O 가 두 대각선의 중점 → OC = -a · OD = -b → XY = OY - OX"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '(1) $-\vec{a}-\vec{b}$ \quad (2) $-\vec{a}+\vec{b}$'
  answer_source: "답지"
  figure: "crop:fig-0457.png"
  latex: latex-bank/rpm-geo/items/0457.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준 벡터를 OB·OC 등으로, 묻는 벡터를 AB·AD·BD 등으로 바꿀 수 있음. 제약: 답이 ±a±b 꼴 · 그림 라벨(시계 반대 ABCD) 고정."
    creative: "(1) 기준을 변 벡터 AB=a, AD=b 로 바꿔 대각선을 묻기(★1) (2) 마름모·직사각형 조건을 붙여 크기까지 묻기(★2) (3) 사다리꼴 중점 연결선을 묻으면 실수배가 섞여 ★2."
```

```yaml
- id: RPM-GEO-0458
  page: 73
  vendor_label: "교과서 05-2 벡터의 덧셈과 뺄셈"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    직육면체에서 AB=a, AD=b, AE=c 일 때 ⑴ BD ⑵ EG ⑶ DF ⑷ GA 를 a, b, c 로 나타내기.
  category: "꼭짓점 A 기준 위치 벡터(AF = a+c, AG = a+b+c, AH = b+c) → XY = AY - AX"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "입체도형에서 벡터를 세 벡터로 나타내기(직육면체)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    A 를 시점으로 각 꼭짓점을 a, b, c 의 합으로 두면 BD=b-a, EG=a+b, DF=AF-AD=a-b+c, GA=-(a+b+c) 모두 한 줄. 소문항 넷이지만 같은 절차 반복. 교과서 → ★1.
  tier: star_1
  mechanism_primary: "A 기준 위치 벡터(AF = a+c, AG = a+b+c, AH = b+c) → XY = AY - AX"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '(1) $-\vec{a}+\vec{b}$ \quad (2) $\vec{a}+\vec{b}$ \quad (3) $\vec{a}-\vec{b}+\vec{c}$ \quad (4) $-\vec{a}-\vec{b}-\vec{c}$'
  answer_source: "해설"
  figure: "crop:fig-0458.png"
  latex: latex-bank/rpm-geo/items/0458.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "묻는 벡터를 다른 면대각선·공간대각선(HB, CE)으로. 제약: 세 기준 벡터가 한 꼭짓점에서 나가는 모서리로 고정 · 라벨(윗면 ABCD · 아랫면 EFGH) 고정."
    creative: "(1) 중점을 하나 넣어 1/2 계수 포함(0486 형 ★1~2) (2) la+mb+nc 로 나타내 계수 조합을 묻기(0471 형 ★1~2) (3) 정팔면체로 바꾸면 기준 벡터가 모서리와 평행하지 않아 단면 인식 필요 ★2(0487 형)."
```

### 교과서 05-3 벡터의 실수배

```yaml
- id: RPM-GEO-0459
  page: 73
  vendor_label: "교과서 05-3 벡터의 실수배"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    (다음을 간단히 하시오) 3(a+2b)+2(a-4b).
  category: "분배법칙 → 동류항 정리"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "벡터의 실수배 계산(분배·동류항)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    분배하면 3a+6b+2a-8b=5a-2b. 다항식 정리와 같은 한 줄. 교과서 → ★1.
  tier: star_1
  mechanism_primary: "분배 → 3a+6b+2a-8b → 5a-2b"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$5\vec{a}-2\vec{b}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0459.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 자유. 제약: 결과의 두 계수가 모두 0 이 아니게(한 항이 소거되는 변형은 의도적으로만)."
    creative: "(1) 세 벡터 a, b, c 로 항 늘리기(★1) (2) 분수 계수(★1) (3) 등식으로 바꿔 미지 벡터 x 를 구하게 하기(0461 형 ★1)."
```

```yaml
- id: RPM-GEO-0460
  page: 73
  vendor_label: "교과서 05-3 벡터의 실수배"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    (다음을 간단히 하시오) 4(3b-a)-3(2a-b).
  category: "분배법칙(음수 부호) → 동류항 정리"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "벡터의 실수배 계산(분배·동류항)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    -4a+12b-6a+3b=-10a+15b. 괄호 앞 음수 부호(T-부호) 하나만 주의. 교과서 → ★1.
  tier: star_1
  mechanism_primary: "분배 → -4a+12b-6a+3b → -10a+15b (부호 주의)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-10\vec{a}+15\vec{b}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0460.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수·항 순서(3b-a 처럼 b 가 앞에 오는 배치 유지) 자유. 제약: 괄호 앞 음수를 하나는 남겨 부호 골조 유지."
    creative: "(1) 괄호 세 개(★1) (2) 결과를 ma+nb 로 두고 m+n 묻기(★1) (3) 결과가 a 에 평행하도록 하는 계수 조건(0463 형 ★1~2)."
```

```yaml
- id: RPM-GEO-0461
  page: 73
  vendor_label: "교과서 05-3 벡터의 실수배"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    (등식을 만족시키는 벡터 x 를 a, b 로 나타내기) a-x = 2a-5b.
  category: "벡터 등식을 x 에 대해 풀기(이항)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "벡터 등식에서 미지 벡터 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x = a-(2a-5b) = -a+5b. 일차방정식 이항과 같은 한 줄. 교과서 → ★1.
  tier: star_1
  mechanism_primary: "x = a - (2a-5b) → -a+5b"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\vec{x}=-\vec{a}+5\vec{b}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0461.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 자유. 제약: x 의 계수가 ±1 이면 한 줄, 2x 처럼 두면 나눗셈 한 단계 추가(★1 유지)."
    creative: "(1) 양변에 괄호를 두어 분배 먼저(0462 형 ★1) (2) x 가 두 식에 걸친 연립(0476 형 ★2) (3) x = ma+nb 로 두고 계수 조합 묻기(0478 형 ★1)."
```

```yaml
- id: RPM-GEO-0462
  page: 73
  vendor_label: "교과서 05-3 벡터의 실수배"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    (등식을 만족시키는 벡터 x 를 a, b 로 나타내기) 3(x+2a-3b) = 2a-3b+x.
  category: "분배 → x 항 모으기 → 나누기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "벡터 등식에서 미지 벡터 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    3x+6a-9b = x+2a-3b → 2x = -4a+6b → x = -2a+3b. 일차방정식 절차 세 줄. 교과서 → ★1.
  tier: star_1
  mechanism_primary: "전개 3x+6a-9b = x+2a-3b → 2x = -4a+6b → x = -2a+3b"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\vec{x}=-2\vec{a}+3\vec{b}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0462.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "괄호 안 계수·양변 x 계수 자유. 제약: x 계수 차가 0 이 아니고 결과 계수가 정수가 되게."
    creative: "(1) 양변 모두 괄호(★1) (2) 두 미지 벡터 x, y 연립(0476 형 ★2) (3) 결과 x 가 a 와 평행할 조건으로 매개변수 도입(★2)."
```

### 교과서 05-4 벡터의 평행

```yaml
- id: RPM-GEO-0463
  page: 73
  vendor_label: "교과서 05-4 벡터의 평행"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    영벡터가 아니고 평행하지 않은 a, b 에 대해 a-2b 와 4a+kb 가 평행하도록 하는 실수 k.
  category: "평행 조건 → 4a+kb = m(a-2b) → 계수 비교"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 벡터의 평행 조건(실수배·계수 비교)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    평행 ⇔ 한 벡터가 다른 벡터의 실수배. 4a+kb = m(a-2b) 에서 a, b 가 평행하지 않으므로 계수 비교 m=4, k=-2m=-8. 미지수 k 로 Mₐ 2 이지만 표준 절차. 교과서 → ★1.
  tier: star_1
  mechanism_primary: "평행 ⇔ 4a+kb = m(a-2b) → (a, b 평행 아님) 계수 비교 → m=4 · k=-8"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0463.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 벡터의 계수(a-2b, 4a+kb)를 자유롭게. 제약: k 가 정수가 되게 비례식 정리 · a, b 가 평행하지 않다는 조건은 유지."
    creative: "(1) 두 벡터 모두에 미지수를 넣어 두 문자 관계식 묻기(★2) (2) 세 점 공선 조건으로 바꿔 위치 벡터와 결합(★2 · 다음 단원) (3) '평행하지 않을 조건' 으로 뒤집어 k 의 제외값 묻기(★1)."
```

### 유형 01 벡터의 크기

```yaml
- id: RPM-GEO-0464
  page: 74
  vendor_label: "유형 01 벡터의 크기"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    한 변 2 인 정육각형 ABCDEF 에서 |AD| × |FB| 의 값.
  category: "정육각형 긴 대각선(변의 2배)·짧은 대각선(변의 √3 배) 길이 → 곱"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "벡터의 크기(정육각형 대각선)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    AD 는 중심을 지나는 긴 대각선이라 2·2=4, FB 는 ∠A=120° 인 이등변삼각형 FAB 의 밑변이라 2√3. 곱 8√3. 통찰 없음·M_total 4 로 −1 후보이지만 긴·짧은 대각선 두 길이 사실을 모두 써야 하고(짧은 대각선은 30-60-90 도출) 유형의 대표 골조라 ★2 유지.
    [분류 이슈] 대표문제·M_total 4 — 정의 한 줄 문항으로 보면 ★1 후보.
  tier: star_2
  mechanism_primary: "|AD| = 2·변 = 4 → |FB| = √3·변 = 2√3 (∠A=120° 이등변) → 곱 8√3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$8\sqrt{3}$'
  answer_source: "답지"
  figure: "crop:fig-0464.png"
  latex: latex-bank/rpm-geo/items/0464.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "변의 길이(1, 3, 2√3)를 바꿈. 제약: 곱이 k√3 꼴로 정리되게 · 라벨 ABCDEF 순서 고정 · 긴 대각선·짧은 대각선을 하나씩 고르도록 유지."
    creative: "(1) |AD+FB| 처럼 합의 크기를 묻기 → 덧셈 작도 뒤 길이(★2~3) (2) 정팔각형·정십이각형으로 바꾸면 대각선 길이에 삼각비 필요(★3) (3) 중심 O 를 넣어 |OA+OB| 등 마름모 대각선 길이(★2)."
```

```yaml
- id: RPM-GEO-0465
  page: 74
  vendor_label: "유형 01 벡터의 크기"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    FG=2, GH=1, DH=3 인 직육면체에서 벡터 BH 의 크기. 5지선다.
  category: "공간대각선 길이 √(a²+b²+c²)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "벡터의 크기(직육면체 대각선)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    BH 는 직육면체의 공간대각선이므로 √(2²+1²+3²)=√14. 공식 한 줄. 벤더 중하(★1~2)·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "BH = 공간대각선 → √(2²+1²+3²) = √14"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "⑤"
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0465.png"
  latex: latex-bank/rpm-geo/items/0465.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 모서리 길이 자유(1·2·2 → 3, 2·3·6 → 7 처럼 정수 대각선도 가능). 제약: 선택지 다섯이 서로 다른 √n 꼴 · 그림에서 세 길이가 서로 다른 모서리에 붙도록."
    creative: "(1) 면대각선과 공간대각선 크기의 곱·비(★1~2) (2) 정사각뿔에서 옆모서리 벡터 크기(높이·밑면으로 계산 · ★2) (3) |BH| 가 주어지고 한 모서리 길이를 역으로 묻기(★2 · BW d1)."
```

```yaml
- id: RPM-GEO-0466
  page: 74
  vendor_label: "유형 01 벡터의 크기"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    한 변 4 인 정삼각형 ABC 에서 변 BC 위의 점 P 에 대해 |AP| 의 최솟값.
  category: "|AP| 최소 ⇔ AP ⊥ BC → 정삼각형의 높이"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "|AP| 의 최솟값 → 점 A 와 직선 BC 사이의 거리(수선의 발)로 조건 해석"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "벡터의 크기의 최솟값(점과 직선의 거리)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    |AP| 는 A 에서 변 BC 위 점까지의 거리이므로 최소는 수선의 발일 때, 정삼각형의 높이 4·√3/2 = 2√3. 조건을 '거리의 최소 = 수선' 으로 옮기는 EQV d1 하나·M_total 4. 벤더 중 → ★2 유지.
    [분류 이슈] '최솟값 → 수선의 발' 을 표준 사실로 보면 절차형 ★1~2 — d1 인정 여부가 갈림.
  tier: star_2
  mechanism_primary: "|AP| 최소 ⇔ P 가 A 에서 BC 에 내린 수선의 발 → 높이 = 2√3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2\sqrt{3}$'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0466.png"
  latex: latex-bank/rpm-geo/items/0466.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "변의 길이 자유(높이는 √3/2 배). 이등변삼각형(밑변·높이 지정)으로 바꿔도 같은 골조. 제약: 수선의 발이 변 BC 안에 떨어지도록(둔각 삼각형 금지)."
    creative: "(1) |AP| 의 최댓값도 함께(꼭짓점 B 또는 C · 경계 검토 ★2) (2) P 의 범위를 변 → 삼각형 둘레·내부로 바꿔 범위 묻기(★2~3) (3) |AP+AQ| 처럼 두 점을 두면 중점 활용이 필요 ★3(다음 단원 위치벡터)."
```

### 유형 02 서로 같은 벡터

```yaml
- id: RPM-GEO-0467
  page: 74
  vendor_label: "유형 02 서로 같은 벡터"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    삼각형 ABC 의 세 변 AB, BC, CA 의 중점 D, E, F 에 대해 AF 와 서로 같은 벡터 고르기. 5지선다.
  category: "중점연결정리 → DE ∥ AC, DE = AC/2 = AF (같은 방향)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "서로 같은 벡터 찾기(삼각형 중점연결)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    DE 는 중점연결선이라 AC 와 평행하고 길이가 절반이며 방향도 A→C 와 같으므로 AF=DE. 사실 하나 확인. 유형 대표 ★2 출발이나 통찰 없음·M_total 4·한 사실 확인 → −1 적용 ★1.
  tier: star_1
  mechanism_primary: "F 중점 → AF = AC/2 → 중점연결정리 DE = AC/2 (같은 방향) → DE"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "③"
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0467.png"
  latex: latex-bank/rpm-geo/items/0467.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "묻는 벡터를 BD·CE 등 다른 반변 벡터로, 보기의 오답을 방향 반대(ED·FA)로 구성. 제약: 그림 라벨 D∈AB, E∈BC, F∈CA 고정."
    creative: "(1) 같은 벡터의 개수 묻기(중점 포함 6개 점 · ★2) (2) 평행사변형 네 변의 중점 그림에서 같은 벡터 짝 고르기(★1~2) (3) 크기만 같은 벡터·방향만 같은 벡터를 구별하는 ㄱㄴㄷ(★2)."
```

```yaml
- id: RPM-GEO-0468
  page: 74
  vendor_label: "유형 02 서로 같은 벡터"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    정육각형 ABCDEF 의 세 대각선 교점 O 에 대해 서로 같은 벡터끼리 짝 지은 것 고르기. 5지선다.
  category: "정육각형의 평행·같은 길이 선분 → 방향까지 일치하는 짝 판정"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "서로 같은 벡터 찾기(정육각형)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    보기마다 크기·방향을 확인: AO·DO 는 방향 반대, OC·OF 도 반대, CD·OE 는 평행·같은 길이·같은 방향이라 같음(③). FB·FD, AD·CF 는 방향이 다름. 방향 반대를 '같다' 로 보는 T-부호 함정 하나. 벤더 중하·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "정육각형 = 정삼각형 6개 → 각 보기의 두 선분이 평행·같은 길이인지 → 방향(시점→종점)까지 일치하는 짝 = CD·OE"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "③"
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0468.png"
  latex: latex-bank/rpm-geo/items/0468.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "보기의 짝을 (AB, ED)·(BC, OE)·(AO, OD) 등으로 교체. 제약: 정답 짝 하나만 방향까지 같게 · 오답에 '크기만 같고 방향 반대' 짝을 최소 둘 배치 · 라벨 고정."
    creative: "(1) 개수 세기(AB 와 같은 벡터의 개수 · 7개 점 · ★2) (2) 정육면체(0452)·정팔면체(0469)로 확장 ★2 (3) '크기가 같은 벡터의 개수' 로 바꾸면 대각선 종류 구분 필요 ★2."
```

```yaml
- id: RPM-GEO-0469
  page: 74
  vendor_label: "유형 02 서로 같은 벡터"
  vendor_level: "중하"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    정팔면체 ABCDEF 의 꼭짓점을 시점·종점으로 하는 벡터 중 AB 와 같은 벡터의 개수 a, AC 와 크기가 같고 방향이 반대인 벡터의 개수 b 에 대해 a+b.
  category: "정팔면체 단면 정사각형 인식 → 평행 모서리 짝 → 개수"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "정팔면체를 정사각형 단면(ABFD · ACFE)으로 보아 AB ∥ DF, AC ∥ EF 를 읽음(입체 → 평면 단면)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "서로 같은 벡터·반대 벡터의 개수(정팔면체)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    네 점 A, B, F, D 는 한 정사각형을 이루므로 AB 와 같은 벡터는 DF 하나(a=1, AB 자신 제외). 같은 이유로 AC 의 반대 벡터는 CA 와 FE 둘(b=2). 합 3. 입체를 정사각형 단면으로 읽는 RT d1 하나·서술형. 벤더 중하 → ★2.
  tier: star_2
  mechanism_primary: "ABFD 가 정사각형 → AB = DF (a=1) · ACFE 정사각형 → AC 의 반대 = CA, FE (b=2) → 3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$3$'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0469.png"
  latex: latex-bank/rpm-geo/items/0469.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준 벡터를 다른 모서리(BC, AE)로 바꿔도 값은 그대로(a=1, b=2). 제약: 정팔면체 라벨(A 위 · F 아래 · BCDE 가운데 정사각형 순서) 고정 · 'AB 자신은 제외' 규칙을 답과 일관되게."
    creative: "(1) 크기가 같은 벡터의 개수(모서리 12개 → 유향 24개 · ★2) (2) 정육면체에서 면대각선과 같은 벡터 개수(★2) (3) 정삼각기둥·정사각뿔로 바꾸면 평행 모서리가 달라 케이스 검토 ★2~3."
```

### 유형 03 벡터의 덧셈과 뺄셈

```yaml
- id: RPM-GEO-0470
  page: 75
  vendor_label: "유형 03 벡터의 덧셈과 뺄셈"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    정육각형 ABCDEF 의 중심 O 에 대해 OA=a, OB=b 일 때 보기 ㄱ~ㄹ(OE=-b · AB=a-b · DE=-a+b · EA=a+b)의 참·거짓을 있는 대로 고르기.
  category: "중심 대칭 OD = -a, OE = -b → XY = OY - OX 로 각 보기 판정"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정육각형에서 벡터의 덧셈·뺄셈(ㄱㄴㄷ 판정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    O 가 중심이므로 OD=-a, OE=-b(ㄱ 참). AB=OB-OA=b-a 라 ㄴ 거짓, DE=OE-OD=a-b 라 ㄷ 거짓, EA=OA-OE=a+b 로 ㄹ 참. 보기 넷 각각 부호 판정(T-부호). 유형 대표·M_total 5 → 사실 넷을 각각 계산해야 하므로 ★2 유지.
  tier: star_2
  mechanism_primary: "OD = -a, OE = -b → XY = OY - OX → ㄱ·ㄹ 참"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "ㄱ, ㄹ"
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0470.png"
  latex: latex-bank/rpm-geo/items/0470.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준 벡터를 OA·OC 처럼 인접하지 않은 쌍으로 바꾸면 OB = a+c 꼴 분해가 추가. 보기 항목의 부호를 뒤집어 정답 조합 교체. 제약: 정답 보기 수 2개 유지 · 그림 라벨 고정."
    creative: "(1) 기준을 변 벡터 AB=a, AF=b 로 바꾸면 중심 경유 분해 필요(0480 형 ★2) (2) 보기에 2OE=… 처럼 실수배 섞기(0483 형 ★2) (3) 정육각형 → 정팔각형이면 중심각 45° 로 분해가 어려워 ★3."
```

```yaml
- id: RPM-GEO-0471
  page: 75
  vendor_label: "유형 03 벡터의 덧셈과 뺄셈"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    정육면체에서 HE=a, HG=b, HD=c 일 때 AG = la+mb+nc 를 만족시키는 l, m, n 에 대해 l-m+n.
  category: "H 기준 위치 벡터 → HA = a+c, HG = b → AG = HG - HA"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "입체도형에서 벡터를 세 벡터로 나타내기(정육면체·계수)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    A 는 E 의 바로 위이므로 HA=a+c, HG=b. AG=HG-HA=-a+b-c 에서 l=-1, m=1, n=-1 → l-m+n=-3. 계산 한 줄. 벤더 중하·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "HA = a+c · HG = b → AG = HG - HA = -a+b-c → l-m+n = -3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-3$'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0471.png"
  latex: latex-bank/rpm-geo/items/0471.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "묻는 벡터를 다른 공간대각선(BH, CE)·면대각선으로, 계수 조합식(l+m+n, lmn)을 바꿈. 제약: 기준 벡터 세 개가 한 꼭짓점(H)에서 나가는 모서리로 고정 · 라벨 고정."
    creative: "(1) 중점 M 을 넣어 계수에 1/2 포함(★1~2) (2) 기준 벡터를 면대각선 HF, HC, HA 로 주면 연립이 필요 ★2~3 (3) 정팔면체로 바꾸면 단면 인식 필요(0487 형 ★2)."
```

```yaml
- id: RPM-GEO-0472
  page: 75
  vendor_label: "유형 03 벡터의 덧셈과 뺄셈"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    정육각형 ABCDEF 에서 AB=a, BC=b, CD=c 일 때 a+b-c 와 서로 같은 벡터 고르기. 5지선다.
  category: "-c = DC = FA (마주보는 변) → FA+AB+BC = FC"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "-CD 를 마주보는 변 벡터 FA 로 바꾸어 a+b-c 를 한 사슬 FA+AB+BC 로 잇기"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "정육각형에서 벡터의 덧셈·뺄셈(같은 벡터 치환)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a+b=AC 까지는 바로 되지만 -c 는 그대로 이어지지 않는다. 정육각형에서 CD 와 AF 가 평행·같은 길이·반대 방향이므로 -c=FA. 그러면 FA+AB+BC=FC(⑤). 치환 착안 EQV d1 하나·M_total 4. 벤더 중하 → ★2.
  tier: star_2
  mechanism_primary: "-c = DC = FA → FA+AB+BC = FC"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: "crop:fig-0472.png"
  latex: latex-bank/rpm-geo/items/0472.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "식을 a-b+c, -a+b+c 등으로 바꾸면 답이 다른 대각선이 됨. 제약: 결과가 꼭짓점 사이 벡터로 떨어지게(정육각형에서 ±a±b±c 는 항상 가능) · 보기에 방향 반대 벡터를 오답으로."
    creative: "(1) 중심 O 를 추가해 a+b+c 를 OD 와 비교(★2) (2) 변 길이를 주고 결과 벡터의 크기(√3 배 · ★2~3) (3) 정팔각형이면 마주보는 변 치환은 유지되나 대각선 길이에 삼각비 필요 ★3."
```

```yaml
- id: RPM-GEO-0473
  page: 75
  vendor_label: "유형 03 벡터의 덧셈과 뺄셈"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    서로 다른 세 점 A, B, C 에 대해 보기 ㄱ~ㄷ(AB+0=BA · CB-CA+BA=0 · AB+BC+CA=0)의 참·거짓. 5지선다.
  category: "영벡터·뺄셈 정의·닫힌 사슬 → 참·거짓"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "벡터 연산의 성질 판정(ㄱㄴㄷ)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    AB+0=AB≠BA(ㄱ 거짓), CB-CA=AB 이므로 ㄴ 은 AB+BA=0 참, ㄷ 은 닫힌 사슬로 참 → ⑤. 정의 확인 셋. 벤더 중하·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "CB - CA = AB · AB + BA = 0 · 닫힌 사슬 = 0 → ㄴ, ㄷ"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0473.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "보기 항목의 점 이름·부호를 바꿔 정답 조합 교체. 제약: '뺄셈을 시점 공통으로 바꾸는 항목' 하나는 유지."
    creative: "(1) 네 점으로 늘려 AB+CD 와 AD+CB 가 같음을 넣기(★1~2) (2) |AB+BC| 와 |AC| 비교 같은 크기 항목 추가(★2) (3) 조건식이 주어진 뒤 다른 식을 묻는 0474 형으로 확장 ★2~3."
```

```yaml
- id: RPM-GEO-0474
  page: 75
  vendor_label: "유형 03 벡터의 덧셈과 뺄셈"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    서로 다른 일곱 점에 대해 GA-GB+GC-GD+GE=0 일 때 FA+BF+FC+DF+FE 와 항상 같은 벡터 고르기. 5지선다.
  category: "구하는 식의 시점을 G 로 통일 → 조건식 부분 소거 → -GF"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "다섯 벡터를 모두 G 시점으로 바꿔 쓰면 부호 배열(+-+-+)이 조건식과 일치해 조건식 부분이 통째로 0 이 되고 -GF 만 남음을 읽음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "시점 통일로 벡터 조건식 활용하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    FA=GA-GF, BF=GF-GB, … 로 다섯 항을 G 시점으로 쓰면 (GA-GB+GC-GD+GE)+(-GF+GF-GF+GF-GF) = 0-GF = FG(③). 시점 통일 뒤 조건식과 같은 부호 배열을 알아보는 것이 핵심(EQV d2). 추상 점 일곱·항 열 개 정리로 M_total 7(이 범위 최고). 벤더 중 ★2 출발 → M_total 7·d2 통찰로 +1 → ★3.
    [분류 이슈] +1 근거가 '통찰 2개 또는 depth 3' 규칙 밖(M_total 7 + d2) — 규칙대로면 ★2.
  tier: star_3
  mechanism_primary: "각 항을 G 시점으로 (XY = GY - GX) → 조건식 부분 = 0 → 남는 -GF = FG"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0474.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "점의 개수(5~7)·부호 배열·조건식의 시점 이름을 바꿀 수 있음. 제약: 구하는 식의 부호 배열이 조건식과 정확히 대응 · F 가 홀수 번 남아 답이 ±GF 가 되게(짝수면 0 → ⑤ 함정으로 쓸 수 있음)."
    creative: "(1) 조건 없이 AB+CD+… 닫힌 사슬 정리(★1) (2) 조건식을 두 개 주고 결합(★3 · CON) (3) 시점을 통일하지 않고 사슬 연결만으로 풀리게 짜면 ★2 로 내려감(통찰 소거 지점)."
```

```yaml
- id: RPM-GEO-0475
  page: 75
  vendor_label: "유형 03 벡터의 덧셈과 뺄셈"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    서로 다른 네 점 O, A, B, C 에 대해 OA=a, OB=b, OC=c 이고 a-b=c 일 때 사각형 OBAC 가 어떤 사각형인지.
  category: "a-b = BA = OC → 한 쌍의 대변이 평행·같은 길이 → 평행사변형"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "벡터 등식 a-b=c 를 BA=OC 로 읽어 도형 조건(대변 평행·같은 길이)으로 번역"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "벡터 등식이 나타내는 사각형 판정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a-b=OA-OB=BA 이므로 조건은 BA=OC. 사각형 OBAC 에서 BA 와 OC 는 대변이고 평행·같은 길이이므로 평행사변형(대각선 OA, BC 가 서로를 이등분). 대수 → 기하 번역 RT d1 하나·M_total 4. 벤더 중 → ★2.
  tier: star_2
  mechanism_primary: "a-b = BA · 조건 → BA = OC → 대변 평행·같은 길이 → 평행사변형"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "평행사변형"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0475.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "조건을 a+b=c(사각형 OACB), b-a=c 등으로 바꾸면 꼭짓점 순서가 달라짐. 제약: 답이 평행사변형이 되도록 사각형 이름의 순서 확인 · 네 점이 서로 다르고 한 직선 위에 있지 않다는 전제."
    creative: "(1) |a|=|b| 를 추가해 마름모 판정(★2) (2) |a-b|=|a+b| 조건으로 직사각형(다음 단원 내적 연결 ★3) (3) 사각형 이름을 고르는 5지선다로 ★2 유지."
```

### 유형 04 벡터의 실수배

```yaml
- id: RPM-GEO-0476
  page: 76
  vendor_label: "유형 04 벡터의 실수배"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    2x+y=5a, 3x-y=b 일 때 x+y 를 a, b 로 나타내기. 5지선다.
  category: "벡터 연립 등식 → 가감법 → x, y → 합"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "벡터의 연립 등식 풀기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 식을 더해 5x=5a+b, x=a+b/5. y=5a-2x=3a-2b/5. x+y=4a-b/5(④). 가감법 세 줄·분수 계수 정리. 유형 대표 ★2 출발·M_total 5 → 다단계 절차라 −1 미적용, ★2.
  tier: star_2
  mechanism_primary: "두 식 합 → x = a + b/5 → y = 5a - 2x → x+y = 4a - b/5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0476.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수(2, 1, 3, -1, 5)를 바꿔도 됨. 제약: 두 식의 계수 행렬식이 0 이 아니게 · 답의 계수가 선택지에 맞는 간단한 분수 · 묻는 조합(x+y, x-y, 2x+y) 변경 가능."
    creative: "(1) x, y 각각의 계수 합을 묻기(★2) (2) 세 벡터 a, b, c 로 늘려 정리 부담 ↑(★2) (3) 두 식을 더하면 바로 x+y 가 나오도록 계수를 짜면 ★1 로 내려감(가감법 인식 지점)."
```

```yaml
- id: RPM-GEO-0477
  page: 76
  vendor_label: "유형 04 벡터의 실수배"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    p=a+2b-3c, q=-a+2b+c 일 때 2p+3(-p+q) 를 a, b, c 로 나타내기. 5지선다.
  category: "식을 -p+3q 로 먼저 정리 → 대입 → 동류항"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "벡터의 실수배 계산(대입·동류항)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    2p+3(-p+q)=-p+3q 로 정리한 뒤 대입하면 -(a+2b-3c)+3(-a+2b+c)=-4a+4b+6c(②). 정리 → 대입 두 단계·부호 주의. 벤더 중하·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "2p-3p+3q = -p+3q → 대입 → -4a+4b+6c"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0477.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "p, q 의 계수와 바깥 식(2p+3(-p+q))의 계수 자유. 제약: 바깥 식이 정리되어 계수가 간단해지도록 · 선택지에 부호만 다른 오답 포함."
    creative: "(1) 정리 없이 곧장 대입하면 항이 12개 → 정리 먼저의 이점(★1) (2) 세 식 p, q, r 로 확장(★1~2) (3) 결과의 계수 합·크기 조건을 덧붙여 실수 값 묻기(★2)."
```

```yaml
- id: RPM-GEO-0478
  page: 76
  vendor_label: "유형 04 벡터의 실수배"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    -(x-2a+b)=a+b 를 만족시키는 x=ma+nb 에 대해 3m+n 의 값(m, n 실수).
  category: "괄호 부호 처리 → x 이항 → 계수 읽기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "벡터 등식에서 미지 벡터의 계수"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    -x+2a-b=a+b 에서 x=a-2b, m=1, n=-2, 3m+n=1. 괄호 앞 음수 부호(T-부호) 하나만 주의. 벤더 중하·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "-x+2a-b = a+b → x = a-2b → 3m+n = 1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0478.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "괄호 안 계수·우변·묻는 조합(3m+n, mn) 변경. 제약: 결과 계수 정수 · 괄호 앞 음수 부호 유지(함정 골조)."
    creative: "(1) 등식 두 개로 x, y 연립(0476 형 ★2) (2) k(x-a)=… 로 k 를 매개변수로 두면 Mₐ ↑ ★2 (3) 선택지 없이 순서쌍 (m, n) 을 묻기 ★1."
```

```yaml
- id: RPM-GEO-0479
  page: 76
  vendor_label: "유형 04 벡터의 실수배"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    길이 12 인 선분 AB 위의 점 P 가 AP = -2BP 를 만족할 때 |AP|.
  category: "AP = -2BP → 반대 방향·|AP| = 2|BP| → P 는 AB 를 2:1 로 내분 → 8"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "벡터 등식 AP = -2BP 를 '반대 방향·크기 2배' 로 읽어 P 의 위치(2:1 내분점)로 번역"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "벡터 등식으로 선분 위 점의 위치 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    AP=-2BP=2PB 이므로 P 는 A 와 B 사이에 있고 AP:PB=2:1. 12 를 2:1 로 나누면 |AP|=8. 등식 → 내분 위치 번역 RT d1 하나·M_total 4. 벤더 중 → ★2.
  tier: star_2
  mechanism_primary: "AP = 2PB → AP:PB = 2:1 → |AP| = 12·2/3 = 8"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$8$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0479.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "선분 길이·비(-3, -1/2)를 바꿈. 제약: 계수가 음수여야 P 가 내분점(양수면 P 가 선분 밖 → '선분 위' 설정과 충돌하므로 금지) · 길이가 (비의 합)의 배수."
    creative: "(1) 계수를 양수(AP = 2BP)로 두고 '직선 AB 위' 로 바꾸면 외분점 → ★2~3(부호 해석) (2) |AP|+|BP| 대신 |AP-BP| 를 묻기 ★2 (3) 삼각형 안의 점 P 에 대해 PA+2PB=0 꼴로 확장(★3 · 다음 단원)."
```

### 유형 05 평면도형에서 벡터의 연산

```yaml
- id: RPM-GEO-0480
  page: 76
  vendor_label: "유형 05 평면도형에서 벡터의 연산"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    정육각형 ABCDEF 에서 AB=a, AF=b 일 때 AE = ma+nb 를 만족시키는 m, n 에 대해 m+n.
  category: "AE = AF + FE · FE = AO = a+b (마름모 ABOF) → a+2b"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "중심 O 를 경유해 FE = AO = a+b 로 분해(정육각형을 마름모·평행사변형 조각으로 읽음)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "평면도형에서 벡터를 두 벡터로 나타내기(정육각형)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    중심 O 에 대해 ABOF 가 마름모이므로 AO=a+b, 또 FE=AO. 따라서 AE=AF+FE=b+(a+b)=a+2b, m+n=3. 중심 경유 분해 RT d1 하나·M_total 5. 유형 대표 → ★2.
  tier: star_2
  mechanism_primary: "AO = a+b (마름모 ABOF) → FE = AO → AE = b + (a+b) = a+2b → m+n = 3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$3$'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0480.png"
  latex: latex-bank/rpm-geo/items/0480.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "묻는 벡터를 AC(=2a+b), AD(=2a+2b), BE 등으로 바꿈. 제약: 기준 두 벡터가 한 꼭짓점의 두 변으로 고정 · 계수 정수 · 라벨 고정."
    creative: "(1) 기준을 AB=a, AC=b 처럼 변+대각선으로 주면 연립 필요 ★3 (2) 중심 O 와 중점 M 을 넣어 1/2 계수(★2~3) (3) 정육각형 → 정팔각형이면 대각선 분해에 삼각비가 들어와 ★3~4."
```

```yaml
- id: RPM-GEO-0481
  page: 76
  vendor_label: "유형 05 평면도형에서 벡터의 연산"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    삼각형 PQR 에서 PQ, PR 의 중점 M, N, PQ=a, PR=b 일 때 보기 ①~⑤(PM · RN · QR · MR · MN 의 표현) 중 옳지 않은 것.
  category: "P 기준 위치 벡터(PM = a/2, PN = b/2) → 각 보기 XY = PY - PX 확인"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평면도형에서 벡터를 두 벡터로 나타내기(삼각형 중점)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    PM=a/2, PN=b/2 로 두면 RN=-b/2, QR=b-a, MR=b-a/2, MN=b/2-a/2. ④ 는 MR 의 두 계수를 뒤바꾼 것이라 거짓. 다섯 보기를 각각 한 줄씩 확인. 벤더 중하·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "PM = a/2 · PN = b/2 → XY = PY - PX → ④ MR = b - a/2 (≠ b/2 - a)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "④"
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0481.png"
  latex: latex-bank/rpm-geo/items/0481.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "중점을 삼등분점(1/3, 2/3)으로, 오답 보기를 다른 항목으로 교체. 제약: 오답 하나만 계수 교환 함정 · 그림 라벨(M∈PQ, N∈PR) 고정."
    creative: "(1) 두 중선의 교점 G 를 넣어 무게중심 표현(0482 형 ★2) (2) MN 이 QR 의 절반(중점연결정리)임을 벡터로 보이는 서술형(★2) (3) M, N 을 임의의 비 t 로 두면 Mₐ ↑ ★2~3."
```

```yaml
- id: RPM-GEO-0482
  page: 76
  vendor_label: "유형 05 평면도형에서 벡터의 연산"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    삼각형 ABC 의 세 중선 AQ, BR, CP 의 교점 G 에 대해 AB=a, AC=b 일 때 GR 을 a, b 로 나타내기(R 은 AC 의 중점).
  category: "AQ = (a+b)/2 → AG = (2/3)AQ = (a+b)/3 → GR = AR - AG"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평면도형에서 벡터를 두 벡터로 나타내기(무게중심)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    Q 가 BC 의 중점이라 AQ=(a+b)/2, 무게중심은 중선을 2:1 로 나누므로 AG=(a+b)/3. AR=b/2 에서 GR=b/2-(a+b)/3=-a/3+b/6. 무게중심 2:1·중점 공식은 표준이고 분수 정리 세 단계·통찰 없음. 벤더 중 → 다단계 절차라 −1 미적용, ★2.
  tier: star_2
  mechanism_primary: "AQ = (a+b)/2 → AG = (a+b)/3 → GR = AR - AG = b/2 - (a+b)/3 = -a/3 + b/6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-\dfrac{1}{3}\vec{a}+\dfrac{1}{6}\vec{b}$'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0482.png"
  latex: latex-bank/rpm-geo/items/0482.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "묻는 벡터를 GP, GQ, BG 등으로. 제약: 무게중심 2:1 유지 · 답 계수의 분모가 6 이하 · 라벨(P∈AB, Q∈BC, R∈CA) 고정."
    creative: "(1) GP+GQ+GR=0 을 보이는 서술형(★2 · SYM 착안 시 ★3) (2) 무게중심 대신 내심·외심으로 바꾸면 비율 정보가 없어 ★3~4(다음 단원) (3) 임의의 점 O 기준 OG = (OA+OB+OC)/3 유도 ★3."
```

```yaml
- id: RPM-GEO-0483
  page: 77
  vendor_label: "유형 05 평면도형에서 벡터의 연산"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    정육각형 ABCDEF 의 세 대각선 교점 O 에 대해 보기 ㄱ~ㄷ(DE+BD=2OE · AB+CD+EF=0 · 2AB+BE=AD)의 참·거짓. 5지선다.
  category: "사슬 연결 + 정육각형의 같은 벡터 치환(AB = ED = OC) → 세 등식 판정"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "정육각형의 평행 변·중심 대칭으로 AB=OC, CD=OE, EF=OA 로 치환해 세 벡터의 합이 0(120° 대칭)임을 읽고, ㄷ 에서 AB=ED 로 바꿔 AE+ED=AD 연결"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "정육각형에서 벡터의 덧셈·뺄셈(ㄱㄴㄷ 판정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ㄱ: BD+DE=BE=2OE(O 가 BE 의 중점) 참. ㄴ: AB=OC, CD=OE, EF=OA 이고 OA+OC+OE=0 이라 참. ㄷ: 2AB+BE=AB+(AB+BE)=AB+AE=ED+AE=AD 참 → ⑤. 같은 벡터 치환·대칭 착안 SYM d1 하나·M_total 5. 벤더 중 → ★2.
  tier: star_2
  mechanism_primary: "ㄱ BD+DE = BE = 2OE · ㄴ AB+CD+EF = OC+OE+OA = 0 · ㄷ AB+(AB+BE) = ED+AE = AD → 모두 참"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0483.png"
  latex: latex-bank/rpm-geo/items/0483.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "보기 항목의 벡터 이름·계수를 바꾸되 정답 조합을 교체. 제약: ㄴ 형(세 변 벡터 합 0)은 한 칸 건너 변 세 개일 때만 성립 · 거짓 항목을 하나 넣어도 ★2 유지."
    creative: "(1) 중심 O 를 없애고 변 벡터만으로 같은 등식(★2) (2) 정육각형 → 정팔각형에서 네 변 합 0 판정(★3) (3) 변 길이를 주고 |AB+BC+EF| 같은 크기 묻기(★3 · 작도+길이)."
```

```yaml
- id: RPM-GEO-0484
  page: 77
  vendor_label: "유형 05 평면도형에서 벡터의 연산"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    한 변을 공유하는 합동인 두 정육각형에서 OA=a, OB=b 일 때 BQ+PR 을 a, b 로 나타내기.
  category: "변 방향을 ±a, ±b, ±(a+b) 로 환원 → 두 벡터를 변 따라 분해 → 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "정육각형의 세 변 방향이 a, b, a+b 뿐임을 읽고 BQ 를 공유 변을 지나는 변 사슬 (a+b)+a+(a+b)+a-b = 4a+b 로 분해"
    - step: 2
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "PR 이 왼쪽 정육각형의 긴 대각선으로 변 OB 에 평행·길이 2배 → PR = 2b"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "평면도형에서 벡터를 두 벡터로 나타내기(두 정육각형)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    변의 방향이 a, b, a+b 세 가지뿐이므로 B 에서 공유 변을 거쳐 Q 까지 변을 따라가면 BQ=(a+b)+a+(a+b)+a-b=4a+b. PR 은 왼쪽 정육각형의 긴 대각선으로 변 OB 와 평행·길이 2배라 PR=2b. 합 4a+3b. 변 방향 환원(RT d1)과 긴 대각선 대칭(SYM d1) 두 착안·M_total 6·서술형. 벤더 중 ★2 출발 → 통찰 2개로 +1 → ★3.
  tier: star_3
  mechanism_primary: "변 방향 = {a, b, a+b} → BQ = 4a+b (변 사슬) · PR = 2b (긴 대각선 ∥ OB) → 4a+3b"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$4\vec{a}+3\vec{b}$'
  answer_source: "답지"
  figure: "crop:fig-0484.png"
  latex: latex-bank/rpm-geo/items/0484.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "묻는 벡터를 AQ, OR, PB 등으로 바꾸거나 두 벡터의 차를 묻기. 제약: 그림의 공유 변·라벨 위치 고정 · 답 계수 정수 · 서로 다른 정육각형의 점을 잇는 벡터를 하나는 유지."
    creative: "(1) 정육각형 하나로 줄이면 0480 형 ★2 (2) 세 정육각형 벌집 배치로 늘리면 사슬만 길어져 ★3 유지 (3) 변 길이를 주고 |BQ+PR| 을 묻기 → 마름모 격자에서 길이 계산 ★4 후보(코사인법칙)."
```

```yaml
- id: RPM-GEO-0485
  page: 77
  vendor_label: "유형 05 평면도형에서 벡터의 연산"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    직사각형 ABCD 에서 AB 의 삼등분점 중 B 에 가까운 점 M, DM 의 중점 N, AB=a, AD=b 일 때 CN 을 a, b 로 나타내기. 5지선다.
  category: "A 기준 → AM = 2a/3 → AN = (AD+AM)/2 → CN = AN - AC"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평면도형에서 벡터를 두 벡터로 나타내기(직사각형 내분점·중점)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    AM=(2/3)a, AN=(b+2a/3)/2=a/3+b/2, AC=a+b 이므로 CN=AN-AC=-2a/3-b/2(①). 중점 공식·삼등분점 읽기(B 에 가까운 쪽 → 2/3, T-표기)·분수 정리. 통찰 없음·M_total 5. 벤더 상중 ★3 출발이나 절차형·M_total ≤5 → −1, ★2.
    [분류 이슈] 벤더 상중(이 범위 최고 표시)이나 표준 중점·내분점 계산 — ★2 / ★3.
  tier: star_2
  mechanism_primary: "AM = 2a/3 → AN = (AM+AD)/2 = a/3 + b/2 → CN = AN - (a+b) = -2a/3 - b/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: "crop:fig-0485.png"
  latex: latex-bank/rpm-geo/items/0485.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼등분점을 A 에 가까운 쪽(1/3)으로, 중점을 1:2 내분점으로. 제약: 계수 분모 6 이하 · 선택지에 부호·분수 뒤바꾼 오답 · 그림 라벨(M∈AB, N∈DM) 고정."
    creative: "(1) N 을 DM 과 AC 의 교점으로 바꾸면 비율을 구해야 해 ★3~4(위치 벡터·평행 조건) (2) 정사각형으로 두고 |CN| 까지(★3) (3) M 을 매개변수 t 로 두면 Mₐ ↑ ★3."
```

### 유형 06 입체도형에서 벡터의 연산

```yaml
- id: RPM-GEO-0486
  page: 77
  vendor_label: "유형 06 입체도형에서 벡터의 연산"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    정육면체에서 EF, FG 의 중점 M, N, AB=a, AD=b, AE=c 일 때 보기 ㄱ~ㄹ(AM · AG · MN · DF 의 표현)의 참·거짓을 있는 대로 고르기.
  category: "A 기준 위치 벡터(AE = c, AF = a+c, AG = a+b+c) → 각 보기 확인"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "입체도형에서 벡터를 세 벡터로 나타내기(정육면체 중점·ㄱㄴㄷ)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    AM=AE+EM=c+a/2(ㄱ 참), AG=a+b+c(ㄴ 참), MN 은 EG 의 절반이라 a/2+b/2(ㄷ 참), DF=AF-AD=a-b+c 라 ㄹ 거짓 → ㄱ, ㄴ, ㄷ. 네 보기 각각 한 줄. 유형 대표·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "AM = c + a/2 · AG = a+b+c · MN = EG/2 = (a+b)/2 · DF = a-b+c → ㄱㄴㄷ"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "ㄱ, ㄴ, ㄷ"
  answer_source: "답지"
  figure: "crop:fig-0486.png"
  latex: latex-bank/rpm-geo/items/0486.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "중점 위치(EH, GH 등)와 보기 항목을 바꿈. 제약: 거짓 항목 하나는 부호 하나만 바뀐 형태 · 라벨 고정."
    creative: "(1) 두 중점을 잇는 MN 이 밑면 대각선 EG 와 평행함을 보이는 서술형(★2) (2) M, N 을 삼등분점으로 → 계수 1/3(★2) (3) 정육면체 → 사각뿔·삼각기둥으로 바꾸면 위치 벡터 기준이 달라져 ★2~3."
```

```yaml
- id: RPM-GEO-0487
  page: 77
  vendor_label: "유형 06 입체도형에서 벡터의 연산"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    정팔면체에서 AB=a, BF=b, CF=c 일 때 EC = la+mb+nc 를 만족시키는 l, m, n 에 대해 l-m+n.
  category: "AF = a+b (A→B→F) → 단면 정사각형 ACFE 로 EF = AC → EC = EF + FC"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "정팔면체를 정사각형 단면 ACFE 로 보아 EF = AC 로 치환(모서리에 평행하지 않은 EC 를 기준 벡터 사슬로 연결)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "입체도형에서 벡터를 세 벡터로 나타내기(정팔면체)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    AC=AF+FC=(a+b)-c 이고 ACFE 가 정사각형이라 EF=AC. EC=EF+FC=(a+b-c)-c=a+b-2c 에서 l=1, m=1, n=-2, l-m+n=-2. 단면 정사각형으로 같은 벡터를 읽는 RT d1 하나·M_total 5. 벤더 중 → ★2.
  tier: star_2
  mechanism_primary: "AC = (a+b) - c → EF = AC (정사각형 ACFE) → EC = EF + FC = a+b-2c → l-m+n = -2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-2$'
  answer_source: "답지"
  figure: "crop:fig-0487.png"
  latex: latex-bank/rpm-geo/items/0487.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "묻는 벡터를 DB, EB, AD 등으로, 계수 조합식을 바꿈. 제약: 기준 세 벡터가 정팔면체 모서리로 고정 · 라벨(A 위 · F 아래 · BCDE 정사각형 순서) 고정 · 답 계수 정수."
    creative: "(1) 기준을 AB, AC, AD 처럼 한 꼭짓점에서 나가는 세 모서리로 주면 대칭 이용(AE = AB+AD-AC 꼴) 필요 ★3 (2) EC 대신 두 중점을 잇는 벡터(★3) (3) 정사각뿔로 바꾸면 밑면 정사각형 대각선 관계만 남아 ★2."
```

```yaml
- id: RPM-GEO-0488
  page: 77
  vendor_label: "유형 06 입체도형에서 벡터의 연산"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    정육면체 전개도(꼭짓점 A~E 표시)를 접었을 때 BA-CD 와 서로 같은 벡터 고르기. 5지선다.
  category: "전개도 접기 → 꼭짓점 위치 복원 → -CD = DC = AE 치환 → BA+AE = BE"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "전개도를 접어 다섯 꼭짓점의 정육면체 위 위치를 복원(B 는 D 의 바로 위 · B, C, E 는 한 면 위 · A 는 D 와 한 모서리)"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "-CD 를 마주보는 면의 대각선 DC = AE 로 바꾸어 BA + AE 사슬로 잇기"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "입체도형에서 벡터의 덧셈·뺄셈(정육면체 전개도)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    접은 정육면체에서 DC 와 AE 는 마주보는 두 면의 대각선으로 평행·같은 방향이라 -CD=DC=AE. 따라서 BA-CD=BA+AE=BE(③). 전개도 복원(RT d2)이 진입 장벽이고 같은 벡터 치환(EQV d1)이 이어진다. T-표기(전개도 라벨)·T-부호(-CD)로 M_total 6. 벤더 중 ★2 출발 → 통찰 2개로 +1 → ★3.
  tier: star_3
  mechanism_primary: "전개도 접기 → 꼭짓점 위치 → DC = AE (마주보는 면의 대각선) → BA - CD = BA + AE = BE"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0488.png"
  latex: latex-bank/rpm-geo/items/0488.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "전개도의 라벨 위치(어느 꼭짓점에 A~E 를 붙일지)와 식(BA+CD, AB-CD)을 바꿈. 제약: 접었을 때 다섯 점이 서로 다른 꼭짓점 · 답이 보기 중 하나(꼭짓점 사이 벡터)로 떨어지게 · 계단형 전개도 모양을 유지하면 난이도 유지."
    creative: "(1) 전개도 없이 정육면체 그림을 주면 ★1~2(0452·0458 형) (2) 정팔면체 전개도로 바꾸면 접기 자체가 어려워 ★4 후보 (3) 접은 뒤 |BA-CD| 의 크기(면대각선 √2 배)까지 묻기 ★3."
```

## 표본 판정 요약 (38문)

- ★ 분포: ★1 21 · ★2 14 · ★3 3 · ★4 0 · ★5 0
- 통찰형 3(0474 · 0484 · 0488) · 절차형 35 · premium 0 (insights 가 하나라도 있는 블록은 11 — d1 통찰 하나뿐인 8문은 절차형으로 둠)
- 구역별: 교과서 13문 전부 ★1 · 유형 01~06 25문은 ★1 8 · ★2 14 · ★3 3
- type_hint 상위: 「벡터의 실수배 계산·등식(미지 벡터·연립)」 7 · 「평면도형에서 벡터를 두 벡터로 나타내기」 6 · 「벡터의 덧셈·뺄셈 간단히/ㄱㄴㄷ 판정」 6 · 「입체도형에서 벡터 표현(직육면체·정육면체·정팔면체·전개도)」 5 · 「벡터의 크기」 4 · 「서로 같은 벡터 찾기·개수」 4
- 통찰 유형(13개 라벨): I-RT 7 · I-EQV 4 · I-SYM 2 (depth 2 는 0474 EQV · 0488 RT 둘)
- 그림: 24문(`crop:fig-0451.png` · `fig-0452-2` · `fig-0453` · `fig-0454` · `fig-0457` · `fig-0458` · `fig-0464`~`fig-0472` 9문 · `fig-0480`~`fig-0488` 9문) · 작도 답 「풀이 참조」 2문(0453 · 0454)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-GEO-0453 · 0454 | 작도 문항 · answer 「풀이 참조」 · 전사본에 subs 없이 그림 안 ⑴~⑶ — 숫자 변형은 그림 원천을 새로 그려야 함 | ★1 |
| RPM-GEO-0464 | 유형 01 대표문제인데 M_total 4·통찰 없음 → −1 후보. 긴·짧은 대각선 두 사실이 필요해 ★2 유지 | ★1 / ★2 |
| RPM-GEO-0466 | '최솟값 → 수선의 발' 을 EQV d1 로 인정. 표준 사실로 보면 절차형 — d1 인정 여부가 갈림 | ★2 |
| RPM-GEO-0474 | 벤더 중이나 M_total 7(범위 최고)+EQV d2 로 ★3. +1 근거가 '통찰 2개 또는 depth 3' 규칙 밖 | ★2 / ★3 |
| RPM-GEO-0485 | 벤더 상중(이 범위 최고 표시)이나 표준 중점·내분점 계산·통찰 없음·M_total 5 → ★2(1단 차이) | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 반복된 type_hint: 「평면도형에서 벡터를 두 벡터로 나타내기」(평행사변형·정육각형·삼각형 중점·무게중심·두 정육각형·직사각형 내분점 6문)와 「입체도형에서 벡터를 세 벡터로 나타내기」(직육면체·정육면체·정팔면체 5문)가 이 범위의 중심 골조. 두 유형은 도형만 다르고 「기준점 위치 벡터 → XY = OY − OX」 골조가 같으므로 카탈로그에서는 「도형에서 벡터 표현」 한 유형 아래 평면/입체·정육각형/정팔면체를 base ★ 변동 인자(정육각형 중심 경유 +0, 정팔면체 단면 +0~1, 두 정육각형·전개도 +1)로 두는 편이 낫다.
- 따로 세워야 할 유형: 「시점 통일로 조건식 활용」(0474 · 유일하게 M_total 7·d2 · 다음 단원 위치벡터의 선행 골조) · 「전개도를 접은 정육면체에서 벡터」(0488 · RT d2 진입 장벽이 별도) · 「벡터 등식 → 도형 판정」(0475) · 「벡터 등식 → 선분 위 점의 위치」(0479 · 다음 단원 내분점과 통합 후보).
- 통합해도 될 유형: 「벡터의 실수배 계산」+「미지 벡터 구하기」+「연립 등식」+「미지 벡터의 계수」(0459~0462 · 0476~0478) → 「벡터의 실수배·등식 계산」 하나(base ★1 · 연립은 +1). 「정육각형 ㄱㄴㄷ 판정」(0470 · 0483)은 「정육각형에서 벡터 표현」과 같은 골조(중심 대칭·같은 벡터 치환)라 통합 가능. 「벡터의 크기」(0451 · 0464 · 0465)는 사실상 도형 길이 계산이며 0466(최솟값)만 EQV 착안이 붙는다.
- 벤더 신호와의 어긋남은 최대 1단(0485 상중 → ★2 · 0474/0484/0488 중 → ★3)이고 2단 이상 드리프트는 없다.
