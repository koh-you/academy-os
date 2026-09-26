---
name: mechanism-데이터-GN-M32-08-p1
description: 개념원리 중학 3-2 08 원의 접선 (2) (1/2 · 72~75쪽 17문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 중학 3-2 · 전사본 latex-bank/gn-m32
  section: 08 원의 접선 (2)
  unit_code: GN-M32-08
  part: "1/2"
  extract_range: "72~75쪽 · 72-01~75-05"
  total_problems: 17
  unit_total: 49
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). insight_type 은 insights 가 비면 절차형, 하나라도 있으면 통찰형. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-m32/items.json (원본 전사) · latex-bank/gn-m32/items/<id>.tex
  image_source: latex-bank/gn-m32/figures/ (crop 파일)
---

# 개념원리 중학 3-2 · 08 원의 접선 (2) (1/2) 정독 데이터 (v1.0)

이 파일은 「08 원의 접선 (2)」 72~75쪽의 17문항(개념원리 확인하기 4 · 핵심문제 익히기 8 · 이런 문제가 시험에 나온다 5)을 다룬다. 개념원리 중학은 RPM 과 달리 문항별 난이도 표기(하~상)가 없고 **구역 자체가 난이도 층**이다. 「개념원리 확인하기」는 개념 직후 확인(★1 출발), 「핵심문제 익히기」는 유형 제목이 붙은 핵심문제(`쪽-hN`)와 그 유제인 확인문제(`쪽-cN`)가 쌍을 이루며(★2 출발), 「이런 문제가 시험에 나온다」는 단원 끝 시험 대비(★2~3 출발)다. 태그는 `UP`(+1 후보) 하나만 쓰인다.

이 단원의 도구는 사실상 세 개뿐이다 — ① 원 밖 한 점에서 그은 두 접선의 길이가 같다 ② 삼각형의 내접원에서 세 꼭짓점의 접선 조각으로 세 변을 분해 ③ 원에 외접하는 사각형에서 대변의 길이의 합이 같다. 난이도 차이는 도구의 개수가 아니라 **주어진 조건을 이 도구가 쓸 수 있는 형태로 옮기는 단계 수**(둘레 → 대변 합, 직각 → 접점 정사각형, 보조 접선 → 접선 길이 합)에서 나온다. 그래서 통찰 라벨은 대부분 I-EQV(조건의 동치 변환)이고, 기하 배치를 대수식으로 옮기는 75-04·75-05 에서만 I-RT 가 붙는다.

이 파일의 주 용도는 **숫자 변형·창의 변형의 원본**이므로 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 · 골조 유지 변형)를 채웠다.

## 문항 데이터

### 개념원리 확인하기

```yaml
- id: GN-M32-72-01
  page: 72
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    ⑴⑵ 내접원의 접점 D, E, F 가 표시된 삼각형에서 x 구하기.
    ⑴ AD=4, DB=7, AC=9 일 때 BC=x. ⑵ AB=13, FC=4, BC=10 일 때 AF=x.
  category: "접선의 길이가 같다 → 조각 대응 → 나머지 길이"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각형의 내접원 — 접선의 길이로 변의 길이 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    AF=AD, BD=BE, CF=CE 세 등식을 그림 라벨에 그대로 대응시키면 끝난다.
    ⑵ 는 전체 변에서 조각을 빼는 단계가 한 번 더 있을 뿐 도구는 같다.
    확인하기 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "접선의 길이가 같다 → 세 꼭짓점의 접선 조각으로 변 분해 → 구하는 변"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $12$ ⑵ $7$'
  answer_source: "답지"
  figure: "crop:fig-72-01.png"
  latex: latex-bank/gn-m32/items/72-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 접선 조각(AD, BD, CF) 값을 바꿀 수 있다. 제약 — 모든 조각이 양수, 세 변이 삼각부등식을 만족, 접점 라벨 D·E·F 의 변 배치(D∈AB, E∈BC, F∈CA)는 그림 고정이라 그대로 둔다."
    creative: "(1) x 를 삼각형의 둘레로 묻기(★1 유지) (2) 세 변을 주고 한 접선 조각을 묻는 역방향(미지수 방정식 1개 → ★2 · 73-h1 골조) (3) 내접원 반지름·넓이까지 이어 붙이면 피타고라스가 결합돼 ★3."
```

```yaml
- id: GN-M32-72-02
  page: 72
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    ⑴~⑶ 두 변이 6, 8 인 직각삼각형 ABC 의 내접원(반지름 r, 접점 D·E·F)에서
    ⑴ 빗변 AC ⑵ AF, CF 를 r 로 표현 ⑶ r 의 값. 소문항이 풀이 순서를 그대로 안내한다.
  category: "피타고라스 → 접선 조각을 r 로 표현 → 빗변 등식으로 r"
  M: {s: 3, k: 1, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직각삼각형의 내접원 — 반지름과 접선의 길이"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    직각 B 에서 BD=BE=r 이 되는 정사각형 착안이 이 유형의 핵심인데, ⑵ 가 AF=6-r, CF=8-r 를 대놓고 시키므로 학생이 발견할 몫이 없다.
    Mₐ 가 2(매개변수 r)로 올라 M_total 6 이지만 통찰은 0 → 확인하기 구역 ★1 유지.
  tier: star_1
  mechanism_primary: "피타고라스로 AC → AF=6-r, CF=8-r → AF+CF=AC 로 r"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $10$ ⑵ $\seg{AF}=6-r$, $\seg{CF}=8-r$ ⑶ $2$'
  answer_source: "답지"
  figure: "crop:fig-72-02.png"
  latex: latex-bank/gn-m32/items/72-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 직각변을 다른 피타고라스 수(5·12, 9·12, 8·15)로. 제약 — 빗변이 유리수여야 ⑴ 이 깔끔하고, r=(a+b-c)/2 가 양의 유리수가 된다. 6·8 을 3·4 로 줄이면 r=1 로 너무 쉬워진다."
    creative: "(1) 소문항을 없애고 r 만 묻기(발견 몫이 생겨 I-EQV d1 · ★2 — 73-h2 가 그 형태) (2) r 대신 내접원의 넓이·둘레를 묻기(★2) (3) 직각을 없애고 세 변만 주면 피타고라스가 빠지고 ★1 로 내려간다."
```

```yaml
- id: GN-M32-72-03
  page: 72
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    ⑴⑵ 원 O 에 외접하는 사각형 ABCD 에서 x 구하기.
    ⑴ AD=8, BC=10, CD=9 일 때 AB=x. ⑵ AD=13, AB=15, CD=17 일 때 BC=x.
  category: "외접사각형 대변의 합이 같다 → 한 변 구하기"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "원에 외접하는 사각형 — 대변의 길이의 합이 같다"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    AB+CD=AD+BC 한 줄에 네 수를 넣으면 끝난다. 접선의 길이가 같다는 원리에서 이 등식이 왜 나오는지는 개념 설명에서 이미 제시됐다.
    확인하기 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "AB+CD=AD+BC → 미지의 한 변"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $9$ ⑵ $19$'
  answer_source: "답지"
  figure: "crop:fig-72-03.png"
  latex: latex-bank/gn-m32/items/72-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 변의 값을 자유롭게. 제약 — 구한 x 가 양수여야 하고, 사각형이 실제로 원에 외접할 수 있으려면 네 변 모두 양수이면 충분(대변 합 조건이 곧 외접 가능 조건)."
    creative: "(1) 둘레를 주고 한 변을 묻기(둘레 → 대변 합 치환 한 단계 추가 → I-EQV d1 · ★2 · 74-c3 골조) (2) 두 변의 비를 함께 주기(★2 · 75-03 골조) (3) x 를 포함한 일차식으로 라벨을 바꾸면 방정식 단계가 생겨 ★2."
```

```yaml
- id: GN-M32-72-04
  page: 72
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    ⑴⑵ 원 O 에 외접하는 사각형에서 한 변만 접점으로 두 조각(하나가 x)으로 나뉜 그림.
    ⑴ AD=9, BC=10, CD=11, AB=4+x. ⑵ AD=6, AB=12, CD=9, BC=9+x.
  category: "변을 두 조각으로 합쳐 표현 → 대변의 합이 같다 → x"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "원에 외접하는 사각형 — 대변의 길이의 합이 같다"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    72-03 과 같은 등식인데 한 변이 그림에서 두 토막으로 표시돼 있어 먼저 합쳐야 한다는 점만 다르다.
    조각을 따로 접선 길이로 쓰려다 헷갈릴 수 있으나(표기 함정 수준) 분기는 없다. 확인하기 구역·통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "토막 난 변을 합쳐 한 변으로 → AB+CD=AD+BC → x"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $4$ ⑵ $6$'
  answer_source: "답지"
  figure: "crop:fig-72-04.png"
  latex: latex-bank/gn-m32/items/72-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "조각 길이와 나머지 세 변을 바꿀 수 있다. 제약 — x 가 양수여야 하고, 조각이 붙은 변이 어느 변인지(그림 라벨)는 고정."
    creative: "(1) 두 변을 각각 토막 내 미지수를 두 개로(연립 → ★2) (2) 조각 하나를 일차식 2x-1 등으로 주기(★2) (3) 사각형을 사다리꼴로 특수화하고 직각 조건을 붙이면 피타고라스가 결합돼 ★3(75-04 골조)."
```

### 핵심문제 익히기

```yaml
- id: GN-M32-73-h1
  page: 73
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    내접원(접점 D·E·F)을 가진 삼각형에서 AB=12 cm, BC=14 cm, CA=10 cm 일 때 AF 의 길이.
  category: "AF=x 로 두고 세 변을 조각으로 분해 → 일차방정식"
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각형의 내접원 — 접선의 길이로 변의 길이 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    72-01 과 방향이 반대다. 조각이 아니라 세 변이 주어지므로 AF=x 를 스스로 두고 BD=12-x, CF=10-x 로 BC 를 표현해야 식이 선다.
    미지수 도입(Mₐ=2)이 확인하기와의 차이. 통찰이라 부를 분기는 없고 이 유형의 대표 절차라 핵심문제 구역 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "AF=x → BD=12-x, CF=10-x → (12-x)+(10-x)=14 → x"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4\,\mathrm{cm}$'
  answer_source: "본문 답"
  figure: "crop:fig-73-h1.png"
  latex: latex-bank/gn-m32/items/73-h1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 변을 바꾸되 AF=(AB+CA-BC)/2 가 양수·유리수가 되게. 제약 — 삼각부등식, 세 변의 합이 짝수여야 답이 정수. 12·14·10 → 13·15·8 등."
    creative: "(1) 둘레와 한두 조각을 주고 AF 를 묻기(둘레 → 절반 치환 I-EQV d1 · ★2 · 75-01 골조) (2) 세 변을 주고 내접원 반지름을 묻기(넓이=rs 는 중3 범위 밖이므로 직각 조건 필요 → ★2~3) (3) 세 변을 일차식으로 주면 Mₐ 가 올라 ★3."
```

```yaml
- id: GN-M32-73-c1
  page: 73
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    내접원(접점 D·E·F)을 가진 삼각형에서 AB=9 cm, AC=10 cm, AF=4 cm 일 때 BC 의 길이.
  category: "AF 주어짐 → 남은 두 조각 → BC"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각형의 내접원 — 접선의 길이로 변의 길이 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    73-h1 의 유제인데 AF 가 주어져 방정식이 필요 없다. AD=4 → BD=BE=5, CF=CE=6 → BC=11 로 직접 대응만 남는다.
    M_total 4·통찰 0 이라 −1 후보지만 같은 유형의 짝 문항이라 층을 흔들지 않고 구역 출발 ★2 유지. [분류 이슈] ★1 로 볼 여지가 있어 파일 끝 표에 기록.
  tier: star_2
  mechanism_primary: "AD=AF=4 → BD=BE=5, CF=CE=6 → BC=11"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$11\,\mathrm{cm}$'
  answer_source: "답지"
  figure: "crop:fig-73-c1.png"
  latex: latex-bank/gn-m32/items/73-c1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AB, AC, AF 를 바꾸되 AF < min(AB, AC) 여야 두 조각이 양수. 제약 — BC=(AB-AF)+(AC-AF) 가 삼각부등식을 만족."
    creative: "(1) BC 대신 둘레를 묻기(★2 유지) (2) AF 를 없애고 BC 를 주면 73-h1 의 미지수 방정식으로 되돌아감(★2) (3) 접선 조각 하나를 비(BD:CE=2:3)로 주면 배분 단계가 추가돼 ★3."
```

```yaml
- id: GN-M32-73-h2
  page: 73
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    ∠C=90° 인 직각삼각형의 내접원(접점 D·E·F)에서 BC=12 cm, AC=5 cm 일 때 내접원의 반지름.
  category: "직각의 접점 정사각형 → 세 변을 r 로 → 빗변 등식"
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "∠C=90° 라는 각 조건을 '중심과 두 접점이 만드는 정사각형' 즉 CE=CF=r 이라는 길이 조건으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "직각삼각형의 내접원 — 반지름과 접선의 길이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    72-02 에서 소문항이 대신 해 주던 단계(직각 → CE=CF=r)를 여기서는 학생이 직접 찾아야 한다. 그 뒤 AB=13 을 피타고라스로 얻고 (5-r)+(12-r)=13 을 풀면 된다.
    통찰 1개(EQV d1)·M_total 7 → 핵심문제 구역 출발 ★2 유지(+1 조건인 통찰 2개·depth 3 에는 못 미침).
  tier: star_2
  mechanism_primary: "직각 C → CE=CF=r → AF=5-r, BE=12-r → AF+BE=AB=13 → r"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2\,\mathrm{cm}$'
  answer_source: "본문 답"
  figure: "crop:fig-73-h2.png"
  latex: latex-bank/gn-m32/items/73-h2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 직각변을 다른 피타고라스 수(8·15, 7·24, 9·12)로. 제약 — 빗변이 정수여야 r=(a+b-c)/2 가 정수. 12·5 는 13 이 나오는 기본 쌍."
    creative: "(1) r 대신 내접원의 넓이·둘레를 묻기(계산 한 줄 추가 · ★2 · 73-c2) (2) r 과 한 변을 주고 나머지 변을 묻는 역방향(I-BW d2 · ★3 · 75-02 골조) (3) 직각을 빼면 r 을 중3 도구로 구할 수 없으므로 이 설정은 유지해야 한다."
```

```yaml
- id: GN-M32-73-c2
  page: 73
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    ∠C=90° 인 직각삼각형의 내접원(접점 D·E·F)에서 AB=15 cm, BC=12 cm 일 때 원 O 의 넓이.
  category: "빗변·한 변 → 나머지 변 → r → 원의 넓이"
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "직각 C 의 접점 정사각형에서 CE=CF=r 로 바꿔 세 변을 r 로 묶음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "직각삼각형의 내접원 — 반지름과 접선의 길이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    73-h2 와 같은 골조에 앞뒤가 하나씩 붙었다. 앞에서는 빗변이 주어졌으므로 피타고라스로 AC=9 를 먼저 구하고, 뒤에서는 r=3 을 넓이 9π 로 옮긴다.
    묻는 대상이 반지름이 아니라 넓이라 r 에서 멈추는 실수(T-표기 성격)가 나오기 쉽지만 분기는 아니다. 통찰 1개 → 구역 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "피타고라스로 AC=9 → 직각 C 에서 CE=CF=r → r=3 → 넓이 9π"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$9\pi\,\mathrm{cm}^2$'
  answer_source: "답지"
  figure: "crop:fig-73-c2.png"
  latex: latex-bank/gn-m32/items/73-c2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "빗변과 한 직각변을 피타고라스 쌍에서 고르되(15·12 → 25·24, 17·15, 13·5) r=(a+b-c)/2 가 정수가 되게. 제약 — 넓이를 묻으므로 r 이 정수여야 답이 nπ 꼴."
    creative: "(1) 넓이 대신 색칠한 부분(삼각형-내접원) 넓이를 묻기(★3) (2) r 을 주고 빗변을 묻는 역방향(★3) (3) 직각 위치를 ∠B 로 옮기면 어느 접점이 정사각형을 만드는지 다시 판단해야 해 함정이 하나 늘지만 ★는 유지."
```

```yaml
- id: GN-M32-74-h3
  page: 74
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    원 O 에 외접하는 사각형 ABCD 에서 AB=14, AD=3x-2, CD=2x, BC=12 일 때 x 의 값.
  category: "대변의 합이 같다 → 일차방정식"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "원에 외접하는 사각형 — 대변의 길이의 합이 같다"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    72-03 과 같은 등식인데 두 변이 x 에 대한 일차식이라 14+2x=(3x-2)+12 를 정리하는 단계가 붙는다.
    어느 두 변이 대변인지 라벨에서 짝을 잘못 지으면 바로 틀리는 표기 함정은 있으나 통찰 분기는 없다. 핵심문제 구역 ★2.
  tier: star_2
  mechanism_primary: "AB+CD=AD+BC → 14+2x=(3x-2)+12 → x"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4$'
  answer_source: "본문 답"
  figure: "crop:fig-74-h3.png"
  latex: latex-bank/gn-m32/items/74-h3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 상수 변(14, 12)과 두 일차식의 계수를 바꿀 수 있다. 제약 — x 의 해가 양수이고 3x-2, 2x 가 모두 양수여야 하며, x 계수의 차가 0 이 되면 방정식이 무너지므로 좌우 x 계수를 다르게 둔다."
    creative: "(1) 네 변을 모두 일차식으로 주기(정리량이 늘 뿐 ★2 유지) (2) 둘레를 함께 주고 x, y 두 미지수로(연립 → ★2 · 74-c3) (3) 두 변의 비를 조건으로 바꾸면 배분 단계가 추가돼 ★2~3(75-03)."
```

```yaml
- id: GN-M32-74-c3
  page: 74
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    원 O 에 외접하는 사각형 ABCD 의 둘레가 30 cm 이고 AD=5 cm, AB=7 cm, CD=x cm, BC=y cm 일 때 x, y 의 값.
  category: "둘레 → 대변 합 15 → 연립"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "둘레 30 을 '외접사각형에서는 대변의 합이 같으므로 각 대변 합이 15' 로 옮겨 식을 하나 더 만듦"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "원에 외접하는 사각형 — 대변의 길이의 합이 같다"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    미지수가 둘이므로 조건도 둘이 필요한데, 둘레는 그대로 쓰면 x+y=18 하나뿐이다. 둘레의 절반이 곧 대변의 합이라는 치환을 해야 7+x=15 가 바로 떨어진다.
    통찰 1개(EQV d1)·M_total 6 → 확인문제 구역 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "둘레 30 → 대변 합 15 → 7+x=15 로 x, 5+y=15 로 y"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$x=8$, $y=10$'
  answer_source: "답지"
  figure: "crop:fig-74-c3.png"
  latex: latex-bank/gn-m32/items/74-c3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "둘레와 두 인접 변을 바꾼다. 제약 — 둘레가 짝수여야 대변 합이 정수, 두 주어진 변이 각각 대변 합보다 작아야 x, y 가 양수. 주어진 두 변은 반드시 서로 대변이 아닌 인접 변이어야 문제가 성립한다."
    creative: "(1) 두 대변을 주면 조건이 중복돼 풀리지 않음 — 함정 문항으로 쓸 수 있음 (2) x, y 대신 x:y 비를 묻기(★2) (3) 둘레 대신 넓이나 한 각의 직각 조건을 주면 피타고라스가 결합돼 ★3."
```

```yaml
- id: GN-M32-74-h4
  page: 74
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: ["UP"]
  category_type: "핵심문제"
  summary: |
    원 O 가 직사각형 ABCD 의 세 변과 접하고 DE 도 원 O 의 접선일 때, CE=6 cm, DE=10 cm 에서 BE 의 길이.
  category: "직각삼각형으로 AB → r → DE 를 두 접선 길이의 합으로"
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'원이 마주 보는 두 변에 접한다' 를 '두 변 사이 거리 AB=2r' 로, 접선 DE 를 'AD 쪽 접선 조각 + BC 쪽 접선 조각' 으로 옮겨 미지의 AD 에 대한 식을 만듦"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "원에 외접하는 사각형의 응용 — 직사각형의 세 변에 접하는 원과 또 다른 접선"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    직각삼각형 DCE 에서 DC=AB=8 을 먼저 얻어 r=4 를 확정하고, 그다음 DE=(AD-r)+(BE-r) 라는 접선 길이 분해로 AD 를 잡아야 BE 가 나온다. 두 도구(피타고라스·접선 길이)가 순서대로 맞물린다.
    UP 태그(+1)와 통찰 1개(EQV d2) → 핵심문제 출발 ★2 에서 ★3.
  tier: star_3
  mechanism_primary: "직각삼각형 DCE 로 DC=8 → r=4 → DE=(AD-4)+(BE-4), BE=AD-6 → AD=12 → BE=6"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$6\,\mathrm{cm}$'
  answer_source: "본문 답"
  figure: "crop:fig-74-h4.png"
  latex: latex-bank/gn-m32/items/74-h4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "CE 와 DE 를 피타고라스 쌍이 되게 고른다(6·10 → 5·13, 9·15, 8·17). 제약 — DC=√(DE²-CE²) 가 짝수여야 r 이 정수, 그리고 BE=BC-CE 가 양수가 되도록 DE 가 충분히 커야 한다. 접점 배치(원이 AB·AD·BC 에 접함)는 그림 고정."
    creative: "(1) BE 대신 사각형 ABED 의 넓이나 둘레를 묻기(★3 유지) (2) AB, AD 를 주고 접선 길이를 묻는 순방향으로 바꾸면 쉬워져 ★2(74-c4) (3) E 를 변 위 임의의 점으로 두고 둘레가 일정함을 보이게 하면 I-RT 가 추가돼 ★4(75-05 골조)."
```

```yaml
- id: GN-M32-74-c4
  page: 74
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    원 O 가 직사각형 ABCD 의 세 변과 접하고 AE 도 원 O 의 접선일 때, AB=4 cm, AD=6 cm 에서 AE 의 길이.
  category: "AB → r → AE 를 접선 길이 합으로 → 피타고라스 방정식"
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "접선 AE 를 'AD 쪽 접선 조각 + BC 쪽 접선 조각' 으로 분해해 미지의 BE 에 대한 식으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "원에 외접하는 사각형의 응용 — 직사각형의 세 변에 접하는 원과 또 다른 접선"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    74-h4 와 같은 골조지만 AB 가 직접 주어져 r=2 가 한 줄에 나오므로 피타고라스가 뒤로 한 번만 쓰인다. AE=(6-2)+(BE-2)=BE+2 와 AE²=4²+BE² 를 연립하면 BE=3.
    통찰 1개(EQV d1)·태그 없음 → 확인문제 구역 ★2 유지. [분류 이슈] 짝 문항 74-h4 는 ★3 이라 같은 유형에서 한 단 차이가 남 — 파일 끝 표에 기록.
  tier: star_2
  mechanism_primary: "AB=4 → r=2 → AE=BE+2 와 AE²=16+BE² → BE=3 → AE=5"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$5\,\mathrm{cm}$'
  answer_source: "답지"
  figure: "crop:fig-74-c4.png"
  latex: latex-bank/gn-m32/items/74-c4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AB(=2r)는 짝수로 두고 AD 를 바꾼다(4·6 → 6·8, 4·9). 제약 — 방정식 (AD-r+BE-r)²=AB²+BE² 에서 BE 가 양수이고 BE<AD 여야 E 가 변 위에 있다. AB 를 홀수로 두면 r 이 분수가 돼 계산이 지저분해진다."
    creative: "(1) AE 대신 BE 나 △ABE 의 넓이를 묻기(★2 유지) (2) AB 를 감추고 AE·BE 를 주면 74-h4 의 역방향이 돼 ★3 (3) 접선을 두 개 그어 두 삼각형의 둘레를 비교하게 하면 ★4."
```

### 이런 문제가 시험에 나온다

```yaml
- id: GN-M32-75-01
  page: 75
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    내접원(접점 D·E·F)을 가진 삼각형에서 BD=4 cm, CE=3 cm 이고 삼각형 ABC 의 둘레가 16 cm 일 때 AF 의 길이.
  category: "둘레 → 세 접선 조각 합의 2배 → AF"
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "둘레 16 을 '세 접선 조각(AF, BD, CE) 합의 2배' 로 옮겨 조각 하나만 남기는 식으로 바꿈"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각형의 내접원 — 접선의 길이로 변의 길이 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    세 변이 따로 주어지지 않으므로 둘레를 세 조각의 2배로 보는 치환이 없으면 식이 서지 않는다. 그 뒤 4+3+AF=8 한 줄.
    통찰 1개(EQV d1)·M_total 5 → 시험 대비 구역 출발(★2~3)에서 낮은 쪽 ★2.
  tier: star_2
  mechanism_primary: "둘레=2(AF+BD+CE) → 16=2(AF+4+3) → AF=1"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$1\,\mathrm{cm}$'
  answer_source: "답지"
  figure: "crop:fig-75-01.png"
  latex: latex-bank/gn-m32/items/75-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "둘레와 두 조각을 바꾼다. 제약 — 둘레가 짝수, 둘레의 절반이 두 조각의 합보다 커야 AF 가 양수. 16·4·3 은 AF=1 로 경계에 가까우니 변형 시 여유를 둔다."
    creative: "(1) AF 대신 한 변(AB 등)을 묻기(★2 유지) (2) 둘레와 한 변을 주고 접선 조각을 묻기(★2) (3) 직각 조건을 붙여 내접원 반지름까지 이으면 ★3(75-02)."
```

```yaml
- id: GN-M32-75-02
  page: 75
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    ∠C=90° 인 직각삼각형의 내접원(접점 D·E·F)에서 반지름이 3 cm 이고 BE=6 cm 일 때 삼각형 ABC 의 넓이.
  category: "r 과 한 조각 → 세 변을 미지수로 → 피타고라스 → 넓이"
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "직각 C 의 접점 정사각형에서 CE=CF=r=3 으로 옮겨 BC 를 확정"
    - step: 3
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "구하는 넓이에 필요한 AC 가 바로 나오지 않으므로 AF=x 로 두고 세 변을 x 로 표현한 뒤 피타고라스로 x 를 역추적"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "직각삼각형의 내접원 — 반지름과 접선의 길이"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    73-h2 와 반대로 반지름이 주어지고 변을 찾는다. CE=CF=3 으로 BC=9 를 얻은 뒤 AF=x 로 AC=x+3, AB=x+6 을 만들고 피타고라스를 풀어야 넓이가 나온다.
    통찰 2개(EQV d1 · BW d2)·M_total 7 → 시험 대비 구역 출발에서 위쪽 ★3.
  tier: star_3
  mechanism_primary: "CE=CF=3 → BC=9 → AF=x 로 AC=x+3, AB=x+6 → 피타고라스로 x=9 → 넓이=9·12/2"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$54\,\mathrm{cm}^2$'
  answer_source: "답지"
  figure: "crop:fig-75-02.png"
  latex: latex-bank/gn-m32/items/75-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "r 과 BE 를 바꾼다. 제약 — 세 변 (BE+r, AF+r, AF+BE) 이 피타고라스 수가 되어야 하므로 아무 값이나 쓸 수 없다. r=3, BE=6 → 9·12·15 쌍이고, r=2, BE=3 → 5·12·13 등 정수 쌍에서 역산해 만든다."
    creative: "(1) 넓이 대신 빗변이나 둘레를 묻기(★3 유지) (2) BE 대신 둘레를 주면 둘레 치환이 추가돼 ★3 유지 (3) 직각을 빼고 세 변을 주면 r 을 구할 도구가 중3 범위에 없으므로 직각 조건은 반드시 유지."
```

```yaml
- id: GN-M32-75-03
  page: 75
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    원 O 에 외접하는 사각형 ABCD 에서 AB=5 cm, CD=9 cm 이고 AD:BC=3:4 일 때 BC 의 길이.
  category: "대변의 합 → 합 14 를 3:4 로 배분"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "원에 외접하는 사각형 — 대변의 길이의 합이 같다"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    AD+BC=AB+CD=14 를 얻고 3:4 로 나누면 BC=8. 비례배분은 중3 에서 표준 절차라 분기라고 볼 단계가 없다.
    M_total 4·통찰 0 → 시험 대비 구역 출발(★2~3)에서 낮은 쪽 ★2. [분류 이슈] 구역만 보면 ★3 으로 볼 여지가 있어 기록.
  tier: star_2
  mechanism_primary: "AD+BC=AB+CD=14 → 3:4 배분 → BC=8"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$8\,\mathrm{cm}$'
  answer_source: "답지"
  figure: "crop:fig-75-03.png"
  latex: latex-bank/gn-m32/items/75-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AB, CD 와 비를 바꾼다. 제약 — (AB+CD) 이 비의 항의 합(3+4=7)으로 나누어떨어져야 답이 정수. 14 와 3:4 처럼 합이 배수가 되도록 짝을 고른다."
    creative: "(1) 비 대신 차(BC-AD=2)를 주기(★2 유지) (2) 둘레를 함께 주어 미지수를 늘리기(★2) (3) 두 각이 직각이라는 조건으로 바꾸면 피타고라스가 결합돼 ★3(75-04)."
```

```yaml
- id: GN-M32-75-04
  page: 75
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    원 O 에 외접하고 ∠A=∠B=90° 인 사각형 ABCD 에서 AD=10 cm, BC=15 cm 일 때 원 O 의 반지름.
  category: "대변의 합으로 CD → 수선으로 직각삼각형 → 피타고라스 → AB=2r"
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "D 에서 BC 에 수선을 그어 '외접 사다리꼴' 배치를 빗변 CD, 두 변 AB 와 BC-AD 인 직각삼각형이라는 대수 관계로 옮김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "원에 외접하는 사다리꼴 — 반지름 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    AB+CD=AD+BC=25 로 CD 를 AB 로 표현한 뒤, 보조선(수선)을 스스로 그어야 (25-AB)²=AB²+5² 가 선다. 보조선 착안이 없으면 미지수 하나를 소거할 식이 모자란다.
    또 ∠A=∠B=90° 이므로 AB 가 지름이라는 인식(AB=2r)에서 마지막 한 단계가 더 필요하다. 통찰 1개(RT d2)·M_total 7 → 시험 대비 구역에서 ★3.
  tier: star_3
  mechanism_primary: "AB+CD=25 → 수선으로 직각삼각형 → (25-AB)²=AB²+5² → AB=12=2r → r=6"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$6\,\mathrm{cm}$'
  answer_source: "답지"
  figure: "crop:fig-75-04.png"
  latex: latex-bank/gn-m32/items/75-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 평행변 AD, BC 를 바꾼다. 제약 — 차 (BC-AD) 와 AB 가 피타고라스 쌍을 이뤄야 하고 AB 가 짝수여야 r 이 정수. 10·15 → 차 5, AB=12, CD=13 의 5·12·13 쌍이며 차 8·AB=6·CD=10 등으로 바꿀 수 있다."
    creative: "(1) 반지름 대신 사다리꼴의 넓이를 묻기(★3 유지) (2) r 을 주고 BC 를 묻는 역방향(I-BW 추가 · ★4 후보) (3) 직각을 하나만 남기면 배치가 결정되지 않아 문제가 성립하지 않으므로 ∠A=∠B=90° 는 고정."
```

```yaml
- id: GN-M32-75-05
  page: 75
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: ["UP"]
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    원 O 가 직사각형 ABCD 의 세 변과 E, F, G 에서 접하고 DI 와 H 에서 접할 때,
    AB=6 cm, AD=8 cm 에서 삼각형 CDI 의 둘레의 길이.
  category: "둘레를 접선 길이 합으로 전환 → 미지점 I 가 소거"
  M: {s: 3, k: 2, a: 3, t: 0}
  M_total: 8
  insights:
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "삼각형 CDI 의 둘레라는 기하량을 DH+HI 를 접점으로 갈라 '변 위 접선 조각들의 합' 이라는 대수식으로 옮김"
    - step: 3
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "I 의 위치를 미지수로 둔 채 식을 정리하면 그 미지수가 상쇄되어, 둘레가 I 와 무관한 상수임을 읽어냄"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "원에 외접하는 사각형의 응용 — 직사각형의 세 변에 접하는 원과 또 다른 접선"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    AB=6 에서 r=3 이 나오고 접점이 각 변을 3 씩 자른다. 여기까지는 74-h4 와 같지만, 이 문항은 I 의 위치가 주어지지 않아 74-h4 식의 피타고라스 방정식을 세울 수 없다.
    대신 둘레 = CD + (DF) + (IG) + IC 로 갈라 쓰면 IB 항이 그대로 상쇄돼 16 이 남는다. 미지수를 소거하려 하지 말고 그냥 두는 것이 이 문항의 핵심이다.
    UP 태그(+1)와 통찰 2개(RT d2 · EQV d2)·M_total 8 → 시험 대비 구역 출발 ★3 에서 ★4. RT 가 있어 §2.13 저노출 유형 요건도 충족.
  tier: star_4
  mechanism_primary: "r=3 → DF=AD-3=5, IG=IB-3, IC=BC-IB → 둘레=CD+DF+IG+IC 에서 IB 상쇄 → 16"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$16\,\mathrm{cm}$'
  answer_source: "답지"
  figure: "crop:fig-75-05.png"
  latex: latex-bank/gn-m32/items/75-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AB(=2r)와 AD 를 바꾼다. 제약 — AB 는 짝수여야 r 이 정수이고, AD>r 이어야 접점이 변 안쪽에 있다. 둘레는 AB+2(AD-r)=AB+2AD-AB=2AD 이므로 답은 AD 의 2배로만 정해진다(AB 는 답에 영향 없음 — 이 점이 함정이자 출제 포인트)."
    creative: "(1) 둘레가 I 의 위치와 무관함을 서술형으로 증명시키기(★4 유지·서술형 대비) (2) I 를 특정해 CI 나 DI 를 묻기(74-h4 골조로 내려가 ★3) (3) 직사각형을 정사각형으로 특수화하면 r 과 변이 얽혀 계산이 짧아져 ★3 (4) 접선을 두 개 그어 두 삼각형 둘레의 합을 묻기(★4~5 후보)."
```

## 표본 판정 요약 (17문)

- ★ 분포: ★1 4 · ★2 9 · ★3 3 · ★4 1 · ★5 0
- 통찰형 9 · 절차형 8 · premium 0
- 통찰 유형 분포: I-EQV 8 · I-RT 2 · I-BW 1 (SC·VF·SYM·XU·PD·MI·CON 0)
- M_total 분포: 3 이 1문 · 4 가 4문 · 5 가 2문 · 6 가 3문 · 7 이 6문 · 8 이 1문 (이 범위는 통찰보다 단계 수로 층이 갈린다)
- type_hint 분포: 「원에 외접하는 사각형 — 대변의 길이의 합이 같다」 5 · 「삼각형의 내접원 — 접선의 길이로 변의 길이 구하기」 4 · 「직각삼각형의 내접원 — 반지름과 접선의 길이」 4 · 「원에 외접하는 사각형의 응용 — 직사각형의 세 변에 접하는 원과 또 다른 접선」 3 · 「원에 외접하는 사다리꼴 — 반지름 구하기」 1
- 대상층: 하위권 4 · 중하위권 4 · 중위권 6 · 중상위권 3
- 그림: 17문 전부(`crop:fig-72-01.png` ~ `crop:fig-75-05.png`). 라벨 없이는 발문만으로 조건이 복원되지 않는 문항이 많아 변형 시 그림 재생성이 필수.
- 구역별 ★ 평균: 개념원리 확인하기 1.0 · 핵심문제 익히기 2.25 · 이런 문제가 시험에 나온다 2.8

## 분류 이슈 목록

판정이 애매하거나 벤더 구역 신호와 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-M32-73-c1 | 직접 대응만으로 끝나 M_total 4·통찰 0(−1 후보)이나 짝 문항 73-h1 과 같은 유형 층이라 구역 출발 ★2 유지 | ★1 / ★2 |
| GN-M32-74-c4 | 74-h4 와 골조가 같은 유제인데 AB 가 주어져 r 이 즉시 나오므로 ★2. 같은 유형 안에서 h4(★3)와 한 단 차이가 남 | ★2 / ★3 |
| GN-M32-75-03 | 「이런 문제가 시험에 나온다」 구역(★2~3 출발)이지만 M_total 4·통찰 0 이라 ★2 로 내림 | ★2 / ★3 |
| GN-M32-75-05 | UP + 통찰 2개로 ★4 로 올렸으나 중3 단원 마무리 이전 구역에서 ★4 는 이 책 기준으로 높은 편. 카탈로그 생성 시 재판정 대상 | ★3 / ★4 |

## 카탈로그 차원 메모

나중에 「원의 접선」 유형 카탈로그를 만들 때 참고할 사항.

- **따로 세워야 할 유형** — ① 「삼각형의 내접원(일반)」과 ② 「직각삼각형의 내접원」은 반드시 분리한다. ②는 직각에서 생기는 접점 정사각형(CE=CF=r)이라는 고유한 진입 통찰을 갖고 base ★ 가 한 단 높다(★2). ③ 「원에 외접하는 사각형(대변 합)」과 ④ 「직사각형의 세 변에 접하는 원 + 보조 접선」도 분리 — ④는 반지름이 변의 절반이라는 추가 관계와 피타고라스가 결합돼 base ★ 3 이 타당하다.
- **통합해도 될 유형** — 72-01·72-03·72-04 처럼 「직접 대응만 하는 확인 문항」은 도구가 달라도 인지 부담이 같으므로 base ★ 1 의 한 유형(「접선의 길이 대응 기본」)으로 묶어도 된다. 75-04 의 「외접 사다리꼴」은 사례가 1건뿐이라 독립 유형보다 ④의 하위 변형으로 두고 2/2 파트(중단원 마무리)에서 빈도를 본 뒤 결정한다.
- **반복되는 진입 통찰** — 이 범위의 통찰 9건 중 8건이 I-EQV 이고 그중 5건이 같은 형태다(「둘레 → 대변 합 또는 접선 조각 합의 2배」 3건 · 「직각 → 접점 정사각형」 3건, 일부 중복). 카탈로그에서는 이 둘을 *유형의 진입 조건* 으로 명시해 두면 ★ 산정이 안정된다.
- **★4 이상 슬롯 후보** — 이 범위에서 §2.13 저노출 유형(RT/BW)을 가진 문항은 75-02·75-04·75-05 셋뿐이다. 「미지점이 소거되어 결과가 상수」(75-05) 골조는 이 단원에서 ★4 를 정당화할 수 있는 거의 유일한 구조이므로 카탈로그 상위 슬롯의 표준 원본으로 삼을 만하다.
