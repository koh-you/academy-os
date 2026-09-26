---
name: mechanism-데이터-RPM-PROB-03-p2
description: RPM 확률과 통계 03 조건부확률(2/2 · 유형 08~실력 Up) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: RPM 확률과 통계 (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-prob
  section: 03 조건부확률
  unit_code: PROB-03
  part: "2/2"
  extract_range: "46~51쪽 · 0273~0313"
  total_problems: 41
  unit_total: 79
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). depth_score 는 effective_depth 의 합. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-prob/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-prob/items/<id>.tex
  image_source: latex-bank/rpm-prob/figures/ (crops.json)
---

# RPM 확률과 통계 · 03 조건부확률 (2/2) 정독 데이터 (v1.0)

이 파일은 RPM 확률과 통계 03 조건부확률의 뒤쪽 절반(46~51쪽 · 0273~0313 · 41문항)을 다룬다. 구역은 「유형 08 독립사건의 확률」 · 「유형 09 독립시행의 확률 (1)」 · 「유형 UP 10 사건의 독립과 종속의 성질」 · 「유형 11 독립시행의 확률 (2)」 · 「시험에 꼭 나오는 문제」 · 「서술형 주관식」 · 「실력 Up」 일곱이며, 앞쪽 절반(1/2)의 조건부확률·곱셈정리 위에서 독립과 독립시행으로 넘어가는 구간이다.

RPM 의 난이도 신호는 구역 자체(교과서 / 유형 / 유형 UP / 시험에 꼭 나오는 문제 / 서술형 주관식 / 실력 Up)와 문항별 난이도 표시(중하·중·상중), 태그(대표문제·중요·서술형·평가원 기출·수능 기출)로 들어온다. 이 범위에서는 유형 구역이 ★1~3, 유형 UP 이 ★3, 시험에 꼭 나오는 문제가 ★2~3, 서술형 주관식이 ★3, 실력 Up 이 ★4 로 정리되었다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(통찰 유형·depth·근거) · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 창의 변형과 ★ 변동 지점)를 채웠다. 답은 전사·검수 단계에서 답지와 대조가 끝난 값을 그대로 옮겼다.

## 문항 데이터

### 유형 08 독립사건의 확률

```yaml
- id: RPM-PROB-0273
  page: 46
  vendor_label: "유형 08 독립사건의 확률"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    페널티 킥 성공률이 각각 2/5, 1/3 인 두 선수가 한 번씩 찰 때 적어도 한 명이 성공할 확률.
  category: "독립 → 여사건 → 곱셈정리"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "독립사건에서 적어도 하나가 일어날 확률(여사건)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    적어도 한 명 성공을 둘 다 실패하는 여사건으로 바꾸면 1 에서 곱 하나를 빼는 한 줄로 끝난다.
    여사건 전환과 독립 곱셈 두 단계뿐이고 함정도 여사건 방향 하나.
    유형 대표문제 출발점 ★2 를 통찰 없음·M_total 5 로 유지.
  tier: star_2
  mechanism_primary: "적어도 한 명 성공 → 여사건(둘 다 실패) → 독립이므로 곱 → 1 에서 빼기"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{3}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0273.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 성공률을 다른 유리수로 바꿔도 골조가 같다. 제약: 두 확률이 0 과 1 사이여야 하고, 1-(1-p)(1-q) 가 기약분수로 정리되는 분모를 고른다.'
    creative: '(1) 선수를 셋으로 늘려 여사건 곱을 3 개로(★2 유지) (2) 적어도 한 명 성공 확률을 주고 한 선수의 성공률을 역으로 묻기(I-BW · ★3) (3) 정확히 한 명만 성공으로 바꾸면 배반 두 항(★2).'
```

```yaml
- id: RPM-PROB-0274
  page: 46
  vendor_label: "유형 08 독립사건의 확률"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    주머니 A(빨강 5, 파랑 3)와 주머니 B(빨강 3, 파랑 4)에서 한 개씩 꺼낼 때 모두 파란 구슬일 확률.
  category: "서로 다른 주머니 → 독립 → 곱"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "서로 독립인 두 추출의 곱셈정리"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    두 주머니의 추출은 서로 영향을 주지 않으므로 각 주머니의 파랑 확률을 곱하는 한 줄.
    변환 단계가 없고 통찰 없음·M_total 4 라 유형 출발점 ★2 에서 -1 하여 ★1.
  tier: star_1
  mechanism_primary: "주머니별 파랑 확률 → 독립이므로 곱"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{3}{14}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0274.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 주머니의 구슬 개수를 자유롭게 바꿀 수 있다. 제약: 각 주머니의 전체 개수가 분모이므로 약분 결과가 간단해지는 조합을 고른다.'
    creative: '(1) 같은 색일 확률로 바꾸면 빨-빨과 파-파 배반 합(★2) (2) 한 주머니에서 꺼내 다른 주머니에 넣는 연결을 두면 독립이 깨져 조건부확률 ★3 (3) 색이 서로 다를 확률은 여사건 한 단계 추가(★2).'
```

```yaml
- id: RPM-PROB-0275
  page: 46
  vendor_label: "유형 08 독립사건의 확률"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    A 지역과 B 지역에 눈이 올 확률이 각각 0.2, 0.3 이고 두 사건이 독립일 때 A 에는 오지 않고 B 에는 올 확률.
  category: "여사건 → 독립 곱"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "독립사건과 여사건의 곱셈정리"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    A 의 여사건 확률로 뒤집고 B 와 곱하는 한 줄. 독립이 발문에 명시돼 판단 부담도 없다.
    통찰 없음·M_total 4 → 유형 출발점 ★2 에서 -1 하여 ★1.
  tier: star_1
  mechanism_primary: "A 의 여사건 확률 → B 와 독립이므로 곱"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$0.24$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0275.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 확률을 0 과 1 사이 소수로 자유롭게 바꿀 수 있다. 제약: 곱이 소수 둘째 자리에서 끝나야 답 표기가 깔끔하다.'
    creative: '(1) 두 지역 중 한 곳에만 올 확률(배반 두 항 · ★2) (2) 적어도 한 곳에 올 확률(여사건 · ★2) (3) 세 지역으로 늘려 정확히 한 곳만 오는 확률을 묻기(★3).'
```

```yaml
- id: RPM-PROB-0276
  page: 46
  vendor_label: "유형 08 독립사건의 확률"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    당첨 확률이 각각 1/10, p 이고 서로 독립일 때 두 사람 중 한 명만 당첨될 확률이 7/30 이 되는 p.
  category: "한 명만 당첨 → 배반 두 항 → p 일차방정식"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "독립사건에서 정확히 한 사건만 일어날 확률과 미지 확률 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    한 명만 당첨을 (당첨·낙첨)과 (낙첨·당첨) 두 배반 항으로 쓰고 p 에 대한 일차방정식을 푼다.
    배반 분해와 미정계수 대입은 표준 절차라 통찰로 세지 않았다.
    level 중 출발점 ★2 를 M_total 6 으로 유지.
  tier: star_2
  mechanism_primary: "한 명만 당첨 → 배반 두 항의 합 → p 일차방정식 → p"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{6}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0276.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '고정 확률 1/10 과 목표 확률 7/30 을 바꿀 수 있다. 제약: p 가 0 과 1 사이 유리수로 떨어지도록 목표 확률을 p 에서 역산해 정한다.'
    creative: '(1) 적어도 한 명 당첨 확률을 주고 p 를 묻기(여사건 · ★2) (2) 둘 다 당첨될 확률까지 주고 독립 여부를 판정하게 하면 ★3 (3) 세 사람으로 늘려 정확히 한 명만 당첨으로 바꾸면 항이 3 개 ★3.'
```

```yaml
- id: RPM-PROB-0277
  page: 46
  vendor_label: "유형 08 독립사건의 확률"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    두 바이러스 A, B 의 보균자 수를 남녀로 나눈 표(본문 내장 이미지)에서, 바이러스 A 보균자를 택하는 사건과 남자를 택하는 사건이 독립일 때 표의 x.
  category: "독립 정의 대입 → 표의 미지수"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "도수표에서 두 사건이 독립이 되는 미지수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    표의 행·열 합계를 정리한 뒤 P(A∩남)=P(A)P(남) 에 도수를 넣어 x 방정식을 만든다.
    표 읽기와 합계 정리가 부담의 대부분이고 독립 정의 대입 자체는 표준 절차라 통찰 없음.
    level 중·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "표 도수 정리 → 독립 정의 P(A∩남)=P(A)P(남) 대입 → x 방정식"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "①"
  answer_source: "답지"
  figure: "crop:fig-0277.png"
  latex: latex-bank/rpm-prob/items/0277.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '표의 각 칸 도수와 전체 합계를 바꿀 수 있다. 제약: 독립 조건이 비례식이므로 x 가 자연수로 떨어지도록 행·열 합계를 먼저 잡는다. 표 이미지의 라벨(바이러스 A·B, 남·여)은 고정.'
    creative: '(1) x 를 주고 독립인지 판정하게 하기(★2) (2) 종속으로 바꾸고 조건부확률 값을 묻기(★3) (3) 범주를 셋으로 넓혀 두 사건의 독립이 동시에 성립하는 미지수를 묻기(★4).'
```

```yaml
- id: RPM-PROB-0278
  page: 46
  vendor_label: "유형 08 독립사건의 확률"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    두 상자 A, B 에 숫자 카드가 4 장씩 들어 있을 때(그림) 한 장씩 꺼낸 두 수의 합이 홀수일 확률.
  category: "합의 홀짝 → 홀·짝 배반 두 경우 → 독립 곱의 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "독립인 두 추출에서 합의 홀짝 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    합이 홀수인 경우는 (A 홀·B 짝)과 (A 짝·B 홀) 둘뿐이고 두 상자가 독립이라 각 항이 곱.
    그림에서 각 상자의 홀·짝 장수만 읽으면 끝나고 통찰 없음·M_total 6 → level 중 출발점 ★2.
  tier: star_2
  mechanism_primary: "합이 홀수 → 홀·짝 조합 두 경우 → 상자별 확률 곱의 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{5}{8}$'
  answer_source: "답지"
  figure: "crop:fig-0278.png"
  latex: latex-bank/rpm-prob/items/0278.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '각 상자의 카드 숫자 구성(홀·짝 장수)을 바꿀 수 있다. 제약: 그림의 카드가 4 장씩으로 고정이므로 홀·짝 개수만 조정하고 답이 기약분수가 되는 조합을 고른다.'
    creative: '(1) 두 수의 곱이 짝수일 확률(여사건 · ★2) (2) 합이 3 의 배수로 바꾸면 경우 열거가 늘어 ★3 (3) 한 상자에서 두 장을 비복원으로 꺼내면 독립이 깨져 ★3.'
```

```yaml
- id: RPM-PROB-0279
  page: 46
  vendor_label: "유형 08 독립사건의 확률"
  vendor_level: "상중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    스위치 A 에 B, C 가 병렬로 이어진 회로(그림)에서 A, B, C 가 열려 있을 확률이 각각 0.4, 0.5, 0.6 이고 독립적으로 작동할 때 전구에 불이 켜질 확률.
  category: "회로 구조 → 직렬은 곱·병렬은 여사건 → 닫힘 확률"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "회로의 직렬·병렬 구조를 곱셈정리와 여사건 확률로 옮김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "회로의 직렬·병렬 연결과 독립사건의 확률"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    열려 있을 확률이 주어졌으므로 먼저 닫힐 확률로 뒤집고, 병렬인 B, C 는 적어도 하나만 닫히면 되므로 여사건으로 처리한 뒤 직렬인 A 와 곱한다.
    회로도를 확률 연산으로 옮기는 표현 전환이 핵심 통찰 1 개(RT d2)이고, 열림·닫힘 뒤집기와 병렬의 여사건이 함정 두 갈래.
    상중·서술형 → ★3.
  tier: star_3
  mechanism_primary: "열림 확률 → 닫힘 확률 → 병렬 B, C 는 여사건으로 처리 → 직렬 A 와 곱"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$0.42$'
  answer_source: "답지"
  figure: "crop:fig-0279.png"
  latex: latex-bank/rpm-prob/items/0279.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '세 스위치의 열림 확률을 바꿀 수 있다. 제약: 열림·닫힘 중 어느 쪽을 주는지 발문과 일치시키고, 그림의 회로 구조(A 직렬 · B, C 병렬)와 라벨은 고정한다.'
    creative: '(1) 불이 켜지지 않을 확률로 뒤집기(★3 유지) (2) 병렬 가지를 3 개로 늘리면 여사건 항이 늘어 ★3 (3) 스위치 하나를 다른 스위치와 연동시키면 독립 가정이 깨져 ★4 (4) 불이 켜질 확률을 주고 한 스위치의 확률을 역으로 묻기(I-BW · ★4).'
```

### 유형 09 독립시행의 확률 (1)

```yaml
- id: RPM-PROB-0280
  page: 47
  vendor_label: "유형 09 독립시행의 확률 (1)"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    한 발의 명중률이 2/3 인 선수가 5 발을 쏠 때 표적을 한 번 이상 맞힐 확률. 5지선다.
  category: "한 번 이상 → 여사건 → 독립시행"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "독립시행에서 적어도 한 번 성공할 확률"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    한 번 이상은 5 발 모두 빗나가는 여사건이 항 하나로 끝난다.
    독립시행 인식과 여사건 전환 두 단계뿐이고 통찰 없음·M_total 5.
    유형 대표문제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "한 번 이상 → 여사건(5 발 모두 실패) → 1 에서 빼기"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0280.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '명중률과 시행 횟수를 바꿀 수 있다. 제약: 선택지가 같은 분모(확률 분모의 거듭제곱)로 정리되도록 고른다.'
    creative: '(1) 두 번 이상으로 바꾸면 여사건이 두 항이 되어 ★2~3 (2) 한 번 이상 맞힐 확률이 주어진 값 이상이 되는 최소 시행 횟수를 묻기(부등식 · ★3) (3) 발마다 명중률이 달라지면 독립시행 공식이 깨져 ★3.'
```

```yaml
- id: RPM-PROB-0281
  page: 47
  vendor_label: "유형 09 독립시행의 확률 (1)"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    평평한 면이 아래로 나올 확률이 1/4 인 윷가락 4 개를 동시에 던질 때 그런 윷가락이 3 개일 확률.
  category: "독립시행 공식 직접 대입"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "독립시행의 확률 기본 대입"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    성공 횟수가 발문에 그대로 주어져 변환 없이 독립시행 공식에 한 번 대입하면 끝난다.
    통찰 없음·M_total 5 → level 중 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "독립시행 4 회 중 성공 3 회 → 조합 × 확률의 거듭제곱"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{3}{64}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0281.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '확률 p 와 시행 횟수 n, 성공 횟수 r 을 바꿀 수 있다. 제약: r 이 0 이상 n 이하여야 하고 p 의 거듭제곱 분모가 지나치게 커지지 않게 한다.'
    creative: '(1) 3 개 이상으로 바꾸면 두 항 합(★2) (2) 윷가락 4 개를 두 번 던지는 이중 시행이면 ★3 (3) 3 개일 확률을 주고 p 를 역으로 묻기(★3).'
```

```yaml
- id: RPM-PROB-0282
  page: 47
  vendor_label: "유형 09 독립시행의 확률 (1)"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    각 객실이 룸서비스를 이용할 확률이 3/5 일 때 4 개 객실 중 적어도 1 개가 이용할 확률. 5지선다.
  category: "적어도 1 개 → 여사건 → 독립시행"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "독립시행에서 적어도 한 번 성공할 확률"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    적어도 1 개는 네 객실 모두 이용하지 않는 여사건이 항 하나로 빠르다.
    0280 과 같은 골조이며 통찰 없음·M_total 5 → level 중 ★2.
  tier: star_2
  mechanism_primary: "적어도 1 개 → 여사건(4 개 모두 미이용) → 1 에서 빼기"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0282.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '이용 확률과 객실 수를 바꿀 수 있다. 제약: 여사건 한 항으로 끝나야 골조가 유지되고, 선택지 분모가 확률 분모의 거듭제곱으로 통일되어야 한다.'
    creative: '(1) 정확히 2 개가 이용할 확률(★2) (2) 적어도 3 개로 올리면 여사건이 더 무거워져 직접 합과 비교하는 전략 선택 ★3 (3) 객실마다 이용 확률이 다르면 독립 곱을 따로 써야 해 ★3.'
```

```yaml
- id: RPM-PROB-0283
  page: 47
  vendor_label: "유형 09 독립시행의 확률 (1)"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    7 문제 중 2 문제를 맞히는 학생이 5 문제 중 4 문제 이상을 맞혀 합격할 확률이 k/7^5 일 때 상수 k.
  category: "4 문제 이상 → 두 항 배반 합 → 분모 통일 후 분자 읽기"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "독립시행에서 성공 횟수 이상 조건의 확률"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    한 문제 정답률을 2/7 로 읽고 4 회와 5 회 두 항을 더한 뒤 분모를 7 의 거듭제곱으로 맞춰 분자를 읽는다.
    이상 조건을 두 항으로 나누는 것은 표준 절차라 통찰 없음·M_total 6 → level 중 ★2.
  tier: star_2
  mechanism_primary: "정답률 2/7 → 5 회 중 4 회와 5 회 두 항의 합 → 분모 7 의 거듭제곱에서 분자 k"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$432$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0283.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '정답률의 분모, 문항 수, 합격 기준을 바꿀 수 있다. 제약: 답을 분자 형태로 묻기 때문에 확률의 분모가 소수여서 약분이 일어나지 않아야 한다.'
    creative: '(1) 합격 확률 자체를 묻기(★2) (2) 합격 기준을 3 문제 이상으로 낮추면 여사건 쪽이 유리해져 전략 선택 ★3 (3) 합격 확률을 주고 정답률을 역으로 묻기(★3).'
```

```yaml
- id: RPM-PROB-0284
  page: 47
  vendor_label: "유형 09 독립시행의 확률 (1)"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    공격 성공률이 40 % 인 선수가 4 번 시도할 때 2 번 이상 성공시킬 확률.
  category: "2 번 이상 → 여사건(0 회·1 회) → 독립시행"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "독립시행에서 성공 횟수 이상 조건의 확률(여사건)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    2 번 이상은 0 회와 1 회의 여사건이 두 항으로 짧아 직접 세 항을 더하는 것보다 가볍다.
    여사건 전환과 두 항 계산뿐이라 통찰로 세지 않았고 M_total 6 → level 중 ★2.
  tier: star_2
  mechanism_primary: "2 번 이상 → 1 에서 (0 회 + 1 회)를 빼기"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{328}{625}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0284.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '성공률과 시행 횟수, 기준 횟수를 바꿀 수 있다. 제약: 여사건 항 수가 직접 세는 항 수보다 적어야 이 골조가 유지된다.'
    creative: '(1) 정확히 2 번으로 바꾸면 한 항(★1~2) (2) 3 번 이상과 비교하게 하면 ★3 (3) 시도마다 성공률이 달라지면 독립시행 공식이 깨져 ★4.'
```

```yaml
- id: RPM-PROB-0285
  page: 47
  vendor_label: "유형 09 독립시행의 확률 (1)"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    실력이 같은 두 팀이 5 번 중 먼저 3 번 이기면 우승하는 시합에서 4 번째 경기에 우승팀이 결정될 확률. 5지선다.
  category: "결정 시점 조건 → 앞 3 경기 2 승 1 패 + 4 번째 승 → 두 팀 배반 합"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "4 번째에 결정된다는 조건을 앞 3 경기에서 2 승 1 패 뒤 4 번째 승리라는 독립시행 조건으로 옮김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "몇 번째 시행에서 승부가 결정될 확률(독립시행)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    4 번째에 끝난다는 조건을 앞 3 경기 2 승 1 패 + 4 번째 승리로 옮기는 동치 변환이 핵심(EQV d2).
    어느 팀이 우승하든 되므로 마지막에 2 배 하는 것이 함정.
    level 중 출발점 ★2 이고 통찰 1 개 d2 는 +1 요건(2 개 이상 또는 d3)에 못 미쳐 ★2 유지.
  tier: star_2
  mechanism_primary: "4 번째 결정 → 앞 3 경기 2 승 1 패 × 4 번째 승 → 두 팀이므로 2 배"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0285.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '승률과 우승 조건(3 선승·4 선승), 결정되는 경기 번호를 바꿀 수 있다. 제약: 결정 경기 번호가 필요 승수 이상이어야 하고 앞 경기의 승패 배분이 가능해야 한다.'
    creative: '(1) 5 번째 경기에서 결정될 확률(★3) (2) 승률이 다른 두 팀이면 2 배 대칭이 깨져 두 항을 따로 써야 해 ★3 (3) 특정 팀이 우승할 확률 전체를 묻기(경기 수 분기 합 · ★3).'
```

```yaml
- id: RPM-PROB-0286
  page: 47
  vendor_label: "유형 09 독립시행의 확률 (1)"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    주사위를 던져 3 의 배수의 눈이 나오면 동전을 3 번, 아니면 2 번 던질 때 앞면이 1 번 나올 확률.
  category: "시행 분기 → 분기별 독립시행 → 전확률 합"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "주사위 결과에 따라 동전 시행 횟수가 달라져 서로 다른 두 독립시행을 모두 따진 뒤 합침"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "시행 횟수가 조건에 따라 달라지는 독립시행(전확률)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    주사위가 어떤 독립시행을 할지 결정하므로 동전 3 번과 2 번 두 시나리오를 각각 계산해 더해야 한다(MI d2).
    분기 확률 1/3, 2/3 을 각 항에 곱하는 전확률 구조가 골조이고 3 의 배수 눈이 2 개뿐인 것도 걸림돌.
    상중 → ★3.
  tier: star_3
  mechanism_primary: "주사위 분기 확률 → 분기별 동전 독립시행(앞면 1 번) → 두 항의 합"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{11}{24}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-prob/items/0286.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '주사위 조건(3 의 배수·약수 등)과 동전 횟수, 앞면 횟수를 바꿀 수 있다. 제약: 두 분기 확률의 합이 1 이어야 하고 앞면 횟수가 각 분기의 시행 횟수를 넘지 않아야 한다.'
    creative: '(1) 앞면이 1 번 나왔을 때 3 의 배수가 나왔을 확률로 뒤집으면 베이즈 ★4 (2) 동전 대신 주사위를 다시 던지게 하면 계산 부담만 늘어 ★3 (3) 분기를 셋으로 늘리면 항이 늘어 ★3.'
```

### 유형 UP 10 사건의 독립과 종속의 성질

```yaml
- id: RPM-PROB-0287
  page: 48
  vendor_label: "유형 UP 10 사건의 독립과 종속의 성질"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형 UP"
  summary: |
    두 사건 A, B 에 대한 보기 ㄱ~ㄷ(독립일 때 두 조건부확률이 같은지 · 배반일 때의 조건부확률 · 포함 관계일 때의 조건부확률)의 참거짓 고르기.
  category: "보기 조건을 조건부확률 정의식으로 환원 → 참거짓"
  M: {s: 2, k: 1, a: 3, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "독립·배반·포함 조건을 각각 교집합 확률의 식으로 바꿔 정의대로 판정"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "독립·배반·포함 관계와 조건부확률의 참거짓 판정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    세 보기 모두 조건부확률의 정의로 내려가야 판정된다. 독립이면 각 조건부확률이 원래 확률로 돌아가므로 두 값이 같을 필요가 없고, 배반이면 교집합이 비며, 포함 관계면 교집합이 작은 쪽과 같다.
    정의식 환원 통찰 1 개(EQV d2)에 추상 사건 표현(Mₐ 3)이 겹치고 유형 UP 구역 → ★3.
  tier: star_3
  mechanism_primary: "각 보기 → 교집합 확률 기준으로 환원 → 정의와 대조해 참거짓"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "ㄴ, ㄷ"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-prob/items/0287.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '수치가 없는 명제형이라 바꿀 수 있는 것은 보기의 조건 자체뿐이다. 제약: 두 확률이 0 이 아니라는 전제를 유지해야 조건부확률이 정의된다.'
    creative: '(1) 거짓 보기에 대해 반례를 들게 하면 ★4 (2) 보기를 P(A|B) 와 P(A|B^c) 의 비교로 바꾸면 독립의 동치 조건으로 확장 ★4 (3) 구체적인 표본공간을 주고 같은 명제를 검증하게 하면 ★2.'
```

```yaml
- id: RPM-PROB-0288
  page: 48
  vendor_label: "유형 UP 10 사건의 독립과 종속의 성질"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    확률이 0 과 1 사이인 두 사건에서 독립과 배반의 관계를 묻는 보기 ㄱ~ㄷ(여사건의 독립 · 배반이면 독립인지 · 독립이면 배반인지)의 참거짓 고르기.
  category: "독립은 곱 조건·배반은 교집합 조건 → 각 보기 환원"
  M: {s: 2, k: 1, a: 3, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "독립과 배반을 각각 곱 조건과 교집합 조건으로 옮겨 두 개념이 양립할 수 없음을 확인"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "독립과 배반의 구별 · 여사건의 독립"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    독립과 배반을 혼동시키는 전형적인 보기. 여사건의 독립은 교집합 확률을 빼는 계산으로 확인되고, 배반이면 교집합 확률이 0 이라 확률이 양수인 두 사건은 독립일 수 없다.
    두 개념을 각각 식으로 환원하는 통찰 1 개(EQV d2)·유형 UP 구역 → ★3.
    [분류 이슈] level 은 「중」(★2 신호)인데 구역은 유형 UP(★3 신호)이라 1 단 어긋난다. 구역 신호를 따랐다.
  tier: star_3
  mechanism_primary: "독립=곱 조건, 배반=교집합 0 → 각 보기를 식으로 환원 → 양립 불가 확인"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "ㄱ"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-prob/items/0288.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '명제형이라 수치 변형 여지가 없다. 제약: 확률이 0 과 1 사이라는 전제를 빼면 두 보기의 판정이 달라지므로 그대로 둔다.'
    creative: '(1) 여사건 쌍 전체까지 묻는 보기로 확장(★3) (2) 확률이 0 인 사건을 허용하면 반례가 생겨 경계 조건 논의 ★4 (3) 참인 보기의 증명을 서술형으로 요구(★3).'
```

```yaml
- id: RPM-PROB-0289
  page: 48
  vendor_label: "유형 UP 10 사건의 독립과 종속의 성질"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    두 사건 A, B 가 독립일 때 보기 ㄱ~ㄷ(여사건의 조건부확률 · B 와 B 의 여사건으로 나눈 전확률 분해 · 합사건의 확률)의 참거짓 고르기.
  category: "독립 조건 → 여사건·전확률 형태로 환원 → 판정"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "독립 조건을 여사건의 조건부확률과 전확률 분해 형태로 옮겨 각 등식을 판정"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "독립일 때 성립하는 확률 등식의 판정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    독립이면 조건부확률이 조건을 떼어낸 확률과 같다는 성질을 여사건까지 밀고 가야 한다.
    전확률 분해 보기는 독립과 무관하게 항상 참이고, 합사건 보기는 배반일 때만 성립해 거짓.
    정의식 환원 통찰 1 개(EQV d2)·유형 UP 구역 → ★3.
  tier: star_3
  mechanism_primary: "독립 조건 → 여사건·전확률 형태로 환원 → 세 등식 각각 판정"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "ㄱ, ㄴ"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-prob/items/0289.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '명제형. 제약: 확률이 0 과 1 사이라는 전제를 유지한다.'
    creative: '(1) 거짓인 보기를 참으로 만들려면 어떤 조건이 필요한지 묻기(★3) (2) 세 사건의 독립으로 확장하면 쌍마다의 독립과 전체 독립의 차이가 드러나 ★4 (3) 구체 수치를 주고 등식을 확인하게 하면 ★2.'
```

### 유형 11 독립시행의 확률 (2)

```yaml
- id: RPM-PROB-0290
  page: 48
  vendor_label: "유형 11 독립시행의 확률 (2)"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    원점의 점 A 를 5 의 약수의 눈이면 양의 방향으로 1, 그 외의 눈이면 음의 방향으로 1 움직일 때 주사위를 4 번 던져 좌표가 2 가 될 확률. 5지선다.
  category: "좌표 조건 → 이동 횟수 연립 → 독립시행"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "점의 최종 좌표 조건을 양의 이동 횟수와 음의 이동 횟수의 연립으로 옮김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "수직선 위 점의 이동과 독립시행의 확률"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    좌표가 2 가 되려면 양의 이동이 3 번, 음의 이동이 1 번이어야 한다는 횟수 연립으로 옮기는 것이 첫 단계(RT d2).
    5 의 약수가 1 과 5 뿐이라 이동 확률이 1/3 인 것도 걸림돌이고, 이후는 독립시행 공식 대입.
    유형 대표문제 출발점 ★2 유지.
    [분류 이슈] 표현 전환 통찰(d2)이 있어 ★3 후보였으나 각 단계가 짧아 ★2 로 두고 기록만 한다.
  tier: star_2
  mechanism_primary: "좌표 2 → 양의 이동 3 번·음의 이동 1 번 연립 → 독립시행 공식 대입"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0290.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '주사위 조건(5 의 약수·3 의 배수 등), 던지는 횟수, 목표 좌표를 바꿀 수 있다. 제약: 횟수 연립의 해가 0 이상 정수여야 하고 던지는 횟수와 목표 좌표의 홀짝이 맞아야 한다.'
    creative: '(1) 좌표가 2 이상일 확률로 바꾸면 항이 늘어 ★3 (2) 이동 폭을 양의 방향 2·음의 방향 1 로 바꾸면 연립이 비대칭이 되어 ★3 (3) 4 번 안에 한 번이라도 좌표 2 에 도달할 확률이면 경로 조건이 붙어 ★4.'
```

```yaml
- id: RPM-PROB-0291
  page: 48
  vendor_label: "유형 11 독립시행의 확률 (2)"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    흰 공 3 개·검은 공 2 개에서 복원 추출해 흰 공이면 3 점, 검은 공이면 2 점을 얻는 게임을 5 번 할 때 점수 합이 14 점일 확률.
  category: "점수 합 → 흰 공 횟수 방정식 → 독립시행"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "점수 합 조건을 흰 공이 나온 횟수에 대한 일차방정식으로 옮김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "점수 합 조건을 횟수로 바꾸는 독립시행"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    흰 공 횟수를 미지수로 두면 점수 합 조건이 일차방정식이 되어 횟수가 하나로 정해진다(RT d2).
    복원이라 매회 독립이므로 이후는 독립시행 공식 한 줄.
    level 중 출발점 ★2 를 통찰 1 개 d2 로 유지.
  tier: star_2
  mechanism_primary: "점수 합 14 → 흰 공 횟수 일차방정식 → 횟수 확정 → 독립시행 공식"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{162}{625}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0291.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '공의 개수, 점수 배점, 시행 횟수, 목표 점수를 바꿀 수 있다. 제약: 목표 점수가 배점 조합으로 단 하나의 횟수만 주도록 정해야 한다(해가 둘이면 항이 늘어난다).'
    creative: '(1) 목표 점수를 이상 조건으로 바꾸면 여러 횟수가 살아나 ★3 (2) 비복원으로 바꾸면 독립시행이 깨져 조합 계산 ★3 (3) 배점을 3 점과 -1 점으로 바꾸면 음수 처리 함정이 추가돼 ★3.'
```

```yaml
- id: RPM-PROB-0292
  page: 48
  vendor_label: "유형 11 독립시행의 확률 (2)"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    한 변의 길이가 1 인 정오각형(그림)의 꼭짓점 A 에서 출발해 앞면이면 2 만큼, 뒷면이면 1 만큼 시계 반대 방향으로 움직일 때 동전을 6 번 던져 점 P 가 다시 A 로 돌아올 확률.
  category: "둘레의 배수 조건 → 앞면 횟수 결정 → 독립시행"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "다각형 위 복귀 조건을 이동 거리 합이 둘레의 배수라는 수 조건으로 옮김"
    - step: 2
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "이동 거리 합이 둘레의 배수가 되는 앞면 횟수를 가능한 범위 안에서 모두 따짐"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "도형 위 점의 순환 이동과 독립시행(나머지 조건)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    앞면 횟수를 미지수로 두면 6 번의 이동 거리 합이 정해지고, A 로 돌아오려면 그 합이 둘레 5 의 배수여야 한다는 조건으로 바뀐다(RT d2).
    앞면 횟수가 0 이상 6 이하라는 범위 안에서 조건을 만족하는 값이 하나뿐임을 확인해야 한다(MI d1).
    상중 → ★3.
    [분류 이슈] 통찰 2 개라 +1 후보(★4)였으나 각 단계가 짧고 마지막 계산이 공식 한 줄이라 ★3 으로 두고 기록만 한다.
  tier: star_3
  mechanism_primary: "앞면 횟수 → 이동 거리 합 → 둘레 5 의 배수 조건으로 횟수 확정 → 독립시행 공식"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{15}{64}$'
  answer_source: "답지"
  figure: "crop:fig-0292.png"
  latex: latex-bank/rpm-prob/items/0292.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '변의 개수(정n각형), 앞·뒷면 이동 칸수, 던지는 횟수를 바꿀 수 있다. 제약: 조건을 만족하는 횟수가 0 이상 시행 횟수 이하의 정수 범위 안에 있어야 하고, 해가 여럿이면 항이 늘어난다. 그림의 꼭짓점 라벨과 회전 방향은 고정.'
    creative: '(1) A 가 아닌 다른 꼭짓점에 도착할 확률로 바꾸면 나머지 조건만 달라져 ★3 유지 (2) 해가 두 개 나오도록 던지는 횟수를 늘리면 항이 둘이 되어 ★4 (3) 동전 면에 따라 회전 방향을 바꾸면 부호가 생겨 ★4.'
```

### 시험에 꼭 나오는 문제

```yaml
- id: RPM-PROB-0293
  page: 49
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    두 사건 A, B 에서 합사건의 확률이 1, 곱사건의 확률이 1/3, 두 조건부확률 P(A|B) 와 P(B|A) 가 같을 때 P(A).
  category: "조건부확률 등식 → 두 확률이 같음 → 덧셈정리"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 조건부확률이 같다는 조건을 분자가 공통임을 이용해 P(A)=P(B) 로 바꿈"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "조건부확률 등식에서 확률 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 조건부확률은 분자가 같은 교집합 확률이므로, 값이 같다는 조건은 분모가 같다는 뜻이 되어 P(A)=P(B) 로 바뀐다(EQV d2).
    나머지는 덧셈정리에 합사건·곱사건 확률을 넣어 두 확률의 합을 구한 뒤 반으로 나누는 한 줄.
    시험에 꼭 나오는 문제 구역·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "두 조건부확률이 같음 → P(A)=P(B) → 덧셈정리 대입 → P(A)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{2}{3}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-prob/items/0293.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '합사건·곱사건 확률을 바꿀 수 있다. 제약: 두 확률의 합이 2 로 나누어떨어져야 하고 결과가 0 과 1 사이여야 한다.'
    creative: '(1) 합사건 확률을 1 보다 작게 하면 같은 골조로 값만 달라짐(★2) (2) 두 조건부확률의 비를 주면 연립이 되어 ★3 (3) 독립 조건을 추가해 모순 여부를 판정하게 하면 ★3.'
```

```yaml
- id: RPM-PROB-0294
  page: 49
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    P(A)=1/2, P(A|B)=3/10, P(B|A)=2/5 일 때 P(B).
  category: "곱셈정리로 교집합 → 조건부확률 정의 역산"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "조건부확률 정의의 양방향 사용"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    P(B|A) 와 P(A) 로 교집합 확률을 먼저 얻고, 그 값을 P(A|B) 로 나누면 P(B) 가 나온다.
    정의식을 방향만 바꿔 두 번 쓰는 표준 절차라 통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "곱셈정리로 교집합 확률 → 조건부확률 정의를 역으로 써서 P(B)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{2}{3}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-prob/items/0294.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '세 값 중 둘을 바꿀 수 있다. 제약: 교집합 확률이 P(A), P(B) 를 넘지 않도록 먼저 교집합을 정하고 나머지를 역산한다.'
    creative: '(1) 합사건의 확률을 묻기(덧셈정리 한 단계 추가 · ★2) (2) 독립 여부를 판정하게 하기(★2) (3) 값 하나를 미지수로 두고 조건을 만족시키는 범위를 묻기(★4).'
```

```yaml
- id: RPM-PROB-0295
  page: 49
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    서로 다른 두 주사위를 던져 나온 두 눈의 수의 합이 6 일 때, 두 눈이 모두 홀수일 확률. 5지선다.
  category: "조건 사건으로 표본공간 축소 → 개수 세기"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "조건부확률의 표본공간 축소(경우의 수 비)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    합이 6 인 순서쌍으로 표본공간을 줄이고 그중 둘 다 홀수인 것을 세면 끝난다.
    순서쌍을 빠짐없이 세는 것 말고는 도구가 없어 통찰 없음·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "합이 6 인 순서쌍 열거 → 그중 둘 다 홀수인 개수 → 비"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-prob/items/0295.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '합의 값을 바꿀 수 있다. 제약: 합이 커지면 경우의 수와 홀짝 구조가 함께 달라지므로 답을 다시 세야 한다. 순서쌍을 셀 때 두 주사위를 구별하는지 일관되게 유지한다.'
    creative: '(1) 합이 짝수일 때로 조건을 넓히면 세는 양이 늘어 ★3 (2) 두 눈의 차 조건으로 바꾸면 열거 구조가 달라짐(★2) (3) 주사위를 세 개로 늘리면 ★4.'
```

```yaml
- id: RPM-PROB-0296
  page: 49
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    회원 180 명이 영화 A, B 중 하나를 관람했고 A 관람자가 남 45·여 35 명일 때, B 관람자 중 남자일 확률이 2/5 이면 여자 회원 수.
  category: "조건부확률 → B 관람자 남녀 분해 → 여자 수 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "도수 분할표와 조건부확률"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    전체에서 A 관람자를 빼 B 관람 인원을 얻고, 조건부확률로 그 안의 남녀를 나눈 뒤 A 쪽 여자와 더한다.
    표를 차례로 채우는 표준 절차라 통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "전체-A 관람 → B 관람 인원 → 조건부확률로 남녀 분해 → 여자 수 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$95$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0296.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '전체 인원, A 관람 남녀 수, 조건부확률 값을 바꿀 수 있다. 제약: B 관람 인원에 조건부확률을 곱한 값이 자연수여야 한다.'
    creative: '(1) 남자 회원 수를 묻기(★2) (2) 임의로 뽑은 한 명이 남자일 때 B 를 관람했을 확률로 뒤집으면 베이즈 ★3 (3) 두 영화를 모두 관람한 회원을 허용하면 포함배제가 필요해 ★3.'
```

```yaml
- id: RPM-PROB-0297
  page: 49
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    당첨 제비 3 개를 포함한 10 개의 제비에서 A, B 가 차례로 한 개씩 비복원으로 뽑을 때 B 가 당첨 제비를 뽑을 확률.
  category: "앞사람 결과로 배반 분해 → 조건부확률 곱의 합 → 순서 무관"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 경로의 합이 첫 번째 사람의 당첨 확률과 같다는 순서 무관 대칭성을 확인해 결과를 단축"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "비복원 추출에서 나중 사람이 당첨될 확률(순서 무관)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    A 가 당첨인 경우와 아닌 경우로 나눠 조건부확률의 곱을 더하면 결국 처음의 당첨 비율과 같아진다.
    비복원인데도 순서가 결과를 바꾸지 않는다는 대칭성이 이 문항의 학습 포인트(SYM d2)라 중요 태그와 함께 ★3.
    [분류 이슈] 답지 표준 풀이는 배반 분해 계산이라 통찰 없이 ★2 로도 볼 수 있다. 대칭성 학습 가치를 살려 ★3 으로 두고 기록한다.
  tier: star_3
  mechanism_primary: "A 의 당첨 여부로 배반 분해 → 조건부확률 곱의 합 → 처음의 당첨 비율과 같음"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{3}{10}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0297.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '전체 제비 수와 당첨 제비 수를 바꿀 수 있다. 제약: 순서 무관 성질은 개수와 관계없이 성립하므로 답은 항상 당첨 비율이다. 비복원 조건을 반드시 유지한다.'
    creative: '(1) 세 번째 사람의 당첨 확률로 확장(같은 골조 ★3) (2) A 가 당첨이었다는 조건을 주고 B 의 확률을 묻기(★2) (3) B 가 당첨이었을 때 A 도 당첨이었을 확률로 뒤집으면 베이즈 ★4.'
```

```yaml
- id: RPM-PROB-0298
  page: 49
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    상자 A(빨강 3, 파랑 4)와 상자 B(빨강 5, 파랑 2) 중 하나를 임의로 택해 2 개를 동시에 꺼낼 때 두 구슬의 색이 서로 다를 확률.
  category: "상자 선택 분기 → 상자별 조합 확률 → 전확률 합"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "확률의 곱셈정리와 전확률(상자 선택)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    상자를 고를 확률을 각 상자의 다른 색 확률에 곱해 더하는 전확률 구조.
    각 항은 조합으로 세는 표준 계산이고 분기가 발문에 명시돼 통찰로 세지 않았다.
    M_total 7 → 시험에 꼭 나오는 문제 구역 ★2.
  tier: star_2
  mechanism_primary: "상자 선택 확률 → 상자별 다른 색 확률(조합) → 두 항의 합"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{11}{21}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0298.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 상자의 구슬 구성과 꺼내는 개수를 바꿀 수 있다. 제약: 두 상자의 전체 개수가 같으면 분모가 통일돼 계산이 간단하다. 동시에 꺼내므로 조합으로 세야 한다.'
    creative: '(1) 두 구슬이 모두 빨강일 때 A 상자였을 확률로 뒤집으면 베이즈 ★3 (2) 상자 선택 확률을 다르게 주면 가중치가 생겨 ★3 (3) 한 개씩 비복원으로 두 번 꺼내면 순서가 생겨 ★3.'
```

```yaml
- id: RPM-PROB-0299
  page: 49
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["평가원 기출"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    주사위 눈이 5 이상이면 주머니 A(흰 2, 검 4), 4 이하면 주머니 B(흰 3, 검 3)에서 2 개를 꺼내는 시행에서, 꺼낸 2 개가 모두 흰색일 때 나온 눈이 5 이상일 확률. 5지선다.
  category: "분기 전확률 → 베이즈 역산"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "결과(모두 흰색)에서 원인(주사위 눈)을 역추적하는 베이즈 구조로 전확률을 분모에 둠"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "조건부확률의 역(베이즈) - 원인 추정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    각 주머니에서 흰 공 2 개가 나올 확률을 조합으로 구해 분기 확률과 곱한 뒤, 두 항의 합을 분모로 앞 항을 분자로 둔다.
    결과에서 원인을 되짚는 역방향 구조(BW d2)가 핵심이고 분기 확률을 빠뜨리기 쉬운 것이 함정.
    평가원 기출·시험에 꼭 나오는 문제 구역 → ★3.
  tier: star_3
  mechanism_primary: "분기 확률 × 주머니별 흰 2 개 확률 → 두 항의 합이 분모 → 앞 항이 분자"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "①"
  answer_source: "답지"
  figure: "crop:fig-0299.png"
  latex: latex-bank/rpm-prob/items/0299.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '주사위 분기 기준, 두 주머니의 공 구성, 꺼내는 개수를 바꿀 수 있다. 제약: 두 분기 확률의 합이 1 이어야 하고 각 주머니에서 조건을 만족하는 조합이 존재해야 한다.'
    creative: '(1) 꺼낸 공이 모두 검은색일 때로 바꾸면 같은 골조(★3) (2) 주머니를 셋으로 늘리면 분모가 세 항이 되어 ★4 (3) 꺼낸 공을 한 개만 확인한 뒤 나머지를 묻는 순차 조건이면 ★4.'
```

```yaml
- id: RPM-PROB-0300
  page: 50
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["수능 기출"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    독립인 두 사건에서 곱사건의 확률이 1/4 이고 A 의 여사건 확률이 P(A) 의 2 배일 때 P(B). 5지선다.
  category: "여사건 조건 → P(A) → 독립 곱 분해"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "독립사건의 곱셈정리로 확률 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    여사건 관계식에서 P(A) 를 먼저 구하고, 독립이므로 곱사건 확률을 P(A) 로 나누면 P(B).
    두 정의를 순서대로 쓰는 표준 절차라 통찰 없음·M_total 6 → 수능 기출이지만 ★2.
  tier: star_2
  mechanism_primary: "여사건 관계식 → P(A) → 독립 곱에서 P(B)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0300.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '여사건 비율과 곱사건 확률을 바꿀 수 있다. 제약: 얻어지는 P(B) 가 1 을 넘지 않도록 곱사건 확률을 P(A) 이하로 잡는다.'
    creative: '(1) 합사건의 확률을 묻기(★2) (2) 독립 대신 조건부확률을 주면 정의식 문제로 바뀜(★2) (3) 두 여사건의 곱사건 확률을 묻게 하면 드모르간 한 단계 추가 ★3.'
```

```yaml
- id: RPM-PROB-0301
  page: 50
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    독립인 두 사건에서 합사건의 확률이 5/8, 곱사건의 확률이 1/8 이고 P(A)>P(B) 일 때 P(B). 5지선다.
  category: "합·곱 → 두 확률의 합과 곱 → 이차방정식 → 대소 조건으로 선택"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 확률의 합과 곱을 근과 계수의 관계로 보고 이차방정식의 두 근 문제로 옮김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "독립사건의 합·곱에서 두 확률 구하기(근과 계수)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    덧셈정리와 독립 곱에서 두 확률의 합과 곱을 얻고, 이를 두 근으로 갖는 이차방정식으로 옮겨 근을 구한다(RT d2).
    마지막에 대소 조건으로 어느 근이 P(B) 인지 고르는 단계가 붙는다.
    시험에 꼭 나오는 문제 구역에 통찰 1 개·M_total 8 → ★3.
  tier: star_3
  mechanism_primary: "덧셈정리와 독립 곱 → 두 확률의 합과 곱 → 이차방정식의 두 근 → 대소 조건으로 선택"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0301.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '합사건·곱사건 확률을 바꿀 수 있다. 제약: 판별식이 0 이상이어야 하고 두 근이 모두 0 과 1 사이여야 한다.'
    creative: '(1) 대소 조건을 빼고 두 확률의 차를 묻기(★3) (2) 독립 대신 배반으로 바꾸면 곱이 0 이 되어 ★2 (3) 세 사건으로 늘려 대칭식을 쓰게 하면 ★4.'
```

```yaml
- id: RPM-PROB-0302
  page: 50
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    세 공연의 매진 확률이 각각 1/4, 2/3, 1/2 이고 서로 독립일 때 세 공연 중 두 공연만 매진될 확률.
  category: "정확히 두 개 → 세 가지 배반 경우 → 독립 곱의 합"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "독립사건에서 정확히 k 개가 일어날 확률"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 공연만 매진은 매진되지 않는 공연이 어느 것인지에 따라 세 경우뿐이고 각 경우가 독립 곱.
    배반 분해가 발문에 그대로 드러나 통찰로 세지 않았고, 여사건 확률을 섞어 쓰는 부분이 함정.
    M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "매진되지 않는 공연 하나를 고름 → 각 경우 독립 곱 → 세 항의 합"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{3}{8}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-prob/items/0302.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '세 확률을 바꿀 수 있다. 제약: 확률이 서로 달라야 세 항을 따로 계산하는 골조가 유지된다(모두 같으면 독립시행 공식 한 줄로 단축된다).'
    creative: '(1) 적어도 두 공연이 매진될 확률이면 항이 하나 더 붙어 ★3 (2) 세 확률을 모두 같게 하면 독립시행 공식(★2) (3) 두 공연만 매진되었을 때 특정 공연이 매진되었을 확률로 뒤집으면 ★4.'
```

```yaml
- id: RPM-PROB-0303
  page: 50
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    남 16·여 24 명 학급에서 놀이동산을 선호하는 남학생이 8 명, 여학생이 k 명일 때 선호 사건과 남학생 사건이 서로 독립이 되는 k.
  category: "독립 정의 대입 → 비율 일치 → k"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "도수표에서 두 사건이 독립이 되는 미지수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    독립 정의에 도수를 넣으면 남학생 중 선호 비율과 전체 선호 비율이 같아야 한다는 비례식이 되고 k 가 정해진다.
    0277 과 같은 골조이며 정의 대입은 표준 절차라 통찰 없음·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "도수 → 독립 정의 대입 → 선호 비율 일치 방정식 → k"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$12$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0303.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '남녀 인원과 남학생 선호 수를 바꿀 수 있다. 제약: 비례식이므로 k 가 자연수이고 여학생 수를 넘지 않아야 한다.'
    creative: '(1) 종속일 때의 조건부확률을 묻기(★2) (2) 남학생 선호 수를 미지수로 돌리기(같은 골조 ★2) (3) 선호 항목을 셋으로 늘려 모든 항목이 성별과 독립이 되게 하면 ★4.'
```

```yaml
- id: RPM-PROB-0304
  page: 50
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    한 개의 동전을 6 번 던질 때 앞면이 나오는 횟수가 뒷면이 나오는 횟수보다 클 확률. 5지선다.
  category: "횟수 부등식 → 앞면 4 회 이상 → 독립시행 세 항의 합"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "동전 독립시행에서 횟수 부등식 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    앞면이 뒷면보다 많다는 조건은 6 번 중 앞면이 4 회 이상이라는 뜻이라 세 항의 합.
    조건을 횟수 범위로 바꾸는 것은 표준 절차이고 M_total 7 → ★2.
    [분류 이슈] 앞뒤 대칭을 쓰면 같은 횟수인 경우만 빼고 반으로 나누는 한 줄 풀이가 있어 I-SC(전략 분기) ★3 후보였다. 직접 합도 세 항뿐이라 갈래 차이가 크지 않아 ★2 로 두고 기록만 한다.
  tier: star_2
  mechanism_primary: "앞면>뒷면 → 앞면 4 회 이상 → 조합 세 항의 합을 2 의 거듭제곱으로"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0304.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '던지는 횟수를 바꿀 수 있다. 제약: 홀수 번이면 같은 횟수인 경우가 없어 대칭만으로 답이 1/2 이 되므로, 세 항 합 골조를 유지하려면 짝수 번이어야 한다.'
    creative: '(1) 앞면이 뒷면보다 2 이상 많을 확률(★3) (2) 던지는 횟수를 10 번으로 키우면 직접 합이 무거워져 대칭 전략 선택이 강제됨 ★3 (3) 동전이 편향되면 대칭이 깨져 직접 합만 남아 ★3.'
```

```yaml
- id: RPM-PROB-0305
  page: 50
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    독립인 두 사건의 여사건도 독립임을 보이는 증명에서 빈칸 ㈎, ㈏, ㈐ 에 알맞은 것 고르기. 5지선다.
  category: "드모르간·덧셈정리로 증명 흐름 복원"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "여사건의 독립 증명 빈칸 채우기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 여사건의 곱사건은 합사건의 여사건이라는 드모르간에서 출발해 덧셈정리를 펼치고 독립 조건을 대입하면 인수분해된 곱 형태가 나온다.
    증명의 각 줄을 따라가면 빈칸이 정해지는 구조라 통찰로 세지 않았고, 추상 사건 표현이라 Mₐ 3 → ★2.
  tier: star_2
  mechanism_primary: "드모르간 → 합사건의 여사건 → 덧셈정리 전개 → 독립 대입 → 곱 형태"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0305.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '수치가 없는 증명형이라 변형 여지는 문장 구조뿐이다. 제약: 확률이 0 과 1 사이라는 전제를 유지한다.'
    creative: '(1) 빈칸을 늘려 증명 전체를 서술형으로 쓰게 하면 ★3 (2) 한쪽만 여사건인 경우의 독립을 증명하는 형태로 바꾸기(★2) (3) 배반 사건에 같은 흐름을 시도하게 해 왜 성립하지 않는지 설명하게 하면 ★4.'
```

```yaml
- id: RPM-PROB-0306
  page: 50
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    가위바위보에서 이기면 2 칸 올라가고 비기거나 지면 1 칸 내려갈 때, 5 번 하여 혜진이가 처음보다 4 칸 올라가 있을 확률.
  category: "비김·짐 통합 → 위치 방정식 → 독립시행"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "비긴 경우와 진 경우가 모두 1 칸 내려가므로 두 결과를 한 사건으로 통합해 2 가지 결과의 독립시행으로 만듦"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "최종 위치 조건을 이긴 횟수에 대한 일차방정식으로 옮김"
  insight_count: 2
  depth_score: 4.00
  type_id: null
  type_hint: "가위바위보 계단 이동과 독립시행"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    비겨도 져도 1 칸 내려가므로 승과 비승 두 결과로 묶는 것이 첫 통찰(CON d2)이고, 이때 승 확률은 1/3 이다.
    이긴 횟수를 미지수로 두면 최종 위치가 일차식이 되어 횟수가 하나로 정해진다(RT d2).
    통찰 2 개로 시험에 꼭 나오는 문제 구역 출발점에서 +1 하여 ★3.
  tier: star_3
  mechanism_primary: "비김·짐을 1 칸 하강으로 통합 → 위치 일차방정식으로 이긴 횟수 확정 → 독립시행 공식"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{40}{243}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0306.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '이동 칸수, 시행 횟수, 목표 칸수를 바꿀 수 있다. 제약: 위치 방정식의 해가 0 이상 시행 횟수 이하의 정수여야 하고, 비김의 이동이 짐과 달라지면 통합 골조가 깨진다.'
    creative: '(1) 비긴 경우 제자리로 바꾸면 세 결과를 따로 세어야 해 ★4 (2) 상대의 위치까지 함께 묻기(★4) (3) 4 칸 이상 올라가 있을 확률로 바꾸면 항이 늘어 ★3.'
```

### 서술형 주관식

```yaml
- id: RPM-PROB-0307
  page: 51
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "서술형 주관식"
  summary: |
    불량품 2 개를 포함한 제품 5 개에서 비복원으로 두 번 꺼낼 때, 두 번 모두 불량일 확률과 두 번째에만 불량일 확률의 합.
  category: "두 경로의 합 → 두 번째가 불량일 확률로 통합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 확률이 두 번째 추출이 불량인 모든 경로를 덮음을 알아보고 하나의 확률로 통합"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "비복원 추출에서 두 번째 추출의 확률(경로 통합)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 확률을 각각 곱셈정리로 구해 더해도 되지만, 둘을 합치면 첫 번째가 무엇이든 두 번째가 불량인 경우 전체가 되어 처음의 불량 비율과 같아진다(CON d2).
    서술형이라 두 확률을 정의대로 쓰고 통합 근거를 적는 과정까지 요구된다.
    서술형 주관식 구역 → ★3.
  tier: star_3
  mechanism_primary: "두 확률의 합 = 두 번째가 불량일 확률 → 순서 무관으로 처음의 불량 비율"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{2}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0307.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '제품 수와 불량품 수를 바꿀 수 있다. 제약: 비복원이어야 하고 불량품이 2 개 이상이어야 첫 확률이 0 이 되지 않는다.'
    creative: '(1) 두 번째가 불량일 때 첫 번째도 불량이었을 확률로 뒤집으면 베이즈 ★4 (2) 세 번 꺼내 세 번째가 불량일 확률로 확장(★3) (3) 복원으로 바꾸면 독립이 되어 ★2.'
```

```yaml
- id: RPM-PROB-0308
  page: 51
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    1 부터 8 까지의 카드에서 A, B 가 번갈아 비복원으로 뽑아 먼저 소수가 적힌 카드를 뽑는 사람이 이길 때, A 가 이길 확률.
  category: "이기는 회차별 배반 분해 → 비복원 조건부 곱의 합"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "A 가 이기는 경우를 승부가 나는 회차별로 모두 나누고 각 경로의 비복원 확률을 곱해 더함"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "번갈아 뽑기에서 먼저 성공할 확률(비복원)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    소수가 아닌 카드가 유한해 승부가 늦어도 몇 번째에는 반드시 나므로, A 가 이기는 회차를 홀수 번째로 모두 나열해야 한다(MI d2).
    각 경로는 앞선 실패들이 비복원으로 이어지는 조건부확률의 곱이라 분모가 매번 줄어드는 것이 함정.
    서술형 주관식 구역 → ★3.
  tier: star_3
  mechanism_primary: "A 가 이기는 회차별 배반 분해 → 각 경로의 비복원 조건부 곱 → 합"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{23}{35}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0308.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '카드 수와 이기는 조건(소수·짝수 등)을 바꿀 수 있다. 제약: 실패 카드 수가 유한해 최대 회차가 정해지므로 그 회차까지의 경로를 빠짐없이 세야 한다.'
    creative: '(1) B 가 이길 확률을 여사건으로 묻기(★3) (2) 복원으로 바꾸면 무한등비급수가 되어 ★4 (3) 세 사람이 번갈아 뽑게 하면 경로가 늘어 ★4.'
```

```yaml
- id: RPM-PROB-0309
  page: 51
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    A 약을 100 명(완치율 3 %), B 약을 200 명(완치율 x %)에게 투여했을 때, 완치된 한 명이 A 약 투여자일 확률이 3/13 이면 x.
  category: "베이즈 식 → 미지수 방정식"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "완치라는 결과에서 원인을 되짚는 베이즈 식을 세우고 거기에 미지수를 넣어 역산"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "베이즈 정리에서 미지수 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 집단의 완치자 수를 각각 쓰면 구하는 조건부확률이 A 쪽 완치자 수를 전체 완치자 수로 나눈 비가 되고, 이것이 주어진 값과 같다는 방정식에서 x 가 나온다(BW d2).
    확률로 두든 인원으로 두든 같은 식이 되는 것을 아는지가 서술의 핵심.
    서술형 주관식 구역 → ★3.
  tier: star_3
  mechanism_primary: "약별 완치자 수 → 베이즈 비 식 → 미지수 방정식 → x"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0309.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 집단의 인원과 완치율, 조건부확률 값을 바꿀 수 있다. 제약: 완치자 수가 자연수여야 하고 x 가 0 과 100 사이 백분율이어야 한다.'
    creative: '(1) 완치된 환자가 B 약 투여자일 확률로 바꾸면 여사건(★3) (2) 약을 셋으로 늘리면 분모가 세 항이 되어 ★4 (3) 완치율을 모두 주고 조건부확률을 묻는 정방향으로 되돌리면 ★2.'
```

```yaml
- id: RPM-PROB-0310
  page: 51
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    독립일 때 A 는 합격하고 B 는 합격하지 못할 확률이 3/5, A 또는 B 가 합격할 확률이 4/5 이면 A 가 합격할 확률.
  category: "합사건을 배반 분해 → P(B) 먼저 → 독립 곱 역산"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "합사건을 A 만 합격하는 경우와 B 가 합격하는 경우의 배반 합으로 바꾸면 연립 없이 P(B) 가 바로 나옴"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "독립사건의 합·차 조건에서 확률 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 조건을 그대로 연립하면 곱항이 남아 번거롭지만, 합사건을 A 만 합격과 B 합격의 배반 합으로 보면 두 값의 차가 곧 P(B) 다(EQV d2).
    이어 A 만 합격할 확률 식에 독립을 써서 P(A) 를 얻는다.
    서술형 주관식 구역 → ★3.
  tier: star_3
  mechanism_primary: "합사건 = (A 만 합격) + (B 합격) → P(B) → 독립 곱 식에서 P(A)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{3}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0310.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '주어진 두 확률을 바꿀 수 있다. 제약: 두 값의 차가 P(B) 이므로 0 과 1 사이여야 하고, 나눗셈 결과인 P(A) 도 1 이하가 되어야 한다.'
    creative: '(1) B 가 합격할 확률을 묻기(한 단계 짧음 · ★2) (2) 독립 조건을 빼고 곱사건 확률을 주면 정의식 문제로 ★2 (3) 두 사람 중 정확히 한 명만 합격할 확률을 주면 대칭식이 되어 ★4.'
```

### 실력 Up

```yaml
- id: RPM-PROB-0311
  page: 51
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    1~5 가 적힌 흰 공 5 개와 4~7 이 적힌 검은 공 4 개에서 4 개를 동시에 꺼낼 때, 적힌 숫자가 같은 것이 있다는 조건에서 흰 공이 2 개일 확률.
  category: "조건 사건을 여사건으로 카운트 → 교집합 카운트 → 조건부확률"
  M: {s: 3, k: 3, a: 1, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "같은 숫자가 있다는 조건을 흰·검에 겹쳐 있는 두 숫자의 쌍을 포함한다는 조건으로 바꿈"
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "분모와 분자를 셀 때 두 쌍 중 어느 것을 포함하는지로 나누고 중복을 포함배제로 걷어냄"
  insight_count: 2
  depth_score: 4.00
  type_id: null
  type_hint: "조건부확률과 조합 카운트(겹치는 숫자 포함 조건)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    겹치는 숫자가 둘뿐이므로 같은 숫자가 있다는 조건은 그 두 쌍 중 하나를 통째로 뽑는다는 조건으로 바뀐다(EQV d2).
    분모는 전체 조합에서 쌍이 하나도 없는 경우를 뺀 여사건으로 세고, 분자는 흰 공 2 개이면서 쌍을 포함하는 경우를 중복 없이 센다(MI d2).
    실력 Up 구역·통찰 2 개·M_total 9 → ★4.
  tier: star_4
  mechanism_primary: "같은 숫자 조건 → 겹치는 두 쌍 포함 → 분모는 여사건 카운트 → 분자는 흰 2 개 + 쌍 포함 카운트 → 비"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$\dfrac{23}{41}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0311.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '흰·검 공의 숫자 구성(겹치는 숫자의 개수)과 꺼내는 개수를 바꿀 수 있다. 제약: 겹치는 숫자가 늘면 포함배제 항이 급격히 늘어나므로 두 개 정도로 유지해야 같은 골조가 된다.'
    creative: '(1) 흰 공이 3 개일 확률로 바꾸면 같은 골조(★4) (2) 같은 숫자가 없다는 조건으로 뒤집으면 분모가 여사건 자체가 되어 ★3 (3) 한 개씩 비복원으로 뽑아 순서를 붙이면 카운트만 무거워지고 통찰은 그대로라 ★4 유지.'
```

```yaml
- id: RPM-PROB-0312
  page: 51
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: ["수능 기출"]
  category_type: "실력 Up"
  summary: |
    3 이 적힌 공 2 개와 4 가 적힌 공 3 개에서 한 개를 꺼내 그 수만큼 주사위를 던져 눈의 합을 점수로 할 때, 점수가 10 점일 확률을 기약분수로 나타낸 분모와 분자의 합.
  category: "공 분기 → 분기별 눈의 합 경우의 수 → 전확률 → 기약분수"
  M: {s: 3, k: 3, a: 1, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "꺼낸 공에 따라 주사위 횟수가 다른 두 시나리오를 모두 계산해 합침"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "눈의 합이 10 이 되는 경우의 수를 각 눈이 1 이상 6 이하인 정수해의 개수 문제로 옮겨 셈"
  insight_count: 2
  depth_score: 4.00
  type_id: null
  type_hint: "시행 횟수가 달라지는 분기와 주사위 눈의 합 경우의 수"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    공에 적힌 수가 주사위 횟수를 정하므로 3 번 던지는 경우와 4 번 던지는 경우를 각각 계산해 공의 확률을 곱한 뒤 더한다(MI d2).
    각 분기의 분자는 눈의 합이 10 인 경우의 수라 1 이상 6 이하 제한이 붙은 정수해 카운트가 필요하다(RT d2).
    마지막에 기약분수로 정리해 분모·분자의 합을 답하는 단계까지 있어 실력 Up·수능 기출 → ★4.
  tier: star_4
  mechanism_primary: "공 분기 확률 → 분기별 합 10 의 경우의 수 카운트 → 전확률 합 → 기약분수로 정리"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$587$'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0312.png"
  latex: latex-bank/rpm-prob/items/0312.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '공에 적힌 수와 개수, 목표 점수를 바꿀 수 있다. 제약: 목표 점수가 각 분기의 최소·최대 합 사이에 있어야 하고, 눈이 6 이하라는 제한 때문에 단순 조합 공식이 아니라 제한 있는 정수해 카운트를 써야 한다.'
    creative: '(1) 점수가 10 점 이상일 확률로 바꾸면 카운트가 급증해 여사건 전략 선택이 강제됨(★5 후보) (2) 점수가 10 점일 때 꺼낸 공이 3 이었을 확률로 뒤집으면 베이즈 ★4 (3) 주사위를 동전으로 바꾸면 카운트가 이항계수로 단순해져 ★3.'
```

```yaml
- id: RPM-PROB-0313
  page: 51
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    원점의 점 P 를 주사위 눈이 3 이하면 x 축 방향으로 1, 4 이상이면 y 축 방향으로 1 움직일 때, 주사위를 계속 던져 점 P 가 색칠한 부분(그림)을 지날 확률.
  category: "색칠 영역 → 지나야 할 격자점 → 겹치지 않게 배반 분해한 경로 확률"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "색칠한 영역을 지난다는 기하 조건을 반드시 지나야 하는 격자점 조건으로 옮김"
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 격자점을 지나는 사건이 겹치므로 앞의 점을 지나는 경우와 앞의 점을 지나지 않고 뒤의 점을 지나는 경우로 배반 분해"
  insight_count: 2
  depth_score: 4.00
  type_id: null
  type_hint: "격자 경로의 통과 조건과 독립시행(최단경로 확률)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    점 P 는 격자를 따라서만 움직이므로 색칠한 부분을 지난다는 조건은 그 안의 격자점을 지난다는 조건으로 바뀐다(RT d2).
    해당 격자점이 둘이고 두 사건이 겹칠 수 있어, 앞의 점을 지나는 경우와 앞의 점을 피해 뒤의 점에 닿는 경우로 나눠야 중복이 없다(MI d2).
    각 항은 최단경로 수와 1/2 의 거듭제곱. 실력 Up 구역·통찰 2 개·M_total 9 → ★4.
  tier: star_4
  mechanism_primary: "색칠 영역 → 지나야 할 격자점 → 겹치지 않게 배반 분해 → 각 경로의 이항 확률 합"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$\dfrac{1}{2}$'
  answer_source: "답지"
  figure: "crop:fig-0313.png"
  latex: latex-bank/rpm-prob/items/0313.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '주사위 분기 기준(이동 확률)과 색칠 영역의 위치·크기를 바꿀 수 있다. 제약: 이동 확률이 1/2 이 아니면 항마다 가중치가 달라지고, 그림의 좌표 눈금과 색칠 위치는 발문·답과 반드시 일치해야 한다.'
    creative: '(1) 색칠 영역이 격자점 하나만 덮게 하면 항이 하나로 줄어 ★3 (2) 이동 확률을 1/3, 2/3 으로 바꾸면 계산이 비대칭이 되어 ★4 (3) 색칠 영역을 피해서 지날 확률(여사건)로 뒤집으면 ★4.'
```

## 표본 판정 요약 (41문)

- ★ 분포: ★1 2 · ★2 22 · ★3 14 · ★4 3 · ★5 0
- 통찰형 21 · 절차형 20 · premium 0 (★5 조건인 통찰 3 개 이상 + SC/VF/SYM/XU 동반은 이 범위에 없음)
- 구역별 ★ 중앙값: 유형 08 ★2 · 유형 09 ★2 · 유형 UP 10 ★3 · 유형 11 ★2~3 · 시험에 꼭 나오는 문제 ★2 · 서술형 주관식 ★3 · 실력 Up ★4
- 통찰 유형 분포: I-EQV 7 · I-RT 6 · I-MI 5 · I-BW 2 · I-CON 2 · I-SYM 1 (I-XU · I-PD · I-SC · I-VF 0)
- type_hint 상위 5: 「독립사건의 곱셈정리로 확률 구하기」 7 · 「독립시행의 확률(횟수 조건)」 6 · 「독립·배반 성질의 참거짓 판정」 4 · 「조건부확률 정의·표본공간 축소」 4 · 「적어도 한 번(여사건)」 3
- 그림: 7문(`crop:fig-0277.png` 본문 내장 표 · `crop:fig-0278.png` · `crop:fig-0279.png` · `crop:fig-0292.png` · `crop:fig-0299.png` · `crop:fig-0312.png` · `crop:fig-0313.png`)
- 기출 태그: 평가원 기출 1(0299) · 수능 기출 2(0300 · 0312) · 중요 3(0297 · 0304 · 0307) · 서술형 2(0279 · 0291)

## 분류 이슈 목록

판정이 애매하거나 벤더 신호와 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-PROB-0288 | 구역은 유형 UP(★3 신호)인데 level 은 「중」(★2 신호)으로 1 단 어긋남. 구역 신호를 따랐다 | ★2 / ★3 |
| RPM-PROB-0290 | 좌표를 이동 횟수로 옮기는 RT d2 통찰이 있어 ★3 후보였으나 각 단계가 짧아 유형 대표문제 출발점 ★2 유지 | ★2 / ★3 |
| RPM-PROB-0292 | 통찰 2 개(+1 후보 = ★4)이나 마지막이 공식 한 줄이라 상중 출발점 ★3 유지 | ★3 / ★4 |
| RPM-PROB-0297 | 순서 무관 대칭성을 통찰(SYM d2)로 인정할지 경계. 답지 표준 풀이는 배반 분해라 통찰 없이 ★2 로도 볼 수 있음 | ★2 / ★3 |
| RPM-PROB-0304 | 앞뒤 대칭 풀이와 직접 합이 갈리지만 직접 합도 세 항뿐이라 I-SC 로 인정하지 않고 ★2 유지 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고).

- **통합해도 될 유형**: 0273 · 0280 · 0282 는 「적어도 한 번 = 여사건」 한 골조로 완전히 같다(독립 두 사건 / 독립시행 두 형태만 다름). 0277 과 0303 은 「도수표에서 독립이 되는 미지수」로 동일. 0293 · 0294 · 0300 · 0301 은 「주어진 확률 관계식에서 미지 확률 구하기」 한 유형 아래 난이도 층으로 묶을 수 있다.
- **따로 세워야 할 유형**: (1) 「조건을 횟수로 옮기는 독립시행」(0285 · 0290 · 0291 · 0292 · 0306) — 좌표·점수·계단·둘레로 껍데기만 다르고 골조가 같아 변형 원본으로 가치가 크다. (2) 「베이즈 역추정」(0299 · 0309 · 0312 의 분기 구조) — 조건부확률 단원의 ★3~4 변별 슬롯. (3) 「독립·배반 성질의 참거짓」(0287~0289 · 0305) — 수치가 없는 명제형이라 변형 방식이 다른 유형과 완전히 다르다. (4) 「비복원 순서 무관·경로 합」(0297 · 0307 · 0308) — 대칭성/경로 통합이 학습 포인트.
- **이 범위에 없어서 카탈로그에 비어 있을 칸**: I-XU(단원 경계 결합) · I-PD(패턴 발견) · I-VF(사후 검증 강제) 통찰을 요구하는 슬롯이 하나도 없다. ★5 슬롯을 만들려면 0311 · 0312 계열에 사후 기각 조건을 붙이는 창의 변형이 출발점이 된다.
