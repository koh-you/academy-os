---
name: mechanism-데이터-RPM-GEO-06-p3
description: RPM 기하 06 벡터의 성분과 내적(3/4 · 유형 08~16) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 기하 (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-geo
  section: 06 벡터의 성분과 내적
  unit_code: GEO-06
  part: "3/4"
  extract_range: "92~96쪽 · 0602~0634"
  total_problems: 33
  unit_total: 143
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-geo/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-geo/items/<id>.tex
  image_source: latex-bank/rpm-geo/figures/ (crops.json)
---

# RPM 기하 · 06 벡터의 성분과 내적 (3/4) 정독 데이터 (v1.0)

이 파일은 RPM 기하 06단원의 세 번째 조각으로 92~96쪽의 유형 08(평면도형에서의 벡터의 내적)부터 유형 16(벡터의 내적과 수직·평행)까지 33문항을 다룬다. 벤더 난이도 신호는 「유형 NN」구역 안 첫 문항의 「대표문제」태그(level 없음)와 이후 문항의 level(중하·중·상중), 「서술형」태그다. 이 범위에는 교과서·유형 UP·시험에 꼭 나오는 문제·실력 Up 구역이 없다. 이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 사슬) · `insights[]`(유형 코드 + depth + 근거) · `variation_notes`(numeric: 바꿔도 되는 수와 제약 / creative: 통찰 골조를 유지한 변형과 ★ 변동 지점)를 채웠다. 판정 방침: (1) −1 후보(통찰 0 · M_total ≤ 5)는 성분 대입·공식 한 줄로 끝나는 문항에만 적용하고 유형 기법(각 잡기·제곱 전개·단면 삼각형·좌표 설정)을 거치는 다단계 문항은 출발점을 유지, (2) +1 은 통찰 2개 이상 또는 depth 2 이상 + M_total ≥ 7 일 때, (3) `insight_type` 은 통찰 2개 이상 또는 depth 2 이상일 때만 통찰형이고 d1 통찰 하나뿐이면 절차형(견본 0041 준거), (4) `depth_score` 는 effective_depth 의 평균(통찰 없으면 0.00), (5) `target_cohort` 는 ★1 하위권 · ★2 중하위권 · ★3 중위권(통찰 유형이 RT·EQV·BW 밖이면 중상위권).

## 문항 데이터

### 유형 08 평면도형에서의 벡터의 내적

```yaml
- id: RPM-GEO-0602
  page: 92
  vendor_label: "유형 08 평면도형에서의 벡터의 내적"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    지름 AB=10 인 원 위의 점 P 에 대하여 BP=8 일 때 AB·AP 의 값. (그림)
  category: "반원의 직각 → AP 길이 → 내적 정의(정사영)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평면도형에서의 벡터의 내적(원·지름의 직각 이용)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ∠APB=90°(지름) → AP=6 → AB·AP=|AB||AP|cos∠PAB 에서 cos∠PAB=6/10 → 36. AB 의 AP 위 정사영이 AP 자체이므로 AB·AP=|AP|²=36 으로 봐도 된다. 통찰 없음·M_total 4 로 −1 후보이나 직각 읽기 → 길이 → 각의 코사인 세 관문을 거치는 유형 대표라 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "지름 → ∠APB=90° → AP=6 → AB·AP=|AP|²=36"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$36$'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0602.png"
  latex: latex-bank/rpm-geo/items/0602.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AB·BP 를 다른 피타고라스 쌍(AB=13, BP=5 → AP=12 → 144 / AB=5, BP=3 → 16)으로. 제약: BP<AB 이고 AP 가 정수가 되도록 세 수가 피타고라스 쌍. 그림 라벨(A·B·P)과 P 의 위치(호 위)는 고정."
    creative: "(1) AB·BP 를 묻기(정사영이 BP 로 바뀌어 |BP|² 골조 유지 ★2) (2) PA·PB 를 묻기(직각이라 0 · ★1) (3) 지름 대신 중심 O 를 주고 OP·AB 를 묻기(중심각·원주각 결합 ★3, I-RT d1) (4) AP·BP=0 을 써서 AB·AP+AB·BP=|AB|² 항등식을 확인시키는 문항(★2, I-EQV d1)."
```

```yaml
- id: RPM-GEO-0603
  page: 92
  vendor_label: "유형 08 평면도형에서의 벡터의 내적"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    한 변의 길이가 2 인 정육각형 ABCDEF 에서 DE·BC 의 값. (그림)
  category: "시점 통일(DE=BA) → 각 120° → 내적"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평면도형에서의 벡터의 내적(정다각형 · 시점 통일)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    DE 를 평행이동하면 BA 와 같으므로 DE·BC=BA·BC=2·2·cos120°=−2. 각을 60° 로 잘못 잡는 부호 함정(T-부호) 하나뿐. 중하 라벨·통찰 없음·M_total 4 → −1 적용 ★1.
  tier: star_1
  mechanism_primary: "DE=BA 로 시점 통일 → ∠ABC=120° → 2·2·cos120°=−2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-2$'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0603.png"
  latex: latex-bank/rpm-geo/items/0603.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "변의 길이(1·3·√3) · 벡터 쌍(AB·CD → 각 60°·값 2 / AB·DE → 180°·−4 / AF·CD 등). 제약: 정육각형의 두 변 벡터가 이루는 각은 0°·60°·120°·180° 뿐이라 답은 ±|a|²·{1, 1/2} 꼴. 그림 라벨 순서(A 위에서 시계 방향) 고정."
    creative: "(1) 변 벡터와 긴 대각선 벡터(AD·BC → 길이 4·각 60°)의 내적(★2) (2) 정삼각형·정사각형으로 도형 변경(★1 · 정오각형은 cos72° 라 부적합) (3) 여섯 변 벡터를 한 변 벡터와 각각 내적한 합 같은 대칭 활용(★3, I-SYM d1) (4) 좌표를 놓아 성분으로 풀게 유도하면 유형 10 골조로 넘어감."
```

```yaml
- id: RPM-GEO-0604
  page: 92
  vendor_label: "유형 08 평면도형에서의 벡터의 내적"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    평행사변형 ABCD 에서 |AB|=6, ∠B=120°, AB·AD=12 일 때 평행사변형의 넓이. (그림)
  category: "이웃각 변환(∠A=60°) → |AD| 역산 → 넓이 공식"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평면도형에서의 벡터의 내적(평행사변형 · 내적으로 변 길이 역산)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    AB·AD 는 ∠A 로 재야 하므로 ∠A=180°−120°=60° → 6·|AD|·(1/2)=12 → |AD|=4 → 넓이 6·4·sin60°=12√3. ∠B=120° 를 그대로 쓰면 |AD| 가 음수가 되는 부호 함정. 통찰 없음·M_total 4 로 −1 후보이나 각 변환 → 길이 역산 → 넓이 공식의 세 관문이라 중 라벨 ★2 유지.
  tier: star_2
  mechanism_primary: "∠A=60° → 6·|AD|·cos60°=12 → |AD|=4 → 넓이=6·4·sin60°=12√3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$12\sqrt{3}$'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0604.png"
  latex: latex-bank/rpm-geo/items/0604.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "|AB|·∠B·내적값 조합(|AB|=4, ∠B=135° → cos45° / |AB|=8, ∠B=150°). 제약: 내적값=|AB||AD|cos(180°−∠B) 가 양수·|AD| 가 정수가 되게, 넓이가 √ 하나로 정리되게. 그림의 ∠B 표시 위치 고정."
    creative: "(1) 넓이를 주고 내적을 묻기(역방향 ★2) (2) 대각선 AC·BD 의 내적을 묻기(|AD|²−|AB|² 항등식 → ★3, I-EQV d1) (3) 마름모로 바꿔 AB·AD 로 한 내각 구하기(★2) (4) ∠B 대신 |AC| 를 주면 코사인법칙 결합으로 ★3."
```

```yaml
- id: RPM-GEO-0605
  page: 92
  vendor_label: "유형 08 평면도형에서의 벡터의 내적"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    가로 2·세로 1 인 직사각형 ABCD 에서 세 내적(CB·CD, CD·CA, AB·BD)의 값에 관한 보기 ㄱㄴㄷ 중 옳은 것. (그림)
  category: "좌표 설정 → 세 내적 성분 계산 → 참·거짓"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평면도형에서의 벡터의 내적(직사각형 · 보기 판별)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    B 를 원점에 놓으면 ㄱ CB·CD=(−2,0)·(0,1)=0 참, ㄴ CD·CA=(0,1)·(−2,1)=1 참, ㄷ AB·BD=(0,−1)·(2,1)=−1 이라 −2 는 거짓. 정사영으로 봐도 각각 한 줄. 보기 세 개를 검산하는 노동뿐 통찰 없음·M_total 5 → 상중 출발 ★3 에서 −1 → ★2.
    [분류 이슈] 벤더 상중(★3 출발)이나 좌표 대입 세 번으로 끝나 ★2 — 1단 차이지만 라벨 근거(보기 판별 형식)와 골조 난이도가 어긋나 기록.
  tier: star_2
  mechanism_primary: "B 원점 좌표 → 각 벡터 성분 → 내적 세 개 → ㄱ 0 · ㄴ 1 · ㄷ −1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "ㄱ, ㄴ"
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0605.png"
  latex: latex-bank/rpm-geo/items/0605.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "가로·세로(3·1, 2·2 정사각형) · 보기의 벡터 쌍·주장값. 제약: 거짓 보기는 부호나 크기가 그럴듯하게 틀린 값(ㄷ 처럼 −1 을 −2 로) · 정사각형이면 대각선 수직이 생겨 보기 하나가 자명해짐."
    creative: "(1) 대각선끼리의 내적 AC·BD=|AD|²−|AB|² 보기 추가(★2) (2) 직사각형을 마름모·평행사변형으로 바꾸면 좌표 대신 각으로 읽어야 해 ★3 (3) 옳은 것 고르기 대신 임의의 직사각형에서 항상 성립하는 명제 판정으로 바꾸면 Mₐ 2 → ★3, I-EQV d1."
```

### 유형 09 입체도형에서의 벡터의 내적

```yaml
- id: RPM-GEO-0606
  page: 92
  vendor_label: "유형 09 입체도형에서의 벡터의 내적"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    정육면체에서 AF·AH=16 일 때 이 정육면체의 겉넓이. 5지선다. (그림)
  category: "면대각선 삼각형 AFH 정삼각형 → 각 60° → 모서리 역산 → 겉넓이"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "입체도형에서의 벡터의 내적(정육면체 대각선 · 단면 삼각형)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    AF·AH·FH 가 모두 면대각선 √2a 이므로 △AFH 는 정삼각형, ∠FAH=60° → AF·AH=2a²·(1/2)=a²=16 → a=4 → 겉넓이 6·16=96. 좌표로 놓아도 (a,0,−a)·(0,a,−a)=a². 통찰 없음·M_total 5 로 −1 후보이나 대각선 삼각형 읽기 → 내적 → 모서리 역산 → 겉넓이의 네 관문이라 유형 대표 ★2 유지.
  tier: star_2
  mechanism_primary: "△AFH 정삼각형(면대각선) → AF·AH=a² → a=4 → 겉넓이 96"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: "crop:fig-0606.png"
  latex: latex-bank/rpm-geo/items/0606.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "내적값(9·25·36 → a=3·5·6) · 묻는 양(부피·공간대각선 길이·모서리 합). 제약: 내적값이 완전제곱수여야 a 가 정수. 그림 라벨(A 위·F·H 아래) 고정."
    creative: "(1) AF·AG(면대각선·공간대각선)처럼 각이 특수각이 아닌 쌍을 성분으로 풀게(★2, 좌표 골조) (2) 모서리 길이를 주고 AF·CH 처럼 만나지 않는 두 대각선(평행이동 필요 → ★3, I-RT d1) (3) 정사면체로 바꿔 AB·CD=0 확인(★2) (4) 겉넓이 대신 외접구 반지름을 묻기(★2)."
```

```yaml
- id: RPM-GEO-0607
  page: 92
  vendor_label: "유형 09 입체도형에서의 벡터의 내적"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    한 모서리가 1 인 정사면체 ABCD 에서 BC 의 중점 M, △BCD 의 무게중심 G 에 대하여 MA·MG 의 값. (그림)
  category: "MG=(1/3)MD 축약 → 단면 △AMD → cos∠AMD 코사인법칙 → 내적"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "G 가 중선 DM 위 M 에서 1/3 지점 → MG=(1/3)MD 로 바꿔 각을 단면 △AMD 의 ∠AMD 로 환원"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "입체도형에서의 벡터의 내적(정사면체 · 무게중심·중점 축약)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    G 는 중선 DM 을 2:1 로 나누므로 MG=(1/3)MD, 각은 ∠AMD. AM=DM=√3/2, AD=1 에서 cos∠AMD=(3/4+3/4−1)/(2·3/4)=1/3 → MA·MG=(√3/2)(√3/6)(1/3)=1/12. 좌표(정사면체 높이 √6/3)로도 됨. 무게중심을 중선의 분점으로 옮기는 EQV d1 하나·M_total 6 → 중 라벨 ★2(d1 하나라 절차형).
  tier: star_2
  mechanism_primary: "MG=(1/3)MD → cos∠AMD=1/3(코사인법칙) → (√3/2)(√3/6)(1/3)=1/12"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{12}$'
  answer_source: "답지"
  figure: "crop:fig-0607.png"
  latex: latex-bank/rpm-geo/items/0607.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모서리 길이 a(2·3 → 답 a²/12) · 시점을 A 로 바꿔 AM·AG(=AM·(AM+MG)=3/4+1/12=5/6). 제약: 정사면체 고정이면 cos∠AMD=1/3 상수 · 답은 a² 배. 그림 라벨(M 이 BC 위·G 가 밑면) 고정."
    creative: "(1) MA·MD 를 묻기(무게중심 축약 제거 → ★2 절차형) (2) AG·BC(=0, 수선의 발 논증 → ★2) (3) 정육면체 안 정사면체(꼭짓점 4개 선택)로 재구성해 좌표로 풀게(★3, I-RT d1) (4) 내적이 0 이 되는 쌍(AG ⊥ 밑면)을 찾는 보기 문항(★3, I-MI d1)."
```

```yaml
- id: RPM-GEO-0608
  page: 92
  vendor_label: "유형 09 입체도형에서의 벡터의 내적"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    한 모서리가 1 인 정육면체에서 AC·DF 의 값. 5지선다. (그림)
  category: "좌표 설정 → 성분 내적(또는 DF=DB+BF 분해) → 0"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "입체도형에서의 벡터의 내적(정육면체 · 좌표 또는 분해)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    좌표를 놓으면 AC=(1,1,0), DF=(1,−1,−1) → 0. 분해로는 DF=DB+BF 에서 AC⊥BD(정사각형 대각선)·AC⊥BF(밑면⊥옆모서리)라 두 항 모두 0. 통찰 없음·M_total 4 로 −1 후보이나 공간 좌표 설정 또는 두 수직 관계의 분해가 필요해 중 라벨 ★2 유지(★1 후보).
  tier: star_2
  mechanism_primary: "좌표 A(0,0,1)·C(1,1,1)·D(0,1,1)·F(1,0,0) → (1,1,0)·(1,−1,−1)=0"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: "crop:fig-0608.png"
  latex: latex-bank/rpm-geo/items/0608.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모서리 길이 k(답 0 불변) · 벡터 쌍(AC·AF → 1 / AC·DH → 0 / AG·BF → −1 등). 제약: 정육면체의 꼭짓점 벡터 내적은 k²·{0, ±1, ±2, 3} 안이므로 선택지도 그 안에서. 그림 라벨(A 앞·D 뒤) 고정."
    creative: "(1) AC·DF=0 을 근거로 AC ⊥ 평면 BDF 를 묻는 논증 문항(★3, I-RT d1) (2) 직육면체(가로·세로·높이 다름)로 바꾸면 0 이 아니라 성분 계산이 필수 → ★2 (3) 정팔면체·정사면체 대각선 쌍으로 확장(★3)."
```

### 유형 10 성분으로 주어진 평면벡터의 내적

```yaml
- id: RPM-GEO-0609
  page: 93
  vendor_label: "유형 10 성분으로 주어진 평면벡터의 내적"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    a=(x,3), b=(0,1), c=(x+2,4) 에 대하여 (a−b)·(a−c)=6 일 때 x 의 값. 5지선다.
  category: "성분 뺄셈 → 내적 일차식 → x"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "성분으로 주어진 평면벡터의 내적 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    a−b=(x,2), a−c=(−2,−1) → −2x−2=6 → x=−4. 성분 대입 한 줄. 통찰 없음·M_total 4 → 대표 출발 ★2 에서 −1 → ★1.
  tier: star_1
  mechanism_primary: "a−b=(x,2)·a−c=(−2,−1) → −2x−2=6 → x=−4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0609.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 벡터 성분과 내적값. 제약: (a−b)·(a−c) 가 x 의 일차식이 되도록 a 와 c 의 x 계수를 같게(x² 항 상쇄) · 답이 정수·선택지 안."
    creative: "(1) c 의 x 계수를 다르게 해 이차식으로 만들면 근 두 개 중 조건(양수)으로 고르기 → ★2, I-VF d1 (2) 내적값 대신 |a−b|=|a−c| 같은 크기 조건으로(제곱 전개 → ★2) (3) 미지수를 두 개(x, y) 두고 조건 두 개 연립(★2)."
```

```yaml
- id: RPM-GEO-0610
  page: 93
  vendor_label: "유형 10 성분으로 주어진 평면벡터의 내적"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    a=(x,x+2), b=(x−3,x+3) 에 대하여 |a|=√2 일 때 a·b 의 값. 5지선다.
  category: "|a|² → 이차식(중근) → x → 내적"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "성분으로 주어진 평면벡터의 내적 계산(크기 조건으로 성분 결정)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x²+(x+2)²=2 → (x+1)²=0 → x=−1 → a=(−1,1), b=(−4,2) → 4+2=6. 중근이라 분기 없음. 통찰 없음·M_total 4 → 중하 ★1.
  tier: star_1
  mechanism_primary: "x²+(x+2)²=2 → x=−1 → (−1,1)·(−4,2)=6"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "③"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0610.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "|a| 값과 성분식. 제약: 크기 조건 이차식이 중근이거나 조건으로 하나만 남게 해야 답이 하나 · 현재는 (x+1)²=0 구조."
    creative: "(1) 크기 조건이 두 근을 주고 x>0 같은 필터 → ★2, I-VF d1 (2) a·b 대신 |a+b| 를 묻기(★1) (3) |a|=|b| 조건으로 바꾸면 이차항 상쇄 일차식 → ★1."
```

```yaml
- id: RPM-GEO-0611
  page: 93
  vendor_label: "유형 10 성분으로 주어진 평면벡터의 내적"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x>0, y>0 일 때 a=(x, 3/x), b=(3y, 1/y) 의 내적 a·b 의 최솟값.
  category: "내적 → 3xy+3/(xy) → 산술·기하평균 부등식 → 6"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 2
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "내적을 3xy+3/(xy) 로 정리한 뒤 산술·기하평균 부등식(절대부등식 단원)으로 최솟값 — 벡터 밖 도구 결합"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "성분으로 주어진 평면벡터의 내적의 최솟값(산술·기하평균)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a·b=3xy+3/(xy) ≥ 2√9=6, 등호 xy=1. 내적은 한 줄이고 최솟값은 t+1/t 꼴의 산술·기하평균 — 흔한 결합이라 XU d1 로만 기록. M_total 4 이지만 통찰 1개라 −1 없이 중 라벨 ★2(d1 하나라 절차형).
  tier: star_2
  mechanism_primary: "a·b=3xy+3/(xy) → 산술·기하평균 → 최솟값 6(xy=1)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$6$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0611.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "성분의 계수(2xy+8/(xy) → 8, 등호 xy=2). 제약: 곱 xy 하나로 묶이는 성분 배치(x 와 3y, 3/x 와 1/y 처럼 교차) · 두 항의 곱이 완전제곱수여야 답이 정수 · x, y>0 조건 필수."
    creative: "(1) 등호가 성립하는 x, y 의 관계를 함께 묻기(★2) (2) 벡터를 세 성분으로 늘려 세 항 산술·기하평균(★3) (3) |a|² 의 최솟값으로 바꾸면 x²+9/x² 골조 동일 ★2 (4) 최솟값을 이루는 조건에서 두 벡터가 이루는 각까지 묻기(★3)."
```

```yaml
- id: RPM-GEO-0612
  page: 93
  vendor_label: "유형 10 성분으로 주어진 평면벡터의 내적"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    포물선 y²=4x 위의 두 점 P, Q 와 원점 O 에 대하여 OP·OQ 의 최솟값. 5지선다.
  category: "매개변수 (s²,2s)·(t²,2t) → (st)²+4st → 완전제곱 → −4"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "포물선 위 점을 P(s²,2s), Q(t²,2t) 로 매개화해 내적을 두 매개변수의 다항식으로 옮김"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "s²t²+4st 가 곱 st 하나에만 의존함을 읽어 (st+2)²−4 로 완전제곱"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "곡선 위 두 점의 위치벡터 내적 최솟값(매개변수·완전제곱)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    P(s²,2s), Q(t²,2t) → OP·OQ=(st)²+4st=(st+2)²−4 ≥ −4, st=−2 는 (4,4)·(1,−2) 처럼 실현됨. 네 좌표가 st 한 변수로 통합되는 지점이 핵심. 통찰 2개(RT d1·EQV d1)로 +1 후보이나 둘 다 d1·M_total 6 → 상중 ★3 유지(통찰형).
  tier: star_3
  mechanism_primary: "P(s²,2s)·Q(t²,2t) → OP·OQ=(st)²+4st → (st+2)²−4 → 최솟값 −4"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "⑤"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0612.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "포물선 y²=4px 의 p(최솟값 −4p² · p=2 이면 −16). 제약: 최솟값이 정수가 되도록 p 를 잡고 등호를 이루는 st 가 실수(항상 가능) · 꼭짓점이 원점인 포물선 고정."
    creative: "(1) 원 x²+y²=r² 위 두 점으로 바꾸면 각으로 −r² 즉시(★1~2) (2) 타원 위 두 점 → 삼각함수 매개화·합성 필요 ★4 (3) OP ⊥ OQ 조건(내적 0 → st=−4)에서 직선 PQ 가 지나는 정점 찾기(★4, I-BW d2) (4) 최솟값을 이루는 P, Q 의 좌표 예시를 함께 묻기(★3)."
```

### 유형 11 성분으로 주어진 공간벡터의 내적

```yaml
- id: RPM-GEO-0613
  page: 93
  vendor_label: "유형 11 성분으로 주어진 공간벡터의 내적"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    a=(1,k+1,1), b=(−k,k−1,4) 에 대하여 a·b=9 일 때 양수 k 의 값. 5지선다.
  category: "성분 내적 → 이차방정식 → 양수 근"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "성분으로 주어진 공간벡터의 내적 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    −k+(k²−1)+4=9 → k²−k−6=0 → k=3(−2 는 양수 아님). 성분 대입 한 줄에 부호 필터. 통찰 없음·M_total 4 → 대표 출발 ★2 에서 −1 → ★1.
  tier: star_1
  mechanism_primary: "a·b=k²−k+3=9 → (k−3)(k+2)=0 → k=3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "③"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0613.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "성분과 내적값. 제약: 합차 곱 (k+1)(k−1) 구조 유지 시 이차식 · 인수분해되게 상수 조정 · 양수 근이 하나."
    creative: "(1) 두 근이 모두 양수가 되게 해 모든 k 의 합(★2) (2) 내적 대신 |a|=|b| 조건(★1) (3) k 를 두 벡터에 모두 넣고 a·b 의 최솟값(이차식 최솟값 → ★2)."
```

```yaml
- id: RPM-GEO-0614
  page: 93
  vendor_label: "유형 11 성분으로 주어진 공간벡터의 내적"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    네 점 A(1,4,−2), B(4,−1,2), C(5,2,0), D(7,0,−3) 에 대하여 AD·BC 의 값. 5지선다.
  category: "두 점 → 벡터 성분 → 내적"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "성분으로 주어진 공간벡터의 내적 계산(두 점 → 벡터)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    AD=(6,−4,−1), BC=(1,3,−2) → 6−12+2=−4. 대입뿐. 통찰 없음·M_total 4 → 중하 ★1.
  tier: star_1
  mechanism_primary: "AD=(6,−4,−1)·BC=(1,3,−2) → −4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "②"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0614.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 점 좌표. 제약: 답이 선택지 범위의 정수 · 시점·종점 방향(AD 와 DA)의 부호 함정 유지."
    creative: "(1) 세 점으로 삼각형을 주고 AB·AC 의 부호로 ∠A 의 예각·둔각 판정(★2, I-RT d1) (2) 점 D 의 한 좌표를 미지수로 두고 AD ⊥ BC 조건(★2, 유형 16 골조) (3) 좌표 대신 |AD|·|BC|·각을 주는 역방향(★2)."
```

```yaml
- id: RPM-GEO-0615
  page: 93
  vendor_label: "유형 11 성분으로 주어진 공간벡터의 내적"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    a=(x,−1,y), b=(2,x,−4) 에 대하여 a·b=−5, |a|=√14 일 때 정수 x, y 에 대한 x+y 의 값. 서술형.
  category: "내적 일차식 + 크기 이차식 연립 → 대입 이차방정식 → 정수 필터"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 4
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "17y²−40y+12=0 의 두 근 2, 6/17 중 정수 조건으로 6/17 기각"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "성분으로 주어진 공간벡터의 내적 계산(내적·크기 조건 연립 · 정수 조건)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x−4y=−5, x²+y²=13 → (4y−5)²+y²=13 → 17y²−40y+12=0 → y=2 또는 6/17 → 정수라 y=2, x=3 → 5. 정수 조건이 근 하나를 기각하는 VF d1·M_total 6 → 중 ★2(d1 하나라 절차형). x²+y²=13 의 정수 분해 (±2,±3) 로 먼저 좁혀도 됨.
  tier: star_2
  mechanism_primary: "x−4y=−5 · x²+y²=13 → 17y²−40y+12=0 → 정수 y=2 → x=3 → 5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$5$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0615.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "내적값·크기·고정 성분. 제약: 일차식과 원의 교점 중 정수점이 정확히 하나(현재 (3,2)) · |a|² 이 두 제곱수의 합으로 나뉘는 수(13=4+9 · 25=9+16 등)."
    creative: "(1) 정수 조건을 빼고 x+y 의 모든 값의 합(비유리 근 포함 → ★2) (2) 조건을 |a|=|b| 로 바꿔 이차식 두 개 연립(★3) (3) a ⊥ b 와 |a|=√14 로 바꾸면 유형 16 골조 ★2."
```

```yaml
- id: RPM-GEO-0616
  page: 93
  vendor_label: "유형 11 성분으로 주어진 공간벡터의 내적"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    a=(1,0,2), b=(1,−1,−1) 에 대하여 f(t)=(ta+b)·(a−tb) 의 최솟값. 5지선다.
  category: "내적 성질 전개 → |a|²·|b|²·a·b 대입 → t 이차식 완전제곱"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "매개변수가 든 두 벡터의 내적 함수 최솟값(내적 전개 · 이차식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f(t)=t|a|²−t²(a·b)+a·b−t|b|² 에 |a|²=5, |b|²=3, a·b=−1 을 넣으면 t²+2t−1=(t+1)²−2 → −2. 성분으로 직접 곱해도 같은 이차식. 통찰 없음·M_total 7(전개·대입 노동) → 중 ★2 유지.
  tier: star_2
  mechanism_primary: "전개 → 5t+t²−1−3t → t²+2t−1 → (t+1)²−2 → −2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0616.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a, b 성분과 계수 배치(ta+b, a−tb). 제약: t² 계수 −(a·b) 가 양수(a·b<0)여야 최솟값 존재 · 꼭짓점 t 가 유리수·답이 선택지 정수."
    creative: "(1) a·b>0 이면 최댓값 문항으로 뒤집기(★2) (2) f(t)=0 이 되는 t(수직 조건 → ★2, 유형 16) (3) a, b 를 성분 없이 크기·각으로 주면 Mₐ 상승 ★3 (4) |ta+b| 의 최솟값(제곱 후 이차식 → ★2 · 답이 √ 꼴)."
```

### 유형 12 벡터의 내적의 성질

```yaml
- id: RPM-GEO-0617
  page: 94
  vendor_label: "유형 12 벡터의 내적의 성질"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    |a|=2, |b|=1, |a−b|=√3 일 때 (3a+b)·(a−4b) 의 값.
  category: "|a−b|² 전개 → a·b → 목표식 전개·대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "내적의 성질(크기 조건 제곱 전개 → 내적 추출)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    |a−b|²=4−2a·b+1=3 → a·b=1 → 3|a|²−11(a·b)−4|b|²=12−11−4=−3. 크기 조건에서 내적을 뽑는 제곱 전개가 유형 골조. 통찰 없음·M_total 5 로 −1 후보이나 전개 두 번의 절차 문항이라 대표 ★2 유지.
  tier: star_2
  mechanism_primary: "|a−b|²=3 → a·b=1 → 3·4−11·1−4·1=−3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0617.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "|a|·|b|·|a−b| 와 목표식 계수. 제약: 삼각부등식 ||a|−|b|| ≤ |a−b| ≤ |a|+|b| 안 · a·b 가 정수·|a·b| ≤ |a||b| · 목표식 교차항 계수(−12+1=−11)가 0 으로 상쇄되지 않게."
    creative: "(1) |a+b| 를 함께 물어 |a+b|²+|a−b|²=2(|a|²+|b|²) 항등식(★2) (2) 두 벡터가 이루는 각을 묻기(유형 15 골조 ★2) (3) 조건을 |a+b|=|a−b| 로 바꾸면 수직 → 즉시(★1) (4) 세 벡터 a, b, c 로 확장해 |a+b+c| 계산(★3)."
```

```yaml
- id: RPM-GEO-0618
  page: 94
  vendor_label: "유형 12 벡터의 내적의 성질"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    두 벡터가 이루는 각 45°, |a|=3, |b|=4√2 일 때 (a+b)·(2a−b) 의 값.
  category: "각·크기 → a·b → 전개·대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "내적의 성질(각·크기 → 내적 → 전개)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    a·b=3·4√2·(√2/2)=12 → 2|a|²+a·b−|b|²=18+12−32=−2. 정의 한 줄과 전개 한 줄. 통찰 없음·M_total 4 → 중하 ★1.
  tier: star_1
  mechanism_primary: "a·b=12 → 2·9+12−32=−2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0618.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각(30°·60°·120°·135°)·크기·전개식 계수. 제약: |b| 에 √ 를 넣어 cos 과 곱해 정수가 되게(4√2·√2/2=4) · 답이 정수."
    creative: "(1) 답을 주고 각을 묻기(역방향 ★2) (2) |a+b| 와 |2a−b| 도 구해 두 벡터가 이루는 각(★3, 유형 15) (3) 각을 둔각으로 바꿔 부호 함정 강화(★1~2)."
```

```yaml
- id: RPM-GEO-0619
  page: 94
  vendor_label: "유형 12 벡터의 내적의 성질"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    한 변이 2 인 정삼각형 ABC 에서 a=AB, b=AC 일 때 |a+3b| 의 값. 5지선다. (그림)
  category: "각 60° → a·b=2 → |a+3b|² 전개 → 제곱근"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "내적의 성질(도형에서 각 읽기 → 벡터 크기 제곱 전개)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a·b=2·2·cos60°=2 → |a+3b|²=4+6·2+36=52 → 2√13. 크기를 제곱으로 바꿔 전개하는 골조. 통찰 없음·M_total 4 로 −1 후보이나 각 읽기 → 제곱 전개 → 근호 정리의 절차라 중 ★2 유지(★1 후보).
  tier: star_2
  mechanism_primary: "a·b=2 → |a+3b|²=4+12+36=52 → 2√13"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: "crop:fig-0619.png"
  latex: latex-bank/rpm-geo/items/0619.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "변 길이(1·3)와 계수(a−2b → 4−8+16=12 → 2√3 / 2a+b). 제약: 답이 √(정수) · 선택지끼리 근삿값이 가깝게(√51·√52·√53) 배치 유지. 그림의 a, b 라벨(A 에서 B, C 로) 고정."
    creative: "(1) 정사각형·마름모(각 120°)로 바꿔 부호 함정(★2) (2) |a+tb| 의 최솟값을 묻기(t 이차식 → ★3) (3) |a+3b| 를 도형으로 해석(A 에서 AC 를 3배 늘린 점을 지나는 위치)해 좌표로 풀게(★2, I-RT d1)."
```

```yaml
- id: RPM-GEO-0620
  page: 94
  vendor_label: "유형 12 벡터의 내적의 성질"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    일직선 위에 있지 않은 세 점 A, B, C 가 BC·(AB+AC)=0 을 만족할 때 삼각형 ABC 의 모양. 5지선다.
  category: "시점 통일 BC=AC−AB → 합·차 곱 → |AC|²=|AB|² → 이등변"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "BC 를 AC−AB 로 바꾸면 (AC−AB)·(AC+AB)=|AC|²−|AB|² 이라 벡터 등식이 두 변의 길이 비교로 번역됨(대수 → 도형 성질)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "벡터 등식으로 삼각형의 모양 판정(합·차 곱 · 중선)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    BC=AC−AB 로 시점을 A 에 맞추면 조건은 |AC|²−|AB|²=0, 즉 AB=AC 인 이등변삼각형. AB+AC=2AM(M 은 BC 중점)이라 AM ⊥ BC 로 읽어도 같은 결론. 벡터 등식을 도형 성질로 옮기는 RT d2 하나·M_total 5 → 상중 ★3(depth 2 라 통찰형).
  tier: star_3
  mechanism_primary: "BC=AC−AB → (AC−AB)·(AC+AB)=|AC|²−|AB|²=0 → AB=AC"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0620.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "숫자가 없는 문항. 바꿀 수 있는 것은 조건식의 꼴과 선택지 배치. 제약: 조건식이 항등적으로 참(예: AB·AB−|AB|²=0)이거나 모순이 되지 않게 · 결론이 선택지 하나로 확정되게."
    creative: "(1) AB·AC=|AB|² 로 바꾸면 AB·BC=0 → ∠B=90° 직각(★3, 같은 골조) (2) |AB+AC|=|AB−AC| 로 주면 ∠A=90°(★2) (3) 조건 두 개를 주고 정삼각형 판정(★4, I-CON d1) (4) 좌표를 주고 조건을 만족하는 점 C 의 자취(수직이등분선 → ★3, I-RT d2)."
```

### 유형 13 두 평면벡터가 이루는 각의 크기; 성분

```yaml
- id: RPM-GEO-0621
  page: 94
  vendor_label: "유형 13 두 평면벡터가 이루는 각의 크기; 성분"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    a=(1,1), b=(−3,−2) 에 대하여 a+b, 2a+b 가 이루는 각 θ 의 cosθ. 5지선다.
  category: "두 벡터 성분 → 내적·크기 → cos"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "성분으로 주어진 두 평면벡터가 이루는 각(cos 계산)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    a+b=(−2,−1), 2a+b=(−1,0) → 내적 2, 크기 √5·1 → cosθ=2/√5=2√5/5. 공식 대입 한 줄. 통찰 없음·M_total 4 → 대표 출발 ★2 에서 −1 → ★1.
  tier: star_1
  mechanism_primary: "(−2,−1)·(−1,0)=2 → 2/(√5·1) → 2√5/5"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "⑤"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0621.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a, b 성분과 결합 계수. 제약: 두 결과 벡터의 크기가 √(정수) · 유리화 뒤 선택지와 겹치지 않게 · 내적 부호(예각·둔각) 유지."
    creative: "(1) cos 대신 각 자체를 묻게 크기를 조정(cos=1/2·√2/2 등 특수각 → ★1) (2) 계수 k 를 넣어 a+kb 와 b 가 수직·평행이 되는 k(유형 16 ★2) (3) 세 점의 좌표로 삼각형 내각의 cos 을 묻기(★2, I-RT d1)."
```

```yaml
- id: RPM-GEO-0622
  page: 94
  vendor_label: "유형 13 두 평면벡터가 이루는 각의 크기; 성분"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    a=(0,2), b=(1,√3) 이 이루는 각 θ 에 대하여 sinθ 의 값.
  category: "cosθ=√3/2 → θ=30° → sinθ"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "성분으로 주어진 두 평면벡터가 이루는 각(특수각 · sin 변환)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    a·b=2√3, |a|=|b|=2 → cosθ=√3/2 → θ=30° → sinθ=1/2. sin 을 물어 각을 한 번 거치는 함정(T-표기)뿐. 통찰 없음·M_total 4 → 중하 ★1.
  tier: star_1
  mechanism_primary: "cosθ=2√3/4=√3/2 → θ=30° → sinθ=1/2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{1}{2}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0622.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "b=(√3,1)(→60°) · b=(1,−1)(→135°) · a=(0,2) 고정 시 b 의 성분비가 특수각을 만들게. 제약: cos 이 특수각 표의 값 · sin·tan 으로 묻는 말 변경 가능."
    creative: "(1) tanθ 를 묻기(★1) (2) 각의 크기 30° 를 주고 b 의 미지 성분을 묻기(역방향 · 이차식 두 근 중 부호 확인 ★2, I-VF d1) (3) 두 벡터가 이루는 각을 이등분하는 단위벡터의 성분(★3)."
```

```yaml
- id: RPM-GEO-0623
  page: 94
  vendor_label: "유형 13 두 평면벡터가 이루는 각의 크기; 성분"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    a=(x−1,3), b=(−2,x−3) 에 대하여 |a+2b|=√10 일 때(x 정수) 두 벡터가 이루는 각. 5지선다.
  category: "|a+2b|² 이차식 → 정수 근 필터 → 성분 확정 → cos → 둔각"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "5x²−22x+24=0 의 근 2, 12/5 중 정수 조건으로 12/5 기각"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "성분으로 주어진 두 평면벡터가 이루는 각(크기 조건으로 성분 확정 · 정수 조건)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a+2b=(x−5,2x−3) → 5x²−22x+24=0 → (x−2)(5x−12)=0 → 정수 x=2 → a=(1,3), b=(−2,−1) → cosθ=−5/(√10·√5)=−√2/2 → 135°. 정수 조건이 근을 기각하는 VF d1·M_total 7(인수분해·둔각 처리 T-범위·T-부호) → 중 ★2 유지(d1 하나라 절차형).
    [분류 이슈] M_total 7 + VF d1 로 같은 구역의 ★2 문항들보다 무겁고 둔각 부호 함정까지 있어 ★3 후보 — 통찰 1개라 규칙상 +1 미적용.
  tier: star_2
  mechanism_primary: "|a+2b|²=10 → 5x²−22x+24=0 → x=2 → cosθ=−√2/2 → 135°"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0623.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "성분식과 크기값. 제약: 이차식의 정수 근이 정확히 하나 · 확정된 a, b 의 cos 이 특수각(±1/2, ±√2/2, ±√3/2) · 둔각 유지 시 부호 함정 보존."
    creative: "(1) 정수 조건 없이 두 x 각각의 각을 비교하게(★3, I-MI d1) (2) 크기 조건을 a ⊥ (a+2b) 로 바꾸면 유형 16 골조(★2) (3) x 를 두고 두 벡터가 이루는 각이 90° 가 되는 x 의 개수(★2)."
```

### 유형 14 두 공간벡터가 이루는 각의 크기; 성분

```yaml
- id: RPM-GEO-0624
  page: 95
  vendor_label: "유형 14 두 공간벡터가 이루는 각의 크기; 성분"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    a=(1,−3,0), b=(−1,−5,2), c=(2,−3,1) 에 대하여 2a−b 와 c 가 이루는 각. 5지선다.
  category: "2a−b 성분 → 내적·크기 → cos=1/2 → 60°"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "성분으로 주어진 두 공간벡터가 이루는 각"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    2a−b=(3,−1,−2) → c 와 내적 7, 크기 √14·√14 → cos=1/2 → 60°. 대입 한 줄. 통찰 없음·M_total 4 → 대표 출발 ★2 에서 −1 → ★1.
  tier: star_1
  mechanism_primary: "2a−b=(3,−1,−2) → 7/(√14·√14) → 60°"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "③"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0624.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 벡터 성분·결합 계수. 제약: 두 크기의 곱이 내적의 2배(60°)·√2 배(45°) 등 특수각 관계 · 두 벡터의 크기를 같게(√14) 하면 계산이 깔끔."
    creative: "(1) 답을 특수각이 아닌 cos 값으로(★1) (2) 계수 k 로 2a−kb 가 c 와 60° 를 이루는 k(제곱 과정의 허근·부호 검증 → ★3, I-VF d1) (3) 세 벡터가 서로 이루는 각 중 최소(★2)."
```

```yaml
- id: RPM-GEO-0625
  page: 95
  vendor_label: "유형 14 두 공간벡터가 이루는 각의 크기; 성분"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    a+b=(−1,2,1), a−b=(3,2,−1) 일 때 a, b 가 이루는 각 θ 에 대한 cos(180°−θ) 의 값.
  category: "합·차로 a, b 복원 → 내적·크기 → cosθ → 보각 부호"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "성분으로 주어진 두 공간벡터가 이루는 각(합·차 벡터에서 복원)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a=(1,2,0), b=(−2,0,1) → a·b=−2, |a|=|b|=√5 → cosθ=−2/5 → cos(180°−θ)=2/5. 연립 복원과 보각 부호의 두 관문·통찰 없음·M_total 5 → 중 ★2 유지. a·b=(|a+b|²−|a−b|²)/4=(6−14)/4=−2 로 복원 없이도 가능.
  tier: star_2
  mechanism_primary: "a=(1,2,0)·b=(−2,0,1) → cosθ=−2/5 → cos(180°−θ)=2/5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{2}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0625.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "합·차 벡터 성분. 제약: 합과 차의 각 성분 합이 짝수(a, b 가 정수 성분) · cosθ 가 유리수가 되게 |a||b| 조정 · 보각·sin·tan 으로 묻는 말 변경 가능."
    creative: "(1) a·b 를 (|a+b|²−|a−b|²)/4 로 바로 구하는 항등식 문항(★2, I-EQV d1) (2) a+b 와 a−b 가 이루는 각을 묻기(★1) (3) a+b, a−b 대신 2a+b, a−2b 로 바꿔 연립 계수 상승(★2)."
```

```yaml
- id: RPM-GEO-0626
  page: 95
  vendor_label: "유형 14 두 공간벡터가 이루는 각의 크기; 성분"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    OA=(1,2,3), OB=(2,−1,2) 일 때 OA 의 직선 OB 위로의 정사영의 크기.
  category: "정사영 크기=|OA||cosθ| → |OA·OB|/|OB|"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "벡터의 정사영의 크기(내적/크기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    정사영의 크기는 |OA||cosθ|=|OA·OB|/|OB|=6/3=2. 정사영을 내적 식으로 옮기면 한 줄(정사영 공식은 공간도형 단원의 표준). 통찰 없음·M_total 4 → 상중 출발 ★3 에서 −1 → ★2.
    [분류 이슈] 벤더 상중이나 공식 한 줄 — 정사영 표현의 낯섦이 라벨 원인으로 보임. ★2 로 두고 기록.
  tier: star_2
  mechanism_primary: "|OA|cosθ=OA·OB/|OB|=6/3=2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0626.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 벡터 성분. 제약: |OB| 가 정수(3)면 답 정수 · 내적이 음수면 절댓값 처리(부호 함정 추가 가능) · OB 위 정사영과 OA 위 정사영을 바꿔 물으면 분모가 |OA|."
    creative: "(1) 정사영 벡터(성분)를 묻기 → (OA·OB/|OB|²)OB=(4/3,−2/3,4/3)(★3, I-RT d1) (2) 평면 위로의 정사영으로 확장(법선벡터 · 평면의 방정식 단원 결합 ★4, I-XU d1) (3) 정사영의 크기가 2 가 되는 미지 성분(★2)."
```

```yaml
- id: RPM-GEO-0627
  page: 95
  vendor_label: "유형 14 두 공간벡터가 이루는 각의 크기; 성분"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    직육면체(AB=4, AD=2, AE=2)에서 AG 와 DF 가 이루는 각 θ 의 cosθ. (그림)
  category: "좌표 설정 → 두 대각선 성분 → 내적·크기 → cos"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "성분으로 주어진 두 공간벡터가 이루는 각(직육면체 대각선 · 좌표 설정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    E 원점 좌표에서 A(0,0,2), G(4,2,0), D(0,2,2), F(4,0,0) → AG=(4,2,−2), DF=(4,−2,−2) → 내적 16, 크기 2√6·2√6 → cosθ=16/24=2/3. 좌표를 놓으면 성분 계산뿐. 통찰 없음·M_total 5 → 상중 출발 ★3 에서 −1 → ★2. 좌표 없이 두 대각선 교점의 삼각형으로 풀면 코사인법칙 한 번이라 ★3.
    [분류 이슈] 벤더 상중이나 유형명대로 성분(좌표)으로 풀면 대입 문항 — ★2 로 두고 기록.
  tier: star_2
  mechanism_primary: "좌표 → AG=(4,2,−2)·DF=(4,−2,−2) → 16/(2√6·2√6) → 2/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{2}{3}$'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0627.png"
  latex: latex-bank/rpm-geo/items/0627.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 모서리 길이(4·2·2 → 3·2·1 등)와 대각선 쌍(AG·DF / AG·BH / AG·CE). 제약: 공간대각선끼리는 길이가 같아 cos 이 유리수 · 정육면체면 cos=1/3 상수(문항 무력) · 그림 라벨·치수 표시 위치 고정."
    creative: "(1) 공간대각선과 면대각선(AG·BD) 쌍으로 크기가 달라 유리화 필요(★2) (2) 정육면체에서 두 공간대각선이 이루는 각의 cos=1/3 이 모서리와 무관함을 묻기(★2) (3) 좌표 없이 삼각형으로만 풀게 각 명시(★3, I-RT d1) (4) cosθ=k 가 되도록 높이를 정하는 역방향(★3, I-BW d1)."
```

### 유형 15 두 벡터가 이루는 각의 크기; 내적의 성질

```yaml
- id: RPM-GEO-0628
  page: 95
  vendor_label: "유형 15 두 벡터가 이루는 각의 크기; 내적의 성질"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    |a|=4, |b|=1, |a−3b|=√13 일 때 a, b 가 이루는 각 θ 의 sinθ. 5지선다.
  category: "|a−3b|² 전개 → a·b=2 → cosθ=1/2 → sinθ"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "내적의 성질로 두 벡터가 이루는 각(크기 조건 → 내적 → cos)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    16−6(a·b)+9=13 → a·b=2 → cosθ=2/4=1/2 → 60° → sinθ=√3/2. 제곱 전개로 내적을 뽑고 각으로 옮기는 유형 골조·통찰 없음·M_total 5 → 대표 ★2 유지.
  tier: star_2
  mechanism_primary: "|a−3b|²=13 → a·b=2 → cosθ=1/2 → sinθ=√3/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0628.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "|a|·|b|·|a−3b| 와 계수. 제약: (a·b)/(|a||b|) 가 특수각 cos · 삼각부등식 안 · sin 으로 물으려면 각이 확정되는 값."
    creative: "(1) cosθ 대신 |a+b| 를 묻기(★2) (2) |a−tb| 가 최소가 되는 t 와 그때의 각(★3) (3) 조건 두 개(|a+b|, |a−b|)로 |a|, |b| 도 미지인 연립(0630 골조 ★3)."
```

```yaml
- id: RPM-GEO-0629
  page: 95
  vendor_label: "유형 15 두 벡터가 이루는 각의 크기; 내적의 성질"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    영벡터가 아닌 a, b 에 대하여 |3a+b|=|3a−b| 일 때 두 벡터가 이루는 각. 5지선다.
  category: "양변 제곱 → 12(a·b)=0 → 90°"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "내적의 성질로 두 벡터가 이루는 각(크기 등식 → 수직)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    양변 제곱하면 9|a|²+6(a·b)+|b|²=9|a|²−6(a·b)+|b|² → a·b=0 → 90°. 평행사변형의 두 대각선이 같다 → 직사각형으로 봐도 즉시. 통찰 없음·M_total 5(수치 없는 일반 벡터)로 −1 후보이나 제곱 전개 골조 → 중 ★2 유지.
  tier: star_2
  mechanism_primary: "|3a+b|²=|3a−b|² → 12(a·b)=0 → θ=90°"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0629.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수(3 → k · 답 불변). 등식을 |a+b|=2|a−b| 처럼 비율로 바꾸면 3|a|²−10(a·b)+3|b|²=0 이라 |a|, |b| 비율 정보(예: |a|=|b|)를 추가해야 각이 정해짐. 제약: 각이 결정되려면 크기 비율 정보가 충분해야 함."
    creative: "(1) |a+b|=√3|a−b| 와 |a|=|b| 로 60° 만들기(★3) (2) 등식을 도형(평행사변형 대각선)으로 해석하는 ㄱㄴㄷ(★3, I-RT d1) (3) |a+b|=|a|=|b| → 120°(★2)."
```

```yaml
- id: RPM-GEO-0630
  page: 95
  vendor_label: "유형 15 두 벡터가 이루는 각의 크기; 내적의 성질"
  vendor_level: "상중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    |a+b|=√5, |a−b|=1, (a+b)·(a−b)=1 일 때 두 벡터가 이루는 각. 서술형.
  category: "세 조건 → |a|²,|b|²,a·b 연립 → |a|=√2, |b|=1, a·b=1 → 45°"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "세 벡터 조건을 |a|²·|b|²·a·b 세 미지수의 연립으로 동치 변환(합·차 제곱의 합과 차, 합·차 내적)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "내적의 성질로 두 벡터가 이루는 각(합·차 벡터 조건 연립)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    |a+b|²+|a−b|²=2(|a|²+|b|²)=6, (a+b)·(a−b)=|a|²−|b|²=1 → |a|²=2, |b|²=1. |a+b|²−|a−b|²=4(a·b)=4 → a·b=1. cosθ=1/(√2·1)=√2/2 → 45°. 벡터 조건을 스칼라 연립으로 옮기는 EQV d1·M_total 7 → 상중 ★3(d1 하나라 절차형).
  tier: star_3
  mechanism_primary: "|a+b|²±|a−b|² → |a|²+|b|²=3 · a·b=1, |a|²−|b|²=1 → √2·1·cosθ=1 → 45°"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$45^\circ$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0630.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "|a+b|·|a−b|·(a+b)·(a−b) 값. 제약: |a|²,|b|²>0 · a·b=(|a+b|²−|a−b|²)/4 · cos 이 특수각 · 세 조건이 모순되지 않게(|a|²−|b|² 값은 두 크기 제곱과 정합해야 함)."
    creative: "(1) 조건 하나를 |a|=√2 로 바꿔 필요한 조건 수 유지(★3) (2) 조건이 과잉인 문항에서 모순 없는지 판정(★4, I-VF d1) (3) 성분 없이 |a|, |b| 비율만 주고 각(0634 골조 ★3)."
```

### 유형 16 벡터의 내적과 수직·평행

```yaml
- id: RPM-GEO-0631
  page: 96
  vendor_label: "유형 16 벡터의 내적과 수직·평행"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    a=(2,1), b=(1,−1) 에 대하여 a+kb 와 2a+b 가 수직일 때 실수 k 의 값. 5지선다.
  category: "성분 → 내적 0 일차식 → k"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "내적과 수직·평행 조건(수직 → 내적 0)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    a+kb=(2+k,1−k), 2a+b=(5,1) → 5(2+k)+(1−k)=11+4k=0 → k=−11/4. 대입 한 줄. 통찰 없음·M_total 4 → 대표 출발 ★2 에서 −1 → ★1.
  tier: star_1
  mechanism_primary: "(2+k,1−k)·(5,1)=11+4k=0 → k=−11/4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0631.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a, b 성분과 결합 계수. 제약: 내적이 k 의 일차식(k 가 한 벡터에만) · 답이 분수 선택지 배열(−13/4 … −5/4) 유지."
    creative: "(1) k 가 두 벡터에 모두 들어가 이차식 → 두 근(★2, I-MI d1) (2) 수직 대신 평행 조건(성분 비 → ★1) (3) a+kb 가 b 와 이루는 각이 45° 인 k(제곱 후 검증 → ★3, I-VF d1)."
```

```yaml
- id: RPM-GEO-0632
  page: 96
  vendor_label: "유형 16 벡터의 내적과 수직·평행"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    a=(3t−1,t), b=(1,−2/t) 가 수직일 때 |a−3b| 의 값.
  category: "내적 0 → t → 성분 확정 → 크기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "내적과 수직·평행 조건(수직 조건으로 성분 확정 → 크기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    a·b=3t−1−2=0 → t=1 → a=(2,1), b=(1,−2) → a−3b=(−1,7) → √50=5√2. 대입 한 줄씩. 통찰 없음·M_total 4 → 중하 ★1.
  tier: star_1
  mechanism_primary: "3t−3=0 → t=1 → (2,1)−3(1,−2)=(−1,7) → 5√2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$5\sqrt{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0632.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "성분식(t 계수·상수)과 결합 계수. 제약: t≠0 · 내적이 t 의 일차식이라 답 하나 · 크기가 √(정수)."
    creative: "(1) 내적이 t 의 이차식이 되게 해 t 두 개 → 각 크기(★2, I-MI d1) (2) 수직 대신 평행(성분 비 → 이차식 ★2) (3) |a−3b| 대신 a−3b 와 b 가 이루는 각(★2)."
```

```yaml
- id: RPM-GEO-0633
  page: 96
  vendor_label: "유형 16 벡터의 내적과 수직·평행"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    p=(1,−2,a), q=(−2,b,2), r=(2,−4,8) 에서 p ⊥ q, p ∥ r 일 때 내적을 이용해 ab 의 값. 서술형.
  category: "평행 → 실수배(또는 p·r=±|p||r|) → a=4 · 수직 → 내적 0 → b=3 → 12"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "내적과 수직·평행 조건(공간벡터 · 수직·평행 연립)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    p=kr 에서 k=1/2 → a=4. p·q=−2−2b+2a=0 → b=3 → ab=12. 발문대로 평행을 내적(p·r=±|p||r|)으로 쓰면 (10+8a)²=84(5+a²) → (a−4)²=0 으로 같은 결과. 두 조건을 순서대로 적용하는 절차·통찰 없음·M_total 5 → 중 ★2 유지.
  tier: star_2
  mechanism_primary: "p ∥ r → a=4 · p ⊥ q → −2−2b+8=0 → b=3 → ab=12"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$12$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0633.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 벡터 성분. 제약: r 이 p 의 정수배가 되게(r=2p) · 수직식이 b 의 일차식 · 답 정수."
    creative: "(1) 평행 조건을 내적 등식으로만 풀게 강제하면 이차식 중근 검증(★3, I-VF d1) (2) q ∥ r, p ⊥ q 로 역할 바꾸기(★2) (3) 세 벡터가 서로 수직이 되는 미지수 세 개 연립(★3)."
```

```yaml
- id: RPM-GEO-0634
  page: 96
  vendor_label: "유형 16 벡터의 내적과 수직·평행"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    영벡터가 아닌 a, b 에 대하여 3|a|=2|b| 이고 3a−b 와 a+2b 가 수직일 때 두 벡터가 이루는 각 θ 의 cosθ.
  category: "비율 |a|=2k, |b|=3k → 수직 내적 전개 → a·b=6k²/5 → cosθ"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "3|a|=2|b| 를 |a|=2k, |b|=3k 로 두어 내적 전개식을 k² 단위로 통일 — 비율만으로 cos 이 결정됨을 읽기"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "내적과 수직·평행 조건(크기 비율 + 수직 → 각)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    |a|=2k, |b|=3k 로 두면 (3a−b)·(a+2b)=3|a|²+5(a·b)−2|b|²=12k²+5(a·b)−18k²=0 → a·b=6k²/5 → cosθ=(6k²/5)/(6k²)=1/5. 크기 비율을 매개변수로 두는 EQV d1·전개 노동 M_total 7 → 상중 ★3(d1 하나라 절차형).
  tier: star_3
  mechanism_primary: "|a|=2k·|b|=3k → 12k²+5(a·b)−18k²=0 → a·b=6k²/5 → cosθ=1/5"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{1}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0634.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "비율(3|a|=2|b| → 다른 정수비)과 두 벡터의 결합 계수. 제약: 전개 후 a·b 의 계수가 0 이 아니고 |cosθ| ≤ 1 · 답이 간단한 유리수."
    creative: "(1) cosθ 를 주고 비율을 묻기(역방향 이차식 → ★3, I-BW d1) (2) 수직 조건 두 개로 비율과 각을 동시에(★4, I-CON d1) (3) |a|=|b| 로 단순화하면 cosθ 즉시(★2)."
```

## 표본 판정 요약 (33문)

- ★ 분포: ★1 11 · ★2 18 · ★3 4 · ★4 0 · ★5 0
- 통찰형 2(0612 · 0620) · 절차형 31 · premium 0 · insights[] 를 기록한 문항 8(0607 EQV · 0611 XU · 0612 RT+EQV · 0615 VF · 0620 RT d2 · 0623 VF · 0630 EQV · 0634 EQV)
- type_hint 상위: 「평면도형에서의 벡터의 내적」 4 · 「내적과 수직·평행 조건」 4 · 「입체도형에서의 벡터의 내적」 3 · 「성분으로 주어진 공간벡터의 내적 계산」 3 · 「내적의 성질(제곱 전개)」 3 · 「성분으로 주어진 두 평면벡터가 이루는 각」 3 · 「성분으로 주어진 두 공간벡터가 이루는 각」 3 · 「내적의 성질로 두 벡터가 이루는 각」 3 · 「성분으로 주어진 평면벡터의 내적 계산」 2 · 단독 5(0611 산술·기하평균 최솟값 · 0612 곡선 위 두 점 내적 최솟값 · 0616 매개변수 내적 함수 · 0620 삼각형 모양 판정 · 0626 정사영 크기)
- 벤더 라벨 대비: 대표문제 9문 중 ★2 4(0602 · 0606 · 0617 · 0628)·★1 5(0609 · 0613 · 0621 · 0624 · 0631) · 중하 6문 모두 ★1 · 중 11문 모두 ★2 · 상중 7문 중 ★3 4(0612 · 0620 · 0630 · 0634)·★2 3(0605 · 0626 · 0627)
- 그림: 9문(`crop:fig-0602.png` · `crop:fig-0603.png` · `crop:fig-0604.png` · `crop:fig-0605.png` · `crop:fig-0606.png` · `crop:fig-0607.png` · `crop:fig-0608.png` · `crop:fig-0619.png` · `crop:fig-0627.png`)
- 전사 답과 재풀이 결과는 33문 모두 일치(「전사 답 확인 필요」 없음)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다. 2단 이상 어긋난 문항은 없다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-GEO-0605 | 벤더 상중(★3 출발)이나 좌표 대입 세 번의 보기 판별·통찰 없음·M_total 5 → ★2. 보기 형식이 라벨 원인으로 보임 | ★2 / ★3 |
| RPM-GEO-0623 | 벤더 중·★2 로 두었으나 M_total 7 + VF d1 + 둔각 부호 함정으로 같은 구역 ★2 문항보다 무거움. 통찰 1개라 규칙상 +1 미적용 | ★2 / ★3 |
| RPM-GEO-0626 | 벤더 상중이나 정사영 크기 = 내적/크기 공식 한 줄·M_total 4 → ★2. 정사영 표현의 낯섦이 라벨 원인 | ★2 / ★3 |
| RPM-GEO-0627 | 벤더 상중이나 유형명대로 좌표(성분)로 풀면 대입 문항·M_total 5 → ★2. 좌표 없이 단면 삼각형으로 풀면 ★3 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위의 반복 type_hint 는 RPM 유형 08~16 제목과 거의 1:1 이며, 골조로 보면 네 묶음이다. (a) 도형에서 각·길이를 읽어 내적(유형 08 평면 · 09 입체), (b) 성분 대입 계산(유형 10·11 내적 · 13·14 각), (c) 내적의 성질(제곱 전개·분배)로 내적을 추출(유형 12 · 15), (d) 수직·평행 조건(유형 16).
- 통합해도 될 유형: (b) 안에서 「성분 내적 계산」과 「성분으로 각 구하기」는 cos 공식 한 줄 차이라 base ★ 가 같음(★1~2) → 평면/공간 구분 없이 「성분 내적·각 계산」 한 유형으로 통합 가능. (c) 안에서 「제곱 전개로 내적 추출」과 「그것으로 각 구하기」도 같은 골조(★2) → 통합 후보. 0628·0617 이 두 유형의 대표인데 골조가 동일.
- 따로 세워야 할 유형: 「평면도형에서의 내적(각 잡기·시점 통일)」과 「입체도형에서의 내적(단면 삼각형·좌표 설정)」은 골조가 다르므로 분리 유지(★1~2 / ★2~3). 「벡터 등식 → 삼각형 모양 판정」(0620 · ★3 · RT d2)과 「곡선 위 두 점의 내적 최솟값(매개변수)」(0612 · ★3 · RT+EQV)은 통찰형 단독 유형으로 세움. 「정사영의 크기」(0626 · ★2)는 공간도형 단원과 겹치므로 어느 쪽 카탈로그에 둘지 결정 필요. 「내적 함수의 최솟값(매개변수 t · 이차식)」(0616)과 「내적의 최솟값(산술·기하평균)」(0611)은 ★2 절차형이지만 변형 가치가 커서 별도 항목 권장.
- 「수직·평행 조건」(d)은 대입 한 줄(★1)부터 크기 비율 + 수직 연립(0634 · ★3)까지 폭이 넓어 base ★ 를 하나로 두기 어려움 → 「성분 수직·평행」(★1~2)과 「성질 수직 → 각·비율」(★3)로 나누는 것이 정확.
