---
name: mechanism-데이터-GN-M32-11-p1
description: 개념원리 중학 3-2 11 접선과 현이 이루는 각 (1/2 · 101~105쪽 20문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 중학 3-2 · 전사본 latex-bank/gn-m32
  section: 11 접선과 현이 이루는 각
  unit_code: GN-M32-11
  part: "1/2"
  extract_range: "101~105쪽 · 101-01~105-05"
  total_problems: 20
  unit_total: 52
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). insight_type 은 insights 가 비면 절차형, 하나라도 있으면 통찰형. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-m32/items.json (원본 전사) · latex-bank/gn-m32/items/<id>.tex
  image_source: latex-bank/gn-m32/figures/ (crop 파일)
---

# 개념원리 중학 3-2 · 11 접선과 현이 이루는 각 (1/2) 정독 데이터 (v1.0)

이 파일은 「11 접선과 현이 이루는 각」 101~105쪽의 20문항(개념원리 확인하기 3 · 핵심문제 익히기 12 · 이런 문제가 시험에 나온다 5)을 다룬다. 개념원리 중학은 문항별 난이도 표기(하~상)가 없고 **구역 자체가 난이도 층**이다. 「개념원리 확인하기」는 개념 직후 확인(★1 출발), 「핵심문제 익히기」는 유형 제목이 붙은 핵심문제(`쪽-hN`)와 그 유제인 확인문제(`쪽-cN`)가 쌍을 이루며(★2 출발), 「이런 문제가 시험에 나온다」는 단원 끝 시험 대비(★2~3 출발)다. 이 범위에는 태그(`꼭나와`·`UP`)가 하나도 붙어 있지 않다.

이 단원의 도구는 사실상 하나다 — **∠(접선, 현) = 그 각 안에 있는 호의 원주각**. 난이도 차이는 도구의 개수가 아니라 **주어진 각을 그 도구가 먹을 수 있는 자리로 옮기는 경로의 길이**에서 나온다. 옮기는 다리는 네 종류뿐이고 이 범위가 정확히 그 네 가지로 나뉜다 — ① 중심각·지름(반원에 대한 원주각 90°) ② 원에 내접하는 사각형의 대각 ③ 원 밖 한 점에서 그은 두 접선이 만드는 이등변삼각형 ④ 두 원의 공통접선 위의 맞꼭지각(→ 엇각 → 두 현의 평행 → 닮음). 그래서 통찰 라벨은 대부분 I-EQV(조건의 동치 변환)이고, 다른 단원의 도구가 실제로 끼어드는 103-c4(내접원)·105-03(특수각 직각삼각형)에서만 I-XU·I-RT 가 붙는다.

이 파일의 주 용도는 **숫자 변형·창의 변형의 원본**이므로 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 · 골조 유지 변형)를 채웠다. 이 단원의 변형은 **수보다 그림이 먼저**라는 점이 특징이다 — 각도 하나만 바꿔도 접점·호의 배치가 그대로면 답이 따라오지만, 「어느 쪽 접선인가」·「두 원이 접선의 같은 쪽인가 반대쪽인가」를 바꾸면 골조 자체가 다른 유형이 된다.

## 문항 데이터

### 개념원리 확인하기

```yaml
- id: GN-M32-101-01
  page: 101
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    직선 TT'이 점 B 에서 원에 접하고 A·C 가 원 위의 점일 때, 네 각 등식의 참·거짓을 ○× 로 판정.
    ⑴ ∠ABT=∠ACB ⑵ ∠ACB=∠CBT' ⑶ ∠CAB=∠ABT ⑷ ∠CBT'=∠CAB.
  category: "접선과 현이 이루는 각 → 접선의 어느 쪽·어느 호인지 대응 확인"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "접선과 현이 이루는 각 — 대응하는 원주각 판별(○×)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    접점 B 에서 T 쪽 각은 그 각 안의 호 AB 의 원주각 ∠ACB 와, T' 쪽 각은 호 CB 의 원주각 ∠CAB 와 짝이 된다.
    ⑵⑶ 은 접선의 방향과 호를 어긋나게 짝지은 것이라 ×. 규칙을 방향별로 한 번씩 확인하는 개념 직후 문항이다.
    방향·호 대응 혼동(T-표기)만 함정으로 잡아 Mₜ=1. 확인하기 구역·통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "접선의 두 방향 각각에서 ∠(접선, 현) = 그 각 안에 있는 호의 원주각 → 네 등식을 대조"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ ○ ⑵ × ⑶ × ⑷ ○'
  answer_source: "답지"
  figure: "crop:fig-101-01.png"
  latex: latex-bank/gn-m32/items/101-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수치가 없는 판정 문항이라 바꿀 것은 각이 아니라 등식의 조합이다. 제약 — 접점 B·접선의 두 방향 T·T'·원 위의 두 점 A(왼쪽 위)·C(오른쪽 위) 배치는 그림 고정이므로 등식에 쓰는 꼭짓점 이름을 바꾸려면 그림을 다시 만들어야 한다. 참 2·거짓 2 의 균형은 유지."
    creative: "(1) ○× 대신 「옳은 것을 모두 고르시오」 5지선다(★1 유지) (2) 한 등식이 참이 되게 하는 추가 조건을 묻는 역방향(★2 · I-BW) (3) 접점이 둘인 두 접선 그림으로 옮기면 접선 길이·이등변이 결합돼 ★3(105-04 골조)."
```

```yaml
- id: GN-M32-101-02
  page: 101
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    ⑴~⑷ 직선 AT 가 점 A 에서 원 O 에 접하는 네 그림에서 ∠x 구하기.
    ⑴ 원주각 100° 가 주어져 접현각이 바로 나오는 형 ⑵ 접점 A 에 두 접현각 75°·60° 가 놓인 형
    ⑶ 접현각 35° 와 ∠BAC=70° ⑷ ∠BCA=85° 와 ∠BAC=25° 로, ⑶⑷ 는 삼각형 내각의 합이 한 번 더 필요하다.
  category: "접선과 현이 이루는 각 → 원주각 대응 → (필요하면) 삼각형 내각의 합"
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "접선과 현이 이루는 각 — ∠x 구하기(기본 4형)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴⑵ 는 접현각과 원주각을 한 번 대응시키면 끝나고, ⑶⑷ 는 대응시킨 각을 삼각형 내각의 합에 한 번 넣는다.
    네 그림이 접선·현·원주각의 배치를 조금씩 바꿔 「어느 각이 어느 호의 원주각인가」만 반복 훈련시킨다.
    확인하기 구역·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "∠(접선 AT, 현) = 그 각 안의 호의 원주각 → 필요하면 △ABC 내각의 합으로 남은 각"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $100^\circ$ ⑵ $60^\circ$ ⑶ $75^\circ$ ⑷ $70^\circ$'
  answer_source: "답지"
  figure: "crop:fig-101-02.png"
  latex: latex-bank/gn-m32/items/101-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 그림의 주어진 각을 자유롭게 바꿀 수 있다. 제약 — 삼각형 내각의 합이 필요한 ⑶⑷ 는 두 각의 합이 180° 미만이어야 하고, 접점 A 에 두 접현각이 놓인 ⑵ 는 두 각의 합이 180° 미만이어야 세 번째 각이 남는다. 그림의 점 배치(A 는 항상 접점·T 는 오른쪽)는 고정."
    creative: "(1) ∠x 대신 호에 대한 중심각을 묻기(★1~2) (2) 네 그림 중 하나를 「∠x=50° 가 되게 하는 원주각」 역방향으로(★2 · I-BW) (3) 한 그림에 지름을 그어 90° 를 끼워 넣으면 102-c1·103-h3 골조로 올라가 ★2."
```

```yaml
- id: GN-M32-101-03
  page: 101
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    공통접선 PQ 가 점 T 에서 두 원 O·O'에 접하고 A·T·C 와 B·T·D 가 각각 한 직선 위에 있다.
    ∠BAT=34°, ∠CDT=72° 일 때 ⑴ ∠BTQ ⑵ ∠DTP ⑶ ∠DCT ⑷ AB 와 평행한 선분.
  category: "접현각 → 맞꼭지각 → 반대쪽 원의 접현각 → 엇각으로 평행"
  M: {s: 3, k: 1, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 원의 공통접선 — 접현각·맞꼭지각으로 각 옮기기와 두 현의 평행"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    34° 하나가 ⑴ 접현각 → ⑵ 맞꼭지각 → ⑶ 반대쪽 원의 접현각으로 그대로 옮겨 가고, ⑷ 는 그 결과를 엇각으로 읽어 AB∥CD 를 얻는다.
    이 사슬이 104 핵심문제 전체의 씨앗이지만 여기서는 소문항이 순서를 그대로 깔아 주므로 통찰로 세지 않았다.
    주어진 ∠CDT=72° 는 ⑴~⑶ 에 쓰이지 않는 여분 조건이다. 확인하기 구역·통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "∠BTQ=∠BAT(접현각) → ∠DTP=∠BTQ(맞꼭지각) → ∠DCT=∠DTP(접현각) → 엇각이 같으므로 AB∥CD"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $34^\circ$ ⑵ $34^\circ$ ⑶ $34^\circ$ ⑷ $\seg{CD}$'
  answer_source: "답지"
  figure: "crop:fig-101-03.png"
  latex: latex-bank/gn-m32/items/101-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "∠BAT 를 다른 예각으로 바꾸면 ⑴⑵⑶ 이 모두 같은 값으로 따라간다. 제약 — ∠CDT 는 ⑷ 의 평행 판정에만 쓰이는 여분 조건이라 값이 무엇이든 답이 바뀌지 않으므로, 여분임을 숨기려면 ∠BTC 나 ∠ATB 를 묻는 소문항을 추가해야 한다. 두 원이 접선의 같은 쪽에 있는 배치는 고정."
    creative: "(1) 소문항 없이 ⑷ 만 묻는 증명형(★3 · 사슬을 스스로 세워야 함) (2) 두 원을 접선의 반대쪽에 놓으면 104-h6 배치가 되어 대응이 뒤집힘(★2) (3) AB∥CD 에서 △ABT∽△DCT 까지 이어 붙이면 105-05 골조로 ★3."
```

### 핵심문제 익히기

```yaml
- id: GN-M32-102-h1
  page: 102
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제 익히기"
  summary: |
    직선 AT 가 점 A 에서 원 O 에 접하고 ∠AOB=112° 일 때 ∠BAT.
  category: "중심각 → 원주각 → 접선과 현이 이루는 각"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "접선과 현이 이루는 각 (1) — 중심각·원주각과 함께 쓰기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    호 AB 의 중심각 112° → 원주각 56° → 접현각 ∠BAT=56°. 또는 △OAB 이등변에서 ∠OAB=34°, OA⊥AT 로 90°−34° 로도 두 줄에 끝난다.
    두 갈래가 있지만 어느 쪽을 잡아도 같은 길이라 I-SC 로 세지 않았다.
    [분류 이슈] 통찰 0·M_total 4 로 −1 후보이나 유형 대표문제라 구역 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "∠AOB=112° → 호 AB 의 원주각 56° → 접현각 ∠BAT=56° (또는 △OAB 이등변 + OA⊥AT)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$56^\circ$'
  answer_source: "본문 답"
  figure: "crop:fig-102-h1.png"
  latex: latex-bank/gn-m32/items/102-h1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "∠AOB 를 다른 값으로 바꾸면 된다. 제약 — 답이 정수 도(度)가 되려면 짝수여야 하고, 접현각이 예각으로 보이는 그림을 유지하려면 180° 미만의 우각이 아닌 값(여기서는 112°)을 쓴다. 180° 를 넘는 호를 쓰면 접현각이 둔각이 되어 그림을 다시 그려야 한다."
    creative: "(1) ∠BAT 를 주고 ∠AOB 를 묻는 역방향(★2 · I-BW) (2) 중심각 대신 ∠OAB 를 주면 이등변 단계가 앞에 붙어 ★2 유지 (3) 점 C 를 하나 더 얹어 ∠ACB 와 ∠BAT 가 같음을 설명하게 하면 서술형 ★3."
```

```yaml
- id: GN-M32-102-c1
  page: 102
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제 익히기"
  summary: |
    직선 AT 가 점 A 에서 원 O 에 접하고 AB 가 지름, ∠CBA=25° 일 때 ∠x, ∠y.
  category: "지름 → 직각 → 접현각으로 나머지 각"
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "접선과 현이 이루는 각 (1) — 지름·직각과 함께 쓰기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    AB 가 지름이라 반원에 대한 원주각(또는 접선⊥반지름)으로 ∠x=90° 가 즉시 나오고, ∠y 는 호 AC 의 원주각 ∠CBA 와 같은 접현각이라 25°.
    두 각이 서로 독립이라 순서 의존이 없다. 통찰 없음·M_total 5 → 유형 유제 구역 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "AB 가 지름 → ∠x=90°(반원의 원주각·접선⊥반지름) → 접현각 ∠y=호 AC 의 원주각 ∠CBA=25°"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\angle x=90^\circ$, $\angle y=25^\circ$'
  answer_source: "답지"
  figure: "crop:fig-102-c1.png"
  latex: latex-bank/gn-m32/items/102-c1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "∠CBA 만 바꿀 수 있다(∠x 는 지름 때문에 90° 로 고정). 제약 — ∠CBA 는 0°<∠CBA<90° 여야 C 가 그림의 호 위에 남는다. 지름 AB·접점 A 배치는 고정."
    creative: "(1) ∠x 를 빼고 ∠ACB 를 묻기(★1~2) (2) 지름을 AB 가 아니라 AC 로 옮기면 직각의 위치가 바뀌어 105-03 골조에 가까워짐(★3) (3) AB=10 같은 길이를 얹어 BC·AC 까지 구하게 하면 삼각비·피타고라스가 결합돼 ★3~4."
```

```yaml
- id: GN-M32-102-h2
  page: 102
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제 익히기"
  summary: |
    직선 AT 가 점 A 에서 원에 접하고 ∠ABD=50°, ∠BCD=110° 일 때 ∠BAT.
  category: "원에 내접하는 사각형의 대각 → 삼각형 내각의 합 → 접현각"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "∠BCD=110° 는 접현각에 바로 쓸 수 없으므로 내접사각형 ABCD 의 대각 관계로 ∠BAD=70° 로 옮겨 △ABD 를 만든다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "접선과 현이 이루는 각 (2) — 원에 내접하는 사각형과 결합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    주어진 두 각이 모두 접점 A 에서 멀어 그대로는 접현각에 닿지 않는다. 대각 합 180° 로 ∠BAD=70° 를 만들고 △ABD 내각의 합으로 ∠ADB=60° 를 얻으면 ∠BAT=∠ADB 로 끝난다.
    「멀리 있는 각을 접점 옆 삼각형으로 끌어오는」 이 단원의 두 번째 다리가 처음 등장하는 자리다.
    통찰 1개(EQV d1)·M_total 4 → 유형 구역 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "∠BCD=110° → 내접사각형 대각으로 ∠BAD=70° → △ABD 에서 ∠ADB=60° → 접현각 ∠BAT=∠ADB=60°"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$60^\circ$'
  answer_source: "본문 답"
  figure: "crop:fig-102-h2.png"
  latex: latex-bank/gn-m32/items/102-h2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "∠ABD 와 ∠BCD 를 바꿀 수 있다. 제약 — ∠BAD=180°−∠BCD 이므로 ∠ABD+(180°−∠BCD)<180°, 즉 ∠ABD<∠BCD 여야 ∠ADB 가 양수로 남는다. 네 점 A·B·C·D 의 원 위 순서는 그림 고정."
    creative: "(1) ∠BAT 를 주고 ∠BCD 를 묻는 역방향(★3 · I-BW) (2) ∠BCD 대신 호 BCD 의 중심각을 주면 다리가 하나 더 늘어 ★3 (3) 접점 반대쪽 접현각 ∠DAT' 까지 함께 물으면 102-c2 골조(★2, 평각 한 줄 추가)."
```

```yaml
- id: GN-M32-102-c2
  page: 102
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제 익히기"
  summary: |
    직선 AT 가 점 A 에서 원에 접하고 ∠DCB=80°, ∠DBA=35° 일 때 ∠x, ∠y.
  category: "내접사각형의 대각 → 삼각형 내각의 합 → 접선 양쪽의 접현각 둘"
  M: {s: 3, k: 1, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "∠DCB=80° 를 내접사각형의 대각으로 ∠DAB=100° 로 옮겨야 접점 A 의 평각이 세 조각으로 갈라지고 두 접현각을 동시에 쓸 수 있다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "접선과 현이 이루는 각 (2) — 원에 내접하는 사각형과 결합(접선 양쪽)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    102-h2 와 같은 다리를 쓰되 접점 A 의 접선 양쪽을 동시에 본다. ∠x 는 호 AD 쪽 접현각이라 ∠ABD=35°, ∠y 는 호 AB 쪽 접현각이라 ∠ADB=45°.
    ∠x+∠DAB+∠y=180° 로 평각 검산까지 되는 구조라 두 답이 서로를 확인해 준다.
    통찰 1개(EQV d1)·M_total 6 → 유제 구역 출발 ★2 유지.
  mechanism_primary: "∠DCB=80° → ∠DAB=100° → △ABD 에서 ∠ADB=45° → 접현각으로 ∠x=∠ABD=35°, ∠y=∠ADB=45°"
  tier: star_2
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\angle x=35^\circ$, $\angle y=45^\circ$'
  answer_source: "답지"
  figure: "crop:fig-102-c2.png"
  latex: latex-bank/gn-m32/items/102-c2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "∠DCB 와 ∠DBA 를 바꿀 수 있다. 제약 — ∠DBA<∠DCB 여야 ∠ADB>0 이고, ∠x+∠y=180°−∠DAB=∠DCB 가 항상 성립하므로 두 답의 합이 주어진 ∠DCB 와 같아야 한다(변형 검산식). 접점 A 가 아래 꼭짓점인 배치는 고정."
    creative: "(1) ∠x+∠y 만 묻기(내접사각형 대각만으로 한 줄에 끝나 ★2 이하) (2) ∠x 와 ∠y 의 비를 주고 ∠DBA 를 묻는 역방향(★3) (3) 점 C 를 접선 쪽으로 옮겨 사각형이 아닌 삼각형으로 만들면 다리가 사라져 ★1."
```

```yaml
- id: GN-M32-103-h3
  page: 103
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제 익히기"
  summary: |
    직선 PT 가 점 A 에서 원 O 에 접하고 CP 가 원의 중심을 지나며 ∠CAT=68° 일 때 ∠x, ∠y.
  category: "중심을 지나는 할선 → 지름의 원주각 90° → 접현각 → 삼각형 내각의 합"
  M: {s: 3, k: 1, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "CP 가 중심을 지난다를 지름으로 읽어 ∠CAB=90° 를 만들고, 68° 를 90° 와 ∠BAT=22° 로 쪼개야 접현각을 쓸 수 있는 각이 생긴다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "접선과 현이 이루는 각의 응용 (1) — 중심을 지나는 할선·지름과 결합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    주어진 ∠CAT=68° 자체로는 쓸 데가 없고, 지름에 대한 원주각 90° 를 끼워 ∠BAT=22° 를 만들어야 ∠x=∠ACB=22° 가 나온다.
    ∠y 는 △APC 에서 ∠CAP=180°−68°=112° 와 ∠ACP=22° 를 빼면 46°.
    통찰 1개(EQV d1)·M_total 6 → 유형 구역 출발 ★2 유지. 이 범위에서 「각을 쪼개는」 다리가 처음 나오는 자리라 c3 보다 체감은 위다.
  tier: star_2
  mechanism_primary: "CP 가 중심을 지남 → 지름의 원주각 ∠CAB=90° → ∠BAT=22° → 접현각 ∠x=∠ACB=22° → △APC 내각의 합으로 ∠y=46°"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\angle x=22^\circ$, $\angle y=46^\circ$'
  answer_source: "본문 답"
  figure: "crop:fig-103-h3.png"
  latex: latex-bank/gn-m32/items/103-h3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "∠CAT 만 바꾸면 된다. 제약 — 90° 를 쪼개 남는 ∠BAT 가 양수여야 하므로 ∠CAT<90° 이고, ∠y=90°−2·∠BAT 가 양수여야 하므로 ∠CAT>45°. 즉 45°<∠CAT<90° 안에서만 그림이 유지된다."
    creative: "(1) ∠y(=∠P)를 주고 ∠CAT 를 묻는 역방향(★3 · I-BW) (2) 중심 O 를 지나는 선을 접점 A 에서 그으면 90° 가 접선과 붙어 난도가 내려감(★2) (3) PA 와 PB 의 길이를 얹어 방멱·닮음까지 가면 중3 범위 밖이므로 대신 △APC 이등변 조건을 추가해 ∠CAT 를 결정하게 하면 ★3."
```

```yaml
- id: GN-M32-103-c3
  page: 103
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제 익히기"
  summary: |
    PT 가 점 T 에서 원 O 에 접하고 PB 가 원의 중심을 지나며 ∠PBT=27° 일 때 ∠x.
  category: "반지름 이등변 → 중심각 → 접선⊥반지름 → 직각삼각형 내각의 합"
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "접선과 현이 이루는 각의 응용 (1) — 중심을 지나는 할선·접선의 수직"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    OB=OT 이등변에서 ∠OTB=27° → 삼각형의 외각으로 ∠TOP=54° → OT⊥PT 이므로 직각삼각형 OTP 에서 ∠x=36°.
    [분류 이슈] 103-h3 의 유제인데 실제로는 접선과 현이 이루는 각을 한 번도 쓰지 않고 접선⊥반지름과 이등변만으로 끝나 단원 도구와 어긋난다(통찰 0·M_total 5 → −1 후보). 유제라 ★2 유지.
  tier: star_2
  mechanism_primary: "OB=OT 이등변 → ∠TOP=54°(외각) → OT⊥PT → △OTP 에서 ∠x=90°−54°=36°"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$36^\circ$'
  answer_source: "답지"
  figure: "crop:fig-103-c3.png"
  latex: latex-bank/gn-m32/items/103-c3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "∠PBT 만 바꾼다. 제약 — ∠x=90°−2·∠PBT 이므로 0°<∠PBT<45° 여야 P 가 원 밖에 남는다. 45° 를 넘으면 접선과 할선이 만나지 않는다."
    creative: "(1) ∠x 를 주고 ∠PBT 를 묻는 역방향(★2) (2) 접점 T 에서 현을 하나 더 그어 접현각을 실제로 쓰게 만들면 단원 도구와 맞고 ★3 (3) PT 와 PB 의 길이를 얹어 피타고라스로 반지름을 묻는 08 단원 결합(★3)."
```

```yaml
- id: GN-M32-103-h4
  page: 103
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제 익히기"
  summary: |
    반직선 PD, PE 가 각각 점 A, B 에서 원에 접하고 ∠APB=48°, ∠CAD=74° 일 때 ∠x.
  category: "두 접선의 길이가 같다 → 이등변삼각형의 밑각 → 접점의 평각 쪼개기"
  M: {s: 3, k: 1, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "PA=PB 를 △PAB 이등변의 밑각 66° 로 옮겨야 접점 A 의 평각에서 남은 조각 ∠x 를 뽑아낼 수 있다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "접선과 현이 이루는 각의 응용 (2) — 원 밖 한 점에서 그은 두 접선과 결합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    주어진 48° 는 원 밖의 각이라 그대로는 쓸 수 없다. PA=PB 로 △PAB 의 밑각 ∠PAB=66° 를 만들면 접점 A 위의 세 각(∠DAC=74°, ∠x, ∠PAB=66°)이 평각을 이루어 ∠x=40°.
    ∠DAC 와 ∠PAB 가 모두 접현각이므로 삼각형 ABC 의 내각으로 옮겨 내각의 합으로 풀어도 같은 줄 수다.
    통찰 1개(EQV d1)·M_total 6 → 유형 구역 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "PA=PB → △PAB 이등변으로 ∠PAB=(180°−48°)÷2=66° → 접점 A 의 평각 180°−74°−66°=40°(=∠x)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$40^\circ$'
  answer_source: "본문 답"
  figure: "crop:fig-103-h4.png"
  latex: latex-bank/gn-m32/items/103-h4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "∠APB 와 ∠CAD 를 바꿀 수 있다. 제약 — ∠x=180°−∠CAD−(180°−∠APB)÷2 가 양수여야 하므로 ∠CAD+(180°−∠APB)÷2<180°. ∠APB 는 0°<∠APB<180° 의 예각대로 두어야 그림의 두 접선이 교차한다."
    creative: "(1) ∠x 대신 ∠ACB 를 묻기(접현각 두 번 → ★2 유지) (2) ∠APB 를 주고 ∠ACB 만 묻는 105-04 형으로 줄이면 ★2 (3) 점 C 를 열호 쪽으로 옮기면 접현각 대응이 반대쪽 호로 바뀌어 함정형 ★3."
```

```yaml
- id: GN-M32-103-c4
  page: 103
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제 익히기"
  summary: |
    원 O 가 △ABC 의 내접원이면서 △DEF 의 외접원이고 D·E·F 는 접점이다.
    ∠BAC=58°, ∠BCA=70° 일 때 접점삼각형의 한 각 ∠x.
  category: "삼각형 내각의 합 → 접선 길이가 같아 이등변 → 접현각으로 접점삼각형의 각"
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "BD=BE(원 밖 한 점에서 그은 두 접선)를 △BDE 이등변의 밑각 ∠BDE=90°−∠B÷2 로 옮겨야 접현각에 넣을 각이 생긴다"
    - step: 2
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "08 단원의 내접원·접선 길이 성질과 11 단원의 접현각을 한 풀이에서 이어 붙여야 내접삼각형 DEF 의 각이 나온다"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "접선과 현이 이루는 각의 응용 (2) — 내접원·접점삼각형의 각"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ∠B=180°−58°−70°=52° 를 먼저 얻고, BD=BE 이등변에서 ∠BDE=∠BED=64° 를 만든 뒤 접현각으로 호 DE 의 원주각 ∠x=64° 로 옮긴다.
    원 하나가 내접원이면서 동시에 외접원이라는 이중 역할을 읽어야 어느 선분이 접선이고 어느 선분이 현인지 갈린다.
    [분류 이슈] 대표문제 103-h4(★2)의 유제인데 08 단원 도구가 더 결합돼 한 단 위로 판정 — 유제가 대표문제보다 높은 역전.
  tier: star_3
  mechanism_primary: "∠B=52° → BD=BE 이등변으로 ∠BDE=64° → 접현각으로 ∠x=∠DFE=∠BDE=64°"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$64^\circ$'
  answer_source: "답지"
  figure: "crop:fig-103-c4.png"
  latex: latex-bank/gn-m32/items/103-c4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "∠BAC 와 ∠BCA 를 바꿀 수 있다. 제약 — 두 각의 합이 180° 미만이어야 하고 접점삼각형의 각은 항상 90°−(대응 꼭짓점 각)÷2 이므로 답이 정수 도가 되려면 해당 꼭짓점 각이 짝수여야 한다. 접점 D·E·F 의 변 배치는 그림 고정."
    creative: "(1) 세 각을 모두 묻기(같은 공식 세 번 → ★3 유지) (2) 접점삼각형의 한 각을 주고 원래 삼각형의 각을 묻는 역방향(★4 · I-BW) (3) 내접원 반지름·넓이를 얹으면 08 단원 결합이 더 무거워져 ★4."
```

```yaml
- id: GN-M32-104-h5
  page: 104
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제 익히기"
  summary: |
    직선 PQ 가 점 T 에서 두 원에 공통으로 접하고 A·T·C 와 B·T·D 가 각각 한 직선 위에 있다.
    ∠BAT=55°, ∠CDT=60° 일 때 ∠x.
  category: "반대쪽 원의 접현각 → 접선 위의 맞꼭지각 → 이쪽 원의 접현각 → 삼각형 내각의 합"
  M: {s: 3, k: 1, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "반대쪽 원의 ∠CDT 를 접선 위 맞꼭지각을 다리로 삼아 이쪽 원의 ∠ABT 로 옮긴다 — 두 원을 잇는 통로는 접점 T 의 각뿐이다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 원에서 접선과 현이 이루는 각 (1) — 접선의 같은 쪽에 놓인 두 원(맞꼭지각 통로)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ∠CTQ=∠CDT=60°(아래 원의 접현각) → 맞꼭지각 ∠ATP=60° → 위 원의 접현각으로 ∠ABT=60° → △ABT 에서 ∠x=180°−55°−60°=65°.
    조건이 서로 다른 원에 흩어져 있어 「접점 T 의 각으로 모은다」는 방향만 잡히면 한 줄씩 내려간다.
    통찰 1개(EQV d1)·M_total 6 → 유형 구역 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "∠CTQ=∠CDT=60° → 맞꼭지각 ∠ATP=60° → 접현각 ∠ABT=60° → △ABT 내각의 합으로 ∠x=65°"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$65^\circ$'
  answer_source: "본문 답"
  figure: "crop:fig-104-h5.png"
  latex: latex-bank/gn-m32/items/104-h5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "∠BAT 와 ∠CDT 를 바꿀 수 있다. 제약 — ∠x=180°−∠BAT−∠CDT 이므로 두 각의 합이 180° 미만이어야 하고, 그림의 예각 배치를 유지하려면 각각 90° 안팎에 둔다. 두 원이 접선의 같은 쪽(내접)인 배치는 고정 — 반대쪽으로 바꾸면 104-h6 유형이 된다."
    creative: "(1) ∠x 대신 ∠ATB 와 ∠CTD 가 같음을 설명하는 서술형(★3) (2) 두 각 중 하나와 ∠x 를 주고 나머지를 묻는 역방향(★2) (3) AB∥CD 를 먼저 보이게 하고 닮음비까지 물으면 105-05 골조로 ★3."
```

```yaml
- id: GN-M32-104-c5
  page: 104
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제 익히기"
  summary: |
    같은 공통접선 배치(A·T·C 와 B·T·D 가 각각 한 직선)에서 ∠BAT=80°, ∠CTD=50° 일 때 ∠x.
  category: "맞꼭지각 → 삼각형 내각의 합"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 원에서 접선과 현이 이루는 각 (1) — 접점의 맞꼭지각과 삼각형 내각의 합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ∠ATB=∠CTD=50° 는 맞꼭지각이므로 △ABT 에서 ∠x=180°−80°−50°=50° 로 두 줄에 끝난다.
    [분류 이슈] 104-h5 의 유제인데 접선과 현이 이루는 각을 한 번도 쓰지 않는다(통찰 0·M_total 4 → −1 후보). 유제라 ★2 유지.
  tier: star_2
  mechanism_primary: "∠ATB=∠CTD=50°(맞꼭지각) → △ABT 내각의 합으로 ∠x=50°"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$50^\circ$'
  answer_source: "답지"
  figure: "crop:fig-104-c5.png"
  latex: latex-bank/gn-m32/items/104-c5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "∠BAT 와 ∠CTD 를 바꾼다. 제약 — 두 각의 합이 180° 미만. 값이 우연히 ∠x=∠CTD 처럼 같아지지 않게 하려면 ∠BAT≠180°−2·∠CTD 로 잡는다(현재 문항은 80°=180°−2·50° 이라 답이 50° 로 겹쳐 학생이 맞꼭지각만 보고 찍을 수 있다)."
    creative: "(1) ∠CTD 대신 ∠CDT 를 주면 접현각 단계가 살아나 104-h5 와 같은 ★2 통찰형이 됨 (2) ∠x 를 주고 ∠CTD 를 묻는 역방향(★2) (3) 두 원의 반지름을 얹어 닮음비를 묻는 확장(★3)."
```

```yaml
- id: GN-M32-104-h6
  page: 104
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제 익히기"
  summary: |
    직선 PQ 가 점 T 에서 두 원에 공통으로 접하고 두 원이 접선의 반대쪽에 있으며 A·D·T 와 B·C·T 가 각각 한 직선 위에 있다.
    ∠ABT=76°, ∠CDT=72° 일 때 ∠x, ∠y.
  category: "접현각 → 접선 위의 맞꼭지각 → 반대쪽 원의 접현각(엇각이 같아 AB와 CD가 평행)"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "접현각과 맞꼭지각을 이어 붙이면 두 원의 각이 서로 그대로 옮겨 간다(엇각이 같아 AB∥CD)는 사실로 조건을 바꿔 읽는다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 원에서 접선과 현이 이루는 각 (2) — 접선의 반대쪽에 놓인 두 원"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ∠ATP=∠ABT=76°(위 원의 접현각) → 맞꼭지각 ∠DTQ=76° → 아래 원의 접현각으로 ∠y=∠DCT=76°. 같은 사슬을 반대 방향으로 돌리면 ∠x=∠BAT=∠CDT=72°.
    계산이 한 번도 없고 값이 그대로 건너가는 대신, 두 원이 접선의 반대쪽에 있어 104-h5 의 대응과 짝이 달라진다(Mₜ=1, T-표기).
    통찰 1개(EQV d1)·M_total 6 → 유형 구역 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "∠ABT=∠ATP(접현각) → ∠DTQ(맞꼭지각) → ∠DCT=∠y=76°, 같은 사슬 반대 방향으로 ∠x=∠CDT=72°"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\angle x=72^\circ$, $\angle y=76^\circ$'
  answer_source: "본문 답"
  figure: "crop:fig-104-h6.png"
  latex: latex-bank/gn-m32/items/104-h6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "∠ABT 와 ∠CDT 를 바꿀 수 있고 둘은 서로 독립이다. 제약 — 두 각의 합이 180° 미만이어야 △ABT 가 성립한다. 답이 곧 주어진 값을 맞바꾼 것이므로 두 값을 뚜렷이 다르게(차이 5° 이상) 두어야 학생이 대응을 확인하게 된다. 두 원이 접선의 반대쪽인 배치는 고정."
    creative: "(1) AB∥CD 임을 보이라는 서술형(★3) (2) 한 각과 ∠ATB 를 주고 나머지를 묻기(삼각형 내각의 합이 추가돼 ★2) (3) △ABT∽△DCT 의 닮음비·대응변까지 물으면 105-05 골조로 ★3."
```

```yaml
- id: GN-M32-104-c6
  page: 104
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제 익히기"
  summary: |
    같은 반대쪽 배치(A·D·T 와 B·C·T 가 각각 한 직선)에서 ∠BTQ=68° 일 때 ∠x, ∠y.
  category: "접현각 → 맞꼭지각 → 반대쪽 원의 접현각"
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 원에서 접선과 현이 이루는 각 (2) — 접점의 각 하나에서 두 각 옮기기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    접점 T 의 각 하나만 주어지고 양쪽 원으로 한 번씩 건너간다. ∠x=∠BAT=∠BTQ=68°(위 원의 접현각), ∠DTP=68°(맞꼭지각) → ∠y=∠DCT=68°.
    세 각이 모두 같아 사슬이 눈에 보이는 대신 어느 각이 어느 호의 원주각인지 확인할 기회가 줄어든다.
    통찰 없음·M_total 5 → 유제 구역 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "∠BTQ=68° → 접현각 ∠x=∠BAT=68° → 맞꼭지각 ∠DTP=68° → 접현각 ∠y=∠DCT=68°"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\angle x=68^\circ$, $\angle y=68^\circ$'
  answer_source: "답지"
  figure: "crop:fig-104-c6.png"
  latex: latex-bank/gn-m32/items/104-c6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "∠BTQ 만 바꾸면 세 각이 모두 그 값으로 따라간다. 제약 — 예각으로 두어야 그림의 현 배치가 유지된다. 세 답이 같아지는 구조라 숫자 변형만으로는 난도가 전혀 움직이지 않는다."
    creative: "(1) ∠ATP 를 주고 ∠x·∠y 를 묻기(맞꼭지각을 먼저 거쳐야 해 한 단계 추가 ★2) (2) ∠BTQ 와 ∠ATB 를 함께 주고 ∠ABT 까지 묻기(삼각형 내각의 합 추가 ★2~3) (3) 두 원의 반지름 비를 주고 AB:CD 를 묻는 닮음 확장(★3)."
```

### 이런 문제가 시험에 나온다

```yaml
- id: GN-M32-105-01
  page: 105
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    직선 AT 가 점 A 에서 원에 접하고 CA=CB, ∠BAT=38° 일 때 ∠x.
  category: "접현각 → 꼭지각 → 이등변삼각형의 밑각"
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "접선과 현이 이루는 각 + 이등변삼각형의 밑각"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    접현각으로 ∠ACB=∠BAT=38° 를 얻고, CA=CB 이므로 밑각 ∠x=(180°−38°)÷2=71°.
    도구 두 개가 한 방향으로만 이어져 분기가 없다. 시험 대비 구역이지만 통찰 없음·M_total 5 → 구역 출발의 아래쪽 ★2.
  tier: star_2
  mechanism_primary: "접현각 ∠ACB=∠BAT=38° → CA=CB 이등변의 밑각 ∠x=(180°−38°)÷2=71°"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$71^\circ$'
  answer_source: "답지"
  figure: "crop:fig-105-01.png"
  latex: latex-bank/gn-m32/items/105-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "∠BAT 를 바꾼다. 제약 — ∠x=(180°−∠BAT)÷2 가 정수 도가 되려면 ∠BAT 가 짝수여야 하고, 0°<∠BAT<180° 이되 그림의 예각 배치를 유지하려면 90° 미만으로 둔다."
    creative: "(1) ∠x 를 주고 ∠BAT 를 묻는 역방향(★2) (2) CA=CB 대신 AB=AC 로 바꾸면 밑각의 자리가 달라져 함정형 ★3 (3) 반지름이나 현의 길이를 얹어 넓이까지 가면 105-03 골조로 ★4."
```

```yaml
- id: GN-M32-105-02
  page: 105
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    직선 PT 가 점 A 에서 원에 접하고 P·D·C 가 한 직선 위에 있다.
    ∠CPA=30°, ∠BAT=48°, ∠ABC=110° 일 때 ∠x+∠y (∠x 는 ∠ACB, ∠y 는 접선 AP 와 현 AD 가 이루는 각).
  category: "접현각 → 내접사각형의 대각 → 삼각형의 외각"
  M: {s: 3, k: 1, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "∠ABC=110° 는 ∠y 에 직접 닿지 않으므로 내접사각형 ABCD 의 대각으로 ∠ADC=70° 로 옮긴 뒤 △APD 의 외각으로 ∠y 를 내려보낸다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "접선과 현이 이루는 각 — 원 밖 한 점의 할선·내접사각형과 결합"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ∠x 는 접현각 한 번으로 48° 가 바로 나오지만 ∠y 는 두 다리를 거친다 — 내접사각형으로 ∠ADC=70°, 그 각이 △APD 의 외각이므로 ∠y=70°−30°=40°.
    조건 세 개가 각각 다른 도구에 대응해 어느 각을 어디에 쓸지 고르는 부담이 이 범위에서 가장 크다.
    통찰 1개(EQV d1)·M_total 6·시험 대비 구역 → ★3.
  tier: star_3
  mechanism_primary: "접현각 ∠x=∠ACB=∠BAT=48° → 내접사각형으로 ∠ADC=180°−110°=70° → △APD 외각으로 ∠y=70°−30°=40° → 합 88°"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$88^\circ$'
  answer_source: "답지"
  figure: "crop:fig-105-02.png"
  latex: latex-bank/gn-m32/items/105-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 각을 모두 바꿀 수 있다. 제약 — ∠y=(180°−∠ABC)−∠CPA 가 양수여야 하므로 ∠ABC+∠CPA<180°, 그리고 ∠ABC 가 둔각이어야 D 가 할선 위 원 안쪽에 남는다. ∠BAT 는 ∠x 에만 쓰이므로 독립적으로 바꿀 수 있다."
    creative: "(1) ∠x 와 ∠y 를 따로 묻기(합으로 묶인 지금보다 채점 정보가 늘어 ★3 유지) (2) ∠x+∠y 를 주고 ∠ABC 를 묻는 역방향(★4 · I-BW) (3) 할선을 접선으로 바꿔 P 에서 두 접선이 나오게 하면 이등변 다리로 바뀌어 103-h4 골조 ★2~3."
```

```yaml
- id: GN-M32-105-03
  page: 105
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    지름의 길이가 12 cm 인 원 O 에서 직선 AT 가 점 A 의 접선이고 AC 가 지름이다.
    ∠BAT=60° 일 때 △ABC 의 넓이.
  category: "접현각 → 반원의 원주각 90° → 특수각 직각삼각형의 변의 비 → 넓이"
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "각만 주어진 그림을 변의 길이로 옮겨야 넓이가 나온다 — 접현각 → 원주각 → 직각삼각형의 변의 비로 표현을 바꾼다"
    - step: 3
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "원의 성질(접현각·반원에 대한 원주각)과 30°·60° 직각삼각형의 변의 비를 한 풀이에서 결합해야 길이가 확정된다"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "접선과 현이 이루는 각 — 지름·특수각과 결합한 넓이"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    접현각으로 ∠ACB=60°, AC 가 지름이라 ∠ABC=90°. 빗변 AC=12 인 30°·60° 직각삼각형이 되어 AB=6√3, BC=6 이고 넓이는 18√3.
    이 범위에서 답이 각이 아니라 길이·넓이인 유일한 문항이고, 다른 단원의 도구(특수각 변의 비)가 실제로 필요한 것도 여기뿐이다.
    통찰 2개(RT d1 · XU d1)·M_total 7 → 시험 대비 구역 출발에서 +1 하여 ★4. §2.13 저노출 유형(RT·XU) 보유로 ★4 요건 충족.
    [분류 이슈] 중단원 마무리 이전 구역의 ★4 는 이 책 기준으로 높은 편이라 카탈로그 생성 시 재판정 대상.
  tier: star_4
  mechanism_primary: "접현각 ∠ACB=∠BAT=60° → AC 가 지름이라 ∠ABC=90° → 30°·60° 직각삼각형 비로 AB=6√3, BC=6 → 넓이 18√3"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$18\sqrt{3}\,\mathrm{cm}^2$'
  answer_source: "답지"
  figure: "crop:fig-105-03.png"
  latex: latex-bank/gn-m32/items/105-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지름의 길이와 ∠BAT 를 바꿀 수 있다. 제약 — 답이 간단한 무리수로 떨어지려면 ∠BAT 를 30°·45°·60° 중에서 고르고, 지름은 그 비에 맞춰 짝수(45° 면 √2 가 남으므로 4의 배수)로 둔다. AC 가 지름이라는 배치를 바꾸면 90° 가 사라져 넓이를 구할 수 없다."
    creative: "(1) 넓이 대신 AB 의 길이만 묻기(마지막 한 줄이 줄어 ★3) (2) 넓이를 주고 지름을 묻는 역방향(★4 유지 · I-BW 추가) (3) ∠BAT 를 45° 로 두면 이등변직각삼각형이 되어 계산이 가벼워지고 ★3 (4) 부채꼴 넓이에서 삼각형 넓이를 빼는 활꼴로 확장하면 ★4~5(단, 통찰 3개와 SC/VF/SYM/XU 요건 필요)."
```

```yaml
- id: GN-M32-105-04
  page: 105
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    반직선 PA, PB 가 각각 점 A, B 에서 원에 접하고 ∠APB=64° 일 때 ∠ACB. 5지선다.
  category: "두 접선의 길이가 같다 → 이등변삼각형의 밑각 → 접현각"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "접선과 현이 이루는 각 — 원 밖 한 점에서 그은 두 접선(이등변)과 결합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    PA=PB 로 △PAB 의 밑각 ∠PAB=(180°−64°)÷2=58° 를 얻고, 그 각이 그대로 접현각이므로 ∠ACB=58°.
    103-h4 에서 평각 단계를 뺀 축약형이라 두 줄에 끝난다. 통찰 없음·M_total 4 → 시험 대비 구역 출발의 아래쪽 ★2.
  tier: star_2
  mechanism_primary: "PA=PB → △PAB 이등변의 밑각 ∠PAB=58° → 접현각 ∠ACB=∠PAB=58°"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: "crop:fig-105-04.png"
  latex: latex-bank/gn-m32/items/105-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "∠APB 를 바꾼다. 제약 — ∠ACB=(180°−∠APB)÷2 가 정수 도가 되려면 ∠APB 가 짝수, 그리고 0°<∠APB<180°. 선택지는 답 주변 2° 간격으로 배치돼 있으므로 새 값에서도 같은 간격을 유지한다."
    creative: "(1) ∠ACB 를 주고 ∠APB 를 묻는 역방향(★2) (2) 점 C 를 열호 쪽으로 옮기면 접현각의 대응 호가 바뀌어 ∠ACB=180°−58° 가 되는 함정형 ★3 (3) 103-h4 처럼 접선 위 다른 점을 지나는 현을 추가하면 평각 단계가 살아나 ★2~3."
```

```yaml
- id: GN-M32-105-05
  page: 105
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    직선 PQ 가 점 T 에서 두 원에 공통으로 접하고 A·D·T 와 B·C·T 가 각각 한 직선 위에 있을 때
    옳지 않은 것 고르기(접현각 등식 두 개·AB와 CD의 평행·삼각형 ABT와 DCT의 닮음·대응변의 비 5지선다).
  category: "접현각·맞꼭지각 → 엇각으로 평행 → AA 닮음 → 대응변의 비 검증"
  M: {s: 3, k: 1, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 4
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "닮음의 대응 순서(A↔D, B↔C, T↔T)를 세워 비례식을 읽어야 보기 ⑤ 의 BC:CT 가 대응변 쌍이 아님이 드러난다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 원에서 접선과 현이 이루는 각 — 평행·닮음 명제 판정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ①②는 접현각 그 자체, ③은 ①②에서 나온 엇각, ④는 두 쌍의 각이 같아 AA 닮음으로 모두 옳다.
    ⑤만 대응변을 잘못 짝지었다 — 옳은 비례식은 AB:DC=BT:CT(=AT:DT)이고 BC 는 어느 삼각형의 변도 아니다.
    보기 다섯 개를 모두 검증해야 하고 대응 꼭짓점 혼동(T-표기)이 곧 함정이라 Mₜ=1.
    통찰 1개(EQV d1)·M_total 7·시험 대비 구역 → ★3.
  tier: star_3
  mechanism_primary: "접현각 → 맞꼭지각 → 엇각으로 AB∥CD → AA 로 △ABT∽△DCT → 대응변 AB:DC=BT:CT 로 ⑤ 기각"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "⑤"
  answer_source: "답지"
  figure: "crop:fig-105-05.png"
  latex: latex-bank/gn-m32/items/105-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수치가 없는 명제 판정 문항이라 바꿀 것은 보기 다섯 개의 조합이다. 제약 — 틀린 보기는 하나만 두고, 대응변을 어긋나게 짝지은 비례식(BC:CT, AT:CT 등)이 정답 보기가 되도록 한다. 두 원이 접선의 반대쪽인 배치와 두 직선의 공선 조건은 그림·단서 고정."
    creative: "(1) 두 원을 접선의 같은 쪽에 놓으면 닮음이 아니라 ∠ATB=∠CTD 중심의 명제가 되어 별개 유형(★3) (2) AB=6, DC=9, BT=4 처럼 길이를 주고 CT 를 묻는 계산형(★3 · 닮음비 한 줄 추가) (3) AB∥CD 를 증명하라는 서술형(★3 · 사슬을 직접 서술)."
```

## 표본 판정 요약 (20문)

- ★ 분포: ★1 3 · ★2 13 · ★3 3 · ★4 1 · ★5 0
- 통찰형 10 · 절차형 10 · premium 0
- 통찰 유형 분포: I-EQV 9 · I-XU 2 · I-RT 1 (SC·VF·SYM·PD·MI·CON·BW 0) — 이 단원은 도구가 하나뿐이고 난이도가 「조건을 그 도구 자리로 옮기는 경로」에서 나오므로 통찰이 EQV 로 몰린다
- M_total 분포: 4 가 4문 · 5 가 7문 · 6 가 6문 · 7 이 3문 (계산 부담 Mₖ 는 105-03·103-c4 둘만 2, 나머지는 전부 1 — 각 하나씩 옮기는 문제라 산술이 거의 없다)
- type_hint 계열 분포: 「두 원의 공통접선(맞꼭지각·평행·닮음)」 6(101-03 · 104-h5 · 104-c5 · 104-h6 · 104-c6 · 105-05) · 「기본 대응(원주각·중심각)」 3(101-01 · 101-02 · 102-h1) · 「원에 내접하는 사각형과 결합」 3(102-h2 · 102-c2 · 105-02) · 「원 밖 한 점의 두 접선(이등변)과 결합」 3(103-h4 · 103-c4 · 105-04) · 「지름·중심을 지나는 선과 결합」 3(102-c1 · 103-h3 · 103-c3) · 「이등변·특수각과 결합한 길이·넓이」 2(105-01 · 105-03)
- 대상층: 하위권 3 · 중하위권 7 · 중위권 8 · 중상위권 2
- 그림: 20문 전부(`crop:fig-101-01.png` ~ `crop:fig-105-05.png`). 접점·접선의 방향·두 원의 위치가 전부 그림에만 있어 **그림 없이는 발문만으로 문제가 복원되지 않는다** — 변형 시 그림 재생성이 필수다
- 구역별 ★ 평균: 개념원리 확인하기 1.0 · 핵심문제 익히기 2.08 · 이런 문제가 시험에 나온다 2.8

## 분류 이슈 목록

판정이 애매하거나 벤더 구역 신호와 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-M32-102-h1 | 통찰 0·M_total 4 로 −1 후보(★1)이나 유형 「접선과 현이 이루는 각 (1)」 대표문제라 구역 출발 ★2 유지 | ★1 / ★2 |
| GN-M32-103-c3 | 103-h3 의 유제인데 접선과 현이 이루는 각을 한 번도 쓰지 않고 접선⊥반지름·이등변만으로 끝나 단원 도구와 어긋남(통찰 0·M_total 5) | ★1 / ★2 |
| GN-M32-104-c5 | 104-h5 의 유제인데 접현각 없이 맞꼭지각+내각의 합 두 줄로 끝남. 게다가 ∠BAT=180°−2∠CTD 라 답이 주어진 각과 같아져 찍기가 통함 | ★1 / ★2 |
| GN-M32-103-c4 | 대표문제 103-h4(★2)의 유제인데 08 단원 내접원 도구가 더 결합돼 한 단 위 — 유제가 대표문제보다 높은 역전 | ★2 / ★3 |
| GN-M32-105-03 | 통찰 2개(RT·XU)·M_total 7 로 ★4 로 올렸으나 중단원 마무리 이전 구역의 ★4 는 이 책 기준으로 높은 편 | ★3 / ★4 |

## 카탈로그 차원 메모

나중에 「접선과 현이 이루는 각」 유형 카탈로그를 만들 때 참고할 사항.

- **따로 세워야 할 유형** — ① 「한 원의 접현각 기본」과 ② 「두 원의 공통접선」은 반드시 분리한다. ②는 접점에서 맞꼭지각을 다리로 두 원을 잇는다는 고유한 진입 통찰을 갖고, 이 범위 20문 중 6문(30%)이 여기에 속한다. ③ 「두 원이 접선의 **같은 쪽**」(104-h5·104-c5, 삼각형 내각의 합으로 마무리)과 ④ 「두 원이 접선의 **반대쪽**」(104-h6·104-c6·105-05, 엇각 → 평행 → 닮음)도 분리해야 한다 — 그림 배치 하나로 마무리 도구가 통째로 달라지고 학생 오답의 대부분이 이 둘을 섞는 데서 나온다.
- **통합해도 될 유형** — 「접현각을 쓰기 위해 각을 옮기는 다리」는 중심각·지름·내접사각형·이등변 네 가지인데, 102-h1·102-c1·103-h3·103-c3 처럼 **다리가 원의 기본 성질(중심각·지름)인 것들**은 base ★2 의 한 유형(「접현각 + 원의 기본 성질」)으로 묶어도 인지 부담이 같다. 102-h2·102-c2 의 내접사각형 다리는 「멀리 있는 각을 끌어오는」 첫 단계가 추가되므로 별도 유형이되 같은 base ★2.
- **반복되는 진입 통찰** — 이 범위의 통찰 12건 중 9건이 I-EQV 이고, 그중 7건이 사실상 같은 문장이다(「주어진 각은 접현각에 바로 닿지 않으므로 ○○ 로 옮긴다」). 카탈로그에서는 이 「옮기는 다리」를 유형의 *진입 조건* 으로 명시해 두면 ★ 산정이 안정된다.
- **★4 이상 슬롯 후보** — §2.13 저노출 유형(RT·XU)을 가진 문항은 103-c4 와 105-03 둘뿐이다. 두 문항 모두 **다른 단원의 도구가 실제로 필요한** 경우이므로, 이 단원에서 ★4 를 정당화하는 거의 유일한 구조는 「접현각 + 08 단원 접선 길이」 또는 「접현각 + 길이·넓이(특수각·피타고라스)」다. 105-03(넓이)을 상위 슬롯의 표준 원본으로 삼을 만하다. ★5 는 이 범위에 재료가 없다(SC·VF·SYM 0건) — 2/2 파트의 중단원 마무리 STEP 3 에서 다시 확인한다.
- **2/2 파트에서 확인할 것** — 이 파트에는 「계산력 강화하기」와 「서술형 대비 문제」가 없고 태그도 하나도 붙지 않았다. 중단원 마무리 구역에서 ★3~4 재료(특히 닮음비·길이 결합)가 몇 건이나 더 나오는지를 보고 유형별 base ★ 를 확정하는 것이 안전하다.
