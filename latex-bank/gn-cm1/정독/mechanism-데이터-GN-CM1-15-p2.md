---
name: mechanism-데이터-GN-CM1-15-p2
description: 개념원리 공통수학1 15 이차방정식의 근과 계수의 관계(2/3 · 122~127쪽 21문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학1 · 전사본 latex-bank/gn-cm1
  section: 15 이차방정식의 근과 계수의 관계
  unit_code: GN-CM1-15
  part: "2/3"
  extract_range: "122~127쪽 · 122-e9~127-257"
  total_problems: 21
  unit_total: 48
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm1/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm1/items/<id>.tex
  image_source: latex-bank/gn-cm1/figures/ (이 범위에는 그림 문항 없음)
---

# 개념원리 공통수학1 · 15 이차방정식의 근과 계수의 관계 (2/3) 정독 데이터 (v1.0)

이 파일은 개념원리 공통수학1 122~127쪽, 단원 15 「이차방정식의 근과 계수의 관계」의 예제 구역 21문항(122-e9~127-257) 전수를 다룬다. 전사본 group section 은 「필수·발전 예제」 하나이고, 그 안은 `쪽-eN` 상자 예제(tag 「필수」 또는 「발전」)와 바로 뒤에 붙는 통번호 「확인체크」 문항이 번갈아 나온다. 벤더 신호는 태그가 전부다 — 「필수」와 그 확인체크는 ★2, 「발전」과 그 확인체크는 ★3 을 출발점으로 잡고 M_total·통찰로 ±1 조정했다. level 은 전사본에 없어 vendor_level 은 "-" 로 둔다. 그림 문항은 없다.

이 범위의 골조는 다섯 갈래다. ⑴ 근과 계수의 관계로 대칭식의 값 구하기(122쪽), ⑵ 두 방정식의 근·계수를 연결해 미정계수 구하기(123쪽), ⑶ 두 근의 비·차·배수 조건을 매개변수로 옮기기(124쪽), ⑷ 두 수를 근으로 하는 이차방정식 만들기·복소수 범위 인수분해(125~126쪽), ⑸ 켤레근의 성질(127쪽)이다. 여기에 126쪽 발전 예제의 `f(x)=0` 과 `f(ax+b)=0` 의 근 대응(추상 함수 표현 Mₐ=3)이 이 단원에서 유일하게 대상층을 중상위권으로 올리는 축이다. 이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-CM1-122-e9
  page: 122
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    2x^2-4x-1=0 의 두 근 α, β 에 대해 ⑴ (α-β)^2 ⑵ α^3+β^3 ⑶ (α-1)(β-1)
    ⑷ α/(α+1)+β/(β+1) 의 값 구하기.
  category: "근과 계수의 관계 → 대칭식을 기본대칭식(합·곱)으로 변형 → 대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "근과 계수의 관계로 대칭식의 값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    α+β=2, αβ=-1/2 를 구한 뒤 네 소문항 모두 교재가 바로 앞에서 제시한 항등식
    ((α+β)^2-4αβ · (α+β)^3-3αβ(α+β) · 전개 후 치환)에 그대로 넣는다.
    ⑷ 는 통분해 (2αβ+α+β)/(αβ+α+β+1) 로 만드는 한 단계가 더 붙지만 여전히 대칭식 변형이다.
    통찰 라벨이 붙는 단계 없음. 필수 예제 출발점 ★2·M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "근과 계수의 관계로 α+β·αβ → 각 식을 기본대칭식으로 변형 → 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $6$ \quad ⑵ $11$ \quad ⑶ $-\dfrac{3}{2}$ \quad ⑷ $\dfrac{2}{5}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/122-e9.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차항 계수와 상수항(2x^2-4x-1 → 3x^2-6x-2 등)을 바꿀 수 있다. 제약: α+β·αβ 가 분수로 나와도 ⑷ 의 분모 αβ+α+β+1 이 0 이 되지 않아야 하고(=1 이 근이면 안 됨), ⑶ 도 같은 이유로 1 을 근으로 갖지 않게 한다."
    creative: "(1) 소문항을 α^2/β+β^2/α, (α+2)(β+2) 처럼 같은 대칭식 층으로 교체(★2 유지) (2) 분모에 근을 대입해 차수를 낮춰야 정리되는 꼴(122-245 형)로 바꾸면 I-EQV d2 가 붙어 ★3 (3) 계수를 문자 a 로 두고 식의 값이 정수가 되는 a 를 묻는 역방향은 I-BW 가 붙어 ★3."
```

```yaml
- id: GN-CM1-122-244
  page: 122
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    x^2-3x+4=0 의 두 근 α, β 에 대해 ⑴ α^2β+αβ^2 ⑵ α^2+αβ+β^2 ⑶ (2α-1)(2β-1)
    ⑷ β/(α-1)+α/(β-1) ⑸ β/α^2+α/β^2 의 값 구하기.
  category: "근과 계수의 관계 → 대칭식을 기본대칭식으로 변형 → 대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "근과 계수의 관계로 대칭식의 값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    α+β=3, αβ=4. 다섯 소문항 전부 묶어내기(αβ(α+β)) · 항등식((α+β)^2-αβ) ·
    전개 후 치환 · 통분 후 α^2+β^2 치환 · 분자를 α^3+β^3 로 묶기로 처리된다.
    범위는 넓지만 각 단계가 122-e9 와 같은 층이라 통찰 라벨은 없다.
    필수 예제의 확인체크 출발점 ★2·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "α+β·αβ → 각 식을 기본대칭식으로 변형(묶기·통분·항등식) → 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $12$ \quad ⑵ $5$ \quad ⑶ $11$ \quad ⑷ $-1$ \quad ⑸ $-\dfrac{9}{16}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/122-244.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x^2-3x+4 의 두 계수를 바꿀 수 있다. 제약: ⑷ 의 분모 αβ-(α+β)+1 이 0 이 아니어야 하고(1 이 근이면 안 됨), ⑸ 는 (αβ)^2 로 나누므로 αβ≠0(상수항≠0). 답이 정수·간단한 분수로 떨어지게 하려면 α+β·αβ 를 작은 정수로 둔다."
    creative: "(1) 소문항 수를 3개로 줄이고 (α-β)^2 을 넣으면 판별식이 음수라 값이 음수로 나오는 점을 논의거리로 쓸 수 있음(★2) (2) ⑸ 를 α^3+β^3 대신 α^4+β^4 로 올리면 Mₖ 만 오르고 ★ 는 그대로(질 저하 방향이라 권하지 않음) (3) 「두 근이 모두 허수인데 대칭식 값은 실수인 이유」를 묻는 서술형으로 바꾸면 I-SYM d2 가 붙어 ★3."
```

```yaml
- id: GN-CM1-122-245
  page: 122
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    x^2-2x+4=0 의 두 근 α, β 에 대해 β/(α^2-α+4)+α/(β^2-β+4) 의 값 구하기.
  category: "근을 방정식에 대입해 분모의 차수를 낮춤 → 대칭식으로 환원 → 대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "α 가 근이므로 α^2=2α-4 임을 써서 분모 α^2-α+4 를 α 로 낮춘다(그냥 통분하면 4차식이 되어 막힘)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "근을 대입해 차수를 낮춘 뒤 대칭식의 값 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    분모를 그대로 통분하면 4차 대칭식이 되어 사실상 막힌다. α^2-2α+4=0 을 α^2=2α-4 로 옮겨
    분모를 α, β 로 줄이면 식이 β/α+α/β=(α^2+β^2)/(αβ) 로 환원되고 α+β=2, αβ=4 를 대입해 끝난다.
    「근은 방정식을 만족한다」를 분모 정리에 쓰는 착안 1개(EQV d2)가 풀이의 전부다.
    확인체크 출발점 ★2 이지만 이 한 착안이 없으면 진입이 막히므로 ★3 으로 올렸다.
    [분류 이슈] +1 근거가 규칙의 「통찰 2개 이상 또는 depth 3」이 아니라 depth 2 통찰 1개의 진입 저항이다.
  tier: star_3
  mechanism_primary: "α^2=2α-4 로 분모 차수 낮추기 → β/α+α/β=(α^2+β^2)/αβ → 근과 계수의 관계 대입"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/122-245.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x^2-2x+4 의 계수와 분모 상수를 함께 바꿔야 한다. 제약: 분모가 α^2-α+4 처럼 「방정식 좌변 + 남는 일차식」으로 쪼개져 대입 후 단항이 되어야 하므로, 방정식이 x^2-px+q=0 이면 분모는 x^2-(p-1)x+q 꼴(대입하면 α 가 남는 꼴)로 맞춘다. 또 αβ≠0."
    creative: "(1) 분모를 대입 후 상수만 남게 설계하면 값이 (α+β)/상수 로 더 쉬워져 ★2 (2) 분모가 α^2+α+4 처럼 대입 후 3α 가 남게 하면 계수 처리 한 겹이 더해져 ★3 유지 (3) 「이 값이 실수임을 보여라」를 덧붙이면 켤레근 대칭 논증이 추가돼 I-SYM 까지 2통찰 ★4 후보."
```

```yaml
- id: GN-CM1-123-e10
  page: 123
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ x^2+ax+b=0 의 두 근이 -4, 2 일 때 ax^2+(a+b)x+b=0 의 두 근의 합 구하기.
    ⑵ x^2-ax+b=0 의 두 근이 α, β 이고 x^2-(a+1)x+2=0 의 두 근이 α+β, αβ 일 때 상수 a, b 구하기.
  category: "근과 계수의 관계를 두 방정식에 각각 적용 → 계수의 연립식 → 미정계수"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "근과 계수의 관계로 미정계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 두 근 -4, 2 에서 a, b 를 먼저 확정한 뒤 새 방정식에 다시 근과 계수의 관계를 쓰는 2층 구조다.
    ⑵ 는 첫 방정식에서 α+β=a, αβ=b 를, 둘째 방정식에서 (α+β)+αβ=a+1 과 (α+β)(αβ)=2 를 읽어
    a+b=a+1, ab=2 로 연립한다. 두 층 모두 같은 공식의 반복 적용이라 스키마 기준 「표준 공식 대입」이므로
    통찰 라벨은 붙이지 않았다. 필수 예제 ★2·M_total 7·통찰 0 → ★2.
  tier: star_2
  mechanism_primary: "각 방정식에 근과 계수의 관계 적용 → 두 식을 a, b 의 연립식으로 → 해"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $3$ \quad ⑵ $a=2$, $b=1$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/123-e10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 두 근(-4, 2)과 새 방정식의 계수 배치, ⑵ 의 둘째 방정식 상수항(2)을 바꿀 수 있다. 제약: ⑴ 의 새 방정식은 이차항 계수 a 가 0 이 되면 안 되고(두 근의 곱·합이 정의되어야 함), ⑵ 는 ab=상수 가 유리수 해를 갖도록 상수항을 a 의 값과 맞춰 고른다."
    creative: "(1) ⑴ 에서 「두 근의 합」 대신 「두 근의 곱」이나 「한 근이 정수인가」를 물으면 ★2 유지 (2) ⑵ 의 둘째 방정식 근을 α+β, αβ 대신 α^2+β^2, αβ 로 바꾸면 대칭식 변형이 한 겹 더 붙어 ★3 (3) a, b 를 구하지 않고 「a+b 의 값」만 묻도록 설계하면 연립을 끝까지 풀지 않는 지름길이 생겨 I-SC 후보."
```

```yaml
- id: GN-CM1-123-246
  page: 123
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ax^2+2x+b=0 의 두 근이 -1, 1/3 일 때 bx^2+ax+a-b=0 의 두 근의 곱 구하기(a, b 는 상수).
  category: "주어진 두 근으로 a, b 확정 → 새 방정식에 근과 계수의 관계 재적용"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "근과 계수의 관계로 미정계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    이차항 계수가 1 이 아니므로 합 -2/a, 곱 b/a 를 써야 한다는 점만 주의하면
    -2/a=-1+1/3, b/a=-1/3 에서 a, b 가 바로 나오고 새 방정식의 두 근의 곱은 (a-b)/b 다.
    123-e10⑴ 과 같은 2층 구조의 반복. 통찰 라벨 없음. 확인체크 ★2·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "합 -2/a·곱 b/a 로 a, b 확정 → 새 방정식의 두 근의 곱 (a-b)/b"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/123-246.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 근(-1, 1/3)과 일차항 계수(2)를 바꿀 수 있다. 제약: 합·곱에서 얻는 a 가 0 이 아니어야 하고, 새 방정식 bx^2+… 의 b 도 0 이 아니어야 두 근의 곱이 정의된다. 두 근을 유리수로 두면 a, b 가 정수로 떨어진다."
    creative: "(1) 새 방정식을 bx^2+ax+(a-b)=0 대신 (a+b)x^2-ax+b=0 처럼 계수 배치만 바꾸기(★2 유지) (2) 두 근 대신 「한 근이 -1 이고 두 근의 곱이 -1/3」으로 조건을 흩어 주면 조건 통합이 한 겹 붙어 ★3 (3) a, b 를 유리수가 아니라 「a, b 가 정수」로 제한하고 가능한 쌍을 모두 구하게 하면 I-VF 사후 기각이 붙어 ★3~4."
```

```yaml
- id: GN-CM1-123-247
  page: 123
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    x^2+ax+b=0 의 두 근이 α, β 이고 x^2-ax-b=0 의 두 근이 α-1, β-1 일 때 상수 a, b 구하기.
  category: "두 방정식의 근과 계수의 관계를 a, b 의 연립식으로 결합"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "근과 계수의 관계로 미정계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    α+β=-a, αβ=b 와 (α-1)+(β-1)=a, (α-1)(β-1)=-b 를 각각 쓰면
    -a-2=a 와 b+a+1=-b 라는 a, b 두 식이 나온다. 평행이동한 근을 다시 대칭식으로 전개하는 것까지
    모두 교재가 직전에 보여 준 절차라 통찰 라벨은 없다. 123-e10⑵ 와 같은 층. 확인체크 ★2 → ★2.
  tier: star_2
  mechanism_primary: "두 방정식 각각에 근과 계수의 관계 → (α-1)(β-1)=αβ-(α+β)+1 전개 → a, b 연립"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$a=-1$, $b=0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/123-247.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "평행이동 폭(-1)과 둘째 방정식의 부호 배치(-a, -b)를 바꿀 수 있다. 제약: 연립식이 a, b 에 대해 일차·일차로 남아 유일해를 갖도록 부호를 고른다. 이동 폭을 2 이상으로 키우면 곱 전개에서 상수항이 커질 뿐 구조는 같다."
    creative: "(1) 둘째 방정식의 근을 α+1, β+1 로 바꾸거나 2α, 2β 로 바꾸기(★2 유지) (2) a, b 를 구하지 말고 「두 방정식이 공통근을 가질 조건」으로 뒤집으면 I-BW 가 붙어 ★3 (3) 둘째 방정식의 근을 1/α, 1/β 로 두면 역수 근 관계(계수 뒤집기)를 알아채는 I-RT d2 가 붙어 ★3."
```

```yaml
- id: GN-CM1-124-e11
  page: 124
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ x^2-(k-1)x+k=0 의 두 근의 비가 2:3 일 때 실수 k 모두 구하기.
    ⑵ 9x^2-2kx+k-5=0 의 두 근의 차가 2 일 때 실수 k 모두 구하기.
  category: "두 근 사이의 관계를 매개변수로 옮김 → 근과 계수의 관계와 연립 → k"
  M: {s: 2, k: 3, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "⑴ 두 근의 비 2:3 을 두 근 2t, 3t 로 놓아 합·곱 두 식으로 옮긴다"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "⑵ 두 근의 차 2 를 (α-β)^2=(α+β)^2-4αβ=4 라는 계수만의 식으로 옮긴다(차는 대칭식이 아니므로 제곱해야 함)"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "두 근의 비·차 조건이 주어진 이차방정식의 미정계수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 소문항 모두 「근 사이의 관계 → 근과 계수의 관계에 넣을 수 있는 형태」로 바꾸는 착안이 핵심이고,
    ⑴ 은 매개변수 t 도입, ⑵ 는 차를 제곱해 대칭식화하는 서로 다른 착안이다(EQV 2개).
    그 뒤 t 를 소거하거나 분모를 정리하면 둘 다 k 에 대한 이차방정식이 되어 근이 두 개씩 나온다(Mₖ=3).
    필수 예제 ★2 출발 + 통찰 2개·M_total 8 → ★3.
  tier: star_3
  mechanism_primary: "비는 2t·3t 로, 차는 (α+β)^2-4αβ 로 옮김 → 근과 계수의 관계와 연립 → k 의 이차방정식"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $k=\dfrac{1}{6}$ 또는 $k=6$ \quad ⑵ $k=-3$ 또는 $k=12$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/124-e11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "비(2:3)·차(2)와 계수의 k 배치를 바꿀 수 있다. 제약: k 에 대한 이차식이 유리수 해를 갖도록 판별식을 완전제곱으로 맞추고, 「실수 k」라면 두 근이 실수여야 하므로 원 방정식의 판별식 조건도 답에서 살아남는지 확인해야 한다(조건 위배 값이 생기면 I-VF 가 추가된다)."
    creative: "(1) 비를 1:2, 3:4 로, 차를 다른 자연수로 바꾸기(★3 유지) (2) 「두 근의 차가 2 이하」로 부등호를 주면 범위 문제가 되어 ★4 (3) 조건을 「한 근이 다른 근의 제곱」으로 바꾸면 t, t^2 설정 후 삼차식이 나와 ★4 (4) k 값 중 두 근이 허수인 경우를 기각하게 설계하면 I-VF 가 붙어 ★4."
```

```yaml
- id: GN-CM1-124-248
  page: 124
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    x^2-(k-2)x+k+2=0 의 두 근의 차가 4 일 때 모든 실수 k 의 값의 합 구하기.
  category: "두 근의 차를 (α+β)^2-4αβ 로 옮김 → k 의 이차방정식 → 근의 합"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 근의 차 4 를 (α-β)^2=(α+β)^2-4αβ=16 이라는 계수만의 식으로 옮긴다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 근의 차 조건이 주어진 이차방정식의 미정계수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (k-2)^2-4(k+2)=16 을 정리하면 k 에 대한 이차방정식이 되고, 묻는 것이 「모든 k 의 합」이라
    k 를 개별로 구하지 않고 그 이차방정식에 다시 근과 계수의 관계를 써도 된다(다만 인수분해도 쉬워
    지름길이 필수는 아니므로 통찰로 카운트하지 않았다). 124-e11⑵ 의 확인체크. 확인체크 ★2 → ★2.
  tier: star_2
  mechanism_primary: "차 4 → (α+β)^2-4αβ=16 → k 의 이차방정식 → 두 근의 합"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/124-248.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "차(4)와 계수의 k 배치를 바꿀 수 있다. 제약: k 의 이차방정식이 실근을 두 개 가져야 「합」을 묻는 발문이 성립하고, 그 k 들이 모두 원 방정식의 실근 조건(판별식≥0)을 만족해야 한다. 아니면 발문을 「합」이 아니라 「가능한 k」로 바꿔야 한다."
    creative: "(1) 「모든 k 의 곱」·「큰 k 의 값」으로 묻기(★2 유지) (2) 차 조건을 비 조건으로 바꾸면 매개변수 설정형(124-250 형) (3) 얻은 k 중 하나가 두 근을 허수로 만들도록 계수를 설계하면 사후 기각이 생겨 I-VF d2 · ★3 (4) 「두 근의 차가 4 이상」으로 부등호화하면 ★4."
```

```yaml
- id: GN-CM1-124-249
  page: 124
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    x^2-(a+1)x+a=0 의 한 근이 다른 근의 3 배일 때 실수 a 를 모두 구하기.
  category: "배수 관계를 두 근 t, 3t 로 옮김 → 합·곱 연립 → t 소거 → a"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「한 근이 다른 근의 3배」를 두 근 t, 3t 로 놓아 4t=a+1, 3t^2=a 두 식으로 옮긴다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 근의 배수 관계가 주어진 이차방정식의 미정계수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    t, 3t 설정 후 a 를 소거하면 3t^2-4t+1=0 이 되어 t 두 값, 따라서 a 두 값이 나온다.
    이 식은 좌변이 (x-1)(x-a) 로 인수분해되므로 두 근이 1 과 a 임을 먼저 보면 3배 조건에서
    a=3 또는 a=1/3 이 즉시 나오는 더 빠른 갈래가 있다(필수는 아니라 I-SC 로 카운트하지 않고 기록만).
    124-e11⑴ 의 확인체크. 확인체크 ★2·통찰 1(d1) → ★2.
  tier: star_2
  mechanism_primary: "두 근을 t, 3t 로 → 4t=a+1, 3t^2=a 연립 → t 소거 → a 두 값"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{1}{3}$, $3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/124-249.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "배수(3)와 계수의 a 배치를 바꿀 수 있다. 제약: 인수분해 지름길을 살리려면 상수항과 일차항이 x^2-(a+1)x+a 처럼 (x-1)(x-a) 로 쪼개지는 형태를 유지하고, 지름길을 막으려면 일차항을 -(a+2) 처럼 어긋나게 둔다. t 의 해가 유리수로 떨어지게 판별식을 완전제곱으로."
    creative: "(1) 배수를 2배·4배로 바꾸기(★2 유지) (2) 「두 근의 비가 1:3」으로 문구만 바꾸면 같은 골조 (3) 인수분해 갈래와 매개변수 갈래가 모두 살아 있게 설계하고 「더 빠른 방법을 설명하라」를 붙이면 I-SC d2 · ★3 (4) a 를 정수로 제한하고 가능한 a 를 모두 세게 하면 I-VF · ★3."
```

```yaml
- id: GN-CM1-124-250
  page: 124
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    x^2-7x+k=0 의 두 근의 비가 2:5 일 때 x^2+kx-2k+3=0 의 두 근의 곱 구하기(k 는 실수).
  category: "비 조건을 2t, 5t 로 옮겨 k 확정 → 새 방정식에 근과 계수의 관계 재적용"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 근의 비 2:5 를 두 근 2t, 5t 로 놓으면 합 7t=7 에서 t 가 바로 정해진다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 근의 비 조건으로 미정계수를 정하고 다른 방정식에 적용하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    2t, 5t 로 놓으면 합이 7t=7 이라 t=1 이 즉시 나오고 두 근이 2, 5 로 확정돼 k=10.
    이어서 새 방정식의 두 근의 곱은 상수항 -2k+3 그대로다. 비 설정 착안 1개(d1)와
    2층 재적용으로 이루어진 확인체크. 확인체크 ★2·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "두 근을 2t, 5t 로 → 합 7t=7 에서 t=1 → k=10 → 새 방정식의 두 근의 곱 -2k+3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-17$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/124-250.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "비(2:5)와 첫 방정식의 일차항(-7)을 함께 바꾼다. 제약: 비의 항의 합이 일차항 계수를 나누어떨어지게 해야 t 가 유리수로 떨어진다(2+5=7 이 7 을 나눔). 새 방정식은 k 의 일차식 계수만 바꾸면 되고 이차항 계수는 1 로 두어야 곱이 상수항 그대로다."
    creative: "(1) 「두 근의 곱」 대신 「두 근의 합」·「판별식의 부호」를 묻기(★2 유지) (2) 비를 2:5 대신 문자 m:n 으로 두면 Mₐ 가 올라 ★3 (3) 새 방정식의 이차항 계수를 k 로 두면 k 가 분모에 들어가 한 겹 더 붙음(★3) (4) t 가 유리수가 아니게 설계하면 비 설정의 이점이 사라져 질이 떨어지므로 피한다."
```

```yaml
- id: GN-CM1-125-e12
  page: 125
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    x^2+x+2=0 의 두 근 α, β 에 대해 ⑴ 1/α, 1/β 를 두 근으로 하고 x^2 의 계수가 2 인 이차방정식
    ⑵ α^2-1, β^2-1 을 두 근으로 하고 x^2 의 계수가 1 인 이차방정식 구하기.
  category: "새 두 근의 합·곱을 기본대칭식으로 계산 → a{x^2-(합)x+(곱)}=0"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 수를 근으로 하는 이차방정식 만들기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    α+β=-1, αβ=2 에서 ⑴ 은 합 (α+β)/αβ, 곱 1/αβ, ⑵ 는 합 (α+β)^2-2αβ-2, 곱 (αβ)^2-(α^2+β^2)+1 을
    계산하면 끝이다. 통찰 라벨이 붙는 단계는 없고, 함정은 x^2 의 계수가 1 이 아닐 때 전체에 2 를
    곱하는 것(T-표기)과 합의 부호(T-부호) 둘이라 Mₜ=2. 필수 예제 ★2 → ★2.
  tier: star_2
  mechanism_primary: "새 두 근의 합·곱을 α+β·αβ 로 환원 → a{x^2-(합)x+(곱)}=0 에 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $2x^2+x+1=0$ \quad ⑵ $x^2+5x+8=0$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/125-e12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "원 방정식 x^2+x+2 의 계수와 지정 이차항 계수(2, 1)를 바꿀 수 있다. 제약: ⑴ 은 1/α, 1/β 를 쓰므로 αβ≠0(상수항≠0), 그리고 계수를 곱한 결과가 정수 계수로 떨어지도록 지정 계수를 αβ 의 분모와 맞춘다."
    creative: "(1) 새 근을 α+2, β+2 나 α/β, β/α 로 바꾸기(★2 유지) (2) 새 근을 α^3, β^3 로 올리면 Mₖ 만 오름(125-252 형) (3) 「두 근이 모두 허수인 이차방정식을 실계수로 만들 수 있는 이유」를 묻는 서술형은 I-SYM d2 · ★3 (4) 지정 계수를 문자 a 로 두고 정수 계수가 되는 최소 a 를 묻는 역방향은 I-BW · ★3."
```

```yaml
- id: GN-CM1-125-251
  page: 125
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    2x^2-5x+4=0 의 두 근 α, β 에 대해 α+1, β+1 을 두 근으로 하고 x^2 의 계수가 2 인 이차방정식 구하기.
  category: "평행이동한 두 근의 합·곱 계산 → a{x^2-(합)x+(곱)}=0"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 수를 근으로 하는 이차방정식 만들기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    이차항 계수가 1 이 아니므로 α+β=5/2, αβ=2 를 먼저 정확히 읽는 것이 첫 함정(T-표기).
    새 두 근의 합은 α+β+2, 곱은 αβ+(α+β)+1 로 바로 나오고 마지막에 전체에 2 를 곱한다.
    통찰 라벨 없음. 125-e12 의 확인체크. 확인체크 ★2·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "α+β=5/2·αβ=2 → 새 합 α+β+2·새 곱 αβ+(α+β)+1 → 2{x^2-(합)x+(곱)}=0"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2x^2-9x+11=0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/125-251.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "원 방정식 2x^2-5x+4 의 세 계수와 평행이동 폭(+1), 지정 이차항 계수(2)를 바꿀 수 있다. 제약: 지정 계수가 원 방정식의 이차항 계수와 같아야 답이 정수 계수로 떨어진다(분모 2 가 상쇄). 다르게 두면 분수 계수가 남으므로 의도한 경우에만."
    creative: "(1) 이동 폭을 -1, +3 으로 바꾸기(★2 유지) (2) 새 근을 2α, 2β 로 두면 합·곱이 각각 2배·4배라는 배율 관계를 쓰는 지름길이 생김(★2) (3) 「원 방정식을 x 대신 x-1 로 바꾼 식이 답과 같음」을 이용한 치환 갈래를 함께 묻게 하면 I-SC d2 · ★3 (4) 지정 계수를 1 로 두면 분수 계수가 남아 Mₖ 만 오르므로 피한다."
```

```yaml
- id: GN-CM1-125-252
  page: 125
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    x^2+3x-2=0 의 두 근 α, β 에 대해 α^3, β^3 을 두 근으로 하고 x^2 의 계수가 1 인 이차방정식 구하기.
  category: "세제곱 근의 합·곱을 기본대칭식으로 계산 → x^2-(합)x+(곱)=0"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 수를 근으로 하는 이차방정식 만들기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    α+β=-3, αβ=-2 에서 새 합은 (α+β)^3-3αβ(α+β), 새 곱은 (αβ)^3 로 각각 한 줄이다.
    세제곱 합 항등식은 122-e9⑵ 에서 이미 쓴 도구라 통찰 라벨은 붙이지 않았다.
    지정 계수가 1 이라 마지막 곱셈도 없다. 확인체크 ★2·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "새 합 (α+β)^3-3αβ(α+β)·새 곱 (αβ)^3 → x^2-(합)x+(곱)=0"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$x^2+45x-8=0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/125-252.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x^2+3x-2 의 두 계수를 바꿀 수 있다. 제약: (αβ)^3 가 커지므로 상수항은 절댓값 3 이하로 두어야 답의 계수가 다루기 쉬운 크기로 남는다. 세제곱 합이 큰 수가 되지 않게 α+β 도 작은 정수로."
    creative: "(1) 새 근을 α^2, β^2 로 낮추면 Mₖ 가 내려가 ★1~2 (2) 새 근을 1/α^2, 1/β^2 로 두면 역수+제곱 두 겹이라 ★3 (3) 「원 방정식의 두 근이 무리수인데 새 방정식의 계수가 정수인 이유」를 묻는 서술형은 I-SYM d2 · ★3 (4) 새 근을 α^3, β^3 로 두되 지정 계수를 2 로 바꾸면 T-표기 함정이 하나 늘어난다."
```

```yaml
- id: GN-CM1-126-e13
  page: 126
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ x^2-2x+6 ⑵ 2x^2+4x-5 를 복소수의 범위에서 인수분해하기.
  category: "근의 공식으로 두 근 → a(x-α)(x-β) 로 복원"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차방정식의 근을 이용한 복소수 범위의 인수분해"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 판별식이 음수라 근이 1±√5 i, ⑵ 는 (-2±√14)/2 로 무리수 근이다.
    둘 다 근의 공식으로 구한 근을 교재 직전 공식 a(x-α)(x-β) 에 넣는 표준 절차라 통찰 라벨은 없다.
    함정은 ⑵ 처럼 이차항 계수를 앞에 곱하지 않는 것(T-표기)과 허수 부호(T-부호) 둘이라 Mₜ=2.
    p1 의 121-243 에서 「실수→복소수 범위 전환을 I-RT d1 로 볼지」를 이미 이슈로 남겼고
    같은 판단(절차형)을 유지한다. 필수 예제 ★2 → ★2.
  tier: star_2
  mechanism_primary: "근의 공식으로 두 근 α, β → a(x-α)(x-β)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $(x-1-\sqrt{5}\,i)(x-1+\sqrt{5}\,i)$ \quad ⑵ $2\left(x+\dfrac{2-\sqrt{14}}{2}\right)\left(x+\dfrac{2+\sqrt{14}}{2}\right)$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/126-e13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 이차식의 계수를 바꿀 수 있다. 제약: ⑴ 은 판별식이 음수(허근), ⑵ 는 양수이되 완전제곱이 아니어야(무리근) 두 경우를 모두 훈련시키는 원래 의도가 살아난다. 이차항 계수가 1 이 아닌 쪽을 하나 남겨 T-표기 함정을 유지한다."
    creative: "(1) 유리수 범위·실수 범위·복소수 범위에서 각각 인수분해하게 해 범위 개념을 대비시키기(★3 · I-MI d1) (2) 인수분해 결과를 주고 원 이차식을 복원하게 하는 역방향(★2 · I-BW d1) (3) 「복소수 범위에서는 모든 이차식이 일차식의 곱으로 쪼개진다」를 근거와 함께 서술하게 하면 ★3."
```

```yaml
- id: GN-CM1-126-e14
  page: 126
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["발전"]
  category_type: "발전 예제"
  summary: |
    이차방정식 f(x)=0 의 두 근의 합이 6 일 때 f(5x-7)=0 의 두 근의 합 구하기.
  category: "f(5x-7)=0 의 근 대응(5x-7 이 f 의 근) → 근을 역으로 표현 → 합"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f(5x-7)=0 의 해 x 는 5x-7 이 f 의 근 p, q 와 같아지는 값이라는 대응을 세운다(f 의 식을 모르는 채로 근만으로 처리)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "f(x)=0 과 f(ax+b)=0 의 근의 관계"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f 의 식이 주어지지 않아 계수로 접근할 수 없고, 「5x-7=p 또는 5x-7=q」라는 근 대응을 세우는 것이
    풀이의 전부다. 대응을 세우면 두 근이 (p+7)/5, (q+7)/5 이므로 합은 (p+q+14)/5 로 p+q=6 만 있으면 된다.
    추상 함수 f 를 다루므로 Mₐ=3 이고 계산은 거의 없다(Mₖ=1). 발전 예제 ★3 출발·통찰 1(d2) → ★3.
  tier: star_3
  mechanism_primary: "5x-7=p, 5x-7=q → 두 근 (p+7)/5, (q+7)/5 → 합 (p+q+14)/5"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$4$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/126-e14.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "치환식 5x-7 의 두 계수와 두 근의 합(6)을 바꿀 수 있다. 제약: 일차항 계수가 0 이면 안 되고(치환이 일대일이어야 함), 답이 유리수로 떨어지게 (p+q+2·상수)/계수 가 정리되는 값으로 고른다. 두 근의 곱을 묻는 변형이라면 곱 조건도 함께 줘야 한다(126-254 형)."
    creative: "(1) 「두 근의 곱」·「두 근의 차」를 묻기 — 곱은 p+q 와 pq 가 모두 필요해 조건이 하나 더 붙고, 차는 곱 없이도 되므로 난이도가 갈림(★3) (2) f 를 구체적 이차식으로 주면 대응 착안이 필요 없어져 ★1~2 로 떨어짐(주의: 이 문항의 핵심을 없앤다) (3) f(x^2)=0 처럼 이차 치환으로 바꾸면 사차방정식이 되어 근의 개수 분기가 생겨 I-MI 추가 ★4."
```

```yaml
- id: GN-CM1-126-253
  page: 126
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴ x^2+6x+4 ⑵ 3x^2-2x+2 를 복소수의 범위에서 인수분해하기.
  category: "근의 공식으로 두 근 → a(x-α)(x-β) 로 복원"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차방정식의 근을 이용한 복소수 범위의 인수분해"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 무리근 -3±√5, ⑵ 는 허근 (1±√5 i)/3 으로 126-e13 과 같은 두 경우를 반복한다.
    ⑵ 는 이차항 계수 3 을 앞에 곱해야 하는 T-표기 함정이 그대로 살아 있다.
    통찰 라벨 없음. 126-e13 의 확인체크. 확인체크 ★2·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "근의 공식으로 두 근 α, β → a(x-α)(x-β)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $(x+3-\sqrt{5})(x+3+\sqrt{5})$ \quad ⑵ $3\left(x-\dfrac{1+\sqrt{5}\,i}{3}\right)\left(x-\dfrac{1-\sqrt{5}\,i}{3}\right)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/126-253.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 이차식의 계수를 바꿀 수 있다. 제약: 한 쪽은 판별식 양수이되 완전제곱이 아니게, 다른 쪽은 음수가 되게 유지한다. 이차항 계수를 3 처럼 1 이 아닌 값으로 두면 답의 분모가 그 값이 되므로 근호 안이 작은 수여야 정리가 깔끔하다."
    creative: "(1) 세 이차식을 주고 「유리수 범위에서 인수분해되는 것은?」으로 묻는 선별형(★2 · I-VF d1) (2) 인수분해 결과의 두 인수의 합·곱을 묻게 하면 근과 계수의 관계로 되돌아오는 순환 구조(★3) (3) 계수를 문자로 두고 복소수 범위 인수분해가 실계수 두 일차식이 되는 조건을 묻기(★3 · I-BW)."
```

```yaml
- id: GN-CM1-126-254
  page: 126
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    f(x)=0 의 두 근 α, β 에 대해 α+β=3, αβ=4 일 때 f(2x-1)=0 의 두 근의 곱 구하기.
  category: "f(2x-1)=0 의 근 대응 → 두 근을 (α+1)/2, (β+1)/2 로 → 곱"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f(2x-1)=0 의 해 x 는 2x-1 이 f 의 근 α, β 와 같아지는 값이라는 대응을 세운다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "f(x)=0 과 f(ax+b)=0 의 근의 관계"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    126-e14(발전 예제)의 확인체크라 출발점을 ★3 으로 잡았다. 대응을 세우면 두 근이 (α+1)/2, (β+1)/2 이고
    곱은 (αβ+α+β+1)/4 이므로 주어진 두 조건이 모두 쓰인다(합만 필요했던 e14 와 갈리는 지점).
    f 가 추상 함수라 Mₐ=3, 계산은 한 줄(Mₖ=1). 통찰 1(d2)·M_total 7 → ★3.
  tier: star_3
  mechanism_primary: "2x-1=α, 2x-1=β → 두 근 (α+1)/2, (β+1)/2 → 곱 (αβ+α+β+1)/4"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/126-254.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "치환식 2x-1 의 두 계수와 α+β, αβ 값을 바꿀 수 있다. 제약: 곱을 묻는다면 분모가 (일차항 계수)^2 이므로 αβ+(합)+1 이 그 제곱으로 나누어떨어지게 맞춰야 답이 정수가 된다. 일차항 계수는 0 이 아니어야 한다."
    creative: "(1) 「두 근의 합」으로 바꾸면 αβ 조건이 불필요해져 ★3 유지·군더더기 조건 점검 문제가 됨 (2) 「두 근의 차」를 물으면 (α-β)^2 로 되돌아가 대칭식 변형이 한 겹 더 붙어 ★4 (3) 치환식을 -3x+2 처럼 음수 계수로 두면 부호 함정이 추가(★3) (4) 조건을 f(0), f(1) 값으로 주면 근과 계수의 관계를 거꾸로 복원해야 해 ★4."
```

```yaml
- id: GN-CM1-127-e15
  page: 127
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ x^2+ax+b=0 의 한 근이 3-√2 일 때 유리수 a, b 에 대해 a+b.
    ⑵ x^2+ax+b=0 의 한 근이 1+2i 일 때 실수 a, b 에 대해 a-b.
  category: "켤레근 정리로 다른 근 확정 → 근과 계수의 관계로 a, b"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차방정식의 켤레근의 성질"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 계수가 유리수라 다른 근이 3+√2, ⑵ 는 계수가 실수라 다른 근이 1-2i 다.
    나머지는 합=-a, 곱=b 대입 한 줄. 교재 직전 정리를 그대로 쓰는 표준 절차라 통찰 라벨은 없다.
    함정은 「계수가 유리수/실수」라는 전제를 확인하는 것(T-범위)과 켤레의 부호(T-부호) 둘이라 Mₜ=2.
    필수 예제 ★2·통찰 0·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "켤레근으로 다른 근 확정 → 두 근의 합=-a·곱=b → a, b"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $1$ \quad ⑵ $-7$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/127-e15.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주어진 근(3-√2, 1+2i)의 실수부·근호 안 수를 바꿀 수 있다. 제약: ⑴ 은 계수가 유리수여야 켤레근 정리가 성립하므로 근호 안이 유리수의 제곱이면 안 되고, ⑵ 는 허수부가 0 이 아니어야 한다. a, b 가 정수로 떨어지게 실수부·허수부를 정수로."
    creative: "(1) 묻는 값을 ab, a-b, a^2+b^2 으로 바꾸기(★2 유지) (2) 「계수가 유리수라는 조건이 없으면 어떻게 되는가」를 묻는 서술형은 전제 검증이 핵심이 되어 ★3 (3) 근을 1/(1+2i) 처럼 유리화가 필요한 꼴로 주면 한 겹 추가(127-257 형 ★3) (4) 「한 근이 3-√2 이고 다른 근이 정수」처럼 켤레근 정리를 못 쓰게 조건을 틀면 I-VF · ★4."
```

```yaml
- id: GN-CM1-127-255
  page: 127
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    x^2+ax-b=0 의 한 근이 √2+1 일 때 유리수 a, b 에 대해 ab 의 값 구하기.
  category: "켤레근 정리로 다른 근 확정 → 근과 계수의 관계로 a, b → ab"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차방정식의 켤레근의 성질"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    다른 근은 1-√2. 합 2=-a, 곱 -1=-b 에서 a, b 가 바로 나온다.
    상수항이 -b 라서 곱에 부호를 한 번 더 뒤집어야 하는 것만 추가 함정(T-부호).
    127-e15⑴ 의 확인체크. 통찰 라벨 없음. 확인체크 ★2·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "켤레근 1-√2 → 합 -a·곱 -b → a, b → ab"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/127-255.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주어진 근(√2+1)의 근호 안 수와 실수부, 상수항의 부호 배치(-b)를 바꿀 수 있다. 제약: 계수가 유리수여야 하므로 근호 안은 제곱수가 아닌 자연수로, ab 가 0 이 되지 않게(곱이 0 인 근 배치 회피) 실수부를 고른다."
    creative: "(1) 묻는 값을 a+b, a/b 로 바꾸기(★2 유지) (2) 이차항 계수를 2 로 두면 합·곱에 분모가 생겨 Mₖ 한 겹 추가(★2~3) (3) 「a, b 가 유리수」를 「a, b 가 정수」로 바꾸고 가능한 근을 찾게 하는 역방향은 I-BW · ★3 (4) 근을 √2+1 대신 √2+√3 으로 주면 이차방정식으로는 켤레근 정리가 통하지 않아(사차) 좋은 반례 토론거리."
```

```yaml
- id: GN-CM1-127-256
  page: 127
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    x^2+6x+a=0 의 한 근이 b+√3 i 일 때 실수 a, b 에 대해 a+b 의 값 구하기.
  category: "켤레근 정리로 다른 근 확정 → 합에서 b, 곱에서 a"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차방정식의 켤레근의 성질"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    다른 근이 b-√3 i 이므로 합 2b=-6 에서 b 가 먼저 나오고, 곱 b^2+3=a 에서 a 가 나온다.
    미지수가 근 쪽(b)과 계수 쪽(a)에 하나씩 있어 순서를 잡아야 하지만 여전히 표준 절차다.
    127-e15⑵ 의 확인체크. 통찰 라벨 없음. 확인체크 ★2·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "켤레근 b-√3 i → 합 2b=-6 으로 b → 곱 b^2+3=a 로 a → a+b"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$9$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/127-256.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항 계수(6)와 허수부의 근호 안 수(3)를 바꿀 수 있다. 제약: 계수가 실수여야 하고 b 는 일차항 계수의 절반의 부호 반대이므로 짝수로 두면 b 가 정수. 허수부가 0 이 되면 문제가 무너지므로 근호 안은 양수."
    creative: "(1) 묻는 값을 ab, a-b 로 바꾸기(★2 유지) (2) 허수부를 √c 로 두고 a, b, c 세 미지수를 조건 하나로 묶으면 부정이 되어 추가 조건이 필요해짐(★3 · 조건 설계 훈련) (3) 「이 방정식이 허근을 가질 a 의 범위」를 함께 묻게 하면 판별식이 들어와 ★3 (4) 근을 b+√3 i 대신 b+bi 로 두면 합·곱 두 식이 b 에 대한 연립이 되어 ★3."
```

```yaml
- id: GN-CM1-127-257
  page: 127
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    5x^2+ax+b=0 의 한 근이 1/(1+2i) 일 때 ax^2-5x-b=0 의 해 구하기(a, b 는 실수).
  category: "근을 유리화해 a+bi 꼴로 → 켤레근으로 a, b → 새 방정식을 근의 공식으로"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "1/(1+2i) 를 분모의 켤레로 유리화해 (1-2i)/5 꼴로 바꿔야 켤레근 정리를 적용할 수 있다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "켤레근의 성질로 계수를 정하고 다른 방정식의 해 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    주어진 근이 분수 꼴이라 먼저 유리화해야 켤레근 정리가 보인다. 그다음 두 근의 합·곱을
    5x^2+ax+b=0 의 -a/5, b/5 와 맞춰 a, b 를 정하고, 마지막에 새 방정식 ax^2-5x-b=0 을
    근의 공식으로 푼다. 유리화 → 켤레근 → 새 방정식 풀이의 3층 구조라 이 범위 확인체크 중 가장 길다.
    [분류 이슈] 확인체크 ★2 출발에서 +1 한 근거가 규칙의 통찰 개수·depth 가 아니라 M_total 8 과 3층 구조다.
  tier: star_3
  mechanism_primary: "1/(1+2i) 유리화 → 켤레근으로 합·곱 → a, b → ax^2-5x-b=0 을 근의 공식으로"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$x=\dfrac{-5\pm\sqrt{17}}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/127-257.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주어진 근의 분모(1+2i)와 첫 방정식의 이차항 계수(5)를 함께 바꿔야 한다. 제약: 유리화하면 분모가 |1+2i|^2=5 이므로 첫 방정식의 이차항 계수를 그 값으로 맞춰야 a, b 가 정수로 떨어진다. 새 방정식은 판별식이 완전제곱이 아니어도 되지만 양수로 두어야 해가 실수로 나온다."
    creative: "(1) 새 방정식을 bx^2+ax-5=0 처럼 계수 배치만 바꾸기(★3 유지) (2) 마지막에 해 대신 「두 근의 합」만 묻게 하면 근의 공식 단계가 사라져 ★2 (3) 주어진 근을 (1+i)/(1-i) 처럼 분모·분자 모두 복소수로 두면 유리화가 한 겹 더 붙어 ★3~4 (4) a, b 를 「실수」가 아니라 「정수」로 제한하고 가능한 쌍을 모두 구하게 하면 I-VF · ★4."
```

## 표본 판정 요약 (21문)

- ★ 분포: ★1 0 · ★2 16 · ★3 5 · ★4 0 · ★5 0
- 통찰형 8 · 절차형 13 · premium 0 (통찰은 전부 I-EQV 8개 · depth 1 이 5개, depth 2 가 3개 · I-XU/SC/VF/SYM 은 0)
- 구역: 「필수·발전 예제」 21문 — 필수 예제 6(122-e9 · 123-e10 · 124-e11 · 125-e12 · 126-e13 · 127-e15) · 발전 예제 1(126-e14) · 확인체크 14. 그림 없음 · vendor level 신호 없음
- type_hint 상위 5: 「두 수를 근으로 하는 이차방정식 만들기」 3 · 「근과 계수의 관계로 미정계수 구하기」 3 · 「이차방정식의 켤레근의 성질」 3 · 「근과 계수의 관계로 대칭식의 값 구하기」 2 · 「이차방정식의 근을 이용한 복소수 범위의 인수분해」 2 (나머지: 비 1 · 차 1 · 배수 1 · 비+재적용 1 · f(ax+b) 2 · 차수 낮추기 1 · 켤레근+다른 방정식 1)
- M_total 분포: 6 이 4문 · 7 이 15문 · 8 이 2문(평균 7.0). Mₐ=3 은 126-e14 · 126-254 둘뿐이고(추상 함수 f) 이 둘만 target_cohort 가 중상위권이다
- ★3 5문의 상승 경로: 통찰 2개(124-e11) · 발전 태그 출발(126-e14 · 126-254) · 진입 저항 depth 2 통찰(122-245) · 3층 구조와 M_total 8(127-257)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CM1-122-245 | 확인체크(★2 출발)인데 「α^2=2α-4 로 분모 차수 낮추기」 한 착안이 없으면 진입이 막힌다. +1 근거가 규칙의 「통찰 2개 이상 또는 depth 3」이 아니라 depth 2 통찰 1개의 진입 저항이라 ★3 으로 올리되 기록 | ★2 / ★3 |
| GN-CM1-127-257 | 확인체크(★2 출발)인데 유리화 → 켤레근 → 새 방정식 풀이의 3층·M_total 8. 통찰은 유리화 d1 하나뿐이라 규칙상 +1 근거가 M 뿐 | ★2 / ★3 |
| GN-CM1-126-254 | tag 는 「확인체크」지만 짝이 되는 상자 예제가 발전(126-e14)이라 출발점을 ★3 으로 잡았다. tag 만 보면 ★2 | ★2 / ★3 |
| GN-CM1-126-e13 · 126-253 | 실수→복소수 범위 전환을 I-RT d1 로 인정할지 경계(p1 의 121-243 과 같은 이슈). 교재 직전 공식의 직접 대입으로 보아 절차형 ★2 로 통일했으나, 통찰 인정 시 통찰형 ★2~3 | ★2 / ★3 |
| GN-CM1-124-249 | 좌변이 (x-1)(x-a) 로 인수분해되어 t, 3t 매개변수 갈래보다 현저히 빠른 갈래가 존재. I-SC d1 로 볼 수도 있으나 필수 경로가 아니라 카운트하지 않고 기록만 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고).

- **통합해도 되는 것**: ⑴ 「근과 계수의 관계로 대칭식의 값」(122-e9 · 122-244)은 소문항 개수·분수 여부만 다르므로 p1 의 121-240·121-241 과 한 유형으로 묶고 난이도 변주로 처리한다. ⑵ 「두 수를 근으로 하는 이차방정식 만들기」(125-e12 · 125-251 · 125-252)도 새 근이 역수·평행이동·세제곱으로만 갈리므로 p1 의 121-242 와 함께 한 유형(base ★2) + 변주 목록이면 충분하다. ⑶ 「켤레근의 성질」(127-e15 · 127-255 · 127-256)은 무리수 켤레와 허수 켤레가 전제(유리수 계수 / 실수 계수)만 다르고 골조가 같아 한 유형(base ★2)으로 둔다.
- **따로 세워야 하는 것**: ⑴ 「두 근의 비·차·배수 조건」(124-e11 · 124-248 · 124-249 · 124-250)은 조건을 매개변수 또는 (α-β)^2 로 옮기는 단계가 필수라 대칭식 유형과 분리한다(base ★2~3, 비/차 두 갈래를 소유형으로). ⑵ 「f(x)=0 과 f(ax+b)=0 의 근 관계」(126-e14 · 126-254)는 이 단원에서 유일하게 Mₐ=3(추상 함수)이고 계수 접근이 불가능하므로 독립 유형(base ★3). ⑶ 「근을 대입해 차수 낮추기」(122-245)는 대칭식 유형의 변주로 보기에는 진입 도구가 다르므로 별도 소유형(base ★3) 후보. ⑷ 「근과 계수의 관계로 미정계수」(123-e10 · 123-246 · 123-247)는 두 방정식을 연결하는 2층 구조라 값 구하기와 분리한다(base ★2).
- 이 파트에는 ★4 이상이 없다. 단원 15 의 ★4 후보(두 근의 부호 조건 · 정수근 · 판별식과 결합)는 3/3 파트를 본 뒤 결정하는 것이 맞다.
