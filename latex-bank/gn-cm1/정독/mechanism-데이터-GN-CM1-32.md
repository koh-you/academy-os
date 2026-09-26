---
name: mechanism-데이터-GN-CM1-32
description: 개념원리 공통수학1 32 행렬(1/1 · 276~278쪽 9문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학1(22개정) · 전사본 latex-bank/gn-cm1
  section: 32 행렬
  unit_code: "32"
  part: "1/1"
  extract_range: "276~278쪽 · 276-e1~278-614"
  total_problems: 9
  unit_total: 9
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm1/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm1/items/<id>.tex
  image_source: latex-bank/gn-cm1/figures/ (crops.json)
---

# 개념원리 공통수학1 · 32 행렬 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 공통수학1 276~278쪽 세 쪽에 들어 있는 32단원 행렬 전 9문항(필수 예제 3 · 확인체크 6)을 다룬다. 전사본의 group section 이 「필수·발전 예제」 하나뿐이라 절도 하나다. 개념원리 고등의 난이도 신호는 구역과 예제 태그다 — 「확인체크」는 개념 확인이라 ★1 출발, 「필수」 예제는 ★2 출발이며, 여기서 M_total 과 통찰로 ±1 조정했다. 이 단원은 행렬 단원의 도입부라 골조가 세 가지뿐이다: ⑴ 행·열과 (i,j) 성분 읽기, ⑵ 성분의 일반식 a_{ij} 에 i, j 를 대입해 배열 만들기, ⑶ 두 행렬이 같을 조건(대응 성분이 모두 같다)으로 미정계수 구하기. 곱셈·거듭제곱·케일리식은 이 범위에 없으므로 통찰은 거의 발생하지 않고, 함정은 행과 열의 순서를 바꿔 읽는 T-표기와 성분별 방정식의 해를 모두 조합하지 않는 T-범위에 몰려 있다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(통찰 유형·depth·근거) · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 창의 변형과 ★ 변동 지점)를 채웠다. 그림 문항은 통신망 인접행렬 1문(277-612)이다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-CM1-276-e1
  page: 276
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    3×3 행렬 A 가 주어졌을 때 ⑴ 제2행 성분의 합 ⑵ 제3열 성분의 합 ⑶ (2,1) 성분과 (1,3) 성분의 곱 ⑷ a_{23}-a_{32} 의 값을 각각 구하기.
  category: "행·열과 (i,j) 성분의 뜻 → 해당 성분만 골라 합·곱·차"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "행렬의 뜻 — 행·열 번호와 (i,j) 성분 읽기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    네 소문항 모두 정의대로 위치를 찾아 더하거나 곱하는 한 단계뿐이고 식 변형이 없다.
    함정은 행과 열을 바꿔 읽거나 a_{23} 과 a_{32} 를 혼동하는 T-표기 하나뿐이다.
    필수 예제 출발 ★2 이나 통찰 0 · M_total 5 → −1 조정으로 ★1.
    [분류 이슈] 벤더 「필수」 예제인데 내용이 순수 정의 확인이라 ★1/★2 가 갈린다.
  tier: star_1
  mechanism_primary: "행·열 번호로 성분 위치 확정 → 해당 성분만 골라 합·곱·차 계산"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $1$ ⑵ $15$ ⑶ $14$ ⑷ $-9$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/276-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "행렬 9개 성분의 값과 묻는 행·열 번호(제1행/제2열 등)를 자유롭게 바꿀 수 있음. 제약: 성분 값이 한 자리 정수여야 암산 한 줄로 끝나고, ⑶의 곱은 두 성분 중 하나가 0 이 되면 확인 가치가 사라지므로 0 이 아닌 위치를 고를 것. ⑷는 a_{ij} 와 a_{ji} 가 다른 값이어야 순서 혼동을 걸러낸다."
    creative: "(1) 행렬 크기를 3×4 로 바꿔 행과 열의 개수가 다르게 하기(골조·★1 유지, 열 번호 범위 확인이 추가됨) (2) 성분의 합 대신 대각선 성분의 합(대각합)을 묻기(★1) (3) 성분을 문자로 주고 a_{12}=a_{21} 이 되도록 하는 값을 묻기 → 역방향이 되어 ★2."
```

```yaml
- id: GN-CM1-276-609
  page: 276
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    3×2 행렬 A 가 주어졌을 때 ⑴ 제1열 성분의 합 ⑵ 제2행 성분의 합 을 구하기.
  category: "행·열의 뜻 → 해당 줄의 성분 합"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "행렬의 뜻 — 행·열 번호와 (i,j) 성분 읽기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    276-e1 의 앞 두 소문항과 같은 골조이고 행렬이 3×2 라 열은 두 개, 행은 세 개다.
    제1열은 세 성분, 제2행은 두 성분으로 개수가 달라 행·열 구분만 확인한다.
    확인체크 출발 ★1 · 통찰 0 · M_total 4 → ★1 유지.
  tier: star_1
  mechanism_primary: "제1열·제2행의 성분 위치 확정 → 그 줄만 더하기"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $3$ ⑵ $1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/276-609.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "6개 성분 값과 묻는 행·열 번호를 바꿀 수 있음. 제약: 정사각행렬이 아닌 3×2(또는 2×3)를 유지해야 행과 열의 성분 개수가 달라져 구분 확인이 된다. 합이 0 이 되면 계산 실수와 구분이 안 되므로 피한다."
    creative: "(1) 제3행처럼 존재하지 않는 열을 묻는 보기를 섞어 행·열 개수를 따지게 하기(★1) (2) 모든 성분의 합과 각 행의 합의 관계를 묻기(★1) (3) 열의 합이 서로 같아지도록 한 성분을 미지수로 두기 → 역방향 한 단계 추가로 ★2."
```

```yaml
- id: GN-CM1-276-610
  page: 276
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    3×3 행렬 A 가 주어졌을 때 ⑴ (1,2) 성분과 (3,1) 성분의 합 ⑵ a_{11}+a_{23}-a_{32} 의 값을 구하기.
  category: "(i,j) 성분의 뜻 → 지정된 성분 골라 합·차"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "행렬의 뜻 — 행·열 번호와 (i,j) 성분 읽기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (i,j) 는 i 행 j 열이라는 약속만 알면 해당 자리 수를 읽어 더하고 빼면 끝난다.
    ⑵에서 a_{23} 과 a_{32} 가 함께 나와 순서 혼동(T-표기)만 한 번 확인한다.
    확인체크 출발 ★1 · 통찰 0 · M_total 4 → ★1 유지.
  tier: star_1
  mechanism_primary: "(i,j)=i행 j열 약속으로 위치 확정 → 지정 성분의 합·차 계산"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $4$ ⑵ $-5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/276-610.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "9개 성분 값과 지정하는 첨자 쌍을 바꿀 수 있음. 제약: a_{ij} 와 a_{ji} 를 반드시 한 쌍 넣고 두 값이 달라야 순서 혼동이 걸러진다. 부호가 다른 성분을 섞어야 차 계산이 의미를 가진다."
    creative: "(1) 첨자 대신 말로 「제2행 제3열의 성분」이라 쓰기(★1) (2) a_{ij}=a_{ji} 가 되는 (i,j) 를 모두 찾게 하기 → 대칭 확인으로 ★2 (3) 성분 하나를 미지수로 두고 a_{11}+a_{23}-a_{32}=0 이 되게 하는 값을 묻기 → 역방향 ★2."
```

```yaml
- id: GN-CM1-277-e2
  page: 277
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    (i,j) 성분 a_{ij} 가 ⑴ 3i-2j ⑵ i=j 이면 1, i≠j 이면 0 으로 주어질 때(i=1,2 · j=1,2,3) 행렬 A 를 각각 구하기.
  category: "성분의 일반식에 i, j 대입 → 2×3 배열로 나열"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "(i,j) 성분의 일반식으로 행렬 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    i 의 범위와 j 의 범위가 행렬의 꼴(2×3)을 정한다는 것을 먼저 읽어야 한다.
    나머지는 여섯 쌍 (i,j) 를 일반식에 대입해 자리에 맞게 배열하는 반복 절차다.
    ⑵는 조건식이지만 i=j 인 자리만 1 이라 대각 위치 확인 한 번으로 끝난다.
    필수 예제 출발 ★2 · 통찰 0 이나 M_total 6 이라 감점 없이 ★2.
  tier: star_2
  mechanism_primary: "i, j 범위로 행렬 크기 확정 → 여섯 쌍 (i,j) 를 일반식에 대입 → 자리에 맞게 배열"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\begin{pmatrix} 1 & -1 & -3 \\ 4 & 2 & 0 \end{pmatrix}$ ⑵ $\begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \end{pmatrix}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/277-e2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일반식의 계수(3i-2j 의 3 과 -2)와 i, j 의 범위를 바꿀 수 있음. 제약: 성분이 한 자리 정수로 떨어지도록 계수를 고르고, i 범위와 j 범위를 다르게 두어야 행과 열을 혼동한 답(전치)이 걸러진다. ⑵의 1·0 은 단위행렬 도입을 겨냥한 값이라 정사각으로 바꾸면 의미가 더 분명해진다."
    creative: "(1) 일반식을 i+j 의 나머지처럼 주기적인 식으로 바꾸기(골조 유지 ★2) (2) 조건식을 i<j / i=j / i>j 세 갈래로 늘리면 경계 확인이 늘어 ★2 상단 (3) 행렬을 먼저 주고 a_{ij} 의 일반식을 찾게 하면 역방향 규칙 발견이 되어 I-PD·★3 (4) i 의 범위만 주고 열의 개수를 조건에서 결정하게 하면 ★3."
```

```yaml
- id: GN-CM1-277-611
  page: 277
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    (i,j) 성분 a_{ij} 가 ⑴ i^2-3j (i,j=1,2) ⑵ i≤j 이면 i, i>j 이면 -j (i,j=1,2,3) 로 주어질 때 행렬 A 를 각각 구하기.
  category: "성분의 일반식·조건식에 i, j 대입 → 정사각 배열로 나열"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "(i,j) 성분의 일반식으로 행렬 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    277-e2 와 같은 대입 절차지만 ⑵는 3×3 이라 아홉 자리를 i≤j 와 i>j 로 갈라 채운다.
    i≤j 에 등호가 있어 대각 성분이 위쪽 규칙을 따른다는 경계 확인(T-경계)이 핵심 함정이다.
    갈래는 있으나 각 자리에서 어느 규칙인지 바로 정해지므로 독립 분기가 아니어서 통찰로 세지 않았다.
    확인체크 출발 ★1 이나 M_total 6 이고 필수 예제 277-e2 와 같은 골조·부담이라 ★2.
  tier: star_2
  mechanism_primary: "i, j 범위로 행렬 크기 확정 → 각 자리에서 i 와 j 의 대소로 규칙 선택 → 대입·배열"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\begin{pmatrix} -2 & -5 \\ 1 & -2 \end{pmatrix}$ ⑵ $\begin{pmatrix} 1 & 1 & 1 \\ -1 & 2 & 2 \\ -1 & -2 & 3 \end{pmatrix}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/277-611.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴의 i^2-3j 에서 차수와 계수, ⑵의 두 갈래 식(i 와 -j)과 행렬 크기를 바꿀 수 있음. 제약: ⑵는 등호가 어느 갈래에 붙는지(i≤j 인지 i<j 인지)가 대각 성분을 바꾸므로 반드시 한쪽에만 붙이고, 두 갈래 값이 서로 달라야 위·아래 삼각의 구분이 드러난다."
    creative: "(1) 등호를 i<j 로 옮겨 대각 규칙만 바꾸기(★2 유지, 오답 유도 강함) (2) 세 갈래(i<j, i=j, i>j)로 늘리기(★2) (3) 완성된 행렬이 대칭행렬이 되도록 갈래 식을 정하라고 묻기 → 역방향·대칭 활용으로 ★3 (4) 일반식을 주지 않고 대각 위와 아래의 규칙만 말로 설명해 행렬을 만들게 하면 표현 전환이 생겨 ★3."
```

```yaml
- id: GN-CM1-277-612
  page: 277
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    세 도시 P1, P2, P3 사이의 통신망 그림에서 두 도시 사이에 직접 연결된 통신망의 수를 (i,j) 성분으로 하는 3×3 행렬 A 를 구하기.
  category: "그림의 연결 관계 → 인접행렬로 옮기기"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "그림(도시와 선)의 연결 관계를 행렬의 자리와 수로 옮김 — 그림 그대로는 계산이 진행되지 않는다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "연결 관계(통신망·도로망)를 행렬로 나타내기 — 인접행렬"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    그림의 선을 세는 일 자체는 쉽지만, 어느 쌍이 어느 자리인지 대응시키는 표현 전환이 풀이의 본질이다.
    자기 자신과의 연결이 없어 대각 성분이 모두 0 이고, P_i-P_j 와 P_j-P_i 가 같은 선이라 대칭행렬이 된다는 점을 확인해야 한다.
    확인체크 출발 ★1 이나 표현 전환 통찰 1개(RT d1)·M_total 6 → ★2.
    [분류 이슈] 대응 규칙이 발문에 그대로 주어져 있어 단순 세기(절차형)로 볼 여지도 있다.
  tier: star_2
  mechanism_primary: "그림에서 각 도시 쌍의 직접 연결 선 수 세기 → (i,j) 자리에 기입 → 대각 0·대칭 확인"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\begin{pmatrix} 0 & 3 & 2 \\ 3 & 0 & 1 \\ 2 & 1 & 0 \end{pmatrix}$'
  answer_source: "답지"
  figure: 'crop:fig-277-612.png'
  latex: latex-bank/gn-cm1/items/277-612.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 도시 쌍의 선 개수와 도시 수를 바꿀 수 있음. 제약: 그림과 답이 함께 바뀌므로 크롭을 다시 만들지 않으면 선 개수는 고정이다. 그림을 새로 그리는 경우 도시 라벨 P1, P2, P3 의 배치와 번호는 그대로 두고, 연결이 하나도 없는 쌍(성분 0)을 하나 넣으면 대각 0 과 혼동되지 않도록 발문에서 자기 연결을 명시할 것."
    creative: "(1) 도시를 네 곳으로 늘려 4×4 로 만들기(골조·★2 유지) (2) 행렬을 주고 그림을 그리게 하는 역방향(★2~3) (3) 한 방향으로만 통하는 일방 통신망을 섞으면 대칭이 깨져 (i,j) 와 (j,i) 구분이 핵심이 되어 ★3 (4) 두 도시를 한 곳을 거쳐 가는 경로 수를 묻기 → 행렬 곱의 의미로 확장되어 ★4(단원 범위 밖)."
```

```yaml
- id: GN-CM1-278-e3
  page: 278
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    두 행렬 A, B 의 성분에 상수 a, b, c 가 섞여 있을 때 A=B 가 성립하도록 하는 a, b, c 의 값 구하기.
  category: "두 행렬이 같을 조건 → 대응 성분끼리 등식 → 연립"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 행렬이 서로 같을 조건 — 대응 성분 비교로 미정계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    A=B 는 같은 꼴에서 대응 성분이 모두 같다는 뜻이므로 네 자리에서 등식을 세운다.
    문자가 한 자리에만 있는 식(5a-1=4)부터 풀면 a → b → c 순으로 한 줄씩 대입으로 끝난다.
    연립이지만 순차 대입이라 계산 부담은 낮고, 대응 자리를 어긋나게 읽는 T-표기만 주의한다.
    필수 예제 출발 ★2 · 통찰 0 이나 M_total 6 이라 감점 없이 ★2.
  tier: star_2
  mechanism_primary: "A=B → 대응 성분 등식 4개 → 문자 하나만 든 식부터 풀어 차례로 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$a=1$, $b=2$, $c=3$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/278-e3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "성분에 들어가는 계수와 상수(3a-2b, 5a-1, b+c 의 숫자)를 바꿀 수 있음. 제약: 문자 하나만 든 등식이 적어도 하나 있어야 순차 대입으로 풀리고, 해가 정수로 떨어지도록 계수를 고른다. 문자가 없는 자리(6=6)는 그대로 두어 두 행렬이 실제로 같아지는지 확인시킨다."
    creative: "(1) 문자 하나만 든 식을 없애고 두 문자 연립으로 시작하게 하기(계산 한 단계 추가 ★2) (2) 행렬의 꼴을 다르게 주고 A=B 가 성립할 수 없음을 설명하게 하기(정의 확인 ★2) (3) A=B 를 만족시키는 a 가 존재하도록 하는 상수의 조건을 묻기 → 역방향 I-BW 로 ★3 (4) 성분에 이차식을 넣어 해가 두 개 나오게 하면 조합 확인이 필요해 ★3."
```

```yaml
- id: GN-CM1-278-613
  page: 278
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    2×2 행렬 등식 (a+b, a-b; -4, 1) = (5, -1; 2c, c-d) 가 성립하도록 하는 상수 a, b, c, d 의 값 구하기.
  category: "두 행렬이 같을 조건 → 대응 성분 등식 4개 → 연립·대입"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 행렬이 서로 같을 조건 — 대응 성분 비교로 미정계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    네 자리에서 a+b=5, a-b=-1, -4=2c, 1=c-d 를 세운다.
    앞 두 식은 합·차 연립(더하고 빼기), 뒤 두 식은 c 를 먼저 구해 d 에 대입하는 순차 구조다.
    문자가 넷이라 278-e3 보다 식은 많지만 모두 일차이고 갈래가 없다.
    확인체크 출발 ★1 이나 필수 예제 278-e3 과 같은 골조·M_total 6 이라 ★2.
  tier: star_2
  mechanism_primary: "대응 성분 등식 4개 → 합·차 연립으로 a, b → c 구해 d 에 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$a=2$, $b=3$, $c=-2$, $d=-3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/278-613.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변의 5, -1 과 좌변의 -4, 1 을 바꿀 수 있음. 제약: a+b 와 a-b 의 값이 모두 정수이고 합·차가 짝수·홀수로 어긋나지 않아야 a, b 가 정수로 떨어진다. 2c=짝수여야 c 가 정수이고, c-d 식은 c 를 먼저 구한 뒤 대입하는 순서가 유지되어야 한다."
    creative: "(1) a+b, a-b 를 ab, a+b 로 바꾸면 이차방정식 근과 계수로 넘어가 ★3 (2) 한 성분을 비워 두고 등식이 성립하도록 채우게 하기(★2) (3) 좌우 행렬의 크기를 다르게 주고 성립 여부를 판정하게 하기(정의 확인 ★1) (4) 문자 조건을 자연수로 제한하면 후보 중 일부를 기각하는 검증이 생겨 I-VF·★3."
```

```yaml
- id: GN-CM1-278-614
  page: 278
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 행렬 A=(x^2+5; -3), B=(6x; y^2-4y) 에 대하여 A=B 일 때 실수 x, y 의 순서쌍 (x,y) 를 모두 구하기.
  category: "두 행렬이 같을 조건 → 성분별 이차방정식 → 해의 조합 전부"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 3
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x 의 두 근과 y 의 두 근이 서로 독립이라 네 쌍을 모두 답으로 따져야 함(한 쌍씩 짝지어 두 개만 쓰는 오답 차단)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 행렬이 서로 같을 조건 — 성분별 방정식의 해를 모두 조합하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    2×1 행렬이라 등식은 x^2+5=6x 와 -3=y^2-4y 두 개뿐이고 각각 인수분해로 두 근이 나온다.
    핵심은 두 방정식이 서로 다른 문자에 대한 독립 조건이라는 점 — 순서쌍은 2×2=4개다.
    x 와 y 를 나온 순서대로 짝지어 두 쌍만 답하는 것이 전형적 오답이다.
    확인체크 출발 ★1 이나 조합 통찰 1개(MI d1)·M_total 7 → ★2.
    [분류 이슈] 곱집합 나열을 I-MI 로 볼지(독립 분기) 표준 절차로 볼지 갈린다.
  tier: star_2
  mechanism_primary: "대응 성분 등식 2개 → 각각 이차방정식 인수분해로 두 근 → x, y 의 근을 모두 조합해 순서쌍 4개"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$(1,\,1)$, $(1,\,3)$, $(5,\,1)$, $(5,\,3)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/278-614.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x^2+5=6x 와 y^2-4y=-3 의 계수를 바꿀 수 있음. 제약: 두 이차방정식 모두 서로 다른 두 실근을 가져야(판별식>0) 순서쌍이 네 개가 되고, 인수분해가 정수로 되도록 계수를 고른다. 한쪽을 중근으로 만들면 순서쌍이 두 개로 줄어 통찰이 사라진다."
    creative: "(1) 성분을 셋으로 늘려 세 방정식의 해를 조합하게 하면 쌍이 8개가 되어 ★3 (2) 한 성분에 x, y 가 함께 들어가게 하면 조건이 연결되어 독립 조합이 깨지고 연립 이차로 ★3 (3) x, y 를 자연수로 제한하면 후보 일부가 기각되어 I-VF 가 붙고 ★3 (4) 순서쌍의 개수만 묻기(계산 부담은 줄고 조합 통찰만 남아 ★2 유지)."
```

## 표본 판정 요약 (9문)

- ★ 분포: ★1 3 · ★2 6 · ★3 0 · ★4 0 · ★5 0
- 통찰형 2(I-RT 1 · I-MI 1) · 절차형 7 · premium 0
- 구역: 「필수·발전 예제」 하나(필수 예제 3 · 확인체크 6) · vendor_level 은 전 문항 "-"
- type_hint 상위: 「행렬의 뜻 — 행·열 번호와 (i,j) 성분 읽기」 3 · 「(i,j) 성분의 일반식으로 행렬 구하기」 2 · 「두 행렬이 서로 같을 조건 — 대응 성분 비교로 미정계수 구하기」 2 · 「연결 관계(통신망·도로망)를 행렬로 나타내기 — 인접행렬」 1 · 「두 행렬이 서로 같을 조건 — 성분별 방정식의 해를 모두 조합하기」 1
- M_total 분포: 4 (2문) · 5 (1문) · 6 (5문) · 7 (1문) — 단원 도입부라 전 문항이 저노동 구간에 몰려 있다
- 함정: T-표기(행·열 순서, a_{ij} 와 a_{ji}) 6문 · T-경계(i≤j 의 등호) 1문 · T-범위(해의 조합 누락) 1문
- 그림: 1문(`crop:fig-277-612.png`)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CM1-276-e1 | 벤더 「필수」 예제(★2 출발)인데 내용은 정의대로 성분을 읽는 확인이라 M_total 5 · 통찰 0 → −1 로 ★1 을 붙임. 예제 위계를 존중하면 ★2 | ★1 / ★2 |
| GN-CM1-277-612 | 그림 → 행렬 대응 규칙이 발문에 그대로 주어져 있어 I-RT(표현 전환)를 인정할지, 단순 세기 절차형으로 볼지 갈림. 인정해 ★2 통찰형으로 둠 | ★2(통찰형) / ★1~2(절차형) |
| GN-CM1-278-614 | 두 독립 방정식의 근을 모두 조합하는 것을 I-MI(다중 해석)로 셀지, 곱집합 나열이라는 표준 절차로 볼지 갈림. 전형적 오답(짝지어 두 쌍만)이 존재해 통찰로 인정 | ★2(통찰형) / ★2(절차형) |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위에서 반복된 type_hint 는 세 갈래뿐이다 — 「행렬의 뜻(성분 읽기)」 3문 · 「성분의 일반식으로 행렬 구하기」 2문 · 「두 행렬이 같을 조건」 3문(278-614 포함). 32단원 도입부 전체가 이 세 유형으로 덮인다.
- **따로 세워야 할 유형**: 「연결 관계를 행렬로(인접행렬)」(277-612)는 나머지와 도구가 다르다 — 그림·표를 행렬로 옮기는 표현 전환이 본질이고, 행렬 곱의 의미(경유 경로 수)로 확장되는 별도 줄기이므로 독립 유형으로 두는 편이 낫다.
- **통합해도 될 유형**: 「행렬의 뜻(성분 읽기)」의 세 문항(276-e1 · 276-609 · 276-610)은 묻는 대상만 행·열·개별 성분으로 다를 뿐 골조가 같다. 하나의 base ★1 유형으로 묶고 소분류(행/열의 합 · 지정 성분 연산)로 두면 충분하다.
- **분리 후보**: 「두 행렬이 같을 조건」은 일차 연립으로 끝나는 것(278-e3 · 278-613, base ★2)과 성분별 방정식이 이차라 해의 조합이 필요한 것(278-614, base ★2~3)의 체감이 다르다. 카탈로그에서는 후자를 별도 유형으로 세워 순서쌍 개수 오답을 겨냥한 슬롯으로 쓰는 편이 낫다.
- base ★ 초안: 성분 읽기 ★1 · 일반식으로 행렬 구하기 ★2 · 인접행렬 ★2 · 같을 조건(일차) ★2 · 같을 조건(이차·조합) ★3.
