---
name: mechanism-데이터-GN-M31-10-p1
description: 개념원리 중학 3-1 10 인수분해 공식의 응용(1/2 · 97~101쪽 23문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 중학 3-1 · 전사본 latex-bank/gn-m31
  section: 10 인수분해 공식의 응용
  unit_code: GN-M31-10
  part: "1/2"
  extract_range: "97~101쪽 · 97-01~101-06"
  total_problems: 23
  unit_total: 55
  judgment_protocol: "schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22)."
  variation_fields: "mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)"
  latex_source: "latex-bank/gn-m31/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-m31/items/<id>.tex"
  image_source: "latex-bank/gn-m31/figures/ (crops.json)"
---

# 개념원리 중학 3-1 · 10 인수분해 공식의 응용 (1/2) 정독 데이터 (v1.0)

이 파일은 97~101쪽 세 구역 23문항을 담는다. 구역은 「개념원리 확인하기」 5문(97-01~97-05) · 「핵심문제 익히기」 12문(핵심문제 `쪽-hN` 6문 + 확인문제 `쪽-cN` 6문) · 「이런 문제가 시험에 나온다」 6문(101-01~101-06)이다. 개념원리 중학은 문항별 난이도 표기(하·중·상)가 없고 **구역 자체가 난이도 층**이므로 ★ 출발점은 확인하기 ★1 · 핵심문제 익히기 ★2 · 이런 문제가 시험에 나온다 ★2~3 으로 잡고, `UP` 태그(100-h5 · 100-h6 · 101-06)에 +1, M_total·통찰로 ±1 조정했다. 이 범위에 그림은 없다.

단원 성격상 골조가 다섯 갈래로 반복된다. ① 공통부분을 한 문자로 치환해 인수분해하기 ② 항이 4개인 식을 2항+2항 또는 (완전제곱 3항)+1항으로 묶기 ③ 인수분해 공식으로 수를 계산하기 ④ 인수분해한 꼴에 값을 대입해 식의 값 구하기 ⑤ 항이 5개 이상인 식을 차수가 낮은 문자에 대해 내림차순 정리하기. ①~④ 는 발문·소문항 배열이 이미 「어떤 꼴로 고쳐 쓸지」를 지정해 주어 대부분 절차형이고, 통찰형은 **짝짓기·묶는 단위를 학생이 정해야 하는** 6문(100-h5 · 100-c5 · 100-h6 · 100-c6 · 101-05 · 101-06)뿐이다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다. 이 단원의 숫자 변형에서 가장 자주 깨지는 제약은 **치환·짝짓기 뒤의 이차식이 정수 계수로 인수분해되는지**, **묶고 남은 부호(−로 묶어내기, T-부호)**, **유리화·대입 결과가 정리된 꼴로 떨어지는지** 세 가지이므로 각 블록 `variation_notes.numeric` 에 그 제약을 명시했다.

## 문항 데이터

### 개념원리 확인하기

```yaml
- id: GN-M31-97-01
  page: 97
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    공통부분 x−3 을 A 로 놓고 A²−2A−8 을 인수분해한 뒤 원식으로 되돌리는 과정의 빈칸 완성.
  category: "공통부분 치환 → 이차식 인수분해 → 원식 복원"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "공통부분이 있는 식의 인수분해(치환 과정 빈칸 완성)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    치환할 공통부분과 전개 골조가 이미 빈칸으로 주어져 착안 여지가 없다. 채울 것은 A 이차식의 상수항과 복원한 일차식뿐이다.
    확인하기 구역 출발 ★1 · 통찰 없음 · M_total 4 → ★1 유지.
  tier: star_1
  mechanism_primary: "x−3=A 치환 → A²−2A−8=(A+2)(A−4) → A 를 되돌려 (x−1)(x−7)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$2$, $2$, $x-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/97-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공통부분(x−3 → x+2 · 2x−1)과 A 이차식의 계수 조합(−2A−8 → −5A+6 · +3A−10)을 바꿀 수 있다. 제약: A 이차식이 정수 계수로 인수분해돼야 하고, 복원 뒤 두 일차식의 상수항도 정수로 떨어져야 한다(빈칸 답이 x−1 처럼 한 덩어리여야 함)."
    creative: "(1) 빈칸을 지우고 결과만 묻기 — 치환 착안이 학생 몫이 되어 98-h1 골조(★2) (2) 공통부분을 두 개로 만들어 3(x+1)²−5(x+1)(x−2)+2(x−2)² 로 바꾸면 98-c1⑶ 골조(★2) (3) 인수분해 결과의 인수 하나를 고르는 객관식으로 바꿔도 골조는 그대로(★1~2)."
```

```yaml
- id: GN-M31-97-02
  page: 97
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    ⑴~⑵ 빈칸에 공통으로 들어갈 식 구하기 — ⑴ 4xy−x+8y−2 를 2항+2항으로, ⑵ x²−6x+9−y² 를 3항+1항으로 묶어 인수분해하는 과정.
  category: "항이 4개인 식 → 2항+2항 또는 (완전제곱 3항)+1항으로 묶기 → 공통인수·합차공식"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "항이 4개인 식의 인수분해(2항+2항 · 3항+1항)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    묶는 단위가 이미 식에 x( )+2( ) · ( )²−y² 로 찍혀 있어 학생은 괄호 안만 채운다.
    확인하기 구역 출발 ★1 · 통찰 없음 · M_total 4 → ★1 유지.
  tier: star_1
  mechanism_primary: "x(4y−1)+2(4y−1)=(x+2)(4y−1) · (x−3)²−y²=(x−3+y)(x−3−y)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $4y-1$ ⑵ $x-3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/97-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 계수 쌍(4,−1,8,−2)을 공통인수가 생기는 비례쌍으로 바꾸면 된다(3xy−x+6y−2 등). ⑵ 완전제곱 3항의 중간항 부호·상수(−6x+9 → +10x+25)를 바꿀 수 있다. 제약: ⑴ 은 앞 두 항과 뒤 두 항의 비가 같아야 하고, ⑵ 는 남은 세 항이 정확히 완전제곱식이어야 한다."
    creative: "(1) 빈칸을 없애고 인수분해만 시키면 묶는 단위 선택이 학생 몫(★2 · 98-h2 골조) (2) ⑵ 를 4x²+4x+1−y² 처럼 앞 계수를 1이 아니게 하면 ★2 (3) 두 식의 공통인수를 묻는 형태로 바꾸면 101-02 골조(★2)."
```

```yaml
- id: GN-M31-97-03
  page: 97
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    a²+ab−8a−6b+12 를 차수가 낮은 문자 b 에 대해 정리해 인수분해하는 과정의 빈칸 완성.
  category: "차수가 낮은 문자(b)로 정리 → 나머지 항 인수분해 → 공통인수 (a−6) 묶기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "항이 5개 이상인 식의 인수분해(차수가 낮은 문자에 대해 정리)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    b 로 정리한다는 방침과 중간 꼴이 모두 제시돼 있어 학생은 (a−6)·(a−2) 를 채우고 공통인수를 묶기만 한다.
    확인하기 구역 출발 ★1 · 통찰 없음 · M_total 4 → ★1 유지. 같은 골조를 착안까지 맡긴 것이 100-h6 이다.
  tier: star_1
  mechanism_primary: "b 로 묶어 (a−6)b+(a²−8a+12) → (a−6)b+(a−2)(a−6) → 공통인수 (a−6) → (a−6)(a+b−2)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$a-6$, $a-6$, $a-6$, $a-6$, $b$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/97-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "b 의 계수(a−6)와 a 이차식의 두 근(2,6)을 바꿀 수 있다. 제약: b 계수로 뽑히는 일차식이 a 이차식의 인수 중 하나와 정확히 같아야 공통인수가 생긴다(계수 −6 과 상수항 12 는 함께 움직인다)."
    creative: "(1) 빈칸을 없애면 100-c6 골조(★3 · 정리할 문자 선택이 학생 몫) (2) b 에 대한 이차항을 넣어 −2b² 를 추가하면 이차식 인수분해가 더 붙어 ★3 (3) 인수분해한 결과의 두 인수의 합을 묻게 하면 101-06 골조(★3)."
```

```yaml
- id: GN-M31-97-04
  page: 97
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    ⑴~⑶ 빈칸 완성 — 27×64+27×36 을 공통인수로, 75²−2×75×5+5² 을 완전제곱식으로, 42²−38² 을 합차공식으로 고쳐 계산하는 과정.
  category: "수 계산을 공통인수 묶기·완전제곱식·합차공식 꼴로 고쳐 암산 가능하게"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "인수분해 공식을 이용한 수의 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    쓸 공식이 이미 빈칸 꼴로 지정돼 있어 채울 것은 대응하는 수와 최종 계산값뿐이다.
    확인하기 구역 출발 ★1 · 통찰 없음 · M_total 4 → ★1 유지.
  tier: star_1
  mechanism_primary: "27(64+36)=2700 · (75−5)²=4900 · (42+38)(42−38)=320"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $36$, $100$, $2700$ ⑵ $5$, $70$, $4900$ ⑶ $38$, $38$, $80$, $320$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/97-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 공통인수 27 과 합이 100 이 되는 두 수 ⑵ 기준수 75 와 작은 수 5 ⑶ 합·차가 깔끔한 두 수(42,38)를 바꿀 수 있다. 제약: ⑴ 은 두 수의 합이 10의 거듭제곱, ⑵ 는 차가 10의 배수, ⑶ 은 합이 10의 배수여야 암산 이득이 남는다."
    creative: "(1) 빈칸을 없애고 값만 묻기(공식 선택이 학생 몫 → 99-h3 골조 ★2) (2) 세 계산의 결과를 비교·대소 판정하게 하기(★2) (3) 근호를 씌워 √(53²−47²) 꼴로 만들면 한 단계 추가(★2) (4) 분수식으로 묶어 약분까지 가게 하면 101-03 골조(★2)."
```

```yaml
- id: GN-M31-97-05
  page: 97
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    ⑴~⑶ 인수분해한 뒤 대입해 식의 값 구하기 — ⑴ x=98 일 때 x²+4x+4 ⑵ x=4+√5 일 때 x²−3x−4 ⑶ x=2−√3, y=2+√3 일 때 x²−y².
  category: "식을 먼저 인수분해 → 주어진 값 대입 → 근호 정리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "인수분해 공식을 이용하여 식의 값 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    발문이 「인수분해 공식을 이용하여」로 순서를 못 박아 두어 착안이 필요 없다. ⑵·⑶ 의 무리수 대입이 계산 부담을 조금 올릴 뿐이다.
    확인하기 구역 출발 ★1 · 통찰 없음 · M_total 6(−1 조정 없음) → ★1 유지.
  tier: star_1
  mechanism_primary: "(x+2)² · (x−4)(x+1) · (x+y)(x−y) 로 인수분해 → x=98 · x=4+√5 · x=2−√3,y=2+√3 대입"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $10000$ ⑵ $5\sqrt{5}+5$ ⑶ $-8\sqrt{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/97-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 기준값 98 과 완전제곱식의 상수(+4x+4) ⑵ 무리수 4+√5 와 이차식의 두 근(4,−1) ⑶ 켤레쌍 2±√3 을 바꿀 수 있다. 제약: ⑵ 는 인수 하나가 대입 즉시 근호만 남도록(x−4=√5) 이차식의 근 중 하나를 무리수의 유리수부와 맞춰야 하고, ⑶ 은 x+y 가 유리수, x−y 가 순수 무리수여야 결과가 깔끔하다."
    creative: "(1) x 대신 x=1/(√2+1) 처럼 유리화가 선행되게 하면 99-h4 골조(★2) (2) x+y·x−y 만 주고 값을 묻게 하면 101-05 골조(★3) (3) x³y−xy³ 처럼 인수분해 단계를 하나 더 두면 101-04 골조(★2)."
```

### 핵심문제 익히기

```yaml
- id: GN-M31-98-h1
  page: 98
  vendor_label: "핵심문제 익히기 · 핵심문제 1"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    ⑴ (x+3)²−4(x+3)+4 ⑵ (x+y−2)(x+y+4)−27 을 인수분해.
  category: "공통부분 치환 → 완전제곱식·이차식 인수분해 → 복원"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "공통부분이 있는 식의 인수분해(치환)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    치환할 공통부분이 괄호로 그대로 보이고 유형 제목이 곧 골조라 착안 요구가 없다. ⑵ 만 치환 뒤 전개·정리 한 단계가 더 붙는다.
    핵심문제 구역 출발 ★2 · 통찰 없음 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "x+3=A · x+y=A 치환 → (A−2)² · (A−2)(A+4)−27=A²+2A−35=(A−5)(A+7) → 복원"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $(x+1)^2$ ⑵ $(x+y-5)(x+y+7)$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/98-h1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 공통부분(x+3)과 −4A+4 의 계수 ⑵ 두 괄호의 상수(−2,+4)와 빼는 수 27 을 바꿀 수 있다. 제약: ⑴ 은 완전제곱식이 되도록 (계수/2)²=상수항, ⑵ 는 A²+2A−(k+8) 이 정수 계수로 인수분해되도록 빼는 수를 고른다(27 → 12 · 40 등)."
    creative: "(1) 공통부분을 만들어 두지 않고 전개된 식으로 주면 짝짓기·묶기가 학생 몫이 되어 ★3 (2) 공통부분을 두 개로 늘리면 98-c1⑶ 골조(★2 유지) (3) 인수분해 결과를 (2x+a)(2x+b) 꼴로 읽혀 계수를 묻게 하면 101-01 골조(★2)."
```

```yaml
- id: GN-M31-98-c1
  page: 98
  vendor_label: "핵심문제 익히기 · 확인 1"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    ⑴ 9(a+b)²+6(a+b)+1 ⑵ (x−y)(x−y−5)−6 ⑶ 3(x+1)²−5(x+1)(x−2)+2(x−2)² 을 인수분해.
  category: "공통부분(⑶ 은 두 개) 치환 → 이차·이차동차식 인수분해 → 복원"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "공통부분이 있는 식의 인수분해(치환 · 공통부분 2개)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑶ 은 x+1=A, x−2=B 로 두 덩어리를 한꺼번에 치환해 3A²−5AB+2B² 를 인수분해하는 확장형이지만, 덩어리 자체는 괄호로 보인다.
    복원 뒤 한 인수가 상수 3 으로 줄어드는 것이 학생이 가장 당황하는 지점이다. 핵심문제 구역 출발 ★2 · 통찰 없음 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "a+b=A · x−y=A · (x+1)=A,(x−2)=B 치환 → (3A+1)² · (A+1)(A−6) · (3A−2B)(A−B) → 복원"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $(3a+3b+1)^2$ ⑵ $(x-y+1)(x-y-6)$ ⑶ $3(x+7)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/98-c1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 9·6·1 을 다른 완전제곱 삼항조로 ⑵ 상수 −5 와 빼는 수 6 을 ⑶ 이차동차식 계수(3,−5,2)를 바꿀 수 있다. 제약: ⑶ 은 3A²−5AB+2B² 처럼 A·B 에 대해 인수분해되는 계수여야 하고, 복원 뒤 소거가 일어나 상수만 남을 수 있으므로 두 덩어리의 차(x+1)−(x−2)=3 이 어떤 값이 되는지 미리 확인해야 한다."
    creative: "(1) ⑶ 의 두 덩어리를 x+1, 2x−1 처럼 차수는 같고 소거되지 않게 바꾸면 결과가 두 일차식 곱으로 남아 체감 ★2 유지 (2) 치환 결과가 완전제곱이 되게 만들어 (3A−B)² 꼴로 두면 ★2 (3) 세 소문항 중 인수분해되지 않는 것을 고르게 하는 객관식(★2)."
```

```yaml
- id: GN-M31-98-h2
  page: 98
  vendor_label: "핵심문제 익히기 · 핵심문제 2"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    ⑴ a²−ab−ac+bc ⑵ x²−y²+5x−5y ⑶ 4x²+4x+1−y² ⑷ 2xy+1−x²−y² 을 인수분해.
  category: "항이 4개인 식 → 2항+2항 또는 (완전제곱 3항)+1항 → 공통인수·합차공식"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "항이 4개인 식의 인수분해(2항+2항 · 3항+1항)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    묶는 단위가 두 가지뿐이고 유형 제목이 그 두 가지를 알려 준다. ⑷ 는 −(x²−2xy+y²) 로 −를 묶어내야 1−(x−y)² 가 보이는 T-부호 함정이 있으나 표준 처리다.
    핵심문제 구역 출발 ★2 · 통찰 없음 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "2항+2항(⑴⑵) 또는 완전제곱 3항+1항(⑶⑷)으로 묶기 → 공통인수 또는 a²−b²=(a+b)(a−b)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $(a-b)(a-c)$ ⑵ $(x-y)(x+y+5)$ ⑶ $(2x+y+1)(2x-y+1)$ ⑷ $(x-y+1)(-x+y+1)$'
  answer_source: "본문 답(쪽 이미지)"
  figure: none
  latex: latex-bank/gn-m31/items/98-h2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 문자 조합(a,b,c) ⑵ 뒤 두 항의 계수 5 ⑶ 완전제곱 3항의 계수(4,4,1) ⑷ 부호 배치를 바꿀 수 있다. 제약: ⑶⑷ 는 묶어낸 3항이 정확히 완전제곱식이어야 하고, ⑷ 처럼 −로 묶는 경우 결과의 두 인수 부호를 어느 쪽에 남길지 답 표기를 함께 정해야 한다."
    creative: "(1) 항 순서를 섞어 묶을 짝이 인접하지 않게 하면(98-c2⑵ 처럼) 착안이 붙어 체감 ★2 상단 (2) 문자를 하나 더 넣어 항 5개로 만들면 100-h6 골조(★3) (3) 네 식 중 (x−y) 를 인수로 갖는 것을 모두 고르게 하면 101-02 골조(★2)."
```

```yaml
- id: GN-M31-98-c2
  page: 98
  vendor_label: "핵심문제 익히기 · 확인 2"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    ⑴ xy−3y−2x+6 ⑵ a²+2a+2b−b² ⑶ x²−2xz+z²−y² ⑷ 64−x²−6xy−9y² 을 인수분해.
  category: "항이 4개인 식 → 묶을 짝 정하기 → 공통인수·합차공식"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "항이 4개인 식의 인수분해(2항+2항 · 3항+1항)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑵ 는 인접한 두 항끼리가 아니라 a²−b² 와 2a+2b 를 짝지어야 풀려 묶을 짝 선택이 한 번 들어간다. ⑷ 는 x²+6xy+9y² 을 −로 묶어내는 T-부호 처리.
    선택지가 두 가지뿐이고 실패해도 즉시 되돌아오므로 전략 분기(I-SC)로는 세지 않는다. 핵심문제 구역 출발 ★2 · 통찰 없음 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "묶을 짝 정하기 → y(x−3)−2(x−3) · (a+b)(a−b)+2(a+b) · (x−z)²−y² · 8²−(x+3y)²"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $(x-3)(y-2)$ ⑵ $(a+b)(a-b+2)$ ⑶ $(x+y-z)(x-y-z)$ ⑷ $(x+3y+8)(-x-3y+8)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/98-c2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 계수 쌍(1,−3,−2,6) ⑵ 일차항 계수 2 ⑶ 완전제곱 3항의 문자(x,z) ⑷ 상수 64 와 3y 의 계수를 바꿀 수 있다. 제약: ⑴ 은 두 짝의 비가 같아야 하고, ⑷ 의 상수는 완전제곱수여야 합차공식으로 떨어진다(64 → 25 · 100)."
    creative: "(1) ⑵ 처럼 묶을 짝이 떨어져 있는 배열만 모아 네 소문항으로 구성하면 체감 ★3 (2) ⑶ 에 −2xy 항을 더해 항 5개로 만들면 정리할 문자 선택이 붙어 ★3 (3) 인수분해한 식의 두 인수의 합·차를 묻는 꼴로 바꾸면 101-06 골조(★3)."
```

```yaml
- id: GN-M31-99-h3
  page: 99
  vendor_label: "핵심문제 익히기 · 핵심문제 3"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    ⑴ 2.35×39+2.35×61 ⑵ 86²+2×86×4+4² ⑶ √(53²−47²) 를 인수분해 공식으로 계산.
  category: "쓸 공식을 골라 수를 고쳐 쓰기 → 공통인수·완전제곱식·합차공식 → 암산"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "인수분해 공식을 이용한 수의 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    97-04 와 달리 빈칸이 없어 세 식 각각에 어떤 공식을 쓸지 학생이 고른다. 다만 식의 모양이 공식과 1:1로 대응해 판단이 한눈에 끝난다.
    ⑶ 은 합차공식 뒤 √600 을 10√6 으로 정리하는 근호 처리가 한 단계 더 붙는다. 핵심문제 구역 출발 ★2 · 통찰 없음 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "2.35(39+61)=235 · (86+4)²=8100 · √{(53+47)(53−47)}=√600=10√6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $235$ ⑵ $8100$ ⑶ $10\sqrt{6}$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/99-h3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 공통인수 2.35 와 합이 100 인 두 수 ⑵ 기준수 86·4 ⑶ 합·차가 100·6 이 되는 두 수를 바꿀 수 있다. 제약: ⑵ 는 두 수의 합이 10의 배수여야 하고, ⑶ 은 (a+b)(a−b) 가 완전제곱×작은 수로 떨어져야 근호가 정리된다(53,47 → 41,9 등은 확인 필요)."
    creative: "(1) 세 계산을 분수 한 덩어리로 묶어 약분까지 가게 하면 101-03 골조(★2) (2) 어떤 공식을 쓰는 것이 가장 빠른지 고르는 객관식(★2) (3) 근호 안을 53²−47² 대신 53²+2×53×47+47² 로 바꾸면 완전제곱 → 근호가 바로 벗겨짐(★1~2)."
```

```yaml
- id: GN-M31-99-c3
  page: 99
  vendor_label: "핵심문제 익히기 · 확인 3"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    ⑴ 35×97−35×94 ⑵ 103²−6×103+9 ⑶ 8.5²−1.5² 을 인수분해 공식으로 계산.
  category: "공통인수 묶기 · 완전제곱식 · 합차공식으로 고쳐 암산"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "인수분해 공식을 이용한 수의 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑵ 만 9=3² 을 보고 (103−3)² 로 읽는 한 단계가 있고 나머지는 한 줄로 끝난다.
    [분류 이슈] 통찰 0 · M_total 5 이므로 v3.8 −1 조정 후보(★1)이나, 확인문제는 짝 핵심문제(99-h3)와 같은 구역·같은 유형이라 구역 신호대로 ★2 로 두고 기록만 한다.
  tier: star_2
  mechanism_primary: "35(97−94)=105 · (103−3)²=10000 · (8.5+1.5)(8.5−1.5)=70"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $105$ ⑵ $10000$ ⑶ $70$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/99-c3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 공통인수 35 와 차가 작은 두 수 ⑵ 기준수 103 과 빼는 수 3 ⑶ 합이 10 인 두 소수를 바꿀 수 있다. 제약: ⑵ 는 상수항이 (중간항 계수/2)² 와 정확히 같아야 완전제곱식이 되고, ⑶ 은 합·차가 모두 깔끔한 수여야 암산 이득이 남는다."
    creative: "(1) ⑵ 의 상수를 9 대신 8 처럼 어긋나게 주고 왜 공식을 못 쓰는지 설명하게 하면 개념 확인형(★2) (2) 세 값을 계산해 크기 순으로 나열하게 하기(★2) (3) 분모·분자에 나눠 배치해 약분시키면 101-03 골조(★2)."
```

```yaml
- id: GN-M31-99-h4
  page: 99
  vendor_label: "핵심문제 익히기 · 핵심문제 4"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    x=1/(√2+1), y=1/(√2−1) 일 때 ⑴ x²y+xy² ⑵ x²−y² 의 값.
  category: "분모 유리화 → x+y·xy·x−y 먼저 구하기 → 인수분해한 꼴에 대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "인수분해 공식을 이용하여 식의 값 구하기(켤레 유리화)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    유형 제목이 「인수분해한 뒤 대입」 순서를 지정하고, 소문항이 xy(x+y) · (x+y)(x−y) 로 곧장 읽히는 꼴이다.
    x−y 가 −2 로 음수가 되는 부호(T-부호)가 유일한 함정. 핵심문제 구역 출발 ★2 · 통찰 없음 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "유리화로 x=√2−1, y=√2+1 → x+y=2√2, xy=1, x−y=−2 → xy(x+y) · (x+y)(x−y) 에 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $2\sqrt{2}$ ⑵ $-4\sqrt{2}$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/99-h4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모의 켤레쌍(√2±1 → √3±√2 · √5±2)과 묻는 식(x²y+xy² → x³+x²y 등)을 바꿀 수 있다. 제약: 켤레쌍이어야 xy 가 유리수로 떨어지고, x 와 y 를 바꿔 놓으면 x−y 의 부호가 뒤집혀 ⑵ 의 답 부호가 달라진다."
    creative: "(1) x+y 와 xy 만 조건으로 주고 유리화를 빼면 ★2 하단 (2) x²+y² 나 x/y+y/x 를 묻게 하면 곱셈 공식의 변형 단원과 결합 ★3 (3) x−y 의 부호를 학생이 판단해야 하도록 대소 조건만 주면 T-부호 함정이 커져 ★3."
```

```yaml
- id: GN-M31-99-c4
  page: 99
  vendor_label: "핵심문제 익히기 · 확인 4"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    x=1/(√3−√2), y=1/(√3+√2) 일 때 ⑴ x²y−xy² ⑵ x²+2xy+y² 의 값.
  category: "분모 유리화 → x+y·xy·x−y 먼저 구하기 → 인수분해한 꼴에 대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "인수분해 공식을 이용하여 식의 값 구하기(켤레 유리화)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    99-h4 와 같은 골조이고 ⑵ 가 완전제곱식 (x+y)² 로 바뀐 것뿐이다. 이번에는 x 가 큰 쪽이라 x−y 가 양수로 나온다.
    핵심문제 구역(확인문제) 출발 ★2 · 통찰 없음 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "유리화로 x=√3+√2, y=√3−√2 → x+y=2√3, xy=1, x−y=2√2 → xy(x−y) · (x+y)² 에 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $2\sqrt{2}$ ⑵ $12$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/99-c4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "켤레쌍(√3±√2)과 묻는 식의 조합을 바꿀 수 있다. 제약: 두 근호의 차가 1 이 되는 쌍(√3,√2 / √5,√4)이라야 xy=1 로 떨어져 계산이 가벼워지고, x−y 는 순수 무리수로 남아야 ⑴ 의 답이 정리된다."
    creative: "(1) ⑵ 를 x²−2xy+y² 로 바꾸면 (x−y)²=8 로 답이 무리수 없는 정수로 유지되면서 부호 판단이 필요해짐(★2) (2) x²+y² 를 추가하면 곱셈 공식 변형과 결합(★3) (3) x,y 를 주지 않고 x+y·xy 만 주면 ★2 하단."
```

```yaml
- id: GN-M31-100-h5
  page: 100
  vendor_label: "핵심문제 익히기 · 핵심문제 5 (UP)"
  vendor_level: "-"
  vendor_tags: ["UP"]
  category_type: "핵심문제"
  summary: |
    (x−1)(x−3)(x+2)(x+4)+24 를 인수분해.
  category: "상수항의 합이 같도록 짝짓기 → 공통부분 치환 → 이차식 인수분해 → 복원 후 재인수분해"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "네 일차식을 곱하는 순서를 바꿔 상수항의 합이 같은 (x−1)(x+2) · (x−3)(x+4) 로 짝지어야 공통부분 x²+x 가 생긴다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "( )( )( )( )+k 꼴의 인수분해(짝짓기 후 치환)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    짝을 어떻게 짓느냐가 이 문항의 전부다. −1+2=1, −3+4=1 을 맞춰야 두 이차식의 x 부분이 같아진다는 착안(EQV d2) 하나.
    치환한 이차식을 인수분해한 뒤 복원하면 두 이차식이 남는데 그중 하나가 다시 인수분해되는 마무리를 놓치기 쉽다.
    핵심문제 구역 출발 ★2 + UP 태그 +1 · 통찰 1개 d2 → ★3.
  tier: star_3
  mechanism_primary: "A=x²+x 로 (A−2)(A−12)+24=A²−14A+48=(A−6)(A−8) → 복원 → (x+3)(x−2)(x²+x−8)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$(x-2)(x+3)(x^2+x-8)$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/100-h5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 상수(−1,−3,+2,+4)와 더하는 수 24 를 바꿀 수 있다. 제약: 두 짝의 상수항 합이 서로 같아야(−1+2=−3+4) 공통부분이 생기고, 치환 뒤 A 이차식이 정수 계수로 인수분해되도록 더하는 수를 맞춰야 한다. 복원한 두 이차식 중 몇 개가 더 인수분해되는지가 답 모양을 바꾸므로 상수 선택 시 함께 확인한다."
    creative: "(1) 짝짓기를 발문에 미리 써 주면 치환 연습이 되어 ★2 (2) 더하는 수를 완전제곱이 되도록 잡아 (A+k)² 로 떨어뜨리면 100-c5⑵ 골조(★3 유지) (3) 복원한 두 이차식이 모두 더 인수분해되지 않게 하면 마무리 단계가 빠져 ★2 (4) 결과의 서로 다른 인수의 개수나 x 계수의 합을 묻는 객관식으로 바꿔도 통찰은 그대로 ★3."
```

```yaml
- id: GN-M31-100-c5
  page: 100
  vendor_label: "핵심문제 익히기 · 확인 5"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    ⑴ (x+1)(x+2)(x−3)(x−4)+4 ⑵ (a−1)(a−3)(a−5)(a−7)+16 을 인수분해.
  category: "상수항의 합이 같도록 짝짓기 → 공통부분 치환 → 이차식 인수분해 → 복원"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "인접한 괄호끼리가 아니라 상수항의 합이 같은 짝(x+1)(x−3) · (x+2)(x−4) / (a−1)(a−7) · (a−3)(a−5) 로 묶어야 공통부분이 생긴다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "( )( )( )( )+k 꼴의 인수분해(짝짓기 후 치환)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑴ 은 적힌 순서대로 묶으면 공통부분이 안 생겨 짝을 바꿔야 하고, ⑵ 는 등차로 놓인 네 수에서 양 끝끼리·안쪽끼리 묶는 감각을 요구한다. 착안 지점은 100-h5 와 같다.
    [분류 이슈] UP 태그는 짝 핵심문제(100-h5)에만 인쇄돼 있어 확인문제 자체의 벤더 신호는 ★2 출발이다. 골조와 착안이 h5 와 동일해 ★3 으로 두고 기록만 한다.
  tier: star_3
  mechanism_primary: "⑴ A=x²−2x 로 (A−3)(A−8)+4=(A−4)(A−7) ⑵ A=a²−8a 로 (A+7)(A+15)+16=(A+11)² → 각각 복원"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $(x^2-2x-4)(x^2-2x-7)$ ⑵ $(a^2-8a+11)^2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/100-c5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 네 상수(1,2,−3,−4) ⑵ 등차 네 수(−1,−3,−5,−7)와 공차, 더하는 수(4·16)를 바꿀 수 있다. 제약: 짝지은 두 쌍의 상수항 합이 같아야 하고, ⑵ 처럼 완전제곱으로 떨어뜨리려면 더하는 수가 두 짝의 상수항 차의 제곱의 1/4 이어야 한다(차 8 → 16)."
    creative: "(1) 답이 완전제곱식이 되도록 더하는 수를 맞춰 「(   )² 꼴로 나타내시오」로 발문하면 검증 요구가 붙어 ★3 유지 (2) 더하는 수를 미지수 k 로 두고 완전제곱식이 될 k 를 묻게 하면 역방향(I-BW) 추가 → ★4 (3) 네 상수를 등차가 아니게 섞어 짝짓기 후보를 늘리면 전략 탐색이 커져 ★3 상단."
```

```yaml
- id: GN-M31-100-h6
  page: 100
  vendor_label: "핵심문제 익히기 · 핵심문제 6 (UP)"
  vendor_level: "-"
  vendor_tags: ["UP"]
  category_type: "핵심문제"
  summary: |
    ⑴ x²−2xy−2y+3+4x ⑵ 2x²−xy−y²+y−7x+6 을 인수분해.
  category: "차수가 낮은 문자에 대해 내림차순 정리 → 공통인수 묶기 또는 이차식 인수분해"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "항이 흩어진 식을 두 문자 중 차수가 낮은 y 에 대한 내림차순으로 다시 써야 ⑴ 공통인수 (x+1) 이 보이고 ⑵ y 에 대한 이차식 인수분해로 환원된다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "항이 5개 이상인 식의 인수분해(차수가 낮은 문자에 대해 정리)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    97-03 이 빈칸으로 알려 주던 「어느 문자로 정리할지」를 학생이 직접 고른다. 잘못 고르면 이차식 두 겹이 되어 진행이 막히는 것이 이 유형의 핵심(EQV d2).
    ⑵ 는 y 에 대해서도 이차라서 상수항 2x²−7x+6=(x−2)(2x−3) 을 먼저 인수분해한 뒤 십자셈으로 맞춰야 해 계산 부담이 한 단계 크다.
    핵심문제 구역 출발 ★2 + UP 태그 +1 · 통찰 1개 d2 → ★3.
  tier: star_3
  mechanism_primary: "⑴ y 로 정리 → −2y(x+1)+(x+1)(x+3) → (x+1)(x−2y+3) ⑵ y 로 정리 후 상수항 (x−2)(2x−3) 인수분해 → 십자셈 → (x−y−2)(2x+y−3)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $(x+1)(x-2y+3)$ ⑵ $(x-y-2)(2x+y-3)$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/100-h6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ y 계수 −2 와 x 이차식의 두 근(−1,−3) ⑵ 이차항 계수(2,−1,−1)와 일차항(1,−7), 상수 6 을 바꿀 수 있다. 제약: ⑴ 은 y 계수로 뽑히는 일차식이 x 이차식의 인수와 같아야 하고, ⑵ 는 최고차항 2x²−xy−y² 과 상수항 2x²−7x+6 이 모두 정수 계수로 인수분해되며 십자셈이 일차항과 맞아떨어져야 한다."
    creative: "(1) 정리할 문자를 발문에 지정해 주면 97-03 골조(★1~2) (2) 두 문자의 차수를 같게(둘 다 이차) 만들면 어느 쪽으로 정리해도 이차라 전략 선택(I-SC)이 생겨 ★4 후보 (3) 인수분해 결과의 두 일차식의 합·차를 묻게 하면 101-06 골조(★3 유지) (4) 문자를 셋으로 늘리면 묶는 단위 탐색이 커져 ★4."
```

```yaml
- id: GN-M31-100-c6
  page: 100
  vendor_label: "핵심문제 익히기 · 확인 6"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    ⑴ x²+xy−5x−2y+6 ⑵ x²+xy−2y²−x+7y−6 을 인수분해.
  category: "차수가 낮은 문자에 대해 내림차순 정리 → 공통인수 묶기 또는 이차식 인수분해"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "⑴ 은 y 에 대한 일차식으로 정리해 공통인수 (x−2) 를 뽑고, ⑵ 는 y 에 대한 이차식으로 정리해야 인수분해가 진행된다는 재배열 착안"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "항이 5개 이상인 식의 인수분해(차수가 낮은 문자에 대해 정리)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    100-h6 와 같은 골조다. ⑵ 는 x·y 가 모두 이차라 어느 쪽으로 정리해도 이차식이 되므로 최고차항 x²+xy−2y²=(x−y)(x+2y) 를 먼저 쪼개고 상수항으로 맞추는 순서를 잡아야 한다.
    [분류 이슈] UP 태그는 짝 핵심문제(100-h6)에만 인쇄돼 있어 확인문제 자체 신호는 ★2 출발이다. 골조·착안이 같아 ★3 으로 두고 기록만 한다.
  tier: star_3
  mechanism_primary: "⑴ y 로 정리 → y(x−2)+(x−2)(x−3) → (x−2)(x+y−3) ⑵ 최고차항 (x−y)(x+2y) 를 잡고 상수 −6 으로 맞춤 → (x−y+2)(x+2y−3)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $(x-2)(x+y-3)$ ⑵ $(x-y+2)(x+2y-3)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/100-c6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ y 계수 (x−2) 와 x 이차식의 두 근(2,3) ⑵ 이차항 계수(1,1,−2)와 일차항(−1,7), 상수 −6 을 바꿀 수 있다. 제약: ⑵ 는 최고차 동차식과 상수항이 각각 인수분해되고 두 조합의 십자셈이 일차항 −x+7y 와 정확히 맞아야 한다 — 상수만 바꾸면 거의 대부분 인수분해가 깨진다."
    creative: "(1) ⑵ 에서 상수항을 미지수로 두고 인수분해되도록 하는 값을 묻게 하면 역방향(I-BW) 추가 ★4 (2) 결과의 두 일차식 중 하나를 보기로 주고 나머지를 묻는 꼴로 바꾸면 ★2~3 (3) ⑴ 을 세 문자 x,y,z 로 늘리면 묶는 단위 탐색이 커져 ★4."
```

### 이런 문제가 시험에 나온다

```yaml
- id: GN-M31-101-01
  page: 101
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    4(x+4)²−12(x+4)−7 을 인수분해하면 (2x+a)(2x+b) 일 때 a−b 의 값(a>b). 5지선다.
  category: "공통부분 치환 → 인수분해 → (2x+a) 꼴로 읽어 상수 비교"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "공통부분이 있는 식의 인수분해 — 인수의 계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    치환·인수분해는 98-h1 과 같고, 복원한 결과를 문제가 지정한 (2x+a)(2x+b) 꼴로 읽어 상수만 비교하는 한 단계가 붙는다.
    a>b 조건을 보지 않으면 부호가 뒤집히는 T-부호 함정. 시험 구역 출발 ★2~3 · 통찰 없음 → ★2.
  tier: star_2
  mechanism_primary: "x+4=A → 4A²−12A−7=(2A+1)(2A−7) → 복원 (2x+9)(2x+1) → a=9,b=1 → a−b=8"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '③'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/101-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공통부분(x+4)과 A 이차식의 계수(4,−12,−7)를 바꿀 수 있다. 제약: 최고차 계수가 제곱수여야 복원 결과가 (2x+a) 꼴로 읽히고, 치환한 이차식이 정수 계수로 인수분해되며 복원 뒤 두 인수의 x 계수가 같아야 발문이 성립한다."
    creative: "(1) a+b 나 ab 를 묻게 하면 부호 함정이 줄어 ★2 하단 (2) 인수분해 결과가 (2x+a)² 꼴이 되도록 만들어 a 하나만 묻기(★2) (3) 인수분해되지 않는 계수를 섞어 「인수분해되도록 하는 상수」를 묻게 하면 역방향 ★3."
```

```yaml
- id: GN-M31-101-02
  page: 101
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    a²b+a−b−ab² 의 인수인 것을 보기 다섯 중 모두 고르기(정답 2개).
  category: "항이 4개인 식 → 2항씩 묶어 공통인수 (ab+1) → 보기와 대조"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "항이 4개인 식의 인수분해 — 인수 찾기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a²b 와 a, −b 와 −ab² 를 짝지어 (ab+1) 을 뽑는 묶기 한 번이면 끝나고, 보기 대조는 눈으로 확인한다.
    [분류 이슈] 통찰 0 · M_total 5 로 v3.8 −1 조정 후보(★1)이나 시험 구역(★2~3 출발)과 「모두 고르기」 형식을 감안해 ★2 로 두고 기록만 한다.
  tier: star_2
  mechanism_primary: "a(ab+1)−b(ab+1)=(ab+1)(a−b) → 보기에서 a−b 와 ab+1 선택"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '②, ⑤'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/101-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 항의 부호·문자 배치(a²b+a−b−ab²)와 보기 다섯 개의 미끼(ab, a+b, ab−1)를 바꿀 수 있다. 제약: 두 짝의 공통인수가 정확히 하나로 떨어져야 하고, 미끼는 실제 인수와 부호·순서만 다른 식으로 두어야 변별이 생긴다."
    creative: "(1) 항을 다섯 개로 늘려 정리할 문자를 고르게 하면 100-c6 골조(★3) (2) 인수가 아닌 것을 하나 고르는 형식으로 뒤집기(★2) (3) 인수분해한 결과에 특정 값을 대입한 값을 묻게 하면 식의 값 골조와 결합(★2)."
```

```yaml
- id: GN-M31-101-03
  page: 101
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    분수식 (1000×1001+1000)/(1001²−1) 을 인수분해 공식으로 계산.
  category: "분자는 공통인수, 분모는 합차공식으로 인수분해 → 약분"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "인수분해 공식을 이용한 수의 계산(분수식 약분)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분자에서 1000 을 묶어 1000×1002, 분모를 (1001+1)(1001−1)=1002×1000 으로 고치면 통째로 약분된다. 큰 수를 직접 계산하지 않는다는 발문 지시가 이미 길을 알려 준다.
    시험 구역 출발 ★2~3 · 통찰 없음 · M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "분자 1000(1001+1) · 분모 (1001+1)(1001−1) → 약분 → 1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/101-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준수 1000·1001 을 다른 연속 정수쌍(100·101, 2000·2001)으로 바꿀 수 있다. 제약: 분자의 공통인수와 분모의 (a+1)(a−1) 두 인수가 서로 약분되도록 기준수를 연속으로 두어야 답이 정수로 떨어진다. 약분이 완전하지 않게 만들면 답이 분수가 되므로 표기를 함께 정한다."
    creative: "(1) 답이 1 이 아니라 분수가 되도록 분자의 한 인수를 어긋나게 두면 계산 마무리가 붙어 ★2 상단 (2) 분모를 1001²−2×1001+1 같은 완전제곱으로 바꾸면 공식 선택이 한 번 더(★2) (3) 문자식 (a²+a)/(a²−1) 로 일반화하면 Mₐ 가 올라 ★3."
```

```yaml
- id: GN-M31-101-04
  page: 101
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    a=3−2√2, b=3+2√2 일 때 a³b−ab³ 의 값.
  category: "ab(a+b)(a−b) 로 인수분해 → ab·a+b·a−b 를 먼저 구해 대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "인수분해 공식을 이용하여 식의 값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ab 로 묶고 남은 a²−b² 를 합차공식으로 한 번 더 쪼개는 2단 인수분해가 유일한 요구다. 골조는 99-h4 와 같고 켤레쌍이라 ab=1, a+b=6 이 즉시 나온다.
    a−b 가 음수(−4√2)라는 부호(T-부호)가 함정. 시험 구역 출발 ★2~3 · 통찰 없음 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "a³b−ab³=ab(a+b)(a−b) → ab=1, a+b=6, a−b=−4√2 → −24√2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-24\sqrt{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/101-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "켤레쌍 3±2√2 의 유리수부·무리수부와 묻는 식(a³b−ab³ → a³b+ab³ 등)을 바꿀 수 있다. 제약: 켤레쌍이어야 ab 가 유리수(여기선 9−8=1)로 떨어지고, a 와 b 를 바꿔 쓰면 a−b 의 부호가 뒤집혀 답의 부호가 달라진다. a³b+ab³ 로 바꾸면 a²+b² 가 필요해 곱셈 공식 변형이 추가된다."
    creative: "(1) a+b·ab 만 조건으로 주면 ★2 하단 (2) a³b+ab³ 로 바꾸면 a²+b²=(a+b)²−2ab 한 단계가 더 붙어 ★3 (3) a,b 의 대소를 조건으로만 주고 a−b 의 부호를 학생이 정하게 하면 T-부호 함정이 커져 ★3."
```

```yaml
- id: GN-M31-101-05
  page: 101
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    x+y=√5−2, x−y=√5+2 일 때 x²−y²+4x+4 의 값.
  category: "조건이 그대로 쓰이도록 (x+2)²−y² 로 묶기 → (x+y+2)(x−y+2) 에 대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "x²+4x+4 를 한 덩어리 (x+2)² 로 보고 y² 와 합차공식으로 묶어야 주어진 x+y·x−y 가 그대로 들어가는 꼴이 된다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "인수분해 공식을 이용하여 식의 값 구하기(조건에 맞춰 묶기)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    x²−y² 만 보고 (x+y)(x−y) 로 쪼개면 남은 4x+4 를 처리할 수 없다. 네 항을 3항+1항으로 다시 묶어 (x+2)²−y² 를 만들어야 조건 두 개가 딱 맞는다는 착안(EQV d2)이 핵심이다.
    x,y 를 각각 구해 대입해도 풀리지만 계산이 훨씬 길어지는 갈림길이기도 하다.
    시험 구역 출발 ★2~3 · 통찰 1개 d2 → ★3.
  tier: star_3
  mechanism_primary: "x²−y²+4x+4=(x+2)²−y²=(x+y+2)(x−y+2) → √5×(√5+4)=5+4√5"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$5+4\sqrt{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/101-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항·상수항(4x+4)의 짝과 조건값(√5∓2)을 바꿀 수 있다. 제약: 일차항 계수의 절반의 제곱이 상수항과 같아야 (x+k)² 로 묶이고(4x+4 → 6x+9 · 2x+1), 그 k 가 x+y·x−y 두 조건에 같은 값으로 더해지므로 조건값이 그만큼 이동한 뒤에도 근호가 정리되는지 확인해야 한다."
    creative: "(1) y 쪽에도 일차항을 붙여 (x+2)²−(y−1)² 꼴로 만들면 묶기 두 번 → ★4 후보 (2) 조건을 x+y 와 xy 로 주면 x−y 를 먼저 만들어야 해 단계 추가(★3~4) (3) 묶을 3항을 발문에서 괄호로 표시해 주면 착안이 사라져 ★2."
```

```yaml
- id: GN-M31-101-06
  page: 101
  vendor_label: "이런 문제가 시험에 나온다 (UP)"
  vendor_level: "-"
  vendor_tags: ["UP"]
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    x 의 계수가 1 인 두 일차식의 곱이 x²+xy+5x−2y²+10y 일 때 두 일차식의 합.
  category: "차수가 낮은 문자로 정리해 인수분해 → 두 일차식을 찾아 더하기"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "곱의 결과만 주어진 식을 y 에 대한 이차식으로 정리해(최고차 x²+xy−2y²=(x+2y)(x−y)) 두 일차식으로 되돌려야 비로소 합을 물을 수 있다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "항이 5개 이상인 식의 인수분해 — 두 일차식 찾기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    묻는 것은 인수분해 결과가 아니라 두 일차식의 합이라 인수분해를 끝내야 답에 닿는다. 「x 의 계수가 1」이라는 단서로 (x+2y)(x−y+5) 꼴을 확정하는 되돌리기 착안(EQV d2) 하나.
    항이 다섯이고 y 가 이차라 최고차 동차식을 먼저 쪼개 상수·일차항으로 맞추는 순서가 필요하다. 시험 구역 출발 ★2~3 + UP 태그 → ★3.
  tier: star_3
  mechanism_primary: "최고차 x²+xy−2y²=(x+2y)(x−y) 로 쪼개고 5x+10y 로 맞춤 → (x+2y)(x−y+5) → 합 2x+y+5"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2x+y+5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/101-06.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "최고차 동차식의 계수(1,1,−2)와 일차항(5x,10y)을 바꿀 수 있다. 제약: 동차식이 정수 계수 두 일차식으로 쪼개지고, 일차항이 그 두 인수 중 한쪽에만 상수로 붙는 꼴(여기선 +5 가 x−y 쪽)로 맞아야 한다 — 양쪽에 상수가 붙으면 상수항이 생겨 항 개수가 달라진다."
    creative: "(1) 두 일차식의 합 대신 차나 곱의 계수 하나를 묻기(★3 유지) (2) 상수항을 넣어 (x+2y+m)(x−y+n) 꼴로 만들면 십자셈 맞추기가 두 겹 → ★4 (3) 「x 의 계수가 1」 단서를 빼면 (2x+…)(…) 후보가 생겨 검증 강제(I-VF)가 붙어 ★4 (4) 인수분해한 식에 값을 대입한 결과를 묻게 하면 식의 값 골조와 결합(★3)."
```

## 표본 판정 요약 (23문)

- ★ 분포: ★1 5 · ★2 12 · ★3 6 · ★4 0 · ★5 0
- 통찰형 6(100-h5 · 100-c5 · 100-h6 · 100-c6 · 101-05 · 101-06) · 절차형 17 · premium 0
- 통찰 유형: I-EQV 6(모두 depth 2) — 이 범위의 통찰은 전부 「식을 어떤 단위로 다시 묶어/정리해 쓸 것인가」의 동치 변환이다. I-SC·I-VF·I-SYM·I-XU 는 없다(그래서 ★4~5 없음).
- M_total 분포: 4 → 4문 · 5 → 3문 · 6 → 15문 · 7 → 1문. Mₐ 는 상수 a,b 가 등장하는 101-01 만 2, 나머지는 1.
- type_hint 상위: 「인수분해 공식을 이용하여 식의 값 구하기」 5(97-05 · 99-h4 · 99-c4 · 101-04 · 101-05) · 「항이 4개인 식의 인수분해」 4(97-02 · 98-h2 · 98-c2 · 101-02) · 「공통부분이 있는 식의 인수분해(치환)」 4(97-01 · 98-h1 · 98-c1 · 101-01) · 「항이 5개 이상인 식의 인수분해」 4(97-03 · 100-h6 · 100-c6 · 101-06) · 「인수분해 공식을 이용한 수의 계산」 4(97-04 · 99-h3 · 99-c3 · 101-03) · 「( )( )( )( )+k 꼴」 2(100-h5 · 100-c5)
- 벤더 신호 대비: 구역 출발점에서 ±1 조정한 문항은 6문(UP 태그 +1 3문, 짝 핵심문제와 같은 골조로 +1 2문, 통찰 +1 1문). 2단 이상 어긋난 문항은 없다.
- 그림: 없음(23문 모두 `figure: none`).
- 변형 원본으로서의 요점: 숫자 변형에서 가장 먼저 깨지는 제약은 ① 치환·짝짓기 뒤 이차식의 정수 계수 인수분해 ② 두 짝의 상수항 합 일치(100-h5 · 100-c5) ③ 켤레쌍이어야 xy 가 유리수로 떨어지는 조건(99-h4 · 99-c4 · 101-04) ④ 일차항 계수의 절반의 제곱 = 상수항(101-05)이다.

## 분류 이슈 목록

판정이 애매하거나 벤더 신호와 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-M31-99-c3 | 통찰 0 · M_total 5 로 v3.8 −1 조정 후보이나, 짝 핵심문제 99-h3 와 같은 구역·같은 유형이라 구역 신호대로 ★2 유지 | ★1 / ★2 |
| GN-M31-101-02 | 통찰 0 · M_total 5 로 −1 조정 후보이나 시험 구역 출발점(★2~3)과 「모두 고르기」 형식을 감안해 ★2 유지 | ★1 / ★2 |
| GN-M31-100-c5 | UP 태그가 짝 핵심문제(100-h5)에만 인쇄돼 확인문제 자체 신호는 ★2 출발. 골조·착안(짝짓기 EQV d2)이 동일해 ★3 으로 둠 | ★2 / ★3 |
| GN-M31-100-c6 | UP 태그가 짝 핵심문제(100-h6)에만 인쇄돼 확인문제 자체 신호는 ★2 출발. 골조·착안(낮은 차수 문자 정리 EQV d2)이 동일해 ★3 으로 둠 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위에서 반복된 type_hint 는 여섯 갈래이고, 그중 다섯은 「공통부분 치환」 「항 4개 묶기」 「수의 계산」 「식의 값」 「항 5개 이상 정리」로 교재의 핵심문제 제목과 1:1 대응한다. 카탈로그를 만들 때 이 다섯은 그대로 유형으로 세우면 된다(base ★ 각각 1~2).
- **따로 세워야 할 유형**: 「( )( )( )( )+k 꼴」(100-h5 · 100-c5). 겉보기에는 「공통부분 치환」의 하위지만 공통부분이 *보이지 않고 짝짓기로 만들어야* 한다는 점에서 착안 요구가 한 단계 높다(base ★ 3 후보).
- **따로 세워야 할 유형**: 「조건식에 맞춰 묶기」(101-05). 「식의 값」 유형에 넣으면 착안이 묻힌다 — 인수분해 대상 식을 조건 꼴에 맞게 *재구성*하는 것이 변별점이므로 base ★ 3 으로 분리 후보.
- **통합해도 될 유형**: 「항이 4개인 식의 인수분해」의 2항+2항과 3항+1항은 별도 유형으로 나눌 실익이 적다(같은 문항 안에 소문항으로 섞여 출제됨). 하나의 유형에 두 갈래 태그로 두는 편이 낫다.
- **통합해도 될 유형**: 97-03(빈칸 유도) 과 100-h6/100-c6(착안 포함)은 같은 유형이되 「정리할 문자 지정 여부」로 base ★ 가 1 ↔ 3 으로 갈린다. 유형은 하나로 두고 난이도 변형 축으로 관리하는 것을 권한다.
- 이 범위에는 I-SC·I-VF·I-SYM·I-XU 통찰이 전혀 없다. ★4~5 슬롯을 만들려면 100-h6 의 「두 문자 모두 이차」 변형이나 101-06 의 「x 계수 단서 제거」 변형처럼 전략 분기·사후 검증을 인위적으로 도입해야 한다(각 블록 `variation_notes.creative` 에 후보를 적어 두었다).
