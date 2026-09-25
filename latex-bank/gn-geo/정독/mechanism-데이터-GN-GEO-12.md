---
name: mechanism-데이터-GN-GEO-12
description: 개념원리 기하 12 이면각(1/1 · 98~101쪽 · 15문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 기하 (22개정) · 전사본 latex-bank/gn-geo
  section: 12 이면각
  unit_code: GEO-12
  part: "1/1"
  extract_range: "98~101쪽 · 98-e8~101-195"
  total_problems: 15
  unit_total: 15
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-geo/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-geo/items/<id>.tex
  image_source: latex-bank/gn-geo/figures/ (crops.json)
---

# 개념원리 기하 · 12 이면각 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 기하 12단원 「이면각」 98~101쪽의 전 15문항(`98-e8`~`101-195`)을 다룬다. 전사본에서 이 범위는 네 구역으로 나뉜다 — 「필수·발전 예제」 6문(필수 예제 2 + 확인체크 4) · 「연습문제 STEP 1」 4문 · 「연습문제 STEP 2」 4문 · 「연습문제 실력 UP」 1문. 개념원리 고등의 벤더 난이도 신호는 구역과 예제 태그이므로 「필수」 ★2 · 「확인체크」 ★1 · STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4 를 출발점으로 잡고 M_total·통찰로 ±1 조정했다. 교육청 기출 태그가 붙은 2문(`100-191` · `101-195`)은 통찰 유무로 +0~1 을 판단했다.

단원 전체가 **하나의 골조** 위에 서 있다 — *두 반평면이 이루는 각을 교선에 수직인 두 반직선의 각으로 바꿔 평면삼각형으로 내려놓는다*(이면각의 정의), 그리고 그 수직성을 확보하는 도구가 **삼수선 정리**다. 그래서 대부분의 블록에서 주 통찰은 I-RT(공간 → 평면삼각형 표현 전환)이고, 두 증명 문항(`99-e9` · `99-185`)만 I-EQV(평면의 수직 ↔ 이면각이 직각)로 갈린다. 변형 단계에서 쓸 수 있도록 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 사슬) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 설정 변경과 ★ 변동 지점)를 채웠다. 기하 과목은 유형 카탈로그가 없으므로 `type_id` · `base_star` 는 null 이고 `type_hint` 에 유형명 후보만 적어 둔다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-GEO-98-e8
  page: 98
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    정사면체에서 평면 ABC 와 평면 BCD 가 이루는 각의 크기를 theta 라 할 때
    cos theta 의 값을 구하는 문항. 한 모서리의 길이는 주어져 있지 않다.
  category: "교선 BC 의 중점 잡기 → 이면각의 정의(교선에 수직인 두 반직선) → 이등변삼각형에서 코사인법칙"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "공간의 두 면이 이루는 각을 교선 BC 의 중점 M 을 잡아 평면삼각형 AMD 의 한 내각으로 옮기는 전환. 정삼각형의 중선이 자동으로 교선과 수직이 되는 성질이 이 전환을 가능하게 한다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "두 평면이 이루는 각 — 정사면체의 이면각(교선의 중점 · 코사인법칙)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    이 단원의 정의 문항이다. 교선 BC 를 찾고 그 중점 M 을 잡으면 AM⊥BC, DM⊥BC 가 동시에 성립해
    각 AMD 가 곧 이면각이 된다. 이후는 두 변이 모두 정삼각형의 높이인 이등변삼각형에서 코사인법칙 한 번.
    한 모서리 길이가 주어지지 않아 문자로 두고 답이 비로 떨어지는 것을 확인해야 하므로 Mₐ=2.
    벤더 「필수」 ★2 출발 · 통찰 1개(RT d2) · M_total 7 → 가감 조건에 걸리지 않아 ★2 유지.
  tier: star_2
  mechanism_primary: "BC 의 중점 M → AM⊥BC 이고 DM⊥BC 이므로 각 AMD = theta → 삼각형 AMD(두 변 = 정삼각형의 높이, 밑변 = 모서리)에 코사인법칙 → cos theta = 1/3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{1}{3}$'
  answer_source: "본문 풀이"
  figure: "crop:fig-98-e8.png"
  latex: latex-bank/gn-geo/items/98-e8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "한 모서리의 길이를 6, 2 등 구체값으로 주면 계산은 같고 답은 그대로 1/3(비이므로 불변) — 오히려 '한 모서리 6일 때 삼각형 AMD 의 넓이'처럼 길이에 답이 의존하는 물음으로 바꿔야 수 변형의 뜻이 생긴다. 제약: 정사면체를 유지하면 cos theta 는 항상 1/3 이므로 수치만 바꾸는 변형은 답이 고정된다는 것을 인지할 것. 그림 라벨 A·B·C·D 는 고정."
    creative: "(1) 구하는 값을 tan theta·sin theta 로 바꾸기(★2 유지) (2) 정사면체 대신 밑면이 정삼각형인 정삼각뿔로 바꾸고 옆모서리 길이를 따로 주기 — 중선 길이를 따로 계산해야 하므로 ★3 (3) 두 옆면 ABD·ACD 가 이루는 각으로 바꾸기(교선이 AD 로 옮겨가고 대칭을 새로 찾아야 해 ★3) (4) 이면각을 주고 모서리 길이를 역으로 묻기(I-BW 추가 · ★3)."
```

```yaml
- id: GN-GEO-98-183
  page: 98
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    한 모서리의 길이가 4 인 정육면체에서 평면 DEG 와 밑면 EFGH 가 이루는 각의 크기를
    theta 라 할 때 cos theta 의 값.
  category: "교선 EG 찾기 → EG 의 중점 M 에서 HM⊥EG, DM⊥EG → 직각삼각형 DHM 에서 cos theta = HM/DM"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 평면이 이루는 각 — 정육면체의 이면각(교선의 중점 · 직각삼각형)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    바로 위 필수 예제의 골조를 정육면체에 그대로 옮긴 확인 문항이다. 교선 EG 와 그 중점 M 을 잡고,
    DH 가 밑면에 수직이므로 직각삼각형 DHM 에서 cos theta = HM/DM 으로 끝난다.
    전환이 예제에서 방금 제시된 직후라 스스로 발견할 몫이 없어 통찰은 0 으로 둔다(절차형).
    벤더 「확인체크」 ★1 출발이나 계산량과 단계 수가 예제와 같아(M_total 6) +1 해 ★2 로 둔다.
  tier: star_2
  mechanism_primary: "교선 EG → 중점 M → HM⊥EG, DM⊥EG → 직각삼각형 DHM(DH=4, HM=2√2, DM=2√6) → cos theta = √3/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{\sqrt{3}}{3}$'
  answer_source: "답지"
  figure: "crop:fig-98-183.png"
  latex: latex-bank/gn-geo/items/98-183.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모서리 길이 4 는 자유(2·6·a). 답 √3/3 은 길이에 무관하게 고정되므로, 수 변형을 뜻있게 하려면 직육면체로 바꿔 높이만 다르게 주고(밑면 정사각형 한 변 a, 높이 h) cos theta = (a/√2)/√(a²/2+h²) 가 정리되는 조합을 고를 것. 제약: 근호 안이 유리수 제곱이 되도록 a:h 를 고를 것."
    creative: "(1) 평면 DEG 대신 평면 BDE·평면 ACF 로 바꾸기(교선을 새로 찾아야 해 ★3) (2) 삼각형 DEG 의 넓이나 점 H 에서 평면 DEG 까지의 거리를 묻기(부피 이용 · ★3) (3) 정육면체 대신 직육면체로 바꿔 세 변을 다르게 주기(교선의 중점이 수선의 발이 아니게 되어 삼수선 정리를 새로 써야 함 · ★3)."
```

```yaml
- id: GN-GEO-98-184
  page: 98
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    정사면체에서 선분 AD 의 중점을 M 이라 할 때, 평면 ABC 와 평면 MBC 가 이루는 각의
    크기를 theta 라 하면 cos theta 의 값.
  category: "교선 BC 의 중점 N → AN⊥BC, MN⊥BC → 삼각형 ANM 의 세 변(정삼각형 높이 · 이등변삼각형 높이 · 모서리의 절반)을 각각 구해 코사인법칙"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "이면각의 한 변이 면 위의 중선(AN)이 아니라 내부 단면삼각형 MBC 의 중선(MN)이 되므로, MN 을 삼각형 MBC 가 MB=MC 인 이등변삼각형이라는 사실에서 따로 만들어 내는 평면 환원"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "두 평면이 이루는 각 — 정사면체에서 모서리의 중점을 지나는 단면의 이면각"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    98-e8 과 교선(BC)은 같지만 한쪽 반평면이 단면 MBC 로 바뀌어, MN 의 길이를 바로 읽을 수 없고
    MB=MC 가 정삼각형의 중선임을 거쳐 구해야 한다. 이 한 단계 때문에 확인체크지만 예제보다 골조가 길다.
    이후는 삼각형 ANM 에서 코사인법칙 한 번. 모서리 길이가 없어 문자로 두어야 하므로 Mₐ=2.
    벤더 「확인체크」 ★1 출발 · 통찰 1개(RT d2) · M_total 7 → +1 해 ★2.
  tier: star_2
  mechanism_primary: "BC 의 중점 N → AN⊥BC, MN⊥BC 이므로 각 ANM = theta → MB=MC(정삼각형 중선)에서 MN 을 구해 삼각형 ANM 에 코사인법칙 → cos theta = √6/3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{\sqrt{6}}{3}$'
  answer_source: "답지"
  figure: "crop:fig-98-184.png"
  latex: latex-bank/gn-geo/items/98-184.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "M 을 AD 의 중점이 아니라 AD 를 1:2 로 내분하는 점으로 바꾸면 MB=MC 를 코사인법칙으로 따로 구해야 해 계산이 한 단계 늘어난다(답은 무리수 정리가 필요하므로 내분비를 1:1·1:3 처럼 정삼각형 코사인법칙이 유리수로 떨어지는 값으로 고를 것). 모서리 길이는 답에 영향 없음."
    creative: "(1) 평면 MBC 와 평면 BCD 가 이루는 각으로 바꾸기(같은 교선 · 대칭이 사라져 ★3) (2) 단면 MBC 의 넓이를 묻기(★2) (3) M 을 AD 위의 움직이는 점으로 두고 이면각이 직각이 되는 위치를 묻기(I-BW 추가 · ★4) (4) 정사면체를 밑면 정삼각형·옆모서리 다른 삼각뿔로 바꾸기(★3)."
```

```yaml
- id: GN-GEO-99-e9
  page: 99
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    직선 l 이 평면 alpha 에 수직일 때, l 을 포함하는 임의의 평면 beta 가 alpha 와 수직임을
    보이는 증명 문항.
  category: "두 평면의 수직을 이면각이 직각인 것으로 환원 → 교선 위의 한 점에서 두 반평면에 교선의 수선을 세움 → l⊥alpha 에서 l 이 alpha 위 모든 직선과 수직 → 이면각 90도"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "보여야 할 결론 '두 평면이 수직'을 곧바로 다룰 수 없으므로 '두 평면이 이루는 이면각이 직각'이라는 정의 형태의 동치 조건으로 옮기고, 그 이면각을 교선 위의 한 점에서 잡은 두 수선의 각으로 구체화하는 변환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "두 평면의 수직 관계 — 수선을 포함하는 평면은 원래 평면과 수직임의 증명"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    수치가 전혀 없고 대상이 일반 직선·평면이라 Mₐ=3 으로 추상도는 이 범위에서 가장 높지만,
    실제 골조는 '평면의 수직 = 이면각이 직각'이라는 정의 환원 한 번과 직선과 평면의 수직 정의 적용 한 번뿐이다.
    벤더 「필수」 ★2 출발 · 통찰 1개(EQV d2) · M_total 7 → ★2 유지.
    [분류 이슈] 증명형이라 계산형과 같은 M 척도로 재면 체감 난이도(추상 진입 저항)가 과소평가된다 — 후보 ★2/★3.
  tier: star_2
  mechanism_primary: "beta ∩ alpha = m 위의 점 P → alpha 위에 m 의 수선 PQ, beta 위의 l 과 평행한 PR → l⊥alpha 이므로 PR⊥PQ 이고 PR⊥m → 이면각 RPQ = 90도 → beta⊥alpha"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "풀이 참조"
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/99-e9.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수치가 없는 증명 문항이라 숫자 변형 대상이 아니다. 수 변형을 만들려면 결론을 구체 도형(정육면체의 한 옆면과 밑면, 각뿔의 높이를 포함하는 평면)에서 확인하는 계산형으로 내려야 한다."
    creative: "(1) 역을 묻기 — 'alpha⊥beta 이고 l⊂beta, l⊥(교선)이면 l⊥alpha'(99-185 와 같은 골조 · ★2) (2) 조건에서 'l 을 포함하는'을 'l 과 평행한'으로 바꾸고 참·거짓을 묻기(반례 탐색 · I-MI 추가 · ★3) (3) 수선을 포함하는 평면이 무수히 많음을 세는 방향으로 확장(★3). 결론을 정의로 되돌리는 EQV 를 없애면(이면각을 직접 제시) ★1 로 떨어진다."
```

```yaml
- id: GN-GEO-99-185
  page: 99
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 평면 alpha, beta 가 서로 수직일 때, beta 위의 점 A 에서 교선 m 에 내린 수선의 발을
    O 라 하면 선분 AO 가 alpha 와 수직임을 보이는 증명 문항.
  category: "alpha⊥beta 를 이면각이 직각인 것으로 풀어 씀 → 교선 m 에 수직인 alpha 위의 반직선 OB 를 잡아 각 AOB=90도 → AO 가 m, OB 두 직선에 수직 → 직선과 평면의 수직 판정"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "주어진 'alpha⊥beta' 는 그대로는 쓸 수 없고 '교선에 수직인 두 반직선이 이루는 각이 직각'이라는 이면각 형태로 풀어 써야 비로소 AO⊥OB 라는 쓸 수 있는 수직 관계가 나온다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "두 평면의 수직 관계 — 수직인 두 평면에서 교선에 내린 수선이 다른 평면과 수직임의 증명"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    99-e9 의 역방향 명제다. 조건 쪽에 있는 평면의 수직을 이면각으로 풀어 쓰는 것이 관문이고,
    마무리는 '한 점에서 만나는 두 직선에 수직인 직선은 그 평면에 수직'이라는 판정 정리 적용.
    AO⊥m 이 이미 가정에 있으므로 추가로 확보할 수직은 AO⊥OB 하나뿐이라 단계는 짧다.
    벤더 「확인체크」 ★1 출발 · 추상도 Mₐ=3 · 통찰 1개(EQV d2) · M_total 7 → +1 해 ★2.
  tier: star_2
  mechanism_primary: "alpha⊥beta → 교선 m 에 수직인 alpha 위 반직선 OB 를 잡으면 각 AOB = 90도 → AO⊥m 이고 AO⊥OB → AO⊥alpha"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "풀이 참조"
  answer_source: "답지"
  figure: "crop:fig-99-185.png"
  latex: latex-bank/gn-geo/items/99-185.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "증명형이라 숫자 변형 대상이 아니다. 계산형으로 내리려면 alpha, beta 에 구체 좌표(예: 수직인 두 벽면)를 주고 AO 의 길이나 A 에서 alpha 까지의 거리를 묻는다."
    creative: "(1) 결론을 'A 에서 alpha 에 내린 수선의 발이 O 와 일치함'으로 바꿔 말하기(같은 내용 · ★2) (2) alpha⊥beta 를 빼고 반례를 묻기(I-MI 추가 · ★3) (3) 이 결과를 바로 쓰는 계산 문항(수직인 두 평면 위 점 사이의 거리)으로 잇기(★3). 이 명제 자체가 이후 삼수선 문항의 숨은 전제라, 창의 변형에서 전제를 명시하지 않고 쓰게 만들면 ★ 가 1 오른다."
```

```yaml
- id: GN-GEO-99-186
  page: 99
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    서로 다른 두 직선 l, m 과 서로 다른 세 평면 alpha, beta, gamma 에 대한 네 명제
    ⑴ l∥alpha, alpha⊥beta ⇒ l∥beta ⑵ l⊥alpha, l∥m ⇒ m⊥alpha
    ⑶ l⊥alpha, l∥beta ⇒ alpha⊥beta ⑷ alpha⊥gamma, beta⊥gamma ⇒ alpha∥beta
    중 옳은 것을 모두 고르는 보기형 문항.
  category: "네 명제 각각에 대해 성립하면 근거 정리를, 성립하지 않으면 반례 배치를 찾아 참·거짓 판정"
  M: {s: 2, k: 1, a: 3, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "각 명제의 가정이 공간에서 여러 배치를 동시에 허용하므로, 하나의 배치만 보고 참이라 단정하면 안 되고 가능한 위치 관계를 모두 훑어야 한다(ㄱ·ㄹ 이 이 지점에서 거짓으로 갈린다)"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "추상 기호로 쓰인 위치 관계를 정육면체나 교실 모형 같은 구체 배치로 옮겨야 반례가 눈에 보인다(대수적 서술 → 기하 모형 전환)"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "공간에서 직선과 평면의 위치 관계 참·거짓 판정(보기형)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    네 명제 각각이 독립된 작은 문항이고, 참인 둘(ㄴ·ㄷ)은 정리 인용으로, 거짓인 둘(ㄱ·ㄹ)은 반례 배치 제시로
    성격이 갈린다. 반례를 떠올리려면 추상 기호를 구체 모형으로 옮기는 전환이 필요하고, 한 배치만 보고
    참으로 단정하는 것이 이 유형의 대표 함정(T-범위)이며 평행·수직 기호 혼동(T-표기)이 더해져 Mₜ=2.
    [분류 이슈] 벤더 「확인체크」 ★1 ↔ 판정 ★3 으로 2단 드리프트 — 라벨은 판정을 따르고 기록만 한다.
  tier: star_3
  mechanism_primary: "명제별로 정리 인용(ㄴ: 평행한 두 직선 중 하나가 수직이면 다른 하나도 수직 · ㄷ: 수선에 평행한 직선을 포함하는 평면은 수직)과 반례 배치(ㄱ·ㄹ) 를 나눠 판정 → ㄴ, ㄷ"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "ㄴ, ㄷ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/99-186.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수치가 없는 보기형이라 숫자 변형 대상이 아니다. 대신 보기 개수(3~5개)와 참인 보기의 개수를 설계 변수로 쓴다 — 참이 1개뿐이거나 전부 거짓이면 학생이 판정을 멈추지 못해 체감이 오른다."
    creative: "(1) 보기의 평행·수직 기호를 서로 바꿔 참·거짓을 뒤집기(★3 유지) (2) 직선 둘·평면 둘 대신 평면 셋만으로 구성하기(ㄹ 계열만 남아 반례 난도가 올라 ★3~4) (3) 거짓인 보기에 대해 반례를 직접 그리게 하는 서술형으로 바꾸기(★4) (4) 참인 보기만 남겨 '항상 옳은 것'을 묻는 단답으로 내리면 정리 인용만 남아 ★2."
```

### 연습문제 STEP 1

```yaml
- id: GN-GEO-100-187
  page: 100
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    평면 alpha 위에 있지 않은 점 P 에서 alpha 에 내린 수선의 발이 O, O 에서 alpha 위의
    선분 AB 에 내린 수선의 발이 Q 이고 OP=8, AQ=4√6, AP=14 일 때, 각 PQO 를 theta 라 하면
    cos theta 의 값.
  category: "삼수선 정리로 PQ⊥AB 확보 → 직각삼각형 APQ 에서 PQ → 직각삼각형 POQ 에서 OQ → cos theta = OQ/PQ"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼수선 정리 — 이면각의 코사인 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    발문이 두 수선의 발 O, Q 와 구하는 각 PQO 까지 모두 지정해 주므로 학생이 새로 세울 구성이 없다.
    삼수선 정리로 각 AQP 가 직각임을 확인해 PQ 를 얻고, 다시 직각삼각형 POQ 에서 OQ 를 얻어 나누면 끝.
    표준 절차를 지시대로 실행하는 형태라 통찰 0 으로 두었다.
    벤더 STEP 1 ★2 출발 · 통찰 0 이지만 M_total 6 이라 −1 조건(M_total ≤ 5)에 걸리지 않아 ★2 유지.
  mechanism_primary: "삼수선 정리 → PQ⊥AB → 직각삼각형 APQ 에서 PQ=√(AP²−AQ²)=10 → 직각삼각형 POQ 에서 OQ=√(PQ²−OP²)=6 → cos theta = 6/10"
  tier: star_2
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{3}{5}$'
  answer_source: "답지"
  figure: "crop:fig-100-187.png"
  latex: latex-bank/gn-geo/items/100-187.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "OP·AQ·AP 세 값 중 둘을 주고 하나를 묻는 구조. 제약은 두 번의 피타고라스가 모두 유리수로 떨어져야 한다는 것 — AP²−AQ²=PQ², PQ²−OP²=OQ² 가 연쇄로 성립해야 하므로 (OP, OQ, PQ)=(8,6,10)·(3,4,5)·(5,12,13) 배수 삼조를 먼저 고르고 AQ²=AP²−PQ² 가 양수가 되도록 AP 를 정할 것."
    creative: "(1) cos theta 대신 삼각형 PAB 의 넓이나 P 에서 AB 까지의 거리를 묻기(★2) (2) 각 PQO 를 주고 AP 를 역으로 묻기(I-BW 추가 · ★3) (3) 수선의 발 Q 를 발문에서 빼고 '점 P 와 직선 AB 사이의 거리'만 묻기(삼수선 구성을 학생이 세워야 하므로 100-191 급 ★3) (4) AB 를 삼각형의 한 변으로 만들고 넓이 조건을 대신 주기(★3)."
```

```yaml
- id: GN-GEO-100-188
  page: 100
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    한 모서리의 길이가 4 인 정육면체에서 선분 EF 의 중점을 M, 꼭짓점 D 에서 선분 MG 에
    내린 수선의 발을 I 라 할 때 선분 HI 의 길이.
  category: "DH 가 밑면에 수직임을 이용해 삼수선 정리의 역으로 HI⊥MG 를 확보 → 밑면 EFGH 안의 삼각형 MHG 에서 넓이를 두 번 세어 HI 계산"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "공간에 있는 수선의 발 I 를 그대로 쫓지 않고, DH⊥(밑면)·DI⊥MG 에서 삼수선 정리를 역방향으로 써 HI⊥MG 로 바꾸면 문제가 통째로 밑면 정사각형 안의 평면 문제로 내려온다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "삼수선 정리의 역 — 밑면에서 수선의 발까지의 거리"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    I 의 좌표를 직접 구하려 들면 계산이 커지지만, 삼수선 정리를 거꾸로 읽어 HI⊥MG 를 얻는 순간
    구하는 값이 '밑면에서 점 H 와 직선 MG 사이의 거리'로 바뀌어 삼각형 MHG 의 넓이 두 번 세기로 끝난다.
    전환 이후의 계산 자체는 가볍다(MG=2√5, 넓이 8).
    벤더 STEP 1 ★2 출발 · 통찰 1개(RT d2) · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "DH⊥밑면, DI⊥MG → 삼수선 정리의 역으로 HI⊥MG → 밑면에서 삼각형 MHG 의 넓이 8 과 밑변 MG=2√5 로 HI = 2·8/MG"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{8\sqrt{5}}{5}$'
  answer_source: "답지"
  figure: "crop:fig-100-188.png"
  latex: latex-bank/gn-geo/items/100-188.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모서리 길이 4 와 M 의 위치(EF 의 중점 → EF 를 1:3 으로 내분)가 변수. 제약: 삼각형 MHG 의 넓이는 밑변 HG 와 높이(=모서리)로 항상 쉽게 나오지만, MG 가 근호로 남으므로 답에 유리화가 필요하다 — 유리수 답을 원하면 MG 가 피타고라스 삼조가 되도록 내분점을 잡을 것(예: 모서리 4, EM=3 이면 MG=√(1+16)로 안 떨어짐 → 모서리 3·EM 다르게 조정)."
    creative: "(1) HI 대신 DI 나 삼각형 DMG 의 넓이를 묻기(★2) (2) 수선의 발을 D 가 아니라 B 나 A 에서 내리기(밑면 수선의 발이 바뀌어 ★3) (3) 선분 MG 대신 평면 DMG 와 밑면이 이루는 각을 묻기(이면각 골조로 회귀 · ★2) (4) 정육면체를 직육면체로 바꾸면 삼수선 구성은 같고 수치만 무거워진다(★ 불변 · 계산 마찰만 증가하므로 권장하지 않음)."
```

```yaml
- id: GN-GEO-100-189
  page: 100
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    모든 모서리의 길이가 4 인 사각뿔에서 옆면을 포함하는 평면 ABC 와 밑면 BCDE 가 이루는
    각의 크기를 theta 라 할 때 cos theta 의 값.
  category: "밑면의 중심 O 와 교선 BC 의 중점 M 잡기 → AM⊥BC, OM⊥BC → 직각삼각형 AOM 에서 cos theta = OM/AM"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 평면이 이루는 각 — 각뿔의 옆면과 밑면이 이루는 이면각"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    98-e8 의 골조를 정사각뿔로 그대로 옮긴 문항이다. 꼭짓점에서 밑면에 내린 수선의 발이 밑면 정사각형의
    중심이라는 사실만 확인하면, 교선 BC 의 중점 M 에 대해 AM 은 정삼각형의 높이, OM 은 밑면 한 변의 절반이 되어
    직각삼각형 AOM 에서 cos theta = OM/AM 한 줄로 끝난다.
    벤더 STEP 1 ★2 출발 · 예제 골조 반복이라 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "밑면 중심 O, 교선 BC 의 중점 M → AM⊥BC(정삼각형 높이 2√3), OM⊥BC(=2) → cos theta = OM/AM = √3/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{\sqrt{3}}{3}$'
  answer_source: "답지"
  figure: "crop:fig-100-189.png"
  latex: latex-bank/gn-geo/items/100-189.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모서리 4 는 자유지만 모든 모서리가 같은 정사각뿔이면 cos theta 는 √3/3 으로 고정된다. 수 변형을 뜻있게 하려면 밑면 한 변 a 와 옆모서리 b 를 따로 주고 cos theta = (a/2)/√(b²−a²/4) 가 유리화되는 (a,b) 를 고를 것. 제약: b > a/√2 (뿔이 만들어질 조건)."
    creative: "(1) 이웃한 두 옆면이 이루는 각을 묻기(교선이 옆모서리로 바뀌어 대칭을 새로 찾아야 함 · ★3) (2) 사각뿔의 높이·부피·겉넓이를 묻기(★2) (3) 밑면을 정육각형으로 바꾸기(중심에서 변까지의 거리 계산이 붙어 ★3) (4) 이면각을 주고 옆모서리를 역으로 묻기(I-BW 추가 · ★3)."
```

```yaml
- id: GN-GEO-100-190
  page: 100
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    AB=BC=2 인 직육면체에서 평면 ABCD 와 평면 BDE 가 이루는 각의 크기가 60도일 때
    선분 AE 의 길이.
  category: "교선 BD 와 그 중점 P 잡기 → AP⊥BD, 삼수선 정리로 EP⊥BD → 직각삼각형 AEP 에서 tan 60도 = AE/AP 로 AE 역산"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "이면각 60도라는 각 조건을 쓰려면 먼저 교선 BD 위에 두 반직선(밑면의 AP, 평면 BDE 의 EP)을 세워 직각삼각형 AEP 로 내려놓아야 한다. AE⊥밑면이라는 사실이 삼수선 정리를 통해 EP⊥BD 를 보장하는 것이 전환의 핵심"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "이면각의 크기가 주어질 때 모서리의 길이 구하기(삼수선 정리 · 역산)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    앞의 이면각 문항들과 달리 각이 주어지고 길이를 묻는 역방향이지만, 세워야 할 구성은 같다.
    밑면이 한 변 2 인 정사각형이라 A 에서 BD 에 내린 수선의 발이 BD 의 중점이고 AP=√2.
    AE 가 밑면에 수직이므로 삼수선 정리로 EP⊥BD 가 보장되어 각 APE 가 곧 이면각이 되고, tan 60도 로 AE 를 얻는다.
    벤더 STEP 1 ★2 출발 · 통찰 1개(RT d2) · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "교선 BD 의 중점 P → AP⊥BD(=√2), AE⊥밑면 + 삼수선 정리로 EP⊥BD → 각 APE = 60도 → AE = AP·tan 60도 = √6"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\sqrt{6}$'
  answer_source: "답지"
  figure: "crop:fig-100-190.png"
  latex: latex-bank/gn-geo/items/100-190.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이면각 60도 를 45도·30도 로 바꾸면 AE 는 각각 √2, √6/3 — 45도 가 가장 깔끔하다. 밑면을 AB=2, BC=4 인 직사각형으로 바꾸면 A 에서 BD 에 내린 수선의 발이 더 이상 중점이 아니어서 AP=AB·BC/BD 를 따로 구해야 한다(계산 한 단계 추가 · 제약: BD 가 근호로 남으므로 AB:BC 를 3:4 로 두면 유리수)."
    creative: "(1) AE 를 주고 이면각의 크기를 묻기(정방향으로 되돌림 · ★2) (2) 평면 BDE 와 평면 ABCD 대신 평면 BDE 와 옆면이 이루는 각으로 바꾸기(교선을 새로 찾아야 함 · ★3) (3) 삼각형 BDE 의 넓이나 점 A 에서 평면 BDE 까지의 거리를 묻기(부피 이용 · ★3) (4) 밑면을 직사각형으로 바꾸고 이면각을 주기(수선의 발 위치를 스스로 구해야 하므로 ★3)."
```

### 연습문제 STEP 2

```yaml
- id: GN-GEO-100-191
  page: 100
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 STEP 2"
  summary: |
    평면 alpha 위에 AB=6 이고 넓이가 12 인 삼각형 ABC 가 있고, alpha 위에 있지 않은 점 P 에서
    alpha 에 내린 수선의 발이 C 와 일치한다. PC=2 일 때 점 P 와 직선 AB 사이의 거리. 5지선다.
  category: "넓이 조건을 C 와 직선 AB 사이의 거리로 바꿈 → C 에서 AB 에 내린 수선의 발 H 에 삼수선 정리 적용 → 직각삼각형 PCH 에서 PH"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "삼각형의 넓이 12 와 밑변 6 이라는 조건을 '점 C 에서 직선 AB 까지의 거리가 4' 라는, 삼수선 구성에 바로 꽂히는 형태로 바꿔 읽는 변환"
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "구하는 '점 P 와 직선 AB 사이의 거리'를 삼수선 정리로 PH(H 는 C 에서 AB 에 내린 수선의 발)로 확정해 공간 문제를 직각삼각형 PCH 하나로 내려놓는 전환"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "삼수선 정리 — 점과 직선 사이의 거리(넓이 조건 결합)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    수선의 발이 삼각형의 꼭짓점 C 와 일치한다는 설정이 핵심이다. 넓이에서 CH=4 를 얻고,
    PC⊥alpha 이므로 삼수선 정리로 PH⊥AB 가 되어 구하는 거리는 직각삼각형 PCH 의 빗변 √(2²+4²).
    벤더 STEP 2 ★3 출발 · 통찰 2개지만 둘 다 depth 1 이고 M_total 5 로 이 범위에서 가장 가벼워
    +1 후보와 −1 후보가 상쇄된다 → ★3 유지. 교육청 기출 태그의 +0~1 은 통찰이 얕아 +0.
    [분류 이슈] M_total 5·depth 1 만 보면 체감은 ★2 — 후보 ★2/★3.
  tier: star_3
  mechanism_primary: "넓이 12, AB=6 → CH=4 → PC⊥alpha 이므로 삼수선 정리로 PH⊥AB → PH=√(PC²+CH²)=2√5"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지"
  figure: "crop:fig-100-191.png"
  latex: latex-bank/gn-geo/items/100-191.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AB·넓이·PC 셋이 자유 변수이고 CH = 2·(넓이)/AB 로 결정된다. 제약: 선택지가 근호 하나로 정리되도록 PC²+CH² 를 고를 것 — (PC, CH)=(2,4)→2√5, (3,4)→5, (6,8)→10 처럼 피타고라스 삼조를 쓰면 유리수 답이 나와 객관식 매력 오답(√22, √26 류)을 만들기 쉽다."
    creative: "(1) PH 를 주고 넓이를 역으로 묻기(I-BW 추가 · ★3) (2) 수선의 발을 C 가 아니라 삼각형 내부의 임의 점으로 옮기기(CH 를 좌표로 따로 구해야 해 ★4) (3) 삼각형 PAB 의 넓이를 묻기(한 단계 추가 · ★3) (4) 넓이 대신 각 ACB 와 두 변을 주면 CH 계산이 삼각비로 바뀐다(★3). 넓이→거리 환산을 없애고 CH 를 직접 주면 순수 삼수선 절차형 ★2 로 내려간다."
```

```yaml
- id: GN-GEO-101-192
  page: 101
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    한 꼭짓점에서 만나는 세 모서리가 서로 수직인 사면체에서 OA=√3, OB=1, OC=2 일 때
    삼각형 ABC 의 넓이.
  category: "밑변 AB 를 정하고 O 에서 AB 에 내린 수선의 발 H 를 잡음 → 삼수선 정리로 CH⊥AB → 직각삼각형 OAB 에서 OH, 직각삼각형 COH 에서 CH → 넓이"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "공간 삼각형의 넓이를 직접 다루지 않고, 밑변 AB 에 대한 높이를 삼수선 정리로 CH 라고 확정한 뒤 OH → CH 두 직각삼각형의 사슬로 만들어 평면 계산으로 내려놓는 전환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "삼수선 정리 — 직교 사면체에서 한 면의 넓이"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    세 모서리가 서로 수직이라는 조건이 OC⊥(평면 OAB)를 주고, 그 덕에 O 에서 AB 에 내린 수선의 발 H 에 대해
    삼수선 정리로 CH⊥AB 가 되어 CH 가 곧 삼각형 ABC 의 높이가 된다. OH 는 직각삼각형 OAB 의 넓이 두 번 세기로,
    CH 는 피타고라스로 얻는다. 높이를 어느 밑변에 대해 잡을지 고르는 것이 골조의 출발점.
    벤더 STEP 2 ★3 출발 · 통찰 1개(RT d2) · M_total 6 → ★3 유지.
  tier: star_3
  mechanism_primary: "OC⊥평면 OAB → O 에서 AB 에 내린 수선의 발 H, 삼수선 정리로 CH⊥AB → OH=OA·OB/AB, CH=√(OC²+OH²) → 넓이 = ½·AB·CH = √19/2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{\sqrt{19}}{2}$'
  answer_source: "답지"
  figure: "crop:fig-101-192.png"
  latex: latex-bank/gn-geo/items/101-192.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "OA·OB·OC 세 값이 자유 변수. 제약: AB=√(OA²+OB²)가 근호로 남으면 OH 가 지저분해지므로 (OA,OB)=(3,4)·(6,8) 처럼 피타고라스 삼조로 두면 깔끔하다. 답은 항상 ½√(OA²OB²+OB²OC²+OC²OA²) 꼴이라 이 값이 완전제곱이 되는 조합(예: 3,4,12)을 고르면 유리수 답."
    creative: "(1) 사면체의 부피나 O 에서 평면 ABC 까지의 거리를 묻기(부피 두 번 세기 · ★3) (2) 삼각형 ABC 의 넓이를 주고 OC 를 역으로 묻기(I-BW 추가 · ★4) (3) 평면 ABC 와 평면 OAB 가 이루는 각을 묻기(이 단원 본줄기로 회귀 · ★3) (4) 세 면의 넓이를 주고 삼각형 ABC 의 넓이를 묻기(세 제곱의 합 관계를 스스로 발견해야 해 I-PD 추가 · ★4)."
```

```yaml
- id: GN-GEO-101-193
  page: 101
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    사면체에서 평면 ABC 와 평면 BCD 가 이루는 각의 크기가 60도이고 두 삼각형 ABC, BCD 의
    넓이가 각각 18, 15, BC=6 일 때 이 사면체의 부피.
  category: "넓이와 BC 로 A 에서 BC 에 내린 높이 AM 을 얻음 → 이면각 60도를 AM 에 곱해 평면 BCD 까지의 높이 AH 로 분해 → 부피 공식"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "이면각 60도 를 각 그 자체로 쓰지 않고, 이면각의 한 변인 AM 을 빗변으로 하는 직각삼각형 AHM 으로 옮겨 사면체의 높이 AH = AM·sin 60도 로 바꿔 읽는 전환(이면각 → 높이)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "이면각을 이용한 사면체의 부피(밑면까지의 높이 분해)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    부피에 필요한 것은 밑면 BCD 의 넓이(주어짐)와 A 에서 평면 BCD 까지의 높이뿐인데, 높이가 직접 주어지지 않고
    이면각으로 감춰져 있다. 넓이 18 과 BC=6 에서 AM=6(교선에 수직인 반직선)을 얻고, 이면각의 정의상
    A 의 수선의 발 H 가 BCD 위의 M 쪽 방향에 놓이므로 AH=AM sin60도 = 3√3.
    벤더 STEP 2 ★3 출발 · 통찰 1개(RT d2) · M_total 6 → ★3 유지. 삼각형 BCD 의 넓이를 그대로 쓰는 구조라 계산은 가볍다.
  tier: star_3
  mechanism_primary: "넓이 18, BC=6 → AM=6(AM⊥BC) → 이면각 60도 → AH = AM·sin 60도 = 3√3 → 부피 = ⅓·15·3√3 = 15√3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$15\sqrt{3}$'
  answer_source: "답지"
  figure: "crop:fig-101-193.png"
  latex: latex-bank/gn-geo/items/101-193.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이면각(30·45·60도)·두 넓이·BC 가 모두 자유 변수이고 부피 = ⅓·(BCD 넓이)·(2·ABC 넓이/BC)·sin theta. 제약: AM = 2·(ABC 넓이)/BC 가 정수로 떨어지도록 넓이를 BC 의 배수로 둘 것. 45도 로 바꾸면 √2 계열, 30도 는 유리수 답."
    creative: "(1) 부피를 주고 이면각의 크기를 역으로 묻기(I-BW 추가 · ★3~4) (2) 삼각형 BCD 의 넓이 대신 BD·CD 를 주기(밑면 넓이를 먼저 구하는 단계 추가 · ★3) (3) A 에서 평면 BCD 까지의 거리를 묻기(부피 단계를 빼면 ★2) (4) 이면각을 직접 주지 않고 AD 의 길이를 주면 이면각을 코사인법칙으로 복원해야 해 ★4."
```

```yaml
- id: GN-GEO-101-194
  page: 101
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    서로 수직인 두 평면 alpha, beta 위에 각각 놓인 두 직선 m, n 이 교선 l 위의 점 P 에서
    만나고 l 과 이루는 각이 각각 60도, 45도 이다. m, n 이 이루는 각을 theta 라 할 때 cos theta 의 값.
  category: "l 을 축으로 삼아 m, n 위에 P 로부터 길이를 잡고 각 점에서 l 에 수선을 내림 → alpha⊥beta 에서 두 수선이 서로 수직임을 확보 → 세 길이를 피타고라스로 묶어 삼각형 PAB 에 코사인법칙"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "이름만 있고 수치가 없는 배치를 P 를 원점, l 을 한 축으로 하는 직교 골격으로 옮긴다. alpha⊥beta 가 곧 '두 수선 방향이 서로 수직'이 되어 공간 각 문제가 길이 계산으로 내려온다"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "l 과 이루는 각 60도·45도 와 두 평면의 수직이라는 세 개의 독립 조건을 삼각형 PAB 한 개(두 변과 끼인 변 AB)로 통합해 코사인법칙 한 번으로 끝내는 조건 결합"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "수직인 두 평면 위의 두 직선이 이루는 각(꼬인 위치가 아닌 교점 있는 경우)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    주어진 각이 모두 l 에 대한 각이라 구하는 theta 와 직접 연결되지 않는다. m, n 위에 P 로부터 길이를 스스로 잡고
    각각 l 에 수선을 내려 그 두 수선이 alpha⊥beta 때문에 서로 수직이라는 점을 써야 AB 가 계산된다.
    구성할 보조선이 세 개이고 수치가 없어 길이를 문자로 두어야 하므로 Mₐ=2, 함정은 두 직선이 이루는 각을 예각으로
    잡는 T-범위와 이면각·직선의 각 혼동인 T-표기로 Mₜ=2.
    벤더 STEP 2 ★3 출발 · 통찰 2개(RT d2 + CON d2) · M_total 8 로 이 구역에서 가장 무거워 +1 해 ★4.
  tier: star_4
  mechanism_primary: "m, n 위에 PA, PB 를 잡고 A, B 에서 l 에 수선 AH, BK → alpha⊥beta 이므로 AH⊥BK → AB² 를 세 직각삼각형으로 조립 → 삼각형 PAB 에 코사인법칙 → cos theta = √2/4"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{\sqrt{2}}{4}$'
  answer_source: "답지"
  figure: "crop:fig-101-194.png"
  latex: latex-bank/gn-geo/items/101-194.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 각(60도·45도)이 유일한 수치 변수다. cos theta = cos(각1)·cos(각2) 꼴로 정리되므로 (60,60)→1/4, (45,45)→1/2, (30,45)→√6/4 처럼 특수각 조합만 쓰면 답이 항상 깔끔하다. 제약: 두 각 모두 0도 초과 90도 미만, 90도 를 넣으면 직선이 교선에 수직이 되어 배치가 무너진다."
    creative: "(1) 두 평면이 이루는 각을 90도 가 아니라 60도 로 바꾸기(두 수선이 직교하지 않아 코사인법칙이 한 번 더 붙고 ★5 후보) (2) theta 를 주고 한쪽 각을 역으로 묻기(I-BW 추가 · ★4) (3) m, n 이 P 에서 만나지 않고 꼬인 위치가 되게 하기(평행이동이 추가되어 ★4~5) (4) 삼각형 PAB 의 넓이를 묻기(★4). 두 평면의 수직을 빼면 골조 자체가 성립하지 않는다."
```

### 연습문제 실력 UP

```yaml
- id: GN-GEO-101-195
  page: 101
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 실력 UP"
  summary: |
    BC=CD=3, 각 BCD=90도 인 사면체 ABCD 에서 A 에서 평면 BCD 에 내린 수선의 발 H 가
    선분 BD 를 1:2 로 내분한다. 삼각형 ABC 의 넓이가 6 일 때 삼각형 AHC 의 넓이. 5지선다.
  category: "밑면에서 H 의 위치를 확정 → H 에서 BC 에 내린 수선의 발 K 와 삼수선 정리로 AK⊥BC → 넓이 조건에서 AK, 이어서 AH → AH⊥HC 인 직각삼각형으로 넓이"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "구하는 삼각형 AHC 가 AH⊥평면 BCD 때문에 각 AHC 가 직각인 직각삼각형임을 먼저 알아채고, 그래서 필요한 것이 AH 와 HC 두 길이뿐이라는 역산 목표를 세운 뒤 주어진 넓이 조건을 그 방향으로 끌고 간다"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "삼각형 ABC 의 넓이 6 이라는 공간 조건을, H 에서 BC 에 내린 수선의 발 K 와 삼수선 정리(AK⊥BC)를 거쳐 밑면의 길이 HK 와 AH 의 관계식으로 옮기는 전환"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "삼수선 정리 — 수선의 발이 내분점일 때 단면삼각형의 넓이"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    조건이 세 군데(밑면의 직각·내분비·공간 삼각형의 넓이)에 흩어져 있고 하나로 잇는 경로가 한 줄이 아니다.
    BD=3√2 와 1:2 내분에서 H 의 위치를 잡고, H 에서 BC 에 내린 수선 HK 로 삼수선 정리를 써 AK 를 넓이 조건에 연결한 뒤,
    AH 와 HC 를 얻어 직각삼각형 AHC 의 넓이로 마무리한다. 단계가 일곱 안팎이라 Mₛ=3.
    벤더 「실력 UP」 ★4 출발 · 통찰 2개(BW d2 + RT d2) · M_total 7 → ★4 유지.
    교육청 기출 태그의 +0~1 은 이미 실력 UP 출발점에 반영된 것으로 보아 +0.
  tier: star_4
  mechanism_primary: "BD=3√2, BH=√2 → H 에서 BC 에 내린 수선 HK(=1) → 삼수선 정리로 AK⊥BC → 넓이 6 에서 AK=4 → AH=√(AK²−HK²)=√15, HC=√5 → 삼각형 AHC 넓이 = ½·AH·HC"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: "②"
  answer_source: "답지"
  figure: "crop:fig-101-195.png"
  latex: latex-bank/gn-geo/items/101-195.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "BC=CD 의 값, 내분비(1:2 → 1:1·2:1), 삼각형 ABC 의 넓이가 변수다. 제약 사슬이 길다 — 내분비가 HK 와 HC 를 동시에 정하고, 넓이가 AK 를 정하며, AH²=AK²−HK² 가 양수여야 한다(넓이가 너무 작으면 사면체가 만들어지지 않음). 답이 깔끔하려면 AH²·HC² 가 완전제곱이 되게 고를 것."
    creative: "(1) 삼각형 AHC 대신 삼각형 ACD 나 사면체의 부피를 묻기(같은 사슬 끝을 바꿈 · ★4) (2) 삼각형 AHC 의 넓이를 주고 내분비를 역으로 묻기(I-BW 강화 · ★5 후보) (3) 각 BCD 를 90도 가 아닌 60도 로 바꾸기(HK·HC 를 코사인법칙으로 구해야 해 ★5 후보) (4) 수선의 발 H 를 '삼각형 BCD 의 무게중심' 처럼 다른 특수점으로 바꾸기(★4). 내분비를 빼고 H 를 BD 의 중점으로 고정하면 대칭이 살아나 ★3 으로 내려간다."
```

## 표본 판정 요약 (15문)

- ★ 분포: ★1 0 · ★2 9 · ★3 4 · ★4 2 · ★5 0
- 통찰형 12 · 절차형 3(`98-183` · `100-187` · `100-189` — 모두 바로 앞 예제의 골조를 지시대로 반복) · premium 0
- 구역 분포: 「필수·발전 예제」 6문(필수 2 · 확인체크 4) · 「연습문제 STEP 1」 4문 · 「연습문제 STEP 2」 4문 · 「연습문제 실력 UP」 1문
- 통찰 유형 분포(총 16개): I-RT 10 · I-EQV 3 · I-MI 1 · I-CON 1 · I-BW 1 — 단원 전체가 **공간 → 평면삼각형 환원(I-RT)** 한 축 위에 있고, 두 증명 문항만 I-EQV 로 갈린다. depth 3 은 없다.
- type_hint 상위: 「삼수선 정리 활용(길이·거리·넓이)」 5(`100-187` · `100-188` · `100-191` · `101-192` · `101-195`) · 「두 평면이 이루는 각 — 다면체의 면과 면」 4(`98-e8` · `98-183` · `98-184` · `100-189`) · 「두 평면의 수직 관계 증명」 2(`99-e9` · `99-185`) · 「이면각 조건의 역이용(길이·부피)」 2(`100-190` · `101-193`) · 「위치 관계 참·거짓 보기형」 1(`99-186`)
- M_total: 5 1문 · 6 7문 · 7 5문 · 8 2문(평균 6.5). 함정은 대부분 T-표기(교선에 수직인 반직선을 잡아야 이면각) 1개이고, 보기형 `99-186` 과 두 직선의 각 `101-194` 만 Mₜ=2
- 그림: 13문이 크롭 있음 · 그림 없는 2문은 추상 증명(`99-e9`)과 보기형(`99-186`)
- 대상층: 중하위권 3 · 중위권 7 · 중상위권 4 · 상위권 1
- 답 형식: 단답 12 · 객관식 2(`100-191` · `101-195`, 둘 다 교육청 기출) · 증명 2(`99-e9` · `99-185`) — 증명 2문은 `answer` 가 「풀이 참조」

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-GEO-99-186 | 벤더 「확인체크」(★1 출발) ↔ 판정 ★3 으로 **2단 드리프트**. 네 명제 각각이 독립 판정이고 거짓 둘은 반례 배치를 스스로 만들어야 해 확인체크 층의 문항이 아니다. 라벨은 판정을 따름 | ★3 |
| GN-GEO-99-e9 | 증명형을 계산형과 같은 M 척도로 재면 Mₖ=1·Mₛ=2 로 가벼워 보이지만, 수치가 전혀 없는 일반 직선·평면 진술의 진입 저항(Mₐ=3)이 ★ 에 반영되지 않는다. 증명형 전용 보정이 필요한지 카탈로그 설계 때 결정 | ★2 / ★3 |
| GN-GEO-100-191 | 벤더 STEP 2(★3) 이나 M_total 5 로 이 범위에서 가장 가볍고 두 통찰 모두 depth 1. +1 후보(통찰 2개)와 −1 후보(저노동)가 상쇄된다고 보아 ★3 으로 두었으나 체감은 ★2 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위에서 압도적으로 반복된 골조는 **「교선에 수직인 두 반직선으로 이면각을 평면삼각형에 내려놓기」**(8문)와 **「삼수선 정리로 공간 길이를 두 직각삼각형의 사슬로 바꾸기」**(5문)다. 둘은 실제로 같은 뿌리(한 평면에 수직인 직선이 만드는 수직 관계)이므로, 카탈로그에서는 상위 유형 **「공간의 수직 관계 — 이면각·삼수선」** 아래에 두 갈래로 두는 편이 낫다.
- **통합해도 될 유형**: `98-e8` · `98-183` · `98-184` · `100-189` 는 다면체만 다를 뿐 「교선의 중점 → 이등변·정삼각형의 중선 → cos」 사슬이 완전히 같다. 한 유형(base ★2)으로 통합하고 다면체 종류를 파라미터로 둔다. `100-187` 과 `101-192` 도 「삼수선 + 두 번의 피타고라스」로 같은 유형(base ★2~3).
- **따로 세워야 할 유형**:
  - **이면각의 역이용**(`100-190` · `101-193`) — 각이 주어지고 길이·부피를 역산하는 방향이라 사슬의 진행 방향이 반대다. base ★3.
  - **수직인 두 평면 위 두 직선이 이루는 각**(`101-194`) — 교선을 축으로 한 직교 골격 구성과 조건 통합(I-CON)이 상시 붙어 위 두 갈래와 다르다. base ★4.
  - **위치 관계 참·거짓 보기형**(`99-186`) — 계산이 없고 반례 구성이 본체라 M 척도가 다르게 작동한다. 12단원 단독이 아니라 공간도형 전 단원 공통 유형으로 올릴 것. base ★3.
  - **수직 관계 증명형**(`99-e9` · `99-185`) — 정의 환원(I-EQV)이 본체인 서술형. 계산형과 같은 base ★ 표에 넣기 어려우므로 증명형 전용 칸을 둘 것. base ★2~3.
- 12단원은 앞 단원(삼수선 정리)과 도구를 그대로 공유하므로 단독 카탈로그 항목으로 두지 말고 **「공간도형의 수직 관계」 유형군** 아래에 11·12단원을 묶어 배치하는 편이 변형 설계에 유리하다.
