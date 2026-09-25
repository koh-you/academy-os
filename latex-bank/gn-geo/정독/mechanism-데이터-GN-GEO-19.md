---
name: mechanism-데이터-GN-GEO-19
description: 개념원리 기하 19 벡터의 덧셈과 뺄셈(1/1 · 150~154쪽 · 19문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 기하 (22개정) · 전사본 latex-bank/gn-geo
  section: 19 벡터의 덧셈과 뺄셈
  unit_code: GEO-19
  part: "1/1"
  extract_range: "150~154쪽 · 150-297~154-313"
  total_problems: 19
  unit_total: 19
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-geo/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-geo/items/<id>.tex
  image_source: latex-bank/gn-geo/figures/ (crops.json)
---

# 개념원리 기하 · 19 벡터의 덧셈과 뺄셈 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 기하 19단원 「벡터의 덧셈과 뺄셈」 150~154쪽의 전 19문항(`150-297`~`154-313`)을 다룬다. 전사본 구역은 다섯이다 — `개념원리 익히기` 3문(모눈 작도·기본 합차 정리), `필수·발전 예제` 6문(필수 예제 2문 + 그에 붙은 확인체크 4문), `연습문제 STEP 1` 5문, `연습문제 STEP 2` 3문, `연습문제 실력 UP` 2문. 개념원리 고등의 벤더 난이도 신호는 구역·난이도 표시(STEP 1/STEP 2/실력 UP)와 예제 태그(필수·확인체크)이므로, 개념원리 익히기·확인체크는 ★1, 필수 예제와 STEP 1 은 ★2, STEP 2 는 ★3, 실력 UP 은 ★4 를 출발점으로 잡고 M_total·통찰로 ±1 조정했다.

단원 전체가 **「벡터를 시점·종점의 사슬로 보고 재배열한다」** 는 한 골조 위에 서 있다. 앞 9문은 그 사슬 규칙(합의 중간점 소거 · 차의 시점 통일 · 교환·결합법칙)을 문자·도형 위에서 반복하고, STEP 1 부터 정사각형·정육각형·정육면체 같은 도형이 붙어 **도형의 대칭·평행 관계를 벡터 상등으로 읽는** 단계가 추가된다. 실력 UP 2문은 `OA+OP` 를 **평행이동한 점의 위치벡터**로 바꿔 자취(원·쌍곡선) 문제로 옮기는 같은 착안을 공유한다. 이 파일의 주 용도인 숫자 변형·창의 변형에 맞춰 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 사슬) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 설정 변경과 ★ 변동 지점)를 채웠다. 기하 과목은 유형 카탈로그가 없으므로 `type_id` · `base_star` 는 null 이고 `type_hint` 에 유형명 후보만 적어 둔다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-GEO-150-297
  page: 150
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    모눈 위에 두 벡터 $\vec{a}$, $\vec{b}$가 주어졌을 때 ⑴~⑶ 각각 $\vec{a}+\vec{b}$를
    화살표로 작도하는 문항.
  category: "벡터의 덧셈 정의 → 삼각형법·평행사변형법으로 합벡터 작도"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "벡터의 덧셈 작도(삼각형법·평행사변형법)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    b 의 시점을 a 의 종점으로 평행이동한 뒤 a 의 시점에서 b 의 종점까지 잇는 한 단계.
    모눈 칸 수를 세는 것 외에 계산이 없다. 통찰 0·M_total 4 → 개념원리 익히기 출발점 ★1 유지.
  tier: star_1
  mechanism_primary: "b 를 a 의 종점으로 평행이동 → 삼각형법으로 시점에서 종점까지 연결 → a+b"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '풀이 참조 (모눈 한 칸을 단위로 ⑴ 오른쪽 $3$, 위 $3$ ⑵ 왼쪽 $1$, 위 $3$ ⑶ 오른쪽 $6$, 위 $3$인 화살표 $\vec{a}+\vec{b}$를 그린 그림 — 답지 참조)'
  answer_source: "답지(그림)"
  figure: "crop:fig-150-297.png"
  latex: latex-bank/gn-geo/items/150-297.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모눈 위 두 벡터의 성분(가로·세로 칸 수)을 자유롭게 바꿀 수 있다. 제약: 합벡터가 모눈 안에 들어오도록 칸 수를 잡고, 두 벡터가 서로 평행하지 않아야 평행사변형법이 그대로 보인다. 소문항 수 3 은 고정."
    creative: "(1) 같은 그림에서 합 대신 차를 작도(★1 유지) (2) 세 벡터의 합으로 늘려 결합법칙을 쓰게 하면 ★2 (3) 작도한 합벡터의 크기를 모눈에서 읽어 피타고라스로 구하게 하면 계산 단계가 붙어 ★2."
```

```yaml
- id: GN-GEO-150-298
  page: 150
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    모눈 위에 두 벡터 $\vec{a}$, $\vec{b}$가 주어졌을 때 ⑴~⑶ 각각 $\vec{a}-\vec{b}$를
    화살표로 작도하는 문항.
  category: "벡터의 뺄셈 정의 → 시점을 맞춘 뒤 종점에서 종점으로 연결"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "벡터의 뺄셈 작도(시점 통일·역벡터 더하기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    두 벡터의 시점을 맞춘 뒤 b 의 종점에서 a 의 종점으로 향하는 화살표를 그리는 한 단계.
    방향을 거꾸로 잡는 T-부호 함정 하나뿐이고 통찰 0·M_total 4 → ★1 유지.
  tier: star_1
  mechanism_primary: "두 벡터의 시점을 일치 → b 의 종점에서 a 의 종점으로 향하는 화살표 → a-b"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '풀이 참조 (모눈 한 칸을 단위로 ⑴ 왼쪽 $1$, 위 $2$ ⑵ 오른쪽 $3$, 아래 $1$ ⑶ 왼쪽 $6$, 아래 $6$인 화살표 $\vec{a}-\vec{b}$를 그린 그림 — 답지 참조)'
  answer_source: "답지(그림)"
  figure: "crop:fig-150-298.png"
  latex: latex-bank/gn-geo/items/150-298.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 벡터의 칸 성분을 바꿀 수 있다. 제약: 차가 영벡터가 되지 않도록 두 벡터를 다르게 잡고, 세 소문항 중 적어도 하나는 성분 부호가 섞이게 해 방향 판단을 시험한다."
    creative: "(1) a-b 와 b-a 를 함께 그려 역벡터 관계를 확인하게 하기(★1 유지) (2) a+b 와 a-b 를 한 평행사변형의 두 대각선으로 함께 작도(★2 · I-RT d1) (3) 작도 대신 a-b 의 크기를 구하게 하면 ★2."
```

```yaml
- id: GN-GEO-150-299
  page: 150
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    세 점 A, B, C 사이의 벡터의 합·차 ⑴~⑷를 하나의 벡터로 간단히 하는 문항.
  category: "합은 중간점 소거 · 차는 시점 통일 → 한 벡터로 정리"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 점 사이 벡터의 합·차 간단히 하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴은 중간점 C 소거 한 단계, ⑵~⑷는 시점이 같은 두 벡터의 차를 종점에서 종점으로 바꾸는
    한 단계씩. 문자 표기라 Mₐ 2 이지만 도구는 하나뿐이고 통찰 0 → 개념원리 익히기 ★1 유지.
  tier: star_1
  mechanism_primary: "합은 가운데 점 소거 · 차는 시점을 같게 만든 뒤 종점에서 종점으로 → 한 벡터"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\overrightarrow{\pt{AB}}$ ⑵ $\overrightarrow{\pt{CA}}$ ⑶ $\overrightarrow{\pt{BC}}$ ⑷ $\overrightarrow{\pt{AC}}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/150-299.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "바꿀 수치가 없는 문자식 문항. 변형은 점의 이름(A, B, C ↔ P, Q, R)과 소문항 수, 합·차의 배열만 바꾼다. 제약: 답이 항상 두 점을 잇는 한 벡터나 영벡터로 닫혀야 한다."
    creative: "(1) 네 점으로 늘려 중간점이 둘 소거되게 하기(★1~2) (2) 결과가 영벡터가 되는 항 배열을 섞어 넣기(★2) (3) 선택지 형태로 바꿔 옳지 않은 것을 고르게 하면 판별 단계가 붙어 ★2(153-306 과 같은 골조)."
```

### 필수·발전 예제

```yaml
- id: GN-GEO-151-e2
  page: 151
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ 세 벡터, ⑵ 네 벡터처럼 순서가 섞인 벡터의 합을 덧셈의 연산 법칙으로
    하나의 벡터로 간단히 하는 필수 예제.
  category: "교환·결합법칙으로 재배열 → 이웃 항 합성 → 한 벡터"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "벡터의 덧셈에 대한 연산 법칙(항을 사슬로 재배열해 간단히 하기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    항의 순서를 종점과 시점이 이어지도록 바꾸는 것이 전부이고, 그 재배열은 예제 제목이
    이미 「덧셈에 대한 연산 법칙」으로 지정해 준다. 스스로 찾아내는 착안이 아니므로 통찰 0.
    소문항 2개·항 4개 재배열로 M_total 6 → 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "교환·결합법칙으로 항을 종점-시점 사슬이 되게 재배열 → 차례로 합성 → 한 벡터"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\overrightarrow{\pt{AD}}$ ⑵ $\overrightarrow{\pt{PT}}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/151-e2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "항의 개수(3~5)와 점 이름·섞은 순서를 바꿀 수 있다. 제약: 재배열했을 때 중간점이 모두 소거돼 양 끝 두 점만 남아야 하고(또는 닫힌 사슬이면 영벡터), 같은 점이 시점·종점으로 두 번 이상 나오지 않게 한다."
    creative: "(1) 답이 영벡터가 되도록 사슬을 닫기(★2 유지) (2) 뺄셈 항을 섞어 역벡터로 바꾸는 단계를 추가(★2, T-부호 함정 +1) (3) 다각형의 변을 따라 도는 설정으로 옮기면 도형 해석이 붙어 ★2~3(152-303 골조)."
```

```yaml
- id: GN-GEO-151-300
  page: 151
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑶ 세 개 또는 네 개의 벡터의 합을 재배열해 간단히 하는 확인체크(⑶은 결과가 영벡터).
  category: "교환·결합법칙으로 재배열 → 사슬 합성 → 한 벡터 또는 영벡터"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "벡터의 덧셈에 대한 연산 법칙(항을 사슬로 재배열해 간단히 하기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    151-e2 와 같은 골조를 소문항 3개로 반복한다. 확인체크 출발점은 ★1 이지만 ⑶에서 네 항이
    닫힌 사슬을 이뤄 영벡터가 되는 것까지 판단해야 해 M_total 6 → 예제와 같은 ★2 로 둔다.
  tier: star_2
  mechanism_primary: "항을 종점-시점 사슬이 되게 재배열 → 차례로 합성 → 닫힌 사슬이면 영벡터"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\overrightarrow{\pt{BA}}$ ⑵ $\overrightarrow{\pt{AE}}$ ⑶ $\vec{0}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/151-300.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "항의 개수와 점 이름·배열 순서. 제약: 소문항 하나는 사슬이 닫혀 영벡터가 되도록 남겨 두면 확인체크의 점검 기능이 유지된다."
    creative: "(1) 다섯 점으로 늘려 사슬을 길게(★2 유지) (2) 결과를 미리 주고 빠진 한 항을 찾게 하면 역방향이 되어 ★3(I-BW d1) (3) 합을 다각형 둘레로 해석해 그림과 함께 묻기(★2)."
```

```yaml
- id: GN-GEO-151-301
  page: 151
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴⑵ 주어진 두 벡터 등식이 성립함을 덧셈에 대한 연산 법칙으로 보이는 증명 문항.
  category: "좌변 재배열 → 이웃 항 합성 → 우변과 같은 꼴로 도달"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "벡터 등식을 연산 법칙으로 증명하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    한쪽 변을 재배열·합성해 다른 변에 도달시키는 표준 서술. 어느 변에서 출발할지만 고르면
    그 뒤는 151-e2 와 같은 절차라 통찰 0. 서술 부담으로 Mₛ 2·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "간단히 할 수 있는 쪽 변을 교환·결합법칙으로 재배열 → 이웃 항 합성 → 반대 변과 일치"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '풀이 참조 (⑴ $\overrightarrow{\pt{AC}}+\overrightarrow{\pt{DA}}+\overrightarrow{\pt{CB}}$ $=\overrightarrow{\pt{DA}}+\overrightarrow{\pt{AC}}+\overrightarrow{\pt{CB}}$ $=(\overrightarrow{\pt{DA}}+\overrightarrow{\pt{AC}})+\overrightarrow{\pt{CB}}$ $=\overrightarrow{\pt{DC}}+\overrightarrow{\pt{CB}}$ $=\overrightarrow{\pt{DB}}$ ⑵ $\overrightarrow{\pt{AD}}-\overrightarrow{\pt{AB}}+\overrightarrow{\pt{DC}}$ $=(\overrightarrow{\pt{AD}}+\overrightarrow{\pt{DC}})-\overrightarrow{\pt{AB}}$ $=\overrightarrow{\pt{AC}}-\overrightarrow{\pt{AB}}$)'
  answer_source: "계산(답지 「풀이 68쪽」)"
  figure: none
  latex: latex-bank/gn-geo/items/151-301.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수치가 없는 증명 문항. 등식의 항 개수와 점 이름만 바꾼다. 제약: 양변이 실제로 같아야 하고, 한쪽 변만 정리해도 도달할 수 있게 항을 배치한다."
    creative: "(1) 양변에 뺄셈 항을 하나씩 더 넣어 역벡터 변환을 강제(★2, T-부호 +1) (2) 등식이 성립하지 않는 경우를 섞어 참·거짓을 판정하게 하면 ★2~3 (3) 사각형·사면체 위에서 같은 등식을 증명하게 하면 도형 해석이 붙어 ★3."
```

```yaml
- id: GN-GEO-152-e3
  page: 152
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    직육면체에서 $\overrightarrow{\pt{HE}}=\vec{a}$, $\overrightarrow{\pt{HG}}=\vec{b}$,
    $\overrightarrow{\pt{HD}}=\vec{c}$라 할 때 ⑴~⑷ EG, DB, CF, AG를
    $\vec{a}$, $\vec{b}$, $\vec{c}$로 나타내는 필수 예제.
  category: "공간의 벡터를 세 모서리 벡터의 합·차로 분해"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "직육면체의 모서리·면대각선·대각선을 a, b, c 세 방향을 잇는 경로로 바꿔 읽어 대수식으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "직육면체에서 벡터를 세 기저 벡터로 나타내기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    구하는 벡터의 시점에서 종점까지 모서리를 따라가는 경로를 잡고 각 모서리를 ±a, ±b, ±c 로
    치환한다. 공간 배치를 대수식으로 옮기는 표현 전환(RT d1) 한 단계. 기준점 H 가 아닌 곳에서
    출발하는 ⑶⑷에서 방향 부호를 놓치기 쉬워 Mₜ 1. M_total 6 → 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "시점에서 종점까지 모서리 경로로 쪼개기 → 각 모서리를 ±a, ±b, ±c 로 치환 → 합"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $-\vec{a}+\vec{b}$ ⑵ $\vec{a}+\vec{b}$ ⑶ $\vec{a}-\vec{c}$ ⑷ $-\vec{a}+\vec{b}-\vec{c}$'
  answer_source: "본문 풀이"
  figure: "crop:fig-152-e3.png"
  latex: latex-bank/gn-geo/items/152-e3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수치가 없는 문자 문항이라 바꾸는 것은 기준 꼭짓점과 묻는 벡터의 조합이다. 제약: 그림의 꼭짓점 라벨(ABCD-EFGH)과 a, b, c 의 시점을 고정한 채 묻는 벡터만 바꾸고, 답이 세 기저의 ±1 조합으로 닫히게 한다."
    creative: "(1) 기준을 H 대신 A 로 옮겨 세 벡터를 다시 정의(★2 유지) (2) 직육면체 대신 사면체·삼각기둥으로 바꾸면 경로 선택지가 늘어 ★3 (3) 모서리 길이를 주고 구한 벡터의 크기까지 묻게 하면 계산이 붙어 ★3(153-304 골조와 결합)."
```

```yaml
- id: GN-GEO-152-302
  page: 152
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    정육각형 ABCDEF의 세 대각선의 교점 O에 대하여
    $\overrightarrow{\pt{OA}}=\vec{a}$, $\overrightarrow{\pt{OB}}=\vec{b}$일 때
    ⑴ AB ⑵ AE를 $\vec{a}$, $\vec{b}$로 나타내는 확인체크.
  category: "중심 기준 벡터의 차 → 정육각형의 점대칭으로 나머지 꼭짓점 치환"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "정육각형의 중심 O 에 대한 점대칭으로 OE = -b (마주 보는 꼭짓점)임을 읽어 AE를 a, b 로 치환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "정육각형에서 벡터를 두 기저 벡터로 나타내기(중심 기준)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴은 AB = OB - OA 한 단계지만, ⑵는 E 가 O 에 대한 B 의 대칭점이어서 OE = -b 임을 대칭에서
    읽어야 한다(SYM d1). 확인체크 출발점 ★1 에 통찰 1개로 +1 → ★2. 마주 보는 꼭짓점을 잘못
    짝지으면 부호가 뒤집히므로 Mₜ 1.
  tier: star_2
  mechanism_primary: "AB = OB - OA → 중심대칭으로 OE = -b → AE = OE - OA = -a-b"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ $-\vec{a}+\vec{b}$ ⑵ $-\vec{a}-\vec{b}$'
  answer_source: "답지"
  figure: "crop:fig-152-302.png"
  latex: latex-bank/gn-geo/items/152-302.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수치가 없다. 묻는 벡터를 AC, BD, CE 등 다른 조합으로 바꾼다. 제약: 기준이 중심 O 인 한 모든 꼭짓점 벡터는 ±a, ±b, ±(b-a) 로 닫히므로 답이 두 기저의 정수 조합이 되게 고른다."
    creative: "(1) 기준을 꼭짓점 A 로 옮기면 중심 O 를 먼저 찾아야 해 ★3(153-308 골조) (2) 정육각형을 정팔각형으로 바꾸면 대칭 축이 늘어 ★3 (3) 외접원 반지름을 주고 구한 벡터의 크기까지 묻기(★3 · 154-310 골조)."
```

```yaml
- id: GN-GEO-152-303
  page: 152
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    사각형 ABCD의 네 변의 벡터 AB, BC, CD, DA를 각각
    $\vec{a}$, $\vec{b}$, $\vec{c}$, $\vec{d}$라 할 때
    $\vec{a}+\vec{b}+\vec{c}+\vec{d}=\vec{0}$임을 보이는 확인체크.
  category: "네 변을 둘씩 묶어 대각선으로 합성 → 역벡터 쌍 소거"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "다각형의 변 벡터의 합이 영벡터임을 보이기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    네 변을 (AB+BC)+(CD+DA) 로 묶으면 AC+CA 가 되어 영벡터. 묶는 방법이 하나로 정해져 있고
    151-e2 의 닫힌 사슬을 도형에 옮긴 것뿐이라 통찰 0. 증명 서술 부담으로 Mₛ 2·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "AB+BC = AC, CD+DA = CA 로 묶기 → AC+CA = 0"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '풀이 참조 ($\vec{a}+\vec{b}+\vec{c}+\vec{d}$ $=\overrightarrow{\pt{AB}}+\overrightarrow{\pt{BC}}+\overrightarrow{\pt{CD}}+\overrightarrow{\pt{DA}}$ $=(\overrightarrow{\pt{AB}}+\overrightarrow{\pt{BC}})+(\overrightarrow{\pt{CD}}+\overrightarrow{\pt{DA}})$ $=\overrightarrow{\pt{AC}}+\overrightarrow{\pt{CA}}$ $=\vec{0}$)'
  answer_source: "계산(답지 「풀이 68쪽」)"
  figure: "crop:fig-152-303.png"
  latex: latex-bank/gn-geo/items/152-303.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "변의 개수를 4에서 3·5·6으로 바꿀 수 있다(어떤 다각형에서도 성립). 제약: 변 벡터의 방향을 한 방향으로 돌아가게 통일해야 하고, 방향을 섞으면 결론이 영벡터가 아니게 된다."
    creative: "(1) 사면체의 네 면을 도는 닫힌 경로로 공간으로 옮기기(★2~3) (2) 한 변의 벡터를 미지로 두고 나머지 합에서 역산하게 하면 ★3(I-BW d1) (3) 변 방향을 하나만 뒤집어 합이 영벡터가 아님을 보이게 하면 T-부호 함정 중심의 ★2."
```

### 연습문제 STEP 1

```yaml
- id: GN-GEO-153-304
  page: 153
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    한 모서리의 길이가 $2$인 정육면체에서 벡터 $\overrightarrow{\pt{DF}}$의 크기를 구하는 문항.
  category: "벡터의 크기 = 두 점 사이의 거리 → 정육면체의 대각선 길이"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정육면체에서 벡터의 크기(대각선 길이) 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    벡터의 크기를 선분 DF 의 길이로 바꿔 읽으면 D, F 가 마주 보는 꼭짓점이므로 정육면체의
    대각선. 면대각선을 거쳐 피타고라스를 두 번 쓰는 표준 절차라 통찰 0, M_total 6 →
    STEP 1 출발점 ★2 유지. 두 점이 대각선인지 면대각선인지 그림에서 확인하는 것이 유일한 함정.
  tier: star_2
  mechanism_primary: "|DF| 를 선분 DF 의 길이로 바꾸기 → D, F 는 마주 보는 꼭짓점 → 모서리 2 인 정육면체의 대각선 길이"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2\sqrt{3}$'
  answer_source: "답지"
  figure: "crop:fig-153-304.png"
  latex: latex-bank/gn-geo/items/153-304.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모서리의 길이(2 → 1, 3, a). 제약: 답이 모서리 길이의 루트3 배로 나오므로 유리화·간단한 무리수 꼴이 유지되는 값을 고른다. 정육면체를 직육면체로 바꾸면 세 변 길이를 모두 줘야 한다."
    creative: "(1) 묻는 벡터를 면대각선(예: AC)으로 바꾸면 한 단계 줄어 ★1~2 (2) 두 벡터의 합의 크기를 묻게 하면 합성 단계가 붙어 ★3 (3) 직육면체로 바꾸고 세 모서리를 다르게 주면 계산 부담만 늘어 ★2 유지(질 저하 주의)."
```

```yaml
- id: GN-GEO-153-305
  page: 153
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    서로 다른 네 점 A, B, C, D에 대하여 CA-DA+BA+DB와 항상 같은 벡터를
    다섯 선택지에서 고르는 문항.
  category: "뺄셈 항을 역벡터로 바꾸기 → 사슬로 재배열 → 한 벡터"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "네 점 사이 벡터의 합·차를 간단히 하기(선택형)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    -DA 를 AD 로 바꾼 뒤 CA+AD+DB+BA 순서로 세우면 중간점이 차례로 소거된다. 151-e2 의 재배열
    절차를 뺄셈이 섞인 4항에 적용한 것이라 통찰 0. 부호 전환 함정 하나·M_total 6 → STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: "-DA 를 AD 로 치환 → CA+AD+DB+BA 사슬로 재배열 → 중간점 소거 → CA"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/153-305.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "항의 개수(4 → 3, 5)와 점 이름, 각 항의 부호 배치. 제약: 재배열 후 중간점이 모두 소거돼 답이 선택지에 있는 한 벡터가 되어야 하고, 오답 선택지는 부호를 뒤집거나 소거 순서를 틀렸을 때 나오는 벡터로 만든다."
    creative: "(1) 답이 영벡터가 되게 사슬을 닫기(★2 유지) (2) 식을 주고 어떤 항을 더해야 지정한 벡터가 되는지 묻기(★3 · I-BW d1) (3) 네 점을 사각형의 꼭짓점으로 두고 그림과 함께 묻기(★2~3)."
```

```yaml
- id: GN-GEO-153-306
  page: 153
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    서로 다른 세 점 A, B, C에 대한 벡터 등식 다섯 개 중 옳지 않은 것을 고르는 문항.
  category: "선택지마다 사슬 합성·역벡터·시점 통일로 정리 → 성립 여부 판정"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "벡터의 합·차에 대한 등식의 참·거짓 판정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    다섯 선택지를 각각 한 줄로 정리하는 반복 작업이고 쓰는 도구는 앞 문항과 같다. 통찰 0.
    다만 뺄셈 항을 역벡터로 바꿀 때 AB-BC 를 AB+CB 로 읽는 T-부호 함정이 핵심이라 Mₜ 1,
    M_total 6 → STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: "선택지마다 뺄셈을 역벡터 덧셈으로 바꿔 사슬 합성 → 좌변과 우변 비교 → 어긋나는 하나 선택"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/153-306.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "선택지 개수와 각 등식의 항 배열. 제약: 틀린 선택지는 하나만 두고, 나머지 넷은 사슬 합성·역벡터·영벡터 성질을 각각 한 가지씩 확인하도록 고르게 배치한다."
    creative: "(1) 옳은 것을 모두 고르는 ㄱㄴㄷ 보기로 바꾸면 분기 판단이 늘어 ★3 (2) 세 점을 네 점으로 늘려 항을 길게(★2 유지) (3) 틀린 등식을 옳게 고치도록 서술형으로 바꾸면 ★3."
```

```yaml
- id: GN-GEO-153-307
  page: 153
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    한 변의 길이가 $2$인 정사각형 ABCD에서
    $\overrightarrow{\pt{AB}}-\overrightarrow{\pt{CD}}+\overrightarrow{\pt{BD}}$의
    크기를 구하는 문항.
  category: "도형의 평행 관계로 벡터 상등 읽기 → 사슬 합성 → 대각선 길이"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "정사각형에서 CD 와 AB 가 크기가 같고 방향이 반대임을 읽어 -CD 를 AB 로 바꿔 같은 벡터끼리 묶음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "정사각형에서 벡터의 합·차의 크기 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    -CD 를 AB 로 바꾸는 순간 식이 AB+(AB+BD) = AB+AD 가 되어 대각선 AC 하나로 닫힌다(EQV d1).
    그 착안 없이 좌표를 잡아도 풀리지만 단계가 늘어난다. 통찰 1개·M_total 5 → STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: "CD = -AB 로 치환 → AB+AB+BD = AB+AD → 평행사변형법으로 대각선 AC → 길이"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2\sqrt{2}$'
  answer_source: "답지"
  figure: "crop:fig-153-307.png"
  latex: latex-bank/gn-geo/items/153-307.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "한 변의 길이(2 → 1, 3, a). 제약: 정사각형이면 답이 변의 길이의 루트2 배로 닫히므로 무리수 꼴을 원하지 않으면 직사각형으로 바꾸고 두 변을 모두 줘야 한다."
    creative: "(1) 항을 하나 더 넣어 합이 한 변이 되게 하면 ★2 유지 (2) 정사각형을 정삼각형·정육각형으로 바꾸면 길이 계산에 각이 붙어 ★3(154-310 골조) (3) 크기 대신 결과 벡터를 두 기저로 나타내게 하면 ★2."
```

```yaml
- id: GN-GEO-153-308
  page: 153
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    정육각형 ABCDEF의 세 대각선의 교점 O에 대하여
    $\overrightarrow{\pt{AB}}=\vec{a}$, $\overrightarrow{\pt{AF}}=\vec{b}$일 때
    $\overrightarrow{\pt{EF}}$를 $\vec{a}$, $\vec{b}$로 나타내는 문항.
  category: "꼭짓점 기준 두 벡터 → 평행사변형으로 중심 벡터 만들기 → 중심대칭으로 치환"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "정육각형에서 ABOF 가 평행사변형이어서 AO = a+b 이고, EF 는 AO 와 크기가 같고 방향이 반대임을 중심대칭에서 읽음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "정육각형에서 벡터를 두 기저 벡터로 나타내기(꼭짓점 기준)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    기준이 중심 O 가 아니라 꼭짓점 A 라서 152-302 처럼 바로 빼지 못한다. ABOF 가 평행사변형임을
    보고 AO = a+b 를 먼저 만든 뒤 EF 가 그 역벡터임을 대칭에서 읽어야 해 SYM d2.
    [분류 이슈] 벤더는 STEP 1(★2)이지만 중심을 스스로 만들어야 해 체감은 ★3 쪽 — 라벨은 ★2 유지.
  tier: star_2
  mechanism_primary: "ABOF 가 평행사변형 → AO = a+b → EF 는 AO 의 역벡터 → -a-b"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-\vec{a}-\vec{b}$'
  answer_source: "답지"
  figure: "crop:fig-153-308.png"
  latex: latex-bank/gn-geo/items/153-308.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수치가 없다. 기준 두 벡터(AB, AF)와 묻는 벡터(EF)의 조합만 바꾼다. 제약: 정육각형의 모든 변·대각선은 a, b 의 정수 조합으로 닫히므로 묻는 벡터가 그 조합 안에 있어야 하고, 그림의 꼭짓점 순서 라벨은 고정한다."
    creative: "(1) 묻는 벡터를 CD, DE 등으로 바꿔 같은 골조 반복(★2 유지) (2) 대각선 AD, BE 를 묻게 하면 중심 경유 단계가 하나 더 붙어 ★3 (3) 외접원 반지름을 주고 크기까지 묻기(★3 · 154-310 골조)."
```

### 연습문제 STEP 2

```yaml
- id: GN-GEO-154-309
  page: 154
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    정육면체의 전개도에 화살표로 그려진 $\overrightarrow{\pt{AB}}$에 대하여,
    전개도를 접어 만든 정육면체에서 이와 서로 같은 벡터를 구하는 문항.
  category: "전개도 접기 → 꼭짓점 대응 → 크기·방향이 같은 벡터 찾기"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "전개도의 평면 배치를 접은 입체의 꼭짓점 대응으로 옮겨, 서로 다른 면에 놓인 두 면대각선이 같은 방향·크기임을 확인"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "전개도를 접은 입체에서 서로 같은 벡터 찾기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    평면 전개도에서는 AB 와 DC 가 전혀 다른 위치에 있어 보이지만, 접은 뒤의 꼭짓점 대응을
    세워야 두 면대각선이 평행하고 길이가 같음이 드러난다(RT d2). 대응 꼭짓점 오판과 방향
    뒤집힘 두 함정이 있어 Mₜ 2·M_total 7 → STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "전개도를 접어 꼭짓점 대응 잡기 → AB 가 놓인 면과 마주 보는 면의 대각선 비교 → 방향·크기가 같은 DC"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\overrightarrow{\pt{DC}}$'
  answer_source: "답지"
  figure: "crop:fig-154-309.png"
  latex: latex-bank/gn-geo/items/154-309.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수치가 없다. 전개도의 배치(십자형·계단형)와 화살표를 그리는 면·방향을 바꾼다. 제약: 전개도가 실제로 정육면체로 접혀야 하고, 화살표는 면대각선이나 모서리 중 하나로 두어 답이 유일하게 정해지도록 라벨을 배치한다."
    creative: "(1) 같은 벡터 대신 역벡터(크기가 같고 방향이 반대)를 찾게 하기(★3 유지) (2) 접었을 때 겹치는 꼭짓점을 모두 쓰게 하면 ★2 로 내려감 (3) 모서리 길이를 주고 두 벡터의 합의 크기를 묻게 하면 계산이 붙어 ★4."
```

```yaml
- id: GN-GEO-154-310
  page: 154
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    반지름의 길이가 $1$인 원에 내접하는 정육각형 ABCDEF에서
    $\overrightarrow{\pt{AB}}+\overrightarrow{\pt{FE}}-\overrightarrow{\pt{AF}}$의
    크기를 구하는 문항.
  category: "시점이 같은 두 벡터의 차로 묶기 → 평행사변형법 합성 → 정육각형의 길이 관계"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "시점이 A 로 같은 AB-AF 를 FB 한 벡터로 묶어 세 항을 두 항으로 줄임"
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "남은 FB, FE 를 외접원 반지름 1 인 정육각형의 실제 길이·끼인각으로 옮겨 합벡터의 크기를 도형에서 읽음"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "정육각형에서 벡터의 합·차의 크기 구하기(외접원 반지름 이용)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    세 항을 그대로 두면 길이 계산이 엉키고, AB-AF = FB 로 먼저 묶어야 FB+FE 두 항의
    평행사변형 합성으로 정리된다(EQV d1 → RT d1). 정육각형은 반지름이 곧 한 변이라는 관계를
    써야 크기가 나온다. 통찰 2개·M_total 6 → STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "AB-AF = FB → FB+FE 를 평행사변형법으로 합성 → 반지름 1 인 정육각형의 길이 관계로 크기 2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$2$"
  answer_source: "답지"
  figure: "crop:fig-154-310.png"
  latex: latex-bank/gn-geo/items/154-310.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "외접원 반지름(1 → 2, r). 제약: 정육각형은 반지름과 한 변의 길이가 같아 답이 반지름의 정수배·루트3 배로 깔끔하게 닫힌다. 정사각형·정팔각형으로 바꾸면 이 관계가 깨지므로 길이를 따로 줘야 한다."
    creative: "(1) 항의 조합을 AB+CD-AD 등으로 바꿔 같은 묶기 골조 반복(★3 유지) (2) 크기 대신 결과 벡터를 AB, AF 로 나타내게 하면 ★2(153-308 골조) (3) 정육각형을 정삼각형·정십이각형으로 바꾸면 끼인각 계산이 붙어 ★4."
```

```yaml
- id: GN-GEO-154-311
  page: 154
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    사각형 ABCD와 임의의 점 O에 대하여
    $\overrightarrow{\pt{OA}}+\overrightarrow{\pt{OC}}=\overrightarrow{\pt{OB}}+\overrightarrow{\pt{OD}}$
    가 성립할 때 사각형 ABCD가 어떤 사각형인지 답하는 문항.
  category: "위치벡터 등식의 동치 변환 → 벡터 상등 → 사각형 판정"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "O 를 기준으로 한 등식을 OA-OB = OD-OC 로 옮겨 기준점 O 가 사라진 BA = CD 꼴의 벡터 상등으로 바꿈"
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "벡터 상등을 「한 쌍의 대변이 평행하고 길이가 같다」는 도형 조건으로 옮겨 사각형의 이름을 결정"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "위치벡터 등식으로 사각형의 모양 판정하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    O 가 임의의 점이라는 것이 핵심 신호다. 항을 옮겨 두 변의 차로 만들면 O 가 소거되고 BA = CD
    가 남는다(EQV d2). 그다음 벡터 상등을 도형 조건으로 되돌려야 답이 나온다(RT d1).
    임의의 점·일반 사각형이라 Mₐ 3·M_total 7. 통찰 2개 → STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "OA-OB = OD-OC 로 이항 → BA = CD (O 소거) → 한 쌍의 대변이 평행하고 길이가 같음 → 평행사변형"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "평행사변형"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/154-311.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수치가 없다. 등식의 짝(OA+OC 대 OB+OD)을 다른 조합으로 바꿀 수 있다. 제약: 이항했을 때 기준점 O 가 반드시 소거돼야 하고, 남는 벡터 상등이 사각형의 이름을 하나로 결정해야 한다."
    creative: "(1) 결론을 미리 주고 등식을 증명하게 하면 역방향이 되어 ★3 유지 (2) 크기 조건(|OA-OC| = |OB-OD|)을 추가하면 직사각형·마름모 판정으로 분기가 생겨 ★4(I-MI) (3) 사각형을 사면체로 올려 공간으로 옮기면 ★4."
```

### 연습문제 실력 UP

```yaml
- id: GN-GEO-154-312
  page: 154
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 실력 UP"
  summary: |
    쌍곡선 $\dfrac{x^2}{2}-\dfrac{y^2}{2}=1$의 꼭짓점 중 $x$좌표가 양수인 점을 A라 할 때,
    쌍곡선 위의 점 P에 대하여 $|\overrightarrow{\pt{OA}}+\overrightarrow{\pt{OP}}|=k$를
    만족시키는 점 P의 개수가 $3$이 되는 상수 $k$를 구하는 5지선다(O는 원점).
  category: "벡터의 합을 평행이동으로 해석 → 자취 곡선과 원의 교점 개수 조건"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "OA+OP 를 P 를 OA 만큼 평행이동한 점 Q 의 위치벡터로 보아, 조건을 「원점 중심 반지름 k 인 원과 평행이동한 쌍곡선의 교점 개수」 문제로 전환"
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "교점이 3개가 되는 배치를 두 분지로 나눠 따지고, 원점이 평행이동한 쌍곡선의 한 꼭짓점이 되는 특수 위치에서 접점 1 + 2 로 갈라짐을 확인"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "벡터의 합의 크기 조건과 이차곡선의 교점 개수(평행이동 자취)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    OA 가 상수벡터이므로 OA+OP 의 종점 Q 는 쌍곡선을 A 만큼 평행이동한 곡선 위를 움직인다(RT d2).
    그러면 |OQ| = k 는 원점 중심 원이 되고, 개수 3 은 두 분지 중 한쪽과 2점, 다른 쪽과 접점 1점으로
    갈리는 특수 배치에서만 생긴다(MI d2). 평행이동한 곡선의 꼭짓점 위치를 놓치면 답이 어긋난다.
    실력 UP·교육청 기출 출발점 ★4, 통찰 2개로 유지.
  tier: star_4
  mechanism_primary: "OA+OP = OQ 로 두기 → Q 의 자취는 쌍곡선을 A 만큼 평행이동한 곡선 → |OQ| = k 인 원과의 교점이 3개가 되는 k"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/154-312.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "쌍곡선의 두 분모(2, 2)와 요구하는 점의 개수(3 → 1, 2, 4). 제약: A 가 꼭짓점이어야 평행이동한 곡선의 꼭짓점이 원점에 오고 개수 3 인 k 가 하나로 정해진다. 분모를 바꾸면 답이 무리수로 지저분해지므로 제곱수 조합을 고른다."
    creative: "(1) 쌍곡선을 타원·포물선으로 바꾸면 분지가 하나여서 개수 조건이 달라져 ★3~4 (2) A 를 꼭짓점이 아닌 초점으로 두면 특수 배치가 사라져 ★5 후보(I-VF 추가) (3) k 를 주고 점의 개수를 묻는 역방향으로 뒤집으면 ★3."
```

```yaml
- id: GN-GEO-154-313
  page: 154
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    중심이 $\pt{A}(0,\,1)$이고 반지름의 길이가 $1$인 원 위를 움직이는 점 P와 점 $\pt{B}(2,\,1)$에
    대하여 $|\overrightarrow{\pt{OP}}+\overrightarrow{\pt{OB}}|$의 최댓값과 최솟값을 구하는
    문항(O는 원점).
  category: "벡터의 합을 평행이동으로 해석 → 자취 원 → 원점과의 거리 최대·최소"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "OP+OB 를 P 를 OB 만큼 평행이동한 점 Q 의 위치벡터로 보아, Q 의 자취가 중심 (2, 2)·반지름 1 인 원임을 읽음"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "|OQ| 의 최대·최소를 「원점과 원의 중심 사이 거리에 반지름을 더하고 뺀 값」으로 바꿈"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "벡터의 합의 크기의 최대·최소(평행이동한 자취 원)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    OB 가 상수벡터라 합벡터의 종점은 원을 B 만큼 평행이동한 원 위를 돈다(RT d2). 그 뒤는 원점과
    원의 위치 관계에서 중심거리 ± 반지름(EQV d1). 자취를 잡지 못하면 삼각함수로 헤매게 된다.
    실력 UP 출발점 ★4, 통찰 2개로 유지.
    [분류 이슈] 자취를 잡은 뒤는 표준 절차라 체감은 ★3 쪽 — 벤더 구역을 존중해 라벨은 ★4 유지.
  tier: star_4
  mechanism_primary: "OP+OB = OQ 로 두기 → Q 의 자취는 중심 (2, 2)·반지름 1 인 원 → 원점과 중심 거리에 반지름을 더하고 빼기"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '최댓값: $2\sqrt{2}+1$, 최솟값: $2\sqrt{2}-1$'
  answer_source: "답지"
  figure: "crop:fig-154-313.png"
  latex: latex-bank/gn-geo/items/154-313.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "원의 중심 A, 반지름, 점 B 의 좌표. 제약: 평행이동한 중심 A+B 와 원점 사이 거리가 반지름보다 커야 최솟값이 양수로 나오고, 그 거리가 정수나 간단한 무리수가 되도록 좌표를 고른다."
    creative: "(1) 원점 대신 다른 정점에서의 거리로 바꾸기(★4 유지) (2) 원을 선분·포물선으로 바꾸면 최대·최소 판정에 경계 검토가 붙어 ★4~5(I-VF) (3) 최댓값만 주고 반지름을 역산하게 하면 ★4(I-BW)."
```

## 표본 판정 요약 (19문)

- ★ 분포: ★1 3 · ★2 11 · ★3 3 · ★4 2 · ★5 0
- 통찰형 9 · 절차형 10 · premium 0
- 통찰 유형 분포: I-RT 5 · I-EQV 4 · I-SYM 2 · I-MI 1 (총 12 라벨 · depth 3 없음)
- type_hint 상위 5: 「벡터의 덧셈에 대한 연산 법칙(항을 사슬로 재배열)」 2 · 「정육각형에서 벡터를 두 기저 벡터로 나타내기」 2 · 「벡터의 합·차를 간단히 하기(문자·선택형)」 2 · 「도형에서 벡터의 합·차의 크기 구하기」 3(153-304 · 153-307 · 154-310) · 「벡터의 합을 평행이동 자취로 보는 최댓값·교점 개수」 2(154-312 · 154-313)
- 구역별 ★: 개념원리 익히기 3문 모두 ★1 · 필수·발전 예제 6문 모두 ★2 · STEP 1 5문 모두 ★2 · STEP 2 3문 모두 ★3 · 실력 UP 2문 모두 ★4 — 벤더 난이도 신호와 M·I 판정이 이 단원에서는 거의 그대로 맞았다(조정은 152-302 의 +1 하나뿐).
- 그림: 11문(`crop:fig-150-297.png` · `fig-150-298` · `fig-152-e3` · `fig-152-302` · `fig-152-303` · `fig-153-304` · `fig-153-307` · `fig-153-308` · `fig-154-309` · `fig-154-310` · `fig-154-313`). 나머지 8문은 문자·좌표만으로 진술된다.
- 변형 원본으로서의 특징: 앞 9문은 수치가 거의 없어 **숫자 변형 여지가 좁고 항 배열·점 이름 변형이 주**다. 숫자 변형이 실제로 의미 있는 것은 길이·좌표가 들어간 153-304 · 153-307 · 154-310 · 154-312 · 154-313 다섯 문항이다.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-GEO-153-308 | 벤더 STEP 1(★2)이지만 기준이 중심 O 가 아닌 꼭짓점 A 여서 중심 벡터 AO 를 스스로 만들어야 함(SYM d2). 같은 정육각형이라도 152-302(중심 기준)보다 한 단계 위 — 라벨은 ★2 유지 | ★2 / ★3 |
| GN-GEO-154-313 | 실력 UP 구역(★4 출발)이나 평행이동 자취를 잡은 뒤는 「중심거리 ± 반지름」 표준 절차라 체감 ★3 — 벤더 구역을 존중해 ★4 유지 | ★3 / ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **반복된 type_hint**: ① 「항을 사슬로 재배열해 간단히 하기」(150-299 · 151-e2 · 151-300 · 151-301 · 153-305 · 153-306) — 이 단원에서 가장 두꺼운 층으로 6문. ② 「도형에서 벡터를 기저 벡터로 나타내기」(152-e3 · 152-302 · 153-308). ③ 「도형에서 벡터의 합·차의 크기」(153-304 · 153-307 · 154-310). ④ 「벡터의 합을 평행이동 자취로 보기」(154-312 · 154-313).
- **따로 세워야 할 유형**: ④는 앞의 셋과 도구가 다르다(자취·교점 개수·최대최소). ★4 변별 슬롯의 자격을 주는 유형이므로 「벡터의 합의 크기 조건과 자취」로 독립 유형을 세우는 편이 낫다. 154-309(전개도 접기)도 입체 대응이라는 전혀 다른 도구를 써서 ①~③ 어디에도 들어가지 않는다.
- **통합해도 될 유형**: ①의 6문은 「합의 재배열」과 「차의 시점 통일」로 둘까지 쪼갤 수 있으나, 실제 골조가 같고 오답 원인도 같은 T-부호 하나라 한 유형으로 묶고 난이도만 ★1~2 로 나누는 것이 낫다. ②의 평면(정육각형)과 공간(직육면체)은 기저의 개수만 다르므로 한 유형의 두 변형으로 둔다.
- **기저 벡터 개수 표기**: 카탈로그를 만들 때 ②·③에서 「기저 2개(평면)/3개(공간)」를 유형 속성으로 남겨 두면 변형 생성 시 난이도 조절 손잡이가 된다.
