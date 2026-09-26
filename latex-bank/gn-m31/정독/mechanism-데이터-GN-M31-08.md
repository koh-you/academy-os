---
name: mechanism-데이터-GN-M31-08
description: 개념원리 중학 3-1 08 인수분해 공식(1/1 · 85~88쪽 · 17문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · base_star null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 중학 3-1 (중3-1 · 학생용) · 전사본 latex-bank/gn-m31
  section: 08 인수분해 공식
  unit_code: GN-M31-08
  part: "1/1"
  extract_range: "85~88쪽 · 85-01~88-05"
  total_problems: 17
  unit_total: 17
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-m31/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-m31/items/<id>.tex
  image_source: latex-bank/gn-m31/figures/ (이 범위는 그림 문항 없음)
---

# 개념원리 중학 3-1 · 08 인수분해 공식 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 중학 3-1 「08 인수분해 공식」 85~88쪽 17문항 전수를 다룬다. 구역은 「개념원리 확인하기」 4문(85쪽) · 「핵심문제 익히기」 8문(86~87쪽 · 핵심문제 `쪽-hN` 과 짝 확인문제 `쪽-cN` 이 번갈아 배치) · 「이런 문제가 시험에 나온다」 5문(88쪽)이다.

개념원리 중학은 RPM 과 달리 문항별 난이도 등급(`level`)도 태그도 붙지 않으므로, **구역 자체가 유일한 벤더 난이도 신호**다. 확인하기 ★1 · 핵심문제 익히기 ★2 · 이런 문제가 시험에 나온다 ★2~3 을 출발점으로 삼고 M_total·통찰로 ±1 조정했다. 핵심문제에는 본문 `type`(예제 제목)이 붙어 있어 type_hint 의 1차 후보로 썼다.

이 범위의 도구는 네 가지뿐이다 — ⑴ 공통인 인수로 묶기, ⑵ $a^2\pm 2ab+b^2=(a\pm b)^2$ 완전제곱식, ⑶ $a^2-b^2=(a+b)(a-b)$ 합과 차의 곱, ⑷ 완전제곱식이 되도록 빈 계수를 역산하기. 문항이 어려워지는 방식은 도구가 늘어나는 것이 아니라 **공식을 쓸 수 있는 꼴로 만드는 앞 작업**(공통인수 먼저 묶기 · 항 순서 바꾸기 · 부호 뒤집기 · 분수 계수의 제곱근 잡기)이 한 겹씩 얹히는 것이다. 그래서 변형 설계에서는 「공식은 고정하고 앞 작업의 수를 조절」하는 축이 가장 잘 먹힌다.

구역 끝의 88쪽 두 문항이 이 범위의 상한이다. 88-04 는 02 제곱근 단원의 $\sqrt{A^2}=|A|$ 와 결합한 단원 경계 문항이고, 88-05 는 합차 공식을 두 번 적용해야 끝나는 사차식이다. 이 둘만 ★3 이 아니라 ★3 중에서도 통찰 성격이 다르므로 변형 원본으로 쓸 때 구분해서 다룬다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다. 그림 문항은 없다.

## 문항 데이터

### 개념원리 확인하기

```yaml
- id: GN-M31-85-01
  page: 85
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념확인"
  summary: |
    ⑴~⑷ $a(a+3)$, $(x-1)^2$, $(b+7)(b-2)$, $(2y-1)(3y-5)$ 가 각각 어떤 다항식을 인수분해한 것인지 구하기.
  category: "인수분해와 전개의 역관계 → 주어진 곱을 전개해 원래 다항식 찾기"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "인수분해의 뜻 — 인수분해한 결과를 전개해 원래 다항식 찾기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    인수분해의 정의(곱의 꼴 ↔ 전개)를 확인시키는 도입 문항. 실제로 요구하는 작업은 분배법칙·곱셈 공식 전개 네 번뿐이고 되돌리는 판단은 없다.
    ⑷ 만 두 일차식의 곱이라 계수끼리의 곱셈이 한 단계 더 들어간다. 확인하기 구역 ★1 출발 · 통찰 0 · M_total 5 → ★1 유지(이미 하한).
  tier: star_1
  mechanism_primary: "인수분해된 곱의 꼴 → 분배법칙·곱셈 공식으로 전개 → 원래 다항식"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $a^2+3a$ ⑵ $x^2-2x+1$ ⑶ $b^2+5b-14$ ⑷ $6y^2-13y+5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/85-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 소문항의 인수 꼴(단항식×다항식 · 완전제곱 · 두 일차식 · 계수 있는 두 일차식)은 고정하고 안의 수만 교체. 제약: ⑶⑷ 는 전개 결과의 일차항 계수가 부호까지 달라지도록 두 상수의 부호를 다르게 둘 것. 계수를 키우면 목적(정의 확인)과 무관한 계산 부담만 는다."
    creative: "(1) 전개식을 주고 인수분해된 꼴을 고르게 하는 역방향(이 단원의 본 유형 · ★1~2) (2) 네 짝 중 전개와 인수분해가 잘못 짝지어진 것 고르기(★2) (3) 전개 결과의 특정 계수만 묻기(계산량이 줄어 ★1 유지)."
```

```yaml
- id: GN-M31-85-02
  page: 85
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념확인"
  summary: |
    ⑴~⑷ $ax-ay$, $3xy^3+9x^2y^2$, $2a^2b+ab^2-5ab$, $x(x+1)-4(x+1)$ 의 공통인 인수를 구하고 인수분해하기.
  category: "각 항의 공통인 인수 식별 → 공통인수로 묶기"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "공통인 인수로 묶어 인수분해하기 — 공통인수 찾기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    계수는 최대공약수, 문자는 가장 낮은 차수까지가 공통인수라는 규칙을 네 번 적용한다. ⑵ 처럼 두 항의 문자 차수가 다를 때 낮은 쪽을 묶는 것(T-표기)이 유일한 함정이다.
    ⑷ 는 공통인수가 단항식이 아니라 괄호식 $x+1$ 이지만, 발문이 공통인수를 먼저 쓰게 하고 있어 괄호를 한 덩어리로 보라는 지시가 이미 들어 있다. 통찰 0 · M_total 5 → 확인하기 ★1 유지.
  tier: star_1
  mechanism_primary: "계수의 최대공약수와 문자의 최저 차수(또는 공통 괄호식) 확정 → 밖으로 묶기 → 남은 괄호 정리"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $a$, $a(x-y)$ ⑵ $3xy^2$, $3xy^2(y+3x)$ ⑶ $ab$, $ab(2a+b-5)$ ⑷ $x+1$, $(x+1)(x-4)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/85-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수와 지수를 바꿀 수 있다. 제약: ⑵ 는 두 항의 문자 차수가 서로 달라야 「최저 차수를 묶는다」가 살아 있고(같은 차수면 문항이 무의미), ⑶ 은 세 항 모두에 공통인 문자가 남아야 한다. ⑷ 는 두 항의 괄호가 같아야 공통 괄호식 구조가 유지된다."
    creative: "(1) 묶은 뒤 남은 괄호 안 계수의 합을 묻기(★1) (2) ⑷ 를 $x(x+1)-4(-x-1)$ 처럼 부호를 뒤집어 두면 $-(x+1)$ 을 알아보는 I-EQV 가 붙어 ★2(86-h1 ⑷ 골조) (3) 공통인수와 묶은 결과를 주고 원래 식을 복원하게 하는 역방향(★2)."
```

```yaml
- id: GN-M31-85-03
  page: 85
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념확인"
  summary: |
    ⑴~⑷ $x^2+4x+4$, $a^2-10a+25$, $16x^2+8xy+y^2$, $9a^2-42ab+49b^2$ 을 인수분해하기.
  category: "a²±2ab+b² 꼴 확인 → 완전제곱식으로 인수분해"
  M: {s: 1, k: 1, a: 1, t: 2}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "a²±2ab+b² 의 인수분해"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    양 끝 항을 제곱꼴로 보고 가운데 항이 $2ab$ 와 맞는지만 확인하면 끝난다. ⑶⑷ 는 $a$, $b$ 가 $4x$, $7b$ 처럼 계수를 포함해 한 겹 더 보이지만 공식 자체는 그대로다.
    함정은 둘 — 가운데 항의 부호가 괄호 안 부호로 옮겨 간다는 것(T-부호), 계수가 붙은 항에서 $a$, $b$ 를 제곱근으로 잡아야 한다는 것(T-표기). 확인하기 ★1 출발 · 통찰 0 → ★1.
  tier: star_1
  mechanism_primary: "양 끝 항을 제곱꼴로 보기 → 가운데 항이 2ab 인지 확인 → (a±b)²"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $(x+2)^2$ ⑵ $(a-5)^2$ ⑶ $(4x+y)^2$ ⑷ $(3a-7b)^2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/85-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "양 끝 항의 계수는 완전제곱수, 상수는 제곱수로 두고 가운데 항은 반드시 2ab 로 맞춘다. 제약: 셋 중 하나라도 어긋나면 완전제곱식이 아니게 되므로(88-02 ⑤ 가 그 경우) 세 계수를 따로 고르지 말고 (a, b) 를 먼저 정한 뒤 전개해서 만들 것."
    creative: "(1) 가운데 항이나 상수항을 빈칸으로 비우면 완전제곱식 만들기(87-h3 · ★2 · I-BW) (2) 완전제곱식이 아닌 것 하나를 섞어 고르게 하기(88-02 · ★2) (3) 앞에 공통인수를 곱해 두면($xy(2x-3y)^2$) 묶기 단계가 하나 늘어 ★2(86-h2 ⑷)."
```

```yaml
- id: GN-M31-85-04
  page: 85
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념확인"
  summary: |
    ⑴~⑷ $x^2-36$, $a^2-81$, $25x^2-49y^2$, $9a^2-4b^2$ 을 인수분해하기.
  category: "a²−b² 꼴 확인 → 합과 차의 곱"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "a²−b² 의 인수분해"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    두 제곱의 차임을 확인하고 $(a+b)(a-b)$ 에 대입하는 한 단계. 계수가 붙은 ⑶⑷ 도 $5x$, $7y$ 처럼 묶어 보면 같다.
    반드시 뺄셈이어야 한다는 조건(합은 더 분해되지 않는다)만 확인하면 걸릴 함정이 없어 이 범위에서 M_total 이 가장 낮다. 통찰 0 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "두 항을 각각 제곱꼴로 보기 → a²−b² 확인 → (a+b)(a−b)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $(x+6)(x-6)$ ⑵ $(a+9)(a-9)$ ⑶ $(5x+7y)(5x-7y)$ ⑷ $(3a+2b)(3a-2b)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/85-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "제곱수(4, 9, 16, 25, 36, 49, 64, 81, 100)와 문자 계수의 제곱수를 자유롭게 조합. 제약: 반드시 차(−)여야 하고 두 항 모두 완전제곱이어야 한다. 분수 제곱($1/36$ 등)으로 바꾸면 87-c4 ㄴ 의 함정(합차 vs 완전제곱 혼동)을 그대로 쓸 수 있다."
    creative: "(1) 앞에 공통인수를 붙여 $2x^2-32$ 로 만들면 묶기 → 합차 2단계 ★2(87-h4) (2) 음의 항을 앞세워 $-x^2+25y^2$ 로 두면 항 순서 바꾸기가 필요해 ★2 (3) $x^4-16$ 처럼 합차를 두 번 적용하게 하면 ★3(88-05)."
```

### 핵심문제 익히기

```yaml
- id: GN-M31-86-h1
  page: 86
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    ⑴~⑷ $2a^2+8a$, $x^2y-xy^2+5xy$, $(a+5)b-3(a+5)$, $(2x+1)(x-1)+x(1-x)$ 를 인수분해하기.
  category: "공통인수 식별(⑷는 부호를 맞춘 뒤) → 묶기 → 남은 괄호 정리"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "⑷ 의 (1−x) 를 −(x−1) 로 바꿔야 두 항에 공통인 괄호식 (x−1) 이 드러난다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "공통인 인수로 묶어 인수분해하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴~⑶ 은 단항식·괄호식 공통인수를 그대로 묶는 표준 절차다. ⑷ 만 $1-x=-(x-1)$ 부호 뒤집기를 먼저 해야 공통인수가 보이고, 묶은 뒤 남는 $(2x+1)-x=x+1$ 정리까지 이어져야 끝난다.
    부호 뒤집기는 조건을 쓸 수 있는 꼴로 옮기는 동치 변환이라 EQV d1 하나. 핵심문제 구역 ★2 출발 · 통찰 1 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "공통인수 식별(⑷는 1−x=−(x−1) 로 부호 통일) → 밖으로 묶기 → 남은 괄호 정리"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $2a(a+4)$ ⑵ $xy(x-y+5)$ ⑶ $(a+5)(b-3)$ ⑷ $(x-1)(x+1)$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/86-h1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴⑵ 의 계수·차수와 ⑶ 의 괄호 안 상수는 자유롭게 교체. 제약: ⑷ 는 두 괄호가 부호만 반대인 관계((x−1) 과 (1−x))를 유지해야 문항의 목적이 남고, 묶은 뒤 남는 식이 지저분해지지 않도록 앞 인수의 계수를 작게 둔다."
    creative: "(1) ⑷ 를 $a(x-y)-b(y-x)$ 꼴 문자식으로 바꾸면 같은 통찰에 Mₐ 만 올라 ★2~3(88-01 ⑤) (2) 부호 뒤집기를 세 항에 걸쳐 요구하면 ★3 (3) 묶은 결과의 인수 하나를 주고 나머지를 되묻는 역방향(★2 · I-BW)."
```

```yaml
- id: GN-M31-86-c1
  page: 86
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    다항식 $2x^2y-10xy^2$ 의 인수가 아닌 것 고르기. 5지선다.
  category: "공통인수로 묶기 → 부분곱을 인수로 인정 → 선택지 대조"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "인수분해한 식의 인수 판별"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $2xy(x-5y)$ 로 묶은 뒤, 인수는 이 곱에서 만들 수 있는 부분곱 전부($x$, $y$, $xy$, $2xy$, $x-5y$, $y(x-5y)$ …)라는 정의로 판정한다. ③ $x^2y$ 는 $x$ 의 차수가 원식보다 높아 인수가 아니다.
    계산은 묶기 한 줄이라 통찰 0·M_total 5 로 산식상 −1(★1) 후보지만, 「인수 = 부분곱 전부」 개념이 이 구역의 주 오답 지점이라 확인문제 출발점 ★2 를 유지했다.
    [분류 이슈] 산식 −1 조건(통찰 0 · M_total ≤ 5)에 걸리나 개념 판별 비중으로 ★2 유지.
  tier: star_2
  mechanism_primary: "공통인수로 묶어 2xy(x−5y) → 부분곱을 모두 인수로 인정 → 차수가 초과한 선택지 배제"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/86-c1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 2, 10 과 두 문자의 차수를 교체. 제약: 정답 선택지는 원식의 문자 차수를 한 단계 넘기는 것(여기서는 $x^2y$)으로 만들고, 나머지 네 개는 실제 부분곱이어야 한다. 계수까지 포함한 부분곱($2xy$)을 한 개 넣어 두면 「계수도 인수」라는 점이 함께 점검된다."
    creative: "(1) 인수의 개수를 묻기(★2) (2) 완전제곱식·합차 결과에 대해 같은 질문을 하면 인수가 중복돼 처리 판단이 붙는다(★3) (3) 두 다항식의 공통인 인수를 묻는 문제로 바꾸면 최대공약수 골조가 되어 ★3."
```

```yaml
- id: GN-M31-86-h2
  page: 86
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    ⑴~⑷ $x^2-12x+36$, $9x^2+30xy+25y^2$, $\dfrac{1}{4}x^2+2xy+4y^2$, $4x^3y-12x^2y^2+9xy^3$ 을 인수분해하기.
  category: "(공통인수 묶기 →) a²±2ab+b² 판정 → 완전제곱식"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "a²±2ab+b² 의 인수분해"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴⑵ 는 공식 직접 대입. ⑶ 은 분수 계수라 $a=\dfrac{1}{2}x$ 로 잡아야 $2ab=2xy$ 가 맞고, ⑷ 는 공통인수 $xy$ 를 먼저 묶어야 $4x^2-12xy+9y^2$ 가 드러난다.
    도구는 하나지만 공식을 쓸 수 있는 꼴로 만드는 앞 작업(분수 제곱근 · 공통인수)이 붙어 단계가 늘었다. 85-03 과 골조가 같고 앞 작업만 추가된 관계다. 핵심문제 ★2 출발 · 통찰 0 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "공통인수가 있으면 먼저 묶기 → 양 끝 항을 제곱꼴로 → 2ab 확인 → (a±b)²"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $(x-6)^2$ ⑵ $(3x+5y)^2$ ⑶ $\left(\dfrac{1}{2}x+2y\right)^2$ ⑷ $xy(2x-3y)^2$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/86-h2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "(a, b) 를 먼저 정하고 전개해 계수를 만든다. 제약: ⑶ 의 분수 계수는 제곱했을 때 분모가 제곱수가 되는 값($1/4$, $1/9$, $1/16$)만 쓰고, ⑷ 는 공통인수를 뺀 나머지가 완전제곱식이 되도록 각 항의 차수를 맞춘다(여기서는 $xy$ 를 빼야 함)."
    creative: "(1) ⑷ 의 공통인수를 뺀 나머지를 완전제곱이 아니게 만들어 함정 문항으로(★2) (2) 가운데 항을 빈칸으로 두면 87-h3 골조(★2 · I-BW) (3) $(x+a)^2$ 전개식과 비교해 $a$ 를 구하게 하면 미지 계수 역산이 붙어 ★3."
```

```yaml
- id: GN-M31-86-c2
  page: 86
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    인수분해한 것이 옳지 않은 것 고르기. $x^2+14x+49$, $x^2-\dfrac{1}{2}x+\dfrac{1}{16}$, $64x^2+16xy+y^2$, $16x^2-24xy+9y^2$, $4x^2+8xy+4y^2$ 의 5지선다.
  category: "선택지별 a, b 추출 → 2ab 검산 → 틀린 것 판별"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "a²±2ab+b² 의 인수분해 — 옳은 인수분해 판별"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    다섯 선택지 모두 양 끝 항은 제곱꼴로 맞아 있어 가운데 항 $2ab$ 만 검산하면 갈린다. ⑤ 는 공통인수 4 를 묶으면 $4(x+y)^2$ 인데 $4(x+2y)^2$ 로 적어 두어, 묶기와 공식 적용을 연달아 해야 잡힌다.
    ②의 분수 계수, ③의 큰 계수처럼 계산이 무거워 보이는 선택지가 오히려 옳게 배치돼 있어 크기로 찍으면 틀린다(T-표기). 확인문제 ★2 · 통찰 0 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "선택지마다 양 끝 항에서 a, b 추출 → 2ab 와 가운데 항 비교(⑤는 공통인수 4 를 먼저 묶고) → 불일치 선택"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/86-c2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 선택지의 (a, b) 와 정답 선택지가 어긋나는 배수(여기서는 $y$ 계수 2배)를 조절. 제약: 정답 선택지는 양 끝 항은 맞고 가운데 항만 틀려야 「2ab 검산」이라는 목적이 산다. 분수 계수 선택지는 옳은 쪽에 둬야 난이도 착시가 유지된다."
    creative: "(1) 옳은 것을 모두 고르는 복수정답으로(★2~3) (2) 틀린 선택지를 바르게 고치게 하는 서술형(★3) (3) 공통인수를 묶어야 하는 선택지를 두 개로 늘리면 앞 작업이 반복돼 ★3."
```

```yaml
- id: GN-M31-87-h3
  page: 87
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    ⑴~⑷ $x^2-8x+\square$, $x^2+\square x+25$, $9x^2+12xy+\square y^2$, $16x^2+\square x+\dfrac{1}{4}$ 가 완전제곱식이 되도록 빈칸에 알맞은 수 써넣기.
  category: "완전제곱식 조건 → 빈칸 자리에 따라 (가운데 계수÷2)² 또는 ±2ab 역산"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「완전제곱식이 되도록」이라는 결과 조건을 세 계수 사이의 관계(가운데 항 = ±2ab)로 되돌려 빈 계수를 역산"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "완전제곱식 만들기 — 빈 계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    빈칸이 상수 자리면 값이 하나, 일차항 자리면 $\pm 2ab$ 라서 값이 둘이라는 자리 구분이 전부다. ⑵⑷ 에서 $\pm$ 를 빠뜨리는 것이 이 유형의 대표 오답(T-부호)이고, ⑷ 는 상수가 분수라 $b=\dfrac{1}{2}$ 로 잡는 표기 함정이 하나 더 있다.
    결과 조건에서 계수를 역추적하는 구조라 BW d1 하나. 핵심문제 ★2 출발 · 통찰 1 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "빈칸 위치 확인 → 상수 자리면 (가운데 계수÷2)² · 일차항 자리면 ±2ab → 값 결정"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $16$ ⑵ $\pm10$ ⑶ $4$ ⑷ $\pm4$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/87-h3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수는 제곱근이 유리수로 떨어지는 값만 고른다. 제약: 일차항을 비운 문항은 답이 반드시 두 개(±)가 되어야 하고, 상수항을 비운 문항은 가운데 계수가 짝수여야 답이 정수로 떨어진다. 분수 상수는 분모가 제곱수인 값($1/4$, $1/9$)만."
    creative: "(1) 빈칸 값들의 합·곱을 묻기(87-c3 · 88-03 골조 · ★2~3) (2) 「완전제곱식이 되도록 하는 자연수」로 범위를 걸어 ± 중 하나를 기각시키면 사후 필터가 생겨 ★3 (3) 두 식을 동시에 완전제곱으로 만들고 두 미지수의 곱을 묻기(88-03 · ★3)."
```

```yaml
- id: GN-M31-87-c3
  page: 87
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    완전제곱식으로 인수분해될 때 빈칸에 알맞은 수 중 절댓값이 가장 큰 것 고르기. $x^2-16x+\square$, $4x^2+\square x+25$, $x^2+18x+\square$, $x^2+\square x+100$, $36x^2+\square x+1$ 의 5지선다.
  category: "선택지마다 완전제곱 조건으로 빈 계수 역산 → 절댓값 비교"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "각 선택지에서 완전제곱식이라는 결과 조건을 계수 관계로 되돌려 빈 수를 구한 뒤 절댓값으로 비교"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "완전제곱식 만들기 — 빈 계수의 값 비교"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    87-h3 의 역산을 다섯 번 반복하고 크기를 비교하는 구조. ②④⑤ 는 $\pm$ 두 값이 나오지만 절댓값만 보면 되므로 부호가 비교에 영향을 주지 않는다는 판단이 한 번 들어간다.
    상수 자리를 비운 ③ 이 81 로 가장 크다. 확인문제 ★2 출발 · 통찰 1 · M_total 7 이나 전수 역산 + 비교가 얹혀 작업량은 87-h3 보다 한 단계 위다.
    [분류 이슈] 87-h3 과 골조가 같아 ★2 로 두었으나 전수 역산·비교 때문에 ★3 후보이기도 하다.
  tier: star_2
  mechanism_primary: "선택지마다 빈칸 위치 판별 → (가운데 계수÷2)² 또는 ±2ab 로 역산 → 절댓값 최대 선택"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/87-c3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 선택지의 (a, b) 를 바꿔 역산 값의 크기 순서를 재배치. 제약: 상수 자리를 비운 선택지가 가장 큰 값을 갖게 두면 「일차항은 ±, 상수항은 제곱」 구분이 정답에 직접 작용한다. 계수는 제곱근이 유리수인 값만."
    creative: "(1) 절댓값이 아니라 「가장 작은 값」·「양수인 것」으로 조건을 바꾸면 ± 처리가 정답을 가르게 되어 ★3 (2) 빈 수들의 합을 묻기(★3) (3) 「완전제곱식이 될 수 없는 것」으로 뒤집으면 88-02 골조(★2)."
```

```yaml
- id: GN-M31-87-h4
  page: 87
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    ⑴~⑷ $9a^2-b^2$, $-x^2+25y^2$, $2x^2-32$, $3ab^2-12ac^2$ 을 인수분해하기.
  category: "(항 정렬·공통인수 묶기 →) A²−B² 꼴 만들기 → 합과 차의 곱"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "a²−b² 의 인수분해"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    공식 자체는 한 줄이고, 공식을 쓸 수 있는 꼴로 만드는 앞 작업이 문항마다 다르다 — ⑵ 는 항 순서를 바꿔 $25y^2-x^2$ 로, ⑶⑷ 는 공통인수 $2$, $3a$ 를 먼저 묶는다.
    ⑷ 는 묶은 뒤에도 $b^2-4c^2$ 가 남아 한 번 더 적용해야 끝난다(끝까지 인수분해). 앞 작업은 모두 교과서가 지시하는 표준 절차라 통찰로 세지 않았다. 핵심문제 ★2 · 통찰 0 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "공통인수 묶기·항 정렬로 A²−B² 꼴 만들기 → (A+B)(A−B) → 더 분해되는지 확인"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $(3a+b)(3a-b)$ ⑵ $(5y+x)(5y-x)$ ⑶ $2(x+4)(x-4)$ ⑷ $3a(b+2c)(b-2c)$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/87-h4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "제곱수 계수와 공통인수를 교체. 제약: 공통인수를 뺀 나머지가 반드시 두 제곱의 차여야 하므로(⑶ 은 2 를 빼야 $x^2-16$) 공통인수와 남는 제곱수를 함께 설계한다. ⑵ 는 음의 항이 앞에 오는 배치를 유지해야 정렬 단계가 남는다."
    creative: "(1) 공통인수를 문자식으로 두면 Mₐ 가 올라 ★3 (2) $-2x^2+98$ 처럼 음의 공통인수를 묶게 하면 부호 판정이 추가돼 ★2~3(87-c4 ㄷ) (3) 두 번 적용해야 끝나는 $x^4-16$ 으로 확장하면 ★3(88-05)."
```

```yaml
- id: GN-M31-87-c4
  page: 87
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    보기 ㄱ~ㄷ 중 인수분해가 옳은 것 모두 고르기. ㄱ $16x^2-81y^2=(4x+9y)(4x-9y)$, ㄴ $x^2-\dfrac{1}{36}=\left(x-\dfrac{1}{6}\right)^2$, ㄷ $-2x^2+98=-2(x+7)(x-7)$.
  category: "보기별 좌변 인수분해 → 우변과 대조(합차 vs 완전제곱 구분)"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "a²−b² 의 인수분해 — 옳은 인수분해 판별"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ㄴ 이 이 문항의 목적이다. $x^2-\dfrac{1}{36}$ 은 두 제곱의 차이므로 $\left(x+\dfrac{1}{6}\right)\left(x-\dfrac{1}{6}\right)$ 인데 완전제곱식으로 적어 두어, 합차와 완전제곱을 표기만 보고 혼동하는지 본다(T-표기).
    ㄷ 은 음의 공통인수 $-2$ 를 묶은 뒤 합차를 적용한 것으로 옳다 — 음수를 묶을 때 괄호 안 부호가 모두 뒤집히는 처리(T-부호)가 걸림돌. 확인문제 ★2 · 통찰 0 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "보기마다 좌변을 직접 인수분해 → 제시된 우변과 대조(ㄴ은 합차 vs 완전제곱 · ㄷ은 음의 공통인수)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "ㄱ, ㄷ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/87-c4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "ㄱ 의 제곱수, ㄴ 의 분수 제곱, ㄷ 의 음 공통인수와 상수를 교체. 제약: 틀린 보기는 「차인데 완전제곱으로 적은 것」 한 종류로 유지해야 변별 지점이 흐려지지 않고, ㄷ 의 상수는 공통인수를 뺀 뒤 제곱수가 남아야 한다."
    creative: "(1) 틀린 보기를 바르게 고치게 하는 서술형(★3) (2) 보기를 다섯으로 늘리고 옳은 것의 개수를 묻기(★2) (3) ㄷ 처럼 음의 공통인수를 두 겹으로 쌓으면 부호 추적이 늘어 ★3."
```

### 이런 문제가 시험에 나온다

```yaml
- id: GN-M31-88-01
  page: 88
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    인수분해한 것이 옳은 것 모두 고르기(정답 2개). $-3x^2+9x$, $2ab+b^2$, $3a^2-5ab+7a$, $8x^2y-18xy^2-4xy$, $a(x-y)-b(y-x)$ 의 5지선다.
  category: "선택지별 공통인수 묶기 검산 → 끝까지 묶였는지·남은 항의 계수와 부호가 맞는지 판정"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "⑤ 의 (y−x) 를 −(x−y) 로 바꿔야 공통 괄호식이 드러나고, 그때 묶인 앞 인수가 (a−b) 가 아니라 (a+b) 로 바뀐다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "공통인 인수로 묶어 인수분해하기 — 옳은 인수분해 판별"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    다섯 선택지가 서로 다른 오답 원인을 하나씩 담았다 — ① 은 괄호 안이 더 묶이는 미완성 인수분해, ② 는 $b^2$ 에서 $b$ 를 뺀 자리에 1 을 남긴 실수, ⑤ 는 $y-x=-(x-y)$ 부호 뒤집기를 놓쳐 앞 인수 부호가 바뀐 것. ③④ 가 옳다.
    ⑤ 의 부호 뒤집기는 86-h1 ⑷ 와 같은 EQV d1 이되 문자식이라 한 겹 추상적이다. 시험 구역 ★2~3 출발 · 통찰 1 · M_total 7 이나 개별 판정은 확인문제 수준이라 ★2.
  tier: star_2
  mechanism_primary: "선택지마다 좌변을 직접 묶어 보기 → 끝까지 묶였는지·남은 항의 계수와 부호가 맞는지 대조"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③, ④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/88-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 선택지의 계수와 항 수를 교체. 제약: 다섯 선택지가 서로 다른 오답 유형(미완성 묶기 · 1 누락 · 부호 뒤집기)을 하나씩 담는 배치를 유지해야 하고, 정답 개수(2개)를 바꾸면 발문도 함께 고친다."
    creative: "(1) 틀린 것 하나만 고르게 하면 ★2 (2) ⑤ 유형만 네 개로 늘려 부호 뒤집기 전용 소문항 문항으로(★2 · I-EQV) (3) 「완전히 인수분해되지 않은 것」만 고르게 하면 ① 의 개념이 주제가 되어 ★3."
```

```yaml
- id: GN-M31-88-02
  page: 88
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    완전제곱식으로 인수분해할 수 없는 것 고르기. $x^2-6x+9$, $4a^2+28a+49$, $2a^2-4ab+2b^2$, $\dfrac{1}{9}a^2+\dfrac{1}{2}ab+\dfrac{9}{16}b^2$, $16x^2+12xy+36y^2$ 의 5지선다.
  category: "선택지별 (공통인수 묶은 뒤) a, b 확정 → 2ab 검산 → 완전제곱 불가 판별"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "완전제곱식으로 인수분해되는지 판별하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ③ 은 공통인수 2 를 먼저 묶어야, ④ 는 분수 계수의 제곱근을 $\dfrac{1}{3}a$, $\dfrac{3}{4}b$ 로 잡아야 가운데 항과 비교가 된다. ⑤ 는 양 끝 항이 $(4x)^2$, $(6y)^2$ 이라 $2ab=48xy$ 여야 하는데 $12xy$ 라 완전제곱식이 아니다.
    계산이 가장 무거운 ④ 가 정답이 아니라는 배치가 함정이고, 85-03·86-h2 의 판정을 다섯 번 반복하는 구조 그대로다. 시험 구역 ★2~3 출발 · 통찰 0 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "선택지마다 공통인수 묶기·분수 제곱근 정리로 a, b 확정 → 2ab 와 가운데 항 비교 → 불일치 선택"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/88-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 선택지의 (a, b) 와 공통인수를 교체하되 정답 선택지만 2ab 를 어긋나게 둔다. 제약: 분수 계수 선택지는 분모가 제곱수여야 하고, 어긋나는 선택지의 가운데 항은 실제 값과 뚜렷이 다른 배수로 둬야 어림으로 맞힐 수 없다."
    creative: "(1) 완전제곱식이 되도록 가운데 항을 고쳐 쓰게 하는 서술형(★3) (2) 완전제곱식인 것의 개수를 묻기(★2) (3) 문자 계수 $k$ 를 넣어 완전제곱이 되는 $k$ 를 구하게 하면 역방향이 되어 ★3(88-03)."
```

```yaml
- id: GN-M31-88-03
  page: 88
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    두 식 $4x^2-12x+a$, $\dfrac{1}{9}x^2+bx+4$ 가 모두 완전제곱식이 되도록 하는 양수 $a$, $b$ 에 대하여 $ab$ 의 값 구하기.
  category: "완전제곱 조건 역산 → 양수 조건으로 부호 확정 → 두 값의 곱"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「두 식이 모두 완전제곱식이 되도록」이라는 결과 조건을 계수 관계로 되돌려 상수항 a 와 일차항 계수 b 를 각각 역산"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "완전제곱식이 되는 미지 계수 구하기 — 두 식의 조건 결합"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 식의 빈 자리가 서로 달라 역산 방식이 갈린다 — 첫 식은 상수 자리라 값이 하나로 정해지고, 둘째 식은 일차항 자리라 $\pm$ 두 값이 나온 뒤 「양수」 조건이 하나를 남긴다.
    87-h3 의 역산 골조에 조건 결합(두 식)과 부호 필터(양수)가 한 겹씩 얹혔고, 마지막에 두 값을 곱해야 답이 된다. 시험 구역 출발 · 통찰 1(BW d1) · M_total 8(이 범위 최대) → ★3.
  tier: star_3
  mechanism_primary: "식마다 빈 자리 판별 → 완전제곱 조건으로 a, b 역산 → 양수 조건으로 부호 확정 → ab 계산"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$12$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/88-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 식의 (계수, 미지수 자리) 조합을 바꿀 수 있다. 제약: 한 식은 상수항을, 다른 식은 일차항을 비워야 「자리에 따라 역산 방식이 다르다」는 목적이 살고, 일차항을 비운 쪽에는 반드시 양수·음수 조건을 달아 ± 중 하나만 남게 한다. 계수는 제곱근이 유리수로 떨어지는 값만."
    creative: "(1) 양수 조건을 빼고 $ab$ 의 값을 모두 구하게 하면 분기 처리가 답에 남아 ★4 후보(I-MI) (2) $a+b$ 나 $a-b$ 로 바꾸면 부호 처리가 답에 직접 작용해 ★3 (3) 식을 셋으로 늘리면 조건 결합이 커져 ★4."
```

```yaml
- id: GN-M31-88-04
  page: 88
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    $-4<x<4$ 일 때 $\sqrt{x^2+8x+16}+\sqrt{x^2-8x+16}$ 을 간단히 한 것 고르기. 5지선다.
  category: "근호 안 완전제곱 인수분해 → 절댓값 → 범위로 부호 판정 후 정리"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "근호 안 이차식을 완전제곱식으로 인수분해한 뒤 02 제곱근 단원의 성질(√(A²)=|A|)로 근호를 벗긴다 — 두 단원의 도구가 다 있어야 풀이가 이어진다"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "−4<x<4 를 (x+4)>0, (x−4)<0 으로 옮겨 두 절댓값을 각각 x+4, 4−x 로 벗긴다"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "완전제곱식을 이용해 근호 안을 간단히 하기(범위 조건에서 부호 판정)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    인수분해 단원 문항이지만 실제 골조는 02 제곱근 단원의 $\sqrt{A^2}=|A|$ 와 결합돼 있다. 근호 안을 $(x+4)^2$, $(x-4)^2$ 로 만든 뒤 주어진 범위로 두 절댓값의 부호를 각각 판정하면 $x$ 가 소거돼 상수만 남는다.
    범위를 보지 않고 그대로 $x+4$, $x-4$ 로 벗기면 $2x$ 가 나오는 선택지에 그대로 걸린다(T-부호·T-범위). 통찰 2개(XU d1 · EQV d1) · M_total 8 → 시험 구역 출발점에서 +1 하여 ★3.
  tier: star_3
  mechanism_primary: "근호 안을 완전제곱식으로 인수분해 → √(A²)=|A| → 범위로 두 절댓값 부호 판정 → x 소거 후 상수"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/88-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 완전제곱식의 중심값(여기서는 ±4)과 범위의 양 끝을 함께 바꾼다. 제약: 범위가 두 중심값 사이(−k<x<k)여야 두 절댓값의 부호가 반대로 갈려 x 가 소거되고 답이 상수가 된다. 범위를 한쪽으로 치우치게 하면 답이 ±2x 꼴이 되므로 선택지도 함께 고쳐야 한다."
    creative: "(1) 범위를 $x>4$ 나 $x<-4$ 로 바꿔 답이 문자식이 되게 하면 같은 골조로 ★3 (2) 범위를 주지 않고 경우를 나누게 하면 다중 분기가 생겨 ★4(I-MI) (3) 근호 항을 셋으로 늘려 부호 판정 횟수를 늘리면 ★4."
```

```yaml
- id: GN-M31-88-05
  page: 88
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    다항식 $x^4-16$ 의 인수가 아닌 것 고르기. $x+2$, $x-2$, $x^2+2$, $x^2+4$, $x^2-4$ 의 5지선다.
  category: "합차 공식 두 번 적용 → 인수 목록 확보 → 선택지 대조"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x⁴−16 을 (x²)²−4² 로 보고 합차 공식을 적용한 뒤, 남은 x²−4 를 한 번 더 분해해야 x+2, x−2 까지 인수로 드러난다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "합차 공식을 두 번 적용하는 인수분해와 인수 판별"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $x^4-16=(x^2+4)(x^2-4)=(x^2+4)(x+2)(x-2)$ 까지 가야 선택지 다섯 중 넷이 인수로 확인된다. 한 번만 분해하고 멈추면 $x+2$, $x-2$ 를 인수가 아니라고 오판한다.
    합인 $x^2+4$ 는 더 분해되지 않으므로 그대로 인수이고, 어디에도 나타나지 않는 $x^2+2$ 가 답. 85-04 의 공식을 반복 적용하는 확장형이라 시험 구역 출발 · 통찰 1 → ★3.
    [분류 이슈] 사차식 인수분해는 이 단원의 표준 범위 밖 확장이라 유형 배치가 미정.
  tier: star_3
  mechanism_primary: "x⁴−16=(x²)²−4² → 합차 한 번 → 남은 x²−4 에 합차 한 번 더 → 부분곱을 인수로 대조"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/88-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수를 네제곱수(16, 81, 256)로 바꾸면 같은 구조가 유지된다. 제약: 두 번째 분해가 가능하려면 상수의 제곱근이 다시 제곱수여야 한다(16→4→2, 81→9→3). 36 은 36→6 에서 멈춰 구조가 달라진다. 오답 선택지는 실제 인수와 부호·상수만 한 끗 다르게 둘 것($x^2+2$)."
    creative: "(1) 인수의 개수를 묻기(★3) (2) $x^4-a$ 의 인수가 네 개가 되도록 하는 $a$ 를 묻는 역방향(★4 · I-BW) (3) $x^4-5x^2+4$ 처럼 치환 후 분해로 바꾸면 도구가 하나 더 붙어 ★4."
```

## 표본 판정 요약 (17문)

- ★ 분포: ★1 4 · ★2 10 · ★3 3 · ★4 0 · ★5 0
- 통찰형 7(86-h1 I-EQV · 87-h3 I-BW · 87-c3 I-BW · 88-01 I-EQV · 88-03 I-BW · 88-04 I-XU+I-EQV · 88-05 I-EQV) · 절차형 10 · premium 0
- 통찰 유형 분포: I-EQV 4 · I-BW 3 · I-XU 1 (모두 depth 1 · depth_score 1.00 · depth 2 이상 없음)
- M_total 분포: 4 → 1문 · 5 → 4문 · 6 → 2문 · 7 → 8문 · 8 → 2문 (최댓값 8 · 88-03, 88-04)
- type_hint 계열: 「a²±2ab+b² 의 인수분해」 3(85-03 · 86-h2 · 86-c2) · 「a²−b² 의 인수분해」 3(85-04 · 87-h4 · 87-c4) · 「공통인 인수로 묶어 인수분해하기」 3(85-02 · 86-h1 · 88-01) · 「완전제곱식 만들기(빈 계수 역산)」 3(87-h3 · 87-c3 · 88-03) · 「인수분해한 식의 인수 판별」 2(86-c1 · 88-05) · 그 밖 3(85-01 인수분해의 뜻 · 88-02 완전제곱 판별 · 88-04 근호 안 간단히)
- 그림: 없음(17문 모두 `figure: none`)
- 이 범위의 공통 함정은 T-부호(가운데 항 부호 · $1-x=-(x-1)$ · 음의 공통인수 · $\pm 2ab$)와 T-표기(계수·분수 계수에서 $a$, $b$ 를 제곱근으로 잡기 · 「인수 = 부분곱 전부」)다. 숫자 변형 시 **(a, b) 를 먼저 정하고 전개해서 계수를 만드는 것**이 원칙이며, 세 계수를 따로 고르면 완전제곱식이 깨진다(각 블록 `variation_notes.numeric` 의 제약 참조).

## 분류 이슈 목록

판정이 애매하거나 벤더 구역 신호와 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-M31-86-c1 | 확인문제(★2 출발)이나 통찰 0·M_total 5 로 v3.8 산식의 −1 조건에 걸린다. 계산은 묶기 한 줄이지만 「인수 = 부분곱 전부」 개념 판별이 이 구역 주 오답 지점이라 ★2 유지 | ★1 / ★2 |
| GN-M31-87-c3 | 87-h3 과 역산 골조가 같아 ★2 로 두었으나, 다섯 선택지 전수 역산 + 절댓값 비교가 얹혀 M_total 7 로 작업량은 한 단계 위 | ★2 / ★3 |
| GN-M31-88-05 | 사차식 $x^4-16$ 의 이중 합차 분해는 이 단원(중3-1 08)의 표준 범위 밖 확장. 85-04 「a²−b²」 유형의 난이도 변형으로 둘지 독립 유형으로 세울지 미결 | ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세울 필요 없이 통합해도 되는 것**: 「공통인 인수로 묶어 인수분해하기」 3문(85-02 · 86-h1 · 88-01)은 공통인수가 단항식인지 괄호식인지, 부호 뒤집기가 필요한지의 차이일 뿐 골조가 같다 — 하나의 유형에 난이도 변형(앞 작업 0~2단계)으로 묶는다. 「a²±2ab+b²」 3문과 「a²−b²」 3문도 각각 확인하기·핵심문제·판별형의 응답 형식 차이라 유형은 하나씩이면 된다.
- **따로 세워야 하는 것**: ① 「완전제곱식 만들기(빈 계수 역산)」 3문(87-h3 · 87-c3 · 88-03) — 공식을 적용하는 것이 아니라 결과 조건에서 계수를 역추적하는 I-BW 골조라 앞의 인수분해 유형들과 사고 방향이 반대다. ② 「인수분해한 식의 인수 판별」(86-c1 · 88-05) — 인수분해 자체가 아니라 「인수」 개념의 외연을 묻는 유형. ③ 「완전제곱식을 이용해 근호 안을 간단히 하기」(88-04) — 02 제곱근 단원과의 경계 결합(I-XU)이라 인수분해 유형들과 성격이 다르고, 09~10 단원(인수분해의 활용)으로 이어지는 뼈대다.
- **카탈로그가 생기면 재산정할 것**: 이 파일의 `effective_star` 는 전부 `star` 와 같게 둔 잠정값이다. ★2 가 10문으로 몰려 있는데(핵심문제·확인문제 구역 출발점 효과) M_total 은 5~7 로 퍼져 있으므로, base ★ 가 정해지면 86-c1(M_total 5)과 86-h2 · 86-c2 · 87-h4 · 87-c4(M_total 7) 사이의 층을 다시 벌려야 한다. 반대로 ★3 세 문항은 통찰 성격이 서로 달라(조건 결합 · 단원 경계 · 공식 반복 적용) 같은 base ★ 로 묶기 어렵다.
