---
name: mechanism-데이터-RPM-GEO-03-p1
description: RPM 기하 03 공간도형(1/3 · 교과서 03-1~03-5 + 유형 01) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 기하 (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-geo
  section: 03 공간도형
  unit_code: GEO-03
  part: "1/3"
  extract_range: "41~44쪽 · 0246~0275"
  total_problems: 30
  unit_total: 100
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-geo/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-geo/items/<id>.tex
  image_source: latex-bank/rpm-geo/figures/ (crops.json)
---

# RPM 기하 · 03 공간도형 (1/3) 정독 데이터 (v1.0)

이 파일은 RPM 기하 03 공간도형의 첫 범위(41~44쪽 · 0246~0275 · 30문항)를 다룬다. 0246~0271 의 26문은 「교과서」 구역(03-1 위치 관계 · 03-2 직선과 평면의 평행·수직 · 03-3 삼수선 정리 · 03-4 이면각 · 03-5 정사영)의 기본 문제로, 그림 하나에 소문항 여러 개가 붙는 그룹 공통 발문(직육면체 8문 · 삼각기둥 2+2문 · 정사영 4문 · 공식 대입 2+2문)이 많고 level·태그가 없다. 0272~0275 의 4문은 「유형 01 평면의 결정 조건」(대표문제 1 · 중하 2 · 중 1). RPM 의 벤더 난이도 신호는 구역이 곧 층(교과서 / 유형 / 유형 UP / 시험에 꼭 나오는 문제 / 서술형 / 실력 Up · 난이도 하~상 · 대표문제·중요·기출 태그)이며, 교과서 구역은 ★1, 유형 구역은 level 에 따라 ★1~2 출발점이다. M_total(4~6)·통찰로 조정한 결과 ★1 29문 · ★2 1문(0272 · 대표문제 · VF d1 통찰형)이고, 벤더 신호와 2단 이상 어긋나는 문항은 없다(0275 는 1단 차이라 이슈 표에만 기록).

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 사슬) · `insights[]`(절차형이면 빈 배열) · `variation_notes`(numeric: 바꿔도 되는 수와 제약 / creative: 골조를 유지한 설정 변경과 ★ 변동 지점)를 채웠다. 그룹 공통 그림을 쓰는 소문항(0247~0258 · 0263~0266)은 `figure` 에 그룹 크롭(`crop:fig-g….png`)을 적어 변형 때 같은 그림을 참조하게 했다. 이 범위의 골조는 「위치 관계 읽기(모서리-모서리 / 모서리-면 / 면-면) → 두 직선이 이루는 각(평행이동) → 수직 판정·증명 빈칸(직선-평면 · 삼수선 · 두 평면) → 정사영(도형 찾기 → 길이 공식 → 넓이 공식) → 평면의 결정 조건(개수 세기 · 판단)」 순서로 이어진다.

## 문항 데이터

### 교과서 03-1 위치 관계

```yaml
- id: RPM-GEO-0246
  page: 41
  vendor_label: "교과서 03-1 위치 관계"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    사각뿔 A-BCDE(꼭짓점 A · 밑면 BCDE)의 5개 꼭짓점으로 만들 수 있는 서로 다른 평면의 개수.
  category: "밑면 네 점 공면 → 평면 1 · 꼭짓점 A + 밑면 두 점 → C(4,2)=6 → 합 7"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평면의 결정 조건 — 평면의 개수 세기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    밑면 B, C, D, E 는 한 평면(1개). 나머지 평면은 꼭짓점 A 를 반드시 포함하고 밑면 두 점을 고르면 결정되므로 C(4,2)=6. A 가 밑면 밖이라 서로 다른 두 점 쌍은 서로 다른 평면을 만든다. 합 7.
    「밑면 네 점 = 평면 1개」로 묶는 것(T-범위)이 유일한 주의점이고 나머지는 세기. 교과서 구역·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "5점 중 밑면 4점 공면 → 밑면 평면 1 + A 를 포함하는 평면 C(4,2)=6 → 7"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$7$"
  answer_source: "답지"
  figure: "crop:fig-0246.png"
  latex: latex-bank/rpm-geo/items/0246.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑면을 n각형으로(n각뿔: 1+C(n,2)) · 삼각뿔이면 C(4,3)=4. 제약: 꼭짓점이 밑면 밖이고 밑면이 볼록 다각형(세 점 공선 없음)이어야 함."
    creative: "(1) 직육면체 8꼭짓점 전체(면 6 + 대각 평면 6 + 꼭짓점 이웃 삼각형 8 = 20)로 확장하면 겹침 제거가 필요해 ★2~3 (2) 「점 A 를 지나는 평면만」·「밑면과 만나는 평면만」 처럼 조건 추가(★1) (3) 어느 네 점도 공면이 아닌 일반 5점으로 바꾸면 C(5,3)=10 (0275 골조 · ★1)."
```

그룹 G2 공통 발문(0247~0254): 「오른쪽 그림과 같은 직육면체에서 다음을 구하시오.」 · 그림 `fig-g0247-0254.png`(직육면체 ABCD-EFGH · 윗면 ABCD · 아랫면 EFGH · A-E, B-F, C-G, D-H 대응).

```yaml
- id: RPM-GEO-0247
  page: 41
  vendor_label: "교과서 03-1 위치 관계"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    직육면체 ABCD-EFGH(그룹 공통 그림 · 0247~0254)에서 모서리 AB 와 만나는 모서리를 모두 고르기.
  category: "모서리 AB 의 양 끝점 A, B → 각 끝점에서 나가는 나머지 모서리"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직육면체에서 모서리와 모서리의 위치 관계"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    점 A 에서 AD, AE · 점 B 에서 BC, BF 의 4개. 직육면체 모서리 12개를 「자기 자신 1 · 만남 4 · 평행 3 · 꼬인 위치 4」로 나누는 첫 문항이다.
    그림 읽기 한 단계. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "AB 의 끝점 A, B → 각 끝점에서 나가는 나머지 모서리 2개씩 → AD, AE, BC, BF"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '모서리~$\pt{AD}$, 모서리~$\pt{AE}$, 모서리~$\pt{BC}$, 모서리~$\pt{BF}$'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-g0247-0254.png"
  latex: latex-bank/rpm-geo/items/0247.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준 모서리를 BF·EH 등으로 바꾸기. 제약: 그림 라벨(ABCD 위 · EFGH 아래 · A-E 대응) 고정, 어느 모서리든 만나는 모서리는 4개."
    creative: "(1) 삼각기둥·정육각기둥으로 바꿔 만나는 모서리 개수를 세기(★1) (2) 「만나는 모서리의 개수」만 묻고 12 = 1+4+3+4 분할을 확인(★1) (3) 두 조건 동시(AB 와 만나면서 CG 와 평행 → AE, BF)로 교집합 판단(★2)."
```

```yaml
- id: RPM-GEO-0248
  page: 41
  vendor_label: "교과서 03-1 위치 관계"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    직육면체 ABCD-EFGH(그룹 공통 그림)에서 모서리 AB 와 평행한 모서리를 모두 고르기.
  category: "직육면체 모서리는 방향별 4개씩 세 묶음 → AB 묶음의 나머지 3개"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직육면체에서 모서리와 모서리의 위치 관계"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    AB 와 같은 방향의 모서리 DC, EF, HG. 직육면체의 12개 모서리는 세 방향 4개씩이므로 어느 모서리든 평행한 모서리는 3개.
    그림 읽기 한 단계. 교과서·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "AB 의 방향 → 같은 방향 모서리 묶음 4개 중 나머지 → DC, EF, HG"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '모서리~$\pt{DC}$, 모서리~$\pt{EF}$, 모서리~$\pt{HG}$'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-g0247-0254.png"
  latex: latex-bank/rpm-geo/items/0248.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준 모서리 변경. 제약: 직육면체면 평행 모서리는 항상 3개 · 라벨 대응 고정."
    creative: "(1) 삼각기둥(옆 모서리끼리 2개 평행 · 밑면 변은 1개)·정육각기둥(같은 밑면의 마주보는 변까지 평행)으로 개수 변화(★1) (2) 「평행한 모서리의 개수」로 묻기(★1) (3) 「AB 와 평행하면서 면 EFGH 위에 있는 모서리」처럼 두 조건 결합(★1~2)."
```

```yaml
- id: RPM-GEO-0249
  page: 41
  vendor_label: "교과서 03-1 위치 관계"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    직육면체 ABCD-EFGH(그룹 공통 그림)에서 모서리 AB 와 꼬인 위치에 있는 모서리를 모두 고르기.
  category: "만나지도 평행하지도 않은 모서리 → 12 − 1 − 4 − 3 = 4"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직육면체에서 모서리와 모서리의 위치 관계"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    AB 와 만나지 않고(끝점 A, B 를 지나지 않음) 평행하지도 않은 모서리 DH, CG, EH, FG. 앞 두 문항의 여집합(12−1−4−3=4)으로도 확인된다.
    꼬인 위치의 정의 「한 평면 위에 있지 않은 두 직선」을 그림에서 판정하는 한 단계. 교과서·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "12개 모서리 − 자기 자신 1 − 만남 4 − 평행 3 → 꼬인 위치 4 (DH, CG, EH, FG)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '모서리~$\pt{DH}$, 모서리~$\pt{CG}$, 모서리~$\pt{EH}$, 모서리~$\pt{FG}$'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-g0247-0254.png"
  latex: latex-bank/rpm-geo/items/0249.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준 모서리 변경(꼬인 위치 모서리는 항상 4개). 제약: 라벨 대응 고정."
    creative: "(1) 여집합 세기(12−1−4−3)를 명시 요구(★1) (2) 면대각선(예: BG)과 꼬인 위치인 모서리 묻기 — 대각선은 모서리 묶음 밖이라 직접 판단(★2) (3) 정팔면체·삼각뿔대 등 다른 다면체에서 꼬인 위치 쌍의 개수(★2)."
```

```yaml
- id: RPM-GEO-0250
  page: 41
  vendor_label: "교과서 03-1 위치 관계"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    직육면체 ABCD-EFGH(그룹 공통 그림)에서 모서리 AB 를 포함하는 면을 모두 고르기.
  category: "모서리 AB 를 변으로 갖는 면 → 2개"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직육면체에서 모서리와 면의 위치 관계"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    직육면체의 각 모서리는 정확히 두 면의 공통 변이다. AB 를 변으로 갖는 면 ABCD, AEFB.
    그림 읽기 한 단계. 교과서·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "AB 를 변으로 갖는 면 → ABCD(윗면), AEFB(앞면)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '면~$\pt{ABCD}$, 면~$\pt{AEFB}$'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-g0247-0254.png"
  latex: latex-bank/rpm-geo/items/0250.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준 모서리 변경(포함하는 면은 항상 2개). 제약: 라벨 대응 고정."
    creative: "(1) 두 면의 교선을 묻는 역방향(면 ABCD 와 면 AEFB 의 교선 = AB · ★1) (2) 각뿔·각기둥으로 확장(★1) (3) 「모서리 AB 를 포함하는 평면(면이 아니라)의 개수」— 대각 평면 ABGH 까지 세면 3개(★2)."
```

```yaml
- id: RPM-GEO-0251
  page: 41
  vendor_label: "교과서 03-1 위치 관계"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    직육면체 ABCD-EFGH(그룹 공통 그림)에서 모서리 AB 와 한 점에서 만나는 면을 모두 고르기.
  category: "AB 를 포함하지 않으면서 끝점 A 또는 B 를 지나는 면 → 2개"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직육면체에서 모서리와 면의 위치 관계"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    AB 를 포함하지 않는 면 4개 중 끝점 A 를 지나는 면 AEHD 와 B 를 지나는 면 BFGC 가 AB 와 한 점에서 만난다.
    「포함 · 한 점에서 만남 · 평행」 세 갈래 분류의 둘째. 교과서·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "AB 를 포함하지 않는 면 4개 → 끝점 A 또는 B 를 지나는 면 → AEHD(점 A), BFGC(점 B)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '면~$\pt{AEHD}$, 면~$\pt{BFGC}$'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-g0247-0254.png"
  latex: latex-bank/rpm-geo/items/0251.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준 모서리 변경(한 점에서 만나는 면은 항상 2개). 제약: 라벨 대응 고정."
    creative: "(1) 「AB 와 만나는 면」(포함 2 + 한 점 2)으로 묶어 묻기(★1) (2) 면대각선 AF 와 한 점에서 만나는 면 묻기(★1~2) (3) 직선 AB(모서리의 연장)와 한 점에서 만나는 평면 — 무한 직선이어도 답이 같음을 확인(★1)."
```

```yaml
- id: RPM-GEO-0252
  page: 41
  vendor_label: "교과서 03-1 위치 관계"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    직육면체 ABCD-EFGH(그룹 공통 그림)에서 모서리 AB 와 평행한 면을 모두 고르기.
  category: "AB 와 만나지 않는 면 → 6 − 포함 2 − 한 점 2 = 2"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직육면체에서 모서리와 면의 위치 관계"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    AB 와 만나지 않는 면 DHGC, EFGH. 직선과 평면이 평행할 조건(평면 위의 한 직선 DC 또는 EF 와 평행)으로도 확인된다.
    여집합 6=2+2+2 로 검산 가능. 교과서·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "6개 면 − AB 포함 2 − 한 점에서 만남 2 → 평행 2 (DHGC, EFGH)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '면~$\pt{DHGC}$, 면~$\pt{EFGH}$'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-g0247-0254.png"
  latex: latex-bank/rpm-geo/items/0252.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준 모서리 변경(평행한 면은 항상 2개). 제약: 라벨 대응 고정."
    creative: "(1) 여집합(6=2+2+2) 검산 요구(★1) (2) 면대각선 BD 와 평행한 면(EFGH 하나) — 「평면 위 직선 FH 와 평행」 조건으로 판단(★2) (3) 직선과 평면의 평행 조건 진위 판단 ㄱㄴㄷ(★2)."
```

```yaml
- id: RPM-GEO-0253
  page: 41
  vendor_label: "교과서 03-1 위치 관계"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    직육면체 ABCD-EFGH(그룹 공통 그림)에서 면 AEFB 와 만나는 면을 모두 고르기.
  category: "면 AEFB 의 네 변을 공유하는 이웃 면 → 4개"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "각기둥에서 면과 면의 위치 관계"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    면 AEFB 의 네 변 AB, BF, FE, EA 를 각각 공유하는 ABCD, BFGC, EFGH, AEHD. 마주보는 DHGC 만 만나지 않는다.
    그림 읽기 한 단계. 교과서·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "면 AEFB 의 네 변 → 각 변을 공유하는 이웃 면 → ABCD, BFGC, EFGH, AEHD"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '면~$\pt{ABCD}$, 면~$\pt{BFGC}$, 면~$\pt{EFGH}$, 면~$\pt{AEHD}$'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-g0247-0254.png"
  latex: latex-bank/rpm-geo/items/0253.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준 면 변경(만나는 면은 항상 4개). 제약: 라벨 대응 고정."
    creative: "(1) 교선(AB, BF, FE, EA)까지 함께 쓰게 하기(★1) (2) 삼각기둥·사각뿔로 바꾸면 이웃 면 개수 변화(★1) (3) 「면 AEFB 와 수직인 면」으로 바꾸면 직육면체에서는 같은 4개지만 근거(수직 모서리 포함)가 달라짐(★1~2)."
```

```yaml
- id: RPM-GEO-0254
  page: 41
  vendor_label: "교과서 03-1 위치 관계"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    직육면체 ABCD-EFGH(그룹 공통 그림)에서 면 AEFB 와 평행한 면.
  category: "마주보는 면 → DHGC"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "각기둥에서 면과 면의 위치 관계"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    면 AEFB 와 만나지 않는 면은 마주보는 DHGC 하나. 직육면체에서 두 평면은 만나거나 평행 두 가지뿐(6=1+4+1).
    교과서·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "6개 면 − 자기 자신 1 − 만남 4 → 평행 1 (DHGC)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '면~$\pt{DHGC}$'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-g0247-0254.png"
  latex: latex-bank/rpm-geo/items/0254.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준 면 변경(평행한 면은 항상 1개). 제약: 라벨 대응 고정."
    creative: "(1) 두 평면의 위치 관계 분류(만남·평행) 개수 확인(★1) (2) 대각 평면 ABGH 와 평행한 면은 「없다」— 없음이 답인 변형(★2) (3) 두 평면이 평행할 조건(한 평면의 교차하는 두 직선이 다른 평면과 평행)으로 증명 요구(★2)."
```

그룹 G3 공통 발문(0255~0256): 「오른쪽 그림과 같은 삼각기둥에서 다음을 구하시오.」 · 그림 `fig-g0255-0256.png`(삼각기둥 ABC-DEF · A-D, B-E, C-F 대응).

```yaml
- id: RPM-GEO-0255
  page: 41
  vendor_label: "교과서 03-1 위치 관계"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    삼각기둥 ABC-DEF(그룹 공통 그림 · 0255~0256)에서 면 ABC 와 만나는 면을 모두 고르기.
  category: "밑면 ABC 의 세 변을 공유하는 옆면 → 3개"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "각기둥에서 면과 면의 위치 관계"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    밑면 ABC 의 세 변 AC, AB, BC 를 각각 공유하는 옆면 ACFD, ABED, BCFE. 다른 밑면 DEF 만 만나지 않는다.
    삼각기둥 면 5개 = 자기 자신 1 + 만남 3 + 평행 1. 교과서·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "밑면 ABC 의 세 변 → 각 변을 공유하는 옆면 → ACFD, ABED, BCFE"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '면~$\pt{ACFD}$, 면~$\pt{ABED}$, 면~$\pt{BCFE}$'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-g0255-0256.png"
  latex: latex-bank/rpm-geo/items/0255.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준 면을 옆면(ABED 등)으로 바꾸면 만나는 면 4개(두 밑면 + 두 옆면). 제약: 라벨 대응(A-D, B-E, C-F) 고정."
    creative: "(1) n각기둥으로 일반화해 밑면과 만나는 면 n개(★1) (2) 옆면끼리의 교선(옆 모서리) 묻기(★1) (3) 삼각뿔대·오각뿔로 바꿔 만나는 면 판단(★1)."
```

```yaml
- id: RPM-GEO-0256
  page: 41
  vendor_label: "교과서 03-1 위치 관계"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    삼각기둥 ABC-DEF(그룹 공통 그림)에서 면 ABC 와 평행한 면.
  category: "각기둥의 두 밑면은 평행 → 다른 밑면 DEF"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "각기둥에서 면과 면의 위치 관계"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    각기둥의 두 밑면은 평행하므로 면 ABC 와 만나지 않는 면은 DEF 하나. 옆면 세 개는 모두 ABC 와 변을 공유한다.
    교과서·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "각기둥 두 밑면 평행 → 면 ABC 와 만나지 않는 면 → DEF"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '면~$\pt{DEF}$'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-g0255-0256.png"
  latex: latex-bank/rpm-geo/items/0256.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준 면을 옆면으로 바꾸면 평행한 면이 「없다」. 제약: 라벨 대응 고정."
    creative: "(1) 옆면 ABED 와 평행한 면 — 없음이 답(★1~2) (2) 삼각기둥의 「평행한 면의 쌍의 개수」(1쌍)와 직육면체(3쌍) 비교(★1) (3) 두 밑면이 평행한 이유를 「옆 모서리 AD, BE 가 각각 평면 DEF 와 평행」으로 설명하게 하기(★2)."
```

### 교과서 03-2 직선과 평면의 평행·수직

그룹 G4 공통 발문(0257~0258): 「오른쪽 그림과 같이 밑면이 AB=BC 인 직각이등변삼각형인 삼각기둥에서 다음 두 직선이 이루는 각의 크기를 구하시오.」 · 그림 `fig-g0257-0258.png`(삼각기둥 ABC-DEF · ∠ABC=90° · A-D, B-E, C-F 대응).

```yaml
- id: RPM-GEO-0257
  page: 41
  vendor_label: "교과서 03-2 직선과 평면의 평행·수직"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    밑면이 AB=BC 인 직각이등변삼각형인 삼각기둥 ABC-DEF(그룹 공통 그림 · 0257~0258)에서 두 직선 AC, BE 가 이루는 각의 크기.
  category: "옆 모서리 BE ⊥ 밑면 ABC → BE ⊥ AC → 90°"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "각기둥에서 두 직선이 이루는 각"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    직각기둥이므로 옆 모서리 BE 는 밑면 ABC 에 수직이고, 따라서 밑면 위의 직선 AC 와 수직. 두 직선은 꼬인 위치지만 평행이동 없이 「평면에 수직인 직선은 평면 위 모든 직선과 수직」 한 줄로 끝난다.
    교과서·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "BE ⊥ 평면 ABC → BE ⊥ AC (AC ⊂ 평면 ABC) → 90°"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$90^\circ$'
  answer_source: "답지"
  figure: "crop:fig-g0257-0258.png"
  latex: latex-bank/rpm-geo/items/0257.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선 쌍을 (AB, CF)·(AC, DA) 등 옆 모서리와 밑면 직선 조합으로 바꿔도 항상 90°. 제약: 직각기둥(옆 모서리 ⊥ 밑면)이어야 함."
    creative: "(1) 옆면 대각선(BF)과 밑면 변(AC)이 이루는 각 → 평행이동 후 직각삼각형 계산(★2~3) (2) 빗각기둥으로 바꿔 수직이 깨짐을 판단(★2) (3) 「AC ⊥ BE 임을 증명하시오」 서술형화(★2)."
```

```yaml
- id: RPM-GEO-0258
  page: 41
  vendor_label: "교과서 03-2 직선과 평면의 평행·수직"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    같은 삼각기둥(그룹 공통 그림)에서 두 직선 BC, DF 가 이루는 각의 크기.
  category: "DF ∥ AC 로 평행이동 → 각(BC, AC) = ∠ACB → 직각이등변삼각형 → 45°"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "각기둥에서 두 직선이 이루는 각"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    꼬인 위치의 두 직선이 이루는 각은 한 직선을 평행이동해 만나게 한 뒤 잰다. DF ∥ AC 이므로 각(BC, DF) = ∠ACB, AB=BC·∠B=90° 이므로 45°.
    평행이동 + 이등변삼각형 밑각 두 단계. 교과서·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "DF ∥ AC → 각(BC, DF) = ∠ACB → 직각이등변삼각형 밑각 → 45°"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$45^\circ$'
  answer_source: "답지"
  figure: "crop:fig-g0257-0258.png"
  latex: latex-bank/rpm-geo/items/0258.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑면 삼각형을 정삼각형(답 60°)·30-60-90 삼각형(답 30° 또는 60°)으로. 제약: 밑면 각이 특수각이 되게 변 비율(1:1·1:√3)을 정하고 라벨 대응(D-A, E-B, F-C) 고정 · 이루는 각은 0°~90° 로 답함."
    creative: "(1) 옆면 대각선(AE)과 밑면 변(BC)이 이루는 각 → 평행이동 후 직각삼각형·코사인법칙(★2~3) (2) 「이루는 각의 코사인 값」으로 묻고 변 길이를 정수로 주기(★2) (3) 정육면체 두 면대각선(BD, DF 등)이 이루는 각 → 정삼각형 BDF 발견 60°(★2)."
```

```yaml
- id: RPM-GEO-0259
  page: 41
  vendor_label: "교과서 03-2 직선과 평면의 평행·수직"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    정육면체 ABCD-EFGH 에서 직선 AD 와 서로 수직인 면을 모두 고르기.
  category: "AD 의 끝점 A, D 에서 AD 와 수직인 두 모서리를 포함하는 면 → 2개"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직선과 평면의 수직 — 수직인 면 찾기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    점 A 에서 AD ⊥ AB, AD ⊥ AE 이므로 AD 는 교차하는 두 직선을 포함하는 면 AEFB 에 수직, 점 D 에서도 같은 이유로 면 DHGC 에 수직. 「평면 위의 교차하는 두 직선과 수직 ⇒ 평면과 수직」의 확인.
    교과서·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "AD ⊥ AB, AD ⊥ AE → AD ⊥ 면 AEFB · 대칭으로 AD ⊥ 면 DHGC"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '면~$\pt{AEFB}$, 면~$\pt{DHGC}$'
  answer_source: "답지"
  figure: "crop:fig-0259.png"
  latex: latex-bank/rpm-geo/items/0259.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준 모서리 변경(수직인 면은 항상 2개). 제약: 정육면체·직육면체 라벨 대응 고정."
    creative: "(1) 면대각선 AC 와 수직인 평면 BDHF 찾기 — 정사각형 대각선 수직 + 수직 모서리 결합(★2) (2) 「직선 AD 와 수직인 모서리를 모두」(8개 · ★1) (3) 정육면체에서 직선과 평면의 수직 진위 판단 ㄱㄴㄷ(예: 대각선 AG ⊥ 평면 BDE · ★3)."
```

```yaml
- id: RPM-GEO-0260
  page: 41
  vendor_label: "교과서 03-2 직선과 평면의 평행·수직"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    정사면체 ABCD 에서 BC ⊥ AD 를 증명하는 과정의 빈칸 ㈎(BC 와 수직인 또 하나의 선분)·㈏(BC 와 수직인 평면) 채우기.
  category: "정삼각형 중선 → BC ⊥ AM, BC ⊥ DM → BC ⊥ 평면 AMD → BC ⊥ AD"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직선과 평면의 수직 증명(빈칸)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    정삼각형 DBC 의 중선 DM 이 BC 에 수직(㈎ DM), BC 가 교차하는 두 직선 AM, DM 에 수직이므로 평면 AMD 에 수직(㈏ AMD). 증명의 골조가 본문에 다 있어 빈칸은 대칭 반복(AM ↔ DM)과 평면 이름 읽기.
    교과서·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "BC 의 중점 M → BC ⊥ AM, BC ⊥ DM → BC ⊥ 평면 AMD → BC ⊥ AD"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '㈎ $\seg{DM}$ ㈏ $\pt{AMD}$'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0260.png"
  latex: latex-bank/rpm-geo/items/0260.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정사면체 대신 「AB=AC, DB=DC 인 사면체」로 일반화해도 같은 증명(이등변삼각형 중선). 제약: BC 를 밑변으로 하는 두 면이 이등변삼각형이어야 함."
    creative: "(1) 빈칸 없이 「BC ⊥ AD 임을 증명하시오」 서술형(★2) (2) 같은 골조로 정팔면체·정사각뿔에서 마주보는 모서리의 수직 증명(★2) (3) 정사면체에서 「AM 과 DM 이 이루는 각의 코사인 1/3」·「AD 와 BC 가 이루는 각」으로 계산 확장(★2~3)."
```

### 교과서 03-3 삼수선 정리

```yaml
- id: RPM-GEO-0261
  page: 43
  vendor_label: "교과서 03-3 삼수선 정리"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    삼수선 정리(PO ⊥ α, OH ⊥ l ⇒ PH ⊥ l)를 증명하는 과정의 빈칸 세 개(㈎ ㈏ ㈐) 채우기.
  category: "PO ⊥ α ⇒ PO ⊥ l · OH ⊥ l ⇒ l ⊥ 평면 PHO ⇒ PH ⊥ l"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼수선 정리 증명(빈칸)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    세 빈칸은 각 문장의 주어를 그림에서 읽는 수준 — 평면에 수직인 PO 는 평면 위 직선 l 과 수직(㈎ PO), 조건 OH ⊥ l(㈏ OH), 결론 PH ⊥ l(㈐ PH). 증명 구조(두 직선과 수직 → 평면과 수직 → 평면 위 직선과 수직)는 본문이 준다.
    일반 배치(평면 α · 직선 l)라 Mₐ 2 이지만 교과서·통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "PO ⊥ α → PO ⊥ l · OH ⊥ l → l ⊥ 평면 PHO → PH ⊥ l"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '㈎ $\seg{PO}$ ㈏ $\seg{OH}$ ㈐ $\seg{PH}$'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0261.png"
  latex: latex-bank/rpm-geo/items/0261.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "빈칸 위치를 조건 쪽(㈎ 자리에 α, ㈏ 자리에 PHO)으로 옮기기. 제약: 정리의 세 형태 중 어느 것을 증명하는지 진술과 그림을 일치시킬 것."
    creative: "(1) 삼수선 정리의 다른 형태(PH ⊥ l, PO ⊥ α ⇒ OH ⊥ l)를 같은 틀로 증명하는 빈칸(★1) (2) 정리를 정육면체·직육면체에 적용해 수선의 발과 길이를 구하는 계산 문항(★2~3) (3) 「세 형태 중 참인 것을 고르기」 진위(★2)."
```

### 교과서 03-4 이면각

```yaml
- id: RPM-GEO-0262
  page: 43
  vendor_label: "교과서 03-4 이면각"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    직선 l ⊥ 평면 α 이고 l 을 포함하는 평면 β 가 있을 때 α ⊥ β 임을 증명하는 과정의 빈칸 ㈎(교선 m 에 수직인 β 위 직선)·㈏(l 과 수직인 α 위 직선) 채우기.
  category: "교선 m 에 수직인 l ⊂ β, n ⊂ α → 이면각 = 각(l, n) → l ⊥ α ⇒ l ⊥ n → α ⊥ β"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 평면의 수직 증명(빈칸)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    이면각의 정의(교선에 수직인 두 직선이 이루는 각)를 l, n 으로 실현한 뒤 l ⊥ α 에서 l ⊥ n 을 읽는다. ㈎ 는 「l ⊥ α 이므로 l ⊥ m」의 l, ㈏ 는 「l ⊥ n」의 n. 본문이 구조를 다 주므로 기호 읽기.
    교과서·통찰 없음·M_total 6 → ★1.
  tier: star_1
  mechanism_primary: "l ⊥ α ⇒ l ⊥ m · n ⊥ m (n ⊂ α) → 이면각 = 각(l, n) → l ⊥ n → α ⊥ β"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "㈎ $l$ ㈏ $n$"
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0262.png"
  latex: latex-bank/rpm-geo/items/0262.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "빈칸을 「두 평면이 이루는 각 = 두 직선 ㈎, ㈏ 가 이루는 각」 자리로 옮기기. 제약: 교선 m 과 두 직선의 수직 조건이 진술에 남아야 이면각 정의가 성립."
    creative: "(1) 역(α ⊥ β 이고 l ⊂ β, l ⊥ m 이면 l ⊥ α) 증명 빈칸(★2) (2) 정육면체에서 면 BDHF ⊥ 면 ABCD 임을 이 정리로 보이기(★2) (3) 이면각 크기 계산(정사면체 두 면의 코사인 1/3)으로 확장(★2~3)."
```

### 교과서 03-5 정사영

그룹 G8 공통 발문(0263~0266): 「오른쪽 그림과 같은 직육면체에서 다음을 구하시오.」 · 그림 `fig-g0263-0266.png`(직육면체 ABCD-EFGH 에 선분 DE, EC, DC 가 그려져 삼각형 DEC 가 보임).

```yaml
- id: RPM-GEO-0263
  page: 43
  vendor_label: "교과서 03-5 정사영"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    직육면체 ABCD-EFGH(그룹 공통 그림 · 0263~0266 · 삼각형 DEC 가 그려짐)에서 점 B 의 평면 AEHD 위로의 정사영.
  category: "B 에서 평면 AEHD 에 내린 수선의 발 → BA ⊥ 면 AEHD → 점 A"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직육면체에서 점·선분·도형의 정사영 찾기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    모서리 BA 가 면 AEHD 에 수직이므로 B 에서 내린 수선의 발은 A. 정사영의 정의(수선의 발) 확인 한 단계.
    교과서·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "BA ⊥ 평면 AEHD → 수선의 발 A → 정사영 = 점 A"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '점~$\pt{A}$'
  answer_source: "답지"
  figure: "crop:fig-g0263-0266.png"
  latex: latex-bank/rpm-geo/items/0263.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "점·평면 조합 변경(점 C → 평면 AEHD 이면 D · 점 G → 평면 ABCD 이면 C). 제약: 평면이 직육면체의 면이어야 수선이 모서리를 따라감."
    creative: "(1) 평면 위의 점 자신(점 A 의 평면 AEHD 위 정사영)을 섞어 정의 확인(★1) (2) 대각 평면 BDHF 위로의 점 A 의 정사영 → 면대각선 BD 의 중점(★2~3) (3) 정사면체 꼭짓점의 밑면 위 정사영 = 무게중심(★2)."
```

```yaml
- id: RPM-GEO-0264
  page: 43
  vendor_label: "교과서 03-5 정사영"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    같은 직육면체(그룹 공통 그림)에서 선분 CE 의 평면 DHGC 위로의 정사영.
  category: "끝점 정사영: C 는 평면 위 → C · E → H → 선분 CH"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직육면체에서 점·선분·도형의 정사영 찾기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    C 는 평면 DHGC 위의 점이므로 자기 자신, E 는 EH ⊥ 면 DHGC 이므로 H. 선분의 정사영은 두 끝점의 정사영을 잇는 선분 CH.
    교과서·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "C ∈ 평면 DHGC → C · EH ⊥ 평면 → E → H → 선분 CH"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '선분~$\pt{CH}$'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-g0263-0266.png"
  latex: latex-bank/rpm-geo/items/0264.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "선분·평면 조합 변경(AG 의 평면 EFGH 위 정사영 EG · DE 의 평면 ABCD 위 정사영 DA). 제약: 끝점의 수선이 모서리를 따라가는 면(또는 면과 평행한 평면)만."
    creative: "(1) 평면과 평행한 선분(AB → EFGH 위 정사영 EF)·수직인 선분(AE → 점 E)으로 퇴화 확인(★1) (2) 공간대각선 AG 의 각 면 위 정사영이 면대각선임을 이용해 길이 비교(★2) (3) 정사영 길이를 구한 뒤 AB cosθ 로 θ 의 코사인 역산(0267 골조와 연결 · ★2)."
```

```yaml
- id: RPM-GEO-0265
  page: 43
  vendor_label: "교과서 03-5 정사영"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    같은 직육면체(그룹 공통 그림)에서 삼각형 DEC 의 평면 DHGC 위로의 정사영.
  category: "세 꼭짓점 정사영 D → D, E → H, C → C → 한 직선 위에 있지 않음 → 삼각형 DHC"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직육면체에서 점·선분·도형의 정사영 찾기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    D, C 는 평면 위라 자기 자신, E 는 H. 세 정사영이 한 직선 위에 있지 않으므로 삼각형 DHC. 도형의 정사영 = 각 점의 정사영의 모임.
    교과서·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "D, C ∈ 평면 · E → H → 삼각형 DHC"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '삼각형~$\pt{DHC}$'
  answer_source: "답지"
  figure: "crop:fig-g0263-0266.png"
  latex: latex-bank/rpm-geo/items/0265.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼각형·평면 조합 변경(삼각형 DEC → 평면 EFGH 이면 삼각형 HEG). 제약: 세 정사영이 서로 다르고 공선이 아니어야 삼각형(아니면 0266 처럼 퇴화)."
    creative: "(1) 넓이 비 △DHC/△DEC = cos(이면각)을 계산해 정사영 넓이 공식 도입(★2) (2) 평면과 평행한 삼각형의 정사영은 합동임을 확인(★1) (3) 정사영을 먼저 주고 원래 도형을 찾는 역방향(★2)."
```

```yaml
- id: RPM-GEO-0266
  page: 43
  vendor_label: "교과서 03-5 정사영"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    같은 직육면체(그룹 공통 그림)에서 삼각형 DEC 의 평면 BFGC 위로의 정사영.
  category: "D → C, E → F, C → C → 정사영 점이 두 개로 겹침 → 선분 CF"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직육면체에서 점·선분·도형의 정사영 찾기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    DC ⊥ 면 BFGC 이므로 D 의 정사영은 C, E 는 F, C 는 자기 자신. 세 정사영 중 두 점이 겹쳐 삼각형이 선분 CF 로 퇴화한다.
    「평면에 수직인 도형의 정사영은 선분」이 포인트(T-경계). 교과서·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "D → C, E → F, C → C → 정사영 점 두 개 → 선분 CF"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '선분~$\pt{CF}$'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-g0263-0266.png"
  latex: latex-bank/rpm-geo/items/0266.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "평면을 AEHD 로 바꾸면 D → D, E → E, C → D 로 선분 DE. 제약: 삼각형이 평면과 수직일 때만 선분으로 퇴화하므로 답의 종류(삼각형/선분/점)를 먼저 검산."
    creative: "(1) 퇴화 이유를 θ=90°·cos90°=0(넓이 0)과 연결(★2) (2) 「정사영이 선분이 되는 면을 모두 고르기」 역방향(★2) (3) 대각 평면 위로의 정사영이 삼각형인지 선분인지 판단(★2~3)."
```

그룹 G9 공통 발문(0267~0268): 「선분 AB 의 평면 α 위로의 정사영을 선분 A'B' 이라 하고, 직선 AB 와 평면 α 가 이루는 각의 크기를 θ 라 할 때, 다음을 구하시오.」(그림 없음)

```yaml
- id: RPM-GEO-0267
  page: 43
  vendor_label: "교과서 03-5 정사영"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    선분 AB 의 평면 α 위로의 정사영이 A'B', 직선 AB 와 α 가 이루는 각이 θ 일 때(그룹 공통 발문 · 0267~0268) AB=4, θ=60° 이면 A'B' 의 길이.
  category: "A'B' = AB cosθ → 4·cos60° → 2"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "선분의 정사영 길이(A'B' = AB cosθ)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    정사영 길이 공식 A'B' = AB cosθ 에 대입, 4·(1/2) = 2. 한 줄.
    교과서·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "A'B' = AB cosθ → 4·(1/2) → 2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$2$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0267.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AB 와 θ(30°·45°·60°) 변경. 제약: 특수각 · 답이 정수나 간단한 무리수 · θ=90° 는 점으로 퇴화(길이 0)."
    creative: "(1) A'B' 와 θ 를 주고 AB 를 묻는 역산(★1) (2) 직육면체에서 공간대각선의 면 위 정사영 길이로 코사인을 구하게 하기(★2) (3) A, B 가 평면의 양쪽에 있는 배치에서도 공식이 성립함을 확인(★2)."
```

```yaml
- id: RPM-GEO-0268
  page: 43
  vendor_label: "교과서 03-5 정사영"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    같은 설정(그룹 공통 발문)에서 AB=10, A'B'=5√3 이면 θ 의 크기.
  category: "cosθ = A'B'/AB = √3/2 → θ = 30°"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "선분의 정사영 길이(A'B' = AB cosθ)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    공식 역산 cosθ = 5√3/10 = √3/2, 0° ≤ θ ≤ 90° 에서 θ = 30°. 한 줄.
    교과서·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "cosθ = A'B'/AB → √3/2 → θ = 30°"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$30^\circ$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0268.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AB, A'B' 쌍을 (8, 4√2 → 45°)·(6, 3 → 60°) 등으로. 제약: 비가 특수각 코사인이고 A'B' ≤ AB."
    creative: "(1) 정사영 길이와 각을 모두 감추고 직육면체 배치로 주기(★2) (2) 두 선분의 정사영 길이가 같을 조건으로 각 비교(★2) (3) 「A'B' 가 AB 의 절반」처럼 비율 서술로 주기(★1)."
```

그룹 G10 공통 발문(0269~0270): 「평면 α 위에 있는 도형의 넓이를 S, 이 도형의 평면 β 위로의 정사영의 넓이를 S' 이라 하고, 두 평면 α, β 가 이루는 각의 크기를 θ 라 할 때, 다음을 구하시오.」(그림 없음)

```yaml
- id: RPM-GEO-0269
  page: 43
  vendor_label: "교과서 03-5 정사영"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    평면 α 위 도형의 넓이 S, 평면 β 위로의 정사영 넓이 S', 두 평면이 이루는 각 θ 일 때(그룹 공통 발문 · 0269~0270) S'=15, θ=30° 이면 S 의 값.
  category: "S' = S cosθ → S = S'/cosθ = 15/(√3/2) → 10√3"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정사영의 넓이(S' = S cosθ)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    넓이 공식 역산 S = 15 ÷ (√3/2) = 30/√3 = 10√3. 분모 유리화 한 줄.
    교과서·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "S' = S cosθ → S = 15/(√3/2) → 10√3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$10\sqrt{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0269.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "S', θ 변경. 제약: cosθ 가 특수각 값이고 S 가 깔끔한 수 · 0° < θ < 90° (90° 면 S'=0 으로 역산 불가)."
    creative: "(1) S, S' 를 주고 θ 를 묻기(0270 골조 · ★1) (2) 도형을 정삼각형·원으로 특정해 S 를 먼저 계산(★2) (3) θ 를 정사면체·정육면체 대각 평면의 이면각 계산으로 얻은 뒤 적용(★3)."
```

```yaml
- id: RPM-GEO-0270
  page: 43
  vendor_label: "교과서 03-5 정사영"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    같은 설정(그룹 공통 발문)에서 S=6√2, S'=6 이면 θ 의 값.
  category: "cosθ = S'/S = 1/√2 → θ = 45°"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정사영의 넓이(S' = S cosθ)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    cosθ = 6/(6√2) = √2/2, θ = 45°. 한 줄.
    교과서·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "cosθ = S'/S → √2/2 → 45°"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$45^\circ$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0270.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "S, S' 쌍 변경(S=8, S'=4 → 60° · S=4√3, S'=6 → 30°). 제약: S' ≤ S 이고 비가 특수각 코사인."
    creative: "(1) 넓이 대신 도형(정사각형 한 변 2√2 와 정사영 넓이 4)으로 주기(★1) (2) 정사영 넓이가 원래의 절반이 되는 각 60° 를 이용한 도형 배치 문제(★2) (3) θ 를 구한 뒤 같은 두 평면에서 다른 도형의 정사영 넓이까지 묻기(★2)."
```

```yaml
- id: RPM-GEO-0271
  page: 43
  vendor_label: "교과서 03-5 정사영"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    두 평면 α, β 가 이루는 각이 60°, α 위에 한 변의 길이가 4 인 정사각형이 있을 때 이 정사각형의 β 위로의 정사영의 넓이.
  category: "S = 4² = 16 → S' = S cos60° → 8"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정사영의 넓이(S' = S cosθ)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    정사각형 넓이 16 을 먼저 구하고 cos60° = 1/2 를 곱해 8. 두 단계지만 모두 대입.
    교과서·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "S = 16 → S' = 16·cos60° → 8"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$8$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0271.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "변 길이·각 변경(한 변 6, 45° → 18√2). 제약: 특수각 · 답이 정리 가능."
    creative: "(1) 정삼각형·원·마름모로 도형 교체 → 넓이 계산 한 단계 추가(★1~2) (2) 정사영 넓이와 각을 주고 원래 도형의 변 길이를 묻는 역방향(★2) (3) 정육면체 면 ABCD 의 평면 BDE 위로의 정사영 넓이(cos = 1/√3)처럼 각을 이면각 계산으로 얻게 하기(★3)."
```

### 유형 01 평면의 결정 조건

```yaml
- id: RPM-GEO-0272
  page: 44
  vendor_label: "유형 01 평면의 결정 조건"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    정육면체 ABCD-EFGH 에서 두 직선 BD, DF 와 네 점 A, C, E, G 로 만들 수 있는 서로 다른 평면의 개수.
  category: "결정 조건별 후보(두 교차 직선 1 · 직선+점 4+4 · 세 점 C(4,3)=4) → 겹치는 평면 합치기 → 7"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 2
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "후보 13개(BDF · BD+각 점 4 · DF+각 점 4 · 세 점 조합 4) 중 같은 평면(ABCD 두 번 · ADGF 두 번 · DCFE 두 번 · A, C, E, G 네 점 공면)을 정육면체 대각 평면으로 알아보고 합쳐 7 — 겹침 판단 없이는 틀린 답"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "평면의 결정 조건 — 평면의 개수 세기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 직선 BD, DF 는 D 에서 만나 평면 BDF(=BDHF) 하나. BD+A, BD+C 는 모두 면 ABCD · BD+E → BDE · BD+G → BDG. DF+A 와 DF+G 는 같은 대각 평면 ADGF, DF+C 와 DF+E 는 DCFE. 네 점 A, C, E, G 는 한 대각 평면 ACGE 위. 따라서 1+3+2+1 = 7.
    후보를 결정 조건별로 나열한 뒤 정육면체의 대각 평면(BDHF · ADGF · DCFE · ACGE)으로 겹침을 알아보는 단계가 핵심(VF d1). 유형 대표문제·level 없음 → ★2 출발, 통찰 1개·M_total 6 → ★2 유지.
    [분류 이슈] 겹침 판단을 통찰(I-VF d1)로 볼지 T-범위 함정(Mₜ)만으로 볼지 애매 — 어느 쪽이든 ★2 이므로 통찰형 ★2 로 기록.
  tier: star_2
  mechanism_primary: "결정 조건별 후보 나열(1+4+4+4) → 정육면체 대각 평면(BDHF · ADGF · DCFE · ACGE)으로 겹침 합치기 → 7"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$7$"
  answer_source: "답지"
  figure: "crop:fig-0272.png"
  latex: latex-bank/rpm-geo/items/0272.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선·점의 조합 변경(예: 직선 AC, EG 와 점 B, D, F, H). 제약: 답이 그림 라벨과 정육면체 대칭에 좌우되므로 한 변 1 인 좌표로 평면 방정식을 세워 겹침을 검산해 답을 확정할 것 · 라벨 ABCD-EFGH 대응 고정."
    creative: "(1) 점만 4개(공면인 A, C, E, G 와 일반 네 점 대비)로 줄이면 겹침이 한 종류뿐 → ★1 (2) 두 직선을 꼬인 위치(BD, EG 등)로 두면 두 직선이 평면을 만들지 않음까지 판단해야 해 VF 강화 → ★3 (3) 정육면체 8꼭짓점 전체(20개)·정팔면체 6꼭짓점(면 8 + 대각 평면 3 = 11)으로 확장하면 대칭 세기 SYM 이 붙어 ★3."
```

```yaml
- id: RPM-GEO-0273
  page: 44
  vendor_label: "유형 01 평면의 결정 조건"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    사각뿔 A-BCDE 에서 세 점 B, D, E 와 직선 AC 로 만들 수 있는 서로 다른 평면의 개수.
  category: "세 점 B, D, E → 밑면 1 · 직선 AC + 점 B, D, E 각각 → 3 (겹침 없음) → 4"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평면의 결정 조건 — 평면의 개수 세기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    세 점 B, D, E 는 밑면 BCDE(1개). 직선 AC 는 밑면과 C 에서만 만나므로 AC 와 B, D, E 각각이 서로 다른 평면 ABC, ACD, ACE 를 만든다(어느 것도 밑면과 같지 않고 서로도 다름). 두 점만으로는 평면이 안 되고 직선 AC 가 세 점 중 어느 것과도 다른 것과 함께 한 평면에 놓이지 않음을 확인하면 4.
    유형 구역·level 중하 → ★1~2 출발, 통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "세 점 → 밑면 1 · 직선 AC + 각 점 → 3 (겹침 없음) → 4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$4$"
  answer_source: "답지"
  figure: "crop:fig-0273.png"
  latex: latex-bank/rpm-geo/items/0273.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "점·직선 조합 변경(예: 세 점 C, D, E 와 직선 AB). 제약: 직선이 세 점 중 두 점과 공면이 되는 배치(직선 BD 와 점 C, E 는 밑면에 겹침)를 피하거나 의도적으로 넣어 답을 검산."
    creative: "(1) 직선을 BD(밑면 대각선)로 바꾸면 BD+C, BD+E 가 밑면과 겹쳐 겹침 판단이 생김 → ★2 (2) 「이 평면들 중 점 A 를 지나는 것의 개수」로 조건 추가(★1) (3) 사각뿔 5꼭짓점 전체(0246 골조 · 7개)와 비교해 「직선 하나로 줄이면 몇 개가 사라지나」(★2)."
```

```yaml
- id: RPM-GEO-0274
  page: 44
  vendor_label: "유형 01 평면의 결정 조건"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    직육면체 ABCD-EFGH 에서 한 평면을 결정하지 않는 것 고르기 — ① 세 점 H, F, C ② 점 A 와 직선 CG ③ 직선 CF 와 DE ④ 직선 DH 와 HF ⑤ 직선 AE 와 BC. 5지선다.
  category: "각 보기를 결정 조건(세 점·직선과 점·교차·평행)에 대조 → 꼬인 위치인 두 직선 찾기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평면의 결정 조건 — 결정 여부 판단"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ① 한 직선 위에 있지 않은 세 점, ② 직선 밖의 한 점, ③ CF ∥ DE(마주보는 면의 대응 대각선), ④ H 에서 만남 → 모두 평면 결정. ⑤ AE 와 BC 는 꼬인 위치(만나지도 평행하지도 않음)라 결정 못 함.
    보기 판단 다섯 번이지만 각각 한눈에 보임. 유형·level 중하·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "보기별 결정 조건 대조 → AE, BC 는 꼬인 위치 → ⑤"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "⑤"
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0274.png"
  latex: latex-bank/rpm-geo/items/0274.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "보기의 점·직선 라벨 교체(꼬인 위치 쌍은 AB 와 CG, AD 와 BF 등). 제약: 정답 보기 하나만 꼬인 위치가 되게 하고 평행 보기는 실제로 평행한 면대각선 쌍(CF ∥ DE, BG ∥ AH)만 사용."
    creative: "(1) 「한 평면을 결정하는 것의 개수」로 바꿔 ㄱㄴㄷ 전수 판단(★1~2) (2) 면대각선 두 개(예: AC 와 FH · 꼬인 위치)처럼 평행·꼬인 판단이 미묘한 쌍을 넣기(★2) (3) 정사면체·정팔면체 등 다른 다면체에서 같은 판단(★2)."
```

```yaml
- id: RPM-GEO-0275
  page: 44
  vendor_label: "유형 01 평면의 결정 조건"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    어느 네 점도 한 평면 위에 없고 어느 세 점도 한 직선 위에 없는 서로 다른 여섯 점으로 만들 수 있는 서로 다른 평면의 개수.
  category: "조건 해석(세 점마다 서로 다른 평면) → 세 점을 고르는 경우의 수 C(6,3)=20"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평면의 결정 조건 — 평면의 개수 세기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    세 점이 한 직선 위에 없으니 어느 세 점도 평면을 결정하고, 네 점이 공면이 아니니 서로 다른 세 점 조합은 서로 다른 평면. 따라서 개수 = 여섯 점 중 세 점을 고르는 경우의 수 20. 조합 한 줄.
    벤더 level 중 → ★2 출발이나 통찰 없음·M_total 4 → −1 → ★1.
    [분류 이슈] 벤더 「중」과 1단 차이 — 조합 계산이 기하 학습자에게 낯설면 ★2 도 가능. 라벨은 ★1 로 두고 기록.
  tier: star_1
  mechanism_primary: "일반 위치 조건 → 세 점 조합마다 서로 다른 평면 → C(6,3) = 20"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$20$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0275.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "점의 개수 n → C(n,3) (n=5 → 10, n=7 → 35). 제약: 「어느 네 점도 공면 아님 · 어느 세 점도 공선 아님」 조건 유지."
    creative: "(1) 「그 중 네 점이 한 평면 위」 예외를 넣으면 C(6,3) − C(4,3) + 1 = 17 로 겹침 보정(VF 도입 · ★2) (2) 「직선의 개수」(C(6,2)=15)와 함께 묻기(★1) (3) 특정 다면체(삼각기둥 6꼭짓점 → 면 5 + 그 밖의 평면 6 = 11)로 바꿔 대칭 세기(★2~3)."
```

## 표본 판정 요약 (30문)

- ★ 분포: ★1 29 · ★2 1 · ★3 0 · ★4 0 · ★5 0
- 통찰형 1(0272 · I-VF d1) · 절차형 29 · premium 0
- type_hint 상위: 「각기둥에서 면과 면의 위치 관계」 4 · 「직육면체에서 점·선분·도형의 정사영 찾기」 4 · 「평면의 결정 조건 — 평면의 개수 세기」 4 · 「직육면체에서 모서리와 모서리의 위치 관계」 3 · 「직육면체에서 모서리와 면의 위치 관계」 3 · 「정사영의 넓이(S' = S cosθ)」 3 · 「선분의 정사영 길이」 2 · 「각기둥에서 두 직선이 이루는 각」 2 · 증명 빈칸 3종(직선-평면 수직 · 삼수선 · 두 평면 수직) 각 1 · 「직선과 평면의 수직 — 수직인 면 찾기」 1 · 「평면의 결정 조건 — 결정 여부 판단」 1
- 그림: 개별 크롭 8문(`crop:fig-0246.png` · `fig-0259` · `fig-0260` · `fig-0261` · `fig-0262` · `fig-0272` · `fig-0273` · `fig-0274`) + 그룹 공통 크롭 4장(`fig-g0247-0254` 8문 · `fig-g0255-0256` 2문 · `fig-g0257-0258` 2문 · `fig-g0263-0266` 4문) → 24문이 그림 참조, 6문(0267~0271 · 0275) 그림 없음
- 벤더 신호: 교과서 26문 전부 ★1 · 유형 01 은 대표문제 ★2 / 중하 2문 ★1 / 중 1문 ★1(−1 조정)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다. 2단 이상 어긋난 문항은 없다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-GEO-0272 | 후보 13 → 7 의 겹침 판단(정육면체 대각 평면 4개 인식)을 통찰 I-VF d1 로 볼지 T-범위 함정(Mₜ 2)만으로 볼지 애매. 어느 쪽이든 ★2 라 통찰형 ★2 로 기록 — 카탈로그 설계 때 「개수 세기」 유형의 base ★ 와 겹침 판단의 통찰 인정 여부를 결정 | ★2 |
| RPM-GEO-0275 | 벤더 「중」(★2 출발)이나 조합 C(6,3) 한 줄·통찰 없음·M_total 4 → −1 → ★1. 22개정에서 조합은 확률과 통계 소속이라 기하만 배운 학생에게는 낯설 수 있어 ★2 도 가능 | ★1 / ★2 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 반복된 type_hint: 「각기둥에서 면과 면의 위치 관계」 4 · 「직육면체에서 점·선분·도형의 정사영 찾기」 4 · 「평면의 결정 조건 — 평면의 개수 세기」 4 · 「직육면체에서 모서리와 모서리의 위치 관계」 3 · 「직육면체에서 모서리와 면의 위치 관계」 3 · 「정사영의 넓이」 3.
- 통합해도 될 유형: 위치 관계 읽기 세 갈래(모서리-모서리 / 모서리-면 / 면-면 · 0247~0256)는 「다면체에서 위치 관계 읽기」 한 유형(base ★1)으로 묶고 소구분만 두면 된다. 증명 빈칸 세 종(0260 직선-평면 수직 · 0261 삼수선 · 0262 두 평면 수직)은 「공간도형 기본 정리 증명 빈칸」 한 유형(base ★1)으로 — 단 빈칸 없는 서술형 증명은 별도 ★2. 정사영 길이·넓이 공식 대입(0267~0271)은 「정사영 공식 대입」 하나(base ★1)로 충분하다.
- 따로 세워야 할 유형: 「평면의 결정 조건 — 개수 세기」(0246 · 0272 · 0273 · 0275 · base ★2, 겹침 판단 VF 가 붙으면 ★3)와 「결정 여부 판단」(0274 · base ★1)은 골조가 달라 분리한다. 「도형의 정사영 찾기」(0263~0266 · 공간 시각화 · 퇴화 판단)는 공식 대입과 별개 유형(base ★1~2). 「두 직선이 이루는 각」(0257~0258)은 이 범위에서 ★1 이지만 뒤 범위의 유형 구역에서 삼수선·코사인법칙과 결합해 ★2~3 으로 커지므로 기본/응용 두 층으로 둘 것.
