---
name: mechanism-데이터-GN-GEO-10
description: 개념원리 기하 10 직선과 평면의 수직(1/1 · 90~93쪽) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 기하 (22개정) · 전사본 latex-bank/gn-geo
  section: 10 직선과 평면의 수직
  unit_code: GEO-10
  part: "1/1"
  extract_range: "90~93쪽 · 90-e4~93-178"
  total_problems: 15
  unit_total: 15
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-geo/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-geo/items/<id>.tex
  image_source: latex-bank/gn-geo/figures/ (crops.json)
---

# 개념원리 기하 · 10 직선과 평면의 수직 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 기하 90~93쪽, 10단원 「직선과 평면의 수직」 15문항 전수를 다룬다. 구역은 「필수·발전 예제」 6문(필수 예제 2 + 확인체크 4), 「연습문제 STEP 1」 4문, 「연습문제 STEP 2」 3문, 「연습문제 실력 UP」 2문이다. 개념원리 고등의 난이도 신호는 구역과 예제 태그에 있어서 확인체크는 ★1, 필수 예제와 STEP 1 은 ★2, STEP 2 는 ★3, 실력 UP 은 ★4 를 출발점으로 잡고 M_total·통찰 수로 ±1 조정했다. 이 범위에는 기출 태그가 없다.

내용상 이 단원의 도구는 딱 셋이다. (1) 직선과 평면의 수직 판정 — 평면 위에서 한 점에서 만나는 두 직선과 각각 수직이면 평면과 수직이고, 그러면 평면 위의 **모든** 직선과 수직이다. (2) 꼬인 위치에 있는 두 직선이 이루는 각 — 한 직선을 평행이동해 만나게 한 뒤 정사각형·정삼각형·직각삼각형에서 각을 읽거나 코사인법칙을 쓴다. (3) 두 직선의 수직을 직접 못 보일 때 (1) 을 경유해 「직선 ⊥ 평면 → 평면 위 직선과 수직」으로 환원한다. 15문 중 6문이 (2), 4문이 (1)·(3), 3문이 위치관계 명제 판정(보기형), 2문이 단면·개수 세기다. 실력 UP 2문은 꼬인 위치 두 직선 사이의 거리(공통수선)를 (1) 로 환원하는 같은 골조다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(통찰 유형·depth) · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 설정 변형)를 채웠다. 공간도형 문항은 숫자보다 **도형·라벨 치환**이 변형의 주축이라 `variation_notes.numeric` 에 모서리 길이·비율 제약을, `creative` 에 정육면체 ↔ 정사면체 ↔ 정팔면체 치환과 그때 ★ 가 변하는 지점을 적었다. 유형 카탈로그가 없는 과목이라 `type_id` · `base_star` 는 null 이고 `type_hint` 에 유형명을 제안했다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-GEO-90-e4
  page: 90
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    정사면체에서 모서리 BC 의 중점을 M 이라 할 때 ⑴ BC ⊥ (평면 AMD) ⑵ BC ⊥ AD 임을 보이기.
  category: "직선과 평면의 수직 판정 → 평면 위 모든 직선과 수직"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직선과 평면의 수직 판정(만나는 두 직선과의 수직으로 증명)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 정삼각형 ABC, DBC 의 중선이 밑변에 수직이라는 평면 사실 두 개를 모아 판정 정리에 넣는 표준 증명. ⑵ 는 ⑴ 의 결과에 AD 가 평면 위에 있다는 것만 얹는다. 단원의 도구를 처음 소개하는 필수 예제라 통찰로 세지 않고 절차형으로 두었다. 필수 ★2 출발 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "정삼각형의 중선 → BC⊥AM, BC⊥DM → 한 점 M 에서 만나는 두 직선과 수직 → BC⊥(평면 AMD) → 평면 위 AD 와도 수직"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '풀이 참조 (⑴ 두 삼각형 $\pt{ABC}$, $\pt{DBC}$는 정삼각형이고 $\seg{BM}=\seg{CM}$이므로 $\seg{BC}\perp\seg{AM}$, $\seg{BC}\perp\seg{DM}$. 즉 $\seg{BC}$는 평면~$\pt{AMD}$ 위의 점~$\pt{M}$에서 만나는 두 선분 $\pt{AM}$, $\pt{DM}$과 각각 수직이므로 $\seg{BC}\perp(\text{평면 }\pt{AMD})$ ⑵ $\seg{BC}\perp(\text{평면 }\pt{AMD})$이므로 $\seg{BC}$는 평면~$\pt{AMD}$ 위의 모든 직선과 수직이고, $\seg{AD}$는 평면~$\pt{AMD}$ 위에 있으므로 $\seg{BC}\perp\seg{AD}$)'
  answer_source: "본문 풀이"
  figure: "crop:fig-90-e4.png"
  latex: latex-bank/gn-geo/items/90-e4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "길이가 안 쓰이는 증명형이라 바꿀 수는 없다. 수치 변형을 하려면 「한 모서리 길이 a 인 정사면체에서 선분 AM 의 길이」처럼 계산 문항으로 바꾸고 a 만 조정한다(AM = (√3/2)a · 무리수 정리가 되도록 a 는 정수)."
    creative: "(1) M 을 BC 의 중점이 아니라 BD·CD 의 중점으로 옮겨 같은 증명을 반복(★2 유지) (2) 정사면체를 「AB=AC, DB=DC 인 사면체」로 일반화하면 정삼각형 대신 이등변삼각형 성질을 써야 해 조건 해석이 한 단계 늘어 ★3 (3) 결론을 BC⊥AD 만 묻고 평면을 학생이 스스로 잡게 하면 I-EQV 통찰 1개가 생겨 ★3."
```

```yaml
- id: GN-GEO-90-166
  page: 90
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    정육면체에서 AC ⊥ (평면 BFHD) 임을 보이기.
  category: "직선과 평면의 수직 판정(정사각형 대각선 + 밑면에 수직인 모서리)"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직선과 평면의 수직 판정(만나는 두 직선과의 수직으로 증명)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    수직의 근거 두 개가 서로 다른 출처다 — AC⊥BD 는 정사각형 ABCD 의 대각선, AC⊥BF 는 BF 가 밑면에 수직이라는 사실에서 나온다. 이 둘을 점 B 에서 모아 판정 정리에 넣는다. 확인체크 ★1 출발이지만 근거가 두 갈래이고 M_total 6 이라 +1 해 ★2 로 두었다. [분류 이슈] 확인체크 신호(★1)와 1단 차이 — 규칙상 +1 후보 조건(통찰 2개·depth 3)에는 못 미친다.
  tier: star_2
  mechanism_primary: "정사각형 대각선 AC⊥BD · 밑면에 수직인 BF 로 AC⊥BF → 점 B 에서 만나는 두 직선과 수직 → AC⊥(평면 BFHD)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '풀이 참조 (사각형~$\pt{ABCD}$는 정사각형이므로 $\seg{AC}\perp\seg{BD}$, 또 $\seg{BF}\perp(\text{평면 }\pt{ABCD})$이므로 $\seg{AC}\perp\seg{BF}$. 즉 $\seg{AC}$는 평면~$\pt{BFHD}$ 위의 점~$\pt{B}$에서 만나는 두 직선 $\pt{BD}$, $\pt{BF}$와 각각 수직이므로 $\seg{AC}\perp(\text{평면 }\pt{BFHD})$)'
  answer_source: "계산(답지 「풀이 40쪽」)"
  figure: "crop:fig-90-166.png"
  latex: latex-bank/gn-geo/items/90-166.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "증명형이라 수는 없다. 「한 모서리 6 인 정육면체에서 평면 BFHD 의 넓이」로 바꾸면 6·6√2 가 되도록 모서리를 정하면 된다."
    creative: "(1) 대각 단면을 AEGC 로 바꿔 BD⊥(평면 AEGC) 를 묻기(★2 유지) (2) 직육면체로 바꾸면 밑면이 정사각형일 때만 성립하므로 「성립하는가」를 묻는 판정형이 되어 I-MI 1개 · ★3 (3) 이어서 AC 와 평면 위 임의의 직선(BH 등)의 각을 묻으면 ⑵ 단계가 붙어 ★3."
```

```yaml
- id: GN-GEO-90-167
  page: 90
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    공간의 서로 다른 두 직선 $l$, $m$ 과 서로 다른 두 평면 $\alpha$, $\beta$ 에 대한 세 명제(ㄱ 한 평면에 수직인 두 직선은 평행 · ㄴ 한 직선에 수직인 두 평면은 평행 · ㄷ 한 평면에 평행한 두 직선은 평행) 중 옳은 것 고르기.
  category: "공간 위치관계 명제 참·거짓(반례 구성)"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 3
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "ㄷ 에서 한 평면에 평행한 두 직선이 평행·만남·꼬인 위치 셋 다 될 수 있음을 모두 따져 반례를 잡음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "직선과 평면의 평행·수직 명제 참거짓(보기형)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ㄱ·ㄴ 은 교과서 정리를 그대로 확인하고, 변별은 ㄷ 하나다. 평행 관계가 「직선-평면-직선」으로 이어질 때 추이성이 깨진다는 것을 반례 도형으로 보여야 한다. 추상 대상(일반 직선·평면)이라 Mₐ 3. 확인체크 ★1 출발 + 통찰 1 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "각 명제를 정육면체 안의 배치로 옮김 → ㄱ·ㄴ 은 정리로 참 → ㄷ 은 한 평면에 평행한 두 직선이 꼬인 위치가 되는 반례로 거짓"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "ㄱ, ㄴ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/90-167.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수치가 없는 명제형. 변형 축은 보기의 개수(3→4·5)와 참인 보기 비율이다."
    creative: "(1) 보기를 수직 쪽으로만 모으기 — l⊥α, m⊥β, α∥β → l∥m 등(★2 유지) (2) 평행과 수직을 섞어 「l⊥m, m∥α 이면 l⊥α」류 거짓 명제를 늘리면 반례가 둘 이상 필요해 I-MI depth 2 · ★3 (3) 참인 것의 개수만 묻는 5지선다로 바꾸면 부분 판단이 안 통해 체감 ★ 가 +0.5 정도 올라간다."
```

```yaml
- id: GN-GEO-91-e5
  page: 91
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    정육면체에서 ⑴ 직선 BE 와 CG ⑵ 직선 BE 와 AC ⑶ 직선 AD 와 BE 가 이루는 각의 크기.
  category: "꼬인 위치 두 직선이 이루는 각(평행이동 후 각 읽기)"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "꼬인 위치에 있는 두 직선이 이루는 각(평행이동)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ CG∥BF 로 옮기면 정사각형의 대각선과 변이 이루는 45°, ⑵ AC∥EG 로 옮기면 면대각선 셋으로 된 정삼각형 BEG 의 60°, ⑶ AD∥BC 이고 BC 가 면 ABFE 에 수직이라 90°. 이 단원의 도구를 정의 그대로 처음 쓰는 필수 예제라 절차형. [분류 이슈] 통찰 0 · M_total 5 로 −1 후보지만 소문항 3개가 45°·60°·90° 세 갈래를 모두 훑어 필수 신호 ★2 를 유지했다.
  tier: star_2
  mechanism_primary: "한 직선을 평행이동해 한 점에서 만나게 함 → 정사각형(45°)·정삼각형 BEG(60°)·면에 수직인 모서리(90°) 에서 각 읽기"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $45^\circ$ ⑵ $60^\circ$ ⑶ $90^\circ$'
  answer_source: "본문 풀이"
  figure: "crop:fig-91-e5.png"
  latex: latex-bank/gn-geo/items/91-e5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각이 모두 도형 자체로 결정돼 모서리 길이는 답에 영향이 없다. 수치 변형은 정육면체를 가로·세로·높이가 다른 직육면체로 바꿀 때만 의미가 있고 그때는 답이 특수각이 아니게 되므로 cos 값을 묻도록 발문을 바꿔야 한다."
    creative: "(1) 모서리·면대각선·공간대각선의 조합을 바꿔 소문항 세트를 새로 짜기(★2 유지) (2) 정육면체를 정사면체·정팔면체로 바꾸면 평행한 모서리를 찾는 단계가 늘어 I-RT 1개 · ★2~3 (3) 「이루는 각이 60° 인 모서리 쌍의 개수」로 물으면 전수 분류가 붙어 I-MI · ★3~4."
```

```yaml
- id: GN-GEO-91-168
  page: 91
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    정육면체에서 ⑴ 직선 AF 와 BG ⑵ 직선 AG 와 CF 가 이루는 각의 크기.
  category: "꼬인 위치 두 직선이 이루는 각(면대각선 정삼각형 · 직선과 평면의 수직 경유)"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "⑵ 는 평행이동으로 삼각형이 안 만들어져, 두 직선의 수직을 CF⊥(평면 ABGH) 로 바꾼 뒤 평면 위의 AG 와 자동으로 수직임을 쓴다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "꼬인 위치에 있는 두 직선이 이루는 각(평행이동 · 평면 수직 경유)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 e5 와 같은 골조로 면대각선 세 개가 정삼각형을 이뤄 60°. ⑵ 가 이 문항의 변별점으로, 공간대각선 AG 는 평행이동으로 CF 와 만나게 하기가 어렵고 CF⊥BG·CF⊥AB 에서 CF⊥(평면 ABGH) 를 얻어 평면 위 AG 와 수직이라고 끝내는 길이 실질적으로 유일하다. 확인체크 ★1 출발 + 통찰 1(depth 2) → ★2.
  tier: star_2
  mechanism_primary: "⑴ AF∥DG 로 옮겨 면대각선 정삼각형 → 60° · ⑵ CF⊥BG, CF⊥AB → CF⊥(평면 ABGH) → 평면 위 AG 와 90°"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $60^\circ$ ⑵ $90^\circ$'
  answer_source: "답지"
  figure: "crop:fig-91-168.png"
  latex: latex-bank/gn-geo/items/91-168.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정육면체라 모서리 길이는 각에 영향이 없다. 직육면체로 바꾸면 ⑴ 의 60° 가 깨지고 ⑵ 의 90° 는 밑면이 정사각형일 때만 남는다 — 수치 변형 시 이 두 조건을 먼저 고정한다."
    creative: "(1) ⑵ 의 쌍을 AG·BD, AG·EC 등 다른 「공간대각선 vs 면대각선」으로 바꾸기(★2 유지 · 같은 평면 수직 경유) (2) ⑵ 를 증명형(수직임을 보이시오)으로 바꾸면 논증 서술이 붙어 ★3 (3) 공간대각선 AG 와 수직인 면대각선을 모두 찾게 하면 I-MI 가 더해져 ★3~4."
```

```yaml
- id: GN-GEO-91-169
  page: 91
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    밑면이 정삼각형이고 옆면이 모두 정사각형인 삼각기둥에서 직선 AF 와 BC 가 이루는 각 θ 에 대한 cos θ.
  category: "꼬인 위치 두 직선이 이루는 각(평행이동 후 코사인법칙)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "BC∥EF 로 옮겨 공간의 각 문제를 삼각형 AEF 의 세 변 길이(√2, √2, 1) 문제로 바꿈"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "꼬인 위치에 있는 두 직선이 이루는 각(코사인법칙)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    각이 특수각이 아니어서 e5 처럼 읽어낼 수 없고, 평행이동으로 만든 이등변삼각형에서 코사인법칙을 써야 한다. 세 변이 면대각선·면대각선·모서리로 갈리는 것을 확인하는 계산이 한 겹 붙어 Mₖ 2. 확인체크 ★1 출발 + 통찰 1 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "BC∥EF 로 평행이동 → 삼각형 AEF 의 세 변(AE·AF 는 정사각형 대각선, EF 는 밑면 모서리) → 코사인법칙으로 cos θ"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{\sqrt{2}}{4}$'
  answer_source: "답지"
  figure: "crop:fig-91-169.png"
  latex: latex-bank/gn-geo/items/91-169.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑면 모서리 1 · 높이 1(옆면 정사각형)이 답을 √2/4 로 만든다. 옆면을 정사각형이 아닌 직사각형(높이 h)으로 풀면 cos θ = 1/(2√(1+h²)) 이 되므로 h 를 1·√3·2 처럼 근호가 정리되는 값으로만 바꾼다."
    creative: "(1) 같은 기둥에서 AF 와 BE, AE 와 CF 등 다른 쌍으로 바꾸기(★2 유지) (2) 정육각기둥으로 바꾸면 평행한 모서리 찾기가 한 단계 늘어 ★3 (3) cos θ 대신 삼각형 AEF 의 넓이나 두 직선 사이의 거리를 물으면 공통수선 골조가 붙어 ★4."
```

### 연습문제 STEP 1

```yaml
- id: GN-GEO-92-170
  page: 92
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    사면체에서 두 삼각형 ABC, ACD 의 무게중심을 각각 P, Q 라 할 때 보기 ㄱ(AD 와 BC) · ㄴ(CD 와 BQ) · ㄷ(PQ 와 BD) 중 꼬인 위치인 것 고르기.
  category: "공간 두 직선의 위치관계 판정(무게중심 비율 → 평행 확인)"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 3
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "ㄷ 에서 두 무게중심 조건을 「AC 의 중점 M 에서 MP:PB = MQ:QD = 1:2」로 옮겨 삼각형 MBD 의 닮음으로 PQ∥BD 를 끌어냄"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "공간 두 직선의 위치관계(꼬인 위치) 판정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ㄱ·ㄴ 은 만나지도 평행하지도 않음을 그림에서 바로 확인한다. 변별은 ㄷ 로, P·Q 가 같은 중선 기준선 AC 의 중점 M 에서 같은 비로 잡히므로 PQ∥BD 가 되어 꼬인 위치가 아니다. 무게중심의 2:1 성질을 위치관계 판정에 쓰는 한 겹이 더 있다. [분류 이슈] 실질 난도는 STEP 2 급이지만 통찰 1개·depth 2 라 +1 조건에 못 미쳐 STEP 1 출발점 ★2 를 유지했다(후보 ★3).
  tier: star_2
  mechanism_primary: "꼬인 위치 = 만나지도 평행하지도 않음 → ㄱ·ㄴ 은 그림에서 확인 → ㄷ 는 무게중심 2:1 로 PQ∥BD 이므로 제외"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "ㄱ, ㄴ"
  answer_source: "답지"
  figure: "crop:fig-92-170.png"
  latex: latex-bank/gn-geo/items/92-170.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "길이가 안 쓰이고 무게중심의 비 2:1 만 쓴다. 수치 변형을 하려면 P·Q 를 「AC 를 1:2 로 내분하는 점에서 같은 비로 잡은 점」처럼 일반 비 k:(1−k) 로 바꾸되, 두 점의 비가 같아야 PQ∥BD 가 유지된다는 제약을 지킨다."
    creative: "(1) P·Q 를 무게중심 대신 각 면의 내심·수심으로 바꾸면 ㄷ 의 평행이 깨져 답이 달라진다(★3) (2) 보기를 평행·만남·꼬인 위치 셋으로 분류하게 하면 I-MI 가 더해져 ★3 (3) PQ 의 길이(=BD 의 1/3)를 묻는 계산형으로 바꾸면 절차형 ★2."
```

```yaml
- id: GN-GEO-92-171
  page: 92
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    공간의 서로 다른 세 직선 $l$, $m$, $n$ 과 서로 다른 두 평면 $\alpha$, $\beta$ 에 대한 네 명제(ㄱ 평행의 추이성 · ㄴ 수직의 추이성 · ㄷ 한 직선에 평행한 두 평면 · ㄹ 직선과 평면의 수직) 중 옳은 것 고르기.
  category: "공간 위치관계 명제 참·거짓(반례 구성)"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "ㄴ·ㄹ 에서 수직 관계가 남기는 배치가 평행·수직·꼬인 위치로 여러 갈래임을 모두 따져 반례를 잡음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "직선과 평면의 평행·수직 명제 참거짓(보기형)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    참인 것은 평면에서와 달리 공간에서도 성립하는 ㄱ 하나뿐이고, 나머지 셋은 정육면체 안에서 반례를 하나씩 만들면 된다. 평면기하의 직관(수직의 추이성)을 공간에서 그대로 쓰면 틀리는 지점이 함정이다. STEP 1 ★2 출발 + 통찰 1 → ★2.
  tier: star_2
  mechanism_primary: "각 명제를 정육면체 배치로 옮김 → ㄱ 만 참 → ㄴ·ㄷ·ㄹ 은 꼬인 위치·교차하는 평면 반례로 거짓"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "ㄱ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/92-171.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수치가 없는 명제형. 변형 축은 보기 개수와 참·거짓 비율이며, 참인 보기가 하나뿐일 때 체감 난도가 가장 높다."
    creative: "(1) 90-167 과 보기를 섞어 직선-직선·직선-평면·평면-평면 세 층에서 하나씩 뽑기(★2 유지) (2) 거짓인 명제에 대해 반례를 그림으로 제시하게 하면 서술형 ★3 (3) 「항상 옳은 것의 개수」를 묻고 보기를 6개로 늘리면 I-MI depth 2 · ★3."
```

```yaml
- id: GN-GEO-92-172
  page: 92
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    정팔면체에서 직선 AD 와 직선 CF 가 이루는 각의 크기.
  category: "꼬인 위치 두 직선이 이루는 각(평행한 모서리 찾아 정삼각형 면으로 환원)"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "정팔면체에서 AD 와 평행한 모서리 BF 를 찾아 두 직선의 각을 정삼각형 면 BCF 의 한 내각으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "꼬인 위치에 있는 두 직선이 이루는 각(평행이동)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    정육면체와 달리 평행한 모서리가 이웃해 있지 않아, AD 와 마주 보는 모서리 BF 를 먼저 찾아야 한다. 옮기고 나면 면이 정삼각형이라 60° 로 끝난다. 계산은 없고 평행 모서리 탐색 한 단계가 핵심. STEP 1 ★2 출발 + 통찰 1 · M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "AD∥BF 를 찾음 → 각(AD, CF) = 각(BF, CF) → 정삼각형 면 BCF 의 내각 → 60°"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$60^\circ$'
  answer_source: "답지"
  figure: "crop:fig-92-172.png"
  latex: latex-bank/gn-geo/items/92-172.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정팔면체는 모든 모서리가 같아 길이가 답에 영향이 없다. 수치를 넣으려면 「모서리 4 인 정팔면체에서 두 직선 사이의 거리·삼각형 BCF 의 넓이」처럼 길이를 묻는 발문으로 바꾸고 근호가 정리되는 모서리만 쓴다."
    creative: "(1) 모서리 쌍을 AB·DE, AC·BF 등으로 바꾸면 60°·90°·평행이 골고루 나와 세트 구성 가능(★2 유지) (2) 「이루는 각이 90° 인 모서리 쌍의 개수」로 물으면 전수 분류가 붙어 I-MI · ★3 (3) 정팔면체를 정육면체 안에 끼워(면의 중심 잇기) 좌표로 확인하게 하면 I-RT depth 2 · ★3."
```

```yaml
- id: GN-GEO-92-173
  page: 92
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    정육면체에서 직선 DF 와 직선 HE 가 이루는 각 θ 에 대한 cos θ.
  category: "꼬인 위치 두 직선이 이루는 각(공간대각선 · 직각삼각형)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "HE∥DA 로 옮겨 공간대각선과 모서리의 각을 직각삼각형 ADF(∠A = 90°)의 밑변·빗변 비로 바꿈"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "꼬인 위치에 있는 두 직선이 이루는 각(공간대각선)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    특수각이 아니라 삼각비로 답해야 한다. 옮긴 뒤 AD 가 면 ABFE 에 수직이라 삼각형 ADF 가 직각삼각형이 되고, 모서리:공간대각선 = 1:√3 에서 cos θ = √3/3 이 바로 나온다. 코사인법칙까지 가지 않고 직각을 찾는 것이 단축점. STEP 1 ★2 출발 + 통찰 1 → ★2.
  tier: star_2
  mechanism_primary: "HE∥DA 로 평행이동 → AD⊥(면 ABFE) 로 삼각형 ADF 가 직각삼각형 → cos θ = AD/DF = 1/√3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{\sqrt{3}}{3}$'
  answer_source: "답지"
  figure: "crop:fig-92-173.png"
  latex: latex-bank/gn-geo/items/92-173.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정육면체라 모서리 길이는 상쇄된다. 직육면체(a×a×h)로 바꾸면 cos θ = a/√(2a²+h²) 이므로 (a, h) 를 (1,1)·(1,√2)·(2,1) 처럼 근호가 정리되는 쌍으로만 잡는다."
    creative: "(1) 상대 직선을 면대각선(HG·EG)으로 바꾸면 직각이 사라져 코사인법칙이 필요해지고 ★3 (2) sin θ 나 tan θ 를 묻기(★2 유지) (3) 「공간대각선이 각 모서리와 이루는 각이 모두 같음」을 보이게 하면 I-SYM 이 붙어 ★3~4."
```

### 연습문제 STEP 2

```yaml
- id: GN-GEO-93-174
  page: 93
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    정육면체의 8개 꼭짓점과 12개 모서리를 연장한 직선으로 만들 수 있는 서로 다른 평면의 개수.
  category: "공간에서 평면이 결정되는 조건 → 중복 없이 분류해 세기"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-SC
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "8점에서 3점을 뽑는 56가지에서 공면·중복을 빼는 길과, 면·대각 단면·모서리 절단면으로 유형을 나눠 직접 세는 길 중 효율적인 쪽을 골라야 함"
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "같은 평면이 여러 3점 조합·여러 평행 직선쌍에서 거듭 나오는 경우를 모두 따져 6(면)+6(대각 단면)+8(꼭짓점 하나를 자르는 면)으로 빠짐·중복 없이 정리"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "공간도형에서 평면의 개수 세기(분류·중복 제거)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    개수 세기 문항이라 이 단원의 수직 도구는 거의 안 쓰고, 「서로 다른」 평면이 되도록 분류 기준을 세우는 것이 전부다. 면 6 · 마주 보는 모서리로 만드는 대각 단면 6 · 한 꼭짓점을 자르는 정삼각형 면 8 로 갈라야 20 이 나오고, 모서리를 연장한 직선쌍은 앞의 12개를 다시 만들 뿐이라는 확인이 필요하다. STEP 2 ★3 출발 + 통찰 2개 → ★4. [분류 이슈] 단원 골조와 어긋나는 조합·세기 문항이라 카탈로그에서는 별도 유형으로 세워야 한다.
  tier: star_4
  mechanism_primary: "평면 결정 조건(한 직선과 그 위에 없는 한 점 · 만나거나 평행한 두 직선) → 면 6 + 대각 단면 6 + 꼭짓점 절단면 8 → 중복 제거 → 20"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$20$"
  answer_source: "답지"
  figure: "crop:fig-93-174.png"
  latex: latex-bank/gn-geo/items/93-174.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정육면체라는 도형이 답 20 을 고정하므로 길이는 변형 대상이 아니다. 세는 대상을 바꾸는 것이 숫자 변형이다 — 직선의 개수(꼭짓점 2개로 만드는 직선 28개), 삼각형의 개수(56−12=44), 평면의 개수(20)."
    creative: "(1) 정사면체·정팔면체·삼각기둥으로 바꿔 같은 분류를 다시 하게 하기(도형에 따라 ★3~4) (2) 「서로 다른 평면」 대신 「서로 평행한 평면의 쌍」을 물으면 분류 축이 하나 늘어 ★4 (3) 세 점이 한 직선 위에 있는 경우가 생기도록 모서리의 중점을 후보에 추가하면 I-VF(부적합 조합 기각)가 붙어 ★5 에 근접."
```

```yaml
- id: GN-GEO-93-175
  page: 93
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    한 모서리의 길이가 $5$ 인 정사면체를 두 모서리 AC, BD 에 평행한 평면으로 자를 때 단면인 사각형 PQRS 의 둘레의 길이.
  category: "직선과 평면의 평행 → 교선의 평행 → 닮음비 상쇄로 둘레 일정"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「평면에 평행한 직선을 품은 평면의 교선은 그 직선과 평행」을 써서 PQ∥SR∥AC, QR∥PS∥BD 로 바꾸고, 두 닮음비 t 와 1−t 가 더해져 상쇄되므로 둘레가 자르는 위치와 무관함을 본다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "평행한 평면으로 자른 단면의 모양과 길이(교선의 평행)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    단면이 평행사변형임을 먼저 확정해야 하고, 그 뒤 PQ = 5t · QR = 5(1−t) 가 되어 둘레 2(PQ+QR) = 2·5 = 10 으로 자르는 위치와 상관없이 일정하다. 「자르는 위치가 안 주어졌는데 답이 하나」라는 점이 이 문항의 장치다. STEP 2 ★3 출발 · 통찰 1(depth 2) → ★3.
  tier: star_3
  mechanism_primary: "평면에 평행한 직선 → 교선도 평행 → 단면은 평행사변형 → PQ+QR = 5t + 5(1−t) = 5 → 둘레 10"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$10$"
  answer_source: "답지"
  figure: "crop:fig-93-175.png"
  latex: latex-bank/gn-geo/items/93-175.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모서리 5 → 임의의 a 로 바꾸면 둘레는 2a 다. 제약: 둘레가 자르는 위치와 무관하려면 AC = BD 여야 하므로, 정사면체가 아닌 사면체로 일반화할 때는 두 대변의 길이를 같게 두거나 답을 AC+BD 꼴로 받아야 한다."
    creative: "(1) 둘레 대신 단면의 넓이를 물으면 t(1−t) 가 남아 최댓값 문제가 되고 ★4 (2) AC⊥BD 인 사면체로 바꿔 단면이 직사각형임을 보이게 하면 수직 판정이 붙어 ★4 (3) 대변 길이가 다른 사면체(AC=6, BD=4)로 바꾸면 둘레가 위치에 따라 변해 「일정한가」를 판정하는 I-MI 문항이 되고 ★4."
```

```yaml
- id: GN-GEO-93-176
  page: 93
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    정육면체에서 두 선분 AC, BD 의 교점을 M 이라 할 때 직선 FH 와 직선 EM 이 이루는 각의 크기.
  category: "두 직선의 수직을 직선과 평면의 수직으로 환원"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "EM 을 평행이동해도 FH 와 삼각형이 안 만들어지므로, M 이 AC 위에 있다는 사실로 EM 이 대각 단면 ACGE 안에 있음을 보고 FH⊥(평면 ACGE) 로 바꿔 푼다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "두 직선의 수직 판정(직선과 평면의 수직 경유)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    FH⊥EG(정사각형 대각선)와 FH⊥CG(밑면에 수직인 모서리)에서 FH⊥(평면 ACGE) 를 얻고, M 이 AC 의 중점이라 E·M 이 모두 그 평면 위에 있으므로 EM 은 평면 위의 직선 → 90°. 평행이동으로는 길이 계산이 지저분해지는데 평면 수직으로 가면 계산 없이 끝나는 것이 단축점. STEP 2 ★3 출발 · 통찰 1(depth 2) → ★3.
  tier: star_3
  mechanism_primary: "FH⊥EG, FH⊥CG → FH⊥(평면 ACGE) → M∈AC 이므로 EM 은 그 평면 위의 직선 → 90°"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$90^\circ$'
  answer_source: "답지"
  figure: "crop:fig-93-176.png"
  latex: latex-bank/gn-geo/items/93-176.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정육면체라 모서리 길이는 답에 영향이 없다. 「모서리 4 일 때 EM 의 길이」처럼 계산을 붙이려면 EM = √(모서리² + (대각선/2)²) 이 근호로 정리되는 모서리만 쓴다."
    creative: "(1) M 을 AC 의 중점이 아니라 윗면 위의 다른 점(AB 의 중점 등)으로 옮기면 평면 ACGE 를 벗어나 90° 가 깨지고 코사인법칙 문항 ★4 가 된다 (2) 상대 직선을 EG 로 바꾸면 같은 평면 안이라 각이 달라진다(★3) (3) 「FH 와 수직인 직선을 보기에서 모두 고르기」로 바꾸면 I-MI 가 더해져 ★4."
```

### 연습문제 실력 UP

```yaml
- id: GN-GEO-93-177
  page: 93
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    꼬인 위치에 있는 두 직선 사이의 거리는 공통인 수선의 길이라는 정의가 주어질 때, 한 모서리의 길이가 $1$ 인 정사면체에서 두 모서리 AB, CD 사이의 거리.
  category: "꼬인 위치 두 직선 사이의 거리(공통수선을 중점 연결선으로 잡기)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "정사면체가 두 대변 AB, CD 에 대해 대칭이라는 점에서 공통수선이 두 모서리의 중점 M, N 을 잇는 선분임을 곧바로 잡음"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「두 직선 사이의 거리」를 「MN⊥AB 이고 MN⊥CD 인 선분 MN 의 길이」로 옮겨 직각삼각형 CMN 계산으로 환원"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "꼬인 위치에 있는 두 직선 사이의 거리(공통수선)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    공통수선을 「어디에 있는지」부터 찾아야 하는 것이 이 문항의 전부다. 두 정삼각형의 중선 성질로 CM⊥AB, DM⊥AB 를 얻으면 AB⊥(평면 CDM) 이고, 이등변삼각형 CDM 의 중선 MN 이 CD 와도 수직이 되어 MN 이 공통수선이다. 길이는 직각삼각형 CMN 에서 한 줄. 실력 UP ★4 출발 · 통찰 2개(SYM 포함) → ★4.
  tier: star_4
  mechanism_primary: "M, N 을 AB, CD 의 중점으로 잡음 → AB⊥(평면 CDM) → 이등변삼각형 CDM 의 중선 MN⊥CD → 직각삼각형 CMN 에서 MN"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{\sqrt{2}}{2}$'
  answer_source: "답지"
  figure: "crop:fig-93-177.png"
  latex: latex-bank/gn-geo/items/93-177.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모서리 1 → a 로 바꾸면 거리는 (√2/2)a 다. 제약: 답이 근호 한 겹으로 정리되도록 a 는 정수나 √2 의 배수로 잡는다. 정사면체가 아닌 사면체로 바꾸면 중점 연결선이 공통수선이 되는 대칭이 깨지므로 AC=AD, BC=BD 조건은 유지한다."
    creative: "(1) 같은 도형에서 「AB 와 CD 를 품는 두 평행한 평면 사이의 거리」로 물으면 같은 답에 평면 평행 골조가 더해져 ★4 (2) 정육면체의 꼬인 두 모서리(AB 와 GH 등)로 바꾸면 공통수선이 모서리 자체가 되어 ★2 로 내려간다 (3) MN 의 길이 대신 사면체의 부피를 (1/6)·AB·CD·MN·sin θ 로 잇게 하면 I-XU 가 붙어 ★5 후보."
```

```yaml
- id: GN-GEO-93-178
  page: 93
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    한 모서리의 길이가 $6$ 인 정육면체에서 P 는 BD 위, Q 는 AG 위의 점이고 PQ 가 BD 와 AG 에 각각 수직일 때 선분 PQ 의 길이.
  category: "꼬인 위치 두 직선 사이의 거리(평면 수직으로 수선의 발 확정 후 평면 계산)"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: []
      description: "「PQ⊥BD 이고 Q 가 AG 위」라는 조건을 BD⊥(평면 ACGE) 로 바꿔, P 가 BD 와 그 평면의 교점 즉 AC 와 BD 의 교점으로 확정됨을 끌어냄"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "공간 문제를 대각 단면 ACGE(가로 6√2 · 세로 6 인 직사각형) 한 장의 평면 문제로 옮겨, P 에서 대각선 AG 에 내린 수선의 길이를 삼각형 넓이 관계로 구함"
  insight_count: 2
  depth_score: 2.50
  type_id: null
  type_hint: "꼬인 위치에 있는 두 직선 사이의 거리(공통수선)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    P 의 위치가 주어지지 않아 역으로 확정해야 한다. BD⊥AC, BD⊥AE 에서 BD⊥(평면 ACGE) 이고 AG 가 그 평면 안에 있으므로, BD 위의 점 중 평면 위의 점 즉 AC∩BD 만이 P 가 될 수 있다. 그 뒤는 직사각형 ACGE 안에서 삼각형 APG 의 넓이로 PQ 를 뽑는 평면 계산이다. 실력 UP ★4 출발 · 통찰 2개(depth 3 포함) → ★4. ★5 는 통찰 3개 이상을 요구해 해당 없음.
  tier: star_4
  mechanism_primary: "BD⊥AC, BD⊥AE → BD⊥(평면 ACGE) → P = AC∩BD 로 확정 → 직사각형 ACGE 에서 P 와 대각선 AG 의 거리(넓이 관계) → PQ"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\sqrt{6}$'
  answer_source: "답지"
  figure: "crop:fig-93-178.png"
  latex: latex-bank/gn-geo/items/93-178.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모서리 6 → a 로 바꾸면 PQ = (√6/6)a 다. 제약: 답이 √ 한 겹으로 떨어지려면 a 를 6 의 배수(또는 √6 이 약분되는 값)로 잡는다. 직육면체로 일반화하면 BD⊥(평면 ACGE) 가 깨지므로 밑면은 정사각형으로 고정한다."
    creative: "(1) 상대 직선을 다른 공간대각선(BH·CE)으로 바꿔 같은 골조를 반복(★4 유지) (2) PQ 의 길이 대신 점 P 의 위치(BD 를 몇 대 몇으로 나누는지)를 물으면 역추적이 겉으로 드러나 ★4 (3) 밑면을 직사각형으로 바꾸면 P 가 교점으로 확정되지 않아 매개변수 두 개를 세우고 최솟값을 찾아야 해 I-SC 가 붙고 ★5 후보."
```

## 표본 판정 요약 (15문)

- ★ 분포: ★1 0 · ★2 10 · ★3 2 · ★4 3 · ★5 0
- 통찰형 12 · 절차형 3 · premium 0
- 통찰 유형 분포: I-RT 5 · I-EQV 5 · I-MI 3 · I-SC 1 · I-SYM 1 (총 15개 라벨 / 12문)
- M_total 분포: 5 가 3문 · 6 이 8문 · 7 이 2문 · 8 이 1문 · 9 가 1문 (평균 6.3)
- type_hint 상위: 「꼬인 위치에 있는 두 직선이 이루는 각」 계열 5(평행이동 2 · 평면 수직 경유 1 · 코사인법칙 1 · 공간대각선 1) · 「직선과 평면의 수직 판정(만나는 두 직선과의 수직으로 증명)」 2 · 「직선과 평면의 평행·수직 명제 참거짓(보기형)」 2 · 「꼬인 위치에 있는 두 직선 사이의 거리(공통수선)」 2 · 나머지 4 유형(위치관계 판정 · 평면 개수 세기 · 단면 길이 · 두 직선 수직 판정) 각 1
- 대상층: 중하위권 3 · 중위권 9 · 중상위권 3
- 그림: 13문(90-167 · 92-171 만 그림 없음 — 둘 다 일반 직선·평면 명제형)
- 이 범위에 ★1 이 없다. 확인체크 4문이 모두 예제 직후 적용이지만, 수직 판정 정리를 두 갈래 근거로 모으거나(90-166) 평면 수직을 경유하거나(91-168) 코사인법칙을 붙여야 해서(91-169) 단순 개념 확인에서 한 단계씩 올라가 있다.
- 단원 골조는 셋으로 수렴한다 — (1) 만나는 두 직선과의 수직으로 평면과의 수직을 판정하고 그 평면 위 모든 직선과 수직임을 쓰는 사슬, (2) 꼬인 위치 두 직선을 평행이동해 정사각형·정삼각형·직각삼각형으로 옮기는 사슬, (3) 두 직선의 수직·거리를 (1) 로 환원하는 사슬. 실력 UP 2문은 (3) 의 같은 골조를 정사면체와 정육면체에서 한 번씩 돌린 쌍이다.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-GEO-90-166 | 확인체크(★1 출발)인데 수직 근거가 두 갈래(정사각형 대각선 + 밑면에 수직인 모서리)라 +1 해 ★2 로 둠. 규칙상 +1 조건(통찰 2개·depth 3)에는 못 미침 | ★1 / ★2 |
| GN-GEO-91-e5 | 필수 예제(★2)이나 통찰 0 · M_total 5 로 −1 후보. 소문항 3개가 45°·60°·90° 세 갈래를 모두 훑어 벤더 신호를 유지함 | ★1 / ★2 |
| GN-GEO-92-170 | ㄷ(무게중심 2:1 → PQ∥BD)의 실질 난도는 STEP 2 급이지만 통찰 1개·depth 2 라 +1 조건 미충족 → STEP 1 출발점 ★2 유지 | ★2 / ★3 |
| GN-GEO-93-174 | 이 단원의 수직 도구를 쓰지 않는 개수 세기·조합 문항. 단원 골조와 어긋나 type_hint 를 별도 유형으로 세워야 하고, STEP 2(★3)보다 1단 높은 ★4 로 판정 | ★3 / ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: ① 「꼬인 위치 두 직선이 이루는 각」은 답이 특수각으로 읽히는 것(91-e5 · 91-168⑴ · 92-172)과 코사인법칙·직각삼각형 계산이 필요한 것(91-169 · 92-173)의 체감이 달라 base ★ 가 각각 2 와 2~3 으로 갈린다. ② 「두 직선의 수직을 직선-평면 수직으로 환원」(91-168⑵ · 93-176 · 93-178)은 앞의 각 구하기와 도구가 달라 별도 유형이어야 한다. ③ 93-174 의 평면 개수 세기는 이 단원이 아니라 「공간도형의 위치관계·조합」쪽 유형이다.
- **통합해도 될 유형**: 90-167 과 92-171 의 명제 참거짓 보기형은 보기 개수만 다를 뿐 골조가 같아 한 유형(base ★2)으로 묶어도 된다. 93-177 과 93-178 의 공통수선 문항도 도형만 다르고 「대칭 또는 평면 수직으로 수선의 발을 확정 → 평면 계산」으로 같아 한 유형(base ★4)으로 묶인다.
- **반복 type_hint**: 「꼬인 위치에 있는 두 직선이 이루는 각(평행이동)」이 이 범위에서 가장 자주 나오며(4문 + 변형 2문), 이 단원의 대표 유형으로 카탈로그 앵커를 잡기에 적합하다.
