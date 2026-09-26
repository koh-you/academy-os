---
name: mechanism-데이터-RPM-CALC2-04-p1
description: RPM 미적분Ⅱ 04 삼각함수의 미분(1/3 · 교과서 04-1~04-5 + 유형 01~05) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 미적분Ⅱ (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-calc2
  section: 04 삼각함수의 미분
  unit_code: CALC2-04
  part: "1/3"
  extract_range: "57~60쪽 · 0359~0398"
  total_problems: 40
  unit_total: 119
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-calc2/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-calc2/items/<id>.tex
  image_source: latex-bank/rpm-calc2/figures/ (crops.json)
---

# RPM 미적분Ⅱ · 04 삼각함수의 미분 (1/3) 정독 데이터 (v1.0)

이 파일은 RPM 미적분Ⅱ 04 삼각함수의 미분 단원의 첫 범위(57~60쪽 · 0359~0398 · 40문항)를 다룬다. 앞 21문(0359~0379)은 「교과서 04-1 ~ 04-5」 구역(csc·sec·cot · 덧셈정리 · 배각의 공식 · 삼각함수의 극한 · 삼각함수의 도함수)의 교과서 기본 문제로 난이도 표시·태그·그림이 없고, 뒤 19문(0380~0398)은 「유형 01 ~ 05」 구역(csc·sec·cot · 삼각함수 사이의 관계 · 덧셈정리 · 덧셈정리의 활용; 방정식 · 두 직선이 이루는 각)이다. 벤더 신호는 대표문제 5(0380 · 0384 · 0388 · 0392 · 0395 · level 없음) · 중하 3(0381 · 0382 · 0385) · 중 9(0383 · 0386 · 0387 · 0389 · 0390 · 0393 · 0394 · 0396 · 0397) · 상중 2(0391 · 0398) · 서술형 2(0389 · 0393) · 그림 1(0398)이다. RPM 은 구역이 곧 난이도 층이므로 교과서 구역은 ★1, 유형 구역은 level(중하 ★1~2 · 중 ★2 · 상중 ★3 · 대표문제 ★2)을 출발점으로 두고 M_total·통찰로만 ±1 조정했다. 결과는 ★1 22문 · ★2 16문 · ★3 2문(0391 · 0398)이다.

주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 사슬) · `insights[]`(유형 코드 · depth · effective_depth · 근거) · `variation_notes`(numeric/creative)를 채웠다. `depth_score` 는 insights 의 effective_depth 평균(없으면 0.00)이고, `insight_type` 은 통찰이 없거나 d1 한 개뿐이면 절차형, d2 이상 또는 2개 이상이면 통찰형으로 적었다. Mₜ 는 함정 0~1개면 1, 2~3개면 2 로 매겨 M_total 은 4 이상이다. 이차방정식의 근과 계수의 관계(0383 · 0392~0394)는 이 학년에서 표준 절차라 I-XU 로 세지 않았고, 「tanθ+cotθ = 1/(sinθcosθ)」 같은 관계식 환원은 EQV d1, 「기울기 → tan(경사각)」 전환은 RT d1 로만 적었다. ★ 조정은 「통찰 0 · M_total ≤ 5」 이면서 같은 골조의 교과서 문항이 이 범위에 있거나 중하 표시가 있는 문항(0381)만 −1 했고, 유형 골조가 교과서 구역에 없는 대표문제·중 문항은 출발점을 유지했다. 전사 답은 40문 모두 다시 구해 일치했다(「전사 답 확인 필요」 0). 유형 카탈로그가 없는 과목이므로 `type_id`·`base_star` 는 null 이고 `type_hint` 로 유형명을 제안했다. 교과서 04-2 는 전사본에서 두 group(0365~0367 「삼각함수의 값」 · 0368~0370 「식의 값」), 교과서 04-4 도 두 group(0372 빈칸 단독 · 0373~0377 「극한값」)으로 나뉘어 있으나 section 이름이 같아 한 절로 묶고 group 경계를 한 줄로 표시했다.

## 문항 데이터

### 교과서 04-1 삼각함수; $\csc x$, $\sec x$, $\cot x$

공통 발문(0359~0364): 다음 삼각함수의 값을 구하시오.

```yaml
- id: RPM-CALC2-0359
  page: 57
  vendor_label: '교과서 04-1 삼각함수; $\csc x$, $\sec x$, $\cot x$'
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    csc 45° 의 값.
  category: "csc 의 정의(1/sin) → 특수각 값 → 유리화"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "csc·sec·cot 의 정의로 특수각의 값 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    csc 45° = 1/sin 45° = 2/√2 = √2. 정의 대입 한 단계에 유리화. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "csc 45° = 1/sin 45° → 1/(√2/2) → √2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\sqrt{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0359.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각을 30°·60°·135°·π/3 같은 특수각으로, 함수를 csc·sec·cot 중 하나로. 제약: sin·cos·tan 이 0 인 각(csc 0°, sec 90°, cot 0° 등)은 정의되지 않으므로 제외, 답은 유리화한 꼴."
    creative: "(1) 둔각·음의 각(csc 150°, sec(−60°))으로 부호 판단 추가(★1) (2) 같은 각의 csc·sec·cot 값의 곱을 묻기(★1) (3) 「csc θ = √2 를 만족시키는 0 ≤ θ < 2π 의 θ 를 모두」 로 역방향(★2)."
```

```yaml
- id: RPM-CALC2-0360
  page: 57
  vendor_label: '교과서 04-1 삼각함수; $\csc x$, $\sec x$, $\cot x$'
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    sec 30° 의 값.
  category: "sec 의 정의(1/cos) → 특수각 값 → 유리화"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "csc·sec·cot 의 정의로 특수각의 값 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    sec 30° = 1/cos 30° = 2/√3 = 2√3/3. 정의 대입 한 단계에 유리화. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "sec 30° = 1/cos 30° → 2/√3 → 2√3/3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{2\sqrt{3}}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0360.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각을 60°·120°·π/6·5π/6 등으로. 제약: cos 값이 0 인 각(90°, 270°)은 제외, 유리화 필요 여부를 답 형식에 맞춰 통일."
    creative: "(1) sec 30° + csc 60° 처럼 여각 관계가 보이는 합(★1) (2) sec² 30° − tan² 30° 로 관계식 sec²−tan²=1 을 미리 체험(★1) (3) sec θ = 2√3/3 인 θ 를 0~2π 에서 모두 찾기(★2 · 부호 두 갈래)."
```

```yaml
- id: RPM-CALC2-0361
  page: 57
  vendor_label: '교과서 04-1 삼각함수; $\csc x$, $\sec x$, $\cot x$'
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    cot 60° 의 값.
  category: "cot 의 정의(1/tan 또는 cos/sin) → 특수각 값 → 유리화"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "csc·sec·cot 의 정의로 특수각의 값 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    cot 60° = 1/tan 60° = 1/√3 = √3/3. 정의 대입 한 단계. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "cot 60° = 1/tan 60° → 1/√3 → √3/3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{\sqrt{3}}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0361.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각을 30°·45°·150°·π/3 등으로. 제약: tan 이 0 인 각(0°, 180°)은 cot 이 정의되지 않고, tan 이 정의되지 않는 각(90°)은 cot = 0 으로 처리하는 점을 답지 기준과 맞춤."
    creative: "(1) cot 60° 와 tan 30° 가 같은 이유를 여각 관계로 묻기(★1) (2) cot 60° · tan 60° 로 역수 관계 확인(★1) (3) cot θ = √3/3 이고 sin θ < 0 인 θ(★2 · 사분면 판단)."
```

```yaml
- id: RPM-CALC2-0362
  page: 57
  vendor_label: '교과서 04-1 삼각함수; $\csc x$, $\sec x$, $\cot x$'
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    csc(7π/6) 의 값.
  category: "각을 π + π/6 으로 → sin 의 부호 → 역수"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "csc·sec·cot 의 정의로 특수각의 값 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    7π/6 = π + π/6 은 제3사분면이므로 sin(7π/6) = −1/2, csc(7π/6) = −2. 부호 함정(T-부호) 하나뿐인 정의 대입. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "7π/6 = π + π/6 → sin = −1/2 → csc = −2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0362.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각을 5π/6·4π/3·11π/6·−π/6 등 특수각의 π 배수 이동으로. 제약: sin 이 0 인 각(π, 2π)은 제외, 답이 정수·간단한 무리수로 떨어지게."
    creative: "(1) csc(7π/6) + sec(4π/3) 처럼 부호가 다른 두 값의 합(★1) (2) 각을 −7π/6 으로 바꿔 음의 각 처리(★1) (3) csc θ = −2 이고 cos θ > 0 인 θ 하나(★2)."
```

```yaml
- id: RPM-CALC2-0363
  page: 57
  vendor_label: '교과서 04-1 삼각함수; $\csc x$, $\sec x$, $\cot x$'
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    sec(−π) 의 값.
  category: "cos 의 짝함수 성질 → cos π = −1 → 역수"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "csc·sec·cot 의 정의로 특수각의 값 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    cos(−π) = cos π = −1 이므로 sec(−π) = −1. 음의 각 처리 한 단계. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "cos(−π) = cos π = −1 → sec(−π) = −1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0363.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각을 −π/3·−2π/3·−5π/4 등으로. 제약: cos 이 0 인 각(±π/2)은 제외, 음의 각 처리가 목적이므로 각 부호는 음수로 유지."
    creative: "(1) sec(−π) 와 csc(−π/2) 를 함께 물어 짝·홀함수 대비(★1) (2) sec(−θ) = sec θ 가 항상 성립하는 이유(★1) (3) sec(−π) + sec 0 처럼 극값에서의 값 합(★1)."
```

```yaml
- id: RPM-CALC2-0364
  page: 57
  vendor_label: '교과서 04-1 삼각함수; $\csc x$, $\sec x$, $\cot x$'
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    cot(7π/4) 의 값.
  category: "각을 2π − π/4 로 → tan 의 부호 → 역수"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "csc·sec·cot 의 정의로 특수각의 값 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    7π/4 = 2π − π/4 는 제4사분면이므로 tan(7π/4) = −1, cot(7π/4) = −1. 부호 함정 하나뿐인 정의 대입. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "7π/4 = 2π − π/4 → tan = −1 → cot = −1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0364.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각을 3π/4·5π/4·5π/3·−π/4 등으로. 제약: tan 이 0 인 각은 cot 정의 불가, 답이 ±1·±√3·±√3/3 중 하나가 되도록."
    creative: "(1) cot(7π/4) − csc(7π/4) 로 두 함수 부호 대비(★1) (2) 각을 cot 의 주기 π 를 이용해 cot(7π/4) = cot(3π/4) 임을 확인(★1) (3) cot θ = −1 인 θ 를 0~2π 에서 모두(★2 · 주기 π 두 갈래)."
```

### 교과서 04-2 삼각함수의 덧셈정리

전사본 group 두 개가 같은 section 이름을 쓴다: 0365~0367 「다음 삼각함수의 값을 구하시오」 · 0368~0370 「다음 식의 값을 구하시오」.

```yaml
- id: RPM-CALC2-0365
  page: 57
  vendor_label: "교과서 04-2 삼각함수의 덧셈정리"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    sin 105° 의 값.
  category: "105° = 60° + 45° 분해 → sin 덧셈정리 → 특수각 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "덧셈정리로 특수각의 합·차의 삼각함수 값 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    sin 105° = sin(60° + 45°) = sin 60° cos 45° + cos 60° sin 45° = (√6 + √2)/4. 분해 한 번에 공식 대입. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "105° = 60° + 45° → sin 60° cos 45° + cos 60° sin 45° → (√6 + √2)/4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{\sqrt{2}+\sqrt{6}}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0365.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각을 15°·75°·165°·5π/12 등 특수각 두 개의 합·차로 쓸 수 있는 각으로. 제약: 30°·45°·60° 의 합·차로 표현되는 각만, 답이 (√a ± √b)/4 꼴로 정리."
    creative: "(1) 같은 각을 cos 105° 로 바꿔 부호가 음수가 되게(★1) (2) sin 105° + sin 15° 처럼 두 값을 더해 한쪽 항이 소거되는 꼴(★1~2) (3) 105° = 150° − 45° 분해도 같은 답임을 확인시켜 분해의 자유도 체험(★1)."
```

```yaml
- id: RPM-CALC2-0366
  page: 57
  vendor_label: "교과서 04-2 삼각함수의 덧셈정리"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    cos 75° 의 값.
  category: "75° = 45° + 30° 분해 → cos 덧셈정리 → 특수각 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "덧셈정리로 특수각의 합·차의 삼각함수 값 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    cos 75° = cos(45° + 30°) = cos 45° cos 30° − sin 45° sin 30° = (√6 − √2)/4. cos 덧셈정리의 부호(−)만 주의. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "75° = 45° + 30° → cos 45° cos 30° − sin 45° sin 30° → (√6 − √2)/4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{\sqrt{6}-\sqrt{2}}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0366.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각을 15°·105°·165°·π/12 등으로. 제약: 특수각 두 개의 합·차로 표현되는 각만, cos 덧셈정리의 부호가 답 부호를 바꾸므로 답지 부호 확인."
    creative: "(1) cos 75° 와 sin 15° 가 같음을 여각 관계로 확인(★1) (2) cos 75° · cos 15° 를 물어 곱을 합·차로 바꾸는 골조 예고(★2) (3) cos 15° − cos 75° 의 값(★1~2)."
```

```yaml
- id: RPM-CALC2-0367
  page: 57
  vendor_label: "교과서 04-2 삼각함수의 덧셈정리"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    tan(π/12) 의 값.
  category: "π/12 = π/4 − π/6 분해 → tan 덧셈정리 → 분모 유리화"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "덧셈정리로 특수각의 합·차의 삼각함수 값 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    tan(π/12) = tan(π/4 − π/6) = (1 − 1/√3)/(1 + 1/√3) = (√3 − 1)/(√3 + 1) = 2 − √3. tan 공식 대입 뒤 유리화 한 단계가 더 있어 Mₖ 2. 교과서 구역·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "π/12 = π/4 − π/6 → (tan π/4 − tan π/6)/(1 + tan π/4 tan π/6) → (√3 − 1)/(√3 + 1) → 2 − √3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$2-\sqrt{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0367.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각을 5π/12·7π/12·75°·165° 등으로. 제약: tan 이 정의되지 않는 90° 계열은 제외, 분모 유리화 뒤 a ± b√3 꼴 정수로 정리되게."
    creative: "(1) tan 75° · tan 15° = 1 임을 이용한 곱 문제(★1) (2) tan(π/12) 를 배각 공식 tan(π/6) = 2t/(1−t²) 의 이차방정식으로 구하는 다른 풀이 요구(★2 · 04-3 결합) (3) tan 15° + cot 15° 처럼 유리화 없이 합이 정수(4)가 되는 꼴(★2)."
```

```yaml
- id: RPM-CALC2-0368
  page: 57
  vendor_label: "교과서 04-2 삼각함수의 덧셈정리"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    sin 75° cos 30° − cos 75° sin 30° 의 값.
  category: "덧셈정리 전개 꼴 인식 → sin(75° − 30°) → sin 45°"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "덧셈정리 전개 꼴을 하나의 삼각함수로 합쳐 값 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    주어진 식은 sin(α − β) 의 전개 꼴이므로 sin(75° − 30°) = sin 45° = √2/2. 공식을 거꾸로 읽는 한 단계. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "sin α cos β − cos α sin β 꼴 → sin(75° − 30°) → sin 45° → √2/2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{\sqrt{2}}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0368.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 각을 차가 특수각(30°·45°·60°·90°)이 되는 임의의 쌍(80°·20°, 100°·40° 등)으로. 제약: 두 각 자체는 특수각이 아니어도 되고 차만 특수각이면 되므로 오히려 특수각이 아닌 쌍이 골조를 더 잘 드러냄."
    creative: "(1) 항의 순서를 바꾸어 cos 75° sin 30° − sin 75° cos 30° 처럼 부호가 뒤집히게(★1) (2) sin 75° cos 30° + cos 75° sin 30° 로 합의 꼴(★1) (3) sin(x + 20°) cos(x − 10°) − cos(x + 20°) sin(x − 10°) 처럼 x 가 소거되는 항등식(★2 · Mₐ 2)."
```

```yaml
- id: RPM-CALC2-0369
  page: 57
  vendor_label: "교과서 04-2 삼각함수의 덧셈정리"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    cos 50° cos 100° − sin 50° sin 100° 의 값.
  category: "덧셈정리 전개 꼴 인식 → cos(50° + 100°) → cos 150°"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "덧셈정리 전개 꼴을 하나의 삼각함수로 합쳐 값 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    cos α cos β − sin α sin β = cos(α + β) 이므로 cos 150° = −√3/2. 공식을 거꾸로 읽고 둔각의 부호만 처리. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "cos α cos β − sin α sin β 꼴 → cos(50° + 100°) → cos 150° → −√3/2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-\dfrac{\sqrt{3}}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0369.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 각의 합이 특수각(120°·135°·150°·180°)이 되는 쌍(70°·50°, 25°·110° 등)으로. 제약: 합이 90° 면 답 0 이라 골조 확인이 약해지므로 피하고, 둔각 부호가 드러나는 합을 우선."
    creative: "(1) 부호를 +로 바꿔 cos(α − β) 꼴(★1) (2) cos 50° cos 100° − sin 50° sin 100° 와 cos 50° cos 100° + sin 50° sin 100° 를 함께 물어 차이 대비(★1) (3) cos(x + 40°) cos(x − 40°) − sin(x + 40°) sin(x − 40°) 처럼 x 가 남는 항등식(cos 2x · ★2 · 04-3 예고)."
```

```yaml
- id: RPM-CALC2-0370
  page: 57
  vendor_label: "교과서 04-2 삼각함수의 덧셈정리"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    (tan 80° − tan 50°)/(1 + tan 80° tan 50°) 의 값.
  category: "tan 덧셈정리 전개 꼴 인식 → tan(80° − 50°) → tan 30°"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "덧셈정리 전개 꼴을 하나의 삼각함수로 합쳐 값 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (tan α − tan β)/(1 + tan α tan β) = tan(α − β) 이므로 tan 30° = √3/3. 공식 역방향 한 단계. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "(tan α − tan β)/(1 + tan α tan β) 꼴 → tan(80° − 50°) → tan 30° → √3/3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{\sqrt{3}}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0370.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 각의 차(또는 합)가 30°·45°·60° 인 쌍으로. 제약: 두 각 모두 tan 이 정의되는 각(90° 계열 제외), 분모 1 ± tan α tan β 가 0 이 되는 조합(합이 90°)은 제외."
    creative: "(1) 분모 부호를 −로 바꿔 tan(80° + 50°) = tan 130° 로 둔각 부호 처리(★1) (2) tan 80° − tan 50° = k(1 + tan 80° tan 50°) 의 k 를 묻는 방정식 꼴(★1~2) (3) tan 20° + tan 40° + √3 tan 20° tan 40° 의 값(tan 60° 항등식 변형 · ★3 · I-EQV d2)."
```

### 교과서 04-3 배각의 공식

```yaml
- id: RPM-CALC2-0371
  page: 57
  vendor_label: "교과서 04-3 배각의 공식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    cos α = −4/5, π/2 < α < π 일 때 ⑴ sin α ⑵ tan α ⑶ sin 2α ⑷ tan 2α 의 값.
  category: "사분면으로 sin·tan 부호 결정 → 배각의 공식 대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "한 삼각함수 값과 사분면이 주어질 때 배각의 공식으로 sin 2α·tan 2α 의 값"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    제2사분면이므로 sin α = 3/5, tan α = −3/4. sin 2α = 2 sin α cos α = −24/25, tan 2α = 2 tan α/(1 − tan² α) = (−3/2)/(7/16) = −24/7. 소문항 넷이 부호 결정 → 공식 대입의 사슬이라 Mₛ 2. 교과서 구역·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "cos α = −4/5, 제2사분면 → sin α = 3/5, tan α = −3/4 → sin 2α = 2 sin α cos α = −24/25 → tan 2α = 2 tan α/(1 − tan² α) = −24/7"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '(1) $\dfrac{3}{5}$ \quad (2) $-\dfrac{3}{4}$ \quad (3) $-\dfrac{24}{25}$ \quad (4) $-\dfrac{24}{7}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0371.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "cos α 값을 피타고라스 삼조(5·12·13, 8·15·17)의 비로, 사분면을 제3·제4로. 제약: 1 − tan² α ≠ 0 이 되도록 tan α ≠ ±1, 소문항 ⑴⑵ 의 부호가 사분면과 일치."
    creative: "(1) sin α 를 주고 cos 2α 를 세 가지 꼴(1 − 2sin², 2cos² − 1, cos² − sin²)로 구하게(★1) (2) 소문항 유도를 빼고 tan 2α 만 묻기(★2 · Mₛ 유지·유도 없음) (3) sin 2α 를 주고 sin α + cos α 의 값을 묻는 역방향((sin α + cos α)² = 1 + sin 2α · ★2 · I-EQV d1)."
```

### 교과서 04-4 삼각함수의 극한

전사본 group 두 개가 같은 section 이름을 쓴다: 0372 빈칸 채우기 단독 · 0373~0377 「다음 극한값을 구하시오」.

```yaml
- id: RPM-CALC2-0372
  page: 57
  vendor_label: "교과서 04-4 삼각함수의 극한"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    lim_{x→0} sin 3x/(2x) 의 값을 구하는 과정의 빈칸 넷 채우기(분모를 3x 로 맞추고 3/2 를 곱하는 과정).
  category: "sin 3x/(3x) 꼴로 맞추기 → 계수 3/2 → 1 × 3/2"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "lim sin(ax)/(bx)·tan(ax)/(bx) 꼴의 기본 극한"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    sin 3x/(2x) = sin 3x/(3x) × 3/2 → 1 × 3/2 = 3/2. 빈칸은 3x · 3/2 · 3/2 · 3/2. 과정이 다 보이는 유도형. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "sin 3x/(2x) → sin 3x/(3x) × 3/2 → 1 × 3/2 → 3/2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$3x$, $\dfrac{3}{2}$, $\dfrac{3}{2}$, $\dfrac{3}{2}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0372.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "sin 의 계수 a 와 분모 계수 b 를 자유(sin 5x/(4x), sin 2x/(7x)). 제약: 빈칸 네 개가 ax · a/b · a/b · a/b 의 같은 구조를 유지, a/b 는 기약분수."
    creative: "(1) 빈칸을 없애고 값만 묻기(0373 형 · ★1) (2) tan 3x/(2x) 로 바꿔 tan x/x → 1 유도(★1) (3) sin 3x/sin 2x 로 바꿔 분자·분모를 각각 맞추는 두 단계(★1~2)."
```

```yaml
- id: RPM-CALC2-0373
  page: 57
  vendor_label: "교과서 04-4 삼각함수의 극한"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    lim_{x→0} tan 4x/(3x) 의 값.
  category: "tan 4x/(4x) 꼴로 맞추기 → 계수 4/3"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "lim sin(ax)/(bx)·tan(ax)/(bx) 꼴의 기본 극한"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    tan 4x/(3x) = tan 4x/(4x) × 4/3 → 4/3. 기본 극한 한 단계. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "tan 4x/(3x) → tan 4x/(4x) × 4/3 → 4/3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{4}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0373.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "tan 의 계수와 분모 계수 자유(tan 5x/(2x), tan(x/2)/(3x)). 제약: 계수 비가 기약분수, 분모 계수 0 금지."
    creative: "(1) 분모를 sin 3x 로 바꿔 tan 4x/sin 3x(★1) (2) x → 0 대신 x → 0+ 에서 tan 4x/(3|x|) 처럼 절댓값을 넣어 좌·우극한 대비(★2 · Mₜ 2) (3) lim x/tan 4x 처럼 역수 꼴(★1)."
```

```yaml
- id: RPM-CALC2-0374
  page: 57
  vendor_label: "교과서 04-4 삼각함수의 극한"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    lim_{x→0} sin x/tan 2x 의 값.
  category: "분자·분모를 각각 x·2x 로 나눠 기본 극한 곱 → 계수 1/2"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "lim sin(ax)/(bx)·tan(ax)/(bx) 꼴의 기본 극한"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    sin x/tan 2x = (sin x/x) × (2x/tan 2x) × 1/2 → 1 × 1 × 1/2 = 1/2. 분자·분모를 따로 맞추는 한 단계. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "sin x/tan 2x → (sin x/x) × (2x/tan 2x) × 1/2 → 1/2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0374.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자 sin 계수·분모 tan 계수 자유(sin 3x/tan 5x, tan 2x/sin 6x). 제약: 계수 비 기약, 분자·분모 함수 종류를 바꿔도 값은 계수 비."
    creative: "(1) sin x · cos 2x/sin 2x 처럼 cos 인자를 섞어 극한값에 영향 없는 인자 판별(★1) (2) sin 2x/tan 3x + tan x/sin 4x 처럼 두 항의 합(★1~2) (3) sin(sin x)/tan 2x 처럼 합성 함수를 넣어 sin t/t 를 두 번 쓰기(★2 · I-EQV d1)."
```

```yaml
- id: RPM-CALC2-0375
  page: 57
  vendor_label: "교과서 04-4 삼각함수의 극한"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    lim_{x→0} (sin 2x + tan x)/(3x) 의 값.
  category: "항별로 나눠 sin 2x/x → 2, tan x/x → 1 → (2 + 1)/3"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "lim sin(ax)/(bx)·tan(ax)/(bx) 꼴의 기본 극한"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (sin 2x + tan x)/(3x) = (1/3)(sin 2x/x + tan x/x) → (2 + 1)/3 = 1. 분자를 항별로 나누는 한 단계. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "(sin 2x + tan x)/(3x) → (1/3)(sin 2x/x + tan x/x) → (2 + 1)/3 → 1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$1$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0375.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "sin·tan 의 계수와 분모 계수 자유(sin 4x − tan 2x)/(5x) 등. 제약: 분자 두 항의 계수 합(차)이 분모 계수로 나뉘어 간단한 값이 되게, 답 0 이 되는 조합(sin 2x − tan 2x)은 골조 확인이 약함."
    creative: "(1) 분모를 sin 3x 로 바꿔 세 항 모두 x 로 나누기(★1) (2) 분자에 x cos x 항을 섞어 극한 1 인 항 추가(★1) (3) (sin 2x + tan x)/(3x) 를 (sin 2x + tan x)/(1 − cos x) 로 바꿔 발산 판별(★2 · 차수 비교)."
```

```yaml
- id: RPM-CALC2-0376
  page: 57
  vendor_label: "교과서 04-4 삼각함수의 극한"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    lim_{x→∞} x sin(1/x) 의 값.
  category: "1/x = t 치환(x → ∞ ⇔ t → 0+) → sin t/t → 1"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "치환으로 바꾸는 삼각함수의 극한(1/x = t · x − a = t)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    1/x = t 로 두면 x → ∞ 일 때 t → 0+ 이고 x sin(1/x) = sin t/t → 1. 치환 한 단계가 전부이며 교과서 표준. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "1/x = t, x → ∞ ⇒ t → 0+ → x sin(1/x) = sin t/t → 1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$1$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0376.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x sin(3/x) · 2x tan(1/x) · x² sin(1/x²) 처럼 계수·차수 변경. 제약: 치환 뒤 sin(at)/t 꼴이 되어 값이 a 로 떨어지게, x → −∞ 로 바꾸면 t → 0− 이지만 값은 같음."
    creative: "(1) x → ∞ 에서 x sin(1/x) 대신 x(1 − cos(1/x)) 로 바꿔 값 0 (★2 · 1 − cos 처리) (2) lim x sin(1/x) 과 lim_{x→0} x sin(1/x) 을 함께 물어 후자는 샌드위치 정리(★2 · I-SC d1 두 도구) (3) x sin(π/x) 로 π 배 값(★1)."
```

```yaml
- id: RPM-CALC2-0377
  page: 57
  vendor_label: "교과서 04-4 삼각함수의 극한"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    lim_{x→π} tan x/(x − π) 의 값.
  category: "x − π = t 치환 → tan(π + t) = tan t (주기) → tan t/t → 1"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "치환으로 바꾸는 삼각함수의 극한(1/x = t · x − a = t)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x − π = t 로 두면 t → 0 이고 tan x = tan(π + t) = tan t 이므로 tan t/t → 1. 치환과 주기 π 처리 두 단계. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "x − π = t, t → 0 → tan(π + t) = tan t → tan t/t → 1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$1$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0377.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "극한점을 π/2·2π·−π 로, 분자를 sin x·sin 2x 로. 제약: 치환 뒤 삼각함수가 sin t·tan t 로 정리되는 극한점(π 의 정수배 또는 π/2 계열에서 cos → sin 전환)만, 부호 변화(sin(π + t) = −sin t)는 답 부호에 반영."
    creative: "(1) 분자를 sin x 로 바꿔 sin(π + t) = −sin t 의 부호 반전 체험(★1 · Mₜ) (2) lim_{x→π/2} cos x/(x − π/2) 로 cos → −sin 전환(★1~2) (3) lim_{x→π} tan x/(x² − π²) 로 인수분해 결합(★2)."
```

### 교과서 04-5 삼각함수의 도함수

공통 발문(0378~0379): 다음 함수를 미분하시오.

```yaml
- id: RPM-CALC2-0378
  page: 57
  vendor_label: "교과서 04-5 삼각함수의 도함수"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    y = cos x − sin x 의 도함수.
  category: "항별 미분 (cos)' = −sin, (sin)' = cos"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "sin·cos 의 도함수 공식으로 미분(합·차·곱)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    y' = −sin x − cos x. 도함수 공식 대입 한 단계에 부호만 주의. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "y = cos x − sin x → y' = (cos x)' − (sin x)' → −sin x − cos x"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y''=-\sin x-\cos x$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0378.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수를 붙여 3 sin x + 2 cos x, x² 나 e^x 항을 섞어 다항·지수 함수와 합. 제약: 이 범위 도구는 sin·cos 의 도함수와 합·차·곱뿐이므로 합성함수(sin 2x)는 다음 범위."
    creative: "(1) y' 의 x = π/3 에서의 값(★1) (2) y'' 을 구해 y'' = −y 확인(★1) (3) y = a sin x + b cos x 의 y'(0) = 2, y(0) = 1 로 a·b 결정(★2 · 미정계수)."
```

```yaml
- id: RPM-CALC2-0379
  page: 57
  vendor_label: "교과서 04-5 삼각함수의 도함수"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    y = sin x cos x 의 도함수.
  category: "곱의 미분법 → cos x · cos x + sin x · (−sin x)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "sin·cos 의 도함수 공식으로 미분(합·차·곱)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    곱의 미분법으로 y' = cos x · cos x + sin x · (−sin x) = cos² x − sin² x. 공식 대입 한 단계(= cos 2x 로 써도 됨). 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "y = sin x cos x → (sin x)' cos x + sin x (cos x)' → cos² x − sin² x"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y''=\cos^2 x-\sin^2 x$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0379.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "y = x sin x · y = e^x cos x · y = sin² x 처럼 곱의 다른 짝으로. 제약: 곱의 미분법과 sin·cos 도함수만으로 풀리는 꼴(몫·합성은 다음 범위), 답 형식은 답지처럼 전개 꼴로 통일."
    creative: "(1) y = sin x cos x = (1/2) sin 2x 로 먼저 고친 뒤 미분하는 다른 풀이와 비교(★1~2 · I-SC d1 두 갈래 · 합성 미분은 다음 범위) (2) y'(π/4) = 0 이 되는 이유를 배각 공식으로 설명(★1) (3) y = sin x cos x 의 x = π/6 에서의 접선 기울기(★1)."
```

### 유형 01 삼각함수; $\csc x$, $\sec x$, $\cot x$

```yaml
- id: RPM-CALC2-0380
  page: 58
  vendor_label: '유형 01 삼각함수; $\csc x$, $\sec x$, $\cot x$'
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    θ 가 제3사분면의 각이고 sin θ = −3/5 일 때 sec θ + tan θ 의 값.
  category: "사분면으로 cos 부호 결정 → sec·tan 값 → 합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "한 삼각함수 값(또는 동경 위의 점)과 사분면이 주어질 때 csc·sec·cot 의 값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    제3사분면이므로 cos θ = −4/5, sec θ = −5/4, tan θ = sin θ/cos θ = 3/4. 합 −5/4 + 3/4 = −1/2. cos 부호 결정 → sec → tan → 합의 네 단계라 Mₛ 2. 통찰 없음·M_total 5 이나 사분면 부호 처리 골조가 교과서 04-1(특수각 값)에 없으므로 대표문제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "sin θ = −3/5, 제3사분면 → cos θ = −4/5 → sec θ = −5/4, tan θ = 3/4 → 합 −1/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-\dfrac{1}{2}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0380.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "sin θ 값을 피타고라스 삼조의 비(−5/13, −8/17)로, 사분면을 제4로 바꿔 tan 부호 변경, 묻는 식을 csc θ − cot θ 등으로. 제약: 주어진 값의 부호와 사분면이 모순되지 않게, 답이 기약분수."
    creative: "(1) sec θ + tan θ 와 sec θ − tan θ 의 곱이 1 임을 이용해 하나만 구하면 다른 것이 나오게(★2 · 관계식 sec²−tan²=1 · I-EQV d1) (2) sin θ 대신 tan θ = 3/4 와 사분면을 주기(★2) (3) 사분면 대신 「cos θ < 0」 조건으로 바꿔 부호 판단을 학생이 하게(★2 · Mₜ 2)."
```

```yaml
- id: RPM-CALC2-0381
  page: 58
  vendor_label: '유형 01 삼각함수; $\csc x$, $\sec x$, $\cot x$'
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    csc θ sec θ > 0, cos θ tan θ < 0 을 동시에 만족시키는 θ 는 제 몇 사분면의 각인지.
  category: "csc·sec 부호를 sin·cos 부호로 → cos θ tan θ = sin θ → 교집합"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수 값의 부호 조건으로 사분면 결정"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    csc θ sec θ > 0 ⇔ sin θ cos θ > 0 (제1·3사분면), cos θ tan θ = sin θ < 0 (제3·4사분면) → 제3사분면. 부호 조건 두 개의 교집합, 세 단계. 중하 출발(★1~2)·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "csc θ sec θ > 0 ⇔ sin θ cos θ > 0 → 제1·3 / cos θ tan θ = sin θ < 0 → 제3·4 → 제3사분면"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "제$3$사분면"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0381.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "조건 쌍을 sec θ tan θ < 0 · csc θ cot θ > 0 등 다른 조합으로. 제약: 두 조건의 교집합이 한 사분면으로 결정되게(교집합이 둘이면 발문을 「가능한 사분면 모두」 로), 곱이 항상 양(sec θ cos θ)인 무의미 조건은 제외."
    creative: "(1) 답을 사분면 대신 「|sin θ| + |cos θ| 를 간단히」 로 이어 부호 활용(★2) (2) 조건을 「csc θ sec θ < 0 이고 sin θ − cos θ > 0」 처럼 사분면 안에서 더 좁히기(★2 · Mₜ 2) (3) 세 조건이 모순이어서 「그런 θ 가 없다」 를 답하게(★2 · I-VF d1)."
```

```yaml
- id: RPM-CALC2-0382
  page: 58
  vendor_label: '유형 01 삼각함수; $\csc x$, $\sec x$, $\cot x$'
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    원점과 점 P(12, −5) 를 지나는 동경 OP 가 나타내는 각 θ 에 대하여 25 csc θ cot θ 의 값.
  category: "OP = 13 → sin·cos 값 → csc·cot 역수 → 곱"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "한 삼각함수 값(또는 동경 위의 점)과 사분면이 주어질 때 csc·sec·cot 의 값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    OP = 13 이므로 sin θ = −5/13, cos θ = 12/13 → csc θ = −13/5, cot θ = −12/5 → 25 × 156/25 = 156. 반지름 → 값 → 역수 → 곱의 네 단계. 중하 출발(★1~2)·통찰 없음·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "P(12, −5) → OP = 13 → sin θ = −5/13, cos θ = 12/13 → csc θ cot θ = (−13/5)(−12/5) = 156/25 → 156"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$156$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0382.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "점을 (−3, 4)·(−8, −15)·(5, −12) 처럼 피타고라스 삼조로, 앞 계수 25 는 분모 제곱(25 = 5²)에 맞춰 정수가 되도록 조정. 제약: 좌표 부호가 사분면을 결정하므로 csc·cot 의 부호가 답 부호를 바꿈."
    creative: "(1) 점 대신 「동경이 직선 y = −(5/12)x 위, cos θ > 0」 으로 주기(★2 · 사분면 갈래) (2) csc θ cot θ 대신 sec θ − csc θ 처럼 합·차(★2) (3) 점 P(a, −5) 이고 cot θ = −12/5 일 때 a (★2 · 역방향)."
```

```yaml
- id: RPM-CALC2-0383
  page: 58
  vendor_label: '유형 01 삼각함수; $\csc x$, $\sec x$, $\cot x$'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    이차방정식 12x² + ax + b = 0 의 두 근이 tan θ, cot θ 이고 sin θ + cos θ = −1/5 일 때 a + b. 5지선다.
  category: "근과 계수의 관계(곱 = 1 → b) → 합 조건 제곱 → sin θ cos θ → tan θ + cot θ = 1/(sin θ cos θ) → a"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "tan θ + cot θ 를 1/(sin θ cos θ) 로 바꾸고, sin θ + cos θ = −1/5 를 제곱해 sin θ cos θ = −12/25 로 옮겨 두 조건을 연결"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "이차방정식의 두 근이 tan θ, cot θ 일 때 근과 계수의 관계 + 삼각함수 관계식으로 계수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    곱 tan θ cot θ = 1 = b/12 → b = 12. (sin θ + cos θ)² = 1/25 → sin θ cos θ = −12/25. tan θ + cot θ = 1/(sin θ cos θ) = −25/12 = −a/12 → a = 25, a + b = 37. 근과 계수의 관계는 이 학년 표준 절차라 XU 로 세지 않고, 관계식 환원(EQV d1) 하나. 중 출발·M_total 7·통찰 1 → ★2 유지.
  tier: star_2
  mechanism_primary: "곱 = 1 → b = 12 / (sin θ + cos θ)² = 1/25 → sin θ cos θ = −12/25 → tan θ + cot θ = 1/(sin θ cos θ) = −25/12 = −a/12 → a = 25 → 37"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0383.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차항 계수 12 와 sin θ + cos θ 의 값(±1/5, ±7/5 계열 = 3·4·5 삼조)을 바꿀 수 있음. 제약: (sin θ + cos θ)² ≤ 2 이고 sin θ cos θ = ((sin θ + cos θ)² − 1)/2 가 0 이 아니어야 하며, a = −k/(sin θ cos θ) 가 정수가 되도록 이차항 계수를 분모의 배수로."
    creative: "(1) 두 근을 sin θ, cos θ 로 바꿔 합·곱 자체가 조건(★2 · 같은 골조) (2) sin θ − cos θ 의 값을 주면 부호 갈래가 생겨 sin θ cos θ 만 유일(★2) (3) a·b 를 구한 뒤 「θ 의 사분면」 까지 묻기(sin θ cos θ < 0 이면서 합이 음 → 제4 · ★3 · I-MI d1)."
```

### 유형 02 삼각함수 사이의 관계

```yaml
- id: RPM-CALC2-0384
  page: 58
  vendor_label: "유형 02 삼각함수 사이의 관계"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    1/(1 + sin θ) + 1/(1 − sin θ) = 9/4, π < θ < 3π/2 일 때 tan θ + cot θ 의 값.
  category: "통분 → 2/cos² θ → cos² θ → 사분면으로 sin·cos 부호 → tan θ + cot θ = 1/(sin θ cos θ)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 4
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "구할 tan θ + cot θ 를 1/(sin θ cos θ) 로 바꿔 sin θ·cos θ 값만 있으면 되게 환원"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각함수 사이의 관계식으로 조건식을 sin·cos 로 정리해 다른 식의 값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    좌변 = 2/(1 − sin² θ) = 2/cos² θ = 9/4 → cos² θ = 8/9, sin² θ = 1/9. 제3사분면이므로 sin θ = −1/3, cos θ = −2√2/3, sin θ cos θ = 2√2/9. tan θ + cot θ = 1/(sin θ cos θ) = 9/(2√2) = 9√2/4. 통분·관계식·부호·환원의 여섯 단계라 Mₛ 2, 무리수 처리 Mₖ 2, 부호는 둘 다 음이라 곱이 양(T-부호). 대표문제 출발 ★2·EQV d1 → ★2 유지.
  tier: star_2
  mechanism_primary: "2/(1 − sin² θ) = 2/cos² θ = 9/4 → cos² θ = 8/9 → 제3사분면 sin θ = −1/3, cos θ = −2√2/3 → tan θ + cot θ = 1/(sin θ cos θ) → 9√2/4"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{9\sqrt{2}}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0384.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 9/4 를 2/cos² θ 꼴에 맞춰 바꾸고(cos² θ 가 0~1 사이의 유리수가 되게 · 우변 ≥ 2), 사분면을 제2·제4 로 바꾸면 곱의 부호가 음. 제약: 1 − sin θ ≠ 0, 답의 근호가 정리되도록 cos² θ 의 분모를 제곱수로."
    creative: "(1) 조건을 1/(1 + cos θ) + 1/(1 − cos θ) 로 바꿔 sin² θ 가 나오게(★2 · 같은 골조) (2) 사분면 조건을 빼고 「tan θ + cot θ 의 값을 모두」 로 갈래 두 개(±)(★2~3 · I-MI d1) (3) 구할 식을 sec θ + csc θ 처럼 부호가 소거되지 않는 꼴로(★3 · 부호 갈래 + 근호 합)."
```

```yaml
- id: RPM-CALC2-0385
  page: 58
  vendor_label: "유형 02 삼각함수 사이의 관계"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    csc θ/(sec θ − tan θ) + csc θ/(sec θ + tan θ) 를 간단히 하기.
  category: "통분 → 분모 sec² θ − tan² θ = 1 → 2 csc θ sec θ"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "csc·sec·cot 가 섞인 식을 관계식으로 간단히 하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    통분하면 csc θ · 2 sec θ/(sec² θ − tan² θ) 이고 분모가 1 이므로 2 csc θ sec θ. 관계식 1 + tan² θ = sec² θ 를 분모에서 알아보는 것이 전부. 세 단계·Mₖ 2. 중하 출발(★1~2)·통찰 없음·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "통분 → csc θ (sec θ + tan θ + sec θ − tan θ)/(sec² θ − tan² θ) → 2 csc θ sec θ/1 → 2 csc θ sec θ"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2\csc\theta\sec\theta$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0385.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자를 sec θ 로, 분모 쌍을 csc θ ± cot θ 로 바꿔 관계식 csc² − cot² = 1 사용. 제약: 분모 쌍의 곱이 관계식으로 1 이 되게 짝을 맞추고, 답은 csc·sec·cot 로 표기(답지 형식)."
    creative: "(1) 부호를 −로 바꿔 두 분수의 차 → 2 csc θ tan θ 처럼 다른 결과(★2) (2) 간단히 한 결과에 θ = π/3 을 대입해 값까지(★2) (3) 「모든 θ 에 대해 좌변 = k csc θ sec θ 」 인 k 를 묻는 항등식 꼴(★2 · Mₐ 2)."
```

```yaml
- id: RPM-CALC2-0386
  page: 58
  vendor_label: "유형 02 삼각함수 사이의 관계"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    보기 ㄱ~ㄷ 의 삼각함수 항등식(cot² θ − cos² θ = cot² θ cos² θ · tan θ sec θ + sec² θ = 1/(1 − sin θ) · (1 − sin² θ)(1 − cos² θ)(1 + tan² θ)(1 + cot² θ) = 1) 중 옳은 것을 모두 고르기.
  category: "보기별로 sin·cos 로 바꿔 관계식 확인 → 셋 다 참"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수 항등식의 참·거짓 판별(ㄱㄴㄷ)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ㄱ: cot² θ − cos² θ = cos² θ(1 − sin² θ)/sin² θ = cot² θ cos² θ. ㄴ: sec θ(tan θ + sec θ) = (1 + sin θ)/cos² θ = 1/(1 − sin θ). ㄷ: cos² θ sin² θ sec² θ csc² θ = 1. 셋 다 참. 보기마다 sin·cos 환원 두 단계씩이라 Mₛ 2·Mₖ 2, 일반 θ 항등식이라 Mₐ 2. 중 출발·통찰 없음·M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "ㄱ cos² θ(1 − sin² θ)/sin² θ = cot² θ cos² θ / ㄴ (1 + sin θ)/cos² θ = 1/(1 − sin θ) / ㄷ cos² sin² sec² csc² = 1 → ㄱ, ㄴ, ㄷ"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "ㄱ, ㄴ, ㄷ"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0386.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "보기 하나를 거짓으로 바꾸기(ㄴ 의 우변을 1/(1 + sin θ) 로 · ㄷ 의 값을 2 로) 또는 tan² θ − sin² θ = tan² θ sin² θ 같은 짝 항등식으로 교체. 제약: 각 보기가 관계식 한두 개로 판별되고, 거짓 보기는 반례가 특수각으로 바로 나오게."
    creative: "(1) 보기를 「sec θ + tan θ = 1/(sec θ − tan θ)」 처럼 곱이 1 인 켤레 꼴로(★2) (2) 참인 항등식을 증명하는 서술형(★2 · 서술형) (3) ㄴ 처럼 우변이 1/(1 − sin θ) 인 식에서 θ 의 범위 제한(sin θ ≠ 1)을 물어 정의역 함정 추가(★3 · Mₜ 2)."
```

```yaml
- id: RPM-CALC2-0387
  page: 58
  vendor_label: "유형 02 삼각함수 사이의 관계"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    (1 + tan θ)/(1 − tan θ) = 2 + √3 일 때 sec² θ + csc² θ 의 값.
  category: "조건에서 tan θ 풀기(유리화) → sec² = 1 + tan², csc² = 1 + cot² 로 환원 → 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "구할 sec² θ + csc² θ 를 (1 + tan² θ) + (1 + cot² θ) 로 바꿔 tan θ 하나의 값으로 환원"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각함수 사이의 관계식으로 조건식을 sin·cos 로 정리해 다른 식의 값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    1 + tan θ = (2 + √3)(1 − tan θ) → tan θ = (1 + √3)/(3 + √3) = √3/3. sec² θ + csc² θ = (1 + tan² θ) + (1 + cot² θ) = 4/3 + 4 = 16/3. 좌변을 tan(π/4 + θ) 로 읽어 θ = π/6 을 얻는 길도 같은 길이라 SC 로 세지 않음. 중 출발·EQV d1·M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "(1 + tan θ)/(1 − tan θ) = 2 + √3 → tan θ = √3/3 → sec² θ + csc² θ = (1 + tan² θ) + (1 + 1/tan² θ) → 4/3 + 4 → 16/3"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{16}{3}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0387.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변을 2 − √3(θ = −π/12 계열)·1 + √2 등으로 바꾸거나 tan θ = 2 처럼 조건을 직접 주기. 제약: tan θ ≠ 1 (분모 0), tan θ ≠ 0 (csc 정의), 유리화 뒤 tan θ 가 간단한 값이 되게."
    creative: "(1) 좌변을 tan(π/4 + θ) 로 읽으면 θ 가 바로 나옴을 두 풀이로 비교(★2 · I-SC d1 · 유형 03 결합) (2) sec² θ + csc² θ = 1/(sin² θ cos² θ) 임을 먼저 보이고 sin 2θ 로 잇기(★3 · I-EQV d2 · 04-3 결합) (3) 조건을 (1 + tan θ)/(1 − tan θ) = k 로 두고 sec² θ + csc² θ 를 k 로 나타내기(★3 · Mₐ 2)."
```

### 유형 03 삼각함수의 덧셈정리

```yaml
- id: RPM-CALC2-0388
  page: 59
  vendor_label: "유형 03 삼각함수의 덧셈정리"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    π/2 < α < π, 3π/2 < β < 2π 이고 sin α = 3/5, cos β = √5/3 일 때 sin(α − β) 의 값.
  category: "사분면으로 cos α·sin β 부호 결정 → sin 덧셈정리 → 대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 각의 사분면과 한 삼각함수 값이 주어질 때 덧셈정리로 sin(α ± β)·cos(α ± β)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    제2사분면 cos α = −4/5, 제4사분면 sin β = −2/3. sin(α − β) = sin α cos β − cos α sin β = (3/5)(√5/3) − (−4/5)(−2/3) = √5/5 − 8/15 = (3√5 − 8)/15. 부호 결정 둘 → 공식 → 무리수 정리의 네 단계, Mₖ 2. 대표문제 출발 ★2·통찰 없음·M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "sin α = 3/5 (제2) → cos α = −4/5 / cos β = √5/3 (제4) → sin β = −2/3 → sin α cos β − cos α sin β → (3√5 − 8)/15"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{3\sqrt{5}-8}{15}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0388.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "sin α·cos β 값을 다른 삼조 비(5/13, 2√2/3)로, 사분면 조합을 바꿔 부호 변경, 묻는 식을 cos(α + β)·tan(α − β) 로. 제약: 주어진 값 절댓값 ≤ 1, 사분면과 주어진 값의 부호가 모순 없게, 근호 정리가 되는 값."
    creative: "(1) 사분면 대신 「tan α < 0, sin β < 0」 조건으로 부호 판단 위임(★2 · Mₜ 2) (2) sin(α − β) 를 구한 뒤 「α − β 가 속하는 사분면」 을 묻기(범위 합성 · ★3 · I-MI d1) (3) sin α·cos β 대신 tan α = −3/4, tan β = −2/√5 를 주고 sin(α − β) (★3 · 환원 한 단계 추가)."
```

```yaml
- id: RPM-CALC2-0389
  page: 59
  vendor_label: "유형 03 삼각함수의 덧셈정리"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    cos θ = √5/5, 3π/2 < θ < 2π 일 때 tan(π/4 + θ) 의 값. 서술형.
  category: "사분면으로 sin θ 부호 → tan θ → tan(π/4 + θ) = (1 + tan θ)/(1 − tan θ)"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "한 삼각함수 값과 사분면이 주어질 때 tan(π/4 ± θ) 의 값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    제4사분면이므로 sin θ = −2√5/5, tan θ = −2. tan(π/4 + θ) = (1 + tan θ)/(1 − tan θ) = (1 − 2)/(1 + 2) = −1/3. 부호 → tan → 공식 → 대입의 네 단계. 중 출발·통찰 없음·M_total 5 이나 사분면·덧셈정리 결합 골조가 교과서 04-2(특수각 합·차)에 없어 ★2 유지.
  tier: star_2
  mechanism_primary: "cos θ = √5/5 (제4) → sin θ = −2√5/5 → tan θ = −2 → (1 + tan θ)/(1 − tan θ) → −1/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-\dfrac{1}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0389.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "cos θ 값을 1/√10·3/√13 처럼 tan θ 가 정수가 되는 값으로, 사분면을 제2·제3 으로, 묻는 각을 π/4 − θ·3π/4 + θ 로. 제약: tan θ ≠ 1 (분모 0), 근호 정리가 되는 cos 값."
    creative: "(1) tan(π/4 + θ) 값을 먼저 주고 tan θ 를 되묻는 역방향(★2 · I-BW d1) (2) tan(π/4 + θ) · tan(π/4 − θ) = 1 임을 이용해 하나로 다른 하나(★2 · I-EQV d1) (3) sin(π/4 + θ) 를 묻고 근호 정리까지(★2 · Mₖ 2)."
```

```yaml
- id: RPM-CALC2-0390
  page: 59
  vendor_label: "유형 03 삼각함수의 덧셈정리"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    sin α + sin β = 1/2, cos α + cos β = 3/2 일 때 cos(α − β) 의 값.
  category: "두 조건을 제곱해 더하기 → 2 + 2(cos α cos β + sin α sin β) → cos(α − β)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "sin 합·cos 합 두 조건을 각각 제곱해 더하면 sin² + cos² = 1 이 두 번 나오고 교차항이 cos(α − β) 의 전개가 되어 한 식으로 결합"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "sin α + sin β, cos α + cos β 가 주어질 때 제곱해 더해 cos(α − β)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (sin α + sin β)² + (cos α + cos β)² = 2 + 2 cos(α − β) = 1/4 + 9/4 = 5/2 → cos(α − β) = 1/4. 「제곱해 더하기」 한 수가 전부라 Mₛ 1·Mₖ 1 이고, 이 결합이 CON d1(널리 알려진 표준 기법이라 d1). 중 출발·통찰 1·M_total 4 → ★2 유지.
  tier: star_2
  mechanism_primary: "(sin α + sin β)² + (cos α + cos β)² → 2 + 2 cos(α − β) = 5/2 → cos(α − β) = 1/4"
  insight_type: 절차형
  target_cohort: 중상위권
  answer: '$\dfrac{1}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0390.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 합의 값 p, q 를 자유롭게. 제약: p² + q² ≤ 4 (cos(α − β) ≥ −1) 이고 p² + q² > 0, 답 (p² + q² − 2)/2 가 간단한 유리수."
    creative: "(1) sin α − sin β, cos α − cos β 를 주고 cos(α − β) (★2 · 부호만 바뀜) (2) sin α + cos β = a, cos α + sin β = b 처럼 짝을 엇갈리게 주면 교차항이 sin(α + β) 가 됨(★3 · I-CON d2) (3) 조건 하나를 sin α + sin β = 1/2 로 두고 cos(α − β) 의 최댓값을 묻기(★4 · I-BW d2 · cos α + cos β 의 범위 분석)."
```

```yaml
- id: RPM-CALC2-0391
  page: 59
  vendor_label: "유형 03 삼각함수의 덧셈정리"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x) = cos x (0 < x < π/2) 의 역함수 g 에 대하여 g(4/5) = α, g(15/17) = β 일 때 f(α + β) 의 값.
  category: "역함수 값 → cos α = 4/5, cos β = 15/17 → 정의역에서 sin 양 → cos(α + β) 덧셈정리"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "g(4/5) = α 를 f(α) = 4/5 즉 cos α = 4/5 로 옮기고, f 의 정의역 (0, π/2) 가 g 의 치역이라 α·β 가 제1사분면임을 읽어 sin 부호를 확정"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "역함수 값으로 주어진 두 각의 덧셈정리 값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    cos α = 4/5, cos β = 15/17, α·β ∈ (0, π/2) 이므로 sin α = 3/5, sin β = 8/17. f(α + β) = cos(α + β) = 60/85 − 24/85 = 36/85. 역함수 표기를 원함수 등식으로 옮기는 EQV d1 이 진입 장벽이고 그 뒤는 0388 과 같은 절차. 상중 출발 ★3·통찰 1·M_total 6 → ★3 유지(학생 체감은 ★2~3).
    [분류 이슈] 상중 라벨 ★3 이나 M·I 판정은 EQV d1 하나·M_total 6 으로 ★2 후보 — 라벨 ★3 으로 두고 기록.
  tier: star_3
  mechanism_primary: "g(4/5) = α ⇔ cos α = 4/5, g(15/17) = β ⇔ cos β = 15/17 → 제1사분면 sin α = 3/5, sin β = 8/17 → cos(α + β) = cos α cos β − sin α sin β → 36/85"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{36}{85}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0391.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "역함수 값을 다른 삼조 비(5/13, 12/13, 7/25)로, f 를 sin x 로 바꾸면 sin 값이 주어짐. 제약: 값이 (0, 1) 안에 있어야 역함수 정의역에 들고, 정의역이 (0, π/2) 라 sin·cos 모두 양 — 정의역을 (π/2, π) 로 바꾸면 부호가 생김."
    creative: "(1) 정의역을 (π/2, π) 로 바꿔 sin 은 양·cos 은 음 부호 판단 추가(★3 · Mₜ 2) (2) f(α + β) 대신 g 의 값 하나로 「f(2α)」 를 묻기(★2 · 배각 결합) (3) f(x) = tan x 의 역함수로 g(2) = α, g(3) = β 일 때 α + β 의 값(tan(α + β) = −1 → 3π/4 · ★3 · I-EQV d2 · 각 자체를 묻는 역방향)."
```

### 유형 04 삼각함수의 덧셈정리의 활용; 방정식

```yaml
- id: RPM-CALC2-0392
  page: 59
  vendor_label: "유형 04 삼각함수의 덧셈정리의 활용; 방정식"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    이차방정식 2x² − kx + 1 = 0 의 두 근이 tan α, tan β 이고 tan(α + β) = 3 일 때 상수 k. 5지선다.
  category: "근과 계수의 관계(합 k/2 · 곱 1/2) → tan(α + β) = 합/(1 − 곱) → k"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차방정식의 두 근이 tan α, tan β 일 때 근과 계수의 관계로 tan(α + β)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    tan α + tan β = k/2, tan α tan β = 1/2 이므로 tan(α + β) = (k/2)/(1 − 1/2) = k = 3. 근과 계수의 관계 → 공식 대입의 두 단계, 미정계수 k 로 Mₐ 2. 통찰 없음·M_total 5 이나 근과 계수와 덧셈정리를 잇는 골조가 교과서 구역에 없으므로 대표문제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "합 = k/2, 곱 = 1/2 → tan(α + β) = (k/2)/(1 − 1/2) = k → k = 3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0392.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차항 계수·상수항·tan(α + β) 값을 자유. 제약: 곱 ≠ 1 (분모 0), 근이 실수가 되도록 판별식 ≥ 0 인 k 가 답이 되게, 선택지에 정수."
    creative: "(1) k 대신 상수항을 미지수로 두면 분모에 미지수가 들어가 방정식 한 단계(★2) (2) tan(α + β) 대신 α + β = π/4 를 주는 0394 형(★2) (3) 두 근이 tan α, tan β 이고 「α + β 의 값(0 < α + β < π)」 을 묻기(★2~3 · 각 복원)."
```

```yaml
- id: RPM-CALC2-0393
  page: 59
  vendor_label: "유형 04 삼각함수의 덧셈정리의 활용; 방정식"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    이차방정식 x² − 6x − 1 = 0 의 두 근이 tan α, tan β 일 때 sec²(α + β) 의 값. 서술형.
  category: "근과 계수의 관계(합 6 · 곱 −1) → tan(α + β) = 3 → sec² = 1 + tan²"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차방정식의 두 근이 tan α, tan β 일 때 근과 계수의 관계로 tan(α + β)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    합 6, 곱 −1 이므로 tan(α + β) = 6/(1 + 1) = 3, sec²(α + β) = 1 + 9 = 10. 세 단계·구체 수치라 M_total 4. 중·서술형 출발 ★2·통찰 없음 → −1 후보이나 유형 골조(근과 계수 → 덧셈정리 → 관계식)가 교과서 구역에 없어 ★2 유지.
    [분류 이슈] 중 라벨 ★2 이나 통찰 0·M_total 4 로 −1 후보 ★1 — 골조가 교과서에 없어 ★2 로 두고 기록.
  tier: star_2
  mechanism_primary: "합 = 6, 곱 = −1 → tan(α + β) = 6/(1 − (−1)) = 3 → sec²(α + β) = 1 + tan² = 10"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$10$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0393.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항·상수항 자유. 제약: 곱 ≠ 1, 근이 실수(판별식 ≥ 0), tan(α + β) 가 정수가 되도록 합이 (1 − 곱) 의 배수."
    creative: "(1) sec² 대신 cos²(α + β) 나 sin 2(α + β) 를 묻기(★2 · 관계식·배각 결합) (2) 두 근이 tan α, tan β 이고 계수에 미지수를 두어 sec²(α + β) = 10 에서 미지수 결정(★2~3 · I-BW d1) (3) 세 근이 tan α, tan β, tan γ 인 삼차방정식으로 tan(α + β + γ) (★4 · I-PD d2 · 덧셈정리 두 번)."
```

```yaml
- id: RPM-CALC2-0394
  page: 59
  vendor_label: "유형 04 삼각함수의 덧셈정리의 활용; 방정식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    이차방정식 x² − 4ax + a² + 5 = 0 의 두 근이 tan α, tan β 이고 α + β = π/4 일 때 상수 a. 5지선다.
  category: "근과 계수의 관계(합 4a · 곱 a² + 5) → tan(π/4) = 1 = 4a/(1 − a² − 5) → a 의 이차방정식(중근)"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차방정식의 두 근이 tan α, tan β 일 때 근과 계수의 관계로 tan(α + β)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    tan(α + β) = 4a/(1 − (a² + 5)) = 4a/(−a² − 4) = 1 → a² + 4a + 4 = 0 → a = −2. 근과 계수 → 공식 → 분모 정리(부호) → 이차방정식 풀이의 네 단계, 미지수 a 가 분모에 들어가 Mₖ 2·Mₐ 2. 중 출발·통찰 없음·M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "합 = 4a, 곱 = a² + 5 → 4a/(1 − a² − 5) = tan(π/4) = 1 → a² + 4a + 4 = 0 → a = −2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0394.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항 계수의 a 배수·상수항의 a² + c 를 바꿔 a 의 이차방정식이 중근 또는 두 정수근이 되게, α + β 를 3π/4 (tan = −1) 로. 제약: 곱 ≠ 1, 얻은 a 로 원래 방정식의 판별식 ≥ 0 (실근 tan 값), 선택지 정수."
    creative: "(1) a 의 이차방정식이 두 근을 갖게 하고 「모든 a 의 합」 (★2~3 · I-VF 없이 합) (2) 두 근 중 하나가 판별식 조건으로 기각되게 상수항 조정(★3 · I-VF d1) (3) α + β = π/4 와 함께 「α 가 예각일 때 tan α 의 값」 까지 묻기(★3 · 근 복원 갈래)."
```

### 유형 05 삼각함수의 덧셈정리의 활용; 두 직선이 이루는 각

```yaml
- id: RPM-CALC2-0395
  page: 60
  vendor_label: "유형 05 삼각함수의 덧셈정리의 활용; 두 직선이 이루는 각"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    두 직선 y = 3x, y = −x/2 가 이루는 예각 θ 에 대하여 tan θ 의 값.
  category: "기울기 = tan(경사각) → tan θ = |(m₁ − m₂)/(1 + m₁m₂)| → 7"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 직선이 이루는 각(기하)을 기울기 = tan(경사각) 으로 읽어 tan(α − β) 의 덧셈정리(대수)로 전환, 예각이므로 절댓값"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 직선이 이루는 예각의 tan (기울기와 덧셈정리)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    tan α = 3, tan β = −1/2 → tan θ = |(3 + 1/2)/(1 − 3/2)| = |(7/2)/(−1/2)| = 7. 전환 한 번에 공식 대입이라 M_total 4 이지만, 기울기 ↔ 경사각 전환(RT d1)이 유형의 본질이고 교과서 구역에 없어 대표문제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "tan α = 3, tan β = −1/2 → tan θ = |(tan α − tan β)/(1 + tan α tan β)| → |(7/2)/(−1/2)| → 7"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$7$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0395.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 기울기 자유(2 와 −3, 1/3 과 −2). 제약: m₁m₂ ≠ −1 (수직이면 tan 정의 불가), 답이 양의 유리수, 분모 부호가 음이 되는 조합을 섞어 절댓값 필요성 유지."
    creative: "(1) 답을 tan θ 대신 θ 자체로 하려면 기울기를 √3·0 같은 특수각 조합으로(0396 형 · ★2) (2) 한 직선을 x축으로 두어 공식 없이 경사각만으로 풀리는 축소형(★1) (3) 세 직선이 이루는 삼각형의 세 내각의 tan 값을 모두(★3 · 세 번 적용 + 내각·외각 구분 Mₜ 2)."
```

```yaml
- id: RPM-CALC2-0396
  page: 60
  vendor_label: "유형 05 삼각함수의 덧셈정리의 활용; 두 직선이 이루는 각"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    두 직선 x − y + 1 = 0, (2 − √3)x + y − √3 = 0 이 이루는 예각의 크기.
  category: "일반형 → 기울기 1, √3 − 2 → tan θ = |(m₁ − m₂)/(1 + m₁m₂)| = √3 → θ = π/3"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 직선이 이루는 각을 기울기 = tan(경사각) 으로 읽어 tan(α − β) 의 덧셈정리로 전환, 예각이므로 절댓값"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 직선이 이루는 예각의 tan (기울기와 덧셈정리)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    기울기 1 과 −(2 − √3) = √3 − 2. tan θ = |(1 − √3 + 2)/(1 + √3 − 2)| = (3 − √3)/(√3 − 1) = √3 → θ = π/3. 일반형 정리 → 전환 → 무리수 약분 → 각 복원의 네 단계, Mₖ 2. 중 출발·RT d1·M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "기울기 1, √3 − 2 → tan θ = |(1 − (√3 − 2))/(1 + (√3 − 2))| = (3 − √3)/(√3 − 1) → √3 → θ = π/3"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{\pi}{3}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0396.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기울기 쌍을 tan θ 가 1·√3·√3/3 이 되는 조합(예: 2 + √3 과 1, √3 과 0)으로. 제약: 예각이 특수각으로 떨어져야 각을 답할 수 있고, 일반형 계수에 무리수를 넣을 때 기울기 부호 처리(y 계수로 나눔)가 함정."
    creative: "(1) 한 직선을 「점 (1, 2) 와 (3, 4) 를 지나는 직선」 으로 주어 기울기 계산 단계 추가(★2) (2) 두 직선과 x축이 이루는 삼각형의 내각 셋(★3) (3) 「두 직선이 이루는 예각이 π/3 이 되도록 하는 상수」 로 역방향(0397 형 · ★2~3 · 갈래 둘)."
```

```yaml
- id: RPM-CALC2-0397
  page: 60
  vendor_label: "유형 05 삼각함수의 덧셈정리의 활용; 두 직선이 이루는 각"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    두 직선 mx − y − 1 = 0, 3x − y + 2 = 0 이 이루는 예각이 45° 일 때 양수 m 의 값.
  category: "기울기 m, 3 → |(m − 3)/(1 + 3m)| = 1 → 두 갈래 m = −2, 1/2 → 양수 조건으로 1/2"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 직선이 이루는 각 45° 를 기울기 = tan(경사각) 으로 읽어 |(m − 3)/(1 + 3m)| = tan 45° 의 방정식으로 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 직선이 이루는 예각의 tan (기울기와 덧셈정리)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    |(m − 3)/(1 + 3m)| = 1 → m − 3 = ±(1 + 3m) → m = −2 또는 m = 1/2, 양수이므로 1/2. 전환 → 절댓값 방정식 두 갈래 → 조건으로 하나 선택의 네 단계. 절댓값 갈래(T-부호)와 양수 조건(T-범위)이 함정 둘이라 Mₜ 2 이지만 「양수」 필터는 명시 조건이라 VF 로 세지 않음. 중 출발·RT d1·M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "기울기 m, 3 → |(m − 3)/(1 + 3m)| = tan 45° = 1 → m − 3 = ±(1 + 3m) → m = −2 (기각) 또는 1/2 → 1/2"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{1}{2}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0397.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "고정 기울기 3 을 2·−1/2 로, 각을 60° 로 바꾸면 무리수 갈래. 제약: 1 + 3m ≠ 0, 두 갈래 중 정확히 하나만 양수(또는 조건에 맞게)가 되어야 답이 유일, 갈래 둘이 모두 양수면 「모든 m 의 합」 으로 발문 변경."
    creative: "(1) 양수 조건을 빼고 「m 의 값을 모두」 로 두 갈래 다 답(★2 · 곱 −1 확인) (2) 두 갈래에서 나온 두 직선이 서로 수직임(m₁m₂ = −1)을 보이기(★3 · I-SYM d1 · 45° 두 방향 대칭) (3) 각 조건 대신 「직선 mx − y − 1 = 0 이 두 직선 y = 3x + 2, y = x 가 이루는 각을 이등분」 으로(★4 · 갈래 + 이등분선 두 방향 · I-MI d1)."
```

```yaml
- id: RPM-CALC2-0398
  page: 60
  vendor_label: "유형 05 삼각함수의 덧셈정리의 활용; 두 직선이 이루는 각"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    그림처럼 직선 y = x/2 를 점 (2, 1) 을 중심으로 시계 반대 방향으로 45° 회전한 직선 y = ax + b 에 대하여 ab 의 값. 5지선다.
  category: "기울기 1/2 = tan α → 회전 후 기울기 tan(α + 45°) = 3 → 점 (2, 1) 통과 → y = 3x − 5 → ab"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "직선의 회전(기하)을 「경사각 α 에 45° 를 더한다」 로 읽어 새 기울기를 tan(α + 45°) 로 두는 전환 — 공식 대입이 아니라 회전 방향·회전 중심을 각의 합과 통과점으로 스스로 옮겨야 함"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "직선을 한 점 중심으로 회전한 직선의 방정식 (경사각의 덧셈정리)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    tan α = 1/2 이므로 회전 후 기울기 tan(α + 45°) = (1/2 + 1)/(1 − 1/2) = 3. 회전 중심 (2, 1) 을 지나므로 y − 1 = 3(x − 2), y = 3x − 5 → a = 3, b = −5, ab = −15. 계산은 가볍지만(M_total 5) 회전을 경사각 덧셈으로 옮기는 RT d2 가 진입 장벽이고 반시계 방향(+45°)·중심 통과가 함정. 상중 출발 ★3·RT d2 → ★3 유지.
  tier: star_3
  mechanism_primary: "y = x/2 → tan α = 1/2 → 반시계 45° 회전 → 기울기 tan(α + 45°) = (1/2 + 1)/(1 − 1/2) = 3 → (2, 1) 통과 → y = 3x − 5 → ab = −15"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지"
  figure: crop:fig-0398.png
  latex: latex-bank/rpm-calc2/items/0398.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "원래 기울기(1/3·2)·회전 중심(직선 위의 점이어야 함)·회전각(45°·60°·30°)을 바꿀 수 있음. 제약: 회전 중심은 원래 직선 위의 점으로 그림 라벨과 일치, tan(α + 회전각) 이 정의되고(α + 회전각 ≠ 90°) 결과 기울기·절편이 정수가 되게, 그림은 회전 방향 화살표와 각 표시를 유지."
    creative: "(1) 시계 방향 회전으로 바꿔 tan(α − 45°) 부호 처리(★3 · Mₜ 2) (2) 회전각을 90° 로 주면 수직 → tan 정의 불가라 「기울기의 음의 역수」 로 갈래 인식(★3 · I-SC d1) (3) 회전 후 직선과 원래 직선·x축이 이루는 삼각형의 넓이(★4 · 교점·넓이 결합 · I-XU d1)."
```

## 표본 판정 요약 (40문)

- ★ 분포: ★1 22 · ★2 16 · ★3 2 · ★4 0 · ★5 0
- 통찰형 1(0398 RT d2) · 절차형 39 · premium 0. 통찰이 하나 이상 붙은 문항은 9(0398 + 0383 EQV d1 · 0384 EQV d1 · 0387 EQV d1 · 0390 CON d1 · 0391 EQV d1 · 0395 · 0396 · 0397 RT d1)
- type_hint 상위: 「csc·sec·cot 의 정의로 특수각의 값」 6(0359~0364) · 「lim sin(ax)/(bx)·tan(ax)/(bx) 꼴의 기본 극한」 4(0372~0375) · 「덧셈정리로 특수각의 합·차의 삼각함수 값」 3(0365~0367) · 「덧셈정리 전개 꼴을 하나의 삼각함수로 합쳐 값 구하기」 3(0368~0370) · 「이차방정식의 두 근이 tan α, tan β 일 때 근과 계수의 관계로 tan(α + β)」 3(0392~0394) · 「두 직선이 이루는 예각의 tan」 3(0395~0397) · 그 밖에 2 짜리 넷(치환 극한 0376·0377 · sin·cos 도함수 0378·0379 · 한 값/동경 → csc·sec·cot 0380·0382 · 관계식으로 다른 식의 값 0384·0387) · 단독 8(배각 0371 · 사분면 결정 0381 · 근과 계수 + 관계식 0383 · 식 간단히 0385 · 항등식 ㄱㄴㄷ 0386 · 사분면 + 덧셈정리 0388 · tan(π/4 ± θ) 0389 · 제곱해 더하기 0390 · 역함수 0391 · 직선의 회전 0398)
- 그림: 1문(`crop:fig-0398.png`)
- M_total: 4 가 24문 · 5 가 8문(0367·0371·0380·0382·0385·0389·0392·0398) · 6 이 4문(0384·0387·0388·0391) · 7 이 4문(0383·0386·0394·0397). 벤더 출발점에서 −1 한 문항은 0381(중하 · 통찰 0 · M_total 4) 하나, +1 한 문항은 없음. 대표문제 다섯(0380·0384·0388·0392·0395)은 모두 ★2, 상중 둘(0391·0398)은 ★3. 전사 답을 다시 구해 40문 모두 일치(「전사 답 확인 필요」 0).

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-CALC2-0391 | 상중 ★3 출발이나 통찰은 역함수 표기 읽기 EQV d1 하나·M_total 6 — M·I 기준 ★2 후보(뒤 절차는 0388 대표문제와 동일). 라벨 ★3 으로 두고 기록 | ★3 / ★2 |
| RPM-CALC2-0393 | 중·서술형 ★2 출발이나 통찰 0·M_total 4 로 −1 후보 ★1. 유형 골조(근과 계수 → tan 덧셈 → sec² 관계식)가 교과서 구역에 없어 ★2 유지하고 기록 | ★2 / ★1 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 통합해도 될 유형: 교과서 04-2 의 두 group 「특수각 합·차의 값」(0365~0367)과 「전개 꼴 합치기」(0368~0370)는 덧셈정리의 정방향·역방향이라 한 유형 「덧셈정리 기본 계산」(base ★1)으로 묶고 방향을 하위 태그로 둔다. 교과서 04-1(0359~0364)과 유형 01 의 0380·0382 는 「csc·sec·cot 값 구하기」 한 유형(특수각 base ★1 · 사분면/동경 조건 base ★2)으로 묶는다.
- 통합해도 될 유형: 「lim sin(ax)/(bx) 기본형」(0372~0375)과 「치환 극한」(0376·0377)은 한 유형 「삼각함수의 극한 기본」(base ★1)으로 두고 치환(1/x = t · x − a = t)을 하위 태그로 둔다. 이 범위의 극한은 전부 교과서 문항이라 base ★ 결정은 2/3 부분의 유형 구역과 합쳐서 한다.
- 통합해도 될 유형: 유형 04 셋(0392~0394)은 「근과 계수의 관계 → tan(α + β)」 한 골조(base ★2)이며, 유형 01 에 있는 0383(두 근이 tan θ, cot θ · 관계식 결합)도 같은 「근과 계수 + 삼각함수」 묶음에서 참조한다. 유형 05 의 0395~0397 은 「두 직선이 이루는 각」 한 유형(base ★2 · RT d1 항상)이고, 0398 「직선의 회전」 은 같은 유형의 하위 태그로 두되 RT d2 라 base ★3 슬롯 후보로 표시한다.
- 따로 세울 유형: 「삼각함수 사이의 관계식 — 식 간단히·항등식 판별」(0385·0386)은 계산형(base ★2)으로, 「관계식 + 조건 값 → 다른 식의 값」(0384·0387 · EQV d1 항상)은 별도 유형(base ★2)으로 나눈다. 뒤 유형은 tan θ + cot θ = 1/(sin θ cos θ) · sec² + csc² = 1/(sin² cos²) 환원이 공통 씨앗이라 ★3 변형(배각 결합)으로 확장하기 좋다.
- 따로 세울 유형: 「제곱해 더하기 → cos(α − β)」(0390 · CON d1)는 골조가 유일하고 ★3~4 변형(짝 엇갈리기 · 최댓값)의 씨앗이라 독립 유형(base ★2). 「역함수 값 → 덧셈정리」(0391)는 EQV 진입이 본질이라 「덧셈정리 값 구하기」 유형의 하위 태그(★2~3)로 두되, f = tan 으로 바꿔 각 자체를 묻는 변형은 ★3 슬롯 후보.
- 참조로 둘 유형: 「삼각함수 값의 부호로 사분면 결정」(0381)은 수Ⅰ 삼각함수 단원의 같은 유형과 골조가 같으므로 이 단원 카탈로그에서는 csc·sec·cot 표기만 추가된 참조 항목으로 둔다. 「배각의 공식」(0371)과 「sin·cos 도함수」(0378·0379)는 이 범위에 교과서 문항만 있어 2/3·3/3 부분의 유형 구역과 합쳐서 base ★ 를 정한다.
