---
name: mechanism-데이터-GN-M32-10
description: 개념원리 중학 3-2 10 원과 사각형 (1/1 · 94~99쪽 24문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 중학 3-2 · 전사본 latex-bank/gn-m32
  section: 10 원과 사각형
  unit_code: GN-M32-10
  part: "1/1"
  extract_range: "94~99쪽 · 94-01~99-05"
  total_problems: 24
  unit_total: 24
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). insight_type 은 insights 가 비면 절차형, 하나라도 있으면 통찰형. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-m32/items.json (원본 전사) · latex-bank/gn-m32/items/<id>.tex
  image_source: latex-bank/gn-m32/figures/ (crop 파일)
---

# 개념원리 중학 3-2 · 10 원과 사각형 (1/1) 정독 데이터 (v1.0)

이 파일은 「10 원과 사각형」 94~99쪽의 24문항(개념원리 확인하기 4 · 핵심문제 익히기 15 · 이런 문제가 시험에 나온다 5)을 다룬다. 개념원리 중학은 문항별 난이도 표기(하~상)가 없고 **구역 자체가 난이도 층**이다. 「개념원리 확인하기」는 개념 직후 확인(★1 출발), 「핵심문제 익히기」는 유형 제목이 붙은 핵심문제(`쪽-hN`)와 그 유제인 확인문제(`쪽-cN`)가 쌍을 이루며(★2 출발), 「이런 문제가 시험에 나온다」는 단원 끝 시험 대비(★2~3 출발)다. 이 범위에는 태그가 붙은 문항이 없다.

이 단원의 도구는 네 개다 — ① 한 선분에 대해 같은 쪽의 두 각이 같으면 네 점은 한 원 위에 있다 ② 원에 내접하는 사각형의 대각의 크기의 합은 180° ③ 한 외각은 그와 이웃하는 내각의 대각과 같다 ④ ②·③의 역이 사각형이 원에 내접할 조건이다. 24문항 전부가 이 네 도구의 조합이고, 난이도 차이는 도구의 개수가 아니라 **도구를 쓸 수 있는 형태로 그림을 바꾸는 단계**(보조선으로 오각형·육각형을 내접사각형으로 쪼개기 · 공통현 PQ 로 두 원을 잇기 · 두 연장선의 교점에서 구하는 각을 미지수로 두기)에서 나온다. 그래서 통찰 라벨은 대부분 I-EQV(조건의 동치 변환)이고, 두 연장선의 교점 유형(97-h5 · 97-c6 · 99-03)에서만 I-CON(조건 통합)이 덧붙는다.

이 파일의 주 용도는 **숫자 변형·창의 변형의 원본**이므로 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 · 골조 유지 변형)를 채웠다.

## 문항 데이터

### 개념원리 확인하기

```yaml
- id: GN-M32-94-01
  page: 94
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    보기 ㄱ~ㄷ 의 그림 중 네 점 A, B, C, D 가 한 원 위에 있는 것을 모두 고르기.
  category: "공통 선분을 찾아 같은 쪽 두 각 비교 → 공원점 판정"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "네 점이 한 원 위에 있을 조건"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    보기마다 어느 선분을 공통으로 보는지만 정하면 끝난다. ㄱ 은 DC 에 대해 24°=24°, ㄴ 은 BC 에 대해 90°=90° 로 같고 ㄷ 은 36°≠35° 로 다르다.
    개념 직후 확인 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "보기별 공통 선분 지정 → 그 선분에 대한 같은 쪽 두 각 비교 → 같으면 한 원 위"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "ㄱ, ㄴ"
  answer_source: "답지"
  figure: "crop:fig-94-01.png"
  latex: latex-bank/gn-m32/items/94-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "보기의 각도(24°·90°·36°/35°)를 바꾼다. 제약 — 참인 보기는 두 각이 정확히 같아야 하고, 거짓 보기는 1~2° 차이로 두어야 '눈대중으로 맞다'는 오답을 유도한다. 90°/90° 짝은 지름에 대한 원주각과 겹치므로 한 보기에만 쓴다."
    creative: "(1) 보기를 ㄱ~ㅁ 5개로 늘리고 '한 원 위에 있지 않은 것'으로 뒤집기(★1 유지) (2) 각 대신 ∠ADB=∠ACB 가 되도록 하는 각의 크기를 묻기(★2 · 역방향) (3) 같은 쪽/다른 쪽 구분이 갈리는 배치를 한 보기에 넣으면 T-범위 함정이 생겨 ★2."
```

```yaml
- id: GN-M32-94-02
  page: 94
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    ⑴~⑵ 원에 내접하는 □ABCD 에서 ∠x, ∠y 의 크기 구하기.
  category: "내접사각형의 대각의 합 180° → ∠x, ∠y"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "원에 내접하는 사각형의 성질 — 대각의 크기의 합"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    주어진 두 내각에서 각각 대각을 180°에서 빼는 한 단계짜리 확인 문항. 소문항 두 개가 같은 도구를 반복한다.
    개념 직후 확인 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "∠x=180°−(마주 보는 내각), ∠y=180°−(마주 보는 내각)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\angle x=105^\circ$, $\angle y=80^\circ$ ⑵ $\angle x=85^\circ$, $\angle y=95^\circ$'
  answer_source: "답지"
  figure: "crop:fig-94-02.png"
  latex: latex-bank/gn-m32/items/94-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주어진 두 내각을 바꾼다. 제약 — 네 내각의 합이 360° 이고 마주 보는 쌍의 합이 각각 180° 여야 하므로 두 인접각만 자유롭고 나머지는 종속이다. 답이 정수 도가 되도록 정수만 쓴다."
    creative: "(1) 한 각을 중심각으로 주어 원주각으로 한 번 옮기게 하기(★2) (2) ∠x+∠y 처럼 합만 묻기(★1 유지 · 계산 축소) (3) 한 변을 지름으로 지정해 직각이 숨은 조건으로 들어가면 ★2."
```

```yaml
- id: GN-M32-94-03
  page: 94
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    ⑴~⑵ 원에 내접하는 □ABCD 에서 ∠x 의 크기 구하기(한 외각·중심각이 주어진 배치).
  category: "한 외각 = 내대각 → ∠x"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "원에 내접하는 사각형의 성질 — 한 외각과 내대각"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    94-02 와 같은 성질을 외각 쪽에서 읽는 확인 문항. 연장선이 만든 외각을 대각으로 그대로 옮기거나, 중심각을 원주각으로 한 번 반으로 줄인 뒤 옮긴다.
    개념 직후 확인 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "외각(또는 중심각→원주각) → 이웃한 내각의 대각과 같음 → ∠x"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $130^\circ$ ⑵ $114^\circ$'
  answer_source: "답지"
  figure: "crop:fig-94-03.png"
  latex: latex-bank/gn-m32/items/94-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주어진 외각·중심각을 바꾼다. 제약 — 중심각은 짝수여야 원주각이 정수로 떨어지고, 외각은 0°<외각<180° 라야 연장선 배치가 유지된다."
    creative: "(1) 외각 대신 그 이웃 내각을 주어 두 단계로 만들기(★1 유지) (2) 두 외각을 동시에 주고 나머지 두 각을 묻기(★2) (3) 외각이 어느 쪽 연장선에서 나온 것인지 헷갈리는 배치로 바꾸면 T-표기 함정이 붙어 ★2."
```

```yaml
- id: GN-M32-94-04
  page: 94
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    ⑴~⑵ □ABCD 가 원에 내접하도록 하는 ∠x 의 크기 구하기.
  category: "내접 조건(대각의 합 180° · 외각=내대각)을 등식으로 세워 ∠x"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "사각형이 원에 내접하기 위한 조건"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    94-02·94-03 의 역을 쓰는 확인 문항. '내접한다'가 결론이 아니라 조건으로 주어지므로 대각의 합 180°(또는 외각=내대각)을 등식으로 놓고 ∠x 를 푼다.
    역방향이지만 미지수 한 개를 식 하나로 푸는 표준 절차라 통찰로 세지 않는다. 개념 직후 확인 구역·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "내접 조건을 등식으로: (∠x 를 포함한 내각)+(그 대각)=180° 또는 외각=내대각 → ∠x"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $96^\circ$ ⑵ $70^\circ$'
  answer_source: "답지"
  figure: "crop:fig-94-04.png"
  latex: latex-bank/gn-m32/items/94-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주어진 내각·외각을 바꾼다. 제약 — ∠x 가 양수이고 사각형의 내각(0°<∠x<180°)으로 남아야 하므로 주어진 각이 너무 크면 안 된다."
    creative: "(1) ∠x 를 식으로 주어(예: 2∠x−10°) 일차방정식을 풀게 하기(★2 · Mₐ 상승) (2) '내접하도록 하는' 대신 '내접하지 않는 것을 고르시오'로 판정형으로 뒤집기(★2) (3) 세 각을 주고 내접 여부를 판정하게 하면 98-h7 유형과 같아져 ★2."
```

### 핵심문제 익히기

```yaml
- id: GN-M32-95-h1
  page: 95
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    5지선다 그림 중 네 점 A, B, C, D 가 한 원 위에 있는 것을 모두 고르기(정답 2개).
  category: "선택지 5개 전수 판정 — 공통 선분에 대한 같은 쪽 두 각 비교"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "네 점이 한 원 위에 있을 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    94-01 과 같은 도구지만 선택지가 5개이고 배치가 서로 달라(대각선 교차형·삼각형 겹침형) 어느 선분을 공통으로 볼지 매번 다시 정해야 한다. 정답 2개라 하나 찾고 멈출 수 없다.
    전수 판정 노동으로 단계가 4개 이상 → Mₛ=2, M_total 5. 핵심문제 구역 출발 ★2 유지.
  mechanism_primary: "선택지마다 공통 선분 지정 → 같은 쪽 두 각 비교 → 같은 것 2개 선택"
  tier: star_2
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②, ⑤"
  answer_source: "본문 답"
  figure: "crop:fig-95-h1.png"
  latex: latex-bank/gn-m32/items/95-h1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "선택지의 각도를 바꾼다. 제약 — 참인 선택지는 정확히 두 각이 같아야 하고, 거짓 선택지는 삼각형의 내각의 합으로 한 단계 더 계산해야 차이가 드러나게 하면 난이도가 올라간다. 정답 개수(2개)는 발문과 반드시 일치시킨다."
    creative: "(1) 각을 직접 주지 않고 '∠ACB=∠ADB 이려면'으로 역방향(★3) (2) 선택지 하나를 원 위에 있지만 순서가 뒤바뀐 배치로 두어 같은 쪽/다른 쪽 판별을 강제(★3 · I-MI) (3) 정답 개수를 감추고 '몇 개인가'로 물으면 전수 판정이 필수가 되어 ★2 유지."
```

```yaml
- id: GN-M32-95-c1
  page: 95
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    5지선다 그림 중 네 점 A, B, C, D 가 한 원 위에 있지 않은 것 고르기.
  category: "선택지 전수 판정 — 같은 쪽 두 각이 다른 것 찾기"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "네 점이 한 원 위에 있을 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    95-h1 의 유제로 조건을 부정형('있지 않은')으로 뒤집었다. 도구는 같지만 네 개가 참임을 확인해야 하나를 배제할 수 있어 노동은 같다.
    부정 발문이 T-표기 함정 1개. 핵심문제 익히기 구역·통찰 없음·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "선택지마다 공통 선분의 같은 쪽 두 각 비교 → 다른 하나를 고름"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: "crop:fig-95-c1.png"
  latex: latex-bank/gn-m32/items/95-c1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 선택지의 두 각을 바꾼다. 제약 — 오답(내접하는) 선택지는 두 각이 같아야 하고 정답 선택지만 어긋나야 한다. 어긋나는 폭을 1~2° 로 좁히면 눈대중 오답이 늘어난다."
    creative: "(1) 각 대신 원주각 두 개가 삼각형의 내각의 합을 거쳐야 비교되게 하기(★2 유지 · Mₛ 상승) (2) 사각형이 아니라 선분 두 개의 교차형만 모으면 배치 판별이 단순해져 ★1 (3) '한 원 위에 있는 것의 개수'로 물으면 ★2 유지."
```

```yaml
- id: GN-M32-95-c2
  page: 95
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    네 점 A, B, C, D 가 한 원 위에 있을 때 ∠x 의 크기 구하기.
  category: "공원점 조건 → 같은 호에 대한 원주각이 같음 → 삼각형의 각으로 ∠x"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "네 점이 한 원 위에 있을 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    95-h1·95-c1 이 '판정'이라면 이 문항은 판정 결과를 **가정으로 받아** 각을 옮긴다. 공원점 → 같은 선분에 대한 두 원주각이 같다로 읽은 뒤 삼각형의 내각·외각으로 ∠x 를 계산한다.
    [분류 이슈] 방향 전환은 있으나 단계 3 이하·통찰 0·M_total 4 라 v3.8 산식으로는 −1(★1) 후보. 확인문제 구역 신호를 존중해 라벨은 ★2 로 둔다.
  tier: star_2
  mechanism_primary: "한 원 위 → 한 선분에 대한 두 원주각이 같음 → 삼각형의 내각·외각으로 ∠x"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$20^\circ$'
  answer_source: "답지"
  figure: "crop:fig-95-c2.png"
  latex: latex-bank/gn-m32/items/95-c2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주어진 두 각을 바꾼다. 제약 — 삼각형의 내각의 합에서 ∠x 가 양수로 남아야 하고, 옮겨 쓰는 원주각 쌍이 같은 선분·같은 쪽을 보고 있어야 한다."
    creative: "(1) ∠x 를 원주각이 아니라 중심각 자리로 옮기기(★2 유지) (2) '한 원 위에 있다'를 지우고 그 대신 두 각이 같다는 조건만 주면 학생이 공원점을 스스로 선언해야 해 ★3 (3) 삼각형을 하나 더 겹쳐 각을 두 번 옮기게 하면 ★3."
```

```yaml
- id: GN-M32-96-h2
  page: 96
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    □ABCD 가 원 O 에 내접하고 ∠ABC=70° 일 때 ∠x, ∠y 의 크기 구하기.
  category: "대각의 합 180° → ∠x · 원주각의 2배 = 중심각 → ∠y"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "원에 내접하는 사각형의 성질 — 대각의 크기의 합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    이 단원의 대표 골조를 한 그림에 모아 놓은 문항. ∠x 는 대각의 합에서 180°−70°, ∠y 는 원주각 ∠ABC 의 중심각이므로 2×70°.
    [분류 이슈] 두 도구가 각각 한 단계씩이라 M_total 4 · 통찰 0 → v3.8 산식으로는 −1(★1) 후보지만, 핵심문제(유형 대표) 구역 신호를 존중해 라벨은 ★2.
  tier: star_2
  mechanism_primary: "∠x=180°−∠ABC → 110° · ∠y=2∠ABC → 140°"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\angle x=110^\circ$, $\angle y=140^\circ$'
  answer_source: "본문 답"
  figure: "crop:fig-96-h2.png"
  latex: latex-bank/gn-m32/items/96-h2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "∠ABC 를 바꾼다. 제약 — 중심각 2∠ABC 가 360° 를 넘지 않아야 하므로 ∠ABC<180° 이고, 90° 를 넘으면 중심각이 우각이 되어 그림 배치를 다시 그려야 한다."
    creative: "(1) ∠y(중심각)를 주고 ∠x 를 묻는 역방향(★2 유지) (2) ∠ABC 대신 호 AC 에 대한 다른 원주각을 주어 한 단계 추가(★2) (3) AC 를 지름으로 두면 ∠y=180° 가 되어 성질이 퇴화하므로 피한다."
```

```yaml
- id: GN-M32-96-c3
  page: 96
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    원에 내접하는 □ABCD 에서 AB=AC 이고 ∠BAC=40° 일 때 ∠x, ∠y 의 크기 구하기.
  category: "이등변삼각형의 밑각 → 원주각으로 이동 → 대각의 합으로 ∠y"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "원에 내접하는 사각형의 성질 — 대각의 크기의 합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    각이 아니라 **변의 조건(AB=AC)** 으로 출발하는 것이 96-h2 와의 차이다. 이등변삼각형에서 ∠ABC=∠ACB=70° 를 만든 뒤 같은 호에 대한 원주각으로 옮기고, 대각의 합으로 ∠y=110° 를 얻는다.
    변→각 전환이 한 번 있지만 중2 이등변삼각형 성질의 직접 적용이라 통찰로 세지 않는다. 구역 ★2 · M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "AB=AC → ∠ABC=∠ACB=(180°−40°)/2=70° → 원주각 이동으로 ∠x=70° → 대각의 합으로 ∠y=110°"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\angle x=70^\circ$, $\angle y=110^\circ$'
  answer_source: "답지"
  figure: "crop:fig-96-c3.png"
  latex: latex-bank/gn-m32/items/96-c3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "∠BAC 를 바꾼다. 제약 — (180°−∠BAC)/2 가 정수 도여야 하므로 ∠BAC 는 짝수, 그리고 밑각이 90° 미만이 되도록 0°<∠BAC<180°."
    creative: "(1) AB=AC 대신 호 AB=호 AC 로 주어 호와 현의 관계를 한 번 거치게 하기(★2 유지) (2) AB=AD 처럼 이등변삼각형의 위치를 바꿔 옮겨야 할 원주각을 달리하기(★2) (3) 삼각형을 정삼각형으로 두면 모든 각이 고정되어 ★1 로 내려간다."
```

```yaml
- id: GN-M32-96-h3
  page: 96
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    원에 내접하는 □ABCD 에서 ∠BAC=50°, ∠ADB=40°, ∠DCE=96° 일 때 ∠x, ∠y 의 크기 구하기.
  category: "한 외각 = 내대각 → ∠BAD → 각을 쪼개 ∠x · 원주각 이동으로 ∠y"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "원에 내접하는 사각형의 성질 — 한 외각과 내대각"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    외각 ∠DCE=96° 를 내대각 ∠BAD 로 옮기는 것이 첫 단추고, 그 ∠BAD 를 주어진 ∠BAC=50° 로 쪼개면 ∠x 가 나온다. ∠y 는 ∠ADB=40° 를 같은 호에 대한 원주각으로 옮긴 뒤 삼각형에서 마무리한다.
    도구는 모두 이 단원의 기본이고 단계만 4개 안팎이라 통찰 없음. 구역 ★2 · M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "외각 ∠DCE=∠BAD=96° → ∠x=∠BAD−∠BAC=46° → ∠ADB=40° 를 원주각으로 옮겨 ∠y=44°"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\angle x=46^\circ$, $\angle y=44^\circ$'
  answer_source: "본문 답"
  figure: "crop:fig-96-h3.png"
  latex: latex-bank/gn-m32/items/96-h3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "∠BAC·∠ADB·∠DCE 세 값을 바꾼다. 제약 — ∠DCE>∠BAC 여야 ∠x 가 양수이고, 세 각이 삼각형의 내각의 합·대각의 합과 동시에 모순되지 않아야 한다(외각을 먼저 고정하고 나머지를 그 안에서 쪼개는 순서로 만든다)."
    creative: "(1) ∠x 대신 ∠BAD 자체를 묻기(★1~2 · 한 단계) (2) ∠DCE 를 지우고 ∠BCD 를 주어 보각을 한 번 더 거치게 하기(★2 유지) (3) 대각선 교점을 표시하고 그 교각을 묻게 하면 삼각형 외각이 한 겹 더 붙어 ★3."
```

```yaml
- id: GN-M32-96-c4
  page: 96
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    □ABCD 가 원 O 에 내접하고 BD 가 지름일 때, ∠BAC=55°, ∠ABE=100° 이면 ∠x, ∠y 의 크기 구하기.
  category: "지름 → 직각 · 외각 = 내대각 → 두 각을 각각 삼각형에서 마무리"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "원에 내접하는 사각형의 성질 — 한 외각과 내대각"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    조건이 두 종류(지름 · 외각)라 어느 쪽을 먼저 쓰느냐를 정해야 한다. BD 가 지름이므로 ∠BAD=∠BCD=90° 가 숨은 조건으로 들어가고, 외각 ∠ABE=100° 는 내대각 ∠ADC 로 옮긴다.
    지름→직각은 중3 원주각 단원의 표준 정리 적용이라 통찰로 세지 않는다. 구역 ★2 · M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "BD 지름 → ∠BAD=∠BCD=90° · 외각 ∠ABE=∠ADC=100° → 두 직각삼각형에서 ∠x=45°, ∠y=35°"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\angle x=45^\circ$, $\angle y=35^\circ$'
  answer_source: "답지"
  figure: "crop:fig-96-c4.png"
  latex: latex-bank/gn-m32/items/96-c4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "∠BAC 와 ∠ABE 를 바꾼다. 제약 — ∠BAC<90° 여야 지름이 만든 직각 안에 들어가고, ∠ABE 는 100° 근처의 둔각이라야 D 가 원 위 제자리에 남는다. 두 값이 같은 삼각형에서 충돌하지 않게 각각 다른 삼각형에 배치한다."
    creative: "(1) 지름을 BD 대신 AC 로 옮겨 직각이 붙는 꼭짓점을 바꾸기(★2 유지) (2) 지름 조건을 빼고 대신 ∠ADB 를 주면 지름의 역할이 사라져 ★2 (3) '지름'을 '중심 O 를 지난다'로만 쓰면 학생이 직각을 스스로 끌어내야 해 ★3."
```

```yaml
- id: GN-M32-97-h4
  page: 97
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    오각형 ABCDE 가 원 O 에 내접하고 ∠BAE=80°, ∠CDE=130° 일 때 ∠x 의 크기 구하기.
  category: "보조선으로 내접사각형 만들기 → 대각의 합 → 원주각·중심각으로 ∠x"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "오각형에는 쓸 성질이 없으므로 대각선 AC 를 그어 □ACDE 라는 내접사각형으로 조건을 옮겨 쓴다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "원에 내접하는 다각형 — 보조선으로 내접사각형 만들기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    이 단원에서 처음으로 **그림을 바꿔야** 푸는 문항이다. 대각선 AC 를 그으면 □ACDE 가 원에 내접하므로 ∠CAE=180°−130°=50°, 이를 ∠BAE 에서 빼면 ∠BAC=30°, 중심각 ∠x=2×30°=60°.
    보조선 착안은 교재가 유형으로 제시하는 표준이라 depth 1. 통찰 1개(d1)는 +1 조건(2개 이상 또는 d3)에 못 미쳐 구역 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "대각선 AC → □ACDE 내접 → ∠CAE=180°−∠CDE=50° → ∠BAC=∠BAE−∠CAE=30° → 중심각 ∠x=60°"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$60^\circ$'
  answer_source: "본문 답"
  figure: "crop:fig-97-h4.png"
  latex: latex-bank/gn-m32/items/97-h4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "∠BAE 와 ∠CDE 를 바꾼다. 제약 — ∠CDE>90° 라야 ∠CAE=180°−∠CDE 가 양수이고, ∠BAE>∠CAE 라야 ∠BAC 가 양수다. 중심각을 묻는다면 ∠BAC 가 정수 도가 되도록 두 값의 차를 조절한다."
    creative: "(1) 중심각 대신 ∠BAC(원주각)를 묻기(★2 유지 · 마지막 한 단계 제거) (2) 보조선을 AD 로 잡아야만 풀리는 배치로 바꾸면 보조선 선택이 갈려 I-SC 가 붙고 ★3 (3) 오각형을 육각형으로 늘리면 보조선이 두 개 필요해 99-02 와 같은 ★3."
```

```yaml
- id: GN-M32-97-c5
  page: 97
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    오각형 ABCDE 가 원 O 에 내접하고 ∠BCD=120°, ∠DOE=70° 일 때 ∠x 의 크기 구하기.
  category: "보조선으로 내접사각형 만들기 → 대각의 합 · 중심각→원주각 → 두 각을 합쳐 ∠x"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "대각선 AD 를 그어 □ABCD 라는 내접사각형을 만들고, 중심각 ∠DOE 는 원주각 ∠DAE 로 바꿔 ∠x 를 두 조각의 합으로 읽는다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "원에 내접하는 다각형 — 보조선으로 내접사각형 만들기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    97-h4 의 유제인데 조건 하나가 중심각으로 들어와 도구가 하나 더 붙는다. 대각선 AD 로 □ABCD 를 만들면 ∠BAD=180°−120°=60°, 중심각 ∠DOE=70° 의 원주각은 ∠DAE=35°, ∠x 는 이 둘의 합이다.
    97-h4 와 달리 마지막이 뺄셈이 아니라 덧셈이라 '쪼개기'가 아니라 '이어 붙이기'다. 통찰 1개(EQV d1)·M_total 5 → 구역 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "대각선 AD → □ABCD 내접 → ∠BAD=180°−∠BCD=60° · 중심각 ∠DOE → 원주각 ∠DAE=35° → ∠x=60°+35°=95°"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$95^\circ$'
  answer_source: "답지"
  figure: "crop:fig-97-c5.png"
  latex: latex-bank/gn-m32/items/97-c5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "∠BCD 와 ∠DOE 를 바꾼다. 제약 — ∠DOE 는 짝수라야 원주각이 정수 도가 되고, ∠BCD>90° 라야 ∠BAD 가 예각으로 남아 배치가 유지된다. 두 조각의 합이 180° 를 넘지 않아야 한다."
    creative: "(1) ∠x 를 ∠BAE 가 아니라 호 DE 쪽 원주각으로 옮기기(★2 유지) (2) 중심각 대신 호의 길이 비를 주면 호와 중심각의 관계가 한 겹 더 붙어 ★3 (3) 보조선을 AC 로 잡아도 풀리게 두 조건을 배치하면 갈래가 생겨 I-SC 가 붙고 ★3."
```

```yaml
- id: GN-M32-97-h5
  page: 97
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    원에 내접하는 □ABCD 에서 AB 와 CD 의 연장선의 교점을 E, AD 와 BC 의 연장선의 교점을 F 라 할 때, ∠AED=43°, ∠AFB=37° 이면 ∠x 의 크기 구하기.
  category: "구하는 각을 미지수로 → 두 외부 삼각형에서 ∠ADC, ∠ABC 표현 → 내접 대각의 합으로 결합"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "주어진 ∠E, ∠F 는 사각형의 내각이 아니므로 구하는 ∠x 를 미지수로 두고 두 외부 삼각형의 내각의 합으로 ∠ADC, ∠ABC 를 ∠x 의 식으로 옮겨 쓴다"
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "따로 얻은 두 식을 내접사각형의 대각의 합 180° 하나로 묶어 ∠E+∠F=180°−2∠x 라는 단일 관계로 만든다"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "원에 내접하는 사각형의 성질의 응용 — 두 연장선의 교점"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    이 범위에서 유일하게 **미지수를 도입해야** 풀리는 유형이다. ∠E 와 ∠F 는 서로 다른 삼각형에 있어 따로는 아무 각도 확정하지 못하고, ∠x 로 둘 다 표현한 뒤 대각의 합으로 합쳐야 2∠x=180°−(43°+37°) 이 나온다.
    통찰 2개(EQV d2 · CON d2)·M_total 7(미지수 도입으로 Mₐ=2) → 핵심문제 출발 ★2 에서 +1 하여 ★3.
  tier: star_3
  mechanism_primary: "∠x=∠BAD 로 두고 △(E 쪽)·△(F 쪽)에서 ∠ADC, ∠ABC 를 ∠x 로 표현 → 대각의 합 180° 로 결합 → 2∠x=180°−(∠E+∠F) → ∠x=50°"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$50^\circ$'
  answer_source: "본문 답"
  figure: "crop:fig-97-h5.png"
  latex: latex-bank/gn-m32/items/97-h5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "∠AED 와 ∠AFB 를 바꾼다. 제약 — ∠E+∠F<180° 라야 ∠x 가 양수이고, 180°−(∠E+∠F) 가 짝수라야 ∠x 가 정수 도로 떨어진다. 두 각을 지나치게 작게 두면 교점이 그림 밖으로 밀려난다."
    creative: "(1) ∠x 를 주고 ∠E+∠F 를 묻는 역방향(★3 유지) (2) ∠E 하나와 ∠BAD 를 주고 ∠F 를 묻기(★3 유지 · 같은 관계식) (3) 한 연장선 교점만 남기고 다른 조건을 내각으로 주면 미지수가 필요 없어져 ★2(97-c6 형) (4) ∠E, ∠F 의 이등분선을 추가하면 단계가 한 겹 늘어 ★4 후보."
```

```yaml
- id: GN-M32-97-c6
  page: 97
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    원에 내접하는 □ABCD 에서 AB 와 CD 의 연장선의 교점을 P, AD 와 BC 의 연장선의 교점을 Q 라 할 때, ∠ADC=127°, ∠CQD=36° 이면 ∠x 의 크기 구하기.
  category: "내각의 보각으로 외부 삼각형 각 확보 → 대각의 합 → 다른 외부 삼각형에서 ∠x"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "교점 Q·P 쪽 삼각형의 각을 사각형의 내각의 보각(180°−내각)으로 바꿔 읽어야 삼각형의 내각의 합을 쓸 수 있다"
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "Q 쪽에서 얻은 ∠BCD 와 내접 대각의 합을 묶어 ∠BAD 를 확정하고, 그것을 P 쪽 삼각형으로 넘겨 ∠x 를 낸다"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "원에 내접하는 사각형의 성질의 응용 — 두 연장선의 교점"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    97-h5 의 유제이나 내각 하나가 직접 주어져 미지수 대신 **연쇄**로 풀린다. △QDC 에서 ∠QDC=53°, ∠Q=36° → ∠BCD=89°, 대각의 합으로 ∠BAD=91°, 그 보각들을 △PAD 에 넣어 ∠x=180°−89°−53°=38°.
    보각으로 바꿔 읽는 단계가 세 번 반복되고 어느 삼각형으로 넘길지 고르는 판단이 있다. 통찰 2개(EQV d2 · CON d2)·M_total 7 → 확인문제 출발 ★2 에서 +1 하여 ★3.
  tier: star_3
  mechanism_primary: "△QDC 에서 ∠QDC=180°−127°=53°, ∠Q=36° → ∠BCD=89° → 대각의 합으로 ∠BAD=91° → △PAD 에서 ∠x=180°−(180°−91°)−53°=38°"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$38^\circ$'
  answer_source: "답지"
  figure: "crop:fig-97-c6.png"
  latex: latex-bank/gn-m32/items/97-c6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "∠ADC 와 ∠CQD 를 바꾼다. 제약 — ∠ADC>90° 라야 보각이 예각으로 남고, 연쇄 끝의 ∠x 가 양수가 되려면 ∠CQD 가 너무 커서는 안 된다(대략 ∠CQD<180°−2×보각). 모든 중간 각이 삼각형의 내각으로 성립하는지 순서대로 확인해야 한다."
    creative: "(1) ∠x 를 P 쪽이 아니라 Q 쪽 각으로 묻기(★3 유지) (2) ∠ADC 를 지우고 ∠P 를 주면 97-h5 와 같이 미지수 도입형이 되어 ★3 유지 (3) ∠ADC 대신 호의 비를 주면 호→원주각 단계가 앞에 붙어 ★4 후보 (4) 교점을 하나만 남기면 단순 외각 문제로 내려가 ★2."
```

```yaml
- id: GN-M32-98-h6
  page: 98
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    두 원이 두 점 P, Q 에서 만나는 그림에서 ∠PAB=95° 일 때 ∠PDC 의 크기 구하기.
  category: "공통현 PQ 를 다리로 → 두 원의 내접사각형에서 각을 차례로 옮김"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 원을 잇는 것은 공통현 PQ 뿐이므로 PQ 를 그어 각 원 안의 내접사각형(□ABQP, □PQCD)으로 조건을 옮겨 쓴다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 원에서 내접하는 사각형의 성질의 응용"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    보조선 PQ 가 없으면 두 원 사이에 아무 관계도 생기지 않는다. PQ 를 그으면 □ABQP 내접으로 ∠PQB=85°, B·Q·C 가 한 직선이라 ∠PQC=95°, 다시 □PQCD 내접으로 ∠PDC=85°.
    결과적으로 ∠PAB 와 ∠PDC 는 보각(=AB ∥ DC)이라는 이 유형의 결론을 얻는다. 통찰 1개(EQV d1)·M_total 5 → 구역 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "공통현 PQ → □ABQP 내접으로 ∠PQB=180°−95°=85° → B·Q·C 직선으로 ∠PQC=95° → □PQCD 내접으로 ∠PDC=85°"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$85^\circ$'
  answer_source: "본문 답"
  figure: "crop:fig-98-h6.png"
  latex: latex-bank/gn-m32/items/98-h6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "∠PAB 를 바꾼다. 제약 — 0°<∠PAB<180° 이고, 결론이 항상 ∠PDC=180°−∠PAB 이므로 답은 주어진 값에 종속이다. 90° 로 두면 두 각이 같아져 성질이 드러나지 않으니 피한다."
    creative: "(1) ∠PDC 를 주고 ∠PAB 를 묻는 역방향(★2 유지) (2) 'AB 와 DC 가 평행함을 설명하시오'로 서술형화(★3 · 결론을 스스로 세워야 함) (3) 두 직선이 P, Q 를 지나지 않고 한쪽만 지나는 배치로 바꾸면 사각형이 하나만 생겨 ★2 (4) 세 원이 꼬리를 무는 배치로 늘리면 옮기기가 두 번 더 필요해 ★3."
```

```yaml
- id: GN-M32-98-c7
  page: 98
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    두 점 P, Q 가 두 원 O, O' 의 교점일 때 ∠PAB=85°, ∠ABE=70° 이면 ∠DCQ 의 크기 구하기.
  category: "외각 → 내각 → 공통현 PQ 를 거쳐 다른 원의 내접사각형으로 이동"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "공통현 PQ 로 두 원을 잇고, 직선 A·P·D 와 B·Q·C 위의 각은 보각으로 바꿔 읽어 다음 사각형으로 넘긴다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 원에서 내접하는 사각형의 성질의 응용"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    98-h6 의 유제인데 조건이 내각이 아니라 외각 ∠ABE 로 들어와 앞에 보각 한 단계가 더 붙는다. ∠ABQ=110° → □ABQP 내접으로 ∠APQ=70° → A·P·D 직선으로 ∠DPQ=110° → □PQCD 내접으로 ∠DCQ=70°.
    ∠PAB=85° 는 배치를 고정하는 조건이고 최종 답에는 쓰이지 않는다. 통찰 1개(EQV d1)·M_total 5 → 구역 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "외각 ∠ABE=70° → ∠ABQ=110° → □ABQP 내접으로 ∠APQ=70° → ∠DPQ=110° → □PQCD 내접으로 ∠DCQ=70°"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$70^\circ$'
  answer_source: "답지"
  figure: "crop:fig-98-c7.png"
  latex: latex-bank/gn-m32/items/98-c7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "∠ABE 와 ∠PAB 를 바꾼다. 제약 — ∠ABE 는 예각이라야 ∠ABQ 가 둔각으로 남아 배치가 유지되고, ∠PAB 는 두 직선이 원을 제대로 가로지르도록 90° 안팎으로 둔다. 답은 ∠ABE 에만 종속이다."
    creative: "(1) 쓰이지 않는 ∠PAB 를 지워 조건을 최소화(★2 유지 · 군더더기 제거) (2) 반대로 ∠PAB 로도 풀리는 두 번째 경로를 만들어 갈래를 주면 I-SC 가 붙어 ★3 (3) ∠DCQ 대신 ∠PDC 를 물으면 98-h6 와 같아져 ★2 (4) 두 원의 반지름을 같게 두고 길이까지 묻게 하면 단원을 넘어 ★3."
```

```yaml
- id: GN-M32-98-h7
  page: 98
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    5지선다 그림 중 □ABCD 가 원에 내접하지 않는 것을 모두 고르기(정답 2개).
  category: "선택지별로 알맞은 내접 조건(대각의 합 · 외각=내대각 · 같은 쪽 원주각) 골라 판정"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "사각형이 원에 내접하기 위한 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    선택지마다 주어진 정보가 달라(대각선이 만든 각 · 두 외각 · 네 내각) 쓸 조건을 매번 바꿔야 한다. ③ 은 두 외각 92°·92° 에서 내각 88°+88°=176°, ④ 는 105°+80°=185° 로 각각 180° 에서 어긋난다.
    조건 셋을 교재가 이미 나열해 두었으므로 고르는 과정을 통찰로 세지 않는다. 부정 발문 T-표기 1개. 구역 ★2 · M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "선택지별로 대각의 합=180° · 외각=내대각 · 한 선분에 대한 같은 쪽 원주각이 같은지 중 해당 조건을 골라 확인 → 어긋나는 2개"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③, ④"
  answer_source: "본문 답"
  figure: "crop:fig-98-h7.png"
  latex: latex-bank/gn-m32/items/98-h7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 선택지의 각도를 바꾼다. 제약 — 참인 선택지는 대각의 합이 정확히 180°(또는 두 원주각이 정확히 같음)여야 하고, 거짓 선택지는 4~6° 정도만 어긋나게 해야 눈대중으로 걸러지지 않는다. 정답 개수와 발문을 반드시 맞춘다."
    creative: "(1) '내접하는 것'으로 뒤집기(★2 유지) (2) 선택지 하나를 외각이 어느 쪽 연장선에서 나왔는지 헷갈리는 배치로 만들면 T-표기가 강해져 ★3 (3) 내접하지 않는 선택지에 대해 '내접하려면 각을 몇 도로 바꿔야 하는가'까지 묻게 하면 ★3."
```

```yaml
- id: GN-M32-98-c8
  page: 98
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    원에 내접하는 □ABCD 에서 ∠ADB=30°, ∠BCD=80° 일 때 ∠ABD 의 크기 구하기.
  category: "대각의 합 → ∠BAD → △ABD 의 내각의 합"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "원에 내접하는 사각형의 성질 — 대각의 크기의 합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    대각선 BD 가 이미 그어져 있어 보조선 착안이 필요 없다. ∠BCD 의 대각으로 ∠BAD=100° 를 얻고 △ABD 에서 180°−100°−30° 로 끝난다.
    [분류 이슈] 2단계·통찰 0·M_total 4 → v3.8 −1 규칙으로는 ★1 후보. 확인문제 구역 신호를 존중해 라벨은 ★2 로 둔다.
  tier: star_2
  mechanism_primary: "∠BCD=80° → 대각 ∠BAD=100° → △ABD 에서 ∠ABD=180°−100°−30°=50°"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$50^\circ$'
  answer_source: "답지"
  figure: "crop:fig-98-c8.png"
  latex: latex-bank/gn-m32/items/98-c8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "∠ADB 와 ∠BCD 를 바꾼다. 제약 — ∠BCD>90° 로 두면 ∠BAD 가 예각이 되어 배치가 달라지고, ∠BAD+∠ADB<180° 라야 ∠ABD 가 양수로 남는다."
    creative: "(1) ∠ABD 대신 ∠ABC 를 물어 한 단계 줄이기(★1) (2) 대각선 BD 를 지우고 ∠ABD 를 묻게 하면 보조선 착안이 필요해 ★2 유지 (3) BD 를 지름으로 지정하면 ∠BAD=90° 가 되어 조건 하나가 남아돌아 판정 요소가 생기고 ★2 (4) AB=AD 를 추가해 이등변삼각형을 얹으면 ★2~3."
```

### 이런 문제가 시험에 나온다

```yaml
- id: GN-M32-99-01
  page: 99
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    □ABCD 가 원 O 에 내접하고 AD 가 지름일 때, ∠DAC=20°, ∠DCE=56° 이면 ∠x, ∠y 의 크기 구하기.
  category: "외각 = 내대각 → 각을 쪼개 ∠x · 지름 → 직각 → 대각의 합으로 ∠y"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "원에 내접하는 사각형의 성질 — 한 외각과 내대각"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    96-h3(외각)과 96-c4(지름)를 한 문항에 합친 시험형. 외각 ∠DCE=56° 를 ∠BAD 로 옮긴 뒤 ∠DAC=20° 를 빼면 ∠x=36°, AD 가 지름이므로 ∠ACD=90° → ∠ADC=70° → 대각의 합으로 ∠y=110°.
    두 갈래가 서로 독립이라 어느 쪽을 먼저 해도 되고 각 갈래는 2단계다. 통찰 0·M_total 5 → 시험 대비 구역 출발(★2~3)에서 아래쪽 ★2.
  tier: star_2
  mechanism_primary: "외각 ∠DCE=∠BAD=56° → ∠x=56°−20°=36° · AD 지름 → ∠ACD=90° → ∠ADC=70° → ∠y=180°−70°=110°"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\angle x=36^\circ$, $\angle y=110^\circ$'
  answer_source: "답지"
  figure: "crop:fig-99-01.png"
  latex: latex-bank/gn-m32/items/99-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "∠DAC 와 ∠DCE 를 바꾼다. 제약 — ∠DCE>∠DAC 라야 ∠x 가 양수이고, ∠DAC<90° 라야 지름이 만든 직각삼각형 안에 들어간다. ∠DCE 는 둔각이 되면 E 의 위치가 바뀌므로 예각으로 둔다."
    creative: "(1) 지름 조건을 빼고 ∠ADC 를 직접 주면 갈래가 하나로 줄어 ★2 유지(더 쉬움) (2) ∠x+∠y 만 묻기(★2 유지) (3) AD 대신 AC 를 지름으로 두면 직각이 다른 꼭짓점에 붙어 순서가 바뀌고 ★3 (4) ∠DCE 를 미지수로 두고 ∠y 를 주면 역방향이 되어 ★3."
```

```yaml
- id: GN-M32-99-02
  page: 99
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    육각형 ABCDEF 가 원에 내접하고 ∠BAF=125°, ∠BCD=110° 일 때 ∠DEF 의 크기 구하기.
  category: "보조선 하나로 육각형을 내접사각형 두 개로 분해 → 대각의 합 두 번 → 각을 이어 붙임"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "대각선 BE 하나가 육각형을 □ABEF 와 □BCDE 두 내접사각형으로 가르고, 구하는 ∠DEF 가 그 둘의 각 조각의 합이 되도록 하는 보조선을 골라야 한다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "원에 내접하는 다각형 — 보조선으로 내접사각형 만들기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    97-h4·97-c5 의 오각형을 육각형으로 늘린 문항. 아무 대각선이나 그으면 안 되고 **BE** 를 그어야 두 사각형이 각각 주어진 각과 구하는 각을 동시에 품는다. □ABEF 에서 ∠BEF=55°, □BCDE 에서 ∠BED=70°, 합이 ∠DEF=125°.
    [분류 이슈] 골조는 97-h4 와 같은데 보조선 선택의 폭이 넓어지고 구역 출발점이 ★2~3 이라 ★3 으로 둔다(97-h4 는 ★2). 카탈로그에서 같은 유형으로 묶을지 갈라 둘지 결정이 필요하다.
  tier: star_3
  mechanism_primary: "대각선 BE → □ABEF 내접으로 ∠BEF=180°−125°=55° · □BCDE 내접으로 ∠BED=180°−110°=70° → ∠DEF=55°+70°=125°"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$125^\circ$'
  answer_source: "답지"
  figure: "crop:fig-99-02.png"
  latex: latex-bank/gn-m32/items/99-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "∠BAF 와 ∠BCD 를 바꾼다. 제약 — 원에 내접하는 육각형에서 ∠A+∠C+∠E=360° 이므로 두 각의 합이 360° 보다 작아야 하고, 각각 180° 미만이어야 볼록 육각형이 유지된다."
    creative: "(1) 세 각 중 두 개를 주고 '세 각의 합이 360° 임을 설명하시오'로 서술형화(★3 유지) (2) 칠각형으로 늘리면 남는 각이 확정되지 않아 문제가 성립하지 않으므로 짝수 각형만 가능 (3) ∠DEF 대신 중심각이나 호를 물으면 마지막에 2배 단계가 붙어 ★3 유지 (4) 보조선 후보가 두 개 다 통하도록 각을 배치하면 I-SC 가 붙어 ★4 후보."
```

```yaml
- id: GN-M32-99-03
  page: 99
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    원에 내접하는 □ABCD 에서 AB 와 CD 의 연장선의 교점을 E, AD 와 BC 의 연장선의 교점을 F 라 할 때, ∠AED=30°, ∠DFC=40° 이면 ∠x 의 크기 구하기.
  category: "구하는 각을 미지수로 → 두 외부 삼각형에서 표현 → 내접 대각의 합으로 결합"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "∠E, ∠F 는 사각형의 내각이 아니므로 ∠x 를 미지수로 두고 두 외부 삼각형의 내각의 합으로 ∠ABC, ∠ADC 를 ∠x 의 식으로 옮겨 쓴다"
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 식을 내접사각형의 대각의 합 180° 로 묶어 ∠E+∠F=180°−2∠x 라는 단일 관계로 만든다"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "원에 내접하는 사각형의 성질의 응용 — 두 연장선의 교점"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    97-h5 와 완전히 같은 골조의 시험형(수치만 30°·40°). 두 교점의 각이 서로 다른 삼각형에 있어 미지수 없이는 어느 각도 확정되지 않고, 대각의 합으로 합쳐야 2∠x=180°−70° 가 나온다.
    통찰 2개(EQV d2 · CON d2)·M_total 7 → 시험 대비 구역 출발(★2~3)에서 위쪽 ★3.
  tier: star_3
  mechanism_primary: "∠x=∠BAD 로 두고 △(E 쪽)·△(F 쪽)에서 ∠ABC, ∠ADC 를 ∠x 로 표현 → 대각의 합 180° 로 결합 → 2∠x=180°−(30°+40°) → ∠x=55°"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$55^\circ$'
  answer_source: "답지"
  figure: "crop:fig-99-03.png"
  latex: latex-bank/gn-m32/items/99-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "∠AED 와 ∠DFC 를 바꾼다. 제약 — 두 각의 합이 180° 미만이라야 ∠x 가 양수이고, 180°−(∠E+∠F) 가 짝수라야 정수 도가 된다(30°+40° → 55°)."
    creative: "(1) ∠x 를 주고 ∠E−∠F 를 추가 조건으로 주어 두 각을 각각 구하게 하면 연립이 생겨 ★4 후보 (2) ∠BAD 대신 ∠BCD 를 묻기(보각이므로 ★3 유지) (3) E, F 중 하나만 남기고 내각을 하나 주면 97-c6 형 연쇄가 되어 ★3 유지 (4) 서술형으로 관계식 유도까지 요구하면 ★4."
```

```yaml
- id: GN-M32-99-04
  page: 99
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    두 원 O, O' 이 두 점 P, Q 에서 만나는 그림에서 ∠PDC=104° 일 때 ∠x+∠y 의 크기 구하기(∠x 는 원 O 의 중심각).
  category: "공통현 PQ 로 두 원을 이음 → 내접사각형 두 번 → 마지막에 원주각→중심각"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "공통현 PQ 로 오른쪽 원의 조건을 왼쪽 원으로 옮긴 뒤, 왼쪽에서는 원주각으로 멈추지 않고 중심각으로 한 번 더 바꿔야 ∠x 자리에 닿는다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "두 원에서 내접하는 사각형의 성질의 응용"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    98-h6 의 옮기기 사슬에 중심각 한 단계가 더 붙었다. □PQCD 내접으로 ∠PQC=76°, B·Q·C 직선으로 ∠y=∠PQB=104°, □APQB 내접으로 ∠PAB=76°, 그 중심각이 ∠x=152° 이므로 합은 256°.
    두 각이 서로 다른 종류(원주각 자리·중심각 자리)라 사슬을 끝까지 따라가야 한다. 통찰 1개(EQV d2)·M_total 5 → 시험 대비 구역 출발(★2~3)에서 위쪽 ★3.
  tier: star_3
  mechanism_primary: "□PQCD 내접 → ∠PQC=180°−104°=76° → B·Q·C 직선으로 ∠y=104° → □APQB 내접 → ∠PAB=76° → 중심각 ∠x=152° → ∠x+∠y=256°"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$256^\circ$'
  answer_source: "답지"
  figure: "crop:fig-99-04.png"
  latex: latex-bank/gn-m32/items/99-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "∠PDC 를 바꾼다. 제약 — 짝수라야 중심각이 정수 도로 떨어지고, 둔각(90°~180°)이라야 그림의 두 직선 배치가 유지된다. 답은 항상 (180°−∠PDC)×2+∠PDC = 360°−∠PDC 이므로 검산이 쉽다."
    creative: "(1) ∠x 와 ∠y 를 따로 묻기(★3 유지 · 부분점수 설계에 유리) (2) ∠x+∠y=360°−∠PDC 임을 설명하게 하는 서술형(★4 후보) (3) 중심각을 빼고 원주각만 묻게 하면 98-h6 와 같아져 ★2 (4) 두 원의 반지름이 같다는 조건을 추가하면 합동까지 엮여 단원을 넘고 ★4."
```

```yaml
- id: GN-M32-99-05
  page: 99
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    5지선다 그림 중 □ABCD 가 원에 내접하지 않는 것 고르기.
  category: "선택지별로 알맞은 내접 조건을 골라 전수 판정"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "사각형이 원에 내접하기 위한 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    98-h7 과 같은 판정형인데 정답이 하나라 네 개가 참임을 확인하는 노동은 같다. 대각의 합·외각=내대각·같은 쪽 원주각 중 선택지마다 맞는 것을 골라 확인한다.
    부정 발문 T-표기 1개. 통찰 0·M_total 5 → 시험 대비 구역 출발(★2~3)에서 아래쪽 ★2.
  tier: star_2
  mechanism_primary: "선택지별로 해당하는 내접 조건(대각의 합 · 외각=내대각 · 같은 쪽 원주각)을 골라 확인 → 어긋나는 하나"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: "crop:fig-99-05.png"
  latex: latex-bank/gn-m32/items/99-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "선택지의 각도를 바꾼다. 제약 — 참인 네 선택지는 조건을 정확히 만족해야 하고 정답만 어긋나야 한다. 어긋나는 폭을 5° 안팎으로 두면 눈대중 판별이 막힌다."
    creative: "(1) 정답을 2개로 늘려 98-h7 형으로(★2 유지) (2) 선택지에 길이 조건(현의 길이·평행)을 섞으면 쓸 수 없는 조건을 걸러 내는 판단이 생겨 ★3 (3) '내접하는 것의 개수'로 물으면 전수 판정이 강제되어 ★2 유지 (4) 어긋난 선택지를 고른 뒤 고칠 각을 계산하게 하면 ★3."
```

## 표본 판정 요약 (24문)

- ★ 분포: ★1 4 · ★2 15 · ★3 5 · ★4 0 · ★5 0
- 통찰형 9 · 절차형 15 · premium 0
- 통찰 라벨 12개: I-EQV 9 · I-CON 3(97-h5 · 97-c6 · 99-03). depth 는 교재가 유형으로 제시한 보조선·공통현은 d1, 미지수 도입과 육각형 분해는 d2.
- type_hint 분포(7종): 「원에 내접하는 사각형의 성질 — 대각의 크기의 합」 4 · 「— 한 외각과 내대각」 4 · 「네 점이 한 원 위에 있을 조건」 4 · 「사각형이 원에 내접하기 위한 조건」 3 · 「원에 내접하는 다각형 — 보조선으로 내접사각형 만들기」 3 · 「원에 내접하는 사각형의 성질의 응용 — 두 연장선의 교점」 3 · 「두 원에서 내접하는 사각형의 성질의 응용」 3
- 대상층: 하위권 4 · 중하위권 11 · 중위권 6 · 중상위권 3
- 그림: 24문 전부 crop(`crop:fig-94-01.png` ~ `crop:fig-99-05.png`) — 이 단원은 그림 없이 성립하는 문항이 하나도 없다.
- M 프로파일: Mₖ·Mₐ 가 거의 1 로 고정(각도 계산은 한 줄, 수치 구체)이고 변별은 Mₛ 에서만 난다. 예외는 미지수를 도입하는 97-h5 · 97-c6 · 99-03 으로 Mₐ=2, M_total 7.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-M32-95-c2 | 확인문제(★2 출발)이나 단계 3 이하·통찰 0·M_total 4 → v3.8 −1 규칙으로는 ★1. 구역 신호를 존중해 ★2 라벨 | ★1 / ★2 |
| GN-M32-96-h2 | 유형 대표(핵심문제)인데 대각·중심각이 각각 한 단계씩이라 M_total 4 → ★1 후보. 대표문제라는 위치 때문에 ★2 라벨 | ★1 / ★2 |
| GN-M32-98-c8 | 대각선이 이미 그어져 있어 2단계·M_total 4 → ★1 후보. 확인문제 구역 신호로 ★2 라벨 | ★1 / ★2 |
| GN-M32-99-02 | 97-h4(오각형 ★2)와 보조선 골조가 같으나 보조선 선택 폭과 구역 출발점(★2~3) 때문에 ★3. 카탈로그에서 오각형·육각형을 한 유형으로 묶으면 ★ 가 하나로 정렬되어야 함 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형** ① 「두 연장선의 교점(E·F)」 — 이 범위에서 유일하게 미지수 도입이 필수이고 M_total 이 2 이상 높다(97-h5 · 97-c6 · 99-03). base ★3 으로 독립시킨다. ② 「두 원에서 내접사각형」 — 공통현 PQ 라는 고유 보조선을 쓰고 결론(AB ∥ DC)이 따로 있다(98-h6 · 98-c7 · 99-04). base ★2, 중심각이 덧붙으면 ★3.
- **통합해도 될 유형** ① 「대각의 크기의 합」과 「한 외각과 내대각」은 같은 정리의 두 표현이므로 하나의 유형 아래 두 변종(내각 주어짐 / 외각 주어짐)으로 두는 편이 낫다(94-02·94-03·96-h2·96-h3·96-c4·98-c8·99-01 — 이 범위의 7문항). ② 「네 점이 한 원 위에 있을 조건」과 「사각형이 원에 내접하기 위한 조건」은 판정 도구가 같고 발문만 다르므로 한 유형의 판정형/각 계산형 변종으로 묶을 수 있다(94-01·94-04·95-h1·95-c1·95-c2·98-h7·99-05).
- **★ 정렬이 필요한 지점** 「원에 내접하는 다각형(보조선)」은 오각형(97-h4 ★2)·육각형(99-02 ★3)이 같은 유형인데 구역 때문에 ★ 가 갈렸다. 카탈로그에서는 base ★2 로 두고 '보조선 두 개 이상 또는 보조선 선택이 갈리는 배치'일 때만 ★3 으로 올리는 규칙을 명시한다.
