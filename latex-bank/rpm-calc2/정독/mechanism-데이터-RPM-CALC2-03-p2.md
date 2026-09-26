---
name: mechanism-데이터-RPM-CALC2-03-p2
description: RPM 미적분Ⅱ 03 지수함수와 로그함수의 미분(2/3 · 유형 03~09) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 미적분Ⅱ (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-calc2
  section: 03 지수함수와 로그함수의 미분
  unit_code: CALC2-03
  part: "2/3"
  extract_range: "45~48쪽 · 0289~0319"
  total_problems: 31
  unit_total: 102
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-calc2/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-calc2/items/<id>.tex
  image_source: latex-bank/rpm-calc2/figures/ (crops.json)
---

# RPM 미적분Ⅱ · 03 지수함수와 로그함수의 미분 (2/3) 정독 데이터 (v1.0)

이 파일은 RPM 미적분Ⅱ 03 단원의 둘째 범위(45~48쪽 · 0289~0319 · 31문항)를 다룬다. 범위 전체가 「유형 03 ~ 유형 09」 구역이며 내용은 지수·로그의 표준 극한 다섯 꼴 — $(1+x)^{1/x}$(유형 03) · $\ln(1+x)/x$(유형 04) · $\log_a(1+x)/x$(유형 05) · $(e^x-1)/x$(유형 06) · $(a^x-1)/x$(유형 07) — 의 계산과, 그 극한값으로 미정계수를 정하는 유형 08, 구간별 함수의 연속 조건을 같은 극한으로 옮기는 유형 09 다. RPM 은 구역이 곧 난이도 층(교과서 → 유형 → 유형 UP → 시험에 꼭 나오는 문제 → 서술형 → 실력 Up)이므로 이 범위는 유형 구역 출발점을 쓴다: 각 유형의 첫 문항은 「대표문제」 태그에 난이도 표시가 없어 ★2 출발, 그 뒤 문항은 난이도 표시 중하(★1~2) · 중(★2) · 상중(★3 · 0295 하나) 출발이다. 「서술형」 태그 3문(0299 · 0315 · 0319)은 +0. 그림은 없다.

★ 조정 정책(이 파일 안에서 일관 적용): 통찰 0·M_total ≤ 5 의 −1 후보는 발문이 극한식 그대로이고 표준 극한 공식을 대입하면 끝나는 문항(M_total 4, 또는 중하·M_total 5)에 적용해 ★1 로 내렸고, 표준형으로 바꾸는 재구성(치환·인수 분리·±1 삽입·로그 합치기·역함수 구성) 또는 조건 해석 층(미정계수·연속)이 골조인 문항은 출발점 ★2 를 유지했다. +1 은 통찰 2개 이상 또는 depth 3 에만 적용했고 이 범위에는 해당이 없다. 통찰형 라벨은 depth 2 이상일 때만 붙였다(0293 망원곱 PD · 0315 분자→0 ⇒ 분모→0 BW · 0319 연속함수 항등식 EQV). 유형 08·09 의 「분모→0 ⇒ 분자→0」 역추적은 이 유형군의 표준 절차이지만 변형 원본으로 골조를 남기기 위해 BW d1 로 통일 기록하고 절차형으로 두었다. 결과는 ★1 10문 · ★2 20문 · ★3 1문이다.

주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(유형 코드+depth+근거 · 절차형은 빈 배열) · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 창의 변형과 ★ 변동 지점)를 채웠다. 유형 카탈로그가 없는 과목이므로 `type_id`·`base_star` 는 null 이고 `type_hint` 로 유형명을 제안했다(RPM 유형 제목을 기본으로 하고 「— 계산 / — 미정계수 / — 구간별 함수」 같은 골조 꼬리를 붙여 카탈로그 설계 때 통합·분리 판단이 쉽게 했다).

## 문항 데이터

### 유형 03 $\displaystyle\lim_{x\to 0}(1+x)^{\frac{1}{x}}$ 꼴의 극한

```yaml
- id: RPM-CALC2-0289
  page: 45
  vendor_label: '유형 03 $\displaystyle\lim_{x\to 0}(1+x)^{\frac{1}{x}}$ 꼴의 극한'
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    x→∞ 에서 두 인수 (1-1/(3x))(1+1/(2x)) 의 곱을 x 제곱한 식의 극한값. 주관식.
  category: "곱을 두 인수로 분리 → 각각 (1+k/x)^x → e^k → 지수 합산"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "(1+x)^(1/x) 꼴의 극한 — 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    {AB}^x = A^x·B^x 로 갈라 (1-1/(3x))^x → e^{-1/3}, (1+1/(2x))^x → e^{1/2} 를 각각 얻고 지수를 더해 e^{1/6}. 표준 극한을 두 번 쓰는 절차이며 −1/(3x) 의 부호가 유일한 함정(T-부호). 통찰 없음·M_total 5 로 −1 후보이나 인수 분리·지수 합산이 이 유형의 대표 골조라 대표문제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "{(1+p/x)(1+q/x)}^x → (1+p/x)^x·(1+q/x)^x → e^p·e^q → e^{p+q}"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$e^{\frac{1}{6}}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0289.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 계수 −1/3, 1/2 를 다른 유리수 p, q 로(부호 하나는 음수 유지). 제약: 답 e^{p+q} 의 지수가 간단한 유리수가 되게 하고 p+q ≠ 0 이 되게(0 이면 답 1 로 유형 신호가 사라짐). 인수 3개로 늘려도 골조 동일."
    creative: "(1) 지수를 x 대신 x+1 로 바꿔 (1+p/x)^{x+1} = (1+p/x)^x·(1+p/x) 처리 추가(★2 유지) (2) 곱 대신 몫 ((1+p/x)/(1+q/x))^x 로(★2 · 0295 골조) (3) x→0 형 (1+px)^{1/x}(1+qx)^{1/x} 로 바꾸면 같은 골조 ★2 (4) 인수 하나를 (1-1/x^2) 처럼 두 인수의 곱으로 숨기면 인수분해 착안 추가 → ★3 후보."
```

```yaml
- id: RPM-CALC2-0290
  page: 45
  vendor_label: '유형 03 $\displaystyle\lim_{x\to 0}(1+x)^{\frac{1}{x}}$ 꼴의 극한'
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x→0 에서 (1+4x)^{3/x} = A, (1-5x)^{1/x} = B 일 때 A/B 의 값. 5지선다(e 의 거듭제곱).
  category: "(1+ax)^{b/x} → e^{ab} 두 번 → 몫은 지수 차"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "(1+x)^(1/x) 꼴의 극한 — 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    A = e^{12}, B = e^{-5} 를 공식 (1+ax)^{b/x} → e^{ab} 로 바로 얻고 A/B = e^{17}. 공식 직접 대입 두 번·나눗셈 한 줄. 부호(−5x → e^{-5}) 하나가 함정. 통찰 없음·M_total 4 → 중하 출발점(★1~2)에서 −1 적용 ★1.
  tier: star_1
  mechanism_primary: "(1+ax)^{b/x} → e^{ab} (두 번) → A/B = e^{(지수 차)}"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0290.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 4, 3, −5, 1 을 정수로 자유롭게. 제약: 선택지가 e^{정수} 로 구분되고 A/B 의 지수(12−(−5)=17)가 선택지 안에서 유일하게 나오게 하며, 부호가 다른 인수를 하나는 남겨 T-부호 유지."
    creative: "(1) A·B 나 A^2/B 를 묻기(★1) (2) B 를 x→∞ 꼴 (1-5/x)^x 로 섞어 두 표준형 혼용(★2) (3) A/B 의 값을 주고 계수를 묻는 미정계수형으로 뒤집기(★2 · 0292 골조)."
```

```yaml
- id: RPM-CALC2-0291
  page: 45
  vendor_label: '유형 03 $\displaystyle\lim_{x\to 0}(1+x)^{\frac{1}{x}}$ 꼴의 극한'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x→2 에서 (x-1)^{1/(2-x)} 의 극한값. 주관식.
  category: "x-2=t 치환 → 밑 1+t · 지수 -1/t → (1+t)^{1/t} 의 -1 제곱 → 1/e"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "(1+x)^(1/x) 꼴의 극한 — 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x-2 = t 로 두면 밑 x-1 = 1+t, 지수 1/(2-x) = -1/t 이므로 (1+t)^{-1/t} = {(1+t)^{1/t}}^{-1} → e^{-1}. 치환 자체는 표준이지만 지수의 부호 뒤집기(2-x = -(x-2))가 함정(T-부호). 통찰 없음·M_total 5 이나 표준형으로 옮기는 재구성이 골조라 중 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "x→c ⇒ t=x-c → 밑 1+t · 지수 ±k/t 로 정리 → (1+t)^{1/t} 의 거듭제곱 → e^{±k}"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{e}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0291.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "극한점 2 와 밑 x-1 을 x→c, 밑 x-(c-1) 꼴로 같이 옮기고 지수를 ±k/(x-c) 로. 제약: 밑이 x=c 에서 정확히 1 이 되어야 하며(1+t 꼴), 지수 분모가 (x-c) 의 상수배여야 함."
    creative: "(1) 지수를 1/(x-2) 로 바꿔 부호 함정 제거(★1) (2) 밑을 x^2-3 처럼 x=2 에서 1 이 되는 이차식으로 두면 x^2-3 = 1+(x-2)(x+2) 로 t 의 계수가 변하는 착안 추가(★2~3) (3) 밑 x-1 을 로그·지수식으로 바꿔 유형 04~07 결합(★3)."
```

```yaml
- id: RPM-CALC2-0292
  page: 45
  vendor_label: '유형 03 $\displaystyle\lim_{x\to 0}(1+x)^{\frac{1}{x}}$ 꼴의 극한'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x→0 에서 {(1+x/2)(1+ax)}^{2/x} = e^7 이 되는 상수 a 의 값. 5지선다.
  category: "인수 분리 → e^{1}·e^{2a} → 지수 방정식 1+2a=7"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "(1+x)^(1/x) 꼴의 극한 — 미정계수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (1+x/2)^{2/x} → e^{1}, (1+ax)^{2/x} → e^{2a} 로 갈라 곱하면 e^{1+2a}. 이를 e^7 과 견줘 1+2a = 7, a = 3. 0289 골조에 미정계수 방정식 한 단계가 붙은 절차형(단순 미정계수라 BW 인정 안 함). 통찰 없음이지만 M_total 6(매개변수) → 중 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "{(1+px)(1+ax)}^{q/x} → e^{pq}·e^{aq} → pq+aq = 목표 지수 → a"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0292.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x/2 의 계수, 지수 2/x, 목표 e^7 을 바꾸되 방정식 pq+aq = n 의 해 a 가 정수(선택지 정수)가 되게. 제약: 선택지 다섯 개 중 하나만 맞게 하고, (1+ax) 의 정의를 흔들지 않게 |a| 는 작게."
    creative: "(1) 목표값을 e^{k} 가 아닌 e^3·e^4 같은 곱으로 주기(★2) (2) 인수 하나를 (1+ax)^{1/x}, 다른 하나를 x→∞ 꼴로 섞어 통일 필요(★3) (3) 두 미지수 a, b 에 조건 둘(a+b · 곱)을 주면 연립으로 Mₛ 증가(★3)."
```

```yaml
- id: RPM-CALC2-0293
  page: 45
  vendor_label: '유형 03 $\displaystyle\lim_{x\to 0}(1+x)^{\frac{1}{x}}$ 꼴의 극한'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x→∞ 에서 1/2 과 (1+1/x)(1+1/(x+1))…(1+1/(2x)) 의 곱을 x 제곱한 식의 극한값. 주관식.
  category: "각 인수 (k+1)/k → 망원곱 (2x+1)/x → 1/2 배 → (1+1/(2x))^x → e^{1/2}"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-PD
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "연속 인수 1+1/k 를 (k+1)/k 로 바꾸면 k=x~2x 의 곱이 망원곱으로 접혀 (2x+1)/x 가 됨을 발견"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "(1+x)^(1/x) 꼴의 극한 — 망원곱 접기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    각 인수를 (k+1)/k 로 쓰면 곱이 (x+1)/x·(x+2)/(x+1)·…·(2x+1)/(2x) = (2x+1)/x 로 접히고, 1/2 를 곱하면 1+1/(2x). 그 x 제곱은 e^{1/2}. 망원곱 발견(PD d2) 뒤에는 표준 극한 한 번. 통찰 1개 d2·M_total 6 → 중 출발점 ★2 유지하되 depth 2 라 ★3 후보. [분류 이슈] 망원곱 착안을 I-PD(규칙 발견)로 볼지 수열 단원 도구를 끌어온 I-XU 로 볼지, 또 ★2/★3 어느 쪽인지 애매.
  tier: star_2
  mechanism_primary: "∏(1+1/k) = ∏(k+1)/k → 망원곱 (2x+1)/x → 상수 1/2 로 1+1/(2x) 정리 → (1+1/(2x))^x → e^{1/2}"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$e^{\frac{1}{2}}$'
  answer_source: "해설(답 크롭 없음 · 0292 답 크롭에 합쳐짐)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0293.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "곱의 끝 2x 를 3x(→ 결과 (3x+1)/x · 상수 1/3 → 1+1/(3x) → e^{1/3})로 바꾸고 앞 상수를 그에 맞춤. 제약: 앞 상수 × (끝+1)/x 가 정확히 1+c/x 꼴이 되어야 함(상수 = 1/끝 계수). 정수 x 로 곱을 해석하는 전제 유지."
    creative: "(1) 상수 1/2 를 빼고 ((2x+1)/x)^x 를 물으면 발산 → 수렴 여부 판별 ㄱㄴㄷ 로(★2) (2) 인수를 (1-1/k^2) = (k-1)(k+1)/k^2 로 바꾸면 이중 망원곱(★3~4 · PD d3) (3) 곱 대신 합 Σ ln(1+1/k) 을 x 로 묶어 로그 형태로 주면 유형 04 와 결합(★3 · XU)."
```

```yaml
- id: RPM-CALC2-0294
  page: 45
  vendor_label: '유형 03 $\displaystyle\lim_{x\to 0}(1+x)^{\frac{1}{x}}$ 꼴의 극한'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    네 극한(ㄱ (1-1/x)^x · x→∞, ㄴ (1-1/x)^{-x} · x→-∞, ㄷ (1+2x)^{2/x} · x→0, ㄹ x^{1/(x-1)} · x→1) 중 값이 e 인 것을 있는 대로 고르는 ㄱㄴㄷㄹ 5지선다.
  category: "보기 넷을 각각 표준형으로 옮겨 e^{k} 판별 → k=1 인 것 고르기"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "(1+x)^(1/x) 꼴의 극한 — 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ㄱ은 e^{-1}, ㄷ은 e^4 로 e 가 아니고, ㄴ은 t=-x(→∞) 로 (1+1/t)^t → e, ㄹ은 t=x-1 로 (1+t)^{1/t} → e. 부호가 두 겹(밑의 −, x→-∞ 의 −x)인 ㄴ과 치환이 필요한 ㄹ이 판별 지점(T-부호·T-범위). 통찰 없음·M_total 6(보기 넷·함정 두 종) → 중 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "각 보기를 (1+t)^{1/t} 또는 (1+1/t)^t 꼴로 치환·부호 정리 → 지수 k 비교 → k=1 인 보기 선택"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "해설(답 크롭 없음 · 0292 답 크롭에 합쳐짐)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0294.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 보기의 계수(−1, 2, 2/x 등)를 바꿔 e 가 되는 보기의 조합을 바꿈. 제약: 정확히 두 개가 e 이고 나머지가 e^k(k≠1)이 되게, x→-∞ 보기 하나·치환 보기 하나를 유지해 함정 두 종 보존."
    creative: "(1) 값이 e^2 인 것을 고르게 하기(★2) (2) 보기에 (1+1/x)^{x^2} 같은 발산형이나 (1+1/x^2)^x → 1 같은 소멸형을 넣어 수렴 여부까지 판별(★3 · MI) (3) 보기 값을 크기 순으로 나열하게 하면 지수 비교 추가(★3)."
```

```yaml
- id: RPM-CALC2-0295
  page: 45
  vendor_label: '유형 03 $\displaystyle\lim_{x\to 0}(1+x)^{\frac{1}{x}}$ 꼴의 극한'
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x→∞ 에서 ((x+a)/(x-a))^x = e^{50} 이 되는 상수 a 의 값. 주관식.
  category: "분자·분모를 x 로 나눠 (1+a/x)^x/(1-a/x)^x → e^{2a} → 2a=50"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "밑 (x+a)/(x-a) 를 (1+a/x)/(1-a/x) 로 바꿔 표준 극한 두 개의 몫으로 읽음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "(1+x)^(1/x) 꼴의 극한 — 미정계수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    밑을 그대로 두면 표준형이 보이지 않으므로 분자·분모를 x 로 나눠 (1+a/x)^x → e^a, (1-a/x)^x → e^{-a} 의 몫 e^{2a} 로 읽는다(EQV d1). 이후 2a = 50, a = 25. 1+2a/(x-a) 로 고쳐 x-a = t 치환하는 갈래도 있으나 결과는 같다. 통찰 1개·M_total 6 → 상중 출발점 ★3 유지. [분류 이슈] 골조는 0292(★2)와 같은 미정계수형이라 ★2 로도 볼 수 있음 — 벤더 상중을 따라 ★3.
  tier: star_3
  mechanism_primary: "(x+a)/(x-a) = (1+a/x)/(1-a/x) → e^a/e^{-a} = e^{2a} → 2a = 목표 지수 → a"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$25$'
  answer_source: "해설(답 크롭 없음 · 0292 답 크롭에 합쳐짐)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0295.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "목표 지수 50 을 짝수로(a = 목표/2 정수). 분모를 x-2a 처럼 다른 계수로 두면 e^{a+2a} = e^{3a}. 제약: 밑이 x→∞ 에서 1 로 가야 하고(분자·분모 최고차 계수 같음), a 가 양의 정수가 되게."
    creative: "(1) 밑을 (x^2+a)/(x^2-a) 로 하고 지수 x^2 → 같은 골조(★3) (2) 지수를 x+a 로 두어 (1+2a/(x-a))^{x-a}·(…)^{2a} 분리 처리 추가(★3~4) (3) ((x+a)/(x+b))^x = e^k 에 a+b 조건을 붙여 연립(★3)."
```

### 유형 04 $\lim\limits_{x\to 0}\frac{\ln(1+x)}{x}$ 꼴의 극한

```yaml
- id: RPM-CALC2-0296
  page: 46
  vendor_label: '유형 04 $\lim\limits_{x\to 0}\frac{\ln(1+x)}{x}$ 꼴의 극한'
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    x→0 에서 ln(2x+1)/(3x²+x) 의 극한값. 5지선다.
  category: "분모 x(3x+1) 인수분해 → ln(1+2x)/(2x)·2/(3x+1) → 2"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "ln(1+x)/x 꼴의 극한 — 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    분모를 x(3x+1) 로 묶고 ln(1+2x)/(2x) → 1 을 쓰면 남는 2/(3x+1) → 2. 표준 극한 한 번에 인수분해 한 줄. 통찰 없음·M_total 4 → 대표문제 출발점 ★2 에서 −1 → ★1.
  tier: star_1
  mechanism_primary: "ln(1+ax)/(x·g(x)) → [ln(1+ax)/(ax)]·a/g(x) → a/g(0)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "⑤"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0296.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "ln 안 계수 2, 분모 3x^2+x 의 계수를 바꿔 답 a/g(0) 가 선택지에 있는 정수·유리수가 되게. 제약: 분모가 x 를 인수로 갖고 상수항이 0(0/0 꼴)이어야 하며 g(0) ≠ 0."
    creative: "(1) 분모를 (e^x-1)(3x+1) 로 바꿔 유형 06 결합(★2) (2) 분자를 ln(1+2x)-ln(1+x) 처럼 두 로그의 차로 두어 분리 처리(★2) (3) x→0 을 x→1 로 옮기고 ln(2x-1)/(3x^2-4x+1) 로 치환 필요(★2)."
```

```yaml
- id: RPM-CALC2-0297
  page: 46
  vendor_label: '유형 04 $\lim\limits_{x\to 0}\frac{\ln(1+x)}{x}$ 꼴의 극한'
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x→0 에서 ln(ax+1)/(bx) = 4 일 때 ln(1-2bx)/(ax) 의 극한값(a, b 상수). 5지선다.
  category: "첫 극한 → a/b=4 → 둘째 극한 → -2b/a = -2/(a/b)"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "ln(1+x)/x 꼴의 극한 — 미정계수"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ln(1+ax)/(bx) → a/b 이므로 a/b = 4. 구하는 극한은 ln(1-2bx)/(ax) → -2b/a = -2/(a/b) = -1/2. a, b 를 따로 정하려 하지 않고 비 a/b 만 쓰면 되는 것이 요점이지만 표준 절차 범위. 통찰 없음·M_total 5 → 중하 출발점(★1~2)에서 ★1.
  tier: star_1
  mechanism_primary: "ln(1+ax)/(bx) → a/b (조건) → ln(1+cbx)/(ax) → cb/a = c/(a/b)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0297.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "조건값 4 와 둘째 극한의 계수 −2 를 바꿔 답 c/(a/b) 가 선택지 유리수가 되게. 제약: 두 극한 모두 0/0 꼴 유지(상수항 1), 답 부호를 결정하는 계수 하나는 음수로."
    creative: "(1) 둘째 극한을 ln(1+ax)/ln(1+bx) 로 바꿔 두 로그의 비(★1~2) (2) 조건을 두 개 주고 a, b 를 각각 결정하게(연립 · ★2) (3) 조건을 (1+ax)^{1/(bx)} = e^4 로 바꿔 유형 03 과 결합(★2)."
```

```yaml
- id: RPM-CALC2-0298
  page: 46
  vendor_label: '유형 04 $\lim\limits_{x\to 0}\frac{\ln(1+x)}{x}$ 꼴의 극한'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x→∞ 에서 x{ln(5x+1) - ln 5x} 의 극한값. 주관식.
  category: "로그 차를 몫으로 → x·ln(1+1/(5x)) → ln(1+1/(5x))^x → ln e^{1/5}"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x·ln(…) 을 ln{(…)^x} 로 옮겨 x→∞ 의 (1+1/(5x))^x 표준형(유형 03)으로 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "ln(1+x)/x 꼴의 극한 — 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 로그를 ln((5x+1)/(5x)) = ln(1+1/(5x)) 로 합치면 x·ln(1+1/(5x)) = ln{(1+1/(5x))^x} → ln e^{1/5} = 1/5. 또는 t=1/(5x) 치환으로 ln(1+t)/(5t). 로그 앞의 x 를 지수로 올리는 표현 전환(RT d1)이 요점. 통찰 1개·M_total 5 → 중 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "ln A - ln B = ln(A/B) = ln(1+1/(kx)) → x·ln(…) = ln(1+1/(kx))^x → 1/k"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0298.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "5x+1, 5x 의 5 를 다른 양의 정수 k 로(답 1/k). x 앞 계수를 m 으로 두면 답 m/k. 제약: 두 로그의 진수 차가 상수여야 ln(1+c/(kx)) 꼴이 됨."
    creative: "(1) ln(5x+1)-ln(5x-1) 처럼 차가 2 인 진수로 하면 1+2/(5x-1) 재정리 추가(★2) (2) x 대신 x^2 를 곱하면 발산 판정(★2) (3) 로그 밑을 a 로 바꿔 유형 05 결합(1/(k ln a) · ★2) (4) 수열 n{ln(n+1)-ln n} 으로 바꿔 수열의 극한과 연결(★2)."
```

```yaml
- id: RPM-CALC2-0299
  page: 46
  vendor_label: '유형 04 $\lim\limits_{x\to 0}\frac{\ln(1+x)}{x}$ 꼴의 극한'
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    f(x) = e^{4x} 의 역함수 g 에 대해 x→1 에서 g(x)/(x-1) 의 극한값. 주관식(서술형).
  category: "역함수 g(x) = (1/4)ln x → x-1=t 치환 → ln(1+t)/(4t) → 1/4"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "ln(1+x)/x 꼴의 극한 — 역함수 결합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y = e^{4x} 를 x 에 대해 풀어 g(x) = (1/4)ln x. 그러면 g(x)/(x-1) = ln x/(4(x-1)) 이고 x-1 = t 로 ln(1+t)/(4t) → 1/4. 역함수 구성 + 치환 + 표준 극한의 세 층이지만 각각 표준. 통찰 없음·M_total 5 이나 역함수 재구성이 골조라 중 출발점 ★2 유지. 서술형 태그 +0.
  tier: star_2
  mechanism_primary: "f=e^{kx} ⇒ g=(1/k)ln x → g(x)/(x-1) = ln x/(k(x-1)) → t=x-1 → 1/k"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0299.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "e^{4x} 의 4 를 다른 양수 k 로(답 1/k). f(x) = e^{kx}+c 로 두면 g(x) = (1/k)ln(x-c) 이고 극한점을 x→c+1 로. 제약: 극한점에서 g 가 0 이 되어 0/0 꼴 유지."
    creative: "(1) 역함수를 구하지 않고 g(x)=t, x=e^{4t} 로 두어 t/(e^{4t}-1) → 1/4 로 푸는 유형 06 갈래를 요구(★2 · SC 약) (2) f(x)=e^{4x}-1 로 두고 x→0 에서 g(x)/x (★2) (3) f(x) = 2^{x}+1 로 바꿔 log_2 역함수 → 유형 05 결합(1/ln 2 포함 · ★2)."
```

### 유형 05 $\lim\limits_{x\to 0}\frac{\log_a(1+x)}{x}$ 꼴의 극한

```yaml
- id: RPM-CALC2-0300
  page: 46
  vendor_label: '유형 05 $\lim\limits_{x\to 0}\frac{\log_a(1+x)}{x}$ 꼴의 극한'
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    x→0 에서 {log₂(3+x) - log₂3}/x 의 극한값. 5지선다.
  category: "로그 차를 log₂(1+x/3) 로 → x/3 로 맞춤 → (1/3)·1/ln 2"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "log_a(1+x)/x 꼴의 극한 — 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    log₂(3+x) - log₂3 = log₂(1+x/3) 이므로 log₂(1+x/3)/(x/3) · (1/3) → (1/ln 2)·(1/3). 로그 합치기 한 줄 + 공식 log_a(1+x)/x → 1/ln a. 함정은 밑이 2 라 1/ln 2 가 붙는 표기(T-표기). 통찰 없음·M_total 4 → 대표문제 출발점 ★2 에서 −1 → ★1.
  tier: star_1
  mechanism_primary: "log_a(c+x) - log_a c = log_a(1+x/c) → ÷(x/c)·(1/c) → 1/(c ln a)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0300.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 2 와 상수 3 을 다른 양수로(답 1/(c ln a)). 제약: 밑 a ≠ 1, c > 0, 선택지에 1/(c ln a)·c ln a·ln a/c 같은 오답을 함께 두어 T-표기 유지."
    creative: "(1) 분자를 log_2(3+2x) - log_2 3 처럼 계수를 넣어 2/(3 ln 2) (★1) (2) 이 극한이 y = log_2 x 의 x=3 에서의 미분계수임을 묻는 정의 연결(★2 · RT) (3) 분모를 x^2+x 로 바꿔 인수분해 추가(★1~2)."
```

```yaml
- id: RPM-CALC2-0301
  page: 46
  vendor_label: '유형 05 $\lim\limits_{x\to 0}\frac{\log_a(1+x)}{x}$ 꼴의 극한'
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x→0 에서 log₅(1+7x)/log₃(1-x) 의 극한값. 5지선다(log 표기 선택지).
  category: "분자·분모를 각각 x 로 나눠 (7/ln 5)/(-1/ln 3) → -7 ln 3/ln 5 → -7 log₅3"
  M: {s: 1, k: 1, a: 1, t: 2}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "log_a(1+x)/x 꼴의 극한 — 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    분자 log₅(1+7x)/x → 7/ln 5, 분모 log₃(1-x)/x → -1/ln 3. 비는 -7 ln 3/ln 5 = -7 log₅3. 부호(1-x)와 ln 3/ln 5 를 log₅3 으로 읽는 밑 변환 표기의 두 함정. 공식 직접 대입. 통찰 없음·M_total 5 → 중하 출발점에서 ★1.
  tier: star_1
  mechanism_primary: "log_a(1+px)/x → p/ln a, log_b(1+qx)/x → q/ln b → 비 (p/q)·(ln b/ln a) = (p/q) log_a b"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0301.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 5, 3 과 계수 7, −1 을 바꿔 답 (p/q)·log_a b. 제약: 선택지에 log_a b 와 log_b a 를 나란히 두어 표기 함정 유지, 부호가 다른 계수 하나 유지."
    creative: "(1) 분모를 ln(1-x) 로 바꿔 답에 ln 5 만 남기기(★1) (2) 분자·분모를 (5^x-1)/(3^x-1) 로 뒤집으면 ln 5/ln 3 (유형 07 · ★1) (3) 밑을 같게 두고 log_a(1+7x)/log_a(1-x) = -7 이 밑과 무관함을 묻기(★2 · EQV)."
```

```yaml
- id: RPM-CALC2-0302
  page: 46
  vendor_label: '유형 05 $\lim\limits_{x\to 0}\frac{\log_a(1+x)}{x}$ 꼴의 극한'
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x→2 에서 log₂(x-1)/(x-2) 의 극한값. 주관식.
  category: "x-2=t 치환 → log₂(1+t)/t → 1/ln 2"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "log_a(1+x)/x 꼴의 극한 — 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x-2 = t 로 두면 x-1 = 1+t 이므로 log₂(1+t)/t → 1/ln 2. 치환 한 번에 공식 한 번(부호 뒤집기 없음). 통찰 없음·M_total 4 → 중하 출발점에서 ★1.
  tier: star_1
  mechanism_primary: "x→c ⇒ t=x-c → log_a(1+t)/t → 1/ln a"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{1}{\ln 2}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0302.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "극한점 2 와 진수 x-1 을 x→c, 진수 x-(c-1) 로 함께 옮기고 밑을 바꿈(답 1/ln a). 분모를 k(x-c) 로 두면 1/(k ln a). 제약: 극한점에서 진수가 정확히 1."
    creative: "(1) 분모를 x^2-4 로 바꿔 (x-2)(x+2) 인수분해 추가(1/(4 ln 2) · ★1~2) (2) 진수를 x^2-3 처럼 x=2 에서 1 이 되는 이차식으로(★2) (3) 극한값을 미분계수 정의로 해석하게(★2 · RT)."
```

```yaml
- id: RPM-CALC2-0303
  page: 46
  vendor_label: '유형 05 $\lim\limits_{x\to 0}\frac{\log_a(1+x)}{x}$ 꼴의 극한'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x→0 에서 log{(1+x)(1+3x)(1+5x)(1+7x)}/x 의 극한값(상용로그). 주관식.
  category: "곱의 로그를 네 로그의 합으로 → 각 k/ln 10 → 합 16/ln 10"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "log_a(1+x)/x 꼴의 극한 — 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    진수가 네 인수의 곱이므로 log(1+x)+log(1+3x)+log(1+5x)+log(1+7x) 로 갈라 각각 x 로 나누면 (1+3+5+7)/ln 10 = 16/ln 10. 상용로그라 1/ln 10 이 붙는 것이 함정(T-표기). 통찰 없음·M_total 5(항 넷) → 중 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "log ∏(1+k_i x) = Σ log(1+k_i x) → Σ k_i / ln 10"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{16}{\ln 10}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0303.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 1, 3, 5, 7 을 다른 정수 집합으로(답 Σk_i/ln 10). 인수 개수 3~5. 제약: 상용로그 유지 시 답에 ln 10 이 남고, 밑을 e 로 바꾸면 답이 정수 Σk_i."
    creative: "(1) 인수에 (1-2x) 를 섞어 부호 처리(★2) (2) 진수를 (1+x)(1+3x)/{(1+5x)(1+7x)} 몫으로 주어 합·차 분리(★2) (3) 인수를 n 개로 일반화 (1+x)(1+3x)…(1+(2n-1)x) 로 두고 답 n^2/ln 10 을 묻기(★3 · PD)."
```

### 유형 06 $\lim\limits_{x\to 0}\frac{e^x-1}{x}$ 꼴의 극한

```yaml
- id: RPM-CALC2-0304
  page: 47
  vendor_label: '유형 06 $\lim\limits_{x\to 0}\frac{e^x-1}{x}$ 꼴의 극한'
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    x→0 에서 (e^x-1)/ln(1+2x) 의 극한값. 5지선다.
  category: "분자·분모를 x 로 나눠 1/2"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "(e^x-1)/x 꼴의 극한 — 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    분자·분모를 x 로 나누면 (e^x-1)/x → 1, ln(1+2x)/x → 2 이므로 1/2. 두 표준 극한의 비 한 줄. 통찰 없음·M_total 4 → 대표문제 출발점 ★2 에서 −1 → ★1.
  tier: star_1
  mechanism_primary: "(e^{ax}-1)/ln(1+bx) → [(e^{ax}-1)/x]/[ln(1+bx)/x] → a/b"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "①"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0304.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "e^x 의 계수 a 와 ln 안 계수 b 를 바꿔 답 a/b. 제약: 선택지에 b/a, ln 2 계열 오답을 두어 분자·분모 방향 함정 유지."
    creative: "(1) 분모를 log_2(1+2x) 로 바꿔 2/ln 2 (유형 05 결합 · ★1~2) (2) 분자를 e^{2x}-e^{x} 로 두어 인수 e^x(e^x-1) 또는 ±1 분리(★2) (3) 극한값을 주고 계수를 묻는 미정계수형(★2 · 0307 골조)."
```

```yaml
- id: RPM-CALC2-0305
  page: 47
  vendor_label: '유형 06 $\lim\limits_{x\to 0}\frac{e^x-1}{x}$ 꼴의 극한'
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x→0 에서 (e^{3x}-1)/(x²-x) 의 극한값. 주관식.
  category: "분모 x(x-1) 인수분해 → (e^{3x}-1)/(3x)·3/(x-1) → -3"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "(e^x-1)/x 꼴의 극한 — 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    분모를 x(x-1) 로 묶고 (e^{3x}-1)/(3x) → 1 을 쓰면 남는 3/(x-1) → -3. 공식 한 번에 인수분해 한 줄, 부호(x-1 → -1) 함정. 통찰 없음·M_total 4 → 중하 출발점에서 ★1.
  tier: star_1
  mechanism_primary: "(e^{ax}-1)/(x·g(x)) → a/g(0)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-3$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0305.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 계수 3 과 분모 x^2-x 의 계수를 바꿔 답 a/g(0). 제약: 분모가 x 를 인수로 갖고 g(0) ≠ 0, 답 부호를 정하는 g(0) 을 음수로 유지하면 T-부호 보존."
    creative: "(1) 분모를 x^2+x 로 바꿔 부호 함정 제거(★1) (2) 분자를 e^{3x}-e^{x} 로(★2 · ±1 분리) (3) 극한점을 x→1 로 옮기고 분자를 e^{3x-3}-1, 분모를 x^2-x 로 하면 인수 (x-1) 쪽 치환(★2)."
```

```yaml
- id: RPM-CALC2-0306
  page: 47
  vendor_label: '유형 06 $\lim\limits_{x\to 0}\frac{e^x-1}{x}$ 꼴의 극한'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x→0 에서 (e^{2x} - e^{-3x})/x 의 극한값. 5지선다.
  category: "분자에 -1+1 삽입 → (e^{2x}-1)/x - (e^{-3x}-1)/x → 2-(-3)"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "(e^x-1)/x 꼴의 극한 — 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분자를 (e^{2x}-1) - (e^{-3x}-1) 로 갈라 각각 x 로 나누면 2 - (-3) = 5. −1 을 넣고 빼는 분리와 e^{-3x} 의 음수 지수 부호가 요점. 이 유형의 표준 기법이라 통찰 없음. M_total 5 이나 ±1 분리 재구성이 골조라 중 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "(e^{ax}-e^{bx})/x = [(e^{ax}-1)-(e^{bx}-1)]/x → a-b"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0306.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 계수 2, −3 을 다른 정수 a, b 로(답 a-b). 제약: 하나는 음수로 두어 부호 함정 유지, 선택지에 a+b, -(a-b) 를 함께."
    creative: "(1) 분자를 e^{-3x}(e^{5x}-1) 로 묶는 다른 갈래를 서술형으로 요구(★2 · SC 약) (2) 분모를 ln(1+x) 로 바꿔 유형 04 결합(★2) (3) (a^x-b^x)/x 로 바꾸면 유형 07 (ln a - ln b · ★2 · 0308 골조)."
```

```yaml
- id: RPM-CALC2-0307
  page: 47
  vendor_label: '유형 06 $\lim\limits_{x\to 0}\frac{e^x-1}{x}$ 꼴의 극한'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x→0 에서 (e^{-ax}-1)/ln(1+a²x) = 1/9 를 만족시키는 상수 a 의 값. 주관식.
  category: "분자 → -a, 분모 → a² → -1/a = 1/9 → a=-9"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "(e^x-1)/x 꼴의 극한 — 미정계수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (e^{-ax}-1)/x → -a, ln(1+a²x)/x → a² 이므로 비는 -a/a² = -1/a. 이를 1/9 와 놓아 a = -9. 공식 두 번에 방정식 한 줄이지만 매개변수가 분자·분모에 함께 들어 부호(-a)와 a² 약분이 함정. 통찰 없음·M_total 5(매개변수 조건 층) → 중 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "(e^{px}-1)/ln(1+qx) → p/q (p, q 가 a 의 식) → 방정식 → a"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-9$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0307.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 -ax 와 진수 a^2 x 의 조합, 목표값 1/9 를 바꿔 방정식 p(a)/q(a) = 목표의 해가 정수가 되게. 제약: a ≠ 0(0/0 무의미), 답이 음수인 경우를 두어 T-부호 유지."
    creative: "(1) 분자·분모 자리를 바꿔 ln(1+a^2x)/(e^{-ax}-1) = -9 (★2) (2) 조건 둘(다른 극한값)로 a, b 두 미지수 연립(★2~3) (3) 답이 두 개 나오는 이차 방정식(a^2 = …)으로 두고 '양수 a' 조건으로 걸러내기(★2 · VF 약)."
```

### 유형 07 $\lim\limits_{x\to 0}\frac{a^x-1}{x}$ 꼴의 극한

```yaml
- id: RPM-CALC2-0308
  page: 47
  vendor_label: '유형 07 $\lim\limits_{x\to 0}\frac{a^x-1}{x}$ 꼴의 극한'
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    x→0 에서 (8^x - 2^x)/x 의 극한값. 5지선다(ln 선택지).
  category: "분자에 -1+1 삽입 → ln 8 - ln 2 → ln 4"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "(a^x-1)/x 꼴의 극한 — 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (8^x-1)/x - (2^x-1)/x → ln 8 - ln 2 = ln 4. 표준 극한 (a^x-1)/x → ln a 두 번과 로그 정리 한 줄. 통찰 없음·M_total 4 → 대표문제 출발점 ★2 에서 −1 → ★1.
  tier: star_1
  mechanism_primary: "(a^x-b^x)/x = [(a^x-1)-(b^x-1)]/x → ln a - ln b = ln(a/b)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0308.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 8, 2 를 다른 양수 a, b 로(답 ln(a/b)). 제약: 선택지가 ln 단일 항으로 정리되도록 a/b 가 간단한 수, 선택지에 ln(ab) 오답 포함."
    creative: "(1) 분모를 2x 나 e^x-1 로 바꾸기(★1) (2) (8^x-2^x)/(4^x-1) 처럼 분모도 지수식으로(ln 4/ln 4 = 1 · ★2) (3) 8^x-2^x = 2^x(4^x-1) 인수 묶기 갈래를 서술형으로 요구(★2 · SC 약)."
```

```yaml
- id: RPM-CALC2-0309
  page: 47
  vendor_label: '유형 07 $\lim\limits_{x\to 0}\frac{a^x-1}{x}$ 꼴의 극한'
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x→0 에서 (3^x-1)/log₃(1+x) 의 극한값. 주관식.
  category: "분자·분모를 x 로 나눠 ln 3 ÷ (1/ln 3) → (ln 3)²"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "(a^x-1)/x 꼴의 극한 — 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (3^x-1)/x → ln 3, log₃(1+x)/x → 1/ln 3 이므로 비는 (ln 3)². 두 공식의 비 한 줄. 밑 3 이 분자(ln 3)와 분모(1/ln 3)에 반대로 작용하는 표기 함정(T-표기). 통찰 없음·M_total 4 → 중하 출발점에서 ★1.
  tier: star_1
  mechanism_primary: "(a^x-1)/log_a(1+x) → ln a ÷ (1/ln a) = (ln a)^2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$(\ln 3)^2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0309.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 3 을 다른 양수 a 로(답 (ln a)^2). 분자·분모 밑을 다르게(a, b) 두면 ln a·ln b. 제약: 밑 ≠ 1, 밑이 e 면 답 1 로 유형 신호가 사라짐."
    creative: "(1) 분자·분모를 뒤집어 1/(ln 3)^2 (★1) (2) (3^x-1)/log_3(1+2x) 로 계수 추가(★1) (3) (3^x-1)(9^x-1)/x^2 처럼 곱으로 확장(★2)."
```

```yaml
- id: RPM-CALC2-0310
  page: 47
  vendor_label: '유형 07 $\lim\limits_{x\to 0}\frac{a^x-1}{x}$ 꼴의 극한'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x→-1 에서 (7^{x+1}-1)/(x²-1) = ln a 일 때 양수 a 의 값. 주관식.
  category: "x+1=t 치환 → (7^t-1)/(t(t-2)) → -ln 7/2 → ln a = ln 7^{-1/2} → a=√7/7"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "(a^x-1)/x 꼴의 극한 — 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분모를 (x+1)(x-1) 로 묶고 x+1 = t 로 두면 (7^t-1)/t · 1/(t-2) → ln 7·(-1/2). 이를 ln a 와 놓아 a = 7^{-1/2} = 1/√7 = √7/7. 치환·부호(t-2 → -2)·로그를 거듭제곱으로 되돌리는 표기 처리와 분모 유리화까지 M_total 8 이지만 모두 표준 절차라 통찰 없음. 중 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "(a^{x-c}-1)/((x-c)·g(x)) → ln a/g(c) = k ln a → ln(a^k) → a^k"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{\sqrt{7}}{7}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0310.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 7, 극한점 -1, 분모 x^2-1 을 바꿔 답이 a^{k} 꼴이 되게(k = 1/g(c)). 제약: 분모가 (x-c) 를 인수로 가져야 하고 답의 유리화 형태(√7/7)를 답안 형식으로 명시."
    creative: "(1) 우변을 ln a 대신 log_7 a 로 두어 밑 변환 추가(★2~3) (2) 분모를 x^2-1 대신 log_7(x+2) 로 두면 유형 05 결합(ln 7·ln 7 → (ln 7)^2 · ★2) (3) 극한값을 주고 밑을 묻는 방향으로(★2)."
```

```yaml
- id: RPM-CALC2-0311
  page: 47
  vendor_label: '유형 07 $\lim\limits_{x\to 0}\frac{a^x-1}{x}$ 꼴의 극한'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x→0 에서 (5^{ax}-1)/(3x) = b ln 5, (e^{12x}-1)/(bx) = a 를 만족시키는 양수 a, b 에 대해 a+b 의 값. 주관식.
  category: "첫 식 → a/3 = b → 둘째 식 → 12/b = a → 연립 3b²=12 → b=2, a=6"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "(a^x-1)/x 꼴의 극한 — 미정계수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (5^{ax}-1)/(3x) → (a/3)ln 5 이므로 a = 3b. (e^{12x}-1)/(bx) → 12/b = a 이므로 ab = 12. 두 식에서 3b² = 12, b = 2(양수), a = 6, 합 8. 표준 극한 두 번과 연립 한 번, '양수' 조건으로 b = -2 를 버리는 사후 필터(T-범위). 통찰 없음·M_total 6 → 중 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "두 표준 극한 → a, b 의 관계식 둘 → 연립 → 양수 조건으로 근 선택 → a+b"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0311.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 3, 12 와 우변 형태(b ln 5, a)를 바꿔 연립의 양수 해가 정수가 되게(a = 3b, ab = 12 → b^2 = 4 꼴). 제약: 연립이 b^2 = 완전제곱수가 되게 하고 '양수' 조건 유지."
    creative: "(1) 우변을 ln 5 없이 주어 ln 5 가 남는 비정수 답(★2) (2) 조건 하나를 유형 03 꼴 (1+ax)^{b/x} = e^{12} 로 바꿔 세 유형 혼합(★3) (3) 양수 조건을 빼고 모든 (a, b) 쌍의 합을 묻기(★2 · MI)."
```

### 유형 08 지수함수·로그함수의 극한과 미정계수의 결정

```yaml
- id: RPM-CALC2-0312
  page: 48
  vendor_label: "유형 08 지수함수·로그함수의 극한과 미정계수의 결정"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    x→1 에서 (ax+b)/(e^{x-1}-1) = 3 을 만족시키는 상수 a, b 에 대해 a-b 의 값. 5지선다.
  category: "분모→0 ⇒ 분자→0 (a+b=0) → a(x-1)/(e^{x-1}-1) → a=3 → b=-3"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "극한값 존재·분모→0 에서 분자도 0 이어야 함(a+b=0)을 먼저 끌어내야 식이 풀림"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "지수·로그함수의 극한과 미정계수 — 분모→0 ⇒ 분자→0"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x→1 에서 분모 → 0 이고 극한이 3 으로 존재하므로 분자 a+b = 0, b = -a. 그러면 a(x-1)/(e^{x-1}-1) → a = 3, b = -3, a-b = 6. 「분모→0 ⇒ 분자→0」 역추적(BW d1)이 이 유형의 골조이고 그 뒤는 표준 극한 한 번. 통찰 1개·M_total 6 → 대표문제 출발점 ★2 유지. [분류 이슈] 이 유형의 필수 절차인 「분모→0 ⇒ 분자→0」 을 BW d1 로 셀지 표준 절차(통찰 0)로 볼지 — 이 파일은 d1 로 통일해 기록(0312~0314 · 0316 · 0318 공통).
  tier: star_2
  mechanism_primary: "극한 존재·분모→0 ⇒ 분자→0 → 한 상수 소거 → 표준 극한 → 남은 상수"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0312.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "극한점 1, 목표값 3, 묻는 식 a-b 를 바꾸기(답 a-b = 2·목표). 제약: 분모가 극한점에서 0 이 되는 지수식이어야 하고 a, b 가 정수가 되게."
    creative: "(1) 분자·분모를 뒤집어 (e^{x-1}-1)/(ax+b) = 3 (분자→0 ⇒ 분모→0 방향 · ★2~3 · 0315 골조) (2) 분모를 e^{x-1}-1 대신 ln x 로(유형 04 · ★2) (3) 분자를 이차식 ax^2+bx+c 로 두고 조건 하나 더 주어 연립(★3)."
```

```yaml
- id: RPM-CALC2-0313
  page: 48
  vendor_label: "유형 08 지수함수·로그함수의 극한과 미정계수의 결정"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x→0 에서 (√(ax+b) - 2)/(e^x-1) = 1/2 을 만족시키는 상수 a, b 에 대해 ab 의 값. 5지선다.
  category: "분모→0 ⇒ 분자→0 (√b=2, b=4) → 유리화 → a/4 = 1/2 → a=2"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "분모→0 에서 분자 √b-2 = 0 을 먼저 끌어내 b 를 정해야 유리화가 진행됨"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "지수·로그함수의 극한과 미정계수 — 분모→0 ⇒ 분자→0"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분모 → 0 이므로 분자도 0: √b = 2, b = 4. 분자를 유리화하면 ax/{(e^x-1)(√(ax+4)+2)} 이고 x/(e^x-1) → 1, 1/(√(ax+4)+2) → 1/4 이므로 a/4 = 1/2, a = 2, ab = 8. 역추적(BW d1) 뒤 유리화 계산(Mₖ 2)이 붙어 M_total 7. 통찰 1개 → 중 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "분모→0 ⇒ 분자→0 → b 결정 → 분자 유리화 → x/(e^x-1)·1/(√(ax+b)+√b) → a/(2√b) = 목표 → a"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0313.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "√b 의 값 2 와 목표 1/2 를 바꿔 a = 2√b·목표가 정수가 되게(b 는 완전제곱수). 제약: 선택지에 a+b, a-b 오답을 두고 근호 안이 x=0 근방에서 양수."
    creative: "(1) 분모를 ln(1+x) 나 2^x-1 로 바꿔 유형 04·07 결합(★2) (2) 분자를 √(ax+b) - √(cx+d) 로 두면 유리화 후 두 상수 조건(★3) (3) 극한값 대신 '극한이 존재한다' 만 주고 가능한 (a, b) 의 관계식을 묻기(★3 · EQV)."
```

```yaml
- id: RPM-CALC2-0314
  page: 48
  vendor_label: "유형 08 지수함수·로그함수의 극한과 미정계수의 결정"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x→-1 에서 {a ln(x+2) + b}/(x²-1) = -3 을 만족시키는 상수 a, b 에 대해 a+b 의 값. 주관식.
  category: "분모→0 ⇒ 분자→0 (b=0) → x+1=t → a ln(1+t)/(t(t-2)) → -a/2 = -3 → a=6"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x=-1 에서 분모→0 이므로 분자 a ln 1 + b = 0, 즉 b = 0 을 먼저 끌어냄"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "지수·로그함수의 극한과 미정계수 — 분모→0 ⇒ 분자→0"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x→-1 에서 분모 → 0 이므로 분자 a ln 1 + b = 0, b = 0. 분모를 (x+1)(x-1) 로 묶고 x+1 = t 로 두면 a ln(1+t)/(t(t-2)) → a·1·(-1/2) = -3, a = 6, a+b = 6. 역추적(BW d1) + 치환 + 부호(x-1 → -2). 통찰 1개·M_total 6 → 중 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "분모→0 ⇒ 분자→0 → b 결정 → 치환 t=x+1 → ln(1+t)/t·1/(t-2) → -a/2 = 목표 → a"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$6$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0314.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "극한점 -1, 진수 x+2, 분모 x^2-1, 목표 -3 을 바꾸되 진수가 극한점에서 1 이 되고 분모가 (x-극한점) 을 인수로 갖게. 제약: b=0 이 나오는 구조를 유지하려면 ln 의 진수가 극한점에서 정확히 1."
    creative: "(1) 진수를 x+3 으로 바꿔 b = -a ln 2 가 나오게 하면 상수항이 로그값(★2~3) (2) 분자를 a·2^{x+1} + b 로 바꿔 유형 07 결합(★2) (3) 분모를 ln(x+2) 로 두고 분자를 지수식으로(★2)."
```

```yaml
- id: RPM-CALC2-0315
  page: 48
  vendor_label: "유형 08 지수함수·로그함수의 극한과 미정계수의 결정"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    x→0 에서 ln(1+ax)/(e^{bx+c}-1) = 7 을 만족시키는 상수 a, b, c 에 대해 (a+c)/b 의 값. 주관식(서술형).
  category: "분자→0·극한값≠0 ⇒ 분모→0 (c=0) → a/b = 7 → (a+c)/b = 7"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "분자→0 인데 극한이 0 이 아니므로 분모도 0 이어야 함(e^c=1, c=0) — 통상과 반대 방향 역추적이고 '극한값 ≠ 0' 조건을 써야 성립"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "지수·로그함수의 극한과 미정계수 — 분자→0 ⇒ 분모→0"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x→0 에서 분자 ln(1+ax) → 0 인데 극한이 7(≠0) 이므로 분모 e^c - 1 = 0, c = 0. 그러면 ln(1+ax)/(e^{bx}-1) → a/b = 7 이고 a, b 는 따로 정해지지 않지만 묻는 (a+c)/b = a/b = 7. 「분자→0·극한≠0 ⇒ 분모→0」 은 0312~0314 의 반대 방향이라 d2. 통찰 1개 d2·M_total 6 → 중 출발점 ★2 유지, 통찰형. 서술형 +0.
  tier: star_2
  mechanism_primary: "분자→0·극한≠0 ⇒ 분모→0 → c 결정 → a/b = 목표 → 묻는 식을 a/b 로 환원"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0315.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "목표값 7 과 묻는 식 (a+c)/b 를 바꾸되 답이 a/b 와 c 로만 정리되게(예: (2a-c)/b = 2·목표). 제약: 극한값 ≠ 0 유지(0 이면 c 가 결정되지 않음), a, b 개별값이 정해지지 않는 구조 유지."
    creative: "(1) 분모를 a^{bx+c}-1 로 바꿔 ln a 가 남게(★2) (2) 극한값을 0 으로 주면 c 가 미정 → '가능한 c 의 조건' 을 묻는 MI 형(★3) (3) 조건을 하나 더(예: a+b=16) 주어 개별값 결정 후 abc 를 묻기(★2~3)."
```

### 유형 09 지수함수·로그함수의 연속과 미정계수

```yaml
- id: RPM-CALC2-0316
  page: 48
  vendor_label: "유형 09 지수함수·로그함수의 연속과 미정계수"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    x≠0 에서 ln(5x+a)/x, x=0 에서 b 인 함수가 x=0 에서 연속이 되게 하는 상수 a, b 에 대해 a+b 의 값. 주관식.
  category: "연속 ⇒ lim = b → 분모→0 ⇒ 분자→0 (ln a=0, a=1) → ln(1+5x)/x → b=5"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "연속 조건을 극한값 = b 로 바꾼 뒤 분모→0 에서 ln a = 0 을 끌어내야 a 가 정해짐"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "지수·로그함수의 연속과 미정계수 — 구간별 함수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x=0 연속이려면 lim_{x→0} ln(5x+a)/x = b. 분모 → 0 이므로 ln a = 0, a = 1. 그러면 ln(1+5x)/x → 5 = b, a+b = 6. 연속 정의로 조건을 극한식으로 옮긴 뒤 「분모→0 ⇒ 분자→0」 역추적(BW d1). 통찰 1개·M_total 6 → 대표문제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "x=0 연속 ⇔ lim f = f(0) → 분모→0 ⇒ 분자→0 → a → 표준 극한 → b"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0316.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "5x 의 5 를 다른 정수 k 로(b = k). 진수를 kx+a 대신 a(1+kx) 로 두면 ln a 항이 남아 a=1 이 강제되는 구조는 같음. 제약: 분자→0 조건이 a 를 유일하게 정하게."
    creative: "(1) x≠0 부분을 (e^{ax}-1)/x, x=0 값을 b 로 바꿔 유형 06 결합(★2) (2) 구간을 x<0, x>0 으로 나눠 좌·우 극한이 각각 다른 표준형(★3) (3) f(0)=b 대신 f(0)=2b-1 처럼 함숫값에 식을 넣어 방정식 추가(★2)."
```

```yaml
- id: RPM-CALC2-0317
  page: 48
  vendor_label: "유형 09 지수함수·로그함수의 연속과 미정계수"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x≠0 에서 kx/ln(1+2x), x=0 에서 2 인 함수가 구간 (-1/2, ∞) 에서 연속일 때 상수 k 의 값. 5지선다.
  category: "x=0 연속 ⇒ lim kx/ln(1+2x) = 2 → k/2 = 2 → k=4"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수·로그함수의 연속과 미정계수 — 구간별 함수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    구간 안에서 x≠0 은 자동 연속이므로 x=0 만 보면 된다. lim kx/ln(1+2x) = k/2 이고 이것이 f(0) = 2 이면 k = 4. 연속 조건을 극한식으로 바꾼 뒤 공식 한 번. 구간 (-1/2, ∞) 는 ln(1+2x) 의 정의역일 뿐 계산에 쓰이지 않는 정보(T-범위 미끼). 통찰 없음·M_total 5 → 중 출발점 ★2 유지(연속 해석 층). [분류 이슈] 실제 계산은 공식 대입 한 번이라 ★1 로도 볼 수 있음.
  tier: star_2
  mechanism_primary: "x=0 연속 ⇔ lim kx/ln(1+2x) = f(0) → k/2 = f(0) → k"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0317.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "ln 안 계수 2 와 f(0) = 2 를 바꿔 k = 계수·f(0) 가 정수가 되게. 구간은 ln 정의역 (-1/계수, ∞) 로 맞춰 줌. 제약: k 가 선택지 정수."
    creative: "(1) x≠0 부분을 ln(1+2x)/(kx) 로 뒤집어 k = 2/f(0) 분수 답(★2) (2) f(0) 을 주지 않고 '연속이 되게 하는 f(0)' 을 묻기(★1~2) (3) 구간 밖 x = -1/2 근방의 불연속을 ㄱㄴㄷ 로 판별하게(★3 · MI)."
```

```yaml
- id: RPM-CALC2-0318
  page: 48
  vendor_label: "유형 09 지수함수·로그함수의 연속과 미정계수"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x≤0 에서 e^x+4, x>0 에서 ln(ax+b-1)/x 인 함수가 실수 전체에서 연속일 때 양수 a, b 에 대해 ab 의 값. 주관식.
  category: "x=0 연속 ⇒ 우극한 = f(0)=5 → 분모→0 ⇒ ln(b-1)=0, b=2 → ln(1+ax)/x → a=5"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "우극한이 존재하려면 분모→0 에서 분자 ln(b-1) = 0 이어야 함을 먼저 끌어내 b 를 정함"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "지수·로그함수의 연속과 미정계수 — 구간별 함수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    경계 x=0 에서 f(0) = e^0+4 = 5 이고 우극한 lim_{x→0+} ln(ax+b-1)/x 가 5 여야 한다. 분모 → 0 이므로 ln(b-1) = 0, b = 2. 그러면 ln(1+ax)/x → a = 5, ab = 10. 구간별 함수의 경계 처리(T-경계)와 역추적(BW d1), 진수 양수 조건(T-범위). 통찰 1개·M_total 7 → 중 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "경계 x=0: 좌측 함숫값 e^0+4 = 우극한 → 분모→0 ⇒ 분자→0 → b → 표준 극한 → a"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$10$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0318.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "e^x+4 의 상수 4(→ f(0) = 5 = a)와 진수 ax+b-1 의 -1 을 바꿔 b 가 양의 정수가 되게. 제약: b-1 > 0 이어야 ln 정의, a = f(0) 이므로 f(0) 가 양의 정수."
    creative: "(1) 좌측을 e^x+4 대신 (e^{2x}-1)/x 로 두면 양쪽 모두 극한 계산(★3) (2) 경계를 x=1 로 옮겨 치환 추가(★2) (3) 우측을 log_2(ax+b-1)/x 로 바꿔 1/ln 2 가 섞이게(★2~3)."
```

```yaml
- id: RPM-CALC2-0319
  page: 48
  vendor_label: "유형 09 지수함수·로그함수의 연속과 미정계수"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    연속함수 f 가 모든 실수 x 에 대해 (x-1)f(x) = e^{2x-2}-1 을 만족시킬 때 f(1) 의 값. 주관식(서술형).
  category: "x≠1 에서 f(x) = (e^{2(x-1)}-1)/(x-1) → 연속 ⇒ f(1) = lim f(x) → t=x-1 → 2"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "항등식에 x=1 을 넣으면 0=0 이라 f(1) 이 안 나오므로, x≠1 에서 f 를 나눗셈으로 정하고 '연속' 을 f(1) = lim f(x) 로 옮겨야 함"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "지수·로그함수의 연속과 미정계수 — 연속함수의 항등식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x=1 을 대입하면 0·f(1) = 0 으로 정보가 없다. x≠1 에서 f(x) = (e^{2x-2}-1)/(x-1) 이고 f 가 연속이므로 f(1) = lim_{x→1} (e^{2(x-1)}-1)/(x-1) = 2 (t=x-1 치환). 항등식+연속을 극한으로 바꾸는 동치 변환(EQV d2)이 골조이고 계산은 표준 극한 한 번. 추상 함수(Mₐ 3)·M_total 7·통찰 1개 d2 → 중 출발점 ★2 유지, 통찰형. 서술형 +0. [분류 이슈] 통찰을 EQV 로 볼지 BW(f(1) 을 역추적)로 볼지 애매.
  tier: star_2
  mechanism_primary: "(x-c)f(x) = g(x) · f 연속 ⇒ f(c) = lim_{x→c} g(x)/(x-c) → 표준 극한 → 값"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$2$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0319.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "e^{2x-2} 의 계수 2(답 = 계수)와 극한점 1 을 바꾸되 우변이 x=c 에서 0 이 되게(e^{k(x-c)}-1 꼴). 제약: 우변을 e^{2x}-1 로 두면 x=1 에서 0 이 아니라 조건 모순 — 우변 영점과 (x-c) 영점 일치 필수."
    creative: "(1) 우변을 ln(2x-1) 로 바꿔 유형 04 결합(★2) (2) 우변을 2^{x-1}-1 로 바꿔 답에 ln 2 가 남게(★2) (3) (x-1)(x-2)f(x) = (e^{x-1}-1)(e^{x-2}-1) 로 두면 두 점 x=1, 2 에서 각각 극한 → f(1)+f(2) (★3 · MI)."
```

## 표본 판정 요약 (31문)

- ★ 분포: ★1 10 · ★2 20 · ★3 1 · ★4 0 · ★5 0
- 통찰형 3(0293 PD d2 · 0315 BW d2 · 0319 EQV d2) · 절차형 28 · premium 0 · 통찰 1개 이상 기록된 블록 10(d1 포함: 0295 EQV · 0298 RT · 0312~0314·0316·0318 BW)
- type_hint 상위: 「(1+x)^(1/x) 꼴의 극한 — 계산」 4 · 「log_a(1+x)/x 꼴의 극한 — 계산」 4 · 「(e^x-1)/x 꼴의 극한 — 계산」 3 · 「(a^x-1)/x 꼴의 극한 — 계산」 3 · 「지수·로그함수의 극한과 미정계수 — 분모→0 ⇒ 분자→0」 3 · 「지수·로그함수의 연속과 미정계수 — 구간별 함수」 3 · 그 외 「(1+x)^(1/x) 꼴 — 미정계수」 2 · 「ln(1+x)/x 꼴 — 계산」 2 · 단독 7
- 벤더 신호 대비: 대표문제 7 중 ★1 4(0296 0300 0304 0308) · ★2 3 / 중하 7 전부 ★1 / 중 16 중 ★2 16 / 상중 1 → ★3 / 서술형 3 전부 ★2
- 그림: 0문

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-CALC2-0293 | 망원곱 착안을 I-PD(규칙 발견)로 둘지 수열 단원 도구를 끌어온 I-XU 로 둘지 애매. depth 2 통찰 하나라 규칙상 ★2 유지했으나 학생 체감은 ★3 쪽 | ★2 / ★3 |
| RPM-CALC2-0295 | 벤더 상중(★3 출발)이나 골조는 0292 와 같은 「표준 극한 몫 → 지수 방정식」 미정계수형(EQV d1 · M_total 6). 벤더를 따라 ★3 으로 두고 기록 | ★2 / ★3 |
| RPM-CALC2-0312 | 유형 08·09 의 「분모→0 ⇒ 분자→0」 을 BW d1 로 셀지 표준 절차(통찰 0)로 볼지 정책 문제. 이 파일은 d1 로 통일(0312 0313 0314 0316 0318) — 카탈로그 설계 때 한쪽으로 확정 필요 | ★2 |
| RPM-CALC2-0317 | 벤더 중이나 연속 조건을 쓰면 공식 대입 한 번(M_total 5 · 통찰 0). 연속 해석 층을 인정해 ★2 로 두었으나 ★1 후보 | ★1 / ★2 |
| RPM-CALC2-0319 | 「항등식 + 연속 ⇒ f(1) = 극한」 통찰을 EQV 로 둘지 BW 로 둘지 애매. Mₐ 3(추상 함수)이라 cohort 를 중상위권으로 둠 | ★2 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 유형 03~07 은 「표준 극한 다섯 꼴의 계산」과 「같은 꼴의 미정계수」로 2×5 격자가 되지만, 계산형 골조는 전부 「표준형으로 재구성(치환·인수 분리·±1 삽입·로그 합치기) → 공식 대입」이라 카탈로그에서는 「지수·로그 표준 극한의 계산」 하나로 통합하고 꼴(e 꼴 · ln · log_a · e^x · a^x)은 태그로 두는 편이 낫다. base ★ 는 1~2(직접 대입 ★1 · 재구성 ★2). 미정계수형(0292 0295 0297 0307 0311)도 「표준 극한값의 매개변수 방정식」 하나로 통합 가능(base ★2).
- 따로 세울 유형: (a) 망원곱·수열 곱을 (1+1/x)^x 로 접기(0293 · PD) (b) 역함수 결합(0299 · 역함수 구성 뒤 표준 극한) (c) 분자→0 ⇒ 분모→0 방향의 미정계수(0315 · 반대 방향 역추적) (d) 연속함수의 항등식 f(c) = 극한(0319 · EQV) — 넷 다 이 범위에서 한 문항씩이지만 골조가 다르고 ★3 변형의 씨앗이다.
- 유형 08(극한과 미정계수)과 유형 09(연속과 미정계수)는 골조가 「분모→0 ⇒ 분자→0 → 표준 극한」으로 같고 09 는 연속 정의 층(lim = 함숫값 · 구간별 경계)만 앞에 붙으므로 카탈로그에서는 한 유형의 두 변형으로 둘 수 있다. 분리한다면 09 쪽은 T-경계·T-범위 함정이 추가된다는 점만 다르다.
- 이 범위에는 ★4 이상·SC/VF/SYM/XU 통찰이 없다. ★4 슬롯은 0293 의 이중 망원곱(PD d3), 0295 의 지수 x+a 분리, 0319 의 두 점 항등식(MI) 같은 창의 변형에서 만들어야 한다.
