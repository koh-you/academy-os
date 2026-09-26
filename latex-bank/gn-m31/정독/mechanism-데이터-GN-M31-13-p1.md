---
name: mechanism-데이터-GN-M31-13-p1
description: 개념원리 중학 3-1 13 제곱근을 이용한 이차방정식의 풀이(1/2 · 123~127쪽 22문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 중학 3-1 · 전사본 latex-bank/gn-m31
  section: 13 제곱근을 이용한 이차방정식의 풀이
  unit_code: GN-M31-13
  part: "1/2"
  extract_range: "123~127쪽 · 123-01~127-05"
  total_problems: 22
  unit_total: 54
  judgment_protocol: "schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22)."
  variation_fields: "mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)"
  latex_source: "latex-bank/gn-m31/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-m31/items/<id>.tex"
  image_source: "latex-bank/gn-m31/figures/ (crops.json)"
---

# 개념원리 중학 3-1 · 13 제곱근을 이용한 이차방정식의 풀이 (1/2) 정독 데이터 (v1.0)

이 파일은 123~127쪽 네 구역 22문항을 담는다. 구역은 「개념원리 확인하기」 5문(123-01~123-05) · 「핵심문제 익히기」 8문(핵심문제 `쪽-hN` 4문 + 확인문제 `쪽-cN` 4문) · 「계산력 강화하기」 4문(126-01~126-04) · 「이런 문제가 시험에 나온다」 5문(127-01~127-05)이다. 개념원리 중학은 문항별 난이도 표기(하·중·상)나 태그가 없고 **구역 자체가 난이도 층**이므로 ★ 출발점을 확인하기 ★1 · 핵심문제 익히기 ★2 · 계산력 강화하기 ★1 · 이런 문제가 시험에 나온다 ★2~3 으로 잡고 M_total·통찰로 ±1 조정했다. 이 범위에 그림은 없다.

단원 성격상 골조가 네 갈래뿐이고 서로 겹쳐 쌓인다. ① 제곱항만 남겨 양변에 ±√ 를 붙이는 직접 풀이(`ax²=b` · `(x+p)²=q`) ② 같은 꼴이 되도록 **완전제곱식으로 고쳐 쓰기**(x² 계수로 나누기 → 상수항 이항 → 일차항 계수의 반의 제곱 더하기) ③ ②에 ①을 이어 붙인 **완전제곱식을 이용한 풀이** ④ 우변의 부호로 결정되는 **근의 존재·중근 조건**. ①~③ 은 순서가 고정된 절차여서 이 범위 22문 중 18문이 절차형이고, 통찰형 4문은 모두 ④ 계열의 `I-EQV`(조건의 동치 변환) 한 갈래다. 나머지 문항의 변별은 통찰이 아니라 분수·유리화 계산과 `(x+p)²` 에서 p 의 부호를 읽는 자리에서 난다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다. 이 단원의 숫자 변형에서 거의 모든 블록이 공유하는 제약은 **완전제곱 뒤 우변 q 가 양수여야 하고 제곱수가 아니어야 한다**(제곱수면 유리수 두 근이 되어 `x=a±√b` 꼴이 사라진다), **x² 의 계수로 나눈 뒤 일차항 계수가 짝수라야 p 가 정수로 떨어진다**, **분수 q 는 유리화·통분 결과가 정리된 꼴인지 먼저 확인한다** 세 가지이므로 각 `variation_notes.numeric` 에 해당 부분을 명시했다.

## 문항 데이터

### 개념원리 확인하기

```yaml
- id: GN-M31-123-01
  page: 123
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    ⑴~⑹ 제곱근을 이용해 풀기 — x²=10 · 3x²=27 · 2x²−48=0 · (x−5)²=49 · 5(x+3)²=15 · (4x−1)²−7=0.
  category: "계수·상수항을 정리해 제곱항만 남기기 → 양변에 ±√ → x 에 대해 풀기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "제곱근을 이용한 이차방정식의 풀이 (ax²=b · (x+p)²=q 꼴)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    여섯 소문항 모두 제곱항만 남긴 뒤 ±√ 한 번이면 끝난다. 착안 여지가 없고 확인할 것은 근호 정리(√48=4√3)와 ⑹ 처럼 괄호 안 계수가 1이 아닐 때 한 번 더 나누는 마무리뿐이다.
    확인하기 구역 출발 ★1 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "제곱항만 남도록 정리 → 양변에 ±√ → 괄호 안 일차식을 x 에 대해 풀기"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $x=\pm\sqrt{10}$ ⑵ $x=\pm3$ ⑶ $x=\pm2\sqrt{6}$ ⑷ $x=-2$ 또는 $x=12$ ⑸ $x=-3\pm\sqrt{3}$ ⑹ $x=\dfrac{1\pm\sqrt{7}}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/123-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "양변의 계수와 상수항. 제약: 제곱항만 남겼을 때 우변이 0 이상이어야 하고(음수면 해가 없어 이 유형에서 벗어난다), √q 가 더 줄지 않는 꼴인지 확인한다(√48 → 4√3). 우변이 제곱수면 ⑵ ⑷ 처럼 유리수 두 근이 되어 난이도가 한 단 내려간다."
    creative: "(1) 해를 먼저 주고 상수를 되묻기(★2 · I-EQV d1) (2) 우변을 음수로 만들어 '해가 없는 것을 모두 고르시오'로 바꾸기(★2 · I-EQV d1) (3) 두 근의 합·차·곱을 묻는 한 단계 붙이기(★2). 제곱항만 남기는 골조를 유지하면 ★1."
```

```yaml
- id: GN-M31-123-02
  page: 123
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    x²−8x+3=0 을 (x+p)²=q 꼴로 고치는 과정의 빈칸 네 개 채우기.
  category: "상수항 이항 → 일차항 계수의 반의 제곱을 양변에 더하기 → 완전제곱식으로 묶기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차방정식을 (x+p)²=q 꼴로 나타내기 (완전제곱식)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    더할 수가 (−8÷2)²=16 임을 알면 나머지는 양변 정리뿐이고 과정이 빈칸으로 주어져 순서를 스스로 세울 필요가 없다. 마지막 칸에서 (x−4)² 의 4 를 부호까지 맞춰 적는 것이 유일한 주의점.
    확인하기 구역 ★1 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "상수항 이항 → 양변에 (일차항 계수÷2)² 더하기 → (x−4)²=13"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$16$, $16$, $4$, $13$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/123-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항 계수와 상수항. 제약: 일차항 계수가 짝수라야 더하는 수와 p 가 정수로 떨어지고 홀수면 분수가 들어가 빈칸의 성격이 달라진다. 우변 q 는 이 단계까지는 음수여도 성립하지만 다음 단계(제곱근 풀이)로 이으려면 양수."
    creative: "(1) 빈칸을 줄여 결과 (x+p)²=q 만 쓰게 하기(★1 유지) (2) p+q 나 pq 를 묻는 한 단계 붙이기(★2) (3) x² 의 계수를 1이 아닌 수로 두어 먼저 나누는 단계를 앞에 넣기(123-04 골조 ★1~2)."
```

```yaml
- id: GN-M31-123-03
  page: 123
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    ⑴ x²−4x−1=0 ⑵ 2x²+4x−5=0 을 (x+p)²=q 꼴로 나타내기.
  category: "x² 의 계수로 나누기 → 상수항 이항 → 반의 제곱 더하기 → 완전제곱식"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차방정식을 (x+p)²=q 꼴로 나타내기 (완전제곱식)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    123-02 에서 빈칸 유도를 뗀 형태다. ⑵ 는 먼저 2로 나누는 단계가 앞에 붙어 네 단계가 되고 상수항이 −5/2 분수로 바뀐다(Mₛ 2).
    순서가 고정된 표준 절차라 통찰 없음. 확인하기 ★1 → ★1(통찰 0·M_total 5 의 −1 후보이나 이미 하한).
  tier: star_1
  mechanism_primary: "x² 의 계수로 나누기 → 상수항 이항 → 양변에 (일차항 계수÷2)² → (x+p)²=q"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $(x-2)^2=5$ ⑵ $(x+1)^2=\dfrac{7}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/123-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x² 의 계수·일차항 계수·상수항. 제약: 나눈 뒤 일차항 계수가 짝수라야 p 가 정수이고, 아니면 ⑵ 처럼 q 가 분수가 되므로 분수 상수항과 통분되는지 확인한다."
    creative: "(1) p, q 값을 따로 묻기(125-h3 골조 ★2) (2) p+q · p−q 로 묶기(125-c3 ★2 · 부호 함정을 키우면 ★3) (3) 좌우변에 식이 흩어진 꼴로 주어 먼저 정리하게 하기(127-03 골조 ★3)."
```

```yaml
- id: GN-M31-123-04
  page: 123
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    완전제곱식으로 3x²+12x+7=0 을 푸는 과정의 빈칸 일곱 개 채우기(마지막 칸은 해).
  category: "3으로 나누기 → 이항 → 반의 제곱 더하기 → ±√ → 유리화해 한 분수로"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "완전제곱식을 이용한 이차방정식의 풀이"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    과정이 전부 빈칸으로 주어져 착안은 없으나 √(5/3)=√15/3 유리화와 −2±√15/3 을 (−6±√15)/3 한 분수로 묶는 정리가 붙어 계산 단계가 길다(Mₖ 2).
    계산 마찰은 v3.8 §2.11 에서 ★ 상승 신호가 아니다. 확인하기 ★1 · 통찰 0 → ★1(이 구역 ★1 중 무거운 쪽).
  tier: star_1
  mechanism_primary: "양변 ÷3 → 상수항 이항 → +4 → (x+2)²=5/3 → x+2=±√15/3 → x=(−6±√15)/3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$4$, $4$, $2$, $\dfrac{5}{3}$, $2$, $\dfrac{\sqrt{15}}{3}$, $\dfrac{-6\pm\sqrt{15}}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/123-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x² 의 계수와 상수항. 제약: 나눈 뒤 일차항 계수가 짝수여야 하고, q 가 분수면 √q 유리화가 필요하므로 분모가 제곱수인지(또는 유리화 결과가 정리되는지) 먼저 확인한다. 마지막에 한 분수로 묶으려면 분모가 통일되어야 한다."
    creative: "(1) 빈칸을 없애고 해만 묻기(123-05 골조 ★1) (2) 빈칸을 문자 A, B, C 로 바꿔 A+2B+C 를 묻기(127-04 골조 ★2) (3) 해를 주고 상수항을 되묻기(125-c4 골조 ★2 · I-EQV d1)."
```

```yaml
- id: GN-M31-123-05
  page: 123
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    ⑴ x²+6x−2=0 ⑵ 4x²−20x+5=0 을 완전제곱식을 이용해 풀기.
  category: "x² 계수로 나누기 → 완전제곱식 꼴 → ±√ → 해를 한 분수로 정리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "완전제곱식을 이용한 이차방정식의 풀이"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    유도 없이 다섯 단계를 스스로 밟아야 하고 ⑵ 는 4로 나눈 뒤 일차항 계수가 −5(홀수)라 p=5/2 분수가 끼어들며 해도 (5±2√5)/2 로 묶어야 한다.
    그래도 순서가 고정된 절차이고 확인하기 구역이므로 ★1(이 구역에서 가장 무거운 문항).
  tier: star_1
  mechanism_primary: "x² 계수로 나누기 → 이항 → (일차항 계수÷2)² 더하기 → ±√ → 한 분수로 정리"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $x=-3\pm\sqrt{11}$ ⑵ $x=\dfrac{5\pm2\sqrt{5}}{2}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/gn-m31/items/123-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x² 의 계수·일차항 계수·상수항. 제약: 완전제곱 뒤 우변이 양수여야 실근이 나오고, 홀수 일차항 계수는 p 를 분수로 만들어 마지막에 분모를 통일하는 정리가 필요하다. 우변이 제곱수면 유리수 두 근이 되어 이 단원의 목적에서 벗어난다."
    creative: "(1) 과정을 빈칸으로 유도하기(123-04 ★1) (2) 해를 x=a±√b 꼴로 두고 a+b·ab 를 묻기(124-h1 · 127-05 골조 ★2) (3) 상수항을 문자로 두고 근을 가질 조건을 묻기(★2~3 · I-EQV d1)."
```

### 핵심문제 익히기

```yaml
- id: GN-M31-124-h1
  page: 124
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제 익히기"
  summary: |
    6−3(x−1)²=0 의 해가 x=a±√b 일 때 유리수 a, b 의 합.
  category: "제곱항만 남기기 → 제곱근 풀이 → 해를 a±√b 꼴로 읽어 a, b 대응 → 합"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "해가 x=a±√b 꼴일 때 a, b 의 값 · 두 근의 차"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    −3 으로 나눌 때 부호만 주의하면 (x−1)²=2 → x=1±√2 한 줄이고, 남은 일은 a=1, b=2 로 읽는 대응뿐이다. 해의 꼴이 이미 x=a±√b 로 제시돼 변환 착안이 없어 절차형.
    핵심문제 구역 출발 ★2 · 통찰 0 · M_total 6 → ★2. 벤더 예제 제목은 「제곱근을 이용한 이차방정식의 풀이」이나 실제 변별은 a, b 를 읽어내는 마무리 단계에 있어 type_hint 를 그쪽으로 두었다.
  tier: star_2
  mechanism_primary: "6−3(x−1)²=0 → (x−1)²=2 → x=1±√2 → a=1, b=2 → a+b"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$3$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/124-h1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "괄호 안 상수와 좌우 계수. 제약: 나눈 뒤 우변이 양수여야 하고 b 는 제곱수가 아니어야 한다(제곱수면 √b 가 정수가 되어 a±√b 로 읽는 의미가 사라진다). b 는 근호 안에서 더 줄지 않는 수로 고른다."
    creative: "(1) a−b · ab 로 바꾸기(127-05 ★2) (2) 두 근의 차·합을 묻기(127-01 ★2) (3) 계수를 문자로 두고 해를 먼저 준 뒤 그 문자를 되묻기(125-c4 ★2 · I-EQV d1)."
```

```yaml
- id: GN-M31-124-c1
  page: 124
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제 익히기"
  summary: |
    이차방정식 다섯 개와 그 해의 짝 중 바르게 짝 지어지지 않은 것 고르기(5지선다).
  category: "보기마다 제곱항만 남겨 풀고 제시된 해와 대조 → 어긋나는 것 찾기"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "제곱근을 이용한 이차방정식의 풀이 (ax²=b · (x+p)²=q 꼴)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    다섯 보기를 각각 풀어야 해 단계와 계산이 쌓이지만 골조는 ①~⑤ 모두 같은 제곱근 풀이다(Mₖ 2).
    ⑤ 는 (2x−3)²=5 에서 ±√5 뒤 x 의 계수 2 로 나누는 마지막 단계를 빠뜨리면 3±√5 로 보이는 전형적 함정(T-표기).
    핵심문제 구역 ★2 · 통찰 0 → ★2.
  tier: star_2
  mechanism_primary: "보기별로 (ax+b)²=q 로 정리 → ±√q → x 의 계수로 나누기 → 제시된 해와 대조"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑤'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/124-c1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 보기의 계수·상수. 제약: 오답 보기는 '계수로 나누기 누락' 또는 '근호 정리 누락' 같은 단일 원인으로만 틀리게 만들고 나머지 네 개는 정확히 맞아야 한다. 정답 보기 위치를 바꿀 때 다른 보기의 해도 함께 다시 계산한다."
    creative: "(1) 틀린 보기를 바르게 고치게 하는 서술형(★2) (2) '해가 없는 것을 고르시오'로 바꾸면 우변 부호 판단이 주가 되어 I-EQV d1 ★2 (3) 보기에 문자 상수를 넣으면 Mₐ 가 올라 ★3."
```

```yaml
- id: GN-M31-124-h2
  page: 124
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제 익히기"
  summary: |
    상수 p, q 에 대해 (x−p)²=q+1 이 근을 가질 조건 고르기(5지선다).
  category: "완전제곱 = 우변 → 근의 존재 ⇔ 우변 ≥ 0 → q ≥ −1 (p 는 무관)"
  M: {s: 1, k: 1, a: 2, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'근을 가진다'를 '(완전제곱)의 값이 0 이상이다' 즉 q+1 ≥ 0 으로 옮겨 쓰는 동치 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "이차방정식 (x+p)²=q 가 근을 가질 조건 · 중근을 가질 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    계산은 q+1 ≥ 0 한 줄이지만 '근을 가진다'를 우변의 부호 조건으로 옮기는 동치 변환이 문항의 전부다(I-EQV d1).
    p 가 조건과 무관하다는 점(T-범위)과 중근(우변 0)을 포함하는 등호 경계(T-경계)가 두 오답 원인이고 보기가 그 둘을 각각 겨냥한다.
    핵심문제 구역 ★2 · 통찰 1개(depth 1) → +1 조건(2개 이상 또는 depth 3) 미충족 → ★2.
  tier: star_2
  mechanism_primary: "(x−p)² ≥ 0 → 근 존재 ⇔ q+1 ≥ 0 → q ≥ −1"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '③'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/124-h2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변의 상수항(q+1 → q−3 등)과 좌변의 p. 제약: 답이 부등식 경계로 나오므로 등호 포함 여부가 보기에서 구분돼야 하고, p 가 들어간 보기를 오답으로 남겨 무관함을 시험해야 한다."
    creative: "(1) '중근을 가질 조건'으로 바꾸면 등호만 남아 경계 판단이 강해진다(127-02 골조 ★3) (2) '해가 없을 조건'으로 뒤집기(★2 · 부등호 방향 함정 추가) (3) 좌변을 x²+ax+b 꼴로 주어 완전제곱 단계를 앞에 붙이면 ★3."
```

```yaml
- id: GN-M31-124-c2
  page: 124
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제 익히기"
  summary: |
    (x+1)²=2−k 가 근을 갖도록 하는 상수 k 의 값으로 알맞지 않은 것 고르기(5지선다).
  category: "근의 존재 ⇔ 2−k ≥ 0 → k ≤ 2 → 보기에서 벗어나는 값 찾기"
  M: {s: 1, k: 1, a: 2, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'근을 가진다'를 2−k ≥ 0 으로 옮기고 −k 때문에 부등호 방향이 뒤집히는 것까지 처리하는 동치 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "이차방정식 (x+p)²=q 가 근을 가질 조건 · 중근을 가질 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    124-h2 의 조건을 구체적인 수 보기로 바꾼 짝 문항이다. 동치 변환 뒤 −k 에서 부등호 방향이 뒤집히는 것(T-부호)과 k=2(중근)가 허용된다는 경계(T-경계)가 오답의 두 원인.
    핵심문제 구역 확인문제 ★2 · 통찰 1개 → ★2.
  tier: star_2
  mechanism_primary: "근 존재 ⇔ 2−k ≥ 0 → k ≤ 2 → 보기 중 k=3 만 벗어남"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑤'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/124-c2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 상수 2 와 보기의 다섯 수. 제약: 경계값(여기서 k=2)이 보기 안에 반드시 들어가야 중근 포함 여부를 시험할 수 있고, 조건을 벗어나는 값은 정확히 하나여야 한다."
    creative: "(1) '근을 갖지 않게 하는 k 의 최솟값'처럼 값을 직접 구하게 하기(★2) (2) k 를 자연수로 제한해 개수를 묻기(★2) (3) 좌변을 x²+2x+1 로 펼쳐 주면 완전제곱 정리 단계가 앞에 붙어 ★3."
```

```yaml
- id: GN-M31-125-h3
  page: 125
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제 익히기"
  summary: |
    ⑴ x²−2x−4=0 ⑵ 4x²+12x−1=0 을 (x+p)²=q 꼴로 나타낼 때 상수 p, q 의 값.
  category: "x² 계수로 나누기 → 이항 → 반의 제곱 더하기 → (x+p)²=q 에서 p, q 읽기"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차방정식을 (x+p)²=q 꼴로 나타내기 (완전제곱식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    123-03 과 같은 골조에 p, q 를 문자로 읽어내는 단계가 붙었다(Mₐ 2). ⑵ 는 4로 나눈 뒤 p=3/2, q=5/2 로 분수 둘이 나온다(Mₖ 2).
    ⑴ 에서 (x−1)² 인데 p=1 로 적는 부호 실수(T-부호)가 이 유형의 고정 오답이다.
    핵심문제 구역 ★2 · 통찰 0 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "양변 ÷ x² 계수 → 상수항 이항 → +(일차항 계수÷2)² → (x+p)²=q 에서 p, q 대응"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $p=-1$, $q=5$ ⑵ $p=\dfrac{3}{2}$, $q=\dfrac{5}{2}$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/125-h3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x² 의 계수·일차항 계수·상수항. 제약: p 의 부호는 괄호 안 부호 그대로여야 하고((x−1)² 이면 p=−1), 나눈 뒤 일차항 계수가 홀수면 p·q 가 분수가 되어 분수 통분이 답을 결정한다."
    creative: "(1) p+q · pq · p−q 로 한 단계 묶기(125-c3 · 127-03 ★2~3) (2) q 만 주고 상수항을 되묻기(125-c4 ★2 · I-EQV d1) (3) 좌우변에 식이 흩어진 꼴로 주기(127-03 ★3)."
```

```yaml
- id: GN-M31-125-c3
  page: 125
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제 익히기"
  summary: |
    1+2x²=x²−6x 를 (x+p)²=q 꼴로 나타낼 때 상수 p, q 에 대하여 p+q 의 값.
  category: "한쪽으로 이항해 x²+6x+1=0 으로 정리 → 완전제곱식 → p, q → 합"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차방정식을 (x+p)²=q 꼴로 나타내기 (완전제곱식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x² 항이 양변에 흩어져 있어 먼저 이항해 x²+6x+1=0 으로 정리하는 단계가 앞에 붙을 뿐 나머지는 125-h3 과 같다.
    이항 결과 x² 의 계수가 1로 떨어지는 것을 확인하는 것이 유일한 주의점이고 p, q 가 모두 정수라 계산은 가볍다.
    핵심문제 구역 확인문제 ★2 · 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "이항해 x²+6x+1=0 → (x+3)²=8 → p=3, q=8 → p+q"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$11$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/125-c3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "양변에 흩어진 x² 계수·일차항 계수·상수항. 제약: 이항 뒤 x² 의 계수가 1이 아니면 나누는 단계가 하나 더 붙고, 일차항 계수는 짝수여야 p 가 정수로 떨어진다."
    creative: "(1) p−q 나 pq 로 바꾸면 부호 함정이 커진다(127-03 ★3) (2) 정리한 식을 풀어 해까지 묻기(★2) (3) 양변에 문자 계수를 넣어 p 가 정해질 조건을 묻기(★3 · I-BW)."
```

```yaml
- id: GN-M31-125-h4
  page: 125
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제 익히기"
  summary: |
    ⑴ x²+8x+13=0 ⑵ 2x²−4x−7=0 을 (완전제곱식을 이용하여) 풀기.
  category: "완전제곱식 꼴로 고치기 → ±√ → 유리화·통분해 해 정리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "완전제곱식을 이용한 이차방정식의 풀이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    123-05 와 같은 골조이나 구역이 핵심문제다. ⑵ 는 2로 나눈 뒤 (x−1)²=9/2 가 되어 √(9/2)=3√2/2 유리화와 (2±3√2)/2 로 묶는 정리가 붙는다(Mₖ 2).
    착안 없이 순서만 지키면 되는 절차형. 핵심문제 ★2 · 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "x² 계수로 나누기 → 이항 → +(일차항 계수÷2)² → ±√ → (2±3√2)/2 처럼 한 분수로"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $x=-4\pm\sqrt{3}$ ⑵ $x=\dfrac{2\pm3\sqrt{2}}{2}$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/125-h4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항 계수(짝수 권장)와 상수항. 제약: 완전제곱 뒤 우변이 양수여야 하고, 분수 q 는 유리화 결과가 정리되는 값(9/2 → 3√2/2)으로 고른다. q 가 제곱수면 유리수 두 근이 되어 유형에서 벗어난다."
    creative: "(1) 해를 x=a±√b 꼴로 두고 a+b 를 묻기(124-h1 ★2) (2) 두 근의 차를 묻기(127-01 ★2) (3) 상수항을 문자로 두고 해를 먼저 주어 되묻기(125-c4 ★2 · I-EQV d1)."
```

```yaml
- id: GN-M31-125-c4
  page: 125
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제 익히기"
  summary: |
    3x²−12x−k=0 의 해가 x=2±√5 일 때 상수 k 의 값.
  category: "해 x=2±√5 ⇔ (x−2)²=5 로 되돌리기 → 식의 완전제곱 꼴과 우변 비교 → k"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "주어진 해 x=2±√5 를 (x−2)²=5 라는 완전제곱 꼴로 되돌려, 식을 완전제곱한 결과의 우변과 맞대는 동치 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "해가 주어진 이차방정식에서 상수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    해를 그대로 대입해도 풀리지만 무리수 계산이 길어진다. 해를 (x−2)²=5 로 되돌려 식의 완전제곱 결과 (x−2)²=4+k/3 과 우변끼리 맞추면 k/3=1 한 줄이다(I-EQV d1).
    3 으로 나눌 때 −k/3 의 부호가 유일한 함정. 핵심문제 구역 확인문제 ★2 · 통찰 1개 → ★2.
    [분류 이슈] 이 동치 변환을 통찰로 셀지 표준 역대입 절차로 볼지 경계 — 절차로 보면 절차형 ★2(대상층만 중하위권).
  tier: star_2
  mechanism_primary: "x²−4x−k/3=0 → (x−2)²=4+k/3 · 해 ⇔ (x−2)²=5 → 4+k/3=5 → k=3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/125-c4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x² 의 계수와 해의 a, b. 제약: 해의 a 는 (일차항 계수÷2)의 부호 반대값으로 이미 정해져 자유롭게 못 바꾼다. 바꿀 수 있는 것은 b(=q)와 그에 맞춘 상수항이며 b 는 제곱수가 아니어야 한다."
    creative: "(1) 상수 대신 일차항 계수를 문자로 두면 a 로부터 역산하는 단계가 붙어 ★3 · I-BW (2) 한 근만 주고 나머지 근을 묻기(★2) (3) 구한 k 를 다른 식에 대입하는 두 단계 결합(★3)."
```

### 계산력 강화하기

```yaml
- id: GN-M31-126-01
  page: 126
  vendor_label: "계산력 강화하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "계산력 강화하기"
  summary: |
    ⑴~⑹ x²=7 · x²−15=0 · 2x²=8 · 9x²=2 · 3x²−15=0 · 25x²−3=0 풀기.
  category: "양변을 정리해 x²=k → ±√k → 근호·분수 정리"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "제곱근을 이용한 이차방정식의 풀이 (ax²=b · (x+p)²=q 꼴)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x²=(수) 로 만든 뒤 ±√ 한 번. 이 구역의 가장 기본형으로 확인할 것은 √(2/9)=√2/3 처럼 분모가 제곱수일 때 근호를 정리하는 자리뿐이다(T-표기).
    계산력 강화 구역 ★1 · 통찰 0 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "양변 정리해 x²=k → x=±√k → 근호·분수 정리"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $x=\pm\sqrt{7}$ ⑵ $x=\pm\sqrt{15}$ ⑶ $x=\pm2$ ⑷ $x=\pm\dfrac{\sqrt{2}}{3}$ ⑸ $x=\pm\sqrt{5}$ ⑹ $x=\pm\dfrac{\sqrt{3}}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/126-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x² 의 계수와 상수. 제약: 우변이 양수여야 하고, 분수 꼴은 분모가 제곱수일 때만 √a/b 로 깔끔히 떨어진다. 완전제곱수를 쓰면 ±정수가 되어 난이도가 한 단 내려간다."
    creative: "(1) 해를 주고 계수를 되묻기(★2) (2) '해가 정수인 것을 모두 고르시오'로 묶어 분류형으로(★2) (3) 두 근의 곱·차를 묻는 단계 붙이기(★2)."
```

```yaml
- id: GN-M31-126-02
  page: 126
  vendor_label: "계산력 강화하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "계산력 강화하기"
  summary: |
    ⑴~⑻ (x+1)²=6 류 완전제곱 꼴 여덟 개를 제곱근을 이용해 풀기(괄호 안 계수가 1이 아닌 2(3x−2)²−28=0 등 포함).
  category: "계수로 나눠 제곱항만 남기기 → ±√ → 괄호 안 일차식을 x 에 대해 풀기"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "제곱근을 이용한 이차방정식의 풀이 (ax²=b · (x+p)²=q 꼴)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑹ ⑺ ⑻ 처럼 괄호 안 x 의 계수가 1이 아니면 ±√ 뒤 한 번 더 나누어야 하고 답이 (2±√14)/3 꼴 분수가 된다(Mₖ 2).
    ⑵ ⑹ 처럼 우변이 제곱수면 두 유리수 근으로 갈라진다는 것도 같은 절차 안에서 처리된다. 순서는 고정.
    계산력 강화 구역 ★1 · 통찰 0 → ★1.
  tier: star_1
  mechanism_primary: "계수로 나눠 (ax+b)²=q → ax+b=±√q → x=(−b±√q)/a"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $x=-1\pm\sqrt{6}$ ⑵ $x=-\dfrac{3}{2}$ 또는 $x=3$ ⑶ $x=-7\pm2\sqrt{3}$ ⑷ $x=4\pm\sqrt{2}$ ⑸ $x=-6\pm\sqrt{5}$ ⑹ $x=-4$ 또는 $x=3$ ⑺ $x=\dfrac{3\pm\sqrt{10}}{5}$ ⑻ $x=\dfrac{2\pm\sqrt{14}}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/126-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "괄호 안 계수·상수와 우변. 제약: 우변이 제곱수면 유리수 두 근으로(⑵ ⑹), 아니면 ± 꼴로 남는다. 바꿀 때 √q 가 더 줄어드는지(√60 → 2√15) 확인하고, 괄호 밖 계수로 먼저 나눈 값이 정수인지 본다."
    creative: "(1) 해가 유리수인 것만 고르게 하기(★2) (2) 해를 주고 우변을 되묻기(★2) (3) 괄호 대신 x²+ax 꼴로 주어 완전제곱 단계를 앞에 붙이기(126-04 ★1)."
```

```yaml
- id: GN-M31-126-03
  page: 126
  vendor_label: "계산력 강화하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "계산력 강화하기"
  summary: |
    ⑴~⑹ 여섯 개의 이차방정식을 (x+p)²=q 꼴로 나타내기(x²+x−5=0 · 5x²−15x−3=0 등 포함).
  category: "x² 계수로 나누기 → 이항 → 반의 제곱 더하기 → 통분해 q 결정"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차방정식을 (x+p)²=q 꼴로 나타내기 (완전제곱식)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑶ ⑹ 처럼 일차항 계수가 홀수면 더하는 수가 분수(1/4 · 9/4)가 되고 우변이 21/4 · 57/20 처럼 통분으로 결정된다(Mₖ 2).
    착안은 없고 순서만 지키면 되며, 분모 통분 실수가 이 문항의 주 오답이다. 계산 마찰은 ★ 상승 신호가 아니다(v3.8 §2.11).
    계산력 강화 구역 ★1 · 통찰 0 → ★1.
  tier: star_1
  mechanism_primary: "÷(x² 계수) → 상수항 이항 → +(일차항 계수÷2)² → (x+p)²=q"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $(x+3)^2=6$ ⑵ $(x-2)^2=2$ ⑶ $\left(x+\dfrac{1}{2}\right)^2=\dfrac{21}{4}$ ⑷ $(x-1)^2=\dfrac{3}{2}$ ⑸ $(x+4)^2=\dfrac{40}{3}$ ⑹ $\left(x-\dfrac{3}{2}\right)^2=\dfrac{57}{20}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/126-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x² 계수·일차항 계수·상수항 모두. 제약: 홀수 일차항 계수는 p 를 분수로 만들고, x² 계수로 나눈 분수 상수항과 통분해야 q 가 나온다. p 의 부호는 괄호 안 부호 그대로 읽는다."
    creative: "(1) p, q 를 따로 묻기(125-h3 ★2) (2) p+q 를 묻기(125-c3 ★2) (3) 여기서 한 단계 더 나아가 해까지 구하게 하기(126-04 ★1)."
```

```yaml
- id: GN-M31-126-04
  page: 126
  vendor_label: "계산력 강화하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "계산력 강화하기"
  summary: |
    ⑴~⑻ 여덟 개의 이차방정식을 완전제곱식을 이용해 풀기(5x²+5x+1=0 · 3x²−4x−1=0 등 포함).
  category: "완전제곱식 꼴로 고치기 → ±√ → 유리화·통분해 한 분수로"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "완전제곱식을 이용한 이차방정식의 풀이"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    126-03 에 제곱근 단계와 답 정리가 붙은 형태로 이 구역에서 가장 길다. ⑺ 은 (x+1/2)²=1/20 에서 √(1/20)=√5/10 유리화까지 필요하다(Mₖ 2).
    반복 숙달용이고 착안은 없다. 계산력 강화 구역 ★1 · 통찰 0 → ★1(계산량만으로 올리지 않음).
  tier: star_1
  mechanism_primary: "÷(x² 계수) → 이항 → +(일차항 계수÷2)² → ±√q → 한 분수로 정리"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $x=-1\pm\sqrt{5}$ ⑵ $x=5\pm\sqrt{6}$ ⑶ $x=-4\pm\sqrt{11}$ ⑷ $x=\dfrac{3\pm\sqrt{13}}{2}$ ⑸ $x=\dfrac{-2\pm\sqrt{7}}{2}$ ⑹ $x=\dfrac{6\pm3\sqrt{2}}{2}$ ⑺ $x=\dfrac{-5\pm\sqrt{5}}{10}$ ⑻ $x=\dfrac{2\pm\sqrt{7}}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/126-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "여덟 소문항의 계수. 제약: 완전제곱 뒤 우변이 양수여야 하고, 분모가 제곱수가 아닌 q(1/20 · 7/9)는 유리화 결과가 정리되는 값인지 먼저 확인한다. q 가 제곱수면 유리수 두 근이 되어 이 단원의 목적에서 벗어난다."
    creative: "(1) 소문항 수를 줄이고 각각의 두 근의 합·곱을 묻기(★2) (2) 해가 x=a±√b 꼴인 것만 고르게 하기(★2) (3) 한 소문항의 상수항을 문자로 바꾸고 해를 주어 되묻기(125-c4 ★2 · I-EQV d1)."
```

### 이런 문제가 시험에 나온다

```yaml
- id: GN-M31-127-01
  page: 127
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    7(x+4)²−35=0 의 두 근의 차(5지선다).
  category: "제곱항만 남기기 → x=−4±√5 → 큰 근 − 작은 근 = 2√5"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "해가 x=a±√b 꼴일 때 a, b 의 값 · 두 근의 차"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (x+4)²=5 → x=−4±√5 까지는 한 줄이고, 마지막에 '차'를 묻는 한 단계가 더 붙는다. 두 근의 차가 2√q 임을 알면 즉시 나온다.
    빼는 과정에서 −4 가 상쇄되는 것을 놓치면 8·4 같은 오답 보기로 가고, 합(−8)과 혼동하는 것도 흔하다(T-부호).
    시험 구역 출발 ★2~3 · 통찰 0 · M_total 5 → 하단 ★2(−1 후보이나 '차' 단계가 있어 유지).
  tier: star_2
  mechanism_primary: "7(x+4)²=35 → (x+4)²=5 → x=−4±√5 → 두 근의 차 2√5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '②'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/127-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "좌우 계수와 괄호 안 상수. 제약: 두 근의 차는 2√q 이므로 q 만 바뀌면 되고 괄호 안 상수는 답에 영향이 없다(오답 보기를 만드는 자리). q 가 제곱수면 차가 정수가 되어 변별이 사라진다."
    creative: "(1) 두 근의 합·곱을 묻기(합은 괄호 안 상수로 결정 ★2) (2) 큰 근만 묻기(★2) (3) 두 근의 차를 주고 계수를 되묻기(★3 · I-BW)."
```

```yaml
- id: GN-M31-127-02
  page: 127
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    3(x−2)²=k+1 이 중근 x=a 를 가질 때 k+a 의 값(k 는 상수).
  category: "중근 ⇔ 우변 = 0 → k=−1 → 좌변 괄호에서 중근 a=2 → 합"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'중근을 가진다'를 '(완전제곱)=0' 즉 k+1=0 으로 옮기는 동치 변환 — 근이 있을 조건(≥0)과 구별해야 함"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "이차방정식 (x+p)²=q 가 근을 가질 조건 · 중근을 가질 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    근을 가질 조건(우변 ≥ 0)과 중근 조건(우변 = 0)을 가르는 경계 판단이 문항의 핵심이다(I-EQV d1 · T-경계).
    k=−1 을 얻은 뒤 중근이 x=2 라는 것은 좌변 괄호에서 바로 읽으면 되지만, 해를 구하는 문제로 착각해 ±√ 를 붙이면 막힌다.
    시험 구역 출발 ★2~3 에서 조건 동치 변환 + 두 값 결합으로 상단 → ★3(M_total 7 · 이 범위 최고 난도와 동급).
  tier: star_3
  mechanism_primary: "중근 ⇔ k+1=0 → k=−1 · (x−2)²=0 → a=2 → k+a"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/127-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "좌변 계수·괄호 안 상수와 우변 상수항. 제약: 중근 조건은 우변 = 0 이므로 k 는 우변 상수항 하나로 결정되고, 괄호 안 상수가 그대로 a 가 된다(부호 주의). 좌변 계수는 답에 영향이 없다."
    creative: "(1) '근을 갖지 않을 조건'으로 바꾸면 부등식 + 부호 뒤집기가 붙는다(★2~3) (2) 좌변을 x²+ax+b 꼴로 주어 완전제곱 단계를 앞에 붙이면 ★4 후보 (3) 중근의 값을 주고 계수를 되묻기(★3 · I-BW)."
```

```yaml
- id: GN-M31-127-03
  page: 127
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    3x²−4x=2(x+1)² 을 (x+p)²=q 꼴로 나타낼 때 상수 p, q 에 대하여 p−q 의 값.
  category: "우변 전개·이항해 x²−8x−2=0 → 완전제곱식 → p, q → 차"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차방정식을 (x+p)²=q 꼴로 나타내기 (완전제곱식)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    곱셈 공식으로 우변을 전개해 한쪽으로 모으면 x²−8x−2=0 이 되고 x² 의 계수가 마침 1로 떨어진다. 이후는 표준 완전제곱.
    (x−4)²=18 에서 p=−4 로 읽어야 하고 묻는 것이 p−q 라 부호 실수가 곧바로 답을 바꾼다(T-부호). 전개 → 이항 → 완전제곱 → 대응의 네 겹이 쌓여 M_total 7.
    시험 구역 ★2~3 · 통찰 0 → ★3. [분류 이슈] 통찰 없이 단계 수와 부호 함정만으로 ★3 이라 ★2 와 경계.
  tier: star_3
  mechanism_primary: "우변 전개 → 이항해 x²−8x−2=0 → (x−4)²=18 → p=−4, q=18 → p−q"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-22$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/127-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "양변의 계수. 제약: 이항 뒤 x² 의 계수가 1이 아니면 나누는 단계가 하나 더 붙고, 일차항 계수는 짝수라야 p 가 정수. q 는 이 꼴까지는 음수여도 성립하지만 풀이로 이으려면 양수."
    creative: "(1) p+q · pq 로 바꾸면 부호 함정이 약해져 ★2 (2) 정리한 뒤 해까지 구하게 하기(★3) (3) 우변을 a(x+1)² 처럼 문자 계수로 두고 q 가 주어진 값이 되게 하는 a 를 묻기(★4 · I-BW)."
```

```yaml
- id: GN-M31-127-04
  page: 127
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    완전제곱식으로 2x²+6x−3=0 을 푸는 과정에서 상수 A, B, C 에 대하여 A+2B+C 의 값.
  category: "과정의 빈칸을 문자로 읽기 → A=(3/2)² · B=3/2 · C=3/2+A → 묻는 식에 대입"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "완전제곱식을 이용한 이차방정식의 풀이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    풀이 과정이 전부 주어져 착안은 없고, A=9/4 · B=3/2 · C=15/4 를 차례로 읽어 분수 셋을 통분해 더하는 계산이 전부다(Mₐ 2 는 문자 상수 · Mₖ 2 는 분수).
    계산 마찰은 v3.8 §2.11 에서 ★ 상승 신호가 아니므로 시험 구역 출발 ★2~3 의 하단 → ★2.
    [분류 이슈] M_total 7 인데 ★2 — 단계·분수는 무겁지만 전부 유도돼 있어 올리지 않았다.
  tier: star_2
  mechanism_primary: "x²+3x=3/2 → A=(3/2)²=9/4 · B=3/2 · C=3/2+9/4=15/4 → A+2B+C"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$9$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/127-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x² 의 계수와 상수항, 그리고 묻는 식(A+2B+C)의 계수. 제약: 나눈 뒤 일차항 계수가 홀수라야 A·B 가 분수가 되어 이 문항의 성격이 유지되고, C>0 이어야 과정의 ±√C 단계가 성립한다. 묻는 식은 답이 정수로 떨어지게 계수를 고른다."
    creative: "(1) 문자 대신 빈칸으로 돌리면 ★1(123-04) (2) A, B, C 중 하나만 주고 나머지를 역산하게 하면 ★3 · I-BW (3) 마지막 해 x=−B±√C 를 (m±√n)/k 꼴로 정리하는 단계를 붙이면 ★3."
```

```yaml
- id: GN-M31-127-05
  page: 127
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    x²−10x+22=0 의 해가 x=a±√b 일 때 유리수 a, b 의 곱.
  category: "완전제곱식으로 고쳐 x=5±√3 → a, b 대응 → 곱"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "해가 x=a±√b 꼴일 때 a, b 의 값 · 두 근의 차"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (x−5)²=3 까지 두 단계, 그 뒤 a=5, b=3 을 읽어 곱하면 끝난다. 124-h1 과 같은 골조이고 풀이 방식만 완전제곱식으로 바뀌었다.
    a 를 −5 로 읽거나 b 를 √3 으로 읽는 것이 주 오답(T-부호·T-표기).
    시험 구역 ★2~3 · 통찰 0 · M_total 6 → 하단 ★2.
  tier: star_2
  mechanism_primary: "x²−10x+22=0 → (x−5)²=3 → x=5±√3 → a=5, b=3 → ab"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$15$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/127-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항 계수(짝수)와 상수항. 제약: a = −(일차항 계수)÷2, b = a² − 상수항 이므로 b>0 이고 제곱수가 아니어야 한다(제곱수면 해가 유리수가 되어 a±√b 로 읽을 수 없다)."
    creative: "(1) a+b · a−b 로 바꾸기(124-h1 ★2) (2) x² 의 계수를 1이 아닌 수로 두면 나누는 단계가 앞에 붙어 ★2~3 (3) a, b 를 주고 상수항을 되묻기(125-c4 ★2 · I-EQV d1)."
```

## 표본 판정 요약 (22문)

- ★ 분포: ★1 9(123-01~123-05 · 126-01~126-04) · ★2 11 · ★3 2(127-02 · 127-03) · ★4 0 · ★5 0
- 통찰형 4 · 절차형 18 · premium 0. 통찰은 전부 `I-EQV` depth 1 한 갈래(124-h2 · 124-c2 · 125-c4 · 127-02)이고 이 중 셋이 「근을 가질 조건 · 중근 조건」이다.
- M_total 분포: 4 → 3문 · 5 → 3문 · 6 → 12문 · 7 → 4문(125-h3 · 127-02 · 127-03 · 127-04 · 최댓값 7)
- type_hint 상위: 「이차방정식을 (x+p)²=q 꼴로 나타내기」 6(123-02 · 123-03 · 125-h3 · 125-c3 · 126-03 · 127-03) · 「완전제곱식을 이용한 이차방정식의 풀이」 5(123-04 · 123-05 · 125-h4 · 126-04 · 127-04) · 「제곱근을 이용한 이차방정식의 풀이」 4(123-01 · 124-c1 · 126-01 · 126-02) · 「근을 가질 조건 · 중근 조건」 3(124-h2 · 124-c2 · 127-02) · 「해가 x=a±√b 꼴일 때 a, b · 두 근의 차」 3(124-h1 · 127-01 · 127-05) · 「해가 주어진 이차방정식에서 상수 구하기」 1(125-c4)
- 그림: 없음(0문)
- 이 범위의 공통 함정은 T-부호((x−4)²=q 에서 p=−4 로 읽기 · −k 이항 · 두 근의 차에서 상수항 상쇄)와 T-표기(±√ 뒤 x 의 계수로 한 번 더 나누기 · √(a/b) 유리화)다. 숫자 변형에서 거의 모든 블록이 공유하는 제약은 **완전제곱 뒤 q>0 이고 q 가 제곱수가 아닐 것**, **x² 계수로 나눈 뒤 일차항 계수가 짝수일 것**, **분수 q 의 유리화 결과가 정리될 것** 세 가지이므로 변형 전에 각 `variation_notes.numeric` 을 먼저 확인한다.

## 분류 이슈 목록

판정이 애매하거나 벤더 구역 신호와 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-M31-125-c4 | 주어진 해 x=2±√5 를 (x−2)²=5 로 되돌려 우변끼리 맞대는 단계를 I-EQV 통찰로 셀지, 해를 그대로 대입하는 표준 역대입 절차로 볼지 경계. 이 파일에서는 통찰 1개로 세어 통찰형·중위권으로 두었다. 절차로 보면 절차형 ★2·중하위권(★ 자체는 불변) | ★2 |
| GN-M31-127-03 | 통찰 0 인데 단계 수(M_total 7)와 p 부호 함정만으로 시험 구역 상단 ★3 을 주었다. 같은 골조의 125-c3(★2)과 한 단 차이라 base ★ 가 생기면 함께 재산정해야 한다 | ★2 / ★3 |
| GN-M31-127-04 · GN-M31-123-04 · GN-M31-126-04 | 분수·유리화 계산량이 이 범위에서 가장 무거운데(127-04 는 M_total 7) 과정이 모두 유도돼 있어 v3.8 §2.11(계산 마찰은 ★ 상승 신호 아님)에 따라 ★2·★1 로 두었다. 계산량 기준으로 재면 각각 한 단 위 | ★1 / ★2 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **통합해도 되는 것**: ① 「(x+p)²=q 꼴로 나타내기」 6문(123-02 · 123-03 · 125-h3 · 125-c3 · 126-03 · 127-03)은 골조가 완전히 같고 빈칸 유도 유무 · x² 계수가 1인지 · 좌우변 정리 단계 유무 · 묻는 것(p·q 자체 / p+q / p−q)만 다르다 — 하나의 유형 아래 난이도 변형으로 묶는다. ② 「완전제곱식을 이용한 풀이」 5문(123-04 · 123-05 · 125-h4 · 126-04 · 127-04)도 ①에 제곱근 단계를 이어 붙인 것이어서 ①의 상위 변형으로 볼 수 있다. ③ 「제곱근을 이용한 직접 풀이」 4문(123-01 · 124-c1 · 126-01 · 126-02)은 ax²=b 와 (ax+b)²=q 를 한 유형으로 묶어도 무리가 없다.
- **따로 세워야 하는 것**: ① 「근을 가질 조건 · 중근 조건」(124-h2 · 124-c2 · 127-02) — 계산이 아니라 우변 부호의 동치 변환이 본질이고 이 범위 통찰형 4문 중 3문이 여기서 나온다. 뒤 단원(근의 공식·판별식)으로 직결되므로 독립 유형이 필요하다. ② 「해가 x=a±√b 꼴일 때 a, b · 두 근의 차」(124-h1 · 127-01 · 127-05) — 풀이 자체는 ①~③의 마무리 한 단계지만 출제 빈도가 높고 오답 원인(a 의 부호 · b 를 √b 로 읽기 · 차에서 상수항 상쇄)이 고유해 별도 슬롯이 낫다. ③ 「해가 주어졌을 때 상수 구하기」(125-c4) — 방향이 역이라 앞의 것들과 섞으면 변형 설계가 엉킨다.
- **카탈로그가 생기면 재산정할 것**: 이 파일의 `effective_star` 는 전부 `star` 와 같게 둔 잠정값이다. ★1 9문 · ★2 11문으로 두 층에 몰려 있는데, ★1 안에서도 한 줄로 끝나는 123-01·126-01 과 분수 통분·유리화가 겹치는 126-03·126-04 의 체감 차가 크고, ★2 안에서도 조건 통찰형(124-h2 · 124-c2)과 계산 절차형(125-h4 · 127-04)이 섞여 있다. base ★ 가 정해지면 이 두 층을 먼저 벌려야 한다. part 2(128~133쪽 · 중단원 마무리·서술형 구간)와 함께 재산정한다.
