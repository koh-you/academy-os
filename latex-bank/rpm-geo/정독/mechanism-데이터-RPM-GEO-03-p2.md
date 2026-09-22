---
name: mechanism-데이터-RPM-GEO-03-p2
description: RPM 기하 03 공간도형(2/3 · 유형 02~08) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 기하 (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-geo
  section: 03 공간도형
  unit_code: GEO-03
  part: "2/3"
  extract_range: "44~49쪽 · 0276~0307"
  total_problems: 32
  unit_total: 100
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-geo/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-geo/items/<id>.tex
  image_source: latex-bank/rpm-geo/figures/ (crops.json)
---

# RPM 기하 · 03 공간도형 (2/3) 정독 데이터 (v1.0)

이 파일은 RPM 기하 03 공간도형의 두 번째 범위(44~49쪽 · 0276~0307 · 32문항)를 다룬다. 전부 「유형」 구역이며 유형 02 공간에서의 위치 관계(5문) · 유형 03 직선과 평면의 평행·수직(3문) · 유형 04 꼬인 위치에 있는 두 직선이 이루는 각(6문) · 유형 05 삼수선 정리(3문) · 유형 06 삼수선 정리의 활용(3문) · 유형 07 두 평면이 이루는 각(6문) · 유형 08 직선과 평면이 이루는 각(6문)으로 이어진다. 벤더 신호는 유형마다 첫 문항이 「대표문제」(level 없음 · 7문)이고 나머지는 난이도 중하 4문 · 중 15문 · 상중 6문, 서술형 태그 3문(0279 · 0291 · 0299)이다. 그림은 27문(전개도 1문 포함)이 크롭으로 있고 0281 · 0282 · 0283 · 0292 · 0298 은 그림이 없다. 출발점은 대표문제·중 ★2, 중하 ★1~2, 상중 ★3 으로 두고 M_total·통찰로 ±1 조정했다. 통찰 0 이고 M_total ≤ 4 인 문항은 −1 을 적용해 ★1 로 내렸고(대표문제 0284 · 0290 포함 12문), M_total 5 인 절차형은 출발점을 유지했다. 결과 ★1 12문 · ★2 14문 · ★3 6문이며 통찰형은 6문(0278 RT · 0280 EQV · 0283 MI · 0288 EQV · 0289 RT · 0307 EQV)이다. 벤더 신호와 2단 이상 어긋난 문항은 없고, 절차형인데 벤더 상중이라 ★3 을 유지한 0301 · 0306, 선택지에 0 이 있어 추측이 가능한 0288 은 [분류 이슈] 로 기록했다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 사슬) · `insights[]`(절차형이면 빈 배열) · `variation_notes`(numeric: 바꿔도 되는 수와 제약 / creative: 골조를 유지한 설정 변경과 ★ 변동 지점)를 채웠다. 이 범위의 골조는 「위치 관계 판정(정의 대입 · 개수 세기 · 전개도 조립 · 명제 반례) → 꼬인 두 직선의 각(평행이동 → 한 삼각형 · 안 되면 직선-평면 수직) → 삼수선 정리(수선의 발 두 개 → 직각 → 피타고라스) → 두 평면의 각(교선 위 한 점에서 수직인 두 직선 · 이등변삼각형 중선) → 직선과 평면의 각(수선의 발 위치 확정 → 직각삼각형 삼각비)」 순서로 이어지며, 유형 05~08 은 모두 「수선의 발이 어디인가」를 먼저 확정하는 한 골조를 공유한다.

## 문항 데이터

### 유형 02 공간에서의 위치 관계

```yaml
- id: RPM-GEO-0276
  page: 44
  vendor_label: "유형 02 공간에서의 위치 관계"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    직육면체 위에 삼각기둥을 한 면이 일치하도록 붙인 입체(모서리 17개)에서 직선과 평면의 교차·평행, 두 직선의 꼬인 위치, 한 평면과 평행한 모서리 수, 한 모서리와 꼬인 위치인 모서리 수를 묻는 5지선다(옳지 않은 것).
  category: "합성 입체의 위치 관계 판정 → 개수 세기 → 틀린 보기 고르기"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "입체도형에서 직선·평면의 위치 관계 판정과 개수 세기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    17개 모서리를 가진 합성 입체에서 보기마다 판정 대상이 다르다(교차 · 꼬인 위치 · 평면과 평행 · 평행 모서리 수 · 꼬인 모서리 수). ①~④ 는 정의 대입으로 참(④ 는 뒷면 모서리 4개 + 마루 AB 로 5개). ⑤ 는 AD 와 만나는 5개·평행한 BE·같은 평면(옆면 CDHG 와 지붕 끝면 ACD 가 한 평면) 위라 연장하면 만나는 CG·GH 를 빼면 꼬인 모서리가 8개라 틀림. 판정은 정의 대입뿐이라 통찰 0 이지만 열거 부담(Mₖ 2)이 있어 M_total 6 → 대표문제 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "보기별 대상 확정 → 정의(교차·평행·꼬인 위치)로 판정 → ④ 평행 모서리 5개 · ⑤ AD 와 꼬인 모서리 8개 → ⑤ 틀림"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지(쪽 렌더)"
  figure: crop:fig-0276.png
  latex: latex-bank/rpm-geo/items/0276.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "틀린 보기의 개수 값(⑤ 9개)을 다른 오답(10개 · 7개)으로 바꾸거나 ④ 를 4개로 바꿔 틀린 보기를 옮길 수 있음. 제약: 합성 입체의 그림·라벨은 고정(모서리 17개 · 지붕 끝면과 옆면이 한 평면이라는 구조가 개수를 정함)이고 개수는 실제로 다시 세어 확정."
    creative: "(1) 기준 직선을 마루 AB 나 CF 로 바꿔 꼬인 모서리 수 세기(★2 유지) (2) 같은 평면 위에서 연장하면 만나는 모서리(CG·GH)를 직접 묻는 보기로 함정 강화(★2 · Mₜ↑) (3) 삼각기둥 대신 사각뿔을 얹어 모서리·면 수를 바꾸면 열거 부담만 커짐(★2). 통찰 없이 세는 골조라 ★3 은 어렵다."
```

```yaml
- id: RPM-GEO-0277
  page: 44
  vendor_label: "유형 02 공간에서의 위치 관계"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    삼각기둥에서 한 모서리와 평행한 모서리 수, 한 모서리와 꼬인 위치인 모서리 수, 한 면과 평행한 면의 수에 관한 ㄱㄴㄷ 참·거짓(5지선다).
  category: "삼각기둥 9개 모서리의 위치 관계 → 개수 → 보기 판정"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "입체도형에서 직선·평면의 위치 관계 판정과 개수 세기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    삼각기둥 모서리 9개. DF 와 평행한 모서리는 AC 하나(ㄱ 참), DE 와 만나는 4개·평행한 AB 1개를 빼면 꼬인 위치 3개(ㄴ 참), 평면 ABC 와 평행한 면은 DEF 하나(ㄷ 참). 정의 대입 세 번·M_total 4·통찰 0 → 중하 출발점에서 ★1.
  tier: star_1
  mechanism_primary: "각 보기의 기준 직선·평면 확정 → 만남·평행 제외 → 남은 개수 → ㄱㄴㄷ 모두 참"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "⑤"
  answer_source: "답지(쪽 렌더)"
  figure: crop:fig-0277.png
  latex: latex-bank/rpm-geo/items/0277.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준 모서리를 옆모서리 AD(꼬인 모서리 2개 · 평행 2개)나 밑면 모서리로 바꾸면 개수가 달라짐. 제약: 삼각기둥이라 개수가 작으므로 보기 값을 실제 개수와 ±1 로 두어야 오답이 유도됨."
    creative: "(1) 사각기둥·오각기둥으로 확장(개수만 커짐 ★1) (2) 보기에 '평면 ABED 와 수직인 면' 같은 수직 판정을 섞으면 ★2 (3) 정팔면체처럼 마주보는 면이 있는 다면체로 바꾸면 평행한 면 세기가 어려워져 ★2."
```

```yaml
- id: RPM-GEO-0278
  page: 45
  vendor_label: "유형 02 공간에서의 위치 관계"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    정육면체 전개도(정사각형 띠 4개 + 위·아래 1개씩)를 조립했을 때 직선 AH 와 꼬인 위치에 있는 모서리의 개수(5지선다).
  category: "전개도 조립 → 겹치는 꼭짓점 확정 → AH = 공간대각선 → 꼬인 모서리 개수"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "전개도를 접어 겹치는 꼭짓점(A 위에 B·N·J, D 위에 C·I·G, L 위에 K·M, E 위에 H·F)을 찾고 AH 가 정육면체의 공간대각선임을 읽어냄"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "전개도로 만든 정육면체의 모서리 위치 관계"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    정사각형 ALED 를 밑면으로 띠를 접으면 A 위에 B·N·J, D 위에 C·I·G, L 위에 K·M, E 위에 H·F 가 겹친다. A 는 밑면 꼭짓점, H 는 밑면에서 A 와 마주보는 E 위의 꼭짓점이라 AH 는 공간대각선이고, 공간대각선과 만나는 모서리 6개(양 끝 3+3)를 뺀 6개가 꼬인 위치. 전개도 → 입체 조립 통찰 RT d1 하나에 M_total 5 → 중 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "전개도 접기 → 겹치는 꼭짓점 확정 → AH = 공간대각선 → 12 − 6(만남) = 6"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "⑤"
  answer_source: "답지(쪽 렌더)"
  figure: crop:fig-0278.png
  latex: latex-bank/rpm-geo/items/0278.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "전개도의 라벨 배치를 바꾸거나 묻는 직선을 모서리(꼬인 모서리 4개)·면대각선(6개)으로 바꿀 수 있음. 제약: 실제로 접히는 전개도 11가지 중 하나여야 하고, 겹치는 꼭짓점을 다시 확인해 개수를 확정."
    creative: "(1) 전개도에서 두 직선(예: AH 와 KF)이 평행·교차·꼬인 위치 중 무엇인지 묻기(RT d1 유지 ★2) (2) 전개도 위 두 점을 잇는 선분이 이루는 각으로 바꾸면 유형 04 와 결합 ★3 (3) 전개도 없이 정육면체 그림을 주면 통찰이 사라져 ★1."
```

```yaml
- id: RPM-GEO-0279
  page: 45
  vendor_label: "유형 02 공간에서의 위치 관계"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    밑면이 정육각형인 육각기둥에서 옆면의 대각선 AH 와 꼬인 위치인 모서리 수 a, AH 와 평행한 면의 수 b 에 대해 a+b 를 구하는 서술형.
  category: "18개 모서리 열거 → 만남 제외 → a · 평행한 면(마주보는 옆면) → b"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "입체도형에서 직선·평면의 위치 관계 판정과 개수 세기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    AH 와 만나는 모서리는 A 에서 3개(AB·AF·AG), H 에서 3개(GH·HI·BH)이고 평행한 모서리는 없으므로 a = 18 − 6 = 12. AH 를 품는 옆면 ABHG 와 마주보는 옆면 DEKJ 만 AH 와 평행(AH 의 수평 성분이 AB 방향이라 AB ∥ DE 인 면만 해당)하므로 b = 1, a+b = 13. 정의 대입이지만 모서리 18개·면 8개를 열거해 M_total 6 → 중 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "만나는 모서리 6개 제외 → a = 12 · AB ∥ DE 인 마주보는 옆면 → b = 1 → 13"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$13$"
  answer_source: "답지(쪽 렌더)"
  figure: crop:fig-0279.png
  latex: latex-bank/rpm-geo/items/0279.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준 직선을 옆모서리 AG(꼬인 모서리 8개 · 평행한 면 4개 → 12)나 밑면 대각선 AD 로 바꾸면 값이 바뀜. 제약: 정육각형이라 마주보는 옆면이 평행하다는 사실을 쓰므로 오각기둥으로 바꾸면 b 가 0 이 됨."
    creative: "(1) 정오각기둥으로 바꿔 평행한 면이 없음을 알아채게(★2) (2) 꼬인 위치 모서리 중 AH 와 수직인 것의 개수를 추가로 묻기(수직 판정 결합 ★3) (3) a·b 에 'AH 와 평행한 모서리 수 c' 를 넣어 0 임을 확인하게 하기(★2)."
```

```yaml
- id: RPM-GEO-0280
  page: 45
  vendor_label: "유형 02 공간에서의 위치 관계"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    정사면체 ABCD 에서 두 면 ACD·BCD 의 무게중심 P·Q 에 대해 직선 PQ 와 AB·BD 의 꼬인 위치 여부, PQ 와 평면 ABD 의 평행 여부를 묻는 ㄱㄴㄷ(5지선다).
  category: "무게중심 → CD 중점으로 모은 중선 비 2:1 → PQ ∥ AB → 위치 관계 판정"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 무게중심을 CD 의 중점 M 에 모아(AM·BM 을 2:1 로 내분) PQ ∥ AB 로 바꿈 — 무게중심 조건의 동치 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "무게중심·중점을 지나는 직선의 위치 관계"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    CD 의 중점 M 에 대해 P·Q 는 AM·BM 을 2:1 로 내분하므로 PQ ∥ AB(ㄱ 거짓). BD 는 평면 ABM 과 B 에서만 만나고 B 는 PQ 위에 없으며 PQ ∥ AB 라 BD 와 평행도 아니므로 꼬인 위치(ㄴ 참). PQ ∥ AB ⊂ 평면 ABD 이고 PQ 는 그 평면 밖이라 평행(ㄷ 참). 무게중심을 중선 비로 바꾸는 EQV d1 한 개·M_total 5 → 중 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "P·Q → CD 중점 M 위 중선 2:1 → PQ ∥ AB → ㄱ 거짓 · ㄴ 꼬인 위치 · ㄷ 평행"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "⑤"
  answer_source: "답지"
  figure: crop:fig-0280.png
  latex: latex-bank/rpm-geo/items/0280.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "무게중심 대신 '중선을 1:2 로 내분하는 점'·'변의 중점' 으로 바꿔도 골조 유지(비가 같으면 평행). 제약: P·Q 가 모서리 CD 를 공유하는 두 면의 대응점이어야 PQ ∥ AB. 정사면체가 아니어도 성립하므로 도형 조건은 자유."
    creative: "(1) PQ 의 길이(AB 의 1/3)를 묻기(닮음 결합 ★2) (2) P 를 면 ACD, Q 를 면 ABC 의 무게중심으로 두면 PQ ∥ DB 가 되어 보기가 뒤바뀜(★2) (3) 직선 PQ 와 평면 BCD 가 이루는 각·거리로 확장하면 유형 08 결합 ★3."
```

### 유형 03 직선과 평면의 평행·수직

```yaml
- id: RPM-GEO-0281
  page: 45
  vendor_label: "유형 03 직선과 평면의 평행·수직"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    서로 다른 두 직선 l, m 과 세 평면 α, β, γ 에 대한 평행·수직 명제 ㄱ~ㄹ(두 직선이 한 평면에 평행 · 직선이 한 평면에 평행이고 다른 평면에 수직 · 한 평면에 수직인 두 평면 · 한 직선에 수직인 두 평면) 중 옳은 것을 모두 고르는 주관식.
  category: "명제별 반례 탐색(직육면체 모델) → 반례 없는 정리 확정"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직선·평면의 평행·수직 명제의 참·거짓"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ㄱ 은 한 평면에 평행한 두 직선이 꼬인 위치일 수 있어 거짓, ㄷ 은 한 평면에 수직인 두 평면이 만날 수 있어(정육면체의 이웃한 옆면) 거짓. ㄴ 은 l ∥ α 이면 α 안에 l 과 평행한 직선이 있고 그 직선이 β 에 수직이므로 α ⊥ β, ㄹ 은 한 직선에 수직인 두 평면은 평행 — 둘 다 교과서 정리. 반례를 직육면체에서 찾는 표준 절차라 통찰 0 이지만 추상 표현(Mₐ 3)·4개 판정으로 M_total 7 → 대표문제 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "각 명제 → 직육면체 모서리·면으로 반례 시도 → 반례 없는 ㄴ·ㄹ 만 정리로 확인"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "ㄴ, ㄹ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0281.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "명제의 수(4 → 5)와 참 명제 수를 바꿈. 제약: 참 명제는 교과서 정리(평행 직선과 수직 평면 · 한 직선에 수직인 두 평면 평행 · 한 평면에 수직인 두 직선 평행)여야 하고 거짓 명제는 정육면체에서 반례가 그려져야 함."
    creative: "(1) 반례를 정육면체 모서리·면으로 직접 쓰게 하는 서술형(★2) (2) 'l ⊥ α, m ∥ α 이면 l ⊥ m' 처럼 참인데 직관과 어긋나는 명제를 섞어 변별(EQV d1 ★3) (3) 평면 없이 세 직선만으로 구성하면 ★1."
```

```yaml
- id: RPM-GEO-0282
  page: 45
  vendor_label: "유형 03 직선과 평면의 평행·수직"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    한 평면 또는 한 직선에 평행·수직인 서로 다른 두 직선·두 평면의 관계에 대한 5개 명제 중 항상 옳은 것 하나를 고르는 5지선다.
  category: "명제별 반례 탐색 → 항상 참인 것 하나"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직선·평면의 평행·수직 명제의 참·거짓"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ①·④ 는 꼬인 위치 반례, ② 는 한 평면에 수직인 두 직선은 평행이므로 거짓, ③ 은 한 직선에 평행한 두 평면이 만날 수 있어 거짓, ⑤ 한 직선에 수직인 두 평면은 평행 — 정리. 0281 과 같은 골조(반례 탐색)·통찰 0·M_total 7 → 중 출발 ★2. 답지 크롭과 쪽 렌더가 달라 전사본은 쪽 렌더 답(⑤)을 채택했고 풀이 결과와 일치.
  tier: star_2
  mechanism_primary: "명제 5개 → 직육면체 반례 → 반례 없는 ⑤(한 직선에 수직인 두 평면은 평행)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지(쪽 렌더 · 답 크롭 불일치)"
  figure: none
  latex: latex-bank/rpm-geo/items/0282.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "옳은 명제를 '한 평면에 수직인 두 직선은 평행' 으로 바꿔 답 위치를 옮김. 제약: 항상 옳은 것이 정확히 하나가 되도록 나머지 보기는 반례가 있는 명제로."
    creative: "(1) '항상 옳은 것의 개수' 로 바꾸면 5개를 모두 판정해야 해 부담↑(★2) (2) 'l ∥ α 일 때 α 안의 직선과 l 의 관계' 처럼 케이스가 갈리는 명제를 넣으면 MI d1 ★3."
```

```yaml
- id: RPM-GEO-0283
  page: 45
  vendor_label: "유형 03 직선과 평면의 평행·수직"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    서로 다른 세 평면 α, β, γ 에서 α·β 가 한 직선을 공유하고 β ⊥ γ 일 때, 세 평면이 공간을 나누는 영역의 최소 개수(5지선다).
  category: "γ 의 배치 경우 나누기 → 각 경우 분할 수(6·6·8) → 최소"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "γ 가 공유 직선을 포함 / α 와 평행 / 일반 위치인 경우로 나눠 각각의 분할 수를 비교 — 조건이 여러 배치를 허용함을 학생이 스스로 따짐"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "세 평면의 위치 관계와 공간 분할 개수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    α∩β 가 직선이므로 세 평면이 모두 평행(4개)은 불가. γ 가 그 직선을 포함하면 한 직선을 공유하는 세 평면 → 6개, γ ∥ α(이때 α ⊥ β)면 평행한 두 평면을 β 가 자르는 꼴 → 6개, γ 가 일반 위치면 8개. 최소 6. 배치 경우를 빠짐없이 나누는 MI d1 한 개·추상 평면(Mₐ 3)으로 M_total 7 → 상중 출발 ★3 유지.
  tier: star_3
  mechanism_primary: "α∩β = 직선 → γ 배치 3가지(공유 직선 포함 · α 와 평행 · 일반) → 6 · 6 · 8 → 최소 6"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "④"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0283.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "'최소' 를 '최대'(8)로 바꾸거나 조건을 α ∥ γ 로 바꿔 답 6 을 고정. 제약: 조건이 세 평면 모두 평행을 막는지 확인(막지 않으면 최소 4). 선택지는 3~8 범위."
    creative: "(1) 두 평면과 한 직선이 공간을 나누는 개수로 축소(★2) (2) 네 평면의 최대 분할 수(15)로 확장하면 PD d2 ★4 (3) '가능한 개수를 모두 구하시오' 로 바꾸면 MI 가 그대로 답이 됨(★3)."
```

### 유형 04 꼬인 위치에 있는 두 직선이 이루는 각

```yaml
- id: RPM-GEO-0284
  page: 46
  vendor_label: "유형 04 꼬인 위치에 있는 두 직선이 이루는 각"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    세 모서리가 3, √3, 2 인 직육면체에서 공간대각선 AG 와 모서리 BC 가 이루는 각 θ 의 cos θ(5지선다).
  category: "BC ∥ AD 로 평행이동 → 직각삼각형 AGD → cos = AD/AG"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "꼬인 위치의 두 직선이 이루는 각(평행이동 → 삼각형)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    BC ∥ AD 이므로 구하는 각은 ∠GAD. AD ⊥ 평면 DCGH 라 ∠ADG = 90°, AG = √(9+3+4) = 4, AD = FG = 2 이므로 cos θ = 2/4 = 1/2. 평행이동 한 번·계산 한 줄로 M_total 4·통찰 0 → 대표문제 출발점 ★2 에서 −1 한 ★1.
  tier: star_1
  mechanism_primary: "BC → AD 평행이동 → 직각삼각형 AGD(AD = 2 · AG = 4) → cos θ = 1/2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "①"
  answer_source: "답지(쪽 렌더)"
  figure: crop:fig-0284.png
  latex: latex-bank/rpm-geo/items/0284.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 모서리 길이(3, √3, 2)를 AG 가 정수가 되는 조합(1·2·2 → 3, 2·3·6 → 7)으로 바꾸고 기준 모서리(BC·AB·AE)를 바꾸면 cos 값이 '해당 모서리/AG' 로 나옴. 제약: 선택지가 유리수·간단한 무리수로 정리되도록 제곱합이 완전제곱수인 조합 선택."
    creative: "(1) AG 와 면대각선(BD·EG)이 이루는 각으로 바꾸면 세 변을 모두 구해 코사인법칙 ★2 (2) 'cos θ = 1/2 이 되도록 하는 모서리 길이 x' 를 묻는 역산(BW d1 ★2) (3) 정육면체로 바꾸면 값이 √3/3 으로 고정돼 ★1."
```

```yaml
- id: RPM-GEO-0285
  page: 46
  vendor_label: "유형 04 꼬인 위치에 있는 두 직선이 이루는 각"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    정팔면체에서 모서리 AD 와 모서리 BE 가 이루는 각 θ 의 sin θ(주관식).
  category: "BE ∥ CD 로 평행이동 → 정삼각형 ACD 의 한 각 60°"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "꼬인 위치의 두 직선이 이루는 각(평행이동 → 삼각형)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    가운데 정사각형 BCDE 에서 BE ∥ CD 이므로 구하는 각은 ∠ADC 이고 면 ACD 가 정삼각형이라 60°, sin θ = √3/2. 평행이동 한 번·계산 없음·M_total 4·통찰 0 → 중하 출발점에서 ★1.
  tier: star_1
  mechanism_primary: "BE ∥ CD → ∠ADC = 60°(정삼각형) → sin θ = √3/2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{\sqrt{3}}{2}$'
  answer_source: "답지(쪽 렌더)"
  figure: crop:fig-0285.png
  latex: latex-bank/rpm-geo/items/0285.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "묻는 값을 cos·tan 으로 바꾸거나 모서리 쌍을 AB 와 CD(60°)·AB 와 FD(마주보는 모서리라 평행 → 0°)로 바꿀 수 있음. 제약: 정팔면체 라벨(A 위·F 아래·BCDE 가운데) 고정, 두 모서리가 이루는 각은 0°·60°·90° 뿐."
    creative: "(1) AD 와 가운데 정사각형의 대각선 BD 가 이루는 각(만나는 두 직선 · cos = √2/2 ★1) (2) AB 와 평면 BCDE 가 이루는 각으로 바꾸면 유형 08(0304)로 이동 ★1~2 (3) 정이십면체 등으로 바꾸면 평행한 모서리 찾기가 어려워 ★3."
```

```yaml
- id: RPM-GEO-0286
  page: 46
  vendor_label: "유형 04 꼬인 위치에 있는 두 직선이 이루는 각"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    정육면체에서 면대각선 DE 와 면대각선 HF 가 이루는 각의 크기(5지선다).
  category: "HF ∥ DB 로 평행이동 → 정삼각형 DEB → 60°"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "꼬인 위치의 두 직선이 이루는 각(평행이동 → 삼각형)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    HF ∥ DB 이므로 구하는 각은 ∠EDB. DE·DB·EB 가 모두 면대각선이라 삼각형 DEB 는 정삼각형이고 각은 60°. 평행이동 한 번·M_total 4·통찰 0 → 중하 출발점에서 ★1.
  tier: star_1
  mechanism_primary: "HF → DB 평행이동 → △DEB 정삼각형 → 60°"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "③"
  answer_source: "답지(쪽 렌더)"
  figure: crop:fig-0286.png
  latex: latex-bank/rpm-geo/items/0286.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "면대각선 쌍을 바꾸면 각은 60°(이웃한 면의 대각선)·90°(마주보는 면에서 엇갈린 대각선 · AC 와 FH)·0°(평행) 중 하나. 제약: 정육면체라 값이 세 가지뿐이므로 선택지 구성에 주의, 직육면체로 바꾸면 코사인법칙 필요."
    creative: "(1) 직육면체(a, b, c)로 바꾸면 세 변을 구해 코사인법칙 → ★2 (2) 면대각선과 공간대각선(DE 와 AG → 0288 골조)으로 바꾸면 ★3 (3) 두 면대각선이 이루는 각이 90° 인 쌍의 개수를 묻기(SYM d1 ★3)."
```

```yaml
- id: RPM-GEO-0287
  page: 46
  vendor_label: "유형 04 꼬인 위치에 있는 두 직선이 이루는 각"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    정육면체에서 다섯 직선(EH · CG · EG · BH · DE) 각각이 모서리 AB 와 이루는 각 θ 를 비교해 cos θ 가 가장 큰 것을 고르는 5지선다.
  category: "보기별 평행이동 → 각(90°·90°·45°·arccos(√3/3)·90°) → 최대 cos"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "꼬인 위치의 두 직선이 이루는 각(평행이동 → 삼각형)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    EH ∥ AD ⊥ AB, CG ⊥ 평면 ABCD ⊃ AB, DE ∥ CF ⊥ AB(AB ⊥ 평면 BCGF)로 ①②⑤ 는 90°(cos 0). EG ∥ AC 라 ③ 은 45°(cos √2/2), BH 는 공간대각선이라 ④ 는 cos = AB/BH = √3/3. 가장 큰 것은 ③. 평행이동·판정을 다섯 번 해 M_total 6, 통찰 0 → 중 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "각 보기 → AB 와 만나는 직선으로 평행이동 → cos 0 · 0 · √2/2 · √3/3 · 0 → ③"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: crop:fig-0287.png
  latex: latex-bank/rpm-geo/items/0287.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "보기 직선을 다른 면대각선·공간대각선으로 교체(cos 값은 0·√2/2·√3/3 세 종류뿐). 제약: 정육면체에서 모서리와 이루는 각은 0°·45°·90°·arccos(√3/3) 만 나오므로 '가장 큰 것' 이 하나뿐이도록 45° 짜리는 한 개만."
    creative: "(1) 'cos θ = 0 인 것의 개수' 로 바꾸면 수직 판정 훈련(★2) (2) 직육면체로 바꾸면 보기마다 코사인법칙이 되어 Mₖ↑ ★3 (3) 기준을 면대각선 AC 로 두고 AC 와 90° 인 직선 고르기(0288 골조 · EQV d1 ★3)."
```

```yaml
- id: RPM-GEO-0288
  page: 46
  vendor_label: "유형 04 꼬인 위치에 있는 두 직선이 이루는 각"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    정육면체에서 공간대각선 AG 와 면대각선 CF 가 이루는 각 θ 의 cos θ(5지선다).
  category: "CF ⊥ BG · CF ⊥ AB → CF ⊥ 평면 ABG → CF ⊥ AG → cos θ = 0"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "CF 를 평행이동해도(CF ∥ DE) AG 와 한 삼각형에 들어오지 않으므로 '두 직선의 수직' 을 'CF ⊥ (AG 를 품는 평면 ABG)' 로 바꿔 직선과 평면의 수직으로 증명"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 직선의 수직 증명(직선과 평면의 수직 이용)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    유형 04 의 표준 절차(평행이동 → 삼각형)가 막히는 문항. CF ⊥ BG(정사각형 대각선)·CF ⊥ AB(AB ⊥ 평면 BCGF)에서 CF ⊥ 평면 ABG, 따라서 CF ⊥ AG 로 θ = 90°, cos θ = 0. 평행이동을 직선-평면 수직으로 바꾸는 EQV d1 한 개·M_total 5 → 상중 출발 ★3 유지. 답지 크롭과 쪽 렌더가 달라 전사본은 쪽 렌더 답(①)을 채택했고 풀이 결과 0 과 일치.
    [분류 이슈] 선택지 ① 이 0 이라 '수직이겠지' 추측으로 맞힐 수 있어 체감은 ★2. 증명 골조는 ★3 이므로 라벨 유지·기록.
  tier: star_3
  mechanism_primary: "CF ⊥ BG · CF ⊥ AB → CF ⊥ 평면 ABG → CF ⊥ AG → cos θ = 0"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "①"
  answer_source: "답지(쪽 렌더 · 답 크롭 불일치)"
  figure: crop:fig-0288.png
  latex: latex-bank/rpm-geo/items/0288.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정육면체라 수치가 없음. 직육면체(a, b, c)로 바꾸면 AG ⊥ CF 는 b = c 일 때만 성립하므로 '수직이 되도록 하는 조건' 을 묻는 역산으로 바꿀 수 있음. 제약: 선택지에 0 을 두면 추측이 쉬우니 cos 대신 'θ 의 크기' 서술형 권장."
    creative: "(1) AG 와 수직인 면대각선의 개수(6개)를 묻기(SYM d1 ★3) (2) AG ⊥ 평면 BDE 임을 보이게 하는 서술형(같은 골조 두 번 ★3) (3) 직육면체 a·b·c 로 두고 cos θ 를 a, b, c 로 나타내면 평행이동 + 코사인법칙(Mₖ↑) ★3."
```

```yaml
- id: RPM-GEO-0289
  page: 46
  vendor_label: "유형 04 꼬인 위치에 있는 두 직선이 이루는 각"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    정사면체에서 마주보는 두 모서리 AB·CD 의 중점 M·N 을 잇는 직선 MN 과 모서리 AC 가 이루는 각의 크기(주관식).
  category: "BC 의 중점 L 보조 → ML ∥ AC → 삼각형 MLN 세 변 → 직각이등변 → 45°"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "꼬인 두 직선 MN·AC 를 BC 의 중점 L 을 잡아 ML ∥ AC 인 삼각형 MLN 으로 옮기고, MN = a/√2 를 이등변삼각형 MCD(MN ⊥ CD)에서 따로 구해 피타고라스 역으로 ∠MLN = 90° 를 읽음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "꼬인 위치의 두 직선이 이루는 각(평행이동 → 삼각형)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    한 모서리 a. BC 의 중점 L 을 잡으면 ML ∥ AC, ML = NL = a/2 이고, MC = MD = (√3/2)a 인 이등변삼각형 MCD 에서 MN ⊥ CD 라 MN = √(3a²/4 − a²/4) = a/√2. ML² + NL² = a²/2 = MN² 이므로 ∠MLN = 90°, 직각이등변삼각형이라 ∠LMN = 45°. 보조 중점을 고르고 MN 을 따로 구하는 RT d2 한 개·M_total 6 → 상중 출발 ★3 유지. 답지 크롭과 쪽 렌더가 달라 전사본은 쪽 렌더 답(45°)을 채택했고 풀이 결과와 일치.
  tier: star_3
  mechanism_primary: "BC 중점 L → ML ∥ AC · ML = NL = a/2 → MN = a/√2 → ∠MLN = 90° → 45°"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$45^\circ$'
  answer_source: "답지(쪽 렌더 · 답 크롭 불일치)"
  figure: crop:fig-0289.png
  latex: latex-bank/rpm-geo/items/0289.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정사면체라 수치 자유(한 모서리 길이를 주고 MN 의 길이를 함께 묻기). 제약: 정사면체가 아닌 사면체로 바꾸면 ML·NL 이 달라져 45° 가 깨지므로 각 대신 cos 값을 코사인법칙으로 묻게 됨."
    creative: "(1) MN 과 BD 가 이루는 각(같은 골조 ★3) (2) MN 이 AB·CD 모두에 수직임을 보이는 서술형(SYM d1 ★3) (3) 정육면체에 내접한 정사면체로 옮기면 MN 이 정육면체 모서리와 평행해져 각이 즉시 45° — 골조가 바뀌어 ★2."
```

### 유형 05 삼수선 정리

```yaml
- id: RPM-GEO-0290
  page: 47
  vendor_label: "유형 05 삼수선 정리"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    평면 α 밖의 점 P 의 수선의 발 H, H 에서 평면 위 직선 AB 에 내린 수선의 발 Q 에 대해 AQ = 3√2, HQ = √6, PH = 2√3 일 때 선분 AP 의 길이(주관식).
  category: "삼수선 정리 → PQ ⊥ AB → 직각삼각형 두 번(PQ → AP)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼수선 정리로 길이·넓이 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    PH ⊥ α, HQ ⊥ AB 이므로 삼수선 정리에서 PQ ⊥ AB. PQ² = PH² + HQ² = 12 + 6 = 18, AP² = AQ² + PQ² = 18 + 18 = 36 → AP = 6(AH = √24 를 거쳐도 같음). 정리 적용 한 번·피타고라스 두 번, M_total 4·통찰 0 → 대표문제 출발점 ★2 에서 −1 한 ★1. 답지 크롭과 쪽 렌더가 달라 전사본은 쪽 렌더 답(6)을 채택했고 풀이 결과와 일치.
  tier: star_1
  mechanism_primary: "PH ⊥ α · HQ ⊥ AB → PQ ⊥ AB → PQ = 3√2 → AP = √(18+18) = 6"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$6$"
  answer_source: "답지(쪽 렌더 · 답 크롭 불일치)"
  figure: crop:fig-0290.png
  latex: latex-bank/rpm-geo/items/0290.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 길이(AQ·HQ·PH)를 AP 가 정수가 되는 조합(2·3·6 → 7, 1·2·2 → 3)으로 바꿈. 제약: AP² = AQ² + HQ² + PH² 이므로 세 제곱의 합이 완전제곱수여야 함. 그림 라벨(P·H·Q·A·B) 고정."
    creative: "(1) AP·AQ·PH 를 주고 HQ 를 역산(같은 골조 ★1) (2) AB 의 길이를 주고 삼각형 PAB 의 넓이(PQ 가 높이)로 바꾸면 ★2 (3) 직선 AB 위를 움직이는 점 X 에 대해 PX 의 최솟값을 묻기(PQ 가 최소 · EQV d1 ★2)."
```

```yaml
- id: RPM-GEO-0291
  page: 47
  vendor_label: "유형 05 삼수선 정리"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    AB ⊥ α, 평면 α 위에서 CD ⊥ BC, AB = 4, BC = 3, BD = 5 일 때 삼각형 ACD 의 넓이를 구하는 서술형.
  category: "삼수선 정리 → AC ⊥ CD → CD = 4 · AC = 5 → 넓이 10"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼수선 정리로 길이·넓이 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    AB ⊥ α, BC ⊥ CD 이므로 삼수선 정리에서 AC ⊥ CD — 이 직각이 있어야 넓이가 밑변×높이로 계산된다. CD = √(25 − 9) = 4, AC = √(16 + 9) = 5, 넓이 = ½·5·4 = 10. 정리 적용·피타고라스 두 번·넓이의 4단계라 M_total 5, 통찰 0 → 중 출발 ★2 유지. 답지 크롭과 쪽 렌더가 달라 전사본은 쪽 렌더 답(10)을 채택했고 풀이 결과와 일치.
  tier: star_2
  mechanism_primary: "AB ⊥ α · BC ⊥ CD → AC ⊥ CD → CD = 4 · AC = 5 → ½·5·4 = 10"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$10$"
  answer_source: "답지(쪽 렌더 · 답 크롭 불일치)"
  figure: crop:fig-0291.png
  latex: latex-bank/rpm-geo/items/0291.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AB·BC·BD 를 (BC, CD, BD)·(AB, BC, AC) 가 모두 피타고라스 삼조가 되게(예: AB = 12, BC = 5, BD = 13 → CD = 12, AC = 13 → 78) 바꿈. 제약: 두 직각삼각형이 정수로 떨어져야 서술형 채점이 깔끔하고, 그림의 직각 표시(BC ⊥ CD)는 유지."
    creative: "(1) 넓이 대신 점 B 와 직선 CD 사이의 거리·점 A 와 직선 CD 사이의 거리를 나란히 묻기(★2) (2) 넓이를 주고 AB 를 역산(BW d1 ★2) (3) CD ⊥ BC 조건을 빼고 BD·CD 만 주면 삼수선이 안 걸려 좌표 설정이 필요 → ★3."
```

```yaml
- id: RPM-GEO-0292
  page: 47
  vendor_label: "유형 05 삼수선 정리"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    평면 α 위 한 변 4 인 정삼각형 ABC 와 평면 밖의 점 P 에 대해 P 의 수선의 발이 A 이고 AP = 6 일 때, 점 P 와 직선 BC 사이의 거리(주관식 · 그림 없음).
  category: "BC 중점 M · AM ⊥ BC → 삼수선 → PM ⊥ BC → 거리 = PM"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼수선 정리로 길이·넓이 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    BC 의 중점 M 에 대해 AM ⊥ BC 이고 PA ⊥ α 이므로 삼수선 정리에서 PM ⊥ BC, 즉 P 와 BC 사이의 거리는 PM. AM = 2√3, PM = √(36 + 12) = 4√3. 그림을 스스로 그려야 하지만 정삼각형 높이 + 피타고라스 한 번이라 M_total 4·통찰 0 → 중 출발 ★2 에서 −1 한 ★1(1단 차이). 답지 크롭과 쪽 렌더가 달라 전사본은 쪽 렌더 답(4√3)을 채택했고 풀이 결과와 일치.
  tier: star_1
  mechanism_primary: "BC 중점 M · AM ⊥ BC · PA ⊥ α → PM ⊥ BC → PM = √(6² + (2√3)²) = 4√3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$4\sqrt{3}$'
  answer_source: "답지(쪽 렌더 · 답 크롭 불일치)"
  figure: none
  latex: latex-bank/rpm-geo/items/0292.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "변의 길이(4)·AP(6)를 바꾸면 PM = √(AP² + 3·변²/4). 제약: 근호가 정리되도록 변 = 2k, AP 를 골라 AP² + 3k² 이 완전제곱수 또는 간단한 무리수(예: 변 2, AP 1 → 2)."
    creative: "(1) 수선의 발을 정삼각형의 무게중심 G 로 옮기면 GM = 변/(2√3) 이 되어 정사면체 골조와 결합(★2) (2) 거리 대신 삼각형 PBC 의 넓이(★1~2) (3) 정삼각형 대신 직각삼각형·이등변삼각형으로 바꿔 수선의 발 위치를 따로 잡게 하면 ★2."
```

### 유형 06 삼수선 정리의 활용

```yaml
- id: RPM-GEO-0293
  page: 47
  vendor_label: "유형 06 삼수선 정리의 활용"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    AD = AE = 2, DC = 4 인 직육면체에서 꼭짓점 D 에서 밑면 대각선 EG 에 내린 수선의 발 I 에 대해 선분 DI 의 길이(주관식).
  category: "D 의 수선의 발 H → 삼수선 → HI ⊥ EG → HI(닮음·넓이) → DI 피타고라스"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼수선 정리로 길이·넓이 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    DH ⊥ 평면 EFGH, DI ⊥ EG 이므로 삼수선 정리에서 HI ⊥ EG. 직각삼각형 EHG(EH = 2, HG = 4)에서 EG = 2√5, HI = EH·HG/EG = 4/√5. DI = √(DH² + HI²) = √(4 + 16/5) = 6/√5 = 6√5/5. 정리 적용 한 번에 닮음·피타고라스 계산이 분수 무리수라 Mₖ 2, M_total 5·통찰 0 → 대표문제 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "DH ⊥ 밑면 · DI ⊥ EG → HI ⊥ EG → HI = 2·4/(2√5) → DI = √(4 + 16/5) = 6√5/5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{6\sqrt{5}}{5}$'
  answer_source: "답지(쪽 렌더)"
  figure: crop:fig-0293.png
  latex: latex-bank/rpm-geo/items/0293.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 모서리(2, 2, 4)를 바꾸면 HI = EH·HG/EG, DI = √(DH² + HI²). 제약: EH·HG 가 3·4·5 꼴(EG = 5 → HI = 12/5)이면 값이 유리수로 떨어져 채점이 쉬움. 수선의 발 I 는 그림 라벨 고정."
    creative: "(1) 점 D 와 직선 EG 사이의 거리로 발문만 바꾸기(같은 골조 ★2) (2) 꼭짓점 D 대신 모서리 AD 의 중점에서 내리면 수선의 발이 HG 의 중점 쪽으로 옮겨져 좌표 필요 ★3 (3) 직선 DI 와 밑면이 이루는 각(0306 골조)으로 확장 ★3."
```

```yaml
- id: RPM-GEO-0294
  page: 47
  vendor_label: "유형 06 삼수선 정리의 활용"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    OA·OB·OC 가 서로 수직이고 OA = 4, OB = 3, OC = 1 인 사면체에서 C 에서 AB 에 내린 수선의 발 H 에 대해 선분 CH 의 길이(5지선다).
  category: "OC ⊥ 평면 OAB → 삼수선 → OH ⊥ AB → OH = 12/5 → CH 피타고라스"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼수선 정리로 길이·넓이 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    OC ⊥ OA, OC ⊥ OB 라 OC ⊥ 평면 OAB, CH ⊥ AB 이므로 삼수선 정리에서 OH ⊥ AB. 직각삼각형 OAB(3·4·5)에서 OH = 12/5, CH = √(1 + 144/25) = 13/5. 0293 과 같은 골조(수직 두 개 → 밑면 안 수선 길이 → 피타고라스)로 M_total 5·통찰 0 → 중 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "OC ⊥ 평면 OAB · CH ⊥ AB → OH ⊥ AB → OH = 12/5 → CH = √(1 + 144/25) = 13/5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: crop:fig-0294.png
  latex: latex-bank/rpm-geo/items/0294.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "OA·OB 를 피타고라스 삼조(6·8 → OH = 24/5, 5·12 → OH = 60/13)로 바꾸고, OC 는 (OC, OH, CH) 가 다시 삼조가 되게(OC = 1, OH = 12/5 → 13/5 · OC = 2, OH = 24/5 → 26/5) 맞춤. 제약: OH = OA·OB/AB 가 분수라 선택지 간격을 1/5 단위로."
    creative: "(1) 삼각형 ABC 의 넓이(½·AB·CH)를 묻기(★2) (2) CH 를 주고 OC 를 역산(BW d1 ★2) (3) 세 모서리가 수직인 사면체의 O 에서 면 ABC 까지의 거리(부피 이용 · SC d1)로 바꾸면 ★3."
```

```yaml
- id: RPM-GEO-0295
  page: 47
  vendor_label: "유형 06 삼수선 정리의 활용"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    정육면체에서 윗면 대각선 AC 의 중점 M 에 대해 선분 MB 와 면대각선 BE 가 이루는 각 θ 의 cos θ(주관식).
  category: "E 의 수선의 발 A · AM ⊥ MB → 삼수선 → EM ⊥ MB → 직각삼각형 EMB"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼수선 정리로 두 직선이 이루는 각 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    한 모서리 2. EA ⊥ 윗면이고 정사각형의 두 대각선이 수직이라 AM ⊥ MB, 삼수선 정리에서 EM ⊥ MB. 직각삼각형 EMB 에서 MB = √2, BE = 2√2 이므로 cos θ = MB/BE = 1/2. 삼수선 없이도 EM = √6 을 구해 코사인법칙으로 같은 값이 나오므로 전략 분기라 할 만큼의 차이는 없음. 수선의 발·수직 확인·삼각비의 4단계로 M_total 5·통찰 0 → 중 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "EA ⊥ 윗면 · AM ⊥ MB → EM ⊥ MB → cos θ = MB/BE = √2/(2√2) = 1/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{2}$'
  answer_source: "답지"
  figure: crop:fig-0295.png
  latex: latex-bank/rpm-geo/items/0295.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정육면체라 값이 고정(1/2). 직육면체(가로 a, 세로 b, 높이 c)로 바꾸면 AM ⊥ MB 가 깨져 삼수선이 안 걸리고 코사인법칙만 남음 — 값은 a, b, c 로 표현. 제약: 정육면체 유지 시 M 을 다른 면대각선 중점으로 옮겨도 대칭이라 같은 값."
    creative: "(1) 선분 EM 과 밑면이 이루는 각(유형 08 골조 ★2) (2) MB 대신 M 과 F 를 이어 각 MFE 를 물으면 수선의 발이 A 가 아니라 다시 잡아야 함 ★2 (3) 정육면체 대신 정사각뿔(밑면 중심 M)로 옮기면 삼수선 대신 직접 직각이 보여 ★1."
```

### 유형 07 두 평면이 이루는 각

```yaml
- id: RPM-GEO-0296
  page: 48
  vendor_label: "유형 07 두 평면이 이루는 각"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    정육면체에서 밑면 EFGH 와 평면 DEG 가 이루는 각 θ 의 cos θ(주관식).
  category: "교선 EG 의 중점 M · DM ⊥ EG · HM ⊥ EG → 직각삼각형 DHM → cos = HM/DM"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 평면이 이루는 각(교선 위 한 점에서 수직인 두 직선)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    한 모서리 a. 교선 EG 의 중점 M 에 대해 DE = DG 라 DM ⊥ EG, 정사각형이라 HM ⊥ EG 이므로 θ = ∠DMH. DH ⊥ 밑면이라 직각삼각형 DHM 에서 HM = (√2/2)a, DM = √(a² + a²/2) = (√6/2)a, cos θ = HM/DM = √3/3. 교선·수직선·직각삼각형·삼각비의 4단계로 M_total 5·통찰 0 → 대표문제 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "EG 중점 M → DM ⊥ EG · HM ⊥ EG → △DHM(HM = a√2/2 · DM = a√6/2) → cos θ = √3/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{\sqrt{3}}{3}$'
  answer_source: "답지(쪽 렌더)"
  figure: crop:fig-0296.png
  latex: latex-bank/rpm-geo/items/0296.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정육면체라 값 고정. 직육면체(EH = a, HG = b, DH = c)로 바꾸면 M 이 EG 의 중점이 아니라 H 에서 EG 에 내린 수선의 발이 되어 HM = ab/√(a²+b²) 를 따로 구함. 제약: 정육면체가 아니면 이등변삼각형의 중선 논리가 깨지므로 삼수선(DH ⊥ 밑면 · DM ⊥ EG ⇒ HM ⊥ EG)으로 설명을 바꿈."
    creative: "(1) 평면 DEG 와 평면 BEG 가 이루는 각(이등변삼각형 두 개 결합 · 0301 골조) ★3 (2) 평면 BDE 와 밑면의 각(꼭짓점이 교선 위에 없어 수선의 발을 새로 잡음) ★3 (3) tan θ = √2 로 바꾸면 계산만 바뀜 ★2."
```

```yaml
- id: RPM-GEO-0297
  page: 48
  vendor_label: "유형 07 두 평면이 이루는 각"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    AD = 4, AE = 5, DC = 5√3 인 직육면체에서 대각선 단면 AFGD 와 밑면 EFGH 가 이루는 각의 크기(주관식).
  category: "교선 FG · AF ⊥ FG · EF ⊥ FG → ∠AFE → tan = AE/EF → 30°"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 평면이 이루는 각(교선 위 한 점에서 수직인 두 직선)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    두 평면의 교선은 FG. FG ⊥ 평면 ABFE 이므로 AF ⊥ FG, EF ⊥ FG 이고 θ = ∠AFE. tan θ = AE/EF = 5/(5√3) = 1/√3 → 30°(EF = DC). 교선·수직선 찾기 한 번에 삼각비 한 줄로 M_total 4·통찰 0 → 중하 출발점에서 ★1. AD = 4 는 쓰이지 않는 조건.
  tier: star_1
  mechanism_primary: "교선 FG ⊥ 면 ABFE → θ = ∠AFE → tan θ = 5/(5√3) → 30°"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$30^\circ$'
  answer_source: "답지(쪽 렌더)"
  figure: crop:fig-0297.png
  latex: latex-bank/rpm-geo/items/0297.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AE·DC 를 tan 이 특수각(1 · √3 · 1/√3)이 되게 바꿈(AE = 3, DC = 3 → 45° · AE = 4√3, DC = 4 → 60°). 제약: 쓰이지 않는 AD 는 남겨도 되나 함정으로 오해될 수 있음. 특수각이 아니면 cos θ 로 묻기."
    creative: "(1) 평면 AFGD 와 옆면 BFGC 가 이루는 각(교선 FG 그대로 · ∠AFB) ★1 (2) 단면을 평면 AFC 처럼 교선이 모서리가 아닌 것으로 바꾸면 수선의 발을 새로 잡아야 해 ★2~3 (3) 각 30° 를 주고 AE 를 역산 ★1."
```

```yaml
- id: RPM-GEO-0298
  page: 48
  vendor_label: "유형 07 두 평면이 이루는 각"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    정사면체의 두 면이 이루는 각 θ 의 cos θ(5지선다 · 그림 없음).
  category: "공유 모서리 BC 의 중점 M → AM ⊥ BC · DM ⊥ BC → △AMD 코사인법칙(또는 수선의 발 = 무게중심) → 1/3"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 평면이 이루는 각(교선 위 한 점에서 수직인 두 직선)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    한 모서리 a. 두 면 ABC·BCD 의 교선 BC 의 중점 M 에 대해 AM ⊥ BC, DM ⊥ BC 이고 AM = DM = (√3/2)a, AD = a 이므로 코사인법칙에서 cos θ = (3/4 + 3/4 − 1)/(2·3/4) = 1/3. A 의 수선의 발이 △BCD 의 무게중심 G 임을 쓰면 cos θ = GM/AM = (a/(2√3))/((√3/2)a) = 1/3 으로 더 짧다. 암기값에 가까운 정리·3단계라 M_total 4·통찰 0 → 중 출발 ★2 에서 −1 한 ★1.
  tier: star_1
  mechanism_primary: "BC 중점 M → AM = DM = (√3/2)a · AD = a → 코사인법칙 → cos θ = 1/3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "②"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0298.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정사면체라 값 고정(1/3). 정팔면체의 이웃한 두 면(예각으로 cos = 1/3)·옆면이 정삼각형인 정사각뿔(0300 · √3/3)로 바꾸면 같은 골조에 값만 달라짐. 제약: 선택지에 √3/3(직선-평면 각의 cos)·1/2 같은 혼동값을 두어 변별."
    creative: "(1) 정사면체의 모서리와 면이 이루는 각(0303 · cos √3/3)과 짝지어 두 값을 비교하게 하기 ★2 (2) 두 면의 각을 α 로 두고 sin α·tan α 를 묻기 ★1 (3) 한 모서리 길이와 부피를 주고 이면각을 역산하면 ★3."
```

```yaml
- id: RPM-GEO-0299
  page: 48
  vendor_label: "유형 07 두 평면이 이루는 각"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    평면 α 밖의 점 A 의 수선의 발 O, 평면 위 직선 l 에 내린 수선의 발 H 에 대해 AO = 3√3, AH = 6 일 때 A 와 l 이 결정하는 평면이 α 와 이루는 각의 크기(서술형).
  category: "삼수선 → OH ⊥ l → 이면각 = ∠AHO → sin = AO/AH → 60°"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 평면이 이루는 각(교선 위 한 점에서 수직인 두 직선)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    AO ⊥ α, AH ⊥ l 이므로 삼수선 정리에서 OH ⊥ l. 교선 l 위의 점 H 에서 AH ⊥ l, OH ⊥ l 이라 이면각은 ∠AHO 이고 sin ∠AHO = AO/AH = 3√3/6 = √3/2 → 60°. 삼수선 한 번·삼각비 한 줄로 M_total 4·통찰 0 → 중 출발 ★2 에서 −1 한 ★1(서술형이지만 단계가 짧음).
  tier: star_1
  mechanism_primary: "AO ⊥ α · AH ⊥ l → OH ⊥ l → θ = ∠AHO → sin θ = 3√3/6 → 60°"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$60^\circ$'
  answer_source: "답지"
  figure: crop:fig-0299.png
  latex: latex-bank/rpm-geo/items/0299.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AO·AH 를 sin 이 특수각(1/2 · √2/2 · √3/2)이 되게 바꿈(AO = 3, AH = 6 → 30° · AO = 2√2, AH = 4 → 45°). 제약: AO < AH. 특수각이 아니면 cos θ 나 OH 의 길이로 묻기."
    creative: "(1) AO·OH 를 주고 tan 으로 묻기 ★1 (2) 이면각을 주고 점 A 와 직선 l 사이의 거리 AH 를 역산(BW d1 ★2) (3) l 을 평면 위 삼각형의 한 변으로 두고 두 변에 대해 각각 묻기 → 0292·0299 결합 ★2."
```

```yaml
- id: RPM-GEO-0300
  page: 48
  vendor_label: "유형 07 두 평면이 이루는 각"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    밑면이 정사각형이고 옆면이 모두 정삼각형인 사각뿔에서 옆면 ABC 와 밑면 BCDE 가 이루는 각 θ 의 cos θ(5지선다).
  category: "BC 중점 M · AM ⊥ BC · OM ⊥ BC(O 는 밑면 중심) → 직각삼각형 AMO → cos = OM/AM"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 평면이 이루는 각(교선 위 한 점에서 수직인 두 직선)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    한 모서리 a, 밑면의 중심 O(A 의 수선의 발). BC 의 중점 M 에 대해 AM ⊥ BC(정삼각형), OM ⊥ BC(정사각형)이므로 θ = ∠AMO. OM = a/2, AM = (√3/2)a → cos θ = 1/√3 = √3/3. 수선의 발이 밑면 중심임이 자명해 3단계·M_total 4·통찰 0 → 중 출발 ★2 에서 −1 한 ★1.
  tier: star_1
  mechanism_primary: "BC 중점 M → ∠AMO(AO ⊥ 밑면) → OM = a/2 · AM = √3a/2 → cos θ = √3/3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "③"
  answer_source: "답지"
  figure: crop:fig-0300.png
  latex: latex-bank/rpm-geo/items/0300.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "옆면을 정삼각형 대신 옆모서리 길이 b 로 일반화하면 AM = √(b² − a²/4), cos θ = (a/2)/AM. 제약: 옆면이 정삼각형이면 정팔면체의 절반이라 값이 √3/3 으로 고정, b > a/2."
    creative: "(1) 이웃한 두 옆면 ABC·ACD 가 이루는 각(교선이 옆모서리 → 수선의 발을 새로 잡음 · 정팔면체 이웃 면과 같아 cos = 1/3) ★3 (2) 옆면과 밑면의 각을 60° 로 주고 높이를 역산 ★2 (3) 정육각뿔로 바꾸면 OM = (√3/2)a 로 계산만 바뀜 ★1."
```

```yaml
- id: RPM-GEO-0301
  page: 48
  vendor_label: "유형 07 두 평면이 이루는 각"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    AB = AC = 6, BD = CD = 5, BC = 8, AD = 3 인 사면체에서 면 ABC 와 면 BCD 가 이루는 각 θ 의 cos θ(5지선다).
  category: "BC 중점 M · AM ⊥ BC · DM ⊥ BC(이등변) → △AMD 세 변 → 코사인법칙"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 평면이 이루는 각(교선 위 한 점에서 수직인 두 직선)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 이등변삼각형이 BC 를 공유하므로 BC 의 중점 M 에 대해 AM ⊥ BC, DM ⊥ BC, θ = ∠AMD. AM = √(36 − 16) = 2√5, DM = √(25 − 16) = 3, AD = 3 → cos θ = (20 + 9 − 9)/(2·2√5·3) = √5/3. 골조는 0298 과 같고 피타고라스 두 번 + 코사인법칙이라 Mₖ 2, M_total 6·통찰 0 → 상중 출발 ★3 유지.
    [분류 이슈] 통찰 없는 계산형이라 체감은 ★2~3 — 벤더 상중을 따라 ★3 으로 두고 기록.
  tier: star_3
  mechanism_primary: "BC 중점 M → AM = 2√5 · DM = 3 · AD = 3 → 코사인법칙 → cos θ = √5/3"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지(쪽 렌더)"
  figure: crop:fig-0301.png
  latex: latex-bank/rpm-geo/items/0301.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AB = AC, BD = CD, BC, AD 를 AM·DM 이 정수·간단한 무리수가 되게(예: AB = AC = BD = CD = 5, BC = 6, AD = 4 → AM = DM = 4 → cos = 7/8) 바꿈. 제약: 삼각형 부등식(AM + DM > AD)을 만족하고 선택지가 √5/3 같은 꼴로 정리될 것."
    creative: "(1) DM = AD 인 이등변삼각형 AMD 를 살려 점 D 에서 면 ABC 까지의 거리를 묻기(정사영 결합 ★3) (2) 이면각을 주고 AD 를 역산(BW d1 ★3) (3) AB ≠ AC 로 바꾸면 수선의 발이 M 이 아니라 삼수선·좌표가 필요해 ★4."
```

### 유형 08 직선과 평면이 이루는 각

```yaml
- id: RPM-GEO-0302
  page: 49
  vendor_label: "유형 08 직선과 평면이 이루는 각"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    정육면체에서 면대각선 AF 와 대각선 단면 DHFB 가 이루는 각 θ 의 sin θ(5지선다).
  category: "AC ⊥ BD · AC ⊥ BF → AC ⊥ 평면 DHFB → 수선의 발 O = AC∩BD → 직각삼각형 AOF → sin = AO/AF"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직선과 평면이 이루는 각(수선의 발 → 직각삼각형)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    한 모서리 a. AC ⊥ BD(정사각형 대각선)·AC ⊥ BF(BF ⊥ 윗면)이므로 AC ⊥ 평면 DHFB, A 의 수선의 발은 O = AC∩BD. θ = ∠AFO 이고 AO = (√2/2)a, AF = √2a → sin θ = 1/2(θ = 30°). 수선의 발 확정(직선-평면 수직)·직각삼각형·삼각비의 4단계로 M_total 5·통찰 0 → 대표문제 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "AC ⊥ 평면 DHFB → 수선의 발 O → sin θ = AO/AF = (a√2/2)/(a√2) = 1/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: crop:fig-0302.png
  latex: latex-bank/rpm-geo/items/0302.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정육면체라 값 고정(30°). 밑면이 정사각형(한 변 a)이고 높이 c 인 직육면체로 두면 AO = a√2/2, AF = √(a² + c²) 로 값만 바뀜. 제약: 밑면이 정사각형이어야 AC ⊥ BD 가 유지되어 수선의 발이 O."
    creative: "(1) 공간대각선 AG 와 평면 DHFB 가 이루는 각(같은 수선의 발 O · sin = AO/AG = √3/3) ★2 (2) 직선 AF 와 정삼각형 단면 BDE 가 이루는 각으로 바꾸면 수선의 발이 무게중심 → 0307 골조 ★3 (3) sin θ 대신 θ 를 묻기(30°) ★2."
```

```yaml
- id: RPM-GEO-0303
  page: 49
  vendor_label: "유형 08 직선과 평면이 이루는 각"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    정사면체에서 모서리 AB 와 면 BCD 가 이루는 각 θ 의 cos θ(주관식).
  category: "A 의 수선의 발 = △BCD 의 무게중심 O → 직각삼각형 ABO → cos = BO/AB"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직선과 평면이 이루는 각(수선의 발 → 직각삼각형)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    한 모서리 a. 정사면체의 꼭짓점 A 에서 밑면에 내린 수선의 발은 밑면의 무게중심 O 이므로 θ = ∠ABO. BO = (2/3)·(√3/2)a = a/√3 → cos θ = BO/AB = √3/3. 수선의 발이 정해진 사실이라 3단계·M_total 4·통찰 0 → 중 출발 ★2 에서 −1 한 ★1.
  tier: star_1
  mechanism_primary: "수선의 발 = 무게중심 O → BO = a/√3 → cos θ = BO/AB = √3/3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{\sqrt{3}}{3}$'
  answer_source: "답지"
  figure: crop:fig-0303.png
  latex: latex-bank/rpm-geo/items/0303.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정사면체라 값 고정. 밑면이 한 변 a 인 정삼각형이고 옆모서리가 b 인 정삼각뿔로 바꾸면 cos θ = (a/√3)/b. 제약: b > a/√3."
    creative: "(1) sin θ = √6/3, tan θ = √2 로 묻기 ★1 (2) 모서리 AB 와 그 모서리를 품지 않은 면 ACD 가 아니라 품은 면 옆의 면과의 각으로 바꿔 수선의 발을 다른 면의 무게중심에 잡게 하기(값 동일 · 방향 감각) ★2 (3) 정사면체의 높이·부피와 묶은 종합 문항 ★2."
```

```yaml
- id: RPM-GEO-0304
  page: 49
  vendor_label: "유형 08 직선과 평면이 이루는 각"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    정팔면체에서 모서리 AB 와 가운데 정사각형 면 BCDE 가 이루는 각의 크기(주관식).
  category: "A 의 수선의 발 = 정사각형 BCDE 의 중심 O → 직각삼각형 ABO → cos = BO/AB → 45°"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직선과 평면이 이루는 각(수선의 발 → 직각삼각형)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    한 모서리 a. 정팔면체의 꼭짓점 A 의 수선의 발은 정사각형 BCDE 의 중심 O 이므로 θ = ∠ABO. BO = (√2/2)a, AB = a → cos θ = √2/2, θ = 45°. 0303 과 같은 골조·M_total 4·통찰 0 → 중 출발 ★2 에서 −1 한 ★1.
  tier: star_1
  mechanism_primary: "수선의 발 = 정사각형 중심 O → BO = a√2/2 → cos θ = √2/2 → 45°"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$45^\circ$'
  answer_source: "답지"
  figure: crop:fig-0304.png
  latex: latex-bank/rpm-geo/items/0304.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정팔면체라 값 고정(45°). 밑면이 정사각형(한 변 a)이고 옆모서리 b 인 정사각뿔로 일반화하면 cos θ = (a/√2)/b. 제약: b > a/√2."
    creative: "(1) 모서리 AB 와 반대편 면 FCD 가 이루는 각 → AB ∥ FD 라 AB ∥ 면 FCD, 0° 임을 읽는 함정형 ★2 (2) 면 ABC 와 면 BCDE 가 이루는 각(0300 골조 · cos √3/3) ★1 (3) 정팔면체를 정육면체 각 면의 중심을 이은 것으로 두고 정육면체 모서리로 값을 표현 ★3."
```

```yaml
- id: RPM-GEO-0305
  page: 49
  vendor_label: "유형 08 직선과 평면이 이루는 각"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    한 변 4 인 정삼각형이 밑면이고 높이 6 인 삼각기둥에서 모서리 AB 의 중점 G 에 대해 직선 GF 와 밑면 DEF 가 이루는 각 θ 의 cos θ(주관식).
  category: "G 의 수선의 발 = DE 의 중점 G′ → 직각삼각형 GG′F → G′F = 2√3 · GF = 4√3 → cos = 1/2"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직선과 평면이 이루는 각(수선의 발 → 직각삼각형)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    옆면이 밑면에 수직이므로 G 의 수선의 발은 DE 의 중점 G′ 이고 θ = ∠GFG′. G′F 는 정삼각형 DEF 의 높이 2√3, GG′ = 6 이므로 GF = √(36 + 12) = 4√3, cos θ = G′F/GF = 1/2(θ = 60°). 수선의 발·정삼각형 높이·피타고라스·삼각비의 4단계로 M_total 5·통찰 0 → 중 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "수선의 발 G′(DE 중점) → G′F = 2√3 · GG′ = 6 → GF = 4√3 → cos θ = 1/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{2}$'
  answer_source: "답지(쪽 렌더)"
  figure: crop:fig-0305.png
  latex: latex-bank/rpm-geo/items/0305.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑변 4·높이 6 을 G′F : GG′ 가 특수각 비(1 : √3 → 60° · 1 : 1 → 45°)가 되게 바꿈(변 4 → G′F = 2√3, 높이 2√3 → 45°). 제약: 특수각이 아니면 cos 값을 근호로 정리."
    creative: "(1) G 대신 A 를 쓰면 AF 와 밑면의 각(수선의 발 D · DF = 4) ★1 (2) 직선 GF 와 옆면 BEFC 가 이루는 각으로 바꾸면 수선의 발을 옆면에 잡아야 함 ★3 (3) G 를 AB 를 1:3 으로 내분하는 점으로 두면 G′F 를 코사인법칙으로 구해 ★3."
```

```yaml
- id: RPM-GEO-0306
  page: 49
  vendor_label: "유형 08 직선과 평면이 이루는 각"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    한 모서리 10 인 정육면체에서 EF 의 중점 M, 꼭짓점 D 에서 선분 GM 에 내린 수선의 발 I 에 대해 직선 DI 와 밑면 EFGH 가 이루는 각 θ 의 cos θ(5지선다).
  category: "D 의 수선의 발 H → 삼수선 → HI ⊥ GM → θ = ∠DIH → HI(넓이) → DI → cos"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직선과 평면이 이루는 각(수선의 발 → 직각삼각형)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    DH ⊥ 밑면, DI ⊥ GM 이므로 삼수선 정리에서 HI ⊥ GM 이고 HI 가 DI 의 정사영, θ = ∠DIH. △HGM 에서 GM = √(10² + 5²) = 5√5, 넓이 = ½·HG·10 = 50 이므로 HI = 2·50/GM = 4√5. DI = √(100 + 80) = 6√5, cos θ = HI/DI = 2/3. 삼수선으로 정사영을 확정하고 밑면 안에서 점-직선 거리를 구하는 5단계·Mₖ 2 로 M_total 6, 통찰 0 → 상중 출발 ★3 유지.
    [분류 이슈] 삼수선 + 점과 직선 사이의 거리를 이어 붙인 절차형이라 통찰은 없음 — 체감 ★2~3, 벤더 상중을 따라 ★3 으로 두고 기록.
  tier: star_3
  mechanism_primary: "DH ⊥ 밑면 · DI ⊥ GM → HI ⊥ GM → HI = 2·△HGM/GM = 4√5 → DI = 6√5 → cos θ = 2/3"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: crop:fig-0306.png
  latex: latex-bank/rpm-geo/items/0306.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모서리 10 은 비율만 정하므로 임의(값 2/3 불변). M 을 EF 를 1:3 으로 내분하는 점으로 옮기면 GM·HI 가 바뀜(M 이 F 에 가까울수록 HI 가 커짐). 제약: HI = 2·△HGM/GM 이 근호로 정리되는 위치를 고르고, 선택지는 2/3 근처의 유리수·근호 혼합."
    creative: "(1) DI 의 길이나 점 D 와 직선 GM 사이의 거리(같은 골조 · 유형 06) ★2 (2) 직선 DI 와 옆면 BFGC 가 이루는 각으로 바꾸면 정사영을 옆면에 잡아야 함 ★3 (3) M 이 EF 위를 움직일 때 cos θ 의 범위를 묻기(HI 의 범위로 환원 · EQV d1) ★4."
```

```yaml
- id: RPM-GEO-0307
  page: 49
  vendor_label: "유형 08 직선과 평면이 이루는 각"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    정육면체에서 모서리 AB 와 면대각선 세 개로 만든 정삼각형 단면 AFC 가 이루는 각 θ 의 sin θ(주관식).
  category: "BA = BF = BC → B 의 수선의 발 = △AFC 의 외심(무게중심) O → BO(외접원 반지름 또는 부피) → sin = BO/AB"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "B 에서 평면 AFC 에 내린 수선의 발이 어디인지가 관건 — BA = BF = BC 에서 수선의 발은 △AFC 의 외심(정삼각형이라 무게중심)임을 읽거나, 사면체 B-AFC 의 부피를 두 방향으로 써서 높이 BO 를 얻음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "직선과 평면이 이루는 각(수선의 발 → 직각삼각형)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    한 모서리 a. BA = BF = BC = a 이므로 B 의 수선의 발 O 는 정삼각형 AFC(한 변 √2a)의 외심 = 무게중심. AO = (2/3)·(√3/2)·√2a = (√6/3)a → BO = √(a² − 2a²/3) = a/√3, sin θ = BO/AB = √3/3. 사면체 B-AFC 의 부피 a³/6 을 ⅓·(√3/4)(√2a)²·BO 와 같다고 두어도 BO = a/√3. 수선의 발 위치를 스스로 정해야 하는 EQV d1 한 개·M_total 6 → 상중 출발 ★3 유지.
  tier: star_3
  mechanism_primary: "BA = BF = BC → 수선의 발 O = △AFC 무게중심 → BO = a/√3(외접원 반지름 또는 부피) → sin θ = √3/3"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{\sqrt{3}}{3}$'
  answer_source: "답지(쪽 렌더)"
  figure: crop:fig-0307.png
  latex: latex-bank/rpm-geo/items/0307.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정육면체라 값 고정(√3/3). 직육면체로 바꾸면 BA·BF·BC 가 달라 수선의 발이 외심이 아니고 부피법만 남음 — 값은 a, b, c 로 표현. 제약: 정육면체 유지 시 모서리 AB 를 BC·BF 로 바꿔도 대칭이라 같은 값."
    creative: "(1) 공간대각선 BH 가 평면 AFC 에 수직임을 보이고 θ 를 90° − ∠ABH 로 읽기(SYM d1 · 같은 답) ★3 (2) 점 B 와 평면 AFC 사이의 거리(부피법 · SC d1) ★3 (3) 정삼각형 단면 AFC 와 밑면 EFGH 가 이루는 각(유형 07 결합) ★3."
```

## 표본 판정 요약 (32문)

- ★ 분포: ★1 12 · ★2 14 · ★3 6 · ★4 0 · ★5 0
- 통찰형 6 · 절차형 26 · premium 0
- type_hint 상위: 「직선과 평면이 이루는 각(수선의 발 → 직각삼각형)」 6 · 「두 평면이 이루는 각(교선 위 한 점에서 수직인 두 직선)」 6 · 「꼬인 위치의 두 직선이 이루는 각(평행이동 → 삼각형)」 5 · 「삼수선 정리로 길이·넓이 구하기」 5 · 「입체도형에서 직선·평면의 위치 관계 판정과 개수 세기」 3 · 나머지 단독 6종(전개도 조립 · 무게중심 직선의 위치 관계 · 평행·수직 명제 2문 · 공간 분할 개수 · 두 직선의 수직 증명 · 삼수선으로 두 직선의 각)
- 그림: 27문(`crop:fig-0276.png` ~ `crop:fig-0307.png` 중 0281 · 0282 · 0283 · 0292 · 0298 제외 · 0278 은 전개도)
- 벤더 조정: 중 → ★1 로 −1 한 문항 6문(0292 · 0298 · 0299 · 0300 · 0303 · 0304) · 대표문제 → ★1 2문(0284 · 0290) · 중하 → ★1 4문(0277 · 0285 · 0286 · 0297). 모두 통찰 0 · M_total 4 의 1단 조정이라 이슈 표에는 넣지 않음.
- 답 크롭 불일치(전사본이 쪽 렌더 답 채택) 6문(0282 · 0288 · 0289 · 0290 · 0291 · 0292) — 모두 풀이 결과와 일치 확인.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다. 2단 이상 어긋난 문항은 없다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-GEO-0288 | 통찰형(EQV d1 · 직선-평면 수직으로 두 직선의 수직 증명) ★3 이지만 선택지 ① 이 0 이라 '수직이겠지' 추측으로 정답 가능 — 서술형·θ 크기 변형 권장 | ★3 / ★2 |
| RPM-GEO-0301 | 벤더 상중이나 통찰 0 의 계산형(피타고라스 2회 + 코사인법칙) — 절차형 ★3 으로 두고 기록 | ★3 / ★2 |
| RPM-GEO-0306 | 벤더 상중이나 삼수선 + 점-직선 거리의 절차 결합, 통찰 0 — 절차형 ★3 으로 두고 기록 | ★3 / ★2 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 반복된 type_hint 는 RPM 유형 제목과 1:1 로 대응한다(유형 04 평행이동 · 유형 05/06 삼수선 → 길이 · 유형 07 이면각 · 유형 08 직선-평면 각). 카탈로그의 기본 유형은 RPM 유형 02~08 제목을 그대로 채택해도 된다.
- 따로 세워야 할 유형: (a) 「두 직선의 수직 증명(직선과 평면의 수직 이용)」(0288) — 유형 04 와 골조가 다르고(평행이동 불가) base ★3 후보. (b) 「전개도로 만든 정육면체의 위치 관계」(0278) — 위치 관계의 변형이지만 RT 통찰이 있어 별도 태그(base ★2). (c) 「세 평면의 공간 분할 개수」(0283) — 유형 03 의 명제 판정과 골조가 다름(MI · base ★3). (d) 「수선의 발이 외심·무게중심임을 정해야 하는 직선-평면 각」(0307) — 유형 08 의 절차형과 base ★ 가 다름(★3).
- 통합해도 될 유형: 유형 05 삼수선 정리(0290~0292)와 유형 06 삼수선 정리의 활용(0293~0295)은 골조가 같아(수직 두 개 → 삼수선 → 직각삼각형) 하나로 묶고, 유형 07 안의 0299(삼수선으로 이면각)와 0296·0300(이등변삼각형 중선)도 「교선 위 한 점에서 수직인 두 직선」 하나로 묶은 뒤 수선의 발 확정 방법만 하위 태그로 둔다. 유형 08 은 수선의 발이 자명한 절차형(0302~0305 · base ★1~2)과 확정 단계가 있는 상위(0306 · 0307 · base ★3)의 두 층으로 나누는 편이 ★ 산식에 맞는다.
- 정다면체 상수(정사면체 이면각 cos 1/3 · 모서리-면 각 cos √3/3 · 정팔면체 모서리-면 각 45° · 정육면체 대각선 관련 √3/3 · 1/2)가 이 범위에 반복되므로 카탈로그에 「정다면체 표준 각」 참조 표를 두면 변형 때 값 검증이 빨라진다.
