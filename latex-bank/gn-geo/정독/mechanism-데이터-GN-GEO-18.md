---
name: mechanism-데이터-GN-GEO-18
description: 개념원리 기하 18 벡터의 뜻(1/1 · 146~147쪽 · 7문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 기하 (22개정 · 학생용 PDF) · 전사본 latex-bank/gn-geo
  section: 18 벡터의 뜻
  unit_code: GEO-18
  part: "1/1"
  extract_range: "146~147쪽 · 146-291~147-296"
  total_problems: 7
  unit_total: 7
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-geo/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-geo/items/<id>.tex
  image_source: latex-bank/gn-geo/figures/ (crops.json)
---

# 개념원리 기하 · 18 벡터의 뜻 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 기하 18단원 「벡터의 뜻」 146~147쪽 전 7문항을 다룬다. 구역은 두 개로, 「개념원리 익히기」 4문(146-291~146-294)과 「필수·발전 예제」 3문(필수 예제 147-e1 과 그 뒤의 확인체크 147-295·147-296)이다. 개념원리 고등의 난이도 신호는 구역과 태그이므로 익히기는 ★1, 필수 예제는 ★2 를 출발점으로 잡았고, 예제 바로 뒤에 붙는 확인체크 두 문항은 예제와 같은 유형의 확인 문항이라 익히기(★1)가 아니라 예제(★2)를 출발점으로 삼았다. 단원 전체가 벡터의 정의·크기·서로 같은 벡터를 익히는 도입부라 ★3 이상과 premium 은 나오지 않는다.

7문항 모두 그림이 딸려 있고, 그중 5문항이 「서로 같은 벡터 / 크기가 같고 방향이 반대인 벡터를 도형에서 빠짐없이 찾기」라는 한 골조의 배경만 바꾼 변주다(모눈 · 직육면체 · 정육각형 · 평행사변형 · 정팔면체). 이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 사슬) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 설정 변형과 ★ 변동 지점)를 채웠다. 이 단원의 변형에서 특히 조심할 것은 그림 라벨이 답의 일부라는 점이다 — 꼭짓점 이름을 바꾸면 답 전체가 따라 바뀐다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-GEO-146-291
  page: 146
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    모눈 위에 네 점 A, B, C, D 가 주어졌을 때 ⑴~⑷ 네 벡터(AB · BD · CA · DC)를 그림에 화살표로 나타내기.
  category: "유향선분의 정의 → 시점·종점 순서대로 화살표 그리기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "벡터의 표시 — 시점·종점을 읽고 유향선분 그리기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    벡터 기호의 앞 글자가 시점, 뒤 글자가 종점이라는 정의를 그대로 적용하는 한 단계.
    CA · DC 처럼 알파벳 역순 표기에서 화살표를 반대로 그리는 것이 유일한 함정(T-표기).
    개념원리 익히기 구역 ★1 출발 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "기호 XY 읽기 → 시점 X·종점 Y 확정 → 모눈 위 화살표"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '풀이 참조 (모눈 위에 ⑴ $\pt{A}\to\pt{B}$ ⑵ $\pt{B}\to\pt{D}$ ⑶ $\pt{C}\to\pt{A}$ ⑷ $\pt{D}\to\pt{C}$ 화살표를 그린 그림 — 답지 참조)'
  answer_source: "답지"
  figure: "crop:fig-146-291.png"
  latex: latex-bank/gn-geo/items/146-291.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 점의 모눈 좌표와 소문항이 고르는 시점·종점 쌍(AC · DB · CB …)을 바꿀 수 있음. 제약: 그림 라벨 A~D 는 고정이고 두 점이 겹치면 안 되며, 소문항 중 최소 하나는 역순 표기를 남겨야 함정이 유지됨."
    creative: "(1) 화살표를 그려 주고 기호로 쓰게 하는 역방향(★1 유지) (2) 점을 다섯 개로 늘려 「AB 와 서로 같은 벡터가 되도록 남은 점을 찍기」(평행이동 인식 필요 → ★2) (3) 좌표평면으로 옮겨 성분으로 답하게 하면 성분 단원과 결합되어 ★2."
```

```yaml
- id: GN-GEO-146-292
  page: 146
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    AB=3, AD=4 인 직사각형 ABCD 에서 ⑴ |BC| ⑵ |AC| 구하기.
  category: "벡터의 크기 = 선분의 길이 → 대변 길이·피타고라스"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "벡터의 크기 구하기(직사각형의 변·대각선)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    벡터의 크기가 유향선분의 길이라는 정의만 쓰면 BC 는 대변 AD 와 같아 4, AC 는 3-4-5 직각삼각형의 빗변 5.
    방향은 답에 관여하지 않는데 방향까지 따지려는 것이 유일한 혼동거리.
    익히기 ★1 출발 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "|벡터| = 선분 길이 → BC = 대변 AD = 4 · AC 는 피타고라스 → 5"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "⑴ $4$ ⑵ $5$"
  answer_source: "답지"
  figure: "crop:fig-146-292.png"
  latex: latex-bank/gn-geo/items/146-292.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 변 3, 4 를 다른 피타고라스 쌍(5·12 · 6·8 · 8·15)으로. 제약: 그림의 직사각형 방향과 라벨 순서 ABCD 는 고정. 정수 쌍이 아니면(예: 2·3) 답이 √13 이 되어 크기 계산 부담만 늘고 ★ 는 그대로."
    creative: "(1) 직사각형을 마름모·정삼각형으로 바꿔 |AC| 에 코사인법칙이나 30-60-90 을 쓰게 하기(★2) (2) 대각선 길이를 주고 변을 되묻는 역방향(★2 · I-BW d1) (3) 직육면체로 올려 |AG| 를 묻기(공간 대각선 → ★2)."
```

```yaml
- id: GN-GEO-146-293
  page: 146
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    모눈 위에 그려진 아홉 벡터 a~i 중에서 ⑴ a 와 방향이 같은 벡터 ⑵ 크기가 같은 벡터 ⑶ 서로 같은 벡터 ⑷ 크기가 같고 방향이 반대인 벡터를 모두 고르기.
  category: "모눈 칸수로 방향·크기 읽기 → 네 기준으로 분류"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "서로 같은 벡터·크기가 같은 벡터 판별(모눈 위 벡터 분류)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    각 화살표를 모눈 칸수(가로, 세로)로 읽어 방향(기울기 + 향)과 크기를 따로 비교하는 분류 작업.
    방향만 같고 길이가 다른 h 를 「서로 같은」에 넣거나, 시점이 달라 g 를 빼는 것이 함정(T-표기·T-범위).
    네 기준을 아홉 벡터에 반복 적용하지만 통찰은 없음 → 익히기 ★1 유지.
  tier: star_1
  mechanism_primary: "각 벡터를 모눈 (가로, 세로)로 읽기 → 방향·크기 따로 비교 → 네 기준으로 분류"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\vec{g}$, $\vec{h}$ ⑵ $\vec{c}$, $\vec{d}$, $\vec{g}$, $\vec{i}$ ⑶ $\vec{g}$ ⑷ $\vec{i}$'
  answer_source: "답지"
  figure: "crop:fig-146-293.png"
  latex: latex-bank/gn-geo/items/146-293.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 화살표의 모눈 이동량과 기준 벡터(a 대신 c·f)를 바꿀 수 있음. 제약: 「방향만 같은 것」·「크기만 같은 것」·「서로 같은 것」이 각각 최소 하나씩 나오도록 길이 2배 벡터와 90° 회전 벡터를 반드시 남길 것. 그림 라벨 a~i 는 고정."
    creative: "(1) 표를 주고 ○/× 로 채우게 하는 형식(★1 유지) (2) 「서로 같은 벡터끼리 짝지으면 몇 쌍인가」로 개수를 묻기(누락 점검 강제 → ★2) (3) 모눈을 없애고 길이·각도만 표시하면 판별 근거가 계산으로 바뀌어 ★2."
```

```yaml
- id: GN-GEO-146-294
  page: 146
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    직육면체 ABCD-EFGH 에서 ⑴ AB 와 서로 같은 벡터 ⑵ CG 와 크기가 같고 방향이 반대인 벡터를 모두 구하기.
  category: "평행한 모서리 대응 → 향이 같은지 반대인지 판정 → 빠짐없이 열거"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직육면체에서 서로 같은 벡터·반대 벡터 열거"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    AB 와 평행하고 향이 같은 모서리 세 개(DC·EF·HG), CG 와 향이 반대인 모서리 네 개를 공간에서 빠짐없이 찾는다.
    아랫면 한 쌍만 보고 멈추는 누락과 반대 벡터에 GC 자신을 빼먹는 것이 함정(T-범위·T-표기).
    공간 열거라 익히기 중 가장 무겁지만 통찰은 없고 판정 기준은 정의 그대로 → ★1 유지.
    [분류 이슈] 공간 도형 누락 위험을 반영하면 ★2 주장도 가능(벤더 구역 신호와는 1단 차이).
  tier: star_1
  mechanism_primary: "직육면체의 평행한 모서리 대응 → 향 같으면 같은 벡터·반대면 반대 벡터 → 네 쌍 모두 열거"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\overrightarrow{\pt{DC}}$, $\overrightarrow{\pt{EF}}$, $\overrightarrow{\pt{HG}}$ ⑵ $\overrightarrow{\pt{GC}}$, $\overrightarrow{\pt{HD}}$, $\overrightarrow{\pt{EA}}$, $\overrightarrow{\pt{FB}}$'
  answer_source: "답지"
  figure: "crop:fig-146-294.png"
  latex: latex-bank/gn-geo/items/146-294.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준 벡터를 다른 모서리(AD·BF·EH)로 바꾸거나 모서리 길이를 주어 |AG| 를 덧붙일 수 있음. 제약: 라벨 ABCD-EFGH 대응(A↔E, B↔F, C↔G, D↔H)은 고정이며, 기준을 밑면 모서리로 두면 같은 벡터가 3개, 옆모서리로 두면 반대 벡터가 4개로 답 개수가 달라짐."
    creative: "(1) 「서로 같은 벡터의 개수」만 묻기(★1 유지) (2) 면의 대각선 AC 를 기준으로 삼으면 평행한 대각선을 찾아야 해 ★2 (3) 직육면체를 정육면체로 바꾸고 |AG| 까지 묻거나 삼각기둥으로 바꾸면 평행 관계가 줄어 오답 유인이 커짐(★2)."
```

### 필수·발전 예제

```yaml
- id: GN-GEO-147-e1
  page: 147
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    한 변의 길이가 1 인 정육각형 ABCDEF 의 세 대각선 AD·BE·CF 의 교점을 O 라 할 때 ⑴~⑷ DE 와 서로 같은 벡터, BC 와 크기가 같고 방향이 반대인 벡터, |BC|, |AE| 를 구하기.
  category: "정육각형 = 중심 O 둘레의 정삼각형 6개 → 평행사변형 대응으로 같은·반대 벡터 → 대각선 길이"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "정육각형이 중심 O 를 공유하는 정삼각형 6개로 나뉘는 대칭 구조를 써서, 변 위 벡터뿐 아니라 내부 벡터(CO·OF·OA·DO)까지 같은·반대 벡터에 빠짐없이 대응시킴"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "벡터의 크기와 서로 같은 벡터(정육각형·중심 O)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    대각선 교점 O 를 중심으로 정삼각형 6개가 생기고, 그 결과 ABCO·OCDE 같은 마름모가 줄줄이 나온다.
    이 대칭 대응을 쓰면 DE 와 같은 벡터에 변 위의 BA 뿐 아니라 내부 CO·OF 까지 들어오는 것이 이 문항의 핵심(SYM d1).
    |BC| 는 한 변이라 1, |AE| 는 한 칸 건너뛴 짧은 대각선이라 정삼각형 높이의 두 배 √3.
    필수 예제 ★2 출발 · 통찰 1(SYM d1) · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "대각선 교점 O → 정삼각형 6개 분할 → 평행사변형 대응으로 같은·반대 벡터 열거 → |AE| 는 짧은 대각선 √3"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ $\overrightarrow{\pt{BA}}$, $\overrightarrow{\pt{CO}}$, $\overrightarrow{\pt{OF}}$ ⑵ $\overrightarrow{\pt{CB}}$, $\overrightarrow{\pt{OA}}$, $\overrightarrow{\pt{DO}}$, $\overrightarrow{\pt{EF}}$ ⑶ $1$ ⑷ $\sqrt{3}$'
  answer_source: "본문 풀이"
  figure: "crop:fig-147-e1.png"
  latex: latex-bank/gn-geo/items/147-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "한 변의 길이 1 을 2·3·a 로 바꾸면 ⑶⑷ 가 각각 k, √3k 로 비례한다. 제약: 정육각형 라벨 ABCDEF 의 방향(시계/반시계)과 O 의 정의는 고정. ⑷ 의 대상을 |AD|(긴 대각선, 2k)로 바꾸면 계산이 오히려 쉬워져 ★ 가 내려감."
    creative: "(1) 묻는 기준 벡터를 다른 변·대각선으로 돌리기(★2 유지, 내부 벡터가 답에 남도록 할 것) (2) 「O 를 시점 또는 종점으로 하는 벡터 중 서로 같은 것의 쌍 수」를 묻기(대칭 활용 강제 → ★3) (3) 정육각형을 정팔각형으로 바꾸면 중심 분할이 정삼각형이 아니게 되어 크기 계산에 삼각비가 필요해 ★3."
```

```yaml
- id: GN-GEO-147-295
  page: 147
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    평행사변형 ABCD 에서 AB=a, AC=b, AD=c 라 할 때 보기 ㄱ. BC=c ㄴ. CA=-b ㄷ. CD=a 중 옳은 것을 모두 고르기.
  category: "평행사변형의 대변 대응 → 각 보기의 시점·종점 순서 확인 → 부호 판정"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행사변형에서 서로 같은 벡터·반대 벡터 판별(보기 참거짓)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    대변 AD 와 BC 가 평행하고 길이·향이 같으므로 ㄱ 은 참, CA 는 대각선 AC 를 뒤집은 것이라 ㄴ 도 참.
    ㄷ 은 AB 와 같은 것이 DC 이지 CD 가 아니어서 CD = -a 로 부호가 뒤집힌 거짓(T-부호).
    문자 벡터 표현이라 Mₐ 2 이고 보기 세 개를 각각 판정하지만 도구는 정의 하나 → 확인체크 ★2 유지.
  tier: star_2
  mechanism_primary: "평행사변형 대변 대응(AD=BC, AB=DC) → 보기의 표기 순서 확인 → 뒤집힌 것에 − 붙여 참거짓 판정"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "ㄱ, ㄴ"
  answer_source: "답지"
  figure: "crop:fig-147-295-2.png"
  latex: latex-bank/gn-geo/items/147-295.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "바꿀 수 있는 수치는 보기 개수와 어느 벡터에 문자를 붙이느냐(AB·AC·AD 대신 BA·BD·BC)뿐. 제약: 참인 보기와 거짓인 보기가 섞이도록 최소 하나는 시점·종점을 뒤집은 표기로 둘 것. 그림 라벨 ABCD 순서는 고정."
    creative: "(1) 보기를 -a, -c 같은 반대 벡터 쪽으로 더 늘리기(★2 유지) (2) 평행사변형을 사다리꼴로 바꾸면 대변 대응이 깨져 어떤 보기가 왜 거짓인지 따져야 함(★3 · I-EQV d1) (3) 대각선 교점 M 을 추가해 AM·MC 관련 보기를 넣으면 중점 성질이 결합되어 ★3."
```

```yaml
- id: GN-GEO-147-296
  page: 147
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    한 모서리의 길이가 2 인 정팔면체 ABCDEF 에서 ⑴ DF 와 서로 같은 벡터 ⑵ FB 와 크기가 같고 방향이 반대인 벡터 ⑶ |AF| 를 구하기.
  category: "정팔면체의 정사각형 단면 찾기 → 평행 모서리로 같은·반대 벡터 → 단면 대각선 길이"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "모서리가 아닌 AF 를 정팔면체 속 한 변 2 의 정사각형 단면 ABFD 의 대각선으로 옮겨 보는 공간→평면 환원"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "정팔면체에서 서로 같은 벡터·반대 벡터와 벡터의 크기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 꼭짓점 A·F 와 마주 보는 두 꼭짓점 B·D 가 한 변 2 인 정사각형 ABFD 를 이룬다는 것을 보면 세 소문항이 한꺼번에 풀린다.
    그 정사각형에서 DF 와 AB 가 같은 벡터, FB 의 반대 벡터로 BF 와 AD 가 나오고, |AF| 는 대각선이라 2√2(RT d1).
    단면을 못 찾으면 공간에서 헤매고 반대 벡터 하나를 빠뜨리기 쉽다(T-범위).
    확인체크 ★2 출발 · 통찰 1(RT d1) · M_total 7 → ★2.
    [분류 이슈] 정팔면체 공간 인식 + 단면 착안을 크게 보면 ★3 주장도 가능(1단 차이).
  tier: star_2
  mechanism_primary: "정팔면체에서 정사각형 단면 ABFD 확인 → 평행 모서리로 같은·반대 벡터 → 대각선 |AF| = 2√2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $\overrightarrow{\pt{AB}}$ ⑵ $\overrightarrow{\pt{BF}}$, $\overrightarrow{\pt{AD}}$ ⑶ $2\sqrt{2}$'
  answer_source: "답지"
  figure: "crop:fig-147-296.png"
  latex: latex-bank/gn-geo/items/147-296.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모서리 길이 2 를 1·3·a 로 바꾸면 ⑶ 이 √2k 로 비례. 제약: 그림의 정팔면체 라벨(A 위, F 아래, 가운데 정사각형 BCDE)은 고정이며, 기준 벡터를 바꿀 때는 그 벡터가 속한 정사각형 단면이 무엇인지 먼저 확인해야 답 개수가 맞음."
    creative: "(1) 기준을 다른 모서리(EC·AD)로 돌리기(★2 유지) (2) |AF| 대신 마주 보는 두 면의 무게중심 거리나 |AC| 를 묻기(단면이 정사각형이 아니어서 계산 부담 ↑ → ★3) (3) 정팔면체를 정육면체 속에 넣어 두 도형의 벡터를 함께 묻으면 단원 결합으로 ★3~4."
```

## 표본 판정 요약 (7문)

- ★ 분포: ★1 4 · ★2 3 · ★3 0 · ★4 0 · ★5 0
- 통찰형 2(147-e1 I-SYM d1 · 147-296 I-RT d1) · 절차형 5 · premium 0
- 대상층: 하위권 2 · 중하위권 3 · 중위권 1 · 중상위권 1
- type_hint 상위: 「서로 같은 벡터·반대 벡터 판별(도형별)」 5(146-293·146-294·147-e1·147-295·147-296) · 「벡터의 크기 구하기」 3(146-292·147-e1·147-296, 중복 집계) · 「벡터의 표시(유향선분 그리기)」 1(146-291)
- 그림: 7문 전부 있음(`crop:fig-146-291.png` · `fig-146-292.png` · `fig-146-293.png` · `fig-146-294.png` · `fig-147-e1.png` · `fig-147-295-2.png` · `fig-147-296.png`)
- M_total 분포: 4 2문 · 6 2문 · 7 3문 (최대 7 · 평균 6.0)

## 분류 이슈 목록

판정이 애매해 **기록만** 한 문항. 라벨 `star` 는 벤더 신호에 맞춰 두고 억지로 올리지 않았다. 이 범위에는 2단 이상 어긋난 문항이 없다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-GEO-146-294 | 익히기 구역(★1 출발)이지만 직육면체에서 같은·반대 벡터 7개를 빠짐없이 찾아야 해 같은 구역의 평면 문항보다 확실히 무겁다. 라벨은 ★1 로 두고 기록 | ★1 / ★2 |
| GN-GEO-147-296 | 정팔면체 단면 착안(RT d1) + 공간 인식을 크게 보면 ★3. 다만 통찰 1개·depth 1 이라 +1 조건에 못 미쳐 확인체크 출발점 ★2 유지 | ★2 / ★3 |
| GN-GEO-147-295·296 | 벤더 신호표에서 tag 「확인체크」는 ★1 출발이지만, 이 두 문항은 익히기 구역이 아니라 필수 예제 뒤의 확인 문항이라 예제와 같은 ★2 출발로 잡았다(구역 기준과 태그 기준이 갈리는 지점) | ★2 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위 7문 중 5문이 **「서로 같은 벡터 / 크기가 같고 방향이 반대인 벡터를 도형에서 열거」** 한 골조의 배경 변주다(모눈 · 직육면체 · 정육각형 · 평행사변형 · 정팔면체). 카탈로그에서는 한 유형으로 묶되 **배경을 평면(모눈·평행사변형·정다각형)과 공간(직육면체·정팔면체) 두 갈래로 나누는 것**을 권한다 — 공간 쪽은 누락 오답이 구조적으로 더 많고 ★ 가 한 단 높게 잡힌다.
- 「벡터의 크기 구하기」는 따로 세울 가치가 있다. 직사각형 대각선(피타고라스) · 정다각형 짧은 대각선(√3 꼴) · 정다면체 단면 대각선(√2 꼴)로 계산 도구가 갈려 ★2~3 의 변별 슬롯을 만들 수 있다.
- 「벡터의 표시(유향선분 그리기)」(146-291)는 답이 그림이라 시험 출제 슬롯으로는 쓰기 어렵다. 카탈로그에 유형을 세우더라도 개념 확인 전용으로 표시해 둘 것.
- 이 단원 전체가 도입부라 ★3 이상 슬롯이 없다. ★3~4 변별은 벡터의 덧셈·실수배(다음 단원)와 결합해야 생기므로, 18단원 단독 카탈로그를 만들기보다 19단원 이후와 묶어 설계하는 편이 낫다.
