---
name: mechanism-데이터-RPM-CALC2-09-p3
description: RPM 미적분Ⅱ 09 치환적분법과 부분적분법(3/4 · 유형 13~20) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 미적분Ⅱ (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-calc2
  section: 09 치환적분법과 부분적분법
  unit_code: CALC2-09
  part: "3/4"
  extract_range: "142~145쪽 · 1004~1034"
  total_problems: 31
  unit_total: 129
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-calc2/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-calc2/items/<id>.tex
  image_source: latex-bank/rpm-calc2/figures/ (crops.json)
---

# RPM 미적분Ⅱ · 09 치환적분법과 부분적분법 (3/4) 정독 데이터 (v1.0)

이 파일은 RPM 미적분Ⅱ 09 치환적분법과 부분적분법 단원의 셋째 범위(142~145쪽 · 1004~1034 · 31문항)를 다룬다. 31문 전부 「유형」 구역이며 여덟 유형이 이어진다 — 「유형 13 부분적분법」 4문(1004~1007) · 「유형 14 부분적분법을 이용한 정적분」 4문(1008~1011) · 「유형 15 정적분으로 정의된 함수; 적분 구간이 상수인 경우」 4문(1012~1015) · 「유형 16 정적분으로 정의된 함수; 적분 구간에 변수가 있는 경우」 4문(1016~1019) · 「유형 17 정적분으로 정의된 함수: 적분 구간과 피적분함수에 변수가 있는 경우」 4문(1020~1023) · 「유형 18 정적분으로 정의된 함수의 극대·극소」 4문(1024~1027) · 「유형 19 정적분으로 정의된 함수의 최대·최소」 3문(1028~1030) · 「유형 20 정적분으로 정의된 함수의 극한」 4문(1031~1034). 즉 앞 2문항군(부분적분)을 빼면 나머지 23문이 모두 「정적분으로 정의된 함수」 한 줄기이며, 미분해서 피적분함수를 되찾는 동일 골조가 다섯 유형에 걸쳐 반복된다. RPM 은 구역이 곧 난이도 층이므로 출발점은 유형 구역 기본 ★2 이고, 각 유형의 첫 문항(태그 「대표문제」 8문 · level 없음)이 그 유형의 대표다. 난이도 표시는 중 19문 · 상중 4문(1007·1011·1019·1030) · 중하·하 없음이고, 「서술형」 태그 2문(1017·1034) · 기출 태그 없음 · 그림 없음.

출발점에서 M_total·통찰로만 ±1 조정했다. 미분 한 번과 대입 한 번으로 끝나는 문항(통찰 0·M_total ≤ 5)은 −1 을 적용해 ★1 로 두었고(5문 — 1008·1013·1016·1029·1031, 이 중 셋이 대표문제다), 나머지 21문은 ★2 를 유지했다. 상중 4문 중 3문(1007·1019·1030)은 ★3 출발을 그대로 두었고, 「중」 표시인 1010 은 적분 구간을 부호 뒤집어 이어 붙인 뒤 우·기함수 대칭까지 써야 해 통찰 2개로 +1 하여 ★3 으로 올렸다. 통찰형은 17문이며 대부분 I-EQV depth 1 이다 — 이 단원의 핵심 동치 변환이 「조건식을 미분해 피적분함수를 되찾는다」 하나로 수렴하기 때문이다. 그 밖에 1010 의 I-SYM(d2) · 1011 의 I-SC(d1)+I-CON(d2) · 1025 의 I-XU(d1 · 극솟값을 등비급수로 넘김) · 1027·1034 의 I-BW(d1 · 결과값에서 상수 역추적) · 1033 의 I-EQV(d2) 가 있다. ★4·★5 는 없다(「유형 UP」·「실력 Up」 구역이 이 범위에 없다). 판정이 갈린 1011·1033 두 문항은 [분류 이슈] 로 기록만 했다. 답은 전사본 값을 그대로 옮겼고 골조를 잡는 과정에서 조건과 답이 어긋나 보이는 문항은 없었다.

주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄 · 조건 → 변환 → 답 화살표 사슬) · `insights[]`(유형 코드+depth+근거 · 절차형은 빈 배열) · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 창의 변형과 ★ 변동 지점)를 채웠다. 유형 카탈로그가 없는 과목이므로 `type_id`·`base_star` 는 null 이고 `type_hint` 로 유형명을 제안했다. 이 범위에서는 유형 15~20 여섯 유형이 「적분 구간·피적분함수 어디에 변수가 있는가」로만 갈라지므로 카탈로그를 세울 때 한 뿌리 유형 + 변수 위치 변형축으로 묶을 후보다(파일 끝 메모).

## 문항 데이터

### 유형 13 부분적분법

```yaml
- id: RPM-CALC2-1004
  page: 142
  vendor_label: "유형 13 부분적분법"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    f(x)=∫x cos 2x dx 이고 f(0)=5/4 일 때 f(π/4) 의 값.
  category: "부분적분(다항×삼각) → 적분상수 결정 → 함숫값"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부분적분법; (다항식)×(삼각함수)의 부정적분과 적분상수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    u=x, dv=cos 2x dx 로 부분적분하면 (x/2)sin 2x+(1/4)cos 2x+C. f(0)=5/4 로 C 를 잡고 π/4 대입. 통찰 없이 세 단계지만 1/2·1/4 계수 관리가 Mₖ 2 라 M_total 6 → 유형 대표 출발 ★2 유지. 함정은 v=(1/2)sin 2x 의 1/2 하나.
  tier: star_2
  mechanism_primary: "u=x·dv=cos 2x dx 부분적분 → (x/2)sin 2x+(1/4)cos 2x+C → f(0)=5/4 로 C=1 → f(π/4)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{\pi}{8}+1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1004.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼각함수의 각 계수(cos 2x → sin 3x·cos(x/2))·초기조건 f(0) 값·평가점(π/4 → π/3·π/6)을 바꿀 수 있음. 제약: 평가점에서 sin·cos 값이 유리수나 √3/2 로 떨어져야 하고, 다항 인자는 1차여야 부분적분 한 번으로 끝난다."
    creative: "(1) 다항 인자를 x² 로 올려 부분적분 두 번(★2 유지·Mₖ만 상승) (2) x e^x 나 x ln x 로 바꿔 같은 골조를 지수·로그로 옮기기(★2) (3) 초기조건 대신 f 의 극값이나 f(π/4)−f(0) 를 주면 EQV d1 이 붙어 ★2~3."
```

```yaml
- id: RPM-CALC2-1005
  page: 142
  vendor_label: "유형 13 부분적분법"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    다항함수 f 에 대하여 ∫(x−2)e^x dx = f(x)e^x+C 가 성립할 때 f(8) 의 값.
  category: "다항×지수 부분적분 → 원시함수 꼴 비교 → 함숫값"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부분적분법; (다항식)×e^x 의 부정적분과 f(x)e^x 꼴 계수 비교"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ∫(x−2)e^x dx=(x−2)e^x−∫e^x dx=(x−3)e^x+C 로 f(x)=x−3. 양변을 미분해 f'+f=x−2 로 계수를 맞추는 갈래도 같은 분량이라 전략 선택으로 보기 어렵다. 표준 부분적분 한 번·미지 다항함수라 Mₐ 2 → M_total 6, 통찰 0 → 유형 구역 ★2 유지.
  tier: star_2
  mechanism_primary: "(x−2)e^x 부분적분 → (x−3)e^x+C → f(x)=x−3 → f(8)=5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1005.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "다항 인자 (x−2) 의 상수항과 평가점 f(8) 을 자유롭게 바꿀 수 있음(f 가 1차라 답은 항상 정수). 제약: e^x 대신 e^{ax} 로 바꾸면 f 의 계수가 1/a 배가 되어 f 가 다항함수라는 진술과 맞도록 a=1 을 유지하거나 f(x)e^{ax} 꼴로 함께 바꿔야 함."
    creative: "(1) f(x)e^x 대신 f(x)e^{2x} 꼴로 주어 f 의 일차계수까지 비교하게 하기(★2) (2) 다항 인자를 2차로 올려 f 가 2차가 되게 하기(★2·Mₛ 상승) (3) ∫(x−2)e^x dx=f(x)e^x+C 를 미분해 f'+f=x−2 만 주고 f 를 구하게 하면 미분방정식 꼴이 되어 EQV d1 · ★3."
```

```yaml
- id: RPM-CALC2-1006
  page: 142
  vendor_label: "유형 13 부분적분법"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x>0 에서 미분가능한 f 가 ㈎ lim_{h→0}{f(x)−f(x−2h)}/h=ln x, ㈏ f(1)=1 을 만족시킬 때 f(x) 의 상수항.
  category: "극한식 → 도함수 번역 → ln x 부분적분 → 적분상수"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "{f(x)−f(x−2h)}/h 를 2f'(x) 로 번역(−2h 만큼 떨어진 두 점이라 계수 2)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "미분계수 정의 꼴 극한으로 주어진 도함수의 부정적분(ln x 부분적분)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    좌변을 2f'(x) 로 읽어 f'(x)=(1/2)ln x, 여기에 ∫ln x dx=x ln x−x 를 써서 f 를 복원하고 f(1)=1 로 상수항을 결정한다. 극한을 도함수로 옮기는 동치 변환 1개(EQV d1)·M_total 6 → ★2. 함정은 −2h 에서 오는 계수 2 하나뿐이다.
  tier: star_2
  mechanism_primary: "극한 → 2f'(x)=ln x → f'(x)=(1/2)ln x → 부분적분으로 f(x)=(1/2)(x ln x−x)+C → f(1)=1 로 C"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{3}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1006.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "극한식의 증분(−2h → 3h·−h)·우변 함수(ln x → x ln x·ln x²)·조건점 f(1)=1 을 바꿀 수 있음. 제약: 증분 계수가 바뀌면 f' 의 상수배가 그대로 따라가고, 조건점은 ln 이 정의되는 x>0 안이어야 하며 x=1 이라야 상수항이 바로 읽힌다."
    creative: "(1) 극한 꼴을 {f(x+h)−f(x−h)}/h 로 바꿔 계수 2 의 출처를 다르게(★2 유지) (2) 상수항 대신 f(e) 를 묻기(★2) (3) 조건 ㈏ 를 f 의 최솟값이 0 이라는 식으로 주면 극값 판정이 한 겹 붙어 EQV 2개 · ★3."
```

```yaml
- id: RPM-CALC2-1007
  page: 142
  vendor_label: "유형 13 부분적분법"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x>0 에서 미분가능한 f 의 한 부정적분 F 가 F(x)=x f(x)−x² sin x 이고 F(π)=π 일 때 f(π/2) 의 값.
  category: "부정적분 관계식 미분 → f 소거 → f' 결정 → 부분적분 복원"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "F'=f 를 써서 양변을 미분하면 f(x) 가 소거되고 f'(x) 만 남는다는 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "F(x)=x f(x)+g(x) 꼴 부정적분 관계식에서 f 를 복원하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    양변 미분에서 f(x)=f(x)+x f'(x)−2x sin x−x² cos x 가 되어 f 가 사라지고 x 로 나누면 f'(x)=2 sin x+x cos x. 이를 되적분(x cos x 부분적분)하고, 원식에 x=π 를 넣어 얻은 f(π)=1 로 적분상수를 잡는다. 미분 소거 통찰 1개(EQV d1)·M_total 7, 벤더 「상중」 → ★3 유지.
  tier: star_3
  mechanism_primary: "F'=f 로 양변 미분 → f 소거 → f'(x)=2 sin x+x cos x → 되적분 x sin x−cos x+C → F(π)=π 로 f(π)=1 → C 결정 → f(π/2)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{\pi}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1007.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "관계식의 덧붙은 항(−x² sin x → x² cos x·x³ ln x)·조건점 F(π)=π·평가점 π/2 를 바꿀 수 있음. 제약: 덧붙은 항을 x 로 나눈 결과가 초등함수로 적분돼야 하고, 조건점은 x>0 안이며 그 점에서 삼각함수 값이 0·±1 이라야 상수 결정이 한 줄로 끝난다."
    creative: "(1) F(x)=x f(x) 만 주고 f 를 구하게 하면 f'=0 으로 단순화(★2) (2) x f(x) 대신 e^x f(x) 로 바꿔 미분 후 f 가 남게 하면 미분방정식이 되어 ★4 (3) F(π) 조건을 빼고 f(π/2) 대신 f(π)−f(0) 을 물으면 상수가 소거돼 ★2."
```

### 유형 14 부분적분법을 이용한 정적분

```yaml
- id: RPM-CALC2-1008
  page: 142
  vendor_label: "유형 14 부분적분법을 이용한 정적분"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    정적분 ∫₀¹ x e^{1−x} dx 의 값. 5지선다.
  category: "다항×지수 정적분 부분적분 → 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정적분에서의 부분적분; (다항식)×(지수함수)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    u=x, dv=e^{1−x}dx 로 v=−e^{1−x}. 대입 한 번과 남은 ∫e^{1−x}dx 한 번이면 끝난다. 통찰 0·M_total 4 → 유형 대표 출발 ★2 에서 −1 → ★1. 함정은 v 의 −부호 하나(T-부호).
  tier: star_1
  mechanism_primary: "u=x·v=−e^{1−x} 부분적분 → [−x e^{1−x}]₀¹+∫₀¹e^{1−x}dx → e−2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1008.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수의 꼴(e^{1−x} → e^{2−x}·e^{x−1})·적분 구간(0~1 → 0~2·1~2)·다항 인자(x → 2x−1)를 바꿀 수 있음. 제약: 선택지가 e 의 일차식으로 정리되도록 구간 끝에서 지수가 0 이나 1 이 되게 잡는 것이 자연스럽다."
    creative: "(1) 다항 인자를 x² 로 올려 부분적분 두 번(★2) (2) x e^{1−x} 대신 x ln x 나 x sec²x 로 바꿔 같은 골조를 다른 함수족으로(★1~2) (3) 적분값을 주고 상한을 역추적하게 하면 BW d1 이 붙어 ★2~3."
```

```yaml
- id: RPM-CALC2-1009
  page: 142
  vendor_label: "유형 14 부분적분법을 이용한 정적분"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    ∫₁³ (ln x)/x² dx = a(b−ln 3) 일 때 유리수 a, b 에 대하여 b/a 의 값.
  category: "로그×유리식 부분적분 → 결과를 a(b−ln 3) 꼴로 맞춰 계수 비교"
  M: {s: 1, k: 2, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정적분에서의 부분적분; (로그함수)×(유리함수)와 계수 비교"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    u=ln x, dv=x^{-2}dx 로 v=−1/x 를 잡으면 [−(ln x)/x]₁³+∫₁³x^{-2}dx 로 분수 계산만 남는다. 결과를 (1/3)(2−ln 3) 꼴로 묶어 a, b 를 읽는 마지막 한 단계가 추가 노동이다. 통찰 0·분수 계산과 미정계수 때문에 M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "u=ln x·v=−1/x 부분적분 → −(ln 3)/3+[−1/x]₁³ → (1/3)(2−ln 3) → a=1/3, b=2 → b/a"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1009.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모의 차수(x² → x³)·적분 구간(1~3 → 1~2·1~e)·목표 꼴 a(b−ln 3) 을 바꿀 수 있음. 제약: 하한을 1 로 두어야 ln 1=0 으로 항이 하나 사라지고, 상한은 결과가 ln 의 일차식으로 정리되는 값이어야 a, b 가 유리수로 결정된다."
    creative: "(1) 목표 꼴을 a ln 3+b 로 바꿔 계수 비교 방향을 돌리기(★2 유지) (2) 상한을 미지수 t 로 두고 적분값이 주어진 값이 되는 t 를 찾게 하면 BW d1 · ★3 (3) (ln x)²/x² 로 올려 부분적분 두 번(★3)."
```

```yaml
- id: RPM-CALC2-1010
  page: 142
  vendor_label: "유형 14 부분적분법을 이용한 정적분"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=x cos x+x sin x 에 대하여 ∫_{−3π}^{π}f−∫_{2π}^{π}f+∫_{2π}^{3π}f 의 값.
  category: "적분 구간 부호 뒤집어 합치기 → 우·기함수 분리 → 부분적분"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "−∫_{2π}^{π}=+∫_{π}^{2π} 로 뒤집어 세 적분을 ∫_{−3π}^{3π} 한 구간으로 이어 붙임"
    - step: 2
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "대칭 구간에서 x cos x 는 기함수라 0, x sin x 는 우함수라 2배로 줄여 계산량을 반으로"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "적분 구간의 성질과 우·기함수 대칭을 이용한 정적분(부분적분 결합)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    세 적분을 그대로 계산하면 부분적분을 여섯 번 해야 하지만, 둘째 항의 위아래를 바꿔 이어 붙이면 ∫_{−3π}^{3π} 한 개가 되고 대칭성으로 x cos x 항이 통째로 사라진다. 남는 2∫₀^{3π}x sin x dx 만 부분적분. 구간 합성(EQV d1)·대칭(SYM d2) 2개 → 「중」 출발 ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: "−∫_{2π}^{π}=∫_{π}^{2π} 로 구간 합성 → ∫_{−3π}^{3π}f → 기함수 x cos x 소거 → 2∫₀^{3π}x sin x dx 부분적분"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$6\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1010.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간의 끝값(−3π·π·2π·3π)과 f 의 두 항 계수를 바꿀 수 있음. 제약: 이어 붙인 최종 구간이 원점 대칭이어야 기함수 항이 사라지고, 상한이 π 의 정수배라야 부분적분 결과가 π 의 유리수배로 떨어진다."
    creative: "(1) 구간을 대칭이 아니게 만들어 대칭 통찰을 막으면 계산만 무거워져 ★2 로 내려감(질 저하 방향) (2) f 를 x²cos x+x sin x 로 바꿔 우·기 판정을 한 번 더 요구(★3 유지) (3) 세 적분 중 하나의 위아래를 이미 바꿔서 제시하면 EQV 가 사라져 ★2."
```

```yaml
- id: RPM-CALC2-1011
  page: 142
  vendor_label: "유형 14 부분적분법을 이용한 정적분"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    a=∫₀^{π/2}e^x cos x dx, b=∫₀^{π/2}e^x sin x dx 일 때 (a+b)²+(a−b)² 의 값. 5지선다.
  category: "두 적분을 합·차로 묶기 → (e^x sin x)'·(e^x cos x)' 인식 → 즉시 계산"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-SC
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "a, b 를 각각 부분적분 두 번으로 구하는 갈래와 a+b·a−b 를 먼저 만드는 갈래 중 뒤쪽을 고름"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "a+b 의 피적분함수 e^x(cos x+sin x) 가 (e^x sin x)' 임을, a−b 는 (e^x cos x)' 임을 묶어서 인식"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "e^x sin x·e^x cos x 정적분을 합·차로 묶어 처리하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    묻는 것이 a, b 자체가 아니라 (a+b)²+(a−b)² 이므로 합과 차만 있으면 된다. e^x(cos x+sin x)=(e^x sin x)', e^x(cos x−sin x)=(e^x cos x)' 를 알아보면 부분적분 없이 대입으로 끝난다. 전략 선택(SC d1)+합·차 묶기(CON d2) 2개지만 답지 표준 풀이라 +1 을 적용하지 않고 「상중」 출발 ★3 유지. [분류 이슈] 통찰 2개·SC 포함이라 ★4 후보로도 읽힘.
  tier: star_3
  mechanism_primary: "a+b=∫(e^x sin x)'=e^{π/2}, a−b=∫(e^x cos x)'=−1 → (a+b)²+(a−b)²=e^π+1"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1011.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "적분 구간의 상한(π/2 → π·2π)과 묻는 식((a+b)²+(a−b)² → a²+b²·ab)을 바꿀 수 있음. 제약: (a+b)²+(a−b)²=2(a²+b²) 이므로 어떤 꼴로 묻든 합·차만으로 환원돼야 하고, 상한은 sin·cos 가 0 이나 ±1 이 되는 각이라야 선택지가 e 의 거듭제곱으로 정리된다."
    creative: "(1) a−b 만 묻기(★2 — 갈래 선택이 사라짐) (2) e^x 를 e^{2x} 로 바꾸면 합·차가 바로 도함수가 되지 않아 계수를 맞춰야 하므로 EQV 가 하나 더 붙어 ★4 (3) a, b 를 미지수로 두고 연립식 a=…−b 꼴을 유도하게 하면 CON d2 유지 ★3."
```

### 유형 15 정적분으로 정의된 함수; 적분 구간이 상수인 경우

```yaml
- id: RPM-CALC2-1012
  page: 143
  vendor_label: "유형 15 정적분으로 정의된 함수; 적분 구간이 상수인 경우"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    f(x)=e^x+∫₀¹ x f(t)dt 를 만족시키는 f 에 대하여 f(1)=ae+b 일 때 a−b 의 값. 5지선다.
  category: "적분변수 t 와 x 구별 → x 를 밖으로 → 상수 k 치환 → 자기참조 방정식"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "적분변수가 t 이므로 x 를 적분 밖으로 빼고 ∫₀¹f(t)dt 를 상수 k 로 놓는 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "f(x)=g(x)+∫ₐᵇ x f(t)dt 꼴에서 상수 치환으로 f 결정하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    피적분함수 안의 x 는 적분변수 t 에 대해 상수이므로 밖으로 나오고 f(x)=e^x+kx 꼴이 된다. 이를 다시 k=∫₀¹(e^t+kt)dt 에 대입해 k 에 대한 일차방정식을 풀면 끝. x 를 밖으로 빼는 동치 변환 1개(EQV d1)·M_total 7 → 유형 대표 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "x 를 적분 밖으로 → f(x)=e^x+kx → k=∫₀¹(e^t+kt)dt 로 k=2e−2 → f(1)=3e−2 → a−b"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1012.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "바깥 함수(e^x → sin x·ln(x+1))·적분 구간(0~1 → 0~2)·피적분함수 앞의 x 계수를 바꿀 수 있음. 제약: k 의 계수가 1 이 되지 않아야(여기서는 ∫₀¹t dt=1/2) 방정식이 풀리고, f(1)=ae+b 처럼 답 꼴을 고정하려면 바깥 함수가 그 상수를 만들어야 한다."
    creative: "(1) x 를 x² 로 바꿔 적분 밖으로 빼는 판단을 한 겹 더(★2 유지) (2) 피적분함수를 (x−t)f(t) 로 바꾸면 유형 17 골조로 넘어가며 ★3 (3) f(1) 대신 ∫₀¹f(t)dt 자체를 묻기(★2 · 계산 한 줄 줄어듦)."
```

```yaml
- id: RPM-CALC2-1013
  page: 143
  vendor_label: "유형 15 정적분으로 정의된 함수; 적분 구간이 상수인 경우"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=cos x+∫₀^π f(t)dt 를 만족시키는 f 에 대하여 f(π/3) 의 값.
  category: "정적분을 상수 k 로 치환 → k 방정식 → 함숫값"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "f(x)=g(x)+∫ₐᵇ f(t)dt 꼴에서 상수 치환으로 f 결정하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    k=∫₀^π f(t)dt 로 놓으면 f(x)=cos x+k, 다시 k=∫₀^π(cos t+k)dt=kπ 로 k(1−π)=0 이므로 k=0. 치환·대입·정리 세 단계뿐이고 통찰 0·M_total 5 → 「중」 출발 ★2 에서 −1 → ★1. 유일한 함정은 π≠1 을 근거로 k=0 이라 단정하는 부분.
  tier: star_1
  mechanism_primary: "∫₀^π f(t)dt=k → f(x)=cos x+k → k=0+kπ → k=0 → f(π/3)=1/2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1013.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "바깥 함수(cos x → sin x·e^x)·적분 구간(0~π → 0~π/2)·평가점(π/3 → π/4)을 바꿀 수 있음. 제약: 구간 길이가 1 이 되면 k 의 계수가 1 이 되어 방정식이 모순이거나 부정이 되므로 피해야 한다."
    creative: "(1) 구간을 0~π/2 로 줄이면 ∫cos=1 이라 k 가 0 이 아니게 되어 계산이 한 줄 늘어남(★2) (2) f(t) 대신 t f(t) 를 적분하게 하면 부분적분이 붙어 ★2 (3) f(π/3) 대신 f 의 최댓값을 물으면 극값 판정이 붙어 ★2."
```

```yaml
- id: RPM-CALC2-1014
  page: 143
  vendor_label: "유형 15 정적분으로 정의된 함수; 적분 구간이 상수인 경우"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=e^x−2x+∫₀¹ f'(t)dt 를 만족시키는 f 에 대하여 f(1) 의 값.
  category: "∫f'(t)dt 를 f(1)−f(0) 으로 번역 → 상수 방정식 → 함숫값"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "피적분함수가 f' 이므로 ∫₀¹f'(t)dt=f(1)−f(0) 으로 바꿔 f 자신의 값으로 되돌리는 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "∫ₐᵇ f'(t)dt=f(b)−f(a) 를 이용한 정적분으로 정의된 함수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    상수 c=∫₀¹f'(t)dt 로 두면 f(x)=e^x−2x+c 이지만, 같은 c 가 미적분의 기본정리로 f(1)−f(0) 이기도 하다는 점이 핵심이다. 두 표현을 맞추면 c=e−3. 동치 변환 1개(EQV d1)·M_total 6 → ★2. c 를 그냥 미지수로만 두면 식이 하나 모자라 막힌다.
  tier: star_2
  mechanism_primary: "c=∫₀¹f'(t)dt=f(1)−f(0) → f(x)=e^x−2x+c → c=(e−2+c)−(1+c)=e−3 → f(1)=2e−5"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2e-5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1014.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "바깥 함수(e^x−2x → sin x+x²)·적분 구간(0~1 → 1~2)·묻는 점을 바꿀 수 있음. 제약: f(1)−f(0) 을 계산할 때 상수 c 가 서로 소거되므로 바깥 함수만으로 c 가 결정돼야 하고, 그 값이 유한하게 떨어지는 구간이어야 한다."
    creative: "(1) f'(t) 대신 f''(t) 를 적분하게 해 f'(1)−f'(0) 으로 한 겹 올리기(★3) (2) 적분을 ∫₀¹t f'(t)dt 로 바꾸면 부분적분이 추가돼 EQV 2개 · ★3 (3) f(1) 대신 f 의 극솟값을 물으면 극값 판정이 붙어 ★3."
```

```yaml
- id: RPM-CALC2-1015
  page: 143
  vendor_label: "유형 15 정적분으로 정의된 함수; 적분 구간이 상수인 경우"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=ln x+∫₁^e f(t)dt 를 만족시키는 함수 f(x) 를 구하기.
  category: "정적분을 상수 k 로 치환 → ln 부분적분 → k 방정식 → f 결정"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "f(x)=g(x)+∫ₐᵇ f(t)dt 꼴에서 상수 치환으로 f 결정하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    k=∫₁^e f(t)dt 로 두고 f(x)=ln x+k 를 되대입하면 k=∫₁^e ln t dt+k(e−1) 이고 ∫₁^e ln t dt=1 이므로 k(2−e)=1. 골조는 1013 과 같지만 ln 의 부분적분과 e−1 계수 때문에 M_total 7 → ★2 유지. 통찰로 셀 만한 새 변환은 없다.
  tier: star_2
  mechanism_primary: "∫₁^e f(t)dt=k → f(x)=ln x+k → k=1+k(e−1) → k=1/(2−e) → f(x)=ln x+1/(2−e)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$f(x)=\ln x+\dfrac{1}{2-e}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1015.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "바깥 함수(ln x → x ln x)·적분 구간(1~e → 1~e²)을 바꿀 수 있음. 제약: 구간 길이 e−1 이 1 이 되면 k 의 계수가 0 이 되어 방정식이 성립하지 않으므로 구간 길이 ≠ 1 이어야 한다."
    creative: "(1) f(x) 자체 대신 f(e) 만 묻기(★2 유지·서술 부담만 감소) (2) 적분 구간을 1~a 로 두고 f 가 존재하지 않는 a 를 묻게 하면 VF d2 가 붙어 ★4 (3) ln x 를 (ln x)² 로 바꾸면 부분적분 두 번으로 Mₖ만 상승(★2)."
```

### 유형 16 정적분으로 정의된 함수; 적분 구간에 변수가 있는 경우

```yaml
- id: RPM-CALC2-1016
  page: 143
  vendor_label: "유형 16 정적분으로 정의된 함수; 적분 구간에 변수가 있는 경우"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    ∫₀^x f(t)dt=e^{2x}+a e^x 를 만족시키는 f 에 대하여 f(ln 2) 의 값(a 는 상수).
  category: "하한 대입으로 상수 결정 → 양변 미분으로 f 복원 → 대입"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∫ₐ^x f(t)dt=g(x) 꼴에서 x=a 대입과 미분으로 f 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x=0 을 넣으면 좌변이 0 이라 1+a=0 에서 a=−1, 양변을 미분하면 f(x)=2e^{2x}−e^x. 이 유형의 표준 2수(대입·미분)를 그대로 한 번씩 쓰는 문항이라 통찰 0·M_total 5 → 유형 대표 출발 ★2 에서 −1 → ★1.
  tier: star_1
  mechanism_primary: "x=0 대입 → a=−1 → 양변 미분 → f(x)=2e^{2x}−e^x → f(ln 2)=6"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1016.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 함수(e^{2x}+ae^x → sin 2x+a sin x)·하한(0 → ln 3)·평가점(ln 2 → ln 3)을 바꿀 수 있음. 제약: 하한 대입 시 우변이 0 이 되도록 상수 a 가 유일하게 결정돼야 하고, 평가점에서 지수가 정수로 떨어져야 답이 자연수가 된다."
    creative: "(1) f(ln 2) 대신 f'(ln 2) 를 물어 미분을 한 번 더(★2) (2) 피적분함수를 e^t f(t) 로 바꾸면 1017 골조(★2) (3) 하한을 미지수 c 로 두고 조건을 만족시키는 c 를 찾게 하면 BW d1 · ★3."
```

```yaml
- id: RPM-CALC2-1017
  page: 143
  vendor_label: "유형 16 정적분으로 정의된 함수; 적분 구간에 변수가 있는 경우"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    ∫_{ln 9}^{x} e^t f(t)dt=e^{2x}−a e^x+9 를 만족시키는 f 에 대하여 f(0) 의 값(a 는 상수).
  category: "하한 대입으로 상수 결정 → 미분 후 e^x 로 나누어 f 복원"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∫ₐ^x h(t)f(t)dt=g(x) 꼴에서 미분 후 나누어 f 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x=ln 9 를 넣으면 81−9a+9=0 에서 a=10, 미분하면 e^x f(x)=2e^{2x}−10e^x 이므로 양변을 e^x 로 나눠 f(x)=2e^x−10. 골조는 1016 과 같지만 하한이 ln 9 라 e^{2 ln 9}=81 까지 다루는 지수 계산이 붙어 M_total 7 → ★2 유지. 서술형 태그.
  tier: star_2
  mechanism_primary: "x=ln 9 대입 → a=10 → 미분 → e^x f(x)=2e^{2x}−10e^x → f(x)=2e^x−10 → f(0)=−8"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1017.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "하한(ln 9 → ln 4)·우변 상수항(9)·평가점(0 → ln 2)을 바꿀 수 있음. 제약: 하한을 넣었을 때 우변이 0 이 되도록 상수항과 a 가 맞물려야 하고, e^{2·하한} 이 정수여야 a 가 유리수로 나온다."
    creative: "(1) e^t 대신 t 를 곱해 미분 후 x 로 나누게 하면 x≠0 단서가 필요해 T-범위가 추가(★3) (2) f(0) 대신 f 의 영점을 묻기(★2) (3) 우변을 e^{2x}−ae^x+b 로 두고 a, b 를 모두 미지로 하면 조건이 하나 더 필요해 CON d1 · ★3."
```

```yaml
- id: RPM-CALC2-1018
  page: 143
  vendor_label: "유형 16 정적분으로 정의된 함수; 적분 구간에 변수가 있는 경우"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    미분가능한 f 가 모든 실수 x 에서 f(x)=2∫₀^x e^t f(t)dt+1 을 만족시킬 때 f''(0) 의 값. 5지선다.
  category: "하한 대입으로 초깃값 → 미분으로 f'=2e^x f → 곱의 미분으로 f''"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "f(x)=k∫₀^x h(t)f(t)dt+c 꼴에서 미분을 거듭해 고계 도함수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x=0 에서 f(0)=1, 한 번 미분해 f'(x)=2e^x f(x) 이므로 f'(0)=2, 여기서 곱의 미분으로 f''(x)=2e^x f(x)+2e^x f'(x) 를 얻어 x=0 을 넣으면 된다. f 를 실제로 구할 필요가 없다는 점이 요령이지만 미분 두 번은 이 유형의 표준 절차라 통찰로 세지 않았다. M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "x=0 → f(0)=1 → 미분 f'=2e^x f → f'(0)=2 → 곱의 미분 f''=2e^x(f+f') → f''(0)=6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1018.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 2·상수항 1·평가점 0 을 바꿀 수 있음. 제약: 하한과 평가점을 같게 두어야 f(하한) 이 상수항에서 바로 읽히고, e^t 대신 다른 함수를 쓰면 그 함수의 하한에서의 값이 간단해야 한다."
    creative: "(1) f'''(0) 까지 물어 미분을 한 번 더(★2 · Mₛ만 상승) (2) f 를 실제로 구하게 하면 f'/f=2e^x 로 옮기는 EQV d2 가 붙어 ★3 (3) e^t 를 t 로 바꾸면 f'=2xf 라 f 가 e^{x²} 꼴이 되어 ★3."
```

```yaml
- id: RPM-CALC2-1019
  page: 143
  vendor_label: "유형 16 정적분으로 정의된 함수; 적분 구간에 변수가 있는 경우"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x>0 에서 미분가능한 f 가 x f(x)=x² ln x+∫₁^x f(t)dt 를 만족시킬 때 f(e) 의 값.
  category: "양변 미분 → f 소거 → f' 결정 → 되적분 후 x=1 초깃값"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "양변을 미분하면 좌변의 f(x) 와 우변 적분의 f(x) 가 상쇄되어 f'(x) 만 남는 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "x f(x)=g(x)+∫ₐ^x f(t)dt 꼴에서 미분으로 f 를 소거해 f' 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    미분하면 f+x f'=2x ln x+x+f 이고 f 가 지워져 f'(x)=2 ln x+1. 이를 되적분(ln 부분적분)하고, 원식에 x=1 을 넣어 얻은 f(1)=0 으로 적분상수를 잡는다. 미분 소거 통찰 1개(EQV d1)·M_total 7·벤더 「상중」 → ★3 유지. 1007 과 같은 골조가 정적분 꼴로 나타난 짝 문항이다.
  tier: star_3
  mechanism_primary: "양변 미분 → f 상쇄 → f'(x)=2 ln x+1 → f(x)=2x ln x−x+C → 원식 x=1 로 f(1)=0 → C=1 → f(e)=e+1"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$e+1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1019.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "덧붙은 항(x² ln x → x³·x² e^x)·하한(1)·평가점(e)을 바꿀 수 있음. 제약: 덧붙은 항을 미분한 뒤 x 로 나눈 결과가 초등함수로 적분돼야 하고, 하한을 1 로 두어야 원식에서 f(1) 이 바로 읽힌다."
    creative: "(1) x f(x) 대신 f(x) 만 두면 f'=f+… 꼴 미분방정식이 되어 ★4 (2) f(e) 대신 f 의 극솟값을 물으면 극값 판정이 붙어 ★3 유지·Mₛ 상승 (3) 하한을 e 로 옮기면 초깃값이 f(e) 가 되어 묻는 값이 바로 나오므로 ★2 로 내려감."
```

### 유형 17 정적분으로 정의된 함수: 적분 구간과 피적분함수에 변수가 있는 경우

```yaml
- id: RPM-CALC2-1020
  page: 144
  vendor_label: "유형 17 정적분으로 정의된 함수: 적분 구간과 피적분함수에 변수가 있는 경우"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    ∫₀^x (x−t)f(t)dt=e^x−x+a 를 만족시키는 f 에 대하여 a+f(1) 의 값(a 는 상수).
  category: "(x−t) 분리 → 미분 시 x f(x) 상쇄 → 다시 미분해 f 복원"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x 는 적분변수 t 에 대해 상수이므로 좌변을 x∫₀^x f(t)dt−∫₀^x t f(t)dt 로 갈라야 미분이 가능"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "∫₀^x (x−t)f(t)dt=g(x) 꼴에서 두 번 미분해 f 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    좌변을 x∫f−∫tf 로 나눈 뒤 미분하면 ∫₀^x f+x f(x)−x f(x) 에서 x f(x) 가 상쇄되어 ∫₀^x f(t)dt=e^x−1 만 남고, 한 번 더 미분하면 f(x)=e^x. a 는 원식에 x=0 을 넣어 −1. 분리 통찰 1개(EQV d1)·M_total 7 → 유형 대표 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "(x−t) 분리 → 미분해 ∫₀^x f(t)dt=e^x−1 → 다시 미분해 f(x)=e^x → x=0 으로 a=−1 → a+f(1)=e−1"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$e-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1020.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 함수(e^x−x+a → sin x+ax)·하한(0)을 바꿀 수 있음. 제약: 하한에서 좌변이 0 이 되므로 우변도 그 점에서 0 이 되도록 a 가 결정돼야 하고, 우변을 두 번 미분한 것이 답이 되므로 두 번 미분해도 초등함수여야 한다."
    creative: "(1) (x−t) 를 (x−t)² 로 올려 미분을 세 번 하게 하기(★3) (2) f 가 아니라 a 만 묻기(★1 — 미분이 필요 없음) (3) 우변을 미지 다항식으로 주고 f 가 상수함수가 되는 조건을 찾게 하면 BW d2 · ★4."
```

```yaml
- id: RPM-CALC2-1021
  page: 144
  vendor_label: "유형 17 정적분으로 정의된 함수: 적분 구간과 피적분함수에 변수가 있는 경우"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    미분가능한 f 가 f(x)=∫₀^x (x−t) sin t dt 를 만족시킬 때 f'(π/2) 의 값.
  category: "(x−t) 분리 → 미분에서 상쇄 → f'(x)=∫₀^x sin t dt"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x∫ sin t dt−∫ t sin t dt 로 갈라 미분하면 x sin x 가 상쇄되어 f'(x)=∫₀^x sin t dt 로 줄어듦"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "f(x)=∫₀^x (x−t)g(t)dt 꼴에서 f'(x)=∫₀^x g(t)dt 임을 이용하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f 를 실제로 구하지 않아도 되고, 분리 후 미분에서 상쇄가 일어나 f'(x)=1−cos x 한 줄로 끝난다. 상쇄를 모르고 f 를 먼저 적분하면 부분적분까지 돌아가게 되는 갈림길이 이 문항의 값어치다. 통찰 1개(EQV d1)·M_total 5 → ★2(통찰이 있어 −1 미적용).
  tier: star_2
  mechanism_primary: "(x−t) 분리 → 미분 상쇄 → f'(x)=∫₀^x sin t dt=1−cos x → f'(π/2)=1"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1021.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "피적분 함수(sin t → cos t·e^t)·평가점(π/2 → π)을 바꿀 수 있음. 제약: 평가점에서 ∫₀^x g 가 유리수나 간단한 값으로 떨어져야 하고, 하한은 0 으로 두어야 f(0)=0 이 자동으로 성립한다."
    creative: "(1) f''(π/2) 를 물으면 한 번 더 미분해 g(π/2) 가 되어 ★1~2 (2) f(π/2) 자체를 물으면 부분적분이 살아나 ★2 유지·Mₖ 상승 (3) (x−t) 를 (x−t)² 로 올리면 미분이 두 번 필요해 ★3."
```

```yaml
- id: RPM-CALC2-1022
  page: 144
  vendor_label: "유형 17 정적분으로 정의된 함수: 적분 구간과 피적분함수에 변수가 있는 경우"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x>0 에서 ∫₁^x (x−t)f(t)dt=x ln x+2ax+b 가 성립할 때 상수 a, b 에 대하여 a²+b² 의 값. 5지선다.
  category: "(x−t) 분리·미분 → 미분식에 x=1 로 a → 원식에 x=1 로 b"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "분리 후 미분하면 x f(x) 가 상쇄되어 ∫₁^x f(t)dt=ln x+1+2a 라는 한 단계 낮은 식이 나옴"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "∫ₐ^x (x−t)f(t)dt=g(x) 꼴에서 미분식과 원식의 하한 대입으로 미정상수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    미분하면 ∫₁^x f(t)dt=ln x+1+2a 이고 여기에 x=1 을 넣어 a=−1/2, 다시 원식에 x=1 을 넣어 b=−2a=1. 같은 x=1 을 미분식과 원식 두 곳에 각각 써야 상수가 둘 다 잡힌다는 점이 이 문항의 요점이다. 통찰 1개(EQV d1)·M_total 7 → 「중」 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "(x−t) 분리·미분 → ∫₁^x f=ln x+1+2a → x=1 로 a=−1/2 → 원식 x=1 로 b=1 → a²+b²=5/4"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1022.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 함수(x ln x → x²·x e^x)·하한(1)·미정계수 앞 숫자(2a)를 바꿀 수 있음. 제약: 하한에서 좌변이 0 이므로 원식·미분식 두 대입이 모두 성립해야 하고, x ln x 를 쓰면 x>0 단서가 필요하다."
    creative: "(1) a, b 대신 f(e) 를 묻기(미분 두 번 · ★2 유지) (2) 하한을 0 으로 옮기면 ln 이 정의되지 않아 우변을 바꿔야 함 — 정의역 검토가 붙어 VF d1 · ★3 (3) a, b 를 주고 f 를 구하게 하면 역방향이 사라져 ★2."
```

```yaml
- id: RPM-CALC2-1023
  page: 144
  vendor_label: "유형 17 정적분으로 정의된 함수: 적분 구간과 피적분함수에 변수가 있는 경우"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    미분가능한 f 가 ∫₀^x (x−t)f'(t)dt=(1/2)sin 2x−x 를 만족시키고 f(0)=1 일 때 함수 f(x) 를 구하기.
  category: "(x−t) 분리·미분 → ∫f'=f(x)−f(0) → f 복원"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "분리·미분으로 ∫₀^x f'(t)dt 만 남기고 이를 f(x)−f(0) 으로 바꿔 f 를 직접 읽어냄"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "∫₀^x (x−t)f'(t)dt=g(x) 꼴에서 미분과 기본정리로 f 복원하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    한 번 미분하면 ∫₀^x f'(t)dt=cos 2x−1 이고 좌변이 f(x)−f(0) 이므로 f(0)=1 을 더해 f(x)=cos 2x. 적분을 두 번 하거나 f' 를 먼저 구할 필요가 없다. 통찰 1개(EQV d1)·M_total 6 → ★2. 함정은 미분 후 우변의 부호와 상수뿐이다.
  tier: star_2
  mechanism_primary: "(x−t) 분리·미분 → ∫₀^x f'(t)dt=cos 2x−1 → f(x)−f(0)=cos 2x−1 → f(x)=cos 2x"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$f(x)=\cos 2x$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1023.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변((1/2)sin 2x−x → (1/3)sin 3x−x)·초깃값 f(0)=1 을 바꿀 수 있음. 제약: 우변을 미분한 것이 f(x)−f(0) 이므로 우변은 하한 0 에서 0 이 되어야 하고, 각 계수를 바꾸면 미분 결과의 계수도 함께 맞춰야 한다."
    creative: "(1) f' 대신 f 를 넣어 유형 17 기본형으로 되돌리면 미분 두 번 · ★2 (2) f(0) 을 주지 않고 f 의 최댓값을 물으면 상수가 남아 조건 부족 — 조건 설계 주의 (3) 우변을 미지 상수 포함 꼴로 주고 f 가 우함수가 되는 조건을 묻게 하면 SYM d2 · ★4."
```

### 유형 18 정적분으로 정의된 함수의 극대·극소

```yaml
- id: RPM-CALC2-1024
  page: 144
  vendor_label: "유형 18 정적분으로 정의된 함수의 극대·극소"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    0<x<π 에서 f(x)=∫₀^x (sin t−cos 2t)dt 의 극댓값.
  category: "f'=피적분함수 → 배각공식으로 sin x 이차식 인수분해 → 부호 판정 → 극값 계산"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정적분으로 정의된 함수의 극값; 피적분함수의 부호 변화로 판정하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(x)=sin x−cos 2x 에 cos 2x=1−2sin²x 를 넣으면 (2 sin x−1)(sin x+1) 로 인수분해되고, sin x+1>0 이므로 부호는 2 sin x−1 이 결정한다. 0<x<π 에서 x=π/6·5π/6 중 −에서 +로 바뀌지 않는 5π/6 이 극대점. 배각공식·부호 판정 모두 표준이라 통찰 0, 함정 둘(T-범위·T-부호)로 M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "f'=sin x−cos 2x → (2 sin x−1)(sin x+1) → 0<x<π 에서 극대는 x=5π/6 → f(5π/6)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{3\sqrt{3}}{4}+1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1024.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "피적분함수(sin t−cos 2t → cos t−cos 2t)·정의역(0<x<π → 0<x<2π)을 바꿀 수 있음. 제약: 배각공식으로 한 삼각함수의 이차식이 되어 인수분해가 되어야 하고, 정의역 안에 극대점이 하나만 들어오도록 범위를 잡아야 답이 하나로 정해진다."
    creative: "(1) 극솟값으로 바꾸면 x=π/6 이 되어 골조 동일·★2 (2) 정의역을 0<x<2π 로 넓혀 극대가 둘 나오게 하면 모두 따져야 하므로 MI d1 · ★3 (3) 극댓값이 주어진 값이 되도록 피적분함수의 계수를 역추적하게 하면 BW d2 · ★4."
```

```yaml
- id: RPM-CALC2-1025
  page: 144
  vendor_label: "유형 18 정적분으로 정의된 함수의 극대·극소"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=∫_{ln 2}^{x} e^t(e^t−1)³ dt 의 극솟값을 k 라 할 때 Σ_{n=1}^{∞} k^n 의 값.
  category: "f'=e^x(e^x−1)³ 부호 판정 → 치환적분으로 극솟값 → 등비급수의 합"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 3
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "구한 극솟값 k 를 첫째항이자 공비인 등비급수 Σk^n=k/(1−k) 로 넘기는 단원 결합(|k|<1 확인 포함)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "정적분으로 정의된 함수의 극값과 등비급수의 결합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'=e^x(e^x−1)³ 은 e^x>0 이라 부호가 (e^x−1)³ 로 결정되고 x=0 에서 −에서 +로 바뀌어 극소. f(0) 은 u=e^t−1 치환으로 [(e^t−1)⁴/4] 대입 한 줄. 마지막에 등비급수(XU d1)로 넘어가는 것이 이 문항의 성격이다. 통찰 1개 d1 → 「중」 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "f'=e^x(e^x−1)³ 부호 → x=0 에서 극소 → 치환적분으로 k=f(0)=−1/4 → Σk^n=k/(1−k)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-\dfrac{1}{5}$'
  answer_source: "답지(쪽 렌더 · 답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-calc2/items/1025.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "하한(ln 2 → ln 3)·지수 거듭제곱 차수(3 → 5)·마지막에 묻는 급수 꼴을 바꿀 수 있음. 제약: 거듭제곱 차수가 홀수라야 x=0 에서 부호가 바뀌어 극값이 생기고, 극솟값 k 는 |k|<1 이어야 등비급수가 수렴한다."
    creative: "(1) 급수 부분을 빼고 극솟값만 묻기(★2 · XU 소멸로 ★1~2) (2) 차수를 짝수로 바꿔 극값이 없음을 보이게 하면 VF d2 · ★3 (3) 하한을 미지수로 두고 Σk^n 이 주어진 값이 되게 하는 하한을 찾게 하면 BW+XU 2개 · ★4."
```

```yaml
- id: RPM-CALC2-1026
  page: 144
  vendor_label: "유형 18 정적분으로 정의된 함수의 극대·극소"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    0<x<π 에서 f(x)=∫₀^x t cos t dt 가 x=α 에서 극댓값 β 를 가질 때 α−β 의 값. 5지선다.
  category: "f'=x cos x 부호 판정 → 극대점 → 부분적분으로 극댓값"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정적분으로 정의된 함수의 극값; 부분적분으로 극값 계산하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    0<x<π 에서 x>0 이므로 f'=x cos x 의 부호는 cos x 가 결정하고 x=π/2 에서 +에서 −로 바뀌어 극대. β 는 ∫₀^{π/2}t cos t dt 를 부분적분해 [t sin t+cos t] 로 계산한다. 통찰 0·M_total 6 → ★2. 함정은 정의역 제한과 x>0 에서 계수 x 를 무시해도 된다는 판단 둘.
  tier: star_2
  mechanism_primary: "f'=x cos x → 0<x<π 에서 부호는 cos x → α=π/2 → 부분적분으로 β=π/2−1 → α−β=1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지(쪽 렌더 · 답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-calc2/items/1026.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "피적분함수(t cos t → t sin t·t e^t)·정의역(0<x<π)·묻는 식(α−β → αβ)을 바꿀 수 있음. 제약: 정의역 안에 극대점이 하나만 들어와야 하고, 부분적분 결과가 그 점에서 π 의 유리수배와 정수의 합으로 떨어져야 선택지가 깔끔하다."
    creative: "(1) 정의역을 −π<x<π 로 넓혀 x 의 부호까지 따지게 하면 T-부호가 추가돼 ★3 (2) 극댓값이 주어지고 피적분함수의 계수를 역추적하게 하면 BW d1 · ★3 (3) α−β 대신 f 의 그래프 개형을 묻는 ㄱㄴㄷ 보기로 바꾸면 MI d1 · ★3."
```

```yaml
- id: RPM-CALC2-1027
  page: 144
  vendor_label: "유형 18 정적분으로 정의된 함수의 극대·극소"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=∫_{−1}^{x} kt/(t²+1)dt 가 x=α 에서 극솟값 −ln 2 를 가질 때 k+α 의 값(k 는 0 이 아닌 상수).
  category: "f'=kx/(x²+1) 부호로 k>0 확정 → α=0 → 로그 적분으로 k 역추적"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "극솟값 −ln 2 라는 결과에서 거꾸로 k 의 부호(극소가 되려면 k>0)와 크기를 역추적"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "정적분으로 정의된 함수의 극값 조건으로 미정계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'=kx/(x²+1) 은 분모가 항상 양이라 부호가 kx 로 결정되고, x=0 에서 극소가 되려면 k>0 이어야 한다(k<0 이면 극대). α=0 을 넣어 f(0)=(k/2)[ln(t²+1)]_{−1}^{0}=−(k/2)ln 2=−ln 2 로 k=2. 역추적 통찰 1개(BW d1)·M_total 7 → 「중」 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "f'=kx/(x²+1) 부호 → 극소이려면 k>0 이고 α=0 → f(0)=−(k/2)ln 2=−ln 2 → k=2 → k+α=2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1027.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "하한(−1 → −2)·극솟값(−ln 2)·분모(t²+1 → t²+4)를 바꿀 수 있음. 제약: 하한과 0 사이에서 ln(하한²+1) 이 ln 2·ln 5 처럼 깔끔해야 k 가 정수로 떨어지고, 극값은 f'=0 인 x=0 에서만 생기므로 하한이 0 이면 안 된다."
    creative: "(1) 극댓값을 주어 k<0 을 유도하게 하면 부호 판단만 뒤집힘(★2 유지) (2) k 의 부호를 알려 주면 BW 가 사라져 ★1~2 (3) 극값을 갖지 않도록 하는 k 를 묻게 하면 k=0 뿐이라는 검증이 필요해 VF d1 · ★3."
```

### 유형 19 정적분으로 정의된 함수의 최대·최소

```yaml
- id: RPM-CALC2-1028
  page: 145
  vendor_label: "유형 19 정적분으로 정의된 함수의 최대·최소"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    f(x)=∫₀^x (1−t)e^t dt 의 최댓값.
  category: "f'=(1−x)e^x 부호 판정 → x=1 에서 최대 → 부분적분으로 값 계산"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정적분으로 정의된 함수의 최댓값·최솟값; 도함수 부호로 판정하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e^x>0 이므로 f'=(1−x)e^x 의 부호는 1−x 가 결정하고 x=1 앞뒤에서 +→− 이라 그 점이 실수 전체에서의 최대다. 값은 ∫₀¹(1−t)e^t dt 를 부분적분해 구한다. 정의역 제한이 없어 극대가 곧 최대라는 판단이 유일한 추가 단계. 통찰 0·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "f'=(1−x)e^x → x=1 에서 최대 → 부분적분 ∫₀¹(1−t)e^t dt=e−2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$e-2$'
  answer_source: "답지(쪽 렌더 · 답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-calc2/items/1028.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "피적분함수의 일차 인자(1−t → 2−t)·하한(0)을 바꿀 수 있음. 제약: 일차 인자의 영점이 최대점이 되므로 그 점과 하한 사이에서 부분적분 결과가 e 의 일차식으로 정리되게 잡아야 한다."
    creative: "(1) 정의역을 0≤x≤2 로 제한해 양 끝값까지 비교하게 하면 T-경계가 붙어 ★3 (2) 최솟값을 물으면 −∞ 라 답이 없음을 보여야 해 VF d2 · ★4 (3) (1−t) 를 (1−t²) 로 바꾸면 극점이 둘이라 MI d1 · ★3."
```

```yaml
- id: RPM-CALC2-1029
  page: 145
  vendor_label: "유형 19 정적분으로 정의된 함수의 최대·최소"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    0<x<π/2 에서 f(x)=∫₀^x (1−2 cos t)dt 의 최솟값. 5지선다.
  category: "f'=1−2 cos x 부호 판정 → x=π/3 → 바로 적분해 값 계산"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정적분으로 정의된 함수의 최댓값·최솟값; 도함수 부호로 판정하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f'=1−2 cos x 가 0 이 되는 x=π/3 에서 −에서 +로 바뀌므로 그곳이 최소이고, 피적분함수가 바로 적분되어 f(x)=x−2 sin x 이므로 대입 한 줄이면 끝난다. 부분적분도 치환도 없다. 통찰 0·M_total 5 → 「중」 출발 ★2 에서 −1 → ★1.
  tier: star_1
  mechanism_primary: "f'=1−2 cos x → x=π/3 에서 최소 → f(x)=x−2 sin x → f(π/3)=π/3−√3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{\pi}{3}-\sqrt{3}$'
  answer_source: "답지(쪽 렌더 · 답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-calc2/items/1029.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "피적분함수의 계수(1−2 cos t → 1−√2 cos t·2−2 sin t)·정의역을 바꿀 수 있음. 제약: cos x=1/2 처럼 특수각이 나오도록 계수를 잡아야 답이 π 의 유리수배와 무리수의 합으로 떨어지고, 그 각이 정의역 안에 있어야 한다."
    creative: "(1) 정의역을 0≤x≤π 로 넓혀 최댓값까지 묻기(양 끝값 비교로 ★2) (2) 최솟값이 주어진 값이 되게 하는 계수를 역추적하면 BW d1 · ★3 (3) 피적분함수를 1−2 cos 2t 로 바꾸면 영점이 둘이라 비교가 필요해 MI d1 · ★3."
```

```yaml
- id: RPM-CALC2-1030
  page: 145
  vendor_label: "유형 19 정적분으로 정의된 함수의 최대·최소"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x>0 에서 f(x)=∫_x^{x+1}(t+6/t)dt 의 최솟값. 5지선다.
  category: "양 끝이 변수인 적분 → f'(x)=g(x+1)−g(x) → 이차방정식으로 최소점"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "상·하한이 모두 변수이므로 f'(x)=g(x+1)−g(x) 로 바꿔 적분을 계산하지 않고 미분하는 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "적분 구간의 양 끝이 변수인 정적분 함수의 최댓값·최솟값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f 를 먼저 적분하면 ln((x+1)/x) 가 섞여 미분이 번거롭지만, f'(x)=g(x+1)−g(x)=1−6/{x(x+1)} 로 바로 쓰면 x²+x−6=0 에서 x=2 가 나온다(x>0 이라 x=−3 기각). 최솟값은 ∫₂³(t+6/t)dt 계산. 양 끝 변수 미분 통찰 1개(EQV d1)·벤더 「상중」 → ★3 유지.
  tier: star_3
  mechanism_primary: "f'(x)=g(x+1)−g(x)=1−6/{x(x+1)} → x(x+1)=6 → x=2 → f(2)=∫₂³(t+6/t)dt"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{5}{2}+6\ln\dfrac{3}{2}$'
  answer_source: "답지(쪽 렌더 · 답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-calc2/items/1030.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수 6·구간 폭 1(x~x+1 → x~x+2)·피적분함수를 바꿀 수 있음. 제약: x(x+1)=상수 가 양의 정수해를 갖도록 상수를 잡아야 하고(6→ x=2, 12→ x=3), x>0 제한 때문에 음의 근은 기각되어야 한다."
    creative: "(1) 구간 폭을 2 로 늘리면 x(x+2)=상수 로 근이 무리수가 되기 쉬우니 상수 선택이 관건(★3 유지) (2) 최솟값 대신 최솟값을 갖는 x 만 묻기(★2) (3) 6/t 를 6/t² 로 바꿔 f' 가 유리식 방정식이 되게 하면 Mₖ 상승 · ★3."
```

### 유형 20 정적분으로 정의된 함수의 극한

```yaml
- id: RPM-CALC2-1031
  page: 145
  vendor_label: "유형 20 정적분으로 정의된 함수의 극한"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    f(x)=x(ln x+e^x) 에 대하여 lim_{h→0}(1/h)∫₁^{1+2h}f(t)dt 의 값. 5지선다.
  category: "미분계수 정의 꼴로 맞추기 → 2f(1)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정적분으로 정의된 함수의 극한; 미분계수의 정의 이용하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    F(x)=∫₁^x f 로 두면 주어진 극한은 {F(1+2h)−F(1)}/h 이고 분모를 2h 로 맞추면 2F'(1)=2f(1). f(1)=1·(0+e)=e 이므로 답은 2e. 공식 한 줄·통찰 0·M_total 4 → 유형 대표 출발 ★2 에서 −1 → ★1. 함정은 계수 2 하나뿐이다.
  tier: star_1
  mechanism_primary: "∫₁^{1+2h}f 를 F(1+2h)−F(1) 로 → 분모 2h 로 맞춰 2F'(1)=2f(1)=2e"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1031.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상한의 증분 계수(2h → 3h)·기준점(1)·f 의 식을 바꿀 수 있음. 제약: 기준점에서 f 의 값이 간단해야 하고(여기서는 ln 1=0), ln 이 있으므로 기준점은 양수여야 한다."
    creative: "(1) 구간을 1−h~1+2h 로 비대칭하게 벌리면 계수 합이 3 이 되어 판단이 한 겹 늘어남(★2) (2) f 대신 f' 를 적분하게 하면 값이 f(1+2h)−f(1) 이 되어 ★1 유지 (3) 극한값이 주어지고 f 의 계수를 역추적하게 하면 BW d1 · ★2."
```

```yaml
- id: RPM-CALC2-1032
  page: 145
  vendor_label: "유형 20 정적분으로 정의된 함수의 극한"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    lim_{h→0}(1/h)∫_{π−h}^{π+h} e^{2t}(cos t−sin t)dt 의 값.
  category: "양쪽으로 벌어지는 구간 → F(π+h)−F(π−h) → 2F'(π)"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "하한도 움직이므로 {F(π+h)−F(π)}/h+{F(π)−F(π−h)}/h 로 갈라 두 미분계수의 합 2F'(π) 로 번역"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "적분 구간이 양쪽으로 벌어지는 정적분의 극한; 미분계수의 정의 이용하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    하한이 고정된 1031 과 달리 위아래가 함께 움직이므로 기준점 π 를 끼워 넣어 두 미분계수로 갈라야 한다. 결과는 2F'(π)=2e^{2π}(cos π−sin π)=−2e^{2π} 이고 피적분함수를 실제로 적분할 필요는 없다. 통찰 1개(EQV d1)·M_total 5 → ★2(통찰이 있어 −1 미적용).
  tier: star_2
  mechanism_primary: "π 를 끼워 두 미분계수로 분해 → 2F'(π)=2·e^{2π}(cos π−sin π)=−2e^{2π}"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-2e^{2\pi}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1032.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준점(π → π/2)·증분(±h → +2h/−h)·피적분함수를 바꿀 수 있음. 제약: 기준점에서 피적분함수 값이 e^{2π}·0·±1 처럼 간단해야 하고, 위아래 증분 계수의 합이 최종 배수를 결정하므로 의도한 계수를 먼저 정해야 한다."
    creative: "(1) 증분을 위아래 다르게(π−h~π+3h) 주어 계수 합을 4 로(★2 유지) (2) 피적분함수를 실제로 부분적분해야 하는 꼴로 잘못 유도되게 하면 계산 마찰만 늘어 질 저하 (3) 극한값이 0 이 되는 기준점을 찾게 하면 BW d1 · ★3(1034 골조)."
```

```yaml
- id: RPM-CALC2-1033
  page: 145
  vendor_label: "유형 20 정적분으로 정의된 함수의 극한"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=e^x−cos πx 에 대하여 lim_{x→1} 1/(x²−1) ∫₁^{x³} f(t)dt 의 값.
  category: "상한 x³ 에 맞춰 분모 분리 → 미분계수 × 인수분해 비의 극한"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "분모를 (x³−1)·{(x³−1)/(x²−1)} 로 갈라 앞은 F'(1)=f(1), 뒤는 (x²+x+1)/(x+1) 로 처리"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "상한이 합성된 정적분의 극한; 분모를 맞춰 미분계수로 분리하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    적분의 상한은 x³ 인데 분모는 x²−1 이라 그대로는 미분계수 꼴이 아니다. 분모를 x³−1 로 바꾸고 남은 (x³−1)/(x²−1) 을 인수분해해 3/2 로 보내는 두 겹 처리가 핵심이라 depth 2 로 두었다. f(1)=e−cos π=e+1. 통찰 1개 d2 라 +1 조건(2개 이상 또는 d3)에 못 미쳐 「중」 출발 ★2 유지. [분류 이슈] 분리 처리를 두 단계로 보면 ★3 후보.
  tier: star_2
  mechanism_primary: "∫₁^{x³}f=F(x³)−F(1) → (x³−1) 로 나눠 f(1)=e+1 → 남은 (x³−1)/(x²−1)→3/2 → (3/2)(e+1)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{3}{2}(e+1)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1033.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상한의 차수(x³ → x⁴)·분모(x²−1 → x−1)·f 의 식을 바꿀 수 있음. 제약: 상한과 분모가 x=1 에서 모두 0 이 되어야 하고, 두 인수의 비가 유리수로 수렴하도록 같은 근 x=1 을 공유해야 한다."
    creative: "(1) 분모를 x³−1 로 맞춰 주면 분리가 필요 없어 ★1~2 (2) 상한을 x³, 하한을 x 로 모두 움직이게 하면 미분계수 두 개로 갈라야 해 EQV 2개 · ★3 (3) 극한값이 주어지고 f 의 미정계수를 역추적하게 하면 BW d1 추가 · ★3."
```

```yaml
- id: RPM-CALC2-1034
  page: 145
  vendor_label: "유형 20 정적분으로 정의된 함수의 극한"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    lim_{x→a} 1/(x−a) ∫_a^x (cos t−sin t)dt=0 을 만족시키는 상수 a 의 값(0≤a≤π).
  category: "극한을 피적분함수 값으로 번역 → cos a=sin a → 범위 안의 해"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "극한값이 0 이라는 결과 조건에서 거꾸로 cos a−sin a=0 을 세우고 범위 안의 a 를 역추적"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "정적분의 극한이 주어진 값이 되게 하는 상수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    주어진 극한은 F'(a) 이므로 값은 피적분함수의 a 에서의 값 cos a−sin a 이고, 이것이 0 이면 tan a=1. 0≤a≤π 안에서는 a=π/4 하나만 남는다(5π/4 는 범위 밖). 결과에서 상수를 역추적하는 통찰 1개(BW d1)·M_total 5 → ★2(통찰이 있어 −1 미적용). 서술형 태그.
  tier: star_2
  mechanism_primary: "극한=F'(a)=cos a−sin a → cos a=sin a → tan a=1 → 0≤a≤π 에서 a=π/4"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{\pi}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1034.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "피적분함수(cos t−sin t → cos t+sin t·2 cos t−1)·목표 극한값(0)·a 의 범위(0≤a≤π)를 바꿀 수 있음. 제약: 방정식의 해가 범위 안에 하나만 들어오도록 범위를 잡아야 답이 유일하고, 특수각이 나오는 계수여야 한다."
    creative: "(1) 범위를 0≤a≤2π 로 넓혀 해가 둘 나오게 하면 MI d1 · ★3 (2) 극한값을 0 이 아닌 √2 로 주면 cos a−sin a=√2 로 합성이 필요해 EQV d1 추가 · ★3 (3) 적분 구간을 a~x² 로 바꾸면 합성 미분이 붙어 ★3(1033 골조)."
```

## 표본 판정 요약 (31문)

- ★ 분포: ★1 5 · ★2 21 · ★3 5 · ★4 0 · ★5 0 (★4·★5 없음 — 전 범위가 「유형」 구역 기본 문항이고 「유형 UP」·「실력 Up」·「시험에 꼭 나오는 문제」 구역은 이 범위에 없다)
- ★1 5문(1008·1013·1016·1029·1031)은 모두 통찰 0·M_total ≤ 5 라 −1 을 적용한 것이고, 이 중 셋(1008·1016·1031)이 각 유형의 「대표문제」다. ★3 5문 중 4문(1007·1011·1019·1030)은 벤더 「상중」 그대로이고, 1010 만 통찰 2개로 「중」에서 +1 했다
- 통찰형 17 · 절차형 14 · premium 0. 통찰 유형 분포: I-EQV 12(1006·1007·1012·1014·1019·1020·1021·1022·1023·1030·1032·1033 · 이 중 1033 만 depth 2) · I-BW 2(1027·1034) · I-SYM 1(1010 d2) · I-SC 1(1011) · I-CON 1(1011 d2) · I-XU 1(1025). 통찰 2개인 문항은 1010·1011 둘뿐
- 이 단원의 통찰이 I-EQV 로 쏠리는 이유: 유형 15~17 의 골조가 모두 「조건식을 미분해 피적분함수를 되찾는다」 하나이고, 변주는 변수가 적분 구간에 있는지·피적분함수에 있는지·양쪽에 있는지의 차이뿐이다
- type_hint 상위 5: 「f(x)=g(x)+∫ₐᵇ f(t)dt 상수 치환」 3(1012·1013·1015) · 「∫ₐ^x (x−t)f(t)dt=g(x) 두 번 미분」 3(1020·1022·1023 · 1021 도 같은 뿌리) · 「정적분으로 정의된 함수의 극값·부호 판정」 3(1024·1026·1027) · 「미분계수 정의로 정적분의 극한」 3(1031·1032·1033) · 「부분적분; 다항×지수·삼각」 3(1004·1005·1008). 그 밖에 「∫ₐ^x f(t)dt=g(x) 대입·미분」 3(1016·1017·1018) · 「최댓값·최솟값 부호 판정」 2(1028·1029) · 단독 6
- 그림: 없음(31문 모두 `figure: none`) · 서술형 태그 2문(1017·1034) · 대표문제 8문 · 기출 태그 0
- 답: 전사본 answer 값을 그대로 옮겼다(전사·검수 단계에서 답지 대조 완료). 골조를 잡는 과정에서 조건과 답이 어긋나 보이는 문항은 없었다

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-CALC2-1011 | 통찰 2개(SC d1+CON d2)에 저노출 유형 SC 가 포함돼 +1 하면 ★4 후보. 다만 「a+b·a−b 를 먼저 만든다」가 답지 표준 풀이이고 구역이 유형 기본이라 「상중」 출발 ★3 을 유지 | ★3 / ★4 |
| RPM-CALC2-1033 | 분모를 x³−1 로 맞추는 단계와 (x³−1)/(x²−1) 을 인수분해로 처리하는 단계를 각각 세면 통찰 2개로 ★3. 한 덩어리의 분리 처리로 보아 EQV d1개(depth 2)로 묶고 벤더 「중」 ★2 유지 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **하나로 묶을 후보**: 유형 15~17(1012~1023 · 12문)은 「정적분으로 정의된 함수에서 f 를 복원한다」는 한 뿌리이고, 갈리는 지점은 변수의 위치뿐이다 — 적분 구간이 상수(상수 치환) / 적분 구간에 변수(대입+미분) / 양쪽에 변수((x−t) 분리 후 두 번 미분). 따로 세 유형을 세우지 말고 한 유형 + 「변수 위치」 변형축 3단으로 두면 base ★ 를 2·2·3 으로 자연스럽게 계단 지을 수 있다. 유형 18·19(극대·극소 / 최대·최소 · 7문)도 f'=피적분함수의 부호 판정이라는 같은 도구를 쓰며 정의역 제한 유무만 다르므로 한 유형의 두 변형이 적절하다.
- **따로 세워야 할 유형**: (1) 「적분 구간의 양 끝이 변수인 함수의 미분 f'(x)=g(x+1)−g(x)」(1030) — 다른 문항과 도구가 달라 별도 유형이며 ★3 변별 슬롯의 씨앗. (2) 「합·차로 묶어 처리하는 e^x sin x·e^x cos x 정적분」(1011) — 전략 선택(SC)이 본질이라 부분적분 유형과 분리. (3) 「적분 구간의 성질+우·기함수 대칭」(1010) — 적분 기법이 아니라 구간 조작이 본질. (4) 「정적분의 극한에서 상수를 역추적」(1034) — 기법과 무관하게 역방향 물음이 공통이라 기법 유형과 교차하는 변형축으로 둘지 결정 필요.
- **경계가 겹치는 유형**: 유형 20(정적분의 극한 · 1031~1034)은 하한 고정(1031) / 양쪽 벌어짐(1032) / 상한 합성(1033) / 상수 역추적(1034) 네 변형이 난이도 계단을 이루므로 한 유형 + 4단 변형축으로 두는 것이 자연스럽다. 또 유형 13·14(부분적분 · 1004~1011)는 부정적분이냐 정적분이냐의 차이뿐이라 카탈로그에서는 「부분적분」 한 유형으로 묶고 base ★ 를 함수족(다항×지수·다항×삼각·로그×유리)으로 조정하는 편이 낫다.
