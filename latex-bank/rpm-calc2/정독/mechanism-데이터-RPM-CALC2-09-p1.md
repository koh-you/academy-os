---
name: mechanism-데이터-RPM-CALC2-09-p1
description: RPM 미적분Ⅱ 09 치환적분법과 부분적분법(1/4 · 교과서 09-1~09-5 + 유형 01~04) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 미적분Ⅱ (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-calc2
  section: 09 치환적분법과 부분적분법
  unit_code: CALC2-09
  part: "1/4"
  extract_range: "135~137쪽 · 0942~0973"
  total_problems: 32
  unit_total: 129
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-calc2/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-calc2/items/<id>.tex
  image_source: latex-bank/rpm-calc2/figures/ (crops.json)
---

# RPM 미적분Ⅱ · 09 치환적분법과 부분적분법 (1/4) 정독 데이터 (v1.0)

이 파일은 09 단원(129문) 중 첫 1/4 — 135~137쪽 · 0942~0973 · 32문 — 을 다룬다. 구역은 교과서 09-1 치환적분법(5) · 09-2 분수함수의 부정적분(2) · 09-3 치환적분법을 이용한 정적분(5) · 09-4 부분적분법(2) · 09-5 부분적분법을 이용한 정적분(2) 의 교과서 16문과, 유형 01 치환적분법; 다항함수(4) · 유형 02 무리함수(4) · 유형 03 지수함수(4) · 유형 04 로그함수(4) 의 유형 16문이다. 그림이 있는 문항은 없다.

RPM 의 벤더 난이도 신호는 구역이 곧 층이다. 교과서 구역은 난이도 표시가 없는 기본 문제(★1 출발), 유형 구역은 첫 문항이 「대표문제」 태그(난이도 표시 없음 → ★2 출발)이고 나머지는 「중」「상중」 난이도(★2·★3 출발)와 「서술형」 태그가 붙는다. 이 범위에는 「유형 UP」「시험에 꼭 나오는 문제」「실력 Up」 구역이 없어 ★ 폭이 좁다(★1~3). 유형 구역은 대부분 「치환 → 부정적분 + 조건 f(a)=b 로 적분상수 → 함숫값」 골조이고, 마지막 0973 만 「F=xf−x ln x 양변 미분」 골조로 통찰이 있다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 사슬) · `insights[]`(유형 코드·depth·근거) · `variation_notes.numeric`(바꿔도 되는 수와 제약) · `variation_notes.creative`(골조를 유지한 설정 변경과 ★ 변동 지점)를 채웠다. 답은 전사본 answer 를 그대로 옮겼다.

## 문항 데이터

### 교과서 09-1 치환적분법

```yaml
- id: RPM-CALC2-0942
  page: 135
  vendor_label: "교과서 09-1 치환적분법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    (3x+1)^4 의 부정적분.
  category: "일차식 치환 t=3x+1 → 거듭제곱 적분 → 되돌리기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "치환적분법 기본: (ax+b)^n 꼴"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    t=3x+1, dt=3dx 로 (1/3)∫t^4 dt = t^5/15. 치환 한 번·되돌리기 한 번이 전부. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "t=3x+1 (dt=3dx) → (1/3)∫t^4 dt → (3x+1)^5/15 + C"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{1}{15}(3x+1)^5+C$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0942.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차식의 계수·상수(2x−1, 5x+3)와 지수 n(3~7)을 바꿀 수 있음. 제약: 답의 계수가 1/(a(n+1)) 로 정리되므로 a(n+1) 이 지나치게 크지 않게. 지수를 음수(−2)나 분수(1/2)로 바꾸면 분수함수·무리함수 쪽(유형 02) 골조로 옮겨감."
    creative: "(1) 전개하지 말고 구하라는 지시로 치환의 이점을 체감시키기(★1 유지) (2) f'(x)=(3x+1)^4, f(0)=k 로 적분상수 결정을 붙이면 ★2(유형 01 골조) (3) (ax+b)^n 의 부정적분 계수·지수 비교로 a·n 을 결정하면 ★1~2(0959 골조)."
```

```yaml
- id: RPM-CALC2-0943
  page: 135
  vendor_label: "교과서 09-1 치환적분법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    sin²x·cos x 의 부정적분.
  category: "t=sin x 치환(cos x dx = dt) → t² 적분 → 되돌리기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "치환적분법 기본: sin^n x·cos x 꼴(삼각함수 거듭제곱 × 도함수)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    cos x 가 sin x 의 도함수임을 보고 t=sin x 로 ∫t² dt = t³/3. 도함수 인식 한 단계. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "t=sin x (dt=cos x dx) → ∫t^2 dt → sin^3 x/3 + C"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{1}{3}\sin^3 x+C$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0943.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 n(2~4)과 삼각함수 짝(cos^n x·sin x → 부호 −, tan^n x·sec^2 x)을 바꿀 수 있음. 제약: 피적분함수에 치환 변수의 도함수가 인수로 정확히 남아야 함(sin^2 x cos^2 x 처럼 남지 않으면 반각 공식이 필요해 골조가 바뀜)."
    creative: "(1) cos^3 x·sin x 로 바꿔 dt 의 부호 처리를 추가(★1) (2) 정적분 [0, π/2] 로 바꾸면 구간 변환이 붙는 교과서 09-3 골조(★1) (3) sin x cos x 처럼 세 풀이(t=sin x / t=cos x / 2배각)가 모두 되는 꼴로 바꾸고 결과의 적분상수 차이를 비교하게 하면 I-SC 맛이 생겨 ★2."
```

```yaml
- id: RPM-CALC2-0944
  page: 135
  vendor_label: "교과서 09-1 치환적분법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    (ln x)/x 의 부정적분.
  category: "t=ln x 치환(dx/x = dt) → t 적분 → 되돌리기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "치환적분법 기본: (ln x)^n / x 꼴"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    1/x 가 ln x 의 도함수이므로 t=ln x 로 ∫t dt = t²/2. 한 단계. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "t=ln x (dt=dx/x) → ∫t dt → (ln x)^2/2 + C"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{1}{2}(\ln x)^2+C$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0944.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "(ln x)^n / x 의 n(1~3), 또는 (ln x + a)^n / x 로 상수 이동. 제약: 분모가 x 그대로여야 dt=dx/x 가 맞음. log x(상용로그)로 바꾸면 밑 변환 1/ln 10 이 붙어 0972 골조가 됨."
    creative: "(1) 1/(x ln x) 로 바꿔 ln|ln x| 가 나오게 하면 f'/f 꼴 인식이 필요(★1~2) (2) f'(x)=(ln x)/x, f(1)=a 로 적분상수 결정(★2 · 유형 04 골조) (3) 정적분 [1, e] 로 바꾸면 교과서 09-3 골조(★1)."
```

```yaml
- id: RPM-CALC2-0945
  page: 135
  vendor_label: "교과서 09-1 치환적분법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    (6x−3)/(x²−x+1) 의 부정적분.
  category: "분자 = 3·(분모)' 인식 → f'/f 꼴 → 3 ln|f|"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "f'(x)/f(x) 꼴의 부정적분(로그)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (x²−x+1)' = 2x−1 이고 분자가 그 3배이므로 3∫f'/f dx = 3 ln|x²−x+1|. 분모가 항상 양수라 절댓값이 빠지는 표기 확인 한 번. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "6x−3 = 3(x^2−x+1)' → 3∫f'/f dx → 3 ln(x^2−x+1) + C"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$3\ln(x^2-x+1)+C$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0945.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모 이차식(x^2+2x+3, x^2+4)과 분자 배수(2·5)를 바꿀 수 있음. 제약: 분자가 분모 도함수의 상수배여야 함. 분모가 실근을 가지면(x^2−3x+2) 절댓값이 필요하고 부분분수(0948)와 경계가 흐려짐."
    creative: "(1) 분자를 (분모)'+상수 로 두어 f'/f 와 나머지 조각으로 쪼개게 하면 골조가 두 갈래(★2, 나머지 조각은 교육과정 안에서 적분되는 꼴로 제한) (2) 정적분 [0, 1] 로 바꿔 ln 값 계산(★1) (3) 분모를 e^x+1, sin x+2 로 바꿔도 같은 골조(★1)."
```

```yaml
- id: RPM-CALC2-0946
  page: 135
  vendor_label: "교과서 09-1 치환적분법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    (1−sin x)/(x+cos x) 의 부정적분.
  category: "분자 = (분모)' 인식 → f'/f 꼴 → ln|f|"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "f'(x)/f(x) 꼴의 부정적분(로그)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (x+cos x)' = 1−sin x 가 분자와 같으므로 바로 ln|x+cos x|. 도함수 인식 한 단계. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "(x+cos x)' = 1−sin x → ∫f'/f dx → ln|x+cos x| + C"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\ln|x+\cos x|+C$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0946.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모를 x−sin x(분자 1−cos x), e^x+x(분자 e^x+1), x^2+ln x 등으로. 제약: 분자가 정확히 분모의 도함수(또는 상수배)여야 하고, 분모 부호가 일정하지 않으면 절댓값을 남겨야 함."
    creative: "(1) 분자·분모를 삼각항등식으로 정리해야 f'/f 가 드러나게 숨기면 I-EQV d1 ★2 (2) 정적분 [0, π/2] 로 바꾸면 ln(π/2) − ln 1 계산(★1) (3) (1−sin x)/(x+cos x)^2 로 바꿔 거듭제곱 치환(−1/(x+cos x))으로 변주(★1)."
```

### 교과서 09-2 분수함수의 부정적분

```yaml
- id: RPM-CALC2-0947
  page: 135
  vendor_label: "교과서 09-2 분수함수의 부정적분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    가분수 꼴 유리함수 (2x²+x−1)/(x+2) 의 부정적분 과정에서 몫 ㈎ 와 그 적분 ㈏ 를 채우기(빈칸 과정 안내).
  category: "다항식 나눗셈(몫·나머지) → 몫 적분 + 나머지/(x+2) 는 로그"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "분수함수의 부정적분: 분자 차수 ≥ 분모 차수 → 다항식 나눗셈"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    2x²+x−1 = (x+2)(2x−3)+5 로 나누면 ㈎=2x−3, 이를 적분해 ㈏=x²−3x. 과정이 빈칸으로 안내되어 나눗셈 한 번이 전부. 교과서 구역·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "2x^2+x−1 = (x+2)(2x−3)+5 → ∫(2x−3) dx + 5∫dx/(x+2) → x^2−3x + 5 ln|x+2| + C"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '㈎ $2x-3$ ㈏ $x^2-3x$'
  answer_source: "해설(답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0947.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자 이차식·분모 일차식을 바꿀 수 있음((3x^2−x+2)/(x−1) 등). 제약: 나머지가 0 이 아니어야 로그 항이 남고, 몫의 계수가 정수가 되게 분모의 최고차 계수는 1 로."
    creative: "(1) 빈칸 없이 부정적분만 묻기 → 나눗셈 착안을 스스로 해야 해 ★1~2 (2) 분모를 인수분해되는 이차식으로 바꾸면 나눗셈 뒤 부분분수(0948 골조)까지 이어져 ★2 (3) 정적분 [0, 1] 로 바꿔 5 ln(3/2) 계산(★1~2)."
```

```yaml
- id: RPM-CALC2-0948
  page: 135
  vendor_label: "교과서 09-2 분수함수의 부정적분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    1/(x²−3x+2) 의 부정적분 과정에서 부분분수의 분모 ㈎, 그 적분 ㈏, 로그를 합친 ㈐ 를 채우기(빈칸 과정 안내).
  category: "분모 인수분해 → 부분분수 분해 → 로그 차 → 로그 성질로 합치기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "분수함수의 부정적분: 부분분수 분해"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x²−3x+2=(x−1)(x−2) 이고 1/(x−2)−1/(x−1) 이 원식과 같음을 확인하면 ㈎=x−2, 적분 ㈏=ln|x−2|, 로그 차를 합쳐 ㈐=(x−2)/(x−1). 빈칸 안내 덕에 분해 형태를 추측할 필요가 없음. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "(x−1)(x−2) 인수분해 → 1/(x−2) − 1/(x−1) → ln|x−2| − ln|x−1| → ln|(x−2)/(x−1)| + C"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '㈎ $x-2$ ㈏ $\ln|x-2|$ ㈐ $\dfrac{x-2}{x-1}$'
  answer_source: "해설(답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0948.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모를 서로 다른 두 실근을 갖는 이차식(x^2−x−2, x^2+x−6)으로. 제약: 두 근의 차가 1 이 아니면 분해에 계수 1/(β−α) 가 붙으므로 빈칸 형태를 그에 맞게 조정."
    creative: "(1) 빈칸 없이 부정적분만 묻기 → 분해 형태를 스스로 세워야 해 ★2 (2) 분자를 일차식(2x−1)로 바꾸면 A/(x−1)+B/(x−2) 미정계수 결정이 붙어 ★2 (3) 정적분 [3, 4] 로 바꿔 ln 값 계산(★2)."
```

### 교과서 09-3 치환적분법을 이용한 정적분

```yaml
- id: RPM-CALC2-0949
  page: 135
  vendor_label: "교과서 09-3 치환적분법을 이용한 정적분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    정적분 ∫₀² x(x²−1)² dx 의 값.
  category: "t=x²−1 치환 → 적분구간 변환(−1→3) → t² 적분"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "치환적분법을 이용한 정적분: 다항함수"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    t=x²−1, dt=2x dx, 구간 0→2 가 −1→3. (1/2)[t³/3] 을 −1, 3 에서 계산해 (1/2)(9+1/3)=14/3. 구간 변환 한 번과 분수 정리. 교과서 구역·통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "t=x^2−1 (dt=2x dx, 0→2 ⇒ −1→3) → (1/2)∫_{−1}^{3} t^2 dt → 14/3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{14}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0949.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상한(2→3)·지수(2→3)·괄호 안 상수(−1→+1)를 바꿀 수 있음. 제약: 변환된 구간의 끝값이 정수가 되게 하고 답이 분수로 깔끔히 정리되게. 전개해도 풀리는 크기이므로 지수를 3 이상으로 하면 치환의 이점이 분명해짐."
    creative: "(1) 하한을 −2 로 두면 변환된 구간이 3→3 이 되어 값 0 — 홀함수·대칭 구간(I-SYM d1)으로 ★2 (2) 상한을 a 로 두고 값 14/3 을 만족하는 a 를 묻기(역추적 성격 ★2) (3) 전개 풀이와 치환 풀이를 나란히 비교하게 하는 학습용(★1)."
```

```yaml
- id: RPM-CALC2-0950
  page: 135
  vendor_label: "교과서 09-3 치환적분법을 이용한 정적분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    정적분 ∫₀⁶ √(x+2) dx 의 값.
  category: "t=x+2 치환 → 구간 2→8 → t^{1/2} 적분 → 무리수 정리"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "치환적분법을 이용한 정적분: 무리함수"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    t=x+2 로 ∫₂⁸ √t dt = (2/3)[t^{3/2}] = (2/3)(16√2−2√2) = 28√2/3. 8√8=16√2 로 정리하는 것이 계산의 전부. 교과서 구역·통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "t=x+2 (0→6 ⇒ 2→8) → (2/3)[t^{3/2}]_2^8 → (2/3)(16√2 − 2√2) → 28√2/3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{28\sqrt{2}}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0950.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "안쪽 상수(x+2 → x+1, 2x+1)·구간을 바꿀 수 있음. 제약: 끝값 t 가 완전제곱수이거나 8·18 처럼 √ 정리가 쉬운 수여야 답이 깔끔함. 2x+1 로 바꾸면 계수 1/2 가 붙음."
    creative: "(1) 피적분함수를 x√(x+2) 로 바꾸면 x=t−2 되쓰기가 필요해 0964 골조 ★2 (2) 1/√(x+2) 로 바꿔 지수 −1/2 처리(★1) (3) 곡선 y=√(x+2) 와 x축 사이 넓이 문맥으로 바꾸면 그래프 해석이 붙지만 골조는 같음(★1~2)."
```

```yaml
- id: RPM-CALC2-0951
  page: 135
  vendor_label: "교과서 09-3 치환적분법을 이용한 정적분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    정적분 ∫₁³ x/(3x²+1) dx 의 값.
  category: "분자 = (분모)'/6 → f'/f 꼴 → (1/6)[ln f] → 로그 차 정리"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "치환적분법을 이용한 정적분: f'/f 꼴(로그)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (3x²+1)'=6x 이므로 (1/6)∫f'/f = (1/6)[ln(3x²+1)]₁³ = (1/6)(ln 28−ln 4) = (1/6)ln 7. 로그 차 정리 한 번. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "x dx = d(3x^2+1)/6 → (1/6)[ln(3x^2+1)]_1^3 → (1/6) ln 7"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{1}{6}\ln 7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0951.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모 계수(3→2)·구간(1→3)을 바꿀 수 있음. 제약: ln(상한값/하한값) 이 정리되게 두 끝값의 비가 간단한 정수(7·3)여야 함. 분자는 분모 도함수의 상수배로 유지(일차식 x+1 로 바꾸면 남는 조각이 교육과정 밖)."
    creative: "(1) 분모를 e^{2x}+1, 분자를 e^{2x} 로 바꾸면 유형 03 골조(★1~2) (2) 값이 (1/6)ln k 가 되는 상한 a 를 역으로 묻기(★2) (3) 분모를 x^2+1, 분자를 x 로 두고 [0, 1] 로 하면 (1/2)ln 2 — 같은 골조의 가장 흔한 형태(★1)."
```

```yaml
- id: RPM-CALC2-0952
  page: 135
  vendor_label: "교과서 09-3 치환적분법을 이용한 정적분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    정적분 ∫₀³ x²e^{x³} dx 의 값.
  category: "x³=t 치환 → (1/3)∫e^t dt → 지수 정적분"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "치환적분법을 이용한 정적분: 지수함수 e^{g(x)}"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (x³)'=3x² 이므로 x²dx = d(x³)/3, (1/3)[e^{x³}]₀³ = (e²⁷−1)/3. 치환 한 번·대입 한 번. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "x^2 dx = d(x^3)/3 → (1/3)[e^{x^3}]_0^3 → (e^{27}-1)/3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{e^{27}-1}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0952.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수의 차수(x³ → x²·x⁴)와 상한을 바꿀 수 있음. 제약: 앞의 x 차수가 안쪽 도함수의 상수배여야 치환이 닫힘(x^{n-1}과 x^n 짝). 하한은 0 으로 두어야 e⁰=1 로 −1 이 깔끔하게 남음."
    creative: "(1) 부정적분으로 바꾸고 f(0) 조건을 주면 유형 03 골조(★2) (2) 지수를 −x³ 로 두면 부호 함정 추가(★1~2) (3) 상한을 미지수 a 로 두고 정적분 값을 준 뒤 a 를 묻기(역방향 ★2)."
```

```yaml
- id: RPM-CALC2-0953
  page: 135
  vendor_label: "교과서 09-3 치환적분법을 이용한 정적분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    정적분 ∫_{π/2}^{π} cos³x sin x dx 의 값.
  category: "cos x=t 치환(sin x dx = −dt) → −[t⁴/4] → 끝값 0, −1 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "치환적분법을 이용한 정적분: 삼각함수 (sin/cos 짝)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    cos x=t 로 두면 sin x dx = −dt 라 −∫t³dt = −[cos⁴x/4]. 끝값 cos π=−1, cos(π/2)=0 을 넣어 −1/4. 부호 한 번만 조심하면 되는 교과서 기본·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "cos x = t, sin x dx = -dt → -[cos^4 x / 4]_{pi/2}^{pi} → -1/4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-\dfrac{1}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0953.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "cos 의 거듭제곱 차수(3 → 2, 4)와 적분 구간을 바꿀 수 있음. 제약: 끝값의 cos 이 0, ±1 이 되는 각(0, π/2, π)을 써야 답이 유리수. 차수를 짝수로 바꾸면 끝값 부호가 사라져 난이도가 내려감."
    creative: "(1) sin³x cos x 로 뒤집으면 부호 함정이 사라져 ★1 (2) ∫cos³x dx 로 바꾸면 cos²=1−sin² 분리가 필요해 ★2 (3) 구간을 [0, π] 로 하면 대칭으로 0 — I-SYM d1 이 생겨 ★2."
```

### 교과서 09-4 부분적분법

```yaml
- id: RPM-CALC2-0954
  page: 135
  vendor_label: "교과서 09-4 부분적분법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    부정적분 ∫ xe^x dx.
  category: "부분적분 u=x, v'=e^x → xe^x − ∫e^x dx"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부분적분법: (다항식)×(지수함수)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    미분하면 간단해지는 x 를 u 로 잡는 표준 선택. xe^x − ∫e^x dx = xe^x − e^x + C. 부분적분 1회·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "u=x, v'=e^x → xe^x - ∫ e^x dx → xe^x - e^x + C"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$xe^x-e^x+C$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0954.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "다항 인수(x → 2x+1)와 지수 밑(e^x → e^{2x}·e^{-x})을 바꿀 수 있음. 제약: 지수의 계수를 바꾸면 1/계수 가 두 번 붙으므로 답의 계수를 다시 정리해야 함."
    creative: "(1) x²e^x 로 올리면 부분적분 2회(★2) (2) 정적분 [0,1] 로 바꾸면 값이 1 하나로 떨어짐(★1) (3) ∫xe^{-x}dx 로 두면 부호가 두 번 바뀌는 함정(★1~2)."
```

```yaml
- id: RPM-CALC2-0955
  page: 135
  vendor_label: "교과서 09-4 부분적분법"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    부정적분 ∫ x sin x dx.
  category: "부분적분 u=x, v'=sin x → −x cos x + ∫cos x dx"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부분적분법: (다항식)×(삼각함수)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    v=−cos x 에서 부호가 한 번, 남은 ∫cos x dx 에서 다시 부호가 정리돼 −x cos x + sin x + C. 부분적분 1회·부호 함정 하나·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "u=x, v'=sin x → -x cos x + ∫ cos x dx → -x cos x + sin x + C"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-x\cos x+\sin x+C$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0955.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "sin ↔ cos 교체와 각의 계수(x → 2x)를 바꿀 수 있음. 제약: 각의 계수를 k 로 두면 1/k 가 두 항에 다르게 붙으므로 답 형태를 다시 확인해야 함."
    creative: "(1) x cos x 로 바꾸면 부호가 하나 줄어 ★1 (2) x²sin x 는 부분적분 2회(★2) (3) 정적분 [0, π] 로 두면 π 가 남는 값(★1)."
```

### 교과서 09-5 부분적분법을 이용한 정적분

```yaml
- id: RPM-CALC2-0956
  page: 135
  vendor_label: "교과서 09-5 부분적분법을 이용한 정적분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    정적분 ∫₁^e ln x dx 의 값.
  category: "ln x = 1×ln x 로 보기 → u=ln x, v'=1 → [x ln x − x]"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부분적분법을 이용한 정적분: 로그함수 (1을 곱해 보기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    피적분함수를 1×ln x 로 보고 v'=1 을 잡는 교과서 표준 형태. [x ln x − x]₁^e = (e−e)−(0−1) = 1. 이 착안은 교과서에서 공식처럼 제시되므로 통찰로 세지 않음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "ln x = 1 x ln x → [x ln x - x]_1^e → (e-e)-(0-1) = 1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$1$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0956.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간을 [1, e²]·[1, e³] 로 바꿀 수 있음. 제약: 하한을 1 로 두어야 −(0−1) 이 깔끔하게 정수로 남음. 상한은 e 의 정수 거듭제곱."
    creative: "(1) ∫ x ln x dx 로 두면 u=ln x, v'=x 선택이 필요해 ★2 (2) ∫₁^e (ln x)² dx 는 부분적분 2회(★2~3) (3) 값이 1 이 되는 상한을 역으로 묻기(★2)."
```

```yaml
- id: RPM-CALC2-0957
  page: 135
  vendor_label: "교과서 09-5 부분적분법을 이용한 정적분"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    정적분 ∫₀¹ xe^{2x} dx 의 값.
  category: "부분적분 u=x, v'=e^{2x} → [xe^{2x}/2] − (1/2)∫e^{2x}dx"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부분적분법을 이용한 정적분: (다항식)×(지수함수)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    v=e^{2x}/2 에서 1/2 가, 남은 적분에서 다시 1/4 가 붙어 e²/2 − (e²−1)/4 = (e²+1)/4. 계수 1/2 를 두 번 관리하는 계산이 전부이고 통찰은 없음. 교과서 구역 출발점 ★1 유지(M_total 6 이라 내리지도 않음).
  tier: star_1
  mechanism_primary: "u=x, v'=e^{2x} → [x e^{2x}/2]_0^1 - (1/2)∫_0^1 e^{2x} dx → e^2/2 - (e^2-1)/4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{1}{4}e^2+\dfrac{1}{4}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0957.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 계수 2 와 상한을 바꿀 수 있음. 제약: 하한을 0 으로 두어야 상수항이 한 개만 남아 (ae²+b)/4 꼴로 정리됨. 계수를 k 로 두면 1/k 와 1/k² 가 함께 나옴."
    creative: "(1) ∫₀¹ xe^{-2x}dx 로 두면 부호 관리가 추가(★1~2) (2) ∫₀¹(2x+1)e^{2x}dx 로 항을 늘리기(★2) (3) 값이 (ae²+b)/4 일 때 a+b 를 묻는 계수 비교형(★2)."
```

### 유형 01 치환적분법; 다항함수

```yaml
- id: RPM-CALC2-0958
  page: 136
  vendor_label: "유형 01 치환적분법; 다항함수"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    f(x)=∫(x+1)(x²+2x−1)³dx 이고 f(0)=1 일 때 f(1) 의 값.
  category: "x²+2x−1=t 치환((x+1)dx=dt/2) → t⁴/8 → f(0) 으로 적분상수 → f(1)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "치환적분(다항): 부정적분 + 한 점 조건으로 적분상수 결정 후 함숫값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (x²+2x−1)'=2(x+1) 이라 (1/2)∫t³dt = t⁴/8. f(0)=1/8+C=1 → C=7/8, f(1)=2+7/8=23/8. 이 유형 16문의 기본 골조(치환 → C 결정 → 함숫값)를 그대로 보여 주는 대표문제. 통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "(x+1)dx = d(x^2+2x-1)/2 → f(x)=(x^2+2x-1)^4/8 + C → f(0)=1 로 C=7/8 → f(1)=23/8"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{23}{8}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0958.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 3, 안쪽 이차식의 상수항(−1), 조건 f(0)=1, 묻는 점 x=1 을 바꿀 수 있음. 제약: 바깥 일차식이 안쪽 이차식 도함수의 상수배여야 치환이 닫힘(x²+bx+c 면 바깥은 2x+b 의 배수). 두 점에서 t 값이 ±1 이면 답이 깔끔."
    creative: "(1) f(1) 대신 f(x)를 x−1 로 나눈 나머지를 물으면 0960 골조(I-RT d1 ★2) (2) f(0)·f(1) 을 주고 지수를 역으로 묻기(★3) (3) 정적분 ∫₀¹ 로 바꾸면 적분상수 단계가 사라져 ★1."
```

```yaml
- id: RPM-CALC2-0959
  page: 136
  vendor_label: "유형 01 치환적분법; 다항함수"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    ∫(2x−5)⁵dx = (1/a)(2x−5)^b + C 일 때 상수 a, b 에 대한 ab 의 값.
  category: "(ax+b)^n 적분 → 계수 1/(2·6) 비교 → a=12, b=6"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "치환적분(다항): (ax+b)^n 의 부정적분과 계수 비교"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    2x−5=t 의 dx=dt/2 에서 나오는 1/2 와 ∫t⁵dt 의 1/6 을 합쳐 1/12. a=12, b=6 → ab=72. 1/2 를 빠뜨리면 a=6 오답이 되는 계수 함정이 핵심. 통찰 없음·매개변수 2개·M_total 6 → 벤더 「중」 ★2.
  tier: star_2
  mechanism_primary: "∫(2x-5)^5 dx = (2x-5)^6/12 + C → a=12, b=6 → ab=72"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$72$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0959.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차식의 계수(2)와 지수(5)를 바꿀 수 있음. 제약: a = 계수×(지수+1) 이 정수로 떨어져야 하고, 지수를 짝수로 두면 b 가 홀수가 되어 ab 가 달라짐."
    creative: "(1) ab 대신 a+b 를 묻기(★2 유지) (2) 지수를 −2 로 두어 음의 지수를 처리하게 하기(★2) (3) (2x−5)^5 를 √(2x−5) 로 바꾸면 유형 02 의 계수 비교 골조(★2)."
```

```yaml
- id: RPM-CALC2-0960
  page: 136
  vendor_label: "유형 01 치환적분법; 다항함수"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=∫x²(x³+2)⁵dx 이고 f(0)=4 일 때 f(x)를 x+1 로 나눈 나머지. 5지선다.
  category: "x³+2=t 치환 → t⁶/18 → f(0) 으로 적분상수 → 나머지정리로 f(−1)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 3
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "일차식으로 나눈 나머지를 나머지정리로 함숫값 f(−1) 로 전환해야 적분 결과를 쓸 수 있음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "치환적분(다항): 적분상수 결정 후 나머지정리로 함숫값 묻기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (1/3)∫t⁵dt = t⁶/18 이라 f(x)=(x³+2)⁶/18+C, f(0)=32/9+C=4 → C=4/9. 마지막에 나머지를 f(−1) 로 옮기는 전환이 한 번 필요(RT d1)하고 (−1)³+2=1 이라 1/18+8/18=1/2. 전환이 d1 한 개뿐이라 벤더 「중」 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "f(x)=(x^3+2)^6/18 + C → f(0)=4 로 C=4/9 → 나머지 = f(-1) = 1/2"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0960.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "안쪽 x³+2 의 상수항, 지수 5, 나누는 일차식(x+1)을 바꿀 수 있음. 제약: 나누는 점에서 안쪽 값이 1 이나 −1 이면 거듭제곱이 깔끔하고, f(0) 에서 나오는 2⁶/18 처럼 약분되는 수를 골라야 C 가 간단."
    creative: "(1) 나머지 대신 f(1) 을 직접 물으면 통찰이 사라져 ★2 절차형 (2) x²−1 로 나눈 나머지를 물으면 일차식 나머지를 두 함숫값으로 연립해야 해 ★3 (3) f(0) 대신 나머지 두 개를 주고 안쪽 상수항을 역으로 묻기(★3)."
```

```yaml
- id: RPM-CALC2-0961
  page: 136
  vendor_label: "유형 01 치환적분법; 다항함수"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    f(x)=∫(ax−2)⁸dx 의 최고차항의 계수가 3⁶ 일 때 양수 a 의 값.
  category: "(ax−2)⁹/(9a) → 최고차항 계수 a⁸/9 → a⁸=3⁸ → 양수 조건"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "치환적분(다항): (ax+b)^n 적분식의 최고차항 계수 조건으로 미지수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    적분에서 1/a 가 붙어 f(x)=(ax−2)⁹/(9a)+C 이므로 최고차항 계수는 a⁹ 이 아니라 a⁸/9. 3⁶=729 에서 a⁸=3⁸ → a=3(양수 조건으로 −3 기각). 지수 정리 두 단계·매개변수·통찰 없음·M_total 7 → 벤더 「중」·서술형 ★2.
  tier: star_2
  mechanism_primary: "f(x) = (ax-2)^9/(9a) + C → 최고차항 계수 a^9/(9a) = a^8/9 = 3^6 → a=3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0961.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 8, 상수항 −2, 목표 계수 3⁶ 을 바꿀 수 있음. 제약: 지수를 n 으로 두면 최고차항 계수가 a^{n-1}/(n+1) 이므로 목표값을 (n+1)×(정수)^{n-1} 꼴로 맞춰야 a 가 정수."
    creative: "(1) 최고차항 대신 상수항 조건을 주면 적분상수와 얽혀 ★3 (2) a 를 실수로 허용해 지수가 짝수일 때 두 값을 따지게 하면 I-MI d1 ★3 (3) 지수도 미지수 n 으로 두고 a·n 을 모두 묻기(★3)."
```

### 유형 02 치환적분법; 무리함수

```yaml
- id: RPM-CALC2-0962
  page: 136
  vendor_label: "유형 02 치환적분법; 무리함수"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    ∫2x/√(4−3x²) dx = a√(4−3x²) + C 일 때 상수 a 의 값.
  category: "4−3x²=t 치환(2x dx = −dt/3) → −(2/3)√t → 계수 비교"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "치환적분(무리): 근호 안 도함수가 분자일 때 a√(g(x)) 꼴과 계수 비교"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (4−3x²)'=−6x 이므로 2x dx = −dt/3, ∫t^{-1/2}dt=2√t 와 합쳐 −(2/3)√(4−3x²). 부호를 놓치면 +2/3 오답(T-부호)이 되는 것이 이 대표문제의 변별점. 통찰 없음·매개변수·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "4-3x^2 = t, 2x dx = -dt/3 → (-1/3)(2√t) → a = -2/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-\dfrac{2}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0962.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안 이차식의 계수(4, −3)와 분자 2x 의 계수를 바꿀 수 있음. 제약: 분자가 근호 안 도함수의 상수배여야 치환이 닫히고, 그 비가 유리수여야 a 가 분수로 떨어짐."
    creative: "(1) 분모를 (4−3x²)^{3/2} 로 바꾸면 지수 −3/2 처리로 a 가 달라짐(★2) (2) 정적분 [0,1] 로 바꿔 값을 직접 묻기(★2) (3) a=−2/3 을 주고 근호 안 x² 의 계수를 역으로 묻기(★2~3)."
```

```yaml
- id: RPM-CALC2-0963
  page: 136
  vendor_label: "유형 02 치환적분법; 무리함수"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    부정적분 ∫(2x−1)∛(x²−x+1) dx 를 구하기. 5지선다.
  category: "x²−x+1=t 치환((2x−1)dx=dt) → ∫t^{1/3}dt=(3/4)t^{4/3} → 거듭제곱근 표기로 환원"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "치환적분(무리): 거듭제곱근을 유리수 지수로 바꿔 적분하고 다시 근호로 환원"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (x²−x+1)'=2x−1 이 그대로 분자라 치환이 바로 닫히고 ∫t^{1/3}dt=(3/4)t^{4/3}=(3/4)∛((x²−x+1)⁴). 선택지가 계수(1/4 vs 3/4)와 근호 안 차수(²vs⁴)로 갈리므로 지수 환원이 변별점. 통찰 없음·M_total 5 로 −1 후보이나 표기 환원 단계가 있어 벤더 「중」 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "(2x-1)dx = d(x^2-x+1) → ∫ t^{1/3} dt = (3/4) t^{4/3} → (3/4)∛((x^2-x+1)^4)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0963.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "안쪽 이차식과 근호 차수(3 → 2, 4)를 바꿀 수 있음. 제약: 분자가 안쪽 도함수 그대로여야 하고, 계수 n/(n+1) 이 선택지에서 오답 계수와 구분되게 골라야 함."
    creative: "(1) 근호를 √ 로 바꾸면 (2/3)t^{3/2}(★1~2) (2) 정적분 [0,1] 로 바꿔 값 계산으로 돌리기(★2) (3) 답을 a∛((x²−x+1)^b)+C 로 두고 ab 를 묻는 계수 비교형(0959 골조 ★2)."
```

```yaml
- id: RPM-CALC2-0964
  page: 136
  vendor_label: "유형 02 치환적분법; 무리함수"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=∫x/√(x+2) dx 이고 f(4)=0 일 때 f(2) 의 값.
  category: "x+2=t 치환 후 남은 x 를 t−2 로 되쓰기 → (2/3)t^{3/2}−4t^{1/2} → 적분상수"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "치환 뒤 분자에 남은 x 를 t−2 로 되쓰어야 t^{1/2}−2t^{-1/2} 의 적분 가능한 꼴이 됨"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "치환적분(무리): 분자에 남은 x 를 치환식으로 되쓰는 유형"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분자의 x 를 그대로 두면 적분이 막히고, x=t−2 로 되쓰면 t^{1/2}−2t^{-1/2} 두 항. 정리하면 f(x)=(2/3)√(x+2)(x−4)+C 이고 f(4)=0 에서 C=0, f(2)=(2/3)(2)(−2)=−8/3. 되쓰기 통찰 1개(EQV d1)·M_total 6 → 벤더 「중」 ★2.
  tier: star_2
  mechanism_primary: "x+2=t, x=t-2 → ∫(t^{1/2} - 2t^{-1/2})dt → (2/3)√(x+2)(x-4) + C → f(4)=0 로 C=0 → f(2)=-8/3"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$-\dfrac{8}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0964.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안 상수(+2), 조건점 f(4)=0, 묻는 점을 바꿀 수 있음. 제약: 조건점에서 (x−4) 처럼 인수가 0 이 되면 C=0 으로 깔끔하고, 두 점 모두 x+2 가 완전제곱수여야 √ 가 유리수."
    creative: "(1) 분자를 x² 로 올리면 되쓰기 항이 하나 늘어 ★3 (2) √(x+2)=t 로 치환하게 문제를 짜면 x=t²−2 로 같은 통찰(★2) (3) 정적분 [2,4] 로 바꾸면 적분상수 단계가 빠져 ★2."
```

```yaml
- id: RPM-CALC2-0965
  page: 136
  vendor_label: "유형 02 치환적분법; 무리함수"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    곡선 y=f(x) 위 임의의 점에서 접선의 기울기가 (x+2)√(x+1) 이고 점 (0, 1) 을 지날 때 f(−1) 의 값.
  category: "기울기=f' → x+1=t, x+2=t+1 되쓰기 → (2/5)t^{5/2}+(2/3)t^{3/2} → 적분상수"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "치환 뒤 남은 x+2 를 t+1 로 되쓰어 (t+1)√t = t^{3/2}+t^{1/2} 의 두 항으로 분리"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "치환적분(무리): 접선의 기울기 조건에서 곡선의 함숫값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    접선의 기울기를 f'(x) 로 읽는 것은 표준 독해라 통찰로 세지 않고, x+2=t+1 되쓰기만 통찰 1개(EQV d1). f(x)=(2/5)(x+1)^{5/2}+(2/3)(x+1)^{3/2}+C, f(0)=16/15+C=1 → C=−1/15. 묻는 점 x=−1 은 t=0 이라 f(−1)=C. 벤더 「중」·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "f'(x)=(x+2)√(x+1) → t=x+1, x+2=t+1 → (2/5)t^{5/2}+(2/3)t^{3/2}+C → f(0)=1 로 C=-1/15 → f(-1)=C=-1/15"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$-\dfrac{1}{15}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0965.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기울기 식의 두 상수(+2, +1)와 지나는 점을 바꿀 수 있음. 제약: 묻는 점을 근호 안이 0 이 되는 곳으로 두면 답이 C 자체라 계산이 짧고, 조건점에서 x+1 이 1·4 같은 제곱수여야 유리수."
    creative: "(1) f(−1) 대신 f(3) 을 물으면 분수 계산만 늘고 골조는 동일(★2) (2) 기울기를 (x+2)/√(x+1) 로 바꾸면 0964 골조(★2) (3) 접선의 기울기 대신 f' 의 그래프를 제시하면 그래프 해석 I-RT 가 추가돼 ★3."
```

### 유형 03 치환적분법; 지수함수

```yaml
- id: RPM-CALC2-0966
  page: 137
  vendor_label: "유형 03 치환적분법; 지수함수"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    f(x)=∫e^x/√(e^x+3) dx 이고 f(0)=1 일 때 f(ln 6) 의 값. 5지선다.
  category: "e^x+3=t 치환(e^x dx=dt) → 2√t → f(0) 으로 적분상수 → e^{ln6}=6 대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "치환적분(지수): e^x 이 안쪽 도함수인 꼴 + 한 점 조건으로 적분상수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분자가 (e^x+3)' 그대로라 f(x)=2√(e^x+3)+C. f(0)=2·2+C=1 → C=−3, f(ln6)=2·3−3=3. e^{ln6}=6 환원 한 단계가 추가될 뿐 통찰은 없음. M_total 5 이나 유형 대표문제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "e^x dx = d(e^x+3) → f(x)=2√(e^x+3)+C → f(0)=1 로 C=-3 → f(ln 6)=6-3=3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0966.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수 3, 조건점 0, 묻는 점 ln 6 을 바꿀 수 있음. 제약: 두 점 모두 e^x+3 이 완전제곱수(4, 9)가 되도록 골라야 √ 가 유리수. 묻는 점은 ln(정수) 꼴."
    creative: "(1) 분모를 (e^x+3)² 로 바꾸면 −1/(e^x+3) 꼴(★2) (2) f(ln6)=3 을 주고 f(0) 을 역으로 묻기(★2) (3) e^x 대신 2^x 로 두면 ln 2 계수가 붙어 0967 골조(★2)."
```

```yaml
- id: RPM-CALC2-0967
  page: 137
  vendor_label: "유형 03 치환적분법; 지수함수"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    ∫x·4^{x²+3}dx = 4^{x²+3}/(ln a) + C 일 때 상수 a 의 값.
  category: "x²+3=t 치환(x dx=dt/2) → 4^t/(2 ln 4) → 2 ln 4 = ln 16 으로 합치기"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "분모 2 ln 4 를 ln 4² = ln 16 으로 합쳐야 주어진 1/(ln a) 꼴과 같아짐"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "치환적분(지수): 밑이 e 가 아닌 a^{g(x)} 적분과 로그 계수 정리"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    치환의 1/2 와 ∫4^t dt 의 1/ln 4 가 곱해져 분모가 2 ln 4. 이를 ln 16 으로 합치는 로그 성질 한 번이 답을 결정(EQV d1). 계수만 남기고 보면 절차형이고 M_total 7 → 벤더 「중」 ★2.
  tier: star_2
  mechanism_primary: "x dx = d(x^2+3)/2 → 4^{x^2+3}/(2 ln 4) → 2 ln 4 = ln 16 → a=16"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$16$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0967.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 4, 지수 x²+3, 분자 x 의 계수를 바꿀 수 있음. 제약: (치환 계수)×ln(밑) 이 ln(정수) 로 합쳐져야 a 가 정수(2 ln 4 → 16, 2 ln 3 → 9, 3 ln 2 → 8)."
    creative: "(1) 밑을 e 로 두면 ln a 가 사라져 ★1 (2) 정적분 [0,1] 값을 묻기(★2) (3) a=16 을 주고 지수의 x 계수를 역으로 묻기(★3)."
```

```yaml
- id: RPM-CALC2-0968
  page: 137
  vendor_label: "유형 03 치환적분법; 지수함수"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f'(x)=4e^x(e^x+1)³ 이고 f(0)=16 일 때 f(ln 2) 의 값.
  category: "e^x+1=t 치환 → 4∫t³dt=t⁴ → f(0) 으로 C=0 → e^{ln2}=2 대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "치환적분(지수): 도함수가 주어진 합성 지수식 + 한 점 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    계수 4 가 ∫4t³dt=t⁴ 로 딱 떨어져 f(x)=(e^x+1)⁴+C, f(0)=2⁴+C=16 → C=0. f(ln2)=3⁴=81. 계수가 맞아떨어져 계산이 짧고 통찰 없음(M_total 5)이나, 적분상수 결정 단계가 있어 벤더 「중」 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "e^x dx = d(e^x+1) → f(x)=(e^x+1)^4 + C → f(0)=16 로 C=0 → f(ln 2)=3^4=81"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$81$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0968.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 4, 지수 3, 조건값 16, 묻는 점 ln 2 를 바꿀 수 있음. 제약: 계수 = 지수+1 로 두면 C=0 이 되어 깔끔하고, 묻는 점은 e^x 가 정수가 되는 ln k 로."
    creative: "(1) f(0)=17 로 바꿔 C≠0 을 만들기(★2 유지) (2) f(ln2)=81 을 주고 f(0) 을 묻기(★2) (3) f'(x)=4e^{2x}(e^x+1)³ 로 바꾸면 e^{2x}=e^x·e^x 분해와 되쓰기가 필요해 ★3."
```

```yaml
- id: RPM-CALC2-0969
  page: 137
  vendor_label: "유형 03 치환적분법; 지수함수"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    미분가능한 f 가 ㈎ lim_{h→0} (f(x+h)−f(x−h))/h = 8xe^{x²}, ㈏ lim_{x→0} f(x) = e+2 를 만족시킬 때 f(−1) 의 값. 5지선다.
  category: "대칭차분 극한 = 2f' → f'=4xe^{x²} → 치환 적분 → 연속성으로 f(0) 결정"
  M: {s: 2, k: 2, a: 3, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "㈎ 를 두 몫의 합으로 쪼개 좌변이 f'(x) 가 아니라 2f'(x) 임을 끌어내야 f' 가 확정됨"
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "미분가능 → 연속이므로 ㈏ 의 극한값을 함숫값 f(0) 으로 옮겨 적분상수를 결정"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "치환적분(지수): 대칭차분 극한으로 도함수를 얻어 적분하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ㈎ 를 (f(x+h)−f(x))/h + (f(x)−f(x−h))/h 로 쪼개면 2f'(x)=8xe^{x²} → f'=4xe^{x²}, 치환하면 f=2e^{x²}+C. ㈏ 는 연속성으로 f(0)=e+2 → C=e, f(−1)=2e+e=3e. 조건 두 개를 모두 동치 변환해야 시작되므로 통찰 2개(EQV d2·d1) → 벤더 「중」 ★2 에서 +1 하여 ★3.
  tier: star_3
  mechanism_primary: "대칭차분 → 2f'(x)=8xe^{x^2} → f(x)=2e^{x^2}+C → 연속성으로 f(0)=e+2 → C=e → f(-1)=3e"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0969.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "㈎ 우변 계수 8, 지수 x², ㈏ 의 값 e+2 를 바꿀 수 있음. 제약: 좌변이 2f' 이므로 우변 계수는 짝수라야 f' 계수가 정수. 묻는 점은 x² 가 1 이 되는 ±1 이 깔끔."
    creative: "(1) ㈎ 를 (f(x+2h)−f(x−h))/h 로 바꾸면 3f' 가 되어 계수 착안이 더 세짐(★3 유지~★4) (2) ㈏ 를 f(1)=… 로 주면 연속성 통찰이 사라져 ★2 (3) 우변을 8xe^{x²}+2 로 두면 항이 늘 뿐 골조는 동일(★3)."
```

### 유형 04 치환적분법; 로그함수

```yaml
- id: RPM-CALC2-0970
  page: 137
  vendor_label: "유형 04 치환적분법; 로그함수"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    f'(x)=(ln x)²/x 이고 f(e)=4/3 일 때 f(k)=10 을 만족시키는 실수 k 의 값. 5지선다.
  category: "ln x=t 치환(dx/x=dt) → (ln x)³/3 → C 결정 → (ln k)³=27 역풀이"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "치환적분(로그): (ln x)^n/x 꼴 적분 + 조건으로 미지수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (ln x)²·(1/x) 는 t²dt 그대로라 f(x)=(ln x)³/3+C, f(e)=1/3+C=4/3 → C=1. f(k)=10 → (ln k)³=27 → ln k=3 → k=e³. 마지막이 역풀이지만 세제곱근 한 번이라 표준 절차. 통찰 없음·M_total 7 → 대표문제 출발점 ★2.
  tier: star_2
  mechanism_primary: "ln x = t, dx/x = dt → f(x)=(ln x)^3/3 + C → f(e)=4/3 로 C=1 → (ln k)^3=27 → k=e^3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0970.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 2, 조건값 4/3, 목표값 10 을 바꿀 수 있음. 제약: (ln k)³ 이 완전세제곱수여야 k 가 e 의 정수 거듭제곱으로 떨어지고, 조건점을 x=e 로 두면 ln e=1 이라 C 가 바로 나옴."
    creative: "(1) k 대신 f(e³) 을 물으면 역풀이가 사라져 ★2 절차형 (2) 지수를 −1 로 바꿔 1/(x ln x) 로 두면 ln|ln x| 가 나와 ★3 (3) 조건을 f(1)=1 로 주면 C 가 즉시 결정돼 ★2."
```

```yaml
- id: RPM-CALC2-0971
  page: 137
  vendor_label: "유형 04 치환적분법; 로그함수"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    f(x)=∫1/(x√(ln x+7)) dx 이고 f(e²)=4 일 때 f(1/e³) 의 값.
  category: "ln x+7=t 치환(dx/x=dt) → 2√t → C 결정 → ln(1/e³)=−3 대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "치환적분(로그): 1/(x·g(ln x)) 꼴 + 적분상수 결정 후 함숫값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    dx/x=dt 라 ∫t^{-1/2}dt=2√(ln x+7). f(e²)=2·3+C=4 → C=−2. ln(1/e³)=−3 이므로 √4=2 → f(1/e³)=2. 진수가 1 보다 작아 ln 이 음수가 되는 지점이 유일한 함정. 통찰 없음·M_total 6 → 벤더 「중」·서술형 ★2.
  tier: star_2
  mechanism_primary: "ln x + 7 = t, dx/x = dt → f(x)=2√(ln x + 7) + C → f(e^2)=4 로 C=-2 → f(1/e^3)=4-2=2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0971.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수 7 과 두 점(e², 1/e³)을 바꿀 수 있음. 제약: 두 점 모두 ln x+7 이 완전제곱수(9, 4)여야 √ 가 유리수이고, 진수는 e 의 정수 거듭제곱으로."
    creative: "(1) 분모를 x(ln x+7) 로 바꾸면 ln|ln x+7| 꼴(★2) (2) f(1/e³)=2 를 주고 상수 7 을 역으로 묻기(★3) (3) 정적분 [1, e²] 로 바꾸면 적분상수 단계가 빠져 ★2."
```

```yaml
- id: RPM-CALC2-0972
  page: 137
  vendor_label: "유형 04 치환적분법; 로그함수"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    F'(x)=log x/x 이고 F(1)=0 일 때 F(10) 의 값.
  category: "상용로그를 자연로그로 밑변환 → (ln x)²/(2 ln 10) → F(1)=0 으로 C=0"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "log x 를 ln x/ln 10 으로 밑변환해야 1/x 와 짝이 되는 ln x = t 치환이 보임"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "치환적분(로그): 상용로그를 자연로그로 밑변환한 뒤 (ln x)/x 적분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    log x 를 그대로 두면 적분 공식이 없고, ln x/ln 10 으로 바꿔야 (1/ln10)∫(ln x)(1/x)dx = (ln x)²/(2 ln 10). F(1)=0 → C=0, F(10)=(ln10)²/(2 ln10)=ln10/2. 밑변환 통찰 1개(EQV d1)·M_total 6 → 벤더 「중」 ★2.
  tier: star_2
  mechanism_primary: "log x = ln x / ln 10 → F(x) = (ln x)^2/(2 ln 10) + C → F(1)=0 로 C=0 → F(10) = (ln 10)/2"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{\ln 10}{2}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0972.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "로그의 밑 10 과 대입점을 바꿀 수 있음(밑 2·대입점 8 등). 제약: 답이 ln(밑) 의 유리수배가 되려면 대입점이 밑의 거듭제곱이어야 하고, F(1)=0 을 유지해야 C=0."
    creative: "(1) F(10)=ln10/2 를 주고 F(1) 을 역으로 묻기(★2) (2) log x 대신 (log x)² 로 두면 (ln10)² 이 남아 정리 부담이 커짐(★3) (3) 정적분 ∫₁^{10} 으로 바꾸면 적분상수 단계가 사라져 ★2."
```

```yaml
- id: RPM-CALC2-0973
  page: 137
  vendor_label: "유형 04 치환적분법; 로그함수"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x>0 에서 미분가능한 f 의 한 부정적분 F 가 F(x)=xf(x)−x ln x 를 만족하고 f(e)=2 일 때 f(1) 의 값.
  category: "양변 미분 → F'=f 대입으로 f 소거 → xf'(x)=ln x+1 → 적분 → f(e) 로 C"
  M: {s: 2, k: 2, a: 3, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "주어진 항등식을 그대로 쓰지 않고 양변을 미분해 F'=f 를 대입하면 f 가 소거되고 f' 의 식만 남는다는 착안"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "부정적분 관계식 F(x)=xf(x)+g(x) 를 미분해 f' 를 얻어 적분하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    양변을 미분하면 f=f+xf'−ln x−1 이라 f 가 소거되고 f'(x)=(ln x+1)/x. 이를 ln x=t 치환으로 적분하면 f(x)=(ln x)²/2+ln x+C, f(e)=1/2+1+C=2 → C=1/2, f(1)=C=1/2. 소거 착안이 없으면 진입 자체가 막히므로 통찰 d2 한 개·M_total 8 → 벤더 「상중」 ★3.
  tier: star_3
  mechanism_primary: "양변 미분 → f = f + x f' - ln x - 1 → f'(x)=(ln x + 1)/x → f(x)=(ln x)^2/2 + ln x + C → f(e)=2 로 C=1/2 → f(1)=1/2"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{1}{2}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0973.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "뒤 항 −x ln x 의 계수, 조건 f(e)=2, 묻는 점 1 을 바꿀 수 있음. 제약: 미분 뒤 x 로 나눠 떨어져 f' 가 적분 가능한 꼴이어야 하고, 묻는 점을 1 로 두면 ln 1=0 이라 답이 C 자체."
    creative: "(1) 뒤 항을 −x² 로 바꾸면 f'=2 꼴이라 ★2 로 내려감 (2) f(1) 대신 F(e) 를 물으면 원식에 되대입하는 단계가 늘어 ★3~4 (3) 조건을 ∫₁^e f(x)dx 값으로 주면 부분적분이 한 겹 더 붙어 ★4."
```

## 표본 판정 요약 (32문)

- ★ 분포: ★1 16 · ★2 14 · ★3 2 · ★4 0 · ★5 0
- 통찰형 2(0969 · 0973) · 절차형 30 · premium 0
- 통찰 라벨: 총 8개(I-EQV 5 · I-RT 2 · 그 외 1) · depth 3 없음 · 통찰 2개인 문항은 0969 하나
- 구역 분포: 교과서 16문(모두 ★1) · 유형 01~04 16문(★2 14 · ★3 2)
- type_hint 상위 5(골조 기준으로 묶음 · 문자열 자체는 32개 모두 다름)
  1. 「치환 부정적분 + 한 점 조건으로 적분상수 → 함숫값」 8 (0958 0960 0964 0965 0966 0968 0970 0971)
  2. 「치환 결과와 주어진 꼴의 계수 비교(a·b 구하기)」 5 (0959 0961 0962 0963 0967)
  3. 「치환적분법을 이용한 정적분(다항·무리·로그·지수·삼각)」 5 (0949~0953)
  4. 「(합성함수)'가 곱해진 기본 치환 · f'/f 꼴」 5 (0942~0946)
  5. 「부분적분법(부정적분 2 · 정적분 2)」 4 (0954~0957)
  - 그 외: 분수함수의 부정적분 2(0947 0948) · 부정적분 관계식 미분 1(0973) · 대칭차분 극한 1(0969)
- 그림: 0문(이 범위에는 figure 가 없음)
- 답 대조: 32문 모두 전사본 answer 와 일치(다시 푼 값이 다른 문항 없음)

## 분류 이슈 목록

벤더 신호와 M·I 판정이 **2단 이상** 어긋난 문항은 없다(0건). 라벨 `star` 는 억지로 맞추지 않았고, 아래는 1단 안에서 판단이 갈릴 수 있어 남겨 두는 경계 판정 메모다.

| id | 경계 판정 | 후보 ★ |
|---|---|---|
| RPM-CALC2-0963 | 벤더 「중」·유형 구역이라 ★2 출발이나 통찰 0·M_total 5 로 v3.8 의 −1 후보. 거듭제곱근 지수 환원이 선택지 변별의 핵심이라 ★2 유지 | ★2 / ★1 |
| RPM-CALC2-0966 | 대표문제(★2 출발)이나 분자가 안쪽 도함수 그대로라 통찰 0·M_total 5. 적분상수 결정 단계를 인정해 ★2 유지 | ★2 / ★1 |
| RPM-CALC2-0968 | 벤더 「중」이나 계수 4 가 딱 떨어져 C=0, 통찰 0·M_total 5. 같은 이유로 ★2 유지 | ★2 / ★1 |
| RPM-CALC2-0969 | 벤더 「중」이나 조건 두 개를 모두 동치 변환해야 진입 가능(통찰 2개) → +1 하여 ★3 라벨. 벤더 신호보다 1단 높음 | ★3 / ★2 |
| RPM-CALC2-0965 | 「접선의 기울기 = f'」 를 통찰로 셀지 여부가 갈림. 표준 독해로 보아 통찰에서 제외하고 되쓰기만 EQV d1 로 셈 | ★2 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: (1) 「치환 부정적분 + 한 점 조건 → 함숫값」 — 이 범위 8문으로 가장 많고, 피적분함수의 종류(다항·무리·지수·로그)는 겉모습만 다를 뿐 골조가 같다. 카탈로그에서는 함수 종류가 아니라 **조건 처리 방식**(한 점 조건 / 계수 비교 / 나머지정리 / 역풀이)으로 갈라야 변별이 산다. (2) 「치환 뒤 남은 x 를 되쓰는 무리함수형」(0964 0965) — 다른 치환 문항과 통찰(EQV d1)이 분명히 다르므로 독립 유형. (3) 「부정적분 관계식 양변 미분」(0973) — 09 단원 뒷부분(2/4~4/4)에 같은 골조가 더 나올 가능성이 높아 미리 자리를 잡아 둘 것.
- **통합해도 될 유형**: RPM 의 유형 01~04(다항·무리·지수·로그)는 치환 대상만 다르고 판정값(M·통찰·★)이 사실상 동일하다. 카탈로그에서는 하나의 base 유형 + 함수 종류 태그로 묶는 편이 낫다. 교과서 09-1·09-3 도 부정적분/정적분 차이뿐이라 같은 유형의 두 형태로 본다.
- **base ★ 제안**: 위 통합 유형의 base ★ 는 2(교과서 형태는 1). ★3 이상은 0969·0973 처럼 **조건을 동치 변환해야 진입이 열리는** 문항에만 준다. 이 범위에는 ★4·★5 후보가 없다(유형 UP·시험에 꼭 나오는 문제·실력 Up 구역이 2/4 이후에 나옴).
