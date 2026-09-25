---
name: mechanism-데이터-GN-M31-05-p2
description: 개념원리 중학 3-1 05 제곱근의 덧셈과 뺄셈(2/2 · 54~59쪽 · 32문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · base_star null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 중학 3-1 (중3-1 · 학생용) · 전사본 latex-bank/gn-m31
  section: 05 제곱근의 덧셈과 뺄셈
  unit_code: GN-M31-05
  part: "2/2"
  extract_range: "54~59쪽 · 54-01~59-u6"
  total_problems: 32
  unit_total: 65
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-m31/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-m31/items/<id>.tex
  image_source: latex-bank/gn-m31/figures/ (이 범위 그림 4문 · crop)
---

# 개념원리 중학 3-1 · 05 제곱근의 덧셈과 뺄셈 (2/2) 정독 데이터 (v1.0)

이 파일은 「05 제곱근의 덧셈과 뺄셈」의 뒷부분, 즉 단원 전체를 마무리하는 54~59쪽 32문항 전수를 다룬다. 구역은 「중단원 마무리하기 STEP 1 기본 문제」 12문(54~55쪽) · 「STEP 2 발전 문제」 9문(56~57쪽) · 「STEP 3 실력 UP」 3문(57쪽) · 「서술형 대비 문제」 8문(58~59쪽 · 예제 `쪽-eN` 과 유제 `쪽-uN`)이다. 앞부분(1/2)의 개념원리 확인하기·핵심문제 익히기와 달리 여기는 **한 단원의 도구를 섞어 쓰는 복합 문항**이 기본값이다.

개념원리 중학은 문항별 난이도 등급(`level`)이 없어 **구역이 유일한 벤더 난이도 신호**다. STEP 1 ★2 · STEP 2 ★3 · STEP 3 ★4 · 서술형 ★3 을 출발점으로 삼고 M_total·통찰로 ±1 조정했다. 태그는 「꼭나와」(빈출 표시 · ★ 가산 없음) 7문뿐이다.

이 범위에서 쓰이는 도구는 다섯 가지다 — ⑴ 근호의 곱셈·나눗셈과 분모의 유리화, ⑵ $\sqrt{a^2b}=a\sqrt b$ 안팎 이동, ⑶ 분배법칙 뒤 동류항 정리와 $a+b\sqrt c$ 꼴 계수 대응, ⑷ 무리수의 대소 비교·정수 부분과 소수 부분, ⑸ 도형(넓이·둘레·수직선) 활용. 난이도는 도구가 늘어서가 아니라 **한 문항에 얹히는 도구 수와 부호·범위 함정 수**로 올라간다. STEP 2 이후는 여기에 「결과가 유리수가 될 조건」·「곱의 연쇄 약분」·「망원합」 같은 한 번의 착안이 추가된다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다. 그림 문항은 4문(`fig-55-11` · `fig-57-20` · `fig-57-24` · `fig-59-u4`)이며, 그중 `fig-57-20` 만 도형의 배치가 답의 골조를 결정해 크롭을 확인했다.

## 문항 데이터

### 중단원 마무리하기 STEP 1 기본 문제

```yaml
- id: GN-M31-54-01
  page: 54
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원마무리 STEP1"
  summary: |
    다섯 개의 근호 곱셈·나눗셈 식 중 계산 결과가 나머지 넷과 다른 하나 고르기. 5지선다.
  category: "근호의 곱셈·나눗셈 → 선택지마다 간단히 → 결과 비교"
  M: {s: 3, k: 2, a: 1, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "근호를 포함한 식의 곱셈·나눗셈 결과 비교"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    도구는 √a·√b=√(ab) 와 나눗셈의 역수 곱 둘뿐이고 분기가 없다. 다만 선택지 다섯 개를 전부 끝까지 정리해야 해 단계 수가 많다(Mₛ 3).
    분수 나눗셈 두 개(④⑤)에서 유리화까지 한 번 더 들어간다. 기본 문제 구역 ★2 출발 · 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "각 선택지를 √(ab) 꼴로 통일 → 계수 정리 → 다른 값 하나 식별"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/54-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공통값(6√6)과 다섯 선택지의 계수·근호 안 수를 함께 교체. 제약: 넷이 정확히 같은 값이어야 하므로 공통값을 먼저 정하고 곱·나눗셈·분수·이중 나눗셈 네 가지 표현으로 역설계할 것. 근호 안은 제곱인수가 남지 않게."
    creative: "(1) 다른 하나 대신 「가장 큰 것」 묻기(★2 유지) (2) 한 선택지에 미지수를 넣어 같은 값이 되게 하는 수를 되묻기(I-BW d1 · ★3) (3) 선택지를 곱셈·나눗셈 혼합 3연산으로 늘리면 Mₛ 만 오르고 질은 떨어짐(계산 마찰 경고)."
```

```yaml
- id: GN-M31-54-02
  page: 54
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "중단원마무리 STEP1"
  summary: |
    √54=□√6, −√80=−4√□ 처럼 근호 안팎을 옮긴 다섯 등식에서 □ 에 알맞은 수가 가장 큰 것 고르기.
  category: "√(a²b)=a√b 안팎 이동 → 빈칸 값 결정 → 대소 비교"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "근호 안의 수를 밖으로·밖의 수를 안으로 옮기기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    같은 변형을 다섯 번 반복하되 빈칸 위치가 근호 밖(①)·근호 안(②③⑤)·분모 안(④)으로 흩어져 있어 어느 쪽을 제곱해야 하는지 매번 판단해야 한다(T-표기).
    분기·착안은 없다. 기본 문제 ★2 출발 · 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "각 등식의 빈칸 위치 확인 → 제곱인수를 안팎으로 이동 → 다섯 값 중 최대 선택"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/54-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안의 수(54·80·98·0.24)를 제곱인수를 가진 다른 수로 교체 가능. 제약: 빈칸 값이 서로 달라 최댓값이 하나여야 하고, 소수 표현(0.24)은 분수로 고쳐야 유리화가 되는 값으로 고를 것."
    creative: "(1) 가장 작은 것 묻기(★2 유지) (2) 빈칸 값들의 합·곱을 묻기(Mₖ 만 상승) (3) 빈칸을 문자 a 로 두고 등식이 성립할 조건을 묻기(Mₐ 상승 ★3)."
```

```yaml
- id: GN-M31-54-03
  page: 54
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원마무리 STEP1"
  summary: |
    2/√5, √2/√5, √2/5, 2/5 를 큰 것부터 나열할 때 세 번째에 오는 수 구하기.
  category: "분모의 유리화 → 같은 꼴로 통일 → 네 수의 대소 비교"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "분모의 유리화를 이용한 무리수의 대소 비교"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    네 수는 분자·분모에 2 와 √2, 5 와 √5 가 섞여 있어 유리화로 분모를 5 로 맞추면 분자만 비교하면 된다.
    함정은 「세 번째」라는 순서 요구(T-경계)뿐이고 착안은 없다. 기본 문제 ★2 출발 · 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "네 수를 분모 5 로 유리화 → 분자(2√5, √10, √2, 2) 비교 → 큰 쪽에서 세 번째"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{2}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/54-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 재료 수(2, 5)를 (3, 7) 같은 다른 쌍으로 바꿔 네 조합(유리/유리, 무리/유리, 유리/무리, 무리/무리)을 그대로 유지. 제약: 네 값이 모두 달라야 하고 유리화 뒤 분자 비교만으로 순서가 정해져야 한다."
    creative: "(1) 두 번째·네 번째로 순서를 바꾸기(★2 유지) (2) 네 수 중 유리수인 것만 고르기(★1) (3) 수직선 위 위치 표시와 결합하면 I-RT d1 이 붙어 ★3."
```

```yaml
- id: GN-M31-54-04
  page: 54
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원마무리 STEP1"
  summary: |
    √2=1.414 임을 이용해 값을 구할 수 없는 것 두 개 고르기(√0.02, √12, √20, √32, √20000).
  category: "√(a²b)=a√b 변형 → 근호 안이 2 의 꼴인지 판별 → 불가능한 것 선택"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「√2 로 값을 구할 수 있다」를 「근호 안이 (유리수)²×2 꼴이다」로 바꿔 읽음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "제곱근의 근삿값을 이용해 값을 구할 수 있는 수 판별"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    계산량은 거의 없고 판별이 전부다. 12=4·3, 20=4·5 는 √3, √5 가 남아 불가능하고 0.02=2/100, 32=16·2, 20000=10000·2 는 √2 의 유리수배로 떨어진다.
    조건을 「근호 안 제곱인수를 뺀 나머지가 2 인가」로 옮기는 동치 변환 1개(EQV d1). 기본 문제 ★2 출발 · 통찰 1 → ★2 유지.
  insight_type: 절차형
  tier: star_2
  mechanism_primary: "각 수를 a√2 꼴로 시도 → 제곱인수를 뺀 나머지가 2 가 아니면 불가 → 두 개 선택"
  target_cohort: 중하위권
  answer: "②, ③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/54-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준 무리수를 √3=1.732 로 바꾸고 선택지를 3 의 배수(0.03, 27, 48, 1200)와 방해 수(√8, √50)로 재구성. 제약: 불가능한 선택지가 정확히 두 개여야 하고, 소수·큰 수 쪽은 100의 거듭제곱으로 자리만 옮기는 형태를 하나씩 남길 것."
    creative: "(1) √2 와 √3 두 근삿값을 함께 주고 구할 수 없는 것 하나 고르기(I-MI d1 · ★3) (2) 값을 구할 수 있는 것의 실제 근삿값까지 계산시키기(Mₖ 상승 ★2) (3) √0.02 처럼 소수만 모아 자리 이동 규칙을 묻기(★2)."
```

```yaml
- id: GN-M31-54-05
  page: 54
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "중단원마무리 STEP1"
  summary: |
    분모를 유리화한 다섯 등식 중 옳지 않은 것 고르기.
  category: "분모의 유리화 → 각 등식 검증 → 틀린 하나 선택"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "분모의 유리화 결과 판별"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    다섯 번의 같은 절차 반복이며, 분모에 계수가 붙은 경우(②④)에 계수까지 함께 곱해 버리는 표기 함정(T-표기)이 핵심이다.
    ④는 분모의 4 를 그대로 두어야 하는데 없앤 형태. 통찰 0 · M_total 6 → 기본 문제 ★2 유지.
  tier: star_2
  mechanism_primary: "각 분수의 분모 무리수만 골라 분자·분모에 곱함 → 약분 → 주어진 우변과 대조"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/54-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자·분모의 계수와 근호 안 수를 교체하되 ⑴ 단순형 ⑵ 근호 안 제곱인수형 ⑶ 분자에도 근호 ⑷ 분모에 정수 계수 ⑸ 근호 두 개 곱 의 다섯 유형 배치는 유지. 제약: 틀린 것이 정확히 하나이고, 오답은 「계수까지 유리화」 같은 전형적 실수 형태여야 한다."
    creative: "(1) 옳은 것의 개수 묻기(★2) (2) 틀린 것을 바르게 고치게 하는 서술형(★3 · 서술형 대비와 동일 골조) (3) 분모가 √a+√b 꼴이면 켤레 유리화가 필요해 중3 범위를 벗어남(출제 불가)."
```

```yaml
- id: GN-M31-54-06
  page: 54
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원마무리 STEP1"
  summary: |
    (15/√10)×(−2√5)÷√(3/2)=a√3 을 만족시키는 유리수 a 구하기.
  category: "곱셈·나눗셈 혼합 계산 → a√3 꼴로 정리 → 계수 대응"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "근호를 포함한 곱셈·나눗셈 혼합 계산에서 계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    나눗셈을 역수 곱으로 바꾼 뒤 근호 안을 한 덩어리로 묶으면 √3 만 남고 계수가 답이 된다. 음수 계수가 끝까지 따라붙는 부호 함정(T-부호)이 유일한 걸림돌이다.
    미지수 a 는 계수 자리에만 있어 추상도는 낮다(Mₐ 2). 통찰 0 · M_total 7 → 기본 문제 ★2 유지.
  tier: star_2
  mechanism_primary: "÷√(3/2) → ×√(2/3) 로 전환 → 근호 안 통합·약분 → k√3 꼴 → 계수 비교로 a"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-10$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/54-06.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 인수의 계수(15, −2, 1)와 근호 안 수(10, 5, 3/2)를 교체. 제약: 근호 안을 모두 곱했을 때 제곱인수를 뺀 나머지가 우변의 √3 과 같아야 하고, a 가 유리수로 떨어지도록 남는 제곱인수를 설계할 것."
    creative: "(1) a 대신 근호 안의 수를 미지수로 두기(I-BW d1 · ★3) (2) 우변을 a√3+b 꼴로 만들어 두 계수를 묻기(★3) (3) 세 인수를 네 개로 늘리면 Mₛ 만 오름(질 저하)."
```

```yaml
- id: GN-M31-55-07
  page: 55
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "중단원마무리 STEP1"
  summary: |
    제곱근의 덧셈·뺄셈 보기 ㄱ~ㄹ 중 옳은 것을 모두 고르기. 5지선다.
  category: "동류항 정리·유리화·분배법칙 → 보기별 참거짓 → 조합 선택"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "제곱근의 덧셈과 뺄셈 보기 참·거짓"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    보기 넷이 각각 다른 도구를 요구한다 — ㄱ 동류항 합, ㄴ 근호 안 정리 후 차, ㄷ 유리화까지 섞인 세 항 정리, ㄹ 분배법칙.
    도구는 모두 이 단원 표준이고 분기는 없다. 단계 수만 많다(Mₛ 3). 기본 문제 ★2 출발 · 통찰 0 → ★2 유지.
  tier: star_2
  mechanism_primary: "보기마다 √ 안을 최소 꼴로 정리(필요하면 유리화) → 동류항끼리 계수 합 → 우변과 대조"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/55-07.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 보기의 계수와 근호 안 수를 교체하되 ㄱ(동류항) · ㄴ(안 정리) · ㄷ(유리화 포함) · ㄹ(분배법칙) 네 도구 배치는 유지. 제약: 참인 보기가 두 개가 되도록 선택지 조합표와 함께 설계한다."
    creative: "(1) 옳은 것의 개수만 묻기(★2) (2) 틀린 보기의 우변을 바르게 고치기(서술형 ★3) (3) 보기에 문자 a 를 넣어 항등식이 되는 a 를 묻는 형태로 바꾸면 I-EQV d2 가 붙어 ★3."
```

```yaml
- id: GN-M31-55-08
  page: 55
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원마무리 STEP1"
  summary: |
    x=2√3+√5, y=3√5−5√3 일 때 √5x+√3y 의 값. 5지선다.
  category: "대입 → 분배법칙 전개 → 동류항(√15·유리수) 정리"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "근호를 포함한 식에 무리수 대입해 분배법칙으로 정리"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    대입 후 두 번의 분배법칙으로 √15 항과 유리수 항이 각각 모인다. √5·√3=√15 와 (√5)²=5 를 구분해 쓰는 것이 전부다.
    분기·착안 없음. M_total 5 이지만 전개 항이 네 개라 기본 문제 ★2 출발을 유지(하한 ★1 로 내리지 않음).
  tier: star_2
  mechanism_primary: "√5x, √3y 각각 전개 → √15 항과 정수 항 분리 → 동류항 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/55-08.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x, y 의 계수 네 개(2, 1, 3, −5)를 교체. 제약: 두 근호(√3, √5)는 곱해서 √15 가 남도록 고정하고, 선택지가 p√15+q 꼴로 정리되게 계수를 잡을 것."
    creative: "(1) √5x−√3y 로 부호만 바꾸기(★2 유지) (2) xy 를 묻는 형태로 바꾸면 곱셈 공식이 들어가 ★3 (3) √5x+√3y 의 값을 주고 x 의 계수를 되묻기(I-BW d1 · ★3)."
```

```yaml
- id: GN-M31-55-09
  page: 55
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원마무리 STEP1"
  summary: |
    (15−√50)/√20 의 분모를 유리화하면 a√5+b√10 이 될 때, 유리수 a, b 에 대하여 a−b 구하기.
  category: "분모 유리화 → 근호 안 정리 → 계수 대응으로 a, b"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "분모를 유리화한 식에서 유리수 계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    √20=2√5 로 먼저 줄이고 유리화하면 √5 항과 √10 항이 갈린다. 서로 다른 무리수이므로 계수를 그대로 읽으면 되고, 분수 계수가 나온다는 점이 실수 지점이다(T-표기).
    착안 없음 · M_total 7 → 기본 문제 ★2 유지.
  tier: star_2
  mechanism_primary: "√20=2√5 정리 → 분자·분모에 √5 곱해 유리화 → √5 항과 √10 항 분리 → 계수 대응"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/55-09.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자의 정수 15 와 근호 안 50, 분모의 20 을 교체. 제약: 분모는 제곱인수를 가진 수여야 하고, 유리화 뒤 두 무리수가 서로 다른 꼴(√5 와 √10)로 갈려야 계수 대응이 성립한다."
    creative: "(1) a+b 나 ab 를 묻기(★2 유지) (2) a, b 가 정수가 되도록 분자의 정수를 되묻기(I-BW d1 · ★3) (3) 결과가 유리수가 되게 하는 조건으로 바꾸면 57-19 골조(I-EQV d2 · ★3)."
```

```yaml
- id: GN-M31-55-10
  page: 55
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원마무리 STEP1"
  summary: |
    √96−2√2(√27−√18)−12/√24 = a+b√6 을 만족시키는 유리수 a, b 에 대하여 a+b 구하기.
  category: "분배법칙·유리화 → a+b√6 꼴 정리 → 계수 대응"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "혼합 계산 결과를 a+b√6 꼴로 정리해 계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    세 덩어리(근호 정리 · 분배법칙 · 유리화)를 모두 거쳐야 √6 항과 정수 항이 모인다. 단계 수는 이 구역에서 가장 많지만 도구는 전부 표준이고 분기가 없다.
    괄호 앞 −2√2 의 부호 분배가 유일한 함정(T-부호). 통찰 0 · M_total 8 → 기본 문제 ★2 유지(계산 마찰형이라 ★ 를 올리지 않음).
  tier: star_2
  mechanism_primary: "각 항을 √6·√2·√3 기준으로 정리 → 분배법칙 전개 → 유리화 항 합류 → 정수 항과 √6 항 계수 대응"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$9$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/55-10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 항의 근호 안 수(96, 27·18, 24)와 계수(2, 12)를 교체. 제약: 전개 결과가 정확히 정수 항과 √6 항 두 종류로만 갈려야 하므로 근호 안 수는 2·3 의 조합으로 제한된다."
    creative: "(1) a−b 또는 ab 로 묻기(★2 유지) (2) 괄호를 하나 더 얹으면 Mₛ 만 상승(질 저하) (3) 결과가 유리수가 되도록 한 항의 계수를 미지수로 두기(I-EQV d2 · ★3)."
```

```yaml
- id: GN-M31-55-11
  page: 55
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원마무리 STEP1"
  summary: |
    가로의 길이가 10√6 cm 인 직사각형 그림의 넓이가 360 cm² 일 때 둘레의 길이. 5지선다.
  category: "넓이÷가로 → 세로 구하기(유리화) → 둘레 2(가로+세로)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직사각형의 넓이·둘레에 근호를 포함한 식 활용"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    세로 = 360÷10√6 = 36/√6 을 유리화해 6√6 을 얻은 뒤 둘레 공식에 넣으면 끝난다. 그림은 가로에 길이가 적힌 직사각형뿐이라 골조에 기여하지 않는다.
    단위(cm, cm²) 혼동만 함정(T-단위). 통찰 0 · M_total 6 → 기본 문제 ★2 유지.
  tier: star_2
  mechanism_primary: "세로=넓이÷가로 → 분모 유리화로 6√6 → 둘레=2(10√6+6√6)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: crop:fig-55-11.png
  latex: latex-bank/gn-m31/items/55-11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "가로(10√6)와 넓이(360)를 함께 교체. 제약: 넓이÷가로가 유리화 뒤 같은 √6 계열로 떨어져야 둘레가 k√6 꼴이 된다. 그림 라벨(가로 한 변)은 고정."
    creative: "(1) 둘레를 주고 세로를 되묻기(I-BW d1 · ★3) (2) 직사각형을 정사각형 넓이 조건으로 바꾸면 57-24 골조 (3) 가로:세로 비를 주고 넓이를 묻기(★3)."
```

```yaml
- id: GN-M31-55-12
  page: 55
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "중단원마무리 STEP1"
  summary: |
    두 실수의 대소 관계를 나타낸 다섯 부등식 중 옳지 않은 것 고르기.
  category: "양변의 차의 부호 판정 → 근삿값·제곱 비교 → 틀린 부등식 선택"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 실수의 대소 관계 판별"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    다섯 번 모두 「차를 구해 부호를 본다」 또는 「같은 항을 지우고 남은 무리수끼리 비교한다」는 한 가지 방법으로 처리된다. ⑤처럼 양변에 √3 이 공통으로 있으면 소거가 빠르다.
    부등호 방향 실수(T-부호)가 유일한 함정. 통찰 0 · M_total 7 → 기본 문제 ★2 유지.
  tier: star_2
  mechanism_primary: "양변에서 공통항 소거 또는 차를 계산 → 남은 무리수의 근삿값·제곱으로 부호 판정 → 틀린 것 선택"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/55-12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 선택지의 정수 항과 근호 안 수를 교체하되 ⑴ 정수−무리수 대 무리수 ⑵ 정수 대 무리수 ⑶ 두 무리수 합 대 무리수 ⑷ 같은 정수 항 소거형 ⑸ 양변 공통 무리수형 의 배치는 유지. 제약: 두 값의 차가 작아 근삿값만으로는 애매한 쌍은 피한다."
    creative: "(1) 가장 큰 수 고르기로 바꾸기(59-u6 골조 ★3) (2) 부등식에 문자를 넣어 성립 조건을 묻기(I-EQV d2 · ★3) (3) 수직선 위 배치와 결합(I-RT d1 · ★3)."
```

### 중단원 마무리하기 STEP 2 발전 문제

```yaml
- id: GN-M31-56-13
  page: 56
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원마무리 STEP2"
  summary: |
    10×√(1/2)×√(2/3)×√(3/4)×…×√(9/10) 을 계산하기. 5지선다.
  category: "근호를 하나로 합치기 → 분자·분모 연쇄 약분 → 계수와 결합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-PD
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "아홉 개의 근호를 하나로 묶으면 분자·분모가 연쇄적으로 약분되어 1/10 만 남는 규칙을 스스로 발견"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "연속하는 제곱근의 곱(연쇄 약분)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    아홉 개를 차례로 곱하면 시간이 무너진다. √a×√b=√(ab) 로 한 근호에 몰아넣고 이웃 분수의 분자·분모가 지워지는 구조를 보는 것이 전부이며, 이 착안이 없으면 사실상 풀리지 않는다(PD d2).
    남는 것은 √(1/10) 이고 앞의 10 과 결합할 때 유리화가 한 번 더 들어간다. 발전 문제 ★3 출발 · 통찰 1 → ★3 유지.
  tier: star_3
  mechanism_primary: "모든 근호를 √(1/2·2/3·…·9/10) 으로 통합 → 연쇄 약분해 √(1/10) → 10×√(1/10)=√10"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/56-13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "항의 개수(1/2 … 9/10)와 앞의 계수 10 을 함께 교체. 제약: 마지막 분모가 계수와 맞물려 유리수 또는 √k 꼴로 떨어져야 한다(계수 = 마지막 분모일 때 가장 깔끔)."
    creative: "(1) 항의 개수를 n 으로 일반화해 값을 문자로 나타내기(Mₐ 3 · ★4) (2) 곱이 아니라 √(1/2)×√(2/3) 의 합으로 바꾸면 약분 구조가 깨져 단순 계산이 됨(★2) (3) 값이 √10 이 되도록 앞의 계수를 되묻기(I-BW d1 · ★3)."
```

```yaml
- id: GN-M31-56-14
  page: 56
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원마무리 STEP2"
  summary: |
    x=√6 일 때 2x 는 1/x 의 몇 배인지 구하기. 5지선다.
  category: "「몇 배」 → 나눗셈으로 번역 → 2x² 계산"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "무리수의 배수 관계(몇 배인가)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    2x÷(1/x)=2x²=12 한 줄이다. 대입 전에 x 로 정리하면 근호가 아예 사라진다.
    발전 문제 구역 ★3 출발이지만 통찰 0 · M_total 3(이 범위 최저) → −1 조정해 ★2. 벤더와 1단 차이라 이슈표에는 올리지 않는다.
  tier: star_2
  mechanism_primary: "「몇 배」를 2x÷(1/x) 로 번역 → 2x² → x=√6 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/56-14.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x 의 값(√6)과 두 식의 계수·차수(2x, 1/x)를 교체. 제약: 비가 유리수로 떨어지려면 두 식의 차수 합이 짝수여야 한다(x²·x⁴ 꼴)."
    creative: "(1) 「몇 배」 대신 두 값의 차·합을 묻기(★2) (2) x+1/x 의 값을 묻는 형태로 바꾸면 유리화가 들어가 ★3 (3) x 를 미지수로 두고 배수 관계를 주어 x 를 되묻기(I-BW d1 · ★3)."
```

```yaml
- id: GN-M31-56-15
  page: 56
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "중단원마무리 STEP2"
  summary: |
    √2=a, √5=b 일 때 √2.88 을 a, b 로 나타내기. 5지선다.
  category: "소수를 분수로 → 근호 안 제곱인수 분리 → a, b 로 치환"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "분모에 남은 5 를 √5 의 제곱, 즉 b² 로 바꿔 읽어야 선택지 꼴과 맞음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "√2=a 꼴 치환으로 다른 제곱근을 문자로 나타내기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    2.88=288/100 로 고치고 288=144×2 를 분리하면 12√2/10=6√2/5 가 된다. 여기서 분모 5 를 그냥 두면 선택지에 없고, 5=(√5)²=b² 로 옮겨야 ④가 나온다.
    이 마지막 치환이 정답을 가르는 자리다(EQV d1 · T-표기). 발전 문제 ★3 출발 · 통찰 1 → ★3 유지.
  tier: star_3
  mechanism_primary: "2.88 → 288/100 → 12√2/10 → 6√2/5 → 분모 5 를 b² 로 바꿔 6a/b²"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/56-15.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "대상 소수(2.88)를 √2·√5 로만 표현되는 다른 소수(0.8, 12.5, 0.32)로 교체. 제약: 분자는 √2 계열, 분모는 5 의 거듭제곱이어야 하며 a·b 의 차수(b 인지 b² 인지)가 선택지를 가르도록 설계."
    creative: "(1) √0.5 처럼 분모에 √2 가 남게 해 a 로만 표현시키기(★2) (2) √10 을 ab 로 쓰게 하는 항을 섞기(★3) (3) a, b 로 표현된 식을 주고 원래 수를 되묻기(I-BW d1 · ★3)."
```

```yaml
- id: GN-M31-56-16
  page: 56
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원마무리 STEP2"
  summary: |
    (√6/√5)÷(√3/√15)×A = 6√15 일 때 A 의 값 구하기.
  category: "좌변의 근호 부분 정리 → A 에 대해 역연산 → 유리화"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곱셈·나눗셈 식에서 미지의 수 A 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    나눗셈을 역수 곱으로 바꾸면 앞부분이 √6 하나로 줄고, A=6√15÷√6 을 유리화하면 끝난다. 미지수가 곱의 한 자리에 있을 뿐이라 역방향 사고로 보기 어렵다(표준 미정계수 절차).
    통찰 0 · M_total 6 → 발전 문제 ★3 출발에서 −1 해 ★2. 벤더와 1단 차이.
  tier: star_2
  mechanism_primary: "÷(√3/√15) → ×(√15/√3) → 앞부분 √6 으로 축약 → A=6√15÷√6 → 유리화"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$3\sqrt{10}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/56-16.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 근호(6, 5, 3, 15)와 우변의 6√15 를 교체. 제약: 좌변 근호 부분이 하나의 √k 로 축약되어야 하고, 우변÷√k 가 유리화 뒤 깔끔한 꼴이 되도록 k 를 고를 것."
    creative: "(1) A 를 나눗셈 자리에 두기(★2 유지 · 역수 처리만 추가) (2) 우변을 유리수로 만들어 A 를 되묻기(I-EQV d1 · ★3) (3) A 가 자연수가 되는 조건을 묻는 형태(★3)."
```

```yaml
- id: GN-M31-56-17
  page: 56
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "중단원마무리 STEP2"
  summary: |
    √((√10−3)²) − √((6−2√10)²) 을 계산하기. 5지선다.
  category: "√(A²)=|A| → 각 괄호의 부호 판정 → 절댓값 벗기고 정리"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "근호를 벗기기 전에 √10 과 3, 2√10 과 6 의 대소를 비교해 각 괄호의 부호를 먼저 결정"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "√(A²)=|A| 의 부호 판정(근호 벗기기)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 괄호의 부호가 서로 반대라는 점이 문제의 전부다. √10 은 3 보다 크고 2√10 은 6 보다 크므로 뒤 괄호는 음수, 곧 부호를 뒤집어 빼야 한다.
    부호 판정을 건너뛰면 그럴듯한 오답(√10−3 등)에 정확히 도달하도록 선택지가 배치돼 있다(T-부호·T-경계). 발전 문제 ★3 출발 · 통찰 1(EQV d2) → ★3 유지.
  tier: star_3
  mechanism_primary: "두 괄호의 부호를 대소 비교로 판정 → |A| 를 부호에 맞춰 벗김 → 동류항 정리"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/56-17.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안 수(10)와 두 상수(3, 6), 계수(2)를 교체. 제약: 두 괄호의 부호가 반드시 서로 반대가 되도록 상수를 √a 의 근삿값 양옆에 배치해야 하고, 경계에 너무 가까운 값은 피한다."
    creative: "(1) 두 괄호를 같은 부호로 두면 단순 정리가 되어 ★2 (2) 문자 a 와 범위 조건(2<a<3)을 주면 Mₐ 상승 ★4 (3) 계산 결과가 유리수가 되도록 계수를 되묻기(I-BW d2 · ★4)."
```

```yaml
- id: GN-M31-56-18
  page: 56
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원마무리 STEP2"
  summary: |
    분배법칙·유리화가 섞인 다섯 개의 혼합 계산 등식 중 옳은 것 두 개 고르기.
  category: "괄호 전개·유리화 → 동류항 정리 → 우변과 대조"
  M: {s: 3, k: 3, a: 1, t: 1}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "근호가 있는 식의 분배법칙 혼합 계산 참·거짓"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    선택지 다섯 개가 모두 「괄호 전개 + 유리화 + 동류항 정리」 한 세트씩이라 사실상 다섯 문제를 푸는 분량이다(Mₖ 3). 도구는 전부 이 단원 표준이고 착안이나 분기는 없다.
    괄호 앞 부호와 분모 유리화를 동시에 다루는 자리에서 실수가 난다(T-부호). 발전 문제 ★3 출발 · 통찰 0 · M_total 8 → ★3 유지.
    [분류 이슈] 통찰 0인데 노동량만으로 ★3 을 유지한 계산 마찰형(v3.8 질 저하 경고 대상) — 변형 원본으로 쓸 때는 선택지 수를 줄이는 쪽을 권함.
  tier: star_3
  mechanism_primary: "선택지마다 괄호 전개 → 분모 유리화 → 무리수 항·유리수 항 정리 → 우변과 대조"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "①, ⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/56-18.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 선택지의 계수와 근호 안 수를 교체하되 √2·√3·√6 계열(①②④)과 √5·√10·√15 계열(⑤)을 섞는 배치는 유지. 제약: 참인 선택지가 정확히 두 개여야 하고, 오답은 부호 분배·유리화 실수로 도달하는 값으로 만들 것."
    creative: "(1) 다섯 개 중 하나만 고르게 해 분량을 줄이기(★3 유지·질 개선) (2) 한 선택지에 문자를 넣어 등식이 성립할 조건을 묻기(I-EQV d2 · ★4) (3) 틀린 것을 고쳐 쓰는 서술형으로 전환(★3)."
```

```yaml
- id: GN-M31-57-19
  page: 57
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "중단원마무리 STEP2"
  summary: |
    √5(4−√5) + a(√5−2)/(2√5) 의 계산 결과가 유리수가 되도록 하는 유리수 a 구하기.
  category: "전개·유리화 → 유리수 항과 √5 항 분리 → 무리수 항의 계수 = 0"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 3
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「결과가 유리수」를 「√5 항의 계수가 0」이라는 방정식으로 옮겨야 a 를 구할 수 있음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "계산 결과가 유리수가 되는 조건(무리수 항의 계수 = 0)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    앞부분을 전개하고 뒷부분을 유리화하면 식이 (유리수) + (√5 의 계수)·√5 꼴로 갈린다. 여기서 멈추지 않고 「유리수가 된다 ⟺ √5 의 계수가 0」으로 조건을 번역하는 자리가 이 문항의 전부다(EQV d2).
    계수에 a 가 섞여 있어 마지막이 일차방정식이 된다. 발전 문제 ★3 출발 · 통찰 1 → ★3 유지.
  tier: star_3
  mechanism_primary: "전개·유리화 → (유리수)+(무리수 계수)√5 꼴 정리 → 무리수 계수 = 0 방정식 → a"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$20$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/57-19.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "앞 항의 계수(4)와 뒤 분수의 분모 계수(2), 괄호 안 상수(−2)를 교체. 제약: √5 계수가 0 이 되는 a 가 유리수(가능하면 정수)로 떨어져야 하고, 두 항의 무리수 부분이 같은 √5 여야 한다."
    creative: "(1) 「유리수」 대신 「자연수」·「0」이 되는 조건으로 바꾸기(★3 유지, 자연수면 T-범위 추가) (2) a 를 준 뒤 결과값을 묻는 역방향(★2 로 하강) (3) 무리수가 √5 와 √3 두 종류가 되게 하면 연립이 필요해 ★4."
```

```yaml
- id: GN-M31-57-20
  page: 57
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원마무리 STEP2"
  summary: |
    한 눈금이 1 인 모눈종이의 수직선 위에 그린 정사각형 ABCD 에서 AD=AP, AB=AQ 일 때 선분 PQ 의 길이 구하기(P, Q 는 수직선 위의 점).
  category: "모눈 위 정사각형의 한 변 길이 → 수직선 위 두 점의 좌표 → 거리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "모눈 위 기울어진 선분(가로 2·세로 1)을 √5 라는 수직선 위 거리로 옮겨, 점 A 를 기준으로 좌우 대칭인 두 좌표로 번역"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "수직선 위 무리수의 대응(모눈종이 위 정사각형)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    정사각형의 한 변은 가로 2·세로 1 인 직각삼각형의 빗변이므로 √5 다. 두 호가 점 A(좌표 3)에서 각각 왼쪽·오른쪽으로 같은 길이만큼 찍히므로 P=3−√5, Q=3+√5 가 되고 PQ 는 한 변의 두 배가 된다.
    좌우 대칭을 보면 좌표를 각각 계산하지 않아도 되지만, 그림을 식으로 옮기는 전환(RT d2)이 없으면 시작이 안 된다. 발전 문제 ★3 출발 · 통찰 1 → ★3 유지.
  tier: star_3
  mechanism_primary: "모눈에서 한 변 = √(2²+1²)=√5 → P=3−√5, Q=3+√5 → PQ = 2×(한 변)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2\sqrt{5}$'
  answer_source: "답지"
  figure: crop:fig-57-20.png
  latex: latex-bank/gn-m31/items/57-20.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정사각형의 기울기(가로 2·세로 1)와 꼭짓점 A 의 좌표(3)를 교체하면 한 변이 √2, √10 등으로 바뀐다. 제약: 그림 라벨(A~D, P, Q)과 두 호의 방향은 고정해야 하고, 좌표는 P 가 음수로 내려가지 않게 잡는 편이 읽기 쉽다."
    creative: "(1) P 와 Q 중 한 점의 좌표만 묻기(★2) (2) 두 호를 같은 방향으로 그려 PQ=0 이 되는 배치로 바꾸면 함정형(★3) (3) 정사각형 대신 직사각형을 두어 AP≠AQ 로 만들면 두 좌표를 각각 구해야 해 ★4."
```

```yaml
- id: GN-M31-57-21
  page: 57
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원마무리 STEP2"
  summary: |
    3+√7 의 정수 부분을 a, 소수 부분을 b 라 할 때 2a+5b 의 값. 5지선다.
  category: "√7 의 범위 → 정수 부분 a → 소수 부분 b = (수)−a → 대입"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "소수 부분을 「수 − 정수 부분」으로 바꿔 쓰고, 정수 부분은 2<√7<3 이라는 범위 판정에서 얻음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "무리수의 정수 부분과 소수 부분"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    4<7<9 에서 2<√7<3 이므로 3+√7 의 정수 부분은 5, 소수 부분은 √7−2 다. 대입하면 정수 항이 상쇄되어 5√7 만 남는다.
    소수 부분을 근삿값(0.64…)으로 잡으려 하면 답이 안 나오는 구조라 「수−정수 부분」 표현이 필수다(EQV d1 · T-경계). 발전 문제 ★3 출발 · 통찰 1 → ★3 유지.
  tier: star_3
  mechanism_primary: "2<√7<3 → 정수 부분 a=5 → 소수 부분 b=√7−2 → 2a+5b 에 대입·정리"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/57-21.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "더하는 정수(3)와 근호 안 수(7), 묻는 식의 계수(2, 5)를 교체. 제약: 근호 안은 제곱수가 아니어야 하고, 선택지가 깔끔하려면 정수 항이 상쇄되도록 두 계수를 맞출 것."
    creative: "(1) 정수 부분을 빼고 소수 부분만으로 식을 구성(★2) (2) 3−√7 처럼 무리수를 빼는 꼴로 바꾸면 정수 부분 판정이 뒤집혀 ★4(58-u2 골조) (3) a, b 를 계수로 갖는 이차식에 넣기(★4)."
```

### 중단원 마무리하기 STEP 3 실력 UP

```yaml
- id: GN-M31-57-22
  page: 57
  vendor_label: "중단원 마무리하기 STEP 3 실력 UP"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원마무리 STEP3"
  summary: |
    a>0, b>0, ab=9 일 때 a√(3b/a) + (1/b)√(27b/a) 의 값 구하기.
  category: "양수 조건 → 근호 밖 문자를 근호 안으로 → 조건식 ab=9 대입"
  M: {s: 2, k: 2, a: 3, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "근호 밖의 a, 1/b 를 제곱해 근호 안으로 넣으면 두 항 모두 ab 만 남는 꼴로 바뀐다는 동치 변환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "문자 계수를 근호 안으로 넣어 조건식(ab=k) 이용하기"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    a 와 b 를 각각 구할 수 없고 곱 ab 만 주어졌다는 점이 출발 신호다. 밖의 계수를 제곱해 안으로 넣으면 첫 항은 √(3ab), 둘째 항은 √(27/(ab)) 가 되어 조건이 한 번에 쓰인다(EQV d2).
    문자 두 개의 곱만 주어지는 추상도(Mₐ 3)와 양수 조건(근호 안 양수·계수를 안으로 넣을 때 부호 유지 · T-부호)이 실력 UP 다운 지점이다. 구역 ★4 출발 · 통찰 1 → ★4 유지.
    [분류 이슈] ★4 인데 통찰이 I-EQV 하나뿐이라 §2.13 저노출 유형(SC/VF/SYM/XU/RT/PD/BW) 부재 YELLOW.
  tier: star_4
  mechanism_primary: "밖의 문자를 제곱해 근호 안으로 → 두 항을 √(3ab), √(27/(ab)) 로 정리 → ab=9 대입 → 합"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$4\sqrt{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/57-22.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "조건값 ab=9 와 근호 안 계수(3, 27)를 교체. 제약: 두 항이 각각 √(kab) 와 √(m/(ab)) 꼴로 떨어져야 하고, ab 값을 넣었을 때 두 결과가 같은 무리수(√3 계열)여야 합이 정리된다."
    creative: "(1) 항을 하나만 두면 ★3 으로 하강 (2) 조건을 a+b=k 로 바꾸면 곱 꼴이 안 만들어져 골조가 깨짐(출제 불가) (3) 값을 주고 ab 를 되묻는 역방향(I-BW d2 · ★4 유지 · 저노출 유형 확보)."
```

```yaml
- id: GN-M31-57-23
  page: 57
  vendor_label: "중단원 마무리하기 STEP 3 실력 UP"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원마무리 STEP3"
  summary: |
    f(x)=1/√x − 1/√(x+1) 일 때 f(7)+f(8)+…+f(27) = k√7 을 만족시키는 유리수 k 구하기.
  category: "이웃 항 상쇄(망원합) → 양 끝만 남김 → 유리화해 계수 비교"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-PD
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f(x) 의 두 항이 이웃 항과 어긋나게 겹쳐 중간이 모두 지워지는 구조(망원합)를 스스로 발견"
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "남은 1/√7 − 1/√28 에서 √28=2√7 임을 알아보고 같은 무리수로 묶어 k√7 꼴과 대응"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "망원합 꼴 제곱근 식의 합(연속 항 상쇄)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    21개 항을 각각 계산하는 길은 사실상 막혀 있고, f(7) 의 뒤 항과 f(8) 의 앞 항이 지워지는 구조를 보는 순간 1/√7 − 1/√28 만 남는다(PD d2).
    마지막에 √28=2√7 로 묶어 유리화하면 계수 k 가 읽힌다(EQV d1). 통찰 2개이지만 실력 UP 출발이 이미 ★4 이고 저노출 유형(PD) 이 포함돼 ★4 로 둔다(★5 는 SC/VF/SYM/XU 요건 미충족).
  tier: star_4
  mechanism_primary: "f 의 이웃 항 상쇄 확인 → 합 = 1/√7 − 1/√28 → √28=2√7 로 묶고 유리화 → k√7 계수 비교"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{1}{14}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/57-23.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "합의 시작·끝 값(7, 27)을 교체. 제약: 시작 수와 (끝+1) 이 같은 무리수 계열이어야 답이 한 종류의 √ 로 정리된다(7 과 28=4·7 처럼 배수 관계). 끝+1 이 시작의 제곱수 배가 되도록 고를 것."
    creative: "(1) f(x)=1/√x + 1/√(x+1) 로 부호를 바꾸면 상쇄가 사라져 골조가 무너짐(출제 불가) (2) 합의 값을 주고 마지막 항의 번호를 되묻기(I-BW d2 · ★4~5) (3) 항 수를 문자 n 으로 일반화(Mₐ 3 · ★5 후보이나 참신도 확보 필요)."
```

```yaml
- id: GN-M31-57-24
  page: 57
  vendor_label: "중단원 마무리하기 STEP 3 실력 UP"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원마무리 STEP3"
  summary: |
    넓이가 각각 8 cm², 18 cm², 32 cm² 인 정사각형 종이를 겹치지 않게 이어 붙인 도형의 둘레의 길이 구하기.
  category: "넓이 → 한 변의 길이(√) → 계단 도형의 둘레를 가로·세로 사영으로 환원"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "계단 모양 둘레를 변마다 세지 않고 가로 사영(세 변의 합)과 세로 사영(가장 큰 변)의 2배로 옮겨 계산"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "정사각형의 넓이 → 한 변의 길이 → 이어 붙인 도형의 둘레"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    세 넓이에서 한 변이 2√2, 3√2, 4√2 로 나오고, 세 정사각형이 밑변을 맞대고 커지는 계단형이라 둘레는 2×(가로 합) + 2×(가장 큰 변) 으로 환원된다(RT d2).
    변을 하나씩 더하면 위쪽 단차(√2 짜리 두 조각)를 빠뜨리기 쉽다(T-경계). 실력 UP ★4 출발 · 통찰 1 → ★4 유지.
    [분류 이슈] 골조는 같은 구역의 57-22·57-23 보다 확실히 가볍다(도구 2개·분기 없음) — 카탈로그 작성 시 ★3 후보.
  tier: star_4
  mechanism_primary: "각 넓이의 제곱근으로 한 변 → 계단 도형 둘레 = 2×(2√2+3√2+4√2) 대신 사영 합산 → 26√2"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$26\sqrt{2}\,\mathrm{cm}$'
  answer_source: "답지"
  figure: crop:fig-57-24.png
  latex: latex-bank/gn-m31/items/57-24.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 넓이(8, 18, 32)를 같은 무리수 계열의 제곱수 배(예: 12, 27, 48 → √3 계열)로 교체. 제약: 한 변이 모두 같은 √k 의 정수배여야 둘레가 하나의 무리수로 정리되고, 크기 순서대로 붙여야 사영 환원이 성립한다. 그림의 배치(밑변 정렬·오름차순)는 고정."
    creative: "(1) 넓이 대신 둘레를 주고 가장 큰 정사각형의 넓이를 되묻기(I-BW d2 · ★4) (2) 가운데 정사각형을 가장 크게 배치하면 사영 환원이 깨져 변을 직접 세야 함(★4·함정 증가) (3) 정사각형 네 개로 늘리면 Mₛ 만 상승(질 저하)."
```

### 서술형 대비 문제

```yaml
- id: GN-M31-58-e1
  page: 58
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    A=√54÷√10×√(5/9), B=(√15/√24)×(6/√3)÷(√5/√6) 일 때 B/A 의 값 구하기. [7점]
  category: "A, B 각각 근호 하나로 축약 → B÷A → 정리"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "근호를 포함한 곱셈·나눗셈 혼합 계산(서술형)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    나눗셈을 역수 곱으로 바꿔 근호 안을 한 덩어리로 모으면 A, B 가 각각 한 개의 √ 로 줄고 그 비를 구하면 끝난다. 분기·착안 없음.
    서술형 구역 ★3 출발이지만 통찰 0 · M_total 5 → −1 해 ★2. 배점(7점)은 과정 서술에 대한 것이지 난이도 신호가 아니다.
    [분류 이슈] 서술형 대비 구역이나 골조는 STEP 1 의 계산 문항과 같다.
  tier: star_2
  mechanism_primary: "A, B 를 각각 √(하나의 유리수) 로 축약 → B÷A → 근호 정리"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\sqrt{3}$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/58-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A, B 각 인수의 근호 안 수와 계수를 교체. 제약: A, B 가 모두 하나의 근호로 축약되어야 하고, B/A 가 √3 처럼 간단한 꼴로 떨어지도록 두 식의 근호 안 비를 먼저 정한 뒤 역설계할 것."
    creative: "(1) B/A 대신 AB 를 묻기(58-u1 골조 · ★2 유지) (2) A 와 B 중 큰 것을 고르게 하면 대소 비교가 추가돼 ★3 (3) B/A 가 유리수가 되도록 한 인수를 미지수로 두기(I-EQV d2 · ★3)."
```

```yaml
- id: GN-M31-58-e2
  page: 58
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    √72 의 소수 부분을 a, √18 의 소수 부분을 b 라 할 때 a−b 의 값 구하기. [8점]
  category: "근호 간단히 → 각 수의 정수 부분 판정 → 소수 부분 = 수 − 정수 부분 → 차"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "소수 부분을 「수 − 정수 부분」으로 바꿔 쓰고, 정수 부분은 6√2, 3√2 를 낀 연속한 두 정수로 판정"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 무리수의 소수 부분의 차"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    √72=6√2, √18=3√2 로 줄인 뒤 각각 8<6√2<9, 4<3√2<5 를 판정해 정수 부분 8, 4 를 얻는다. 소수 부분을 빼면 √2 항이 3√2 만큼 남는다.
    범위 판정을 제곱으로 확인해야 하는 경계 함정(T-경계)이 핵심이고 분기는 없다. 서술형 ★3 출발 · 통찰 1 → ★3 유지.
  tier: star_3
  mechanism_primary: "√72=6√2, √18=3√2 → 각 정수 부분 판정 → a=6√2−8, b=3√2−4 → a−b"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$3\sqrt{2}-4$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/58-e2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 근호 안 수(72, 18)를 같은 계열의 다른 쌍(50과 8, 108과 27)으로 교체. 제약: 두 수가 같은 무리수 계열이어야 차가 간단히 정리되고, 각 정수 부분 판정이 경계에서 애매하지 않아야 한다."
    creative: "(1) a+b 를 묻기(★3 유지) (2) 한쪽을 7−√10 처럼 무리수를 빼는 꼴로 바꾸면 정수 부분 판정이 뒤집혀 ★3~4(58-u2) (3) 정수 부분끼리의 곱과 소수 부분의 합을 함께 묻기(Mₛ 상승 ★4)."
```

```yaml
- id: GN-M31-58-u1
  page: 58
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    A=(14/√2)÷2√3×√(6/7), B=(2√2/3)×√(2/21)÷(4/(3√3)) 일 때 AB 의 값 구하기. [7점]
  category: "A, B 각각 근호 하나로 축약 → 곱 → 약분"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "근호를 포함한 곱셈·나눗셈 혼합 계산(서술형)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    58-e1 의 유제. 나눗셈을 역수 곱으로 고치고 계수와 근호 안을 따로 모으면 A, B 가 각각 간단한 꼴이 되고 곱하면 1 로 떨어진다.
    계수에 분수가 섞여 Mₖ 가 조금 높을 뿐 착안·분기는 없다. 서술형 ★3 출발 · 통찰 0 · M_total 5 → ★2.
    [분류 이슈] 서술형 대비 구역이나 골조는 STEP 1 의 계산 문항과 같다.
  tier: star_2
  mechanism_primary: "각 식의 계수와 근호 안을 분리해 정리 → A, B 축약 → AB 곱해 약분"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$1$'
  answer_source: "답지 · 계산 확인"
  figure: none
  latex: latex-bank/gn-m31/items/58-u1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A, B 각 인수의 계수(14, 2, 2/3, 4)와 근호 안 수(2, 3, 6/7, 2/21)를 교체. 제약: AB 가 1 처럼 깔끔하려면 두 식의 근호 안 곱이 제곱수, 계수 곱이 1 이 되도록 역설계할 것."
    creative: "(1) A/B 를 묻기(★2 유지) (2) AB=1 임을 이용해 B 를 A 로 나타내게 하는 서술형(I-EQV d1 · ★3) (3) A 의 한 인수를 미지수로 두고 AB=1 이 되게 하는 값을 묻기(I-BW d1 · ★3)."
```

```yaml
- id: GN-M31-58-u2
  page: 58
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    √40 의 소수 부분을 a, 7−√10 의 소수 부분을 b 라 할 때 a+b 의 값 구하기. [8점]
  category: "근호 간단히 → 무리수를 빼는 수의 정수 부분 판정 → 소수 부분 합"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "7−√10 의 정수 부분은 −√10 의 부등호를 뒤집어 3<7−√10<4 를 얻어야 나오며, 소수 부분도 7−√10−3 = 4−√10 로 번역해야 함"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "무리수의 소수 부분(음의 무리수가 섞인 꼴)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    앞쪽 √40=2√10 은 6<2√10<7 로 바로 처리되지만, 뒤쪽 7−√10 은 3<√10<4 의 부등호를 뒤집는 자리에서 대부분 틀린다(T-부호·T-경계).
    두 소수 부분을 더하면 정수 항이 상쇄되고 √10 항만 남는다. 부등호 뒤집기라는 동치 변환 1개(EQV d2) · 서술형 ★3 출발 → ★3 유지.
  tier: star_3
  mechanism_primary: "√40=2√10 의 정수 부분 6 → a=2√10−6 · 3<√10<4 뒤집어 7−√10 의 정수 부분 3 → b=4−√10 → a+b"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\sqrt{10}-2$'
  answer_source: "답지 · 계산 확인"
  figure: none
  latex: latex-bank/gn-m31/items/58-u2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안 수(40, 10)와 빼는 정수(7)를 교체. 제약: 두 수가 같은 무리수 계열(√10)이어야 합에서 정수 항이 정리되고, 7−√10 이 음수가 되지 않도록 정수를 √ 값보다 크게 잡을 것."
    creative: "(1) a−b 를 묻기(★3 유지) (2) 양쪽 다 정수−무리수 꼴로 두면 부등호 뒤집기가 두 번(★4) (3) 소수 부분 b 를 주고 원래 수를 되묻는 역방향(I-BW d2 · ★4)."
```

```yaml
- id: GN-M31-59-u3
  page: 59
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    √160 = a√b(b 는 가장 작은 자연수), √1.25 = c√5 일 때 유리수 a, b, c 에 대하여 abc 의 값 구하기. [6점]
  category: "제곱인수 완전 분리 → a, b 결정 → 소수를 분수로 고쳐 c 결정 → 곱"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "√a=b√c 꼴 변형에서 유리수 값 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    160=16×10 에서 a=4, b=10 이 나오는데 「b 가 가장 작은 자연수」 조건 때문에 제곱인수를 끝까지 빼내야 한다(T-범위 — 4√10 대신 2√40 로 멈추면 틀림).
    1.25=5/4 로 고치면 √5/2 이므로 c 는 분수다. 착안은 없고 조건 준수가 전부. 서술형 ★3 출발 · 통찰 0 · M_total 7 → ★3 유지.
  tier: star_3
  mechanism_primary: "160 의 제곱인수를 끝까지 분리 → a=4, b=10 → 1.25=5/4 → c=1/2 → abc"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$20$'
  answer_source: "답지 · 계산 확인"
  figure: none
  latex: latex-bank/gn-m31/items/59-u3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "160 과 1.25 를 제곱인수를 가진 다른 수·소수로 교체. 제약: b 가 제곱인수를 갖지 않는 최소 자연수여야 하고, 소수 쪽은 분모가 제곱수(4, 100)여서 c 가 유리수로 떨어져야 한다."
    creative: "(1) a+b+c 를 묻기(★3 유지) (2) 「b 가 가장 작은 자연수」 조건을 빼면 답이 여러 개가 되는 함정형(I-MI d1 · ★3) (3) abc 값을 주고 원래 수를 되묻기(I-BW d1 · ★4)."
```

```yaml
- id: GN-M31-59-u4
  page: 59
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    넓이가 12 인 정사각형 AEFB 와 넓이가 27 인 정사각형 ADGH 가 있을 때 직사각형 ABCD 의 넓이 구하기. [6점]
  category: "정사각형 넓이 → 한 변의 길이 → 직사각형 넓이 = 두 변의 곱"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정사각형의 넓이 → 한 변 → 직사각형의 넓이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    AB=√12=2√3, AD=√27=3√3 을 구해 곱하면 18 로 끝난다. 그림은 두 정사각형이 직사각형의 이웃한 두 변 위에 붙어 있음을 보여 줄 뿐 추가 정보가 없다.
    서술형 ★3 출발이지만 통찰 0 · M_total 3(이 범위 최저 수준) → −1 해 ★2.
    [분류 이슈] 서술형 대비 구역이나 두 번의 제곱근 계산과 한 번의 곱이 전부.
  tier: star_2
  mechanism_primary: "두 정사각형 넓이의 제곱근으로 AB, AD → 직사각형 넓이 = AB×AD"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$18$'
  answer_source: "답지 · 계산 확인"
  figure: crop:fig-59-u4.png
  latex: latex-bank/gn-m31/items/59-u4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 넓이(12, 27)를 교체. 제약: 두 변의 곱이 유리수로 떨어지려면 같은 무리수 계열(여기서는 √3)이어야 하고, 아니면 답이 무리수가 되어 서술 분량이 늘어난다. 그림의 꼭짓점 이름(AEFB, ADGH)은 고정."
    creative: "(1) 직사각형의 둘레를 묻기(답이 무리수가 되어 ★3) (2) 직사각형 넓이를 주고 한 정사각형의 넓이를 되묻기(I-BW d1 · ★3) (3) 정사각형을 세 개로 늘려 이어 붙인 도형의 둘레로 바꾸면 57-24 골조(★4)."
```

```yaml
- id: GN-M31-59-u5
  page: 59
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    √5(4−√5) − 5(√5−2)/√5 = p+q√5 일 때 유리수 p, q 에 대하여 p−q 의 값 구하기. [7점]
  category: "전개·유리화 → p+q√5 꼴 정리 → 계수 대응"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "p+q√5 꼴로 정리해 유리수 계수 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    앞 항은 분배법칙, 뒤 항은 분모 유리화로 각각 정리한 뒤 괄호 앞의 −를 분배하는 자리가 유일한 함정이다(T-부호).
    57-19 에서 「유리수가 될 조건」이라는 착안을 뺀 형태라 계수 대응만 남는다. 서술형 ★3 출발 · 통찰 0 · M_total 7 → ★3 유지.
  tier: star_3
  mechanism_primary: "앞 항 전개 → 뒤 항 유리화 → 부호 분배 후 정수 항과 √5 항 분리 → p, q 대응"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$-16$'
  answer_source: "답지 · 계산 확인"
  figure: none
  latex: latex-bank/gn-m31/items/59-u5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 항의 계수(4, 5, −2)와 근호 안 수(5)를 교체. 제약: 두 항의 무리수가 같은 √ 여야 계수 대응이 성립하고, p, q 가 정수로 떨어지도록 분자의 계수를 분모의 근호와 맞출 것."
    creative: "(1) p+q 나 pq 로 묻기(★3 유지) (2) 뒤 항의 계수를 미지수로 두고 결과가 유리수가 될 조건을 묻기(57-19 골조 · I-EQV d2 · ★3) (3) 무리수를 두 종류(√5, √2)로 섞으면 계수 대응이 세 개로 늘어 ★4."
```

```yaml
- id: GN-M31-59-u6
  page: 59
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    2+√32, 11−√8, √18+3 중 가장 큰 수 M 과 가장 작은 수 m 에 대하여 M+m 의 값 구하기. [8점]
  category: "근호 간단히(√2 계열 통일) → 두 수씩 차의 부호 판정 → 최대·최소 선택 후 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "세 수를 모두 a+b√2 꼴로 통일해 두 수의 차가 (정수)+(정수)√2 가 되게 만들면 부호 판정이 가능해짐"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "세 무리수의 대소 비교(최대·최소)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    √32=4√2, √8=2√2, √18=3√2 로 고치면 세 수가 모두 (정수)+(정수)√2 꼴이 되어 차의 부호만 보면 된다. 뺄셈으로 주어진 11−2√2 가 가장 크다는 점이 함정이다(T-부호).
    비교 자체는 세 번이지만 도구는 하나다. 서술형 ★3 출발 · 통찰 1(EQV d1) → ★3 유지.
  tier: star_3
  mechanism_primary: "세 수를 a+b√2 꼴로 통일 → 두 수씩 차의 부호 판정 → M, m 확정 → M+m"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$14+\sqrt{2}$'
  answer_source: "답지 · 계산 확인"
  figure: none
  latex: latex-bank/gn-m31/items/59-u6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 수의 정수 항(2, 11, 3)과 근호 안 수(32, 8, 18)를 교체. 제약: 근호 안은 모두 같은 계열(2 의 제곱수 배)이어야 하고, 세 값의 차가 근삿값으로도 분명히 갈리도록 간격을 둘 것. 한 개는 반드시 정수−무리수 꼴로 남긴다."
    creative: "(1) M−m 이나 중앙값을 묻기(★3 유지) (2) 네 수로 늘려 두 번째로 큰 수를 묻기(Mₛ 상승 ★3) (3) 한 수에 문자를 넣어 그 수가 최대가 될 조건을 묻기(I-EQV d2 · ★4)."
```

## 표본 판정 요약 (32문)

- ★ 분포: ★1 0 · ★2 17 · ★3 12 · ★4 3 · ★5 0 (premium 0)
- 구역별: STEP 1 기본 12문 전부 ★2 · STEP 2 발전 9문(★2 2 · ★3 7) · STEP 3 실력 UP 3문 전부 ★4 · 서술형 8문(★2 3 · ★3 5)
- 통찰형 8 · 절차형 24. 통찰 카드가 붙은 문항은 13문(통찰 총 14개 — I-EQV 10 · I-RT 2 · I-PD 2 · 나머지 0)
- depth 2 통찰 8개(56-13 · 56-17 · 57-19 · 57-20 · 57-22 · 57-23 · 57-24 · 58-u2). depth 3 은 없음 → ★5 요건(통찰 3개 이상 + SC/VF/SYM/XU) 충족 문항 없음
- type_hint 상위 5: ⑴ 근호 곱셈·나눗셈 혼합 계산 5(54-01 · 54-06 · 56-16 · 58-e1 · 58-u1) ⑵ a+b√c 꼴 계수 대응 4(55-09 · 55-10 · 57-19 · 59-u5) ⑶ 도형 활용 4(55-11 · 57-20 · 57-24 · 59-u4) ⑷ 무리수의 정수·소수 부분 3(57-21 · 58-e2 · 58-u2) ⑸ 무리수의 대소 비교 3(54-03 · 55-12 · 59-u6)
- 그림 4문: `crop:fig-55-11.png` · `crop:fig-57-20.png` · `crop:fig-57-24.png` · `crop:fig-59-u4.png`
- 벤더 태그 「꼭나와」 7문(54-02 · 54-05 · 55-07 · 55-12 · 56-15 · 56-17 · 57-19) — ★ 가산 없이 빈출 표시로만 기록

## 분류 이슈 목록

판정이 애매하거나 구역 신호와 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-M31-56-18 | 통찰 0인데 선택지 다섯 개 전개로 M_total 8 — 노동량만으로 ★3 유지(v3.8 계산 마찰 질 저하 경고) | ★2 / ★3 |
| GN-M31-57-22 | ★4 인데 통찰이 I-EQV 하나뿐 — §2.13 저노출 유형(SC/VF/SYM/XU/RT/PD/BW) 부재 YELLOW | ★3 / ★4 |
| GN-M31-57-24 | 실력 UP 구역이나 골조가 같은 구역의 57-22·57-23 보다 확실히 가벼움(도구 2개·분기 없음) | ★3 / ★4 |
| GN-M31-58-e1 · 58-u1 · 59-u4 | 서술형 대비 구역이나 통찰 0 · M_total ≤5 로 STEP 1 계산 문항과 동급 → ★2 로 기록 | ★2 / ★3 |

1단 차이만 나는 56-14(STEP 2 · ★2) · 56-16(STEP 2 · ★2) 은 표에 올리지 않고 각 블록 rationale 에만 근거를 남겼다.

## 카탈로그 차원 메모

나중에 중3-1 유형 카탈로그를 만들 때 참고할 축(이 범위 32문 기준).

- **따로 세워야 할 유형**: ⑴ 「계산 결과가 유리수가 되는 조건」(57-19 — 무리수 항의 계수를 0으로 놓는 동치 변환이 단독 유형값을 가짐) ⑵ 「무리수의 정수 부분·소수 부분」(57-21 · 58-e2 · 58-u2 — 특히 정수−무리수 꼴은 부등호 뒤집기 때문에 별도 하위 유형) ⑶ 「연쇄 약분·망원합」(56-13 · 57-23 — 이 범위에서 유일하게 I-PD 가 붙는 자리이자 ★4 변별 슬롯) ⑷ 「수직선 위 무리수의 대응」(57-20 — 도형·좌표 전환이라 넓이·둘레 유형과 섞으면 안 됨).
- **통합해도 될 유형**: ⑴ 근호 곱셈·나눗셈 혼합 계산(54-01 · 54-06 · 56-16 · 58-e1 · 58-u1)은 「미지수 자리가 어디인가」만 다르므로 한 유형의 변형 단계로 묶는 편이 낫다 ⑵ a+b√c 계수 대응(55-09 · 55-10 · 59-u5)도 전개 경로만 다른 동일 골조 ⑶ 도형 넓이·둘레 활용(55-11 · 57-24 · 59-u4)은 「넓이 ↔ 한 변」 왕복이 공통이라 하나의 유형에 난이도 3단으로 배치 가능.
- **base ★ 제안**: 위 통합 유형은 base ★2(미지수·유리화 한 겹이 얹히면 ★3), 정수·소수 부분 유형은 base ★3, 망원합·연쇄 약분 유형은 base ★4 가 이 범위의 실제 체감과 맞는다.
