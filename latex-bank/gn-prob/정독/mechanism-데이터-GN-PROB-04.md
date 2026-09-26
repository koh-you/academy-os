---
name: mechanism-데이터-GN-PROB-04
description: 개념원리 확률과 통계 04 이항정리(1/1 · 45~48쪽) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 확률과 통계 · 전사본 latex-bank/gn-prob
  section: 04 이항정리
  unit_code: GN-PROB-04
  part: "1/1"
  extract_range: "45~48쪽 · 45-83~48-91"
  total_problems: 12
  unit_total: 12
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-prob/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-prob/items/<id>.tex
  image_source: latex-bank/gn-prob/figures/ (crops.json · 이 범위는 그림 없음)
---

# 개념원리 확률과 통계 · 04 이항정리 (1/1) 정독 데이터 (v1.0)

이 파일은 45~48쪽 · 12문항(개념원리 익히기 3 · 필수 예제와 확인체크 9) 전수를 다룬다. 개념원리 고등은 구역과 태그가 난이도 층이라, 통번호 「개념원리 익히기」는 개념 확인(★1 출발), 「필수 예제」(태그 「필수」)와 그 뒤를 따르는 「확인체크」는 ★2 출발로 잡고 M_total·통찰로 ±1 조정했다. 이 단원에는 그림 문항·기출 태그·연습문제 구역이 없고 난이도 표기(level)도 없으므로 vendor_level 은 모두 `-` 다.

단원 골조는 세 겹으로만 늘어난다. ⑴ 일반항 nCr A^{n-r}B^r 을 쓰는 단계(45-83~45-85 · 46 구역), ⑵ 앞에 다른 인수가 곱해져 **기여가 둘 이상**이 되는 단계(47 구역), ⑶ 두 전개식의 차수 합으로 조합을 열거하는 단계(48 구역). 47·48 구역에서 「구하는 항이 한 곳에서만 나오지 않는다」를 읽어내는 착안을 I-EQV 통찰 1개로 일관되게 세었고, 그 판정 경계는 파일 끝 「분류 이슈 목록」에 남겼다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다. 특히 이 단원의 숫자 변형은 **지수 조건이 0 이상 n 이하의 정수해 r 을 갖는가**가 거의 모든 제약이라 `variation_notes.numeric` 에 그 조건을 문항별로 적었다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-PROB-45-83
  page: 45
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    (a-b)^6 의 이항정리 전개식에서 빈칸에 들어갈 이항계수와 지수를 채워 넣기.
  category: "이항정리 전개식의 꼴 → 이항계수·지수 자리 대응"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이항정리 전개식의 꼴(이항계수·지수 채우기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    일반항 nCr a^{n-r}(-b)^r 을 주어진 항과 자리별로 대응시키는 한 단계. 아래 줄의 수치 계수는 6C1=6, 6C2=15 를 그대로 쓰면 된다. 개념 확인 구역·통찰 0·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "일반항 6Cr a^{6-r}(-b)^r 과 주어진 항을 자리별로 대응 → 빈칸의 이항계수·지수 확정"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '${}_6\mathrm{C}_1$, ${}_6\mathrm{C}_4$, $5$, ${}_6\mathrm{C}_6$, $6$, $15$, $5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/45-83.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 n(4~8)과 둘째 항의 부호를 바꿀 수 있음. 제약: 빈칸을 계수 자리와 지수 자리 둘 다 남겨야 하고, 아래 줄에 쓰는 수치 계수가 nCr 값과 일치해야 한다."
    creative: "(1) (a+b)^n 으로 부호를 없애면 T-부호가 사라져 더 쉬움(★1) (2) 빈칸을 a 의 지수까지 넓혀 r 을 역으로 묻기(★2) (3) 전개식의 일부만 주고 남은 항을 모두 쓰게 하면 45-84 유형과 합쳐짐(★2)."
```

```yaml
- id: GN-PROB-45-84
  page: 45
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑶ 이항정리로 (2a+1)^4, (3x-2y)^5, (x+1/x)^6 을 전개하기.
  category: "일반항 대입 → 각 항의 계수·지수 계산 → 전개식 나열"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이항정리를 이용한 (a+b)^n 의 전개"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    셋 다 일반항에 그대로 대입하는 같은 절차. ⑵는 3^{5-r}(-2)^r 의 부호 교대, ⑶은 x 의 지수가 (6-r)-r 로 줄어 상수항 20 이 생기는 것만 주의하면 된다. 계산량은 많지만 통찰 0·개념 확인 구역이고 계산 마찰은 ★ 상승 신호로 보지 않으므로 ★1 유지. [분류 이슈] 계산량만 보면 ★2 로 볼 여지가 있음.
  tier: star_1
  mechanism_primary: "A, B 식별 → 일반항 nCr A^{n-r}B^r 을 r=0..n 에 대입 → 계수 곱과 지수를 정리해 나열"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $16a^4+32a^3+24a^2+8a+1$ ⑵ $243x^5-810x^4y+1080x^3y^2-720x^2y^3+240xy^4-32y^5$ ⑶ $x^6+6x^4+15x^2+20+\dfrac{15}{x^2}+\dfrac{6}{x^4}+\dfrac{1}{x^6}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/gn-prob/items/45-84.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 항의 계수(2a+1 → 3a+2)·지수 n(4~6)·부호를 바꿀 수 있음. 제약: n 이 7 이상이면 계산량만 늘고 변별이 없으며, ⑶형은 두 지수의 차가 0 이 되는 항(상수항)이 생기도록 n 을 짝수로 둔다."
    creative: "(1) 전개식 전체 대신 특정 계수만 묻기 → 46-e1 유형(★2) (2) (x+1/x)^6 의 상수항만 묻기(★2) (3) (1+x)^n 에 x=1 을 대입해 계수의 합을 묻는 쪽으로 틀면 이항계수 성질로 넘어감(★2~3 · I-RT)."
```

```yaml
- id: GN-PROB-45-85
  page: 45
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ (2a-3b)^5, (x^2+x)^4, (x-2/y)^6, (x^2+1/x)^8 의 전개식의 일반항 구하기.
  category: "A·B 식별 → 일반항 nCr A^{n-r}B^r → 계수·지수를 r 식으로 정리"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이항전개의 일반항 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    r 을 남겨 두므로 계산은 가볍고, A·B 를 무엇으로 볼지(x^2, 1/x, -2/y)만 정확하면 끝난다. 매개변수 r 이 들어가 Mₐ 2. 뒤 46~48 구역이 전부 이 일반항 위에서 돌아간다. 개념 확인 구역·통찰 0 → ★1.
  tier: star_1
  mechanism_primary: "A, B 식별 → 일반항 nCr A^{n-r}B^r 에 대입 → 계수와 문자 지수를 r 의 식으로 정리"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ ${}_5\mathrm{C}_r\times 2^{5-r}(-3)^r a^{5-r}b^r$ ⑵ ${}_4\mathrm{C}_r\, x^{8-r}$ ⑶ ${}_6\mathrm{C}_r(-2)^r\dfrac{x^{6-r}}{y^r}$ ⑷ ${}_8\mathrm{C}_r\,\dfrac{x^{16-2r}}{x^r}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/45-85.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 n 과 두 항의 계수·차수를 바꿀 수 있음. 제약: ⑷처럼 분모에 x 가 오면 최종 지수가 16-3r 같은 r 의 일차식이 되어야 하고, 뒤 유형(특정 항의 계수)으로 이어 쓰려면 목표 차수에서 정수해 r 이 0 이상 n 이하로 나와야 한다."
    creative: "(1) 일반항의 지수가 0 이 되는 r 을 묻기(★2) (2) 전개식에서 유리항·무리항의 개수를 세게 하면 ★3(I-MI) (3) (x+y+z)^n 의 일반항으로 넓히면 다항정리 → ★3."
```

### 필수·발전 예제

```yaml
- id: GN-PROB-46-e1
  page: 46
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑵ (2x+5y)^5 의 전개식에서 x^2y^3 의 계수, (x^2-1/(2x))^8 의 전개식에서 x^7 의 계수.
  category: "일반항 → 지수 조건을 r 일차방정식으로 → 계수 계산"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "(a+b)^n 전개식에서 특정 항의 계수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴은 y 의 차수에서 r=3 이 바로 나오고, ⑵는 x 지수 16-2r-r=7 에서 r=3 을 얻은 뒤 (-1/2)^r 부호·분수 계수를 곱하면 된다. 골조가 「지수 조건을 r 의 일차방정식으로 세운다」 한 단계라 통찰로 세지 않았다. 필수 예제 ★2 출발·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "일반항 nCr A^{n-r}B^r 의 지수를 r 식으로 → 목표 차수와 같다는 일차방정식으로 r 결정 → 계수 계산"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $5000$ ⑵ $-7$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-prob/items/46-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 항의 계수(2x+5y → 3x+2y)·지수 n·목표 항의 차수를 바꿀 수 있음. 제약: 지수 조건이 0 이상 n 이하의 정수해 r 을 가져야 하고, ⑵처럼 분모에 x 가 있으면 x 지수가 r 의 일차식(16-3r)이 되도록 차수를 맞춘다."
    creative: "(1) 계수 대신 상수항을 묻기(골조 동일 ★2) (2) 계수 값을 주고 미정계수를 역으로 묻기 → 46-87(★2) (3) 정수해 r 이 없어 그 항이 존재하지 않는 경우를 섞으면 사후 검증이 붙어 ★3(I-VF)."
```

```yaml
- id: GN-PROB-46-86
  page: 46
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑷ (2x-y)^7 의 x^4y^3 계수, (x-1/y)^6 의 x^3/y^3 계수, (2x^3+1/x)^8 의 상수항, (x^3-1/x)^10 의 1/x^2 의 계수.
  category: "일반항의 지수를 r 식으로 → 목표 차수 조건 → r 대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "(a+b)^n 전개식에서 특정 항의 계수·상수항"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    네 소문항이 같은 골조의 난이도 사다리다. ⑶은 지수 24-4r=0(상수항), ⑷는 30-4r=-2(음의 지수)로 조건만 넓어지고, 부호는 (-1)^r 하나만 관리하면 된다. 확인체크·통찰 0·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "일반항의 x(또는 y) 지수를 r 의 일차식으로 정리 → 목표 차수와 같다는 조건으로 r 결정 → 계수 계산"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $-560$ ⑵ $-20$ ⑶ $112$ ⑷ $45$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/46-86.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 항의 차수 조합(x^3 과 1/x)·지수 n·목표 차수를 바꿀 수 있음. 제약: 지수식 an-(a+b)r = 목표차수 가 0 이상 n 이하의 정수해를 가져야 하며, 해가 없으면 답이 계수 0 이 되므로 의도한 경우가 아니면 피한다."
    creative: "(1) 상수항이 없는 조합을 주고 이유를 쓰게 하면 ★3(I-VF) (2) 계수가 최대인 항을 묻기(연속 비 비교 ★3) (3) 소문항 두 개의 답을 더하게 묶으면 계산량만 늘고 골조는 그대로(★2)."
```

```yaml
- id: GN-PROB-46-87
  page: 46
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    (x-a/x^2)^6 의 전개식에서 상수항이 60 일 때 양수 a 의 값.
  category: "지수 조건으로 r 결정 → 상수항을 a 식으로 → 방정식 풀고 양수 채택"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "(a+b)^n 전개식의 상수항 조건에서 미정계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x 지수 6-3r=0 에서 r=2, 상수항은 6C2 a^2 = 15a^2 이므로 15a^2=60. 역방향처럼 보이지만 상수항을 먼저 구한 뒤 방정식을 푸는 표준 절차라 I-BW 로 세지 않았다(스키마의 단순 미정계수 대입 제외 규정). a=±2 중 양수만 남기는 T-부호 하나. 확인체크 ★2 유지.
  tier: star_2
  mechanism_primary: "일반항 6Cr x^{6-3r}(-a)^r → 지수 0 에서 r=2 → 15a^2=60 → 양수 조건으로 a=2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/46-87.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수항 값(60 → 240)·지수 n·분모의 차수를 바꿀 수 있음. 제약: 지수 조건 n-(1+k)r=0 이 정수해를 가져야 하고, r 이 홀수가 되면 (-a)^r 때문에 상수항 부호가 뒤집혀 양수 a 조건과 모순되므로 r 이 짝수로 떨어지게 n 을 고른다."
    creative: "(1) '양수' 조건을 빼면 두 값을 모두 검증해야 해 ★3(I-VF) (2) 상수항 대신 x^3 의 계수를 조건으로 주기(★2) (3) a 가 자연수일 때 상수항의 최솟값을 묻는 형태로 바꾸면 ★3."
```

```yaml
- id: GN-PROB-47-e2
  page: 47
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    (x^2+2)(x-1/x)^10 의 전개식에서 상수항.
  category: "앞 인수의 항마다 필요한 차수를 역산 → 두 기여의 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "상수항 조건을 '앞 인수의 x^2 에는 x^{-2} 항, 상수 2 에는 x^0 항' 이라는 두 개의 차수 조건으로 바꿔 읽음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "(a+b)(c+d)^n 전개식에서 특정 항의 계수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (x-1/x)^10 의 일반항 지수는 10-2r. 상수항이 한 곳에서 나오지 않고 x^2×(x^{-2} 항)과 2×(x^0 항)의 합이라는 것이 이 유형의 전부다. 나머지는 r=6, r=5 를 넣어 부호 (-1)^r 를 챙기는 계산. 기여 분해 착안 1개(EQV d1)·필수 ★2 출발 → ★2.
  tier: star_2
  mechanism_primary: "(x-1/x)^10 의 일반항 지수 10-2r → 앞 인수 각 항이 요구하는 차수(-2, 0)에서 r 을 각각 구함 → 두 곱을 더함"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-294$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-prob/items/47-e2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "앞 인수의 계수(x^2+2 → 2x^2-3)·뒤 인수의 지수 n·분모 차수를 바꿀 수 있음. 제약: 두 기여 모두에서 r 이 0 이상 n 이하의 정수로 나와야 하고, 지수식 n-2r 의 홀짝이 n 으로 고정되므로 n 을 짝수로 두어야 상수항 기여가 살아난다."
    creative: "(1) 상수항 대신 x^2 의 계수를 묻기(★2) (2) 앞 인수를 삼항식으로 늘려 기여를 3 개로 만들면 ★3 (3) 앞 인수의 계수를 미지수로 두고 상수항 값을 주면 역산이 붙어 47-89 형(★2~3)."
```

```yaml
- id: GN-PROB-47-88
  page: 47
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    (2x+3)(x-2/x)^5 의 전개식에서 x 의 계수.
  category: "앞 인수의 항마다 필요한 차수 역산 → 존재하는 기여만 계산"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x 의 계수 조건을 '2x 에는 x^0 항, 3 에는 x^1 항' 두 차수 조건으로 분해하고, 지수 5-2r 이 홀수뿐이라 앞쪽 기여가 아예 없음을 확인"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "(a+b)(c+d)^n 전개식에서 특정 항의 계수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (x-2/x)^5 의 일반항 지수는 5-2r 로 홀수만 나오므로 x^0 항이 없고, 3×(x^1 항, r=2) 하나만 살아남는다. 두 기여를 모두 따져 본 뒤 하나가 존재하지 않음을 확인하는 것이 47-e2 대비 덧붙은 지점. 기여 분해 통찰 1개·확인체크 ★2 → ★2.
  tier: star_2
  mechanism_primary: "(x-2/x)^5 의 일반항 지수 5-2r → 2x 짝 x^0 항 없음 · 3 짝 x^1 항 r=2 → 살아남은 기여 하나만 계산"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$120$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/47-88.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "앞 인수의 계수(2x+3)·뒤 지수 n·분모 계수 2 를 바꿀 수 있음. 제약: 지수 n-2r 의 홀짝이 n 으로 고정되므로 두 기여 중 하나는 자동으로 사라진다. 둘 다 살리려면 분모 차수를 올려 지수식을 n-3r 꼴로 만든다."
    creative: "(1) 분모를 2/x^2 로 바꿔 두 기여가 모두 살아나게 하면 단계가 늘어 ★3 근접 (2) 없는 항을 묻고 계수 0 을 답하게 하면 검증형 ★3(I-VF) (3) 앞 인수를 (2x+3)^2 로 올리면 48 구역 유형과 합쳐짐(★3)."
```

```yaml
- id: GN-PROB-47-89
  page: 47
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    x(x+a)(x+2)^4 의 전개식에서 x^4 의 계수가 32 일 때 상수 a 의 값.
  category: "앞 인수 정리 → 두 차수의 기여 합 → a 일차방정식"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x(x+a)=x^2+ax 로 묶어 x^4 조건을 '(x+2)^4 의 x^2 계수'와 'a 배한 x^3 계수' 두 기여의 합으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "(a+b)(c+d)^n 전개식의 계수 조건에서 미정계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    앞의 두 인수를 x^2+ax 로 먼저 정리하는 것이 요점. 그러면 x^4 는 x^2×(x^2 항) 과 ax×(x^3 항) 의 합이고, (x+2)^4 의 두 계수는 일반항 4Cr 2^r 로 바로 나온다. 마지막은 a 에 대한 일차방정식이라 역산 자체는 표준. 기여 분해 통찰 1개·확인체크 ★2 → ★2.
  tier: star_2
  mechanism_primary: "x(x+a)=x^2+ax 정리 → (x+2)^4 의 x^2·x^3 계수 → (x^2 계수)+a×(x^3 계수)=32 → a"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/47-89.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "(x+2)^4 의 상수 2·지수 4·목표 계수 32 를 바꿀 수 있음. 제약: a 의 계수가 0 이 되면 a 가 결정되지 않으므로 목표 차수를 x^3 이상으로 두고, a 가 정수로 떨어지도록 목표 계수를 고른다."
    creative: "(1) a 대신 (x+2)^n 의 지수 n 을 묻게 하면 조합 방정식이 되어 ★3(48-91 형) (2) x^3 의 계수를 조건으로 주면 기여가 셋으로 늘어 ★3 (3) a 가 자연수라는 조건에서 계수의 최댓값을 묻기(★3)."
```

```yaml
- id: GN-PROB-48-e3
  page: 48
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    (1+2x)^4(1-x)^5 의 전개식에서 x^2 의 계수.
  category: "차수 합이 2 인 조합 (i,j) 열거 → 계수 곱의 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x^2 계수 조건을 '두 전개식에서 뽑은 차수의 합이 2 인 모든 조합 (0,2),(1,1),(2,0)' 으로 바꿔 읽음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "(a+b)^m(c+d)^n 전개식에서 특정 항의 계수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    세 조합의 계수 곱을 모두 더해야 하고 (1-x)^5 쪽 (-1)^j 부호가 섞인다. 조합을 하나라도 빠뜨리면 답이 달라지는 것이 47 구역과 다른 지점(기여가 둘이 아니라 목표 차수 +1 개). 조합 열거 착안 1개·필수 ★2·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "(1+2x)^4 의 x^i 계수 × (1-x)^5 의 x^j 계수 를 i+j=2 인 세 조합에 대해 더함"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-6$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-prob/items/48-e3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 지수 m, n 과 항의 계수(2x, -x)·목표 차수를 바꿀 수 있음. 제약: 목표 차수 k 가 커지면 조합이 k+1 개로 늘어 계산만 무거워지므로 k 는 2~3 이 적당하고, i≤m · j≤n 을 넘는 조합은 제외해야 한다."
    creative: "(1) x^3 의 계수로 올려 조합 4 개(★3) (2) 한쪽 지수를 미지수 m 으로 두고 계수 값을 주면 48-91 형(★3) (3) 모든 계수의 합을 x=1 대입으로 묻는 쪽으로 틀면 대입 착안 ★2(I-RT)."
```

```yaml
- id: GN-PROB-48-90
  page: 48
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    (x+3)^4(3x^2+1)^3 의 전개식에서 x^4 의 계수.
  category: "차수 합이 4 인 조합 (i,j) 열거 → 3 의 거듭제곱이 붙은 계수 곱의 합"
  M: {s: 3, k: 3, a: 1, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "뒤 인수의 항이 x^2 단위로 뛰는 것을 반영해 x^4 조건을 i+2j=4 인 조합 (4,0),(2,1),(0,2) 으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "(a+b)^m(c+d)^n 전개식에서 특정 항의 계수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    뒤 인수가 (3x^2+1)^3 이라 차수가 2 씩 뛰고 계수에도 3^j 가 붙어, 조합 열거와 계수 계산이 48-e3 보다 한 겹씩 두껍다(세 조합의 기여가 1, 486, 2187 로 크기도 제각각이라 하나만 빠져도 티가 안 난다). 확인체크 ★2 출발이나 M_total 8·세 조합 열거로 +1 → ★3. [분류 이슈] 통찰 수는 48-e3 과 같고 계산량으로 올린 ★ 이라 ★2 로 볼 여지가 있음.
  tier: star_3
  mechanism_primary: "(x+3)^4 의 x^i 계수 4Ci 3^{4-i} × (3x^2+1)^3 의 x^{2j} 계수 3Cj 3^j 를 i+2j=4 인 세 조합에 대해 더함"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2674$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/48-90.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 상수(3)·지수(4, 3)·목표 차수를 바꿀 수 있음. 제약: 뒤 인수의 차수가 2 씩 뛰므로 목표 차수의 홀짝에 따라 살아남는 조합이 달라지고, 두 인수 모두에 3 의 거듭제곱을 두면 계산 마찰만 커지므로 한쪽 상수는 1~2 로 낮추는 편이 낫다."
    creative: "(1) x^3 처럼 홀수 차수를 물으면 조합이 둘로 줄어 ★2 (2) 상수를 1 로 낮추고 지수를 올려 조합 수만 늘리기(★3 · 계산 마찰 주의) (3) 계수 값을 주고 상수를 역으로 묻기(★3 · I-BW)."
```

```yaml
- id: GN-PROB-48-91
  page: 48
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    (1+x)^m(1+x^2)^5 의 전개식에서 x^2 의 계수가 11 일 때 자연수 m 의 값.
  category: "두 기여의 합을 m 식으로 → 조합 방정식 → 자연수 해 채택"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x^2 계수를 '(1+x)^m 의 x^2 항 × 1' 과 '1 × (1+x^2)^5 의 x^2 항' 두 기여의 합 mC2+5 로 옮김"
    - step: 2
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "계수 값 11 에서 거꾸로 mC2=6 을 세우고, 지수에 있는 m 을 m(m-1)=12 이차방정식으로 풀어 자연수 해만 채택"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "(a+b)^m(c+d)^n 전개식의 계수 조건에서 지수 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    지수가 미지수 m 이라 계수를 수치로 쓸 수 없고, mC2 를 m 의 이차식으로 두고 풀어야 한다는 점에서 48-90 과 다르다. 기여는 둘뿐이라 열거는 가볍지만 뒤에 이차방정식과 자연수 해 채택이 붙는다. 기여 분해 + 역방향 조합 방정식 통찰 2개 → 확인체크 ★2 출발에서 +1 → ★3.
  tier: star_3
  mechanism_primary: "x^2 기여 = mC2 + 5 → mC2=6 → m(m-1)=12 → 자연수 m=4"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/48-91.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 조건 값(11)·뒤 인수의 지수(5)·목표 차수를 바꿀 수 있음. 제약: 조건 값에서 뒤 인수 기여(5)를 뺀 수가 mC2 = m(m-1)/2 꼴의 삼각수여야 자연수 해가 나오고, m 은 2 이상이어야 x^2 항이 존재한다."
    creative: "(1) x^3 의 계수를 조건으로 주면 mC3 + 5·mC1 꼴 삼차방정식이 되어 ★4 근접 (2) 자연수 조건을 빼면 해가 둘이 되어 검증 단계가 사라짐(★2) (3) (1+x)^m(1+x^2)^n 에서 m, n 을 모두 미지수로 두고 두 계수 조건을 주면 연립 ★4(I-CON)."
```

## 표본 판정 요약 (12문)

- ★ 분포: ★1 3 · ★2 7 · ★3 2 · ★4 0 · ★5 0
- 통찰형 6 · 절차형 6 · premium 0
- 통찰 라벨 7개: I-EQV 6 · I-BW 1 (모두 depth 1 · depth_score 1.00 · 감쇠 대상 없음)
- type_hint 상위: 「(a+b)^n 전개식에서 특정 항의 계수·상수항」 3(46-e1·46-86·46-87) · 「(a+b)(c+d)^n 전개식」 3(47-e2·47-88·47-89) · 「(a+b)^m(c+d)^n 전개식」 3(48-e3·48-90·48-91) · 「이항정리 전개·일반항」 3(45-83·45-84·45-85)
- 대상층: 하위권 3 · 중하위권 3 · 중위권 6
- 그림: 0문(이 범위에 figure 있는 문항 없음)

## 분류 이슈 목록

판정이 애매하거나 벤더 신호와 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-PROB-45-84 | 5·6제곱 전개 3개라 계산량은 ★2급이나 통찰 0·개념 확인 구역이고 계산 마찰은 ★ 상승 신호로 보지 않아 ★1 유지 | ★1 / ★2 |
| GN-PROB-47-e2 계열(47-e2·47-88·47-89·48-e3·48-90·48-91) | 「구하는 항이 한 곳에서만 나오지 않는다」는 기여 분해를 I-EQV 통찰 1개로 셀지, 이 유형의 표준 절차로 볼지 경계. 이 파일은 6문 모두 통찰 1개로 일관 처리했고, 절차로 보면 47·48 구역이 전부 절차형 ★2 가 된다 | ★2 / ★3 |
| GN-PROB-48-90 | 통찰 수는 48-e3 과 같은 1개인데 세 조합 열거와 3 의 거듭제곱 계수(M_total 8)만으로 ★3 으로 올림. v3.8 이 경계하는 계산 마찰발 ★ 상승에 해당할 수 있음 | ★2 / ★3 |

## 카탈로그 차원 메모

나중에 확률과 통계 유형 카탈로그를 만들 때 참고.

- **반복된 type_hint 4계열**: ⑴ 이항정리 전개·일반항 ⑵ (a+b)^n 특정 항의 계수 ⑶ (a+b)(c+d)^n ⑷ (a+b)^m(c+d)^n. 12문이 3문씩 정확히 네 계열로 나뉜다.
- **따로 세워야 할 유형**: ⑵·⑶·⑷ 는 「목표 항에 기여하는 항의 개수」가 각각 1개 / 2개 / (목표 차수+1)개로 골조가 다르므로 분리한다. base ★ 는 ⑵ 2 · ⑶ 2 · ⑷ 2~3 이 이 범위 실측과 맞는다.
- **통합해도 될 유형**: 45-84(전개하기)와 45-85(일반항 구하기)는 같은 일반항 대입 한 단계라 base ★1 한 유형으로 묶어도 된다. 「상수항」은 ⑵ 의 목표 차수 0 인 특수 경우라 별도 유형으로 세우지 않아도 된다.
- **역방향 변형의 처리**: 46-87·47-89·48-91 은 각 base 유형의 「계수 조건 → 미정계수」 역방향 변형(+0)이다. 다만 48-91 처럼 **지수 자체를 묻는** 경우만 조합 방정식이 붙어 +1 이므로 별도 유형 후보로 남긴다.
- 이 단원에는 ★4~5 자격(SC/VF/SYM/XU)이 붙는 문항이 없다. 변형으로 ★4 를 만들려면 「존재하지 않는 항의 검증(I-VF)」이나 「두 계수 조건 연립(I-CON)」을 얹는 쪽이 계산량을 늘리는 쪽보다 낫다.
