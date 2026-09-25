---
name: mechanism-데이터-GN-GEO-08
description: 개념원리 기하 08 직선과 평면의 위치 관계(1/1 · 83~84쪽 · 7문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 기하 (22개정) · 전사본 latex-bank/gn-geo
  section: 08 직선과 평면의 위치 관계
  unit_code: GEO-08
  part: "1/1"
  extract_range: "83~84쪽 · 83-e1~84-163"
  total_problems: 7
  unit_total: 7
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·예제 태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-geo/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-geo/items/<id>.tex
  image_source: latex-bank/gn-geo/figures/ (crops.json)
---

# 개념원리 기하 · 08 직선과 평면의 위치 관계 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 기하 83~84쪽, 단원 08 「직선과 평면의 위치 관계」 전 7문항을 다룬다. 전사본 구역은 「필수·발전 예제」 하나이며 그 안에 필수 예제 2문(`83-e1` · `84-e2` · 상자 발문만 전사 · 풀이와 KEY Point 없음)과 개념원리 익히기 확인체크 5문이 섞여 있다. 개념원리 고등의 벤더 난이도 신호는 구역과 예제 태그다 — 확인체크는 개념 확인이라 ★1, 「필수」 예제는 ★2 출발점이고, 여기서 M_total·통찰로 ±1 조정했다. 이 단원은 계산이 거의 없고 공간 배치를 읽어 평면 결정 조건·평행·꼬인 위치로 분류하는 것이 전부라 Mₖ 는 전 문항 1이며, 변별은 Mₛ(열거 단계 수)와 중복·누락 함정(Mₜ)에서 난다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 골조 한 줄) · `insights[]`(유형 코드 + depth + 근거) · `variation_notes`(바꿔도 되는 수와 제약 · 통찰 골조를 유지한 설정 변형과 ★ 변동 지점)를 채웠다. 그림은 발문에 입체 이름과 꼭짓점 라벨이 모두 적혀 있어 표준 라벨링(정육면체·직육면체 ABCD-EFGH, 정팔면체 A-BCDE-F)으로 골조가 그대로 잡히는 범위에서 판정했고, `figure` 필드에 크롭 경로를 남겨 변형 때 라벨 고정 여부를 확인할 수 있게 했다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-GEO-83-e1
  page: 83
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    한 평면 위에 있지 않고 어느 세 점도 한 직선 위에 있지 않은 네 점으로 만들 수 있는 서로 다른 평면의 개수.
  category: "평면의 결정 조건 → 세 점 조합 4C3"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평면의 결정 조건 — 공간의 점들로 만들 수 있는 평면의 개수"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    네 점 중 세 점을 고르면 평면이 하나 결정되고, 어느 네 점도 공면이 아니므로 중복이 없다. 4C3 = 4 한 단계.
    사면체의 면 개수를 세는 것과 같아 결정 조건의 정의 확인에서 끝난다. 통찰 0 · M_total 4 → 필수 예제 출발점 ★2 에서 −1 하여 ★1.
    라벨과 벤더 신호 차이는 1단이라 분류 이슈로 올리지 않았다.
  tier: star_1
  mechanism_primary: "어느 세 점도 공선 아님 → 세 점마다 평면 하나 → 4C3 = 4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$4$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/83-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "점의 개수 4 → 5·6 (nC3 = 10, 20). 제약: 「어느 세 점도 한 직선 위에 있지 않다」와 「어느 네 점도 한 평면 위에 있지 않다」를 모두 명시해야 nC3 가 그대로 답이 된다. 조건 하나라도 빠지면 중복·불성립이 생겨 답이 달라진다."
    creative: "(1) 사면체 그림을 주고 면의 개수로 묻기(★1 유지) (2) 네 점 중 세 점이 한 직선 위에 있는 경우를 섞어 결정되지 않는 조합을 빼게 하면 ★2 (3) 만들 수 있는 직선의 개수(4C2)와 평면의 개수를 함께 묻기(★2)."
```

```yaml
- id: GN-GEO-83-159
  page: 83
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    어느 네 점도 한 평면 위에 있지 않고 어느 세 점도 한 직선 위에 있지 않은 다섯 점으로 만들 수 있는 서로 다른 평면의 개수.
  category: "평면의 결정 조건 → 5C3 조합 세기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평면의 결정 조건 — 공간의 점들로 만들 수 있는 평면의 개수"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    83-e1 과 완전히 같은 골조에서 점의 개수만 5로 올린 확인체크. 공면·공선 배제 조건이 모두 주어져 5C3 = 10 을 그대로 쓴다.
    중복 보정이 없으므로 새 판단은 없고 조합 계산 한 줄. 통찰 0 · M_total 4 → 확인체크 출발점 ★1 유지.
  tier: star_1
  mechanism_primary: "어느 네 점도 공면 아님 → 세 점 조합마다 서로 다른 평면 → 5C3 = 10"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$10$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/83-159.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "점의 개수 5 → 6·7 (6C3 = 20, 7C3 = 35). 제약: 어느 네 점도 공면이 아니라는 조건이 있어야 중복이 없다. 개수를 키워도 난이도는 그대로여서 ★ 변동 없음."
    creative: "(1) 다섯 점 중 네 점만 한 평면 위에 있게 바꾸면 중복 보정(10 − 4 + 1 = 7)이 생겨 83-160 골조 ★2 (2) 평면 대신 직선의 개수를 묻기(★1) (3) 세 점이 한 직선 위에 있는 경우를 넣어 감소량을 묻기(★2~3)."
```

```yaml
- id: GN-GEO-83-160
  page: 83
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    사각뿔의 다섯 꼭짓점으로 만들 수 있는 서로 다른 평면의 개수.
  category: "5C3 → 밑면 네 점의 공면 중복 보정"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "꼭짓점 배치를 세 점 조합 세기로 옮기고, 밑면 네 점이 한 평면 위에 있으므로 네 조합이 한 평면으로 겹치는 것을 보정"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "입체의 꼭짓점으로 만들 수 있는 평면의 개수(공면 중복 보정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    5C3 = 10 을 그대로 쓰면 틀린다. 밑면 ABCD 의 네 꼭짓점이 한 평면 위에 있어 그 4개 조합이 한 평면으로 겹치므로 10 − 4 + 1 = 7.
    꼭짓점과 밑면 1 · 옆면 4 · 대각선 평면 2 로 직접 열거해도 같은 7 이라 중복 보정을 알아차리느냐가 유일한 갈림길이다.
    확인체크 출발점 ★1 에 공면 중복 보정 판단(RT d1) 하나로 +1 → ★2.
    [분류 이슈] 중복 보정을 통찰(I-RT)로 볼지 조합 세기의 표준 절차로 볼지 경계 — 절차형으로 보면 ★1 이다.
  tier: star_2
  mechanism_primary: "5C3 = 10 → 밑면 네 점의 4개 조합이 한 평면으로 겹침 → 10 − 4 + 1 = 7"
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '$7$'
  answer_source: "답지"
  figure: "crop:fig-83-160.png"
  latex: latex-bank/gn-geo/items/83-160.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑면을 오각뿔·육각뿔로 (n각뿔 → 1 + nC2 = 11, 16). 제약: 밑면은 볼록다각형이고 어느 세 꼭짓점도 한 직선 위에 있지 않아야 하며, 그림 라벨(밑면 ABCD · 꼭짓점 하나)은 고정한다."
    creative: "(1) 삼각기둥·직육면체로 바꾸면 공면인 네 점이 여러 벌 생겨 보정 횟수가 늘고 ★3 (2) 꼭짓점 대신 모서리의 중점을 섞으면 공면 판별이 추가돼 ★3 (3) 평면 대신 직선의 개수를 묻기(중복 보정 없음 → ★1~2)."
```

```yaml
- id: GN-GEO-83-161
  page: 83
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    정육면체에서 보기 ㄱ~ㄹ(세 점 A·C·G / 점 A와 직선 FH / 두 직선 BD·GH / 두 직선 BF·DH) 중 하나의 평면을 결정하는 것을 모두 고르기.
  category: "각 보기를 평면 결정 조건에 대응 → 꼬인 위치 배제"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "정육면체 그림에서 두 직선 BD·GH 가 만나지도 평행하지도 않음(꼬인 위치)을 읽어내 평면 결정 조건 위배로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "평면의 결정 조건 판정(세 점 · 점과 직선 · 두 직선)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    보기마다 결정 조건이 다르다 — ㄱ 은 한 직선 위에 있지 않은 세 점, ㄴ 은 직선 밖의 한 점과 직선, ㄹ 은 평행한 두 직선이라 모두 평면을 결정한다.
    ㄷ 만 두 직선이 꼬인 위치라 결정하지 못하고, 이 판별이 유일한 공간 직관 부담이다. 계산은 없고 판정 4회로 Mₛ 2.
    확인체크 출발점 ★1 에 꼬인 위치 판별(RT d1)로 +1 → ★2.
  tier: star_2
  mechanism_primary: "보기별 결정 조건 확인 → 두 직선 BD·GH 는 꼬인 위치라 제외 → ㄱ, ㄴ, ㄹ"
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: 'ㄱ, ㄴ, ㄹ'
  answer_source: "답지"
  figure: "crop:fig-83-161.png"
  latex: latex-bank/gn-geo/items/83-161.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "보기의 점·직선 조합을 다른 꼭짓점으로 교체(세 점 B·D·G, 점 C와 직선 EG, 두 직선 AC·EG 등). 제약: 그림 라벨 ABCD-EFGH 고정, 꼬인 위치 보기와 평행한 두 직선 보기가 각각 하나 이상 들어가야 답이 갈린다."
    creative: "(1) 평면을 결정하지 못하는 것만 고르게 뒤집기(★2 유지) (2) 정육면체를 정팔면체·삼각기둥으로 바꾸면 공간 직관 부담이 커져 ★3 (3) 보기 판정 대신 여덟 꼭짓점으로 결정되는 평면의 개수를 세게 하면 8C3 중복 보정이 들어가 ★3~4."
```

```yaml
- id: GN-GEO-84-e2
  page: 84
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    직육면체에서 ⑴~⑸ — 모서리 AD 와 평행한 모서리, 모서리 AD 와 꼬인 위치에 있는 모서리, 모서리 AB 와 평행한 면, 면 AEHD 와 만나는 면, 모서리 AB 를 포함하는 면을 각각 모두 구하기.
  category: "직육면체에서 모서리·면의 위치 관계 전수 열거"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직육면체에서 모서리·면의 위치 관계(평행 · 꼬인 위치 · 포함 · 만남)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    다섯 소문항 모두 정의를 그대로 적용해 해당하는 것을 빠짐없이 적는 열거형이다. 새 변환은 없고 분류 기준만 다섯 번 바뀐다.
    함정은 두 갈래 — 꼬인 위치에서 만나는 모서리와 평행한 모서리를 모두 빼야 하고(T-범위), 「만나는 면」에서 마주보는 평행한 면을 빼야 한다(T-경계). Mₜ 2.
    통찰 0 이지만 M_total 6 이라 −1 조건(M_total ≤ 5)에 걸리지 않아 필수 예제 출발점 ★2 유지. 이 단원 위치 관계 분류의 대표 원본이다.
  tier: star_2
  mechanism_primary: "기준 모서리·면을 정하고 나머지 모서리·면을 평행·만남·꼬인 위치·포함으로 분류 → 각 소문항에 해당하는 것 열거"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ 모서리~$\pt{BC}$, 모서리~$\pt{EH}$, 모서리~$\pt{FG}$ ⑵ 모서리~$\pt{BF}$, 모서리~$\pt{CG}$, 모서리~$\pt{EF}$, 모서리~$\pt{HG}$ ⑶ 면~$\pt{DHGC}$, 면~$\pt{EFGH}$ ⑷ 면~$\pt{ABCD}$, 면~$\pt{AEFB}$, 면~$\pt{EFGH}$, 면~$\pt{DHGC}$ ⑸ 면~$\pt{ABCD}$, 면~$\pt{AEFB}$'
  answer_source: "본문 풀이"
  figure: "crop:fig-84-e2.png"
  latex: latex-bank/gn-geo/items/84-e2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준 대상을 교체(모서리 AD → AB·AE, 면 AEHD → ABCD·EFGH). 제약: 직육면체 라벨 ABCD-EFGH 와 그림의 대응(A-E, B-F, C-G, D-H)을 고정해야 답이 유지되고, 소문항 다섯 개의 분류 기준은 서로 겹치지 않게 둔다."
    creative: "(1) 열거 대신 개수만 묻기(★1~2) (2) 직육면체를 삼각기둥·정육각기둥으로 바꾸면 꼬인 위치 판별 대상이 늘어 ★3 (3) 개수를 a·b·c·d 로 두고 합을 묻는 형태로 묶으면 84-163 골조가 되어 ★3."
```

```yaml
- id: GN-GEO-84-162
  page: 84
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    정육면체의 각 모서리를 연장한 직선 중 직선 CE 와 꼬인 위치에 있는 직선을 모두 구하기.
  category: "12개 모서리 직선 분류 → 만나는 것·평행한 것 제외"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "꼬인 위치 조건을 「CE 의 두 끝점 C·E 를 지나지 않고 CE 와 평행하지도 않은 모서리」로 옮겨 12개를 한 번에 걸러냄"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "꼬인 위치에 있는 직선 찾기(대각선 기준)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    CE 는 정육면체의 대각선이라 기준이 모서리가 아니고, 12개 모서리 직선을 하나씩 그림에서 보는 방식은 실수가 많다.
    C 또는 E 를 지나는 모서리 6개는 CE 와 만나므로 먼저 제외하고, 남은 6개에 CE 와 평행한 것이 없음을 확인하면 그대로 답이 된다.
    함정은 꼬인 위치에서 만나는 것과 평행한 것을 모두 빼야 하는 것(T-범위)과 「모서리를 연장한 직선」이라 선분이 아닌 직선으로 봐야 하는 것(T-표기) 둘.
    확인체크 출발점 ★1 에 여사건 형태의 조건 변환(EQV d1)으로 +1 → ★2.
  mechanism_primary: "모서리 12개 직선 → C·E 를 지나는 6개(만남) 제외 → 남은 6개에 평행 없음 확인 → 꼬인 위치 6개"
  tier: star_2
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '직선~$\pt{AB}$, 직선~$\pt{AD}$, 직선~$\pt{BF}$, 직선~$\pt{DH}$, 직선~$\pt{FG}$, 직선~$\pt{HG}$'
  answer_source: "답지"
  figure: "crop:fig-84-162.png"
  latex: latex-bank/gn-geo/items/84-162.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준 직선을 CE → AG·BH·DF 등 다른 대각선으로 바꾸면 라벨만 회전하고 답의 개수 6은 그대로다. 제약: 그림 라벨 고정. 기준을 면의 대각선 AC 로 바꾸면 만나는 모서리 수가 달라져 답의 개수도 변하므로 개수를 다시 확정해야 한다."
    creative: "(1) 열거 대신 개수만 묻기(★2 유지) (2) CE 와 만나는 모서리·평행한 모서리를 함께 물어 분류 전체를 확인하기(★2) (3) 두 대각선 CE·BH 모두와 꼬인 위치인 직선을 묻기(교집합 판정 추가 → ★3)."
```

```yaml
- id: GN-GEO-84-163
  page: 84
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    정팔면체에서 모서리 BF 와 평행한 모서리의 개수 a, 모서리 AB 와 꼬인 위치에 있는 모서리의 개수 b, 평면 ABE 와 평행한 평면의 개수 c, 평면 ABC 와 평행한 모서리의 개수 d 를 구해 a+b+c+d 의 값 구하기.
  category: "정팔면체의 중심 대칭 구조 → a·c·d 즉시 · b 는 여사건 → 합"
  M: {s: 3, k: 1, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "정팔면체가 중심에 대해 대칭이라 각 모서리에 마주보는 평행한 모서리가 하나, 각 면에 마주보는 평행한 면이 하나뿐임을 이용해 a·c 를 즉시 결정하고 d 는 마주보는 면의 세 모서리로 환원"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "꼬인 위치 개수 b 를 「전체 모서리 − 자신 − AB 와 만나는 모서리 − AB 와 평행한 모서리」의 여사건으로 옮겨 셈"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "정다면체에서 위치 관계 개수 세기(a+b+c+d 합산형)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    정육면체와 달리 정팔면체는 학생에게 익숙하지 않아 모서리 12개·면 8개의 인접 관계를 스스로 세워야 하고, 네 가지 서로 다른 위치 관계를 한 문항에서 모두 묻는다.
    중심 대칭을 쓰면 평행한 모서리도 마주보는 면도 하나씩이라 a·c 가 바로 나오고, 평면 ABC 와 평행한 모서리는 마주보는 면 DEF 의 세 모서리로 환원된다. b 만 여사건으로 세면 된다.
    함정은 꼬인 위치에서 만나는·평행한 모서리를 모두 빼야 하는 것(T-범위)과 평면에 포함된 모서리는 평행으로 세지 않는 것(T-경계) 둘. 통찰 2개(SYM d2 · EQV d1) · M_total 8.
    [분류 이슈] 확인체크(★1 출발)인데 통찰 2개·M_total 8 로 ★3 판정 — 벤더 신호와 2단 차이. 라벨은 맞추지 않고 ★3 으로 두고 기록만 한다.
  tier: star_3
  mechanism_primary: "중심 대칭으로 a=1·c=1·d=3 → 모서리 12개에서 만남·평행·자신을 빼 b=4 → 합 9"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$9$'
  answer_source: "답지"
  figure: "crop:fig-84-163.png"
  latex: latex-bank/gn-geo/items/84-163.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a·b·c·d 의 기준 대상을 교체(모서리 BF → AC, 평면 ABE → BCF 등). 제약: 정팔면체는 중심 대칭이라 어떤 모서리를 잡아도 평행한 모서리는 1개, 어떤 면을 잡아도 평행한 면은 1개여서 a·c 는 고정이고 b·d 만 기준에 따라 바뀐다. 그림 라벨(A-BCDE-F)은 고정한다."
    creative: "(1) 정팔면체를 정육면체·정사면체로 바꾸면 대칭 구조와 개수가 달라져 ★2~3 (2) a+b+c+d 합 대신 ⑴~⑷ 소문항으로 나누면 여사건 통찰이 약해져 ★2 (3) 모서리 대신 면끼리의 위치 관계(평행한 면·만나는 면) 개수를 묻거나 대각선을 연장한 직선까지 포함시키면 판별 대상이 늘어 ★3~4."
```

## 표본 판정 요약 (7문)

- ★ 분포: ★1 2 · ★2 4 · ★3 1 · ★4 0 · ★5 0
- 통찰형 4(83-160 · 83-161 · 84-162 · 84-163) · 절차형 3(83-e1 · 83-159 · 84-e2) · premium 0
- 통찰 유형 분포: I-RT 2 · I-EQV 2 · I-SYM 1 (depth 3 없음 · depth_score 최대 1.50)
- type_hint 상위: 「평면의 결정 조건 — 점들로 만들 수 있는 평면의 개수」 2 · 「입체의 꼭짓점으로 만들 수 있는 평면의 개수(공면 중복 보정)」 1 · 「평면의 결정 조건 판정(세 점 · 점과 직선 · 두 직선)」 1 · 「직육면체에서 모서리·면의 위치 관계」 1 · 「꼬인 위치에 있는 직선 찾기」 1 (+「정다면체 위치 관계 개수 세기」 1)
- M 프로파일: Mₖ 는 전 문항 1(계산 부담 없음) · 변별은 Mₛ(열거 단계)와 Mₜ(중복·누락 함정)에서 남. M_total 4~8
- 대상층: 하위권 2 · 중하위권 3 · 중위권 1 · 중상위권 1
- 그림: 5문(`crop:fig-83-160.png` · `crop:fig-83-161.png` · `crop:fig-84-e2.png` · `crop:fig-84-162.png` · `crop:fig-84-163.png`) · 그림 없음 2문
- 답 출처: 본문 풀이 2(필수 예제) · 답지 5

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-GEO-83-160 | 밑면 네 점의 공면 중복 보정을 통찰(I-RT d1)로 볼지 조합 세기의 표준 절차로 볼지 경계. 통찰로 보아 ★2, 절차로 보면 ★1 | ★1 / ★2 |
| GN-GEO-84-163 | 확인체크(★1 출발)인데 정팔면체의 네 가지 위치 관계를 한 번에 물어 통찰 2개·M_total 8 → ★3. 벤더 신호와 2단 차이 | ★3 (벤더 ★1) |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세울 유형 1 — 「평면의 결정 조건으로 평면 개수 세기」**: 83-e1 · 83-159 는 조건이 모두 주어진 순수 nC3(base ★1), 83-160 은 공면인 점 묶음이 있어 중복 보정이 들어간다(base ★2). 같은 이름 아래 두더라도 **중복 보정 유무로 하위 유형을 갈라야** ★ 가 섞이지 않는다.
- **따로 세울 유형 2 — 「결정 조건 판정(보기형)」**: 83-161 은 개수를 세는 것이 아니라 세 점·점과 직선·두 직선 각각이 결정 조건을 만족하는지 판정한다. 개수 세기 유형과 통합하면 꼬인 위치 판별이라는 핵심이 묻히므로 분리한다.
- **통합해도 될 유형 — 「입체에서 모서리·면의 위치 관계」**: 84-e2 · 84-162 는 기준이 모서리냐 대각선이냐만 다르고 골조(전체를 만남·평행·꼬인 위치로 분류)가 같다. 하나의 유형으로 두고 「기준이 모서리 / 대각선」을 변형 축으로 기록하면 충분하다.
- **합산형(a+b+c+d)은 유형이 아니라 포장**: 84-163 은 위 유형의 네 인스턴스를 묶은 형태다. 카탈로그에는 기본 유형만 올리고 합산형은 ★ +1 의 **변형 패턴**으로 기록하는 편이 base ★ 를 안정적으로 만든다.
- 이 범위에는 ★4~5 후보가 없다. 저노출 유형(SC·VF·XU)은 한 문항도 나오지 않았고 I-SYM 이 84-163 한 번 나왔다 — 기하 단원의 ★4 이상 슬롯은 이 범위 밖(삼수선·정사영 등)에서 찾아야 한다.
