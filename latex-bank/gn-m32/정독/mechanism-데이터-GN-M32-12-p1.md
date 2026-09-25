---
name: mechanism-데이터-GN-M32-12-p1
description: 개념원리 중학 3-2 12 산포도와 표준편차(1/2 · 21문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 중학 3-2 · 전사본 latex-bank/gn-m32
  section: 12 산포도와 표준편차
  unit_code: GN-M32-12
  part: "1/2"
  extract_range: "115~119쪽 · 115-01~119-05"
  total_problems: 21
  unit_total: 43
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). depth_score 는 effective_depth 의 합. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-m32/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-m32/items/<id>.tex
  image_source: latex-bank/gn-m32/figures/ (crops.json)
---

# 개념원리 중학 3-2 · 12 산포도와 표준편차 (1/2) 정독 데이터 (v1.0)

이 파일은 115~119쪽 21문항 전수를 다룬다. 12단원 전반은 개념을 처음 익히는 **학습 구역**으로 이루어져 있다 — 「개념원리 확인하기」 4문(115쪽) · 「핵심문제 익히기」 12문(116~118쪽) · 「이런 문제가 시험에 나온다」 5문(119쪽). 개념원리 중학은 난이도 표기(`level`)가 없고 **구역 자체가 난이도 층**이라 ★ 출발점을 구역에서 잡았다(개념원리 확인하기 ★1 · 핵심문제 익히기 ★2 · 이런 문제가 시험에 나온다 ★2~3). 이 범위의 id 규칙은 `쪽-0N` = 개념원리 확인하기, `쪽-hN` = 핵심문제, `쪽-cN` = **그 핵심문제 바로 뒤에 붙는 확인 문제**다. 즉 여기서의 `c` 는 「개념원리 확인하기」가 아니라 핵심문제와 같은 층이므로 ★2 에서 출발시켰다. 태그는 「UP」 3문(118-h5 · 118-h6 · 119-05)뿐이고 「꼭나와」는 없다. 그림(표 크롭) 문항은 13문이고, 변량이 발문 안에 나열된 8문은 `figure: none` 이다.

단원 내용은 (가) 편차의 정의와 「편차의 총합 = 0」, (나) 분산·표준편차의 정의대로 계산하기, (다) 평균·분산이 주어졌을 때 미지의 변량에 대한 식의 값 구하기, (라) 평균·표준편차로 자료의 분포를 해석하기, (마) 두 집단을 합친 전체의 분산·표준편차, (바) 변량을 평행이동·상수배 했을 때 평균·분산의 변화 여섯 갈래다. 통찰이 붙는 지점은 거의 모두 같다 — **분산을 「(편차)²의 총합 ÷ 도수」 라는 총합 형태로 되돌리는 동치 변환(I-EQV)**, 그리고 그 총합을 두 집단에 걸쳐 결합하거나(I-CON) 거꾸로 미지수를 역추적하는 단계(I-BW)다. 평균·표준편차 해석 문항은 수치를 「분포의 위치·퍼짐」으로 옮기는 I-RT 이고, 선택지 중 두 통계량만으로는 결정되지 않는 진술을 기각해야 하는 119-04 에서 I-VF 가 한 번 나온다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다. 이 단원의 **숫자 변형 제약은 두 가지가 지배적**이다 — 편차의 총합이 반드시 0 이 되어야 하고, (편차)²의 총합이 도수로 나누어떨어져야 분산·표준편차가 정리된 값으로 떨어진다(표준편차를 정수로 만들려면 분산이 완전제곱수). 표 크롭을 쓰는 문항은 칸 수와 라벨(학생 이름 A~F·단위 표기)이 고정이라 항목 수를 바꾸면 그림을 다시 만들어야 한다. 그 제약을 문항별로 `variation_notes.numeric` 에 적었다.

## 문항 데이터

### 개념원리 확인하기

```yaml
- id: GN-M32-115-01
  page: 115
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념 확인"
  summary: |
    어느 사격선수의 5회 사격 기록 표. ⑴ 자료의 평균 ⑵ 각 변량의 편차를 구해 표 완성.
  category: "평균 계산 → 편차의 정의(변량 − 평균) 적용"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평균과 편차 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    기록 5개의 총합을 5로 나눠 평균 8점, 각 기록에서 8을 빼 편차. 정의 두 개를 순서대로 쓰는 절차뿐이다.
    개념 확인 구역·통찰 없음·M_total 5 → ★1. 평균보다 작은 기록의 편차가 음수라는 부호(T-부호)가 유일한 함정.
  tier: star_1
  mechanism_primary: "기록 총합 ÷ 5 → 평균 8점 → 각 기록 − 평균 → 편차"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ 8점 ⑵ 풀이 참조(편차: $0$, $-2$, $2$, $-1$, $1$)'
  answer_source: "답지 · ⑵ 계산"
  figure: "crop:fig-115-01.png"
  latex: latex-bank/gn-m32/items/115-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '5회 기록을 다른 값으로 바꿀 수 있음. 제약: 총합이 5의 배수여야 평균이 정수로 떨어지고, 편차의 총합은 반드시 0 이 되어야 함. 표 칸 수(5회)와 라벨(1~5회 · 단위 점)은 크롭 고정.'
    creative: '(1) 편차 칸 하나를 비우고 나머지 편차로 채우게 하기(★1 유지) (2) 기록 대신 편차만 주고 원 기록을 복원시키기(★2 · 역방향 I-BW) (3) ⑶ 분산 ⑷ 표준편차까지 이어 묻기(★2 · 115-04 골조).'
```

```yaml
- id: GN-M32-115-02
  page: 115
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념 확인"
  summary: |
    편차가 ⑴ $-5$, $0$, $x$, $2$ ⑵ $3$, $-7$, $9$, $-1$, $x$ 로 주어졌을 때 각각 $x$ 의 값.
  category: "편차의 총합 = 0 → 미지의 편차"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "편차의 총합이 0임을 이용하여 미지의 편차 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    편차의 총합이 0 이라는 성질 한 줄. 나머지 편차를 더하고 부호를 바꾸면 끝난다.
    개념 확인 구역·통찰 없음·M_total 4 → ★1. 부호를 바꾸는 것을 잊는 T-부호 하나.
  tier: star_1
  mechanism_primary: "편차의 총합 = 0 → x = −(나머지 편차의 합)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $3$ ⑵ $-4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m32/items/115-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '편차 값과 개수를 자유롭게 바꿀 수 있음. 제약: 주어진 편차들이 이미 편차인 이상 x 는 나머지 합의 부호를 바꾼 값으로 결정되므로 별도 조건이 필요 없음. 답이 정수로 떨어지게 두는 편이 좋음.'
    creative: '(1) 미지수를 두 칸(x, y)으로 늘리고 x = 2y 같은 관계를 덧붙이기(★2 · 연립) (2) 편차와 함께 평균을 주고 특정 변량을 묻기(★2 · 115-03 골조) (3) 편차의 총합이 0 인 이유를 서술하게 하기(★2 · 서술형).'
```

```yaml
- id: GN-M32-115-03
  page: 115
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념 확인"
  summary: |
    A~F 6명의 일주일 독서 시간의 편차 표(C 칸이 $x$). ⑴ $x$ 의 값 ⑵ 평균이 5시간일 때 C의 독서 시간.
  category: "편차의 총합 = 0 → 미지 편차 → 변량 = 평균 + 편차"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "편차로 변량 구하기(총합 0 + 변량 = 평균 + 편차)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴ 은 편차의 총합 0, ⑵ 는 편차의 정의를 변량 쪽으로 옮겨 평균 + 편차. 두 정의를 이어 쓰는 두 단계.
    개념 확인 구역·통찰 없음·M_total 5 → ★1. 편차가 음수일 때 평균에서 빼야 한다는 T-부호가 함정.
  tier: star_1
  mechanism_primary: "편차의 총합 = 0 → x = −2 → C의 변량 = 평균 5 + (−2) = 3시간"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $-2$ ⑵ 3시간'
  answer_source: "답지"
  figure: "crop:fig-115-03.png"
  latex: latex-bank/gn-m32/items/115-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '나머지 5명의 편차와 평균(5시간)을 바꿀 수 있음. 제약: 편차의 총합이 0 이 되도록 x 가 결정되고, 평균 + 편차 가 음수가 되지 않아야 독서 시간으로 말이 됨. 표의 사람 수(6명)와 A~F 라벨은 크롭 고정.'
    creative: '(1) 편차가 가장 큰 사람·가장 작은 사람을 묻기(★1 유지) (2) 평균 대신 특정 학생의 실제 독서 시간을 주고 평균을 역산(★2 · 116-c1 골조) (3) 편차표에 분산 조건을 덧붙여 미지수 두 개를 묻기(★3 · 119-03 골조).'
```

```yaml
- id: GN-M32-115-04
  page: 115
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념 확인"
  summary: |
    과학 성적 5회 자료 $60$, $65$, $70$, $75$, $80$ 에 대해 ⑴ 평균 ⑵ (편차)$^2$의 총합 ⑶ 분산 ⑷ 표준편차.
  category: "평균 → 편차 → (편차)² 총합 → 분산 → 표준편차 (정의 사슬)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "분산과 표준편차의 정의대로 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    소문항이 정의 사슬을 그대로 네 칸으로 쪼개 놓아 학생이 순서를 고민할 여지가 없다.
    편차 −10, −5, 0, 5, 10 의 제곱을 더해 250, 5로 나눠 50, 근호를 씌워 정리. 개념 확인 구역·통찰 없음 → ★1.
    계산량만 앞 세 문항보다 조금 많아 Mₖ 2.
  tier: star_1
  mechanism_primary: "평균 70 → 편차 제곱의 합 250 → 분산 50 → 표준편차는 근호를 씌워 정리"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ 70점 ⑵ $250$ ⑶ $50$ ⑷ $5\sqrt{2}$점'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m32/items/115-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '다섯 변량을 바꿀 수 있음. 제약: 총합이 5의 배수라야 평균이 정수이고, (편차)²의 총합도 5로 나누어떨어져야 분산이 정수. 표준편차를 정수로 만들려면 분산을 완전제곱수(4·9·16)로 맞춰야 하고, 그렇지 않으면 근호를 정리한 꼴로 답이 나옴.'
    creative: '(1) 소문항 없이 표준편차만 묻기(★2 · 116-h2 골조) (2) 등차로 놓인 다섯 변량의 공차를 문자로 두고 분산을 공차로 표현(★3 · Mₐ 상승) (3) 같은 자료에 10점씩 더하거나 2배 했을 때의 분산을 이어 묻기(★3 · 118-h6·118-c6 골조).'
```

### 핵심문제 익히기

```yaml
- id: GN-M32-116-h1
  page: 116
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    A~E 5명의 수학 성적 편차 표(B 칸이 미지). 평균이 75점일 때 B의 수학 성적.
  category: "편차의 총합 = 0 → B의 편차 → 변량 = 평균 + 편차"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "편차를 이용하여 변량 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    편차의 총합 0 으로 빈 칸을 채우고, 그 편차를 평균에 더한다. 115-03 과 같은 두 단계이지만
    「평균이 주어진 상태에서 특정 변량을 복원」하는 대표 유형이라 핵심문제 구역 ★2 출발점을 유지했다.
    통찰 0·M_total 5 로 −1 후보이지만 유형 대표성을 근거로 ★2. T-부호(음의 편차)가 함정.
  tier: star_2
  mechanism_primary: "편차의 총합 = 0 → B의 편차 −5 → 75 + (−5) = 70점"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "70점"
  answer_source: "본문 답"
  figure: "crop:fig-116-h1.png"
  latex: latex-bank/gn-m32/items/116-h1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '나머지 네 명의 편차와 평균 75점을 바꿀 수 있음. 제약: 편차의 총합이 0 이 되도록 빈 칸이 결정되고, 평균 + 편차 가 0~100 범위 안의 성적이어야 함. 표의 학생 수(5명)·A~E 라벨은 크롭 고정.'
    creative: '(1) 묻는 대상을 최고점·최저점 학생으로 바꾸기(★2 유지 · 편차 최대·최소 해석) (2) 평균 대신 한 학생의 성적을 주고 다른 학생의 성적을 묻기(★2 · 평균 역산 한 단계 추가) (3) 편차표에 분산을 덧붙여 미지수 두 개를 묻기(★3 · 119-03 골조).'
```

```yaml
- id: GN-M32-116-c1
  page: 116
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    A~D 4명의 통학 시간 편차 표(D 칸이 $x$). D의 통학 시간이 20분일 때 4명의 통학 시간의 평균.
  category: "편차의 총합 = 0 → D의 편차 → 평균 = 변량 − 편차"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "편차와 변량으로 평균 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    편차의 총합 0 으로 x = −9 를 얻은 뒤, 116-h1 과 반대 방향으로 평균 = 변량 − 편차 를 쓴다.
    방향만 뒤집힌 표준 절차라 통찰로 세지 않았다. 핵심문제 층·통찰 0·M_total 5 → ★2 유지.
    편차가 음수라서 빼면 평균이 커진다는 점(T-부호)이 실수 지점.
  tier: star_2
  mechanism_primary: "편차의 총합 = 0 → x = −9 → 평균 = 20 − (−9) = 29분"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "29분"
  answer_source: "답지"
  figure: "crop:fig-116-c1.png"
  latex: latex-bank/gn-m32/items/116-c1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '앞 세 명의 편차(−6, 18, −3)와 D의 통학 시간 20분을 바꿀 수 있음. 제약: x 는 앞 편차 합의 부호를 바꾼 값으로 결정되고, 변량 − 편차 가 양수여야 통학 시간으로 말이 됨. 표의 사람 수(4명)·A~D 라벨은 크롭 고정.'
    creative: '(1) 평균을 구한 뒤 나머지 세 명의 통학 시간까지 복원시키기(★2 유지 · 단계만 늘어남) (2) 편차의 총합 0 을 쓰지 않아도 되게 D의 편차를 직접 주기(★1 · 한 단계로 축소) (3) 분산을 함께 주고 미지의 편차 두 개를 묻기(★3 · 곱셈 공식 필요).'
```

```yaml
- id: GN-M32-116-h2
  page: 116
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    학생 6명이 하루에 암기하는 영어 단어의 개수 $13$, $15$, $9$, $10$, $13$, $12$ 의 분산과 표준편차.
  category: "평균 → 편차 → (편차)² 평균 → 분산 → 표준편차"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "분산과 표준편차 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    115-04 와 같은 정의 사슬이지만 소문항으로 쪼개 주지 않아 학생이 순서를 스스로 세워야 한다.
    평균 12 → 편차 1, 3, −3, −2, 1, 0 → 제곱의 합 24 → 6으로 나눠 분산 4 → 표준편차 2개.
    핵심문제 층·통찰 0·M_total 6 → ★2 유지. 단위(개)를 표준편차에만 붙이는 T-단위가 함정.
  tier: star_2
  mechanism_primary: "평균 12 → (편차)²의 총합 24 → 6으로 나눠 분산 4 → 표준편차 2개"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '분산: $4$, 표준편차: 2개'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m32/items/116-h2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '여섯 변량을 바꿀 수 있음. 제약: 총합이 6의 배수라야 평균이 정수, (편차)²의 총합도 6으로 나누어떨어져야 분산이 정수, 표준편차를 정수로 만들려면 분산이 완전제곱수여야 함. 개수 자료이므로 모두 자연수로 둘 것.'
    creative: '(1) 변량 하나를 미지수로 두고 분산을 주어 그 값을 묻기(★3 · 역방향) (2) 두 반의 같은 자료를 주고 어느 쪽이 더 고른지 비교시키기(★2 · I-RT 추가) (3) 자료 전체에 같은 수를 더하거나 곱한 뒤의 분산을 묻기(★3 · 118-h6·118-c6 골조).'
```

```yaml
- id: GN-M32-116-c2
  page: 116
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    A~F 6명의 1분당 맥박 수의 편차 표(C 칸이 $x$)에서 맥박 수의 분산과 표준편차.
  category: "편차의 총합 = 0 → 미지 편차 → (편차)² 평균"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "편차가 주어진 자료의 분산과 표준편차 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    편차가 이미 주어져 평균을 구할 필요가 없는 대신, 빈 칸 x 를 편차의 총합 0 으로 먼저 메워야 한다.
    x = −2 를 넣으면 (편차)²의 총합 30, 6으로 나눠 분산 5, 표준편차는 근호를 그대로 둔 꼴.
    핵심문제 층·통찰 0·M_total 6 → ★2 유지. 분산과 표준편차를 뒤바꿔 쓰는 T-표기가 함정.
  tier: star_2
  mechanism_primary: "편차의 총합 = 0 → x = −2 → (편차)²의 총합 30 ÷ 6 → 분산 5 → 표준편차는 근호꼴"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '분산: $5$, 표준편차: $\sqrt{5}$회'
  answer_source: "답지"
  figure: "crop:fig-116-c2.png"
  latex: latex-bank/gn-m32/items/116-c2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '주어진 다섯 편차(4, 1, −2, 1, −2)를 바꿀 수 있음. 제약: x 는 편차의 총합 0 으로 결정되고, (편차)²의 총합이 6으로 나누어떨어져야 분산이 정수. 표준편차를 정수로 뽑으려면 분산을 완전제곱수로 맞출 것. 표의 사람 수(6명)·A~F 라벨은 크롭 고정.'
    creative: '(1) 평균을 함께 주고 특정 학생의 맥박 수까지 묻기(★2 유지) (2) 미지 편차를 두 칸으로 늘리고 분산을 주어 두 편차의 곱을 묻기(★3 · 119-03 골조) (3) 두 집단의 편차표를 주고 합친 전체의 분산을 묻기(★3 · 118-h5 골조).'
```

```yaml
- id: GN-M32-117-h3
  page: 117
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    5개의 변량 $7$, $x$, $9$, $y$, $11$ 의 평균이 9, 분산이 5일 때 $x^2+y^2$ 의 값.
  category: "평균 조건 → x+y · 분산 조건 → (편차)² 총합 전개 → x²+y²"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "평균 9 를 x+y=18 로, 분산 5 를 (편차)²의 총합 25 로 각각 수치 조건으로 환산"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "(x−9)²+(y−9)² 를 전개해 x²+y² 를 x+y 로 연결 — 개별 값 x, y 를 구하지 않고 답에 도달"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "평균과 분산을 이용하여 식의 값 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    x, y 를 따로 구하려 들면 미정이라 막히고, 편차의 제곱합을 전개해 x²+y² 를 x+y 로 잇는 순간 한 줄로 끝난다.
    이 「개별 값을 구하지 않는다」는 판단이 이 유형의 본체라 통찰 2개(I-EQV d1·d2)로 라벨했다.
    핵심문제 ★2 출발 + 통찰 2개·M_total 7 → +1 하여 ★3. 매개변수 두 개라 Mₐ 2.
  tier: star_3
  mechanism_primary: "평균 → x+y=18 → 분산 → (편차)² 총합 25 → 전개해 x²+y² = 25 − 8 + 18·18 − 162 꼴로 정리"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$179$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m32/items/117-h3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '알려진 세 변량(7, 9, 11)과 평균·분산을 바꿀 수 있음. 제약: 평균이 정수로 떨어지도록 세 변량의 합과 x+y 를 맞추고, (편차)²의 총합 = 5 × 분산 이 알려진 세 편차의 제곱합보다 커야 함(남는 값이 (x−m)²+(y−m)² ≥ 0). 실수해를 요구하면 그 값이 (x+y−2m)²/2 이상이어야 함.'
    creative: '(1) 묻는 식을 xy 나 (x−y)² 로 바꾸기(★3 유지 · 117-c3 골조) (2) x, y 를 정수로 한정해 두 값을 모두 구하게 하기(★3~4 · I-VF 추가) (3) 변량 수를 늘리고 미지수를 세 개로(★4 · 조건 부족으로 대칭식만 묻게 설계해야 함).'
```

```yaml
- id: GN-M32-117-c3
  page: 117
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    5개의 변량 $4$, $10$, $x$, $y$, $5$ 의 평균이 6, 분산이 4.8일 때 $xy$ 의 값.
  category: "평균 → x+y · 분산 → x²+y² → 곱셈 공식으로 xy"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "평균 6 을 x+y=11 로, 분산 4.8 을 (편차)²의 총합 24 로 환산"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "편차의 제곱합을 전개해 x²+y² 를 얻은 뒤 (x+y)² = x²+2xy+y² 로 묶어 xy 를 뽑아냄"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "평균과 분산을 이용하여 식의 값 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    117-h3 와 같은 골조에 곱셈 공식 한 단계가 더 붙는다 — x+y 와 x²+y² 를 손에 쥔 뒤 (x+y)² 로 묶어 xy 를 꺼낸다.
    기본 대칭식을 쓸 줄 아느냐가 갈림길이라 두 번째 통찰의 depth 를 2 로 두었다.
    핵심문제 ★2 출발 + 통찰 2개·M_total 7 → ★3. 분산이 소수(4.8)라 총합 환산에서 계산 실수(T-단위)가 나기 쉽다.
  tier: star_3
  mechanism_primary: "평균 → x+y=11 → 분산 → x²+y² → (x+y)² 전개로 2xy 를 분리해 xy"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$29$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m32/items/117-c3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '알려진 세 변량(4, 10, 5)과 평균·분산을 바꿀 수 있음. 제약: 5 × 분산이 정수라야 (편차)²의 총합이 깔끔하고, 남은 (x−m)²+(y−m)² 가 0 이상이어야 함. xy 를 정수로 떨어뜨리려면 (x+y)² − (x²+y²) 가 짝수여야 함.'
    creative: '(1) xy 대신 (x−y)² 나 x³+y³ 를 묻기(★3 유지 · 대칭식 확장) (2) xy 값을 주고 분산을 역으로 묻기(★3 · I-BW) (3) x, y 가 자연수라는 조건을 붙여 두 값을 확정시키기(★4 · 후보 기각 I-VF 추가).'
```

```yaml
- id: GN-M32-117-h4
  page: 117
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    학생 수가 같은 A, B 두 반의 국어 성적 평균·표준편차 표. 보기 ㄱ(분산 비교) ㄴ(성적 우수) ㄷ(평균 가까이 모여 있음) 중 옳은 것 모두 고르기.
  category: "평균 = 대표값 · 표준편차 = 흩어진 정도 해석"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "표의 두 수치를 「평균은 위치, 표준편차는 퍼짐」이라는 분포 표현으로 옮겨 세 보기를 각각 판정"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "자료의 이해(평균·표준편차 해석)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    계산이 거의 없고 「표준편차가 크다 = 평균에서 멀리 흩어졌다」라는 의미 전환만으로 세 보기가 갈린다.
    분산과 표준편차의 대소가 같이 간다는 점(ㄱ), 우수 여부는 평균으로 본다는 점(ㄴ), 모여 있는 정도는
    표준편차가 작은 쪽이라는 점(ㄷ)이 각각 판정 근거다. 핵심문제 ★2 출발 · 통찰 1개(d1) → ★2 유지.
  tier: star_2
  mechanism_primary: "표준편차 대소 → 분산 대소·흩어진 정도, 평균 대소 → 성적 우수 여부로 각각 옮겨 보기 판정"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "ㄱ, ㄴ"
  answer_source: "본문 답"
  figure: "crop:fig-117-h4.png"
  latex: latex-bank/gn-m32/items/117-h4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 반의 평균·표준편차 수치를 바꿀 수 있음. 제약: 평균의 대소와 표준편차의 대소가 서로 반대여야 보기 ㄱ~ㄷ 의 참·거짓이 골고루 갈림. 학생 수가 같다는 전제를 지울 경우 분산 비교 보기가 성립하지 않으므로 함께 손봐야 함.'
    creative: '(1) 보기에 「A반에 최고점 학생이 있다」처럼 두 통계량으로 결정되지 않는 진술을 넣기(★3 · I-VF 추가 · 119-04 골조) (2) 반을 셋으로 늘려 5지선다로(★3) (3) 표준편차만 주고 어느 반이 고른지 서술하게 하기(★2 유지 · 서술형).'
```

```yaml
- id: GN-M32-117-c4
  page: 117
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    A~E 5명의 하루 운동 시간의 평균·표준편차 표에서 운동 시간이 가장 긴 사람과 가장 고른 사람을 차례로.
  category: "평균 최대 → 가장 긴 사람 · 표준편차 최소 → 가장 고른 사람"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「고르다」라는 말을 표준편차가 가장 작다는 수치 조건으로 옮김(평균과 혼동하지 않음)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "자료의 이해(평균·표준편차 해석)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    표에서 평균이 가장 큰 사람과 표준편차가 가장 작은 사람을 하나씩 읽으면 끝이라 계산은 없다.
    다만 「길다」는 평균, 「고르다」는 표준편차라는 두 축의 분리가 이 유형의 전부라 I-RT d1 을 하나 인정했다.
    M_total 4 로 낮아 ★1 후보이지만 통찰 1개를 근거로 핵심문제 층의 ★2 를 유지했다. [분류 이슈] 후보 ★1/★2.
  tier: star_2
  mechanism_primary: "평균이 최대인 사람 → 가장 긴 사람, 표준편차가 최소인 사람 → 가장 고른 사람"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\pt{E}$, $\pt{B}$'
  answer_source: "답지"
  figure: "crop:fig-117-c4.png"
  latex: latex-bank/gn-m32/items/117-c4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '5명의 평균·표준편차 수치를 바꿀 수 있음. 제약: 평균 최대인 사람과 표준편차 최소인 사람이 서로 달라야 두 축을 분리하는 의미가 살아남. 표의 사람 수(5명)·A~E 라벨은 크롭 고정.'
    creative: '(1) 「가장 고르지 않은 사람」을 함께 묻기(★2 유지) (2) 표준편차가 같고 평균만 다른 두 사람을 넣어 비교 불가 상황을 만들기(★3 · I-VF) (3) 운동 시간의 합(평균 × 일수)까지 계산시키기(★2~3 · Mₖ 상승).'
```

```yaml
- id: GN-M32-118-h5
  page: 118
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: ["UP"]
  category_type: "핵심문제"
  summary: |
    경미네 반 남학생·여학생의 수학 성적 평균과 분산 표(평균은 양쪽 모두 같음). 반 전체 학생의 수학 성적의 표준편차.
  category: "집단별 (편차)² 총합 = 도수 × 분산 → 두 집단 합산 → 전체 분산 → 표준편차"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "분산을 「(편차)²의 총합 ÷ 도수」로 되돌려 각 집단의 (편차)² 총합(도수 × 분산)을 복원"
    - step: 2
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 집단의 평균이 같아 편차의 기준이 공유됨을 확인한 뒤 두 총합을 전체 도수로 묶어 하나의 분산으로 결합"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "두 집단 전체의 평균, 분산, 표준편차"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    분산을 그대로 평균 내면 틀리고, 도수를 곱해 (편차)²의 총합으로 되돌린 뒤 더해야 한다는 것이 핵심이다.
    남녀 평균이 둘 다 같아야 편차를 같은 기준으로 합칠 수 있다는 전제도 학생이 짚어야 한다.
    핵심문제 ★2 출발 + UP 태그 + 통찰 2개·M_total 7 → ★3. 함정은 분산의 단순 평균(T-단위)과 표준편차를 먼저 더하는 것(T-표기).
  tier: star_3
  mechanism_primary: "8×6 + 12×11 = 180 → 전체 20명으로 나눠 분산 9 → 표준편차 3점"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "3점"
  answer_source: "본문 답"
  figure: "crop:fig-118-h5.png"
  latex: latex-bank/gn-m32/items/118-h5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '남녀 학생 수(8, 12)와 두 분산(6, 11)을 바꿀 수 있음. 제약: 두 평균은 반드시 같아야 이 골조가 성립하고, 도수 × 분산의 합이 전체 도수로 나누어떨어져야 전체 분산이 정수, 표준편차를 정수로 뽑으려면 그 값이 완전제곱수여야 함. 표의 행 구성(평균·분산·학생 수)은 크롭 고정.'
    creative: '(1) 분산 대신 표준편차를 주어 제곱 단계를 한 번 더 거치게 하기(★3 유지 · 118-c5 골조) (2) 전체 표준편차를 주고 한쪽 집단의 분산을 역으로 묻기(★3~4 · I-BW · 119-05 골조) (3) 두 집단의 평균이 다른 경우를 제시해 이 방법이 통하지 않는 이유를 설명시키기(★4 · 고교 선행 · 중3 범위 밖 주의).'
```

```yaml
- id: GN-M32-118-c5
  page: 118
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    윤희네 반 남학생·여학생의 과학 성적 평균과 표준편차 표(평균은 양쪽 모두 같음). 반 전체 학생의 과학 성적의 표준편차.
  category: "표준편차 → 분산 → 집단별 (편차)² 총합 → 합산 → 전체 표준편차"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "표준편차를 제곱해 분산으로 바꾼 뒤 도수를 곱해 각 집단의 (편차)² 총합으로 되돌림"
    - step: 2
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "평균이 같다는 전제 아래 두 총합을 전체 도수로 묶어 하나의 분산으로 결합, 다시 근호를 씌움"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "두 집단 전체의 평균, 분산, 표준편차"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    118-h5 와 같은 골조에 「표준편차는 그대로 더할 수 없고 제곱해서 분산으로 바꾼 뒤에야 합칠 수 있다」는
    단계가 앞뒤로 한 번씩 더 붙는다. 제곱 → 합산 → 근호 의 왕복이 이 문항의 실수 지점이다.
    핵심문제 ★2 출발 + 통찰 2개·M_total 7 → ★3(UP 태그는 없지만 골조가 h5 와 동일).
  tier: star_3
  mechanism_primary: "각 표준편차를 제곱해 분산 → 도수 × 분산의 합 → 전체 도수로 나눠 분산 49 → 표준편차 7점"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "7점"
  answer_source: "답지"
  figure: "crop:fig-118-c5.png"
  latex: latex-bank/gn-m32/items/118-c5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '남녀 학생 수와 두 표준편차를 바꿀 수 있음. 제약: 평균이 같아야 하고, 표준편차를 제곱한 값이 정수라야 계산이 깔끔하며, 도수 × 분산의 합이 전체 도수로 나누어떨어지고 그 몫이 완전제곱수여야 답이 정수. 표의 행 구성(평균·표준편차·학생 수)은 크롭 고정.'
    creative: '(1) 남녀 학생 수의 비만 주고(예: 2:3) 표준편차를 묻기(★3 유지 · Mₐ 상승) (2) 전체 표준편차를 주고 한쪽의 표준편차를 역산(★3~4 · 119-05 골조) (3) 세 집단으로 늘리기(★4 · 계산 마찰만 커지므로 권장하지 않음).'
```

```yaml
- id: GN-M32-118-h6
  page: 118
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: ["UP"]
  category_type: "핵심문제"
  summary: |
    3개의 변량 $a$, $b$, $c$ 의 평균이 8, 분산이 14일 때 $a-2$, $b-2$, $c-2$ 의 평균과 분산.
  category: "변량 평행이동 → 평균도 같이 이동 → 편차 불변 → 분산 불변"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "모든 변량에서 같은 수를 빼면 평균도 그만큼 줄어 (변량 − 평균)인 편차가 하나도 변하지 않음을 파악 — 분산을 다시 계산할 필요가 없음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "변화된 변량에 대한 평균, 분산, 표준편차 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    a, b, c 를 각각 구할 수 없으므로 개별 값이 아니라 편차가 그대로라는 사실로 넘어가야 한다.
    평균만 2 줄고 편차는 불변 → 분산은 14 그대로. 분산까지 2 를 빼는 오답이 전형적이다.
    핵심문제 ★2 출발 + UP 태그 + 통찰 1개(d2) → ★3. 변량이 문자라 Mₐ 2.
  tier: star_3
  mechanism_primary: "평균 8 → 6 으로 이동, 편차는 그대로 → 분산 14 유지"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '평균: $6$, 분산: $14$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m32/items/118-h6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '원래 평균(8)·분산(14)과 빼는 수(2)를 바꿀 수 있음. 제약: 분산은 어떤 값을 빼도 그대로이므로 수치 제약이 사실상 없고, 표준편차까지 묻는다면 분산을 완전제곱수로 두어야 정수로 떨어짐. 변량 개수는 답에 영향을 주지 않음.'
    creative: '(1) 더하는 형태(a+3, b+3, c+3)로 바꾸기(★3 유지) (2) 2a−1 처럼 상수배와 평행이동을 섞기(★3~4 · 분산은 4배 · I-EQV depth 상승) (3) 변형된 자료의 분산을 주고 원래 분산을 역으로 묻기(★3 · I-BW).'
```

```yaml
- id: GN-M32-118-c6
  page: 118
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    4개의 변량 $a$, $b$, $c$, $d$ 의 평균이 6, 표준편차가 $\sqrt{10}$ 일 때 $2a$, $2b$, $2c$, $2d$ 의 평균과 표준편차.
  category: "변량 상수배 → 평균·편차도 같은 배 → 분산은 제곱배 → 표준편차는 상수배"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "모든 변량이 2배면 평균도 2배, 따라서 편차도 2배 — 분산은 편차의 제곱 평균이라 4배가 되고 표준편차는 다시 2배가 됨"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "변화된 변량에 대한 평균, 분산, 표준편차 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    118-h6 의 평행이동과 달리 편차 자체가 2배로 늘어나고, 제곱을 거치며 분산이 4배가 되었다가
    근호에서 다시 2배로 돌아온다. 이 제곱 관계를 끝까지 따라가는 것이 유일한 갈림길이다.
    확인문제라 UP 태그는 없지만 통찰 1개(d2)에 제곱 관계 추적이 더해져 ★2 출발에서 +1 → ★3.
    [분류 이슈] 규칙상 통찰 1개·M_total 6 은 ★2 유지 후보 — 후보 ★2/★3 로 기록.
  tier: star_3
  mechanism_primary: "평균 6 → 12, 편차 2배 → 분산 4배 → 표준편차는 원래 값의 2배"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '평균: $12$, 표준편차: $2\sqrt{10}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m32/items/118-c6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '원래 평균(6)·표준편차(루트 10)와 곱하는 수(2)를 바꿀 수 있음. 제약: 곱하는 수가 음수이면 표준편차는 절댓값을 취해야 하므로 중3 범위에서는 양수로 둘 것. 표준편차를 정수로 만들려면 원래 분산을 완전제곱수로.'
    creative: '(1) 곱하는 수를 음수(−3배)로 두고 표준편차의 부호를 따지게 하기(★4 · T-부호 · I-VF 추가) (2) 3a+1 처럼 상수배와 평행이동을 결합(★3~4) (3) 변형 후의 분산을 주고 원래 표준편차를 역산(★3 · I-BW).'
```

### 이런 문제가 시험에 나온다

```yaml
- id: GN-M32-119-01
  page: 119
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 나온다"
  summary: |
    5개 지역의 밤 10시 기온과 편차 표(일부 칸이 비어 있음). 보기 ㄱ~ㄹ(서울 기온과 평균의 대소 · 부산의 편차 · 평균값 · 대전의 기온) 중 옳은 것 모두 고르기.
  category: "완전한 한 쌍으로 평균 역산 → 편차의 총합 0 으로 빈칸 → 보기 판정"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "기온과 편차가 모두 적힌 지역 한 곳에서 평균 = 기온 − 편차 로 평균을 역산한 뒤 그 평균으로 나머지 빈칸을 모두 채움"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "편차의 성질로 변량·평균 판정하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    평균이 주어지지 않아 먼저 역산해야 하고, 편차의 총합 0 으로 비어 있는 편차를 채운 뒤에야 네 보기를 판정할 수 있다.
    ㄱ은 편차의 부호, ㄴ·ㄹ은 채운 칸의 값, ㄷ은 역산한 평균 자체를 묻는 구조다.
    시험 구역 ★2~3 출발 + 판정 항목 4개·M_total 7 → ★3. 부호(T-부호)와 평균보다 높다·낮다의 경계(T-경계)가 함정.
  tier: star_3
  mechanism_primary: "평균 = 기온 − 편차 로 평균 역산 → 편차의 총합 0 으로 빈칸 → 각 보기 참·거짓"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "ㄴ, ㄹ"
  answer_source: "답지"
  figure: "crop:fig-119-01-2.png"
  latex: latex-bank/gn-m32/items/119-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '지역별 기온과 편차를 바꿀 수 있음. 제약: 모든 지역에서 기온 − 평균 = 편차 가 동시에 성립해야 하고 편차의 총합은 0, 빈칸은 나머지 정보로 유일하게 결정되어야 함. 보기 ㄷ 의 평균값은 역산 결과와 어긋나게 두어야 거짓 보기가 됨. 표의 지역 수(5개)와 이름은 크롭 고정.'
    creative: '(1) 5지선다로 바꾸고 「기온이 가장 높은 지역」 보기를 넣기(★3 유지) (2) 분산·표준편차를 이어 묻기(★3 · Mₖ 상승) (3) 빈칸을 두 개로 늘리고 분산을 함께 주기(★4 · 119-03 골조 결합).'
```

```yaml
- id: GN-M32-119-02
  page: 119
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 나온다"
  summary: |
    어느 프로 야구팀의 지난 6회 경기 득점 표에서 이 자료의 표준편차.
  category: "평균 → 편차 → (편차)² 평균 → 분산 → 표준편차"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "분산과 표준편차 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    116-h2 와 같은 정의 사슬을 표 자료에 한 번 더 적용하는 문항으로, 갈림길이 없다.
    시험 구역 ★2~3 출발이지만 통찰 0·M_total 6 이라 낮은 쪽인 ★2 로 두었다.
    분산이 완전제곱수가 아니어서 표준편차를 근호꼴로 남기는 마무리(T-표기)가 유일한 실수 지점.
  tier: star_2
  mechanism_primary: "득점 6개의 평균 → 편차 → (편차)²의 총합 ÷ 6 → 분산 → 근호를 씌워 표준편차"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\sqrt{10}$점'
  answer_source: "답지"
  figure: "crop:fig-119-02.png"
  latex: latex-bank/gn-m32/items/119-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '6회의 득점을 바꿀 수 있음. 제약: 총합이 6의 배수라야 평균이 정수, (편차)²의 총합도 6으로 나누어떨어져야 분산이 정수이며, 답을 정수로 만들려면 분산을 완전제곱수로 맞출 것(득점이므로 0 이상의 정수). 표의 경기 수(6회)는 크롭 고정.'
    creative: '(1) 경기 하나의 득점을 미지수로 두고 표준편차를 주어 역산(★3 · I-BW) (2) 두 팀의 표를 주고 어느 팀이 더 고른지 비교(★2~3 · I-RT 추가) (3) 각 경기 득점에 2배·+1 을 적용한 자료의 표준편차를 이어 묻기(★3 · 118-c6 골조).'
```

```yaml
- id: GN-M32-119-03
  page: 119
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 나온다"
  summary: |
    A~E 5명의 지난달 독서량 편차 표(두 칸이 $a$, $b$). 독서량의 분산이 2일 때 $ab$ 의 값.
  category: "편차의 총합 0 → a+b · 분산 → a²+b² → 곱셈 공식으로 ab"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "분산 2 를 (편차)²의 총합 10 으로 바꾸고, 알려진 편차의 제곱을 빼 a²+b² 만 남김"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "편차의 총합 0 에서 얻은 a+b 와 a²+b² 를 (a+b)² = a²+2ab+b² 로 묶어 ab 를 개별 값 없이 뽑아냄"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "편차에 미지수가 있는 자료의 분산 활용"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    a, b 는 각각 결정되지 않고 대칭식으로만 결정된다 — 이 점을 알아채면 두 조건(총합 0·분산)을
    a+b 와 a²+b² 로 바꿔 곱셈 공식 한 줄로 끝난다. 117-c3 의 골조를 편차 쪽에서 반복한 문항이다.
    시험 구역 ★2~3 출발 + 통찰 2개·M_total 7 → ★3. 분산을 총합으로 되돌릴 때 5를 곱하는 것을 잊는 실수가 잦다.
  tier: star_3
  mechanism_primary: "편차의 총합 0 → a+b → 분산 2 → (편차)² 총합 10 → a²+b² → (a+b)² 전개로 ab"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-2$'
  answer_source: "답지"
  figure: "crop:fig-119-03.png"
  latex: latex-bank/gn-m32/items/119-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '알려진 세 편차와 분산(2)을 바꿀 수 있음. 제약: 편차의 총합이 0 이므로 a+b 가 먼저 정해지고, 5 × 분산에서 알려진 제곱을 뺀 값이 a²+b² ≥ (a+b)²/2 를 만족해야 실수해가 존재. ab 가 정수로 떨어지려면 (a+b)² − (a²+b²) 가 짝수여야 함. 표의 사람 수(5명)·A~E 라벨은 크롭 고정.'
    creative: '(1) ab 대신 a²+b² 나 (a−b)² 를 묻기(★3 유지) (2) a, b 가 정수라는 조건으로 두 값을 확정시키기(★4 · 후보 기각 I-VF) (3) 분산 대신 표준편차를 주어 제곱 단계를 추가(★3 유지 · Mₖ 상승).'
```

```yaml
- id: GN-M32-119-04
  page: 119
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 나온다"
  summary: |
    어느 중학교 3학년 3개 반의 사회 성적 평균·표준편차 표. 옳은 것을 고르는 5지선다(우수한 반 · 70점 미만 유무 · 최고점 학생의 반 · 90점 이상 학생 수 · 성적이 고른 반).
  category: "평균·표준편차로 결정되는 진술과 결정되지 않는 진술 가르기"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "평균은 집단의 위치, 표준편차는 퍼짐이라는 분포 표현으로 옮겨 반끼리 비교"
    - step: 2
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "각 선택지를 두 통계량만으로 판정 가능한지 되짚어, 개별 학생의 점수나 특정 점수대의 인원처럼 결정되지 않는 진술을 기각"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "자료의 이해(평균·표준편차 해석)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    다섯 선택지 중 넷이 「평균과 표준편차만으로는 알 수 없는 것」이고, 남는 하나가 표준편차의 대소로
    고른 정도를 비교하는 진술이다. 계산이 아니라 기각이 풀이의 본체라 I-VF 를 라벨했다.
    시험 구역 ★2~3 출발 + 통찰 2개(d1·d2) → ★3. 평균이 높으면 최고점도 높다고 믿는 T-표기 오류가 전형적 함정.
  tier: star_3
  mechanism_primary: "표준편차 대소 → 고른 정도 비교, 나머지 선택지는 개별 값·분포 모양을 요구하므로 결정 불가로 기각"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "⑤"
  answer_source: "답지"
  figure: "crop:fig-119-04.png"
  latex: latex-bank/gn-m32/items/119-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '세 반의 평균·표준편차 수치를 바꿀 수 있음. 제약: 참이 되는 선택지는 반드시 두 통계량만으로 판정되는 진술이어야 하고(평균 대소 또는 표준편차 대소), 나머지 넷은 개별 학생·인원수를 묻게 두어 결정 불가로 만들 것. 평균이 가장 높은 반과 표준편차가 가장 작은 반을 다르게 두면 함정이 살아남.'
    creative: '(1) 보기(ㄱㄴㄷㄹ) 형식으로 바꾸고 복수 정답을 만들기(★3 유지 · 117-h4 골조) (2) 학생 수를 함께 주고 전체 평균까지 계산시키기(★3~4 · 118-h5 결합) (3) 옳지 않은 것을 고르게 뒤집기(★3 유지 · T-경계 강화).'
```

```yaml
- id: GN-M32-119-05
  page: 119
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: ["UP"]
  category_type: "시험에 나온다"
  summary: |
    평균이 같은 A 그룹 4명(표준편차 $2\,\mathrm{kg}$)과 B 그룹 6명(표준편차 $a\,\mathrm{kg}$). 두 그룹 전체의 몸무게의 표준편차가 $\sqrt{7}\,\mathrm{kg}$ 일 때 $a$ 의 값.
  category: "전체 (편차)² 총합 = 각 그룹 도수 × 분산 → 미지 표준편차 역산"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "표준편차를 제곱해 분산으로 바꾸고 도수를 곱해 각 그룹의 (편차)² 총합으로 되돌림"
    - step: 2
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "평균이 같다는 조건 아래 두 그룹의 총합을 전체 10명의 분산 7 과 하나의 등식으로 결합"
    - step: 3
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "전체 표준편차가 결과로 주어진 상태에서 미지의 a 를 역추적하고, 표준편차는 음수가 될 수 없으므로 양의 값만 채택"
  insight_count: 3
  depth_score: 4.00
  type_id: null
  type_hint: "두 집단 전체의 표준편차로 미지의 표준편차 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    118-h5 의 결합 골조를 거꾸로 돌리는 문항이다 — 4×4 + 6a² = 10×7 한 줄을 세우면 a² 가 나오고,
    표준편차이므로 양의 값만 남긴다. 등식을 세우기까지가 전부이고 계산 자체는 한 줄이다.
    UP 태그 + 통찰 3개·M_total 8 은 ★4 후보이지만, 구역이 시험 대비 기본 구역이고 식이 한 줄이라 ★3 으로 두었다.
    [분류 이슈] 후보 ★3/★4 로 기록한다.
  tier: star_3
  mechanism_primary: "4×4 + 6a² = 10×7 → 6a² = 54 → a² = 9 → 양수 조건으로 a = 3"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m32/items/119-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 그룹의 인원(4, 6)·A의 표준편차(2)·전체 표준편차(루트 7)를 바꿀 수 있음. 제약: 두 평균이 같아야 하고, 전체 도수 × 전체 분산에서 A 그룹의 (편차)² 총합을 뺀 값이 양수이면서 B 그룹의 도수로 나누어떨어져야 하며, 그 몫이 완전제곱수라야 a 가 정수로 떨어짐.'
    creative: '(1) 미지수를 B 그룹의 인원으로 바꾸기(★3~4 · 일차방정식이 되어 골조는 유지) (2) 전체 표준편차 대신 전체 분산을 주어 제곱 단계를 덜기(★3 · 난이도 하락) (3) 두 그룹의 평균을 다르게 주고 성립하지 않음을 설명시키기(★4 · 중3 범위를 넘으므로 서술형 보너스로만).'
```

## 표본 판정 요약 (21문)

- ★ 분포: ★1 4 · ★2 7 · ★3 10 · ★4 0 · ★5 0
- 통찰형 12 · 절차형 9 · premium 0
- 통찰 유형 분포: I-EQV 11 · I-RT 3 · I-CON 3 · I-BW 2 · I-VF 1 (총 20회 · SC/SYM/PD/XU/MI 없음)
- type_hint 상위: 「분산과 표준편차 구하기」 계열 4 · 「자료의 이해(평균·표준편차 해석)」 3 · 「두 집단 전체의 평균·분산·표준편차」 계열 3 · 「평균과 분산을 이용하여 식의 값 구하기」 2 · 「변화된 변량에 대한 평균·분산·표준편차」 2
- 구역별 ★: 개념원리 확인하기 4문 전부 ★1 · 핵심문제 익히기 12문(★2 6 · ★3 6) · 이런 문제가 시험에 나온다 5문(★2 1 · ★3 4)
- 대상층: 하위권 4 · 중하위권 5 · 중위권 8 · 중상위권 4
- 그림: 13문(표 크롭) · 변량이 발문에 나열된 8문은 none
- 전사 답과 어긋나 보이는 문항 없음(골조를 잡는 동안 조건과 answer 가 모순되는 사례 0건)

## 분류 이슈 목록

판정이 애매하거나 벤더 신호와 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-M32-117-c4 | 표를 두 줄 읽으면 끝나는 M_total 4 라 −1 규칙상 ★1 후보. 「길다=평균 · 고르다=표준편차」 분리를 I-RT d1 로 인정해 핵심문제 층 ★2 유지 | ★1 / ★2 |
| GN-M32-118-c6 | 통찰 1개(d2)·M_total 6 으로 규칙상 ★2 유지 후보. 편차 2배 → 분산 4배 → 표준편차 2배의 제곱 관계 추적을 근거로 +1 하여 ★3 | ★2 / ★3 |
| GN-M32-119-05 | UP 태그 + 통찰 3개(I-EQV·I-CON·I-BW)·M_total 8 은 ★4 후보. 구역이 시험 대비 기본 구역이고 식이 한 줄이라 ★3 유지 | ★3 / ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형** — ㉠ 「편차의 총합 0 으로 미지 편차·변량·평균 구하기」(115-02 · 115-03 · 116-h1 · 116-c1 · 119-01): 묻는 대상이 편차냐 변량이냐 평균이냐로 갈리지만 골조는 하나라 **한 유형 + 세 방향 변형**으로 묶는 편이 낫다. ㉡ 「정의대로 분산·표준편차 구하기」(115-04 · 116-h2 · 116-c2 · 119-02): 변량이 주어진 경우와 편차가 주어진 경우로 base ★ 가 갈리지 않으므로 통합 가능. ㉢ 「평균·분산으로 대칭식의 값 구하기」(117-h3 · 117-c3 · 119-03): 변량에 미지수가 있는 경우와 편차에 미지수가 있는 경우가 같은 골조라 **한 유형**으로 통합하되, 묻는 식(x²+y² · xy · (a−b)²)을 변형 축으로 둘 것.
- **base ★ 를 따로 매겨야 할 유형** — ㉣ 「두 집단 전체의 분산·표준편차」(118-h5 · 118-c5 · 119-05): 정방향(전체 표준편차 구하기)과 역방향(한쪽 표준편차 역산)의 체감 차가 커서 base ★ 2 단계로 나누는 것을 권한다. ㉤ 「변화된 변량의 평균·분산」(118-h6 · 118-c6): 평행이동(분산 불변)과 상수배(분산 제곱배)를 한 유형으로 묶으면 ★ 가 흔들리므로 하위 갈래를 명시할 것.
- **해석형 유형**(117-h4 · 117-c4 · 119-04)은 계산이 없어 M 으로는 변별되지 않고, 「두 통계량으로 결정되지 않는 진술을 기각해야 하는가(I-VF)」의 유무가 ★2 와 ★3 을 가른다. 카탈로그에서도 이 기준을 유형 설명에 직접 적어 두는 편이 안전하다.
- 이 범위에 I-SC · I-SYM · I-PD · I-XU 는 한 번도 나오지 않았다. 12단원 전반만으로는 ★4~5 슬롯의 저노출 유형 요건을 채울 수 없으므로, ★4 이상은 2/2 범위(중단원 마무리·서술형)에서 찾아야 한다.
