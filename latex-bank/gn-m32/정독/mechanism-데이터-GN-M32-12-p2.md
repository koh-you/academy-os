---
name: mechanism-데이터-GN-M32-12-p2
description: 개념원리 중학 3-2 12 산포도와 표준편차(2/2 · 22문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 중학 3-2 · 전사본 latex-bank/gn-m32
  section: 12 산포도와 표준편차
  unit_code: GN-M32-12
  part: "2/2"
  extract_range: "120~123쪽 · 120-01~123-u3"
  total_problems: 22
  unit_total: 43
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). depth_score 는 effective_depth 의 합. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-m32/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-m32/items/<id>.tex
  image_source: latex-bank/gn-m32/figures/ (crops.json)
---

# 개념원리 중학 3-2 · 12 산포도와 표준편차 (2/2) 정독 데이터 (v1.0)

이 파일은 120~123쪽 22문항 전수를 다룬다. 12단원 후반은 개념 학습이 끝난 뒤의 **정리 구역**만으로 이루어져 있다 — 「중단원 마무리하기 STEP 1 기본 문제」 9문(120~121쪽) · 「STEP 2 발전 문제」 6문(121~122쪽) · 「STEP 3 실력 UP」 3문(122쪽) · 「서술형 대비 문제」 4문(123쪽 · 예제 `e` 1문 + 유제 `u` 3문). 개념원리 중학은 난이도 표기(`level`)가 없고 **구역 자체가 난이도 층**이라 ★ 출발점을 구역에서 잡았다(STEP 1 ★2 · STEP 2 ★3 · STEP 3 ★4 · 서술형 ★3). 태그는 「꼭나와」 4문(120-05 · 121-07 · 121-10 · 122-13)뿐이고 「UP」 태그는 없다. 그림(표·그래프·과녁) 문항은 10문이고 나머지 12문은 발문만으로 완결된다.

★ 조정은 이 범위 전체에서 한 기준으로 통일했다 — **통찰 0 이고 M_total ≤ 6 이면 출발점에서 −1**, 통찰 1개면 출발점 유지, 통찰 2개 이상이면서 M_total ≥ 8 이면 +1. 개념원리 중학의 정리 구역은 구역 라벨이 실제 난이도보다 한 단 높게 잡히는 경향이 있어(STEP 1 에 정의 확인 문항이, 서술형에 계산 반복 문항이 섞임) −1 이 자주 적용됐다. 구역 라벨과 2단 이상 어긋난 문항은 없고, 판정이 갈릴 만한 세 문항만 파일 끝 표에 기록했다.

단원 내용은 (가) 편차의 정의와 편차의 총합이 0 이라는 성질, (나) 분산·표준편차의 계산, (다) 평균·표준편차로 두 집단을 비교하기(우수함 vs 고른 정도), (라) 변량을 일차변환했을 때의 평균·분산 변화, (마) 합·제곱의 합 두 조건을 곱셈 공식으로 묶어 미지수의 곱을 구하기 다섯 갈래다. 이 범위의 통찰은 (마)에 몰려 있고(주로 I-CON — 평균 조건과 분산 조건을 하나의 대칭식으로 통합), 가장 깊은 곳은 그 골조를 입체도형에 얹은 122-16 이다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다. 이 단원의 **숫자 변형 제약은 거의 전부 "떨어지는 값" 조건**이다 — 편차의 총합이 0 이 되어 미지 편차가 정수로 결정될 것, 편차의 제곱의 합이 자료 수로 나누어떨어져 분산이 깔끔할 것, 표준편차를 묻는다면 분산이 완전제곱이거나 정리되는 무리수일 것. 표 그림이 붙은 문항은 칸 수와 라벨(학생 이름·월 이름)이 고정이라 자료 개수를 바꿀 수 없다는 제약이 추가된다.

## 문항 데이터

### 중단원 마무리하기 STEP 1 기본 문제

```yaml
- id: GN-M32-120-01
  page: 120
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "마무리 STEP1 기본"
  summary: |
    편차·분산·표준편차의 뜻에 대한 다섯 설명 중 옳은 것 모두 고르기(정답 2개).
  category: "산포도 용어의 정의 확인 → 참거짓 판별"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "편차·분산·표준편차의 뜻 참거짓 판별"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    편차=(변량)−(평균) · 편차의 총합은 0 · 분산은 편차의 제곱의 평균 · 표준편차는 분산의 음이 아닌 제곱근 · 표준편차가 클수록 흩어져 있다 — 다섯 설명을 정의에 1:1 대조하는 한 단계.
    ①은 부호가 뒤집혔고 ③은 제곱이 빠졌으며 ⑤는 대소 해석이 반대다. 계산이 전혀 없다.
    STEP 1 출발 ★2 이나 통찰 0·M_total 4 → −1 하여 ★1.
  tier: star_1
  mechanism_primary: "각 선택지를 산포도 용어의 정의와 1:1 대조 → 옳은 두 개 선택"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '②, ④'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m32/items/120-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수치가 없는 정의 문항이라 숫자 변형 여지가 없음. 대신 오답 선택지가 어긋나는 지점(편차의 부호 뒤집기 · 제곱 누락 · 제곱근의 부호 · 클수록/작을수록)을 바꿔 다른 다섯 설명을 만든다. 제약: 정답 개수(2개)를 발문에 명시할 것."
    creative: "(1) '옳지 않은 것'으로 뒤집기(★1 유지) (2) 각 설명에 반례가 될 작은 자료를 붙여 판단하게 하면 계산이 붙어 ★2 (3) '표준편차가 0 인 자료의 모든 변량은 같다'를 넣으면 동치 변환 1개(I-EQV d1) → ★2."
```

```yaml
- id: GN-M32-120-02
  page: 120
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "마무리 STEP1 기본"
  summary: |
    6회에 걸친 100 m 달리기 기록(17, 21, 22, 19, 20, 21초)에서 이 자료의 편차가 아닌 것 고르기.
  category: "평균 계산 → 각 변량의 편차 → 선택지 대조"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "자료에서 평균을 구해 편차 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    평균 20초를 구하면 편차는 −3, 1, 2, −1, 0, 1 이고 여기에 없는 −2 가 답.
    '아닌 것'을 고르는 표기 함정 외에는 평균 한 번·뺄셈 여섯 번이 전부다.
    STEP 1 출발 ★2 이나 통찰 0·M_total 5 → −1 하여 ★1.
  tier: star_1
  mechanism_primary: "6개 기록의 평균 20 → 각 편차 계산 → 편차 집합에 없는 값 선택"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '②'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m32/items/120-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "여섯 기록의 값. 제약: 합이 6의 배수라야 평균이 정수이고, 선택지 다섯 중 정확히 넷만 실제 편차와 일치하고 하나만 어긋나야 함. 단위(초)는 고정."
    creative: "(1) '편차인 것'을 고르게 뒤집기(★1) (2) 기록 하나를 미지수로 두고 그 편차가 주어진 값이 되게 하는 기록을 묻기(I-BW d1 → ★2) (3) 편차까지 구한 뒤 표준편차를 이어 묻기(★2)."
```

```yaml
- id: GN-M32-120-03
  page: 120
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "마무리 STEP1 기본"
  summary: |
    나이의 평균이 23세인 수영 강습반에서 편차가 −7세인 회원의 나이 구하기.
  category: "편차의 정의 역이용 → (변량)=(평균)+(편차)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "편차가 주어질 때 변량 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    편차의 정의식을 변량에 대해 푸는 한 줄. 23+(−7)=16.
    함정이라 할 만한 것은 부호를 더하지 않고 빼는 실수 하나뿐이다.
    STEP 1 출발 ★2 이나 통찰 0·M_total 4 → −1 하여 ★1.
  tier: star_1
  mechanism_primary: "(변량)=(평균)+(편차) → 23+(−7)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '16세'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m32/items/120-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "평균과 편차의 부호·크기. 제약: 나이·키·점수처럼 양수여야 하는 변량이면 |편차| < 평균 이어야 하고, 소재에 맞는 단위를 유지할 것."
    creative: "(1) 변량을 주고 편차를 묻기(★1) (2) 두 사람의 편차만 주고 나이 차를 묻기(평균이 상쇄 → ★2 · 120-04 골조) (3) 편차의 총합이 0 이라는 조건을 끼워 한 명의 편차를 미지수로 두기(★2)."
```

```yaml
- id: GN-M32-120-04
  page: 120
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "마무리 STEP1 기본"
  summary: |
    5명의 1분간 윗몸 일으키기 횟수의 편차 표(지우 6, 도현 x, 선우 3, 채은 −1, 재윤 −4)에서 지우와 도현의 횟수의 차 구하기.
  category: "편차의 총합 0 → 미지 편차 결정 → 두 사람의 횟수의 차 = 두 편차의 차"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "구하는 것이 횟수의 차라 평균이 상쇄된다는 점을 보고 실제 횟수 대신 편차의 차로 바꿔 계산"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "편차의 총합이 0임을 이용해 미지의 편차 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    편차의 총합이 0 이라는 성질로 x=−4 를 얻는다. 평균이 주어지지 않아 실제 횟수는 구할 수 없지만, 묻는 것이 차라서 평균이 상쇄돼 6−(−4)=10 으로 끝난다.
    '평균을 모르면 못 푼다'고 막히는 것이 이 문항의 진짜 관문이고, 그 지점이 동치 변환 1개(EQV d1)다.
    STEP 1 출발 ★2 · 통찰 1개 → 유지.
  tier: star_2
  mechanism_primary: "편차의 총합 0 → x=−4 → (지우)−(도현) = 6−(−4) = 10회"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '10회'
  answer_source: "답지"
  figure: crop:fig-120-04.png
  latex: latex-bank/gn-m32/items/120-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "알려진 네 편차의 값. 제약: 총합이 0 이 되도록 미지 편차가 정수로 결정되어야 하고, 그림 표의 학생 이름과 칸 수(5칸)는 고정. 차를 묻는 두 사람 중 한 명이 미지 칸이라야 골조가 유지됨."
    creative: "(1) 미지 편차를 두 칸에 x, x+k 로 걸치기(★3 · 121-10 골조) (2) 평균을 함께 주고 실제 횟수를 묻기(EQV 소멸 → ★2) (3) 편차를 모두 확정한 뒤 분산·표준편차로 확장(★2 · 120-05 골조)."
```

```yaml
- id: GN-M32-120-05
  page: 120
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "마무리 STEP1 기본"
  summary: |
    5명(A~E) 사회 성적의 편차 표(−4, 2, 4, x, 0)에서 사회 성적의 표준편차 구하기. 5지선다.
  category: "편차의 총합 0 → 미지 편차 → 편차의 제곱의 평균(분산) → 음이 아닌 제곱근"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "편차 표에서 분산·표준편차 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    총합 0 으로 x=−2, 분산은 (16+4+16+4+0)/5=8, 표준편차 2√2 점.
    편차 → 분산 → 표준편차의 표준 3단계를 그대로 밟는 계산 문항으로 선택지가 모두 무리수라 제곱근 정리에서만 걸린다.
    통찰 0 이지만 M_total 7 로 −1 조건(≤6)에 걸리지 않아 STEP 1 출발 ★2 유지. 「꼭나와」는 빈출 표시일 뿐 ★ 가산 없음.
  tier: star_2
  mechanism_primary: "편차의 총합 0 → x=−2 → 편차의 제곱의 평균 8 → 표준편차 2√2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑤'
  answer_source: "답지"
  figure: crop:fig-120-05.png
  latex: latex-bank/gn-m32/items/120-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "알려진 네 편차의 값. 제약: 총합 0 에서 남은 편차가 정수로 결정되고, 편차의 제곱의 합이 5의 배수라야 분산이 정수가 되어 선택지가 깔끔하다. 표의 학생 라벨 A~E 와 칸 수는 고정."
    creative: "(1) 분산을 주고 미지 편차를 되묻기(I-BW d2 → ★3) (2) 편차 대신 성적과 평균을 주어 편차부터 만들게 하기(★2) (3) 미지 편차를 두 칸으로 늘리고 두 편차의 곱을 묻기(I-CON 추가 → ★3 · 123-e1 골조)."
```

```yaml
- id: GN-M32-120-06
  page: 120
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "마무리 STEP1 기본"
  summary: |
    네 변량 7, x, 8, 10 의 평균이 9일 때 분산. 5지선다.
  category: "평균 조건 → 미지 변량 결정 → 편차 → 분산"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평균이 주어진 변량에서 미지수를 구해 분산 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    평균 9 에서 x=11, 편차는 −2, 2, −1, 1 이므로 분산은 10/4=5/2.
    미지수 결정 → 편차 → 분산으로 이어지는 표준 연결이고 분수 답이 나오는 것만 주의 지점이다.
    통찰 0 이지만 M_total 7 → −1 조건 밖이라 STEP 1 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "평균 9 → x=11 → 편차 −2, 2, −1, 1 → 제곱의 평균 5/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '④'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m32/items/120-06.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 상수 변량과 평균. 제약: 미지수가 정수로 결정되어야 하고, 편차의 제곱의 합을 변량 수로 나눈 값이 선택지에 넣을 만한 정수 또는 간단한 분수여야 함."
    creative: "(1) 분산을 주고 미지 변량을 되묻기(I-BW → ★3) (2) 변량을 5개로 늘려 미지수를 둘로(★3 · 122-13 골조) (3) 평균 대신 한 변량의 편차를 주기(★2)."
```

```yaml
- id: GN-M32-121-07
  page: 121
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "마무리 STEP1 기본"
  summary: |
    두 반 A, B 의 수학 성적의 평균과 표준편차 표를 보고 옳은 설명 고르기. 5지선다.
  category: "표준편차의 대소 → 고른 정도 해석 · 대푯값만으로 개별 변량은 단정 불가"
  M: {s: 1, k: 1, a: 2, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "표준편차라는 수치를 '자료가 평균 주위에 얼마나 모여 있는가'라는 분포 성질로 옮겨 읽음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "평균·표준편차로 두 집단 비교하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    표준편차가 작은 반이 고르다 — 우수함(평균)과 고른 정도(표준편차)는 서로 다른 축이라 ①②와 ③④를 갈라서 판단해야 한다.
    ⑤는 평균과 표준편차만으로 개별 학생의 점수를 단정하는 전형적 함정이다.
    수치 → 분포 해석의 표현 전환 1개(RT d1)·M_total 6 → STEP 1 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "표준편차가 작은 쪽이 고르다 → A반 · 대푯값만으로 개별 점수는 단정 불가 → ⑤ 기각"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '③'
  answer_source: "답지"
  figure: crop:fig-121-07.png
  latex: latex-bank/gn-m32/items/121-07.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 반의 평균과 표준편차 값. 제약: 평균의 대소와 표준편차의 대소가 서로 반대라야 '우수하다'와 '고르다'를 분리해 물을 수 있고, 두 값 모두 양수여야 함. 표의 행 이름(평균·표준편차)은 고정."
    creative: "(1) 평균을 같게 두고 표준편차만 다르게 하면 판단 축이 하나로 줄어 ★2 (2) 세 반으로 늘려 고른 순서를 묻기(★3) (3) 표준편차가 0 인 반을 넣어 '그 반의 모든 학생 점수가 같다'를 판단하게 하면 I-EQV 추가 → ★3."
```

```yaml
- id: GN-M32-121-08
  page: 121
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "마무리 STEP1 기본"
  summary: |
    두 농구팀 A, B 의 자유투 성공 개수 꺾은선그래프에서 ⑴ 성공 기록이 더 좋은 팀 ⑵ 기록이 더 고른 팀 답하기.
  category: "그래프에서 평균 비교(우수) · 평균 주위의 흩어짐 비교(고른 정도)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "꺾은선그래프의 점 배치를 평균(높이의 중심)과 산포(흔들림의 폭) 두 수치로 옮겨 읽음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "그래프 자료에서 평균·산포 비교하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    그래프를 자료로 되돌려 평균이 높은 팀과 평균선 주위로 덜 흔들리는 팀을 따로 읽는다. 두 물음의 답이 서로 다른 팀이라는 점이 이 문항의 장치다.
    계산으로 확인할 수도 있지만 그래프 모양만으로 판단하는 것이 의도된 경로다.
    그래프 → 수치 표현 전환 1개(RT d1)·M_total 6 → STEP 1 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "그래프에서 두 팀의 평균 비교 → 기록이 좋은 팀 · 평균선 주위 흔들림 비교 → 고른 팀"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $\pt{B}$ 팀 ⑵ $\pt{A}$ 팀'
  answer_source: "답지"
  figure: crop:fig-121-08.png
  latex: latex-bank/gn-m32/items/121-08.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 팀 회차별 성공 개수. 제약: 평균이 큰 팀과 흔들림이 작은 팀이 서로 달라야 두 물음이 분리되고, 평균은 정수로 떨어지게. 그래프의 가로축 회차 수와 팀 라벨은 고정."
    creative: "(1) 그래프를 표로 바꾸면 표현 전환이 사라져 ★2 이하의 계산 문항이 됨 (2) 실제 표준편차를 계산해 답하게 하기(★2~3) (3) 한 회차의 기록을 미지수로 두고 'A팀이 더 고르려면'의 조건을 묻기(I-BW 추가 → ★3)."
```

```yaml
- id: GN-M32-121-09
  page: 121
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "마무리 STEP1 기본"
  summary: |
    학생 8명의 수학 성적이 각각 1점씩 올라갈 때 평균과 표준편차가 어떻게 변하는지 고르기. 5지선다.
  category: "모든 변량에 같은 수를 더하면 평균은 그만큼 이동, 편차는 불변 → 표준편차 불변"
  M: {s: 1, k: 1, a: 2, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'모든 변량 +1' 조건을 '평균 +1, 따라서 편차는 그대로'로 옮겨 표준편차 불변을 끌어냄"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "변량에 일정한 수를 더할 때 평균·표준편차의 변화"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    평균은 그대로 1점 따라 올라가지만 편차=(변량)−(평균)는 1−1 로 상쇄돼 변하지 않으므로 분산·표준편차도 그대로다.
    평균이 오르니 표준편차도 오른다고 보는 것이 대표 오답(①·④). 인원 8명은 계산에 쓰이지 않는 장치다.
    동치 변환 1개(EQV d1)·M_total 6 → STEP 1 출발 ★2 유지. 122-15 일차변환의 하위 버전.
  tier: star_2
  mechanism_primary: "변량 +1 → 평균 +1 → 편차 불변 → 분산·표준편차 불변"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '③'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m32/items/121-09.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "더하는 수(정수·음수)와 인원 수. 제약: 반드시 '모든 변량에 같은 수'라야 하고, 곱셈으로 바꾸면 표준편차도 그 수의 절댓값 배가 되므로 답이 달라짐."
    creative: "(1) 각 변량을 2배 하기(평균 2배·표준편차 2배 → ★2) (2) 2배 후 3 빼기 일차변환(★3 · 122-15) (3) '평균은 그대로인데 표준편차만 커지는 조작'을 찾게 하기(I-BW 추가 → ★3)."
```

### 중단원 마무리하기 STEP 2 발전 문제

```yaml
- id: GN-M32-121-10
  page: 121
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "마무리 STEP2 발전"
  summary: |
    5명(A~E) 국어 성적의 편차 표(x, −3, x+4, 2, −1)와 평균 75점에서 A와 C의 국어 성적의 평균. 5지선다.
  category: "편차의 총합 0 → x 결정 → (변량)=(평균)+(편차) → 두 변량의 평균"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "편차의 총합이 0임을 이용해 미지의 편차 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    총합 0 에서 2x+2=0 이므로 x=−1, A와 C의 편차는 −1 과 3, 성적은 74점과 78점이라 평균 76점.
    미지수가 두 칸에 걸쳐 있을 뿐 도구는 편차의 총합 0 하나이고, 평균이 주어져 성적 환원도 대입 한 줄이다.
    통찰 0·M_total 6 → STEP 2 출발 ★3 에서 −1 하여 ★2. 「꼭나와」는 ★ 가산 없음.
  tier: star_2
  mechanism_primary: "편차의 총합 0 → x=−1 → A 74점·C 78점 → 두 점수의 평균 76점"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '④'
  answer_source: "답지"
  figure: crop:fig-121-10.png
  latex: latex-bank/gn-m32/items/121-10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 상수 편차와 두 미지 칸의 관계식(x, x+4). 제약: 총합 0 에서 x 가 정수로 결정되어야 하고, 두 미지 칸 편차의 합이 짝수라야 묻는 평균이 정수. 표의 학생 라벨과 5칸 구성은 고정."
    creative: "(1) 두 미지 편차를 서로 다른 문자로 두고 관계식을 하나 더 주기(I-CON 추가 → ★3) (2) A·C 의 성적 대신 전체의 표준편차를 묻기(★2) (3) 평균을 미지로 두고 대신 한 학생의 성적을 주기(I-BW → ★3)."
```

```yaml
- id: GN-M32-121-11
  page: 121
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "마무리 STEP2 발전"
  summary: |
    자연수 중 연속하는 세 짝수의 분산. 5지선다.
  category: "연속 세 짝수를 평균 중심의 대칭으로 두기 → 편차 −2, 0, 2 → 분산"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "세 수를 2n−2, 2n, 2n+2 로 가운데를 평균에 맞춰 대칭 배치해 편차에서 n 을 소거"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "연속하는 수의 분산 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    구체적인 세 짝수를 아무거나 넣어 계산해도 답은 나오지만, 그러면 '어떤 세 짝수든 같다'가 보이지 않는다. 가운데 수를 평균으로 잡는 대칭 배치를 하면 n 이 소거되고 편차가 −2, 0, 2 로 고정돼 분산 8/3 이 일반적으로 성립한다.
    문자를 세워야 한다는 점에서 앞 구역의 계산 문항과 층이 갈린다.
    대칭 활용 1개(SYM d2)·M_total 5 → STEP 2 출발 ★3 유지.
  tier: star_3
  mechanism_primary: "세 짝수를 2n−2, 2n, 2n+2 로 → 평균 2n → 편차 −2, 0, 2 → 분산 8/3"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '④'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m32/items/121-11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수의 간격(연속 정수·연속 홀수·공차 d 의 등차 세 수)과 개수(3 → 5). 제약: 개수가 홀수라야 가운데 수가 평균이 되어 대칭 배치가 깔끔하고, 분산은 간격의 제곱에 비례하므로 선택지 간격을 그에 맞춰야 함."
    creative: "(1) 연속하는 다섯 짝수로 늘리기(편차 −4, −2, 0, 2, 4 → ★3) (2) 분산을 주고 간격이나 개수를 되묻기(I-BW 추가 → ★3~4) (3) '연속하는 세 자연수의 분산은 항상 2/3 임을 설명하시오' 서술형으로 전환(SYM 유지 → ★3)."
```

```yaml
- id: GN-M32-121-12
  page: 121
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "마무리 STEP2 발전"
  summary: |
    5명(A~E)이 서로의 키를 비교한 대화(A는 평균보다 3 cm 크다, B는 A보다 4 cm 작다, C는 B보다 크다, D는 평균과 같다, E는 D보다 3 cm 작다)에서 5명의 키의 표준편차 구하기.
  category: "대화의 상대 비교 → 평균 기준 편차로 통일 → 편차의 총합 0 → 분산 → 표준편차"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'평균보다 3 크다' '누구보다 4 작다'처럼 기준이 제각각인 말을 모두 평균 기준 편차 한 줄로 옮김"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "말로 흩어진 다섯 진술을 편차의 총합 0 하나로 묶어 유일하게 남은 C의 편차를 결정"
  insight_count: 2
  depth_score: 4.00
  type_id: null
  type_hint: "조건(대화)에서 편차를 세워 표준편차 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    A 3, B −1, D 0, E −3 까지 편차로 통일하면 C만 미정이고 총합 0 으로 C의 편차가 1 로 결정된다(C가 B보다 크다는 진술과도 어긋나지 않는다). 이후 분산 4, 표준편차 2 cm 는 한 줄.
    관문은 계산이 아니라 기준이 뒤섞인 진술을 모두 '평균과의 차'로 바꾸는 데 있다.
    통찰 2개(RT d2·CON d2)로 +1 후보이나 결정 이후의 계산이 표준 분산 한 줄이라 STEP 2 출발 ★3 유지 — [분류 이슈] 로 기록.
  tier: star_3
  mechanism_primary: "대화 → 편차 3, −1, ?, 0, −3 → 총합 0 으로 C의 편차 1 → 분산 4 → 표준편차 2 cm"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$2\,\mathrm{cm}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m32/items/121-12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 진술의 차이값(3, 4, 3)과 누구를 기준으로 삼는지. 제약: 다섯 편차의 총합이 0 이 되도록 남은 한 명의 편차가 정수로 결정되어야 하고, 'C는 B보다 크다' 같은 대소 진술과 모순되지 않아야 하며, 분산이 완전제곱이라야 표준편차가 정수."
    creative: "(1) 미지 인물을 두 명으로 늘리고 대소 진술로 후보를 걸러내게 하면 I-VF 추가 → ★4 (2) 대화를 표로 바꾸면 표현 전환이 사라져 ★2 (3) 표준편차를 주고 한 진술의 수치를 되묻기(I-BW 추가 → ★4)."
```

```yaml
- id: GN-M32-122-13
  page: 122
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "마무리 STEP2 발전"
  summary: |
    3월부터 7월까지 도서관에 간 횟수 표(두 칸이 a, b)에서 평균이 5회이고 분산이 10일 때 ab 의 값.
  category: "평균 조건 → a+b · 분산 조건 → 편차의 제곱의 합 → 곱셈 공식으로 ab"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "평균 조건과 분산 조건을 a+b 와 a²+b² 두 대칭식으로 모은 뒤 곱셈 공식으로 ab 를 직접 뽑음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "평균과 분산이 주어질 때 미지의 두 변량의 곱 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    a, b 를 각각 구하려고 연립하면 이차방정식으로 번진다. 평균에서 a+b 를, 분산에서 (a−5)²+(b−5)² 를 얻어 (a+b)²=a²+b²+2ab 한 줄로 곱을 꺼내는 것이 의도된 경로다.
    묻는 값이 곱이라는 점이 이 경로를 쓰라는 신호다.
    조건 통합 1개(CON d2)·M_total 7 → STEP 2 출발 ★3 유지.
  tier: star_3
  mechanism_primary: "평균 5 → a+b 결정 → 분산 10 → a²+b² 결정 → (a+b)²−(a²+b²)=2ab → ab=10"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$10$'
  answer_source: "답지"
  figure: crop:fig-122-13.png
  latex: latex-bank/gn-m32/items/122-13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "알려진 세 달의 횟수와 평균·분산. 제약: 평균이 정수, 편차의 제곱의 합이 자료 수의 배수, ab 가 정수로 떨어져야 하고 실제로 그런 실수 a, b 가 존재해야 함((a+b)² ≤ 2(a²+b²)). 표의 월 이름과 5칸 구성은 고정."
    creative: "(1) ab 대신 a−b 나 a²+b² 를 묻기(★3) (2) a, b 를 각각 구하게 하면 이차방정식 풀이가 붙어 ★4 (3) 미지 칸을 세 개로 늘리면 조건이 하나 더 필요해 ★4."
```

```yaml
- id: GN-M32-122-14
  page: 122
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "마무리 STEP2 발전"
  summary: |
    두 반의 학생 수·체육 성적의 평균·표준편차 표(A반 20명 평균 7 표준편차 2, B반 10명 평균 7 표준편차 √7)에서 두 반 전체 학생의 표준편차.
  category: "표준편차 → 편차의 제곱의 총합으로 환원 → 평균이 같으므로 두 총합을 합산 → 전체 분산"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "표준편차를 '(편차)²의 총합 = (학생 수)×(분산)'으로 바꿔 서로 더할 수 있는 양으로 만듦"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 반의 평균이 7 로 같다는 조건을 포착해 편차의 기준을 공유시키고 두 총합을 그대로 합침"
  insight_count: 2
  depth_score: 4.00
  type_id: null
  type_hint: "평균이 같은 두 집단을 합친 자료의 표준편차"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    표준편차나 분산은 그대로 평균 낼 수 없고 (편차)²의 총합만 더할 수 있다. 20×4+10×7=150 을 전체 30명으로 나눠 분산 5, 표준편차 √5 점.
    두 반의 평균이 같다는 것이 이 합산을 허용하는 전제이고, 이를 놓치면 (2+√7)/2 처럼 표준편차를 직접 평균 내는 오답으로 간다.
    통찰 2개(EQV d2·CON d2)·M_total 8 → STEP 2 출발 ★3 에서 +1 하여 ★4.
  tier: star_4
  mechanism_primary: "(편차)²의 총합 20×4+10×7=150 → 전체 30명으로 나눠 분산 5 → 표준편차 √5"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\sqrt{5}$점'
  answer_source: "답지"
  figure: crop:fig-122-14.png
  latex: latex-bank/gn-m32/items/122-14.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 반의 학생 수와 표준편차. 제약: 두 반의 평균은 반드시 같게 두어야 하고(다르면 중3 범위를 벗어남), 가중 제곱합이 전체 인원으로 나누어떨어져야 분산이 깔끔하다. 표의 행 구성(학생 수·평균·표준편차)은 고정."
    creative: "(1) 전체 표준편차를 주고 한 반의 표준편차를 되묻기(I-BW 추가 → ★4) (2) 세 반으로 늘리기(계산만 증가 → ★4) (3) 인원 비만 주고(2:1) 표준편차를 묻기(추상도 상승 → ★4)."
```

```yaml
- id: GN-M32-122-15
  page: 122
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "마무리 STEP2 발전"
  summary: |
    평균 4·분산 6 인 세 변량 a, b, c 에 대해 3a−2, 3b−2, 3c−2 의 평균이 m, 분산이 n 일 때 n−m 의 값. 5지선다.
  category: "일차변환 하의 평균·분산 변화 → 평균은 식을 그대로 따라가고 분산은 계수의 제곱배"
  M: {s: 1, k: 1, a: 3, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'3배 한 뒤 2 빼기'를 '편차는 3배, 상수항은 편차에 영향 없음'으로 옮겨 분산이 9배임을 끌어냄"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "변량을 일차변환했을 때의 평균·분산"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    m=3·4−2=10, 새 편차는 원 편차의 3배라 n=3²·6=54, n−m=44.
    평균은 일차식을 그대로 따라가지만 분산은 상수항을 무시하고 계수의 제곱만 따른다는 비대칭이 핵심이고, −2 를 분산에도 적용하는 것이 대표 오답이다. 변량이 문자라 각각 구할 길이 없다는 점이 이 경로를 강제한다.
    동치 변환 1개(EQV d2)·M_total 7 → STEP 2 출발 ★3 유지.
  tier: star_3
  mechanism_primary: "평균 m=3(4)−2=10 · 편차가 3배 → 분산 n=9×6=54 → n−m=44"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '①'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m32/items/122-15.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수·상수항과 원 자료의 평균·분산. 제약: 분산은 계수의 제곱배라 값이 빠르게 커지므로 계수는 2~3 정도로 두고, n−m 이 선택지 다섯 개를 1 간격으로 배치할 만한 크기가 되게."
    creative: "(1) 분산 대신 표준편차로 묻기(제곱근이 붙어 ★3) (2) 계수를 음수로 두기(평균은 뒤집혀도 분산은 그대로 → T-부호 강화 ★3) (3) 변환 후의 평균·분산을 주고 원 자료의 평균·분산을 되묻기(I-BW 추가 → ★4)."
```

### 중단원 마무리하기 STEP 3 실력 UP

```yaml
- id: GN-M32-122-16
  page: 122
  vendor_label: "중단원 마무리하기 STEP 3 실력 UP"
  vendor_level: "-"
  vendor_tags: []
  category_type: "마무리 STEP3 실력UP"
  summary: |
    밑면의 가로·세로의 길이와 높이가 각각 a, b, c 인 직육면체에서 모서리 12개의 길이의 평균이 5, 표준편차가 √10 일 때 6개의 면의 넓이의 평균.
  category: "모서리·면을 a, b, c 의 대칭식으로 환원 → a+b+c 와 a²+b²+c² → 곱셈 공식으로 ab+bc+ca"
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "모서리 12개·면 6개라는 입체의 구성을 4(a+b+c)와 2(ab+bc+ca)라는 대칭식으로 옮김"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "평균 조건과 표준편차 조건을 각각 a+b+c=15 와 (a−5)²+(b−5)²+(c−5)²=30 으로 통합"
    - step: 3
      type: I-SYM
      depth: 3
      effective_depth: 3
      signal_ref: []
      description: "(a+b+c)²=a²+b²+c²+2(ab+bc+ca) 대칭식 항등으로 구하려는 ab+bc+ca 를 이미 아는 두 값에 연결"
  insight_count: 3
  depth_score: 7.00
  type_id: null
  type_hint: "도형의 길이·넓이에 적용된 평균·분산(대칭식 활용)"
  base_star: null
  effective_star: 5
  star: 5
  premium: false
  rationale: |
    a, b, c 를 각각 구할 수 없고 구할 필요도 없다는 것을 알아채야 풀린다 — 주어진 것(길이의 합·제곱의 합)도 구하는 것(면의 넓이의 합)도 모두 a, b, c 의 대칭식이라 곱셈 공식 하나로 이어진다.
    모서리 평균에서 a+b+c=15, 분산 10 에서 a²+b²+c²=105, 따라서 ab+bc+ca=60 이고 면의 넓이의 평균은 2·60/6=20.
    입체 구성 → 대칭식 전환·두 조건 통합·대칭식 항등 세 통찰(RT d2·CON d2·SYM d3)·M_total 11 → STEP 3 출발 ★4 에서 +1 하여 ★5. [분류 이슈] ★5 이면서 novelty_score 가 0 이라 v3.8 §2.14 게이트에 걸리는데, 참신도는 카탈로그 작성 전 잠정값이므로 기록만 한다.
  tier: star_5
  mechanism_primary: "모서리 평균 → a+b+c=15 · 분산 10 → a²+b²+c²=105 → (a+b+c)²로 ab+bc+ca=60 → 면의 넓이의 평균 2(ab+bc+ca)/6=20"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$20$'
  answer_source: "답지"
  figure: crop:fig-122-16.png
  latex: latex-bank/gn-m32/items/122-16.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모서리 길이의 평균과 표준편차. 제약: a+b+c 와 a²+b²+c² 가 정수로 떨어지고 ab+bc+ca ≥ 0, 나아가 실제로 양수 a, b, c 가 존재하는 조합이어야 함. 모서리 12개·면 6개라는 개수와 그림의 a, b, c 라벨 위치는 고정."
    creative: "(1) 면의 넓이의 평균 대신 겉넓이나 대각선의 길이(√(a²+b²+c²))를 묻기(★4~5) (2) 정사각기둥으로 제한하면 미지수가 둘로 줄어 ★3 (3) 면의 넓이의 평균·분산을 주고 모서리의 평균을 되묻기(I-BW 추가 → ★5) (4) 삼각기둥·사면체로 소재를 바꾸면 대칭식 구조가 달라져 재설계 필요."
```

```yaml
- id: GN-M32-122-17
  page: 122
  vendor_label: "중단원 마무리하기 STEP 3 실력 UP"
  vendor_level: "-"
  vendor_tags: []
  category_type: "마무리 STEP3 실력UP"
  summary: |
    학생 8명의 수학 성적의 평균이 60점, 분산이 14일 때 성적이 60점인 학생 한 명이 빠지면 나머지 7명의 분산.
  category: "빠진 값이 평균과 같음 → 평균 불변 · 편차의 제곱의 총합 불변 → 분모만 8에서 7로"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'빠진 학생의 점수가 평균과 같다'를 '남은 7명의 평균도 60 그대로'로 옮김"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "분산을 (편차)²의 총합 ÷ 자료 수로 분해해 총합은 그대로이고 분모만 줄어든다는 하나의 관계로 묶음"
  insight_count: 2
  depth_score: 4.00
  type_id: null
  type_hint: "자료의 일부가 빠졌을 때 분산의 변화"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    (편차)²의 총합은 8×14=112 이고 빠진 학생의 편차가 0 이라 총합이 줄지 않는다. 평균도 그대로이므로 남은 7명의 분산은 112/7=16.
    자료가 하나 줄었으니 분산도 줄 것이라는 직관이 뒤집히는 지점(분모만 작아져 오히려 커짐)이 이 문항의 과녁이다. 두 가지 불변(평균·제곱합)을 동시에 잡아야 한다.
    통찰 2개(EQV d2·CON d2)·M_total 8 → STEP 3 출발 ★4 유지.
  tier: star_4
  mechanism_primary: "(편차)²의 총합 8×14=112 · 빠진 학생의 편차 0 → 총합 유지 → 7로 나눠 16"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$16$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m32/items/122-17.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "인원·평균·분산과 빠진 학생의 점수. 제약: 빠진 점수를 평균과 다르게 두면 평균 이동까지 계산해야 해 중3 범위가 버거워지므로 평균과 같게 유지하고, (자료 수)×(분산)이 남은 인원으로 나누어떨어지게 할 것."
    creative: "(1) 반대로 60점인 학생이 한 명 더 들어오는 경우(분산이 줄어듦 → ★4) (2) 빠진 점수를 평균±k 로 두면 평균 이동이 겹쳐 ★5 (3) '분산이 커졌는지 작아졌는지 근거와 함께 설명하시오' 서술형(★4) (4) 두 명이 동시에 빠지되 두 편차가 서로 부호만 다른 경우(★4~5)."
```

```yaml
- id: GN-M32-122-18
  page: 122
  vendor_label: "중단원 마무리하기 STEP 3 실력 UP"
  vendor_level: "-"
  vendor_tags: []
  category_type: "마무리 STEP3 실력UP"
  summary: |
    A, B, C 세 사람이 화살을 10번씩 쏘아 맞힌 과녁 그림 세 개에서 세 사람의 점수의 표준편차 a, b, c 의 대소 관계. 5지선다.
  category: "과녁의 명중 위치 → 각자의 점수 자료 → 평균 주위의 흩어짐 비교"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "과녁에 찍힌 위치라는 기하 정보를 점수 자료로 옮긴 뒤 흩어진 정도(표준편차)의 대소로 비교"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "그림(과녁) 자료에서 표준편차의 대소 비교"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    과녁 세 장을 각각 10개의 점수 자료로 바꾼 뒤, 점수가 한 고리에 몰려 있을수록 표준편차가 작다는 기준으로 순서를 매긴다. 세 자료를 모두 읽어야 하고 평균이 달라도 흩어짐만 비교한다는 점에서 자료 처리량이 앞 구역보다 많다.
    그림 → 수치 표현 전환 1개(RT d2)·M_total 7 → STEP 3 출발 ★4 유지.
    [분류 이슈] 도구는 '흩어진 정도 비교' 하나뿐이라 실질 난도를 ★3 으로 보는 판정도 가능 — 기록만 한다.
  tier: star_4
  mechanism_primary: "과녁 세 장에서 각자의 10개 점수 자료를 읽음 → 평균 주위에 몰린 정도 비교 → 표준편차 대소"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑤'
  answer_source: "답지"
  figure: crop:fig-122-18.png
  latex: latex-bank/gn-m32/items/122-18.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 과녁의 명중 분포(고리별 개수). 제약: 세 사람의 표준편차 대소가 계산 없이도 갈릴 만큼 확실해야 하고, 선택지 다섯 개가 서로 다른 순서를 담아야 함. 총 사격 수(10)는 세 사람 모두 같게 유지."
    creative: "(1) 과녁 대신 도수분포표로 주면 표현 전환이 사라져 ★3 (2) 실제 표준편차를 계산해 값까지 구하게 하기(계산량 증가 → ★4) (3) 평균이 같은 세 자료로 맞추고 '가장 고른 사람'만 묻기(★3) (4) 한 사람의 마지막 한 발을 미지로 두고 순서가 바뀌는 조건을 묻기(I-BW 추가 → ★5)."
```

### 서술형 대비 문제

```yaml
- id: GN-M32-123-e1
  page: 123
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 대비"
  summary: |
    5개 변량의 편차가 각각 0, x, −4, y, 2 이고 표준편차가 √6 일 때 xy 의 값 구하기. [7점]
  category: "편차의 총합 0 → x+y · 분산 → x²+y² → 곱셈 공식으로 xy"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "편차의 총합 0 과 편차의 제곱의 평균 두 조건을 x+y, x²+y² 로 모아 (x+y)²=x²+y²+2xy 로 곱을 직접 산출"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "편차와 표준편차 조건에서 미지의 두 편차의 곱 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    총합 0 에서 x+y=2, 표준편차 √6 에서 편차의 제곱의 합이 30 이므로 x²+y²=10. (x+y)²−(x²+y²)=2xy 로 xy=−3.
    x, y 를 각각 구하려 들면 연립이차로 번지지만 묻는 것이 곱이라 합과 제곱의 합만으로 끝난다. 서술형이라 두 조건을 세우는 과정 자체가 배점이다.
    조건 통합 1개(CON d2)·M_total 7 → 서술형 출발 ★3 유지.
  tier: star_3
  mechanism_primary: "총합 0 → x+y=2 · 분산 6 → x²+y²=10 → (x+y)²−(x²+y²)=2xy → xy=−3"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-3$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m32/items/123-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "알려진 세 편차와 표준편차. 제약: 편차의 총합 0 과 제곱의 합을 동시에 만족하는 실수 x, y 가 존재해야 하고((x+y)² ≤ 2(x²+y²)), xy 가 정수로 떨어져야 함. 미지 편차는 두 개로 유지."
    creative: "(1) xy 대신 x−y 나 x³+y³ 를 묻기(★3~4) (2) x, y 를 각각 구하게 하면 이차방정식이 붙어 ★4 (3) 미지 편차를 세 개로 늘리고 조건을 하나 더 주기(★4) (4) 표준편차 대신 xy 를 주고 표준편차를 되묻기(★3)."
```

```yaml
- id: GN-M32-123-u1
  page: 123
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 대비"
  summary: |
    5개 변량의 편차가 각각 −2, 1, a, b, 3 이고 분산이 6.8일 때 ab 의 값 구하기. [7점]
  category: "편차의 총합 0 → a+b · 분산 → a²+b² → 곱셈 공식으로 ab"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "편차의 총합 0 과 (자료 수)×(분산)=편차의 제곱의 합 두 조건을 모아 (a+b)²=a²+b²+2ab 로 곱을 뽑음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "편차와 분산 조건에서 미지의 두 편차의 곱 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    총합 0 에서 a+b=−2, 5×6.8=34 에서 a²+b²=20 이므로 (a+b)²−(a²+b²)=2ab 로 ab=−8.
    123-e1 과 같은 골조의 유제이고, 표준편차 대신 소수 분산이 주어져 제곱의 합을 만드는 한 걸음이 앞에 붙는다.
    조건 통합 1개(CON d2)·M_total 7 → 서술형 출발 ★3 유지.
  tier: star_3
  mechanism_primary: "총합 0 → a+b=−2 · 분산 6.8 → a²+b²=20 → (a+b)²−(a²+b²)=2ab → ab=−8"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m32/items/123-u1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "알려진 세 편차와 분산. 제약: (자료 수)×(분산)이 정수라야 제곱의 합이 깔끔하고, 총합 0 과 제곱의 합을 동시에 만족하는 실수 a, b 가 존재해야 하며 ab 가 정수로 떨어져야 함."
    creative: "(1) 분산 대신 표준편차로 주기(123-e1 형태 → ★3) (2) ab 와 a+b 를 모두 구한 뒤 a, b 를 각각 묻기(이차방정식 → ★4) (3) 미지 편차의 위치를 표 형태로 바꿔 자료 맥락을 붙이기(★3)."
```

```yaml
- id: GN-M32-123-u2
  page: 123
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 대비"
  summary: |
    평균이 3이고 표준편차가 2인 세 변량 a, b, c 에 대해 a², b², c² 의 평균 구하기. [7점]
  category: "분산의 정의식 전개 → (변량의 제곱의 평균)=(분산)+(평균)²"
  M: {s: 1, k: 1, a: 3, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "편차의 제곱의 평균을 전개해 '제곱의 평균 − (평균)²' 형태로 옮기고 구하려는 값을 그 안에서 꺼냄"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "평균·표준편차로 변량의 제곱의 평균 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    분산 4 = (a²+b²+c²)/3 − 3² 이므로 (a²+b²+c²)/3 = 13.
    a, b, c 를 각각 구하려 들면 미지수 세 개에 조건 두 개라 막힌다. 분산의 정의식을 한 번 전개하는 동치 변환이 유일한 길이고, 서술형이라 그 전개 과정이 배점이다.
    동치 변환 1개(EQV d2)·M_total 6 → 서술형 출발 ★3 유지(통찰이 있어 −1 조건에 걸리지 않음).
  tier: star_3
  mechanism_primary: "분산 4 = (a²+b²+c²)/3 − 3² → (a²+b²+c²)/3 = 4+9 = 13"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$13$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m32/items/123-u2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "평균과 표준편차. 제약: (분산)+(평균)²이 깔끔한 정수가 되게 두 값을 고를 것. 변량의 개수는 답에 영향을 주지 않으므로 3개든 5개든 무방."
    creative: "(1) (a+1)²+(b+1)²+(c+1)² 의 평균으로 확장하면 전개 한 단계가 더 붙어 ★4 (2) 제곱의 평균을 주고 표준편차를 되묻기(역방향 → ★3) (3) ab+bc+ca 를 묻기(대칭식 결합이 붙어 ★4 · 122-16 골조의 축소판)."
```

```yaml
- id: GN-M32-123-u3
  page: 123
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 대비"
  summary: |
    두 선수 A, B 가 5회의 농구 경기에서 얻은 점수 표에서 득점이 더 고른 선수를 대표로 선발하기. [8점]
  category: "두 자료 각각 평균 → 편차 → 분산 비교 → 분산이 작은 쪽 선택"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 자료의 표준편차를 구해 더 고른 쪽 판정하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    '고르다'가 표준편차(분산)의 대소임을 알고 나면 같은 계산을 두 번 반복하는 문항이다. 도구는 분산 하나뿐이고 분기도 없다.
    서술형 8점은 두 선수의 평균·편차·분산을 모두 적어야 한다는 과정 배점이지 난도 신호가 아니다.
    통찰 0·M_total 6 → 서술형 출발 ★3 에서 −1 하여 ★2.
  tier: star_2
  mechanism_primary: "A·B 각각 평균 → 편차 → 분산 계산 → 분산이 작은 선수 B 선발"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '선수 $\pt{B}$'
  answer_source: "답지"
  figure: crop:fig-123-u3.png
  latex: latex-bank/gn-m32/items/123-u3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 선수의 5회 득점. 제약: 두 평균을 같게 두어야 '고른 정도'만으로 비교가 깔끔하고, 편차의 제곱의 합이 5의 배수라야 분산이 정수. 표의 회차 수와 선수 라벨은 고정."
    creative: "(1) 두 선수의 평균을 다르게 두고 '우수한 선수'와 '고른 선수'를 함께 묻기(★3 · 121-07 골조) (2) 한 회차의 득점을 미지수로 두고 'B가 더 고르려면'의 조건을 묻기(I-BW 추가 → ★4) (3) 세 선수로 늘려 순서를 묻기(★3) (4) 표 대신 꺾은선그래프로 주면 표현 전환이 붙어 ★3(121-08 골조)."
```

## 표본 판정 요약 (22문)

- ★ 분포: ★1 3 · ★2 8 · ★3 7 · ★4 3 · ★5 1
- 통찰형 15 · 절차형 7 · premium 0
- 통찰 유형 분포(총 20개 라벨): I-CON 7 · I-EQV 6 · I-RT 5 · I-SYM 2 — 이 범위의 통찰은 「두 조건을 대칭식으로 통합(CON)」과 「정의식을 쓸 수 있는 형태로 바꾸기(EQV)」 두 갈래가 대부분이다.
- depth 3 라벨은 122-16 의 I-SYM 하나뿐이고, 이 범위 유일한 ★5 다.
- type_hint 상위 5: 「미지의 두 변량·편차의 곱 구하기」 3(122-13 · 123-e1 · 123-u1) · 「편차의 총합 0 으로 미지 편차 구하기」 2(120-04 · 121-10) · 「두 집단·두 자료 비교하기」 2(121-07 · 123-u3) · 「그래프·그림 자료에서 산포 읽기」 2(121-08 · 122-18) · 「변량 변환 시 평균·분산 변화」 2(121-09 · 122-15)
- 구역별 ★ 평균: STEP 1 1.7 · STEP 2 3.0 · STEP 3 4.3 · 서술형 2.8 — 구역 순서와 판정 난도의 순서가 어긋나지 않는다.
- 그림: 10문(`crop:fig-120-04.png` · `crop:fig-120-05.png` · `crop:fig-121-07.png` · `crop:fig-121-08.png` · `crop:fig-121-10.png` · `crop:fig-122-13.png` · `crop:fig-122-14.png` · `crop:fig-122-16.png` · `crop:fig-122-18.png` · `crop:fig-123-u3.png` 중 122-18 은 본문에 세 장이 직접 삽입돼 대표 한 장만 적음)
- 태그: 「꼭나와」 4문(120-05 · 121-07 · 121-10 · 122-13) · 「UP」 0문. 모두 ★ 가산 없이 빈출 표시로만 처리했다.

## 분류 이슈 목록

판정이 애매하거나 v3.8 게이트에 걸려 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-M32-121-12 | 통찰 2개(RT d2·CON d2)로 +1 후보이지만, 편차를 통일한 뒤의 계산이 표준 분산 한 줄이라 STEP 2 출발점 ★3 을 유지했다. 대화형 서술을 편차로 옮기는 관문을 더 무겁게 보면 ★4 | ★3 / ★4 |
| GN-M32-122-16 | ★5 조건(통찰 3개 이상 + SYM 포함)은 충족하나 `novelty_score` 가 0 이라 v3.8 §2.14 게이트에서는 RED. 참신도는 카탈로그 작성 전 잠정값이므로 ★5 를 유지하고 기록만 함 | ★5 |
| GN-M32-122-18 | 벤더 구역은 STEP 3 실력 UP(★4 출발)이지만 도구는 '흩어진 정도 비교' 하나뿐이고 계산이 없다. 자료 세 벌을 모두 읽어야 하는 처리량으로 ★4 를 유지했으나 ★3 판정도 가능 | ★3 / ★4 |

카탈로그 차원 메모(나중에 12단원 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: (가) 「합과 제곱의 합 두 조건 → 곱셈 공식으로 미지수의 곱」(122-13 · 123-e1 · 123-u1 · 122-16) — 이 범위에서 가장 많이 반복되고 ★3~5 를 모두 낳는 축이라 base ★ 를 3 으로 두고 소재(자료 표 / 편차 / 입체도형)로 하위 분기를 두는 것이 낫다. (나) 「변량의 일차변환과 평균·분산」(121-09 · 122-15) — 상수 덧셈만 있는 것과 계수가 붙는 것이 학생 체감이 달라 base ★ 2 와 3 으로 나눌 것. (다) 「집단·자료 비교(우수함 vs 고른 정도)」(121-07 · 121-08 · 122-18 · 123-u3) — 표·그래프·그림·표 형태가 모두 같은 골조라 하나의 유형에 표현 매체만 다른 변형으로 묶는 것이 맞다.
- **통합해도 될 유형**: 「편차의 총합 0 으로 미지 편차 구하기」(120-04 · 121-10)와 「편차 표에서 분산·표준편차 구하기」(120-05)는 실질적으로 같은 도구의 길이 차이라 한 유형(base ★2)의 단계 변형으로 두면 충분하다. 120-02 · 120-03 · 120-06 도 「평균↔편차↔분산의 상호 환원」 한 유형(base ★1~2)으로 묶인다.
- **이 범위에 없어 카탈로그에서 별도 확보가 필요한 것**: 도수분포표가 붙은 자료의 분산(가중 계산), 평균이 서로 다른 두 집단의 결합(122-14 의 상위 버전)은 이 범위에 없다. 전자는 12단원 전반부(p1)에, 후자는 중3 범위 밖에 있으므로 카탈로그에서 범위 표시를 남길 것.
