---
name: mechanism-데이터-RPM-CALC2-04-p2
description: RPM 미적분Ⅱ 04 삼각함수의 미분(2/3 · 유형 06~15) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 미적분Ⅱ (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-calc2
  section: 04 삼각함수의 미분
  unit_code: CALC2-04
  part: "2/3"
  extract_range: "60~65쪽 · 0399~0435"
  total_problems: 37
  unit_total: 119
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-calc2/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-calc2/items/<id>.tex
  image_source: latex-bank/rpm-calc2/figures/ (crops.json)
---

# RPM 미적분Ⅱ · 04 삼각함수의 미분 (2/3) 정독 데이터 (v1.0)

이 파일은 RPM 미적분Ⅱ 04 삼각함수의 미분 단원의 둘째 범위(60~65쪽 · 0399~0435 · 37문항)를 다룬다. 범위 전체가 「유형 06 ~ 유형 15」 열 개 구역(덧셈정리의 활용 — 도형 · 배각의 공식 · 삼각함수의 극한 · sin x/x 꼴 · tan x/x 꼴 · 1−cos x 포함 극한 · x→a 치환 · x→∞ 치환 · 극한과 미정계수 · 연속과 미정계수)의 유형별 기본 문제이며, 각 구역 첫 문항이 「대표문제」(level 없음)이고 나머지는 난이도 중하·중·상중(0435 하나)이 붙어 있다. 서술형 태그 3문(0405·0420·0429), 그림 3문(0399~0401 · 도형 문제). RPM 은 구역이 곧 난이도 층이므로 유형 구역은 ★2 출발(중하 → ★1~2 · 상중 → ★3)이고, M_total·통찰로만 ±1 조정했다. 결과는 ★1 9문 · ★2 27문 · ★3 1문(0435 · 벤더 상중 유지)이며, 통찰 라벨을 붙인 문항은 6문(0399·0400·0401·0405·0411·0418 · 모두 d1~d2 착안 수준)이고 insight_type 이 통찰형인 문항은 0401 하나다. 이 범위의 극한 문항은 「sin·tan·e^x−1·ln(1+x) 를 x 로 나눈 기본 극한의 계수 비」라는 한 골조가 지수·로그와 섞여 반복되므로, 지수·로그 극한과의 결합은 이 단원의 표준 도구로 보고 I-XU 로 세지 않았다.

주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(유형 코드+depth+근거 · 절차형은 빈 배열) · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 창의 변형과 ★ 변동 지점)를 채웠다. 유형 카탈로그가 없는 과목이므로 `type_id`·`base_star` 는 null 이고 `type_hint` 로 유형명을 제안했다(RPM 유형 제목을 기본 후보로 쓰되 실제 골조가 더 좁거나 다르면 그 이름으로). 유형 06 구역 이름의 「; 도형」은 전사본 section 원문(제목의 부제 구분)을 그대로 둔 것이다.

## 문항 데이터

### 유형 06 삼각함수의 덧셈정리의 활용; 도형

```yaml
- id: RPM-CALC2-0399
  page: 60
  vendor_label: "유형 06 삼각함수의 덧셈정리의 활용; 도형"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    가로 12·세로 5 인 직사각형 ABCD 에서 BC 를 2:1 로 내분하는 점 P 에 대해 ∠APD = θ 일 때 tanθ 의 값. 그림 있음.
  category: "내분점 → 두 직각삼각형의 tan → 보각의 tan 덧셈정리 → 부호"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "θ 를 직접 못 구하므로 θ = π − (∠APB + ∠DPC) 로 놓아 두 직각삼각형의 tan(5/8 · 5/4)으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "도형 각 분해 tan 덧셈정리 — 직사각형 안의 각을 두 직각삼각형 각의 합의 보각으로"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    BP=8, PC=4 에서 tan∠APB=5/8, tan∠DPC=5/4. θ = π−(∠APB+∠DPC) 이므로 tanθ = −tan(∠APB+∠DPC) = −(5/8+5/4)/(1−25/32) = −60/7. 각 분해 착안(RT d1) 하나에 보각 부호 함정(T-부호 · θ 가 둔각). 대표문제·M_total 5 → 유형 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "내분점 BP=8·PC=4 → 두 직각삼각형 tan 5/8·5/4 → θ = π−(합) → tan 덧셈정리 → 부호 반전 −60/7"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-\dfrac{60}{7}$'
  answer_source: "답지"
  figure: "crop:fig-0399.png"
  latex: latex-bank/rpm-calc2/items/0399.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "변의 길이(5·12 → 3·8, 6·10)와 내분비(2:1 → 1:1, 3:1)를 바꿀 수 있음. 제약: 두 tan 의 곱이 1 이면 tan(합)이 정의되지 않으므로 (AB/BP)(DC/PC) ≠ 1 을 지키고, 답이 기약분수로 정리되게 고름. 그림 라벨(A·B·C·D·P·θ)과 P 가 BC 위라는 배치는 고정."
    creative: "(1) tanθ 대신 sinθ·cosθ 를 묻기(tan → 다른 삼각비 환산 한 단계 추가 · θ 둔각 부호 · ★2) (2) P 를 BC 위의 동점 BP=x 로 두고 tanθ 의 최댓값(둔각이라 −tanθ 최소)을 묻기 → 산술·기하평균 결합 · Mₐ↑ ★3 (3) 정사각형 두 개를 이어 붙인 도형의 두 대각선 사잇각으로 바꾸면 각 분해 골조 동일 ★2."
```

```yaml
- id: RPM-CALC2-0400
  page: 60
  vendor_label: "유형 06 삼각함수의 덧셈정리의 활용; 도형"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    빗변이 아닌 두 변이 각각 (2, 3)·(3, 2) 인 두 직각삼각형 ABC·ADE 가 꼭짓점 A 를 공유하고 B·D 가 한 직선 위에 있을 때, ∠CAE = θ 에 대해 12tanθ + 13cosθ 의 값. 5지선다 · 그림 있음.
  category: "두 직각삼각형의 tan → θ = 큰 각 − 작은 각 → tan 덧셈정리 → tan 에서 cos 환산 → 대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "θ = ∠CAB − ∠EAD 로 분해해 tan 3/2·2/3 의 차의 덧셈정리로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "도형 각 분해 tan 덧셈정리 — 겹친 두 직각삼각형의 각의 차 → tan 값에서 다른 삼각비 환산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    tan∠CAB = 3/2, tan∠EAD = 2/3, θ 는 두 각의 차이므로 tanθ = (3/2−2/3)/(1+1) = 5/12. θ 는 예각이라 cosθ = 12/13. 12·(5/12)+13·(12/13) = 17. 각 분해 착안(RT d1) 뒤 tan → cos 환산에서 예각 확인(T-부호). 벤더 중·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "두 직각삼각형 tan 3/2·2/3 → θ = 차 → tan 덧셈정리 5/12 → 예각이므로 cos 12/13 → 12tanθ+13cosθ = 17"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: "crop:fig-0400.png"
  latex: latex-bank/rpm-calc2/items/0400.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 삼각형의 변 길이 조합(2·3 → 1·2, 3·4)과 묻는 식의 계수(12·13 은 tanθ=5/12 의 5-12-13 에 맞춘 값이므로 tanθ 가 바뀌면 계수도 새 피타고라스 수로). 제약: θ = 큰 각 − 작은 각이 예각이 되게 하고, tanθ 의 분모·분자가 피타고라스 수를 이뤄 cosθ 가 유리수가 되게. 그림의 B·D 한 직선·직각 표시는 고정."
    creative: "(1) tanθ 만 묻기(환산 단계 제거 ★1~2) (2) 두 삼각형을 직선 AD 의 반대쪽에 두어 θ 가 두 각의 합이 되게(둔각 가능 · 부호 판단 추가 ★2) (3) 좌표평면에 두 직선 y=(3/2)x, y=(2/3)x 로 옮겨 기울기 → tan 사잇각으로 바꾸면 RT 골조 유지 ★2 (4) 한 변을 k 로 두고 tanθ 의 최댓값(산술·기하평균) ★3."
```

```yaml
- id: RPM-CALC2-0401
  page: 60
  vendor_label: "유형 06 삼각함수의 덧셈정리의 활용; 도형"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    AB = AC 인 이등변삼각형 ABC 에서 ∠A = α, ∠C = β 이고 tan(α+β) = −4/3 일 때 tanα 의 값. 그림 있음.
  category: "내각 합 α+2β=π → tan(α+β) = −tanβ → tanβ → α = π−2β → 배각 → 부호"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "이등변 조건 α+2β=π 로 주어진 tan(α+β) 를 tanβ = 4/3 으로 바꾸고, 다시 α = π−2β 로 tanα 를 −tan2β 로 환원(두 단 환원이 한 조건에서 나옴)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "도형 각 분해 tan 덧셈정리 — 삼각형 내각 합으로 조건 각을 한 각으로 환원한 뒤 배각"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    α+2β = π 이므로 α+β = π−β → tan(α+β) = −tanβ → tanβ = 4/3. 또 α = π−2β → tanα = −tan2β = −(8/3)/(1−16/9) = 24/7. 덧셈정리 자체보다 내각 합으로 조건을 갈아 끼우는 동치 변환(EQV d2)이 핵심이고, 마지막 부호(−tan2β 가 양수)가 함정. 벤더 중·M_total 5·d2 통찰 하나 → ★2 유지(★2~3 경계 · 통찰형).
  tier: star_2
  mechanism_primary: "α+2β=π → tan(α+β) = −tanβ → tanβ = 4/3 → α = π−2β → tanα = −tan2β = 24/7"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{24}{7}$'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0401.png"
  latex: latex-bank/rpm-calc2/items/0401.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "tan(α+β) 의 값(−4/3 → −3/4, −2, −1/2)을 바꿀 수 있음. 제약: tanβ = −tan(α+β) > 0 이어야 밑각이 예각이고, tanβ ≠ 1 이어야 tan2β 가 정의됨(직각이등변 제외) · 답 −tan2β 가 기약분수로 정리되게. 그림의 등변 표시·α 위치(꼭지각)·β 위치(밑각)는 고정."
    creative: "(1) tan(α+β) 대신 sin(α+β) 나 cos2β 를 주면 환산 한 단계 추가(★2) (2) 조건을 tan(α−β) 로 주면 α−β = π−3β 라 삼배각 또는 덧셈정리 두 번 필요(★3) (3) 원에 내접하는 사각형의 대각 보각 조건(α+γ=π)으로 골조를 옮기면 EQV 유지 ★3 (4) 이등변 대신 α:β 비를 주면 내각 합에서 각을 수치로 바로 확정 → 통찰 소멸 ★1."
```

### 유형 07 배각의 공식

```yaml
- id: RPM-CALC2-0402
  page: 61
  vendor_label: "유형 07 배각의 공식"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    0 < α < π/2, sinα = 1/4 일 때 csc2α 의 값.
  category: "sinα → cosα(범위로 부호) → sin2α 배각 → 역수·유리화"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "배각 공식 — 한 삼각비 값에서 2α 의 삼각비(역수 삼각함수 포함)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    cosα = √15/4 (제1사분면) → sin2α = 2·(1/4)(√15/4) = √15/8 → csc2α = 8/√15 = 8√15/15. 공식 대입 한 줄에 유리화. 대표문제지만 통찰 없음·M_total 4 → ★2 출발점에서 −1 → ★1.
  tier: star_1
  mechanism_primary: "sinα=1/4 → cosα=√15/4 → sin2α=√15/8 → csc2α = 8√15/15"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{8\sqrt{15}}{15}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0402.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "sinα 의 값(1/4 → 1/3, 2/5, 3/5)과 묻는 것(csc2α → sec2α, cot2α, sin2α). 제약: 범위 조건으로 cosα 부호가 확정돼야 하고, 유리화 결과가 짧게 정리되게(1−sin²α 가 제곱수/분모 꼴이면 근호 없이)."
    creative: "(1) α 를 제2사분면(π/2 < α < π)에 두어 cosα 부호 반전 → T-부호 추가 ★1~2 (2) sinα 대신 tanα 를 주면 sin·cos 환산이 앞에 붙음 ★2 (3) csc2α 값을 주고 sinα 를 거꾸로 묻기(sin²α 에 대한 이차식 · 범위로 기각 ★2~3 · BW+VF 요소)."
```

```yaml
- id: RPM-CALC2-0403
  page: 61
  vendor_label: "유형 07 배각의 공식"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    3sinθ − 2cosθ = 0 일 때 tan2θ 의 값. 5지선다.
  category: "일차 관계 → tanθ → tan 배각 공식"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "배각 공식 — sin·cos 일차 관계에서 tanθ 를 얻어 tan2θ"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    3sinθ = 2cosθ → tanθ = 2/3 → tan2θ = 2(2/3)/(1−4/9) = 12/5. 공식 한 번. 벤더 중하·M_total 4·통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "3sinθ−2cosθ=0 → tanθ = 2/3 → tan2θ = 2t/(1−t²) = 12/5"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "⑤"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0403.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수(3·2 → 4·3, 5·2, 1·2). 제약: tanθ ≠ ±1 (tan2θ 정의) · cosθ ≠ 0 · 답이 선택지에 맞는 기약분수."
    creative: "(1) sin2θ 나 cos2θ 를 묻기 → tan 에서 sin·cos 환산에 θ 범위(부호)가 필요 ★2 (2) 조건을 asinθ + bcosθ = 0 로 문자화해 tan2θ 를 a, b 로 표현(Mₐ↑ ★2) (3) tan(2θ + π/4) 처럼 덧셈정리와 이어 붙이기 ★2."
```

```yaml
- id: RPM-CALC2-0404
  page: 61
  vendor_label: "유형 07 배각의 공식"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    sinθ + cosθ = 1/3 일 때 sin2θ 의 값. 5지선다.
  category: "합의 제곱 → 1 + 2sinθcosθ → sin2θ"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "배각 공식 — sinθ±cosθ 의 제곱에서 sin2θ"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    양변 제곱 → 1 + 2sinθcosθ = 1/9 → sin2θ = 2sinθcosθ = −8/9. 제곱해서 2sinθcosθ 를 얻는 것은 표준 절차. 벤더 중하·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "(sinθ+cosθ)² = 1/9 → 1 + sin2θ = 1/9 → sin2θ = −8/9"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "①"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0404.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "합의 값(1/3 → 1/2, √2/2, −1/2). 제약: |sinθ+cosθ| ≤ √2 이고 그 제곱−1 이 [−1, 1] 안이어야 sin2θ 로 가능."
    creative: "(1) sinθ − cosθ 를 주면 부호가 반전(1 − sin2θ) ★1 (2) sin2θ 를 주고 sinθ + cosθ 를 묻되 θ 범위로 부호를 결정하게(T-부호 ★2) (3) sin⁴θ + cos⁴θ 나 sin³θ + cos³θ 로 확장(곱셈 공식 결합 ★2)."
```

```yaml
- id: RPM-CALC2-0405
  page: 61
  vendor_label: "유형 07 배각의 공식"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    함수 y = cos2x + 4sinx + 1 의 최댓값 M 과 최솟값 m 에 대해 M − m 의 값. 서술형.
  category: "cos2x = 1−2sin²x → sinx 이차식 → t 치환·범위 → 최대·최소"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "cos2x 를 1−2sin²x 로 골라 식 전체를 sinx 의 이차식으로 통일"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "배각 공식 — cos2x 를 sinx 로 통일한 이차함수의 제한 범위 최대·최소"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y = −2sin²x + 4sinx + 2, t = sinx ∈ [−1, 1] → y = −2(t−1)² + 4. 꼭짓점 t=1 이 범위 끝이라 M = 4 (t=1), m = −4 (t=−1), M−m = 8. 배각 공식 선택(RT d1)·치환·범위 제한(T-범위) 세 기법 사슬. 벤더 중·M_total 5 → −1 후보이나 기법 셋을 이어야 해 ★2 유지.
  tier: star_2
  mechanism_primary: "cos2x = 1−2sin²x → y = −2t²+4t+2 (t=sinx, |t|≤1) → 꼭짓점 t=1 → M=4·m=−4 → 8"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$8$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0405.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "cos2x 의 부호·sinx 계수(4 → 2, −4, 6)·상수항. 제약: 꼭짓점 t = (sinx 계수)/4 가 [−1, 1] 안인지 밖인지에 따라 최대·최소 위치가 바뀌므로 의도한 경우로 고정 · cos2x 와 sinx 항이 짝이어야 sin 통일이 됨(cosx 항이면 cos2x = 2cos²x−1 로)."
    creative: "(1) 계수를 줄여 꼭짓점이 (−1, 1) 안에 오게 하면 최대는 꼭짓점·최소는 끝점 → T-범위 강화 ★2 (2) x 범위를 0 ≤ x ≤ π/2 로 제한해 t ∈ [0, 1] ★2 (3) y = sin2x + 2(sinx + cosx) 꼴로 바꿔 t = sinx + cosx 치환(범위 [−√2, √2] · sin2x = t²−1) → RT 깊이 ↑ ★3."
```

### 유형 08 삼각함수의 극한

```yaml
- id: RPM-CALC2-0406
  page: 61
  vendor_label: "유형 08 삼각함수의 극한"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    x → π/4 일 때 (sinx − cosx)/(1 − tanx) 의 극한값. 5지선다.
  category: "0/0 → tanx 통분 → 공통 인수 약분 → −cosx 대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "0/0 꼴 삼각함수 극한 — tan 을 sin/cos 로 통분해 공통 인수 약분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    1 − tanx = (cosx − sinx)/cosx 이므로 식 = (sinx − cosx)·cosx/(cosx − sinx) = −cosx → −√2/2. 통분·약분·부호 정리·대입 네 단계(Mₛ 2)에 부호 함정. 대표문제·통찰 없음·M_total 5 → −1 후보이나 0/0 해소 조작이 유형의 골조라 ★2 유지.
  tier: star_2
  mechanism_primary: "tanx = sinx/cosx 통분 → 1−tanx = (cosx−sinx)/cosx → (sinx−cosx) 약분 → −cosx → −√2/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0406.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "극한점(π/4 → 5π/4 · 같은 인수, cos 값 부호만 바뀜)과 분자·분모 배치(1−tanx ↔ tanx−1 로 답 부호). 제약: 분자와 분모가 같은 인수 (sinx − cosx) 를 공유해야 0/0 이 약분됨 · 극한점에서 cosx ≠ 0."
    creative: "(1) (1 − tanx)/(sinx − cosx) 로 뒤집으면 −1/cosx ★1 (2) (sin²x − cos²x)/(1 − tan²x) 로 차수를 올려 공통 인수를 두 겹으로 ★2 (3) 극한점을 tan a = 1 인 일반 a 로 감추거나 x → π/4 대신 x → −3π/4 로 두어 부호 판단 강화 ★2."
```

```yaml
- id: RPM-CALC2-0407
  page: 61
  vendor_label: "유형 08 삼각함수의 극한"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x → 0 일 때 (1 − cosx)/sin²x 의 극한값.
  category: "sin²x = (1−cosx)(1+cosx) → 약분 → 1/(1+cosx)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "0/0 꼴 삼각함수 극한 — 1−cosx 와 sin²x 를 1−cos²x 로 잇는 약분"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    sin²x = 1 − cos²x = (1−cosx)(1+cosx) → 식 = 1/(1+cosx) → 1/2. 항등식 하나로 끝. 벤더 중하·M_total 4·통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "sin²x = (1−cosx)(1+cosx) → (1−cosx) 약분 → 1/(1+cosx) → 1/2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0407.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모를 sin²2x 나 sin²(x/2) 로 바꾸면 계수 비(1/8, 2)가 붙음. 제약: 분자 1−cosx 는 x² 차수이므로 분모도 2차(sin² 꼴) 유지 · 극한값이 유한하게."
    creative: "(1) sin²x/(1 − cosx) 로 뒤집기 → 2 ★1 (2) 분모를 x² 로 바꾸면 (1+cosx) 곱하기 기법이 필요한 유형 11 골조 ★2 (3) (1 − cos2x)/sin²x 처럼 배각을 얹으면 2 → ★2."
```

```yaml
- id: RPM-CALC2-0408
  page: 61
  vendor_label: "유형 08 삼각함수의 극한"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x → 0 일 때 (secx − 1)·cot²x 의 극한값. 5지선다.
  category: "sec·cot → sin·cos → (1−cosx)cosx/sin²x → 1−cos²x 인수분해 → 약분"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "0/0 꼴 삼각함수 극한 — 역수 삼각함수를 sin·cos 로 바꾼 뒤 1−cosx 약분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (1/cosx − 1)·cos²x/sin²x = (1−cosx)cosx/sin²x = cosx/(1+cosx) → 1/2. 역수 함수 변환·통분·인수분해·대입의 사슬(Mₛ 2). 벤더 중·M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "secx−1 = (1−cosx)/cosx, cot²x = cos²x/sin²x → cosx(1−cosx)/sin²x → cosx/(1+cosx) → 1/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0408.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "(secx − 1)cot²x → (cscx − cotx)cscx, (1 − cosx)csc²x 처럼 같은 골조의 다른 조합. 제약: sin·cos 로 바꾼 뒤 분자·분모의 x 차수가 같아야(둘 다 2차) 0 아닌 유한 극한."
    creative: "(1) (1 − secx)cot²x 로 부호 반전 ★2 (2) (secx − 1)/x² 로 바꾸면 (1+cosx) 곱하기의 유형 11 골조 ★2 (3) (secx − 1)cotx 처럼 차수를 일부러 어긋나게 해 극한 0 이 되는 함정(T-단위) ★2."
```

### 유형 09 $\lim\limits_{x\to 0}\dfrac{\sin x}{x}$ 꼴의 극한

```yaml
- id: RPM-CALC2-0409
  page: 62
  vendor_label: '유형 09 $\lim\limits_{x\to 0}\dfrac{\sin x}{x}$ 꼴의 극한'
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    x → 0 일 때 (sin2x − sin4x)/sin3x 의 극한값.
  category: "각 항을 sin kx/(kx)·kx 로 → 계수 비"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "기본 극한 계수 비 — sin ax 들의 합·차를 sin bx 로 나눈 극한"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    분자·분모를 x 로 나누면 (2 − 4)/3 = −2/3. sin kx/x → k 공식 세 번. 대표문제지만 통찰 없음·M_total 4 → ★2 출발점에서 −1 → ★1.
  tier: star_1
  mechanism_primary: "분자·분모를 x 로 나눔 → sin kx/x → k → (2−4)/3 = −2/3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-\dfrac{2}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0409.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 2·4·3 을 임의의 정수·유리수로(답 = (분자 계수 합)/(분모 계수)). 제약: 분모 계수 ≠ 0 · 분자 계수 합이 0 이면 답 0 이 되니 의도에 맞게 · 기약분수로."
    creative: "(1) 분모를 sin3x + sin5x 로 두어 계수 합끼리의 비 ★1 (2) sin2x − sin4x 를 합차 공식으로 풀려는 우회를 막는 발문(x 로 나누기만 강조) ★1 (3) 극한점을 x → π 로 바꾸면 치환·보각 부호가 붙어 유형 12 골조 ★2."
```

```yaml
- id: RPM-CALC2-0410
  page: 62
  vendor_label: '유형 09 $\lim\limits_{x\to 0}\dfrac{\sin x}{x}$ 꼴의 극한'
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x) = 2x, g(x) = sinx 에 대해 x → 0 일 때 f(g(x))/g(f(x)) 의 극한값. 5지선다.
  category: "합성 전개 → 2sinx/sin2x → 계수 비"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "기본 극한 계수 비 — 합성함수를 풀어 쓴 sin ax/sin bx"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f(g(x)) = 2sinx, g(f(x)) = sin2x → 2sinx/sin2x → 2/2 = 1. 합성 전개 뒤 공식 한 번. 벤더 중하·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "f(g(x)) = 2sinx, g(f(x)) = sin2x → 2·(sinx/x)/(sin2x/x) → 2/2 = 1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0410.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f(x) = ax 의 a 나 g(x) = sin bx 의 b 를 바꿔도 f∘g 와 g∘f 가 모두 abx 차수라 답은 항상 1 → 계수만 바꾸는 변형은 답이 불변임에 주의. 답을 바꾸려면 두 합성의 비대칭(예: f(g(x))/g(g(x)) → 2)이 필요."
    creative: "(1) f(g(x))/g(g(x)) = 2sinx/sin(sinx) 처럼 중첩을 비대칭으로 → 답 2 ★1~2 (2) f(x) = x − x² 같은 비선형 f 로 두면 인수분해 뒤 인수 비(0416 골조) ★2 (3) 답이 늘 1 인 이유(f 가 원점 지나는 일차함수)를 묻는 서술 변형 ★2."
```

```yaml
- id: RPM-CALC2-0411
  page: 62
  vendor_label: '유형 09 $\lim\limits_{x\to 0}\dfrac{\sin x}{x}$ 꼴의 극한'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x → 0 일 때 (1 − x)^{1/sinx} 의 극한값.
  category: "지수를 (−1/x)·(−x/sinx) 로 분해 → 밑은 e 정의 꼴 → 지수 극한 −1"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "지수 1/sinx 를 (1/(−x))·(−x/sinx) 로 쪼개 (1−x)^{1/(−x)} → e 와 −x/sinx → −1 두 극한을 드러냄"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "기본 극한 계수 비 — (1+ax)^{1/sin bx} 꼴을 e 의 정의와 sinx/x 로 분해"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (1−x)^{1/sinx} = [(1−x)^{1/(−x)}]^{−x/sinx} → e^{−1}. 지수 재배열 착안(RT d1)과 −x 부호 관리(T-부호). e 정의는 앞 단원 도구지만 이 유형에서 표준 결합이라 XU 로 세지 않음. 벤더 중·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "(1−x)^{1/sinx} = [(1−x)^{−1/x}]^{−x/sinx} → 밑 → e · 지수 → −1 → 1/e"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{e}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0411.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 (1 − x) → (1 + ax), 지수 1/sinx → 1/sin bx 또는 1/tan bx (답 e^{a/b}). 제약: 밑이 1 + (→0) 꼴이어야 e 정의로 가고, a 의 부호에 따라 답이 e 의 음의 거듭제곱이 됨을 관리."
    creative: "(1) (1 + sinx)^{1/x} 처럼 sin 을 밑으로 옮기면 e ★2 (2) (cosx)^{1/x²} 은 1 − cosx 와 결합해 e^{−1/2} → 유형 11 골조 얹음 ★3 (3) 로그를 취해 lim ln(1−x)/sinx 로 푸는 갈래와 지수 재배열 갈래를 비교시키면 SC 요소 ★2~3."
```

```yaml
- id: RPM-CALC2-0412
  page: 62
  vendor_label: '유형 09 $\lim\limits_{x\to 0}\dfrac{\sin x}{x}$ 꼴의 극한'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x → 0 일 때 (sinx + sin2x + sin3x + … + sin100x)/x 의 극한값.
  category: "항별 sin kx/x → k → 1 부터 100 까지의 합"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "기본 극한 계수 비 — sin kx/x 의 합을 Σk 로"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    각 항 sin kx/x → k 이므로 1 + 2 + … + 100 = 5050. 공식은 하나지만 100 항을 일반화해 합으로 넘기는 한 단계가 있다. 벤더 중·M_total 4 → −1 후보이나 일반화 단계를 인정해 ★2 유지. [분류 이슈] 공식 한 번짜리라 ★1 로 봐도 무방 — 후보 ★1/★2.
  tier: star_2
  mechanism_primary: "항별 sin kx/x → k → Σ_{k=1}^{100} k = 5050"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$5050$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0412.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "항 수(100 → 50, 20, n)와 계수 패턴(홀수만 → 제곱수 합, 등차 계수). 제약: 각 항이 sin(kx)/x → k 이므로 답은 계수의 합 · 분모가 sin x 여도 동일."
    creative: "(1) 계수를 등비(sinx + sin2x + sin4x + … + sin2^n x)로 바꿔 등비합 ★2 (2) 항 수 n 을 두고 극한값이 210 이 되는 n 을 묻기(역방향 · BW d1 ★2) (3) 분자를 곱 sinx·sin2x·…·sin nx, 분모를 x^n 으로 바꾸면 n! ★3 (4) 분모를 tan(x/2) 로 두어 2·Σk ★2."
```

### 유형 10 $\lim\limits_{x\to 0}\dfrac{\tan x}{x}$ 꼴의 극한

```yaml
- id: RPM-CALC2-0413
  page: 62
  vendor_label: '유형 10 $\lim\limits_{x\to 0}\dfrac{\tan x}{x}$ 꼴의 극한'
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    x → 0 일 때 (tan4x + tan5x)/(1 − e^{3x}) 의 극한값. 5지선다.
  category: "분자 tan kx/x 합 → 분모 −(e^{3x}−1)/x → 계수 비·부호"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "기본 극한 계수 비 — tan ax/x 와 (e^{bx}−1)/x 의 혼합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분자/x → 4 + 5 = 9, 분모/x = −(e^{3x}−1)/x → −3, 답 −3. tan 과 e^x−1 두 공식에 분모 부호 정리(T-부호). 대표문제·M_total 5 → ★2 유지(공식 둘과 부호 정리를 이어야 함).
  tier: star_2
  mechanism_primary: "분자·분모 ÷ x → (tan4x/x + tan5x/x) → 9 · −(e^{3x}−1)/x → −3 → −3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0413.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 4·5·3 임의(답 −(a+b)/c). 제약: 분모 1 − e^{cx} 의 부호 반전이 답 부호를 정함 · 기약분수 또는 정수로 정리."
    creative: "(1) 분모를 ln(1 + 3x) 로 바꾸면 부호 함정 제거 ★2 (2) 분모를 1 − cos3x 로 바꾸면 차수(1 대 2)가 어긋나 발산 → T-단위 함정 ★2 (3) 분자를 tan4x − tan5x 로 두어 답 부호 뒤집기 ★2 (4) 분모 e^{3x} − e^{−3x} 로 두 지수 결합 ★2."
```

```yaml
- id: RPM-CALC2-0414
  page: 62
  vendor_label: '유형 10 $\lim\limits_{x\to 0}\dfrac{\tan x}{x}$ 꼴의 극한'
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x → 0 일 때 tan(tan2x)/tan3x 의 극한값. 5지선다.
  category: "중첩 tan → tan(tan2x)/tan2x · tan2x/tan3x → 1 · 2/3"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "기본 극한 계수 비 — 중첩된 tan(tan ax)/tan bx 를 안쪽 인수로 나눠 잇기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    tan(tan2x)/tan2x → 1 (tan2x → 0), tan2x/tan3x → 2/3, 곱 2/3. 인수를 곱하고 나누는 표준 조작 두 번. 벤더 중하·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "tan(tan2x)/tan2x → 1 · tan2x/tan3x → 2/3 → 2/3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "③"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0414.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "안쪽 계수 2 와 분모 계수 3 을 임의로(답 = 안쪽 계수/분모 계수). 제약: 안쪽 인수 tan2x 가 0 으로 가야 tan(u)/u → 1 이 성립."
    creative: "(1) sin(tan2x)/tan(sin3x) 처럼 sin·tan 을 섞기 ★1~2 (2) 세 겹 중첩 tan(tan(tan x))/x ★2 (3) x → ∞ 로 옮겨 x·tan(tan(2/x)) 로 두면 유형 13 치환이 앞에 붙음 ★2."
```

```yaml
- id: RPM-CALC2-0415
  page: 62
  vendor_label: '유형 10 $\lim\limits_{x\to 0}\dfrac{\tan x}{x}$ 꼴의 극한'
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x → 0 일 때 tan(3x² + x)/sin(x² + 2x) 의 극한값.
  category: "인수 u=3x²+x, v=x²+2x 로 나눠 곱하기 → tan u/u · v/sin v · u/v → 다항식 비"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "기본 극한 계수 비 — 인수가 다항식인 tan(p(x))/sin(q(x)) 의 인수 비"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    tan u/u → 1, v/sin v → 1 이므로 극한은 u/v = (3x²+x)/(x²+2x) = (3x+1)/(x+2) → 1/2. 인수 분리 두 번에 다항식 약분까지 네 단계(Mₛ 2). 벤더 중하·M_total 5 → 중하 범위(★1~2)의 위쪽 ★2.
  tier: star_2
  mechanism_primary: "tan u/u · v/sin v · u/v (u=3x²+x, v=x²+2x) → 1·1·(3x+1)/(x+2) → 1/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{2}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0415.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 다항식의 계수(답 = 두 다항식의 x 계수 비 1/2). 제약: 두 다항식 모두 상수항이 0 이어야 인수 → 0 이고, x 계수가 둘 다 0 이 아니어야 답이 그 비로 떨어짐(둘 다 0 이면 x² 계수 비)."
    creative: "(1) 한쪽에 상수항을 넣어 0/0 이 아니게 만들면 그대로 대입(함정 ★2) (2) x 항을 없애 x² 끼리로 두면 답 3 ★2 (3) sin(x² + 2x) 대신 1 − cos(x² + 2x) 로 바꾸면 차수가 어긋나 발산 ★2~3 (4) tan(x² + x)/sin(x³ + x) 처럼 차수 다른 다항식 ★2."
```

```yaml
- id: RPM-CALC2-0416
  page: 62
  vendor_label: '유형 10 $\lim\limits_{x\to 0}\dfrac{\tan x}{x}$ 꼴의 극한'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x) = x² − 2x 에 대해 x → 0 일 때 f(tanx)/tan f(x) 의 극한값. 5지선다.
  category: "f(tanx) 인수분해 → f(x)/tan f(x) → 1 → tanx/x · (tanx−2)/(x−2) → 1"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "기본 극한 계수 비 — 이차 f 와 tan 의 합성 f(tanx)/tan f(x) 를 인수별 비로"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f(tanx) = tanx(tanx − 2), tan f(x) 는 f(x)/tan f(x) → 1 로 f(x) = x(x−2) 로 바꿈 → (tanx/x)·(tanx−2)/(x−2) → 1·(−2)/(−2) = 1. 인수분해·인수 분리·부호(−2/−2)까지 대수 처리가 있어 Mₖ 2. 통찰은 없고 벤더 중·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "f(tanx) = tanx(tanx−2) · tan f(x) ~ f(x) = x(x−2) → tanx/x · (tanx−2)/(x−2) → 1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0416.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f(x) = x² − ax 의 a 를 바꿔도 (tanx − a)/(x − a) → 1 이라 답은 항상 1 → 계수만 바꾸는 변형은 답 불변. 답을 바꾸려면 안쪽 인수를 tan2x 로(→ 2) 하거나 분모를 sin f(x) 가 아닌 tan f(3x) 처럼 비대칭으로. 제약: f(0) = 0 이어야 0/0."
    creative: "(1) f(tan2x)/tan f(x) 로 안쪽 계수를 달리해 답 2 ★2 (2) f(0) ≠ 0 인 f 를 주면 0/0 이 아니라 바로 대입되는 함정 ★2 (3) f(0)=0 인 일반 다항식 f 에 대해 답이 늘 1 임을 미분계수 f'(0) 로 설명하게 하면 RT d2 ★3."
```

### 유형 11 $1-\cos x$를 포함한 극한

```yaml
- id: RPM-CALC2-0417
  page: 63
  vendor_label: '유형 11 $1-\cos x$를 포함한 극한'
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    x → 0 일 때 (cosx − 1)/(x·sin3x) 의 극한값. 5지선다.
  category: "부호 정리 → (1−cosx)/x² → 1/2 · x/sin3x → 1/3 → 곱"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "1−cosx 극한 — (1+cosx) 곱하기로 sin²x/x² 를 만들고 sin bx 계수 비와 결합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    −(1−cosx)/x² · x/sin3x → −(1/2)(1/3) = −1/6. (1+cosx) 를 곱해 sin²x 로 바꾸는 유형 골조에 sin3x 계수 비와 부호 정리(T-부호)가 붙는다. 대표문제·M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "(cosx−1) = −(1−cosx) → (1−cosx)/x² → 1/2 · x/sin3x → 1/3 → −1/6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0417.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "sin3x 의 계수(답 −1/(2b))·분자 부호·x 대신 2x. 제약: 분자 1 − cosx 는 x² 차수이므로 분모의 총 차수를 2 로 맞춰야 유한 극한."
    creative: "(1) 분모를 sin²3x 로 바꾸면 −1/18 ★2 (2) 분자를 cos2x − 1 로 두어 배각 계수 4 결합 ★2 (3) 분모를 x·tanx − x² 처럼 차수를 감춘 꼴로 두면 인수분해가 앞에 붙음 ★3."
```

```yaml
- id: RPM-CALC2-0418
  page: 63
  vendor_label: '유형 11 $1-\cos x$를 포함한 극한'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x → 0 일 때 (cos³x − cos²x − cosx + 1)/x⁴ 의 극한값. 5지선다.
  category: "cosx 의 삼차식 인수분해 (t−1)²(t+1) → (1−cosx)²(1+cosx)/x⁴ → (1/2)²·2"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "cosx = t 로 보고 t³ − t² − t + 1 을 묶어 (t−1)²(t+1) 로 인수분해해 (1−cosx)² 와 x⁴ 의 차수를 맞춤"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "1−cosx 극한 — cosx 다항식을 인수분해해 (1−cosx)^n/x^{2n} 으로"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    t³ − t² − t + 1 = t²(t−1) − (t−1) = (t−1)²(t+1) → (1−cosx)²(1+cosx)/x⁴ = [(1−cosx)/x²]²·(1+cosx) → (1/4)·2 = 1/2. 묶음 인수분해 착안(RT d1)과 그 뒤 두 번의 1−cosx 처리(Mₖ 2). 벤더 중·M_total 6·d1 하나 → ★2 (★2~3 경계).
  tier: star_2
  mechanism_primary: "cosx=t → (t−1)²(t+1) → [(1−cosx)/x²]²·(1+cosx) → (1/2)²·2 = 1/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0418.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "다항식을 (t−1)²(t+k) 꼴로 다시 짜면 답 (1/4)(1+k) · 분모 x⁴ 고정. 제약: (t−1)² 인수가 있어야 x⁴ 와 차수가 맞고, (t−1) 하나뿐이면 분모를 x² 로 · 나머지 인수는 x=0 에서 0 이 아니어야 함."
    creative: "(1) (t−1)(t+1) 꼴 다항식에 분모 x² 로 두면 답 −1 ★2 (2) (1 − cosx)³/x⁶ 로 세제곱 ★2 (3) sin²x(1 − cosx)/x⁴ 처럼 sin 과 1−cos 혼합 ★2 (4) 인수분해 대신 1 − cosx = 2sin²(x/2) 반각으로 푸는 갈래를 열어 두면 SC 요소 ★3."
```

```yaml
- id: RPM-CALC2-0419
  page: 63
  vendor_label: '유형 11 $1-\cos x$를 포함한 극한'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x → 0 일 때 x³/(tanx − sinx) 의 극한값.
  category: "tanx − sinx = sinx(1−cosx)/cosx → x/sinx · x²/(1−cosx) · cosx → 1·2·1"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "1−cosx 극한 — tanx − sinx 를 sinx(1−cosx)/cosx 로 묶어 x³ 과 차수 맞추기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    tanx − sinx = sinx(1/cosx − 1) = sinx(1−cosx)/cosx 이므로 식 = cosx·(x/sinx)·(x²/(1−cosx)) → 1·1·2 = 2. sinx 공통 인수로 묶는 표준 정리 뒤 두 공식. 벤더 중·M_total 5 → ★2 유지(1−cosx 역수 2 를 x² 차수와 맞추는 감각 필요).
  tier: star_2
  mechanism_primary: "tanx−sinx = sinx(1−cosx)/cosx → x³cosx/(sinx(1−cosx)) → (x/sinx)(x²/(1−cosx))cosx → 2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$2$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0419.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x³ 의 계수·tan2x − sin2x 처럼 각 계수(답 2/b³·… 차수 3 유지)·분자·분모 자리 바꿈(→ 1/2). 제약: tanx − sinx 는 x³/2 차수이므로 분자는 3차(또는 x·sin²x 같은 3차 동치)로."
    creative: "(1) (tanx − sinx)/x³ 로 뒤집기 → 1/2 ★2 (2) (tanx − sinx)/(1 − cosx) 로 두면 차수가 어긋나 극한 0 → T-단위 함정 ★2 (3) secx − cosx = sin²x/cosx 로 골조를 옮겨 (secx − cosx)/x² → 1 ★2."
```

```yaml
- id: RPM-CALC2-0420
  page: 63
  vendor_label: '유형 11 $1-\cos x$를 포함한 극한'
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    x → 0 일 때 (1 − cos kx)/(4x²) = 7/2 를 만족시키는 양수 k 의 값. 서술형.
  category: "(1−cos kx)/(kx)² → 1/2 → 극한 = k²/8 → k² = 28 → 양수 k"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "1−cosx 극한 — (1−cos kx)/x² 의 극한값 조건으로 계수 k 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (1−cos kx)/x² = k²·(1−cos kx)/(kx)² → k²/2, 나누기 4 → k²/8 = 7/2 → k² = 28 → k = 2√7 (k > 0 · T-부호). 공식 한 번 뒤 방정식. 매개변수 k 로 Mₐ 2. 벤더 중·M_total 6·통찰 없음 → ★2.
  tier: star_2
  mechanism_primary: "(1−cos kx)/(4x²) → k²/8 → k²/8 = 7/2 → k² = 28 → k = 2√7"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2\sqrt{7}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0420.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모 계수 4·극한값 7/2·k 의 부호 조건(양수 → 음수·정수). 제약: k² = 8·(극한값) 이 양수여야 하고 답이 근호로 정리되게 · 극한값을 정수 k 가 나오도록 고르면 ★1~2."
    creative: "(1) sin²kx/(1 − cosx) = a 로 배치하면 2k² ★2 (2) k 를 정수로 제한하고 조건을 부등식(극한값 ≤ 6)으로 주어 후보를 걸러내기 → VF 요소 ★3 (3) 극한값을 문자 a 로 두고 k 를 a 로 표현(Mₐ↑ ★2) (4) 1 − cos kx 대신 1 − cos(kx)·cos x 로 두 항 결합 ★3."
```

### 유형 12 치환을 이용한 삼각함수의 극한: $x\to a$일 때

```yaml
- id: RPM-CALC2-0421
  page: 63
  vendor_label: '유형 12 치환을 이용한 삼각함수의 극한: $x\to a$일 때'
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    x → π 일 때 (1 + cosx)/((x − π)·sinx) 의 극한값. 5지선다.
  category: "x−π = t 치환 → cosx = −cos t, sinx = −sin t → −(1−cos t)/(t sin t) → −1/2"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "치환 극한(x→a) — x−π = t 로 옮기고 보각 공식으로 부호 정리한 1−cos 꼴"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    t = x−π → cos(t+π) = −cos t, sin(t+π) = −sin t → (1−cos t)/(−t sin t) = −(1−cos t)/t² · t/sin t → −1/2. 치환·보각 부호(T-부호)·1−cos 처리의 사슬. 대표문제·M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "x−π = t → 1+cosx = 1−cos t, sinx = −sin t → −(1−cos t)/t² · t/sin t → −1/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0421.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "극한점 π → −π, 3π (홀수 배는 부호 반전 · 2π 배는 유지)와 (x−π) 의 계수. 제약: 치환 뒤 1 + cosx 가 1 − cos t 로 바뀌어 0 으로 가야 0/0 · 답 부호는 sin 의 반전 여부가 정함."
    creative: "(1) x → π/2 로 옮기면 sin ↔ cos 교환 골조 ★2 (2) 분모를 (x−π)² 로 두면 (1−cos t)/t² 만 남아 1/2 ★2 (3) 치환 없이 1 + cosx = 1 − cos(x−π) 를 바로 보는 대칭 활용을 유도하면 SYM d1 ★2~3."
```

```yaml
- id: RPM-CALC2-0422
  page: 63
  vendor_label: '유형 12 치환을 이용한 삼각함수의 극한: $x\to a$일 때'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x → 2π 일 때 sinx/(x² − 4π²) 의 극한값. 5지선다.
  category: "x−2π = t 치환 → sin t/(t(t+4π)) → 1/(4π)"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "치환 극한(x→a) — x−2π = t 치환과 분모 인수분해 (x−2π)(x+2π)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    t = x−2π → sin(t+2π) = sin t, x²−4π² = t(t+4π) → (sin t/t)·1/(t+4π) → 1/(4π). 치환·주기 활용·인수분해 세 단계. 벤더 중·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "x−2π = t → sinx = sin t · x²−4π² = t(t+4π) → sin t/t · 1/(t+4π) → 1/(4π)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0422.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "극한점 2π → π (sin 부호 반전 · 답 −1/(2π)), 4π · 분모 x² − a² 의 a. 제약: 분모가 (x−a)(x+a) 로 인수분해되어 1/(2a) 인수가 남아야 함 · sin 의 주기·보각 부호를 극한점에 맞춤."
    creative: "(1) 분자 sin(x/2) 로 두면 sin(t/2 + π) = −sin(t/2) 반전 ★2 (2) 분모 x² − 4π² 를 tan(x−2π)·(x+2π) 로 바꾸기 ★2 (3) 분모를 x² − 5πx + 6π² 처럼 인수분해가 필요한 이차식으로 ★2."
```

```yaml
- id: RPM-CALC2-0423
  page: 63
  vendor_label: '유형 12 치환을 이용한 삼각함수의 극한: $x\to a$일 때'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x → 1 일 때 (e^{2−x} − e)/sin(x − 1) 의 극한값. 5지선다.
  category: "x−1 = t 치환 → e(e^{−t} − 1)/sin t → e · (e^{−t}−1)/(−t) · (−t/sin t) → −e"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "치환 극한(x→a) — x−1 = t 치환 뒤 e^x−1 과 sin 의 계수 비"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    t = x−1 → e^{1−t} − e = e(e^{−t} − 1) → e·[(e^{−t}−1)/(−t)]·(−t/sin t) → e·1·(−1) = −e. 치환·공통 인수 e 묶기·부호(−t · T-부호). 지수 극한 결합은 표준 도구. 벤더 중·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "x−1 = t → e^{2−x} − e = e(e^{−t} − 1) → e · (e^{−t}−1)/(−t) · (−t)/sin t → −e"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0423.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 2−x → a−x (답 −e^{a−1}) · 분모 sin(x−1) → sin 2(x−1) (답 절반). 제약: 분자의 상수 e 는 e^{2−x} 의 x=1 값과 같아야 0/0 · 지수의 x 계수 부호가 답 부호를 정함."
    creative: "(1) 분자를 ln(2 − x) 로 바꾸면 −1 ★2 (2) 분모를 tan(x−1)·(x+1) 로 두어 인수 하나 더 ★2 (3) 미분계수 정의로 보면 −(e^{2−x})' 의 x=1 값이므로 이후 도함수 단원과 잇는 SC 갈래 ★3."
```

### 유형 13 치환을 이용한 삼각함수의 극한: $x\to\infty$일 때

```yaml
- id: RPM-CALC2-0424
  page: 64
  vendor_label: '유형 13 치환을 이용한 삼각함수의 극한: $x\to\infty$일 때'
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    x → ∞ 일 때 x·sin(5/x) 의 극한값.
  category: "5/x = t (t→0+) → 5·sin t/t → 5"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "치환 극한(x→∞) — a/x = t 치환한 x·sin(a/x)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    t = 5/x 로 두면 x = 5/t 이고 t → 0+ 이므로 5·sin t/t → 5. 치환 한 번에 공식 한 번. 대표문제지만 통찰 없음·M_total 4 → ★2 출발점에서 −1 → ★1.
  tier: star_1
  mechanism_primary: "5/x = t → x sin(5/x) = 5·sin t/t → 5"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$5$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0424.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 5 임의(답 = 계수) · sin → tan 동일. 제약: x → −∞ 로 바꿔도 sin 이 홀함수라 답 유지 · 계수가 음수면 답도 음수."
    creative: "(1) x·tan(5/x) ★1 (2) x²(1 − cos(5/x)) → 25/2 로 1−cos 결합 ★2 (3) 2x·sin(3/x)·cos(1/x) 처럼 극한 1 인 인수를 곁들이기 ★2."
```

```yaml
- id: RPM-CALC2-0425
  page: 64
  vendor_label: '유형 13 치환을 이용한 삼각함수의 극한: $x\to\infty$일 때'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x → ∞ 일 때 sin(4/x)·cot(5/x) 의 극한값.
  category: "1/x = t 치환 → sin4t·cos5t/sin5t → (sin4t/4t)(5t/sin5t)(4/5)cos5t → 4/5"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "치환 극한(x→∞) — 1/x = t 치환 뒤 cot 을 cos/sin 으로 풀어 계수 비"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    t = 1/x → sin4t·cot5t = sin4t·cos5t/sin5t → (sin4t/4t)·(5t/sin5t)·(4/5)·cos5t → 4/5. 치환·cot 변환·계수 비 세 단계. 벤더 중·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "1/x = t → sin4t·cos5t/sin5t → (sin4t/4t)(5t/sin5t)(4/5)cos5t → 4/5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{4}{5}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0425.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "4·5 를 임의로(답 = 비) · sin ↔ tan. 제약: cot(5/x) 는 cos/sin 으로 풀어야 하며 cos5t → 1 로 소거 · 두 인수의 차수(1 대 −1)가 상쇄돼 0 아닌 유한값."
    creative: "(1) tan(4/x)·cot(5/x) 로 두면 tan·cot 역수 관계로 바로 4/5 ★1~2 (2) x·sin(4/x)·cot(5/x) 로 x 를 곱하면 차수가 안 맞아 발산하는 함정 ★2 (3) sin(4/x)/(1 − cos(5/x)) → 발산, sin²(4/x)/(1 − cos(5/x)) → 32/25 로 차수 맞추기 ★2~3."
```

```yaml
- id: RPM-CALC2-0426
  page: 64
  vendor_label: '유형 13 치환을 이용한 삼각함수의 극한: $x\to\infty$일 때'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x → ∞ 일 때 x°·tan(1/(2x)) 의 극한값 (x° 는 각의 도 단위 표기). 5지선다.
  category: "x° = πx/180 라디안 환산 → 1/(2x) = t 치환 → (π/(360t))·tan t → π/360"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "치환 극한(x→∞) — 도 단위를 라디안으로 환산한 뒤 1/(2x) = t 치환"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x° = (π/180)x 이므로 식 = (πx/180)·tan(1/(2x)). t = 1/(2x) 로 두면 x = 1/(2t) → (π/(360t))·tan t → π/360. 핵심은 단위 환산(T-단위)과 x° 표기 해석(T-표기)의 함정 둘(Mₜ 2). 통찰은 없고 벤더 중·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "x° = πx/180 → (πx/180)tan(1/(2x)) → t = 1/(2x) → (π/360)(tan t/t) → π/360"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0426.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "tan(1/(2x)) 의 계수(1/2 → 1/3, 2)와 x° → (2x)°, (3x)°. 제약: 도 → 라디안 환산 π/180 이 반드시 들어가 답이 π/(180·k) 꼴 · 선택지도 π 의 분수로."
    creative: "(1) x → 0 에서 sin(x°)/x 를 묻는 기본형 → π/180 ★2 (2) 단위 함정을 없애 x·tan(1/(2x)) 로 두면 유형 13 기본 ★1 (3) x°·sin(1/x)·cos(1/x) 같이 sin·cos 곱으로 배각까지 얹기 ★2~3."
```

```yaml
- id: RPM-CALC2-0427
  page: 64
  vendor_label: '유형 13 치환을 이용한 삼각함수의 극한: $x\to\infty$일 때'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x → ∞ 일 때 ((2x + 1)/4)·tan(4/(x − 2)) 의 극한값. 5지선다.
  category: "(2x+1)/(x−2) 와 ((x−2)/4)·tan(4/(x−2)) 로 분리 → 2 · 1"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "치환 극한(x→∞) — 일차식 계수 비와 (x−b)·tan(a/(x−b)) 인수 분리"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    식 = (2x+1)/(x−2) · [(x−2)/4]·tan(4/(x−2)) → 2·1 = 2. 치환 t = 4/(x−2) 로 통째로 바꾸면 x = 4/t + 2 대입 정리가 무거워지므로(Mₖ 2) 인수를 분리하는 정리가 필요. 통찰 없음·벤더 중·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "(2x+1)/4 · tan(4/(x−2)) = (2x+1)/(x−2) · (x−2)/4 · tan(4/(x−2)) → 2 · 1 = 2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0427.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "(ax+b)/c · tan(d/(x−e)) 의 a·c·d·e (답 ad/c · b·e 는 답에 영향 없음). 제약: 답이 선택지에 맞는 유리수가 되게 · tan 의 인수와 앞의 일차식이 서로 다른 평행이동(x, x−2)이어야 분리 조작이 의미 있음."
    creative: "(1) 분모 4 를 없애 답 8 ★2 (2) 일차식을 √(4x²+1) 로 바꿔 근호 처리 ★2 (3) x → −∞ 로 바꿔 x−2 < 0 이어도 tan 홀함수라 답이 유지되는지 묻기(부호 함정) ★2 (4) tan 대신 sin(4/(x−2))·sec(1/x) 처럼 극한 1 인 인수 추가 ★2."
```

### 유형 14 삼각함수의 극한과 미정계수의 결정

```yaml
- id: RPM-CALC2-0428
  page: 64
  vendor_label: "유형 14 삼각함수의 극한과 미정계수의 결정"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    x → 0 일 때 ln(a + 3x)/tanx = b 를 만족시키는 상수 a, b 에 대해 a + b 의 값. 5지선다.
  category: "분모 → 0 ⇒ 분자 → 0 ⇒ ln a = 0 ⇒ a = 1 → ln(1+3x)/tanx → 3 = b"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "극한 미정계수 — 분모→0 이면 분자→0 으로 상수를 정한 뒤 ln(1+x)·tan x 계수 비"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    극한값이 존재하고 분모 → 0 이므로 분자 → 0: ln a = 0 → a = 1. 그러면 ln(1+3x)/tanx = [ln(1+3x)/3x]·(x/tanx)·3 → 3 = b, a+b = 4. 미정계수 표준 절차(수학Ⅱ 극한과 같은 골조)에 두 기본 극한 · 매개변수 둘로 Mₐ 2. 대표문제·M_total 6·통찰 없음 → ★2 유지.
  tier: star_2
  mechanism_primary: "분모→0 ⇒ 분자→0 ⇒ a = 1 → ln(1+3x)/(3x) · x/tanx · 3 → b = 3 → a+b = 4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0428.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "ln(a + 3x) 의 계수 3 · 분모 tanx → sin2x. 제약: a 는 ln a = 0 으로 항상 1 이므로 답의 변화는 b = (분자 계수)/(분모 계수) 에서만 · 정수 선택지."
    creative: "(1) ln(a + 3x) → e^{a+3x} − 1 로 두면 a 조건이 e^a = 1 → a = 0 ★2 (2) 극한값 b 를 주고 분자 계수를 묻는 역방향 ★2 (3) 분모를 sin(x − a) 로 두어 극한점과 a 를 연동(0430 골조) ★2 (4) 분자 ln(a + 3x) − ln a 처럼 a 가 사라지지 않게 두면 답이 a 에 의존 → Mₐ↑ ★2~3."
```

```yaml
- id: RPM-CALC2-0429
  page: 64
  vendor_label: "유형 14 삼각함수의 극한과 미정계수의 결정"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    x → 0 일 때 sin2x/(√(ax + b) − 1) = 3 을 만족시키는 상수 a, b 에 대해 ab 의 값. 서술형.
  category: "분자 → 0 · 극한 ≠ 0 ⇒ 분모 → 0 ⇒ b = 1 → 유리화 → sin2x(√(ax+1)+1)/(ax) → 4/a = 3"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "극한 미정계수 — 분자→0·극한값≠0 이면 분모→0 으로 상수를 정한 뒤 유리화와 sin 계수 비"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분자 → 0 인데 극한이 0 이 아닌 3 이므로 분모 → 0: √b − 1 = 0 → b = 1. 유리화하면 sin2x(√(ax+1)+1)/(ax) = (sin2x/2x)·(2/a)·(√(ax+1)+1) → 4/a = 3 → a = 4/3, ab = 4/3. 조건 방향이 0428 과 반대(극한값 ≠ 0 조건 필요 · T-범위)이고 유리화 대수(Mₖ 2)가 붙어 M_total 7. 통찰은 없어 벤더 중 → ★2. [분류 이슈] 절차형이지만 M_total 7·서술형이라 ★3 으로 봐도 무방 — 후보 ★2/★3.
  tier: star_2
  mechanism_primary: "극한 3 ≠ 0 · 분자→0 ⇒ 분모→0 ⇒ b = 1 → 유리화 → (sin2x/2x)·(2/a)·(√(ax+1)+1) → 4/a = 3 → a = 4/3 → ab = 4/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{4}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0429.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "극한값 3 · 분자 sin2x 의 계수 · 근호 안 상수(√(ax+b) − 2 이면 b = 4). 제약: b 는 √b = (빼는 상수) 로 고정되고 a = 2·(분자 계수)·… 이 유리수가 되게 · 극한값이 0 이 아니어야 분모→0 논리가 성립."
    creative: "(1) 분모 √(ax + b) − 2 로 두어 b = 4 · 유리화 인수 4 ★2 (2) 분자·분모를 뒤집어 (√(ax+b) − 1)/sin2x = 3 으로 두면 조건 방향이 0428 형(분모→0 ⇒ 분자→0)으로 바뀜 ★2 (3) 분모를 √(ax + b) − √(cx + d) 두 근호로 두면 조건 둘을 한 식으로 결합하는 CON 요소 ★3 (4) 극한값을 문자로 두고 ab 를 그 문자로 표현 ★2."
```

```yaml
- id: RPM-CALC2-0430
  page: 64
  vendor_label: "유형 14 삼각함수의 극한과 미정계수의 결정"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x → a 일 때 (3^x − 1)/(2·sin(x − a)) = ln b 를 만족시키는 상수 a, b (b > 0) 에 대해 a − b 의 값.
  category: "분모 → 0 ⇒ 3^a − 1 = 0 ⇒ a = 0 → (3^x−1)/x · x/sinx · 1/2 → (ln 3)/2 = ln b → b = √3"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "극한 미정계수 — 극한점 a 자체가 미정계수인 (c^x−1)/sin(x−a) 꼴"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분모 → 0 이므로 분자 → 0: 3^a = 1 → a = 0. 그러면 (3^x − 1)/(2sinx) = [(3^x−1)/x]·(x/sinx)·(1/2) → (ln 3)/2 = ln b → b = 3^{1/2} = √3, a − b = −√3. 극한점이 미정계수라는 점과 (ln 3)/2 를 ln √3 으로 읽는 로그 정리(T-표기)가 변별 지점. 벤더 중·M_total 6·통찰 없음 → ★2.
  tier: star_2
  mechanism_primary: "분모→0 ⇒ 3^a = 1 ⇒ a = 0 → (3^x−1)/x · x/sinx · 1/2 → (ln 3)/2 = ln b → b = √3 → a−b = −√3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-\sqrt{3}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0430.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 3 → 2, 5 · 분모 계수 2 → k (b = 3^{1/k}) · 극한값 표기 ln b → log₃ b. 제약: a 는 c^a = 1 로 항상 0 · b = c^{1/k} 가 근호로 짧게 정리되게 · b > 0 조건 유지."
    creative: "(1) 분자를 3^x − 3 으로 두면 a = 1 이 되어 극한점 이동 후 치환(x−1 = t)까지 필요 ★2~3 (2) 극한값을 log₃ b 로 바꿔 로그 밑 변환 함정 ★2 (3) 밑을 문자 c 로 두고 b 를 c 로 표현(Mₐ↑) ★2 (4) 분모 sin(x−a) 를 tan(x² − a²) 으로 두면 인수 (x+a) 처리 추가 ★3."
```

```yaml
- id: RPM-CALC2-0431
  page: 64
  vendor_label: "유형 14 삼각함수의 극한과 미정계수의 결정"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x → 0 일 때 (a − 3cosx)/(x·tanx) = b 를 만족시키는 상수 a, b 에 대해 ab 의 값.
  category: "분모 → 0 ⇒ a − 3 = 0 ⇒ a = 3 → 3(1−cosx)/(x tanx) → 3·(1/2)·1 = 3/2 = b"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "극한 미정계수 — 분모→0 ⇒ 분자→0 으로 상수를 정한 뒤 1−cosx 극한"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분모 → 0 이므로 a − 3cos0 = 0 → a = 3. 그러면 3(1−cosx)/(x tanx) = 3·[(1−cosx)/x²]·(x/tanx) → 3·(1/2)·1 = 3/2 = b, ab = 9/2. 미정계수 표준 절차 뒤 1−cosx 골조(x² 차수 맞춤). 벤더 중·M_total 6·통찰 없음 → ★2.
  tier: star_2
  mechanism_primary: "분모→0 ⇒ a = 3 → 3(1−cosx)/x² · x/tanx → 3/2 = b → ab = 9/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{9}{2}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0431.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "cos 계수 3 → k (a = k, b = k/2, ab = k²/2) · 분모 x tanx → x sin2x (b = k/4), 2x² 등. 제약: 분모 총 차수 2 를 유지해야 1−cosx 와 맞음 · a 는 cos 계수와 같게 강제됨."
    creative: "(1) (a − 3cos2x)/x² 로 배각을 얹으면 b = 6 ★2 (2) 분자를 a − 3cosx + sinx 처럼 sinx 항을 섞으면 차수가 안 맞아 극한이 없는 함정 → 계수 조건 두 개 ★3 (3) a, b 를 주고 cos 계수 k 를 묻는 역방향 ★2 (4) 분모를 1 − cos2x 로 바꿔 1−cos 끼리의 비 3/4 ★2."
```

### 유형 15 삼각함수의 연속과 미정계수

```yaml
- id: RPM-CALC2-0432
  page: 65
  vendor_label: "유형 15 삼각함수의 연속과 미정계수"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    f(x) = sin{3(x−1)}/(x−1) (x ≠ 1), a (x = 1) 이 x = 1 에서 연속이 되도록 하는 상수 a 의 값. 5지선다.
  category: "연속 ⇔ a = lim f(x) → x−1 = t → sin3t/t → 3"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "연속 조건 상수 — f(a) = lim f(x) 로 조각 정의 함수의 상수를 정하는 sin kt/t 꼴"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x = 1 에서 연속이려면 a = lim_{x→1} sin{3(x−1)}/(x−1) = 3 (t = x−1). 연속의 정의 한 줄에 공식 한 번. 대표문제지만 통찰 없음·M_total 4 → ★2 출발점에서 −1 → ★1.
  tier: star_1
  mechanism_primary: "연속 ⇔ a = lim f(x) → x−1 = t → sin3t/t → 3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "③"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0432.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 3 → k (답 = k) · 극한점 1 → 2, −1. 제약: 분자의 인수가 분모 (x − 극한점) 과 같은 평행이동이어야 치환 한 번으로 끝남."
    creative: "(1) 분모를 tan(x−1) 로 ★1 (2) 분자를 1 − cos{3(x−1)} 으로 두면 극한 0 → a = 0 인 차수 함정 ★2 (3) 분모를 x² − 1 로 두어 (x+1) 인수 처리 → 3/2 ★2."
```

```yaml
- id: RPM-CALC2-0433
  page: 65
  vendor_label: "유형 15 삼각함수의 연속과 미정계수"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    −π/3 < x < π/3 에서 f(x) = (e^{kx} − 1)/sin3x (x ≠ 0), 2 (x = 0) 이 x = 0 에서 연속일 때 상수 k 의 값.
  category: "연속 ⇔ lim = 2 → (e^{kx}−1)/(kx) · 3x/sin3x · k/3 → k/3 = 2 → k = 6"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "연속 조건 상수 — f(0) = lim 로 지수·sin 혼합 극한의 계수 k 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    연속이려면 lim_{x→0} (e^{kx}−1)/sin3x = f(0) = 2. 극한은 [(e^{kx}−1)/kx]·(3x/sin3x)·(k/3) → k/3 이므로 k = 6. 공식 둘을 한 번에 쓰는 한 줄이지만 매개변수 k 가 극한 안에 있어(Mₐ 2) 0432 보다 한 단 위. 벤더 중·M_total 5 → ★2 유지(정의역 조건은 sin3x ≠ 0 보장용으로 답에 영향 없음).
  tier: star_2
  mechanism_primary: "연속 ⇔ lim f = f(0) = 2 → (e^{kx}−1)/(kx) · 3x/sin3x · k/3 → k/3 = 2 → k = 6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$6$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0433.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f(0) 의 값 2 · sin3x 의 계수 · e^{kx} → ln(1 + kx). 제약: k = 3·f(0) 이 정수가 되게 · 정의역 (−π/3, π/3) 은 sin3x ≠ 0 을 보장하는 범위이므로 계수를 바꾸면 함께 조정."
    creative: "(1) 분자를 ln(1 + kx) 로 바꿔도 골조 동일 ★2 (2) 분자를 1 − cos kx 로 두면 극한이 0 이라 f(0) = 0 일 때만 연속 → k 가 정해지지 않는 함정형 ★2 (3) k 를 자연수로 제한하고 f(0) = k² − 8 같은 조건을 얹어 후보를 검증·기각하게 하면 VF 요소 ★3."
```

```yaml
- id: RPM-CALC2-0434
  page: 65
  vendor_label: "유형 15 삼각함수의 연속과 미정계수"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    등식 (x − 1)f(x) = tan{π(x − 1)} 을 만족시키는 함수 f 가 x = 1 에서 연속일 때 f(1) 의 값.
  category: "x ≠ 1 에서 f(x) = tan{π(x−1)}/(x−1) → 연속이므로 f(1) = lim → π"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "연속 조건 상수 — 등식으로 주어진 f 를 x ≠ a 에서 나눠 쓰고 f(a) = lim 로"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x ≠ 1 에서만 나눌 수 있어 f(x) = tan{π(x−1)}/(x−1) (T-범위), 연속이므로 f(1) = lim_{x→1} f(x) = lim_{t→0} tan(πt)/t = π. 수학Ⅱ의 「등식으로 주어진 함수의 연속」 골조에 tan 극한을 얹은 것. 벤더 중·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "x≠1 에서 f(x) = tan{π(x−1)}/(x−1) → 연속 ⇒ f(1) = lim → x−1 = t → tan(πt)/t → π"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0434.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 π → 2π, 3 (답 = 계수) · 극한점 1 → 2. 제약: 답 = tan 안의 계수 · 등식 좌변의 인수와 tan 안의 평행이동이 같아야 함 · x ≠ 극한점에서만 나눔을 발문에 남김."
    creative: "(1) (x² − 1)f(x) = tan{π(x−1)} 로 두면 (x+1) 인수 때문에 π/2 ★2 (2) (x − 1)²f(x) = 1 − cos{π(x−1)} 로 두면 π²/2 ★2 (3) 연속 대신 x = 1 에서 미분가능 조건으로 바꾸면 도함수 단원과 결합 ★3."
```

```yaml
- id: RPM-CALC2-0435
  page: 65
  vendor_label: "유형 15 삼각함수의 연속과 미정계수"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x) = (sinx − a)/(x − π/2) (x ≠ π/2), b (x = π/2) 가 x = π/2 에서 연속이 되도록 하는 상수 a, b 에 대해 a + b 의 값.
  category: "연속 ⇒ 극한 존재 ⇒ 분자 → 0 ⇒ a = 1 → x−π/2 = t → (cos t − 1)/t → 0 ⇒ b = 0"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "연속 조건 상수 — 분자→0 으로 a 를 정한 뒤 x−π/2 치환으로 (cos t − 1)/t → 0 을 읽는 두 상수 결정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    연속이려면 극한이 존재해야 하고 분모 → 0 이므로 sin(π/2) − a = 0 → a = 1. t = x − π/2 로 두면 sinx = cos t 이고 (cos t − 1)/t = −[(1−cos t)/t²]·t → −(1/2)·0 = 0 → b = 0, a + b = 1. 미정계수·치환·1−cos 세 골조를 잇고, 마지막에 (1−cos t)/t 를 1/2 로 착각하기 쉬운 차수 함정(T-단위)이 변별 지점. 다른 풀이로 미분계수 정의 (sinx)'|_{x=π/2} = cos(π/2) = 0 이 있으나 이 위치에서는 아직 도구가 아님. 통찰은 없고 M_total 6 이라 −1 후보가 아니므로 벤더 상중 → ★3 유지. [분류 이슈] 절차형이라 M·I 만으로는 ★2 — 벤더 상중 신호를 우선해 ★3 · 후보 ★2/★3.
  tier: star_3
  mechanism_primary: "연속 ⇒ 분자→0 ⇒ a = 1 → x−π/2 = t → (cos t − 1)/t = −(1−cos t)/t² · t → 0 ⇒ b = 0 → a+b = 1"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$1$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0435.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "극한점 π/2 → π/6, π/3 (a = sin(극한점) · b = cos(극한점) 으로 미분계수 값이 됨 → 치환 뒤 덧셈정리 전개 sin(t+c) − sin c 가 필요해 난도 유지 또는 ↑) · 분모 계수. 제약: a 는 반드시 sin(극한점) · 극한점이 π/2 일 때만 b = 0 으로 떨어지므로 다른 점이면 sin·1−cos 두 극한을 모두 씀."
    creative: "(1) 극한점을 π/6 으로 바꾸면 (sin(t+π/6) − 1/2)/t 전개 → b = √3/2 · sin 과 1−cos 두 골조 결합 ★3 (2) 분모를 (x − π/2)² 로 두면 (cos t − 1)/t² → b = −1/2 로 차수 함정 반전 ★3 (3) 조각 정의를 없애고 (sinx − a)/(x − π/2) 의 극한이 존재하도록 하는 a 와 그때의 극한값을 묻는 순수 극한형 ★2~3 (4) 도함수를 배운 뒤 (sinx − sin c)/(x − c) → cos c 로 일반화시키면 RT d2 ★3."
```

## 표본 판정 요약 (37문)

- ★ 분포: ★1 9 · ★2 27 · ★3 1 · ★4 0 · ★5 0
- 통찰 라벨 보유 6(0399·0400·0401·0405·0411·0418 · RT d1 5 · EQV d2 1) · insight_type 통찰형 1(0401) · 절차형 36 · premium 0
- 구역별 ★: 유형 06 (★2·★2·★2) · 유형 07 (★1·★1·★1·★2) · 유형 08 (★2·★1·★2) · 유형 09 (★1·★1·★2·★2) · 유형 10 (★2·★1·★2·★2) · 유형 11 (★2·★2·★2·★2) · 유형 12 (★2·★2·★2) · 유형 13 (★1·★2·★2·★2) · 유형 14 (★2·★2·★2·★2) · 유형 15 (★1·★2·★2·★3)
- type_hint 상위: 「기본 극한 계수 비(sin·tan·e^x−1·ln 을 x 로 나눈 계수 비 · 합성·중첩·다항식 인수·지수로그 혼합 포함)」 8 · 「배각 공식」 4 · 「1−cosx 극한」 4 · 「치환 극한(x→∞)」 4 · 「극한 미정계수」 4 · 「연속 조건 상수」 4 · 「도형 각 분해 tan 덧셈정리」 3 · 「0/0 꼴 삼각함수 극한(항등식 약분)」 3 · 「치환 극한(x→a)」 3
- 대표문제 10문 중 ★1 로 내린 것 4(0402·0409·0424·0432 · 모두 공식 한 번짜리 · M_total 4) · 나머지 6 은 ★2 유지
- 그림: 3문(`crop:fig-0399.png` · `crop:fig-0400.png` · `crop:fig-0401.png`) · 서술형 3문(0405·0420·0429) · 벤더 level 없음 10 · 중하 6 · 중 20 · 상중 1
- 전사 답 재확인: 37문 모두 풀이 결과가 전사본 answer 와 일치(「전사 답 확인 필요」 없음)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다. 이 범위에는 2단 이상 어긋난 문항이 없고, 아래 셋은 모두 1단 경계다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-CALC2-0412 | 벤더 「중」이나 sin kx/x 공식 한 번에 Σk 합산뿐(M_total 4). 100항 일반화 한 단계를 인정해 ★2 로 두었으나 ★1 로 봐도 무방 | ★1 / ★2 |
| RPM-CALC2-0429 | 벤더 「중」·서술형. 통찰은 없지만 극한값≠0 조건 방향(T-범위)+유리화 대수로 M_total 7 — 절차형 ★2 로 두었으나 노동량만 보면 ★3 경계 | ★2 / ★3 |
| RPM-CALC2-0435 | 벤더 「상중」→ ★3 출발. 통찰 없음·M_total 6 이라 M·I 만으로는 ★2 이지만 −1 조건(M_total ≤ 5)에 해당하지 않아 벤더 신호대로 ★3 유지. 변별 지점은 (1−cos t)/t → 0 차수 함정 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **통합 가능**: RPM 유형 09(sin x/x 꼴)·유형 10(tan x/x 꼴)은 골조가 「기본 극한 공식(sin·tan·e^x−1·ln(1+x) ÷ x)의 계수 비」 하나이고 sin/tan 구분은 계수 비 계산에 영향이 없다. 카탈로그에서는 한 유형으로 세우고 하위 변형(① 합성·중첩 인수 나눠 곱하기 0410·0414 ② 다항식 인수 비 0415·0416 ③ 지수·로그 혼합 0413 ④ e 정의 결합 0411 ⑤ 다항 합 0412)으로 두는 편이 낫다. 이 범위에서 가장 많이 반복된 type_hint(8문).
- **통합 가능**: 유형 14(극한과 미정계수)와 유형 15(연속과 미정계수)는 「극한값 존재 ⇒ 0/0 ⇒ 상수 결정 → 계수 비」로 골조가 같다. 연속형은 f(a) = lim 정의 확인 한 단계가 앞에 붙을 뿐이므로 한 유형의 두 하위 변형(극한형·연속형)으로 묶고, 조건 방향(분모→0 ⇒ 분자→0 vs 분자→0·극한≠0 ⇒ 분모→0 · 0429)과 극한점이 미정계수인 경우(0430)를 함정 변형으로 기록.
- **따로 세울 것**: 유형 11(1−cos x 포함 극한)은 (1+cos x) 곱하기와 x² 차수 맞추기가 별개의 학습 자산이라 독립 유형으로. 단, 유형 08 의 0407·0408(sin² ↔ 1−cos² 항등식 약분)은 실제 골조가 이쪽에 가까우므로 카탈로그에서는 「0/0 항등식 약분」(0406 형)과 「1−cos 차수 맞추기」(0407·0408·0417~0420)로 경계를 다시 긋는 편이 정확하다.
- **따로 세울 것**: 치환 극한은 x→a(보각·주기 부호 정리 · 유형 12)와 x→∞(역수 치환 · 유형 13)를 나눠 두는 것이 학생 오류 지점(부호 반전 vs 차수 상쇄)이 달라 유용하다. 0426 의 도 단위 환산(T-단위·T-표기)은 x→∞ 유형의 함정 변형으로 기록.
- **따로 세울 것**: 유형 06 도형 문제는 「각 분해 → tan 덧셈정리」 한 유형으로 세우되, 0401 처럼 삼각형 내각 합으로 조건 각을 환원하는 EQV 변형을 ★ 상승 지점으로 표시(이 범위 유일한 통찰형). 0401 은 배각 공식(유형 07 도구)도 쓰므로 유형 06·07 경계에 걸친다.
- **나눌 수 있음**: 유형 07 배각의 공식은 「값 계산」(0402~0404 · ★1)과 「배각으로 sin 이차식 변환 후 최대·최소」(0405 · 수학Ⅰ 삼각함수 최대·최소 골조 · ★2)로 base ★ 가 달라 하위 유형 분리가 필요하다.
- **★ 출발점 메모**: 이 범위의 대표문제 10문 중 4문은 공식 한 번(M_total 4)이라 ★1 로 내렸다. 카탈로그 base ★ 를 정할 때 「유형 구역 = ★2」를 일률 적용하지 말고, 공식 대입형 유형(배각 값 계산·sin ax/sin bx·x sin(a/x)·연속 대표형)은 base ★1 로 두는 것이 학생 체감과 맞는다.
