---
name: mechanism-데이터-RPM-CALC2-08-p1
description: RPM 미적분Ⅱ 08 여러 가지 함수의 적분 (1/2 · 교과서 08-1~유형 03 · 39문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: RPM 미적분Ⅱ (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-calc2
  section: 08 여러 가지 함수의 적분
  unit_code: CALC2-08
  part: "1/2"
  extract_range: "125~127쪽 · 0859~0897"
  total_problems: 39
  unit_total: 83
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-calc2/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-calc2/items/<id>.tex
  image_source: latex-bank/rpm-calc2/figures/ (crops.json) · 이 범위에는 그림 문항 없음
---

# RPM 미적분Ⅱ · 08 여러 가지 함수의 적분 (1/2) 정독 데이터 (v1.0)

125~127쪽, 0859~0897 의 39문항이다. 구역은 교과서 08-1(x^n 부정적분) · 08-2(지수함수 부정적분) · 08-3(삼각함수 부정적분) · 08-4(정적분) · 08-5(우함수·기함수의 정적분) 다섯 개와 유형 01(x^n 부정적분) · 유형 02(지수함수 부정적분; 밑이 e) · 유형 03(지수함수 부정적분; 밑이 e 가 아님) 세 개다. 앞 25문항은 적분 공식을 처음 적용하는 교과서 구역이라 발문이 적분 기호 하나뿐이고, 뒤 14문항부터 적분상수 결정·관계식 미분·역함수·급수 같은 층이 붙는다.

벤더 난이도 신호는 RPM 표준대로 읽었다. 교과서 구역은 ★1 출발, 유형 구역은 level 이 없으면 ★2 · 중하 ★1~2 · 중 ★2 · 상중 ★3 출발이며, tag(대표문제·서술형)는 ★ 를 올리지 않는다. 출발점에서 M_total 과 통찰로만 ±1 조정했고 라벨을 억지로 맞추지 않았다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 사슬) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 / 골조를 유지한 설정 변형과 ★ 변동 지점)를 채웠다. 이 범위에는 그림 문항이 없다.

## 문항 데이터

### 교과서 08-1 함수 $y=x^n$의 부정적분

```yaml
- id: RPM-CALC2-0859
  page: 125
  vendor_label: "교과서 08-1 함수 $y=x^n$의 부정적분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    1/x^4 의 부정적분.
  category: "음의 정수 지수로 고치기 → x^n 부정적분 공식"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "x^n 꼴의 부정적분(유리수·음의 지수)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    1/x^4 을 x^(-4) 로 보고 지수를 1 올려 나누는 한 단계. n 이 -1 이 아니라 로그가 끼지 않는다.
    교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "1/x^4 = x^(-4) → x^n 공식(n≠-1) → -1/(3x^3)+C"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-\dfrac{1}{3x^3}+C$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0859.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모 지수를 2~6 으로 바꿀 수 있음. 제약: 지수가 1 이면 ln|x| 가 되어 유형이 바뀌므로 n≠-1 을 유지하고, 지수를 올린 뒤에도 계수 부호가 음수로 남는지 확인."
    creative: "(1) 분모를 근호와 섞어 유리수 지수 연습으로(★1 유지) (2) 1/x 항을 하나 섞어 ln|x| 와 절댓값 처리를 추가(★1~2) (3) 정적분 구간을 붙여 수치를 묻기(★1)."
```

```yaml
- id: RPM-CALC2-0860
  page: 125
  vendor_label: "교과서 08-1 함수 $y=x^n$의 부정적분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    x^3 의 다섯제곱근의 부정적분.
  category: "거듭제곱근 → 유리수 지수 → x^n 부정적분 공식"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "x^n 꼴의 부정적분(유리수·음의 지수)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    근호를 x^(3/5) 로 고치면 지수를 1 올려 8/5 로 나누는 한 단계.
    답을 다시 근호 꼴로 되돌리는 정리만 남는다. 교과서·통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "5제곱근 x^3 = x^(3/5) → 지수 1 올려 8/5 로 나누기 → (5/8)x^(8/5)+C"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{5}{8}x\sqrt[5]{x^3}+C$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0860.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 차수와 안쪽 지수 조합(제곱근·세제곱근). 제약: 지수+1 이 0 이 되지 않아야 하고, 결과를 다시 근호 꼴로 되돌릴 수 있는 조합으로."
    creative: "(1) 근호를 두 겹으로 씌워 지수 정리 단계를 하나 추가(★1) (2) 분모에 근호를 두어 음의 유리수 지수로(★1~2) (3) f(1) 조건을 붙여 적분상수까지 결정하게 하면 유형 01 꼴(★2)."
```

```yaml
- id: RPM-CALC2-0861
  page: 125
  vendor_label: "교과서 08-1 함수 $y=x^n$의 부정적분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    (x^3+x^2+2)/x^3 의 부정적분.
  category: "항별 나눗셈 → 1 + 1/x + 2x^(-3) → 각 항 적분(1/x 는 로그)"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "x^n 꼴의 부정적분(유리수·음의 지수)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    분모로 항별 나눗셈 한 번이면 세 항이 되고 그중 1/x 만 로그가 된다.
    절댓값을 빠뜨리는 T-표기 함정 하나. 교과서·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "분자를 x^3 으로 항별 나눗셈 → 1 + 1/x + 2x^(-3) → 각각 적분(1/x 는 ln|x|)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$x+\ln|x|-\dfrac{1}{x^2}+C$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0861.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자의 계수와 상수항, 분모 지수. 제약: 분자에 분모와 같은 차수의 항이 남아 1/x 가 정확히 한 번 생기도록 차수를 맞추고, 나머지 항의 지수+1 이 0 이 아니게."
    creative: "(1) 1/x 항이 생기지 않게 분자를 바꿔 로그 없는 답으로(★1) (2) 분모 지수를 낮춰 항 수를 줄이기(★1) (3) f(1)=0 조건을 붙여 적분상수까지 묻기(★2)."
```

```yaml
- id: RPM-CALC2-0862
  page: 125
  vendor_label: "교과서 08-1 함수 $y=x^n$의 부정적분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    (x^2-1)/√x 의 부정적분.
  category: "항별 나눗셈 → 유리수 지수 두 항 → x^n 공식"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "x^n 꼴의 부정적분(유리수·음의 지수)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    분모 근호를 x^(1/2) 로 보고 항별로 나누면 x^(3/2) 와 x^(-1/2) 두 항.
    음의 유리수 지수를 적분할 때 지수+1 이 1/2 가 되는 것만 맞추면 끝. 교과서·통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "분자를 x^(1/2) 로 항별 나눗셈 → x^(3/2)-x^(-1/2) → 유리수 지수 공식"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{2}{5}x^2\sqrt{x}-2\sqrt{x}+C$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0862.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자의 차수와 상수, 분모 근호 차수. 제약: 각 항의 지수+1 이 0 이 아니어야 하고 결과를 근호 꼴로 되돌릴 수 있게."
    creative: "(1) 분자를 (x-1)^2 로 바꿔 전개 단계를 추가(★1~2) (2) 분모를 세제곱근으로(★1) (3) 정적분 [1,4] 로 바꿔 수치를 묻기(★1)."
```

### 교과서 08-2 지수함수의 부정적분

```yaml
- id: RPM-CALC2-0863
  page: 125
  vendor_label: "교과서 08-2 지수함수의 부정적분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    2e^x + 5^x 의 부정적분.
  category: "항별 적분 → e^x 그대로 · a^x 는 ln a 로 나누기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수의 부정적분(밑 e·밑 a)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    밑이 e 인 항과 e 가 아닌 항을 한 문제에서 구분시키는 공식 확인 문항.
    후자에만 ln a 가 분모로 붙는다. 교과서·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "항별 적분 → 2e^x + 5^x/ln 5 + C"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$2e^x+\dfrac{5^x}{\ln 5}+C$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0863.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "e^x 의 계수와 밑 a(2,3,10). 제약: 밑은 1 이 아닌 양수여야 하고 ln a 가 분모로 남는 형태를 유지."
    creative: "(1) 두 항 모두 밑을 e 로 두어 ln 이 사라지게(★1) (2) 2^x·3^x 처럼 곱으로 주어 밑을 6 으로 합치는 단계를 추가(★2) (3) f(0) 조건으로 적분상수를 결정하게 하기(★2)."
```

```yaml
- id: RPM-CALC2-0864
  page: 125
  vendor_label: "교과서 08-2 지수함수의 부정적분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    e^(x+4) 의 부정적분.
  category: "지수법칙으로 상수 분리 → e^x 적분"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수의 부정적분(밑 e·평행이동)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    e^4 를 상수로 빼면 e^x 적분 그대로이고 다시 묶으면 형태가 변하지 않는다.
    x 의 계수가 1 이라 보정 계수가 붙지 않는다. 교과서·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "e^(x+4) = e^4·e^x → 상수 분리 → e^(x+4)+C"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$e^{x+4}+C$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0864.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수에 더하는 상수(x+1, x-3). 제약: 지수의 x 계수가 1 이 아니면 보정 계수가 붙어 치환 유형으로 넘어가므로 이 단계에서는 1 로 고정."
    creative: "(1) e^(2x+1) 로 바꿔 계수 보정을 요구(★2) (2) 밑을 2^(x+4) 로 바꿔 ln 2 가 남게(★1~2) (3) 정적분 [0,1] 로 값을 묻기(★1)."
```

### 교과서 08-3 삼각함수의 부정적분

```yaml
- id: RPM-CALC2-0865
  page: 125
  vendor_label: "교과서 08-3 삼각함수의 부정적분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    sin x + 3cos x 의 부정적분.
  category: "항별 적분 → sin 은 -cos · cos 은 sin"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수의 기본 부정적분"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    공식표 두 줄을 그대로 쓰는 문항. sin 적분에 음부호가 붙는 T-부호 하나뿐이다.
    교과서·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "항별 적분 → -cos x + 3 sin x + C"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-\cos x+3\sin x+C$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0865.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 항의 계수. 제약: sin 적분의 음부호가 유지되는지 확인."
    creative: "(1) tan·sec 항을 섞어 공식표 범위를 넓히기(★1~2) (2) 각을 2x 로 바꾸면 계수 보정이 필요(★2) (3) 정적분으로 바꿔 특수각 대입까지(★1)."
```

```yaml
- id: RPM-CALC2-0866
  page: 125
  vendor_label: "교과서 08-3 삼각함수의 부정적분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    csc x(csc x + cot x) 의 부정적분.
  category: "괄호 전개 → csc^2 x · csc x cot x → 공식표 두 줄"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수의 기본 부정적분"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    전개하면 두 항 모두 cot·csc 의 도함수 공식에 그대로 있다.
    두 항 다 음부호가 붙는 T-부호 함정. 교과서·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "괄호 전개 → csc^2 x + csc x cot x → -cot x - csc x + C"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-\cot x-\csc x+C$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0866.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "괄호 안 두 항의 조합과 계수. 제약: 전개 결과가 sec/csc 도함수 공식표 안의 항으로만 남아야 함."
    creative: "(1) sec x(sec x + tan x) 로 쌍을 바꾸기(★1) (2) 전개 후 1+cot^2=csc^2 항등식을 한 번 쓰게 만들기(★2) (3) 정적분 구간을 주어 정의되지 않는 점을 피하게 하기(★2 · T-범위)."
```

```yaml
- id: RPM-CALC2-0867
  page: 125
  vendor_label: "교과서 08-3 삼각함수의 부정적분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    (2 - tan x)cos x 의 부정적분.
  category: "곱을 풀어 tan x cos x = sin x 로 정리 → 항별 적분"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수의 기본 부정적분"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    tan x 를 sin/cos 로 펴면 cos 이 지워져 2cos x - sin x 라는 기본 두 항이 된다.
    이후는 공식 그대로. 교과서·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "tan x·cos x = sin x → 2cos x - sin x → 2 sin x + cos x + C"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$2\sin x+\cos x+C$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0867.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수 2 와 각 항의 부호. 제약: 곱한 뒤 cos 이 지워져 기본 적분표 항만 남는 조합을 유지."
    creative: "(1) (2-cot x)sin x 로 쌍대 변형(★1) (2) (1+tan x)cos x 처럼 두 항이 모두 남게(★1) (3) sec x 를 곱해 tan^2 이 생기면 항등식 단계가 추가(★2)."
```

```yaml
- id: RPM-CALC2-0868
  page: 125
  vendor_label: "교과서 08-3 삼각함수의 부정적분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    (sin^3 x - 1)/sin^2 x 의 부정적분.
  category: "항별 나눗셈 → sin x - csc^2 x → 공식표 두 줄"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수의 기본 부정적분"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    분모로 항별 나눗셈을 하면 sin x 와 -csc^2 x 두 항이 되고 둘 다 공식표에 있다.
    1/sin^2 x 를 csc^2 x 로 읽는 T-표기 하나. 교과서·통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "분모로 항별 나눗셈 → sin x - csc^2 x → -cos x + cot x + C"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-\cos x+\cot x+C$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0868.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자의 차수와 분모 삼각함수. 제약: 나눈 각 항이 기본 적분표에 남는 꼴이어야 함(csc x 단독은 범위 밖)."
    creative: "(1) 분모를 cos^2 x 로 바꿔 sec^2 이 나오게(★1) (2) 분자 상수 자리에 sin x 를 두어 항 수를 줄이기(★1) (3) 분모를 sin x 하나로 두면 csc x 적분이 필요해 범위를 벗어남(설계 주의)."
```

```yaml
- id: RPM-CALC2-0869
  page: 125
  vendor_label: "교과서 08-3 삼각함수의 부정적분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    (tan x - sec x)/cos x 의 부정적분.
  category: "1/cos x = sec x 로 분배 → sec x tan x · sec^2 x → 공식표"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수의 기본 부정적분"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    분모를 sec x 로 바꿔 곱해 나누면 sec x tan x 와 sec^2 x 두 항이 되고 둘 다 도함수 공식에 있다.
    두 항의 부호를 뒤집지 않는 것이 유일한 함정. 교과서·통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "1/cos x = sec x 로 분배 → sec x tan x - sec^2 x → sec x - tan x + C"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\sec x-\tan x+C$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0869.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자 두 항의 부호와 계수. 제약: 분배한 결과가 sec x tan x, sec^2 x 조합으로만 남아야 함."
    creative: "(1) (cot x - csc x)/sin x 로 쌍대 변형(★1) (2) 분자에 상수항을 넣으면 sec x 단독 적분이 생겨 범위 밖(설계 주의) (3) 정적분 구간을 주어 T-범위를 추가(★2)."
```

```yaml
- id: RPM-CALC2-0870
  page: 125
  vendor_label: "교과서 08-3 삼각함수의 부정적분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    tan^2 x 의 부정적분.
  category: "피타고라스 항등식으로 sec^2 x - 1 로 고치기 → 항별 적분"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수의 기본 부정적분"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    tan^2 x 는 적분표에 없고 항등식으로 sec^2 x - 1 을 만들어야 한 줄로 끝난다.
    교과서 08-3 은 이 항등식 자체가 학습 목표라 표준 공식 대입으로 보고 통찰로 세지 않았다. ★1.
    [분류 이슈] 항등식 착안을 I-EQV 로 셀지 여부 — 유형 구역에 같은 골조가 나오면 통찰 1개로 올릴 후보.
  tier: star_1
  mechanism_primary: "tan^2 x = sec^2 x - 1 → tan x - x + C"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\tan x-x+C$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0870.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "tan^2 대신 cot^2(=csc^2-1). 제약: 항등식을 쓴 결과가 도함수 공식형이어야 함."
    creative: "(1) cot^2 x 로 바꾸기(★1) (2) 각을 x/2 로 바꿔 계수 보정을 추가(★2) (3) (tan x + cot x)^2 로 두 항등식을 모두 쓰게 하면 ★2~3."
```

### 교과서 08-4 정적분

```yaml
- id: RPM-CALC2-0871
  page: 125
  vendor_label: "교과서 08-4 정적분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    0 부터 8 까지 x 의 세제곱근의 정적분.
  category: "유리수 지수로 고치기 → 부정적분 → 양끝 대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "기본 함수의 정적분 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x^(1/3) 의 부정적분 (3/4)x^(4/3) 에 8 과 0 을 넣는다.
    8^(4/3) 을 정수로 정리하는 지수 계산만 조심하면 된다. 교과서·통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "세제곱근 → x^(1/3) → (3/4)x^(4/3) 에 0,8 대입"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$12$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0871.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "위끝을 세제곱수(1,27,64)로. 제약: 유리수 지수 대입값이 정수로 떨어지는 끝값을 고를 것."
    creative: "(1) 아래끝을 1 로 옮기기(★1) (2) 네제곱근으로 바꾸기(★1) (3) 값이 12 가 되는 위끝을 묻는 역방향(★2)."
```

```yaml
- id: RPM-CALC2-0872
  page: 125
  vendor_label: "교과서 08-4 정적분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    1 부터 6 까지 1/x 의 정적분.
  category: "1/x 의 부정적분은 로그 → 양끝 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "기본 함수의 정적분 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    1/x 만 x^n 공식에서 빠지는 예외라는 것을 확인하는 문항.
    구간이 양수쪽이라 절댓값이 그대로 벗겨진다. 교과서·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "1/x 적분 = ln|x| → ln 6 - ln 1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\ln 6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0872.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 양끝(모두 같은 부호). 제약: 0 을 지나면 정의되지 않으므로 한쪽 부호 구간을 유지하고, 답이 로그의 비로 정리되게."
    creative: "(1) 구간을 음수쪽으로 옮겨 절댓값을 쓰게(★2 · T-범위) (2) 피적분함수를 (x+1)/x 로 바꿔 항이 둘(★1) (3) 값이 ln 3 이 되는 위끝을 묻기(★2)."
```

```yaml
- id: RPM-CALC2-0873
  page: 125
  vendor_label: "교과서 08-4 정적분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    0 부터 ln 2 까지 e^x 의 정적분.
  category: "e^x 부정적분 → 로그 끝값 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "기본 함수의 정적분 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    e^x 의 부정적분이 자기 자신이라는 것과 e^(ln 2)=2 를 함께 확인시키는 문항.
    계산은 두 수의 차 한 줄. 교과서·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "e^x 적분 = e^x → e^(ln 2) - e^0"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0873.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "위끝 ln k 의 k. 제약: e 와 로그가 상쇄돼 정수로 떨어지는 끝값을 쓸 것."
    creative: "(1) 피적분함수를 e^x + 1 로(★1) (2) 양끝을 모두 로그로(★1) (3) 값을 주고 위끝을 역으로 구하기(★2 · I-BW)."
```

```yaml
- id: RPM-CALC2-0874
  page: 125
  vendor_label: "교과서 08-4 정적분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    0 부터 3 까지 3^x 의 정적분.
  category: "a^x 부정적분(ln a 로 나누기) → 양끝 대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "기본 함수의 정적분 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    밑이 e 가 아니라 ln 3 이 분모에 끝까지 남는다는 것을 확인시키는 문항.
    3^3 - 3^0 을 먼저 정리하면 한 줄. 교과서·통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "a^x 적분 = a^x/ln a → (3^3 - 1)/ln 3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{26}{\ln 3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0874.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑과 위끝(2^x·[0,4] 등). 제약: 밑은 1 이 아닌 양수, 위끝이 정수여서 거듭제곱이 정수로 떨어지게."
    creative: "(1) 밑을 e 로 두어 ln 이 사라지게(★1) (2) 2^x+3^x 두 항으로(★1~2) (3) 값을 주고 위끝을 묻기(★2)."
```

```yaml
- id: RPM-CALC2-0875
  page: 125
  vendor_label: "교과서 08-4 정적분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    0 부터 π 까지 sin x 의 정적분.
  category: "sin 부정적분 → 특수각 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "기본 함수의 정적분 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    -cos x 에 π 와 0 을 넣으면 두 부호가 겹쳐 2 가 된다.
    음부호 두 번을 놓치는 T-부호 하나뿐. 교과서·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "sin 적분 = -cos x → -cos π + cos 0"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0875.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 양끝 특수각. 제약: 2π 까지 잡으면 값이 0 이 되므로 의도한 값에 맞게 끝값을 고를 것."
    creative: "(1) |sin x| 로 바꿔 구간 분할을 요구(★2) (2) 구간을 [0,2π] 로 두어 0 이 나오는 것을 확인시키기(★1) (3) 넓이로 물어 절댓값 처리를 강제(★2)."
```

```yaml
- id: RPM-CALC2-0876
  page: 125
  vendor_label: "교과서 08-4 정적분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    π/6 부터 π/2 까지 cos x 의 정적분.
  category: "cos 부정적분 → 특수각 사인값 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "기본 함수의 정적분 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    sin x 에 두 특수각을 넣어 빼는 한 줄. 특수각 표를 확인시키는 것이 목적이다.
    교과서·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "cos 적분 = sin x → sin(π/2) - sin(π/6)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0876.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "양끝 특수각(π/6·π/4·π/3). 제약: 사인값이 표에 있는 각만 쓰고 답이 정리되는 조합을 고를 것."
    creative: "(1) sin 으로 바꾸고 같은 구간(★1) (2) cos x - sin x 두 항(★1) (3) 값이 1/2 이 되는 아래끝을 묻기(★2 · I-BW)."
```

```yaml
- id: RPM-CALC2-0877
  page: 125
  vendor_label: "교과서 08-4 정적분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    같은 구간 [0,4] 의 두 정적분 (√x-1) 과 (√x+1) 의 합.
  category: "구간이 같으므로 피적분함수를 더하기 → 상수항 소거"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정적분의 성질(구간 결합·상하한 교환)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    두 적분의 구간이 같아 피적분함수를 먼저 더하면 ±1 이 지워지고 2√x 한 항만 남는다.
    따로 계산해도 같은 값이라 선형성 확인용 교과서 문항. 통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "구간이 같으므로 피적분함수를 합쳐 2x^(1/2) → [0,4] 정적분"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{32}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0877.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 끝값과 ±1 자리의 상수. 제약: 두 적분의 구간이 같아야 합치기가 성립하고, 끝값은 제곱수여야 근호가 정리됨."
    creative: "(1) 두 적분의 구간을 다르게 해 합치기가 안 되게(★2) (2) 빼기로 바꿔 상수항만 남기기(★1) (3) 피적분함수를 지수함수 쌍으로 바꾸기(★1)."
```

```yaml
- id: RPM-CALC2-0878
  page: 125
  vendor_label: "교과서 08-4 정적분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    두 정적분의 합 — 두 번째는 위끝과 아래끝이 뒤바뀐 (e^(-x)+1) 의 적분.
  category: "상하한 교환으로 부호 반전 → 같은 구간으로 맞춰 결합"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "위끝·아래끝이 뒤집힌 두 번째 적분을 부호를 바꿔 같은 구간으로 옮겨야 두 적분이 결합됨"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "정적분의 성질(구간 결합·상하한 교환)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    그대로 더하면 상수항 1 이 두 번 들어가 틀린다. 상하한 교환이 부호 반전이라는 것을 먼저 보아야
    같은 구간의 한 적분으로 합쳐지고, 그때 e^x - e^(-x) 만 남는다.
    함정 2종(T-부호·T-경계) + 동치 변환 1 → 교과서 ★1 출발에서 ★2.
  tier: star_2
  mechanism_primary: "뒤집힌 적분을 부호 반전으로 같은 구간에 맞춤 → [-1,0] 에서 (e^x - e^(-x)) 한 번 적분"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2-e-\dfrac{1}{e}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0878.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 [-1,0] 과 상수항 1. 제약: 뒤집어 합쳤을 때 남는 쌍(e^x 와 e^(-x))이 서로 상쇄·결합되는 조합이어야 함."
    creative: "(1) 뒤집기 없이 같은 방향으로 주면 단순 합(★1) (2) 적분을 셋으로 늘려 구간 이어붙이기까지 요구(★2) (3) 피적분함수를 sin·cos 쌍으로 바꾸기(★2)."
```

```yaml
- id: RPM-CALC2-0879
  page: 125
  vendor_label: "교과서 08-4 정적분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    같은 피적분함수 (2^x-1) 의 두 정적분 [0,1] 과 [1,3] 의 합.
  category: "맞닿은 구간 이어붙이기 → [0,3] 한 번 적분"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정적분의 성질(구간 결합·상하한 교환)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    피적분함수가 같고 구간이 1 에서 맞닿아 있어 하나의 구간으로 합친다.
    밑이 2 라 ln 2 가 분모에 남고 상수항 -1 은 구간 길이만큼 빠진다. 통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "맞닿은 두 구간 결합 → [0,3] 에서 (2^x - 1) 한 번 적분"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{7}{\ln 2}-3$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0879.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 2 와 이음점 1, 끝점 3. 제약: 두 구간이 맞닿아야 결합이 성립하고 밑은 1 이 아닌 양수."
    creative: "(1) 이음점을 어긋나게 해 결합이 안 되게(★2) (2) 두 번째 적분의 피적분함수를 다르게 주기(★2) (3) 합한 값을 주고 끝점을 묻기(★2)."
```

```yaml
- id: RPM-CALC2-0880
  page: 125
  vendor_label: "교과서 08-4 정적분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    두 정적분의 합 — 두 번째는 피적분함수의 부호와 상하한이 모두 반대인 꼴.
  category: "부호 반전과 상하한 교환이 상쇄됨을 확인 → 구간 이어붙이기"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "피적분함수의 부호 반전과 상하한 교환이 서로 상쇄되어 두 번째 적분이 같은 함수의 이어지는 구간이 됨"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "정적분의 성질(구간 결합·상하한 교환)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 번 뒤집힌 것이 서로 지워져 결국 [0,2π] 한 구간의 적분이 된다는 것이 골조다.
    한쪽만 보면 부호를 잘못 잡는다. 함정 2종 + 동치 변환 1 → 교과서 ★1 출발에서 ★2.
  tier: star_2
  mechanism_primary: "부호 반전 + 상하한 교환이 상쇄 → [0,2π] 에서 (cos x - x) 한 번 적분"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-2\pi^2$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0880.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 끝 π·2π 와 피적분함수의 일차항 계수. 제약: 두 구간이 맞닿아야 하고 부호 반전과 상하한 반전이 동시에 일어나야 상쇄됨."
    creative: "(1) 상하한만 뒤집고 부호는 그대로 두어 상쇄가 일어나지 않게(★2) (2) 구간을 [0,3π] 까지 넓히기(★2) (3) 값을 주고 끝점을 묻는 역방향(★3)."
```

### 교과서 08-5 우함수와 기함수의 정적분

```yaml
- id: RPM-CALC2-0881
  page: 125
  vendor_label: "교과서 08-5 우함수와 기함수의 정적분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    -9 부터 9 까지 √|x| 의 정적분.
  category: "우함수 판정 → 반쪽 구간의 2배"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "우함수·기함수의 정적분"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    절댓값 때문에 구간을 갈라도 되지만 우함수 성질을 쓰면 오른쪽 반만 계산해 2배 하면 된다.
    구역 제목이 그 성질을 지정하고 있어 통찰로 세지 않았다. 교과서·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "√|x| 는 우함수 → 2 × [0,9] 에서 x^(1/2) 적분"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$36$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0881.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 폭 9 와 근호 차수. 제약: 구간이 원점 대칭이어야 하고 반쪽 적분값이 정수로 떨어지는 끝값을 고를 것."
    creative: "(1) x√|x| 로 바꿔 기함수가 되어 값이 0(★1~2) (2) 대칭이 아닌 구간으로 두어 성질을 못 쓰게(★2) (3) √|x-1| 로 대칭축을 옮기기(★3)."
```

```yaml
- id: RPM-CALC2-0882
  page: 125
  vendor_label: "교과서 08-5 우함수와 기함수의 정적분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    -3 부터 3 까지 (e^x + e^(-x)) 의 정적분.
  category: "우함수 판정 → 반쪽 구간의 2배"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "우함수·기함수의 정적분"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    e^x 와 e^(-x) 를 더한 함수가 우함수라는 것을 확인하고 반쪽의 2배로 계산한다.
    양끝을 직접 대입해도 같은 값이라 성질이 필수는 아니다. 교과서·통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "e^x + e^(-x) 는 우함수 → 2 × [0,3] 적분"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$2\left(e^3-\dfrac{1}{e^3}\right)$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0882.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 폭 3. 제약: 원점 대칭 구간을 유지해야 성질이 성립."
    creative: "(1) e^x - e^(-x) 로 바꿔 기함수가 되어 0(★1) (2) e^x 만 주어 대칭성이 없게(★1) (3) 우함수 항과 기함수 항을 섞어 분리를 요구(★2)."
```

```yaml
- id: RPM-CALC2-0883
  page: 125
  vendor_label: "교과서 08-5 우함수와 기함수의 정적분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    -π/2 부터 π/2 까지 (sin x + cos x) 의 정적분.
  category: "우·기함수로 항을 갈라 기함수 항은 0 처리"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "우함수·기함수의 정적분"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    대칭 구간에서 sin 항은 기함수라 0 이 되고 cos 항만 반쪽의 2배로 남는다.
    두 성질을 한 문제에서 동시에 쓰게 하는 배치. 구역 제목이 성질을 지정해 통찰로 세지 않음 → ★1.
  tier: star_1
  mechanism_primary: "sin 은 기함수 → 0, cos 은 우함수 → 2 × [0,π/2] 적분"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$2$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0883.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 폭 π/2 와 두 항의 계수. 제약: 원점 대칭 구간이어야 기함수 소거가 성립."
    creative: "(1) sin x + x^2 처럼 다항과 섞기(★1) (2) 구간을 [0,π/2] 로 바꿔 성질을 못 쓰게(★1) (3) sin^3 x + cos^2 x 로 차수를 올려 항등식까지 요구(★3)."
```

### 유형 01 함수 $y=x^n$의 부정적분

```yaml
- id: RPM-CALC2-0884
  page: 126
  vendor_label: "유형 01 함수 $y=x^n$의 부정적분"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    f(x) 가 (√x-1)^2/√x 의 부정적분이고 f(1) 이 5/3 일 때 f(4). 5지선다.
  category: "전개·항별 나눗셈 → 부정적분 → f(1) 로 적분상수 결정 → f(4)"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부정적분으로 정의된 함수와 적분상수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분자를 전개해 분모로 나누면 x^(1/2) - 2 + x^(-1/2) 세 항이 되고, 나머지는 적분상수를 한 점으로
    맞추는 표준 절차다. 유리수 지수 정리량이 조금 많을 뿐 갈래가 없다.
    유형 대표문제(level 없음) ★2 출발·통찰 없음·M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "분자 전개·항별 나눗셈 → x^(1/2)-2+x^(-1/2) 적분 → f(1) 로 C 결정 → f(4) 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0884.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자 (√x-1)^2 의 상수, f(1) 값, 묻는 점 4. 제약: 전개한 각 항의 지수+1 이 0 이 아니어야 하고, 묻는 점을 제곱수로 두어야 선택지가 유리수로 떨어짐."
    creative: "(1) 묻는 점을 9 로 바꾸기(★2) (2) 조건을 f(1)=f(4) 로 주어 역방향 결정으로(★3) (3) 분자를 (√x-1)^3 으로 올려 항을 넷으로(★2~3)."
```

```yaml
- id: RPM-CALC2-0885
  page: 126
  vendor_label: "유형 01 함수 $y=x^n$의 부정적분"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=x√x-2 의 한 부정적분을 F 라 할 때 F(1)-F(0). 5지선다.
  category: "부정적분의 차 = 정적분 → [0,1] 에서 계산"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부정적분으로 정의된 함수와 적분상수 결정"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    '한 부정적분'이라 적분상수가 무엇이든 차에서 지워진다는 점만 알면 [0,1] 정적분 한 줄이다.
    계산도 x^(3/2) 한 항과 상수항뿐. 벤더 중하(★1~2 출발)·통찰 없음·M_total 5 → −1 적용해 ★1.
  tier: star_1
  mechanism_primary: "F(1)-F(0) = [0,1] 에서 (x^(3/2)-2) 의 정적분"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0885.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 차수와 상수항, 구간 [0,1]. 제약: 0 에서 정의되는 함수여야 하고 지수+1 이 0 이 아니게."
    creative: "(1) 구간을 [1,4] 로 옮기기(★1) (2) F(2)-F(-1) 처럼 음수를 끼워 정의역 확인을 넣기(★2) (3) f 를 지수함수로 바꾸기(★1)."
```

```yaml
- id: RPM-CALC2-0886
  page: 126
  vendor_label: "유형 01 함수 $y=x^n$의 부정적분"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    ㈎ f'(x)=(1+x^4)/x^2 · ㈏ f(-1)=0 을 만족시키는 f 에 대하여 f(1).
  category: "항별 나눗셈 → 적분 → 조건점으로 적분상수 → 값 대입"
  M: {s: 3, k: 1, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "도함수가 주어진 함수의 값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    나눗셈 한 번이면 x^(-2) 와 x^2 두 항이고 둘 다 n≠-1 이라 로그가 끼지 않는다.
    조건점이 음수라 -1/x 자리의 부호를 놓치기 쉬운 T-부호 하나. 서술형 태그는 ★ 를 올리지 않는다.
    유형·중 ★2 출발·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "(1+x^4)/x^2 = x^(-2)+x^2 → 적분 → f(-1)=0 으로 C 결정 → f(1)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-\dfrac{4}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0886.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자의 차수·계수와 조건점 -1, 묻는 점 1. 제약: 나눗셈 뒤 1/x 항이 생기면 로그와 정의역 분리가 끼어 유형이 바뀌므로 n≠-1 을 유지."
    creative: "(1) 조건점과 묻는 점을 같은 부호로 두어 부호 함정을 없애기(★1~2) (2) 분자에 x^3 항을 넣어 로그가 생기면 정의역을 나눠야 함(★3) (3) f(1)-f(-1) 을 묻는 형태로(★2)."
```

```yaml
- id: RPM-CALC2-0887
  page: 126
  vendor_label: "유형 01 함수 $y=x^n$의 부정적분"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x) 가 ((x+2)^2-2)/x^2 의 부정적분이고 곡선 y=f(x) 가 점 (1,0) 을 지날 때 f(2).
  category: "전개·항별 나눗셈 → 로그항 포함 적분 → 점 조건으로 C → f(2)"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부정적분으로 정의된 함수와 적분상수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분자를 전개해 나누면 세 항이 되고 그중 1/x 항만 로그가 된다.
    '점을 지난다'를 f(1)=0 으로 옮기는 것은 표준이고 나머지는 상수 결정.
    유형·중 ★2 출발·통찰 없음·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "분자 전개·나눗셈 → 1 + 4/x + 2x^(-2) 적분(로그 포함) → f(1)=0 으로 C → f(2)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2+4\ln 2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0887.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자의 상수들과 조건점 (1,0), 묻는 점 2. 제약: 1/x 항의 계수가 그대로 로그 계수가 되므로 답이 유리수 + 로그 꼴로 정리되게 맞출 것."
    creative: "(1) 상수를 조정해 로그항이 사라지게(★1~2) (2) 조건점과 묻는 점을 맞바꾸기(★2) (3) 정의역을 음수쪽으로 옮겨 절댓값 처리를 요구(★3)."
```

```yaml
- id: RPM-CALC2-0888
  page: 126
  vendor_label: "유형 01 함수 $y=x^n$의 부정적분"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f 의 부정적분을 구해야 하는데 잘못하여 미분했더니 1/(x 의 세제곱근) 이 되었다. f(1)=0 일 때 f 의 부정적분.
  category: "잘못 미분한 결과 → 한 번 적분해 f 복원 → 다시 적분"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'잘못 미분했다'를 f'(x)=x^(-1/3) 으로 옮겨, 적분을 두 번 해야 답이 된다는 구조로 바꿈"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "잘못 미분한 결과로부터 부정적분 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    문장을 f'(x)=x^(-1/3) 으로 읽는 순간 남은 일은 적분 두 번이다.
    첫 적분에서 f(1)=0 으로 상수를 정하고, 두 번째 적분의 상수는 C 로 남긴다는 층 구분이 핵심.
    유형·중 ★2 출발·통찰 1(EQV d1) → ★2.
  tier: star_2
  mechanism_primary: "f'(x)=x^(-1/3) → 적분·f(1)=0 으로 f 확정 → 다시 적분해 부정적분(+C)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{9}{10}x\sqrt[3]{x^2}-\dfrac{3}{2}x+C$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0888.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "잘못 미분한 결과의 지수와 조건 f(1)=0. 제약: 두 번 적분해도 지수+1 이 0 이 되지 않아야 하고 계수가 유리수로 떨어지게."
    creative: "(1) '잘못하여 적분했다' 로 뒤집어 미분을 두 번 하게(★2) (2) 조건을 f(0)=0 으로 옮겨 정의역 확인을 넣기(★2~3) (3) 최종 부정적분 대신 정적분 값을 묻기(★2)."
```

```yaml
- id: RPM-CALC2-0889
  page: 126
  vendor_label: "유형 01 함수 $y=x^n$의 부정적분"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x>0 에서 f 의 한 부정적분 F 가 F(x)=xf(x)-2ln x 를 만족하고 f(1)=0 일 때, f(k)=-1 인 k. 5지선다.
  category: "관계식 양변 미분 → f 소거 → f' 결정 → 적분·조건·역대입"
  M: {s: 3, k: 1, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "F 가 f 의 부정적분이라는 관계를 양변 미분으로 옮기면 f 가 상쇄되고 f' 만 남는다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "F(x)=xf(x)+g(x) 꼴 관계식 미분하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    양변을 미분하면 좌변은 f, 우변은 f + xf' - 2/x 가 되어 f 가 지워지고 f' 가 드러난다.
    그 뒤로는 적분 → f(1)=0 으로 상수 → f(k)=-1 역대입이라 갈래가 없다.
    유형·중 ★2 출발·통찰 1(EQV d1) → ★2.
    [분류 이슈] 관계식 미분·적분·역대입 3층이라 골조만 보면 ★3 에 가깝다 — 벤더 '중'을 존중해 ★2 로 둠.
  tier: star_2
  mechanism_primary: "F(x)=xf(x)-2ln x 양변 미분(F'=f) → xf'(x)=2/x → f' 적분·f(1)=0 으로 C → f(k)=-1 풀기"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0889.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "관계식의 로그 계수 -2, f(1) 값, 목표값 -1. 제약: x>0 정의역을 유지하고 f(k)=-1 의 해가 선택지 안 유리수로 떨어지게."
    creative: "(1) -2ln x 를 다항식으로 바꾸기(★2) (2) F(x)=x^2 f(x) 꼴로 올려 곱미분 단계를 늘리기(★3) (3) f(1) 대신 F(1) 을 조건으로 주어 한 층 추가(★3)."
```

```yaml
- id: RPM-CALC2-0890
  page: 126
  vendor_label: "유형 01 함수 $y=x^n$의 부정적분"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    자연수 n 에 대하여 f_n 이 x^(1/(n+1)) 의 부정적분이고 f_n(0)=0 일 때, f_1(1)부터 f_10(1)까지의 곱. 5지선다.
  category: "n 이 든 지수의 적분 → f_n(1) 일반항 → 이웃끼리 지워지는 곱"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 2
      type: I-PD
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f_n(1) 이 (n+1)/(n+2) 꼴임을 잡으면 1부터 10까지의 곱에서 이웃 분모·분자가 지워지는 망원 구조가 보임"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "n 을 포함한 부정적분의 일반항과 망원곱"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    지수를 1 올리면 (n+2)/(n+1) 이고 그 역수가 계수로 내려온다는 일반항을 먼저 세워야 한다.
    f_n(0)=0 이 적분상수를 0 으로 없애 주므로 f_n(1) 은 계수 그 자체가 되고, 곱이 망원으로 접혀 두 항만 남는다.
    10개를 일일이 곱하면 사실상 막힌다. 상중 ★3 출발·통찰 1(PD d2) → ★3.
  tier: star_3
  mechanism_primary: "x^(1/(n+1)) 적분 → f_n(0)=0 으로 C=0 → f_n(1)=(n+1)/(n+2) → 1..10 곱이 망원 소거"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "④"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0890.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 1/(n+1) 과 곱의 범위 1~10. 제약: 계수가 이웃끼리 상쇄되는 꼴이어야 하고, 곱 범위 양끝이 선택지 값과 맞아야 함."
    creative: "(1) 곱 대신 합으로 바꾸면 부분분수 유형으로 이동(★3) (2) f_n(1) 대신 f_n(2) 로 두면 2의 거듭제곱이 남아 망원이 깨짐(★3~4) (3) 지수를 n/(n+1) 로 바꿔 상쇄 쌍을 다르게(★3)."
```

### 유형 02 지수함수의 부정적분; 밑이 $e$인 경우

```yaml
- id: RPM-CALC2-0891
  page: 127
  vendor_label: "유형 02 지수함수의 부정적분; 밑이 $e$인 경우"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    f(x) 가 (1-e^(2x))/(1+e^x) 의 부정적분이고 f(0)=3 일 때 f(1).
  category: "제곱 차 인수분해 → 약분 → 두 항 적분 → 조건으로 C"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "분자를 (1-e^x)(1+e^x) 로 보아 분모를 지워야 적분 가능한 꼴이 됨"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "지수함수 분수식의 약분 후 부정적분(밑 e)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분수 그대로는 적분할 수 없고, 분자를 제곱 차로 보아 분모를 지우는 한 수가 전부다.
    지우고 나면 1 - e^x 라 적분은 한 줄이고 나머지는 적분상수 결정.
    유형 대표문제 ★2 출발·통찰 1(EQV d1) → ★2 유지.
  tier: star_2
  mechanism_primary: "(1-e^(2x))/(1+e^x) = 1-e^x → 적분 → f(0)=3 으로 C → f(1)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$5-e$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0891.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자·분모의 지수 조합, f(0) 값, 묻는 점 1. 제약: 분모가 분자를 나누어떨어지게 하는 조합(제곱 차·세제곱 합)이어야 약분이 성립."
    creative: "(1) (e^(2x)-1)/(e^x-1) 로 부호를 바꾸기(★2) (2) 분자를 e^(3x)+1 로 올려 세제곱 합 인수분해로(★2~3) (3) 약분이 되지 않는 조합은 이 단원 범위를 벗어남(설계 주의)."
```

```yaml
- id: RPM-CALC2-0892
  page: 127
  vendor_label: "유형 02 지수함수의 부정적분; 밑이 $e$인 경우"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(0)=1, f'(x)=e^x-2x+1 이고 F 가 f 의 부정적분일 때 F(1)-F(0).
  category: "f' 적분으로 f 복원 → F 의 차를 [0,1] 정적분으로"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "도함수 조건으로 f 복원 후 정적분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    적분을 두 번 하되 두 번째는 부정적분의 차라 정적분으로 읽으면 된다.
    각 단계가 공식 그대로이고 상수 결정도 한 번뿐이다. 유형·중 ★2 출발·통찰 없음·M_total 8 → ★2.
  tier: star_2
  mechanism_primary: "f'(x) 적분·f(0)=1 로 f 확정 → F(1)-F(0) = [0,1] 에서 f 의 정적분"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$e-\dfrac{5}{6}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0892.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f' 의 각 항 계수와 f(0) 값, 구간 [0,1]. 제약: 두 번 적분해도 초등함수로 남는 항(지수·다항)만 쓸 것."
    creative: "(1) 구간을 [0,2] 로 넓히기(★2) (2) f(0) 대신 f(1) 을 주어 상수 결정 순서를 바꾸기(★2) (3) f' 에 1/x 를 넣어 로그와 정의역 제한을 추가(★3)."
```

```yaml
- id: RPM-CALC2-0893
  page: 127
  vendor_label: "유형 02 지수함수의 부정적분; 밑이 $e$인 경우"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    극한 (f(x+h)-f(x))/h 가 e^(x+2)+4x 이고 f(0)=e^2-e^3 일 때 f(1).
  category: "극한을 도함수 정의로 읽기 → 적분 → 조건으로 C → 값"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "극한 표현을 도함수의 정의로 읽어 f'(x) 가 주어진 문제로 바꿈"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "도함수 정의로 주어진 조건의 적분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    겉모습만 극한이고 정의 그대로라 f' 를 읽는 순간 적분 한 번으로 끝난다.
    e^(x+2) 는 상수 e^2 를 빼면 e^x 적분 그대로이고 조건값이 그 상수와 맞물려 정리된다.
    유형·중 ★2 출발·통찰 1(RT d1) → ★2.
  tier: star_2
  mechanism_primary: "극한 = f'(x) = e^(x+2)+4x → 적분 → f(0) 조건으로 C → f(1)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0893.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수의 상수 2, 일차항 계수 4, f(0) 값. 제약: f(0) 을 e^2 항과 맞물리게 잡아야 답이 정수로 떨어짐."
    creative: "(1) 극한을 f(x+2h) 꼴로 바꿔 계수 보정을 요구(★3) (2) 조건을 f(1) 로 주고 f(0) 을 묻기(★2) (3) 4x 를 1/x 로 바꿔 로그와 정의역 제한을 추가(★3)."
```

```yaml
- id: RPM-CALC2-0894
  page: 127
  vendor_label: "유형 02 지수함수의 부정적분; 밑이 $e$인 경우"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=ln x-1 에 대하여 f(g(x))=x 일 때 g 의 부정적분. 5지선다.
  category: "합성 조건을 역함수로 읽기 → g 의 식 → 적분"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "f(g(x))=x 를 g 가 f 의 역함수라는 뜻으로 읽어 로그식을 지수식으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "역함수를 구해 적분하기(지수·로그)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    합성 조건을 역함수로 읽으면 로그를 지수로 뒤집는 한 단계이고, 나온 함수는 e^(x+1) 한 항이라 적분이 자기 자신이다.
    상수 +1 의 자리를 놓치면 선택지 ①·③이 갈린다. 유형·중 ★2 출발·통찰 1(RT d1) → ★2.
  tier: star_2
  mechanism_primary: "f(g(x))=x → g 는 f 의 역함수 → g(x)=e^(x+1) → 적분"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0894.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f 의 상수항 -1. 제약: 로그 앞 계수를 1 로 두어야 역함수가 e^(x+k) 한 항으로 떨어짐(계수가 붙으면 지수에 분수가 생김)."
    creative: "(1) f(x)=2ln x 로 두어 역함수에 1/2 지수가 생기게(★2~3) (2) g(f(x))=x 로 순서를 바꿔 같은 결론을 확인(★2) (3) 부정적분 대신 정적분 구간을 주기(★2)."
```

### 유형 03 지수함수의 부정적분; 밑이 $e$가 아닌 경우

```yaml
- id: RPM-CALC2-0895
  page: 127
  vendor_label: "유형 03 지수함수의 부정적분; 밑이 $e$가 아닌 경우"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    (8^x+1)/(2^x+1) 의 부정적분이 4^x/ln a + 2^x/ln b + x + C 일 때 상수 a,b 의 곱. 5지선다.
  category: "세제곱 합 인수분해·약분 → 밑이 e 가 아닌 적분 → 계수 비교"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "8^x 을 (2^x)^3 으로 보아 세제곱 합 인수분해로 분모를 지워야 적분 가능한 꼴이 됨"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "밑이 e 가 아닌 지수함수 분수식의 적분과 계수 비교"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    8^x 을 2^x 의 세제곱으로 읽는 것이 첫 문턱이고, 약분하고 나면 a^x/ln a 공식 두 번과 상수항 하나다.
    마지막에 음의 계수를 ln b 안으로 밀어 넣어 b 를 읽는 자리에서 부호·표기 함정이 겹친다.
    유형 대표문제 ★2 출발·통찰 1(EQV d1)·M_total 9 → ★2 유지.
    [분류 이슈] 인수분해 + 계수 역산으로 M_total 이 이 범위 최고(9)라 ★3 후보 — 대표문제라는 벤더 신호를 존중해 ★2 로 둠.
  tier: star_2
  mechanism_primary: "(8^x+1)/(2^x+1) = 4^x-2^x+1 → 항별 적분 → 주어진 꼴과 계수 비교해 a,b → 곱"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0895.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 2 와 그 세제곱 8, 주어진 꼴의 항 구성. 제약: 분모가 분자를 나누어떨어지게 하는 거듭제곱 조합이어야 하고, 음의 계수가 ln b 로 표현되려면 b 는 1 이 아닌 양수여야 함."
    creative: "(1) 밑만 3 으로 바꿔 27^x 과 3^x 조합으로(★2) (2) 분모를 2^x-1 로 두어 세제곱 차 인수분해로(★2) (3) ab 대신 a+b 나 b 단독을 물어 부호 함정을 키우기(★2~3)."
```

```yaml
- id: RPM-CALC2-0896
  page: 127
  vendor_label: "유형 03 지수함수의 부정적분; 밑이 $e$가 아닌 경우"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    점 (0,1) 을 지나는 곡선 y=f(x) 위의 점에서 접선의 기울기가 5^(2x) ln 25 일 때, 1/f(n) 의 무한급수의 합. 5지선다.
  category: "접선 기울기 = f' → 적분·점 조건 → f(n) → 무한등비급수"
  M: {s: 3, k: 1, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 3
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "적분으로 얻은 f(n) 을 등비수열로 보고 급수 단원의 무한등비급수 합 공식으로 넘어감"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "접선의 기울기 조건으로 곡선 구하기 + 등비급수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    5^(2x) 을 25^x 으로 고치면 ln 25 가 이미 곱해져 있어 적분이 25^x 으로 딱 떨어지고, 점 조건이 상수를 0 으로 만든다.
    마지막 한 걸음만 적분 밖(무한등비급수)이며 공비가 1 보다 작아 바로 수렴한다.
    유형·중 ★2 출발·통찰 1(XU d1) → ★2.
  tier: star_2
  mechanism_primary: "f'(x)=25^x ln 25 → f(x)=25^x + C, 점 (0,1) 로 C=0 → 1/f(n) 은 공비 1/25 인 등비급수"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0896.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 5 와 지수 2x, 지나는 점 (0,1). 제약: 로그 계수가 밑의 로그와 일치해야 적분이 한 항으로 떨어지고, 공비가 1 보다 작아야 급수가 수렴."
    creative: "(1) 지나는 점을 (0,2) 로 옮기면 상수항이 남아 등비가 깨짐(★3) (2) 급수 대신 f(2) 값을 묻기(★2) (3) 기울기를 3^(2x) ln 3 으로 두어 계수 보정을 요구(★3)."
```

```yaml
- id: RPM-CALC2-0897
  page: 127
  vendor_label: "유형 03 지수함수의 부정적분; 밑이 $e$가 아닌 경우"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    ㈎ (f+g)'=3^x · ㈏ (f-g)'=3^(-x) · ㈐ f(0)=0, g(0)=1/ln3 을 만족시키는 f,g 에 대하여 f(1)+g(-1).
  category: "합·차 함수로 통합해 적분 → 두 상수 결정 → f,g 분리 → 값 대입"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f 와 g 를 따로 보지 않고 f+g, f-g 를 각각 하나의 함수로 묶으면 조건 ㈎㈏가 그대로 그 함수의 도함수가 됨"
    - step: 4
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "구하는 값이 f(1)+g(-1) 이라 합·차 표현에서 대칭적으로 조합해 계산량을 줄임"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "합·차 도함수 조건으로 두 함수 분리하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f 와 g 를 각각 구하려 들면 조건이 모자라 보이지만, 합과 차를 한 덩어리로 보면 각각 한 번의 적분으로 끝난다.
    ㈐의 초기값이 두 적분상수를 모두 0 으로 만들어 주고, 그다음은 연립으로 f,g 를 갈라 대입한다.
    3^(-x) 적분의 음부호가 유일한 함정. 상중 ★3 출발·통찰 2(CON d2·SYM d1) → ★3.
  tier: star_3
  mechanism_primary: "(f+g)'·(f-g)' 각각 적분 → f(0),g(0) 으로 두 상수 → f,g 분리 → f(1)+g(-1)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{3}{\ln 3}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0897.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 3 과 초기값 f(0)=0, g(0)=1/ln3, 묻는 점 1 과 -1. 제약: 초기값을 1/ln3 의 배수로 맞춰야 적분상수가 0 이 되고 답이 깔끔하게 정리됨."
    creative: "(1) 묻는 값을 f(1)+g(1) 로 두어 대칭 조합을 없애기(★3) (2) 조건을 곱 (fg)' 로 바꾸면 분리가 되지 않음(설계 주의) (3) 밑을 e 로 두어 ln 3 이 사라지게 하면 ★2~3."
```

## 표본 판정 요약 (39문)

- ★ 분포: ★1 24 · ★2 13 · ★3 2 · ★4 0 · ★5 0
- 통찰형 2(0890 · 0897) · 절차형 37 · premium 0 · insights 를 1개 이상 단 문항 11
- 통찰 유형 분포: I-EQV 5(0878·0880·0888·0891·0895) · I-RT 2(0893·0894) · I-PD 1(0890) · I-XU 1(0896) · I-CON 1(0897) · I-SYM 1(0897)
- type_hint 상위 5: 「기본 함수의 정적분 계산」 6 · 「삼각함수의 기본 부정적분」 6 · 「x^n 꼴의 부정적분(유리수·음의 지수)」 4 · 「정적분의 성질(구간 결합·상하한 교환)」 4 · 「부정적분으로 정의된 함수와 적분상수 결정」 3
- 대상층: 하위권 24 · 중하위권 13 · 중상위권 2
- 그림: 0문(이 범위에는 figure 가 없음) · 답 출처: 답지 25 · 답지(쪽 렌더) 14
- 범위 성격: 39문 중 25문이 교과서 구역이라 ★1 이 몰려 있다. 변별은 뒤쪽 유형 구역에서 적분상수 결정(0884~0888) → 관계식 미분(0889) → 일반항·망원곱(0890) · 합차 분리(0897) 순으로 한 층씩 올라간다.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다. 이 범위에는 2단 이상 어긋난 문항이 없어 모두 1단 이내의 경계 사례다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-CALC2-0870 | tan^2 → sec^2-1 항등식 착안을 I-EQV 로 셀지 여부. 교과서 08-3 은 이 항등식 자체가 학습 목표라 통찰 0 으로 두었으나, 같은 골조가 유형 구역에 나오면 통찰 1개로 올릴 후보 | ★1 / ★2 |
| RPM-CALC2-0889 | 관계식 미분 → 적분 → 역대입 3층이라 골조만 보면 ★3. 벤더 level '중'을 존중해 ★2 로 둠 | ★2 / ★3 |
| RPM-CALC2-0895 | 세제곱 합 인수분해 + 계수 역산으로 M_total 9(이 범위 최고). 대표문제라는 벤더 신호를 존중해 ★2 로 둠 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: ① 「정적분의 성질(구간 결합·상하한 교환)」 — 0877~0880 넷이 모두 여기 속하고, 그중 0878·0880 은 상하한 교환이 부호 반전이라는 점 하나로 ★ 가 갈린다. 단순 계산 유형과 분리하는 편이 낫다. ② 「부정적분으로 정의된 함수와 적분상수 결정」 — 0884·0885·0887 이 같은 골조이고 뒤 단원에서도 계속 재등장한다. ③ 「지수함수 분수식의 약분 후 적분」 — 0891(밑 e)과 0895(밑 e 아님)가 인수분해·약분이라는 같은 골조인데 벤더는 밑으로 유형을 갈라 놓았다. 카탈로그에서는 밑이 아니라 **약분 골조**로 묶는 편이 변형 생산에 유리하다.
- **통합해도 될 유형**: 교과서 08-1~08-3 의 「x^n·지수·삼각 기본 부정적분」 12문(0859~0870)은 공식표 한 줄 적용이라는 점에서 동일하다. 「기본 부정적분 공식 적용」 하나로 묶고 하위 태그(다항·지수·삼각)로 구분하면 충분하다. 08-4 의 0871~0876 여섯 문항도 같은 이유로 「기본 정적분 계산」 하나면 된다.
- **반복된 type_hint**: 「기본 함수의 정적분 계산」 6 · 「삼각함수의 기본 부정적분」 6 · 「x^n 꼴의 부정적분」 4 · 「정적분의 성질」 4 · 「부정적분으로 정의된 함수와 적분상수 결정」 3. 이 다섯이 이 범위의 뼈대이며 나머지 16문은 대부분 1회성 골조(역함수·관계식 미분·망원곱·급수·합차 분리)라 카탈로그에서는 상위 유형의 변형 슬롯으로 두는 편이 낫다.
