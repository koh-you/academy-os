---
name: mechanism-데이터-RPM-CALC1-07-p1
description: RPM 미적분Ⅰ 07 부정적분(1/2 · 교과서 07-1 부정적분 ~ 유형 06 접선의 기울기와 부정적분) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 미적분Ⅰ (22개정) · 전사본 latex-bank/rpm-calc1
  section: 07 부정적분
  unit_code: CALC1-07
  part: "1/2"
  extract_range: "97~100쪽 · 0606~0646"
  total_problems: 41
  unit_total: 84
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-calc1/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-calc1/items/<id>.tex
  image_source: latex-bank/rpm-calc1/figures/ (crops.json)
---

# RPM 미적분Ⅰ · 07 부정적분 (1/2) 정독 데이터 (v1.0)

이 파일은 RPM 미적분Ⅰ 07 부정적분 단원(84문) 가운데 97~100쪽의 41문항(0606~0646)을 다룬다. 구역은 교과서 07-1 부정적분(4문 · 정의 확인 · ∫f dx=F+C 에서 f) · 07-2 부정적분과 미분의 관계(2문 · d/dx∫ 와 ∫d/dx 의 대조) · 07-3 함수 y=x^n 의 부정적분(3문) · 07-4 함수의 실수배, 합, 차의 부정적분(9문 · 전개·약분·두 적분 결합) 뒤로 유형 01 부정적분의 정의 · 유형 02 부정적분과 미분의 관계 · 유형 03 부정적분과 미분의 관계를 이용하여 함수 구하기 · 유형 04 부정적분 구하기 · 유형 05 f'(x) 가 주어질 때 f(x) 구하기 · 유형 06 접선의 기울기와 부정적분 순이다. 교과서 구역은 ★1 출발, 각 유형의 첫 문항은 「대표문제」 태그(난이도 표시 없음 → ★2 출발), 나머지는 하·중하·중·상중 난이도 표시(★1 · ★1~2 · ★2 · ★3 출발)와 「서술형」 태그를 가진다. 그림 문항은 없다.

주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 사슬) · `insights[]`(유형 코드 · depth · effective_depth · 근거) · `variation_notes`(numeric/creative)를 채웠다. `depth_score` 는 insights 의 effective_depth 평균(없으면 0.00)이고, `insight_type` 은 통찰이 없거나 d1 한 개뿐이면 절차형, d2 이상 또는 2개 이상이면 통찰형으로 적었다. Mₜ 는 함정 0~1개면 1, 2~3개면 2 로 매겨 M_total 은 4 이상이고, 식에 미정계수가 있으면 Mₐ 2 로 두었다. ★ 조정은 벤더 출발점에서 「통찰 0 · M_total ≤ 5」 이면서 같은 골조의 교과서 문항이 이 범위에 있고 적분상수 결정·값 대입만 더해진 문항만 −1 했고(대표문제 0628 · 0635, 상중 표시 0631), 중하 표시 문항 가운데 같은 조건인 0629 · 0636 · 0637 · 0640 은 벤더 범위(★1~2)의 아래쪽 ★1 로 두었다. 교과서에 없는 골조(인수 나눗셈 0624 · 곱의 미분 0626 · 미정계수 0627·0639·0646 · 두 함수 연립 0632~0634 · 이차함수 최대·최소 결합 0630·0645 · 문장 해석·이중 적분 0641 · 인수정리 0642 · 접선 기울기 번역 0643·0644 · 규칙 항별 적분 0638)는 출발점을 유지했다. +1 후보(통찰 2개 이상 · depth 3)는 없고, d1 통찰 하나를 기록한 문항은 0633(인수 배정 역추적)·0642(나누어떨어짐 ↔ f(1)=0) 둘이다. 전사 답은 41문 모두 다시 구해 일치했다(「전사 답 확인 필요」 0).

## 문항 데이터

### 교과서 07-1 부정적분

```yaml
- id: RPM-CALC1-0606
  page: 97
  vendor_label: "교과서 07-1 부정적분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    부정적분 등식 네 개(∫(−2)dx · ∫x²dx · ∫(6x−1)dx · ∫(4x³+6x)dx 의 결과)를 보기 ㄱ~ㄹ 로 주고 옳은 것을 모두 고르기(C 는 적분상수).
  category: "각 보기 우변 미분 → 피적분함수와 대조 → 옳은 보기 선택"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부정적분의 정의 — 등식의 참·거짓 판별(우변 미분으로 확인)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    각 보기의 우변을 미분하면 ㄱ −2 ✓ · ㄴ 3x² ≠ x² ✗ · ㄷ 6x−1 ✓ · ㄹ 4x³+6x² ≠ 4x³+6x ✗. 「부정적분 = 미분해서 되돌아오는 것」 정의를 네 번 확인하는 한 단계. 교과서 구역 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "각 보기 우변 미분 → 피적분함수와 비교 → ㄱ·ㄷ 만 일치"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "ㄱ, ㄷ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0606.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 보기의 다항식(차수 1~3)과 틀린 보기의 오류 위치(계수 1/(n+1) 누락 · 항 하나 오적분)를 바꿀 수 있음. 제약: 옳은 보기가 1~3개가 되게 하고 틀린 보기는 한 곳만 틀리게 해 미분 대조만으로 판별되게."
    creative: "(1) 「옳은 것의 개수」 5지선다(★1 유지) (2) 보기에 ∫{d/dx f(x)}dx=f(x) 처럼 적분상수 C 가 빠진 등식을 섞어 07-2 관계와 결합(★1~2) (3) 「등식이 성립하도록 하는 상수 a, b」 로 뒤집어 계수 비교(★2)."
```

```yaml
- id: RPM-CALC1-0607
  page: 97
  vendor_label: "교과서 07-1 부정적분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ∫f(x)dx=3x²+4x+C 를 만족시키는 함수 f(x) 구하기(C 는 적분상수).
  category: "부정적분의 정의 → 우변 미분 → f(x)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∫f(x)dx=F(x)+C 에서 f(x)=F'(x) 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f(x)=(3x²+4x+C)'=6x+4. 정의 한 단계. 교과서 구역 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "∫f dx=3x²+4x+C → f=(3x²+4x)' → 6x+4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$f(x)=6x+4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0607.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 다항식(차수 2~4 · 정수 계수) 자유. 제약: 적분상수 C 는 그대로 두고, 우변 계수를 분수로 하면 미분 뒤 정수가 되게."
    creative: "(1) 우변을 (x+1)³ 같은 거듭제곱 꼴로 주어 전개·미분(★1) (2) 「f(1) 의 값」 이나 「f(x)=0 의 근」 까지 묻기(★1) (3) 좌변에 (x−a)f(x) 를 두면 유형 01 골조(0624)의 인수 나눗셈(★2)."
```

```yaml
- id: RPM-CALC1-0608
  page: 97
  vendor_label: "교과서 07-1 부정적분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ∫f(x)dx=x³−x²+C 를 만족시키는 함수 f(x) 구하기(C 는 적분상수).
  category: "부정적분의 정의 → 우변 미분 → f(x)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∫f(x)dx=F(x)+C 에서 f(x)=F'(x) 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f(x)=(x³−x²)'=3x²−2x. 정의 한 단계. 교과서 구역 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "∫f dx=x³−x²+C → f=(x³−x²)' → 3x²−2x"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$f(x)=3x^2-2x$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0608.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 다항식(차수 3~4 · 정수 계수) 자유. 제약: 미분 뒤 계수가 정수가 되게."
    creative: "(1) 「f(x) 의 최솟값」 을 물어 이차함수 결합(★1~2) (2) 우변을 두 다항식의 곱으로 주어 곱의 미분 또는 전개 선택(★1~2) (3) 「f(x) 의 부정적분 중 하나」 를 다시 물어 정의의 양방향 확인(★1)."
```

```yaml
- id: RPM-CALC1-0609
  page: 97
  vendor_label: "교과서 07-1 부정적분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ∫f(x)dx=(1/4)x⁴+(1/3)x³+(1/2)x²+C 를 만족시키는 함수 f(x) 구하기(C 는 적분상수).
  category: "부정적분의 정의 → 우변 미분(분수 계수 정리) → f(x)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∫f(x)dx=F(x)+C 에서 f(x)=F'(x) 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    각 항을 미분하면 1/4·4x³=x³, 1/3·3x²=x², 1/2·2x=x 로 f(x)=x³+x²+x. 분수 계수가 미분으로 사라지는 것을 보는 한 단계(다음 07-3 의 x^n 적분 공식의 역방향 예고). 교과서 구역 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "∫f dx=x⁴/4+x³/3+x²/2+C → 항별 미분 → f=x³+x²+x"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$f(x)=x^3+x^2+x$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0609.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "항 수·차수·분수 계수 자유. 제약: 계수를 1/(n+1) 꼴로 두어 미분 결과가 x^n 이 되게 하면 x^n 적분 공식의 역방향 연습이 됨."
    creative: "(1) 계수를 1/(n+1) 이 아닌 값으로 섞어 미분 결과 계수 계산(★1) (2) 「f(1) 의 값」 (★1) (3) 우변을 x⁴/4+…+x²/2 의 규칙으로 n 항까지 두고 f(1) (0638 골조 · ★2)."
```

### 교과서 07-2 부정적분과 미분의 관계

```yaml
- id: RPM-CALC1-0610
  page: 97
  vendor_label: "교과서 07-2 부정적분과 미분의 관계"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    d/dx{∫(x³+2x)dx} 계산하기.
  category: "d/dx{∫f(x)dx}=f(x) → 피적분함수 그대로"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "d/dx{∫f(x)dx}=f(x) 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    적분한 것을 미분하면 원래 함수 x³+2x. 적분상수가 미분에서 사라지므로 C 가 붙지 않는다는 점이 0611 과의 대조 포인트. 교과서 구역 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "d/dx{∫(x³+2x)dx} → 관계식 → x³+2x"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$x^3+2x$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0610.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "안쪽 다항식 자유(차수·계수 무관 — 답은 피적분함수 그대로). 제약: 없음."
    creative: "(1) 0611 과 짝지어 「두 결과의 차」 (★1) (2) 안쪽에 미정계수를 두고 항등식 계수 비교(0629 골조 · ★1~2) (3) 「d/dx{∫f(x)dx} 와 ∫{d/dx f(x)}dx 가 같아지는 조건」 을 묻는 ㄱㄴㄷ(★2 · I-EQV d1)."
```

```yaml
- id: RPM-CALC1-0611
  page: 97
  vendor_label: "교과서 07-2 부정적분과 미분의 관계"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ∫{d/dx(x³+2x)}dx 계산하기.
  category: "∫{d/dx f(x)}dx=f(x)+C → 원래 함수 + 적분상수"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∫{d/dx f(x)}dx=f(x)+C 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    미분한 것을 적분하면 원래 함수에 적분상수가 붙어 x³+2x+C. C 를 빠뜨리는 것이 유일한 함정(T-표기 1개). 교과서 구역 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "∫{(x³+2x)'}dx → 관계식 → x³+2x+C"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$x^3+2x+C$'
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-calc1/items/0611.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "안쪽 다항식 자유. 제약: 답에 C 가 반드시 붙는다는 점만 유지."
    creative: "(1) 조건 F(0)=2 를 붙여 C 결정(0628 골조 · ★1) (2) 안쪽에 미정계수를 두고 「결정되지 않는 상수」 (★2 · I-EQV d1) (3) 연산을 여러 층 겹쳐 형식만 복잡하게(0631 골조 · ★2)."
```

### 교과서 07-3 함수 $y=x^n$의 부정적분

```yaml
- id: RPM-CALC1-0612
  page: 97
  vendor_label: "교과서 07-3 함수 $y=x^n$의 부정적분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ∫x³dx 구하기.
  category: "x^n 적분 공식 → x^{n+1}/(n+1)+C"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "x^n 의 부정적분(x^{n+1}/(n+1)+C)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x⁴/4+C. 공식 한 번. 교과서 구역 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "∫x³dx → 공식 n=3 → x⁴/4+C"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{1}{4}x^4+C$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0612.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 n(양의 정수) 자유. 제약: 교육과정상 n 은 0 이상의 정수(음수 지수·분수 지수는 범위 밖)."
    creative: "(1) 상수배 ∫5x³dx (★1) (2) 「∫x^n dx=x⁴/4+C 인 n」 처럼 역으로(★1) (3) 미분해서 x³ 이 되는 함수 중 「x=2 에서 값이 4 인 것」 (★1~2)."
```

```yaml
- id: RPM-CALC1-0613
  page: 97
  vendor_label: "교과서 07-3 함수 $y=x^n$의 부정적분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ∫x¹⁴dx 구하기.
  category: "x^n 적분 공식 → x^{n+1}/(n+1)+C"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "x^n 의 부정적분(x^{n+1}/(n+1)+C)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x¹⁵/15+C. 공식 한 번(지수만 큼). 교과서 구역 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "∫x¹⁴dx → 공식 n=14 → x¹⁵/15+C"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{1}{15}x^{15}+C$'
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-calc1/items/0613.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 n 자유. 제약: 0612 와 같음."
    creative: "(1) ∫(x¹⁴+x¹³)dx 처럼 두 항(★1) (2) 「∫x^n dx 의 계수가 1/20 이 되는 n」 (★1) (3) 0638 처럼 계수 규칙을 넣어 항별 적분(★2)."
```

```yaml
- id: RPM-CALC1-0614
  page: 97
  vendor_label: "교과서 07-3 함수 $y=x^n$의 부정적분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ∫x⁵⁰dx 구하기.
  category: "x^n 적분 공식 → x^{n+1}/(n+1)+C"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "x^n 의 부정적분(x^{n+1}/(n+1)+C)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x⁵¹/51+C. 공식 한 번. 교과서 구역 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "∫x⁵⁰dx → 공식 n=50 → x⁵¹/51+C"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{1}{51}x^{51}+C$'
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-calc1/items/0614.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 n 자유. 제약: 0612 와 같음."
    creative: "(1) x^n 을 n=1, 2, …, 50 까지 더한 식의 적분(★1~2) (2) 「미분해서 x⁵⁰ 이 되는 함수 중 원점을 지나는 것」 (★1) (3) 지수를 문자 n 으로 두고 f(1)=1/(n+1) 인 관계 묻기(★1~2 · Mₐ 상승)."
```

### 교과서 07-4 함수의 실수배, 합, 차의 부정적분

```yaml
- id: RPM-CALC1-0615
  page: 97
  vendor_label: "교과서 07-4 함수의 실수배, 합, 차의 부정적분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ∫(3x−4)dx 구하기.
  category: "항별 적분(실수배·차) → 정리"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "다항함수의 부정적분(실수배·합·차의 항별 적분)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    3·x²/2−4x+C=(3/2)x²−4x+C. 항별 적분 한 단계. 교과서 구역 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "∫(3x−4)dx → 항별 → (3/2)x²−4x+C"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{3}{2}x^2-4x+C$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0615.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수·항 수 자유. 제약: 일차항 계수를 짝수로 두면 분수 없이 정리됨(분수 계수 연습이 목적이면 홀수)."
    creative: "(1) 조건 f(0)=1 로 C 결정(★1) (2) 계수를 문자 a 로 두고 f(1)−f(0) (★1~2) (3) 「그래프가 (2, 0) 을 지나는 부정적분」 (★1)."
```

```yaml
- id: RPM-CALC1-0616
  page: 97
  vendor_label: "교과서 07-4 함수의 실수배, 합, 차의 부정적분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ∫(5x²−2x+1)dx 구하기.
  category: "항별 적분(실수배·합·차) → 정리"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "다항함수의 부정적분(실수배·합·차의 항별 적분)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (5/3)x³−x²+x+C. 세 항 항별 적분 한 단계. 교과서 구역 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "∫(5x²−2x+1)dx → 항별 → (5/3)x³−x²+x+C"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{5}{3}x^3-x^2+x+C$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0616.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수·차수 자유. 제약: 없음(분수 계수 정리 연습이 목적)."
    creative: "(1) 조건 f(1)=0 로 C (★1) (2) 계수 하나를 a 로 두고 「f(1)=f(−1)」 조건(★2 · I-SYM d1) (3) 피적분함수를 두 다항식의 합·차로 나눠 쓰고 결합(0622 골조 · ★1)."
```

```yaml
- id: RPM-CALC1-0617
  page: 97
  vendor_label: "교과서 07-4 함수의 실수배, 합, 차의 부정적분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ∫(x−1)(x+2)dx 구하기.
  category: "곱 전개 → 항별 적분"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곱으로 주어진 다항함수의 부정적분(전개·곱셈 공식 후 적분)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (x−1)(x+2)=x²+x−2 → x³/3+x²/2−2x+C. 전개 한 줄 + 항별 적분. 곱의 적분 공식이 없으므로 반드시 전개해야 한다는 것이 이 구역의 핵심. 교과서 구역 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "(x−1)(x+2) 전개 → x²+x−2 → 항별 적분 → x³/3+x²/2−2x+C"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{1}{3}x^3+\dfrac{1}{2}x^2-2x+C$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0617.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 일차식의 상수항 자유. 제약: 없음."
    creative: "(1) 세 일차식의 곱(★1) (2) 조건 f(0)=1 · 「f(1) 의 값」 (0635 골조 · ★1) (3) (x−1)(x+2) 를 그대로 두고 「곱의 적분은 적분의 곱이 아님」 을 확인하는 ㄱㄴㄷ(★1~2)."
```

```yaml
- id: RPM-CALC1-0618
  page: 97
  vendor_label: "교과서 07-4 함수의 실수배, 합, 차의 부정적분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ∫(2x−3)²dx 구하기.
  category: "완전제곱 전개 → 항별 적분"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곱으로 주어진 다항함수의 부정적분(전개·곱셈 공식 후 적분)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (2x−3)²=4x²−12x+9 → (4/3)x³−6x²+9x+C. 전개 + 항별 적분. 교과서 구역 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "(2x−3)² 전개 → 4x²−12x+9 → 항별 적분 → (4/3)x³−6x²+9x+C"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{4}{3}x^3-6x^2+9x+C$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0618.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차식 계수·상수 자유. 제약: 없음(세제곱으로 올리면 전개량 증가 · Mₖ 유지)."
    creative: "(1) (2x−3)³ 으로 올려 전개(★1) (2) 0636 처럼 (1−x)³−(1+x)³ 로 상쇄 구조(★1~2) (3) 「(ax+b)² 의 부정적분이 x³ 항 계수 12 를 갖는 양수 a」 (★1~2)."
```

```yaml
- id: RPM-CALC1-0619
  page: 97
  vendor_label: "교과서 07-4 함수의 실수배, 합, 차의 부정적분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ∫(x−3)(x²+3x+9)dx 구하기.
  category: "세제곱 차 공식 → x³−27 → 항별 적분"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곱으로 주어진 다항함수의 부정적분(전개·곱셈 공식 후 적분)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (x−3)(x²+3x+9)=x³−27 → x⁴/4−27x+C. 곱셈 공식을 알아보면 한 줄, 몰라도 전개 두 줄. 공식 착안은 표준 절차라 통찰 아님. 교과서 구역 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "(x−3)(x²+3x+9) → 세제곱 차 x³−27 → 항별 적분 → x⁴/4−27x+C"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{1}{4}x^4-27x+C$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0619.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a(=3)를 바꿔 (x−a)(x²+ax+a²) · 세제곱 합 (x+a)(x²−ax+a²) 자유. 제약: 공식 꼴을 유지하면 답이 x⁴/4∓a³x+C 로 고정."
    creative: "(1) 0640 처럼 분수식 (x³−27)/(x²+3x+9) 로 뒤집어 약분(★1) (2) 조건 f(0)=1 로 C 후 f(−2) (★1) (3) (x−3)(x²+3x+9)+(x+3)(x²−3x+9) 로 합쳐 2x³ (★1)."
```

```yaml
- id: RPM-CALC1-0620
  page: 97
  vendor_label: "교과서 07-4 함수의 실수배, 합, 차의 부정적분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ∫(x²−4)/(x+2)dx 구하기.
  category: "분자 인수분해 → 약분 → 항별 적분"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "분수식의 부정적분(인수분해·약분 후 적분)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (x²−4)/(x+2)=x−2 → x²/2−2x+C. 분수식은 이 과정에서 적분할 수 없으므로 약분해 다항식으로 만드는 것이 유일한 길. 교과서 구역 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "(x²−4)/(x+2) → (x−2)(x+2)/(x+2)=x−2 → 적분 → x²/2−2x+C"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{1}{2}x^2-2x+C$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0620.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a(=2)·부호 자유. 제약: 분자가 분모로 나누어떨어져야 함(x²−a² 과 x±a)."
    creative: "(1) 분자를 x³−8 로 올려 이차 몫(0621 골조 · ★1) (2) 조건 f(2)=0 로 C 후 값 계산(★1) (3) 두 분수식의 차로 나눠 주어 결합해야 약분되게(0623 골조 · ★1~2)."
```

```yaml
- id: RPM-CALC1-0621
  page: 97
  vendor_label: "교과서 07-4 함수의 실수배, 합, 차의 부정적분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ∫(x³+1)/(x+1)dx 구하기.
  category: "세제곱 합 인수분해 → 약분 → 항별 적분"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "분수식의 부정적분(인수분해·약분 후 적분)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x³+1=(x+1)(x²−x+1) 로 약분해 x²−x+1 → x³/3−x²/2+x+C. 세제곱 합 공식 + 항별 적분. 교과서 구역 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "(x³+1)/(x+1) → (x+1)(x²−x+1)/(x+1)=x²−x+1 → 적분 → x³/3−x²/2+x+C"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{1}{3}x^3-\dfrac{1}{2}x^2+x+C$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0621.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a(=1)·부호 자유(x³±a³ 과 x±a). 제약: 몫 x²∓ax+a² 의 적분 계수가 분수여도 무방."
    creative: "(1) 0640 처럼 f' 로 주고 초기조건(★1) (2) 분모를 x²−x+1 로 바꿔 몫이 일차(★1) (3) (x⁴−1)/(x−1) 로 올려 x³+x²+x+1 (★1)."
```

```yaml
- id: RPM-CALC1-0622
  page: 97
  vendor_label: "교과서 07-4 함수의 실수배, 합, 차의 부정적분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ∫(x+1)²dx+∫(1+x)(1−x)dx 구하기.
  category: "두 적분을 하나로 결합 → 전개·상쇄 → 항별 적분"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 부정적분의 합·차를 하나로 묶어 적분"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    합의 성질을 거꾸로 써서 ∫{(x²+2x+1)+(1−x²)}dx=∫(2x+2)dx=x²+2x+C. x² 항이 상쇄되어 계산이 짧아지는 것이 구역 의도. 따로 적분해 더해도 같은 답. 교과서 구역 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "∫(x+1)²dx+∫(1+x)(1−x)dx → ∫{(x+1)²+(1−x²)}dx=∫(2x+2)dx → x²+2x+C"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$x^2+2x+C$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0622.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 다항식 자유. 제약: 결합했을 때 최고차항이 상쇄되도록 설계하면 결합의 이점이 보임."
    creative: "(1) 조건 f(0)=1/2 붙여 값 계산(0636 골조 · ★1) (2) 결합해야만 적분 가능한 분수식 짝(0623 골조 · ★1) (3) 세 적분의 합·차로 늘리기(★1)."
```

```yaml
- id: RPM-CALC1-0623
  page: 97
  vendor_label: "교과서 07-4 함수의 실수배, 합, 차의 부정적분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ∫x³/(x−2)dx−∫8/(x−2)dx 구하기.
  category: "두 적분을 하나로 결합 → (x³−8)/(x−2) 약분 → 항별 적분"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 부정적분의 합·차를 하나로 묶어 적분"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    각각은 이 과정에서 적분할 수 없고, 차의 성질로 묶으면 ∫(x³−8)/(x−2)dx=∫(x²+2x+4)dx=x³/3+x²+4x+C. 「묶어야 약분된다」 는 구역이 알려 주는 표준 절차. 교과서 구역 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "∫x³/(x−2)dx−∫8/(x−2)dx → ∫(x³−8)/(x−2)dx → 세제곱 차 약분 x²+2x+4 → x³/3+x²+4x+C"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{1}{3}x^3+x^2+4x+C$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0623.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a(=2)·분자 차수(2~3) 자유. 제약: 분자를 합친 결과가 분모 (x−a) 로 나누어떨어져야 함(x³−a³ · x²−a²)."
    creative: "(1) 조건 f(0)=1 로 C 후 값(0635 골조 · ★1) (2) 분자를 x⁴−16, 분모 x−2 로 올려 삼차 몫(★1) (3) 「각각은 적분할 수 없는 이유」 를 서술하게 하는 ㄱㄴㄷ(★2 · I-EQV d1)."
```

### 유형 01 부정적분의 정의

```yaml
- id: RPM-CALC1-0624
  page: 98
  vendor_label: "유형 01 부정적분의 정의"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    다항함수 f 가 ∫(x−3)f(x)dx=x³−27x+C 를 만족시킬 때 f(−1) 의 값(C 는 적분상수).
  category: "양변 미분 → 3x²−27 인수분해 → (x−3) 으로 나눠 f(x) → f(−1)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "(x−a)f(x) 의 부정적분이 주어질 때 f(x) 구하기(양변 미분·인수 나눗셈)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    양변 미분 (x−3)f(x)=3x²−27=3(x−3)(x+3) → f(x)=3x+9 → f(−1)=6. 정의(미분)에 인수분해·나눗셈이 붙은 세 단계. 대표문제(난이도 없음) ★2 출발 · 통찰 없음 · M_total 4 로 −1 후보이나 우변 도함수를 (x−3) 으로 나누는 골조는 교과서 범위(0607~0609)에 없어 ★2 유지.
  tier: star_2
  mechanism_primary: "양변 미분 (x−3)f(x)=3x²−27 → 3(x−3)(x+3) → f(x)=3x+9 → f(−1)=6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0624.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 다항식·인수 (x−a)·묻는 점 자유. 제약: 우변 F 의 도함수가 (x−a) 를 인수로 가져야 함(F'(a)=0 · 예: F=x³−3a²x) — 아니면 다항함수 f 가 존재하지 않음."
    creative: "(1) 좌변을 (x²−9)f(x) 로 두어 두 인수 나눗셈(★2) (2) f 가 이차가 되게 우변을 사차식으로 두고 「f(x) 의 최솟값」 (★2) (3) 우변 도함수가 (x−a) 로 나누어떨어지도록 하는 상수 a 를 먼저 찾게 하면 인수정리 결합(★3 · I-BW d1)."
```

```yaml
- id: RPM-CALC1-0625
  page: 98
  vendor_label: "유형 01 부정적분의 정의"
  vendor_level: "하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x) 의 부정적분 중 하나가 x³+x²+1 일 때 f(x). 5지선다.
  category: "부정적분의 정의 → F 미분 → f(x)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∫f(x)dx=F(x)+C 에서 f(x)=F'(x) 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f(x)=(x³+x²+1)'=3x²+2x → ②. 「부정적분 중 하나」 라는 말이 F 라는 뜻임을 읽으면 미분 한 번. 교과서 0607~0609 와 같은 골조. 하 출발 ★1 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "부정적분 중 하나 F=x³+x²+1 → f=F' → 3x²+2x"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0625.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "F 의 다항식 자유. 제약: 오답 선택지에 F 자신·F 의 부정적분·f 의 도함수(6x+2)를 두어 방향 혼동을 변별."
    creative: "(1) 「f(x) 의 부정적분 중 x=1 에서 값이 0 인 것」 으로 방향을 바꾸기(★1) (2) 「부정적분 중 하나가 x³+x²+1 인 f 에 대해 ∫f(x)dx 의 상수항」 처럼 C 의 의미 묻기(★2 · I-EQV d1) (3) F 에 미정계수를 두고 f(0), f'(0) 조건(0627 골조 · ★2)."
```

```yaml
- id: RPM-CALC1-0626
  page: 98
  vendor_label: "유형 01 부정적분의 정의"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=2x²−1, g(x)=4x+3 에 대해 ∫F(x)dx=f(x)g(x) 가 성립할 때 F(0) 의 값.
  category: "∫F dx=fg → F=(fg)' → 곱의 미분(또는 전개 후 미분) → F(0)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∫F(x)dx=f(x)g(x) 꼴에서 F 구하기(곱의 미분)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    F(x)=(fg)'=f'g+fg'=4x(4x+3)+4(2x²−1)=24x²+12x−4 → F(0)=−4. F(0) 만 필요하므로 f'(0)g(0)+f(0)g'(0)=0·3+(−1)·4=−4 로 바로 가도 됨(선택). 기호 F 가 부정적분처럼 보여 fg 를 적분해 버리는 T-표기 함정 하나. 중 출발 ★2 · 통찰 없음 · M_total 4 로 −1 후보이나 곱의 미분이 붙은 골조는 교과서 범위에 없어 ★2 유지.
  tier: star_2
  mechanism_primary: "∫F dx=fg → F=(fg)'=f'g+fg' → x=0 대입 → 0·3+(−1)·4=−4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0626.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f, g 의 차수(1~2)·계수 자유. 제약: F(0)=f'(0)g(0)+f(0)g'(0) 이므로 두 함수의 상수항·일차항 계수가 답을 정함 — 정수가 되게. 차수 합이 3 이하면 전개 풀이도 짧음."
    creative: "(1) F(1) 이나 F(x) 전체를 묻기(★2 유지) (2) ∫F dx={f(x)}² 로 바꿔 2ff' (★2) (3) 「F(x) 의 최솟값」 으로 이차함수 결합(★2~3)."
```

```yaml
- id: RPM-CALC1-0627
  page: 98
  vendor_label: "유형 01 부정적분의 정의"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    F(x)=x³+ax²+2x 가 f(x) 의 부정적분 중 하나이고 f(0)=b, f'(0)=3 일 때 상수 a, b 의 곱 ab.
  category: "f=F' → f(0)=b → f'=F'' → f'(0)=2a=3 → ab"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부정적분 F(x) 의 미정계수를 f(0)·f'(0) 조건으로 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f(x)=F'(x)=3x²+2ax+2 → f(0)=2=b. f'(x)=6x+2a → f'(0)=2a=3 → a=3/2. ab=3. 미분 두 번과 대입뿐이고 a 가 분수라는 것 외 함정 없음. 중·서술형 출발 ★2 · M_total 5(미정계수라 Mₐ 2) · 통찰 없음 → −1 후보이나 미정계수 둘을 두 조건에서 잇는 골조는 교과서 범위에 없어 ★2 유지.
  tier: star_2
  mechanism_primary: "F=x³+ax²+2x → f=F'=3x²+2ax+2 → f(0)=2=b · f'(0)=2a=3 → a=3/2 → ab=3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0627.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "F 의 계수·조건값(f(0), f'(0)) 자유. 제약: a=f'(0)/2 이므로 f'(0) 이 홀수면 분수 a — 답 ab 는 정수나 간단한 분수가 되게."
    creative: "(1) f'(0) 대신 f'(1)=… 로 두어 a 가 일차 방정식에서(★2) (2) F(1)=0 같은 F 의 조건을 더해 「부정적분 중 하나」 가 특정됨을 인식(★2~3 · I-EQV d1) (3) 「f(x)≥0 이 항상 성립하는 a 의 범위」 로 판별식 결합(★3 · I-EQV d1)."
```

### 유형 02 부정적분과 미분의 관계

```yaml
- id: RPM-CALC1-0628
  page: 98
  vendor_label: "유형 02 부정적분과 미분의 관계"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    F(x)=∫{d/dx(x³−2x)}dx 에 대해 F(0)=2 일 때 F(2) 의 값.
  category: "∫{d/dx(…)}dx=원식+C → F(0) 으로 C → F(2)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∫{d/dx f(x)}dx=f(x)+C 의 적분상수를 조건으로 결정"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    F(x)=x³−2x+C, F(0)=C=2 → F(2)=8−4+2=6. 교과서 0611 골조에 적분상수 결정만 더한 것. 대표문제(난이도 없음) ★2 출발 · 통찰 없음 · M_total 4 · 같은 골조가 교과서 07-2 에 있음 → −1 → ★1.
  tier: star_1
  mechanism_primary: "F=∫{(x³−2x)'}dx=x³−2x+C → F(0)=2 → C=2 → F(2)=6"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0628.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "안쪽 다항식·조건점·묻는 점 자유. 제약: 조건점 대입으로 C 가 정수가 되게."
    creative: "(1) d/dx{∫…dx} 와 ∫{d/dx…}dx 를 각각 계산해 차를 묻기(C 유무 대조 · ★1~2) (2) 「F(x) 의 최솟값이 −8」 조건으로 이차함수 결합(0630 골조 · ★2) (3) 연산을 여러 층 겹치기(0631 골조 · ★2)."
```

```yaml
- id: RPM-CALC1-0629
  page: 98
  vendor_label: "유형 02 부정적분과 미분의 관계"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    모든 실수 x 에 대해 d/dx{∫(ax³+2x²+bx−7)dx}=x³+cx²+3x+d 가 성립할 때 상수 a, b, c, d 의 합.
  category: "d/dx{∫…dx}=피적분함수 → 항등식 계수 비교 → a+b+c+d"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "d/dx{∫f(x)dx}=f(x) 항등식에서 계수 비교로 상수 결정"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    좌변은 피적분함수 그대로 ax³+2x²+bx−7. 항등식이므로 a=1, c=2, b=3, d=−7 → 합 −1. 계수 비교 한 단계. 중하 출발 ★1~2 · 통찰 없음 · M_total 5(미정계수라 Mₐ 2) · 교과서 0610 골조 그대로 → 범위 아래쪽 ★1.
  tier: star_1
  mechanism_primary: "d/dx{∫(ax³+2x²+bx−7)dx}=ax³+2x²+bx−7 → 계수 비교 a=1, c=2, b=3, d=−7 → 합 −1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0629.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 상수의 위치·값 자유. 제약: 항등식이므로 양변 차수가 같게, 합·곱 어느 쪽을 묻든 정수."
    creative: "(1) 좌변을 ∫{d/dx(…)}dx 로 바꾸면 상수항이 C 로 흡수돼 d 를 결정할 수 없음 — 「결정되지 않는 상수는?」 (★2 · I-EQV d1) (2) F(1) 조건을 더해 C 까지(★2) (3) 계수 대신 「abcd 의 최댓값」 등 부호 조건(★2)."
```

```yaml
- id: RPM-CALC1-0630
  page: 98
  vendor_label: "유형 02 부정적분과 미분의 관계"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=∫{d/dx(x²−4x)}dx 의 최솟값이 −8 일 때 f(5) 의 값.
  category: "f=x²−4x+C → 완전제곱으로 최솟값 → C → f(5)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∫{d/dx f(x)}dx=f(x)+C 의 적분상수를 조건으로 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f(x)=x²−4x+C=(x−2)²+C−4, 최솟값 C−4=−8 → C=−4 → f(5)=25−20−4=1. 적분상수를 값 대입이 아니라 이차함수 최솟값으로 잡는 것이 0628 과 다른 점. 중 출발 ★2 · 통찰 없음 · M_total 4 로 −1 후보이나 최솟값 조건 결합은 교과서 골조가 아니어서 ★2 유지.
  tier: star_2
  mechanism_primary: "f=∫{(x²−4x)'}dx=x²−4x+C → (x−2)²+C−4 → 최솟값 −8 → C=−4 → f(5)=1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0630.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차식 계수·최솟값·묻는 점 자유. 제약: 이차항 계수 양수(최솟값 존재), 일차항 계수를 짝수로 두면 꼭짓점 x 좌표가 정수."
    creative: "(1) 이차항 계수를 음수로 바꿔 「최댓값」 (★2) (2) 안쪽을 삼차식으로 두고 「극솟값이 −8」 → 극값 판정 결합(★3) (3) 「f(x)≥0 이 항상 성립하는 C 의 최솟값」 (★2~3 · I-EQV d1)."
```

```yaml
- id: RPM-CALC1-0631
  page: 98
  vendor_label: "유형 02 부정적분과 미분의 관계"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=10x¹⁰+9x⁹+…+2x²+x 에 대해 F(x)=∫[d/dx∫{d/dx f(x)}dx]dx 로 두고 F(0)=−5 일 때 F(1) 의 값.
  category: "겹친 ∫·d/dx 정리 → F=f+C → F(0) 으로 C → f(1)=55 → F(1)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∫{d/dx f(x)}dx=f(x)+C 의 적분상수를 조건으로 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ∫{f'(x)}dx=f(x)+C₁ 을 미분하면 f'(x), 다시 적분하면 f(x)+C. 즉 F(x)=f(x)+C 이고 f(0)=0 이므로 F(0)=C=−5 → F(1)=f(1)−5=(10+9+…+1)−5=55−5=50. 10차 다항식과 겹친 연산은 형식 위압감일 뿐 실제 단계는 둘(관계 적용 · f(1) 합). 상중 출발 ★3 · 통찰 없음 · M_total 4 → −1 → ★2.
    [분류 이슈] 벤더 상중(★3)이나 겹친 연산 정리는 07-2 정의의 반복이고 M_total 4 → ★2 로 두고 기록.
  tier: star_2
  mechanism_primary: "∫[d/dx∫{f'(x)}dx]dx=f(x)+C → F(0)=f(0)+C=C=−5 → F(1)=f(1)−5=55−5=50"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$50$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0631.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f 의 항 수·계수 규칙(k·x^k)·조건점 자유. 제약: 상수항 없이 두면 f(0)=0 이라 C 가 바로 나오고, f(1) 이 등차·등비합으로 한 줄에 계산되게."
    creative: "(1) 겹친 연산 층수를 바꿔 마지막이 d/dx 로 끝나면 C 가 사라짐 — 「F(0) 이 조건 없이 결정되는가」 (★2 · I-EQV d1) (2) f(x)=x(x−1)…(x−9) 처럼 두어 f(1)=0 활용(★2) (3) F(−1) 을 물어 교대합(★2)."
```

### 유형 03 부정적분과 미분의 관계를 이용하여 함수 구하기

```yaml
- id: RPM-CALC1-0632
  page: 99
  vendor_label: "유형 03 부정적분과 미분의 관계를 이용하여 함수 구하기"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    두 다항함수 f, g 가 (f+g)'=4, (f−g)'=4x 를 만족시키고 f(0)=3, g(0)=−4 일 때 f(1)+g(−1) 의 값.
  category: "f+g, f−g 각각 적분 → 초기값으로 상수 → 연립으로 f, g → 값"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 함수의 합·차·곱의 도함수가 주어질 때 부정적분과 조건으로 두 함수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (f+g)'=4 → f+g=4x+C₁, f(0)+g(0)=−1 → f+g=4x−1. (f−g)'=4x → f−g=2x²+C₂, f(0)−g(0)=7 → f−g=2x²+7. 더하고 빼서 f=x²+2x+3, g=−x²+2x−4 → f(1)+g(−1)=6+(−7)=−1. 적분 둘·상수 둘·연립 하나로 단계는 많지만 모두 표준. 대표문제 ★2 출발 · 통찰 없음 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "(f+g)'=4, (f−g)'=4x → f+g=4x−1, f−g=2x²+7(초기값으로 C) → f=x²+2x+3, g=−x²+2x−4 → f(1)+g(−1)=−1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0632.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 도함수(상수·일차)·초기값·묻는 점 자유. 제약: f+g 와 f−g 를 더해 2 로 나누므로 계수가 짝수가 되게 설계해야 정수 다항식."
    creative: "(1) 조건을 (f+g)' 과 (2f−g)' 처럼 비대칭으로 주어 연립 계수 처리(★2~3) (2) 초기값을 f(0)+g(0) 과 f(1)−g(1) 처럼 다른 점에서 주어 상수 결정을 얽기(★3 · I-CON d1) (3) g=f' 조건을 넣어 f 의 차수부터 정하게(★3 · I-EQV d1)."
```

```yaml
- id: RPM-CALC1-0633
  page: 99
  vendor_label: "유형 03 부정적분과 미분의 관계를 이용하여 함수 구하기"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    상수함수가 아닌 두 다항함수 f, g 가 (fg)'=3x² 을 만족시키고 f(2)=0, g(2)=12 일 때 f(0)+g(1) 의 값.
  category: "(fg)' 적분 → f(2)g(2)=0 으로 C → x³−8 인수분해 → 비상수·f(2)=0·g(2)=12 로 f, g 배정 → 값"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 3
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "fg=x³−8=(x−2)(x²+2x+4) 에서 f(2)=0 → f 가 (x−2) 를 가져야 하고 둘 다 비상수라 f=k(x−2), g=(x²+2x+4)/k, g(2)=12/k=12 → k=1 로 역추적"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 함수의 합·차·곱의 도함수가 주어질 때 부정적분과 조건으로 두 함수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (fg)'=3x² → fg=x³+C, f(2)g(2)=0 → C=−8. x³−8=(x−2)(x²+2x+4) 이고 둘 다 상수함수가 아니므로 차수는 1+2. f(2)=0 이면 f=k(x−2), g=(x²+2x+4)/k, g(2)=12/k=12 → k=1. f(0)+g(1)=−2+7=5. 인수 배정을 조건에서 역추적하는 BW d1 하나(상수배 k 를 빼먹어도 우연히 맞음). 중 출발 ★2 · 통찰 d1 하나 · M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "(fg)'=3x² → fg=x³+C → f(2)g(2)=0 → fg=x³−8=(x−2)(x²+2x+4) → f(2)=0·비상수 → f=x−2, g=x²+2x+4 → f(0)+g(1)=5"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0633.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼차식(x³−a³ 꼴)·조건점 a·g(a)=3a² 자유. 제약: fg 가 (x−a)·기약 이차식으로만 쪼개져야 배정이 유일(x²+ax+a² 은 항상 기약), g(a)=3a² 이면 k=1."
    creative: "(1) fg=x³−7x+6 처럼 세 일차 인수면 f(1)=0 만으로 배정이 여럿 → 「가능한 f 의 개수」 (★3 · I-MI d1) (2) g(2) 조건을 빼고 「f(0)+g(1) 로 가능한 값의 합」 으로 상수배 k 를 열어 두기(★3 · I-VF d1) (3) f, g 차수를 '일차·이차' 로 명시하면 BW 가 사라져 ★2 그대로."
```

```yaml
- id: RPM-CALC1-0634
  page: 99
  vendor_label: "유형 03 부정적분과 미분의 관계를 이용하여 함수 구하기"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    두 일차함수 f, g 가 ㈎ f(0)=2, g(0)=1 ㈏ (f+g)'=3 ㈐ (fg)'=4x+5 를 만족시킬 때 f(1)−g(2) 의 값.
  category: "(f+g)'·(fg)' 적분 → 초기값으로 상수 → 인수분해 배정 또는 f=ax+2, g=bx+1 계수 비교 → 값"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 함수의 합·차·곱의 도함수가 주어질 때 부정적분과 조건으로 두 함수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ㈏ f+g=3x+3(f(0)+g(0)=3), ㈐ fg=2x²+5x+C, f(0)g(0)=2 → fg=2x²+5x+2=(2x+1)(x+2). f(0)=2 → f=x+2, g=2x+1(f+g=3x+3 확인). f(1)−g(2)=3−5=−2. 또는 f=ax+2, g=bx+1 로 두고 a+b=3, ab=2, a+2b=5 → a=1, b=2. 두 갈래 모두 짧아 SC 아님. 중 출발 ★2 · 통찰 없음 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "(f+g)'=3, (fg)'=4x+5 → f+g=3x+3, fg=2x²+5x+2 → (2x+1)(x+2) 를 f(0)=2·g(0)=1 로 배정 → f=x+2, g=2x+1 → f(1)−g(2)=−2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0634.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초기값·(fg)' 의 계수 자유. 제약: f=ax+p, g=bx+q 로 두면 (f+g)'=a+b, (fg)'=2abx+(aq+bp) 이므로 세 조건이 모순 없고 a, b 가 정수해가 되게 설계."
    creative: "(1) ㈎ 없이 ㈏㈐ 만 주면 상수가 정해지지 않음 → 「가능한 f(1)−g(2) 의 값」 (★3 · I-MI d1) (2) f 이차·g 일차로 두면 (fg)' 가 이차 → 미지수 증가(★3) (3) ㈐ 를 (f²)' 로 바꿔 f 만 결정(★2)."
```

### 유형 04 부정적분 구하기

```yaml
- id: RPM-CALC1-0635
  page: 99
  vendor_label: "유형 04 부정적분 구하기"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    f(x)=∫x²/(x−1)dx−∫1/(x−1)dx 에 대해 f(0)=1 일 때 f(2) 의 값.
  category: "두 적분 결합 → (x²−1)/(x−1) 약분 → 적분 → f(0) 으로 C → f(2)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 부정적분을 하나로 묶어 적분한 뒤 조건으로 C 결정"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    두 적분을 합쳐 ∫(x²−1)/(x−1)dx=∫(x+1)dx=x²/2+x+C. f(0)=1 → C=1 → f(2)=2+2+1=5. 교과서 0623 골조(결합 → 약분)에 적분상수 결정만 더함. 대표문제 ★2 출발 · 통찰 없음 · M_total 4 · 같은 골조가 교과서 07-4 에 있음 → −1 → ★1.
  tier: star_1
  mechanism_primary: "∫x²/(x−1)dx−∫1/(x−1)dx → ∫(x²−1)/(x−1)dx=∫(x+1)dx → x²/2+x+C → f(0)=1 → f(2)=5"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0635.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자 차수(2~3)·분모 (x−a)·조건값·묻는 점 자유. 제약: 분자를 합친 결과가 분모로 나누어떨어져야 함(x²−a² · x³−a³)."
    creative: "(1) 두 항을 나누지 않고 한 분수식으로 주기(★1) (2) 세 개 이상의 적분을 합쳐 상쇄(★1~2) (3) f(0)=1 대신 「f 의 최솟값」 조건(★2)."
```

```yaml
- id: RPM-CALC1-0636
  page: 99
  vendor_label: "유형 04 부정적분 구하기"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=∫(1−x)³dx−∫(1+x)³dx 에 대해 f(0)=1/2 일 때 f(1) 의 값.
  category: "두 적분 결합 → (1−x)³−(1+x)³ 전개·상쇄 → 적분 → f(0) 으로 C → f(1)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 부정적분을 하나로 묶어 적분한 뒤 조건으로 C 결정"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (1−x)³−(1+x)³=−6x−2x³ 이므로 f=−3x²−x⁴/2+C, f(0)=1/2 → C=1/2 → f(1)=−3−1/2+1/2=−3. 세제곱 전개 두 번이 계산의 전부(차가 기함수라 짝수 항이 상쇄됨을 알면 더 짧음). 중하 출발 ★1~2 · 통찰 없음 · M_total 4 · 교과서 0622 골조 → 범위 아래쪽 ★1.
  tier: star_1
  mechanism_primary: "∫(1−x)³dx−∫(1+x)³dx → ∫{(1−x)³−(1+x)³}dx=∫(−2x³−6x)dx → −x⁴/2−3x²+C → f(0)=1/2 → f(1)=−3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0636.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수(2~3)·부호·조건값 자유. 제약: (a−x)ⁿ−(a+x)ⁿ 꼴을 유지하면 홀수 차 항만 남아 계산이 짧고, f(0) 값이 곧 C."
    creative: "(1) 합 (1−x)³+(1+x)³ 으로 바꾸면 짝수 항만(★1) (2) 「f(1)+f(−1)」 을 물어 우함수·기함수 성질(★2 · I-SYM d1) (3) 지수를 n 으로 일반화해 f(1) 을 n 의 식으로(★3 · I-PD d1)."
```

```yaml
- id: RPM-CALC1-0637
  page: 99
  vendor_label: "유형 04 부정적분 구하기"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    ∫9/x dx+∫(2x+3)(2x−3)/x dx 를 계산한 결과가 ax²+bx+C 일 때 상수 a, b 의 합. 5지선다(C 는 적분상수).
  category: "두 적분 결합 → 분자 합 4x² → 약분 4x → 적분 2x² → a=2, b=0"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 부정적분을 하나로 묶어 적분한 뒤 조건으로 C 결정"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    합치면 ∫{9+(4x²−9)}/x dx=∫4x dx=2x²+C → a=2, b=0 → a+b=2 → ②. 상수항이 상쇄돼야 x 로 약분되고, b=0 을 「없는 항」 으로 읽는 T-표기 하나. 중하 출발 ★1~2 · 통찰 없음 · M_total 4 · 교과서 0623 골조 → 범위 아래쪽 ★1.
  tier: star_1
  mechanism_primary: "∫9/x dx+∫(2x+3)(2x−3)/x dx → ∫4x²/x dx=∫4x dx → 2x²+C → a=2, b=0 → 2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0637.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수항 9·곱 (2x+3)(2x−3) 자유. 제약: 두 분자를 합쳤을 때 상수항이 정확히 상쇄돼 분모 x 로 나누어떨어지게(a²−a² 꼴)."
    creative: "(1) 분모를 (x−1) 로 두고 분자 합이 (x−1)(x+2) 가 되게 해 b≠0 (★1~2) (2) 「합쳐야만 적분 가능한 이유」 를 고르는 ㄱㄴㄷ(★2 · I-EQV d1) (3) 5지선다 대신 「ab 의 값」 처럼 b=0 을 직접 확인(★1)."
```

```yaml
- id: RPM-CALC1-0638
  page: 99
  vendor_label: "유형 04 부정적분 구하기"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=∫(1+2x+3x²+…+9x⁸)dx 에 대해 f(1)=10 일 때 f(−1) 의 값.
  category: "항별 적분 규칙 (k+1)x^k → x^{k+1} → f=x+x²+…+x⁹+C → f(1) 로 C → f(−1) 교대합"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "규칙 있는 다항식의 항별 적분 후 조건·교대합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ∫(k+1)x^k dx=x^{k+1} 이므로 f=x+x²+…+x⁹+C. f(1)=9+C=10 → C=1. f(−1)=(−1+1−1+…−1)+1=−1+1=0. 항별 적분 규칙과 9항 교대합이 전부이고 규칙은 문제에 드러나 있어 PD 아님. 중 출발 ★2 · 통찰 없음 · M_total 4 로 −1 후보이나 규칙 항별 적분·교대합은 교과서 골조가 아니어서 ★2 유지.
  tier: star_2
  mechanism_primary: "∫(1+2x+…+9x⁸)dx=x+x²+…+x⁹+C → f(1)=9+C=10 → C=1 → f(−1)=−1+1=0"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0638.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "항 수(마지막 지수)·조건점·묻는 점 자유. 제약: 항 수의 홀짝이 f(−1) 의 교대합(−1 또는 0)을 정하므로 명시, f(1)=항 수+C."
    creative: "(1) 피적분함수를 1+3x²+5x⁴+… 로 두어 홀수 항만(★2) (2) f(−1)−f(1) 을 물어 기함수 부분만 남기기(★2 · I-SYM d1) (3) 항 수를 n 으로 두고 f(−1) 을 n 의 홀짝으로 나누기(★3 · I-MI d1)."
```

### 유형 05 $f'(x)$가 주어질 때 $f(x)$ 구하기

```yaml
- id: RPM-CALC1-0639
  page: 100
  vendor_label: "유형 05 $f'(x)$가 주어질 때 $f(x)$ 구하기"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    f'(x)=3x²+2ax+1 이고 f(0)=1, f(1)=2 일 때 f(2) 의 값(a 는 상수).
  category: "f' 적분 → f(0) 으로 C → f(1) 로 a → f(2)"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "f'(x) 와 조건(함숫값·나누어떨어짐)으로 f(x) 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f=x³+ax²+x+C, f(0)=C=1, f(1)=a+3=2 → a=−1 → f(2)=8−4+2+1=7. 적분·조건 둘·대입. 대표문제 ★2 출발 · 통찰 없음 · M_total 5(미정계수라 Mₐ 2) 로 −1 후보이나 f'→f 에 미정계수와 초기조건 둘을 잇는 골조는 교과서 범위에 없어 ★2 유지.
  tier: star_2
  mechanism_primary: "f'=3x²+2ax+1 → f=x³+ax²+x+C → f(0)=1 → C=1 · f(1)=2 → a=−1 → f(2)=7"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0639.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f' 의 계수·조건점 둘·묻는 점 자유. 제약: 한 조건점을 0 으로 두면 C 가 먼저 분리됨, a 정수."
    creative: "(1) 조건을 f(1)=2, f(−1)=0 처럼 두 점으로 주어 C·a 연립(★2) (2) 조건 하나를 f'(1)=… 로 바꿔 a 먼저(★2) (3) 「f(x) 가 x−1 로 나누어떨어진다」 로 바꿔 인수정리 결합(0642 골조 · ★2)."
```

```yaml
- id: RPM-CALC1-0640
  page: 100
  vendor_label: "유형 05 $f'(x)$가 주어질 때 $f(x)$ 구하기"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f'(x)=(x³−27)/(x²+3x+9) 이고 f(0)=1 일 때 f(−2) 의 값.
  category: "세제곱 차 약분 → f'=x−3 → 적분 → f(0) 으로 C → f(−2)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "f'(x) 와 조건(함숫값·나누어떨어짐)으로 f(x) 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (x³−27)/(x²+3x+9)=x−3 → f=x²/2−3x+C, f(0)=1 → C=1 → f(−2)=2+6+1=9. 교과서 0619·0620 골조(세제곱 차 약분)에 초기조건만 더함. 중하 출발 ★1~2 · 통찰 없음 · M_total 4 → 범위 아래쪽 ★1.
  tier: star_1
  mechanism_primary: "f'=(x³−27)/(x²+3x+9)=x−3 → f=x²/2−3x+C → f(0)=1 → f(−2)=9"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$9$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0640.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세제곱 차의 a(27=3³)·조건값·묻는 점 자유. 제약: 분모 x²+ax+a² 이면 몫이 x−a, 묻는 점을 짝수로 두면 x²/2 가 정수."
    creative: "(1) (x³+8)/(x+2) 로 부호 바꾸기(★1) (2) (x³−27)/(x−3) 으로 두어 몫이 이차(★1~2) (3) f(0) 대신 「f 의 최솟값」 으로 이차함수 결합(★2)."
```

```yaml
- id: RPM-CALC1-0641
  page: 100
  vendor_label: "유형 05 $f'(x)$가 주어질 때 $f(x)$ 구하기"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f 를 적분해야 할 것을 잘못 미분했더니 3x²−1 이었다. f(0)=2 일 때 ∫f(x)dx 구하기.
  category: "문장 → f'=3x²−1 → 적분·f(0) 으로 f → 다시 적분 → ∫f dx"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "f'(x) 와 조건(함숫값·나누어떨어짐)으로 f(x) 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    미분 결과가 3x²−1 이므로 f'(x)=3x²−1, f=x³−x+C₁, f(0)=2 → f=x³−x+2. ∫f dx=x⁴/4−x²/2+2x+C. 문장을 f'=… 로 옮기고 적분 두 번, 마지막에 C 를 다시 붙이는 것이 함정 하나. 중 출발 ★2 · 통찰 없음 · M_total 4 로 −1 후보이나 문장 해석·이중 적분 골조는 교과서에 없어 ★2 유지.
  tier: star_2
  mechanism_primary: "잘못 미분한 결과 3x²−1=f'(x) → f=x³−x+C₁ → f(0)=2 → f=x³−x+2 → ∫f dx=x⁴/4−x²/2+2x+C"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{4}x^4-\dfrac{1}{2}x^2+2x+C$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0641.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "미분 결과 다항식(차수 1~2)·f(0) 값 자유. 제약: 두 번 적분하므로 계수가 1/(n+1)·1/(n+2) 를 거쳐도 간단한 분수가 되게."
    creative: "(1) 거꾸로 「미분할 것을 잘못 적분했더니 x³−x+C」 (★2) (2) ∫f dx 의 값 조건(F(1)=0)을 더해 C 까지 결정(★2) (3) f(x)g(x) 를 잘못 미분한 설정으로 곱의 미분 결합(★3)."
```

```yaml
- id: RPM-CALC1-0642
  page: 100
  vendor_label: "유형 05 $f'(x)$가 주어질 때 $f(x)$ 구하기"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f'(x)=12x²+4x−2 이고 다항식 f(x) 가 x−1 로 나누어떨어질 때 f(−1) 의 값. 5지선다.
  category: "f' 적분 → 나누어떨어짐 ⇔ f(1)=0 → C → f(−1)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「f(x) 가 x−1 로 나누어떨어진다」 를 인수정리로 f(1)=0 으로 옮겨 적분상수 결정 식으로 사용"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "f'(x) 와 조건(함숫값·나누어떨어짐)으로 f(x) 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f=4x³+2x²−2x+C. 나누어떨어짐 → f(1)=0 → 4+2−2+C=0 → C=−4. f(−1)=−4+2+2−4=−4 → ①. 적분 한 번·조건 번역·대입. 인수정리 번역은 표준이지만 조건이 함숫값 형태로 주어지지 않아 d1 통찰로 기록. 중 출발 ★2 · 통찰 d1 하나 · M_total 4 → ★2 유지.
  tier: star_2
  mechanism_primary: "f'=12x²+4x−2 → f=4x³+2x²−2x+C → x−1 로 나누어떨어짐 ⇔ f(1)=0 → C=−4 → f(−1)=−4"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0642.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f' 계수·인수 (x−a)·묻는 점 자유. 제약: f(a)=0 에서 C 가 정수가 되게 f' 계수를 (n+1) 의 배수로."
    creative: "(1) 「x²−1 로 나누어떨어진다」 로 바꾸면 f(1)=f(−1)=0 두 조건 → f' 에 미정계수 하나 추가(★3 · I-CON d1) (2) 「x−1 로 나눈 나머지가 2」 로 나머지정리(★2) (3) 「(x−1)² 로 나누어떨어진다」 → f(1)=0, f'(1)=0 → f' 조건과 모순 여부 검토(★3 · I-VF d1)."
```

### 유형 06 접선의 기울기와 부정적분

```yaml
- id: RPM-CALC1-0643
  page: 100
  vendor_label: "유형 06 접선의 기울기와 부정적분"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    곡선 y=f(x) 위의 임의의 점에서의 접선의 기울기가 3x²+5 이고 곡선이 (0, 3) 을 지날 때 f(1) 의 값. 5지선다.
  category: "접선 기울기=f' → 적분 → (0, 3) 으로 C → f(1)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "접선의 기울기 f'(x) 와 조건(지나는 점·최솟값)으로 f(x) 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    접선의 기울기가 f'(x)=3x²+5 → f=x³+5x+C, (0, 3) 을 지나므로 C=3 → f(1)=1+5+3=9 → ⑤. 「접선의 기울기 = 도함수」 번역은 유형 제목이 알려 주는 표준. 대표문제 ★2 출발 · 통찰 없음 · M_total 4 로 −1 후보이나 기울기→f' 번역과 초기조건은 교과서 범위에 없어 ★2 유지.
  tier: star_2
  mechanism_primary: "접선 기울기 3x²+5=f'(x) → f=x³+5x+C → (0, 3) 대입 → C=3 → f(1)=9"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0643.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기울기 식·지나는 점·묻는 점 자유. 제약: 지나는 점의 x 좌표가 0 이면 C 가 바로 나오고, 0 이 아니면 한 줄 추가(0644)."
    creative: "(1) 지나는 점 대신 「x=1 에서의 접선의 방정식이 y=8x+1」 을 주어 f(1) 을 접선에서 읽게(★2~3 · I-RT d1) (2) 「곡선이 x 축과 만나는 점」 (★2) (3) 기울기에 미정계수를 두고 접선 기울기 조건 추가(0646 골조 · ★2)."
```

```yaml
- id: RPM-CALC1-0644
  page: 100
  vendor_label: "유형 06 접선의 기울기와 부정적분"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    곡선 y=f(x) 위의 임의의 점에서의 접선의 기울기가 −4x+2 이고 곡선이 두 점 (1, 2), (2, k) 를 지날 때 k 의 값.
  category: "접선 기울기=f' → 적분 → (1, 2) 로 C → f(2)=k"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "접선의 기울기 f'(x) 와 조건(지나는 점·최솟값)으로 f(x) 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'=−4x+2 → f=−2x²+2x+C, (1, 2) → −2+2+C=2 → C=2 → f(2)=−8+4+2=−2=k. 0643 과 같은 골조에 조건점이 0 이 아닌 곳으로 옮겨 계산 한 줄 추가. 중 출발 ★2 · 통찰 없음 · M_total 4 → ★2 유지(0643 과 같은 기준).
  tier: star_2
  mechanism_primary: "접선 기울기 −4x+2=f'(x) → f=−2x²+2x+C → (1, 2) → C=2 → f(2)=−2=k"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0644.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기울기 식(일차)·두 점 자유. 제약: 첫 점 대입으로 C 가 정수가 되게."
    creative: "(1) 두 점을 모두 수로 주고 「기울기 식의 상수 a」 를 묻기(★2) (2) (2, k) 가 x 축 위의 점이 되는 조건(★2) (3) 「두 점을 지나는 직선과 곡선의 다른 교점」 (★3)."
```

```yaml
- id: RPM-CALC1-0645
  page: 100
  vendor_label: "유형 06 접선의 기울기와 부정적분"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    곡선 y=f(x) 위의 임의의 점에서의 접선의 기울기가 4x−16 이고 f 의 최솟값이 −10 일 때 구간 [−1, 1] 에서 f(x) 의 최댓값.
  category: "접선 기울기=f' → 적분 → 완전제곱 최솟값으로 C → 구간에서 감소 확인 → f(−1)"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "접선의 기울기 f'(x) 와 조건(지나는 점·최솟값)으로 f(x) 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f=2x²−16x+C=2(x−4)²+C−32, 최솟값 C−32=−10 → C=22. 꼭짓점 x=4 가 [−1, 1] 의 오른쪽 밖이라 구간에서 감소 → 최댓값 f(−1)=2+16+22=40. 적분상수를 최솟값으로 잡고 구간 최댓값을 단조성으로 읽는 두 번의 이차함수 단계(T-범위 1개). 중 출발 ★2 · 통찰 없음 · M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "f'=4x−16 → f=2x²−16x+C → 최솟값 C−32=−10 → C=22 → [−1, 1] 에서 감소 → f(−1)=40"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$40$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0645.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기울기 식(일차)·최솟값·구간 자유. 제약: 이차항 양수(최솟값 존재). 꼭짓점이 구간 안이면 최댓값은 두 끝 비교(T-범위 강화), 밖이면 한 끝."
    creative: "(1) 꼭짓점을 구간 안으로 옮겨 최솟값·최댓값 모두 묻기(★2) (2) 기울기를 이차식으로 두어 삼차함수 극값 결합(★3) (3) 「최솟값을 갖는 x 의 값」 을 함께 묻는 서술형(★2)."
```

```yaml
- id: RPM-CALC1-0646
  page: 100
  vendor_label: "유형 06 접선의 기울기와 부정적분"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    f(x)=∫(kx²−4x+4)dx 에 대해 곡선 y=f(x) 위의 점 (1, 2) 에서의 접선의 기울기가 6 일 때 f(2) 의 값(k 는 상수).
  category: "f'=피적분함수 → f'(1)=6 으로 k → 적분 → (1, 2) 로 C → f(2)"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "접선의 기울기 f'(x) 와 조건(지나는 점·최솟값)으로 f(x) 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f 가 부정적분이므로 f'(x)=kx²−4x+4, f'(1)=k=6. f=2x³−2x²+4x+C, f(1)=4+C=2 → C=−2 → f(2)=16−8+8−2=14. 적분하지 않고 f' 를 읽는 것이 첫 단계이고 나머지는 표준. 중·서술형 출발 ★2 · 통찰 없음 · M_total 6(미정계수라 Mₐ 2) → ★2 유지.
  tier: star_2
  mechanism_primary: "f=∫(kx²−4x+4)dx → f'=kx²−4x+4 → f'(1)=6 → k=6 → f=2x³−2x²+4x+C → f(1)=2 → C=−2 → f(2)=14"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$14$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0646.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "피적분함수 계수·접점·기울기·묻는 점 자유. 제약: f'(1)=k+(나머지 상수) 로 k 가 정수가 되게, 적분 계수 k/3 이 정수가 되게 k 는 3 의 배수."
    creative: "(1) 접선의 방정식 y=6x−4 를 주고 접점을 찾게 하기(★2~3 · I-RT d1) (2) 접선이 원점을 지난다는 조건으로 접점 x 좌표 t 의 방정식(★3 · I-BW d1) (3) k 를 두고 「f 가 극값을 갖지 않을 조건」 (★3)."
```

## 표본 판정 요약 (41문)

- ★ 분포: ★1 25 · ★2 16 · ★3 0 · ★4 0 · ★5 0
- 통찰형 0 · 절차형 41 · premium 0 (d1 통찰 하나를 기록한 절차형 2문: 0633 I-BW · 0642 I-EQV)
- type_hint 상위: 「두 부정적분의 합·차를 하나로 묶어 적분(+ 조건으로 C 결정)」 5(0622·0623 + 0635~0637) · 「∫f(x)dx=F(x)+C 에서 f=F'」 4(0607~0609·0625) · 「f'(x) 와 조건으로 f(x) 구하기」 4(0639~0642) · 「접선의 기울기 f'(x) 와 조건으로 f(x) 구하기」 4(0643~0646) · 「x^n 의 부정적분」 3 · 「곱으로 주어진 다항함수의 부정적분」 3 · 「두 함수의 합·차·곱의 도함수로 두 함수 구하기」 3 · 「∫{d/dx f}dx 의 적분상수 결정」 3
- 그림: 0문 · 소문항 문항 0문 · 5지선다 4문(0625·0637·0642·0643)
- M_total: 4 가 33문 · 5 가 5문(0627·0629·0639 미정계수 · 0633·0645 단계 4개) · 6 이 3문(0632·0634 연립 · 0646 미정계수+단계). 벤더 출발점에서 −1 한 문항은 대표문제 0628·0635(교과서 07-2·07-4 골조 + C 결정)와 상중 0631 세 문항, 중하 문항 0629·0636·0637·0640 은 범위 아래쪽 ★1. 교과서 구역 18문은 모두 ★1.
- 전사 답 확인 필요: 없음(41문 모두 재계산 일치)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-CALC1-0631 | 벤더 상중(★3 출발)이나 겹친 ∫·d/dx 연산은 07-2 정의의 반복(F=f+C)이고 f(1)=55 합 계산뿐이라 통찰 0 · M_total 4. 10차 다항식의 형식 위압감을 난이도로 본 라벨로 판단해 ★2 로 두고 기록 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 통합해도 될 유형: 「두 부정적분의 합·차를 하나로 묶어 적분」(07-4 · 0622·0623)과 「…묶어 적분한 뒤 조건으로 C 결정」(유형 04 · 0635~0637)은 골조(결합 → 전개·약분 → 항별 적분)가 같고 C 결정만 더해지므로 한 유형 「부정적분의 결합·약분」(base ★1)로 두고 「초기조건 유무」 를 하위 태그로. 07-4 의 「곱 전개 후 적분」(0617~0619)·「분수식 약분 후 적분」(0620·0621)도 같은 유형의 표현 차이(곱/분수/두 적분)로 묶을 수 있다.
- 통합해도 될 유형: 「∫f dx=F+C 에서 f=F'」(0607~0609·0625)와 「d/dx{∫f dx}=f · ∫{d/dx f}dx=f+C 계산」(0610·0611)·「그 적분상수 결정」(0628·0630·0631)·「항등식 계수 비교」(0629)는 모두 「부정적분과 미분의 관계」 정의의 직접 적용이므로 한 유형(base ★1)로 두고 하위 태그(C 결정 조건: 값 대입/최솟값 · 겹친 연산 · 계수 비교)로 갈래를 둔다. 벤더가 유형 01·02 로 나눈 것은 정의(∫f=F)와 관계(d/dx∫ · ∫d/dx)의 표기 차이일 뿐 골조가 같다.
- 따로 세울 유형: 「(x−a)f(x) 의 부정적분이 주어질 때 f(x)」(0624)와 「∫F dx=fg 꼴(곱의 미분)」(0626)은 정의 유형 안에서 인수 나눗셈·곱의 미분이 붙어 base ★2 로 갈리므로 별도 하위 유형(또는 base ★2 유형)으로 세운다.
- 따로 세울 유형: 「두 함수의 합·차·곱의 도함수로 두 함수 구하기」(유형 03 · 0632~0634)는 적분 뒤 연립 또는 인수 배정이 골조라 base ★2 유형으로 독립. 곱 조건(0633·0634)은 인수 배정에서 I-BW·I-MI 가 붙을 수 있어 ★3 변형의 씨앗이다.
- 통합해도 될 유형: 「f'(x) 와 조건으로 f(x)」(유형 05 · 0639~0642)와 「접선의 기울기 f'(x) 와 조건으로 f(x)」(유형 06 · 0643~0646)는 f' 가 식으로 주어지느냐 「접선의 기울기」 문장으로 주어지느냐의 표현 차이이고 골조(적분 → 조건으로 C·미정계수 → 값)가 같다. 한 유형 「도함수와 조건으로 원시함수 결정」(base ★2)로 묶고, 조건의 종류(함숫값 · 미정계수 · 나누어떨어짐 · 최솟값 · 접선 기울기)를 하위 태그로. 최솟값·구간 최댓값 결합(0630·0645)은 이차함수 최대·최소가 붙으므로 ★2 유지 하위 태그이고, 뒤 범위(2/2 · 유형 UP·시험에 꼭 나오는 문제)에서 극값·부등식과 결합되면 ★3 유형으로 분리될 것이다.
- 단독 유형: 「규칙 있는 다항식의 항별 적분 후 조건·교대합」(0638)은 이 범위에서 1문뿐이나 뒤 범위 「부정적분의 활용」 계열에서 반복될 가능성이 있어 카탈로그에 후보로 남긴다.
