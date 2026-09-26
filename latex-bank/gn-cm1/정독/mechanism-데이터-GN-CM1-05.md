---
name: mechanism-데이터-GN-CM1-05
description: 개념원리 공통수학1 05 다항식의 나눗셈(1/1 · 29~35쪽 · 31문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학1 (22개정 · 학생용 PDF) · 전사본 latex-bank/gn-cm1
  section: 05 다항식의 나눗셈
  unit_code: "05"
  part: "1/1"
  extract_range: "29~35쪽 · 29-34~35-60"
  total_problems: 31
  unit_total: 31
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·level·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). depth_score 는 insights 의 effective_depth 평균이고 절차형은 0.00. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm1/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm1/items/<id>.tex
  image_source: latex-bank/gn-cm1/figures/ (crops.json)
---

# 개념원리 공통수학1 · 05 다항식의 나눗셈 (1/1) 정독 데이터 (v1.0)

29~35쪽 31문항 전수다. 구역은 「개념원리 익히기」 4문 · 「필수·발전 예제」 10문(필수 예제 4 + 확인체크 6) · 「연습문제 STEP 1」 5문 · 「연습문제 STEP 2」 7문 · 「연습문제 실력 UP」 5문이다. 연습문제 구역은 대단원 「다항식」 전체를 묶어 내므로 앞 단원의 곱셈 공식·곱셈 공식의 변형이 절반쯤 섞여 있고, 나눗셈 고유 골조(A=BQ+R · 조립제법 · 제수 상수배 보정)는 예제 구역과 STEP 2 후반에 모여 있다.

벤더 난이도 신호는 구역과 태그다. 익히기(통번호 · 「확인체크」)는 개념 확인이라 ★1, 「필수」 예제와 그 뒤 확인체크는 ★2, STEP 1 은 ★2, STEP 2 는 ★3, 실력 UP 은 ★4 를 출발점으로 잡고 M_total·통찰로 ±1 조정했다. 「교육청 기출」 태그는 통찰이 실제로 늘어난 경우에만 반영했다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 사슬) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 설정 변형과 ★ 변동 지점)를 채웠다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-CM1-29-34
  page: 29
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "익히기"
  summary: |
    ⑴~⑶ 다항식을 단항식으로 나누기. 각 항을 제수로 나누어 정리한다.
  category: '단항식으로 나누기 → 항별 지수법칙 약분 → 부호 정리'
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '다항식을 단항식으로 나누기(항별 약분)'
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    각 항을 제수로 나누어 지수법칙으로 약분하는 한 갈래뿐이다. ⑶ 은 $b$ 의 지수가 모자라 $\dfrac{a}{b^3}$ 처럼 분수식 항이 남는 것만 주의한다(T-표기). 익히기 구역 출발 ★1 · 통찰 없음 · M_total 5 → ★1 유지.
  tier: star_1
  mechanism_primary: '각 항을 단항식으로 나눔 → 지수법칙 약분 → 부호 정리'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $-2ab-3c^2$ \quad ⑵ $2yz^3-x^2y^4z$ \quad ⑶ $-5a^2c^5+\dfrac{a}{b^3}-2a^4b^2c^8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/29-34.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '계수와 각 문자의 지수를 자유롭게 바꿀 수 있다. 제약 - 제수의 지수가 피제수 항보다 크면 분수식 항이 남으므로 답 형태를 분수 허용으로 할지 먼저 정한다. 제수 부호를 음수로 두면 항별 부호 실수를 유도할 수 있다.'
    creative: '(1) 몫과 제수를 주고 피제수를 묻는 역방향(★1 유지) (2) 나눈 결과가 다항식이 되도록 지수 조건을 묻기(I-BW d1 · ★2) (3) 두 단항식으로 연달아 나누기는 계산만 늘어 M 만 오르고 ★ 는 그대로.'
```

```yaml
- id: GN-CM1-29-35
  page: 29
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "익히기"
  summary: |
    ⑴⑵ 다항식의 세로셈 과정에서 빈칸을 채우고 몫과 나머지를 구한다.
  category: '세로셈 과정 복원 → 빈칸 채우기 → 몫·나머지 읽기'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '직접 나눗셈(세로셈) 과정 완성과 몫·나머지'
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    이미 배치된 세로셈을 따라가며 각 단계의 곱·차를 복원하면 되고 전략 선택이 없다. ⑵ 는 제수 $2x^2-1$ 에 일차항이 없어 자리를 비워 맞추는 것이 유일한 함정(T-표기). 익히기 구역 · 통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: '세로셈 각 단계의 곱을 복원 → 뺄셈으로 다음 줄 → 마지막 줄이 나머지'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ 몫: $x^2+2x-8$, 나머지: $9$ (빈칸 차례로 $x^2$, $2x^2$, $-8x$, $9$) \quad ⑵ 몫: $2x-1$, 나머지: $2x-5$ (빈칸 차례로 $1$, $4$, $-2x^2$, $2x$, $5$)'
  answer_source: "계산(답지 「풀이 8쪽」)"
  figure: none
  latex: latex-bank/gn-cm1/items/29-35.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '피제수 계수와 제수를 바꿀 수 있다. 제약 - 빈칸 위치가 답을 하나로 정하도록 해야 하고, 제수 최고차 계수가 1 이 아니면 몫의 계수가 분수가 되지 않는 조합만 고른다. 중간 차수 계수를 0 으로 두어 자리 맞춤 함정을 유지한다.'
    creative: '(1) 빈칸을 몫 쪽이 아니라 피제수 쪽에 두어 역추적으로 바꾸기(I-BW d1 · ★2) (2) 나머지가 0 이 되도록 상수항을 정하라고 묻기(★2) (3) 같은 세로셈을 조립제법과 나란히 놓고 대응을 묻기(I-RT d1 · ★2).'
```

```yaml
- id: GN-CM1-29-36
  page: 29
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "익히기"
  summary: |
    ⑴⑵ 제수·몫·나머지가 주어졌을 때 다항식 $f(x)$ 를 구한다.
  category: 'A=BQ+R 대입 → 전개 → 동류항 정리'
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: 'A=BQ+R 로 피제수 복원'
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    $f(x)=(제수)(몫)+(나머지)$ 에 그대로 대입해 전개하는 한 단계다. 나눗셈 등식의 방향을 바꾸는 착안이 필요 없어 통찰 0. 익히기 구역 · M_total 5 → ★1.
  tier: star_1
  mechanism_primary: 'f=BQ+R 에 주어진 B·Q·R 대입 → 전개 → 정리'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $x^3-2x^2-x+6$ \quad ⑵ $x^3+3x^2+3x+5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/29-36.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '제수·몫·나머지의 계수를 바꿀 수 있다. 제약 - 나머지의 차수가 제수의 차수보다 반드시 낮아야 하고(그렇지 않으면 문제 자체가 모순), 전개 결과의 계수가 정수로 떨어지게 고른다.'
    creative: '(1) 제수 대신 몫을 미지로 돌려 A 를 구하게 하면 나눗셈 한 번이 더 필요(I-BW d1 · ★2) (2) $f(x)$ 의 특정 계수나 $f(1)$ 만 묻기(전개 생략 착안 · ★2) (3) 나머지 차수 조건을 어긴 선택지를 넣어 판별하게 하면 T-범위 함정 추가(★2).'
```

```yaml
- id: GN-CM1-29-37
  page: 29
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "익히기"
  summary: |
    ⑴⑵ 조립제법 표의 빈칸을 채우고 몫과 나머지를 구한다.
  category: '조립제법 표 복원 → 빈칸 채우기 → 몫·나머지 읽기'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '조립제법 과정 완성(빠진 차수 계수 0)'
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    표 왼쪽 수와 내림·곱·더하기 규칙만 반복하면 채워진다. ⑴ 은 $x^3-5x+1$ 에 이차항이 없어 계수 $0$ 을 넣는 자리가 함정(T-표기). 익히기 구역 · 통찰 없음 · M_total 5 → ★1.
  tier: star_1
  mechanism_primary: '제수의 근을 왼쪽에 → 내림·곱·더하기 반복 → 마지막 칸이 나머지'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ 몫: $x^2-2x-1$, 나머지: $3$ (빈칸 차례로 $0$, $-5$, $4$, $2$, $-2$, $3$) \quad ⑵ 몫: $3x^2-x-3$, 나머지: $3$ (빈칸 차례로 $1$, $-4$, $-1$, $3$, $3$)'
  answer_source: "계산(답지 「풀이 8쪽」)"
  figure: none
  latex: latex-bank/gn-cm1/items/29-37.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '피제수 계수와 제수 $x-a$ 의 $a$ 를 바꿀 수 있다. 제약 - 빠진 차수를 하나 이상 남겨 계수 0 자리를 유지하고, $a$ 가 정수여야 표가 정수로 유지된다. 사차식으로 늘리면 표 칸만 늘고 골조는 같다.'
    creative: '(1) 왼쪽의 $a$ 를 빈칸으로 두고 표에서 역추적하게 하기(I-BW d2 · ★3 · 33-48 유형) (2) 제수를 $2x-1$ 처럼 최고차 계수가 1 이 아닌 꼴로 바꾸면 몫 보정이 붙어 ★2~3 (3) 나머지가 0 이 되도록 상수항을 정하기(★2).'
```

### 필수·발전 예제

```yaml
- id: GN-CM1-30-e12
  page: 30
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑷ 네 개의 다항식 나눗셈에서 몫과 나머지를 구한다(제수는 일차식 2개·이차식 2개).
  category: '차수 정렬 → 세로셈 반복 → 나머지 차수 조건에서 정지'
  M: {s: 2, k: 3, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '다항식의 나눗셈 - 몫과 나머지(직접 나눗셈)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    네 문제 모두 세로셈 한 갈래이고, 달라지는 것은 제수의 모양뿐이다. ⑵ 의 제수 $-x+3$ 은 최고차 계수가 음수, ⑶ 의 $x^2+2$ 는 일차항이 없어 자리를 비워야 한다(T-부호·T-표기). 필수 예제 구역 ★2 출발 · 통찰 0 이지만 M_total 7 이라 감점 없이 ★2.
  tier: star_2
  mechanism_primary: '내림차순 정렬 → 최고차항끼리 나눠 몫 항 결정 → 빼기 반복 → 나머지 차수 < 제수 차수에서 정지'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ 몫: $2x-2$, 나머지: $5$ \quad ⑵ 몫: $3x^2+2x+12$, 나머지: $-41$ \quad ⑶ 몫: $2x-9$, 나머지: $13x+15$ \quad ⑷ 몫: $x^2+4x+3$, 나머지: $-3x+3$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/30-e12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '피제수·제수 계수를 바꿀 수 있다. 제약 - 제수의 최고차 계수가 피제수 계수를 나누어떨어지게 해야 몫이 정수 계수로 남고, ⑶⑷ 처럼 이차 제수일 때는 나머지가 일차식까지 허용됨을 답 형식에 반영한다. 빠진 차수를 한 문항에는 반드시 남긴다.'
    creative: '(1) 몫이나 나머지 중 하나만 묻고 나머지는 조건으로 주기(★2) (2) 나머지가 0 이 되는 상수를 찾게 하면 역방향(I-BW d1 · ★3) (3) 같은 나눗셈을 조립제법으로도 풀 수 있는 제수로 바꿔 두 방법을 비교하게 하면 I-SC d1 · ★3.'
```

```yaml
- id: GN-CM1-30-38
  page: 30
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    사차식을 $2x^2-x+1$ 로 나눈 몫이 $x^2+ax+b$, 나머지가 $cx-2$ 일 때 $a+b+c$.
  category: '직접 나눗셈 → 몫·나머지 계수 비교 → 합'
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '몫·나머지의 미정계수 결정(계수 비교)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    나눗셈을 끝까지 수행한 뒤 몫·나머지를 주어진 꼴과 비교해 $a$, $b$, $c$ 를 읽으면 된다. 항등식을 세워 전개하는 우회도 가능하지만 이득이 없어 전략 분기로 보지 않았다. 예제 구역 ★2 · 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: '피제수를 제수로 나눔 → 몫·나머지를 $x^2+ax+b$, $cx-2$ 와 계수 비교 → $a+b+c$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/30-38.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '피제수·제수 계수와 묻는 조합($a+b+c$, $abc$, $a-b$)을 바꿀 수 있다. 제약 - 몫의 최고차 계수가 1 이 되도록 피제수 최고차 계수를 제수 최고차 계수의 배수로 잡고, 나머지 상수항을 문제에서 고정했으므로 실제 나눗셈 결과와 일치해야 한다.'
    creative: '(1) 나머지를 $cx+d$ 로 열어 두고 $c+d$ 를 묻기(★2) (2) 몫의 계수 하나를 조건으로 주고 피제수의 미지 계수를 구하게 하면 역방향(I-BW d2 · ★3) (3) 나머지가 상수가 되게 하는 조건을 묻기(★3).'
```

```yaml
- id: GN-CM1-30-39
  page: 30
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $x^3-2x+1$ 을 $x^2+x+1$ 로 나눈 몫 $Q(x)$, 나머지 $R(x)$ 에 대하여 $Q(3)+R(-1)$.
  category: '직접 나눗셈 → 몫·나머지 식 확정 → 수치 대입'
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '나눗셈의 몫·나머지에 값 대입'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    나눗셈 한 번으로 $Q(x)$, $R(x)$ 를 얻고 각각 대입하면 끝난다. M_total 5 라 −1 후보이지만, 이차식으로 나누는 세로셈과 서로 다른 두 값의 대입이 겹쳐 예제 구역 출발점 ★2 를 유지했다.
  tier: star_2
  mechanism_primary: '$x^3-2x+1 \div (x^2+x+1)$ → $Q(x)$, $R(x)$ → $Q(3)$, $R(-1)$ 대입 후 합'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/30-39.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '피제수·제수와 대입값을 바꿀 수 있다. 제약 - 나머지가 일차식으로 남는 조합이어야 $R(-1)$ 대입이 의미가 있고, 대입값이 작은 정수여야 계산 마찰이 커지지 않는다.'
    creative: '(1) $Q(x)+R(x)$ 를 다항식으로 묻기(34-53 골조 · ★3) (2) 피제수를 미지 계수로 두고 $Q(1)=0$ 조건을 주면 역방향(I-BW d2 · ★3) (3) 나머지를 $R$ 상수로 만드는 제수를 고르게 하면 T-범위 판단 추가(★3).'
```

```yaml
- id: GN-CM1-31-e13
  page: 31
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    $x^4-3x^2-x-5$ 를 $A$ 로 나눈 몫이 $x^2+x+3$, 나머지가 $7x+10$ 일 때 다항식 $A$.
  category: 'A=BQ+R 이항 → 피제수−나머지를 몫으로 나눔 → 제수 복원'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '나머지를 이항해 $f-R$ 이 $A$ 와 몫의 곱임을 보고, 나누는 식과 몫의 역할을 바꿔 나눗셈 방향을 뒤집는다'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '다항식의 나눗셈 - $A=BQ+R$ 에서 제수 구하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $f=AQ+R$ 에서 $R$ 를 이항하면 $f-R=AQ$ 이고, 이때 몫 $Q$ 로 나누어야 $A$ 가 나온다는 방향 전환이 핵심 한 단계다(I-BW d1). 그 뒤는 사차÷이차 세로셈. 필수 예제 ★2 출발 · 통찰 1개(d1) → ★2 유지.
  tier: star_2
  mechanism_primary: '$f-R$ 계산 → 몫 $x^2+x+3$ 으로 나눔 → 나누어떨어진 몫이 $A$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$x^2-x-5$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/31-e13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '피제수·몫·나머지 계수를 바꿀 수 있다. 제약 - $f-R$ 가 몫으로 반드시 나누어떨어져야 하므로 $A$ 를 먼저 정하고 $f=AQ+R$ 로 역산해 출제한다. 나머지 차수는 $A$ 의 차수보다 낮게 유지한다.'
    creative: '(1) $A$ 의 특정 계수나 $A(1)$ 만 묻기(★2) (2) 나머지를 미지로 두고 나누어떨어질 조건을 묻기(I-BW d2 · ★3) (3) 몫 대신 제수를 주고 몫을 구하게 하면 통상 방향으로 돌아가 ★2 미만으로 쉬워진다.'
```

```yaml
- id: GN-CM1-31-e14
  page: 31
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    $f(x)$ 를 $x-\dfrac{2}{3}$ 로 나눈 몫 $Q(x)$, 나머지 $R$ 일 때, $3x-2$ 로 나눈 몫과 나머지.
  category: '나눗셈 등식 → 제수를 상수배로 묶기 → 몫은 상수분의 1배·나머지 불변'
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$f=(x-\frac{2}{3})Q+R$ 를 $f=(3x-2)\cdot\frac{1}{3}Q+R$ 로 다시 묶어 새 제수에 대한 나눗셈 등식으로 바꾼다'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '제수를 상수배 했을 때 몫·나머지의 변형'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    같은 등식을 다시 묶는 것만으로 답이 나오지만, 몫은 $\frac{1}{3}$ 배가 되고 나머지는 그대로라는 비대칭을 스스로 확인해야 한다(I-EQV d2 · 나머지 차수 조건이 여전히 만족됨도 점검 · T-범위). 필수 예제 ★2 출발 · 통찰 1개라 ★2 로 두었으나 체감은 ★3 경계다.
  tier: star_2
  mechanism_primary: '$f=(x-\frac{2}{3})Q+R$ → $x-\frac{2}{3}=\frac{1}{3}(3x-2)$ 로 묶기 → 몫 $\frac{1}{3}Q(x)$ · 나머지 $R$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '몫: $\dfrac{1}{3}Q(x)$, 나머지: $R$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/31-e14.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '상수배 계수를 바꿀 수 있다($x-\frac{3}{4}$ 와 $4x-3$, $x+\frac{1}{2}$ 와 $2x+1$). 제약 - 두 제수가 상수배 관계여야 하고, 나머지는 어떤 경우에도 상수이므로 불변임을 답에 그대로 반영한다.'
    creative: '(1) 반대로 $3x-2$ 로 나눈 결과를 주고 $x-\frac{2}{3}$ 쪽을 묻기(★2 유지) (2) 제수를 이차식의 상수배로 바꾸면 나머지가 일차식이 되어 차수 점검이 추가(★3) (3) 구체적인 $f(x)$ 를 함께 주고 두 방식의 값을 비교하게 하면 검증이 붙어 I-VF d1 · ★3.'
```

```yaml
- id: GN-CM1-31-40
  page: 31
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $6x^4-x^3-16x^2+5x$ 를 $A$ 로 나눈 몫이 $3x^2-2x-4$, 나머지가 $5x-8$ 일 때 다항식 $A$.
  category: 'A=BQ+R 이항 → 피제수−나머지를 몫으로 나눔 → 제수 복원'
  M: {s: 2, k: 3, a: 2, t: 0}
  M_total: 7
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '$f-R$ 이 $A$ 와 몫의 곱임을 보고 몫으로 나누어 제수를 복원한다'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '다항식의 나눗셈 - $A=BQ+R$ 에서 제수 구하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    31-e13 과 같은 골조이고 최고차 계수가 $6$, $3$ 이라 세로셈 계산량만 늘었다(I-BW d1). 예제 구역 확인체크 ★2 출발 · 통찰 1개 → ★2.
  tier: star_2
  mechanism_primary: '$f-(5x-8)$ 계산 → $3x^2-2x-4$ 로 나눔 → 몫이 $A$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2x^2+x-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/31-40.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$A$ 와 몫의 계수를 바꿀 수 있다. 제약 - $A$ 를 먼저 정하고 $f=AQ+R$ 로 역산해야 나누어떨어진다. 최고차 계수를 1 로 낮추면 계산 마찰만 줄고 골조는 동일.'
    creative: '(1) $A$ 가 인수분해되는 꼴로 잡고 인수를 묻기(★3) (2) 나머지를 모르는 채 $A$ 가 이차식임만 주고 계수를 결정하게 하면 미정계수 연립(★3) (3) 몫과 제수를 모두 이차식으로 두고 둘 다 구하게 하면 분기가 생겨 I-MI d2 · ★4.'
```

```yaml
- id: GN-CM1-31-41
  page: 31
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $f(x)$ 를 $2x+4$ 로 나눈 몫 $Q(x)$, 나머지 $R$ 일 때, $x+2$ 로 나눈 몫과 나머지.
  category: '나눗셈 등식 → 제수를 상수배로 묶기 → 몫은 상수배·나머지 불변'
  M: {s: 1, k: 1, a: 3, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '$f=(2x+4)Q+R=(x+2)\cdot 2Q+R$ 로 다시 묶어 새 제수의 몫을 읽는다'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '제수를 상수배 했을 때 몫·나머지의 변형'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    31-e14 의 확인체크판이고 방향만 반대다($\frac{1}{3}$ 배가 아니라 $2$ 배). 등식 재묶기 한 단계(I-EQV d1)와 나머지 불변 확인뿐이라 계산은 거의 없다. 예제 구역 ★2 유지.
  tier: star_2
  mechanism_primary: '$f=(2x+4)Q+R$ → $2x+4=2(x+2)$ 로 묶기 → 몫 $2Q(x)$ · 나머지 $R$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '몫: $2Q(x)$, 나머지: $R$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/31-41.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '상수배 계수를 $3x+6$, $\frac{1}{2}x+1$ 등으로 바꿀 수 있다. 제약 - 두 제수가 상수배 관계라는 것이 한눈에 보이면 난도가 내려가므로 계수를 약간 어긋나게 보이도록 배치한다. 나머지는 항상 상수로 불변.'
    creative: '(1) 몫이 아니라 $Q(x)$ 의 값 $Q(1)$ 을 묻기(★2) (2) 두 제수가 상수배가 아닌 경우를 섞어 참·거짓 판별로 만들면 I-VF d2 · ★3 (3) 이차 제수의 상수배로 올리면 나머지 차수 점검이 붙어 ★3.'
```

```yaml
- id: GN-CM1-32-e15
  page: 32
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴⑵ 조립제법으로 몫과 나머지를 구한다(⑵ 의 제수는 $2x-3$).
  category: '조립제법 수행 → 제수 최고차 계수로 몫 보정 → 나머지 불변'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$2x-3=2(x-\frac{3}{2})$ 로 보고 $x-\frac{3}{2}$ 로 조립제법한 뒤 몫만 $2$ 로 나눠 보정한다'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '조립제법 - 제수의 최고차 계수가 1 이 아닌 경우'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 표준 조립제법이고, ⑵ 에서 제수를 상수배로 분리해 몫만 보정하고 나머지는 건드리지 않는다는 판단이 갈림길이다(I-EQV d2 · 나머지까지 나누는 실수가 전형적 오답 · T-부호/T-표기). 필수 예제 ★2 출발 · 통찰 1개 → ★2.
  tier: star_2
  mechanism_primary: '제수의 근으로 조립제법 → 몫 계수를 최고차 계수로 나눔 → 나머지는 그대로'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ 몫: $3x^2-2x+4$, 나머지: $-13$ \quad ⑵ 몫: $x^2-x+1$, 나머지: $6$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/32-e15.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '피제수 계수와 제수의 근을 바꿀 수 있다. 제약 - ⑵ 처럼 최고차 계수가 1 이 아닌 제수는 근이 유한소수/간단한 분수여야 표가 다룰 만하고, 보정 후 몫 계수가 정수로 떨어지도록 피제수 최고차 계수를 제수 최고차 계수의 배수로 잡는다.'
    creative: '(1) 보정을 잊은 오답을 선택지에 넣어 고르게 하면 I-VF d1 · ★3 (2) 같은 나눗셈을 세로셈과 비교해 어느 쪽이 빠른지 고르게 하면 I-SC d2 · ★3 (3) 제수를 $ax-b$ 일반형으로 두면 추상도가 올라 ★3~4.'
```

```yaml
- id: GN-CM1-32-42
  page: 32
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $2x^3-5x^2-4x+6$ 을 $x-3$ 으로 나누는 조립제법 표에서 $a+b+R$ 의 값.
  category: '조립제법 규칙 적용 → 빈칸 $a$, $b$, $R$ 읽기 → 합'
  M: {s: 1, k: 1, a: 2, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '조립제법 표의 성분 읽기'
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    내림·곱·더하기를 두 칸만 진행하면 $b$, $a$, $R$ 가 차례로 나온다. 표가 이미 완성 직전이라 판단 지점이 없다. 예제 구역 ★2 출발이지만 통찰 0 · M_total 4 로 −1 하여 ★1.
  tier: star_1
  mechanism_primary: '조립제법 한 줄 진행 → $b=1$, $a=3$, $R=3$ → 합'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/32-42.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '피제수 계수와 제수의 근을 바꿀 수 있다. 제약 - 빈칸이 표의 앞쪽에 오면 난도가 오르고 뒤쪽에 오면 내려가므로 위치로 난도를 조절한다. 근은 정수로 유지.'
    creative: '(1) 왼쪽 근 자리를 빈칸으로 돌리면 역추적이 되어 ★3(33-48·34-55 골조) (2) 표에서 $f(3)$ 의 의미를 묻는 항목을 추가하면 나머지정리와 연결되어 I-XU d2 · ★3 (3) 몫을 이용해 $f(x)$ 를 인수분해하게 하면 ★3.'
```

```yaml
- id: GN-CM1-32-43
  page: 32
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴⑵ 조립제법으로 몫과 나머지를 구한다(⑴ 은 $(x^5+1)\div(x+1)$, ⑵ 의 제수는 $3x-1$).
  category: '빠진 차수 계수 0 채우기 → 조립제법 → 제수 최고차 계수로 몫 보정'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '$3x-1=3(x-\frac{1}{3})$ 로 보고 조립제법의 몫을 $3$ 으로 나눠 보정(나머지는 불변)'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '조립제법 - 빠진 차수와 제수 상수배 보정'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 $x^4$~$x$ 계수를 모두 $0$ 으로 채우는 자리 맞춤이 전부이고(T-표기), ⑵ 는 32-e15 에서 본 상수배 보정의 반복이라 통찰 깊이는 1 이다. 확인체크 ★2 유지.
  tier: star_2
  mechanism_primary: '계수 0 을 빠짐없이 나열 → 조립제법 → ⑵ 는 몫만 $3$ 으로 나눔'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ 몫: $x^4-x^3+x^2-x+1$, 나머지: $0$ \quad ⑵ 몫: $x^2-2x+3$, 나머지: $4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/32-43.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '⑴ 의 차수를 $x^7+1$ 등 홀수 차로 올리면 부호가 번갈아 나오는 같은 골조가 유지된다(짝수 차로 바꾸면 $x+1$ 로 나누어떨어지지 않으니 주의). ⑵ 는 제수의 최고차 계수와 근을 바꾸되 보정 후 정수 계수가 되도록 고른다.'
    creative: '(1) ⑴ 의 몫에서 계수의 규칙을 말하게 하면 I-PD d2 · ★3 (2) $x^n+1$ 이 $x+1$ 로 나누어떨어질 $n$ 의 조건을 묻기(I-PD d3 · ★4) (3) 보정 단계를 생략한 오답과 비교시키면 I-VF d1 · ★3.'
```

### 연습문제 STEP 1

```yaml
- id: GN-CM1-33-44
  page: 33
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $A=3x^2-2xy-y^2$, $B=x^2+3xy-2y^2$ 에 대하여 $A-3(X-B)=7A$ 를 만족시키는 $X$.
  category: '다항식 항등식 정리 → $X=B-2A$ → 대입·동류항 정리'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '다항식의 덧셈·뺄셈에서 미지 다항식 $X$ 구하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $A$, $B$ 를 문자처럼 다루어 $X$ 를 먼저 $X=B-2A$ 로 정리한 뒤 대입하는 표준 절차다. 먼저 대입하고 풀면 계산만 늘 뿐 갈래가 갈리지는 않는다. 괄호 앞 $-3$ 의 부호가 유일한 함정(T-부호). STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: '$A-3X+3B=7A$ → $X=B-2A$ → 대입 후 동류항 정리'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-5x^2+7xy$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/33-44.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$A$, $B$ 의 계수와 등식의 계수(3, 7)를 바꿀 수 있다. 제약 - $X$ 의 계수가 정수로 떨어지도록 $X$ 의 계수 분모가 1 이 되게 등식 계수를 고르고, 소거되는 항을 한 개쯤 남겨 답을 간결하게 한다.'
    creative: '(1) $X$ 대신 $A$ 를 미지로 돌리기(★2) (2) $X$ 의 특정 항 계수만 묻기(★2) (3) 두 개의 등식을 연립해 $X$, $Y$ 를 함께 구하게 하면 조건 통합이 필요해 ★3.'
```

```yaml
- id: GN-CM1-33-45
  page: 33
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $(x+2)^3(3x-2)^2$ 의 전개식에서 $x^2$ 의 계수.
  category: '각 인수 전개 → 차수 합이 2 인 항만 짝지어 곱 → 합'
  M: {s: 2, k: 3, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '전개식에서 특정 항의 계수 구하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $(x+2)^3$ 과 $(3x-2)^2$ 를 각각 전개한 뒤 차수 합이 $2$ 가 되는 세 쌍만 곱해 더하는 표준 기법이고, 전부 전개해도 같은 답에 도달하므로 전략 분기로 보지 않았다. 빠뜨리는 쌍이 생기는 것이 주된 실수(T-표기). STEP 1 ★2.
  tier: star_2
  mechanism_primary: '두 인수 전개 → 지수 합 2 인 항쌍만 선택해 곱 → 계수 합'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-48$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/33-45.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 인수의 계수·지수와 묻는 차수를 바꿀 수 있다. 제약 - 묻는 차수가 낮을수록 짝이 적어 쉬워지고 중간 차수일수록 짝이 많아진다. 답이 0 이 되는 조합은 검산이 어려우니 피한다.'
    creative: '(1) 계수가 0 이 되게 하는 상수를 찾게 하면 역방향(I-BW d2 · ★3) (2) 인수를 세 개로 늘리면 짝짓기 경우가 늘어 ★3 (3) 33-49 처럼 항이 계속 이어지는 다항식의 제곱으로 올리면 일반항 발견이 필요해 ★4.'
```

```yaml
- id: GN-CM1-33-46
  page: 33
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $(x+1)(x-2)(x-5)(x+10)$ 의 전개식이 $x^4+4x^3+px^2+40x+q$ 일 때 $-2p-q$.
  category: '두 쌍으로 묶어 전개 → $x^2$ 계수·상수항 비교 → $-2p-q$'
  M: {s: 2, k: 3, a: 2, t: 0}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '네 일차식의 곱에서 특정 계수 비교'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 개씩 묶어 이차식 둘로 만든 뒤 $x^2$ 계수만 모으고, 상수항 $q$ 는 네 상수의 곱으로 즉시 읽는다. 묶는 짝을 어떻게 고르든 결과가 같아 전략 분기는 아니다. STEP 1 ★2.
  tier: star_2
  mechanism_primary: '두 쌍 전개 → 두 이차식의 곱에서 $x^2$ 항만 추출해 $p$ → 상수 곱으로 $q$ → 대입'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$14$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/33-46.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '네 상수를 바꿀 수 있다. 제약 - 네 상수의 합이 주어진 $x^3$ 계수와, 곱이 $q$ 와 맞아야 하므로 문제에 이미 적힌 계수(4, 40)도 함께 다시 계산해 넣어야 한다. 합이 0 이 되게 잡으면 $x^3$ 항이 사라져 더 쉬워진다.'
    creative: '(1) 공통부분이 생기도록 상수를 배치해 치환으로 풀리게 하면 I-RT d2 · ★3 (2) $p$, $q$ 대신 $f(1)$ 같은 값으로 묻기(★2) (3) 계수 하나를 미지로 두고 조건을 만족시키는 상수를 찾게 하면 역방향 ★3.'
```

```yaml
- id: GN-CM1-33-47
  page: 33
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 STEP 1"
  summary: |
    $x+y=\sqrt{2}$, $xy=-2$ 일 때 $\dfrac{x^2}{y}+\dfrac{y^2}{x}$ 의 값. 5지선다.
  category: '통분 → $\frac{x^3+y^3}{xy}$ → 곱셈 공식의 변형으로 기본 대칭식 대입'
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '분수 두 개를 통분해 $\frac{x^3+y^3}{xy}$ 로 바꾸면 곱셈 공식의 변형이 그대로 쓰이는 꼴이 된다'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '곱셈 공식의 변형 - 대칭식의 값(세제곱의 합)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    통분해 분자를 $x^3+y^3$ 으로 만드는 한 단계가 갈림길이고(I-EQV d1), 그 뒤는 $x^3+y^3=(x+y)^3-3xy(x+y)$ 대입뿐이다. 기출 태그는 통찰이 1개에 그쳐 가산하지 않았다. STEP 1 ★2.
  tier: star_2
  mechanism_primary: '통분 → $(x^3+y^3)/xy$ → $(x+y)^3-3xy(x+y)$ 대입 → 나누기'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '②'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/33-47.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$x+y$ 와 $xy$ 의 값을 바꿀 수 있다. 제약 - $xy \ne 0$ 이어야 하고, 무리수를 쓰면 세제곱 전개에서 형태가 유지되는 값($\sqrt{2}$, $\sqrt{3}$)이 편하다. 선택지가 같은 무리수 계수로 정리되도록 한다.'
    creative: '(1) $\frac{y}{x}+\frac{x}{y}$ 나 $\frac{x^2}{y^2}+\frac{y^2}{x^2}$ 로 바꾸기(★2) (2) $x-y$ 값을 조건으로 주면 부호 판정이 붙어 I-MI d2 · ★3 (3) $x$, $y$ 를 이차방정식의 두 근으로 제시하면 단원 결합 I-XU d2 · ★3.'
```

```yaml
- id: GN-CM1-33-48
  page: 33
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $ax^3+bx^2+cx+d$ 를 $2x-1$ 로 나누기 위한 조립제법 표(왼쪽 수 $k$ 와 계수가 미지)에서 몫과 나머지.
  category: '조립제법 표 역추적 → 계수 복원 → 제수 상수배 보정'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '표의 아랫줄에서 위로 거슬러 $k=\frac{1}{2}$ 와 $a$, $b$, $c$, $d$ 를 복원한다'
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '조립제법은 $x-\frac{1}{2}$ 에 대한 것이므로 $2x-1$ 의 몫은 얻은 몫을 $2$ 로 나눈 것이고 나머지는 불변'
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: '조립제법 표의 역추적과 제수 상수배 보정'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    표를 거꾸로 읽어 $k$ 와 계수를 복원하는 역방향 한 단계(I-BW d2)와, 마지막에 몫만 $2$ 로 나누는 보정(I-EQV d1)이 겹친다. 보정을 빠뜨린 $2x^2+6$ 이 전형적 오답이다. STEP 1 ★2 출발이지만 통찰 2개로 +1 하여 ★3.
  tier: star_3
  mechanism_primary: '아랫줄 → 윗줄 역추적으로 $k=\frac{1}{2}$·계수 확정 → 조립제법 몫 $2x^2+6$ → $2$ 로 나눠 $x^2+3$ · 나머지 $-2$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '몫: $x^2+3$, 나머지: $-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/33-48.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '표의 둘째 줄·셋째 줄 수와 제수를 바꿀 수 있다. 제약 - 표에서 역추적한 $k$ 가 제수의 근과 일치해야 하고, 보정 후 몫 계수가 정수가 되도록 셋째 줄 수를 제수 최고차 계수의 배수로 둔다.'
    creative: '(1) $a+b+c+d$ 처럼 복원한 계수의 조합을 묻기(★3) (2) 제수를 $3x+1$ 로 바꿔 보정 계수를 달리하기(★3) (3) 보정 없이 답한 학생의 풀이를 주고 오류 지점을 찾게 하면 I-VF d2 · ★4.'
```

### 연습문제 STEP 2

```yaml
- id: GN-CM1-33-49
  page: 33
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    $(1+2x+3x^2+\cdots+100x^{99})^2$ 의 전개식에서 $x^5$ 의 계수.
  category: '일반항 $(k+1)x^k$ 파악 → 지수 합이 5 인 항쌍 전부 → 계수 곱의 합'
  M: {s: 2, k: 2, a: 3, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-PD
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '점으로 생략된 다항식의 일반항이 $(k+1)x^k$ 임을 스스로 읽어낸다'
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '전개식의 $x^5$ 계수를 지수 합이 5 가 되는 항쌍의 개수 세기로 바꾸어 여섯 쌍의 계수 곱을 더한다'
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: '전개식에서 특정 항의 계수(일반항 발견·지수 합 짝짓기)'
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    항이 100 개라 전개가 불가능하므로 일반항을 먼저 읽고(I-PD d2), 구하는 계수를 지수 합 조건을 만족하는 항쌍 카운트로 옮겨야 한다(I-RT d2). 같은 쌍을 순서까지 세는지 여부가 실수 지점이다(T-표기). STEP 2 ★3 출발 · 통찰 2개로 +1 → ★4.
  tier: star_4
  mechanism_primary: '일반항 $(k+1)x^k$ → $i+j=5$ 인 쌍의 $(i+1)(j+1)$ 를 모두 합'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$56$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/33-49.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '묻는 차수(3, 4, 6)와 계수 규칙($1, 3, 5, \ldots$ 같은 홀수열)을 바꿀 수 있다. 제약 - 묻는 차수가 항의 개수보다 작아야 잘림이 생기지 않고, 차수가 커질수록 더하는 쌍만 늘어 계산 마찰이 커진다(질 저하 주의).'
    creative: '(1) 서로 다른 두 다항식의 곱으로 바꾸면 짝이 대칭이 아니게 되어 ★4 유지 (2) $x^5$ 계수가 최대가 되는 계수열을 묻기(★5 후보 · I-SC 필요) (3) 세 다항식의 곱으로 올리면 세 지수 합 분할이라 ★5.'
```

```yaml
- id: GN-CM1-34-50
  page: 34
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    $99^3-101\times(100^2-99)$ 의 값.
  category: '$100=x$ 치환 → 곱셈 공식으로 묶기 → 정리 후 수 대입'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '수치식을 $100=x$ 로 두어 $(x-1)^3-(x+1)(x^2-x+1)$ 의 문자식으로 옮긴다'
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '$(x+1)(x^2-x+1)=x^3+1$ 임을 알아보고 세제곱 항을 소거한다'
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: '곱셈 공식을 이용한 수의 계산(치환)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $100$ 을 문자로 치환하면(I-RT d2) $100^2-99=x^2-x+1$ 이 되어 세제곱 합 공식이 바로 보이고(I-EQV d1) 삼차항이 소거된다. 다만 직접 수 계산으로도 답에 도달할 수 있어 통찰 2개지만 +1 하지 않고 STEP 2 출발점 ★3 을 유지했다.
  tier: star_3
  mechanism_primary: '$x=100$ 치환 → $(x-1)^3-(x^3+1)$ → $-3x^2+3x-2$ 에 대입'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-29702$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/34-50.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '기준수를 $10$, $50$, $1000$ 으로 바꾸고 이웃 수를 $\pm1$, $\pm2$ 로 조절할 수 있다. 제약 - 치환 후 세제곱 합·차 공식이 그대로 맞아떨어지는 배치여야 하고, 직접 계산이 너무 쉬우면 치환의 이점이 사라지므로 자릿수를 키운다.'
    creative: '(1) $999^3+1$ 처럼 세제곱 합 인수분해만으로 끝나게 바꾸기(★2) (2) 치환 후 남는 식이 인수분해되어 약분되게 설계하면 ★4 (3) 두 가지 계산 경로의 계산량을 비교하게 하면 I-SC d2 · ★4.'
```

```yaml
- id: GN-CM1-34-51
  page: 34
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    $x^2+3x+1=0$ 일 때 $x^3-2x^2-3x+5-\dfrac{3}{x}-\dfrac{2}{x^2}+\dfrac{1}{x^3}$ 의 값.
  category: '조건을 $x+\frac{1}{x}$ 로 변환 → 식을 $x^k+\frac{1}{x^k}$ 묶음으로 재배열 → 차례로 대입'
  M: {s: 3, k: 3, a: 1, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '$x \ne 0$ 이므로 조건식을 $x$ 로 나누어 $x+\frac{1}{x}=-3$ 으로 바꾼다'
    - step: 2
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '구하는 식을 $(x^3+\frac{1}{x^3})-2(x^2+\frac{1}{x^2})-3(x+\frac{1}{x})+5$ 의 대칭 묶음으로 재배열한다'
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: '곱셈 공식의 변형 - $x+\frac{1}{x}$ 꼴 대칭식의 값'
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    일곱 개 항을 $x$ 와 $\frac{1}{x}$ 의 대칭쌍으로 묶는 재배열을 스스로 해야 하고(I-SYM d2), 그 전에 조건식을 $x$ 로 나누는 변환이 필요하다(I-EQV d1 · $x \ne 0$ 확인이 T-범위). STEP 2 ★3 출발 · 통찰 2개로 +1 → ★4.
  tier: star_4
  mechanism_primary: '$x+\frac{1}{x}=-3$ → $x^2+\frac{1}{x^2}$, $x^3+\frac{1}{x^3}$ 차례로 계산 → 묶음별 계수 곱해 합산'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$-18$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/34-51.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '조건식의 일차항 계수와 각 묶음의 계수를 바꿀 수 있다. 제약 - 조건식은 상수항이 1 이어야 $x$ 로 나눴을 때 $x+\frac{1}{x}$ 꼴이 되고, 부호를 바꾸면 $x-\frac{1}{x}$ 계열이 되어 제곱 관계가 달라진다. 대칭이 깨지는 항(예 $x^2$ 만 있고 $\frac{1}{x^2}$ 이 없는 항)을 넣으면 골조가 무너진다.'
    creative: '(1) $x^4+\frac{1}{x^4}$ 까지 확장(★4 유지) (2) $x-\frac{1}{x}$ 꼴 조건으로 바꿔 부호 판정을 넣으면 I-MI d2 추가 · ★4~5 (3) 조건을 근의 형태로 직접 주면 무리수 계산으로 바뀌어 질이 떨어진다(피할 변형).'
```

```yaml
- id: GN-CM1-34-52
  page: 34
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    $x+y+z=6$, $x^2+y^2+z^2=18$, $\dfrac{1}{x}+\dfrac{1}{y}+\dfrac{1}{z}=\dfrac{9}{4}$ 일 때 $x^3+y^3+z^3$.
  category: '기본 대칭식 $e_2$, $e_3$ 확보 → 세 수의 세제곱 합 공식 대입'
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '역수의 합을 $\frac{xy+yz+zx}{xyz}$ 로 바꿔 세 번째 조건에서 $xyz$ 를 끌어낸다'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '곱셈 공식의 변형 - 세 문자의 대칭식($x^3+y^3+z^3$)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $(x+y+z)^2$ 전개로 $xy+yz+zx=9$ 를 얻는 것은 표준 절차이고, 역수의 합을 기본 대칭식의 비로 옮겨 $xyz$ 를 얻는 한 단계만 착안이 필요하다(I-EQV d1). 이후 $x^3+y^3+z^3=(x+y+z)^3-3(x+y+z)(xy+yz+zx)+3xyz$ 대입. STEP 2 ★3 유지.
  tier: star_3
  mechanism_primary: '$e_1=6$ → $e_2=9$ → 역수 합에서 $e_3=4$ → 세제곱 합 공식 대입'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$66$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/34-52.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$e_1$, 제곱 합, 역수 합의 값을 바꿀 수 있다. 제약 - 세 값이 서로 모순되지 않으려면 $e_1$, $e_2$, $e_3$ 를 먼저 정하고 역산해야 하고, $xyz \ne 0$ 이어야 역수 조건이 성립한다.'
    creative: '(1) $x^3+y^3+z^3-3xyz$ 만 묻기(공식 한 줄 · ★2) (2) $\frac{1}{x^2}+\frac{1}{y^2}+\frac{1}{z^2}$ 를 묻기(★3 유지) (3) 세 수가 어떤 삼차방정식의 근임을 이용하게 하면 단원 결합 I-XU d2 · ★4.'
```

```yaml
- id: GN-CM1-34-53
  page: 34
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    $f(x)$ 를 $x^2-2x+3$ 으로 나눈 몫이 $x-1$, 나머지가 $3x-2$ 일 때, $f(x)$ 를 $x^2-x-1$ 로 나눈 몫과 나머지의 합.
  category: 'A=BQ+R 로 $f(x)$ 복원 → 다른 이차식으로 재나눗셈 → 몫+나머지'
  M: {s: 3, k: 3, a: 1, t: 0}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '나눗셈 등식으로 복원 후 다른 제수로 재나눗셈'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    복원 한 번과 나눗셈 한 번을 연달아 하는 두 단계짜리 절차이고, 두 제수 사이에 이용할 관계가 없어 착안 지점이 없다. 대신 삼차식 전개와 세로셈이 겹쳐 실수 여지가 크다. STEP 2 ★3 · 절차형 유지.
  tier: star_3
  mechanism_primary: '$f=(x^2-2x+3)(x-1)+3x-2$ 전개 → $x^2-x-1$ 로 나눔 → 몫과 나머지를 더함'
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$8x-9$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/34-53.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 제수와 몫·나머지 계수를 바꿀 수 있다. 제약 - 첫 나머지의 차수는 1 이하, 두 번째 나눗셈의 나머지도 일차 이하로 남으므로 답 형식이 일차식이다. 계수를 키우면 계산 마찰만 커지므로 한 자리 수로 유지한다.'
    creative: '(1) 두 제수를 배수 관계로 잡아 보정만으로 풀리게 하면 I-EQV d2 · ★3 (2) 몫과 나머지의 합 대신 $Q(1)+R(1)$ 을 묻기(★3) (3) 둘째 제수를 인수분해되는 꼴로 두고 나머지정리와 연결하면 I-XU d2 · ★4.'
```

```yaml
- id: GN-CM1-34-54
  page: 34
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 STEP 2"
  summary: |
    $f(x)$ 를 $x^2+1$ 로 나눈 나머지가 $x+1$ 일 때, $\{f(x)\}^2$ 을 $x^2+1$ 로 나눈 나머지 $R(x)$ 에 대하여 $R(3)$. 5지선다.
  category: '$f=(x^2+1)Q+(x+1)$ 대입 → 제곱 전개에서 $x^2+1$ 배수 소거 → 남은 $(x+1)^2$ 를 다시 나눔'
  M: {s: 3, k: 2, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$\{f(x)\}^2$ 의 나머지가 나머지의 제곱 $(x+1)^2$ 만으로 결정됨을 보고 $x^2+1$ 을 인수로 갖는 항을 모두 버린다'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '나머지의 연산 - 제곱한 식의 나머지'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $f$ 를 나눗셈 등식으로 놓고 제곱했을 때 $x^2+1$ 이 인수인 항이 전부 사라진다는 판단이 핵심이고(I-EQV d2), 남은 $(x+1)^2=x^2+2x+1$ 이 제수보다 차수가 낮지 않아 한 번 더 나눠야 한다는 차수 점검이 함정이다(T-범위). $f$ 가 일반 다항식이라 $M_a=3$. STEP 2 ★3 · 통찰 1개(d2) → ★3 유지.
  tier: star_3
  mechanism_primary: '$f=(x^2+1)Q+(x+1)$ → 제곱 후 $x^2+1$ 배수 소거 → $(x+1)^2$ 를 다시 나눠 $R(x)=2x$ → $R(3)$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '①'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/34-54.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '제수 $x^2+1$ 과 나머지 $x+1$ 의 계수, 대입값 3 을 바꿀 수 있다. 제약 - 나머지의 제곱이 제수로 다시 나누어지는 관계라 제수의 상수항과 나머지 계수를 함께 조정해야 하고, 제수는 실근을 갖지 않는 꼴로 두는 편이 나머지정리 우회를 막는다.'
    creative: '(1) $\{f(x)\}^3$ 이나 $f(x)g(x)$ 의 나머지로 확장(★4) (2) 나머지가 상수가 되도록 조건을 주고 그 조건을 찾게 하면 역방향 I-BW d2 · ★4 (3) 제수를 $x^2-1$ 로 바꾸면 인수분해되어 나머지정리 갈래가 생기므로 I-SC d2 · ★4.'
```

```yaml
- id: GN-CM1-34-55
  page: 34
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    삼차식 $f(x)$ 를 $x-1$ 로 나누는 조립제법 표(계수가 미지)에서 $f(-2)+Q(3)+R$.
  category: '조립제법 표 역추적 → $f(x)$·$Q(x)$·$R$ 복원 → 세 값 대입'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '표의 가운데 줄 $1, -4, 3$ 에서 거꾸로 올라가 셋째 줄과 $f(x)$ 의 계수를 복원한다'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '조립제법 표의 역추적과 값 대입'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    가운데 줄이 몫 계수에 $1$ 을 곱한 값이라는 규칙을 거꾸로 쓰면 몫 $x^2-4x+3$ 과 $f(x)$ 가 복원된다(I-BW d2). 이후 $f(-2)$ 대입은 단순 계산이고, $Q(3)$ 이 $0$ 이 되는 것이 확인 지점이다. STEP 2 ★3 · 통찰 1개 → ★3.
  tier: star_3
  mechanism_primary: '표 역추적으로 $Q(x)=x^2-4x+3$·$R=8$ → $f=(x-1)Q+8$ → $f(-2)$, $Q(3)$ 대입 후 합'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-29$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/34-55.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '가운데 줄 수와 나머지, 제수의 근을 바꿀 수 있다. 제약 - 제수의 근이 1 이면 가운데 줄이 몫 계수와 같아 역추적이 쉬우므로, 근을 $2$ 나 $-1$ 로 두면 한 단계 더 어려워진다. $f$ 의 최고차 계수는 표 첫 칸으로 고정된다.'
    creative: '(1) 제수의 근까지 빈칸으로 두기(★4) (2) $f(x)$ 를 인수분해해 다른 근을 묻게 하면 I-XU d2 · ★4 (3) 나머지가 0 이 되도록 상수항을 정하게 하면 역방향 한 겹 추가 · ★4.'
```

### 연습문제 실력 UP

```yaml
- id: GN-CM1-35-56
  page: 35
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    $a+b=1$, $a^2+b^2=5$ 일 때 $a^7+b^7$ 의 값.
  category: '$ab$ 확보 → $a$, $b$ 를 $t^2-t-2=0$ 의 두 근으로 → 점화식 또는 근 직접 대입'
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$ab=-2$ 를 얻어 $a$, $b$ 가 $t^2-t-2=0$ 을 만족한다는 관계로 옮긴다'
    - step: 2
      type: I-SC
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$a^n+b^n$ 을 점화식으로 7 차까지 밀어 올릴지, $t^2-t-2$ 를 인수분해해 두 근 $2$, $-1$ 을 직접 쓸지 갈래를 고른다'
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: '곱셈 공식의 변형 - 높은 차수 대칭식($a^n+b^n$)'
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    7 차까지는 곱셈 공식의 변형을 이어 붙이기 어려워, 두 수를 이차방정식의 근으로 보는 전환(I-EQV d2) 뒤에 점화식과 근 직접 대입 중 하나를 골라야 한다(I-SC d2). 갈래를 잘못 고르면 계산이 크게 길어진다. 실력 UP ★4 출발 · 통찰 2개(d2)지만 3개 미만이라 ★5 로는 올리지 않음.
  tier: star_4
  mechanism_primary: '$ab=-2$ → $t^2-t-2=0$ → $s_n=s_{n-1}+2s_{n-2}$ 또는 근 $2, -1$ 직접 대입 → $a^7+b^7$'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$127$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/35-56.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$a+b$ 와 $a^2+b^2$ 값, 묻는 차수를 바꿀 수 있다. 제약 - $ab$ 가 정수로 떨어져야 하고, 두 근이 유리수로 인수분해되면 직접 대입 갈래가 열려 난도가 내려간다. 근이 무리수가 되게 잡으면 점화식 갈래만 남아 ★4 가 유지된다.'
    creative: '(1) $a^5+b^5$ 로 낮추면 공식 연쇄만으로 가능해 ★3 (2) $a^n+b^n$ 의 일반 규칙을 설명하게 하면 I-PD d3 · ★5 후보 (3) $a-b$ 조건으로 바꾸면 부호 분기가 생겨 I-MI d2 추가 · ★4~5.'
```

```yaml
- id: GN-CM1-35-57
  page: 35
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    $a+b+c=2$, $ab+bc+ca=-1$ 일 때 $(a+b+c)^2+(-a+b+c)^2+(a-b+c)^2+(a+b-c)^2$ 의 값.
  category: '네 제곱의 대칭 구조로 교차항 소거 → $4(a^2+b^2+c^2)$ → 기본 대칭식 대입'
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '부호를 하나씩 바꾼 네 식을 함께 전개하면 $ab$, $bc$, $ca$ 항의 부호가 짝을 이뤄 모두 소거되고 제곱 항만 네 배로 남는다'
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '$a^2+b^2+c^2=(a+b+c)^2-2(ab+bc+ca)$ 로 바꿔 주어진 두 조건만으로 값을 낸다'
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: '곱셈 공식의 변형 - 부호 대칭인 네 제곱의 합'
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    네 식을 각각 전개해 더하는 정면 계산도 가능하지만, 교차항이 상쇄되는 대칭을 보면 $4(a^2+b^2+c^2)$ 한 줄로 끝난다(I-SYM d2). 나머지는 기본 대칭식 변형(I-EQV d1). M_total 은 6 으로 낮지만 착안 없이는 전개량이 커진다. 실력 UP ★4 유지.
  tier: star_4
  mechanism_primary: '네 제곱 합 → 교차항 소거 → $4\{(a+b+c)^2-2(ab+bc+ca)\}$ 대입'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$24$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/35-57.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$a+b+c$ 와 $ab+bc+ca$ 값을 바꿀 수 있다. 제약 - 네 식의 부호 배치를 유지해야 교차항이 소거되므로 식 구성은 건드리지 않고 조건 값만 바꾼다. 실수 조건에서 $a^2+b^2+c^2 \ge 0$ 이 되도록 두 값의 조합을 고른다.'
    creative: '(1) 네 식 중 하나를 빼면 소거가 깨져 개별 전개가 필요해지고 ★3 으로 내려간다 (2) 세제곱의 합으로 올리면 $abc$ 가 필요해 조건이 하나 더 붙고 ★5 후보 (3) 네 식의 곱을 묻기(계산 마찰만 커져 질 저하 · 피할 변형).'
```

```yaml
- id: GN-CM1-35-58
  page: 35
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    $a+b+c=3$, $a^2+b^2+c^2=11$, $a^3+b^3+c^3=27$ 일 때 $ab(a+b)+bc(b+c)+ca(c+a)$ 의 값.
  category: '조건에서 $e_2$, $e_3$ 확보 → 구하는 대칭식을 $e_1e_2-3e_3$ 로 분해 → 대입'
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '제곱 합에서 $ab+bc+ca$ 를, 세제곱 합 공식에서 $abc$ 를 차례로 끌어낸다'
    - step: 2
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '구하는 식이 $(a+b+c)(ab+bc+ca)-3abc$ 로 분해되는 대칭식임을 알아본다'
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: '곱셈 공식의 변형 - 세 문자 대칭식의 기본 대칭식 분해'
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    구하는 식을 전개해 놓고 $(a+b+c)(ab+bc+ca)$ 와 비교해 $3abc$ 만큼 빠진다는 것을 보는 분해가 핵심이다(I-SYM d2). 그 전에 세 조건에서 $e_2$, $e_3$ 를 차례로 확보해야 한다(I-EQV d1). 실력 UP ★4 유지.
  tier: star_4
  mechanism_primary: '$e_2=-1$ → 세제곱 합 공식으로 $e_3=-3$ → $e_1e_2-3e_3$ 대입'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/35-58.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '세 조건 값을 바꿀 수 있다. 제약 - $e_1$, $e_2$, $e_3$ 를 먼저 정하고 제곱 합·세제곱 합을 역산해야 세 조건이 서로 모순되지 않는다. 값이 정수로 떨어지도록 $e_3$ 를 3 의 배수 근처에서 고른다.'
    creative: '(1) $(a+b)(b+c)(c+a)$ 로 바꾸면 같은 분해 골조가 유지된다(★4) (2) $a^2b+b^2c+c^2a$ 처럼 비대칭 식으로 바꾸면 기본 대칭식 분해가 막혀 난도가 급등(★5 · 공통수학1 범위 밖 주의) (3) 조건 하나를 빼고 값의 범위를 묻기(★5 후보 · I-VF 필요).'
```

```yaml
- id: GN-CM1-35-59
  page: 35
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 실력 UP"
  summary: |
    반지름 4, 중심각 90도인 부채꼴 OAB 의 호 위의 점 P 에서 두 반지름에 내린 수선의 발이 H, I 이고 삼각형 PIH 의 내접원 넓이가 $\dfrac{\pi}{4}$ 일 때 $\seg{PH}^3+\seg{PI}^3$. 5지선다.
  category: '직사각형 OHPI 로 빗변 = 반지름 → 내접원 반지름으로 두 변의 합 → 세제곱 합 공식'
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '두 수선의 발로 생긴 사각형 OHPI 가 직사각형임을 보고 $\seg{HI}=\seg{OP}=4$ 와 직각삼각형 PIH 의 피타고라스 관계로 옮긴다'
    - step: 2
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '내접원 넓이에서 반지름을 얻고 직각삼각형의 내접원 반지름 공식으로 두 변의 합 $\seg{PH}+\seg{PI}$ 를 끌어낸다'
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '합과 제곱 합에서 곱을 구해 $\seg{PH}^3+\seg{PI}^3=(합)^3-3(곱)(합)$ 으로 옮긴다'
  insight_count: 3
  depth_score: 1.67
  type_id: null
  type_hint: '도형 조건에서 곱셈 공식의 변형 적용(합과 제곱 합 → 세제곱 합)'
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    도형을 대수 조건 두 개(합과 제곱 합)로 바꾸는 데 두 단계가 걸리고, 마지막에야 곱셈 공식의 변형이 쓰인다. 발문에 그림 구조가 그대로 서술돼 있어 크롭 없이 골조가 잡힌다. [분류 이슈] 통찰 3개에 I-XU 가 있어 ★5 요건을 형식적으로는 충족하지만 골조가 표준 조합이고 novelty 0 이라 라벨은 실력 UP 출발점 ★4 로 둔다.
  tier: star_4
  mechanism_primary: '직사각형 OHPI → $\seg{PH}^2+\seg{PI}^2=16$ → 내접원 반지름 $\frac{1}{2}$ 로 $\seg{PH}+\seg{PI}=5$ → 세제곱 합 공식'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '②'
  answer_source: "답지"
  figure: 'crop:fig-35-59.png'
  latex: latex-bank/gn-cm1/items/35-59.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '반지름과 내접원 넓이를 바꿀 수 있다. 제약 - 내접원 반지름에서 나온 두 변의 합이 빗변보다 커야 하고 $(합)^2 \le 2 \times$ 제곱 합 을 만족해야 실제 점 P 가 존재한다. 그림 라벨 O, A, B, P, H, I 는 고정한다.'
    creative: '(1) 삼각형 PIH 의 넓이나 둘레를 묻기(★3) (2) 내접원 대신 외접원 조건으로 바꾸면 빗변만 주는 셈이라 조건이 하나 모자라 성립하지 않는다(피할 변형) (3) $\seg{PH}^4+\seg{PI}^4$ 로 올리면 공식 연쇄가 한 겹 늘어 ★5 후보.'
```

```yaml
- id: GN-CM1-35-60
  page: 35
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    $x=1+\sqrt{7}$ 일 때 $2x^4-3x^3+x^2-21x$ 의 값.
  category: '무리수 조건을 이차식 $x^2-2x-6=0$ 으로 → 사차식을 그 이차식으로 나눔 → 나머지에 대입'
  M: {s: 3, k: 3, a: 1, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$x-1=\sqrt{7}$ 로 옮겨 제곱하면 $x^2-2x-6=0$ 이라는 다루기 쉬운 조건이 된다'
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '고차식의 값 구하기를 나눗셈 문제로 바꿔, 몫에 곱해지는 부분이 0 이 되므로 나머지만 계산하면 된다'
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: '무리수 조건의 이차식 변환과 나눗셈을 이용한 식의 값'
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    무리수를 직접 네제곱하면 계산이 감당되지 않으므로 조건을 이차식으로 바꾸고(I-EQV d2), 구하는 식을 그 이차식으로 나눠 나머지만 남기는 전환이 필요하다(I-RT d1). 제곱할 때 $x-1=\sqrt{7}$ 로 먼저 정리하지 않으면 부호·항이 엉킨다(T-부호). 실력 UP ★4 유지.
  tier: star_4
  mechanism_primary: '$x^2-2x-6=0$ → $2x^4-3x^3+x^2-21x$ 를 나눠 나머지 $15x+90$ → $x$ 대입'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$105+15\sqrt{7}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/35-60.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '무리수 조건($2+\sqrt{3}$, $1-\sqrt{5}$)과 고차식 계수를 바꿀 수 있다. 제약 - 조건을 제곱했을 때 정수 계수 이차식이 나와야 하고, 나눗셈 나머지가 일차식으로 남아 대입이 간단해지도록 계수를 고른다. 나머지가 0 이 되면 답이 0 이라 검산이 어렵다.'
    creative: '(1) 값이 유리수가 되도록 계수를 맞추면 검증 성격이 붙어 I-VF d1 · ★4 (2) 조건을 이차방정식의 한 근으로 제시하면 켤레근까지 쓰는 I-SYM d2 · ★5 후보 (3) 오차수를 낮춰 삼차식으로 하면 나눗셈이 짧아져 ★3.'
```

## 표본 판정 요약 (31문)

- ★ 분포: ★1 5 · ★2 13 · ★3 6 · ★4 7 · ★5 0 (premium 0)
- 통찰형 19 · 절차형 12 (라벨된 통찰 단계 29개). 통찰 유형 빈도: I-EQV 15 · I-BW 4 · I-RT 4 · I-SYM 3 · I-SC 1 · I-PD 1 · I-XU 1
- 구역별 ★ 중앙값: 개념원리 익히기 ★1 · 필수·발전 예제 ★2 · STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4. 벤더 신호와 라벨이 2단 이상 어긋난 문항은 없다.
- type_hint 상위(계열로 묶음): 조립제법 계열 6(29-37 · 32-e15 · 32-42 · 32-43 · 33-48 · 34-55) · 곱셈 공식의 변형/대칭식 계열 6(33-47 · 34-51 · 34-52 · 35-56 · 35-57 · 35-58) · 직접 나눗셈의 몫·나머지 계열 5(29-35 · 30-e12 · 30-38 · 30-39 · 34-53) · A=BQ+R 복원 계열 3(29-36 · 31-e13 · 31-40) · 제수 상수배 보정 계열 2(31-e14 · 31-41, 32-e15·32-43·33-48 에서도 보조 단계로 재등장)
- 그림: 1문(`crop:fig-35-59.png`). 나머지 30문은 none이며, 조립제법·세로셈 표는 본문 안의 배열식이라 그림으로 세지 않았다.
- 대상층: 하위권 5 · 중하위권 6 · 중위권 10 · 중상위권 4 · 상위권 6

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CM1-32-42 | 필수·발전 예제 구역(★2 출발)이지만 표가 거의 완성돼 있어 통찰 0 · M_total 4. −1 하여 ★1 로 둠 | ★1 / ★2 |
| GN-CM1-31-e14 | 통찰 1개지만 depth 2 이고 $M_a=3$. 예제 구역 출발점을 지켜 ★2 로 뒀으나 학생 체감은 ★3 경계 | ★2 / ★3 |
| GN-CM1-34-50 | 통찰 2개(RT d2 + EQV d1)로 +1 요건이나, 치환 없이 직접 수 계산으로도 풀려 ★3 유지 | ★3 / ★4 |
| GN-CM1-34-54 | 교육청 기출 · $M_a=3$ · M_total 9 로 ★4 신호가 있으나 통찰이 1개(d2)라 STEP 2 출발점 ★3 유지 | ★3 / ★4 |
| GN-CM1-35-59 | 통찰 3개 + I-XU 로 ★5 형식 요건 충족. 골조가 표준 조합이고 novelty 0 이라 ★4 로 둠 | ★4 / ★5 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형** — ① 「제수를 상수배 했을 때 몫·나머지의 변형」(31-e14 · 31-41): 나눗셈 절차가 아니라 등식 재묶기가 본질이고 오답 패턴(나머지까지 나누기)이 고유하다. ② 「조립제법 표의 역추적」(33-48 · 34-55 · 32-42 의 변형): 정방향 조립제법과 난도·통찰(I-BW)이 다르다. ③ 「나머지의 연산」(34-54): 나머지끼리 곱·제곱한 뒤 차수 조건으로 한 번 더 나누는 골조는 이 단원에서 유일하다.
- **통합해도 될 유형** — ① 「직접 나눗셈으로 몫·나머지 구하기」와 「몫·나머지의 미정계수 결정」(29-35 · 30-e12 · 30-38 · 30-39): 계수 비교가 붙는지만 다르고 골조가 같다. ② 「A=BQ+R 로 피제수 복원」과 「A=BQ+R 에서 제수 구하기」(29-36 · 31-e13 · 31-40): 같은 등식에서 어느 자리를 미지로 두느냐의 차이라 한 유형의 난이도 두 층으로 두는 편이 낫다. ③ 곱셈 공식의 변형 계열(33-47 · 34-51 · 34-52 · 35-56 · 35-57 · 35-58)은 문자 수(2문자/3문자)와 차수로 갈라지므로 「대칭식의 값」 한 유형 아래 하위 층으로 묶는다.
- 05 단원은 연습문제 구역이 대단원 「다항식」 전체를 묶어 내므로, 나눗셈 고유 유형(11문)과 앞 단원 곱셈 공식 계열(8문)이 섞여 있다. 카탈로그를 만들 때 단원 경계가 아니라 골조 기준으로 배치해야 한다.
